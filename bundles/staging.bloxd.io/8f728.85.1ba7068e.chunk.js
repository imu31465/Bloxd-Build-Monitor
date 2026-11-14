export const id = 85;
export const ids = [85];
export const modules = {
  3941: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => pc
    });
    var Vc = nc(1344),
      Ic = nc(73),
      rB = nc(1051),
      uc = nc(985),
      sc = nc(974),
      Mc = nc(1694),
      Pc = nc(1330),
      qB = nc(1188),
      Oc = nc(967),
      Tc = nc(27),
      fc = nc(1255),
      mB = nc(926),
      ec = nc(2001),
      tB = nc(1362),
      Sc = nc(957);
    const yB = [{
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
      zB = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function pc() {
      const {
        t: cB
      } = (0, rB.x)(), Bc = (0, Pc.useNavigatePreserveSearch)(), nc = (0, Vc.s)(), {
        isUserContextUpdating: pc
      } = (0, uc.c)(), hc = (0, Mc.d)(), aB = (0, sc.j)(), lc = (Yc = nc.pathname).startsWith(tB.q) ? null : Yc.startsWith(zB.docs) ? "docs" : Yc.startsWith(zB.leaderboard) ? "leaderboard" : "myGames";
      var Yc;
      const Lc = function(cB) {
        if (!cB.startsWith(tB.q)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const Bc = (0, Pc.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== Bc && Bc.startsWith(zB.myGames) ? -1 : zB.myGames
        }
      }(nc.pathname);
      return (0, Ic.useEffect)((() => {
        Tc.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, Sc.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [hc && (0, Sc.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, Sc.jsx)(ec.b, {})
        }), (0, Sc.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, Sc.jsxs)("div", {
            className: "StudioTop",
            children: [(0, Sc.jsx)(Oc.b, {
              show: !0,
              socialBarIsDocked: hc
            }), (0, Sc.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, Sc.jsx)(fc.c, {
                icon: Lc.icon,
                onClick: () => {
                  Bc(Lc.to)
                },
                children: cB(Lc.title)
              }), (0, Sc.jsx)("div", {
                className: "StudioNavTabs",
                children: yB.map((nc => (0, Sc.jsxs)(fc.Q, {
                  active: lc === nc.id,
                  href: zB[nc.id],
                  onClick: () => {
                    Bc(zB[nc.id])
                  },
                  children: [(0, Sc.jsx)(mB.e, {
                    name: nc.icon
                  }), !aB && cB(nc.title)]
                }, nc.id)))
              })]
            })]
          }), (0, Sc.jsxs)("main", {
            className: "StudioBottom",
            children: [pc && (0, Sc.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, Sc.jsx)(qB.e, {})
            }), !pc && (0, Sc.jsx)("div", {
              className: "StudioContent",
              children: (0, Sc.jsx)(Vc.h, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);