export const id = 211;
export const ids = [211];
export const modules = {
  35931: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => Yv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(1505),
      gv = Pv(1027),
      pv = Pv(763),
      dv = Pv(1175),
      Nv = Pv(1442),
      lv = Pv(1492),
      Tv = Pv(3312),
      Wv = Pv(1042),
      wv = Pv(3236),
      av = Pv(2424),
      sv = Pv(1082);
    const Cv = 2;

    function iv(vv) {
      return "firstPartyGame" === vv.type ? {
        type: "game",
        gameNameWithVariation: vv.gameNameWithVariation
      } : {
        type: "preview",
        preview: vv.preview
      }
    }

    function cv(vv) {
      let {
        game: zv,
        disabled: Pv,
        showPlaceholder: hv
      } = vv;
      return null !== zv ? (0, sv.jsx)(wv.i, {
        source: iv(zv),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: Pv,
        entrySource: "customGamePlace"
      }) : hv ? (0, sv.jsx)(wv.e, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function Gv(vv) {
      var zv;
      let {
        category: Pv,
        title: hv,
        tintColour: Sv,
        layout: ev,
        games: gv,
        landscape: pv = !1
      } = vv;
      const {
        followsLeader: dv
      } = (0, av.h)(), Nv = null !== (zv = null === gv || void 0 === gv ? void 0 : gv.slice(0, ev.gameCount)) && void 0 !== zv ? zv : [], Tv = {
        "--custom-game-place-tint": Sv
      };
      return (0, sv.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: Tv,
        children: [(0, sv.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, sv.jsxs)(lv.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(Pv)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, sv.jsx)("span", {
              children: hv
            }), (0, sv.jsx)(Wv.b, {
              name: "arrow-up"
            })]
          })
        }), (0, sv.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${pv?ev.columnCount:Cv}, ${pv?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: ev.gameCount
          }, ((vv, zv) => {
            var Pv;
            return (0, sv.jsx)(cv, {
              game: null !== (Pv = Nv[zv]) && void 0 !== Pv ? Pv : null,
              disabled: dv,
              showPlaceholder: !gv
            }, zv)
          }))
        })]
      })
    }

    function mv(vv) {
      let {
        categories: zv
      } = vv;

      function Pv(vv) {
        const Pv = zv[vv];
        return (0, sv.jsx)(Gv, {
          ...Pv,
          landscape: !0
        }, Pv.id)
      }
      return (0, sv.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, sv.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, sv.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, sv.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [Pv(0), Pv(2)]
            }), Pv(1)]
          }), Pv(4)]
        }), (0, sv.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [Pv(3), Pv(5)]
        })]
      })
    }
    const jv = ["section1", "section2", "section3", "section4", "section5", "section6"],
      fv = {
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
    var Fv = Pv(1095);

    function Yv() {
      var vv;
      const {
        t: zv
      } = (0, dv.x)(), Pv = (0, ev.B)(), hv = (0, Fv.i)(), Wv = (0, Tv.c)({
        refresh: !0
      }), wv = Pv.customGamePlace;
      if (!(0, gv.j)(wv)) return (0, sv.jsx)(lv.NavigatePreserveSearch, {
        to: "/"
      });
      const av = pv.e[wv],
        Cv = gv.d[wv],
        iv = null !== (vv = null === Wv || void 0 === Wv ? void 0 : Wv[wv]) && void 0 !== vv ? vv : null,
        cv = [];
      for (let Sv = 0; Sv < Cv.length; Sv++) {
        var Yv;
        const vv = jv[Sv];
        if (!vv) continue;
        const Pv = Cv[Sv];
        cv.push({
          id: Pv.id,
          category: Pv.category,
          title: zv(Pv.displayTranslationKey),
          tintColour: Pv.tintColour,
          layout: fv[vv],
          games: null !== (Yv = null === iv || void 0 === iv ? void 0 : iv[Pv.id]) && void 0 !== Yv ? Yv : null
        })
      }
      return (0, sv.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, sv.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${wv}/${av.largePicture}.png)`
          }
        }), (0, sv.jsx)("h1", {
          className: "VisuallyHidden",
          children: zv(av.title)
        }), (0, sv.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, sv.jsx)(Nv.b, {
            onClick: () => (0, lv.navigatePreserveSearch)("/"),
            children: zv("homePage:backToGames")
          })
        }), !hv && (0, sv.jsx)(mv, {
          categories: cv
        }), hv && (0, sv.jsx)("div", {
          className: Sv()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: cv.map((vv => (0, sv.jsx)(Gv, {
            category: vv.category,
            title: vv.title,
            tintColour: vv.tintColour,
            layout: vv.layout,
            games: vv.games
          }, vv.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);