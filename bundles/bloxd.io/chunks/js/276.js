export const id = 276;
export const ids = [276];
export const modules = {
  53835: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      PostMatchPodium: () => Yr
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(35505),
      Ir = Qr(53844),
      fr = Qr(53849),
      Er = Qr(2128),
      pr = Qr(2057),
      xr = Qr(1251),
      mr = Qr(38162),
      Nr = Qr(1338);
    const Ur = [1, 0, 2],
      tr = [.26, .17, .1],
      hr = [.78, .7, .7];

    function zr(rr) {
      return jr.j.openMobLineup(rr)
    }
    const Yr = (0, Zr.memo)((function(rr) {
      let {
        view: Sr
      } = rr;
      const Qr = (0, Er.j)("players"),
        Wr = (0, Zr.useRef)(null),
        ar = Ur.filter((rr => rr < Sr.podium.length)),
        jr = (0, Zr.useMemo)((() => ar.map((rr => {
          const Zr = Sr.podium[rr];
          return {
            cosmetics: (0, mr.q)(Zr, Qr.byId),
            size: hr[rr],
            jB: null,
            animation: Ir.g,
            lift: tr[rr]
          }
        }))), [Sr.jx]),
        pr = (0, Zr.useMemo)((() => ({
          figures: jr,
          shown: jr.map((() => !0))
        })), [jr]);
      return (0, fr.e)(Wr, zr, pr), (0, Nr.jsxs)("div", {
        className: "PostMatchPodium",
        style: {
          "--columns": ar.length
        },
        children: [(0, Nr.jsx)("div", {
          className: "PostMatchPodiumFigures MobPreview",
          ref: Wr
        }), (0, Nr.jsx)("div", {
          className: "PostMatchPodiumSteps",
          children: ar.map((rr => (0, Nr.jsx)(nr, {
            view: Sr,
            row: Sr.podium[rr],
            place: rr
          }, rr)))
        })]
      })
    }));

    function nr(rr) {
      var Sr;
      let {
        view: Qr,
        row: Zr,
        place: Wr
      } = rr;
      const {
        t: jr
      } = (0, xr.E)(), Ir = (0, mr.m)(Qr, Zr);
      return (0, Nr.jsx)("div", {
        className: ar()("PostMatchPodiumStep", `Place-${Wr+1}`, {
          IsLocal: Zr.isLocal
        }),
        style: {
          "--stepHeight": .151 + tr[Wr],
          "--teamColour": null !== (Sr = Zr.colour) && void 0 !== Sr ? Sr : void 0
        },
        children: (0, Nr.jsxs)("div", {
          className: "PostMatchPodiumBlock",
          children: [(0, Nr.jsx)("span", {
            className: "PostMatchPodiumPlace FullyFancyText",
            children: Wr + 1
          }), (0, Nr.jsx)("span", {
            className: "PostMatchPodiumName SmallTextBold",
            children: Zr.name
          }), (Zr.isMvp || Zr.isSvp) && (0, Nr.jsx)("span", {
            className: ar()("PostMatchTag", Zr.isMvp ? "Tag-mvp" : "Tag-svp"),
            children: jr(Zr.isMvp ? "postMatch:mvp" : "postMatch:svp")
          }), null !== Ir && (0, Nr.jsxs)("span", {
            className: "PostMatchPodiumStat SmallTextBold",
            children: [(0, Nr.jsx)("b", {
              children: Ir.value
            }), " ", (0, Nr.jsx)(pr.c, {
              text: Ir.label
            })]
          })]
        })
      })
    }
  },
  53849: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar
    });
    var Zr = Qr(72),
      Wr = Qr(3855);

    function ar(rr, Sr, Qr) {
      const ar = (0, Zr.useRef)(null),
        {
          width: jr,
          height: Ir
        } = (0, Wr.b)(rr);
      (0, Zr.useEffect)((() => {
        const Qr = Sr(rr.current);
        return ar.current = Qr, () => {
          Qr.close(), ar.current = null
        }
      }), [rr, Sr]), (0, Zr.useEffect)((() => {
        jr <= 0 || Ir <= 0 || ar.current.resize(jr, Ir)
      }), [jr, Ir]), (0, Zr.useEffect)((() => {
        ar.current.show(Qr)
      }), [Qr])
    }
  },
  53844: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => mr,
      f: () => xr,
      g: () => fr
    });
    var Zr = Qr(38638),
      Wr = Qr(40197);

    function ar(rr, Sr) {
      let [Qr, Zr, Wr] = rr;
      return [0, .5, 1].map((rr => ({
        timeFraction: rr,
        rotation: {
          lQ: "catmull-rom-spline",
          point: [Qr, Zr, Wr + (.5 === rr ? Sr : 0)]
        }
      })))
    }

    function jr(rr, Sr, Qr) {
      return {
        BQ: 3200,
        loop: !0,
        vQ: {
          Root: {
            timeline: [0, .5, 1].map((rr => ({
              timeFraction: rr,
              position: {
                lQ: "catmull-rom-spline",
                point: [0, .5 === rr ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((rr => ({
              timeFraction: rr,
              rotation: {
                lQ: "catmull-rom-spline",
                point: [0, .25 === rr ? .12 : .75 === rr ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: ar(rr, Qr)
          },
          ArmRightMesh: {
            timeline: ar(Sr, -Qr)
          }
        }
      }
    }
    const Ir = jr([0, 0, 0], [0, 0, 0], .07),
      fr = (0, Wr.c)((0, Zr.d)(Ir), "mobIdle"),
      Er = jr([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      pr = jr([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      xr = (0, Wr.c)((0, Zr.d)(Er), "gunReady"),
      mr = (0, Wr.c)((0, Zr.d)(pr), "gunAimed")
  },
  40197: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr,
      g: () => ar
    });
    const Zr = new WeakMap;

    function Wr(rr, Sr) {
      return Zr.set(rr, Sr), rr
    }

    function ar(rr) {
      var Sr;
      return null !== (Sr = Zr.get(rr)) && void 0 !== Sr ? Sr : null
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);