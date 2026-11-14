export const id = 191;
export const ids = [191];
export const modules = {
  34668: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => QW
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(1345),
      AW = MW(890),
      bR = MW(607),
      yR = MW(1027),
      NW = MW(1255),
      eW = MW(1330),
      BW = MW(2655),
      tR = MW(904),
      TW = MW(2576),
      gR = MW(1998),
      iR = MW(940);
    const YW = 2;

    function JW(WW) {
      return "firstPartyGame" === WW.type ? {
        type: "game",
        gameNameWithVariation: WW.gameNameWithVariation
      } : {
        type: "preview",
        preview: WW.preview
      }
    }

    function PW(WW) {
      let {
        game: RW,
        disabled: MW,
        showPlaceholder: wW
      } = WW;
      return null !== RW ? (0, iR.jsx)(TW.d, {
        source: JW(RW),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: MW,
        entrySource: "customGamePlace"
      }) : wW ? (0, iR.jsx)(TW.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function IW(WW) {
      var RW;
      let {
        category: MW,
        title: wW,
        tintColour: CW,
        layout: zR,
        games: AW,
        landscape: bR = !1
      } = WW;
      const {
        followsLeader: yR
      } = (0, gR.i)(), NW = null !== (RW = null === AW || void 0 === AW ? void 0 : AW.slice(0, zR.gameCount)) && void 0 !== RW ? RW : [], BW = {
        "--custom-game-place-tint": CW
      };
      return (0, iR.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: BW,
        children: [(0, iR.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, iR.jsxs)(eW.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(MW)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, iR.jsx)("span", {
              children: wW
            }), (0, iR.jsx)(tR.e, {
              name: "arrow-up"
            })]
          })
        }), (0, iR.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${bR?zR.columnCount:YW}, ${bR?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: zR.gameCount
          }, ((WW, RW) => {
            var MW;
            return (0, iR.jsx)(PW, {
              game: null !== (MW = NW[RW]) && void 0 !== MW ? MW : null,
              disabled: yR,
              showPlaceholder: !AW
            }, RW)
          }))
        })]
      })
    }

    function oW(WW) {
      let {
        categories: RW
      } = WW;

      function MW(WW) {
        const MW = RW[WW];
        return (0, iR.jsx)(IW, {
          ...MW,
          landscape: !0
        }, MW.id)
      }
      return (0, iR.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, iR.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, iR.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, iR.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [MW(0), MW(2)]
            }), MW(1)]
          }), MW(4)]
        }), (0, iR.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [MW(3), MW(5)]
        })]
      })
    }
    const lW = ["section1", "section2", "section3", "section4", "section5", "section6"],
      FW = {
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
    var fW = MW(958);

    function QW() {
      var WW;
      const {
        t: RW
      } = (0, yR.C)(), MW = (0, zR.A)(), wW = (0, fW.f)(), tR = (0, BW.d)({
        refresh: !0
      }), TW = MW.customGamePlace;
      if (!(0, AW.n)(TW)) return (0, iR.jsx)(eW.NavigatePreserveSearch, {
        to: "/"
      });
      const gR = bR.b[TW],
        YW = AW.e[TW],
        JW = null !== (WW = null === tR || void 0 === tR ? void 0 : tR[TW]) && void 0 !== WW ? WW : null,
        PW = [];
      for (let CW = 0; CW < YW.length; CW++) {
        var QW;
        const WW = lW[CW];
        if (!WW) continue;
        const MW = YW[CW];
        PW.push({
          id: MW.id,
          category: MW.category,
          title: RW(MW.displayTranslationKey),
          tintColour: MW.tintColour,
          layout: FW[WW],
          games: null !== (QW = null === JW || void 0 === JW ? void 0 : JW[MW.id]) && void 0 !== QW ? QW : null
        })
      }
      return (0, iR.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, iR.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${TW}/${gR.largePicture}.png)`
          }
        }), (0, iR.jsx)("h1", {
          className: "VisuallyHidden",
          children: RW(gR.title)
        }), (0, iR.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, iR.jsx)(NW.d, {
            onClick: () => (0, eW.navigatePreserveSearch)("/"),
            children: RW("homePage:backToGames")
          })
        }), !wW && (0, iR.jsx)(oW, {
          categories: PW
        }), wW && (0, iR.jsx)("div", {
          className: CW()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: PW.map((WW => (0, iR.jsx)(IW, {
            category: WW.category,
            title: WW.title,
            tintColour: WW.tintColour,
            layout: WW.layout,
            games: WW.games
          }, WW.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);