export const id = 92;
export const ids = [92];
export const modules = {
  4307: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => mJ
    });
    var FJ = ZJ(1421),
      UJ = ZJ(47),
      eJ = ZJ(1086),
      XJ = ZJ(1022),
      AJ = ZJ(1009),
      qJ = ZJ(1858),
      jJ = ZJ(1406),
      YJ = ZJ(1232),
      hJ = ZJ(1004),
      DJ = ZJ(13),
      sJ = ZJ(1329),
      nJ = ZJ(942),
      GJ = ZJ(2222),
      fJ = ZJ(1441),
      xJ = ZJ(990);
    const rJ = [{
        id: "myGames",
        icon: "joystick",
        title: "studio:myGames"
      }, {
        id: "leaderboard",
        icon: "trophy",
        title: "studio:leaderboard"
      }, {
        id: "docs",
        icon: "file-lines",
        title: "general:docs"
      }],
      vJ = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function mJ() {
      const {
        t: JJ
      } = (0, eJ.F)(), cJ = (0, jJ.useNavigatePreserveSearch)(), ZJ = (0, FJ.q)(), {
        isUserContextUpdating: mJ
      } = (0, XJ.d)(), QJ = (0, qJ.e)(), EJ = (0, AJ.h)(), VJ = (KJ = ZJ.pathname).startsWith(fJ.l) ? null : KJ.startsWith(vJ.docs) ? "docs" : KJ.startsWith(vJ.leaderboard) ? "leaderboard" : "myGames";
      var KJ;
      const yJ = function(JJ) {
        if (!JJ.startsWith(fJ.l)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const cJ = (0, jJ.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== cJ && cJ.startsWith(vJ.myGames) ? -1 : vJ.myGames
        }
      }(ZJ.pathname);
      return (0, UJ.useEffect)((() => {
        DJ.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, xJ.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [QJ && (0, xJ.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, xJ.jsx)(GJ.b, {})
        }), (0, xJ.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, xJ.jsxs)("div", {
            className: "StudioTop",
            children: [(0, xJ.jsx)(hJ.d, {
              show: !0,
              socialBarIsDocked: QJ
            }), (0, xJ.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, xJ.jsx)(sJ.b, {
                icon: yJ.icon,
                onClick: () => {
                  cJ(yJ.to)
                },
                children: JJ(yJ.title)
              }), (0, xJ.jsx)("div", {
                className: "StudioNavTabs",
                children: rJ.map((ZJ => (0, xJ.jsxs)(sJ.O, {
                  active: VJ === ZJ.id,
                  href: vJ[ZJ.id],
                  onClick: () => {
                    cJ(vJ[ZJ.id])
                  },
                  children: [(0, xJ.jsx)(nJ.c, {
                    name: ZJ.icon
                  }), !EJ && JJ(ZJ.title)]
                }, ZJ.id)))
              })]
            })]
          }), (0, xJ.jsxs)("main", {
            className: "StudioBottom",
            children: [mJ && (0, xJ.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, xJ.jsx)(YJ.c, {})
            }), !mJ && (0, xJ.jsx)("div", {
              className: "StudioContent",
              children: (0, xJ.jsx)(FJ.g, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);