export const id = 17;
export const ids = [17];
export const modules = {
  35589: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => OB,
      e: () => DB,
      h: () => LB,
      l: () => kB
    });
    var VB = dB(8570),
      yB = dB(35595),
      pB = dB(35601),
      lB = dB(8103),
      JB = dB(1317),
      YB = dB(62),
      gB = dB(72),
      oB = dB(980);

    function kB() {
      var BB;
      return (0, JB.f)(yB.c, (0, yB.k)()), (0, oB.jsx)(oB.Fragment, {
        children: null === (BB = (0, yB.k)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function LB(BB) {
      var TB;
      let {
        show: dB
      } = BB;
      (0, JB.f)(yB.c, (0, yB.k)());
      const gB = null === (TB = (0, yB.k)()) || void 0 === TB ? void 0 : TB.menu;
      return (0, YB.useEffect)((() => {
        var BB;
        dB || (null === gB || void 0 === gB || null === (BB = gB.onClose) || void 0 === BB || BB.call(gB), (0, pB.r)())
      }), [dB, gB]), (0, YB.useEffect)((() => dB ? (0, lB.c)(pB.x, pB.e) : void 0), [dB]), (0, oB.jsx)(VB.d, {
        showing: dB,
        globallyUniqueKey: "clientGameMenu",
        children: null === gB || void 0 === gB ? void 0 : gB.content
      })
    }

    function OB(BB) {
      let {
        placement: TB = "bottom"
      } = BB;
      return (0, oB.jsx)("div", {
        id: `clientGameHud-${TB}`,
        style: {
          display: "contents"
        }
      })
    }

    function DB(BB) {
      let {
        children: TB,
        placement: dB = "bottom"
      } = BB;
      const [VB, yB] = (0, YB.useState)(null);
      return (0, YB.useEffect)((() => {
        yB(document.getElementById(`clientGameHud-${dB}`))
      }), [dB]), VB ? (0, gB.createPortal)(TB, VB) : null
    }
  },
  8570: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = dB(3948),
      yB = dB(3951);

    function pB(BB) {
      let {
        children: TB,
        showing: dB,
        globallyUniqueKey: pB,
        alwaysMountChildren: lB = !1,
        doGameplayStartStopOnShow: JB = !0,
        keepsMovement: YB = !1
      } = BB;
      return (0, yB.d)(!0, dB, pB, YB), (0, VB.e)(JB, dB), dB || lB ? TB : null
    }
  },
  35700: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB,
      f: () => lB,
      g: () => JB,
      j: () => YB
    });
    var VB = dB(62),
      yB = dB(1002);
    const pB = 8,
      lB = "InGameHeaderContainer",
      JB = "TopRightElements";

    function YB(BB) {
      const [TB] = (0, yB.e)(), [dB, YB] = (0, VB.useState)(!1);
      return (0, VB.useLayoutEffect)((() => {
        if (!BB) return;
        const TB = document.querySelector(`.${lB}`),
          dB = document.querySelector(`.${JB}`),
          VB = () => {
            const VB = BB.getBoundingClientRect(),
              yB = TB ? TB.getBoundingClientRect().right : 0,
              lB = dB ? dB.getBoundingClientRect().left : window.innerWidth,
              JB = VB.left < yB + pB,
              gB = VB.right > lB - pB;
            YB(JB || gB)
          };
        VB();
        const yB = new ResizeObserver(VB);
        return yB.observe(BB), TB && yB.observe(TB), dB && yB.observe(dB), () => {
          yB.disconnect()
        }
      }), [BB, TB]), dB
    }
  },
  35696: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB
    });
    const VB = [{
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

    function yB(BB, TB, dB) {
      const yB = Math.abs(BB - TB),
        pB = Date.now() - dB;
      for (const lB of VB)
        if (BB < lB.maxDist) return yB >= lB.hardUpdateDist || pB > lB.timeBetweenSoftChecks && yB >= lB.softUpdateDist;
      return !1
    }
  },
  8103: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      c: () => yB
    });
    let VB = null;
    const yB = function(BB) {
        const TB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return VB = TB, () => {
          VB === TB && (VB = null)
        }
      },
      pB = () => {
        var BB;
        return null !== (BB = VB) && void 0 !== BB && BB.canCycle() ? VB.cycle : null
      }
  },
  37488: (BB, TB, dB) => {
    function VB(BB, TB, dB) {
      var VB;
      const {
        width: yB,
        height: pB
      } = dB, lB = null !== (VB = BB.text) && void 0 !== VB ? VB : BB, JB = (lB.x / 100 - .5) * yB, YB = (lB.y / 100 - .5) * pB, gB = yB / 2 - TB.x;
      if (null !== BB.text && Math.abs(JB) <= gB && YB >= TB.top - pB / 2 && YB <= pB / 2 - TB.bottom) return {
        x: lB.x,
        y: lB.y
      };
      const oB = Math.min(0 === JB ? 1 / 0 : gB / Math.abs(JB), YB > 0 ? (pB / 2 - TB.bottom) / YB : YB < 0 ? (TB.top - pB / 2) / YB : 1 / 0);
      return !Number.isFinite(oB) || oB < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + JB * oB / yB * 100,
        y: 50 + YB * oB / pB * 100
      }
    }
    dB.d(TB, {
      e: () => VB
    })
  },
  35601: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => vB,
      c: () => pB,
      e: () => uB,
      i: () => HB,
      k: () => JB,
      n: () => LB,
      r: () => EB,
      s: () => kB,
      v: () => mB,
      x: () => DB
    });
    var VB = dB(21),
      yB = dB(24);
    const pB = "clientGameInventoryButtonsChanged",
      lB = new Map;

    function JB() {
      return [...lB.values()].sort(((BB, TB) => {
        var dB, VB;
        return (null !== (dB = BB.order) && void 0 !== dB ? dB : 0) - (null !== (VB = TB.order) && void 0 !== VB ? VB : 0)
      }))
    }
    let YB = null;

    function gB(BB) {
      YB = BB
    }
    let oB = !1;

    function kB(BB) {
      oB = !0;
      try {
        BB.onClick()
      } finally {
        oB = !1
      }
      BB.panel && "clientGame" === VB.d.get("openInGameMenuName") && gB(BB.id)
    }

    function LB() {
      return oB
    }

    function OB() {
      return JB().filter((BB => BB.panel && !BB.disabled))
    }

    function DB(BB) {
      const TB = OB(),
        dB = TB.findIndex((BB => BB.id === YB));
      return !(dB < 0 || TB.length < 2) && (kB(TB[(dB + BB + TB.length) % TB.length]), !0)
    }

    function uB() {
      return null !== YB && OB().length > 1
    }

    function HB() {
      gB(null)
    }

    function EB() {
      "inventory" !== VB.d.get("openInGameMenuName") && gB(null)
    }

    function vB() {
      const BB = YB;
      return gB(null), BB
    }

    function mB(BB) {
      return lB.set(BB.id, BB), yB.h.yH(pB, JB(), !0), () => {
        lB.get(BB.id) === BB && (lB.delete(BB.id), yB.h.yH(pB, JB()))
      }
    }
  },
  35595: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      g: () => HB,
      h: () => EB,
      j: () => LB,
      k: () => gB,
      o: () => uB,
      p: () => OB,
      r: () => oB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(1173),
      lB = dB(35601);
    const JB = "clientGameUiChanged";
    let YB = null;

    function gB() {
      return YB
    }

    function oB(BB, TB) {
      const dB = {
        content: BB,
        menu: TB
      };
      return YB = dB, yB.h.yH(JB, YB, !0), () => {
        YB === dB && (YB = null, DB = !1, HB(), yB.h.yH(JB, null))
      }
    }
    let kB = null;

    function LB() {
      return kB
    }

    function OB(BB) {
      return kB = BB, () => {
        kB === BB && (kB = null)
      }
    }
    let DB = !1;

    function uB() {
      const BB = VB.d.get("openInGameMenuName");
      "clientGame" !== BB && (DB = "inventory" === BB), (0, lB.n)() || (0, lB.i)(), (0, pB.p)("InGameMenu"), VB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function HB() {
      vB(!1)
    }

    function EB() {
      vB(DB)
    }

    function vB(BB) {
      "clientGame" === VB.d.get("openInGameMenuName") && VB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, lB.i)(), DB = !1
    }
  },
  38352: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => HT
    });
    const VB = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var yB = dB(62),
      pB = dB(35595),
      lB = dB(35984),
      JB = dB(35616),
      YB = dB(1596),
      gB = dB(24);
    const oB = {
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
    const kB = 32;

    function LB(BB, TB, dB, VB) {
      return {
        tag: "line",
        attrs: {
          x1: BB,
          y1: TB,
          x2: dB,
          y2: VB,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function OB(BB) {
      return {
        tag: "circle",
        attrs: {
          cx: kB,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kB,
          r: BB,
          class: "Fill"
        }
      }
    }

    function DB(BB, TB) {
      return {
        tag: "path",
        attrs: {
          d: BB,
          "stroke-width": TB
        }
      }
    }

    function uB(BB, TB, dB) {
      return {
        tag: "circle",
        attrs: {
          cx: kB,
          cy: kB,
          r: BB,
          "stroke-width": TB,
          class: dB
        }
      }
    }

    function HB(BB, TB, dB) {
      return {
        tag: "text",
        attrs: {
          x: BB,
          y: TB,
          class: "Fill Label"
        },
        text: dB
      }
    }
    const EB = {
      pistol: BB => [LB(kB, kB - BB - 5, kB, kB - BB), LB(kB - BB - 5, kB, kB - BB, kB), LB(kB + BB, kB, kB + BB + 5, kB), OB(1.4)],
      rifle: BB => [LB(kB, kB - BB - 8, kB, kB - BB), LB(kB, kB + BB, kB, kB + BB + 8), LB(kB - BB - 8, kB, kB - BB, kB), LB(kB + BB, kB, kB + BB + 8, kB), OB(1)],
      smg: BB => {
        const TB = Math.PI / 2,
          dB = [];
        for (let lB = 0; lB < 4; lB++) dB.push((yB = lB * TB + .35, pB = (lB + 1) * TB - .35, DB(`M${kB+(VB=6+BB)*Math.cos(yB)} ${kB+VB*Math.sin(yB)} A${VB} ${VB} 0 0 1 ${kB+VB*Math.cos(pB)} ${kB+VB*Math.sin(pB)}`, 2)));
        var VB, yB, pB;
        return [...dB, OB(1.4)]
      },
      shotgun: BB => [uB(BB, 3, "Ring Outline"), uB(BB, 1.5, "Ring")],
      marksman: BB => [DB(`M${26-BB/2} ${39+BB/2} L32 33 L${38+BB/2} ${39+BB/2}`, 2), LB(14 - BB, kB, 24 - BB, kB, 1.5), LB(40 + BB, kB, 50 + BB, kB, 1.5), LB(14 - BB, 30, 14 - BB, 34, 1.5), LB(50 + BB, 30, 50 + BB, 34, 1.5)],
      machineGun: BB => {
        const TB = 10 + BB,
          dB = [];
        for (const [VB, yB] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) dB.push(DB(`M${kB+VB*TB} ${kB+yB*(TB-5)} L${kB+VB*TB} ${kB+yB*TB} L${kB+VB*(TB-5)} ${kB+yB*TB}`, 2));
        return [...dB, LB(kB, 28, kB, 36, 1.5), LB(28, kB, 36, kB, 1.5)]
      },
      launcher: () => [LB(14, 30, 50, 30, 1.5), LB(kB, 24, kB, 52, 1.5), LB(28, 38, 36, 38, 1.5), LB(29, 44, 35, 44, 1.5), LB(30, 50, 34, 50, 1.5), HB(38, 40, "100"), HB(37, 46, "200"), OB(1.4, 30)],
      melee: () => [DB("M32 26 L38 32 L32 38 L26 32 Z", 1.5), OB(1.2)],
      throwable: () => [OB(1.6)]
    };

    function vB(BB) {
      let {
        tag: TB,
        attrs: dB,
        text: VB
      } = BB, yB = `<${TB}`;
      for (const [pB, lB] of Object.entries(dB)) yB += ` ${pB}="${lB}"`;
      return void 0 === VB ? `${yB}/>` : `${yB}>${VB}</${TB}>`
    }
    class mB {
      constructor(BB, TB) {
        this.api = BB, this.localPlayerId = TB, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = BB => {
          this.element = BB, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, BB && !this.enabled && (BB.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, YB.getRemInPx)()))
        }, this.tokens = [gB.h.subscribe("aimingOverlay", (BB => {
          this.sniperOverlay = "sniper" === BB
        })), gB.h.subscribe("mouseState", (BB => {
          let {
            isDown: TB
          } = BB;
          this.mouseDown = TB
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      hN(BB) {
        BB !== this.enabled && (this.enabled = BB, this.drawnVisible = null, BB || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(BB, TB) {
        var dB, VB;
        if (!this.enabled) return;
        const {
          api: yB
        } = this, pB = yB.isAlive(this.localPlayerId) && null !== (dB = null === (VB = yB.gdB(this.localPlayerId)) || void 0 === VB ? void 0 : VB.name) && void 0 !== dB ? dB : null, lB = (JB = pB) && oB[JB] || null;
        var JB;
        if (this.setOwnsCrosshair(null !== lB), !this.element) return;
        const YB = yB.getHeldGunInaccuracy(),
          gB = null !== YB,
          kB = null !== lB && !this.sniperOverlay && yB.isCrosshairShown();
        if (kB !== this.drawnVisible && (this.drawnVisible = kB, this.element.style.display = kB ? "block" : "none"), !kB) return;
        const LB = gB ? function(BB) {
            return "launcher" === BB || "melee" === BB || "throwable" === BB ? "none" : "shotgun" === BB ? "cone" : "offset"
          }(lB) : "none",
          OB = null !== YB && void 0 !== YB ? YB : 0;
        "cone" === LB ? this.drawCone(lB, this.coneRadiusVh(OB, TB) * this.gapPerVh, BB) : (this.coneDrawn = !1, this.draw(lB, "none" === LB ? 2 : this.offsetGap(OB)));
        const DB = !gB && this.mouseDown;
        DB !== this.drawnPressed && (this.drawnPressed = DB, this.element.classList.toggle("Pressed", DB))
      }
      dispose() {
        for (const BB of this.tokens) gB.h.unsubscribe(BB);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(BB, TB) {
        var dB, VB;
        BB !== this.drawnFamily ? (this.drawnFamily = BB, this.drawnGap = TB, this.element.innerHTML = function(BB, TB) {
          return `<svg viewBox="0 0 64 64">${EB[BB](TB).map(vB).join("")}</svg>`
        }(BB, TB), this.shapes = Array.from(null !== (dB = null === (VB = this.element.firstElementChild) || void 0 === VB ? void 0 : VB.children) && void 0 !== dB ? dB : [])) : TB !== this.drawnGap && (this.drawnGap = TB, function(BB, TB, dB) {
          const VB = EB[TB](dB);
          for (let yB = 0; yB < VB.length; yB++)
            for (const [TB, dB] of Object.entries(VB[yB].attrs)) {
              const VB = String(dB);
              BB[yB].getAttribute(TB) !== VB && BB[yB].setAttribute(TB, VB)
            }
        }(this.shapes, BB, TB))
      }
      drawCone(BB, TB, dB) {
        BB === this.drawnFamily && this.coneDrawn ? this.shownRadius += (TB - this.shownRadius) * (1 - Math.exp(-dB / 80)) : this.shownRadius = TB, this.coneDrawn = !0, this.draw(BB, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(BB, TB) {
        if (!(TB > 0)) return 1;
        const dB = BB * lB.f / 2;
        return Math.max(50 * Math.tan(dB) / TB, 1)
      }
      offsetGap(BB) {
        const TB = 2 + ((0, JB.e)(BB) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * TB) / 2)
      }
      setOwnsCrosshair(BB) {
        BB !== this.ownsCrosshair && (this.ownsCrosshair = BB, document.body.classList.toggle("FrontlineCustomCrosshair", BB))
      }
    }
    const iB = "FrontlineCustomDamage",
      NB = .45,
      tB = .2;
    class fB {
      constructor(BB, TB) {
        this.api = BB, this.localPlayerId = TB, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.OB = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = BB => {
          var TB, dB;
          this.clearHits(), this.root = BB, this.lowLayer = null !== (TB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".FrontlineDamageLow")) && void 0 !== TB ? TB : null, this.arcLayer = null !== (dB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".FrontlineDamageArcs")) && void 0 !== dB ? dB : null, this.showRoot(), this.drawLow()
        }, this.token = gB.h.subscribe("damagedByOtherPlayer", (BB => {
          let {
            direction: TB,
            kB: dB
          } = BB;
          this.onHurt(TB, dB)
        })), this.syncHealth(), document.body.classList.add(iB)
      }
      hN(BB) {
        BB !== this.enabled && (this.enabled = BB, document.body.classList.toggle(iB, BB), BB || this.clearHits(), this.showRoot())
      }
      frame(BB) {
        this.syncHealth(), this.cameraHeading = BB;
        for (const TB of this.arcs) this.drawArcAngle(TB)
      }
      dispose() {
        gB.h.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(iB)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const BB = this.api.getClientOption(this.localPlayerId, "_health"),
          TB = this.api.getClientOption(this.localPlayerId, "_shield"),
          dB = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(BB, this.readHealth) && Object.is(TB, this.readShield) && Object.is(dB, this.readMaxHealth)) return;
        if (this.readHealth = BB, this.readShield = TB, this.readMaxHealth = dB, null === BB || void 0 === BB || !dB) return this.lastHealthPool = null, this.maxHealth = null, this.OB = 1, this.dead = !1, void this.drawLow();
        const VB = BB + (null !== TB && void 0 !== TB ? TB : 0);
        if (null !== this.lastHealthPool && VB < this.lastHealthPool) {
          const BB = performance.now(),
            TB = (this.lastHealthPool - VB) / dB;
          this.lastDrop = BB - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + TB,
            at: this.lastDrop.at
          } : {
            frac: TB,
            at: BB
          }
        }
        this.dead = BB <= 0, this.dead && this.clearHits(), this.lastHealthPool = VB, this.maxHealth = dB, this.OB = BB > 0 ? BB / dB : 1, this.drawLow()
      }
      onHurt(BB, TB) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const dB = Math.min(1, this.takeDamageFrac(TB) / .3);
        null !== BB && this.showArc(BB, dB), this.flashEdge(null === BB ? null : BB - this.cameraHeading, .4 + .6 * dB)
      }
      takeDamageFrac(BB) {
        if (void 0 !== BB && this.maxHealth) return BB / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: TB
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, TB
      }
      drawLow() {
        if (!this.lowLayer) return;
        const BB = MB((NB - this.OB) / .25),
          TB = MB((tB - this.OB) / .15000000000000002),
          dB = this.OB < NB;
        this.lowLayer.classList.toggle("Active", dB), this.lowLayer.classList.toggle("Critical", this.OB < tB), this.lowLayer.style.opacity = String(dB ? .55 + .3 * BB + .15 * TB : 0)
      }
      showArc(BB, TB) {
        var dB, VB;
        if (!this.arcLayer) return;
        let yB = this.arcs.find((TB => sB(TB.direction, BB) < .6));
        if (!yB) {
          const TB = document.createElement("div");
          TB.className = "FrontlineDamageArc", TB.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(TB), yB = {
            element: TB,
            direction: BB,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(yB)
        }
        yB.direction = BB, this.drawArcAngle(yB);
        const pB = yB.fade ? Number(getComputedStyle(yB.element).opacity) : 0;
        null === (dB = yB.fade) || void 0 === dB || dB.cancel(), null === (VB = yB.pop) || void 0 === VB || VB.cancel(), yB.element.style.opacity = "1";
        const lB = yB.element.animate([{
          opacity: pB
        }, {
          opacity: 1
        }], 144);
        yB.fade = lB, yB.pop = yB.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * TB
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const JB = yB;
        lB.onfinish = () => {
          if (JB.fade !== lB) return;
          const BB = JB.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          BB.startTime = lB.startTime, JB.fade = BB, BB.onfinish = () => {
            JB.fade === BB && (JB.element.remove(), zB(this.arcs, JB))
          }
        }
      }
      drawArcAngle(BB) {
        const TB = BB.direction - this.cameraHeading;
        (null === BB.drawnAngle || Math.abs(TB - BB.drawnAngle) > .005) && (BB.drawnAngle = TB, BB.element.style.rotate = `${TB}rad`)
      }
      flashEdge(BB, TB) {
        var dB, VB, yB;
        if (!this.root) return;
        let pB = this.flashes.find((TB => null === TB.angle || null === BB ? TB.angle === BB : sB(TB.angle, BB) < .5));
        if (!pB) {
          const TB = document.createElement("div");
          TB.className = "FrontlineDamageFlash";
          const dB = TB.appendChild(document.createElement("div"));
          dB.className = "FrontlineDamageFlashGlow", this.root.insertBefore(TB, this.arcLayer), pB = {
            element: TB,
            glow: dB,
            angle: BB,
            level: 0,
            animation: null
          }, this.flashes.push(pB)
        }
        const lB = null === (dB = pB.animation) || void 0 === dB || null === (VB = dB.effect) || void 0 === VB ? void 0 : VB.getComputedTiming().progress,
          JB = null === lB || void 0 === lB ? 0 : pB.level * (1 - lB);
        pB.level = Math.min(1, Math.max(TB, JB + .6 * TB)), pB.angle = BB;
        const {
          x: YB,
          y: gB,
          rx: oB,
          ry: kB
        } = function(BB, TB) {
          const dB = window.innerWidth,
            VB = window.innerHeight;
          if (null === BB) return {
            x: dB / 2,
            y: VB / 2,
            rx: 0,
            ry: 0
          };
          const yB = Math.sin(BB),
            pB = -Math.cos(BB),
            lB = dB / 2 / Math.max(1e-6, Math.abs(yB)),
            JB = VB / 2 / Math.max(1e-6, Math.abs(pB)),
            YB = Math.min(lB, JB),
            gB = Math.round(dB / 2 + yB * YB),
            oB = Math.round(VB / 2 + pB * YB),
            kB = VB / 100 * (.85 + .25 * TB),
            LB = lB <= JB,
            OB = Math.round((LB ? 30 : 74) * kB),
            DB = Math.round((LB ? 58 : 26) * kB);
          return {
            x: gB,
            y: oB,
            rx: OB,
            ry: DB
          }
        }(BB, pB.level), {
          style: LB
        } = pB.glow;
        pB.glow.classList.toggle("Everywhere", null === BB), LB.setProperty("--glowX", `${YB}px`), LB.setProperty("--glowY", `${gB}px`), LB.setProperty("--glowRx", `${oB}px`), LB.setProperty("--glowRy", `${kB}px`), pB.element.style.transformOrigin = `${YB}px ${gB}px`, null === (yB = pB.animation) || void 0 === yB || yB.cancel();
        const OB = pB.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: pB.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * pB.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * pB.level
        });
        pB.animation = OB;
        const DB = pB;
        OB.onfinish = () => {
          DB.animation === OB && (DB.element.remove(), zB(this.flashes, DB))
        }
      }
      clearHits() {
        for (const VB of this.arcs) {
          var BB, TB;
          null === (BB = VB.fade) || void 0 === BB || BB.cancel(), VB.fade = null, null === (TB = VB.pop) || void 0 === TB || TB.cancel(), VB.element.remove()
        }
        this.arcs.length = 0;
        for (const VB of this.flashes) {
          var dB;
          null === (dB = VB.animation) || void 0 === dB || dB.cancel(), VB.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function sB(BB, TB) {
      return Math.abs(Math.atan2(Math.sin(BB - TB), Math.cos(BB - TB)))
    }

    function MB(BB) {
      return Math.max(0, Math.min(1, BB))
    }

    function zB(BB, TB) {
      const dB = BB.indexOf(TB); - 1 !== dB && BB.splice(dB, 1)
    }
    var wB = dB(933),
      UB = dB.n(wB),
      FB = dB(35589),
      KB = dB(35700),
      rB = dB(1078),
      IB = dB(1317);
    const cB = "frontlineHudChanged",
      SB = "frontlineScoreboardChanged";
    class PB {
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
      MD(BB) {
        this.wire = BB, gB.h.yH(cB, BB, !0)
      }
      receiveScoreboard(BB) {
        let TB = "scoreboard" === BB[0] ? performance.now() + BB[5] : 0;
        const dB = this.scoreboard.endsAt;
        0 !== TB && 0 !== dB && Math.abs(TB - dB) < 1e3 && (TB = dB), this.scoreboard = {
          wire: BB,
          endsAt: TB
        }, gB.h.yH(SB, this.scoreboard, !0)
      }
    }
    var QB = dB(980);
    const RB = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function aB(BB) {
      const [TB, dB] = (0, yB.useState)((() => (BB - performance.now()) / 1e3));
      return (0, yB.useEffect)((() => {
        if (0 === BB) return;
        const TB = () => {
          dB((BB - performance.now()) / 1e3)
        };
        TB();
        const VB = window.setInterval(TB, 250);
        return () => {
          window.clearInterval(VB)
        }
      }), [BB]), TB
    }

    function ZB(BB) {
      let {
        className: TB,
        point: dB
      } = BB;
      const [VB, yB, pB, lB, JB, YB] = dB;
      return (0, QB.jsxs)("div", {
        className: UB()(TB, `Owner-${yB||"None"}`, `Leader-${lB||"None"}`, {
          Contested: JB,
          Here: YB
        }),
        children: [(0, QB.jsx)("span", {
          className: "FrontlinePointLetter",
          children: VB
        }), (0, QB.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${pB}%`
          }
        })]
      })
    }
    const XB = (0, yB.memo)((function(BB) {
        let {
          points: TB,
          markers: dB
        } = BB;
        const {
          t: VB
        } = (0, rB.z)();
        return TB ? (0, QB.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: TB.map((BB => {
            const [TB, , , , , , , yB] = BB;
            return (0, QB.jsxs)("div", {
              ref: dB.bindMarker(TB),
              className: "FrontlinePointMarker",
              children: [(0, QB.jsx)(ZB, {
                className: "FrontlinePointMarkerTile",
                point: BB
              }), (0, QB.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [yB && (0, QB.jsx)("span", {
                  className: UB()("FrontlinePointMarkerHomeTurf", `Team-${yB}`),
                  children: VB("frontlineHud:homeTurf", {
                    team: VB(RB[yB])
                  })
                }), (0, QB.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, TB)
          }))
        }) : null
      })),
      WB = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      hB = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function CB(BB) {
      let {
        hud: TB,
        crosshair: dB,
        damage: VB,
        markers: yB
      } = BB;
      const pB = (0, IB.f)(cB, TB.getWire()),
        lB = (0, IB.f)(SB, TB.getScoreboard());
      return (0, QB.jsxs)(QB.Fragment, {
        children: [(0, QB.jsx)(GB, {
          damage: VB
        }), (0, QB.jsx)(XB, {
          points: "scoreboard" === lB.wire[0] ? lB.wire[6] : null,
          markers: yB
        }), (0, QB.jsx)(xB, {
          view: lB
        }), (0, QB.jsx)("div", {
          className: "FrontlineReticle",
          ref: dB.bindElement
        }), (0, QB.jsx)(FB.e, {
          children: (0, QB.jsx)(qB, {
            wire: pB
          })
        })]
      })
    }
    const GB = (0, yB.memo)((function(BB) {
        let {
          damage: TB
        } = BB;
        return (0, QB.jsxs)("div", {
          className: "FrontlineDamage",
          ref: TB.bindElement,
          children: [(0, QB.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, QB.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, QB.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      qB = (0, yB.memo)((function(BB) {
        let {
          wire: TB
        } = BB;
        const {
          t: dB
        } = (0, rB.z)();
        if ("capture" === TB[0]) {
          const [, BB, VB, yB, pB, lB, JB] = TB, YB = Math.round(yB / 100 * 24);
          return (0, QB.jsxs)("div", {
            className: UB()("FrontlinePlate", `Status-${VB}`, `Leader-${pB||"None"}`),
            children: [(0, QB.jsx)(nB, {}), (0, QB.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, QB.jsx)("span", {
                className: "FrontlineObjective",
                children: BB
              }), (0, QB.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, QB.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: dB("frontlineHud:objective", {
                    point: BB,
                    friendly: lB,
                    enemy: JB
                  })
                }), (0, QB.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: dB(WB[VB])
                })]
              }), (0, QB.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(yB).padStart(3, "0"), (0, QB.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, QB.jsx)(AB, {
              segments: 24,
              lit: YB
            })]
          })
        }
        if ("alert" === TB[0]) {
          const [, BB, VB, yB] = TB;
          return (0, QB.jsxs)("div", {
            className: UB()("FrontlinePlate", "FrontlineAlert", `Tone-${yB}`),
            children: [(0, QB.jsx)(nB, {}), (0, QB.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: dB(hB[BB])
            }), (0, QB.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: VB
            })]
          })
        }
        return null
      })),
      xB = (0, yB.memo)((function(BB) {
        let {
          view: TB
        } = BB;
        const {
          t: dB
        } = (0, rB.z)(), VB = (0, yB.useRef)(null), pB = function(BB, TB) {
          const [dB, VB] = (0, yB.useState)(!1);
          return (0, yB.useLayoutEffect)((() => {
            const TB = BB.current;
            if (!TB) return;
            const dB = document.querySelector(`.${KB.f}`),
              yB = document.querySelector(`.${KB.g}`),
              pB = () => {
                var BB;
                const pB = TB.querySelector(".FrontlineTeamTrack"),
                  lB = (0, YB.getRemInPx)(),
                  JB = TB.getBoundingClientRect().width - 2 * (null !== (BB = null === pB || void 0 === pB ? void 0 : pB.getBoundingClientRect().width) && void 0 !== BB ? BB : 0),
                  gB = window.innerWidth / 2,
                  oB = dB ? dB.getBoundingClientRect().right : 0,
                  kB = yB ? yB.getBoundingClientRect().left : window.innerWidth,
                  LB = Math.min(gB - oB, kB - gB) - KB.c - JB / 2,
                  OB = LB < 6 * lB,
                  DB = OB ? (window.innerWidth - JB) / 2 - KB.c : LB;
                TB.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(DB,14*lB)))}px`), VB(OB)
              };
            pB();
            const lB = new ResizeObserver(pB);
            for (const BB of [TB, dB, yB]) BB && lB.observe(BB);
            return window.addEventListener("resize", pB), () => {
              lB.disconnect(), window.removeEventListener("resize", pB)
            }
          }), [BB, TB]), dB
        }(VB, "scoreboard" === TB.wire[0]);
        if ("scoreboard" !== TB.wire[0]) return null;
        const [, lB, JB, gB, oB, , kB] = TB.wire, LB = "Red" === lB ? "Blue" : "Red";
        return (0, QB.jsxs)("div", {
          className: UB()("FrontlineScoreboardContainer", {
            Below: pB
          }),
          children: [(0, QB.jsxs)("div", {
            ref: VB,
            className: "FrontlineScoreboard",
            children: [(0, QB.jsx)(nB, {}), (0, QB.jsx)(jB, {
              team: lB,
              tickets: JB,
              goal: oB,
              side: "Friendly"
            }), (0, QB.jsx)("div", {
              className: "FrontlinePoints",
              children: kB.map((BB => (0, QB.jsx)(ZB, {
                className: "FrontlinePoint",
                point: BB
              }, BB[0])))
            }), (0, QB.jsx)(jB, {
              team: LB,
              tickets: gB,
              goal: oB,
              side: "Enemy"
            })]
          }), (0, QB.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, QB.jsx)(bB, {
              endsAt: TB.endsAt
            }), (0, QB.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: dB("frontlineHud:ticketGoal", {
                goal: oB
              })
            })]
          })]
        })
      }));

    function jB(BB) {
      let {
        team: TB,
        tickets: dB,
        goal: VB,
        side: yB
      } = BB;
      const {
        t: pB
      } = (0, rB.z)(), lB = String(dB).padStart(3, "0"), JB = lB.search(/[1-9]/), YB = -1 === JB ? lB : lB.slice(0, JB), gB = Math.min(20, Math.floor(dB / VB * 20));
      return (0, QB.jsxs)("div", {
        className: UB()("FrontlineTeamScore", yB, `Team-${TB}`),
        children: [(0, QB.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, QB.jsx)("span", {
            className: "Lead",
            children: YB
          }), -1 !== JB && lB.slice(JB)]
        }), (0, QB.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, QB.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: pB(RB[TB])
          }), (0, QB.jsx)(AB, {
            segments: 20,
            lit: gB
          })]
        })]
      })
    }

    function AB(BB) {
      let {
        segments: TB,
        lit: dB
      } = BB;
      return (0, QB.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: TB
        }, ((BB, TB) => (0, QB.jsx)("i", {
          className: UB()({
            Lit: TB < dB
          })
        }, TB)))
      })
    }

    function bB(BB) {
      let {
        endsAt: TB
      } = BB;
      const dB = Math.max(0, Math.ceil(aB(TB)));
      return (0, QB.jsxs)("div", {
        className: UB()("FrontlineClock", {
          Urgent: dB <= 60
        }),
        children: [Math.floor(dB / 60), ":", String(dB % 60).padStart(2, "0")]
      })
    }

    function nB() {
      return (0, QB.jsxs)(QB.Fragment, {
        children: [(0, QB.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, QB.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var eB = dB(35696),
      BT = dB(1133),
      TT = dB(37444),
      dT = dB(37488);
    class VT {
      constructor(BB) {
        var TB;
        this.hud = BB, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.ND = !1, this.qE = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.qE), null === (TB = window.visualViewport) || void 0 === TB || TB.addEventListener("resize", this.qE)
      }
      bindMarker(BB) {
        let TB = this.refs.get(BB);
        return TB || (TB = TB => {
          var dB;
          null === (dB = this.markers.get(BB)) || void 0 === dB || dB.stopObserving(), this.markers.delete(BB), TB && !this.ND && this.markers.set(BB, this.mount(TB))
        }, this.refs.set(BB, TB)), TB
      }
      frame(BB, TB) {
        this.render = BB;
        const dB = this.hud.getScoreboard().wire;
        if ("scoreboard" === dB[0] && 0 !== this.markers.size)
          for (const [VB, , , , , , yB] of dB[6]) {
            const BB = this.markers.get(VB);
            BB && yB && (BB.target ??= [0, 0, 0], BB.target[0] = yB[0], BB.target[1] = yB[1] + 2.5, BB.target[2] = yB[2], this.place(BB), this.Pp(BB, TB && Math.hypot(yB[0] - TB[0], yB[1] - TB[1], yB[2] - TB[2])))
          }
      }
      dispose() {
        var BB;
        this.ND = !0, window.removeEventListener("resize", this.qE), null === (BB = window.visualViewport) || void 0 === BB || BB.removeEventListener("resize", this.qE);
        for (const TB of this.markers.values()) TB.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(BB) {
        const {
          render: TB,
          viewport: dB
        } = this;
        if (!TB || !BB.target) return;
        const VB = (50 - TB.screenBandPct.y) / 100 * dB.height,
          yB = {
            x: BB.halfSize.width + 8,
            top: BB.halfSize.height + 8,
            bottom: BB.halfSize.height + BB.labelsBelow + VB
          },
          pB = TB.projectWorldPosToViewport(BB.target),
          lB = null !== pB && void 0 !== pB ? pB : TB.projectWorldPosToScreenPos(BB.target),
          JB = (0, dT.e)({
            x: lB.x,
            y: lB.y,
            text: pB
          }, yB, dB);
        (0, TT.b)(BB.root, Math.round(100 * JB.x) / 100, Math.round(100 * JB.y) / 100)
      }
      Pp(BB, TB) {
        if (null === TB) return void(null !== BB.metres && (BB.metres = null, BB.distance.textContent = ""));
        const dB = Date.now();
        (null === BB.metres || (0, eB.d)(TB, BB.metres, BB.metresShownAt)) && (BB.metres = Math.round(TB), BB.metresShownAt = dB, BB.distance.textContent = (0, rB.v)(BT.f.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(BB.metres)
        }))
      }
      mount(BB) {
        const TB = {
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
          dB = BB.querySelector(".FrontlinePointMarkerLabels"),
          VB = new ResizeObserver((() => {
            TB.halfSize = {
              width: Math.max(BB.offsetWidth, dB.offsetWidth) / 2,
              height: BB.offsetHeight / 2
            }, TB.labelsBelow = dB.offsetTop + dB.offsetHeight - BB.offsetHeight, this.place(TB)
          }));
        return VB.observe(BB, {
          box: "border-box"
        }), VB.observe(dB, {
          box: "border-box"
        }), TB.stopObserving = () => {
          VB.disconnect()
        }, TB
      }
    }
    var yT = dB(5804),
      pT = dB(2237);
    const lT = "frontlineRoundEndChanged";
    class JT {
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
      MD(BB) {
        const TB = "roundEnd" === BB[0] ? performance.now() + BB[5] : 0;
        this.view = {
          wire: BB,
          key: this.view.key + 1,
          endsAt: TB
        }, gB.h.yH(lT, this.view, !0)
      }
    }
    const YT = (0, yB.lazy)((() => (0, pT.e)(dB.e(203).then((() => dB(40454))), (BB => BB.FrontlineMvpLineup)))),
      gT = [4800, 4e3, 3200],
      oT = [1, 0, 2],
      kT = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      LT = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function OT(BB) {
      let {
        controller: TB
      } = BB;
      const dB = (0, IB.f)(lT, TB.getView()),
        VB = aB(dB.endsAt);
      return "roundEnd" !== dB.wire[0] || 1e3 * VB < -2e3 ? null : (0, QB.jsx)(DT, {
        wire: dB.wire,
        secondsLeft: Math.max(0, Math.ceil(VB))
      }, dB.key)
    }
    const DT = (0, yB.memo)((function(BB) {
      let {
        wire: TB,
        secondsLeft: dB
      } = BB;
      const {
        t: pB
      } = (0, rB.z)(), [, lB, JB, YB, gB, , oB, kB] = TB, LB = (0, yB.useMemo)((() => oT.filter((BB => BB < kB.length))), [kB]), OB = (0, yB.useMemo)((() => LB.map((BB => {
        const [, , , , , TB, dB] = kB[BB];
        return {
          cosmetics: VB.map(((BB, dB) => [BB, TB[dB]])),
          size: 0 === BB ? 1.15 : .85,
          heldGun: {
            name: dB,
            aimed: 0 === BB
          },
          showAfterMs: gT[BB]
        }
      }))), [kB, LB]);
      return (0, QB.jsxs)("div", {
        className: UB()("FrontlineRoundEnd", `Result-${lB}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, QB.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, QB.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, QB.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, QB.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, QB.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (DB = pB(kT[lB]), /\p{Script=Arabic}/u.test(DB) ? [DB] : (0, yT.b)(DB)).map(((BB, TB) => (0, QB.jsx)("span", {
              style: {
                "--letter": TB
              },
              children: BB
            }, TB)))]
          }), (0, QB.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [JB && "victory" === lB && (0, QB.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: pB("frontlineRoundEnd:comeback")
            }), (0, QB.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, QB.jsx)("b", {
                className: "Friendly",
                children: YB
              }), " \u2013 ", (0, QB.jsx)("b", {
                className: "Enemy",
                children: gB
              })]
            })]
          })]
        }), LB.length > 0 && (0, QB.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": LB.length
          },
          children: [(0, QB.jsx)(yB.Suspense, {
            fallback: null,
            children: (0, QB.jsx)(YT, {
              className: "FrontlineRoundEndLineup",
              players: OB
            })
          }), LB.map((BB => (0, QB.jsx)(uT, {
            mvp: kB[BB],
            place: BB
          }, BB)))]
        }), (0, QB.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: pB("frontlineRoundEnd:nextFront", {
            map: oB,
            seconds: String(dB)
          })
        })]
      });
      var DB
    }));

    function uT(BB) {
      let {
        mvp: TB,
        place: dB
      } = BB;
      const {
        t: VB
      } = (0, rB.z)(), [yB, pB, lB, JB, YB] = TB, [gB, oB] = VB(function(BB, TB) {
        return 1 === TB && "damage" !== BB ? `frontlineRoundEnd:${BB}One` : `frontlineRoundEnd:${BB}`
      }(lB, JB), {
        name: "\0",
        count: JB.toLocaleString()
      }).split("\0");
      return (0, QB.jsxs)("div", {
        className: UB()("FrontlineMvpCard", `Place-${dB+1}`, `Team-${pB}`),
        style: {
          "--revealMs": `${gT[dB]}ms`
        },
        children: [(0, QB.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, QB.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, QB.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: VB(LT[dB])
        }), (0, QB.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [gB, (0, QB.jsx)("span", {
            className: "FrontlineMvpName",
            children: yB
          }), oB]
        }), (0, QB.jsx)("div", {
          className: "FrontlineMvpKit",
          children: YB
        })]
      })
    }
    const HT = function(BB, TB, dB, VB) {
      let {
        localPlayerId: lB
      } = VB;
      const JB = new PB,
        YB = new JT;
      let gB = null,
        oB = null,
        kB = null,
        LB = null,
        OB = null,
        DB = [!1, !1];
      const uB = () => {
        var BB, TB;
        const [dB, VB] = DB;
        null === (BB = oB) || void 0 === BB || BB.hN(!dB), null === (TB = kB) || void 0 === TB || TB.hN(!VB)
      };
      return {
        onCreate: BB => {
          gB = BB, oB = new mB(BB, lB), kB = new fB(BB, lB), LB = new VT(JB), uB(), OB = (0, pB.r)((0, yB.createElement)(yB.Fragment, null, (0, yB.createElement)(CB, {
            hud: JB,
            crosshair: oB,
            damage: kB,
            markers: LB
          }), (0, yB.createElement)(OT, {
            controller: YB
          })))
        },
        onClose: () => {
          var BB, TB, dB, VB;
          null === (BB = OB) || void 0 === BB || BB(), null === (TB = oB) || void 0 === TB || TB.dispose(), oB = null, null === (dB = kB) || void 0 === dB || dB.dispose(), kB = null, null === (VB = LB) || void 0 === VB || VB.dispose(), LB = null, gB = null
        },
        onAfterRender: (BB, TB) => {
          var dB, VB, yB, pB;
          null === (dB = oB) || void 0 === dB || dB.frame(BB, TB.tanHalfFovY), null === (VB = kB) || void 0 === VB || VB.frame(TB.cameraHeading), null === (yB = LB) || void 0 === yB || yB.frame(TB, null !== (pB = gB) && void 0 !== pB && pB.checkValid(lB) ? gB.Dv(lB) : null)
        },
        onReceivedMessageFromServer: (BB, TB) => {
          "frontlineHud" === BB ? JB.MD(TB) : "frontlineScoreboard" === BB ? JB.receiveScoreboard(TB) : "frontlineRoundEnd" === BB ? YB.MD(TB) : "frontlinePrefs" === BB && (DB = TB, uB())
        }
      }
    }
  },
  5804: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB
    });
    const VB = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function yB(BB) {
      return null === VB ? Array.from(BB) : Array.from(VB.segment(BB), (BB => {
        let {
          segment: TB
        } = BB;
        return TB
      }))
    }
  },
  37444: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB,
      c: () => pB
    });
    const VB = new WeakMap;

    function yB(BB) {
      let TB = VB.get(BB);
      return TB || (TB = {
        hidden: BB.hidden,
        x: NaN,
        y: NaN
      }, VB.set(BB, TB)), TB
    }

    function pB(BB, TB) {
      const dB = yB(BB);
      dB.hidden !== TB && (dB.hidden = TB, BB.hidden = TB)
    }

    function lB(BB, TB, dB) {
      const VB = yB(BB);
      VB.x === TB && VB.y === dB || (VB.x = TB, VB.y = dB, BB.style.translate = `${TB}vw ${dB}vh`)
    }
  },
  36e3: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    const VB = {
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