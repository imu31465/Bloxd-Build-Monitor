export const id = 99;
export const ids = [99];
export const modules = {
  4467: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => VY
    });
    var FY = DY(1501),
      AY = DY(61),
      IY = DY(1211),
      RY = DY(1152),
      OY = DY(1134),
      gY = DY(1941),
      aY = DY(1488),
      vY = DY(1337),
      uY = DY(1132),
      sY = DY(19),
      iY = DY(1437),
      yY = DY(1098),
      QY = DY(2335),
      oY = DY(1519),
      WY = DY(1125);
    const EY = [{
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
      mY = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function VY() {
      const {
        t: YY
      } = (0, IY.C)(), rY = (0, aY.useNavigatePreserveSearch)(), DY = (0, FY.u)(), {
        isUserContextUpdating: VY
      } = (0, RY.d)(), SY = (0, gY.e)(), lY = (0, OY.m)(), TY = (eY = DY.pathname).startsWith(oY.t) ? null : eY.startsWith(mY.docs) ? "docs" : eY.startsWith(mY.leaderboard) ? "leaderboard" : "myGames";
      var eY;
      const NY = function(YY) {
        if (!YY.startsWith(oY.t)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const rY = (0, aY.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== rY && rY.startsWith(mY.myGames) ? -1 : mY.myGames
        }
      }(DY.pathname);
      return (0, AY.useEffect)((() => {
        sY.b.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, WY.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [SY && (0, WY.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, WY.jsx)(QY.d, {})
        }), (0, WY.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, WY.jsxs)("div", {
            className: "StudioTop",
            children: [(0, WY.jsx)(uY.d, {
              show: !0,
              socialBarIsDocked: SY
            }), (0, WY.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, WY.jsx)(iY.b, {
                icon: NY.icon,
                onClick: () => {
                  rY(NY.to)
                },
                children: YY(NY.title)
              }), (0, WY.jsx)("div", {
                className: "StudioNavTabs",
                children: EY.map((DY => (0, WY.jsxs)(iY.J, {
                  active: TY === DY.id,
                  href: mY[DY.id],
                  onClick: () => {
                    rY(mY[DY.id])
                  },
                  children: [(0, WY.jsx)(yY.e, {
                    name: DY.icon
                  }), !lY && YY(DY.title)]
                }, DY.id)))
              })]
            })]
          }), (0, WY.jsxs)("main", {
            className: "StudioBottom",
            children: [VY && (0, WY.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, WY.jsx)(vY.c, {})
            }), !VY && (0, WY.jsx)("div", {
              className: "StudioContent",
              children: (0, WY.jsx)(FY.h, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);