export const id = 92;
export const ids = [92];
export const modules = {
  4293: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => iB
    });
    var VB = dB(1422),
      yB = dB(62),
      pB = dB(1078),
      lB = dB(1011),
      JB = dB(993),
      YB = dB(1821),
      gB = dB(1407),
      oB = dB(1225),
      kB = dB(990),
      LB = dB(21),
      OB = dB(1324),
      DB = dB(946),
      uB = dB(2182),
      HB = dB(1441),
      EB = dB(980);
    const vB = [{
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
      mB = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function iB() {
      const {
        t: BB
      } = (0, pB.z)(), TB = (0, gB.useNavigatePreserveSearch)(), dB = (0, VB.o)(), {
        isUserContextUpdating: iB
      } = (0, lB.b)(), NB = (0, YB.e)(), tB = (0, JB.i)(), fB = (sB = dB.pathname).startsWith(HB.h) ? null : sB.startsWith(mB.docs) ? "docs" : sB.startsWith(mB.leaderboard) ? "leaderboard" : "myGames";
      var sB;
      const MB = function(BB) {
        if (!BB.startsWith(HB.h)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const TB = (0, gB.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== TB && TB.startsWith(mB.myGames) ? -1 : mB.myGames
        }
      }(dB.pathname);
      return (0, yB.useEffect)((() => {
        LB.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, EB.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [NB && (0, EB.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, EB.jsx)(uB.b, {})
        }), (0, EB.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, EB.jsxs)("div", {
            className: "StudioTop",
            children: [(0, EB.jsx)(kB.c, {
              show: !0,
              socialBarIsDocked: NB
            }), (0, EB.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, EB.jsx)(OB.b, {
                icon: MB.icon,
                onClick: () => {
                  TB(MB.to)
                },
                children: BB(MB.title)
              }), (0, EB.jsx)("div", {
                className: "StudioNavTabs",
                children: vB.map((dB => (0, EB.jsxs)(OB.T, {
                  active: fB === dB.id,
                  href: mB[dB.id],
                  onClick: () => {
                    TB(mB[dB.id])
                  },
                  children: [(0, EB.jsx)(DB.e, {
                    name: dB.icon
                  }), !tB && BB(dB.title)]
                }, dB.id)))
              })]
            })]
          }), (0, EB.jsxs)("main", {
            className: "StudioBottom",
            children: [iB && (0, EB.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, EB.jsx)(oB.b, {})
            }), !iB && (0, EB.jsx)("div", {
              className: "StudioContent",
              children: (0, EB.jsx)(VB.g, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);