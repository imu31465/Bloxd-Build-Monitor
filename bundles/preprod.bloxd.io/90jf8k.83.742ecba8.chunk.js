export const id = 83;
export const ids = [83];
export const modules = {
  3888: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => kW
    });
    var CF = SF(1360),
      AF = SF(46),
      uF = SF(1046),
      hF = SF(996),
      bW = SF(983),
      dF = SF(1690),
      PF = SF(1352),
      RF = SF(1186),
      iW = SF(977),
      eF = SF(11),
      EF = SF(1266),
      QF = SF(929),
      rW = SF(1999),
      gW = SF(1381),
      tW = SF(971);
    const TF = [{
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
      aW = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function kW() {
      const {
        t: FF
      } = (0, uF.B)(), WF = (0, PF.useNavigatePreserveSearch)(), SF = (0, CF.p)(), {
        isUserContextUpdating: kW
      } = (0, hF.b)(), qW = (0, dF.e)(), VF = (0, bW.j)(), NF = (DF = SF.pathname).startsWith(gW.o) ? null : DF.startsWith(aW.docs) ? "docs" : DF.startsWith(aW.leaderboard) ? "leaderboard" : "myGames";
      var DF;
      const LF = function(FF) {
        if (!FF.startsWith(gW.o)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const WF = (0, PF.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== WF && WF.startsWith(aW.myGames) ? -1 : aW.myGames
        }
      }(SF.pathname);
      return (0, AF.useEffect)((() => {
        eF.b.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, tW.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [qW && (0, tW.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, tW.jsx)(rW.e, {})
        }), (0, tW.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, tW.jsxs)("div", {
            className: "StudioTop",
            children: [(0, tW.jsx)(iW.e, {
              show: !0,
              socialBarIsDocked: qW
            }), (0, tW.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, tW.jsx)(EF.c, {
                icon: LF.icon,
                onClick: () => {
                  WF(LF.to)
                },
                children: FF(LF.title)
              }), (0, tW.jsx)("div", {
                className: "StudioNavTabs",
                children: TF.map((SF => (0, tW.jsxs)(EF.N, {
                  active: NF === SF.id,
                  href: aW[SF.id],
                  onClick: () => {
                    WF(aW[SF.id])
                  },
                  children: [(0, tW.jsx)(QF.e, {
                    name: SF.icon
                  }), !VF && FF(SF.title)]
                }, SF.id)))
              })]
            })]
          }), (0, tW.jsxs)("main", {
            className: "StudioBottom",
            children: [kW && (0, tW.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, tW.jsx)(RF.c, {})
            }), !kW && (0, tW.jsx)("div", {
              className: "StudioContent",
              children: (0, tW.jsx)(CF.f, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);