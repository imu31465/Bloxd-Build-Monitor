export const id = 182;
export const ids = [182];
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
  53936: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      Smp2OnboardingUi: () => bW
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(40542),
      LW = OW(27),
      cW = OW(37868),
      wW = OW(2983),
      tW = OW(2032),
      ZW = OW(3599),
      xW = OW(25),
      lW = OW(40534),
      AW = OW(1283);

    function bW(WW) {
      let {
        store: iW
      } = WW;
      const OW = function(WW) {
          const [iW, OW] = (0, mW.useState)((() => WW.get()));
          return (0, mW.useEffect)((() => {
            const iW = LW.l.subscribe(lW.d, (WW => {
              OW(WW)
            }));
            return OW(WW.get()), () => {
              LW.l.unsubscribe(iW)
            }
          }), [WW]), iW
        }(iW),
        EW = (0, ZW.e)(),
        {
          openInGameMenuName: NW,
          openEverythingMenuName: PW
        } = (0, xW.p)(["openInGameMenuName", "openEverythingMenuName"]),
        bW = !EW && null === NW && null === PW;
      (0, mW.useEffect)((() => {
        iW.setShowing(bW)
      }), [iW, bW]);
      const UW = Boolean(OW.path);
      return (0, mW.useEffect)((() => {
        if (UW) return (0, wW.c)()
      }), [UW]), bW ? (0, AW.jsxs)(AW.Fragment, {
        children: [OW.path && (0, AW.jsx)(cW.h, {
          placement: "topRight",
          children: (0, AW.jsx)(jW, {
            path: OW.path
          })
        }), OW.reward && (0, AW.jsxs)("div", {
          className: "Smp2RewardCard",
          role: "status",
          style: {
            "--smp2-reward-show-ms": `${lW.e}ms`
          },
          children: [(0, AW.jsx)("span", {
            className: "Smp2RewardBurst",
            "aria-hidden": "true"
          }), (0, AW.jsx)("div", {
            className: "Smp2RewardIcon",
            children: (0, AW.jsx)(tW.b, {
              itemName: OW.reward.icon,
              amount: 1
            })
          }), (0, AW.jsxs)("div", {
            className: "Smp2RewardText",
            children: [(0, AW.jsx)("strong", {
              children: OW.reward.title
            }), (0, AW.jsx)("span", {
              children: OW.reward.text
            })]
          })]
        }, OW.reward.id)]
      }) : null
    }

    function jW(WW) {
      let {
        path: iW
      } = WW;
      const OW = iW.steps[iW.step],
        mW = (0, PW.m)(OW);
      return (0, AW.jsxs)("div", {
        className: "Smp2PathCard",
        children: [(0, AW.jsx)("span", {
          className: "Smp2PathTitle",
          children: iW.title
        }), (0, AW.jsx)("div", {
          className: "Smp2PathSegments",
          "aria-hidden": "true",
          children: iW.steps.map(((WW, OW) => (0, AW.jsx)("span", {
            className: NW()("Smp2PathSegment", {
              Filled: OW < iW.step,
              Current: OW === iW.step
            })
          }, WW.key)))
        }), (0, AW.jsxs)("div", {
          className: "Smp2PathStep",
          children: [(0, AW.jsx)("div", {
            className: "Smp2PathStepIcon",
            children: (0, AW.jsx)(tW.b, {
              itemName: OW.icon,
              amount: 1
            })
          }), (0, AW.jsx)("span", {
            className: "Smp2PathStepText",
            children: OW.text
          }), mW > 1 && (0, AW.jsxs)("span", {
            className: "Smp2PathStepProgress",
            children: [iW.progress, "/", mW]
          })]
        }, `${iW.step}`)]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);