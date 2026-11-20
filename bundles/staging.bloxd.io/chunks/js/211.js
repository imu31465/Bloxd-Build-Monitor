export const id = 211;
export const ids = [211];
export const modules = {
  35965: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => wU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(1481),
      PU = gU(1028),
      TU = gU(731),
      qU = gU(1181),
      KU = gU(1412),
      cU = gU(1475),
      GU = gU(3246),
      jU = gU(1049),
      uU = gU(3176),
      CU = gU(2360),
      hU = gU(1090);
    const QU = 2;

    function eU(UU) {
      return "firstPartyGame" === UU.type ? {
        type: "game",
        gameNameWithVariation: UU.gameNameWithVariation
      } : {
        type: "preview",
        preview: UU.preview
      }
    }

    function WU(UU) {
      let {
        game: RU,
        disabled: gU,
        showPlaceholder: tU
      } = UU;
      return null !== RU ? (0, hU.jsx)(uU.f, {
        source: eU(RU),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: gU,
        entrySource: "customGamePlace"
      }) : tU ? (0, hU.jsx)(uU.b, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function fU(UU) {
      var RU;
      let {
        category: gU,
        title: tU,
        tintColour: pU,
        layout: EU,
        games: PU,
        landscape: TU = !1
      } = UU;
      const {
        followsLeader: qU
      } = (0, CU.g)(), KU = null !== (RU = null === PU || void 0 === PU ? void 0 : PU.slice(0, EU.gameCount)) && void 0 !== RU ? RU : [], GU = {
        "--custom-game-place-tint": pU
      };
      return (0, hU.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: GU,
        children: [(0, hU.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, hU.jsxs)(cU.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(gU)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, hU.jsx)("span", {
              children: tU
            }), (0, hU.jsx)(jU.c, {
              name: "arrow-up"
            })]
          })
        }), (0, hU.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${TU?EU.columnCount:QU}, ${TU?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: EU.gameCount
          }, ((UU, RU) => {
            var gU;
            return (0, hU.jsx)(WU, {
              game: null !== (gU = KU[RU]) && void 0 !== gU ? gU : null,
              disabled: qU,
              showPlaceholder: !PU
            }, RU)
          }))
        })]
      })
    }

    function xU(UU) {
      let {
        categories: RU
      } = UU;

      function gU(UU) {
        const gU = RU[UU];
        return (0, hU.jsx)(fU, {
          ...gU,
          landscape: !0
        }, gU.id)
      }
      return (0, hU.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, hU.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, hU.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, hU.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [gU(0), gU(2)]
            }), gU(1)]
          }), gU(4)]
        }), (0, hU.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [gU(3), gU(5)]
        })]
      })
    }
    const mU = ["section1", "section2", "section3", "section4", "section5", "section6"],
      IU = {
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
    var JU = gU(1099);

    function wU() {
      var UU;
      const {
        t: RU
      } = (0, qU.B)(), gU = (0, EU.y)(), tU = (0, JU.k)(), jU = (0, GU.b)({
        refresh: !0
      }), uU = gU.customGamePlace;
      if (!(0, PU.k)(uU)) return (0, hU.jsx)(cU.NavigatePreserveSearch, {
        to: "/"
      });
      const CU = TU.d[uU],
        QU = PU.e[uU],
        eU = null !== (UU = null === jU || void 0 === jU ? void 0 : jU[uU]) && void 0 !== UU ? UU : null,
        WU = [];
      for (let pU = 0; pU < QU.length; pU++) {
        var wU;
        const UU = mU[pU];
        if (!UU) continue;
        const gU = QU[pU];
        WU.push({
          id: gU.id,
          category: gU.category,
          title: RU(gU.displayTranslationKey),
          tintColour: gU.tintColour,
          layout: IU[UU],
          games: null !== (wU = null === eU || void 0 === eU ? void 0 : eU[gU.id]) && void 0 !== wU ? wU : null
        })
      }
      return (0, hU.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, hU.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${uU}/${CU.largePicture}.png)`
          }
        }), (0, hU.jsx)("h1", {
          className: "VisuallyHidden",
          children: RU(CU.title)
        }), (0, hU.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, hU.jsx)(KU.d, {
            onClick: () => (0, cU.navigatePreserveSearch)("/"),
            children: RU("homePage:backToGames")
          })
        }), !tU && (0, hU.jsx)(xU, {
          categories: WU
        }), tU && (0, hU.jsx)("div", {
          className: pU()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: WU.map((UU => (0, hU.jsx)(fU, {
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