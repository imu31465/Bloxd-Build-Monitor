export const id = 98;
export const ids = [98];
export const modules = {
  4667: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => du
    });
    var Eu = yu(1483),
      Ku = yu(64),
      Qu = yu(1170),
      mu = yu(1107),
      Ju = yu(1093),
      Nu = yu(2001),
      Xu = yu(1467),
      Vu = yu(1300),
      ru = yu(1090),
      Bu = yu(27),
      xu = yu(1408),
      Su = yu(1043),
      pu = yu(2430),
      Tu = yu(1497),
      Wu = yu(1079);
    const ju = [{
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
      Hu = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function du() {
      const {
        t: uu
      } = (0, Qu.E)(), Ru = (0, Xu.useNavigatePreserveSearch)(), yu = (0, Eu.s)(), {
        isUserContextUpdating: du
      } = (0, mu.d)(), bu = (0, Nu.b)(), Cu = (0, Ju.k)(), ku = (eu = yu.pathname).startsWith(Tu.l) ? null : eu.startsWith(Hu.docs) ? "docs" : eu.startsWith(Hu.leaderboard) ? "leaderboard" : "myGames";
      var eu;
      const Au = function(uu) {
        if (!uu.startsWith(Tu.l)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const Ru = (0, Xu.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== Ru && Ru.startsWith(Hu.myGames) ? -1 : Hu.myGames
        }
      }(yu.pathname);
      return (0, Ku.useEffect)((() => {
        Bu.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, Wu.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [bu && (0, Wu.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, Wu.jsx)(pu.b, {})
        }), (0, Wu.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, Wu.jsxs)("div", {
            className: "StudioTop",
            children: [(0, Wu.jsx)(ru.c, {
              show: !0,
              socialBarIsDocked: bu
            }), (0, Wu.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, Wu.jsx)(xu.b, {
                icon: Au.icon,
                onClick: () => {
                  Ru(Au.to)
                },
                children: uu(Au.title)
              }), (0, Wu.jsx)("div", {
                className: "StudioNavTabs",
                children: ju.map((yu => (0, Wu.jsxs)(xu.P, {
                  active: ku === yu.id,
                  href: Hu[yu.id],
                  onClick: () => {
                    Ru(Hu[yu.id])
                  },
                  children: [(0, Wu.jsx)(Su.c, {
                    name: yu.icon
                  }), !Cu && uu(yu.title)]
                }, yu.id)))
              })]
            })]
          }), (0, Wu.jsxs)("main", {
            className: "StudioBottom",
            children: [du && (0, Wu.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, Wu.jsx)(Vu.b, {})
            }), !du && (0, Wu.jsx)("div", {
              className: "StudioContent",
              children: (0, Wu.jsx)(Eu.g, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);