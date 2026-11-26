export const id = 28;
export const ids = [28];
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
  37651: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => XV,
      e: () => PV,
      f: () => AV,
      g: () => FV,
      i: () => TV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(3528),
      pV = xV(364),
      QV = xV(2693),
      nV = xV(32),
      wV = xV(2080),
      ZV = xV(40),
      vV = xV(2100),
      rV = xV(27),
      kV = xV(2109),
      bV = xV(1473),
      EV = xV(9428),
      BV = xV(2141),
      jV = xV(1220),
      qV = xV(1321);
    const tV = 7e3;

    function FV() {
      const {
        loadingOverlayVisible: VV,
        openInGameMenuName: eV,
        openEverythingMenuName: xV
      } = (0, rV.l)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return VV || null !== eV || null !== xV
    }

    function TV(VV, eV, xV) {
      const YV = (0, JV.useRef)(xV);
      YV.current = xV;
      const UV = (0, JV.useRef)({
        card: VV,
        ms: 0
      });
      (0, JV.useEffect)((() => {
        if (eV || null === VV) return;
        UV.current.card !== VV && (UV.current = {
          card: VV,
          ms: 0
        });
        const xV = UV.current,
          JV = performance.now(),
          yV = setTimeout((() => {
            YV.current()
          }), tV - xV.ms);
        return () => {
          clearTimeout(yV), xV.ms += performance.now() - JV
        }
      }), [eV, VV])
    }
    const PV = (0, JV.memo)((function() {
      const {
        isTouchScreen: VV
      } = (0, rV.l)(["isTouchScreen"]), eV = (0, bV.E)();
      (0, yV.e)();
      const xV = (0, QV.j)("showBasicMovementControls"),
        [YV, nV] = (0, JV.useState)("movement"),
        wV = "movement" === YV,
        vV = eV && !1 !== xV;
      (0, JV.useEffect)((() => {
        "padActions" !== YV || vV || nV("done")
      }), [YV, vV]);
      const kV = FV();
      return TV("done" === YV ? null : YV, kV, (() => {
        nV("movement" === YV && (0, bV.m)() ? "padActions" : "done")
      })), ZV.m.getItem(pV.Ib) > 2 ? (0, qV.jsx)(MV, {
        showingMovementControls: !1
      }) : (0, qV.jsxs)(qV.Fragment, {
        children: [VV && !eV || !wV || !1 === xV ? null : (0, qV.jsxs)("div", {
          className: UV()("ControlsTutorialDiv", {
            Covered: kV
          }),
          children: [(0, qV.jsx)(AV, {}), (0, qV.jsx)(XV, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, qV.jsx)(XV, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === YV && vV && (0, qV.jsx)(NV, {
          covered: kV
        }), (0, qV.jsx)(MV, {
          showingMovementControls: "done" !== YV
        })]
      })
    }));

    function AV() {
      const VV = (0, bV.E)();
      return (0, qV.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, qV.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), VV && (0, qV.jsx)(kV.d, {
          noaAction: "forward"
        }), !VV && (0, qV.jsxs)(qV.Fragment, {
          children: [(0, qV.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, qV.jsx)(kV.d, {
              noaAction: "forward"
            })
          }), (0, qV.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, qV.jsx)(kV.d, {
              noaAction: "left"
            }), (0, qV.jsx)(kV.d, {
              noaAction: "backward"
            }), (0, qV.jsx)(kV.d, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function NV(VV) {
      let {
        covered: eV
      } = VV;
      const {
        t: xV
      } = (0, jV.A)(), JV = (0, QV.j)("useInventory");
      return (0, qV.jsxs)("div", {
        className: UV()("ControlsTutorialDiv", {
          Covered: eV
        }),
        children: [(0, qV.jsx)(XV, {
          header: xV("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, qV.jsx)(XV, {
          header: xV("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== JV && (0, qV.jsx)(XV, {
          header: xV("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, qV.jsx)(XV, {
          header: xV("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function XV(VV) {
      let {
        header: eV,
        noaAction: xV
      } = VV;
      return (0, qV.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, qV.jsx)("div", {
          className: "KeyHeader",
          children: eV
        }), (0, qV.jsx)(kV.d, {
          noaAction: xV
        })]
      })
    }

    function MV(VV) {
      let {
        showingMovementControls: eV
      } = VV;
      const {
        isTouchScreen: xV
      } = (0, rV.l)(["isTouchScreen"]), YV = (0, bV.E)(), UV = (0, BV.e)("OpenShop"), [yV, pV] = (0, JV.useState)(!1), kV = `SeenShopControls|${(0,vV.e)("connectedGame",(VV=>VV.gameNameWithVariation))}`, jV = () => (!(0, bV.m)() || null !== (0, EV.c)("OpenShop")) && !ZV.m.getItem(kV) && wV.c.get("shopInfo") && !eV, tV = () => (pV(!0), ZV.m.setItem(kV, !0), (0, bV.m)() || nV.h.QZ("showShopTouchTutorial"), setTimeout((() => {
        pV(!1)
      }), 7e3));
      (0, JV.useEffect)((() => {
        let VV;
        const eV = nV.h.subscribe("showShopTutorial", (() => {
          jV() && (VV = tV())
        }));
        return () => {
          clearTimeout(VV), nV.h.unsubscribe(eV)
        }
      }), [eV]);
      const FV = (0, JV.useRef)();
      return (0, QV.g)("currencyAmounts", (VV => {
        if (jV()) {
          let xV = !1;
          const JV = wV.c.get("shopInfo");
          for (const YV in JV) {
            for (const UV in JV[YV].items) {
              var eV;
              const yV = JV[YV].items[UV];
              if (void 0 !== yV.currency && VV[yV.currency] && yV.cost <= VV[yV.currency].amount && (null === (eV = yV.hidden) || void 0 === eV || !eV)) {
                xV = !0;
                break
              }
            }
            if (xV) break
          }
          xV && (FV.current = tV())
        }
      })), (0, JV.useEffect)((() => () => {
        clearTimeout(FV.current)
      }), [eV]), !yV || YV && !UV ? null : (0, qV.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: xV && !YV ? null : (0, qV.jsx)(XV, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
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
  9428: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      e: () => nV,
      g: () => ZV,
      i: () => wV,
      m: () => QV,
      q: () => rV
    });
    var JV = xV(32),
      YV = xV(2147),
      UV = xV(1493),
      yV = xV(1473);
    const pV = VV => {
        var eV, xV;
        return (0, yV.m)() && null !== (eV = null === (xV = (0, UV.e)()) || void 0 === xV ? void 0 : xV.getGlyphForNoaAction(VV)) && void 0 !== eV ? eV : null
      },
      QV = "controllerGlyph:",
      nV = VV => {
        var eV, xV;
        return null !== (eV = null === (xV = (0, UV.e)()) || void 0 === xV ? void 0 : xV.getPadGlyphIconName(VV)) && void 0 !== eV ? eV : `${QV}xbox/${VV}`
      },
      wV = VV => VV.startsWith(QV),
      ZV = VV => {
        var eV, xV;
        return wV(VV) && null !== (eV = null === (xV = (0, UV.e)()) || void 0 === xV ? void 0 : xV.getPadGlyphIconUrl(VV)) && void 0 !== eV ? eV : null
      },
      vV = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", yV.e, YV.f, YV.d],
      rV = VV => {
        const eV = vV.map((eV => JV.h.subscribe(eV, VV)));
        return () => {
          for (const VV of eV) JV.h.unsubscribe(VV)
        }
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
  40824: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => me
    });
    var JV = xV(206);
    const YV = ["gingerbreadLane", "toyRow", "iceRink", "carousel", "greatTree", "cocoaCorner", "lanternWalk", "marketGate", "santasGrotto"],
      UV = {
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
    var yV = xV(62),
      pV = xV(37762),
      QV = xV(1146),
      nV = xV.n(QV),
      wV = xV(27),
      ZV = xV(1473),
      vV = xV(40),
      rV = xV(1220),
      kV = xV(37651),
      bV = xV(1542),
      EV = xV(32),
      BV = xV(39683),
      jV = xV(39678);
    const qV = 400,
      tV = 2 * Math.PI * 17;

    function FV(VV, eV, xV) {
      const {
        santaMarketMinX: JV,
        santaMarketMinZ: YV,
        santaMarketSize: UV
      } = VV;
      return (0, jV.c)(eV, xV, {
        mapMinX: JV,
        mapMaxX: JV + UV,
        mapMinZ: YV,
        mapMaxZ: YV + UV
      })
    }
    class TV {
      constructor() {
        this.state = "idle", this.ownRing = !1, this.faded = !1, this.lastPressAt = -1 / 0, this.predictedAt = 0, this.timedOutPressAt = null, this.cooldownUntil = 0, this.averageRoundTrip = null, this.recentRoundTrips = []
      }
      press(VV, eV, xV) {
        var JV, YV;
        this.forgetOldRoundTrips(VV);
        const UV = VV - this.lastPressAt;
        if (this.lastPressAt = VV, UV < this.quietMs() || this.awaitingTimedOut(VV) || "idle" !== this.state || xV || VV < this.cooldownUntil || null === eV) return 0;
        const yV = Math.max(0, eV.awaySpeed) * ((null !== (JV = this.averageRoundTrip) && void 0 !== JV ? JV : 300) / 1e3);
        return eV.distance + yV > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = VV, this.ownRing = !0, this.faded = !1, 500 + (null !== (YV = this.averageRoundTrip) && void 0 !== YV ? YV : 0))
      }
      turnedAway(VV, eV, xV) {
        if (!this.mayTurnAway(VV)) return !1;
        const JV = 4 * (this.averageRoundTrip + 150) / 1e3;
        return !(eV <= 40 + (JV >= xV ? 180 : 180 * Math.asin(JV / xV) / Math.PI) && xV <= 5 + Math.max(.5, JV)) && (this.faded = !0, !0)
      }
      mayTurnAway(VV) {
        return null !== this.averageRoundTrip && "idle" !== this.state && this.ownRing && !this.faded && VV - this.predictedAt <= 350
      }
      RZ(VV, eV, xV) {
        const JV = eV > 0 || !xV,
          YV = "predicted" === this.state;
        return xV && (this.cooldownUntil = VV + 1e3), JV && YV ? this.learnRoundTrip(VV, VV - this.predictedAt) : JV && this.awaitingTimedOut(VV) && (this.timedOutPressAt = null), eV > 0 ? (this.state = "confirmed", YV ? null : (this.ownRing = !1, this.faded = !1, {
          kind: "start",
          ms: eV
        })) : "idle" === this.state ? null : (this.state = "idle", this.faded && !xV ? null : {
          kind: "end",
          done: xV
        })
      }
      expired(VV) {
        var eV;
        return !("predicted" !== this.state || VV - this.predictedAt < 1200 + (null !== (eV = this.averageRoundTrip) && void 0 !== eV ? eV : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(VV, VV - this.predictedAt), !this.faded)
      }
      stop() {
        this.state = "idle", this.cooldownUntil = 0, this.timedOutPressAt = null
      }
      quietMs() {
        var VV;
        const eV = this.recentRoundTrips.reduce(((VV, eV) => {
          let {
            ms: xV
          } = eV;
          return Math.max(VV, xV)
        }), null !== (VV = this.averageRoundTrip) && void 0 !== VV ? VV : 0);
        return Math.max(300, eV > 0 ? 1.5 * eV + 300 : 1e3)
      }
      awaitingTimedOut(VV) {
        return null !== this.timedOutPressAt && VV - this.timedOutPressAt >= 3500 && (this.timedOutPressAt = null), null !== this.timedOutPressAt
      }
      forgetOldRoundTrips(VV) {
        for (; this.recentRoundTrips.length > 0 && VV - this.recentRoundTrips[0].at > 3e4;) this.recentRoundTrips.shift()
      }
      learnRoundTrip(VV, eV) {
        const xV = Math.min(2e3, Math.max(0, eV));
        this.averageRoundTrip = null === this.averageRoundTrip ? xV : this.averageRoundTrip + .3 * (xV - this.averageRoundTrip), this.recentRoundTrips.push({
          at: VV,
          ms: xV
        })
      }
    }
    const PV = "secretSantaHudChanged",
      AV = "SecretSantaHudShown",
      NV = "SecretSantaMatchOrFinish",
      XV = ["Wrapping", "Naughty", "Cancelled"],
      MV = {
        shown: !1,
        market: null,
        hint: null,
        status: null,
        endsAt: 0,
        naughtyEndsAt: 0,
        pulse: 0
      };
    class zV {
      constructor(VV) {
        this.onWrapStart = VV, this.view = MV, this.nextHintAt = 0, this.endTimer = null, this.finishEndTimer = null, this.map = null, this.arrow = null, this.countdown = null, this.countdownAnimation = null, this.ring = null, this.ringFill = null, this.ringAnimation = null, this.ringEndAnimation = null, this.flash = null, this.flashAnimation = null, this.wrap = new TV, this.drawnArrow = "", this.drawnInDistrict = !1, this.drawnInCircle = !1, this.bindMap = VV => {
          this.map = VV, this.drawnInDistrict = !1, this.drawnInCircle = !1
        }, this.bindArrow = VV => {
          this.arrow = VV, this.drawnArrow = ""
        }, this.bindCountdown = VV => {
          var eV;
          null === (eV = this.countdownAnimation) || void 0 === eV || eV.cancel(), this.countdownAnimation = null, this.countdown = VV, this.restartCountdown()
        }, this.bindRing = VV => {
          var eV;
          this.stopRing(), this.ring = VV, this.ringFill = null !== (eV = null === VV || void 0 === VV ? void 0 : VV.querySelector(".SecretSantaRingFill")) && void 0 !== eV ? eV : null;
          const xV = this.view.naughtyEndsAt - performance.now();
          VV && xV > 0 && this.runRing("Naughty", xV)
        }, this.bindFlash = VV => {
          var eV;
          null === (eV = this.flashAnimation) || void 0 === eV || eV.cancel(), this.flashAnimation = null, this.flash = VV
        }
      }
      getView() {
        return this.view
      }
      receiveMarket(VV) {
        this.QZ({
          ...this.view,
          market: VV
        })
      }
      receiveHint(VV) {
        const eV = this.view.hint,
          xV = GV(this.nextHintAt, performance.now() + VV.santaHintNextInMs),
          JV = xV > this.nextHintAt,
          YV = !eV || eV.santaHintContract !== VV.santaHintContract || eV.santaHintDistrict !== VV.santaHintDistrict || eV.santaHintCircleX !== VV.santaHintCircleX || eV.santaHintCircleZ !== VV.santaHintCircleZ;
        this.nextHintAt = xV;
        const UV = "hunting" === VV.santaHintState && (JV || YV) ? this.view.pulse + 1 : this.view.pulse;
        this.QZ({
          ...this.view,
          hint: VV,
          pulse: UV
        }), this.restartCountdown()
      }
      receiveStatus(VV) {
        var eV;
        const xV = performance.now(),
          JV = GV(this.view.endsAt, xV + VV.santaStatusMsLeft),
          YV = VV.santaStatusNaughtyMs > 0 ? GV(this.view.naughtyEndsAt, xV + VV.santaStatusNaughtyMs) : 0,
          UV = 0 !== YV && 0 === this.view.naughtyEndsAt;
        this.QZ({
          ...this.view,
          status: VV,
          endsAt: JV,
          naughtyEndsAt: YV,
          shown: VV.santaStatusMsLeft > 0
        }), this.scheduleEnd(JV - xV), UV ? this.runRing("Naughty", VV.santaStatusNaughtyMs) : 0 === YV && null !== (eV = this.ring) && void 0 !== eV && eV.classList.contains("Naughty") && this.stopRing()
      }
      pressGift(VV, eV) {
        if (!this.view.shown) return !1;
        const xV = this.wrap.press(VV, eV, this.view.naughtyEndsAt > VV);
        return xV > 0 && this.startWrapRing(Math.max(1, xV - (performance.now() - VV))), xV > 0
      }
      aimAtWrap(VV, eV) {
        const xV = performance.now();
        return this.wrap.turnedAway(xV, VV, eV) && this.endWrapRing(!1), this.wrap.mayTurnAway(xV)
      }
      receiveWrap(VV, eV) {
        const xV = this.wrap.RZ(performance.now(), VV, eV);
        "start" === (null === xV || void 0 === xV ? void 0 : xV.kind) ? this.startWrapRing(xV.ms): "end" === (null === xV || void 0 === xV ? void 0 : xV.kind) && (xV.done && this.ring && !this.ring.classList.contains("Wrapping") && this.runRing("Wrapping", 1), this.endWrapRing(xV.done))
      }
      snowBlink() {
        var VV, eV, xV;
        null === (VV = this.flashAnimation) || void 0 === VV || VV.cancel();
        this.flashAnimation = null !== (eV = null === (xV = this.flash) || void 0 === xV ? void 0 : xV.animate([{
          opacity: 1
        }, {
          opacity: 1,
          offset: .24,
          easing: "ease-in"
        }, {
          opacity: 0
        }], {
          duration: 500
        })) && void 0 !== eV ? eV : null
      }
      frame(VV, eV) {
        this.wrap.expired(performance.now()) && this.endWrapRing(!1);
        const {
          market: xV,
          hint: JV
        } = this.view;
        if (!this.view.shown || !xV || !eV || !this.arrow || !this.map) return;
        const [YV, UV] = FV(xV, eV[0], eV[2]), yV = Math.min(100, Math.max(0, YV)), pV = Math.min(100, Math.max(0, UV)), QV = Math.min(95, Math.max(5, yV)), nV = Math.min(95, Math.max(5, pV)), wV = Math.round(180 * function(VV) {
          return VV - BV.f
        }(VV) / Math.PI), ZV = `${QV.toFixed(1)}% ${nV.toFixed(1)}% ${wV}`;
        ZV !== this.drawnArrow && (this.drawnArrow = ZV, this.arrow.style.left = `${QV.toFixed(1)}%`, this.arrow.style.top = `${nV.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${wV}deg)`);
        const vV = "hunting" === (null === JV || void 0 === JV ? void 0 : JV.santaHintState) ? JV : null,
          rV = null !== vV && function(VV, eV) {
            const xV = VV => Math.min(2, Math.max(0, Math.floor(VV / (100 / 3))));
            return 3 * xV(eV) + xV(VV)
          }(yV, pV) === vV.santaHintDistrict;
        rV !== this.drawnInDistrict && (this.drawnInDistrict = rV, this.map.toggleAttribute("data-in-district", rV));
        const kV = null !== vV && function(VV, eV) {
          let [xV, , JV] = eV;
          const {
            santaHintCircleX: YV,
            santaHintCircleZ: UV,
            santaHintCircleR: yV
          } = VV;
          return null !== YV && null !== UV && yV > 0 && Math.hypot(xV - YV, JV - UV) <= yV
        }(vV, eV);
        kV !== this.drawnInCircle && (this.drawnInCircle = kV, this.map.toggleAttribute("data-in-circle", kV))
      }
      dispose() {
        var VV, eV;
        null !== this.endTimer && (window.clearTimeout(this.endTimer), this.endTimer = null), this.clearFinishEnd(), document.body.classList.remove(NV), null === (VV = this.countdownAnimation) || void 0 === VV || VV.cancel(), this.countdownAnimation = null, this.stopRing(), null === (eV = this.flashAnimation) || void 0 === eV || eV.cancel(), this.flashAnimation = null, this.map = this.arrow = this.ring = this.flash = null, this.countdown = this.ringFill = null, document.body.classList.remove(AV), this.view = MV
      }
      QZ(VV) {
        this.view = VV, document.body.classList.toggle(AV, VV.shown), VV.shown && (this.clearFinishEnd(), document.body.classList.add(NV)), EV.h.QZ(PV, VV, !0)
      }
      scheduleEnd(VV) {
        null !== this.endTimer && window.clearTimeout(this.endTimer), this.endTimer = window.setTimeout((() => {
          this.endTimer = null, this.wrap.stop(), this.QZ({
            ...this.view,
            shown: !1,
            naughtyEndsAt: 0
          }), this.stopRing(), this.clearFinishEnd(), this.finishEndTimer = window.setTimeout((() => {
            this.finishEndTimer = null, document.body.classList.remove(NV)
          }), 13e3)
        }), VV)
      }
      clearFinishEnd() {
        null !== this.finishEndTimer && (window.clearTimeout(this.finishEndTimer), this.finishEndTimer = null)
      }
      restartCountdown() {
        var VV, eV;
        null === (VV = this.countdownAnimation) || void 0 === VV || VV.cancel(), this.countdownAnimation = null;
        const xV = this.nextHintAt - performance.now();
        if (!this.countdown || "hunting" !== (null === (eV = this.view.hint) || void 0 === eV ? void 0 : eV.santaHintState) || xV <= 0) return;
        const JV = qV * (1 - Math.min(1, xV / 1e4));
        this.countdownAnimation = this.countdown.animate([{
          strokeDashoffset: JV
        }, {
          strokeDashoffset: qV
        }], {
          duration: xV,
          fill: "forwards"
        })
      }
      runRing(VV, eV) {
        if (this.stopRing(), !this.ring || !this.ringFill) return;
        this.ring.classList.add(VV);
        const [xV, JV] = "Wrapping" === VV ? [tV, 0] : [0, tV], YV = [{
          strokeDashoffset: xV
        }, {
          strokeDashoffset: JV
        }], UV = this.ringFill.animate(YV, {
          duration: eV,
          fill: "forwards"
        });
        this.ringAnimation = UV, "Naughty" === VV && (UV.onfinish = () => {
          this.ringAnimation === UV && this.stopRing()
        })
      }
      startWrapRing(VV) {
        this.runRing("Wrapping", VV), this.onWrapStart()
      }
      endWrapRing(VV) {
        const eV = this.ring;
        if (null === eV || void 0 === eV || !eV.classList.contains("Wrapping")) return;
        var xV, JV;
        VV ? null === (xV = this.ringAnimation) || void 0 === xV || xV.finish() : null === (JV = this.ringAnimation) || void 0 === JV || JV.pause();
        eV.classList.toggle("Cancelled", !VV);
        const YV = eV.animate([{
          opacity: 1,
          scale: 1
        }, {
          opacity: 0,
          scale: VV ? 1.6 : .8
        }], {
          duration: VV ? 350 : 300,
          easing: VV ? "ease-out" : "ease-in",
          fill: "forwards"
        });
        this.ringEndAnimation = YV, YV.onfinish = () => {
          this.ringEndAnimation === YV && this.stopRing()
        }
      }
      stopRing() {
        var VV, eV, xV;
        null === (VV = this.ringAnimation) || void 0 === VV || VV.cancel(), null === (eV = this.ringEndAnimation) || void 0 === eV || eV.cancel(), this.ringAnimation = this.ringEndAnimation = null, null === (xV = this.ring) || void 0 === xV || xV.classList.remove(...XV)
      }
    }

    function GV(VV, eV) {
      return 0 !== VV && Math.abs(eV - VV) < 1e3 ? Math.min(VV, eV) : eV
    }
    var WV = xV(1321);
    const RV = "secretSantaControlsShown",
      gV = (0, yV.memo)((function(VV) {
        let {
          controller: eV
        } = VV;
        const {
          isTouchScreen: xV
        } = (0, wV.l)(["isTouchScreen"]), JV = (0, ZV.E)(), {
          t: YV
        } = (0, rV.A)(), UV = (0, bV.j)(PV, eV.getView()).shown, pV = (0, kV.g)(), [QV] = (0, yV.useState)((() => {
          var VV;
          return null !== (VV = vV.m.getItem(RV)) && void 0 !== VV ? VV : 0
        })), [EV, BV] = (0, yV.useState)(QV >= 2), [jV, qV] = (0, yV.useState)(!1), tV = (0, yV.useRef)(!1), FV = !EV && jV && UV && (!xV || JV);
        return (0, yV.useEffect)((() => {
          if (!UV || jV || EV) return;
          const VV = setTimeout((() => {
            qV(!0)
          }), 12500);
          return () => {
            clearTimeout(VV)
          }
        }), [UV, jV, EV]), (0, yV.useEffect)((() => {
          !FV || pV || tV.current || (tV.current = !0, vV.m.setItem(RV, QV + 1))
        }), [FV, pV, QV]), (0, kV.i)(FV ? "secretSanta" : null, pV, (() => {
          BV(!0)
        })), FV ? (0, WV.jsxs)("div", {
          className: nV()("ControlsTutorialDiv", {
            Covered: pV
          }),
          children: [(0, WV.jsx)(kV.f, {}), (0, WV.jsx)(kV.b, {
            header: "Jump",
            noaAction: "jump"
          }), (0, WV.jsx)(kV.b, {
            header: YV("secretSantaHud:givePresent"),
            noaAction: "alt-fire"
          }), JV && (0, WV.jsx)(kV.b, {
            header: YV("controller:tutorialPause"),
            noaAction: "OpenSettings"
          })]
        }) : null
      }));
    var DV = xV(37756),
      iV = xV(3848),
      CV = xV(37852),
      aV = xV(40659);
    const oV = (0, yV.memo)((function(VV) {
      let {
        controller: eV,
        naughtyEndsAt: xV
      } = VV;
      return (0, WV.jsxs)("div", {
        ref: eV.bindRing,
        className: "SecretSantaRing",
        children: [(0, WV.jsxs)("svg", {
          viewBox: "0 0 40 40",
          "aria-hidden": "true",
          children: [(0, WV.jsx)("circle", {
            className: "SecretSantaRingTrack",
            cx: "20",
            cy: "20",
            r: 17
          }), (0, WV.jsx)("circle", {
            className: "SecretSantaRingFill",
            cx: "20",
            cy: "20",
            r: 17,
            style: {
              strokeDasharray: tV,
              strokeDashoffset: tV
            }
          })]
        }), xV > 0 && (0, WV.jsx)(cV, {
          endsAt: xV
        })]
      })
    }));

    function cV(VV) {
      let {
        endsAt: eV
      } = VV;
      const {
        t: xV
      } = (0, rV.A)(), JV = (0, aV.l)(eV);
      return JV <= 0 ? null : (0, WV.jsxs)("div", {
        className: "SecretSantaNaughty SmallTextBold",
        children: [(0, WV.jsx)("span", {
          className: "SecretSantaNaughtyTitle",
          children: xV("secretSantaHud:naughty")
        }), (0, WV.jsx)("span", {
          children: xV("secretSantaHud:naughtyWait", {
            seconds: JV
          })
        })]
      })
    }

    function hV(VV) {
      return VV && UV[VV] || "\u2744\ufe0f"
    }
    var lV = xV(39725);
    const LV = (0, yV.memo)((function(VV) {
      var eV, xV;
      let {
        controller: JV,
        market: UV,
        hint: yV,
        pulse: pV
      } = VV;
      const {
        t: QV
      } = (0, rV.A)(), wV = null !== (eV = null === yV || void 0 === yV ? void 0 : yV.santaHintState) && void 0 !== eV ? eV : "none", ZV = "hunting" === wV && yV ? yV.santaHintDistrict : -1, vV = null !== (xV = null === UV || void 0 === UV ? void 0 : UV.santaMarketDistricts) && void 0 !== xV ? xV : YV;
      return (0, WV.jsxs)("div", {
        ref: JV.bindMap,
        className: nV()("SecretSantaMinimap", `State-${wV}`),
        children: [(0, WV.jsx)("div", {
          className: "SecretSantaMinimapGrid",
          children: vV.map(((VV, eV) => (0, WV.jsxs)("div", {
            className: nV()("SecretSantaDistrict", `District-${VV}`, {
              Target: eV === ZV
            }),
            children: [(0, WV.jsx)("span", {
              className: "SecretSantaDistrictIcon",
              children: hV(VV)
            }), (0, WV.jsx)("span", {
              className: "SecretSantaDistrictLabel",
              children: QV(`secretSantaHud:district_${VV}`)
            })]
          }, VV)))
        }), ZV >= 0 && (0, WV.jsx)("div", {
          className: "SecretSantaDistrictPulse",
          style: {
            left: ZV % 3 * (100 / 3) + "%",
            top: Math.floor(ZV / 3) * (100 / 3) + "%"
          }
        }, pV), UV && yV && "hunting" === wV && (0, WV.jsx)("div", {
          className: "SecretSantaCircleClip",
          children: (0, WV.jsx)(fV, {
            market: UV,
            hint: yV
          })
        }), (0, WV.jsx)("div", {
          className: "SecretSantaMinimapArrowClip",
          children: (0, WV.jsx)("div", {
            ref: JV.bindArrow,
            className: "SecretSantaMinimapArrow",
            children: (0, WV.jsxs)("svg", {
              viewBox: "0 2 20 20",
              children: [(0, WV.jsx)("path", {
                className: "SecretSantaMinimapArrowBody",
                d: "M10 1.5 14.2 6.4H5.8Z"
              }), (0, WV.jsx)("circle", {
                className: "SecretSantaMinimapArrowBody",
                cx: "10",
                cy: "12",
                r: "5"
              }), (0, WV.jsx)("circle", {
                className: "SecretSantaMinimapArrowDot",
                cx: "10",
                cy: "12",
                r: "1.8"
              })]
            })
          })
        }), (0, WV.jsx)("svg", {
          className: "SecretSantaCountdown",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          "aria-hidden": "true",
          children: (0, WV.jsx)("path", {
            ref: JV.bindCountdown,
            d: "M50 0H100V100H0V0Z",
            style: {
              strokeDasharray: qV,
              strokeDashoffset: qV
            }
          })
        }), "lost" === wV && (0, WV.jsxs)("div", {
          className: "SecretSantaLost",
          children: [(0, WV.jsx)("span", {
            className: "SecretSantaLostIcon",
            children: "\u2744\ufe0f"
          }), (0, WV.jsx)("span", {
            className: "SmallTextBold",
            children: QV("secretSantaHud:lost")
          })]
        })]
      })
    }));

    function fV(VV) {
      let {
        market: eV,
        hint: xV
      } = VV;
      const {
        santaHintCircleX: JV,
        santaHintCircleZ: YV,
        santaHintCircleR: UV,
        santaHintContract: pV
      } = xV, QV = (0, yV.useMemo)((() => (0, lV.d)({
        ...(0, lV.b)(`${pV}:${JV}:${YV}`),
        radius: 50,
        squareness: 2
      })), [pV, JV, YV]);
      if (null === JV || null === YV || UV <= 0) return null;
      const [nV, wV] = FV(eV, JV, YV), ZV = 200 * UV / eV.santaMarketSize;
      return (0, WV.jsx)("div", {
        className: "SecretSantaCircle",
        style: {
          left: `${nV}%`,
          top: `${wV}%`,
          width: `${ZV}%`,
          height: `${ZV}%`
        },
        children: (0, WV.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, WV.jsx)("path", {
            className: "SecretSantaCircleShadow",
            d: QV
          }), (0, WV.jsx)("path", {
            className: "SecretSantaCircleDashes",
            d: QV
          })]
        })
      })
    }
    const mV = "\x01";

    function KV(VV) {
      let {
        controller: eV
      } = VV;
      const xV = (0, bV.j)(PV, eV.getView());
      return (0, WV.jsxs)(WV.Fragment, {
        children: [(0, WV.jsx)("div", {
          ref: eV.bindFlash,
          className: "SecretSantaFlash",
          "aria-hidden": "true"
        }), (0, WV.jsx)(oV, {
          controller: eV,
          naughtyEndsAt: xV.naughtyEndsAt
        }), xV.shown && (0, WV.jsxs)(WV.Fragment, {
          children: [(0, WV.jsx)(dV, {
            status: xV.status,
            endsAt: xV.endsAt
          }), (0, WV.jsx)(HV, {
            controller: eV,
            market: xV.market,
            hint: xV.hint,
            pulse: xV.pulse
          }), (0, WV.jsx)(DV.e, {
            children: (0, WV.jsx)(ee, {
              market: xV.market,
              hint: xV.hint
            })
          })]
        })]
      })
    }

    function HV(VV) {
      let {
        controller: eV,
        market: xV,
        hint: JV,
        pulse: YV
      } = VV;
      const [UV, pV] = (0, yV.useState)(null);
      return (0, iV.m)(UV, uV), (0, WV.jsx)("div", {
        ref: pV,
        className: "SecretSantaMapPanel",
        children: (0, WV.jsx)(LV, {
          controller: eV,
          market: xV,
          hint: JV,
          pulse: YV
        })
      })
    }

    function uV(VV) {
      const eV = () => {
        const eV = VV.getBoundingClientRect();
        let xV = 0;
        for (const VV of IV()) VV.left < eV.right && VV.right > eV.left && (xV = Math.max(xV, VV.bottom));
        const JV = (0, iV.f)(eV.left, eV.right, xV);
        sV(VV, "--ss-map-top", xV + 6), sV(VV, "--ss-map-bottom", null === JV ? null : (0, iV.c)(VV) - JV + 6)
      };
      eV();
      const xV = SV(eV);
      return {
        layout: eV,
        clear: () => {
          xV(), VV.style.removeProperty("--ss-map-top"), VV.style.removeProperty("--ss-map-bottom")
        }
      }
    }

    function sV(VV, eV, xV) {
      const JV = null === xV ? "" : `${Math.ceil(xV)}px`;
      VV.style.getPropertyValue(eV) !== JV && VV.style.setProperty(eV, JV)
    }

    function SV(VV) {
      const eV = document.querySelector(`.${CV.h}`),
        xV = new ResizeObserver(VV);
      for (const UV of [document.querySelector(`.${CV.f}`), eV]) UV && xV.observe(UV);
      const JV = new MutationObserver(VV),
        YV = null === eV || void 0 === eV ? void 0 : eV.querySelector(".TopRightElementsRight");
      return YV && JV.observe(YV, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), () => {
        xV.disconnect(), JV.disconnect()
      }
    }

    function IV() {
      const VV = `.${CV.h}`,
        eV = document.querySelectorAll(`.${CV.f}, ${VV} .TopRightIcon:not(.TopRightTray *), ${VV} .CondensedSocialBarInner`);
      return Array.from(eV, (VV => VV.getBoundingClientRect())).filter((VV => VV.width > 0 && VV.height > 0))
    }
    const dV = (0, yV.memo)((function(VV) {
      let {
        status: eV,
        endsAt: xV
      } = VV;
      const {
        t: JV
      } = (0, rV.A)(), [YV, UV] = (0, yV.useState)(null);
      return function(VV) {
        (0, yV.useLayoutEffect)((() => {
          if (!VV) return;
          const eV = () => {
            VV.style.removeProperty("top");
            const eV = IV(),
              xV = Array.from(VV.children, (VV => VV.getBoundingClientRect()));
            let JV = 0;
            for (let VV = 0; VV < eV.length; VV++) {
              let VV = JV;
              for (const YV of xV)
                for (const xV of eV) {
                  YV.left < xV.right + CV.d && YV.right > xV.left - CV.d && YV.top + JV < xV.bottom + 4 && YV.bottom + JV > xV.top && (VV = Math.max(VV, Math.ceil(xV.bottom + 4 - YV.top)))
                }
              if (VV === JV) break;
              JV = VV
            }
            JV > 0 && (VV.style.top = `${VV.getBoundingClientRect().top+JV}px`)
          };
          eV();
          const xV = new ResizeObserver(eV);
          xV.observe(VV);
          const JV = SV(eV),
            YV = new MutationObserver((VV => {
              VV.some((VV => {
                const eV = VV.target instanceof Element ? VV.target : VV.target.parentElement;
                return !(null !== eV && void 0 !== eV && eV.closest(".SecretSantaClock"))
              })) && eV()
            }));
          return YV.observe(VV, {
            childList: !0,
            subtree: !0,
            characterData: !0
          }), window.addEventListener("resize", eV), () => {
            xV.disconnect(), JV(), YV.disconnect(), window.removeEventListener("resize", eV)
          }
        }), [VV])
      }(YV), (0, WV.jsxs)("div", {
        ref: UV,
        className: "SecretSantaTop",
        children: [(0, WV.jsxs)("div", {
          className: "SecretSantaTopBar",
          children: [(0, WV.jsx)(OV, {
            endsAt: xV
          }), eV && (0, WV.jsxs)("span", {
            className: "SecretSantaScore",
            children: [(0, WV.jsxs)("span", {
              className: "SecretSantaPoints",
              children: ["\u2b50 ", eV.santaStatusPoints]
            }, eV.santaStatusPoints), (0, WV.jsx)("span", {
              className: "SecretSantaRank",
              children: JV("secretSantaHud:rank", {
                rank: eV.santaStatusRank,
                players: eV.santaStatusPlayers
              })
            })]
          })]
        }), eV && (0, WV.jsx)(Ve, {
          status: eV
        })]
      })
    }));

    function OV(VV) {
      let {
        endsAt: eV
      } = VV;
      const xV = (0, aV.l)(eV);
      return 0 === eV ? (0, WV.jsx)("span", {
        className: "SecretSantaClock"
      }) : (0, WV.jsxs)("span", {
        className: nV()("SecretSantaClock", {
          Urgent: xV <= 30
        }),
        children: [(0, WV.jsx)("span", {
          "aria-hidden": "true",
          children: "\u23f1"
        }), (0, aV.e)(xV)]
      })
    }
    const Ve = (0, yV.memo)((function(VV) {
        let {
          status: eV
        } = VV;
        const {
          t: xV
        } = (0, rV.A)(), JV = Math.min(2, Math.max(0, eV.santaStatusHunters)), YV = eV.santaStatusScarf, UV = eV.santaStatusKnown ? (0, WV.jsxs)("span", {
          className: "SecretSantaSpotted",
          children: [(0, WV.jsx)("span", {
            "aria-hidden": "true",
            children: "\ud83d\udc41"
          }), " ", Je(xV("secretSantaHud:spottedScarf", {
            scarf: mV
          }), (0, WV.jsx)(xe, {
            scarf: YV
          }))]
        }) : (0, WV.jsx)("span", {
          children: Je(xV("secretSantaHud:youWear", {
            scarf: mV
          }), (0, WV.jsx)(xe, {
            scarf: YV
          }))
        });
        return (0, WV.jsxs)("div", {
          className: "SecretSantaYouTab",
          children: [JV > 0 && (0, WV.jsxs)("span", {
            className: "SecretSantaHunters",
            children: [(0, WV.jsx)("span", {
              "aria-hidden": "true",
              children: "\ud83c\udf85"
            }), " ", xV(1 === JV ? "secretSantaHud:hunters1" : "secretSantaHud:hunters2")]
          }), UV]
        }, JV)
      })),
      ee = (0, yV.memo)((function(VV) {
        var eV;
        let {
          market: xV,
          hint: JV
        } = VV;
        const {
          t: YV
        } = (0, rV.A)(), UV = null !== (eV = null === JV || void 0 === JV ? void 0 : JV.santaHintState) && void 0 !== eV ? eV : "none";
        let yV, pV = UV;
        if (JV && "none" !== UV)
          if ("lost" === UV) yV = (0, WV.jsxs)(WV.Fragment, {
            children: [(0, WV.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2744\ufe0f"
            }), " ", YV("secretSantaHud:lostLine")]
          });
          else if (null !== JV.santaHintScarf) pV = `scarf-${JV.santaHintScarf}`, yV = Je(YV("secretSantaHud:lookingFor", {
          scarf: mV
        }), (0, WV.jsx)(xe, {
          scarf: JV.santaHintScarf
        }));
        else {
          const VV = null === xV || void 0 === xV ? void 0 : xV.santaMarketDistricts[JV.santaHintDistrict];
          pV = `district-${null!==VV&&void 0!==VV?VV:"?"}`, yV = Je(YV("secretSantaHud:findIn", {
            district: mV
          }), (0, WV.jsxs)("span", {
            className: nV()("SecretSantaDistrictName", void 0 !== VV && `District-${VV}`),
            children: [(0, WV.jsxs)("span", {
              "aria-hidden": "true",
              children: [hV(VV), " "]
            }), void 0 !== VV ? YV(`secretSantaHud:district_${VV}`) : "?"]
          }))
        } else yV = YV("secretSantaHud:finding");
        return (0, WV.jsx)("div", {
          className: nV()("SecretSantaTarget", `State-${UV}`),
          children: yV
        }, pV)
      }));

    function xe(VV) {
      let {
        scarf: eV
      } = VV;
      const {
        t: xV
      } = (0, rV.A)();
      return (0, WV.jsxs)("span", {
        className: nV()("SecretSantaScarf", `Scarf-${eV}`),
        children: [(0, WV.jsx)("span", {
          className: "SecretSantaScarfSwatch"
        }), xV(`secretSantaHud:scarfName_${eV}`)]
      })
    }

    function Je(VV, eV) {
      const [xV, JV = ""] = VV.split(mV);
      return (0, WV.jsxs)(WV.Fragment, {
        children: [xV, eV, JV]
      })
    }
    var Ye = xV(4642);
    const Ue = [226, 36, 52],
      ye = [246, 250, 255],
      pe = [168, 214, 255],
      Qe = [24, 24, 28],
      ne = [44, 44, 50],
      we = [112, 112, 122],
      Ze = [255, 112, 36];

    function ve(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return [{
        timeFraction: 0,
        minColor: [VV[0], VV[1], VV[2], xV],
        maxColor: [eV[0], eV[1], eV[2], xV]
      }, {
        timeFraction: 1,
        minColor: [VV[0], VV[1], VV[2], 0],
        maxColor: [eV[0], eV[1], eV[2], 0]
      }]
    }

    function re(VV, eV, xV) {
      let [JV, YV, UV] = VV;
      return {
        pos1: [JV - eV, YV, UV - eV],
        pos2: [JV + eV, YV + xV, UV + eV]
      }
    }

    function ke(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const xV = .45 * eV;
      return [{
        texture: "square_particle",
        ...re(VV, xV, 1.4 * eV),
        dir1: [-.7, .5, -.7],
        dir2: [.7, 1.4, .7],
        minEmitPower: .5,
        maxEmitPower: 1,
        minLifeTime: .8,
        maxLifeTime: 1.4,
        minSize: .18 * eV,
        maxSize: .34 * eV,
        manualEmitCount: Math.round(26 * eV),
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
        colorGradients: ve(ne, we, .95),
        hideDist: 48,
        blendMode: Ye.g.Standard
      }, {
        texture: "square_particle",
        ...re(VV, .6 * xV, 1.2 * eV),
        dir1: [-1.4, 1.2, -1.4],
        dir2: [1.4, 2.6, 1.4],
        minEmitPower: 1.2,
        maxEmitPower: 2,
        minLifeTime: .6,
        maxLifeTime: 1,
        minSize: .1,
        maxSize: .18,
        manualEmitCount: Math.round(14 * eV),
        gravity: [0, -14, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: [{
          timeFraction: 0,
          minColor: [Qe[0], Qe[1], Qe[2], 1],
          maxColor: [58, 52, 48, 1]
        }, {
          timeFraction: 1,
          minColor: [Qe[0], Qe[1], Qe[2], 1],
          maxColor: [58, 52, 48, 1]
        }],
        hideDist: 48,
        blendMode: Ye.g.Standard
      }, {
        texture: "glint",
        ...re(VV, .7 * xV, 1.2 * eV),
        dir1: [-.8, .8, -.8],
        dir2: [.8, 2, .8],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .4,
        maxLifeTime: .8,
        minSize: .06,
        maxSize: .14,
        manualEmitCount: Math.round(6 * eV),
        gravity: [0, 1, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: ve(Ze, Ue),
        hideDist: 48,
        blendMode: Ye.g.Add
      }]
    }

    function be(VV, eV) {
      return {
        texture: "glint",
        ...re(VV, .9, 1.9),
        dir1: [-.5, .6, -.5],
        dir2: [.5, 1.6, .5],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .8,
        maxLifeTime: 1.5,
        minSize: .05,
        maxSize: .13,
        manualEmitCount: eV,
        gravity: [0, .4, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: ve(ye, pe),
        hideDist: 16,
        blendMode: Ye.g.Add
      }
    }
    var Ee = xV(99);
    const Be = "harp_pling",
      je = "cloth1",
      qe = [
        [0, .55, 1],
        [110, .55, 1.5]
      ],
      te = [
        [0, .5, 1],
        [85, .5, 1.26],
        [170, .5, 1.5],
        [255, .45, 2]
      ],
      Fe = [
        [0, .4, .75],
        [170, .4, .63]
      ],
      Te = "keysJingle",
      Pe = [
        [],
        [
          [.45, 1]
        ],
        [
          [.7, 1.25],
          [.4, 1.6]
        ]
      ];

    function Ae(VV, eV) {
      return 1 === eV ? VV : {
        ...VV,
        manualEmitCount: Math.max(1, Math.round(VV.manualEmitCount * eV))
      }
    }
    class Ne {
      constructor(VV, eV) {
        this.api = VV, this.localPlayerId = eV, this.layers = [{
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }, {
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }], this.timers = new Set, this.camera = [0, 0, 0], this.look = [0, 0, 1], this.hint = null, this.spotted = !1, this.lastFrameAt = 0, this.particleShare = (0, Ee.isMobile)() ? .6 : 1, VV.preloadSounds([Be, Te, je])
      }
      reset() {
        this.hint = null, this.spotted = !1, this.setBells(0)
      }
      receiveHint(VV) {
        const eV = this.hint;
        this.hint = VV, "none" !== VV.santaHintState && (eV && eV.santaHintContract === VV.santaHintContract ? null === eV.santaHintScarf && null !== VV.santaHintScarf && this.play(te) : this.play(qe))
      }
      receiveStatus(VV) {
        VV.santaStatusKnown && !this.spotted && this.play(Fe), this.spotted = VV.santaStatusKnown
      }
      wrapStarted() {
        this.api.playSound(this.localPlayerId, je, .5, 1.2)
      }
      setBells(VV) {
        const eV = Pe[VV];
        this.layers.forEach(((VV, xV) => {
          var JV;
          const [YV, UV] = null !== (JV = eV[xV]) && void 0 !== JV ? JV : [0, VV.rate];
          var yV;
          (0 === YV && VV.target > 0 && VV.sound && this.stopLater(VV), VV.target = YV, YV > 0 && UV !== VV.rate) && (VV.rate = UV, null === (yV = VV.sound) || void 0 === yV || yV.rate(UV))
        }))
      }
      receiveFx(VV) {
        let {
          santaFxKind: eV,
          santaFxAt: xV
        } = VV;
        if (this.api.particlesEnabled())
          if ("caughtSanta" === eV) xV && this.burst(ke(xV));
          else if ("toTunnel" === eV) this.later(300, (() => {
          const [VV, eV, xV] = this.ahead();
          this.burst([be([VV, eV - 1, xV], 36)])
        }));
        else {
          const [VV, eV, xV] = this.ahead();
          this.burst(ke([VV, eV - .6, xV], .8))
        }
      }
      frame(VV) {
        const {
          cameraPosition: eV,
          cameraDirection: xV
        } = VV;
        this.camera[0] = eV[0], this.camera[1] = eV[1], this.camera[2] = eV[2], this.look[0] = xV[0], this.look[1] = xV[1], this.look[2] = xV[2];
        const JV = performance.now(),
          YV = Math.min(.1, (JV - (this.lastFrameAt || JV)) / 1e3);
        this.lastFrameAt = JV;
        for (const yV of this.layers) {
          if (0 === yV.volume && 0 === yV.target && !yV.sound) continue;
          yV.target > 0 && !yV.sound && (yV.sound = this.api.playSound(this.localPlayerId, Te, 0, yV.rate, void 0, !0));
          const VV = (yV.target > yV.volume ? 3 : 1.2) * YV;
          var UV;
          if (yV.volume = yV.target > yV.volume ? Math.min(yV.target, yV.volume + VV) : Math.max(yV.target, yV.volume - VV), yV.volume <= 0 && 0 === yV.target) this.silence(yV);
          else null === (UV = yV.sound) || void 0 === UV || UV.setRelativeVolume(yV.volume)
        }
      }
      dispose() {
        for (const VV of this.timers) window.clearTimeout(VV);
        this.timers.clear();
        for (const VV of this.layers) VV.target = 0, this.silence(VV)
      }
      silence(VV) {
        var eV;
        null === (eV = VV.sound) || void 0 === eV || eV.stop(), VV.sound = null, VV.volume = 0
      }
      stopLater(VV) {
        const eV = VV.sound,
          xV = window.setTimeout((() => {
            this.timers.delete(xV), VV.sound === eV && 0 === VV.target && this.silence(VV)
          }), VV.volume / 1.2 * 1e3 + 150);
        this.timers.add(xV)
      }
      ahead() {
        const [VV, eV, xV] = this.camera, [JV, YV, UV] = this.look;
        return [VV + 1.8 * JV, eV + 1.8 * YV - .35, xV + 1.8 * UV]
      }
      later(VV, eV) {
        const xV = window.setTimeout((() => {
          this.timers.delete(xV), eV()
        }), VV);
        this.timers.add(xV)
      }
      play(VV) {
        for (const [eV, xV, JV] of VV) 0 === eV ? this.api.playSound(this.localPlayerId, Be, xV, JV) : this.later(eV, (() => {
          this.api.playSound(this.localPlayerId, Be, xV, JV)
        }))
      }
      burst(VV) {
        for (const eV of VV) this.api.playParticleEffect(Ae(eV, this.particleShare))
      }
    }
    class Xe {
      constructor(VV) {
        this.api = VV, this.wait = null
      }
      RZ(VV) {
        const eV = performance.now();
        this.wait = {
          min: VV.santaFlyoverMin,
          max: VV.santaFlyoverMax,
          start: VV.santaFlyoverStart,
          until: eV + VV.santaFlyoverWaitMs,
          loadedAt: null,
          settledFrames: 0,
          lastFrameAt: eV
        }
      }
      frame(VV) {
        const eV = this.wait;
        if (!eV) return;
        const xV = performance.now(),
          JV = xV - eV.lastFrameAt;
        eV.lastFrameAt = xV, xV > eV.until ? this.wait = null : null !== eV.loadedAt ? (eV.settledFrames = JV <= 60 ? eV.settledFrames + 1 : 0, eV.settledFrames >= 6 && xV - eV.loadedAt >= 300 && (this.wait = null, this.api.sendCommand("santaFlyoverReady"))) : VV && this.isLoaded(eV, VV) && (eV.loadedAt = xV)
      }
      isLoaded(VV, eV) {
        let {
          min: xV,
          max: YV,
          start: UV
        } = VV;
        if (eV[0] < xV[0] || eV[0] > YV[0] || eV[2] < xV[2] || eV[2] > YV[2]) return !1;
        const yV = JV.f.PZ,
          pV = VV => VV.map((VV => Math.floor(VV / yV))),
          QV = [pV(eV), pV(UV)],
          [nV, wV] = [pV(xV), pV(YV)];
        for (let JV = nV[0]; JV <= wV[0]; JV++)
          for (let VV = nV[1]; VV <= wV[1]; VV++)
            for (let eV = nV[2]; eV <= wV[2]; eV++) {
              if (QV.some((xV => {
                  let [YV, UV, yV] = xV;
                  return (JV - YV) ** 2 + (VV - UV) ** 2 + (eV - yV) ** 2 <= 4
                })) && !this.api.isBlockInLoadedChunk(JV * yV, VV * yV, eV * yV)) return !1
            }
        return !0
      }
    }
    var Me = xV(40370);
    const ze = [20, 9, 20],
      Ge = [8, 12],
      We = .3,
      Re = [.05, .13],
      ge = {
        kind: "smokePuff"
      },
      De = [245, 250, 255],
      ie = {
        Jv: 900,
        perS: 80
      },
      Ce = {
        Jv: 360,
        perS: 34
      };
    class ae {
      constructor(VV) {
        this.api = VV, this.tier = (0, Ee.isMobile)() ? Ce : ie, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
      }
      onAfterRender(VV) {
        const eV = performance.now(),
          xV = 0 === this.lastMs ? 0 : Math.min(eV - this.lastMs, 250) / 1e3;
        if (this.lastMs = eV, !this.api.particlesEnabled()) return void this.dispose();
        const JV = Math.hypot(VV[0] - this.last[0], VV[1] - this.last[1], VV[2] - this.last[2]) > 20;
        if (this.last[0] = VV[0], this.last[1] = VV[1], this.last[2] = VV[2], JV && this.dispose(), (JV || eV >= this.nextRoofCheckMs) && (this.nextRoofCheckMs = eV + 250, this.roofed = this.hasRoof(VV)), this.roofed) return void(this.budget = 0);
        const YV = this.at;
        let UV;
        YV[0] = VV[0], YV[1] = VV[1] + 7, YV[2] = VV[2], this.system ? (this.budget = Math.min(this.budget + this.tier.perS * xV, this.tier.perS / 4), UV = Math.floor(this.budget), this.budget -= UV) : (this.system = this.api.createParticles(this.opts(), {
          pos: YV,
          half: ze
        }), UV = Math.floor(this.tier.Jv / 2)), UV > 0 && (this.system.moveTo(YV, ze), this.system.emit(UV))
      }
      dispose() {
        var VV;
        null === (VV = this.system) || void 0 === VV || VV.dispose(), this.system = null
      }
      hasRoof(VV) {
        let [eV, xV, JV] = VV;
        const YV = Math.floor(eV),
          UV = Math.floor(JV);
        let yV = 0;
        for (let pV = Math.floor(xV) + 1; pV <= Math.floor(xV) + 16; pV++)
          if (yV = this.api.isSolidToPlayerBlockId(this.api.getBlockId(YV, pV, UV)) ? yV + 1 : 0, yV >= 4) return !0;
        return !1
      }
      opts() {
        const [VV, eV, xV] = De;
        return {
          texture: ge,
          Jv: this.tier.Jv,
          minLifeTime: Ge[0] / Me.c,
          maxLifeTime: Ge[1] / Me.c,
          minEmitPower: 1.1 * Me.c * .8,
          maxEmitPower: 1.1 * Me.c * 1.2,
          minSize: Re[0],
          maxSize: Re[1],
          emitRate: 0,
          gravity: [0, 0, 0],
          dir1: [-.3, -1, -.3],
          dir2: [We, -1, We],
          colorGradients: [{
            timeFraction: 0,
            minColor: [VV, eV, xV, 0]
          }, {
            timeFraction: .12,
            minColor: [VV, eV, xV, .9]
          }, {
            timeFraction: .85,
            minColor: [VV, eV, xV, .9]
          }, {
            timeFraction: 1,
            minColor: [VV, eV, xV, 0]
          }],
          blendMode: Ye.g.Standard
        }
      }
    }
    var oe = xV(37720);
    class ce {
      constructor() {
        this.element = null, this.fade = null, this.fadeLookedAt = -1 / 0, this.armedUntil = 0, this.shownAt = null, this.drawn = -1, this.bind = VV => {
          this.element = VV, this.drawn = -1
        }
      }
      receiveFlyover(VV) {
        this.armedUntil = performance.now() + VV + 3e3
      }
      frame(VV) {
        const eV = performance.now(),
          xV = this.snowAlpha(eV);
        if (xV <= 0) return null !== this.shownAt && (this.armedUntil = 0), this.shownAt = null, void this.draw(0);
        if (null === this.shownAt) {
          if (xV < 1 || VV && eV >= this.armedUntil) return void this.draw(0);
          this.shownAt = eV
        }
        this.draw(Math.min(1, (eV - this.shownAt) / 300) * xV)
      }
      snowAlpha(VV) {
        var eV, xV, JV, YV;
        (null === (eV = this.fade) || void 0 === eV || !eV.isConnected) && VV - this.fadeLookedAt >= 250 && (this.fadeLookedAt = VV, this.fade = document.querySelector(`[${oe.b}]`));
        const UV = null === (xV = this.fade) || void 0 === xV ? void 0 : xV.style;
        if (!UV || "none" === UV.display) return 0;
        const yV = null !== (JV = null === (YV = UV.backgroundColor.match(/\d+/g)) || void 0 === YV ? void 0 : YV.slice(0, 3).map(Number)) && void 0 !== JV ? JV : [];
        return 3 === yV.length && yV.every((VV => VV >= 200)) && Number(UV.opacity) || 0
      }
      draw(VV) {
        const eV = Math.round(100 * VV) / 100;
        this.element && eV !== this.drawn && (this.drawn = eV, this.element.style.opacity = String(eV), this.element.style.display = eV > 0 ? "flex" : "none")
      }
    }
    const he = (0, yV.memo)((function(VV) {
        let {
          controller: eV
        } = VV;
        const {
          t: xV
        } = (0, rV.A)();
        return (0, WV.jsx)("div", {
          ref: eV.bind,
          className: "SecretSantaSnowTitle",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, WV.jsxs)("div", {
            className: "SecretSantaSnowTitleCard",
            children: [(0, WV.jsxs)("div", {
              className: "SecretSantaSnowTitleName",
              children: [(0, WV.jsx)("span", {
                className: "SecretSantaSnowTitleIcon",
                children: "\ud83c\udf85"
              }), xV("secretSantaHud:titleName")]
            }), (0, WV.jsx)("div", {
              className: "SecretSantaSnowTitleLine",
              children: xV("secretSantaHud:titleLine")
            })]
          })
        })
      })),
      le = "SecretSantaMode",
      Le = JV.f.nB * JV.f.playerEyeToHeightRatio;

    function fe(VV) {
      document.body.classList.toggle("SecretSantaPodium", VV)
    }
    const me = function(VV, eV, xV, JV) {
      let {
        localPlayerId: YV
      } = JV;
      const UV = new zV((() => {
          var VV;
          null === (VV = bV) || void 0 === VV || VV.wrapStarted()
        })),
        QV = new ce,
        nV = [0, 0, 0];
      let wV = null;
      const ZV = [0, 0, 0],
        vV = [0, 0, 0];
      let rV = null,
        kV = null,
        bV = null,
        EV = null,
        BV = null,
        jV = null;
      const qV = VV => {
          rV && null !== VV && VV !== YV && !jV && (jV = {
            target: VV,
            at: performance.now(),
            first: null
          })
        },
        tV = (VV, eV) => {
          jV = null, UV.pressGift(VV.at, eV) && (wV = VV.target)
        },
        FV = (VV, eV) => {
          if (null === wV) return;
          if (!VV.readDrawnPosition(wV, ZV)) return void(wV = null);
          vV[0] = eV[0], vV[1] = eV[1] + Le, vV[2] = eV[2];
          const xV = Math.hypot(ZV[0] - eV[0], ZV[1] - eV[1], ZV[2] - eV[2]);
          UV.aimAtWrap(function(VV, eV, xV) {
            const JV = xV[0] - VV[0],
              YV = xV[2] - VV[2],
              UV = Math.hypot(eV[0], eV[2]);
            let yV = VV[1];
            const pV = UV > 0 ? (JV * eV[0] + YV * eV[2]) / UV : 0;
            pV > 0 && (yV += eV[1] / UV * pV), yV = Math.max(xV[1], Math.min(xV[1] + 1.8, yV));
            const QV = [JV, yV - VV[1], YV],
              nV = Math.hypot(QV[0], QV[1], QV[2]),
              wV = Math.hypot(eV[0], eV[1], eV[2]);
            if (0 === nV || 0 === wV) return 0;
            const ZV = (QV[0] * eV[0] + QV[1] * eV[1] + QV[2] * eV[2]) / (nV * wV);
            return 180 * Math.acos(Math.max(-1, Math.min(1, ZV))) / Math.PI
          }(vV, VV.getActionRay().direction, ZV), xV) || (wV = null)
        },
        TV = (VV, eV, xV) => {
          const JV = [0, 0, 0];
          xV && VV.readDrawnPosition(eV.target, JV) ? eV.first ? tV(eV, function(VV, eV, xV, JV) {
            const YV = xV[0] - VV[0],
              UV = xV[1] - VV[1],
              yV = xV[2] - VV[2],
              pV = Math.hypot(YV, UV, yV);
            return 0 === pV || JV <= 0 ? {
              distance: pV,
              awaySpeed: 0
            } : {
              distance: pV,
              awaySpeed: (YV * (xV[0] - eV[0]) + UV * (xV[1] - eV[1]) + yV * (xV[2] - eV[2])) / pV / JV
            }
          }(xV, eV.first.pos, JV, (performance.now() - eV.first.at) / 1e3)) : eV.first = {
            pos: JV,
            at: performance.now()
          } : tV(eV, null)
        };
      return {
        onCreate: VV => {
          rV = VV, document.body.classList.add(le), bV = new Ne(VV, YV), EV = new ae(VV), BV = new Xe(VV), kV = (0, pV.z)((0, yV.createElement)(yV.Fragment, null, (0, yV.createElement)(KV, {
            controller: UV
          }), (0, yV.createElement)(gV, {
            controller: UV
          }), (0, yV.createElement)(he, {
            controller: QV
          })))
        },
        onClose: () => {
          var VV, eV, xV;
          document.body.classList.remove(le), fe(!1), null === (VV = kV) || void 0 === VV || VV(), kV = null, UV.dispose(), null === (eV = bV) || void 0 === eV || eV.dispose(), bV = null, null === (xV = EV) || void 0 === xV || xV.dispose(), EV = null, BV = null, rV = null
        },
        onPlayerAltAction: (VV, eV, xV, JV, YV, UV) => {
          qV(UV)
        },
        onPlayerAttackEntity: (VV, eV) => {
          qV(eV)
        },
        onAfterRender: (VV, eV) => {
          var xV, JV, yV, pV;
          const wV = null !== (xV = rV) && void 0 !== xV && xV.readDrawnPosition(YV, nV) ? nV : null;
          jV && rV && TV(rV, jV, wV), rV && wV && FV(rV, wV), UV.frame(eV.cameraHeading, wV), null === (JV = bV) || void 0 === JV || JV.frame(eV), null === (yV = EV) || void 0 === yV || yV.onAfterRender(eV.cameraPosition), null === (pV = BV) || void 0 === pV || pV.frame(wV), QV.frame(UV.getView().shown)
        },
        onReceivedMessageFromServer: (VV, eV) => {
          var xV;
          if ("secretSantaHint" === VV) UV.receiveHint(eV), null === (xV = bV) || void 0 === xV || xV.receiveHint(eV);
          else if ("secretSantaStatus" === VV) {
            var JV;
            UV.receiveStatus(eV), null === (JV = bV) || void 0 === JV || JV.receiveStatus(eV)
          } else if ("secretSantaWrap" === VV) {
            jV && tV(jV, null);
            const {
              santaWrapMs: VV,
              santaWrapDone: xV
            } = eV;
            UV.receiveWrap(VV, xV)
          } else if ("secretSantaMarket" === VV) {
            var YV;
            null === (YV = bV) || void 0 === YV || YV.reset(), UV.receiveMarket(eV)
          } else if ("secretSantaBells" === VV) {
            var yV;
            null === (yV = bV) || void 0 === yV || yV.setBells(eV.santaBellsLevel)
          } else if ("secretSantaFx" === VV) {
            var pV;
            const VV = eV;
            "toTunnel" === VV.santaFxKind && UV.snowBlink(), null === (pV = bV) || void 0 === pV || pV.receiveFx(VV)
          } else if ("secretSantaFlyover" === VV) {
            var nV;
            null === (nV = BV) || void 0 === nV || nV.RZ(eV), QV.receiveFlyover(eV.santaFlyoverWaitMs)
          } else "secretSantaPodium" === VV && fe(eV.santaPodiumShown)
        }
      }
    }
  },
  39683: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      f: () => YV
    });
    var JV = xV(375);
    const YV = (0, JV.Cb)([0, 0, -1]),
      UV = [{
        name: "S",
        bearing: (0, JV.Cb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, JV.Cb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: YV
      }, {
        name: "W",
        bearing: (0, JV.Cb)([1, 0, 0])
      }]
  },
  39678: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      g: () => UV
    });
    var JV = xV(39683);

    function YV(VV, eV, xV) {
      return [100 * (xV.mapMaxX - VV) / (xV.mapMaxX - xV.mapMinX), 100 * (eV - xV.mapMinZ) / (xV.mapMaxZ - xV.mapMinZ)]
    }

    function UV(VV, eV, xV, UV) {
      const [yV, pV] = YV(VV, eV, UV), QV = JV.f - xV;
      return {
        rotation: QV,
        transform: `rotate(${QV}rad) translate(-${yV}%, -${pV}%)`
      }
    }
  },
  39725: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      d: () => yV
    });
    var JV = xV(4648);
    const YV = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function UV(VV) {
      const eV = new JV.l(VV);
      return {
        radius: 45,
        squareness: 3,
        wobbles: YV.map((VV => {
          let {
            lobes: xV,
            amount: JV
          } = VV;
          return {
            lobes: xV[Math.floor(eV.next() * xV.length)],
            amount: JV[0] + eV.next() * (JV[1] - JV[0]),
            phase: 2 * eV.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function yV(VV) {
      let {
        radius: eV,
        squareness: xV,
        wobbles: JV,
        samples: YV
      } = VV;
      const UV = [];
      for (let yV = 0; yV < YV; yV++) {
        const VV = 2 * Math.PI * yV / YV,
          pV = Math.cos(VV),
          QV = Math.sin(VV),
          nV = eV * (Math.abs(pV) ** xV + Math.abs(QV) ** xV) ** (-1 / xV) * JV.reduce(((eV, xV) => {
            let {
              lobes: JV,
              amount: YV,
              phase: UV
            } = xV;
            return eV + YV * Math.sin(JV * VV + UV)
          }), 1);
        UV.push(`${(50+nV*pV).toFixed(2)} ${(50+nV*QV).toFixed(2)}`)
      }
      return `M${UV.join("L")}Z`
    }
  },
  40370: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV,
      f: () => UV
    });
    const JV = 1 / .6,
      YV = {
        kind: "smokePuff"
      };
    class UV {
      constructor(VV, eV, xV) {
        this.style = VV, this.Jv = eV, this.half = xV, this.particles = null, this.lastFrame = -1
      }
      emit(VV, eV, xV) {
        let UV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return xV !== this.lastFrame && (this.lastFrame = xV, this.particles || (this.particles = VV.createParticles(function(VV, eV) {
          const [
            [xV, UV, yV],
            [pV, QV, nV]
          ] = VV.colours;
          return {
            texture: VV.soft ? YV : "square_particle",
            Jv: eV,
            minLifeTime: VV.life[0] / JV,
            maxLifeTime: VV.life[1] / JV,
            minEmitPower: VV.power[0] * JV,
            maxEmitPower: VV.power[1] * JV,
            minSize: VV.size[0],
            maxSize: VV.size[1],
            emitRate: 0,
            gravity: [0, VV.lift * JV * JV, 0],
            dir1: [-VV.spread, 1, -VV.spread],
            dir2: [VV.spread, 1, VV.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [xV, UV, yV, VV.alpha],
              maxColor: [pV, QV, nV, VV.alpha]
            }, {
              timeFraction: 1,
              minColor: [xV, UV, yV, 0],
              maxColor: [pV, QV, nV, 0]
            }],
            blendMode: VV.blendMode
          }
        }(this.style, this.Jv), {
          pos: eV,
          half: this.half
        })), this.particles.moveTo(eV, this.half), this.particles.emit(UV), !0)
      }
      dispose() {
        var VV;
        null === (VV = this.particles) || void 0 === VV || VV.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);