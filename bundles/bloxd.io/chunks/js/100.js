export const id = 100;
export const ids = [100];
export const modules = {
  4569: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => jU
    });
    var tU = gU(1037),
      pU = gU.n(tU),
      EU = gU(1049),
      PU = gU(1326),
      TU = gU(3194),
      qU = gU(135),
      KU = gU(3232),
      cU = gU(3223),
      GU = gU(1090);

    function jU(UU) {
      let {
        game: RU
      } = UU;
      const gU = (0, qU.l)() ? "large" : "small",
        tU = (0, KU.f)(RU, gU),
        jU = (0, TU.h)(tU),
        uU = void 0 !== jU.blurhash;
      return (0, GU.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [jU.isLoading && !uU && (0, GU.jsx)(PU.d, {
          loaderType: "Secondary"
        }), !jU.failed && (null !== jU.src || uU) && (0, GU.jsx)("div", {
          className: pU()("SchematicImage", cU.h, {
            SchematicImageFadeIn: jU.fadeIn && !uU
          }),
          style: (0, cU.e)(jU),
          children: (0, GU.jsx)(cU.c, {
            image: jU
          })
        }), jU.failed && (0, GU.jsx)("div", {
          className: "SchematicImageError",
          children: (0, GU.jsx)(EU.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6184: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => HU
    });
    gU(4562);
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(299),
      TU = gU(1007),
      qU = gU(1217),
      KU = gU(985),
      cU = gU(1181),
      GU = gU(1461),
      jU = gU(3244),
      uU = gU(1112),
      CU = gU(4569),
      hU = gU(2374),
      QU = gU(1412),
      eU = gU(4228),
      WU = gU(4575),
      fU = gU(1326),
      xU = gU(1475),
      mU = gU(4222),
      IU = gU(2320),
      JU = gU(4581),
      wU = gU(6092),
      nU = gU(1497),
      bU = gU(1090);
    const oU = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      ZU = 25,
      aU = "scope",
      YU = "category",
      BU = "customGames";
    const VU = 7,
      rU = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function XU(UU) {
      let {
        position: RU
      } = UU;
      const gU = wU.e[RU];
      return (0, bU.jsxs)("td", {
        className: EU()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== gU,
          [`StudioLeaderboardTopPosition${RU}`]: void 0 !== gU
        }),
        children: [void 0 !== gU && (0, bU.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: gU,
          alt: ""
        }), RU]
      })
    }

    function vU(UU) {
      let {
        discoverability: RU
      } = UU;
      const {
        playsPerDay: gU,
        avgPlaytimeMinutes: pU,
        retention: EU
      } = null === RU ? rU : (0, jU.k)(RU);
      return (0, bU.jsxs)(tU.Fragment, {
        children: [(0, bU.jsx)("td", {
          children: null !== gU ? (0, jU.e)(gU) : "-"
        }), (0, bU.jsx)("td", {
          children: null !== pU ? (0, jU.i)(pU) : "-"
        }), (0, bU.jsx)("td", {
          children: null !== EU ? (0, jU.j)(EU) : "-"
        })]
      })
    }

    function dU(UU) {
      let {
        discoverability: RU
      } = UU;
      return (0, bU.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === RU || void 0 === RU ? void 0 : RU.engagementScore) ? (0, qU.R)(Math.round(RU.engagementScore)) : "-"
      })
    }

    function HU() {
      var UU, RU;
      const {
        t: gU
      } = (0, cU.B)(), pU = (0, xU.useNavigatePreserveSearch)(), {
        userContext: EU,
        isUserContextUpdating: wU
      } = (0, uU.e)(), rU = (0, IU.p)(), [HU, SU] = (0, mU.o)(), sU = (yU = HU.get(aU), oU.some((UU => UU.scope === yU)) ? yU : BU);
      var yU;
      const kU = function(UU) {
          return PU.X.includes(UU) ? UU : null
        }(HU.get(YU)),
        FU = (0, mU.h)(HU.get(mU.e)),
        [iU, AU] = (0, tU.useState)(null),
        [zU, MU] = (0, tU.useState)(!1);

      function DU(UU) {
        SU((RU => {
          (0, mU.i)(RU, aU, UU.scope === BU ? null : UU.scope), (0, mU.i)(RU, YU, UU.category), (0, mU.l)(RU, UU.page)
        }))
      }
      const LU = !wU && EU.playerHasRank("developer"),
        NU = LU && "allGames" === sU,
        lU = LU && "dormantGames" === sU;
      (0, tU.useEffect)((() => {
        if (wU) return;
        let UU = !1;
        return AU(null), MU(!1), GU.c.getPublishedGamePreviews(EU, {
          searchQuery: null,
          pageNumber: FU,
          pageSize: ZU,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== kU ? [kU] : [],
          upAndComing: !1,
          dormantGames: lU,
          sortByEngagementScore: !0,
          firstPartyGameNames: NU ? KU.d : void 0,
          includeOwners: !0
        }).then((RU => {
          UU || AU(RU)
        })).catch((RU => {
          console.error("Failed to load the studio leaderboard", RU), UU || MU(!0)
        })), () => {
          UU = !0
        }
      }), [wU, NU, lU, kU, FU, EU]);
      const OU = null !== (UU = null === iU || void 0 === iU ? void 0 : iU.results) && void 0 !== UU ? UU : null,
        UR = function(UU, RU, gU) {
          const [pU, EU] = (0, tU.useState)({}), PU = gU ? (null !== UU && void 0 !== UU ? UU : []).flatMap((UU => "firstPartyGame" === UU.type ? [(0, TU.f)(UU.gameNameWithVariation, !0)] : [])).join(",") : "", qU = (0, tU.useMemo)((() => "" === PU ? [] : PU.split(",")), [PU]);
          return (0, tU.useEffect)((() => {
            if (0 === qU.length) return void EU({});
            let UU = !1;
            return GU.c.getGamesByAnalyticsIds(RU, qU).then((RU => {
              UU || EU(RU)
            })).catch((UU => {
              console.error("Failed to load first party discoverability for the studio leaderboard", UU)
            })), () => {
              UU = !0
            }
          }), [qU, RU]), pU
        }(OU, EU, LU),
        RR = null !== OU ? function(UU, RU, gU, tU, pU) {
          return UU.map(((UU, EU) => {
            var PU;
            const qU = tU + EU + 1;
            if ("customGame" === UU.type) {
              const RU = UU.preview;
              return {
                key: RU.schematicId,
                position: qU,
                thumbnail: (0, bU.jsx)(CU.c, {
                  game: RU
                }),
                name: RU.name,
                owner: UU.owner,
                category: RU.gameCategory,
                ccu: RU.ccu,
                favourites: RU.favourites,
                discoverability: (0, jU.m)(RU) ? RU : null,
                url: (0, nU.m)((0, TU.b)(RU.schematicId))
              }
            }
            const KU = UU.gameNameWithVariation,
              cU = (0, TU.f)(KU, !0);
            return {
              key: KU,
              position: qU,
              thumbnail: (0, bU.jsx)(JU.c, {
                game: KU
              }),
              name: (0, nU.k)(KU, pU),
              owner: null,
              category: (0, nU.b)(KU),
              ccu: (0, IU.d)(KU, RU),
              favourites: null,
              discoverability: null !== (PU = gU[cU]) && void 0 !== PU ? PU : null,
              url: (0, nU.m)(cU)
            }
          }))
        }(OU, rU, UR, (FU - 1) * ZU, gU) : [],
        gR = !zU && null === iU,
        tR = !gR && !zU && 0 === RR.length,
        pR = null !== (RU = null === iU || void 0 === iU ? void 0 : iU.totalPages) && void 0 !== RU ? RU : 1;
      return (0, bU.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, bU.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, bU.jsx)("h1", {
            className: "StudioPageTitle",
            children: gU("studio:leaderboard")
          })
        }), (0, bU.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!lU && (0, bU.jsx)("div", {
            children: gU("studio:leaderboardBanner")
          }), lU && (0, bU.jsx)("div", {
            children: gU("studio:leaderboardDormantBanner")
          }), (0, bU.jsx)("div", {
            children: gU("studio:leaderboardMetricsBanner", {
              days: VU
            })
          })]
        }), LU && (0, bU.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: oU.map((UU => (0, bU.jsx)(QU.M, {
            active: sU === UU.scope,
            onClick: () => {
              DU({
                scope: UU.scope,
                category: kU,
                page: 1
              })
            },
            children: gU(UU.title)
          }, UU.scope)))
        }), (0, bU.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, bU.jsx)(QU.M, {
            active: null === kU,
            onClick: () => {
              DU({
                scope: sU,
                category: null,
                page: 1
              })
            },
            children: gU("studio:leaderboardAllCategories")
          }), PU.X.map((UU => (0, bU.jsx)(QU.M, {
            active: kU === UU,
            onClick: () => {
              DU({
                scope: sU,
                category: UU,
                page: 1
              })
            },
            children: (0, PU.ib)(UU)
          }, UU)))]
        }), gR && (0, bU.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, bU.jsx)(fU.d, {})
        }), zU && (0, bU.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: gU("studio:failedToLoadLeaderboard")
        }), tR && (0, bU.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: gU("studio:leaderboardEmpty")
        }), !gR && !zU && !tR && (0, bU.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, bU.jsx)(WU.d, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: gU("general:game")
            }, {
              key: "owner",
              header: gU("general:owner")
            }, ...null === kU ? [{
              key: "category",
              header: gU("general:category")
            }] : [], ...LU ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: gU("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: gU("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: gU("studio:leaderboardSessionsPerPlayer")
            }, ...lU ? [] : [{
              key: "ccu",
              header: gU("studio:metricCcu")
            }], {
              key: "favourites",
              header: gU("general:favourites")
            }],
            rows: RR,
            getRowKey: UU => UU.key,
            renderRow: UU => (0, bU.jsxs)("tr", {
              onClick: () => {
                pU(UU.url)
              },
              children: [(0, bU.jsx)(XU, {
                position: UU.position
              }), (0, bU.jsx)("td", {
                children: (0, bU.jsx)(JU.f, {
                  thumbnail: UU.thumbnail,
                  name: UU.name
                })
              }), (0, bU.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === UU.owner && "-", null !== UU.owner && (0, bU.jsx)(hU.d, {
                  playerSocialPreview: UU.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === kU && (0, bU.jsx)("td", {
                children: (0, PU.ib)(UU.category)
              }), LU && (0, bU.jsx)(dU, {
                discoverability: UU.discoverability
              }), (0, bU.jsx)(vU, {
                discoverability: UU.discoverability
              }), !lU && (0, bU.jsx)("td", {
                children: null !== UU.ccu ? (0, qU.R)(UU.ccu) : "-"
              }), (0, bU.jsx)("td", {
                children: null !== UU.favourites ? (0, qU.R)(UU.favourites) : "-"
              })]
            })
          })
        }), !zU && (0, bU.jsx)(eU.b, {
          className: "AnimFadeIn",
          page: FU,
          totalPages: pR,
          onSetPage: UU => {
            DU({
              scope: sU,
              category: kU,
              page: UU
            })
          }
        })]
      })
    }
  },
  4581: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      f: () => EU
    });
    var tU = gU(1497),
      pU = gU(1090);

    function EU(UU) {
      let {
        thumbnail: RU,
        name: gU
      } = UU;
      return (0, pU.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, pU.jsx)("div", {
          className: "StudioTableThumbnail",
          children: RU
        }), (0, pU.jsx)("span", {
          className: "StudioTableGameName",
          children: gU
        })]
      })
    }

    function PU(UU) {
      let {
        game: RU
      } = UU;
      return (0, pU.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, tU.i)(RU),
        alt: ""
      })
    }
  },
  6092: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    const tU = {
      1: gU(6100),
      2: gU(6108),
      3: gU(6114)
    }
  },
  4575: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => TU
    });
    var tU = gU(56),
      pU = gU(1037),
      EU = gU.n(pU),
      PU = gU(1090);

    function TU(UU) {
      let {
        columns: RU,
        rows: gU,
        getRowKey: pU,
        renderRow: TU,
        className: qU
      } = UU;
      return (0, PU.jsxs)("table", {
        className: EU()("Table", qU),
        children: [(0, PU.jsx)("thead", {
          children: (0, PU.jsx)("tr", {
            children: RU.map((UU => (0, PU.jsx)("th", {
              children: UU.header
            }, UU.key)))
          })
        }), (0, PU.jsx)("tbody", {
          children: gU.map((UU => (0, PU.jsx)(tU.Fragment, {
            children: TU(UU)
          }, pU(UU))))
        })]
      })
    }
  },
  4562: () => {},
  6100: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6108: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6114: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);