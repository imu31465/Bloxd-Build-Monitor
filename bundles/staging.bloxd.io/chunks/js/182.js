export const id = 182;
export const ids = [182];
export const modules = {
  38243: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd,
      h: () => bd,
      i: () => od,
      k: () => td
    });
    var Wd = md(35535),
      Fd = md(3428),
      Rd = md(3432),
      Xd = md(9850),
      Kd = md(1566),
      hd = md(66),
      vd = md(86),
      Qd = md(1341);

    function td() {
      var dd;
      return (0, Kd.i)(Fd.d, (0, Fd.n)()), (0, Qd.jsx)(Qd.Fragment, {
        children: null === (dd = (0, Fd.n)()) || void 0 === dd ? void 0 : dd.content
      })
    }

    function od(dd) {
      var Od;
      let {
        show: md
      } = dd;
      (0, Kd.i)(Fd.d, (0, Fd.n)());
      const vd = null === (Od = (0, Fd.n)()) || void 0 === Od ? void 0 : Od.menu;
      return (0, hd.useEffect)((() => {
        var dd;
        md || (null === vd || void 0 === vd || null === (dd = vd.onClose) || void 0 === dd || dd.call(vd), (0, Rd.q)())
      }), [md, vd]), (0, hd.useEffect)((() => md ? (0, Xd.d)(Rd.y, Rd.h) : void 0), [md]), (0, Qd.jsx)(Wd.b, {
        showing: md,
        globallyUniqueKey: "clientGameMenu",
        children: null === vd || void 0 === vd ? void 0 : vd.content
      })
    }
    const Nd = new Map,
      qd = new Set;

    function Hd(dd, Od) {
      Od ? Nd.set(dd, Od) : Nd.delete(dd);
      for (const md of qd) md()
    }

    function yd(dd) {
      let {
        placement: Od = "bottom"
      } = dd;
      const md = (0, hd.useRef)(null);
      return (0, hd.useLayoutEffect)((() => {
        const dd = md.current;
        return Hd(Od, dd), () => {
          Nd.get(Od) === dd && Hd(Od, null)
        }
      }), [Od]), (0, Qd.jsx)("div", {
        ref: md,
        id: `clientGameHud-${Od}`,
        style: {
          display: "contents"
        }
      })
    }

    function bd(dd) {
      let {
        children: Od,
        placement: md = "bottom"
      } = dd;
      const [Wd, Fd] = (0, hd.useState)((() => {
        var dd;
        return null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null
      }));
      return (0, hd.useEffect)((() => {
        const dd = () => {
          var dd;
          Fd(null !== (dd = Nd.get(md)) && void 0 !== dd ? dd : null)
        };
        return qd.add(dd), dd(), () => {
          qd.delete(dd)
        }
      }), [md]), Wd ? (0, vd.createPortal)(Od, Wd) : null
    }
  },
  35535: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd
    });
    var Wd = md(5197),
      Fd = md(5206);

    function Rd(dd) {
      let {
        children: Od,
        showing: md,
        globallyUniqueKey: Rd,
        alwaysMountChildren: Xd = !1,
        doGameplayStartStopOnShow: Kd = !0,
        keepsMovement: hd = !1
      } = dd;
      return (0, Fd.e)(!0, md, Rd, hd), (0, Wd.b)(Kd, md), md || Xd ? Od : null
    }
  },
  9850: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Fd
    });
    let Wd = null;
    const Fd = function(dd) {
        const Od = {
          cycle: dd,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Wd = Od, () => {
          Wd === Od && (Wd = null)
        }
      },
      Rd = () => {
        var dd;
        return null !== (dd = Wd) && void 0 !== dd && dd.canCycle() ? Wd.cycle : null
      }
  },
  54177: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      Smp2OnboardingUi: () => Hd
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(40894),
      Kd = md(32),
      hd = md(38243),
      vd = md(3039),
      Qd = md(2079),
      td = md(3645),
      od = md(29),
      Nd = md(40887),
      qd = md(1341);

    function Hd(dd) {
      let {
        store: Od
      } = dd;
      const md = function(dd) {
          const [Od, md] = (0, Wd.useState)((() => dd.get()));
          return (0, Wd.useEffect)((() => {
            const Od = Kd.j.subscribe(Nd.b, (dd => {
              md(dd)
            }));
            return md(dd.get()), () => {
              Kd.j.unsubscribe(Od)
            }
          }), [dd]), Od
        }(Od),
        Fd = (0, td.d)(),
        {
          openInGameMenuName: Rd,
          openEverythingMenuName: Xd
        } = (0, od.p)(["openInGameMenuName", "openEverythingMenuName"]),
        Hd = !Fd && null === Rd && null === Xd;
      (0, Wd.useEffect)((() => {
        Od.setShowing(Hd)
      }), [Od, Hd]);
      const bd = Boolean(md.path);
      return (0, Wd.useEffect)((() => {
        if (bd) return (0, vd.f)()
      }), [bd]), Hd ? (0, qd.jsxs)(qd.Fragment, {
        children: [md.path && (0, qd.jsx)(hd.h, {
          placement: "topRight",
          children: (0, qd.jsx)(yd, {
            path: md.path
          })
        }), md.reward && (0, qd.jsxs)("div", {
          className: "Smp2RewardCard",
          role: "status",
          style: {
            "--smp2-reward-show-ms": `${Nd.c}ms`
          },
          children: [(0, qd.jsx)("span", {
            className: "Smp2RewardBurst",
            "aria-hidden": "true"
          }), (0, qd.jsx)("div", {
            className: "Smp2RewardIcon",
            children: (0, qd.jsx)(Qd.c, {
              itemName: md.reward.icon,
              amount: 1
            })
          }), (0, qd.jsxs)("div", {
            className: "Smp2RewardText",
            children: [(0, qd.jsx)("strong", {
              children: md.reward.title
            }), (0, qd.jsx)("span", {
              children: md.reward.text
            })]
          })]
        }, md.reward.id)]
      }) : null
    }

    function yd(dd) {
      let {
        path: Od
      } = dd;
      const md = Od.steps[Od.step],
        Wd = (0, Xd.j)(md);
      return (0, qd.jsxs)("div", {
        className: "Smp2PathCard",
        children: [(0, qd.jsx)("span", {
          className: "Smp2PathTitle",
          children: Od.title
        }), (0, qd.jsx)("div", {
          className: "Smp2PathSegments",
          "aria-hidden": "true",
          children: Od.steps.map(((dd, md) => (0, qd.jsx)("span", {
            className: Rd()("Smp2PathSegment", {
              Filled: md < Od.step,
              Current: md === Od.step
            })
          }, dd.key)))
        }), (0, qd.jsxs)("div", {
          className: "Smp2PathStep",
          children: [(0, qd.jsx)("div", {
            className: "Smp2PathStepIcon",
            children: (0, qd.jsx)(Qd.c, {
              itemName: md.icon,
              amount: 1
            })
          }), (0, qd.jsx)("span", {
            className: "Smp2PathStepText",
            children: md.text
          }), Wd > 1 && (0, qd.jsxs)("span", {
            className: "Smp2PathStepProgress",
            children: [Od.progress, "/", Wd]
          })]
        }, `${Od.step}`)]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);