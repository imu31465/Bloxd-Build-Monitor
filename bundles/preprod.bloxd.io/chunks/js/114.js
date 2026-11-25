export const id = 114;
export const ids = [114];
export const modules = {
  5286: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => UM
    });
    var OM = iM(1608),
      SM = iM(44),
      jM = iM(1188),
      aM = iM(1142),
      PM = iM(1130),
      nM = iM(2201),
      QM = iM(1591),
      zM = iM(1396),
      LM = iM(1123),
      mM = iM(19),
      HM = iM(1520),
      hM = iM(1398),
      JM = iM(2805),
      dM = iM(1627),
      yM = iM(1303);
    const lM = [{
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
      EM = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function UM() {
      const {
        t: MM
      } = (0, jM.A)(), rM = (0, QM.useNavigatePreserveSearch)(), iM = (0, OM.u)(), {
        isUserContextUpdating: UM
      } = (0, aM.b)(), GM = (0, nM.e)(), CM = (0, PM.i)(), eM = (bM = iM.pathname).startsWith(dM.q) ? null : bM.startsWith(EM.docs) ? "docs" : bM.startsWith(EM.leaderboard) ? "leaderboard" : "myGames";
      var bM;
      const wM = function(MM) {
        if (!MM.startsWith(dM.q)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const rM = (0, QM.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== rM && rM.startsWith(EM.myGames) ? -1 : EM.myGames
        }
      }(iM.pathname);
      return (0, SM.useEffect)((() => {
        mM.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, yM.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [GM && (0, yM.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, yM.jsx)(JM.e, {})
        }), (0, yM.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, yM.jsxs)("div", {
            className: "StudioTop",
            children: [(0, yM.jsx)(LM.c, {
              show: !0,
              socialBarIsDocked: GM
            }), (0, yM.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, yM.jsx)(HM.c, {
                icon: wM.icon,
                onClick: () => {
                  rM(wM.to)
                },
                children: MM(wM.title)
              }), (0, yM.jsx)("div", {
                className: "StudioNavTabs",
                children: lM.map((iM => (0, yM.jsxs)(HM.V, {
                  active: eM === iM.id,
                  href: EM[iM.id],
                  onClick: () => {
                    rM(EM[iM.id])
                  },
                  children: [(0, yM.jsx)(hM.b, {
                    name: iM.icon
                  }), !CM && MM(iM.title)]
                }, iM.id)))
              })]
            })]
          }), (0, yM.jsxs)("main", {
            className: "StudioBottom",
            children: [UM && (0, yM.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, yM.jsx)(zM.d, {})
            }), !UM && (0, yM.jsx)("div", {
              className: "StudioContent",
              children: (0, yM.jsx)(OM.h, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);