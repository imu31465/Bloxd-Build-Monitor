export const id = 101;
export const ids = [101];
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
  6341: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => jQ
    });
    wQ(4735);
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(307),
      kQ = wQ(1047),
      vQ = wQ(1237),
      mQ = wQ(1030),
      uQ = wQ(1207),
      HQ = wQ(1489),
      bQ = wQ(3426),
      YQ = wQ(1140),
      xQ = wQ(4737),
      AQ = wQ(2489),
      tQ = wQ(1451),
      eQ = wQ(4415),
      MQ = wQ(4746),
      GQ = wQ(1348),
      pQ = wQ(1503),
      cQ = wQ(4409),
      CQ = wQ(2444),
      SQ = wQ(4754),
      iQ = wQ(6257),
      WQ = wQ(1532),
      RQ = wQ(1107);
    const OQ = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      sQ = 25,
      rQ = "scope",
      IQ = "category",
      UQ = "customGames";
    const NQ = 7,
      TQ = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function KQ(QQ) {
      let {
        position: FQ
      } = QQ;
      const wQ = iQ.b[FQ];
      return (0, RQ.jsxs)("td", {
        className: oQ()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== wQ,
          [`StudioLeaderboardTopPosition${FQ}`]: void 0 !== wQ
        }),
        children: [void 0 !== wQ && (0, RQ.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: wQ,
          alt: ""
        }), FQ]
      })
    }

    function zQ(QQ) {
      let {
        discoverability: FQ
      } = QQ;
      const {
        playsPerDay: wQ,
        avgPlaytimeMinutes: qQ,
        retention: oQ
      } = null === FQ ? TQ : (0, bQ.k)(FQ);
      return (0, RQ.jsxs)(LQ.Fragment, {
        children: [(0, RQ.jsx)("td", {
          children: null !== wQ ? (0, bQ.c)(wQ) : "-"
        }), (0, RQ.jsx)("td", {
          children: null !== qQ ? (0, bQ.g)(qQ) : "-"
        }), (0, RQ.jsx)("td", {
          children: null !== oQ ? (0, bQ.h)(oQ) : "-"
        })]
      })
    }

    function lQ(QQ) {
      let {
        discoverability: FQ
      } = QQ;
      return (0, RQ.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === FQ || void 0 === FQ ? void 0 : FQ.engagementScore) ? (0, vQ.W)(Math.round(FQ.engagementScore)) : "-"
      })
    }

    function jQ() {
      var QQ, FQ;
      const {
        t: wQ
      } = (0, uQ.y)(), qQ = (0, pQ.useNavigatePreserveSearch)(), {
        userContext: oQ,
        isUserContextUpdating: iQ
      } = (0, YQ.e)(), TQ = (0, CQ.m)(), [jQ, aQ] = (0, cQ.k)(), XQ = (fQ = jQ.get(rQ), OQ.some((QQ => QQ.scope === fQ)) ? fQ : UQ);
      var fQ;
      const VQ = function(QQ) {
          return DQ.R.includes(QQ) ? QQ : null
        }(jQ.get(IQ)),
        hQ = (0, cQ.d)(jQ.get(cQ.b)),
        [JQ, EQ] = (0, LQ.useState)(null),
        [nQ, gQ] = (0, LQ.useState)(!1);

      function PQ(QQ) {
        aQ((FQ => {
          (0, cQ.g)(FQ, rQ, QQ.scope === UQ ? null : QQ.scope), (0, cQ.g)(FQ, IQ, QQ.category), (0, cQ.i)(FQ, QQ.page)
        }))
      }
      const ZQ = !iQ && oQ.playerHasRank("developer"),
        yQ = ZQ && "allGames" === XQ,
        BQ = ZQ && "dormantGames" === XQ;
      (0, LQ.useEffect)((() => {
        if (iQ) return;
        let QQ = !1;
        return EQ(null), gQ(!1), HQ.b.getPublishedGamePreviews(oQ, {
          searchQuery: null,
          pageNumber: hQ,
          pageSize: sQ,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== VQ ? [VQ] : [],
          upAndComing: !1,
          dormantGames: BQ,
          sortByEngagementScore: !0,
          firstPartyGameNames: yQ ? mQ.d : void 0,
          includeOwners: !0
        }).then((FQ => {
          QQ || EQ(FQ)
        })).catch((FQ => {
          console.error("Failed to load the studio leaderboard", FQ), QQ || gQ(!0)
        })), () => {
          QQ = !0
        }
      }), [iQ, yQ, BQ, VQ, hQ, oQ]);
      const dQ = null !== (QQ = null === JQ || void 0 === JQ ? void 0 : JQ.results) && void 0 !== QQ ? QQ : null,
        QF = function(QQ, FQ, wQ) {
          const [qQ, oQ] = (0, LQ.useState)({}), DQ = wQ ? (null !== QQ && void 0 !== QQ ? QQ : []).flatMap((QQ => "firstPartyGame" === QQ.type ? [(0, kQ.h)(QQ.gameNameWithVariation, !0)] : [])).join(",") : "", vQ = (0, LQ.useMemo)((() => "" === DQ ? [] : DQ.split(",")), [DQ]);
          return (0, LQ.useEffect)((() => {
            if (0 === vQ.length) return void oQ({});
            let QQ = !1;
            return HQ.b.getGamesByAnalyticsIds(FQ, vQ).then((FQ => {
              QQ || oQ(FQ)
            })).catch((QQ => {
              console.error("Failed to load first party discoverability for the studio leaderboard", QQ)
            })), () => {
              QQ = !0
            }
          }), [vQ, FQ]), qQ
        }(dQ, oQ, ZQ),
        FF = null !== dQ ? function(QQ, FQ, wQ, LQ, qQ) {
          return QQ.map(((QQ, oQ) => {
            var DQ;
            const vQ = LQ + oQ + 1;
            if ("customGame" === QQ.type) {
              const FQ = QQ.preview;
              return {
                key: FQ.schematicId,
                position: vQ,
                thumbnail: (0, RQ.jsx)(xQ.d, {
                  game: FQ
                }),
                name: FQ.name,
                owner: QQ.owner,
                category: FQ.gameCategory,
                ccu: FQ.ccu,
                favourites: FQ.favourites,
                discoverability: (0, bQ.n)(FQ) ? FQ : null,
                url: (0, WQ.r)((0, kQ.e)(FQ.schematicId))
              }
            }
            const mQ = QQ.gameNameWithVariation,
              uQ = (0, kQ.h)(mQ, !0);
            return {
              key: mQ,
              position: vQ,
              thumbnail: (0, RQ.jsx)(SQ.b, {
                game: mQ
              }),
              name: (0, WQ.n)(mQ, qQ),
              owner: null,
              category: (0, WQ.e)(mQ),
              ccu: (0, CQ.b)(mQ, FQ),
              favourites: null,
              discoverability: null !== (DQ = wQ[uQ]) && void 0 !== DQ ? DQ : null,
              url: (0, WQ.r)(uQ)
            }
          }))
        }(dQ, TQ, QF, (hQ - 1) * sQ, wQ) : [],
        wF = !nQ && null === JQ,
        LF = !wF && !nQ && 0 === FF.length,
        qF = null !== (FQ = null === JQ || void 0 === JQ ? void 0 : JQ.totalPages) && void 0 !== FQ ? FQ : 1;
      return (0, RQ.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, RQ.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, RQ.jsx)("h1", {
            className: "StudioPageTitle",
            children: wQ("studio:leaderboard")
          })
        }), (0, RQ.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!BQ && (0, RQ.jsx)("div", {
            children: wQ("studio:leaderboardBanner")
          }), BQ && (0, RQ.jsx)("div", {
            children: wQ("studio:leaderboardDormantBanner")
          }), (0, RQ.jsx)("div", {
            children: wQ("studio:leaderboardMetricsBanner", {
              days: NQ
            })
          })]
        }), ZQ && (0, RQ.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: OQ.map((QQ => (0, RQ.jsx)(tQ.L, {
            active: XQ === QQ.scope,
            onClick: () => {
              PQ({
                scope: QQ.scope,
                category: VQ,
                page: 1
              })
            },
            children: wQ(QQ.title)
          }, QQ.scope)))
        }), (0, RQ.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, RQ.jsx)(tQ.L, {
            active: null === VQ,
            onClick: () => {
              PQ({
                scope: XQ,
                category: null,
                page: 1
              })
            },
            children: wQ("studio:leaderboardAllCategories")
          }), DQ.R.map((QQ => (0, RQ.jsx)(tQ.L, {
            active: VQ === QQ,
            onClick: () => {
              PQ({
                scope: XQ,
                category: QQ,
                page: 1
              })
            },
            children: (0, DQ._)(QQ)
          }, QQ)))]
        }), wF && (0, RQ.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, RQ.jsx)(GQ.c, {})
        }), nQ && (0, RQ.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: wQ("studio:failedToLoadLeaderboard")
        }), LF && (0, RQ.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: wQ("studio:leaderboardEmpty")
        }), !wF && !nQ && !LF && (0, RQ.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, RQ.jsx)(MQ.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: wQ("general:game")
            }, {
              key: "owner",
              header: wQ("general:owner")
            }, ...null === VQ ? [{
              key: "category",
              header: wQ("general:category")
            }] : [], ...ZQ ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: wQ("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: wQ("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: wQ("studio:leaderboardSessionsPerPlayer")
            }, ...BQ ? [] : [{
              key: "ccu",
              header: wQ("studio:metricCcu")
            }], {
              key: "favourites",
              header: wQ("general:favourites")
            }],
            rows: FF,
            getRowKey: QQ => QQ.key,
            renderRow: QQ => (0, RQ.jsxs)("tr", {
              onClick: () => {
                qQ(QQ.url)
              },
              children: [(0, RQ.jsx)(KQ, {
                position: QQ.position
              }), (0, RQ.jsx)("td", {
                children: (0, RQ.jsx)(SQ.f, {
                  thumbnail: QQ.thumbnail,
                  name: QQ.name
                })
              }), (0, RQ.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === QQ.owner && "-", null !== QQ.owner && (0, RQ.jsx)(AQ.e, {
                  playerSocialPreview: QQ.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === VQ && (0, RQ.jsx)("td", {
                children: (0, DQ._)(QQ.category)
              }), ZQ && (0, RQ.jsx)(lQ, {
                discoverability: QQ.discoverability
              }), (0, RQ.jsx)(zQ, {
                discoverability: QQ.discoverability
              }), !BQ && (0, RQ.jsx)("td", {
                children: null !== QQ.ccu ? (0, vQ.W)(QQ.ccu) : "-"
              }), (0, RQ.jsx)("td", {
                children: null !== QQ.favourites ? (0, vQ.W)(QQ.favourites) : "-"
              })]
            })
          })
        }), !nQ && (0, RQ.jsx)(eQ.e, {
          className: "AnimFadeIn",
          page: hQ,
          totalPages: qF,
          onSetPage: QQ => {
            PQ({
              scope: XQ,
              category: VQ,
              page: QQ
            })
          }
        })]
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
  6257: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ
    });
    const LQ = {
      1: wQ(6263),
      2: wQ(6269),
      3: wQ(6273)
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
  4735: () => {},
  6263: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6269: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6273: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);