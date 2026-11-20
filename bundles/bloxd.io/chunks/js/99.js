export const id = 99;
export const ids = [99];
export const modules = {
  4686: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Bu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(1043),
      mu = yu(1300),
      Ju = yu(3318),
      Nu = yu(145),
      Xu = yu(3361),
      Vu = yu(3347),
      ru = yu(1079);

    function Bu(uu) {
      let {
        game: Ru
      } = uu;
      const yu = (0, Nu.n)() ? "large" : "small",
        Eu = (0, Xu.g)(Ru, yu),
        Bu = (0, Ju.g)(Eu),
        xu = void 0 !== Bu.blurhash;
      return (0, ru.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Bu.isLoading && !xu && (0, ru.jsx)(mu.b, {
          loaderType: "Secondary"
        }), !Bu.failed && (null !== Bu.src || xu) && (0, ru.jsx)("div", {
          className: Ku()("SchematicImage", Vu.h, {
            SchematicImageFadeIn: Bu.fadeIn && !xu
          }),
          style: (0, Vu.f)(Bu),
          children: (0, ru.jsx)(Vu.c, {
            image: Bu
          })
        }), Bu.failed && (0, ru.jsx)("div", {
          className: "SchematicImageError",
          children: (0, ru.jsx)(Qu.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4674: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Au
    });
    yu(4677);
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(330),
      Ju = yu(1011),
      Nu = yu(1199),
      Xu = yu(1170),
      Vu = yu(1107),
      ru = yu(1447),
      Bu = yu(4686),
      xu = yu(1408),
      Su = yu(4689),
      pu = yu(1300),
      Tu = yu(1467),
      Wu = yu(4418),
      ju = yu(1043),
      Hu = yu(998),
      du = yu(2407),
      bu = yu(4698),
      Cu = yu(1497),
      ku = yu(1079);

    function eu() {
      const {
        t: uu
      } = (0, Xu.E)(), Ru = (0, Tu.useNavigatePreserveSearch)(), yu = (0, du.g)(), Ku = (0, Eu.useMemo)((() => [...Hu.d].sort(((Ru, Eu) => {
        var Ku, Qu;
        const mu = (null !== (Ku = (0, du.c)(Eu, yu)) && void 0 !== Ku ? Ku : 0) - (null !== (Qu = (0, du.c)(Ru, yu)) && void 0 !== Qu ? Qu : 0);
        return 0 !== mu ? mu : (0, Cu.i)(Ru, uu).localeCompare((0, Cu.i)(Eu, uu))
      }))), [yu, uu]);
      return (0, ku.jsxs)(ku.Fragment, {
        children: [(0, ku.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, ku.jsx)("h1", {
            className: "StudioPageTitle",
            children: uu("studio:firstPartyGames")
          })
        }), (0, ku.jsx)(Su.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: uu("general:game")
          }, {
            key: "ccu",
            header: uu("studio:metricCcu")
          }],
          rows: Ku,
          getRowKey: uu => uu,
          renderRow: Eu => {
            var Ku;
            return (0, ku.jsxs)("tr", {
              onClick: () => {
                Ru((0, Cu.j)((0, Ju.f)(Eu, !0)))
              },
              children: [(0, ku.jsx)("td", {
                children: (0, ku.jsx)(bu.g, {
                  thumbnail: (0, ku.jsx)(bu.c, {
                    game: Eu
                  }),
                  name: (0, Cu.i)(Eu, uu)
                })
              }), (0, ku.jsx)("td", {
                children: (0, Nu.Q)(null !== (Ku = (0, du.c)(Eu, yu)) && void 0 !== Ku ? Ku : 0)
              })]
            })
          }
        })]
      })
    }

    function Au() {
      const {
        t: uu
      } = (0, Xu.E)(), Ru = (0, Tu.useNavigatePreserveSearch)(), {
        userContext: yu,
        isUserContextUpdating: Ku
      } = (0, Vu.d)(), {
        isCreating: Hu,
        create: du
      } = (0, Wu.i)(), [Au, Du] = (0, Eu.useState)(null), [Mu, Iu] = (0, Eu.useState)(null), [Gu, Uu] = (0, Eu.useState)(!1);
      (0, Eu.useEffect)((() => {
        Ku || (Uu(!1), ru.e.getPublishedGamePreviews(yu, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((uu => {
          Du({
            ...uu,
            results: (0, mu.cb)(uu.results)
          })
        })).catch((uu => {
          console.error("Failed to get owned published games", uu), Uu(!0)
        })), ru.e.getOwnedUnpublishedGames(yu).then((uu => {
          Iu(uu)
        })).catch((uu => {
          console.error("Failed to get owned unpublished games", uu), Uu(!0)
        })))
      }), [Ku, yu]);
      const nu = null !== Au && null !== Mu ? [...Au.results, ...Mu] : [],
        su = !Gu && (null === Au || null === Mu),
        tu = !su && !Gu && 0 === nu.length,
        lu = !Ku && yu.playerHasRank("developer");
      return (0, ku.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, ku.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, ku.jsx)("h1", {
            className: "StudioPageTitle",
            children: uu("studio:myGames")
          }), (0, ku.jsxs)(xu.l, {
            onClick: du,
            loading: Hu,
            children: [(0, ku.jsx)(ju.c, {
              name: "plus"
            }), " ", uu("homePage:createCustomGame")]
          })]
        }), su && (0, ku.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, ku.jsx)(pu.b, {})
        }), Gu && (0, ku.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: uu("studio:failedToLoadGames")
        }), tu && (0, ku.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: uu("studio:noGamesYet")
        }), !su && !Gu && !tu && (0, ku.jsx)(Su.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: uu("general:game")
          }, {
            key: "status",
            header: uu("general:status")
          }, {
            key: "ccu",
            header: uu("studio:metricCcu")
          }, {
            key: "favourites",
            header: uu("general:favourites")
          }],
          rows: nu,
          getRowKey: uu => uu.schematicId,
          renderRow: yu => (0, ku.jsxs)("tr", {
            onClick: () => {
              var uu;
              uu = yu.schematicId, Ru((0, Cu.j)((0, Ju.d)(uu)))
            },
            children: [(0, ku.jsx)("td", {
              children: (0, ku.jsx)(bu.g, {
                thumbnail: (0, ku.jsx)(Bu.e, {
                  game: yu
                }),
                name: yu.name
              })
            }), (0, ku.jsx)("td", {
              children: (0, ku.jsx)("span", {
                className: Qu()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: yu.gamePublished
                }),
                children: yu.gamePublished ? uu("general:published") : uu("general:draft")
              })
            }), (0, ku.jsx)("td", {
              children: (0, Nu.Q)(yu.ccu)
            }), (0, ku.jsx)("td", {
              children: (0, Nu.Q)(yu.favourites)
            })]
          })
        }), lu && (0, ku.jsx)(eu, {})]
      })
    }
  },
  4698: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu,
      g: () => Qu
    });
    var Eu = yu(1497),
      Ku = yu(1079);

    function Qu(uu) {
      let {
        thumbnail: Ru,
        name: yu
      } = uu;
      return (0, Ku.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Ku.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Ru
        }), (0, Ku.jsx)("span", {
          className: "StudioTableGameName",
          children: yu
        })]
      })
    }

    function mu(uu) {
      let {
        game: Ru
      } = uu;
      return (0, Ku.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Eu.g)(Ru),
        alt: ""
      })
    }
  },
  4689: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(1079);

    function Ju(uu) {
      let {
        columns: Ru,
        rows: yu,
        getRowKey: Ku,
        renderRow: Ju,
        className: Nu
      } = uu;
      return (0, mu.jsxs)("table", {
        className: Qu()("Table", Nu),
        children: [(0, mu.jsx)("thead", {
          children: (0, mu.jsx)("tr", {
            children: Ru.map((uu => (0, mu.jsx)("th", {
              children: uu.header
            }, uu.key)))
          })
        }), (0, mu.jsx)("tbody", {
          children: yu.map((uu => (0, mu.jsx)(Eu.Fragment, {
            children: Ju(uu)
          }, Ku(uu))))
        })]
      })
    }
  },
  4677: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);