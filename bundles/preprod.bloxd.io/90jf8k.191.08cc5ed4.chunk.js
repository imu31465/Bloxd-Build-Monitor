export const id = 191;
export const ids = [191];
export const modules = {
  34954: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => DF
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(1360),
      hF = SF(910),
      bW = SF(612),
      dF = SF(1046),
      PF = SF(1266),
      RF = SF(1352),
      iW = SF(2738),
      eF = SF(929),
      EF = SF(2649),
      QF = SF(2007),
      rW = SF(971);
    const gW = 2;

    function tW(FF) {
      return "firstPartyGame" === FF.type ? {
        type: "game",
        gameNameWithVariation: FF.gameNameWithVariation
      } : {
        type: "preview",
        preview: FF.preview
      }
    }

    function TF(FF) {
      let {
        game: WF,
        disabled: SF,
        showPlaceholder: CF
      } = FF;
      return null !== WF ? (0, rW.jsx)(EF.f, {
        source: tW(WF),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: SF,
        entrySource: "customGamePlace"
      }) : CF ? (0, rW.jsx)(EF.e, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function aW(FF) {
      var WF;
      let {
        category: SF,
        title: CF,
        tintColour: AF,
        layout: uF,
        games: hF,
        landscape: bW = !1
      } = FF;
      const {
        followsLeader: dF
      } = (0, QF.c)(), PF = null !== (WF = null === hF || void 0 === hF ? void 0 : hF.slice(0, uF.gameCount)) && void 0 !== WF ? WF : [], iW = {
        "--custom-game-place-tint": AF
      };
      return (0, rW.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: iW,
        children: [(0, rW.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, rW.jsxs)(RF.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(SF)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, rW.jsx)("span", {
              children: CF
            }), (0, rW.jsx)(eF.e, {
              name: "arrow-up"
            })]
          })
        }), (0, rW.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${bW?uF.columnCount:gW}, ${bW?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: uF.gameCount
          }, ((FF, WF) => {
            var SF;
            return (0, rW.jsx)(TF, {
              game: null !== (SF = PF[WF]) && void 0 !== SF ? SF : null,
              disabled: dF,
              showPlaceholder: !hF
            }, WF)
          }))
        })]
      })
    }

    function kW(FF) {
      let {
        categories: WF
      } = FF;

      function SF(FF) {
        const SF = WF[FF];
        return (0, rW.jsx)(aW, {
          ...SF,
          landscape: !0
        }, SF.id)
      }
      return (0, rW.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, rW.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, rW.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, rW.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [SF(0), SF(2)]
            }), SF(1)]
          }), SF(4)]
        }), (0, rW.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [SF(3), SF(5)]
        })]
      })
    }
    const qW = ["section1", "section2", "section3", "section4", "section5", "section6"],
      VF = {
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
    var NF = SF(983);

    function DF() {
      var FF;
      const {
        t: WF
      } = (0, dF.B)(), SF = (0, uF.v)(), CF = (0, NF.j)(), eF = (0, iW.c)({
        refresh: !0
      }), EF = SF.customGamePlace;
      if (!(0, hF.j)(EF)) return (0, rW.jsx)(RF.NavigatePreserveSearch, {
        to: "/"
      });
      const QF = bW.e[EF],
        gW = hF.c[EF],
        tW = null !== (FF = null === eF || void 0 === eF ? void 0 : eF[EF]) && void 0 !== FF ? FF : null,
        TF = [];
      for (let AF = 0; AF < gW.length; AF++) {
        var DF;
        const FF = qW[AF];
        if (!FF) continue;
        const SF = gW[AF];
        TF.push({
          id: SF.id,
          category: SF.category,
          title: WF(SF.displayTranslationKey),
          tintColour: SF.tintColour,
          layout: VF[FF],
          games: null !== (DF = null === tW || void 0 === tW ? void 0 : tW[SF.id]) && void 0 !== DF ? DF : null
        })
      }
      return (0, rW.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, rW.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${EF}/${QF.largePicture}.png)`
          }
        }), (0, rW.jsx)("h1", {
          className: "VisuallyHidden",
          children: WF(QF.title)
        }), (0, rW.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, rW.jsx)(PF.c, {
            onClick: () => (0, RF.navigatePreserveSearch)("/"),
            children: WF("homePage:backToGames")
          })
        }), !CF && (0, rW.jsx)(kW, {
          categories: TF
        }), CF && (0, rW.jsx)("div", {
          className: AF()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: TF.map((FF => (0, rW.jsx)(aW, {
            category: FF.category,
            title: FF.title,
            tintColour: FF.tintColour,
            layout: FF.layout,
            games: FF.games
          }, FF.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);