export const id = 115;
export const ids = [115];
export const modules = {
  5404: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => vV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(1414),
      yV = xV(1408),
      pV = xV(3942),
      QV = xV(138),
      nV = xV(3974),
      wV = xV(3967),
      ZV = xV(1321);

    function vV(VV) {
      let {
        game: eV
      } = VV;
      const xV = (0, QV.is99NightsCrazyGamesBundle)() ? "large" : "small",
        JV = (0, nV.g)(eV, xV),
        vV = (0, pV.d)(JV),
        rV = void 0 !== vV.blurhash;
      return (0, ZV.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [vV.isLoading && !rV && (0, ZV.jsx)(yV.d, {
          loaderType: "Secondary"
        }), !vV.failed && (null !== vV.src || rV) && (0, ZV.jsx)("div", {
          className: YV()("SchematicImage", wV.i, {
            SchematicImageFadeIn: vV.fadeIn && !rV
          }),
          style: (0, wV.h)(vV),
          children: (0, ZV.jsx)(wV.e, {
            image: vV
          })
        }), vV.failed && (0, ZV.jsx)("div", {
          className: "SchematicImageError",
          children: (0, ZV.jsx)(UV.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5396: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => NV
    });
    xV(5402);
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(364),
      pV = xV(1117),
      QV = xV(1252),
      nV = xV(1220),
      wV = xV(1168),
      ZV = xV(1603),
      vV = xV(5404),
      rV = xV(1551),
      kV = xV(5410),
      bV = xV(1408),
      EV = xV(1612),
      BV = xV(5108),
      jV = xV(1414),
      qV = xV(1093),
      tV = xV(2777),
      FV = xV(5418),
      TV = xV(1639),
      PV = xV(1321);

    function AV() {
      const {
        t: VV
      } = (0, nV.A)(), eV = (0, EV.useNavigatePreserveSearch)(), xV = (0, tV.r)(), YV = (0, JV.useMemo)((() => [...qV.b].sort(((eV, JV) => {
        var YV, UV;
        const yV = (null !== (YV = (0, tV.e)(JV, xV)) && void 0 !== YV ? YV : 0) - (null !== (UV = (0, tV.e)(eV, xV)) && void 0 !== UV ? UV : 0);
        return 0 !== yV ? yV : (0, TV.j)(eV, VV).localeCompare((0, TV.j)(JV, VV))
      }))), [xV, VV]);
      return (0, PV.jsxs)(PV.Fragment, {
        children: [(0, PV.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, PV.jsx)("h1", {
            className: "StudioPageTitle",
            children: VV("studio:firstPartyGames")
          })
        }), (0, PV.jsx)(kV.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: VV("general:game")
          }, {
            key: "ccu",
            header: VV("studio:metricCcu")
          }],
          rows: YV,
          getRowKey: VV => VV,
          renderRow: JV => {
            var YV;
            return (0, PV.jsxs)("tr", {
              onClick: () => {
                eV((0, TV.m)((0, pV.i)(JV, !0)))
              },
              children: [(0, PV.jsx)("td", {
                children: (0, PV.jsx)(FV.f, {
                  thumbnail: (0, PV.jsx)(FV.c, {
                    game: JV
                  }),
                  name: (0, TV.j)(JV, VV)
                })
              }), (0, PV.jsx)("td", {
                children: (0, QV.N)(null !== (YV = (0, tV.e)(JV, xV)) && void 0 !== YV ? YV : 0)
              })]
            })
          }
        })]
      })
    }

    function NV() {
      const {
        t: VV
      } = (0, nV.A)(), eV = (0, EV.useNavigatePreserveSearch)(), {
        userContext: xV,
        isUserContextUpdating: YV
      } = (0, wV.d)(), {
        isCreating: qV,
        create: tV
      } = (0, BV.f)(), [NV, XV] = (0, JV.useState)(null), [MV, zV] = (0, JV.useState)(null), [GV, WV] = (0, JV.useState)(!1);
      (0, JV.useEffect)((() => {
        YV || (WV(!1), ZV.b.getPublishedGamePreviews(xV, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((VV => {
          XV({
            ...VV,
            results: (0, yV.db)(VV.results)
          })
        })).catch((VV => {
          console.error("Failed to get owned published games", VV), WV(!0)
        })), ZV.b.getOwnedUnpublishedGames(xV).then((VV => {
          zV(VV)
        })).catch((VV => {
          console.error("Failed to get owned unpublished games", VV), WV(!0)
        })))
      }), [YV, xV]);
      const RV = null !== NV && null !== MV ? [...NV.results, ...MV] : [],
        gV = !GV && (null === NV || null === MV),
        DV = !gV && !GV && 0 === RV.length,
        iV = !YV && xV.playerHasRank("developer");
      return (0, PV.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, PV.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, PV.jsx)("h1", {
            className: "StudioPageTitle",
            children: VV("studio:myGames")
          }), (0, PV.jsxs)(rV.m, {
            onClick: tV,
            loading: qV,
            children: [(0, PV.jsx)(jV.b, {
              name: "plus"
            }), " ", VV("homePage:createCustomGame")]
          })]
        }), gV && (0, PV.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, PV.jsx)(bV.d, {})
        }), GV && (0, PV.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: VV("studio:failedToLoadGames")
        }), DV && (0, PV.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: VV("studio:noGamesYet")
        }), !gV && !GV && !DV && (0, PV.jsx)(kV.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: VV("general:game")
          }, {
            key: "status",
            header: VV("general:status")
          }, {
            key: "ccu",
            header: VV("studio:metricCcu")
          }, {
            key: "favourites",
            header: VV("general:favourites")
          }],
          rows: RV,
          getRowKey: VV => VV.schematicId,
          renderRow: xV => (0, PV.jsxs)("tr", {
            onClick: () => {
              var VV;
              VV = xV.schematicId, eV((0, TV.m)((0, pV.e)(VV)))
            },
            children: [(0, PV.jsx)("td", {
              children: (0, PV.jsx)(FV.f, {
                thumbnail: (0, PV.jsx)(vV.d, {
                  game: xV
                }),
                name: xV.name
              })
            }), (0, PV.jsx)("td", {
              children: (0, PV.jsx)("span", {
                className: UV()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: xV.gamePublished
                }),
                children: xV.gamePublished ? VV("general:published") : VV("general:draft")
              })
            }), (0, PV.jsx)("td", {
              children: (0, QV.N)(xV.ccu)
            }), (0, PV.jsx)("td", {
              children: (0, QV.N)(xV.favourites)
            })]
          })
        }), iV && (0, PV.jsx)(AV, {})]
      })
    }
  },
  5418: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      f: () => UV
    });
    var JV = xV(1639),
      YV = xV(1321);

    function UV(VV) {
      let {
        thumbnail: eV,
        name: xV
      } = VV;
      return (0, YV.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, YV.jsx)("div", {
          className: "StudioTableThumbnail",
          children: eV
        }), (0, YV.jsx)("span", {
          className: "StudioTableGameName",
          children: xV
        })]
      })
    }

    function yV(VV) {
      let {
        game: eV
      } = VV;
      return (0, YV.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, JV.h)(eV),
        alt: ""
      })
    }
  },
  5410: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(1321);

    function pV(VV) {
      let {
        columns: eV,
        rows: xV,
        getRowKey: YV,
        renderRow: pV,
        className: QV
      } = VV;
      return (0, yV.jsxs)("table", {
        className: UV()("Table", QV),
        children: [(0, yV.jsx)("thead", {
          children: (0, yV.jsx)("tr", {
            children: eV.map((VV => (0, yV.jsx)("th", {
              children: VV.header
            }, VV.key)))
          })
        }), (0, yV.jsx)("tbody", {
          children: xV.map((VV => (0, yV.jsx)(JV.Fragment, {
            children: pV(VV)
          }, YV(VV))))
        })]
      })
    }
  },
  5402: () => {}
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);