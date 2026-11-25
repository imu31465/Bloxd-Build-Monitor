export const id = 238;
export const ids = [238];
export const modules = {
  37308: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => bM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(1608),
      aM = iM(1108),
      PM = iM(821),
      nM = iM(1188),
      QM = iM(1520),
      zM = iM(1591),
      LM = iM(3957),
      mM = iM(1398),
      HM = iM(3875),
      hM = iM(2813),
      JM = iM(1303);
    const dM = 2;

    function yM(MM) {
      return "firstPartyGame" === MM.type ? {
        type: "game",
        gameNameWithVariation: MM.gameNameWithVariation
      } : {
        type: "preview",
        preview: MM.preview
      }
    }

    function lM(MM) {
      let {
        game: rM,
        disabled: iM,
        showPlaceholder: OM
      } = MM;
      return null !== rM ? (0, JM.jsx)(HM.h, {
        source: yM(rM),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: iM,
        entrySource: "customGamePlace"
      }) : OM ? (0, JM.jsx)(HM.e, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function EM(MM) {
      var rM;
      let {
        category: iM,
        title: OM,
        tintColour: SM,
        layout: jM,
        games: aM,
        landscape: PM = !1
      } = MM;
      const {
        followsLeader: nM
      } = (0, hM.c)(), QM = null !== (rM = null === aM || void 0 === aM ? void 0 : aM.slice(0, jM.gameCount)) && void 0 !== rM ? rM : [], LM = {
        "--custom-game-place-tint": SM
      };
      return (0, JM.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: LM,
        children: [(0, JM.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, JM.jsxs)(zM.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(iM)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, JM.jsx)("span", {
              children: OM
            }), (0, JM.jsx)(mM.b, {
              name: "arrow-up"
            })]
          })
        }), (0, JM.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${PM?jM.columnCount:dM}, ${PM?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: jM.gameCount
          }, ((MM, rM) => {
            var iM;
            return (0, JM.jsx)(lM, {
              game: null !== (iM = QM[rM]) && void 0 !== iM ? iM : null,
              disabled: nM,
              showPlaceholder: !aM
            }, rM)
          }))
        })]
      })
    }

    function UM(MM) {
      let {
        categories: rM
      } = MM;

      function iM(MM) {
        const iM = rM[MM];
        return (0, JM.jsx)(EM, {
          ...iM,
          landscape: !0
        }, iM.id)
      }
      return (0, JM.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, JM.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, JM.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, JM.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [iM(0), iM(2)]
            }), iM(1)]
          }), iM(4)]
        }), (0, JM.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [iM(3), iM(5)]
        })]
      })
    }
    const GM = ["section1", "section2", "section3", "section4", "section5", "section6"],
      CM = {
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
    var eM = iM(1130);

    function bM() {
      var MM;
      const {
        t: rM
      } = (0, nM.A)(), iM = (0, jM.D)(), OM = (0, eM.i)(), mM = (0, LM.c)({
        refresh: !0
      }), HM = iM.customGamePlace;
      if (!(0, aM.j)(HM)) return (0, JM.jsx)(zM.NavigatePreserveSearch, {
        to: "/"
      });
      const hM = PM.e[HM],
        dM = aM.d[HM],
        yM = null !== (MM = null === mM || void 0 === mM ? void 0 : mM[HM]) && void 0 !== MM ? MM : null,
        lM = [];
      for (let SM = 0; SM < dM.length; SM++) {
        var bM;
        const MM = GM[SM];
        if (!MM) continue;
        const iM = dM[SM];
        lM.push({
          id: iM.id,
          category: iM.category,
          title: rM(iM.displayTranslationKey),
          tintColour: iM.tintColour,
          layout: CM[MM],
          games: null !== (bM = null === yM || void 0 === yM ? void 0 : yM[iM.id]) && void 0 !== bM ? bM : null
        })
      }
      return (0, JM.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, JM.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${HM}/${hM.largePicture}.png)`
          }
        }), (0, JM.jsx)("h1", {
          className: "VisuallyHidden",
          children: rM(hM.title)
        }), (0, JM.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, JM.jsx)(QM.c, {
            onClick: () => (0, zM.navigatePreserveSearch)("/"),
            children: rM("homePage:backToGames")
          })
        }), !OM && (0, JM.jsx)(UM, {
          categories: lM
        }), OM && (0, JM.jsx)("div", {
          className: SM()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: lM.map((MM => (0, JM.jsx)(EM, {
            category: MM.category,
            title: MM.title,
            tintColour: MM.tintColour,
            layout: MM.layout,
            games: MM.games
          }, MM.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);