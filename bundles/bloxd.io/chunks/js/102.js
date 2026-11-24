export const id = 102;
export const ids = [102];
export const modules = {
  5047: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => dB
    });
    var TB = ZB(1591),
      JB = ZB(63),
      oB = ZB(1248),
      GB = ZB(1179),
      vB = ZB(1165),
      kB = ZB(2168),
      cB = ZB(1579),
      nB = ZB(1397),
      hB = ZB(1161),
      zB = ZB(20),
      FB = ZB(1516),
      NB = ZB(1102),
      gB = ZB(2711),
      qB = ZB(1605),
      yB = ZB(1153);
    const UB = [{
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

    function dB() {
      const {
        t: BB
      } = (0, oB.G)(), IB = (0, cB.useNavigatePreserveSearch)(), ZB = (0, TB.r)(), {
        isUserContextUpdating: dB
      } = (0, GB.d)(), CB = (0, kB.c)(), QB = (0, vB.j)(), sB = (wB = ZB.pathname).startsWith(qB.l) ? null : wB.startsWith(WB.docs) ? "docs" : wB.startsWith(WB.leaderboard) ? "leaderboard" : "myGames";
      var wB;
      const OB = function(BB) {
        if (!BB.startsWith(qB.l)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const IB = (0, cB.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== IB && IB.startsWith(WB.myGames) ? -1 : WB.myGames
        }
      }(ZB.pathname);
      return (0, JB.useEffect)((() => {
        zB.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, yB.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [CB && (0, yB.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, yB.jsx)(gB.d, {})
        }), (0, yB.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, yB.jsxs)("div", {
            className: "StudioTop",
            children: [(0, yB.jsx)(hB.e, {
              show: !0,
              socialBarIsDocked: CB
            }), (0, yB.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, yB.jsx)(FB.c, {
                icon: OB.icon,
                onClick: () => {
                  IB(OB.to)
                },
                children: BB(OB.title)
              }), (0, yB.jsx)("div", {
                className: "StudioNavTabs",
                children: UB.map((ZB => (0, yB.jsxs)(FB.V, {
                  active: sB === ZB.id,
                  href: WB[ZB.id],
                  onClick: () => {
                    IB(WB[ZB.id])
                  },
                  children: [(0, yB.jsx)(NB.d, {
                    name: ZB.icon
                  }), !QB && BB(ZB.title)]
                }, ZB.id)))
              })]
            })]
          }), (0, yB.jsxs)("main", {
            className: "StudioBottom",
            children: [dB && (0, yB.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, yB.jsx)(nB.d, {})
            }), !dB && (0, yB.jsx)("div", {
              className: "StudioContent",
              children: (0, yB.jsx)(TB.i, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);