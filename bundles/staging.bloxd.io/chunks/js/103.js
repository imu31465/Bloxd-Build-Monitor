export const id = 103;
export const ids = [103];
export const modules = {
  5057: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => zB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(1102),
      GB = ZB(1397),
      vB = ZB(3676),
      kB = ZB(140),
      cB = ZB(3706),
      nB = ZB(3698),
      hB = ZB(1153);

    function zB(BB) {
      let {
        game: IB
      } = BB;
      const ZB = (0, kB.is99NightsCrazyGamesBundle)() ? "large" : "small",
        TB = (0, cB.c)(IB, ZB),
        zB = (0, vB.c)(TB),
        FB = void 0 !== zB.blurhash;
      return (0, hB.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [zB.isLoading && !FB && (0, hB.jsx)(GB.d, {
          loaderType: "Secondary"
        }), !zB.failed && (null !== zB.src || FB) && (0, hB.jsx)("div", {
          className: JB()("SchematicImage", nB.h, {
            SchematicImageFadeIn: zB.fadeIn && !FB
          }),
          style: (0, nB.f)(zB),
          children: (0, hB.jsx)(nB.d, {
            image: zB
          })
        }), zB.failed && (0, hB.jsx)("div", {
          className: "SchematicImageError",
          children: (0, hB.jsx)(oB.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5051: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => OB
    });
    ZB(5053);
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(342),
      vB = ZB(1062),
      kB = ZB(1281),
      cB = ZB(1248),
      nB = ZB(1179),
      hB = ZB(1561),
      zB = ZB(5057),
      FB = ZB(1516),
      NB = ZB(5065),
      gB = ZB(1397),
      qB = ZB(1579),
      yB = ZB(4809),
      UB = ZB(1102),
      WB = ZB(1051),
      dB = ZB(2637),
      CB = ZB(5072),
      QB = ZB(1605),
      sB = ZB(1153);

    function wB() {
      const {
        t: BB
      } = (0, cB.G)(), IB = (0, qB.useNavigatePreserveSearch)(), ZB = (0, dB.o)(), JB = (0, TB.useMemo)((() => [...WB.c].sort(((IB, TB) => {
        var JB, oB;
        const GB = (null !== (JB = (0, dB.d)(TB, ZB)) && void 0 !== JB ? JB : 0) - (null !== (oB = (0, dB.d)(IB, ZB)) && void 0 !== oB ? oB : 0);
        return 0 !== GB ? GB : (0, QB.h)(IB, BB).localeCompare((0, QB.h)(TB, BB))
      }))), [ZB, BB]);
      return (0, sB.jsxs)(sB.Fragment, {
        children: [(0, sB.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, sB.jsx)("h1", {
            className: "StudioPageTitle",
            children: BB("studio:firstPartyGames")
          })
        }), (0, sB.jsx)(NB.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: BB("general:game")
          }, {
            key: "ccu",
            header: BB("studio:metricCcu")
          }],
          rows: JB,
          getRowKey: BB => BB,
          renderRow: TB => {
            var JB;
            return (0, sB.jsxs)("tr", {
              onClick: () => {
                IB((0, QB.k)((0, vB.e)(TB, !0)))
              },
              children: [(0, sB.jsx)("td", {
                children: (0, sB.jsx)(CB.e, {
                  thumbnail: (0, sB.jsx)(CB.c, {
                    game: TB
                  }),
                  name: (0, QB.h)(TB, BB)
                })
              }), (0, sB.jsx)("td", {
                children: (0, kB.J)(null !== (JB = (0, dB.d)(TB, ZB)) && void 0 !== JB ? JB : 0)
              })]
            })
          }
        })]
      })
    }

    function OB() {
      const {
        t: BB
      } = (0, cB.G)(), IB = (0, qB.useNavigatePreserveSearch)(), {
        userContext: ZB,
        isUserContextUpdating: JB
      } = (0, nB.d)(), {
        isCreating: WB,
        create: dB
      } = (0, yB.e)(), [OB, YB] = (0, TB.useState)(null), [iB, pB] = (0, TB.useState)(null), [aB, HB] = (0, TB.useState)(!1);
      (0, TB.useEffect)((() => {
        JB || (HB(!1), hB.c.getPublishedGamePreviews(ZB, {
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
          YB({
            ...BB,
            results: (0, GB.kb)(BB.results)
          })
        })).catch((BB => {
          console.error("Failed to get owned published games", BB), HB(!0)
        })), hB.c.getOwnedUnpublishedGames(ZB).then((BB => {
          pB(BB)
        })).catch((BB => {
          console.error("Failed to get owned unpublished games", BB), HB(!0)
        })))
      }), [JB, ZB]);
      const MB = null !== OB && null !== iB ? [...OB.results, ...iB] : [],
        jB = !aB && (null === OB || null === iB),
        PB = !jB && !aB && 0 === MB.length,
        RB = !JB && ZB.playerHasRank("developer");
      return (0, sB.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, sB.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, sB.jsx)("h1", {
            className: "StudioPageTitle",
            children: BB("studio:myGames")
          }), (0, sB.jsxs)(FB.p, {
            onClick: dB,
            loading: WB,
            children: [(0, sB.jsx)(UB.d, {
              name: "plus"
            }), " ", BB("homePage:createCustomGame")]
          })]
        }), jB && (0, sB.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, sB.jsx)(gB.d, {})
        }), aB && (0, sB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: BB("studio:failedToLoadGames")
        }), PB && (0, sB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: BB("studio:noGamesYet")
        }), !jB && !aB && !PB && (0, sB.jsx)(NB.e, {
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
          rows: MB,
          getRowKey: BB => BB.schematicId,
          renderRow: ZB => (0, sB.jsxs)("tr", {
            onClick: () => {
              var BB;
              BB = ZB.schematicId, IB((0, QB.k)((0, vB.d)(BB)))
            },
            children: [(0, sB.jsx)("td", {
              children: (0, sB.jsx)(CB.e, {
                thumbnail: (0, sB.jsx)(zB.d, {
                  game: ZB
                }),
                name: ZB.name
              })
            }), (0, sB.jsx)("td", {
              children: (0, sB.jsx)("span", {
                className: oB()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: ZB.gamePublished
                }),
                children: ZB.gamePublished ? BB("general:published") : BB("general:draft")
              })
            }), (0, sB.jsx)("td", {
              children: (0, kB.J)(ZB.ccu)
            }), (0, sB.jsx)("td", {
              children: (0, kB.J)(ZB.favourites)
            })]
          })
        }), RB && (0, sB.jsx)(wB, {})]
      })
    }
  },
  5072: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      e: () => oB
    });
    var TB = ZB(1605),
      JB = ZB(1153);

    function oB(BB) {
      let {
        thumbnail: IB,
        name: ZB
      } = BB;
      return (0, JB.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, JB.jsx)("div", {
          className: "StudioTableThumbnail",
          children: IB
        }), (0, JB.jsx)("span", {
          className: "StudioTableGameName",
          children: ZB
        })]
      })
    }

    function GB(BB) {
      let {
        game: IB
      } = BB;
      return (0, JB.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, TB.g)(IB),
        alt: ""
      })
    }
  },
  5065: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(1153);

    function vB(BB) {
      let {
        columns: IB,
        rows: ZB,
        getRowKey: JB,
        renderRow: vB,
        className: kB
      } = BB;
      return (0, GB.jsxs)("table", {
        className: oB()("Table", kB),
        children: [(0, GB.jsx)("thead", {
          children: (0, GB.jsx)("tr", {
            children: IB.map((BB => (0, GB.jsx)("th", {
              children: BB.header
            }, BB.key)))
          })
        }), (0, GB.jsx)("tbody", {
          children: ZB.map((BB => (0, GB.jsx)(TB.Fragment, {
            children: vB(BB)
          }, JB(BB))))
        })]
      })
    }
  },
  5053: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);