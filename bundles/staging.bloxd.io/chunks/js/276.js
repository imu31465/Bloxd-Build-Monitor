export const id = 276;
export const ids = [276];
export const modules = {
  53477: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      PostMatchPodium: () => sb
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(35366),
      gb = Mb(53482),
      lb = Mb(53490),
      Lb = Mb(2183),
      Ib = Mb(2116),
      Ob = Mb(1259),
      Ub = Mb(37907),
      tb = Mb(1364);
    const Cb = [1, 0, 2],
      Eb = [.26, .17, .1],
      Fb = [.78, .7, .7];

    function Bb(bb) {
      return Vb.i.openMobLineup(bb)
    }
    const sb = (0, eb.memo)((function(bb) {
      let {
        view: wb
      } = bb;
      const Mb = (0, Lb.h)("players"),
        Hb = (0, eb.useRef)(null),
        pb = Cb.filter((bb => bb < wb.podium.length)),
        Vb = (0, eb.useMemo)((() => pb.map((bb => {
          const eb = wb.podium[bb];
          return {
            cosmetics: (0, Ub.m)(eb, Mb.byId),
            size: Fb[bb],
            NK: null,
            animation: gb.h,
            lift: Eb[bb]
          }
        }))), [wb.bO]),
        Ib = (0, eb.useMemo)((() => ({
          figures: Vb,
          shown: Vb.map((() => !0))
        })), [Vb]);
      return (0, lb.b)(Hb, Bb, Ib), (0, tb.jsxs)("div", {
        className: "PostMatchPodium",
        style: {
          "--columns": pb.length
        },
        children: [(0, tb.jsx)("div", {
          className: "PostMatchPodiumFigures MobPreview",
          ref: Hb
        }), (0, tb.jsx)("div", {
          className: "PostMatchPodiumSteps",
          children: pb.map((bb => (0, tb.jsx)(mb, {
            view: wb,
            row: wb.podium[bb],
            place: bb
          }, bb)))
        })]
      })
    }));

    function mb(bb) {
      var wb;
      let {
        view: Mb,
        row: eb,
        place: Hb
      } = bb;
      const {
        t: Vb
      } = (0, Ob.C)(), gb = (0, Ub.k)(Mb, eb);
      return (0, tb.jsx)("div", {
        className: pb()("PostMatchPodiumStep", `Place-${Hb+1}`, {
          IsLocal: eb.isLocal
        }),
        style: {
          "--stepHeight": .151 + Eb[Hb],
          "--teamColour": null !== (wb = eb.colour) && void 0 !== wb ? wb : void 0
        },
        children: (0, tb.jsxs)("div", {
          className: "PostMatchPodiumBlock",
          children: [(0, tb.jsx)("span", {
            className: "PostMatchPodiumPlace FullyFancyText",
            children: Hb + 1
          }), (0, tb.jsx)("span", {
            className: "PostMatchPodiumName SmallTextBold",
            children: eb.name
          }), (eb.isMvp || eb.isSvp) && (0, tb.jsx)("span", {
            className: pb()("PostMatchTag", eb.isMvp ? "Tag-mvp" : "Tag-svp"),
            children: Vb(eb.isMvp ? "postMatch:mvp" : "postMatch:svp")
          }), null !== gb && (0, tb.jsxs)("span", {
            className: "PostMatchPodiumStat SmallTextBold",
            children: [(0, tb.jsx)("b", {
              children: gb.value
            }), " ", (0, tb.jsx)(Ib.d, {
              text: gb.label
            })]
          })]
        })
      })
    }
  },
  53490: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb
    });
    var eb = Mb(64),
      Hb = Mb(4005);

    function pb(bb, wb, Mb) {
      const pb = (0, eb.useRef)(null),
        {
          width: Vb,
          height: gb
        } = (0, Hb.b)(bb);
      (0, eb.useEffect)((() => {
        const Mb = wb(bb.current);
        return pb.current = Mb, () => {
          Mb.close(), pb.current = null
        }
      }), [bb, wb]), (0, eb.useEffect)((() => {
        Vb <= 0 || gb <= 0 || pb.current.resize(Vb, gb)
      }), [Vb, gb]), (0, eb.useEffect)((() => {
        pb.current.show(Mb)
      }), [Mb])
    }
  },
  53482: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ub,
      e: () => Ob,
      h: () => lb
    });
    var eb = Mb(38356),
      Hb = Mb(39927);

    function pb(bb, wb) {
      let [Mb, eb, Hb] = bb;
      return [0, .5, 1].map((bb => ({
        timeFraction: bb,
        rotation: {
          XM: "catmull-rom-spline",
          point: [Mb, eb, Hb + (.5 === bb ? wb : 0)]
        }
      })))
    }

    function Vb(bb, wb, Mb) {
      return {
        BM: 3200,
        loop: !0,
        mM: {
          Root: {
            timeline: [0, .5, 1].map((bb => ({
              timeFraction: bb,
              position: {
                XM: "catmull-rom-spline",
                point: [0, .5 === bb ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((bb => ({
              timeFraction: bb,
              rotation: {
                XM: "catmull-rom-spline",
                point: [0, .25 === bb ? .12 : .75 === bb ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: pb(bb, Mb)
          },
          ArmRightMesh: {
            timeline: pb(wb, -Mb)
          }
        }
      }
    }
    const gb = Vb([0, 0, 0], [0, 0, 0], .07),
      lb = (0, Hb.c)((0, eb.h)(gb), "mobIdle"),
      Lb = Vb([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Ib = Vb([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Ob = (0, Hb.c)((0, eb.h)(Lb), "gunReady"),
      Ub = (0, Hb.c)((0, eb.h)(Ib), "gunAimed")
  },
  39927: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      d: () => pb
    });
    const eb = new WeakMap;

    function Hb(bb, wb) {
      return eb.set(bb, wb), bb
    }

    function pb(bb) {
      var wb;
      return null !== (wb = eb.get(bb)) && void 0 !== wb ? wb : null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);