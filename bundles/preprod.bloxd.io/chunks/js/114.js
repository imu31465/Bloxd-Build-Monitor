export const id = 114;
export const ids = [114];
export const modules = {
  5424: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => NU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(1390),
      AU = zU(1384),
      FU = zU(3887),
      oU = zU(142),
      DU = zU(3929),
      EU = zU(3914),
      YU = zU(1305);

    function NU(UU) {
      let {
        game: XU
      } = UU;
      const zU = (0, oU.is99NightsCrazyGamesBundle)() ? "large" : "small",
        cU = (0, DU.c)(XU, zU),
        NU = (0, FU.f)(cU),
        IU = void 0 !== NU.blurhash;
      return (0, YU.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [NU.isLoading && !IU && (0, YU.jsx)(AU.b, {
          loaderType: "Secondary"
        }), !NU.failed && (null !== NU.src || IU) && (0, YU.jsx)("div", {
          className: yU()("SchematicImage", EU.i, {
            SchematicImageFadeIn: NU.fadeIn && !IU
          }),
          style: (0, EU.h)(NU),
          children: (0, YU.jsx)(EU.d, {
            image: NU
          })
        }), NU.failed && (0, YU.jsx)("div", {
          className: "SchematicImageError",
          children: (0, YU.jsx)(QU.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5407: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => dU
    });
    zU(5415);
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(320),
      FU = zU(1086),
      oU = zU(1236),
      DU = zU(1193),
      EU = zU(1129),
      YU = zU(1545),
      NU = zU(5424),
      IU = zU(1494),
      pU = zU(5433),
      aU = zU(1384),
      tU = zU(1568),
      gU = zU(5064),
      kU = zU(1390),
      GU = zU(1077),
      BU = zU(2702),
      ZU = zU(5438),
      RU = zU(1592),
      PU = zU(1305);

    function WU() {
      const {
        t: UU
      } = (0, DU.I)(), XU = (0, tU.useNavigatePreserveSearch)(), zU = (0, BU.o)(), yU = (0, cU.useMemo)((() => [...GU.c].sort(((XU, cU) => {
        var yU, QU;
        const AU = (null !== (yU = (0, BU.e)(cU, zU)) && void 0 !== yU ? yU : 0) - (null !== (QU = (0, BU.e)(XU, zU)) && void 0 !== QU ? QU : 0);
        return 0 !== AU ? AU : (0, RU.n)(XU, UU).localeCompare((0, RU.n)(cU, UU))
      }))), [zU, UU]);
      return (0, PU.jsxs)(PU.Fragment, {
        children: [(0, PU.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, PU.jsx)("h1", {
            className: "StudioPageTitle",
            children: UU("studio:firstPartyGames")
          })
        }), (0, PU.jsx)(pU.b, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: UU("general:game")
          }, {
            key: "ccu",
            header: UU("studio:metricCcu")
          }],
          rows: yU,
          getRowKey: UU => UU,
          renderRow: cU => {
            var yU;
            return (0, PU.jsxs)("tr", {
              onClick: () => {
                XU((0, RU.r)((0, FU.f)(cU, !0)))
              },
              children: [(0, PU.jsx)("td", {
                children: (0, PU.jsx)(ZU.e, {
                  thumbnail: (0, PU.jsx)(ZU.b, {
                    game: cU
                  }),
                  name: (0, RU.n)(cU, UU)
                })
              }), (0, PU.jsx)("td", {
                children: (0, oU.I)(null !== (yU = (0, BU.e)(cU, zU)) && void 0 !== yU ? yU : 0)
              })]
            })
          }
        })]
      })
    }

    function dU() {
      const {
        t: UU
      } = (0, DU.I)(), XU = (0, tU.useNavigatePreserveSearch)(), {
        userContext: zU,
        isUserContextUpdating: yU
      } = (0, EU.d)(), {
        isCreating: GU,
        create: BU
      } = (0, gU.d)(), [dU, LU] = (0, cU.useState)(null), [eU, CU] = (0, cU.useState)(null), [wU, qU] = (0, cU.useState)(!1);
      (0, cU.useEffect)((() => {
        yU || (qU(!1), YU.c.getPublishedGamePreviews(zU, {
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
          LU({
            ...UU,
            results: (0, AU.ab)(UU.results)
          })
        })).catch((UU => {
          console.error("Failed to get owned published games", UU), qU(!0)
        })), YU.c.getOwnedUnpublishedGames(zU).then((UU => {
          CU(UU)
        })).catch((UU => {
          console.error("Failed to get owned unpublished games", UU), qU(!0)
        })))
      }), [yU, zU]);
      const OU = null !== dU && null !== eU ? [...dU.results, ...eU] : [],
        SU = !wU && (null === dU || null === eU),
        rU = !SU && !wU && 0 === OU.length,
        uU = !yU && zU.playerHasRank("developer");
      return (0, PU.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, PU.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, PU.jsx)("h1", {
            className: "StudioPageTitle",
            children: UU("studio:myGames")
          }), (0, PU.jsxs)(IU.l, {
            onClick: BU,
            loading: GU,
            children: [(0, PU.jsx)(kU.d, {
              name: "plus"
            }), " ", UU("homePage:createCustomGame")]
          })]
        }), SU && (0, PU.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, PU.jsx)(aU.b, {})
        }), wU && (0, PU.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: UU("studio:failedToLoadGames")
        }), rU && (0, PU.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: UU("studio:noGamesYet")
        }), !SU && !wU && !rU && (0, PU.jsx)(pU.b, {
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
          rows: OU,
          getRowKey: UU => UU.schematicId,
          renderRow: zU => {
            const cU = function(UU) {
              return (0, RU.d)(UU.gamePublished, "takenDown" in UU && UU.takenDown)
            }(zU);
            return (0, PU.jsxs)("tr", {
              onClick: () => {
                var UU;
                UU = zU.schematicId, XU((0, RU.r)((0, FU.e)(UU)))
              },
              children: [(0, PU.jsx)("td", {
                children: (0, PU.jsx)(ZU.e, {
                  thumbnail: (0, PU.jsx)(NU.d, {
                    game: zU
                  }),
                  name: zU.name
                })
              }), (0, PU.jsx)("td", {
                children: (0, PU.jsx)("span", {
                  className: QU()("StudioGameListStatusChip", {
                    StudioGameListStatusChipPublished: "published" === cU,
                    StudioGameListStatusChipTakenDown: "takenDown" === cU
                  }),
                  children: (0, RU.c)(UU, cU)
                })
              }), (0, PU.jsx)("td", {
                children: (0, oU.I)(zU.ccu)
              }), (0, PU.jsx)("td", {
                children: (0, oU.I)(zU.favourites)
              })]
            })
          }
        }), uU && (0, PU.jsx)(WU, {})]
      })
    }
  },
  5438: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU,
      e: () => QU
    });
    var cU = zU(1592),
      yU = zU(1305);

    function QU(UU) {
      let {
        thumbnail: XU,
        name: zU
      } = UU;
      return (0, yU.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, yU.jsx)("div", {
          className: "StudioTableThumbnail",
          children: XU
        }), (0, yU.jsx)("span", {
          className: "StudioTableGameName",
          children: zU
        })]
      })
    }

    function AU(UU) {
      let {
        game: XU
      } = UU;
      return (0, yU.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, cU.k)(XU),
        alt: ""
      })
    }
  },
  5433: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1305);

    function FU(UU) {
      let {
        columns: XU,
        rows: zU,
        getRowKey: yU,
        renderRow: FU,
        className: oU
      } = UU;
      return (0, AU.jsxs)("table", {
        className: QU()("Table", oU),
        children: [(0, AU.jsx)("thead", {
          children: (0, AU.jsx)("tr", {
            children: XU.map((UU => (0, AU.jsx)("th", {
              children: UU.header
            }, UU.key)))
          })
        }), (0, AU.jsx)("tbody", {
          children: zU.map((UU => (0, AU.jsx)(cU.Fragment, {
            children: FU(UU)
          }, yU(UU))))
        })]
      })
    }
  },
  5415: () => {}
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);