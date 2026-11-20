export const id = 211;
export const ids = [211];
export const modules = {
  35826: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => mb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(1446),
      Eb = Ub(979),
      Yb = Ub(714),
      Bb = Ub(1134),
      eb = Ub(1352),
      vb = Ub(1433),
      Lb = Ub(3223),
      Pb = Ub(990),
      Xb = Ub(3161),
      jb = Ub(2386),
      Rb = Ub(1023);
    const kb = 2;

    function yb(bb) {
      return "firstPartyGame" === bb.type ? {
        type: "game",
        gameNameWithVariation: bb.gameNameWithVariation
      } : {
        type: "preview",
        preview: bb.preview
      }
    }

    function Zb(bb) {
      let {
        game: ab,
        disabled: Ub,
        showPlaceholder: Ab
      } = bb;
      return null !== ab ? (0, Rb.jsx)(Xb.f, {
        source: yb(ab),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: Ub,
        entrySource: "customGamePlace"
      }) : Ab ? (0, Rb.jsx)(Xb.e, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function Db(bb) {
      var ab;
      let {
        category: Ub,
        title: Ab,
        tintColour: Mb,
        layout: Tb,
        games: Eb,
        landscape: Yb = !1
      } = bb;
      const {
        followsLeader: Bb
      } = (0, jb.f)(), eb = null !== (ab = null === Eb || void 0 === Eb ? void 0 : Eb.slice(0, Tb.gameCount)) && void 0 !== ab ? ab : [], Lb = {
        "--custom-game-place-tint": Mb
      };
      return (0, Rb.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: Lb,
        children: [(0, Rb.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, Rb.jsxs)(vb.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(Ub)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, Rb.jsx)("span", {
              children: Ab
            }), (0, Rb.jsx)(Pb.e, {
              name: "arrow-up"
            })]
          })
        }), (0, Rb.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${Yb?Tb.columnCount:kb}, ${Yb?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: Tb.gameCount
          }, ((bb, ab) => {
            var Ub;
            return (0, Rb.jsx)(Zb, {
              game: null !== (Ub = eb[ab]) && void 0 !== Ub ? Ub : null,
              disabled: Bb,
              showPlaceholder: !Eb
            }, ab)
          }))
        })]
      })
    }

    function zb(bb) {
      let {
        categories: ab
      } = bb;

      function Ub(bb) {
        const Ub = ab[bb];
        return (0, Rb.jsx)(Db, {
          ...Ub,
          landscape: !0
        }, Ub.id)
      }
      return (0, Rb.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, Rb.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, Rb.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, Rb.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [Ub(0), Ub(2)]
            }), Ub(1)]
          }), Ub(4)]
        }), (0, Rb.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [Ub(3), Ub(5)]
        })]
      })
    }
    const xb = ["section1", "section2", "section3", "section4", "section5", "section6"],
      ib = {
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
    var fb = Ub(1047);

    function mb() {
      var bb;
      const {
        t: ab
      } = (0, Bb.A)(), Ub = (0, Tb.F)(), Ab = (0, fb.k)(), Pb = (0, Lb.c)({
        refresh: !0
      }), Xb = Ub.customGamePlace;
      if (!(0, Eb.i)(Xb)) return (0, Rb.jsx)(vb.NavigatePreserveSearch, {
        to: "/"
      });
      const jb = Yb.d[Xb],
        kb = Eb.d[Xb],
        yb = null !== (bb = null === Pb || void 0 === Pb ? void 0 : Pb[Xb]) && void 0 !== bb ? bb : null,
        Zb = [];
      for (let Mb = 0; Mb < kb.length; Mb++) {
        var mb;
        const bb = xb[Mb];
        if (!bb) continue;
        const Ub = kb[Mb];
        Zb.push({
          id: Ub.id,
          category: Ub.category,
          title: ab(Ub.displayTranslationKey),
          tintColour: Ub.tintColour,
          layout: ib[bb],
          games: null !== (mb = null === yb || void 0 === yb ? void 0 : yb[Ub.id]) && void 0 !== mb ? mb : null
        })
      }
      return (0, Rb.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, Rb.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${Xb}/${jb.largePicture}.png)`
          }
        }), (0, Rb.jsx)("h1", {
          className: "VisuallyHidden",
          children: ab(jb.title)
        }), (0, Rb.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, Rb.jsx)(eb.e, {
            onClick: () => (0, vb.navigatePreserveSearch)("/"),
            children: ab("homePage:backToGames")
          })
        }), !Ab && (0, Rb.jsx)(zb, {
          categories: Zb
        }), Ab && (0, Rb.jsx)("div", {
          className: Mb()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: Zb.map((bb => (0, Rb.jsx)(Db, {
            category: bb.category,
            title: bb.title,
            tintColour: bb.tintColour,
            layout: bb.layout,
            games: bb.games
          }, bb.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);