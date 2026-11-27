export const id = 249;
export const ids = [249];
export const modules = {
  37422: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => BR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(1677),
      ZR = GR(1155),
      qR = GR(858),
      iR = GR(1270),
      fR = GR(1590),
      VR = GR(1663),
      KR = GR(4904),
      wR = GR(1468),
      rR = GR(4824),
      eR = GR(3706),
      aR = GR(1378);
    const LR = 2;

    function nR(RR) {
      return "firstPartyGame" === RR.type ? {
        type: "game",
        gameNameWithVariation: RR.gameNameWithVariation
      } : {
        type: "preview",
        preview: RR.preview
      }
    }

    function UR(RR) {
      let {
        game: JR,
        disabled: GR,
        showPlaceholder: yR
      } = RR;
      return null !== JR ? (0, aR.jsx)(rR.i, {
        source: nR(JR),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: GR,
        entrySource: "customGamePlace"
      }) : yR ? (0, aR.jsx)(rR.e, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function WR(RR) {
      var JR;
      let {
        category: GR,
        title: yR,
        tintColour: tR,
        layout: uR,
        games: ZR,
        landscape: qR = !1
      } = RR;
      const {
        followsLeader: iR
      } = (0, eR.d)(), fR = null !== (JR = null === ZR || void 0 === ZR ? void 0 : ZR.slice(0, uR.gameCount)) && void 0 !== JR ? JR : [], KR = {
        "--custom-game-place-tint": tR
      };
      return (0, aR.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: KR,
        children: [(0, aR.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, aR.jsxs)(VR.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(GR)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, aR.jsx)("span", {
              children: yR
            }), (0, aR.jsx)(wR.d, {
              name: "arrow-up"
            })]
          })
        }), (0, aR.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${qR?uR.columnCount:LR}, ${qR?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: uR.gameCount
          }, ((RR, JR) => {
            var GR;
            return (0, aR.jsx)(UR, {
              game: null !== (GR = fR[JR]) && void 0 !== GR ? GR : null,
              disabled: iR,
              showPlaceholder: !ZR
            }, JR)
          }))
        })]
      })
    }

    function AR(RR) {
      let {
        categories: JR
      } = RR;

      function GR(RR) {
        const GR = JR[RR];
        return (0, aR.jsx)(WR, {
          ...GR,
          landscape: !0
        }, GR.id)
      }
      return (0, aR.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, aR.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, aR.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, aR.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [GR(0), GR(2)]
            }), GR(1)]
          }), GR(4)]
        }), (0, aR.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [GR(3), GR(5)]
        })]
      })
    }
    const CR = ["section1", "section2", "section3", "section4", "section5", "section6"],
      XR = {
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
    var MR = GR(1179);

    function BR() {
      var RR;
      const {
        t: JR
      } = (0, iR.A)(), GR = (0, uR.x)(), yR = (0, MR.h)(), wR = (0, KR.c)({
        refresh: !0
      }), rR = GR.customGamePlace;
      if (!(0, ZR.g)(rR)) return (0, aR.jsx)(VR.NavigatePreserveSearch, {
        to: "/"
      });
      const eR = qR.b[rR],
        LR = ZR.b[rR],
        nR = null !== (RR = null === wR || void 0 === wR ? void 0 : wR[rR]) && void 0 !== RR ? RR : null,
        UR = [];
      for (let tR = 0; tR < LR.length; tR++) {
        var BR;
        const RR = CR[tR];
        if (!RR) continue;
        const GR = LR[tR];
        UR.push({
          id: GR.id,
          category: GR.category,
          title: JR(GR.displayTranslationKey),
          tintColour: GR.tintColour,
          layout: XR[RR],
          games: null !== (BR = null === nR || void 0 === nR ? void 0 : nR[GR.id]) && void 0 !== BR ? BR : null
        })
      }
      return (0, aR.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, aR.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${rR}/${eR.largePicture}.png)`
          }
        }), (0, aR.jsx)("h1", {
          className: "VisuallyHidden",
          children: JR(eR.title)
        }), (0, aR.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, aR.jsx)(fR.d, {
            onClick: () => (0, VR.navigatePreserveSearch)("/"),
            children: JR("homePage:backToGames")
          })
        }), !yR && (0, aR.jsx)(AR, {
          categories: UR
        }), yR && (0, aR.jsx)("div", {
          className: tR()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: UR.map((RR => (0, aR.jsx)(WR, {
            category: RR.category,
            title: RR.title,
            tintColour: RR.tintColour,
            layout: RR.layout,
            games: RR.games
          }, RR.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);