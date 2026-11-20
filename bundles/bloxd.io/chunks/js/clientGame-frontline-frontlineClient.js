export const id = 17;
export const ids = [17];
export const modules = {
  36208: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Zb,
      e: () => Xb,
      f: () => wb,
      h: () => Hb
    });
    var Bb = hb(9085),
      Ob = hb(36214),
      Gb = hb(36217),
      Ub = hb(8444),
      Lb = hb(1348),
      Yb = hb(49),
      Sb = hb(65),
      ab = hb(1007);

    function Hb() {
      var bb;
      return (0, Lb.k)(Ob.c, (0, Ob.m)()), (0, ab.jsx)(ab.Fragment, {
        children: null === (bb = (0, Ob.m)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function wb(bb) {
      var ub;
      let {
        show: hb
      } = bb;
      (0, Lb.k)(Ob.c, (0, Ob.m)());
      const Sb = null === (ub = (0, Ob.m)()) || void 0 === ub ? void 0 : ub.menu;
      return (0, Yb.useEffect)((() => {
        var bb;
        hb || (null === Sb || void 0 === Sb || null === (bb = Sb.onClose) || void 0 === bb || bb.call(Sb), (0, Gb.o)())
      }), [hb, Sb]), (0, Yb.useEffect)((() => hb ? (0, Ub.f)(Gb.u, Gb.e) : void 0), [hb]), (0, ab.jsx)(Bb.b, {
        showing: hb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Sb || void 0 === Sb ? void 0 : Sb.content
      })
    }

    function Zb(bb) {
      let {
        placement: ub = "bottom"
      } = bb;
      return (0, ab.jsx)("div", {
        id: `clientGameHud-${ub}`,
        style: {
          display: "contents"
        }
      })
    }

    function Xb(bb) {
      let {
        children: ub,
        placement: hb = "bottom"
      } = bb;
      const [Bb, Ob] = (0, Yb.useState)(null);
      return (0, Yb.useEffect)((() => {
        Ob(document.getElementById(`clientGameHud-${hb}`))
      }), [hb]), Bb ? (0, Sb.createPortal)(ub, Bb) : null
    }
  },
  9085: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(4296),
      Ob = hb(4302);

    function Gb(bb) {
      let {
        children: ub,
        showing: hb,
        globallyUniqueKey: Gb,
        alwaysMountChildren: Ub = !1,
        doGameplayStartStopOnShow: Lb = !0,
        keepsMovement: Yb = !1
      } = bb;
      return (0, Ob.c)(!0, hb, Gb, Yb), (0, Bb.c)(Lb, hb), hb || Ub ? ub : null
    }
  },
  36309: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb,
      d: () => Ub,
      g: () => Lb,
      h: () => Yb
    });
    var Bb = hb(49),
      Ob = hb(2903);
    const Gb = 8,
      Ub = "InGameHeaderContainer",
      Lb = "TopRightElements";

    function Yb(bb) {
      const [ub] = (0, Ob.e)(), [hb, Yb] = (0, Bb.useState)(!1);
      return (0, Bb.useLayoutEffect)((() => {
        if (!bb) return;
        const ub = document.querySelector(`.${Ub}`),
          hb = document.querySelector(`.${Lb}`),
          Bb = () => {
            const Bb = bb.getBoundingClientRect(),
              Ob = ub ? ub.getBoundingClientRect().right : 0,
              Ub = hb ? hb.getBoundingClientRect().left : window.innerWidth,
              Lb = Bb.left < Ob + Gb,
              Sb = Bb.right > Ub - Gb;
            Yb(Lb || Sb)
          };
        Bb();
        const Ob = new ResizeObserver(Bb);
        return Ob.observe(bb), ub && Ob.observe(ub), hb && Ob.observe(hb), () => {
          Ob.disconnect()
        }
      }), [bb, ub]), hb
    }
  },
  36300: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ob
    });
    const Bb = [{
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

    function Ob(bb, ub, hb) {
      const Ob = Math.abs(bb - ub),
        Gb = Date.now() - hb;
      for (const Ub of Bb)
        if (bb < Ub.maxDist) return Ob >= Ub.hardUpdateDist || Gb > Ub.timeBetweenSoftChecks && Ob >= Ub.softUpdateDist;
      return !1
    }
  },
  8444: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      f: () => Ob
    });
    let Bb = null;
    const Ob = function(bb) {
        const ub = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Bb = ub, () => {
          Bb === ub && (Bb = null)
        }
      },
      Gb = () => {
        var bb;
        return null !== (bb = Bb) && void 0 !== bb && bb.canCycle() ? Bb.cycle : null
      }
  },
  38152: (bb, ub, hb) => {
    function Bb(bb, ub, hb) {
      var Bb;
      const {
        width: Ob,
        height: Gb
      } = hb, Ub = null !== (Bb = bb.text) && void 0 !== Bb ? Bb : bb, Lb = (Ub.x / 100 - .5) * Ob, Yb = (Ub.y / 100 - .5) * Gb, Sb = Ob / 2 - ub.x;
      if (null !== bb.text && Math.abs(Lb) <= Sb && Yb >= ub.top - Gb / 2 && Yb <= Gb / 2 - ub.bottom) return {
        x: Ub.x,
        y: Ub.y
      };
      const ab = Math.min(0 === Lb ? 1 / 0 : Sb / Math.abs(Lb), Yb > 0 ? (Gb / 2 - ub.bottom) / Yb : Yb < 0 ? (ub.top - Gb / 2) / Yb : 1 / 0);
      return !Number.isFinite(ab) || ab < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Lb * ab / Ob * 100,
        y: 50 + Yb * ab / Gb * 100
      }
    }
    hb.d(ub, {
      e: () => Bb
    })
  },
  36217: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => pb,
      i: () => ob,
      k: () => Lb,
      m: () => wb,
      o: () => Ab,
      q: () => Hb,
      r: () => Kb,
      u: () => Xb,
      v: () => lb
    });
    var Bb = hb(13),
      Ob = hb(16);
    const Gb = "clientGameInventoryButtonsChanged",
      Ub = new Map;

    function Lb() {
      return [...Ub.values()].sort(((bb, ub) => {
        var hb, Bb;
        return (null !== (hb = bb.order) && void 0 !== hb ? hb : 0) - (null !== (Bb = ub.order) && void 0 !== Bb ? Bb : 0)
      }))
    }
    let Yb = null;

    function Sb(bb) {
      Yb = bb
    }
    let ab = !1;

    function Hb(bb) {
      ab = !0;
      try {
        bb.onClick()
      } finally {
        ab = !1
      }
      bb.panel && "clientGame" === Bb.d.get("openInGameMenuName") && Sb(bb.id)
    }

    function wb() {
      return ab
    }

    function Zb() {
      return Lb().filter((bb => bb.panel && !bb.disabled))
    }

    function Xb(bb) {
      const ub = Zb(),
        hb = ub.findIndex((bb => bb.id === Yb));
      return !(hb < 0 || ub.length < 2) && (Hb(ub[(hb + bb + ub.length) % ub.length]), !0)
    }

    function pb() {
      return null !== Yb && Zb().length > 1
    }

    function ob() {
      Sb(null)
    }

    function Ab() {
      "inventory" !== Bb.d.get("openInGameMenuName") && Sb(null)
    }

    function lb() {
      const bb = Yb;
      return Sb(null), bb
    }

    function Kb(bb) {
      return Ub.set(bb.id, bb), Ob.i.vp(Gb, Lb(), !0), () => {
        Ub.get(bb.id) === bb && (Ub.delete(bb.id), Ob.i.vp(Gb, Lb()))
      }
    }
  },
  36214: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb,
      g: () => ob,
      j: () => Ab,
      l: () => wb,
      m: () => Sb,
      p: () => pb,
      q: () => Zb,
      t: () => ab
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(1184),
      Ub = hb(36217);
    const Lb = "clientGameUiChanged";
    let Yb = null;

    function Sb() {
      return Yb
    }

    function ab(bb, ub) {
      const hb = {
        content: bb,
        menu: ub
      };
      return Yb = hb, Ob.i.vp(Lb, Yb, !0), () => {
        Yb === hb && (Yb = null, Xb = !1, ob(), Ob.i.vp(Lb, null))
      }
    }
    let Hb = null;

    function wb() {
      return Hb
    }

    function Zb(bb) {
      return Hb = bb, () => {
        Hb === bb && (Hb = null)
      }
    }
    let Xb = !1;

    function pb() {
      const bb = Bb.d.get("openInGameMenuName");
      "clientGame" !== bb && (Xb = "inventory" === bb), (0, Ub.m)() || (0, Ub.i)(), (0, Gb.l)(Gb.b), Bb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ob() {
      lb(!1)
    }

    function Ab() {
      lb(Xb)
    }

    function lb(bb) {
      "clientGame" === Bb.d.get("openInGameMenuName") && Bb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Ub.i)(), Xb = !1
    }
  },
  39032: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => ou
    });
    const Bb = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var Ob = hb(49),
      Gb = hb(36214),
      Ub = hb(36684),
      Lb = hb(36231),
      Yb = hb(1622),
      Sb = hb(16);
    const ab = {
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
    const Hb = 32;

    function wb(bb, ub, hb, Bb) {
      return {
        tag: "line",
        attrs: {
          x1: bb,
          y1: ub,
          x2: hb,
          y2: Bb,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function Zb(bb) {
      return {
        tag: "circle",
        attrs: {
          cx: Hb,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb,
          r: bb,
          class: "Fill"
        }
      }
    }

    function Xb(bb, ub) {
      return {
        tag: "path",
        attrs: {
          d: bb,
          "stroke-width": ub
        }
      }
    }

    function pb(bb, ub, hb) {
      return {
        tag: "circle",
        attrs: {
          cx: Hb,
          cy: Hb,
          r: bb,
          "stroke-width": ub,
          class: hb
        }
      }
    }

    function ob(bb, ub, hb) {
      return {
        tag: "text",
        attrs: {
          x: bb,
          y: ub,
          class: "Fill Label"
        },
        text: hb
      }
    }
    const Ab = {
      pistol: bb => [wb(Hb, Hb - bb - 5, Hb, Hb - bb), wb(Hb - bb - 5, Hb, Hb - bb, Hb), wb(Hb + bb, Hb, Hb + bb + 5, Hb), Zb(1.4)],
      rifle: bb => [wb(Hb, Hb - bb - 8, Hb, Hb - bb), wb(Hb, Hb + bb, Hb, Hb + bb + 8), wb(Hb - bb - 8, Hb, Hb - bb, Hb), wb(Hb + bb, Hb, Hb + bb + 8, Hb), Zb(1)],
      smg: bb => {
        const ub = Math.PI / 2,
          hb = [];
        for (let Ub = 0; Ub < 4; Ub++) hb.push((Ob = Ub * ub + .35, Gb = (Ub + 1) * ub - .35, Xb(`M${Hb+(Bb=6+bb)*Math.cos(Ob)} ${Hb+Bb*Math.sin(Ob)} A${Bb} ${Bb} 0 0 1 ${Hb+Bb*Math.cos(Gb)} ${Hb+Bb*Math.sin(Gb)}`, 2)));
        var Bb, Ob, Gb;
        return [...hb, Zb(1.4)]
      },
      shotgun: bb => [pb(bb, 3, "Ring Outline"), pb(bb, 1.5, "Ring")],
      marksman: bb => [Xb(`M${26-bb/2} ${39+bb/2} L32 33 L${38+bb/2} ${39+bb/2}`, 2), wb(14 - bb, Hb, 24 - bb, Hb, 1.5), wb(40 + bb, Hb, 50 + bb, Hb, 1.5), wb(14 - bb, 30, 14 - bb, 34, 1.5), wb(50 + bb, 30, 50 + bb, 34, 1.5)],
      machineGun: bb => {
        const ub = 10 + bb,
          hb = [];
        for (const [Bb, Ob] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) hb.push(Xb(`M${Hb+Bb*ub} ${Hb+Ob*(ub-5)} L${Hb+Bb*ub} ${Hb+Ob*ub} L${Hb+Bb*(ub-5)} ${Hb+Ob*ub}`, 2));
        return [...hb, wb(Hb, 28, Hb, 36, 1.5), wb(28, Hb, 36, Hb, 1.5)]
      },
      launcher: () => [wb(14, 30, 50, 30, 1.5), wb(Hb, 24, Hb, 52, 1.5), wb(28, 38, 36, 38, 1.5), wb(29, 44, 35, 44, 1.5), wb(30, 50, 34, 50, 1.5), ob(38, 40, "100"), ob(37, 46, "200"), Zb(1.4, 30)],
      melee: () => [Xb("M32 26 L38 32 L32 38 L26 32 Z", 1.5), Zb(1.2)],
      throwable: () => [Zb(1.6)]
    };

    function lb(bb) {
      let {
        tag: ub,
        attrs: hb,
        text: Bb
      } = bb, Ob = `<${ub}`;
      for (const [Gb, Ub] of Object.entries(hb)) Ob += ` ${Gb}="${Ub}"`;
      return void 0 === Bb ? `${Ob}/>` : `${Ob}>${Bb}</${ub}>`
    }
    class Kb {
      constructor(bb, ub) {
        this.api = bb, this.localPlayerId = ub, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = bb => {
          this.element = bb, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, bb && !this.enabled && (bb.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, Yb.getRemInPx)()))
        }, this.tokens = [Sb.i.subscribe("aimingOverlay", (bb => {
          this.sniperOverlay = "sniper" === bb
        })), Sb.i.subscribe("mouseState", (bb => {
          let {
            isDown: ub
          } = bb;
          this.mouseDown = ub
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      Zx(bb) {
        bb !== this.enabled && (this.enabled = bb, this.drawnVisible = null, bb || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(bb, ub) {
        var hb, Bb;
        if (!this.enabled) return;
        const {
          api: Ob
        } = this, Gb = Ob.isAlive(this.localPlayerId) && null !== (hb = null === (Bb = Ob.cub(this.localPlayerId)) || void 0 === Bb ? void 0 : Bb.name) && void 0 !== hb ? hb : null, Ub = (Lb = Gb) && ab[Lb] || null;
        var Lb;
        if (this.setOwnsCrosshair(null !== Ub), !this.element) return;
        const Yb = Ob.getHeldGunInaccuracy(),
          Sb = null !== Yb,
          Hb = null !== Ub && !this.sniperOverlay && Ob.isCrosshairShown();
        if (Hb !== this.drawnVisible && (this.drawnVisible = Hb, this.element.style.display = Hb ? "block" : "none"), !Hb) return;
        const wb = Sb ? function(bb) {
            return "launcher" === bb || "melee" === bb || "throwable" === bb ? "none" : "shotgun" === bb ? "cone" : "offset"
          }(Ub) : "none",
          Zb = null !== Yb && void 0 !== Yb ? Yb : 0;
        "cone" === wb ? this.drawCone(Ub, this.coneRadiusVh(Zb, ub) * this.gapPerVh, bb) : (this.coneDrawn = !1, this.draw(Ub, "none" === wb ? 2 : this.offsetGap(Zb)));
        const Xb = !Sb && this.mouseDown;
        Xb !== this.drawnPressed && (this.drawnPressed = Xb, this.element.classList.toggle("Pressed", Xb))
      }
      dispose() {
        for (const bb of this.tokens) Sb.i.unsubscribe(bb);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(bb, ub) {
        var hb, Bb;
        bb !== this.drawnFamily ? (this.drawnFamily = bb, this.drawnGap = ub, this.element.innerHTML = function(bb, ub) {
          return `<svg viewBox="0 0 64 64">${Ab[bb](ub).map(lb).join("")}</svg>`
        }(bb, ub), this.shapes = Array.from(null !== (hb = null === (Bb = this.element.firstElementChild) || void 0 === Bb ? void 0 : Bb.children) && void 0 !== hb ? hb : [])) : ub !== this.drawnGap && (this.drawnGap = ub, function(bb, ub, hb) {
          const Bb = Ab[ub](hb);
          for (let Ob = 0; Ob < Bb.length; Ob++)
            for (const [ub, hb] of Object.entries(Bb[Ob].attrs)) {
              const Bb = String(hb);
              bb[Ob].getAttribute(ub) !== Bb && bb[Ob].setAttribute(ub, Bb)
            }
        }(this.shapes, bb, ub))
      }
      drawCone(bb, ub, hb) {
        bb === this.drawnFamily && this.coneDrawn ? this.shownRadius += (ub - this.shownRadius) * (1 - Math.exp(-hb / 80)) : this.shownRadius = ub, this.coneDrawn = !0, this.draw(bb, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(bb, ub) {
        if (!(ub > 0)) return 1;
        const hb = bb * Ub.f / 2;
        return Math.max(50 * Math.tan(hb) / ub, 1)
      }
      offsetGap(bb) {
        const ub = 2 + ((0, Lb.g)(bb) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * ub) / 2)
      }
      setOwnsCrosshair(bb) {
        bb !== this.ownsCrosshair && (this.ownsCrosshair = bb, document.body.classList.toggle("FrontlineCustomCrosshair", bb))
      }
    }
    const Wb = "FrontlineCustomDamage",
      Cb = .45,
      db = .2;
    class rb {
      constructor(bb, ub) {
        this.api = bb, this.localPlayerId = ub, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.sb = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = bb => {
          var ub, hb;
          this.clearHits(), this.root = bb, this.lowLayer = null !== (ub = null === bb || void 0 === bb ? void 0 : bb.querySelector(".FrontlineDamageLow")) && void 0 !== ub ? ub : null, this.arcLayer = null !== (hb = null === bb || void 0 === bb ? void 0 : bb.querySelector(".FrontlineDamageArcs")) && void 0 !== hb ? hb : null, this.showRoot(), this.drawLow()
        }, this.token = Sb.i.subscribe("damagedByOtherPlayer", (bb => {
          let {
            direction: ub,
            eb: hb
          } = bb;
          this.onHurt(ub, hb)
        })), this.syncHealth(), document.body.classList.add(Wb)
      }
      Zx(bb) {
        bb !== this.enabled && (this.enabled = bb, document.body.classList.toggle(Wb, bb), bb || this.clearHits(), this.showRoot())
      }
      frame(bb) {
        this.syncHealth(), this.cameraHeading = bb;
        for (const ub of this.arcs) this.drawArcAngle(ub)
      }
      dispose() {
        Sb.i.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Wb)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const bb = this.api.getClientOption(this.localPlayerId, "_health"),
          ub = this.api.getClientOption(this.localPlayerId, "_shield"),
          hb = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(bb, this.readHealth) && Object.is(ub, this.readShield) && Object.is(hb, this.readMaxHealth)) return;
        if (this.readHealth = bb, this.readShield = ub, this.readMaxHealth = hb, null === bb || void 0 === bb || !hb) return this.lastHealthPool = null, this.maxHealth = null, this.sb = 1, this.dead = !1, void this.drawLow();
        const Bb = bb + (null !== ub && void 0 !== ub ? ub : 0);
        if (null !== this.lastHealthPool && Bb < this.lastHealthPool) {
          const bb = performance.now(),
            ub = (this.lastHealthPool - Bb) / hb;
          this.lastDrop = bb - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + ub,
            at: this.lastDrop.at
          } : {
            frac: ub,
            at: bb
          }
        }
        this.dead = bb <= 0, this.dead && this.clearHits(), this.lastHealthPool = Bb, this.maxHealth = hb, this.sb = bb > 0 ? bb / hb : 1, this.drawLow()
      }
      onHurt(bb, ub) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const hb = Math.min(1, this.takeDamageFrac(ub) / .3);
        null !== bb && this.showArc(bb, hb), this.flashEdge(null === bb ? null : bb - this.cameraHeading, .4 + .6 * hb)
      }
      takeDamageFrac(bb) {
        if (void 0 !== bb && this.maxHealth) return bb / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: ub
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, ub
      }
      drawLow() {
        if (!this.lowLayer) return;
        const bb = nb((Cb - this.sb) / .25),
          ub = nb((db - this.sb) / .15000000000000002),
          hb = this.sb < Cb;
        this.lowLayer.classList.toggle("Active", hb), this.lowLayer.classList.toggle("Critical", this.sb < db), this.lowLayer.style.opacity = String(hb ? .55 + .3 * bb + .15 * ub : 0)
      }
      showArc(bb, ub) {
        var hb, Bb;
        if (!this.arcLayer) return;
        let Ob = this.arcs.find((ub => jb(ub.direction, bb) < .6));
        if (!Ob) {
          const ub = document.createElement("div");
          ub.className = "FrontlineDamageArc", ub.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(ub), Ob = {
            element: ub,
            direction: bb,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Ob)
        }
        Ob.direction = bb, this.drawArcAngle(Ob);
        const Gb = Ob.fade ? Number(getComputedStyle(Ob.element).opacity) : 0;
        null === (hb = Ob.fade) || void 0 === hb || hb.cancel(), null === (Bb = Ob.pop) || void 0 === Bb || Bb.cancel(), Ob.element.style.opacity = "1";
        const Ub = Ob.element.animate([{
          opacity: Gb
        }, {
          opacity: 1
        }], 144);
        Ob.fade = Ub, Ob.pop = Ob.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * ub
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const Lb = Ob;
        Ub.onfinish = () => {
          if (Lb.fade !== Ub) return;
          const bb = Lb.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          bb.startTime = Ub.startTime, Lb.fade = bb, bb.onfinish = () => {
            Lb.fade === bb && (Lb.element.remove(), Db(this.arcs, Lb))
          }
        }
      }
      drawArcAngle(bb) {
        const ub = bb.direction - this.cameraHeading;
        (null === bb.drawnAngle || Math.abs(ub - bb.drawnAngle) > .005) && (bb.drawnAngle = ub, bb.element.style.rotate = `${ub}rad`)
      }
      flashEdge(bb, ub) {
        var hb, Bb, Ob;
        if (!this.root) return;
        let Gb = this.flashes.find((ub => null === ub.angle || null === bb ? ub.angle === bb : jb(ub.angle, bb) < .5));
        if (!Gb) {
          const ub = document.createElement("div");
          ub.className = "FrontlineDamageFlash";
          const hb = ub.appendChild(document.createElement("div"));
          hb.className = "FrontlineDamageFlashGlow", this.root.insertBefore(ub, this.arcLayer), Gb = {
            element: ub,
            glow: hb,
            angle: bb,
            level: 0,
            animation: null
          }, this.flashes.push(Gb)
        }
        const Ub = null === (hb = Gb.animation) || void 0 === hb || null === (Bb = hb.effect) || void 0 === Bb ? void 0 : Bb.getComputedTiming().progress,
          Lb = null === Ub || void 0 === Ub ? 0 : Gb.level * (1 - Ub);
        Gb.level = Math.min(1, Math.max(ub, Lb + .6 * ub)), Gb.angle = bb;
        const {
          x: Yb,
          y: Sb,
          rx: ab,
          ry: Hb
        } = function(bb, ub) {
          const hb = window.innerWidth,
            Bb = window.innerHeight;
          if (null === bb) return {
            x: hb / 2,
            y: Bb / 2,
            rx: 0,
            ry: 0
          };
          const Ob = Math.sin(bb),
            Gb = -Math.cos(bb),
            Ub = hb / 2 / Math.max(1e-6, Math.abs(Ob)),
            Lb = Bb / 2 / Math.max(1e-6, Math.abs(Gb)),
            Yb = Math.min(Ub, Lb),
            Sb = Math.round(hb / 2 + Ob * Yb),
            ab = Math.round(Bb / 2 + Gb * Yb),
            Hb = Bb / 100 * (.85 + .25 * ub),
            wb = Ub <= Lb,
            Zb = Math.round((wb ? 30 : 74) * Hb),
            Xb = Math.round((wb ? 58 : 26) * Hb);
          return {
            x: Sb,
            y: ab,
            rx: Zb,
            ry: Xb
          }
        }(bb, Gb.level), {
          style: wb
        } = Gb.glow;
        Gb.glow.classList.toggle("Everywhere", null === bb), wb.setProperty("--glowX", `${Yb}px`), wb.setProperty("--glowY", `${Sb}px`), wb.setProperty("--glowRx", `${ab}px`), wb.setProperty("--glowRy", `${Hb}px`), Gb.element.style.transformOrigin = `${Yb}px ${Sb}px`, null === (Ob = Gb.animation) || void 0 === Ob || Ob.cancel();
        const Zb = Gb.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: Gb.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * Gb.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * Gb.level
        });
        Gb.animation = Zb;
        const Xb = Gb;
        Zb.onfinish = () => {
          Xb.animation === Zb && (Xb.element.remove(), Db(this.flashes, Xb))
        }
      }
      clearHits() {
        for (const Bb of this.arcs) {
          var bb, ub;
          null === (bb = Bb.fade) || void 0 === bb || bb.cancel(), Bb.fade = null, null === (ub = Bb.pop) || void 0 === ub || ub.cancel(), Bb.element.remove()
        }
        this.arcs.length = 0;
        for (const Bb of this.flashes) {
          var hb;
          null === (hb = Bb.animation) || void 0 === hb || hb.cancel(), Bb.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function jb(bb, ub) {
      return Math.abs(Math.atan2(Math.sin(bb - ub), Math.cos(bb - ub)))
    }

    function nb(bb) {
      return Math.max(0, Math.min(1, bb))
    }

    function Db(bb, ub) {
      const hb = bb.indexOf(ub); - 1 !== hb && bb.splice(hb, 1)
    }
    var xb = hb(958),
      zb = hb.n(xb),
      gb = hb(36208),
      ib = hb(36309),
      vb = hb(1095),
      tb = hb(1348);
    const Jb = "frontlineHudChanged",
      eb = "frontlineScoreboardChanged";
    class Nb {
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
      cZ(bb) {
        this.wire = bb, Sb.i.vp(Jb, bb, !0)
      }
      receiveScoreboard(bb) {
        let ub = "scoreboard" === bb[0] ? performance.now() + bb[5] : 0;
        const hb = this.scoreboard.endsAt;
        0 !== ub && 0 !== hb && Math.abs(ub - hb) < 1e3 && (ub = hb), this.scoreboard = {
          wire: bb,
          endsAt: ub
        }, Sb.i.vp(eb, this.scoreboard, !0)
      }
    }
    var sb = hb(1007);
    const Mb = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function mb(bb) {
      const [ub, hb] = (0, Ob.useState)((() => (bb - performance.now()) / 1e3));
      return (0, Ob.useEffect)((() => {
        if (0 === bb) return;
        const ub = () => {
          hb((bb - performance.now()) / 1e3)
        };
        ub();
        const Bb = window.setInterval(ub, 250);
        return () => {
          window.clearInterval(Bb)
        }
      }), [bb]), ub
    }

    function Ib(bb) {
      let {
        className: ub,
        point: hb
      } = bb;
      const [Bb, Ob, Gb, Ub, Lb, Yb] = hb;
      return (0, sb.jsxs)("div", {
        className: zb()(ub, `Owner-${Ob||"None"}`, `Leader-${Ub||"None"}`, {
          Contested: Lb,
          Here: Yb
        }),
        children: [(0, sb.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Bb
        }), (0, sb.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${Gb}%`
          }
        })]
      })
    }
    const Pb = (0, Ob.memo)((function(bb) {
        let {
          points: ub,
          markers: hb
        } = bb;
        const {
          t: Bb
        } = (0, vb.K)();
        return ub ? (0, sb.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: ub.map((bb => {
            const [ub, , , , , , , Ob] = bb;
            return (0, sb.jsxs)("div", {
              ref: hb.bindMarker(ub),
              className: "FrontlinePointMarker",
              children: [(0, sb.jsx)(Ib, {
                className: "FrontlinePointMarkerTile",
                point: bb
              }), (0, sb.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Ob && (0, sb.jsx)("span", {
                  className: zb()("FrontlinePointMarkerHomeTurf", `Team-${Ob}`),
                  children: Bb("frontlineHud:homeTurf", {
                    team: Bb(Mb[Ob])
                  })
                }), (0, sb.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, ub)
          }))
        }) : null
      })),
      qb = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      Eb = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function yb(bb) {
      let {
        hud: ub,
        crosshair: hb,
        damage: Bb,
        markers: Ob
      } = bb;
      const Gb = (0, tb.k)(Jb, ub.getWire()),
        Ub = (0, tb.k)(eb, ub.getScoreboard());
      return (0, sb.jsxs)(sb.Fragment, {
        children: [(0, sb.jsx)(Vb, {
          damage: Bb
        }), (0, sb.jsx)(Pb, {
          points: "scoreboard" === Ub.wire[0] ? Ub.wire[6] : null,
          markers: Ob
        }), (0, sb.jsx)(fb, {
          view: Ub
        }), (0, sb.jsx)("div", {
          className: "FrontlineReticle",
          ref: hb.bindElement
        }), (0, sb.jsx)(gb.e, {
          children: (0, sb.jsx)(Fb, {
            wire: Gb
          })
        })]
      })
    }
    const Vb = (0, Ob.memo)((function(bb) {
        let {
          damage: ub
        } = bb;
        return (0, sb.jsxs)("div", {
          className: "FrontlineDamage",
          ref: ub.bindElement,
          children: [(0, sb.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, sb.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, sb.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      Fb = (0, Ob.memo)((function(bb) {
        let {
          wire: ub
        } = bb;
        const {
          t: hb
        } = (0, vb.K)();
        if ("capture" === ub[0]) {
          const [, bb, Bb, Ob, Gb, Ub, Lb] = ub, Yb = Math.round(Ob / 100 * 24);
          return (0, sb.jsxs)("div", {
            className: zb()("FrontlinePlate", `Status-${Bb}`, `Leader-${Gb||"None"}`),
            children: [(0, sb.jsx)(Qb, {}), (0, sb.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, sb.jsx)("span", {
                className: "FrontlineObjective",
                children: bb
              }), (0, sb.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, sb.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: hb("frontlineHud:objective", {
                    point: bb,
                    friendly: Ub,
                    enemy: Lb
                  })
                }), (0, sb.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: hb(qb[Bb])
                })]
              }), (0, sb.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Ob).padStart(3, "0"), (0, sb.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, sb.jsx)(Tb, {
              segments: 24,
              lit: Yb
            })]
          })
        }
        if ("alert" === ub[0]) {
          const [, bb, Bb, Ob] = ub;
          return (0, sb.jsxs)("div", {
            className: zb()("FrontlinePlate", "FrontlineAlert", `Tone-${Ob}`),
            children: [(0, sb.jsx)(Qb, {}), (0, sb.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: hb(Eb[bb])
            }), (0, sb.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Bb
            })]
          })
        }
        return null
      })),
      fb = (0, Ob.memo)((function(bb) {
        let {
          view: ub
        } = bb;
        const {
          t: hb
        } = (0, vb.K)(), Bb = (0, Ob.useRef)(null), Gb = function(bb, ub) {
          const [hb, Bb] = (0, Ob.useState)(!1);
          return (0, Ob.useLayoutEffect)((() => {
            const ub = bb.current;
            if (!ub) return;
            const hb = document.querySelector(`.${ib.d}`),
              Ob = document.querySelector(`.${ib.g}`),
              Gb = () => {
                var bb;
                const Gb = ub.querySelector(".FrontlineTeamTrack"),
                  Ub = (0, Yb.getRemInPx)(),
                  Lb = ub.getBoundingClientRect().width - 2 * (null !== (bb = null === Gb || void 0 === Gb ? void 0 : Gb.getBoundingClientRect().width) && void 0 !== bb ? bb : 0),
                  Sb = window.innerWidth / 2,
                  ab = hb ? hb.getBoundingClientRect().right : 0,
                  Hb = Ob ? Ob.getBoundingClientRect().left : window.innerWidth,
                  wb = Math.min(Sb - ab, Hb - Sb) - ib.c - Lb / 2,
                  Zb = wb < 6 * Ub,
                  Xb = Zb ? (window.innerWidth - Lb) / 2 - ib.c : wb;
                ub.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(Xb,14*Ub)))}px`), Bb(Zb)
              };
            Gb();
            const Ub = new ResizeObserver(Gb);
            for (const bb of [ub, hb, Ob]) bb && Ub.observe(bb);
            return window.addEventListener("resize", Gb), () => {
              Ub.disconnect(), window.removeEventListener("resize", Gb)
            }
          }), [bb, ub]), hb
        }(Bb, "scoreboard" === ub.wire[0]);
        if ("scoreboard" !== ub.wire[0]) return null;
        const [, Ub, Lb, Sb, ab, , Hb] = ub.wire, wb = "Red" === Ub ? "Blue" : "Red";
        return (0, sb.jsxs)("div", {
          className: zb()("FrontlineScoreboardContainer", {
            Below: Gb
          }),
          children: [(0, sb.jsxs)("div", {
            ref: Bb,
            className: "FrontlineScoreboard",
            children: [(0, sb.jsx)(Qb, {}), (0, sb.jsx)(kb, {
              team: Ub,
              tickets: Lb,
              goal: ab,
              side: "Friendly"
            }), (0, sb.jsx)("div", {
              className: "FrontlinePoints",
              children: Hb.map((bb => (0, sb.jsx)(Ib, {
                className: "FrontlinePoint",
                point: bb
              }, bb[0])))
            }), (0, sb.jsx)(kb, {
              team: wb,
              tickets: Sb,
              goal: ab,
              side: "Enemy"
            })]
          }), (0, sb.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, sb.jsx)(cb, {
              endsAt: ub.endsAt
            }), (0, sb.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: hb("frontlineHud:ticketGoal", {
                goal: ab
              })
            })]
          })]
        })
      }));

    function kb(bb) {
      let {
        team: ub,
        tickets: hb,
        goal: Bb,
        side: Ob
      } = bb;
      const {
        t: Gb
      } = (0, vb.K)(), Ub = String(hb).padStart(3, "0"), Lb = Ub.search(/[1-9]/), Yb = -1 === Lb ? Ub : Ub.slice(0, Lb), Sb = Math.min(20, Math.floor(hb / Bb * 20));
      return (0, sb.jsxs)("div", {
        className: zb()("FrontlineTeamScore", Ob, `Team-${ub}`),
        children: [(0, sb.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, sb.jsx)("span", {
            className: "Lead",
            children: Yb
          }), -1 !== Lb && Ub.slice(Lb)]
        }), (0, sb.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, sb.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: Gb(Mb[ub])
          }), (0, sb.jsx)(Tb, {
            segments: 20,
            lit: Sb
          })]
        })]
      })
    }

    function Tb(bb) {
      let {
        segments: ub,
        lit: hb
      } = bb;
      return (0, sb.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: ub
        }, ((bb, ub) => (0, sb.jsx)("i", {
          className: zb()({
            Lit: ub < hb
          })
        }, ub)))
      })
    }

    function cb(bb) {
      let {
        endsAt: ub
      } = bb;
      const hb = Math.max(0, Math.ceil(mb(ub)));
      return (0, sb.jsxs)("div", {
        className: zb()("FrontlineClock", {
          Urgent: hb <= 60
        }),
        children: [Math.floor(hb / 60), ":", String(hb % 60).padStart(2, "0")]
      })
    }

    function Qb() {
      return (0, sb.jsxs)(sb.Fragment, {
        children: [(0, sb.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, sb.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var Rb = hb(36300),
      bu = hb(1144),
      uu = hb(38120),
      hu = hb(38152);
    class Bu {
      constructor(bb) {
        var ub;
        this.hud = bb, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.FZ = !1, this.lK = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.lK), null === (ub = window.visualViewport) || void 0 === ub || ub.addEventListener("resize", this.lK)
      }
      bindMarker(bb) {
        let ub = this.refs.get(bb);
        return ub || (ub = ub => {
          var hb;
          null === (hb = this.markers.get(bb)) || void 0 === hb || hb.stopObserving(), this.markers.delete(bb), ub && !this.FZ && this.markers.set(bb, this.mount(ub))
        }, this.refs.set(bb, ub)), ub
      }
      frame(bb, ub) {
        this.render = bb;
        const hb = this.hud.getScoreboard().wire;
        if ("scoreboard" === hb[0] && 0 !== this.markers.size)
          for (const [Bb, , , , , , Ob] of hb[6]) {
            const bb = this.markers.get(Bb);
            bb && Ob && (bb.target ??= [0, 0, 0], bb.target[0] = Ob[0], bb.target[1] = Ob[1] + 2.5, bb.target[2] = Ob[2], this.place(bb), this.oB(bb, ub && Math.hypot(Ob[0] - ub[0], Ob[1] - ub[1], Ob[2] - ub[2])))
          }
      }
      dispose() {
        var bb;
        this.FZ = !0, window.removeEventListener("resize", this.lK), null === (bb = window.visualViewport) || void 0 === bb || bb.removeEventListener("resize", this.lK);
        for (const ub of this.markers.values()) ub.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(bb) {
        const {
          render: ub,
          viewport: hb
        } = this;
        if (!ub || !bb.target) return;
        const Bb = (50 - ub.screenBandPct.y) / 100 * hb.height,
          Ob = {
            x: bb.halfSize.width + 8,
            top: bb.halfSize.height + 8,
            bottom: bb.halfSize.height + bb.labelsBelow + Bb
          },
          Gb = ub.projectWorldPosToViewport(bb.target),
          Ub = null !== Gb && void 0 !== Gb ? Gb : ub.projectWorldPosToScreenPos(bb.target),
          Lb = (0, hu.e)({
            x: Ub.x,
            y: Ub.y,
            text: Gb
          }, Ob, hb);
        (0, uu.b)(bb.root, Math.round(100 * Lb.x) / 100, Math.round(100 * Lb.y) / 100)
      }
      oB(bb, ub) {
        if (null === ub) return void(null !== bb.metres && (bb.metres = null, bb.distance.textContent = ""));
        const hb = Date.now();
        (null === bb.metres || (0, Rb.c)(ub, bb.metres, bb.metresShownAt)) && (bb.metres = Math.round(ub), bb.metresShownAt = hb, bb.distance.textContent = (0, vb.D)(bu.h.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(bb.metres)
        }))
      }
      mount(bb) {
        const ub = {
            root: bb,
            distance: bb.querySelector(".FrontlinePointMarkerDistance"),
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
          hb = bb.querySelector(".FrontlinePointMarkerLabels"),
          Bb = new ResizeObserver((() => {
            ub.halfSize = {
              width: Math.max(bb.offsetWidth, hb.offsetWidth) / 2,
              height: bb.offsetHeight / 2
            }, ub.labelsBelow = hb.offsetTop + hb.offsetHeight - bb.offsetHeight, this.place(ub)
          }));
        return Bb.observe(bb, {
          box: "border-box"
        }), Bb.observe(hb, {
          box: "border-box"
        }), ub.stopObserving = () => {
          Bb.disconnect()
        }, ub
      }
    }
    var Ou = hb(6174),
      Gu = hb(2440);
    const Uu = "frontlineRoundEndChanged";
    class Lu {
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
      cZ(bb) {
        const ub = "roundEnd" === bb[0] ? performance.now() + bb[5] : 0;
        this.view = {
          wire: bb,
          key: this.view.key + 1,
          endsAt: ub
        }, Sb.i.vp(Uu, this.view, !0)
      }
    }
    const Yu = (0, Ob.lazy)((() => (0, Gu.e)(hb.e(192).then((() => hb(41210))), (bb => bb.FrontlineMvpLineup)))),
      Su = [4800, 4e3, 3200],
      au = [1, 0, 2],
      Hu = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      wu = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function Zu(bb) {
      let {
        controller: ub
      } = bb;
      const hb = (0, tb.k)(Uu, ub.getView()),
        Bb = mb(hb.endsAt);
      return "roundEnd" !== hb.wire[0] || 1e3 * Bb < -2e3 ? null : (0, sb.jsx)(Xu, {
        wire: hb.wire,
        secondsLeft: Math.max(0, Math.ceil(Bb))
      }, hb.key)
    }
    const Xu = (0, Ob.memo)((function(bb) {
      let {
        wire: ub,
        secondsLeft: hb
      } = bb;
      const {
        t: Gb
      } = (0, vb.K)(), [, Ub, Lb, Yb, Sb, , ab, Hb] = ub, wb = (0, Ob.useMemo)((() => au.filter((bb => bb < Hb.length))), [Hb]), Zb = (0, Ob.useMemo)((() => wb.map((bb => {
        const [, , , , , ub, hb] = Hb[bb];
        return {
          cosmetics: Bb.map(((bb, hb) => [bb, ub[hb]])),
          size: 0 === bb ? 1.15 : .85,
          heldGun: {
            name: hb,
            aimed: 0 === bb
          },
          showAfterMs: Su[bb]
        }
      }))), [Hb, wb]);
      return (0, sb.jsxs)("div", {
        className: zb()("FrontlineRoundEnd", `Result-${Ub}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, sb.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, sb.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, sb.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, sb.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, sb.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (Xb = Gb(Hu[Ub]), /\p{Script=Arabic}/u.test(Xb) ? [Xb] : (0, Ou.d)(Xb)).map(((bb, ub) => (0, sb.jsx)("span", {
              style: {
                "--letter": ub
              },
              children: bb
            }, ub)))]
          }), (0, sb.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [Lb && "victory" === Ub && (0, sb.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: Gb("frontlineRoundEnd:comeback")
            }), (0, sb.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, sb.jsx)("b", {
                className: "Friendly",
                children: Yb
              }), " \u2013 ", (0, sb.jsx)("b", {
                className: "Enemy",
                children: Sb
              })]
            })]
          })]
        }), wb.length > 0 && (0, sb.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": wb.length
          },
          children: [(0, sb.jsx)(Ob.Suspense, {
            fallback: null,
            children: (0, sb.jsx)(Yu, {
              className: "FrontlineRoundEndLineup",
              players: Zb
            })
          }), wb.map((bb => (0, sb.jsx)(pu, {
            mvp: Hb[bb],
            place: bb
          }, bb)))]
        }), (0, sb.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: Gb("frontlineRoundEnd:nextFront", {
            map: ab,
            seconds: String(hb)
          })
        })]
      });
      var Xb
    }));

    function pu(bb) {
      let {
        mvp: ub,
        place: hb
      } = bb;
      const {
        t: Bb
      } = (0, vb.K)(), [Ob, Gb, Ub, Lb, Yb] = ub, [Sb, ab] = Bb(function(bb, ub) {
        return 1 === ub && "damage" !== bb ? `frontlineRoundEnd:${bb}One` : `frontlineRoundEnd:${bb}`
      }(Ub, Lb), {
        name: "\0",
        count: Lb.toLocaleString()
      }).split("\0");
      return (0, sb.jsxs)("div", {
        className: zb()("FrontlineMvpCard", `Place-${hb+1}`, `Team-${Gb}`),
        style: {
          "--revealMs": `${Su[hb]}ms`
        },
        children: [(0, sb.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, sb.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, sb.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Bb(wu[hb])
        }), (0, sb.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [Sb, (0, sb.jsx)("span", {
            className: "FrontlineMvpName",
            children: Ob
          }), ab]
        }), (0, sb.jsx)("div", {
          className: "FrontlineMvpKit",
          children: Yb
        })]
      })
    }
    const ou = function(bb, ub, hb, Bb) {
      let {
        localPlayerId: Ub
      } = Bb;
      const Lb = new Nb,
        Yb = new Lu;
      let Sb = null,
        ab = null,
        Hb = null,
        wb = null,
        Zb = null,
        Xb = [!1, !1];
      const pb = () => {
        var bb, ub;
        const [hb, Bb] = Xb;
        null === (bb = ab) || void 0 === bb || bb.Zx(!hb), null === (ub = Hb) || void 0 === ub || ub.Zx(!Bb)
      };
      return {
        onCreate: bb => {
          Sb = bb, ab = new Kb(bb, Ub), Hb = new rb(bb, Ub), wb = new Bu(Lb), pb(), Zb = (0, Gb.t)((0, Ob.createElement)(Ob.Fragment, null, (0, Ob.createElement)(yb, {
            hud: Lb,
            crosshair: ab,
            damage: Hb,
            markers: wb
          }), (0, Ob.createElement)(Zu, {
            controller: Yb
          })))
        },
        onClose: () => {
          var bb, ub, hb, Bb;
          null === (bb = Zb) || void 0 === bb || bb(), null === (ub = ab) || void 0 === ub || ub.dispose(), ab = null, null === (hb = Hb) || void 0 === hb || hb.dispose(), Hb = null, null === (Bb = wb) || void 0 === Bb || Bb.dispose(), wb = null, Sb = null
        },
        onAfterRender: (bb, ub) => {
          var hb, Bb, Ob, Gb;
          null === (hb = ab) || void 0 === hb || hb.frame(bb, ub.tanHalfFovY), null === (Bb = Hb) || void 0 === Bb || Bb.frame(ub.cameraHeading), null === (Ob = wb) || void 0 === Ob || Ob.frame(ub, null !== (Gb = Sb) && void 0 !== Gb && Gb.checkValid(Ub) ? Sb.iK(Ub) : null)
        },
        onReceivedMessageFromServer: (bb, ub) => {
          "frontlineHud" === bb ? Lb.cZ(ub) : "frontlineScoreboard" === bb ? Lb.receiveScoreboard(ub) : "frontlineRoundEnd" === bb ? Yb.cZ(ub) : "frontlinePrefs" === bb && (Xb = ub, pb())
        }
      }
    }
  },
  6174: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    const Bb = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Ob(bb) {
      return null === Bb ? Array.from(bb) : Array.from(Bb.segment(bb), (bb => {
        let {
          segment: ub
        } = bb;
        return ub
      }))
    }
  },
  38120: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      d: () => Gb
    });
    const Bb = new WeakMap;

    function Ob(bb) {
      let ub = Bb.get(bb);
      return ub || (ub = {
        hidden: bb.hidden,
        x: NaN,
        y: NaN
      }, Bb.set(bb, ub)), ub
    }

    function Gb(bb, ub) {
      const hb = Ob(bb);
      hb.hidden !== ub && (hb.hidden = ub, bb.hidden = ub)
    }

    function Ub(bb, ub, hb) {
      const Bb = Ob(bb);
      Bb.x === ub && Bb.y === hb || (Bb.x = ub, Bb.y = hb, bb.style.translate = `${ub}vw ${hb}vh`)
    }
  },
  36704: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    const Bb = {
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
for (const bb in modules) Object.freeze(modules[bb]);