export const id = 17;
export const ids = [17];
export const modules = {
  35658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => sJ,
      f: () => nJ,
      j: () => DJ,
      m: () => hJ
    });
    var FJ = ZJ(8557),
      UJ = ZJ(35661),
      eJ = ZJ(35665),
      XJ = ZJ(8068),
      AJ = ZJ(1326),
      qJ = ZJ(47),
      jJ = ZJ(60),
      YJ = ZJ(990);

    function hJ() {
      var JJ;
      return (0, AJ.m)(UJ.b, (0, UJ.m)()), (0, YJ.jsx)(YJ.Fragment, {
        children: null === (JJ = (0, UJ.m)()) || void 0 === JJ ? void 0 : JJ.content
      })
    }

    function DJ(JJ) {
      var cJ;
      let {
        show: ZJ
      } = JJ;
      (0, AJ.m)(UJ.b, (0, UJ.m)());
      const jJ = null === (cJ = (0, UJ.m)()) || void 0 === cJ ? void 0 : cJ.menu;
      return (0, qJ.useEffect)((() => {
        var JJ;
        ZJ || (null === jJ || void 0 === jJ || null === (JJ = jJ.onClose) || void 0 === JJ || JJ.call(jJ), (0, eJ.m)())
      }), [ZJ, jJ]), (0, qJ.useEffect)((() => ZJ ? (0, XJ.f)(eJ.v, eJ.c) : void 0), [ZJ]), (0, YJ.jsx)(FJ.c, {
        showing: ZJ,
        globallyUniqueKey: "clientGameMenu",
        children: null === jJ || void 0 === jJ ? void 0 : jJ.content
      })
    }

    function sJ(JJ) {
      let {
        placement: cJ = "bottom"
      } = JJ;
      return (0, YJ.jsx)("div", {
        id: `clientGameHud-${cJ}`,
        style: {
          display: "contents"
        }
      })
    }

    function nJ(JJ) {
      let {
        children: cJ,
        placement: ZJ = "bottom"
      } = JJ;
      const [FJ, UJ] = (0, qJ.useState)(null);
      return (0, qJ.useEffect)((() => {
        UJ(document.getElementById(`clientGameHud-${ZJ}`))
      }), [ZJ]), FJ ? (0, jJ.createPortal)(cJ, FJ) : null
    }
  },
  8557: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(3957),
      UJ = ZJ(3966);

    function eJ(JJ) {
      let {
        children: cJ,
        showing: ZJ,
        globallyUniqueKey: eJ,
        alwaysMountChildren: XJ = !1,
        doGameplayStartStopOnShow: AJ = !0,
        keepsMovement: qJ = !1
      } = JJ;
      return (0, UJ.c)(!0, ZJ, eJ, qJ), (0, FJ.c)(AJ, ZJ), ZJ || XJ ? cJ : null
    }
  },
  35765: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      e: () => XJ,
      f: () => AJ,
      h: () => qJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1017);
    const eJ = 8,
      XJ = "InGameHeaderContainer",
      AJ = "TopRightElements";

    function qJ(JJ) {
      const [cJ] = (0, UJ.d)(), [ZJ, qJ] = (0, FJ.useState)(!1);
      return (0, FJ.useLayoutEffect)((() => {
        if (!JJ) return;
        const cJ = document.querySelector(`.${XJ}`),
          ZJ = document.querySelector(`.${AJ}`),
          FJ = () => {
            const FJ = JJ.getBoundingClientRect(),
              UJ = cJ ? cJ.getBoundingClientRect().right : 0,
              XJ = ZJ ? ZJ.getBoundingClientRect().left : window.innerWidth,
              AJ = FJ.left < UJ + eJ,
              jJ = FJ.right > XJ - eJ;
            qJ(AJ || jJ)
          };
        FJ();
        const UJ = new ResizeObserver(FJ);
        return UJ.observe(JJ), cJ && UJ.observe(cJ), ZJ && UJ.observe(ZJ), () => {
          UJ.disconnect()
        }
      }), [JJ, cJ]), ZJ
    }
  },
  35759: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ
    });
    const FJ = [{
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

    function UJ(JJ, cJ, ZJ) {
      const UJ = Math.abs(JJ - cJ),
        eJ = Date.now() - ZJ;
      for (const XJ of FJ)
        if (JJ < XJ.maxDist) return UJ >= XJ.hardUpdateDist || eJ > XJ.timeBetweenSoftChecks && UJ >= XJ.softUpdateDist;
      return !1
    }
  },
  8068: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      f: () => UJ
    });
    let FJ = null;
    const UJ = function(JJ) {
        const cJ = {
          cycle: JJ,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return FJ = cJ, () => {
          FJ === cJ && (FJ = null)
        }
      },
      eJ = () => {
        var JJ;
        return null !== (JJ = FJ) && void 0 !== JJ && JJ.canCycle() ? FJ.cycle : null
      }
  },
  37517: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ, ZJ) {
      var FJ;
      const {
        width: UJ,
        height: eJ
      } = ZJ, XJ = null !== (FJ = JJ.text) && void 0 !== FJ ? FJ : JJ, AJ = (XJ.x / 100 - .5) * UJ, qJ = (XJ.y / 100 - .5) * eJ, jJ = UJ / 2 - cJ.x;
      if (null !== JJ.text && Math.abs(AJ) <= jJ && qJ >= cJ.top - eJ / 2 && qJ <= eJ / 2 - cJ.bottom) return {
        x: XJ.x,
        y: XJ.y
      };
      const YJ = Math.min(0 === AJ ? 1 / 0 : jJ / Math.abs(AJ), qJ > 0 ? (eJ / 2 - cJ.bottom) / qJ : qJ < 0 ? (cJ.top - eJ / 2) / qJ : 1 / 0);
      return !Number.isFinite(YJ) || YJ < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + AJ * YJ / UJ * 100,
        y: 50 + qJ * YJ / eJ * 100
      }
    }
    ZJ.d(cJ, {
      c: () => FJ
    })
  },
  35665: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => GJ,
      f: () => fJ,
      j: () => AJ,
      l: () => DJ,
      m: () => xJ,
      p: () => hJ,
      t: () => vJ,
      v: () => nJ,
      z: () => rJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17);
    const eJ = "clientGameInventoryButtonsChanged",
      XJ = new Map;

    function AJ() {
      return [...XJ.values()].sort(((JJ, cJ) => {
        var ZJ, FJ;
        return (null !== (ZJ = JJ.order) && void 0 !== ZJ ? ZJ : 0) - (null !== (FJ = cJ.order) && void 0 !== FJ ? FJ : 0)
      }))
    }
    let qJ = null;

    function jJ(JJ) {
      qJ = JJ
    }
    let YJ = !1;

    function hJ(JJ) {
      YJ = !0;
      try {
        JJ.onClick()
      } finally {
        YJ = !1
      }
      JJ.panel && "clientGame" === FJ.d.get("openInGameMenuName") && jJ(JJ.id)
    }

    function DJ() {
      return YJ
    }

    function sJ() {
      return AJ().filter((JJ => JJ.panel && !JJ.disabled))
    }

    function nJ(JJ) {
      const cJ = sJ(),
        ZJ = cJ.findIndex((JJ => JJ.id === qJ));
      return !(ZJ < 0 || cJ.length < 2) && (hJ(cJ[(ZJ + JJ + cJ.length) % cJ.length]), !0)
    }

    function GJ() {
      return null !== qJ && sJ().length > 1
    }

    function fJ() {
      jJ(null)
    }

    function xJ() {
      "inventory" !== FJ.d.get("openInGameMenuName") && jJ(null)
    }

    function rJ() {
      const JJ = qJ;
      return jJ(null), JJ
    }

    function vJ(JJ) {
      return XJ.set(JJ.id, JJ), UJ.i.Uf(eJ, AJ(), !0), () => {
        XJ.get(JJ.id) === JJ && (XJ.delete(JJ.id), UJ.i.Uf(eJ, AJ()))
      }
    }
  },
  35661: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      f: () => fJ,
      j: () => xJ,
      k: () => DJ,
      m: () => jJ,
      n: () => GJ,
      r: () => sJ,
      u: () => YJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(1184),
      XJ = ZJ(35665);
    const AJ = "clientGameUiChanged";
    let qJ = null;

    function jJ() {
      return qJ
    }

    function YJ(JJ, cJ) {
      const ZJ = {
        content: JJ,
        menu: cJ
      };
      return qJ = ZJ, UJ.i.Uf(AJ, qJ, !0), () => {
        qJ === ZJ && (qJ = null, nJ = !1, fJ(), UJ.i.Uf(AJ, null))
      }
    }
    let hJ = null;

    function DJ() {
      return hJ
    }

    function sJ(JJ) {
      return hJ = JJ, () => {
        hJ === JJ && (hJ = null)
      }
    }
    let nJ = !1;

    function GJ() {
      const JJ = FJ.d.get("openInGameMenuName");
      "clientGame" !== JJ && (nJ = "inventory" === JJ), (0, XJ.l)() || (0, XJ.f)(), (0, eJ.h)("InGameMenu"), FJ.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fJ() {
      rJ(!1)
    }

    function xJ() {
      rJ(nJ)
    }

    function rJ(JJ) {
      "clientGame" === FJ.d.get("openInGameMenuName") && FJ.d.set({
        openInGameMenuName: JJ ? "inventory" : null
      }), JJ || (0, XJ.f)(), nJ = !1
    }
  },
  38389: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => fc
    });
    const FJ = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var UJ = ZJ(47),
      eJ = ZJ(35661),
      XJ = ZJ(36052),
      AJ = ZJ(35676),
      qJ = ZJ(1599),
      jJ = ZJ(17);
    const YJ = {
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
    const hJ = 32;

    function DJ(JJ, cJ, ZJ, FJ) {
      return {
        tag: "line",
        attrs: {
          x1: JJ,
          y1: cJ,
          x2: ZJ,
          y2: FJ,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function sJ(JJ) {
      return {
        tag: "circle",
        attrs: {
          cx: hJ,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hJ,
          r: JJ,
          class: "Fill"
        }
      }
    }

    function nJ(JJ, cJ) {
      return {
        tag: "path",
        attrs: {
          d: JJ,
          "stroke-width": cJ
        }
      }
    }

    function GJ(JJ, cJ, ZJ) {
      return {
        tag: "circle",
        attrs: {
          cx: hJ,
          cy: hJ,
          r: JJ,
          "stroke-width": cJ,
          class: ZJ
        }
      }
    }

    function fJ(JJ, cJ, ZJ) {
      return {
        tag: "text",
        attrs: {
          x: JJ,
          y: cJ,
          class: "Fill Label"
        },
        text: ZJ
      }
    }
    const xJ = {
      pistol: JJ => [DJ(hJ, hJ - JJ - 5, hJ, hJ - JJ), DJ(hJ - JJ - 5, hJ, hJ - JJ, hJ), DJ(hJ + JJ, hJ, hJ + JJ + 5, hJ), sJ(1.4)],
      rifle: JJ => [DJ(hJ, hJ - JJ - 8, hJ, hJ - JJ), DJ(hJ, hJ + JJ, hJ, hJ + JJ + 8), DJ(hJ - JJ - 8, hJ, hJ - JJ, hJ), DJ(hJ + JJ, hJ, hJ + JJ + 8, hJ), sJ(1)],
      smg: JJ => {
        const cJ = Math.PI / 2,
          ZJ = [];
        for (let XJ = 0; XJ < 4; XJ++) ZJ.push((UJ = XJ * cJ + .35, eJ = (XJ + 1) * cJ - .35, nJ(`M${hJ+(FJ=6+JJ)*Math.cos(UJ)} ${hJ+FJ*Math.sin(UJ)} A${FJ} ${FJ} 0 0 1 ${hJ+FJ*Math.cos(eJ)} ${hJ+FJ*Math.sin(eJ)}`, 2)));
        var FJ, UJ, eJ;
        return [...ZJ, sJ(1.4)]
      },
      shotgun: JJ => [GJ(JJ, 3, "Ring Outline"), GJ(JJ, 1.5, "Ring")],
      marksman: JJ => [nJ(`M${26-JJ/2} ${39+JJ/2} L32 33 L${38+JJ/2} ${39+JJ/2}`, 2), DJ(14 - JJ, hJ, 24 - JJ, hJ, 1.5), DJ(40 + JJ, hJ, 50 + JJ, hJ, 1.5), DJ(14 - JJ, 30, 14 - JJ, 34, 1.5), DJ(50 + JJ, 30, 50 + JJ, 34, 1.5)],
      machineGun: JJ => {
        const cJ = 10 + JJ,
          ZJ = [];
        for (const [FJ, UJ] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) ZJ.push(nJ(`M${hJ+FJ*cJ} ${hJ+UJ*(cJ-5)} L${hJ+FJ*cJ} ${hJ+UJ*cJ} L${hJ+FJ*(cJ-5)} ${hJ+UJ*cJ}`, 2));
        return [...ZJ, DJ(hJ, 28, hJ, 36, 1.5), DJ(28, hJ, 36, hJ, 1.5)]
      },
      launcher: () => [DJ(14, 30, 50, 30, 1.5), DJ(hJ, 24, hJ, 52, 1.5), DJ(28, 38, 36, 38, 1.5), DJ(29, 44, 35, 44, 1.5), DJ(30, 50, 34, 50, 1.5), fJ(38, 40, "100"), fJ(37, 46, "200"), sJ(1.4, 30)],
      melee: () => [nJ("M32 26 L38 32 L32 38 L26 32 Z", 1.5), sJ(1.2)],
      throwable: () => [sJ(1.6)]
    };

    function rJ(JJ) {
      let {
        tag: cJ,
        attrs: ZJ,
        text: FJ
      } = JJ, UJ = `<${cJ}`;
      for (const [eJ, XJ] of Object.entries(ZJ)) UJ += ` ${eJ}="${XJ}"`;
      return void 0 === FJ ? `${UJ}/>` : `${UJ}>${FJ}</${cJ}>`
    }
    class vJ {
      constructor(JJ, cJ) {
        this.api = JJ, this.localPlayerId = cJ, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = JJ => {
          this.element = JJ, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, JJ && !this.enabled && (JJ.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, qJ.getRemInPx)()))
        }, this.tokens = [jJ.i.subscribe("aimingOverlay", (JJ => {
          this.sniperOverlay = "sniper" === JJ
        })), jJ.i.subscribe("mouseState", (JJ => {
          let {
            isDown: cJ
          } = JJ;
          this.mouseDown = cJ
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      GV(JJ) {
        JJ !== this.enabled && (this.enabled = JJ, this.drawnVisible = null, JJ || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(JJ, cJ) {
        var ZJ, FJ;
        if (!this.enabled) return;
        const {
          api: UJ
        } = this, eJ = UJ.isAlive(this.localPlayerId) && null !== (ZJ = null === (FJ = UJ.WcJ(this.localPlayerId)) || void 0 === FJ ? void 0 : FJ.name) && void 0 !== ZJ ? ZJ : null, XJ = (AJ = eJ) && YJ[AJ] || null;
        var AJ;
        if (this.setOwnsCrosshair(null !== XJ), !this.element) return;
        const qJ = UJ.getHeldGunInaccuracy(),
          jJ = null !== qJ,
          hJ = null !== XJ && !this.sniperOverlay && UJ.isCrosshairShown();
        if (hJ !== this.drawnVisible && (this.drawnVisible = hJ, this.element.style.display = hJ ? "block" : "none"), !hJ) return;
        const DJ = jJ ? function(JJ) {
            return "launcher" === JJ || "melee" === JJ || "throwable" === JJ ? "none" : "shotgun" === JJ ? "cone" : "offset"
          }(XJ) : "none",
          sJ = null !== qJ && void 0 !== qJ ? qJ : 0;
        "cone" === DJ ? this.drawCone(XJ, this.coneRadiusVh(sJ, cJ) * this.gapPerVh, JJ) : (this.coneDrawn = !1, this.draw(XJ, "none" === DJ ? 2 : this.offsetGap(sJ)));
        const nJ = !jJ && this.mouseDown;
        nJ !== this.drawnPressed && (this.drawnPressed = nJ, this.element.classList.toggle("Pressed", nJ))
      }
      dispose() {
        for (const JJ of this.tokens) jJ.i.unsubscribe(JJ);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(JJ, cJ) {
        var ZJ, FJ;
        JJ !== this.drawnFamily ? (this.drawnFamily = JJ, this.drawnGap = cJ, this.element.innerHTML = function(JJ, cJ) {
          return `<svg viewBox="0 0 64 64">${xJ[JJ](cJ).map(rJ).join("")}</svg>`
        }(JJ, cJ), this.shapes = Array.from(null !== (ZJ = null === (FJ = this.element.firstElementChild) || void 0 === FJ ? void 0 : FJ.children) && void 0 !== ZJ ? ZJ : [])) : cJ !== this.drawnGap && (this.drawnGap = cJ, function(JJ, cJ, ZJ) {
          const FJ = xJ[cJ](ZJ);
          for (let UJ = 0; UJ < FJ.length; UJ++)
            for (const [cJ, ZJ] of Object.entries(FJ[UJ].attrs)) {
              const FJ = String(ZJ);
              JJ[UJ].getAttribute(cJ) !== FJ && JJ[UJ].setAttribute(cJ, FJ)
            }
        }(this.shapes, JJ, cJ))
      }
      drawCone(JJ, cJ, ZJ) {
        JJ === this.drawnFamily && this.coneDrawn ? this.shownRadius += (cJ - this.shownRadius) * (1 - Math.exp(-ZJ / 80)) : this.shownRadius = cJ, this.coneDrawn = !0, this.draw(JJ, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(JJ, cJ) {
        if (!(cJ > 0)) return 1;
        const ZJ = JJ * XJ.i / 2;
        return Math.max(50 * Math.tan(ZJ) / cJ, 1)
      }
      offsetGap(JJ) {
        const cJ = 2 + ((0, AJ.c)(JJ) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * cJ) / 2)
      }
      setOwnsCrosshair(JJ) {
        JJ !== this.ownsCrosshair && (this.ownsCrosshair = JJ, document.body.classList.toggle("FrontlineCustomCrosshair", JJ))
      }
    }
    const mJ = "FrontlineCustomDamage",
      QJ = .45,
      EJ = .2;
    class VJ {
      constructor(JJ, cJ) {
        this.api = JJ, this.localPlayerId = cJ, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.tJ = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = JJ => {
          var cJ, ZJ;
          this.clearHits(), this.root = JJ, this.lowLayer = null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.querySelector(".FrontlineDamageLow")) && void 0 !== cJ ? cJ : null, this.arcLayer = null !== (ZJ = null === JJ || void 0 === JJ ? void 0 : JJ.querySelector(".FrontlineDamageArcs")) && void 0 !== ZJ ? ZJ : null, this.showRoot(), this.drawLow()
        }, this.token = jJ.i.subscribe("damagedByOtherPlayer", (JJ => {
          let {
            direction: cJ,
            aJ: ZJ
          } = JJ;
          this.onHurt(cJ, ZJ)
        })), this.syncHealth(), document.body.classList.add(mJ)
      }
      GV(JJ) {
        JJ !== this.enabled && (this.enabled = JJ, document.body.classList.toggle(mJ, JJ), JJ || this.clearHits(), this.showRoot())
      }
      frame(JJ) {
        this.syncHealth(), this.cameraHeading = JJ;
        for (const cJ of this.arcs) this.drawArcAngle(cJ)
      }
      dispose() {
        jJ.i.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(mJ)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const JJ = this.api.getClientOption(this.localPlayerId, "_health"),
          cJ = this.api.getClientOption(this.localPlayerId, "_shield"),
          ZJ = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(JJ, this.readHealth) && Object.is(cJ, this.readShield) && Object.is(ZJ, this.readMaxHealth)) return;
        if (this.readHealth = JJ, this.readShield = cJ, this.readMaxHealth = ZJ, null === JJ || void 0 === JJ || !ZJ) return this.lastHealthPool = null, this.maxHealth = null, this.tJ = 1, this.dead = !1, void this.drawLow();
        const FJ = JJ + (null !== cJ && void 0 !== cJ ? cJ : 0);
        if (null !== this.lastHealthPool && FJ < this.lastHealthPool) {
          const JJ = performance.now(),
            cJ = (this.lastHealthPool - FJ) / ZJ;
          this.lastDrop = JJ - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + cJ,
            at: this.lastDrop.at
          } : {
            frac: cJ,
            at: JJ
          }
        }
        this.dead = JJ <= 0, this.dead && this.clearHits(), this.lastHealthPool = FJ, this.maxHealth = ZJ, this.tJ = JJ > 0 ? JJ / ZJ : 1, this.drawLow()
      }
      onHurt(JJ, cJ) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const ZJ = Math.min(1, this.takeDamageFrac(cJ) / .3);
        null !== JJ && this.showArc(JJ, ZJ), this.flashEdge(null === JJ ? null : JJ - this.cameraHeading, .4 + .6 * ZJ)
      }
      takeDamageFrac(JJ) {
        if (void 0 !== JJ && this.maxHealth) return JJ / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: cJ
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, cJ
      }
      drawLow() {
        if (!this.lowLayer) return;
        const JJ = yJ((QJ - this.tJ) / .25),
          cJ = yJ((EJ - this.tJ) / .15000000000000002),
          ZJ = this.tJ < QJ;
        this.lowLayer.classList.toggle("Active", ZJ), this.lowLayer.classList.toggle("Critical", this.tJ < EJ), this.lowLayer.style.opacity = String(ZJ ? .55 + .3 * JJ + .15 * cJ : 0)
      }
      showArc(JJ, cJ) {
        var ZJ, FJ;
        if (!this.arcLayer) return;
        let UJ = this.arcs.find((cJ => KJ(cJ.direction, JJ) < .6));
        if (!UJ) {
          const cJ = document.createElement("div");
          cJ.className = "FrontlineDamageArc", cJ.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(cJ), UJ = {
            element: cJ,
            direction: JJ,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(UJ)
        }
        UJ.direction = JJ, this.drawArcAngle(UJ);
        const eJ = UJ.fade ? Number(getComputedStyle(UJ.element).opacity) : 0;
        null === (ZJ = UJ.fade) || void 0 === ZJ || ZJ.cancel(), null === (FJ = UJ.pop) || void 0 === FJ || FJ.cancel(), UJ.element.style.opacity = "1";
        const XJ = UJ.element.animate([{
          opacity: eJ
        }, {
          opacity: 1
        }], 144);
        UJ.fade = XJ, UJ.pop = UJ.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * cJ
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const AJ = UJ;
        XJ.onfinish = () => {
          if (AJ.fade !== XJ) return;
          const JJ = AJ.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          JJ.startTime = XJ.startTime, AJ.fade = JJ, JJ.onfinish = () => {
            AJ.fade === JJ && (AJ.element.remove(), SJ(this.arcs, AJ))
          }
        }
      }
      drawArcAngle(JJ) {
        const cJ = JJ.direction - this.cameraHeading;
        (null === JJ.drawnAngle || Math.abs(cJ - JJ.drawnAngle) > .005) && (JJ.drawnAngle = cJ, JJ.element.style.rotate = `${cJ}rad`)
      }
      flashEdge(JJ, cJ) {
        var ZJ, FJ, UJ;
        if (!this.root) return;
        let eJ = this.flashes.find((cJ => null === cJ.angle || null === JJ ? cJ.angle === JJ : KJ(cJ.angle, JJ) < .5));
        if (!eJ) {
          const cJ = document.createElement("div");
          cJ.className = "FrontlineDamageFlash";
          const ZJ = cJ.appendChild(document.createElement("div"));
          ZJ.className = "FrontlineDamageFlashGlow", this.root.insertBefore(cJ, this.arcLayer), eJ = {
            element: cJ,
            glow: ZJ,
            angle: JJ,
            level: 0,
            animation: null
          }, this.flashes.push(eJ)
        }
        const XJ = null === (ZJ = eJ.animation) || void 0 === ZJ || null === (FJ = ZJ.effect) || void 0 === FJ ? void 0 : FJ.getComputedTiming().progress,
          AJ = null === XJ || void 0 === XJ ? 0 : eJ.level * (1 - XJ);
        eJ.level = Math.min(1, Math.max(cJ, AJ + .6 * cJ)), eJ.angle = JJ;
        const {
          x: qJ,
          y: jJ,
          rx: YJ,
          ry: hJ
        } = function(JJ, cJ) {
          const ZJ = window.innerWidth,
            FJ = window.innerHeight;
          if (null === JJ) return {
            x: ZJ / 2,
            y: FJ / 2,
            rx: 0,
            ry: 0
          };
          const UJ = Math.sin(JJ),
            eJ = -Math.cos(JJ),
            XJ = ZJ / 2 / Math.max(1e-6, Math.abs(UJ)),
            AJ = FJ / 2 / Math.max(1e-6, Math.abs(eJ)),
            qJ = Math.min(XJ, AJ),
            jJ = Math.round(ZJ / 2 + UJ * qJ),
            YJ = Math.round(FJ / 2 + eJ * qJ),
            hJ = FJ / 100 * (.85 + .25 * cJ),
            DJ = XJ <= AJ,
            sJ = Math.round((DJ ? 30 : 74) * hJ),
            nJ = Math.round((DJ ? 58 : 26) * hJ);
          return {
            x: jJ,
            y: YJ,
            rx: sJ,
            ry: nJ
          }
        }(JJ, eJ.level), {
          style: DJ
        } = eJ.glow;
        eJ.glow.classList.toggle("Everywhere", null === JJ), DJ.setProperty("--glowX", `${qJ}px`), DJ.setProperty("--glowY", `${jJ}px`), DJ.setProperty("--glowRx", `${YJ}px`), DJ.setProperty("--glowRy", `${hJ}px`), eJ.element.style.transformOrigin = `${qJ}px ${jJ}px`, null === (UJ = eJ.animation) || void 0 === UJ || UJ.cancel();
        const sJ = eJ.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: eJ.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * eJ.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * eJ.level
        });
        eJ.animation = sJ;
        const nJ = eJ;
        sJ.onfinish = () => {
          nJ.animation === sJ && (nJ.element.remove(), SJ(this.flashes, nJ))
        }
      }
      clearHits() {
        for (const FJ of this.arcs) {
          var JJ, cJ;
          null === (JJ = FJ.fade) || void 0 === JJ || JJ.cancel(), FJ.fade = null, null === (cJ = FJ.pop) || void 0 === cJ || cJ.cancel(), FJ.element.remove()
        }
        this.arcs.length = 0;
        for (const FJ of this.flashes) {
          var ZJ;
          null === (ZJ = FJ.animation) || void 0 === ZJ || ZJ.cancel(), FJ.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function KJ(JJ, cJ) {
      return Math.abs(Math.atan2(Math.sin(JJ - cJ), Math.cos(JJ - cJ)))
    }

    function yJ(JJ) {
      return Math.max(0, Math.min(1, JJ))
    }

    function SJ(JJ, cJ) {
      const ZJ = JJ.indexOf(cJ); - 1 !== ZJ && JJ.splice(ZJ, 1)
    }
    var IJ = ZJ(926),
      MJ = ZJ.n(IJ),
      bJ = ZJ(35658),
      wJ = ZJ(35765),
      WJ = ZJ(1086),
      gJ = ZJ(1326);
    const HJ = "frontlineHudChanged",
      PJ = "frontlineScoreboardChanged";
    class kJ {
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
      Qn(JJ) {
        this.wire = JJ, jJ.i.Uf(HJ, JJ, !0)
      }
      receiveScoreboard(JJ) {
        let cJ = "scoreboard" === JJ[0] ? performance.now() + JJ[5] : 0;
        const ZJ = this.scoreboard.endsAt;
        0 !== cJ && 0 !== ZJ && Math.abs(cJ - ZJ) < 1e3 && (cJ = ZJ), this.scoreboard = {
          wire: JJ,
          endsAt: cJ
        }, jJ.i.Uf(PJ, this.scoreboard, !0)
      }
    }
    var pJ = ZJ(990);
    const dJ = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function zJ(JJ) {
      const [cJ, ZJ] = (0, UJ.useState)((() => (JJ - performance.now()) / 1e3));
      return (0, UJ.useEffect)((() => {
        if (0 === JJ) return;
        const cJ = () => {
          ZJ((JJ - performance.now()) / 1e3)
        };
        cJ();
        const FJ = window.setInterval(cJ, 250);
        return () => {
          window.clearInterval(FJ)
        }
      }), [JJ]), cJ
    }

    function NJ(JJ) {
      let {
        className: cJ,
        point: ZJ
      } = JJ;
      const [FJ, UJ, eJ, XJ, AJ, qJ] = ZJ;
      return (0, pJ.jsxs)("div", {
        className: MJ()(cJ, `Owner-${UJ||"None"}`, `Leader-${XJ||"None"}`, {
          Contested: AJ,
          Here: qJ
        }),
        children: [(0, pJ.jsx)("span", {
          className: "FrontlinePointLetter",
          children: FJ
        }), (0, pJ.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${eJ}%`
          }
        })]
      })
    }
    const OJ = (0, UJ.memo)((function(JJ) {
        let {
          points: cJ,
          markers: ZJ
        } = JJ;
        const {
          t: FJ
        } = (0, WJ.F)();
        return cJ ? (0, pJ.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: cJ.map((JJ => {
            const [cJ, , , , , , , UJ] = JJ;
            return (0, pJ.jsxs)("div", {
              ref: ZJ.bindMarker(cJ),
              className: "FrontlinePointMarker",
              children: [(0, pJ.jsx)(NJ, {
                className: "FrontlinePointMarkerTile",
                point: JJ
              }), (0, pJ.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [UJ && (0, pJ.jsx)("span", {
                  className: MJ()("FrontlinePointMarkerHomeTurf", `Team-${UJ}`),
                  children: FJ("frontlineHud:homeTurf", {
                    team: FJ(dJ[UJ])
                  })
                }), (0, pJ.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, cJ)
          }))
        }) : null
      })),
      TJ = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      CJ = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function uJ(JJ) {
      let {
        hud: cJ,
        crosshair: ZJ,
        damage: FJ,
        markers: UJ
      } = JJ;
      const eJ = (0, gJ.m)(HJ, cJ.getWire()),
        XJ = (0, gJ.m)(PJ, cJ.getScoreboard());
      return (0, pJ.jsxs)(pJ.Fragment, {
        children: [(0, pJ.jsx)(iJ, {
          damage: FJ
        }), (0, pJ.jsx)(OJ, {
          points: "scoreboard" === XJ.wire[0] ? XJ.wire[6] : null,
          markers: UJ
        }), (0, pJ.jsx)(LJ, {
          view: XJ
        }), (0, pJ.jsx)("div", {
          className: "FrontlineReticle",
          ref: ZJ.bindElement
        }), (0, pJ.jsx)(bJ.f, {
          children: (0, pJ.jsx)(RJ, {
            wire: eJ
          })
        })]
      })
    }
    const iJ = (0, UJ.memo)((function(JJ) {
        let {
          damage: cJ
        } = JJ;
        return (0, pJ.jsxs)("div", {
          className: "FrontlineDamage",
          ref: cJ.bindElement,
          children: [(0, pJ.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, pJ.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, pJ.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      RJ = (0, UJ.memo)((function(JJ) {
        let {
          wire: cJ
        } = JJ;
        const {
          t: ZJ
        } = (0, WJ.F)();
        if ("capture" === cJ[0]) {
          const [, JJ, FJ, UJ, eJ, XJ, AJ] = cJ, qJ = Math.round(UJ / 100 * 24);
          return (0, pJ.jsxs)("div", {
            className: MJ()("FrontlinePlate", `Status-${FJ}`, `Leader-${eJ||"None"}`),
            children: [(0, pJ.jsx)(oJ, {}), (0, pJ.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, pJ.jsx)("span", {
                className: "FrontlineObjective",
                children: JJ
              }), (0, pJ.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, pJ.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: ZJ("frontlineHud:objective", {
                    point: JJ,
                    friendly: XJ,
                    enemy: AJ
                  })
                }), (0, pJ.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: ZJ(TJ[FJ])
                })]
              }), (0, pJ.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(UJ).padStart(3, "0"), (0, pJ.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, pJ.jsx)(BJ, {
              segments: 24,
              lit: qJ
            })]
          })
        }
        if ("alert" === cJ[0]) {
          const [, JJ, FJ, UJ] = cJ;
          return (0, pJ.jsxs)("div", {
            className: MJ()("FrontlinePlate", "FrontlineAlert", `Tone-${UJ}`),
            children: [(0, pJ.jsx)(oJ, {}), (0, pJ.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: ZJ(CJ[JJ])
            }), (0, pJ.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: FJ
            })]
          })
        }
        return null
      })),
      LJ = (0, UJ.memo)((function(JJ) {
        let {
          view: cJ
        } = JJ;
        const {
          t: ZJ
        } = (0, WJ.F)(), FJ = (0, UJ.useRef)(null), eJ = function(JJ, cJ) {
          const [ZJ, FJ] = (0, UJ.useState)(!1);
          return (0, UJ.useLayoutEffect)((() => {
            const cJ = JJ.current;
            if (!cJ) return;
            const ZJ = document.querySelector(`.${wJ.e}`),
              UJ = document.querySelector(`.${wJ.f}`),
              eJ = () => {
                var JJ;
                const eJ = cJ.querySelector(".FrontlineTeamTrack"),
                  XJ = (0, qJ.getRemInPx)(),
                  AJ = cJ.getBoundingClientRect().width - 2 * (null !== (JJ = null === eJ || void 0 === eJ ? void 0 : eJ.getBoundingClientRect().width) && void 0 !== JJ ? JJ : 0),
                  jJ = window.innerWidth / 2,
                  YJ = ZJ ? ZJ.getBoundingClientRect().right : 0,
                  hJ = UJ ? UJ.getBoundingClientRect().left : window.innerWidth,
                  DJ = Math.min(jJ - YJ, hJ - jJ) - wJ.d - AJ / 2,
                  sJ = DJ < 6 * XJ,
                  nJ = sJ ? (window.innerWidth - AJ) / 2 - wJ.d : DJ;
                cJ.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(nJ,14*XJ)))}px`), FJ(sJ)
              };
            eJ();
            const XJ = new ResizeObserver(eJ);
            for (const JJ of [cJ, ZJ, UJ]) JJ && XJ.observe(JJ);
            return window.addEventListener("resize", eJ), () => {
              XJ.disconnect(), window.removeEventListener("resize", eJ)
            }
          }), [JJ, cJ]), ZJ
        }(FJ, "scoreboard" === cJ.wire[0]);
        if ("scoreboard" !== cJ.wire[0]) return null;
        const [, XJ, AJ, jJ, YJ, , hJ] = cJ.wire, DJ = "Red" === XJ ? "Blue" : "Red";
        return (0, pJ.jsxs)("div", {
          className: MJ()("FrontlineScoreboardContainer", {
            Below: eJ
          }),
          children: [(0, pJ.jsxs)("div", {
            ref: FJ,
            className: "FrontlineScoreboard",
            children: [(0, pJ.jsx)(oJ, {}), (0, pJ.jsx)(aJ, {
              team: XJ,
              tickets: AJ,
              goal: YJ,
              side: "Friendly"
            }), (0, pJ.jsx)("div", {
              className: "FrontlinePoints",
              children: hJ.map((JJ => (0, pJ.jsx)(NJ, {
                className: "FrontlinePoint",
                point: JJ
              }, JJ[0])))
            }), (0, pJ.jsx)(aJ, {
              team: DJ,
              tickets: jJ,
              goal: YJ,
              side: "Enemy"
            })]
          }), (0, pJ.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, pJ.jsx)(tJ, {
              endsAt: cJ.endsAt
            }), (0, pJ.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: ZJ("frontlineHud:ticketGoal", {
                goal: YJ
              })
            })]
          })]
        })
      }));

    function aJ(JJ) {
      let {
        team: cJ,
        tickets: ZJ,
        goal: FJ,
        side: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, WJ.F)(), XJ = String(ZJ).padStart(3, "0"), AJ = XJ.search(/[1-9]/), qJ = -1 === AJ ? XJ : XJ.slice(0, AJ), jJ = Math.min(20, Math.floor(ZJ / FJ * 20));
      return (0, pJ.jsxs)("div", {
        className: MJ()("FrontlineTeamScore", UJ, `Team-${cJ}`),
        children: [(0, pJ.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, pJ.jsx)("span", {
            className: "Lead",
            children: qJ
          }), -1 !== AJ && XJ.slice(AJ)]
        }), (0, pJ.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, pJ.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: eJ(dJ[cJ])
          }), (0, pJ.jsx)(BJ, {
            segments: 20,
            lit: jJ
          })]
        })]
      })
    }

    function BJ(JJ) {
      let {
        segments: cJ,
        lit: ZJ
      } = JJ;
      return (0, pJ.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: cJ
        }, ((JJ, cJ) => (0, pJ.jsx)("i", {
          className: MJ()({
            Lit: cJ < ZJ
          })
        }, cJ)))
      })
    }

    function tJ(JJ) {
      let {
        endsAt: cJ
      } = JJ;
      const ZJ = Math.max(0, Math.ceil(zJ(cJ)));
      return (0, pJ.jsxs)("div", {
        className: MJ()("FrontlineClock", {
          Urgent: ZJ <= 60
        }),
        children: [Math.floor(ZJ / 60), ":", String(ZJ % 60).padStart(2, "0")]
      })
    }

    function oJ() {
      return (0, pJ.jsxs)(pJ.Fragment, {
        children: [(0, pJ.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, pJ.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var lJ = ZJ(35759),
      Jc = ZJ(1151),
      cc = ZJ(37482),
      Zc = ZJ(37517);
    class Fc {
      constructor(JJ) {
        var cJ;
        this.hud = JJ, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.xn = !1, this.Im = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.Im), null === (cJ = window.visualViewport) || void 0 === cJ || cJ.addEventListener("resize", this.Im)
      }
      bindMarker(JJ) {
        let cJ = this.refs.get(JJ);
        return cJ || (cJ = cJ => {
          var ZJ;
          null === (ZJ = this.markers.get(JJ)) || void 0 === ZJ || ZJ.stopObserving(), this.markers.delete(JJ), cJ && !this.xn && this.markers.set(JJ, this.mount(cJ))
        }, this.refs.set(JJ, cJ)), cJ
      }
      frame(JJ, cJ) {
        this.render = JJ;
        const ZJ = this.hud.getScoreboard().wire;
        if ("scoreboard" === ZJ[0] && 0 !== this.markers.size)
          for (const [FJ, , , , , , UJ] of ZJ[6]) {
            const JJ = this.markers.get(FJ);
            JJ && UJ && (JJ.target ??= [0, 0, 0], JJ.target[0] = UJ[0], JJ.target[1] = UJ[1] + 2.5, JJ.target[2] = UJ[2], this.place(JJ), this.vc(JJ, cJ && Math.hypot(UJ[0] - cJ[0], UJ[1] - cJ[1], UJ[2] - cJ[2])))
          }
      }
      dispose() {
        var JJ;
        this.xn = !0, window.removeEventListener("resize", this.Im), null === (JJ = window.visualViewport) || void 0 === JJ || JJ.removeEventListener("resize", this.Im);
        for (const cJ of this.markers.values()) cJ.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(JJ) {
        const {
          render: cJ,
          viewport: ZJ
        } = this;
        if (!cJ || !JJ.target) return;
        const FJ = (50 - cJ.screenBandPct.y) / 100 * ZJ.height,
          UJ = {
            x: JJ.halfSize.width + 8,
            top: JJ.halfSize.height + 8,
            bottom: JJ.halfSize.height + JJ.labelsBelow + FJ
          },
          eJ = cJ.projectWorldPosToViewport(JJ.target),
          XJ = null !== eJ && void 0 !== eJ ? eJ : cJ.projectWorldPosToScreenPos(JJ.target),
          AJ = (0, Zc.c)({
            x: XJ.x,
            y: XJ.y,
            text: eJ
          }, UJ, ZJ);
        (0, cc.c)(JJ.root, Math.round(100 * AJ.x) / 100, Math.round(100 * AJ.y) / 100)
      }
      vc(JJ, cJ) {
        if (null === cJ) return void(null !== JJ.metres && (JJ.metres = null, JJ.distance.textContent = ""));
        const ZJ = Date.now();
        (null === JJ.metres || (0, lJ.e)(cJ, JJ.metres, JJ.metresShownAt)) && (JJ.metres = Math.round(cJ), JJ.metresShownAt = ZJ, JJ.distance.textContent = (0, WJ.z)(Jc.e.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(JJ.metres)
        }))
      }
      mount(JJ) {
        const cJ = {
            root: JJ,
            distance: JJ.querySelector(".FrontlinePointMarkerDistance"),
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
          ZJ = JJ.querySelector(".FrontlinePointMarkerLabels"),
          FJ = new ResizeObserver((() => {
            cJ.halfSize = {
              width: Math.max(JJ.offsetWidth, ZJ.offsetWidth) / 2,
              height: JJ.offsetHeight / 2
            }, cJ.labelsBelow = ZJ.offsetTop + ZJ.offsetHeight - JJ.offsetHeight, this.place(cJ)
          }));
        return FJ.observe(JJ, {
          box: "border-box"
        }), FJ.observe(ZJ, {
          box: "border-box"
        }), cJ.stopObserving = () => {
          FJ.disconnect()
        }, cJ
      }
    }
    var Uc = ZJ(5786),
      ec = ZJ(2260);
    const Xc = "frontlineRoundEndChanged";
    class Ac {
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
      Qn(JJ) {
        const cJ = "roundEnd" === JJ[0] ? performance.now() + JJ[5] : 0;
        this.view = {
          wire: JJ,
          key: this.view.key + 1,
          endsAt: cJ
        }, jJ.i.Uf(Xc, this.view, !0)
      }
    }
    const qc = (0, UJ.lazy)((() => (0, ec.e)(ZJ.e(203).then((() => ZJ(40464))), (JJ => JJ.FrontlineMvpLineup)))),
      jc = [4800, 4e3, 3200],
      Yc = [1, 0, 2],
      hc = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      Dc = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function sc(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, gJ.m)(Xc, cJ.getView()),
        FJ = zJ(ZJ.endsAt);
      return "roundEnd" !== ZJ.wire[0] || 1e3 * FJ < -2e3 ? null : (0, pJ.jsx)(nc, {
        wire: ZJ.wire,
        secondsLeft: Math.max(0, Math.ceil(FJ))
      }, ZJ.key)
    }
    const nc = (0, UJ.memo)((function(JJ) {
      let {
        wire: cJ,
        secondsLeft: ZJ
      } = JJ;
      const {
        t: eJ
      } = (0, WJ.F)(), [, XJ, AJ, qJ, jJ, , YJ, hJ] = cJ, DJ = (0, UJ.useMemo)((() => Yc.filter((JJ => JJ < hJ.length))), [hJ]), sJ = (0, UJ.useMemo)((() => DJ.map((JJ => {
        const [, , , , , cJ, ZJ] = hJ[JJ];
        return {
          cosmetics: FJ.map(((JJ, ZJ) => [JJ, cJ[ZJ]])),
          size: 0 === JJ ? 1.15 : .85,
          heldGun: {
            name: ZJ,
            aimed: 0 === JJ
          },
          showAfterMs: jc[JJ]
        }
      }))), [hJ, DJ]);
      return (0, pJ.jsxs)("div", {
        className: MJ()("FrontlineRoundEnd", `Result-${XJ}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, pJ.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, pJ.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, pJ.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, pJ.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, pJ.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (nJ = eJ(hc[XJ]), /\p{Script=Arabic}/u.test(nJ) ? [nJ] : (0, Uc.c)(nJ)).map(((JJ, cJ) => (0, pJ.jsx)("span", {
              style: {
                "--letter": cJ
              },
              children: JJ
            }, cJ)))]
          }), (0, pJ.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [AJ && "victory" === XJ && (0, pJ.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: eJ("frontlineRoundEnd:comeback")
            }), (0, pJ.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, pJ.jsx)("b", {
                className: "Friendly",
                children: qJ
              }), " \u2013 ", (0, pJ.jsx)("b", {
                className: "Enemy",
                children: jJ
              })]
            })]
          })]
        }), DJ.length > 0 && (0, pJ.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": DJ.length
          },
          children: [(0, pJ.jsx)(UJ.Suspense, {
            fallback: null,
            children: (0, pJ.jsx)(qc, {
              className: "FrontlineRoundEndLineup",
              players: sJ
            })
          }), DJ.map((JJ => (0, pJ.jsx)(Gc, {
            mvp: hJ[JJ],
            place: JJ
          }, JJ)))]
        }), (0, pJ.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: eJ("frontlineRoundEnd:nextFront", {
            map: YJ,
            seconds: String(ZJ)
          })
        })]
      });
      var nJ
    }));

    function Gc(JJ) {
      let {
        mvp: cJ,
        place: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, WJ.F)(), [UJ, eJ, XJ, AJ, qJ] = cJ, [jJ, YJ] = FJ(function(JJ, cJ) {
        return 1 === cJ && "damage" !== JJ ? `frontlineRoundEnd:${JJ}One` : `frontlineRoundEnd:${JJ}`
      }(XJ, AJ), {
        name: "\0",
        count: AJ.toLocaleString()
      }).split("\0");
      return (0, pJ.jsxs)("div", {
        className: MJ()("FrontlineMvpCard", `Place-${ZJ+1}`, `Team-${eJ}`),
        style: {
          "--revealMs": `${jc[ZJ]}ms`
        },
        children: [(0, pJ.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, pJ.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, pJ.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: FJ(Dc[ZJ])
        }), (0, pJ.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [jJ, (0, pJ.jsx)("span", {
            className: "FrontlineMvpName",
            children: UJ
          }), YJ]
        }), (0, pJ.jsx)("div", {
          className: "FrontlineMvpKit",
          children: qJ
        })]
      })
    }
    const fc = function(JJ, cJ, ZJ, FJ) {
      let {
        localPlayerId: XJ
      } = FJ;
      const AJ = new kJ,
        qJ = new Ac;
      let jJ = null,
        YJ = null,
        hJ = null,
        DJ = null,
        sJ = null,
        nJ = [!1, !1];
      const GJ = () => {
        var JJ, cJ;
        const [ZJ, FJ] = nJ;
        null === (JJ = YJ) || void 0 === JJ || JJ.GV(!ZJ), null === (cJ = hJ) || void 0 === cJ || cJ.GV(!FJ)
      };
      return {
        onCreate: JJ => {
          jJ = JJ, YJ = new vJ(JJ, XJ), hJ = new VJ(JJ, XJ), DJ = new Fc(AJ), GJ(), sJ = (0, eJ.u)((0, UJ.createElement)(UJ.Fragment, null, (0, UJ.createElement)(uJ, {
            hud: AJ,
            crosshair: YJ,
            damage: hJ,
            markers: DJ
          }), (0, UJ.createElement)(sc, {
            controller: qJ
          })))
        },
        onClose: () => {
          var JJ, cJ, ZJ, FJ;
          null === (JJ = sJ) || void 0 === JJ || JJ(), null === (cJ = YJ) || void 0 === cJ || cJ.dispose(), YJ = null, null === (ZJ = hJ) || void 0 === ZJ || ZJ.dispose(), hJ = null, null === (FJ = DJ) || void 0 === FJ || FJ.dispose(), DJ = null, jJ = null
        },
        onAfterRender: (JJ, cJ) => {
          var ZJ, FJ, UJ, eJ;
          null === (ZJ = YJ) || void 0 === ZJ || ZJ.frame(JJ, cJ.tanHalfFovY), null === (FJ = hJ) || void 0 === FJ || FJ.frame(cJ.cameraHeading), null === (UJ = DJ) || void 0 === UJ || UJ.frame(cJ, null !== (eJ = jJ) && void 0 !== eJ && eJ.checkValid(XJ) ? jJ.Om(XJ) : null)
        },
        onReceivedMessageFromServer: (JJ, cJ) => {
          "frontlineHud" === JJ ? AJ.Qn(cJ) : "frontlineScoreboard" === JJ ? AJ.receiveScoreboard(cJ) : "frontlineRoundEnd" === JJ ? qJ.Qn(cJ) : "frontlinePrefs" === JJ && (nJ = cJ, GJ())
        }
      }
    }
  },
  5786: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    const FJ = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function UJ(JJ) {
      return null === FJ ? Array.from(JJ) : Array.from(FJ.segment(JJ), (JJ => {
        let {
          segment: cJ
        } = JJ;
        return cJ
      }))
    }
  },
  37482: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ,
      e: () => eJ
    });
    const FJ = new WeakMap;

    function UJ(JJ) {
      let cJ = FJ.get(JJ);
      return cJ || (cJ = {
        hidden: JJ.hidden,
        x: NaN,
        y: NaN
      }, FJ.set(JJ, cJ)), cJ
    }

    function eJ(JJ, cJ) {
      const ZJ = UJ(JJ);
      ZJ.hidden !== cJ && (ZJ.hidden = cJ, JJ.hidden = cJ)
    }

    function XJ(JJ, cJ, ZJ) {
      const FJ = UJ(JJ);
      FJ.x === cJ && FJ.y === ZJ || (FJ.x = cJ, FJ.y = ZJ, JJ.style.translate = `${cJ}vw ${ZJ}vh`)
    }
  },
  36067: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    const FJ = {
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
for (const JJ in modules) Object.freeze(modules[JJ]);