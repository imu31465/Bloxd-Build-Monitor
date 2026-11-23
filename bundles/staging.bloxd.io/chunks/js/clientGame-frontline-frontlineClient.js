export const id = 17;
export const ids = [17];
export const modules = {
  36483: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => MC,
      c: () => gC,
      d: () => NC,
      f: () => WC
    });
    var QC = ZC(34153),
      wC = ZC(36488),
      bC = ZC(36490),
      nC = ZC(8735),
      fC = ZC(1383),
      oC = ZC(48),
      qC = ZC(60),
      FC = ZC(1056);

    function WC() {
      var CC;
      return (0, fC.f)(wC.d, (0, wC.q)()), (0, FC.jsx)(FC.Fragment, {
        children: null === (CC = (0, wC.q)()) || void 0 === CC ? void 0 : CC.content
      })
    }

    function NC(CC) {
      var zC;
      let {
        show: ZC
      } = CC;
      (0, fC.f)(wC.d, (0, wC.q)());
      const qC = null === (zC = (0, wC.q)()) || void 0 === zC ? void 0 : zC.menu;
      return (0, oC.useEffect)((() => {
        var CC;
        ZC || (null === qC || void 0 === qC || null === (CC = qC.onClose) || void 0 === CC || CC.call(qC), (0, bC.p)())
      }), [ZC, qC]), (0, oC.useEffect)((() => ZC ? (0, nC.f)(bC.z, bC.g) : void 0), [ZC]), (0, FC.jsx)(QC.d, {
        showing: ZC,
        globallyUniqueKey: "clientGameMenu",
        children: null === qC || void 0 === qC ? void 0 : qC.content
      })
    }

    function MC(CC) {
      let {
        placement: zC = "bottom"
      } = CC;
      return (0, FC.jsx)("div", {
        id: `clientGameHud-${zC}`,
        style: {
          display: "contents"
        }
      })
    }

    function gC(CC) {
      let {
        children: zC,
        placement: ZC = "bottom"
      } = CC;
      const [QC, wC] = (0, oC.useState)(null);
      return (0, oC.useEffect)((() => {
        wC(document.getElementById(`clientGameHud-${ZC}`))
      }), [ZC]), QC ? (0, qC.createPortal)(zC, QC) : null
    }
  },
  34153: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(4473),
      wC = ZC(4479);

    function bC(CC) {
      let {
        children: zC,
        showing: ZC,
        globallyUniqueKey: bC,
        alwaysMountChildren: nC = !1,
        doGameplayStartStopOnShow: fC = !0,
        keepsMovement: oC = !1
      } = CC;
      return (0, wC.b)(!0, ZC, bC, oC), (0, QC.d)(fC, ZC), ZC || nC ? zC : null
    }
  },
  36564: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      e: () => nC,
      h: () => fC,
      k: () => oC
    });
    var QC = ZC(48),
      wC = ZC(3099);
    const bC = 8,
      nC = "InGameHeaderContainer",
      fC = "TopRightElements";

    function oC(CC) {
      const [zC] = (0, wC.c)(), [ZC, oC] = (0, QC.useState)(!1);
      return (0, QC.useLayoutEffect)((() => {
        if (!CC) return;
        const zC = document.querySelector(`.${nC}`),
          ZC = document.querySelector(`.${fC}`),
          QC = () => {
            const QC = CC.getBoundingClientRect(),
              wC = zC ? zC.getBoundingClientRect().right : 0,
              nC = ZC ? ZC.getBoundingClientRect().left : window.innerWidth,
              fC = QC.left < wC + bC,
              qC = QC.right > nC - bC;
            oC(fC || qC)
          };
        QC();
        const wC = new ResizeObserver(QC);
        return wC.observe(CC), zC && wC.observe(zC), ZC && wC.observe(ZC), () => {
          wC.disconnect()
        }
      }), [CC, zC]), ZC
    }
  },
  36558: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    const QC = [{
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

    function wC(CC, zC, ZC) {
      const wC = Math.abs(CC - zC),
        bC = Date.now() - ZC;
      for (const nC of QC)
        if (CC < nC.maxDist) return wC >= nC.hardUpdateDist || bC > nC.timeBetweenSoftChecks && wC >= nC.softUpdateDist;
      return !1
    }
  },
  8735: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      f: () => wC
    });
    let QC = null;
    const wC = function(CC) {
        const zC = {
          cycle: CC,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return QC = zC, () => {
          QC === zC && (QC = null)
        }
      },
      bC = () => {
        var CC;
        return null !== (CC = QC) && void 0 !== CC && CC.canCycle() ? QC.cycle : null
      }
  },
  38369: (CC, zC, ZC) => {
    function QC(CC, zC, ZC) {
      var QC;
      const {
        width: wC,
        height: bC
      } = ZC, nC = null !== (QC = CC.text) && void 0 !== QC ? QC : CC, fC = (nC.x / 100 - .5) * wC, oC = (nC.y / 100 - .5) * bC, qC = wC / 2 - zC.x;
      if (null !== CC.text && Math.abs(fC) <= qC && oC >= zC.top - bC / 2 && oC <= bC / 2 - zC.bottom) return {
        x: nC.x,
        y: nC.y
      };
      const FC = Math.min(0 === fC ? 1 / 0 : qC / Math.abs(fC), oC > 0 ? (bC / 2 - zC.bottom) / oC : oC < 0 ? (zC.top - bC / 2) / oC : 1 / 0);
      return !Number.isFinite(FC) || FC < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + fC * FC / wC * 100,
        y: 50 + oC * FC / bC * 100
      }
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  36490: (CC, zC, ZC) => {
    ZC.d(zC, {
      B: () => GC,
      c: () => bC,
      g: () => SC,
      j: () => pC,
      m: () => fC,
      o: () => NC,
      p: () => PC,
      r: () => WC,
      v: () => RC,
      z: () => gC
    });
    var QC = ZC(20),
      wC = ZC(28);
    const bC = "clientGameInventoryButtonsChanged",
      nC = new Map;

    function fC() {
      return [...nC.values()].sort(((CC, zC) => {
        var ZC, QC;
        return (null !== (ZC = CC.order) && void 0 !== ZC ? ZC : 0) - (null !== (QC = zC.order) && void 0 !== QC ? QC : 0)
      }))
    }
    let oC = null;

    function qC(CC) {
      oC = CC
    }
    let FC = !1;

    function WC(CC) {
      FC = !0;
      try {
        CC.onClick()
      } finally {
        FC = !1
      }
      CC.panel && "clientGame" === QC.b.get("openInGameMenuName") && qC(CC.id)
    }

    function NC() {
      return FC
    }

    function MC() {
      return fC().filter((CC => CC.panel && !CC.disabled))
    }

    function gC(CC) {
      const zC = MC(),
        ZC = zC.findIndex((CC => CC.id === oC));
      return !(ZC < 0 || zC.length < 2) && (WC(zC[(ZC + CC + zC.length) % zC.length]), !0)
    }

    function SC() {
      return null !== oC && MC().length > 1
    }

    function pC() {
      qC(null)
    }

    function PC() {
      "inventory" !== QC.b.get("openInGameMenuName") && qC(null)
    }

    function GC() {
      const CC = oC;
      return qC(null), CC
    }

    function RC(CC) {
      return nC.set(CC.id, CC), wC.o.bp(bC, fC(), !0), () => {
        nC.get(CC.id) === CC && (nC.delete(CC.id), wC.o.bp(bC, fC()))
      }
    }
  },
  36488: (CC, zC, ZC) => {
    ZC.d(zC, {
      C: () => FC,
      d: () => fC,
      h: () => pC,
      k: () => PC,
      o: () => NC,
      q: () => qC,
      u: () => SC,
      y: () => MC
    });
    var QC = ZC(20),
      wC = ZC(28),
      bC = ZC(1240),
      nC = ZC(36490);
    const fC = "clientGameUiChanged";
    let oC = null;

    function qC() {
      return oC
    }

    function FC(CC, zC) {
      const ZC = {
        content: CC,
        menu: zC
      };
      return oC = ZC, wC.o.bp(fC, oC, !0), () => {
        oC === ZC && (oC = null, gC = !1, pC(), wC.o.bp(fC, null))
      }
    }
    let WC = null;

    function NC() {
      return WC
    }

    function MC(CC) {
      return WC = CC, () => {
        WC === CC && (WC = null)
      }
    }
    let gC = !1;

    function SC() {
      const CC = QC.b.get("openInGameMenuName");
      "clientGame" !== CC && (gC = "inventory" === CC), (0, nC.o)() || (0, nC.j)(), (0, bC.u)(bC.e), QC.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pC() {
      GC(!1)
    }

    function PC() {
      GC(gC)
    }

    function GC(CC) {
      "clientGame" === QC.b.get("openInGameMenuName") && QC.b.set({
        openInGameMenuName: CC ? "inventory" : null
      }), CC || (0, nC.j)(), gC = !1
    }
  },
  39259: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => pz
    });
    const QC = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var wC = ZC(48),
      bC = ZC(36488),
      nC = ZC(36897),
      fC = ZC(36502),
      oC = ZC(1645),
      qC = ZC(28);
    const FC = {
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
    const WC = 32;

    function NC(CC, zC, ZC, QC) {
      return {
        tag: "line",
        attrs: {
          x1: CC,
          y1: zC,
          x2: ZC,
          y2: QC,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function MC(CC) {
      return {
        tag: "circle",
        attrs: {
          cx: WC,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WC,
          r: CC,
          class: "Fill"
        }
      }
    }

    function gC(CC, zC) {
      return {
        tag: "path",
        attrs: {
          d: CC,
          "stroke-width": zC
        }
      }
    }

    function SC(CC, zC, ZC) {
      return {
        tag: "circle",
        attrs: {
          cx: WC,
          cy: WC,
          r: CC,
          "stroke-width": zC,
          class: ZC
        }
      }
    }

    function pC(CC, zC, ZC) {
      return {
        tag: "text",
        attrs: {
          x: CC,
          y: zC,
          class: "Fill Label"
        },
        text: ZC
      }
    }
    const PC = {
      pistol: CC => [NC(WC, WC - CC - 5, WC, WC - CC), NC(WC - CC - 5, WC, WC - CC, WC), NC(WC + CC, WC, WC + CC + 5, WC), MC(1.4)],
      rifle: CC => [NC(WC, WC - CC - 8, WC, WC - CC), NC(WC, WC + CC, WC, WC + CC + 8), NC(WC - CC - 8, WC, WC - CC, WC), NC(WC + CC, WC, WC + CC + 8, WC), MC(1)],
      smg: CC => {
        const zC = Math.PI / 2,
          ZC = [];
        for (let nC = 0; nC < 4; nC++) ZC.push((wC = nC * zC + .35, bC = (nC + 1) * zC - .35, gC(`M${WC+(QC=6+CC)*Math.cos(wC)} ${WC+QC*Math.sin(wC)} A${QC} ${QC} 0 0 1 ${WC+QC*Math.cos(bC)} ${WC+QC*Math.sin(bC)}`, 2)));
        var QC, wC, bC;
        return [...ZC, MC(1.4)]
      },
      shotgun: CC => [SC(CC, 3, "Ring Outline"), SC(CC, 1.5, "Ring")],
      marksman: CC => [gC(`M${26-CC/2} ${39+CC/2} L32 33 L${38+CC/2} ${39+CC/2}`, 2), NC(14 - CC, WC, 24 - CC, WC, 1.5), NC(40 + CC, WC, 50 + CC, WC, 1.5), NC(14 - CC, 30, 14 - CC, 34, 1.5), NC(50 + CC, 30, 50 + CC, 34, 1.5)],
      machineGun: CC => {
        const zC = 10 + CC,
          ZC = [];
        for (const [QC, wC] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) ZC.push(gC(`M${WC+QC*zC} ${WC+wC*(zC-5)} L${WC+QC*zC} ${WC+wC*zC} L${WC+QC*(zC-5)} ${WC+wC*zC}`, 2));
        return [...ZC, NC(WC, 28, WC, 36, 1.5), NC(28, WC, 36, WC, 1.5)]
      },
      launcher: () => [NC(14, 30, 50, 30, 1.5), NC(WC, 24, WC, 52, 1.5), NC(28, 38, 36, 38, 1.5), NC(29, 44, 35, 44, 1.5), NC(30, 50, 34, 50, 1.5), pC(38, 40, "100"), pC(37, 46, "200"), MC(1.4, 30)],
      melee: () => [gC("M32 26 L38 32 L32 38 L26 32 Z", 1.5), MC(1.2)],
      throwable: () => [MC(1.6)]
    };

    function GC(CC) {
      let {
        tag: zC,
        attrs: ZC,
        text: QC
      } = CC, wC = `<${zC}`;
      for (const [bC, nC] of Object.entries(ZC)) wC += ` ${bC}="${nC}"`;
      return void 0 === QC ? `${wC}/>` : `${wC}>${QC}</${zC}>`
    }
    class RC {
      constructor(CC, zC) {
        this.api = CC, this.localPlayerId = zC, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = CC => {
          this.element = CC, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, CC && !this.enabled && (CC.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, oC.getRemInPx)()))
        }, this.tokens = [qC.o.subscribe("aimingOverlay", (CC => {
          this.sniperOverlay = "sniper" === CC
        })), qC.o.subscribe("mouseState", (CC => {
          let {
            isDown: zC
          } = CC;
          this.mouseDown = zC
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      IK(CC) {
        CC !== this.enabled && (this.enabled = CC, this.drawnVisible = null, CC || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(CC, zC) {
        var ZC, QC;
        if (!this.enabled) return;
        const {
          api: wC
        } = this, bC = wC.isAlive(this.localPlayerId) && null !== (ZC = null === (QC = wC.XzC(this.localPlayerId)) || void 0 === QC ? void 0 : QC.name) && void 0 !== ZC ? ZC : null, nC = (fC = bC) && FC[fC] || null;
        var fC;
        if (this.setOwnsCrosshair(null !== nC), !this.element) return;
        const oC = wC.getHeldGunInaccuracy(),
          qC = null !== oC,
          WC = null !== nC && !this.sniperOverlay && wC.isCrosshairShown();
        if (WC !== this.drawnVisible && (this.drawnVisible = WC, this.element.style.display = WC ? "block" : "none"), !WC) return;
        const NC = qC ? function(CC) {
            return "launcher" === CC || "melee" === CC || "throwable" === CC ? "none" : "shotgun" === CC ? "cone" : "offset"
          }(nC) : "none",
          MC = null !== oC && void 0 !== oC ? oC : 0;
        "cone" === NC ? this.drawCone(nC, this.coneRadiusVh(MC, zC) * this.gapPerVh, CC) : (this.coneDrawn = !1, this.draw(nC, "none" === NC ? 2 : this.offsetGap(MC)));
        const gC = !qC && this.mouseDown;
        gC !== this.drawnPressed && (this.drawnPressed = gC, this.element.classList.toggle("Pressed", gC))
      }
      dispose() {
        for (const CC of this.tokens) qC.o.unsubscribe(CC);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(CC, zC) {
        var ZC, QC;
        CC !== this.drawnFamily ? (this.drawnFamily = CC, this.drawnGap = zC, this.element.innerHTML = function(CC, zC) {
          return `<svg viewBox="0 0 64 64">${PC[CC](zC).map(GC).join("")}</svg>`
        }(CC, zC), this.shapes = Array.from(null !== (ZC = null === (QC = this.element.firstElementChild) || void 0 === QC ? void 0 : QC.children) && void 0 !== ZC ? ZC : [])) : zC !== this.drawnGap && (this.drawnGap = zC, function(CC, zC, ZC) {
          const QC = PC[zC](ZC);
          for (let wC = 0; wC < QC.length; wC++)
            for (const [zC, ZC] of Object.entries(QC[wC].attrs)) {
              const QC = String(ZC);
              CC[wC].getAttribute(zC) !== QC && CC[wC].setAttribute(zC, QC)
            }
        }(this.shapes, CC, zC))
      }
      drawCone(CC, zC, ZC) {
        CC === this.drawnFamily && this.coneDrawn ? this.shownRadius += (zC - this.shownRadius) * (1 - Math.exp(-ZC / 80)) : this.shownRadius = zC, this.coneDrawn = !0, this.draw(CC, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(CC, zC) {
        if (!(zC > 0)) return 1;
        const ZC = CC * nC.i / 2;
        return Math.max(50 * Math.tan(ZC) / zC, 1)
      }
      offsetGap(CC) {
        const zC = 2 + ((0, fC.e)(CC) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * zC) / 2)
      }
      setOwnsCrosshair(CC) {
        CC !== this.ownsCrosshair && (this.ownsCrosshair = CC, document.body.classList.toggle("FrontlineCustomCrosshair", CC))
      }
    }
    const AC = "FrontlineCustomDamage",
      xC = .45,
      JC = .2;
    class IC {
      constructor(CC, zC) {
        this.api = CC, this.localPlayerId = zC, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.lb = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = CC => {
          var zC, ZC;
          this.clearHits(), this.root = CC, this.lowLayer = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.querySelector(".FrontlineDamageLow")) && void 0 !== zC ? zC : null, this.arcLayer = null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.querySelector(".FrontlineDamageArcs")) && void 0 !== ZC ? ZC : null, this.showRoot(), this.drawLow()
        }, this.token = qC.o.subscribe("damagedByOtherPlayer", (CC => {
          let {
            direction: zC,
            Hb: ZC
          } = CC;
          this.onHurt(zC, ZC)
        })), this.syncHealth(), document.body.classList.add(AC)
      }
      IK(CC) {
        CC !== this.enabled && (this.enabled = CC, document.body.classList.toggle(AC, CC), CC || this.clearHits(), this.showRoot())
      }
      frame(CC) {
        this.syncHealth(), this.cameraHeading = CC;
        for (const zC of this.arcs) this.drawArcAngle(zC)
      }
      dispose() {
        qC.o.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(AC)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const CC = this.api.getClientOption(this.localPlayerId, "_health"),
          zC = this.api.getClientOption(this.localPlayerId, "_shield"),
          ZC = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(CC, this.readHealth) && Object.is(zC, this.readShield) && Object.is(ZC, this.readMaxHealth)) return;
        if (this.readHealth = CC, this.readShield = zC, this.readMaxHealth = ZC, null === CC || void 0 === CC || !ZC) return this.lastHealthPool = null, this.maxHealth = null, this.lb = 1, this.dead = !1, void this.drawLow();
        const QC = CC + (null !== zC && void 0 !== zC ? zC : 0);
        if (null !== this.lastHealthPool && QC < this.lastHealthPool) {
          const CC = performance.now(),
            zC = (this.lastHealthPool - QC) / ZC;
          this.lastDrop = CC - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + zC,
            at: this.lastDrop.at
          } : {
            frac: zC,
            at: CC
          }
        }
        this.dead = CC <= 0, this.dead && this.clearHits(), this.lastHealthPool = QC, this.maxHealth = ZC, this.lb = CC > 0 ? CC / ZC : 1, this.drawLow()
      }
      onHurt(CC, zC) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const ZC = Math.min(1, this.takeDamageFrac(zC) / .3);
        null !== CC && this.showArc(CC, ZC), this.flashEdge(null === CC ? null : CC - this.cameraHeading, .4 + .6 * ZC)
      }
      takeDamageFrac(CC) {
        if (void 0 !== CC && this.maxHealth) return CC / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: zC
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, zC
      }
      drawLow() {
        if (!this.lowLayer) return;
        const CC = vC((xC - this.lb) / .25),
          zC = vC((JC - this.lb) / .15000000000000002),
          ZC = this.lb < xC;
        this.lowLayer.classList.toggle("Active", ZC), this.lowLayer.classList.toggle("Critical", this.lb < JC), this.lowLayer.style.opacity = String(ZC ? .55 + .3 * CC + .15 * zC : 0)
      }
      showArc(CC, zC) {
        var ZC, QC;
        if (!this.arcLayer) return;
        let wC = this.arcs.find((zC => iC(zC.direction, CC) < .6));
        if (!wC) {
          const zC = document.createElement("div");
          zC.className = "FrontlineDamageArc", zC.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(zC), wC = {
            element: zC,
            direction: CC,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(wC)
        }
        wC.direction = CC, this.drawArcAngle(wC);
        const bC = wC.fade ? Number(getComputedStyle(wC.element).opacity) : 0;
        null === (ZC = wC.fade) || void 0 === ZC || ZC.cancel(), null === (QC = wC.pop) || void 0 === QC || QC.cancel(), wC.element.style.opacity = "1";
        const nC = wC.element.animate([{
          opacity: bC
        }, {
          opacity: 1
        }], 144);
        wC.fade = nC, wC.pop = wC.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * zC
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const fC = wC;
        nC.onfinish = () => {
          if (fC.fade !== nC) return;
          const CC = fC.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          CC.startTime = nC.startTime, fC.fade = CC, CC.onfinish = () => {
            fC.fade === CC && (fC.element.remove(), eC(this.arcs, fC))
          }
        }
      }
      drawArcAngle(CC) {
        const zC = CC.direction - this.cameraHeading;
        (null === CC.drawnAngle || Math.abs(zC - CC.drawnAngle) > .005) && (CC.drawnAngle = zC, CC.element.style.rotate = `${zC}rad`)
      }
      flashEdge(CC, zC) {
        var ZC, QC, wC;
        if (!this.root) return;
        let bC = this.flashes.find((zC => null === zC.angle || null === CC ? zC.angle === CC : iC(zC.angle, CC) < .5));
        if (!bC) {
          const zC = document.createElement("div");
          zC.className = "FrontlineDamageFlash";
          const ZC = zC.appendChild(document.createElement("div"));
          ZC.className = "FrontlineDamageFlashGlow", this.root.insertBefore(zC, this.arcLayer), bC = {
            element: zC,
            glow: ZC,
            angle: CC,
            level: 0,
            animation: null
          }, this.flashes.push(bC)
        }
        const nC = null === (ZC = bC.animation) || void 0 === ZC || null === (QC = ZC.effect) || void 0 === QC ? void 0 : QC.getComputedTiming().progress,
          fC = null === nC || void 0 === nC ? 0 : bC.level * (1 - nC);
        bC.level = Math.min(1, Math.max(zC, fC + .6 * zC)), bC.angle = CC;
        const {
          x: oC,
          y: qC,
          rx: FC,
          ry: WC
        } = function(CC, zC) {
          const ZC = window.innerWidth,
            QC = window.innerHeight;
          if (null === CC) return {
            x: ZC / 2,
            y: QC / 2,
            rx: 0,
            ry: 0
          };
          const wC = Math.sin(CC),
            bC = -Math.cos(CC),
            nC = ZC / 2 / Math.max(1e-6, Math.abs(wC)),
            fC = QC / 2 / Math.max(1e-6, Math.abs(bC)),
            oC = Math.min(nC, fC),
            qC = Math.round(ZC / 2 + wC * oC),
            FC = Math.round(QC / 2 + bC * oC),
            WC = QC / 100 * (.85 + .25 * zC),
            NC = nC <= fC,
            MC = Math.round((NC ? 30 : 74) * WC),
            gC = Math.round((NC ? 58 : 26) * WC);
          return {
            x: qC,
            y: FC,
            rx: MC,
            ry: gC
          }
        }(CC, bC.level), {
          style: NC
        } = bC.glow;
        bC.glow.classList.toggle("Everywhere", null === CC), NC.setProperty("--glowX", `${oC}px`), NC.setProperty("--glowY", `${qC}px`), NC.setProperty("--glowRx", `${FC}px`), NC.setProperty("--glowRy", `${WC}px`), bC.element.style.transformOrigin = `${oC}px ${qC}px`, null === (wC = bC.animation) || void 0 === wC || wC.cancel();
        const MC = bC.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: bC.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * bC.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * bC.level
        });
        bC.animation = MC;
        const gC = bC;
        MC.onfinish = () => {
          gC.animation === MC && (gC.element.remove(), eC(this.flashes, gC))
        }
      }
      clearHits() {
        for (const QC of this.arcs) {
          var CC, zC;
          null === (CC = QC.fade) || void 0 === CC || CC.cancel(), QC.fade = null, null === (zC = QC.pop) || void 0 === zC || zC.cancel(), QC.element.remove()
        }
        this.arcs.length = 0;
        for (const QC of this.flashes) {
          var ZC;
          null === (ZC = QC.animation) || void 0 === ZC || ZC.cancel(), QC.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function iC(CC, zC) {
      return Math.abs(Math.atan2(Math.sin(CC - zC), Math.cos(CC - zC)))
    }

    function vC(CC) {
      return Math.max(0, Math.min(1, CC))
    }

    function eC(CC, zC) {
      const ZC = CC.indexOf(zC); - 1 !== ZC && CC.splice(ZC, 1)
    }
    var hC = ZC(1002),
      KC = ZC.n(hC),
      YC = ZC(36483),
      dC = ZC(36564),
      mC = ZC(1143),
      HC = ZC(1383);
    const EC = "frontlineHudChanged",
      lC = "frontlineScoreboardChanged";
    class XC {
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
      Ag(CC) {
        this.wire = CC, qC.o.bp(EC, CC, !0)
      }
      receiveScoreboard(CC) {
        let zC = "scoreboard" === CC[0] ? performance.now() + CC[5] : 0;
        const ZC = this.scoreboard.endsAt;
        0 !== zC && 0 !== ZC && Math.abs(zC - ZC) < 1e3 && (zC = ZC), this.scoreboard = {
          wire: CC,
          endsAt: zC
        }, qC.o.bp(lC, this.scoreboard, !0)
      }
    }
    var cC = ZC(1056);
    const uC = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function rC(CC) {
      const [zC, ZC] = (0, wC.useState)((() => (CC - performance.now()) / 1e3));
      return (0, wC.useEffect)((() => {
        if (0 === CC) return;
        const zC = () => {
          ZC((CC - performance.now()) / 1e3)
        };
        zC();
        const QC = window.setInterval(zC, 250);
        return () => {
          window.clearInterval(QC)
        }
      }), [CC]), zC
    }

    function sC(CC) {
      let {
        className: zC,
        point: ZC
      } = CC;
      const [QC, wC, bC, nC, fC, oC] = ZC;
      return (0, cC.jsxs)("div", {
        className: KC()(zC, `Owner-${wC||"None"}`, `Leader-${nC||"None"}`, {
          Contested: fC,
          Here: oC
        }),
        children: [(0, cC.jsx)("span", {
          className: "FrontlinePointLetter",
          children: QC
        }), (0, cC.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${bC}%`
          }
        })]
      })
    }
    const TC = (0, wC.memo)((function(CC) {
        let {
          points: zC,
          markers: ZC
        } = CC;
        const {
          t: QC
        } = (0, mC.y)();
        return zC ? (0, cC.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: zC.map((CC => {
            const [zC, , , , , , , wC] = CC;
            return (0, cC.jsxs)("div", {
              ref: ZC.bindMarker(zC),
              className: "FrontlinePointMarker",
              children: [(0, cC.jsx)(sC, {
                className: "FrontlinePointMarkerTile",
                point: CC
              }), (0, cC.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [wC && (0, cC.jsx)("span", {
                  className: KC()("FrontlinePointMarkerHomeTurf", `Team-${wC}`),
                  children: QC("frontlineHud:homeTurf", {
                    team: QC(uC[wC])
                  })
                }), (0, cC.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, zC)
          }))
        }) : null
      })),
      aC = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      tC = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function DC(CC) {
      let {
        hud: zC,
        crosshair: ZC,
        damage: QC,
        markers: wC
      } = CC;
      const bC = (0, HC.f)(EC, zC.getWire()),
        nC = (0, HC.f)(lC, zC.getScoreboard());
      return (0, cC.jsxs)(cC.Fragment, {
        children: [(0, cC.jsx)(jC, {
          damage: QC
        }), (0, cC.jsx)(TC, {
          points: "scoreboard" === nC.wire[0] ? nC.wire[6] : null,
          markers: wC
        }), (0, cC.jsx)(LC, {
          view: nC
        }), (0, cC.jsx)("div", {
          className: "FrontlineReticle",
          ref: ZC.bindElement
        }), (0, cC.jsx)(YC.c, {
          children: (0, cC.jsx)(yC, {
            wire: bC
          })
        })]
      })
    }
    const jC = (0, wC.memo)((function(CC) {
        let {
          damage: zC
        } = CC;
        return (0, cC.jsxs)("div", {
          className: "FrontlineDamage",
          ref: zC.bindElement,
          children: [(0, cC.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, cC.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, cC.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      yC = (0, wC.memo)((function(CC) {
        let {
          wire: zC
        } = CC;
        const {
          t: ZC
        } = (0, mC.y)();
        if ("capture" === zC[0]) {
          const [, CC, QC, wC, bC, nC, fC] = zC, oC = Math.round(wC / 100 * 24);
          return (0, cC.jsxs)("div", {
            className: KC()("FrontlinePlate", `Status-${QC}`, `Leader-${bC||"None"}`),
            children: [(0, cC.jsx)(kC, {}), (0, cC.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, cC.jsx)("span", {
                className: "FrontlineObjective",
                children: CC
              }), (0, cC.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, cC.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: ZC("frontlineHud:objective", {
                    point: CC,
                    friendly: nC,
                    enemy: fC
                  })
                }), (0, cC.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: ZC(aC[QC])
                })]
              }), (0, cC.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(wC).padStart(3, "0"), (0, cC.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, cC.jsx)(BC, {
              segments: 24,
              lit: oC
            })]
          })
        }
        if ("alert" === zC[0]) {
          const [, CC, QC, wC] = zC;
          return (0, cC.jsxs)("div", {
            className: KC()("FrontlinePlate", "FrontlineAlert", `Tone-${wC}`),
            children: [(0, cC.jsx)(kC, {}), (0, cC.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: ZC(tC[CC])
            }), (0, cC.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: QC
            })]
          })
        }
        return null
      })),
      LC = (0, wC.memo)((function(CC) {
        let {
          view: zC
        } = CC;
        const {
          t: ZC
        } = (0, mC.y)(), QC = (0, wC.useRef)(null), bC = function(CC, zC) {
          const [ZC, QC] = (0, wC.useState)(!1);
          return (0, wC.useLayoutEffect)((() => {
            const zC = CC.current;
            if (!zC) return;
            const ZC = document.querySelector(`.${dC.e}`),
              wC = document.querySelector(`.${dC.h}`),
              bC = () => {
                var CC;
                const bC = zC.querySelector(".FrontlineTeamTrack"),
                  nC = (0, oC.getRemInPx)(),
                  fC = zC.getBoundingClientRect().width - 2 * (null !== (CC = null === bC || void 0 === bC ? void 0 : bC.getBoundingClientRect().width) && void 0 !== CC ? CC : 0),
                  qC = window.innerWidth / 2,
                  FC = ZC ? ZC.getBoundingClientRect().right : 0,
                  WC = wC ? wC.getBoundingClientRect().left : window.innerWidth,
                  NC = Math.min(qC - FC, WC - qC) - dC.c - fC / 2,
                  MC = NC < 6 * nC,
                  gC = MC ? (window.innerWidth - fC) / 2 - dC.c : NC;
                zC.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(gC,14*nC)))}px`), QC(MC)
              };
            bC();
            const nC = new ResizeObserver(bC);
            for (const CC of [zC, ZC, wC]) CC && nC.observe(CC);
            return window.addEventListener("resize", bC), () => {
              nC.disconnect(), window.removeEventListener("resize", bC)
            }
          }), [CC, zC]), ZC
        }(QC, "scoreboard" === zC.wire[0]);
        if ("scoreboard" !== zC.wire[0]) return null;
        const [, nC, fC, qC, FC, , WC] = zC.wire, NC = "Red" === nC ? "Blue" : "Red";
        return (0, cC.jsxs)("div", {
          className: KC()("FrontlineScoreboardContainer", {
            Below: bC
          }),
          children: [(0, cC.jsxs)("div", {
            ref: QC,
            className: "FrontlineScoreboard",
            children: [(0, cC.jsx)(kC, {}), (0, cC.jsx)(UC, {
              team: nC,
              tickets: fC,
              goal: FC,
              side: "Friendly"
            }), (0, cC.jsx)("div", {
              className: "FrontlinePoints",
              children: WC.map((CC => (0, cC.jsx)(sC, {
                className: "FrontlinePoint",
                point: CC
              }, CC[0])))
            }), (0, cC.jsx)(UC, {
              team: NC,
              tickets: qC,
              goal: FC,
              side: "Enemy"
            })]
          }), (0, cC.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, cC.jsx)(OC, {
              endsAt: zC.endsAt
            }), (0, cC.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: ZC("frontlineHud:ticketGoal", {
                goal: FC
              })
            })]
          })]
        })
      }));

    function UC(CC) {
      let {
        team: zC,
        tickets: ZC,
        goal: QC,
        side: wC
      } = CC;
      const {
        t: bC
      } = (0, mC.y)(), nC = String(ZC).padStart(3, "0"), fC = nC.search(/[1-9]/), oC = -1 === fC ? nC : nC.slice(0, fC), qC = Math.min(20, Math.floor(ZC / QC * 20));
      return (0, cC.jsxs)("div", {
        className: KC()("FrontlineTeamScore", wC, `Team-${zC}`),
        children: [(0, cC.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, cC.jsx)("span", {
            className: "Lead",
            children: oC
          }), -1 !== fC && nC.slice(fC)]
        }), (0, cC.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, cC.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: bC(uC[zC])
          }), (0, cC.jsx)(BC, {
            segments: 20,
            lit: qC
          })]
        })]
      })
    }

    function BC(CC) {
      let {
        segments: zC,
        lit: ZC
      } = CC;
      return (0, cC.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: zC
        }, ((CC, zC) => (0, cC.jsx)("i", {
          className: KC()({
            Lit: zC < ZC
          })
        }, zC)))
      })
    }

    function OC(CC) {
      let {
        endsAt: zC
      } = CC;
      const ZC = Math.max(0, Math.ceil(rC(zC)));
      return (0, cC.jsxs)("div", {
        className: KC()("FrontlineClock", {
          Urgent: ZC <= 60
        }),
        children: [Math.floor(ZC / 60), ":", String(ZC % 60).padStart(2, "0")]
      })
    }

    function kC() {
      return (0, cC.jsxs)(cC.Fragment, {
        children: [(0, cC.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, cC.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var VC = ZC(36558),
      Cz = ZC(1192),
      zz = ZC(38319),
      Zz = ZC(38369);
    class Qz {
      constructor(CC) {
        var zC;
        this.hud = CC, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.Sg = !1, this.mG = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.mG), null === (zC = window.visualViewport) || void 0 === zC || zC.addEventListener("resize", this.mG)
      }
      bindMarker(CC) {
        let zC = this.refs.get(CC);
        return zC || (zC = zC => {
          var ZC;
          null === (ZC = this.markers.get(CC)) || void 0 === ZC || ZC.stopObserving(), this.markers.delete(CC), zC && !this.Sg && this.markers.set(CC, this.mount(zC))
        }, this.refs.set(CC, zC)), zC
      }
      frame(CC, zC) {
        this.render = CC;
        const ZC = this.hud.getScoreboard().wire;
        if ("scoreboard" === ZC[0] && 0 !== this.markers.size)
          for (const [QC, , , , , , wC] of ZC[6]) {
            const CC = this.markers.get(QC);
            CC && wC && (CC.target ??= [0, 0, 0], CC.target[0] = wC[0], CC.target[1] = wC[1] + 2.5, CC.target[2] = wC[2], this.place(CC), this.MQ(CC, zC && Math.hypot(wC[0] - zC[0], wC[1] - zC[1], wC[2] - zC[2])))
          }
      }
      dispose() {
        var CC;
        this.Sg = !0, window.removeEventListener("resize", this.mG), null === (CC = window.visualViewport) || void 0 === CC || CC.removeEventListener("resize", this.mG);
        for (const zC of this.markers.values()) zC.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(CC) {
        const {
          render: zC,
          viewport: ZC
        } = this;
        if (!zC || !CC.target) return;
        const QC = (50 - zC.screenBandPct.y) / 100 * ZC.height,
          wC = {
            x: CC.halfSize.width + 8,
            top: CC.halfSize.height + 8,
            bottom: CC.halfSize.height + CC.labelsBelow + QC
          },
          bC = zC.projectWorldPosToViewport(CC.target),
          nC = null !== bC && void 0 !== bC ? bC : zC.projectWorldPosToScreenPos(CC.target),
          fC = (0, Zz.b)({
            x: nC.x,
            y: nC.y,
            text: bC
          }, wC, ZC);
        (0, zz.e)(CC.root, Math.round(100 * fC.x) / 100, Math.round(100 * fC.y) / 100)
      }
      MQ(CC, zC) {
        if (null === zC) return void(null !== CC.metres && (CC.metres = null, CC.distance.textContent = ""));
        const ZC = Date.now();
        (null === CC.metres || (0, VC.d)(zC, CC.metres, CC.metresShownAt)) && (CC.metres = Math.round(zC), CC.metresShownAt = ZC, CC.distance.textContent = (0, mC.u)(Cz.h.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(CC.metres)
        }))
      }
      mount(CC) {
        const zC = {
            root: CC,
            distance: CC.querySelector(".FrontlinePointMarkerDistance"),
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
          ZC = CC.querySelector(".FrontlinePointMarkerLabels"),
          QC = new ResizeObserver((() => {
            zC.halfSize = {
              width: Math.max(CC.offsetWidth, ZC.offsetWidth) / 2,
              height: CC.offsetHeight / 2
            }, zC.labelsBelow = ZC.offsetTop + ZC.offsetHeight - CC.offsetHeight, this.place(zC)
          }));
        return QC.observe(CC, {
          box: "border-box"
        }), QC.observe(ZC, {
          box: "border-box"
        }), zC.stopObserving = () => {
          QC.disconnect()
        }, zC
      }
    }
    var wz = ZC(6453),
      bz = ZC(2604);
    const nz = "frontlineRoundEndChanged";
    class fz {
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
      Ag(CC) {
        const zC = "roundEnd" === CC[0] ? performance.now() + CC[5] : 0;
        this.view = {
          wire: CC,
          key: this.view.key + 1,
          endsAt: zC
        }, qC.o.bp(nz, this.view, !0)
      }
    }
    const oz = (0, wC.lazy)((() => (0, bz.e)(ZC.e(199).then((() => ZC(41576))), (CC => CC.FrontlineMvpLineup)))),
      qz = [4800, 4e3, 3200],
      Fz = [1, 0, 2],
      Wz = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      Nz = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function Mz(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, HC.f)(nz, zC.getView()),
        QC = rC(ZC.endsAt);
      return "roundEnd" !== ZC.wire[0] || 1e3 * QC < -2e3 ? null : (0, cC.jsx)(gz, {
        wire: ZC.wire,
        secondsLeft: Math.max(0, Math.ceil(QC))
      }, ZC.key)
    }
    const gz = (0, wC.memo)((function(CC) {
      let {
        wire: zC,
        secondsLeft: ZC
      } = CC;
      const {
        t: bC
      } = (0, mC.y)(), [, nC, fC, oC, qC, , FC, WC] = zC, NC = (0, wC.useMemo)((() => Fz.filter((CC => CC < WC.length))), [WC]), MC = (0, wC.useMemo)((() => NC.map((CC => {
        const [, , , , , zC, ZC] = WC[CC];
        return {
          cosmetics: QC.map(((CC, ZC) => [CC, zC[ZC]])),
          size: 0 === CC ? 1.15 : .85,
          heldGun: {
            name: ZC,
            aimed: 0 === CC
          },
          showAfterMs: qz[CC]
        }
      }))), [WC, NC]);
      return (0, cC.jsxs)("div", {
        className: KC()("FrontlineRoundEnd", `Result-${nC}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, cC.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, cC.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, cC.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, cC.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, cC.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (gC = bC(Wz[nC]), /\p{Script=Arabic}/u.test(gC) ? [gC] : (0, wz.b)(gC)).map(((CC, zC) => (0, cC.jsx)("span", {
              style: {
                "--letter": zC
              },
              children: CC
            }, zC)))]
          }), (0, cC.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [fC && "victory" === nC && (0, cC.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: bC("frontlineRoundEnd:comeback")
            }), (0, cC.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, cC.jsx)("b", {
                className: "Friendly",
                children: oC
              }), " \u2013 ", (0, cC.jsx)("b", {
                className: "Enemy",
                children: qC
              })]
            })]
          })]
        }), NC.length > 0 && (0, cC.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": NC.length
          },
          children: [(0, cC.jsx)(wC.Suspense, {
            fallback: null,
            children: (0, cC.jsx)(oz, {
              className: "FrontlineRoundEndLineup",
              players: MC
            })
          }), NC.map((CC => (0, cC.jsx)(Sz, {
            mvp: WC[CC],
            place: CC
          }, CC)))]
        }), (0, cC.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: bC("frontlineRoundEnd:nextFront", {
            map: FC,
            seconds: String(ZC)
          })
        })]
      });
      var gC
    }));

    function Sz(CC) {
      let {
        mvp: zC,
        place: ZC
      } = CC;
      const {
        t: QC
      } = (0, mC.y)(), [wC, bC, nC, fC, oC] = zC, [qC, FC] = QC(function(CC, zC) {
        return 1 === zC && "damage" !== CC ? `frontlineRoundEnd:${CC}One` : `frontlineRoundEnd:${CC}`
      }(nC, fC), {
        name: "\0",
        count: fC.toLocaleString()
      }).split("\0");
      return (0, cC.jsxs)("div", {
        className: KC()("FrontlineMvpCard", `Place-${ZC+1}`, `Team-${bC}`),
        style: {
          "--revealMs": `${qz[ZC]}ms`
        },
        children: [(0, cC.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, cC.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, cC.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: QC(Nz[ZC])
        }), (0, cC.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [qC, (0, cC.jsx)("span", {
            className: "FrontlineMvpName",
            children: wC
          }), FC]
        }), (0, cC.jsx)("div", {
          className: "FrontlineMvpKit",
          children: oC
        })]
      })
    }
    const pz = function(CC, zC, ZC, QC) {
      let {
        localPlayerId: nC
      } = QC;
      const fC = new XC,
        oC = new fz;
      let qC = null,
        FC = null,
        WC = null,
        NC = null,
        MC = null,
        gC = [!1, !1];
      const SC = () => {
        var CC, zC;
        const [ZC, QC] = gC;
        null === (CC = FC) || void 0 === CC || CC.IK(!ZC), null === (zC = WC) || void 0 === zC || zC.IK(!QC)
      };
      return {
        onCreate: CC => {
          qC = CC, FC = new RC(CC, nC), WC = new IC(CC, nC), NC = new Qz(fC), SC(), MC = (0, bC.C)((0, wC.createElement)(wC.Fragment, null, (0, wC.createElement)(DC, {
            hud: fC,
            crosshair: FC,
            damage: WC,
            markers: NC
          }), (0, wC.createElement)(Mz, {
            controller: oC
          })))
        },
        onClose: () => {
          var CC, zC, ZC, QC;
          null === (CC = MC) || void 0 === CC || CC(), null === (zC = FC) || void 0 === zC || zC.dispose(), FC = null, null === (ZC = WC) || void 0 === ZC || ZC.dispose(), WC = null, null === (QC = NC) || void 0 === QC || QC.dispose(), NC = null, qC = null
        },
        onAfterRender: (CC, zC) => {
          var ZC, QC, wC, bC;
          null === (ZC = FC) || void 0 === ZC || ZC.frame(CC, zC.tanHalfFovY), null === (QC = WC) || void 0 === QC || QC.frame(zC.cameraHeading), null === (wC = NC) || void 0 === wC || wC.frame(zC, null !== (bC = qC) && void 0 !== bC && bC.checkValid(nC) ? qC.yG(nC) : null)
        },
        onReceivedMessageFromServer: (CC, zC) => {
          "frontlineHud" === CC ? fC.Ag(zC) : "frontlineScoreboard" === CC ? fC.receiveScoreboard(zC) : "frontlineRoundEnd" === CC ? oC.Ag(zC) : "frontlinePrefs" === CC && (gC = zC, SC())
        }
      }
    }
  },
  6453: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC
    });
    const QC = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function wC(CC) {
      return null === QC ? Array.from(CC) : Array.from(QC.segment(CC), (CC => {
        let {
          segment: zC
        } = CC;
        return zC
      }))
    }
  },
  38319: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      i: () => bC
    });
    const QC = new WeakMap;

    function wC(CC) {
      let zC = QC.get(CC);
      return zC || (zC = {
        hidden: CC.hidden,
        x: NaN,
        y: NaN
      }, QC.set(CC, zC)), zC
    }

    function bC(CC, zC) {
      const ZC = wC(CC);
      ZC.hidden !== zC && (ZC.hidden = zC, CC.hidden = zC)
    }

    function nC(CC, zC, ZC) {
      const QC = wC(CC);
      QC.x === zC && QC.y === ZC || (QC.x = zC, QC.y = ZC, CC.style.translate = `${zC}vw ${ZC}vh`)
    }
  },
  36938: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC
    });
    const QC = {
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
for (const CC in modules) Object.freeze(modules[CC]);