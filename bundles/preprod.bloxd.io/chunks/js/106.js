export const id = 106;
export const ids = [106];
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
  6908: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => kQ
    });
    XQ(5250);
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(382),
      sQ = XQ(1057),
      FQ = XQ(1257),
      PQ = XQ(1046),
      gQ = XQ(1226),
      JQ = XQ(1548),
      rQ = XQ(3801),
      IQ = XQ(1162),
      jQ = XQ(5256),
      BQ = XQ(2756),
      yQ = XQ(1507),
      VQ = XQ(4882),
      DQ = XQ(5263),
      pQ = XQ(1391),
      GQ = XQ(1567),
      UQ = XQ(4879),
      bQ = XQ(2627),
      vQ = XQ(5270),
      dQ = XQ(6809),
      HQ = XQ(1601),
      aQ = XQ(1145);
    const lQ = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      hQ = 25,
      iQ = "scope",
      cQ = "category",
      AQ = "customGames";
    const RQ = 7,
      EQ = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function CQ(QQ) {
      let {
        position: WQ
      } = QQ;
      const XQ = dQ.e[WQ];
      return (0, aQ.jsxs)("td", {
        className: TQ()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== XQ,
          [`StudioLeaderboardTopPosition${WQ}`]: void 0 !== XQ
        }),
        children: [void 0 !== XQ && (0, aQ.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: XQ,
          alt: ""
        }), WQ]
      })
    }

    function uQ(QQ) {
      let {
        discoverability: WQ
      } = QQ;
      const {
        playsPerDay: XQ,
        avgPlaytimeMinutes: qQ,
        retention: TQ
      } = null === WQ ? EQ : (0, rQ.n)(WQ);
      return (0, aQ.jsxs)(wQ.Fragment, {
        children: [(0, aQ.jsx)("td", {
          children: null !== XQ ? (0, rQ.c)(XQ) : "-"
        }), (0, aQ.jsx)("td", {
          children: null !== qQ ? (0, rQ.g)(qQ) : "-"
        }), (0, aQ.jsx)("td", {
          children: null !== TQ ? (0, rQ.j)(TQ) : "-"
        })]
      })
    }

    function LQ(QQ) {
      let {
        discoverability: WQ
      } = QQ;
      return (0, aQ.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === WQ || void 0 === WQ ? void 0 : WQ.engagementScore) ? (0, FQ.O)(Math.round(WQ.engagementScore)) : "-"
      })
    }

    function kQ() {
      var QQ, WQ;
      const {
        t: XQ
      } = (0, gQ.C)(), qQ = (0, GQ.useNavigatePreserveSearch)(), {
        userContext: TQ,
        isUserContextUpdating: dQ
      } = (0, IQ.c)(), EQ = (0, bQ.m)(), [kQ, fQ] = (0, UQ.p)(), SQ = (tQ = kQ.get(iQ), lQ.some((QQ => QQ.scope === tQ)) ? tQ : AQ);
      var tQ;
      const oQ = function(QQ) {
          return zQ.W.includes(QQ) ? QQ : null
        }(kQ.get(cQ)),
        eQ = (0, UQ.f)(kQ.get(UQ.e)),
        [nQ, xQ] = (0, wQ.useState)(null),
        [YQ, NQ] = (0, wQ.useState)(!1);

      function ZQ(QQ) {
        fQ((WQ => {
          (0, UQ.i)(WQ, iQ, QQ.scope === AQ ? null : QQ.scope), (0, UQ.i)(WQ, cQ, QQ.category), (0, UQ.m)(WQ, QQ.page)
        }))
      }
      const OQ = !dQ && TQ.playerHasRank("developer"),
        KQ = OQ && "allGames" === SQ,
        mQ = OQ && "dormantGames" === SQ;
      (0, wQ.useEffect)((() => {
        if (dQ) return;
        let QQ = !1;
        return xQ(null), NQ(!1), JQ.e.getPublishedGamePreviews(TQ, {
          searchQuery: null,
          pageNumber: eQ,
          pageSize: hQ,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== oQ ? [oQ] : [],
          upAndComing: !1,
          dormantGames: mQ,
          sortByEngagementScore: !0,
          firstPartyGameNames: KQ ? PQ.b : void 0,
          includeOwners: !0
        }).then((WQ => {
          QQ || xQ(WQ)
        })).catch((WQ => {
          console.error("Failed to load the studio leaderboard", WQ), QQ || NQ(!0)
        })), () => {
          QQ = !0
        }
      }), [dQ, KQ, mQ, oQ, eQ, TQ]);
      const MQ = null !== (QQ = null === nQ || void 0 === nQ ? void 0 : nQ.results) && void 0 !== QQ ? QQ : null,
        QW = function(QQ, WQ, XQ) {
          const [qQ, TQ] = (0, wQ.useState)({}), zQ = XQ ? (null !== QQ && void 0 !== QQ ? QQ : []).flatMap((QQ => "firstPartyGame" === QQ.type ? [(0, sQ.d)(QQ.gameNameWithVariation, !0)] : [])).join(",") : "", FQ = (0, wQ.useMemo)((() => "" === zQ ? [] : zQ.split(",")), [zQ]);
          return (0, wQ.useEffect)((() => {
            if (0 === FQ.length) return void TQ({});
            let QQ = !1;
            return JQ.e.getGamesByAnalyticsIds(WQ, FQ).then((WQ => {
              QQ || TQ(WQ)
            })).catch((QQ => {
              console.error("Failed to load first party discoverability for the studio leaderboard", QQ)
            })), () => {
              QQ = !0
            }
          }), [FQ, WQ]), qQ
        }(MQ, TQ, OQ),
        WW = null !== MQ ? function(QQ, WQ, XQ, wQ, qQ) {
          return QQ.map(((QQ, TQ) => {
            var zQ;
            const FQ = wQ + TQ + 1;
            if ("customGame" === QQ.type) {
              const WQ = QQ.preview;
              return {
                key: WQ.schematicId,
                position: FQ,
                thumbnail: (0, aQ.jsx)(jQ.b, {
                  game: WQ
                }),
                name: WQ.name,
                owner: QQ.owner,
                category: WQ.gameCategory,
                ccu: WQ.ccu,
                favourites: WQ.favourites,
                discoverability: (0, rQ.q)(WQ) ? WQ : null,
                url: (0, HQ.m)((0, sQ.b)(WQ.schematicId))
              }
            }
            const PQ = QQ.gameNameWithVariation,
              gQ = (0, sQ.d)(PQ, !0);
            return {
              key: PQ,
              position: FQ,
              thumbnail: (0, aQ.jsx)(vQ.b, {
                game: PQ
              }),
              name: (0, HQ.j)(PQ, qQ),
              owner: null,
              category: (0, HQ.d)(PQ),
              ccu: (0, bQ.e)(PQ, WQ),
              favourites: null,
              discoverability: null !== (zQ = XQ[gQ]) && void 0 !== zQ ? zQ : null,
              url: (0, HQ.m)(gQ)
            }
          }))
        }(MQ, EQ, QW, (eQ - 1) * hQ, XQ) : [],
        XW = !YQ && null === nQ,
        wW = !XW && !YQ && 0 === WW.length,
        qW = null !== (WQ = null === nQ || void 0 === nQ ? void 0 : nQ.totalPages) && void 0 !== WQ ? WQ : 1;
      return (0, aQ.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, aQ.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, aQ.jsx)("h1", {
            className: "StudioPageTitle",
            children: XQ("studio:leaderboard")
          })
        }), (0, aQ.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!mQ && (0, aQ.jsx)("div", {
            children: XQ("studio:leaderboardBanner")
          }), mQ && (0, aQ.jsx)("div", {
            children: XQ("studio:leaderboardDormantBanner")
          }), (0, aQ.jsx)("div", {
            children: XQ("studio:leaderboardMetricsBanner", {
              days: RQ
            })
          })]
        }), OQ && (0, aQ.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: lQ.map((QQ => (0, aQ.jsx)(yQ.T, {
            active: SQ === QQ.scope,
            onClick: () => {
              ZQ({
                scope: QQ.scope,
                category: oQ,
                page: 1
              })
            },
            children: XQ(QQ.title)
          }, QQ.scope)))
        }), (0, aQ.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, aQ.jsx)(yQ.T, {
            active: null === oQ,
            onClick: () => {
              ZQ({
                scope: SQ,
                category: null,
                page: 1
              })
            },
            children: XQ("studio:leaderboardAllCategories")
          }), zQ.W.map((QQ => (0, aQ.jsx)(yQ.T, {
            active: oQ === QQ,
            onClick: () => {
              ZQ({
                scope: SQ,
                category: QQ,
                page: 1
              })
            },
            children: (0, zQ.hb)(QQ)
          }, QQ)))]
        }), XW && (0, aQ.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, aQ.jsx)(pQ.e, {})
        }), YQ && (0, aQ.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: XQ("studio:failedToLoadLeaderboard")
        }), wW && (0, aQ.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: XQ("studio:leaderboardEmpty")
        }), !XW && !YQ && !wW && (0, aQ.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, aQ.jsx)(DQ.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: XQ("general:game")
            }, {
              key: "owner",
              header: XQ("general:owner")
            }, ...null === oQ ? [{
              key: "category",
              header: XQ("general:category")
            }] : [], ...OQ ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: XQ("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: XQ("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: XQ("studio:leaderboardSessionsPerPlayer")
            }, ...mQ ? [] : [{
              key: "ccu",
              header: XQ("studio:metricCcu")
            }], {
              key: "favourites",
              header: XQ("general:favourites")
            }],
            rows: WW,
            getRowKey: QQ => QQ.key,
            renderRow: QQ => (0, aQ.jsxs)("tr", {
              onClick: () => {
                qQ(QQ.url)
              },
              children: [(0, aQ.jsx)(CQ, {
                position: QQ.position
              }), (0, aQ.jsx)("td", {
                children: (0, aQ.jsx)(vQ.e, {
                  thumbnail: QQ.thumbnail,
                  name: QQ.name
                })
              }), (0, aQ.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === QQ.owner && "-", null !== QQ.owner && (0, aQ.jsx)(BQ.c, {
                  playerSocialPreview: QQ.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === oQ && (0, aQ.jsx)("td", {
                children: (0, zQ.hb)(QQ.category)
              }), OQ && (0, aQ.jsx)(LQ, {
                discoverability: QQ.discoverability
              }), (0, aQ.jsx)(uQ, {
                discoverability: QQ.discoverability
              }), !mQ && (0, aQ.jsx)("td", {
                children: null !== QQ.ccu ? (0, FQ.O)(QQ.ccu) : "-"
              }), (0, aQ.jsx)("td", {
                children: null !== QQ.favourites ? (0, FQ.O)(QQ.favourites) : "-"
              })]
            })
          })
        }), !YQ && (0, aQ.jsx)(VQ.b, {
          className: "AnimFadeIn",
          page: eQ,
          totalPages: qW,
          onSetPage: QQ => {
            ZQ({
              scope: SQ,
              category: oQ,
              page: QQ
            })
          }
        })]
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
  6809: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    const wQ = {
      1: XQ(6814),
      2: XQ(6823),
      3: XQ(6827)
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
  5250: () => {},
  6814: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6823: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6827: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);