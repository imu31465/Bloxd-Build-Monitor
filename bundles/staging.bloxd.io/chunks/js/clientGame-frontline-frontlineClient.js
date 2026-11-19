export const id = 17;
export const ids = [17];
export const modules = {
  35994: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => MD,
      e: () => tD,
      f: () => yD,
      h: () => BD
    });
    var ID = cD(9041),
      pD = cD(35996),
      iD = cD(36002),
      fD = cD(8394),
      bD = cD(1440),
      QD = cD(53),
      wD = cD(62),
      SD = cD(1093);

    function BD() {
      var DD;
      return (0, bD.g)(pD.b, (0, pD.o)()), (0, SD.jsx)(SD.Fragment, {
        children: null === (DD = (0, pD.o)()) || void 0 === DD ? void 0 : DD.content
      })
    }

    function yD(DD) {
      var CD;
      let {
        show: cD
      } = DD;
      (0, bD.g)(pD.b, (0, pD.o)());
      const wD = null === (CD = (0, pD.o)()) || void 0 === CD ? void 0 : CD.menu;
      return (0, QD.useEffect)((() => {
        var DD;
        cD || (null === wD || void 0 === wD || null === (DD = wD.onClose) || void 0 === DD || DD.call(wD), (0, iD.q)())
      }), [cD, wD]), (0, QD.useEffect)((() => cD ? (0, fD.i)(iD.B, iD.e) : void 0), [cD]), (0, SD.jsx)(ID.c, {
        showing: cD,
        globallyUniqueKey: "clientGameMenu",
        children: null === wD || void 0 === wD ? void 0 : wD.content
      })
    }

    function MD(DD) {
      let {
        placement: CD = "bottom"
      } = DD;
      return (0, SD.jsx)("div", {
        id: `clientGameHud-${CD}`,
        style: {
          display: "contents"
        }
      })
    }

    function tD(DD) {
      let {
        children: CD,
        placement: cD = "bottom"
      } = DD;
      const [ID, pD] = (0, QD.useState)(null);
      return (0, QD.useEffect)((() => {
        pD(document.getElementById(`clientGameHud-${cD}`))
      }), [cD]), ID ? (0, wD.createPortal)(CD, ID) : null
    }
  },
  9041: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(4329),
      pD = cD(4337);

    function iD(DD) {
      let {
        children: CD,
        showing: cD,
        globallyUniqueKey: iD,
        alwaysMountChildren: fD = !1,
        doGameplayStartStopOnShow: bD = !0,
        keepsMovement: QD = !1
      } = DD;
      return (0, pD.e)(!0, cD, iD, QD), (0, ID.b)(bD, cD), cD || fD ? CD : null
    }
  },
  36085: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      g: () => fD,
      h: () => bD,
      i: () => QD
    });
    var ID = cD(53),
      pD = cD(1113);
    const iD = 8,
      fD = "InGameHeaderContainer",
      bD = "TopRightElements";

    function QD(DD) {
      const [CD] = (0, pD.b)(), [cD, QD] = (0, ID.useState)(!1);
      return (0, ID.useLayoutEffect)((() => {
        if (!DD) return;
        const CD = document.querySelector(`.${fD}`),
          cD = document.querySelector(`.${bD}`),
          ID = () => {
            const ID = DD.getBoundingClientRect(),
              pD = CD ? CD.getBoundingClientRect().right : 0,
              fD = cD ? cD.getBoundingClientRect().left : window.innerWidth,
              bD = ID.left < pD + iD,
              wD = ID.right > fD - iD;
            QD(bD || wD)
          };
        ID();
        const pD = new ResizeObserver(ID);
        return pD.observe(DD), CD && pD.observe(CD), cD && pD.observe(cD), () => {
          pD.disconnect()
        }
      }), [DD, CD]), cD
    }
  },
  36083: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD
    });
    const ID = [{
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

    function pD(DD, CD, cD) {
      const pD = Math.abs(DD - CD),
        iD = Date.now() - cD;
      for (const fD of ID)
        if (DD < fD.maxDist) return pD >= fD.hardUpdateDist || iD > fD.timeBetweenSoftChecks && pD >= fD.softUpdateDist;
      return !1
    }
  },
  8394: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      i: () => pD
    });
    let ID = null;
    const pD = function(DD) {
        const CD = {
          cycle: DD,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return ID = CD, () => {
          ID === CD && (ID = null)
        }
      },
      iD = () => {
        var DD;
        return null !== (DD = ID) && void 0 !== DD && DD.canCycle() ? ID.cycle : null
      }
  },
  37907: (DD, CD, cD) => {
    function ID(DD, CD, cD) {
      var ID;
      const {
        width: pD,
        height: iD
      } = cD, fD = null !== (ID = DD.text) && void 0 !== ID ? ID : DD, bD = (fD.x / 100 - .5) * pD, QD = (fD.y / 100 - .5) * iD, wD = pD / 2 - CD.x;
      if (null !== DD.text && Math.abs(bD) <= wD && QD >= CD.top - iD / 2 && QD <= iD / 2 - CD.bottom) return {
        x: fD.x,
        y: fD.y
      };
      const SD = Math.min(0 === bD ? 1 / 0 : wD / Math.abs(bD), QD > 0 ? (iD / 2 - CD.bottom) / QD : QD < 0 ? (CD.top - iD / 2) / QD : 1 / 0);
      return !Number.isFinite(SD) || SD < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + bD * SD / pD * 100,
        y: 50 + QD * SD / iD * 100
      }
    }
    cD.d(CD, {
      e: () => ID
    })
  },
  36002: (DD, CD, cD) => {
    cD.d(CD, {
      B: () => tD,
      C: () => ND,
      b: () => iD,
      e: () => ZD,
      i: () => oD,
      l: () => bD,
      p: () => yD,
      q: () => vD,
      t: () => BD,
      x: () => gD
    });
    var ID = cD(16),
      pD = cD(20);
    const iD = "clientGameInventoryButtonsChanged",
      fD = new Map;

    function bD() {
      return [...fD.values()].sort(((DD, CD) => {
        var cD, ID;
        return (null !== (cD = DD.order) && void 0 !== cD ? cD : 0) - (null !== (ID = CD.order) && void 0 !== ID ? ID : 0)
      }))
    }
    let QD = null;

    function wD(DD) {
      QD = DD
    }
    let SD = !1;

    function BD(DD) {
      SD = !0;
      try {
        DD.onClick()
      } finally {
        SD = !1
      }
      DD.panel && "clientGame" === ID.d.get("openInGameMenuName") && wD(DD.id)
    }

    function yD() {
      return SD
    }

    function MD() {
      return bD().filter((DD => DD.panel && !DD.disabled))
    }

    function tD(DD) {
      const CD = MD(),
        cD = CD.findIndex((DD => DD.id === QD));
      return !(cD < 0 || CD.length < 2) && (BD(CD[(cD + DD + CD.length) % CD.length]), !0)
    }

    function ZD() {
      return null !== QD && MD().length > 1
    }

    function oD() {
      wD(null)
    }

    function vD() {
      "inventory" !== ID.d.get("openInGameMenuName") && wD(null)
    }

    function ND() {
      const DD = QD;
      return wD(null), DD
    }

    function gD(DD) {
      return fD.set(DD.id, DD), pD.i.Uo(iD, bD(), !0), () => {
        fD.get(DD.id) === DD && (fD.delete(DD.id), pD.i.Uo(iD, bD()))
      }
    }
  },
  35996: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      e: () => oD,
      i: () => vD,
      m: () => yD,
      o: () => wD,
      s: () => ZD,
      u: () => MD,
      v: () => SD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(1284),
      fD = cD(36002);
    const bD = "clientGameUiChanged";
    let QD = null;

    function wD() {
      return QD
    }

    function SD(DD, CD) {
      const cD = {
        content: DD,
        menu: CD
      };
      return QD = cD, pD.i.Uo(bD, QD, !0), () => {
        QD === cD && (QD = null, tD = !1, oD(), pD.i.Uo(bD, null))
      }
    }
    let BD = null;

    function yD() {
      return BD
    }

    function MD(DD) {
      return BD = DD, () => {
        BD === DD && (BD = null)
      }
    }
    let tD = !1;

    function ZD() {
      const DD = ID.d.get("openInGameMenuName");
      "clientGame" !== DD && (tD = "inventory" === DD), (0, fD.p)() || (0, fD.i)(), (0, iD.p)(iD.e), ID.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oD() {
      ND(!1)
    }

    function vD() {
      ND(tD)
    }

    function ND(DD) {
      "clientGame" === ID.d.get("openInGameMenuName") && ID.d.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, fD.i)(), tD = !1
    }
  },
  38734: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => oC
    });
    const ID = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var pD = cD(53),
      iD = cD(35996),
      fD = cD(36402),
      bD = cD(36010),
      QD = cD(1701),
      wD = cD(20);
    const SD = {
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
    const BD = 32;

    function yD(DD, CD, cD, ID) {
      return {
        tag: "line",
        attrs: {
          x1: DD,
          y1: CD,
          x2: cD,
          y2: ID,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function MD(DD) {
      return {
        tag: "circle",
        attrs: {
          cx: BD,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BD,
          r: DD,
          class: "Fill"
        }
      }
    }

    function tD(DD, CD) {
      return {
        tag: "path",
        attrs: {
          d: DD,
          "stroke-width": CD
        }
      }
    }

    function ZD(DD, CD, cD) {
      return {
        tag: "circle",
        attrs: {
          cx: BD,
          cy: BD,
          r: DD,
          "stroke-width": CD,
          class: cD
        }
      }
    }

    function oD(DD, CD, cD) {
      return {
        tag: "text",
        attrs: {
          x: DD,
          y: CD,
          class: "Fill Label"
        },
        text: cD
      }
    }
    const vD = {
      pistol: DD => [yD(BD, BD - DD - 5, BD, BD - DD), yD(BD - DD - 5, BD, BD - DD, BD), yD(BD + DD, BD, BD + DD + 5, BD), MD(1.4)],
      rifle: DD => [yD(BD, BD - DD - 8, BD, BD - DD), yD(BD, BD + DD, BD, BD + DD + 8), yD(BD - DD - 8, BD, BD - DD, BD), yD(BD + DD, BD, BD + DD + 8, BD), MD(1)],
      smg: DD => {
        const CD = Math.PI / 2,
          cD = [];
        for (let fD = 0; fD < 4; fD++) cD.push((pD = fD * CD + .35, iD = (fD + 1) * CD - .35, tD(`M${BD+(ID=6+DD)*Math.cos(pD)} ${BD+ID*Math.sin(pD)} A${ID} ${ID} 0 0 1 ${BD+ID*Math.cos(iD)} ${BD+ID*Math.sin(iD)}`, 2)));
        var ID, pD, iD;
        return [...cD, MD(1.4)]
      },
      shotgun: DD => [ZD(DD, 3, "Ring Outline"), ZD(DD, 1.5, "Ring")],
      marksman: DD => [tD(`M${26-DD/2} ${39+DD/2} L32 33 L${38+DD/2} ${39+DD/2}`, 2), yD(14 - DD, BD, 24 - DD, BD, 1.5), yD(40 + DD, BD, 50 + DD, BD, 1.5), yD(14 - DD, 30, 14 - DD, 34, 1.5), yD(50 + DD, 30, 50 + DD, 34, 1.5)],
      machineGun: DD => {
        const CD = 10 + DD,
          cD = [];
        for (const [ID, pD] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) cD.push(tD(`M${BD+ID*CD} ${BD+pD*(CD-5)} L${BD+ID*CD} ${BD+pD*CD} L${BD+ID*(CD-5)} ${BD+pD*CD}`, 2));
        return [...cD, yD(BD, 28, BD, 36, 1.5), yD(28, BD, 36, BD, 1.5)]
      },
      launcher: () => [yD(14, 30, 50, 30, 1.5), yD(BD, 24, BD, 52, 1.5), yD(28, 38, 36, 38, 1.5), yD(29, 44, 35, 44, 1.5), yD(30, 50, 34, 50, 1.5), oD(38, 40, "100"), oD(37, 46, "200"), MD(1.4, 30)],
      melee: () => [tD("M32 26 L38 32 L32 38 L26 32 Z", 1.5), MD(1.2)],
      throwable: () => [MD(1.6)]
    };

    function ND(DD) {
      let {
        tag: CD,
        attrs: cD,
        text: ID
      } = DD, pD = `<${CD}`;
      for (const [iD, fD] of Object.entries(cD)) pD += ` ${iD}="${fD}"`;
      return void 0 === ID ? `${pD}/>` : `${pD}>${ID}</${CD}>`
    }
    class gD {
      constructor(DD, CD) {
        this.api = DD, this.localPlayerId = CD, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = DD => {
          this.element = DD, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, DD && !this.enabled && (DD.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, QD.getRemInPx)()))
        }, this.tokens = [wD.i.subscribe("aimingOverlay", (DD => {
          this.sniperOverlay = "sniper" === DD
        })), wD.i.subscribe("mouseState", (DD => {
          let {
            isDown: CD
          } = DD;
          this.mouseDown = CD
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      lH(DD) {
        DD !== this.enabled && (this.enabled = DD, this.drawnVisible = null, DD || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(DD, CD) {
        var cD, ID;
        if (!this.enabled) return;
        const {
          api: pD
        } = this, iD = pD.isAlive(this.localPlayerId) && null !== (cD = null === (ID = pD.FDD(this.localPlayerId)) || void 0 === ID ? void 0 : ID.name) && void 0 !== cD ? cD : null, fD = (bD = iD) && SD[bD] || null;
        var bD;
        if (this.setOwnsCrosshair(null !== fD), !this.element) return;
        const QD = pD.getHeldGunInaccuracy(),
          wD = null !== QD,
          BD = null !== fD && !this.sniperOverlay && pD.isCrosshairShown();
        if (BD !== this.drawnVisible && (this.drawnVisible = BD, this.element.style.display = BD ? "block" : "none"), !BD) return;
        const yD = wD ? function(DD) {
            return "launcher" === DD || "melee" === DD || "throwable" === DD ? "none" : "shotgun" === DD ? "cone" : "offset"
          }(fD) : "none",
          MD = null !== QD && void 0 !== QD ? QD : 0;
        "cone" === yD ? this.drawCone(fD, this.coneRadiusVh(MD, CD) * this.gapPerVh, DD) : (this.coneDrawn = !1, this.draw(fD, "none" === yD ? 2 : this.offsetGap(MD)));
        const tD = !wD && this.mouseDown;
        tD !== this.drawnPressed && (this.drawnPressed = tD, this.element.classList.toggle("Pressed", tD))
      }
      dispose() {
        for (const DD of this.tokens) wD.i.unsubscribe(DD);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(DD, CD) {
        var cD, ID;
        DD !== this.drawnFamily ? (this.drawnFamily = DD, this.drawnGap = CD, this.element.innerHTML = function(DD, CD) {
          return `<svg viewBox="0 0 64 64">${vD[DD](CD).map(ND).join("")}</svg>`
        }(DD, CD), this.shapes = Array.from(null !== (cD = null === (ID = this.element.firstElementChild) || void 0 === ID ? void 0 : ID.children) && void 0 !== cD ? cD : [])) : CD !== this.drawnGap && (this.drawnGap = CD, function(DD, CD, cD) {
          const ID = vD[CD](cD);
          for (let pD = 0; pD < ID.length; pD++)
            for (const [CD, cD] of Object.entries(ID[pD].attrs)) {
              const ID = String(cD);
              DD[pD].getAttribute(CD) !== ID && DD[pD].setAttribute(CD, ID)
            }
        }(this.shapes, DD, CD))
      }
      drawCone(DD, CD, cD) {
        DD === this.drawnFamily && this.coneDrawn ? this.shownRadius += (CD - this.shownRadius) * (1 - Math.exp(-cD / 80)) : this.shownRadius = CD, this.coneDrawn = !0, this.draw(DD, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(DD, CD) {
        if (!(CD > 0)) return 1;
        const cD = DD * fD.f / 2;
        return Math.max(50 * Math.tan(cD) / CD, 1)
      }
      offsetGap(DD) {
        const CD = 2 + ((0, bD.g)(DD) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * CD) / 2)
      }
      setOwnsCrosshair(DD) {
        DD !== this.ownsCrosshair && (this.ownsCrosshair = DD, document.body.classList.toggle("FrontlineCustomCrosshair", DD))
      }
    }
    const XD = "FrontlineCustomDamage",
      mD = .45,
      nD = .2;
    class OD {
      constructor(DD, CD) {
        this.api = DD, this.localPlayerId = CD, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.mp = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = DD => {
          var CD, cD;
          this.clearHits(), this.root = DD, this.lowLayer = null !== (CD = null === DD || void 0 === DD ? void 0 : DD.querySelector(".FrontlineDamageLow")) && void 0 !== CD ? CD : null, this.arcLayer = null !== (cD = null === DD || void 0 === DD ? void 0 : DD.querySelector(".FrontlineDamageArcs")) && void 0 !== cD ? cD : null, this.showRoot(), this.drawLow()
        }, this.token = wD.i.subscribe("damagedByOtherPlayer", (DD => {
          let {
            direction: CD,
            Np: cD
          } = DD;
          this.onHurt(CD, cD)
        })), this.syncHealth(), document.body.classList.add(XD)
      }
      lH(DD) {
        DD !== this.enabled && (this.enabled = DD, document.body.classList.toggle(XD, DD), DD || this.clearHits(), this.showRoot())
      }
      frame(DD) {
        this.syncHealth(), this.cameraHeading = DD;
        for (const CD of this.arcs) this.drawArcAngle(CD)
      }
      dispose() {
        wD.i.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(XD)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const DD = this.api.getClientOption(this.localPlayerId, "_health"),
          CD = this.api.getClientOption(this.localPlayerId, "_shield"),
          cD = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(DD, this.readHealth) && Object.is(CD, this.readShield) && Object.is(cD, this.readMaxHealth)) return;
        if (this.readHealth = DD, this.readShield = CD, this.readMaxHealth = cD, null === DD || void 0 === DD || !cD) return this.lastHealthPool = null, this.maxHealth = null, this.mp = 1, this.dead = !1, void this.drawLow();
        const ID = DD + (null !== CD && void 0 !== CD ? CD : 0);
        if (null !== this.lastHealthPool && ID < this.lastHealthPool) {
          const DD = performance.now(),
            CD = (this.lastHealthPool - ID) / cD;
          this.lastDrop = DD - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + CD,
            at: this.lastDrop.at
          } : {
            frac: CD,
            at: DD
          }
        }
        this.dead = DD <= 0, this.dead && this.clearHits(), this.lastHealthPool = ID, this.maxHealth = cD, this.mp = DD > 0 ? DD / cD : 1, this.drawLow()
      }
      onHurt(DD, CD) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const cD = Math.min(1, this.takeDamageFrac(CD) / .3);
        null !== DD && this.showArc(DD, cD), this.flashEdge(null === DD ? null : DD - this.cameraHeading, .4 + .6 * cD)
      }
      takeDamageFrac(DD) {
        if (void 0 !== DD && this.maxHealth) return DD / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: CD
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, CD
      }
      drawLow() {
        if (!this.lowLayer) return;
        const DD = HD((mD - this.mp) / .25),
          CD = HD((nD - this.mp) / .15000000000000002),
          cD = this.mp < mD;
        this.lowLayer.classList.toggle("Active", cD), this.lowLayer.classList.toggle("Critical", this.mp < nD), this.lowLayer.style.opacity = String(cD ? .55 + .3 * DD + .15 * CD : 0)
      }
      showArc(DD, CD) {
        var cD, ID;
        if (!this.arcLayer) return;
        let pD = this.arcs.find((CD => PD(CD.direction, DD) < .6));
        if (!pD) {
          const CD = document.createElement("div");
          CD.className = "FrontlineDamageArc", CD.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(CD), pD = {
            element: CD,
            direction: DD,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(pD)
        }
        pD.direction = DD, this.drawArcAngle(pD);
        const iD = pD.fade ? Number(getComputedStyle(pD.element).opacity) : 0;
        null === (cD = pD.fade) || void 0 === cD || cD.cancel(), null === (ID = pD.pop) || void 0 === ID || ID.cancel(), pD.element.style.opacity = "1";
        const fD = pD.element.animate([{
          opacity: iD
        }, {
          opacity: 1
        }], 144);
        pD.fade = fD, pD.pop = pD.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * CD
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const bD = pD;
        fD.onfinish = () => {
          if (bD.fade !== fD) return;
          const DD = bD.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          DD.startTime = fD.startTime, bD.fade = DD, DD.onfinish = () => {
            bD.fade === DD && (bD.element.remove(), UD(this.arcs, bD))
          }
        }
      }
      drawArcAngle(DD) {
        const CD = DD.direction - this.cameraHeading;
        (null === DD.drawnAngle || Math.abs(CD - DD.drawnAngle) > .005) && (DD.drawnAngle = CD, DD.element.style.rotate = `${CD}rad`)
      }
      flashEdge(DD, CD) {
        var cD, ID, pD;
        if (!this.root) return;
        let iD = this.flashes.find((CD => null === CD.angle || null === DD ? CD.angle === DD : PD(CD.angle, DD) < .5));
        if (!iD) {
          const CD = document.createElement("div");
          CD.className = "FrontlineDamageFlash";
          const cD = CD.appendChild(document.createElement("div"));
          cD.className = "FrontlineDamageFlashGlow", this.root.insertBefore(CD, this.arcLayer), iD = {
            element: CD,
            glow: cD,
            angle: DD,
            level: 0,
            animation: null
          }, this.flashes.push(iD)
        }
        const fD = null === (cD = iD.animation) || void 0 === cD || null === (ID = cD.effect) || void 0 === ID ? void 0 : ID.getComputedTiming().progress,
          bD = null === fD || void 0 === fD ? 0 : iD.level * (1 - fD);
        iD.level = Math.min(1, Math.max(CD, bD + .6 * CD)), iD.angle = DD;
        const {
          x: QD,
          y: wD,
          rx: SD,
          ry: BD
        } = function(DD, CD) {
          const cD = window.innerWidth,
            ID = window.innerHeight;
          if (null === DD) return {
            x: cD / 2,
            y: ID / 2,
            rx: 0,
            ry: 0
          };
          const pD = Math.sin(DD),
            iD = -Math.cos(DD),
            fD = cD / 2 / Math.max(1e-6, Math.abs(pD)),
            bD = ID / 2 / Math.max(1e-6, Math.abs(iD)),
            QD = Math.min(fD, bD),
            wD = Math.round(cD / 2 + pD * QD),
            SD = Math.round(ID / 2 + iD * QD),
            BD = ID / 100 * (.85 + .25 * CD),
            yD = fD <= bD,
            MD = Math.round((yD ? 30 : 74) * BD),
            tD = Math.round((yD ? 58 : 26) * BD);
          return {
            x: wD,
            y: SD,
            rx: MD,
            ry: tD
          }
        }(DD, iD.level), {
          style: yD
        } = iD.glow;
        iD.glow.classList.toggle("Everywhere", null === DD), yD.setProperty("--glowX", `${QD}px`), yD.setProperty("--glowY", `${wD}px`), yD.setProperty("--glowRx", `${SD}px`), yD.setProperty("--glowRy", `${BD}px`), iD.element.style.transformOrigin = `${QD}px ${wD}px`, null === (pD = iD.animation) || void 0 === pD || pD.cancel();
        const MD = iD.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: iD.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * iD.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * iD.level
        });
        iD.animation = MD;
        const tD = iD;
        MD.onfinish = () => {
          tD.animation === MD && (tD.element.remove(), UD(this.flashes, tD))
        }
      }
      clearHits() {
        for (const ID of this.arcs) {
          var DD, CD;
          null === (DD = ID.fade) || void 0 === DD || DD.cancel(), ID.fade = null, null === (CD = ID.pop) || void 0 === CD || CD.cancel(), ID.element.remove()
        }
        this.arcs.length = 0;
        for (const ID of this.flashes) {
          var cD;
          null === (cD = ID.animation) || void 0 === cD || cD.cancel(), ID.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function PD(DD, CD) {
      return Math.abs(Math.atan2(Math.sin(DD - CD), Math.cos(DD - CD)))
    }

    function HD(DD) {
      return Math.max(0, Math.min(1, DD))
    }

    function UD(DD, CD) {
      const cD = DD.indexOf(CD); - 1 !== cD && DD.splice(cD, 1)
    }
    var xD = cD(1049),
      qD = cD.n(xD),
      JD = cD(35994),
      KD = cD(36085),
      aD = cD(1192),
      VD = cD(1440);
    const zD = "frontlineHudChanged",
      jD = "frontlineScoreboardChanged";
    class lD {
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
      kt(DD) {
        this.wire = DD, wD.i.Uo(zD, DD, !0)
      }
      receiveScoreboard(DD) {
        let CD = "scoreboard" === DD[0] ? performance.now() + DD[5] : 0;
        const cD = this.scoreboard.endsAt;
        0 !== CD && 0 !== cD && Math.abs(CD - cD) < 1e3 && (CD = cD), this.scoreboard = {
          wire: DD,
          endsAt: CD
        }, wD.i.Uo(jD, this.scoreboard, !0)
      }
    }
    var LD = cD(1093);
    const TD = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function GD(DD) {
      const [CD, cD] = (0, pD.useState)((() => (DD - performance.now()) / 1e3));
      return (0, pD.useEffect)((() => {
        if (0 === DD) return;
        const CD = () => {
          cD((DD - performance.now()) / 1e3)
        };
        CD();
        const ID = window.setInterval(CD, 250);
        return () => {
          window.clearInterval(ID)
        }
      }), [DD]), CD
    }

    function RD(DD) {
      let {
        className: CD,
        point: cD
      } = DD;
      const [ID, pD, iD, fD, bD, QD] = cD;
      return (0, LD.jsxs)("div", {
        className: qD()(CD, `Owner-${pD||"None"}`, `Leader-${fD||"None"}`, {
          Contested: bD,
          Here: QD
        }),
        children: [(0, LD.jsx)("span", {
          className: "FrontlinePointLetter",
          children: ID
        }), (0, LD.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${iD}%`
          }
        })]
      })
    }
    const kD = (0, pD.memo)((function(DD) {
        let {
          points: CD,
          markers: cD
        } = DD;
        const {
          t: ID
        } = (0, aD.F)();
        return CD ? (0, LD.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: CD.map((DD => {
            const [CD, , , , , , , pD] = DD;
            return (0, LD.jsxs)("div", {
              ref: cD.bindMarker(CD),
              className: "FrontlinePointMarker",
              children: [(0, LD.jsx)(RD, {
                className: "FrontlinePointMarkerTile",
                point: DD
              }), (0, LD.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [pD && (0, LD.jsx)("span", {
                  className: qD()("FrontlinePointMarkerHomeTurf", `Team-${pD}`),
                  children: ID("frontlineHud:homeTurf", {
                    team: ID(TD[pD])
                  })
                }), (0, LD.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, CD)
          }))
        }) : null
      })),
      dD = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      YD = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function WD(DD) {
      let {
        hud: CD,
        crosshair: cD,
        damage: ID,
        markers: pD
      } = DD;
      const iD = (0, VD.g)(zD, CD.getWire()),
        fD = (0, VD.g)(jD, CD.getScoreboard());
      return (0, LD.jsxs)(LD.Fragment, {
        children: [(0, LD.jsx)(sD, {
          damage: ID
        }), (0, LD.jsx)(kD, {
          points: "scoreboard" === fD.wire[0] ? fD.wire[6] : null,
          markers: pD
        }), (0, LD.jsx)(eD, {
          view: fD
        }), (0, LD.jsx)("div", {
          className: "FrontlineReticle",
          ref: cD.bindElement
        }), (0, LD.jsx)(JD.e, {
          children: (0, LD.jsx)(ED, {
            wire: iD
          })
        })]
      })
    }
    const sD = (0, pD.memo)((function(DD) {
        let {
          damage: CD
        } = DD;
        return (0, LD.jsxs)("div", {
          className: "FrontlineDamage",
          ref: CD.bindElement,
          children: [(0, LD.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, LD.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, LD.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      ED = (0, pD.memo)((function(DD) {
        let {
          wire: CD
        } = DD;
        const {
          t: cD
        } = (0, aD.F)();
        if ("capture" === CD[0]) {
          const [, DD, ID, pD, iD, fD, bD] = CD, QD = Math.round(pD / 100 * 24);
          return (0, LD.jsxs)("div", {
            className: qD()("FrontlinePlate", `Status-${ID}`, `Leader-${iD||"None"}`),
            children: [(0, LD.jsx)(AD, {}), (0, LD.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, LD.jsx)("span", {
                className: "FrontlineObjective",
                children: DD
              }), (0, LD.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, LD.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: cD("frontlineHud:objective", {
                    point: DD,
                    friendly: fD,
                    enemy: bD
                  })
                }), (0, LD.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: cD(dD[ID])
                })]
              }), (0, LD.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(pD).padStart(3, "0"), (0, LD.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, LD.jsx)(hD, {
              segments: 24,
              lit: QD
            })]
          })
        }
        if ("alert" === CD[0]) {
          const [, DD, ID, pD] = CD;
          return (0, LD.jsxs)("div", {
            className: qD()("FrontlinePlate", "FrontlineAlert", `Tone-${pD}`),
            children: [(0, LD.jsx)(AD, {}), (0, LD.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: cD(YD[DD])
            }), (0, LD.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: ID
            })]
          })
        }
        return null
      })),
      eD = (0, pD.memo)((function(DD) {
        let {
          view: CD
        } = DD;
        const {
          t: cD
        } = (0, aD.F)(), ID = (0, pD.useRef)(null), iD = function(DD, CD) {
          const [cD, ID] = (0, pD.useState)(!1);
          return (0, pD.useLayoutEffect)((() => {
            const CD = DD.current;
            if (!CD) return;
            const cD = document.querySelector(`.${KD.g}`),
              pD = document.querySelector(`.${KD.h}`),
              iD = () => {
                var DD;
                const iD = CD.querySelector(".FrontlineTeamTrack"),
                  fD = (0, QD.getRemInPx)(),
                  bD = CD.getBoundingClientRect().width - 2 * (null !== (DD = null === iD || void 0 === iD ? void 0 : iD.getBoundingClientRect().width) && void 0 !== DD ? DD : 0),
                  wD = window.innerWidth / 2,
                  SD = cD ? cD.getBoundingClientRect().right : 0,
                  BD = pD ? pD.getBoundingClientRect().left : window.innerWidth,
                  yD = Math.min(wD - SD, BD - wD) - KD.c - bD / 2,
                  MD = yD < 6 * fD,
                  tD = MD ? (window.innerWidth - bD) / 2 - KD.c : yD;
                CD.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(tD,14*fD)))}px`), ID(MD)
              };
            iD();
            const fD = new ResizeObserver(iD);
            for (const DD of [CD, cD, pD]) DD && fD.observe(DD);
            return window.addEventListener("resize", iD), () => {
              fD.disconnect(), window.removeEventListener("resize", iD)
            }
          }), [DD, CD]), cD
        }(ID, "scoreboard" === CD.wire[0]);
        if ("scoreboard" !== CD.wire[0]) return null;
        const [, fD, bD, wD, SD, , BD] = CD.wire, yD = "Red" === fD ? "Blue" : "Red";
        return (0, LD.jsxs)("div", {
          className: qD()("FrontlineScoreboardContainer", {
            Below: iD
          }),
          children: [(0, LD.jsxs)("div", {
            ref: ID,
            className: "FrontlineScoreboard",
            children: [(0, LD.jsx)(AD, {}), (0, LD.jsx)(uD, {
              team: fD,
              tickets: bD,
              goal: SD,
              side: "Friendly"
            }), (0, LD.jsx)("div", {
              className: "FrontlinePoints",
              children: BD.map((DD => (0, LD.jsx)(RD, {
                className: "FrontlinePoint",
                point: DD
              }, DD[0])))
            }), (0, LD.jsx)(uD, {
              team: yD,
              tickets: wD,
              goal: SD,
              side: "Enemy"
            })]
          }), (0, LD.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, LD.jsx)(rD, {
              endsAt: CD.endsAt
            }), (0, LD.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: cD("frontlineHud:ticketGoal", {
                goal: SD
              })
            })]
          })]
        })
      }));

    function uD(DD) {
      let {
        team: CD,
        tickets: cD,
        goal: ID,
        side: pD
      } = DD;
      const {
        t: iD
      } = (0, aD.F)(), fD = String(cD).padStart(3, "0"), bD = fD.search(/[1-9]/), QD = -1 === bD ? fD : fD.slice(0, bD), wD = Math.min(20, Math.floor(cD / ID * 20));
      return (0, LD.jsxs)("div", {
        className: qD()("FrontlineTeamScore", pD, `Team-${CD}`),
        children: [(0, LD.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, LD.jsx)("span", {
            className: "Lead",
            children: QD
          }), -1 !== bD && fD.slice(bD)]
        }), (0, LD.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, LD.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: iD(TD[CD])
          }), (0, LD.jsx)(hD, {
            segments: 20,
            lit: wD
          })]
        })]
      })
    }

    function hD(DD) {
      let {
        segments: CD,
        lit: cD
      } = DD;
      return (0, LD.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: CD
        }, ((DD, CD) => (0, LD.jsx)("i", {
          className: qD()({
            Lit: CD < cD
          })
        }, CD)))
      })
    }

    function rD(DD) {
      let {
        endsAt: CD
      } = DD;
      const cD = Math.max(0, Math.ceil(GD(CD)));
      return (0, LD.jsxs)("div", {
        className: qD()("FrontlineClock", {
          Urgent: cD <= 60
        }),
        children: [Math.floor(cD / 60), ":", String(cD % 60).padStart(2, "0")]
      })
    }

    function AD() {
      return (0, LD.jsxs)(LD.Fragment, {
        children: [(0, LD.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, LD.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var FD = cD(36083),
      DC = cD(1250),
      CC = cD(37870),
      cC = cD(37907);
    class IC {
      constructor(DD) {
        var CD;
        this.hud = DD, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.Lt = !1, this.yX = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.yX), null === (CD = window.visualViewport) || void 0 === CD || CD.addEventListener("resize", this.yX)
      }
      bindMarker(DD) {
        let CD = this.refs.get(DD);
        return CD || (CD = CD => {
          var cD;
          null === (cD = this.markers.get(DD)) || void 0 === cD || cD.stopObserving(), this.markers.delete(DD), CD && !this.Lt && this.markers.set(DD, this.mount(CD))
        }, this.refs.set(DD, CD)), CD
      }
      frame(DD, CD) {
        this.render = DD;
        const cD = this.hud.getScoreboard().wire;
        if ("scoreboard" === cD[0] && 0 !== this.markers.size)
          for (const [ID, , , , , , pD] of cD[6]) {
            const DD = this.markers.get(ID);
            DD && pD && (DD.target ??= [0, 0, 0], DD.target[0] = pD[0], DD.target[1] = pD[1] + 2.5, DD.target[2] = pD[2], this.place(DD), this.Fp(DD, CD && Math.hypot(pD[0] - CD[0], pD[1] - CD[1], pD[2] - CD[2])))
          }
      }
      dispose() {
        var DD;
        this.Lt = !0, window.removeEventListener("resize", this.yX), null === (DD = window.visualViewport) || void 0 === DD || DD.removeEventListener("resize", this.yX);
        for (const CD of this.markers.values()) CD.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(DD) {
        const {
          render: CD,
          viewport: cD
        } = this;
        if (!CD || !DD.target) return;
        const ID = (50 - CD.screenBandPct.y) / 100 * cD.height,
          pD = {
            x: DD.halfSize.width + 8,
            top: DD.halfSize.height + 8,
            bottom: DD.halfSize.height + DD.labelsBelow + ID
          },
          iD = CD.projectWorldPosToViewport(DD.target),
          fD = null !== iD && void 0 !== iD ? iD : CD.projectWorldPosToScreenPos(DD.target),
          bD = (0, cC.e)({
            x: fD.x,
            y: fD.y,
            text: iD
          }, pD, cD);
        (0, CC.c)(DD.root, Math.round(100 * bD.x) / 100, Math.round(100 * bD.y) / 100)
      }
      Fp(DD, CD) {
        if (null === CD) return void(null !== DD.metres && (DD.metres = null, DD.distance.textContent = ""));
        const cD = Date.now();
        (null === DD.metres || (0, FD.d)(CD, DD.metres, DD.metresShownAt)) && (DD.metres = Math.round(CD), DD.metresShownAt = cD, DD.distance.textContent = (0, aD.y)(DC.e.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(DD.metres)
        }))
      }
      mount(DD) {
        const CD = {
            root: DD,
            distance: DD.querySelector(".FrontlinePointMarkerDistance"),
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
          cD = DD.querySelector(".FrontlinePointMarkerLabels"),
          ID = new ResizeObserver((() => {
            CD.halfSize = {
              width: Math.max(DD.offsetWidth, cD.offsetWidth) / 2,
              height: DD.offsetHeight / 2
            }, CD.labelsBelow = cD.offsetTop + cD.offsetHeight - DD.offsetHeight, this.place(CD)
          }));
        return ID.observe(DD, {
          box: "border-box"
        }), ID.observe(cD, {
          box: "border-box"
        }), CD.stopObserving = () => {
          ID.disconnect()
        }, CD
      }
    }
    var pC = cD(6176),
      iC = cD(2482);
    const fC = "frontlineRoundEndChanged";
    class bC {
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
      kt(DD) {
        const CD = "roundEnd" === DD[0] ? performance.now() + DD[5] : 0;
        this.view = {
          wire: DD,
          key: this.view.key + 1,
          endsAt: CD
        }, wD.i.Uo(fC, this.view, !0)
      }
    }
    const QC = (0, pD.lazy)((() => (0, iC.c)(cD.e(191).then((() => cD(40845))), (DD => DD.FrontlineMvpLineup)))),
      wC = [4800, 4e3, 3200],
      SC = [1, 0, 2],
      BC = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      yC = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function MC(DD) {
      let {
        controller: CD
      } = DD;
      const cD = (0, VD.g)(fC, CD.getView()),
        ID = GD(cD.endsAt);
      return "roundEnd" !== cD.wire[0] || 1e3 * ID < -2e3 ? null : (0, LD.jsx)(tC, {
        wire: cD.wire,
        secondsLeft: Math.max(0, Math.ceil(ID))
      }, cD.key)
    }
    const tC = (0, pD.memo)((function(DD) {
      let {
        wire: CD,
        secondsLeft: cD
      } = DD;
      const {
        t: iD
      } = (0, aD.F)(), [, fD, bD, QD, wD, , SD, BD] = CD, yD = (0, pD.useMemo)((() => SC.filter((DD => DD < BD.length))), [BD]), MD = (0, pD.useMemo)((() => yD.map((DD => {
        const [, , , , , CD, cD] = BD[DD];
        return {
          cosmetics: ID.map(((DD, cD) => [DD, CD[cD]])),
          size: 0 === DD ? 1.15 : .85,
          heldGun: {
            name: cD,
            aimed: 0 === DD
          },
          showAfterMs: wC[DD]
        }
      }))), [BD, yD]);
      return (0, LD.jsxs)("div", {
        className: qD()("FrontlineRoundEnd", `Result-${fD}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, LD.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, LD.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, LD.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, LD.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, LD.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (tD = iD(BC[fD]), /\p{Script=Arabic}/u.test(tD) ? [tD] : (0, pC.b)(tD)).map(((DD, CD) => (0, LD.jsx)("span", {
              style: {
                "--letter": CD
              },
              children: DD
            }, CD)))]
          }), (0, LD.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [bD && "victory" === fD && (0, LD.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: iD("frontlineRoundEnd:comeback")
            }), (0, LD.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, LD.jsx)("b", {
                className: "Friendly",
                children: QD
              }), " \u2013 ", (0, LD.jsx)("b", {
                className: "Enemy",
                children: wD
              })]
            })]
          })]
        }), yD.length > 0 && (0, LD.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": yD.length
          },
          children: [(0, LD.jsx)(pD.Suspense, {
            fallback: null,
            children: (0, LD.jsx)(QC, {
              className: "FrontlineRoundEndLineup",
              players: MD
            })
          }), yD.map((DD => (0, LD.jsx)(ZC, {
            mvp: BD[DD],
            place: DD
          }, DD)))]
        }), (0, LD.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: iD("frontlineRoundEnd:nextFront", {
            map: SD,
            seconds: String(cD)
          })
        })]
      });
      var tD
    }));

    function ZC(DD) {
      let {
        mvp: CD,
        place: cD
      } = DD;
      const {
        t: ID
      } = (0, aD.F)(), [pD, iD, fD, bD, QD] = CD, [wD, SD] = ID(function(DD, CD) {
        return 1 === CD && "damage" !== DD ? `frontlineRoundEnd:${DD}One` : `frontlineRoundEnd:${DD}`
      }(fD, bD), {
        name: "\0",
        count: bD.toLocaleString()
      }).split("\0");
      return (0, LD.jsxs)("div", {
        className: qD()("FrontlineMvpCard", `Place-${cD+1}`, `Team-${iD}`),
        style: {
          "--revealMs": `${wC[cD]}ms`
        },
        children: [(0, LD.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, LD.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, LD.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: ID(yC[cD])
        }), (0, LD.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [wD, (0, LD.jsx)("span", {
            className: "FrontlineMvpName",
            children: pD
          }), SD]
        }), (0, LD.jsx)("div", {
          className: "FrontlineMvpKit",
          children: QD
        })]
      })
    }
    const oC = function(DD, CD, cD, ID) {
      let {
        localPlayerId: fD
      } = ID;
      const bD = new lD,
        QD = new bC;
      let wD = null,
        SD = null,
        BD = null,
        yD = null,
        MD = null,
        tD = [!1, !1];
      const ZD = () => {
        var DD, CD;
        const [cD, ID] = tD;
        null === (DD = SD) || void 0 === DD || DD.lH(!cD), null === (CD = BD) || void 0 === CD || CD.lH(!ID)
      };
      return {
        onCreate: DD => {
          wD = DD, SD = new gD(DD, fD), BD = new OD(DD, fD), yD = new IC(bD), ZD(), MD = (0, iD.v)((0, pD.createElement)(pD.Fragment, null, (0, pD.createElement)(WD, {
            hud: bD,
            crosshair: SD,
            damage: BD,
            markers: yD
          }), (0, pD.createElement)(MC, {
            controller: QD
          })))
        },
        onClose: () => {
          var DD, CD, cD, ID;
          null === (DD = MD) || void 0 === DD || DD(), null === (CD = SD) || void 0 === CD || CD.dispose(), SD = null, null === (cD = BD) || void 0 === cD || cD.dispose(), BD = null, null === (ID = yD) || void 0 === ID || ID.dispose(), yD = null, wD = null
        },
        onAfterRender: (DD, CD) => {
          var cD, ID, pD, iD;
          null === (cD = SD) || void 0 === cD || cD.frame(DD, CD.tanHalfFovY), null === (ID = BD) || void 0 === ID || ID.frame(CD.cameraHeading), null === (pD = yD) || void 0 === pD || pD.frame(CD, null !== (iD = wD) && void 0 !== iD && iD.checkValid(fD) ? wD.FX(fD) : null)
        },
        onReceivedMessageFromServer: (DD, CD) => {
          "frontlineHud" === DD ? bD.kt(CD) : "frontlineScoreboard" === DD ? bD.receiveScoreboard(CD) : "frontlineRoundEnd" === DD ? QD.kt(CD) : "frontlinePrefs" === DD && (tD = CD, ZD())
        }
      }
    }
  },
  6176: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD
    });
    const ID = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function pD(DD) {
      return null === ID ? Array.from(DD) : Array.from(ID.segment(DD), (DD => {
        let {
          segment: CD
        } = DD;
        return CD
      }))
    }
  },
  37870: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      e: () => iD
    });
    const ID = new WeakMap;

    function pD(DD) {
      let CD = ID.get(DD);
      return CD || (CD = {
        hidden: DD.hidden,
        x: NaN,
        y: NaN
      }, ID.set(DD, CD)), CD
    }

    function iD(DD, CD) {
      const cD = pD(DD);
      cD.hidden !== CD && (cD.hidden = CD, DD.hidden = CD)
    }

    function fD(DD, CD, cD) {
      const ID = pD(DD);
      ID.x === CD && ID.y === cD || (ID.x = CD, ID.y = cD, DD.style.translate = `${CD}vw ${cD}vh`)
    }
  },
  36420: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    const ID = {
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
for (const DD in modules) Object.freeze(modules[DD]);