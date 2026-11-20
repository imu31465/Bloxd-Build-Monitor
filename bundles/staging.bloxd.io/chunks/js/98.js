export const id = 98;
export const ids = [98];
export const modules = {
  4605: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => ik
    });
    var Rk = Bk(1473),
      tk = Bk(61),
      ak = Bk(1149),
      Xk = Bk(1096),
      bk = Bk(1083),
      wk = Bk(1978),
      dk = Bk(1459),
      sk = Bk(1288),
      Vk = Bk(1081),
      Jk = Bk(22),
      Ak = Bk(1389),
      ek = Bk(1028),
      yk = Bk(2417),
      fk = Bk(1484),
      mk = Bk(1069);
    const Wk = [{
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
      vk = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function ik() {
      const {
        t: kk
      } = (0, ak.x)(), Fk = (0, dk.useNavigatePreserveSearch)(), Bk = (0, Rk.s)(), {
        isUserContextUpdating: ik
      } = (0, Xk.e)(), Yk = (0, wk.b)(), Lk = (0, bk.m)(), Ok = (Ek = Bk.pathname).startsWith(fk.r) ? null : Ek.startsWith(vk.docs) ? "docs" : Ek.startsWith(vk.leaderboard) ? "leaderboard" : "myGames";
      var Ek;
      const Sk = function(kk) {
        if (!kk.startsWith(fk.r)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const Fk = (0, dk.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== Fk && Fk.startsWith(vk.myGames) ? -1 : vk.myGames
        }
      }(Bk.pathname);
      return (0, tk.useEffect)((() => {
        Jk.c.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, mk.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [Yk && (0, mk.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, mk.jsx)(yk.d, {})
        }), (0, mk.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, mk.jsxs)("div", {
            className: "StudioTop",
            children: [(0, mk.jsx)(Vk.d, {
              show: !0,
              socialBarIsDocked: Yk
            }), (0, mk.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, mk.jsx)(Ak.c, {
                icon: Sk.icon,
                onClick: () => {
                  Fk(Sk.to)
                },
                children: kk(Sk.title)
              }), (0, mk.jsx)("div", {
                className: "StudioNavTabs",
                children: Wk.map((Bk => (0, mk.jsxs)(Ak.O, {
                  active: Ok === Bk.id,
                  href: vk[Bk.id],
                  onClick: () => {
                    Fk(vk[Bk.id])
                  },
                  children: [(0, mk.jsx)(ek.d, {
                    name: Bk.icon
                  }), !Lk && kk(Bk.title)]
                }, Bk.id)))
              })]
            })]
          }), (0, mk.jsxs)("main", {
            className: "StudioBottom",
            children: [ik && (0, mk.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, mk.jsx)(sk.b, {})
            }), !ik && (0, mk.jsx)("div", {
              className: "StudioContent",
              children: (0, mk.jsx)(Rk.f, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);