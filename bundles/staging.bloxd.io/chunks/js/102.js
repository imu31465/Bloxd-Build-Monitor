export const id = 102;
export const ids = [102];
export const modules = {
  5002: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => iT
    });
    var WT = mT(1641),
      zT = mT(63),
      MT = mT(1288),
      gT = mT(1225),
      nT = mT(1213),
      HT = mT(2194),
      kT = mT(1633),
      jT = mT(1446),
      lT = mT(1205),
      LT = mT(25),
      pT = mT(1569),
      BT = mT(1135),
      ZT = mT(2695),
      cT = mT(1658),
      vT = mT(1188);
    const fT = [{
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
      qT = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function iT() {
      const {
        t: TT
      } = (0, MT.z)(), UT = (0, kT.useNavigatePreserveSearch)(), mT = (0, WT.p)(), {
        isUserContextUpdating: iT
      } = (0, gT.d)(), bT = (0, HT.e)(), OT = (0, nT.i)(), eT = (YT = mT.pathname).startsWith(cT.m) ? null : YT.startsWith(qT.docs) ? "docs" : YT.startsWith(qT.leaderboard) ? "leaderboard" : "myGames";
      var YT;
      const JT = function(TT) {
        if (!TT.startsWith(cT.m)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const UT = (0, kT.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== UT && UT.startsWith(qT.myGames) ? -1 : qT.myGames
        }
      }(mT.pathname);
      return (0, zT.useEffect)((() => {
        LT.b.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, vT.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [bT && (0, vT.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, vT.jsx)(ZT.b, {})
        }), (0, vT.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, vT.jsxs)("div", {
            className: "StudioTop",
            children: [(0, vT.jsx)(lT.c, {
              show: !0,
              socialBarIsDocked: bT
            }), (0, vT.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, vT.jsx)(pT.d, {
                icon: JT.icon,
                onClick: () => {
                  UT(JT.to)
                },
                children: TT(JT.title)
              }), (0, vT.jsx)("div", {
                className: "StudioNavTabs",
                children: fT.map((mT => (0, vT.jsxs)(pT.L, {
                  active: eT === mT.id,
                  href: qT[mT.id],
                  onClick: () => {
                    UT(qT[mT.id])
                  },
                  children: [(0, vT.jsx)(BT.c, {
                    name: mT.icon
                  }), !OT && TT(mT.title)]
                }, mT.id)))
              })]
            })]
          }), (0, vT.jsxs)("main", {
            className: "StudioBottom",
            children: [iT && (0, vT.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, vT.jsx)(jT.c, {})
            }), !iT && (0, vT.jsx)("div", {
              className: "StudioContent",
              children: (0, vT.jsx)(WT.e, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);