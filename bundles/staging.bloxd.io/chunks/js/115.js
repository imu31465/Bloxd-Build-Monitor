export const id = 115;
export const ids = [115];
export const modules = {
  5651: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => MW
    });
    var mW = OW(1616),
      EW = OW(62),
      NW = OW(1172),
      PW = OW(1107),
      LW = OW(1095),
      cW = OW(2192),
      wW = OW(1605),
      tW = OW(1383),
      ZW = OW(1091),
      xW = OW(25),
      lW = OW(1532),
      AW = OW(1391),
      bW = OW(3591),
      jW = OW(1638),
      UW = OW(1283);
    const kW = [{
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
      sW = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function MW() {
      const {
        t: WW
      } = (0, NW.B)(), iW = (0, wW.useNavigatePreserveSearch)(), OW = (0, mW.u)(), {
        isUserContextUpdating: MW
      } = (0, PW.e)(), KW = (0, cW.e)(), SW = (0, LW.h)(), YW = (yW = OW.pathname).startsWith(jW.z) ? null : yW.startsWith(sW.docs) ? "docs" : yW.startsWith(sW.leaderboard) ? "leaderboard" : "myGames";
      var yW;
      const TW = function(WW) {
        if (!WW.startsWith(jW.z)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const iW = (0, wW.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== iW && iW.startsWith(sW.myGames) ? -1 : sW.myGames
        }
      }(OW.pathname);
      return (0, EW.useEffect)((() => {
        xW.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, UW.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [KW && (0, UW.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, UW.jsx)(bW.b, {})
        }), (0, UW.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, UW.jsxs)("div", {
            className: "StudioTop",
            children: [(0, UW.jsx)(ZW.d, {
              show: !0,
              socialBarIsDocked: KW
            }), (0, UW.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, UW.jsx)(lW.b, {
                icon: TW.icon,
                onClick: () => {
                  iW(TW.to)
                },
                children: WW(TW.title)
              }), (0, UW.jsx)("div", {
                className: "StudioNavTabs",
                children: kW.map((OW => (0, UW.jsxs)(lW.Z, {
                  active: YW === OW.id,
                  href: sW[OW.id],
                  onClick: () => {
                    iW(sW[OW.id])
                  },
                  children: [(0, UW.jsx)(AW.c, {
                    name: OW.icon
                  }), !SW && WW(OW.title)]
                }, OW.id)))
              })]
            })]
          }), (0, UW.jsxs)("main", {
            className: "StudioBottom",
            children: [MW && (0, UW.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, UW.jsx)(tW.d, {})
            }), !MW && (0, UW.jsx)("div", {
              className: "StudioContent",
              children: (0, UW.jsx)(mW.g, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);