export const id = 211;
export const ids = [211];
export const modules = {
  36043: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => hb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(1511),
      Tb = sb(1026),
      Ub = sb(760),
      Ib = sb(1197),
      Hb = sb(1431),
      fb = sb(1495),
      Mb = sb(3353),
      Xb = sb(1039),
      nb = sb(3263),
      mb = sb(2429),
      lb = sb(1087);
    const Qb = 2;

    function eb(bb) {
      return "firstPartyGame" === bb.type ? {
        type: "game",
        gameNameWithVariation: bb.gameNameWithVariation
      } : {
        type: "preview",
        preview: bb.preview
      }
    }

    function Cb(bb) {
      let {
        game: cb,
        disabled: sb,
        showPlaceholder: kb
      } = bb;
      return null !== cb ? (0, lb.jsx)(nb.h, {
        source: eb(cb),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: sb,
        entrySource: "customGamePlace"
      }) : kb ? (0, lb.jsx)(nb.d, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function Nb(bb) {
      var cb;
      let {
        category: sb,
        title: kb,
        tintColour: Wb,
        layout: ab,
        games: Tb,
        landscape: Ub = !1
      } = bb;
      const {
        followsLeader: Ib
      } = (0, mb.e)(), Hb = null !== (cb = null === Tb || void 0 === Tb ? void 0 : Tb.slice(0, ab.gameCount)) && void 0 !== cb ? cb : [], Mb = {
        "--custom-game-place-tint": Wb
      };
      return (0, lb.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: Mb,
        children: [(0, lb.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, lb.jsxs)(fb.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(sb)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, lb.jsx)("span", {
              children: kb
            }), (0, lb.jsx)(Xb.b, {
              name: "arrow-up"
            })]
          })
        }), (0, lb.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${Ub?ab.columnCount:Qb}, ${Ub?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: ab.gameCount
          }, ((bb, cb) => {
            var sb;
            return (0, lb.jsx)(Cb, {
              game: null !== (sb = Hb[cb]) && void 0 !== sb ? sb : null,
              disabled: Ib,
              showPlaceholder: !Tb
            }, cb)
          }))
        })]
      })
    }

    function Vb(bb) {
      let {
        categories: cb
      } = bb;

      function sb(bb) {
        const sb = cb[bb];
        return (0, lb.jsx)(Nb, {
          ...sb,
          landscape: !0
        }, sb.id)
      }
      return (0, lb.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, lb.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, lb.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, lb.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [sb(0), sb(2)]
            }), sb(1)]
          }), sb(4)]
        }), (0, lb.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [sb(3), sb(5)]
        })]
      })
    }
    const Lb = ["section1", "section2", "section3", "section4", "section5", "section6"],
      ub = {
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
    var Yb = sb(1104);

    function hb() {
      var bb;
      const {
        t: cb
      } = (0, Ib.E)(), sb = (0, ab.D)(), kb = (0, Yb.j)(), Xb = (0, Mb.b)({
        refresh: !0
      }), nb = sb.customGamePlace;
      if (!(0, Tb.m)(nb)) return (0, lb.jsx)(fb.NavigatePreserveSearch, {
        to: "/"
      });
      const mb = Ub.b[nb],
        Qb = Tb.c[nb],
        eb = null !== (bb = null === Xb || void 0 === Xb ? void 0 : Xb[nb]) && void 0 !== bb ? bb : null,
        Cb = [];
      for (let Wb = 0; Wb < Qb.length; Wb++) {
        var hb;
        const bb = Lb[Wb];
        if (!bb) continue;
        const sb = Qb[Wb];
        Cb.push({
          id: sb.id,
          category: sb.category,
          title: cb(sb.displayTranslationKey),
          tintColour: sb.tintColour,
          layout: ub[bb],
          games: null !== (hb = null === eb || void 0 === eb ? void 0 : eb[sb.id]) && void 0 !== hb ? hb : null
        })
      }
      return (0, lb.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, lb.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${nb}/${mb.largePicture}.png)`
          }
        }), (0, lb.jsx)("h1", {
          className: "VisuallyHidden",
          children: cb(mb.title)
        }), (0, lb.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, lb.jsx)(Hb.b, {
            onClick: () => (0, fb.navigatePreserveSearch)("/"),
            children: cb("homePage:backToGames")
          })
        }), !kb && (0, lb.jsx)(Vb, {
          categories: Cb
        }), kb && (0, lb.jsx)("div", {
          className: Wb()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: Cb.map((bb => (0, lb.jsx)(Nb, {
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