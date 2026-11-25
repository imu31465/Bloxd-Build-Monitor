export const id = 104;
export const ids = [104];
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
  6514: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => AG
    });
    ZG(4924);
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(333),
      kG = ZG(988),
      UG = ZG(1177),
      YG = ZG(973),
      VG = ZG(1151),
      pG = ZG(1431),
      fG = ZG(3526),
      QG = ZG(1092),
      KG = ZG(4933),
      hG = ZG(2575),
      dG = ZG(1393),
      JG = ZG(4581),
      rG = ZG(4939),
      zG = ZG(1302),
      EG = ZG(1444),
      oG = ZG(4575),
      XG = ZG(2489),
      uG = ZG(4945),
      iG = ZG(6421),
      CG = ZG(1481),
      WG = ZG(1067);
    const mG = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      IG = 25,
      FG = "scope",
      vG = "category",
      aG = "customGames";
    const cG = 7,
      lG = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function jG(GG) {
      let {
        position: bG
      } = GG;
      const ZG = iG.c[bG];
      return (0, WG.jsxs)("td", {
        className: LG()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== ZG,
          [`StudioLeaderboardTopPosition${bG}`]: void 0 !== ZG
        }),
        children: [void 0 !== ZG && (0, WG.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: ZG,
          alt: ""
        }), bG]
      })
    }

    function PG(GG) {
      let {
        discoverability: bG
      } = GG;
      const {
        playsPerDay: ZG,
        avgPlaytimeMinutes: SG,
        retention: LG
      } = null === bG ? lG : (0, fG.j)(bG);
      return (0, WG.jsxs)(wG.Fragment, {
        children: [(0, WG.jsx)("td", {
          children: null !== ZG ? (0, fG.e)(ZG) : "-"
        }), (0, WG.jsx)("td", {
          children: null !== SG ? (0, fG.f)(SG) : "-"
        }), (0, WG.jsx)("td", {
          children: null !== LG ? (0, fG.g)(LG) : "-"
        })]
      })
    }

    function MG(GG) {
      let {
        discoverability: bG
      } = GG;
      return (0, WG.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === bG || void 0 === bG ? void 0 : bG.engagementScore) ? (0, UG.O)(Math.round(bG.engagementScore)) : "-"
      })
    }

    function AG() {
      var GG, bG;
      const {
        t: ZG
      } = (0, VG.w)(), SG = (0, EG.useNavigatePreserveSearch)(), {
        userContext: LG,
        isUserContextUpdating: iG
      } = (0, QG.e)(), lG = (0, XG.i)(), [AG, sG] = (0, oG.o)(), qG = (nG = AG.get(FG), mG.some((GG => GG.scope === nG)) ? nG : aG);
      var nG;
      const gG = function(GG) {
          return yG.ib.includes(GG) ? GG : null
        }(AG.get(vG)),
        eG = (0, oG.d)(AG.get(oG.c)),
        [RG, TG] = (0, wG.useState)(null),
        [HG, tG] = (0, wG.useState)(!1);

      function DG(GG) {
        sG((bG => {
          (0, oG.g)(bG, FG, GG.scope === aG ? null : GG.scope), (0, oG.g)(bG, vG, GG.category), (0, oG.k)(bG, GG.page)
        }))
      }
      const NG = !iG && LG.playerHasRank("developer"),
        OG = NG && "allGames" === qG,
        xG = NG && "dormantGames" === qG;
      (0, wG.useEffect)((() => {
        if (iG) return;
        let GG = !1;
        return TG(null), tG(!1), pG.d.getPublishedGamePreviews(LG, {
          searchQuery: null,
          pageNumber: eG,
          pageSize: IG,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== gG ? [gG] : [],
          upAndComing: !1,
          dormantGames: xG,
          sortByEngagementScore: !0,
          firstPartyGameNames: OG ? YG.d : void 0,
          includeOwners: !0
        }).then((bG => {
          GG || TG(bG)
        })).catch((bG => {
          console.error("Failed to load the studio leaderboard", bG), GG || tG(!0)
        })), () => {
          GG = !0
        }
      }), [iG, OG, xG, gG, eG, LG]);
      const BG = null !== (GG = null === RG || void 0 === RG ? void 0 : RG.results) && void 0 !== GG ? GG : null,
        Gb = function(GG, bG, ZG) {
          const [SG, LG] = (0, wG.useState)({}), yG = ZG ? (null !== GG && void 0 !== GG ? GG : []).flatMap((GG => "firstPartyGame" === GG.type ? [(0, kG.d)(GG.gameNameWithVariation, !0)] : [])).join(",") : "", UG = (0, wG.useMemo)((() => "" === yG ? [] : yG.split(",")), [yG]);
          return (0, wG.useEffect)((() => {
            if (0 === UG.length) return void LG({});
            let GG = !1;
            return pG.d.getGamesByAnalyticsIds(bG, UG).then((bG => {
              GG || LG(bG)
            })).catch((GG => {
              console.error("Failed to load first party discoverability for the studio leaderboard", GG)
            })), () => {
              GG = !0
            }
          }), [UG, bG]), SG
        }(BG, LG, NG),
        bb = null !== BG ? function(GG, bG, ZG, wG, SG) {
          return GG.map(((GG, LG) => {
            var yG;
            const UG = wG + LG + 1;
            if ("customGame" === GG.type) {
              const bG = GG.preview;
              return {
                key: bG.schematicId,
                position: UG,
                thumbnail: (0, WG.jsx)(KG.e, {
                  game: bG
                }),
                name: bG.name,
                owner: GG.owner,
                category: bG.gameCategory,
                ccu: bG.ccu,
                favourites: bG.favourites,
                discoverability: (0, fG.l)(bG) ? bG : null,
                url: (0, CG.p)((0, kG.b)(bG.schematicId))
              }
            }
            const YG = GG.gameNameWithVariation,
              VG = (0, kG.d)(YG, !0);
            return {
              key: YG,
              position: UG,
              thumbnail: (0, WG.jsx)(uG.d, {
                game: YG
              }),
              name: (0, CG.l)(YG, SG),
              owner: null,
              category: (0, CG.c)(YG),
              ccu: (0, XG.b)(YG, bG),
              favourites: null,
              discoverability: null !== (yG = ZG[VG]) && void 0 !== yG ? yG : null,
              url: (0, CG.p)(VG)
            }
          }))
        }(BG, lG, Gb, (eG - 1) * IG, ZG) : [],
        Zb = !HG && null === RG,
        wb = !Zb && !HG && 0 === bb.length,
        Sb = null !== (bG = null === RG || void 0 === RG ? void 0 : RG.totalPages) && void 0 !== bG ? bG : 1;
      return (0, WG.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, WG.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, WG.jsx)("h1", {
            className: "StudioPageTitle",
            children: ZG("studio:leaderboard")
          })
        }), (0, WG.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!xG && (0, WG.jsx)("div", {
            children: ZG("studio:leaderboardBanner")
          }), xG && (0, WG.jsx)("div", {
            children: ZG("studio:leaderboardDormantBanner")
          }), (0, WG.jsx)("div", {
            children: ZG("studio:leaderboardMetricsBanner", {
              days: cG
            })
          })]
        }), NG && (0, WG.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: mG.map((GG => (0, WG.jsx)(dG.K, {
            active: qG === GG.scope,
            onClick: () => {
              DG({
                scope: GG.scope,
                category: gG,
                page: 1
              })
            },
            children: ZG(GG.title)
          }, GG.scope)))
        }), (0, WG.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, WG.jsx)(dG.K, {
            active: null === gG,
            onClick: () => {
              DG({
                scope: qG,
                category: null,
                page: 1
              })
            },
            children: ZG("studio:leaderboardAllCategories")
          }), yG.ib.map((GG => (0, WG.jsx)(dG.K, {
            active: gG === GG,
            onClick: () => {
              DG({
                scope: qG,
                category: GG,
                page: 1
              })
            },
            children: (0, yG.yb)(GG)
          }, GG)))]
        }), Zb && (0, WG.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, WG.jsx)(zG.b, {})
        }), HG && (0, WG.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ZG("studio:failedToLoadLeaderboard")
        }), wb && (0, WG.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ZG("studio:leaderboardEmpty")
        }), !Zb && !HG && !wb && (0, WG.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, WG.jsx)(rG.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: ZG("general:game")
            }, {
              key: "owner",
              header: ZG("general:owner")
            }, ...null === gG ? [{
              key: "category",
              header: ZG("general:category")
            }] : [], ...NG ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: ZG("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: ZG("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: ZG("studio:leaderboardSessionsPerPlayer")
            }, ...xG ? [] : [{
              key: "ccu",
              header: ZG("studio:metricCcu")
            }], {
              key: "favourites",
              header: ZG("general:favourites")
            }],
            rows: bb,
            getRowKey: GG => GG.key,
            renderRow: GG => (0, WG.jsxs)("tr", {
              onClick: () => {
                SG(GG.url)
              },
              children: [(0, WG.jsx)(jG, {
                position: GG.position
              }), (0, WG.jsx)("td", {
                children: (0, WG.jsx)(uG.h, {
                  thumbnail: GG.thumbnail,
                  name: GG.name
                })
              }), (0, WG.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === GG.owner && "-", null !== GG.owner && (0, WG.jsx)(hG.h, {
                  playerSocialPreview: GG.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === gG && (0, WG.jsx)("td", {
                children: (0, yG.yb)(GG.category)
              }), NG && (0, WG.jsx)(MG, {
                discoverability: GG.discoverability
              }), (0, WG.jsx)(PG, {
                discoverability: GG.discoverability
              }), !xG && (0, WG.jsx)("td", {
                children: null !== GG.ccu ? (0, UG.O)(GG.ccu) : "-"
              }), (0, WG.jsx)("td", {
                children: null !== GG.favourites ? (0, UG.O)(GG.favourites) : "-"
              })]
            })
          })
        }), !HG && (0, WG.jsx)(JG.e, {
          className: "AnimFadeIn",
          page: eG,
          totalPages: Sb,
          onSetPage: GG => {
            DG({
              scope: qG,
              category: gG,
              page: GG
            })
          }
        })]
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
  6421: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    const wG = {
      1: ZG(6429),
      2: ZG(6432),
      3: ZG(6437)
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
  4924: () => {},
  6429: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6432: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6437: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);