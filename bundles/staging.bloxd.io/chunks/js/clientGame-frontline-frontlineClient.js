export const id = 18;
export const ids = [18];
export const modules = {
  37420: (ee, ie, He) => {
    He.d(ie, {
      b: () => pe,
      d: () => Xe,
      h: () => ke,
      j: () => Re
    });
    var ye = He(34867),
      be = He(37424),
      Me = He(37427),
      Ke = He(9446),
      Ue = He(1432),
      Fe = He(59),
      Je = He(77),
      oe = He(1228);

    function Re() {
      var ee;
      return (0, Ue.j)(be.b, (0, be.p)()), (0, oe.jsx)(oe.Fragment, {
        children: null === (ee = (0, be.p)()) || void 0 === ee ? void 0 : ee.content
      })
    }

    function ke(ee) {
      var ie;
      let {
        show: He
      } = ee;
      (0, Ue.j)(be.b, (0, be.p)());
      const Je = null === (ie = (0, be.p)()) || void 0 === ie ? void 0 : ie.menu;
      return (0, Fe.useEffect)((() => {
        var ee;
        He || (null === Je || void 0 === Je || null === (ee = Je.onClose) || void 0 === ee || ee.call(Je), (0, Me.l)())
      }), [He, Je]), (0, Fe.useEffect)((() => He ? (0, Ke.g)(Me.r, Me.e) : void 0), [He]), (0, oe.jsx)(ye.e, {
        showing: He,
        globallyUniqueKey: "clientGameMenu",
        children: null === Je || void 0 === Je ? void 0 : Je.content
      })
    }
    const qe = new Map,
      fe = new Set;

    function Te(ee, ie) {
      ie ? qe.set(ee, ie) : qe.delete(ee);
      for (const He of fe) He()
    }

    function pe(ee) {
      let {
        placement: ie = "bottom"
      } = ee;
      const He = (0, Fe.useRef)(null);
      return (0, Fe.useLayoutEffect)((() => {
        const ee = He.current;
        return Te(ie, ee), () => {
          qe.get(ie) === ee && Te(ie, null)
        }
      }), [ie]), (0, oe.jsx)("div", {
        ref: He,
        id: `clientGameHud-${ie}`,
        style: {
          display: "contents"
        }
      })
    }

    function Xe(ee) {
      let {
        children: ie,
        placement: He = "bottom"
      } = ee;
      const [ye, be] = (0, Fe.useState)((() => {
        var ee;
        return null !== (ee = qe.get(He)) && void 0 !== ee ? ee : null
      }));
      return (0, Fe.useEffect)((() => {
        const ee = () => {
          var ee;
          be(null !== (ee = qe.get(He)) && void 0 !== ee ? ee : null)
        };
        return fe.add(ee), ee(), () => {
          fe.delete(ee)
        }
      }), [He]), ye ? (0, Je.createPortal)(ie, ye) : null
    }
  },
  34867: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(4931),
      be = He(4937);

    function Me(ee) {
      let {
        children: ie,
        showing: He,
        globallyUniqueKey: Me,
        alwaysMountChildren: Ke = !1,
        doGameplayStartStopOnShow: Ue = !0,
        keepsMovement: Fe = !1
      } = ee;
      return (0, be.e)(!0, He, Me, Fe), (0, ye.c)(Ue, He), He || Ke ? ie : null
    }
  },
  37516: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      d: () => Ke,
      g: () => Ue,
      k: () => Fe
    });
    var ye = He(59),
      be = He(3416);
    const Me = 8,
      Ke = "InGameHeaderContainer",
      Ue = "TopRightElements";

    function Fe(ee) {
      const [ie] = (0, be.b)(), [He, Fe] = (0, ye.useState)(!1);
      return (0, ye.useLayoutEffect)((() => {
        if (!ee) return;
        const ie = document.querySelector(`.${Ke}`),
          He = document.querySelector(`.${Ue}`),
          ye = () => {
            const ye = ee.getBoundingClientRect(),
              be = ie ? ie.getBoundingClientRect().right : 0,
              Ke = He ? He.getBoundingClientRect().left : window.innerWidth,
              Ue = ye.left < be + Me,
              Je = ye.right > Ke - Me;
            Fe(Ue || Je)
          };
        ye();
        const be = new ResizeObserver(ye);
        return be.observe(ee), ie && be.observe(ie), He && be.observe(He), () => {
          be.disconnect()
        }
      }), [ee, ie]), He
    }
  },
  40282: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      d: () => be,
      h: () => Me
    });
    var ye = He(59);

    function be(ee) {
      return Ue(ee, Fe)
    }

    function Me(ee) {
      return Ue(ee, Je)
    }

    function Ke(ee) {
      return `${Math.floor(ee/60)}:${String(ee%60).padStart(2,"0")}`
    }

    function Ue(ee, ie) {
      const [, He] = (0, ye.useState)(null);
      return (0, ye.useEffect)((() => {
        if (0 === ee) return;
        const ye = window.setInterval((() => {
          const ye = ie(ee);
          He((ie => (null === ie || void 0 === ie ? void 0 : ie.endsAt) === ee && ie.value === ye ? ie : {
            endsAt: ee,
            value: ye
          }))
        }), 250);
        return () => {
          window.clearInterval(ye)
        }
      }), [ee, ie]), ie(ee)
    }

    function Fe(ee) {
      return (ee - performance.now()) / 1e3
    }

    function Je(ee) {
      return Math.max(0, Math.ceil(Fe(ee)))
    }
  },
  37509: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    const ye = [{
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

    function be(ee, ie, He) {
      const be = Math.abs(ee - ie),
        Me = Date.now() - He;
      for (const Ke of ye)
        if (ee < Ke.maxDist) return be >= Ke.hardUpdateDist || Me > Ke.timeBetweenSoftChecks && be >= Ke.softUpdateDist;
      return !1
    }
  },
  9446: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      g: () => be
    });
    let ye = null;
    const be = function(ee) {
        const ie = {
          cycle: ee,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return ye = ie, () => {
          ye === ie && (ye = null)
        }
      },
      Me = () => {
        var ee;
        return null !== (ee = ye) && void 0 !== ee && ee.canCycle() ? ye.cycle : null
      }
  },
  39331: (ee, ie, He) => {
    function ye(ee, ie, He) {
      var ye;
      const {
        width: be,
        height: Me
      } = He, Ke = null !== (ye = ee.text) && void 0 !== ye ? ye : ee, Ue = (Ke.x / 100 - .5) * be, Fe = (Ke.y / 100 - .5) * Me, Je = be / 2 - ie.x;
      if (null !== ee.text && Math.abs(Ue) <= Je && Fe >= ie.top - Me / 2 && Fe <= Me / 2 - ie.bottom) return {
        x: Ke.x,
        y: Ke.y
      };
      const oe = Math.min(0 === Ue ? 1 / 0 : Je / Math.abs(Ue), Fe > 0 ? (Me / 2 - ie.bottom) / Fe : Fe < 0 ? (ie.top - Me / 2) / Fe : 1 / 0);
      return !Number.isFinite(oe) || oe < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Ue * oe / be * 100,
        y: 50 + Fe * oe / Me * 100
      }
    }
    He.d(ie, {
      c: () => ye
    })
  },
  37427: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      e: () => Te,
      f: () => pe,
      h: () => Ue,
      j: () => ke,
      l: () => Xe,
      n: () => Re,
      p: () => Be,
      r: () => fe,
      u: () => ze
    });
    var ye = He(18),
      be = He(27);
    const Me = "clientGameInventoryButtonsChanged",
      Ke = new Map;

    function Ue() {
      return [...Ke.values()].sort(((ee, ie) => {
        var He, ye;
        return (null !== (He = ee.order) && void 0 !== He ? He : 0) - (null !== (ye = ie.order) && void 0 !== ye ? ye : 0)
      }))
    }
    let Fe = null;

    function Je(ee) {
      Fe = ee
    }
    let oe = !1;

    function Re(ee) {
      oe = !0;
      try {
        ee.onClick()
      } finally {
        oe = !1
      }
      ee.panel && "clientGame" === ye.e.get("openInGameMenuName") && Je(ee.id)
    }

    function ke() {
      return oe
    }

    function qe() {
      return Ue().filter((ee => ee.panel && !ee.disabled))
    }

    function fe(ee) {
      const ie = qe(),
        He = ie.findIndex((ee => ee.id === Fe));
      return !(He < 0 || ie.length < 2) && (Re(ie[(He + ee + ie.length) % ie.length]), !0)
    }

    function Te() {
      return null !== Fe && qe().length > 1
    }

    function pe() {
      Je(null)
    }

    function Xe() {
      "inventory" !== ye.e.get("openInGameMenuName") && Je(null)
    }

    function ze() {
      const ee = Fe;
      return Je(null), ee
    }

    function Be(ee) {
      return Ke.set(ee.id, ee), be.h.yR(Me, Ue(), !0), () => {
        Ke.get(ee.id) === ee && (Ke.delete(ee.id), be.h.yR(Me, Ue()))
      }
    }
  },
  37424: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => ze,
      h: () => pe,
      l: () => Xe,
      m: () => ke,
      p: () => Je,
      s: () => Te,
      v: () => qe,
      z: () => oe
    });
    var ye = He(18),
      be = He(27),
      Me = He(1246),
      Ke = He(37427);
    const Ue = "clientGameUiChanged";
    let Fe = null;

    function Je() {
      return Fe
    }

    function oe(ee, ie) {
      const He = {
        content: ee,
        menu: ie
      };
      return Fe = He, be.h.yR(Ue, Fe, !0), () => {
        Fe === He && (Fe = null, fe = !1, pe(), be.h.yR(Ue, null))
      }
    }
    let Re = null;

    function ke() {
      return Re
    }

    function qe(ee) {
      return Re = ee, () => {
        Re === ee && (Re = null)
      }
    }
    let fe = !1;

    function Te() {
      const ee = ye.e.get("openInGameMenuName");
      "clientGame" !== ee && (fe = "inventory" === ee), (0, Ke.j)() || (0, Ke.f)(), (0, Me.w)(Me.c), ye.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function pe() {
      Be(!1)
    }

    function Xe() {
      Be(fe)
    }

    function ze() {
      fe && Be(!1)
    }

    function Be(ee) {
      "clientGame" === ye.e.get("openInGameMenuName") && ye.e.set({
        openInGameMenuName: ee ? "inventory" : null
      }), ee || (0, Ke.f)(), fe = !1
    }
  },
  40287: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe
    });
    var ye = He(37509),
      be = He(1127),
      Me = He(1196),
      Ke = He(39291),
      Ue = He(39331);
    class Fe {
      constructor(ee, ie) {
        var He;
        this.classes = ee, this.distanceKey = ie, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.xf = !1, this.jB = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.jB), null === (He = window.visualViewport) || void 0 === He || He.addEventListener("resize", this.jB)
      }
      bindMarker(ee) {
        const ie = this.refs.get(ee);
        if (ie) return ie;
        const He = ie => {
          var ye;
          null === (ye = this.markers.get(ee)) || void 0 === ye || ye.stopObserving(), this.markers.delete(ee), ie && !this.xf ? (this.markers.set(ee, this.mount(ie)), this.refs.set(ee, He)) : this.refs.delete(ee)
        };
        return this.refs.set(ee, He), He
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(ee) {
        this.render = ee
      }
      update(ee, ie, He, ye, be) {
        const Me = this.markers.get(ee);
        Me && (Me.target ??= [0, 0, 0], Me.target[0] = ie, Me.target[1] = He, Me.target[2] = ye, this.place(Me), this.Ri(Me, be && Math.hypot(ie - be[0], He - be[1], ye - be[2])))
      }
      dispose() {
        var ee;
        this.xf = !0, window.removeEventListener("resize", this.jB), null === (ee = window.visualViewport) || void 0 === ee || ee.removeEventListener("resize", this.jB);
        for (const ie of this.markers.values()) ie.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(ee) {
        const {
          render: ie,
          viewport: He
        } = this;
        if (!ie || !ee.target) return;
        const ye = (50 - ie.screenBandPct.y) / 100 * He.height,
          be = {
            x: ee.halfSize.width + 8,
            top: ee.halfSize.height + 8,
            bottom: ee.halfSize.height + ee.labelsBelow + ye
          },
          Me = ie.projectWorldPosToViewport(ee.target),
          Fe = null !== Me && void 0 !== Me ? Me : ie.projectWorldPosToScreenPos(ee.target),
          Je = (0, Ue.c)({
            x: Fe.x,
            y: Fe.y,
            text: Me
          }, be, He);
        (0, Ke.c)(ee.root, Math.round(100 * Je.x) / 100, Math.round(100 * Je.y) / 100)
      }
      Ri(ee, ie) {
        if (null === ie) return void(null !== ee.metres && (ee.metres = null, ee.distance.textContent = ""));
        const He = Date.now();
        (null === ee.metres || (0, ye.e)(ie, ee.metres, ee.metresShownAt)) && (ee.metres = Math.round(ie), ee.metresShownAt = He, ee.distance.textContent = (0, be.s)(Me.f.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(ee.metres)
        }))
      }
      mount(ee) {
        const ie = {
            root: ee,
            distance: ee.querySelector(`.${this.classes.distance}`),
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
          He = ee.querySelector(`.${this.classes.labels}`),
          ye = new ResizeObserver((() => {
            ie.halfSize = {
              width: Math.max(ee.offsetWidth, He.offsetWidth) / 2,
              height: ee.offsetHeight / 2
            }, ie.labelsBelow = He.offsetTop + He.offsetHeight - ee.offsetHeight, this.place(ie)
          }));
        return ye.observe(ee, {
          box: "border-box"
        }), ye.observe(He, {
          box: "border-box"
        }), ie.stopObserving = () => {
          ye.disconnect()
        }, ie
      }
    }
  },
  40276: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => qi
    });
    const ye = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes", "hat", "back"];
    var be = He(59),
      Me = He(37424),
      Ke = He(37853),
      Ue = He(37440),
      Fe = He(1768),
      Je = He(27);
    const oe = {
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
    const Re = 32;

    function ke(ee, ie, He, ye) {
      return {
        tag: "line",
        attrs: {
          x1: ee,
          y1: ie,
          x2: He,
          y2: ye,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function qe(ee) {
      return {
        tag: "circle",
        attrs: {
          cx: Re,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Re,
          r: ee,
          class: "Fill"
        }
      }
    }

    function fe(ee, ie) {
      return {
        tag: "path",
        attrs: {
          d: ee,
          "stroke-width": ie
        }
      }
    }

    function Te(ee, ie, He) {
      return {
        tag: "circle",
        attrs: {
          cx: Re,
          cy: Re,
          r: ee,
          "stroke-width": ie,
          class: He
        }
      }
    }

    function pe(ee, ie, He) {
      return {
        tag: "text",
        attrs: {
          x: ee,
          y: ie,
          class: "Fill Label"
        },
        text: He
      }
    }
    const Xe = {
      pistol: ee => [ke(Re, Re - ee - 5, Re, Re - ee), ke(Re - ee - 5, Re, Re - ee, Re), ke(Re + ee, Re, Re + ee + 5, Re), qe(1.4)],
      rifle: ee => [ke(Re, Re - ee - 8, Re, Re - ee), ke(Re, Re + ee, Re, Re + ee + 8), ke(Re - ee - 8, Re, Re - ee, Re), ke(Re + ee, Re, Re + ee + 8, Re), qe(1)],
      smg: ee => {
        const ie = Math.PI / 2,
          He = [];
        for (let Ke = 0; Ke < 4; Ke++) He.push((be = Ke * ie + .35, Me = (Ke + 1) * ie - .35, fe(`M${Re+(ye=6+ee)*Math.cos(be)} ${Re+ye*Math.sin(be)} A${ye} ${ye} 0 0 1 ${Re+ye*Math.cos(Me)} ${Re+ye*Math.sin(Me)}`, 2)));
        var ye, be, Me;
        return [...He, qe(1.4)]
      },
      shotgun: ee => [Te(ee, 3, "Ring Outline"), Te(ee, 1.5, "Ring")],
      marksman: ee => [fe(`M${26-ee/2} ${39+ee/2} L32 33 L${38+ee/2} ${39+ee/2}`, 2), ke(14 - ee, Re, 24 - ee, Re, 1.5), ke(40 + ee, Re, 50 + ee, Re, 1.5), ke(14 - ee, 30, 14 - ee, 34, 1.5), ke(50 + ee, 30, 50 + ee, 34, 1.5)],
      machineGun: ee => {
        const ie = 10 + ee,
          He = [];
        for (const [ye, be] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) He.push(fe(`M${Re+ye*ie} ${Re+be*(ie-5)} L${Re+ye*ie} ${Re+be*ie} L${Re+ye*(ie-5)} ${Re+be*ie}`, 2));
        return [...He, ke(Re, 28, Re, 36, 1.5), ke(28, Re, 36, Re, 1.5)]
      },
      launcher: () => [ke(14, 30, 50, 30, 1.5), ke(Re, 24, Re, 52, 1.5), ke(28, 38, 36, 38, 1.5), ke(29, 44, 35, 44, 1.5), ke(30, 50, 34, 50, 1.5), pe(38, 40, "100"), pe(37, 46, "200"), qe(1.4, 30)],
      melee: () => [fe("M32 26 L38 32 L32 38 L26 32 Z", 1.5), qe(1.2)],
      throwable: () => [qe(1.6)]
    };

    function ze(ee) {
      let {
        tag: ie,
        attrs: He,
        text: ye
      } = ee, be = `<${ie}`;
      for (const [Me, Ke] of Object.entries(He)) be += ` ${Me}="${Ke}"`;
      return void 0 === ye ? `${be}/>` : `${be}>${ye}</${ie}>`
    }
    class Be {
      constructor(ee, ie) {
        this.api = ee, this.localPlayerId = ie, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = ee => {
          this.element = ee, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, ee && !this.enabled && (ee.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, Fe.getRemInPx)()))
        }, this.tokens = [Je.h.subscribe("aimingOverlay", (ee => {
          this.sniperOverlay = "sniper" === ee
        })), Je.h.subscribe("mouseState", (ee => {
          let {
            isDown: ie
          } = ee;
          this.mouseDown = ie
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      JY(ee) {
        ee !== this.enabled && (this.enabled = ee, this.drawnVisible = null, ee || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(ee, ie) {
        var He, ye;
        if (!this.enabled) return;
        const {
          api: be
        } = this, Me = be.isAlive(this.localPlayerId) && null !== (He = null === (ye = be.Vye(this.localPlayerId)) || void 0 === ye ? void 0 : ye.name) && void 0 !== He ? He : null, Ke = (Ue = Me) && oe[Ue] || null;
        var Ue;
        if (this.setOwnsCrosshair(null !== Ke), !this.element) return;
        const Fe = be.getHeldGunInaccuracy(),
          Je = null !== Fe,
          Re = null !== Ke && !this.sniperOverlay && be.isCrosshairShown();
        if (Re !== this.drawnVisible && (this.drawnVisible = Re, this.element.style.display = Re ? "block" : "none"), !Re) return;
        const ke = Je ? function(ee) {
            return "launcher" === ee || "melee" === ee || "throwable" === ee ? "none" : "shotgun" === ee ? "cone" : "offset"
          }(Ke) : "none",
          qe = null !== Fe && void 0 !== Fe ? Fe : 0;
        "cone" === ke ? this.drawCone(Ke, this.coneRadiusVh(qe, ie) * this.gapPerVh, ee) : (this.coneDrawn = !1, this.draw(Ke, "none" === ke ? 2 : this.offsetGap(qe)));
        const fe = !Je && this.mouseDown;
        fe !== this.drawnPressed && (this.drawnPressed = fe, this.element.classList.toggle("Pressed", fe))
      }
      dispose() {
        for (const ee of this.tokens) Je.h.unsubscribe(ee);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(ee, ie) {
        var He, ye;
        ee !== this.drawnFamily ? (this.drawnFamily = ee, this.drawnGap = ie, this.element.innerHTML = function(ee, ie) {
          return `<svg viewBox="0 0 64 64">${Xe[ee](ie).map(ze).join("")}</svg>`
        }(ee, ie), this.shapes = Array.from(null !== (He = null === (ye = this.element.firstElementChild) || void 0 === ye ? void 0 : ye.children) && void 0 !== He ? He : [])) : ie !== this.drawnGap && (this.drawnGap = ie, function(ee, ie, He) {
          const ye = Xe[ie](He);
          for (let be = 0; be < ye.length; be++)
            for (const [ie, He] of Object.entries(ye[be].attrs)) {
              const ye = String(He);
              ee[be].getAttribute(ie) !== ye && ee[be].setAttribute(ie, ye)
            }
        }(this.shapes, ee, ie))
      }
      drawCone(ee, ie, He) {
        ee === this.drawnFamily && this.coneDrawn ? this.shownRadius += (ie - this.shownRadius) * (1 - Math.exp(-He / 80)) : this.shownRadius = ie, this.coneDrawn = !0, this.draw(ee, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(ee, ie) {
        if (!(ie > 0)) return 1;
        const He = ee * Ke.j / 2;
        return Math.max(50 * Math.tan(He) / ie, 1)
      }
      offsetGap(ee) {
        const ie = 2 + ((0, Ue.d)(ee) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * ie) / 2)
      }
      setOwnsCrosshair(ee) {
        ee !== this.ownsCrosshair && (this.ownsCrosshair = ee, document.body.classList.toggle("FrontlineCustomCrosshair", ee))
      }
    }
    const Ee = "FrontlineCustomDamage",
      ge = .45,
      Oe = .2;
    class de {
      constructor(ee, ie) {
        this.api = ee, this.localPlayerId = ie, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.My = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = ee => {
          var ie, He;
          this.clearHits(), this.root = ee, this.lowLayer = null !== (ie = null === ee || void 0 === ee ? void 0 : ee.querySelector(".FrontlineDamageLow")) && void 0 !== ie ? ie : null, this.arcLayer = null !== (He = null === ee || void 0 === ee ? void 0 : ee.querySelector(".FrontlineDamageArcs")) && void 0 !== He ? He : null, this.showRoot(), this.drawLow()
        }, this.token = Je.h.subscribe("damagedByOtherPlayer", (ee => {
          let {
            direction: ie,
            Hy: He
          } = ee;
          this.onHurt(ie, He)
        })), this.syncHealth(), document.body.classList.add(Ee)
      }
      JY(ee) {
        ee !== this.enabled && (this.enabled = ee, document.body.classList.toggle(Ee, ee), ee || this.clearHits(), this.showRoot())
      }
      frame(ee) {
        this.syncHealth(), this.cameraHeading = ee;
        for (const ie of this.arcs) this.drawArcAngle(ie)
      }
      dispose() {
        Je.h.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Ee)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const ee = this.api.getClientOption(this.localPlayerId, "_health"),
          ie = this.api.getClientOption(this.localPlayerId, "_shield"),
          He = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(ee, this.readHealth) && Object.is(ie, this.readShield) && Object.is(He, this.readMaxHealth)) return;
        if (this.readHealth = ee, this.readShield = ie, this.readMaxHealth = He, null === ee || void 0 === ee || !He) return this.lastHealthPool = null, this.maxHealth = null, this.My = 1, this.dead = !1, void this.drawLow();
        const ye = ee + (null !== ie && void 0 !== ie ? ie : 0);
        if (null !== this.lastHealthPool && ye < this.lastHealthPool) {
          const ee = performance.now(),
            ie = (this.lastHealthPool - ye) / He;
          this.lastDrop = ee - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + ie,
            at: this.lastDrop.at
          } : {
            frac: ie,
            at: ee
          }
        }
        this.dead = ee <= 0, this.dead && this.clearHits(), this.lastHealthPool = ye, this.maxHealth = He, this.My = ee > 0 ? ee / He : 1, this.drawLow()
      }
      onHurt(ee, ie) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const He = Math.min(1, this.takeDamageFrac(ie) / .3);
        null !== ee && this.showArc(ee, He), this.flashEdge(null === ee ? null : ee - this.cameraHeading, .4 + .6 * He)
      }
      takeDamageFrac(ee) {
        if (void 0 !== ee && this.maxHealth) return ee / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: ie
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, ie
      }
      drawLow() {
        if (!this.lowLayer) return;
        const ee = te((ge - this.My) / .25),
          ie = te((Oe - this.My) / .15000000000000002),
          He = this.My < ge;
        this.lowLayer.classList.toggle("Active", He), this.lowLayer.classList.toggle("Critical", this.My < Oe), this.lowLayer.style.opacity = String(He ? .55 + .3 * ee + .15 * ie : 0)
      }
      showArc(ee, ie) {
        var He, ye;
        if (!this.arcLayer) return;
        let be = this.arcs.find((ie => We(ie.direction, ee) < .6));
        if (!be) {
          const ie = document.createElement("div");
          ie.className = "FrontlineDamageArc", ie.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(ie), be = {
            element: ie,
            direction: ee,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(be)
        }
        be.direction = ee, this.drawArcAngle(be);
        const Me = be.fade ? Number(getComputedStyle(be.element).opacity) : 0;
        null === (He = be.fade) || void 0 === He || He.cancel(), null === (ye = be.pop) || void 0 === ye || ye.cancel(), be.element.style.opacity = "1";
        const Ke = be.element.animate([{
          opacity: Me
        }, {
          opacity: 1
        }], 144);
        be.fade = Ke, be.pop = be.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * ie
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const Ue = be;
        Ke.onfinish = () => {
          if (Ue.fade !== Ke) return;
          const ee = Ue.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          ee.startTime = Ke.startTime, Ue.fade = ee, ee.onfinish = () => {
            Ue.fade === ee && (Ue.element.remove(), Ze(this.arcs, Ue))
          }
        }
      }
      drawArcAngle(ee) {
        const ie = ee.direction - this.cameraHeading;
        (null === ee.drawnAngle || Math.abs(ie - ee.drawnAngle) > .005) && (ee.drawnAngle = ie, ee.element.style.rotate = `${ie}rad`)
      }
      flashEdge(ee, ie) {
        var He, ye, be;
        if (!this.root) return;
        let Me = this.flashes.find((ie => null === ie.angle || null === ee ? ie.angle === ee : We(ie.angle, ee) < .5));
        if (!Me) {
          const ie = document.createElement("div");
          ie.className = "FrontlineDamageFlash";
          const He = ie.appendChild(document.createElement("div"));
          He.className = "FrontlineDamageFlashGlow", this.root.insertBefore(ie, this.arcLayer), Me = {
            element: ie,
            glow: He,
            angle: ee,
            level: 0,
            animation: null
          }, this.flashes.push(Me)
        }
        const Ke = null === (He = Me.animation) || void 0 === He || null === (ye = He.effect) || void 0 === ye ? void 0 : ye.getComputedTiming().progress,
          Ue = null === Ke || void 0 === Ke ? 0 : Me.level * (1 - Ke);
        Me.level = Math.min(1, Math.max(ie, Ue + .6 * ie)), Me.angle = ee;
        const {
          x: Fe,
          y: Je,
          rx: oe,
          ry: Re
        } = function(ee, ie) {
          const He = window.innerWidth,
            ye = window.innerHeight;
          if (null === ee) return {
            x: He / 2,
            y: ye / 2,
            rx: 0,
            ry: 0
          };
          const be = Math.sin(ee),
            Me = -Math.cos(ee),
            Ke = He / 2 / Math.max(1e-6, Math.abs(be)),
            Ue = ye / 2 / Math.max(1e-6, Math.abs(Me)),
            Fe = Math.min(Ke, Ue),
            Je = Math.round(He / 2 + be * Fe),
            oe = Math.round(ye / 2 + Me * Fe),
            Re = ye / 100 * (.85 + .25 * ie),
            ke = Ke <= Ue,
            qe = Math.round((ke ? 30 : 74) * Re),
            fe = Math.round((ke ? 58 : 26) * Re);
          return {
            x: Je,
            y: oe,
            rx: qe,
            ry: fe
          }
        }(ee, Me.level), {
          style: ke
        } = Me.glow;
        Me.glow.classList.toggle("Everywhere", null === ee), ke.setProperty("--glowX", `${Fe}px`), ke.setProperty("--glowY", `${Je}px`), ke.setProperty("--glowRx", `${oe}px`), ke.setProperty("--glowRy", `${Re}px`), Me.element.style.transformOrigin = `${Fe}px ${Je}px`, null === (be = Me.animation) || void 0 === be || be.cancel();
        const qe = Me.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: Me.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * Me.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * Me.level
        });
        Me.animation = qe;
        const fe = Me;
        qe.onfinish = () => {
          fe.animation === qe && (fe.element.remove(), Ze(this.flashes, fe))
        }
      }
      clearHits() {
        for (const ye of this.arcs) {
          var ee, ie;
          null === (ee = ye.fade) || void 0 === ee || ee.cancel(), ye.fade = null, null === (ie = ye.pop) || void 0 === ie || ie.cancel(), ye.element.remove()
        }
        this.arcs.length = 0;
        for (const ye of this.flashes) {
          var He;
          null === (He = ye.animation) || void 0 === He || He.cancel(), ye.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function We(ee, ie) {
      return Math.abs(Math.atan2(Math.sin(ee - ie), Math.cos(ee - ie)))
    }

    function te(ee) {
      return Math.max(0, Math.min(1, ee))
    }

    function Ze(ee, ie) {
      const He = ee.indexOf(ie); - 1 !== He && ee.splice(He, 1)
    }
    var we = He(1053),
      De = He.n(we),
      Pe = He(37420),
      Ae = He(37516),
      Ye = He(1127),
      Ve = He(1432),
      ae = He(40282);
    const ce = "frontlineHudChanged",
      xe = "frontlineScoreboardChanged";
    class Le {
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
      DR(ee) {
        this.wire = ee, Je.h.yR(ce, ee, !0)
      }
      receiveScoreboard(ee) {
        let ie = "scoreboard" === ee[0] ? performance.now() + ee[5] : 0;
        const He = this.scoreboard.endsAt;
        0 !== ie && 0 !== He && Math.abs(ie - He) < 1e3 && (ie = He), this.scoreboard = {
          wire: ee,
          endsAt: ie
        }, Je.h.yR(xe, this.scoreboard, !0)
      }
    }
    var Ce = He(1228);
    const ve = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function ue(ee) {
      let {
        className: ie,
        point: He
      } = ee;
      const [ye, be, Me, Ke, Ue, Fe] = He;
      return (0, Ce.jsxs)("div", {
        className: De()(ie, `Owner-${be||"None"}`, `Leader-${Ke||"None"}`, {
          Contested: Ue,
          Here: Fe
        }),
        children: [(0, Ce.jsx)("span", {
          className: "FrontlinePointLetter",
          children: ye
        }), (0, Ce.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${Me}%`
          }
        })]
      })
    }
    const me = (0, be.memo)((function(ee) {
        let {
          points: ie,
          markers: He
        } = ee;
        const {
          t: ye
        } = (0, Ye.v)();
        return ie ? (0, Ce.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: ie.map((ee => {
            const [ie, , , , , , , be] = ee;
            return (0, Ce.jsxs)("div", {
              ref: He.points.bindMarker(ie),
              className: "FrontlinePointMarker",
              children: [(0, Ce.jsx)(ue, {
                className: "FrontlinePointMarkerTile",
                point: ee
              }), (0, Ce.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [be && (0, Ce.jsx)("span", {
                  className: De()("FrontlinePointMarkerHomeTurf", `Team-${be}`),
                  children: ye("frontlineHud:homeTurf", {
                    team: ye(ve[be])
                  })
                }), (0, Ce.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, ie)
          }))
        }) : null
      })),
      le = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      Se = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function ne(ee) {
      let {
        hud: ie,
        crosshair: He,
        damage: ye,
        markers: be
      } = ee;
      const Me = (0, Ve.j)(ce, ie.getWire()),
        Ke = (0, Ve.j)(xe, ie.getScoreboard());
      return (0, Ce.jsxs)(Ce.Fragment, {
        children: [(0, Ce.jsx)(je, {
          damage: ye
        }), (0, Ce.jsx)(me, {
          points: "scoreboard" === Ke.wire[0] ? Ke.wire[6] : null,
          markers: be
        }), (0, Ce.jsx)(Ie, {
          view: Ke
        }), (0, Ce.jsx)("div", {
          className: "FrontlineReticle",
          ref: He.bindElement
        }), (0, Ce.jsx)(Pe.d, {
          children: (0, Ce.jsx)(se, {
            wire: Me
          })
        })]
      })
    }
    const je = (0, be.memo)((function(ee) {
        let {
          damage: ie
        } = ee;
        return (0, Ce.jsxs)("div", {
          className: "FrontlineDamage",
          ref: ie.bindElement,
          children: [(0, Ce.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, Ce.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, Ce.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      se = (0, be.memo)((function(ee) {
        let {
          wire: ie
        } = ee;
        const {
          t: He
        } = (0, Ye.v)();
        if ("capture" === ie[0]) {
          const [, ee, ye, be, Me, Ke, Ue] = ie, Fe = Math.round(be / 100 * 24);
          return (0, Ce.jsxs)("div", {
            className: De()("FrontlinePlate", `Status-${ye}`, `Leader-${Me||"None"}`),
            children: [(0, Ce.jsx)(re, {}), (0, Ce.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, Ce.jsx)("span", {
                className: "FrontlineObjective",
                children: ee
              }), (0, Ce.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, Ce.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: He("frontlineHud:objective", {
                    point: ee,
                    friendly: Ke,
                    enemy: Ue
                  })
                }), (0, Ce.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: He(le[ye])
                })]
              }), (0, Ce.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(be).padStart(3, "0"), (0, Ce.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, Ce.jsx)(Ne, {
              segments: 24,
              lit: Fe
            })]
          })
        }
        if ("alert" === ie[0]) {
          const [, ee, ye, be] = ie;
          return (0, Ce.jsxs)("div", {
            className: De()("FrontlinePlate", "FrontlineAlert", `Tone-${be}`),
            children: [(0, Ce.jsx)(re, {}), (0, Ce.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: He(Se[ee])
            }), (0, Ce.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: ye
            })]
          })
        }
        return null
      })),
      Ie = (0, be.memo)((function(ee) {
        let {
          view: ie
        } = ee;
        const {
          t: He
        } = (0, Ye.v)(), ye = (0, be.useRef)(null), Me = function(ee, ie) {
          const [He, ye] = (0, be.useState)(!1);
          return (0, be.useLayoutEffect)((() => {
            const ie = ee.current;
            if (!ie) return;
            const He = document.querySelector(`.${Ae.d}`),
              be = document.querySelector(`.${Ae.g}`),
              Me = () => {
                var ee;
                const Me = ie.querySelector(".FrontlineTeamTrack"),
                  Ke = (0, Fe.getRemInPx)(),
                  Ue = ie.getBoundingClientRect().width - 2 * (null !== (ee = null === Me || void 0 === Me ? void 0 : Me.getBoundingClientRect().width) && void 0 !== ee ? ee : 0),
                  Je = window.innerWidth / 2,
                  oe = He ? He.getBoundingClientRect().right : 0,
                  Re = be ? be.getBoundingClientRect().left : window.innerWidth,
                  ke = Math.min(Je - oe, Re - Je) - Ae.c - Ue / 2,
                  qe = ke < 6 * Ke,
                  fe = qe ? (window.innerWidth - Ue) / 2 - Ae.c : ke;
                ie.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(fe,14*Ke)))}px`), ye(qe)
              };
            Me();
            const Ke = new ResizeObserver(Me);
            for (const ee of [ie, He, be]) ee && Ke.observe(ee);
            return window.addEventListener("resize", Me), () => {
              Ke.disconnect(), window.removeEventListener("resize", Me)
            }
          }), [ee, ie]), He
        }(ye, "scoreboard" === ie.wire[0]);
        if ("scoreboard" !== ie.wire[0]) return null;
        const [, Ke, Ue, Je, oe, , Re] = ie.wire, ke = "Red" === Ke ? "Blue" : "Red";
        return (0, Ce.jsxs)("div", {
          className: De()("FrontlineScoreboardContainer", {
            Below: Me
          }),
          children: [(0, Ce.jsxs)("div", {
            ref: ye,
            className: "FrontlineScoreboard",
            children: [(0, Ce.jsx)(re, {}), (0, Ce.jsx)(he, {
              team: Ke,
              tickets: Ue,
              goal: oe,
              side: "Friendly"
            }), (0, Ce.jsx)("div", {
              className: "FrontlinePoints",
              children: Re.map((ee => (0, Ce.jsx)(ue, {
                className: "FrontlinePoint",
                point: ee
              }, ee[0])))
            }), (0, Ce.jsx)(he, {
              team: ke,
              tickets: Je,
              goal: oe,
              side: "Enemy"
            })]
          }), (0, Ce.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, Ce.jsx)(Ge, {
              endsAt: ie.endsAt
            }), (0, Ce.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: He("frontlineHud:ticketGoal", {
                goal: oe
              })
            })]
          })]
        })
      }));

    function he(ee) {
      let {
        team: ie,
        tickets: He,
        goal: ye,
        side: be
      } = ee;
      const {
        t: Me
      } = (0, Ye.v)(), Ke = String(He).padStart(3, "0"), Ue = Ke.search(/[1-9]/), Fe = -1 === Ue ? Ke : Ke.slice(0, Ue), Je = Math.min(20, Math.floor(He / ye * 20));
      return (0, Ce.jsxs)("div", {
        className: De()("FrontlineTeamScore", be, `Team-${ie}`),
        children: [(0, Ce.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, Ce.jsx)("span", {
            className: "Lead",
            children: Fe
          }), -1 !== Ue && Ke.slice(Ue)]
        }), (0, Ce.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, Ce.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: Me(ve[ie])
          }), (0, Ce.jsx)(Ne, {
            segments: 20,
            lit: Je
          })]
        })]
      })
    }

    function Ne(ee) {
      let {
        segments: ie,
        lit: He
      } = ee;
      return (0, Ce.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: ie
        }, ((ee, ie) => (0, Ce.jsx)("i", {
          className: De()({
            Lit: ie < He
          })
        }, ie)))
      })
    }

    function Ge(ee) {
      let {
        endsAt: ie
      } = ee;
      const He = (0, ae.h)(ie);
      return (0, Ce.jsx)("div", {
        className: De()("FrontlineClock", {
          Urgent: He <= 60
        }),
        children: (0, ae.c)(He)
      })
    }

    function re() {
      return (0, Ce.jsxs)(Ce.Fragment, {
        children: [(0, Ce.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Ce.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var Qe = He(40287);
    class ei {
      constructor(ee) {
        this.hud = ee, this.points = new Qe.e({
          labels: "FrontlinePointMarkerLabels",
          distance: "FrontlinePointMarkerDistance"
        }, "frontlineHud:markerDistance")
      }
      frame(ee, ie) {
        this.points.setRender(ee);
        const He = this.hud.getScoreboard().wire;
        if ("scoreboard" === He[0] && this.points.hasMarkers())
          for (const [ye, , , , , , be] of He[6]) be && this.points.update(ye, be[0], be[1] + 2.5, be[2], ie)
      }
    }
    var ii = He(7044),
      Hi = He(2777);
    const yi = "frontlineRoundEndChanged";
    class bi {
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
      DR(ee) {
        const ie = "roundEnd" === ee[0] ? performance.now() + ee[5] : 0;
        this.view = {
          wire: ee,
          key: this.view.key + 1,
          endsAt: ie
        }, Je.h.yR(yi, this.view, !0)
      }
    }
    const Mi = (0, be.lazy)((() => (0, Hi.e)(Promise.all([He.e(261), He.e(222)]).then((() => He(44949))), (ee => ee.FrontlineMvpLineup)))),
      Ki = [4800, 4e3, 3200],
      Ui = [1, 0, 2],
      Fi = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      Ji = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function oi(ee) {
      let {
        controller: ie
      } = ee;
      const He = (0, Ve.j)(yi, ie.getView()),
        ye = (0, ae.d)(He.endsAt);
      return "roundEnd" !== He.wire[0] || 1e3 * ye < -2e3 ? null : (0, Ce.jsx)(Ri, {
        wire: He.wire,
        secondsLeft: Math.max(0, Math.ceil(ye))
      }, He.key)
    }
    const Ri = (0, be.memo)((function(ee) {
      let {
        wire: ie,
        secondsLeft: He
      } = ee;
      const {
        t: Me
      } = (0, Ye.v)(), [, Ke, Ue, Fe, Je, , oe, Re] = ie, ke = (0, be.useMemo)((() => Ui.filter((ee => ee < Re.length))), [Re]), qe = (0, be.useMemo)((() => ke.map((ee => {
        const [, , , , , ie, He] = Re[ee];
        return {
          cosmetics: ye.map(((ee, He) => [ee, ie[He]])),
          size: 0 === ee ? 1.15 : .85,
          heldGun: {
            name: He,
            aimed: 0 === ee
          },
          showAfterMs: Ki[ee]
        }
      }))), [Re, ke]);
      return (0, Ce.jsxs)("div", {
        className: De()("FrontlineRoundEnd", `Result-${Ke}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, Ce.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, Ce.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, Ce.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, Ce.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, Ce.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (fe = Me(Fi[Ke]), /\p{Script=Arabic}/u.test(fe) ? [fe] : (0, ii.c)(fe)).map(((ee, ie) => (0, Ce.jsx)("span", {
              style: {
                "--letter": ie
              },
              children: ee
            }, ie)))]
          }), (0, Ce.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [Ue && "victory" === Ke && (0, Ce.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: Me("frontlineRoundEnd:comeback")
            }), (0, Ce.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, Ce.jsx)("b", {
                className: "Friendly",
                children: Fe
              }), " \u2013 ", (0, Ce.jsx)("b", {
                className: "Enemy",
                children: Je
              })]
            })]
          })]
        }), ke.length > 0 && (0, Ce.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": ke.length
          },
          children: [(0, Ce.jsx)(be.Suspense, {
            fallback: null,
            children: (0, Ce.jsx)(Mi, {
              className: "FrontlineRoundEndLineup",
              players: qe
            })
          }), ke.map((ee => (0, Ce.jsx)(ki, {
            mvp: Re[ee],
            place: ee
          }, ee)))]
        }), (0, Ce.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: Me("frontlineRoundEnd:nextFront", {
            map: oe,
            seconds: String(He)
          })
        })]
      });
      var fe
    }));

    function ki(ee) {
      let {
        mvp: ie,
        place: He
      } = ee;
      const {
        t: ye
      } = (0, Ye.v)(), [be, Me, Ke, Ue, Fe] = ie, [Je, oe] = ye(function(ee, ie) {
        return 1 === ie && "damage" !== ee ? `frontlineRoundEnd:${ee}One` : `frontlineRoundEnd:${ee}`
      }(Ke, Ue), {
        name: "\0",
        count: Ue.toLocaleString()
      }).split("\0");
      return (0, Ce.jsxs)("div", {
        className: De()("FrontlineMvpCard", `Place-${He+1}`, `Team-${Me}`),
        style: {
          "--revealMs": `${Ki[He]}ms`
        },
        children: [(0, Ce.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, Ce.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, Ce.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: ye(Ji[He])
        }), (0, Ce.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [Je, (0, Ce.jsx)("span", {
            className: "FrontlineMvpName",
            children: be
          }), oe]
        }), (0, Ce.jsx)("div", {
          className: "FrontlineMvpKit",
          children: Fe
        })]
      })
    }
    const qi = function(ee, ie, He, ye) {
      let {
        localPlayerId: Ke
      } = ye;
      const Ue = new Le,
        Fe = new bi;
      let Je = null,
        oe = null,
        Re = null,
        ke = null,
        qe = null,
        fe = [!1, !1];
      const Te = () => {
        var ee, ie;
        const [He, ye] = fe;
        null === (ee = oe) || void 0 === ee || ee.JY(!He), null === (ie = Re) || void 0 === ie || ie.JY(!ye)
      };
      return {
        onCreate: ee => {
          Je = ee, oe = new Be(ee, Ke), Re = new de(ee, Ke), ke = new ei(Ue), Te(), qe = (0, Me.z)((0, be.createElement)(be.Fragment, null, (0, be.createElement)(ne, {
            hud: Ue,
            crosshair: oe,
            damage: Re,
            markers: ke
          }), (0, be.createElement)(oi, {
            controller: Fe
          })))
        },
        onClose: () => {
          var ee, ie, He, ye;
          null === (ee = qe) || void 0 === ee || ee(), null === (ie = oe) || void 0 === ie || ie.dispose(), oe = null, null === (He = Re) || void 0 === He || He.dispose(), Re = null, null === (ye = ke) || void 0 === ye || ye.points.dispose(), ke = null, Je = null
        },
        onAfterRender: (ee, ie) => {
          var He, ye, be, Me, Ue;
          null === (He = oe) || void 0 === He || He.frame(ee, ie.tanHalfFovY), null === (ye = Re) || void 0 === ye || ye.frame(ie.cameraHeading), null === (be = ke) || void 0 === be || be.frame(ie, null !== (Me = null === (Ue = Je) || void 0 === Ue ? void 0 : Ue.getPositionView(Ke)) && void 0 !== Me ? Me : null)
        },
        onReceivedMessageFromServer: (ee, ie) => {
          "frontlineHud" === ee ? Ue.DR(ie) : "frontlineScoreboard" === ee ? Ue.receiveScoreboard(ie) : "frontlineRoundEnd" === ee ? Fe.DR(ie) : "frontlinePrefs" === ee && (fe = ie, Te())
        }
      }
    }
  },
  7044: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    const ye = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function be(ee) {
      return null === ye ? Array.from(ee) : Array.from(ye.segment(ee), (ee => {
        let {
          segment: ie
        } = ee;
        return ie
      }))
    }
  },
  39291: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      g: () => Me
    });
    const ye = new WeakMap;

    function be(ee) {
      let ie = ye.get(ee);
      return ie || (ie = {
        hidden: ee.hidden,
        x: NaN,
        y: NaN
      }, ye.set(ee, ie)), ie
    }

    function Me(ee, ie) {
      const He = be(ee);
      He.hidden !== ie && (He.hidden = ie, ee.hidden = ie)
    }

    function Ke(ee, ie, He) {
      const ye = be(ee);
      ye.x === ie && ye.y === He || (ye.x = ie, ye.y = He, ee.style.translate = `${ie}vw ${He}vh`)
    }
  },
  37893: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    const ye = {
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
for (const ee in modules) Object.freeze(modules[ee]);