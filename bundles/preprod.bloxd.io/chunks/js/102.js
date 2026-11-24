export const id = 102;
export const ids = [102];
export const modules = {
  5008: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => dp
    });
    var Op = cp(1543),
      op = cp(62),
      Ip = cp(1201),
      Sp = cp(1141),
      xp = cp(1133),
      Lp = cp(2112),
      Yp = cp(1538),
      Dp = cp(1361),
      Ap = cp(1128),
      Pp = cp(25),
      Wp = cp(1480),
      yp = cp(1060),
      Up = cp(2655),
      wp = cp(1563),
      vp = cp(1112);
    const tp = [{
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
      Hp = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function dp() {
      const {
        t: pp
      } = (0, Ip.H)(), ip = (0, Yp.useNavigatePreserveSearch)(), cp = (0, Op.r)(), {
        isUserContextUpdating: dp
      } = (0, Sp.b)(), ep = (0, Lp.e)(), jp = (0, xp.h)(), kp = (mp = cp.pathname).startsWith(wp.p) ? null : mp.startsWith(Hp.docs) ? "docs" : mp.startsWith(Hp.leaderboard) ? "leaderboard" : "myGames";
      var mp;
      const Rp = function(pp) {
        if (!pp.startsWith(wp.p)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const ip = (0, Yp.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== ip && ip.startsWith(Hp.myGames) ? -1 : Hp.myGames
        }
      }(cp.pathname);
      return (0, op.useEffect)((() => {
        Pp.c.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, vp.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [ep && (0, vp.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, vp.jsx)(Up.b, {})
        }), (0, vp.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, vp.jsxs)("div", {
            className: "StudioTop",
            children: [(0, vp.jsx)(Ap.e, {
              show: !0,
              socialBarIsDocked: ep
            }), (0, vp.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, vp.jsx)(Wp.d, {
                icon: Rp.icon,
                onClick: () => {
                  ip(Rp.to)
                },
                children: pp(Rp.title)
              }), (0, vp.jsx)("div", {
                className: "StudioNavTabs",
                children: tp.map((cp => (0, vp.jsxs)(Wp.S, {
                  active: kp === cp.id,
                  href: Hp[cp.id],
                  onClick: () => {
                    ip(Hp[cp.id])
                  },
                  children: [(0, vp.jsx)(yp.d, {
                    name: cp.icon
                  }), !jp && pp(cp.title)]
                }, cp.id)))
              })]
            })]
          }), (0, vp.jsxs)("main", {
            className: "StudioBottom",
            children: [dp && (0, vp.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, vp.jsx)(Dp.c, {})
            }), !dp && (0, vp.jsx)("div", {
              className: "StudioContent",
              children: (0, vp.jsx)(Op.f, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);