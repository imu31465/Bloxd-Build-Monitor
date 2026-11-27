export const id = 182;
export const ids = [182];
export const modules = {
  37796: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => LR,
      d: () => nR,
      g: () => wR,
      j: () => KR
    });
    var yR = GR(35140),
      tR = GR(3494),
      uR = GR(3498),
      ZR = GR(10048),
      qR = GR(1581),
      iR = GR(66),
      fR = GR(83),
      VR = GR(1378);

    function KR() {
      var RR;
      return (0, qR.h)(tR.e, (0, tR.r)()), (0, VR.jsx)(VR.Fragment, {
        children: null === (RR = (0, tR.r)()) || void 0 === RR ? void 0 : RR.content
      })
    }

    function wR(RR) {
      var JR;
      let {
        show: GR
      } = RR;
      (0, qR.h)(tR.e, (0, tR.r)());
      const fR = null === (JR = (0, tR.r)()) || void 0 === JR ? void 0 : JR.menu;
      return (0, iR.useEffect)((() => {
        var RR;
        GR || (null === fR || void 0 === fR || null === (RR = fR.onClose) || void 0 === RR || RR.call(fR), (0, uR.m)())
      }), [GR, fR]), (0, iR.useEffect)((() => GR ? (0, ZR.e)(uR.q, uR.e) : void 0), [GR]), (0, VR.jsx)(yR.b, {
        showing: GR,
        globallyUniqueKey: "clientGameMenu",
        children: null === fR || void 0 === fR ? void 0 : fR.content
      })
    }
    const rR = new Map,
      eR = new Set;

    function aR(RR, JR) {
      JR ? rR.set(RR, JR) : rR.delete(RR);
      for (const GR of eR) GR()
    }

    function LR(RR) {
      let {
        placement: JR = "bottom"
      } = RR;
      const GR = (0, iR.useRef)(null);
      return (0, iR.useLayoutEffect)((() => {
        const RR = GR.current;
        return aR(JR, RR), () => {
          rR.get(JR) === RR && aR(JR, null)
        }
      }), [JR]), (0, VR.jsx)("div", {
        ref: GR,
        id: `clientGameHud-${JR}`,
        style: {
          display: "contents"
        }
      })
    }

    function nR(RR) {
      let {
        children: JR,
        placement: GR = "bottom"
      } = RR;
      const [yR, tR] = (0, iR.useState)((() => {
        var RR;
        return null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null
      }));
      return (0, iR.useEffect)((() => {
        const RR = () => {
          var RR;
          tR(null !== (RR = rR.get(GR)) && void 0 !== RR ? RR : null)
        };
        return eR.add(RR), RR(), () => {
          eR.delete(RR)
        }
      }), [GR]), yR ? (0, fR.createPortal)(JR, yR) : null
    }
  },
  35140: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(5343),
      tR = GR(5347);

    function uR(RR) {
      let {
        children: JR,
        showing: GR,
        globallyUniqueKey: uR,
        alwaysMountChildren: ZR = !1,
        doGameplayStartStopOnShow: qR = !0,
        keepsMovement: iR = !1
      } = RR;
      return (0, tR.d)(!0, GR, uR, iR), (0, yR.d)(qR, GR), GR || ZR ? JR : null
    }
  },
  10048: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => tR
    });
    let yR = null;
    const tR = function(RR) {
        const JR = {
          cycle: RR,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return yR = JR, () => {
          yR === JR && (yR = null)
        }
      },
      uR = () => {
        var RR;
        return null !== (RR = yR) && void 0 !== RR && RR.canCycle() ? yR.cycle : null
      }
  },
  53781: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      Smp2OnboardingUi: () => aR
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(40564),
      qR = GR(32),
      iR = GR(37796),
      fR = GR(3059),
      VR = GR(2123),
      KR = GR(3701),
      wR = GR(25),
      rR = GR(40562),
      eR = GR(1378);

    function aR(RR) {
      let {
        store: JR
      } = RR;
      const GR = function(RR) {
          const [JR, GR] = (0, yR.useState)((() => RR.get()));
          return (0, yR.useEffect)((() => {
            const JR = qR.n.subscribe(rR.e, (RR => {
              GR(RR)
            }));
            return GR(RR.get()), () => {
              qR.n.unsubscribe(JR)
            }
          }), [RR]), JR
        }(JR),
        tR = (0, KR.c)(),
        {
          openInGameMenuName: uR,
          openEverythingMenuName: ZR
        } = (0, wR.o)(["openInGameMenuName", "openEverythingMenuName"]),
        aR = !tR && null === uR && null === ZR;
      (0, yR.useEffect)((() => {
        JR.setShowing(aR)
      }), [JR, aR]);
      const nR = Boolean(GR.path);
      return (0, yR.useEffect)((() => {
        if (nR) return (0, fR.e)()
      }), [nR]), aR ? (0, eR.jsxs)(eR.Fragment, {
        children: [GR.path && (0, eR.jsx)(iR.d, {
          placement: "topRight",
          children: (0, eR.jsx)(LR, {
            path: GR.path
          })
        }), GR.reward && (0, eR.jsxs)("div", {
          className: "Smp2RewardCard",
          role: "status",
          style: {
            "--smp2-reward-show-ms": `${rR.i}ms`
          },
          children: [(0, eR.jsx)("span", {
            className: "Smp2RewardBurst",
            "aria-hidden": "true"
          }), (0, eR.jsx)("div", {
            className: "Smp2RewardIcon",
            children: (0, eR.jsx)(VR.b, {
              itemName: GR.reward.icon,
              amount: 1
            })
          }), (0, eR.jsxs)("div", {
            className: "Smp2RewardText",
            children: [(0, eR.jsx)("strong", {
              children: GR.reward.title
            }), (0, eR.jsx)("span", {
              children: GR.reward.text
            })]
          })]
        }, GR.reward.id)]
      }) : null
    }

    function LR(RR) {
      let {
        path: JR
      } = RR;
      const GR = JR.steps[JR.step],
        yR = (0, ZR.k)(GR);
      return (0, eR.jsxs)("div", {
        className: "Smp2PathCard",
        children: [(0, eR.jsx)("span", {
          className: "Smp2PathTitle",
          children: JR.title
        }), (0, eR.jsx)("div", {
          className: "Smp2PathSegments",
          "aria-hidden": "true",
          children: JR.steps.map(((RR, GR) => (0, eR.jsx)("span", {
            className: uR()("Smp2PathSegment", {
              Filled: GR < JR.step,
              Current: GR === JR.step
            })
          }, RR.key)))
        }), (0, eR.jsxs)("div", {
          className: "Smp2PathStep",
          children: [(0, eR.jsx)("div", {
            className: "Smp2PathStepIcon",
            children: (0, eR.jsx)(VR.b, {
              itemName: GR.icon,
              amount: 1
            })
          }), (0, eR.jsx)("span", {
            className: "Smp2PathStepText",
            children: GR.text
          }), yR > 1 && (0, eR.jsxs)("span", {
            className: "Smp2PathStepProgress",
            children: [JR.progress, "/", yR]
          })]
        }, `${JR.step}`)]
      })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);