export const id = 100;
export const ids = [100];
export const modules = {
  4905: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => OD
    });
    var pD = wD(1523),
      sD = wD(58),
      KD = wD(1200),
      rD = wD(1127),
      LD = wD(1116),
      cD = wD(2068),
      gD = wD(1511),
      RD = wD(1346),
      AD = wD(1110),
      UD = wD(20),
      fD = wD(1447),
      ID = wD(1057),
      BD = wD(2574),
      GD = wD(1540),
      hD = wD(1096);
    const nD = [{
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
      MD = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function OD() {
      const {
        t: DD
      } = (0, KD.E)(), zD = (0, gD.useNavigatePreserveSearch)(), wD = (0, pD.s)(), {
        isUserContextUpdating: OD
      } = (0, rD.c)(), JD = (0, cD.d)(), ED = (0, LD.g)(), QD = (XD = wD.pathname).startsWith(GD.m) ? null : XD.startsWith(MD.docs) ? "docs" : XD.startsWith(MD.leaderboard) ? "leaderboard" : "myGames";
      var XD;
      const VD = function(DD) {
        if (!DD.startsWith(GD.m)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const zD = (0, gD.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== zD && zD.startsWith(MD.myGames) ? -1 : MD.myGames
        }
      }(wD.pathname);
      return (0, sD.useEffect)((() => {
        UD.e.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, hD.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [JD && (0, hD.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, hD.jsx)(BD.c, {})
        }), (0, hD.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, hD.jsxs)("div", {
            className: "StudioTop",
            children: [(0, hD.jsx)(AD.b, {
              show: !0,
              socialBarIsDocked: JD
            }), (0, hD.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, hD.jsx)(fD.d, {
                icon: VD.icon,
                onClick: () => {
                  zD(VD.to)
                },
                children: DD(VD.title)
              }), (0, hD.jsx)("div", {
                className: "StudioNavTabs",
                children: nD.map((wD => (0, hD.jsxs)(fD.Y, {
                  active: QD === wD.id,
                  href: MD[wD.id],
                  onClick: () => {
                    zD(MD[wD.id])
                  },
                  children: [(0, hD.jsx)(ID.e, {
                    name: wD.icon
                  }), !ED && DD(wD.title)]
                }, wD.id)))
              })]
            })]
          }), (0, hD.jsxs)("main", {
            className: "StudioBottom",
            children: [OD && (0, hD.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, hD.jsx)(RD.e, {})
            }), !OD && (0, hD.jsx)("div", {
              className: "StudioContent",
              children: (0, hD.jsx)(pD.e, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);