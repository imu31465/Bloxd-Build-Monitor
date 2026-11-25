export const id = 223;
export const ids = [223];
export const modules = {
  36667: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => dQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(1581),
      zQ = XQ(1073),
      sQ = XQ(814),
      FQ = XQ(1226),
      PQ = XQ(1507),
      gQ = XQ(1567),
      JQ = XQ(3803),
      rQ = XQ(1094),
      IQ = XQ(3732),
      jQ = XQ(2743),
      BQ = XQ(1145);
    const yQ = 2;

    function VQ(QQ) {
      return "firstPartyGame" === QQ.type ? {
        type: "game",
        gameNameWithVariation: QQ.gameNameWithVariation
      } : {
        type: "preview",
        preview: QQ.preview
      }
    }

    function DQ(QQ) {
      let {
        game: WQ,
        disabled: XQ,
        showPlaceholder: wQ
      } = QQ;
      return null !== WQ ? (0, BQ.jsx)(IQ.d, {
        source: VQ(WQ),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: XQ,
        entrySource: "customGamePlace"
      }) : wQ ? (0, BQ.jsx)(IQ.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function pQ(QQ) {
      var WQ;
      let {
        category: XQ,
        title: wQ,
        tintColour: qQ,
        layout: TQ,
        games: zQ,
        landscape: sQ = !1
      } = QQ;
      const {
        followsLeader: FQ
      } = (0, jQ.d)(), PQ = null !== (WQ = null === zQ || void 0 === zQ ? void 0 : zQ.slice(0, TQ.gameCount)) && void 0 !== WQ ? WQ : [], JQ = {
        "--custom-game-place-tint": qQ
      };
      return (0, BQ.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: JQ,
        children: [(0, BQ.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, BQ.jsxs)(gQ.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(XQ)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, BQ.jsx)("span", {
              children: wQ
            }), (0, BQ.jsx)(rQ.d, {
              name: "arrow-up"
            })]
          })
        }), (0, BQ.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${sQ?TQ.columnCount:yQ}, ${sQ?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: TQ.gameCount
          }, ((QQ, WQ) => {
            var XQ;
            return (0, BQ.jsx)(DQ, {
              game: null !== (XQ = PQ[WQ]) && void 0 !== XQ ? XQ : null,
              disabled: FQ,
              showPlaceholder: !zQ
            }, WQ)
          }))
        })]
      })
    }

    function GQ(QQ) {
      let {
        categories: WQ
      } = QQ;

      function XQ(QQ) {
        const XQ = WQ[QQ];
        return (0, BQ.jsx)(pQ, {
          ...XQ,
          landscape: !0
        }, XQ.id)
      }
      return (0, BQ.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, BQ.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, BQ.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, BQ.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [XQ(0), XQ(2)]
            }), XQ(1)]
          }), XQ(4)]
        }), (0, BQ.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [XQ(3), XQ(5)]
        })]
      })
    }
    const UQ = ["section1", "section2", "section3", "section4", "section5", "section6"],
      bQ = {
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
    var vQ = XQ(1154);

    function dQ() {
      var QQ;
      const {
        t: WQ
      } = (0, FQ.C)(), XQ = (0, TQ.E)(), wQ = (0, vQ.i)(), rQ = (0, JQ.e)({
        refresh: !0
      }), IQ = XQ.customGamePlace;
      if (!(0, zQ.o)(IQ)) return (0, BQ.jsx)(gQ.NavigatePreserveSearch, {
        to: "/"
      });
      const jQ = sQ.e[IQ],
        yQ = zQ.e[IQ],
        VQ = null !== (QQ = null === rQ || void 0 === rQ ? void 0 : rQ[IQ]) && void 0 !== QQ ? QQ : null,
        DQ = [];
      for (let qQ = 0; qQ < yQ.length; qQ++) {
        var dQ;
        const QQ = UQ[qQ];
        if (!QQ) continue;
        const XQ = yQ[qQ];
        DQ.push({
          id: XQ.id,
          category: XQ.category,
          title: WQ(XQ.displayTranslationKey),
          tintColour: XQ.tintColour,
          layout: bQ[QQ],
          games: null !== (dQ = null === VQ || void 0 === VQ ? void 0 : VQ[XQ.id]) && void 0 !== dQ ? dQ : null
        })
      }
      return (0, BQ.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, BQ.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${IQ}/${jQ.largePicture}.png)`
          }
        }), (0, BQ.jsx)("h1", {
          className: "VisuallyHidden",
          children: WQ(jQ.title)
        }), (0, BQ.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, BQ.jsx)(PQ.e, {
            onClick: () => (0, gQ.navigatePreserveSearch)("/"),
            children: WQ("homePage:backToGames")
          })
        }), !wQ && (0, BQ.jsx)(GQ, {
          categories: DQ
        }), wQ && (0, BQ.jsx)("div", {
          className: qQ()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: DQ.map((QQ => (0, BQ.jsx)(pQ, {
            category: QQ.category,
            title: QQ.title,
            tintColour: QQ.tintColour,
            layout: QQ.layout,
            games: QQ.games
          }, QQ.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);