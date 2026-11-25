export const id = 102;
export const ids = [102];
export const modules = {
  5062: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => Jt
    });
    var Ot = Vt(1623),
      qt = Vt(63),
      Dt = Vt(1286),
      mt = Vt(1218),
      dt = Vt(1204),
      jt = Vt(2151),
      Ht = Vt(1613),
      Xt = Vt(1436),
      Qt = Vt(1201),
      lt = Vt(26),
      Et = Vt(1556),
      ft = Vt(1152),
      wt = Vt(2673),
      yt = Vt(1633),
      Nt = Vt(1188);
    const Mt = [{
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
      bt = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function Jt() {
      const {
        t: tt
      } = (0, Dt.H)(), et = (0, Ht.useNavigatePreserveSearch)(), Vt = (0, Ot.s)(), {
        isUserContextUpdating: Jt
      } = (0, mt.d)(), Ct = (0, jt.d)(), ut = (0, dt.h)(), Kt = (ht = Vt.pathname).startsWith(yt.o) ? null : ht.startsWith(bt.docs) ? "docs" : ht.startsWith(bt.leaderboard) ? "leaderboard" : "myGames";
      var ht;
      const vt = function(tt) {
        if (!tt.startsWith(yt.o)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const et = (0, Ht.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== et && et.startsWith(bt.myGames) ? -1 : bt.myGames
        }
      }(Vt.pathname);
      return (0, qt.useEffect)((() => {
        lt.b.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, Nt.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [Ct && (0, Nt.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, Nt.jsx)(wt.b, {})
        }), (0, Nt.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, Nt.jsxs)("div", {
            className: "StudioTop",
            children: [(0, Nt.jsx)(Qt.e, {
              show: !0,
              socialBarIsDocked: Ct
            }), (0, Nt.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, Nt.jsx)(Et.d, {
                icon: vt.icon,
                onClick: () => {
                  et(vt.to)
                },
                children: tt(vt.title)
              }), (0, Nt.jsx)("div", {
                className: "StudioNavTabs",
                children: Mt.map((Vt => (0, Nt.jsxs)(Et.Q, {
                  active: Kt === Vt.id,
                  href: bt[Vt.id],
                  onClick: () => {
                    et(bt[Vt.id])
                  },
                  children: [(0, Nt.jsx)(ft.b, {
                    name: Vt.icon
                  }), !ut && tt(Vt.title)]
                }, Vt.id)))
              })]
            })]
          }), (0, Nt.jsxs)("main", {
            className: "StudioBottom",
            children: [Jt && (0, Nt.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, Nt.jsx)(Xt.b, {})
            }), !Jt && (0, Nt.jsx)("div", {
              className: "StudioContent",
              children: (0, Nt.jsx)(Ot.g, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);