export const id = 99;
export const ids = [99];
export const modules = {
  4727: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => pQ
    });
    var LQ = wQ(1515),
      qQ = wQ(53),
      oQ = wQ(1207),
      DQ = wQ(1140),
      kQ = wQ(1130),
      vQ = wQ(2034),
      mQ = wQ(1503),
      uQ = wQ(1348),
      HQ = wQ(1124),
      bQ = wQ(17),
      YQ = wQ(1451),
      xQ = wQ(1079),
      AQ = wQ(2469),
      tQ = wQ(1532),
      eQ = wQ(1107);
    const MQ = [{
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
      GQ = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function pQ() {
      const {
        t: QQ
      } = (0, oQ.y)(), FQ = (0, mQ.useNavigatePreserveSearch)(), wQ = (0, LQ.r)(), {
        isUserContextUpdating: pQ
      } = (0, DQ.e)(), cQ = (0, vQ.c)(), CQ = (0, kQ.i)(), SQ = (iQ = wQ.pathname).startsWith(tQ.t) ? null : iQ.startsWith(GQ.docs) ? "docs" : iQ.startsWith(GQ.leaderboard) ? "leaderboard" : "myGames";
      var iQ;
      const WQ = function(QQ) {
        if (!QQ.startsWith(tQ.t)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const FQ = (0, mQ.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== FQ && FQ.startsWith(GQ.myGames) ? -1 : GQ.myGames
        }
      }(wQ.pathname);
      return (0, qQ.useEffect)((() => {
        bQ.c.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, eQ.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [cQ && (0, eQ.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, eQ.jsx)(AQ.e, {})
        }), (0, eQ.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, eQ.jsxs)("div", {
            className: "StudioTop",
            children: [(0, eQ.jsx)(HQ.b, {
              show: !0,
              socialBarIsDocked: cQ
            }), (0, eQ.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, eQ.jsx)(YQ.b, {
                icon: WQ.icon,
                onClick: () => {
                  FQ(WQ.to)
                },
                children: QQ(WQ.title)
              }), (0, eQ.jsx)("div", {
                className: "StudioNavTabs",
                children: MQ.map((wQ => (0, eQ.jsxs)(YQ.L, {
                  active: SQ === wQ.id,
                  href: GQ[wQ.id],
                  onClick: () => {
                    FQ(GQ[wQ.id])
                  },
                  children: [(0, eQ.jsx)(xQ.c, {
                    name: wQ.icon
                  }), !CQ && QQ(wQ.title)]
                }, wQ.id)))
              })]
            })]
          }), (0, eQ.jsxs)("main", {
            className: "StudioBottom",
            children: [pQ && (0, eQ.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, eQ.jsx)(uQ.c, {})
            }), !pQ && (0, eQ.jsx)("div", {
              className: "StudioContent",
              children: (0, eQ.jsx)(LQ.i, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);