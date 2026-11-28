export const id = 115;
export const ids = [115];
export const modules = {
  5798: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => hb
    });
    var eb = Mb(1696),
      Hb = Mb(64),
      pb = Mb(1259),
      Vb = Mb(1179),
      gb = Mb(1168),
      lb = Mb(2284),
      Lb = Mb(1686),
      Ib = Mb(1468),
      Ob = Mb(1163),
      Ub = Mb(26),
      tb = Mb(1616),
      Cb = Mb(1475),
      Eb = Mb(3773),
      Fb = Mb(1713),
      Bb = Mb(1364);
    const sb = [{
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
      mb = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function hb() {
      const {
        t: bb
      } = (0, pb.C)(), wb = (0, Lb.useNavigatePreserveSearch)(), Mb = (0, eb.v)(), {
        isUserContextUpdating: hb
      } = (0, Vb.e)(), zb = (0, lb.e)(), Xb = (0, gb.h)(), xb = (jb = Mb.pathname).startsWith(Fb.r) ? null : jb.startsWith(mb.docs) ? "docs" : jb.startsWith(mb.leaderboard) ? "leaderboard" : "myGames";
      var jb;
      const Kb = function(bb) {
        if (!bb.startsWith(Fb.r)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const wb = (0, Lb.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== wb && wb.startsWith(mb.myGames) ? -1 : mb.myGames
        }
      }(Mb.pathname);
      return (0, Hb.useEffect)((() => {
        Ub.c.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, Bb.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [zb && (0, Bb.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, Bb.jsx)(Eb.c, {})
        }), (0, Bb.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, Bb.jsxs)("div", {
            className: "StudioTop",
            children: [(0, Bb.jsx)(Ob.e, {
              show: !0,
              socialBarIsDocked: zb
            }), (0, Bb.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, Bb.jsx)(tb.b, {
                icon: Kb.icon,
                onClick: () => {
                  wb(Kb.to)
                },
                children: bb(Kb.title)
              }), (0, Bb.jsx)("div", {
                className: "StudioNavTabs",
                children: sb.map((Mb => (0, Bb.jsxs)(tb.Y, {
                  active: xb === Mb.id,
                  href: mb[Mb.id],
                  onClick: () => {
                    wb(mb[Mb.id])
                  },
                  children: [(0, Bb.jsx)(Cb.b, {
                    name: Mb.icon
                  }), !Xb && bb(Mb.title)]
                }, Mb.id)))
              })]
            })]
          }), (0, Bb.jsxs)("main", {
            className: "StudioBottom",
            children: [hb && (0, Bb.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, Bb.jsx)(Ib.c, {})
            }), !hb && (0, Bb.jsx)("div", {
              className: "StudioContent",
              children: (0, Bb.jsx)(eb.h, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);