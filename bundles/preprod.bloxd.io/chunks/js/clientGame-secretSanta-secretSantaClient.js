export const id = 28;
export const ids = [28];
export const modules = {
  37868: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => jW,
      h: () => UW,
      l: () => xW,
      o: () => ZW
    });
    var mW = OW(35220),
      EW = OW(3361),
      NW = OW(3368),
      PW = OW(9954),
      LW = OW(1526),
      cW = OW(62),
      wW = OW(80),
      tW = OW(1283);

    function ZW() {
      var WW;
      return (0, LW.g)(EW.g, (0, EW.F)()), (0, tW.jsx)(tW.Fragment, {
        children: null === (WW = (0, EW.F)()) || void 0 === WW ? void 0 : WW.content
      })
    }

    function xW(WW) {
      var iW;
      let {
        show: OW
      } = WW;
      (0, LW.g)(EW.g, (0, EW.F)());
      const wW = null === (iW = (0, EW.F)()) || void 0 === iW ? void 0 : iW.menu;
      return (0, cW.useEffect)((() => {
        var WW;
        OW || (null === wW || void 0 === wW || null === (WW = wW.onClose) || void 0 === WW || WW.call(wW), (0, NW.s)())
      }), [OW, wW]), (0, cW.useEffect)((() => OW ? (0, PW.e)(NW.C, NW.f) : void 0), [OW]), (0, tW.jsx)(mW.d, {
        showing: OW,
        globallyUniqueKey: "clientGameMenu",
        children: null === wW || void 0 === wW ? void 0 : wW.content
      })
    }
    const lW = new Map,
      AW = new Set;

    function bW(WW, iW) {
      iW ? lW.set(WW, iW) : lW.delete(WW);
      for (const OW of AW) OW()
    }

    function jW(WW) {
      let {
        placement: iW = "bottom"
      } = WW;
      const OW = (0, cW.useRef)(null);
      return (0, cW.useLayoutEffect)((() => {
        const WW = OW.current;
        return bW(iW, WW), () => {
          lW.get(iW) === WW && bW(iW, null)
        }
      }), [iW]), (0, tW.jsx)("div", {
        ref: OW,
        id: `clientGameHud-${iW}`,
        style: {
          display: "contents"
        }
      })
    }

    function UW(WW) {
      let {
        children: iW,
        placement: OW = "bottom"
      } = WW;
      const [mW, EW] = (0, cW.useState)((() => {
        var WW;
        return null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null
      }));
      return (0, cW.useEffect)((() => {
        const WW = () => {
          var WW;
          EW(null !== (WW = lW.get(OW)) && void 0 !== WW ? WW : null)
        };
        return AW.add(WW), WW(), () => {
          AW.delete(WW)
        }
      }), [OW]), mW ? (0, wW.createPortal)(iW, mW) : null
    }
  },
  37761: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => hW,
      f: () => yW,
      g: () => TW,
      j: () => SW,
      l: () => YW
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(4275),
      LW = OW(327),
      cW = OW(3332),
      wW = OW(27),
      tW = OW(2061),
      ZW = OW(39),
      xW = OW(2075),
      lW = OW(25),
      AW = OW(2080),
      bW = OW(1459),
      jW = OW(10049),
      UW = OW(2108),
      kW = OW(1172),
      sW = OW(37763),
      MW = OW(1283);
    const KW = 7e3;

    function SW() {
      const {
        loadingOverlayVisible: WW,
        openInGameMenuName: iW,
        openEverythingMenuName: OW
      } = (0, lW.p)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return WW || null !== iW || null !== OW
    }

    function YW(WW, iW, OW) {
      const EW = (0, mW.useRef)(OW);
      EW.current = OW;
      const NW = (0, mW.useRef)({
        card: WW,
        ms: 0
      });
      (0, mW.useEffect)((() => {
        if (iW || null === WW) return;
        NW.current.card !== WW && (NW.current = {
          card: WW,
          ms: 0
        });
        const OW = NW.current,
          mW = performance.now(),
          PW = setTimeout((() => {
            EW.current()
          }), KW - OW.ms);
        return () => {
          clearTimeout(PW), OW.ms += performance.now() - mW
        }
      }), [iW, WW])
    }
    const yW = (0, mW.memo)((function() {
      const {
        isTouchScreen: WW
      } = (0, lW.p)(["isTouchScreen"]), iW = (0, bW.x)();
      (0, PW.d)();
      const OW = (0, cW.e)("showBasicMovementControls"),
        [EW, tW] = (0, mW.useState)("movement"),
        xW = "movement" === EW,
        AW = iW && !1 !== OW;
      (0, mW.useEffect)((() => {
        "padActions" !== EW || AW || tW("done")
      }), [EW, AW]);
      const jW = SW();
      YW("done" === EW ? null : EW, jW, (() => {
        tW("movement" === EW && (0, bW.k)() ? "padActions" : "done")
      }));
      const UW = ZW.i.getItem(LW.Qb) > 2,
        kW = (!WW || iW) && xW && !1 !== OW,
        KW = "padActions" === EW && AW,
        yW = (0, mW.useRef)(null);
      (0, sW.c)(!UW && !jW && kW, yW), (0, sW.c)(!UW && !jW && KW);
      const nW = !UW && kW;
      return (0, mW.useEffect)((() => {
        nW && !jW && wW.l.iZ("controlsTutorialShown", "movement")
      }), [nW, jW]), UW ? (0, MW.jsx)(HW, {
        showingMovementControls: !1
      }) : (0, MW.jsxs)(MW.Fragment, {
        children: [kW ? (0, MW.jsxs)("div", {
          ref: yW,
          className: NW()("ControlsTutorialDiv", {
            Covered: jW
          }),
          children: [(0, MW.jsx)(TW, {}), (0, MW.jsx)(hW, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, MW.jsx)(hW, {
            header: "Jump",
            noaAction: "jump"
          })]
        }) : null, KW && (0, MW.jsx)(JW, {
          covered: jW
        }), (0, MW.jsx)(HW, {
          showingMovementControls: "done" !== EW
        })]
      })
    }));

    function TW() {
      const WW = (0, bW.x)();
      return (0, MW.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, MW.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), WW && (0, MW.jsx)(AW.e, {
          noaAction: "forward"
        }), !WW && (0, MW.jsxs)(MW.Fragment, {
          children: [(0, MW.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, MW.jsx)(AW.e, {
              noaAction: "forward"
            })
          }), (0, MW.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, MW.jsx)(AW.e, {
              noaAction: "left"
            }), (0, MW.jsx)(AW.e, {
              noaAction: "backward"
            }), (0, MW.jsx)(AW.e, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function JW(WW) {
      let {
        covered: iW
      } = WW;
      const {
        t: OW
      } = (0, kW.B)(), mW = (0, cW.e)("useInventory");
      return (0, MW.jsxs)("div", {
        className: NW()("ControlsTutorialDiv", {
          Covered: iW
        }),
        children: [(0, MW.jsx)(hW, {
          header: OW("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, MW.jsx)(hW, {
          header: OW("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== mW && (0, MW.jsx)(hW, {
          header: OW("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, MW.jsx)(hW, {
          header: OW("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function hW(WW) {
      let {
        header: iW,
        noaAction: OW
      } = WW;
      return (0, MW.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, MW.jsx)("div", {
          className: "KeyHeader",
          children: iW
        }), (0, MW.jsx)(AW.e, {
          noaAction: OW
        })]
      })
    }

    function HW(WW) {
      let {
        showingMovementControls: iW
      } = WW;
      const {
        isTouchScreen: OW
      } = (0, lW.p)(["isTouchScreen"]), EW = (0, bW.x)(), NW = (0, UW.c)("OpenShop"), [PW, LW] = (0, mW.useState)(!1), AW = `SeenShopControls|${(0,xW.f)("connectedGame",(WW=>WW.gameNameWithVariation))}`, kW = () => (!(0, bW.k)() || null !== (0, jW.c)("OpenShop")) && !ZW.i.getItem(AW) && tW.d.get("shopInfo") && !iW, sW = () => (LW(!0), ZW.i.setItem(AW, !0), (0, bW.k)() || wW.l.iZ("showShopTouchTutorial"), setTimeout((() => {
        LW(!1)
      }), 7e3));
      (0, mW.useEffect)((() => {
        let WW;
        const iW = wW.l.subscribe("showShopTutorial", (() => {
          kW() && (WW = sW())
        }));
        return () => {
          clearTimeout(WW), wW.l.unsubscribe(iW)
        }
      }), [iW]);
      const KW = (0, mW.useRef)();
      return (0, cW.d)("currencyAmounts", (WW => {
        if (kW()) {
          let OW = !1;
          const mW = tW.d.get("shopInfo");
          for (const EW in mW) {
            for (const NW in mW[EW].items) {
              var iW;
              const PW = mW[EW].items[NW];
              if (void 0 !== PW.currency && WW[PW.currency] && PW.cost <= WW[PW.currency].amount && (null === (iW = PW.hidden) || void 0 === iW || !iW)) {
                OW = !0;
                break
              }
            }
            if (OW) break
          }
          OW && (KW.current = sW())
        }
      })), (0, mW.useEffect)((() => () => {
        clearTimeout(KW.current)
      }), [iW]), !PW || EW && !NW ? null : (0, MW.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: OW && !EW ? null : (0, MW.jsx)(hW, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
  },
  35220: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW
    });
    var mW = OW(5243),
      EW = OW(5251);

    function NW(WW) {
      let {
        children: iW,
        showing: OW,
        globallyUniqueKey: NW,
        alwaysMountChildren: PW = !1,
        doGameplayStartStopOnShow: LW = !0,
        keepsMovement: cW = !1
      } = WW;
      return (0, EW.b)(!0, OW, NW, cW), (0, mW.b)(LW, OW), OW || PW ? iW : null
    }
  },
  37763: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW,
      c: () => LW,
      f: () => wW
    });
    var mW = OW(62);
    const EW = new Set,
      NW = new Set;

    function PW() {
      for (const WW of NW) WW()
    }

    function LW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      (0, mW.useEffect)((() => WW ? function() {
        const WW = {
          element: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
        };
        return EW.add(WW), PW(), () => {
          EW.delete(WW) && PW()
        }
      }(iW) : void 0), [WW, iW]), (0, mW.useEffect)((() => {
        WW && PW()
      }), [WW, OW])
    }

    function cW() {
      const WW = [];
      for (const {
          element: OW
        }
        of EW) {
        var iW;
        if (null === OW) return {
          anywhere: !0,
          boxes: []
        };
        const mW = null === (iW = OW.current) || void 0 === iW ? void 0 : iW.getBoundingClientRect();
        mW && mW.width > 0 && WW.push(mW)
      }
      return {
        anywhere: !1,
        boxes: WW
      }
    }

    function wW(WW) {
      return NW.add(WW), () => {
        NW.delete(WW)
      }
    }
  },
  37919: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => cW,
      h: () => wW,
      i: () => tW,
      j: () => AW
    });
    var mW = OW(62),
      EW = OW(4275),
      NW = OW(3457),
      PW = OW(27);
    const LW = 8,
      cW = "InGameHeaderContainer",
      wW = "TopRightElements";

    function tW(WW) {
      const [iW] = (0, EW.d)(), [OW, NW] = (0, mW.useState)(!1);
      return (0, mW.useLayoutEffect)((() => {
        if (!WW) return;
        const iW = document.querySelector(`.${cW}`),
          OW = document.querySelector(`.${wW}`),
          mW = () => {
            const mW = WW.getBoundingClientRect(),
              EW = iW ? iW.getBoundingClientRect().right : 0,
              PW = OW ? OW.getBoundingClientRect().left : window.innerWidth,
              cW = mW.left < EW + LW,
              wW = mW.right > PW - LW;
            NW(cW || wW)
          };
        mW();
        const EW = new ResizeObserver(mW);
        return EW.observe(WW), iW && EW.observe(iW), OW && EW.observe(OW), () => {
          EW.disconnect()
        }
      }), [WW, iW]), OW
    }
    const ZW = `.InGameUi .${cW}`,
      xW = [ZW, ".InGameUi .TopRightIcons", ".InGameUi .TopRightElementsRight"],
      lW = 1e3;

    function AW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW,
        OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const [EW, cW] = (0, mW.useState)(null);
      return (0, mW.useLayoutEffect)((() => {
        if (!WW) return;
        const mW = new ResizeObserver((() => {
          wW()
        }));
        mW.observe(WW), iW && iW !== WW && mW.observe(iW);
        let EW = [];

        function wW() {
          var NW, PW, wW;
          const tW = WW.getBoundingClientRect(),
            lW = function() {
              const WW = xW.map((WW => document.querySelector(WW))).filter((WW => null !== WW));
              for (const iW of WW) EW.includes(iW) || mW.observe(iW);
              for (const iW of EW) WW.includes(iW) || mW.unobserve(iW);
              return EW = WW, WW
            }(),
            AW = lW.filter((WW => {
              const iW = WW.getBoundingClientRect();
              return iW.width > 0 && iW.height > 0 && tW.left < iW.right + LW && tW.right > iW.left - LW
            }));
          if (0 === AW.length && !OW) return void cW(null);
          const bW = lW.find((WW => WW.matches(ZW))),
            jW = Math.max(null !== (NW = null === bW || void 0 === bW ? void 0 : bW.getBoundingClientRect().bottom) && void 0 !== NW ? NW : 0, ...AW.map((WW => WW.getBoundingClientRect().bottom))),
            UW = null !== (PW = null === iW || void 0 === iW || null === (wW = iW.offsetParent) || void 0 === wW ? void 0 : wW.getBoundingClientRect().top) && void 0 !== PW ? PW : 0;
          cW(Math.ceil(jW + LW / 2) - Math.round(UW))
        }
        const tW = setInterval(wW, lW);
        wW(), window.addEventListener("resize", wW);
        const AW = (0, PW.n)(NW.d, wW);
        return () => {
          mW.disconnect(), clearInterval(tW), window.removeEventListener("resize", wW), AW()
        }
      }), [WW, iW, OW]), EW
    }
  },
  37888: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      e: () => EW,
      f: () => NW
    });
    var mW = OW(62);

    function EW(WW) {
      return LW(WW, cW)
    }

    function NW(WW) {
      return LW(WW, wW)
    }

    function PW(WW) {
      return `${Math.floor(WW/60)}:${String(WW%60).padStart(2,"0")}`
    }

    function LW(WW, iW) {
      const [, OW] = (0, mW.useState)(null);
      return (0, mW.useEffect)((() => {
        if (0 === WW) return;
        const mW = window.setInterval((() => {
          const mW = iW(WW);
          OW((iW => (null === iW || void 0 === iW ? void 0 : iW.endsAt) === WW && iW.value === mW ? iW : {
            endsAt: WW,
            value: mW
          }))
        }), 250);
        return () => {
          window.clearInterval(mW)
        }
      }), [WW, iW]), iW(WW)
    }

    function cW(WW) {
      return (WW - performance.now()) / 1e3
    }

    function wW(WW) {
      return Math.max(0, Math.ceil(cW(WW)))
    }
  },
  10049: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW,
      e: () => wW,
      i: () => ZW,
      l: () => tW,
      p: () => cW,
      q: () => lW
    });
    var mW = OW(27),
      EW = OW(2111),
      NW = OW(1479),
      PW = OW(1459);
    const LW = WW => {
        var iW, OW;
        return (0, PW.k)() && null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getGlyphForNoaAction(WW)) && void 0 !== iW ? iW : null
      },
      cW = "controllerGlyph:",
      wW = WW => {
        var iW, OW;
        return null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getPadGlyphIconName(WW)) && void 0 !== iW ? iW : `${cW}xbox/${WW}`
      },
      tW = WW => WW.startsWith(cW),
      ZW = WW => {
        var iW, OW;
        return tW(WW) && null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getPadGlyphIconUrl(WW)) && void 0 !== iW ? iW : null
      },
      xW = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", PW.d, EW.e, EW.b],
      lW = WW => {
        const iW = xW.map((iW => mW.l.subscribe(iW, WW)));
        return () => {
          for (const WW of iW) mW.l.unsubscribe(WW)
        }
      }
  },
  9954: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => EW
    });
    let mW = null;
    const EW = function(WW) {
        const iW = {
          cycle: WW,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return mW = iW, () => {
          mW === iW && (mW = null)
        }
      },
      NW = () => {
        var WW;
        return null !== (WW = mW) && void 0 !== WW && WW.canCycle() ? mW.cycle : null
      }
  },
  39775: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    const mW = 4,
      EW = 12e3,
      NW = 1e3;
    class PW {
      constructor() {
        let {
          limit: WW = mW,
          windowMs: iW = EW,
          spacingMs: OW = NW,
          now: PW = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = WW, this.windowMs = iW, this.spacingMs = OW, this.now = PW
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const WW of this.priority) WW.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const WW = this.now();
        this.sent.push(WW), this.lastSentAt = WW, this.schedule(), this.notify()
      }
      addPriority(WW) {
        return this.priority.add(WW), () => {
          this.priority.delete(WW)
        }
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const WW of this.priority)
          if (WW.waiting()) return !0;
        return !1
      }
      prune() {
        const WW = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= WW;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const WW = this.now(),
          iW = this.lastSentAt + this.spacingMs,
          OW = Math.min(iW > WW ? iW : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        OW !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, OW - WW)))
      }
      notify() {
        for (const WW of this.listeners) WW()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  40888: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => HO
    });
    var mW = OW(182);
    const EW = ["gingerbreadLane", "toyRow", "iceRink", "carousel", "greatTree", "cocoaCorner", "lanternWalk", "marketGate", "santasGrotto"];
    var NW = OW(62),
      PW = OW(3361),
      LW = OW(1089),
      cW = OW.n(LW),
      wW = OW(25),
      tW = OW(1459),
      ZW = OW(39),
      xW = OW(1172),
      lW = OW(37761),
      AW = OW(1526),
      bW = OW(27);
    var jW = OW(39726),
      UW = OW(39722);
    const kW = 2 * Math.PI * 17;

    function sW(WW, iW, OW) {
      const {
        santaMarketMinX: mW,
        santaMarketMinZ: EW,
        santaMarketSize: NW
      } = WW;
      return (0, UW.e)(iW, OW, {
        mapMinX: mW,
        mapMaxX: mW + NW,
        mapMinZ: EW,
        mapMaxZ: EW + NW
      })
    }

    function MW(WW, iW, OW) {
      return function(WW, iW, OW, mW, EW) {
        const NW = OW / 3,
          PW = WW => Math.min(2, Math.max(0, Math.floor(WW / NW)));
        return 3 * PW(EW - iW) + 2 - PW(mW - WW)
      }(WW.santaMarketMinX, WW.santaMarketMinZ, WW.santaMarketSize, iW, OW)
    }
    const KW = "secretSantaDistrictEntered",
      SW = "data-here";
    class YW {
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
      update(WW, iW, OW, mW, EW) {
        const NW = performance.now(),
          PW = 100 / WW.santaMarketSize,
          LW = 4 + .008 * Math.min(1e3, NW - this.lastAt),
          cW = Math.hypot(iW - this.lastLeft, OW - this.lastTop) > LW * PW;
        this.lastLeft = iW, this.lastTop = OW, this.lastAt = NW;
        const wW = cW ? -1 : this.here,
          tW = function(WW, iW, OW, mW, EW) {
            if (WW >= 0) {
              const iW = 100 / 3,
                NW = WW % 3 * iW,
                PW = Math.floor(WW / 3) * iW;
              if (OW >= NW - EW && OW <= NW + iW + EW && mW >= PW - EW && mW <= PW + iW + EW) return WW
            }
            return iW
          }(wW, mW, iW, OW, 1.5 * PW);
        if (tW !== this.here) {
          var ZW, xW;
          this.here = tW;
          const iW = WW.santaMarketDistricts[tW];
          wW >= 0 && NW - (null !== (ZW = this.bannerAt[tW]) && void 0 !== ZW ? ZW : -1 / 0) >= 8e3 ? (this.bannerAt[tW] = NW, this.bannerSeq++, this.setBanner({
            key: iW,
            seq: this.bannerSeq,
            at: NW
          })) : (null === (xW = this.getBanner()) || void 0 === xW ? void 0 : xW.key) !== iW && this.setBanner(null)
        }
        var lW, AW;
        this.here !== this.drawnHere && (null === (lW = this.drawnCell) || void 0 === lW || lW.removeAttribute(SW), this.drawnCell = EW.querySelector(`[data-district="${this.here}"]`), null === (AW = this.drawnCell) || void 0 === AW || AW.setAttribute(SW, ""), this.drawnHere = this.here)
      }
      dispose() {
        this.unbind(), this.reset()
      }
      setBanner(WW) {
        null === WW && null === this.banner || (this.banner = WW, bW.l.iZ(KW, WW))
      }
    }
    class yW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.at = WW, this.minSpanMs = iW, this.element = null, this.animation = null
      }
      bind(WW, iW, OW) {
        this.element = WW, this.run(iW, OW)
      }
      run(WW) {
        var iW;
        let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
        if (null === (iW = this.animation) || void 0 === iW || iW.cancel(), this.animation = null, !this.element || null === WW) return;
        const mW = Math.max(1, OW, this.minSpanMs),
          EW = mW - OW,
          NW = WW => Math.max(0, Math.min(1, WW / mW));
        this.animation = this.element.animate([this.at(NW(Math.max(0, WW) + EW)), this.at(NW(EW))], {
          duration: Math.max(1, WW),
          fill: "forwards"
        })
      }
    }

    function TW() {
      return new yW((WW => ({
        opacity: .5 + .5 * WW
      })), 5e3)
    }
    class JW {
      constructor() {
        this.state = "idle", this.ownRing = !1, this.faded = !1, this.lastPressAt = -1 / 0, this.predictedAt = 0, this.timedOutPressAt = null, this.cooldownUntil = 0, this.averageRoundTrip = null, this.recentRoundTrips = []
      }
      press(WW, iW, OW) {
        var mW, EW;
        this.forgetOldRoundTrips(WW);
        const NW = WW - this.lastPressAt;
        if (this.lastPressAt = WW, NW < this.quietMs() || this.awaitingTimedOut(WW) || "idle" !== this.state || OW || WW < this.cooldownUntil || null === iW) return 0;
        const PW = Math.max(0, iW.awaySpeed) * ((null !== (mW = this.averageRoundTrip) && void 0 !== mW ? mW : 300) / 1e3);
        return iW.distance + PW > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = WW, this.ownRing = !0, this.faded = !1, 500 + (null !== (EW = this.averageRoundTrip) && void 0 !== EW ? EW : 0))
      }
      turnedAway(WW, iW, OW) {
        if (!this.mayTurnAway(WW)) return !1;
        const mW = 4.6 * (this.averageRoundTrip + 150) / 1e3;
        return !(iW <= 40 + (mW >= OW ? 180 : 180 * Math.asin(mW / OW) / Math.PI) && OW <= 5 + Math.max(.5, mW)) && (this.faded = !0, !0)
      }
      mayTurnAway(WW) {
        return null !== this.averageRoundTrip && "idle" !== this.state && this.ownRing && !this.faded && WW - this.predictedAt <= 350
      }
      yZ(WW, iW, OW) {
        const mW = iW > 0 || !OW,
          EW = "predicted" === this.state;
        return OW && (this.cooldownUntil = WW + 1e3), mW && EW ? this.learnRoundTrip(WW, WW - this.predictedAt) : mW && this.awaitingTimedOut(WW) && (this.timedOutPressAt = null), iW > 0 ? (this.state = "confirmed", EW ? null : (this.ownRing = !1, this.faded = !1, {
          kind: "start",
          ms: iW
        })) : "idle" === this.state ? null : (this.state = "idle", this.faded && !OW ? null : {
          kind: "end",
          done: OW
        })
      }
      expired(WW) {
        var iW;
        return !("predicted" !== this.state || WW - this.predictedAt < 1200 + (null !== (iW = this.averageRoundTrip) && void 0 !== iW ? iW : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(WW, WW - this.predictedAt), !this.faded)
      }
      stop() {
        this.state = "idle", this.cooldownUntil = 0, this.timedOutPressAt = null
      }
      quietMs() {
        var WW;
        const iW = this.recentRoundTrips.reduce(((WW, iW) => {
          let {
            ms: OW
          } = iW;
          return Math.max(WW, OW)
        }), null !== (WW = this.averageRoundTrip) && void 0 !== WW ? WW : 0);
        return Math.max(300, iW > 0 ? 1.5 * iW + 300 : 1e3)
      }
      awaitingTimedOut(WW) {
        return null !== this.timedOutPressAt && WW - this.timedOutPressAt >= 3500 && (this.timedOutPressAt = null), null !== this.timedOutPressAt
      }
      forgetOldRoundTrips(WW) {
        for (; this.recentRoundTrips.length > 0 && WW - this.recentRoundTrips[0].at > 3e4;) this.recentRoundTrips.shift()
      }
      learnRoundTrip(WW, iW) {
        const OW = Math.min(2e3, Math.max(0, iW));
        this.averageRoundTrip = null === this.averageRoundTrip ? OW : this.averageRoundTrip + .3 * (OW - this.averageRoundTrip), this.recentRoundTrips.push({
          at: WW,
          ms: OW
        })
      }
    }
    const hW = "secretSantaHudChanged",
      HW = "SecretSantaHudShown",
      nW = "SecretSantaMatchOrFinish",
      uW = "SecretSantaNaughtyLock",
      oW = ["Wrapping", "Naughty", "Cancelled"],
      dW = {
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
    class eW {
      constructor(WW) {
        this.onWrapStart = WW, this.view = dW, this.endTimer = null, this.finishEndTimer = null, this.map = null, this.arrow = null, this.countdown = new yW((WW => ({
          strokeDashoffset: 1 - WW
        }))), this.targetGlow = TW(), this.circleFade = TW(), this.targetFreshAt = 0, this.ring = null, this.ringFill = null, this.ringAnimation = null, this.ringEndAnimation = null, this.flash = null, this.flashAnimation = null, this.wrap = new JW, this.district = new YW, this.drawnArrow = "", this.drawnInCircle = !1, this.bindMap = WW => {
          this.map = WW, this.drawnInCircle = !1, this.district.unbind()
        }, this.bindArrow = WW => {
          this.arrow = WW, this.drawnArrow = ""
        }, this.bindCountdown = WW => {
          this.countdown.bind(WW, this.hintMsLeft())
        }, this.bindTargetGlow = WW => {
          this.targetGlow.bind(WW, this.hintMsLeft(), this.targetFadeMs())
        }, this.bindCircleFade = WW => {
          this.circleFade.bind(WW, this.hintMsLeft(), this.targetFadeMs())
        }, this.bindRing = WW => {
          var iW;
          this.stopRing(), this.ring = WW, this.ringFill = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.querySelector(".SecretSantaRingFill")) && void 0 !== iW ? iW : null;
          const OW = this.view.naughtyEndsAt - performance.now();
          WW && OW > 0 && this.runRing("Naughty", OW)
        }, this.bindFlash = WW => {
          var iW;
          null === (iW = this.flashAnimation) || void 0 === iW || iW.cancel(), this.flashAnimation = null, this.flash = WW
        }
      }
      getView() {
        return this.view
      }
      receiveMarket(WW) {
        this.district.reset(), this.iZ({
          ...this.view,
          market: WW,
          bells: 0
        })
      }
      receiveBells(WW) {
        WW !== this.view.bells && this.iZ({
          ...this.view,
          bells: WW
        })
      }
      receiveHint(WW) {
        const iW = this.view.hint,
          OW = vW(this.view.nextHintAt, performance.now() + WW.santaHintNextInMs, 1e3),
          mW = OW > this.view.nextHintAt,
          EW = !iW || iW.santaHintContract !== WW.santaHintContract || iW.santaHintDistrict !== WW.santaHintDistrict || iW.santaHintCircleX !== WW.santaHintCircleX || iW.santaHintCircleZ !== WW.santaHintCircleZ,
          NW = "hunting" === WW.santaHintState && (mW || EW) ? this.view.pulse + 1 : this.view.pulse;
        NW !== this.view.pulse && (this.targetFreshAt = performance.now()), this.iZ({
          ...this.view,
          hint: WW,
          nextHintAt: OW,
          pulse: NW
        }), this.restartCountdown()
      }
      receiveStatus(WW) {
        var iW, OW;
        const mW = performance.now(),
          EW = vW(this.view.endsAt, mW + WW.santaStatusMsLeft),
          NW = WW.santaStatusNaughtyMs > 0 ? vW(this.view.naughtyEndsAt, mW + WW.santaStatusNaughtyMs) : 0,
          PW = 0 !== NW && 0 === this.view.naughtyEndsAt,
          LW = null !== (iW = WW.santaStatusTreeLitInMs) && void 0 !== iW ? iW : null,
          cW = null === LW ? 0 : vW(this.view.treeLitAt, mW + LW);
        this.iZ({
          ...this.view,
          status: WW,
          endsAt: EW,
          naughtyEndsAt: NW,
          treeLitAt: cW,
          shown: WW.santaStatusMsLeft > 0
        }), this.scheduleEnd(EW - mW), PW ? this.runRing("Naughty", WW.santaStatusNaughtyMs) : 0 === NW && null !== (OW = this.ring) && void 0 !== OW && OW.classList.contains("Naughty") && this.stopRing()
      }
      pressGift(WW, iW) {
        if (!this.view.shown) return !1;
        const OW = this.wrap.press(WW, iW, this.view.naughtyEndsAt > WW);
        return OW > 0 && this.startWrapRing(Math.max(1, OW - (performance.now() - WW))), OW > 0
      }
      aimAtWrap(WW, iW) {
        const OW = performance.now();
        return this.wrap.turnedAway(OW, WW, iW) && this.endWrapRing(!1), this.wrap.mayTurnAway(OW)
      }
      receiveWrap(WW, iW) {
        const OW = this.wrap.yZ(performance.now(), WW, iW);
        "start" === (null === OW || void 0 === OW ? void 0 : OW.kind) ? this.startWrapRing(OW.ms): "end" === (null === OW || void 0 === OW ? void 0 : OW.kind) && (OW.done && this.ring && !this.ring.classList.contains("Wrapping") && this.runRing("Wrapping", 1), this.endWrapRing(OW.done))
      }
      snowBlink() {
        var WW, iW, OW;
        null === (WW = this.flashAnimation) || void 0 === WW || WW.cancel();
        this.flashAnimation = null !== (iW = null === (OW = this.flash) || void 0 === OW ? void 0 : OW.animate([{
          opacity: 1
        }, {
          opacity: 1,
          offset: .24,
          easing: "ease-in"
        }, {
          opacity: 0
        }], {
          duration: 500
        })) && void 0 !== iW ? iW : null
      }
      frame(WW, iW) {
        this.wrap.expired(performance.now()) && this.endWrapRing(!1);
        const {
          market: OW,
          hint: mW
        } = this.view;
        if (!this.view.shown || !OW || !iW || !this.arrow || !this.map) return;
        const [EW, NW] = sW(OW, iW[0], iW[2]), PW = Math.min(100, Math.max(0, EW)), LW = Math.min(100, Math.max(0, NW)), cW = Math.min(95, Math.max(5, PW)), wW = Math.min(95, Math.max(5, LW)), tW = Math.round(180 * function(WW) {
          return WW - jW.f
        }(WW) / Math.PI), ZW = `${cW.toFixed(1)}% ${wW.toFixed(1)}% ${tW}`;
        ZW !== this.drawnArrow && (this.drawnArrow = ZW, this.arrow.style.left = `${cW.toFixed(1)}%`, this.arrow.style.top = `${wW.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${tW}deg)`), this.district.update(OW, PW, LW, MW(OW, iW[0], iW[2]), this.map);
        const xW = "hunting" === (null === mW || void 0 === mW ? void 0 : mW.santaHintState) ? mW : null,
          lW = null !== xW && function(WW, iW) {
            let [OW, , mW] = iW;
            const {
              santaHintCircleX: EW,
              santaHintCircleZ: NW,
              santaHintCircleR: PW
            } = WW;
            return null !== EW && null !== NW && PW > 0 && Math.hypot(OW - EW, mW - NW) <= PW
          }(xW, iW);
        lW !== this.drawnInCircle && (this.drawnInCircle = lW, this.map.toggleAttribute("data-in-circle", lW))
      }
      dispose() {
        var WW;
        null !== this.endTimer && (window.clearTimeout(this.endTimer), this.endTimer = null), this.clearFinishEnd(), document.body.classList.remove(nW), this.countdown.bind(null, null), this.targetGlow.bind(null, null), this.circleFade.bind(null, null), this.stopRing(), null === (WW = this.flashAnimation) || void 0 === WW || WW.cancel(), this.flashAnimation = null, this.map = this.arrow = this.ring = this.flash = null, this.ringFill = null, this.district.dispose(), document.body.classList.remove(HW, uW), this.view = dW
      }
      iZ(WW) {
        this.view = WW, document.body.classList.toggle(HW, WW.shown), document.body.classList.toggle(uW, WW.shown && 0 !== WW.naughtyEndsAt), WW.shown && (this.clearFinishEnd(), document.body.classList.add(nW)), bW.l.iZ(hW, WW, !0)
      }
      scheduleEnd(WW) {
        null !== this.endTimer && window.clearTimeout(this.endTimer), this.endTimer = window.setTimeout((() => {
          this.endTimer = null, this.wrap.stop(), this.iZ({
            ...this.view,
            shown: !1,
            endsAt: 0,
            naughtyEndsAt: 0,
            treeLitAt: 0,
            bells: 0
          }), this.stopRing(), this.clearFinishEnd(), this.finishEndTimer = window.setTimeout((() => {
            this.finishEndTimer = null, document.body.classList.remove(nW)
          }), 13e3)
        }), WW)
      }
      clearFinishEnd() {
        null !== this.finishEndTimer && (window.clearTimeout(this.finishEndTimer), this.finishEndTimer = null)
      }
      targetFadeMs() {
        return this.view.nextHintAt - this.targetFreshAt
      }
      hintMsLeft() {
        var WW;
        return "hunting" === (null === (WW = this.view.hint) || void 0 === WW ? void 0 : WW.santaHintState) ? this.view.nextHintAt - performance.now() : null
      }
      restartCountdown() {
        const WW = this.hintMsLeft();
        this.countdown.run(WW), this.targetGlow.run(WW, this.targetFadeMs()), this.circleFade.run(WW, this.targetFadeMs())
      }
      runRing(WW, iW) {
        if (this.stopRing(), !this.ring || !this.ringFill) return;
        this.ring.classList.add(WW);
        const [OW, mW] = "Wrapping" === WW ? [kW, 0] : [0, kW], EW = [{
          strokeDashoffset: OW
        }, {
          strokeDashoffset: mW
        }], NW = this.ringFill.animate(EW, {
          duration: iW,
          fill: "forwards"
        });
        this.ringAnimation = NW, "Naughty" === WW && (NW.onfinish = () => {
          this.ringAnimation === NW && this.stopRing()
        })
      }
      startWrapRing(WW) {
        this.runRing("Wrapping", WW), this.onWrapStart()
      }
      endWrapRing(WW) {
        const iW = this.ring;
        if (null === iW || void 0 === iW || !iW.classList.contains("Wrapping")) return;
        var OW, mW;
        WW ? null === (OW = this.ringAnimation) || void 0 === OW || OW.finish() : null === (mW = this.ringAnimation) || void 0 === mW || mW.pause();
        iW.classList.toggle("Cancelled", !WW);
        const EW = iW.animate([{
          opacity: 1,
          scale: 1
        }, {
          opacity: 0,
          scale: WW ? 1.6 : .8
        }], {
          duration: WW ? 350 : 300,
          easing: WW ? "ease-out" : "ease-in",
          fill: "forwards"
        });
        this.ringEndAnimation = EW, EW.onfinish = () => {
          this.ringEndAnimation === EW && this.stopRing()
        }
      }
      stopRing() {
        var WW, iW, OW;
        null === (WW = this.ringAnimation) || void 0 === WW || WW.cancel(), null === (iW = this.ringEndAnimation) || void 0 === iW || iW.cancel(), this.ringAnimation = this.ringEndAnimation = null, null === (OW = this.ring) || void 0 === OW || OW.classList.remove(...oW)
      }
    }

    function vW(WW, iW) {
      return 0 === WW || iW - WW > (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3) ? iW : Math.min(WW, iW)
    }
    var gW = OW(1283);
    const DW = "secretSantaControlsShown",
      VW = (0, NW.memo)((function(WW) {
        let {
          controller: iW
        } = WW;
        const {
          isTouchScreen: OW
        } = (0, wW.p)(["isTouchScreen"]), mW = (0, tW.x)(), {
          t: EW
        } = (0, xW.B)(), PW = (0, AW.g)(hW, iW.getView()).shown, LW = (0, lW.j)(), [bW] = (0, NW.useState)((() => {
          var WW;
          return null !== (WW = ZW.i.getItem(DW)) && void 0 !== WW ? WW : 0
        })), [jW, UW] = (0, NW.useState)(bW >= 2), [kW, sW] = (0, NW.useState)(!1), MW = (0, NW.useRef)(!1), KW = !jW && kW && PW && (!OW || mW);
        return (0, NW.useEffect)((() => {
          if (!PW || kW || jW) return;
          const WW = setTimeout((() => {
            sW(!0)
          }), 15500);
          return () => {
            clearTimeout(WW)
          }
        }), [PW, kW, jW]), (0, NW.useEffect)((() => {
          !KW || LW || MW.current || (MW.current = !0, ZW.i.setItem(DW, bW + 1))
        }), [KW, LW, bW]), (0, lW.l)(KW ? "secretSanta" : null, LW, (() => {
          UW(!0)
        })), KW ? (0, gW.jsxs)("div", {
          className: cW()("ControlsTutorialDiv", {
            Covered: LW
          }),
          children: [(0, gW.jsx)(lW.g, {}), (0, gW.jsx)(lW.d, {
            header: "Jump",
            noaAction: "jump"
          }), (0, gW.jsx)(lW.d, {
            header: EW("secretSantaHud:givePresent"),
            noaAction: "alt-fire"
          }), mW && (0, gW.jsx)(lW.d, {
            header: EW("controller:tutorialPause"),
            noaAction: "OpenSettings"
          })]
        }) : null
      }));
    var pW = OW(37868),
      fW = OW(4613),
      CW = OW(37919),
      XW = OW(1095),
      BW = OW(1391),
      qW = OW(37888);
    const RW = (0, NW.memo)((function(WW) {
      let {
        controller: iW,
        naughtyEndsAt: OW
      } = WW;
      return (0, gW.jsxs)("div", {
        ref: iW.bindRing,
        className: "SecretSantaRing",
        children: [(0, gW.jsxs)("svg", {
          viewBox: "0 0 40 40",
          "aria-hidden": "true",
          children: [(0, gW.jsx)("circle", {
            className: "SecretSantaRingTrack",
            cx: "20",
            cy: "20",
            r: 17
          }), (0, gW.jsx)("circle", {
            className: "SecretSantaRingFill",
            cx: "20",
            cy: "20",
            r: 17,
            style: {
              strokeDasharray: kW,
              strokeDashoffset: kW
            }
          })]
        }), OW > 0 && (0, gW.jsx)(GW, {
          endsAt: OW
        })]
      })
    }));

    function GW(WW) {
      let {
        endsAt: iW
      } = WW;
      const {
        t: OW
      } = (0, xW.B)(), mW = (0, qW.f)(iW);
      return mW <= 0 ? null : (0, gW.jsxs)("div", {
        className: "SecretSantaNaughty SmallTextBold",
        children: [(0, gW.jsxs)("span", {
          className: "SecretSantaNaughtyTitle",
          children: [(0, gW.jsx)(BW.c, {
            name: "ban",
            "aria-hidden": "true"
          }), " ", OW("secretSantaHud:naughty")]
        }), (0, gW.jsx)("span", {
          children: OW("secretSantaHud:naughtyWait", {
            seconds: mW
          })
        })]
      })
    }
    const IW = "user-magnifying-glass",
      aW = "tree-christmas",
      rW = {
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

    function zW(WW) {
      return WW && rW[WW] || "snowflake"
    }
    const FW = "SecretSantaDistrictBanner",
      QW = {
        animationDuration: "2200ms"
      },
      Wi = (0, NW.memo)((function(WW) {
        let {
          controller: iW
        } = WW;
        const {
          t: OW
        } = (0, xW.B)(), mW = (0, AW.g)(KW, iW.district.getBanner());
        return mW ? (0, gW.jsxs)("div", {
          className: cW()(FW, `District-${mW.key}`),
          style: QW,
          children: [(0, gW.jsx)("span", {
            className: "SecretSantaDistrictBannerIcon",
            children: (0, gW.jsx)(BW.c, {
              name: zW(mW.key)
            })
          }), OW(`secretSantaHud:district_${mW.key}`)]
        }, mW.seq) : null
      }));
    var ii = OW(2075),
      Oi = OW(1255);
    const mi = "\x01",
      Ei = "\x02";

    function Ni(WW) {
      let {
        scarf: iW,
        className: OW
      } = WW;
      const {
        t: mW
      } = (0, xW.B)();
      return (0, gW.jsxs)("span", {
        className: cW()("SecretSantaScarf", `Scarf-${iW}`, OW),
        children: [(0, gW.jsx)("span", {
          className: "SecretSantaScarfSwatch"
        }), mW(`secretSantaHud:scarfName_${iW}`)]
      })
    }
    const Pi = {
      santa: "hat-santa",
      elf: "hat-wizard",
      bobble: "hat-winter",
      antlers: "deer"
    };

    function Li(WW) {
      let {
        hat: iW,
        className: OW
      } = WW;
      const {
        t: mW
      } = (0, xW.B)();
      return (0, gW.jsxs)("span", {
        className: cW()("SecretSantaHat", `Hat-${iW}`, OW),
        children: [(0, gW.jsx)(BW.c, {
          name: Pi[iW]
        }), " ", mW(`secretSantaHud:hatName_${iW}`)]
      })
    }

    function ci(WW) {
      let {
        scarf: iW,
        hat: OW
      } = WW;
      const {
        t: mW
      } = (0, xW.B)();
      return (0, gW.jsx)(gW.Fragment, {
        children: wi(mW("secretSantaHud:lookName", {
          scarf: mi,
          hat: Ei
        }), (0, gW.jsx)(Ni, {
          scarf: iW
        }), (0, gW.jsx)(Li, {
          hat: OW
        }))
      })
    }

    function wi(WW) {
      for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
      const EW = [];
      return WW.split(mi).forEach(((WW, iW) => {
        iW > 0 && EW.push(OW[0]), WW.split(Ei).forEach(((WW, iW) => {
          iW > 0 && EW.push(OW[1]), EW.push(WW)
        }))
      })), EW.map(((WW, iW) => (0, gW.jsx)(NW.Fragment, {
        children: WW
      }, iW)))
    }
    const ti = {
        circle: {
          icon: IW,
          text: "secretSantaHud:circleNote"
        },
        lit: {
          icon: aW,
          text: "secretSantaHud:targetLit"
        }
      },
      Zi = (0, NW.memo)((function(WW) {
        var iW, OW, mW;
        let {
          controller: EW,
          market: PW,
          hint: LW,
          nextHintAt: wW,
          pulse: tW
        } = WW;
        const {
          t: ZW
        } = (0, xW.B)(), lW = (0, ii.g)("hiddenPlayerNames"), AW = null !== (iW = null === LW || void 0 === LW ? void 0 : LW.santaHintState) && void 0 !== iW ? iW : "none", bW = null !== (OW = null === LW || void 0 === LW ? void 0 : LW.santaHintTargetName) && void 0 !== OW ? OW : null, jW = null !== bW && (0, gW.jsx)("span", {
          className: "SecretSantaTargetName",
          children: (0, Oi.g)(bW, lW)
        }), UW = "hunting" === AW && null !== LW, kW = UW && !0 === LW.santaHintTreeLit, sW = function(WW, iW) {
          const [OW, mW] = (0, NW.useState)(null);
          iW && (null === OW || void 0 === OW ? void 0 : OW.contract) !== WW && mW({
            contract: WW,
            until: performance.now() + 8e3
          });
          const EW = (null === OW || void 0 === OW ? void 0 : OW.contract) === WW ? OW.until : 0,
            PW = (0, qW.f)(EW);
          0 !== EW && 0 === PW && mW({
            contract: WW,
            until: 0
          });
          return iW && PW > 0
        }(null !== (mW = null === LW || void 0 === LW ? void 0 : LW.santaHintContract) && void 0 !== mW ? mW : 0, UW && LW.santaHintCircleR > 0 && !kW);
        let MW, KW = `${AW}-${null!==bW&&void 0!==bW?bW:""}`;
        if (LW && "none" !== AW && jW)
          if ("lost" === AW) MW = (0, gW.jsxs)(gW.Fragment, {
            children: [(0, gW.jsx)(BW.c, {
              name: "snowflake",
              className: "SecretSantaLostLineIcon"
            }), " ", wi(ZW("secretSantaHud:lostLine", {
              name: mi
            }), jW)]
          });
          else if (null !== LW.santaHintScarf) {
          var SW, YW;
          KW += `-scarf-${LW.santaHintScarf}-${null!==(SW=LW.santaHintHat)&&void 0!==SW?SW:""}`, MW = wi(ZW("secretSantaHud:lookingFor", {
            name: mi,
            clue: Ei
          }), jW, (0, gW.jsx)(li, {
            scarf: LW.santaHintScarf,
            hat: null !== (YW = LW.santaHintHat) && void 0 !== YW ? YW : null
          }))
        } else {
          const WW = null === PW || void 0 === PW ? void 0 : PW.santaMarketDistricts[LW.santaHintDistrict];
          KW += `-district-${null!==WW&&void 0!==WW?WW:"?"}`, MW = wi(ZW("secretSantaHud:findIn", {
            name: mi,
            district: Ei
          }), jW, (0, gW.jsxs)("span", {
            className: cW()("SecretSantaClueChip", "SecretSantaDistrictName", void 0 !== WW && `District-${WW}`),
            children: [(0, gW.jsx)(BW.c, {
              name: zW(WW)
            }), " ", void 0 !== WW ? ZW(`secretSantaHud:district_${WW}`) : "?"]
          }))
        } else MW = ZW("secretSantaHud:finding");
        const [yW, TW] = (0, NW.useState)({
          key: KW,
          pulse: tW
        });
        yW.key !== KW && TW({
          key: KW,
          pulse: tW
        });
        const JW = yW.key === KW && tW !== yW.pulse;
        return (0, gW.jsxs)("div", {
          className: cW()("SecretSantaTarget", `State-${AW}`),
          children: [MW, "hunting" === AW && (0, gW.jsxs)(gW.Fragment, {
            children: [(0, gW.jsx)(xi, {
              controller: EW,
              nextHintAt: wW,
              note: kW ? "lit" : sW ? "circle" : null
            }), JW && (0, gW.jsx)("div", {
              className: "SecretSantaClueFlash",
              "aria-hidden": "true"
            }, tW)]
          })]
        }, KW)
      }));

    function xi(WW) {
      let {
        controller: iW,
        nextHintAt: OW,
        note: mW
      } = WW;
      const {
        t: EW
      } = (0, xW.B)(), PW = (0, qW.f)(OW), [LW, cW] = (0, NW.useState)(null), [wW, tW] = (0, NW.useState)(null);
      (0, NW.useLayoutEffect)((() => {
        if (!LW) return;
        const WW = () => {
          const WW = LW.offsetWidth,
            iW = LW.offsetHeight;
          tW((OW => OW && OW.width === WW && OW.height === iW ? OW : {
            width: WW,
            height: iW
          }))
        };
        WW();
        const iW = new ResizeObserver(WW);
        return iW.observe(LW), () => {
          iW.disconnect()
        }
      }), [LW]);
      return (0, gW.jsxs)(gW.Fragment, {
        children: [(0, gW.jsx)("div", {
          ref: cW,
          className: "SecretSantaClueCountdown",
          "aria-hidden": "true",
          children: wW && wW.width > 8 && wW.height > 8 && (0, gW.jsx)("svg", {
            viewBox: `0 0 ${wW.width} ${wW.height}`,
            children: (0, gW.jsx)("path", {
              ref: iW.bindCountdown,
              d: `M${wW.width/2} 2H${wW.width-2}V${wW.height-2}H2V2Z`,
              pathLength: 1,
              strokeWidth: 4,
              style: {
                strokeDasharray: 1,
                strokeDashoffset: 1
              }
            })
          })
        }), null === mW ? (0, gW.jsxs)("div", {
          className: "SecretSantaClueTimer",
          children: [(0, gW.jsx)(BW.c, {
            name: "arrows-rotate"
          }), " ", EW("secretSantaHud:mapUpdateIn", {
            seconds: Math.max(1, PW)
          })]
        }) : (0, gW.jsx)(Ai, {
          kind: mW
        }, mW)]
      })
    }

    function li(WW) {
      let {
        scarf: iW,
        hat: OW
      } = WW;
      return (0, gW.jsxs)(gW.Fragment, {
        children: [(0, gW.jsx)(Ni, {
          scarf: iW,
          className: "SecretSantaClueChip"
        }), null !== OW && (0, gW.jsxs)(gW.Fragment, {
          children: [(0, gW.jsx)("span", {
            className: "SecretSantaClueJoin",
            children: "+"
          }), (0, gW.jsx)(Li, {
            hat: OW,
            className: "SecretSantaClueChip"
          })]
        })]
      })
    }

    function Ai(WW) {
      let {
        kind: iW
      } = WW;
      const {
        t: OW
      } = (0, xW.B)(), {
        icon: mW,
        text: EW
      } = ti[iW];
      return (0, gW.jsxs)("div", {
        className: cW()("SecretSantaClueTimer", "SecretSantaClueNote", `Note-${iW}`),
        children: [(0, gW.jsx)("span", {
          className: "SecretSantaClueNoteIcon",
          children: (0, gW.jsx)(BW.c, {
            name: mW
          })
        }), " ", OW(EW)]
      })
    }

    function bi(WW) {
      let {
        litAt: iW,
        hunters: OW
      } = WW;
      const {
        t: mW
      } = (0, xW.B)(), EW = (0, qW.f)(iW);
      return (0, gW.jsxs)("span", {
        className: cW()("SecretSantaHuntedBanner", "SecretSantaTreeLights", {
          Lit: EW <= 0
        }),
        children: [(0, gW.jsx)("span", {
          className: "SecretSantaTreeLightsIcon",
          children: (0, gW.jsx)(BW.c, {
            name: aW
          })
        }), " ", EW > 0 ? mW("secretSantaHud:treeLightsOn", {
          seconds: EW
        }) : mW(OW > 1 ? "secretSantaHud:treeLit2" : "secretSantaHud:treeLit")]
      })
    }

    function ji(WW) {
      let {
        on: iW
      } = WW;
      return (0, gW.jsx)("span", {
        className: cW()("SecretSantaTreeLightString", {
          On: iW
        }),
        "aria-hidden": "true"
      })
    }
    const Ui = (0, NW.memo)((function(WW) {
      var iW, OW;
      let {
        controller: mW,
        market: NW,
        hint: PW,
        pulse: LW,
        treeLightsOn: wW
      } = WW;
      const {
        t: tW
      } = (0, xW.B)(), ZW = null !== (iW = null === PW || void 0 === PW ? void 0 : PW.santaHintState) && void 0 !== iW ? iW : "none", lW = "hunting" === ZW && PW ? PW.santaHintDistrict : -1, AW = null !== (OW = null === NW || void 0 === NW ? void 0 : NW.santaMarketDistricts) && void 0 !== OW ? OW : EW, bW = "hunting" === ZW && NW && PW ? function(WW, iW) {
        const {
          santaHintCircleX: OW,
          santaHintCircleZ: mW,
          santaHintCircleR: EW,
          santaHintContract: NW
        } = iW;
        if (null === OW || null === mW || EW <= 0) return null;
        const [PW, LW] = sW(WW, OW, mW), cW = 200 * EW / WW.santaMarketSize, wW = ki(PW), tW = Math.sqrt(Math.max(0, (cW / 2) ** 2 - (wW - PW) ** 2)), ZW = ki(LW - tW >= 9 ? LW - tW : LW + tW);
        return {
          left: PW,
          top: LW,
          size: cW,
          contract: NW,
          badgeLeft: wW,
          badgeTop: ZW
        }
      }(NW, PW) : null;
      return (0, gW.jsxs)("div", {
        ref: mW.bindMap,
        className: cW()("SecretSantaMinimap", `State-${ZW}`, {
          WithCircle: null !== bW
        }),
        children: [(0, gW.jsx)("img", {
          className: "SecretSantaMinimapTerrain",
          src: "data:image/png;base64,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",
          alt: "",
          draggable: !1
        }), (0, gW.jsx)("div", {
          className: "SecretSantaMinimapGrid",
          children: AW.map(((WW, iW) => (0, gW.jsxs)("div", {
            className: cW()("SecretSantaDistrict", `District-${WW}`, {
              Target: iW === lW
            }),
            "data-district": iW,
            children: [(0, gW.jsx)("span", {
              className: "SecretSantaDistrictIcon",
              children: (0, gW.jsx)(BW.c, {
                name: zW(WW)
              })
            }), (0, gW.jsx)("span", {
              className: "SecretSantaDistrictLabel",
              children: tW(`secretSantaHud:district_${WW}`)
            }), "greatTree" === WW && (0, gW.jsx)(ji, {
              on: wW
            })]
          }, WW)))
        }), lW >= 0 && (0, gW.jsxs)("div", {
          className: "SecretSantaTargetCell",
          style: {
            left: lW % 3 * (100 / 3) + "%",
            top: Math.floor(lW / 3) * (100 / 3) + "%"
          },
          children: [(0, gW.jsx)("div", {
            ref: mW.bindTargetGlow,
            className: "SecretSantaTargetGlow"
          }), (0, gW.jsx)("div", {
            className: "SecretSantaDistrictPulse"
          }, LW)]
        }), bW && (0, gW.jsxs)("div", {
          ref: mW.bindCircleFade,
          className: "SecretSantaCircleClip",
          children: [(0, gW.jsx)("div", {
            className: "SecretSantaCircle",
            style: {
              left: `${bW.left}%`,
              top: `${bW.top}%`,
              width: `${bW.size}%`,
              height: `${bW.size}%`
            }
          }, bW.contract), (0, gW.jsx)("span", {
            className: "SecretSantaCircleBadge",
            style: {
              left: `${bW.badgeLeft}%`,
              top: `${bW.badgeTop}%`
            },
            children: (0, gW.jsx)(BW.c, {
              name: IW
            })
          }, `badge-${bW.contract}`)]
        }), (0, gW.jsx)("div", {
          className: "SecretSantaMinimapArrowClip",
          children: (0, gW.jsx)("div", {
            ref: mW.bindArrow,
            className: "SecretSantaMinimapArrow",
            children: (0, gW.jsxs)("svg", {
              viewBox: "0 2 20 20",
              children: [(0, gW.jsx)("path", {
                className: "SecretSantaMinimapArrowBody",
                d: "M10 1.5 14.2 6.4H5.8Z"
              }), (0, gW.jsx)("circle", {
                className: "SecretSantaMinimapArrowBody",
                cx: "10",
                cy: "12",
                r: "5"
              }), (0, gW.jsx)("circle", {
                className: "SecretSantaMinimapArrowDot",
                cx: "10",
                cy: "12",
                r: "1.8"
              })]
            })
          })
        }), "lost" === ZW && (0, gW.jsxs)("div", {
          className: "SecretSantaLost",
          children: [(0, gW.jsx)("span", {
            className: "SecretSantaLostIcon",
            children: (0, gW.jsx)(BW.c, {
              name: "snowflake"
            })
          }), (0, gW.jsx)("span", {
            className: "SmallTextBold",
            children: tW("secretSantaHud:lost")
          })]
        })]
      })
    }));

    function ki(WW) {
      return Math.min(91, Math.max(9, WW))
    }

    function si(WW) {
      let {
        bells: iW
      } = WW;
      return (0, gW.jsx)("div", {
        className: cW()("SecretSantaFrost", `Bells-${iW}`),
        "aria-hidden": "true",
        children: (0, gW.jsx)("div", {
          className: "SecretSantaFrostPulse"
        })
      })
    }

    function Mi(WW) {
      let {
        bells: iW
      } = WW;
      const {
        t: OW
      } = (0, xW.B)();
      return (0, gW.jsxs)("span", {
        className: cW()("SecretSantaHuntedBanner", "SecretSantaClose", `Bells-${iW}`),
        children: [(0, gW.jsx)("span", {
          className: "SecretSantaBell",
          children: (0, gW.jsx)(BW.c, {
            name: "bell"
          })
        }), " ", OW(2 === iW ? "secretSantaHud:santaClose" : "secretSantaHud:santaNear")]
      })
    }

    function Ki(WW) {
      let {
        controller: iW
      } = WW;
      const OW = (0, AW.g)(hW, iW.getView());
      return (0, gW.jsxs)(gW.Fragment, {
        children: [OW.shown && (0, gW.jsx)(si, {
          bells: OW.bells
        }), (0, gW.jsx)("div", {
          ref: iW.bindFlash,
          className: "SecretSantaFlash",
          "aria-hidden": "true"
        }), (0, gW.jsx)(RW, {
          controller: iW,
          naughtyEndsAt: OW.naughtyEndsAt
        }), OW.shown && (0, gW.jsxs)(gW.Fragment, {
          children: [(0, gW.jsx)(Hi, {
            controller: iW,
            status: OW.status,
            endsAt: OW.endsAt,
            bells: OW.bells,
            treeLitAt: OW.treeLitAt
          }), (0, gW.jsx)(Si, {
            controller: iW,
            market: OW.market,
            hint: OW.hint,
            pulse: OW.pulse,
            treeLightsOn: 0 !== OW.treeLitAt
          }), (0, gW.jsx)(pW.h, {
            children: (0, gW.jsx)(Zi, {
              controller: iW,
              market: OW.market,
              hint: OW.hint,
              nextHintAt: OW.nextHintAt,
              pulse: OW.pulse
            })
          })]
        })]
      })
    }

    function Si(WW) {
      let {
        controller: iW,
        market: OW,
        hint: mW,
        pulse: EW,
        treeLightsOn: PW
      } = WW;
      const [LW, cW] = (0, NW.useState)(null);
      return (0, fW.o)(LW, Yi), (0, gW.jsx)("div", {
        ref: cW,
        className: "SecretSantaMapPanel",
        children: (0, gW.jsx)(Ui, {
          controller: iW,
          market: OW,
          hint: mW,
          pulse: EW,
          treeLightsOn: PW
        })
      })
    }

    function Yi(WW) {
      const iW = () => {
        const iW = WW.getBoundingClientRect();
        let OW = 0;
        for (const WW of Ji()) WW.left < iW.right && WW.right > iW.left && (OW = Math.max(OW, WW.bottom));
        const mW = (0, fW.j)(iW.left, iW.right, OW);
        yi(WW, "--ss-map-top", OW + 6), yi(WW, "--ss-map-bottom", null === mW ? null : (0, fW.f)(WW) - mW + 6)
      };
      iW();
      const OW = Ti(iW);
      return {
        layout: iW,
        clear: () => {
          OW(), WW.style.removeProperty("--ss-map-top"), WW.style.removeProperty("--ss-map-bottom")
        }
      }
    }

    function yi(WW, iW, OW) {
      const mW = null === OW ? "" : `${Math.ceil(OW)}px`;
      WW.style.getPropertyValue(iW) !== mW && WW.style.setProperty(iW, mW)
    }

    function Ti(WW) {
      const iW = document.querySelector(`.${CW.h}`),
        OW = new ResizeObserver(WW);
      for (const NW of [document.querySelector(`.${CW.e}`), iW]) NW && OW.observe(NW);
      const mW = new MutationObserver(WW),
        EW = null === iW || void 0 === iW ? void 0 : iW.querySelector(".TopRightElementsRight");
      return EW && mW.observe(EW, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), () => {
        OW.disconnect(), mW.disconnect()
      }
    }

    function Ji() {
      const WW = `.${CW.h}`,
        iW = document.querySelectorAll(`.${CW.e}, ${WW} .TopRightIcon:not(.TopRightTray *), ${WW} .CondensedSocialBarInner`);
      return Array.from(iW, (WW => WW.getBoundingClientRect())).filter((WW => WW.width > 0 && WW.height > 0))
    }
    const Hi = (0, NW.memo)((function(WW) {
      let {
        controller: iW,
        status: OW,
        endsAt: mW,
        bells: EW,
        treeLitAt: PW
      } = WW;
      const {
        t: LW
      } = (0, xW.B)(), [cW, wW] = (0, NW.useState)(null);
      return function(WW) {
        (0, NW.useLayoutEffect)((() => {
          if (!WW) return;
          const iW = document.documentElement;
          let OW = 0,
            mW = window.innerWidth;
          const EW = () => {
              WW.style.removeProperty("top");
              const mW = Ji(),
                EW = Array.from(WW.children).filter((WW => WW instanceof HTMLElement && !WW.classList.contains(FW))),
                NW = WW.getBoundingClientRect(),
                PW = EW.map((WW => {
                  const iW = NW.left + WW.offsetLeft,
                    OW = NW.top + WW.offsetTop;
                  return {
                    left: iW,
                    right: iW + WW.offsetWidth,
                    top: OW,
                    bottom: OW + WW.offsetHeight
                  }
                }));
              let LW = 0;
              for (let WW = 0; WW < mW.length; WW++) {
                let WW = LW;
                for (const iW of PW)
                  for (const OW of mW) {
                    iW.left < OW.right + CW.b && iW.right > OW.left - CW.b && iW.top + LW < OW.bottom + 4 && iW.bottom + LW > OW.top && (WW = Math.max(WW, Math.ceil(OW.bottom + 4 - iW.top)))
                  }
                if (WW === LW) break;
                LW = WW
              }
              LW > 0 && (WW.style.top = `${WW.getBoundingClientRect().top+LW}px`);
              const cW = Math.max(0, ...PW.map((WW => WW.bottom - NW.top)));
              (0, XW.g)(window.innerWidth, window.innerHeight) && !document.querySelector(".Chat.Chatting") && (OW = Math.max(OW, Math.ceil(WW.getBoundingClientRect().top + cW)), iW.style.setProperty("--ss-top-bar-bottom", `${OW}px`))
            },
            NW = () => {
              window.innerWidth !== mW && (mW = window.innerWidth, OW = 0), EW()
            };
          EW();
          const PW = new ResizeObserver(EW);
          PW.observe(WW);
          const LW = Ti(EW),
            cW = new MutationObserver((WW => {
              WW.some((WW => {
                const iW = WW.target instanceof Element ? WW.target : WW.target.parentElement;
                return !(null !== iW && void 0 !== iW && iW.closest(".SecretSantaClock"))
              })) && EW()
            }));
          cW.observe(WW, {
            childList: !0,
            subtree: !0,
            characterData: !0
          });
          const wW = new MutationObserver((WW => {
              WW.some((WW => WW.target instanceof Element && WW.target.classList.contains("Chat"))) && EW()
            })),
            tW = document.querySelector(".TopLeftElements");
          return tW && wW.observe(tW, {
            attributes: !0,
            attributeFilter: ["class"],
            subtree: !0
          }), window.addEventListener("resize", NW), () => {
            PW.disconnect(), LW(), cW.disconnect(), wW.disconnect(), window.removeEventListener("resize", NW), iW.style.removeProperty("--ss-top-bar-bottom")
          }
        }), [WW])
      }(cW), (0, gW.jsxs)("div", {
        ref: wW,
        className: "SecretSantaTop",
        children: [(0, gW.jsxs)("div", {
          className: "SecretSantaTopBar",
          children: [(0, gW.jsx)(ni, {
            endsAt: mW
          }), OW && (0, gW.jsxs)("span", {
            className: "SecretSantaScore",
            children: [(0, gW.jsxs)("span", {
              className: "SecretSantaPoints",
              children: [(0, gW.jsx)(BW.c, {
                name: "star"
              }), " ", OW.santaStatusPoints]
            }, OW.santaStatusPoints), (0, gW.jsx)("span", {
              className: "SecretSantaRank",
              children: LW("secretSantaHud:rank", {
                rank: OW.santaStatusRank,
                players: OW.santaStatusPlayers
              })
            })]
          })]
        }), OW && (0, gW.jsx)(ui, {
          status: OW,
          bells: EW,
          treeLitAt: PW
        }), (0, gW.jsx)(Wi, {
          controller: iW
        })]
      })
    }));

    function ni(WW) {
      let {
        endsAt: iW
      } = WW;
      const OW = (0, qW.f)(iW);
      return 0 === iW ? (0, gW.jsx)("span", {
        className: "SecretSantaClock"
      }) : (0, gW.jsxs)("span", {
        className: cW()("SecretSantaClock", {
          Urgent: OW <= 30
        }),
        children: [(0, gW.jsx)(BW.c, {
          name: "stopwatch",
          className: "SecretSantaClockIcon",
          "aria-hidden": "true"
        }), (0, qW.d)(OW)]
      })
    }
    const ui = (0, NW.memo)((function(WW) {
      let {
        status: iW,
        bells: OW,
        treeLitAt: mW
      } = WW;
      const {
        t: EW
      } = (0, xW.B)(), NW = Math.min(2, Math.max(0, iW.santaStatusHunters)), PW = iW.santaStatusScarf, LW = (0, gW.jsx)(ci, {
        scarf: PW,
        hat: iW.santaStatusHat
      });
      let cW = (0, gW.jsx)("span", {
        children: wi(EW("secretSantaHud:youWearLook", {
          look: mi
        }), LW)
      });
      if (iW.santaStatusKnown) {
        const WW = iW.santaStatusHatKnown ? wi(EW("secretSantaHud:spottedLook", {
          look: mi
        }), LW) : wi(EW("secretSantaHud:spottedScarf", {
          scarf: mi
        }), (0, gW.jsx)(Ni, {
          scarf: PW
        }));
        cW = (0, gW.jsxs)("span", {
          className: "SecretSantaSpotted",
          children: [(0, gW.jsx)(BW.c, {
            name: "eye"
          }), " ", WW]
        })
      }
      let wW = null;
      return 0 !== mW ? wW = (0, gW.jsx)(bi, {
        litAt: mW,
        hunters: NW
      }) : 0 !== OW ? wW = (0, gW.jsx)(Mi, {
        bells: OW
      }) : NW > 0 && (wW = (0, gW.jsxs)("span", {
        className: "SecretSantaHuntedBanner",
        children: [(0, gW.jsx)(BW.c, {
          name: "eyes",
          "aria-hidden": "true"
        }), " ", EW(1 === NW ? "secretSantaHud:hunters1" : "secretSantaHud:hunters2")]
      })), (0, gW.jsxs)("div", {
        className: "SecretSantaYouTab",
        children: [wW, cW]
      }, NW)
    }));
    var oi = OW(2937);
    const di = [226, 36, 52],
      ei = [246, 250, 255],
      vi = [168, 214, 255],
      gi = [24, 24, 28],
      Di = [44, 44, 50],
      Vi = [112, 112, 122],
      fi = [255, 112, 36];

    function Ci(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return [{
        timeFraction: 0,
        minColor: [WW[0], WW[1], WW[2], OW],
        maxColor: [iW[0], iW[1], iW[2], OW]
      }, {
        timeFraction: 1,
        minColor: [WW[0], WW[1], WW[2], 0],
        maxColor: [iW[0], iW[1], iW[2], 0]
      }]
    }

    function Xi(WW, iW, OW) {
      let [mW, EW, NW] = WW;
      return {
        pos1: [mW - iW, EW, NW - iW],
        pos2: [mW + iW, EW + OW, NW + iW]
      }
    }

    function Bi(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const OW = .45 * iW;
      return [{
        texture: "square_particle",
        ...Xi(WW, OW, 1.4 * iW),
        dir1: [-.7, .5, -.7],
        dir2: [.7, 1.4, .7],
        minEmitPower: .5,
        maxEmitPower: 1,
        minLifeTime: .8,
        maxLifeTime: 1.4,
        minSize: .18 * iW,
        maxSize: .34 * iW,
        manualEmitCount: Math.round(26 * iW),
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
        colorGradients: Ci(Di, Vi, .95),
        hideDist: 48,
        blendMode: oi.d.Standard
      }, {
        texture: "square_particle",
        ...Xi(WW, .6 * OW, 1.2 * iW),
        dir1: [-1.4, 1.2, -1.4],
        dir2: [1.4, 2.6, 1.4],
        minEmitPower: 1.2,
        maxEmitPower: 2,
        minLifeTime: .6,
        maxLifeTime: 1,
        minSize: .1,
        maxSize: .18,
        manualEmitCount: Math.round(14 * iW),
        gravity: [0, -14, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: [{
          timeFraction: 0,
          minColor: [gi[0], gi[1], gi[2], 1],
          maxColor: [58, 52, 48, 1]
        }, {
          timeFraction: 1,
          minColor: [gi[0], gi[1], gi[2], 1],
          maxColor: [58, 52, 48, 1]
        }],
        hideDist: 48,
        blendMode: oi.d.Standard
      }, {
        texture: "glint",
        ...Xi(WW, .7 * OW, 1.2 * iW),
        dir1: [-.8, .8, -.8],
        dir2: [.8, 2, .8],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .4,
        maxLifeTime: .8,
        minSize: .06,
        maxSize: .14,
        manualEmitCount: Math.round(6 * iW),
        gravity: [0, 1, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: Ci(fi, di),
        hideDist: 48,
        blendMode: oi.d.Add
      }]
    }

    function qi(WW, iW) {
      return {
        texture: "glint",
        ...Xi(WW, .9, 1.9),
        dir1: [-.5, .6, -.5],
        dir2: [.5, 1.6, .5],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .8,
        maxLifeTime: 1.5,
        minSize: .05,
        maxSize: .13,
        manualEmitCount: iW,
        gravity: [0, .4, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: Ci(ei, vi),
        hideDist: 16,
        blendMode: oi.d.Add
      }
    }
    var Ri = OW(100);
    const Gi = "harp_pling",
      Ii = "cloth1",
      ai = [
        [0, .55, 1],
        [110, .55, 1.5]
      ],
      ri = [
        [0, .5, 1],
        [85, .5, 1.26],
        [170, .5, 1.5],
        [255, .45, 2]
      ],
      zi = [
        [0, .5, 1.5],
        [85, .45, 2]
      ],
      Fi = [
        [0, .4, .75],
        [170, .4, .63]
      ],
      Qi = "keysJingle",
      WO = [
        [],
        [
          [.45, 1]
        ],
        [
          [.7, 1.25],
          [.4, 1.6]
        ]
      ];

    function iO(WW, iW) {
      return 1 === iW ? WW : {
        ...WW,
        manualEmitCount: Math.max(1, Math.round(WW.manualEmitCount * iW))
      }
    }
    class OO {
      constructor(WW, iW) {
        this.api = WW, this.localPlayerId = iW, this.layers = [{
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }, {
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }], this.timers = new Set, this.camera = [0, 0, 0], this.look = [0, 0, 1], this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.lastFrameAt = 0, this.particleShare = (0, Ri.isMobile)() ? .6 : 1, WW.preloadSounds([Gi, Qi, Ii])
      }
      reset() {
        this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.setBells(0)
      }
      receiveHint(WW) {
        const iW = this.hint;
        this.hint = WW, "none" !== WW.santaHintState && (iW && iW.santaHintContract === WW.santaHintContract ? null === iW.santaHintScarf && null !== WW.santaHintScarf ? this.play(ri) : null === iW.santaHintHat && null !== WW.santaHintHat && this.play(zi) : this.play(ai))
      }
      receiveStatus(WW) {
        (WW.santaStatusKnown && !this.spotted || WW.santaStatusHatKnown && !this.hatSpotted) && this.play(Fi), this.spotted = WW.santaStatusKnown, this.hatSpotted = WW.santaStatusHatKnown
      }
      wrapStarted() {
        this.api.playSound(this.localPlayerId, Ii, .5, 1.2)
      }
      setBells(WW) {
        const iW = WO[WW];
        this.layers.forEach(((WW, OW) => {
          var mW;
          const [EW, NW] = null !== (mW = iW[OW]) && void 0 !== mW ? mW : [0, WW.rate];
          var PW;
          (0 === EW && WW.target > 0 && WW.sound && this.stopLater(WW), WW.target = EW, EW > 0 && NW !== WW.rate) && (WW.rate = NW, null === (PW = WW.sound) || void 0 === PW || PW.rate(NW))
        }))
      }
      receiveFx(WW) {
        let {
          santaFxKind: iW,
          santaFxAt: OW
        } = WW;
        if (this.api.particlesEnabled())
          if ("caughtSanta" === iW) OW && this.burst(Bi(OW));
          else if ("toTunnel" === iW) this.later(300, (() => {
          const [WW, iW, OW] = this.ahead();
          this.burst([qi([WW, iW - 1, OW], 36)])
        }));
        else {
          const [WW, iW, OW] = this.ahead();
          this.burst(Bi([WW, iW - .6, OW], .8))
        }
      }
      frame(WW) {
        const {
          cameraPosition: iW,
          cameraDirection: OW
        } = WW;
        this.camera[0] = iW[0], this.camera[1] = iW[1], this.camera[2] = iW[2], this.look[0] = OW[0], this.look[1] = OW[1], this.look[2] = OW[2];
        const mW = performance.now(),
          EW = Math.min(.1, (mW - (this.lastFrameAt || mW)) / 1e3);
        this.lastFrameAt = mW;
        for (const PW of this.layers) {
          if (0 === PW.volume && 0 === PW.target && !PW.sound) continue;
          PW.target > 0 && !PW.sound && (PW.sound = this.api.playSound(this.localPlayerId, Qi, 0, PW.rate, void 0, !0));
          const WW = (PW.target > PW.volume ? 3 : 1.2) * EW;
          var NW;
          if (PW.volume = PW.target > PW.volume ? Math.min(PW.target, PW.volume + WW) : Math.max(PW.target, PW.volume - WW), PW.volume <= 0 && 0 === PW.target) this.silence(PW);
          else null === (NW = PW.sound) || void 0 === NW || NW.setRelativeVolume(PW.volume)
        }
      }
      dispose() {
        for (const WW of this.timers) window.clearTimeout(WW);
        this.timers.clear();
        for (const WW of this.layers) WW.target = 0, this.silence(WW)
      }
      silence(WW) {
        var iW;
        null === (iW = WW.sound) || void 0 === iW || iW.stop(), WW.sound = null, WW.volume = 0
      }
      stopLater(WW) {
        const iW = WW.sound,
          OW = window.setTimeout((() => {
            this.timers.delete(OW), WW.sound === iW && 0 === WW.target && this.silence(WW)
          }), WW.volume / 1.2 * 1e3 + 150);
        this.timers.add(OW)
      }
      ahead() {
        const [WW, iW, OW] = this.camera, [mW, EW, NW] = this.look;
        return [WW + 1.8 * mW, iW + 1.8 * EW - .35, OW + 1.8 * NW]
      }
      later(WW, iW) {
        const OW = window.setTimeout((() => {
          this.timers.delete(OW), iW()
        }), WW);
        this.timers.add(OW)
      }
      play(WW) {
        for (const [iW, OW, mW] of WW) 0 === iW ? this.api.playSound(this.localPlayerId, Gi, OW, mW) : this.later(iW, (() => {
          this.api.playSound(this.localPlayerId, Gi, OW, mW)
        }))
      }
      burst(WW) {
        for (const iW of WW) this.api.playParticleEffect(iO(iW, this.particleShare))
      }
    }
    class mO {
      constructor(WW) {
        this.api = WW, this.wait = null
      }
      yZ(WW) {
        const iW = performance.now();
        this.wait = {
          min: WW.santaFlyoverMin,
          max: WW.santaFlyoverMax,
          start: WW.santaFlyoverStart,
          until: iW + WW.santaFlyoverWaitMs,
          loadedAt: null,
          settledFrames: 0,
          lastFrameAt: iW
        }
      }
      frame(WW) {
        const iW = this.wait;
        if (!iW) return;
        const OW = performance.now(),
          mW = OW - iW.lastFrameAt;
        iW.lastFrameAt = OW, OW > iW.until ? this.wait = null : null !== iW.loadedAt ? (iW.settledFrames = mW <= 60 ? iW.settledFrames + 1 : 0, iW.settledFrames >= 6 && OW - iW.loadedAt >= 300 && (this.wait = null, this.api.sendCommand("santaFlyoverReady"))) : WW && this.isLoaded(iW, WW) && (iW.loadedAt = OW)
      }
      isLoaded(WW, iW) {
        let {
          min: OW,
          max: EW,
          start: NW
        } = WW;
        if (iW[0] < OW[0] || iW[0] > EW[0] || iW[2] < OW[2] || iW[2] > EW[2]) return !1;
        const PW = mW.f.jZ,
          LW = WW => WW.map((WW => Math.floor(WW / PW))),
          cW = [LW(iW), LW(NW)],
          [wW, tW] = [LW(OW), LW(EW)];
        for (let mW = wW[0]; mW <= tW[0]; mW++)
          for (let WW = wW[1]; WW <= tW[1]; WW++)
            for (let iW = wW[2]; iW <= tW[2]; iW++) {
              if (cW.some((OW => {
                  let [EW, NW, PW] = OW;
                  return (mW - EW) ** 2 + (WW - NW) ** 2 + (iW - PW) ** 2 <= 4
                })) && !this.api.isBlockInLoadedChunk(mW * PW, WW * PW, iW * PW)) return !1
            }
        return !0
      }
    }
    var EO = OW(40090),
      NO = OW(1301),
      PO = OW(39775);
    class LO {
      constructor(WW) {
        this.api = WW, this.sent = null, this.timer = null, this.recheck = setInterval((() => {
          this.wZ()
        }), 5e3), this.pacer = new PO.c({
          limit: 2,
          spacingMs: 3e3
        }), this.heldBack = !1, this.stopPacer = void 0, this.resized = () => {
          null !== this.timer && clearTimeout(this.timer), this.timer = setTimeout((() => {
            this.timer = null, this.wZ()
          }), 400)
        }, window.addEventListener("resize", this.resized), this.stopPacer = this.pacer.subscribe((() => {
          this.heldBack && !this.pacer.isPacing() && (this.heldBack = !1, this.wZ())
        })), this.wZ()
      }
      resend() {
        this.sent = null, this.wZ()
      }
      dispose() {
        window.removeEventListener("resize", this.resized), this.stopPacer(), this.pacer.dispose(), clearInterval(this.recheck), null !== this.timer && clearTimeout(this.timer)
      }
      wZ() {
        var WW, iW;
        const OW = null !== (WW = null === (iW = (0, NO.y)().gameRender()) || void 0 === iW ? void 0 : iW.canvas.width) && void 0 !== WW ? WW : 0;
        if (OW <= 0 || window.innerWidth <= 0 || window.innerHeight <= 0) return;
        const mW = window.innerWidth / window.innerHeight,
          EW = (0, EO.b)(OW),
          NW = this.sent;
        NW && Math.abs(mW / NW.aspect - 1) < .02 && Math.abs(EW / NW.tagScale - 1) < .02 || (this.pacer.tryStart() ? (this.sent = {
          aspect: mW,
          tagScale: EW
        }, this.api.sendCommand(`santaView ${Math.round(1e3*mW)} ${Math.round(1e3*EW)}`)) : this.heldBack = !0)
      }
    }
    var cO = OW(40371);
    const wO = [20, 9, 20],
      tO = [8, 12],
      ZO = .3,
      xO = [.05, .13],
      lO = {
        kind: "smokePuff"
      },
      AO = [245, 250, 255],
      bO = {
        aZ: 900,
        perS: 80
      },
      jO = {
        aZ: 360,
        perS: 34
      };
    class UO {
      constructor(WW) {
        this.api = WW, this.tier = (0, Ri.isMobile)() ? jO : bO, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
      }
      onAfterRender(WW) {
        const iW = performance.now(),
          OW = 0 === this.lastMs ? 0 : Math.min(iW - this.lastMs, 250) / 1e3;
        if (this.lastMs = iW, !this.api.particlesEnabled()) return void this.dispose();
        const mW = Math.hypot(WW[0] - this.last[0], WW[1] - this.last[1], WW[2] - this.last[2]) > 20;
        if (this.last[0] = WW[0], this.last[1] = WW[1], this.last[2] = WW[2], mW && this.dispose(), (mW || iW >= this.nextRoofCheckMs) && (this.nextRoofCheckMs = iW + 250, this.roofed = this.hasRoof(WW)), this.roofed) return void(this.budget = 0);
        const EW = this.at;
        let NW;
        EW[0] = WW[0], EW[1] = WW[1] + 7, EW[2] = WW[2], this.system ? (this.budget = Math.min(this.budget + this.tier.perS * OW, this.tier.perS / 4), NW = Math.floor(this.budget), this.budget -= NW) : (this.system = this.api.createParticles(this.opts(), {
          pos: EW,
          half: wO
        }), NW = Math.floor(this.tier.aZ / 2)), NW > 0 && (this.system.moveTo(EW, wO), this.system.emit(NW))
      }
      dispose() {
        var WW;
        null === (WW = this.system) || void 0 === WW || WW.dispose(), this.system = null
      }
      hasRoof(WW) {
        let [iW, OW, mW] = WW;
        const EW = Math.floor(iW),
          NW = Math.floor(mW);
        let PW = 0;
        for (let LW = Math.floor(OW) + 1; LW <= Math.floor(OW) + 16; LW++)
          if (PW = this.api.isSolidToPlayerBlockId(this.api.getBlockId(EW, LW, NW)) ? PW + 1 : 0, PW >= 4) return !0;
        return !1
      }
      opts() {
        const [WW, iW, OW] = AO;
        return {
          texture: lO,
          aZ: this.tier.aZ,
          minLifeTime: tO[0] / cO.d,
          maxLifeTime: tO[1] / cO.d,
          minEmitPower: 1.1 * cO.d * .8,
          maxEmitPower: 1.1 * cO.d * 1.2,
          minSize: xO[0],
          maxSize: xO[1],
          emitRate: 0,
          gravity: [0, 0, 0],
          dir1: [-.3, -1, -.3],
          dir2: [ZO, -1, ZO],
          colorGradients: [{
            timeFraction: 0,
            minColor: [WW, iW, OW, 0]
          }, {
            timeFraction: .12,
            minColor: [WW, iW, OW, .9]
          }, {
            timeFraction: .85,
            minColor: [WW, iW, OW, .9]
          }, {
            timeFraction: 1,
            minColor: [WW, iW, OW, 0]
          }],
          blendMode: oi.d.Standard
        }
      }
    }
    var kO = OW(37838);
    const sO = [{
        icon: "eyes",
        key: "secretSantaHud:introSantas"
      }, {
        icon: "gift",
        key: "secretSantaHud:introFind"
      }, {
        icon: "coins",
        key: "secretSantaHud:introCoal"
      }],
      MO = (0, NW.memo)((function() {
        const {
          t: WW
        } = (0, xW.B)();
        return (0, gW.jsxs)("div", {
          className: "SecretSantaIntroLines",
          children: [(0, gW.jsxs)("div", {
            className: "SecretSantaIntroHeadline",
            children: [(0, gW.jsx)(BW.c, {
              name: "user-secret"
            }), (0, gW.jsx)("span", {
              children: WW("secretSantaHud:introHeadline")
            })]
          }), sO.map((iW => {
            let {
              icon: OW,
              key: mW
            } = iW;
            return (0, gW.jsxs)("div", {
              className: "SecretSantaIntroLine",
              children: [(0, gW.jsx)(BW.c, {
                name: OW,
                fixedWidth: !0
              }), (0, gW.jsx)("span", {
                children: WW(mW)
              })]
            }, mW)
          }))]
        })
      })),
      KO = (0, NW.memo)((function(WW) {
        let {
          controller: iW
        } = WW;
        return (0, gW.jsx)("div", {
          ref: iW.bindIntro,
          className: "SecretSantaIntro",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, gW.jsx)("div", {
            className: "SecretSantaIntroCard",
            children: (0, gW.jsx)(MO, {})
          })
        })
      })),
      SO = "secretSantaIntroShown";
    class YO {
      constructor() {
        this.element = null, this.fade = null, this.fadeLookedAt = -1 / 0, this.armedUntil = 0, this.shownAt = null, this.drawn = -1, this.intro = null, this.introUntil = 0, this.drawnIntro = null, this.bind = WW => {
          this.element = WW, this.drawn = -1
        }, this.bindIntro = WW => {
          this.intro = WW, this.drawnIntro = null
        }
      }
      receiveFlyover(WW) {
        this.armedUntil = performance.now() + WW + 3e3
      }
      frame(WW) {
        const iW = performance.now(),
          OW = this.snowAlpha(iW);
        if (this.drawIntro(iW, OW), OW <= 0) return null !== this.shownAt && (iW < this.armedUntil && this.startIntro(iW), this.armedUntil = 0), this.shownAt = null, void this.draw(0);
        if (null === this.shownAt) {
          if (OW < 1 || WW && iW >= this.armedUntil) return void this.draw(0);
          this.shownAt = iW
        }
        this.draw(Math.min(1, (iW - this.shownAt) / 300) * OW)
      }
      startIntro(WW) {
        var iW;
        const OW = null !== (iW = ZW.i.getItem(SO)) && void 0 !== iW ? iW : 0;
        ZW.i.setItem(SO, OW + 1), this.introUntil = WW + (OW < 3 ? 4900 : 3e3)
      }
      drawIntro(WW, iW) {
        0 !== this.introUntil && (WW >= this.introUntil || iW > 0) && (this.introUntil = 0);
        const OW = 0 !== this.introUntil;
        this.intro && OW !== this.drawnIntro && (this.drawnIntro = OW, this.intro.classList.toggle("Shown", OW))
      }
      snowAlpha(WW) {
        var iW, OW, mW, EW;
        (null === (iW = this.fade) || void 0 === iW || !iW.isConnected) && WW - this.fadeLookedAt >= 250 && (this.fadeLookedAt = WW, this.fade = document.querySelector(`[${kO.c}]`));
        const NW = null === (OW = this.fade) || void 0 === OW ? void 0 : OW.style;
        if (!NW || "none" === NW.display) return 0;
        const PW = null !== (mW = null === (EW = NW.backgroundColor.match(/\d+/g)) || void 0 === EW ? void 0 : EW.slice(0, 3).map(Number)) && void 0 !== mW ? mW : [];
        return 3 === PW.length && PW.every((WW => WW >= 200)) && Number(NW.opacity) || 0
      }
      draw(WW) {
        const iW = Math.round(100 * WW) / 100;
        this.element && iW !== this.drawn && (this.drawn = iW, this.element.style.opacity = String(iW), this.element.style.display = iW > 0 ? "flex" : "none")
      }
    }
    const yO = (0, NW.memo)((function(WW) {
        let {
          controller: iW
        } = WW;
        const {
          t: OW
        } = (0, xW.B)();
        return (0, gW.jsx)("div", {
          ref: iW.bind,
          className: "SecretSantaSnowTitle",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, gW.jsxs)("div", {
            className: "SecretSantaSnowTitleCard",
            children: [(0, gW.jsxs)("div", {
              className: "SecretSantaSnowTitleName",
              children: [(0, gW.jsx)(BW.c, {
                name: "hat-santa",
                className: "SecretSantaSnowTitleIcon"
              }), OW("secretSantaHud:titleName")]
            }), (0, gW.jsx)(MO, {})]
          })
        })
      })),
      TO = "SecretSantaMode",
      JO = mW.f.ZU * mW.f.playerEyeToHeightRatio;

    function hO(WW) {
      document.body.classList.toggle("SecretSantaPodium", WW)
    }
    const HO = function(WW, iW, OW, mW) {
      let {
        localPlayerId: EW
      } = mW;
      const LW = new eW((() => {
          var WW;
          null === (WW = bW) || void 0 === WW || WW.wrapStarted()
        })),
        cW = new YO,
        wW = [0, 0, 0];
      let tW = null;
      const ZW = [0, 0, 0],
        xW = [0, 0, 0];
      let lW = null,
        AW = null,
        bW = null,
        jW = null,
        UW = null,
        kW = null,
        sW = null;
      const MW = WW => {
          lW && null !== WW && WW !== EW && !sW && (sW = {
            target: WW,
            at: performance.now(),
            first: null
          })
        },
        KW = (WW, iW) => {
          sW = null, LW.pressGift(WW.at, iW) && (tW = WW.target)
        },
        SW = (WW, iW) => {
          if (null === tW) return;
          if (!WW.readDrawnPosition(tW, ZW)) return void(tW = null);
          xW[0] = iW[0], xW[1] = iW[1] + JO, xW[2] = iW[2];
          const OW = Math.hypot(ZW[0] - iW[0], ZW[1] - iW[1], ZW[2] - iW[2]);
          LW.aimAtWrap(function(WW, iW, OW) {
            const mW = OW[0] - WW[0],
              EW = OW[2] - WW[2],
              NW = Math.hypot(iW[0], iW[2]);
            let PW = WW[1];
            const LW = NW > 0 ? (mW * iW[0] + EW * iW[2]) / NW : 0;
            LW > 0 && (PW += iW[1] / NW * LW), PW = Math.max(OW[1], Math.min(OW[1] + 1.8, PW));
            const cW = [mW, PW - WW[1], EW],
              wW = Math.hypot(cW[0], cW[1], cW[2]),
              tW = Math.hypot(iW[0], iW[1], iW[2]);
            if (0 === wW || 0 === tW) return 0;
            const ZW = (cW[0] * iW[0] + cW[1] * iW[1] + cW[2] * iW[2]) / (wW * tW);
            return 180 * Math.acos(Math.max(-1, Math.min(1, ZW))) / Math.PI
          }(xW, WW.getActionRay().direction, ZW), OW) || (tW = null)
        },
        YW = (WW, iW, OW) => {
          const mW = [0, 0, 0];
          OW && WW.readDrawnPosition(iW.target, mW) ? iW.first ? KW(iW, function(WW, iW, OW, mW) {
            const EW = OW[0] - WW[0],
              NW = OW[1] - WW[1],
              PW = OW[2] - WW[2],
              LW = Math.hypot(EW, NW, PW);
            return 0 === LW || mW <= 0 ? {
              distance: LW,
              awaySpeed: 0
            } : {
              distance: LW,
              awaySpeed: (EW * (OW[0] - iW[0]) + NW * (OW[1] - iW[1]) + PW * (OW[2] - iW[2])) / LW / mW
            }
          }(OW, iW.first.pos, mW, (performance.now() - iW.first.at) / 1e3)) : iW.first = {
            pos: mW,
            at: performance.now()
          } : KW(iW, null)
        };
      return {
        onCreate: WW => {
          lW = WW, document.body.classList.add(TO), bW = new OO(WW, EW), jW = new UO(WW), UW = new mO(WW), kW = new LO(WW), AW = (0, PW.O)((0, NW.createElement)(NW.Fragment, null, (0, NW.createElement)(Ki, {
            controller: LW
          }), (0, NW.createElement)(VW, {
            controller: LW
          }), (0, NW.createElement)(yO, {
            controller: cW
          }), (0, NW.createElement)(KO, {
            controller: cW
          })))
        },
        onClose: () => {
          var WW, iW, OW, mW;
          document.body.classList.remove(TO), hO(!1), null === (WW = AW) || void 0 === WW || WW(), AW = null, LW.dispose(), null === (iW = bW) || void 0 === iW || iW.dispose(), bW = null, null === (OW = jW) || void 0 === OW || OW.dispose(), jW = null, UW = null, null === (mW = kW) || void 0 === mW || mW.dispose(), kW = null, lW = null
        },
        onPlayerAltAction: (WW, iW, OW, mW, EW, NW) => {
          MW(NW)
        },
        onPlayerAttackEntity: (WW, iW) => {
          MW(iW)
        },
        onAfterRender: (WW, iW) => {
          var OW, mW, NW, PW;
          const tW = null !== (OW = lW) && void 0 !== OW && OW.readDrawnPosition(EW, wW) ? wW : null;
          sW && lW && YW(lW, sW, tW), lW && tW && SW(lW, tW), LW.frame(iW.cameraHeading, tW), null === (mW = bW) || void 0 === mW || mW.frame(iW), null === (NW = jW) || void 0 === NW || NW.onAfterRender(iW.cameraPosition), null === (PW = UW) || void 0 === PW || PW.frame(tW), cW.frame(LW.getView().shown)
        },
        onReceivedMessageFromServer: (WW, iW) => {
          var OW;
          if ("secretSantaHint" === WW) LW.receiveHint(iW), null === (OW = bW) || void 0 === OW || OW.receiveHint(iW);
          else if ("secretSantaStatus" === WW) {
            var mW;
            LW.receiveStatus(iW), null === (mW = bW) || void 0 === mW || mW.receiveStatus(iW)
          } else if ("secretSantaWrap" === WW) {
            sW && KW(sW, null);
            const {
              santaWrapMs: WW,
              santaWrapDone: OW
            } = iW;
            LW.receiveWrap(WW, OW)
          } else if ("secretSantaMarket" === WW) {
            var EW;
            null === (EW = bW) || void 0 === EW || EW.reset(), LW.receiveMarket(iW)
          } else if ("secretSantaBells" === WW) {
            var NW;
            const {
              santaBellsLevel: WW
            } = iW;
            LW.receiveBells(WW), null === (NW = bW) || void 0 === NW || NW.setBells(WW)
          } else if ("secretSantaFx" === WW) {
            var PW;
            const WW = iW;
            "toTunnel" === WW.santaFxKind && LW.snowBlink(), null === (PW = bW) || void 0 === PW || PW.receiveFx(WW)
          } else if ("secretSantaFlyover" === WW) {
            var wW;
            null === (wW = UW) || void 0 === wW || wW.yZ(iW), cW.receiveFlyover(iW.santaFlyoverWaitMs)
          } else if ("secretSantaPodium" === WW) {
            const {
              santaPodiumShown: WW
            } = iW;
            var tW;
            if (hO(WW), !WW) null === (tW = kW) || void 0 === tW || tW.resend()
          }
        }
      }
    }
  },
  39726: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      f: () => EW
    });
    var mW = OW(344);
    const EW = (0, mW.Ab)([0, 0, -1]),
      NW = [{
        name: "S",
        bearing: (0, mW.Ab)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, mW.Ab)([-1, 0, 0])
      }, {
        name: "N",
        bearing: EW
      }, {
        name: "W",
        bearing: (0, mW.Ab)([1, 0, 0])
      }]
  },
  39722: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      f: () => NW
    });
    var mW = OW(39726);

    function EW(WW, iW, OW) {
      return [100 * (OW.mapMaxX - WW) / (OW.mapMaxX - OW.mapMinX), 100 * (iW - OW.mapMinZ) / (OW.mapMaxZ - OW.mapMinZ)]
    }

    function NW(WW, iW, OW, NW) {
      const [PW, LW] = EW(WW, iW, NW), cW = mW.f - OW;
      return {
        rotation: cW,
        transform: `rotate(${cW}rad) translate(-${PW}%, -${LW}%)`
      }
    }
  },
  40371: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW,
      h: () => NW
    });
    const mW = 1 / .6,
      EW = {
        kind: "smokePuff"
      };
    class NW {
      constructor(WW, iW, OW) {
        this.style = WW, this.aZ = iW, this.half = OW, this.particles = null, this.lastFrame = -1
      }
      emit(WW, iW, OW) {
        let NW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return OW !== this.lastFrame && (this.lastFrame = OW, this.particles || (this.particles = WW.createParticles(function(WW, iW) {
          const [
            [OW, NW, PW],
            [LW, cW, wW]
          ] = WW.colours;
          return {
            texture: WW.soft ? EW : "square_particle",
            aZ: iW,
            minLifeTime: WW.life[0] / mW,
            maxLifeTime: WW.life[1] / mW,
            minEmitPower: WW.power[0] * mW,
            maxEmitPower: WW.power[1] * mW,
            minSize: WW.size[0],
            maxSize: WW.size[1],
            emitRate: 0,
            gravity: [0, WW.lift * mW * mW, 0],
            dir1: [-WW.spread, 1, -WW.spread],
            dir2: [WW.spread, 1, WW.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [OW, NW, PW, WW.alpha],
              maxColor: [LW, cW, wW, WW.alpha]
            }, {
              timeFraction: 1,
              minColor: [OW, NW, PW, 0],
              maxColor: [LW, cW, wW, 0]
            }],
            blendMode: WW.blendMode
          }
        }(this.style, this.aZ), {
          pos: iW,
          half: this.half
        })), this.particles.moveTo(iW, this.half), this.particles.emit(NW), !0)
      }
      dispose() {
        var WW;
        null === (WW = this.particles) || void 0 === WW || WW.stop(), this.particles = null
      }
    }
  },
  40090: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW
    });
    const mW = 1400,
      EW = .45;

    function NW(WW) {
      return WW < mW ? Math.pow(mW / WW, EW) : 1
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);