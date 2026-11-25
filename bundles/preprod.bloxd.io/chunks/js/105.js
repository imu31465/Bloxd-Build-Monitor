export const id = 105;
export const ids = [105];
export const modules = {
  5256: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => rQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(1094),
      zQ = XQ(1391),
      sQ = XQ(3751),
      FQ = XQ(158),
      PQ = XQ(3793),
      gQ = XQ(3776),
      JQ = XQ(1145);

    function rQ(QQ) {
      let {
        game: WQ
      } = QQ;
      const XQ = (0, FQ.is99NightsCrazyGamesBundle)() ? "large" : "small",
        wQ = (0, PQ.g)(WQ, XQ),
        rQ = (0, sQ.g)(wQ),
        IQ = void 0 !== rQ.blurhash;
      return (0, JQ.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [rQ.isLoading && !IQ && (0, JQ.jsx)(zQ.e, {
          loaderType: "Secondary"
        }), !rQ.failed && (null !== rQ.src || IQ) && (0, JQ.jsx)("div", {
          className: qQ()("SchematicImage", gQ.i, {
            SchematicImageFadeIn: rQ.fadeIn && !IQ
          }),
          style: (0, gQ.h)(rQ),
          children: (0, JQ.jsx)(gQ.e, {
            image: rQ
          })
        }), rQ.failed && (0, JQ.jsx)("div", {
          className: "SchematicImageError",
          children: (0, JQ.jsx)(TQ.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5248: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => HQ
    });
    XQ(5250);
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(382),
      sQ = XQ(1057),
      FQ = XQ(1257),
      PQ = XQ(1226),
      gQ = XQ(1162),
      JQ = XQ(1548),
      rQ = XQ(5256),
      IQ = XQ(1507),
      jQ = XQ(5263),
      BQ = XQ(1391),
      yQ = XQ(1567),
      VQ = XQ(4954),
      DQ = XQ(1094),
      pQ = XQ(1046),
      GQ = XQ(2627),
      UQ = XQ(5270),
      bQ = XQ(1601),
      vQ = XQ(1145);

    function dQ() {
      const {
        t: QQ
      } = (0, PQ.C)(), WQ = (0, yQ.useNavigatePreserveSearch)(), XQ = (0, GQ.m)(), qQ = (0, wQ.useMemo)((() => [...pQ.b].sort(((WQ, wQ) => {
        var qQ, TQ;
        const zQ = (null !== (qQ = (0, GQ.e)(wQ, XQ)) && void 0 !== qQ ? qQ : 0) - (null !== (TQ = (0, GQ.e)(WQ, XQ)) && void 0 !== TQ ? TQ : 0);
        return 0 !== zQ ? zQ : (0, bQ.j)(WQ, QQ).localeCompare((0, bQ.j)(wQ, QQ))
      }))), [XQ, QQ]);
      return (0, vQ.jsxs)(vQ.Fragment, {
        children: [(0, vQ.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, vQ.jsx)("h1", {
            className: "StudioPageTitle",
            children: QQ("studio:firstPartyGames")
          })
        }), (0, vQ.jsx)(jQ.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: QQ("general:game")
          }, {
            key: "ccu",
            header: QQ("studio:metricCcu")
          }],
          rows: qQ,
          getRowKey: QQ => QQ,
          renderRow: wQ => {
            var qQ;
            return (0, vQ.jsxs)("tr", {
              onClick: () => {
                WQ((0, bQ.m)((0, sQ.d)(wQ, !0)))
              },
              children: [(0, vQ.jsx)("td", {
                children: (0, vQ.jsx)(UQ.e, {
                  thumbnail: (0, vQ.jsx)(UQ.b, {
                    game: wQ
                  }),
                  name: (0, bQ.j)(wQ, QQ)
                })
              }), (0, vQ.jsx)("td", {
                children: (0, FQ.O)(null !== (qQ = (0, GQ.e)(wQ, XQ)) && void 0 !== qQ ? qQ : 0)
              })]
            })
          }
        })]
      })
    }

    function HQ() {
      const {
        t: QQ
      } = (0, PQ.C)(), WQ = (0, yQ.useNavigatePreserveSearch)(), {
        userContext: XQ,
        isUserContextUpdating: qQ
      } = (0, gQ.c)(), {
        isCreating: pQ,
        create: GQ
      } = (0, VQ.h)(), [HQ, aQ] = (0, wQ.useState)(null), [lQ, hQ] = (0, wQ.useState)(null), [iQ, cQ] = (0, wQ.useState)(!1);
      (0, wQ.useEffect)((() => {
        qQ || (cQ(!1), JQ.e.getPublishedGamePreviews(XQ, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((QQ => {
          aQ({
            ...QQ,
            results: (0, zQ.db)(QQ.results)
          })
        })).catch((QQ => {
          console.error("Failed to get owned published games", QQ), cQ(!0)
        })), JQ.e.getOwnedUnpublishedGames(XQ).then((QQ => {
          hQ(QQ)
        })).catch((QQ => {
          console.error("Failed to get owned unpublished games", QQ), cQ(!0)
        })))
      }), [qQ, XQ]);
      const AQ = null !== HQ && null !== lQ ? [...HQ.results, ...lQ] : [],
        RQ = !iQ && (null === HQ || null === lQ),
        EQ = !RQ && !iQ && 0 === AQ.length,
        CQ = !qQ && XQ.playerHasRank("developer");
      return (0, vQ.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, vQ.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, vQ.jsx)("h1", {
            className: "StudioPageTitle",
            children: QQ("studio:myGames")
          }), (0, vQ.jsxs)(IQ.s, {
            onClick: GQ,
            loading: pQ,
            children: [(0, vQ.jsx)(DQ.d, {
              name: "plus"
            }), " ", QQ("homePage:createCustomGame")]
          })]
        }), RQ && (0, vQ.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, vQ.jsx)(BQ.e, {})
        }), iQ && (0, vQ.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: QQ("studio:failedToLoadGames")
        }), EQ && (0, vQ.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: QQ("studio:noGamesYet")
        }), !RQ && !iQ && !EQ && (0, vQ.jsx)(jQ.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: QQ("general:game")
          }, {
            key: "status",
            header: QQ("general:status")
          }, {
            key: "ccu",
            header: QQ("studio:metricCcu")
          }, {
            key: "favourites",
            header: QQ("general:favourites")
          }],
          rows: AQ,
          getRowKey: QQ => QQ.schematicId,
          renderRow: XQ => (0, vQ.jsxs)("tr", {
            onClick: () => {
              var QQ;
              QQ = XQ.schematicId, WQ((0, bQ.m)((0, sQ.b)(QQ)))
            },
            children: [(0, vQ.jsx)("td", {
              children: (0, vQ.jsx)(UQ.e, {
                thumbnail: (0, vQ.jsx)(rQ.b, {
                  game: XQ
                }),
                name: XQ.name
              })
            }), (0, vQ.jsx)("td", {
              children: (0, vQ.jsx)("span", {
                className: TQ()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: XQ.gamePublished
                }),
                children: XQ.gamePublished ? QQ("general:published") : QQ("general:draft")
              })
            }), (0, vQ.jsx)("td", {
              children: (0, FQ.O)(XQ.ccu)
            }), (0, vQ.jsx)("td", {
              children: (0, FQ.O)(XQ.favourites)
            })]
          })
        }), CQ && (0, vQ.jsx)(dQ, {})]
      })
    }
  },
  5270: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      e: () => TQ
    });
    var wQ = XQ(1601),
      qQ = XQ(1145);

    function TQ(QQ) {
      let {
        thumbnail: WQ,
        name: XQ
      } = QQ;
      return (0, qQ.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, qQ.jsx)("div", {
          className: "StudioTableThumbnail",
          children: WQ
        }), (0, qQ.jsx)("span", {
          className: "StudioTableGameName",
          children: XQ
        })]
      })
    }

    function zQ(QQ) {
      let {
        game: WQ
      } = QQ;
      return (0, qQ.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, wQ.h)(WQ),
        alt: ""
      })
    }
  },
  5263: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(1145);

    function sQ(QQ) {
      let {
        columns: WQ,
        rows: XQ,
        getRowKey: qQ,
        renderRow: sQ,
        className: FQ
      } = QQ;
      return (0, zQ.jsxs)("table", {
        className: TQ()("Table", FQ),
        children: [(0, zQ.jsx)("thead", {
          children: (0, zQ.jsx)("tr", {
            children: WQ.map((QQ => (0, zQ.jsx)("th", {
              children: QQ.header
            }, QQ.key)))
          })
        }), (0, zQ.jsx)("tbody", {
          children: XQ.map((QQ => (0, zQ.jsx)(wQ.Fragment, {
            children: sQ(QQ)
          }, qQ(QQ))))
        })]
      })
    }
  },
  5250: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);