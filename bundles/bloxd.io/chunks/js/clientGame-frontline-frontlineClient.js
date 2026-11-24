export const id = 17;
export const ids = [17];
export const modules = {
  36677: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => sB,
      e: () => JB,
      g: () => rB,
      h: () => pB
    });
    var QB = zB(34242),
      nB = zB(36682),
      dB = zB(36687),
      IB = zB(8722),
      NB = zB(1471),
      uB = zB(62),
      UB = zB(83),
      aB = zB(1148);

    function pB() {
      var BB;
      return (0, NB.h)(nB.c, (0, nB.n)()), (0, aB.jsx)(aB.Fragment, {
        children: null === (BB = (0, nB.n)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function rB(BB) {
      var jB;
      let {
        show: zB
      } = BB;
      (0, NB.h)(nB.c, (0, nB.n)());
      const UB = null === (jB = (0, nB.n)()) || void 0 === jB ? void 0 : jB.menu;
      return (0, uB.useEffect)((() => {
        var BB;
        zB || (null === UB || void 0 === UB || null === (BB = UB.onClose) || void 0 === BB || BB.call(UB), (0, dB.n)())
      }), [zB, UB]), (0, uB.useEffect)((() => zB ? (0, IB.f)(dB.w, dB.f) : void 0), [zB]), (0, aB.jsx)(QB.b, {
        showing: zB,
        globallyUniqueKey: "clientGameMenu",
        children: null === UB || void 0 === UB ? void 0 : UB.content
      })
    }

    function sB(BB) {
      let {
        placement: jB = "bottom"
      } = BB;
      return (0, aB.jsx)("div", {
        id: `clientGameHud-${jB}`,
        style: {
          display: "contents"
        }
      })
    }

    function JB(BB) {
      let {
        children: jB,
        placement: zB = "bottom"
      } = BB;
      const [QB, nB] = (0, uB.useState)(null);
      return (0, uB.useEffect)((() => {
        nB(document.getElementById(`clientGameHud-${zB}`))
      }), [zB]), QB ? (0, UB.createPortal)(jB, QB) : null
    }
  },
  34242: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB
    });
    var QB = zB(4657),
      nB = zB(4664);

    function dB(BB) {
      let {
        children: jB,
        showing: zB,
        globallyUniqueKey: dB,
        alwaysMountChildren: IB = !1,
        doGameplayStartStopOnShow: NB = !0,
        keepsMovement: uB = !1
      } = BB;
      return (0, nB.c)(!0, zB, dB, uB), (0, QB.d)(NB, zB), zB || IB ? jB : null
    }
  },
  36762: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      h: () => IB,
      l: () => NB,
      o: () => uB
    });
    var QB = zB(62),
      nB = zB(3219);
    const dB = 8,
      IB = "InGameHeaderContainer",
      NB = "TopRightElements";

    function uB(BB) {
      const [jB] = (0, nB.d)(), [zB, uB] = (0, QB.useState)(!1);
      return (0, QB.useLayoutEffect)((() => {
        if (!BB) return;
        const jB = document.querySelector(`.${IB}`),
          zB = document.querySelector(`.${NB}`),
          QB = () => {
            const QB = BB.getBoundingClientRect(),
              nB = jB ? jB.getBoundingClientRect().right : 0,
              IB = zB ? zB.getBoundingClientRect().left : window.innerWidth,
              NB = QB.left < nB + dB,
              UB = QB.right > IB - dB;
            uB(NB || UB)
          };
        QB();
        const nB = new ResizeObserver(QB);
        return nB.observe(BB), jB && nB.observe(jB), zB && nB.observe(zB), () => {
          nB.disconnect()
        }
      }), [BB, jB]), zB
    }
  },
  36757: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    const QB = [{
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

    function nB(BB, jB, zB) {
      const nB = Math.abs(BB - jB),
        dB = Date.now() - zB;
      for (const IB of QB)
        if (BB < IB.maxDist) return nB >= IB.hardUpdateDist || dB > IB.timeBetweenSoftChecks && nB >= IB.softUpdateDist;
      return !1
    }
  },
  8722: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      f: () => nB
    });
    let QB = null;
    const nB = function(BB) {
        const jB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return QB = jB, () => {
          QB === jB && (QB = null)
        }
      },
      dB = () => {
        var BB;
        return null !== (BB = QB) && void 0 !== BB && BB.canCycle() ? QB.cycle : null
      }
  },
  38627: (BB, jB, zB) => {
    function QB(BB, jB, zB) {
      var QB;
      const {
        width: nB,
        height: dB
      } = zB, IB = null !== (QB = BB.text) && void 0 !== QB ? QB : BB, NB = (IB.x / 100 - .5) * nB, uB = (IB.y / 100 - .5) * dB, UB = nB / 2 - jB.x;
      if (null !== BB.text && Math.abs(NB) <= UB && uB >= jB.top - dB / 2 && uB <= dB / 2 - jB.bottom) return {
        x: IB.x,
        y: IB.y
      };
      const aB = Math.min(0 === NB ? 1 / 0 : UB / Math.abs(NB), uB > 0 ? (dB / 2 - jB.bottom) / uB : uB < 0 ? (jB.top - dB / 2) / uB : 1 / 0);
      return !Number.isFinite(aB) || aB < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + NB * aB / nB * 100,
        y: 50 + uB * aB / dB * 100
      }
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  36687: (BB, jB, zB) => {
    zB.d(jB, {
      A: () => GB,
      e: () => dB,
      f: () => mB,
      i: () => yB,
      l: () => NB,
      m: () => rB,
      n: () => kB,
      r: () => pB,
      t: () => LB,
      w: () => JB
    });
    var QB = zB(28),
      nB = zB(31);
    const dB = "clientGameInventoryButtonsChanged",
      IB = new Map;

    function NB() {
      return [...IB.values()].sort(((BB, jB) => {
        var zB, QB;
        return (null !== (zB = BB.order) && void 0 !== zB ? zB : 0) - (null !== (QB = jB.order) && void 0 !== QB ? QB : 0)
      }))
    }
    let uB = null;

    function UB(BB) {
      uB = BB
    }
    let aB = !1;

    function pB(BB) {
      aB = !0;
      try {
        BB.onClick()
      } finally {
        aB = !1
      }
      BB.panel && "clientGame" === QB.c.get("openInGameMenuName") && UB(BB.id)
    }

    function rB() {
      return aB
    }

    function sB() {
      return NB().filter((BB => BB.panel && !BB.disabled))
    }

    function JB(BB) {
      const jB = sB(),
        zB = jB.findIndex((BB => BB.id === uB));
      return !(zB < 0 || jB.length < 2) && (pB(jB[(zB + BB + jB.length) % jB.length]), !0)
    }

    function mB() {
      return null !== uB && sB().length > 1
    }

    function yB() {
      UB(null)
    }

    function kB() {
      "inventory" !== QB.c.get("openInGameMenuName") && UB(null)
    }

    function GB() {
      const BB = uB;
      return UB(null), BB
    }

    function LB(BB) {
      return IB.set(BB.id, BB), nB.n.Ly(dB, NB(), !0), () => {
        IB.get(BB.id) === BB && (IB.delete(BB.id), nB.n.Ly(dB, NB()))
      }
    }
  },
  36682: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      d: () => yB,
      f: () => kB,
      j: () => rB,
      n: () => UB,
      o: () => mB,
      r: () => sB,
      t: () => aB
    });
    var QB = zB(28),
      nB = zB(31),
      dB = zB(1316),
      IB = zB(36687);
    const NB = "clientGameUiChanged";
    let uB = null;

    function UB() {
      return uB
    }

    function aB(BB, jB) {
      const zB = {
        content: BB,
        menu: jB
      };
      return uB = zB, nB.n.Ly(NB, uB, !0), () => {
        uB === zB && (uB = null, JB = !1, yB(), nB.n.Ly(NB, null))
      }
    }
    let pB = null;

    function rB() {
      return pB
    }

    function sB(BB) {
      return pB = BB, () => {
        pB === BB && (pB = null)
      }
    }
    let JB = !1;

    function mB() {
      const BB = QB.c.get("openInGameMenuName");
      "clientGame" !== BB && (JB = "inventory" === BB), (0, IB.m)() || (0, IB.i)(), (0, dB.u)(dB.e), QB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function yB() {
      GB(!1)
    }

    function kB() {
      GB(JB)
    }

    function GB(BB) {
      "clientGame" === QB.c.get("openInGameMenuName") && QB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, IB.i)(), JB = !1
    }
  },
  39509: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => yj
    });
    const QB = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var nB = zB(62),
      dB = zB(36682),
      IB = zB(37109),
      NB = zB(36699),
      uB = zB(1778),
      UB = zB(31);
    const aB = {
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
    const pB = 32;

    function rB(BB, jB, zB, QB) {
      return {
        tag: "line",
        attrs: {
          x1: BB,
          y1: jB,
          x2: zB,
          y2: QB,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function sB(BB) {
      return {
        tag: "circle",
        attrs: {
          cx: pB,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pB,
          r: BB,
          class: "Fill"
        }
      }
    }

    function JB(BB, jB) {
      return {
        tag: "path",
        attrs: {
          d: BB,
          "stroke-width": jB
        }
      }
    }

    function mB(BB, jB, zB) {
      return {
        tag: "circle",
        attrs: {
          cx: pB,
          cy: pB,
          r: BB,
          "stroke-width": jB,
          class: zB
        }
      }
    }

    function yB(BB, jB, zB) {
      return {
        tag: "text",
        attrs: {
          x: BB,
          y: jB,
          class: "Fill Label"
        },
        text: zB
      }
    }
    const kB = {
      pistol: BB => [rB(pB, pB - BB - 5, pB, pB - BB), rB(pB - BB - 5, pB, pB - BB, pB), rB(pB + BB, pB, pB + BB + 5, pB), sB(1.4)],
      rifle: BB => [rB(pB, pB - BB - 8, pB, pB - BB), rB(pB, pB + BB, pB, pB + BB + 8), rB(pB - BB - 8, pB, pB - BB, pB), rB(pB + BB, pB, pB + BB + 8, pB), sB(1)],
      smg: BB => {
        const jB = Math.PI / 2,
          zB = [];
        for (let IB = 0; IB < 4; IB++) zB.push((nB = IB * jB + .35, dB = (IB + 1) * jB - .35, JB(`M${pB+(QB=6+BB)*Math.cos(nB)} ${pB+QB*Math.sin(nB)} A${QB} ${QB} 0 0 1 ${pB+QB*Math.cos(dB)} ${pB+QB*Math.sin(dB)}`, 2)));
        var QB, nB, dB;
        return [...zB, sB(1.4)]
      },
      shotgun: BB => [mB(BB, 3, "Ring Outline"), mB(BB, 1.5, "Ring")],
      marksman: BB => [JB(`M${26-BB/2} ${39+BB/2} L32 33 L${38+BB/2} ${39+BB/2}`, 2), rB(14 - BB, pB, 24 - BB, pB, 1.5), rB(40 + BB, pB, 50 + BB, pB, 1.5), rB(14 - BB, 30, 14 - BB, 34, 1.5), rB(50 + BB, 30, 50 + BB, 34, 1.5)],
      machineGun: BB => {
        const jB = 10 + BB,
          zB = [];
        for (const [QB, nB] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) zB.push(JB(`M${pB+QB*jB} ${pB+nB*(jB-5)} L${pB+QB*jB} ${pB+nB*jB} L${pB+QB*(jB-5)} ${pB+nB*jB}`, 2));
        return [...zB, rB(pB, 28, pB, 36, 1.5), rB(28, pB, 36, pB, 1.5)]
      },
      launcher: () => [rB(14, 30, 50, 30, 1.5), rB(pB, 24, pB, 52, 1.5), rB(28, 38, 36, 38, 1.5), rB(29, 44, 35, 44, 1.5), rB(30, 50, 34, 50, 1.5), yB(38, 40, "100"), yB(37, 46, "200"), sB(1.4, 30)],
      melee: () => [JB("M32 26 L38 32 L32 38 L26 32 Z", 1.5), sB(1.2)],
      throwable: () => [sB(1.6)]
    };

    function GB(BB) {
      let {
        tag: jB,
        attrs: zB,
        text: QB
      } = BB, nB = `<${jB}`;
      for (const [dB, IB] of Object.entries(zB)) nB += ` ${dB}="${IB}"`;
      return void 0 === QB ? `${nB}/>` : `${nB}>${QB}</${jB}>`
    }
    class LB {
      constructor(BB, jB) {
        this.api = BB, this.localPlayerId = jB, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = BB => {
          this.element = BB, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, BB && !this.enabled && (BB.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, uB.getRemInPx)()))
        }, this.tokens = [UB.n.subscribe("aimingOverlay", (BB => {
          this.sniperOverlay = "sniper" === BB
        })), UB.n.subscribe("mouseState", (BB => {
          let {
            isDown: jB
          } = BB;
          this.mouseDown = jB
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      mH(BB) {
        BB !== this.enabled && (this.enabled = BB, this.drawnVisible = null, BB || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(BB, jB) {
        var zB, QB;
        if (!this.enabled) return;
        const {
          api: nB
        } = this, dB = nB.isAlive(this.localPlayerId) && null !== (zB = null === (QB = nB.ZjB(this.localPlayerId)) || void 0 === QB ? void 0 : QB.name) && void 0 !== zB ? zB : null, IB = (NB = dB) && aB[NB] || null;
        var NB;
        if (this.setOwnsCrosshair(null !== IB), !this.element) return;
        const uB = nB.getHeldGunInaccuracy(),
          UB = null !== uB,
          pB = null !== IB && !this.sniperOverlay && nB.isCrosshairShown();
        if (pB !== this.drawnVisible && (this.drawnVisible = pB, this.element.style.display = pB ? "block" : "none"), !pB) return;
        const rB = UB ? function(BB) {
            return "launcher" === BB || "melee" === BB || "throwable" === BB ? "none" : "shotgun" === BB ? "cone" : "offset"
          }(IB) : "none",
          sB = null !== uB && void 0 !== uB ? uB : 0;
        "cone" === rB ? this.drawCone(IB, this.coneRadiusVh(sB, jB) * this.gapPerVh, BB) : (this.coneDrawn = !1, this.draw(IB, "none" === rB ? 2 : this.offsetGap(sB)));
        const JB = !UB && this.mouseDown;
        JB !== this.drawnPressed && (this.drawnPressed = JB, this.element.classList.toggle("Pressed", JB))
      }
      dispose() {
        for (const BB of this.tokens) UB.n.unsubscribe(BB);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(BB, jB) {
        var zB, QB;
        BB !== this.drawnFamily ? (this.drawnFamily = BB, this.drawnGap = jB, this.element.innerHTML = function(BB, jB) {
          return `<svg viewBox="0 0 64 64">${kB[BB](jB).map(GB).join("")}</svg>`
        }(BB, jB), this.shapes = Array.from(null !== (zB = null === (QB = this.element.firstElementChild) || void 0 === QB ? void 0 : QB.children) && void 0 !== zB ? zB : [])) : jB !== this.drawnGap && (this.drawnGap = jB, function(BB, jB, zB) {
          const QB = kB[jB](zB);
          for (let nB = 0; nB < QB.length; nB++)
            for (const [jB, zB] of Object.entries(QB[nB].attrs)) {
              const QB = String(zB);
              BB[nB].getAttribute(jB) !== QB && BB[nB].setAttribute(jB, QB)
            }
        }(this.shapes, BB, jB))
      }
      drawCone(BB, jB, zB) {
        BB === this.drawnFamily && this.coneDrawn ? this.shownRadius += (jB - this.shownRadius) * (1 - Math.exp(-zB / 80)) : this.shownRadius = jB, this.coneDrawn = !0, this.draw(BB, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(BB, jB) {
        if (!(jB > 0)) return 1;
        const zB = BB * IB.g / 2;
        return Math.max(50 * Math.tan(zB) / jB, 1)
      }
      offsetGap(BB) {
        const jB = 2 + ((0, NB.h)(BB) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * jB) / 2)
      }
      setOwnsCrosshair(BB) {
        BB !== this.ownsCrosshair && (this.ownsCrosshair = BB, document.body.classList.toggle("FrontlineCustomCrosshair", BB))
      }
    }
    const gB = "FrontlineCustomDamage",
      tB = .45,
      SB = .2;
    class MB {
      constructor(BB, jB) {
        this.api = BB, this.localPlayerId = jB, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.YB = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = BB => {
          var jB, zB;
          this.clearHits(), this.root = BB, this.lowLayer = null !== (jB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".FrontlineDamageLow")) && void 0 !== jB ? jB : null, this.arcLayer = null !== (zB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".FrontlineDamageArcs")) && void 0 !== zB ? zB : null, this.showRoot(), this.drawLow()
        }, this.token = UB.n.subscribe("damagedByOtherPlayer", (BB => {
          let {
            direction: jB,
            DB: zB
          } = BB;
          this.onHurt(jB, zB)
        })), this.syncHealth(), document.body.classList.add(gB)
      }
      mH(BB) {
        BB !== this.enabled && (this.enabled = BB, document.body.classList.toggle(gB, BB), BB || this.clearHits(), this.showRoot())
      }
      frame(BB) {
        this.syncHealth(), this.cameraHeading = BB;
        for (const jB of this.arcs) this.drawArcAngle(jB)
      }
      dispose() {
        UB.n.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(gB)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const BB = this.api.getClientOption(this.localPlayerId, "_health"),
          jB = this.api.getClientOption(this.localPlayerId, "_shield"),
          zB = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(BB, this.readHealth) && Object.is(jB, this.readShield) && Object.is(zB, this.readMaxHealth)) return;
        if (this.readHealth = BB, this.readShield = jB, this.readMaxHealth = zB, null === BB || void 0 === BB || !zB) return this.lastHealthPool = null, this.maxHealth = null, this.YB = 1, this.dead = !1, void this.drawLow();
        const QB = BB + (null !== jB && void 0 !== jB ? jB : 0);
        if (null !== this.lastHealthPool && QB < this.lastHealthPool) {
          const BB = performance.now(),
            jB = (this.lastHealthPool - QB) / zB;
          this.lastDrop = BB - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + jB,
            at: this.lastDrop.at
          } : {
            frac: jB,
            at: BB
          }
        }
        this.dead = BB <= 0, this.dead && this.clearHits(), this.lastHealthPool = QB, this.maxHealth = zB, this.YB = BB > 0 ? BB / zB : 1, this.drawLow()
      }
      onHurt(BB, jB) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const zB = Math.min(1, this.takeDamageFrac(jB) / .3);
        null !== BB && this.showArc(BB, zB), this.flashEdge(null === BB ? null : BB - this.cameraHeading, .4 + .6 * zB)
      }
      takeDamageFrac(BB) {
        if (void 0 !== BB && this.maxHealth) return BB / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: jB
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, jB
      }
      drawLow() {
        if (!this.lowLayer) return;
        const BB = iB((tB - this.YB) / .25),
          jB = iB((SB - this.YB) / .15000000000000002),
          zB = this.YB < tB;
        this.lowLayer.classList.toggle("Active", zB), this.lowLayer.classList.toggle("Critical", this.YB < SB), this.lowLayer.style.opacity = String(zB ? .55 + .3 * BB + .15 * jB : 0)
      }
      showArc(BB, jB) {
        var zB, QB;
        if (!this.arcLayer) return;
        let nB = this.arcs.find((jB => EB(jB.direction, BB) < .6));
        if (!nB) {
          const jB = document.createElement("div");
          jB.className = "FrontlineDamageArc", jB.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(jB), nB = {
            element: jB,
            direction: BB,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(nB)
        }
        nB.direction = BB, this.drawArcAngle(nB);
        const dB = nB.fade ? Number(getComputedStyle(nB.element).opacity) : 0;
        null === (zB = nB.fade) || void 0 === zB || zB.cancel(), null === (QB = nB.pop) || void 0 === QB || QB.cancel(), nB.element.style.opacity = "1";
        const IB = nB.element.animate([{
          opacity: dB
        }, {
          opacity: 1
        }], 144);
        nB.fade = IB, nB.pop = nB.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * jB
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const NB = nB;
        IB.onfinish = () => {
          if (NB.fade !== IB) return;
          const BB = NB.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          BB.startTime = IB.startTime, NB.fade = BB, BB.onfinish = () => {
            NB.fade === BB && (NB.element.remove(), qB(this.arcs, NB))
          }
        }
      }
      drawArcAngle(BB) {
        const jB = BB.direction - this.cameraHeading;
        (null === BB.drawnAngle || Math.abs(jB - BB.drawnAngle) > .005) && (BB.drawnAngle = jB, BB.element.style.rotate = `${jB}rad`)
      }
      flashEdge(BB, jB) {
        var zB, QB, nB;
        if (!this.root) return;
        let dB = this.flashes.find((jB => null === jB.angle || null === BB ? jB.angle === BB : EB(jB.angle, BB) < .5));
        if (!dB) {
          const jB = document.createElement("div");
          jB.className = "FrontlineDamageFlash";
          const zB = jB.appendChild(document.createElement("div"));
          zB.className = "FrontlineDamageFlashGlow", this.root.insertBefore(jB, this.arcLayer), dB = {
            element: jB,
            glow: zB,
            angle: BB,
            level: 0,
            animation: null
          }, this.flashes.push(dB)
        }
        const IB = null === (zB = dB.animation) || void 0 === zB || null === (QB = zB.effect) || void 0 === QB ? void 0 : QB.getComputedTiming().progress,
          NB = null === IB || void 0 === IB ? 0 : dB.level * (1 - IB);
        dB.level = Math.min(1, Math.max(jB, NB + .6 * jB)), dB.angle = BB;
        const {
          x: uB,
          y: UB,
          rx: aB,
          ry: pB
        } = function(BB, jB) {
          const zB = window.innerWidth,
            QB = window.innerHeight;
          if (null === BB) return {
            x: zB / 2,
            y: QB / 2,
            rx: 0,
            ry: 0
          };
          const nB = Math.sin(BB),
            dB = -Math.cos(BB),
            IB = zB / 2 / Math.max(1e-6, Math.abs(nB)),
            NB = QB / 2 / Math.max(1e-6, Math.abs(dB)),
            uB = Math.min(IB, NB),
            UB = Math.round(zB / 2 + nB * uB),
            aB = Math.round(QB / 2 + dB * uB),
            pB = QB / 100 * (.85 + .25 * jB),
            rB = IB <= NB,
            sB = Math.round((rB ? 30 : 74) * pB),
            JB = Math.round((rB ? 58 : 26) * pB);
          return {
            x: UB,
            y: aB,
            rx: sB,
            ry: JB
          }
        }(BB, dB.level), {
          style: rB
        } = dB.glow;
        dB.glow.classList.toggle("Everywhere", null === BB), rB.setProperty("--glowX", `${uB}px`), rB.setProperty("--glowY", `${UB}px`), rB.setProperty("--glowRx", `${aB}px`), rB.setProperty("--glowRy", `${pB}px`), dB.element.style.transformOrigin = `${uB}px ${UB}px`, null === (nB = dB.animation) || void 0 === nB || nB.cancel();
        const sB = dB.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: dB.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * dB.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * dB.level
        });
        dB.animation = sB;
        const JB = dB;
        sB.onfinish = () => {
          JB.animation === sB && (JB.element.remove(), qB(this.flashes, JB))
        }
      }
      clearHits() {
        for (const QB of this.arcs) {
          var BB, jB;
          null === (BB = QB.fade) || void 0 === BB || BB.cancel(), QB.fade = null, null === (jB = QB.pop) || void 0 === jB || jB.cancel(), QB.element.remove()
        }
        this.arcs.length = 0;
        for (const QB of this.flashes) {
          var zB;
          null === (zB = QB.animation) || void 0 === zB || zB.cancel(), QB.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function EB(BB, jB) {
      return Math.abs(Math.atan2(Math.sin(BB - jB), Math.cos(BB - jB)))
    }

    function iB(BB) {
      return Math.max(0, Math.min(1, BB))
    }

    function qB(BB, jB) {
      const zB = BB.indexOf(jB); - 1 !== zB && BB.splice(zB, 1)
    }
    var fB = zB(1091),
      oB = zB.n(fB),
      HB = zB(36677),
      DB = zB(36762),
      FB = zB(1240),
      YB = zB(1471);
    const VB = "frontlineHudChanged",
      hB = "frontlineScoreboardChanged";
    class XB {
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
      VJ(BB) {
        this.wire = BB, UB.n.Ly(VB, BB, !0)
      }
      receiveScoreboard(BB) {
        let jB = "scoreboard" === BB[0] ? performance.now() + BB[5] : 0;
        const zB = this.scoreboard.endsAt;
        0 !== jB && 0 !== zB && Math.abs(jB - zB) < 1e3 && (jB = zB), this.scoreboard = {
          wire: BB,
          endsAt: jB
        }, UB.n.Ly(hB, this.scoreboard, !0)
      }
    }
    var ZB = zB(1148);
    const AB = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function TB(BB) {
      const [jB, zB] = (0, nB.useState)((() => (BB - performance.now()) / 1e3));
      return (0, nB.useEffect)((() => {
        if (0 === BB) return;
        const jB = () => {
          zB((BB - performance.now()) / 1e3)
        };
        jB();
        const QB = window.setInterval(jB, 250);
        return () => {
          window.clearInterval(QB)
        }
      }), [BB]), jB
    }

    function PB(BB) {
      let {
        className: jB,
        point: zB
      } = BB;
      const [QB, nB, dB, IB, NB, uB] = zB;
      return (0, ZB.jsxs)("div", {
        className: oB()(jB, `Owner-${nB||"None"}`, `Leader-${IB||"None"}`, {
          Contested: NB,
          Here: uB
        }),
        children: [(0, ZB.jsx)("span", {
          className: "FrontlinePointLetter",
          children: QB
        }), (0, ZB.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${dB}%`
          }
        })]
      })
    }
    const WB = (0, nB.memo)((function(BB) {
        let {
          points: jB,
          markers: zB
        } = BB;
        const {
          t: QB
        } = (0, FB.D)();
        return jB ? (0, ZB.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: jB.map((BB => {
            const [jB, , , , , , , nB] = BB;
            return (0, ZB.jsxs)("div", {
              ref: zB.bindMarker(jB),
              className: "FrontlinePointMarker",
              children: [(0, ZB.jsx)(PB, {
                className: "FrontlinePointMarkerTile",
                point: BB
              }), (0, ZB.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [nB && (0, ZB.jsx)("span", {
                  className: oB()("FrontlinePointMarkerHomeTurf", `Team-${nB}`),
                  children: QB("frontlineHud:homeTurf", {
                    team: QB(AB[nB])
                  })
                }), (0, ZB.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, jB)
          }))
        }) : null
      })),
      eB = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      lB = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function wB(BB) {
      let {
        hud: jB,
        crosshair: zB,
        damage: QB,
        markers: nB
      } = BB;
      const dB = (0, YB.h)(VB, jB.getWire()),
        IB = (0, YB.h)(hB, jB.getScoreboard());
      return (0, ZB.jsxs)(ZB.Fragment, {
        children: [(0, ZB.jsx)(xB, {
          damage: QB
        }), (0, ZB.jsx)(WB, {
          points: "scoreboard" === IB.wire[0] ? IB.wire[6] : null,
          markers: nB
        }), (0, ZB.jsx)(CB, {
          view: IB
        }), (0, ZB.jsx)("div", {
          className: "FrontlineReticle",
          ref: zB.bindElement
        }), (0, ZB.jsx)(HB.e, {
          children: (0, ZB.jsx)(KB, {
            wire: dB
          })
        })]
      })
    }
    const xB = (0, nB.memo)((function(BB) {
        let {
          damage: jB
        } = BB;
        return (0, ZB.jsxs)("div", {
          className: "FrontlineDamage",
          ref: jB.bindElement,
          children: [(0, ZB.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, ZB.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, ZB.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      KB = (0, nB.memo)((function(BB) {
        let {
          wire: jB
        } = BB;
        const {
          t: zB
        } = (0, FB.D)();
        if ("capture" === jB[0]) {
          const [, BB, QB, nB, dB, IB, NB] = jB, uB = Math.round(nB / 100 * 24);
          return (0, ZB.jsxs)("div", {
            className: oB()("FrontlinePlate", `Status-${QB}`, `Leader-${dB||"None"}`),
            children: [(0, ZB.jsx)(RB, {}), (0, ZB.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, ZB.jsx)("span", {
                className: "FrontlineObjective",
                children: BB
              }), (0, ZB.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, ZB.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: zB("frontlineHud:objective", {
                    point: BB,
                    friendly: IB,
                    enemy: NB
                  })
                }), (0, ZB.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: zB(eB[QB])
                })]
              }), (0, ZB.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(nB).padStart(3, "0"), (0, ZB.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, ZB.jsx)(bB, {
              segments: 24,
              lit: uB
            })]
          })
        }
        if ("alert" === jB[0]) {
          const [, BB, QB, nB] = jB;
          return (0, ZB.jsxs)("div", {
            className: oB()("FrontlinePlate", "FrontlineAlert", `Tone-${nB}`),
            children: [(0, ZB.jsx)(RB, {}), (0, ZB.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: zB(lB[BB])
            }), (0, ZB.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: QB
            })]
          })
        }
        return null
      })),
      CB = (0, nB.memo)((function(BB) {
        let {
          view: jB
        } = BB;
        const {
          t: zB
        } = (0, FB.D)(), QB = (0, nB.useRef)(null), dB = function(BB, jB) {
          const [zB, QB] = (0, nB.useState)(!1);
          return (0, nB.useLayoutEffect)((() => {
            const jB = BB.current;
            if (!jB) return;
            const zB = document.querySelector(`.${DB.h}`),
              nB = document.querySelector(`.${DB.l}`),
              dB = () => {
                var BB;
                const dB = jB.querySelector(".FrontlineTeamTrack"),
                  IB = (0, uB.getRemInPx)(),
                  NB = jB.getBoundingClientRect().width - 2 * (null !== (BB = null === dB || void 0 === dB ? void 0 : dB.getBoundingClientRect().width) && void 0 !== BB ? BB : 0),
                  UB = window.innerWidth / 2,
                  aB = zB ? zB.getBoundingClientRect().right : 0,
                  pB = nB ? nB.getBoundingClientRect().left : window.innerWidth,
                  rB = Math.min(UB - aB, pB - UB) - DB.d - NB / 2,
                  sB = rB < 6 * IB,
                  JB = sB ? (window.innerWidth - NB) / 2 - DB.d : rB;
                jB.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(JB,14*IB)))}px`), QB(sB)
              };
            dB();
            const IB = new ResizeObserver(dB);
            for (const BB of [jB, zB, nB]) BB && IB.observe(BB);
            return window.addEventListener("resize", dB), () => {
              IB.disconnect(), window.removeEventListener("resize", dB)
            }
          }), [BB, jB]), zB
        }(QB, "scoreboard" === jB.wire[0]);
        if ("scoreboard" !== jB.wire[0]) return null;
        const [, IB, NB, UB, aB, , pB] = jB.wire, rB = "Red" === IB ? "Blue" : "Red";
        return (0, ZB.jsxs)("div", {
          className: oB()("FrontlineScoreboardContainer", {
            Below: dB
          }),
          children: [(0, ZB.jsxs)("div", {
            ref: QB,
            className: "FrontlineScoreboard",
            children: [(0, ZB.jsx)(RB, {}), (0, ZB.jsx)(cB, {
              team: IB,
              tickets: NB,
              goal: aB,
              side: "Friendly"
            }), (0, ZB.jsx)("div", {
              className: "FrontlinePoints",
              children: pB.map((BB => (0, ZB.jsx)(PB, {
                className: "FrontlinePoint",
                point: BB
              }, BB[0])))
            }), (0, ZB.jsx)(cB, {
              team: rB,
              tickets: UB,
              goal: aB,
              side: "Enemy"
            })]
          }), (0, ZB.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, ZB.jsx)(vB, {
              endsAt: jB.endsAt
            }), (0, ZB.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: zB("frontlineHud:ticketGoal", {
                goal: aB
              })
            })]
          })]
        })
      }));

    function cB(BB) {
      let {
        team: jB,
        tickets: zB,
        goal: QB,
        side: nB
      } = BB;
      const {
        t: dB
      } = (0, FB.D)(), IB = String(zB).padStart(3, "0"), NB = IB.search(/[1-9]/), uB = -1 === NB ? IB : IB.slice(0, NB), UB = Math.min(20, Math.floor(zB / QB * 20));
      return (0, ZB.jsxs)("div", {
        className: oB()("FrontlineTeamScore", nB, `Team-${jB}`),
        children: [(0, ZB.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, ZB.jsx)("span", {
            className: "Lead",
            children: uB
          }), -1 !== NB && IB.slice(NB)]
        }), (0, ZB.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, ZB.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: dB(AB[jB])
          }), (0, ZB.jsx)(bB, {
            segments: 20,
            lit: UB
          })]
        })]
      })
    }

    function bB(BB) {
      let {
        segments: jB,
        lit: zB
      } = BB;
      return (0, ZB.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: jB
        }, ((BB, jB) => (0, ZB.jsx)("i", {
          className: oB()({
            Lit: jB < zB
          })
        }, jB)))
      })
    }

    function vB(BB) {
      let {
        endsAt: jB
      } = BB;
      const zB = Math.max(0, Math.ceil(TB(jB)));
      return (0, ZB.jsxs)("div", {
        className: oB()("FrontlineClock", {
          Urgent: zB <= 60
        }),
        children: [Math.floor(zB / 60), ":", String(zB % 60).padStart(2, "0")]
      })
    }

    function RB() {
      return (0, ZB.jsxs)(ZB.Fragment, {
        children: [(0, ZB.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, ZB.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var OB = zB(36757),
      Bj = zB(1284),
      jj = zB(38581),
      zj = zB(38627);
    class Qj {
      constructor(BB) {
        var jB;
        this.hud = BB, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.HJ = !1, this.rG = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.rG), null === (jB = window.visualViewport) || void 0 === jB || jB.addEventListener("resize", this.rG)
      }
      bindMarker(BB) {
        let jB = this.refs.get(BB);
        return jB || (jB = jB => {
          var zB;
          null === (zB = this.markers.get(BB)) || void 0 === zB || zB.stopObserving(), this.markers.delete(BB), jB && !this.HJ && this.markers.set(BB, this.mount(jB))
        }, this.refs.set(BB, jB)), jB
      }
      frame(BB, jB) {
        this.render = BB;
        const zB = this.hud.getScoreboard().wire;
        if ("scoreboard" === zB[0] && 0 !== this.markers.size)
          for (const [QB, , , , , , nB] of zB[6]) {
            const BB = this.markers.get(QB);
            BB && nB && (BB.target ??= [0, 0, 0], BB.target[0] = nB[0], BB.target[1] = nB[1] + 2.5, BB.target[2] = nB[2], this.place(BB), this.hj(BB, jB && Math.hypot(nB[0] - jB[0], nB[1] - jB[1], nB[2] - jB[2])))
          }
      }
      dispose() {
        var BB;
        this.HJ = !0, window.removeEventListener("resize", this.rG), null === (BB = window.visualViewport) || void 0 === BB || BB.removeEventListener("resize", this.rG);
        for (const jB of this.markers.values()) jB.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(BB) {
        const {
          render: jB,
          viewport: zB
        } = this;
        if (!jB || !BB.target) return;
        const QB = (50 - jB.screenBandPct.y) / 100 * zB.height,
          nB = {
            x: BB.halfSize.width + 8,
            top: BB.halfSize.height + 8,
            bottom: BB.halfSize.height + BB.labelsBelow + QB
          },
          dB = jB.projectWorldPosToViewport(BB.target),
          IB = null !== dB && void 0 !== dB ? dB : jB.projectWorldPosToScreenPos(BB.target),
          NB = (0, zj.d)({
            x: IB.x,
            y: IB.y,
            text: dB
          }, nB, zB);
        (0, jj.d)(BB.root, Math.round(100 * NB.x) / 100, Math.round(100 * NB.y) / 100)
      }
      hj(BB, jB) {
        if (null === jB) return void(null !== BB.metres && (BB.metres = null, BB.distance.textContent = ""));
        const zB = Date.now();
        (null === BB.metres || (0, OB.c)(jB, BB.metres, BB.metresShownAt)) && (BB.metres = Math.round(jB), BB.metresShownAt = zB, BB.distance.textContent = (0, FB.z)(Bj.c.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(BB.metres)
        }))
      }
      mount(BB) {
        const jB = {
            root: BB,
            distance: BB.querySelector(".FrontlinePointMarkerDistance"),
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
          zB = BB.querySelector(".FrontlinePointMarkerLabels"),
          QB = new ResizeObserver((() => {
            jB.halfSize = {
              width: Math.max(BB.offsetWidth, zB.offsetWidth) / 2,
              height: BB.offsetHeight / 2
            }, jB.labelsBelow = zB.offsetTop + zB.offsetHeight - BB.offsetHeight, this.place(jB)
          }));
        return QB.observe(BB, {
          box: "border-box"
        }), QB.observe(zB, {
          box: "border-box"
        }), jB.stopObserving = () => {
          QB.disconnect()
        }, jB
      }
    }
    var nj = zB(6401),
      dj = zB(2733);
    const Ij = "frontlineRoundEndChanged";
    class Nj {
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
      VJ(BB) {
        const jB = "roundEnd" === BB[0] ? performance.now() + BB[5] : 0;
        this.view = {
          wire: BB,
          key: this.view.key + 1,
          endsAt: jB
        }, UB.n.Ly(Ij, this.view, !0)
      }
    }
    const uj = (0, nB.lazy)((() => (0, dj.d)(Promise.all([zB.e(239), zB.e(202)]).then((() => zB(41846))), (BB => BB.FrontlineMvpLineup)))),
      Uj = [4800, 4e3, 3200],
      aj = [1, 0, 2],
      pj = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      rj = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function sj(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, YB.h)(Ij, jB.getView()),
        QB = TB(zB.endsAt);
      return "roundEnd" !== zB.wire[0] || 1e3 * QB < -2e3 ? null : (0, ZB.jsx)(Jj, {
        wire: zB.wire,
        secondsLeft: Math.max(0, Math.ceil(QB))
      }, zB.key)
    }
    const Jj = (0, nB.memo)((function(BB) {
      let {
        wire: jB,
        secondsLeft: zB
      } = BB;
      const {
        t: dB
      } = (0, FB.D)(), [, IB, NB, uB, UB, , aB, pB] = jB, rB = (0, nB.useMemo)((() => aj.filter((BB => BB < pB.length))), [pB]), sB = (0, nB.useMemo)((() => rB.map((BB => {
        const [, , , , , jB, zB] = pB[BB];
        return {
          cosmetics: QB.map(((BB, zB) => [BB, jB[zB]])),
          size: 0 === BB ? 1.15 : .85,
          heldGun: {
            name: zB,
            aimed: 0 === BB
          },
          showAfterMs: Uj[BB]
        }
      }))), [pB, rB]);
      return (0, ZB.jsxs)("div", {
        className: oB()("FrontlineRoundEnd", `Result-${IB}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, ZB.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, ZB.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, ZB.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, ZB.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, ZB.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (JB = dB(pj[IB]), /\p{Script=Arabic}/u.test(JB) ? [JB] : (0, nj.e)(JB)).map(((BB, jB) => (0, ZB.jsx)("span", {
              style: {
                "--letter": jB
              },
              children: BB
            }, jB)))]
          }), (0, ZB.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [NB && "victory" === IB && (0, ZB.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: dB("frontlineRoundEnd:comeback")
            }), (0, ZB.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, ZB.jsx)("b", {
                className: "Friendly",
                children: uB
              }), " \u2013 ", (0, ZB.jsx)("b", {
                className: "Enemy",
                children: UB
              })]
            })]
          })]
        }), rB.length > 0 && (0, ZB.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": rB.length
          },
          children: [(0, ZB.jsx)(nB.Suspense, {
            fallback: null,
            children: (0, ZB.jsx)(uj, {
              className: "FrontlineRoundEndLineup",
              players: sB
            })
          }), rB.map((BB => (0, ZB.jsx)(mj, {
            mvp: pB[BB],
            place: BB
          }, BB)))]
        }), (0, ZB.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: dB("frontlineRoundEnd:nextFront", {
            map: aB,
            seconds: String(zB)
          })
        })]
      });
      var JB
    }));

    function mj(BB) {
      let {
        mvp: jB,
        place: zB
      } = BB;
      const {
        t: QB
      } = (0, FB.D)(), [nB, dB, IB, NB, uB] = jB, [UB, aB] = QB(function(BB, jB) {
        return 1 === jB && "damage" !== BB ? `frontlineRoundEnd:${BB}One` : `frontlineRoundEnd:${BB}`
      }(IB, NB), {
        name: "\0",
        count: NB.toLocaleString()
      }).split("\0");
      return (0, ZB.jsxs)("div", {
        className: oB()("FrontlineMvpCard", `Place-${zB+1}`, `Team-${dB}`),
        style: {
          "--revealMs": `${Uj[zB]}ms`
        },
        children: [(0, ZB.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, ZB.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, ZB.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: QB(rj[zB])
        }), (0, ZB.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [UB, (0, ZB.jsx)("span", {
            className: "FrontlineMvpName",
            children: nB
          }), aB]
        }), (0, ZB.jsx)("div", {
          className: "FrontlineMvpKit",
          children: uB
        })]
      })
    }
    const yj = function(BB, jB, zB, QB) {
      let {
        localPlayerId: IB
      } = QB;
      const NB = new XB,
        uB = new Nj;
      let UB = null,
        aB = null,
        pB = null,
        rB = null,
        sB = null,
        JB = [!1, !1];
      const mB = () => {
        var BB, jB;
        const [zB, QB] = JB;
        null === (BB = aB) || void 0 === BB || BB.mH(!zB), null === (jB = pB) || void 0 === jB || jB.mH(!QB)
      };
      return {
        onCreate: BB => {
          UB = BB, aB = new LB(BB, IB), pB = new MB(BB, IB), rB = new Qj(NB), mB(), sB = (0, dB.t)((0, nB.createElement)(nB.Fragment, null, (0, nB.createElement)(wB, {
            hud: NB,
            crosshair: aB,
            damage: pB,
            markers: rB
          }), (0, nB.createElement)(sj, {
            controller: uB
          })))
        },
        onClose: () => {
          var BB, jB, zB, QB;
          null === (BB = sB) || void 0 === BB || BB(), null === (jB = aB) || void 0 === jB || jB.dispose(), aB = null, null === (zB = pB) || void 0 === zB || zB.dispose(), pB = null, null === (QB = rB) || void 0 === QB || QB.dispose(), rB = null, UB = null
        },
        onAfterRender: (BB, jB) => {
          var zB, QB, nB, dB;
          null === (zB = aB) || void 0 === zB || zB.frame(BB, jB.tanHalfFovY), null === (QB = pB) || void 0 === QB || QB.frame(jB.cameraHeading), null === (nB = rB) || void 0 === nB || nB.frame(jB, null !== (dB = UB) && void 0 !== dB && dB.checkValid(IB) ? UB.iG(IB) : null)
        },
        onReceivedMessageFromServer: (BB, jB) => {
          "frontlineHud" === BB ? NB.VJ(jB) : "frontlineScoreboard" === BB ? NB.receiveScoreboard(jB) : "frontlineRoundEnd" === BB ? uB.VJ(jB) : "frontlinePrefs" === BB && (JB = jB, mB())
        }
      }
    }
  },
  6401: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB
    });
    const QB = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function nB(BB) {
      return null === QB ? Array.from(BB) : Array.from(QB.segment(BB), (BB => {
        let {
          segment: jB
        } = BB;
        return jB
      }))
    }
  },
  38581: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      g: () => dB
    });
    const QB = new WeakMap;

    function nB(BB) {
      let jB = QB.get(BB);
      return jB || (jB = {
        hidden: BB.hidden,
        x: NaN,
        y: NaN
      }, QB.set(BB, jB)), jB
    }

    function dB(BB, jB) {
      const zB = nB(BB);
      zB.hidden !== jB && (zB.hidden = jB, BB.hidden = jB)
    }

    function IB(BB, jB, zB) {
      const QB = nB(BB);
      QB.x === jB && QB.y === zB || (QB.x = jB, QB.y = zB, BB.style.translate = `${jB}vw ${zB}vh`)
    }
  },
  37148: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    const QB = {
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
for (const BB in modules) Object.freeze(modules[BB]);