export const id = 219;
export const ids = [219];
export const modules = {
  36695: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => iG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(1457),
      yG = ZG(1003),
      kG = ZG(751),
      UG = ZG(1151),
      YG = ZG(1393),
      VG = ZG(1444),
      pG = ZG(3535),
      fG = ZG(1016),
      QG = ZG(3458),
      KG = ZG(2557),
      hG = ZG(1067);
    const dG = 2;

    function JG(GG) {
      return "firstPartyGame" === GG.type ? {
        type: "game",
        gameNameWithVariation: GG.gameNameWithVariation
      } : {
        type: "preview",
        preview: GG.preview
      }
    }

    function rG(GG) {
      let {
        game: bG,
        disabled: ZG,
        showPlaceholder: wG
      } = GG;
      return null !== bG ? (0, hG.jsx)(QG.g, {
        source: JG(bG),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: ZG,
        entrySource: "customGamePlace"
      }) : wG ? (0, hG.jsx)(QG.d, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function zG(GG) {
      var bG;
      let {
        category: ZG,
        title: wG,
        tintColour: SG,
        layout: LG,
        games: yG,
        landscape: kG = !1
      } = GG;
      const {
        followsLeader: UG
      } = (0, KG.i)(), YG = null !== (bG = null === yG || void 0 === yG ? void 0 : yG.slice(0, LG.gameCount)) && void 0 !== bG ? bG : [], pG = {
        "--custom-game-place-tint": SG
      };
      return (0, hG.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: pG,
        children: [(0, hG.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, hG.jsxs)(VG.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(ZG)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, hG.jsx)("span", {
              children: wG
            }), (0, hG.jsx)(fG.c, {
              name: "arrow-up"
            })]
          })
        }), (0, hG.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${kG?LG.columnCount:dG}, ${kG?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: LG.gameCount
          }, ((GG, bG) => {
            var ZG;
            return (0, hG.jsx)(rG, {
              game: null !== (ZG = YG[bG]) && void 0 !== ZG ? ZG : null,
              disabled: UG,
              showPlaceholder: !yG
            }, bG)
          }))
        })]
      })
    }

    function EG(GG) {
      let {
        categories: bG
      } = GG;

      function ZG(GG) {
        const ZG = bG[GG];
        return (0, hG.jsx)(zG, {
          ...ZG,
          landscape: !0
        }, ZG.id)
      }
      return (0, hG.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, hG.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, hG.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, hG.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [ZG(0), ZG(2)]
            }), ZG(1)]
          }), ZG(4)]
        }), (0, hG.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [ZG(3), ZG(5)]
        })]
      })
    }
    const oG = ["section1", "section2", "section3", "section4", "section5", "section6"],
      XG = {
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
    var uG = ZG(1081);

    function iG() {
      var GG;
      const {
        t: bG
      } = (0, UG.w)(), ZG = (0, LG.v)(), wG = (0, uG.g)(), fG = (0, pG.e)({
        refresh: !0
      }), QG = ZG.customGamePlace;
      if (!(0, yG.m)(QG)) return (0, hG.jsx)(VG.NavigatePreserveSearch, {
        to: "/"
      });
      const KG = kG.d[QG],
        dG = yG.e[QG],
        JG = null !== (GG = null === fG || void 0 === fG ? void 0 : fG[QG]) && void 0 !== GG ? GG : null,
        rG = [];
      for (let SG = 0; SG < dG.length; SG++) {
        var iG;
        const GG = oG[SG];
        if (!GG) continue;
        const ZG = dG[SG];
        rG.push({
          id: ZG.id,
          category: ZG.category,
          title: bG(ZG.displayTranslationKey),
          tintColour: ZG.tintColour,
          layout: XG[GG],
          games: null !== (iG = null === JG || void 0 === JG ? void 0 : JG[ZG.id]) && void 0 !== iG ? iG : null
        })
      }
      return (0, hG.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, hG.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${QG}/${KG.largePicture}.png)`
          }
        }), (0, hG.jsx)("h1", {
          className: "VisuallyHidden",
          children: bG(KG.title)
        }), (0, hG.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, hG.jsx)(YG.b, {
            onClick: () => (0, VG.navigatePreserveSearch)("/"),
            children: bG("homePage:backToGames")
          })
        }), !wG && (0, hG.jsx)(EG, {
          categories: rG
        }), wG && (0, hG.jsx)("div", {
          className: SG()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: rG.map((GG => (0, hG.jsx)(zG, {
            category: GG.category,
            title: GG.title,
            tintColour: GG.tintColour,
            layout: GG.layout,
            games: GG.games
          }, GG.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);