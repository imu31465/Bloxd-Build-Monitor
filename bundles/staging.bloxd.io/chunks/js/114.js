export const id = 114;
export const ids = [114];
export const modules = {
  5392: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => zB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(1383),
      oB = GB(1375),
      jB = GB(3944),
      yB = GB(120),
      JB = GB(3982),
      MB = GB(3968),
      PB = GB(1282);

    function zB(BB) {
      let {
        game: OB
      } = BB;
      const GB = (0, yB.is99NightsCrazyGamesBundle)() ? "large" : "small",
        YB = (0, JB.f)(OB, GB),
        zB = (0, jB.e)(YB),
        lB = void 0 !== zB.blurhash;
      return (0, PB.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [zB.isLoading && !lB && (0, PB.jsx)(oB.b, {
          loaderType: "Secondary"
        }), !zB.failed && (null !== zB.src || lB) && (0, PB.jsx)("div", {
          className: DB()("SchematicImage", MB.h, {
            SchematicImageFadeIn: zB.fadeIn && !lB
          }),
          style: (0, MB.e)(zB),
          children: (0, PB.jsx)(MB.d, {
            image: zB
          })
        }), zB.failed && (0, PB.jsx)("div", {
          className: "SchematicImageError",
          children: (0, PB.jsx)(QB.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5382: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => fB
    });
    GB(5386);
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(331),
      jB = GB(1061),
      yB = GB(1217),
      JB = GB(1175),
      MB = GB(1112),
      PB = GB(1540),
      zB = GB(5392),
      lB = GB(1485),
      pB = GB(5396),
      qB = GB(1375),
      ZB = GB(1560),
      NB = GB(5053),
      RB = GB(1383),
      WB = GB(1044),
      AB = GB(2733),
      VB = GB(5402),
      SB = GB(1586),
      nB = GB(1282);

    function UB() {
      const {
        t: BB
      } = (0, JB.H)(), OB = (0, ZB.useNavigatePreserveSearch)(), GB = (0, AB.o)(), DB = (0, YB.useMemo)((() => [...WB.b].sort(((OB, YB) => {
        var DB, QB;
        const oB = (null !== (DB = (0, AB.d)(YB, GB)) && void 0 !== DB ? DB : 0) - (null !== (QB = (0, AB.d)(OB, GB)) && void 0 !== QB ? QB : 0);
        return 0 !== oB ? oB : (0, SB.s)(OB, BB).localeCompare((0, SB.s)(YB, BB))
      }))), [GB, BB]);
      return (0, nB.jsxs)(nB.Fragment, {
        children: [(0, nB.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, nB.jsx)("h1", {
            className: "StudioPageTitle",
            children: BB("studio:firstPartyGames")
          })
        }), (0, nB.jsx)(pB.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: BB("general:game")
          }, {
            key: "ccu",
            header: BB("studio:metricCcu")
          }],
          rows: DB,
          getRowKey: BB => BB,
          renderRow: YB => {
            var DB;
            return (0, nB.jsxs)("tr", {
              onClick: () => {
                OB((0, SB.w)((0, jB.g)(YB, !0)))
              },
              children: [(0, nB.jsx)("td", {
                children: (0, nB.jsx)(VB.f, {
                  thumbnail: (0, nB.jsx)(VB.c, {
                    game: YB
                  }),
                  name: (0, SB.s)(YB, BB)
                })
              }), (0, nB.jsx)("td", {
                children: (0, yB.U)(null !== (DB = (0, AB.d)(YB, GB)) && void 0 !== DB ? DB : 0)
              })]
            })
          }
        })]
      })
    }

    function fB() {
      const {
        t: BB
      } = (0, JB.H)(), OB = (0, ZB.useNavigatePreserveSearch)(), {
        userContext: GB,
        isUserContextUpdating: DB
      } = (0, MB.d)(), {
        isCreating: WB,
        create: AB
      } = (0, NB.f)(), [fB, kB] = (0, YB.useState)(null), [dB, KB] = (0, YB.useState)(null), [uB, mB] = (0, YB.useState)(!1);
      (0, YB.useEffect)((() => {
        DB || (mB(!1), PB.b.getPublishedGamePreviews(GB, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((BB => {
          kB({
            ...BB,
            results: (0, oB.eb)(BB.results)
          })
        })).catch((BB => {
          console.error("Failed to get owned published games", BB), mB(!0)
        })), PB.b.getOwnedUnpublishedGames(GB).then((BB => {
          KB(BB)
        })).catch((BB => {
          console.error("Failed to get owned unpublished games", BB), mB(!0)
        })))
      }), [DB, GB]);
      const IB = null !== fB && null !== dB ? [...fB.results, ...dB] : [],
        FB = !uB && (null === fB || null === dB),
        iB = !FB && !uB && 0 === IB.length,
        LB = !DB && GB.playerHasRank("developer");
      return (0, nB.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, nB.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, nB.jsx)("h1", {
            className: "StudioPageTitle",
            children: BB("studio:myGames")
          }), (0, nB.jsxs)(lB.q, {
            onClick: AB,
            loading: WB,
            children: [(0, nB.jsx)(RB.b, {
              name: "plus"
            }), " ", BB("homePage:createCustomGame")]
          })]
        }), FB && (0, nB.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, nB.jsx)(qB.b, {})
        }), uB && (0, nB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: BB("studio:failedToLoadGames")
        }), iB && (0, nB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: BB("studio:noGamesYet")
        }), !FB && !uB && !iB && (0, nB.jsx)(pB.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: BB("general:game")
          }, {
            key: "status",
            header: BB("general:status")
          }, {
            key: "ccu",
            header: BB("studio:metricCcu")
          }, {
            key: "favourites",
            header: BB("general:favourites")
          }],
          rows: IB,
          getRowKey: BB => BB.schematicId,
          renderRow: GB => {
            const YB = function(BB) {
              return (0, SB.h)(BB.gamePublished, "takenDown" in BB && BB.takenDown)
            }(GB);
            return (0, nB.jsxs)("tr", {
              onClick: () => {
                var BB;
                BB = GB.schematicId, OB((0, SB.w)((0, jB.e)(BB)))
              },
              children: [(0, nB.jsx)("td", {
                children: (0, nB.jsx)(VB.f, {
                  thumbnail: (0, nB.jsx)(zB.d, {
                    game: GB
                  }),
                  name: GB.name
                })
              }), (0, nB.jsx)("td", {
                children: (0, nB.jsx)("span", {
                  className: QB()("StudioGameListStatusChip", {
                    StudioGameListStatusChipPublished: "published" === YB,
                    StudioGameListStatusChipTakenDown: "takenDown" === YB
                  }),
                  children: (0, SB.d)(BB, YB)
                })
              }), (0, nB.jsx)("td", {
                children: (0, yB.U)(GB.ccu)
              }), (0, nB.jsx)("td", {
                children: (0, yB.U)(GB.favourites)
              })]
            })
          }
        }), LB && (0, nB.jsx)(UB, {})]
      })
    }
  },
  5402: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      f: () => QB
    });
    var YB = GB(1586),
      DB = GB(1282);

    function QB(BB) {
      let {
        thumbnail: OB,
        name: GB
      } = BB;
      return (0, DB.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, DB.jsx)("div", {
          className: "StudioTableThumbnail",
          children: OB
        }), (0, DB.jsx)("span", {
          className: "StudioTableGameName",
          children: GB
        })]
      })
    }

    function oB(BB) {
      let {
        game: OB
      } = BB;
      return (0, DB.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, YB.p)(OB),
        alt: ""
      })
    }
  },
  5396: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(1282);

    function jB(BB) {
      let {
        columns: OB,
        rows: GB,
        getRowKey: DB,
        renderRow: jB,
        className: yB
      } = BB;
      return (0, oB.jsxs)("table", {
        className: QB()("Table", yB),
        children: [(0, oB.jsx)("thead", {
          children: (0, oB.jsx)("tr", {
            children: OB.map((BB => (0, oB.jsx)("th", {
              children: BB.header
            }, BB.key)))
          })
        }), (0, oB.jsx)("tbody", {
          children: GB.map((BB => (0, oB.jsx)(YB.Fragment, {
            children: jB(BB)
          }, DB(BB))))
        })]
      })
    }
  },
  5386: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);