export const id = 104;
export const ids = [104];
export const modules = {
  5244: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => GQ
    });
    var wQ = XQ(1581),
      qQ = XQ(61),
      TQ = XQ(1226),
      zQ = XQ(1162),
      sQ = XQ(1154),
      FQ = XQ(2156),
      PQ = XQ(1567),
      gQ = XQ(1391),
      JQ = XQ(1152),
      rQ = XQ(26),
      IQ = XQ(1507),
      jQ = XQ(1094),
      BQ = XQ(2732),
      yQ = XQ(1601),
      VQ = XQ(1145);
    const DQ = [{
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
      pQ = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function GQ() {
      const {
        t: QQ
      } = (0, TQ.C)(), WQ = (0, PQ.useNavigatePreserveSearch)(), XQ = (0, wQ.w)(), {
        isUserContextUpdating: GQ
      } = (0, zQ.c)(), UQ = (0, FQ.b)(), bQ = (0, sQ.i)(), vQ = (dQ = XQ.pathname).startsWith(yQ.q) ? null : dQ.startsWith(pQ.docs) ? "docs" : dQ.startsWith(pQ.leaderboard) ? "leaderboard" : "myGames";
      var dQ;
      const HQ = function(QQ) {
        if (!QQ.startsWith(yQ.q)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const WQ = (0, PQ.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== WQ && WQ.startsWith(pQ.myGames) ? -1 : pQ.myGames
        }
      }(XQ.pathname);
      return (0, qQ.useEffect)((() => {
        rQ.b.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, VQ.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [UQ && (0, VQ.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, VQ.jsx)(BQ.b, {})
        }), (0, VQ.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, VQ.jsxs)("div", {
            className: "StudioTop",
            children: [(0, VQ.jsx)(JQ.d, {
              show: !0,
              socialBarIsDocked: UQ
            }), (0, VQ.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, VQ.jsx)(IQ.e, {
                icon: HQ.icon,
                onClick: () => {
                  WQ(HQ.to)
                },
                children: QQ(HQ.title)
              }), (0, VQ.jsx)("div", {
                className: "StudioNavTabs",
                children: DQ.map((XQ => (0, VQ.jsxs)(IQ.T, {
                  active: vQ === XQ.id,
                  href: pQ[XQ.id],
                  onClick: () => {
                    WQ(pQ[XQ.id])
                  },
                  children: [(0, VQ.jsx)(jQ.d, {
                    name: XQ.icon
                  }), !bQ && QQ(XQ.title)]
                }, XQ.id)))
              })]
            })]
          }), (0, VQ.jsxs)("main", {
            className: "StudioBottom",
            children: [GQ && (0, VQ.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, VQ.jsx)(gQ.e, {})
            }), !GQ && (0, VQ.jsx)("div", {
              className: "StudioContent",
              children: (0, VQ.jsx)(wQ.f, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);