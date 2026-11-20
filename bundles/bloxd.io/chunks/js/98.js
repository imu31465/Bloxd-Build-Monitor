export const id = 98;
export const ids = [98];
export const modules = {
  4577: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => zb
    });
    var Ab = Ub(1446),
      Mb = Ub(52),
      Tb = Ub(1134),
      Eb = Ub(1060),
      Yb = Ub(1047),
      Bb = Ub(1967),
      eb = Ub(1433),
      vb = Ub(1254),
      Lb = Ub(1039),
      Pb = Ub(19),
      Xb = Ub(1352),
      jb = Ub(990),
      Rb = Ub(2372),
      kb = Ub(1458),
      yb = Ub(1023);
    const Zb = [{
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
      Db = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function zb() {
      const {
        t: bb
      } = (0, Tb.A)(), ab = (0, eb.useNavigatePreserveSearch)(), Ub = (0, Ab.v)(), {
        isUserContextUpdating: zb
      } = (0, Eb.c)(), xb = (0, Bb.c)(), ib = (0, Yb.k)(), fb = (mb = Ub.pathname).startsWith(kb.k) ? null : mb.startsWith(Db.docs) ? "docs" : mb.startsWith(Db.leaderboard) ? "leaderboard" : "myGames";
      var mb;
      const pb = function(bb) {
        if (!bb.startsWith(kb.k)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const ab = (0, eb.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== ab && ab.startsWith(Db.myGames) ? -1 : Db.myGames
        }
      }(Ub.pathname);
      return (0, Mb.useEffect)((() => {
        Pb.c.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, yb.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [xb && (0, yb.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, yb.jsx)(Rb.e, {})
        }), (0, yb.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, yb.jsxs)("div", {
            className: "StudioTop",
            children: [(0, yb.jsx)(Lb.e, {
              show: !0,
              socialBarIsDocked: xb
            }), (0, yb.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, yb.jsx)(Xb.e, {
                icon: pb.icon,
                onClick: () => {
                  ab(pb.to)
                },
                children: bb(pb.title)
              }), (0, yb.jsx)("div", {
                className: "StudioNavTabs",
                children: Zb.map((Ub => (0, yb.jsxs)(Xb.M, {
                  active: fb === Ub.id,
                  href: Db[Ub.id],
                  onClick: () => {
                    ab(Db[Ub.id])
                  },
                  children: [(0, yb.jsx)(jb.e, {
                    name: Ub.icon
                  }), !ib && bb(Ub.title)]
                }, Ub.id)))
              })]
            })]
          }), (0, yb.jsxs)("main", {
            className: "StudioBottom",
            children: [zb && (0, yb.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, yb.jsx)(vb.b, {})
            }), !zb && (0, yb.jsx)("div", {
              className: "StudioContent",
              children: (0, yb.jsx)(Ab.i, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);