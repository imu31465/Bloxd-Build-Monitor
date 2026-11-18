export const id = 94;
export const ids = [94];
export const modules = {
  4312: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => LB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(946),
      lB = dB(1225),
      JB = dB(2998),
      YB = dB(138),
      gB = dB(3037),
      oB = dB(3026),
      kB = dB(980);

    function LB(BB) {
      let {
        game: TB
      } = BB;
      const dB = (0, YB.m)() ? "large" : "small",
        VB = (0, gB.f)(TB, dB),
        LB = (0, JB.h)(VB),
        OB = void 0 !== LB.blurhash;
      return (0, kB.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [LB.isLoading && !OB && (0, kB.jsx)(lB.b, {
          loaderType: "Secondary"
        }), !LB.failed && (null !== LB.src || OB) && (0, kB.jsx)("div", {
          className: yB()("SchematicImage", oB.e, {
            SchematicImageFadeIn: LB.fadeIn && !OB
          }),
          style: (0, oB.d)(LB),
          children: (0, kB.jsx)(oB.c, {
            image: LB
          })
        }), LB.failed && (0, kB.jsx)("div", {
          className: "SchematicImageError",
          children: (0, kB.jsx)(pB.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5858: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => RB
    });
    dB(4303);
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(270),
      JB = dB(912),
      YB = dB(1105),
      gB = dB(898),
      oB = dB(1078),
      kB = dB(1393),
      LB = dB(3046),
      OB = dB(1011),
      DB = dB(4312),
      uB = dB(2208),
      HB = dB(1324),
      EB = dB(3980),
      vB = dB(4316),
      mB = dB(1225),
      iB = dB(1407),
      NB = dB(3971),
      tB = dB(2170),
      fB = dB(4320),
      sB = dB(5778),
      MB = dB(1441),
      zB = dB(980);
    const wB = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      UB = 25,
      FB = "scope",
      KB = "category",
      rB = "customGames";
    const IB = 7,
      cB = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function SB(BB) {
      let {
        position: TB
      } = BB;
      const dB = sB.b[TB];
      return (0, zB.jsxs)("td", {
        className: pB()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== dB,
          [`StudioLeaderboardTopPosition${TB}`]: void 0 !== dB
        }),
        children: [void 0 !== dB && (0, zB.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: dB,
          alt: ""
        }), TB]
      })
    }

    function PB(BB) {
      let {
        discoverability: TB
      } = BB;
      const {
        playsPerDay: dB,
        avgPlaytimeMinutes: yB,
        retention: pB
      } = null === TB ? cB : (0, LB.i)(TB);
      return (0, zB.jsxs)(VB.Fragment, {
        children: [(0, zB.jsx)("td", {
          children: null !== dB ? (0, LB.b)(dB) : "-"
        }), (0, zB.jsx)("td", {
          children: null !== yB ? (0, LB.c)(yB) : "-"
        }), (0, zB.jsx)("td", {
          children: null !== pB ? (0, LB.f)(pB) : "-"
        })]
      })
    }

    function QB(BB) {
      let {
        discoverability: TB
      } = BB;
      return (0, zB.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === TB || void 0 === TB ? void 0 : TB.engagementScore) ? (0, YB.S)(Math.round(TB.engagementScore)) : "-"
      })
    }

    function RB() {
      var BB, TB;
      const {
        t: dB
      } = (0, oB.z)(), yB = (0, iB.useNavigatePreserveSearch)(), {
        userContext: pB,
        isUserContextUpdating: sB
      } = (0, OB.b)(), cB = (0, tB.k)(), [RB, aB] = (0, NB.j)(), ZB = (XB = RB.get(FB), wB.some((BB => BB.scope === XB)) ? XB : rB);
      var XB;
      const WB = function(BB) {
          return lB.R.includes(BB) ? BB : null
        }(RB.get(KB)),
        hB = (0, NB.f)(RB.get(NB.b)),
        [CB, GB] = (0, VB.useState)(null),
        [qB, xB] = (0, VB.useState)(!1);

      function jB(BB) {
        aB((TB => {
          (0, NB.h)(TB, FB, BB.scope === rB ? null : BB.scope), (0, NB.h)(TB, KB, BB.category), (0, NB.i)(TB, BB.page)
        }))
      }
      const AB = !sB && pB.playerHasRank("developer"),
        bB = AB && "allGames" === ZB,
        nB = AB && "dormantGames" === ZB;
      (0, VB.useEffect)((() => {
        if (sB) return;
        let BB = !1;
        return GB(null), xB(!1), kB.c.getPublishedGamePreviews(pB, {
          searchQuery: null,
          pageNumber: hB,
          pageSize: UB,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== WB ? [WB] : [],
          upAndComing: !1,
          dormantGames: nB,
          sortByEngagementScore: !0,
          firstPartyGameNames: bB ? gB.b : void 0,
          includeOwners: !0
        }).then((TB => {
          BB || GB(TB)
        })).catch((TB => {
          console.error("Failed to load the studio leaderboard", TB), BB || xB(!0)
        })), () => {
          BB = !0
        }
      }), [sB, bB, nB, WB, hB, pB]);
      const eB = null !== (BB = null === CB || void 0 === CB ? void 0 : CB.results) && void 0 !== BB ? BB : null,
        BT = function(BB, TB, dB) {
          const [yB, pB] = (0, VB.useState)({}), lB = dB ? (null !== BB && void 0 !== BB ? BB : []).flatMap((BB => "firstPartyGame" === BB.type ? [(0, JB.d)(BB.gameNameWithVariation, !0)] : [])).join(",") : "", YB = (0, VB.useMemo)((() => "" === lB ? [] : lB.split(",")), [lB]);
          return (0, VB.useEffect)((() => {
            if (0 === YB.length) return void pB({});
            let BB = !1;
            return kB.c.getGamesByAnalyticsIds(TB, YB).then((TB => {
              BB || pB(TB)
            })).catch((BB => {
              console.error("Failed to load first party discoverability for the studio leaderboard", BB)
            })), () => {
              BB = !0
            }
          }), [YB, TB]), yB
        }(eB, pB, AB),
        TT = null !== eB ? function(BB, TB, dB, VB, yB) {
          return BB.map(((BB, pB) => {
            var lB;
            const YB = VB + pB + 1;
            if ("customGame" === BB.type) {
              const TB = BB.preview;
              return {
                key: TB.schematicId,
                position: YB,
                thumbnail: (0, zB.jsx)(DB.e, {
                  game: TB
                }),
                name: TB.name,
                owner: BB.owner,
                category: TB.gameCategory,
                ccu: TB.ccu,
                favourites: TB.favourites,
                discoverability: (0, LB.m)(TB) ? TB : null,
                url: (0, MB.g)((0, JB.c)(TB.schematicId))
              }
            }
            const gB = BB.gameNameWithVariation,
              oB = (0, JB.d)(gB, !0);
            return {
              key: gB,
              position: YB,
              thumbnail: (0, zB.jsx)(fB.e, {
                game: gB
              }),
              name: (0, MB.f)(gB, yB),
              owner: null,
              category: (0, MB.b)(gB),
              ccu: (0, tB.c)(gB, TB),
              favourites: null,
              discoverability: null !== (lB = dB[oB]) && void 0 !== lB ? lB : null,
              url: (0, MB.g)(oB)
            }
          }))
        }(eB, cB, BT, (hB - 1) * UB, dB) : [],
        dT = !qB && null === CB,
        VT = !dT && !qB && 0 === TT.length,
        yT = null !== (TB = null === CB || void 0 === CB ? void 0 : CB.totalPages) && void 0 !== TB ? TB : 1;
      return (0, zB.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, zB.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, zB.jsx)("h1", {
            className: "StudioPageTitle",
            children: dB("studio:leaderboard")
          })
        }), (0, zB.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!nB && (0, zB.jsx)("div", {
            children: dB("studio:leaderboardBanner")
          }), nB && (0, zB.jsx)("div", {
            children: dB("studio:leaderboardDormantBanner")
          }), (0, zB.jsx)("div", {
            children: dB("studio:leaderboardMetricsBanner", {
              days: IB
            })
          })]
        }), AB && (0, zB.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: wB.map((BB => (0, zB.jsx)(HB.T, {
            active: ZB === BB.scope,
            onClick: () => {
              jB({
                scope: BB.scope,
                category: WB,
                page: 1
              })
            },
            children: dB(BB.title)
          }, BB.scope)))
        }), (0, zB.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, zB.jsx)(HB.T, {
            active: null === WB,
            onClick: () => {
              jB({
                scope: ZB,
                category: null,
                page: 1
              })
            },
            children: dB("studio:leaderboardAllCategories")
          }), lB.R.map((BB => (0, zB.jsx)(HB.T, {
            active: WB === BB,
            onClick: () => {
              jB({
                scope: ZB,
                category: BB,
                page: 1
              })
            },
            children: (0, lB.db)(BB)
          }, BB)))]
        }), dT && (0, zB.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, zB.jsx)(mB.b, {})
        }), qB && (0, zB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: dB("studio:failedToLoadLeaderboard")
        }), VT && (0, zB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: dB("studio:leaderboardEmpty")
        }), !dT && !qB && !VT && (0, zB.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, zB.jsx)(vB.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: dB("general:game")
            }, {
              key: "owner",
              header: dB("general:owner")
            }, ...null === WB ? [{
              key: "category",
              header: dB("general:category")
            }] : [], ...AB ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: dB("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: dB("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: dB("studio:leaderboardSessionsPerPlayer")
            }, ...nB ? [] : [{
              key: "ccu",
              header: dB("studio:metricCcu")
            }], {
              key: "favourites",
              header: dB("general:favourites")
            }],
            rows: TT,
            getRowKey: BB => BB.key,
            renderRow: BB => (0, zB.jsxs)("tr", {
              onClick: () => {
                yB(BB.url)
              },
              children: [(0, zB.jsx)(SB, {
                position: BB.position
              }), (0, zB.jsx)("td", {
                children: (0, zB.jsx)(fB.g, {
                  thumbnail: BB.thumbnail,
                  name: BB.name
                })
              }), (0, zB.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === BB.owner && "-", null !== BB.owner && (0, zB.jsx)(uB.i, {
                  playerSocialPreview: BB.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === WB && (0, zB.jsx)("td", {
                children: (0, lB.db)(BB.category)
              }), AB && (0, zB.jsx)(QB, {
                discoverability: BB.discoverability
              }), (0, zB.jsx)(PB, {
                discoverability: BB.discoverability
              }), !nB && (0, zB.jsx)("td", {
                children: null !== BB.ccu ? (0, YB.S)(BB.ccu) : "-"
              }), (0, zB.jsx)("td", {
                children: null !== BB.favourites ? (0, YB.S)(BB.favourites) : "-"
              })]
            })
          })
        }), !qB && (0, zB.jsx)(EB.c, {
          className: "AnimFadeIn",
          page: hB,
          totalPages: yT,
          onSetPage: BB => {
            jB({
              scope: ZB,
              category: WB,
              page: BB
            })
          }
        })]
      })
    }
  },
  4320: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      g: () => pB
    });
    var VB = dB(1441),
      yB = dB(980);

    function pB(BB) {
      let {
        thumbnail: TB,
        name: dB
      } = BB;
      return (0, yB.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, yB.jsx)("div", {
          className: "StudioTableThumbnail",
          children: TB
        }), (0, yB.jsx)("span", {
          className: "StudioTableGameName",
          children: dB
        })]
      })
    }

    function lB(BB) {
      let {
        game: TB
      } = BB;
      return (0, yB.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, VB.e)(TB),
        alt: ""
      })
    }
  },
  5778: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    const VB = {
      1: dB(5786),
      2: dB(5788),
      3: dB(5791)
    }
  },
  4316: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB
    });
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(980);

    function JB(BB) {
      let {
        columns: TB,
        rows: dB,
        getRowKey: yB,
        renderRow: JB,
        className: YB
      } = BB;
      return (0, lB.jsxs)("table", {
        className: pB()("Table", YB),
        children: [(0, lB.jsx)("thead", {
          children: (0, lB.jsx)("tr", {
            children: TB.map((BB => (0, lB.jsx)("th", {
              children: BB.header
            }, BB.key)))
          })
        }), (0, lB.jsx)("tbody", {
          children: dB.map((BB => (0, lB.jsx)(VB.Fragment, {
            children: JB(BB)
          }, yB(BB))))
        })]
      })
    }
  },
  4303: () => {},
  5786: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  5788: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  5791: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);