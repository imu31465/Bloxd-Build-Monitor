export const id = 101;
export const ids = [101];
export const modules = {
  4861: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => CT
    });
    var lT = cT(1046),
      MT = cT.n(lT),
      KT = cT(1061),
      OT = cT(1348),
      yT = cT(3449),
      fT = cT(159),
      xT = cT(3491),
      IT = cT(3482),
      AT = cT(1099);

    function CT(TT) {
      let {
        game: kT
      } = TT;
      const cT = (0, fT.m)() ? "large" : "small",
        lT = (0, xT.i)(kT, cT),
        CT = (0, yT.f)(lT),
        jT = void 0 !== CT.blurhash;
      return (0, AT.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [CT.isLoading && !jT && (0, AT.jsx)(OT.d, {
          loaderType: "Secondary"
        }), !CT.failed && (null !== CT.src || jT) && (0, AT.jsx)("div", {
          className: MT()("SchematicImage", IT.g, {
            SchematicImageFadeIn: CT.fadeIn && !jT
          }),
          style: (0, IT.f)(CT),
          children: (0, AT.jsx)(IT.d, {
            image: CT
          })
        }), CT.failed && (0, AT.jsx)("div", {
          className: "SchematicImageError",
          children: (0, AT.jsx)(KT.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6524: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => uT
    });
    cT(4855);
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(328),
      yT = cT(1026),
      fT = cT(1226),
      xT = cT(1009),
      IT = cT(1195),
      AT = cT(1518),
      CT = cT(3507),
      jT = cT(1130),
      vT = cT(4861),
      tT = cT(2600),
      hT = cT(1470),
      NT = cT(4545),
      QT = cT(4864),
      ST = cT(1348),
      DT = cT(1530),
      aT = cT(4543),
      FT = cT(2563),
      rT = cT(4867),
      PT = cT(6404),
      wT = cT(1554),
      mT = cT(1099);
    const bT = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      zT = 25,
      JT = "scope",
      oT = "category",
      HT = "customGames";
    const eT = 7,
      GT = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function VT(TT) {
      let {
        position: kT
      } = TT;
      const cT = PT.d[kT];
      return (0, mT.jsxs)("td", {
        className: KT()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== cT,
          [`StudioLeaderboardTopPosition${kT}`]: void 0 !== cT
        }),
        children: [void 0 !== cT && (0, mT.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: cT,
          alt: ""
        }), kT]
      })
    }

    function ET(TT) {
      let {
        discoverability: kT
      } = TT;
      const {
        playsPerDay: cT,
        avgPlaytimeMinutes: MT,
        retention: KT
      } = null === kT ? GT : (0, CT.g)(kT);
      return (0, mT.jsxs)(lT.Fragment, {
        children: [(0, mT.jsx)("td", {
          children: null !== cT ? (0, CT.b)(cT) : "-"
        }), (0, mT.jsx)("td", {
          children: null !== MT ? (0, CT.c)(MT) : "-"
        }), (0, mT.jsx)("td", {
          children: null !== KT ? (0, CT.f)(KT) : "-"
        })]
      })
    }

    function ZT(TT) {
      let {
        discoverability: kT
      } = TT;
      return (0, mT.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === kT || void 0 === kT ? void 0 : kT.engagementScore) ? (0, fT.P)(Math.round(kT.engagementScore)) : "-"
      })
    }

    function uT() {
      var TT, kT;
      const {
        t: cT
      } = (0, IT.B)(), MT = (0, DT.useNavigatePreserveSearch)(), {
        userContext: KT,
        isUserContextUpdating: PT
      } = (0, jT.b)(), GT = (0, FT.o)(), [uT, XT] = (0, aT.o)(), dT = (LT = uT.get(JT), bT.some((TT => TT.scope === LT)) ? LT : HT);
      var LT;
      const RT = function(TT) {
          return OT.O.includes(TT) ? TT : null
        }(uT.get(oT)),
        gT = (0, aT.f)(uT.get(aT.d)),
        [UT, YT] = (0, lT.useState)(null),
        [BT, WT] = (0, lT.useState)(!1);

      function nT(TT) {
        XT((kT => {
          (0, aT.g)(kT, JT, TT.scope === HT ? null : TT.scope), (0, aT.g)(kT, oT, TT.category), (0, aT.k)(kT, TT.page)
        }))
      }
      const pT = !PT && KT.playerHasRank("developer"),
        iT = pT && "allGames" === dT,
        qT = pT && "dormantGames" === dT;
      (0, lT.useEffect)((() => {
        if (PT) return;
        let TT = !1;
        return YT(null), WT(!1), AT.d.getPublishedGamePreviews(KT, {
          searchQuery: null,
          pageNumber: gT,
          pageSize: zT,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== RT ? [RT] : [],
          upAndComing: !1,
          dormantGames: qT,
          sortByEngagementScore: !0,
          firstPartyGameNames: iT ? xT.b : void 0,
          includeOwners: !0
        }).then((kT => {
          TT || YT(kT)
        })).catch((kT => {
          console.error("Failed to load the studio leaderboard", kT), TT || WT(!0)
        })), () => {
          TT = !0
        }
      }), [PT, iT, qT, RT, gT, KT]);
      const sT = null !== (TT = null === UT || void 0 === UT ? void 0 : UT.results) && void 0 !== TT ? TT : null,
        Tk = function(TT, kT, cT) {
          const [MT, KT] = (0, lT.useState)({}), OT = cT ? (null !== TT && void 0 !== TT ? TT : []).flatMap((TT => "firstPartyGame" === TT.type ? [(0, yT.h)(TT.gameNameWithVariation, !0)] : [])).join(",") : "", fT = (0, lT.useMemo)((() => "" === OT ? [] : OT.split(",")), [OT]);
          return (0, lT.useEffect)((() => {
            if (0 === fT.length) return void KT({});
            let TT = !1;
            return AT.d.getGamesByAnalyticsIds(kT, fT).then((kT => {
              TT || KT(kT)
            })).catch((TT => {
              console.error("Failed to load first party discoverability for the studio leaderboard", TT)
            })), () => {
              TT = !0
            }
          }), [fT, kT]), MT
        }(sT, KT, pT),
        kk = null !== sT ? function(TT, kT, cT, lT, MT) {
          return TT.map(((TT, KT) => {
            var OT;
            const fT = lT + KT + 1;
            if ("customGame" === TT.type) {
              const kT = TT.preview;
              return {
                key: kT.schematicId,
                position: fT,
                thumbnail: (0, mT.jsx)(vT.e, {
                  game: kT
                }),
                name: kT.name,
                owner: TT.owner,
                category: kT.gameCategory,
                ccu: kT.ccu,
                favourites: kT.favourites,
                discoverability: (0, CT.k)(kT) ? kT : null,
                url: (0, wT.o)((0, yT.e)(kT.schematicId))
              }
            }
            const xT = TT.gameNameWithVariation,
              IT = (0, yT.h)(xT, !0);
            return {
              key: xT,
              position: fT,
              thumbnail: (0, mT.jsx)(rT.b, {
                game: xT
              }),
              name: (0, wT.m)(xT, MT),
              owner: null,
              category: (0, wT.c)(xT),
              ccu: (0, FT.e)(xT, kT),
              favourites: null,
              discoverability: null !== (OT = cT[IT]) && void 0 !== OT ? OT : null,
              url: (0, wT.o)(IT)
            }
          }))
        }(sT, GT, Tk, (gT - 1) * zT, cT) : [],
        ck = !BT && null === UT,
        lk = !ck && !BT && 0 === kk.length,
        Mk = null !== (kT = null === UT || void 0 === UT ? void 0 : UT.totalPages) && void 0 !== kT ? kT : 1;
      return (0, mT.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, mT.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, mT.jsx)("h1", {
            className: "StudioPageTitle",
            children: cT("studio:leaderboard")
          })
        }), (0, mT.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!qT && (0, mT.jsx)("div", {
            children: cT("studio:leaderboardBanner")
          }), qT && (0, mT.jsx)("div", {
            children: cT("studio:leaderboardDormantBanner")
          }), (0, mT.jsx)("div", {
            children: cT("studio:leaderboardMetricsBanner", {
              days: eT
            })
          })]
        }), pT && (0, mT.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: bT.map((TT => (0, mT.jsx)(hT.P, {
            active: dT === TT.scope,
            onClick: () => {
              nT({
                scope: TT.scope,
                category: RT,
                page: 1
              })
            },
            children: cT(TT.title)
          }, TT.scope)))
        }), (0, mT.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, mT.jsx)(hT.P, {
            active: null === RT,
            onClick: () => {
              nT({
                scope: dT,
                category: null,
                page: 1
              })
            },
            children: cT("studio:leaderboardAllCategories")
          }), OT.O.map((TT => (0, mT.jsx)(hT.P, {
            active: RT === TT,
            onClick: () => {
              nT({
                scope: dT,
                category: TT,
                page: 1
              })
            },
            children: (0, OT.W)(TT)
          }, TT)))]
        }), ck && (0, mT.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, mT.jsx)(ST.d, {})
        }), BT && (0, mT.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: cT("studio:failedToLoadLeaderboard")
        }), lk && (0, mT.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: cT("studio:leaderboardEmpty")
        }), !ck && !BT && !lk && (0, mT.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, mT.jsx)(QT.d, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: cT("general:game")
            }, {
              key: "owner",
              header: cT("general:owner")
            }, ...null === RT ? [{
              key: "category",
              header: cT("general:category")
            }] : [], ...pT ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: cT("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: cT("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: cT("studio:leaderboardSessionsPerPlayer")
            }, ...qT ? [] : [{
              key: "ccu",
              header: cT("studio:metricCcu")
            }], {
              key: "favourites",
              header: cT("general:favourites")
            }],
            rows: kk,
            getRowKey: TT => TT.key,
            renderRow: TT => (0, mT.jsxs)("tr", {
              onClick: () => {
                MT(TT.url)
              },
              children: [(0, mT.jsx)(VT, {
                position: TT.position
              }), (0, mT.jsx)("td", {
                children: (0, mT.jsx)(rT.e, {
                  thumbnail: TT.thumbnail,
                  name: TT.name
                })
              }), (0, mT.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === TT.owner && "-", null !== TT.owner && (0, mT.jsx)(tT.h, {
                  playerSocialPreview: TT.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === RT && (0, mT.jsx)("td", {
                children: (0, OT.W)(TT.category)
              }), pT && (0, mT.jsx)(ZT, {
                discoverability: TT.discoverability
              }), (0, mT.jsx)(ET, {
                discoverability: TT.discoverability
              }), !qT && (0, mT.jsx)("td", {
                children: null !== TT.ccu ? (0, fT.P)(TT.ccu) : "-"
              }), (0, mT.jsx)("td", {
                children: null !== TT.favourites ? (0, fT.P)(TT.favourites) : "-"
              })]
            })
          })
        }), !BT && (0, mT.jsx)(NT.b, {
          className: "AnimFadeIn",
          page: gT,
          totalPages: Mk,
          onSetPage: TT => {
            nT({
              scope: dT,
              category: RT,
              page: TT
            })
          }
        })]
      })
    }
  },
  4867: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      e: () => KT
    });
    var lT = cT(1554),
      MT = cT(1099);

    function KT(TT) {
      let {
        thumbnail: kT,
        name: cT
      } = TT;
      return (0, MT.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, MT.jsx)("div", {
          className: "StudioTableThumbnail",
          children: kT
        }), (0, MT.jsx)("span", {
          className: "StudioTableGameName",
          children: cT
        })]
      })
    }

    function OT(TT) {
      let {
        game: kT
      } = TT;
      return (0, MT.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, lT.k)(kT),
        alt: ""
      })
    }
  },
  6404: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT
    });
    const lT = {
      1: cT(6410),
      2: cT(6419),
      3: cT(6428)
    }
  },
  4864: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1099);

    function yT(TT) {
      let {
        columns: kT,
        rows: cT,
        getRowKey: MT,
        renderRow: yT,
        className: fT
      } = TT;
      return (0, OT.jsxs)("table", {
        className: KT()("Table", fT),
        children: [(0, OT.jsx)("thead", {
          children: (0, OT.jsx)("tr", {
            children: kT.map((TT => (0, OT.jsx)("th", {
              children: TT.header
            }, TT.key)))
          })
        }), (0, OT.jsx)("tbody", {
          children: cT.map((TT => (0, OT.jsx)(lT.Fragment, {
            children: yT(TT)
          }, MT(TT))))
        })]
      })
    }
  },
  4855: () => {},
  6410: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6419: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6428: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);