export const id = 99;
export const ids = [99];
export const modules = {
  4677: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => yD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(1064),
      fD = cD(1328),
      bD = cD(3314),
      QD = cD(120),
      wD = cD(3346),
      SD = cD(3342),
      BD = cD(1093);

    function yD(DD) {
      let {
        game: CD
      } = DD;
      const cD = (0, QD.i)() ? "large" : "small",
        ID = (0, wD.f)(CD, cD),
        yD = (0, bD.f)(ID),
        MD = void 0 !== yD.blurhash;
      return (0, BD.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [yD.isLoading && !MD && (0, BD.jsx)(fD.e, {
          loaderType: "Secondary"
        }), !yD.failed && (null !== yD.src || MD) && (0, BD.jsx)("div", {
          className: pD()("SchematicImage", SD.h, {
            SchematicImageFadeIn: yD.fadeIn && !MD
          }),
          style: (0, SD.d)(yD),
          children: (0, BD.jsx)(SD.b, {
            image: yD
          })
        }), yD.failed && (0, BD.jsx)("div", {
          className: "SchematicImageError",
          children: (0, BD.jsx)(iD.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4659: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => HD
    });
    cD(4668);
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(312),
      bD = cD(1025),
      QD = cD(1221),
      wD = cD(1192),
      SD = cD(1120),
      BD = cD(1497),
      yD = cD(4677),
      MD = cD(1442),
      tD = cD(4681),
      ZD = cD(1328),
      oD = cD(1508),
      vD = cD(4434),
      ND = cD(1064),
      gD = cD(1007),
      XD = cD(2432),
      mD = cD(4690),
      nD = cD(1537),
      OD = cD(1093);

    function PD() {
      const {
        t: DD
      } = (0, wD.F)(), CD = (0, oD.useNavigatePreserveSearch)(), cD = (0, XD.g)(), pD = (0, ID.useMemo)((() => [...gD.b].sort(((CD, ID) => {
        var pD, iD;
        const fD = (null !== (pD = (0, XD.b)(ID, cD)) && void 0 !== pD ? pD : 0) - (null !== (iD = (0, XD.b)(CD, cD)) && void 0 !== iD ? iD : 0);
        return 0 !== fD ? fD : (0, nD.m)(CD, DD).localeCompare((0, nD.m)(ID, DD))
      }))), [cD, DD]);
      return (0, OD.jsxs)(OD.Fragment, {
        children: [(0, OD.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, OD.jsx)("h1", {
            className: "StudioPageTitle",
            children: DD("studio:firstPartyGames")
          })
        }), (0, OD.jsx)(tD.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: DD("general:game")
          }, {
            key: "ccu",
            header: DD("studio:metricCcu")
          }],
          rows: pD,
          getRowKey: DD => DD,
          renderRow: ID => {
            var pD;
            return (0, OD.jsxs)("tr", {
              onClick: () => {
                CD((0, nD.o)((0, bD.f)(ID, !0)))
              },
              children: [(0, OD.jsx)("td", {
                children: (0, OD.jsx)(mD.e, {
                  thumbnail: (0, OD.jsx)(mD.c, {
                    game: ID
                  }),
                  name: (0, nD.m)(ID, DD)
                })
              }), (0, OD.jsx)("td", {
                children: (0, QD.S)(null !== (pD = (0, XD.b)(ID, cD)) && void 0 !== pD ? pD : 0)
              })]
            })
          }
        })]
      })
    }

    function HD() {
      const {
        t: DD
      } = (0, wD.F)(), CD = (0, oD.useNavigatePreserveSearch)(), {
        userContext: cD,
        isUserContextUpdating: pD
      } = (0, SD.c)(), {
        isCreating: gD,
        create: XD
      } = (0, vD.e)(), [HD, UD] = (0, ID.useState)(null), [xD, qD] = (0, ID.useState)(null), [JD, KD] = (0, ID.useState)(!1);
      (0, ID.useEffect)((() => {
        pD || (KD(!1), BD.c.getPublishedGamePreviews(cD, {
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
          UD({
            ...DD,
            results: (0, fD.Y)(DD.results)
          })
        })).catch((DD => {
          console.error("Failed to get owned published games", DD), KD(!0)
        })), BD.c.getOwnedUnpublishedGames(cD).then((DD => {
          qD(DD)
        })).catch((DD => {
          console.error("Failed to get owned unpublished games", DD), KD(!0)
        })))
      }), [pD, cD]);
      const aD = null !== HD && null !== xD ? [...HD.results, ...xD] : [],
        VD = !JD && (null === HD || null === xD),
        zD = !VD && !JD && 0 === aD.length,
        jD = !pD && cD.playerHasRank("developer");
      return (0, OD.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, OD.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, OD.jsx)("h1", {
            className: "StudioPageTitle",
            children: DD("studio:myGames")
          }), (0, OD.jsxs)(MD.o, {
            onClick: XD,
            loading: gD,
            children: [(0, OD.jsx)(ND.c, {
              name: "plus"
            }), " ", DD("homePage:createCustomGame")]
          })]
        }), VD && (0, OD.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, OD.jsx)(ZD.e, {})
        }), JD && (0, OD.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: DD("studio:failedToLoadGames")
        }), zD && (0, OD.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: DD("studio:noGamesYet")
        }), !VD && !JD && !zD && (0, OD.jsx)(tD.e, {
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
          rows: aD,
          getRowKey: DD => DD.schematicId,
          renderRow: cD => (0, OD.jsxs)("tr", {
            onClick: () => {
              var DD;
              DD = cD.schematicId, CD((0, nD.o)((0, bD.d)(DD)))
            },
            children: [(0, OD.jsx)("td", {
              children: (0, OD.jsx)(mD.e, {
                thumbnail: (0, OD.jsx)(yD.e, {
                  game: cD
                }),
                name: cD.name
              })
            }), (0, OD.jsx)("td", {
              children: (0, OD.jsx)("span", {
                className: iD()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: cD.gamePublished
                }),
                children: cD.gamePublished ? DD("general:published") : DD("general:draft")
              })
            }), (0, OD.jsx)("td", {
              children: (0, QD.S)(cD.ccu)
            }), (0, OD.jsx)("td", {
              children: (0, QD.S)(cD.favourites)
            })]
          })
        }), jD && (0, OD.jsx)(PD, {})]
      })
    }
  },
  4690: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      e: () => iD
    });
    var ID = cD(1537),
      pD = cD(1093);

    function iD(DD) {
      let {
        thumbnail: CD,
        name: cD
      } = DD;
      return (0, pD.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, pD.jsx)("div", {
          className: "StudioTableThumbnail",
          children: CD
        }), (0, pD.jsx)("span", {
          className: "StudioTableGameName",
          children: cD
        })]
      })
    }

    function fD(DD) {
      let {
        game: CD
      } = DD;
      return (0, pD.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, ID.j)(CD),
        alt: ""
      })
    }
  },
  4681: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(1093);

    function bD(DD) {
      let {
        columns: CD,
        rows: cD,
        getRowKey: pD,
        renderRow: bD,
        className: QD
      } = DD;
      return (0, fD.jsxs)("table", {
        className: iD()("Table", QD),
        children: [(0, fD.jsx)("thead", {
          children: (0, fD.jsx)("tr", {
            children: CD.map((DD => (0, fD.jsx)("th", {
              children: DD.header
            }, DD.key)))
          })
        }), (0, fD.jsx)("tbody", {
          children: cD.map((DD => (0, fD.jsx)(ID.Fragment, {
            children: bD(DD)
          }, pD(DD))))
        })]
      })
    }
  },
  4668: () => {}
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);