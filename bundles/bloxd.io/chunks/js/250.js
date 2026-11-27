export const id = 250;
export const ids = [250];
export const modules = {
  37803: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => Tr
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(1653),
      jr = Qr(1148),
      Ir = Qr(868),
      fr = Qr(1251),
      Er = Qr(1576),
      pr = Qr(1644),
      xr = Qr(4811),
      mr = Qr(1448),
      Nr = Qr(4743),
      Ur = Qr(3646),
      tr = Qr(1338);
    const hr = 2;

    function zr(rr) {
      return "firstPartyGame" === rr.type ? {
        type: "game",
        gameNameWithVariation: rr.gameNameWithVariation
      } : {
        type: "preview",
        preview: rr.preview
      }
    }

    function Yr(rr) {
      let {
        game: Sr,
        disabled: Qr,
        showPlaceholder: Zr
      } = rr;
      return null !== Sr ? (0, tr.jsx)(Nr.e, {
        source: zr(Sr),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: Qr,
        entrySource: "customGamePlace"
      }) : Zr ? (0, tr.jsx)(Nr.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function nr(rr) {
      var Sr;
      let {
        category: Qr,
        title: Zr,
        tintColour: Wr,
        layout: ar,
        games: jr,
        landscape: Ir = !1
      } = rr;
      const {
        followsLeader: fr
      } = (0, Ur.g)(), Er = null !== (Sr = null === jr || void 0 === jr ? void 0 : jr.slice(0, ar.gameCount)) && void 0 !== Sr ? Sr : [], xr = {
        "--custom-game-place-tint": Wr
      };
      return (0, tr.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: xr,
        children: [(0, tr.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, tr.jsxs)(pr.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(Qr)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, tr.jsx)("span", {
              children: Zr
            }), (0, tr.jsx)(mr.c, {
              name: "arrow-up"
            })]
          })
        }), (0, tr.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${Ir?ar.columnCount:hr}, ${Ir?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: ar.gameCount
          }, ((rr, Sr) => {
            var Qr;
            return (0, tr.jsx)(Yr, {
              game: null !== (Qr = Er[Sr]) && void 0 !== Qr ? Qr : null,
              disabled: fr,
              showPlaceholder: !jr
            }, Sr)
          }))
        })]
      })
    }

    function er(rr) {
      let {
        categories: Sr
      } = rr;

      function Qr(rr) {
        const Qr = Sr[rr];
        return (0, tr.jsx)(nr, {
          ...Qr,
          landscape: !0
        }, Qr.id)
      }
      return (0, tr.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, tr.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, tr.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, tr.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [Qr(0), Qr(2)]
            }), Qr(1)]
          }), Qr(4)]
        }), (0, tr.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [Qr(3), Qr(5)]
        })]
      })
    }
    const Kr = ["section1", "section2", "section3", "section4", "section5", "section6"],
      yr = {
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
    var Br = Qr(1171);

    function Tr() {
      var rr;
      const {
        t: Sr
      } = (0, fr.E)(), Qr = (0, ar.w)(), Zr = (0, Br.j)(), mr = (0, xr.d)({
        refresh: !0
      }), Nr = Qr.customGamePlace;
      if (!(0, jr.n)(Nr)) return (0, tr.jsx)(pr.NavigatePreserveSearch, {
        to: "/"
      });
      const Ur = Ir.c[Nr],
        hr = jr.e[Nr],
        zr = null !== (rr = null === mr || void 0 === mr ? void 0 : mr[Nr]) && void 0 !== rr ? rr : null,
        Yr = [];
      for (let Wr = 0; Wr < hr.length; Wr++) {
        var Tr;
        const rr = Kr[Wr];
        if (!rr) continue;
        const Qr = hr[Wr];
        Yr.push({
          id: Qr.id,
          category: Qr.category,
          title: Sr(Qr.displayTranslationKey),
          tintColour: Qr.tintColour,
          layout: yr[rr],
          games: null !== (Tr = null === zr || void 0 === zr ? void 0 : zr[Qr.id]) && void 0 !== Tr ? Tr : null
        })
      }
      return (0, tr.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, tr.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${Nr}/${Ur.largePicture}.png)`
          }
        }), (0, tr.jsx)("h1", {
          className: "VisuallyHidden",
          children: Sr(Ur.title)
        }), (0, tr.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, tr.jsx)(Er.d, {
            onClick: () => (0, pr.navigatePreserveSearch)("/"),
            children: Sr("homePage:backToGames")
          })
        }), !Zr && (0, tr.jsx)(er, {
          categories: Yr
        }), Zr && (0, tr.jsx)("div", {
          className: Wr()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: Yr.map((rr => (0, tr.jsx)(nr, {
            category: rr.category,
            title: rr.title,
            tintColour: rr.tintColour,
            layout: rr.layout,
            games: rr.games
          }, rr.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);