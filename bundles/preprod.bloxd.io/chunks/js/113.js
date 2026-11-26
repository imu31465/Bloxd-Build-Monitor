export const id = 113;
export const ids = [113];
export const modules = {
  5375: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => PH
    });
    var AH = LH(1520),
      rH = LH(45),
      SH = LH(1123),
      hH = LH(1061),
      tH = LH(1049),
      zH = LH(2158),
      CH = LH(1509),
      EH = LH(1313),
      XH = LH(1045),
      GH = LH(15),
      YH = LH(1455),
      uH = LH(1315),
      QH = LH(2809),
      WH = LH(1536),
      MH = LH(1225);
    const xH = [{
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
      vH = {
        myGames: "/studio",
        leaderboard: "/studio/leaderboard",
        docs: "/studio/docs"
      };

    function PH() {
      const {
        t: HH
      } = (0, SH.B)(), BH = (0, CH.useNavigatePreserveSearch)(), LH = (0, AH.s)(), {
        isUserContextUpdating: PH
      } = (0, hH.e)(), TH = (0, zH.b)(), UH = (0, tH.k)(), VH = (OH = LH.pathname).startsWith(WH.x) ? null : OH.startsWith(vH.docs) ? "docs" : OH.startsWith(vH.leaderboard) ? "leaderboard" : "myGames";
      var OH;
      const bH = function(HH) {
        if (!HH.startsWith(WH.x)) return {
          title: "studio:leaveStudio",
          icon: "left-from-bracket",
          to: "/"
        };
        const BH = (0, CH.getPreviousLocation)();
        return {
          title: "general:back",
          icon: "arrow-left",
          to: null !== BH && BH.startsWith(vH.myGames) ? -1 : vH.myGames
        }
      }(LH.pathname);
      return (0, rH.useEffect)((() => {
        GH.c.set({
          gameState: "studio",
          openEverythingMenuName: null
        })
      }), []), (0, MH.jsxs)("div", {
        className: "StudioLayout AnimFadeIn",
        children: [TH && (0, MH.jsx)("aside", {
          className: "StudioLayoutLeft",
          children: (0, MH.jsx)(QH.d, {})
        }), (0, MH.jsxs)("div", {
          className: "StudioLayoutRight",
          children: [(0, MH.jsxs)("div", {
            className: "StudioTop",
            children: [(0, MH.jsx)(XH.d, {
              show: !0,
              socialBarIsDocked: TH
            }), (0, MH.jsxs)("nav", {
              className: "StudioNav",
              children: [(0, MH.jsx)(YH.e, {
                icon: bH.icon,
                onClick: () => {
                  BH(bH.to)
                },
                children: HH(bH.title)
              }), (0, MH.jsx)("div", {
                className: "StudioNavTabs",
                children: xH.map((LH => (0, MH.jsxs)(YH.W, {
                  active: VH === LH.id,
                  href: vH[LH.id],
                  onClick: () => {
                    BH(vH[LH.id])
                  },
                  children: [(0, MH.jsx)(uH.c, {
                    name: LH.icon
                  }), !UH && HH(LH.title)]
                }, LH.id)))
              })]
            })]
          }), (0, MH.jsxs)("main", {
            className: "StudioBottom",
            children: [PH && (0, MH.jsx)("div", {
              className: "StudioCentredMessage",
              children: (0, MH.jsx)(EH.d, {})
            }), !PH && (0, MH.jsx)("div", {
              className: "StudioContent",
              children: (0, MH.jsx)(AH.g, {})
            })]
          })]
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);