export const id = 115;
export const ids = [115];
export const modules = {
  5769: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => AR
    });
    var yR = GR(1677),
      tR = GR(66),
      uR = GR(1270),
      ZR = GR(1196),
      qR = GR(1179),
      iR = GR(2292),
      fR = GR(1663),
      VR = GR(1465),
      KR = GR(1172),
      wR = GR(25),
      rR = GR(1590),
      eR = GR(1468),
      aR = GR(3696),
      LR = GR(1695),
      nR = GR(1378);
    const UR = [{
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
      WR = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function AR() {
      const {
        t: RR
      } = (0, uR.A)(), JR = (0, fR.useNavigatePreserveSearch)(), GR = (0, yR.r)(), {
        isUserContextUpdating: AR
      } = (0, ZR.d)(), CR = (0, iR.b)(), XR = (0, qR.h)(), MR = (BR = GR.pathname).startsWith(LR.t) ? null : BR.startsWith(WR.docs) ? "docs" : BR.startsWith(WR.leaderboard) ? "leaderboard" : "myGames";
      var BR;
      const lR = function(RR) {
        if (!RR.startsWith(LR.t)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const JR = (0, fR.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== JR && JR.startsWith(WR.myGames) ? -1 : WR.myGames
        }
      }(GR.pathname);
      return (0, tR.useEffect)((() => {
        wR.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, nR.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [CR && (0, nR.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, nR.jsx)(aR.e, {})
        }), (0, nR.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, nR.jsxs)("div", {
            className: "StudioTop",
            children: [(0, nR.jsx)(KR.b, {
              show: !0,
              socialBarIsDocked: CR
            }), (0, nR.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, nR.jsx)(rR.d, {
                icon: lR.icon,
                onClick: () => {
                  JR(lR.to)
                },
                children: RR(lR.title)
              }), (0, nR.jsx)("div", {
                className: "StudioNavTabs",
                children: UR.map((GR => (0, nR.jsxs)(rR.U, {
                  active: MR === GR.id,
                  href: WR[GR.id],
                  onClick: () => {
                    JR(WR[GR.id])
                  },
                  children: [(0, nR.jsx)(eR.d, {
                    name: GR.icon
                  }), !XR && RR(GR.title)]
                }, GR.id)))
              })]
            })]
          }), (0, nR.jsxs)("main", {
            className: "StudioBottom",
            children: [AR && (0, nR.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, nR.jsx)(VR.d, {})
            }), !AR && (0, nR.jsx)("div", {
              className: "StudioContent",
              children: (0, nR.jsx)(yR.e, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);