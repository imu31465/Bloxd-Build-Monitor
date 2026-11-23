export const id = 215;
export const ids = [215];
export const modules = {
  36255: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => iC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(1463),
      nC = ZC(996),
      fC = ZC(728),
      oC = ZC(1143),
      qC = ZC(1388),
      FC = ZC(1453),
      WC = ZC(3509),
      NC = ZC(1013),
      MC = ZC(3448),
      gC = ZC(2563),
      SC = ZC(1056);
    const pC = 2;

    function PC(CC) {
      return "firstPartyGame" === CC.type ? {
        type: "game",
        gameNameWithVariation: CC.gameNameWithVariation
      } : {
        type: "preview",
        preview: CC.preview
      }
    }

    function GC(CC) {
      let {
        game: zC,
        disabled: ZC,
        showPlaceholder: QC
      } = CC;
      return null !== zC ? (0, SC.jsx)(MC.d, {
        source: PC(zC),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: ZC,
        entrySource: "customGamePlace"
      }) : QC ? (0, SC.jsx)(MC.b, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function RC(CC) {
      var zC;
      let {
        category: ZC,
        title: QC,
        tintColour: wC,
        layout: bC,
        games: nC,
        landscape: fC = !1
      } = CC;
      const {
        followsLeader: oC
      } = (0, gC.g)(), qC = null !== (zC = null === nC || void 0 === nC ? void 0 : nC.slice(0, bC.gameCount)) && void 0 !== zC ? zC : [], WC = {
        "--custom-game-place-tint": wC
      };
      return (0, SC.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: WC,
        children: [(0, SC.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, SC.jsxs)(FC.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(ZC)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, SC.jsx)("span", {
              children: QC
            }), (0, SC.jsx)(NC.c, {
              name: "arrow-up"
            })]
          })
        }), (0, SC.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${fC?bC.columnCount:pC}, ${fC?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: bC.gameCount
          }, ((CC, zC) => {
            var ZC;
            return (0, SC.jsx)(GC, {
              game: null !== (ZC = qC[zC]) && void 0 !== ZC ? ZC : null,
              disabled: oC,
              showPlaceholder: !nC
            }, zC)
          }))
        })]
      })
    }

    function AC(CC) {
      let {
        categories: zC
      } = CC;

      function ZC(CC) {
        const ZC = zC[CC];
        return (0, SC.jsx)(RC, {
          ...ZC,
          landscape: !0
        }, ZC.id)
      }
      return (0, SC.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, SC.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, SC.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, SC.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [ZC(0), ZC(2)]
            }), ZC(1)]
          }), ZC(4)]
        }), (0, SC.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [ZC(3), ZC(5)]
        })]
      })
    }
    const xC = ["section1", "section2", "section3", "section4", "section5", "section6"],
      JC = {
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
    var IC = ZC(1072);

    function iC() {
      var CC;
      const {
        t: zC
      } = (0, oC.y)(), ZC = (0, bC.C)(), QC = (0, IC.k)(), NC = (0, WC.d)({
        refresh: !0
      }), MC = ZC.customGamePlace;
      if (!(0, nC.k)(MC)) return (0, SC.jsx)(FC.NavigatePreserveSearch, {
        to: "/"
      });
      const gC = fC.d[MC],
        pC = nC.d[MC],
        PC = null !== (CC = null === NC || void 0 === NC ? void 0 : NC[MC]) && void 0 !== CC ? CC : null,
        GC = [];
      for (let wC = 0; wC < pC.length; wC++) {
        var iC;
        const CC = xC[wC];
        if (!CC) continue;
        const ZC = pC[wC];
        GC.push({
          id: ZC.id,
          category: ZC.category,
          title: zC(ZC.displayTranslationKey),
          tintColour: ZC.tintColour,
          layout: JC[CC],
          games: null !== (iC = null === PC || void 0 === PC ? void 0 : PC[ZC.id]) && void 0 !== iC ? iC : null
        })
      }
      return (0, SC.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, SC.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${MC}/${gC.largePicture}.png)`
          }
        }), (0, SC.jsx)("h1", {
          className: "VisuallyHidden",
          children: zC(gC.title)
        }), (0, SC.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, SC.jsx)(qC.c, {
            onClick: () => (0, FC.navigatePreserveSearch)("/"),
            children: zC("homePage:backToGames")
          })
        }), !QC && (0, SC.jsx)(AC, {
          categories: GC
        }), QC && (0, SC.jsx)("div", {
          className: wC()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: GC.map((CC => (0, SC.jsx)(RC, {
            category: CC.category,
            title: CC.title,
            tintColour: CC.tintColour,
            layout: CC.layout,
            games: CC.games
          }, CC.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);