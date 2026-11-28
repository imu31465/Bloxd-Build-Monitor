export const id = 115;
export const ids = [115];
export const modules = {
  5672: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Yd
    });
    var Wd = md(1650),
      Fd = md(66),
      Rd = md(1238),
      Xd = md(1186),
      Kd = md(1170),
      hd = md(2240),
      vd = md(1641),
      Qd = md(1436),
      td = md(1161),
      od = md(29),
      Nd = md(1572),
      qd = md(1443),
      Hd = md(3637),
      yd = md(1666),
      bd = md(1341);
    const Td = [{
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
      pd = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function Yd() {
      const {
        t: dd
      } = (0, Rd.G)(), Od = (0, vd.useNavigatePreserveSearch)(), md = (0, Wd.p)(), {
        isUserContextUpdating: Yd
      } = (0, Xd.d)(), gd = (0, hd.e)(), wd = (0, Kd.h)(), Ed = (Jd = md.pathname).startsWith(yd.s) ? null : Jd.startsWith(pd.docs) ? "docs" : Jd.startsWith(pd.leaderboard) ? "leaderboard" : "myGames";
      var Jd;
      const Ud = function(dd) {
        if (!dd.startsWith(yd.s)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const Od = (0, vd.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== Od && Od.startsWith(pd.myGames) ? -1 : pd.myGames
        }
      }(md.pathname);
      return (0, Fd.useEffect)((() => {
        od.e.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, bd.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [gd && (0, bd.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, bd.jsx)(Hd.c, {})
        }), (0, bd.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, bd.jsxs)("div", {
            className: "StudioTop",
            children: [(0, bd.jsx)(td.e, {
              show: !0,
              socialBarIsDocked: gd
            }), (0, bd.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, bd.jsx)(Nd.d, {
                icon: Ud.icon,
                onClick: () => {
                  Od(Ud.to)
                },
                children: dd(Ud.title)
              }), (0, bd.jsx)("div", {
                className: "StudioNavTabs",
                children: Td.map((md => (0, bd.jsxs)(Nd.S, {
                  active: Ed === md.id,
                  href: pd[md.id],
                  onClick: () => {
                    Od(pd[md.id])
                  },
                  children: [(0, bd.jsx)(qd.c, {
                    name: md.icon
                  }), !wd && dd(md.title)]
                }, md.id)))
              })]
            })]
          }), (0, bd.jsxs)("main", {
            className: "StudioBottom",
            children: [Yd && (0, bd.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, bd.jsx)(Qd.c, {})
            }), !Yd && (0, bd.jsx)("div", {
              className: "StudioContent",
              children: (0, bd.jsx)(Wd.e, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);