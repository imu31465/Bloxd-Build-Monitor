export const id = 219;
export const ids = [219];
export const modules = {
  36446: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => EB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(1547),
      IB = zB(1087),
      NB = zB(814),
      uB = zB(1240),
      UB = zB(1478),
      aB = zB(1543),
      pB = zB(3660),
      rB = zB(1108),
      sB = zB(3587),
      JB = zB(2696),
      mB = zB(1148);
    const yB = 2;

    function kB(BB) {
      return "firstPartyGame" === BB.type ? {
        type: "game",
        gameNameWithVariation: BB.gameNameWithVariation
      } : {
        type: "preview",
        preview: BB.preview
      }
    }

    function GB(BB) {
      let {
        game: jB,
        disabled: zB,
        showPlaceholder: QB
      } = BB;
      return null !== jB ? (0, mB.jsx)(sB.f, {
        source: kB(jB),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: zB,
        entrySource: "customGamePlace"
      }) : QB ? (0, mB.jsx)(sB.e, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function LB(BB) {
      var jB;
      let {
        category: zB,
        title: QB,
        tintColour: nB,
        layout: dB,
        games: IB,
        landscape: NB = !1
      } = BB;
      const {
        followsLeader: uB
      } = (0, JB.e)(), UB = null !== (jB = null === IB || void 0 === IB ? void 0 : IB.slice(0, dB.gameCount)) && void 0 !== jB ? jB : [], pB = {
        "--custom-game-place-tint": nB
      };
      return (0, mB.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: pB,
        children: [(0, mB.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, mB.jsxs)(aB.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(zB)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, mB.jsx)("span", {
              children: QB
            }), (0, mB.jsx)(rB.c, {
              name: "arrow-up"
            })]
          })
        }), (0, mB.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${NB?dB.columnCount:yB}, ${NB?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: dB.gameCount
          }, ((BB, jB) => {
            var zB;
            return (0, mB.jsx)(GB, {
              game: null !== (zB = UB[jB]) && void 0 !== zB ? zB : null,
              disabled: uB,
              showPlaceholder: !IB
            }, jB)
          }))
        })]
      })
    }

    function gB(BB) {
      let {
        categories: jB
      } = BB;

      function zB(BB) {
        const zB = jB[BB];
        return (0, mB.jsx)(LB, {
          ...zB,
          landscape: !0
        }, zB.id)
      }
      return (0, mB.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, mB.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, mB.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, mB.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [zB(0), zB(2)]
            }), zB(1)]
          }), zB(4)]
        }), (0, mB.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [zB(3), zB(5)]
        })]
      })
    }
    const tB = ["section1", "section2", "section3", "section4", "section5", "section6"],
      SB = {
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
    var MB = zB(1162);

    function EB() {
      var BB;
      const {
        t: jB
      } = (0, uB.D)(), zB = (0, dB.w)(), QB = (0, MB.d)(), rB = (0, pB.b)({
        refresh: !0
      }), sB = zB.customGamePlace;
      if (!(0, IB.j)(sB)) return (0, mB.jsx)(aB.NavigatePreserveSearch, {
        to: "/"
      });
      const JB = NB.c[sB],
        yB = IB.b[sB],
        kB = null !== (BB = null === rB || void 0 === rB ? void 0 : rB[sB]) && void 0 !== BB ? BB : null,
        GB = [];
      for (let nB = 0; nB < yB.length; nB++) {
        var EB;
        const BB = tB[nB];
        if (!BB) continue;
        const zB = yB[nB];
        GB.push({
          id: zB.id,
          category: zB.category,
          title: jB(zB.displayTranslationKey),
          tintColour: zB.tintColour,
          layout: SB[BB],
          games: null !== (EB = null === kB || void 0 === kB ? void 0 : kB[zB.id]) && void 0 !== EB ? EB : null
        })
      }
      return (0, mB.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, mB.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${sB}/${JB.largePicture}.png)`
          }
        }), (0, mB.jsx)("h1", {
          className: "VisuallyHidden",
          children: jB(JB.title)
        }), (0, mB.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, mB.jsx)(UB.c, {
            onClick: () => (0, aB.navigatePreserveSearch)("/"),
            children: jB("homePage:backToGames")
          })
        }), !QB && (0, mB.jsx)(gB, {
          categories: GB
        }), QB && (0, mB.jsx)("div", {
          className: nB()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: GB.map((BB => (0, mB.jsx)(LB, {
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