export const id = 215;
export const ids = [215];
export const modules = {
  36365: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => zk
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(1485),
      yk = Ik(1048),
      lk = Ik(768),
      ak = Ik(1179),
      qk = Ik(1406),
      Lk = Ik(1475),
      tk = Ik(3503),
      Zk = Ik(1066),
      jk = Ik(3414),
      ek = Ik(2513),
      wk = Ik(1096);
    const Hk = 2;

    function Jk(kk) {
      return "firstPartyGame" === kk.type ? {
        type: "game",
        gameNameWithVariation: kk.gameNameWithVariation
      } : {
        type: "preview",
        preview: kk.preview
      }
    }

    function xk(kk) {
      let {
        game: Fk,
        disabled: Ik,
        showPlaceholder: Xk
      } = kk;
      return null !== Fk ? (0, wk.jsx)(jk.c, {
        source: Jk(Fk),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: Ik,
        entrySource: "customGamePlace"
      }) : Xk ? (0, wk.jsx)(jk.b, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function Pk(kk) {
      var Fk;
      let {
        category: Ik,
        title: Xk,
        tintColour: Tk,
        layout: ik,
        games: yk,
        landscape: lk = !1
      } = kk;
      const {
        followsLeader: ak
      } = (0, ek.e)(), qk = null !== (Fk = null === yk || void 0 === yk ? void 0 : yk.slice(0, ik.gameCount)) && void 0 !== Fk ? Fk : [], tk = {
        "--custom-game-place-tint": Tk
      };
      return (0, wk.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: tk,
        children: [(0, wk.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, wk.jsxs)(Lk.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(Ik)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, wk.jsx)("span", {
              children: Xk
            }), (0, wk.jsx)(Zk.e, {
              name: "arrow-up"
            })]
          })
        }), (0, wk.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${lk?ik.columnCount:Hk}, ${lk?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: ik.gameCount
          }, ((kk, Fk) => {
            var Ik;
            return (0, wk.jsx)(xk, {
              game: null !== (Ik = qk[Fk]) && void 0 !== Ik ? Ik : null,
              disabled: ak,
              showPlaceholder: !yk
            }, Fk)
          }))
        })]
      })
    }

    function Kk(kk) {
      let {
        categories: Fk
      } = kk;

      function Ik(kk) {
        const Ik = Fk[kk];
        return (0, wk.jsx)(Pk, {
          ...Ik,
          landscape: !0
        }, Ik.id)
      }
      return (0, wk.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, wk.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, wk.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, wk.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [Ik(0), Ik(2)]
            }), Ik(1)]
          }), Ik(4)]
        }), (0, wk.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [Ik(3), Ik(5)]
        })]
      })
    }
    const Qk = ["section1", "section2", "section3", "section4", "section5", "section6"],
      sk = {
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
    var Vk = Ik(1103);

    function zk() {
      var kk;
      const {
        t: Fk
      } = (0, ak.y)(), Ik = (0, ik.A)(), Xk = (0, Vk.h)(), Zk = (0, tk.c)({
        refresh: !0
      }), jk = Ik.customGamePlace;
      if (!(0, yk.l)(jk)) return (0, wk.jsx)(Lk.NavigatePreserveSearch, {
        to: "/"
      });
      const ek = lk.e[jk],
        Hk = yk.e[jk],
        Jk = null !== (kk = null === Zk || void 0 === Zk ? void 0 : Zk[jk]) && void 0 !== kk ? kk : null,
        xk = [];
      for (let Tk = 0; Tk < Hk.length; Tk++) {
        var zk;
        const kk = Qk[Tk];
        if (!kk) continue;
        const Ik = Hk[Tk];
        xk.push({
          id: Ik.id,
          category: Ik.category,
          title: Fk(Ik.displayTranslationKey),
          tintColour: Ik.tintColour,
          layout: sk[kk],
          games: null !== (zk = null === Jk || void 0 === Jk ? void 0 : Jk[Ik.id]) && void 0 !== zk ? zk : null
        })
      }
      return (0, wk.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, wk.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${jk}/${ek.largePicture}.png)`
          }
        }), (0, wk.jsx)("h1", {
          className: "VisuallyHidden",
          children: Fk(ek.title)
        }), (0, wk.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, wk.jsx)(qk.c, {
            onClick: () => (0, Lk.navigatePreserveSearch)("/"),
            children: Fk("homePage:backToGames")
          })
        }), !Xk && (0, wk.jsx)(Kk, {
          categories: xk
        }), Xk && (0, wk.jsx)("div", {
          className: Tk()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: xk.map((kk => (0, wk.jsx)(Pk, {
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