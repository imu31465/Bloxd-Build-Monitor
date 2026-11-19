export const id = 206;
export const ids = [206];
export const modules = {
  35806: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => eY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(1501),
      RY = DY(1084),
      OY = DY(778),
      gY = DY(1211),
      aY = DY(1437),
      vY = DY(1488),
      uY = DY(3155),
      sY = DY(1098),
      iY = DY(3061),
      yY = DY(2346),
      QY = DY(1125);
    const oY = 2;

    function WY(YY) {
      return "firstPartyGame" === YY.type ? {
        type: "game",
        gameNameWithVariation: YY.gameNameWithVariation
      } : {
        type: "preview",
        preview: YY.preview
      }
    }

    function EY(YY) {
      let {
        game: rY,
        disabled: DY,
        showPlaceholder: FY
      } = YY;
      return null !== rY ? (0, QY.jsx)(iY.g, {
        source: WY(rY),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: DY,
        entrySource: "customGamePlace"
      }) : FY ? (0, QY.jsx)(iY.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function mY(YY) {
      var rY;
      let {
        category: DY,
        title: FY,
        tintColour: AY,
        layout: IY,
        games: RY,
        landscape: OY = !1
      } = YY;
      const {
        followsLeader: gY
      } = (0, yY.i)(), aY = null !== (rY = null === RY || void 0 === RY ? void 0 : RY.slice(0, IY.gameCount)) && void 0 !== rY ? rY : [], uY = {
        "--custom-game-place-tint": AY
      };
      return (0, QY.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: uY,
        children: [(0, QY.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, QY.jsxs)(vY.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(DY)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, QY.jsx)("span", {
              children: FY
            }), (0, QY.jsx)(sY.e, {
              name: "arrow-up"
            })]
          })
        }), (0, QY.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${OY?IY.columnCount:oY}, ${OY?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: IY.gameCount
          }, ((YY, rY) => {
            var DY;
            return (0, QY.jsx)(EY, {
              game: null !== (DY = aY[rY]) && void 0 !== DY ? DY : null,
              disabled: gY,
              showPlaceholder: !RY
            }, rY)
          }))
        })]
      })
    }

    function VY(YY) {
      let {
        categories: rY
      } = YY;

      function DY(YY) {
        const DY = rY[YY];
        return (0, QY.jsx)(mY, {
          ...DY,
          landscape: !0
        }, DY.id)
      }
      return (0, QY.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, QY.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, QY.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, QY.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [DY(0), DY(2)]
            }), DY(1)]
          }), DY(4)]
        }), (0, QY.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [DY(3), DY(5)]
        })]
      })
    }
    const SY = ["section1", "section2", "section3", "section4", "section5", "section6"],
      lY = {
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
    var TY = DY(1134);

    function eY() {
      var YY;
      const {
        t: rY
      } = (0, gY.C)(), DY = (0, IY.D)(), FY = (0, TY.m)(), sY = (0, uY.c)({
        refresh: !0
      }), iY = DY.customGamePlace;
      if (!(0, RY.k)(iY)) return (0, QY.jsx)(vY.NavigatePreserveSearch, {
        to: "/"
      });
      const yY = OY.d[iY],
        oY = RY.c[iY],
        WY = null !== (YY = null === sY || void 0 === sY ? void 0 : sY[iY]) && void 0 !== YY ? YY : null,
        EY = [];
      for (let AY = 0; AY < oY.length; AY++) {
        var eY;
        const YY = SY[AY];
        if (!YY) continue;
        const DY = oY[AY];
        EY.push({
          id: DY.id,
          category: DY.category,
          title: rY(DY.displayTranslationKey),
          tintColour: DY.tintColour,
          layout: lY[YY],
          games: null !== (eY = null === WY || void 0 === WY ? void 0 : WY[DY.id]) && void 0 !== eY ? eY : null
        })
      }
      return (0, QY.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, QY.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${iY}/${yY.largePicture}.png)`
          }
        }), (0, QY.jsx)("h1", {
          className: "VisuallyHidden",
          children: rY(yY.title)
        }), (0, QY.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, QY.jsx)(aY.b, {
            onClick: () => (0, vY.navigatePreserveSearch)("/"),
            children: rY("homePage:backToGames")
          })
        }), !FY && (0, QY.jsx)(VY, {
          categories: EY
        }), FY && (0, QY.jsx)("div", {
          className: AY()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: EY.map((YY => (0, QY.jsx)(mY, {
            category: YY.category,
            title: YY.title,
            tintColour: YY.tintColour,
            layout: YY.layout,
            games: YY.games
          }, YY.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);