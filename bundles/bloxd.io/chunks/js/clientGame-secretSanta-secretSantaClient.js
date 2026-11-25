export const id = 28;
export const ids = [28];
export const modules = {
  37538: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => HM,
      i: () => hM,
      m: () => mM,
      p: () => LM
    });
    var OM = iM(35017),
      SM = iM(37542),
      jM = iM(37544),
      aM = iM(9328),
      PM = iM(1516),
      nM = iM(44),
      QM = iM(65),
      zM = iM(1303);

    function LM() {
      var MM;
      return (0, PM.e)(SM.e, (0, SM.t)()), (0, zM.jsx)(zM.Fragment, {
        children: null === (MM = (0, SM.t)()) || void 0 === MM ? void 0 : MM.content
      })
    }

    function mM(MM) {
      var rM;
      let {
        show: iM
      } = MM;
      (0, PM.e)(SM.e, (0, SM.t)());
      const QM = null === (rM = (0, SM.t)()) || void 0 === rM ? void 0 : rM.menu;
      return (0, nM.useEffect)((() => {
        var MM;
        iM || (null === QM || void 0 === QM || null === (MM = QM.onClose) || void 0 === MM || MM.call(QM), (0, jM.q)())
      }), [iM, QM]), (0, nM.useEffect)((() => iM ? (0, aM.e)(jM.y, jM.f) : void 0), [iM]), (0, zM.jsx)(OM.e, {
        showing: iM,
        globallyUniqueKey: "clientGameMenu",
        children: null === QM || void 0 === QM ? void 0 : QM.content
      })
    }

    function HM(MM) {
      let {
        placement: rM = "bottom"
      } = MM;
      return (0, zM.jsx)("div", {
        id: `clientGameHud-${rM}`,
        style: {
          display: "contents"
        }
      })
    }

    function hM(MM) {
      let {
        children: rM,
        placement: iM = "bottom"
      } = MM;
      const [OM, SM] = (0, nM.useState)(null);
      return (0, nM.useEffect)((() => {
        SM(document.getElementById(`clientGameHud-${iM}`))
      }), [iM]), OM ? (0, QM.createPortal)(rM, OM) : null
    }
  },
  37454: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => tM,
      e: () => eM,
      f: () => bM,
      i: () => GM,
      k: () => CM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(3508),
      PM = iM(313),
      nM = iM(2640),
      QM = iM(22),
      zM = iM(2067),
      LM = iM(30),
      mM = iM(2084),
      HM = iM(19),
      hM = iM(2088),
      JM = iM(1464),
      dM = iM(9419),
      yM = iM(2111),
      lM = iM(1188),
      EM = iM(1303);
    const UM = 7e3;

    function GM() {
      const {
        loadingOverlayVisible: MM,
        openInGameMenuName: rM,
        openEverythingMenuName: iM
      } = (0, HM.m)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return MM || null !== rM || null !== iM
    }

    function CM(MM, rM, iM) {
      const SM = (0, OM.useRef)(iM);
      SM.current = iM;
      const jM = (0, OM.useRef)({
        card: MM,
        ms: 0
      });
      (0, OM.useEffect)((() => {
        if (rM || null === MM) return;
        jM.current.card !== MM && (jM.current = {
          card: MM,
          ms: 0
        });
        const iM = jM.current,
          OM = performance.now(),
          aM = setTimeout((() => {
            SM.current()
          }), UM - iM.ms);
        return () => {
          clearTimeout(aM), iM.ms += performance.now() - OM
        }
      }), [rM, MM])
    }
    const eM = (0, OM.memo)((function() {
      const {
        isTouchScreen: MM
      } = (0, HM.m)(["isTouchScreen"]), rM = (0, JM.y)();
      (0, aM.d)();
      const iM = (0, nM.f)("showBasicMovementControls"),
        [SM, QM] = (0, OM.useState)("movement"),
        zM = "movement" === SM,
        mM = rM && !1 !== iM;
      (0, OM.useEffect)((() => {
        "padActions" !== SM || mM || QM("done")
      }), [SM, mM]);
      const hM = GM();
      return CM("done" === SM ? null : SM, hM, (() => {
        QM("movement" === SM && (0, JM.l)() ? "padActions" : "done")
      })), LM.g.getItem(PM.Cb) > 2 ? (0, EM.jsx)(gM, {
        showingMovementControls: !1
      }) : (0, EM.jsxs)(EM.Fragment, {
        children: [MM && !rM || !zM || !1 === iM ? null : (0, EM.jsxs)("div", {
          className: jM()("ControlsTutorialDiv", {
            Covered: hM
          }),
          children: [(0, EM.jsx)(bM, {}), (0, EM.jsx)(tM, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, EM.jsx)(tM, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === SM && mM && (0, EM.jsx)(wM, {
          covered: hM
        }), (0, EM.jsx)(gM, {
          showingMovementControls: "done" !== SM
        })]
      })
    }));

    function bM() {
      const MM = (0, JM.y)();
      return (0, EM.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, EM.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), MM && (0, EM.jsx)(hM.d, {
          noaAction: "forward"
        }), !MM && (0, EM.jsxs)(EM.Fragment, {
          children: [(0, EM.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, EM.jsx)(hM.d, {
              noaAction: "forward"
            })
          }), (0, EM.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, EM.jsx)(hM.d, {
              noaAction: "left"
            }), (0, EM.jsx)(hM.d, {
              noaAction: "backward"
            }), (0, EM.jsx)(hM.d, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function wM(MM) {
      let {
        covered: rM
      } = MM;
      const {
        t: iM
      } = (0, lM.A)(), OM = (0, nM.f)("useInventory");
      return (0, EM.jsxs)("div", {
        className: jM()("ControlsTutorialDiv", {
          Covered: rM
        }),
        children: [(0, EM.jsx)(tM, {
          header: iM("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, EM.jsx)(tM, {
          header: iM("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== OM && (0, EM.jsx)(tM, {
          header: iM("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, EM.jsx)(tM, {
          header: iM("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function tM(MM) {
      let {
        header: rM,
        noaAction: iM
      } = MM;
      return (0, EM.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, EM.jsx)("div", {
          className: "KeyHeader",
          children: rM
        }), (0, EM.jsx)(hM.d, {
          noaAction: iM
        })]
      })
    }

    function gM(MM) {
      let {
        showingMovementControls: rM
      } = MM;
      const {
        isTouchScreen: iM
      } = (0, HM.m)(["isTouchScreen"]), SM = (0, JM.y)(), jM = (0, yM.c)("OpenShop"), [aM, PM] = (0, OM.useState)(!1), hM = `SeenShopControls|${(0,mM.f)("connectedGame",(MM=>MM.gameNameWithVariation))}`, lM = () => (!(0, JM.l)() || null !== (0, dM.e)("OpenShop")) && !LM.g.getItem(hM) && zM.d.get("shopInfo") && !rM, UM = () => (PM(!0), LM.g.setItem(hM, !0), (0, JM.l)() || QM.i.Tz("showShopTouchTutorial"), setTimeout((() => {
        PM(!1)
      }), 7e3));
      (0, OM.useEffect)((() => {
        let MM;
        const rM = QM.i.subscribe("showShopTutorial", (() => {
          lM() && (MM = UM())
        }));
        return () => {
          clearTimeout(MM), QM.i.unsubscribe(rM)
        }
      }), [rM]);
      const GM = (0, OM.useRef)();
      return (0, nM.c)("currencyAmounts", (MM => {
        if (lM()) {
          let iM = !1;
          const OM = zM.d.get("shopInfo");
          for (const SM in OM) {
            for (const jM in OM[SM].items) {
              var rM;
              const aM = OM[SM].items[jM];
              if (void 0 !== aM.currency && MM[aM.currency] && aM.cost <= MM[aM.currency].amount && (null === (rM = aM.hidden) || void 0 === rM || !rM)) {
                iM = !0;
                break
              }
            }
            if (iM) break
          }
          iM && (GM.current = UM())
        }
      })), (0, OM.useEffect)((() => () => {
        clearTimeout(GM.current)
      }), [rM]), !aM || SM && !jM ? null : (0, EM.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: iM && !SM ? null : (0, EM.jsx)(tM, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
  },
  35017: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(4919),
      SM = iM(4923);

    function jM(MM) {
      let {
        children: rM,
        showing: iM,
        globallyUniqueKey: jM,
        alwaysMountChildren: aM = !1,
        doGameplayStartStopOnShow: PM = !0,
        keepsMovement: nM = !1
      } = MM;
      return (0, SM.c)(!0, iM, jM, nM), (0, OM.c)(PM, iM), iM || aM ? rM : null
    }
  },
  37629: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      e: () => aM,
      g: () => PM,
      h: () => nM
    });
    var OM = iM(44),
      SM = iM(3508);
    const jM = 8,
      aM = "InGameHeaderContainer",
      PM = "TopRightElements";

    function nM(MM) {
      const [rM] = (0, SM.d)(), [iM, nM] = (0, OM.useState)(!1);
      return (0, OM.useLayoutEffect)((() => {
        if (!MM) return;
        const rM = document.querySelector(`.${aM}`),
          iM = document.querySelector(`.${PM}`),
          OM = () => {
            const OM = MM.getBoundingClientRect(),
              SM = rM ? rM.getBoundingClientRect().right : 0,
              aM = iM ? iM.getBoundingClientRect().left : window.innerWidth,
              PM = OM.left < SM + jM,
              QM = OM.right > aM - jM;
            nM(PM || QM)
          };
        OM();
        const SM = new ResizeObserver(OM);
        return SM.observe(MM), rM && SM.observe(rM), iM && SM.observe(iM), () => {
          SM.disconnect()
        }
      }), [MM, rM]), iM
    }
  },
  40515: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      g: () => SM,
      j: () => jM
    });
    var OM = iM(44);

    function SM(MM) {
      return PM(MM, nM)
    }

    function jM(MM) {
      return PM(MM, QM)
    }

    function aM(MM) {
      return `${Math.floor(MM/60)}:${String(MM%60).padStart(2,"0")}`
    }

    function PM(MM, rM) {
      const [, iM] = (0, OM.useState)(null);
      return (0, OM.useEffect)((() => {
        if (0 === MM) return;
        const OM = window.setInterval((() => {
          const OM = rM(MM);
          iM((rM => (null === rM || void 0 === rM ? void 0 : rM.endsAt) === MM && rM.value === OM ? rM : {
            endsAt: MM,
            value: OM
          }))
        }), 250);
        return () => {
          window.clearInterval(OM)
        }
      }), [MM, rM]), rM(MM)
    }

    function nM(MM) {
      return (MM - performance.now()) / 1e3
    }

    function QM(MM) {
      return Math.max(0, Math.ceil(nM(MM)))
    }
  },
  9419: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM,
      h: () => QM,
      j: () => LM,
      m: () => zM,
      o: () => nM,
      r: () => HM
    });
    var OM = iM(22),
      SM = iM(2120),
      jM = iM(1474),
      aM = iM(1464);
    const PM = MM => {
        var rM, iM;
        return (0, aM.l)() && null !== (rM = null === (iM = (0, jM.d)()) || void 0 === iM ? void 0 : iM.getGlyphForNoaAction(MM)) && void 0 !== rM ? rM : null
      },
      nM = "controllerGlyph:",
      QM = MM => {
        var rM, iM;
        return null !== (rM = null === (iM = (0, jM.d)()) || void 0 === iM ? void 0 : iM.getPadGlyphIconName(MM)) && void 0 !== rM ? rM : `${nM}xbox/${MM}`
      },
      zM = MM => MM.startsWith(nM),
      LM = MM => {
        var rM, iM;
        return zM(MM) && null !== (rM = null === (iM = (0, jM.d)()) || void 0 === iM ? void 0 : iM.getPadGlyphIconUrl(MM)) && void 0 !== rM ? rM : null
      },
      mM = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", aM.c, SM.f, SM.d],
      HM = MM => {
        const rM = mM.map((rM => OM.i.subscribe(rM, MM)));
        return () => {
          for (const MM of rM) OM.i.unsubscribe(MM)
        }
      }
  },
  9328: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      e: () => SM
    });
    let OM = null;
    const SM = function(MM) {
        const rM = {
          cycle: MM,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return OM = rM, () => {
          OM === rM && (OM = null)
        }
      },
      jM = () => {
        var MM;
        return null !== (MM = OM) && void 0 !== MM && MM.canCycle() ? OM.cycle : null
      }
  },
  37544: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => lM,
      b: () => jM,
      f: () => JM,
      i: () => dM,
      j: () => PM,
      m: () => mM,
      q: () => yM,
      u: () => LM,
      x: () => EM,
      y: () => hM
    });
    var OM = iM(19),
      SM = iM(22);
    const jM = "clientGameInventoryButtonsChanged",
      aM = new Map;

    function PM() {
      return [...aM.values()].sort(((MM, rM) => {
        var iM, OM;
        return (null !== (iM = MM.order) && void 0 !== iM ? iM : 0) - (null !== (OM = rM.order) && void 0 !== OM ? OM : 0)
      }))
    }
    let nM = null;

    function QM(MM) {
      nM = MM
    }
    let zM = !1;

    function LM(MM) {
      zM = !0;
      try {
        MM.onClick()
      } finally {
        zM = !1
      }
      MM.panel && "clientGame" === OM.d.get("openInGameMenuName") && QM(MM.id)
    }

    function mM() {
      return zM
    }

    function HM() {
      return PM().filter((MM => MM.panel && !MM.disabled))
    }

    function hM(MM) {
      const rM = HM(),
        iM = rM.findIndex((MM => MM.id === nM));
      return !(iM < 0 || rM.length < 2) && (LM(rM[(iM + MM + rM.length) % rM.length]), !0)
    }

    function JM() {
      return null !== nM && HM().length > 1
    }

    function dM() {
      QM(null)
    }

    function yM() {
      "inventory" !== OM.d.get("openInGameMenuName") && QM(null)
    }

    function lM() {
      const MM = nM;
      return QM(null), MM
    }

    function EM(MM) {
      return aM.set(MM.id, MM), SM.i.Tz(jM, PM(), !0), () => {
        aM.get(MM.id) === MM && (aM.delete(MM.id), SM.i.Tz(jM, PM()))
      }
    }
  },
  37542: (MM, rM, iM) => {
    iM.d(rM, {
      A: () => HM,
      C: () => zM,
      e: () => PM,
      g: () => lM,
      k: () => dM,
      n: () => yM,
      p: () => mM,
      t: () => QM,
      w: () => JM
    });
    var OM = iM(19),
      SM = iM(22),
      jM = iM(1313),
      aM = iM(37544);
    const PM = "clientGameUiChanged";
    let nM = null;

    function QM() {
      return nM
    }

    function zM(MM, rM) {
      const iM = {
        content: MM,
        menu: rM
      };
      return nM = iM, SM.i.Tz(PM, nM, !0), () => {
        nM === iM && (nM = null, hM = !1, dM(), SM.i.Tz(PM, null))
      }
    }
    let LM = null;

    function mM() {
      return LM
    }

    function HM(MM) {
      return LM = MM, () => {
        LM === MM && (LM = null)
      }
    }
    let hM = !1;

    function JM() {
      const MM = OM.d.get("openInGameMenuName");
      "clientGame" !== MM && (hM = "inventory" === MM), (0, aM.m)() || (0, aM.i)(), (0, jM.z)(jM.e), OM.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dM() {
      EM(!1)
    }

    function yM() {
      EM(hM)
    }

    function lM() {
      hM && EM(!1)
    }

    function EM(MM) {
      "clientGame" === OM.d.get("openInGameMenuName") && OM.d.set({
        openInGameMenuName: MM ? "inventory" : null
      }), MM || (0, aM.i)(), hM = !1
    }
  },
  40659: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => Fr
    });
    var OM = iM(181);
    const SM = ["gingerbreadLane", "toyRow", "iceRink", "carousel", "greatTree", "cocoaCorner", "lanternWalk", "marketGate", "santasGrotto"],
      jM = {
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
    var aM = iM(44),
      PM = iM(37542),
      nM = iM(1116),
      QM = iM.n(nM),
      zM = iM(19),
      LM = iM(1464),
      mM = iM(30),
      HM = iM(1188),
      hM = iM(37454),
      JM = iM(1516),
      dM = iM(22),
      yM = iM(39532),
      lM = iM(39526);
    const EM = 400,
      UM = 2 * Math.PI * 17;

    function GM(MM, rM, iM) {
      const {
        santaMarketMinX: OM,
        santaMarketMinZ: SM,
        santaMarketSize: jM
      } = MM;
      return (0, lM.c)(rM, iM, {
        mapMinX: OM,
        mapMaxX: OM + jM,
        mapMinZ: SM,
        mapMaxZ: SM + jM
      })
    }
    class CM {
      constructor() {
        this.state = "idle", this.ownRing = !1, this.faded = !1, this.lastPressAt = -1 / 0, this.predictedAt = 0, this.timedOutPressAt = null, this.cooldownUntil = 0, this.averageRoundTrip = null, this.recentRoundTrips = []
      }
      press(MM, rM, iM) {
        var OM, SM;
        this.forgetOldRoundTrips(MM);
        const jM = MM - this.lastPressAt;
        if (this.lastPressAt = MM, jM < this.quietMs() || this.awaitingTimedOut(MM) || "idle" !== this.state || iM || MM < this.cooldownUntil || null === rM) return 0;
        const aM = Math.max(0, rM.awaySpeed) * ((null !== (OM = this.averageRoundTrip) && void 0 !== OM ? OM : 300) / 1e3);
        return rM.distance + aM > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = MM, this.ownRing = !0, this.faded = !1, 500 + (null !== (SM = this.averageRoundTrip) && void 0 !== SM ? SM : 0))
      }
      turnedAway(MM, rM, iM) {
        if (!this.mayTurnAway(MM)) return !1;
        const OM = 4 * (this.averageRoundTrip + 150) / 1e3;
        return !(rM <= 40 + (OM >= iM ? 180 : 180 * Math.asin(OM / iM) / Math.PI) && iM <= 5 + Math.max(.5, OM)) && (this.faded = !0, !0)
      }
      mayTurnAway(MM) {
        return null !== this.averageRoundTrip && "idle" !== this.state && this.ownRing && !this.faded && MM - this.predictedAt <= 350
      }
      GL(MM, rM, iM) {
        const OM = rM > 0 || !iM,
          SM = "predicted" === this.state;
        return iM && (this.cooldownUntil = MM + 1e3), OM && SM ? this.learnRoundTrip(MM, MM - this.predictedAt) : OM && this.awaitingTimedOut(MM) && (this.timedOutPressAt = null), rM > 0 ? (this.state = "confirmed", SM ? null : (this.ownRing = !1, this.faded = !1, {
          kind: "start",
          ms: rM
        })) : "idle" === this.state ? null : (this.state = "idle", this.faded && !iM ? null : {
          kind: "end",
          done: iM
        })
      }
      expired(MM) {
        var rM;
        return !("predicted" !== this.state || MM - this.predictedAt < 1200 + (null !== (rM = this.averageRoundTrip) && void 0 !== rM ? rM : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(MM, MM - this.predictedAt), !this.faded)
      }
      stop() {
        this.state = "idle", this.cooldownUntil = 0, this.timedOutPressAt = null
      }
      quietMs() {
        var MM;
        const rM = this.recentRoundTrips.reduce(((MM, rM) => {
          let {
            ms: iM
          } = rM;
          return Math.max(MM, iM)
        }), null !== (MM = this.averageRoundTrip) && void 0 !== MM ? MM : 0);
        return Math.max(300, rM > 0 ? 1.5 * rM + 300 : 1e3)
      }
      awaitingTimedOut(MM) {
        return null !== this.timedOutPressAt && MM - this.timedOutPressAt >= 3500 && (this.timedOutPressAt = null), null !== this.timedOutPressAt
      }
      forgetOldRoundTrips(MM) {
        for (; this.recentRoundTrips.length > 0 && MM - this.recentRoundTrips[0].at > 3e4;) this.recentRoundTrips.shift()
      }
      learnRoundTrip(MM, rM) {
        const iM = Math.min(2e3, Math.max(0, rM));
        this.averageRoundTrip = null === this.averageRoundTrip ? iM : this.averageRoundTrip + .3 * (iM - this.averageRoundTrip), this.recentRoundTrips.push({
          at: MM,
          ms: iM
        })
      }
    }
    const eM = "secretSantaHudChanged",
      bM = "SecretSantaHudShown",
      wM = "SecretSantaMatchOrFinish",
      tM = ["Wrapping", "Naughty", "Cancelled"],
      gM = {
        shown: !1,
        market: null,
        hint: null,
        status: null,
        endsAt: 0,
        naughtyEndsAt: 0,
        pulse: 0
      };
    class uM {
      constructor(MM) {
        this.onWrapStart = MM, this.view = gM, this.nextHintAt = 0, this.endTimer = null, this.finishEndTimer = null, this.map = null, this.arrow = null, this.countdown = null, this.countdownAnimation = null, this.ring = null, this.ringFill = null, this.ringAnimation = null, this.ringEndAnimation = null, this.flash = null, this.flashAnimation = null, this.wrap = new CM, this.drawnArrow = "", this.drawnInDistrict = !1, this.drawnInCircle = !1, this.bindMap = MM => {
          this.map = MM, this.drawnInDistrict = !1, this.drawnInCircle = !1
        }, this.bindArrow = MM => {
          this.arrow = MM, this.drawnArrow = ""
        }, this.bindCountdown = MM => {
          var rM;
          null === (rM = this.countdownAnimation) || void 0 === rM || rM.cancel(), this.countdownAnimation = null, this.countdown = MM, this.restartCountdown()
        }, this.bindRing = MM => {
          var rM;
          this.stopRing(), this.ring = MM, this.ringFill = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.querySelector(".SecretSantaRingFill")) && void 0 !== rM ? rM : null;
          const iM = this.view.naughtyEndsAt - performance.now();
          MM && iM > 0 && this.runRing("Naughty", iM)
        }, this.bindFlash = MM => {
          var rM;
          null === (rM = this.flashAnimation) || void 0 === rM || rM.cancel(), this.flashAnimation = null, this.flash = MM
        }
      }
      getView() {
        return this.view
      }
      receiveMarket(MM) {
        this.Tz({
          ...this.view,
          market: MM
        })
      }
      receiveHint(MM) {
        const rM = this.view.hint,
          iM = RM(this.nextHintAt, performance.now() + MM.santaHintNextInMs),
          OM = iM > this.nextHintAt,
          SM = !rM || rM.santaHintContract !== MM.santaHintContract || rM.santaHintDistrict !== MM.santaHintDistrict || rM.santaHintCircleX !== MM.santaHintCircleX || rM.santaHintCircleZ !== MM.santaHintCircleZ;
        this.nextHintAt = iM;
        const jM = "hunting" === MM.santaHintState && (OM || SM) ? this.view.pulse + 1 : this.view.pulse;
        this.Tz({
          ...this.view,
          hint: MM,
          pulse: jM
        }), this.restartCountdown()
      }
      receiveStatus(MM) {
        var rM;
        const iM = performance.now(),
          OM = RM(this.view.endsAt, iM + MM.santaStatusMsLeft),
          SM = MM.santaStatusNaughtyMs > 0 ? RM(this.view.naughtyEndsAt, iM + MM.santaStatusNaughtyMs) : 0,
          jM = 0 !== SM && 0 === this.view.naughtyEndsAt;
        this.Tz({
          ...this.view,
          status: MM,
          endsAt: OM,
          naughtyEndsAt: SM,
          shown: MM.santaStatusMsLeft > 0
        }), this.scheduleEnd(OM - iM), jM ? this.runRing("Naughty", MM.santaStatusNaughtyMs) : 0 === SM && null !== (rM = this.ring) && void 0 !== rM && rM.classList.contains("Naughty") && this.stopRing()
      }
      pressGift(MM, rM) {
        if (!this.view.shown) return !1;
        const iM = this.wrap.press(MM, rM, this.view.naughtyEndsAt > MM);
        return iM > 0 && this.startWrapRing(Math.max(1, iM - (performance.now() - MM))), iM > 0
      }
      aimAtWrap(MM, rM) {
        const iM = performance.now();
        return this.wrap.turnedAway(iM, MM, rM) && this.endWrapRing(!1), this.wrap.mayTurnAway(iM)
      }
      receiveWrap(MM, rM) {
        const iM = this.wrap.GL(performance.now(), MM, rM);
        "start" === (null === iM || void 0 === iM ? void 0 : iM.kind) ? this.startWrapRing(iM.ms): "end" === (null === iM || void 0 === iM ? void 0 : iM.kind) && (iM.done && this.ring && !this.ring.classList.contains("Wrapping") && this.runRing("Wrapping", 1), this.endWrapRing(iM.done))
      }
      snowBlink() {
        var MM, rM, iM;
        null === (MM = this.flashAnimation) || void 0 === MM || MM.cancel();
        this.flashAnimation = null !== (rM = null === (iM = this.flash) || void 0 === iM ? void 0 : iM.animate([{
          opacity: 1
        }, {
          opacity: 1,
          offset: .24,
          easing: "ease-in"
        }, {
          opacity: 0
        }], {
          duration: 500
        })) && void 0 !== rM ? rM : null
      }
      frame(MM, rM) {
        this.wrap.expired(performance.now()) && this.endWrapRing(!1);
        const {
          market: iM,
          hint: OM
        } = this.view;
        if (!this.view.shown || !iM || !rM || !this.arrow || !this.map) return;
        const [SM, jM] = GM(iM, rM[0], rM[2]), aM = Math.min(100, Math.max(0, SM)), PM = Math.min(100, Math.max(0, jM)), nM = Math.min(95, Math.max(5, aM)), QM = Math.min(95, Math.max(5, PM)), zM = Math.round(180 * function(MM) {
          return MM - yM.g
        }(MM) / Math.PI), LM = `${nM.toFixed(1)}% ${QM.toFixed(1)}% ${zM}`;
        LM !== this.drawnArrow && (this.drawnArrow = LM, this.arrow.style.left = `${nM.toFixed(1)}%`, this.arrow.style.top = `${QM.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${zM}deg)`);
        const mM = "hunting" === (null === OM || void 0 === OM ? void 0 : OM.santaHintState) ? OM : null,
          HM = null !== mM && function(MM, rM) {
            const iM = MM => Math.min(2, Math.max(0, Math.floor(MM / (100 / 3))));
            return 3 * iM(rM) + iM(MM)
          }(aM, PM) === mM.santaHintDistrict;
        HM !== this.drawnInDistrict && (this.drawnInDistrict = HM, this.map.toggleAttribute("data-in-district", HM));
        const hM = null !== mM && function(MM, rM) {
          let [iM, , OM] = rM;
          const {
            santaHintCircleX: SM,
            santaHintCircleZ: jM,
            santaHintCircleR: aM
          } = MM;
          return null !== SM && null !== jM && aM > 0 && Math.hypot(iM - SM, OM - jM) <= aM
        }(mM, rM);
        hM !== this.drawnInCircle && (this.drawnInCircle = hM, this.map.toggleAttribute("data-in-circle", hM))
      }
      dispose() {
        var MM, rM;
        null !== this.endTimer && (window.clearTimeout(this.endTimer), this.endTimer = null), this.clearFinishEnd(), document.body.classList.remove(wM), null === (MM = this.countdownAnimation) || void 0 === MM || MM.cancel(), this.countdownAnimation = null, this.stopRing(), null === (rM = this.flashAnimation) || void 0 === rM || rM.cancel(), this.flashAnimation = null, this.map = this.arrow = this.ring = this.flash = null, this.countdown = this.ringFill = null, document.body.classList.remove(bM), this.view = gM
      }
      Tz(MM) {
        this.view = MM, document.body.classList.toggle(bM, MM.shown), MM.shown && (this.clearFinishEnd(), document.body.classList.add(wM)), dM.i.Tz(eM, MM, !0)
      }
      scheduleEnd(MM) {
        null !== this.endTimer && window.clearTimeout(this.endTimer), this.endTimer = window.setTimeout((() => {
          this.endTimer = null, this.wrap.stop(), this.Tz({
            ...this.view,
            shown: !1,
            naughtyEndsAt: 0
          }), this.stopRing(), this.clearFinishEnd(), this.finishEndTimer = window.setTimeout((() => {
            this.finishEndTimer = null, document.body.classList.remove(wM)
          }), 13e3)
        }), MM)
      }
      clearFinishEnd() {
        null !== this.finishEndTimer && (window.clearTimeout(this.finishEndTimer), this.finishEndTimer = null)
      }
      restartCountdown() {
        var MM, rM;
        null === (MM = this.countdownAnimation) || void 0 === MM || MM.cancel(), this.countdownAnimation = null;
        const iM = this.nextHintAt - performance.now();
        if (!this.countdown || "hunting" !== (null === (rM = this.view.hint) || void 0 === rM ? void 0 : rM.santaHintState) || iM <= 0) return;
        const OM = EM * (1 - Math.min(1, iM / 1e4));
        this.countdownAnimation = this.countdown.animate([{
          strokeDashoffset: OM
        }, {
          strokeDashoffset: EM
        }], {
          duration: iM,
          fill: "forwards"
        })
      }
      runRing(MM, rM) {
        if (this.stopRing(), !this.ring || !this.ringFill) return;
        this.ring.classList.add(MM);
        const [iM, OM] = "Wrapping" === MM ? [UM, 0] : [0, UM], SM = [{
          strokeDashoffset: iM
        }, {
          strokeDashoffset: OM
        }], jM = this.ringFill.animate(SM, {
          duration: rM,
          fill: "forwards"
        });
        this.ringAnimation = jM, "Naughty" === MM && (jM.onfinish = () => {
          this.ringAnimation === jM && this.stopRing()
        })
      }
      startWrapRing(MM) {
        this.runRing("Wrapping", MM), this.onWrapStart()
      }
      endWrapRing(MM) {
        const rM = this.ring;
        if (null === rM || void 0 === rM || !rM.classList.contains("Wrapping")) return;
        var iM, OM;
        MM ? null === (iM = this.ringAnimation) || void 0 === iM || iM.finish() : null === (OM = this.ringAnimation) || void 0 === OM || OM.pause();
        rM.classList.toggle("Cancelled", !MM);
        const SM = rM.animate([{
          opacity: 1,
          scale: 1
        }, {
          opacity: 0,
          scale: MM ? 1.6 : .8
        }], {
          duration: MM ? 350 : 300,
          easing: MM ? "ease-out" : "ease-in",
          fill: "forwards"
        });
        this.ringEndAnimation = SM, SM.onfinish = () => {
          this.ringEndAnimation === SM && this.stopRing()
        }
      }
      stopRing() {
        var MM, rM, iM;
        null === (MM = this.ringAnimation) || void 0 === MM || MM.cancel(), null === (rM = this.ringEndAnimation) || void 0 === rM || rM.cancel(), this.ringAnimation = this.ringEndAnimation = null, null === (iM = this.ring) || void 0 === iM || iM.classList.remove(...tM)
      }
    }

    function RM(MM, rM) {
      return 0 !== MM && Math.abs(rM - MM) < 1e3 ? Math.min(MM, rM) : rM
    }
    var pM = iM(1303);
    const WM = "secretSantaControlsShown",
      sM = (0, aM.memo)((function(MM) {
        let {
          controller: rM
        } = MM;
        const {
          isTouchScreen: iM
        } = (0, zM.m)(["isTouchScreen"]), OM = (0, LM.y)(), {
          t: SM
        } = (0, HM.A)(), jM = (0, JM.e)(eM, rM.getView()).shown, PM = (0, hM.i)(), [nM] = (0, aM.useState)((() => {
          var MM;
          return null !== (MM = mM.g.getItem(WM)) && void 0 !== MM ? MM : 0
        })), [dM, yM] = (0, aM.useState)(nM >= 2), [lM, EM] = (0, aM.useState)(!1), UM = (0, aM.useRef)(!1), GM = !dM && lM && jM && (!iM || OM);
        return (0, aM.useEffect)((() => {
          if (!jM || lM || dM) return;
          const MM = setTimeout((() => {
            EM(!0)
          }), 12500);
          return () => {
            clearTimeout(MM)
          }
        }), [jM, lM, dM]), (0, aM.useEffect)((() => {
          !GM || PM || UM.current || (UM.current = !0, mM.g.setItem(WM, nM + 1))
        }), [GM, PM, nM]), (0, hM.k)(GM ? "secretSanta" : null, PM, (() => {
          yM(!0)
        })), GM ? (0, pM.jsxs)("div", {
          className: QM()("ControlsTutorialDiv", {
            Covered: PM
          }),
          children: [(0, pM.jsx)(hM.f, {}), (0, pM.jsx)(hM.b, {
            header: "Jump",
            noaAction: "jump"
          }), (0, pM.jsx)(hM.b, {
            header: SM("secretSantaHud:givePresent"),
            noaAction: "alt-fire"
          }), OM && (0, pM.jsx)(hM.b, {
            header: SM("controller:tutorialPause"),
            noaAction: "OpenSettings"
          })]
        }) : null
      }));
    var DM = iM(37538),
      kM = iM(3815),
      ZM = iM(37629),
      oM = iM(40515);
    const fM = (0, aM.memo)((function(MM) {
      let {
        controller: rM,
        naughtyEndsAt: iM
      } = MM;
      return (0, pM.jsxs)("div", {
        ref: rM.bindRing,
        className: "SecretSantaRing",
        children: [(0, pM.jsxs)("svg", {
          viewBox: "0 0 40 40",
          "aria-hidden": "true",
          children: [(0, pM.jsx)("circle", {
            className: "SecretSantaRingTrack",
            cx: "20",
            cy: "20",
            r: 17
          }), (0, pM.jsx)("circle", {
            className: "SecretSantaRingFill",
            cx: "20",
            cy: "20",
            r: 17,
            style: {
              strokeDasharray: UM,
              strokeDashoffset: UM
            }
          })]
        }), iM > 0 && (0, pM.jsx)(YM, {
          endsAt: iM
        })]
      })
    }));

    function YM(MM) {
      let {
        endsAt: rM
      } = MM;
      const {
        t: iM
      } = (0, HM.A)(), OM = (0, oM.j)(rM);
      return OM <= 0 ? null : (0, pM.jsxs)("div", {
        className: "SecretSantaNaughty SmallTextBold",
        children: [(0, pM.jsx)("span", {
          className: "SecretSantaNaughtyTitle",
          children: iM("secretSantaHud:naughty")
        }), (0, pM.jsx)("span", {
          children: iM("secretSantaHud:naughtyWait", {
            seconds: OM
          })
        })]
      })
    }

    function NM(MM) {
      return MM && jM[MM] || "\u2744\ufe0f"
    }
    var AM = iM(39571);
    const xM = (0, aM.memo)((function(MM) {
      var rM, iM;
      let {
        controller: OM,
        market: jM,
        hint: aM,
        pulse: PM
      } = MM;
      const {
        t: nM
      } = (0, HM.A)(), zM = null !== (rM = null === aM || void 0 === aM ? void 0 : aM.santaHintState) && void 0 !== rM ? rM : "none", LM = "hunting" === zM && aM ? aM.santaHintDistrict : -1, mM = null !== (iM = null === jM || void 0 === jM ? void 0 : jM.santaMarketDistricts) && void 0 !== iM ? iM : SM;
      return (0, pM.jsxs)("div", {
        ref: OM.bindMap,
        className: QM()("SecretSantaMinimap", `State-${zM}`),
        children: [(0, pM.jsx)("div", {
          className: "SecretSantaMinimapGrid",
          children: mM.map(((MM, rM) => (0, pM.jsxs)("div", {
            className: QM()("SecretSantaDistrict", `District-${MM}`, {
              Target: rM === LM
            }),
            children: [(0, pM.jsx)("span", {
              className: "SecretSantaDistrictIcon",
              children: NM(MM)
            }), (0, pM.jsx)("span", {
              className: "SecretSantaDistrictLabel",
              children: nM(`secretSantaHud:district_${MM}`)
            })]
          }, MM)))
        }), LM >= 0 && (0, pM.jsx)("div", {
          className: "SecretSantaDistrictPulse",
          style: {
            left: LM % 3 * (100 / 3) + "%",
            top: Math.floor(LM / 3) * (100 / 3) + "%"
          }
        }, PM), jM && aM && "hunting" === zM && (0, pM.jsx)("div", {
          className: "SecretSantaCircleClip",
          children: (0, pM.jsx)(vM, {
            market: jM,
            hint: aM
          })
        }), (0, pM.jsx)("div", {
          className: "SecretSantaMinimapArrowClip",
          children: (0, pM.jsx)("div", {
            ref: OM.bindArrow,
            className: "SecretSantaMinimapArrow",
            children: (0, pM.jsxs)("svg", {
              viewBox: "0 2 20 20",
              children: [(0, pM.jsx)("path", {
                className: "SecretSantaMinimapArrowBody",
                d: "M10 1.5 14.2 6.4H5.8Z"
              }), (0, pM.jsx)("circle", {
                className: "SecretSantaMinimapArrowBody",
                cx: "10",
                cy: "12",
                r: "5"
              }), (0, pM.jsx)("circle", {
                className: "SecretSantaMinimapArrowDot",
                cx: "10",
                cy: "12",
                r: "1.8"
              })]
            })
          })
        }), (0, pM.jsx)("svg", {
          className: "SecretSantaCountdown",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          "aria-hidden": "true",
          children: (0, pM.jsx)("path", {
            ref: OM.bindCountdown,
            d: "M50 0H100V100H0V0Z",
            style: {
              strokeDasharray: EM,
              strokeDashoffset: EM
            }
          })
        }), "lost" === zM && (0, pM.jsxs)("div", {
          className: "SecretSantaLost",
          children: [(0, pM.jsx)("span", {
            className: "SecretSantaLostIcon",
            children: "\u2744\ufe0f"
          }), (0, pM.jsx)("span", {
            className: "SmallTextBold",
            children: nM("secretSantaHud:lost")
          })]
        })]
      })
    }));

    function vM(MM) {
      let {
        market: rM,
        hint: iM
      } = MM;
      const {
        santaHintCircleX: OM,
        santaHintCircleZ: SM,
        santaHintCircleR: jM,
        santaHintContract: PM
      } = iM, nM = (0, aM.useMemo)((() => (0, AM.f)({
        ...(0, AM.d)(`${PM}:${OM}:${SM}`),
        radius: 50,
        squareness: 2
      })), [PM, OM, SM]);
      if (null === OM || null === SM || jM <= 0) return null;
      const [QM, zM] = GM(rM, OM, SM), LM = 200 * jM / rM.santaMarketSize;
      return (0, pM.jsx)("div", {
        className: "SecretSantaCircle",
        style: {
          left: `${QM}%`,
          top: `${zM}%`,
          width: `${LM}%`,
          height: `${LM}%`
        },
        children: (0, pM.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, pM.jsx)("path", {
            className: "SecretSantaCircleShadow",
            d: nM
          }), (0, pM.jsx)("path", {
            className: "SecretSantaCircleDashes",
            d: nM
          })]
        })
      })
    }
    const FM = "\x01";

    function BM(MM) {
      let {
        controller: rM
      } = MM;
      const iM = (0, JM.e)(eM, rM.getView());
      return (0, pM.jsxs)(pM.Fragment, {
        children: [(0, pM.jsx)("div", {
          ref: rM.bindFlash,
          className: "SecretSantaFlash",
          "aria-hidden": "true"
        }), (0, pM.jsx)(fM, {
          controller: rM,
          naughtyEndsAt: iM.naughtyEndsAt
        }), iM.shown && (0, pM.jsxs)(pM.Fragment, {
          children: [(0, pM.jsx)(VM, {
            status: iM.status,
            endsAt: iM.endsAt
          }), (0, pM.jsx)(XM, {
            controller: rM,
            market: iM.market,
            hint: iM.hint,
            pulse: iM.pulse
          }), (0, pM.jsx)(DM.i, {
            children: (0, pM.jsx)(rr, {
              market: iM.market,
              hint: iM.hint
            })
          })]
        })]
      })
    }

    function XM(MM) {
      let {
        controller: rM,
        market: iM,
        hint: OM,
        pulse: SM
      } = MM;
      const [jM, PM] = (0, aM.useState)(null);
      return (0, kM.m)(jM, IM), (0, pM.jsx)("div", {
        ref: PM,
        className: "SecretSantaMapPanel",
        children: (0, pM.jsx)(xM, {
          controller: rM,
          market: iM,
          hint: OM,
          pulse: SM
        })
      })
    }

    function IM(MM) {
      const rM = () => {
        const rM = MM.getBoundingClientRect();
        let iM = 0;
        for (const MM of TM()) MM.left < rM.right && MM.right > rM.left && (iM = Math.max(iM, MM.bottom));
        const OM = (0, kM.i)(rM.left, rM.right, iM);
        KM(MM, "--ss-map-top", iM + 6), KM(MM, "--ss-map-bottom", null === OM ? null : (0, kM.e)(MM) - OM + 6)
      };
      rM();
      const iM = qM(rM);
      return {
        layout: rM,
        clear: () => {
          iM(), MM.style.removeProperty("--ss-map-top"), MM.style.removeProperty("--ss-map-bottom")
        }
      }
    }

    function KM(MM, rM, iM) {
      const OM = null === iM ? "" : `${Math.ceil(iM)}px`;
      MM.style.getPropertyValue(rM) !== OM && MM.style.setProperty(rM, OM)
    }

    function qM(MM) {
      const rM = document.querySelector(`.${ZM.g}`),
        iM = new ResizeObserver(MM);
      for (const jM of [document.querySelector(`.${ZM.e}`), rM]) jM && iM.observe(jM);
      const OM = new MutationObserver(MM),
        SM = null === rM || void 0 === rM ? void 0 : rM.querySelector(".TopRightElementsRight");
      return SM && OM.observe(SM, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), () => {
        iM.disconnect(), OM.disconnect()
      }
    }

    function TM() {
      const MM = `.${ZM.g}`,
        rM = document.querySelectorAll(`.${ZM.e}, ${MM} .TopRightIcon:not(.TopRightTray *), ${MM} .CondensedSocialBarInner`);
      return Array.from(rM, (MM => MM.getBoundingClientRect())).filter((MM => MM.width > 0 && MM.height > 0))
    }
    const VM = (0, aM.memo)((function(MM) {
      let {
        status: rM,
        endsAt: iM
      } = MM;
      const {
        t: OM
      } = (0, HM.A)(), [SM, jM] = (0, aM.useState)(null);
      return function(MM) {
        (0, aM.useLayoutEffect)((() => {
          if (!MM) return;
          const rM = () => {
            MM.style.removeProperty("top");
            const rM = TM(),
              iM = Array.from(MM.children, (MM => MM.getBoundingClientRect()));
            let OM = 0;
            for (let MM = 0; MM < rM.length; MM++) {
              let MM = OM;
              for (const SM of iM)
                for (const iM of rM) {
                  SM.left < iM.right + ZM.c && SM.right > iM.left - ZM.c && SM.top + OM < iM.bottom + 4 && SM.bottom + OM > iM.top && (MM = Math.max(MM, Math.ceil(iM.bottom + 4 - SM.top)))
                }
              if (MM === OM) break;
              OM = MM
            }
            OM > 0 && (MM.style.top = `${MM.getBoundingClientRect().top+OM}px`)
          };
          rM();
          const iM = new ResizeObserver(rM);
          iM.observe(MM);
          const OM = qM(rM),
            SM = new MutationObserver((MM => {
              MM.some((MM => {
                const rM = MM.target instanceof Element ? MM.target : MM.target.parentElement;
                return !(null !== rM && void 0 !== rM && rM.closest(".SecretSantaClock"))
              })) && rM()
            }));
          return SM.observe(MM, {
            childList: !0,
            subtree: !0,
            characterData: !0
          }), window.addEventListener("resize", rM), () => {
            iM.disconnect(), OM(), SM.disconnect(), window.removeEventListener("resize", rM)
          }
        }), [MM])
      }(SM), (0, pM.jsxs)("div", {
        ref: jM,
        className: "SecretSantaTop",
        children: [(0, pM.jsxs)("div", {
          className: "SecretSantaTopBar",
          children: [(0, pM.jsx)(cM, {
            endsAt: iM
          }), rM && (0, pM.jsxs)("span", {
            className: "SecretSantaScore",
            children: [(0, pM.jsxs)("span", {
              className: "SecretSantaPoints",
              children: ["\u2b50 ", rM.santaStatusPoints]
            }, rM.santaStatusPoints), (0, pM.jsx)("span", {
              className: "SecretSantaRank",
              children: OM("secretSantaHud:rank", {
                rank: rM.santaStatusRank,
                players: rM.santaStatusPlayers
              })
            })]
          })]
        }), rM && (0, pM.jsx)(Mr, {
          status: rM
        })]
      })
    }));

    function cM(MM) {
      let {
        endsAt: rM
      } = MM;
      const iM = (0, oM.j)(rM);
      return 0 === rM ? (0, pM.jsx)("span", {
        className: "SecretSantaClock"
      }) : (0, pM.jsxs)("span", {
        className: QM()("SecretSantaClock", {
          Urgent: iM <= 30
        }),
        children: [(0, pM.jsx)("span", {
          "aria-hidden": "true",
          children: "\u23f1"
        }), (0, oM.d)(iM)]
      })
    }
    const Mr = (0, aM.memo)((function(MM) {
        let {
          status: rM
        } = MM;
        const {
          t: iM
        } = (0, HM.A)(), OM = Math.min(2, Math.max(0, rM.santaStatusHunters)), SM = rM.santaStatusScarf, jM = rM.santaStatusKnown ? (0, pM.jsxs)("span", {
          className: "SecretSantaSpotted",
          children: [(0, pM.jsx)("span", {
            "aria-hidden": "true",
            children: "\ud83d\udc41"
          }), " ", Or(iM("secretSantaHud:spottedScarf", {
            scarf: FM
          }), (0, pM.jsx)(ir, {
            scarf: SM
          }))]
        }) : (0, pM.jsx)("span", {
          children: Or(iM("secretSantaHud:youWear", {
            scarf: FM
          }), (0, pM.jsx)(ir, {
            scarf: SM
          }))
        });
        return (0, pM.jsxs)("div", {
          className: "SecretSantaYouTab",
          children: [OM > 0 && (0, pM.jsxs)("span", {
            className: "SecretSantaHunters",
            children: [(0, pM.jsx)("span", {
              "aria-hidden": "true",
              children: "\ud83c\udf85"
            }), " ", iM(1 === OM ? "secretSantaHud:hunters1" : "secretSantaHud:hunters2")]
          }), jM]
        }, OM)
      })),
      rr = (0, aM.memo)((function(MM) {
        var rM;
        let {
          market: iM,
          hint: OM
        } = MM;
        const {
          t: SM
        } = (0, HM.A)(), jM = null !== (rM = null === OM || void 0 === OM ? void 0 : OM.santaHintState) && void 0 !== rM ? rM : "none";
        let aM, PM = jM;
        if (OM && "none" !== jM)
          if ("lost" === jM) aM = (0, pM.jsxs)(pM.Fragment, {
            children: [(0, pM.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2744\ufe0f"
            }), " ", SM("secretSantaHud:lostLine")]
          });
          else if (null !== OM.santaHintScarf) PM = `scarf-${OM.santaHintScarf}`, aM = Or(SM("secretSantaHud:lookingFor", {
          scarf: FM
        }), (0, pM.jsx)(ir, {
          scarf: OM.santaHintScarf
        }));
        else {
          const MM = null === iM || void 0 === iM ? void 0 : iM.santaMarketDistricts[OM.santaHintDistrict];
          PM = `district-${null!==MM&&void 0!==MM?MM:"?"}`, aM = Or(SM("secretSantaHud:findIn", {
            district: FM
          }), (0, pM.jsxs)("span", {
            className: QM()("SecretSantaDistrictName", void 0 !== MM && `District-${MM}`),
            children: [(0, pM.jsxs)("span", {
              "aria-hidden": "true",
              children: [NM(MM), " "]
            }), void 0 !== MM ? SM(`secretSantaHud:district_${MM}`) : "?"]
          }))
        } else aM = SM("secretSantaHud:finding");
        return (0, pM.jsx)("div", {
          className: QM()("SecretSantaTarget", `State-${jM}`),
          children: aM
        }, PM)
      }));

    function ir(MM) {
      let {
        scarf: rM
      } = MM;
      const {
        t: iM
      } = (0, HM.A)();
      return (0, pM.jsxs)("span", {
        className: QM()("SecretSantaScarf", `Scarf-${rM}`),
        children: [(0, pM.jsx)("span", {
          className: "SecretSantaScarfSwatch"
        }), iM(`secretSantaHud:scarfName_${rM}`)]
      })
    }

    function Or(MM, rM) {
      const [iM, OM = ""] = MM.split(FM);
      return (0, pM.jsxs)(pM.Fragment, {
        children: [iM, rM, OM]
      })
    }
    var Sr = iM(4577);
    const jr = [226, 36, 52],
      ar = [246, 250, 255],
      Pr = [168, 214, 255],
      nr = [24, 24, 28],
      Qr = [44, 44, 50],
      zr = [112, 112, 122],
      Lr = [255, 112, 36];

    function mr(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return [{
        timeFraction: 0,
        minColor: [MM[0], MM[1], MM[2], iM],
        maxColor: [rM[0], rM[1], rM[2], iM]
      }, {
        timeFraction: 1,
        minColor: [MM[0], MM[1], MM[2], 0],
        maxColor: [rM[0], rM[1], rM[2], 0]
      }]
    }

    function Hr(MM, rM, iM) {
      let [OM, SM, jM] = MM;
      return {
        pos1: [OM - rM, SM, jM - rM],
        pos2: [OM + rM, SM + iM, jM + rM]
      }
    }

    function hr(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const iM = .45 * rM;
      return [{
        texture: "square_particle",
        ...Hr(MM, iM, 1.4 * rM),
        dir1: [-.7, .5, -.7],
        dir2: [.7, 1.4, .7],
        minEmitPower: .5,
        maxEmitPower: 1,
        minLifeTime: .8,
        maxLifeTime: 1.4,
        minSize: .18 * rM,
        maxSize: .34 * rM,
        manualEmitCount: Math.round(26 * rM),
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
        colorGradients: mr(Qr, zr, .95),
        hideDist: 48,
        blendMode: Sr.d.Standard
      }, {
        texture: "square_particle",
        ...Hr(MM, .6 * iM, 1.2 * rM),
        dir1: [-1.4, 1.2, -1.4],
        dir2: [1.4, 2.6, 1.4],
        minEmitPower: 1.2,
        maxEmitPower: 2,
        minLifeTime: .6,
        maxLifeTime: 1,
        minSize: .1,
        maxSize: .18,
        manualEmitCount: Math.round(14 * rM),
        gravity: [0, -14, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: [{
          timeFraction: 0,
          minColor: [nr[0], nr[1], nr[2], 1],
          maxColor: [58, 52, 48, 1]
        }, {
          timeFraction: 1,
          minColor: [nr[0], nr[1], nr[2], 1],
          maxColor: [58, 52, 48, 1]
        }],
        hideDist: 48,
        blendMode: Sr.d.Standard
      }, {
        texture: "glint",
        ...Hr(MM, .7 * iM, 1.2 * rM),
        dir1: [-.8, .8, -.8],
        dir2: [.8, 2, .8],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .4,
        maxLifeTime: .8,
        minSize: .06,
        maxSize: .14,
        manualEmitCount: Math.round(6 * rM),
        gravity: [0, 1, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: mr(Lr, jr),
        hideDist: 48,
        blendMode: Sr.d.Add
      }]
    }

    function Jr(MM, rM) {
      return {
        texture: "glint",
        ...Hr(MM, .9, 1.9),
        dir1: [-.5, .6, -.5],
        dir2: [.5, 1.6, .5],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .8,
        maxLifeTime: 1.5,
        minSize: .05,
        maxSize: .13,
        manualEmitCount: rM,
        gravity: [0, .4, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: mr(ar, Pr),
        hideDist: 16,
        blendMode: Sr.d.Add
      }
    }
    var dr = iM(83);
    const yr = "harp_pling",
      lr = "cloth1",
      Er = [
        [0, .55, 1],
        [110, .55, 1.5]
      ],
      Ur = [
        [0, .5, 1],
        [85, .5, 1.26],
        [170, .5, 1.5],
        [255, .45, 2]
      ],
      Gr = [
        [0, .4, .75],
        [170, .4, .63]
      ],
      Cr = "keysJingle",
      er = [
        [],
        [
          [.45, 1]
        ],
        [
          [.7, 1.25],
          [.4, 1.6]
        ]
      ];

    function br(MM, rM) {
      return 1 === rM ? MM : {
        ...MM,
        manualEmitCount: Math.max(1, Math.round(MM.manualEmitCount * rM))
      }
    }
    class wr {
      constructor(MM, rM) {
        this.api = MM, this.localPlayerId = rM, this.layers = [{
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }, {
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }], this.timers = new Set, this.camera = [0, 0, 0], this.look = [0, 0, 1], this.hint = null, this.spotted = !1, this.lastFrameAt = 0, this.particleShare = (0, dr.isMobile)() ? .6 : 1, MM.preloadSounds([yr, Cr, lr])
      }
      reset() {
        this.hint = null, this.spotted = !1, this.setBells(0)
      }
      receiveHint(MM) {
        const rM = this.hint;
        this.hint = MM, "none" !== MM.santaHintState && (rM && rM.santaHintContract === MM.santaHintContract ? null === rM.santaHintScarf && null !== MM.santaHintScarf && this.play(Ur) : this.play(Er))
      }
      receiveStatus(MM) {
        MM.santaStatusKnown && !this.spotted && this.play(Gr), this.spotted = MM.santaStatusKnown
      }
      wrapStarted() {
        this.api.playSound(this.localPlayerId, lr, .5, 1.2)
      }
      setBells(MM) {
        const rM = er[MM];
        this.layers.forEach(((MM, iM) => {
          var OM;
          const [SM, jM] = null !== (OM = rM[iM]) && void 0 !== OM ? OM : [0, MM.rate];
          var aM;
          (0 === SM && MM.target > 0 && MM.sound && this.stopLater(MM), MM.target = SM, SM > 0 && jM !== MM.rate) && (MM.rate = jM, null === (aM = MM.sound) || void 0 === aM || aM.rate(jM))
        }))
      }
      receiveFx(MM) {
        let {
          santaFxKind: rM,
          santaFxAt: iM
        } = MM;
        if (this.api.particlesEnabled())
          if ("caughtSanta" === rM) iM && this.burst(hr(iM));
          else if ("toTunnel" === rM) this.later(300, (() => {
          const [MM, rM, iM] = this.ahead();
          this.burst([Jr([MM, rM - 1, iM], 36)])
        }));
        else {
          const [MM, rM, iM] = this.ahead();
          this.burst(hr([MM, rM - .6, iM], .8))
        }
      }
      frame(MM) {
        const {
          cameraPosition: rM,
          cameraDirection: iM
        } = MM;
        this.camera[0] = rM[0], this.camera[1] = rM[1], this.camera[2] = rM[2], this.look[0] = iM[0], this.look[1] = iM[1], this.look[2] = iM[2];
        const OM = performance.now(),
          SM = Math.min(.1, (OM - (this.lastFrameAt || OM)) / 1e3);
        this.lastFrameAt = OM;
        for (const aM of this.layers) {
          if (0 === aM.volume && 0 === aM.target && !aM.sound) continue;
          aM.target > 0 && !aM.sound && (aM.sound = this.api.playSound(this.localPlayerId, Cr, 0, aM.rate, void 0, !0));
          const MM = (aM.target > aM.volume ? 3 : 1.2) * SM;
          var jM;
          if (aM.volume = aM.target > aM.volume ? Math.min(aM.target, aM.volume + MM) : Math.max(aM.target, aM.volume - MM), aM.volume <= 0 && 0 === aM.target) this.silence(aM);
          else null === (jM = aM.sound) || void 0 === jM || jM.setRelativeVolume(aM.volume)
        }
      }
      dispose() {
        for (const MM of this.timers) window.clearTimeout(MM);
        this.timers.clear();
        for (const MM of this.layers) MM.target = 0, this.silence(MM)
      }
      silence(MM) {
        var rM;
        null === (rM = MM.sound) || void 0 === rM || rM.stop(), MM.sound = null, MM.volume = 0
      }
      stopLater(MM) {
        const rM = MM.sound,
          iM = window.setTimeout((() => {
            this.timers.delete(iM), MM.sound === rM && 0 === MM.target && this.silence(MM)
          }), MM.volume / 1.2 * 1e3 + 150);
        this.timers.add(iM)
      }
      ahead() {
        const [MM, rM, iM] = this.camera, [OM, SM, jM] = this.look;
        return [MM + 1.8 * OM, rM + 1.8 * SM - .35, iM + 1.8 * jM]
      }
      later(MM, rM) {
        const iM = window.setTimeout((() => {
          this.timers.delete(iM), rM()
        }), MM);
        this.timers.add(iM)
      }
      play(MM) {
        for (const [rM, iM, OM] of MM) 0 === rM ? this.api.playSound(this.localPlayerId, yr, iM, OM) : this.later(rM, (() => {
          this.api.playSound(this.localPlayerId, yr, iM, OM)
        }))
      }
      burst(MM) {
        for (const rM of MM) this.api.playParticleEffect(br(rM, this.particleShare))
      }
    }
    class tr {
      constructor(MM) {
        this.api = MM, this.wait = null
      }
      GL(MM) {
        const rM = performance.now();
        this.wait = {
          min: MM.santaFlyoverMin,
          max: MM.santaFlyoverMax,
          start: MM.santaFlyoverStart,
          until: rM + MM.santaFlyoverWaitMs,
          loadedAt: null,
          settledFrames: 0,
          lastFrameAt: rM
        }
      }
      frame(MM) {
        const rM = this.wait;
        if (!rM) return;
        const iM = performance.now(),
          OM = iM - rM.lastFrameAt;
        rM.lastFrameAt = iM, iM > rM.until ? this.wait = null : null !== rM.loadedAt ? (rM.settledFrames = OM <= 60 ? rM.settledFrames + 1 : 0, rM.settledFrames >= 6 && iM - rM.loadedAt >= 300 && (this.wait = null, this.api.sendCommand("santaFlyoverReady"))) : MM && this.isLoaded(rM, MM) && (rM.loadedAt = iM)
      }
      isLoaded(MM, rM) {
        let {
          min: iM,
          max: SM,
          start: jM
        } = MM;
        if (rM[0] < iM[0] || rM[0] > SM[0] || rM[2] < iM[2] || rM[2] > SM[2]) return !1;
        const aM = OM.f.HL,
          PM = MM => MM.map((MM => Math.floor(MM / aM))),
          nM = [PM(rM), PM(jM)],
          [QM, zM] = [PM(iM), PM(SM)];
        for (let OM = QM[0]; OM <= zM[0]; OM++)
          for (let MM = QM[1]; MM <= zM[1]; MM++)
            for (let rM = QM[2]; rM <= zM[2]; rM++) {
              if (nM.some((iM => {
                  let [SM, jM, aM] = iM;
                  return (OM - SM) ** 2 + (MM - jM) ** 2 + (rM - aM) ** 2 <= 4
                })) && !this.api.isBlockInLoadedChunk(OM * aM, MM * aM, rM * aM)) return !1
            }
        return !0
      }
    }
    var gr = iM(40215);
    const ur = [20, 9, 20],
      Rr = [8, 12],
      pr = .3,
      Wr = [.05, .13],
      sr = {
        kind: "smokePuff"
      },
      Dr = [245, 250, 255],
      kr = {
        vL: 900,
        perS: 80
      },
      Zr = {
        vL: 360,
        perS: 34
      };
    class or {
      constructor(MM) {
        this.api = MM, this.tier = (0, dr.isMobile)() ? Zr : kr, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
      }
      onAfterRender(MM) {
        const rM = performance.now(),
          iM = 0 === this.lastMs ? 0 : Math.min(rM - this.lastMs, 250) / 1e3;
        if (this.lastMs = rM, !this.api.particlesEnabled()) return void this.dispose();
        const OM = Math.hypot(MM[0] - this.last[0], MM[1] - this.last[1], MM[2] - this.last[2]) > 20;
        if (this.last[0] = MM[0], this.last[1] = MM[1], this.last[2] = MM[2], OM && this.dispose(), (OM || rM >= this.nextRoofCheckMs) && (this.nextRoofCheckMs = rM + 250, this.roofed = this.hasRoof(MM)), this.roofed) return void(this.budget = 0);
        const SM = this.at;
        let jM;
        SM[0] = MM[0], SM[1] = MM[1] + 7, SM[2] = MM[2], this.system ? (this.budget = Math.min(this.budget + this.tier.perS * iM, this.tier.perS / 4), jM = Math.floor(this.budget), this.budget -= jM) : (this.system = this.api.createParticles(this.opts(), {
          pos: SM,
          half: ur
        }), jM = Math.floor(this.tier.vL / 2)), jM > 0 && (this.system.moveTo(SM, ur), this.system.emit(jM))
      }
      dispose() {
        var MM;
        null === (MM = this.system) || void 0 === MM || MM.dispose(), this.system = null
      }
      hasRoof(MM) {
        let [rM, iM, OM] = MM;
        const SM = Math.floor(rM),
          jM = Math.floor(OM);
        let aM = 0;
        for (let PM = Math.floor(iM) + 1; PM <= Math.floor(iM) + 16; PM++)
          if (aM = this.api.isSolidToPlayerBlockId(this.api.getBlockId(SM, PM, jM)) ? aM + 1 : 0, aM >= 4) return !0;
        return !1
      }
      opts() {
        const [MM, rM, iM] = Dr;
        return {
          texture: sr,
          vL: this.tier.vL,
          minLifeTime: Rr[0] / gr.e,
          maxLifeTime: Rr[1] / gr.e,
          minEmitPower: 1.1 * gr.e * .8,
          maxEmitPower: 1.1 * gr.e * 1.2,
          minSize: Wr[0],
          maxSize: Wr[1],
          emitRate: 0,
          gravity: [0, 0, 0],
          dir1: [-.3, -1, -.3],
          dir2: [pr, -1, pr],
          colorGradients: [{
            timeFraction: 0,
            minColor: [MM, rM, iM, 0]
          }, {
            timeFraction: .12,
            minColor: [MM, rM, iM, .9]
          }, {
            timeFraction: .85,
            minColor: [MM, rM, iM, .9]
          }, {
            timeFraction: 1,
            minColor: [MM, rM, iM, 0]
          }],
          blendMode: Sr.d.Standard
        }
      }
    }
    var fr = iM(37501);
    class Yr {
      constructor() {
        this.element = null, this.fade = null, this.fadeLookedAt = -1 / 0, this.armedUntil = 0, this.shownAt = null, this.drawn = -1, this.bind = MM => {
          this.element = MM, this.drawn = -1
        }
      }
      receiveFlyover(MM) {
        this.armedUntil = performance.now() + MM + 3e3
      }
      frame(MM) {
        const rM = performance.now(),
          iM = this.snowAlpha(rM);
        if (iM <= 0) return null !== this.shownAt && (this.armedUntil = 0), this.shownAt = null, void this.draw(0);
        if (null === this.shownAt) {
          if (iM < 1 || MM && rM >= this.armedUntil) return void this.draw(0);
          this.shownAt = rM
        }
        this.draw(Math.min(1, (rM - this.shownAt) / 300) * iM)
      }
      snowAlpha(MM) {
        var rM, iM, OM, SM;
        (null === (rM = this.fade) || void 0 === rM || !rM.isConnected) && MM - this.fadeLookedAt >= 250 && (this.fadeLookedAt = MM, this.fade = document.querySelector(`[${fr.b}]`));
        const jM = null === (iM = this.fade) || void 0 === iM ? void 0 : iM.style;
        if (!jM || "none" === jM.display) return 0;
        const aM = null !== (OM = null === (SM = jM.backgroundColor.match(/\d+/g)) || void 0 === SM ? void 0 : SM.slice(0, 3).map(Number)) && void 0 !== OM ? OM : [];
        return 3 === aM.length && aM.every((MM => MM >= 200)) && Number(jM.opacity) || 0
      }
      draw(MM) {
        const rM = Math.round(100 * MM) / 100;
        this.element && rM !== this.drawn && (this.drawn = rM, this.element.style.opacity = String(rM), this.element.style.display = rM > 0 ? "flex" : "none")
      }
    }
    const Nr = (0, aM.memo)((function(MM) {
        let {
          controller: rM
        } = MM;
        const {
          t: iM
        } = (0, HM.A)();
        return (0, pM.jsx)("div", {
          ref: rM.bind,
          className: "SecretSantaSnowTitle",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, pM.jsxs)("div", {
            className: "SecretSantaSnowTitleCard",
            children: [(0, pM.jsxs)("div", {
              className: "SecretSantaSnowTitleName",
              children: [(0, pM.jsx)("span", {
                className: "SecretSantaSnowTitleIcon",
                children: "\ud83c\udf85"
              }), iM("secretSantaHud:titleName")]
            }), (0, pM.jsx)("div", {
              className: "SecretSantaSnowTitleLine",
              children: iM("secretSantaHud:titleLine")
            })]
          })
        })
      })),
      Ar = "SecretSantaMode",
      xr = OM.f.jy * OM.f.playerEyeToHeightRatio;

    function vr(MM) {
      document.body.classList.toggle("SecretSantaPodium", MM)
    }
    const Fr = function(MM, rM, iM, OM) {
      let {
        localPlayerId: SM
      } = OM;
      const jM = new uM((() => {
          var MM;
          null === (MM = JM) || void 0 === MM || MM.wrapStarted()
        })),
        nM = new Yr,
        QM = [0, 0, 0];
      let zM = null;
      const LM = [0, 0, 0],
        mM = [0, 0, 0];
      let HM = null,
        hM = null,
        JM = null,
        dM = null,
        yM = null,
        lM = null;
      const EM = MM => {
          HM && null !== MM && MM !== SM && !lM && (lM = {
            target: MM,
            at: performance.now(),
            first: null
          })
        },
        UM = (MM, rM) => {
          lM = null, jM.pressGift(MM.at, rM) && (zM = MM.target)
        },
        GM = (MM, rM) => {
          if (null === zM) return;
          if (!MM.readDrawnPosition(zM, LM)) return void(zM = null);
          mM[0] = rM[0], mM[1] = rM[1] + xr, mM[2] = rM[2];
          const iM = Math.hypot(LM[0] - rM[0], LM[1] - rM[1], LM[2] - rM[2]);
          jM.aimAtWrap(function(MM, rM, iM) {
            const OM = iM[0] - MM[0],
              SM = iM[2] - MM[2],
              jM = Math.hypot(rM[0], rM[2]);
            let aM = MM[1];
            const PM = jM > 0 ? (OM * rM[0] + SM * rM[2]) / jM : 0;
            PM > 0 && (aM += rM[1] / jM * PM), aM = Math.max(iM[1], Math.min(iM[1] + 1.8, aM));
            const nM = [OM, aM - MM[1], SM],
              QM = Math.hypot(nM[0], nM[1], nM[2]),
              zM = Math.hypot(rM[0], rM[1], rM[2]);
            if (0 === QM || 0 === zM) return 0;
            const LM = (nM[0] * rM[0] + nM[1] * rM[1] + nM[2] * rM[2]) / (QM * zM);
            return 180 * Math.acos(Math.max(-1, Math.min(1, LM))) / Math.PI
          }(mM, MM.getActionRay().direction, LM), iM) || (zM = null)
        },
        CM = (MM, rM, iM) => {
          const OM = [0, 0, 0];
          iM && MM.readDrawnPosition(rM.target, OM) ? rM.first ? UM(rM, function(MM, rM, iM, OM) {
            const SM = iM[0] - MM[0],
              jM = iM[1] - MM[1],
              aM = iM[2] - MM[2],
              PM = Math.hypot(SM, jM, aM);
            return 0 === PM || OM <= 0 ? {
              distance: PM,
              awaySpeed: 0
            } : {
              distance: PM,
              awaySpeed: (SM * (iM[0] - rM[0]) + jM * (iM[1] - rM[1]) + aM * (iM[2] - rM[2])) / PM / OM
            }
          }(iM, rM.first.pos, OM, (performance.now() - rM.first.at) / 1e3)) : rM.first = {
            pos: OM,
            at: performance.now()
          } : UM(rM, null)
        };
      return {
        onCreate: MM => {
          HM = MM, document.body.classList.add(Ar), JM = new wr(MM, SM), dM = new or(MM), yM = new tr(MM), hM = (0, PM.C)((0, aM.createElement)(aM.Fragment, null, (0, aM.createElement)(BM, {
            controller: jM
          }), (0, aM.createElement)(sM, {
            controller: jM
          }), (0, aM.createElement)(Nr, {
            controller: nM
          })))
        },
        onClose: () => {
          var MM, rM, iM;
          document.body.classList.remove(Ar), vr(!1), null === (MM = hM) || void 0 === MM || MM(), hM = null, jM.dispose(), null === (rM = JM) || void 0 === rM || rM.dispose(), JM = null, null === (iM = dM) || void 0 === iM || iM.dispose(), dM = null, yM = null, HM = null
        },
        onPlayerAltAction: (MM, rM, iM, OM, SM, jM) => {
          EM(jM)
        },
        onPlayerAttackEntity: (MM, rM) => {
          EM(rM)
        },
        onAfterRender: (MM, rM) => {
          var iM, OM, aM, PM;
          const zM = null !== (iM = HM) && void 0 !== iM && iM.readDrawnPosition(SM, QM) ? QM : null;
          lM && HM && CM(HM, lM, zM), HM && zM && GM(HM, zM), jM.frame(rM.cameraHeading, zM), null === (OM = JM) || void 0 === OM || OM.frame(rM), null === (aM = dM) || void 0 === aM || aM.onAfterRender(rM.cameraPosition), null === (PM = yM) || void 0 === PM || PM.frame(zM), nM.frame(jM.getView().shown)
        },
        onReceivedMessageFromServer: (MM, rM) => {
          var iM;
          if ("secretSantaHint" === MM) jM.receiveHint(rM), null === (iM = JM) || void 0 === iM || iM.receiveHint(rM);
          else if ("secretSantaStatus" === MM) {
            var OM;
            jM.receiveStatus(rM), null === (OM = JM) || void 0 === OM || OM.receiveStatus(rM)
          } else if ("secretSantaWrap" === MM) {
            lM && UM(lM, null);
            const {
              santaWrapMs: MM,
              santaWrapDone: iM
            } = rM;
            jM.receiveWrap(MM, iM)
          } else if ("secretSantaMarket" === MM) {
            var SM;
            null === (SM = JM) || void 0 === SM || SM.reset(), jM.receiveMarket(rM)
          } else if ("secretSantaBells" === MM) {
            var aM;
            null === (aM = JM) || void 0 === aM || aM.setBells(rM.santaBellsLevel)
          } else if ("secretSantaFx" === MM) {
            var PM;
            const MM = rM;
            "toTunnel" === MM.santaFxKind && jM.snowBlink(), null === (PM = JM) || void 0 === PM || PM.receiveFx(MM)
          } else if ("secretSantaFlyover" === MM) {
            var QM;
            null === (QM = yM) || void 0 === QM || QM.GL(rM), nM.receiveFlyover(rM.santaFlyoverWaitMs)
          } else "secretSantaPodium" === MM && vr(rM.santaPodiumShown)
        }
      }
    }
  },
  39532: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      g: () => SM
    });
    var OM = iM(332);
    const SM = (0, OM.wb)([0, 0, -1]),
      jM = [{
        name: "S",
        bearing: (0, OM.wb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, OM.wb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: SM
      }, {
        name: "W",
        bearing: (0, OM.wb)([1, 0, 0])
      }]
  },
  39526: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      d: () => jM
    });
    var OM = iM(39532);

    function SM(MM, rM, iM) {
      return [100 * (iM.mapMaxX - MM) / (iM.mapMaxX - iM.mapMinX), 100 * (rM - iM.mapMinZ) / (iM.mapMaxZ - iM.mapMinZ)]
    }

    function jM(MM, rM, iM, jM) {
      const [aM, PM] = SM(MM, rM, jM), nM = OM.g - iM;
      return {
        rotation: nM,
        transform: `rotate(${nM}rad) translate(-${aM}%, -${PM}%)`
      }
    }
  },
  39571: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      f: () => aM
    });
    var OM = iM(4586);
    const SM = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function jM(MM) {
      const rM = new OM.h(MM);
      return {
        radius: 45,
        squareness: 3,
        wobbles: SM.map((MM => {
          let {
            lobes: iM,
            amount: OM
          } = MM;
          return {
            lobes: iM[Math.floor(rM.next() * iM.length)],
            amount: OM[0] + rM.next() * (OM[1] - OM[0]),
            phase: 2 * rM.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function aM(MM) {
      let {
        radius: rM,
        squareness: iM,
        wobbles: OM,
        samples: SM
      } = MM;
      const jM = [];
      for (let aM = 0; aM < SM; aM++) {
        const MM = 2 * Math.PI * aM / SM,
          PM = Math.cos(MM),
          nM = Math.sin(MM),
          QM = rM * (Math.abs(PM) ** iM + Math.abs(nM) ** iM) ** (-1 / iM) * OM.reduce(((rM, iM) => {
            let {
              lobes: OM,
              amount: SM,
              phase: jM
            } = iM;
            return rM + SM * Math.sin(OM * MM + jM)
          }), 1);
        jM.push(`${(50+QM*PM).toFixed(2)} ${(50+QM*nM).toFixed(2)}`)
      }
      return `M${jM.join("L")}Z`
    }
  },
  40215: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      i: () => jM
    });
    const OM = 1 / .6,
      SM = {
        kind: "smokePuff"
      };
    class jM {
      constructor(MM, rM, iM) {
        this.style = MM, this.vL = rM, this.half = iM, this.particles = null, this.lastFrame = -1
      }
      emit(MM, rM, iM) {
        let jM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return iM !== this.lastFrame && (this.lastFrame = iM, this.particles || (this.particles = MM.createParticles(function(MM, rM) {
          const [
            [iM, jM, aM],
            [PM, nM, QM]
          ] = MM.colours;
          return {
            texture: MM.soft ? SM : "square_particle",
            vL: rM,
            minLifeTime: MM.life[0] / OM,
            maxLifeTime: MM.life[1] / OM,
            minEmitPower: MM.power[0] * OM,
            maxEmitPower: MM.power[1] * OM,
            minSize: MM.size[0],
            maxSize: MM.size[1],
            emitRate: 0,
            gravity: [0, MM.lift * OM * OM, 0],
            dir1: [-MM.spread, 1, -MM.spread],
            dir2: [MM.spread, 1, MM.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [iM, jM, aM, MM.alpha],
              maxColor: [PM, nM, QM, MM.alpha]
            }, {
              timeFraction: 1,
              minColor: [iM, jM, aM, 0],
              maxColor: [PM, nM, QM, 0]
            }],
            blendMode: MM.blendMode
          }
        }(this.style, this.vL), {
          pos: rM,
          half: this.half
        })), this.particles.moveTo(rM, this.half), this.particles.emit(jM), !0)
      }
      dispose() {
        var MM;
        null === (MM = this.particles) || void 0 === MM || MM.stop(), this.particles = null
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);