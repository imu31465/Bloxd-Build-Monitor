export const id = 99;
export const ids = [99];
export const modules = {
  4569: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => jU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(1049),
      PU = gU(1326),
      TU = gU(3194),
      qU = gU(135),
      KU = gU(3232),
      cU = gU(3223),
      GU = gU(1090);

    function jU(UU) {
      let {
        game: RU
      } = UU;
      const gU = (0, qU.l)() ? "large" : "small",
        tU = (0, KU.f)(RU, gU),
        jU = (0, TU.h)(tU),
        uU = void 0 !== jU.blurhash;
      return (0, GU.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [jU.isLoading && !uU && (0, GU.jsx)(PU.d, {
          loaderType: "Secondary"
        }), !jU.failed && (null !== jU.src || uU) && (0, GU.jsx)("div", {
          className: pU()("SchematicImage", cU.h, {
            SchematicImageFadeIn: jU.fadeIn && !uU
          }),
          style: (0, cU.e)(jU),
          children: (0, GU.jsx)(cU.c, {
            image: jU
          })
        }), jU.failed && (0, GU.jsx)("div", {
          className: "SchematicImageError",
          children: (0, GU.jsx)(EU.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4554: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => nU
    });
    gU(4562);
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(299),
      TU = gU(1007),
      qU = gU(1217),
      KU = gU(1181),
      cU = gU(1112),
      GU = gU(1461),
      jU = gU(4569),
      uU = gU(1412),
      CU = gU(4575),
      hU = gU(1326),
      QU = gU(1475),
      eU = gU(4302),
      WU = gU(1049),
      fU = gU(985),
      xU = gU(2320),
      mU = gU(4581),
      IU = gU(1497),
      JU = gU(1090);

    function wU() {
      const {
        t: UU
      } = (0, KU.B)(), RU = (0, QU.useNavigatePreserveSearch)(), gU = (0, xU.p)(), pU = (0, tU.useMemo)((() => [...fU.d].sort(((RU, tU) => {
        var pU, EU;
        const PU = (null !== (pU = (0, xU.d)(tU, gU)) && void 0 !== pU ? pU : 0) - (null !== (EU = (0, xU.d)(RU, gU)) && void 0 !== EU ? EU : 0);
        return 0 !== PU ? PU : (0, IU.k)(RU, UU).localeCompare((0, IU.k)(tU, UU))
      }))), [gU, UU]);
      return (0, JU.jsxs)(JU.Fragment, {
        children: [(0, JU.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, JU.jsx)("h1", {
            className: "StudioPageTitle",
            children: UU("studio:firstPartyGames")
          })
        }), (0, JU.jsx)(CU.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: UU("general:game")
          }, {
            key: "ccu",
            header: UU("studio:metricCcu")
          }],
          rows: pU,
          getRowKey: UU => UU,
          renderRow: tU => {
            var pU;
            return (0, JU.jsxs)("tr", {
              onClick: () => {
                RU((0, IU.m)((0, TU.f)(tU, !0)))
              },
              children: [(0, JU.jsx)("td", {
                children: (0, JU.jsx)(mU.f, {
                  thumbnail: (0, JU.jsx)(mU.c, {
                    game: tU
                  }),
                  name: (0, IU.k)(tU, UU)
                })
              }), (0, JU.jsx)("td", {
                children: (0, qU.R)(null !== (pU = (0, xU.d)(tU, gU)) && void 0 !== pU ? pU : 0)
              })]
            })
          }
        })]
      })
    }

    function nU() {
      const {
        t: UU
      } = (0, KU.B)(), RU = (0, QU.useNavigatePreserveSearch)(), {
        userContext: gU,
        isUserContextUpdating: pU
      } = (0, cU.e)(), {
        isCreating: fU,
        create: xU
      } = (0, eU.f)(), [nU, bU] = (0, tU.useState)(null), [oU, ZU] = (0, tU.useState)(null), [aU, YU] = (0, tU.useState)(!1);
      (0, tU.useEffect)((() => {
        pU || (YU(!1), GU.c.getPublishedGamePreviews(gU, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((UU => {
          bU({
            ...UU,
            results: (0, PU.fb)(UU.results)
          })
        })).catch((UU => {
          console.error("Failed to get owned published games", UU), YU(!0)
        })), GU.c.getOwnedUnpublishedGames(gU).then((UU => {
          ZU(UU)
        })).catch((UU => {
          console.error("Failed to get owned unpublished games", UU), YU(!0)
        })))
      }), [pU, gU]);
      const BU = null !== nU && null !== oU ? [...nU.results, ...oU] : [],
        VU = !aU && (null === nU || null === oU),
        rU = !VU && !aU && 0 === BU.length,
        XU = !pU && gU.playerHasRank("developer");
      return (0, JU.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, JU.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, JU.jsx)("h1", {
            className: "StudioPageTitle",
            children: UU("studio:myGames")
          }), (0, JU.jsxs)(uU.j, {
            onClick: xU,
            loading: fU,
            children: [(0, JU.jsx)(WU.c, {
              name: "plus"
            }), " ", UU("homePage:createCustomGame")]
          })]
        }), VU && (0, JU.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, JU.jsx)(hU.d, {})
        }), aU && (0, JU.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: UU("studio:failedToLoadGames")
        }), rU && (0, JU.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: UU("studio:noGamesYet")
        }), !VU && !aU && !rU && (0, JU.jsx)(CU.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: UU("general:game")
          }, {
            key: "status",
            header: UU("general:status")
          }, {
            key: "ccu",
            header: UU("studio:metricCcu")
          }, {
            key: "favourites",
            header: UU("general:favourites")
          }],
          rows: BU,
          getRowKey: UU => UU.schematicId,
          renderRow: gU => (0, JU.jsxs)("tr", {
            onClick: () => {
              var UU;
              UU = gU.schematicId, RU((0, IU.m)((0, TU.b)(UU)))
            },
            children: [(0, JU.jsx)("td", {
              children: (0, JU.jsx)(mU.f, {
                thumbnail: (0, JU.jsx)(jU.c, {
                  game: gU
                }),
                name: gU.name
              })
            }), (0, JU.jsx)("td", {
              children: (0, JU.jsx)("span", {
                className: EU()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: gU.gamePublished
                }),
                children: gU.gamePublished ? UU("general:published") : UU("general:draft")
              })
            }), (0, JU.jsx)("td", {
              children: (0, qU.R)(gU.ccu)
            }), (0, JU.jsx)("td", {
              children: (0, qU.R)(gU.favourites)
            })]
          })
        }), XU && (0, JU.jsx)(wU, {})]
      })
    }
  },
  4581: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      f: () => EU
    });
    var tU = gU(1497),
      pU = gU(1090);

    function EU(UU) {
      let {
        thumbnail: RU,
        name: gU
      } = UU;
      return (0, pU.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, pU.jsx)("div", {
          className: "StudioTableThumbnail",
          children: RU
        }), (0, pU.jsx)("span", {
          className: "StudioTableGameName",
          children: gU
        })]
      })
    }

    function PU(UU) {
      let {
        game: RU
      } = UU;
      return (0, pU.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, tU.i)(RU),
        alt: ""
      })
    }
  },
  4575: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => TU
    });
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(1090);

    function TU(UU) {
      let {
        columns: RU,
        rows: gU,
        getRowKey: pU,
        renderRow: TU,
        className: qU
      } = UU;
      return (0, PU.jsxs)("table", {
        className: EU()("Table", qU),
        children: [(0, PU.jsx)("thead", {
          children: (0, PU.jsx)("tr", {
            children: RU.map((UU => (0, PU.jsx)("th", {
              children: UU.header
            }, UU.key)))
          })
        }), (0, PU.jsx)("tbody", {
          children: gU.map((UU => (0, PU.jsx)(tU.Fragment, {
            children: TU(UU)
          }, pU(UU))))
        })]
      })
    }
  },
  4562: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);