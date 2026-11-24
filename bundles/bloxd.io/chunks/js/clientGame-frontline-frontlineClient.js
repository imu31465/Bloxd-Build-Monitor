export const id = 17;
export const ids = [17];
export const modules = {
  36613: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => FB,
      h: () => NB,
      l: () => zB,
      n: () => hB
    });
    var TB = ZB(34184),
      JB = ZB(36619),
      oB = ZB(36625),
      GB = ZB(8840),
      vB = ZB(1507),
      kB = ZB(63),
      cB = ZB(82),
      nB = ZB(1153);

    function hB() {
      var BB;
      return (0, vB.h)(JB.d, (0, JB.q)()), (0, nB.jsx)(nB.Fragment, {
        children: null === (BB = (0, JB.q)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function zB(BB) {
      var IB;
      let {
        show: ZB
      } = BB;
      (0, vB.h)(JB.d, (0, JB.q)());
      const cB = null === (IB = (0, JB.q)()) || void 0 === IB ? void 0 : IB.menu;
      return (0, kB.useEffect)((() => {
        var BB;
        ZB || (null === cB || void 0 === cB || null === (BB = cB.onClose) || void 0 === BB || BB.call(cB), (0, oB.p)())
      }), [ZB, cB]), (0, kB.useEffect)((() => ZB ? (0, GB.g)(oB.t, oB.c) : void 0), [ZB]), (0, nB.jsx)(TB.e, {
        showing: ZB,
        globallyUniqueKey: "clientGameMenu",
        children: null === cB || void 0 === cB ? void 0 : cB.content
      })
    }

    function FB(BB) {
      let {
        placement: IB = "bottom"
      } = BB;
      return (0, nB.jsx)("div", {
        id: `clientGameHud-${IB}`,
        style: {
          display: "contents"
        }
      })
    }

    function NB(BB) {
      let {
        children: IB,
        placement: ZB = "bottom"
      } = BB;
      const [TB, JB] = (0, kB.useState)(null);
      return (0, kB.useEffect)((() => {
        JB(document.getElementById(`clientGameHud-${ZB}`))
      }), [ZB]), TB ? (0, cB.createPortal)(IB, TB) : null
    }
  },
  34184: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB
    });
    var TB = ZB(4721),
      JB = ZB(4728);

    function oB(BB) {
      let {
        children: IB,
        showing: ZB,
        globallyUniqueKey: oB,
        alwaysMountChildren: GB = !1,
        doGameplayStartStopOnShow: vB = !0,
        keepsMovement: kB = !1
      } = BB;
      return (0, JB.e)(!0, ZB, oB, kB), (0, TB.e)(vB, ZB), ZB || GB ? IB : null
    }
  },
  36708: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      f: () => GB,
      i: () => vB,
      k: () => kB
    });
    var TB = ZB(63),
      JB = ZB(3272);
    const oB = 8,
      GB = "InGameHeaderContainer",
      vB = "TopRightElements";

    function kB(BB) {
      const [IB] = (0, JB.b)(), [ZB, kB] = (0, TB.useState)(!1);
      return (0, TB.useLayoutEffect)((() => {
        if (!BB) return;
        const IB = document.querySelector(`.${GB}`),
          ZB = document.querySelector(`.${vB}`),
          TB = () => {
            const TB = BB.getBoundingClientRect(),
              JB = IB ? IB.getBoundingClientRect().right : 0,
              GB = ZB ? ZB.getBoundingClientRect().left : window.innerWidth,
              vB = TB.left < JB + oB,
              cB = TB.right > GB - oB;
            kB(vB || cB)
          };
        TB();
        const JB = new ResizeObserver(TB);
        return JB.observe(BB), IB && JB.observe(IB), ZB && JB.observe(ZB), () => {
          JB.disconnect()
        }
      }), [BB, IB]), ZB
    }
  },
  36706: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB
    });
    const TB = [{
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

    function JB(BB, IB, ZB) {
      const JB = Math.abs(BB - IB),
        oB = Date.now() - ZB;
      for (const GB of TB)
        if (BB < GB.maxDist) return JB >= GB.hardUpdateDist || oB > GB.timeBetweenSoftChecks && JB >= GB.softUpdateDist;
      return !1
    }
  },
  8840: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      g: () => JB
    });
    let TB = null;
    const JB = function(BB) {
        const IB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return TB = IB, () => {
          TB === IB && (TB = null)
        }
      },
      oB = () => {
        var BB;
        return null !== (BB = TB) && void 0 !== BB && BB.canCycle() ? TB.cycle : null
      }
  },
  38578: (BB, IB, ZB) => {
    function TB(BB, IB, ZB) {
      var TB;
      const {
        width: JB,
        height: oB
      } = ZB, GB = null !== (TB = BB.text) && void 0 !== TB ? TB : BB, vB = (GB.x / 100 - .5) * JB, kB = (GB.y / 100 - .5) * oB, cB = JB / 2 - IB.x;
      if (null !== BB.text && Math.abs(vB) <= cB && kB >= IB.top - oB / 2 && kB <= oB / 2 - IB.bottom) return {
        x: GB.x,
        y: GB.y
      };
      const nB = Math.min(0 === vB ? 1 / 0 : cB / Math.abs(vB), kB > 0 ? (oB / 2 - IB.bottom) / kB : kB < 0 ? (IB.top - oB / 2) / kB : 1 / 0);
      return !Number.isFinite(nB) || nB < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + vB * nB / JB * 100,
        y: 50 + kB * nB / oB * 100
      }
    }
    ZB.d(IB, {
      e: () => TB
    })
  },
  36625: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      c: () => gB,
      g: () => qB,
      h: () => vB,
      l: () => zB,
      p: () => yB,
      q: () => hB,
      s: () => WB,
      t: () => NB,
      w: () => UB
    });
    var TB = ZB(20),
      JB = ZB(24);
    const oB = "clientGameInventoryButtonsChanged",
      GB = new Map;

    function vB() {
      return [...GB.values()].sort(((BB, IB) => {
        var ZB, TB;
        return (null !== (ZB = BB.order) && void 0 !== ZB ? ZB : 0) - (null !== (TB = IB.order) && void 0 !== TB ? TB : 0)
      }))
    }
    let kB = null;

    function cB(BB) {
      kB = BB
    }
    let nB = !1;

    function hB(BB) {
      nB = !0;
      try {
        BB.onClick()
      } finally {
        nB = !1
      }
      BB.panel && "clientGame" === TB.d.get("openInGameMenuName") && cB(BB.id)
    }

    function zB() {
      return nB
    }

    function FB() {
      return vB().filter((BB => BB.panel && !BB.disabled))
    }

    function NB(BB) {
      const IB = FB(),
        ZB = IB.findIndex((BB => BB.id === kB));
      return !(ZB < 0 || IB.length < 2) && (hB(IB[(ZB + BB + IB.length) % IB.length]), !0)
    }

    function gB() {
      return null !== kB && FB().length > 1
    }

    function qB() {
      cB(null)
    }

    function yB() {
      "inventory" !== TB.d.get("openInGameMenuName") && cB(null)
    }

    function UB() {
      const BB = kB;
      return cB(null), BB
    }

    function WB(BB) {
      return GB.set(BB.id, BB), JB.l.Gq(oB, vB(), !0), () => {
        GB.get(BB.id) === BB && (GB.delete(BB.id), JB.l.Gq(oB, vB()))
      }
    }
  },
  36619: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      f: () => qB,
      i: () => yB,
      m: () => zB,
      q: () => cB,
      t: () => gB,
      v: () => FB,
      x: () => nB
    });
    var TB = ZB(20),
      JB = ZB(24),
      oB = ZB(1353),
      GB = ZB(36625);
    const vB = "clientGameUiChanged";
    let kB = null;

    function cB() {
      return kB
    }

    function nB(BB, IB) {
      const ZB = {
        content: BB,
        menu: IB
      };
      return kB = ZB, JB.l.Gq(vB, kB, !0), () => {
        kB === ZB && (kB = null, NB = !1, qB(), JB.l.Gq(vB, null))
      }
    }
    let hB = null;

    function zB() {
      return hB
    }

    function FB(BB) {
      return hB = BB, () => {
        hB === BB && (hB = null)
      }
    }
    let NB = !1;

    function gB() {
      const BB = TB.d.get("openInGameMenuName");
      "clientGame" !== BB && (NB = "inventory" === BB), (0, GB.l)() || (0, GB.g)(), (0, oB.t)(oB.e), TB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function qB() {
      UB(!1)
    }

    function yB() {
      UB(NB)
    }

    function UB(BB) {
      "clientGame" === TB.d.get("openInGameMenuName") && TB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, GB.g)(), NB = !1
    }
  },
  39495: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => qI
    });
    const TB = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var JB = ZB(63),
      oB = ZB(36619),
      GB = ZB(37060),
      vB = ZB(36636),
      kB = ZB(1805),
      cB = ZB(24);
    const nB = {
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
    const hB = 32;

    function zB(BB, IB, ZB, TB) {
      return {
        tag: "line",
        attrs: {
          x1: BB,
          y1: IB,
          x2: ZB,
          y2: TB,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function FB(BB) {
      return {
        tag: "circle",
        attrs: {
          cx: hB,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hB,
          r: BB,
          class: "Fill"
        }
      }
    }

    function NB(BB, IB) {
      return {
        tag: "path",
        attrs: {
          d: BB,
          "stroke-width": IB
        }
      }
    }

    function gB(BB, IB, ZB) {
      return {
        tag: "circle",
        attrs: {
          cx: hB,
          cy: hB,
          r: BB,
          "stroke-width": IB,
          class: ZB
        }
      }
    }

    function qB(BB, IB, ZB) {
      return {
        tag: "text",
        attrs: {
          x: BB,
          y: IB,
          class: "Fill Label"
        },
        text: ZB
      }
    }
    const yB = {
      pistol: BB => [zB(hB, hB - BB - 5, hB, hB - BB), zB(hB - BB - 5, hB, hB - BB, hB), zB(hB + BB, hB, hB + BB + 5, hB), FB(1.4)],
      rifle: BB => [zB(hB, hB - BB - 8, hB, hB - BB), zB(hB, hB + BB, hB, hB + BB + 8), zB(hB - BB - 8, hB, hB - BB, hB), zB(hB + BB, hB, hB + BB + 8, hB), FB(1)],
      smg: BB => {
        const IB = Math.PI / 2,
          ZB = [];
        for (let GB = 0; GB < 4; GB++) ZB.push((JB = GB * IB + .35, oB = (GB + 1) * IB - .35, NB(`M${hB+(TB=6+BB)*Math.cos(JB)} ${hB+TB*Math.sin(JB)} A${TB} ${TB} 0 0 1 ${hB+TB*Math.cos(oB)} ${hB+TB*Math.sin(oB)}`, 2)));
        var TB, JB, oB;
        return [...ZB, FB(1.4)]
      },
      shotgun: BB => [gB(BB, 3, "Ring Outline"), gB(BB, 1.5, "Ring")],
      marksman: BB => [NB(`M${26-BB/2} ${39+BB/2} L32 33 L${38+BB/2} ${39+BB/2}`, 2), zB(14 - BB, hB, 24 - BB, hB, 1.5), zB(40 + BB, hB, 50 + BB, hB, 1.5), zB(14 - BB, 30, 14 - BB, 34, 1.5), zB(50 + BB, 30, 50 + BB, 34, 1.5)],
      machineGun: BB => {
        const IB = 10 + BB,
          ZB = [];
        for (const [TB, JB] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) ZB.push(NB(`M${hB+TB*IB} ${hB+JB*(IB-5)} L${hB+TB*IB} ${hB+JB*IB} L${hB+TB*(IB-5)} ${hB+JB*IB}`, 2));
        return [...ZB, zB(hB, 28, hB, 36, 1.5), zB(28, hB, 36, hB, 1.5)]
      },
      launcher: () => [zB(14, 30, 50, 30, 1.5), zB(hB, 24, hB, 52, 1.5), zB(28, 38, 36, 38, 1.5), zB(29, 44, 35, 44, 1.5), zB(30, 50, 34, 50, 1.5), qB(38, 40, "100"), qB(37, 46, "200"), FB(1.4, 30)],
      melee: () => [NB("M32 26 L38 32 L32 38 L26 32 Z", 1.5), FB(1.2)],
      throwable: () => [FB(1.6)]
    };

    function UB(BB) {
      let {
        tag: IB,
        attrs: ZB,
        text: TB
      } = BB, JB = `<${IB}`;
      for (const [oB, GB] of Object.entries(ZB)) JB += ` ${oB}="${GB}"`;
      return void 0 === TB ? `${JB}/>` : `${JB}>${TB}</${IB}>`
    }
    class WB {
      constructor(BB, IB) {
        this.api = BB, this.localPlayerId = IB, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = BB => {
          this.element = BB, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, BB && !this.enabled && (BB.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, kB.getRemInPx)()))
        }, this.tokens = [cB.l.subscribe("aimingOverlay", (BB => {
          this.sniperOverlay = "sniper" === BB
        })), cB.l.subscribe("mouseState", (BB => {
          let {
            isDown: IB
          } = BB;
          this.mouseDown = IB
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      qY(BB) {
        BB !== this.enabled && (this.enabled = BB, this.drawnVisible = null, BB || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(BB, IB) {
        var ZB, TB;
        if (!this.enabled) return;
        const {
          api: JB
        } = this, oB = JB.isAlive(this.localPlayerId) && null !== (ZB = null === (TB = JB.FZB(this.localPlayerId)) || void 0 === TB ? void 0 : TB.name) && void 0 !== ZB ? ZB : null, GB = (vB = oB) && nB[vB] || null;
        var vB;
        if (this.setOwnsCrosshair(null !== GB), !this.element) return;
        const kB = JB.getHeldGunInaccuracy(),
          cB = null !== kB,
          hB = null !== GB && !this.sniperOverlay && JB.isCrosshairShown();
        if (hB !== this.drawnVisible && (this.drawnVisible = hB, this.element.style.display = hB ? "block" : "none"), !hB) return;
        const zB = cB ? function(BB) {
            return "launcher" === BB || "melee" === BB || "throwable" === BB ? "none" : "shotgun" === BB ? "cone" : "offset"
          }(GB) : "none",
          FB = null !== kB && void 0 !== kB ? kB : 0;
        "cone" === zB ? this.drawCone(GB, this.coneRadiusVh(FB, IB) * this.gapPerVh, BB) : (this.coneDrawn = !1, this.draw(GB, "none" === zB ? 2 : this.offsetGap(FB)));
        const NB = !cB && this.mouseDown;
        NB !== this.drawnPressed && (this.drawnPressed = NB, this.element.classList.toggle("Pressed", NB))
      }
      dispose() {
        for (const BB of this.tokens) cB.l.unsubscribe(BB);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(BB, IB) {
        var ZB, TB;
        BB !== this.drawnFamily ? (this.drawnFamily = BB, this.drawnGap = IB, this.element.innerHTML = function(BB, IB) {
          return `<svg viewBox="0 0 64 64">${yB[BB](IB).map(UB).join("")}</svg>`
        }(BB, IB), this.shapes = Array.from(null !== (ZB = null === (TB = this.element.firstElementChild) || void 0 === TB ? void 0 : TB.children) && void 0 !== ZB ? ZB : [])) : IB !== this.drawnGap && (this.drawnGap = IB, function(BB, IB, ZB) {
          const TB = yB[IB](ZB);
          for (let JB = 0; JB < TB.length; JB++)
            for (const [IB, ZB] of Object.entries(TB[JB].attrs)) {
              const TB = String(ZB);
              BB[JB].getAttribute(IB) !== TB && BB[JB].setAttribute(IB, TB)
            }
        }(this.shapes, BB, IB))
      }
      drawCone(BB, IB, ZB) {
        BB === this.drawnFamily && this.coneDrawn ? this.shownRadius += (IB - this.shownRadius) * (1 - Math.exp(-ZB / 80)) : this.shownRadius = IB, this.coneDrawn = !0, this.draw(BB, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(BB, IB) {
        if (!(IB > 0)) return 1;
        const ZB = BB * GB.e / 2;
        return Math.max(50 * Math.tan(ZB) / IB, 1)
      }
      offsetGap(BB) {
        const IB = 2 + ((0, vB.f)(BB) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * IB) / 2)
      }
      setOwnsCrosshair(BB) {
        BB !== this.ownsCrosshair && (this.ownsCrosshair = BB, document.body.classList.toggle("FrontlineCustomCrosshair", BB))
      }
    }
    const dB = "FrontlineCustomDamage",
      CB = .45,
      QB = .2;
    class sB {
      constructor(BB, IB) {
        this.api = BB, this.localPlayerId = IB, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.jB = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = BB => {
          var IB, ZB;
          this.clearHits(), this.root = BB, this.lowLayer = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".FrontlineDamageLow")) && void 0 !== IB ? IB : null, this.arcLayer = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".FrontlineDamageArcs")) && void 0 !== ZB ? ZB : null, this.showRoot(), this.drawLow()
        }, this.token = cB.l.subscribe("damagedByOtherPlayer", (BB => {
          let {
            direction: IB,
            aB: ZB
          } = BB;
          this.onHurt(IB, ZB)
        })), this.syncHealth(), document.body.classList.add(dB)
      }
      qY(BB) {
        BB !== this.enabled && (this.enabled = BB, document.body.classList.toggle(dB, BB), BB || this.clearHits(), this.showRoot())
      }
      frame(BB) {
        this.syncHealth(), this.cameraHeading = BB;
        for (const IB of this.arcs) this.drawArcAngle(IB)
      }
      dispose() {
        cB.l.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(dB)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const BB = this.api.getClientOption(this.localPlayerId, "_health"),
          IB = this.api.getClientOption(this.localPlayerId, "_shield"),
          ZB = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(BB, this.readHealth) && Object.is(IB, this.readShield) && Object.is(ZB, this.readMaxHealth)) return;
        if (this.readHealth = BB, this.readShield = IB, this.readMaxHealth = ZB, null === BB || void 0 === BB || !ZB) return this.lastHealthPool = null, this.maxHealth = null, this.jB = 1, this.dead = !1, void this.drawLow();
        const TB = BB + (null !== IB && void 0 !== IB ? IB : 0);
        if (null !== this.lastHealthPool && TB < this.lastHealthPool) {
          const BB = performance.now(),
            IB = (this.lastHealthPool - TB) / ZB;
          this.lastDrop = BB - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + IB,
            at: this.lastDrop.at
          } : {
            frac: IB,
            at: BB
          }
        }
        this.dead = BB <= 0, this.dead && this.clearHits(), this.lastHealthPool = TB, this.maxHealth = ZB, this.jB = BB > 0 ? BB / ZB : 1, this.drawLow()
      }
      onHurt(BB, IB) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const ZB = Math.min(1, this.takeDamageFrac(IB) / .3);
        null !== BB && this.showArc(BB, ZB), this.flashEdge(null === BB ? null : BB - this.cameraHeading, .4 + .6 * ZB)
      }
      takeDamageFrac(BB) {
        if (void 0 !== BB && this.maxHealth) return BB / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: IB
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, IB
      }
      drawLow() {
        if (!this.lowLayer) return;
        const BB = OB((CB - this.jB) / .25),
          IB = OB((QB - this.jB) / .15000000000000002),
          ZB = this.jB < CB;
        this.lowLayer.classList.toggle("Active", ZB), this.lowLayer.classList.toggle("Critical", this.jB < QB), this.lowLayer.style.opacity = String(ZB ? .55 + .3 * BB + .15 * IB : 0)
      }
      showArc(BB, IB) {
        var ZB, TB;
        if (!this.arcLayer) return;
        let JB = this.arcs.find((IB => wB(IB.direction, BB) < .6));
        if (!JB) {
          const IB = document.createElement("div");
          IB.className = "FrontlineDamageArc", IB.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(IB), JB = {
            element: IB,
            direction: BB,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(JB)
        }
        JB.direction = BB, this.drawArcAngle(JB);
        const oB = JB.fade ? Number(getComputedStyle(JB.element).opacity) : 0;
        null === (ZB = JB.fade) || void 0 === ZB || ZB.cancel(), null === (TB = JB.pop) || void 0 === TB || TB.cancel(), JB.element.style.opacity = "1";
        const GB = JB.element.animate([{
          opacity: oB
        }, {
          opacity: 1
        }], 144);
        JB.fade = GB, JB.pop = JB.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * IB
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const vB = JB;
        GB.onfinish = () => {
          if (vB.fade !== GB) return;
          const BB = vB.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          BB.startTime = GB.startTime, vB.fade = BB, BB.onfinish = () => {
            vB.fade === BB && (vB.element.remove(), YB(this.arcs, vB))
          }
        }
      }
      drawArcAngle(BB) {
        const IB = BB.direction - this.cameraHeading;
        (null === BB.drawnAngle || Math.abs(IB - BB.drawnAngle) > .005) && (BB.drawnAngle = IB, BB.element.style.rotate = `${IB}rad`)
      }
      flashEdge(BB, IB) {
        var ZB, TB, JB;
        if (!this.root) return;
        let oB = this.flashes.find((IB => null === IB.angle || null === BB ? IB.angle === BB : wB(IB.angle, BB) < .5));
        if (!oB) {
          const IB = document.createElement("div");
          IB.className = "FrontlineDamageFlash";
          const ZB = IB.appendChild(document.createElement("div"));
          ZB.className = "FrontlineDamageFlashGlow", this.root.insertBefore(IB, this.arcLayer), oB = {
            element: IB,
            glow: ZB,
            angle: BB,
            level: 0,
            animation: null
          }, this.flashes.push(oB)
        }
        const GB = null === (ZB = oB.animation) || void 0 === ZB || null === (TB = ZB.effect) || void 0 === TB ? void 0 : TB.getComputedTiming().progress,
          vB = null === GB || void 0 === GB ? 0 : oB.level * (1 - GB);
        oB.level = Math.min(1, Math.max(IB, vB + .6 * IB)), oB.angle = BB;
        const {
          x: kB,
          y: cB,
          rx: nB,
          ry: hB
        } = function(BB, IB) {
          const ZB = window.innerWidth,
            TB = window.innerHeight;
          if (null === BB) return {
            x: ZB / 2,
            y: TB / 2,
            rx: 0,
            ry: 0
          };
          const JB = Math.sin(BB),
            oB = -Math.cos(BB),
            GB = ZB / 2 / Math.max(1e-6, Math.abs(JB)),
            vB = TB / 2 / Math.max(1e-6, Math.abs(oB)),
            kB = Math.min(GB, vB),
            cB = Math.round(ZB / 2 + JB * kB),
            nB = Math.round(TB / 2 + oB * kB),
            hB = TB / 100 * (.85 + .25 * IB),
            zB = GB <= vB,
            FB = Math.round((zB ? 30 : 74) * hB),
            NB = Math.round((zB ? 58 : 26) * hB);
          return {
            x: cB,
            y: nB,
            rx: FB,
            ry: NB
          }
        }(BB, oB.level), {
          style: zB
        } = oB.glow;
        oB.glow.classList.toggle("Everywhere", null === BB), zB.setProperty("--glowX", `${kB}px`), zB.setProperty("--glowY", `${cB}px`), zB.setProperty("--glowRx", `${nB}px`), zB.setProperty("--glowRy", `${hB}px`), oB.element.style.transformOrigin = `${kB}px ${cB}px`, null === (JB = oB.animation) || void 0 === JB || JB.cancel();
        const FB = oB.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: oB.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * oB.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * oB.level
        });
        oB.animation = FB;
        const NB = oB;
        FB.onfinish = () => {
          NB.animation === FB && (NB.element.remove(), YB(this.flashes, NB))
        }
      }
      clearHits() {
        for (const TB of this.arcs) {
          var BB, IB;
          null === (BB = TB.fade) || void 0 === BB || BB.cancel(), TB.fade = null, null === (IB = TB.pop) || void 0 === IB || IB.cancel(), TB.element.remove()
        }
        this.arcs.length = 0;
        for (const TB of this.flashes) {
          var ZB;
          null === (ZB = TB.animation) || void 0 === ZB || ZB.cancel(), TB.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function wB(BB, IB) {
      return Math.abs(Math.atan2(Math.sin(BB - IB), Math.cos(BB - IB)))
    }

    function OB(BB) {
      return Math.max(0, Math.min(1, BB))
    }

    function YB(BB, IB) {
      const ZB = BB.indexOf(IB); - 1 !== ZB && BB.splice(ZB, 1)
    }
    var iB = ZB(1091),
      pB = ZB.n(iB),
      aB = ZB(36613),
      HB = ZB(36708),
      MB = ZB(1248),
      jB = ZB(1507);
    const PB = "frontlineHudChanged",
      RB = "frontlineScoreboardChanged";
    class rB {
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
      sN(BB) {
        this.wire = BB, cB.l.Gq(PB, BB, !0)
      }
      receiveScoreboard(BB) {
        let IB = "scoreboard" === BB[0] ? performance.now() + BB[5] : 0;
        const ZB = this.scoreboard.endsAt;
        0 !== IB && 0 !== ZB && Math.abs(IB - ZB) < 1e3 && (IB = ZB), this.scoreboard = {
          wire: BB,
          endsAt: IB
        }, cB.l.Gq(RB, this.scoreboard, !0)
      }
    }
    var mB = ZB(1153);
    const XB = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function LB(BB) {
      const [IB, ZB] = (0, JB.useState)((() => (BB - performance.now()) / 1e3));
      return (0, JB.useEffect)((() => {
        if (0 === BB) return;
        const IB = () => {
          ZB((BB - performance.now()) / 1e3)
        };
        IB();
        const TB = window.setInterval(IB, 250);
        return () => {
          window.clearInterval(TB)
        }
      }), [BB]), IB
    }

    function eB(BB) {
      let {
        className: IB,
        point: ZB
      } = BB;
      const [TB, JB, oB, GB, vB, kB] = ZB;
      return (0, mB.jsxs)("div", {
        className: pB()(IB, `Owner-${JB||"None"}`, `Leader-${GB||"None"}`, {
          Contested: vB,
          Here: kB
        }),
        children: [(0, mB.jsx)("span", {
          className: "FrontlinePointLetter",
          children: TB
        }), (0, mB.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${oB}%`
          }
        })]
      })
    }
    const uB = (0, JB.memo)((function(BB) {
        let {
          points: IB,
          markers: ZB
        } = BB;
        const {
          t: TB
        } = (0, MB.G)();
        return IB ? (0, mB.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: IB.map((BB => {
            const [IB, , , , , , , JB] = BB;
            return (0, mB.jsxs)("div", {
              ref: ZB.bindMarker(IB),
              className: "FrontlinePointMarker",
              children: [(0, mB.jsx)(eB, {
                className: "FrontlinePointMarkerTile",
                point: BB
              }), (0, mB.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [JB && (0, mB.jsx)("span", {
                  className: pB()("FrontlinePointMarkerHomeTurf", `Team-${JB}`),
                  children: TB("frontlineHud:homeTurf", {
                    team: TB(XB[JB])
                  })
                }), (0, mB.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, IB)
          }))
        }) : null
      })),
      fB = {
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

    function AB(BB) {
      let {
        hud: IB,
        crosshair: ZB,
        damage: TB,
        markers: JB
      } = BB;
      const oB = (0, jB.h)(PB, IB.getWire()),
        GB = (0, jB.h)(RB, IB.getScoreboard());
      return (0, mB.jsxs)(mB.Fragment, {
        children: [(0, mB.jsx)(tB, {
          damage: TB
        }), (0, mB.jsx)(uB, {
          points: "scoreboard" === GB.wire[0] ? GB.wire[6] : null,
          markers: JB
        }), (0, mB.jsx)(xB, {
          view: GB
        }), (0, mB.jsx)("div", {
          className: "FrontlineReticle",
          ref: ZB.bindElement
        }), (0, mB.jsx)(aB.h, {
          children: (0, mB.jsx)(bB, {
            wire: oB
          })
        })]
      })
    }
    const tB = (0, JB.memo)((function(BB) {
        let {
          damage: IB
        } = BB;
        return (0, mB.jsxs)("div", {
          className: "FrontlineDamage",
          ref: IB.bindElement,
          children: [(0, mB.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, mB.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, mB.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      bB = (0, JB.memo)((function(BB) {
        let {
          wire: IB
        } = BB;
        const {
          t: ZB
        } = (0, MB.G)();
        if ("capture" === IB[0]) {
          const [, BB, TB, JB, oB, GB, vB] = IB, kB = Math.round(JB / 100 * 24);
          return (0, mB.jsxs)("div", {
            className: pB()("FrontlinePlate", `Status-${TB}`, `Leader-${oB||"None"}`),
            children: [(0, mB.jsx)(VB, {}), (0, mB.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, mB.jsx)("span", {
                className: "FrontlineObjective",
                children: BB
              }), (0, mB.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, mB.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: ZB("frontlineHud:objective", {
                    point: BB,
                    friendly: GB,
                    enemy: vB
                  })
                }), (0, mB.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: ZB(fB[TB])
                })]
              }), (0, mB.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(JB).padStart(3, "0"), (0, mB.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, mB.jsx)(DB, {
              segments: 24,
              lit: kB
            })]
          })
        }
        if ("alert" === IB[0]) {
          const [, BB, TB, JB] = IB;
          return (0, mB.jsxs)("div", {
            className: pB()("FrontlinePlate", "FrontlineAlert", `Tone-${JB}`),
            children: [(0, mB.jsx)(VB, {}), (0, mB.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: ZB(lB[BB])
            }), (0, mB.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: TB
            })]
          })
        }
        return null
      })),
      xB = (0, JB.memo)((function(BB) {
        let {
          view: IB
        } = BB;
        const {
          t: ZB
        } = (0, MB.G)(), TB = (0, JB.useRef)(null), oB = function(BB, IB) {
          const [ZB, TB] = (0, JB.useState)(!1);
          return (0, JB.useLayoutEffect)((() => {
            const IB = BB.current;
            if (!IB) return;
            const ZB = document.querySelector(`.${HB.f}`),
              JB = document.querySelector(`.${HB.i}`),
              oB = () => {
                var BB;
                const oB = IB.querySelector(".FrontlineTeamTrack"),
                  GB = (0, kB.getRemInPx)(),
                  vB = IB.getBoundingClientRect().width - 2 * (null !== (BB = null === oB || void 0 === oB ? void 0 : oB.getBoundingClientRect().width) && void 0 !== BB ? BB : 0),
                  cB = window.innerWidth / 2,
                  nB = ZB ? ZB.getBoundingClientRect().right : 0,
                  hB = JB ? JB.getBoundingClientRect().left : window.innerWidth,
                  zB = Math.min(cB - nB, hB - cB) - HB.d - vB / 2,
                  FB = zB < 6 * GB,
                  NB = FB ? (window.innerWidth - vB) / 2 - HB.d : zB;
                IB.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(NB,14*GB)))}px`), TB(FB)
              };
            oB();
            const GB = new ResizeObserver(oB);
            for (const BB of [IB, ZB, JB]) BB && GB.observe(BB);
            return window.addEventListener("resize", oB), () => {
              GB.disconnect(), window.removeEventListener("resize", oB)
            }
          }), [BB, IB]), ZB
        }(TB, "scoreboard" === IB.wire[0]);
        if ("scoreboard" !== IB.wire[0]) return null;
        const [, GB, vB, cB, nB, , hB] = IB.wire, zB = "Red" === GB ? "Blue" : "Red";
        return (0, mB.jsxs)("div", {
          className: pB()("FrontlineScoreboardContainer", {
            Below: oB
          }),
          children: [(0, mB.jsxs)("div", {
            ref: TB,
            className: "FrontlineScoreboard",
            children: [(0, mB.jsx)(VB, {}), (0, mB.jsx)(EB, {
              team: GB,
              tickets: vB,
              goal: nB,
              side: "Friendly"
            }), (0, mB.jsx)("div", {
              className: "FrontlinePoints",
              children: hB.map((BB => (0, mB.jsx)(eB, {
                className: "FrontlinePoint",
                point: BB
              }, BB[0])))
            }), (0, mB.jsx)(EB, {
              team: zB,
              tickets: cB,
              goal: nB,
              side: "Enemy"
            })]
          }), (0, mB.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, mB.jsx)(KB, {
              endsAt: IB.endsAt
            }), (0, mB.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: ZB("frontlineHud:ticketGoal", {
                goal: nB
              })
            })]
          })]
        })
      }));

    function EB(BB) {
      let {
        team: IB,
        tickets: ZB,
        goal: TB,
        side: JB
      } = BB;
      const {
        t: oB
      } = (0, MB.G)(), GB = String(ZB).padStart(3, "0"), vB = GB.search(/[1-9]/), kB = -1 === vB ? GB : GB.slice(0, vB), cB = Math.min(20, Math.floor(ZB / TB * 20));
      return (0, mB.jsxs)("div", {
        className: pB()("FrontlineTeamScore", JB, `Team-${IB}`),
        children: [(0, mB.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, mB.jsx)("span", {
            className: "Lead",
            children: kB
          }), -1 !== vB && GB.slice(vB)]
        }), (0, mB.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, mB.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: oB(XB[IB])
          }), (0, mB.jsx)(DB, {
            segments: 20,
            lit: cB
          })]
        })]
      })
    }

    function DB(BB) {
      let {
        segments: IB,
        lit: ZB
      } = BB;
      return (0, mB.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: IB
        }, ((BB, IB) => (0, mB.jsx)("i", {
          className: pB()({
            Lit: IB < ZB
          })
        }, IB)))
      })
    }

    function KB(BB) {
      let {
        endsAt: IB
      } = BB;
      const ZB = Math.max(0, Math.ceil(LB(IB)));
      return (0, mB.jsxs)("div", {
        className: pB()("FrontlineClock", {
          Urgent: ZB <= 60
        }),
        children: [Math.floor(ZB / 60), ":", String(ZB % 60).padStart(2, "0")]
      })
    }

    function VB() {
      return (0, mB.jsxs)(mB.Fragment, {
        children: [(0, mB.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, mB.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var SB = ZB(36706),
      BI = ZB(1310),
      II = ZB(38532),
      ZI = ZB(38578);
    class TI {
      constructor(BB) {
        var IB;
        this.hud = BB, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.WN = !1, this.kU = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.kU), null === (IB = window.visualViewport) || void 0 === IB || IB.addEventListener("resize", this.kU)
      }
      bindMarker(BB) {
        let IB = this.refs.get(BB);
        return IB || (IB = IB => {
          var ZB;
          null === (ZB = this.markers.get(BB)) || void 0 === ZB || ZB.stopObserving(), this.markers.delete(BB), IB && !this.WN && this.markers.set(BB, this.mount(IB))
        }, this.refs.set(BB, IB)), IB
      }
      frame(BB, IB) {
        this.render = BB;
        const ZB = this.hud.getScoreboard().wire;
        if ("scoreboard" === ZB[0] && 0 !== this.markers.size)
          for (const [TB, , , , , , JB] of ZB[6]) {
            const BB = this.markers.get(TB);
            BB && JB && (BB.target ??= [0, 0, 0], BB.target[0] = JB[0], BB.target[1] = JB[1] + 2.5, BB.target[2] = JB[2], this.place(BB), this.RI(BB, IB && Math.hypot(JB[0] - IB[0], JB[1] - IB[1], JB[2] - IB[2])))
          }
      }
      dispose() {
        var BB;
        this.WN = !0, window.removeEventListener("resize", this.kU), null === (BB = window.visualViewport) || void 0 === BB || BB.removeEventListener("resize", this.kU);
        for (const IB of this.markers.values()) IB.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(BB) {
        const {
          render: IB,
          viewport: ZB
        } = this;
        if (!IB || !BB.target) return;
        const TB = (50 - IB.screenBandPct.y) / 100 * ZB.height,
          JB = {
            x: BB.halfSize.width + 8,
            top: BB.halfSize.height + 8,
            bottom: BB.halfSize.height + BB.labelsBelow + TB
          },
          oB = IB.projectWorldPosToViewport(BB.target),
          GB = null !== oB && void 0 !== oB ? oB : IB.projectWorldPosToScreenPos(BB.target),
          vB = (0, ZI.e)({
            x: GB.x,
            y: GB.y,
            text: oB
          }, JB, ZB);
        (0, II.d)(BB.root, Math.round(100 * vB.x) / 100, Math.round(100 * vB.y) / 100)
      }
      RI(BB, IB) {
        if (null === IB) return void(null !== BB.metres && (BB.metres = null, BB.distance.textContent = ""));
        const ZB = Date.now();
        (null === BB.metres || (0, SB.e)(IB, BB.metres, BB.metresShownAt)) && (BB.metres = Math.round(IB), BB.metresShownAt = ZB, BB.distance.textContent = (0, MB.C)(BI.h.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(BB.metres)
        }))
      }
      mount(BB) {
        const IB = {
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
          ZB = BB.querySelector(".FrontlinePointMarkerLabels"),
          TB = new ResizeObserver((() => {
            IB.halfSize = {
              width: Math.max(BB.offsetWidth, ZB.offsetWidth) / 2,
              height: BB.offsetHeight / 2
            }, IB.labelsBelow = ZB.offsetTop + ZB.offsetHeight - BB.offsetHeight, this.place(IB)
          }));
        return TB.observe(BB, {
          box: "border-box"
        }), TB.observe(ZB, {
          box: "border-box"
        }), IB.stopObserving = () => {
          TB.disconnect()
        }, IB
      }
    }
    var JI = ZB(6595),
      oI = ZB(2763);
    const GI = "frontlineRoundEndChanged";
    class vI {
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
      sN(BB) {
        const IB = "roundEnd" === BB[0] ? performance.now() + BB[5] : 0;
        this.view = {
          wire: BB,
          key: this.view.key + 1,
          endsAt: IB
        }, cB.l.Gq(GI, this.view, !0)
      }
    }
    const kI = (0, JB.lazy)((() => (0, oI.b)(Promise.all([ZB.e(239), ZB.e(202)]).then((() => ZB(41783))), (BB => BB.FrontlineMvpLineup)))),
      cI = [4800, 4e3, 3200],
      nI = [1, 0, 2],
      hI = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      zI = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function FI(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, jB.h)(GI, IB.getView()),
        TB = LB(ZB.endsAt);
      return "roundEnd" !== ZB.wire[0] || 1e3 * TB < -2e3 ? null : (0, mB.jsx)(NI, {
        wire: ZB.wire,
        secondsLeft: Math.max(0, Math.ceil(TB))
      }, ZB.key)
    }
    const NI = (0, JB.memo)((function(BB) {
      let {
        wire: IB,
        secondsLeft: ZB
      } = BB;
      const {
        t: oB
      } = (0, MB.G)(), [, GB, vB, kB, cB, , nB, hB] = IB, zB = (0, JB.useMemo)((() => nI.filter((BB => BB < hB.length))), [hB]), FB = (0, JB.useMemo)((() => zB.map((BB => {
        const [, , , , , IB, ZB] = hB[BB];
        return {
          cosmetics: TB.map(((BB, ZB) => [BB, IB[ZB]])),
          size: 0 === BB ? 1.15 : .85,
          heldGun: {
            name: ZB,
            aimed: 0 === BB
          },
          showAfterMs: cI[BB]
        }
      }))), [hB, zB]);
      return (0, mB.jsxs)("div", {
        className: pB()("FrontlineRoundEnd", `Result-${GB}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, mB.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, mB.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, mB.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, mB.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, mB.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (NB = oB(hI[GB]), /\p{Script=Arabic}/u.test(NB) ? [NB] : (0, JI.b)(NB)).map(((BB, IB) => (0, mB.jsx)("span", {
              style: {
                "--letter": IB
              },
              children: BB
            }, IB)))]
          }), (0, mB.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [vB && "victory" === GB && (0, mB.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: oB("frontlineRoundEnd:comeback")
            }), (0, mB.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, mB.jsx)("b", {
                className: "Friendly",
                children: kB
              }), " \u2013 ", (0, mB.jsx)("b", {
                className: "Enemy",
                children: cB
              })]
            })]
          })]
        }), zB.length > 0 && (0, mB.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": zB.length
          },
          children: [(0, mB.jsx)(JB.Suspense, {
            fallback: null,
            children: (0, mB.jsx)(kI, {
              className: "FrontlineRoundEndLineup",
              players: FB
            })
          }), zB.map((BB => (0, mB.jsx)(gI, {
            mvp: hB[BB],
            place: BB
          }, BB)))]
        }), (0, mB.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: oB("frontlineRoundEnd:nextFront", {
            map: nB,
            seconds: String(ZB)
          })
        })]
      });
      var NB
    }));

    function gI(BB) {
      let {
        mvp: IB,
        place: ZB
      } = BB;
      const {
        t: TB
      } = (0, MB.G)(), [JB, oB, GB, vB, kB] = IB, [cB, nB] = TB(function(BB, IB) {
        return 1 === IB && "damage" !== BB ? `frontlineRoundEnd:${BB}One` : `frontlineRoundEnd:${BB}`
      }(GB, vB), {
        name: "\0",
        count: vB.toLocaleString()
      }).split("\0");
      return (0, mB.jsxs)("div", {
        className: pB()("FrontlineMvpCard", `Place-${ZB+1}`, `Team-${oB}`),
        style: {
          "--revealMs": `${cI[ZB]}ms`
        },
        children: [(0, mB.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, mB.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, mB.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: TB(zI[ZB])
        }), (0, mB.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [cB, (0, mB.jsx)("span", {
            className: "FrontlineMvpName",
            children: JB
          }), nB]
        }), (0, mB.jsx)("div", {
          className: "FrontlineMvpKit",
          children: kB
        })]
      })
    }
    const qI = function(BB, IB, ZB, TB) {
      let {
        localPlayerId: GB
      } = TB;
      const vB = new rB,
        kB = new vI;
      let cB = null,
        nB = null,
        hB = null,
        zB = null,
        FB = null,
        NB = [!1, !1];
      const gB = () => {
        var BB, IB;
        const [ZB, TB] = NB;
        null === (BB = nB) || void 0 === BB || BB.qY(!ZB), null === (IB = hB) || void 0 === IB || IB.qY(!TB)
      };
      return {
        onCreate: BB => {
          cB = BB, nB = new WB(BB, GB), hB = new sB(BB, GB), zB = new TI(vB), gB(), FB = (0, oB.x)((0, JB.createElement)(JB.Fragment, null, (0, JB.createElement)(AB, {
            hud: vB,
            crosshair: nB,
            damage: hB,
            markers: zB
          }), (0, JB.createElement)(FI, {
            controller: kB
          })))
        },
        onClose: () => {
          var BB, IB, ZB, TB;
          null === (BB = FB) || void 0 === BB || BB(), null === (IB = nB) || void 0 === IB || IB.dispose(), nB = null, null === (ZB = hB) || void 0 === ZB || ZB.dispose(), hB = null, null === (TB = zB) || void 0 === TB || TB.dispose(), zB = null, cB = null
        },
        onAfterRender: (BB, IB) => {
          var ZB, TB, JB, oB;
          null === (ZB = nB) || void 0 === ZB || ZB.frame(BB, IB.tanHalfFovY), null === (TB = hB) || void 0 === TB || TB.frame(IB.cameraHeading), null === (JB = zB) || void 0 === JB || JB.frame(IB, null !== (oB = cB) && void 0 !== oB && oB.checkValid(GB) ? cB.aU(GB) : null)
        },
        onReceivedMessageFromServer: (BB, IB) => {
          "frontlineHud" === BB ? vB.sN(IB) : "frontlineScoreboard" === BB ? vB.receiveScoreboard(IB) : "frontlineRoundEnd" === BB ? kB.sN(IB) : "frontlinePrefs" === BB && (NB = IB, gB())
        }
      }
    }
  },
  6595: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB
    });
    const TB = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function JB(BB) {
      return null === TB ? Array.from(BB) : Array.from(TB.segment(BB), (BB => {
        let {
          segment: IB
        } = BB;
        return IB
      }))
    }
  },
  38532: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      f: () => oB
    });
    const TB = new WeakMap;

    function JB(BB) {
      let IB = TB.get(BB);
      return IB || (IB = {
        hidden: BB.hidden,
        x: NaN,
        y: NaN
      }, TB.set(BB, IB)), IB
    }

    function oB(BB, IB) {
      const ZB = JB(BB);
      ZB.hidden !== IB && (ZB.hidden = IB, BB.hidden = IB)
    }

    function GB(BB, IB, ZB) {
      const TB = JB(BB);
      TB.x === IB && TB.y === ZB || (TB.x = IB, TB.y = ZB, BB.style.translate = `${IB}vw ${ZB}vh`)
    }
  },
  37093: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    const TB = {
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