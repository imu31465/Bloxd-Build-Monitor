export const id = 115;
export const ids = [115];
export const modules = {
  5424: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => NU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(1390),
      AU = zU(1384),
      FU = zU(3887),
      oU = zU(142),
      DU = zU(3929),
      EU = zU(3914),
      YU = zU(1305);

    function NU(UU) {
      let {
        game: XU
      } = UU;
      const zU = (0, oU.is99NightsCrazyGamesBundle)() ? "large" : "small",
        cU = (0, DU.c)(XU, zU),
        NU = (0, FU.f)(cU),
        IU = void 0 !== NU.blurhash;
      return (0, YU.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [NU.isLoading && !IU && (0, YU.jsx)(AU.b, {
          loaderType: "Secondary"
        }), !NU.failed && (null !== NU.src || IU) && (0, YU.jsx)("div", {
          className: yU()("SchematicImage", EU.i, {
            SchematicImageFadeIn: NU.fadeIn && !IU
          }),
          style: (0, EU.h)(NU),
          children: (0, YU.jsx)(EU.d, {
            image: NU
          })
        }), NU.failed && (0, YU.jsx)("div", {
          className: "SchematicImageError",
          children: (0, YU.jsx)(QU.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  7115: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => HU
    });
    zU(5415);
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(320),
      FU = zU(1086),
      oU = zU(1236),
      DU = zU(1077),
      EU = zU(1193),
      YU = zU(1545),
      NU = zU(3945),
      IU = zU(1129),
      pU = zU(5424),
      aU = zU(2841),
      tU = zU(1494),
      gU = zU(5004),
      kU = zU(5433),
      GU = zU(1384),
      BU = zU(1568),
      ZU = zU(4997),
      RU = zU(2702),
      PU = zU(5438),
      WU = zU(7e3),
      dU = zU(1592),
      LU = zU(1305);
    const eU = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      CU = 25,
      wU = "scope",
      qU = "category",
      OU = "customGames";
    const SU = 7,
      rU = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function uU(UU) {
      let {
        position: XU
      } = UU;
      const zU = WU.c[XU];
      return (0, LU.jsxs)("td", {
        className: QU()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== zU,
          [`StudioLeaderboardTopPosition${XU}`]: void 0 !== zU
        }),
        children: [void 0 !== zU && (0, LU.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: zU,
          alt: ""
        }), XU]
      })
    }

    function fU(UU) {
      let {
        discoverability: XU
      } = UU;
      const {
        playsPerDay: zU,
        avgPlaytimeMinutes: yU,
        retention: QU
      } = null === XU ? rU : (0, NU.k)(XU);
      return (0, LU.jsxs)(cU.Fragment, {
        children: [(0, LU.jsx)("td", {
          children: null !== zU ? (0, NU.d)(zU) : "-"
        }), (0, LU.jsx)("td", {
          children: null !== yU ? (0, NU.g)(yU) : "-"
        }), (0, LU.jsx)("td", {
          children: null !== QU ? (0, NU.i)(QU) : "-"
        })]
      })
    }

    function iU(UU) {
      let {
        discoverability: XU
      } = UU;
      return (0, LU.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === XU || void 0 === XU ? void 0 : XU.engagementScore) ? (0, oU.I)(Math.round(XU.engagementScore)) : "-"
      })
    }

    function HU() {
      var UU, XU;
      const {
        t: zU
      } = (0, EU.I)(), yU = (0, BU.useNavigatePreserveSearch)(), {
        userContext: QU,
        isUserContextUpdating: WU
      } = (0, IU.d)(), rU = (0, RU.o)(), [HU, MU] = (0, ZU.q)(), vU = (VU = HU.get(wU), eU.some((UU => UU.scope === VU)) ? VU : OU);
      var VU;
      const sU = function(UU) {
          return AU.T.includes(UU) ? UU : null
        }(HU.get(qU)),
        nU = (0, ZU.e)(HU.get(ZU.c)),
        [mU, lU] = (0, cU.useState)(null),
        [xU, JU] = (0, cU.useState)(!1);

      function jU(UU) {
        MU((XU => {
          (0, ZU.i)(XU, wU, UU.scope === OU ? null : UU.scope), (0, ZU.i)(XU, qU, UU.category), (0, ZU.m)(XU, UU.page)
        }))
      }
      const KU = !WU && QU.playerHasRank("developer"),
        bU = KU && "allGames" === vU,
        TU = KU && "dormantGames" === vU;
      (0, cU.useEffect)((() => {
        if (WU) return;
        let UU = !1;
        return lU(null), JU(!1), YU.c.getPublishedGamePreviews(QU, {
          searchQuery: null,
          pageNumber: nU,
          pageSize: CU,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== sU ? [sU] : [],
          upAndComing: !1,
          dormantGames: TU,
          sortByEngagementScore: !0,
          firstPartyGameNames: bU ? DU.c : void 0,
          includeOwners: !0
        }).then((XU => {
          UU || lU(XU)
        })).catch((XU => {
          console.error("Failed to load the studio leaderboard", XU), UU || JU(!0)
        })), () => {
          UU = !0
        }
      }), [WU, bU, TU, sU, nU, QU]);
      const hU = null !== (UU = null === mU || void 0 === mU ? void 0 : mU.results) && void 0 !== UU ? UU : null,
        UX = function(UU, XU, zU) {
          const [yU, QU] = (0, cU.useState)({}), AU = zU ? (null !== UU && void 0 !== UU ? UU : []).flatMap((UU => "firstPartyGame" === UU.type ? [(0, FU.f)(UU.gameNameWithVariation, !0)] : [])).join(",") : "", oU = (0, cU.useMemo)((() => "" === AU ? [] : AU.split(",")), [AU]);
          return (0, cU.useEffect)((() => {
            if (0 === oU.length) return void QU({});
            let UU = !1;
            return YU.c.getGamesByAnalyticsIds(XU, oU).then((XU => {
              UU || QU(XU)
            })).catch((UU => {
              console.error("Failed to load first party discoverability for the studio leaderboard", UU)
            })), () => {
              UU = !0
            }
          }), [oU, XU]), yU
        }(hU, QU, KU),
        XX = null !== hU ? function(UU, XU, zU, cU, yU) {
          return UU.map(((UU, QU) => {
            var AU;
            const oU = cU + QU + 1;
            if ("customGame" === UU.type) {
              const XU = UU.preview;
              return {
                key: XU.schematicId,
                position: oU,
                thumbnail: (0, LU.jsx)(pU.d, {
                  game: XU
                }),
                name: XU.name,
                owner: UU.owner,
                category: XU.gameCategory,
                ccu: XU.ccu,
                favourites: XU.favourites,
                discoverability: (0, NU.m)(XU) ? XU : null,
                url: (0, dU.r)((0, FU.e)(XU.schematicId))
              }
            }
            const DU = UU.gameNameWithVariation,
              EU = (0, FU.f)(DU, !0);
            return {
              key: DU,
              position: oU,
              thumbnail: (0, LU.jsx)(PU.b, {
                game: DU
              }),
              name: (0, dU.n)(DU, yU),
              owner: null,
              category: (0, dU.f)(DU),
              ccu: (0, RU.e)(DU, XU),
              favourites: null,
              discoverability: null !== (AU = zU[EU]) && void 0 !== AU ? AU : null,
              url: (0, dU.r)(EU)
            }
          }))
        }(hU, rU, UX, (nU - 1) * CU, zU) : [],
        zX = !xU && null === mU,
        cX = !zX && !xU && 0 === XX.length,
        yX = null !== (XU = null === mU || void 0 === mU ? void 0 : mU.totalPages) && void 0 !== XU ? XU : 1;
      return (0, LU.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, LU.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, LU.jsx)("h1", {
            className: "StudioPageTitle",
            children: zU("studio:leaderboard")
          })
        }), (0, LU.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!TU && (0, LU.jsx)("div", {
            children: zU("studio:leaderboardBanner")
          }), TU && (0, LU.jsx)("div", {
            children: zU("studio:leaderboardDormantBanner")
          }), (0, LU.jsx)("div", {
            children: zU("studio:leaderboardMetricsBanner", {
              days: SU
            })
          })]
        }), KU && (0, LU.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: eU.map((UU => (0, LU.jsx)(tU.O, {
            active: vU === UU.scope,
            onClick: () => {
              jU({
                scope: UU.scope,
                category: sU,
                page: 1
              })
            },
            children: zU(UU.title)
          }, UU.scope)))
        }), (0, LU.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, LU.jsx)(tU.O, {
            active: null === sU,
            onClick: () => {
              jU({
                scope: vU,
                category: null,
                page: 1
              })
            },
            children: zU("studio:leaderboardAllCategories")
          }), AU.T.map((UU => (0, LU.jsx)(tU.O, {
            active: sU === UU,
            onClick: () => {
              jU({
                scope: vU,
                category: UU,
                page: 1
              })
            },
            children: (0, AU.gb)(UU)
          }, UU)))]
        }), zX && (0, LU.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, LU.jsx)(GU.b, {})
        }), xU && (0, LU.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: zU("studio:failedToLoadLeaderboard")
        }), cX && (0, LU.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: zU("studio:leaderboardEmpty")
        }), !zX && !xU && !cX && (0, LU.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, LU.jsx)(kU.b, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: zU("general:game")
            }, {
              key: "owner",
              header: zU("general:owner")
            }, ...null === sU ? [{
              key: "category",
              header: zU("general:category")
            }] : [], ...KU ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: zU("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: zU("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: zU("studio:leaderboardSessionsPerPlayer")
            }, ...TU ? [] : [{
              key: "ccu",
              header: zU("studio:metricCcu")
            }], {
              key: "favourites",
              header: zU("general:favourites")
            }],
            rows: XX,
            getRowKey: UU => UU.key,
            renderRow: UU => (0, LU.jsxs)("tr", {
              onClick: () => {
                yU(UU.url)
              },
              children: [(0, LU.jsx)(uU, {
                position: UU.position
              }), (0, LU.jsx)("td", {
                children: (0, LU.jsx)(PU.e, {
                  thumbnail: UU.thumbnail,
                  name: UU.name
                })
              }), (0, LU.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === UU.owner && "-", null !== UU.owner && (0, LU.jsx)(aU.f, {
                  playerSocialPreview: UU.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === sU && (0, LU.jsx)("td", {
                children: (0, AU.gb)(UU.category)
              }), KU && (0, LU.jsx)(iU, {
                discoverability: UU.discoverability
              }), (0, LU.jsx)(fU, {
                discoverability: UU.discoverability
              }), !TU && (0, LU.jsx)("td", {
                children: null !== UU.ccu ? (0, oU.I)(UU.ccu) : "-"
              }), (0, LU.jsx)("td", {
                children: null !== UU.favourites ? (0, oU.I)(UU.favourites) : "-"
              })]
            })
          })
        }), !xU && (0, LU.jsx)(gU.c, {
          className: "AnimFadeIn",
          page: nU,
          totalPages: yX,
          onSetPage: UU => {
            jU({
              scope: vU,
              category: sU,
              page: UU
            })
          }
        })]
      })
    }
  },
  5438: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU,
      e: () => QU
    });
    var cU = zU(1592),
      yU = zU(1305);

    function QU(UU) {
      let {
        thumbnail: XU,
        name: zU
      } = UU;
      return (0, yU.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, yU.jsx)("div", {
          className: "StudioTableThumbnail",
          children: XU
        }), (0, yU.jsx)("span", {
          className: "StudioTableGameName",
          children: zU
        })]
      })
    }

    function AU(UU) {
      let {
        game: XU
      } = UU;
      return (0, yU.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, cU.k)(XU),
        alt: ""
      })
    }
  },
  7e3: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU
    });
    const cU = {
      1: zU(7009),
      2: zU(7018),
      3: zU(7021)
    }
  },
  5433: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1305);

    function FU(UU) {
      let {
        columns: XU,
        rows: zU,
        getRowKey: yU,
        renderRow: FU,
        className: oU
      } = UU;
      return (0, AU.jsxs)("table", {
        className: QU()("Table", oU),
        children: [(0, AU.jsx)("thead", {
          children: (0, AU.jsx)("tr", {
            children: XU.map((UU => (0, AU.jsx)("th", {
              children: UU.header
            }, UU.key)))
          })
        }), (0, AU.jsx)("tbody", {
          children: zU.map((UU => (0, AU.jsx)(cU.Fragment, {
            children: FU(UU)
          }, yU(UU))))
        })]
      })
    }
  },
  5415: () => {},
  7009: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  7018: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  7021: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);