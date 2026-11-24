export const id = 219;
export const ids = [219];
export const modules = {
  36393: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => wB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(1591),
      GB = ZB(1084),
      vB = ZB(810),
      kB = ZB(1248),
      cB = ZB(1516),
      nB = ZB(1579),
      hB = ZB(3724),
      zB = ZB(1102),
      FB = ZB(3663),
      NB = ZB(2722),
      gB = ZB(1153);
    const qB = 2;

    function yB(BB) {
      return "firstPartyGame" === BB.type ? {
        type: "game",
        gameNameWithVariation: BB.gameNameWithVariation
      } : {
        type: "preview",
        preview: BB.preview
      }
    }

    function UB(BB) {
      let {
        game: IB,
        disabled: ZB,
        showPlaceholder: TB
      } = BB;
      return null !== IB ? (0, gB.jsx)(FB.f, {
        source: yB(IB),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: ZB,
        entrySource: "customGamePlace"
      }) : TB ? (0, gB.jsx)(FB.b, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function WB(BB) {
      var IB;
      let {
        category: ZB,
        title: TB,
        tintColour: JB,
        layout: oB,
        games: GB,
        landscape: vB = !1
      } = BB;
      const {
        followsLeader: kB
      } = (0, NB.f)(), cB = null !== (IB = null === GB || void 0 === GB ? void 0 : GB.slice(0, oB.gameCount)) && void 0 !== IB ? IB : [], hB = {
        "--custom-game-place-tint": JB
      };
      return (0, gB.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: hB,
        children: [(0, gB.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, gB.jsxs)(nB.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(ZB)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, gB.jsx)("span", {
              children: TB
            }), (0, gB.jsx)(zB.d, {
              name: "arrow-up"
            })]
          })
        }), (0, gB.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${vB?oB.columnCount:qB}, ${vB?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: oB.gameCount
          }, ((BB, IB) => {
            var ZB;
            return (0, gB.jsx)(UB, {
              game: null !== (ZB = cB[IB]) && void 0 !== ZB ? ZB : null,
              disabled: kB,
              showPlaceholder: !GB
            }, IB)
          }))
        })]
      })
    }

    function dB(BB) {
      let {
        categories: IB
      } = BB;

      function ZB(BB) {
        const ZB = IB[BB];
        return (0, gB.jsx)(WB, {
          ...ZB,
          landscape: !0
        }, ZB.id)
      }
      return (0, gB.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, gB.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, gB.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, gB.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [ZB(0), ZB(2)]
            }), ZB(1)]
          }), ZB(4)]
        }), (0, gB.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [ZB(3), ZB(5)]
        })]
      })
    }
    const CB = ["section1", "section2", "section3", "section4", "section5", "section6"],
      QB = {
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
    var sB = ZB(1165);

    function wB() {
      var BB;
      const {
        t: IB
      } = (0, kB.G)(), ZB = (0, oB.B)(), TB = (0, sB.j)(), zB = (0, hB.c)({
        refresh: !0
      }), FB = ZB.customGamePlace;
      if (!(0, GB.m)(FB)) return (0, gB.jsx)(nB.NavigatePreserveSearch, {
        to: "/"
      });
      const NB = vB.c[FB],
        qB = GB.c[FB],
        yB = null !== (BB = null === zB || void 0 === zB ? void 0 : zB[FB]) && void 0 !== BB ? BB : null,
        UB = [];
      for (let JB = 0; JB < qB.length; JB++) {
        var wB;
        const BB = CB[JB];
        if (!BB) continue;
        const ZB = qB[JB];
        UB.push({
          id: ZB.id,
          category: ZB.category,
          title: IB(ZB.displayTranslationKey),
          tintColour: ZB.tintColour,
          layout: QB[BB],
          games: null !== (wB = null === yB || void 0 === yB ? void 0 : yB[ZB.id]) && void 0 !== wB ? wB : null
        })
      }
      return (0, gB.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, gB.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${FB}/${NB.largePicture}.png)`
          }
        }), (0, gB.jsx)("h1", {
          className: "VisuallyHidden",
          children: IB(NB.title)
        }), (0, gB.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, gB.jsx)(cB.c, {
            onClick: () => (0, nB.navigatePreserveSearch)("/"),
            children: IB("homePage:backToGames")
          })
        }), !TB && (0, gB.jsx)(dB, {
          categories: UB
        }), TB && (0, gB.jsx)("div", {
          className: JB()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: UB.map((BB => (0, gB.jsx)(WB, {
            category: BB.category,
            title: BB.title,
            tintColour: BB.tintColour,
            layout: BB.layout,
            games: BB.games
          }, BB.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);