export const id = 99;
export const ids = [99];
export const modules = {
  4845: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => DT
    });
    var lT = cT(1535),
      MT = cT(71),
      KT = cT(1195),
      OT = cT(1130),
      yT = cT(1117),
      fT = cT(2120),
      xT = cT(1530),
      IT = cT(1348),
      AT = cT(1115),
      CT = cT(31),
      jT = cT(1470),
      vT = cT(1061),
      tT = cT(2576),
      hT = cT(1554),
      NT = cT(1099);
    const QT = [{
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
      ST = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function DT() {
      const {
        t: TT
      } = (0, KT.B)(), kT = (0, xT.useNavigatePreserveSearch)(), cT = (0, lT.s)(), {
        isUserContextUpdating: DT
      } = (0, OT.b)(), aT = (0, fT.e)(), FT = (0, yT.i)(), rT = (PT = cT.pathname).startsWith(hT.r) ? null : PT.startsWith(ST.docs) ? "docs" : PT.startsWith(ST.leaderboard) ? "leaderboard" : "myGames";
      var PT;
      const wT = function(TT) {
        if (!TT.startsWith(hT.r)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const kT = (0, xT.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== kT && kT.startsWith(ST.myGames) ? -1 : ST.myGames
        }
      }(cT.pathname);
      return (0, MT.useEffect)((() => {
        CT.e.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, NT.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [aT && (0, NT.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, NT.jsx)(tT.b, {})
        }), (0, NT.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, NT.jsxs)("div", {
            className: "StudioTop",
            children: [(0, NT.jsx)(AT.d, {
              show: !0,
              socialBarIsDocked: aT
            }), (0, NT.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, NT.jsx)(jT.b, {
                icon: wT.icon,
                onClick: () => {
                  kT(wT.to)
                },
                children: TT(wT.title)
              }), (0, NT.jsx)("div", {
                className: "StudioNavTabs",
                children: QT.map((cT => (0, NT.jsxs)(jT.P, {
                  active: rT === cT.id,
                  href: ST[cT.id],
                  onClick: () => {
                    kT(ST[cT.id])
                  },
                  children: [(0, NT.jsx)(vT.e, {
                    name: cT.icon
                  }), !FT && TT(cT.title)]
                }, cT.id)))
              })]
            })]
          }), (0, NT.jsxs)("main", {
            className: "StudioBottom",
            children: [DT && (0, NT.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, NT.jsx)(IT.d, {})
            }), !DT && (0, NT.jsx)("div", {
              className: "StudioContent",
              children: (0, NT.jsx)(lT.i, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);