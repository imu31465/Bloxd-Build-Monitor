export const id = 100;
export const ids = [100];
export const modules = {
  4823: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => AC
    });
    var QC = ZC(1463),
      wC = ZC(48),
      bC = ZC(1143),
      nC = ZC(1076),
      fC = ZC(1072),
      oC = ZC(1979),
      qC = ZC(1453),
      FC = ZC(1295),
      WC = ZC(1068),
      NC = ZC(20),
      MC = ZC(1388),
      gC = ZC(1013),
      SC = ZC(2548),
      pC = ZC(1477),
      PC = ZC(1056);
    const GC = [{
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
      RC = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function AC() {
      const {
        t: CC
      } = (0, bC.y)(), zC = (0, qC.useNavigatePreserveSearch)(), ZC = (0, QC.v)(), {
        isUserContextUpdating: AC
      } = (0, nC.e)(), xC = (0, oC.b)(), JC = (0, fC.k)(), IC = (iC = ZC.pathname).startsWith(pC.q) ? null : iC.startsWith(RC.docs) ? "docs" : iC.startsWith(RC.leaderboard) ? "leaderboard" : "myGames";
      var iC;
      const vC = function(CC) {
        if (!CC.startsWith(pC.q)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const zC = (0, qC.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== zC && zC.startsWith(RC.myGames) ? -1 : RC.myGames
        }
      }(ZC.pathname);
      return (0, wC.useEffect)((() => {
        NC.b.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, PC.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [xC && (0, PC.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, PC.jsx)(SC.b, {})
        }), (0, PC.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, PC.jsxs)("div", {
            className: "StudioTop",
            children: [(0, PC.jsx)(WC.c, {
              show: !0,
              socialBarIsDocked: xC
            }), (0, PC.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, PC.jsx)(MC.c, {
                icon: vC.icon,
                onClick: () => {
                  zC(vC.to)
                },
                children: CC(vC.title)
              }), (0, PC.jsx)("div", {
                className: "StudioNavTabs",
                children: GC.map((ZC => (0, PC.jsxs)(MC.O, {
                  active: IC === ZC.id,
                  href: RC[ZC.id],
                  onClick: () => {
                    zC(RC[ZC.id])
                  },
                  children: [(0, PC.jsx)(gC.c, {
                    name: ZC.icon
                  }), !JC && CC(ZC.title)]
                }, ZC.id)))
              })]
            })]
          }), (0, PC.jsxs)("main", {
            className: "StudioBottom",
            children: [AC && (0, PC.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, PC.jsx)(FC.d, {})
            }), !AC && (0, PC.jsx)("div", {
              className: "StudioContent",
              children: (0, PC.jsx)(QC.i, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);