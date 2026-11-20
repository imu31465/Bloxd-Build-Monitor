export const id = 98;
export const ids = [98];
export const modules = {
  4549: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => xU
    });
    var tU = gU(1481),
      pU = gU(56),
      EU = gU(1181),
      PU = gU(1112),
      TU = gU(1099),
      qU = gU(1935),
      KU = gU(1475),
      cU = gU(1326),
      GU = gU(1094),
      jU = gU(21),
      uU = gU(1412),
      CU = gU(1049),
      hU = gU(2349),
      QU = gU(1497),
      eU = gU(1090);
    const WU = [{
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
      fU = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function xU() {
      const {
        t: UU
      } = (0, EU.B)(), RU = (0, KU.useNavigatePreserveSearch)(), gU = (0, tU.s)(), {
        isUserContextUpdating: xU
      } = (0, PU.e)(), mU = (0, qU.e)(), IU = (0, TU.k)(), JU = (wU = gU.pathname).startsWith(QU.p) ? null : wU.startsWith(fU.docs) ? "docs" : wU.startsWith(fU.leaderboard) ? "leaderboard" : "myGames";
      var wU;
      const nU = function(UU) {
        if (!UU.startsWith(QU.p)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const RU = (0, KU.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== RU && RU.startsWith(fU.myGames) ? -1 : fU.myGames
        }
      }(gU.pathname);
      return (0, pU.useEffect)((() => {
        jU.b.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, eU.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [mU && (0, eU.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, eU.jsx)(hU.e, {})
        }), (0, eU.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, eU.jsxs)("div", {
            className: "StudioTop",
            children: [(0, eU.jsx)(GU.d, {
              show: !0,
              socialBarIsDocked: mU
            }), (0, eU.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, eU.jsx)(uU.d, {
                icon: nU.icon,
                onClick: () => {
                  RU(nU.to)
                },
                children: UU(nU.title)
              }), (0, eU.jsx)("div", {
                className: "StudioNavTabs",
                children: WU.map((gU => (0, eU.jsxs)(uU.M, {
                  active: JU === gU.id,
                  href: fU[gU.id],
                  onClick: () => {
                    RU(fU[gU.id])
                  },
                  children: [(0, eU.jsx)(CU.c, {
                    name: gU.icon
                  }), !IU && UU(gU.title)]
                }, gU.id)))
              })]
            })]
          }), (0, eU.jsxs)("main", {
            className: "StudioBottom",
            children: [xU && (0, eU.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, eU.jsx)(cU.d, {})
            }), !xU && (0, eU.jsx)("div", {
              className: "StudioContent",
              children: (0, eU.jsx)(tU.f, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);