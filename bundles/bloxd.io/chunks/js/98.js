export const id = 98;
export const ids = [98];
export const modules = {
  4652: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => XD
    });
    var ID = cD(1517),
      pD = cD(53),
      iD = cD(1192),
      fD = cD(1120),
      bD = cD(1108),
      QD = cD(2043),
      wD = cD(1508),
      SD = cD(1328),
      BD = cD(1102),
      yD = cD(16),
      MD = cD(1442),
      tD = cD(1064),
      ZD = cD(2447),
      oD = cD(1537),
      vD = cD(1093);
    const ND = [{
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
      gD = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function XD() {
      const {
        t: DD
      } = (0, iD.F)(), CD = (0, wD.useNavigatePreserveSearch)(), cD = (0, ID.w)(), {
        isUserContextUpdating: XD
      } = (0, fD.c)(), mD = (0, QD.e)(), nD = (0, bD.o)(), OD = (PD = cD.pathname).startsWith(oD.r) ? null : PD.startsWith(gD.docs) ? "docs" : PD.startsWith(gD.leaderboard) ? "leaderboard" : "myGames";
      var PD;
      const HD = function(DD) {
        if (!DD.startsWith(oD.r)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const CD = (0, wD.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== CD && CD.startsWith(gD.myGames) ? -1 : gD.myGames
        }
      }(cD.pathname);
      return (0, pD.useEffect)((() => {
        yD.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, vD.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [mD && (0, vD.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, vD.jsx)(ZD.e, {})
        }), (0, vD.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, vD.jsxs)("div", {
            className: "StudioTop",
            children: [(0, vD.jsx)(BD.b, {
              show: !0,
              socialBarIsDocked: mD
            }), (0, vD.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, vD.jsx)(MD.e, {
                icon: HD.icon,
                onClick: () => {
                  CD(HD.to)
                },
                children: DD(HD.title)
              }), (0, vD.jsx)("div", {
                className: "StudioNavTabs",
                children: ND.map((cD => (0, vD.jsxs)(MD.P, {
                  active: OD === cD.id,
                  href: gD[cD.id],
                  onClick: () => {
                    CD(gD[cD.id])
                  },
                  children: [(0, vD.jsx)(tD.c, {
                    name: cD.icon
                  }), !nD && DD(cD.title)]
                }, cD.id)))
              })]
            })]
          }), (0, vD.jsxs)("main", {
            className: "StudioBottom",
            children: [XD && (0, vD.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, vD.jsx)(SD.e, {})
            }), !XD && (0, vD.jsx)("div", {
              className: "StudioContent",
              children: (0, vD.jsx)(ID.f, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);