export const id = 100;
export const ids = [100];
export const modules = {
  5046: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => QS
    });
    var tS = gS(1622),
      bS = gS(64),
      XS = gS(1281),
      xS = gS(1211),
      NS = gS(1198),
      qS = gS(2196),
      uS = gS(1608),
      IS = gS(1419),
      fS = gS(1192),
      kS = gS(24),
      aS = gS(1528),
      KS = gS(1127),
      jS = gS(2706),
      GS = gS(1641),
      CS = gS(1181);
    const nS = [{
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
      PS = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function QS() {
      const {
        t: SS
      } = (0, XS.F)(), HS = (0, uS.useNavigatePreserveSearch)(), gS = (0, tS.t)(), {
        isUserContextUpdating: QS
      } = (0, xS.b)(), DS = (0, qS.b)(), wS = (0, NS.l)(), hS = (ZS = gS.pathname).startsWith(GS.r) ? null : ZS.startsWith(PS.docs) ? "docs" : ZS.startsWith(PS.leaderboard) ? "leaderboard" : "myGames";
      var ZS;
      const JS = function(SS) {
        if (!SS.startsWith(GS.r)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const HS = (0, uS.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== HS && HS.startsWith(PS.myGames) ? -1 : PS.myGames
        }
      }(gS.pathname);
      return (0, bS.useEffect)((() => {
        kS.b.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, CS.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [DS && (0, CS.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, CS.jsx)(jS.c, {})
        }), (0, CS.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, CS.jsxs)("div", {
            className: "StudioTop",
            children: [(0, CS.jsx)(fS.e, {
              show: !0,
              socialBarIsDocked: DS
            }), (0, CS.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, CS.jsx)(aS.d, {
                icon: JS.icon,
                onClick: () => {
                  HS(JS.to)
                },
                children: SS(JS.title)
              }), (0, CS.jsx)("div", {
                className: "StudioNavTabs",
                children: nS.map((gS => (0, CS.jsxs)(aS.P, {
                  active: hS === gS.id,
                  href: PS[gS.id],
                  onClick: () => {
                    HS(PS[gS.id])
                  },
                  children: [(0, CS.jsx)(KS.d, {
                    name: gS.icon
                  }), !wS && SS(gS.title)]
                }, gS.id)))
              })]
            })]
          }), (0, CS.jsxs)("main", {
            className: "StudioBottom",
            children: [QS && (0, CS.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, CS.jsx)(IS.c, {})
            }), !QS && (0, CS.jsx)("div", {
              className: "StudioContent",
              children: (0, CS.jsx)(tS.f, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);