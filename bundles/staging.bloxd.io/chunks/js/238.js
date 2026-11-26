export const id = 238;
export const ids = [238];
export const modules = {
  37512: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => AV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(1625),
      yV = xV(1141),
      pV = xV(812),
      QV = xV(1220),
      nV = xV(1551),
      wV = xV(1612),
      ZV = xV(3986),
      vV = xV(1414),
      rV = xV(3922),
      kV = xV(2887),
      bV = xV(1321);
    const EV = 2;

    function BV(VV) {
      return "firstPartyGame" === VV.type ? {
        type: "game",
        gameNameWithVariation: VV.gameNameWithVariation
      } : {
        type: "preview",
        preview: VV.preview
      }
    }

    function jV(VV) {
      let {
        game: eV,
        disabled: xV,
        showPlaceholder: JV
      } = VV;
      return null !== eV ? (0, bV.jsx)(rV.g, {
        source: BV(eV),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: xV,
        entrySource: "customGamePlace"
      }) : JV ? (0, bV.jsx)(rV.d, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function qV(VV) {
      var eV;
      let {
        category: xV,
        title: JV,
        tintColour: YV,
        layout: UV,
        games: yV,
        landscape: pV = !1
      } = VV;
      const {
        followsLeader: QV
      } = (0, kV.f)(), nV = null !== (eV = null === yV || void 0 === yV ? void 0 : yV.slice(0, UV.gameCount)) && void 0 !== eV ? eV : [], ZV = {
        "--custom-game-place-tint": YV
      };
      return (0, bV.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: ZV,
        children: [(0, bV.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, bV.jsxs)(wV.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(xV)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, bV.jsx)("span", {
              children: JV
            }), (0, bV.jsx)(vV.b, {
              name: "arrow-up"
            })]
          })
        }), (0, bV.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${pV?UV.columnCount:EV}, ${pV?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: UV.gameCount
          }, ((VV, eV) => {
            var xV;
            return (0, bV.jsx)(jV, {
              game: null !== (xV = nV[eV]) && void 0 !== xV ? xV : null,
              disabled: QV,
              showPlaceholder: !yV
            }, eV)
          }))
        })]
      })
    }

    function tV(VV) {
      let {
        categories: eV
      } = VV;

      function xV(VV) {
        const xV = eV[VV];
        return (0, bV.jsx)(qV, {
          ...xV,
          landscape: !0
        }, xV.id)
      }
      return (0, bV.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, bV.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, bV.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, bV.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [xV(0), xV(2)]
            }), xV(1)]
          }), xV(4)]
        }), (0, bV.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [xV(3), xV(5)]
        })]
      })
    }
    const FV = ["section1", "section2", "section3", "section4", "section5", "section6"],
      TV = {
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
    var PV = xV(1157);

    function AV() {
      var VV;
      const {
        t: eV
      } = (0, QV.A)(), xV = (0, UV.A)(), JV = (0, PV.j)(), vV = (0, ZV.d)({
        refresh: !0
      }), rV = xV.customGamePlace;
      if (!(0, yV.j)(rV)) return (0, bV.jsx)(wV.NavigatePreserveSearch, {
        to: "/"
      });
      const kV = pV.e[rV],
        EV = yV.b[rV],
        BV = null !== (VV = null === vV || void 0 === vV ? void 0 : vV[rV]) && void 0 !== VV ? VV : null,
        jV = [];
      for (let YV = 0; YV < EV.length; YV++) {
        var AV;
        const VV = FV[YV];
        if (!VV) continue;
        const xV = EV[YV];
        jV.push({
          id: xV.id,
          category: xV.category,
          title: eV(xV.displayTranslationKey),
          tintColour: xV.tintColour,
          layout: TV[VV],
          games: null !== (AV = null === BV || void 0 === BV ? void 0 : BV[xV.id]) && void 0 !== AV ? AV : null
        })
      }
      return (0, bV.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, bV.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${rV}/${kV.largePicture}.png)`
          }
        }), (0, bV.jsx)("h1", {
          className: "VisuallyHidden",
          children: eV(kV.title)
        }), (0, bV.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, bV.jsx)(nV.b, {
            onClick: () => (0, wV.navigatePreserveSearch)("/"),
            children: eV("homePage:backToGames")
          })
        }), !JV && (0, bV.jsx)(tV, {
          categories: jV
        }), JV && (0, bV.jsx)("div", {
          className: YV()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: jV.map((VV => (0, bV.jsx)(qV, {
            category: VV.category,
            title: VV.title,
            tintColour: VV.tintColour,
            layout: VV.layout,
            games: VV.games
          }, VV.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);