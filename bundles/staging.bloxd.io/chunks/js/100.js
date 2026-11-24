export const id = 100;
export const ids = [100];
export const modules = {
  4830: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => Km
    });
    var hm = fm(1537),
      Am = fm(59),
      am = fm(1208),
      xm = fm(1160),
      wm = fm(1152),
      Dm = fm(2060),
      im = fm(1519),
      Rm = fm(1345),
      pm = fm(1148),
      Em = fm(23),
      om = fm(1454),
      Om = fm(1089),
      Ym = fm(2565),
      qm = fm(1548),
      jm = fm(1135);
    const Vm = [{
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
      Im = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function Km() {
      const {
        t: mm
      } = (0, am.A)(), Tm = (0, im.useNavigatePreserveSearch)(), fm = (0, hm.w)(), {
        isUserContextUpdating: Km
      } = (0, xm.e)(), Qm = (0, Dm.d)(), nm = (0, wm.j)(), Jm = (cm = fm.pathname).startsWith(qm.s) ? null : cm.startsWith(Im.docs) ? "docs" : cm.startsWith(Im.leaderboard) ? "leaderboard" : "myGames";
      var cm;
      const zm = function(mm) {
        if (!mm.startsWith(qm.s)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const Tm = (0, im.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== Tm && Tm.startsWith(Im.myGames) ? -1 : Im.myGames
        }
      }(fm.pathname);
      return (0, Am.useEffect)((() => {
        Em.c.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, jm.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [Qm && (0, jm.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, jm.jsx)(Ym.c, {})
        }), (0, jm.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, jm.jsxs)("div", {
            className: "StudioTop",
            children: [(0, jm.jsx)(pm.d, {
              show: !0,
              socialBarIsDocked: Qm
            }), (0, jm.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, jm.jsx)(om.d, {
                icon: zm.icon,
                onClick: () => {
                  Tm(zm.to)
                },
                children: mm(zm.title)
              }), (0, jm.jsx)("div", {
                className: "StudioNavTabs",
                children: Vm.map((fm => (0, jm.jsxs)(om.V, {
                  active: Jm === fm.id,
                  href: Im[fm.id],
                  onClick: () => {
                    Tm(Im[fm.id])
                  },
                  children: [(0, jm.jsx)(Om.c, {
                    name: fm.icon
                  }), !nm && mm(fm.title)]
                }, fm.id)))
              })]
            })]
          }), (0, jm.jsxs)("main", {
            className: "StudioBottom",
            children: [Km && (0, jm.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, jm.jsx)(Rm.c, {})
            }), !Km && (0, jm.jsx)("div", {
              className: "StudioContent",
              children: (0, jm.jsx)(hm.i, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);