export const id = 196;
export const ids = [196];
export const modules = {
  35410: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => sB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(1422),
      lB = dB(931),
      JB = dB(663),
      YB = dB(1078),
      gB = dB(1324),
      oB = dB(1407),
      kB = dB(3052),
      LB = dB(946),
      OB = dB(2971),
      DB = dB(2195),
      uB = dB(980);
    const HB = 2;

    function EB(BB) {
      return "firstPartyGame" === BB.type ? {
        type: "game",
        gameNameWithVariation: BB.gameNameWithVariation
      } : {
        type: "preview",
        preview: BB.preview
      }
    }

    function vB(BB) {
      let {
        game: TB,
        disabled: dB,
        showPlaceholder: VB
      } = BB;
      return null !== TB ? (0, uB.jsx)(OB.f, {
        source: EB(TB),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: dB,
        entrySource: "customGamePlace"
      }) : VB ? (0, uB.jsx)(OB.d, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function mB(BB) {
      var TB;
      let {
        category: dB,
        title: VB,
        tintColour: yB,
        layout: pB,
        games: lB,
        landscape: JB = !1
      } = BB;
      const {
        followsLeader: YB
      } = (0, DB.f)(), gB = null !== (TB = null === lB || void 0 === lB ? void 0 : lB.slice(0, pB.gameCount)) && void 0 !== TB ? TB : [], kB = {
        "--custom-game-place-tint": yB
      };
      return (0, uB.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: kB,
        children: [(0, uB.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, uB.jsxs)(oB.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(dB)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, uB.jsx)("span", {
              children: VB
            }), (0, uB.jsx)(LB.e, {
              name: "arrow-up"
            })]
          })
        }), (0, uB.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${JB?pB.columnCount:HB}, ${JB?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: pB.gameCount
          }, ((BB, TB) => {
            var dB;
            return (0, uB.jsx)(vB, {
              game: null !== (dB = gB[TB]) && void 0 !== dB ? dB : null,
              disabled: YB,
              showPlaceholder: !lB
            }, TB)
          }))
        })]
      })
    }

    function iB(BB) {
      let {
        categories: TB
      } = BB;

      function dB(BB) {
        const dB = TB[BB];
        return (0, uB.jsx)(mB, {
          ...dB,
          landscape: !0
        }, dB.id)
      }
      return (0, uB.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, uB.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, uB.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, uB.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [dB(0), dB(2)]
            }), dB(1)]
          }), dB(4)]
        }), (0, uB.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [dB(3), dB(5)]
        })]
      })
    }
    const NB = ["section1", "section2", "section3", "section4", "section5", "section6"],
      tB = {
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
    var fB = dB(993);

    function sB() {
      var BB;
      const {
        t: TB
      } = (0, YB.z)(), dB = (0, pB.u)(), VB = (0, fB.i)(), LB = (0, kB.d)({
        refresh: !0
      }), OB = dB.customGamePlace;
      if (!(0, lB.m)(OB)) return (0, uB.jsx)(oB.NavigatePreserveSearch, {
        to: "/"
      });
      const DB = JB.e[OB],
        HB = lB.b[OB],
        EB = null !== (BB = null === LB || void 0 === LB ? void 0 : LB[OB]) && void 0 !== BB ? BB : null,
        vB = [];
      for (let yB = 0; yB < HB.length; yB++) {
        var sB;
        const BB = NB[yB];
        if (!BB) continue;
        const dB = HB[yB];
        vB.push({
          id: dB.id,
          category: dB.category,
          title: TB(dB.displayTranslationKey),
          tintColour: dB.tintColour,
          layout: tB[BB],
          games: null !== (sB = null === EB || void 0 === EB ? void 0 : EB[dB.id]) && void 0 !== sB ? sB : null
        })
      }
      return (0, uB.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, uB.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${OB}/${DB.largePicture}.png)`
          }
        }), (0, uB.jsx)("h1", {
          className: "VisuallyHidden",
          children: TB(DB.title)
        }), (0, uB.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, uB.jsx)(gB.b, {
            onClick: () => (0, oB.navigatePreserveSearch)("/"),
            children: TB("homePage:backToGames")
          })
        }), !VB && (0, uB.jsx)(iB, {
          categories: vB
        }), VB && (0, uB.jsx)("div", {
          className: yB()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: vB.map((BB => (0, uB.jsx)(mB, {
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