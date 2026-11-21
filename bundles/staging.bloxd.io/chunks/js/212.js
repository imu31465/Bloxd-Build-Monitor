export const id = 212;
export const ids = [212];
export const modules = {
  36030: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => iQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(1515),
      DQ = wQ(1061),
      kQ = wQ(745),
      vQ = wQ(1207),
      mQ = wQ(1451),
      uQ = wQ(1503),
      HQ = wQ(3433),
      bQ = wQ(1079),
      YQ = wQ(3356),
      xQ = wQ(2475),
      AQ = wQ(1107);
    const tQ = 2;

    function eQ(QQ) {
      return "firstPartyGame" === QQ.type ? {
        type: "game",
        gameNameWithVariation: QQ.gameNameWithVariation
      } : {
        type: "preview",
        preview: QQ.preview
      }
    }

    function MQ(QQ) {
      let {
        game: FQ,
        disabled: wQ,
        showPlaceholder: LQ
      } = QQ;
      return null !== FQ ? (0, AQ.jsx)(YQ.f, {
        source: eQ(FQ),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: wQ,
        entrySource: "customGamePlace"
      }) : LQ ? (0, AQ.jsx)(YQ.d, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function GQ(QQ) {
      var FQ;
      let {
        category: wQ,
        title: LQ,
        tintColour: qQ,
        layout: oQ,
        games: DQ,
        landscape: kQ = !1
      } = QQ;
      const {
        followsLeader: vQ
      } = (0, xQ.d)(), mQ = null !== (FQ = null === DQ || void 0 === DQ ? void 0 : DQ.slice(0, oQ.gameCount)) && void 0 !== FQ ? FQ : [], HQ = {
        "--custom-game-place-tint": qQ
      };
      return (0, AQ.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: HQ,
        children: [(0, AQ.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, AQ.jsxs)(uQ.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(wQ)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, AQ.jsx)("span", {
              children: LQ
            }), (0, AQ.jsx)(bQ.c, {
              name: "arrow-up"
            })]
          })
        }), (0, AQ.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${kQ?oQ.columnCount:tQ}, ${kQ?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: oQ.gameCount
          }, ((QQ, FQ) => {
            var wQ;
            return (0, AQ.jsx)(MQ, {
              game: null !== (wQ = mQ[FQ]) && void 0 !== wQ ? wQ : null,
              disabled: vQ,
              showPlaceholder: !DQ
            }, FQ)
          }))
        })]
      })
    }

    function pQ(QQ) {
      let {
        categories: FQ
      } = QQ;

      function wQ(QQ) {
        const wQ = FQ[QQ];
        return (0, AQ.jsx)(GQ, {
          ...wQ,
          landscape: !0
        }, wQ.id)
      }
      return (0, AQ.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, AQ.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, AQ.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, AQ.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [wQ(0), wQ(2)]
            }), wQ(1)]
          }), wQ(4)]
        }), (0, AQ.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [wQ(3), wQ(5)]
        })]
      })
    }
    const cQ = ["section1", "section2", "section3", "section4", "section5", "section6"],
      CQ = {
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
    var SQ = wQ(1130);

    function iQ() {
      var QQ;
      const {
        t: FQ
      } = (0, vQ.y)(), wQ = (0, oQ.y)(), LQ = (0, SQ.i)(), bQ = (0, HQ.b)({
        refresh: !0
      }), YQ = wQ.customGamePlace;
      if (!(0, DQ.k)(YQ)) return (0, AQ.jsx)(uQ.NavigatePreserveSearch, {
        to: "/"
      });
      const xQ = kQ.e[YQ],
        tQ = DQ.c[YQ],
        eQ = null !== (QQ = null === bQ || void 0 === bQ ? void 0 : bQ[YQ]) && void 0 !== QQ ? QQ : null,
        MQ = [];
      for (let qQ = 0; qQ < tQ.length; qQ++) {
        var iQ;
        const QQ = cQ[qQ];
        if (!QQ) continue;
        const wQ = tQ[qQ];
        MQ.push({
          id: wQ.id,
          category: wQ.category,
          title: FQ(wQ.displayTranslationKey),
          tintColour: wQ.tintColour,
          layout: CQ[QQ],
          games: null !== (iQ = null === eQ || void 0 === eQ ? void 0 : eQ[wQ.id]) && void 0 !== iQ ? iQ : null
        })
      }
      return (0, AQ.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, AQ.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${YQ}/${xQ.largePicture}.png)`
          }
        }), (0, AQ.jsx)("h1", {
          className: "VisuallyHidden",
          children: FQ(xQ.title)
        }), (0, AQ.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, AQ.jsx)(mQ.b, {
            onClick: () => (0, uQ.navigatePreserveSearch)("/"),
            children: FQ("homePage:backToGames")
          })
        }), !LQ && (0, AQ.jsx)(pQ, {
          categories: MQ
        }), LQ && (0, AQ.jsx)("div", {
          className: qQ()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: MQ.map((QQ => (0, AQ.jsx)(GQ, {
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