export const id = 196;
export const ids = [196];
export const modules = {
  35498: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => KJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(1421),
      XJ = ZJ(923),
      AJ = ZJ(622),
      qJ = ZJ(1086),
      jJ = ZJ(1329),
      YJ = ZJ(1406),
      hJ = ZJ(3044),
      DJ = ZJ(942),
      sJ = ZJ(2969),
      nJ = ZJ(2240),
      GJ = ZJ(990);
    const fJ = 2;

    function xJ(JJ) {
      return "firstPartyGame" === JJ.type ? {
        type: "game",
        gameNameWithVariation: JJ.gameNameWithVariation
      } : {
        type: "preview",
        preview: JJ.preview
      }
    }

    function rJ(JJ) {
      let {
        game: cJ,
        disabled: ZJ,
        showPlaceholder: FJ
      } = JJ;
      return null !== cJ ? (0, GJ.jsx)(sJ.f, {
        source: xJ(cJ),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: ZJ,
        entrySource: "customGamePlace"
      }) : FJ ? (0, GJ.jsx)(sJ.b, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function vJ(JJ) {
      var cJ;
      let {
        category: ZJ,
        title: FJ,
        tintColour: UJ,
        layout: eJ,
        games: XJ,
        landscape: AJ = !1
      } = JJ;
      const {
        followsLeader: qJ
      } = (0, nJ.g)(), jJ = null !== (cJ = null === XJ || void 0 === XJ ? void 0 : XJ.slice(0, eJ.gameCount)) && void 0 !== cJ ? cJ : [], hJ = {
        "--custom-game-place-tint": UJ
      };
      return (0, GJ.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: hJ,
        children: [(0, GJ.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, GJ.jsxs)(YJ.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(ZJ)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, GJ.jsx)("span", {
              children: FJ
            }), (0, GJ.jsx)(DJ.c, {
              name: "arrow-up"
            })]
          })
        }), (0, GJ.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${AJ?eJ.columnCount:fJ}, ${AJ?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: eJ.gameCount
          }, ((JJ, cJ) => {
            var ZJ;
            return (0, GJ.jsx)(rJ, {
              game: null !== (ZJ = jJ[cJ]) && void 0 !== ZJ ? ZJ : null,
              disabled: qJ,
              showPlaceholder: !XJ
            }, cJ)
          }))
        })]
      })
    }

    function mJ(JJ) {
      let {
        categories: cJ
      } = JJ;

      function ZJ(JJ) {
        const ZJ = cJ[JJ];
        return (0, GJ.jsx)(vJ, {
          ...ZJ,
          landscape: !0
        }, ZJ.id)
      }
      return (0, GJ.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, GJ.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, GJ.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, GJ.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [ZJ(0), ZJ(2)]
            }), ZJ(1)]
          }), ZJ(4)]
        }), (0, GJ.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [ZJ(3), ZJ(5)]
        })]
      })
    }
    const QJ = ["section1", "section2", "section3", "section4", "section5", "section6"],
      EJ = {
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
    var VJ = ZJ(1009);

    function KJ() {
      var JJ;
      const {
        t: cJ
      } = (0, qJ.F)(), ZJ = (0, eJ.x)(), FJ = (0, VJ.h)(), DJ = (0, hJ.c)({
        refresh: !0
      }), sJ = ZJ.customGamePlace;
      if (!(0, XJ.j)(sJ)) return (0, GJ.jsx)(YJ.NavigatePreserveSearch, {
        to: "/"
      });
      const nJ = AJ.d[sJ],
        fJ = XJ.c[sJ],
        xJ = null !== (JJ = null === DJ || void 0 === DJ ? void 0 : DJ[sJ]) && void 0 !== JJ ? JJ : null,
        rJ = [];
      for (let UJ = 0; UJ < fJ.length; UJ++) {
        var KJ;
        const JJ = QJ[UJ];
        if (!JJ) continue;
        const ZJ = fJ[UJ];
        rJ.push({
          id: ZJ.id,
          category: ZJ.category,
          title: cJ(ZJ.displayTranslationKey),
          tintColour: ZJ.tintColour,
          layout: EJ[JJ],
          games: null !== (KJ = null === xJ || void 0 === xJ ? void 0 : xJ[ZJ.id]) && void 0 !== KJ ? KJ : null
        })
      }
      return (0, GJ.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, GJ.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${sJ}/${nJ.largePicture}.png)`
          }
        }), (0, GJ.jsx)("h1", {
          className: "VisuallyHidden",
          children: cJ(nJ.title)
        }), (0, GJ.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, GJ.jsx)(jJ.b, {
            onClick: () => (0, YJ.navigatePreserveSearch)("/"),
            children: cJ("homePage:backToGames")
          })
        }), !FJ && (0, GJ.jsx)(mJ, {
          categories: rJ
        }), FJ && (0, GJ.jsx)("div", {
          className: UJ()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: rJ.map((JJ => (0, GJ.jsx)(vJ, {
            category: JJ.category,
            title: JJ.title,
            tintColour: JJ.tintColour,
            layout: JJ.layout,
            games: JJ.games
          }, JJ.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);