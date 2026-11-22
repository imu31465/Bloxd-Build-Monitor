export const id = 216;
export const ids = [216];
export const modules = {
  35925: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => jk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(1496),
      bk = ik(1017),
      rk = ik(741),
      Pk = ik(1172),
      mk = ik(1410),
      Mk = ik(1479),
      Kk = ik(3505),
      xk = ik(1033),
      nk = ik(3433),
      Uk = ik(2529),
      Hk = ik(1066);
    const wk = 2;

    function lk(kk) {
      return "firstPartyGame" === kk.type ? {
        type: "game",
        gameNameWithVariation: kk.gameNameWithVariation
      } : {
        type: "preview",
        preview: kk.preview
      }
    }

    function pk(kk) {
      let {
        game: ek,
        disabled: ik,
        showPlaceholder: Dk
      } = kk;
      return null !== ek ? (0, Hk.jsx)(nk.g, {
        source: lk(ek),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: ik,
        entrySource: "customGamePlace"
      }) : Dk ? (0, Hk.jsx)(nk.d, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function yk(kk) {
      var ek;
      let {
        category: ik,
        title: Dk,
        tintColour: fk,
        layout: Sk,
        games: bk,
        landscape: rk = !1
      } = kk;
      const {
        followsLeader: Pk
      } = (0, Uk.d)(), mk = null !== (ek = null === bk || void 0 === bk ? void 0 : bk.slice(0, Sk.gameCount)) && void 0 !== ek ? ek : [], Kk = {
        "--custom-game-place-tint": fk
      };
      return (0, Hk.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: Kk,
        children: [(0, Hk.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, Hk.jsxs)(Mk.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(ik)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, Hk.jsx)("span", {
              children: Dk
            }), (0, Hk.jsx)(xk.d, {
              name: "arrow-up"
            })]
          })
        }), (0, Hk.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${rk?Sk.columnCount:wk}, ${rk?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: Sk.gameCount
          }, ((kk, ek) => {
            var ik;
            return (0, Hk.jsx)(pk, {
              game: null !== (ik = mk[ek]) && void 0 !== ik ? ik : null,
              disabled: Pk,
              showPlaceholder: !bk
            }, ek)
          }))
        })]
      })
    }

    function Yk(kk) {
      let {
        categories: ek
      } = kk;

      function ik(kk) {
        const ik = ek[kk];
        return (0, Hk.jsx)(yk, {
          ...ik,
          landscape: !0
        }, ik.id)
      }
      return (0, Hk.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, Hk.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, Hk.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, Hk.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [ik(0), ik(2)]
            }), ik(1)]
          }), ik(4)]
        }), (0, Hk.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [ik(3), ik(5)]
        })]
      })
    }
    const Lk = ["section1", "section2", "section3", "section4", "section5", "section6"],
      Ck = {
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
    var Ak = ik(1085);

    function jk() {
      var kk;
      const {
        t: ek
      } = (0, Pk.D)(), ik = (0, Sk.y)(), Dk = (0, Ak.k)(), xk = (0, Kk.b)({
        refresh: !0
      }), nk = ik.customGamePlace;
      if (!(0, bk.i)(nk)) return (0, Hk.jsx)(Mk.NavigatePreserveSearch, {
        to: "/"
      });
      const Uk = rk.d[nk],
        wk = bk.b[nk],
        lk = null !== (kk = null === xk || void 0 === xk ? void 0 : xk[nk]) && void 0 !== kk ? kk : null,
        pk = [];
      for (let fk = 0; fk < wk.length; fk++) {
        var jk;
        const kk = Lk[fk];
        if (!kk) continue;
        const ik = wk[fk];
        pk.push({
          id: ik.id,
          category: ik.category,
          title: ek(ik.displayTranslationKey),
          tintColour: ik.tintColour,
          layout: Ck[kk],
          games: null !== (jk = null === lk || void 0 === lk ? void 0 : lk[ik.id]) && void 0 !== jk ? jk : null
        })
      }
      return (0, Hk.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, Hk.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${nk}/${Uk.largePicture}.png)`
          }
        }), (0, Hk.jsx)("h1", {
          className: "VisuallyHidden",
          children: ek(Uk.title)
        }), (0, Hk.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, Hk.jsx)(mk.e, {
            onClick: () => (0, Mk.navigatePreserveSearch)("/"),
            children: ek("homePage:backToGames")
          })
        }), !Dk && (0, Hk.jsx)(Yk, {
          categories: pk
        }), Dk && (0, Hk.jsx)("div", {
          className: fk()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: pk.map((kk => (0, Hk.jsx)(yk, {
            category: kk.category,
            title: kk.title,
            tintColour: kk.tintColour,
            layout: kk.layout,
            games: kk.games
          }, kk.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);