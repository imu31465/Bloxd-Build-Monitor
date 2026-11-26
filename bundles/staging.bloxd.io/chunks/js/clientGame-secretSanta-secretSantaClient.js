export const id = 28;
export const ids = [28];
export const modules = {
  37263: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => ZB,
      e: () => NB,
      h: () => zB,
      l: () => PB
    });
    var YB = GB(34790),
      DB = GB(37267),
      QB = GB(37270),
      oB = GB(9391),
      jB = GB(1480),
      yB = GB(56),
      JB = GB(70),
      MB = GB(1282);

    function PB() {
      var BB;
      return (0, jB.i)(DB.d, (0, DB.n)()), (0, MB.jsx)(MB.Fragment, {
        children: null === (BB = (0, DB.n)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function zB(BB) {
      var OB;
      let {
        show: GB
      } = BB;
      (0, jB.i)(DB.d, (0, DB.n)());
      const JB = null === (OB = (0, DB.n)()) || void 0 === OB ? void 0 : OB.menu;
      return (0, yB.useEffect)((() => {
        var BB;
        GB || (null === JB || void 0 === JB || null === (BB = JB.onClose) || void 0 === BB || BB.call(JB), (0, QB.u)())
      }), [GB, JB]), (0, yB.useEffect)((() => GB ? (0, oB.d)(QB.D, QB.i) : void 0), [GB]), (0, MB.jsx)(YB.d, {
        showing: GB,
        globallyUniqueKey: "clientGameMenu",
        children: null === JB || void 0 === JB ? void 0 : JB.content
      })
    }
    const lB = new Map,
      pB = new Set;

    function qB(BB, OB) {
      OB ? lB.set(BB, OB) : lB.delete(BB);
      for (const GB of pB) GB()
    }

    function ZB(BB) {
      let {
        placement: OB = "bottom"
      } = BB;
      const GB = (0, yB.useRef)(null);
      return (0, yB.useLayoutEffect)((() => {
        const BB = GB.current;
        return qB(OB, BB), () => {
          lB.get(OB) === BB && qB(OB, null)
        }
      }), [OB]), (0, MB.jsx)("div", {
        ref: GB,
        id: `clientGameHud-${OB}`,
        style: {
          display: "contents"
        }
      })
    }

    function NB(BB) {
      let {
        children: OB,
        placement: GB = "bottom"
      } = BB;
      const [YB, DB] = (0, yB.useState)((() => {
        var BB;
        return null !== (BB = lB.get(GB)) && void 0 !== BB ? BB : null
      }));
      return (0, yB.useEffect)((() => {
        const BB = () => {
          var BB;
          DB(null !== (BB = lB.get(GB)) && void 0 !== BB ? BB : null)
        };
        return pB.add(BB), BB(), () => {
          pB.delete(BB)
        }
      }), [GB]), YB ? (0, JB.createPortal)(OB, YB) : null
    }
  },
  37180: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => kB,
      f: () => nB,
      j: () => UB,
      n: () => VB,
      o: () => SB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(3528),
      jB = GB(331),
      yB = GB(2653),
      JB = GB(25),
      MB = GB(2050),
      PB = GB(31),
      zB = GB(2063),
      lB = GB(16),
      pB = GB(2076),
      qB = GB(1434),
      ZB = GB(9485),
      NB = GB(2111),
      RB = GB(1175),
      WB = GB(1282);
    const AB = 7e3;

    function VB() {
      const {
        loadingOverlayVisible: BB,
        openInGameMenuName: OB,
        openEverythingMenuName: GB
      } = (0, lB.o)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return BB || null !== OB || null !== GB
    }

    function SB(BB, OB, GB) {
      const DB = (0, YB.useRef)(GB);
      DB.current = GB;
      const QB = (0, YB.useRef)({
        card: BB,
        ms: 0
      });
      (0, YB.useEffect)((() => {
        if (OB || null === BB) return;
        QB.current.card !== BB && (QB.current = {
          card: BB,
          ms: 0
        });
        const GB = QB.current,
          YB = performance.now(),
          oB = setTimeout((() => {
            DB.current()
          }), AB - GB.ms);
        return () => {
          clearTimeout(oB), GB.ms += performance.now() - YB
        }
      }), [OB, BB])
    }
    const nB = (0, YB.memo)((function() {
      const {
        isTouchScreen: BB
      } = (0, lB.o)(["isTouchScreen"]), OB = (0, qB.s)();
      (0, oB.e)();
      const GB = (0, yB.g)("showBasicMovementControls"),
        [DB, MB] = (0, YB.useState)("movement"),
        zB = "movement" === DB,
        pB = OB && !1 !== GB;
      (0, YB.useEffect)((() => {
        "padActions" !== DB || pB || MB("done")
      }), [DB, pB]);
      const ZB = VB();
      SB("done" === DB ? null : DB, ZB, (() => {
        MB("movement" === DB && (0, qB.j)() ? "padActions" : "done")
      }));
      const NB = PB.g.getItem(jB.Mb) > 2,
        RB = !NB && (!BB || OB) && zB && !1 !== GB;
      return (0, YB.useEffect)((() => {
        RB && !ZB && JB.o.tM("controlsTutorialShown", "movement")
      }), [RB, ZB]), NB ? (0, WB.jsx)(dB, {
        showingMovementControls: !1
      }) : (0, WB.jsxs)(WB.Fragment, {
        children: [RB ? (0, WB.jsxs)("div", {
          className: QB()("ControlsTutorialDiv", {
            Covered: ZB
          }),
          children: [(0, WB.jsx)(UB, {}), (0, WB.jsx)(kB, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, WB.jsx)(kB, {
            header: "Jump",
            noaAction: "jump"
          })]
        }) : null, "padActions" === DB && pB && (0, WB.jsx)(fB, {
          covered: ZB
        }), (0, WB.jsx)(dB, {
          showingMovementControls: "done" !== DB
        })]
      })
    }));

    function UB() {
      const BB = (0, qB.s)();
      return (0, WB.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, WB.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), BB && (0, WB.jsx)(pB.c, {
          noaAction: "forward"
        }), !BB && (0, WB.jsxs)(WB.Fragment, {
          children: [(0, WB.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, WB.jsx)(pB.c, {
              noaAction: "forward"
            })
          }), (0, WB.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, WB.jsx)(pB.c, {
              noaAction: "left"
            }), (0, WB.jsx)(pB.c, {
              noaAction: "backward"
            }), (0, WB.jsx)(pB.c, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function fB(BB) {
      let {
        covered: OB
      } = BB;
      const {
        t: GB
      } = (0, RB.H)(), YB = (0, yB.g)("useInventory");
      return (0, WB.jsxs)("div", {
        className: QB()("ControlsTutorialDiv", {
          Covered: OB
        }),
        children: [(0, WB.jsx)(kB, {
          header: GB("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, WB.jsx)(kB, {
          header: GB("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== YB && (0, WB.jsx)(kB, {
          header: GB("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, WB.jsx)(kB, {
          header: GB("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function kB(BB) {
      let {
        header: OB,
        noaAction: GB
      } = BB;
      return (0, WB.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, WB.jsx)("div", {
          className: "KeyHeader",
          children: OB
        }), (0, WB.jsx)(pB.c, {
          noaAction: GB
        })]
      })
    }

    function dB(BB) {
      let {
        showingMovementControls: OB
      } = BB;
      const {
        isTouchScreen: GB
      } = (0, lB.o)(["isTouchScreen"]), DB = (0, qB.s)(), QB = (0, NB.b)("OpenShop"), [oB, jB] = (0, YB.useState)(!1), pB = `SeenShopControls|${(0,zB.f)("connectedGame",(BB=>BB.gameNameWithVariation))}`, RB = () => (!(0, qB.j)() || null !== (0, ZB.c)("OpenShop")) && !PB.g.getItem(pB) && MB.e.get("shopInfo") && !OB, AB = () => (jB(!0), PB.g.setItem(pB, !0), (0, qB.j)() || JB.o.tM("showShopTouchTutorial"), setTimeout((() => {
        jB(!1)
      }), 7e3));
      (0, YB.useEffect)((() => {
        let BB;
        const OB = JB.o.subscribe("showShopTutorial", (() => {
          RB() && (BB = AB())
        }));
        return () => {
          clearTimeout(BB), JB.o.unsubscribe(OB)
        }
      }), [OB]);
      const VB = (0, YB.useRef)();
      return (0, yB.f)("currencyAmounts", (BB => {
        if (RB()) {
          let GB = !1;
          const YB = MB.e.get("shopInfo");
          for (const DB in YB) {
            for (const QB in YB[DB].items) {
              var OB;
              const oB = YB[DB].items[QB];
              if (void 0 !== oB.currency && BB[oB.currency] && oB.cost <= BB[oB.currency].amount && (null === (OB = oB.hidden) || void 0 === OB || !OB)) {
                GB = !0;
                break
              }
            }
            if (GB) break
          }
          GB && (VB.current = AB())
        }
      })), (0, YB.useEffect)((() => () => {
        clearTimeout(VB.current)
      }), [OB]), !oB || DB && !QB ? null : (0, WB.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: GB && !DB ? null : (0, WB.jsx)(kB, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
  },
  34790: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(4949),
      DB = GB(4956);

    function QB(BB) {
      let {
        children: OB,
        showing: GB,
        globallyUniqueKey: QB,
        alwaysMountChildren: oB = !1,
        doGameplayStartStopOnShow: jB = !0,
        keepsMovement: yB = !1
      } = BB;
      return (0, DB.e)(!0, GB, QB, yB), (0, YB.c)(jB, GB), GB || oB ? OB : null
    }
  },
  37367: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      i: () => oB,
      k: () => jB,
      n: () => yB
    });
    var YB = GB(56),
      DB = GB(3528);
    const QB = 8,
      oB = "InGameHeaderContainer",
      jB = "TopRightElements";

    function yB(BB) {
      const [OB] = (0, DB.e)(), [GB, yB] = (0, YB.useState)(!1);
      return (0, YB.useLayoutEffect)((() => {
        if (!BB) return;
        const OB = document.querySelector(`.${oB}`),
          GB = document.querySelector(`.${jB}`),
          YB = () => {
            const YB = BB.getBoundingClientRect(),
              DB = OB ? OB.getBoundingClientRect().right : 0,
              oB = GB ? GB.getBoundingClientRect().left : window.innerWidth,
              jB = YB.left < DB + QB,
              JB = YB.right > oB - QB;
            yB(jB || JB)
          };
        YB();
        const DB = new ResizeObserver(YB);
        return DB.observe(BB), OB && DB.observe(OB), GB && DB.observe(GB), () => {
          DB.disconnect()
        }
      }), [BB, OB]), GB
    }
  },
  40167: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      i: () => DB,
      k: () => QB
    });
    var YB = GB(56);

    function DB(BB) {
      return jB(BB, yB)
    }

    function QB(BB) {
      return jB(BB, JB)
    }

    function oB(BB) {
      return `${Math.floor(BB/60)}:${String(BB%60).padStart(2,"0")}`
    }

    function jB(BB, OB) {
      const [, GB] = (0, YB.useState)(null);
      return (0, YB.useEffect)((() => {
        if (0 === BB) return;
        const YB = window.setInterval((() => {
          const YB = OB(BB);
          GB((OB => (null === OB || void 0 === OB ? void 0 : OB.endsAt) === BB && OB.value === YB ? OB : {
            endsAt: BB,
            value: YB
          }))
        }), 250);
        return () => {
          window.clearInterval(YB)
        }
      }), [BB, OB]), OB(BB)
    }

    function yB(BB) {
      return (BB - performance.now()) / 1e3
    }

    function JB(BB) {
      return Math.max(0, Math.ceil(yB(BB)))
    }
  },
  9485: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      d: () => JB,
      f: () => PB,
      h: () => MB,
      j: () => yB,
      l: () => lB
    });
    var YB = GB(25),
      DB = GB(2117),
      QB = GB(1450),
      oB = GB(1434);
    const jB = BB => {
        var OB, GB;
        return (0, oB.j)() && null !== (OB = null === (GB = (0, QB.f)()) || void 0 === GB ? void 0 : GB.getGlyphForNoaAction(BB)) && void 0 !== OB ? OB : null
      },
      yB = "controllerGlyph:",
      JB = BB => {
        var OB, GB;
        return null !== (OB = null === (GB = (0, QB.f)()) || void 0 === GB ? void 0 : GB.getPadGlyphIconName(BB)) && void 0 !== OB ? OB : `${yB}xbox/${BB}`
      },
      MB = BB => BB.startsWith(yB),
      PB = BB => {
        var OB, GB;
        return MB(BB) && null !== (OB = null === (GB = (0, QB.f)()) || void 0 === GB ? void 0 : GB.getPadGlyphIconUrl(BB)) && void 0 !== OB ? OB : null
      },
      zB = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", oB.d, DB.h, DB.e],
      lB = BB => {
        const OB = zB.map((OB => YB.o.subscribe(OB, BB)));
        return () => {
          for (const BB of OB) YB.o.unsubscribe(BB)
        }
      }
  },
  9391: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => DB
    });
    let YB = null;
    const DB = function(BB) {
        const OB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return YB = OB, () => {
          YB === OB && (YB = null)
        }
      },
      QB = () => {
        var BB;
        return null !== (BB = YB) && void 0 !== BB && BB.canCycle() ? YB.cycle : null
      }
  },
  39226: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    const YB = 4,
      DB = 12e3,
      QB = 1e3;
    class oB {
      constructor() {
        let {
          limit: BB = YB,
          windowMs: OB = DB,
          spacingMs: GB = QB,
          now: oB = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = BB, this.windowMs = OB, this.spacingMs = GB, this.now = oB
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const BB of this.priority) BB.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const BB = this.now();
        this.sent.push(BB), this.lastSentAt = BB, this.schedule(), this.notify()
      }
      addPriority(BB) {
        return this.priority.add(BB), () => {
          this.priority.delete(BB)
        }
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const BB of this.priority)
          if (BB.waiting()) return !0;
        return !1
      }
      prune() {
        const BB = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= BB;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const BB = this.now(),
          OB = this.lastSentAt + this.spacingMs,
          GB = Math.min(OB > BB ? OB : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        GB !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, GB - BB)))
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37270: (BB, OB, GB) => {
    GB.d(OB, {
      D: () => pB,
      G: () => RB,
      e: () => QB,
      i: () => qB,
      l: () => ZB,
      m: () => jB,
      q: () => zB,
      u: () => NB,
      y: () => PB,
      z: () => WB
    });
    var YB = GB(16),
      DB = GB(25);
    const QB = "clientGameInventoryButtonsChanged",
      oB = new Map;

    function jB() {
      return [...oB.values()].sort(((BB, OB) => {
        var GB, YB;
        return (null !== (GB = BB.order) && void 0 !== GB ? GB : 0) - (null !== (YB = OB.order) && void 0 !== YB ? YB : 0)
      }))
    }
    let yB = null;

    function JB(BB) {
      yB = BB
    }
    let MB = !1;

    function PB(BB) {
      MB = !0;
      try {
        BB.onClick()
      } finally {
        MB = !1
      }
      BB.panel && "clientGame" === YB.c.get("openInGameMenuName") && JB(BB.id)
    }

    function zB() {
      return MB
    }

    function lB() {
      return jB().filter((BB => BB.panel && !BB.disabled))
    }

    function pB(BB) {
      const OB = lB(),
        GB = OB.findIndex((BB => BB.id === yB));
      return !(GB < 0 || OB.length < 2) && (PB(OB[(GB + BB + OB.length) % OB.length]), !0)
    }

    function qB() {
      return null !== yB && lB().length > 1
    }

    function ZB() {
      JB(null)
    }

    function NB() {
      "inventory" !== YB.c.get("openInGameMenuName") && JB(null)
    }

    function RB() {
      const BB = yB;
      return JB(null), BB
    }

    function WB(BB) {
      return oB.set(BB.id, BB), DB.o.tM(QB, jB(), !0), () => {
        oB.get(BB.id) === BB && (oB.delete(BB.id), DB.o.tM(QB, jB()))
      }
    }
  },
  37267: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB,
      f: () => RB,
      g: () => ZB,
      i: () => NB,
      m: () => zB,
      n: () => JB,
      o: () => qB,
      r: () => lB,
      s: () => MB
    });
    var YB = GB(16),
      DB = GB(25),
      QB = GB(1293),
      oB = GB(37270);
    const jB = "clientGameUiChanged";
    let yB = null;

    function JB() {
      return yB
    }

    function MB(BB, OB) {
      const GB = {
        content: BB,
        menu: OB
      };
      return yB = GB, DB.o.tM(jB, yB, !0), () => {
        yB === GB && (yB = null, pB = !1, ZB(), DB.o.tM(jB, null))
      }
    }
    let PB = null;

    function zB() {
      return PB
    }

    function lB(BB) {
      return PB = BB, () => {
        PB === BB && (PB = null)
      }
    }
    let pB = !1;

    function qB() {
      const BB = YB.c.get("openInGameMenuName");
      "clientGame" !== BB && (pB = "inventory" === BB), (0, oB.q)() || (0, oB.l)(), (0, QB.p)(QB.b), YB.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ZB() {
      WB(!1)
    }

    function NB() {
      WB(pB)
    }

    function RB() {
      pB && WB(!1)
    }

    function WB(BB) {
      "clientGame" === YB.c.get("openInGameMenuName") && YB.c.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, oB.l)(), pB = !1
    }
  },
  40312: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => UG
    });
    var YB = GB(192);
    const DB = ["gingerbreadLane", "toyRow", "iceRink", "carousel", "greatTree", "cocoaCorner", "lanternWalk", "marketGate", "santasGrotto"];
    var QB = GB(56),
      oB = GB(37267),
      jB = GB(1090),
      yB = GB.n(jB),
      JB = GB(16),
      MB = GB(1434),
      PB = GB(31),
      zB = GB(1175),
      lB = GB(37180),
      pB = GB(1480),
      qB = GB(25);
    var ZB = GB(39193),
      NB = GB(39189);
    const RB = 2 * Math.PI * 17;

    function WB(BB, OB, GB) {
      const {
        santaMarketMinX: YB,
        santaMarketMinZ: DB,
        santaMarketSize: QB
      } = BB;
      return (0, NB.c)(OB, GB, {
        mapMinX: YB,
        mapMaxX: YB + QB,
        mapMinZ: DB,
        mapMaxZ: DB + QB
      })
    }

    function AB(BB, OB, GB) {
      return function(BB, OB, GB, YB, DB) {
        const QB = GB / 3,
          oB = BB => Math.min(2, Math.max(0, Math.floor(BB / QB)));
        return 3 * oB(DB - OB) + 2 - oB(YB - BB)
      }(BB.santaMarketMinX, BB.santaMarketMinZ, BB.santaMarketSize, OB, GB)
    }
    const VB = "secretSantaDistrictEntered",
      SB = "data-here";
    class nB {
      constructor() {
        this.here = -1, this.lastLeft = 0, this.lastTop = 0, this.lastAt = 0, this.drawnHere = -1, this.drawnCell = null, this.bannerAt = [], this.banner = null, this.bannerSeq = 0
      }
      reset() {
        this.here = -1, this.bannerAt = [], this.setBanner(null)
      }
      unbind() {
        this.drawnHere = -1, this.drawnCell = null
      }
      getBanner() {
        return this.banner && performance.now() - this.banner.at < 2200 ? this.banner : null
      }
      update(BB, OB, GB, YB, DB) {
        const QB = performance.now(),
          oB = 100 / BB.santaMarketSize,
          jB = 4 + .008 * Math.min(1e3, QB - this.lastAt),
          yB = Math.hypot(OB - this.lastLeft, GB - this.lastTop) > jB * oB;
        this.lastLeft = OB, this.lastTop = GB, this.lastAt = QB;
        const JB = yB ? -1 : this.here,
          MB = function(BB, OB, GB, YB, DB) {
            if (BB >= 0) {
              const OB = 100 / 3,
                QB = BB % 3 * OB,
                oB = Math.floor(BB / 3) * OB;
              if (GB >= QB - DB && GB <= QB + OB + DB && YB >= oB - DB && YB <= oB + OB + DB) return BB
            }
            return OB
          }(JB, YB, OB, GB, 1.5 * oB);
        if (MB !== this.here) {
          var PB, zB;
          this.here = MB;
          const OB = BB.santaMarketDistricts[MB];
          JB >= 0 && QB - (null !== (PB = this.bannerAt[MB]) && void 0 !== PB ? PB : -1 / 0) >= 8e3 ? (this.bannerAt[MB] = QB, this.bannerSeq++, this.setBanner({
            key: OB,
            seq: this.bannerSeq,
            at: QB
          })) : (null === (zB = this.getBanner()) || void 0 === zB ? void 0 : zB.key) !== OB && this.setBanner(null)
        }
        var lB, pB;
        this.here !== this.drawnHere && (null === (lB = this.drawnCell) || void 0 === lB || lB.removeAttribute(SB), this.drawnCell = DB.querySelector(`[data-district="${this.here}"]`), null === (pB = this.drawnCell) || void 0 === pB || pB.setAttribute(SB, ""), this.drawnHere = this.here)
      }
      dispose() {
        this.unbind(), this.reset()
      }
      setBanner(BB) {
        null === BB && null === this.banner || (this.banner = BB, qB.o.tM(VB, BB))
      }
    }
    class UB {
      constructor() {
        this.state = "idle", this.ownRing = !1, this.faded = !1, this.lastPressAt = -1 / 0, this.predictedAt = 0, this.timedOutPressAt = null, this.cooldownUntil = 0, this.averageRoundTrip = null, this.recentRoundTrips = []
      }
      press(BB, OB, GB) {
        var YB, DB;
        this.forgetOldRoundTrips(BB);
        const QB = BB - this.lastPressAt;
        if (this.lastPressAt = BB, QB < this.quietMs() || this.awaitingTimedOut(BB) || "idle" !== this.state || GB || BB < this.cooldownUntil || null === OB) return 0;
        const oB = Math.max(0, OB.awaySpeed) * ((null !== (YB = this.averageRoundTrip) && void 0 !== YB ? YB : 300) / 1e3);
        return OB.distance + oB > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = BB, this.ownRing = !0, this.faded = !1, 500 + (null !== (DB = this.averageRoundTrip) && void 0 !== DB ? DB : 0))
      }
      turnedAway(BB, OB, GB) {
        if (!this.mayTurnAway(BB)) return !1;
        const YB = 4.6 * (this.averageRoundTrip + 150) / 1e3;
        return !(OB <= 40 + (YB >= GB ? 180 : 180 * Math.asin(YB / GB) / Math.PI) && GB <= 5 + Math.max(.5, YB)) && (this.faded = !0, !0)
      }
      mayTurnAway(BB) {
        return null !== this.averageRoundTrip && "idle" !== this.state && this.ownRing && !this.faded && BB - this.predictedAt <= 350
      }
      nP(BB, OB, GB) {
        const YB = OB > 0 || !GB,
          DB = "predicted" === this.state;
        return GB && (this.cooldownUntil = BB + 1e3), YB && DB ? this.learnRoundTrip(BB, BB - this.predictedAt) : YB && this.awaitingTimedOut(BB) && (this.timedOutPressAt = null), OB > 0 ? (this.state = "confirmed", DB ? null : (this.ownRing = !1, this.faded = !1, {
          kind: "start",
          ms: OB
        })) : "idle" === this.state ? null : (this.state = "idle", this.faded && !GB ? null : {
          kind: "end",
          done: GB
        })
      }
      expired(BB) {
        var OB;
        return !("predicted" !== this.state || BB - this.predictedAt < 1200 + (null !== (OB = this.averageRoundTrip) && void 0 !== OB ? OB : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(BB, BB - this.predictedAt), !this.faded)
      }
      stop() {
        this.state = "idle", this.cooldownUntil = 0, this.timedOutPressAt = null
      }
      quietMs() {
        var BB;
        const OB = this.recentRoundTrips.reduce(((BB, OB) => {
          let {
            ms: GB
          } = OB;
          return Math.max(BB, GB)
        }), null !== (BB = this.averageRoundTrip) && void 0 !== BB ? BB : 0);
        return Math.max(300, OB > 0 ? 1.5 * OB + 300 : 1e3)
      }
      awaitingTimedOut(BB) {
        return null !== this.timedOutPressAt && BB - this.timedOutPressAt >= 3500 && (this.timedOutPressAt = null), null !== this.timedOutPressAt
      }
      forgetOldRoundTrips(BB) {
        for (; this.recentRoundTrips.length > 0 && BB - this.recentRoundTrips[0].at > 3e4;) this.recentRoundTrips.shift()
      }
      learnRoundTrip(BB, OB) {
        const GB = Math.min(2e3, Math.max(0, OB));
        this.averageRoundTrip = null === this.averageRoundTrip ? GB : this.averageRoundTrip + .3 * (GB - this.averageRoundTrip), this.recentRoundTrips.push({
          at: BB,
          ms: GB
        })
      }
    }
    const fB = "secretSantaHudChanged",
      kB = "SecretSantaHudShown",
      dB = "SecretSantaMatchOrFinish",
      KB = "SecretSantaNaughtyLock",
      uB = ["Wrapping", "Naughty", "Cancelled"],
      mB = {
        shown: !1,
        market: null,
        hint: null,
        status: null,
        endsAt: 0,
        naughtyEndsAt: 0,
        treeLitAt: 0,
        nextHintAt: 0,
        pulse: 0,
        bells: 0
      };
    class IB {
      constructor(BB) {
        this.onWrapStart = BB, this.view = mB, this.endTimer = null, this.finishEndTimer = null, this.map = null, this.arrow = null, this.countdown = null, this.countdownAnimation = null, this.ring = null, this.ringFill = null, this.ringAnimation = null, this.ringEndAnimation = null, this.flash = null, this.flashAnimation = null, this.wrap = new UB, this.district = new nB, this.drawnArrow = "", this.drawnInCircle = !1, this.bindMap = BB => {
          this.map = BB, this.drawnInCircle = !1, this.district.unbind()
        }, this.bindArrow = BB => {
          this.arrow = BB, this.drawnArrow = ""
        }, this.bindCountdown = BB => {
          var OB;
          null === (OB = this.countdownAnimation) || void 0 === OB || OB.cancel(), this.countdownAnimation = null, this.countdown = BB, this.restartCountdown()
        }, this.bindRing = BB => {
          var OB;
          this.stopRing(), this.ring = BB, this.ringFill = null !== (OB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".SecretSantaRingFill")) && void 0 !== OB ? OB : null;
          const GB = this.view.naughtyEndsAt - performance.now();
          BB && GB > 0 && this.runRing("Naughty", GB)
        }, this.bindFlash = BB => {
          var OB;
          null === (OB = this.flashAnimation) || void 0 === OB || OB.cancel(), this.flashAnimation = null, this.flash = BB
        }
      }
      getView() {
        return this.view
      }
      receiveMarket(BB) {
        this.district.reset(), this.tM({
          ...this.view,
          market: BB,
          bells: 0
        })
      }
      receiveBells(BB) {
        BB !== this.view.bells && this.tM({
          ...this.view,
          bells: BB
        })
      }
      receiveHint(BB) {
        const OB = this.view.hint,
          GB = FB(this.view.nextHintAt, performance.now() + BB.santaHintNextInMs, 1e3),
          YB = GB > this.view.nextHintAt,
          DB = !OB || OB.santaHintContract !== BB.santaHintContract || OB.santaHintDistrict !== BB.santaHintDistrict || OB.santaHintCircleX !== BB.santaHintCircleX || OB.santaHintCircleZ !== BB.santaHintCircleZ,
          QB = "hunting" === BB.santaHintState && (YB || DB) ? this.view.pulse + 1 : this.view.pulse;
        this.tM({
          ...this.view,
          hint: BB,
          nextHintAt: GB,
          pulse: QB
        }), this.restartCountdown()
      }
      receiveStatus(BB) {
        var OB, GB;
        const YB = performance.now(),
          DB = FB(this.view.endsAt, YB + BB.santaStatusMsLeft),
          QB = BB.santaStatusNaughtyMs > 0 ? FB(this.view.naughtyEndsAt, YB + BB.santaStatusNaughtyMs) : 0,
          oB = 0 !== QB && 0 === this.view.naughtyEndsAt,
          jB = null !== (OB = BB.santaStatusTreeLitInMs) && void 0 !== OB ? OB : null,
          yB = null === jB ? 0 : FB(this.view.treeLitAt, YB + jB);
        this.tM({
          ...this.view,
          status: BB,
          endsAt: DB,
          naughtyEndsAt: QB,
          treeLitAt: yB,
          shown: BB.santaStatusMsLeft > 0
        }), this.scheduleEnd(DB - YB), oB ? this.runRing("Naughty", BB.santaStatusNaughtyMs) : 0 === QB && null !== (GB = this.ring) && void 0 !== GB && GB.classList.contains("Naughty") && this.stopRing()
      }
      pressGift(BB, OB) {
        if (!this.view.shown) return !1;
        const GB = this.wrap.press(BB, OB, this.view.naughtyEndsAt > BB);
        return GB > 0 && this.startWrapRing(Math.max(1, GB - (performance.now() - BB))), GB > 0
      }
      aimAtWrap(BB, OB) {
        const GB = performance.now();
        return this.wrap.turnedAway(GB, BB, OB) && this.endWrapRing(!1), this.wrap.mayTurnAway(GB)
      }
      receiveWrap(BB, OB) {
        const GB = this.wrap.nP(performance.now(), BB, OB);
        "start" === (null === GB || void 0 === GB ? void 0 : GB.kind) ? this.startWrapRing(GB.ms): "end" === (null === GB || void 0 === GB ? void 0 : GB.kind) && (GB.done && this.ring && !this.ring.classList.contains("Wrapping") && this.runRing("Wrapping", 1), this.endWrapRing(GB.done))
      }
      snowBlink() {
        var BB, OB, GB;
        null === (BB = this.flashAnimation) || void 0 === BB || BB.cancel();
        this.flashAnimation = null !== (OB = null === (GB = this.flash) || void 0 === GB ? void 0 : GB.animate([{
          opacity: 1
        }, {
          opacity: 1,
          offset: .24,
          easing: "ease-in"
        }, {
          opacity: 0
        }], {
          duration: 500
        })) && void 0 !== OB ? OB : null
      }
      frame(BB, OB) {
        this.wrap.expired(performance.now()) && this.endWrapRing(!1);
        const {
          market: GB,
          hint: YB
        } = this.view;
        if (!this.view.shown || !GB || !OB || !this.arrow || !this.map) return;
        const [DB, QB] = WB(GB, OB[0], OB[2]), oB = Math.min(100, Math.max(0, DB)), jB = Math.min(100, Math.max(0, QB)), yB = Math.min(95, Math.max(5, oB)), JB = Math.min(95, Math.max(5, jB)), MB = Math.round(180 * function(BB) {
          return BB - ZB.c
        }(BB) / Math.PI), PB = `${yB.toFixed(1)}% ${JB.toFixed(1)}% ${MB}`;
        PB !== this.drawnArrow && (this.drawnArrow = PB, this.arrow.style.left = `${yB.toFixed(1)}%`, this.arrow.style.top = `${JB.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${MB}deg)`), this.district.update(GB, oB, jB, AB(GB, OB[0], OB[2]), this.map);
        const zB = "hunting" === (null === YB || void 0 === YB ? void 0 : YB.santaHintState) ? YB : null,
          lB = null !== zB && function(BB, OB) {
            let [GB, , YB] = OB;
            const {
              santaHintCircleX: DB,
              santaHintCircleZ: QB,
              santaHintCircleR: oB
            } = BB;
            return null !== DB && null !== QB && oB > 0 && Math.hypot(GB - DB, YB - QB) <= oB
          }(zB, OB);
        lB !== this.drawnInCircle && (this.drawnInCircle = lB, this.map.toggleAttribute("data-in-circle", lB))
      }
      dispose() {
        var BB, OB;
        null !== this.endTimer && (window.clearTimeout(this.endTimer), this.endTimer = null), this.clearFinishEnd(), document.body.classList.remove(dB), null === (BB = this.countdownAnimation) || void 0 === BB || BB.cancel(), this.countdownAnimation = null, this.stopRing(), null === (OB = this.flashAnimation) || void 0 === OB || OB.cancel(), this.flashAnimation = null, this.map = this.arrow = this.ring = this.flash = null, this.countdown = this.ringFill = null, this.district.dispose(), document.body.classList.remove(kB, KB), this.view = mB
      }
      tM(BB) {
        this.view = BB, document.body.classList.toggle(kB, BB.shown), document.body.classList.toggle(KB, BB.shown && 0 !== BB.naughtyEndsAt), BB.shown && (this.clearFinishEnd(), document.body.classList.add(dB)), qB.o.tM(fB, BB, !0)
      }
      scheduleEnd(BB) {
        null !== this.endTimer && window.clearTimeout(this.endTimer), this.endTimer = window.setTimeout((() => {
          this.endTimer = null, this.wrap.stop(), this.tM({
            ...this.view,
            shown: !1,
            endsAt: 0,
            naughtyEndsAt: 0,
            treeLitAt: 0,
            bells: 0
          }), this.stopRing(), this.clearFinishEnd(), this.finishEndTimer = window.setTimeout((() => {
            this.finishEndTimer = null, document.body.classList.remove(dB)
          }), 13e3)
        }), BB)
      }
      clearFinishEnd() {
        null !== this.finishEndTimer && (window.clearTimeout(this.finishEndTimer), this.finishEndTimer = null)
      }
      restartCountdown() {
        var BB, OB;
        null === (BB = this.countdownAnimation) || void 0 === BB || BB.cancel(), this.countdownAnimation = null;
        const GB = this.view.nextHintAt - performance.now();
        if (!this.countdown || "hunting" !== (null === (OB = this.view.hint) || void 0 === OB ? void 0 : OB.santaHintState) || GB <= 0) return;
        const YB = 1 - Math.min(1, GB / 1e4);
        this.countdownAnimation = this.countdown.animate([{
          strokeDashoffset: YB
        }, {
          strokeDashoffset: 1
        }], {
          duration: GB,
          fill: "forwards"
        })
      }
      runRing(BB, OB) {
        if (this.stopRing(), !this.ring || !this.ringFill) return;
        this.ring.classList.add(BB);
        const [GB, YB] = "Wrapping" === BB ? [RB, 0] : [0, RB], DB = [{
          strokeDashoffset: GB
        }, {
          strokeDashoffset: YB
        }], QB = this.ringFill.animate(DB, {
          duration: OB,
          fill: "forwards"
        });
        this.ringAnimation = QB, "Naughty" === BB && (QB.onfinish = () => {
          this.ringAnimation === QB && this.stopRing()
        })
      }
      startWrapRing(BB) {
        this.runRing("Wrapping", BB), this.onWrapStart()
      }
      endWrapRing(BB) {
        const OB = this.ring;
        if (null === OB || void 0 === OB || !OB.classList.contains("Wrapping")) return;
        var GB, YB;
        BB ? null === (GB = this.ringAnimation) || void 0 === GB || GB.finish() : null === (YB = this.ringAnimation) || void 0 === YB || YB.pause();
        OB.classList.toggle("Cancelled", !BB);
        const DB = OB.animate([{
          opacity: 1,
          scale: 1
        }, {
          opacity: 0,
          scale: BB ? 1.6 : .8
        }], {
          duration: BB ? 350 : 300,
          easing: BB ? "ease-out" : "ease-in",
          fill: "forwards"
        });
        this.ringEndAnimation = DB, DB.onfinish = () => {
          this.ringEndAnimation === DB && this.stopRing()
        }
      }
      stopRing() {
        var BB, OB, GB;
        null === (BB = this.ringAnimation) || void 0 === BB || BB.cancel(), null === (OB = this.ringEndAnimation) || void 0 === OB || OB.cancel(), this.ringAnimation = this.ringEndAnimation = null, null === (GB = this.ring) || void 0 === GB || GB.classList.remove(...uB)
      }
    }

    function FB(BB, OB) {
      return 0 === BB || OB - BB > (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3) ? OB : Math.min(BB, OB)
    }
    var iB = GB(1282);
    const LB = "secretSantaControlsShown",
      gB = (0, QB.memo)((function(BB) {
        let {
          controller: OB
        } = BB;
        const {
          isTouchScreen: GB
        } = (0, JB.o)(["isTouchScreen"]), YB = (0, MB.s)(), {
          t: DB
        } = (0, zB.H)(), oB = (0, pB.i)(fB, OB.getView()).shown, jB = (0, lB.n)(), [qB] = (0, QB.useState)((() => {
          var BB;
          return null !== (BB = PB.g.getItem(LB)) && void 0 !== BB ? BB : 0
        })), [ZB, NB] = (0, QB.useState)(qB >= 2), [RB, WB] = (0, QB.useState)(!1), AB = (0, QB.useRef)(!1), VB = !ZB && RB && oB && (!GB || YB);
        return (0, QB.useEffect)((() => {
          if (!oB || RB || ZB) return;
          const BB = setTimeout((() => {
            WB(!0)
          }), 12500);
          return () => {
            clearTimeout(BB)
          }
        }), [oB, RB, ZB]), (0, QB.useEffect)((() => {
          !VB || jB || AB.current || (AB.current = !0, PB.g.setItem(LB, qB + 1))
        }), [VB, jB, qB]), (0, lB.o)(VB ? "secretSanta" : null, jB, (() => {
          NB(!0)
        })), VB ? (0, iB.jsxs)("div", {
          className: yB()("ControlsTutorialDiv", {
            Covered: jB
          }),
          children: [(0, iB.jsx)(lB.j, {}), (0, iB.jsx)(lB.b, {
            header: "Jump",
            noaAction: "jump"
          }), (0, iB.jsx)(lB.b, {
            header: DB("secretSantaHud:givePresent"),
            noaAction: "alt-fire"
          }), YB && (0, iB.jsx)(lB.b, {
            header: DB("controller:tutorialPause"),
            noaAction: "OpenSettings"
          })]
        }) : null
      }));
    var rB = GB(37263),
      XB = GB(3831),
      wB = GB(37367),
      EB = GB(1106),
      cB = GB(1383),
      hB = GB(40167);
    const aB = (0, QB.memo)((function(BB) {
      let {
        controller: OB,
        naughtyEndsAt: GB
      } = BB;
      return (0, iB.jsxs)("div", {
        ref: OB.bindRing,
        className: "SecretSantaRing",
        children: [(0, iB.jsxs)("svg", {
          viewBox: "0 0 40 40",
          "aria-hidden": "true",
          children: [(0, iB.jsx)("circle", {
            className: "SecretSantaRingTrack",
            cx: "20",
            cy: "20",
            r: 17
          }), (0, iB.jsx)("circle", {
            className: "SecretSantaRingFill",
            cx: "20",
            cy: "20",
            r: 17,
            style: {
              strokeDasharray: RB,
              strokeDashoffset: RB
            }
          })]
        }), GB > 0 && (0, iB.jsx)(eB, {
          endsAt: GB
        })]
      })
    }));

    function eB(BB) {
      let {
        endsAt: OB
      } = BB;
      const {
        t: GB
      } = (0, zB.H)(), YB = (0, hB.k)(OB);
      return YB <= 0 ? null : (0, iB.jsxs)("div", {
        className: "SecretSantaNaughty SmallTextBold",
        children: [(0, iB.jsxs)("span", {
          className: "SecretSantaNaughtyTitle",
          children: [(0, iB.jsx)(cB.b, {
            name: "ban",
            "aria-hidden": "true"
          }), " ", GB("secretSantaHud:naughty")]
        }), (0, iB.jsx)("span", {
          children: GB("secretSantaHud:naughtyWait", {
            seconds: YB
          })
        })]
      })
    }
    const TB = "user-magnifying-glass",
      bB = "tree-christmas",
      CB = {
        gingerbreadLane: "gingerbread-man",
        toyRow: "teddy-bear",
        iceRink: "ice-skate",
        carousel: "horse-saddle",
        greatTree: "tree-christmas",
        cocoaCorner: "mug-hot",
        lanternWalk: "lamp-street",
        marketGate: "archway",
        santasGrotto: "hat-santa"
      };

    function HB(BB) {
      return BB && CB[BB] || "snowflake"
    }
    const vB = "SecretSantaDistrictBanner",
      sB = {
        animationDuration: "2200ms"
      },
      xB = (0, QB.memo)((function(BB) {
        let {
          controller: OB
        } = BB;
        const {
          t: GB
        } = (0, zB.H)(), YB = (0, pB.i)(VB, OB.district.getBanner());
        return YB ? (0, iB.jsxs)("div", {
          className: yB()(vB, `District-${YB.key}`),
          style: sB,
          children: [(0, iB.jsx)("span", {
            className: "SecretSantaDistrictBannerIcon",
            children: (0, iB.jsx)(cB.b, {
              name: HB(YB.key)
            })
          }), GB(`secretSantaHud:district_${YB.key}`)]
        }, YB.seq) : null
      }));
    var tB = GB(2063),
      BO = GB(1260);
    const OO = "\x01",
      GO = "\x02";

    function YO(BB) {
      let {
        scarf: OB,
        className: GB
      } = BB;
      const {
        t: YB
      } = (0, zB.H)();
      return (0, iB.jsxs)("span", {
        className: yB()("SecretSantaScarf", `Scarf-${OB}`, GB),
        children: [(0, iB.jsx)("span", {
          className: "SecretSantaScarfSwatch"
        }), YB(`secretSantaHud:scarfName_${OB}`)]
      })
    }
    const DO = {
      santa: "hat-santa",
      elf: "hat-wizard",
      bobble: "hat-winter",
      antlers: "deer"
    };

    function QO(BB) {
      let {
        hat: OB,
        className: GB
      } = BB;
      const {
        t: YB
      } = (0, zB.H)();
      return (0, iB.jsxs)("span", {
        className: yB()("SecretSantaHat", `Hat-${OB}`, GB),
        children: [(0, iB.jsx)(cB.b, {
          name: DO[OB]
        }), " ", YB(`secretSantaHud:hatName_${OB}`)]
      })
    }

    function oO(BB) {
      let {
        scarf: OB,
        hat: GB
      } = BB;
      const {
        t: YB
      } = (0, zB.H)();
      return (0, iB.jsx)(iB.Fragment, {
        children: jO(YB("secretSantaHud:lookName", {
          scarf: OO,
          hat: GO
        }), (0, iB.jsx)(YO, {
          scarf: OB
        }), (0, iB.jsx)(QO, {
          hat: GB
        }))
      })
    }

    function jO(BB) {
      for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
      const DB = [];
      return BB.split(OO).forEach(((BB, OB) => {
        OB > 0 && DB.push(GB[0]), BB.split(GO).forEach(((BB, OB) => {
          OB > 0 && DB.push(GB[1]), DB.push(BB)
        }))
      })), DB.map(((BB, OB) => (0, iB.jsx)(QB.Fragment, {
        children: BB
      }, OB)))
    }
    const yO = {
        circle: {
          icon: TB,
          text: "secretSantaHud:circleNote"
        },
        lit: {
          icon: bB,
          text: "secretSantaHud:targetLit"
        }
      },
      JO = (0, QB.memo)((function(BB) {
        var OB, GB, YB;
        let {
          controller: DB,
          market: oB,
          hint: jB,
          nextHintAt: JB,
          pulse: MB
        } = BB;
        const {
          t: PB
        } = (0, zB.H)(), lB = (0, tB.g)("hiddenPlayerNames"), pB = null !== (OB = null === jB || void 0 === jB ? void 0 : jB.santaHintState) && void 0 !== OB ? OB : "none", qB = null !== (GB = null === jB || void 0 === jB ? void 0 : jB.santaHintTargetName) && void 0 !== GB ? GB : null, ZB = null !== qB && (0, iB.jsx)("span", {
          className: "SecretSantaTargetName",
          children: (0, BO.g)(qB, lB)
        }), NB = "hunting" === pB && null !== jB, RB = NB && !0 === jB.santaHintTreeLit, WB = function(BB, OB) {
          const [GB, YB] = (0, QB.useState)(null);
          OB && (null === GB || void 0 === GB ? void 0 : GB.contract) !== BB && YB({
            contract: BB,
            until: performance.now() + 8e3
          });
          const DB = (null === GB || void 0 === GB ? void 0 : GB.contract) === BB ? GB.until : 0,
            oB = (0, hB.k)(DB);
          0 !== DB && 0 === oB && YB({
            contract: BB,
            until: 0
          });
          return OB && oB > 0
        }(null !== (YB = null === jB || void 0 === jB ? void 0 : jB.santaHintContract) && void 0 !== YB ? YB : 0, NB && jB.santaHintCircleR > 0 && !RB);
        let AB, VB = `${pB}-${null!==qB&&void 0!==qB?qB:""}`;
        if (jB && "none" !== pB && ZB)
          if ("lost" === pB) AB = (0, iB.jsxs)(iB.Fragment, {
            children: [(0, iB.jsx)(cB.b, {
              name: "snowflake",
              className: "SecretSantaLostLineIcon"
            }), " ", jO(PB("secretSantaHud:lostLine", {
              name: OO
            }), ZB)]
          });
          else if (null !== jB.santaHintScarf) {
          var SB, nB;
          VB += `-scarf-${jB.santaHintScarf}-${null!==(SB=jB.santaHintHat)&&void 0!==SB?SB:""}`, AB = jO(PB("secretSantaHud:lookingFor", {
            name: OO,
            clue: GO
          }), ZB, (0, iB.jsx)(PO, {
            scarf: jB.santaHintScarf,
            hat: null !== (nB = jB.santaHintHat) && void 0 !== nB ? nB : null
          }))
        } else {
          const BB = null === oB || void 0 === oB ? void 0 : oB.santaMarketDistricts[jB.santaHintDistrict];
          VB += `-district-${null!==BB&&void 0!==BB?BB:"?"}`, AB = jO(PB("secretSantaHud:findIn", {
            name: OO,
            district: GO
          }), ZB, (0, iB.jsxs)("span", {
            className: yB()("SecretSantaClueChip", "SecretSantaDistrictName", void 0 !== BB && `District-${BB}`),
            children: [(0, iB.jsx)(cB.b, {
              name: HB(BB)
            }), " ", void 0 !== BB ? PB(`secretSantaHud:district_${BB}`) : "?"]
          }))
        } else AB = PB("secretSantaHud:finding");
        const [UB, fB] = (0, QB.useState)({
          key: VB,
          pulse: MB
        });
        UB.key !== VB && fB({
          key: VB,
          pulse: MB
        });
        const kB = UB.key === VB && MB !== UB.pulse;
        return (0, iB.jsxs)("div", {
          className: yB()("SecretSantaTarget", `State-${pB}`),
          children: [AB, "hunting" === pB && (0, iB.jsxs)(iB.Fragment, {
            children: [(0, iB.jsx)(MO, {
              controller: DB,
              nextHintAt: JB,
              note: RB ? "lit" : WB ? "circle" : null
            }), kB && (0, iB.jsx)("div", {
              className: "SecretSantaClueFlash",
              "aria-hidden": "true"
            }, MB)]
          })]
        }, VB)
      }));

    function MO(BB) {
      let {
        controller: OB,
        nextHintAt: GB,
        note: YB
      } = BB;
      const {
        t: DB
      } = (0, zB.H)(), oB = (0, hB.k)(GB), [jB, yB] = (0, QB.useState)(null), [JB, MB] = (0, QB.useState)(null);
      (0, QB.useLayoutEffect)((() => {
        if (!jB) return;
        const BB = () => {
          const BB = jB.offsetWidth,
            OB = jB.offsetHeight;
          MB((GB => GB && GB.width === BB && GB.height === OB ? GB : {
            width: BB,
            height: OB
          }))
        };
        BB();
        const OB = new ResizeObserver(BB);
        return OB.observe(jB), () => {
          OB.disconnect()
        }
      }), [jB]);
      return (0, iB.jsxs)(iB.Fragment, {
        children: [(0, iB.jsx)("div", {
          ref: yB,
          className: "SecretSantaClueCountdown",
          "aria-hidden": "true",
          children: JB && JB.width > 8 && JB.height > 8 && (0, iB.jsx)("svg", {
            viewBox: `0 0 ${JB.width} ${JB.height}`,
            children: (0, iB.jsx)("path", {
              ref: OB.bindCountdown,
              d: `M${JB.width/2} 2H${JB.width-2}V${JB.height-2}H2V2Z`,
              pathLength: 1,
              strokeWidth: 4,
              style: {
                strokeDasharray: 1,
                strokeDashoffset: 1
              }
            })
          })
        }), null === YB ? (0, iB.jsxs)("div", {
          className: "SecretSantaClueTimer",
          children: [(0, iB.jsx)(cB.b, {
            name: "arrows-rotate"
          }), " ", DB("secretSantaHud:mapUpdateIn", {
            seconds: Math.max(1, oB)
          })]
        }) : (0, iB.jsx)(zO, {
          kind: YB
        }, YB)]
      })
    }

    function PO(BB) {
      let {
        scarf: OB,
        hat: GB
      } = BB;
      return (0, iB.jsxs)(iB.Fragment, {
        children: [(0, iB.jsx)(YO, {
          scarf: OB,
          className: "SecretSantaClueChip"
        }), null !== GB && (0, iB.jsxs)(iB.Fragment, {
          children: [(0, iB.jsx)("span", {
            className: "SecretSantaClueJoin",
            children: "+"
          }), (0, iB.jsx)(QO, {
            hat: GB,
            className: "SecretSantaClueChip"
          })]
        })]
      })
    }

    function zO(BB) {
      let {
        kind: OB
      } = BB;
      const {
        t: GB
      } = (0, zB.H)(), {
        icon: YB,
        text: DB
      } = yO[OB];
      return (0, iB.jsxs)("div", {
        className: yB()("SecretSantaClueTimer", "SecretSantaClueNote", `Note-${OB}`),
        children: [(0, iB.jsx)("span", {
          className: "SecretSantaClueNoteIcon",
          children: (0, iB.jsx)(cB.b, {
            name: YB
          })
        }), " ", GB(DB)]
      })
    }

    function lO(BB) {
      let {
        litAt: OB,
        hunters: GB
      } = BB;
      const {
        t: YB
      } = (0, zB.H)(), DB = (0, hB.k)(OB);
      return (0, iB.jsxs)("span", {
        className: yB()("SecretSantaHuntedBanner", "SecretSantaTreeLights", {
          Lit: DB <= 0
        }),
        children: [(0, iB.jsx)("span", {
          className: "SecretSantaTreeLightsIcon",
          children: (0, iB.jsx)(cB.b, {
            name: bB
          })
        }), " ", DB > 0 ? YB("secretSantaHud:treeLightsOn", {
          seconds: DB
        }) : YB(GB > 1 ? "secretSantaHud:treeLit2" : "secretSantaHud:treeLit")]
      })
    }

    function pO(BB) {
      let {
        on: OB
      } = BB;
      return (0, iB.jsx)("span", {
        className: yB()("SecretSantaTreeLightString", {
          On: OB
        }),
        "aria-hidden": "true"
      })
    }
    const qO = (0, QB.memo)((function(BB) {
      var OB, GB;
      let {
        controller: YB,
        market: QB,
        hint: oB,
        pulse: jB,
        treeLightsOn: JB
      } = BB;
      const {
        t: MB
      } = (0, zB.H)(), PB = null !== (OB = null === oB || void 0 === oB ? void 0 : oB.santaHintState) && void 0 !== OB ? OB : "none", lB = "hunting" === PB && oB ? oB.santaHintDistrict : -1, pB = null !== (GB = null === QB || void 0 === QB ? void 0 : QB.santaMarketDistricts) && void 0 !== GB ? GB : DB, qB = "hunting" === PB && QB && oB ? function(BB, OB) {
        const {
          santaHintCircleX: GB,
          santaHintCircleZ: YB,
          santaHintCircleR: DB,
          santaHintContract: QB
        } = OB;
        if (null === GB || null === YB || DB <= 0) return null;
        const [oB, jB] = WB(BB, GB, YB), yB = 200 * DB / BB.santaMarketSize, JB = ZO(oB), MB = Math.sqrt(Math.max(0, (yB / 2) ** 2 - (JB - oB) ** 2)), PB = ZO(jB - MB >= 9 ? jB - MB : jB + MB);
        return {
          left: oB,
          top: jB,
          size: yB,
          contract: QB,
          badgeLeft: JB,
          badgeTop: PB
        }
      }(QB, oB) : null;
      return (0, iB.jsxs)("div", {
        ref: YB.bindMap,
        className: yB()("SecretSantaMinimap", `State-${PB}`, {
          WithCircle: null !== qB
        }),
        children: [(0, iB.jsx)("img", {
          className: "SecretSantaMinimapTerrain",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAACAASURBVHictZx5XJTV9/jfAzOAwKCmKeASZBjuioqofbSEQBFZRDQR17TcklKzj2buS7lUVGqmWeaWogKCbEIu5YZK7qamgMKgmBujCAwwvz8enofnmRnQvr/v97xe87rz3Oeeu5x77rnnnnPuo8opLDZiAm7OWr72eIXQ3y/i5qylXa8uXDr2Jz0G9mVxwV0+a9aUw1+0pO8nt+jsnc/ZrOYMv5Yrle8xsC+dvfNps7XCLC88TmMR3171MSXGlbXWb6/6mNn5My2+M8VxcrzKhpjrijFptVr0er3pUAG4dvUyrV9va/FdbaAyGo3GgMBgKSN0cATxe2OJjBpDSclT4vfGorGxwVBejsbGRoEcMTSS2F3bpWdDeTmAopylvLogYmgkgKLeF3lfW18sgTjGFwHTsqGDI7C3dxAIl3tHz4rlC+usYNbs+VIZ+X9L5YDn1vdvobY26+rLv6n3Reu5cf0a6zdtEwg3OXomN65fIy15n1nB2N27iRgypNaKJkfPfO4gTPMtlbtx/RrpKYkYjUYCwk+Qtkec5dUEhJ8gfW9PJk2b8dy6/69AbKdHj16s+G6xknDz7vyNR9phqfDOYm+sUmfy8MjPvPddMk2O36aoZwvp/dFQFZ2CUzFG9EIVe8xievCPU/gOCkFVZgBgSNh6dm4bzLARe/l6VU++W7eRuddOszdsHI2cbLCydbK4jP6+0YDu3a2lsvv2VUr17Nw2GKuGrgBkJiZw5tQJvv/ua/6+cYNxWUUsbVFJ46pjL0ykJo2dCDvXiU3eTRiXVcQm7yasjlkLwK28XJp1+RO1HMGUaMOcsohll1DZ8duk2t6j/8teFN27x+6AHCZne5PzcAgqQDU6BKOtRkp5bwj8sBtcNABCHrBz22Cs7V8mNnkqhQX5PHxwnzy/xqxf+x0uzSfh7Z1DK4/WZjMdPNCdpctWkTfajSdP9OyO+wijrYbdce8zJGw9sclTUZUZ8PMPxFBejtFoJOdhKcvbV+FpnckXj8NemHCPr+QT1+kcjxuO5ucAV8aknaWd7H14nAYrS4gi0eRQ1LMFXl5epKalsTsghyFp7gCk7onFvaEdbs5a3LPukjzjXdxP38O9oR2vfhIlcVtmYgIAw0bslYioKhe4cMqvhRJRTUFchl9+c5KysmdE776neG+01Uh4GenJGG01GNVq+hdBYUF+NdF8qe/S/IV/Lbv6MOfK69S/sxmATd5NpPYM5eX4n/1LyXEAc2Lbs3HyXRYP64YKFQCFj0r4YWqgVGZu9imK7gkDMKrV5N6p3uY7vUSXGQvJdW0Ad/S4OWvNJ6V6kKoyA87u7oQMHU6bmEVciV7CsBF78fa2NJWQnrKAtCMDaBOzCLvwiBrilxkYNmIvsclT8R0UIk1QahM4VgRF/xRTv2Vzi3VeTI5j+6ThLMsrNXtX37U5Rf+cwtYZxmUVKTgu945eyXGFhYV88MYBdnzVl5f6jKVhnzE07DMGlwb20v+GfcYwcvXLFBYWWuyMi6t5J00HKYcBIWH8NWUOA0LC2LltsLQrm8KwEXsZEBLGleh5OLu7K+qWT4bvoBAunMmifxG4NGvOT5q6l2iIoc7XqMoMbPJuIvVLY2PDwMF9zDkOoK3vt7ic0VHY1ZU/fv8dgMffv8LAbS0BeINMXEqWAb/W3Wp1wxnpyVw8f5bYhFd4yaU37g3tADupzKTxIwEIGF8EFLF+Tc1OeSsvF4P1TF5yMeLe0I7JY4abtSHiRYTk4TsohA5dvUm9eRKVW1vqu1jmtmuH09nw7nAin9N/o62GcYeK2Pzmy8yaPZ+pE8fyRkBxDeFCB0fgUrKMQvs5ABR2dSVnxBCYGA3AwG0t2fdkIMGO+4X39nNocu4xDja21NuRTuWwnljvPK5ISXtAxt0T+A4K4eL5s+z+uR16vV5a2o0chLbvPxU0+90/t0Or1TI5eqZCzXhRvJyHnc0GTVnNs7g0QwyQMEpQ+hOAEFc7EjRYXLJUyzi5ynM2q3nNUo3fGysRTQT3bbsBmLvzFIBENAk61ceoUVP8rITYxVNwsrNHq9VK6fUzR5gw+h2puH9oHKHDExXP/qFxiueA8BNQvSnMmj2fiKGR/wpPhByfHhQW5DOxZLOU1z4wjMh1O3DYuIPIdcIvxID0XBuMyypSPC8uuFvDca08WjPrv3MJfskNqze7YzizF3WPoagcXmLdxi0YzuxF03UwRrUaVUUFRrWaY1nn6B8eQcrTOKLbFrO55BnG1IPQGEg9yNP6xRiNRolT0uPD0Ov1lAOFunyC6+/Gyc4WEOTQT2u82bfqY449+IZ+jtOxCe/D445uHN/ZFF35vFrx0uPD0Gq1bPxlJ76DQgDoXwTzEDYHWtYMun1gjcy7mBxnlmcKooxbfbwm77NmTZUybv2mbVSW3CPtyEmmBRST6xOE0VZDSkIc0wKKyekbIVVmtNUIaTXuN2lODFoWKL0DSP5gFjTzJaP4PTr36Il/aByVFc/YtTMSF9fm7L7bD4CB1XWMnZKFvcOHqCui0fSNYGxeLORVsjW8C5BYK55/aBxODVrz/Ublrno8/zmSH4QlWsd7UcbJd9XDX7RU7qorli9EFXtMIoRIHPFZXpk8BZi27lWzPHq+DiDocoYK0uPDiN8xSHp9KPVdDqW+Kz2nx4eRuc+XVh6tuXDhHK08WqOxsSEzKfK5eGl7fKS2qOY4F9fmXCrprliuchCXrik8Lsznk/qZPHQIAhM9DqDvJ7dqOO5WXi5J8bvhwG0mv92C0m7J2DW0gwP3hJ1szGlyHqLgKFWZgcO/HWDymOGsGL+dWRvt4MBteLsFHLjNlClT4EAwmYkJqOvVU3Ac1cJdDiLnyHdVMf9F8MRdFSCtqQoKi/Hy9uFgFgy2/1Yq36SxE9/bj5aI97gwn7GGOMX7vyp9cXEXdmRTPa6zdz7q+A6toV8wEUMj0ev1qP++SF6Lp+z7+hGTvqp5To+5yaBl1CxRW43w06jR6XR0Pn1dwq/waSDhtfFvQ05hcXWTB1k27wgpSfYY1TVSQpSZ70VVsidhFSuWuymtLHn7uHa1AcmpTmY4qooK3ouq5NylBEDYVW2srGj74VJpgrt26orunxq15OEzA8OdkSbf+Hpz7uQEYbTRoCo38PAZuLo2lcSQqYw7m9Ucle+IQcbWjVpz4/o1tsfWWEd0ugJcXZtJz40cIOehcrtWlRlITk1iWMRw9Ho9Wq35SaGRg6BpH/r9IDt+bYLRaCR9b0+zcoC0M7ZqvlvKE/W4F8Fbv0bgC6OthqqHOqztX1aKDpQrpi4QRZTRViOcVY/vlvrztGIM6oytHkyOFvQ4uYVUq3VSPDdy0JotUxHEcpYsrI0ctGSkJ6OuV+9f6HG7FXW8uB5XSmZiAr6DQhiXJSitpoT6nxBSznGG8nIOJgdh5RclmJhFU07TuD8ofVTA/unjaOQgPIsdlYO4VEWoC0+UO/8Tfezf4InWkSMpyRx+x4eJVlrcnLVMMtjh3tBOkcrhcEa62Xs3Zy0TrbS4N7RjiuOrivK5d/RY9fa9ocisiHqDVw7m4PnuRH55fxwVUW+g3vqHRCwRVGUGBdfVhSeCfFcV9bGopjUE+WmNN74Nl6J7MAXP8hvMPZ2Jv0slx3ceqxNP3FXlk6nX6ym+kGsxNVbBpinBbJoSzI/TwzmycWmd5eUQOrhaJfMdMci4cdU2UpLiGRAUqihUqMuXDu1uzlpJxsnXf0pCHIH9g56LdzgjnfXfP1LsjuHhPwKwZ8+7aLVagoJ/wd6hGeqKGEV9D58KGltdeIIe11kyZC75/CtqA3ElvDUskIM7k0k/fJKu3XrUWV50L4imc3XG1n2IFmBTwlmydMhBznF14WUmJnDx/FnS4+dIJweq9TFk6oV4ApgcnSLh3srLJXNn5Avh5TwsxXdQCOVVVbV6tAAcHbR079Od80f68J9wfx4U3mP/3iO1lm/koDUzz0sKsMbGhno70rGp0ltMAYw/7KbqoY6qzQlUltyjanMC9Yylz8WrTcbdf6rUyV5Uxj0P78IZwQgbeem+Qu5GXrovcdu+Xb/Rsc8RMvaks2j2yueWNwXFkcvJzp4KrRa1hRRA9d4QfktMwFeWWqUk42RXr268MgMfzpzD16uW0blHT75YOo8OXWsslhfOZNGxkxcnfhtd7axB5qzZjW9wJr8l+vHF0r8AJFyRQD262AFXJD1u1qLlJCfEEQXExGfRsV8wW/YkEQXMis+iQ1dvbt/4m4F9g0lKO4SLuxspSfF0OpfNwU5eqPwHs3VnPFFqNVtuC+2orKwVhJOcNVQviyEjRqEyVGDUKE11Z08eJ/pTQSnNTEzAzz9QEsRHUpLNysvx2nfsLJnQRQU6Iz1Z4kQRUvfE1urvfLVVKz75dJHUpqh2mPZFDuK51bSdunDFvIz0ZAlXzAN4f9yIGveg3K86a/Z8xemgtoZMG33ec20DMq27Nh/nxwuWSGVN65G3I9+4xDGI5SwRUT4+07HK05UL5oIlv2qPHr2wjulE1PGP2NrzK7O0dMppiw2bEti0g7UpmKb5YseeB7Nmz7fIrXKuMOWg2ghmCSxNjiXCSesrdtd2epZoKD37mLySy4oU4NLnj5gRs4XVvavT6JFm6fC5G6n0/IWeXhuBYfiNGMQ7AVHSzPXo+xa7ZkcBYKuxRnvyOlcDhJ3cq2t3xQBNBywOYEX1ABIP/ZeOpR5SXc6+YyTuKq+qYvKY08Bq/ty2iOnrEln1Tlemr0vky0mD6kz/3LaIt97ozpeTBtE2eDJTptwEhpkRWOGQlp9V5SCeU+XLQKpAxjmFBflMmRbF2lU/4eXVBoAtMuNidtYJhvR/i/PX8sFGw7ovV5gRzRLBTN9lnxEs0pOmfkT2qZOMGRHOzQfPpP6tX/M1wWFDcNQ60cGjGevGeTNpU5aUzhjYhtX7r0hjMH0vTztP3UxPrzZSxILFEIj1m7ZZJJxc+ZUTzJSIIvEKC/IBaHH/Y14e8LuCY8aNa8WmTTdYuWCuRDBM5J0pweQglz3ZZ07x8YIlxHR+jeizfyv6oCo3MGr8EE78fkmBf+i3DMIH+QEwwdeTDZnCTm1qqqKaYY5nX+HDzybS9bXuCsKZOaSddUGsfTOW/dPHse3tQzjrghSEQsZlcoEsvndp1hwvbx+6durKjiXjFQIcIPRKPYloIlHk3JSZmCARR8yX/+QE9uranZUL5nJ7gK0C37VxUyqfPeCjaXMpe6xj2dA2lD3WMeGtloQP8mNKQDsm+Hpio7ZmdN/WEpHEcmK6dmx3jDYaPJ+Yu0IlGbd+0zbeHzcCzXlPApfUQ1URzEv9HrHp/ERU2VvoHx4hIckJZkpA+W42I2YLhm4ZChxRpsmJBdDiNQ8CenmZdXD8qBr5Iud6OW5T2zApz3dQCEZgx6L36D5+OVqtVpCn1SavGzdvAmCjFvQyRzsNE3w9Wfrr79LyFcurVCpcmjVn3k+pWNu/rNjpJY5bsXwhDo6O7C/4gQEhYfQPj6B/eIT0PyUhDvdbZbg3/JSj/QuEsIe7Vbg3/NSMoGK6OnqkxYF6de2uWIpbvv+OgF5e6HQ6egzsS7eAN/CLCgZm8NawQP4T7o9er8e9oZ2CG5HJRz//QPz8A6V6p6+rOWmI4OnqxLGjR3lv5Q7WpF1iTZqwjDdk/kVaairv9HQjLi7ODO/LSYNqP3IBOLu4MtRtlqKASLDJXQLRvfyUVZ0CuVOaK7zsVJ+lHd7EveGnuN8qU+CpygzMiNmiWOIrF8zl4wVLJIIBXLtymXmzZ9Klnw/BY4di7+iAtoETZc9KeWvYFaw1an7f04GwiZH0GNhX4kC5PPTq2p0VyxeSkZ6Mn7/gMPpy0iAsQWhoKAvHB3Hu/HnOnT/PmrRLDPZuSWhoKK82dcTPz88MR5wEeZSBVcc+3RWFVv9wlG96b0Zz2o9vem/G+uYiSq2nonv5Ka6urrz/hzdlVSXo9XqWdkikvqYxev0CAAVe2lpvWvgflbjPVK0A0BXcJqCXF3/9JQhoa7U11mpr8q/n8fueDhzcKezMflHXydjWGm0DJ4nzTOtSTHZSPGvTL7Pn8w8sEs/T1Ynz586xcHwQW7ZswdPVyWI5gKqHOsUkREaN4e1AH6xSKysUBZcl+VD29nWWJflw2W0/7y8KZOnQgWwfcAWdTifIDCvB4Vxf05jRh9sL8bWvWvHVjnck/L2nPTAajaxcMFf6YUG26XQ6hr4nLGl7RweKbt9h0cjGlF6scQKXPSvFL+o6qFQEjgmX8k134uwzp1ixfCHxe2MxGo20eCOCIcNGWCRIaGgonq5OhIaGWnyv1WrZ/6Alq2PWYvQcIHFb7K7trKmqxGqUewsFgpwdQwdHUPTT2yy+/A6PDffYPuAKer1e4jiJaHo9m/tehE6LFHVt7XHDYr1yKC4WHDnlpWXcL7xHPa09C3c8wM6xRs2xrVdjsVXLnDzyXda0jXXjBENAK4/WnMeT4SPH8vrQRQwfOZbzeLI38YDZszwNCh1Cy1fcpPrkMu6zZk1RGY3TjZOjVWYDmjV7Pu+PG8FPG7+XiKPVaikoKMDTbQ3f9YrkseEfbK3sKasqwdbKHmc7N475rINqfSdt+RYmb1qsqFdUQzITE2jxmgcld/NYu7kBubemcj27f03B3Ifg7AB2QtC134hrZPzoht/4PDK27lP4F0SdToQb16+R9t5TJh/sIo3lfyvctUePXgzrGFfjcxBnyzT4eZ3fEb7pdUhKtw0+y6zOXWjabxbTjr3JzHO+Uhp1spXFCZCDfHmdPPwbAP8Uzwag9GIRRScKKDpRIDz//UixZHlSs9GY6nT/W1DbyhDfxe7aTt9PbtX4HERCya0kAB9sigdgUkYfph17k1knB/Lhb/05lTQWgFWdMvmm1yGh5nOPlS11qv/cmW7Tpg2zBtkC0GFUNr0nX6D35Av8/fdj7No34fuwI3h4pYJKxVtTbvHo3oMXo0BopvT3RbnteURbsXwhEUMj6eydj9XRzFYWkcXGnPKmEB7rIS3Tb3odqt4YXkar1RKZ0gZbK3s+a/trnTJOBDmn9OjbDycnJxzsBbnl2EDLopGNAWjuLBhBd7R2Y1ZJCRgF97B1teJaF5eFDo6QZNy/IdaK5QtrJbKYH7truxDm5aiKUSDH9NvOnKAT2B7w4MePHjBkxlbczt2joKCAPRHXKa18il6vp7TyKTqdDldXVyJT2rD48inWz0vG9oAHc4JOoDnvwsis1/h4wRLph4WlqtVqce6yHIAnj/RcP/kIGzsbOozKxsMrlWf6EiacDUL/qBj9o2LiNuyQJsASEcSxTP7pFDOiJ6P6K6XOdOVonxcqJwd71ceo47e418TwAjNitlDRIYXo38BgO5rAJYIm7VaxlMeGt/jslHD0srN2YPuAK0SmwEu/3wDPefh/tJSAyQYqiOTbCxroUPtMZyYmMHLiVGbNmc2KZYuwsbOhvLScLdcE9cjGzgZrtZpv3m9El8Aawe/q6sqi5asYOXGqxXqNthr6h0fwXVkxVg1dmfnrGQCz9OPNJzDaahT5qjKDWbl+09fwWqtW0h0L0SGtMJ3Pmj2fmH7bmXZUCEgRz5wpCQLxxnVLpvjUCCoCOrLO7wgfbIqnSb31rP1TMDMH9g9SnFvVFwZg6JahEODy04OYn5IQx8jwIK5cucKoqe9SWVGFYwMt9bQOPHkoqCu7ftiCp6cnaceyad2mrVmdouVa5MQ/ty1i4g8H2TLzHVzsHvPUqglRXwhXD/RlzxT5I74WxvekuNgsX1Vm4NQfaXR/I0DhHpRM51Sv4zlBJ6SDuSmIBEQW9EJ1ADQmtjnR9nbzwbManDKDJCtE4okELK+qYmR4kOAILi7myhXhwN2mTRucnJxwdXUl7Vg2t/++btGkbWpar3qow6qhK0/+uY++7BlarROOTk5SP5JTkyjLXMVHW85YtMO9MT9JKr/qna4YPQeAJQuwOKDV0SOZdtTctK0qM0gEwsQel7onVgiArhrKlp6r0b/2KU5/L8eY/zY0tJOMoEZbDXfL4sysGeJgj124LNV/4S9hY7Fv+go8KOFC7h1at2lL6zY1t/xE7no9LR5kE0H1wXzmr2cEgjVupHhntNXgYGNLvr4MvV7P7QclihTA0clJ6vP0dYmsjlkr6baYerkAieNMDZV1BaeYevMtefJF/H092xNy6E9WLF+o4BJTYW9q0JTny7nt4wVLmDm7HasXnFWYtEyjlUzHk5IQx7AI8wh2TCzeRluNRY5TWEee6PXcbrQB94af4uasZfyMSAXRRINlbR58EUw9+WL57KwTfHj1BkZbDR8vWMLKBXMljV9u1JQbMMVnOWdmnzklES076wR7198088x9OWkQun/ucicnRxrPyCnhkoGA6vgSSz/TMVsyUZlZgCfPHMvx7PGUAfu3JaI57UdMv+1Sqr4wQHoWrSEH5h3nx377sb82wCzd0uO6NJjWnm0Z6+/NpinBbPswjLtlgsxcuWCugvMsWYCp5j5RprVM2cumKcGc3byMiQN7kZmYoNgcpq9LZP2UQMV4tqzZw3/C/QUOevpA4q7Vo7uxf/o4fpjYU/LcV5bcY9U7XaksuWfRRGW2VKMmTCRxp6ArBYcN4dLF82b+UdNleyQlmfzlGmZsXsXq0TMV6e5Jm+id2kxy3+nLajYLRycnMwfM80C+qSTtEvr5Zv+BkiCX9y8zMYF27Tuiu3cXANeXm/LHkYMMGT1O2pAunMlSRBVQHSEgd34j29jMnDXyjpkGEIp+TLmX21RzP5yRrpyR6mgAMQJAXK5yXJGz5AOVE1B+OBeNA6bmedP+yf25omGTWmS1vH2xzPP8qrfyculy9rjlK0m1eb9NPfVysPiuwiCFTcgj2E3rFcMN/PwDJcKZWjRMiYYF16GffyBGmUwV+yTKZTkh5XXK+4AJx1o62qW3e81cxpkSTGwoMzGBjPRkRaeQCfO6CCPWWRvRxTrknTc9M5pymukOL+IfSUnmSXAv3Jy1PAnuhXtDO+nZ57slZn0Qr2rKNyA50Swd7Q5/0VK5VMXr3SEtW5oVBki4dYuvX29F+LfOLBl3k6kujagyQsdTFyyWp0q4L5XzeJfEEeoLA4jeU0hMuIvFtKltmEX72ZygE3XirVouOF5ili7kjdTdBBzPJq2nlyK9/KYPB9pbHltdoLW346qNYAy5lZfLPcM982il3MOZXHr0SEG8iqoq9ufnE9KyJV+dvQrVG8IwzxiKn1RS0loIBHTWBZE0Ske3jGy0Wi0He3jgaW+H475j0iymHJvDquWXzDgIQHPaj4oOKVLgDTLOu1sWJxHHFDSn/UgtFPwLdUVjNnKAn2P3MWbIPuaEneD1oYsYPTyZOWEn6DvrFxrmvk8jn51meDsWTkHXoJ1EI8XVcvFKoa21Ne0aNCDh1i1CWraUiObn6kqvtztiG9ST3R3dmBZQzIq1TvTOvkGz6hWWNEpH0C+u3KmuM+gXV+w61yfncU10U3+XbzGYRBNRrZBOGXsUo1HL2v9eZv83AreujTkIhYGoXG+yarlyQCJ+9J5CVi8QREdd0ZiNHLT09fMn7Xhzhq9ciFbrRNpxN4bHLEOvL8bt7WT0ej1/BgcAEHA8W7rQLELE0EjWbrPAcYV/CEZJe7UatUowqTuo1aitrKioqiJw8QqpEv8mQqyu2usAABXZb5O2tQUDv9yk4DiHtFOScBY5DgtyK/2rLuw97WHxuyCPK7L49ZfrZgSnmuPE005yahKB/YNo5ADbunWksms3mp4/S8BxYRWkHcsmoNcGPn/nBF2m/Sj9H/hFGs+ODnwhjpuWexHV1javGo++HWZGOCeNhqcVFcyf0J4N225KlYhL9XBGOo4LZ1BSWUWfg2cp1OWTvWoeAVG3UXsdQKvV4nC1L3ad67Nx6whpo5APEpPYk5mz20nnWFOYE3SCig41scGmePLJSE5N4tSnH9F96VcKY8SxX1bh2aIJ/xQ/RVvPDluNteJ/maGSMkOFWdtO9rYS4Xr06MXabTGof/JqR2uTghVVVRy6c4c3nZ2Z98MFsu/fJ6BZM/r176Jcqj6e9M4WDuMurs0JiLrN2Vn3EY0rSaN0eNo/wDetZndNOVbIew6XebOXF7bV7YmhDTHhLixLqumH/GMq0Qs6s6pbzc4tJ3xMuAupshgVGysr5v5+TPqkhli+c7caH7Kq3IDRRvlRBfFZDqpyA2kRAyBIIFzsru3irlrj5bqVl8vtI79x/uFDOjZsiNpK0FbKKiu59OgRA5s3VyxVq+XCxeD+h88DcNrPS5BxrkkKjst5vEvCubmnF4+aruCTGR9Kec+ePeOP85eey3GGbhlkZ50gvP0KsIIcO+F+v/yQL6oPT5d9SvDxi0oimCj2tZ2GTEVI1UOd9N0RkeMkLxfV1s3zDx/SrkEDAnw7S0QL9OtCuwYN2J+fz4CQMAaEhOFgY8uYHS0ZvKHmvle3jGzuuAosc+3qFep1PcJFnxyFfrdk/12e6IspKXkCQEVFBftCK3H/2YuYcJdaHSbRe2oihvIvF0NVzbuYcBfpv6iLBSWnm1YhEQULCrmlq1ZimaRAfykvdtd24fZgb98b3DsrLNZWHq0Zc64p3gtXMqnxz2wO+4GSkqdMavwz7cJ+5Gl5mVR5nwGB/JohyI5n1+IVN6elho1GPpw5m/bVGrvRVsPcgU25VvIUa2s1JSVP0GhsCI635tPFn5G5Zy5Nkyx/vykm3AVD9U3Ak+eWcPIieHnXEHVVN+Uyi+3vx9Nur0nPthprRnwdR0pCnOyDCMqrSZbz7Ij+S4i9EzfRs1nNUR/NbEVrmZ1v8c+vsa9ALd14TkmIk/6bQl8/f7M8EVIS4iDel+hP90uWC4C1px/j66Nmzmfzsbd3wFHrRNHdQvqHhBHcbI0k40yDqKP3FLKgdTEJ80ZLJnCql1JMvUGFXAAABaFJREFUuAsVJptNRGoGJdaOUG5uArtwXXkz8nng6IAkjw3l5ZxMPoxVxlZl+OqeDwQtbMj5XClP/h8LbC230Zkeu0zPezHhLgT2D+LVtu1wbPQSjo1ekm70yJcjJscucTmWGSrNwslEPPlxKinQH61tPRwbN5J+ctDpCjDa8tyfgwM8MYnWlD7YIsqVW3m5RF9uS9dvl7C1TXOeBnRncugWtrZpjnv9oTwNUEY2mQ5AQdSKCi4uK1KcVzMTE4jeU4jRVkPrNm3x8vZRmMJF4liSc3KimhpWY8JdpHOuuDmoP/gId5fao5AACguKUJVR60+rhifm2olQPyYzW3r2MVdLSpnW7i5JJ0ppcr6Yae3KKT1bT9FpEZ4UFysiyUWPkVGtpsOpi2yQGSVVZQb6u3zLPoWcQZIrMy7do557IiuqTwjiaSZpbzlUtQV1EzpsTzfBmwHOf+BbbeoW21nY1UP6MFVdYHqhWQRHkdNsLaIpzUqG8nKevn6Ygafhjl7PW+8J4Z93WgsBN+2zkHywIgG1tvUYunyrWcUDQsIY49pUUVY8Hvn6QGl2X2kHpjqsamkfZ+w612fyR0KeOKEjZ53HUF7F53OUR6nPf+jC6KBEenop7YYA3eZ8xvyf2jEm9IwCR1VhzkI6XQEu7jXEc1SbL09TUCxVZHZ4S/8xOWOKqaOTE1rbemhta7iS6o1GBHGpistxwvY8s85M2J7HjG+umuVviHyFb4aYWzW+nyMEHvYY2LeGMNV9Or1ssVl5VZlBsevLobCgiLgPepAyvVety1MOZkuVakW284pGpG1twbszi6TDO86HFeVq83qJ+Xs+uEPw8RAyZNeTomfPwdcHfHTdzfA2RL6i4DhxqU7YnlfNccry07+9xtGMiRzZfxhd9ZVLqiet25zP6Lvue7YdUirUBfeL+U/vPmZtOzo54fNfc6dMbWCR/EG/uJI0Ske7GWX8uOo13v1FOD4NuVi7m9A0T1VmIPxbZ0yVgZhwF/YVwG/aE9IHV0SYsD2PJkdsofoQKE7ohshXBPOVrGyhLp9Wpzry5f4aTpRbeU8vW8xU3V2ObhJkrnis+vP8WbO+a7VO6P+5X1N3zvPVFYsf3rvjmkS3jGzcBhzBa+Yi6VnewbpchCJxRdVGtKoi2x23vf+qGd6GyFdYPe11s111wvY8pu2+pchzcW3OCddTHM8eL+WJMi4lKZ6fCu5QUFCA07gwerV/jT9Xz6enVxv6rFV+10b4aEMxpqDTFdQ6PkwJJ943N+2gHEQhX9sylcu/8G+dFfmi6sBzZJyp6KhNxm35XIjqEWWcGHEufgyw3EqL475j5N7RCx8EvKPHcV/NtzIdnZwEr5uNxuJP94/yY1SzZs9HY2PDjz6eNYSbNXs++5MSOPJWZ+yvDbCYUjEIzWk/9vVsX2uqvjBASvd8cEfhb8hITyZ6TyHWNxexeKa5uV3kOHmfIoZGWuQ4ANSJLP6yP9+OKFFMqr2DA0fe6oxNlV5Kr48IwqZKT2rfjlDNaU/+uS+cLOr4FebUcN6K5QsxlJezOLfAPHbE3toKJ0driylWKpYl+TDr0HwqgKsBC6noMJ+rAQuFo1IAZs+z/AOlG39U34IJmCzEYJgaLDU2LwPQ8hVlnx7mdSNiaKQUtyGHVh4RNOk3X9HGrbxcxlhbodVqsTdNraxqXZ61gU5XQCOPGpmXe0dv7le9lSccr0y/8Cx+2bnlK27/q8HI/+bbwfyLsNRbeblmX6Omehzbt/6syBNF1PO+Rt3KozW38nLJKbphHh/3f/Ex4ud9QNlSuy/aF1OCvkjd/z9tih+aVpUajcZaThUK8IsK5pec24xyb0HGVg/8oq7T2/cGRzNbUXYvit/Thr5ALf/zNh7m9OHM0ZkvUMu/h6NebemdfVnqw0v1/2TXmtt14vw/yyBkXSPPdJAAAAAASUVORK5CYII=",
          alt: "",
          draggable: !1
        }), (0, iB.jsx)("div", {
          className: "SecretSantaMinimapGrid",
          children: pB.map(((BB, OB) => (0, iB.jsxs)("div", {
            className: yB()("SecretSantaDistrict", `District-${BB}`, {
              Target: OB === lB
            }),
            "data-district": OB,
            children: [(0, iB.jsx)("span", {
              className: "SecretSantaDistrictIcon",
              children: (0, iB.jsx)(cB.b, {
                name: HB(BB)
              })
            }), (0, iB.jsx)("span", {
              className: "SecretSantaDistrictLabel",
              children: MB(`secretSantaHud:district_${BB}`)
            }), "greatTree" === BB && (0, iB.jsx)(pO, {
              on: JB
            })]
          }, BB)))
        }), lB >= 0 && (0, iB.jsx)("div", {
          className: "SecretSantaDistrictPulse",
          style: {
            left: lB % 3 * (100 / 3) + "%",
            top: Math.floor(lB / 3) * (100 / 3) + "%"
          }
        }, jB), qB && (0, iB.jsxs)("div", {
          className: "SecretSantaCircleClip",
          children: [(0, iB.jsx)("div", {
            className: "SecretSantaCircle",
            style: {
              left: `${qB.left}%`,
              top: `${qB.top}%`,
              width: `${qB.size}%`,
              height: `${qB.size}%`
            }
          }, qB.contract), (0, iB.jsx)("span", {
            className: "SecretSantaCircleBadge",
            style: {
              left: `${qB.badgeLeft}%`,
              top: `${qB.badgeTop}%`
            },
            children: (0, iB.jsx)(cB.b, {
              name: TB
            })
          }, `badge-${qB.contract}`)]
        }), (0, iB.jsx)("div", {
          className: "SecretSantaMinimapArrowClip",
          children: (0, iB.jsx)("div", {
            ref: YB.bindArrow,
            className: "SecretSantaMinimapArrow",
            children: (0, iB.jsxs)("svg", {
              viewBox: "0 2 20 20",
              children: [(0, iB.jsx)("path", {
                className: "SecretSantaMinimapArrowBody",
                d: "M10 1.5 14.2 6.4H5.8Z"
              }), (0, iB.jsx)("circle", {
                className: "SecretSantaMinimapArrowBody",
                cx: "10",
                cy: "12",
                r: "5"
              }), (0, iB.jsx)("circle", {
                className: "SecretSantaMinimapArrowDot",
                cx: "10",
                cy: "12",
                r: "1.8"
              })]
            })
          })
        }), "lost" === PB && (0, iB.jsxs)("div", {
          className: "SecretSantaLost",
          children: [(0, iB.jsx)("span", {
            className: "SecretSantaLostIcon",
            children: (0, iB.jsx)(cB.b, {
              name: "snowflake"
            })
          }), (0, iB.jsx)("span", {
            className: "SmallTextBold",
            children: MB("secretSantaHud:lost")
          })]
        })]
      })
    }));

    function ZO(BB) {
      return Math.min(91, Math.max(9, BB))
    }

    function NO(BB) {
      let {
        bells: OB
      } = BB;
      return (0, iB.jsx)("div", {
        className: yB()("SecretSantaFrost", `Bells-${OB}`),
        "aria-hidden": "true",
        children: (0, iB.jsx)("div", {
          className: "SecretSantaFrostPulse"
        })
      })
    }

    function RO(BB) {
      let {
        bells: OB
      } = BB;
      const {
        t: GB
      } = (0, zB.H)();
      return (0, iB.jsxs)("span", {
        className: yB()("SecretSantaHuntedBanner", "SecretSantaClose", `Bells-${OB}`),
        children: [(0, iB.jsx)("span", {
          className: "SecretSantaBell",
          children: (0, iB.jsx)(cB.b, {
            name: "bell"
          })
        }), " ", GB(2 === OB ? "secretSantaHud:santaClose" : "secretSantaHud:santaNear")]
      })
    }

    function WO(BB) {
      let {
        controller: OB
      } = BB;
      const GB = (0, pB.i)(fB, OB.getView());
      return (0, iB.jsxs)(iB.Fragment, {
        children: [GB.shown && (0, iB.jsx)(NO, {
          bells: GB.bells
        }), (0, iB.jsx)("div", {
          ref: OB.bindFlash,
          className: "SecretSantaFlash",
          "aria-hidden": "true"
        }), (0, iB.jsx)(aB, {
          controller: OB,
          naughtyEndsAt: GB.naughtyEndsAt
        }), GB.shown && (0, iB.jsxs)(iB.Fragment, {
          children: [(0, iB.jsx)(fO, {
            controller: OB,
            status: GB.status,
            endsAt: GB.endsAt,
            bells: GB.bells,
            treeLitAt: GB.treeLitAt
          }), (0, iB.jsx)(AO, {
            controller: OB,
            market: GB.market,
            hint: GB.hint,
            pulse: GB.pulse,
            treeLightsOn: 0 !== GB.treeLitAt
          }), (0, iB.jsx)(rB.e, {
            children: (0, iB.jsx)(JO, {
              controller: OB,
              market: GB.market,
              hint: GB.hint,
              nextHintAt: GB.nextHintAt,
              pulse: GB.pulse
            })
          })]
        })]
      })
    }

    function AO(BB) {
      let {
        controller: OB,
        market: GB,
        hint: YB,
        pulse: DB,
        treeLightsOn: oB
      } = BB;
      const [jB, yB] = (0, QB.useState)(null);
      return (0, XB.q)(jB, VO), (0, iB.jsx)("div", {
        ref: yB,
        className: "SecretSantaMapPanel",
        children: (0, iB.jsx)(qO, {
          controller: OB,
          market: GB,
          hint: YB,
          pulse: DB,
          treeLightsOn: oB
        })
      })
    }

    function VO(BB) {
      const OB = () => {
        const OB = BB.getBoundingClientRect();
        let GB = 0;
        for (const BB of UO()) BB.left < OB.right && BB.right > OB.left && (GB = Math.max(GB, BB.bottom));
        const YB = (0, XB.j)(OB.left, OB.right, GB);
        SO(BB, "--ss-map-top", GB + 6), SO(BB, "--ss-map-bottom", null === YB ? null : (0, XB.g)(BB) - YB + 6)
      };
      OB();
      const GB = nO(OB);
      return {
        layout: OB,
        clear: () => {
          GB(), BB.style.removeProperty("--ss-map-top"), BB.style.removeProperty("--ss-map-bottom")
        }
      }
    }

    function SO(BB, OB, GB) {
      const YB = null === GB ? "" : `${Math.ceil(GB)}px`;
      BB.style.getPropertyValue(OB) !== YB && BB.style.setProperty(OB, YB)
    }

    function nO(BB) {
      const OB = document.querySelector(`.${wB.k}`),
        GB = new ResizeObserver(BB);
      for (const QB of [document.querySelector(`.${wB.i}`), OB]) QB && GB.observe(QB);
      const YB = new MutationObserver(BB),
        DB = null === OB || void 0 === OB ? void 0 : OB.querySelector(".TopRightElementsRight");
      return DB && YB.observe(DB, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), () => {
        GB.disconnect(), YB.disconnect()
      }
    }

    function UO() {
      const BB = `.${wB.k}`,
        OB = document.querySelectorAll(`.${wB.i}, ${BB} .TopRightIcon:not(.TopRightTray *), ${BB} .CondensedSocialBarInner`);
      return Array.from(OB, (BB => BB.getBoundingClientRect())).filter((BB => BB.width > 0 && BB.height > 0))
    }
    const fO = (0, QB.memo)((function(BB) {
      let {
        controller: OB,
        status: GB,
        endsAt: YB,
        bells: DB,
        treeLitAt: oB
      } = BB;
      const {
        t: jB
      } = (0, zB.H)(), [yB, JB] = (0, QB.useState)(null);
      return function(BB) {
        (0, QB.useLayoutEffect)((() => {
          if (!BB) return;
          const OB = document.documentElement;
          let GB = 0,
            YB = window.innerWidth;
          const DB = () => {
              BB.style.removeProperty("top");
              const YB = UO(),
                DB = Array.from(BB.children).filter((BB => BB instanceof HTMLElement && !BB.classList.contains(vB))),
                QB = BB.getBoundingClientRect(),
                oB = DB.map((BB => {
                  const OB = QB.left + BB.offsetLeft,
                    GB = QB.top + BB.offsetTop;
                  return {
                    left: OB,
                    right: OB + BB.offsetWidth,
                    top: GB,
                    bottom: GB + BB.offsetHeight
                  }
                }));
              let jB = 0;
              for (let BB = 0; BB < YB.length; BB++) {
                let BB = jB;
                for (const OB of oB)
                  for (const GB of YB) {
                    OB.left < GB.right + wB.e && OB.right > GB.left - wB.e && OB.top + jB < GB.bottom + 4 && OB.bottom + jB > GB.top && (BB = Math.max(BB, Math.ceil(GB.bottom + 4 - OB.top)))
                  }
                if (BB === jB) break;
                jB = BB
              }
              jB > 0 && (BB.style.top = `${BB.getBoundingClientRect().top+jB}px`);
              const yB = Math.max(0, ...oB.map((BB => BB.bottom - QB.top)));
              (0, EB.e)(window.innerWidth, window.innerHeight) && !document.querySelector(".Chat.Chatting") && (GB = Math.max(GB, Math.ceil(BB.getBoundingClientRect().top + yB)), OB.style.setProperty("--ss-top-bar-bottom", `${GB}px`))
            },
            QB = () => {
              window.innerWidth !== YB && (YB = window.innerWidth, GB = 0), DB()
            };
          DB();
          const oB = new ResizeObserver(DB);
          oB.observe(BB);
          const jB = nO(DB),
            yB = new MutationObserver((BB => {
              BB.some((BB => {
                const OB = BB.target instanceof Element ? BB.target : BB.target.parentElement;
                return !(null !== OB && void 0 !== OB && OB.closest(".SecretSantaClock"))
              })) && DB()
            }));
          yB.observe(BB, {
            childList: !0,
            subtree: !0,
            characterData: !0
          });
          const JB = new MutationObserver((BB => {
              BB.some((BB => BB.target instanceof Element && BB.target.classList.contains("Chat"))) && DB()
            })),
            MB = document.querySelector(".TopLeftElements");
          return MB && JB.observe(MB, {
            attributes: !0,
            attributeFilter: ["class"],
            subtree: !0
          }), window.addEventListener("resize", QB), () => {
            oB.disconnect(), jB(), yB.disconnect(), JB.disconnect(), window.removeEventListener("resize", QB), OB.style.removeProperty("--ss-top-bar-bottom")
          }
        }), [BB])
      }(yB), (0, iB.jsxs)("div", {
        ref: JB,
        className: "SecretSantaTop",
        children: [(0, iB.jsxs)("div", {
          className: "SecretSantaTopBar",
          children: [(0, iB.jsx)(kO, {
            endsAt: YB
          }), GB && (0, iB.jsxs)("span", {
            className: "SecretSantaScore",
            children: [(0, iB.jsxs)("span", {
              className: "SecretSantaPoints",
              children: [(0, iB.jsx)(cB.b, {
                name: "star"
              }), " ", GB.santaStatusPoints]
            }, GB.santaStatusPoints), (0, iB.jsx)("span", {
              className: "SecretSantaRank",
              children: jB("secretSantaHud:rank", {
                rank: GB.santaStatusRank,
                players: GB.santaStatusPlayers
              })
            })]
          })]
        }), GB && (0, iB.jsx)(dO, {
          status: GB,
          bells: DB,
          treeLitAt: oB
        }), (0, iB.jsx)(xB, {
          controller: OB
        })]
      })
    }));

    function kO(BB) {
      let {
        endsAt: OB
      } = BB;
      const GB = (0, hB.k)(OB);
      return 0 === OB ? (0, iB.jsx)("span", {
        className: "SecretSantaClock"
      }) : (0, iB.jsxs)("span", {
        className: yB()("SecretSantaClock", {
          Urgent: GB <= 30
        }),
        children: [(0, iB.jsx)(cB.b, {
          name: "stopwatch",
          className: "SecretSantaClockIcon",
          "aria-hidden": "true"
        }), (0, hB.e)(GB)]
      })
    }
    const dO = (0, QB.memo)((function(BB) {
      let {
        status: OB,
        bells: GB,
        treeLitAt: YB
      } = BB;
      const {
        t: DB
      } = (0, zB.H)(), QB = Math.min(2, Math.max(0, OB.santaStatusHunters)), oB = OB.santaStatusScarf, jB = (0, iB.jsx)(oO, {
        scarf: oB,
        hat: OB.santaStatusHat
      });
      let yB = (0, iB.jsx)("span", {
        children: jO(DB("secretSantaHud:youWearLook", {
          look: OO
        }), jB)
      });
      if (OB.santaStatusKnown) {
        const BB = OB.santaStatusHatKnown ? jO(DB("secretSantaHud:spottedLook", {
          look: OO
        }), jB) : jO(DB("secretSantaHud:spottedScarf", {
          scarf: OO
        }), (0, iB.jsx)(YO, {
          scarf: oB
        }));
        yB = (0, iB.jsxs)("span", {
          className: "SecretSantaSpotted",
          children: [(0, iB.jsx)(cB.b, {
            name: "eye"
          }), " ", BB]
        })
      }
      let JB = null;
      return 0 !== YB ? JB = (0, iB.jsx)(lO, {
        litAt: YB,
        hunters: QB
      }) : 0 !== GB ? JB = (0, iB.jsx)(RO, {
        bells: GB
      }) : QB > 0 && (JB = (0, iB.jsxs)("span", {
        className: "SecretSantaHuntedBanner",
        children: [(0, iB.jsx)(cB.b, {
          name: "eyes",
          "aria-hidden": "true"
        }), " ", DB(1 === QB ? "secretSantaHud:hunters1" : "secretSantaHud:hunters2")]
      })), (0, iB.jsxs)("div", {
        className: "SecretSantaYouTab",
        children: [JB, yB]
      }, QB)
    }));
    var KO = GB(4642);
    const uO = [226, 36, 52],
      mO = [246, 250, 255],
      IO = [168, 214, 255],
      FO = [24, 24, 28],
      iO = [44, 44, 50],
      LO = [112, 112, 122],
      gO = [255, 112, 36];

    function rO(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return [{
        timeFraction: 0,
        minColor: [BB[0], BB[1], BB[2], GB],
        maxColor: [OB[0], OB[1], OB[2], GB]
      }, {
        timeFraction: 1,
        minColor: [BB[0], BB[1], BB[2], 0],
        maxColor: [OB[0], OB[1], OB[2], 0]
      }]
    }

    function XO(BB, OB, GB) {
      let [YB, DB, QB] = BB;
      return {
        pos1: [YB - OB, DB, QB - OB],
        pos2: [YB + OB, DB + GB, QB + OB]
      }
    }

    function wO(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const GB = .45 * OB;
      return [{
        texture: "square_particle",
        ...XO(BB, GB, 1.4 * OB),
        dir1: [-.7, .5, -.7],
        dir2: [.7, 1.4, .7],
        minEmitPower: .5,
        maxEmitPower: 1,
        minLifeTime: .8,
        maxLifeTime: 1.4,
        minSize: .18 * OB,
        maxSize: .34 * OB,
        manualEmitCount: Math.round(26 * OB),
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
        colorGradients: rO(iO, LO, .95),
        hideDist: 48,
        blendMode: KO.f.Standard
      }, {
        texture: "square_particle",
        ...XO(BB, .6 * GB, 1.2 * OB),
        dir1: [-1.4, 1.2, -1.4],
        dir2: [1.4, 2.6, 1.4],
        minEmitPower: 1.2,
        maxEmitPower: 2,
        minLifeTime: .6,
        maxLifeTime: 1,
        minSize: .1,
        maxSize: .18,
        manualEmitCount: Math.round(14 * OB),
        gravity: [0, -14, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: [{
          timeFraction: 0,
          minColor: [FO[0], FO[1], FO[2], 1],
          maxColor: [58, 52, 48, 1]
        }, {
          timeFraction: 1,
          minColor: [FO[0], FO[1], FO[2], 1],
          maxColor: [58, 52, 48, 1]
        }],
        hideDist: 48,
        blendMode: KO.f.Standard
      }, {
        texture: "glint",
        ...XO(BB, .7 * GB, 1.2 * OB),
        dir1: [-.8, .8, -.8],
        dir2: [.8, 2, .8],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .4,
        maxLifeTime: .8,
        minSize: .06,
        maxSize: .14,
        manualEmitCount: Math.round(6 * OB),
        gravity: [0, 1, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: rO(gO, uO),
        hideDist: 48,
        blendMode: KO.f.Add
      }]
    }

    function EO(BB, OB) {
      return {
        texture: "glint",
        ...XO(BB, .9, 1.9),
        dir1: [-.5, .6, -.5],
        dir2: [.5, 1.6, .5],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .8,
        maxLifeTime: 1.5,
        minSize: .05,
        maxSize: .13,
        manualEmitCount: OB,
        gravity: [0, .4, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: rO(mO, IO),
        hideDist: 16,
        blendMode: KO.f.Add
      }
    }
    var cO = GB(92);
    const hO = "harp_pling",
      aO = "cloth1",
      eO = [
        [0, .55, 1],
        [110, .55, 1.5]
      ],
      TO = [
        [0, .5, 1],
        [85, .5, 1.26],
        [170, .5, 1.5],
        [255, .45, 2]
      ],
      bO = [
        [0, .5, 1.5],
        [85, .45, 2]
      ],
      CO = [
        [0, .4, .75],
        [170, .4, .63]
      ],
      HO = "keysJingle",
      vO = [
        [],
        [
          [.45, 1]
        ],
        [
          [.7, 1.25],
          [.4, 1.6]
        ]
      ];

    function sO(BB, OB) {
      return 1 === OB ? BB : {
        ...BB,
        manualEmitCount: Math.max(1, Math.round(BB.manualEmitCount * OB))
      }
    }
    class xO {
      constructor(BB, OB) {
        this.api = BB, this.localPlayerId = OB, this.layers = [{
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }, {
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }], this.timers = new Set, this.camera = [0, 0, 0], this.look = [0, 0, 1], this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.lastFrameAt = 0, this.particleShare = (0, cO.isMobile)() ? .6 : 1, BB.preloadSounds([hO, HO, aO])
      }
      reset() {
        this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.setBells(0)
      }
      receiveHint(BB) {
        const OB = this.hint;
        this.hint = BB, "none" !== BB.santaHintState && (OB && OB.santaHintContract === BB.santaHintContract ? null === OB.santaHintScarf && null !== BB.santaHintScarf ? this.play(TO) : null === OB.santaHintHat && null !== BB.santaHintHat && this.play(bO) : this.play(eO))
      }
      receiveStatus(BB) {
        (BB.santaStatusKnown && !this.spotted || BB.santaStatusHatKnown && !this.hatSpotted) && this.play(CO), this.spotted = BB.santaStatusKnown, this.hatSpotted = BB.santaStatusHatKnown
      }
      wrapStarted() {
        this.api.playSound(this.localPlayerId, aO, .5, 1.2)
      }
      setBells(BB) {
        const OB = vO[BB];
        this.layers.forEach(((BB, GB) => {
          var YB;
          const [DB, QB] = null !== (YB = OB[GB]) && void 0 !== YB ? YB : [0, BB.rate];
          var oB;
          (0 === DB && BB.target > 0 && BB.sound && this.stopLater(BB), BB.target = DB, DB > 0 && QB !== BB.rate) && (BB.rate = QB, null === (oB = BB.sound) || void 0 === oB || oB.rate(QB))
        }))
      }
      receiveFx(BB) {
        let {
          santaFxKind: OB,
          santaFxAt: GB
        } = BB;
        if (this.api.particlesEnabled())
          if ("caughtSanta" === OB) GB && this.burst(wO(GB));
          else if ("toTunnel" === OB) this.later(300, (() => {
          const [BB, OB, GB] = this.ahead();
          this.burst([EO([BB, OB - 1, GB], 36)])
        }));
        else {
          const [BB, OB, GB] = this.ahead();
          this.burst(wO([BB, OB - .6, GB], .8))
        }
      }
      frame(BB) {
        const {
          cameraPosition: OB,
          cameraDirection: GB
        } = BB;
        this.camera[0] = OB[0], this.camera[1] = OB[1], this.camera[2] = OB[2], this.look[0] = GB[0], this.look[1] = GB[1], this.look[2] = GB[2];
        const YB = performance.now(),
          DB = Math.min(.1, (YB - (this.lastFrameAt || YB)) / 1e3);
        this.lastFrameAt = YB;
        for (const oB of this.layers) {
          if (0 === oB.volume && 0 === oB.target && !oB.sound) continue;
          oB.target > 0 && !oB.sound && (oB.sound = this.api.playSound(this.localPlayerId, HO, 0, oB.rate, void 0, !0));
          const BB = (oB.target > oB.volume ? 3 : 1.2) * DB;
          var QB;
          if (oB.volume = oB.target > oB.volume ? Math.min(oB.target, oB.volume + BB) : Math.max(oB.target, oB.volume - BB), oB.volume <= 0 && 0 === oB.target) this.silence(oB);
          else null === (QB = oB.sound) || void 0 === QB || QB.setRelativeVolume(oB.volume)
        }
      }
      dispose() {
        for (const BB of this.timers) window.clearTimeout(BB);
        this.timers.clear();
        for (const BB of this.layers) BB.target = 0, this.silence(BB)
      }
      silence(BB) {
        var OB;
        null === (OB = BB.sound) || void 0 === OB || OB.stop(), BB.sound = null, BB.volume = 0
      }
      stopLater(BB) {
        const OB = BB.sound,
          GB = window.setTimeout((() => {
            this.timers.delete(GB), BB.sound === OB && 0 === BB.target && this.silence(BB)
          }), BB.volume / 1.2 * 1e3 + 150);
        this.timers.add(GB)
      }
      ahead() {
        const [BB, OB, GB] = this.camera, [YB, DB, QB] = this.look;
        return [BB + 1.8 * YB, OB + 1.8 * DB - .35, GB + 1.8 * QB]
      }
      later(BB, OB) {
        const GB = window.setTimeout((() => {
          this.timers.delete(GB), OB()
        }), BB);
        this.timers.add(GB)
      }
      play(BB) {
        for (const [OB, GB, YB] of BB) 0 === OB ? this.api.playSound(this.localPlayerId, hO, GB, YB) : this.later(OB, (() => {
          this.api.playSound(this.localPlayerId, hO, GB, YB)
        }))
      }
      burst(BB) {
        for (const OB of BB) this.api.playParticleEffect(sO(OB, this.particleShare))
      }
    }
    class tO {
      constructor(BB) {
        this.api = BB, this.wait = null
      }
      nP(BB) {
        const OB = performance.now();
        this.wait = {
          min: BB.santaFlyoverMin,
          max: BB.santaFlyoverMax,
          start: BB.santaFlyoverStart,
          until: OB + BB.santaFlyoverWaitMs,
          loadedAt: null,
          settledFrames: 0,
          lastFrameAt: OB
        }
      }
      frame(BB) {
        const OB = this.wait;
        if (!OB) return;
        const GB = performance.now(),
          YB = GB - OB.lastFrameAt;
        OB.lastFrameAt = GB, GB > OB.until ? this.wait = null : null !== OB.loadedAt ? (OB.settledFrames = YB <= 60 ? OB.settledFrames + 1 : 0, OB.settledFrames >= 6 && GB - OB.loadedAt >= 300 && (this.wait = null, this.api.sendCommand("santaFlyoverReady"))) : BB && this.isLoaded(OB, BB) && (OB.loadedAt = GB)
      }
      isLoaded(BB, OB) {
        let {
          min: GB,
          max: DB,
          start: QB
        } = BB;
        if (OB[0] < GB[0] || OB[0] > DB[0] || OB[2] < GB[2] || OB[2] > DB[2]) return !1;
        const oB = YB.f.pP,
          jB = BB => BB.map((BB => Math.floor(BB / oB))),
          yB = [jB(OB), jB(QB)],
          [JB, MB] = [jB(GB), jB(DB)];
        for (let YB = JB[0]; YB <= MB[0]; YB++)
          for (let BB = JB[1]; BB <= MB[1]; BB++)
            for (let OB = JB[2]; OB <= MB[2]; OB++) {
              if (yB.some((GB => {
                  let [DB, QB, oB] = GB;
                  return (YB - DB) ** 2 + (BB - QB) ** 2 + (OB - oB) ** 2 <= 4
                })) && !this.api.isBlockInLoadedChunk(YB * oB, BB * oB, OB * oB)) return !1
            }
        return !0
      }
    }
    var BG = GB(39572),
      OG = GB(1299),
      GG = GB(39226);
    class YG {
      constructor(BB) {
        this.api = BB, this.sent = null, this.timer = null, this.recheck = setInterval((() => {
          this.jP()
        }), 5e3), this.pacer = new GG.d({
          limit: 2,
          spacingMs: 3e3
        }), this.heldBack = !1, this.stopPacer = void 0, this.resized = () => {
          null !== this.timer && clearTimeout(this.timer), this.timer = setTimeout((() => {
            this.timer = null, this.jP()
          }), 400)
        }, window.addEventListener("resize", this.resized), this.stopPacer = this.pacer.subscribe((() => {
          this.heldBack && !this.pacer.isPacing() && (this.heldBack = !1, this.jP())
        })), this.jP()
      }
      resend() {
        this.sent = null, this.jP()
      }
      dispose() {
        window.removeEventListener("resize", this.resized), this.stopPacer(), this.pacer.dispose(), clearInterval(this.recheck), null !== this.timer && clearTimeout(this.timer)
      }
      jP() {
        var BB, OB;
        const GB = null !== (BB = null === (OB = (0, OG.D)().gameRender()) || void 0 === OB ? void 0 : OB.canvas.width) && void 0 !== BB ? BB : 0;
        if (GB <= 0 || window.innerWidth <= 0 || window.innerHeight <= 0) return;
        const YB = window.innerWidth / window.innerHeight,
          DB = (0, BG.b)(GB),
          QB = this.sent;
        QB && Math.abs(YB / QB.aspect - 1) < .02 && Math.abs(DB / QB.tagScale - 1) < .02 || (this.pacer.tryStart() ? (this.sent = {
          aspect: YB,
          tagScale: DB
        }, this.api.sendCommand(`santaView ${Math.round(1e3*YB)} ${Math.round(1e3*DB)}`)) : this.heldBack = !0)
      }
    }
    var DG = GB(39858);
    const QG = [20, 9, 20],
      oG = [8, 12],
      jG = .3,
      yG = [.05, .13],
      JG = {
        kind: "smokePuff"
      },
      MG = [245, 250, 255],
      PG = {
        CP: 900,
        perS: 80
      },
      zG = {
        CP: 360,
        perS: 34
      };
    class lG {
      constructor(BB) {
        this.api = BB, this.tier = (0, cO.isMobile)() ? zG : PG, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
      }
      onAfterRender(BB) {
        const OB = performance.now(),
          GB = 0 === this.lastMs ? 0 : Math.min(OB - this.lastMs, 250) / 1e3;
        if (this.lastMs = OB, !this.api.particlesEnabled()) return void this.dispose();
        const YB = Math.hypot(BB[0] - this.last[0], BB[1] - this.last[1], BB[2] - this.last[2]) > 20;
        if (this.last[0] = BB[0], this.last[1] = BB[1], this.last[2] = BB[2], YB && this.dispose(), (YB || OB >= this.nextRoofCheckMs) && (this.nextRoofCheckMs = OB + 250, this.roofed = this.hasRoof(BB)), this.roofed) return void(this.budget = 0);
        const DB = this.at;
        let QB;
        DB[0] = BB[0], DB[1] = BB[1] + 7, DB[2] = BB[2], this.system ? (this.budget = Math.min(this.budget + this.tier.perS * GB, this.tier.perS / 4), QB = Math.floor(this.budget), this.budget -= QB) : (this.system = this.api.createParticles(this.opts(), {
          pos: DB,
          half: QG
        }), QB = Math.floor(this.tier.CP / 2)), QB > 0 && (this.system.moveTo(DB, QG), this.system.emit(QB))
      }
      dispose() {
        var BB;
        null === (BB = this.system) || void 0 === BB || BB.dispose(), this.system = null
      }
      hasRoof(BB) {
        let [OB, GB, YB] = BB;
        const DB = Math.floor(OB),
          QB = Math.floor(YB);
        let oB = 0;
        for (let jB = Math.floor(GB) + 1; jB <= Math.floor(GB) + 16; jB++)
          if (oB = this.api.isSolidToPlayerBlockId(this.api.getBlockId(DB, jB, QB)) ? oB + 1 : 0, oB >= 4) return !0;
        return !1
      }
      opts() {
        const [BB, OB, GB] = MG;
        return {
          texture: JG,
          CP: this.tier.CP,
          minLifeTime: oG[0] / DG.c,
          maxLifeTime: oG[1] / DG.c,
          minEmitPower: 1.1 * DG.c * .8,
          maxEmitPower: 1.1 * DG.c * 1.2,
          minSize: yG[0],
          maxSize: yG[1],
          emitRate: 0,
          gravity: [0, 0, 0],
          dir1: [-.3, -1, -.3],
          dir2: [jG, -1, jG],
          colorGradients: [{
            timeFraction: 0,
            minColor: [BB, OB, GB, 0]
          }, {
            timeFraction: .12,
            minColor: [BB, OB, GB, .9]
          }, {
            timeFraction: .85,
            minColor: [BB, OB, GB, .9]
          }, {
            timeFraction: 1,
            minColor: [BB, OB, GB, 0]
          }],
          blendMode: KO.f.Standard
        }
      }
    }
    var pG = GB(37233);
    const qG = [{
        icon: "gift",
        key: "secretSantaHud:introFind"
      }, {
        icon: "coins",
        key: "secretSantaHud:introCoal"
      }, {
        icon: "eyes",
        key: "secretSantaHud:introWatched"
      }],
      ZG = (0, QB.memo)((function() {
        const {
          t: BB
        } = (0, zB.H)();
        return (0, iB.jsxs)("div", {
          className: "SecretSantaIntroLines",
          children: [(0, iB.jsxs)("div", {
            className: "SecretSantaIntroHeadline",
            children: [(0, iB.jsx)(cB.b, {
              name: "user-secret"
            }), (0, iB.jsx)("span", {
              children: BB("secretSantaHud:introHeadline")
            })]
          }), qG.map((OB => {
            let {
              icon: GB,
              key: YB
            } = OB;
            return (0, iB.jsxs)("div", {
              className: "SecretSantaIntroLine",
              children: [(0, iB.jsx)(cB.b, {
                name: GB,
                fixedWidth: !0
              }), (0, iB.jsx)("span", {
                children: BB(YB)
              })]
            }, YB)
          }))]
        })
      })),
      NG = (0, QB.memo)((function(BB) {
        let {
          controller: OB
        } = BB;
        return (0, iB.jsx)("div", {
          ref: OB.bindIntro,
          className: "SecretSantaIntro",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, iB.jsx)("div", {
            className: "SecretSantaIntroCard",
            children: (0, iB.jsx)(ZG, {})
          })
        })
      })),
      RG = "secretSantaIntroShown";
    class WG {
      constructor() {
        this.element = null, this.fade = null, this.fadeLookedAt = -1 / 0, this.armedUntil = 0, this.shownAt = null, this.drawn = -1, this.intro = null, this.introUntil = 0, this.drawnIntro = null, this.bind = BB => {
          this.element = BB, this.drawn = -1
        }, this.bindIntro = BB => {
          this.intro = BB, this.drawnIntro = null
        }
      }
      receiveFlyover(BB) {
        this.armedUntil = performance.now() + BB + 3e3
      }
      frame(BB) {
        const OB = performance.now(),
          GB = this.snowAlpha(OB);
        if (this.drawIntro(OB, GB), GB <= 0) return null !== this.shownAt && (OB < this.armedUntil && this.startIntro(OB), this.armedUntil = 0), this.shownAt = null, void this.draw(0);
        if (null === this.shownAt) {
          if (GB < 1 || BB && OB >= this.armedUntil) return void this.draw(0);
          this.shownAt = OB
        }
        this.draw(Math.min(1, (OB - this.shownAt) / 300) * GB)
      }
      startIntro(BB) {
        var OB;
        const GB = null !== (OB = PB.g.getItem(RG)) && void 0 !== OB ? OB : 0;
        PB.g.setItem(RG, GB + 1), this.introUntil = BB + (GB < 2 ? 3500 : 2e3)
      }
      drawIntro(BB, OB) {
        0 !== this.introUntil && (BB >= this.introUntil || OB > 0) && (this.introUntil = 0);
        const GB = 0 !== this.introUntil;
        this.intro && GB !== this.drawnIntro && (this.drawnIntro = GB, this.intro.classList.toggle("Shown", GB))
      }
      snowAlpha(BB) {
        var OB, GB, YB, DB;
        (null === (OB = this.fade) || void 0 === OB || !OB.isConnected) && BB - this.fadeLookedAt >= 250 && (this.fadeLookedAt = BB, this.fade = document.querySelector(`[${pG.b}]`));
        const QB = null === (GB = this.fade) || void 0 === GB ? void 0 : GB.style;
        if (!QB || "none" === QB.display) return 0;
        const oB = null !== (YB = null === (DB = QB.backgroundColor.match(/\d+/g)) || void 0 === DB ? void 0 : DB.slice(0, 3).map(Number)) && void 0 !== YB ? YB : [];
        return 3 === oB.length && oB.every((BB => BB >= 200)) && Number(QB.opacity) || 0
      }
      draw(BB) {
        const OB = Math.round(100 * BB) / 100;
        this.element && OB !== this.drawn && (this.drawn = OB, this.element.style.opacity = String(OB), this.element.style.display = OB > 0 ? "flex" : "none")
      }
    }
    const AG = (0, QB.memo)((function(BB) {
        let {
          controller: OB
        } = BB;
        const {
          t: GB
        } = (0, zB.H)();
        return (0, iB.jsx)("div", {
          ref: OB.bind,
          className: "SecretSantaSnowTitle",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, iB.jsxs)("div", {
            className: "SecretSantaSnowTitleCard",
            children: [(0, iB.jsxs)("div", {
              className: "SecretSantaSnowTitleName",
              children: [(0, iB.jsx)(cB.b, {
                name: "hat-santa",
                className: "SecretSantaSnowTitleIcon"
              }), GB("secretSantaHud:titleName")]
            }), (0, iB.jsx)(ZG, {})]
          })
        })
      })),
      VG = "SecretSantaMode",
      SG = YB.f.xZ * YB.f.playerEyeToHeightRatio;

    function nG(BB) {
      document.body.classList.toggle("SecretSantaPodium", BB)
    }
    const UG = function(BB, OB, GB, YB) {
      let {
        localPlayerId: DB
      } = YB;
      const jB = new IB((() => {
          var BB;
          null === (BB = qB) || void 0 === BB || BB.wrapStarted()
        })),
        yB = new WG,
        JB = [0, 0, 0];
      let MB = null;
      const PB = [0, 0, 0],
        zB = [0, 0, 0];
      let lB = null,
        pB = null,
        qB = null,
        ZB = null,
        NB = null,
        RB = null,
        WB = null;
      const AB = BB => {
          lB && null !== BB && BB !== DB && !WB && (WB = {
            target: BB,
            at: performance.now(),
            first: null
          })
        },
        VB = (BB, OB) => {
          WB = null, jB.pressGift(BB.at, OB) && (MB = BB.target)
        },
        SB = (BB, OB) => {
          if (null === MB) return;
          if (!BB.readDrawnPosition(MB, PB)) return void(MB = null);
          zB[0] = OB[0], zB[1] = OB[1] + SG, zB[2] = OB[2];
          const GB = Math.hypot(PB[0] - OB[0], PB[1] - OB[1], PB[2] - OB[2]);
          jB.aimAtWrap(function(BB, OB, GB) {
            const YB = GB[0] - BB[0],
              DB = GB[2] - BB[2],
              QB = Math.hypot(OB[0], OB[2]);
            let oB = BB[1];
            const jB = QB > 0 ? (YB * OB[0] + DB * OB[2]) / QB : 0;
            jB > 0 && (oB += OB[1] / QB * jB), oB = Math.max(GB[1], Math.min(GB[1] + 1.8, oB));
            const yB = [YB, oB - BB[1], DB],
              JB = Math.hypot(yB[0], yB[1], yB[2]),
              MB = Math.hypot(OB[0], OB[1], OB[2]);
            if (0 === JB || 0 === MB) return 0;
            const PB = (yB[0] * OB[0] + yB[1] * OB[1] + yB[2] * OB[2]) / (JB * MB);
            return 180 * Math.acos(Math.max(-1, Math.min(1, PB))) / Math.PI
          }(zB, BB.getActionRay().direction, PB), GB) || (MB = null)
        },
        nB = (BB, OB, GB) => {
          const YB = [0, 0, 0];
          GB && BB.readDrawnPosition(OB.target, YB) ? OB.first ? VB(OB, function(BB, OB, GB, YB) {
            const DB = GB[0] - BB[0],
              QB = GB[1] - BB[1],
              oB = GB[2] - BB[2],
              jB = Math.hypot(DB, QB, oB);
            return 0 === jB || YB <= 0 ? {
              distance: jB,
              awaySpeed: 0
            } : {
              distance: jB,
              awaySpeed: (DB * (GB[0] - OB[0]) + QB * (GB[1] - OB[1]) + oB * (GB[2] - OB[2])) / jB / YB
            }
          }(GB, OB.first.pos, YB, (performance.now() - OB.first.at) / 1e3)) : OB.first = {
            pos: YB,
            at: performance.now()
          } : VB(OB, null)
        };
      return {
        onCreate: BB => {
          lB = BB, document.body.classList.add(VG), qB = new xO(BB, DB), ZB = new lG(BB), NB = new tO(BB), RB = new YG(BB), pB = (0, oB.s)((0, QB.createElement)(QB.Fragment, null, (0, QB.createElement)(WO, {
            controller: jB
          }), (0, QB.createElement)(gB, {
            controller: jB
          }), (0, QB.createElement)(AG, {
            controller: yB
          }), (0, QB.createElement)(NG, {
            controller: yB
          })))
        },
        onClose: () => {
          var BB, OB, GB, YB;
          document.body.classList.remove(VG), nG(!1), null === (BB = pB) || void 0 === BB || BB(), pB = null, jB.dispose(), null === (OB = qB) || void 0 === OB || OB.dispose(), qB = null, null === (GB = ZB) || void 0 === GB || GB.dispose(), ZB = null, NB = null, null === (YB = RB) || void 0 === YB || YB.dispose(), RB = null, lB = null
        },
        onPlayerAltAction: (BB, OB, GB, YB, DB, QB) => {
          AB(QB)
        },
        onPlayerAttackEntity: (BB, OB) => {
          AB(OB)
        },
        onAfterRender: (BB, OB) => {
          var GB, YB, QB, oB;
          const MB = null !== (GB = lB) && void 0 !== GB && GB.readDrawnPosition(DB, JB) ? JB : null;
          WB && lB && nB(lB, WB, MB), lB && MB && SB(lB, MB), jB.frame(OB.cameraHeading, MB), null === (YB = qB) || void 0 === YB || YB.frame(OB), null === (QB = ZB) || void 0 === QB || QB.onAfterRender(OB.cameraPosition), null === (oB = NB) || void 0 === oB || oB.frame(MB), yB.frame(jB.getView().shown)
        },
        onReceivedMessageFromServer: (BB, OB) => {
          var GB;
          if ("secretSantaHint" === BB) jB.receiveHint(OB), null === (GB = qB) || void 0 === GB || GB.receiveHint(OB);
          else if ("secretSantaStatus" === BB) {
            var YB;
            jB.receiveStatus(OB), null === (YB = qB) || void 0 === YB || YB.receiveStatus(OB)
          } else if ("secretSantaWrap" === BB) {
            WB && VB(WB, null);
            const {
              santaWrapMs: BB,
              santaWrapDone: GB
            } = OB;
            jB.receiveWrap(BB, GB)
          } else if ("secretSantaMarket" === BB) {
            var DB;
            null === (DB = qB) || void 0 === DB || DB.reset(), jB.receiveMarket(OB)
          } else if ("secretSantaBells" === BB) {
            var QB;
            const {
              santaBellsLevel: BB
            } = OB;
            jB.receiveBells(BB), null === (QB = qB) || void 0 === QB || QB.setBells(BB)
          } else if ("secretSantaFx" === BB) {
            var oB;
            const BB = OB;
            "toTunnel" === BB.santaFxKind && jB.snowBlink(), null === (oB = qB) || void 0 === oB || oB.receiveFx(BB)
          } else if ("secretSantaFlyover" === BB) {
            var JB;
            null === (JB = NB) || void 0 === JB || JB.nP(OB), yB.receiveFlyover(OB.santaFlyoverWaitMs)
          } else if ("secretSantaPodium" === BB) {
            const {
              santaPodiumShown: BB
            } = OB;
            var MB;
            if (nG(BB), !BB) null === (MB = RB) || void 0 === MB || MB.resend()
          }
        }
      }
    }
  },
  39193: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      c: () => DB
    });
    var YB = GB(353);
    const DB = (0, YB.Kb)([0, 0, -1]),
      QB = [{
        name: "S",
        bearing: (0, YB.Kb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, YB.Kb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: DB
      }, {
        name: "W",
        bearing: (0, YB.Kb)([1, 0, 0])
      }]
  },
  39189: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      d: () => QB
    });
    var YB = GB(39193);

    function DB(BB, OB, GB) {
      return [100 * (GB.mapMaxX - BB) / (GB.mapMaxX - GB.mapMinX), 100 * (OB - GB.mapMinZ) / (GB.mapMaxZ - GB.mapMinZ)]
    }

    function QB(BB, OB, GB, QB) {
      const [oB, jB] = DB(BB, OB, QB), yB = YB.c - GB;
      return {
        rotation: yB,
        transform: `rotate(${yB}rad) translate(-${oB}%, -${jB}%)`
      }
    }
  },
  39858: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB,
      g: () => QB
    });
    const YB = 1 / .6,
      DB = {
        kind: "smokePuff"
      };
    class QB {
      constructor(BB, OB, GB) {
        this.style = BB, this.CP = OB, this.half = GB, this.particles = null, this.lastFrame = -1
      }
      emit(BB, OB, GB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return GB !== this.lastFrame && (this.lastFrame = GB, this.particles || (this.particles = BB.createParticles(function(BB, OB) {
          const [
            [GB, QB, oB],
            [jB, yB, JB]
          ] = BB.colours;
          return {
            texture: BB.soft ? DB : "square_particle",
            CP: OB,
            minLifeTime: BB.life[0] / YB,
            maxLifeTime: BB.life[1] / YB,
            minEmitPower: BB.power[0] * YB,
            maxEmitPower: BB.power[1] * YB,
            minSize: BB.size[0],
            maxSize: BB.size[1],
            emitRate: 0,
            gravity: [0, BB.lift * YB * YB, 0],
            dir1: [-BB.spread, 1, -BB.spread],
            dir2: [BB.spread, 1, BB.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [GB, QB, oB, BB.alpha],
              maxColor: [jB, yB, JB, BB.alpha]
            }, {
              timeFraction: 1,
              minColor: [GB, QB, oB, 0],
              maxColor: [jB, yB, JB, 0]
            }],
            blendMode: BB.blendMode
          }
        }(this.style, this.CP), {
          pos: OB,
          half: this.half
        })), this.particles.moveTo(OB, this.half), this.particles.emit(QB), !0)
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null
      }
    }
  },
  39572: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    const YB = 1400,
      DB = .45;

    function QB(BB) {
      return BB < YB ? Math.pow(YB / BB, DB) : 1
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);