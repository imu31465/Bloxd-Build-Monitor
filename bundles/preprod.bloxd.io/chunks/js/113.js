export const id = 113;
export const ids = [113];
export const modules = {
  5403: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => BU
    });
    var cU = zU(1577),
      yU = zU(61),
      QU = zU(1193),
      AU = zU(1129),
      FU = zU(1115),
      oU = zU(2147),
      DU = zU(1568),
      EU = zU(1384),
      YU = zU(1110),
      NU = zU(27),
      IU = zU(1494),
      pU = zU(1390),
      aU = zU(2820),
      tU = zU(1592),
      gU = zU(1305);
    const kU = [{
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
      GU = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function BU() {
      const {
        t: UU
      } = (0, QU.I)(), XU = (0, DU.useNavigatePreserveSearch)(), zU = (0, cU.w)(), {
        isUserContextUpdating: BU
      } = (0, AU.d)(), ZU = (0, oU.d)(), RU = (0, FU.h)(), PU = (WU = zU.pathname).startsWith(tU.v) ? null : WU.startsWith(GU.docs) ? "docs" : WU.startsWith(GU.leaderboard) ? "leaderboard" : "myGames";
      var WU;
      const dU = function(UU) {
        if (!UU.startsWith(tU.v)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const XU = (0, DU.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== XU && XU.startsWith(GU.myGames) ? -1 : GU.myGames
        }
      }(zU.pathname);
      return (0, yU.useEffect)((() => {
        NU.e.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, gU.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [ZU && (0, gU.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, gU.jsx)(aU.e, {})
        }), (0, gU.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, gU.jsxs)("div", {
            className: "StudioTop",
            children: [(0, gU.jsx)(YU.c, {
              show: !0,
              socialBarIsDocked: ZU
            }), (0, gU.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, gU.jsx)(IU.e, {
                icon: dU.icon,
                onClick: () => {
                  XU(dU.to)
                },
                children: UU(dU.title)
              }), (0, gU.jsx)("div", {
                className: "StudioNavTabs",
                children: kU.map((zU => (0, gU.jsxs)(IU.O, {
                  active: PU === zU.id,
                  href: GU[zU.id],
                  onClick: () => {
                    XU(GU[zU.id])
                  },
                  children: [(0, gU.jsx)(pU.d, {
                    name: zU.icon
                  }), !RU && UU(zU.title)]
                }, zU.id)))
              })]
            })]
          }), (0, gU.jsxs)("main", {
            className: "StudioBottom",
            children: [BU && (0, gU.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, gU.jsx)(EU.b, {})
            }), !BU && (0, gU.jsx)("div", {
              className: "StudioContent",
              children: (0, gU.jsx)(cU.i, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);