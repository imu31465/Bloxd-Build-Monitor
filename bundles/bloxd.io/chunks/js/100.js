export const id = 100;
export const ids = [100];
export const modules = {
  4737: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => bQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(1079),
      DQ = wQ(1348),
      kQ = wQ(3380),
      vQ = wQ(134),
      mQ = wQ(3415),
      uQ = wQ(3399),
      HQ = wQ(1107);

    function bQ(QQ) {
      let {
        game: FQ
      } = QQ;
      const wQ = (0, vQ.l)() ? "large" : "small",
        LQ = (0, mQ.e)(FQ, wQ),
        bQ = (0, kQ.f)(LQ),
        YQ = void 0 !== bQ.blurhash;
      return (0, HQ.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [bQ.isLoading && !YQ && (0, HQ.jsx)(DQ.c, {
          loaderType: "Secondary"
        }), !bQ.failed && (null !== bQ.src || YQ) && (0, HQ.jsx)("div", {
          className: qQ()("SchematicImage", uQ.j, {
            SchematicImageFadeIn: bQ.fadeIn && !YQ
          }),
          style: (0, uQ.f)(bQ),
          children: (0, HQ.jsx)(uQ.b, {
            image: bQ
          })
        }), bQ.failed && (0, HQ.jsx)("div", {
          className: "SchematicImageError",
          children: (0, HQ.jsx)(oQ.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4731: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => WQ
    });
    wQ(4735);
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(307),
      kQ = wQ(1047),
      vQ = wQ(1237),
      mQ = wQ(1207),
      uQ = wQ(1140),
      HQ = wQ(1489),
      bQ = wQ(4737),
      YQ = wQ(1451),
      xQ = wQ(4746),
      AQ = wQ(1348),
      tQ = wQ(1503),
      eQ = wQ(4478),
      MQ = wQ(1079),
      GQ = wQ(1030),
      pQ = wQ(2444),
      cQ = wQ(4754),
      CQ = wQ(1532),
      SQ = wQ(1107);

    function iQ() {
      const {
        t: QQ
      } = (0, mQ.y)(), FQ = (0, tQ.useNavigatePreserveSearch)(), wQ = (0, pQ.m)(), qQ = (0, LQ.useMemo)((() => [...GQ.d].sort(((FQ, LQ) => {
        var qQ, oQ;
        const DQ = (null !== (qQ = (0, pQ.b)(LQ, wQ)) && void 0 !== qQ ? qQ : 0) - (null !== (oQ = (0, pQ.b)(FQ, wQ)) && void 0 !== oQ ? oQ : 0);
        return 0 !== DQ ? DQ : (0, CQ.n)(FQ, QQ).localeCompare((0, CQ.n)(LQ, QQ))
      }))), [wQ, QQ]);
      return (0, SQ.jsxs)(SQ.Fragment, {
        children: [(0, SQ.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, SQ.jsx)("h1", {
            className: "StudioPageTitle",
            children: QQ("studio:firstPartyGames")
          })
        }), (0, SQ.jsx)(xQ.e, {
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
          renderRow: LQ => {
            var qQ;
            return (0, SQ.jsxs)("tr", {
              onClick: () => {
                FQ((0, CQ.r)((0, kQ.h)(LQ, !0)))
              },
              children: [(0, SQ.jsx)("td", {
                children: (0, SQ.jsx)(cQ.f, {
                  thumbnail: (0, SQ.jsx)(cQ.b, {
                    game: LQ
                  }),
                  name: (0, CQ.n)(LQ, QQ)
                })
              }), (0, SQ.jsx)("td", {
                children: (0, vQ.W)(null !== (qQ = (0, pQ.b)(LQ, wQ)) && void 0 !== qQ ? qQ : 0)
              })]
            })
          }
        })]
      })
    }

    function WQ() {
      const {
        t: QQ
      } = (0, mQ.y)(), FQ = (0, tQ.useNavigatePreserveSearch)(), {
        userContext: wQ,
        isUserContextUpdating: qQ
      } = (0, uQ.e)(), {
        isCreating: GQ,
        create: pQ
      } = (0, eQ.e)(), [WQ, RQ] = (0, LQ.useState)(null), [OQ, sQ] = (0, LQ.useState)(null), [rQ, IQ] = (0, LQ.useState)(!1);
      (0, LQ.useEffect)((() => {
        qQ || (IQ(!1), HQ.b.getPublishedGamePreviews(wQ, {
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
          RQ({
            ...QQ,
            results: (0, DQ.X)(QQ.results)
          })
        })).catch((QQ => {
          console.error("Failed to get owned published games", QQ), IQ(!0)
        })), HQ.b.getOwnedUnpublishedGames(wQ).then((QQ => {
          sQ(QQ)
        })).catch((QQ => {
          console.error("Failed to get owned unpublished games", QQ), IQ(!0)
        })))
      }), [qQ, wQ]);
      const UQ = null !== WQ && null !== OQ ? [...WQ.results, ...OQ] : [],
        NQ = !rQ && (null === WQ || null === OQ),
        TQ = !NQ && !rQ && 0 === UQ.length,
        KQ = !qQ && wQ.playerHasRank("developer");
      return (0, SQ.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, SQ.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, SQ.jsx)("h1", {
            className: "StudioPageTitle",
            children: QQ("studio:myGames")
          }), (0, SQ.jsxs)(YQ.m, {
            onClick: pQ,
            loading: GQ,
            children: [(0, SQ.jsx)(MQ.c, {
              name: "plus"
            }), " ", QQ("homePage:createCustomGame")]
          })]
        }), NQ && (0, SQ.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, SQ.jsx)(AQ.c, {})
        }), rQ && (0, SQ.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: QQ("studio:failedToLoadGames")
        }), TQ && (0, SQ.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: QQ("studio:noGamesYet")
        }), !NQ && !rQ && !TQ && (0, SQ.jsx)(xQ.e, {
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
          rows: UQ,
          getRowKey: QQ => QQ.schematicId,
          renderRow: wQ => (0, SQ.jsxs)("tr", {
            onClick: () => {
              var QQ;
              QQ = wQ.schematicId, FQ((0, CQ.r)((0, kQ.e)(QQ)))
            },
            children: [(0, SQ.jsx)("td", {
              children: (0, SQ.jsx)(cQ.f, {
                thumbnail: (0, SQ.jsx)(bQ.d, {
                  game: wQ
                }),
                name: wQ.name
              })
            }), (0, SQ.jsx)("td", {
              children: (0, SQ.jsx)("span", {
                className: oQ()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: wQ.gamePublished
                }),
                children: wQ.gamePublished ? QQ("general:published") : QQ("general:draft")
              })
            }), (0, SQ.jsx)("td", {
              children: (0, vQ.W)(wQ.ccu)
            }), (0, SQ.jsx)("td", {
              children: (0, vQ.W)(wQ.favourites)
            })]
          })
        }), KQ && (0, SQ.jsx)(iQ, {})]
      })
    }
  },
  4754: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      f: () => oQ
    });
    var LQ = wQ(1532),
      qQ = wQ(1107);

    function oQ(QQ) {
      let {
        thumbnail: FQ,
        name: wQ
      } = QQ;
      return (0, qQ.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, qQ.jsx)("div", {
          className: "StudioTableThumbnail",
          children: FQ
        }), (0, qQ.jsx)("span", {
          className: "StudioTableGameName",
          children: wQ
        })]
      })
    }

    function DQ(QQ) {
      let {
        game: FQ
      } = QQ;
      return (0, qQ.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, LQ.l)(FQ),
        alt: ""
      })
    }
  },
  4746: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(1107);

    function kQ(QQ) {
      let {
        columns: FQ,
        rows: wQ,
        getRowKey: qQ,
        renderRow: kQ,
        className: vQ
      } = QQ;
      return (0, DQ.jsxs)("table", {
        className: oQ()("Table", vQ),
        children: [(0, DQ.jsx)("thead", {
          children: (0, DQ.jsx)("tr", {
            children: FQ.map((QQ => (0, DQ.jsx)("th", {
              children: QQ.header
            }, QQ.key)))
          })
        }), (0, DQ.jsx)("tbody", {
          children: wQ.map((QQ => (0, DQ.jsx)(LQ.Fragment, {
            children: kQ(QQ)
          }, qQ(QQ))))
        })]
      })
    }
  },
  4735: () => {}
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);