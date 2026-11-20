export const id = 211;
export const ids = [211];
export const modules = {
  36100: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => Ek
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(1473),
      Xk = Bk(1018),
      bk = Bk(729),
      wk = Bk(1149),
      dk = Bk(1389),
      sk = Bk(1459),
      Vk = Bk(3360),
      Jk = Bk(1028),
      Ak = Bk(3284),
      ek = Bk(2424),
      yk = Bk(1069);
    const fk = 2;

    function mk(kk) {
      return "firstPartyGame" === kk.type ? {
        type: "game",
        gameNameWithVariation: kk.gameNameWithVariation
      } : {
        type: "preview",
        preview: kk.preview
      }
    }

    function Wk(kk) {
      let {
        game: Fk,
        disabled: Bk,
        showPlaceholder: Rk
      } = kk;
      return null !== Fk ? (0, yk.jsx)(Ak.g, {
        source: mk(Fk),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: Bk,
        entrySource: "customGamePlace"
      }) : Rk ? (0, yk.jsx)(Ak.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function vk(kk) {
      var Fk;
      let {
        category: Bk,
        title: Rk,
        tintColour: tk,
        layout: ak,
        games: Xk,
        landscape: bk = !1
      } = kk;
      const {
        followsLeader: wk
      } = (0, ek.g)(), dk = null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk.slice(0, ak.gameCount)) && void 0 !== Fk ? Fk : [], Vk = {
        "--custom-game-place-tint": tk
      };
      return (0, yk.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: Vk,
        children: [(0, yk.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, yk.jsxs)(sk.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(Bk)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, yk.jsx)("span", {
              children: Rk
            }), (0, yk.jsx)(Jk.d, {
              name: "arrow-up"
            })]
          })
        }), (0, yk.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${bk?ak.columnCount:fk}, ${bk?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: ak.gameCount
          }, ((kk, Fk) => {
            var Bk;
            return (0, yk.jsx)(Wk, {
              game: null !== (Bk = dk[Fk]) && void 0 !== Bk ? Bk : null,
              disabled: wk,
              showPlaceholder: !Xk
            }, Fk)
          }))
        })]
      })
    }

    function ik(kk) {
      let {
        categories: Fk
      } = kk;

      function Bk(kk) {
        const Bk = Fk[kk];
        return (0, yk.jsx)(vk, {
          ...Bk,
          landscape: !0
        }, Bk.id)
      }
      return (0, yk.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, yk.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, yk.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, yk.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [Bk(0), Bk(2)]
            }), Bk(1)]
          }), Bk(4)]
        }), (0, yk.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [Bk(3), Bk(5)]
        })]
      })
    }
    const Yk = ["section1", "section2", "section3", "section4", "section5", "section6"],
      Lk = {
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
    var Ok = Bk(1083);

    function Ek() {
      var kk;
      const {
        t: Fk
      } = (0, wk.x)(), Bk = (0, ak.x)(), Rk = (0, Ok.m)(), Jk = (0, Vk.d)({
        refresh: !0
      }), Ak = Bk.customGamePlace;
      if (!(0, Xk.n)(Ak)) return (0, yk.jsx)(sk.NavigatePreserveSearch, {
        to: "/"
      });
      const ek = bk.e[Ak],
        fk = Xk.b[Ak],
        mk = null !== (kk = null === Jk || void 0 === Jk ? void 0 : Jk[Ak]) && void 0 !== kk ? kk : null,
        Wk = [];
      for (let tk = 0; tk < fk.length; tk++) {
        var Ek;
        const kk = Yk[tk];
        if (!kk) continue;
        const Bk = fk[tk];
        Wk.push({
          id: Bk.id,
          category: Bk.category,
          title: Fk(Bk.displayTranslationKey),
          tintColour: Bk.tintColour,
          layout: Lk[kk],
          games: null !== (Ek = null === mk || void 0 === mk ? void 0 : mk[Bk.id]) && void 0 !== Ek ? Ek : null
        })
      }
      return (0, yk.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, yk.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${Ak}/${ek.largePicture}.png)`
          }
        }), (0, yk.jsx)("h1", {
          className: "VisuallyHidden",
          children: Fk(ek.title)
        }), (0, yk.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, yk.jsx)(dk.c, {
            onClick: () => (0, sk.navigatePreserveSearch)("/"),
            children: Fk("homePage:backToGames")
          })
        }), !Rk && (0, yk.jsx)(ik, {
          categories: Wk
        }), Rk && (0, yk.jsx)("div", {
          className: tk()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: Wk.map((kk => (0, yk.jsx)(vk, {
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