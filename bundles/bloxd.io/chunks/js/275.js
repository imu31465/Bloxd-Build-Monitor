export const id = 275;
export const ids = [275];
export const modules = {
  53297: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      PostMatchPodium: () => UR
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(35193),
      qR = GR(53299),
      iR = GR(53305),
      fR = GR(2173),
      VR = GR(2105),
      KR = GR(1270),
      wR = GR(37803),
      rR = GR(1378);
    const eR = [1, 0, 2],
      aR = [.26, .17, .1],
      LR = [.78, .7, .7];

    function nR(RR) {
      return ZR.g.openMobLineup(RR)
    }
    const UR = (0, yR.memo)((function(RR) {
      let {
        view: JR
      } = RR;
      const GR = (0, fR.i)("players"),
        tR = (0, yR.useRef)(null),
        uR = eR.filter((RR => RR < JR.podium.length)),
        ZR = (0, yR.useMemo)((() => uR.map((RR => {
          const yR = JR.podium[RR];
          return {
            cosmetics: (0, wR.u)(yR, GR.byId),
            size: LR[RR],
            gC: null,
            animation: qR.g,
            lift: aR[RR]
          }
        }))), [JR.fK]),
        VR = (0, yR.useMemo)((() => ({
          figures: ZR,
          shown: ZR.map((() => !0))
        })), [ZR]);
      return (0, iR.d)(tR, nR, VR), (0, rR.jsxs)("div", {
        className: "PostMatchPodium",
        style: {
          "--columns": uR.length
        },
        children: [(0, rR.jsx)("div", {
          className: "PostMatchPodiumFigures MobPreview",
          ref: tR
        }), (0, rR.jsx)("div", {
          className: "PostMatchPodiumSteps",
          children: uR.map((RR => (0, rR.jsx)(WR, {
            view: JR,
            row: JR.podium[RR],
            place: RR
          }, RR)))
        })]
      })
    }));

    function WR(RR) {
      var JR;
      let {
        view: GR,
        row: yR,
        place: tR
      } = RR;
      const {
        t: ZR
      } = (0, KR.A)(), qR = (0, wR.n)(GR, yR);
      return (0, rR.jsx)("div", {
        className: uR()("PostMatchPodiumStep", `Place-${tR+1}`, {
          IsLocal: yR.isLocal
        }),
        style: {
          "--stepHeight": .151 + aR[tR],
          "--teamColour": null !== (JR = yR.colour) && void 0 !== JR ? JR : void 0
        },
        children: (0, rR.jsxs)("div", {
          className: "PostMatchPodiumBlock",
          children: [(0, rR.jsx)("span", {
            className: "PostMatchPodiumPlace FullyFancyText",
            children: tR + 1
          }), (0, rR.jsx)("span", {
            className: "PostMatchPodiumName SmallTextBold",
            children: yR.name
          }), (yR.isMvp || yR.isSvp) && (0, rR.jsx)("span", {
            className: uR()("PostMatchTag", yR.isMvp ? "Tag-mvp" : "Tag-svp"),
            children: ZR(yR.isMvp ? "postMatch:mvp" : "postMatch:svp")
          }), null !== qR && (0, rR.jsxs)("span", {
            className: "PostMatchPodiumStat SmallTextBold",
            children: [(0, rR.jsx)("b", {
              children: qR.value
            }), " ", (0, rR.jsx)(VR.c, {
              text: qR.label
            })]
          })]
        })
      })
    }
  },
  53305: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR
    });
    var yR = GR(66),
      tR = GR(3909);

    function uR(RR, JR, GR) {
      const uR = (0, yR.useRef)(null),
        {
          width: ZR,
          height: qR
        } = (0, tR.b)(RR);
      (0, yR.useEffect)((() => {
        const GR = JR(RR.current);
        return uR.current = GR, () => {
          GR.close(), uR.current = null
        }
      }), [RR, JR]), (0, yR.useEffect)((() => {
        ZR <= 0 || qR <= 0 || uR.current.resize(ZR, qR)
      }), [ZR, qR]), (0, yR.useEffect)((() => {
        uR.current.show(GR)
      }), [GR])
    }
  },
  53299: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => wR,
      e: () => KR,
      g: () => iR
    });
    var yR = GR(38275),
      tR = GR(39862);

    function uR(RR, JR) {
      let [GR, yR, tR] = RR;
      return [0, .5, 1].map((RR => ({
        timeFraction: RR,
        rotation: {
          CG: "catmull-rom-spline",
          point: [GR, yR, tR + (.5 === RR ? JR : 0)]
        }
      })))
    }

    function ZR(RR, JR, GR) {
      return {
        LG: 3200,
        loop: !0,
        UG: {
          Root: {
            timeline: [0, .5, 1].map((RR => ({
              timeFraction: RR,
              position: {
                CG: "catmull-rom-spline",
                point: [0, .5 === RR ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((RR => ({
              timeFraction: RR,
              rotation: {
                CG: "catmull-rom-spline",
                point: [0, .25 === RR ? .12 : .75 === RR ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: uR(RR, GR)
          },
          ArmRightMesh: {
            timeline: uR(JR, -GR)
          }
        }
      }
    }
    const qR = ZR([0, 0, 0], [0, 0, 0], .07),
      iR = (0, tR.c)((0, yR.h)(qR), "mobIdle"),
      fR = ZR([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      VR = ZR([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      KR = (0, tR.c)((0, yR.h)(fR), "gunReady"),
      wR = (0, tR.c)((0, yR.h)(VR), "gunAimed")
  },
  39862: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      f: () => uR
    });
    const yR = new WeakMap;

    function tR(RR, JR) {
      return yR.set(RR, JR), RR
    }

    function uR(RR) {
      var JR;
      return null !== (JR = yR.get(RR)) && void 0 !== JR ? JR : null
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);