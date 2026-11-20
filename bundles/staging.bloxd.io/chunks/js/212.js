export const id = 212;
export const ids = [212];
export const modules = {
  35996: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => jb
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(1431),
      Ub = hb(954),
      Lb = hb(701),
      Yb = hb(1095),
      Sb = hb(1357),
      ab = hb(1415),
      Hb = hb(3347),
      wb = hb(966),
      Zb = hb(3268),
      Xb = hb(2412),
      pb = hb(1007);
    const ob = 2;

    function Ab(bb) {
      return "firstPartyGame" === bb.type ? {
        type: "game",
        gameNameWithVariation: bb.gameNameWithVariation
      } : {
        type: "preview",
        preview: bb.preview
      }
    }

    function lb(bb) {
      let {
        game: ub,
        disabled: hb,
        showPlaceholder: Bb
      } = bb;
      return null !== ub ? (0, pb.jsx)(Zb.e, {
        source: Ab(ub),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: hb,
        entrySource: "customGamePlace"
      }) : Bb ? (0, pb.jsx)(Zb.d, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function Kb(bb) {
      var ub;
      let {
        category: hb,
        title: Bb,
        tintColour: Ob,
        layout: Gb,
        games: Ub,
        landscape: Lb = !1
      } = bb;
      const {
        followsLeader: Yb
      } = (0, Xb.d)(), Sb = null !== (ub = null === Ub || void 0 === Ub ? void 0 : Ub.slice(0, Gb.gameCount)) && void 0 !== ub ? ub : [], Hb = {
        "--custom-game-place-tint": Ob
      };
      return (0, pb.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: Hb,
        children: [(0, pb.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, pb.jsxs)(ab.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(hb)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, pb.jsx)("span", {
              children: Bb
            }), (0, pb.jsx)(wb.e, {
              name: "arrow-up"
            })]
          })
        }), (0, pb.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${Lb?Gb.columnCount:ob}, ${Lb?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: Gb.gameCount
          }, ((bb, ub) => {
            var hb;
            return (0, pb.jsx)(lb, {
              game: null !== (hb = Sb[ub]) && void 0 !== hb ? hb : null,
              disabled: Yb,
              showPlaceholder: !Ub
            }, ub)
          }))
        })]
      })
    }

    function Wb(bb) {
      let {
        categories: ub
      } = bb;

      function hb(bb) {
        const hb = ub[bb];
        return (0, pb.jsx)(Kb, {
          ...hb,
          landscape: !0
        }, hb.id)
      }
      return (0, pb.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, pb.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, pb.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, pb.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [hb(0), hb(2)]
            }), hb(1)]
          }), hb(4)]
        }), (0, pb.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [hb(3), hb(5)]
        })]
      })
    }
    const Cb = ["section1", "section2", "section3", "section4", "section5", "section6"],
      db = {
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
    var rb = hb(1023);

    function jb() {
      var bb;
      const {
        t: ub
      } = (0, Yb.K)(), hb = (0, Gb.F)(), Bb = (0, rb.k)(), wb = (0, Hb.e)({
        refresh: !0
      }), Zb = hb.customGamePlace;
      if (!(0, Ub.m)(Zb)) return (0, pb.jsx)(ab.NavigatePreserveSearch, {
        to: "/"
      });
      const Xb = Lb.e[Zb],
        ob = Ub.e[Zb],
        Ab = null !== (bb = null === wb || void 0 === wb ? void 0 : wb[Zb]) && void 0 !== bb ? bb : null,
        lb = [];
      for (let Ob = 0; Ob < ob.length; Ob++) {
        var jb;
        const bb = Cb[Ob];
        if (!bb) continue;
        const hb = ob[Ob];
        lb.push({
          id: hb.id,
          category: hb.category,
          title: ub(hb.displayTranslationKey),
          tintColour: hb.tintColour,
          layout: db[bb],
          games: null !== (jb = null === Ab || void 0 === Ab ? void 0 : Ab[hb.id]) && void 0 !== jb ? jb : null
        })
      }
      return (0, pb.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, pb.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${Zb}/${Xb.largePicture}.png)`
          }
        }), (0, pb.jsx)("h1", {
          className: "VisuallyHidden",
          children: ub(Xb.title)
        }), (0, pb.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, pb.jsx)(Sb.d, {
            onClick: () => (0, ab.navigatePreserveSearch)("/"),
            children: ub("homePage:backToGames")
          })
        }), !Bb && (0, pb.jsx)(Wb, {
          categories: lb
        }), Bb && (0, pb.jsx)("div", {
          className: Ob()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: lb.map((bb => (0, pb.jsx)(Kb, {
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