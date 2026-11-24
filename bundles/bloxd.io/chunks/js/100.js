export const id = 100;
export const ids = [100];
export const modules = {
  4891: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => Kk
    });
    var Xk = Ik(1485),
      Tk = Ik(58),
      ik = Ik(1179),
      yk = Ik(1118),
      lk = Ik(1103),
      ak = Ik(2008),
      qk = Ik(1475),
      Lk = Ik(1318),
      tk = Ik(1101),
      Zk = Ik(25),
      jk = Ik(1406),
      ek = Ik(1066),
      wk = Ik(2503),
      Hk = Ik(1504),
      Jk = Ik(1096);
    const xk = [{
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
      Pk = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function Kk() {
      const {
        t: kk
      } = (0, ik.y)(), Fk = (0, qk.useNavigatePreserveSearch)(), Ik = (0, Xk.q)(), {
        isUserContextUpdating: Kk
      } = (0, yk.d)(), Qk = (0, ak.e)(), sk = (0, lk.h)(), Vk = (zk = Ik.pathname).startsWith(Hk.o) ? null : zk.startsWith(Pk.docs) ? "docs" : zk.startsWith(Pk.leaderboard) ? "leaderboard" : "myGames";
      var zk;
      const Sk = function(kk) {
        if (!kk.startsWith(Hk.o)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const Fk = (0, qk.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== Fk && Fk.startsWith(Pk.myGames) ? -1 : Pk.myGames
        }
      }(Ik.pathname);
      return (0, Tk.useEffect)((() => {
        Zk.d.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, Jk.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [Qk && (0, Jk.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, Jk.jsx)(wk.d, {})
        }), (0, Jk.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, Jk.jsxs)("div", {
            className: "StudioTop",
            children: [(0, Jk.jsx)(tk.d, {
              show: !0,
              socialBarIsDocked: Qk
            }), (0, Jk.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, Jk.jsx)(jk.c, {
                icon: Sk.icon,
                onClick: () => {
                  Fk(Sk.to)
                },
                children: kk(Sk.title)
              }), (0, Jk.jsx)("div", {
                className: "StudioNavTabs",
                children: xk.map((Ik => (0, Jk.jsxs)(jk.Q, {
                  active: Vk === Ik.id,
                  href: Pk[Ik.id],
                  onClick: () => {
                    Fk(Pk[Ik.id])
                  },
                  children: [(0, Jk.jsx)(ek.e, {
                    name: Ik.icon
                  }), !sk && kk(Ik.title)]
                }, Ik.id)))
              })]
            })]
          }), (0, Jk.jsxs)("main", {
            className: "StudioBottom",
            children: [Kk && (0, Jk.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, Jk.jsx)(Lk.c, {})
            }), !Kk && (0, Jk.jsx)("div", {
              className: "StudioContent",
              children: (0, Jk.jsx)(Xk.f, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);