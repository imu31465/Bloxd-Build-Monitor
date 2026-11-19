export const id = 100;
export const ids = [100];
export const modules = {
  4398: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(1055),
      WT = IT(1310),
      XT = IT(3061),
      BT = IT(139),
      FT = IT(3105),
      ST = IT(3091),
      DT = IT(1083);

    function LT(TT) {
      let {
        game: oT
      } = TT;
      const IT = (0, BT.j)() ? "large" : "small",
        iT = (0, FT.g)(oT, IT),
        LT = (0, XT.g)(iT),
        xT = void 0 !== LT.blurhash;
      return (0, DT.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [LT.isLoading && !xT && (0, DT.jsx)(WT.d, {
          loaderType: "Secondary"
        }), !LT.failed && (null !== LT.src || xT) && (0, DT.jsx)("div", {
          className: zT()("SchematicImage", ST.g, {
            SchematicImageFadeIn: LT.fadeIn && !xT
          }),
          style: (0, ST.e)(LT),
          children: (0, DT.jsx)(ST.d, {
            image: LT
          })
        }), LT.failed && (0, DT.jsx)("div", {
          className: "SchematicImageError",
          children: (0, DT.jsx)(kT.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4387: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => uT
    });
    IT(4390);
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(306),
      XT = IT(1023),
      BT = IT(1193),
      FT = IT(1171),
      ST = IT(1110),
      DT = IT(1451),
      LT = IT(4398),
      xT = IT(1408),
      cT = IT(4400),
      KT = IT(1310),
      MT = IT(1468),
      rT = IT(4139),
      AT = IT(1055),
      gT = IT(998),
      hT = IT(2261),
      wT = IT(4404),
      mT = IT(1499),
      eT = IT(1083);

    function RT() {
      const {
        t: TT
      } = (0, FT.t)(), oT = (0, MT.useNavigatePreserveSearch)(), IT = (0, hT.q)(), zT = (0, iT.useMemo)((() => [...gT.b].sort(((oT, iT) => {
        var zT, kT;
        const WT = (null !== (zT = (0, hT.d)(iT, IT)) && void 0 !== zT ? zT : 0) - (null !== (kT = (0, hT.d)(oT, IT)) && void 0 !== kT ? kT : 0);
        return 0 !== WT ? WT : (0, mT.i)(oT, TT).localeCompare((0, mT.i)(iT, TT))
      }))), [IT, TT]);
      return (0, eT.jsxs)(eT.Fragment, {
        children: [(0, eT.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, eT.jsx)("h1", {
            className: "StudioPageTitle",
            children: TT("studio:firstPartyGames")
          })
        }), (0, eT.jsx)(cT.b, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: TT("general:game")
          }, {
            key: "ccu",
            header: TT("studio:metricCcu")
          }],
          rows: zT,
          getRowKey: TT => TT,
          renderRow: iT => {
            var zT;
            return (0, eT.jsxs)("tr", {
              onClick: () => {
                oT((0, mT.k)((0, XT.g)(iT, !0)))
              },
              children: [(0, eT.jsx)("td", {
                children: (0, eT.jsx)(wT.h, {
                  thumbnail: (0, eT.jsx)(wT.e, {
                    game: iT
                  }),
                  name: (0, mT.i)(iT, TT)
                })
              }), (0, eT.jsx)("td", {
                children: (0, BT.S)(null !== (zT = (0, hT.d)(iT, IT)) && void 0 !== zT ? zT : 0)
              })]
            })
          }
        })]
      })
    }

    function uT() {
      const {
        t: TT
      } = (0, FT.t)(), oT = (0, MT.useNavigatePreserveSearch)(), {
        userContext: IT,
        isUserContextUpdating: zT
      } = (0, ST.b)(), {
        isCreating: gT,
        create: hT
      } = (0, rT.g)(), [uT, vT] = (0, iT.useState)(null), [ET, fT] = (0, iT.useState)(null), [CT, jT] = (0, iT.useState)(!1);
      (0, iT.useEffect)((() => {
        zT || (jT(!1), DT.e.getPublishedGamePreviews(IT, {
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
          vT({
            ...TT,
            results: (0, WT.ab)(TT.results)
          })
        })).catch((TT => {
          console.error("Failed to get owned published games", TT), jT(!0)
        })), DT.e.getOwnedUnpublishedGames(IT).then((TT => {
          fT(TT)
        })).catch((TT => {
          console.error("Failed to get owned unpublished games", TT), jT(!0)
        })))
      }), [zT, IT]);
      const JT = null !== uT && null !== ET ? [...uT.results, ...ET] : [],
        UT = !CT && (null === uT || null === ET),
        aT = !UT && !CT && 0 === JT.length,
        YT = !zT && IT.playerHasRank("developer");
      return (0, eT.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, eT.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, eT.jsx)("h1", {
            className: "StudioPageTitle",
            children: TT("studio:myGames")
          }), (0, eT.jsxs)(xT.m, {
            onClick: hT,
            loading: gT,
            children: [(0, eT.jsx)(AT.e, {
              name: "plus"
            }), " ", TT("homePage:createCustomGame")]
          })]
        }), UT && (0, eT.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, eT.jsx)(KT.d, {})
        }), CT && (0, eT.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: TT("studio:failedToLoadGames")
        }), aT && (0, eT.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: TT("studio:noGamesYet")
        }), !UT && !CT && !aT && (0, eT.jsx)(cT.b, {
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
          rows: JT,
          getRowKey: TT => TT.schematicId,
          renderRow: IT => (0, eT.jsxs)("tr", {
            onClick: () => {
              var TT;
              TT = IT.schematicId, oT((0, mT.k)((0, XT.c)(TT)))
            },
            children: [(0, eT.jsx)("td", {
              children: (0, eT.jsx)(wT.h, {
                thumbnail: (0, eT.jsx)(LT.e, {
                  game: IT
                }),
                name: IT.name
              })
            }), (0, eT.jsx)("td", {
              children: (0, eT.jsx)("span", {
                className: kT()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: IT.gamePublished
                }),
                children: IT.gamePublished ? TT("general:published") : TT("general:draft")
              })
            }), (0, eT.jsx)("td", {
              children: (0, BT.S)(IT.ccu)
            }), (0, eT.jsx)("td", {
              children: (0, BT.S)(IT.favourites)
            })]
          })
        }), YT && (0, eT.jsx)(RT, {})]
      })
    }
  },
  4404: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT,
      h: () => kT
    });
    var iT = IT(1499),
      zT = IT(1083);

    function kT(TT) {
      let {
        thumbnail: oT,
        name: IT
      } = TT;
      return (0, zT.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, zT.jsx)("div", {
          className: "StudioTableThumbnail",
          children: oT
        }), (0, zT.jsx)("span", {
          className: "StudioTableGameName",
          children: IT
        })]
      })
    }

    function WT(TT) {
      let {
        game: oT
      } = TT;
      return (0, zT.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, iT.f)(oT),
        alt: ""
      })
    }
  },
  4400: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => XT
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(1083);

    function XT(TT) {
      let {
        columns: oT,
        rows: IT,
        getRowKey: zT,
        renderRow: XT,
        className: BT
      } = TT;
      return (0, WT.jsxs)("table", {
        className: kT()("Table", BT),
        children: [(0, WT.jsx)("thead", {
          children: (0, WT.jsx)("tr", {
            children: oT.map((TT => (0, WT.jsx)("th", {
              children: TT.header
            }, TT.key)))
          })
        }), (0, WT.jsx)("tbody", {
          children: IT.map((TT => (0, WT.jsx)(iT.Fragment, {
            children: XT(TT)
          }, zT(TT))))
        })]
      })
    }
  },
  4390: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);