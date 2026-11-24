export const id = 103;
export const ids = [103];
export const modules = {
  5002: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => rB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(1108),
      IB = zB(1369),
      NB = zB(3606),
      uB = zB(145),
      UB = zB(3645),
      aB = zB(3634),
      pB = zB(1148);

    function rB(BB) {
      let {
        game: jB
      } = BB;
      const zB = (0, uB.is99NightsCrazyGamesBundle)() ? "large" : "small",
        QB = (0, UB.e)(jB, zB),
        rB = (0, NB.f)(QB),
        sB = void 0 !== rB.blurhash;
      return (0, pB.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [rB.isLoading && !sB && (0, pB.jsx)(IB.e, {
          loaderType: "Secondary"
        }), !rB.failed && (null !== rB.src || sB) && (0, pB.jsx)("div", {
          className: nB()("SchematicImage", aB.h, {
            SchematicImageFadeIn: rB.fadeIn && !sB
          }),
          style: (0, aB.g)(rB),
          children: (0, pB.jsx)(aB.c, {
            image: rB
          })
        }), rB.failed && (0, pB.jsx)("div", {
          className: "SchematicImageError",
          children: (0, pB.jsx)(dB.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4990: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => iB
    });
    zB(4999);
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(363),
      NB = zB(1073),
      uB = zB(1263),
      UB = zB(1240),
      aB = zB(1169),
      pB = zB(1532),
      rB = zB(5002),
      sB = zB(1478),
      JB = zB(5004),
      mB = zB(1369),
      yB = zB(1543),
      kB = zB(4731),
      GB = zB(1108),
      LB = zB(1060),
      gB = zB(2624),
      tB = zB(5012),
      SB = zB(1562),
      MB = zB(1148);

    function EB() {
      const {
        t: BB
      } = (0, UB.D)(), jB = (0, yB.useNavigatePreserveSearch)(), zB = (0, gB.m)(), nB = (0, QB.useMemo)((() => [...LB.c].sort(((jB, QB) => {
        var nB, dB;
        const IB = (null !== (nB = (0, gB.e)(QB, zB)) && void 0 !== nB ? nB : 0) - (null !== (dB = (0, gB.e)(jB, zB)) && void 0 !== dB ? dB : 0);
        return 0 !== IB ? IB : (0, SB.p)(jB, BB).localeCompare((0, SB.p)(QB, BB))
      }))), [zB, BB]);
      return (0, MB.jsxs)(MB.Fragment, {
        children: [(0, MB.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, MB.jsx)("h1", {
            className: "StudioPageTitle",
            children: BB("studio:firstPartyGames")
          })
        }), (0, MB.jsx)(JB.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: BB("general:game")
          }, {
            key: "ccu",
            header: BB("studio:metricCcu")
          }],
          rows: nB,
          getRowKey: BB => BB,
          renderRow: QB => {
            var nB;
            return (0, MB.jsxs)("tr", {
              onClick: () => {
                jB((0, SB.s)((0, NB.h)(QB, !0)))
              },
              children: [(0, MB.jsx)("td", {
                children: (0, MB.jsx)(tB.f, {
                  thumbnail: (0, MB.jsx)(tB.d, {
                    game: QB
                  }),
                  name: (0, SB.p)(QB, BB)
                })
              }), (0, MB.jsx)("td", {
                children: (0, uB.J)(null !== (nB = (0, gB.e)(QB, zB)) && void 0 !== nB ? nB : 0)
              })]
            })
          }
        })]
      })
    }

    function iB() {
      const {
        t: BB
      } = (0, UB.D)(), jB = (0, yB.useNavigatePreserveSearch)(), {
        userContext: zB,
        isUserContextUpdating: nB
      } = (0, aB.d)(), {
        isCreating: LB,
        create: gB
      } = (0, kB.d)(), [iB, qB] = (0, QB.useState)(null), [fB, oB] = (0, QB.useState)(null), [HB, DB] = (0, QB.useState)(!1);
      (0, QB.useEffect)((() => {
        nB || (DB(!1), pB.b.getPublishedGamePreviews(zB, {
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
          qB({
            ...BB,
            results: (0, IB.W)(BB.results)
          })
        })).catch((BB => {
          console.error("Failed to get owned published games", BB), DB(!0)
        })), pB.b.getOwnedUnpublishedGames(zB).then((BB => {
          oB(BB)
        })).catch((BB => {
          console.error("Failed to get owned unpublished games", BB), DB(!0)
        })))
      }), [nB, zB]);
      const FB = null !== iB && null !== fB ? [...iB.results, ...fB] : [],
        YB = !HB && (null === iB || null === fB),
        VB = !YB && !HB && 0 === FB.length,
        hB = !nB && zB.playerHasRank("developer");
      return (0, MB.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, MB.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, MB.jsx)("h1", {
            className: "StudioPageTitle",
            children: BB("studio:myGames")
          }), (0, MB.jsxs)(sB.m, {
            onClick: gB,
            loading: LB,
            children: [(0, MB.jsx)(GB.c, {
              name: "plus"
            }), " ", BB("homePage:createCustomGame")]
          })]
        }), YB && (0, MB.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, MB.jsx)(mB.e, {})
        }), HB && (0, MB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: BB("studio:failedToLoadGames")
        }), VB && (0, MB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: BB("studio:noGamesYet")
        }), !YB && !HB && !VB && (0, MB.jsx)(JB.c, {
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
          rows: FB,
          getRowKey: BB => BB.schematicId,
          renderRow: zB => (0, MB.jsxs)("tr", {
            onClick: () => {
              var BB;
              BB = zB.schematicId, jB((0, SB.s)((0, NB.e)(BB)))
            },
            children: [(0, MB.jsx)("td", {
              children: (0, MB.jsx)(tB.f, {
                thumbnail: (0, MB.jsx)(rB.c, {
                  game: zB
                }),
                name: zB.name
              })
            }), (0, MB.jsx)("td", {
              children: (0, MB.jsx)("span", {
                className: dB()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: zB.gamePublished
                }),
                children: zB.gamePublished ? BB("general:published") : BB("general:draft")
              })
            }), (0, MB.jsx)("td", {
              children: (0, uB.J)(zB.ccu)
            }), (0, MB.jsx)("td", {
              children: (0, uB.J)(zB.favourites)
            })]
          })
        }), hB && (0, MB.jsx)(EB, {})]
      })
    }
  },
  5012: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      f: () => dB
    });
    var QB = zB(1562),
      nB = zB(1148);

    function dB(BB) {
      let {
        thumbnail: jB,
        name: zB
      } = BB;
      return (0, nB.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, nB.jsx)("div", {
          className: "StudioTableThumbnail",
          children: jB
        }), (0, nB.jsx)("span", {
          className: "StudioTableGameName",
          children: zB
        })]
      })
    }

    function IB(BB) {
      let {
        game: jB
      } = BB;
      return (0, nB.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, QB.l)(jB),
        alt: ""
      })
    }
  },
  5004: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(1148);

    function NB(BB) {
      let {
        columns: jB,
        rows: zB,
        getRowKey: nB,
        renderRow: NB,
        className: uB
      } = BB;
      return (0, IB.jsxs)("table", {
        className: dB()("Table", uB),
        children: [(0, IB.jsx)("thead", {
          children: (0, IB.jsx)("tr", {
            children: jB.map((BB => (0, IB.jsx)("th", {
              children: BB.header
            }, BB.key)))
          })
        }), (0, IB.jsx)("tbody", {
          children: zB.map((BB => (0, IB.jsx)(QB.Fragment, {
            children: NB(BB)
          }, nB(BB))))
        })]
      })
    }
  },
  4999: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);