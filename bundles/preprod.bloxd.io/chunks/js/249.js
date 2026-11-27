export const id = 249;
export const ids = [249];
export const modules = {
  37511: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => yW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(1616),
      PW = OW(1081),
      LW = OW(805),
      cW = OW(1172),
      wW = OW(1532),
      tW = OW(1605),
      ZW = OW(4796),
      xW = OW(1391),
      lW = OW(4718),
      AW = OW(3602),
      bW = OW(1283);
    const jW = 2;

    function UW(WW) {
      return "firstPartyGame" === WW.type ? {
        type: "game",
        gameNameWithVariation: WW.gameNameWithVariation
      } : {
        type: "preview",
        preview: WW.preview
      }
    }

    function kW(WW) {
      let {
        game: iW,
        disabled: OW,
        showPlaceholder: mW
      } = WW;
      return null !== iW ? (0, bW.jsx)(lW.d, {
        source: UW(iW),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: OW,
        entrySource: "customGamePlace"
      }) : mW ? (0, bW.jsx)(lW.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function sW(WW) {
      var iW;
      let {
        category: OW,
        title: mW,
        tintColour: EW,
        layout: NW,
        games: PW,
        landscape: LW = !1
      } = WW;
      const {
        followsLeader: cW
      } = (0, AW.d)(), wW = null !== (iW = null === PW || void 0 === PW ? void 0 : PW.slice(0, NW.gameCount)) && void 0 !== iW ? iW : [], ZW = {
        "--custom-game-place-tint": EW
      };
      return (0, bW.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: ZW,
        children: [(0, bW.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, bW.jsxs)(tW.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(OW)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, bW.jsx)("span", {
              children: mW
            }), (0, bW.jsx)(xW.c, {
              name: "arrow-up"
            })]
          })
        }), (0, bW.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${LW?NW.columnCount:jW}, ${LW?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: NW.gameCount
          }, ((WW, iW) => {
            var OW;
            return (0, bW.jsx)(kW, {
              game: null !== (OW = wW[iW]) && void 0 !== OW ? OW : null,
              disabled: cW,
              showPlaceholder: !PW
            }, iW)
          }))
        })]
      })
    }

    function MW(WW) {
      let {
        categories: iW
      } = WW;

      function OW(WW) {
        const OW = iW[WW];
        return (0, bW.jsx)(sW, {
          ...OW,
          landscape: !0
        }, OW.id)
      }
      return (0, bW.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, bW.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, bW.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, bW.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [OW(0), OW(2)]
            }), OW(1)]
          }), OW(4)]
        }), (0, bW.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [OW(3), OW(5)]
        })]
      })
    }
    const KW = ["section1", "section2", "section3", "section4", "section5", "section6"],
      SW = {
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
    var YW = OW(1095);

    function yW() {
      var WW;
      const {
        t: iW
      } = (0, cW.B)(), OW = (0, NW.z)(), mW = (0, YW.h)(), xW = (0, ZW.e)({
        refresh: !0
      }), lW = OW.customGamePlace;
      if (!(0, PW.k)(lW)) return (0, bW.jsx)(tW.NavigatePreserveSearch, {
        to: "/"
      });
      const AW = LW.d[lW],
        jW = PW.d[lW],
        UW = null !== (WW = null === xW || void 0 === xW ? void 0 : xW[lW]) && void 0 !== WW ? WW : null,
        kW = [];
      for (let EW = 0; EW < jW.length; EW++) {
        var yW;
        const WW = KW[EW];
        if (!WW) continue;
        const OW = jW[EW];
        kW.push({
          id: OW.id,
          category: OW.category,
          title: iW(OW.displayTranslationKey),
          tintColour: OW.tintColour,
          layout: SW[WW],
          games: null !== (yW = null === UW || void 0 === UW ? void 0 : UW[OW.id]) && void 0 !== yW ? yW : null
        })
      }
      return (0, bW.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, bW.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${lW}/${AW.largePicture}.png)`
          }
        }), (0, bW.jsx)("h1", {
          className: "VisuallyHidden",
          children: iW(AW.title)
        }), (0, bW.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, bW.jsx)(wW.b, {
            onClick: () => (0, tW.navigatePreserveSearch)("/"),
            children: iW("homePage:backToGames")
          })
        }), !mW && (0, bW.jsx)(MW, {
          categories: kW
        }), mW && (0, bW.jsx)("div", {
          className: EW()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: kW.map((WW => (0, bW.jsx)(sW, {
            category: WW.category,
            title: WW.title,
            tintColour: WW.tintColour,
            layout: WW.layout,
            games: WW.games
          }, WW.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);