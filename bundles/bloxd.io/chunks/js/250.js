export const id = 250;
export const ids = [250];
export const modules = {
  37589: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => jb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(1696),
      Vb = Mb(1151),
      gb = Mb(867),
      lb = Mb(1259),
      Lb = Mb(1616),
      Ib = Mb(1686),
      Ob = Mb(4946),
      Ub = Mb(1475),
      tb = Mb(4881),
      Cb = Mb(3781),
      Eb = Mb(1364);
    const Fb = 2;

    function Bb(bb) {
      return "firstPartyGame" === bb.type ? {
        type: "game",
        gameNameWithVariation: bb.gameNameWithVariation
      } : {
        type: "preview",
        preview: bb.preview
      }
    }

    function sb(bb) {
      let {
        game: wb,
        disabled: Mb,
        showPlaceholder: eb
      } = bb;
      return null !== wb ? (0, Eb.jsx)(tb.f, {
        source: Bb(wb),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: Mb,
        entrySource: "customGamePlace"
      }) : eb ? (0, Eb.jsx)(tb.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function mb(bb) {
      var wb;
      let {
        category: Mb,
        title: eb,
        tintColour: Hb,
        layout: pb,
        games: Vb,
        landscape: gb = !1
      } = bb;
      const {
        followsLeader: lb
      } = (0, Cb.f)(), Lb = null !== (wb = null === Vb || void 0 === Vb ? void 0 : Vb.slice(0, pb.gameCount)) && void 0 !== wb ? wb : [], Ob = {
        "--custom-game-place-tint": Hb
      };
      return (0, Eb.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: Ob,
        children: [(0, Eb.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, Eb.jsxs)(Ib.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(Mb)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, Eb.jsx)("span", {
              children: eb
            }), (0, Eb.jsx)(Ub.b, {
              name: "arrow-up"
            })]
          })
        }), (0, Eb.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${gb?pb.columnCount:Fb}, ${gb?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: pb.gameCount
          }, ((bb, wb) => {
            var Mb;
            return (0, Eb.jsx)(sb, {
              game: null !== (Mb = Lb[wb]) && void 0 !== Mb ? Mb : null,
              disabled: lb,
              showPlaceholder: !Vb
            }, wb)
          }))
        })]
      })
    }

    function hb(bb) {
      let {
        categories: wb
      } = bb;

      function Mb(bb) {
        const Mb = wb[bb];
        return (0, Eb.jsx)(mb, {
          ...Mb,
          landscape: !0
        }, Mb.id)
      }
      return (0, Eb.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, Eb.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, Eb.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, Eb.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [Mb(0), Mb(2)]
            }), Mb(1)]
          }), Mb(4)]
        }), (0, Eb.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [Mb(3), Mb(5)]
        })]
      })
    }
    const zb = ["section1", "section2", "section3", "section4", "section5", "section6"],
      Xb = {
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
    var xb = Mb(1168);

    function jb() {
      var bb;
      const {
        t: wb
      } = (0, lb.C)(), Mb = (0, pb.E)(), eb = (0, xb.h)(), Ub = (0, Ob.b)({
        refresh: !0
      }), tb = Mb.customGamePlace;
      if (!(0, Vb.j)(tb)) return (0, Eb.jsx)(Ib.NavigatePreserveSearch, {
        to: "/"
      });
      const Cb = gb.b[tb],
        Fb = Vb.b[tb],
        Bb = null !== (bb = null === Ub || void 0 === Ub ? void 0 : Ub[tb]) && void 0 !== bb ? bb : null,
        sb = [];
      for (let Hb = 0; Hb < Fb.length; Hb++) {
        var jb;
        const bb = zb[Hb];
        if (!bb) continue;
        const Mb = Fb[Hb];
        sb.push({
          id: Mb.id,
          category: Mb.category,
          title: wb(Mb.displayTranslationKey),
          tintColour: Mb.tintColour,
          layout: Xb[bb],
          games: null !== (jb = null === Bb || void 0 === Bb ? void 0 : Bb[Mb.id]) && void 0 !== jb ? jb : null
        })
      }
      return (0, Eb.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, Eb.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${tb}/${Cb.largePicture}.png)`
          }
        }), (0, Eb.jsx)("h1", {
          className: "VisuallyHidden",
          children: wb(Cb.title)
        }), (0, Eb.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, Eb.jsx)(Lb.b, {
            onClick: () => (0, Ib.navigatePreserveSearch)("/"),
            children: wb("homePage:backToGames")
          })
        }), !eb && (0, Eb.jsx)(hb, {
          categories: sb
        }), eb && (0, Eb.jsx)("div", {
          className: Hb()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: sb.map((bb => (0, Eb.jsx)(mb, {
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