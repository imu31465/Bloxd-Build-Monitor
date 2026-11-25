export const id = 219;
export const ids = [219];
export const modules = {
  36759: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Ju
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(1580),
      Xu = ju(1100),
      lu = ju(822),
      qu = ju(1244),
      fu = ju(1506),
      Cu = ju(1570),
      bu = ju(3756),
      cu = ju(1116),
      Nu = ju(3667),
      Ou = ju(2709),
      Yu = ju(1154);
    const hu = 2;

    function Du(uu) {
      return "firstPartyGame" === uu.type ? {
        type: "game",
        gameNameWithVariation: uu.gameNameWithVariation
      } : {
        type: "preview",
        preview: uu.preview
      }
    }

    function gu(uu) {
      let {
        game: Eu,
        disabled: ju,
        showPlaceholder: su
      } = uu;
      return null !== Eu ? (0, Yu.jsx)(Nu.e, {
        source: Du(Eu),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: ju,
        entrySource: "customGamePlace"
      }) : su ? (0, Yu.jsx)(Nu.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function Mu(uu) {
      var Eu;
      let {
        category: ju,
        title: su,
        tintColour: Uu,
        layout: Zu,
        games: Xu,
        landscape: lu = !1
      } = uu;
      const {
        followsLeader: qu
      } = (0, Ou.g)(), fu = null !== (Eu = null === Xu || void 0 === Xu ? void 0 : Xu.slice(0, Zu.gameCount)) && void 0 !== Eu ? Eu : [], bu = {
        "--custom-game-place-tint": Uu
      };
      return (0, Yu.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: bu,
        children: [(0, Yu.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, Yu.jsxs)(Cu.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(ju)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, Yu.jsx)("span", {
              children: su
            }), (0, Yu.jsx)(cu.e, {
              name: "arrow-up"
            })]
          })
        }), (0, Yu.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${lu?Zu.columnCount:hu}, ${lu?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: Zu.gameCount
          }, ((uu, Eu) => {
            var ju;
            return (0, Yu.jsx)(gu, {
              game: null !== (ju = fu[Eu]) && void 0 !== ju ? ju : null,
              disabled: qu,
              showPlaceholder: !Xu
            }, Eu)
          }))
        })]
      })
    }

    function eu(uu) {
      let {
        categories: Eu
      } = uu;

      function ju(uu) {
        const ju = Eu[uu];
        return (0, Yu.jsx)(Mu, {
          ...ju,
          landscape: !0
        }, ju.id)
      }
      return (0, Yu.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, Yu.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, Yu.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, Yu.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [ju(0), ju(2)]
            }), ju(1)]
          }), ju(4)]
        }), (0, Yu.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [ju(3), ju(5)]
        })]
      })
    }
    const Gu = ["section1", "section2", "section3", "section4", "section5", "section6"],
      pu = {
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
    var wu = ju(1170);

    function Ju() {
      var uu;
      const {
        t: Eu
      } = (0, qu.A)(), ju = (0, Zu.B)(), su = (0, wu.l)(), cu = (0, bu.b)({
        refresh: !0
      }), Nu = ju.customGamePlace;
      if (!(0, Xu.m)(Nu)) return (0, Yu.jsx)(Cu.NavigatePreserveSearch, {
        to: "/"
      });
      const Ou = lu.c[Nu],
        hu = Xu.d[Nu],
        Du = null !== (uu = null === cu || void 0 === cu ? void 0 : cu[Nu]) && void 0 !== uu ? uu : null,
        gu = [];
      for (let Uu = 0; Uu < hu.length; Uu++) {
        var Ju;
        const uu = Gu[Uu];
        if (!uu) continue;
        const ju = hu[Uu];
        gu.push({
          id: ju.id,
          category: ju.category,
          title: Eu(ju.displayTranslationKey),
          tintColour: ju.tintColour,
          layout: pu[uu],
          games: null !== (Ju = null === Du || void 0 === Du ? void 0 : Du[ju.id]) && void 0 !== Ju ? Ju : null
        })
      }
      return (0, Yu.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, Yu.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${Nu}/${Ou.largePicture}.png)`
          }
        }), (0, Yu.jsx)("h1", {
          className: "VisuallyHidden",
          children: Eu(Ou.title)
        }), (0, Yu.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, Yu.jsx)(fu.d, {
            onClick: () => (0, Cu.navigatePreserveSearch)("/"),
            children: Eu("homePage:backToGames")
          })
        }), !su && (0, Yu.jsx)(eu, {
          categories: gu
        }), su && (0, Yu.jsx)("div", {
          className: Uu()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: gu.map((uu => (0, Yu.jsx)(Mu, {
            category: uu.category,
            title: uu.title,
            tintColour: uu.tintColour,
            layout: uu.layout,
            games: uu.games
          }, uu.id)))
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);