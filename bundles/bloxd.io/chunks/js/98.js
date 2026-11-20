export const id = 98;
export const ids = [98];
export const modules = {
  4602: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Vb
    });
    var kb = sb(1511),
      Wb = sb(64),
      ab = sb(1197),
      Tb = sb(1117),
      Ub = sb(1104),
      Ib = sb(2009),
      Hb = sb(1495),
      fb = sb(1327),
      Mb = sb(1101),
      Xb = sb(19),
      nb = sb(1431),
      mb = sb(1039),
      lb = sb(2418),
      Qb = sb(1528),
      eb = sb(1087);
    const Cb = [{
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
      Nb = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function Vb() {
      const {
        t: bb
      } = (0, ab.E)(), cb = (0, Hb.useNavigatePreserveSearch)(), sb = (0, kb.r)(), {
        isUserContextUpdating: Vb
      } = (0, Tb.c)(), Lb = (0, Ib.b)(), ub = (0, Ub.j)(), Yb = (hb = sb.pathname).startsWith(Qb.p) ? null : hb.startsWith(Nb.docs) ? "docs" : hb.startsWith(Nb.leaderboard) ? "leaderboard" : "myGames";
      var hb;
      const Jb = function(bb) {
        if (!bb.startsWith(Qb.p)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const cb = (0, Hb.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== cb && cb.startsWith(Nb.myGames) ? -1 : Nb.myGames
        }
      }(sb.pathname);
      return (0, Wb.useEffect)((() => {
        Xb.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, eb.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [Lb && (0, eb.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, eb.jsx)(lb.c, {})
        }), (0, eb.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, eb.jsxs)("div", {
            className: "StudioTop",
            children: [(0, eb.jsx)(Mb.e, {
              show: !0,
              socialBarIsDocked: Lb
            }), (0, eb.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, eb.jsx)(nb.b, {
                icon: Jb.icon,
                onClick: () => {
                  cb(Jb.to)
                },
                children: bb(Jb.title)
              }), (0, eb.jsx)("div", {
                className: "StudioNavTabs",
                children: Cb.map((sb => (0, eb.jsxs)(nb.M, {
                  active: Yb === sb.id,
                  href: Nb[sb.id],
                  onClick: () => {
                    cb(Nb[sb.id])
                  },
                  children: [(0, eb.jsx)(mb.b, {
                    name: sb.icon
                  }), !ub && bb(sb.title)]
                }, sb.id)))
              })]
            })]
          }), (0, eb.jsxs)("main", {
            className: "StudioBottom",
            children: [Vb && (0, eb.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, eb.jsx)(fb.d, {})
            }), !Vb && (0, eb.jsx)("div", {
              className: "StudioContent",
              children: (0, eb.jsx)(kb.e, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);