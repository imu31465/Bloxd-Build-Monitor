export const id = 102;
export const ids = [102];
export const modules = {
  4915: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => EG
    });
    var wG = ZG(1457),
      SG = ZG(51),
      LG = ZG(1151),
      yG = ZG(1092),
      kG = ZG(1081),
      UG = ZG(2062),
      YG = ZG(1444),
      VG = ZG(1302),
      pG = ZG(1076),
      fG = ZG(17),
      QG = ZG(1393),
      KG = ZG(1016),
      hG = ZG(2546),
      dG = ZG(1481),
      JG = ZG(1067);
    const rG = [{
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
      zG = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function EG() {
      const {
        t: GG
      } = (0, LG.w)(), bG = (0, YG.useNavigatePreserveSearch)(), ZG = (0, wG.n)(), {
        isUserContextUpdating: EG
      } = (0, yG.e)(), oG = (0, UG.e)(), XG = (0, kG.g)(), uG = (iG = ZG.pathname).startsWith(dG.q) ? null : iG.startsWith(zG.docs) ? "docs" : iG.startsWith(zG.leaderboard) ? "leaderboard" : "myGames";
      var iG;
      const CG = function(GG) {
        if (!GG.startsWith(dG.q)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const bG = (0, YG.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== bG && bG.startsWith(zG.myGames) ? -1 : zG.myGames
        }
      }(ZG.pathname);
      return (0, SG.useEffect)((() => {
        fG.e.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, JG.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [oG && (0, JG.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, JG.jsx)(hG.d, {})
        }), (0, JG.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, JG.jsxs)("div", {
            className: "StudioTop",
            children: [(0, JG.jsx)(pG.b, {
              show: !0,
              socialBarIsDocked: oG
            }), (0, JG.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, JG.jsx)(QG.b, {
                icon: CG.icon,
                onClick: () => {
                  bG(CG.to)
                },
                children: GG(CG.title)
              }), (0, JG.jsx)("div", {
                className: "StudioNavTabs",
                children: rG.map((ZG => (0, JG.jsxs)(QG.K, {
                  active: uG === ZG.id,
                  href: zG[ZG.id],
                  onClick: () => {
                    bG(zG[ZG.id])
                  },
                  children: [(0, JG.jsx)(KG.c, {
                    name: ZG.icon
                  }), !XG && GG(ZG.title)]
                }, ZG.id)))
              })]
            })]
          }), (0, JG.jsxs)("main", {
            className: "StudioBottom",
            children: [EG && (0, JG.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, JG.jsx)(VG.b, {})
            }), !EG && (0, JG.jsx)("div", {
              className: "StudioContent",
              children: (0, JG.jsx)(wG.e, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);