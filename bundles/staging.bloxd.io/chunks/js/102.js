export const id = 102;
export const ids = [102];
export const modules = {
  5056: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => eu
    });
    var su = ju(1580),
      Uu = ju(58),
      Zu = ju(1244),
      Xu = ju(1178),
      lu = ju(1170),
      qu = ju(2146),
      fu = ju(1570),
      Cu = ju(1393),
      bu = ju(1165),
      cu = ju(22),
      Nu = ju(1506),
      Ou = ju(1116),
      Yu = ju(2698),
      hu = ju(1595),
      Du = ju(1154);
    const gu = [{
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
      Mu = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function eu() {
      const {
        t: uu
      } = (0, Zu.A)(), Eu = (0, fu.useNavigatePreserveSearch)(), ju = (0, su.r)(), {
        isUserContextUpdating: eu
      } = (0, Xu.c)(), Gu = (0, qu.e)(), pu = (0, lu.l)(), wu = (Ju = ju.pathname).startsWith(hu.m) ? null : Ju.startsWith(Mu.docs) ? "docs" : Ju.startsWith(Mu.leaderboard) ? "leaderboard" : "myGames";
      var Ju;
      const du = function(uu) {
        if (!uu.startsWith(hu.m)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const Eu = (0, fu.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== Eu && Eu.startsWith(Mu.myGames) ? -1 : Mu.myGames
        }
      }(ju.pathname);
      return (0, Uu.useEffect)((() => {
        cu.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, Du.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [Gu && (0, Du.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, Du.jsx)(Yu.e, {})
        }), (0, Du.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, Du.jsxs)("div", {
            className: "StudioTop",
            children: [(0, Du.jsx)(bu.e, {
              show: !0,
              socialBarIsDocked: Gu
            }), (0, Du.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, Du.jsx)(Nu.d, {
                icon: du.icon,
                onClick: () => {
                  Eu(du.to)
                },
                children: uu(du.title)
              }), (0, Du.jsx)("div", {
                className: "StudioNavTabs",
                children: gu.map((ju => (0, Du.jsxs)(Nu.$, {
                  active: wu === ju.id,
                  href: Mu[ju.id],
                  onClick: () => {
                    Eu(Mu[ju.id])
                  },
                  children: [(0, Du.jsx)(Ou.e, {
                    name: ju.icon
                  }), !pu && uu(ju.title)]
                }, ju.id)))
              })]
            })]
          }), (0, Du.jsxs)("main", {
            className: "StudioBottom",
            children: [eu && (0, Du.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, Du.jsx)(Cu.b, {})
            }), !eu && (0, Du.jsx)("div", {
              className: "StudioContent",
              children: (0, Du.jsx)(su.g, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);