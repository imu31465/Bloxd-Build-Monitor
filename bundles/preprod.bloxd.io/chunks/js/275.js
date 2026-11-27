export const id = 275;
export const ids = [275];
export const modules = {
  53479: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      PostMatchPodium: () => kW
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(35264),
      LW = OW(53483),
      cW = OW(53489),
      wW = OW(2075),
      tW = OW(2021),
      ZW = OW(1172),
      xW = OW(37872),
      lW = OW(1283);
    const AW = [1, 0, 2],
      bW = [.26, .17, .1],
      jW = [.78, .7, .7];

    function UW(WW) {
      return PW.f.openMobLineup(WW)
    }
    const kW = (0, mW.memo)((function(WW) {
      let {
        view: iW
      } = WW;
      const OW = (0, wW.g)("players"),
        EW = (0, mW.useRef)(null),
        NW = AW.filter((WW => WW < iW.podium.length)),
        PW = (0, mW.useMemo)((() => NW.map((WW => {
          const mW = iW.podium[WW];
          return {
            cosmetics: (0, xW.w)(mW, OW.byId),
            size: jW[WW],
            nS: null,
            animation: LW.h,
            lift: bW[WW]
          }
        }))), [iW.wZ]),
        tW = (0, mW.useMemo)((() => ({
          figures: PW,
          shown: PW.map((() => !0))
        })), [PW]);
      return (0, cW.c)(EW, UW, tW), (0, lW.jsxs)("div", {
        className: "PostMatchPodium",
        style: {
          "--columns": NW.length
        },
        children: [(0, lW.jsx)("div", {
          className: "PostMatchPodiumFigures MobPreview",
          ref: EW
        }), (0, lW.jsx)("div", {
          className: "PostMatchPodiumSteps",
          children: NW.map((WW => (0, lW.jsx)(sW, {
            view: iW,
            row: iW.podium[WW],
            place: WW
          }, WW)))
        })]
      })
    }));

    function sW(WW) {
      var iW;
      let {
        view: OW,
        row: mW,
        place: EW
      } = WW;
      const {
        t: PW
      } = (0, ZW.B)(), LW = (0, xW.s)(OW, mW);
      return (0, lW.jsx)("div", {
        className: NW()("PostMatchPodiumStep", `Place-${EW+1}`, {
          IsLocal: mW.isLocal
        }),
        style: {
          "--stepHeight": .151 + bW[EW],
          "--teamColour": null !== (iW = mW.colour) && void 0 !== iW ? iW : void 0
        },
        children: (0, lW.jsxs)("div", {
          className: "PostMatchPodiumBlock",
          children: [(0, lW.jsx)("span", {
            className: "PostMatchPodiumPlace FullyFancyText",
            children: EW + 1
          }), (0, lW.jsx)("span", {
            className: "PostMatchPodiumName SmallTextBold",
            children: mW.name
          }), (mW.isMvp || mW.isSvp) && (0, lW.jsx)("span", {
            className: NW()("PostMatchTag", mW.isMvp ? "Tag-mvp" : "Tag-svp"),
            children: PW(mW.isMvp ? "postMatch:mvp" : "postMatch:svp")
          }), null !== LW && (0, lW.jsxs)("span", {
            className: "PostMatchPodiumStat SmallTextBold",
            children: [(0, lW.jsx)("b", {
              children: LW.value
            }), " ", (0, lW.jsx)(tW.d, {
              text: LW.label
            })]
          })]
        })
      })
    }
  },
  53489: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(62),
      EW = OW(3809);

    function NW(WW, iW, OW) {
      const NW = (0, mW.useRef)(null),
        {
          width: PW,
          height: LW
        } = (0, EW.d)(WW);
      (0, mW.useEffect)((() => {
        const OW = iW(WW.current);
        return NW.current = OW, () => {
          OW.close(), NW.current = null
        }
      }), [WW, iW]), (0, mW.useEffect)((() => {
        PW <= 0 || LW <= 0 || NW.current.resize(PW, LW)
      }), [PW, LW]), (0, mW.useEffect)((() => {
        NW.current.show(OW)
      }), [OW])
    }
  },
  53483: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => xW,
      d: () => ZW,
      h: () => cW
    });
    var mW = OW(38320),
      EW = OW(39881);

    function NW(WW, iW) {
      let [OW, mW, EW] = WW;
      return [0, .5, 1].map((WW => ({
        timeFraction: WW,
        rotation: {
          YO: "catmull-rom-spline",
          point: [OW, mW, EW + (.5 === WW ? iW : 0)]
        }
      })))
    }

    function PW(WW, iW, OW) {
      return {
        kO: 3200,
        loop: !0,
        MO: {
          Root: {
            timeline: [0, .5, 1].map((WW => ({
              timeFraction: WW,
              position: {
                YO: "catmull-rom-spline",
                point: [0, .5 === WW ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((WW => ({
              timeFraction: WW,
              rotation: {
                YO: "catmull-rom-spline",
                point: [0, .25 === WW ? .12 : .75 === WW ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: NW(WW, OW)
          },
          ArmRightMesh: {
            timeline: NW(iW, -OW)
          }
        }
      }
    }
    const LW = PW([0, 0, 0], [0, 0, 0], .07),
      cW = (0, EW.e)((0, mW.h)(LW), "mobIdle"),
      wW = PW([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      tW = PW([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      ZW = (0, EW.e)((0, mW.h)(wW), "gunReady"),
      xW = (0, EW.e)((0, mW.h)(tW), "gunAimed")
  },
  39881: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      h: () => NW
    });
    const mW = new WeakMap;

    function EW(WW, iW) {
      return mW.set(WW, iW), WW
    }

    function NW(WW) {
      var iW;
      return null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : null
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);