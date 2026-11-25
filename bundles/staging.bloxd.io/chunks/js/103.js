export const id = 103;
export const ids = [103];
export const modules = {
  4933: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => fG
    });
    var wG = ZG(1006),
      SG = ZG.n(wG),
      LG = ZG(1016),
      yG = ZG(1302),
      kG = ZG(3481),
      UG = ZG(116),
      YG = ZG(3513),
      VG = ZG(3505),
      pG = ZG(1067);

    function fG(GG) {
      let {
        game: bG
      } = GG;
      const ZG = (0, UG.is99NightsCrazyGamesBundle)() ? "large" : "small",
        wG = (0, YG.c)(bG, ZG),
        fG = (0, kG.f)(wG),
        QG = void 0 !== fG.blurhash;
      return (0, pG.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [fG.isLoading && !QG && (0, pG.jsx)(yG.b, {
          loaderType: "Secondary"
        }), !fG.failed && (null !== fG.src || QG) && (0, pG.jsx)("div", {
          className: SG()("SchematicImage", VG.h, {
            SchematicImageFadeIn: fG.fadeIn && !QG
          }),
          style: (0, VG.e)(fG),
          children: (0, pG.jsx)(VG.c, {
            image: fG
          })
        }), fG.failed && (0, pG.jsx)("div", {
          className: "SchematicImageError",
          children: (0, pG.jsx)(LG.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4921: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => CG
    });
    ZG(4924);
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(333),
      kG = ZG(988),
      UG = ZG(1177),
      YG = ZG(1151),
      VG = ZG(1092),
      pG = ZG(1431),
      fG = ZG(4933),
      QG = ZG(1393),
      KG = ZG(4939),
      hG = ZG(1302),
      dG = ZG(1444),
      JG = ZG(4657),
      rG = ZG(1016),
      zG = ZG(973),
      EG = ZG(2489),
      oG = ZG(4945),
      XG = ZG(1481),
      uG = ZG(1067);

    function iG() {
      const {
        t: GG
      } = (0, YG.w)(), bG = (0, dG.useNavigatePreserveSearch)(), ZG = (0, EG.i)(), SG = (0, wG.useMemo)((() => [...zG.d].sort(((bG, wG) => {
        var SG, LG;
        const yG = (null !== (SG = (0, EG.b)(wG, ZG)) && void 0 !== SG ? SG : 0) - (null !== (LG = (0, EG.b)(bG, ZG)) && void 0 !== LG ? LG : 0);
        return 0 !== yG ? yG : (0, XG.l)(bG, GG).localeCompare((0, XG.l)(wG, GG))
      }))), [ZG, GG]);
      return (0, uG.jsxs)(uG.Fragment, {
        children: [(0, uG.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, uG.jsx)("h1", {
            className: "StudioPageTitle",
            children: GG("studio:firstPartyGames")
          })
        }), (0, uG.jsx)(KG.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: GG("general:game")
          }, {
            key: "ccu",
            header: GG("studio:metricCcu")
          }],
          rows: SG,
          getRowKey: GG => GG,
          renderRow: wG => {
            var SG;
            return (0, uG.jsxs)("tr", {
              onClick: () => {
                bG((0, XG.p)((0, kG.d)(wG, !0)))
              },
              children: [(0, uG.jsx)("td", {
                children: (0, uG.jsx)(oG.h, {
                  thumbnail: (0, uG.jsx)(oG.d, {
                    game: wG
                  }),
                  name: (0, XG.l)(wG, GG)
                })
              }), (0, uG.jsx)("td", {
                children: (0, UG.O)(null !== (SG = (0, EG.b)(wG, ZG)) && void 0 !== SG ? SG : 0)
              })]
            })
          }
        })]
      })
    }

    function CG() {
      const {
        t: GG
      } = (0, YG.w)(), bG = (0, dG.useNavigatePreserveSearch)(), {
        userContext: ZG,
        isUserContextUpdating: SG
      } = (0, VG.e)(), {
        isCreating: zG,
        create: EG
      } = (0, JG.g)(), [CG, WG] = (0, wG.useState)(null), [mG, IG] = (0, wG.useState)(null), [FG, vG] = (0, wG.useState)(!1);
      (0, wG.useEffect)((() => {
        SG || (vG(!1), pG.d.getPublishedGamePreviews(ZG, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((GG => {
          WG({
            ...GG,
            results: (0, yG.sb)(GG.results)
          })
        })).catch((GG => {
          console.error("Failed to get owned published games", GG), vG(!0)
        })), pG.d.getOwnedUnpublishedGames(ZG).then((GG => {
          IG(GG)
        })).catch((GG => {
          console.error("Failed to get owned unpublished games", GG), vG(!0)
        })))
      }), [SG, ZG]);
      const aG = null !== CG && null !== mG ? [...CG.results, ...mG] : [],
        cG = !FG && (null === CG || null === mG),
        lG = !cG && !FG && 0 === aG.length,
        jG = !SG && ZG.playerHasRank("developer");
      return (0, uG.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, uG.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, uG.jsx)("h1", {
            className: "StudioPageTitle",
            children: GG("studio:myGames")
          }), (0, uG.jsxs)(QG.k, {
            onClick: EG,
            loading: zG,
            children: [(0, uG.jsx)(rG.c, {
              name: "plus"
            }), " ", GG("homePage:createCustomGame")]
          })]
        }), cG && (0, uG.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, uG.jsx)(hG.b, {})
        }), FG && (0, uG.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: GG("studio:failedToLoadGames")
        }), lG && (0, uG.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: GG("studio:noGamesYet")
        }), !cG && !FG && !lG && (0, uG.jsx)(KG.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: GG("general:game")
          }, {
            key: "status",
            header: GG("general:status")
          }, {
            key: "ccu",
            header: GG("studio:metricCcu")
          }, {
            key: "favourites",
            header: GG("general:favourites")
          }],
          rows: aG,
          getRowKey: GG => GG.schematicId,
          renderRow: ZG => (0, uG.jsxs)("tr", {
            onClick: () => {
              var GG;
              GG = ZG.schematicId, bG((0, XG.p)((0, kG.b)(GG)))
            },
            children: [(0, uG.jsx)("td", {
              children: (0, uG.jsx)(oG.h, {
                thumbnail: (0, uG.jsx)(fG.e, {
                  game: ZG
                }),
                name: ZG.name
              })
            }), (0, uG.jsx)("td", {
              children: (0, uG.jsx)("span", {
                className: LG()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: ZG.gamePublished
                }),
                children: ZG.gamePublished ? GG("general:published") : GG("general:draft")
              })
            }), (0, uG.jsx)("td", {
              children: (0, UG.O)(ZG.ccu)
            }), (0, uG.jsx)("td", {
              children: (0, UG.O)(ZG.favourites)
            })]
          })
        }), jG && (0, uG.jsx)(iG, {})]
      })
    }
  },
  4945: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      h: () => LG
    });
    var wG = ZG(1481),
      SG = ZG(1067);

    function LG(GG) {
      let {
        thumbnail: bG,
        name: ZG
      } = GG;
      return (0, SG.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, SG.jsx)("div", {
          className: "StudioTableThumbnail",
          children: bG
        }), (0, SG.jsx)("span", {
          className: "StudioTableGameName",
          children: ZG
        })]
      })
    }

    function yG(GG) {
      let {
        game: bG
      } = GG;
      return (0, SG.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, wG.h)(bG),
        alt: ""
      })
    }
  },
  4939: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(1067);

    function kG(GG) {
      let {
        columns: bG,
        rows: ZG,
        getRowKey: SG,
        renderRow: kG,
        className: UG
      } = GG;
      return (0, yG.jsxs)("table", {
        className: LG()("Table", UG),
        children: [(0, yG.jsx)("thead", {
          children: (0, yG.jsx)("tr", {
            children: bG.map((GG => (0, yG.jsx)("th", {
              children: GG.header
            }, GG.key)))
          })
        }), (0, yG.jsx)("tbody", {
          children: ZG.map((GG => (0, yG.jsx)(wG.Fragment, {
            children: kG(GG)
          }, SG(GG))))
        })]
      })
    }
  },
  4924: () => {}
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);