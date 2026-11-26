export const id = 233;
export const ids = [233];
export const modules = {
  37074: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => WU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(1577),
      AU = zU(1103),
      FU = zU(825),
      oU = zU(1193),
      DU = zU(1494),
      EU = zU(1568),
      YU = zU(3952),
      NU = zU(1390),
      IU = zU(3869),
      pU = zU(2833),
      aU = zU(1305);
    const tU = 2;

    function gU(UU) {
      return "firstPartyGame" === UU.type ? {
        type: "game",
        gameNameWithVariation: UU.gameNameWithVariation
      } : {
        type: "preview",
        preview: UU.preview
      }
    }

    function kU(UU) {
      let {
        game: XU,
        disabled: zU,
        showPlaceholder: cU
      } = UU;
      return null !== XU ? (0, aU.jsx)(IU.g, {
        source: gU(XU),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: zU,
        entrySource: "customGamePlace"
      }) : cU ? (0, aU.jsx)(IU.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function GU(UU) {
      var XU;
      let {
        category: zU,
        title: cU,
        tintColour: yU,
        layout: QU,
        games: AU,
        landscape: FU = !1
      } = UU;
      const {
        followsLeader: oU
      } = (0, pU.g)(), DU = null !== (XU = null === AU || void 0 === AU ? void 0 : AU.slice(0, QU.gameCount)) && void 0 !== XU ? XU : [], YU = {
        "--custom-game-place-tint": yU
      };
      return (0, aU.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: YU,
        children: [(0, aU.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, aU.jsxs)(EU.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(zU)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, aU.jsx)("span", {
              children: cU
            }), (0, aU.jsx)(NU.d, {
              name: "arrow-up"
            })]
          })
        }), (0, aU.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${FU?QU.columnCount:tU}, ${FU?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: QU.gameCount
          }, ((UU, XU) => {
            var zU;
            return (0, aU.jsx)(kU, {
              game: null !== (zU = DU[XU]) && void 0 !== zU ? zU : null,
              disabled: oU,
              showPlaceholder: !AU
            }, XU)
          }))
        })]
      })
    }

    function BU(UU) {
      let {
        categories: XU
      } = UU;

      function zU(UU) {
        const zU = XU[UU];
        return (0, aU.jsx)(GU, {
          ...zU,
          landscape: !0
        }, zU.id)
      }
      return (0, aU.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, aU.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, aU.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, aU.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [zU(0), zU(2)]
            }), zU(1)]
          }), zU(4)]
        }), (0, aU.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [zU(3), zU(5)]
        })]
      })
    }
    const ZU = ["section1", "section2", "section3", "section4", "section5", "section6"],
      RU = {
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
    var PU = zU(1115);

    function WU() {
      var UU;
      const {
        t: XU
      } = (0, oU.I)(), zU = (0, QU.C)(), cU = (0, PU.h)(), NU = (0, YU.c)({
        refresh: !0
      }), IU = zU.customGamePlace;
      if (!(0, AU.k)(IU)) return (0, aU.jsx)(EU.NavigatePreserveSearch, {
        to: "/"
      });
      const pU = FU.d[IU],
        tU = AU.c[IU],
        gU = null !== (UU = null === NU || void 0 === NU ? void 0 : NU[IU]) && void 0 !== UU ? UU : null,
        kU = [];
      for (let yU = 0; yU < tU.length; yU++) {
        var WU;
        const UU = ZU[yU];
        if (!UU) continue;
        const zU = tU[yU];
        kU.push({
          id: zU.id,
          category: zU.category,
          title: XU(zU.displayTranslationKey),
          tintColour: zU.tintColour,
          layout: RU[UU],
          games: null !== (WU = null === gU || void 0 === gU ? void 0 : gU[zU.id]) && void 0 !== WU ? WU : null
        })
      }
      return (0, aU.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, aU.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${IU}/${pU.largePicture}.png)`
          }
        }), (0, aU.jsx)("h1", {
          className: "VisuallyHidden",
          children: XU(pU.title)
        }), (0, aU.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, aU.jsx)(DU.e, {
            onClick: () => (0, EU.navigatePreserveSearch)("/"),
            children: XU("homePage:backToGames")
          })
        }), !cU && (0, aU.jsx)(BU, {
          categories: kU
        }), cU && (0, aU.jsx)("div", {
          className: yU()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: kU.map((UU => (0, aU.jsx)(GU, {
            category: UU.category,
            title: UU.title,
            tintColour: UU.tintColour,
            layout: UU.layout,
            games: UU.games
          }, UU.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);