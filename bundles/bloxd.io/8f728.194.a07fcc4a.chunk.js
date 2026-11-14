export const id = 194;
export const ids = [194];
export const modules = {
  35080: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Yc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(1344),
      uc = nc(906),
      sc = nc(623),
      Mc = nc(1051),
      Pc = nc(1255),
      qB = nc(1330),
      Oc = nc(2728),
      Tc = nc(926),
      fc = nc(2648),
      mB = nc(2013),
      ec = nc(957);
    const tB = 2;

    function Sc(cB) {
      return "firstPartyGame" === cB.type ? {
        type: "game",
        gameNameWithVariation: cB.gameNameWithVariation
      } : {
        type: "preview",
        preview: cB.preview
      }
    }

    function yB(cB) {
      let {
        game: Bc,
        disabled: nc,
        showPlaceholder: Vc
      } = cB;
      return null !== Bc ? (0, ec.jsx)(fc.g, {
        source: Sc(Bc),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: nc,
        entrySource: "customGamePlace"
      }) : Vc ? (0, ec.jsx)(fc.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function zB(cB) {
      var Bc;
      let {
        category: nc,
        title: Vc,
        tintColour: Ic,
        layout: rB,
        games: uc,
        landscape: sc = !1
      } = cB;
      const {
        followsLeader: Mc
      } = (0, mB.c)(), Pc = null !== (Bc = null === uc || void 0 === uc ? void 0 : uc.slice(0, rB.gameCount)) && void 0 !== Bc ? Bc : [], Oc = {
        "--custom-game-place-tint": Ic
      };
      return (0, ec.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: Oc,
        children: [(0, ec.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, ec.jsxs)(qB.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(nc)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, ec.jsx)("span", {
              children: Vc
            }), (0, ec.jsx)(Tc.e, {
              name: "arrow-up"
            })]
          })
        }), (0, ec.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${sc?rB.columnCount:tB}, ${sc?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: rB.gameCount
          }, ((cB, Bc) => {
            var nc;
            return (0, ec.jsx)(yB, {
              game: null !== (nc = Pc[Bc]) && void 0 !== nc ? nc : null,
              disabled: Mc,
              showPlaceholder: !uc
            }, Bc)
          }))
        })]
      })
    }

    function pc(cB) {
      let {
        categories: Bc
      } = cB;

      function nc(cB) {
        const nc = Bc[cB];
        return (0, ec.jsx)(zB, {
          ...nc,
          landscape: !0
        }, nc.id)
      }
      return (0, ec.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, ec.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, ec.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, ec.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [nc(0), nc(2)]
            }), nc(1)]
          }), nc(4)]
        }), (0, ec.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [nc(3), nc(5)]
        })]
      })
    }
    const hc = ["section1", "section2", "section3", "section4", "section5", "section6"],
      aB = {
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
    var lc = nc(974);

    function Yc() {
      var cB;
      const {
        t: Bc
      } = (0, Mc.x)(), nc = (0, rB.z)(), Vc = (0, lc.j)(), Tc = (0, Oc.e)({
        refresh: !0
      }), fc = nc.customGamePlace;
      if (!(0, uc.k)(fc)) return (0, ec.jsx)(qB.NavigatePreserveSearch, {
        to: "/"
      });
      const mB = sc.e[fc],
        tB = uc.d[fc],
        Sc = null !== (cB = null === Tc || void 0 === Tc ? void 0 : Tc[fc]) && void 0 !== cB ? cB : null,
        yB = [];
      for (let Ic = 0; Ic < tB.length; Ic++) {
        var Yc;
        const cB = hc[Ic];
        if (!cB) continue;
        const nc = tB[Ic];
        yB.push({
          id: nc.id,
          category: nc.category,
          title: Bc(nc.displayTranslationKey),
          tintColour: nc.tintColour,
          layout: aB[cB],
          games: null !== (Yc = null === Sc || void 0 === Sc ? void 0 : Sc[nc.id]) && void 0 !== Yc ? Yc : null
        })
      }
      return (0, ec.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, ec.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${fc}/${mB.largePicture}.png)`
          }
        }), (0, ec.jsx)("h1", {
          className: "VisuallyHidden",
          children: Bc(mB.title)
        }), (0, ec.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, ec.jsx)(Pc.c, {
            onClick: () => (0, qB.navigatePreserveSearch)("/"),
            children: Bc("homePage:backToGames")
          })
        }), !Vc && (0, ec.jsx)(pc, {
          categories: yB
        }), Vc && (0, ec.jsx)("div", {
          className: Ic()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: yB.map((cB => (0, ec.jsx)(zB, {
            category: cB.category,
            title: cB.title,
            tintColour: cB.tintColour,
            layout: cB.layout,
            games: cB.games
          }, cB.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);