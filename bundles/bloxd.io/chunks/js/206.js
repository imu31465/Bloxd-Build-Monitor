export const id = 206;
export const ids = [206];
export const modules = {
  35385: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => RT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(1484),
      WT = IT(1040),
      XT = IT(748),
      BT = IT(1171),
      FT = IT(1408),
      ST = IT(1468),
      DT = IT(3123),
      LT = IT(1055),
      xT = IT(3041),
      cT = IT(2290),
      KT = IT(1083);
    const MT = 2;

    function rT(TT) {
      return "firstPartyGame" === TT.type ? {
        type: "game",
        gameNameWithVariation: TT.gameNameWithVariation
      } : {
        type: "preview",
        preview: TT.preview
      }
    }

    function AT(TT) {
      let {
        game: oT,
        disabled: IT,
        showPlaceholder: iT
      } = TT;
      return null !== oT ? (0, KT.jsx)(xT.g, {
        source: rT(oT),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: IT,
        entrySource: "customGamePlace"
      }) : iT ? (0, KT.jsx)(xT.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function gT(TT) {
      var oT;
      let {
        category: IT,
        title: iT,
        tintColour: zT,
        layout: kT,
        games: WT,
        landscape: XT = !1
      } = TT;
      const {
        followsLeader: BT
      } = (0, cT.i)(), FT = null !== (oT = null === WT || void 0 === WT ? void 0 : WT.slice(0, kT.gameCount)) && void 0 !== oT ? oT : [], DT = {
        "--custom-game-place-tint": zT
      };
      return (0, KT.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: DT,
        children: [(0, KT.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, KT.jsxs)(ST.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(IT)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, KT.jsx)("span", {
              children: iT
            }), (0, KT.jsx)(LT.e, {
              name: "arrow-up"
            })]
          })
        }), (0, KT.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${XT?kT.columnCount:MT}, ${XT?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: kT.gameCount
          }, ((TT, oT) => {
            var IT;
            return (0, KT.jsx)(AT, {
              game: null !== (IT = FT[oT]) && void 0 !== IT ? IT : null,
              disabled: BT,
              showPlaceholder: !WT
            }, oT)
          }))
        })]
      })
    }

    function hT(TT) {
      let {
        categories: oT
      } = TT;

      function IT(TT) {
        const IT = oT[TT];
        return (0, KT.jsx)(gT, {
          ...IT,
          landscape: !0
        }, IT.id)
      }
      return (0, KT.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, KT.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, KT.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, KT.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [IT(0), IT(2)]
            }), IT(1)]
          }), IT(4)]
        }), (0, KT.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [IT(3), IT(5)]
        })]
      })
    }
    const wT = ["section1", "section2", "section3", "section4", "section5", "section6"],
      mT = {
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
    var eT = IT(1102);

    function RT() {
      var TT;
      const {
        t: oT
      } = (0, BT.t)(), IT = (0, kT.C)(), iT = (0, eT.n)(), LT = (0, DT.e)({
        refresh: !0
      }), xT = IT.customGamePlace;
      if (!(0, WT.f)(xT)) return (0, KT.jsx)(ST.NavigatePreserveSearch, {
        to: "/"
      });
      const cT = XT.d[xT],
        MT = WT.b[xT],
        rT = null !== (TT = null === LT || void 0 === LT ? void 0 : LT[xT]) && void 0 !== TT ? TT : null,
        AT = [];
      for (let zT = 0; zT < MT.length; zT++) {
        var RT;
        const TT = wT[zT];
        if (!TT) continue;
        const IT = MT[zT];
        AT.push({
          id: IT.id,
          category: IT.category,
          title: oT(IT.displayTranslationKey),
          tintColour: IT.tintColour,
          layout: mT[TT],
          games: null !== (RT = null === rT || void 0 === rT ? void 0 : rT[IT.id]) && void 0 !== RT ? RT : null
        })
      }
      return (0, KT.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, KT.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${xT}/${cT.largePicture}.png)`
          }
        }), (0, KT.jsx)("h1", {
          className: "VisuallyHidden",
          children: oT(cT.title)
        }), (0, KT.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, KT.jsx)(FT.c, {
            onClick: () => (0, ST.navigatePreserveSearch)("/"),
            children: oT("homePage:backToGames")
          })
        }), !iT && (0, KT.jsx)(hT, {
          categories: AT
        }), iT && (0, KT.jsx)("div", {
          className: zT()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: AT.map((TT => (0, KT.jsx)(gT, {
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