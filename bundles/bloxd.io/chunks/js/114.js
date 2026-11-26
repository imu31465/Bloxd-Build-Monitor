export const id = 114;
export const ids = [114];
export const modules = {
  5391: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => tV
    });
    var JV = xV(1625),
      YV = xV(62),
      UV = xV(1220),
      yV = xV(1168),
      pV = xV(1157),
      QV = xV(2211),
      nV = xV(1612),
      wV = xV(1408),
      ZV = xV(1153),
      vV = xV(27),
      rV = xV(1551),
      kV = xV(1414),
      bV = xV(2875),
      EV = xV(1639),
      BV = xV(1321);
    const jV = [{
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
      qV = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function tV() {
      const {
        t: VV
      } = (0, UV.A)(), eV = (0, nV.useNavigatePreserveSearch)(), xV = (0, JV.r)(), {
        isUserContextUpdating: tV
      } = (0, yV.d)(), FV = (0, QV.d)(), TV = (0, pV.j)(), PV = (AV = xV.pathname).startsWith(EV.o) ? null : AV.startsWith(qV.docs) ? "docs" : AV.startsWith(qV.leaderboard) ? "leaderboard" : "myGames";
      var AV;
      const NV = function(VV) {
        if (!VV.startsWith(EV.o)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const eV = (0, nV.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== eV && eV.startsWith(qV.myGames) ? -1 : qV.myGames
        }
      }(xV.pathname);
      return (0, YV.useEffect)((() => {
        vV.b.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, BV.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [FV && (0, BV.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, BV.jsx)(bV.d, {})
        }), (0, BV.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, BV.jsxs)("div", {
            className: "StudioTop",
            children: [(0, BV.jsx)(ZV.b, {
              show: !0,
              socialBarIsDocked: FV
            }), (0, BV.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, BV.jsx)(rV.b, {
                icon: NV.icon,
                onClick: () => {
                  eV(NV.to)
                },
                children: VV(NV.title)
              }), (0, BV.jsx)("div", {
                className: "StudioNavTabs",
                children: jV.map((xV => (0, BV.jsxs)(rV.M, {
                  active: PV === xV.id,
                  href: qV[xV.id],
                  onClick: () => {
                    eV(qV[xV.id])
                  },
                  children: [(0, BV.jsx)(kV.b, {
                    name: xV.icon
                  }), !TV && VV(xV.title)]
                }, xV.id)))
              })]
            })]
          }), (0, BV.jsxs)("main", {
            className: "StudioBottom",
            children: [tV && (0, BV.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, BV.jsx)(wV.d, {})
            }), !tV && (0, BV.jsx)("div", {
              className: "StudioContent",
              children: (0, BV.jsx)(JV.d, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);