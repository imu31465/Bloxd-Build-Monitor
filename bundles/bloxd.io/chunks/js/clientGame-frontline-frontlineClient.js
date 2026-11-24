export const id = 17;
export const ids = [17];
export const modules = {
  36577: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => fD,
      g: () => ID,
      i: () => UD,
      l: () => AD
    });
    var pD = wD(34206),
      sD = wD(36580),
      KD = wD(36586),
      rD = wD(8726),
      LD = wD(1442),
      cD = wD(58),
      gD = wD(79),
      RD = wD(1096);

    function AD() {
      var DD;
      return (0, LD.k)(sD.c, (0, sD.p)()), (0, RD.jsx)(RD.Fragment, {
        children: null === (DD = (0, sD.p)()) || void 0 === DD ? void 0 : DD.content
      })
    }

    function UD(DD) {
      var zD;
      let {
        show: wD
      } = DD;
      (0, LD.k)(sD.c, (0, sD.p)());
      const gD = null === (zD = (0, sD.p)()) || void 0 === zD ? void 0 : zD.menu;
      return (0, cD.useEffect)((() => {
        var DD;
        wD || (null === gD || void 0 === gD || null === (DD = gD.onClose) || void 0 === DD || DD.call(gD), (0, KD.q)())
      }), [wD, gD]), (0, cD.useEffect)((() => wD ? (0, rD.g)(KD.y, KD.h) : void 0), [wD]), (0, RD.jsx)(pD.d, {
        showing: wD,
        globallyUniqueKey: "clientGameMenu",
        children: null === gD || void 0 === gD ? void 0 : gD.content
      })
    }

    function fD(DD) {
      let {
        placement: zD = "bottom"
      } = DD;
      return (0, RD.jsx)("div", {
        id: `clientGameHud-${zD}`,
        style: {
          display: "contents"
        }
      })
    }

    function ID(DD) {
      let {
        children: zD,
        placement: wD = "bottom"
      } = DD;
      const [pD, sD] = (0, cD.useState)(null);
      return (0, cD.useEffect)((() => {
        sD(document.getElementById(`clientGameHud-${wD}`))
      }), [wD]), pD ? (0, gD.createPortal)(zD, pD) : null
    }
  },
  34206: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(4555),
      sD = wD(4562);

    function KD(DD) {
      let {
        children: zD,
        showing: wD,
        globallyUniqueKey: KD,
        alwaysMountChildren: rD = !1,
        doGameplayStartStopOnShow: LD = !0,
        keepsMovement: cD = !1
      } = DD;
      return (0, sD.e)(!0, wD, KD, cD), (0, pD.b)(LD, wD), wD || rD ? zD : null
    }
  },
  36658: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      e: () => rD,
      f: () => LD,
      i: () => cD
    });
    var pD = wD(58),
      sD = wD(3089);
    const KD = 8,
      rD = "InGameHeaderContainer",
      LD = "TopRightElements";

    function cD(DD) {
      const [zD] = (0, sD.d)(), [wD, cD] = (0, pD.useState)(!1);
      return (0, pD.useLayoutEffect)((() => {
        if (!DD) return;
        const zD = document.querySelector(`.${rD}`),
          wD = document.querySelector(`.${LD}`),
          pD = () => {
            const pD = DD.getBoundingClientRect(),
              sD = zD ? zD.getBoundingClientRect().right : 0,
              rD = wD ? wD.getBoundingClientRect().left : window.innerWidth,
              LD = pD.left < sD + KD,
              gD = pD.right > rD - KD;
            cD(LD || gD)
          };
        pD();
        const sD = new ResizeObserver(pD);
        return sD.observe(DD), zD && sD.observe(zD), wD && sD.observe(wD), () => {
          sD.disconnect()
        }
      }), [DD, zD]), wD
    }
  },
  36650: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    const pD = [{
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

    function sD(DD, zD, wD) {
      const sD = Math.abs(DD - zD),
        KD = Date.now() - wD;
      for (const rD of pD)
        if (DD < rD.maxDist) return sD >= rD.hardUpdateDist || KD > rD.timeBetweenSoftChecks && sD >= rD.softUpdateDist;
      return !1
    }
  },
  8726: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD,
      g: () => sD
    });
    let pD = null;
    const sD = function(DD) {
        const zD = {
          cycle: DD,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return pD = zD, () => {
          pD === zD && (pD = null)
        }
      },
      KD = () => {
        var DD;
        return null !== (DD = pD) && void 0 !== DD && DD.canCycle() ? pD.cycle : null
      }
  },
  38524: (DD, zD, wD) => {
    function pD(DD, zD, wD) {
      var pD;
      const {
        width: sD,
        height: KD
      } = wD, rD = null !== (pD = DD.text) && void 0 !== pD ? pD : DD, LD = (rD.x / 100 - .5) * sD, cD = (rD.y / 100 - .5) * KD, gD = sD / 2 - zD.x;
      if (null !== DD.text && Math.abs(LD) <= gD && cD >= zD.top - KD / 2 && cD <= KD / 2 - zD.bottom) return {
        x: rD.x,
        y: rD.y
      };
      const RD = Math.min(0 === LD ? 1 / 0 : gD / Math.abs(LD), cD > 0 ? (KD / 2 - zD.bottom) / cD : cD < 0 ? (zD.top - KD / 2) / cD : 1 / 0);
      return !Number.isFinite(RD) || RD < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + LD * RD / sD * 100,
        y: 50 + cD * RD / KD * 100
      }
    }
    wD.d(zD, {
      c: () => pD
    })
  },
  36586: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      h: () => BD,
      j: () => GD,
      k: () => LD,
      m: () => UD,
      q: () => hD,
      s: () => AD,
      v: () => MD,
      y: () => ID,
      z: () => nD
    });
    var pD = wD(20),
      sD = wD(25);
    const KD = "clientGameInventoryButtonsChanged",
      rD = new Map;

    function LD() {
      return [...rD.values()].sort(((DD, zD) => {
        var wD, pD;
        return (null !== (wD = DD.order) && void 0 !== wD ? wD : 0) - (null !== (pD = zD.order) && void 0 !== pD ? pD : 0)
      }))
    }
    let cD = null;

    function gD(DD) {
      cD = DD
    }
    let RD = !1;

    function AD(DD) {
      RD = !0;
      try {
        DD.onClick()
      } finally {
        RD = !1
      }
      DD.panel && "clientGame" === pD.e.get("openInGameMenuName") && gD(DD.id)
    }

    function UD() {
      return RD
    }

    function fD() {
      return LD().filter((DD => DD.panel && !DD.disabled))
    }

    function ID(DD) {
      const zD = fD(),
        wD = zD.findIndex((DD => DD.id === cD));
      return !(wD < 0 || zD.length < 2) && (AD(zD[(wD + DD + zD.length) % zD.length]), !0)
    }

    function BD() {
      return null !== cD && fD().length > 1
    }

    function GD() {
      gD(null)
    }

    function hD() {
      "inventory" !== pD.e.get("openInGameMenuName") && gD(null)
    }

    function nD() {
      const DD = cD;
      return gD(null), DD
    }

    function MD(DD) {
      return rD.set(DD.id, DD), sD.l.KG(KD, LD(), !0), () => {
        rD.get(DD.id) === DD && (rD.delete(DD.id), sD.l.KG(KD, LD()))
      }
    }
  },
  36580: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      g: () => GD,
      i: () => hD,
      m: () => UD,
      p: () => gD,
      r: () => BD,
      t: () => fD,
      w: () => RD
    });
    var pD = wD(20),
      sD = wD(25),
      KD = wD(1299),
      rD = wD(36586);
    const LD = "clientGameUiChanged";
    let cD = null;

    function gD() {
      return cD
    }

    function RD(DD, zD) {
      const wD = {
        content: DD,
        menu: zD
      };
      return cD = wD, sD.l.KG(LD, cD, !0), () => {
        cD === wD && (cD = null, ID = !1, GD(), sD.l.KG(LD, null))
      }
    }
    let AD = null;

    function UD() {
      return AD
    }

    function fD(DD) {
      return AD = DD, () => {
        AD === DD && (AD = null)
      }
    }
    let ID = !1;

    function BD() {
      const DD = pD.e.get("openInGameMenuName");
      "clientGame" !== DD && (ID = "inventory" === DD), (0, rD.m)() || (0, rD.j)(), (0, KD.p)(KD.b), pD.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function GD() {
      nD(!1)
    }

    function hD() {
      nD(ID)
    }

    function nD(DD) {
      "clientGame" === pD.e.get("openInGameMenuName") && pD.e.set({
        openInGameMenuName: DD ? "inventory" : null
      }), DD || (0, rD.j)(), ID = !1
    }
  },
  39383: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => Gz
    });
    const pD = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var sD = wD(58),
      KD = wD(36580),
      rD = wD(37015),
      LD = wD(36591),
      cD = wD(1737),
      gD = wD(25);
    const RD = {
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
    const AD = 32;

    function UD(DD, zD, wD, pD) {
      return {
        tag: "line",
        attrs: {
          x1: DD,
          y1: zD,
          x2: wD,
          y2: pD,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function fD(DD) {
      return {
        tag: "circle",
        attrs: {
          cx: AD,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AD,
          r: DD,
          class: "Fill"
        }
      }
    }

    function ID(DD, zD) {
      return {
        tag: "path",
        attrs: {
          d: DD,
          "stroke-width": zD
        }
      }
    }

    function BD(DD, zD, wD) {
      return {
        tag: "circle",
        attrs: {
          cx: AD,
          cy: AD,
          r: DD,
          "stroke-width": zD,
          class: wD
        }
      }
    }

    function GD(DD, zD, wD) {
      return {
        tag: "text",
        attrs: {
          x: DD,
          y: zD,
          class: "Fill Label"
        },
        text: wD
      }
    }
    const hD = {
      pistol: DD => [UD(AD, AD - DD - 5, AD, AD - DD), UD(AD - DD - 5, AD, AD - DD, AD), UD(AD + DD, AD, AD + DD + 5, AD), fD(1.4)],
      rifle: DD => [UD(AD, AD - DD - 8, AD, AD - DD), UD(AD, AD + DD, AD, AD + DD + 8), UD(AD - DD - 8, AD, AD - DD, AD), UD(AD + DD, AD, AD + DD + 8, AD), fD(1)],
      smg: DD => {
        const zD = Math.PI / 2,
          wD = [];
        for (let rD = 0; rD < 4; rD++) wD.push((sD = rD * zD + .35, KD = (rD + 1) * zD - .35, ID(`M${AD+(pD=6+DD)*Math.cos(sD)} ${AD+pD*Math.sin(sD)} A${pD} ${pD} 0 0 1 ${AD+pD*Math.cos(KD)} ${AD+pD*Math.sin(KD)}`, 2)));
        var pD, sD, KD;
        return [...wD, fD(1.4)]
      },
      shotgun: DD => [BD(DD, 3, "Ring Outline"), BD(DD, 1.5, "Ring")],
      marksman: DD => [ID(`M${26-DD/2} ${39+DD/2} L32 33 L${38+DD/2} ${39+DD/2}`, 2), UD(14 - DD, AD, 24 - DD, AD, 1.5), UD(40 + DD, AD, 50 + DD, AD, 1.5), UD(14 - DD, 30, 14 - DD, 34, 1.5), UD(50 + DD, 30, 50 + DD, 34, 1.5)],
      machineGun: DD => {
        const zD = 10 + DD,
          wD = [];
        for (const [pD, sD] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) wD.push(ID(`M${AD+pD*zD} ${AD+sD*(zD-5)} L${AD+pD*zD} ${AD+sD*zD} L${AD+pD*(zD-5)} ${AD+sD*zD}`, 2));
        return [...wD, UD(AD, 28, AD, 36, 1.5), UD(28, AD, 36, AD, 1.5)]
      },
      launcher: () => [UD(14, 30, 50, 30, 1.5), UD(AD, 24, AD, 52, 1.5), UD(28, 38, 36, 38, 1.5), UD(29, 44, 35, 44, 1.5), UD(30, 50, 34, 50, 1.5), GD(38, 40, "100"), GD(37, 46, "200"), fD(1.4, 30)],
      melee: () => [ID("M32 26 L38 32 L32 38 L26 32 Z", 1.5), fD(1.2)],
      throwable: () => [fD(1.6)]
    };

    function nD(DD) {
      let {
        tag: zD,
        attrs: wD,
        text: pD
      } = DD, sD = `<${zD}`;
      for (const [KD, rD] of Object.entries(wD)) sD += ` ${KD}="${rD}"`;
      return void 0 === pD ? `${sD}/>` : `${sD}>${pD}</${zD}>`
    }
    class MD {
      constructor(DD, zD) {
        this.api = DD, this.localPlayerId = zD, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = DD => {
          this.element = DD, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, DD && !this.enabled && (DD.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, cD.getRemInPx)()))
        }, this.tokens = [gD.l.subscribe("aimingOverlay", (DD => {
          this.sniperOverlay = "sniper" === DD
        })), gD.l.subscribe("mouseState", (DD => {
          let {
            isDown: zD
          } = DD;
          this.mouseDown = zD
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      nC(DD) {
        DD !== this.enabled && (this.enabled = DD, this.drawnVisible = null, DD || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(DD, zD) {
        var wD, pD;
        if (!this.enabled) return;
        const {
          api: sD
        } = this, KD = sD.isAlive(this.localPlayerId) && null !== (wD = null === (pD = sD.zwD(this.localPlayerId)) || void 0 === pD ? void 0 : pD.name) && void 0 !== wD ? wD : null, rD = (LD = KD) && RD[LD] || null;
        var LD;
        if (this.setOwnsCrosshair(null !== rD), !this.element) return;
        const cD = sD.getHeldGunInaccuracy(),
          gD = null !== cD,
          AD = null !== rD && !this.sniperOverlay && sD.isCrosshairShown();
        if (AD !== this.drawnVisible && (this.drawnVisible = AD, this.element.style.display = AD ? "block" : "none"), !AD) return;
        const UD = gD ? function(DD) {
            return "launcher" === DD || "melee" === DD || "throwable" === DD ? "none" : "shotgun" === DD ? "cone" : "offset"
          }(rD) : "none",
          fD = null !== cD && void 0 !== cD ? cD : 0;
        "cone" === UD ? this.drawCone(rD, this.coneRadiusVh(fD, zD) * this.gapPerVh, DD) : (this.coneDrawn = !1, this.draw(rD, "none" === UD ? 2 : this.offsetGap(fD)));
        const ID = !gD && this.mouseDown;
        ID !== this.drawnPressed && (this.drawnPressed = ID, this.element.classList.toggle("Pressed", ID))
      }
      dispose() {
        for (const DD of this.tokens) gD.l.unsubscribe(DD);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(DD, zD) {
        var wD, pD;
        DD !== this.drawnFamily ? (this.drawnFamily = DD, this.drawnGap = zD, this.element.innerHTML = function(DD, zD) {
          return `<svg viewBox="0 0 64 64">${hD[DD](zD).map(nD).join("")}</svg>`
        }(DD, zD), this.shapes = Array.from(null !== (wD = null === (pD = this.element.firstElementChild) || void 0 === pD ? void 0 : pD.children) && void 0 !== wD ? wD : [])) : zD !== this.drawnGap && (this.drawnGap = zD, function(DD, zD, wD) {
          const pD = hD[zD](wD);
          for (let sD = 0; sD < pD.length; sD++)
            for (const [zD, wD] of Object.entries(pD[sD].attrs)) {
              const pD = String(wD);
              DD[sD].getAttribute(zD) !== pD && DD[sD].setAttribute(zD, pD)
            }
        }(this.shapes, DD, zD))
      }
      drawCone(DD, zD, wD) {
        DD === this.drawnFamily && this.coneDrawn ? this.shownRadius += (zD - this.shownRadius) * (1 - Math.exp(-wD / 80)) : this.shownRadius = zD, this.coneDrawn = !0, this.draw(DD, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(DD, zD) {
        if (!(zD > 0)) return 1;
        const wD = DD * rD.h / 2;
        return Math.max(50 * Math.tan(wD) / zD, 1)
      }
      offsetGap(DD) {
        const zD = 2 + ((0, LD.g)(DD) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * zD) / 2)
      }
      setOwnsCrosshair(DD) {
        DD !== this.ownsCrosshair && (this.ownsCrosshair = DD, document.body.classList.toggle("FrontlineCustomCrosshair", DD))
      }
    }
    const OD = "FrontlineCustomDamage",
      JD = .45,
      ED = .2;
    class QD {
      constructor(DD, zD) {
        this.api = DD, this.localPlayerId = zD, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.YK = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = DD => {
          var zD, wD;
          this.clearHits(), this.root = DD, this.lowLayer = null !== (zD = null === DD || void 0 === DD ? void 0 : DD.querySelector(".FrontlineDamageLow")) && void 0 !== zD ? zD : null, this.arcLayer = null !== (wD = null === DD || void 0 === DD ? void 0 : DD.querySelector(".FrontlineDamageArcs")) && void 0 !== wD ? wD : null, this.showRoot(), this.drawLow()
        }, this.token = gD.l.subscribe("damagedByOtherPlayer", (DD => {
          let {
            direction: zD,
            tK: wD
          } = DD;
          this.onHurt(zD, wD)
        })), this.syncHealth(), document.body.classList.add(OD)
      }
      nC(DD) {
        DD !== this.enabled && (this.enabled = DD, document.body.classList.toggle(OD, DD), DD || this.clearHits(), this.showRoot())
      }
      frame(DD) {
        this.syncHealth(), this.cameraHeading = DD;
        for (const zD of this.arcs) this.drawArcAngle(zD)
      }
      dispose() {
        gD.l.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(OD)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const DD = this.api.getClientOption(this.localPlayerId, "_health"),
          zD = this.api.getClientOption(this.localPlayerId, "_shield"),
          wD = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(DD, this.readHealth) && Object.is(zD, this.readShield) && Object.is(wD, this.readMaxHealth)) return;
        if (this.readHealth = DD, this.readShield = zD, this.readMaxHealth = wD, null === DD || void 0 === DD || !wD) return this.lastHealthPool = null, this.maxHealth = null, this.YK = 1, this.dead = !1, void this.drawLow();
        const pD = DD + (null !== zD && void 0 !== zD ? zD : 0);
        if (null !== this.lastHealthPool && pD < this.lastHealthPool) {
          const DD = performance.now(),
            zD = (this.lastHealthPool - pD) / wD;
          this.lastDrop = DD - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + zD,
            at: this.lastDrop.at
          } : {
            frac: zD,
            at: DD
          }
        }
        this.dead = DD <= 0, this.dead && this.clearHits(), this.lastHealthPool = pD, this.maxHealth = wD, this.YK = DD > 0 ? DD / wD : 1, this.drawLow()
      }
      onHurt(DD, zD) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const wD = Math.min(1, this.takeDamageFrac(zD) / .3);
        null !== DD && this.showArc(DD, wD), this.flashEdge(null === DD ? null : DD - this.cameraHeading, .4 + .6 * wD)
      }
      takeDamageFrac(DD) {
        if (void 0 !== DD && this.maxHealth) return DD / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: zD
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, zD
      }
      drawLow() {
        if (!this.lowLayer) return;
        const DD = VD((JD - this.YK) / .25),
          zD = VD((ED - this.YK) / .15000000000000002),
          wD = this.YK < JD;
        this.lowLayer.classList.toggle("Active", wD), this.lowLayer.classList.toggle("Critical", this.YK < ED), this.lowLayer.style.opacity = String(wD ? .55 + .3 * DD + .15 * zD : 0)
      }
      showArc(DD, zD) {
        var wD, pD;
        if (!this.arcLayer) return;
        let sD = this.arcs.find((zD => XD(zD.direction, DD) < .6));
        if (!sD) {
          const zD = document.createElement("div");
          zD.className = "FrontlineDamageArc", zD.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(zD), sD = {
            element: zD,
            direction: DD,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(sD)
        }
        sD.direction = DD, this.drawArcAngle(sD);
        const KD = sD.fade ? Number(getComputedStyle(sD.element).opacity) : 0;
        null === (wD = sD.fade) || void 0 === wD || wD.cancel(), null === (pD = sD.pop) || void 0 === pD || pD.cancel(), sD.element.style.opacity = "1";
        const rD = sD.element.animate([{
          opacity: KD
        }, {
          opacity: 1
        }], 144);
        sD.fade = rD, sD.pop = sD.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * zD
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const LD = sD;
        rD.onfinish = () => {
          if (LD.fade !== rD) return;
          const DD = LD.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          DD.startTime = rD.startTime, LD.fade = DD, DD.onfinish = () => {
            LD.fade === DD && (LD.element.remove(), PD(this.arcs, LD))
          }
        }
      }
      drawArcAngle(DD) {
        const zD = DD.direction - this.cameraHeading;
        (null === DD.drawnAngle || Math.abs(zD - DD.drawnAngle) > .005) && (DD.drawnAngle = zD, DD.element.style.rotate = `${zD}rad`)
      }
      flashEdge(DD, zD) {
        var wD, pD, sD;
        if (!this.root) return;
        let KD = this.flashes.find((zD => null === zD.angle || null === DD ? zD.angle === DD : XD(zD.angle, DD) < .5));
        if (!KD) {
          const zD = document.createElement("div");
          zD.className = "FrontlineDamageFlash";
          const wD = zD.appendChild(document.createElement("div"));
          wD.className = "FrontlineDamageFlashGlow", this.root.insertBefore(zD, this.arcLayer), KD = {
            element: zD,
            glow: wD,
            angle: DD,
            level: 0,
            animation: null
          }, this.flashes.push(KD)
        }
        const rD = null === (wD = KD.animation) || void 0 === wD || null === (pD = wD.effect) || void 0 === pD ? void 0 : pD.getComputedTiming().progress,
          LD = null === rD || void 0 === rD ? 0 : KD.level * (1 - rD);
        KD.level = Math.min(1, Math.max(zD, LD + .6 * zD)), KD.angle = DD;
        const {
          x: cD,
          y: gD,
          rx: RD,
          ry: AD
        } = function(DD, zD) {
          const wD = window.innerWidth,
            pD = window.innerHeight;
          if (null === DD) return {
            x: wD / 2,
            y: pD / 2,
            rx: 0,
            ry: 0
          };
          const sD = Math.sin(DD),
            KD = -Math.cos(DD),
            rD = wD / 2 / Math.max(1e-6, Math.abs(sD)),
            LD = pD / 2 / Math.max(1e-6, Math.abs(KD)),
            cD = Math.min(rD, LD),
            gD = Math.round(wD / 2 + sD * cD),
            RD = Math.round(pD / 2 + KD * cD),
            AD = pD / 100 * (.85 + .25 * zD),
            UD = rD <= LD,
            fD = Math.round((UD ? 30 : 74) * AD),
            ID = Math.round((UD ? 58 : 26) * AD);
          return {
            x: gD,
            y: RD,
            rx: fD,
            ry: ID
          }
        }(DD, KD.level), {
          style: UD
        } = KD.glow;
        KD.glow.classList.toggle("Everywhere", null === DD), UD.setProperty("--glowX", `${cD}px`), UD.setProperty("--glowY", `${gD}px`), UD.setProperty("--glowRx", `${RD}px`), UD.setProperty("--glowRy", `${AD}px`), KD.element.style.transformOrigin = `${cD}px ${gD}px`, null === (sD = KD.animation) || void 0 === sD || sD.cancel();
        const fD = KD.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: KD.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * KD.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * KD.level
        });
        KD.animation = fD;
        const ID = KD;
        fD.onfinish = () => {
          ID.animation === fD && (ID.element.remove(), PD(this.flashes, ID))
        }
      }
      clearHits() {
        for (const pD of this.arcs) {
          var DD, zD;
          null === (DD = pD.fade) || void 0 === DD || DD.cancel(), pD.fade = null, null === (zD = pD.pop) || void 0 === zD || zD.cancel(), pD.element.remove()
        }
        this.arcs.length = 0;
        for (const pD of this.flashes) {
          var wD;
          null === (wD = pD.animation) || void 0 === wD || wD.cancel(), pD.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function XD(DD, zD) {
      return Math.abs(Math.atan2(Math.sin(DD - zD), Math.cos(DD - zD)))
    }

    function VD(DD) {
      return Math.max(0, Math.min(1, DD))
    }

    function PD(DD, zD) {
      const wD = DD.indexOf(zD); - 1 !== wD && DD.splice(wD, 1)
    }
    var CD = wD(1044),
      xD = wD.n(CD),
      TD = wD(36577),
      bD = wD(36658),
      jD = wD(1200),
      dD = wD(1442);
    const SD = "frontlineHudChanged",
      iD = "frontlineScoreboardChanged";
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
      QI(DD) {
        this.wire = DD, gD.l.KG(SD, DD, !0)
      }
      receiveScoreboard(DD) {
        let zD = "scoreboard" === DD[0] ? performance.now() + DD[5] : 0;
        const wD = this.scoreboard.endsAt;
        0 !== zD && 0 !== wD && Math.abs(zD - wD) < 1e3 && (zD = wD), this.scoreboard = {
          wire: DD,
          endsAt: zD
        }, gD.l.KG(iD, this.scoreboard, !0)
      }
    }
    var WD = wD(1096);
    const ND = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function ZD(DD) {
      const [zD, wD] = (0, sD.useState)((() => (DD - performance.now()) / 1e3));
      return (0, sD.useEffect)((() => {
        if (0 === DD) return;
        const zD = () => {
          wD((DD - performance.now()) / 1e3)
        };
        zD();
        const pD = window.setInterval(zD, 250);
        return () => {
          window.clearInterval(pD)
        }
      }), [DD]), zD
    }

    function yD(DD) {
      let {
        className: zD,
        point: wD
      } = DD;
      const [pD, sD, KD, rD, LD, cD] = wD;
      return (0, WD.jsxs)("div", {
        className: xD()(zD, `Owner-${sD||"None"}`, `Leader-${rD||"None"}`, {
          Contested: LD,
          Here: cD
        }),
        children: [(0, WD.jsx)("span", {
          className: "FrontlinePointLetter",
          children: pD
        }), (0, WD.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${KD}%`
          }
        })]
      })
    }
    const kD = (0, sD.memo)((function(DD) {
        let {
          points: zD,
          markers: wD
        } = DD;
        const {
          t: pD
        } = (0, jD.E)();
        return zD ? (0, WD.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: zD.map((DD => {
            const [zD, , , , , , , sD] = DD;
            return (0, WD.jsxs)("div", {
              ref: wD.bindMarker(zD),
              className: "FrontlinePointMarker",
              children: [(0, WD.jsx)(yD, {
                className: "FrontlinePointMarkerTile",
                point: DD
              }), (0, WD.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [sD && (0, WD.jsx)("span", {
                  className: xD()("FrontlinePointMarkerHomeTurf", `Team-${sD}`),
                  children: pD("frontlineHud:homeTurf", {
                    team: pD(ND[sD])
                  })
                }), (0, WD.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, zD)
          }))
        }) : null
      })),
      mD = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      eD = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function oD(DD) {
      let {
        hud: zD,
        crosshair: wD,
        damage: pD,
        markers: sD
      } = DD;
      const KD = (0, dD.k)(SD, zD.getWire()),
        rD = (0, dD.k)(iD, zD.getScoreboard());
      return (0, WD.jsxs)(WD.Fragment, {
        children: [(0, WD.jsx)(aD, {
          damage: pD
        }), (0, WD.jsx)(kD, {
          points: "scoreboard" === rD.wire[0] ? rD.wire[6] : null,
          markers: sD
        }), (0, WD.jsx)(vD, {
          view: rD
        }), (0, WD.jsx)("div", {
          className: "FrontlineReticle",
          ref: wD.bindElement
        }), (0, WD.jsx)(TD.g, {
          children: (0, WD.jsx)(uD, {
            wire: KD
          })
        })]
      })
    }
    const aD = (0, sD.memo)((function(DD) {
        let {
          damage: zD
        } = DD;
        return (0, WD.jsxs)("div", {
          className: "FrontlineDamage",
          ref: zD.bindElement,
          children: [(0, WD.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, WD.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, WD.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      uD = (0, sD.memo)((function(DD) {
        let {
          wire: zD
        } = DD;
        const {
          t: wD
        } = (0, jD.E)();
        if ("capture" === zD[0]) {
          const [, DD, pD, sD, KD, rD, LD] = zD, cD = Math.round(sD / 100 * 24);
          return (0, WD.jsxs)("div", {
            className: xD()("FrontlinePlate", `Status-${pD}`, `Leader-${KD||"None"}`),
            children: [(0, WD.jsx)(HD, {}), (0, WD.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, WD.jsx)("span", {
                className: "FrontlineObjective",
                children: DD
              }), (0, WD.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, WD.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: wD("frontlineHud:objective", {
                    point: DD,
                    friendly: rD,
                    enemy: LD
                  })
                }), (0, WD.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: wD(mD[pD])
                })]
              }), (0, WD.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(sD).padStart(3, "0"), (0, WD.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, WD.jsx)(FD, {
              segments: 24,
              lit: cD
            })]
          })
        }
        if ("alert" === zD[0]) {
          const [, DD, pD, sD] = zD;
          return (0, WD.jsxs)("div", {
            className: xD()("FrontlinePlate", "FrontlineAlert", `Tone-${sD}`),
            children: [(0, WD.jsx)(HD, {}), (0, WD.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: wD(eD[DD])
            }), (0, WD.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: pD
            })]
          })
        }
        return null
      })),
      vD = (0, sD.memo)((function(DD) {
        let {
          view: zD
        } = DD;
        const {
          t: wD
        } = (0, jD.E)(), pD = (0, sD.useRef)(null), KD = function(DD, zD) {
          const [wD, pD] = (0, sD.useState)(!1);
          return (0, sD.useLayoutEffect)((() => {
            const zD = DD.current;
            if (!zD) return;
            const wD = document.querySelector(`.${bD.e}`),
              sD = document.querySelector(`.${bD.f}`),
              KD = () => {
                var DD;
                const KD = zD.querySelector(".FrontlineTeamTrack"),
                  rD = (0, cD.getRemInPx)(),
                  LD = zD.getBoundingClientRect().width - 2 * (null !== (DD = null === KD || void 0 === KD ? void 0 : KD.getBoundingClientRect().width) && void 0 !== DD ? DD : 0),
                  gD = window.innerWidth / 2,
                  RD = wD ? wD.getBoundingClientRect().right : 0,
                  AD = sD ? sD.getBoundingClientRect().left : window.innerWidth,
                  UD = Math.min(gD - RD, AD - gD) - bD.b - LD / 2,
                  fD = UD < 6 * rD,
                  ID = fD ? (window.innerWidth - LD) / 2 - bD.b : UD;
                zD.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(ID,14*rD)))}px`), pD(fD)
              };
            KD();
            const rD = new ResizeObserver(KD);
            for (const DD of [zD, wD, sD]) DD && rD.observe(DD);
            return window.addEventListener("resize", KD), () => {
              rD.disconnect(), window.removeEventListener("resize", KD)
            }
          }), [DD, zD]), wD
        }(pD, "scoreboard" === zD.wire[0]);
        if ("scoreboard" !== zD.wire[0]) return null;
        const [, rD, LD, gD, RD, , AD] = zD.wire, UD = "Red" === rD ? "Blue" : "Red";
        return (0, WD.jsxs)("div", {
          className: xD()("FrontlineScoreboardContainer", {
            Below: KD
          }),
          children: [(0, WD.jsxs)("div", {
            ref: pD,
            className: "FrontlineScoreboard",
            children: [(0, WD.jsx)(HD, {}), (0, WD.jsx)(tD, {
              team: rD,
              tickets: LD,
              goal: RD,
              side: "Friendly"
            }), (0, WD.jsx)("div", {
              className: "FrontlinePoints",
              children: AD.map((DD => (0, WD.jsx)(yD, {
                className: "FrontlinePoint",
                point: DD
              }, DD[0])))
            }), (0, WD.jsx)(tD, {
              team: UD,
              tickets: gD,
              goal: RD,
              side: "Enemy"
            })]
          }), (0, WD.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, WD.jsx)(YD, {
              endsAt: zD.endsAt
            }), (0, WD.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: wD("frontlineHud:ticketGoal", {
                goal: RD
              })
            })]
          })]
        })
      }));

    function tD(DD) {
      let {
        team: zD,
        tickets: wD,
        goal: pD,
        side: sD
      } = DD;
      const {
        t: KD
      } = (0, jD.E)(), rD = String(wD).padStart(3, "0"), LD = rD.search(/[1-9]/), cD = -1 === LD ? rD : rD.slice(0, LD), gD = Math.min(20, Math.floor(wD / pD * 20));
      return (0, WD.jsxs)("div", {
        className: xD()("FrontlineTeamScore", sD, `Team-${zD}`),
        children: [(0, WD.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, WD.jsx)("span", {
            className: "Lead",
            children: cD
          }), -1 !== LD && rD.slice(LD)]
        }), (0, WD.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, WD.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: KD(ND[zD])
          }), (0, WD.jsx)(FD, {
            segments: 20,
            lit: gD
          })]
        })]
      })
    }

    function FD(DD) {
      let {
        segments: zD,
        lit: wD
      } = DD;
      return (0, WD.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: zD
        }, ((DD, zD) => (0, WD.jsx)("i", {
          className: xD()({
            Lit: zD < wD
          })
        }, zD)))
      })
    }

    function YD(DD) {
      let {
        endsAt: zD
      } = DD;
      const wD = Math.max(0, Math.ceil(ZD(zD)));
      return (0, WD.jsxs)("div", {
        className: xD()("FrontlineClock", {
          Urgent: wD <= 60
        }),
        children: [Math.floor(wD / 60), ":", String(wD % 60).padStart(2, "0")]
      })
    }

    function HD() {
      return (0, WD.jsxs)(WD.Fragment, {
        children: [(0, WD.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, WD.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var qD = wD(36650),
      Dz = wD(1260),
      zz = wD(38470),
      wz = wD(38524);
    class pz {
      constructor(DD) {
        var zD;
        this.hud = DD, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.MI = !1, this.GJ = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.GJ), null === (zD = window.visualViewport) || void 0 === zD || zD.addEventListener("resize", this.GJ)
      }
      bindMarker(DD) {
        let zD = this.refs.get(DD);
        return zD || (zD = zD => {
          var wD;
          null === (wD = this.markers.get(DD)) || void 0 === wD || wD.stopObserving(), this.markers.delete(DD), zD && !this.MI && this.markers.set(DD, this.mount(zD))
        }, this.refs.set(DD, zD)), zD
      }
      frame(DD, zD) {
        this.render = DD;
        const wD = this.hud.getScoreboard().wire;
        if ("scoreboard" === wD[0] && 0 !== this.markers.size)
          for (const [pD, , , , , , sD] of wD[6]) {
            const DD = this.markers.get(pD);
            DD && sD && (DD.target ??= [0, 0, 0], DD.target[0] = sD[0], DD.target[1] = sD[1] + 2.5, DD.target[2] = sD[2], this.place(DD), this.hp(DD, zD && Math.hypot(sD[0] - zD[0], sD[1] - zD[1], sD[2] - zD[2])))
          }
      }
      dispose() {
        var DD;
        this.MI = !0, window.removeEventListener("resize", this.GJ), null === (DD = window.visualViewport) || void 0 === DD || DD.removeEventListener("resize", this.GJ);
        for (const zD of this.markers.values()) zD.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(DD) {
        const {
          render: zD,
          viewport: wD
        } = this;
        if (!zD || !DD.target) return;
        const pD = (50 - zD.screenBandPct.y) / 100 * wD.height,
          sD = {
            x: DD.halfSize.width + 8,
            top: DD.halfSize.height + 8,
            bottom: DD.halfSize.height + DD.labelsBelow + pD
          },
          KD = zD.projectWorldPosToViewport(DD.target),
          rD = null !== KD && void 0 !== KD ? KD : zD.projectWorldPosToScreenPos(DD.target),
          LD = (0, wz.c)({
            x: rD.x,
            y: rD.y,
            text: KD
          }, sD, wD);
        (0, zz.c)(DD.root, Math.round(100 * LD.x) / 100, Math.round(100 * LD.y) / 100)
      }
      hp(DD, zD) {
        if (null === zD) return void(null !== DD.metres && (DD.metres = null, DD.distance.textContent = ""));
        const wD = Date.now();
        (null === DD.metres || (0, qD.e)(zD, DD.metres, DD.metresShownAt)) && (DD.metres = Math.round(zD), DD.metresShownAt = wD, DD.distance.textContent = (0, jD.z)(Dz.e.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(DD.metres)
        }))
      }
      mount(DD) {
        const zD = {
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
          wD = DD.querySelector(".FrontlinePointMarkerLabels"),
          pD = new ResizeObserver((() => {
            zD.halfSize = {
              width: Math.max(DD.offsetWidth, wD.offsetWidth) / 2,
              height: DD.offsetHeight / 2
            }, zD.labelsBelow = wD.offsetTop + wD.offsetHeight - DD.offsetHeight, this.place(zD)
          }));
        return pD.observe(DD, {
          box: "border-box"
        }), pD.observe(wD, {
          box: "border-box"
        }), zD.stopObserving = () => {
          pD.disconnect()
        }, zD
      }
    }
    var sz = wD(6492),
      Kz = wD(2624);
    const rz = "frontlineRoundEndChanged";
    class Lz {
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
      QI(DD) {
        const zD = "roundEnd" === DD[0] ? performance.now() + DD[5] : 0;
        this.view = {
          wire: DD,
          key: this.view.key + 1,
          endsAt: zD
        }, gD.l.KG(rz, this.view, !0)
      }
    }
    const cz = (0, sD.lazy)((() => (0, Kz.b)(wD.e(199).then((() => wD(41663))), (DD => DD.FrontlineMvpLineup)))),
      gz = [4800, 4e3, 3200],
      Rz = [1, 0, 2],
      Az = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      Uz = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function fz(DD) {
      let {
        controller: zD
      } = DD;
      const wD = (0, dD.k)(rz, zD.getView()),
        pD = ZD(wD.endsAt);
      return "roundEnd" !== wD.wire[0] || 1e3 * pD < -2e3 ? null : (0, WD.jsx)(Iz, {
        wire: wD.wire,
        secondsLeft: Math.max(0, Math.ceil(pD))
      }, wD.key)
    }
    const Iz = (0, sD.memo)((function(DD) {
      let {
        wire: zD,
        secondsLeft: wD
      } = DD;
      const {
        t: KD
      } = (0, jD.E)(), [, rD, LD, cD, gD, , RD, AD] = zD, UD = (0, sD.useMemo)((() => Rz.filter((DD => DD < AD.length))), [AD]), fD = (0, sD.useMemo)((() => UD.map((DD => {
        const [, , , , , zD, wD] = AD[DD];
        return {
          cosmetics: pD.map(((DD, wD) => [DD, zD[wD]])),
          size: 0 === DD ? 1.15 : .85,
          heldGun: {
            name: wD,
            aimed: 0 === DD
          },
          showAfterMs: gz[DD]
        }
      }))), [AD, UD]);
      return (0, WD.jsxs)("div", {
        className: xD()("FrontlineRoundEnd", `Result-${rD}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, WD.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, WD.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, WD.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, WD.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, WD.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (ID = KD(Az[rD]), /\p{Script=Arabic}/u.test(ID) ? [ID] : (0, sz.e)(ID)).map(((DD, zD) => (0, WD.jsx)("span", {
              style: {
                "--letter": zD
              },
              children: DD
            }, zD)))]
          }), (0, WD.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [LD && "victory" === rD && (0, WD.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: KD("frontlineRoundEnd:comeback")
            }), (0, WD.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, WD.jsx)("b", {
                className: "Friendly",
                children: cD
              }), " \u2013 ", (0, WD.jsx)("b", {
                className: "Enemy",
                children: gD
              })]
            })]
          })]
        }), UD.length > 0 && (0, WD.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": UD.length
          },
          children: [(0, WD.jsx)(sD.Suspense, {
            fallback: null,
            children: (0, WD.jsx)(cz, {
              className: "FrontlineRoundEndLineup",
              players: fD
            })
          }), UD.map((DD => (0, WD.jsx)(Bz, {
            mvp: AD[DD],
            place: DD
          }, DD)))]
        }), (0, WD.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: KD("frontlineRoundEnd:nextFront", {
            map: RD,
            seconds: String(wD)
          })
        })]
      });
      var ID
    }));

    function Bz(DD) {
      let {
        mvp: zD,
        place: wD
      } = DD;
      const {
        t: pD
      } = (0, jD.E)(), [sD, KD, rD, LD, cD] = zD, [gD, RD] = pD(function(DD, zD) {
        return 1 === zD && "damage" !== DD ? `frontlineRoundEnd:${DD}One` : `frontlineRoundEnd:${DD}`
      }(rD, LD), {
        name: "\0",
        count: LD.toLocaleString()
      }).split("\0");
      return (0, WD.jsxs)("div", {
        className: xD()("FrontlineMvpCard", `Place-${wD+1}`, `Team-${KD}`),
        style: {
          "--revealMs": `${gz[wD]}ms`
        },
        children: [(0, WD.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, WD.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, WD.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: pD(Uz[wD])
        }), (0, WD.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [gD, (0, WD.jsx)("span", {
            className: "FrontlineMvpName",
            children: sD
          }), RD]
        }), (0, WD.jsx)("div", {
          className: "FrontlineMvpKit",
          children: cD
        })]
      })
    }
    const Gz = function(DD, zD, wD, pD) {
      let {
        localPlayerId: rD
      } = pD;
      const LD = new lD,
        cD = new Lz;
      let gD = null,
        RD = null,
        AD = null,
        UD = null,
        fD = null,
        ID = [!1, !1];
      const BD = () => {
        var DD, zD;
        const [wD, pD] = ID;
        null === (DD = RD) || void 0 === DD || DD.nC(!wD), null === (zD = AD) || void 0 === zD || zD.nC(!pD)
      };
      return {
        onCreate: DD => {
          gD = DD, RD = new MD(DD, rD), AD = new QD(DD, rD), UD = new pz(LD), BD(), fD = (0, KD.w)((0, sD.createElement)(sD.Fragment, null, (0, sD.createElement)(oD, {
            hud: LD,
            crosshair: RD,
            damage: AD,
            markers: UD
          }), (0, sD.createElement)(fz, {
            controller: cD
          })))
        },
        onClose: () => {
          var DD, zD, wD, pD;
          null === (DD = fD) || void 0 === DD || DD(), null === (zD = RD) || void 0 === zD || zD.dispose(), RD = null, null === (wD = AD) || void 0 === wD || wD.dispose(), AD = null, null === (pD = UD) || void 0 === pD || pD.dispose(), UD = null, gD = null
        },
        onAfterRender: (DD, zD) => {
          var wD, pD, sD, KD;
          null === (wD = RD) || void 0 === wD || wD.frame(DD, zD.tanHalfFovY), null === (pD = AD) || void 0 === pD || pD.frame(zD.cameraHeading), null === (sD = UD) || void 0 === sD || sD.frame(zD, null !== (KD = gD) && void 0 !== KD && KD.checkValid(rD) ? gD.PJ(rD) : null)
        },
        onReceivedMessageFromServer: (DD, zD) => {
          "frontlineHud" === DD ? LD.QI(zD) : "frontlineScoreboard" === DD ? LD.receiveScoreboard(zD) : "frontlineRoundEnd" === DD ? cD.QI(zD) : "frontlinePrefs" === DD && (ID = zD, BD())
        }
      }
    }
  },
  6492: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    const pD = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function sD(DD) {
      return null === pD ? Array.from(DD) : Array.from(pD.segment(DD), (DD => {
        let {
          segment: zD
        } = DD;
        return zD
      }))
    }
  },
  38470: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD,
      d: () => KD
    });
    const pD = new WeakMap;

    function sD(DD) {
      let zD = pD.get(DD);
      return zD || (zD = {
        hidden: DD.hidden,
        x: NaN,
        y: NaN
      }, pD.set(DD, zD)), zD
    }

    function KD(DD, zD) {
      const wD = sD(DD);
      wD.hidden !== zD && (wD.hidden = zD, DD.hidden = zD)
    }

    function rD(DD, zD, wD) {
      const pD = sD(DD);
      pD.x === zD && pD.y === wD || (pD.x = zD, pD.y = wD, DD.style.translate = `${zD}vw ${wD}vh`)
    }
  },
  37045: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    const pD = {
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