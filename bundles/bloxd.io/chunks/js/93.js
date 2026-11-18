export const id = 93;
export const ids = [93];
export const modules = {
  4323: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => DJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(942),
      XJ = ZJ(1232),
      AJ = ZJ(2988),
      qJ = ZJ(112),
      jJ = ZJ(3026),
      YJ = ZJ(3017),
      hJ = ZJ(990);

    function DJ(JJ) {
      let {
        game: cJ
      } = JJ;
      const ZJ = (0, qJ.f)() ? "large" : "small",
        FJ = (0, jJ.f)(cJ, ZJ),
        DJ = (0, AJ.f)(FJ),
        sJ = void 0 !== DJ.blurhash;
      return (0, hJ.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [DJ.isLoading && !sJ && (0, hJ.jsx)(XJ.c, {
          loaderType: "Secondary"
        }), !DJ.failed && (null !== DJ.src || sJ) && (0, hJ.jsx)("div", {
          className: UJ()("SchematicImage", YJ.j, {
            SchematicImageFadeIn: DJ.fadeIn && !sJ
          }),
          style: (0, YJ.g)(DJ),
          children: (0, hJ.jsx)(YJ.e, {
            image: DJ
          })
        }), DJ.failed && (0, hJ.jsx)("div", {
          className: "SchematicImageError",
          children: (0, hJ.jsx)(eJ.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4310: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => yJ
    });
    ZJ(4317);
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(227),
      AJ = ZJ(905),
      qJ = ZJ(1122),
      jJ = ZJ(1086),
      YJ = ZJ(1022),
      hJ = ZJ(1389),
      DJ = ZJ(4323),
      sJ = ZJ(1329),
      nJ = ZJ(4325),
      GJ = ZJ(1232),
      fJ = ZJ(1406),
      xJ = ZJ(4051),
      rJ = ZJ(942),
      vJ = ZJ(880),
      mJ = ZJ(2202),
      QJ = ZJ(4332),
      EJ = ZJ(1441),
      VJ = ZJ(990);

    function KJ() {
      const {
        t: JJ
      } = (0, jJ.F)(), cJ = (0, fJ.useNavigatePreserveSearch)(), ZJ = (0, mJ.o)(), UJ = (0, FJ.useMemo)((() => [...vJ.c].sort(((cJ, FJ) => {
        var UJ, eJ;
        const XJ = (null !== (UJ = (0, mJ.b)(FJ, ZJ)) && void 0 !== UJ ? UJ : 0) - (null !== (eJ = (0, mJ.b)(cJ, ZJ)) && void 0 !== eJ ? eJ : 0);
        return 0 !== XJ ? XJ : (0, EJ.g)(cJ, JJ).localeCompare((0, EJ.g)(FJ, JJ))
      }))), [ZJ, JJ]);
      return (0, VJ.jsxs)(VJ.Fragment, {
        children: [(0, VJ.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, VJ.jsx)("h1", {
            className: "StudioPageTitle",
            children: JJ("studio:firstPartyGames")
          })
        }), (0, VJ.jsx)(nJ.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: JJ("general:game")
          }, {
            key: "ccu",
            header: JJ("studio:metricCcu")
          }],
          rows: UJ,
          getRowKey: JJ => JJ,
          renderRow: FJ => {
            var UJ;
            return (0, VJ.jsxs)("tr", {
              onClick: () => {
                cJ((0, EJ.h)((0, AJ.g)(FJ, !0)))
              },
              children: [(0, VJ.jsx)("td", {
                children: (0, VJ.jsx)(QJ.f, {
                  thumbnail: (0, VJ.jsx)(QJ.b, {
                    game: FJ
                  }),
                  name: (0, EJ.g)(FJ, JJ)
                })
              }), (0, VJ.jsx)("td", {
                children: (0, qJ.S)(null !== (UJ = (0, mJ.b)(FJ, ZJ)) && void 0 !== UJ ? UJ : 0)
              })]
            })
          }
        })]
      })
    }

    function yJ() {
      const {
        t: JJ
      } = (0, jJ.F)(), cJ = (0, fJ.useNavigatePreserveSearch)(), {
        userContext: ZJ,
        isUserContextUpdating: UJ
      } = (0, YJ.d)(), {
        isCreating: vJ,
        create: mJ
      } = (0, xJ.i)(), [yJ, SJ] = (0, FJ.useState)(null), [IJ, MJ] = (0, FJ.useState)(null), [bJ, wJ] = (0, FJ.useState)(!1);
      (0, FJ.useEffect)((() => {
        UJ || (wJ(!1), hJ.c.getPublishedGamePreviews(ZJ, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((JJ => {
          SJ({
            ...JJ,
            results: (0, XJ.O)(JJ.results)
          })
        })).catch((JJ => {
          console.error("Failed to get owned published games", JJ), wJ(!0)
        })), hJ.c.getOwnedUnpublishedGames(ZJ).then((JJ => {
          MJ(JJ)
        })).catch((JJ => {
          console.error("Failed to get owned unpublished games", JJ), wJ(!0)
        })))
      }), [UJ, ZJ]);
      const WJ = null !== yJ && null !== IJ ? [...yJ.results, ...IJ] : [],
        gJ = !bJ && (null === yJ || null === IJ),
        HJ = !gJ && !bJ && 0 === WJ.length,
        PJ = !UJ && ZJ.playerHasRank("developer");
      return (0, VJ.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, VJ.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, VJ.jsx)("h1", {
            className: "StudioPageTitle",
            children: JJ("studio:myGames")
          }), (0, VJ.jsxs)(sJ.m, {
            onClick: mJ,
            loading: vJ,
            children: [(0, VJ.jsx)(rJ.c, {
              name: "plus"
            }), " ", JJ("homePage:createCustomGame")]
          })]
        }), gJ && (0, VJ.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, VJ.jsx)(GJ.c, {})
        }), bJ && (0, VJ.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: JJ("studio:failedToLoadGames")
        }), HJ && (0, VJ.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: JJ("studio:noGamesYet")
        }), !gJ && !bJ && !HJ && (0, VJ.jsx)(nJ.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: JJ("general:game")
          }, {
            key: "status",
            header: JJ("general:status")
          }, {
            key: "ccu",
            header: JJ("studio:metricCcu")
          }, {
            key: "favourites",
            header: JJ("general:favourites")
          }],
          rows: WJ,
          getRowKey: JJ => JJ.schematicId,
          renderRow: ZJ => (0, VJ.jsxs)("tr", {
            onClick: () => {
              var JJ;
              JJ = ZJ.schematicId, cJ((0, EJ.h)((0, AJ.e)(JJ)))
            },
            children: [(0, VJ.jsx)("td", {
              children: (0, VJ.jsx)(QJ.f, {
                thumbnail: (0, VJ.jsx)(DJ.e, {
                  game: ZJ
                }),
                name: ZJ.name
              })
            }), (0, VJ.jsx)("td", {
              children: (0, VJ.jsx)("span", {
                className: eJ()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: ZJ.gamePublished
                }),
                children: ZJ.gamePublished ? JJ("general:published") : JJ("general:draft")
              })
            }), (0, VJ.jsx)("td", {
              children: (0, qJ.S)(ZJ.ccu)
            }), (0, VJ.jsx)("td", {
              children: (0, qJ.S)(ZJ.favourites)
            })]
          })
        }), PJ && (0, VJ.jsx)(KJ, {})]
      })
    }
  },
  4332: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      f: () => eJ
    });
    var FJ = ZJ(1441),
      UJ = ZJ(990);

    function eJ(JJ) {
      let {
        thumbnail: cJ,
        name: ZJ
      } = JJ;
      return (0, UJ.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, UJ.jsx)("div", {
          className: "StudioTableThumbnail",
          children: cJ
        }), (0, UJ.jsx)("span", {
          className: "StudioTableGameName",
          children: ZJ
        })]
      })
    }

    function XJ(JJ) {
      let {
        game: cJ
      } = JJ;
      return (0, UJ.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, FJ.f)(cJ),
        alt: ""
      })
    }
  },
  4325: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(990);

    function AJ(JJ) {
      let {
        columns: cJ,
        rows: ZJ,
        getRowKey: UJ,
        renderRow: AJ,
        className: qJ
      } = JJ;
      return (0, XJ.jsxs)("table", {
        className: eJ()("Table", qJ),
        children: [(0, XJ.jsx)("thead", {
          children: (0, XJ.jsx)("tr", {
            children: cJ.map((JJ => (0, XJ.jsx)("th", {
              children: JJ.header
            }, JJ.key)))
          })
        }), (0, XJ.jsx)("tbody", {
          children: ZJ.map((JJ => (0, XJ.jsx)(FJ.Fragment, {
            children: AJ(JJ)
          }, UJ(JJ))))
        })]
      })
    }
  },
  4317: () => {}
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);