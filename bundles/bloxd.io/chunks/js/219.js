export const id = 219;
export const ids = [219];
export const modules = {
  36439: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => YT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(1641),
      gT = mT(1118),
      nT = mT(825),
      HT = mT(1288),
      kT = mT(1569),
      jT = mT(1633),
      lT = mT(3663),
      LT = mT(1135),
      pT = mT(3568),
      BT = mT(2704),
      ZT = mT(1188);
    const cT = 2;

    function vT(TT) {
      return "firstPartyGame" === TT.type ? {
        type: "game",
        gameNameWithVariation: TT.gameNameWithVariation
      } : {
        type: "preview",
        preview: TT.preview
      }
    }

    function fT(TT) {
      let {
        game: UT,
        disabled: mT,
        showPlaceholder: WT
      } = TT;
      return null !== UT ? (0, ZT.jsx)(pT.f, {
        source: vT(UT),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: mT,
        entrySource: "customGamePlace"
      }) : WT ? (0, ZT.jsx)(pT.d, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function qT(TT) {
      var UT;
      let {
        category: mT,
        title: WT,
        tintColour: zT,
        layout: MT,
        games: gT,
        landscape: nT = !1
      } = TT;
      const {
        followsLeader: HT
      } = (0, BT.g)(), kT = null !== (UT = null === gT || void 0 === gT ? void 0 : gT.slice(0, MT.gameCount)) && void 0 !== UT ? UT : [], lT = {
        "--custom-game-place-tint": zT
      };
      return (0, ZT.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: lT,
        children: [(0, ZT.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, ZT.jsxs)(jT.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(mT)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, ZT.jsx)("span", {
              children: WT
            }), (0, ZT.jsx)(LT.c, {
              name: "arrow-up"
            })]
          })
        }), (0, ZT.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${nT?MT.columnCount:cT}, ${nT?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: MT.gameCount
          }, ((TT, UT) => {
            var mT;
            return (0, ZT.jsx)(fT, {
              game: null !== (mT = kT[UT]) && void 0 !== mT ? mT : null,
              disabled: HT,
              showPlaceholder: !gT
            }, UT)
          }))
        })]
      })
    }

    function iT(TT) {
      let {
        categories: UT
      } = TT;

      function mT(TT) {
        const mT = UT[TT];
        return (0, ZT.jsx)(qT, {
          ...mT,
          landscape: !0
        }, mT.id)
      }
      return (0, ZT.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, ZT.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, ZT.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, ZT.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [mT(0), mT(2)]
            }), mT(1)]
          }), mT(4)]
        }), (0, ZT.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [mT(3), mT(5)]
        })]
      })
    }
    const bT = ["section1", "section2", "section3", "section4", "section5", "section6"],
      OT = {
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
    var eT = mT(1213);

    function YT() {
      var TT;
      const {
        t: UT
      } = (0, HT.z)(), mT = (0, MT.y)(), WT = (0, eT.i)(), LT = (0, lT.c)({
        refresh: !0
      }), pT = mT.customGamePlace;
      if (!(0, gT.j)(pT)) return (0, ZT.jsx)(jT.NavigatePreserveSearch, {
        to: "/"
      });
      const BT = nT.d[pT],
        cT = gT.c[pT],
        vT = null !== (TT = null === LT || void 0 === LT ? void 0 : LT[pT]) && void 0 !== TT ? TT : null,
        fT = [];
      for (let zT = 0; zT < cT.length; zT++) {
        var YT;
        const TT = bT[zT];
        if (!TT) continue;
        const mT = cT[zT];
        fT.push({
          id: mT.id,
          category: mT.category,
          title: UT(mT.displayTranslationKey),
          tintColour: mT.tintColour,
          layout: OT[TT],
          games: null !== (YT = null === vT || void 0 === vT ? void 0 : vT[mT.id]) && void 0 !== YT ? YT : null
        })
      }
      return (0, ZT.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, ZT.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${pT}/${BT.largePicture}.png)`
          }
        }), (0, ZT.jsx)("h1", {
          className: "VisuallyHidden",
          children: UT(BT.title)
        }), (0, ZT.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, ZT.jsx)(kT.d, {
            onClick: () => (0, jT.navigatePreserveSearch)("/"),
            children: UT("homePage:backToGames")
          })
        }), !WT && (0, ZT.jsx)(iT, {
          categories: fT
        }), WT && (0, ZT.jsx)("div", {
          className: zT()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: fT.map((TT => (0, ZT.jsx)(qT, {
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