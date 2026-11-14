export const id = 16;
export const ids = [16];
export const modules = {
  35245: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => fc,
      f: () => mB,
      i: () => Tc,
      j: () => Oc
    });
    var Vc = nc(8187),
      Ic = nc(35247),
      rB = nc(35253),
      uc = nc(7684),
      sc = nc(1252),
      Mc = nc(73),
      Pc = nc(83),
      qB = nc(957);

    function Oc() {
      var cB;
      return (0, sc.g)(Ic.d, (0, Ic.o)()), (0, qB.jsx)(qB.Fragment, {
        children: null === (cB = (0, Ic.o)()) || void 0 === cB ? void 0 : cB.content
      })
    }

    function Tc(cB) {
      var Bc;
      let {
        show: nc
      } = cB;
      (0, sc.g)(Ic.d, (0, Ic.o)());
      const Pc = null === (Bc = (0, Ic.o)()) || void 0 === Bc ? void 0 : Bc.menu;
      return (0, Mc.useEffect)((() => {
        nc || (null === Pc || void 0 === Pc || Pc.onClose(), (0, rB.q)())
      }), [nc, Pc]), (0, Mc.useEffect)((() => nc ? (0, uc.f)(rB.x, rB.h) : void 0), [nc]), (0, qB.jsx)(Vc.d, {
        showing: nc,
        globallyUniqueKey: "clientGameMenu",
        children: null === Pc || void 0 === Pc ? void 0 : Pc.content
      })
    }

    function fc(cB) {
      let {
        placement: Bc = "bottom"
      } = cB;
      return (0, qB.jsx)("div", {
        id: `clientGameHud-${Bc}`,
        style: {
          display: "contents"
        }
      })
    }

    function mB(cB) {
      let {
        children: Bc,
        placement: nc = "bottom"
      } = cB;
      const [Vc, Ic] = (0, Mc.useState)(null);
      return (0, Mc.useEffect)((() => {
        Ic(document.getElementById(`clientGameHud-${nc}`))
      }), [nc]), Vc ? (0, Pc.createPortal)(Bc, Vc) : null
    }
  },
  35549: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Mc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(73),
      uc = nc(1536),
      sc = nc(957);
    const Mc = (0, rB.forwardRef)((function(cB, Bc) {
      let {
        text: nc,
        className: Vc,
        children: rB
      } = cB;
      return nc.hasText ? (0, sc.jsx)("div", {
        ref: Bc,
        className: Ic()("HudTextPanel", Vc, {
          NoBackground: !nc.showBackground
        }),
        children: null !== rB && void 0 !== rB ? rB : (0, sc.jsx)(uc.e, {
          text: nc.content
        })
      }) : null
    }))
  },
  35543: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => qB,
      g: () => Oc,
      i: () => Tc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(35549),
      uc = nc(73),
      sc = nc(1946),
      Mc = nc(981),
      Pc = nc(957);
    const qB = "InGameHeaderContainer",
      Oc = "TopRightElements",
      Tc = (0, uc.memo)((function() {
        const [cB] = (0, Mc.e)(), Bc = (0, sc.m)("middleTextTop"), nc = (0, uc.useRef)(null), [Vc, Tc] = (0, uc.useState)(!1), fc = Bc.hasText;
        return (0, uc.useLayoutEffect)((() => {
          const cB = nc.current;
          if (!cB) return;
          const Bc = document.querySelector(`.${qB}`),
            Vc = document.querySelector(`.${Oc}`),
            Ic = () => {
              const nc = cB.getBoundingClientRect(),
                Ic = Bc ? Bc.getBoundingClientRect().right : 0,
                rB = Vc ? Vc.getBoundingClientRect().left : window.innerWidth,
                uc = nc.left < Ic + 8,
                sc = nc.right > rB - 8;
              Tc(uc || sc)
            };
          Ic();
          const rB = new ResizeObserver(Ic);
          return rB.observe(cB), Bc && rB.observe(Bc), Vc && rB.observe(Vc), () => {
            rB.disconnect()
          }
        }), [fc, Bc.content, cB]), fc ? (0, Pc.jsx)("div", {
          className: Ic()("MiddleTextTopContainer", {
            MiddleTextTopBelow: Vc
          }),
          children: (0, Pc.jsx)(rB.b, {
            ref: nc,
            className: "MiddleTextTop",
            text: Bc
          })
        }) : null
      }))
  },
  8187: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB
    });
    var Vc = nc(3648),
      Ic = nc(3652);

    function rB(cB) {
      let {
        children: Bc,
        showing: nc,
        globallyUniqueKey: rB,
        alwaysMountChildren: uc = !1,
        doGameplayStartStopOnShow: sc = !0,
        keepsMovement: Mc = !1
      } = cB;
      return (0, Ic.c)(!0, nc, rB, Mc), (0, Vc.c)(sc, nc), nc || uc ? Bc : null
    }
  },
  35337: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic
    });
    const Vc = [{
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

    function Ic(cB, Bc, nc) {
      const Ic = Math.abs(cB - Bc),
        rB = Date.now() - nc;
      for (const uc of Vc)
        if (cB < uc.maxDist) return Ic >= uc.hardUpdateDist || rB > uc.timeBetweenSoftChecks && Ic >= uc.softUpdateDist;
      return !1
    }
  },
  7684: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB,
      f: () => Ic
    });
    let Vc = null;
    const Ic = function(cB) {
        const Bc = {
          cycle: cB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Vc = Bc, () => {
          Vc === Bc && (Vc = null)
        }
      },
      rB = () => {
        var cB;
        return null !== (cB = Vc) && void 0 !== cB && cB.canCycle() ? Vc.cycle : null
      }
  },
  37057: (cB, Bc, nc) => {
    function Vc(cB, Bc, nc) {
      var Vc;
      const {
        width: Ic,
        height: rB
      } = nc, uc = null !== (Vc = cB.text) && void 0 !== Vc ? Vc : cB, sc = (uc.x / 100 - .5) * Ic, Mc = (uc.y / 100 - .5) * rB, Pc = Ic / 2 - Bc.x;
      if (null !== cB.text && Math.abs(sc) <= Pc && Mc >= Bc.top - rB / 2 && Mc <= rB / 2 - Bc.bottom) return {
        x: uc.x,
        y: uc.y
      };
      const qB = Math.min(0 === sc ? 1 / 0 : Pc / Math.abs(sc), Mc > 0 ? (rB / 2 - Bc.bottom) / Mc : Mc < 0 ? (Bc.top - rB / 2) / Mc : 1 / 0);
      return !Number.isFinite(qB) || qB < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + sc * qB / Ic * 100,
        y: 50 + Mc * qB / rB * 100
      }
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  35253: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      h: () => ec,
      i: () => tB,
      m: () => sc,
      p: () => Tc,
      q: () => Sc,
      t: () => Oc,
      w: () => zB,
      x: () => mB,
      y: () => yB
    });
    var Vc = nc(27),
      Ic = nc(35);
    const rB = "clientGameInventoryButtonsChanged",
      uc = new Map;

    function sc() {
      return [...uc.values()].sort(((cB, Bc) => {
        var nc, Vc;
        return (null !== (nc = cB.order) && void 0 !== nc ? nc : 0) - (null !== (Vc = Bc.order) && void 0 !== Vc ? Vc : 0)
      }))
    }
    let Mc = null;

    function Pc(cB) {
      Mc = cB
    }
    let qB = !1;

    function Oc(cB) {
      qB = !0;
      try {
        cB.onClick()
      } finally {
        qB = !1
      }
      cB.panel && "clientGame" === Vc.d.get("openInGameMenuName") && Pc(cB.id)
    }

    function Tc() {
      return qB
    }

    function fc() {
      return sc().filter((cB => cB.panel && !cB.disabled))
    }

    function mB(cB) {
      const Bc = fc(),
        nc = Bc.findIndex((cB => cB.id === Mc));
      return !(nc < 0 || Bc.length < 2) && (Oc(Bc[(nc + cB + Bc.length) % Bc.length]), !0)
    }

    function ec() {
      return null !== Mc && fc().length > 1
    }

    function tB() {
      Pc(null)
    }

    function Sc() {
      "inventory" !== Vc.d.get("openInGameMenuName") && Pc(null)
    }

    function yB() {
      const cB = Mc;
      return Pc(null), cB
    }

    function zB(cB) {
      return uc.set(cB.id, cB), Ic.i.Vu(rB, sc(), !0), () => {
        uc.get(cB.id) === cB && (uc.delete(cB.id), Ic.i.Vu(rB, sc()))
      }
    }
  },
  35247: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc,
      f: () => tB,
      j: () => Sc,
      m: () => Tc,
      o: () => Pc,
      s: () => ec,
      w: () => fc,
      x: () => qB
    });
    var Vc = nc(27),
      Ic = nc(35),
      rB = nc(1142),
      uc = nc(35253);
    const sc = "clientGameUiChanged";
    let Mc = null;

    function Pc() {
      return Mc
    }

    function qB(cB, Bc) {
      const nc = {
        content: cB,
        menu: Bc
      };
      return Mc = nc, Ic.i.Vu(sc, Mc, !0), () => {
        Mc === nc && (Mc = null, mB = !1, tB(), Ic.i.Vu(sc, null))
      }
    }
    let Oc = null;

    function Tc() {
      return Oc
    }

    function fc(cB) {
      return Oc = cB, () => {
        Oc === cB && (Oc = null)
      }
    }
    let mB = !1;

    function ec() {
      const cB = Vc.d.get("openInGameMenuName");
      "clientGame" !== cB && (mB = "inventory" === cB), (0, uc.p)() || (0, uc.i)(), (0, rB.o)("InGameMenu"), Vc.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tB() {
      yB(!1)
    }

    function Sc() {
      yB(mB)
    }

    function yB(cB) {
      "clientGame" === Vc.d.get("openInGameMenuName") && Vc.d.set({
        openInGameMenuName: cB ? "inventory" : null
      }), cB || (0, uc.i)(), mB = !1
    }
  },
  37731: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => tn
    });
    const Vc = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var Ic = nc(73),
      rB = nc(35247),
      uc = nc(35628),
      sc = nc(35267),
      Mc = nc(1495),
      Pc = nc(35);
    const qB = {
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
    const Oc = 32;

    function Tc(cB, Bc, nc, Vc) {
      return {
        tag: "line",
        attrs: {
          x1: cB,
          y1: Bc,
          x2: nc,
          y2: Vc,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function fc(cB) {
      return {
        tag: "circle",
        attrs: {
          cx: Oc,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oc,
          r: cB,
          class: "Fill"
        }
      }
    }

    function mB(cB, Bc) {
      return {
        tag: "path",
        attrs: {
          d: cB,
          "stroke-width": Bc
        }
      }
    }

    function ec(cB, Bc, nc) {
      return {
        tag: "circle",
        attrs: {
          cx: Oc,
          cy: Oc,
          r: cB,
          "stroke-width": Bc,
          class: nc
        }
      }
    }

    function tB(cB, Bc, nc) {
      return {
        tag: "text",
        attrs: {
          x: cB,
          y: Bc,
          class: "Fill Label"
        },
        text: nc
      }
    }
    const Sc = {
      pistol: cB => [Tc(Oc, Oc - cB - 5, Oc, Oc - cB), Tc(Oc - cB - 5, Oc, Oc - cB, Oc), Tc(Oc + cB, Oc, Oc + cB + 5, Oc), fc(1.4)],
      rifle: cB => [Tc(Oc, Oc - cB - 8, Oc, Oc - cB), Tc(Oc, Oc + cB, Oc, Oc + cB + 8), Tc(Oc - cB - 8, Oc, Oc - cB, Oc), Tc(Oc + cB, Oc, Oc + cB + 8, Oc), fc(1)],
      smg: cB => {
        const Bc = Math.PI / 2,
          nc = [];
        for (let uc = 0; uc < 4; uc++) nc.push((Ic = uc * Bc + .35, rB = (uc + 1) * Bc - .35, mB(`M${Oc+(Vc=6+cB)*Math.cos(Ic)} ${Oc+Vc*Math.sin(Ic)} A${Vc} ${Vc} 0 0 1 ${Oc+Vc*Math.cos(rB)} ${Oc+Vc*Math.sin(rB)}`, 2)));
        var Vc, Ic, rB;
        return [...nc, fc(1.4)]
      },
      shotgun: cB => [ec(cB, 3, "Ring Outline"), ec(cB, 1.5, "Ring")],
      marksman: cB => [mB(`M${26-cB/2} ${39+cB/2} L32 33 L${38+cB/2} ${39+cB/2}`, 2), Tc(14 - cB, Oc, 24 - cB, Oc, 1.5), Tc(40 + cB, Oc, 50 + cB, Oc, 1.5), Tc(14 - cB, 30, 14 - cB, 34, 1.5), Tc(50 + cB, 30, 50 + cB, 34, 1.5)],
      machineGun: cB => {
        const Bc = 10 + cB,
          nc = [];
        for (const [Vc, Ic] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) nc.push(mB(`M${Oc+Vc*Bc} ${Oc+Ic*(Bc-5)} L${Oc+Vc*Bc} ${Oc+Ic*Bc} L${Oc+Vc*(Bc-5)} ${Oc+Ic*Bc}`, 2));
        return [...nc, Tc(Oc, 28, Oc, 36, 1.5), Tc(28, Oc, 36, Oc, 1.5)]
      },
      launcher: () => [Tc(14, 30, 50, 30, 1.5), Tc(Oc, 24, Oc, 52, 1.5), Tc(28, 38, 36, 38, 1.5), Tc(29, 44, 35, 44, 1.5), Tc(30, 50, 34, 50, 1.5), tB(38, 40, "100"), tB(37, 46, "200"), fc(1.4, 30)],
      melee: () => [mB("M32 26 L38 32 L32 38 L26 32 Z", 1.5), fc(1.2)],
      throwable: () => [fc(1.6)]
    };

    function yB(cB) {
      let {
        tag: Bc,
        attrs: nc,
        text: Vc
      } = cB, Ic = `<${Bc}`;
      for (const [rB, uc] of Object.entries(nc)) Ic += ` ${rB}="${uc}"`;
      return void 0 === Vc ? `${Ic}/>` : `${Ic}>${Vc}</${Bc}>`
    }
    class zB {
      constructor(cB, Bc) {
        this.api = cB, this.localPlayerId = Bc, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = cB => {
          this.element = cB, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, cB && !this.enabled && (cB.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, Mc.getRemInPx)()))
        }, this.tokens = [Pc.i.subscribe("aimingOverlay", (cB => {
          this.sniperOverlay = "sniper" === cB
        })), Pc.i.subscribe("mouseState", (cB => {
          let {
            isDown: Bc
          } = cB;
          this.mouseDown = Bc
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      jnc(cB) {
        cB !== this.enabled && (this.enabled = cB, this.drawnVisible = null, cB || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(cB, Bc) {
        var nc, Vc;
        if (!this.enabled) return;
        const {
          api: Ic
        } = this, rB = Ic.isAlive(this.localPlayerId) && null !== (nc = null === (Vc = Ic.lMc(this.localPlayerId)) || void 0 === Vc ? void 0 : Vc.name) && void 0 !== nc ? nc : null, uc = (sc = rB) && qB[sc] || null;
        var sc;
        if (this.setOwnsCrosshair(null !== uc), !this.element) return;
        const Mc = Ic.getHeldGunInaccuracy(),
          Pc = null !== Mc,
          Oc = null !== uc && !this.sniperOverlay && Ic.isCrosshairShown();
        if (Oc !== this.drawnVisible && (this.drawnVisible = Oc, this.element.style.display = Oc ? "block" : "none"), !Oc) return;
        const Tc = Pc ? function(cB) {
            return "launcher" === cB || "melee" === cB || "throwable" === cB ? "none" : "shotgun" === cB ? "cone" : "offset"
          }(uc) : "none",
          fc = null !== Mc && void 0 !== Mc ? Mc : 0;
        "cone" === Tc ? this.drawCone(uc, this.coneRadiusVh(fc, Bc) * this.gapPerVh, cB) : (this.coneDrawn = !1, this.draw(uc, "none" === Tc ? 2 : this.offsetGap(fc)));
        const mB = !Pc && this.mouseDown;
        mB !== this.drawnPressed && (this.drawnPressed = mB, this.element.classList.toggle("Pressed", mB))
      }
      dispose() {
        for (const cB of this.tokens) Pc.i.unsubscribe(cB);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(cB, Bc) {
        var nc, Vc;
        cB !== this.drawnFamily ? (this.drawnFamily = cB, this.drawnGap = Bc, this.element.innerHTML = function(cB, Bc) {
          return `<svg viewBox="0 0 64 64">${Sc[cB](Bc).map(yB).join("")}</svg>`
        }(cB, Bc), this.shapes = Array.from(null !== (nc = null === (Vc = this.element.firstElementChild) || void 0 === Vc ? void 0 : Vc.children) && void 0 !== nc ? nc : [])) : Bc !== this.drawnGap && (this.drawnGap = Bc, function(cB, Bc, nc) {
          const Vc = Sc[Bc](nc);
          for (let Ic = 0; Ic < Vc.length; Ic++)
            for (const [Bc, nc] of Object.entries(Vc[Ic].attrs)) {
              const Vc = String(nc);
              cB[Ic].getAttribute(Bc) !== Vc && cB[Ic].setAttribute(Bc, Vc)
            }
        }(this.shapes, cB, Bc))
      }
      drawCone(cB, Bc, nc) {
        cB === this.drawnFamily && this.coneDrawn ? this.shownRadius += (Bc - this.shownRadius) * (1 - Math.exp(-nc / 80)) : this.shownRadius = Bc, this.coneDrawn = !0, this.draw(cB, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(cB, Bc) {
        if (!(Bc > 0)) return 1;
        const nc = cB * uc.g / 2;
        return Math.max(50 * Math.tan(nc) / Bc, 1)
      }
      offsetGap(cB) {
        const Bc = 2 + ((0, sc.c)(cB) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * Bc) / 2)
      }
      setOwnsCrosshair(cB) {
        cB !== this.ownsCrosshair && (this.ownsCrosshair = cB, document.body.classList.toggle("FrontlineCustomCrosshair", cB))
      }
    }
    const pc = "FrontlineCustomDamage",
      hc = .45,
      aB = .2;
    class lc {
      constructor(cB, Bc) {
        this.api = cB, this.localPlayerId = Bc, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.U6 = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = cB => {
          var Bc, nc;
          this.clearHits(), this.root = cB, this.lowLayer = null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.querySelector(".FrontlineDamageLow")) && void 0 !== Bc ? Bc : null, this.arcLayer = null !== (nc = null === cB || void 0 === cB ? void 0 : cB.querySelector(".FrontlineDamageArcs")) && void 0 !== nc ? nc : null, this.showRoot(), this.drawLow()
        }, this.token = Pc.i.subscribe("damagedByOtherPlayer", (cB => {
          let {
            direction: Bc,
            ycc: nc
          } = cB;
          this.onHurt(Bc, nc)
        })), this.syncHealth(), document.body.classList.add(pc)
      }
      jnc(cB) {
        cB !== this.enabled && (this.enabled = cB, document.body.classList.toggle(pc, cB), cB || this.clearHits(), this.showRoot())
      }
      frame(cB) {
        this.syncHealth(), this.cameraHeading = cB;
        for (const Bc of this.arcs) this.drawArcAngle(Bc)
      }
      dispose() {
        Pc.i.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(pc)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const cB = this.api.getClientOption(this.localPlayerId, "_health"),
          Bc = this.api.getClientOption(this.localPlayerId, "_shield"),
          nc = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(cB, this.readHealth) && Object.is(Bc, this.readShield) && Object.is(nc, this.readMaxHealth)) return;
        if (this.readHealth = cB, this.readShield = Bc, this.readMaxHealth = nc, null === cB || void 0 === cB || !nc) return this.lastHealthPool = null, this.maxHealth = null, this.U6 = 1, this.dead = !1, void this.drawLow();
        const Vc = cB + (null !== Bc && void 0 !== Bc ? Bc : 0);
        if (null !== this.lastHealthPool && Vc < this.lastHealthPool) {
          const cB = performance.now(),
            Bc = (this.lastHealthPool - Vc) / nc;
          this.lastDrop = cB - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + Bc,
            at: this.lastDrop.at
          } : {
            frac: Bc,
            at: cB
          }
        }
        this.dead = cB <= 0, this.dead && this.clearHits(), this.lastHealthPool = Vc, this.maxHealth = nc, this.U6 = cB > 0 ? cB / nc : 1, this.drawLow()
      }
      onHurt(cB, Bc) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const nc = Math.min(1, this.takeDamageFrac(Bc) / .3);
        null !== cB && this.showArc(cB, nc), this.flashEdge(null === cB ? null : cB - this.cameraHeading, .4 + .6 * nc)
      }
      takeDamageFrac(cB) {
        if (void 0 !== cB && this.maxHealth) return cB / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: Bc
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, Bc
      }
      drawLow() {
        if (!this.lowLayer) return;
        const cB = Lc((hc - this.U6) / .25),
          Bc = Lc((aB - this.U6) / .15000000000000002),
          nc = this.U6 < hc;
        this.lowLayer.classList.toggle("Active", nc), this.lowLayer.classList.toggle("Critical", this.U6 < aB), this.lowLayer.style.opacity = String(nc ? .55 + .3 * cB + .15 * Bc : 0)
      }
      showArc(cB, Bc) {
        var nc, Vc;
        if (!this.arcLayer) return;
        let Ic = this.arcs.find((Bc => Yc(Bc.direction, cB) < .6));
        if (!Ic) {
          const Bc = document.createElement("div");
          Bc.className = "FrontlineDamageArc", this.arcLayer.appendChild(Bc), Ic = {
            element: Bc,
            direction: cB,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Ic)
        }
        Ic.direction = cB, this.drawArcAngle(Ic);
        const rB = Ic.fade ? Number(getComputedStyle(Ic.element).opacity) : 0;
        null === (nc = Ic.fade) || void 0 === nc || nc.cancel(), null === (Vc = Ic.pop) || void 0 === Vc || Vc.cancel();
        const uc = Ic.element.animate([{
          opacity: rB
        }, {
          opacity: 1,
          offset: .08
        }, {
          opacity: 1,
          offset: .52,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0
        }], {
          duration: 1800,
          fill: "forwards"
        });
        Ic.fade = uc, Ic.pop = Ic.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * Bc
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const sc = Ic;
        uc.onfinish = () => {
          sc.fade === uc && (sc.element.remove(), gB(this.arcs, sc))
        }
      }
      drawArcAngle(cB) {
        const Bc = cB.direction - this.cameraHeading;
        (null === cB.drawnAngle || Math.abs(Bc - cB.drawnAngle) > .005) && (cB.drawnAngle = Bc, cB.element.style.rotate = `${Bc}rad`)
      }
      flashEdge(cB, Bc) {
        var nc, Vc, Ic;
        if (!this.root) return;
        let rB = this.flashes.find((Bc => null === Bc.angle || null === cB ? Bc.angle === cB : Yc(Bc.angle, cB) < .5));
        if (!rB) {
          const Bc = document.createElement("div");
          Bc.className = "FrontlineDamageFlash", this.root.insertBefore(Bc, this.arcLayer), rB = {
            element: Bc,
            angle: cB,
            level: 0,
            animation: null
          }, this.flashes.push(rB)
        }
        const uc = null === (nc = rB.animation) || void 0 === nc || null === (Vc = nc.effect) || void 0 === Vc ? void 0 : Vc.getComputedTiming().progress,
          sc = null === uc || void 0 === uc ? 0 : rB.level * (1 - uc);
        rB.level = Math.min(1, Math.max(Bc, sc + .6 * Bc)), rB.angle = cB;
        const {
          x: Mc,
          y: Pc,
          rx: qB,
          ry: Oc
        } = function(cB, Bc) {
          const nc = window.innerWidth,
            Vc = window.innerHeight;
          if (null === cB) return {
            x: nc / 2,
            y: Vc / 2,
            rx: 0,
            ry: 0
          };
          const Ic = Math.sin(cB),
            rB = -Math.cos(cB),
            uc = nc / 2 / Math.max(1e-6, Math.abs(Ic)),
            sc = Vc / 2 / Math.max(1e-6, Math.abs(rB)),
            Mc = Math.min(uc, sc),
            Pc = Math.round(nc / 2 + Ic * Mc),
            qB = Math.round(Vc / 2 + rB * Mc),
            Oc = Vc / 100 * (.85 + .25 * Bc),
            Tc = uc <= sc,
            fc = Math.round((Tc ? 30 : 74) * Oc),
            mB = Math.round((Tc ? 58 : 26) * Oc);
          return {
            x: Pc,
            y: qB,
            rx: fc,
            ry: mB
          }
        }(cB, rB.level), {
          style: Tc
        } = rB.element;
        rB.element.classList.toggle("Everywhere", null === cB), Tc.setProperty("--glowX", `${Mc}px`), Tc.setProperty("--glowY", `${Pc}px`), Tc.setProperty("--glowRx", `${qB}px`), Tc.setProperty("--glowRy", `${Oc}px`), Tc.transformOrigin = `${Mc}px ${Pc}px`, null === (Ic = rB.animation) || void 0 === Ic || Ic.cancel();
        const fc = rB.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: rB.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * rB.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * rB.level
        });
        rB.animation = fc;
        const mB = rB;
        fc.onfinish = () => {
          mB.animation === fc && (mB.element.remove(), gB(this.flashes, mB))
        }
      }
      clearHits() {
        for (const Vc of this.arcs) {
          var cB, Bc;
          null === (cB = Vc.fade) || void 0 === cB || cB.cancel(), null === (Bc = Vc.pop) || void 0 === Bc || Bc.cancel(), Vc.element.remove()
        }
        this.arcs.length = 0;
        for (const Vc of this.flashes) {
          var nc;
          null === (nc = Vc.animation) || void 0 === nc || nc.cancel(), Vc.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function Yc(cB, Bc) {
      return Math.abs(Math.atan2(Math.sin(cB - Bc), Math.cos(cB - Bc)))
    }

    function Lc(cB) {
      return Math.max(0, Math.min(1, cB))
    }

    function gB(cB, Bc) {
      const nc = cB.indexOf(Bc); - 1 !== nc && cB.splice(nc, 1)
    }
    var Uc = nc(912),
      bB = nc.n(Uc),
      Zc = nc(35245),
      Qc = nc(35543),
      Cc = nc(1051),
      vB = nc(1252);
    const Dc = "frontlineHudChanged",
      Nc = "frontlineScoreboardChanged";
    class Ec {
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
      EV(cB) {
        this.wire = cB, Pc.i.Vu(Dc, cB, !0)
      }
      receiveScoreboard(cB) {
        let Bc = "scoreboard" === cB[0] ? performance.now() + cB[5] : 0;
        const nc = this.scoreboard.endsAt;
        0 !== Bc && 0 !== nc && Math.abs(Bc - nc) < 1e3 && (Bc = nc), this.scoreboard = {
          wire: cB,
          endsAt: Bc
        }, Pc.i.Vu(Nc, this.scoreboard, !0)
      }
    }
    var oc = nc(957);
    const Wc = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function wc(cB) {
      const [Bc, nc] = (0, Ic.useState)((() => (cB - performance.now()) / 1e3));
      return (0, Ic.useEffect)((() => {
        if (0 === cB) return;
        const Bc = () => {
          nc((cB - performance.now()) / 1e3)
        };
        Bc();
        const Vc = window.setInterval(Bc, 250);
        return () => {
          window.clearInterval(Vc)
        }
      }), [cB]), Bc
    }

    function kB(cB) {
      let {
        className: Bc,
        point: nc
      } = cB;
      const [Vc, Ic, rB, uc, sc, Mc] = nc;
      return (0, oc.jsxs)("div", {
        className: bB()(Bc, `Owner-${Ic||"None"}`, `Leader-${uc||"None"}`, {
          Contested: sc,
          Here: Mc
        }),
        children: [(0, oc.jsx)("span", {
          className: "FrontlinePointLetter",
          children: Vc
        }), (0, oc.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${rB}%`
          }
        })]
      })
    }
    const Xc = (0, Ic.memo)((function(cB) {
        let {
          points: Bc,
          markers: nc
        } = cB;
        const {
          t: Vc
        } = (0, Cc.x)();
        return Bc ? (0, oc.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: Bc.map((cB => {
            const [Bc, , , , , , , Ic] = cB;
            return (0, oc.jsxs)("div", {
              ref: nc.bindMarker(Bc),
              className: "FrontlinePointMarker",
              children: [(0, oc.jsx)(kB, {
                className: "FrontlinePointMarkerTile",
                point: cB
              }), (0, oc.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [Ic && (0, oc.jsx)("span", {
                  className: bB()("FrontlinePointMarkerHomeTurf", `Team-${Ic}`),
                  children: Vc("frontlineHud:homeTurf", {
                    team: Vc(Wc[Ic])
                  })
                }), (0, oc.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, Bc)
          }))
        }) : null
      })),
      Hc = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      Fc = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function Jc(cB) {
      let {
        hud: Bc,
        crosshair: nc,
        damage: Vc,
        markers: Ic
      } = cB;
      const rB = (0, vB.g)(Dc, Bc.getWire()),
        uc = (0, vB.g)(Nc, Bc.getScoreboard());
      return (0, oc.jsxs)(oc.Fragment, {
        children: [(0, oc.jsx)(jB, {
          damage: Vc
        }), (0, oc.jsx)(Xc, {
          points: "scoreboard" === uc.wire[0] ? uc.wire[6] : null,
          markers: Ic
        }), (0, oc.jsx)(iB, {
          view: uc
        }), (0, oc.jsx)("div", {
          className: "FrontlineReticle",
          ref: nc.bindElement
        }), (0, oc.jsx)(Zc.f, {
          children: (0, oc.jsx)(Rc, {
            wire: rB
          })
        })]
      })
    }
    const jB = (0, Ic.memo)((function(cB) {
        let {
          damage: Bc
        } = cB;
        return (0, oc.jsxs)("div", {
          className: "FrontlineDamage",
          ref: Bc.bindElement,
          children: [(0, oc.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, oc.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, oc.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      Rc = (0, Ic.memo)((function(cB) {
        let {
          wire: Bc
        } = cB;
        const {
          t: nc
        } = (0, Cc.x)();
        if ("capture" === Bc[0]) {
          const [, cB, Vc, Ic, rB, uc, sc] = Bc, Mc = Math.round(Ic / 100 * 24);
          return (0, oc.jsxs)("div", {
            className: bB()("FrontlinePlate", `Status-${Vc}`, `Leader-${rB||"None"}`),
            children: [(0, oc.jsx)(Gc, {}), (0, oc.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, oc.jsx)("span", {
                className: "FrontlineObjective",
                children: cB
              }), (0, oc.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, oc.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: nc("frontlineHud:objective", {
                    point: cB,
                    friendly: uc,
                    enemy: sc
                  })
                }), (0, oc.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: nc(Hc[Vc])
                })]
              }), (0, oc.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(Ic).padStart(3, "0"), (0, oc.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, oc.jsx)(xB, {
              segments: 24,
              lit: Mc
            })]
          })
        }
        if ("alert" === Bc[0]) {
          const [, cB, Vc, Ic] = Bc;
          return (0, oc.jsxs)("div", {
            className: bB()("FrontlinePlate", "FrontlineAlert", `Tone-${Ic}`),
            children: [(0, oc.jsx)(Gc, {}), (0, oc.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: nc(Fc[cB])
            }), (0, oc.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: Vc
            })]
          })
        }
        return null
      })),
      iB = (0, Ic.memo)((function(cB) {
        let {
          view: Bc
        } = cB;
        const {
          t: nc
        } = (0, Cc.x)(), Vc = (0, Ic.useRef)(null), rB = function(cB, Bc) {
          const [nc, Vc] = (0, Ic.useState)(!1);
          return (0, Ic.useLayoutEffect)((() => {
            const Bc = cB.current;
            if (!Bc) return;
            const nc = document.querySelector(`.${Qc.d}`),
              Ic = document.querySelector(`.${Qc.g}`),
              rB = () => {
                var cB;
                const rB = Bc.querySelector(".FrontlineTeamTrack"),
                  uc = (0, Mc.getRemInPx)(),
                  sc = Bc.getBoundingClientRect().width - 2 * (null !== (cB = null === rB || void 0 === rB ? void 0 : rB.getBoundingClientRect().width) && void 0 !== cB ? cB : 0),
                  Pc = window.innerWidth / 2,
                  qB = nc ? nc.getBoundingClientRect().right : 0,
                  Oc = Ic ? Ic.getBoundingClientRect().left : window.innerWidth,
                  Tc = Math.min(Pc - qB, Oc - Pc) - Ac - sc / 2,
                  fc = Tc < 6 * uc,
                  mB = fc ? (window.innerWidth - sc) / 2 - Ac : Tc;
                Bc.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(mB,14*uc)))}px`), Vc(fc)
              };
            rB();
            const uc = new ResizeObserver(rB);
            for (const cB of [Bc, nc, Ic]) cB && uc.observe(cB);
            return window.addEventListener("resize", rB), () => {
              uc.disconnect(), window.removeEventListener("resize", rB)
            }
          }), [cB, Bc]), nc
        }(Vc, "scoreboard" === Bc.wire[0]);
        if ("scoreboard" !== Bc.wire[0]) return null;
        const [, uc, sc, Pc, qB, , Oc] = Bc.wire, Tc = "Red" === uc ? "Blue" : "Red";
        return (0, oc.jsxs)("div", {
          className: bB()("FrontlineScoreboardContainer", {
            Below: rB
          }),
          children: [(0, oc.jsxs)("div", {
            ref: Vc,
            className: "FrontlineScoreboard",
            children: [(0, oc.jsx)(Gc, {}), (0, oc.jsx)(Kc, {
              team: uc,
              tickets: sc,
              goal: qB,
              side: "Friendly"
            }), (0, oc.jsx)("div", {
              className: "FrontlinePoints",
              children: Oc.map((cB => (0, oc.jsx)(kB, {
                className: "FrontlinePoint",
                point: cB
              }, cB[0])))
            }), (0, oc.jsx)(Kc, {
              team: Tc,
              tickets: Pc,
              goal: qB,
              side: "Enemy"
            })]
          }), (0, oc.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, oc.jsx)(dc, {
              endsAt: Bc.endsAt
            }), (0, oc.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: nc("frontlineHud:ticketGoal", {
                goal: qB
              })
            })]
          })]
        })
      }));

    function Kc(cB) {
      let {
        team: Bc,
        tickets: nc,
        goal: Vc,
        side: Ic
      } = cB;
      const {
        t: rB
      } = (0, Cc.x)(), uc = String(nc).padStart(3, "0"), sc = uc.search(/[1-9]/), Mc = -1 === sc ? uc : uc.slice(0, sc), Pc = Math.min(20, Math.floor(nc / Vc * 20));
      return (0, oc.jsxs)("div", {
        className: bB()("FrontlineTeamScore", Ic, `Team-${Bc}`),
        children: [(0, oc.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, oc.jsx)("span", {
            className: "Lead",
            children: Mc
          }), -1 !== sc && uc.slice(sc)]
        }), (0, oc.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, oc.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: rB(Wc[Bc])
          }), (0, oc.jsx)(xB, {
            segments: 20,
            lit: Pc
          })]
        })]
      })
    }

    function xB(cB) {
      let {
        segments: Bc,
        lit: nc
      } = cB;
      return (0, oc.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: Bc
        }, ((cB, Bc) => (0, oc.jsx)("i", {
          className: bB()({
            Lit: Bc < nc
          })
        }, Bc)))
      })
    }

    function dc(cB) {
      let {
        endsAt: Bc
      } = cB;
      const nc = Math.max(0, Math.ceil(wc(Bc)));
      return (0, oc.jsxs)("div", {
        className: bB()("FrontlineClock", {
          Urgent: nc <= 60
        }),
        children: [Math.floor(nc / 60), ":", String(nc % 60).padStart(2, "0")]
      })
    }
    const Ac = 8;

    function Gc() {
      return (0, oc.jsxs)(oc.Fragment, {
        children: [(0, oc.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, oc.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var cn = nc(35337),
      BB = nc(1117),
      nB = nc(37057);
    class VB {
      constructor(cB) {
        var Bc;
        this.hud = cB, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.CV = !1, this.ZZ = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.ZZ), null === (Bc = window.visualViewport) || void 0 === Bc || Bc.addEventListener("resize", this.ZZ)
      }
      bindMarker(cB) {
        let Bc = this.refs.get(cB);
        return Bc || (Bc = Bc => {
          var nc;
          null === (nc = this.markers.get(cB)) || void 0 === nc || nc.stopObserving(), this.markers.delete(cB), Bc && !this.CV && this.markers.set(cB, this.mount(Bc))
        }, this.refs.set(cB, Bc)), Bc
      }
      frame(cB, Bc) {
        this.render = cB;
        const nc = this.hud.getScoreboard().wire;
        if ("scoreboard" === nc[0] && 0 !== this.markers.size)
          for (const [Vc, , , , , , Ic] of nc[6]) {
            const cB = this.markers.get(Vc);
            cB && Ic && (cB.target ??= [0, 0, 0], cB.target[0] = Ic[0], cB.target[1] = Ic[1] + 2.5, cB.target[2] = Ic[2], this.place(cB), this.l_(cB, Bc && Math.hypot(Ic[0] - Bc[0], Ic[1] - Bc[1], Ic[2] - Bc[2])))
          }
      }
      dispose() {
        var cB;
        this.CV = !0, window.removeEventListener("resize", this.ZZ), null === (cB = window.visualViewport) || void 0 === cB || cB.removeEventListener("resize", this.ZZ);
        for (const Bc of this.markers.values()) Bc.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(cB) {
        const {
          render: Bc,
          viewport: nc
        } = this;
        if (!Bc || !cB.target) return;
        const Vc = (50 - Bc.screenBandPct.y) / 100 * nc.height,
          Ic = {
            x: cB.halfSize.width + 8,
            top: cB.halfSize.height + 8,
            bottom: cB.halfSize.height + cB.labelsBelow + Vc
          },
          rB = Bc.projectWorldPosToViewport(cB.target),
          uc = null !== rB && void 0 !== rB ? rB : Bc.projectWorldPosToScreenPos(cB.target),
          sc = (0, nB.d)({
            x: uc.x,
            y: uc.y,
            text: rB
          }, Ic, nc);
        cB.root.style.translate = `${sc.x}vw ${sc.y}vh`
      }
      l_(cB, Bc) {
        if (null === Bc) return void(null !== cB.metres && (cB.metres = null, cB.distance.textContent = ""));
        const nc = Date.now();
        (null === cB.metres || (0, cn.c)(Bc, cB.metres, cB.metresShownAt)) && (cB.metres = Math.round(Bc), cB.metresShownAt = nc, cB.distance.textContent = (0, Cc.s)(BB.e.get().getCurrentLanguageCode(), "frontlineHud:markerDistance", {
          distance: String(cB.metres)
        }))
      }
      mount(cB) {
        const Bc = {
            root: cB,
            distance: cB.querySelector(".FrontlinePointMarkerDistance"),
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
          nc = cB.querySelector(".FrontlinePointMarkerLabels"),
          Vc = new ResizeObserver((() => {
            Bc.halfSize = {
              width: Math.max(cB.offsetWidth, nc.offsetWidth) / 2,
              height: cB.offsetHeight / 2
            }, Bc.labelsBelow = nc.offsetTop + nc.offsetHeight - cB.offsetHeight, this.place(Bc)
          }));
        return Vc.observe(cB, {
          box: "border-box"
        }), Vc.observe(nc, {
          box: "border-box"
        }), Bc.stopObserving = () => {
          Vc.disconnect()
        }, Bc
      }
    }
    var IB = nc(5423),
      rn = nc(2048);
    const uB = "frontlineRoundEndChanged";
    class sB {
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
      EV(cB) {
        const Bc = "roundEnd" === cB[0] ? performance.now() + cB[5] : 0;
        this.view = {
          wire: cB,
          key: this.view.key + 1,
          endsAt: Bc
        }, Pc.i.Vu(uB, this.view, !0)
      }
    }
    const MB = (0, Ic.lazy)((() => (0, rn.e)(nc.e(200).then((() => nc(39701))), (cB => cB.FrontlineMvpLineup)))),
      PB = [4800, 4e3, 3200],
      qn = [1, 0, 2],
      OB = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      TB = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function fB(cB) {
      let {
        controller: Bc
      } = cB;
      const nc = (0, vB.g)(uB, Bc.getView()),
        Vc = wc(nc.endsAt);
      return "roundEnd" !== nc.wire[0] || 1e3 * Vc < -2e3 ? null : (0, oc.jsx)(mn, {
        wire: nc.wire,
        secondsLeft: Math.max(0, Math.ceil(Vc))
      }, nc.key)
    }
    const mn = (0, Ic.memo)((function(cB) {
      let {
        wire: Bc,
        secondsLeft: nc
      } = cB;
      const {
        t: rB
      } = (0, Cc.x)(), [, uc, sc, Mc, Pc, , qB, Oc] = Bc, Tc = (0, Ic.useMemo)((() => qn.filter((cB => cB < Oc.length))), [Oc]), fc = (0, Ic.useMemo)((() => Tc.map((cB => {
        const [, , , , , Bc, nc] = Oc[cB];
        return {
          cosmetics: Vc.map(((cB, nc) => [cB, Bc[nc]])),
          size: 0 === cB ? 1.15 : .85,
          heldGun: {
            name: nc,
            aimed: 0 === cB
          },
          showAfterMs: PB[cB]
        }
      }))), [Oc, Tc]);
      return (0, oc.jsxs)("div", {
        className: bB()("FrontlineRoundEnd", `Result-${uc}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, oc.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, oc.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, oc.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, oc.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, oc.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (mB = rB(OB[uc]), /\p{Script=Arabic}/u.test(mB) ? [mB] : (0, IB.d)(mB)).map(((cB, Bc) => (0, oc.jsx)("span", {
              style: {
                "--letter": Bc
              },
              children: cB
            }, Bc)))]
          }), (0, oc.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [sc && "victory" === uc && (0, oc.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: rB("frontlineRoundEnd:comeback")
            }), (0, oc.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, oc.jsx)("b", {
                className: "Friendly",
                children: Mc
              }), " \u2013 ", (0, oc.jsx)("b", {
                className: "Enemy",
                children: Pc
              })]
            })]
          })]
        }), Tc.length > 0 && (0, oc.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": Tc.length
          },
          children: [(0, oc.jsx)(Ic.Suspense, {
            fallback: null,
            children: (0, oc.jsx)(MB, {
              className: "FrontlineRoundEndLineup",
              players: fc
            })
          }), Tc.map((cB => (0, oc.jsx)(eB, {
            mvp: Oc[cB],
            place: cB
          }, cB)))]
        }), (0, oc.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: rB("frontlineRoundEnd:nextFront", {
            map: qB,
            seconds: String(nc)
          })
        })]
      });
      var mB
    }));

    function eB(cB) {
      let {
        mvp: Bc,
        place: nc
      } = cB;
      const {
        t: Vc
      } = (0, Cc.x)(), [Ic, rB, uc, sc, Mc] = Bc, [Pc, qB] = Vc(function(cB, Bc) {
        return 1 === Bc && "damage" !== cB ? `frontlineRoundEnd:${cB}One` : `frontlineRoundEnd:${cB}`
      }(uc, sc), {
        name: "\0",
        count: sc.toLocaleString()
      }).split("\0");
      return (0, oc.jsxs)("div", {
        className: bB()("FrontlineMvpCard", `Place-${nc+1}`, `Team-${rB}`),
        style: {
          "--revealMs": `${PB[nc]}ms`
        },
        children: [(0, oc.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, oc.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, oc.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: Vc(TB[nc])
        }), (0, oc.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [Pc, (0, oc.jsx)("span", {
            className: "FrontlineMvpName",
            children: Ic
          }), qB]
        }), (0, oc.jsx)("div", {
          className: "FrontlineMvpKit",
          children: Mc
        })]
      })
    }
    const tn = function(cB, Bc, nc, Vc) {
      let {
        localPlayerId: uc
      } = Vc;
      const sc = new Ec,
        Mc = new sB;
      let Pc = null,
        qB = null,
        Oc = null,
        Tc = null,
        fc = null,
        mB = [!1, !1];
      const ec = () => {
        var cB, Bc;
        const [nc, Vc] = mB;
        null === (cB = qB) || void 0 === cB || cB.jnc(!nc), null === (Bc = Oc) || void 0 === Bc || Bc.jnc(!Vc)
      };
      return {
        onCreate: cB => {
          Pc = cB, qB = new zB(cB, uc), Oc = new lc(cB, uc), Tc = new VB(sc), ec(), fc = (0, rB.x)((0, Ic.createElement)(Ic.Fragment, null, (0, Ic.createElement)(Jc, {
            hud: sc,
            crosshair: qB,
            damage: Oc,
            markers: Tc
          }), (0, Ic.createElement)(fB, {
            controller: Mc
          })))
        },
        onClose: () => {
          var cB, Bc, nc, Vc;
          null === (cB = fc) || void 0 === cB || cB(), null === (Bc = qB) || void 0 === Bc || Bc.dispose(), qB = null, null === (nc = Oc) || void 0 === nc || nc.dispose(), Oc = null, null === (Vc = Tc) || void 0 === Vc || Vc.dispose(), Tc = null, Pc = null
        },
        onAfterRender: (cB, Bc) => {
          var nc, Vc, Ic, rB;
          null === (nc = qB) || void 0 === nc || nc.frame(cB, Bc.tanHalfFovY), null === (Vc = Oc) || void 0 === Vc || Vc.frame(Bc.cameraHeading), null === (Ic = Tc) || void 0 === Ic || Ic.frame(Bc, null !== (rB = Pc) && void 0 !== rB && rB.checkValid(uc) ? Pc.rC(uc) : null)
        },
        onReceivedMessageFromServer: (cB, Bc) => {
          "frontlineHud" === cB ? sc.EV(Bc) : "frontlineScoreboard" === cB ? sc.receiveScoreboard(Bc) : "frontlineRoundEnd" === cB ? Mc.EV(Bc) : "frontlinePrefs" === cB && (mB = Bc, ec())
        }
      }
    }
  },
  5423: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic
    });
    const Vc = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function Ic(cB) {
      return null === Vc ? Array.from(cB) : Array.from(Vc.segment(cB), (cB => {
        let {
          segment: Bc
        } = cB;
        return Bc
      }))
    }
  },
  35651: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc
    });
    const Vc = {
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
for (const cB in modules) Object.freeze(modules[cB]);