export const id = 101;
export const ids = [101];
export const modules = {
  5065: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => kS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(1127),
      xS = gS(1419),
      NS = gS(3639),
      qS = gS(138),
      uS = gS(3676),
      IS = gS(3665),
      fS = gS(1181);

    function kS(SS) {
      let {
        game: HS
      } = SS;
      const gS = (0, qS.j)() ? "large" : "small",
        tS = (0, uS.c)(HS, gS),
        kS = (0, NS.f)(tS),
        aS = void 0 !== kS.blurhash;
      return (0, fS.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [kS.isLoading && !aS && (0, fS.jsx)(xS.c, {
          loaderType: "Secondary"
        }), !kS.failed && (null !== kS.src || aS) && (0, fS.jsx)("div", {
          className: bS()("SchematicImage", IS.h, {
            SchematicImageFadeIn: kS.fadeIn && !aS
          }),
          style: (0, IS.g)(kS),
          children: (0, fS.jsx)(IS.c, {
            image: kS
          })
        }), kS.failed && (0, fS.jsx)("div", {
          className: "SchematicImageError",
          children: (0, fS.jsx)(XS.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5051: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => JS
    });
    gS(5060);
    var tS = gS(64),
      bS = gS(1121),
      XS = gS.n(bS),
      xS = gS(369),
      NS = gS(1097),
      qS = gS(1309),
      uS = gS(1281),
      IS = gS(1211),
      fS = gS(1588),
      kS = gS(5065),
      aS = gS(1528),
      KS = gS(5072),
      jS = gS(1419),
      GS = gS(1608),
      CS = gS(4758),
      nS = gS(1127),
      PS = gS(1081),
      QS = gS(2641),
      DS = gS(5074),
      wS = gS(1641),
      hS = gS(1181);

    function ZS() {
      const {
        t: SS
      } = (0, uS.F)(), HS = (0, GS.useNavigatePreserveSearch)(), gS = (0, QS.k)(), bS = (0, tS.useMemo)((() => [...PS.b].sort(((HS, tS) => {
        var bS, XS;
        const xS = (null !== (bS = (0, QS.d)(tS, gS)) && void 0 !== bS ? bS : 0) - (null !== (XS = (0, QS.d)(HS, gS)) && void 0 !== XS ? XS : 0);
        return 0 !== xS ? xS : (0, wS.m)(HS, SS).localeCompare((0, wS.m)(tS, SS))
      }))), [gS, SS]);
      return (0, hS.jsxs)(hS.Fragment, {
        children: [(0, hS.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, hS.jsx)("h1", {
            className: "StudioPageTitle",
            children: SS("studio:firstPartyGames")
          })
        }), (0, hS.jsx)(KS.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: SS("general:game")
          }, {
            key: "ccu",
            header: SS("studio:metricCcu")
          }],
          rows: bS,
          getRowKey: SS => SS,
          renderRow: tS => {
            var bS;
            return (0, hS.jsxs)("tr", {
              onClick: () => {
                HS((0, wS.p)((0, NS.c)(tS, !0)))
              },
              children: [(0, hS.jsx)("td", {
                children: (0, hS.jsx)(DS.f, {
                  thumbnail: (0, hS.jsx)(DS.e, {
                    game: tS
                  }),
                  name: (0, wS.m)(tS, SS)
                })
              }), (0, hS.jsx)("td", {
                children: (0, qS.R)(null !== (bS = (0, QS.d)(tS, gS)) && void 0 !== bS ? bS : 0)
              })]
            })
          }
        })]
      })
    }

    function JS() {
      const {
        t: SS
      } = (0, uS.F)(), HS = (0, GS.useNavigatePreserveSearch)(), {
        userContext: gS,
        isUserContextUpdating: bS
      } = (0, IS.b)(), {
        isCreating: PS,
        create: QS
      } = (0, CS.h)(), [JS, OS] = (0, tS.useState)(null), [dS, cS] = (0, tS.useState)(null), [vS, ES] = (0, tS.useState)(!1);
      (0, tS.useEffect)((() => {
        bS || (ES(!1), fS.b.getPublishedGamePreviews(gS, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((SS => {
          OS({
            ...SS,
            results: (0, xS.db)(SS.results)
          })
        })).catch((SS => {
          console.error("Failed to get owned published games", SS), ES(!0)
        })), fS.b.getOwnedUnpublishedGames(gS).then((SS => {
          cS(SS)
        })).catch((SS => {
          console.error("Failed to get owned unpublished games", SS), ES(!0)
        })))
      }), [bS, gS]);
      const LS = null !== JS && null !== dS ? [...JS.results, ...dS] : [],
        YS = !vS && (null === JS || null === dS),
        AS = !YS && !vS && 0 === LS.length,
        yS = !bS && gS.playerHasRank("developer");
      return (0, hS.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, hS.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, hS.jsx)("h1", {
            className: "StudioPageTitle",
            children: SS("studio:myGames")
          }), (0, hS.jsxs)(aS.p, {
            onClick: QS,
            loading: PS,
            children: [(0, hS.jsx)(nS.d, {
              name: "plus"
            }), " ", SS("homePage:createCustomGame")]
          })]
        }), YS && (0, hS.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, hS.jsx)(jS.c, {})
        }), vS && (0, hS.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: SS("studio:failedToLoadGames")
        }), AS && (0, hS.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: SS("studio:noGamesYet")
        }), !YS && !vS && !AS && (0, hS.jsx)(KS.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: SS("general:game")
          }, {
            key: "status",
            header: SS("general:status")
          }, {
            key: "ccu",
            header: SS("studio:metricCcu")
          }, {
            key: "favourites",
            header: SS("general:favourites")
          }],
          rows: LS,
          getRowKey: SS => SS.schematicId,
          renderRow: gS => (0, hS.jsxs)("tr", {
            onClick: () => {
              var SS;
              SS = gS.schematicId, HS((0, wS.p)((0, NS.b)(SS)))
            },
            children: [(0, hS.jsx)("td", {
              children: (0, hS.jsx)(DS.f, {
                thumbnail: (0, hS.jsx)(kS.d, {
                  game: gS
                }),
                name: gS.name
              })
            }), (0, hS.jsx)("td", {
              children: (0, hS.jsx)("span", {
                className: XS()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: gS.gamePublished
                }),
                children: gS.gamePublished ? SS("general:published") : SS("general:draft")
              })
            }), (0, hS.jsx)("td", {
              children: (0, qS.R)(gS.ccu)
            }), (0, hS.jsx)("td", {
              children: (0, qS.R)(gS.favourites)
            })]
          })
        }), yS && (0, hS.jsx)(ZS, {})]
      })
    }
  },
  5074: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      f: () => XS
    });
    var tS = gS(1641),
      bS = gS(1181);

    function XS(SS) {
      let {
        thumbnail: HS,
        name: gS
      } = SS;
      return (0, bS.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, bS.jsx)("div", {
          className: "StudioTableThumbnail",
          children: HS
        }), (0, bS.jsx)("span", {
          className: "StudioTableGameName",
          children: gS
        })]
      })
    }

    function xS(SS) {
      let {
        game: HS
      } = SS;
      return (0, bS.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, tS.i)(HS),
        alt: ""
      })
    }
  },
  5072: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS
    });
    var tS = gS(64),
      bS = gS(1121),
      XS = gS.n(bS),
      xS = gS(1181);

    function NS(SS) {
      let {
        columns: HS,
        rows: gS,
        getRowKey: bS,
        renderRow: NS,
        className: qS
      } = SS;
      return (0, xS.jsxs)("table", {
        className: XS()("Table", qS),
        children: [(0, xS.jsx)("thead", {
          children: (0, xS.jsx)("tr", {
            children: HS.map((SS => (0, xS.jsx)("th", {
              children: SS.header
            }, SS.key)))
          })
        }), (0, xS.jsx)("tbody", {
          children: gS.map((SS => (0, xS.jsx)(tS.Fragment, {
            children: NS(SS)
          }, bS(SS))))
        })]
      })
    }
  },
  5060: () => {}
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);