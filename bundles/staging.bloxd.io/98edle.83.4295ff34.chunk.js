export const id = 83;
export const ids = [83];
export const modules = {
  3870: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => oW
    });
    var wW = MW(1345),
      CW = MW(75),
      zR = MW(1027),
      AW = MW(969),
      bR = MW(958),
      yR = MW(1662),
      NW = MW(1330),
      eW = MW(1157),
      BW = MW(951),
      tR = MW(27),
      TW = MW(1255),
      gR = MW(904),
      iR = MW(1994),
      YW = MW(1363),
      JW = MW(940);
    const PW = [{
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
      IW = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function oW() {
      const {
        t: WW
      } = (0, zR.C)(), RW = (0, NW.useNavigatePreserveSearch)(), MW = (0, wW.s)(), {
        isUserContextUpdating: oW
      } = (0, AW.c)(), lW = (0, yR.b)(), FW = (0, bR.f)(), fW = (QW = MW.pathname).startsWith(YW.q) ? null : QW.startsWith(IW.docs) ? "docs" : QW.startsWith(IW.leaderboard) ? "leaderboard" : "myGames";
      var QW;
      const rR = function(WW) {
        if (!WW.startsWith(YW.q)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const RW = (0, NW.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== RW && RW.startsWith(IW.myGames) ? -1 : IW.myGames
        }
      }(MW.pathname);
      return (0, CW.useEffect)((() => {
        tR.b.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, JW.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [lW && (0, JW.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, JW.jsx)(iR.d, {})
        }), (0, JW.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, JW.jsxs)("div", {
            className: "StudioTop",
            children: [(0, JW.jsx)(BW.e, {
              show: !0,
              socialBarIsDocked: lW
            }), (0, JW.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, JW.jsx)(TW.d, {
                icon: rR.icon,
                onClick: () => {
                  RW(rR.to)
                },
                children: WW(rR.title)
              }), (0, JW.jsx)("div", {
                className: "StudioNavTabs",
                children: PW.map((MW => (0, JW.jsxs)(TW.O, {
                  active: fW === MW.id,
                  href: IW[MW.id],
                  onClick: () => {
                    RW(IW[MW.id])
                  },
                  children: [(0, JW.jsx)(gR.e, {
                    name: MW.icon
                  }), !FW && WW(MW.title)]
                }, MW.id)))
              })]
            })]
          }), (0, JW.jsxs)("main", {
            className: "StudioBottom",
            children: [oW && (0, JW.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, JW.jsx)(eW.d, {})
            }), !oW && (0, JW.jsx)("div", {
              className: "StudioContent",
              children: (0, JW.jsx)(wW.f, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);