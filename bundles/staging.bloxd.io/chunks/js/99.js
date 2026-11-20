export const id = 99;
export const ids = [99];
export const modules = {
  4641: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => mv
    });
    var hv = Pv(1505),
      Sv = Pv(52),
      ev = Pv(1175),
      gv = Pv(1108),
      pv = Pv(1095),
      dv = Pv(2015),
      Nv = Pv(1492),
      lv = Pv(1327),
      Tv = Pv(1089),
      Wv = Pv(22),
      wv = Pv(1442),
      av = Pv(1042),
      sv = Pv(2413),
      Cv = Pv(1529),
      iv = Pv(1082);
    const cv = [{
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
      Gv = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function mv() {
      const {
        t: vv
      } = (0, ev.x)(), zv = (0, Nv.useNavigatePreserveSearch)(), Pv = (0, hv.p)(), {
        isUserContextUpdating: mv
      } = (0, gv.d)(), jv = (0, dv.b)(), fv = (0, pv.i)(), Fv = (Yv = Pv.pathname).startsWith(Cv.s) ? null : Yv.startsWith(Gv.docs) ? "docs" : Yv.startsWith(Gv.leaderboard) ? "leaderboard" : "myGames";
      var Yv;
      const nv = function(vv) {
        if (!vv.startsWith(Cv.s)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const zv = (0, Nv.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== zv && zv.startsWith(Gv.myGames) ? -1 : Gv.myGames
        }
      }(Pv.pathname);
      return (0, Sv.useEffect)((() => {
        Wv.c.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, iv.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [jv && (0, iv.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, iv.jsx)(sv.b, {})
        }), (0, iv.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, iv.jsxs)("div", {
            className: "StudioTop",
            children: [(0, iv.jsx)(Tv.b, {
              show: !0,
              socialBarIsDocked: jv
            }), (0, iv.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, iv.jsx)(wv.b, {
                icon: nv.icon,
                onClick: () => {
                  zv(nv.to)
                },
                children: vv(nv.title)
              }), (0, iv.jsx)("div", {
                className: "StudioNavTabs",
                children: cv.map((Pv => (0, iv.jsxs)(wv.K, {
                  active: Fv === Pv.id,
                  href: Gv[Pv.id],
                  onClick: () => {
                    zv(Gv[Pv.id])
                  },
                  children: [(0, iv.jsx)(av.b, {
                    name: Pv.icon
                  }), !fv && vv(Pv.title)]
                }, Pv.id)))
              })]
            })]
          }), (0, iv.jsxs)("main", {
            className: "StudioBottom",
            children: [mv && (0, iv.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, iv.jsx)(lv.c, {})
            }), !mv && (0, iv.jsx)("div", {
              className: "StudioContent",
              children: (0, iv.jsx)(hv.d, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);