export const id = 182;
export const ids = [182];
export const modules = {
  38154: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => hr,
      d: () => zr,
      h: () => mr,
      l: () => xr
    });
    var Zr = Qr(35448),
      Wr = Qr(3425),
      ar = Qr(3429),
      jr = Qr(9818),
      Ir = Qr(1573),
      fr = Qr(72),
      Er = Qr(92),
      pr = Qr(1338);

    function xr() {
      var rr;
      return (0, Ir.g)(Wr.e, (0, Wr.w)()), (0, pr.jsx)(pr.Fragment, {
        children: null === (rr = (0, Wr.w)()) || void 0 === rr ? void 0 : rr.content
      })
    }

    function mr(rr) {
      var Sr;
      let {
        show: Qr
      } = rr;
      (0, Ir.g)(Wr.e, (0, Wr.w)());
      const Er = null === (Sr = (0, Wr.w)()) || void 0 === Sr ? void 0 : Sr.menu;
      return (0, fr.useEffect)((() => {
        var rr;
        Qr || (null === Er || void 0 === Er || null === (rr = Er.onClose) || void 0 === rr || rr.call(Er), (0, ar.o)())
      }), [Qr, Er]), (0, fr.useEffect)((() => Qr ? (0, jr.f)(ar.v, ar.e) : void 0), [Qr]), (0, pr.jsx)(Zr.c, {
        showing: Qr,
        globallyUniqueKey: "clientGameMenu",
        children: null === Er || void 0 === Er ? void 0 : Er.content
      })
    }
    const Nr = new Map,
      Ur = new Set;

    function tr(rr, Sr) {
      Sr ? Nr.set(rr, Sr) : Nr.delete(rr);
      for (const Qr of Ur) Qr()
    }

    function hr(rr) {
      let {
        placement: Sr = "bottom"
      } = rr;
      const Qr = (0, fr.useRef)(null);
      return (0, fr.useLayoutEffect)((() => {
        const rr = Qr.current;
        return tr(Sr, rr), () => {
          Nr.get(Sr) === rr && tr(Sr, null)
        }
      }), [Sr]), (0, pr.jsx)("div", {
        ref: Qr,
        id: `clientGameHud-${Sr}`,
        style: {
          display: "contents"
        }
      })
    }

    function zr(rr) {
      let {
        children: Sr,
        placement: Qr = "bottom"
      } = rr;
      const [Zr, Wr] = (0, fr.useState)((() => {
        var rr;
        return null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null
      }));
      return (0, fr.useEffect)((() => {
        const rr = () => {
          var rr;
          Wr(null !== (rr = Nr.get(Qr)) && void 0 !== rr ? rr : null)
        };
        return Ur.add(rr), rr(), () => {
          Ur.delete(rr)
        }
      }), [Qr]), Zr ? (0, Er.createPortal)(Sr, Zr) : null
    }
  },
  35448: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar
    });
    var Zr = Qr(5301),
      Wr = Qr(5308);

    function ar(rr) {
      let {
        children: Sr,
        showing: Qr,
        globallyUniqueKey: ar,
        alwaysMountChildren: jr = !1,
        doGameplayStartStopOnShow: Ir = !0,
        keepsMovement: fr = !1
      } = rr;
      return (0, Wr.b)(!0, Qr, ar, fr), (0, Zr.e)(Ir, Qr), Qr || jr ? Sr : null
    }
  },
  9818: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      f: () => Wr
    });
    let Zr = null;
    const Wr = function(rr) {
        const Sr = {
          cycle: rr,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Zr = Sr, () => {
          Zr === Sr && (Zr = null)
        }
      },
      ar = () => {
        var rr;
        return null !== (rr = Zr) && void 0 !== rr && rr.canCycle() ? Zr.cycle : null
      }
  },
  54288: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      Smp2OnboardingUi: () => tr
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(40876),
      Ir = Qr(34),
      fr = Qr(38154),
      Er = Qr(3039),
      pr = Qr(2075),
      xr = Qr(3640),
      mr = Qr(26),
      Nr = Qr(40873),
      Ur = Qr(1338);

    function tr(rr) {
      let {
        store: Sr
      } = rr;
      const Qr = function(rr) {
          const [Sr, Qr] = (0, Zr.useState)((() => rr.get()));
          return (0, Zr.useEffect)((() => {
            const Sr = Ir.i.subscribe(Nr.c, (rr => {
              Qr(rr)
            }));
            return Qr(rr.get()), () => {
              Ir.i.unsubscribe(Sr)
            }
          }), [rr]), Sr
        }(Sr),
        Wr = (0, xr.b)(),
        {
          openInGameMenuName: ar,
          openEverythingMenuName: jr
        } = (0, mr.n)(["openInGameMenuName", "openEverythingMenuName"]),
        tr = !Wr && null === ar && null === jr;
      (0, Zr.useEffect)((() => {
        Sr.setShowing(tr)
      }), [Sr, tr]);
      const zr = Boolean(Qr.path);
      return (0, Zr.useEffect)((() => {
        if (zr) return (0, Er.f)()
      }), [zr]), tr ? (0, Ur.jsxs)(Ur.Fragment, {
        children: [Qr.path && (0, Ur.jsx)(fr.d, {
          placement: "topRight",
          children: (0, Ur.jsx)(hr, {
            path: Qr.path
          })
        }), Qr.reward && (0, Ur.jsxs)("div", {
          className: "Smp2RewardCard",
          role: "status",
          style: {
            "--smp2-reward-show-ms": `${Nr.e}ms`
          },
          children: [(0, Ur.jsx)("span", {
            className: "Smp2RewardBurst",
            "aria-hidden": "true"
          }), (0, Ur.jsx)("div", {
            className: "Smp2RewardIcon",
            children: (0, Ur.jsx)(pr.d, {
              itemName: Qr.reward.icon,
              amount: 1
            })
          }), (0, Ur.jsxs)("div", {
            className: "Smp2RewardText",
            children: [(0, Ur.jsx)("strong", {
              children: Qr.reward.title
            }), (0, Ur.jsx)("span", {
              children: Qr.reward.text
            })]
          })]
        }, Qr.reward.id)]
      }) : null
    }

    function hr(rr) {
      let {
        path: Sr
      } = rr;
      const Qr = Sr.steps[Sr.step],
        Zr = (0, jr.n)(Qr);
      return (0, Ur.jsxs)("div", {
        className: "Smp2PathCard",
        children: [(0, Ur.jsx)("span", {
          className: "Smp2PathTitle",
          children: Sr.title
        }), (0, Ur.jsx)("div", {
          className: "Smp2PathSegments",
          "aria-hidden": "true",
          children: Sr.steps.map(((rr, Qr) => (0, Ur.jsx)("span", {
            className: ar()("Smp2PathSegment", {
              Filled: Qr < Sr.step,
              Current: Qr === Sr.step
            })
          }, rr.key)))
        }), (0, Ur.jsxs)("div", {
          className: "Smp2PathStep",
          children: [(0, Ur.jsx)("div", {
            className: "Smp2PathStepIcon",
            children: (0, Ur.jsx)(pr.d, {
              itemName: Qr.icon,
              amount: 1
            })
          }), (0, Ur.jsx)("span", {
            className: "Smp2PathStepText",
            children: Qr.text
          }), Zr > 1 && (0, Ur.jsxs)("span", {
            className: "Smp2PathStepProgress",
            children: [Sr.progress, "/", Zr]
          })]
        }, `${Sr.step}`)]
      })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);