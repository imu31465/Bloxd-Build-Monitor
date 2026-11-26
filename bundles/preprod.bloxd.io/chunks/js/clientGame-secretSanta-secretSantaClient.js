export const id = 28;
export const ids = [28];
export const modules = {
  37472: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => WH,
      e: () => MH,
      i: () => GH,
      k: () => XH
    });
    var AH = LH(34986),
      rH = LH(37474),
      SH = LH(37479),
      hH = LH(9412),
      tH = LH(1450),
      zH = LH(45),
      CH = LH(69),
      EH = LH(1225);

    function XH() {
      var HH;
      return (0, tH.e)(rH.b, (0, rH.p)()), (0, EH.jsx)(EH.Fragment, {
        children: null === (HH = (0, rH.p)()) || void 0 === HH ? void 0 : HH.content
      })
    }

    function GH(HH) {
      var BH;
      let {
        show: LH
      } = HH;
      (0, tH.e)(rH.b, (0, rH.p)());
      const CH = null === (BH = (0, rH.p)()) || void 0 === BH ? void 0 : BH.menu;
      return (0, zH.useEffect)((() => {
        var HH;
        LH || (null === CH || void 0 === CH || null === (HH = CH.onClose) || void 0 === HH || HH.call(CH), (0, SH.r)())
      }), [LH, CH]), (0, zH.useEffect)((() => LH ? (0, hH.e)(SH.A, SH.g) : void 0), [LH]), (0, EH.jsx)(AH.e, {
        showing: LH,
        globallyUniqueKey: "clientGameMenu",
        children: null === CH || void 0 === CH ? void 0 : CH.content
      })
    }
    const YH = new Map,
      uH = new Set;

    function QH(HH, BH) {
      BH ? YH.set(HH, BH) : YH.delete(HH);
      for (const LH of uH) LH()
    }

    function WH(HH) {
      let {
        placement: BH = "bottom"
      } = HH;
      const LH = (0, zH.useRef)(null);
      return (0, zH.useLayoutEffect)((() => {
        const HH = LH.current;
        return QH(BH, HH), () => {
          YH.get(BH) === HH && QH(BH, null)
        }
      }), [BH]), (0, EH.jsx)("div", {
        ref: LH,
        id: `clientGameHud-${BH}`,
        style: {
          display: "contents"
        }
      })
    }

    function MH(HH) {
      let {
        children: BH,
        placement: LH = "bottom"
      } = HH;
      const [AH, rH] = (0, zH.useState)((() => {
        var HH;
        return null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null
      }));
      return (0, zH.useEffect)((() => {
        const HH = () => {
          var HH;
          rH(null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null)
        };
        return uH.add(HH), HH(), () => {
          uH.delete(HH)
        }
      }), [LH]), AH ? (0, CH.createPortal)(BH, AH) : null
    }
  },
  37390: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => kH,
      g: () => VH,
      j: () => OH,
      m: () => TH,
      n: () => UH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(3465),
      tH = LH(304),
      zH = LH(2628),
      CH = LH(18),
      EH = LH(2036),
      XH = LH(30),
      GH = LH(2051),
      YH = LH(15),
      uH = LH(2059),
      QH = LH(1390),
      WH = LH(9520),
      MH = LH(2081),
      xH = LH(1123),
      vH = LH(1225);
    const PH = 7e3;

    function TH() {
      const {
        loadingOverlayVisible: HH,
        openInGameMenuName: BH,
        openEverythingMenuName: LH
      } = (0, YH.m)(["loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]);
      return HH || null !== BH || null !== LH
    }

    function UH(HH, BH, LH) {
      const rH = (0, AH.useRef)(LH);
      rH.current = LH;
      const SH = (0, AH.useRef)({
        card: HH,
        ms: 0
      });
      (0, AH.useEffect)((() => {
        if (BH || null === HH) return;
        SH.current.card !== HH && (SH.current = {
          card: HH,
          ms: 0
        });
        const LH = SH.current,
          AH = performance.now(),
          hH = setTimeout((() => {
            rH.current()
          }), PH - LH.ms);
        return () => {
          clearTimeout(hH), LH.ms += performance.now() - AH
        }
      }), [BH, HH])
    }
    const VH = (0, AH.memo)((function() {
      const {
        isTouchScreen: HH
      } = (0, YH.m)(["isTouchScreen"]), BH = (0, QH.y)();
      (0, hH.b)();
      const LH = (0, zH.j)("showBasicMovementControls"),
        [rH, EH] = (0, AH.useState)("movement"),
        GH = "movement" === rH,
        uH = BH && !1 !== LH;
      (0, AH.useEffect)((() => {
        "padActions" !== rH || uH || EH("done")
      }), [rH, uH]);
      const WH = TH();
      UH("done" === rH ? null : rH, WH, (() => {
        EH("movement" === rH && (0, QH.m)() ? "padActions" : "done")
      }));
      const MH = XH.e.getItem(tH.Qb) > 2,
        xH = !MH && (!HH || BH) && GH && !1 !== LH;
      return (0, AH.useEffect)((() => {
        xH && !WH && CH.k.AX("controlsTutorialShown", "movement")
      }), [xH, WH]), MH ? (0, vH.jsx)(mH, {
        showingMovementControls: !1
      }) : (0, vH.jsxs)(vH.Fragment, {
        children: [xH ? (0, vH.jsxs)("div", {
          className: SH()("ControlsTutorialDiv", {
            Covered: WH
          }),
          children: [(0, vH.jsx)(OH, {}), (0, vH.jsx)(kH, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, vH.jsx)(kH, {
            header: "Jump",
            noaAction: "jump"
          })]
        }) : null, "padActions" === rH && uH && (0, vH.jsx)(bH, {
          covered: WH
        }), (0, vH.jsx)(mH, {
          showingMovementControls: "done" !== rH
        })]
      })
    }));

    function OH() {
      const HH = (0, QH.y)();
      return (0, vH.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, vH.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), HH && (0, vH.jsx)(uH.b, {
          noaAction: "forward"
        }), !HH && (0, vH.jsxs)(vH.Fragment, {
          children: [(0, vH.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, vH.jsx)(uH.b, {
              noaAction: "forward"
            })
          }), (0, vH.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, vH.jsx)(uH.b, {
              noaAction: "left"
            }), (0, vH.jsx)(uH.b, {
              noaAction: "backward"
            }), (0, vH.jsx)(uH.b, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function bH(HH) {
      let {
        covered: BH
      } = HH;
      const {
        t: LH
      } = (0, xH.B)(), AH = (0, zH.j)("useInventory");
      return (0, vH.jsxs)("div", {
        className: SH()("ControlsTutorialDiv", {
          Covered: BH
        }),
        children: [(0, vH.jsx)(kH, {
          header: LH("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, vH.jsx)(kH, {
          header: LH("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== AH && (0, vH.jsx)(kH, {
          header: LH("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, vH.jsx)(kH, {
          header: LH("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function kH(HH) {
      let {
        header: BH,
        noaAction: LH
      } = HH;
      return (0, vH.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, vH.jsx)("div", {
          className: "KeyHeader",
          children: BH
        }), (0, vH.jsx)(uH.b, {
          noaAction: LH
        })]
      })
    }

    function mH(HH) {
      let {
        showingMovementControls: BH
      } = HH;
      const {
        isTouchScreen: LH
      } = (0, YH.m)(["isTouchScreen"]), rH = (0, QH.y)(), SH = (0, MH.d)("OpenShop"), [hH, tH] = (0, AH.useState)(!1), uH = `SeenShopControls|${(0,GH.c)("connectedGame",(HH=>HH.gameNameWithVariation))}`, xH = () => (!(0, QH.m)() || null !== (0, WH.c)("OpenShop")) && !XH.e.getItem(uH) && EH.e.get("shopInfo") && !BH, PH = () => (tH(!0), XH.e.setItem(uH, !0), (0, QH.m)() || CH.k.AX("showShopTouchTutorial"), setTimeout((() => {
        tH(!1)
      }), 7e3));
      (0, AH.useEffect)((() => {
        let HH;
        const BH = CH.k.subscribe("showShopTutorial", (() => {
          xH() && (HH = PH())
        }));
        return () => {
          clearTimeout(HH), CH.k.unsubscribe(BH)
        }
      }), [BH]);
      const TH = (0, AH.useRef)();
      return (0, zH.f)("currencyAmounts", (HH => {
        if (xH()) {
          let LH = !1;
          const AH = EH.e.get("shopInfo");
          for (const rH in AH) {
            for (const SH in AH[rH].items) {
              var BH;
              const hH = AH[rH].items[SH];
              if (void 0 !== hH.currency && HH[hH.currency] && hH.cost <= HH[hH.currency].amount && (null === (BH = hH.hidden) || void 0 === BH || !BH)) {
                LH = !0;
                break
              }
            }
            if (LH) break
          }
          LH && (TH.current = PH())
        }
      })), (0, AH.useEffect)((() => () => {
        clearTimeout(TH.current)
      }), [BH]), !hH || rH && !SH ? null : (0, vH.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: LH && !rH ? null : (0, vH.jsx)(kH, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
  },
  34986: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    var AH = LH(4947),
      rH = LH(4951);

    function SH(HH) {
      let {
        children: BH,
        showing: LH,
        globallyUniqueKey: SH,
        alwaysMountChildren: hH = !1,
        doGameplayStartStopOnShow: tH = !0,
        keepsMovement: zH = !1
      } = HH;
      return (0, rH.c)(!0, LH, SH, zH), (0, AH.e)(tH, LH), LH || hH ? BH : null
    }
  },
  37569: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      f: () => hH,
      i: () => tH,
      k: () => zH
    });
    var AH = LH(45),
      rH = LH(3465);
    const SH = 8,
      hH = "InGameHeaderContainer",
      tH = "TopRightElements";

    function zH(HH) {
      const [BH] = (0, rH.b)(), [LH, zH] = (0, AH.useState)(!1);
      return (0, AH.useLayoutEffect)((() => {
        if (!HH) return;
        const BH = document.querySelector(`.${hH}`),
          LH = document.querySelector(`.${tH}`),
          AH = () => {
            const AH = HH.getBoundingClientRect(),
              rH = BH ? BH.getBoundingClientRect().right : 0,
              hH = LH ? LH.getBoundingClientRect().left : window.innerWidth,
              tH = AH.left < rH + SH,
              CH = AH.right > hH - SH;
            zH(tH || CH)
          };
        AH();
        const rH = new ResizeObserver(AH);
        return rH.observe(HH), BH && rH.observe(BH), LH && rH.observe(LH), () => {
          rH.disconnect()
        }
      }), [HH, BH]), LH
    }
  },
  40413: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      g: () => rH,
      h: () => SH
    });
    var AH = LH(45);

    function rH(HH) {
      return tH(HH, zH)
    }

    function SH(HH) {
      return tH(HH, CH)
    }

    function hH(HH) {
      return `${Math.floor(HH/60)}:${String(HH%60).padStart(2,"0")}`
    }

    function tH(HH, BH) {
      const [, LH] = (0, AH.useState)(null);
      return (0, AH.useEffect)((() => {
        if (0 === HH) return;
        const AH = window.setInterval((() => {
          const AH = BH(HH);
          LH((BH => (null === BH || void 0 === BH ? void 0 : BH.endsAt) === HH && BH.value === AH ? BH : {
            endsAt: HH,
            value: AH
          }))
        }), 250);
        return () => {
          window.clearInterval(AH)
        }
      }), [HH, BH]), BH(HH)
    }

    function zH(HH) {
      return (HH - performance.now()) / 1e3
    }

    function CH(HH) {
      return Math.max(0, Math.ceil(zH(HH)))
    }
  },
  9520: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      f: () => CH,
      g: () => XH,
      h: () => EH,
      j: () => zH,
      m: () => YH
    });
    var AH = LH(18),
      rH = LH(2085),
      SH = LH(1405),
      hH = LH(1390);
    const tH = HH => {
        var BH, LH;
        return (0, hH.m)() && null !== (BH = null === (LH = (0, SH.c)()) || void 0 === LH ? void 0 : LH.getGlyphForNoaAction(HH)) && void 0 !== BH ? BH : null
      },
      zH = "controllerGlyph:",
      CH = HH => {
        var BH, LH;
        return null !== (BH = null === (LH = (0, SH.c)()) || void 0 === LH ? void 0 : LH.getPadGlyphIconName(HH)) && void 0 !== BH ? BH : `${zH}xbox/${HH}`
      },
      EH = HH => HH.startsWith(zH),
      XH = HH => {
        var BH, LH;
        return EH(HH) && null !== (BH = null === (LH = (0, SH.c)()) || void 0 === LH ? void 0 : LH.getPadGlyphIconUrl(HH)) && void 0 !== BH ? BH : null
      },
      GH = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", hH.e, rH.d, rH.c],
      YH = HH => {
        const BH = GH.map((BH => AH.k.subscribe(BH, HH)));
        return () => {
          for (const HH of BH) AH.k.unsubscribe(HH)
        }
      }
  },
  9412: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      e: () => rH
    });
    let AH = null;
    const rH = function(HH) {
        const BH = {
          cycle: HH,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return AH = BH, () => {
          AH === BH && (AH = null)
        }
      },
      SH = () => {
        var HH;
        return null !== (HH = AH) && void 0 !== HH && HH.canCycle() ? AH.cycle : null
      }
  },
  39461: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    const AH = 4,
      rH = 12e3,
      SH = 1e3;
    class hH {
      constructor() {
        let {
          limit: HH = AH,
          windowMs: BH = rH,
          spacingMs: LH = SH,
          now: hH = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = HH, this.windowMs = BH, this.spacingMs = LH, this.now = hH
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const HH of this.priority) HH.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const HH = this.now();
        this.sent.push(HH), this.lastSentAt = HH, this.schedule(), this.notify()
      }
      addPriority(HH) {
        return this.priority.add(HH), () => {
          this.priority.delete(HH)
        }
      }
      subscribe(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const HH of this.priority)
          if (HH.waiting()) return !0;
        return !1
      }
      prune() {
        const HH = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= HH;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const HH = this.now(),
          BH = this.lastSentAt + this.spacingMs,
          LH = Math.min(BH > HH ? BH : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        LH !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, LH - HH)))
      }
      notify() {
        for (const HH of this.listeners) HH()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37479: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => uH,
      C: () => xH,
      c: () => SH,
      g: () => QH,
      j: () => WH,
      k: () => tH,
      n: () => GH,
      r: () => MH,
      t: () => XH,
      x: () => vH
    });
    var AH = LH(15),
      rH = LH(18);
    const SH = "clientGameInventoryButtonsChanged",
      hH = new Map;

    function tH() {
      return [...hH.values()].sort(((HH, BH) => {
        var LH, AH;
        return (null !== (LH = HH.order) && void 0 !== LH ? LH : 0) - (null !== (AH = BH.order) && void 0 !== AH ? AH : 0)
      }))
    }
    let zH = null;

    function CH(HH) {
      zH = HH
    }
    let EH = !1;

    function XH(HH) {
      EH = !0;
      try {
        HH.onClick()
      } finally {
        EH = !1
      }
      HH.panel && "clientGame" === AH.c.get("openInGameMenuName") && CH(HH.id)
    }

    function GH() {
      return EH
    }

    function YH() {
      return tH().filter((HH => HH.panel && !HH.disabled))
    }

    function uH(HH) {
      const BH = YH(),
        LH = BH.findIndex((HH => HH.id === zH));
      return !(LH < 0 || BH.length < 2) && (XH(BH[(LH + HH + BH.length) % BH.length]), !0)
    }

    function QH() {
      return null !== zH && YH().length > 1
    }

    function WH() {
      CH(null)
    }

    function MH() {
      "inventory" !== AH.c.get("openInGameMenuName") && CH(null)
    }

    function xH() {
      const HH = zH;
      return CH(null), HH
    }

    function vH(HH) {
      return hH.set(HH.id, HH), rH.k.AX(SH, tH(), !0), () => {
        hH.get(HH.id) === HH && (hH.delete(HH.id), rH.k.AX(SH, tH()))
      }
    }
  },
  37474: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      c: () => xH,
      g: () => WH,
      j: () => MH,
      n: () => GH,
      p: () => CH,
      t: () => QH,
      u: () => YH,
      v: () => EH
    });
    var AH = LH(15),
      rH = LH(18),
      SH = LH(1241),
      hH = LH(37479);
    const tH = "clientGameUiChanged";
    let zH = null;

    function CH() {
      return zH
    }

    function EH(HH, BH) {
      const LH = {
        content: HH,
        menu: BH
      };
      return zH = LH, rH.k.AX(tH, zH, !0), () => {
        zH === LH && (zH = null, uH = !1, WH(), rH.k.AX(tH, null))
      }
    }
    let XH = null;

    function GH() {
      return XH
    }

    function YH(HH) {
      return XH = HH, () => {
        XH === HH && (XH = null)
      }
    }
    let uH = !1;

    function QH() {
      const HH = AH.c.get("openInGameMenuName");
      "clientGame" !== HH && (uH = "inventory" === HH), (0, hH.n)() || (0, hH.j)(), (0, SH.x)(SH.d), AH.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function WH() {
      vH(!1)
    }

    function MH() {
      vH(uH)
    }

    function xH() {
      uH && vH(!1)
    }

    function vH(HH) {
      "clientGame" === AH.c.get("openInGameMenuName") && AH.c.set({
        openInGameMenuName: HH ? "inventory" : null
      }), HH || (0, hH.j)(), uH = !1
    }
  },
  40580: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => OL
    });
    var AH = LH(176);
    const rH = ["gingerbreadLane", "toyRow", "iceRink", "carousel", "greatTree", "cocoaCorner", "lanternWalk", "marketGate", "santasGrotto"];
    var SH = LH(45),
      hH = LH(37474),
      tH = LH(1038),
      zH = LH.n(tH),
      CH = LH(15),
      EH = LH(1390),
      XH = LH(30),
      GH = LH(1123),
      YH = LH(37390),
      uH = LH(1450),
      QH = LH(18);
    var WH = LH(39415),
      MH = LH(39408);
    const xH = 2 * Math.PI * 17;

    function vH(HH, BH, LH) {
      const {
        santaMarketMinX: AH,
        santaMarketMinZ: rH,
        santaMarketSize: SH
      } = HH;
      return (0, MH.c)(BH, LH, {
        mapMinX: AH,
        mapMaxX: AH + SH,
        mapMinZ: rH,
        mapMaxZ: rH + SH
      })
    }

    function PH(HH, BH, LH) {
      return function(HH, BH, LH, AH, rH) {
        const SH = LH / 3,
          hH = HH => Math.min(2, Math.max(0, Math.floor(HH / SH)));
        return 3 * hH(rH - BH) + 2 - hH(AH - HH)
      }(HH.santaMarketMinX, HH.santaMarketMinZ, HH.santaMarketSize, BH, LH)
    }
    const TH = "secretSantaDistrictEntered",
      UH = "data-here";
    class VH {
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
      update(HH, BH, LH, AH, rH) {
        const SH = performance.now(),
          hH = 100 / HH.santaMarketSize,
          tH = 4 + .008 * Math.min(1e3, SH - this.lastAt),
          zH = Math.hypot(BH - this.lastLeft, LH - this.lastTop) > tH * hH;
        this.lastLeft = BH, this.lastTop = LH, this.lastAt = SH;
        const CH = zH ? -1 : this.here,
          EH = function(HH, BH, LH, AH, rH) {
            if (HH >= 0) {
              const BH = 100 / 3,
                SH = HH % 3 * BH,
                hH = Math.floor(HH / 3) * BH;
              if (LH >= SH - rH && LH <= SH + BH + rH && AH >= hH - rH && AH <= hH + BH + rH) return HH
            }
            return BH
          }(CH, AH, BH, LH, 1.5 * hH);
        if (EH !== this.here) {
          var XH, GH;
          this.here = EH;
          const BH = HH.santaMarketDistricts[EH];
          CH >= 0 && SH - (null !== (XH = this.bannerAt[EH]) && void 0 !== XH ? XH : -1 / 0) >= 8e3 ? (this.bannerAt[EH] = SH, this.bannerSeq++, this.setBanner({
            key: BH,
            seq: this.bannerSeq,
            at: SH
          })) : (null === (GH = this.getBanner()) || void 0 === GH ? void 0 : GH.key) !== BH && this.setBanner(null)
        }
        var YH, uH;
        this.here !== this.drawnHere && (null === (YH = this.drawnCell) || void 0 === YH || YH.removeAttribute(UH), this.drawnCell = rH.querySelector(`[data-district="${this.here}"]`), null === (uH = this.drawnCell) || void 0 === uH || uH.setAttribute(UH, ""), this.drawnHere = this.here)
      }
      dispose() {
        this.unbind(), this.reset()
      }
      setBanner(HH) {
        null === HH && null === this.banner || (this.banner = HH, QH.k.AX(TH, HH))
      }
    }
    class OH {
      constructor() {
        this.state = "idle", this.ownRing = !1, this.faded = !1, this.lastPressAt = -1 / 0, this.predictedAt = 0, this.timedOutPressAt = null, this.cooldownUntil = 0, this.averageRoundTrip = null, this.recentRoundTrips = []
      }
      press(HH, BH, LH) {
        var AH, rH;
        this.forgetOldRoundTrips(HH);
        const SH = HH - this.lastPressAt;
        if (this.lastPressAt = HH, SH < this.quietMs() || this.awaitingTimedOut(HH) || "idle" !== this.state || LH || HH < this.cooldownUntil || null === BH) return 0;
        const hH = Math.max(0, BH.awaySpeed) * ((null !== (AH = this.averageRoundTrip) && void 0 !== AH ? AH : 300) / 1e3);
        return BH.distance + hH > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = HH, this.ownRing = !0, this.faded = !1, 500 + (null !== (rH = this.averageRoundTrip) && void 0 !== rH ? rH : 0))
      }
      turnedAway(HH, BH, LH) {
        if (!this.mayTurnAway(HH)) return !1;
        const AH = 4.6 * (this.averageRoundTrip + 150) / 1e3;
        return !(BH <= 40 + (AH >= LH ? 180 : 180 * Math.asin(AH / LH) / Math.PI) && LH <= 5 + Math.max(.5, AH)) && (this.faded = !0, !0)
      }
      mayTurnAway(HH) {
        return null !== this.averageRoundTrip && "idle" !== this.state && this.ownRing && !this.faded && HH - this.predictedAt <= 350
      }
      kX(HH, BH, LH) {
        const AH = BH > 0 || !LH,
          rH = "predicted" === this.state;
        return LH && (this.cooldownUntil = HH + 1e3), AH && rH ? this.learnRoundTrip(HH, HH - this.predictedAt) : AH && this.awaitingTimedOut(HH) && (this.timedOutPressAt = null), BH > 0 ? (this.state = "confirmed", rH ? null : (this.ownRing = !1, this.faded = !1, {
          kind: "start",
          ms: BH
        })) : "idle" === this.state ? null : (this.state = "idle", this.faded && !LH ? null : {
          kind: "end",
          done: LH
        })
      }
      expired(HH) {
        var BH;
        return !("predicted" !== this.state || HH - this.predictedAt < 1200 + (null !== (BH = this.averageRoundTrip) && void 0 !== BH ? BH : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(HH, HH - this.predictedAt), !this.faded)
      }
      stop() {
        this.state = "idle", this.cooldownUntil = 0, this.timedOutPressAt = null
      }
      quietMs() {
        var HH;
        const BH = this.recentRoundTrips.reduce(((HH, BH) => {
          let {
            ms: LH
          } = BH;
          return Math.max(HH, LH)
        }), null !== (HH = this.averageRoundTrip) && void 0 !== HH ? HH : 0);
        return Math.max(300, BH > 0 ? 1.5 * BH + 300 : 1e3)
      }
      awaitingTimedOut(HH) {
        return null !== this.timedOutPressAt && HH - this.timedOutPressAt >= 3500 && (this.timedOutPressAt = null), null !== this.timedOutPressAt
      }
      forgetOldRoundTrips(HH) {
        for (; this.recentRoundTrips.length > 0 && HH - this.recentRoundTrips[0].at > 3e4;) this.recentRoundTrips.shift()
      }
      learnRoundTrip(HH, BH) {
        const LH = Math.min(2e3, Math.max(0, BH));
        this.averageRoundTrip = null === this.averageRoundTrip ? LH : this.averageRoundTrip + .3 * (LH - this.averageRoundTrip), this.recentRoundTrips.push({
          at: HH,
          ms: LH
        })
      }
    }
    const bH = "secretSantaHudChanged",
      kH = "SecretSantaHudShown",
      mH = "SecretSantaMatchOrFinish",
      oH = "SecretSantaNaughtyLock",
      IH = ["Wrapping", "Naughty", "Cancelled"],
      fH = {
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
    class lH {
      constructor(HH) {
        this.onWrapStart = HH, this.view = fH, this.endTimer = null, this.finishEndTimer = null, this.map = null, this.arrow = null, this.countdown = null, this.countdownAnimation = null, this.ring = null, this.ringFill = null, this.ringAnimation = null, this.ringEndAnimation = null, this.flash = null, this.flashAnimation = null, this.wrap = new OH, this.district = new VH, this.drawnArrow = "", this.drawnInCircle = !1, this.bindMap = HH => {
          this.map = HH, this.drawnInCircle = !1, this.district.unbind()
        }, this.bindArrow = HH => {
          this.arrow = HH, this.drawnArrow = ""
        }, this.bindCountdown = HH => {
          var BH;
          null === (BH = this.countdownAnimation) || void 0 === BH || BH.cancel(), this.countdownAnimation = null, this.countdown = HH, this.restartCountdown()
        }, this.bindRing = HH => {
          var BH;
          this.stopRing(), this.ring = HH, this.ringFill = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.querySelector(".SecretSantaRingFill")) && void 0 !== BH ? BH : null;
          const LH = this.view.naughtyEndsAt - performance.now();
          HH && LH > 0 && this.runRing("Naughty", LH)
        }, this.bindFlash = HH => {
          var BH;
          null === (BH = this.flashAnimation) || void 0 === BH || BH.cancel(), this.flashAnimation = null, this.flash = HH
        }
      }
      getView() {
        return this.view
      }
      receiveMarket(HH) {
        this.district.reset(), this.AX({
          ...this.view,
          market: HH,
          bells: 0
        })
      }
      receiveBells(HH) {
        HH !== this.view.bells && this.AX({
          ...this.view,
          bells: HH
        })
      }
      receiveHint(HH) {
        const BH = this.view.hint,
          LH = KH(this.view.nextHintAt, performance.now() + HH.santaHintNextInMs, 1e3),
          AH = LH > this.view.nextHintAt,
          rH = !BH || BH.santaHintContract !== HH.santaHintContract || BH.santaHintDistrict !== HH.santaHintDistrict || BH.santaHintCircleX !== HH.santaHintCircleX || BH.santaHintCircleZ !== HH.santaHintCircleZ,
          SH = "hunting" === HH.santaHintState && (AH || rH) ? this.view.pulse + 1 : this.view.pulse;
        this.AX({
          ...this.view,
          hint: HH,
          nextHintAt: LH,
          pulse: SH
        }), this.restartCountdown()
      }
      receiveStatus(HH) {
        var BH, LH;
        const AH = performance.now(),
          rH = KH(this.view.endsAt, AH + HH.santaStatusMsLeft),
          SH = HH.santaStatusNaughtyMs > 0 ? KH(this.view.naughtyEndsAt, AH + HH.santaStatusNaughtyMs) : 0,
          hH = 0 !== SH && 0 === this.view.naughtyEndsAt,
          tH = null !== (BH = HH.santaStatusTreeLitInMs) && void 0 !== BH ? BH : null,
          zH = null === tH ? 0 : KH(this.view.treeLitAt, AH + tH);
        this.AX({
          ...this.view,
          status: HH,
          endsAt: rH,
          naughtyEndsAt: SH,
          treeLitAt: zH,
          shown: HH.santaStatusMsLeft > 0
        }), this.scheduleEnd(rH - AH), hH ? this.runRing("Naughty", HH.santaStatusNaughtyMs) : 0 === SH && null !== (LH = this.ring) && void 0 !== LH && LH.classList.contains("Naughty") && this.stopRing()
      }
      pressGift(HH, BH) {
        if (!this.view.shown) return !1;
        const LH = this.wrap.press(HH, BH, this.view.naughtyEndsAt > HH);
        return LH > 0 && this.startWrapRing(Math.max(1, LH - (performance.now() - HH))), LH > 0
      }
      aimAtWrap(HH, BH) {
        const LH = performance.now();
        return this.wrap.turnedAway(LH, HH, BH) && this.endWrapRing(!1), this.wrap.mayTurnAway(LH)
      }
      receiveWrap(HH, BH) {
        const LH = this.wrap.kX(performance.now(), HH, BH);
        "start" === (null === LH || void 0 === LH ? void 0 : LH.kind) ? this.startWrapRing(LH.ms): "end" === (null === LH || void 0 === LH ? void 0 : LH.kind) && (LH.done && this.ring && !this.ring.classList.contains("Wrapping") && this.runRing("Wrapping", 1), this.endWrapRing(LH.done))
      }
      snowBlink() {
        var HH, BH, LH;
        null === (HH = this.flashAnimation) || void 0 === HH || HH.cancel();
        this.flashAnimation = null !== (BH = null === (LH = this.flash) || void 0 === LH ? void 0 : LH.animate([{
          opacity: 1
        }, {
          opacity: 1,
          offset: .24,
          easing: "ease-in"
        }, {
          opacity: 0
        }], {
          duration: 500
        })) && void 0 !== BH ? BH : null
      }
      frame(HH, BH) {
        this.wrap.expired(performance.now()) && this.endWrapRing(!1);
        const {
          market: LH,
          hint: AH
        } = this.view;
        if (!this.view.shown || !LH || !BH || !this.arrow || !this.map) return;
        const [rH, SH] = vH(LH, BH[0], BH[2]), hH = Math.min(100, Math.max(0, rH)), tH = Math.min(100, Math.max(0, SH)), zH = Math.min(95, Math.max(5, hH)), CH = Math.min(95, Math.max(5, tH)), EH = Math.round(180 * function(HH) {
          return HH - WH.f
        }(HH) / Math.PI), XH = `${zH.toFixed(1)}% ${CH.toFixed(1)}% ${EH}`;
        XH !== this.drawnArrow && (this.drawnArrow = XH, this.arrow.style.left = `${zH.toFixed(1)}%`, this.arrow.style.top = `${CH.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${EH}deg)`), this.district.update(LH, hH, tH, PH(LH, BH[0], BH[2]), this.map);
        const GH = "hunting" === (null === AH || void 0 === AH ? void 0 : AH.santaHintState) ? AH : null,
          YH = null !== GH && function(HH, BH) {
            let [LH, , AH] = BH;
            const {
              santaHintCircleX: rH,
              santaHintCircleZ: SH,
              santaHintCircleR: hH
            } = HH;
            return null !== rH && null !== SH && hH > 0 && Math.hypot(LH - rH, AH - SH) <= hH
          }(GH, BH);
        YH !== this.drawnInCircle && (this.drawnInCircle = YH, this.map.toggleAttribute("data-in-circle", YH))
      }
      dispose() {
        var HH, BH;
        null !== this.endTimer && (window.clearTimeout(this.endTimer), this.endTimer = null), this.clearFinishEnd(), document.body.classList.remove(mH), null === (HH = this.countdownAnimation) || void 0 === HH || HH.cancel(), this.countdownAnimation = null, this.stopRing(), null === (BH = this.flashAnimation) || void 0 === BH || BH.cancel(), this.flashAnimation = null, this.map = this.arrow = this.ring = this.flash = null, this.countdown = this.ringFill = null, this.district.dispose(), document.body.classList.remove(kH, oH), this.view = fH
      }
      AX(HH) {
        this.view = HH, document.body.classList.toggle(kH, HH.shown), document.body.classList.toggle(oH, HH.shown && 0 !== HH.naughtyEndsAt), HH.shown && (this.clearFinishEnd(), document.body.classList.add(mH)), QH.k.AX(bH, HH, !0)
      }
      scheduleEnd(HH) {
        null !== this.endTimer && window.clearTimeout(this.endTimer), this.endTimer = window.setTimeout((() => {
          this.endTimer = null, this.wrap.stop(), this.AX({
            ...this.view,
            shown: !1,
            endsAt: 0,
            naughtyEndsAt: 0,
            treeLitAt: 0,
            bells: 0
          }), this.stopRing(), this.clearFinishEnd(), this.finishEndTimer = window.setTimeout((() => {
            this.finishEndTimer = null, document.body.classList.remove(mH)
          }), 13e3)
        }), HH)
      }
      clearFinishEnd() {
        null !== this.finishEndTimer && (window.clearTimeout(this.finishEndTimer), this.finishEndTimer = null)
      }
      restartCountdown() {
        var HH, BH;
        null === (HH = this.countdownAnimation) || void 0 === HH || HH.cancel(), this.countdownAnimation = null;
        const LH = this.view.nextHintAt - performance.now();
        if (!this.countdown || "hunting" !== (null === (BH = this.view.hint) || void 0 === BH ? void 0 : BH.santaHintState) || LH <= 0) return;
        const AH = 1 - Math.min(1, LH / 1e4);
        this.countdownAnimation = this.countdown.animate([{
          strokeDashoffset: AH
        }, {
          strokeDashoffset: 1
        }], {
          duration: LH,
          fill: "forwards"
        })
      }
      runRing(HH, BH) {
        if (this.stopRing(), !this.ring || !this.ringFill) return;
        this.ring.classList.add(HH);
        const [LH, AH] = "Wrapping" === HH ? [xH, 0] : [0, xH], rH = [{
          strokeDashoffset: LH
        }, {
          strokeDashoffset: AH
        }], SH = this.ringFill.animate(rH, {
          duration: BH,
          fill: "forwards"
        });
        this.ringAnimation = SH, "Naughty" === HH && (SH.onfinish = () => {
          this.ringAnimation === SH && this.stopRing()
        })
      }
      startWrapRing(HH) {
        this.runRing("Wrapping", HH), this.onWrapStart()
      }
      endWrapRing(HH) {
        const BH = this.ring;
        if (null === BH || void 0 === BH || !BH.classList.contains("Wrapping")) return;
        var LH, AH;
        HH ? null === (LH = this.ringAnimation) || void 0 === LH || LH.finish() : null === (AH = this.ringAnimation) || void 0 === AH || AH.pause();
        BH.classList.toggle("Cancelled", !HH);
        const rH = BH.animate([{
          opacity: 1,
          scale: 1
        }, {
          opacity: 0,
          scale: HH ? 1.6 : .8
        }], {
          duration: HH ? 350 : 300,
          easing: HH ? "ease-out" : "ease-in",
          fill: "forwards"
        });
        this.ringEndAnimation = rH, rH.onfinish = () => {
          this.ringEndAnimation === rH && this.stopRing()
        }
      }
      stopRing() {
        var HH, BH, LH;
        null === (HH = this.ringAnimation) || void 0 === HH || HH.cancel(), null === (BH = this.ringEndAnimation) || void 0 === BH || BH.cancel(), this.ringAnimation = this.ringEndAnimation = null, null === (LH = this.ring) || void 0 === LH || LH.classList.remove(...IH)
      }
    }

    function KH(HH, BH) {
      return 0 === HH || BH - HH > (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5e3) ? BH : Math.min(HH, BH)
    }
    var cH = LH(1225);
    const eH = "secretSantaControlsShown",
      qH = (0, SH.memo)((function(HH) {
        let {
          controller: BH
        } = HH;
        const {
          isTouchScreen: LH
        } = (0, CH.m)(["isTouchScreen"]), AH = (0, EH.y)(), {
          t: rH
        } = (0, GH.B)(), hH = (0, uH.e)(bH, BH.getView()).shown, tH = (0, YH.m)(), [QH] = (0, SH.useState)((() => {
          var HH;
          return null !== (HH = XH.e.getItem(eH)) && void 0 !== HH ? HH : 0
        })), [WH, MH] = (0, SH.useState)(QH >= 2), [xH, vH] = (0, SH.useState)(!1), PH = (0, SH.useRef)(!1), TH = !WH && xH && hH && (!LH || AH);
        return (0, SH.useEffect)((() => {
          if (!hH || xH || WH) return;
          const HH = setTimeout((() => {
            vH(!0)
          }), 12500);
          return () => {
            clearTimeout(HH)
          }
        }), [hH, xH, WH]), (0, SH.useEffect)((() => {
          !TH || tH || PH.current || (PH.current = !0, XH.e.setItem(eH, QH + 1))
        }), [TH, tH, QH]), (0, YH.n)(TH ? "secretSanta" : null, tH, (() => {
          MH(!0)
        })), TH ? (0, cH.jsxs)("div", {
          className: zH()("ControlsTutorialDiv", {
            Covered: tH
          }),
          children: [(0, cH.jsx)(YH.j, {}), (0, cH.jsx)(YH.d, {
            header: "Jump",
            noaAction: "jump"
          }), (0, cH.jsx)(YH.d, {
            header: rH("secretSantaHud:givePresent"),
            noaAction: "alt-fire"
          }), AH && (0, cH.jsx)(YH.d, {
            header: rH("controller:tutorialPause"),
            noaAction: "OpenSettings"
          })]
        }) : null
      }));
    var gH = LH(37472),
      NH = LH(3770),
      RH = LH(37569),
      jH = LH(1049),
      nH = LH(1315),
      FH = LH(40413);
    const DH = (0, SH.memo)((function(HH) {
      let {
        controller: BH,
        naughtyEndsAt: LH
      } = HH;
      return (0, cH.jsxs)("div", {
        ref: BH.bindRing,
        className: "SecretSantaRing",
        children: [(0, cH.jsxs)("svg", {
          viewBox: "0 0 40 40",
          "aria-hidden": "true",
          children: [(0, cH.jsx)("circle", {
            className: "SecretSantaRingTrack",
            cx: "20",
            cy: "20",
            r: 17
          }), (0, cH.jsx)("circle", {
            className: "SecretSantaRingFill",
            cx: "20",
            cy: "20",
            r: 17,
            style: {
              strokeDasharray: xH,
              strokeDashoffset: xH
            }
          })]
        }), LH > 0 && (0, cH.jsx)(wH, {
          endsAt: LH
        })]
      })
    }));

    function wH(HH) {
      let {
        endsAt: BH
      } = HH;
      const {
        t: LH
      } = (0, GH.B)(), AH = (0, FH.h)(BH);
      return AH <= 0 ? null : (0, cH.jsxs)("div", {
        className: "SecretSantaNaughty SmallTextBold",
        children: [(0, cH.jsxs)("span", {
          className: "SecretSantaNaughtyTitle",
          children: [(0, cH.jsx)(nH.c, {
            name: "ban",
            "aria-hidden": "true"
          }), " ", LH("secretSantaHud:naughty")]
        }), (0, cH.jsx)("span", {
          children: LH("secretSantaHud:naughtyWait", {
            seconds: AH
          })
        })]
      })
    }
    const ZH = "user-magnifying-glass",
      dH = "tree-christmas",
      aH = {
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

    function sH(HH) {
      return HH && aH[HH] || "snowflake"
    }
    const JH = "SecretSantaDistrictBanner",
      iH = {
        animationDuration: "2200ms"
      },
      pH = (0, SH.memo)((function(HH) {
        let {
          controller: BH
        } = HH;
        const {
          t: LH
        } = (0, GH.B)(), AH = (0, uH.e)(TH, BH.district.getBanner());
        return AH ? (0, cH.jsxs)("div", {
          className: zH()(JH, `District-${AH.key}`),
          style: iH,
          children: [(0, cH.jsx)("span", {
            className: "SecretSantaDistrictBannerIcon",
            children: (0, cH.jsx)(nH.c, {
              name: sH(AH.key)
            })
          }), LH(`secretSantaHud:district_${AH.key}`)]
        }, AH.seq) : null
      }));
    var yH = LH(2051),
      HB = LH(1204);
    const BB = "\x01",
      LB = "\x02";

    function AB(HH) {
      let {
        scarf: BH,
        className: LH
      } = HH;
      const {
        t: AH
      } = (0, GH.B)();
      return (0, cH.jsxs)("span", {
        className: zH()("SecretSantaScarf", `Scarf-${BH}`, LH),
        children: [(0, cH.jsx)("span", {
          className: "SecretSantaScarfSwatch"
        }), AH(`secretSantaHud:scarfName_${BH}`)]
      })
    }
    const rB = {
      santa: "hat-santa",
      elf: "hat-wizard",
      bobble: "hat-winter",
      antlers: "deer"
    };

    function SB(HH) {
      let {
        hat: BH,
        className: LH
      } = HH;
      const {
        t: AH
      } = (0, GH.B)();
      return (0, cH.jsxs)("span", {
        className: zH()("SecretSantaHat", `Hat-${BH}`, LH),
        children: [(0, cH.jsx)(nH.c, {
          name: rB[BH]
        }), " ", AH(`secretSantaHud:hatName_${BH}`)]
      })
    }

    function hB(HH) {
      let {
        scarf: BH,
        hat: LH
      } = HH;
      const {
        t: AH
      } = (0, GH.B)();
      return (0, cH.jsx)(cH.Fragment, {
        children: tB(AH("secretSantaHud:lookName", {
          scarf: BB,
          hat: LB
        }), (0, cH.jsx)(AB, {
          scarf: BH
        }), (0, cH.jsx)(SB, {
          hat: LH
        }))
      })
    }

    function tB(HH) {
      for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
      const rH = [];
      return HH.split(BB).forEach(((HH, BH) => {
        BH > 0 && rH.push(LH[0]), HH.split(LB).forEach(((HH, BH) => {
          BH > 0 && rH.push(LH[1]), rH.push(HH)
        }))
      })), rH.map(((HH, BH) => (0, cH.jsx)(SH.Fragment, {
        children: HH
      }, BH)))
    }
    const zB = {
        circle: {
          icon: ZH,
          text: "secretSantaHud:circleNote"
        },
        lit: {
          icon: dH,
          text: "secretSantaHud:targetLit"
        }
      },
      CB = (0, SH.memo)((function(HH) {
        var BH, LH, AH;
        let {
          controller: rH,
          market: hH,
          hint: tH,
          nextHintAt: CH,
          pulse: EH
        } = HH;
        const {
          t: XH
        } = (0, GH.B)(), YH = (0, yH.e)("hiddenPlayerNames"), uH = null !== (BH = null === tH || void 0 === tH ? void 0 : tH.santaHintState) && void 0 !== BH ? BH : "none", QH = null !== (LH = null === tH || void 0 === tH ? void 0 : tH.santaHintTargetName) && void 0 !== LH ? LH : null, WH = null !== QH && (0, cH.jsx)("span", {
          className: "SecretSantaTargetName",
          children: (0, HB.f)(QH, YH)
        }), MH = "hunting" === uH && null !== tH, xH = MH && !0 === tH.santaHintTreeLit, vH = function(HH, BH) {
          const [LH, AH] = (0, SH.useState)(null);
          BH && (null === LH || void 0 === LH ? void 0 : LH.contract) !== HH && AH({
            contract: HH,
            until: performance.now() + 8e3
          });
          const rH = (null === LH || void 0 === LH ? void 0 : LH.contract) === HH ? LH.until : 0,
            hH = (0, FH.h)(rH);
          0 !== rH && 0 === hH && AH({
            contract: HH,
            until: 0
          });
          return BH && hH > 0
        }(null !== (AH = null === tH || void 0 === tH ? void 0 : tH.santaHintContract) && void 0 !== AH ? AH : 0, MH && tH.santaHintCircleR > 0 && !xH);
        let PH, TH = `${uH}-${null!==QH&&void 0!==QH?QH:""}`;
        if (tH && "none" !== uH && WH)
          if ("lost" === uH) PH = (0, cH.jsxs)(cH.Fragment, {
            children: [(0, cH.jsx)(nH.c, {
              name: "snowflake",
              className: "SecretSantaLostLineIcon"
            }), " ", tB(XH("secretSantaHud:lostLine", {
              name: BB
            }), WH)]
          });
          else if (null !== tH.santaHintScarf) {
          var UH, VH;
          TH += `-scarf-${tH.santaHintScarf}-${null!==(UH=tH.santaHintHat)&&void 0!==UH?UH:""}`, PH = tB(XH("secretSantaHud:lookingFor", {
            name: BB,
            clue: LB
          }), WH, (0, cH.jsx)(XB, {
            scarf: tH.santaHintScarf,
            hat: null !== (VH = tH.santaHintHat) && void 0 !== VH ? VH : null
          }))
        } else {
          const HH = null === hH || void 0 === hH ? void 0 : hH.santaMarketDistricts[tH.santaHintDistrict];
          TH += `-district-${null!==HH&&void 0!==HH?HH:"?"}`, PH = tB(XH("secretSantaHud:findIn", {
            name: BB,
            district: LB
          }), WH, (0, cH.jsxs)("span", {
            className: zH()("SecretSantaClueChip", "SecretSantaDistrictName", void 0 !== HH && `District-${HH}`),
            children: [(0, cH.jsx)(nH.c, {
              name: sH(HH)
            }), " ", void 0 !== HH ? XH(`secretSantaHud:district_${HH}`) : "?"]
          }))
        } else PH = XH("secretSantaHud:finding");
        const [OH, bH] = (0, SH.useState)({
          key: TH,
          pulse: EH
        });
        OH.key !== TH && bH({
          key: TH,
          pulse: EH
        });
        const kH = OH.key === TH && EH !== OH.pulse;
        return (0, cH.jsxs)("div", {
          className: zH()("SecretSantaTarget", `State-${uH}`),
          children: [PH, "hunting" === uH && (0, cH.jsxs)(cH.Fragment, {
            children: [(0, cH.jsx)(EB, {
              controller: rH,
              nextHintAt: CH,
              note: xH ? "lit" : vH ? "circle" : null
            }), kH && (0, cH.jsx)("div", {
              className: "SecretSantaClueFlash",
              "aria-hidden": "true"
            }, EH)]
          })]
        }, TH)
      }));

    function EB(HH) {
      let {
        controller: BH,
        nextHintAt: LH,
        note: AH
      } = HH;
      const {
        t: rH
      } = (0, GH.B)(), hH = (0, FH.h)(LH), [tH, zH] = (0, SH.useState)(null), [CH, EH] = (0, SH.useState)(null);
      (0, SH.useLayoutEffect)((() => {
        if (!tH) return;
        const HH = () => {
          const HH = tH.offsetWidth,
            BH = tH.offsetHeight;
          EH((LH => LH && LH.width === HH && LH.height === BH ? LH : {
            width: HH,
            height: BH
          }))
        };
        HH();
        const BH = new ResizeObserver(HH);
        return BH.observe(tH), () => {
          BH.disconnect()
        }
      }), [tH]);
      return (0, cH.jsxs)(cH.Fragment, {
        children: [(0, cH.jsx)("div", {
          ref: zH,
          className: "SecretSantaClueCountdown",
          "aria-hidden": "true",
          children: CH && CH.width > 8 && CH.height > 8 && (0, cH.jsx)("svg", {
            viewBox: `0 0 ${CH.width} ${CH.height}`,
            children: (0, cH.jsx)("path", {
              ref: BH.bindCountdown,
              d: `M${CH.width/2} 2H${CH.width-2}V${CH.height-2}H2V2Z`,
              pathLength: 1,
              strokeWidth: 4,
              style: {
                strokeDasharray: 1,
                strokeDashoffset: 1
              }
            })
          })
        }), null === AH ? (0, cH.jsxs)("div", {
          className: "SecretSantaClueTimer",
          children: [(0, cH.jsx)(nH.c, {
            name: "arrows-rotate"
          }), " ", rH("secretSantaHud:mapUpdateIn", {
            seconds: Math.max(1, hH)
          })]
        }) : (0, cH.jsx)(GB, {
          kind: AH
        }, AH)]
      })
    }

    function XB(HH) {
      let {
        scarf: BH,
        hat: LH
      } = HH;
      return (0, cH.jsxs)(cH.Fragment, {
        children: [(0, cH.jsx)(AB, {
          scarf: BH,
          className: "SecretSantaClueChip"
        }), null !== LH && (0, cH.jsxs)(cH.Fragment, {
          children: [(0, cH.jsx)("span", {
            className: "SecretSantaClueJoin",
            children: "+"
          }), (0, cH.jsx)(SB, {
            hat: LH,
            className: "SecretSantaClueChip"
          })]
        })]
      })
    }

    function GB(HH) {
      let {
        kind: BH
      } = HH;
      const {
        t: LH
      } = (0, GH.B)(), {
        icon: AH,
        text: rH
      } = zB[BH];
      return (0, cH.jsxs)("div", {
        className: zH()("SecretSantaClueTimer", "SecretSantaClueNote", `Note-${BH}`),
        children: [(0, cH.jsx)("span", {
          className: "SecretSantaClueNoteIcon",
          children: (0, cH.jsx)(nH.c, {
            name: AH
          })
        }), " ", LH(rH)]
      })
    }

    function YB(HH) {
      let {
        litAt: BH,
        hunters: LH
      } = HH;
      const {
        t: AH
      } = (0, GH.B)(), rH = (0, FH.h)(BH);
      return (0, cH.jsxs)("span", {
        className: zH()("SecretSantaHuntedBanner", "SecretSantaTreeLights", {
          Lit: rH <= 0
        }),
        children: [(0, cH.jsx)("span", {
          className: "SecretSantaTreeLightsIcon",
          children: (0, cH.jsx)(nH.c, {
            name: dH
          })
        }), " ", rH > 0 ? AH("secretSantaHud:treeLightsOn", {
          seconds: rH
        }) : AH(LH > 1 ? "secretSantaHud:treeLit2" : "secretSantaHud:treeLit")]
      })
    }

    function uB(HH) {
      let {
        on: BH
      } = HH;
      return (0, cH.jsx)("span", {
        className: zH()("SecretSantaTreeLightString", {
          On: BH
        }),
        "aria-hidden": "true"
      })
    }
    const QB = (0, SH.memo)((function(HH) {
      var BH, LH;
      let {
        controller: AH,
        market: SH,
        hint: hH,
        pulse: tH,
        treeLightsOn: CH
      } = HH;
      const {
        t: EH
      } = (0, GH.B)(), XH = null !== (BH = null === hH || void 0 === hH ? void 0 : hH.santaHintState) && void 0 !== BH ? BH : "none", YH = "hunting" === XH && hH ? hH.santaHintDistrict : -1, uH = null !== (LH = null === SH || void 0 === SH ? void 0 : SH.santaMarketDistricts) && void 0 !== LH ? LH : rH, QH = "hunting" === XH && SH && hH ? function(HH, BH) {
        const {
          santaHintCircleX: LH,
          santaHintCircleZ: AH,
          santaHintCircleR: rH,
          santaHintContract: SH
        } = BH;
        if (null === LH || null === AH || rH <= 0) return null;
        const [hH, tH] = vH(HH, LH, AH), zH = 200 * rH / HH.santaMarketSize, CH = WB(hH), EH = Math.sqrt(Math.max(0, (zH / 2) ** 2 - (CH - hH) ** 2)), XH = WB(tH - EH >= 9 ? tH - EH : tH + EH);
        return {
          left: hH,
          top: tH,
          size: zH,
          contract: SH,
          badgeLeft: CH,
          badgeTop: XH
        }
      }(SH, hH) : null;
      return (0, cH.jsxs)("div", {
        ref: AH.bindMap,
        className: zH()("SecretSantaMinimap", `State-${XH}`, {
          WithCircle: null !== QH
        }),
        children: [(0, cH.jsx)("img", {
          className: "SecretSantaMinimapTerrain",
          src: "data:image/png;base64,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",
          alt: "",
          draggable: !1
        }), (0, cH.jsx)("div", {
          className: "SecretSantaMinimapGrid",
          children: uH.map(((HH, BH) => (0, cH.jsxs)("div", {
            className: zH()("SecretSantaDistrict", `District-${HH}`, {
              Target: BH === YH
            }),
            "data-district": BH,
            children: [(0, cH.jsx)("span", {
              className: "SecretSantaDistrictIcon",
              children: (0, cH.jsx)(nH.c, {
                name: sH(HH)
              })
            }), (0, cH.jsx)("span", {
              className: "SecretSantaDistrictLabel",
              children: EH(`secretSantaHud:district_${HH}`)
            }), "greatTree" === HH && (0, cH.jsx)(uB, {
              on: CH
            })]
          }, HH)))
        }), YH >= 0 && (0, cH.jsx)("div", {
          className: "SecretSantaDistrictPulse",
          style: {
            left: YH % 3 * (100 / 3) + "%",
            top: Math.floor(YH / 3) * (100 / 3) + "%"
          }
        }, tH), QH && (0, cH.jsxs)("div", {
          className: "SecretSantaCircleClip",
          children: [(0, cH.jsx)("div", {
            className: "SecretSantaCircle",
            style: {
              left: `${QH.left}%`,
              top: `${QH.top}%`,
              width: `${QH.size}%`,
              height: `${QH.size}%`
            }
          }, QH.contract), (0, cH.jsx)("span", {
            className: "SecretSantaCircleBadge",
            style: {
              left: `${QH.badgeLeft}%`,
              top: `${QH.badgeTop}%`
            },
            children: (0, cH.jsx)(nH.c, {
              name: ZH
            })
          }, `badge-${QH.contract}`)]
        }), (0, cH.jsx)("div", {
          className: "SecretSantaMinimapArrowClip",
          children: (0, cH.jsx)("div", {
            ref: AH.bindArrow,
            className: "SecretSantaMinimapArrow",
            children: (0, cH.jsxs)("svg", {
              viewBox: "0 2 20 20",
              children: [(0, cH.jsx)("path", {
                className: "SecretSantaMinimapArrowBody",
                d: "M10 1.5 14.2 6.4H5.8Z"
              }), (0, cH.jsx)("circle", {
                className: "SecretSantaMinimapArrowBody",
                cx: "10",
                cy: "12",
                r: "5"
              }), (0, cH.jsx)("circle", {
                className: "SecretSantaMinimapArrowDot",
                cx: "10",
                cy: "12",
                r: "1.8"
              })]
            })
          })
        }), "lost" === XH && (0, cH.jsxs)("div", {
          className: "SecretSantaLost",
          children: [(0, cH.jsx)("span", {
            className: "SecretSantaLostIcon",
            children: (0, cH.jsx)(nH.c, {
              name: "snowflake"
            })
          }), (0, cH.jsx)("span", {
            className: "SmallTextBold",
            children: EH("secretSantaHud:lost")
          })]
        })]
      })
    }));

    function WB(HH) {
      return Math.min(91, Math.max(9, HH))
    }

    function MB(HH) {
      let {
        bells: BH
      } = HH;
      return (0, cH.jsx)("div", {
        className: zH()("SecretSantaFrost", `Bells-${BH}`),
        "aria-hidden": "true",
        children: (0, cH.jsx)("div", {
          className: "SecretSantaFrostPulse"
        })
      })
    }

    function xB(HH) {
      let {
        bells: BH
      } = HH;
      const {
        t: LH
      } = (0, GH.B)();
      return (0, cH.jsxs)("span", {
        className: zH()("SecretSantaHuntedBanner", "SecretSantaClose", `Bells-${BH}`),
        children: [(0, cH.jsx)("span", {
          className: "SecretSantaBell",
          children: (0, cH.jsx)(nH.c, {
            name: "bell"
          })
        }), " ", LH(2 === BH ? "secretSantaHud:santaClose" : "secretSantaHud:santaNear")]
      })
    }

    function vB(HH) {
      let {
        controller: BH
      } = HH;
      const LH = (0, uH.e)(bH, BH.getView());
      return (0, cH.jsxs)(cH.Fragment, {
        children: [LH.shown && (0, cH.jsx)(MB, {
          bells: LH.bells
        }), (0, cH.jsx)("div", {
          ref: BH.bindFlash,
          className: "SecretSantaFlash",
          "aria-hidden": "true"
        }), (0, cH.jsx)(DH, {
          controller: BH,
          naughtyEndsAt: LH.naughtyEndsAt
        }), LH.shown && (0, cH.jsxs)(cH.Fragment, {
          children: [(0, cH.jsx)(bB, {
            controller: BH,
            status: LH.status,
            endsAt: LH.endsAt,
            bells: LH.bells,
            treeLitAt: LH.treeLitAt
          }), (0, cH.jsx)(PB, {
            controller: BH,
            market: LH.market,
            hint: LH.hint,
            pulse: LH.pulse,
            treeLightsOn: 0 !== LH.treeLitAt
          }), (0, cH.jsx)(gH.e, {
            children: (0, cH.jsx)(CB, {
              controller: BH,
              market: LH.market,
              hint: LH.hint,
              nextHintAt: LH.nextHintAt,
              pulse: LH.pulse
            })
          })]
        })]
      })
    }

    function PB(HH) {
      let {
        controller: BH,
        market: LH,
        hint: AH,
        pulse: rH,
        treeLightsOn: hH
      } = HH;
      const [tH, zH] = (0, SH.useState)(null);
      return (0, NH.i)(tH, TB), (0, cH.jsx)("div", {
        ref: zH,
        className: "SecretSantaMapPanel",
        children: (0, cH.jsx)(QB, {
          controller: BH,
          market: LH,
          hint: AH,
          pulse: rH,
          treeLightsOn: hH
        })
      })
    }

    function TB(HH) {
      const BH = () => {
        const BH = HH.getBoundingClientRect();
        let LH = 0;
        for (const HH of OB()) HH.left < BH.right && HH.right > BH.left && (LH = Math.max(LH, HH.bottom));
        const AH = (0, NH.e)(BH.left, BH.right, LH);
        UB(HH, "--ss-map-top", LH + 6), UB(HH, "--ss-map-bottom", null === AH ? null : (0, NH.d)(HH) - AH + 6)
      };
      BH();
      const LH = VB(BH);
      return {
        layout: BH,
        clear: () => {
          LH(), HH.style.removeProperty("--ss-map-top"), HH.style.removeProperty("--ss-map-bottom")
        }
      }
    }

    function UB(HH, BH, LH) {
      const AH = null === LH ? "" : `${Math.ceil(LH)}px`;
      HH.style.getPropertyValue(BH) !== AH && HH.style.setProperty(BH, AH)
    }

    function VB(HH) {
      const BH = document.querySelector(`.${RH.i}`),
        LH = new ResizeObserver(HH);
      for (const SH of [document.querySelector(`.${RH.f}`), BH]) SH && LH.observe(SH);
      const AH = new MutationObserver(HH),
        rH = null === BH || void 0 === BH ? void 0 : BH.querySelector(".TopRightElementsRight");
      return rH && AH.observe(rH, {
        childList: !0,
        subtree: !0,
        characterData: !0
      }), () => {
        LH.disconnect(), AH.disconnect()
      }
    }

    function OB() {
      const HH = `.${RH.i}`,
        BH = document.querySelectorAll(`.${RH.f}, ${HH} .TopRightIcon:not(.TopRightTray *), ${HH} .CondensedSocialBarInner`);
      return Array.from(BH, (HH => HH.getBoundingClientRect())).filter((HH => HH.width > 0 && HH.height > 0))
    }
    const bB = (0, SH.memo)((function(HH) {
      let {
        controller: BH,
        status: LH,
        endsAt: AH,
        bells: rH,
        treeLitAt: hH
      } = HH;
      const {
        t: tH
      } = (0, GH.B)(), [zH, CH] = (0, SH.useState)(null);
      return function(HH) {
        (0, SH.useLayoutEffect)((() => {
          if (!HH) return;
          const BH = document.documentElement;
          let LH = 0,
            AH = window.innerWidth;
          const rH = () => {
              HH.style.removeProperty("top");
              const AH = OB(),
                rH = Array.from(HH.children).filter((HH => HH instanceof HTMLElement && !HH.classList.contains(JH))),
                SH = HH.getBoundingClientRect(),
                hH = rH.map((HH => {
                  const BH = SH.left + HH.offsetLeft,
                    LH = SH.top + HH.offsetTop;
                  return {
                    left: BH,
                    right: BH + HH.offsetWidth,
                    top: LH,
                    bottom: LH + HH.offsetHeight
                  }
                }));
              let tH = 0;
              for (let HH = 0; HH < AH.length; HH++) {
                let HH = tH;
                for (const BH of hH)
                  for (const LH of AH) {
                    BH.left < LH.right + RH.e && BH.right > LH.left - RH.e && BH.top + tH < LH.bottom + 4 && BH.bottom + tH > LH.top && (HH = Math.max(HH, Math.ceil(LH.bottom + 4 - BH.top)))
                  }
                if (HH === tH) break;
                tH = HH
              }
              tH > 0 && (HH.style.top = `${HH.getBoundingClientRect().top+tH}px`);
              const zH = Math.max(0, ...hH.map((HH => HH.bottom - SH.top)));
              (0, jH.h)(window.innerWidth, window.innerHeight) && !document.querySelector(".Chat.Chatting") && (LH = Math.max(LH, Math.ceil(HH.getBoundingClientRect().top + zH)), BH.style.setProperty("--ss-top-bar-bottom", `${LH}px`))
            },
            SH = () => {
              window.innerWidth !== AH && (AH = window.innerWidth, LH = 0), rH()
            };
          rH();
          const hH = new ResizeObserver(rH);
          hH.observe(HH);
          const tH = VB(rH),
            zH = new MutationObserver((HH => {
              HH.some((HH => {
                const BH = HH.target instanceof Element ? HH.target : HH.target.parentElement;
                return !(null !== BH && void 0 !== BH && BH.closest(".SecretSantaClock"))
              })) && rH()
            }));
          zH.observe(HH, {
            childList: !0,
            subtree: !0,
            characterData: !0
          });
          const CH = new MutationObserver((HH => {
              HH.some((HH => HH.target instanceof Element && HH.target.classList.contains("Chat"))) && rH()
            })),
            EH = document.querySelector(".TopLeftElements");
          return EH && CH.observe(EH, {
            attributes: !0,
            attributeFilter: ["class"],
            subtree: !0
          }), window.addEventListener("resize", SH), () => {
            hH.disconnect(), tH(), zH.disconnect(), CH.disconnect(), window.removeEventListener("resize", SH), BH.style.removeProperty("--ss-top-bar-bottom")
          }
        }), [HH])
      }(zH), (0, cH.jsxs)("div", {
        ref: CH,
        className: "SecretSantaTop",
        children: [(0, cH.jsxs)("div", {
          className: "SecretSantaTopBar",
          children: [(0, cH.jsx)(kB, {
            endsAt: AH
          }), LH && (0, cH.jsxs)("span", {
            className: "SecretSantaScore",
            children: [(0, cH.jsxs)("span", {
              className: "SecretSantaPoints",
              children: [(0, cH.jsx)(nH.c, {
                name: "star"
              }), " ", LH.santaStatusPoints]
            }, LH.santaStatusPoints), (0, cH.jsx)("span", {
              className: "SecretSantaRank",
              children: tH("secretSantaHud:rank", {
                rank: LH.santaStatusRank,
                players: LH.santaStatusPlayers
              })
            })]
          })]
        }), LH && (0, cH.jsx)(mB, {
          status: LH,
          bells: rH,
          treeLitAt: hH
        }), (0, cH.jsx)(pH, {
          controller: BH
        })]
      })
    }));

    function kB(HH) {
      let {
        endsAt: BH
      } = HH;
      const LH = (0, FH.h)(BH);
      return 0 === BH ? (0, cH.jsx)("span", {
        className: "SecretSantaClock"
      }) : (0, cH.jsxs)("span", {
        className: zH()("SecretSantaClock", {
          Urgent: LH <= 30
        }),
        children: [(0, cH.jsx)(nH.c, {
          name: "stopwatch",
          className: "SecretSantaClockIcon",
          "aria-hidden": "true"
        }), (0, FH.c)(LH)]
      })
    }
    const mB = (0, SH.memo)((function(HH) {
      let {
        status: BH,
        bells: LH,
        treeLitAt: AH
      } = HH;
      const {
        t: rH
      } = (0, GH.B)(), SH = Math.min(2, Math.max(0, BH.santaStatusHunters)), hH = BH.santaStatusScarf, tH = (0, cH.jsx)(hB, {
        scarf: hH,
        hat: BH.santaStatusHat
      });
      let zH = (0, cH.jsx)("span", {
        children: tB(rH("secretSantaHud:youWearLook", {
          look: BB
        }), tH)
      });
      if (BH.santaStatusKnown) {
        const HH = BH.santaStatusHatKnown ? tB(rH("secretSantaHud:spottedLook", {
          look: BB
        }), tH) : tB(rH("secretSantaHud:spottedScarf", {
          scarf: BB
        }), (0, cH.jsx)(AB, {
          scarf: hH
        }));
        zH = (0, cH.jsxs)("span", {
          className: "SecretSantaSpotted",
          children: [(0, cH.jsx)(nH.c, {
            name: "eye"
          }), " ", HH]
        })
      }
      let CH = null;
      return 0 !== AH ? CH = (0, cH.jsx)(YB, {
        litAt: AH,
        hunters: SH
      }) : 0 !== LH ? CH = (0, cH.jsx)(xB, {
        bells: LH
      }) : SH > 0 && (CH = (0, cH.jsxs)("span", {
        className: "SecretSantaHuntedBanner",
        children: [(0, cH.jsx)(nH.c, {
          name: "eyes",
          "aria-hidden": "true"
        }), " ", rH(1 === SH ? "secretSantaHud:hunters1" : "secretSantaHud:hunters2")]
      })), (0, cH.jsxs)("div", {
        className: "SecretSantaYouTab",
        children: [CH, zH]
      }, SH)
    }));
    var oB = LH(4617);
    const IB = [226, 36, 52],
      fB = [246, 250, 255],
      lB = [168, 214, 255],
      KB = [24, 24, 28],
      cB = [44, 44, 50],
      eB = [112, 112, 122],
      qB = [255, 112, 36];

    function gB(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return [{
        timeFraction: 0,
        minColor: [HH[0], HH[1], HH[2], LH],
        maxColor: [BH[0], BH[1], BH[2], LH]
      }, {
        timeFraction: 1,
        minColor: [HH[0], HH[1], HH[2], 0],
        maxColor: [BH[0], BH[1], BH[2], 0]
      }]
    }

    function NB(HH, BH, LH) {
      let [AH, rH, SH] = HH;
      return {
        pos1: [AH - BH, rH, SH - BH],
        pos2: [AH + BH, rH + LH, SH + BH]
      }
    }

    function RB(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const LH = .45 * BH;
      return [{
        texture: "square_particle",
        ...NB(HH, LH, 1.4 * BH),
        dir1: [-.7, .5, -.7],
        dir2: [.7, 1.4, .7],
        minEmitPower: .5,
        maxEmitPower: 1,
        minLifeTime: .8,
        maxLifeTime: 1.4,
        minSize: .18 * BH,
        maxSize: .34 * BH,
        manualEmitCount: Math.round(26 * BH),
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
        colorGradients: gB(cB, eB, .95),
        hideDist: 48,
        blendMode: oB.f.Standard
      }, {
        texture: "square_particle",
        ...NB(HH, .6 * LH, 1.2 * BH),
        dir1: [-1.4, 1.2, -1.4],
        dir2: [1.4, 2.6, 1.4],
        minEmitPower: 1.2,
        maxEmitPower: 2,
        minLifeTime: .6,
        maxLifeTime: 1,
        minSize: .1,
        maxSize: .18,
        manualEmitCount: Math.round(14 * BH),
        gravity: [0, -14, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: [{
          timeFraction: 0,
          minColor: [KB[0], KB[1], KB[2], 1],
          maxColor: [58, 52, 48, 1]
        }, {
          timeFraction: 1,
          minColor: [KB[0], KB[1], KB[2], 1],
          maxColor: [58, 52, 48, 1]
        }],
        hideDist: 48,
        blendMode: oB.f.Standard
      }, {
        texture: "glint",
        ...NB(HH, .7 * LH, 1.2 * BH),
        dir1: [-.8, .8, -.8],
        dir2: [.8, 2, .8],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .4,
        maxLifeTime: .8,
        minSize: .06,
        maxSize: .14,
        manualEmitCount: Math.round(6 * BH),
        gravity: [0, 1, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: gB(qB, IB),
        hideDist: 48,
        blendMode: oB.f.Add
      }]
    }

    function jB(HH, BH) {
      return {
        texture: "glint",
        ...NB(HH, .9, 1.9),
        dir1: [-.5, .6, -.5],
        dir2: [.5, 1.6, .5],
        minEmitPower: .6,
        maxEmitPower: 1.2,
        minLifeTime: .8,
        maxLifeTime: 1.5,
        minSize: .05,
        maxSize: .13,
        manualEmitCount: BH,
        gravity: [0, .4, 0],
        velocityGradients: [{
          timeFraction: 0,
          factor: 1,
          factor2: 1
        }],
        colorGradients: gB(fB, lB),
        hideDist: 16,
        blendMode: oB.f.Add
      }
    }
    var nB = LH(81);
    const FB = "harp_pling",
      DB = "cloth1",
      wB = [
        [0, .55, 1],
        [110, .55, 1.5]
      ],
      ZB = [
        [0, .5, 1],
        [85, .5, 1.26],
        [170, .5, 1.5],
        [255, .45, 2]
      ],
      dB = [
        [0, .5, 1.5],
        [85, .45, 2]
      ],
      aB = [
        [0, .4, .75],
        [170, .4, .63]
      ],
      sB = "keysJingle",
      JB = [
        [],
        [
          [.45, 1]
        ],
        [
          [.7, 1.25],
          [.4, 1.6]
        ]
      ];

    function iB(HH, BH) {
      return 1 === BH ? HH : {
        ...HH,
        manualEmitCount: Math.max(1, Math.round(HH.manualEmitCount * BH))
      }
    }
    class pB {
      constructor(HH, BH) {
        this.api = HH, this.localPlayerId = BH, this.layers = [{
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }, {
          sound: null,
          volume: 0,
          target: 0,
          rate: 1
        }], this.timers = new Set, this.camera = [0, 0, 0], this.look = [0, 0, 1], this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.lastFrameAt = 0, this.particleShare = (0, nB.isMobile)() ? .6 : 1, HH.preloadSounds([FB, sB, DB])
      }
      reset() {
        this.hint = null, this.spotted = !1, this.hatSpotted = !1, this.setBells(0)
      }
      receiveHint(HH) {
        const BH = this.hint;
        this.hint = HH, "none" !== HH.santaHintState && (BH && BH.santaHintContract === HH.santaHintContract ? null === BH.santaHintScarf && null !== HH.santaHintScarf ? this.play(ZB) : null === BH.santaHintHat && null !== HH.santaHintHat && this.play(dB) : this.play(wB))
      }
      receiveStatus(HH) {
        (HH.santaStatusKnown && !this.spotted || HH.santaStatusHatKnown && !this.hatSpotted) && this.play(aB), this.spotted = HH.santaStatusKnown, this.hatSpotted = HH.santaStatusHatKnown
      }
      wrapStarted() {
        this.api.playSound(this.localPlayerId, DB, .5, 1.2)
      }
      setBells(HH) {
        const BH = JB[HH];
        this.layers.forEach(((HH, LH) => {
          var AH;
          const [rH, SH] = null !== (AH = BH[LH]) && void 0 !== AH ? AH : [0, HH.rate];
          var hH;
          (0 === rH && HH.target > 0 && HH.sound && this.stopLater(HH), HH.target = rH, rH > 0 && SH !== HH.rate) && (HH.rate = SH, null === (hH = HH.sound) || void 0 === hH || hH.rate(SH))
        }))
      }
      receiveFx(HH) {
        let {
          santaFxKind: BH,
          santaFxAt: LH
        } = HH;
        if (this.api.particlesEnabled())
          if ("caughtSanta" === BH) LH && this.burst(RB(LH));
          else if ("toTunnel" === BH) this.later(300, (() => {
          const [HH, BH, LH] = this.ahead();
          this.burst([jB([HH, BH - 1, LH], 36)])
        }));
        else {
          const [HH, BH, LH] = this.ahead();
          this.burst(RB([HH, BH - .6, LH], .8))
        }
      }
      frame(HH) {
        const {
          cameraPosition: BH,
          cameraDirection: LH
        } = HH;
        this.camera[0] = BH[0], this.camera[1] = BH[1], this.camera[2] = BH[2], this.look[0] = LH[0], this.look[1] = LH[1], this.look[2] = LH[2];
        const AH = performance.now(),
          rH = Math.min(.1, (AH - (this.lastFrameAt || AH)) / 1e3);
        this.lastFrameAt = AH;
        for (const hH of this.layers) {
          if (0 === hH.volume && 0 === hH.target && !hH.sound) continue;
          hH.target > 0 && !hH.sound && (hH.sound = this.api.playSound(this.localPlayerId, sB, 0, hH.rate, void 0, !0));
          const HH = (hH.target > hH.volume ? 3 : 1.2) * rH;
          var SH;
          if (hH.volume = hH.target > hH.volume ? Math.min(hH.target, hH.volume + HH) : Math.max(hH.target, hH.volume - HH), hH.volume <= 0 && 0 === hH.target) this.silence(hH);
          else null === (SH = hH.sound) || void 0 === SH || SH.setRelativeVolume(hH.volume)
        }
      }
      dispose() {
        for (const HH of this.timers) window.clearTimeout(HH);
        this.timers.clear();
        for (const HH of this.layers) HH.target = 0, this.silence(HH)
      }
      silence(HH) {
        var BH;
        null === (BH = HH.sound) || void 0 === BH || BH.stop(), HH.sound = null, HH.volume = 0
      }
      stopLater(HH) {
        const BH = HH.sound,
          LH = window.setTimeout((() => {
            this.timers.delete(LH), HH.sound === BH && 0 === HH.target && this.silence(HH)
          }), HH.volume / 1.2 * 1e3 + 150);
        this.timers.add(LH)
      }
      ahead() {
        const [HH, BH, LH] = this.camera, [AH, rH, SH] = this.look;
        return [HH + 1.8 * AH, BH + 1.8 * rH - .35, LH + 1.8 * SH]
      }
      later(HH, BH) {
        const LH = window.setTimeout((() => {
          this.timers.delete(LH), BH()
        }), HH);
        this.timers.add(LH)
      }
      play(HH) {
        for (const [BH, LH, AH] of HH) 0 === BH ? this.api.playSound(this.localPlayerId, FB, LH, AH) : this.later(BH, (() => {
          this.api.playSound(this.localPlayerId, FB, LH, AH)
        }))
      }
      burst(HH) {
        for (const BH of HH) this.api.playParticleEffect(iB(BH, this.particleShare))
      }
    }
    class yB {
      constructor(HH) {
        this.api = HH, this.wait = null
      }
      kX(HH) {
        const BH = performance.now();
        this.wait = {
          min: HH.santaFlyoverMin,
          max: HH.santaFlyoverMax,
          start: HH.santaFlyoverStart,
          until: BH + HH.santaFlyoverWaitMs,
          loadedAt: null,
          settledFrames: 0,
          lastFrameAt: BH
        }
      }
      frame(HH) {
        const BH = this.wait;
        if (!BH) return;
        const LH = performance.now(),
          AH = LH - BH.lastFrameAt;
        BH.lastFrameAt = LH, LH > BH.until ? this.wait = null : null !== BH.loadedAt ? (BH.settledFrames = AH <= 60 ? BH.settledFrames + 1 : 0, BH.settledFrames >= 6 && LH - BH.loadedAt >= 300 && (this.wait = null, this.api.sendCommand("santaFlyoverReady"))) : HH && this.isLoaded(BH, HH) && (BH.loadedAt = LH)
      }
      isLoaded(HH, BH) {
        let {
          min: LH,
          max: rH,
          start: SH
        } = HH;
        if (BH[0] < LH[0] || BH[0] > rH[0] || BH[2] < LH[2] || BH[2] > rH[2]) return !1;
        const hH = AH.g.xX,
          tH = HH => HH.map((HH => Math.floor(HH / hH))),
          zH = [tH(BH), tH(SH)],
          [CH, EH] = [tH(LH), tH(rH)];
        for (let AH = CH[0]; AH <= EH[0]; AH++)
          for (let HH = CH[1]; HH <= EH[1]; HH++)
            for (let BH = CH[2]; BH <= EH[2]; BH++) {
              if (zH.some((LH => {
                  let [rH, SH, hH] = LH;
                  return (AH - rH) ** 2 + (HH - SH) ** 2 + (BH - hH) ** 2 <= 4
                })) && !this.api.isBlockInLoadedChunk(AH * hH, HH * hH, BH * hH)) return !1
            }
        return !0
      }
    }
    var HL = LH(39811),
      BL = LH(1253),
      LL = LH(39461);
    class AL {
      constructor(HH) {
        this.api = HH, this.sent = null, this.timer = null, this.recheck = setInterval((() => {
          this.XX()
        }), 5e3), this.pacer = new LL.c({
          limit: 2,
          spacingMs: 3e3
        }), this.heldBack = !1, this.stopPacer = void 0, this.resized = () => {
          null !== this.timer && clearTimeout(this.timer), this.timer = setTimeout((() => {
            this.timer = null, this.XX()
          }), 400)
        }, window.addEventListener("resize", this.resized), this.stopPacer = this.pacer.subscribe((() => {
          this.heldBack && !this.pacer.isPacing() && (this.heldBack = !1, this.XX())
        })), this.XX()
      }
      resend() {
        this.sent = null, this.XX()
      }
      dispose() {
        window.removeEventListener("resize", this.resized), this.stopPacer(), this.pacer.dispose(), clearInterval(this.recheck), null !== this.timer && clearTimeout(this.timer)
      }
      XX() {
        var HH, BH;
        const LH = null !== (HH = null === (BH = (0, BL.K)().gameRender()) || void 0 === BH ? void 0 : BH.canvas.width) && void 0 !== HH ? HH : 0;
        if (LH <= 0 || window.innerWidth <= 0 || window.innerHeight <= 0) return;
        const AH = window.innerWidth / window.innerHeight,
          rH = (0, HL.c)(LH),
          SH = this.sent;
        SH && Math.abs(AH / SH.aspect - 1) < .02 && Math.abs(rH / SH.tagScale - 1) < .02 || (this.pacer.tryStart() ? (this.sent = {
          aspect: AH,
          tagScale: rH
        }, this.api.sendCommand(`santaView ${Math.round(1e3*AH)} ${Math.round(1e3*rH)}`)) : this.heldBack = !0)
      }
    }
    var rL = LH(40100);
    const SL = [20, 9, 20],
      hL = [8, 12],
      tL = .3,
      zL = [.05, .13],
      CL = {
        kind: "smokePuff"
      },
      EL = [245, 250, 255],
      XL = {
        aX: 900,
        perS: 80
      },
      GL = {
        aX: 360,
        perS: 34
      };
    class YL {
      constructor(HH) {
        this.api = HH, this.tier = (0, nB.isMobile)() ? GL : XL, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
      }
      onAfterRender(HH) {
        const BH = performance.now(),
          LH = 0 === this.lastMs ? 0 : Math.min(BH - this.lastMs, 250) / 1e3;
        if (this.lastMs = BH, !this.api.particlesEnabled()) return void this.dispose();
        const AH = Math.hypot(HH[0] - this.last[0], HH[1] - this.last[1], HH[2] - this.last[2]) > 20;
        if (this.last[0] = HH[0], this.last[1] = HH[1], this.last[2] = HH[2], AH && this.dispose(), (AH || BH >= this.nextRoofCheckMs) && (this.nextRoofCheckMs = BH + 250, this.roofed = this.hasRoof(HH)), this.roofed) return void(this.budget = 0);
        const rH = this.at;
        let SH;
        rH[0] = HH[0], rH[1] = HH[1] + 7, rH[2] = HH[2], this.system ? (this.budget = Math.min(this.budget + this.tier.perS * LH, this.tier.perS / 4), SH = Math.floor(this.budget), this.budget -= SH) : (this.system = this.api.createParticles(this.opts(), {
          pos: rH,
          half: SL
        }), SH = Math.floor(this.tier.aX / 2)), SH > 0 && (this.system.moveTo(rH, SL), this.system.emit(SH))
      }
      dispose() {
        var HH;
        null === (HH = this.system) || void 0 === HH || HH.dispose(), this.system = null
      }
      hasRoof(HH) {
        let [BH, LH, AH] = HH;
        const rH = Math.floor(BH),
          SH = Math.floor(AH);
        let hH = 0;
        for (let tH = Math.floor(LH) + 1; tH <= Math.floor(LH) + 16; tH++)
          if (hH = this.api.isSolidToPlayerBlockId(this.api.getBlockId(rH, tH, SH)) ? hH + 1 : 0, hH >= 4) return !0;
        return !1
      }
      opts() {
        const [HH, BH, LH] = EL;
        return {
          texture: CL,
          aX: this.tier.aX,
          minLifeTime: hL[0] / rL.b,
          maxLifeTime: hL[1] / rL.b,
          minEmitPower: 1.1 * rL.b * .8,
          maxEmitPower: 1.1 * rL.b * 1.2,
          minSize: zL[0],
          maxSize: zL[1],
          emitRate: 0,
          gravity: [0, 0, 0],
          dir1: [-.3, -1, -.3],
          dir2: [tL, -1, tL],
          colorGradients: [{
            timeFraction: 0,
            minColor: [HH, BH, LH, 0]
          }, {
            timeFraction: .12,
            minColor: [HH, BH, LH, .9]
          }, {
            timeFraction: .85,
            minColor: [HH, BH, LH, .9]
          }, {
            timeFraction: 1,
            minColor: [HH, BH, LH, 0]
          }],
          blendMode: oB.f.Standard
        }
      }
    }
    var uL = LH(37442);
    const QL = [{
        icon: "gift",
        key: "secretSantaHud:introFind"
      }, {
        icon: "coins",
        key: "secretSantaHud:introCoal"
      }, {
        icon: "eyes",
        key: "secretSantaHud:introWatched"
      }],
      WL = (0, SH.memo)((function() {
        const {
          t: HH
        } = (0, GH.B)();
        return (0, cH.jsxs)("div", {
          className: "SecretSantaIntroLines",
          children: [(0, cH.jsxs)("div", {
            className: "SecretSantaIntroHeadline",
            children: [(0, cH.jsx)(nH.c, {
              name: "user-secret"
            }), (0, cH.jsx)("span", {
              children: HH("secretSantaHud:introHeadline")
            })]
          }), QL.map((BH => {
            let {
              icon: LH,
              key: AH
            } = BH;
            return (0, cH.jsxs)("div", {
              className: "SecretSantaIntroLine",
              children: [(0, cH.jsx)(nH.c, {
                name: LH,
                fixedWidth: !0
              }), (0, cH.jsx)("span", {
                children: HH(AH)
              })]
            }, AH)
          }))]
        })
      })),
      ML = (0, SH.memo)((function(HH) {
        let {
          controller: BH
        } = HH;
        return (0, cH.jsx)("div", {
          ref: BH.bindIntro,
          className: "SecretSantaIntro",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, cH.jsx)("div", {
            className: "SecretSantaIntroCard",
            children: (0, cH.jsx)(WL, {})
          })
        })
      })),
      xL = "secretSantaIntroShown";
    class vL {
      constructor() {
        this.element = null, this.fade = null, this.fadeLookedAt = -1 / 0, this.armedUntil = 0, this.shownAt = null, this.drawn = -1, this.intro = null, this.introUntil = 0, this.drawnIntro = null, this.bind = HH => {
          this.element = HH, this.drawn = -1
        }, this.bindIntro = HH => {
          this.intro = HH, this.drawnIntro = null
        }
      }
      receiveFlyover(HH) {
        this.armedUntil = performance.now() + HH + 3e3
      }
      frame(HH) {
        const BH = performance.now(),
          LH = this.snowAlpha(BH);
        if (this.drawIntro(BH, LH), LH <= 0) return null !== this.shownAt && (BH < this.armedUntil && this.startIntro(BH), this.armedUntil = 0), this.shownAt = null, void this.draw(0);
        if (null === this.shownAt) {
          if (LH < 1 || HH && BH >= this.armedUntil) return void this.draw(0);
          this.shownAt = BH
        }
        this.draw(Math.min(1, (BH - this.shownAt) / 300) * LH)
      }
      startIntro(HH) {
        var BH;
        const LH = null !== (BH = XH.e.getItem(xL)) && void 0 !== BH ? BH : 0;
        XH.e.setItem(xL, LH + 1), this.introUntil = HH + (LH < 2 ? 3500 : 2e3)
      }
      drawIntro(HH, BH) {
        0 !== this.introUntil && (HH >= this.introUntil || BH > 0) && (this.introUntil = 0);
        const LH = 0 !== this.introUntil;
        this.intro && LH !== this.drawnIntro && (this.drawnIntro = LH, this.intro.classList.toggle("Shown", LH))
      }
      snowAlpha(HH) {
        var BH, LH, AH, rH;
        (null === (BH = this.fade) || void 0 === BH || !BH.isConnected) && HH - this.fadeLookedAt >= 250 && (this.fadeLookedAt = HH, this.fade = document.querySelector(`[${uL.c}]`));
        const SH = null === (LH = this.fade) || void 0 === LH ? void 0 : LH.style;
        if (!SH || "none" === SH.display) return 0;
        const hH = null !== (AH = null === (rH = SH.backgroundColor.match(/\d+/g)) || void 0 === rH ? void 0 : rH.slice(0, 3).map(Number)) && void 0 !== AH ? AH : [];
        return 3 === hH.length && hH.every((HH => HH >= 200)) && Number(SH.opacity) || 0
      }
      draw(HH) {
        const BH = Math.round(100 * HH) / 100;
        this.element && BH !== this.drawn && (this.drawn = BH, this.element.style.opacity = String(BH), this.element.style.display = BH > 0 ? "flex" : "none")
      }
    }
    const PL = (0, SH.memo)((function(HH) {
        let {
          controller: BH
        } = HH;
        const {
          t: LH
        } = (0, GH.B)();
        return (0, cH.jsx)("div", {
          ref: BH.bind,
          className: "SecretSantaSnowTitle",
          "data-camera-keeper": "",
          "aria-hidden": "true",
          children: (0, cH.jsxs)("div", {
            className: "SecretSantaSnowTitleCard",
            children: [(0, cH.jsxs)("div", {
              className: "SecretSantaSnowTitleName",
              children: [(0, cH.jsx)(nH.c, {
                name: "hat-santa",
                className: "SecretSantaSnowTitleIcon"
              }), LH("secretSantaHud:titleName")]
            }), (0, cH.jsx)(WL, {})]
          })
        })
      })),
      TL = "SecretSantaMode",
      UL = AH.g.iW * AH.g.playerEyeToHeightRatio;

    function VL(HH) {
      document.body.classList.toggle("SecretSantaPodium", HH)
    }
    const OL = function(HH, BH, LH, AH) {
      let {
        localPlayerId: rH
      } = AH;
      const tH = new lH((() => {
          var HH;
          null === (HH = QH) || void 0 === HH || HH.wrapStarted()
        })),
        zH = new vL,
        CH = [0, 0, 0];
      let EH = null;
      const XH = [0, 0, 0],
        GH = [0, 0, 0];
      let YH = null,
        uH = null,
        QH = null,
        WH = null,
        MH = null,
        xH = null,
        vH = null;
      const PH = HH => {
          YH && null !== HH && HH !== rH && !vH && (vH = {
            target: HH,
            at: performance.now(),
            first: null
          })
        },
        TH = (HH, BH) => {
          vH = null, tH.pressGift(HH.at, BH) && (EH = HH.target)
        },
        UH = (HH, BH) => {
          if (null === EH) return;
          if (!HH.readDrawnPosition(EH, XH)) return void(EH = null);
          GH[0] = BH[0], GH[1] = BH[1] + UL, GH[2] = BH[2];
          const LH = Math.hypot(XH[0] - BH[0], XH[1] - BH[1], XH[2] - BH[2]);
          tH.aimAtWrap(function(HH, BH, LH) {
            const AH = LH[0] - HH[0],
              rH = LH[2] - HH[2],
              SH = Math.hypot(BH[0], BH[2]);
            let hH = HH[1];
            const tH = SH > 0 ? (AH * BH[0] + rH * BH[2]) / SH : 0;
            tH > 0 && (hH += BH[1] / SH * tH), hH = Math.max(LH[1], Math.min(LH[1] + 1.8, hH));
            const zH = [AH, hH - HH[1], rH],
              CH = Math.hypot(zH[0], zH[1], zH[2]),
              EH = Math.hypot(BH[0], BH[1], BH[2]);
            if (0 === CH || 0 === EH) return 0;
            const XH = (zH[0] * BH[0] + zH[1] * BH[1] + zH[2] * BH[2]) / (CH * EH);
            return 180 * Math.acos(Math.max(-1, Math.min(1, XH))) / Math.PI
          }(GH, HH.getActionRay().direction, XH), LH) || (EH = null)
        },
        VH = (HH, BH, LH) => {
          const AH = [0, 0, 0];
          LH && HH.readDrawnPosition(BH.target, AH) ? BH.first ? TH(BH, function(HH, BH, LH, AH) {
            const rH = LH[0] - HH[0],
              SH = LH[1] - HH[1],
              hH = LH[2] - HH[2],
              tH = Math.hypot(rH, SH, hH);
            return 0 === tH || AH <= 0 ? {
              distance: tH,
              awaySpeed: 0
            } : {
              distance: tH,
              awaySpeed: (rH * (LH[0] - BH[0]) + SH * (LH[1] - BH[1]) + hH * (LH[2] - BH[2])) / tH / AH
            }
          }(LH, BH.first.pos, AH, (performance.now() - BH.first.at) / 1e3)) : BH.first = {
            pos: AH,
            at: performance.now()
          } : TH(BH, null)
        };
      return {
        onCreate: HH => {
          YH = HH, document.body.classList.add(TL), QH = new pB(HH, rH), WH = new YL(HH), MH = new yB(HH), xH = new AL(HH), uH = (0, hH.v)((0, SH.createElement)(SH.Fragment, null, (0, SH.createElement)(vB, {
            controller: tH
          }), (0, SH.createElement)(qH, {
            controller: tH
          }), (0, SH.createElement)(PL, {
            controller: zH
          }), (0, SH.createElement)(ML, {
            controller: zH
          })))
        },
        onClose: () => {
          var HH, BH, LH, AH;
          document.body.classList.remove(TL), VL(!1), null === (HH = uH) || void 0 === HH || HH(), uH = null, tH.dispose(), null === (BH = QH) || void 0 === BH || BH.dispose(), QH = null, null === (LH = WH) || void 0 === LH || LH.dispose(), WH = null, MH = null, null === (AH = xH) || void 0 === AH || AH.dispose(), xH = null, YH = null
        },
        onPlayerAltAction: (HH, BH, LH, AH, rH, SH) => {
          PH(SH)
        },
        onPlayerAttackEntity: (HH, BH) => {
          PH(BH)
        },
        onAfterRender: (HH, BH) => {
          var LH, AH, SH, hH;
          const EH = null !== (LH = YH) && void 0 !== LH && LH.readDrawnPosition(rH, CH) ? CH : null;
          vH && YH && VH(YH, vH, EH), YH && EH && UH(YH, EH), tH.frame(BH.cameraHeading, EH), null === (AH = QH) || void 0 === AH || AH.frame(BH), null === (SH = WH) || void 0 === SH || SH.onAfterRender(BH.cameraPosition), null === (hH = MH) || void 0 === hH || hH.frame(EH), zH.frame(tH.getView().shown)
        },
        onReceivedMessageFromServer: (HH, BH) => {
          var LH;
          if ("secretSantaHint" === HH) tH.receiveHint(BH), null === (LH = QH) || void 0 === LH || LH.receiveHint(BH);
          else if ("secretSantaStatus" === HH) {
            var AH;
            tH.receiveStatus(BH), null === (AH = QH) || void 0 === AH || AH.receiveStatus(BH)
          } else if ("secretSantaWrap" === HH) {
            vH && TH(vH, null);
            const {
              santaWrapMs: HH,
              santaWrapDone: LH
            } = BH;
            tH.receiveWrap(HH, LH)
          } else if ("secretSantaMarket" === HH) {
            var rH;
            null === (rH = QH) || void 0 === rH || rH.reset(), tH.receiveMarket(BH)
          } else if ("secretSantaBells" === HH) {
            var SH;
            const {
              santaBellsLevel: HH
            } = BH;
            tH.receiveBells(HH), null === (SH = QH) || void 0 === SH || SH.setBells(HH)
          } else if ("secretSantaFx" === HH) {
            var hH;
            const HH = BH;
            "toTunnel" === HH.santaFxKind && tH.snowBlink(), null === (hH = QH) || void 0 === hH || hH.receiveFx(HH)
          } else if ("secretSantaFlyover" === HH) {
            var CH;
            null === (CH = MH) || void 0 === CH || CH.kX(BH), zH.receiveFlyover(BH.santaFlyoverWaitMs)
          } else if ("secretSantaPodium" === HH) {
            const {
              santaPodiumShown: HH
            } = BH;
            var EH;
            if (VL(HH), !HH) null === (EH = xH) || void 0 === EH || EH.resend()
          }
        }
      }
    }
  },
  39415: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      f: () => rH
    });
    var AH = LH(317);
    const rH = (0, AH.yb)([0, 0, -1]),
      SH = [{
        name: "S",
        bearing: (0, AH.yb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, AH.yb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: rH
      }, {
        name: "W",
        bearing: (0, AH.yb)([1, 0, 0])
      }]
  },
  39408: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      e: () => SH
    });
    var AH = LH(39415);

    function rH(HH, BH, LH) {
      return [100 * (LH.mapMaxX - HH) / (LH.mapMaxX - LH.mapMinX), 100 * (BH - LH.mapMinZ) / (LH.mapMaxZ - LH.mapMinZ)]
    }

    function SH(HH, BH, LH, SH) {
      const [hH, tH] = rH(HH, BH, SH), zH = AH.f - LH;
      return {
        rotation: zH,
        transform: `rotate(${zH}rad) translate(-${hH}%, -${tH}%)`
      }
    }
  },
  40100: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      d: () => SH
    });
    const AH = 1 / .6,
      rH = {
        kind: "smokePuff"
      };
    class SH {
      constructor(HH, BH, LH) {
        this.style = HH, this.aX = BH, this.half = LH, this.particles = null, this.lastFrame = -1
      }
      emit(HH, BH, LH) {
        let SH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return LH !== this.lastFrame && (this.lastFrame = LH, this.particles || (this.particles = HH.createParticles(function(HH, BH) {
          const [
            [LH, SH, hH],
            [tH, zH, CH]
          ] = HH.colours;
          return {
            texture: HH.soft ? rH : "square_particle",
            aX: BH,
            minLifeTime: HH.life[0] / AH,
            maxLifeTime: HH.life[1] / AH,
            minEmitPower: HH.power[0] * AH,
            maxEmitPower: HH.power[1] * AH,
            minSize: HH.size[0],
            maxSize: HH.size[1],
            emitRate: 0,
            gravity: [0, HH.lift * AH * AH, 0],
            dir1: [-HH.spread, 1, -HH.spread],
            dir2: [HH.spread, 1, HH.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [LH, SH, hH, HH.alpha],
              maxColor: [tH, zH, CH, HH.alpha]
            }, {
              timeFraction: 1,
              minColor: [LH, SH, hH, 0],
              maxColor: [tH, zH, CH, 0]
            }],
            blendMode: HH.blendMode
          }
        }(this.style, this.aX), {
          pos: BH,
          half: this.half
        })), this.particles.moveTo(BH, this.half), this.particles.emit(SH), !0)
      }
      dispose() {
        var HH;
        null === (HH = this.particles) || void 0 === HH || HH.stop(), this.particles = null
      }
    }
  },
  39811: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    const AH = 1400,
      rH = .45;

    function SH(HH) {
      return HH < AH ? Math.pow(AH / HH, rH) : 1
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);