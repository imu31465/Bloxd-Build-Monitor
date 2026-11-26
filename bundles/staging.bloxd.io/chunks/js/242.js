export const id = 242;
export const ids = [242];
export const modules = {
  37051: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => UB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(1571),
      oB = GB(1082),
      jB = GB(791),
      yB = GB(1175),
      JB = GB(1485),
      MB = GB(1560),
      PB = GB(3998),
      zB = GB(1383),
      lB = GB(3926),
      pB = GB(2861),
      qB = GB(1282);
    const ZB = 2;

    function NB(BB) {
      return "firstPartyGame" === BB.type ? {
        type: "game",
        gameNameWithVariation: BB.gameNameWithVariation
      } : {
        type: "preview",
        preview: BB.preview
      }
    }

    function RB(BB) {
      let {
        game: OB,
        disabled: GB,
        showPlaceholder: YB
      } = BB;
      return null !== OB ? (0, qB.jsx)(lB.h, {
        source: NB(OB),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: GB,
        entrySource: "customGamePlace"
      }) : YB ? (0, qB.jsx)(lB.d, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function WB(BB) {
      var OB;
      let {
        category: GB,
        title: YB,
        tintColour: DB,
        layout: QB,
        games: oB,
        landscape: jB = !1
      } = BB;
      const {
        followsLeader: yB
      } = (0, pB.d)(), JB = null !== (OB = null === oB || void 0 === oB ? void 0 : oB.slice(0, QB.gameCount)) && void 0 !== OB ? OB : [], PB = {
        "--custom-game-place-tint": DB
      };
      return (0, qB.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: PB,
        children: [(0, qB.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, qB.jsxs)(MB.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(GB)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, qB.jsx)("span", {
              children: YB
            }), (0, qB.jsx)(zB.b, {
              name: "arrow-up"
            })]
          })
        }), (0, qB.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${jB?QB.columnCount:ZB}, ${jB?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: QB.gameCount
          }, ((BB, OB) => {
            var GB;
            return (0, qB.jsx)(RB, {
              game: null !== (GB = JB[OB]) && void 0 !== GB ? GB : null,
              disabled: yB,
              showPlaceholder: !oB
            }, OB)
          }))
        })]
      })
    }

    function AB(BB) {
      let {
        categories: OB
      } = BB;

      function GB(BB) {
        const GB = OB[BB];
        return (0, qB.jsx)(WB, {
          ...GB,
          landscape: !0
        }, GB.id)
      }
      return (0, qB.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, qB.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, qB.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, qB.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [GB(0), GB(2)]
            }), GB(1)]
          }), GB(4)]
        }), (0, qB.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [GB(3), GB(5)]
        })]
      })
    }
    const VB = ["section1", "section2", "section3", "section4", "section5", "section6"],
      SB = {
        section1: {
          gameCount: 4,
          columnCount: 2
        },
        section2: {
          gameCount: 6,
          columnCount: 6
        },
        section3: {
          gameCount: 8,
          columnCount: 4
        },
        section4: {
          gameCount: 6,
          columnCount: 3
        },
        section5: {
          gameCount: 3,
          columnCount: 1
        },
        section6: {
          gameCount: 8,
          columnCount: 4
        }
      };
    var nB = GB(1106);

    function UB() {
      var BB;
      const {
        t: OB
      } = (0, yB.H)(), GB = (0, QB.A)(), YB = (0, nB.g)(), zB = (0, PB.d)({
        refresh: !0
      }), lB = GB.customGamePlace;
      if (!(0, oB.m)(lB)) return (0, qB.jsx)(MB.NavigatePreserveSearch, {
        to: "/"
      });
      const pB = jB.b[lB],
        ZB = oB.d[lB],
        NB = null !== (BB = null === zB || void 0 === zB ? void 0 : zB[lB]) && void 0 !== BB ? BB : null,
        RB = [];
      for (let DB = 0; DB < ZB.length; DB++) {
        var UB;
        const BB = VB[DB];
        if (!BB) continue;
        const GB = ZB[DB];
        RB.push({
          id: GB.id,
          category: GB.category,
          title: OB(GB.displayTranslationKey),
          tintColour: GB.tintColour,
          layout: SB[BB],
          games: null !== (UB = null === NB || void 0 === NB ? void 0 : NB[GB.id]) && void 0 !== UB ? UB : null
        })
      }
      return (0, qB.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, qB.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${lB}/${pB.largePicture}.png)`
          }
        }), (0, qB.jsx)("h1", {
          className: "VisuallyHidden",
          children: OB(pB.title)
        }), (0, qB.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, qB.jsx)(JB.c, {
            onClick: () => (0, MB.navigatePreserveSearch)("/"),
            children: OB("homePage:backToGames")
          })
        }), !YB && (0, qB.jsx)(AB, {
          categories: RB
        }), YB && (0, qB.jsx)("div", {
          className: DB()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: RB.map((BB => (0, qB.jsx)(WB, {
            category: BB.category,
            title: BB.title,
            tintColour: BB.tintColour,
            layout: BB.layout,
            games: BB.games
          }, BB.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);