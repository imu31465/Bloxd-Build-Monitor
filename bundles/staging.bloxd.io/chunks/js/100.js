export const id = 100;
export const ids = [100];
export const modules = {
  4825: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => Yk
    });
    var Dk = ik(1496),
      fk = ik(60),
      Sk = ik(1172),
      bk = ik(1095),
      rk = ik(1085),
      Pk = ik(2050),
      mk = ik(1479),
      Mk = ik(1327),
      Kk = ik(1081),
      xk = ik(22),
      nk = ik(1410),
      Uk = ik(1033),
      Hk = ik(2522),
      wk = ik(1512),
      lk = ik(1066);
    const pk = [{
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
      yk = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function Yk() {
      const {
        t: kk
      } = (0, Sk.D)(), ek = (0, mk.useNavigatePreserveSearch)(), ik = (0, Dk.p)(), {
        isUserContextUpdating: Yk
      } = (0, bk.d)(), Lk = (0, Pk.e)(), Ck = (0, rk.k)(), Ak = (jk = ik.pathname).startsWith(wk.p) ? null : jk.startsWith(yk.docs) ? "docs" : jk.startsWith(yk.leaderboard) ? "leaderboard" : "myGames";
      var jk;
      const sk = function(kk) {
        if (!kk.startsWith(wk.p)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const ek = (0, mk.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== ek && ek.startsWith(yk.myGames) ? -1 : yk.myGames
        }
      }(ik.pathname);
      return (0, fk.useEffect)((() => {
        xk.b.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, lk.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [Lk && (0, lk.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, lk.jsx)(Hk.d, {})
        }), (0, lk.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, lk.jsxs)("div", {
            className: "StudioTop",
            children: [(0, lk.jsx)(Kk.e, {
              show: !0,
              socialBarIsDocked: Lk
            }), (0, lk.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, lk.jsx)(nk.e, {
                icon: sk.icon,
                onClick: () => {
                  ek(sk.to)
                },
                children: kk(sk.title)
              }), (0, lk.jsx)("div", {
                className: "StudioNavTabs",
                children: pk.map((ik => (0, lk.jsxs)(nk.X, {
                  active: Ak === ik.id,
                  href: yk[ik.id],
                  onClick: () => {
                    ek(yk[ik.id])
                  },
                  children: [(0, lk.jsx)(Uk.d, {
                    name: ik.icon
                  }), !Ck && kk(ik.title)]
                }, ik.id)))
              })]
            })]
          }), (0, lk.jsxs)("main", {
            className: "StudioBottom",
            children: [Yk && (0, lk.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, lk.jsx)(Mk.d, {})
            }), !Yk && (0, lk.jsx)("div", {
              className: "StudioContent",
              children: (0, lk.jsx)(Dk.f, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);