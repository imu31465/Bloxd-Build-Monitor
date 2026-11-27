export const id = 115;
export const ids = [115];
export const modules = {
  5713: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => er
    });
    var Zr = Qr(1653),
      Wr = Qr(72),
      ar = Qr(1251),
      jr = Qr(1181),
      Ir = Qr(1171),
      fr = Qr(2232),
      Er = Qr(1644),
      pr = Qr(1444),
      xr = Qr(1162),
      mr = Qr(26),
      Nr = Qr(1576),
      Ur = Qr(1448),
      tr = Qr(3631),
      hr = Qr(1671),
      zr = Qr(1338);
    const Yr = [{
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
      nr = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function er() {
      const {
        t: rr
      } = (0, ar.E)(), Sr = (0, Er.useNavigatePreserveSearch)(), Qr = (0, Zr.s)(), {
        isUserContextUpdating: er
      } = (0, jr.c)(), Kr = (0, fr.e)(), yr = (0, Ir.j)(), Br = (Tr = Qr.pathname).startsWith(hr.u) ? null : Tr.startsWith(nr.docs) ? "docs" : Tr.startsWith(nr.leaderboard) ? "leaderboard" : "myGames";
      var Tr;
      const vr = function(rr) {
        if (!rr.startsWith(hr.u)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const Sr = (0, Er.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== Sr && Sr.startsWith(nr.myGames) ? -1 : nr.myGames
        }
      }(Qr.pathname);
      return (0, Wr.useEffect)((() => {
        mr.c.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, zr.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [Kr && (0, zr.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, zr.jsx)(tr.e, {})
        }), (0, zr.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, zr.jsxs)("div", {
            className: "StudioTop",
            children: [(0, zr.jsx)(xr.e, {
              show: !0,
              socialBarIsDocked: Kr
            }), (0, zr.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, zr.jsx)(Nr.d, {
                icon: vr.icon,
                onClick: () => {
                  Sr(vr.to)
                },
                children: rr(vr.title)
              }), (0, zr.jsx)("div", {
                className: "StudioNavTabs",
                children: Yr.map((Qr => (0, zr.jsxs)(Nr.U, {
                  active: Br === Qr.id,
                  href: nr[Qr.id],
                  onClick: () => {
                    Sr(nr[Qr.id])
                  },
                  children: [(0, zr.jsx)(Ur.c, {
                    name: Qr.icon
                  }), !yr && rr(Qr.title)]
                }, Qr.id)))
              })]
            })]
          }), (0, zr.jsxs)("main", {
            className: "StudioBottom",
            children: [er && (0, zr.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, zr.jsx)(pr.c, {})
            }), !er && (0, zr.jsx)("div", {
              className: "StudioContent",
              children: (0, zr.jsx)(Zr.h, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);