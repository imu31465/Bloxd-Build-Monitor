export const id = 99;
export const ids = [99];
export const modules = {
  4382: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => hT
    });
    var iT = IT(1484),
      zT = IT(46),
      kT = IT(1171),
      WT = IT(1110),
      XT = IT(1102),
      BT = IT(1893),
      FT = IT(1468),
      ST = IT(1310),
      DT = IT(1099),
      LT = IT(12),
      xT = IT(1408),
      cT = IT(1055),
      KT = IT(2281),
      MT = IT(1499),
      rT = IT(1083);
    const AT = [{
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
      gT = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function hT() {
      const {
        t: TT
      } = (0, kT.t)(), oT = (0, FT.useNavigatePreserveSearch)(), IT = (0, iT.t)(), {
        isUserContextUpdating: hT
      } = (0, WT.b)(), wT = (0, BT.b)(), mT = (0, XT.n)(), eT = (RT = IT.pathname).startsWith(MT.m) ? null : RT.startsWith(gT.docs) ? "docs" : RT.startsWith(gT.leaderboard) ? "leaderboard" : "myGames";
      var RT;
      const uT = function(TT) {
        if (!TT.startsWith(MT.m)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const oT = (0, FT.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== oT && oT.startsWith(gT.myGames) ? -1 : gT.myGames
        }
      }(IT.pathname);
      return (0, zT.useEffect)((() => {
        LT.c.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, rT.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [wT && (0, rT.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, rT.jsx)(KT.b, {})
        }), (0, rT.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, rT.jsxs)("div", {
            className: "StudioTop",
            children: [(0, rT.jsx)(DT.e, {
              show: !0,
              socialBarIsDocked: wT
            }), (0, rT.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, rT.jsx)(xT.c, {
                icon: uT.icon,
                onClick: () => {
                  oT(uT.to)
                },
                children: TT(uT.title)
              }), (0, rT.jsx)("div", {
                className: "StudioNavTabs",
                children: AT.map((IT => (0, rT.jsxs)(xT.J, {
                  active: eT === IT.id,
                  href: gT[IT.id],
                  onClick: () => {
                    oT(gT[IT.id])
                  },
                  children: [(0, rT.jsx)(cT.e, {
                    name: IT.icon
                  }), !mT && TT(IT.title)]
                }, IT.id)))
              })]
            })]
          }), (0, rT.jsxs)("main", {
            className: "StudioBottom",
            children: [hT && (0, rT.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, rT.jsx)(ST.d, {})
            }), !hT && (0, rT.jsx)("div", {
              className: "StudioContent",
              children: (0, rT.jsx)(iT.g, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);