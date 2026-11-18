export const id = 17;
export const ids = [17];
export const modules = {
  35370: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => qb,
      f: () => sy,
      g: () => ey,
      k: () => Ky
    });
    var Uy = Wy(8408),
      hy = Wy(35379),
      fy = Wy(35383),
      Zy = Wy(7911),
      cb = Wy(1268),
      Py = Wy(55),
      oy = Wy(70),
      By = Wy(952);

    function Ky() {
      var yb;
      return (0, cb.m)(hy.e, (0, hy.s)()), (0, By.jsx)(By.Fragment, {
        children: null === (yb = (0, hy.s)()) || void 0 === yb ? void 0 : yb.content
      })
    }

    function ey(yb) {
      var bb;
      let {
        show: Wy
      } = yb;
      (0, cb.m)(hy.e, (0, hy.s)());
      const oy = null === (bb = (0, hy.s)()) || void 0 === bb ? void 0 : bb.menu;
      return (0, Py.useEffect)((() => {
        var yb;
        Wy || (null === oy || void 0 === oy || null === (yb = oy.onClose) || void 0 === yb || yb.call(oy), (0, fy.l)())
      }), [Wy, oy]), (0, Py.useEffect)((() => Wy ? (0, Zy.f)(fy.t, fy.e) : void 0), [Wy]), (0, By.jsx)(Uy.b, {
        showing: Wy,
        globallyUniqueKey: "clientGameMenu",
        children: null === oy || void 0 === oy ? void 0 : oy.content
      })
    }

    function qb(yb) {
      let {
        placement: bb = "bottom"
      } = yb;
      return (0, By.jsx)("div", {
        id: `clientGameHud-${bb}`,
        style: {
          display: "contents"
        }
      })
    }

    function sy(yb) {
      let {
        children: bb,
        placement: Wy = "bottom"
      } = yb;
      const [Uy, hy] = (0, Py.useState)(null);
      return (0, Py.useEffect)((() => {
        hy(document.getElementById(`clientGameHud-${Wy}`))
      }), [Wy]), Uy ? (0, oy.createPortal)(bb, Uy) : null
    }
  },
  8408: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(3739),
      hy = Wy(3742);

    function fy(yb) {
      let {
        children: bb,
        showing: Wy,
        globallyUniqueKey: fy,
        alwaysMountChildren: Zy = !1,
        doGameplayStartStopOnShow: cb = !0,
        keepsMovement: Py = !1
      } = yb;
      return (0, hy.b)(!0, Wy, fy, Py), (0, Uy.b)(cb, Wy), Wy || Zy ? bb : null
    }
  },
  35490: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      g: () => Zy,
      i: () => cb,
      m: () => Py
    });
    var Uy = Wy(55),
      hy = Wy(974);
    const fy = 8,
      Zy = "InGameHeaderContainer",
      cb = "TopRightElements";

    function Py(yb) {
      const [bb] = (0, hy.d)(), [Wy, Py] = (0, Uy.useState)(!1);
      return (0, Uy.useLayoutEffect)((() => {
        if (!yb) return;
        const bb = document.querySelector(`.${Zy}`),
          Wy = document.querySelector(`.${cb}`),
          Uy = () => {
            const Uy = yb.getBoundingClientRect(),
              hy = bb ? bb.getBoundingClientRect().right : 0,
              Zy = Wy ? Wy.getBoundingClientRect().left : window.innerWidth,
              cb = Uy.left < hy + fy,
              oy = Uy.right > Zy - fy;
            Py(cb || oy)
          };
        Uy();
        const hy = new ResizeObserver(Uy);
        return hy.observe(yb), bb && hy.observe(bb), Wy && hy.observe(Wy), () => {
          hy.disconnect()
        }
      }), [yb, bb]), Wy
    }
  },
  35487: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    const Uy = [{
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

    function hy(yb, bb, Wy) {
      const hy = Math.abs(yb - bb),
        fy = Date.now() - Wy;
      for (const Zy of Uy)
        if (yb < Zy.maxDist) return hy >= Zy.hardUpdateDist || fy > Zy.timeBetweenSoftChecks && hy >= Zy.softUpdateDist;
      return !1
    }
  },
  7911: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      f: () => hy
    });
    let Uy = null;
    const hy = function(yb) {
        const bb = {
          cycle: yb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Uy = bb, () => {
          Uy === bb && (Uy = null)
        }
      },
      fy = () => {
        var yb;
        return null !== (yb = Uy) && void 0 !== yb && yb.canCycle() ? Uy.cycle : null
      }
  },
  37211: (yb, bb, Wy) => {
    function Uy(yb, bb, Wy) {
      var Uy;
      const {
        width: hy,
        height: fy
      } = Wy, Zy = null !== (Uy = yb.text) && void 0 !== Uy ? Uy : yb, cb = (Zy.x / 100 - .5) * hy, Py = (Zy.y / 100 - .5) * fy, oy = hy / 2 - bb.x;
      if (null !== yb.text && Math.abs(cb) <= oy && Py >= bb.top - fy / 2 && Py <= fy / 2 - bb.bottom) return {
        x: Zy.x,
        y: Zy.y
      };
      const By = Math.min(0 === cb ? 1 / 0 : oy / Math.abs(cb), Py > 0 ? (fy / 2 - bb.bottom) / Py : Py < 0 ? (bb.top - fy / 2) / Py : 1 / 0);
      return !Number.isFinite(By) || By < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + cb * By / hy * 100,
        y: 50 + Py * By / fy * 100
      }
    }
    Wy.d(bb, {
      d: () => Uy
    })
  },
  35383: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      e: () => Sy,
      g: () => Ey,
      j: () => cb,
      k: () => ey,
      l: () => ly,
      p: () => Ky,
      s: () => Cy,
      t: () => sy,
      w: () => mb
    });
    var Uy = Wy(19),
      hy = Wy(23);
    const fy = "clientGameInventoryButtonsChanged",
      Zy = new Map;

    function cb() {
      return [...Zy.values()].sort(((yb, bb) => {
        var Wy, Uy;
        return (null !== (Wy = yb.order) && void 0 !== Wy ? Wy : 0) - (null !== (Uy = bb.order) && void 0 !== Uy ? Uy : 0)
      }))
    }
    let Py = null;

    function oy(yb) {
      Py = yb
    }
    let By = !1;

    function Ky(yb) {
      By = !0;
      try {
        yb.onClick()
      } finally {
        By = !1
      }
      yb.panel && "clientGame" === Uy.d.get("openInGameMenuName") && oy(yb.id)
    }

    function ey() {
      return By
    }

    function qb() {
      return cb().filter((yb => yb.panel && !yb.disabled))
    }

    function sy(yb) {
      const bb = qb(),
        Wy = bb.findIndex((yb => yb.id === Py));
      return !(Wy < 0 || bb.length < 2) && (Ky(bb[(Wy + yb + bb.length) % bb.length]), !0)
    }

    function Sy() {
      return null !== Py && qb().length > 1
    }

    function Ey() {
      oy(null)
    }

    function ly() {
      "inventory" !== Uy.d.get("openInGameMenuName") && oy(null)
    }

    function mb() {
      const yb = Py;
      return oy(null), yb
    }

    function Cy(yb) {
      return Zy.set(yb.id, yb), hy.g.EZ(fy, cb(), !0), () => {
        Zy.get(yb.id) === yb && (Zy.delete(yb.id), hy.g.EZ(fy, cb()))
      }
    }
  },
  35379: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      h: () => Ey,
      k: () => ly,
      o: () => ey,
      s: () => oy,
      t: () => Sy,
      v: () => qb,
      z: () => By
    });
    var Uy = Wy(19),
      hy = Wy(23),
      fy = Wy(1145),
      Zy = Wy(35383);
    const cb = "clientGameUiChanged";
    let Py = null;

    function oy() {
      return Py
    }

    function By(yb, bb) {
      const Wy = {
        content: yb,
        menu: bb
      };
      return Py = Wy, hy.g.EZ(cb, Py, !0), () => {
        Py === Wy && (Py = null, sy = !1, Ey(), hy.g.EZ(cb, null))
      }
    }
    let Ky = null;

    function ey() {
      return Ky
    }

    function qb(yb) {
      return Ky = yb, () => {
        Ky === yb && (Ky = null)
      }
    }
    let sy = !1;

    function Sy() {
      const yb = Uy.d.get("openInGameMenuName");
      "clientGame" !== yb && (sy = "inventory" === yb), (0, Zy.k)() || (0, Zy.g)(), (0, fy.h)("InGameMenu"), Uy.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Ey() {
      mb(!1)
    }

    function ly() {
      mb(sy)
    }

    function mb(yb) {
      "clientGame" === Uy.d.get("openInGameMenuName") && Uy.d.set({
        openInGameMenuName: yb ? "inventory" : null
      }), yb || (0, Zy.g)(), sy = !1
    }
  },
  38051: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Eb
    });
    const Uy = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var hy = Wy(55),
      fy = Wy(35379),
      Zy = Wy(35746),
      cb = Wy(35397),
      Py = Wy(1496),
      oy = Wy(23);
    const By = {
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
    const Ky = 32;

    function ey(yb, bb, Wy, Uy) {
      return {
        tag: "line",
        attrs: {
          x1: yb,
          y1: bb,
          x2: Wy,
          y2: Uy,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function qb(yb) {
      return {
        tag: "circle",
        attrs: {
          cx: Ky,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ky,
          r: yb,
          class: "Fill"
        }
      }
    }

    function sy(yb, bb) {
      return {
        tag: "path",
        attrs: {
          d: yb,
          "stroke-width": bb
        }
      }
    }

    function Sy(yb, bb, Wy) {
      return {
        tag: "circle",
        attrs: {
          cx: Ky,
          cy: Ky,
          r: yb,
          "stroke-width": bb,
          class: Wy
        }
      }
    }

    function Ey(yb, bb, Wy) {
      return {
        tag: "text",
        attrs: {
          x: yb,
          y: bb,
          class: "Fill Label"
        },
        text: Wy
      }
    }
    const ly = {
      pistol: yb => [ey(Ky, Ky - yb - 5, Ky, Ky - yb), ey(Ky - yb - 5, Ky, Ky - yb, Ky), ey(Ky + yb, Ky, Ky + yb + 5, Ky), qb(1.4)],
      rifle: yb => [ey(Ky, Ky - yb - 8, Ky, Ky - yb), ey(Ky, Ky + yb, Ky, Ky + yb + 8), ey(Ky - yb - 8, Ky, Ky - yb, Ky), ey(Ky + yb, Ky, Ky + yb + 8, Ky), qb(1)],
      smg: yb => {
        const bb = Math.PI / 2,
          Wy = [];
        for (let Zy = 0; Zy < 4; Zy++) Wy.push((hy = Zy * bb + .35, fy = (Zy + 1) * bb - .35, sy(`M${Ky+(Uy=6+yb)*Math.cos(hy)} ${Ky+Uy*Math.sin(hy)} A${Uy} ${Uy} 0 0 1 ${Ky+Uy*Math.cos(fy)} ${Ky+Uy*Math.sin(fy)}`, 2)));
        var Uy, hy, fy;
        return [...Wy, qb(1.4)]
      },
      shotgun: yb => [Sy(yb, 3, "Ring Outline"), Sy(yb, 1.5, "Ring")],
      marksman: yb => [sy(`M${26-yb/2} ${39+yb/2} L32 33 L${38+yb/2} ${39+yb/2}`, 2), ey(14 - yb, Ky, 24 - yb, Ky, 1.5), ey(40 + yb, Ky, 50 + yb, Ky, 1.5), ey(14 - yb, 30, 14 - yb, 34, 1.5), ey(50 + yb, 30, 50 + yb, 34, 1.5)],
      machineGun: yb => {
        const bb = 10 + yb,
          Wy = [];
        for (const [Uy, hy] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) Wy.push(sy(`M${Ky+Uy*bb} ${Ky+hy*(bb-5)} L${Ky+Uy*bb} ${Ky+hy*bb} L${Ky+Uy*(bb-5)} ${Ky+hy*bb}`, 2));
        return [...Wy, ey(Ky, 28, Ky, 36, 1.5), ey(28, Ky, 36, Ky, 1.5)]
      },
      launcher: () => [ey(14, 30, 50, 30, 1.5), ey(Ky, 24, Ky, 52, 1.5), ey(28, 38, 36, 38, 1.5), ey(29, 44, 35, 44, 1.5), ey(30, 50, 34, 50, 1.5), Ey(38, 40, "100"), Ey(37, 46, "200"), qb(1.4, 30)],
      melee: () => [sy("M32 26 L38 32 L32 38 L26 32 Z", 1.5), qb(1.2)],
      throwable: () => [qb(1.6)]
    };

    function mb(yb) {
      let {
        tag: bb,
        attrs: Wy,
        text: Uy
      } = yb, hy = `<${bb}`;
      for (const [fy, Zy] of Object.entries(Wy)) hy += ` ${fy}="${Zy}"`;
      return void 0 === Uy ? `${hy}/>` : `${hy}>${Uy}</${bb}>`
    }
    class Cy {
      constructor(yb, bb) {
        this.api = yb, this.localPlayerId = bb, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = yb => {
          this.element = yb, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, yb && !this.enabled && (yb.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, Py.getRemInPx)()))
        }, this.tokens = [oy.g.subscribe("aimingOverlay", (yb => {
          this.sniperOverlay = "sniper" === yb
        })), oy.g.subscribe("mouseState", (yb => {
          let {
            isDown: bb
          } = yb;
          this.mouseDown = bb
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      dJ(yb) {
        yb !== this.enabled && (this.enabled = yb, this.drawnVisible = null, yb || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(yb, bb) {
        var Wy, Uy;
        if (!this.enabled) return;
        const {
          api: hy
        } = this, fy = hy.isAlive(this.localPlayerId) && null !== (Wy = null === (Uy = hy.MPy(this.localPlayerId)) || void 0 === Uy ? void 0 : Uy.name) && void 0 !== Wy ? Wy : null, Zy = (cb = fy) && By[cb] || null;
        var cb;
        if (this.setOwnsCrosshair(null !== Zy), !this.element) return;
        const Py = hy.getHeldGunInaccuracy(),
          oy = null !== Py,
          Ky = null !== Zy && !this.sniperOverlay && hy.isCrosshairShown();
        if (Ky !== this.drawnVisible && (this.drawnVisible = Ky, this.element.style.display = Ky ? "block" : "none"), !Ky) return;
        const ey = oy ? function(yb) {
            return "launcher" === yb || "melee" === yb || "throwable" === yb ? "none" : "shotgun" === yb ? "cone" : "offset"
          }(Zy) : "none",
          qb = null !== Py && void 0 !== Py ? Py : 0;
        "cone" === ey ? this.drawCone(Zy, this.coneRadiusVh(qb, bb) * this.gapPerVh, yb) : (this.coneDrawn = !1, this.draw(Zy, "none" === ey ? 2 : this.offsetGap(qb)));
        const sy = !oy && this.mouseDown;
        sy !== this.drawnPressed && (this.drawnPressed = sy, this.element.classList.toggle("Pressed", sy))
      }
      dispose() {
        for (const yb of this.tokens) oy.g.unsubscribe(yb);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(yb, bb) {
        var Wy, Uy;
        yb !== this.drawnFamily ? (this.drawnFamily = yb, this.drawnGap = bb, this.element.innerHTML = function(yb, bb) {
          return `<svg viewBox="0 0 64 64">${ly[yb](bb).map(mb).join("")}</svg>`
        }(yb, bb), this.shapes = Array.from(null !== (Wy = null === (Uy = this.element.firstElementChild) || void 0 === Uy ? void 0 : Uy.children) && void 0 !== Wy ? Wy : [])) : bb !== this.drawnGap && (this.drawnGap = bb, function(yb, bb, Wy) {
          const Uy = ly[bb](Wy);
          for (let hy = 0; hy < Uy.length; hy++)
            for (const [bb, Wy] of Object.entries(Uy[hy].attrs)) {
              const Uy = String(Wy);
              yb[hy].getAttribute(bb) !== Uy && yb[hy].setAttribute(bb, Uy)
            }
        }(this.shapes, yb, bb))
      }
      drawCone(yb, bb, Wy) {
        yb === this.drawnFamily && this.coneDrawn ? this.shownRadius += (bb - this.shownRadius) * (1 - Math.exp(-Wy / 80)) : this.shownRadius = bb, this.coneDrawn = !0, this.draw(yb, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(yb, bb) {
        if (!(bb > 0)) return 1;
        const Wy = yb * Zy.h / 2;
        return Math.max(50 * Math.tan(Wy) / bb, 1)
      }
      offsetGap(yb) {
        const bb = 2 + ((0, cb.d)(yb) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * bb) / 2)
      }
      setOwnsCrosshair(yb) {
        yb !== this.ownsCrosshair && (this.ownsCrosshair = yb, document.body.classList.toggle("FrontlineCustomCrosshair", yb))
      }
    }
    const Ty = "FrontlineCustomDamage",
      Vy = .45,
      Jy = .2;
    class gb {
      constructor(yb, bb) {
        this.api = yb, this.localPlayerId = bb, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.Hx = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = yb => {
          var bb, Wy;
          this.clearHits(), this.root = yb, this.lowLayer = null !== (bb = null === yb || void 0 === yb ? void 0 : yb.querySelector(".FrontlineDamageLow")) && void 0 !== bb ? bb : null, this.arcLayer = null !== (Wy = null === yb || void 0 === yb ? void 0 : yb.querySelector(".FrontlineDamageArcs")) && void 0 !== Wy ? Wy : null, this.showRoot(), this.drawLow()
        }, this.token = oy.g.subscribe("damagedByOtherPlayer", (yb => {
          let {
            direction: bb,
            Bx: Wy
          } = yb;
          this.onHurt(bb, Wy)
        })), this.syncHealth(), document.body.classList.add(Ty)
      }
      dJ(yb) {
        yb !== this.enabled && (this.enabled = yb, document.body.classList.toggle(Ty, yb), yb || this.clearHits(), this.showRoot())
      }
      frame(yb) {
        this.syncHealth(), this.cameraHeading = yb;
        for (const bb of this.arcs) this.drawArcAngle(bb)
      }
      dispose() {
        oy.g.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Ty)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const yb = this.api.getClientOption(this.localPlayerId, "_health"),
          bb = this.api.getClientOption(this.localPlayerId, "_shield"),
          Wy = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(yb, this.readHealth) && Object.is(bb, this.readShield) && Object.is(Wy, this.readMaxHealth)) return;
        if (this.readHealth = yb, this.readShield = bb, this.readMaxHealth = Wy, null === yb || void 0 === yb || !Wy) return this.lastHealthPool = null, this.maxHealth = null, this.Hx = 1, this.dead = !1, void this.drawLow();
        const Uy = yb + (null !== bb && void 0 !== bb ? bb : 0);
        if (null !== this.lastHealthPool && Uy < this.lastHealthPool) {
          const yb = performance.now(),
            bb = (this.lastHealthPool - Uy) / Wy;
          this.lastDrop = yb - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + bb,
            at: this.lastDrop.at
          } : {
            frac: bb,
            at: yb
          }
        }
        this.dead = yb <= 0, this.dead && this.clearHits(), this.lastHealthPool = Uy, this.maxHealth = Wy, this.Hx = yb > 0 ? yb / Wy : 1, this.drawLow()
      }
      onHurt(yb, bb) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const Wy = Math.min(1, this.takeDamageFrac(bb) / .3);
        null !== yb && this.showArc(yb, Wy), this.flashEdge(null === yb ? null : yb - this.cameraHeading, .4 + .6 * Wy)
      }
      takeDamageFrac(yb) {
        if (void 0 !== yb && this.maxHealth) return yb / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: bb
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, bb
      }
      drawLow() {
        if (!this.lowLayer) return;
        const yb = Oy((Vy - this.Hx) / .25),
          bb = Oy((Jy - this.Hx) / .15000000000000002),
          Wy = this.Hx < Vy;
        this.lowLayer.classList.toggle("Active", Wy), this.lowLayer.classList.toggle("Critical", this.Hx < Jy), this.lowLayer.style.opacity = String(Wy ? .55 + .3 * yb + .15 * bb : 0)
      }
      showArc(yb, bb) {
        var Wy, Uy;
        if (!this.arcLayer) return;
        let hy = this.arcs.find((bb => Gy(bb.direction, yb) < .6));
        if (!hy) {
          const bb = document.createElement("div");
          bb.className = "FrontlineDamageArc", bb.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(bb), hy = {
            element: bb,
            direction: yb,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(hy)
        }
        hy.direction = yb, this.drawArcAngle(hy);
        const fy = hy.fade ? Number(getComputedStyle(hy.element).opacity) : 0;
        null === (Wy = hy.fade) || void 0 === Wy || Wy.cancel(), null === (Uy = hy.pop) || void 0 === Uy || Uy.cancel(), hy.element.style.opacity = "1";
        const Zy = hy.element.animate([{
          opacity: fy
        }, {
          opacity: 1
        }], 144);
        hy.fade = Zy, hy.pop = hy.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * bb
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const cb = hy;
        Zy.onfinish = () => {
          if (cb.fade !== Zy) return;
          const yb = cb.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          yb.startTime = Zy.startTime, cb.fade = yb, yb.onfinish = () => {
            cb.fade === yb && (cb.element.remove(), Ry(this.arcs, cb))
          }
        }
      }
      drawArcAngle(yb) {
        const bb = yb.direction - this.cameraHeading;
        (null === yb.drawnAngle || Math.abs(bb - yb.drawnAngle) > .005) && (yb.drawnAngle = bb, yb.element.style.rotate = `${bb}rad`)
      }
      flashEdge(yb, bb) {
        var Wy, Uy, hy;
        if (!this.root) return;
        let fy = this.flashes.find((bb => null === bb.angle || null === yb ? bb.angle === yb : Gy(bb.angle, yb) < .5));
        if (!fy) {
          const bb = document.createElement("div");
          bb.className = "FrontlineDamageFlash";
          const Wy = bb.appendChild(document.createElement("div"));
          Wy.className = "FrontlineDamageFlashGlow", this.root.insertBefore(bb, this.arcLayer), fy = {
            element: bb,
            glow: Wy,
            angle: yb,
            level: 0,
            animation: null
          }, this.flashes.push(fy)
        }
        const Zy = null === (Wy = fy.animation) || void 0 === Wy || null === (Uy = Wy.effect) || void 0 === Uy ? void 0 : Uy.getComputedTiming().progress,
          cb = null === Zy || void 0 === Zy ? 0 : fy.level * (1 - Zy);
        fy.level = Math.min(1, Math.max(bb, cb + .6 * bb)), fy.angle = yb;
        const {
          x: Py,
          y: oy,
          rx: By,
          ry: Ky
        } = function(yb, bb) {
          const Wy = window.innerWidth,
            Uy = window.innerHeight;
          if (null === yb) return {
            x: Wy / 2,
            y: Uy / 2,
            rx: 0,
            ry: 0
          };
          const hy = Math.sin(yb),
            fy = -Math.cos(yb),
            Zy = Wy / 2 / Math.max(1e-6, Math.abs(hy)),
            cb = Uy / 2 / Math.max(1e-6, Math.abs(fy)),
            Py = Math.min(Zy, cb),
            oy = Math.round(Wy / 2 + hy * Py),
            By = Math.round(Uy / 2 + fy * Py),
            Ky = Uy / 100 * (.85 + .25 * bb),
            ey = Zy <= cb,
            qb = Math.round((ey ? 30 : 74) * Ky),
            sy = Math.round((ey ? 58 : 26) * Ky);
          return {
            x: oy,
            y: By,
            rx: qb,
            ry: sy
          }
        }(yb, fy.level), {
          style: ey
        } = fy.glow;
        fy.glow.classList.toggle("Everywhere", null === yb), ey.setProperty("--glowX", `${Py}px`), ey.setProperty("--glowY", `${oy}px`), ey.setProperty("--glowRx", `${By}px`), ey.setProperty("--glowRy", `${Ky}px`), fy.element.style.transformOrigin = `${Py}px ${oy}px`, null === (hy = fy.animation) || void 0 === hy || hy.cancel();
        const qb = fy.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: fy.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * fy.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * fy.level
        });
        fy.animation = qb;
        const sy = fy;
        qb.onfinish = () => {
          sy.animation === qb && (sy.element.remove(), Ry(this.flashes, sy))
        }
      }
      clearHits() {
        for (const Uy of this.arcs) {
          var yb, bb;
          null === (yb = Uy.fade) || void 0 === yb || yb.cancel(), Uy.fade = null, null === (bb = Uy.pop) || void 0 === bb || bb.cancel(), Uy.element.remove()
        }
        this.arcs.length = 0;
        for (const Uy of this.flashes) {
          var Wy;
          null === (Wy = Uy.animation) || void 0 === Wy || Wy.cancel(), Uy.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function Gy(yb, bb) {
      return Math.abs(Math.atan2(Math.sin(yb - bb), Math.cos(yb - bb)))
    }

    function Oy(yb) {
      return Math.max(0, Math.min(1, yb))
    }

    function Ry(yb, bb) {
      const Wy = yb.indexOf(bb); - 1 !== Wy && yb.splice(Wy, 1)
    }
    var vb = Wy(898),
      ib = Wy.n(vb),
      My = Wy(35370),
      Yy = Wy(35490),
      Xy = Wy(1042),
      ny = Wy(1268);
    const uy = "frontlineHudChanged",
      rb = "frontlineScoreboardChanged";
    class Hy {
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
      pU(yb) {
        this.wire = yb, oy.g.EZ(uy, yb, !0)
      }
      receiveScoreboard(yb) {
        let bb = "scoreboard" === yb[0] ? performance.now() + yb[5] : 0;
        const Wy = this.scoreboard.endsAt;
        0 !== bb && 0 !== Wy && Math.abs(bb - Wy) < 1e3 && (bb = Wy), this.scoreboard = {
          wire: yb,
          endsAt: bb
        }, oy.g.EZ(rb, this.scoreboard, !0)
      }
    }
    var ab = Wy(952);
    const Fy = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function py(yb) {
      const [bb, Wy] = (0, hy.useState)((() => (yb - performance.now()) / 1e3));
      return (0, hy.useEffect)((() => {
        if (0 === yb) return;
        const bb = () => {
          Wy((yb - performance.now()) / 1e3)
        };
        bb();
        const Uy = window.setInterval(bb, 250);
        return () => {
          window.clearInterval(Uy)
        }
      }), [yb]), bb
    }

    function Ly(yb) {
      let {
        className: bb,
        point: Wy
      } = yb;
      const [Uy, hy, fy, Zy, cb, Py] = Wy;
      return (0, ab.jsxs)("div", {
        className: ib()(bb, `Owner-${hy||"None"}`, `Leader-${Zy||"None"}`, {
          Contested: cb,
          Here: Py
        }),
        children: [(0, ab.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Uy
        }), (0, ab.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${fy}%`
          }
        })]
      })
    }
    const Qy = (0, hy.memo)((function(yb) {
        let {
          points: bb,
          markers: Wy
        } = yb;
        const {
          t: Uy
        } = (0, Xy.D)();
        return bb ? (0, ab.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: bb.map((yb => {
            const [bb, , , , , , , hy] = yb;
            return (0, ab.jsxs)("div", {
              ref: Wy.bindMarker(bb),
              className: "FrontlinePointMarker",
              children: [(0, ab.jsx)(Ly, {
                className: "FrontlinePointMarkerTile",
                point: yb
              }), (0, ab.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [hy && (0, ab.jsx)("span", {
                  className: ib()("FrontlinePointMarkerHomeTurf", `Team-${hy}`),
                  children: Uy("frontlineHud:homeTurf", {
                    team: Uy(Fy[hy])
                  })
                }), (0, ab.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, bb)
          }))
        }) : null
      })),
      jb = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      Dy = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function tb(yb) {
      let {
        hud: bb,
        crosshair: Wy,
        damage: Uy,
        markers: hy
      } = yb;
      const fy = (0, ny.m)(uy, bb.getWire()),
        Zy = (0, ny.m)(rb, bb.getScoreboard());
      return (0, ab.jsxs)(ab.Fragment, {
        children: [(0, ab.jsx)(wy, {
          damage: Uy
        }), (0, ab.jsx)(Qy, {
          points: "scoreboard" === Zy.wire[0] ? Zy.wire[6] : null,
          markers: hy
        }), (0, ab.jsx)(Ny, {
          view: Zy
        }), (0, ab.jsx)("div", {
          className: "FrontlineReticle",
          ref: Wy.bindElement
        }), (0, ab.jsx)(My.f, {
          children: (0, ab.jsx)(kb, {
            wire: fy
          })
        })]
      })
    }
    const wy = (0, hy.memo)((function(yb) {
        let {
          damage: bb
        } = yb;
        return (0, ab.jsxs)("div", {
          className: "FrontlineDamage",
          ref: bb.bindElement,
          children: [(0, ab.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, ab.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, ab.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      kb = (0, hy.memo)((function(yb) {
        let {
          wire: bb
        } = yb;
        const {
          t: Wy
        } = (0, Xy.D)();
        if ("capture" === bb[0]) {
          const [, yb, Uy, hy, fy, Zy, cb] = bb, Py = Math.round(hy / 100 * 24);
          return (0, ab.jsxs)("div", {
            className: ib()("FrontlinePlate", `Status-${Uy}`, `Leader-${fy||"None"}`),
            children: [(0, ab.jsx)(Ay, {}), (0, ab.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, ab.jsx)("span", {
                className: "FrontlineObjective",
                children: yb
              }), (0, ab.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, ab.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: Wy("frontlineHud:objective", {
                    point: yb,
                    friendly: Zy,
                    enemy: cb
                  })
                }), (0, ab.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: Wy(jb[Uy])
                })]
              }), (0, ab.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(hy).padStart(3, "0"), (0, ab.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, ab.jsx)(Iy, {
              segments: 24,
              lit: Py
            })]
          })
        }
        if ("alert" === bb[0]) {
          const [, yb, Uy, hy] = bb;
          return (0, ab.jsxs)("div", {
            className: ib()("FrontlinePlate", "FrontlineAlert", `Tone-${hy}`),
            children: [(0, ab.jsx)(Ay, {}), (0, ab.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Wy(Dy[yb])
            }), (0, ab.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Uy
            })]
          })
        }
        return null
      })),
      Ny = (0, hy.memo)((function(yb) {
        let {
          view: bb
        } = yb;
        const {
          t: Wy
        } = (0, Xy.D)(), Uy = (0, hy.useRef)(null), fy = function(yb, bb) {
          const [Wy, Uy] = (0, hy.useState)(!1);
          return (0, hy.useLayoutEffect)((() => {
            const bb = yb.current;
            if (!bb) return;
            const Wy = document.querySelector(`.${Yy.g}`),
              hy = document.querySelector(`.${Yy.i}`),
              fy = () => {
                var yb;
                const fy = bb.querySelector(".FrontlineTeamTrack"),
                  Zy = (0, Py.getRemInPx)(),
                  cb = bb.getBoundingClientRect().width - 2 * (null !== (yb = null === fy || void 0 === fy ? void 0 : fy.getBoundingClientRect().width) && void 0 !== yb ? yb : 0),
                  oy = window.innerWidth / 2,
                  By = Wy ? Wy.getBoundingClientRect().right : 0,
                  Ky = hy ? hy.getBoundingClientRect().left : window.innerWidth,
                  ey = Math.min(oy - By, Ky - oy) - Yy.c - cb / 2,
                  qb = ey < 6 * Zy,
                  sy = qb ? (window.innerWidth - cb) / 2 - Yy.c : ey;
                bb.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(sy,14*Zy)))}px`), Uy(qb)
              };
            fy();
            const Zy = new ResizeObserver(fy);
            for (const yb of [bb, Wy, hy]) yb && Zy.observe(yb);
            return window.addEventListener("resize", fy), () => {
              Zy.disconnect(), window.removeEventListener("resize", fy)
            }
          }), [yb, bb]), Wy
        }(Uy, "scoreboard" === bb.wire[0]);
        if ("scoreboard" !== bb.wire[0]) return null;
        const [, Zy, cb, oy, By, , Ky] = bb.wire, ey = "Red" === Zy ? "Blue" : "Red";
        return (0, ab.jsxs)("div", {
          className: ib()("FrontlineScoreboardContainer", {
            Below: fy
          }),
          children: [(0, ab.jsxs)("div", {
            ref: Uy,
            className: "FrontlineScoreboard",
            children: [(0, ab.jsx)(Ay, {}), (0, ab.jsx)(zb, {
              team: Zy,
              tickets: cb,
              goal: By,
              side: "Friendly"
            }), (0, ab.jsx)("div", {
              className: "FrontlinePoints",
              children: Ky.map((yb => (0, ab.jsx)(Ly, {
                className: "FrontlinePoint",
                point: yb
              }, yb[0])))
            }), (0, ab.jsx)(zb, {
              team: ey,
              tickets: oy,
              goal: By,
              side: "Enemy"
            })]
          }), (0, ab.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, ab.jsx)(xb, {
              endsAt: bb.endsAt
            }), (0, ab.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: Wy("frontlineHud:ticketGoal", {
                goal: By
              })
            })]
          })]
        })
      }));

    function zb(yb) {
      let {
        team: bb,
        tickets: Wy,
        goal: Uy,
        side: hy
      } = yb;
      const {
        t: fy
      } = (0, Xy.D)(), Zy = String(Wy).padStart(3, "0"), cb = Zy.search(/[1-9]/), Py = -1 === cb ? Zy : Zy.slice(0, cb), oy = Math.min(20, Math.floor(Wy / Uy * 20));
      return (0, ab.jsxs)("div", {
        className: ib()("FrontlineTeamScore", hy, `Team-${bb}`),
        children: [(0, ab.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, ab.jsx)("span", {
            className: "Lead",
            children: Py
          }), -1 !== cb && Zy.slice(cb)]
        }), (0, ab.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, ab.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: fy(Fy[bb])
          }), (0, ab.jsx)(Iy, {
            segments: 20,
            lit: oy
          })]
        })]
      })
    }

    function Iy(yb) {
      let {
        segments: bb,
        lit: Wy
      } = yb;
      return (0, ab.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: bb
        }, ((yb, bb) => (0, ab.jsx)("i", {
          className: ib()({
            Lit: bb < Wy
          })
        }, bb)))
      })
    }

    function xb(yb) {
      let {
        endsAt: bb
      } = yb;
      const Wy = Math.max(0, Math.ceil(py(bb)));
      return (0, ab.jsxs)("div", {
        className: ib()("FrontlineClock", {
          Urgent: Wy <= 60
        }),
        children: [Math.floor(Wy / 60), ":", String(Wy % 60).padStart(2, "0")]
      })
    }

    function Ay() {
      return (0, ab.jsxs)(ab.Fragment, {
        children: [(0, ab.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, ab.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var dy = Wy(35487),
      yW = Wy(1115),
      bW = Wy(37177),
      Wb = Wy(37211);
    class Ub {
      constructor(yb) {
        var bb;
        this.hud = yb, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.rh = !1, this.pE = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.pE), null === (bb = window.visualViewport) || void 0 === bb || bb.addEventListener("resize", this.pE)
      }
      bindMarker(yb) {
        let bb = this.refs.get(yb);
        return bb || (bb = bb => {
          var Wy;
          null === (Wy = this.markers.get(yb)) || void 0 === Wy || Wy.stopObserving(), this.markers.delete(yb), bb && !this.rh && this.markers.set(yb, this.mount(bb))
        }, this.refs.set(yb, bb)), bb
      }
      frame(yb, bb) {
        this.render = yb;
        const Wy = this.hud.getScoreboard().wire;
        if ("scoreboard" === Wy[0] && 0 !== this.markers.size)
          for (const [Uy, , , , , , hy] of Wy[6]) {
            const yb = this.markers.get(Uy);
            yb && hy && (yb.target ??= [0, 0, 0], yb.target[0] = hy[0], yb.target[1] = hy[1] + 2.5, yb.target[2] = hy[2], this.place(yb), this.aby(yb, bb && Math.hypot(hy[0] - bb[0], hy[1] - bb[1], hy[2] - bb[2])))
          }
      }
      dispose() {
        var yb;
        this.rh = !0, window.removeEventListener("resize", this.pE), null === (yb = window.visualViewport) || void 0 === yb || yb.removeEventListener("resize", this.pE);
        for (const bb of this.markers.values()) bb.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(yb) {
        const {
          render: bb,
          viewport: Wy
        } = this;
        if (!bb || !yb.target) return;
        const Uy = (50 - bb.screenBandPct.y) / 100 * Wy.height,
          hy = {
            x: yb.halfSize.width + 8,
            top: yb.halfSize.height + 8,
            bottom: yb.halfSize.height + yb.labelsBelow + Uy
          },
          fy = bb.projectWorldPosToViewport(yb.target),
          Zy = null !== fy && void 0 !== fy ? fy : bb.projectWorldPosToScreenPos(yb.target),
          cb = (0, Wb.d)({
            x: Zy.x,
            y: Zy.y,
            text: fy
          }, hy, Wy);
        (0, bW.b)(yb.root, Math.round(100 * cb.x) / 100, Math.round(100 * cb.y) / 100)
      }
      aby(yb, bb) {
        if (null === bb) return void(null !== yb.metres && (yb.metres = null, yb.distance.textContent = ""));
        const Wy = Date.now();
        (null === yb.metres || (0, dy.d)(bb, yb.metres, yb.metresShownAt)) && (yb.metres = Math.round(bb), yb.metresShownAt = Wy, yb.distance.textContent = (0, Xy.A)(yW.f.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(yb.metres)
        }))
      }
      mount(yb) {
        const bb = {
            root: yb,
            distance: yb.querySelector(".FrontlinePointMarkerDistance"),
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
          Wy = yb.querySelector(".FrontlinePointMarkerLabels"),
          Uy = new ResizeObserver((() => {
            bb.halfSize = {
              width: Math.max(yb.offsetWidth, Wy.offsetWidth) / 2,
              height: yb.offsetHeight / 2
            }, bb.labelsBelow = Wy.offsetTop + Wy.offsetHeight - yb.offsetHeight, this.place(bb)
          }));
        return Uy.observe(yb, {
          box: "border-box"
        }), Uy.observe(Wy, {
          box: "border-box"
        }), bb.stopObserving = () => {
          Uy.disconnect()
        }, bb
      }
    }
    var hb = Wy(5698),
      fb = Wy(2096);
    const Zb = "frontlineRoundEndChanged";
    class cW {
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
      pU(yb) {
        const bb = "roundEnd" === yb[0] ? performance.now() + yb[5] : 0;
        this.view = {
          wire: yb,
          key: this.view.key + 1,
          endsAt: bb
        }, oy.g.EZ(Zb, this.view, !0)
      }
    }
    const Pb = (0, hy.lazy)((() => (0, fb.b)(Wy.e(201).then((() => Wy(40234))), (yb => yb.FrontlineMvpLineup)))),
      ob = [4800, 4e3, 3200],
      Bb = [1, 0, 2],
      Kb = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      eb = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function qW(yb) {
      let {
        controller: bb
      } = yb;
      const Wy = (0, ny.m)(Zb, bb.getView()),
        Uy = py(Wy.endsAt);
      return "roundEnd" !== Wy.wire[0] || 1e3 * Uy < -2e3 ? null : (0, ab.jsx)(sb, {
        wire: Wy.wire,
        secondsLeft: Math.max(0, Math.ceil(Uy))
      }, Wy.key)
    }
    const sb = (0, hy.memo)((function(yb) {
      let {
        wire: bb,
        secondsLeft: Wy
      } = yb;
      const {
        t: fy
      } = (0, Xy.D)(), [, Zy, cb, Py, oy, , By, Ky] = bb, ey = (0, hy.useMemo)((() => Bb.filter((yb => yb < Ky.length))), [Ky]), qb = (0, hy.useMemo)((() => ey.map((yb => {
        const [, , , , , bb, Wy] = Ky[yb];
        return {
          cosmetics: Uy.map(((yb, Wy) => [yb, bb[Wy]])),
          size: 0 === yb ? 1.15 : .85,
          heldGun: {
            name: Wy,
            aimed: 0 === yb
          },
          showAfterMs: ob[yb]
        }
      }))), [Ky, ey]);
      return (0, ab.jsxs)("div", {
        className: ib()("FrontlineRoundEnd", `Result-${Zy}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, ab.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, ab.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, ab.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, ab.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, ab.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (sy = fy(Kb[Zy]), /\p{Script=Arabic}/u.test(sy) ? [sy] : (0, hb.d)(sy)).map(((yb, bb) => (0, ab.jsx)("span", {
              style: {
                "--letter": bb
              },
              children: yb
            }, bb)))]
          }), (0, ab.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [cb && "victory" === Zy && (0, ab.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: fy("frontlineRoundEnd:comeback")
            }), (0, ab.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, ab.jsx)("b", {
                className: "Friendly",
                children: Py
              }), " \u2013 ", (0, ab.jsx)("b", {
                className: "Enemy",
                children: oy
              })]
            })]
          })]
        }), ey.length > 0 && (0, ab.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": ey.length
          },
          children: [(0, ab.jsx)(hy.Suspense, {
            fallback: null,
            children: (0, ab.jsx)(Pb, {
              className: "FrontlineRoundEndLineup",
              players: qb
            })
          }), ey.map((yb => (0, ab.jsx)(Sb, {
            mvp: Ky[yb],
            place: yb
          }, yb)))]
        }), (0, ab.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: fy("frontlineRoundEnd:nextFront", {
            map: By,
            seconds: String(Wy)
          })
        })]
      });
      var sy
    }));

    function Sb(yb) {
      let {
        mvp: bb,
        place: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Xy.D)(), [hy, fy, Zy, cb, Py] = bb, [oy, By] = Uy(function(yb, bb) {
        return 1 === bb && "damage" !== yb ? `frontlineRoundEnd:${yb}One` : `frontlineRoundEnd:${yb}`
      }(Zy, cb), {
        name: "\0",
        count: cb.toLocaleString()
      }).split("\0");
      return (0, ab.jsxs)("div", {
        className: ib()("FrontlineMvpCard", `Place-${Wy+1}`, `Team-${fy}`),
        style: {
          "--revealMs": `${ob[Wy]}ms`
        },
        children: [(0, ab.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, ab.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, ab.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Uy(eb[Wy])
        }), (0, ab.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [oy, (0, ab.jsx)("span", {
            className: "FrontlineMvpName",
            children: hy
          }), By]
        }), (0, ab.jsx)("div", {
          className: "FrontlineMvpKit",
          children: Py
        })]
      })
    }
    const Eb = function(yb, bb, Wy, Uy) {
      let {
        localPlayerId: Zy
      } = Uy;
      const cb = new Hy,
        Py = new cW;
      let oy = null,
        By = null,
        Ky = null,
        ey = null,
        qb = null,
        sy = [!1, !1];
      const Sy = () => {
        var yb, bb;
        const [Wy, Uy] = sy;
        null === (yb = By) || void 0 === yb || yb.dJ(!Wy), null === (bb = Ky) || void 0 === bb || bb.dJ(!Uy)
      };
      return {
        onCreate: yb => {
          oy = yb, By = new Cy(yb, Zy), Ky = new gb(yb, Zy), ey = new Ub(cb), Sy(), qb = (0, fy.z)((0, hy.createElement)(hy.Fragment, null, (0, hy.createElement)(tb, {
            hud: cb,
            crosshair: By,
            damage: Ky,
            markers: ey
          }), (0, hy.createElement)(qW, {
            controller: Py
          })))
        },
        onClose: () => {
          var yb, bb, Wy, Uy;
          null === (yb = qb) || void 0 === yb || yb(), null === (bb = By) || void 0 === bb || bb.dispose(), By = null, null === (Wy = Ky) || void 0 === Wy || Wy.dispose(), Ky = null, null === (Uy = ey) || void 0 === Uy || Uy.dispose(), ey = null, oy = null
        },
        onAfterRender: (yb, bb) => {
          var Wy, Uy, hy, fy;
          null === (Wy = By) || void 0 === Wy || Wy.frame(yb, bb.tanHalfFovY), null === (Uy = Ky) || void 0 === Uy || Uy.frame(bb.cameraHeading), null === (hy = ey) || void 0 === hy || hy.frame(bb, null !== (fy = oy) && void 0 !== fy && fy.checkValid(Zy) ? oy.Tl(Zy) : null)
        },
        onReceivedMessageFromServer: (yb, bb) => {
          "frontlineHud" === yb ? cb.pU(bb) : "frontlineScoreboard" === yb ? cb.receiveScoreboard(bb) : "frontlineRoundEnd" === yb ? Py.pU(bb) : "frontlinePrefs" === yb && (sy = bb, Sy())
        }
      }
    }
  },
  5698: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    const Uy = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function hy(yb) {
      return null === Uy ? Array.from(yb) : Array.from(Uy.segment(yb), (yb => {
        let {
          segment: bb
        } = yb;
        return bb
      }))
    }
  },
  37177: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy,
      f: () => fy
    });
    const Uy = new WeakMap;

    function hy(yb) {
      let bb = Uy.get(yb);
      return bb || (bb = {
        hidden: yb.hidden,
        x: NaN,
        y: NaN
      }, Uy.set(yb, bb)), bb
    }

    function fy(yb, bb) {
      const Wy = hy(yb);
      Wy.hidden !== bb && (Wy.hidden = bb, yb.hidden = bb)
    }

    function Zy(yb, bb, Wy) {
      const Uy = hy(yb);
      Uy.x === bb && Uy.y === Wy || (Uy.x = bb, Uy.y = Wy, yb.style.translate = `${bb}vw ${Wy}vh`)
    }
  },
  35770: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    const Uy = {
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
for (const yb in modules) Object.freeze(modules[yb]);