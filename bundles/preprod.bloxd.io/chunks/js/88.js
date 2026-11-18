export const id = 88;
export const ids = [88];
export const modules = {
  4100: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Ty
    });
    var Uy = Wy(1370),
      hy = Wy(55),
      fy = Wy(1042),
      Zy = Wy(980),
      cb = Wy(965),
      Py = Wy(1715),
      oy = Wy(1356),
      By = Wy(1194),
      Ky = Wy(958),
      ey = Wy(19),
      qb = Wy(1273),
      sy = Wy(910),
      Sy = Wy(2063),
      Ey = Wy(1383),
      ly = Wy(952);
    const mb = [{
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
      Cy = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function Ty() {
      const {
        t: yb
      } = (0, fy.D)(), bb = (0, oy.useNavigatePreserveSearch)(), Wy = (0, Uy.y)(), {
        isUserContextUpdating: Ty
      } = (0, Zy.c)(), Vy = (0, Py.d)(), Jy = (0, cb.f)(), gb = (Gy = Wy.pathname).startsWith(Ey.r) ? null : Gy.startsWith(Cy.docs) ? "docs" : Gy.startsWith(Cy.leaderboard) ? "leaderboard" : "myGames";
      var Gy;
      const Oy = function(yb) {
        if (!yb.startsWith(Ey.r)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const bb = (0, oy.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== bb && bb.startsWith(Cy.myGames) ? -1 : Cy.myGames
        }
      }(Wy.pathname);
      return (0, hy.useEffect)((() => {
        ey.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, ly.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [Vy && (0, ly.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, ly.jsx)(Sy.e, {})
        }), (0, ly.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, ly.jsxs)("div", {
            className: "StudioTop",
            children: [(0, ly.jsx)(Ky.d, {
              show: !0,
              socialBarIsDocked: Vy
            }), (0, ly.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, ly.jsx)(qb.d, {
                icon: Oy.icon,
                onClick: () => {
                  bb(Oy.to)
                },
                children: yb(Oy.title)
              }), (0, ly.jsx)("div", {
                className: "StudioNavTabs",
                children: mb.map((Wy => (0, ly.jsxs)(qb.M, {
                  active: gb === Wy.id,
                  href: Cy[Wy.id],
                  onClick: () => {
                    bb(Cy[Wy.id])
                  },
                  children: [(0, ly.jsx)(sy.e, {
                    name: Wy.icon
                  }), !Jy && yb(Wy.title)]
                }, Wy.id)))
              })]
            })]
          }), (0, ly.jsxs)("main", {
            className: "StudioBottom",
            children: [Ty && (0, ly.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, ly.jsx)(By.e, {})
            }), !Ty && (0, ly.jsx)("div", {
              className: "StudioContent",
              children: (0, ly.jsx)(Uy.i, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);