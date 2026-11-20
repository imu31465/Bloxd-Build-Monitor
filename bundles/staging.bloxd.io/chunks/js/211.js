export const id = 211;
export const ids = [211];
export const modules = {
  36180: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => PT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(1535),
      OT = cT(1043),
      yT = cT(761),
      fT = cT(1195),
      xT = cT(1470),
      IT = cT(1530),
      AT = cT(3515),
      CT = cT(1061),
      jT = cT(3419),
      vT = cT(2589),
      tT = cT(1099);
    const hT = 2;

    function NT(TT) {
      return "firstPartyGame" === TT.type ? {
        type: "game",
        gameNameWithVariation: TT.gameNameWithVariation
      } : {
        type: "preview",
        preview: TT.preview
      }
    }

    function QT(TT) {
      let {
        game: kT,
        disabled: cT,
        showPlaceholder: lT
      } = TT;
      return null !== kT ? (0, tT.jsx)(jT.d, {
        source: NT(kT),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: cT,
        entrySource: "customGamePlace"
      }) : lT ? (0, tT.jsx)(jT.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function ST(TT) {
      var kT;
      let {
        category: cT,
        title: lT,
        tintColour: MT,
        layout: KT,
        games: OT,
        landscape: yT = !1
      } = TT;
      const {
        followsLeader: fT
      } = (0, vT.f)(), xT = null !== (kT = null === OT || void 0 === OT ? void 0 : OT.slice(0, KT.gameCount)) && void 0 !== kT ? kT : [], AT = {
        "--custom-game-place-tint": MT
      };
      return (0, tT.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: AT,
        children: [(0, tT.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, tT.jsxs)(IT.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(cT)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, tT.jsx)("span", {
              children: lT
            }), (0, tT.jsx)(CT.e, {
              name: "arrow-up"
            })]
          })
        }), (0, tT.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${yT?KT.columnCount:hT}, ${yT?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: KT.gameCount
          }, ((TT, kT) => {
            var cT;
            return (0, tT.jsx)(QT, {
              game: null !== (cT = xT[kT]) && void 0 !== cT ? cT : null,
              disabled: fT,
              showPlaceholder: !OT
            }, kT)
          }))
        })]
      })
    }

    function DT(TT) {
      let {
        categories: kT
      } = TT;

      function cT(TT) {
        const cT = kT[TT];
        return (0, tT.jsx)(ST, {
          ...cT,
          landscape: !0
        }, cT.id)
      }
      return (0, tT.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, tT.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, tT.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, tT.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [cT(0), cT(2)]
            }), cT(1)]
          }), cT(4)]
        }), (0, tT.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [cT(3), cT(5)]
        })]
      })
    }
    const aT = ["section1", "section2", "section3", "section4", "section5", "section6"],
      FT = {
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
    var rT = cT(1117);

    function PT() {
      var TT;
      const {
        t: kT
      } = (0, fT.B)(), cT = (0, KT.v)(), lT = (0, rT.i)(), CT = (0, AT.d)({
        refresh: !0
      }), jT = cT.customGamePlace;
      if (!(0, OT.l)(jT)) return (0, tT.jsx)(IT.NavigatePreserveSearch, {
        to: "/"
      });
      const vT = yT.e[jT],
        hT = OT.b[jT],
        NT = null !== (TT = null === CT || void 0 === CT ? void 0 : CT[jT]) && void 0 !== TT ? TT : null,
        QT = [];
      for (let MT = 0; MT < hT.length; MT++) {
        var PT;
        const TT = aT[MT];
        if (!TT) continue;
        const cT = hT[MT];
        QT.push({
          id: cT.id,
          category: cT.category,
          title: kT(cT.displayTranslationKey),
          tintColour: cT.tintColour,
          layout: FT[TT],
          games: null !== (PT = null === NT || void 0 === NT ? void 0 : NT[cT.id]) && void 0 !== PT ? PT : null
        })
      }
      return (0, tT.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, tT.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${jT}/${vT.largePicture}.png)`
          }
        }), (0, tT.jsx)("h1", {
          className: "VisuallyHidden",
          children: kT(vT.title)
        }), (0, tT.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, tT.jsx)(xT.b, {
            onClick: () => (0, IT.navigatePreserveSearch)("/"),
            children: kT("homePage:backToGames")
          })
        }), !lT && (0, tT.jsx)(DT, {
          categories: QT
        }), lT && (0, tT.jsx)("div", {
          className: MT()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: QT.map((TT => (0, tT.jsx)(ST, {
            category: TT.category,
            title: TT.title,
            tintColour: TT.tintColour,
            layout: TT.layout,
            games: TT.games
          }, TT.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);