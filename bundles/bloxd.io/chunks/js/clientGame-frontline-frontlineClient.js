export const id = 18;
export const ids = [18];
export const modules = {
  37756: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => rV,
      e: () => kV,
      f: () => vV,
      h: () => ZV
    });
    var JV = xV(35300),
      YV = xV(37762),
      UV = xV(37771),
      yV = xV(9335),
      pV = xV(1542),
      QV = xV(62),
      nV = xV(78),
      wV = xV(1321);

    function ZV() {
      var VV;
      return (0, pV.j)(YV.e, (0, YV.p)()), (0, wV.jsx)(wV.Fragment, {
        children: null === (VV = (0, YV.p)()) || void 0 === VV ? void 0 : VV.content
      })
    }

    function vV(VV) {
      var eV;
      let {
        show: xV
      } = VV;
      (0, pV.j)(YV.e, (0, YV.p)());
      const nV = null === (eV = (0, YV.p)()) || void 0 === eV ? void 0 : eV.menu;
      return (0, QV.useEffect)((() => {
        var VV;
        xV || (null === nV || void 0 === nV || null === (VV = nV.onClose) || void 0 === VV || VV.call(nV), (0, UV.q)())
      }), [xV, nV]), (0, QV.useEffect)((() => xV ? (0, yV.g)(UV.t, UV.g) : void 0), [xV]), (0, wV.jsx)(JV.c, {
        showing: xV,
        globallyUniqueKey: "clientGameMenu",
        children: null === nV || void 0 === nV ? void 0 : nV.content
      })
    }

    function rV(VV) {
      let {
        placement: eV = "bottom"
      } = VV;
      return (0, wV.jsx)("div", {
        id: `clientGameHud-${eV}`,
        style: {
          display: "contents"
        }
      })
    }

    function kV(VV) {
      let {
        children: eV,
        placement: xV = "bottom"
      } = VV;
      const [JV, YV] = (0, QV.useState)(null);
      return (0, QV.useEffect)((() => {
        YV(document.getElementById(`clientGameHud-${xV}`))
      }), [xV]), JV ? (0, nV.createPortal)(eV, JV) : null
    }
  },
  35300: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV
    });
    var JV = xV(5015),
      YV = xV(5020);

    function UV(VV) {
      let {
        children: eV,
        showing: xV,
        globallyUniqueKey: UV,
        alwaysMountChildren: yV = !1,
        doGameplayStartStopOnShow: pV = !0,
        keepsMovement: QV = !1
      } = VV;
      return (0, YV.b)(!0, xV, UV, QV), (0, JV.c)(pV, xV), xV || yV ? eV : null
    }
  },
  37852: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      f: () => yV,
      h: () => pV,
      i: () => QV
    });
    var JV = xV(62),
      YV = xV(3528);
    const UV = 8,
      yV = "InGameHeaderContainer",
      pV = "TopRightElements";

    function QV(VV) {
      const [eV] = (0, YV.e)(), [xV, QV] = (0, JV.useState)(!1);
      return (0, JV.useLayoutEffect)((() => {
        if (!VV) return;
        const eV = document.querySelector(`.${yV}`),
          xV = document.querySelector(`.${pV}`),
          JV = () => {
            const JV = VV.getBoundingClientRect(),
              YV = eV ? eV.getBoundingClientRect().right : 0,
              yV = xV ? xV.getBoundingClientRect().left : window.innerWidth,
              pV = JV.left < YV + UV,
              nV = JV.right > yV - UV;
            QV(pV || nV)
          };
        JV();
        const YV = new ResizeObserver(JV);
        return YV.observe(VV), eV && YV.observe(eV), xV && YV.observe(xV), () => {
          YV.disconnect()
        }
      }), [VV, eV]), xV
    }
  },
  40659: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      i: () => YV,
      l: () => UV
    });
    var JV = xV(62);

    function YV(VV) {
      return pV(VV, QV)
    }

    function UV(VV) {
      return pV(VV, nV)
    }

    function yV(VV) {
      return `${Math.floor(VV/60)}:${String(VV%60).padStart(2,"0")}`
    }

    function pV(VV, eV) {
      const [, xV] = (0, JV.useState)(null);
      return (0, JV.useEffect)((() => {
        if (0 === VV) return;
        const JV = window.setInterval((() => {
          const JV = eV(VV);
          xV((eV => (null === eV || void 0 === eV ? void 0 : eV.endsAt) === VV && eV.value === JV ? eV : {
            endsAt: VV,
            value: JV
          }))
        }), 250);
        return () => {
          window.clearInterval(JV)
        }
      }), [VV, eV]), eV(VV)
    }

    function QV(VV) {
      return (VV - performance.now()) / 1e3
    }

    function nV(VV) {
      return Math.max(0, Math.ceil(QV(VV)))
    }
  },
  37849: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    const JV = [{
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

    function YV(VV, eV, xV) {
      const YV = Math.abs(VV - eV),
        UV = Date.now() - xV;
      for (const yV of JV)
        if (VV < yV.maxDist) return YV >= yV.hardUpdateDist || UV > yV.timeBetweenSoftChecks && YV >= yV.softUpdateDist;
      return !1
    }
  },
  9335: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => YV
    });
    let JV = null;
    const YV = function(VV) {
        const eV = {
          cycle: VV,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return JV = eV, () => {
          JV === eV && (JV = null)
        }
      },
      UV = () => {
        var VV;
        return null !== (VV = JV) && void 0 !== VV && VV.canCycle() ? JV.cycle : null
      }
  },
  39693: (VV, eV, xV) => {
    function JV(VV, eV, xV) {
      var JV;
      const {
        width: YV,
        height: UV
      } = xV, yV = null !== (JV = VV.text) && void 0 !== JV ? JV : VV, pV = (yV.x / 100 - .5) * YV, QV = (yV.y / 100 - .5) * UV, nV = YV / 2 - eV.x;
      if (null !== VV.text && Math.abs(pV) <= nV && QV >= eV.top - UV / 2 && QV <= UV / 2 - eV.bottom) return {
        x: yV.x,
        y: yV.y
      };
      const wV = Math.min(0 === pV ? 1 / 0 : nV / Math.abs(pV), QV > 0 ? (UV / 2 - eV.bottom) / QV : QV < 0 ? (eV.top - UV / 2) / QV : 1 / 0);
      return !Number.isFinite(wV) || wV < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + pV * wV / YV * 100,
        y: 50 + QV * wV / UV * 100
      }
    }
    xV.d(eV, {
      c: () => JV
    })
  },
  37771: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => bV,
      j: () => EV,
      m: () => pV,
      o: () => vV,
      q: () => BV,
      r: () => ZV,
      s: () => qV,
      t: () => kV,
      u: () => jV
    });
    var JV = xV(27),
      YV = xV(32);
    const UV = "clientGameInventoryButtonsChanged",
      yV = new Map;

    function pV() {
      return [...yV.values()].sort(((VV, eV) => {
        var xV, JV;
        return (null !== (xV = VV.order) && void 0 !== xV ? xV : 0) - (null !== (JV = eV.order) && void 0 !== JV ? JV : 0)
      }))
    }
    let QV = null;

    function nV(VV) {
      QV = VV
    }
    let wV = !1;

    function ZV(VV) {
      wV = !0;
      try {
        VV.onClick()
      } finally {
        wV = !1
      }
      VV.panel && "clientGame" === JV.b.get("openInGameMenuName") && nV(VV.id)
    }

    function vV() {
      return wV
    }

    function rV() {
      return pV().filter((VV => VV.panel && !VV.disabled))
    }

    function kV(VV) {
      const eV = rV(),
        xV = eV.findIndex((VV => VV.id === QV));
      return !(xV < 0 || eV.length < 2) && (ZV(eV[(xV + VV + eV.length) % eV.length]), !0)
    }

    function bV() {
      return null !== QV && rV().length > 1
    }

    function EV() {
      nV(null)
    }

    function BV() {
      "inventory" !== JV.b.get("openInGameMenuName") && nV(null)
    }

    function jV() {
      const VV = QV;
      return nV(null), VV
    }

    function qV(VV) {
      return yV.set(VV.id, VV), YV.h.QZ(UV, pV(), !0), () => {
        yV.get(VV.id) === VV && (yV.delete(VV.id), YV.h.QZ(UV, pV()))
      }
    }
  },
  37762: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV,
      h: () => jV,
      i: () => EV,
      m: () => BV,
      o: () => vV,
      p: () => nV,
      r: () => bV,
      v: () => rV,
      z: () => wV
    });
    var JV = xV(27),
      YV = xV(32),
      UV = xV(1332),
      yV = xV(37771);
    const pV = "clientGameUiChanged";
    let QV = null;

    function nV() {
      return QV
    }

    function wV(VV, eV) {
      const xV = {
        content: VV,
        menu: eV
      };
      return QV = xV, YV.h.QZ(pV, QV, !0), () => {
        QV === xV && (QV = null, kV = !1, EV(), YV.h.QZ(pV, null))
      }
    }
    let ZV = null;

    function vV() {
      return ZV
    }

    function rV(VV) {
      return ZV = VV, () => {
        ZV === VV && (ZV = null)
      }
    }
    let kV = !1;

    function bV() {
      const VV = JV.b.get("openInGameMenuName");
      "clientGame" !== VV && (kV = "inventory" === VV), (0, yV.o)() || (0, yV.j)(), (0, UV.p)(UV.d), JV.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function EV() {
      qV(!1)
    }

    function BV() {
      qV(kV)
    }

    function jV() {
      kV && qV(!1)
    }

    function qV(VV) {
      "clientGame" === JV.b.get("openInGameMenuName") && JV.b.set({
        openInGameMenuName: VV ? "inventory" : null
      }), VV || (0, yV.j)(), kV = !1
    }
  },
  40663: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => QV
    });
    var JV = xV(37849),
      YV = xV(1220),
      UV = xV(1279),
      yV = xV(39648),
      pV = xV(39693);
    class QV {
      constructor(VV, eV) {
        var xV;
        this.classes = VV, this.distanceKey = eV, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.ik = !1, this.hq = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.hq), null === (xV = window.visualViewport) || void 0 === xV || xV.addEventListener("resize", this.hq)
      }
      bindMarker(VV) {
        const eV = this.refs.get(VV);
        if (eV) return eV;
        const xV = eV => {
          var JV;
          null === (JV = this.markers.get(VV)) || void 0 === JV || JV.stopObserving(), this.markers.delete(VV), eV && !this.ik ? (this.markers.set(VV, this.mount(eV)), this.refs.set(VV, xV)) : this.refs.delete(VV)
        };
        return this.refs.set(VV, xV), xV
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(VV) {
        this.render = VV
      }
      update(VV, eV, xV, JV, YV) {
        const UV = this.markers.get(VV);
        UV && (UV.target ??= [0, 0, 0], UV.target[0] = eV, UV.target[1] = xV, UV.target[2] = JV, this.place(UV), this.XJ(UV, YV && Math.hypot(eV - YV[0], xV - YV[1], JV - YV[2])))
      }
      dispose() {
        var VV;
        this.ik = !0, window.removeEventListener("resize", this.hq), null === (VV = window.visualViewport) || void 0 === VV || VV.removeEventListener("resize", this.hq);
        for (const eV of this.markers.values()) eV.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(VV) {
        const {
          render: eV,
          viewport: xV
        } = this;
        if (!eV || !VV.target) return;
        const JV = (50 - eV.screenBandPct.y) / 100 * xV.height,
          YV = {
            x: VV.halfSize.width + 8,
            top: VV.halfSize.height + 8,
            bottom: VV.halfSize.height + VV.labelsBelow + JV
          },
          UV = eV.projectWorldPosToViewport(VV.target),
          QV = null !== UV && void 0 !== UV ? UV : eV.projectWorldPosToScreenPos(VV.target),
          nV = (0, pV.c)({
            x: QV.x,
            y: QV.y,
            text: UV
          }, YV, xV);
        (0, yV.b)(VV.root, Math.round(100 * nV.x) / 100, Math.round(100 * nV.y) / 100)
      }
      XJ(VV, eV) {
        if (null === eV) return void(null !== VV.metres && (VV.metres = null, VV.distance.textContent = ""));
        const xV = Date.now();
        (null === VV.metres || (0, JV.e)(eV, VV.metres, VV.metresShownAt)) && (VV.metres = Math.round(eV), VV.metresShownAt = xV, VV.distance.textContent = (0, YV.u)(UV.c.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(VV.metres)
        }))
      }
      mount(VV) {
        const eV = {
            root: VV,
            distance: VV.querySelector(`.${this.classes.distance}`),
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
          xV = VV.querySelector(`.${this.classes.labels}`),
          JV = new ResizeObserver((() => {
            eV.halfSize = {
              width: Math.max(VV.offsetWidth, xV.offsetWidth) / 2,
              height: VV.offsetHeight / 2
            }, eV.labelsBelow = xV.offsetTop + xV.offsetHeight - VV.offsetHeight, this.place(eV)
          }));
        return JV.observe(VV, {
          box: "border-box"
        }), JV.observe(xV, {
          box: "border-box"
        }), eV.stopObserving = () => {
          JV.disconnect()
        }, eV
      }
    }
  },
  40652: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => re
    });
    const JV = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes"];
    var YV = xV(62),
      UV = xV(37762),
      yV = xV(38212),
      pV = xV(37786),
      QV = xV(1838),
      nV = xV(32);
    const wV = {
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
    const ZV = 32;

    function vV(VV, eV, xV, JV) {
      return {
        tag: "line",
        attrs: {
          x1: VV,
          y1: eV,
          x2: xV,
          y2: JV,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function rV(VV) {
      return {
        tag: "circle",
        attrs: {
          cx: ZV,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZV,
          r: VV,
          class: "Fill"
        }
      }
    }

    function kV(VV, eV) {
      return {
        tag: "path",
        attrs: {
          d: VV,
          "stroke-width": eV
        }
      }
    }

    function bV(VV, eV, xV) {
      return {
        tag: "circle",
        attrs: {
          cx: ZV,
          cy: ZV,
          r: VV,
          "stroke-width": eV,
          class: xV
        }
      }
    }

    function EV(VV, eV, xV) {
      return {
        tag: "text",
        attrs: {
          x: VV,
          y: eV,
          class: "Fill Label"
        },
        text: xV
      }
    }
    const BV = {
      pistol: VV => [vV(ZV, ZV - VV - 5, ZV, ZV - VV), vV(ZV - VV - 5, ZV, ZV - VV, ZV), vV(ZV + VV, ZV, ZV + VV + 5, ZV), rV(1.4)],
      rifle: VV => [vV(ZV, ZV - VV - 8, ZV, ZV - VV), vV(ZV, ZV + VV, ZV, ZV + VV + 8), vV(ZV - VV - 8, ZV, ZV - VV, ZV), vV(ZV + VV, ZV, ZV + VV + 8, ZV), rV(1)],
      smg: VV => {
        const eV = Math.PI / 2,
          xV = [];
        for (let yV = 0; yV < 4; yV++) xV.push((YV = yV * eV + .35, UV = (yV + 1) * eV - .35, kV(`M${ZV+(JV=6+VV)*Math.cos(YV)} ${ZV+JV*Math.sin(YV)} A${JV} ${JV} 0 0 1 ${ZV+JV*Math.cos(UV)} ${ZV+JV*Math.sin(UV)}`, 2)));
        var JV, YV, UV;
        return [...xV, rV(1.4)]
      },
      shotgun: VV => [bV(VV, 3, "Ring Outline"), bV(VV, 1.5, "Ring")],
      marksman: VV => [kV(`M${26-VV/2} ${39+VV/2} L32 33 L${38+VV/2} ${39+VV/2}`, 2), vV(14 - VV, ZV, 24 - VV, ZV, 1.5), vV(40 + VV, ZV, 50 + VV, ZV, 1.5), vV(14 - VV, 30, 14 - VV, 34, 1.5), vV(50 + VV, 30, 50 + VV, 34, 1.5)],
      machineGun: VV => {
        const eV = 10 + VV,
          xV = [];
        for (const [JV, YV] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) xV.push(kV(`M${ZV+JV*eV} ${ZV+YV*(eV-5)} L${ZV+JV*eV} ${ZV+YV*eV} L${ZV+JV*(eV-5)} ${ZV+YV*eV}`, 2));
        return [...xV, vV(ZV, 28, ZV, 36, 1.5), vV(28, ZV, 36, ZV, 1.5)]
      },
      launcher: () => [vV(14, 30, 50, 30, 1.5), vV(ZV, 24, ZV, 52, 1.5), vV(28, 38, 36, 38, 1.5), vV(29, 44, 35, 44, 1.5), vV(30, 50, 34, 50, 1.5), EV(38, 40, "100"), EV(37, 46, "200"), rV(1.4, 30)],
      melee: () => [kV("M32 26 L38 32 L32 38 L26 32 Z", 1.5), rV(1.2)],
      throwable: () => [rV(1.6)]
    };

    function jV(VV) {
      let {
        tag: eV,
        attrs: xV,
        text: JV
      } = VV, YV = `<${eV}`;
      for (const [UV, yV] of Object.entries(xV)) YV += ` ${UV}="${yV}"`;
      return void 0 === JV ? `${YV}/>` : `${YV}>${JV}</${eV}>`
    }
    class qV {
      constructor(VV, eV) {
        this.api = VV, this.localPlayerId = eV, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = VV => {
          this.element = VV, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, VV && !this.enabled && (VV.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, QV.getRemInPx)()))
        }, this.tokens = [nV.h.subscribe("aimingOverlay", (VV => {
          this.sniperOverlay = "sniper" === VV
        })), nV.h.subscribe("mouseState", (VV => {
          let {
            isDown: eV
          } = VV;
          this.mouseDown = eV
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      pW(VV) {
        VV !== this.enabled && (this.enabled = VV, this.drawnVisible = null, VV || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(VV, eV) {
        var xV, JV;
        if (!this.enabled) return;
        const {
          api: YV
        } = this, UV = YV.isAlive(this.localPlayerId) && null !== (xV = null === (JV = YV.bJV(this.localPlayerId)) || void 0 === JV ? void 0 : JV.name) && void 0 !== xV ? xV : null, yV = (pV = UV) && wV[pV] || null;
        var pV;
        if (this.setOwnsCrosshair(null !== yV), !this.element) return;
        const QV = YV.getHeldGunInaccuracy(),
          nV = null !== QV,
          ZV = null !== yV && !this.sniperOverlay && YV.isCrosshairShown();
        if (ZV !== this.drawnVisible && (this.drawnVisible = ZV, this.element.style.display = ZV ? "block" : "none"), !ZV) return;
        const vV = nV ? function(VV) {
            return "launcher" === VV || "melee" === VV || "throwable" === VV ? "none" : "shotgun" === VV ? "cone" : "offset"
          }(yV) : "none",
          rV = null !== QV && void 0 !== QV ? QV : 0;
        "cone" === vV ? this.drawCone(yV, this.coneRadiusVh(rV, eV) * this.gapPerVh, VV) : (this.coneDrawn = !1, this.draw(yV, "none" === vV ? 2 : this.offsetGap(rV)));
        const kV = !nV && this.mouseDown;
        kV !== this.drawnPressed && (this.drawnPressed = kV, this.element.classList.toggle("Pressed", kV))
      }
      dispose() {
        for (const VV of this.tokens) nV.h.unsubscribe(VV);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(VV, eV) {
        var xV, JV;
        VV !== this.drawnFamily ? (this.drawnFamily = VV, this.drawnGap = eV, this.element.innerHTML = function(VV, eV) {
          return `<svg viewBox="0 0 64 64">${BV[VV](eV).map(jV).join("")}</svg>`
        }(VV, eV), this.shapes = Array.from(null !== (xV = null === (JV = this.element.firstElementChild) || void 0 === JV ? void 0 : JV.children) && void 0 !== xV ? xV : [])) : eV !== this.drawnGap && (this.drawnGap = eV, function(VV, eV, xV) {
          const JV = BV[eV](xV);
          for (let YV = 0; YV < JV.length; YV++)
            for (const [eV, xV] of Object.entries(JV[YV].attrs)) {
              const JV = String(xV);
              VV[YV].getAttribute(eV) !== JV && VV[YV].setAttribute(eV, JV)
            }
        }(this.shapes, VV, eV))
      }
      drawCone(VV, eV, xV) {
        VV === this.drawnFamily && this.coneDrawn ? this.shownRadius += (eV - this.shownRadius) * (1 - Math.exp(-xV / 80)) : this.shownRadius = eV, this.coneDrawn = !0, this.draw(VV, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(VV, eV) {
        if (!(eV > 0)) return 1;
        const xV = VV * yV.h / 2;
        return Math.max(50 * Math.tan(xV) / eV, 1)
      }
      offsetGap(VV) {
        const eV = 2 + ((0, pV.d)(VV) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * eV) / 2)
      }
      setOwnsCrosshair(VV) {
        VV !== this.ownsCrosshair && (this.ownsCrosshair = VV, document.body.classList.toggle("FrontlineCustomCrosshair", VV))
      }
    }
    const tV = "FrontlineCustomDamage",
      FV = .45,
      TV = .2;
    class PV {
      constructor(VV, eV) {
        this.api = VV, this.localPlayerId = eV, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.cU = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = VV => {
          var eV, xV;
          this.clearHits(), this.root = VV, this.lowLayer = null !== (eV = null === VV || void 0 === VV ? void 0 : VV.querySelector(".FrontlineDamageLow")) && void 0 !== eV ? eV : null, this.arcLayer = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.querySelector(".FrontlineDamageArcs")) && void 0 !== xV ? xV : null, this.showRoot(), this.drawLow()
        }, this.token = nV.h.subscribe("damagedByOtherPlayer", (VV => {
          let {
            direction: eV,
            aU: xV
          } = VV;
          this.onHurt(eV, xV)
        })), this.syncHealth(), document.body.classList.add(tV)
      }
      pW(VV) {
        VV !== this.enabled && (this.enabled = VV, document.body.classList.toggle(tV, VV), VV || this.clearHits(), this.showRoot())
      }
      frame(VV) {
        this.syncHealth(), this.cameraHeading = VV;
        for (const eV of this.arcs) this.drawArcAngle(eV)
      }
      dispose() {
        nV.h.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(tV)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const VV = this.api.getClientOption(this.localPlayerId, "_health"),
          eV = this.api.getClientOption(this.localPlayerId, "_shield"),
          xV = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(VV, this.readHealth) && Object.is(eV, this.readShield) && Object.is(xV, this.readMaxHealth)) return;
        if (this.readHealth = VV, this.readShield = eV, this.readMaxHealth = xV, null === VV || void 0 === VV || !xV) return this.lastHealthPool = null, this.maxHealth = null, this.cU = 1, this.dead = !1, void this.drawLow();
        const JV = VV + (null !== eV && void 0 !== eV ? eV : 0);
        if (null !== this.lastHealthPool && JV < this.lastHealthPool) {
          const VV = performance.now(),
            eV = (this.lastHealthPool - JV) / xV;
          this.lastDrop = VV - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + eV,
            at: this.lastDrop.at
          } : {
            frac: eV,
            at: VV
          }
        }
        this.dead = VV <= 0, this.dead && this.clearHits(), this.lastHealthPool = JV, this.maxHealth = xV, this.cU = VV > 0 ? VV / xV : 1, this.drawLow()
      }
      onHurt(VV, eV) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const xV = Math.min(1, this.takeDamageFrac(eV) / .3);
        null !== VV && this.showArc(VV, xV), this.flashEdge(null === VV ? null : VV - this.cameraHeading, .4 + .6 * xV)
      }
      takeDamageFrac(VV) {
        if (void 0 !== VV && this.maxHealth) return VV / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: eV
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, eV
      }
      drawLow() {
        if (!this.lowLayer) return;
        const VV = NV((FV - this.cU) / .25),
          eV = NV((TV - this.cU) / .15000000000000002),
          xV = this.cU < FV;
        this.lowLayer.classList.toggle("Active", xV), this.lowLayer.classList.toggle("Critical", this.cU < TV), this.lowLayer.style.opacity = String(xV ? .55 + .3 * VV + .15 * eV : 0)
      }
      showArc(VV, eV) {
        var xV, JV;
        if (!this.arcLayer) return;
        let YV = this.arcs.find((eV => AV(eV.direction, VV) < .6));
        if (!YV) {
          const eV = document.createElement("div");
          eV.className = "FrontlineDamageArc", eV.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(eV), YV = {
            element: eV,
            direction: VV,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(YV)
        }
        YV.direction = VV, this.drawArcAngle(YV);
        const UV = YV.fade ? Number(getComputedStyle(YV.element).opacity) : 0;
        null === (xV = YV.fade) || void 0 === xV || xV.cancel(), null === (JV = YV.pop) || void 0 === JV || JV.cancel(), YV.element.style.opacity = "1";
        const yV = YV.element.animate([{
          opacity: UV
        }, {
          opacity: 1
        }], 144);
        YV.fade = yV, YV.pop = YV.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * eV
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const pV = YV;
        yV.onfinish = () => {
          if (pV.fade !== yV) return;
          const VV = pV.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          VV.startTime = yV.startTime, pV.fade = VV, VV.onfinish = () => {
            pV.fade === VV && (pV.element.remove(), XV(this.arcs, pV))
          }
        }
      }
      drawArcAngle(VV) {
        const eV = VV.direction - this.cameraHeading;
        (null === VV.drawnAngle || Math.abs(eV - VV.drawnAngle) > .005) && (VV.drawnAngle = eV, VV.element.style.rotate = `${eV}rad`)
      }
      flashEdge(VV, eV) {
        var xV, JV, YV;
        if (!this.root) return;
        let UV = this.flashes.find((eV => null === eV.angle || null === VV ? eV.angle === VV : AV(eV.angle, VV) < .5));
        if (!UV) {
          const eV = document.createElement("div");
          eV.className = "FrontlineDamageFlash";
          const xV = eV.appendChild(document.createElement("div"));
          xV.className = "FrontlineDamageFlashGlow", this.root.insertBefore(eV, this.arcLayer), UV = {
            element: eV,
            glow: xV,
            angle: VV,
            level: 0,
            animation: null
          }, this.flashes.push(UV)
        }
        const yV = null === (xV = UV.animation) || void 0 === xV || null === (JV = xV.effect) || void 0 === JV ? void 0 : JV.getComputedTiming().progress,
          pV = null === yV || void 0 === yV ? 0 : UV.level * (1 - yV);
        UV.level = Math.min(1, Math.max(eV, pV + .6 * eV)), UV.angle = VV;
        const {
          x: QV,
          y: nV,
          rx: wV,
          ry: ZV
        } = function(VV, eV) {
          const xV = window.innerWidth,
            JV = window.innerHeight;
          if (null === VV) return {
            x: xV / 2,
            y: JV / 2,
            rx: 0,
            ry: 0
          };
          const YV = Math.sin(VV),
            UV = -Math.cos(VV),
            yV = xV / 2 / Math.max(1e-6, Math.abs(YV)),
            pV = JV / 2 / Math.max(1e-6, Math.abs(UV)),
            QV = Math.min(yV, pV),
            nV = Math.round(xV / 2 + YV * QV),
            wV = Math.round(JV / 2 + UV * QV),
            ZV = JV / 100 * (.85 + .25 * eV),
            vV = yV <= pV,
            rV = Math.round((vV ? 30 : 74) * ZV),
            kV = Math.round((vV ? 58 : 26) * ZV);
          return {
            x: nV,
            y: wV,
            rx: rV,
            ry: kV
          }
        }(VV, UV.level), {
          style: vV
        } = UV.glow;
        UV.glow.classList.toggle("Everywhere", null === VV), vV.setProperty("--glowX", `${QV}px`), vV.setProperty("--glowY", `${nV}px`), vV.setProperty("--glowRx", `${wV}px`), vV.setProperty("--glowRy", `${ZV}px`), UV.element.style.transformOrigin = `${QV}px ${nV}px`, null === (YV = UV.animation) || void 0 === YV || YV.cancel();
        const rV = UV.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: UV.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * UV.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * UV.level
        });
        UV.animation = rV;
        const kV = UV;
        rV.onfinish = () => {
          kV.animation === rV && (kV.element.remove(), XV(this.flashes, kV))
        }
      }
      clearHits() {
        for (const JV of this.arcs) {
          var VV, eV;
          null === (VV = JV.fade) || void 0 === VV || VV.cancel(), JV.fade = null, null === (eV = JV.pop) || void 0 === eV || eV.cancel(), JV.element.remove()
        }
        this.arcs.length = 0;
        for (const JV of this.flashes) {
          var xV;
          null === (xV = JV.animation) || void 0 === xV || xV.cancel(), JV.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function AV(VV, eV) {
      return Math.abs(Math.atan2(Math.sin(VV - eV), Math.cos(VV - eV)))
    }

    function NV(VV) {
      return Math.max(0, Math.min(1, VV))
    }

    function XV(VV, eV) {
      const xV = VV.indexOf(eV); - 1 !== xV && VV.splice(xV, 1)
    }
    var MV = xV(1146),
      zV = xV.n(MV),
      GV = xV(37756),
      WV = xV(37852),
      RV = xV(1220),
      gV = xV(1542),
      DV = xV(40659);
    const iV = "frontlineHudChanged",
      CV = "frontlineScoreboardChanged";
    class aV {
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
      RZ(VV) {
        this.wire = VV, nV.h.QZ(iV, VV, !0)
      }
      receiveScoreboard(VV) {
        let eV = "scoreboard" === VV[0] ? performance.now() + VV[5] : 0;
        const xV = this.scoreboard.endsAt;
        0 !== eV && 0 !== xV && Math.abs(eV - xV) < 1e3 && (eV = xV), this.scoreboard = {
          wire: VV,
          endsAt: eV
        }, nV.h.QZ(CV, this.scoreboard, !0)
      }
    }
    var oV = xV(1321);
    const cV = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function hV(VV) {
      let {
        className: eV,
        point: xV
      } = VV;
      const [JV, YV, UV, yV, pV, QV] = xV;
      return (0, oV.jsxs)("div", {
        className: zV()(eV, `Owner-${YV||"None"}`, `Leader-${yV||"None"}`, {
          Contested: pV,
          Here: QV
        }),
        children: [(0, oV.jsx)("span", {
          className: "FrontlinePointLetter",
          children: JV
        }), (0, oV.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${UV}%`
          }
        })]
      })
    }
    const lV = (0, YV.memo)((function(VV) {
        let {
          points: eV,
          markers: xV
        } = VV;
        const {
          t: JV
        } = (0, RV.A)();
        return eV ? (0, oV.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: eV.map((VV => {
            const [eV, , , , , , , YV] = VV;
            return (0, oV.jsxs)("div", {
              ref: xV.points.bindMarker(eV),
              className: "FrontlinePointMarker",
              children: [(0, oV.jsx)(hV, {
                className: "FrontlinePointMarkerTile",
                point: VV
              }), (0, oV.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [YV && (0, oV.jsx)("span", {
                  className: zV()("FrontlinePointMarkerHomeTurf", `Team-${YV}`),
                  children: JV("frontlineHud:homeTurf", {
                    team: JV(cV[YV])
                  })
                }), (0, oV.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, eV)
          }))
        }) : null
      })),
      LV = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      fV = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function mV(VV) {
      let {
        hud: eV,
        crosshair: xV,
        damage: JV,
        markers: YV
      } = VV;
      const UV = (0, gV.j)(iV, eV.getWire()),
        yV = (0, gV.j)(CV, eV.getScoreboard());
      return (0, oV.jsxs)(oV.Fragment, {
        children: [(0, oV.jsx)(KV, {
          damage: JV
        }), (0, oV.jsx)(lV, {
          points: "scoreboard" === yV.wire[0] ? yV.wire[6] : null,
          markers: YV
        }), (0, oV.jsx)(uV, {
          view: yV
        }), (0, oV.jsx)("div", {
          className: "FrontlineReticle",
          ref: xV.bindElement
        }), (0, oV.jsx)(GV.e, {
          children: (0, oV.jsx)(HV, {
            wire: UV
          })
        })]
      })
    }
    const KV = (0, YV.memo)((function(VV) {
        let {
          damage: eV
        } = VV;
        return (0, oV.jsxs)("div", {
          className: "FrontlineDamage",
          ref: eV.bindElement,
          children: [(0, oV.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, oV.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, oV.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      HV = (0, YV.memo)((function(VV) {
        let {
          wire: eV
        } = VV;
        const {
          t: xV
        } = (0, RV.A)();
        if ("capture" === eV[0]) {
          const [, VV, JV, YV, UV, yV, pV] = eV, QV = Math.round(YV / 100 * 24);
          return (0, oV.jsxs)("div", {
            className: zV()("FrontlinePlate", `Status-${JV}`, `Leader-${UV||"None"}`),
            children: [(0, oV.jsx)(dV, {}), (0, oV.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, oV.jsx)("span", {
                className: "FrontlineObjective",
                children: VV
              }), (0, oV.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, oV.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: xV("frontlineHud:objective", {
                    point: VV,
                    friendly: yV,
                    enemy: pV
                  })
                }), (0, oV.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: xV(LV[JV])
                })]
              }), (0, oV.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(YV).padStart(3, "0"), (0, oV.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, oV.jsx)(SV, {
              segments: 24,
              lit: QV
            })]
          })
        }
        if ("alert" === eV[0]) {
          const [, VV, JV, YV] = eV;
          return (0, oV.jsxs)("div", {
            className: zV()("FrontlinePlate", "FrontlineAlert", `Tone-${YV}`),
            children: [(0, oV.jsx)(dV, {}), (0, oV.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: xV(fV[VV])
            }), (0, oV.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: JV
            })]
          })
        }
        return null
      })),
      uV = (0, YV.memo)((function(VV) {
        let {
          view: eV
        } = VV;
        const {
          t: xV
        } = (0, RV.A)(), JV = (0, YV.useRef)(null), UV = function(VV, eV) {
          const [xV, JV] = (0, YV.useState)(!1);
          return (0, YV.useLayoutEffect)((() => {
            const eV = VV.current;
            if (!eV) return;
            const xV = document.querySelector(`.${WV.f}`),
              YV = document.querySelector(`.${WV.h}`),
              UV = () => {
                var VV;
                const UV = eV.querySelector(".FrontlineTeamTrack"),
                  yV = (0, QV.getRemInPx)(),
                  pV = eV.getBoundingClientRect().width - 2 * (null !== (VV = null === UV || void 0 === UV ? void 0 : UV.getBoundingClientRect().width) && void 0 !== VV ? VV : 0),
                  nV = window.innerWidth / 2,
                  wV = xV ? xV.getBoundingClientRect().right : 0,
                  ZV = YV ? YV.getBoundingClientRect().left : window.innerWidth,
                  vV = Math.min(nV - wV, ZV - nV) - WV.d - pV / 2,
                  rV = vV < 6 * yV,
                  kV = rV ? (window.innerWidth - pV) / 2 - WV.d : vV;
                eV.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(kV,14*yV)))}px`), JV(rV)
              };
            UV();
            const yV = new ResizeObserver(UV);
            for (const VV of [eV, xV, YV]) VV && yV.observe(VV);
            return window.addEventListener("resize", UV), () => {
              yV.disconnect(), window.removeEventListener("resize", UV)
            }
          }), [VV, eV]), xV
        }(JV, "scoreboard" === eV.wire[0]);
        if ("scoreboard" !== eV.wire[0]) return null;
        const [, yV, pV, nV, wV, , ZV] = eV.wire, vV = "Red" === yV ? "Blue" : "Red";
        return (0, oV.jsxs)("div", {
          className: zV()("FrontlineScoreboardContainer", {
            Below: UV
          }),
          children: [(0, oV.jsxs)("div", {
            ref: JV,
            className: "FrontlineScoreboard",
            children: [(0, oV.jsx)(dV, {}), (0, oV.jsx)(sV, {
              team: yV,
              tickets: pV,
              goal: wV,
              side: "Friendly"
            }), (0, oV.jsx)("div", {
              className: "FrontlinePoints",
              children: ZV.map((VV => (0, oV.jsx)(hV, {
                className: "FrontlinePoint",
                point: VV
              }, VV[0])))
            }), (0, oV.jsx)(sV, {
              team: vV,
              tickets: nV,
              goal: wV,
              side: "Enemy"
            })]
          }), (0, oV.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, oV.jsx)(IV, {
              endsAt: eV.endsAt
            }), (0, oV.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: xV("frontlineHud:ticketGoal", {
                goal: wV
              })
            })]
          })]
        })
      }));

    function sV(VV) {
      let {
        team: eV,
        tickets: xV,
        goal: JV,
        side: YV
      } = VV;
      const {
        t: UV
      } = (0, RV.A)(), yV = String(xV).padStart(3, "0"), pV = yV.search(/[1-9]/), QV = -1 === pV ? yV : yV.slice(0, pV), nV = Math.min(20, Math.floor(xV / JV * 20));
      return (0, oV.jsxs)("div", {
        className: zV()("FrontlineTeamScore", YV, `Team-${eV}`),
        children: [(0, oV.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, oV.jsx)("span", {
            className: "Lead",
            children: QV
          }), -1 !== pV && yV.slice(pV)]
        }), (0, oV.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, oV.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: UV(cV[eV])
          }), (0, oV.jsx)(SV, {
            segments: 20,
            lit: nV
          })]
        })]
      })
    }

    function SV(VV) {
      let {
        segments: eV,
        lit: xV
      } = VV;
      return (0, oV.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: eV
        }, ((VV, eV) => (0, oV.jsx)("i", {
          className: zV()({
            Lit: eV < xV
          })
        }, eV)))
      })
    }

    function IV(VV) {
      let {
        endsAt: eV
      } = VV;
      const xV = (0, DV.l)(eV);
      return (0, oV.jsx)("div", {
        className: zV()("FrontlineClock", {
          Urgent: xV <= 60
        }),
        children: (0, DV.e)(xV)
      })
    }

    function dV() {
      return (0, oV.jsxs)(oV.Fragment, {
        children: [(0, oV.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, oV.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var OV = xV(40663);
    class Ve {
      constructor(VV) {
        this.hud = VV, this.points = new OV.d({
          labels: "FrontlinePointMarkerLabels",
          distance: "FrontlinePointMarkerDistance"
        }, "frontlineHud:markerDistance")
      }
      frame(VV, eV) {
        this.points.setRender(VV);
        const xV = this.hud.getScoreboard().wire;
        if ("scoreboard" === xV[0] && this.points.hasMarkers())
          for (const [JV, , , , , , YV] of xV[6]) YV && this.points.update(JV, YV[0], YV[1] + 2.5, YV[2], eV)
      }
    }
    var ee = xV(6996),
      xe = xV(2919);
    const Je = "frontlineRoundEndChanged";
    class Ye {
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
      RZ(VV) {
        const eV = "roundEnd" === VV[0] ? performance.now() + VV[5] : 0;
        this.view = {
          wire: VV,
          key: this.view.key + 1,
          endsAt: eV
        }, nV.h.QZ(Je, this.view, !0)
      }
    }
    const Ue = (0, YV.lazy)((() => (0, xe.c)(Promise.all([xV.e(257), xV.e(225)]).then((() => xV(44648))), (VV => VV.FrontlineMvpLineup)))),
      ye = [4800, 4e3, 3200],
      pe = [1, 0, 2],
      Qe = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      ne = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function we(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, gV.j)(Je, eV.getView()),
        JV = (0, DV.i)(xV.endsAt);
      return "roundEnd" !== xV.wire[0] || 1e3 * JV < -2e3 ? null : (0, oV.jsx)(Ze, {
        wire: xV.wire,
        secondsLeft: Math.max(0, Math.ceil(JV))
      }, xV.key)
    }
    const Ze = (0, YV.memo)((function(VV) {
      let {
        wire: eV,
        secondsLeft: xV
      } = VV;
      const {
        t: UV
      } = (0, RV.A)(), [, yV, pV, QV, nV, , wV, ZV] = eV, vV = (0, YV.useMemo)((() => pe.filter((VV => VV < ZV.length))), [ZV]), rV = (0, YV.useMemo)((() => vV.map((VV => {
        const [, , , , , eV, xV] = ZV[VV];
        return {
          cosmetics: JV.map(((VV, xV) => [VV, eV[xV]])),
          size: 0 === VV ? 1.15 : .85,
          heldGun: {
            name: xV,
            aimed: 0 === VV
          },
          showAfterMs: ye[VV]
        }
      }))), [ZV, vV]);
      return (0, oV.jsxs)("div", {
        className: zV()("FrontlineRoundEnd", `Result-${yV}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, oV.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, oV.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, oV.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, oV.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, oV.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (kV = UV(Qe[yV]), /\p{Script=Arabic}/u.test(kV) ? [kV] : (0, ee.e)(kV)).map(((VV, eV) => (0, oV.jsx)("span", {
              style: {
                "--letter": eV
              },
              children: VV
            }, eV)))]
          }), (0, oV.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [pV && "victory" === yV && (0, oV.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: UV("frontlineRoundEnd:comeback")
            }), (0, oV.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, oV.jsx)("b", {
                className: "Friendly",
                children: QV
              }), " \u2013 ", (0, oV.jsx)("b", {
                className: "Enemy",
                children: nV
              })]
            })]
          })]
        }), vV.length > 0 && (0, oV.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": vV.length
          },
          children: [(0, oV.jsx)(YV.Suspense, {
            fallback: null,
            children: (0, oV.jsx)(Ue, {
              className: "FrontlineRoundEndLineup",
              players: rV
            })
          }), vV.map((VV => (0, oV.jsx)(ve, {
            mvp: ZV[VV],
            place: VV
          }, VV)))]
        }), (0, oV.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: UV("frontlineRoundEnd:nextFront", {
            map: wV,
            seconds: String(xV)
          })
        })]
      });
      var kV
    }));

    function ve(VV) {
      let {
        mvp: eV,
        place: xV
      } = VV;
      const {
        t: JV
      } = (0, RV.A)(), [YV, UV, yV, pV, QV] = eV, [nV, wV] = JV(function(VV, eV) {
        return 1 === eV && "damage" !== VV ? `frontlineRoundEnd:${VV}One` : `frontlineRoundEnd:${VV}`
      }(yV, pV), {
        name: "\0",
        count: pV.toLocaleString()
      }).split("\0");
      return (0, oV.jsxs)("div", {
        className: zV()("FrontlineMvpCard", `Place-${xV+1}`, `Team-${UV}`),
        style: {
          "--revealMs": `${ye[xV]}ms`
        },
        children: [(0, oV.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, oV.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, oV.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: JV(ne[xV])
        }), (0, oV.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [nV, (0, oV.jsx)("span", {
            className: "FrontlineMvpName",
            children: YV
          }), wV]
        }), (0, oV.jsx)("div", {
          className: "FrontlineMvpKit",
          children: QV
        })]
      })
    }
    const re = function(VV, eV, xV, JV) {
      let {
        localPlayerId: yV
      } = JV;
      const pV = new aV,
        QV = new Ye;
      let nV = null,
        wV = null,
        ZV = null,
        vV = null,
        rV = null,
        kV = [!1, !1];
      const bV = () => {
        var VV, eV;
        const [xV, JV] = kV;
        null === (VV = wV) || void 0 === VV || VV.pW(!xV), null === (eV = ZV) || void 0 === eV || eV.pW(!JV)
      };
      return {
        onCreate: VV => {
          nV = VV, wV = new qV(VV, yV), ZV = new PV(VV, yV), vV = new Ve(pV), bV(), rV = (0, UV.z)((0, YV.createElement)(YV.Fragment, null, (0, YV.createElement)(mV, {
            hud: pV,
            crosshair: wV,
            damage: ZV,
            markers: vV
          }), (0, YV.createElement)(we, {
            controller: QV
          })))
        },
        onClose: () => {
          var VV, eV, xV, JV;
          null === (VV = rV) || void 0 === VV || VV(), null === (eV = wV) || void 0 === eV || eV.dispose(), wV = null, null === (xV = ZV) || void 0 === xV || xV.dispose(), ZV = null, null === (JV = vV) || void 0 === JV || JV.points.dispose(), vV = null, nV = null
        },
        onAfterRender: (VV, eV) => {
          var xV, JV, YV, UV, pV;
          null === (xV = wV) || void 0 === xV || xV.frame(VV, eV.tanHalfFovY), null === (JV = ZV) || void 0 === JV || JV.frame(eV.cameraHeading), null === (YV = vV) || void 0 === YV || YV.frame(eV, null !== (UV = null === (pV = nV) || void 0 === pV ? void 0 : pV.getPositionView(yV)) && void 0 !== UV ? UV : null)
        },
        onReceivedMessageFromServer: (VV, eV) => {
          "frontlineHud" === VV ? pV.RZ(eV) : "frontlineScoreboard" === VV ? pV.receiveScoreboard(eV) : "frontlineRoundEnd" === VV ? QV.RZ(eV) : "frontlinePrefs" === VV && (kV = eV, bV())
        }
      }
    }
  },
  6996: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    const JV = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function YV(VV) {
      return null === JV ? Array.from(VV) : Array.from(JV.segment(VV), (VV => {
        let {
          segment: eV
        } = VV;
        return eV
      }))
    }
  },
  39648: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      f: () => UV
    });
    const JV = new WeakMap;

    function YV(VV) {
      let eV = JV.get(VV);
      return eV || (eV = {
        hidden: VV.hidden,
        x: NaN,
        y: NaN
      }, JV.set(VV, eV)), eV
    }

    function UV(VV, eV) {
      const xV = YV(VV);
      xV.hidden !== eV && (xV.hidden = eV, VV.hidden = eV)
    }

    function yV(VV, eV, xV) {
      const JV = YV(VV);
      JV.x === eV && JV.y === xV || (JV.x = eV, JV.y = xV, VV.style.translate = `${eV}vw ${xV}vh`)
    }
  },
  38245: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    const JV = {
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
for (const VV in modules) Object.freeze(modules[VV]);