export const id = 195;
export const ids = [195];
export const modules = {
  35200: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Gy
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(1370),
      Zy = Wy(890),
      cb = Wy(615),
      Py = Wy(1042),
      oy = Wy(1273),
      By = Wy(1356),
      Ky = Wy(2854),
      ey = Wy(910),
      qb = Wy(2781),
      sy = Wy(2072),
      Sy = Wy(952);
    const Ey = 2;

    function ly(yb) {
      return "firstPartyGame" === yb.type ? {
        type: "game",
        gameNameWithVariation: yb.gameNameWithVariation
      } : {
        type: "preview",
        preview: yb.preview
      }
    }

    function mb(yb) {
      let {
        game: bb,
        disabled: Wy,
        showPlaceholder: Uy
      } = yb;
      return null !== bb ? (0, Sy.jsx)(qb.f, {
        source: ly(bb),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: Wy,
        entrySource: "customGamePlace"
      }) : Uy ? (0, Sy.jsx)(qb.e, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function Cy(yb) {
      var bb;
      let {
        category: Wy,
        title: Uy,
        tintColour: hy,
        layout: fy,
        games: Zy,
        landscape: cb = !1
      } = yb;
      const {
        followsLeader: Py
      } = (0, sy.i)(), oy = null !== (bb = null === Zy || void 0 === Zy ? void 0 : Zy.slice(0, fy.gameCount)) && void 0 !== bb ? bb : [], Ky = {
        "--custom-game-place-tint": hy
      };
      return (0, Sy.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: Ky,
        children: [(0, Sy.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, Sy.jsxs)(By.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(Wy)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, Sy.jsx)("span", {
              children: Uy
            }), (0, Sy.jsx)(ey.e, {
              name: "arrow-up"
            })]
          })
        }), (0, Sy.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${cb?fy.columnCount:Ey}, ${cb?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: fy.gameCount
          }, ((yb, bb) => {
            var Wy;
            return (0, Sy.jsx)(mb, {
              game: null !== (Wy = oy[bb]) && void 0 !== Wy ? Wy : null,
              disabled: Py,
              showPlaceholder: !Zy
            }, bb)
          }))
        })]
      })
    }

    function Ty(yb) {
      let {
        categories: bb
      } = yb;

      function Wy(yb) {
        const Wy = bb[yb];
        return (0, Sy.jsx)(Cy, {
          ...Wy,
          landscape: !0
        }, Wy.id)
      }
      return (0, Sy.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, Sy.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, Sy.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, Sy.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [Wy(0), Wy(2)]
            }), Wy(1)]
          }), Wy(4)]
        }), (0, Sy.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [Wy(3), Wy(5)]
        })]
      })
    }
    const Vy = ["section1", "section2", "section3", "section4", "section5", "section6"],
      Jy = {
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
    var gb = Wy(965);

    function Gy() {
      var yb;
      const {
        t: bb
      } = (0, Py.D)(), Wy = (0, fy.F)(), Uy = (0, gb.f)(), ey = (0, Ky.e)({
        refresh: !0
      }), qb = Wy.customGamePlace;
      if (!(0, Zy.h)(qb)) return (0, Sy.jsx)(By.NavigatePreserveSearch, {
        to: "/"
      });
      const sy = cb.b[qb],
        Ey = Zy.b[qb],
        ly = null !== (yb = null === ey || void 0 === ey ? void 0 : ey[qb]) && void 0 !== yb ? yb : null,
        mb = [];
      for (let hy = 0; hy < Ey.length; hy++) {
        var Gy;
        const yb = Vy[hy];
        if (!yb) continue;
        const Wy = Ey[hy];
        mb.push({
          id: Wy.id,
          category: Wy.category,
          title: bb(Wy.displayTranslationKey),
          tintColour: Wy.tintColour,
          layout: Jy[yb],
          games: null !== (Gy = null === ly || void 0 === ly ? void 0 : ly[Wy.id]) && void 0 !== Gy ? Gy : null
        })
      }
      return (0, Sy.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, Sy.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${qb}/${sy.largePicture}.png)`
          }
        }), (0, Sy.jsx)("h1", {
          className: "VisuallyHidden",
          children: bb(sy.title)
        }), (0, Sy.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, Sy.jsx)(oy.d, {
            onClick: () => (0, By.navigatePreserveSearch)("/"),
            children: bb("homePage:backToGames")
          })
        }), !Uy && (0, Sy.jsx)(Ty, {
          categories: mb
        }), Uy && (0, Sy.jsx)("div", {
          className: hy()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: mb.map((yb => (0, Sy.jsx)(Cy, {
            category: yb.category,
            title: yb.title,
            tintColour: yb.tintColour,
            layout: yb.layout,
            games: yb.games
          }, yb.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);