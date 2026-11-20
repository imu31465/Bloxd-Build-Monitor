export const id = 211;
export const ids = [211];
export const modules = {
  36250: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => eu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(1483),
      mu = yu(1026),
      Ju = yu(753),
      Nu = yu(1170),
      Xu = yu(1408),
      Vu = yu(1467),
      ru = yu(3372),
      Bu = yu(1043),
      xu = yu(3296),
      Su = yu(2441),
      pu = yu(1079);
    const Tu = 2;

    function Wu(uu) {
      return "firstPartyGame" === uu.type ? {
        type: "game",
        gameNameWithVariation: uu.gameNameWithVariation
      } : {
        type: "preview",
        preview: uu.preview
      }
    }

    function ju(uu) {
      let {
        game: Ru,
        disabled: yu,
        showPlaceholder: Eu
      } = uu;
      return null !== Ru ? (0, pu.jsx)(xu.e, {
        source: Wu(Ru),
        gameWidth: "100%",
        useLongRatio: !0,
        disabled: yu,
        entrySource: "customGamePlace"
      }) : Eu ? (0, pu.jsx)(xu.c, {
        gameWidth: "100%",
        useLongRatio: !0
      }) : null
    }

    function Hu(uu) {
      var Ru;
      let {
        category: yu,
        title: Eu,
        tintColour: Ku,
        layout: Qu,
        games: mu,
        landscape: Ju = !1
      } = uu;
      const {
        followsLeader: Nu
      } = (0, Su.d)(), Xu = null !== (Ru = null === mu || void 0 === mu ? void 0 : mu.slice(0, Qu.gameCount)) && void 0 !== Ru ? Ru : [], ru = {
        "--custom-game-place-tint": Ku
      };
      return (0, pu.jsxs)("div", {
        className: "CustomGamePlacePanel AnimFadeIn",
        style: ru,
        children: [(0, pu.jsx)("h2", {
          className: "CustomGamePlacePanelHeading",
          children: (0, pu.jsxs)(Vu.LinkPreserveSearch, {
            to: `/custom-games/${encodeURIComponent(yu)}`,
            className: "CustomGamePlacePanelTitle SmallTextBold",
            children: [(0, pu.jsx)("span", {
              children: Eu
            }), (0, pu.jsx)(Bu.c, {
              name: "arrow-up"
            })]
          })
        }), (0, pu.jsx)("div", {
          className: "CustomGamePlacePanelGames",
          style: {
            gridTemplateColumns: `repeat(${Ju?Qu.columnCount:Tu}, ${Ju?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
          },
          children: Array.from({
            length: Qu.gameCount
          }, ((uu, Ru) => {
            var yu;
            return (0, pu.jsx)(ju, {
              game: null !== (yu = Xu[Ru]) && void 0 !== yu ? yu : null,
              disabled: Nu,
              showPlaceholder: !mu
            }, Ru)
          }))
        })]
      })
    }

    function du(uu) {
      let {
        categories: Ru
      } = uu;

      function yu(uu) {
        const yu = Ru[uu];
        return (0, pu.jsx)(Hu, {
          ...yu,
          landscape: !0
        }, yu.id)
      }
      return (0, pu.jsxs)("div", {
        className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
        children: [(0, pu.jsxs)("div", {
          className: "CustomGamePlaceUpper",
          children: [(0, pu.jsxs)("div", {
            className: "CustomGamePlaceMain",
            children: [(0, pu.jsxs)("div", {
              className: "CustomGamePlaceRow",
              children: [yu(0), yu(2)]
            }), yu(1)]
          }), yu(4)]
        }), (0, pu.jsxs)("div", {
          className: "CustomGamePlaceRow",
          children: [yu(3), yu(5)]
        })]
      })
    }
    const bu = ["section1", "section2", "section3", "section4", "section5", "section6"],
      Cu = {
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
    var ku = yu(1093);

    function eu() {
      var uu;
      const {
        t: Ru
      } = (0, Nu.E)(), yu = (0, Qu.A)(), Eu = (0, ku.k)(), Bu = (0, ru.e)({
        refresh: !0
      }), xu = yu.customGamePlace;
      if (!(0, mu.i)(xu)) return (0, pu.jsx)(Vu.NavigatePreserveSearch, {
        to: "/"
      });
      const Su = Ju.b[xu],
        Tu = mu.e[xu],
        Wu = null !== (uu = null === Bu || void 0 === Bu ? void 0 : Bu[xu]) && void 0 !== uu ? uu : null,
        ju = [];
      for (let Ku = 0; Ku < Tu.length; Ku++) {
        var eu;
        const uu = bu[Ku];
        if (!uu) continue;
        const yu = Tu[Ku];
        ju.push({
          id: yu.id,
          category: yu.category,
          title: Ru(yu.displayTranslationKey),
          tintColour: yu.tintColour,
          layout: Cu[uu],
          games: null !== (eu = null === Wu || void 0 === Wu ? void 0 : Wu[yu.id]) && void 0 !== eu ? eu : null
        })
      }
      return (0, pu.jsxs)("div", {
        className: "CustomGamePlaceContainer AnimFadeIn",
        children: [(0, pu.jsx)("div", {
          className: "BackgroundImage",
          style: {
            backgroundImage: `url(/textures/games/${xu}/${Su.largePicture}.png)`
          }
        }), (0, pu.jsx)("h1", {
          className: "VisuallyHidden",
          children: Ru(Su.title)
        }), (0, pu.jsx)("div", {
          className: "CustomGamePlaceHeaderContainer",
          children: (0, pu.jsx)(Xu.b, {
            onClick: () => (0, Vu.navigatePreserveSearch)("/"),
            children: Ru("homePage:backToGames")
          })
        }), !Eu && (0, pu.jsx)(du, {
          categories: ju
        }), Eu && (0, pu.jsx)("div", {
          className: Ku()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
          children: ju.map((uu => (0, pu.jsx)(Hu, {
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