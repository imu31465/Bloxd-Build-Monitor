export const id = 276;
export const ids = [276];
export const modules = {
  53732: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      PostMatchPodium: () => Td
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(35582),
      Kd = md(53737),
      hd = md(53739),
      vd = md(2125),
      Qd = md(2060),
      td = md(1238),
      od = md(38247),
      Nd = md(1341);
    const qd = [1, 0, 2],
      Hd = [.26, .17, .1],
      yd = [.78, .7, .7];

    function bd(dd) {
      return Xd.i.openMobLineup(dd)
    }
    const Td = (0, Wd.memo)((function(dd) {
      let {
        view: Od
      } = dd;
      const md = (0, vd.h)("players"),
        Fd = (0, Wd.useRef)(null),
        Rd = qd.filter((dd => dd < Od.podium.length)),
        Xd = (0, Wd.useMemo)((() => Rd.map((dd => {
          const Wd = Od.podium[dd];
          return {
            cosmetics: (0, od.y)(Wd, md.byId),
            size: yd[dd],
            WE: null,
            animation: Kd.j,
            lift: Hd[dd]
          }
        }))), [Od.Wt]),
        Qd = (0, Wd.useMemo)((() => ({
          figures: Xd,
          shown: Xd.map((() => !0))
        })), [Xd]);
      return (0, hd.c)(Fd, bd, Qd), (0, Nd.jsxs)("div", {
        className: "PostMatchPodium",
        style: {
          "--columns": Rd.length
        },
        children: [(0, Nd.jsx)("div", {
          className: "PostMatchPodiumFigures MobPreview",
          ref: Fd
        }), (0, Nd.jsx)("div", {
          className: "PostMatchPodiumSteps",
          children: Rd.map((dd => (0, Nd.jsx)(pd, {
            view: Od,
            row: Od.podium[dd],
            place: dd
          }, dd)))
        })]
      })
    }));

    function pd(dd) {
      var Od;
      let {
        view: md,
        row: Wd,
        place: Fd
      } = dd;
      const {
        t: Xd
      } = (0, td.G)(), Kd = (0, od.r)(md, Wd);
      return (0, Nd.jsx)("div", {
        className: Rd()("PostMatchPodiumStep", `Place-${Fd+1}`, {
          IsLocal: Wd.isLocal
        }),
        style: {
          "--stepHeight": .151 + Hd[Fd],
          "--teamColour": null !== (Od = Wd.colour) && void 0 !== Od ? Od : void 0
        },
        children: (0, Nd.jsxs)("div", {
          className: "PostMatchPodiumBlock",
          children: [(0, Nd.jsx)("span", {
            className: "PostMatchPodiumPlace FullyFancyText",
            children: Fd + 1
          }), (0, Nd.jsx)("span", {
            className: "PostMatchPodiumName SmallTextBold",
            children: Wd.name
          }), (Wd.isMvp || Wd.isSvp) && (0, Nd.jsx)("span", {
            className: Rd()("PostMatchTag", Wd.isMvp ? "Tag-mvp" : "Tag-svp"),
            children: Xd(Wd.isMvp ? "postMatch:mvp" : "postMatch:svp")
          }), null !== Kd && (0, Nd.jsxs)("span", {
            className: "PostMatchPodiumStat SmallTextBold",
            children: [(0, Nd.jsx)("b", {
              children: Kd.value
            }), " ", (0, Nd.jsx)(Qd.d, {
              text: Kd.label
            })]
          })]
        })
      })
    }
  },
  53739: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(66),
      Fd = md(3851);

    function Rd(dd, Od, md) {
      const Rd = (0, Wd.useRef)(null),
        {
          width: Xd,
          height: Kd
        } = (0, Fd.b)(dd);
      (0, Wd.useEffect)((() => {
        const md = Od(dd.current);
        return Rd.current = md, () => {
          md.close(), Rd.current = null
        }
      }), [dd, Od]), (0, Wd.useEffect)((() => {
        Xd <= 0 || Kd <= 0 || Rd.current.resize(Xd, Kd)
      }), [Xd, Kd]), (0, Wd.useEffect)((() => {
        Rd.current.show(md)
      }), [md])
    }
  },
  53737: (dd, Od, md) => {
    md.d(Od, {
      d: () => od,
      h: () => td,
      j: () => hd
    });
    var Wd = md(38682),
      Fd = md(40230);

    function Rd(dd, Od) {
      let [md, Wd, Fd] = dd;
      return [0, .5, 1].map((dd => ({
        timeFraction: dd,
        rotation: {
          Um: "catmull-rom-spline",
          point: [md, Wd, Fd + (.5 === dd ? Od : 0)]
        }
      })))
    }

    function Xd(dd, Od, md) {
      return {
        gm: 3200,
        loop: !0,
        am: {
          Root: {
            timeline: [0, .5, 1].map((dd => ({
              timeFraction: dd,
              position: {
                Um: "catmull-rom-spline",
                point: [0, .5 === dd ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((dd => ({
              timeFraction: dd,
              rotation: {
                Um: "catmull-rom-spline",
                point: [0, .25 === dd ? .12 : .75 === dd ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Rd(dd, md)
          },
          ArmRightMesh: {
            timeline: Rd(Od, -md)
          }
        }
      }
    }
    const Kd = Xd([0, 0, 0], [0, 0, 0], .07),
      hd = (0, Fd.d)((0, Wd.h)(Kd), "mobIdle"),
      vd = Xd([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Qd = Xd([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      td = (0, Fd.d)((0, Wd.h)(vd), "gunReady"),
      od = (0, Fd.d)((0, Wd.h)(Qd), "gunAimed")
  },
  40230: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      h: () => Rd
    });
    const Wd = new WeakMap;

    function Fd(dd, Od) {
      return Wd.set(dd, Od), dd
    }

    function Rd(dd) {
      var Od;
      return null !== (Od = Wd.get(dd)) && void 0 !== Od ? Od : null
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);