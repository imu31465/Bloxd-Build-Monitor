export const id = 101;
export const ids = [101];
export const modules = {
  4920: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => UD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(1057),
      rD = wD(1346),
      LD = wD(3494),
      cD = wD(128),
      gD = wD(3535),
      RD = wD(3521),
      AD = wD(1096);

    function UD(DD) {
      let {
        game: zD
      } = DD;
      const wD = (0, cD.m)() ? "large" : "small",
        pD = (0, gD.f)(zD, wD),
        UD = (0, LD.c)(pD),
        fD = void 0 !== UD.blurhash;
      return (0, AD.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [UD.isLoading && !fD && (0, AD.jsx)(rD.e, {
          loaderType: "Secondary"
        }), !UD.failed && (null !== UD.src || fD) && (0, AD.jsx)("div", {
          className: sD()("SchematicImage", RD.g, {
            SchematicImageFadeIn: UD.fadeIn && !fD
          }),
          style: (0, RD.e)(UD),
          children: (0, AD.jsx)(RD.b, {
            image: UD
          })
        }), UD.failed && (0, AD.jsx)("div", {
          className: "SchematicImageError",
          children: (0, AD.jsx)(KD.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4909: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => VD
    });
    wD(4911);
    var pD = wD(58),
      sD = wD(1044),
      KD = wD.n(sD),
      rD = wD(338),
      LD = wD(1025),
      cD = wD(1232),
      gD = wD(1200),
      RD = wD(1127),
      AD = wD(1495),
      UD = wD(4920),
      fD = wD(1447),
      ID = wD(4929),
      BD = wD(1346),
      GD = wD(1511),
      hD = wD(4661),
      nD = wD(1057),
      MD = wD(1e3),
      OD = wD(2500),
      JD = wD(4936),
      ED = wD(1540),
      QD = wD(1096);

    function XD() {
      const {
        t: DD
      } = (0, gD.E)(), zD = (0, GD.useNavigatePreserveSearch)(), wD = (0, OD.l)(), sD = (0, pD.useMemo)((() => [...MD.d].sort(((zD, pD) => {
        var sD, KD;
        const rD = (null !== (sD = (0, OD.c)(pD, wD)) && void 0 !== sD ? sD : 0) - (null !== (KD = (0, OD.c)(zD, wD)) && void 0 !== KD ? KD : 0);
        return 0 !== rD ? rD : (0, ED.h)(zD, DD).localeCompare((0, ED.h)(pD, DD))
      }))), [wD, DD]);
      return (0, QD.jsxs)(QD.Fragment, {
        children: [(0, QD.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, QD.jsx)("h1", {
            className: "StudioPageTitle",
            children: DD("studio:firstPartyGames")
          })
        }), (0, QD.jsx)(ID.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: DD("general:game")
          }, {
            key: "ccu",
            header: DD("studio:metricCcu")
          }],
          rows: sD,
          getRowKey: DD => DD,
          renderRow: pD => {
            var sD;
            return (0, QD.jsxs)("tr", {
              onClick: () => {
                zD((0, ED.i)((0, LD.g)(pD, !0)))
              },
              children: [(0, QD.jsx)("td", {
                children: (0, QD.jsx)(JD.d, {
                  thumbnail: (0, QD.jsx)(JD.c, {
                    game: pD
                  }),
                  name: (0, ED.h)(pD, DD)
                })
              }), (0, QD.jsx)("td", {
                children: (0, cD.N)(null !== (sD = (0, OD.c)(pD, wD)) && void 0 !== sD ? sD : 0)
              })]
            })
          }
        })]
      })
    }

    function VD() {
      const {
        t: DD
      } = (0, gD.E)(), zD = (0, GD.useNavigatePreserveSearch)(), {
        userContext: wD,
        isUserContextUpdating: sD
      } = (0, RD.c)(), {
        isCreating: MD,
        create: OD
      } = (0, hD.c)(), [VD, PD] = (0, pD.useState)(null), [CD, xD] = (0, pD.useState)(null), [TD, bD] = (0, pD.useState)(!1);
      (0, pD.useEffect)((() => {
        sD || (bD(!1), AD.d.getPublishedGamePreviews(wD, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((DD => {
          PD({
            ...DD,
            results: (0, rD.$)(DD.results)
          })
        })).catch((DD => {
          console.error("Failed to get owned published games", DD), bD(!0)
        })), AD.d.getOwnedUnpublishedGames(wD).then((DD => {
          xD(DD)
        })).catch((DD => {
          console.error("Failed to get owned unpublished games", DD), bD(!0)
        })))
      }), [sD, wD]);
      const jD = null !== VD && null !== CD ? [...VD.results, ...CD] : [],
        dD = !TD && (null === VD || null === CD),
        SD = !dD && !TD && 0 === jD.length,
        iD = !sD && wD.playerHasRank("developer");
      return (0, QD.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, QD.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, QD.jsx)("h1", {
            className: "StudioPageTitle",
            children: DD("studio:myGames")
          }), (0, QD.jsxs)(fD.o, {
            onClick: OD,
            loading: MD,
            children: [(0, QD.jsx)(nD.e, {
              name: "plus"
            }), " ", DD("homePage:createCustomGame")]
          })]
        }), dD && (0, QD.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, QD.jsx)(BD.e, {})
        }), TD && (0, QD.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: DD("studio:failedToLoadGames")
        }), SD && (0, QD.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: DD("studio:noGamesYet")
        }), !dD && !TD && !SD && (0, QD.jsx)(ID.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: DD("general:game")
          }, {
            key: "status",
            header: DD("general:status")
          }, {
            key: "ccu",
            header: DD("studio:metricCcu")
          }, {
            key: "favourites",
            header: DD("general:favourites")
          }],
          rows: jD,
          getRowKey: DD => DD.schematicId,
          renderRow: wD => (0, QD.jsxs)("tr", {
            onClick: () => {
              var DD;
              DD = wD.schematicId, zD((0, ED.i)((0, LD.e)(DD)))
            },
            children: [(0, QD.jsx)("td", {
              children: (0, QD.jsx)(JD.d, {
                thumbnail: (0, QD.jsx)(UD.e, {
                  game: wD
                }),
                name: wD.name
              })
            }), (0, QD.jsx)("td", {
              children: (0, QD.jsx)("span", {
                className: KD()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: wD.gamePublished
                }),
                children: wD.gamePublished ? DD("general:published") : DD("general:draft")
              })
            }), (0, QD.jsx)("td", {
              children: (0, cD.N)(wD.ccu)
            }), (0, QD.jsx)("td", {
              children: (0, cD.N)(wD.favourites)
            })]
          })
        }), iD && (0, QD.jsx)(XD, {})]
      })
    }
  },
  4936: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD,
      d: () => KD
    });
    var pD = wD(1540),
      sD = wD(1096);

    function KD(DD) {
      let {
        thumbnail: zD,
        name: wD
      } = DD;
      return (0, sD.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, sD.jsx)("div", {
          className: "StudioTableThumbnail",
          children: zD
        }), (0, sD.jsx)("span", {
          className: "StudioTableGameName",
          children: wD
        })]
      })
    }

    function rD(DD) {
      let {
        game: zD
      } = DD;
      return (0, sD.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, pD.f)(zD),
        alt: ""
      })
    }
  },
  4929: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD
    });
    var pD = wD(58),
      sD = wD(1044),
      KD = wD.n(sD),
      rD = wD(1096);

    function LD(DD) {
      let {
        columns: zD,
        rows: wD,
        getRowKey: sD,
        renderRow: LD,
        className: cD
      } = DD;
      return (0, rD.jsxs)("table", {
        className: KD()("Table", cD),
        children: [(0, rD.jsx)("thead", {
          children: (0, rD.jsx)("tr", {
            children: zD.map((DD => (0, rD.jsx)("th", {
              children: DD.header
            }, DD.key)))
          })
        }), (0, rD.jsx)("tbody", {
          children: wD.map((DD => (0, rD.jsx)(pD.Fragment, {
            children: LD(DD)
          }, sD(DD))))
        })]
      })
    }
  },
  4911: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);