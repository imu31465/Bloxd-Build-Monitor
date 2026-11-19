export const id = 211;
export const ids = [211];
export const modules = {
  35794: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => PD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(1517),
      fD = cD(1044),
      bD = cD(767),
      QD = cD(1192),
      wD = cD(1442),
      SD = cD(1508),
      BD = cD(3370),
      yD = cD(1064),
      MD = cD(3295),
      tD = cD(2456),
      ZD = cD(1093);
    const oD = 2;

    function vD(DD) {
      return "firstPartyGame" === DD.type ? {
        type: "game",
        gameNameWithVariation: DD.gameNameWithVariation
      } : {
        type: "preview",
        preview: DD.preview
      }
    }

    function ND(DD) {
      let {
        game: CD,
        disabled: cD,
        showPlaceholder: ID
      } = DD;
      return null !== CD ? (0, ZD.jsx)(MD.f, {
        source: vD(CD),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: cD,
        entrySource: "customGamePlace"
      }) : ID ? (0, ZD.jsx)(MD.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function gD(DD) {
      var CD;
      let {
        category: cD,
        title: ID,
        tintColour: pD,
        layout: iD,
        games: fD,
        landscape: bD = !1
      } = DD;
      const {
        followsLeader: QD
      } = (0, tD.d)(), wD = null !== (CD = null === fD || void 0 === fD ? void 0 : fD.slice(0, iD.gameCount)) && void 0 !== CD ? CD : [], BD = {
        "--custom-game-place-tint": pD
      };
      return (0, ZD.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: BD,
        children: [(0, ZD.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, ZD.jsxs)(SD.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(cD)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, ZD.jsx)("span", {
              children: ID
            }), (0, ZD.jsx)(yD.c, {
              name: "arrow-up"
            })]
          })
        }), (0, ZD.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${bD?iD.columnCount:oD}, ${bD?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: iD.gameCount
          }, ((DD, CD) => {
            var cD;
            return (0, ZD.jsx)(ND, {
              game: null !== (cD = wD[CD]) && void 0 !== cD ? cD : null,
              disabled: QD,
              showPlaceholder: !fD
            }, CD)
          }))
        })]
      })
    }

    function XD(DD) {
      let {
        categories: CD
      } = DD;

      function cD(DD) {
        const cD = CD[DD];
        return (0, ZD.jsx)(gD, {
          ...cD,
          landscape: !0
        }, cD.id)
      }
      return (0, ZD.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, ZD.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, ZD.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, ZD.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [cD(0), cD(2)]
            }), cD(1)]
          }), cD(4)]
        }), (0, ZD.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [cD(3), cD(5)]
        })]
      })
    }
    const mD = ["section1", "section2", "section3", "section4", "section5", "section6"],
      nD = {
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
    var OD = cD(1108);

    function PD() {
      var DD;
      const {
        t: CD
      } = (0, QD.F)(), cD = (0, iD.F)(), ID = (0, OD.o)(), yD = (0, BD.c)({
        refresh: !0
      }), MD = cD.customGamePlace;
      if (!(0, fD.m)(MD)) return (0, ZD.jsx)(SD.NavigatePreserveSearch, {
        to: "/"
      });
      const tD = bD.b[MD],
        oD = fD.c[MD],
        vD = null !== (DD = null === yD || void 0 === yD ? void 0 : yD[MD]) && void 0 !== DD ? DD : null,
        ND = [];
      for (let pD = 0; pD < oD.length; pD++) {
        var PD;
        const DD = mD[pD];
        if (!DD) continue;
        const cD = oD[pD];
        ND.push({
          id: cD.id,
          category: cD.category,
          title: CD(cD.displayTranslationKey),
          tintColour: cD.tintColour,
          layout: nD[DD],
          games: null !== (PD = null === vD || void 0 === vD ? void 0 : vD[cD.id]) && void 0 !== PD ? PD : null
        })
      }
      return (0, ZD.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, ZD.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${MD}/${tD.largePicture}.png)`
          }
        }), (0, ZD.jsx)("h1", {
          className: "VisuallyHidden",
          children: CD(tD.title)
        }), (0, ZD.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, ZD.jsx)(wD.e, {
            onClick: () => (0, SD.navigatePreserveSearch)("/"),
            children: CD("homePage:backToGames")
          })
        }), !ID && (0, ZD.jsx)(XD, {
          categories: ND
        }), ID && (0, ZD.jsx)("div", {
          className: pD()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: ND.map((DD => (0, ZD.jsx)(gD, {
            category: DD.category,
            title: DD.title,
            tintColour: DD.tintColour,
            layout: DD.layout,
            games: DD.games
          }, DD.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);