export const id = 113;
export const ids = [113];
export const modules = {
  5379: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => AB
    });
    var YB = GB(1571),
      DB = GB(56),
      QB = GB(1175),
      oB = GB(1112),
      jB = GB(1106),
      yB = GB(2177),
      JB = GB(1560),
      MB = GB(1375),
      PB = GB(1099),
      zB = GB(16),
      lB = GB(1485),
      pB = GB(1383),
      qB = GB(2847),
      ZB = GB(1586),
      NB = GB(1282);
    const RB = [{
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
      WB = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function AB() {
      const {
        t: BB
      } = (0, QB.H)(), OB = (0, JB.useNavigatePreserveSearch)(), GB = (0, YB.r)(), {
        isUserContextUpdating: AB
      } = (0, oB.d)(), VB = (0, yB.c)(), SB = (0, jB.g)(), nB = (UB = GB.pathname).startsWith(ZB.y) ? null : UB.startsWith(WB.docs) ? "docs" : UB.startsWith(WB.leaderboard) ? "leaderboard" : "myGames";
      var UB;
      const fB = function(BB) {
        if (!BB.startsWith(ZB.y)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const OB = (0, JB.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== OB && OB.startsWith(WB.myGames) ? -1 : WB.myGames
        }
      }(GB.pathname);
      return (0, DB.useEffect)((() => {
        zB.c.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, NB.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [VB && (0, NB.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, NB.jsx)(qB.e, {})
        }), (0, NB.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, NB.jsxs)("div", {
            className: "StudioTop",
            children: [(0, NB.jsx)(PB.b, {
              show: !0,
              socialBarIsDocked: VB
            }), (0, NB.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, NB.jsx)(lB.c, {
                icon: fB.icon,
                onClick: () => {
                  OB(fB.to)
                },
                children: BB(fB.title)
              }), (0, NB.jsx)("div", {
                className: "StudioNavTabs",
                children: RB.map((GB => (0, NB.jsxs)(lB.Z, {
                  active: nB === GB.id,
                  href: WB[GB.id],
                  onClick: () => {
                    OB(WB[GB.id])
                  },
                  children: [(0, NB.jsx)(pB.b, {
                    name: GB.icon
                  }), !SB && BB(GB.title)]
                }, GB.id)))
              })]
            })]
          }), (0, NB.jsxs)("main", {
            className: "StudioBottom",
            children: [AB && (0, NB.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, NB.jsx)(MB.b, {})
            }), !AB && (0, NB.jsx)("div", {
              className: "StudioContent",
              children: (0, NB.jsx)(YB.g, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);