export const id = 113;
export const ids = [113];
export const modules = {
  5364: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => Ee
    });
    var ye = He(1515),
      be = He(59),
      Me = He(1127),
      Ke = He(1075),
      Ue = He(1062),
      Fe = He(2129),
      Je = He(1502),
      oe = He(1320),
      Re = He(1057),
      ke = He(18),
      qe = He(1438),
      fe = He(1323),
      Te = He(2729),
      pe = He(1536),
      Xe = He(1228);
    const ze = [{
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
      Be = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function Ee() {
      const {
        t: ee
      } = (0, Me.v)(), ie = (0, Je.useNavigatePreserveSearch)(), He = (0, ye.u)(), {
        isUserContextUpdating: Ee
      } = (0, Ke.b)(), ge = (0, Fe.e)(), Oe = (0, Ue.g)(), de = (We = He.pathname).startsWith(pe.v) ? null : We.startsWith(Be.docs) ? "docs" : We.startsWith(Be.leaderboard) ? "leaderboard" : "myGames";
      var We;
      const te = function(ee) {
        if (!ee.startsWith(pe.v)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const ie = (0, Je.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== ie && ie.startsWith(Be.myGames) ? -1 : Be.myGames
        }
      }(He.pathname);
      return (0, be.useEffect)((() => {
        ke.e.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, Xe.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [ge && (0, Xe.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, Xe.jsx)(Te.c, {})
        }), (0, Xe.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, Xe.jsxs)("div", {
            className: "StudioTop",
            children: [(0, Xe.jsx)(Re.b, {
              show: !0,
              socialBarIsDocked: ge
            }), (0, Xe.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, Xe.jsx)(qe.b, {
                icon: te.icon,
                onClick: () => {
                  ie(te.to)
                },
                children: ee(te.title)
              }), (0, Xe.jsx)("div", {
                className: "StudioNavTabs",
                children: ze.map((He => (0, Xe.jsxs)(qe.M, {
                  active: de === He.id,
                  href: Be[He.id],
                  onClick: () => {
                    ie(Be[He.id])
                  },
                  children: [(0, Xe.jsx)(fe.e, {
                    name: He.icon
                  }), !Oe && ee(He.title)]
                }, He.id)))
              })]
            })]
          }), (0, Xe.jsxs)("main", {
            className: "StudioBottom",
            children: [Ee && (0, Xe.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, Xe.jsx)(oe.b, {})
            }), !Ee && (0, Xe.jsx)("div", {
              className: "StudioContent",
              children: (0, Xe.jsx)(ye.e, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);