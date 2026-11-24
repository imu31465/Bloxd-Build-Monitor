export const id = 102;
export const ids = [102];
export const modules = {
  4984: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => gB
    });
    var QB = zB(1547),
      nB = zB(62),
      dB = zB(1240),
      IB = zB(1169),
      NB = zB(1162),
      uB = zB(2135),
      UB = zB(1543),
      aB = zB(1369),
      pB = zB(1160),
      rB = zB(28),
      sB = zB(1478),
      JB = zB(1108),
      mB = zB(2682),
      yB = zB(1562),
      kB = zB(1148);
    const GB = [{
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
      LB = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function gB() {
      const {
        t: BB
      } = (0, dB.D)(), jB = (0, UB.useNavigatePreserveSearch)(), zB = (0, QB.n)(), {
        isUserContextUpdating: gB
      } = (0, IB.d)(), tB = (0, uB.e)(), SB = (0, NB.d)(), MB = (EB = zB.pathname).startsWith(yB.t) ? null : EB.startsWith(LB.docs) ? "docs" : EB.startsWith(LB.leaderboard) ? "leaderboard" : "myGames";
      var EB;
      const iB = function(BB) {
        if (!BB.startsWith(yB.t)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const jB = (0, UB.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== jB && jB.startsWith(LB.myGames) ? -1 : LB.myGames
        }
      }(zB.pathname);
      return (0, nB.useEffect)((() => {
        rB.c.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, kB.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [tB && (0, kB.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, kB.jsx)(mB.b, {})
        }), (0, kB.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, kB.jsxs)("div", {
            className: "StudioTop",
            children: [(0, kB.jsx)(pB.d, {
              show: !0,
              socialBarIsDocked: tB
            }), (0, kB.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, kB.jsx)(sB.c, {
                icon: iB.icon,
                onClick: () => {
                  jB(iB.to)
                },
                children: BB(iB.title)
              }), (0, kB.jsx)("div", {
                className: "StudioNavTabs",
                children: GB.map((zB => (0, kB.jsxs)(sB.M, {
                  active: MB === zB.id,
                  href: LB[zB.id],
                  onClick: () => {
                    jB(LB[zB.id])
                  },
                  children: [(0, kB.jsx)(JB.c, {
                    name: zB.icon
                  }), !SB && BB(zB.title)]
                }, zB.id)))
              })]
            })]
          }), (0, kB.jsxs)("main", {
            className: "StudioBottom",
            children: [gB && (0, kB.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, kB.jsx)(aB.e, {})
            }), !gB && (0, kB.jsx)("div", {
              className: "StudioContent",
              children: (0, kB.jsx)(QB.d, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);