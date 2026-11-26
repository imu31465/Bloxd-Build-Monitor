export const id = 242;
export const ids = [242];
export const modules = {
  37242: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => OH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(1520),
      hH = LH(1031),
      tH = LH(761),
      zH = LH(1123),
      CH = LH(1455),
      EH = LH(1509),
      XH = LH(3943),
      GH = LH(1315),
      YH = LH(3872),
      uH = LH(2820),
      QH = LH(1225);
    const WH = 2;

    function MH(HH) {
      return "firstPartyGame" === HH.type ? {
        type: "game",
        gameNameWithVariation: HH.gameNameWithVariation
      } : {
        type: "preview",
        preview: HH.preview
      }
    }

    function xH(HH) {
      let {
        game: BH,
        disabled: LH,
        showPlaceholder: AH
      } = HH;
      return null !== BH ? (0, QH.jsx)(YH.d, {
        source: MH(BH),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: LH,
        entrySource: "customGamePlace"
      }) : AH ? (0, QH.jsx)(YH.b, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function vH(HH) {
      var BH;
      let {
        category: LH,
        title: AH,
        tintColour: rH,
        layout: SH,
        games: hH,
        landscape: tH = !1
      } = HH;
      const {
        followsLeader: zH
      } = (0, uH.g)(), CH = null !== (BH = null === hH || void 0 === hH ? void 0 : hH.slice(0, SH.gameCount)) && void 0 !== BH ? BH : [], XH = {
        "--custom-game-place-tint": rH
      };
      return (0, QH.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: XH,
        children: [(0, QH.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, QH.jsxs)(EH.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(LH)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, QH.jsx)("span", {
              children: AH
            }), (0, QH.jsx)(GH.c, {
              name: "arrow-up"
            })]
          })
        }), (0, QH.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${tH?SH.columnCount:WH}, ${tH?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: SH.gameCount
          }, ((HH, BH) => {
            var LH;
            return (0, QH.jsx)(xH, {
              game: null !== (LH = CH[BH]) && void 0 !== LH ? LH : null,
              disabled: zH,
              showPlaceholder: !hH
            }, BH)
          }))
        })]
      })
    }

    function PH(HH) {
      let {
        categories: BH
      } = HH;

      function LH(HH) {
        const LH = BH[HH];
        return (0, QH.jsx)(vH, {
          ...LH,
          landscape: !0
        }, LH.id)
      }
      return (0, QH.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, QH.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, QH.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, QH.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [LH(0), LH(2)]
            }), LH(1)]
          }), LH(4)]
        }), (0, QH.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [LH(3), LH(5)]
        })]
      })
    }
    const TH = ["section1", "section2", "section3", "section4", "section5", "section6"],
      UH = {
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
    var VH = LH(1049);

    function OH() {
      var HH;
      const {
        t: BH
      } = (0, zH.B)(), LH = (0, SH.A)(), AH = (0, VH.k)(), GH = (0, XH.d)({
        refresh: !0
      }), YH = LH.customGamePlace;
      if (!(0, hH.j)(YH)) return (0, QH.jsx)(EH.NavigatePreserveSearch, {
        to: "/"
      });
      const uH = tH.b[YH],
        WH = hH.c[YH],
        MH = null !== (HH = null === GH || void 0 === GH ? void 0 : GH[YH]) && void 0 !== HH ? HH : null,
        xH = [];
      for (let rH = 0; rH < WH.length; rH++) {
        var OH;
        const HH = TH[rH];
        if (!HH) continue;
        const LH = WH[rH];
        xH.push({
          id: LH.id,
          category: LH.category,
          title: BH(LH.displayTranslationKey),
          tintColour: LH.tintColour,
          layout: UH[HH],
          games: null !== (OH = null === MH || void 0 === MH ? void 0 : MH[LH.id]) && void 0 !== OH ? OH : null
        })
      }
      return (0, QH.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, QH.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${YH}/${uH.largePicture}.png)`
          }
        }), (0, QH.jsx)("h1", {
          className: "VisuallyHidden",
          children: BH(uH.title)
        }), (0, QH.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, QH.jsx)(CH.e, {
            onClick: () => (0, EH.navigatePreserveSearch)("/"),
            children: BH("homePage:backToGames")
          })
        }), !AH && (0, QH.jsx)(PH, {
          categories: xH
        }), AH && (0, QH.jsx)("div", {
          className: rH()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: xH.map((HH => (0, QH.jsx)(vH, {
            category: HH.category,
            title: HH.title,
            tintColour: HH.tintColour,
            layout: HH.layout,
            games: HH.games
          }, HH.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);