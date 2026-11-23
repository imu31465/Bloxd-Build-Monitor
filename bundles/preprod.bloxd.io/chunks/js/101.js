export const id = 101;
export const ids = [101];
export const modules = {
  4847: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => NC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(1013),
      nC = ZC(1295),
      fC = ZC(3464),
      oC = ZC(113),
      qC = ZC(3498),
      FC = ZC(3487),
      WC = ZC(1056);

    function NC(CC) {
      let {
        game: zC
      } = CC;
      const ZC = (0, oC.o)() ? "large" : "small",
        QC = (0, qC.g)(zC, ZC),
        NC = (0, fC.e)(QC),
        MC = void 0 !== NC.blurhash;
      return (0, WC.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [NC.isLoading && !MC && (0, WC.jsx)(nC.d, {
          loaderType: "Secondary"
        }), !NC.failed && (null !== NC.src || MC) && (0, WC.jsx)("div", {
          className: wC()("SchematicImage", FC.k, {
            SchematicImageFadeIn: NC.fadeIn && !MC
          }),
          style: (0, FC.g)(NC),
          children: (0, WC.jsx)(FC.d, {
            image: NC
          })
        }), NC.failed && (0, WC.jsx)("div", {
          className: "SchematicImageError",
          children: (0, WC.jsx)(bC.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4830: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => vC
    });
    ZC(4838);
    var QC = ZC(48),
      wC = ZC(1002),
      bC = ZC.n(wC),
      nC = ZC(310),
      fC = ZC(979),
      oC = ZC(1169),
      qC = ZC(1143),
      FC = ZC(1076),
      WC = ZC(1439),
      NC = ZC(4847),
      MC = ZC(1388),
      gC = ZC(4854),
      SC = ZC(1295),
      pC = ZC(1453),
      PC = ZC(4571),
      GC = ZC(1013),
      RC = ZC(964),
      AC = ZC(2465),
      xC = ZC(4863),
      JC = ZC(1477),
      IC = ZC(1056);

    function iC() {
      const {
        t: CC
      } = (0, qC.y)(), zC = (0, pC.useNavigatePreserveSearch)(), ZC = (0, AC.r)(), wC = (0, QC.useMemo)((() => [...RC.e].sort(((zC, QC) => {
        var wC, bC;
        const nC = (null !== (wC = (0, AC.b)(QC, ZC)) && void 0 !== wC ? wC : 0) - (null !== (bC = (0, AC.b)(zC, ZC)) && void 0 !== bC ? bC : 0);
        return 0 !== nC ? nC : (0, JC.n)(zC, CC).localeCompare((0, JC.n)(QC, CC))
      }))), [ZC, CC]);
      return (0, IC.jsxs)(IC.Fragment, {
        children: [(0, IC.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, IC.jsx)("h1", {
            className: "StudioPageTitle",
            children: CC("studio:firstPartyGames")
          })
        }), (0, IC.jsx)(gC.b, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: CC("general:game")
          }, {
            key: "ccu",
            header: CC("studio:metricCcu")
          }],
          rows: wC,
          getRowKey: CC => CC,
          renderRow: QC => {
            var wC;
            return (0, IC.jsxs)("tr", {
              onClick: () => {
                zC((0, JC.o)((0, fC.f)(QC, !0)))
              },
              children: [(0, IC.jsx)("td", {
                children: (0, IC.jsx)(xC.g, {
                  thumbnail: (0, IC.jsx)(xC.e, {
                    game: QC
                  }),
                  name: (0, JC.n)(QC, CC)
                })
              }), (0, IC.jsx)("td", {
                children: (0, oC.Z)(null !== (wC = (0, AC.b)(QC, ZC)) && void 0 !== wC ? wC : 0)
              })]
            })
          }
        })]
      })
    }

    function vC() {
      const {
        t: CC
      } = (0, qC.y)(), zC = (0, pC.useNavigatePreserveSearch)(), {
        userContext: ZC,
        isUserContextUpdating: wC
      } = (0, FC.e)(), {
        isCreating: RC,
        create: AC
      } = (0, PC.e)(), [vC, eC] = (0, QC.useState)(null), [hC, KC] = (0, QC.useState)(null), [YC, dC] = (0, QC.useState)(!1);
      (0, QC.useEffect)((() => {
        wC || (dC(!1), WC.d.getPublishedGamePreviews(ZC, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((CC => {
          eC({
            ...CC,
            results: (0, nC.$)(CC.results)
          })
        })).catch((CC => {
          console.error("Failed to get owned published games", CC), dC(!0)
        })), WC.d.getOwnedUnpublishedGames(ZC).then((CC => {
          KC(CC)
        })).catch((CC => {
          console.error("Failed to get owned unpublished games", CC), dC(!0)
        })))
      }), [wC, ZC]);
      const mC = null !== vC && null !== hC ? [...vC.results, ...hC] : [],
        HC = !YC && (null === vC || null === hC),
        EC = !HC && !YC && 0 === mC.length,
        lC = !wC && ZC.playerHasRank("developer");
      return (0, IC.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, IC.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, IC.jsx)("h1", {
            className: "StudioPageTitle",
            children: CC("studio:myGames")
          }), (0, IC.jsxs)(MC.o, {
            onClick: AC,
            loading: RC,
            children: [(0, IC.jsx)(GC.c, {
              name: "plus"
            }), " ", CC("homePage:createCustomGame")]
          })]
        }), HC && (0, IC.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, IC.jsx)(SC.d, {})
        }), YC && (0, IC.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: CC("studio:failedToLoadGames")
        }), EC && (0, IC.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: CC("studio:noGamesYet")
        }), !HC && !YC && !EC && (0, IC.jsx)(gC.b, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: CC("general:game")
          }, {
            key: "status",
            header: CC("general:status")
          }, {
            key: "ccu",
            header: CC("studio:metricCcu")
          }, {
            key: "favourites",
            header: CC("general:favourites")
          }],
          rows: mC,
          getRowKey: CC => CC.schematicId,
          renderRow: ZC => (0, IC.jsxs)("tr", {
            onClick: () => {
              var CC;
              CC = ZC.schematicId, zC((0, JC.o)((0, fC.d)(CC)))
            },
            children: [(0, IC.jsx)("td", {
              children: (0, IC.jsx)(xC.g, {
                thumbnail: (0, IC.jsx)(NC.d, {
                  game: ZC
                }),
                name: ZC.name
              })
            }), (0, IC.jsx)("td", {
              children: (0, IC.jsx)("span", {
                className: bC()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: ZC.gamePublished
                }),
                children: ZC.gamePublished ? CC("general:published") : CC("general:draft")
              })
            }), (0, IC.jsx)("td", {
              children: (0, oC.Z)(ZC.ccu)
            }), (0, IC.jsx)("td", {
              children: (0, oC.Z)(ZC.favourites)
            })]
          })
        }), lC && (0, IC.jsx)(iC, {})]
      })
    }
  },
  4863: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      g: () => bC
    });
    var QC = ZC(1477),
      wC = ZC(1056);

    function bC(CC) {
      let {
        thumbnail: zC,
        name: ZC
      } = CC;
      return (0, wC.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, wC.jsx)("div", {
          className: "StudioTableThumbnail",
          children: zC
        }), (0, wC.jsx)("span", {
          className: "StudioTableGameName",
          children: ZC
        })]
      })
    }

    function nC(CC) {
      let {
        game: zC
      } = CC;
      return (0, wC.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, QC.j)(zC),
        alt: ""
      })
    }
  },
  4854: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => fC
    });
    var QC = ZC(48),
      wC = ZC(1002),
      bC = ZC.n(wC),
      nC = ZC(1056);

    function fC(CC) {
      let {
        columns: zC,
        rows: ZC,
        getRowKey: wC,
        renderRow: fC,
        className: oC
      } = CC;
      return (0, nC.jsxs)("table", {
        className: bC()("Table", oC),
        children: [(0, nC.jsx)("thead", {
          children: (0, nC.jsx)("tr", {
            children: zC.map((CC => (0, nC.jsx)("th", {
              children: CC.header
            }, CC.key)))
          })
        }), (0, nC.jsx)("tbody", {
          children: ZC.map((CC => (0, nC.jsx)(QC.Fragment, {
            children: fC(CC)
          }, wC(CC))))
        })]
      })
    }
  },
  4838: () => {}
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);