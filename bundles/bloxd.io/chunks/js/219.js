export const id = 219;
export const ids = [219];
export const modules = {
  36601: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => ht
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(1623),
      mt = Vt(1137),
      dt = Vt(839),
      jt = Vt(1286),
      Ht = Vt(1556),
      Xt = Vt(1613),
      Qt = Vt(3623),
      lt = Vt(1152),
      Et = Vt(3544),
      ft = Vt(2684),
      wt = Vt(1188);
    const yt = 2;

    function Nt(tt) {
      return "firstPartyGame" === tt.type ? {
        type: "game",
        gameNameWithVariation: tt.gameNameWithVariation
      } : {
        type: "preview",
        preview: tt.preview
      }
    }

    function Mt(tt) {
      let {
        game: et,
        disabled: Vt,
        showPlaceholder: Ot
      } = tt;
      return null !== et ? (0, wt.jsx)(Et.h, {
        source: Nt(et),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: Vt,
        entrySource: "customGamePlace"
      }) : Ot ? (0, wt.jsx)(Et.e, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function bt(tt) {
      var et;
      let {
        category: Vt,
        title: Ot,
        tintColour: qt,
        layout: Dt,
        games: mt,
        landscape: dt = !1
      } = tt;
      const {
        followsLeader: jt
      } = (0, ft.f)(), Ht = null !== (et = null === mt || void 0 === mt ? void 0 : mt.slice(0, Dt.gameCount)) && void 0 !== et ? et : [], Qt = {
        "--custom-game-place-tint": qt
      };
      return (0, wt.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: Qt,
        children: [(0, wt.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, wt.jsxs)(Xt.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(Vt)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, wt.jsx)("span", {
              children: Ot
            }), (0, wt.jsx)(lt.b, {
              name: "arrow-up"
            })]
          })
        }), (0, wt.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${dt?Dt.columnCount:yt}, ${dt?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: Dt.gameCount
          }, ((tt, et) => {
            var Vt;
            return (0, wt.jsx)(Mt, {
              game: null !== (Vt = Ht[et]) && void 0 !== Vt ? Vt : null,
              disabled: jt,
              showPlaceholder: !mt
            }, et)
          }))
        })]
      })
    }

    function Jt(tt) {
      let {
        categories: et
      } = tt;

      function Vt(tt) {
        const Vt = et[tt];
        return (0, wt.jsx)(bt, {
          ...Vt,
          landscape: !0
        }, Vt.id)
      }
      return (0, wt.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, wt.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, wt.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, wt.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [Vt(0), Vt(2)]
            }), Vt(1)]
          }), Vt(4)]
        }), (0, wt.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [Vt(3), Vt(5)]
        })]
      })
    }
    const Ct = ["section1", "section2", "section3", "section4", "section5", "section6"],
      ut = {
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
    var Kt = Vt(1204);

    function ht() {
      var tt;
      const {
        t: et
      } = (0, jt.H)(), Vt = (0, Dt.B)(), Ot = (0, Kt.h)(), lt = (0, Qt.d)({
        refresh: !0
      }), Et = Vt.customGamePlace;
      if (!(0, mt.j)(Et)) return (0, wt.jsx)(Xt.NavigatePreserveSearch, {
        to: "/"
      });
      const ft = dt.c[Et],
        yt = mt.c[Et],
        Nt = null !== (tt = null === lt || void 0 === lt ? void 0 : lt[Et]) && void 0 !== tt ? tt : null,
        Mt = [];
      for (let qt = 0; qt < yt.length; qt++) {
        var ht;
        const tt = Ct[qt];
        if (!tt) continue;
        const Vt = yt[qt];
        Mt.push({
          id: Vt.id,
          category: Vt.category,
          title: et(Vt.displayTranslationKey),
          tintColour: Vt.tintColour,
          layout: ut[tt],
          games: null !== (ht = null === Nt || void 0 === Nt ? void 0 : Nt[Vt.id]) && void 0 !== ht ? ht : null
        })
      }
      return (0, wt.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, wt.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${Et}/${ft.largePicture}.png)`
          }
        }), (0, wt.jsx)("h1", {
          className: "VisuallyHidden",
          children: et(ft.title)
        }), (0, wt.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, wt.jsx)(Ht.d, {
            onClick: () => (0, Xt.navigatePreserveSearch)("/"),
            children: et("homePage:backToGames")
          })
        }), !Ot && (0, wt.jsx)(Jt, {
          categories: Mt
        }), Ot && (0, wt.jsx)("div", {
          className: qt()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: Mt.map((tt => (0, wt.jsx)(bt, {
            category: tt.category,
            title: tt.title,
            tintColour: tt.tintColour,
            layout: tt.layout,
            games: tt.games
          }, tt.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);