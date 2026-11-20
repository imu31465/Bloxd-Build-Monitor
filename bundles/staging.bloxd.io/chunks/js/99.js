export const id = 99;
export const ids = [99];
export const modules = {
  4659: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Wb
    });
    var Bb = hb(1431),
      Ob = hb(49),
      Gb = hb(1095),
      Ub = hb(1029),
      Lb = hb(1023),
      Yb = hb(1957),
      Sb = hb(1415),
      ab = hb(1242),
      Hb = hb(1016),
      wb = hb(13),
      Zb = hb(1357),
      Xb = hb(966),
      pb = hb(2403),
      ob = hb(1442),
      Ab = hb(1007);
    const lb = [{
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
      Kb = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function Wb() {
      const {
        t: bb
      } = (0, Gb.K)(), ub = (0, Sb.useNavigatePreserveSearch)(), hb = (0, Bb.x)(), {
        isUserContextUpdating: Wb
      } = (0, Ub.d)(), Cb = (0, Yb.e)(), db = (0, Lb.k)(), rb = (jb = hb.pathname).startsWith(ob.o) ? null : jb.startsWith(Kb.docs) ? "docs" : jb.startsWith(Kb.leaderboard) ? "leaderboard" : "myGames";
      var jb;
      const nb = function(bb) {
        if (!bb.startsWith(ob.o)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const ub = (0, Sb.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== ub && ub.startsWith(Kb.myGames) ? -1 : Kb.myGames
        }
      }(hb.pathname);
      return (0, Ob.useEffect)((() => {
        wb.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, Ab.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [Cb && (0, Ab.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, Ab.jsx)(pb.b, {})
        }), (0, Ab.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, Ab.jsxs)("div", {
            className: "StudioTop",
            children: [(0, Ab.jsx)(Hb.e, {
              show: !0,
              socialBarIsDocked: Cb
            }), (0, Ab.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, Ab.jsx)(Zb.d, {
                icon: nb.icon,
                onClick: () => {
                  ub(nb.to)
                },
                children: bb(nb.title)
              }), (0, Ab.jsx)("div", {
                className: "StudioNavTabs",
                children: lb.map((hb => (0, Ab.jsxs)(Zb.O, {
                  active: rb === hb.id,
                  href: Kb[hb.id],
                  onClick: () => {
                    ub(Kb[hb.id])
                  },
                  children: [(0, Ab.jsx)(Xb.e, {
                    name: hb.icon
                  }), !db && bb(hb.title)]
                }, hb.id)))
              })]
            })]
          }), (0, Ab.jsxs)("main", {
            className: "StudioBottom",
            children: [Wb && (0, Ab.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, Ab.jsx)(ab.c, {})
            }), !Wb && (0, Ab.jsx)("div", {
              className: "StudioContent",
              children: (0, Ab.jsx)(Bb.i, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);