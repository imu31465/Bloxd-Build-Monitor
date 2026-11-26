export const id = 28;
export const ids = [28];
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
  37222: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => LU,
      f: () => PU,
      h: () => WU,
      i: () => ZU,
      m: () => RU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(3478),
      FU = zU(320),
      oU = zU(2616),
      DU = zU(31),
      EU = zU(2032),
      YU = zU(42),
      NU = zU(2047),
      IU = zU(27),
      pU = zU(2053),
      aU = zU(1444),
      tU = zU(9395),
      gU = zU(2077),
      kU = zU(1193),
      GU = zU(1305);
    const BU = 7e3;

    function ZU() {
      const {
        loadingOverlayVisible: UU,
        openInGameMenuName: XU,
        openEverythingMenuName: zU
      } = (0, IU.q)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return UU || null !== XU || null !== zU
    }

    function RU(UU, XU, zU) {
      const yU = (0, cU.useRef)(zU);
      yU.current = zU;
      const QU = (0, cU.useRef)({
        card: UU,
        ms: 0
      });
      (0, cU.useEffect)((() => {
        if (XU || null === UU) return;
        QU.current.card !== UU && (QU.current = {
          card: UU,
          ms: 0
        });
        const zU = QU.current,
          cU = performance.now(),
          AU = setTimeout((() => {
            yU.current()
          }), BU - zU.ms);
        return () => {
          clearTimeout(AU), zU.ms += performance.now() - cU
        }
      }), [XU, UU])
    }
    const PU = (0, cU.memo)((function() {
      const {
        isTouchScreen: UU
      } = (0, IU.q)(["isTouchScreen"]), XU = (0, aU.F)();
      (0, AU.e)();
      const zU = (0, oU.f)("showBasicMovementControls"),
        [yU, EU] = (0, cU.useState)("movement"),
        NU = "movement" === yU,
        pU = XU && !1 !== zU;
      (0, cU.useEffect)((() => {
        "padActions" !== yU || pU || EU("done")
      }), [yU, pU]);
      const tU = ZU();
      RU("done" === yU ? null : yU, tU, (() => {
        EU("movement" === yU && (0, aU.n)() ? "padActions" : "done")
      }));
      const gU = YU.k.getItem(FU.Rb) > 2,
        kU = !gU && (!UU || XU) && NU && !1 !== zU;
      return (0, cU.useEffect)((() => {
        kU && !tU && DU.k.UY("controlsTutorialShown", "movement")
      }), [kU, tU]), gU ? (0, GU.jsx)(eU, {
        showingMovementControls: !1
      }) : (0, GU.jsxs)(GU.Fragment, {
        children: [kU ? (0, GU.jsxs)("div", {
          className: QU()("ControlsTutorialDiv", {
            Covered: tU
          }),
          children: [(0, GU.jsx)(WU, {}), (0, GU.jsx)(LU, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, GU.jsx)(LU, {
            header: "Jump",
            noaAction: "jump"
          })]
        }) : null, "padActions" === yU && pU && (0, GU.jsx)(dU, {
          covered: tU
        }), (0, GU.jsx)(eU, {
          showingMovementControls: "done" !== yU
        })]
      })
    }));

    function WU() {
      const UU = (0, aU.F)();
      return (0, GU.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, GU.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), UU && (0, GU.jsx)(pU.c, {
          noaAction: "forward"
        }), !UU && (0, GU.jsxs)(GU.Fragment, {
          children: [(0, GU.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, GU.jsx)(pU.c, {
              noaAction: "forward"
            })
          }), (0, GU.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, GU.jsx)(pU.c, {
              noaAction: "left"
            }), (0, GU.jsx)(pU.c, {
              noaAction: "backward"
            }), (0, GU.jsx)(pU.c, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function dU(UU) {
      let {
        covered: XU
      } = UU;
      const {
        t: zU
      } = (0, kU.I)(), cU = (0, oU.f)("useInventory");
      return (0, GU.jsxs)("div", {
        className: QU()("ControlsTutorialDiv", {
          Covered: XU
        }),
        children: [(0, GU.jsx)(LU, {
          header: zU("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, GU.jsx)(LU, {
          header: zU("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== cU && (0, GU.jsx)(LU, {
          header: zU("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, GU.jsx)(LU, {
          header: zU("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function LU(UU) {
      let {
        header: XU,
        noaAction: zU
      } = UU;
      return (0, GU.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, GU.jsx)("div", {
          className: "KeyHeader",
          children: XU
        }), (0, GU.jsx)(pU.c, {
          noaAction: zU
        })]
      })
    }

    function eU(UU) {
      let {
        showingMovementControls: XU
      } = UU;
      const {
        isTouchScreen: zU
      } = (0, IU.q)(["isTouchScreen"]), yU = (0, aU.F)(), QU = (0, gU.d)("OpenShop"), [AU, FU] = (0, cU.useState)(!1), pU = `SeenShopControls|${(0,NU.e)("connectedGame",(UU=>UU.gameNameWithVariation))}`, kU = () => (!(0, aU.n)() || null !== (0, tU.c)("OpenShop")) && !YU.k.getItem(pU) && EU.d.get("shopInfo") && !XU, BU = () => (FU(!0), YU.k.setItem(pU, !0), (0, aU.n)() || DU.k.UY("showShopTouchTutorial"), setTimeout((() => {
        FU(!1)
      }), 7e3));
      (0, cU.useEffect)((() => {
        let UU;
        const XU = DU.k.subscribe("showShopTutorial", (() => {
          kU() && (UU = BU())
        }));
        return () => {
          clearTimeout(UU), DU.k.unsubscribe(XU)
        }
      }), [XU]);
      const ZU = (0, cU.useRef)();
      return (0, oU.e)("currencyAmounts", (UU => {
        if (kU()) {
          let zU = !1;
          const cU = EU.d.get("shopInfo");
          for (const yU in cU) {
            for (const QU in cU[yU].items) {
              var XU;
              const AU = cU[yU].items[QU];
              if (void 0 !== AU.currency && UU[AU.currency] && AU.cost <= UU[AU.currency].amount && (null === (XU = AU.hidden) || void 0 === XU || !XU)) {
                zU = !0;
                break
              }
            }
            if (zU) break
          }
          zU && (ZU.current = BU())
        }
      })), (0, cU.useEffect)((() => () => {
        clearTimeout(ZU.current)
      }), [XU]), !AU || yU && !QU ? null : (0, GU.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: zU && !yU ? null : (0, GU.jsx)(LU, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
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
  9395: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      e: () => DU,
      i: () => YU,
      m: () => EU,
      o: () => oU,
      s: () => IU
    });
    var cU = zU(31),
      yU = zU(2082),
      QU = zU(1457),
      AU = zU(1444);
    const FU = UU => {
        var XU, zU;
        return (0, AU.n)() && null !== (XU = null === (zU = (0, QU.e)()) || void 0 === zU ? void 0 : zU.getGlyphForNoaAction(UU)) && void 0 !== XU ? XU : null
      },
      oU = "controllerGlyph:",
      DU = UU => {
        var XU, zU;
        return null !== (XU = null === (zU = (0, QU.e)()) || void 0 === zU ? void 0 : zU.getPadGlyphIconName(UU)) && void 0 !== XU ? XU : `${oU}xbox/${UU}`
      },
      EU = UU => UU.startsWith(oU),
      YU = UU => {
        var XU, zU;
        return EU(UU) && null !== (XU = null === (zU = (0, QU.e)()) || void 0 === zU ? void 0 : zU.getPadGlyphIconUrl(UU)) && void 0 !== XU ? XU : null
      },
      NU = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", AU.c, yU.d, yU.c],
      IU = UU => {
        const XU = NU.map((XU => cU.k.subscribe(XU, UU)));
        return () => {
          for (const UU of XU) cU.k.unsubscribe(UU)
        }
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
  40422: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => mX
    });
    var cU = zU(212);
    const yU = ["gingerbreadLane", "toyRow", "iceRink", "carousel", "greatTree", "cocoaCorner", "lanternWalk", "marketGate", "santasGrotto"],
      QU = {
        gingerbreadLane: "\ud83c\udf6a",
        toyRow: "\ud83e\uddf8",
        iceRink: "\u26f8\ufe0f",
        carousel: "\ud83c\udfa0",
        greatTree: "\ud83c\udf84",
        cocoaCorner: "\u2615",
        lanternWalk: "\ud83c\udfee",
        marketGate: "\ud83d\udeaa",
        santasGrotto: "\ud83c\udf85"
      };
    var AU = zU(61),
      FU = zU(37325),
      oU = zU(1106),
      DU = zU.n(oU),
      EU = zU(27),
      YU = zU(1444),
      NU = zU(42),
      IU = zU(1193),
      pU = zU(37222),
      aU = zU(1492),
      tU = zU(31),
      gU = zU(39315),
      kU = zU(39311);
    const GU = 400,
      BU = 2 * Math.PI * 17;

    function ZU(UU, XU, zU) {
      const {
        santaMarketMinX: cU,
        santaMarketMinZ: yU,
        santaMarketSize: QU
      } = UU;
      return (0, kU.e)(XU, zU, {
        mapMinX: cU,
        mapMaxX: cU + QU,
        mapMinZ: yU,
        mapMaxZ: yU + QU
      })
    }
    class RU {
      constructor() {
        this.state = "idle", this.ownRing = !1, this.faded = !1, this.lastPressAt = -1 / 0, this.predictedAt = 0, this.timedOutPressAt = null, this.cooldownUntil = 0, this.averageRoundTrip = null, this.recentRoundTrips = []
      }
      press(UU, XU, zU) {
        var cU, yU;
        this.forgetOldRoundTrips(UU);
        const QU = UU - this.lastPressAt;
        if (this.lastPressAt = UU, QU < this.quietMs() || this.awaitingTimedOut(UU) || "idle" !== this.state || zU || UU < this.cooldownUntil || null === XU) return 0;
        const AU = Math.max(0, XU.awaySpeed) * ((null !== (cU = this.averageRoundTrip) && void 0 !== cU ? cU : 300) / 1e3);
        return XU.distance + AU > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = UU, this.ownRing = !0, this.faded = !1, 500 + (null !== (yU = this.averageRoundTrip) && void 0 !== yU ? yU : 0))
      }
      turnedAway(UU, XU, zU) {
        if (!this.mayTurnAway(UU)) return !1;
        const cU = 4 * (this.averageRoundTrip + 150) / 1e3;
        return !(XU <= 40 + (cU >= zU ? 180 : 180 * Math.asin(cU / zU) / Math.PI) && zU <= 5 + Math.max(.5, cU)) && (this.faded = !0, !0)
      }
      mayTurnAway(UU) {
        return null !== this.averageRoundTrip && "idle" !== this.state && this.ownRing && !this.faded && UU - this.predictedAt <= 350
      }
      PY(UU, XU, zU) {
        const cU = XU > 0 || !zU,
          yU = "predicted" === this.state;
        return zU && (this.cooldownUntil = UU + 1e3), cU && yU ? this.learnRoundTrip(UU, UU - this.predictedAt) : cU && this.awaitingTimedOut(UU) && (this.timedOutPressAt = null), XU > 0 ? (this.state = "confirmed", yU ? null : (this.ownRing = !1, this.faded = !1, {
          kind: "start",
          ms: XU
        })) : "idle" === this.state ? null : (this.state = "idle", this.faded && !zU ? null : {
          kind: "end",
          done: zU
        })
      }
      expired(UU) {
        var XU;
        return !("predicted" !== this.state || UU - this.predictedAt < 1200 + (null !== (XU = this.averageRoundTrip) && void 0 !== XU ? XU : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(UU, UU - this.predictedAt), !this.faded)
      }
      stop() {
        this.state = "idle", this.cooldownUntil = 0, this.timedOutPressAt = null
      }
      quietMs() {
        var UU;
        const XU = this.recentRoundTrips.reduce(((UU, XU) => {
          let {
            ms: zU
          } = XU;
          return Math.max(UU, zU)
        }), null !== (UU = this.averageRoundTrip) && void 0 !== UU ? UU : 0);
        return Math.max(300, XU > 0 ? 1.5 * XU + 300 : 1e3)
      }
      awaitingTimedOut(UU) {
        return null !== this.timedOutPressAt && UU - this.timedOutPressAt >= 3500 && (this.timedOutPressAt = null), null !== this.timedOutPressAt
      }
      forgetOldRoundTrips(UU) {
        for (; this.recentRoundTrips.length > 0 && UU - this.recentRoundTrips[0].at > 3e4;) this.recentRoundTrips.shift()
      }
      learnRoundTrip(UU, XU) {
        const zU = Math.min(2e3, Math.max(0, XU));
        this.averageRoundTrip = null === this.averageRoundTrip ? zU : this.averageRoundTrip + .3 * (zU - this.averageRoundTrip), this.recentRoundTrips.push({
          at: UU,
          ms: zU
        })
      }
    }
    const PU = "secretSantaHudChanged",
      WU = "SecretSantaHudShown",
      dU = "SecretSantaMatchOrFinish",
      LU = ["Wrapping", "Naughty", "Cancelled"],
      eU = {
        shown: !1,
        market: null,
        hint: null,
        status: null,
        endsAt: 0,
        naughtyEndsAt: 0,
        pulse: 0
      };
    class CU {
      constructor(UU) {
        this.onWrapStart = UU, this.view = eU, this.nextHintAt = 0, this.endTimer = null, this.finishEndTimer = null, this.map = null, this.arrow = null, this.countdown = null, this.countdownAnimation = null, this.ring = null, this.ringFill = null, this.ringAnimation = null, this.ringEndAnimation = null, this.flash = null, this.flashAnimation = null, this.wrap = new RU, this.drawnArrow = "", this.drawnInDistrict = !1, this.drawnInCircle = !1, this.bindMap = UU => {
          this.map = UU, this.drawnInDistrict = !1, this.drawnInCircle = !1
        }, this.bindArrow = UU => {
          this.arrow = UU, this.drawnArrow = ""
        }, this.bindCountdown = UU => {
          var XU;
          null === (XU = this.countdownAnimation) || void 0 === XU || XU.cancel(), this.countdownAnimation = null, this.countdown = UU, this.restartCountdown()
        }, this.bindRing = UU => {
          var XU;
          this.stopRing(), this.ring = UU, this.ringFill = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.querySelector(".SecretSantaRingFill")) && void 0 !== XU ? XU : null;
          const zU = this.view.naughtyEndsAt - performance.now();
          UU && zU > 0 && this.runRing("Naughty", zU)
        }, this.bindFlash = UU => {
          var XU;
          null === (XU = this.flashAnimation) || void 0 === XU || XU.cancel(), this.flashAnimation = null, this.flash = UU
        }
      }
      getView() {
        return this.view
      }
      receiveMarket(UU) {
        this.UY({
          ...this.view,
          market: UU
        })
      }
      receiveHint(UU) {
        const XU = this.view.hint,
          zU = wU(this.nextHintAt, performance.now() + UU.santaHintNextInMs),
          cU = zU > this.nextHintAt,
          yU = !XU || XU.santaHintContract !== UU.santaHintContract || XU.santaHintDistrict !== UU.santaHintDistrict || XU.santaHintCircleX !== UU.santaHintCircleX || XU.santaHintCircleZ !== UU.santaHintCircleZ;
        this.nextHintAt = zU;
        const QU = "hunting" === UU.santaHintState && (cU || yU) ? this.view.pulse + 1 : this.view.pulse;
        this.UY({
          ...this.view,
          hint: UU,
          pulse: QU
        }), this.restartCountdown()
      }
      receiveStatus(UU) {
        var XU;
        const zU = performance.now(),
          cU = wU(this.view.endsAt, zU + UU.santaStatusMsLeft),
          yU = UU.santaStatusNaughtyMs > 0 ? wU(this.view.naughtyEndsAt, zU + UU.santaStatusNaughtyMs) : 0,
          QU = 0 !== yU && 0 === this.view.naughtyEndsAt;
        this.UY({
          ...this.view,
          status: UU,
          endsAt: cU,
          naughtyEndsAt: yU,
          shown: UU.santaStatusMsLeft > 0
        }), this.scheduleEnd(cU - zU), QU ? this.runRing("Naughty", UU.santaStatusNaughtyMs) : 0 === yU && null !== (XU = this.ring) && void 0 !== XU && XU.classList.contains("Naughty") && this.stopRing()
      }
      pressGift(UU, XU) {
        if (!this.view.shown) return !1;
        const zU = this.wrap.press(UU, XU, this.view.naughtyEndsAt > UU);
        return zU > 0 && this.startWrapRing(Math.max(1, zU - (performance.now() - UU))), zU > 0
      }
      aimAtWrap(UU, XU) {
        const zU = performance.now();
        return this.wrap.turnedAway(zU, UU, XU) && this.endWrapRing(!1), this.wrap.mayTurnAway(zU)
      }
      receiveWrap(UU, XU) {
        const zU = this.wrap.PY(performance.now(), UU, XU);
        "start" === (null === zU || void 0 === zU ? void 0 : zU.kind) ? this.startWrapRing(zU.ms): "end" === (null === zU || void 0 === zU ? void 0 : zU.kind) && (zU.done && this.ring && !this.ring.classList.contains("Wrapping") && this.runRing("Wrapping", 1), this.endWrapRing(zU.done))
      }
      snowBlink() {
        var UU, XU, zU;
        null === (UU = this.flashAnimation) || void 0 === UU || UU.cancel();
        this.flashAnimation = null !== (XU = null === (zU = this.flash) || void 0 === zU ? void 0 : zU.animate([{
          opacity: 1
        }, {
          opacity: 1,
          offset: .24,
          easing: "ease-in"
        }, {
          opacity: 0
        }], {
          duration: 500
        })) && void 0 !== XU ? XU : null
      }
      frame(UU, XU) {
        this.wrap.expired(performance.now()) && this.endWrapRing(!1);
        const {
          market: zU,
          hint: cU
        } = this.view;
        if (!this.view.shown || !zU || !XU || !this.arrow || !this.map) return;
        const [yU, QU] = ZU(zU, XU[0], XU[2]), AU = Math.min(100, Math.max(0, yU)), FU = Math.min(100, Math.max(0, QU)), oU = Math.min(95, Math.max(5, AU)), DU = Math.min(95, Math.max(5, FU)), EU = Math.round(180 * function(UU) {
          return UU - gU.g
        }(UU) / Math.PI), YU = `${oU.toFixed(1)}% ${DU.toFixed(1)}% ${EU}`;
        YU !== this.drawnArrow && (this.drawnArrow = YU, this.arrow.style.left = `${oU.toFixed(1)}%`, this.arrow.style.top = `${DU.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${EU}deg)`);
        const NU = "hunting" === (null === cU || void 0 === cU ? void 0 : cU.santaHintState) ? cU : null,
          IU = null !== NU && function(UU, XU) {
            const zU = UU => Math.min(2, Math.max(0, Math.floor(UU / (100 / 3))));
            return 3 * zU(XU) + zU(UU)
          }(AU, FU) === NU.santaHintDistrict;
        IU !== this.drawnInDistrict && (this.drawnInDistrict = IU, this.map.toggleAttribute("data-in-district", IU));
        const pU = null !== NU && function(UU, XU) {
          let [zU, , cU] = XU;
          const {
            santaHintCircleX: yU,
            santaHintCircleZ: QU,
            santaHintCircleR: AU
          } = UU;
          return null !== yU && null !== QU && AU > 0 && Math.hypot(zU - yU, cU - QU) <= AU
        }(NU, XU);
        pU !== this.drawnInCircle && (this.drawnInCircle = pU, this.map.toggleAttribute("data-in-circle", pU))
      }
      dispose() {
        var UU, XU;
        null !== this.endTimer && (window.clearTimeout(this.endTimer), this.endTimer = null), this.clearFinishEnd(), document.body.classList.remove(dU), null === (UU = this.countdownAnimation) || void 0 === UU || UU.cancel(), this.countdownAnimation = null, this.stopRing(), null === (XU = this.flashAnimation) || void 0 === XU || XU.cancel(), this.flashAnimation = null, this.map = this.arrow = this.ring = this.flash = null, this.countdown = this.ringFill = null, document.body.classList.remove(WU), this.view = eU
      }
      UY(UU) {
        this.view = UU, document.body.classList.toggle(WU, UU.shown), UU.shown && (this.clearFinishEnd(), document.body.classList.add(dU)), tU.k.UY(PU, UU, !0)
      }
      scheduleEnd(UU) {
        null !== this.endTimer && window.clearTimeout(this.endTimer), this.endTimer = window.setTimeout((() => {
          this.endTimer = null, this.wrap.stop(), this.UY({
            ...this.view,
            shown: !1,
            naughtyEndsAt: 0
          }), this.stopRing(), this.clearFinishEnd(), this.finishEndTimer = window.setTimeout((() => {
            this.finishEndTimer = null, document.body.classList.remove(dU)
          }), 13e3)
        }), UU)
      }
      clearFinishEnd() {
        null !== this.finishEndTimer && (window.clearTimeout(this.finishEndTimer), this.finishEndTimer = null)
      }
      restartCountdown() {
        var UU, XU;
        null === (UU = this.countdownAnimation) || void 0 === UU || UU.cancel(), this.countdownAnimation = null;
        const zU = this.nextHintAt - performance.now();
        if (!this.countdown || "hunting" !== (null === (XU = this.view.hint) || void 0 === XU ? void 0 : XU.santaHintState) || zU <= 0) return;
        const cU = GU * (1 - Math.min(1, zU / 1e4));
        this.countdownAnimation = this.countdown.animate([{
          strokeDashoffset: cU
        }, {
          strokeDashoffset: GU
        }], {
          duration: zU,
          fill: "forwards"
        })
      }
      runRing(UU, XU) {
        if (this.stopRing(), !this.ring || !this.ringFill) return;
        this.ring.classList.add(UU);
        const [zU, cU] = "Wrapping" === UU ? [BU, 0] : [0, BU], yU = [{
          strokeDashoffset: zU
        }, {
          strokeDashoffset: cU
        }], QU = this.ringFill.animate(yU, {
          duration: XU,
          fill: "forwards"
        });
        this.ringAnimation = QU, "Naughty" === UU && (QU.onfinish = () => {
          this.ringAnimation === QU && this.stopRing()
        })
      }
      startWrapRing(UU) {
        this.runRing("Wrapping", UU), this.onWrapStart()
      }
      endWrapRing(UU) {
        const XU = this.ring;
        if (null === XU || void 0 === XU || !XU.classList.contains("Wrapping")) return;
        var zU, cU;
        UU ? null === (zU = this.ringAnimation) || void 0 === zU || zU.finish() : null === (cU = this.ringAnimation) || void 0 === cU || cU.pause();
        XU.classList.toggle("Cancelled", !UU);
        const yU = XU.animate([{
          opacity: 1,
          scale: 1
        }, {
          opacity: 0,
          scale: UU ? 1.6 : .8
        }], {
          duration: UU ? 350 : 300,
          easing: UU ? "ease-out" : "ease-in",
          fill: "forwards"
        });
        this.ringEndAnimation = yU, yU.onfinish = () => {
          this.ringEndAnimation === yU && this.stopRing()
        }
      }
      stopRing() {
        var UU, XU, zU;
        null === (UU = this.ringAnimation) || void 0 === UU || UU.cancel(), null === (XU = this.ringEndAnimation) || void 0 === XU || XU.cancel(), this.ringAnimation = this.ringEndAnimation = null, null === (zU = this.ring) || void 0 === zU || zU.classList.remove(...LU)
      }
    }

    function wU(UU, XU) {
      return 0 !== UU && Math.abs(XU - UU) < 1e3 ? Math.min(UU, XU) : XU
    }
    var qU = zU(1305);
    const OU = "secretSantaControlsShown",
      SU = (0, AU.memo)((function(UU) {
        let {
          controller: XU
        } = UU;
        const {
          isTouchScreen: zU
        } = (0, EU.q)(["isTouchScreen"]), cU = (0, YU.F)(), {
          t: yU
        } = (0, IU.I)(), QU = (0, aU.j)(PU, XU.getView()).shown, FU = (0, pU.i)(), [oU] = (0, AU.useState)((() => {
          var UU;
          return null !== (UU = NU.k.getItem(OU)) && void 0 !== UU ? UU : 0
        })), [tU, gU] = (0, AU.useState)(oU >= 2), [kU, GU] = (0, AU.useState)(!1), BU = (0, AU.useRef)(!1), ZU = !tU && kU && QU && (!zU || cU);
        return (0, AU.useEffect)((() => {
          if (!QU || kU || tU) return;
          const UU = setTimeout((() => {
            GU(!0)
          }), 12500);
          return () => {
            clearTimeout(UU)
          }
        }), [QU, kU, tU]), (0, AU.useEffect)((() => {
          !ZU || FU || BU.current || (BU.current = !0, NU.k.setItem(OU, oU + 1))
        }), [ZU, FU, oU]), (0, pU.m)(ZU ? "secretSanta" : null, FU, (() => {
          gU(!0)
        })), ZU ? (0, qU.jsxs)("div", {
          className: DU()("ControlsTutorialDiv", {
            Covered: FU
          }),
          children: [(0, qU.jsx)(pU.h, {}), (0, qU.jsx)(pU.c, {
            header: "Jump",
            noaAction: "jump"
          }), (0, qU.jsx)(pU.c, {
            header: yU("secretSantaHud:givePresent"),
            noaAction: "alt-fire"
          }), cU && (0, qU.jsx)(pU.c, {
            header: yU("controller:tutorialPause"),
            noaAction: "OpenSettings"
          })]
        }) : null
      }));
    var rU = zU(37318),
      uU = zU(3796),
      fU = zU(37418),
      iU = zU(40278);
    const HU = (0, AU.memo)((function(UU) {
      let {
        controller: XU,
        naughtyEndsAt: zU
      } = UU;
      return (0, qU.jsxs)("div", {
        ref: XU.bindRing,
        className: "SecretSantaRing",
        children: [(0, qU.jsxs)("svg", {
          viewBox: "0 0 40 40",
          "aria-hidden": "true",
          children: [(0, qU.jsx)("circle", {
            className: "SecretSantaRingTrack",
            cx: "20",
            cy: "20",
            r: 17
          }), (0, qU.jsx)("circle", {
            className: "SecretSantaRingFill",
            cx: "20",
            cy: "20",
            r: 17,
            style: {
              strokeDasharray: BU,
              strokeDashoffset: BU
            }
          })]
        }), zU > 0 && (0, qU.jsx)(MU, {
          endsAt: zU
        })]
      })
    }));

    function MU(UU) {
      let {
        endsAt: XU
      } = UU;
      const {
        t: zU
      } = (0, IU.I)(), cU = (0, iU.i)(XU);
      return cU <= 0 ? null : (0, qU.jsxs)("div", {
        className: "SecretSantaNaughty SmallTextBold",
        children: [(0, qU.jsx)("span", {
          className: "SecretSantaNaughtyTitle",
          children: zU("secretSantaHud:naughty")
        }), (0, qU.jsx)("span", {
          children: zU("secretSantaHud:naughtyWait", {
            seconds: cU
          })
        })]
      })
    }

    function vU(UU) {
      return UU && QU[UU] || "\u2744\ufe0f"
    }
    var VU = zU(39367);
    const sU = (0, AU.memo)((function(UU) {
      var XU, zU;
      let {
        controller: cU,
        market: QU,
        hint: AU,
        pulse: FU
      } = UU;
      const {
        t: oU
      } = (0, IU.I)(), EU = null !== (XU = null === AU || void 0 === AU ? void 0 : AU.santaHintState) && void 0 !== XU ? XU : "none", YU = "hunting" === EU && AU ? AU.santaHintDistrict : -1, NU = null !== (zU = null === QU || void 0 === QU ? void 0 : QU.santaMarketDistricts) && void 0 !== zU ? zU : yU;
      return (0, qU.jsxs)("div", {
        ref: cU.bindMap,
        className: DU()("SecretSantaMinimap", `State-${EU}`),
        children: [(0, qU.jsx)("div", {
          className: "SecretSantaMinimapGrid",
          children: NU.map(((UU, XU) => (0, qU.jsxs)("div", {
            className: DU()("SecretSantaDistrict", `District-${UU}`, {
              Target: XU === YU
            }),
            children: [(0, qU.jsx)("span", {
              className: "SecretSantaDistrictIcon",
              children: vU(UU)
            }), (0, qU.jsx)("span", {
              className: "SecretSantaDistrictLabel",
              children: oU(`secretSantaHud:district_${UU}`)
            })]
          }, UU)))
        }), YU >= 0 && (0, qU.jsx)("div", {
          className: "SecretSantaDistrictPulse",
          style: {
            left: YU % 3 * (100 / 3) + "%",
            top: Math.floor(YU / 3) * (100 / 3) + "%"
          }
        }, FU), QU && AU && "hunting" === EU && (0, qU.jsx)("div", {
          className: "SecretSantaCircleClip",
          children: (0, qU.jsx)(nU, {
            market: QU,
            hint: AU
          })
        }), (0, qU.jsx)("div", {
          className: "SecretSantaMinimapArrowClip",
          children: (0, qU.jsx)("div", {
            ref: cU.bindArrow,
            className: "SecretSantaMinimapArrow",
            children: (0, qU.jsxs)("svg", {
              viewBox: "0 2 20 20",
              children: [(0, qU.jsx)("path", {
                className: "SecretSantaMinimapArrowBody",
                d: "M10 1.5 14.2 6.4H5.8Z"
              }), (0, qU.jsx)("circle", {
                className: "SecretSantaMinimapArrowBody",
                cx: "10",
                cy: "12",
                r: "5"
              }), (0, qU.jsx)("circle", {
                className: "SecretSantaMinimapArrowDot",
                cx: "10",
                cy: "12",
                r: "1.8"
              })]
            })
          })
        }), (0, qU.jsx)("svg", {
          className: "SecretSantaCountdown",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          "aria-hidden": "true",
          children: (0, qU.jsx)("path", {
            ref: cU.bindCountdown,
            d: "M50 0H100V100H0V0Z",
            style: {
              strokeDasharray: GU,
              strokeDashoffset: GU
            }
          })
        }), "lost" === EU && (0, qU.jsxs)("div", {
          className: "SecretSantaLost",
          children: [(0, qU.jsx)("span", {
            className: "SecretSantaLostIcon",
            children: "\u2744\ufe0f"
          }), (0, qU.jsx)("span", {
            className: "SmallTextBold",
            children: oU("secretSantaHud:lost")
          })]
        })]
      })
    }));

    function nU(UU) {
      let {
        market: XU,
        hint: zU
      } = UU;
      const {
        santaHintCircleX: cU,
        santaHintCircleZ: yU,
        santaHintCircleR: QU,
        santaHintContract: FU
      } = zU, oU = (0, AU.useMemo)((() => (0, VU.i)({
        ...(0, VU.e)(`${FU}:${cU}:${yU}`),
        radius: 50,
        squareness: 2
      })), [FU, cU, yU]);
      if (null === cU || null === yU || QU <= 0) return null;
      const [DU, EU] = ZU(XU, cU, yU), YU = 200 * QU / XU.santaMarketSize;
      return (0, qU.jsx)("div", {
        className: "SecretSantaCircle",
        style: {
          left: `${DU}%`,
          top: `${EU}%`,
          width: `${YU}%`,
          height: `${YU}%`
        },
        children: (0, qU.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, qU.jsx)("path", {
            className: "SecretSantaCircleShadow",
            d: oU
          }), (0, qU.jsx)("path", {
            className: "SecretSantaCircleDashes",
            d: oU
          })]
        })
      })
    }
    const mU = "\x01";

    function lU(UU) {
      let {
        controller: XU
      } = UU;
      const zU = (0, aU.j)(PU, XU.getView());
      return (0, qU.jsxs)(qU.Fragment, {
        children: [(0, qU.jsx)("div", {
          ref: XU.bindFlash,
          className: "SecretSantaFlash",
          "aria-hidden": "true"
        }), (0, qU.jsx)(HU, {
          controller: XU,
          naughtyEndsAt: zU.naughtyEndsAt
        }), zU.shown && (0, qU.jsxs)(qU.Fragment, {
          children: [(0, qU.jsx)(TU, {
            status: zU.status,
            endsAt: zU.endsAt
          }), (0, qU.jsx)(xU, {
            controller: XU,
            market: zU.market,
            hint: zU.hint,
            pulse: zU.pulse
          }), (0, qU.jsx)(rU.e, {
            children: (0, qU.jsx)(XX, {
              market: zU.market,
              hint: zU.hint
            })
          })]
        })]
      })
    }

    function xU(UU) {
      let {
        controller: XU,
        market: zU,
        hint: cU,
        pulse: yU
      } = UU;
      const [QU, FU] = (0, AU.useState)(null);
      return (0, uU.m)(QU, JU), (0, qU.jsx)("div", {
        ref: FU,
        className: "SecretSantaMapPanel",
        children: (0, qU.jsx)(sU, {
          controller: XU,
          market: zU,
          hint: cU,
          pulse: yU
        })
      })
    }

    function JU(UU) {
      const XU = () => {
        const XU = UU.getBoundingClientRect();
        let zU = 0;
        for (const UU of bU()) UU.left < XU.right && UU.right > XU.left && (zU = Math.max(zU, UU.bottom));
        const cU = (0, uU.j)(XU.left, XU.right, zU);
        jU(UU, "--ss-map-top", zU + 6), jU(UU, "--ss-map-bottom", null === cU ? null : (0, uU.g)(UU) - cU + 6)
      };
      XU();
      const zU = KU(XU);
      return {
        layout: XU,
        clear: () => {
          zU(), UU.style.removeProperty("--ss-map-top"), UU.style.removeProperty("--ss-map-bottom")
        }
      }
    }

    function jU(UU, XU, zU) {
      const cU = null === zU ? "" : `${Math.ceil(zU)}px`;
      UU.style.getPropertyValue(XU) !== cU && UU.style.setProperty(XU, cU)
    }

    function KU(UU) {
      const XU = document.querySelector(`.${fU.h}`),
        zU = new ResizeObserver(UU);
      for (const QU of [document.querySelector(`.${fU.f}`), XU]) QU && zU.observe(QU);
      const cU = new MutationObserver(UU),
        yU = null === XU || void 0 === XU ? void 0 : XU.querySelector(".TopRightElementsRight");
      return yU && cU.observe(yU, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), () => {
        zU.disconnect(), cU.disconnect()
      }
    }

    function bU() {
      const UU = `.${fU.h}`,
        XU = document.querySelectorAll(`.${fU.f}, ${UU} .TopRightIcon:not(.TopRightTray *), ${UU} .CondensedSocialBarInner`);
      return Array.from(XU, (UU => UU.getBoundingClientRect())).filter((UU => UU.width > 0 && UU.height > 0))
    }
    const TU = (0, AU.memo)((function(UU) {
      let {
        status: XU,
        endsAt: zU
      } = UU;
      const {
        t: cU
      } = (0, IU.I)(), [yU, QU] = (0, AU.useState)(null);
      return function(UU) {
        (0, AU.useLayoutEffect)((() => {
          if (!UU) return;
          const XU = () => {
            UU.style.removeProperty("top");
            const XU = bU(),
              zU = Array.from(UU.children, (UU => UU.getBoundingClientRect()));
            let cU = 0;
            for (let UU = 0; UU < XU.length; UU++) {
              let UU = cU;
              for (const yU of zU)
                for (const zU of XU) {
                  yU.left < zU.right + fU.d && yU.right > zU.left - fU.d && yU.top + cU < zU.bottom + 4 && yU.bottom + cU > zU.top && (UU = Math.max(UU, Math.ceil(zU.bottom + 4 - yU.top)))
                }
              if (UU === cU) break;
              cU = UU
            }
            cU > 0 && (UU.style.top = `${UU.getBoundingClientRect().top+cU}px`)
          };
          XU();
          const zU = new ResizeObserver(XU);
          zU.observe(UU);
          const cU = KU(XU),
            yU = new MutationObserver((UU => {
              UU.some((UU => {
                const XU = UU.target instanceof Element ? UU.target : UU.target.parentElement;
                return !(null !== XU && void 0 !== XU && XU.closest(".SecretSantaClock"))
              })) && XU()
            }));
          return yU.observe(UU, {
            childList: !0,
            subtree: !0,
            characterData: !0
          }), window.addEventListener("resize", XU), () => {
            zU.disconnect(), cU(), yU.disconnect(), window.removeEventListener("resize", XU)
          }
        }), [UU])
      }(yU), (0, qU.jsxs)("div", {
        ref: QU,
        className: "SecretSantaTop",
        children: [(0, qU.jsxs)("div", {
          className: "SecretSantaTopBar",
          children: [(0, qU.jsx)(hU, {
            endsAt: zU
          }), XU && (0, qU.jsxs)("span", {
            className: "SecretSantaScore",
            children: [(0, qU.jsxs)("span", {
              className: "SecretSantaPoints",
              children: ["\u2b50 ", XU.santaStatusPoints]
            }, XU.santaStatusPoints), (0, qU.jsx)("span", {
              className: "SecretSantaRank",
              children: cU("secretSantaHud:rank", {
                rank: XU.santaStatusRank,
                players: XU.santaStatusPlayers
              })
            })]
          })]
        }), XU && (0, qU.jsx)(UX, {
          status: XU
        })]
      })
    }));

    function hU(UU) {
      let {
        endsAt: XU
      } = UU;
      const zU = (0, iU.i)(XU);
      return 0 === XU ? (0, qU.jsx)("span", {
        className: "SecretSantaClock"
      }) : (0, qU.jsxs)("span", {
        className: DU()("SecretSantaClock", {
          Urgent: zU <= 30
        }),
        children: [(0, qU.jsx)("span", {
          "aria-hidden": "true",
          children: "\u23f1"
        }), (0, iU.e)(zU)]
      })
    }
    const UX = (0, AU.memo)((function(UU) {
        let {
          status: XU
        } = UU;
        const {
          t: zU
        } = (0, IU.I)(), cU = Math.min(2, Math.max(0, XU.santaStatusHunters)), yU = XU.santaStatusScarf, QU = XU.santaStatusKnown ? (0, qU.jsxs)("span", {
          className: "SecretSantaSpotted",
          children: [(0, qU.jsx)("span", {
            "aria-hidden": "true",
            children: "\ud83d\udc41"
          }), " ", cX(zU("secretSantaHud:spottedScarf", {
            scarf: mU
          }), (0, qU.jsx)(zX, {
            scarf: yU
          }))]
        }) : (0, qU.jsx)("span", {
          children: cX(zU("secretSantaHud:youWear", {
            scarf: mU
          }), (0, qU.jsx)(zX, {
            scarf: yU
          }))
        });
        return (0, qU.jsxs)("div", {
          className: "SecretSantaYouTab",
          children: [cU > 0 && (0, qU.jsxs)("span", {
            className: "SecretSantaHunters",
            children: [(0, qU.jsx)("span", {
              "aria-hidden": "true",
              children: "\ud83c\udf85"
            }), " ", zU(1 === cU ? "secretSantaHud:hunters1" : "secretSantaHud:hunters2")]
          }), QU]
        }, cU)
      })),
      XX = (0, AU.memo)((function(UU) {
        var XU;
        let {
          market: zU,
          hint: cU
        } = UU;
        const {
          t: yU
        } = (0, IU.I)(), QU = null !== (XU = null === cU || void 0 === cU ? void 0 : cU.santaHintState) && void 0 !== XU ? XU : "none";
        let AU, FU = QU;
        if (cU && "none" !== QU)
          if ("lost" === QU) AU = (0, qU.jsxs)(qU.Fragment, {
            children: [(0, qU.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2744\ufe0f"
            }), " ", yU("secretSantaHud:lostLine")]
          });
          else if (null !== cU.santaHintScarf) FU = `scarf-${cU.santaHintScarf}`, AU = cX(yU("secretSantaHud:lookingFor", {
          scarf: mU
        }), (0, qU.jsx)(zX, {
          scarf: cU.santaHintScarf
        }));
        else {
          const UU = null === zU || void 0 === zU ? void 0 : zU.santaMarketDistricts[cU.santaHintDistrict];
          FU = `district-${null!==UU&&void 0!==UU?UU:"?"}`, AU = cX(yU("secretSantaHud:findIn", {
            district: mU
          }), (0, qU.jsxs)("span", {
            className: DU()("SecretSantaDistrictName", void 0 !== UU && `District-${UU}`),
            children: [(0, qU.jsxs)("span", {
              "aria-hidden": "true",
              children: [vU(UU), " "]
            }), void 0 !== UU ? yU(`secretSantaHud:district_${UU}`) : "?"]
          }))
        } else AU = yU("secretSantaHud:finding");
        return (0, qU.jsx)("div", {
          className: DU()("SecretSantaTarget", `State-${QU}`),
          children: AU
        }, FU)
      }));

    function zX(UU) {
      let {
        scarf: XU
      } = UU;
      const {
        t: zU
      } = (0, IU.I)();
      return (0, qU.jsxs)("span", {
        className: DU()("SecretSantaScarf", `Scarf-${XU}`),
        children: [(0, qU.jsx)("span", {
          className: "SecretSantaScarfSwatch"
        }), zU(`secretSantaHud:scarfName_${XU}`)]
      })
    }

    function cX(UU, XU) {
      const [zU, cU = ""] = UU.split(mU);
      return (0, qU.jsxs)(qU.Fragment, {
        children: [zU, XU, cU]
      })
    }
    var yX = zU(4608);
    const QX = [226, 36, 52],
      AX = [246, 250, 255],
      FX = [168, 214, 255],
      oX = [24, 24, 28],
      DX = [44, 44, 50],
      EX = [112, 112, 122],
      YX = [255, 112, 36];

    function NX(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return [{
        timeFraction: 0,
        minColor: [UU[0], UU[1], UU[2], zU],
        maxColor: [XU[0], XU[1], XU[2], zU]
      }, {
        timeFraction: 1,
        minColor: [UU[0], UU[1], UU[2], 0],
        maxColor: [XU[0], XU[1], XU[2], 0]
      }]
    }

    function IX(UU, XU, zU) {
      let [cU, yU, QU] = UU;
      return {
        pos1: [cU - XU, yU, QU - XU],
        pos2: [cU + XU, yU + zU, QU + XU]
      }
    }

    function pX(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const zU = .45 * XU;
      return [{
        texture: "square_particle",
        ...IX(UU, zU, 1.4 * XU),
        dir1: [-.7, .5, -.7],
        dir2: [.7, 1.4, .7],
        minEmitPower: .5,
        maxEmitPower: 1,
        minLifeTime: .8,
        maxLifeTime: 1.4,
        minSize: .18 * XU,
        maxSize: .34 * XU,
        manualEmitCount: Math.round(26 * XU),
        gravity: [0, .6, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }, {
          timeFraction: 1,
          factor: .2,
          factor2: .3
        }],
        colorGradients: NX(DX, EX, .95),
        hideDist: 48,
        blendMode: yX.f.Standard
      }, {
        texture: "square_particle",
        ...IX(UU, .6 * zU, 1.2 * XU),
        dir1: [-1.4, 1.2, -1.4],
        dir2: [1.4, 2.6, 1.4],
        minEmitPower: 1.2,
        maxEmitPower: 2,
        minLifeTime: .6,
        maxLifeTime: 1,
        minSize: .1,
        maxSize: .18,
        manualEmitCount: Math.round(14 * XU),
        gravity: [0, -14, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: [{
          timeFraction: 0,
          minColor: [oX[0], oX[1], oX[2], 1],
          maxColor: [58, 52, 48, 1]
        }, {
          timeFraction: 1,
          minColor: [oX[0], oX[1], oX[2], 1],
          maxColor: [58, 52, 48, 1]
        }],
        hideDist: 48,
        blendMode: yX.f.Standard
      }, {
        texture: "glint",
        ...IX(UU, .7 * zU, 1.2 * XU),
        dir1: [-.8, .8, -.8],
        dir2: [.8, 2, .8],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .4,
        maxLifeTime: .8,
        minSize: .06,
        maxSize: .14,
        manualEmitCount: Math.round(6 * XU),
        gravity: [0, 1, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: NX(YX, QX),
        hideDist: 48,
        blendMode: yX.f.Add
      }]
    }

    function aX(UU, XU) {
      return {
        texture: "glint",
        ...IX(UU, .9, 1.9),
        dir1: [-.5, .6, -.5],
        dir2: [.5, 1.6, .5],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .8,
        maxLifeTime: 1.5,
        minSize: .05,
        maxSize: .13,
        manualEmitCount: XU,
        gravity: [0, .4, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: NX(AX, FX),
        hideDist: 16,
        blendMode: yX.f.Add
      }
    }
    var tX = zU(97);
    const gX = "harp_pling",
      kX = "cloth1",
      GX = [
        [0, .55, 1],
        [110, .55, 1.5]
      ],
      BX = [
        [0, .5, 1],
        [85, .5, 1.26],
        [170, .5, 1.5],
        [255, .45, 2]
      ],
      ZX = [
        [0, .4, .75],
        [170, .4, .63]
      ],
      RX = "keysJingle",
      PX = [
        [],
        [
          [.45, 1]
        ],
        [
          [.7, 1.25],
          [.4, 1.6]
        ]
      ];

    function WX(UU, XU) {
      return 1 === XU ? UU : {
        ...UU,
        manualEmitCount: Math.max(1, Math.round(UU.manualEmitCount * XU))
      }
    }
    class dX {
      constructor(UU, XU) {
        this.api = UU, this.localPlayerId = XU, this.layers = [{
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }, {
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }], this.timers = new Set, this.camera = [0, 0, 0], this.look = [0, 0, 1], this.hint = null, this.spotted = !1, this.lastFrameAt = 0, this.particleShare = (0, tX.isMobile)() ? .6 : 1, UU.preloadSounds([gX, RX, kX])
      }
      reset() {
        this.hint = null, this.spotted = !1, this.setBells(0)
      }
      receiveHint(UU) {
        const XU = this.hint;
        this.hint = UU, "none" !== UU.santaHintState && (XU && XU.santaHintContract === UU.santaHintContract ? null === XU.santaHintScarf && null !== UU.santaHintScarf && this.play(BX) : this.play(GX))
      }
      receiveStatus(UU) {
        UU.santaStatusKnown && !this.spotted && this.play(ZX), this.spotted = UU.santaStatusKnown
      }
      wrapStarted() {
        this.api.playSound(this.localPlayerId, kX, .5, 1.2)
      }
      setBells(UU) {
        const XU = PX[UU];
        this.layers.forEach(((UU, zU) => {
          var cU;
          const [yU, QU] = null !== (cU = XU[zU]) && void 0 !== cU ? cU : [0, UU.rate];
          var AU;
          (0 === yU && UU.target > 0 && UU.sound && this.stopLater(UU), UU.target = yU, yU > 0 && QU !== UU.rate) && (UU.rate = QU, null === (AU = UU.sound) || void 0 === AU || AU.rate(QU))
        }))
      }
      receiveFx(UU) {
        let {
          santaFxKind: XU,
          santaFxAt: zU
        } = UU;
        if (this.api.particlesEnabled())
          if ("caughtSanta" === XU) zU && this.burst(pX(zU));
          else if ("toTunnel" === XU) this.later(300, (() => {
          const [UU, XU, zU] = this.ahead();
          this.burst([aX([UU, XU - 1, zU], 36)])
        }));
        else {
          const [UU, XU, zU] = this.ahead();
          this.burst(pX([UU, XU - .6, zU], .8))
        }
      }
      frame(UU) {
        const {
          cameraPosition: XU,
          cameraDirection: zU
        } = UU;
        this.camera[0] = XU[0], this.camera[1] = XU[1], this.camera[2] = XU[2], this.look[0] = zU[0], this.look[1] = zU[1], this.look[2] = zU[2];
        const cU = performance.now(),
          yU = Math.min(.1, (cU - (this.lastFrameAt || cU)) / 1e3);
        this.lastFrameAt = cU;
        for (const AU of this.layers) {
          if (0 === AU.volume && 0 === AU.target && !AU.sound) continue;
          AU.target > 0 && !AU.sound && (AU.sound = this.api.playSound(this.localPlayerId, RX, 0, AU.rate, void 0, !0));
          const UU = (AU.target > AU.volume ? 3 : 1.2) * yU;
          var QU;
          if (AU.volume = AU.target > AU.volume ? Math.min(AU.target, AU.volume + UU) : Math.max(AU.target, AU.volume - UU), AU.volume <= 0 && 0 === AU.target) this.silence(AU);
          else null === (QU = AU.sound) || void 0 === QU || QU.setRelativeVolume(AU.volume)
        }
      }
      dispose() {
        for (const UU of this.timers) window.clearTimeout(UU);
        this.timers.clear();
        for (const UU of this.layers) UU.target = 0, this.silence(UU)
      }
      silence(UU) {
        var XU;
        null === (XU = UU.sound) || void 0 === XU || XU.stop(), UU.sound = null, UU.volume = 0
      }
      stopLater(UU) {
        const XU = UU.sound,
          zU = window.setTimeout((() => {
            this.timers.delete(zU), UU.sound === XU && 0 === UU.target && this.silence(UU)
          }), UU.volume / 1.2 * 1e3 + 150);
        this.timers.add(zU)
      }
      ahead() {
        const [UU, XU, zU] = this.camera, [cU, yU, QU] = this.look;
        return [UU + 1.8 * cU, XU + 1.8 * yU - .35, zU + 1.8 * QU]
      }
      later(UU, XU) {
        const zU = window.setTimeout((() => {
          this.timers.delete(zU), XU()
        }), UU);
        this.timers.add(zU)
      }
      play(UU) {
        for (const [XU, zU, cU] of UU) 0 === XU ? this.api.playSound(this.localPlayerId, gX, zU, cU) : this.later(XU, (() => {
          this.api.playSound(this.localPlayerId, gX, zU, cU)
        }))
      }
      burst(UU) {
        for (const XU of UU) this.api.playParticleEffect(WX(XU, this.particleShare))
      }
    }
    class LX {
      constructor(UU) {
        this.api = UU, this.wait = null
      }
      PY(UU) {
        const XU = performance.now();
        this.wait = {
          min: UU.santaFlyoverMin,
          max: UU.santaFlyoverMax,
          start: UU.santaFlyoverStart,
          until: XU + UU.santaFlyoverWaitMs,
          loadedAt: null,
          settledFrames: 0,
          lastFrameAt: XU
        }
      }
      frame(UU) {
        const XU = this.wait;
        if (!XU) return;
        const zU = performance.now(),
          cU = zU - XU.lastFrameAt;
        XU.lastFrameAt = zU, zU > XU.until ? this.wait = null : null !== XU.loadedAt ? (XU.settledFrames = cU <= 60 ? XU.settledFrames + 1 : 0, XU.settledFrames >= 6 && zU - XU.loadedAt >= 300 && (this.wait = null, this.api.sendCommand("santaFlyoverReady"))) : UU && this.isLoaded(XU, UU) && (XU.loadedAt = zU)
      }
      isLoaded(UU, XU) {
        let {
          min: zU,
          max: yU,
          start: QU
        } = UU;
        if (XU[0] < zU[0] || XU[0] > yU[0] || XU[2] < zU[2] || XU[2] > yU[2]) return !1;
        const AU = cU.f.aY,
          FU = UU => UU.map((UU => Math.floor(UU / AU))),
          oU = [FU(XU), FU(QU)],
          [DU, EU] = [FU(zU), FU(yU)];
        for (let cU = DU[0]; cU <= EU[0]; cU++)
          for (let UU = DU[1]; UU <= EU[1]; UU++)
            for (let XU = DU[2]; XU <= EU[2]; XU++) {
              if (oU.some((zU => {
                  let [yU, QU, AU] = zU;
                  return (cU - yU) ** 2 + (UU - QU) ** 2 + (XU - AU) ** 2 <= 4
                })) && !this.api.isBlockInLoadedChunk(cU * AU, UU * AU, XU * AU)) return !1
            }
        return !0
      }
    }
    var eX = zU(39988);
    const CX = [20, 9, 20],
      wX = [8, 12],
      qX = .3,
      OX = [.05, .13],
      SX = {
        kind: "smokePuff"
      },
      rX = [245, 250, 255],
      uX = {
        xY: 900,
        perS: 80
      },
      fX = {
        xY: 360,
        perS: 34
      };
    class iX {
      constructor(UU) {
        this.api = UU, this.tier = (0, tX.isMobile)() ? fX : uX, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
      }
      onAfterRender(UU) {
        const XU = performance.now(),
          zU = 0 === this.lastMs ? 0 : Math.min(XU - this.lastMs, 250) / 1e3;
        if (this.lastMs = XU, !this.api.particlesEnabled()) return void this.dispose();
        const cU = Math.hypot(UU[0] - this.last[0], UU[1] - this.last[1], UU[2] - this.last[2]) > 20;
        if (this.last[0] = UU[0], this.last[1] = UU[1], this.last[2] = UU[2], cU && this.dispose(), (cU || XU >= this.nextRoofCheckMs) && (this.nextRoofCheckMs = XU + 250, this.roofed = this.hasRoof(UU)), this.roofed) return void(this.budget = 0);
        const yU = this.at;
        let QU;
        yU[0] = UU[0], yU[1] = UU[1] + 7, yU[2] = UU[2], this.system ? (this.budget = Math.min(this.budget + this.tier.perS * zU, this.tier.perS / 4), QU = Math.floor(this.budget), this.budget -= QU) : (this.system = this.api.createParticles(this.opts(), {
          pos: yU,
          half: CX
        }), QU = Math.floor(this.tier.xY / 2)), QU > 0 && (this.system.moveTo(yU, CX), this.system.emit(QU))
      }
      dispose() {
        var UU;
        null === (UU = this.system) || void 0 === UU || UU.dispose(), this.system = null
      }
      hasRoof(UU) {
        let [XU, zU, cU] = UU;
        const yU = Math.floor(XU),
          QU = Math.floor(cU);
        let AU = 0;
        for (let FU = Math.floor(zU) + 1; FU <= Math.floor(zU) + 16; FU++)
          if (AU = this.api.isSolidToPlayerBlockId(this.api.getBlockId(yU, FU, QU)) ? AU + 1 : 0, AU >= 4) return !0;
        return !1
      }
      opts() {
        const [UU, XU, zU] = rX;
        return {
          texture: SX,
          xY: this.tier.xY,
          minLifeTime: wX[0] / eX.d,
          maxLifeTime: wX[1] / eX.d,
          minEmitPower: 1.1 * eX.d * .8,
          maxEmitPower: 1.1 * eX.d * 1.2,
          minSize: OX[0],
          maxSize: OX[1],
          emitRate: 0,
          gravity: [0, 0, 0],
          dir1: [-.3, -1, -.3],
          dir2: [qX, -1, qX],
          colorGradients: [{
            timeFraction: 0,
            minColor: [UU, XU, zU, 0]
          }, {
            timeFraction: .12,
            minColor: [UU, XU, zU, .9]
          }, {
            timeFraction: .85,
            minColor: [UU, XU, zU, .9]
          }, {
            timeFraction: 1,
            minColor: [UU, XU, zU, 0]
          }],
          blendMode: yX.f.Standard
        }
      }
    }
    var HX = zU(37281);
    class MX {
      constructor() {
        this.element = null, this.fade = null, this.fadeLookedAt = -1 / 0, this.armedUntil = 0, this.shownAt = null, this.drawn = -1, this.bind = UU => {
          this.element = UU, this.drawn = -1
        }
      }
      receiveFlyover(UU) {
        this.armedUntil = performance.now() + UU + 3e3
      }
      frame(UU) {
        const XU = performance.now(),
          zU = this.snowAlpha(XU);
        if (zU <= 0) return null !== this.shownAt && (this.armedUntil = 0), this.shownAt = null, void this.draw(0);
        if (null === this.shownAt) {
          if (zU < 1 || UU && XU >= this.armedUntil) return void this.draw(0);
          this.shownAt = XU
        }
        this.draw(Math.min(1, (XU - this.shownAt) / 300) * zU)
      }
      snowAlpha(UU) {
        var XU, zU, cU, yU;
        (null === (XU = this.fade) || void 0 === XU || !XU.isConnected) && UU - this.fadeLookedAt >= 250 && (this.fadeLookedAt = UU, this.fade = document.querySelector(`[${HX.e}]`));
        const QU = null === (zU = this.fade) || void 0 === zU ? void 0 : zU.style;
        if (!QU || "none" === QU.display) return 0;
        const AU = null !== (cU = null === (yU = QU.backgroundColor.match(/\d+/g)) || void 0 === yU ? void 0 : yU.slice(0, 3).map(Number)) && void 0 !== cU ? cU : [];
        return 3 === AU.length && AU.every((UU => UU >= 200)) && Number(QU.opacity) || 0
      }
      draw(UU) {
        const XU = Math.round(100 * UU) / 100;
        this.element && XU !== this.drawn && (this.drawn = XU, this.element.style.opacity = String(XU), this.element.style.display = XU > 0 ? "flex" : "none")
      }
    }
    const vX = (0, AU.memo)((function(UU) {
        let {
          controller: XU
        } = UU;
        const {
          t: zU
        } = (0, IU.I)();
        return (0, qU.jsx)("div", {
          ref: XU.bind,
          className: "SecretSantaSnowTitle",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, qU.jsxs)("div", {
            className: "SecretSantaSnowTitleCard",
            children: [(0, qU.jsxs)("div", {
              className: "SecretSantaSnowTitleName",
              children: [(0, qU.jsx)("span", {
                className: "SecretSantaSnowTitleIcon",
                children: "\ud83c\udf85"
              }), zU("secretSantaHud:titleName")]
            }), (0, qU.jsx)("div", {
              className: "SecretSantaSnowTitleLine",
              children: zU("secretSantaHud:titleLine")
            })]
          })
        })
      })),
      VX = "SecretSantaMode",
      sX = cU.f.cg * cU.f.playerEyeToHeightRatio;

    function nX(UU) {
      document.body.classList.toggle("SecretSantaPodium", UU)
    }
    const mX = function(UU, XU, zU, cU) {
      let {
        localPlayerId: yU
      } = cU;
      const QU = new CU((() => {
          var UU;
          null === (UU = aU) || void 0 === UU || UU.wrapStarted()
        })),
        oU = new MX,
        DU = [0, 0, 0];
      let EU = null;
      const YU = [0, 0, 0],
        NU = [0, 0, 0];
      let IU = null,
        pU = null,
        aU = null,
        tU = null,
        gU = null,
        kU = null;
      const GU = UU => {
          IU && null !== UU && UU !== yU && !kU && (kU = {
            target: UU,
            at: performance.now(),
            first: null
          })
        },
        BU = (UU, XU) => {
          kU = null, QU.pressGift(UU.at, XU) && (EU = UU.target)
        },
        ZU = (UU, XU) => {
          if (null === EU) return;
          if (!UU.readDrawnPosition(EU, YU)) return void(EU = null);
          NU[0] = XU[0], NU[1] = XU[1] + sX, NU[2] = XU[2];
          const zU = Math.hypot(YU[0] - XU[0], YU[1] - XU[1], YU[2] - XU[2]);
          QU.aimAtWrap(function(UU, XU, zU) {
            const cU = zU[0] - UU[0],
              yU = zU[2] - UU[2],
              QU = Math.hypot(XU[0], XU[2]);
            let AU = UU[1];
            const FU = QU > 0 ? (cU * XU[0] + yU * XU[2]) / QU : 0;
            FU > 0 && (AU += XU[1] / QU * FU), AU = Math.max(zU[1], Math.min(zU[1] + 1.8, AU));
            const oU = [cU, AU - UU[1], yU],
              DU = Math.hypot(oU[0], oU[1], oU[2]),
              EU = Math.hypot(XU[0], XU[1], XU[2]);
            if (0 === DU || 0 === EU) return 0;
            const YU = (oU[0] * XU[0] + oU[1] * XU[1] + oU[2] * XU[2]) / (DU * EU);
            return 180 * Math.acos(Math.max(-1, Math.min(1, YU))) / Math.PI
          }(NU, UU.getActionRay().direction, YU), zU) || (EU = null)
        },
        RU = (UU, XU, zU) => {
          const cU = [0, 0, 0];
          zU && UU.readDrawnPosition(XU.target, cU) ? XU.first ? BU(XU, function(UU, XU, zU, cU) {
            const yU = zU[0] - UU[0],
              QU = zU[1] - UU[1],
              AU = zU[2] - UU[2],
              FU = Math.hypot(yU, QU, AU);
            return 0 === FU || cU <= 0 ? {
              distance: FU,
              awaySpeed: 0
            } : {
              distance: FU,
              awaySpeed: (yU * (zU[0] - XU[0]) + QU * (zU[1] - XU[1]) + AU * (zU[2] - XU[2])) / FU / cU
            }
          }(zU, XU.first.pos, cU, (performance.now() - XU.first.at) / 1e3)) : XU.first = {
            pos: cU,
            at: performance.now()
          } : BU(XU, null)
        };
      return {
        onCreate: UU => {
          IU = UU, document.body.classList.add(VX), aU = new dX(UU, yU), tU = new iX(UU), gU = new LX(UU), pU = (0, FU.u)((0, AU.createElement)(AU.Fragment, null, (0, AU.createElement)(lU, {
            controller: QU
          }), (0, AU.createElement)(SU, {
            controller: QU
          }), (0, AU.createElement)(vX, {
            controller: oU
          })))
        },
        onClose: () => {
          var UU, XU, zU;
          document.body.classList.remove(VX), nX(!1), null === (UU = pU) || void 0 === UU || UU(), pU = null, QU.dispose(), null === (XU = aU) || void 0 === XU || XU.dispose(), aU = null, null === (zU = tU) || void 0 === zU || zU.dispose(), tU = null, gU = null, IU = null
        },
        onPlayerAltAction: (UU, XU, zU, cU, yU, QU) => {
          GU(QU)
        },
        onPlayerAttackEntity: (UU, XU) => {
          GU(XU)
        },
        onAfterRender: (UU, XU) => {
          var zU, cU, AU, FU;
          const EU = null !== (zU = IU) && void 0 !== zU && zU.readDrawnPosition(yU, DU) ? DU : null;
          kU && IU && RU(IU, kU, EU), IU && EU && ZU(IU, EU), QU.frame(XU.cameraHeading, EU), null === (cU = aU) || void 0 === cU || cU.frame(XU), null === (AU = tU) || void 0 === AU || AU.onAfterRender(XU.cameraPosition), null === (FU = gU) || void 0 === FU || FU.frame(EU), oU.frame(QU.getView().shown)
        },
        onReceivedMessageFromServer: (UU, XU) => {
          var zU;
          if ("secretSantaHint" === UU) QU.receiveHint(XU), null === (zU = aU) || void 0 === zU || zU.receiveHint(XU);
          else if ("secretSantaStatus" === UU) {
            var cU;
            QU.receiveStatus(XU), null === (cU = aU) || void 0 === cU || cU.receiveStatus(XU)
          } else if ("secretSantaWrap" === UU) {
            kU && BU(kU, null);
            const {
              santaWrapMs: UU,
              santaWrapDone: zU
            } = XU;
            QU.receiveWrap(UU, zU)
          } else if ("secretSantaMarket" === UU) {
            var yU;
            null === (yU = aU) || void 0 === yU || yU.reset(), QU.receiveMarket(XU)
          } else if ("secretSantaBells" === UU) {
            var AU;
            null === (AU = aU) || void 0 === AU || AU.setBells(XU.santaBellsLevel)
          } else if ("secretSantaFx" === UU) {
            var FU;
            const UU = XU;
            "toTunnel" === UU.santaFxKind && QU.snowBlink(), null === (FU = aU) || void 0 === FU || FU.receiveFx(UU)
          } else if ("secretSantaFlyover" === UU) {
            var DU;
            null === (DU = gU) || void 0 === DU || DU.PY(XU), oU.receiveFlyover(XU.santaFlyoverWaitMs)
          } else "secretSantaPodium" === UU && nX(XU.santaPodiumShown)
        }
      }
    }
  },
  39315: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU,
      g: () => yU
    });
    var cU = zU(344);
    const yU = (0, cU.Cb)([0, 0, -1]),
      QU = [{
        name: "S",
        bearing: (0, cU.Cb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, cU.Cb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: yU
      }, {
        name: "W",
        bearing: (0, cU.Cb)([1, 0, 0])
      }]
  },
  39311: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      i: () => QU
    });
    var cU = zU(39315);

    function yU(UU, XU, zU) {
      return [100 * (zU.mapMaxX - UU) / (zU.mapMaxX - zU.mapMinX), 100 * (XU - zU.mapMinZ) / (zU.mapMaxZ - zU.mapMinZ)]
    }

    function QU(UU, XU, zU, QU) {
      const [AU, FU] = yU(UU, XU, QU), oU = cU.g - zU;
      return {
        rotation: oU,
        transform: `rotate(${oU}rad) translate(-${AU}%, -${FU}%)`
      }
    }
  },
  39367: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      i: () => AU
    });
    var cU = zU(4619);
    const yU = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function QU(UU) {
      const XU = new cU.l(UU);
      return {
        radius: 45,
        squareness: 3,
        wobbles: yU.map((UU => {
          let {
            lobes: zU,
            amount: cU
          } = UU;
          return {
            lobes: zU[Math.floor(XU.next() * zU.length)],
            amount: cU[0] + XU.next() * (cU[1] - cU[0]),
            phase: 2 * XU.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function AU(UU) {
      let {
        radius: XU,
        squareness: zU,
        wobbles: cU,
        samples: yU
      } = UU;
      const QU = [];
      for (let AU = 0; AU < yU; AU++) {
        const UU = 2 * Math.PI * AU / yU,
          FU = Math.cos(UU),
          oU = Math.sin(UU),
          DU = XU * (Math.abs(FU) ** zU + Math.abs(oU) ** zU) ** (-1 / zU) * cU.reduce(((XU, zU) => {
            let {
              lobes: cU,
              amount: yU,
              phase: QU
            } = zU;
            return XU + yU * Math.sin(cU * UU + QU)
          }), 1);
        QU.push(`${(50+DU*FU).toFixed(2)} ${(50+DU*oU).toFixed(2)}`)
      }
      return `M${QU.join("L")}Z`
    }
  },
  39988: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU,
      f: () => QU
    });
    const cU = 1 / .6,
      yU = {
        kind: "smokePuff"
      };
    class QU {
      constructor(UU, XU, zU) {
        this.style = UU, this.xY = XU, this.half = zU, this.particles = null, this.lastFrame = -1
      }
      emit(UU, XU, zU) {
        let QU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return zU !== this.lastFrame && (this.lastFrame = zU, this.particles || (this.particles = UU.createParticles(function(UU, XU) {
          const [
            [zU, QU, AU],
            [FU, oU, DU]
          ] = UU.colours;
          return {
            texture: UU.soft ? yU : "square_particle",
            xY: XU,
            minLifeTime: UU.life[0] / cU,
            maxLifeTime: UU.life[1] / cU,
            minEmitPower: UU.power[0] * cU,
            maxEmitPower: UU.power[1] * cU,
            minSize: UU.size[0],
            maxSize: UU.size[1],
            emitRate: 0,
            gravity: [0, UU.lift * cU * cU, 0],
            dir1: [-UU.spread, 1, -UU.spread],
            dir2: [UU.spread, 1, UU.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [zU, QU, AU, UU.alpha],
              maxColor: [FU, oU, DU, UU.alpha]
            }, {
              timeFraction: 1,
              minColor: [zU, QU, AU, 0],
              maxColor: [FU, oU, DU, 0]
            }],
            blendMode: UU.blendMode
          }
        }(this.style, this.xY), {
          pos: XU,
          half: this.half
        })), this.particles.moveTo(XU, this.half), this.particles.emit(QU), !0)
      }
      dispose() {
        var UU;
        null === (UU = this.particles) || void 0 === UU || UU.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);