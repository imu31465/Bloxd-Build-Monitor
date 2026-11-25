export const id = 115;
export const ids = [115];
export const modules = {
  5306: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => mM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(1398),
      aM = iM(1396),
      PM = iM(3902),
      nM = iM(119),
      QM = iM(3945),
      zM = iM(3934),
      LM = iM(1303);

    function mM(MM) {
      let {
        game: rM
      } = MM;
      const iM = (0, nM.is99NightsCrazyGamesBundle)() ? "large" : "small",
        OM = (0, QM.g)(rM, iM),
        mM = (0, PM.c)(OM),
        HM = void 0 !== mM.blurhash;
      return (0, LM.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [mM.isLoading && !HM && (0, LM.jsx)(aM.d, {
          loaderType: "Secondary"
        }), !mM.failed && (null !== mM.src || HM) && (0, LM.jsx)("div", {
          className: SM()("SchematicImage", zM.k, {
            SchematicImageFadeIn: mM.fadeIn && !HM
          }),
          style: (0, zM.h)(mM),
          children: (0, LM.jsx)(zM.e, {
            image: mM
          })
        }), mM.failed && (0, LM.jsx)("div", {
          className: "SchematicImageError",
          children: (0, LM.jsx)(jM.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5295: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => wM
    });
    iM(5299);
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(313),
      PM = iM(1088),
      nM = iM(1229),
      QM = iM(1188),
      zM = iM(1142),
      LM = iM(1573),
      mM = iM(5306),
      HM = iM(1520),
      hM = iM(5309),
      JM = iM(1396),
      dM = iM(1591),
      yM = iM(5007),
      lM = iM(1398),
      EM = iM(1067),
      UM = iM(2721),
      GM = iM(5318),
      CM = iM(1627),
      eM = iM(1303);

    function bM() {
      const {
        t: MM
      } = (0, QM.A)(), rM = (0, dM.useNavigatePreserveSearch)(), iM = (0, UM.q)(), SM = (0, OM.useMemo)((() => [...EM.b].sort(((rM, OM) => {
        var SM, jM;
        const aM = (null !== (SM = (0, UM.e)(OM, iM)) && void 0 !== SM ? SM : 0) - (null !== (jM = (0, UM.e)(rM, iM)) && void 0 !== jM ? jM : 0);
        return 0 !== aM ? aM : (0, CM.n)(rM, MM).localeCompare((0, CM.n)(OM, MM))
      }))), [iM, MM]);
      return (0, eM.jsxs)(eM.Fragment, {
        children: [(0, eM.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, eM.jsx)("h1", {
            className: "StudioPageTitle",
            children: MM("studio:firstPartyGames")
          })
        }), (0, eM.jsx)(hM.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: MM("general:game")
          }, {
            key: "ccu",
            header: MM("studio:metricCcu")
          }],
          rows: SM,
          getRowKey: MM => MM,
          renderRow: OM => {
            var SM;
            return (0, eM.jsxs)("tr", {
              onClick: () => {
                rM((0, CM.p)((0, PM.e)(OM, !0)))
              },
              children: [(0, eM.jsx)("td", {
                children: (0, eM.jsx)(GM.f, {
                  thumbnail: (0, eM.jsx)(GM.d, {
                    game: OM
                  }),
                  name: (0, CM.n)(OM, MM)
                })
              }), (0, eM.jsx)("td", {
                children: (0, nM.T)(null !== (SM = (0, UM.e)(OM, iM)) && void 0 !== SM ? SM : 0)
              })]
            })
          }
        })]
      })
    }

    function wM() {
      const {
        t: MM
      } = (0, QM.A)(), rM = (0, dM.useNavigatePreserveSearch)(), {
        userContext: iM,
        isUserContextUpdating: SM
      } = (0, zM.b)(), {
        isCreating: EM,
        create: UM
      } = (0, yM.h)(), [wM, tM] = (0, OM.useState)(null), [gM, uM] = (0, OM.useState)(null), [RM, pM] = (0, OM.useState)(!1);
      (0, OM.useEffect)((() => {
        SM || (pM(!1), LM.c.getPublishedGamePreviews(iM, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((MM => {
          tM({
            ...MM,
            results: (0, aM.T)(MM.results)
          })
        })).catch((MM => {
          console.error("Failed to get owned published games", MM), pM(!0)
        })), LM.c.getOwnedUnpublishedGames(iM).then((MM => {
          uM(MM)
        })).catch((MM => {
          console.error("Failed to get owned unpublished games", MM), pM(!0)
        })))
      }), [SM, iM]);
      const WM = null !== wM && null !== gM ? [...wM.results, ...gM] : [],
        sM = !RM && (null === wM || null === gM),
        DM = !sM && !RM && 0 === WM.length,
        kM = !SM && iM.playerHasRank("developer");
      return (0, eM.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, eM.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, eM.jsx)("h1", {
            className: "StudioPageTitle",
            children: MM("studio:myGames")
          }), (0, eM.jsxs)(HM.p, {
            onClick: UM,
            loading: EM,
            children: [(0, eM.jsx)(lM.b, {
              name: "plus"
            }), " ", MM("homePage:createCustomGame")]
          })]
        }), sM && (0, eM.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, eM.jsx)(JM.d, {})
        }), RM && (0, eM.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: MM("studio:failedToLoadGames")
        }), DM && (0, eM.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: MM("studio:noGamesYet")
        }), !sM && !RM && !DM && (0, eM.jsx)(hM.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: MM("general:game")
          }, {
            key: "status",
            header: MM("general:status")
          }, {
            key: "ccu",
            header: MM("studio:metricCcu")
          }, {
            key: "favourites",
            header: MM("general:favourites")
          }],
          rows: WM,
          getRowKey: MM => MM.schematicId,
          renderRow: iM => (0, eM.jsxs)("tr", {
            onClick: () => {
              var MM;
              MM = iM.schematicId, rM((0, CM.p)((0, PM.d)(MM)))
            },
            children: [(0, eM.jsx)("td", {
              children: (0, eM.jsx)(GM.f, {
                thumbnail: (0, eM.jsx)(mM.b, {
                  game: iM
                }),
                name: iM.name
              })
            }), (0, eM.jsx)("td", {
              children: (0, eM.jsx)("span", {
                className: jM()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: iM.gamePublished
                }),
                children: iM.gamePublished ? MM("general:published") : MM("general:draft")
              })
            }), (0, eM.jsx)("td", {
              children: (0, nM.T)(iM.ccu)
            }), (0, eM.jsx)("td", {
              children: (0, nM.T)(iM.favourites)
            })]
          })
        }), kM && (0, eM.jsx)(bM, {})]
      })
    }
  },
  5318: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      f: () => jM
    });
    var OM = iM(1627),
      SM = iM(1303);

    function jM(MM) {
      let {
        thumbnail: rM,
        name: iM
      } = MM;
      return (0, SM.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, SM.jsx)("div", {
          className: "StudioTableThumbnail",
          children: rM
        }), (0, SM.jsx)("span", {
          className: "StudioTableGameName",
          children: iM
        })]
      })
    }

    function aM(MM) {
      let {
        game: rM
      } = MM;
      return (0, SM.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, OM.j)(rM),
        alt: ""
      })
    }
  },
  5309: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(1303);

    function PM(MM) {
      let {
        columns: rM,
        rows: iM,
        getRowKey: SM,
        renderRow: PM,
        className: nM
      } = MM;
      return (0, aM.jsxs)("table", {
        className: jM()("Table", nM),
        children: [(0, aM.jsx)("thead", {
          children: (0, aM.jsx)("tr", {
            children: rM.map((MM => (0, aM.jsx)("th", {
              children: MM.header
            }, MM.key)))
          })
        }), (0, aM.jsx)("tbody", {
          children: iM.map((MM => (0, aM.jsx)(OM.Fragment, {
            children: PM(MM)
          }, SM(MM))))
        })]
      })
    }
  },
  5299: () => {}
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);