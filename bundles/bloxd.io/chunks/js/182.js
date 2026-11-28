export const id = 182;
export const ids = [182];
export const modules = {
  37898: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Fb,
      d: () => Bb,
      e: () => Ub,
      g: () => Ob
    });
    var eb = Mb(35320),
      Hb = Mb(3531),
      pb = Mb(3538),
      Vb = Mb(10064),
      gb = Mb(1611),
      lb = Mb(64),
      Lb = Mb(81),
      Ib = Mb(1364);

    function Ob() {
      var bb;
      return (0, gb.h)(Hb.e, (0, Hb.x)()), (0, Ib.jsx)(Ib.Fragment, {
        children: null === (bb = (0, Hb.x)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Ub(bb) {
      var wb;
      let {
        show: Mb
      } = bb;
      (0, gb.h)(Hb.e, (0, Hb.x)());
      const Lb = null === (wb = (0, Hb.x)()) || void 0 === wb ? void 0 : wb.menu;
      return (0, lb.useEffect)((() => {
        var bb;
        Mb || (null === Lb || void 0 === Lb || null === (bb = Lb.onClose) || void 0 === bb || bb.call(Lb), (0, pb.l)())
      }), [Mb, Lb]), (0, lb.useEffect)((() => Mb ? (0, Vb.g)(pb.u, pb.g) : void 0), [Mb]), (0, Ib.jsx)(eb.c, {
        showing: Mb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Lb || void 0 === Lb ? void 0 : Lb.content
      })
    }
    const tb = new Map,
      Cb = new Set;

    function Eb(bb, wb) {
      wb ? tb.set(bb, wb) : tb.delete(bb);
      for (const Mb of Cb) Mb()
    }

    function Fb(bb) {
      let {
        placement: wb = "bottom"
      } = bb;
      const Mb = (0, lb.useRef)(null);
      return (0, lb.useLayoutEffect)((() => {
        const bb = Mb.current;
        return Eb(wb, bb), () => {
          tb.get(wb) === bb && Eb(wb, null)
        }
      }), [wb]), (0, Ib.jsx)("div", {
        ref: Mb,
        id: `clientGameHud-${wb}`,
        style: {
          display: "contents"
        }
      })
    }

    function Bb(bb) {
      let {
        children: wb,
        placement: Mb = "bottom"
      } = bb;
      const [eb, Hb] = (0, lb.useState)((() => {
        var bb;
        return null !== (bb = tb.get(Mb)) && void 0 !== bb ? bb : null
      }));
      return (0, lb.useEffect)((() => {
        const bb = () => {
          var bb;
          Hb(null !== (bb = tb.get(Mb)) && void 0 !== bb ? bb : null)
        };
        return Cb.add(bb), bb(), () => {
          Cb.delete(bb)
        }
      }), [Mb]), eb ? (0, Lb.createPortal)(wb, eb) : null
    }
  },
  35320: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(5387),
      Hb = Mb(5395);

    function pb(bb) {
      let {
        children: wb,
        showing: Mb,
        globallyUniqueKey: pb,
        alwaysMountChildren: Vb = !1,
        doGameplayStartStopOnShow: gb = !0,
        keepsMovement: lb = !1
      } = bb;
      return (0, Hb.d)(!0, Mb, pb, lb), (0, eb.b)(gb, Mb), Mb || Vb ? wb : null
    }
  },
  10064: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => pb,
      g: () => Hb
    });
    let eb = null;
    const Hb = function(bb) {
        const wb = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return eb = wb, () => {
          eb === wb && (eb = null)
        }
      },
      pb = () => {
        var bb;
        return null !== (bb = eb) && void 0 !== bb && bb.canCycle() ? eb.cycle : null
      }
  },
  53979: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      Smp2OnboardingUi: () => Eb
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(40661),
      gb = Mb(29),
      lb = Mb(37898),
      Lb = Mb(3108),
      Ib = Mb(2130),
      Ob = Mb(3778),
      Ub = Mb(26),
      tb = Mb(40653),
      Cb = Mb(1364);

    function Eb(bb) {
      let {
        store: wb
      } = bb;
      const Mb = function(bb) {
          const [wb, Mb] = (0, eb.useState)((() => bb.get()));
          return (0, eb.useEffect)((() => {
            const wb = gb.k.subscribe(tb.c, (bb => {
              Mb(bb)
            }));
            return Mb(bb.get()), () => {
              gb.k.unsubscribe(wb)
            }
          }), [bb]), wb
        }(wb),
        Hb = (0, Ob.b)(),
        {
          openInGameMenuName: pb,
          openEverythingMenuName: Vb
        } = (0, Ub.o)(["openInGameMenuName", "openEverythingMenuName"]),
        Eb = !Hb && null === pb && null === Vb;
      (0, eb.useEffect)((() => {
        wb.setShowing(Eb)
      }), [wb, Eb]);
      const Bb = Boolean(Mb.path);
      return (0, eb.useEffect)((() => {
        if (Bb) return (0, Lb.f)()
      }), [Bb]), Eb ? (0, Cb.jsxs)(Cb.Fragment, {
        children: [Mb.path && (0, Cb.jsx)(lb.d, {
          placement: "topRight",
          children: (0, Cb.jsx)(Fb, {
            path: Mb.path
          })
        }), Mb.reward && (0, Cb.jsxs)("div", {
          className: "Smp2RewardCard",
          role: "status",
          style: {
            "--smp2-reward-show-ms": `${tb.g}ms`
          },
          children: [(0, Cb.jsx)("span", {
            className: "Smp2RewardBurst",
            "aria-hidden": "true"
          }), (0, Cb.jsx)("div", {
            className: "Smp2RewardIcon",
            children: (0, Cb.jsx)(Ib.c, {
              itemName: Mb.reward.icon,
              amount: 1
            })
          }), (0, Cb.jsxs)("div", {
            className: "Smp2RewardText",
            children: [(0, Cb.jsx)("strong", {
              children: Mb.reward.title
            }), (0, Cb.jsx)("span", {
              children: Mb.reward.text
            })]
          })]
        }, Mb.reward.id)]
      }) : null
    }

    function Fb(bb) {
      let {
        path: wb
      } = bb;
      const Mb = wb.steps[wb.step],
        eb = (0, Vb.o)(Mb);
      return (0, Cb.jsxs)("div", {
        className: "Smp2PathCard",
        children: [(0, Cb.jsx)("span", {
          className: "Smp2PathTitle",
          children: wb.title
        }), (0, Cb.jsx)("div", {
          className: "Smp2PathSegments",
          "aria-hidden": "true",
          children: wb.steps.map(((bb, Mb) => (0, Cb.jsx)("span", {
            className: pb()("Smp2PathSegment", {
              Filled: Mb < wb.step,
              Current: Mb === wb.step
            })
          }, bb.key)))
        }), (0, Cb.jsxs)("div", {
          className: "Smp2PathStep",
          children: [(0, Cb.jsx)("div", {
            className: "Smp2PathStepIcon",
            children: (0, Cb.jsx)(Ib.c, {
              itemName: Mb.icon,
              amount: 1
            })
          }), (0, Cb.jsx)("span", {
            className: "Smp2PathStepText",
            children: Mb.text
          }), eb > 1 && (0, Cb.jsxs)("span", {
            className: "Smp2PathStepProgress",
            children: [wb.progress, "/", eb]
          })]
        }, `${wb.step}`)]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);