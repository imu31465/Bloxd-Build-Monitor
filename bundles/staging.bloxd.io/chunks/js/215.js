export const id = 215;
export const ids = [215];
export const modules = {
  36383: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => ZS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(1622),
      xS = gS(1116),
      NS = gS(830),
      qS = gS(1281),
      uS = gS(1528),
      IS = gS(1608),
      fS = gS(3691),
      kS = gS(1127),
      aS = gS(3608),
      KS = gS(2717),
      jS = gS(1181);
    const GS = 2;

    function CS(SS) {
      return "firstPartyGame" === SS.type ? {
        type: "game",
        gameNameWithVariation: SS.gameNameWithVariation
      } : {
        type: "preview",
        preview: SS.preview
      }
    }

    function nS(SS) {
      let {
        game: HS,
        disabled: gS,
        showPlaceholder: tS
      } = SS;
      return null !== HS ? (0, jS.jsx)(aS.g, {
        source: CS(HS),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: gS,
        entrySource: "customGamePlace"
      }) : tS ? (0, jS.jsx)(aS.d, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function PS(SS) {
      var HS;
      let {
        category: gS,
        title: tS,
        tintColour: bS,
        layout: XS,
        games: xS,
        landscape: NS = !1
      } = SS;
      const {
        followsLeader: qS
      } = (0, KS.i)(), uS = null !== (HS = null === xS || void 0 === xS ? void 0 : xS.slice(0, XS.gameCount)) && void 0 !== HS ? HS : [], fS = {
        "--custom-game-place-tint": bS
      };
      return (0, jS.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: fS,
        children: [(0, jS.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, jS.jsxs)(IS.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(gS)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, jS.jsx)("span", {
              children: tS
            }), (0, jS.jsx)(kS.d, {
              name: "arrow-up"
            })]
          })
        }), (0, jS.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${NS?XS.columnCount:GS}, ${NS?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: XS.gameCount
          }, ((SS, HS) => {
            var gS;
            return (0, jS.jsx)(nS, {
              game: null !== (gS = uS[HS]) && void 0 !== gS ? gS : null,
              disabled: qS,
              showPlaceholder: !xS
            }, HS)
          }))
        })]
      })
    }

    function QS(SS) {
      let {
        categories: HS
      } = SS;

      function gS(SS) {
        const gS = HS[SS];
        return (0, jS.jsx)(PS, {
          ...gS,
          landscape: !0
        }, gS.id)
      }
      return (0, jS.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, jS.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, jS.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, jS.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [gS(0), gS(2)]
            }), gS(1)]
          }), gS(4)]
        }), (0, jS.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [gS(3), gS(5)]
        })]
      })
    }
    const DS = ["section1", "section2", "section3", "section4", "section5", "section6"],
      wS = {
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
    var hS = gS(1198);

    function ZS() {
      var SS;
      const {
        t: HS
      } = (0, qS.F)(), gS = (0, XS.z)(), tS = (0, hS.l)(), kS = (0, fS.d)({
        refresh: !0
      }), aS = gS.customGamePlace;
      if (!(0, xS.n)(aS)) return (0, jS.jsx)(IS.NavigatePreserveSearch, {
        to: "/"
      });
      const KS = NS.d[aS],
        GS = xS.d[aS],
        CS = null !== (SS = null === kS || void 0 === kS ? void 0 : kS[aS]) && void 0 !== SS ? SS : null,
        nS = [];
      for (let bS = 0; bS < GS.length; bS++) {
        var ZS;
        const SS = DS[bS];
        if (!SS) continue;
        const gS = GS[bS];
        nS.push({
          id: gS.id,
          category: gS.category,
          title: HS(gS.displayTranslationKey),
          tintColour: gS.tintColour,
          layout: wS[SS],
          games: null !== (ZS = null === CS || void 0 === CS ? void 0 : CS[gS.id]) && void 0 !== ZS ? ZS : null
        })
      }
      return (0, jS.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, jS.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${aS}/${KS.largePicture}.png)`
          }
        }), (0, jS.jsx)("h1", {
          className: "VisuallyHidden",
          children: HS(KS.title)
        }), (0, jS.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, jS.jsx)(uS.d, {
            onClick: () => (0, IS.navigatePreserveSearch)("/"),
            children: HS("homePage:backToGames")
          })
        }), !tS && (0, jS.jsx)(QS, {
          categories: nS
        }), tS && (0, jS.jsx)("div", {
          className: bS()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: nS.map((SS => (0, jS.jsx)(PS, {
            category: SS.category,
            title: SS.title,
            tintColour: SS.tintColour,
            layout: SS.layout,
            games: SS.games
          }, SS.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);