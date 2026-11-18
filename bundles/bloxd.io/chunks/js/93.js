export const id = 93;
export const ids = [93];
export const modules = {
  4312: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => LB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(946),
      lB = dB(1225),
      JB = dB(2998),
      YB = dB(138),
      gB = dB(3037),
      oB = dB(3026),
      kB = dB(980);

    function LB(BB) {
      let {
        game: TB
      } = BB;
      const dB = (0, YB.m)() ? "large" : "small",
        VB = (0, gB.f)(TB, dB),
        LB = (0, JB.h)(VB),
        OB = void 0 !== LB.blurhash;
      return (0, kB.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [LB.isLoading && !OB && (0, kB.jsx)(lB.b, {
          loaderType: "Secondary"
        }), !LB.failed && (null !== LB.src || OB) && (0, kB.jsx)("div", {
          className: yB()("SchematicImage", oB.e, {
            SchematicImageFadeIn: LB.fadeIn && !OB
          }),
          style: (0, oB.d)(LB),
          children: (0, kB.jsx)(oB.c, {
            image: LB
          })
        }), LB.failed && (0, kB.jsx)("div", {
          className: "SchematicImageError",
          children: (0, kB.jsx)(pB.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4295: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => MB
    });
    dB(4303);
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(270),
      JB = dB(912),
      YB = dB(1105),
      gB = dB(1078),
      oB = dB(1011),
      kB = dB(1393),
      LB = dB(4312),
      OB = dB(1324),
      DB = dB(4316),
      uB = dB(1225),
      HB = dB(1407),
      EB = dB(4033),
      vB = dB(946),
      mB = dB(898),
      iB = dB(2170),
      NB = dB(4320),
      tB = dB(1441),
      fB = dB(980);

    function sB() {
      const {
        t: BB
      } = (0, gB.z)(), TB = (0, HB.useNavigatePreserveSearch)(), dB = (0, iB.k)(), yB = (0, VB.useMemo)((() => [...mB.b].sort(((TB, VB) => {
        var yB, pB;
        const lB = (null !== (yB = (0, iB.c)(VB, dB)) && void 0 !== yB ? yB : 0) - (null !== (pB = (0, iB.c)(TB, dB)) && void 0 !== pB ? pB : 0);
        return 0 !== lB ? lB : (0, tB.f)(TB, BB).localeCompare((0, tB.f)(VB, BB))
      }))), [dB, BB]);
      return (0, fB.jsxs)(fB.Fragment, {
        children: [(0, fB.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, fB.jsx)("h1", {
            className: "StudioPageTitle",
            children: BB("studio:firstPartyGames")
          })
        }), (0, fB.jsx)(DB.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: BB("general:game")
          }, {
            key: "ccu",
            header: BB("studio:metricCcu")
          }],
          rows: yB,
          getRowKey: BB => BB,
          renderRow: VB => {
            var yB;
            return (0, fB.jsxs)("tr", {
              onClick: () => {
                TB((0, tB.g)((0, JB.d)(VB, !0)))
              },
              children: [(0, fB.jsx)("td", {
                children: (0, fB.jsx)(NB.g, {
                  thumbnail: (0, fB.jsx)(NB.e, {
                    game: VB
                  }),
                  name: (0, tB.f)(VB, BB)
                })
              }), (0, fB.jsx)("td", {
                children: (0, YB.S)(null !== (yB = (0, iB.c)(VB, dB)) && void 0 !== yB ? yB : 0)
              })]
            })
          }
        })]
      })
    }

    function MB() {
      const {
        t: BB
      } = (0, gB.z)(), TB = (0, HB.useNavigatePreserveSearch)(), {
        userContext: dB,
        isUserContextUpdating: yB
      } = (0, oB.b)(), {
        isCreating: mB,
        create: iB
      } = (0, EB.d)(), [MB, zB] = (0, VB.useState)(null), [wB, UB] = (0, VB.useState)(null), [FB, KB] = (0, VB.useState)(!1);
      (0, VB.useEffect)((() => {
        yB || (KB(!1), kB.c.getPublishedGamePreviews(dB, {
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
          zB({
            ...BB,
            results: (0, lB.X)(BB.results)
          })
        })).catch((BB => {
          console.error("Failed to get owned published games", BB), KB(!0)
        })), kB.c.getOwnedUnpublishedGames(dB).then((BB => {
          UB(BB)
        })).catch((BB => {
          console.error("Failed to get owned unpublished games", BB), KB(!0)
        })))
      }), [yB, dB]);
      const rB = null !== MB && null !== wB ? [...MB.results, ...wB] : [],
        IB = !FB && (null === MB || null === wB),
        cB = !IB && !FB && 0 === rB.length,
        SB = !yB && dB.playerHasRank("developer");
      return (0, fB.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, fB.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, fB.jsx)("h1", {
            className: "StudioPageTitle",
            children: BB("studio:myGames")
          }), (0, fB.jsxs)(OB.k, {
            onClick: iB,
            loading: mB,
            children: [(0, fB.jsx)(vB.e, {
              name: "plus"
            }), " ", BB("homePage:createCustomGame")]
          })]
        }), IB && (0, fB.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, fB.jsx)(uB.b, {})
        }), FB && (0, fB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: BB("studio:failedToLoadGames")
        }), cB && (0, fB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: BB("studio:noGamesYet")
        }), !IB && !FB && !cB && (0, fB.jsx)(DB.c, {
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
          rows: rB,
          getRowKey: BB => BB.schematicId,
          renderRow: dB => (0, fB.jsxs)("tr", {
            onClick: () => {
              var BB;
              BB = dB.schematicId, TB((0, tB.g)((0, JB.c)(BB)))
            },
            children: [(0, fB.jsx)("td", {
              children: (0, fB.jsx)(NB.g, {
                thumbnail: (0, fB.jsx)(LB.e, {
                  game: dB
                }),
                name: dB.name
              })
            }), (0, fB.jsx)("td", {
              children: (0, fB.jsx)("span", {
                className: pB()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: dB.gamePublished
                }),
                children: dB.gamePublished ? BB("general:published") : BB("general:draft")
              })
            }), (0, fB.jsx)("td", {
              children: (0, YB.S)(dB.ccu)
            }), (0, fB.jsx)("td", {
              children: (0, YB.S)(dB.favourites)
            })]
          })
        }), SB && (0, fB.jsx)(sB, {})]
      })
    }
  },
  4320: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      g: () => pB
    });
    var VB = dB(1441),
      yB = dB(980);

    function pB(BB) {
      let {
        thumbnail: TB,
        name: dB
      } = BB;
      return (0, yB.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, yB.jsx)("div", {
          className: "StudioTableThumbnail",
          children: TB
        }), (0, yB.jsx)("span", {
          className: "StudioTableGameName",
          children: dB
        })]
      })
    }

    function lB(BB) {
      let {
        game: TB
      } = BB;
      return (0, yB.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, VB.e)(TB),
        alt: ""
      })
    }
  },
  4316: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB
    });
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(980);

    function JB(BB) {
      let {
        columns: TB,
        rows: dB,
        getRowKey: yB,
        renderRow: JB,
        className: YB
      } = BB;
      return (0, lB.jsxs)("table", {
        className: pB()("Table", YB),
        children: [(0, lB.jsx)("thead", {
          children: (0, lB.jsx)("tr", {
            children: TB.map((BB => (0, lB.jsx)("th", {
              children: BB.header
            }, BB.key)))
          })
        }), (0, lB.jsx)("tbody", {
          children: dB.map((BB => (0, lB.jsx)(VB.Fragment, {
            children: JB(BB)
          }, yB(BB))))
        })]
      })
    }
  },
  4303: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);