export const id = 99;
export const ids = [99];
export const modules = {
  4777: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => vd
    });
    var pd = kd(1557),
      Nd = kd(56),
      Wd = kd(1211),
      Pd = kd(1140),
      Zd = kd(1124),
      gd = kd(2051),
      Cd = kd(1543),
      Kd = kd(1359),
      od = kd(1115),
      ld = kd(22),
      Qd = kd(1461),
      Ld = kd(1059),
      Od = kd(2458),
      ed = kd(1569),
      Rd = kd(1103);
    const Id = [{
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
      Gd = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function vd() {
      const {
        t: dd
      } = (0, Wd.B)(), Jd = (0, Cd.useNavigatePreserveSearch)(), kd = (0, pd.v)(), {
        isUserContextUpdating: vd
      } = (0, Pd.c)(), xd = (0, gd.c)(), qd = (0, Zd.g)(), Bd = (sd = kd.pathname).startsWith(ed.u) ? null : sd.startsWith(Gd.docs) ? "docs" : sd.startsWith(Gd.leaderboard) ? "leaderboard" : "myGames";
      var sd;
      const ad = function(dd) {
        if (!dd.startsWith(ed.u)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const Jd = (0, Cd.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== Jd && Jd.startsWith(Gd.myGames) ? -1 : Gd.myGames
        }
      }(kd.pathname);
      return (0, Nd.useEffect)((() => {
        ld.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, Rd.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [xd && (0, Rd.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, Rd.jsx)(Od.c, {})
        }), (0, Rd.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, Rd.jsxs)("div", {
            className: "StudioTop",
            children: [(0, Rd.jsx)(od.d, {
              show: !0,
              socialBarIsDocked: xd
            }), (0, Rd.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, Rd.jsx)(Qd.b, {
                icon: ad.icon,
                onClick: () => {
                  Jd(ad.to)
                },
                children: dd(ad.title)
              }), (0, Rd.jsx)("div", {
                className: "StudioNavTabs",
                children: Id.map((kd => (0, Rd.jsxs)(Qd.G, {
                  active: Bd === kd.id,
                  href: Gd[kd.id],
                  onClick: () => {
                    Jd(Gd[kd.id])
                  },
                  children: [(0, Rd.jsx)(Ld.e, {
                    name: kd.icon
                  }), !qd && dd(kd.title)]
                }, kd.id)))
              })]
            })]
          }), (0, Rd.jsxs)("main", {
            className: "StudioBottom",
            children: [vd && (0, Rd.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, Rd.jsx)(Kd.b, {})
            }), !vd && (0, Rd.jsx)("div", {
              className: "StudioContent",
              children: (0, Rd.jsx)(pd.h, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);