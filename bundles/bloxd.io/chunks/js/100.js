export const id = 100;
export const ids = [100];
export const modules = {
  4861: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => CT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(1061),
      OT = cT(1348),
      yT = cT(3449),
      fT = cT(159),
      xT = cT(3491),
      IT = cT(3482),
      AT = cT(1099);

    function CT(TT) {
      let {
        game: kT
      } = TT;
      const cT = (0, fT.m)() ? "large" : "small",
        lT = (0, xT.i)(kT, cT),
        CT = (0, yT.f)(lT),
        jT = void 0 !== CT.blurhash;
      return (0, AT.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [CT.isLoading && !jT && (0, AT.jsx)(OT.d, {
          loaderType: "Secondary"
        }), !CT.failed && (null !== CT.src || jT) && (0, AT.jsx)("div", {
          className: MT()("SchematicImage", IT.g, {
            SchematicImageFadeIn: CT.fadeIn && !jT
          }),
          style: (0, IT.f)(CT),
          children: (0, AT.jsx)(IT.d, {
            image: CT
          })
        }), CT.failed && (0, AT.jsx)("div", {
          className: "SchematicImageError",
          children: (0, AT.jsx)(KT.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4848: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => wT
    });
    cT(4855);
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(328),
      yT = cT(1026),
      fT = cT(1226),
      xT = cT(1195),
      IT = cT(1130),
      AT = cT(1518),
      CT = cT(4861),
      jT = cT(1470),
      vT = cT(4864),
      tT = cT(1348),
      hT = cT(1530),
      NT = cT(4618),
      QT = cT(1061),
      ST = cT(1009),
      DT = cT(2563),
      aT = cT(4867),
      FT = cT(1554),
      rT = cT(1099);

    function PT() {
      const {
        t: TT
      } = (0, xT.B)(), kT = (0, hT.useNavigatePreserveSearch)(), cT = (0, DT.o)(), MT = (0, lT.useMemo)((() => [...ST.b].sort(((kT, lT) => {
        var MT, KT;
        const OT = (null !== (MT = (0, DT.e)(lT, cT)) && void 0 !== MT ? MT : 0) - (null !== (KT = (0, DT.e)(kT, cT)) && void 0 !== KT ? KT : 0);
        return 0 !== OT ? OT : (0, FT.m)(kT, TT).localeCompare((0, FT.m)(lT, TT))
      }))), [cT, TT]);
      return (0, rT.jsxs)(rT.Fragment, {
        children: [(0, rT.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, rT.jsx)("h1", {
            className: "StudioPageTitle",
            children: TT("studio:firstPartyGames")
          })
        }), (0, rT.jsx)(vT.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: TT("general:game")
          }, {
            key: "ccu",
            header: TT("studio:metricCcu")
          }],
          rows: MT,
          getRowKey: TT => TT,
          renderRow: lT => {
            var MT;
            return (0, rT.jsxs)("tr", {
              onClick: () => {
                kT((0, FT.o)((0, yT.h)(lT, !0)))
              },
              children: [(0, rT.jsx)("td", {
                children: (0, rT.jsx)(aT.e, {
                  thumbnail: (0, rT.jsx)(aT.b, {
                    game: lT
                  }),
                  name: (0, FT.m)(lT, TT)
                })
              }), (0, rT.jsx)("td", {
                children: (0, fT.P)(null !== (MT = (0, DT.e)(lT, cT)) && void 0 !== MT ? MT : 0)
              })]
            })
          }
        })]
      })
    }

    function wT() {
      const {
        t: TT
      } = (0, xT.B)(), kT = (0, hT.useNavigatePreserveSearch)(), {
        userContext: cT,
        isUserContextUpdating: MT
      } = (0, IT.b)(), {
        isCreating: ST,
        create: DT
      } = (0, NT.f)(), [wT, mT] = (0, lT.useState)(null), [bT, zT] = (0, lT.useState)(null), [JT, oT] = (0, lT.useState)(!1);
      (0, lT.useEffect)((() => {
        MT || (oT(!1), AT.d.getPublishedGamePreviews(cT, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((TT => {
          mT({
            ...TT,
            results: (0, OT.R)(TT.results)
          })
        })).catch((TT => {
          console.error("Failed to get owned published games", TT), oT(!0)
        })), AT.d.getOwnedUnpublishedGames(cT).then((TT => {
          zT(TT)
        })).catch((TT => {
          console.error("Failed to get owned unpublished games", TT), oT(!0)
        })))
      }), [MT, cT]);
      const HT = null !== wT && null !== bT ? [...wT.results, ...bT] : [],
        eT = !JT && (null === wT || null === bT),
        GT = !eT && !JT && 0 === HT.length,
        VT = !MT && cT.playerHasRank("developer");
      return (0, rT.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, rT.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, rT.jsx)("h1", {
            className: "StudioPageTitle",
            children: TT("studio:myGames")
          }), (0, rT.jsxs)(jT.m, {
            onClick: DT,
            loading: ST,
            children: [(0, rT.jsx)(QT.e, {
              name: "plus"
            }), " ", TT("homePage:createCustomGame")]
          })]
        }), eT && (0, rT.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, rT.jsx)(tT.d, {})
        }), JT && (0, rT.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: TT("studio:failedToLoadGames")
        }), GT && (0, rT.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: TT("studio:noGamesYet")
        }), !eT && !JT && !GT && (0, rT.jsx)(vT.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: TT("general:game")
          }, {
            key: "status",
            header: TT("general:status")
          }, {
            key: "ccu",
            header: TT("studio:metricCcu")
          }, {
            key: "favourites",
            header: TT("general:favourites")
          }],
          rows: HT,
          getRowKey: TT => TT.schematicId,
          renderRow: cT => (0, rT.jsxs)("tr", {
            onClick: () => {
              var TT;
              TT = cT.schematicId, kT((0, FT.o)((0, yT.e)(TT)))
            },
            children: [(0, rT.jsx)("td", {
              children: (0, rT.jsx)(aT.e, {
                thumbnail: (0, rT.jsx)(CT.e, {
                  game: cT
                }),
                name: cT.name
              })
            }), (0, rT.jsx)("td", {
              children: (0, rT.jsx)("span", {
                className: KT()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: cT.gamePublished
                }),
                children: cT.gamePublished ? TT("general:published") : TT("general:draft")
              })
            }), (0, rT.jsx)("td", {
              children: (0, fT.P)(cT.ccu)
            }), (0, rT.jsx)("td", {
              children: (0, fT.P)(cT.favourites)
            })]
          })
        }), VT && (0, rT.jsx)(PT, {})]
      })
    }
  },
  4867: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      e: () => KT
    });
    var lT = cT(1554),
      MT = cT(1099);

    function KT(TT) {
      let {
        thumbnail: kT,
        name: cT
      } = TT;
      return (0, MT.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, MT.jsx)("div", {
          className: "StudioTableThumbnail",
          children: kT
        }), (0, MT.jsx)("span", {
          className: "StudioTableGameName",
          children: cT
        })]
      })
    }

    function OT(TT) {
      let {
        game: kT
      } = TT;
      return (0, MT.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, lT.k)(kT),
        alt: ""
      })
    }
  },
  4864: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1099);

    function yT(TT) {
      let {
        columns: kT,
        rows: cT,
        getRowKey: MT,
        renderRow: yT,
        className: fT
      } = TT;
      return (0, OT.jsxs)("table", {
        className: KT()("Table", fT),
        children: [(0, OT.jsx)("thead", {
          children: (0, OT.jsx)("tr", {
            children: kT.map((TT => (0, OT.jsx)("th", {
              children: TT.header
            }, TT.key)))
          })
        }), (0, OT.jsx)("tbody", {
          children: cT.map((TT => (0, OT.jsx)(lT.Fragment, {
            children: yT(TT)
          }, MT(TT))))
        })]
      })
    }
  },
  4855: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);