export const id = 215;
export const ids = [215];
export const modules = {
  36360: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => XD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(1523),
      rD = wD(1041),
      LD = wD(760),
      cD = wD(1200),
      gD = wD(1447),
      RD = wD(1511),
      AD = wD(3548),
      UD = wD(1057),
      fD = wD(3473),
      ID = wD(2589),
      BD = wD(1096);
    const GD = 2;

    function hD(DD) {
      return "firstPartyGame" === DD.type ? {
        type: "game",
        gameNameWithVariation: DD.gameNameWithVariation
      } : {
        type: "preview",
        preview: DD.preview
      }
    }

    function nD(DD) {
      let {
        game: zD,
        disabled: wD,
        showPlaceholder: pD
      } = DD;
      return null !== zD ? (0, BD.jsx)(fD.g, {
        source: hD(zD),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: wD,
        entrySource: "customGamePlace"
      }) : pD ? (0, BD.jsx)(fD.e, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function MD(DD) {
      var zD;
      let {
        category: wD,
        title: pD,
        tintColour: sD,
        layout: KD,
        games: rD,
        landscape: LD = !1
      } = DD;
      const {
        followsLeader: cD
      } = (0, ID.f)(), gD = null !== (zD = null === rD || void 0 === rD ? void 0 : rD.slice(0, KD.gameCount)) && void 0 !== zD ? zD : [], AD = {
        "--custom-game-place-tint": sD
      };
      return (0, BD.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: AD,
        children: [(0, BD.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, BD.jsxs)(RD.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(wD)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, BD.jsx)("span", {
              children: pD
            }), (0, BD.jsx)(UD.e, {
              name: "arrow-up"
            })]
          })
        }), (0, BD.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${LD?KD.columnCount:GD}, ${LD?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: KD.gameCount
          }, ((DD, zD) => {
            var wD;
            return (0, BD.jsx)(nD, {
              game: null !== (wD = gD[zD]) && void 0 !== wD ? wD : null,
              disabled: cD,
              showPlaceholder: !rD
            }, zD)
          }))
        })]
      })
    }

    function OD(DD) {
      let {
        categories: zD
      } = DD;

      function wD(DD) {
        const wD = zD[DD];
        return (0, BD.jsx)(MD, {
          ...wD,
          landscape: !0
        }, wD.id)
      }
      return (0, BD.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, BD.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, BD.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, BD.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [wD(0), wD(2)]
            }), wD(1)]
          }), wD(4)]
        }), (0, BD.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [wD(3), wD(5)]
        })]
      })
    }
    const JD = ["section1", "section2", "section3", "section4", "section5", "section6"],
      ED = {
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
    var QD = wD(1116);

    function XD() {
      var DD;
      const {
        t: zD
      } = (0, cD.E)(), wD = (0, KD.C)(), pD = (0, QD.g)(), UD = (0, AD.b)({
        refresh: !0
      }), fD = wD.customGamePlace;
      if (!(0, rD.i)(fD)) return (0, BD.jsx)(RD.NavigatePreserveSearch, {
        to: "/"
      });
      const ID = LD.e[fD],
        GD = rD.c[fD],
        hD = null !== (DD = null === UD || void 0 === UD ? void 0 : UD[fD]) && void 0 !== DD ? DD : null,
        nD = [];
      for (let sD = 0; sD < GD.length; sD++) {
        var XD;
        const DD = JD[sD];
        if (!DD) continue;
        const wD = GD[sD];
        nD.push({
          id: wD.id,
          category: wD.category,
          title: zD(wD.displayTranslationKey),
          tintColour: wD.tintColour,
          layout: ED[DD],
          games: null !== (XD = null === hD || void 0 === hD ? void 0 : hD[wD.id]) && void 0 !== XD ? XD : null
        })
      }
      return (0, BD.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, BD.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${fD}/${ID.largePicture}.png)`
          }
        }), (0, BD.jsx)("h1", {
          className: "VisuallyHidden",
          children: zD(ID.title)
        }), (0, BD.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, BD.jsx)(gD.d, {
            onClick: () => (0, RD.navigatePreserveSearch)("/"),
            children: zD("homePage:backToGames")
          })
        }), !pD && (0, BD.jsx)(OD, {
          categories: nD
        }), pD && (0, BD.jsx)("div", {
          className: sD()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: nD.map((DD => (0, BD.jsx)(MD, {
            category: DD.category,
            title: DD.title,
            tintColour: DD.tintColour,
            layout: DD.layout,
            games: DD.games
          }, DD.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);