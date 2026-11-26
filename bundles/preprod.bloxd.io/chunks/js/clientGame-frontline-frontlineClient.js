export const id = 18;
export const ids = [18];
export const modules = {
  37318: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => tU,
      e: () => gU,
      f: () => NU,
      h: () => YU
    });
    var cU = zU(34859),
      yU = zU(37325),
      QU = zU(37334),
      AU = zU(9282),
      FU = zU(1492),
      oU = zU(61),
      DU = zU(73),
      EU = zU(1305);

    function YU() {
      var UU;
      return (0, FU.j)(yU.d, (0, yU.o)()), (0, EU.jsx)(EU.Fragment, {
        children: null === (UU = (0, yU.o)()) || void 0 === UU ? void 0 : UU.content
      })
    }

    function NU(UU) {
      var XU;
      let {
        show: zU
      } = UU;
      (0, FU.j)(yU.d, (0, yU.o)());
      const DU = null === (XU = (0, yU.o)()) || void 0 === XU ? void 0 : XU.menu;
      return (0, oU.useEffect)((() => {
        var UU;
        zU || (null === DU || void 0 === DU || null === (UU = DU.onClose) || void 0 === UU || UU.call(DU), (0, QU.t)())
      }), [zU, DU]), (0, oU.useEffect)((() => zU ? (0, AU.d)(QU.x, QU.i) : void 0), [zU]), (0, EU.jsx)(cU.e, {
        showing: zU,
        globallyUniqueKey: "clientGameMenu",
        children: null === DU || void 0 === DU ? void 0 : DU.content
      })
    }
    const IU = new Map,
      pU = new Set;

    function aU(UU, XU) {
      XU ? IU.set(UU, XU) : IU.delete(UU);
      for (const zU of pU) zU()
    }

    function tU(UU) {
      let {
        placement: XU = "bottom"
      } = UU;
      const zU = (0, oU.useRef)(null);
      return (0, oU.useLayoutEffect)((() => {
        const UU = zU.current;
        return aU(XU, UU), () => {
          IU.get(XU) === UU && aU(XU, null)
        }
      }), [XU]), (0, EU.jsx)("div", {
        ref: zU,
        id: `clientGameHud-${XU}`,
        style: {
          display: "contents"
        }
      })
    }

    function gU(UU) {
      let {
        children: XU,
        placement: zU = "bottom"
      } = UU;
      const [cU, yU] = (0, oU.useState)((() => {
        var UU;
        return null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null
      }));
      return (0, oU.useEffect)((() => {
        const UU = () => {
          var UU;
          yU(null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null)
        };
        return pU.add(UU), UU(), () => {
          pU.delete(UU)
        }
      }), [zU]), cU ? (0, DU.createPortal)(XU, cU) : null
    }
  },
  34859: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(4977),
      yU = zU(4982);

    function QU(UU) {
      let {
        children: XU,
        showing: zU,
        globallyUniqueKey: QU,
        alwaysMountChildren: AU = !1,
        doGameplayStartStopOnShow: FU = !0,
        keepsMovement: oU = !1
      } = UU;
      return (0, yU.c)(!0, zU, QU, oU), (0, cU.d)(FU, zU), zU || AU ? XU : null
    }
  },
  37418: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      f: () => AU,
      h: () => FU,
      j: () => oU
    });
    var cU = zU(61),
      yU = zU(3478);
    const QU = 8,
      AU = "InGameHeaderContainer",
      FU = "TopRightElements";

    function oU(UU) {
      const [XU] = (0, yU.e)(), [zU, oU] = (0, cU.useState)(!1);
      return (0, cU.useLayoutEffect)((() => {
        if (!UU) return;
        const XU = document.querySelector(`.${AU}`),
          zU = document.querySelector(`.${FU}`),
          cU = () => {
            const cU = UU.getBoundingClientRect(),
              yU = XU ? XU.getBoundingClientRect().right : 0,
              AU = zU ? zU.getBoundingClientRect().left : window.innerWidth,
              FU = cU.left < yU + QU,
              DU = cU.right > AU - QU;
            oU(FU || DU)
          };
        cU();
        const yU = new ResizeObserver(cU);
        return yU.observe(UU), XU && yU.observe(XU), zU && yU.observe(zU), () => {
          yU.disconnect()
        }
      }), [UU, XU]), zU
    }
  },
  40278: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU,
      h: () => yU,
      i: () => QU
    });
    var cU = zU(61);

    function yU(UU) {
      return FU(UU, oU)
    }

    function QU(UU) {
      return FU(UU, DU)
    }

    function AU(UU) {
      return `${Math.floor(UU/60)}:${String(UU%60).padStart(2,"0")}`
    }

    function FU(UU, XU) {
      const [, zU] = (0, cU.useState)(null);
      return (0, cU.useEffect)((() => {
        if (0 === UU) return;
        const cU = window.setInterval((() => {
          const cU = XU(UU);
          zU((XU => (null === XU || void 0 === XU ? void 0 : XU.endsAt) === UU && XU.value === cU ? XU : {
            endsAt: UU,
            value: cU
          }))
        }), 250);
        return () => {
          window.clearInterval(cU)
        }
      }), [UU, XU]), XU(UU)
    }

    function oU(UU) {
      return (UU - performance.now()) / 1e3
    }

    function DU(UU) {
      return Math.max(0, Math.ceil(oU(UU)))
    }
  },
  37414: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    const cU = [{
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

    function yU(UU, XU, zU) {
      const yU = Math.abs(UU - XU),
        QU = Date.now() - zU;
      for (const AU of cU)
        if (UU < AU.maxDist) return yU >= AU.hardUpdateDist || QU > AU.timeBetweenSoftChecks && yU >= AU.softUpdateDist;
      return !1
    }
  },
  9282: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      d: () => yU
    });
    let cU = null;
    const yU = function(UU) {
        const XU = {
          cycle: UU,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return cU = XU, () => {
          cU === XU && (cU = null)
        }
      },
      QU = () => {
        var UU;
        return null !== (UU = cU) && void 0 !== UU && UU.canCycle() ? cU.cycle : null
      }
  },
  39331: (UU, XU, zU) => {
    function cU(UU, XU, zU) {
      var cU;
      const {
        width: yU,
        height: QU
      } = zU, AU = null !== (cU = UU.text) && void 0 !== cU ? cU : UU, FU = (AU.x / 100 - .5) * yU, oU = (AU.y / 100 - .5) * QU, DU = yU / 2 - XU.x;
      if (null !== UU.text && Math.abs(FU) <= DU && oU >= XU.top - QU / 2 && oU <= QU / 2 - XU.bottom) return {
        x: AU.x,
        y: AU.y
      };
      const EU = Math.min(0 === FU ? 1 / 0 : DU / Math.abs(FU), oU > 0 ? (QU / 2 - XU.bottom) / oU : oU < 0 ? (XU.top - QU / 2) / oU : 1 / 0);
      return !Number.isFinite(EU) || EU < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + FU * EU / yU * 100,
        y: 50 + oU * EU / QU * 100
      }
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  37334: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      i: () => aU,
      l: () => tU,
      o: () => FU,
      r: () => NU,
      t: () => gU,
      v: () => YU,
      w: () => GU,
      x: () => pU,
      y: () => kU
    });
    var cU = zU(27),
      yU = zU(31);
    const QU = "clientGameInventoryButtonsChanged",
      AU = new Map;

    function FU() {
      return [...AU.values()].sort(((UU, XU) => {
        var zU, cU;
        return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
      }))
    }
    let oU = null;

    function DU(UU) {
      oU = UU
    }
    let EU = !1;

    function YU(UU) {
      EU = !0;
      try {
        UU.onClick()
      } finally {
        EU = !1
      }
      UU.panel && "clientGame" === cU.e.get("openInGameMenuName") && DU(UU.id)
    }

    function NU() {
      return EU
    }

    function IU() {
      return FU().filter((UU => UU.panel && !UU.disabled))
    }

    function pU(UU) {
      const XU = IU(),
        zU = XU.findIndex((UU => UU.id === oU));
      return !(zU < 0 || XU.length < 2) && (YU(XU[(zU + UU + XU.length) % XU.length]), !0)
    }

    function aU() {
      return null !== oU && IU().length > 1
    }

    function tU() {
      DU(null)
    }

    function gU() {
      "inventory" !== cU.e.get("openInGameMenuName") && DU(null)
    }

    function kU() {
      const UU = oU;
      return DU(null), UU
    }

    function GU(UU) {
      return AU.set(UU.id, UU), yU.k.UY(QU, FU(), !0), () => {
        AU.get(UU.id) === UU && (AU.delete(UU.id), yU.k.UY(QU, FU()))
      }
    }
  },
  37325: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      h: () => kU,
      j: () => tU,
      l: () => gU,
      n: () => NU,
      o: () => DU,
      r: () => aU,
      t: () => IU,
      u: () => EU
    });
    var cU = zU(27),
      yU = zU(31),
      QU = zU(1310),
      AU = zU(37334);
    const FU = "clientGameUiChanged";
    let oU = null;

    function DU() {
      return oU
    }

    function EU(UU, XU) {
      const zU = {
        content: UU,
        menu: XU
      };
      return oU = zU, yU.k.UY(FU, oU, !0), () => {
        oU === zU && (oU = null, pU = !1, tU(), yU.k.UY(FU, null))
      }
    }
    let YU = null;

    function NU() {
      return YU
    }

    function IU(UU) {
      return YU = UU, () => {
        YU === UU && (YU = null)
      }
    }
    let pU = !1;

    function aU() {
      const UU = cU.e.get("openInGameMenuName");
      "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tU() {
      GU(!1)
    }

    function gU() {
      GU(pU)
    }

    function kU() {
      pU && GU(!1)
    }

    function GU(UU) {
      "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
        openInGameMenuName: UU ? "inventory" : null
      }), UU || (0, AU.l)(), pU = !1
    }
  },
  40281: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => oU
    });
    var cU = zU(37414),
      yU = zU(1193),
      QU = zU(1266),
      AU = zU(39278),
      FU = zU(39331);
    class oU {
      constructor(UU, XU) {
        var zU;
        this.classes = UU, this.distanceKey = XU, this.markers = new Map, this.refs = new Map, this.viewport = {
          width: window.innerWidth,
          height: window.innerHeight
        }, this.render = null, this.kp = !1, this.QG = () => {
          this.viewport = {
            width: window.innerWidth,
            height: window.innerHeight
          }
        }, window.addEventListener("resize", this.QG), null === (zU = window.visualViewport) || void 0 === zU || zU.addEventListener("resize", this.QG)
      }
      bindMarker(UU) {
        const XU = this.refs.get(UU);
        if (XU) return XU;
        const zU = XU => {
          var cU;
          null === (cU = this.markers.get(UU)) || void 0 === cU || cU.stopObserving(), this.markers.delete(UU), XU && !this.kp ? (this.markers.set(UU, this.mount(XU)), this.refs.set(UU, zU)) : this.refs.delete(UU)
        };
        return this.refs.set(UU, zU), zU
      }
      hasMarkers() {
        return this.markers.size > 0
      }
      setRender(UU) {
        this.render = UU
      }
      update(UU, XU, zU, cU, yU) {
        const QU = this.markers.get(UU);
        QU && (QU.target ??= [0, 0, 0], QU.target[0] = XU, QU.target[1] = zU, QU.target[2] = cU, this.place(QU), this.dc(QU, yU && Math.hypot(XU - yU[0], zU - yU[1], cU - yU[2])))
      }
      dispose() {
        var UU;
        this.kp = !0, window.removeEventListener("resize", this.QG), null === (UU = window.visualViewport) || void 0 === UU || UU.removeEventListener("resize", this.QG);
        for (const XU of this.markers.values()) XU.stopObserving();
        this.markers.clear(), this.refs.clear(), this.render = null
      }
      place(UU) {
        const {
          render: XU,
          viewport: zU
        } = this;
        if (!XU || !UU.target) return;
        const cU = (50 - XU.screenBandPct.y) / 100 * zU.height,
          yU = {
            x: UU.halfSize.width + 8,
            top: UU.halfSize.height + 8,
            bottom: UU.halfSize.height + UU.labelsBelow + cU
          },
          QU = XU.projectWorldPosToViewport(UU.target),
          oU = null !== QU && void 0 !== QU ? QU : XU.projectWorldPosToScreenPos(UU.target),
          DU = (0, FU.d)({
            x: oU.x,
            y: oU.y,
            text: QU
          }, yU, zU);
        (0, AU.d)(UU.root, Math.round(100 * DU.x) / 100, Math.round(100 * DU.y) / 100)
      }
      dc(UU, XU) {
        if (null === XU) return void(null !== UU.metres && (UU.metres = null, UU.distance.textContent = ""));
        const zU = Date.now();
        (null === UU.metres || (0, cU.b)(XU, UU.metres, UU.metresShownAt)) && (UU.metres = Math.round(XU), UU.metresShownAt = zU, UU.distance.textContent = (0, yU.A)(QU.h.get().getCurrentLanguageCode(), this.distanceKey, {
          distance: String(UU.metres)
        }))
      }
      mount(UU) {
        const XU = {
            root: UU,
            distance: UU.querySelector(`.${this.classes.distance}`),
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
          zU = UU.querySelector(`.${this.classes.labels}`),
          cU = new ResizeObserver((() => {
            XU.halfSize = {
              width: Math.max(UU.offsetWidth, zU.offsetWidth) / 2,
              height: UU.offsetHeight / 2
            }, XU.labelsBelow = zU.offsetTop + zU.offsetHeight - UU.offsetHeight, this.place(XU)
          }));
        return cU.observe(UU, {
          box: "border-box"
        }), cU.observe(zU, {
          box: "border-box"
        }), XU.stopObserving = () => {
          cU.disconnect()
        }, XU
      }
    }
  },
  40275: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => IX
    });
    const cU = ["skin", "head", "body", "legs", "shoes", "eyebrows", "eyes", "hat", "back"];
    var yU = zU(61),
      QU = zU(37325),
      AU = zU(37756),
      FU = zU(37345),
      oU = zU(1800),
      DU = zU(31);
    const EU = {
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
    const YU = 32;

    function NU(UU, XU, zU, cU) {
      return {
        tag: "line",
        attrs: {
          x1: UU,
          y1: XU,
          x2: zU,
          y2: cU,
          "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
      }
    }

    function IU(UU) {
      return {
        tag: "circle",
        attrs: {
          cx: YU,
          cy: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YU,
          r: UU,
          class: "Fill"
        }
      }
    }

    function pU(UU, XU) {
      return {
        tag: "path",
        attrs: {
          d: UU,
          "stroke-width": XU
        }
      }
    }

    function aU(UU, XU, zU) {
      return {
        tag: "circle",
        attrs: {
          cx: YU,
          cy: YU,
          r: UU,
          "stroke-width": XU,
          class: zU
        }
      }
    }

    function tU(UU, XU, zU) {
      return {
        tag: "text",
        attrs: {
          x: UU,
          y: XU,
          class: "Fill Label"
        },
        text: zU
      }
    }
    const gU = {
      pistol: UU => [NU(YU, YU - UU - 5, YU, YU - UU), NU(YU - UU - 5, YU, YU - UU, YU), NU(YU + UU, YU, YU + UU + 5, YU), IU(1.4)],
      rifle: UU => [NU(YU, YU - UU - 8, YU, YU - UU), NU(YU, YU + UU, YU, YU + UU + 8), NU(YU - UU - 8, YU, YU - UU, YU), NU(YU + UU, YU, YU + UU + 8, YU), IU(1)],
      smg: UU => {
        const XU = Math.PI / 2,
          zU = [];
        for (let AU = 0; AU < 4; AU++) zU.push((yU = AU * XU + .35, QU = (AU + 1) * XU - .35, pU(`M${YU+(cU=6+UU)*Math.cos(yU)} ${YU+cU*Math.sin(yU)} A${cU} ${cU} 0 0 1 ${YU+cU*Math.cos(QU)} ${YU+cU*Math.sin(QU)}`, 2)));
        var cU, yU, QU;
        return [...zU, IU(1.4)]
      },
      shotgun: UU => [aU(UU, 3, "Ring Outline"), aU(UU, 1.5, "Ring")],
      marksman: UU => [pU(`M${26-UU/2} ${39+UU/2} L32 33 L${38+UU/2} ${39+UU/2}`, 2), NU(14 - UU, YU, 24 - UU, YU, 1.5), NU(40 + UU, YU, 50 + UU, YU, 1.5), NU(14 - UU, 30, 14 - UU, 34, 1.5), NU(50 + UU, 30, 50 + UU, 34, 1.5)],
      machineGun: UU => {
        const XU = 10 + UU,
          zU = [];
        for (const [cU, yU] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1]
          ]) zU.push(pU(`M${YU+cU*XU} ${YU+yU*(XU-5)} L${YU+cU*XU} ${YU+yU*XU} L${YU+cU*(XU-5)} ${YU+yU*XU}`, 2));
        return [...zU, NU(YU, 28, YU, 36, 1.5), NU(28, YU, 36, YU, 1.5)]
      },
      launcher: () => [NU(14, 30, 50, 30, 1.5), NU(YU, 24, YU, 52, 1.5), NU(28, 38, 36, 38, 1.5), NU(29, 44, 35, 44, 1.5), NU(30, 50, 34, 50, 1.5), tU(38, 40, "100"), tU(37, 46, "200"), IU(1.4, 30)],
      melee: () => [pU("M32 26 L38 32 L32 38 L26 32 Z", 1.5), IU(1.2)],
      throwable: () => [IU(1.6)]
    };

    function kU(UU) {
      let {
        tag: XU,
        attrs: zU,
        text: cU
      } = UU, yU = `<${XU}`;
      for (const [QU, AU] of Object.entries(zU)) yU += ` ${QU}="${AU}"`;
      return void 0 === cU ? `${yU}/>` : `${yU}>${cU}</${XU}>`
    }
    class GU {
      constructor(UU, XU) {
        this.api = UU, this.localPlayerId = XU, this.element = null, this.drawnFamily = null, this.shapes = [], this.drawnGap = 0, this.coneDrawn = !1, this.drawnVisible = null, this.drawnPressed = null, this.shownRadius = 0, this.ownsCrosshair = !1, this.enabled = !0, this.sniperOverlay = !1, this.mouseDown = !1, this.gapPerVh = 0, this.tokens = void 0, this.bindElement = UU => {
          this.element = UU, this.drawnFamily = null, this.drawnVisible = null, this.drawnPressed = null, UU && !this.enabled && (UU.style.display = "none")
        }, this.measure = () => {
          this.gapPerVh = window.innerHeight / 100 * (64 / (4 * (0, oU.getRemInPx)()))
        }, this.tokens = [DU.k.subscribe("aimingOverlay", (UU => {
          this.sniperOverlay = "sniper" === UU
        })), DU.k.subscribe("mouseState", (UU => {
          let {
            isDown: XU
          } = UU;
          this.mouseDown = XU
        }))], window.addEventListener("resize", this.measure), this.measure()
      }
      YC(UU) {
        UU !== this.enabled && (this.enabled = UU, this.drawnVisible = null, UU || (this.setOwnsCrosshair(!1), this.element && (this.element.style.display = "none")))
      }
      frame(UU, XU) {
        var zU, cU;
        if (!this.enabled) return;
        const {
          api: yU
        } = this, QU = yU.isAlive(this.localPlayerId) && null !== (zU = null === (cU = yU.HzU(this.localPlayerId)) || void 0 === cU ? void 0 : cU.name) && void 0 !== zU ? zU : null, AU = (FU = QU) && EU[FU] || null;
        var FU;
        if (this.setOwnsCrosshair(null !== AU), !this.element) return;
        const oU = yU.getHeldGunInaccuracy(),
          DU = null !== oU,
          YU = null !== AU && !this.sniperOverlay && yU.isCrosshairShown();
        if (YU !== this.drawnVisible && (this.drawnVisible = YU, this.element.style.display = YU ? "block" : "none"), !YU) return;
        const NU = DU ? function(UU) {
            return "launcher" === UU || "melee" === UU || "throwable" === UU ? "none" : "shotgun" === UU ? "cone" : "offset"
          }(AU) : "none",
          IU = null !== oU && void 0 !== oU ? oU : 0;
        "cone" === NU ? this.drawCone(AU, this.coneRadiusVh(IU, XU) * this.gapPerVh, UU) : (this.coneDrawn = !1, this.draw(AU, "none" === NU ? 2 : this.offsetGap(IU)));
        const pU = !DU && this.mouseDown;
        pU !== this.drawnPressed && (this.drawnPressed = pU, this.element.classList.toggle("Pressed", pU))
      }
      dispose() {
        for (const UU of this.tokens) DU.k.unsubscribe(UU);
        window.removeEventListener("resize", this.measure), this.setOwnsCrosshair(!1)
      }
      draw(UU, XU) {
        var zU, cU;
        UU !== this.drawnFamily ? (this.drawnFamily = UU, this.drawnGap = XU, this.element.innerHTML = function(UU, XU) {
          return `<svg viewBox="0 0 64 64">${gU[UU](XU).map(kU).join("")}</svg>`
        }(UU, XU), this.shapes = Array.from(null !== (zU = null === (cU = this.element.firstElementChild) || void 0 === cU ? void 0 : cU.children) && void 0 !== zU ? zU : [])) : XU !== this.drawnGap && (this.drawnGap = XU, function(UU, XU, zU) {
          const cU = gU[XU](zU);
          for (let yU = 0; yU < cU.length; yU++)
            for (const [XU, zU] of Object.entries(cU[yU].attrs)) {
              const cU = String(zU);
              UU[yU].getAttribute(XU) !== cU && UU[yU].setAttribute(XU, cU)
            }
        }(this.shapes, UU, XU))
      }
      drawCone(UU, XU, zU) {
        UU === this.drawnFamily && this.coneDrawn ? this.shownRadius += (XU - this.shownRadius) * (1 - Math.exp(-zU / 80)) : this.shownRadius = XU, this.coneDrawn = !0, this.draw(UU, Math.round(4 * this.shownRadius) / 4)
      }
      coneRadiusVh(UU, XU) {
        if (!(XU > 0)) return 1;
        const zU = UU * AU.k / 2;
        return Math.max(50 * Math.tan(zU) / XU, 1)
      }
      offsetGap(UU) {
        const XU = 2 + ((0, FU.e)(UU) - 1) * this.gapPerVh;
        return Math.min(24, Math.round(2 * XU) / 2)
      }
      setOwnsCrosshair(UU) {
        UU !== this.ownsCrosshair && (this.ownsCrosshair = UU, document.body.classList.toggle("FrontlineCustomCrosshair", UU))
      }
    }
    const BU = "FrontlineCustomDamage",
      ZU = .45,
      RU = .2;
    class PU {
      constructor(UU, XU) {
        this.api = UU, this.localPlayerId = XU, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.sU = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = UU => {
          var XU, zU;
          this.clearHits(), this.root = UU, this.lowLayer = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.querySelector(".FrontlineDamageLow")) && void 0 !== XU ? XU : null, this.arcLayer = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.querySelector(".FrontlineDamageArcs")) && void 0 !== zU ? zU : null, this.showRoot(), this.drawLow()
        }, this.token = DU.k.subscribe("damagedByOtherPlayer", (UU => {
          let {
            direction: XU,
            vU: zU
          } = UU;
          this.onHurt(XU, zU)
        })), this.syncHealth(), document.body.classList.add(BU)
      }
      YC(UU) {
        UU !== this.enabled && (this.enabled = UU, document.body.classList.toggle(BU, UU), UU || this.clearHits(), this.showRoot())
      }
      frame(UU) {
        this.syncHealth(), this.cameraHeading = UU;
        for (const XU of this.arcs) this.drawArcAngle(XU)
      }
      dispose() {
        DU.k.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(BU)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const UU = this.api.getClientOption(this.localPlayerId, "_health"),
          XU = this.api.getClientOption(this.localPlayerId, "_shield"),
          zU = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(UU, this.readHealth) && Object.is(XU, this.readShield) && Object.is(zU, this.readMaxHealth)) return;
        if (this.readHealth = UU, this.readShield = XU, this.readMaxHealth = zU, null === UU || void 0 === UU || !zU) return this.lastHealthPool = null, this.maxHealth = null, this.sU = 1, this.dead = !1, void this.drawLow();
        const cU = UU + (null !== XU && void 0 !== XU ? XU : 0);
        if (null !== this.lastHealthPool && cU < this.lastHealthPool) {
          const UU = performance.now(),
            XU = (this.lastHealthPool - cU) / zU;
          this.lastDrop = UU - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + XU,
            at: this.lastDrop.at
          } : {
            frac: XU,
            at: UU
          }
        }
        this.dead = UU <= 0, this.dead && this.clearHits(), this.lastHealthPool = cU, this.maxHealth = zU, this.sU = UU > 0 ? UU / zU : 1, this.drawLow()
      }
      onHurt(UU, XU) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const zU = Math.min(1, this.takeDamageFrac(XU) / .3);
        null !== UU && this.showArc(UU, zU), this.flashEdge(null === UU ? null : UU - this.cameraHeading, .4 + .6 * zU)
      }
      takeDamageFrac(UU) {
        if (void 0 !== UU && this.maxHealth) return UU / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: XU
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, XU
      }
      drawLow() {
        if (!this.lowLayer) return;
        const UU = dU((ZU - this.sU) / .25),
          XU = dU((RU - this.sU) / .15000000000000002),
          zU = this.sU < ZU;
        this.lowLayer.classList.toggle("Active", zU), this.lowLayer.classList.toggle("Critical", this.sU < RU), this.lowLayer.style.opacity = String(zU ? .55 + .3 * UU + .15 * XU : 0)
      }
      showArc(UU, XU) {
        var zU, cU;
        if (!this.arcLayer) return;
        let yU = this.arcs.find((XU => WU(XU.direction, UU) < .6));
        if (!yU) {
          const XU = document.createElement("div");
          XU.className = "FrontlineDamageArc", XU.appendChild(document.createElement("div")).className = "FrontlineDamageArcBand", this.arcLayer.appendChild(XU), yU = {
            element: XU,
            direction: UU,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(yU)
        }
        yU.direction = UU, this.drawArcAngle(yU);
        const QU = yU.fade ? Number(getComputedStyle(yU.element).opacity) : 0;
        null === (zU = yU.fade) || void 0 === zU || zU.cancel(), null === (cU = yU.pop) || void 0 === cU || cU.cancel(), yU.element.style.opacity = "1";
        const AU = yU.element.animate([{
          opacity: QU
        }, {
          opacity: 1
        }], 144);
        yU.fade = AU, yU.pop = yU.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * XU
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const FU = yU;
        AU.onfinish = () => {
          if (FU.fade !== AU) return;
          const UU = FU.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          UU.startTime = AU.startTime, FU.fade = UU, UU.onfinish = () => {
            FU.fade === UU && (FU.element.remove(), LU(this.arcs, FU))
          }
        }
      }
      drawArcAngle(UU) {
        const XU = UU.direction - this.cameraHeading;
        (null === UU.drawnAngle || Math.abs(XU - UU.drawnAngle) > .005) && (UU.drawnAngle = XU, UU.element.style.rotate = `${XU}rad`)
      }
      flashEdge(UU, XU) {
        var zU, cU, yU;
        if (!this.root) return;
        let QU = this.flashes.find((XU => null === XU.angle || null === UU ? XU.angle === UU : WU(XU.angle, UU) < .5));
        if (!QU) {
          const XU = document.createElement("div");
          XU.className = "FrontlineDamageFlash";
          const zU = XU.appendChild(document.createElement("div"));
          zU.className = "FrontlineDamageFlashGlow", this.root.insertBefore(XU, this.arcLayer), QU = {
            element: XU,
            glow: zU,
            angle: UU,
            level: 0,
            animation: null
          }, this.flashes.push(QU)
        }
        const AU = null === (zU = QU.animation) || void 0 === zU || null === (cU = zU.effect) || void 0 === cU ? void 0 : cU.getComputedTiming().progress,
          FU = null === AU || void 0 === AU ? 0 : QU.level * (1 - AU);
        QU.level = Math.min(1, Math.max(XU, FU + .6 * XU)), QU.angle = UU;
        const {
          x: oU,
          y: DU,
          rx: EU,
          ry: YU
        } = function(UU, XU) {
          const zU = window.innerWidth,
            cU = window.innerHeight;
          if (null === UU) return {
            x: zU / 2,
            y: cU / 2,
            rx: 0,
            ry: 0
          };
          const yU = Math.sin(UU),
            QU = -Math.cos(UU),
            AU = zU / 2 / Math.max(1e-6, Math.abs(yU)),
            FU = cU / 2 / Math.max(1e-6, Math.abs(QU)),
            oU = Math.min(AU, FU),
            DU = Math.round(zU / 2 + yU * oU),
            EU = Math.round(cU / 2 + QU * oU),
            YU = cU / 100 * (.85 + .25 * XU),
            NU = AU <= FU,
            IU = Math.round((NU ? 30 : 74) * YU),
            pU = Math.round((NU ? 58 : 26) * YU);
          return {
            x: DU,
            y: EU,
            rx: IU,
            ry: pU
          }
        }(UU, QU.level), {
          style: NU
        } = QU.glow;
        QU.glow.classList.toggle("Everywhere", null === UU), NU.setProperty("--glowX", `${oU}px`), NU.setProperty("--glowY", `${DU}px`), NU.setProperty("--glowRx", `${EU}px`), NU.setProperty("--glowRy", `${YU}px`), QU.element.style.transformOrigin = `${oU}px ${DU}px`, null === (yU = QU.animation) || void 0 === yU || yU.cancel();
        const IU = QU.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: QU.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * QU.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * QU.level
        });
        QU.animation = IU;
        const pU = QU;
        IU.onfinish = () => {
          pU.animation === IU && (pU.element.remove(), LU(this.flashes, pU))
        }
      }
      clearHits() {
        for (const cU of this.arcs) {
          var UU, XU;
          null === (UU = cU.fade) || void 0 === UU || UU.cancel(), cU.fade = null, null === (XU = cU.pop) || void 0 === XU || XU.cancel(), cU.element.remove()
        }
        this.arcs.length = 0;
        for (const cU of this.flashes) {
          var zU;
          null === (zU = cU.animation) || void 0 === zU || zU.cancel(), cU.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function WU(UU, XU) {
      return Math.abs(Math.atan2(Math.sin(UU - XU), Math.cos(UU - XU)))
    }

    function dU(UU) {
      return Math.max(0, Math.min(1, UU))
    }

    function LU(UU, XU) {
      const zU = UU.indexOf(XU); - 1 !== zU && UU.splice(zU, 1)
    }
    var eU = zU(1106),
      CU = zU.n(eU),
      wU = zU(37318),
      qU = zU(37418),
      OU = zU(1193),
      SU = zU(1492),
      rU = zU(40278);
    const uU = "frontlineHudChanged",
      fU = "frontlineScoreboardChanged";
    class iU {
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
      PY(UU) {
        this.wire = UU, DU.k.UY(uU, UU, !0)
      }
      receiveScoreboard(UU) {
        let XU = "scoreboard" === UU[0] ? performance.now() + UU[5] : 0;
        const zU = this.scoreboard.endsAt;
        0 !== XU && 0 !== zU && Math.abs(XU - zU) < 1e3 && (XU = zU), this.scoreboard = {
          wire: UU,
          endsAt: XU
        }, DU.k.UY(fU, this.scoreboard, !0)
      }
    }
    var HU = zU(1305);
    const MU = {
      Red: "frontlineHud:teamRed",
      Blue: "frontlineHud:teamBlue"
    };

    function vU(UU) {
      let {
        className: XU,
        point: zU
      } = UU;
      const [cU, yU, QU, AU, FU, oU] = zU;
      return (0, HU.jsxs)("div", {
        className: CU()(XU, `Owner-${yU||"None"}`, `Leader-${AU||"None"}`, {
          Contested: FU,
          Here: oU
        }),
        children: [(0, HU.jsx)("span", {
          className: "FrontlinePointLetter",
          children: cU
        }), (0, HU.jsx)("i", {
          className: "FrontlinePointFill",
          style: {
            width: `${QU}%`
          }
        })]
      })
    }
    const VU = (0, yU.memo)((function(UU) {
        let {
          points: XU,
          markers: zU
        } = UU;
        const {
          t: cU
        } = (0, OU.I)();
        return XU ? (0, HU.jsx)("div", {
          className: "FrontlinePointMarkers",
          children: XU.map((UU => {
            const [XU, , , , , , , yU] = UU;
            return (0, HU.jsxs)("div", {
              ref: zU.points.bindMarker(XU),
              className: "FrontlinePointMarker",
              children: [(0, HU.jsx)(vU, {
                className: "FrontlinePointMarkerTile",
                point: UU
              }), (0, HU.jsxs)("div", {
                className: "FrontlinePointMarkerLabels",
                children: [yU && (0, HU.jsx)("span", {
                  className: CU()("FrontlinePointMarkerHomeTurf", `Team-${yU}`),
                  children: cU("frontlineHud:homeTurf", {
                    team: cU(MU[yU])
                  })
                }), (0, HU.jsx)("span", {
                  className: "FrontlinePointMarkerDistance"
                })]
              })]
            }, XU)
          }))
        }) : null
      })),
      sU = {
        capturing: "frontlineHud:capturing",
        contesting: "frontlineHud:contesting",
        defending: "frontlineHud:defending",
        captured: "frontlineHud:captured"
      },
      nU = {
        captured: "frontlineHud:capturedTag",
        lost: "frontlineHud:lostTag",
        milestone: "frontlineHud:milestoneTag",
        nearVictory: "frontlineHud:nearVictoryTag",
        reinforcements: "frontlineHud:reinforcementsTag"
      };

    function mU(UU) {
      let {
        hud: XU,
        crosshair: zU,
        damage: cU,
        markers: yU
      } = UU;
      const QU = (0, SU.j)(uU, XU.getWire()),
        AU = (0, SU.j)(fU, XU.getScoreboard());
      return (0, HU.jsxs)(HU.Fragment, {
        children: [(0, HU.jsx)(lU, {
          damage: cU
        }), (0, HU.jsx)(VU, {
          points: "scoreboard" === AU.wire[0] ? AU.wire[6] : null,
          markers: yU
        }), (0, HU.jsx)(JU, {
          view: AU
        }), (0, HU.jsx)("div", {
          className: "FrontlineReticle",
          ref: zU.bindElement
        }), (0, HU.jsx)(wU.e, {
          children: (0, HU.jsx)(xU, {
            wire: QU
          })
        })]
      })
    }
    const lU = (0, yU.memo)((function(UU) {
        let {
          damage: XU
        } = UU;
        return (0, HU.jsxs)("div", {
          className: "FrontlineDamage",
          ref: XU.bindElement,
          children: [(0, HU.jsx)("div", {
            className: "FrontlineDamageLow",
            children: (0, HU.jsx)("div", {
              className: "FrontlineDamageShade"
            })
          }), (0, HU.jsx)("div", {
            className: "FrontlineDamageArcs"
          })]
        })
      })),
      xU = (0, yU.memo)((function(UU) {
        let {
          wire: XU
        } = UU;
        const {
          t: zU
        } = (0, OU.I)();
        if ("capture" === XU[0]) {
          const [, UU, cU, yU, QU, AU, FU] = XU, oU = Math.round(yU / 100 * 24);
          return (0, HU.jsxs)("div", {
            className: CU()("FrontlinePlate", `Status-${cU}`, `Leader-${QU||"None"}`),
            children: [(0, HU.jsx)(TU, {}), (0, HU.jsxs)("div", {
              className: "FrontlinePlateRow",
              children: [(0, HU.jsx)("span", {
                className: "FrontlineObjective",
                children: UU
              }), (0, HU.jsxs)("div", {
                className: "FrontlinePlateMiddle",
                children: [(0, HU.jsx)("div", {
                  className: "FrontlinePlateMeta",
                  children: zU("frontlineHud:objective", {
                    point: UU,
                    friendly: AU,
                    enemy: FU
                  })
                }), (0, HU.jsx)("div", {
                  className: "FrontlinePlateStatus",
                  children: zU(sU[cU])
                })]
              }), (0, HU.jsxs)("span", {
                className: "FrontlinePercent",
                children: [String(yU).padStart(3, "0"), (0, HU.jsx)("small", {
                  children: "%"
                })]
              })]
            }), (0, HU.jsx)(KU, {
              segments: 24,
              lit: oU
            })]
          })
        }
        if ("alert" === XU[0]) {
          const [, UU, cU, yU] = XU;
          return (0, HU.jsxs)("div", {
            className: CU()("FrontlinePlate", "FrontlineAlert", `Tone-${yU}`),
            children: [(0, HU.jsx)(TU, {}), (0, HU.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: zU(nU[UU])
            }), (0, HU.jsx)("div", {
              className: "FrontlinePlateStatus",
              children: cU
            })]
          })
        }
        return null
      })),
      JU = (0, yU.memo)((function(UU) {
        let {
          view: XU
        } = UU;
        const {
          t: zU
        } = (0, OU.I)(), cU = (0, yU.useRef)(null), QU = function(UU, XU) {
          const [zU, cU] = (0, yU.useState)(!1);
          return (0, yU.useLayoutEffect)((() => {
            const XU = UU.current;
            if (!XU) return;
            const zU = document.querySelector(`.${qU.f}`),
              yU = document.querySelector(`.${qU.h}`),
              QU = () => {
                var UU;
                const QU = XU.querySelector(".FrontlineTeamTrack"),
                  AU = (0, oU.getRemInPx)(),
                  FU = XU.getBoundingClientRect().width - 2 * (null !== (UU = null === QU || void 0 === QU ? void 0 : QU.getBoundingClientRect().width) && void 0 !== UU ? UU : 0),
                  DU = window.innerWidth / 2,
                  EU = zU ? zU.getBoundingClientRect().right : 0,
                  YU = yU ? yU.getBoundingClientRect().left : window.innerWidth,
                  NU = Math.min(DU - EU, YU - DU) - qU.d - FU / 2,
                  IU = NU < 6 * AU,
                  pU = IU ? (window.innerWidth - FU) / 2 - qU.d : NU;
                XU.style.setProperty("--frontlineTrackWidth", `${Math.max(0,Math.floor(Math.min(pU,14*AU)))}px`), cU(IU)
              };
            QU();
            const AU = new ResizeObserver(QU);
            for (const UU of [XU, zU, yU]) UU && AU.observe(UU);
            return window.addEventListener("resize", QU), () => {
              AU.disconnect(), window.removeEventListener("resize", QU)
            }
          }), [UU, XU]), zU
        }(cU, "scoreboard" === XU.wire[0]);
        if ("scoreboard" !== XU.wire[0]) return null;
        const [, AU, FU, DU, EU, , YU] = XU.wire, NU = "Red" === AU ? "Blue" : "Red";
        return (0, HU.jsxs)("div", {
          className: CU()("FrontlineScoreboardContainer", {
            Below: QU
          }),
          children: [(0, HU.jsxs)("div", {
            ref: cU,
            className: "FrontlineScoreboard",
            children: [(0, HU.jsx)(TU, {}), (0, HU.jsx)(jU, {
              team: AU,
              tickets: FU,
              goal: EU,
              side: "Friendly"
            }), (0, HU.jsx)("div", {
              className: "FrontlinePoints",
              children: YU.map((UU => (0, HU.jsx)(vU, {
                className: "FrontlinePoint",
                point: UU
              }, UU[0])))
            }), (0, HU.jsx)(jU, {
              team: NU,
              tickets: DU,
              goal: EU,
              side: "Enemy"
            })]
          }), (0, HU.jsxs)("div", {
            className: "FrontlineClockTab",
            children: [(0, HU.jsx)(bU, {
              endsAt: XU.endsAt
            }), (0, HU.jsx)("div", {
              className: "FrontlinePlateMeta",
              children: zU("frontlineHud:ticketGoal", {
                goal: EU
              })
            })]
          })]
        })
      }));

    function jU(UU) {
      let {
        team: XU,
        tickets: zU,
        goal: cU,
        side: yU
      } = UU;
      const {
        t: QU
      } = (0, OU.I)(), AU = String(zU).padStart(3, "0"), FU = AU.search(/[1-9]/), oU = -1 === FU ? AU : AU.slice(0, FU), DU = Math.min(20, Math.floor(zU / cU * 20));
      return (0, HU.jsxs)("div", {
        className: CU()("FrontlineTeamScore", yU, `Team-${XU}`),
        children: [(0, HU.jsxs)("div", {
          className: "FrontlineTickets",
          children: [(0, HU.jsx)("span", {
            className: "Lead",
            children: oU
          }), -1 !== FU && AU.slice(FU)]
        }), (0, HU.jsxs)("div", {
          className: "FrontlineTeamTrack",
          children: [(0, HU.jsx)("div", {
            className: "FrontlinePlateMeta",
            children: QU(MU[XU])
          }), (0, HU.jsx)(KU, {
            segments: 20,
            lit: DU
          })]
        })]
      })
    }

    function KU(UU) {
      let {
        segments: XU,
        lit: zU
      } = UU;
      return (0, HU.jsx)("div", {
        className: "FrontlineBar",
        children: Array.from({
          length: XU
        }, ((UU, XU) => (0, HU.jsx)("i", {
          className: CU()({
            Lit: XU < zU
          })
        }, XU)))
      })
    }

    function bU(UU) {
      let {
        endsAt: XU
      } = UU;
      const zU = (0, rU.i)(XU);
      return (0, HU.jsx)("div", {
        className: CU()("FrontlineClock", {
          Urgent: zU <= 60
        }),
        children: (0, rU.e)(zU)
      })
    }

    function TU() {
      return (0, HU.jsxs)(HU.Fragment, {
        children: [(0, HU.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, HU.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        })]
      })
    }
    var hU = zU(40281);
    class UX {
      constructor(UU) {
        this.hud = UU, this.points = new hU.d({
          labels: "FrontlinePointMarkerLabels",
          distance: "FrontlinePointMarkerDistance"
        }, "frontlineHud:markerDistance")
      }
      frame(UU, XU) {
        this.points.setRender(UU);
        const zU = this.hud.getScoreboard().wire;
        if ("scoreboard" === zU[0] && this.points.hasMarkers())
          for (const [cU, , , , , , yU] of zU[6]) yU && this.points.update(cU, yU[0], yU[1] + 2.5, yU[2], XU)
      }
    }
    var XX = zU(7029),
      zX = zU(2858);
    const cX = "frontlineRoundEndChanged";
    class yX {
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
      PY(UU) {
        const XU = "roundEnd" === UU[0] ? performance.now() + UU[5] : 0;
        this.view = {
          wire: UU,
          key: this.view.key + 1,
          endsAt: XU
        }, DU.k.UY(cX, this.view, !0)
      }
    }
    const QX = (0, yU.lazy)((() => (0, zX.d)(Promise.all([zU.e(253), zU.e(216)]).then((() => zU(44450))), (UU => UU.FrontlineMvpLineup)))),
      AX = [4800, 4e3, 3200],
      FX = [1, 0, 2],
      oX = {
        victory: "frontlineRoundEnd:victory",
        defeat: "frontlineRoundEnd:defeat",
        draw: "frontlineRoundEnd:draw"
      },
      DX = ["frontlineRoundEnd:mvp", "frontlineRoundEnd:second", "frontlineRoundEnd:third"];

    function EX(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, SU.j)(cX, XU.getView()),
        cU = (0, rU.h)(zU.endsAt);
      return "roundEnd" !== zU.wire[0] || 1e3 * cU < -2e3 ? null : (0, HU.jsx)(YX, {
        wire: zU.wire,
        secondsLeft: Math.max(0, Math.ceil(cU))
      }, zU.key)
    }
    const YX = (0, yU.memo)((function(UU) {
      let {
        wire: XU,
        secondsLeft: zU
      } = UU;
      const {
        t: QU
      } = (0, OU.I)(), [, AU, FU, oU, DU, , EU, YU] = XU, NU = (0, yU.useMemo)((() => FX.filter((UU => UU < YU.length))), [YU]), IU = (0, yU.useMemo)((() => NU.map((UU => {
        const [, , , , , XU, zU] = YU[UU];
        return {
          cosmetics: cU.map(((UU, zU) => [UU, XU[zU]])),
          size: 0 === UU ? 1.15 : .85,
          heldGun: {
            name: zU,
            aimed: 0 === UU
          },
          showAfterMs: AX[UU]
        }
      }))), [YU, NU]);
      return (0, HU.jsxs)("div", {
        className: CU()("FrontlineRoundEnd", `Result-${AU}`),
        style: {
          "--titleRiseMs": "2600ms"
        },
        children: [(0, HU.jsx)("div", {
          className: "FrontlineRoundEndVeil"
        }), (0, HU.jsxs)("div", {
          className: "FrontlineRoundEndTitle",
          children: [(0, HU.jsxs)("div", {
            className: "FrontlineRoundEndResult",
            children: [(0, HU.jsx)("i", {
              className: "FrontlineBracket TopLeft"
            }), (0, HU.jsx)("i", {
              className: "FrontlineBracket BottomRight"
            }), (pU = QU(oX[AU]), /\p{Script=Arabic}/u.test(pU) ? [pU] : (0, XX.e)(pU)).map(((UU, XU) => (0, HU.jsx)("span", {
              style: {
                "--letter": XU
              },
              children: UU
            }, XU)))]
          }), (0, HU.jsxs)("div", {
            className: "FrontlineRoundEndScore",
            children: [FU && "victory" === AU && (0, HU.jsx)("span", {
              className: "FrontlineRoundEndComeback",
              children: QU("frontlineRoundEnd:comeback")
            }), (0, HU.jsxs)("span", {
              className: "FrontlineRoundEndTickets",
              children: [(0, HU.jsx)("b", {
                className: "Friendly",
                children: oU
              }), " \u2013 ", (0, HU.jsx)("b", {
                className: "Enemy",
                children: DU
              })]
            })]
          })]
        }), NU.length > 0 && (0, HU.jsxs)("div", {
          className: "FrontlineRoundEndMvps",
          style: {
            "--columns": NU.length
          },
          children: [(0, HU.jsx)(yU.Suspense, {
            fallback: null,
            children: (0, HU.jsx)(QX, {
              className: "FrontlineRoundEndLineup",
              players: IU
            })
          }), NU.map((UU => (0, HU.jsx)(NX, {
            mvp: YU[UU],
            place: UU
          }, UU)))]
        }), (0, HU.jsx)("div", {
          className: "FrontlineRoundEndNext",
          children: QU("frontlineRoundEnd:nextFront", {
            map: EU,
            seconds: String(zU)
          })
        })]
      });
      var pU
    }));

    function NX(UU) {
      let {
        mvp: XU,
        place: zU
      } = UU;
      const {
        t: cU
      } = (0, OU.I)(), [yU, QU, AU, FU, oU] = XU, [DU, EU] = cU(function(UU, XU) {
        return 1 === XU && "damage" !== UU ? `frontlineRoundEnd:${UU}One` : `frontlineRoundEnd:${UU}`
      }(AU, FU), {
        name: "\0",
        count: FU.toLocaleString()
      }).split("\0");
      return (0, HU.jsxs)("div", {
        className: CU()("FrontlineMvpCard", `Place-${zU+1}`, `Team-${QU}`),
        style: {
          "--revealMs": `${AX[zU]}ms`
        },
        children: [(0, HU.jsx)("i", {
          className: "FrontlineBracket TopRight"
        }), (0, HU.jsx)("i", {
          className: "FrontlineBracket BottomLeft"
        }), (0, HU.jsx)("div", {
          className: "FrontlineMvpPlace",
          children: cU(DX[zU])
        }), (0, HU.jsxs)("div", {
          className: "FrontlineMvpLine",
          children: [DU, (0, HU.jsx)("span", {
            className: "FrontlineMvpName",
            children: yU
          }), EU]
        }), (0, HU.jsx)("div", {
          className: "FrontlineMvpKit",
          children: oU
        })]
      })
    }
    const IX = function(UU, XU, zU, cU) {
      let {
        localPlayerId: AU
      } = cU;
      const FU = new iU,
        oU = new yX;
      let DU = null,
        EU = null,
        YU = null,
        NU = null,
        IU = null,
        pU = [!1, !1];
      const aU = () => {
        var UU, XU;
        const [zU, cU] = pU;
        null === (UU = EU) || void 0 === UU || UU.YC(!zU), null === (XU = YU) || void 0 === XU || XU.YC(!cU)
      };
      return {
        onCreate: UU => {
          DU = UU, EU = new GU(UU, AU), YU = new PU(UU, AU), NU = new UX(FU), aU(), IU = (0, QU.u)((0, yU.createElement)(yU.Fragment, null, (0, yU.createElement)(mU, {
            hud: FU,
            crosshair: EU,
            damage: YU,
            markers: NU
          }), (0, yU.createElement)(EX, {
            controller: oU
          })))
        },
        onClose: () => {
          var UU, XU, zU, cU;
          null === (UU = IU) || void 0 === UU || UU(), null === (XU = EU) || void 0 === XU || XU.dispose(), EU = null, null === (zU = YU) || void 0 === zU || zU.dispose(), YU = null, null === (cU = NU) || void 0 === cU || cU.points.dispose(), NU = null, DU = null
        },
        onAfterRender: (UU, XU) => {
          var zU, cU, yU, QU, FU;
          null === (zU = EU) || void 0 === zU || zU.frame(UU, XU.tanHalfFovY), null === (cU = YU) || void 0 === cU || cU.frame(XU.cameraHeading), null === (yU = NU) || void 0 === yU || yU.frame(XU, null !== (QU = null === (FU = DU) || void 0 === FU ? void 0 : FU.getPositionView(AU)) && void 0 !== QU ? QU : null)
        },
        onReceivedMessageFromServer: (UU, XU) => {
          "frontlineHud" === UU ? FU.PY(XU) : "frontlineScoreboard" === UU ? FU.receiveScoreboard(XU) : "frontlineRoundEnd" === UU ? oU.PY(XU) : "frontlinePrefs" === UU && (pU = XU, aU())
        }
      }
    }
  },
  7029: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU
    });
    const cU = "function" === typeof Intl.Segmenter ? new Intl.Segmenter(void 0, {
      granularity: "grapheme"
    }) : null;

    function yU(UU) {
      return null === cU ? Array.from(UU) : Array.from(cU.segment(UU), (UU => {
        let {
          segment: XU
        } = UU;
        return XU
      }))
    }
  },
  39278: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      g: () => QU
    });
    const cU = new WeakMap;

    function yU(UU) {
      let XU = cU.get(UU);
      return XU || (XU = {
        hidden: UU.hidden,
        x: NaN,
        y: NaN
      }, cU.set(UU, XU)), XU
    }

    function QU(UU, XU) {
      const zU = yU(UU);
      zU.hidden !== XU && (zU.hidden = XU, UU.hidden = XU)
    }

    function AU(UU, XU, zU) {
      const cU = yU(UU);
      cU.x === XU && cU.y === zU || (cU.x = XU, cU.y = zU, UU.style.translate = `${XU}vw ${zU}vh`)
    }
  },
  37794: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    const cU = {
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
for (const UU in modules) Object.freeze(modules[UU]);