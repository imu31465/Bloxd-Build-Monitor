export const id = 104;
export const ids = [104];
export const modules = {
  5057: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => zB
    });
    var TB = ZB(1091),
      JB = ZB.n(TB),
      oB = ZB(1102),
      GB = ZB(1397),
      vB = ZB(3676),
      kB = ZB(140),
      cB = ZB(3706),
      nB = ZB(3698),
      hB = ZB(1153);

    function zB(BB) {
      let {
        game: IB
      } = BB;
      const ZB = (0, kB.is99NightsCrazyGamesBundle)() ? "large" : "small",
        TB = (0, cB.c)(IB, ZB),
        zB = (0, vB.c)(TB),
        FB = void 0 !== zB.blurhash;
      return (0, hB.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [zB.isLoading && !FB && (0, hB.jsx)(GB.d, {
          loaderType: "Secondary"
        }), !zB.failed && (null !== zB.src || FB) && (0, hB.jsx)("div", {
          className: JB()("SchematicImage", nB.h, {
            SchematicImageFadeIn: zB.fadeIn && !FB
          }),
          style: (0, nB.f)(zB),
          children: (0, hB.jsx)(nB.d, {
            image: zB
          })
        }), zB.failed && (0, hB.jsx)("div", {
          className: "SchematicImageError",
          children: (0, hB.jsx)(oB.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6675: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => XB
    });
    ZB(5053);
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(342),
      vB = ZB(1062),
      kB = ZB(1281),
      cB = ZB(1051),
      nB = ZB(1248),
      hB = ZB(1561),
      zB = ZB(3717),
      FB = ZB(1179),
      NB = ZB(5057),
      gB = ZB(2739),
      qB = ZB(1516),
      yB = ZB(4752),
      UB = ZB(5065),
      WB = ZB(1397),
      dB = ZB(1579),
      CB = ZB(4750),
      QB = ZB(2637),
      sB = ZB(5072),
      wB = ZB(6565),
      OB = ZB(1605),
      YB = ZB(1153);
    const iB = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      pB = 25,
      aB = "scope",
      HB = "category",
      MB = "customGames";
    const jB = 7,
      PB = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function RB(BB) {
      let {
        position: IB
      } = BB;
      const ZB = wB.e[IB];
      return (0, YB.jsxs)("td", {
        className: oB()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== ZB,
          [`StudioLeaderboardTopPosition${IB}`]: void 0 !== ZB
        }),
        children: [void 0 !== ZB && (0, YB.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: ZB,
          alt: ""
        }), IB]
      })
    }

    function rB(BB) {
      let {
        discoverability: IB
      } = BB;
      const {
        playsPerDay: ZB,
        avgPlaytimeMinutes: JB,
        retention: oB
      } = null === IB ? PB : (0, zB.k)(IB);
      return (0, YB.jsxs)(TB.Fragment, {
        children: [(0, YB.jsx)("td", {
          children: null !== ZB ? (0, zB.c)(ZB) : "-"
        }), (0, YB.jsx)("td", {
          children: null !== JB ? (0, zB.d)(JB) : "-"
        }), (0, YB.jsx)("td", {
          children: null !== oB ? (0, zB.h)(oB) : "-"
        })]
      })
    }

    function mB(BB) {
      let {
        discoverability: IB
      } = BB;
      return (0, YB.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === IB || void 0 === IB ? void 0 : IB.engagementScore) ? (0, kB.J)(Math.round(IB.engagementScore)) : "-"
      })
    }

    function XB() {
      var BB, IB;
      const {
        t: ZB
      } = (0, nB.G)(), JB = (0, dB.useNavigatePreserveSearch)(), {
        userContext: oB,
        isUserContextUpdating: wB
      } = (0, FB.d)(), PB = (0, QB.o)(), [XB, LB] = (0, CB.o)(), eB = (uB = XB.get(aB), iB.some((BB => BB.scope === uB)) ? uB : MB);
      var uB;
      const fB = function(BB) {
          return GB.ab.includes(BB) ? BB : null
        }(XB.get(HB)),
        lB = (0, CB.e)(XB.get(CB.b)),
        [AB, tB] = (0, TB.useState)(null),
        [bB, xB] = (0, TB.useState)(!1);

      function EB(BB) {
        LB((IB => {
          (0, CB.i)(IB, aB, BB.scope === MB ? null : BB.scope), (0, CB.i)(IB, HB, BB.category), (0, CB.m)(IB, BB.page)
        }))
      }
      const DB = !wB && oB.playerHasRank("developer"),
        KB = DB && "allGames" === eB,
        VB = DB && "dormantGames" === eB;
      (0, TB.useEffect)((() => {
        if (wB) return;
        let BB = !1;
        return tB(null), xB(!1), hB.c.getPublishedGamePreviews(oB, {
          searchQuery: null,
          pageNumber: lB,
          pageSize: pB,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== fB ? [fB] : [],
          upAndComing: !1,
          dormantGames: VB,
          sortByEngagementScore: !0,
          firstPartyGameNames: KB ? cB.c : void 0,
          includeOwners: !0
        }).then((IB => {
          BB || tB(IB)
        })).catch((IB => {
          console.error("Failed to load the studio leaderboard", IB), BB || xB(!0)
        })), () => {
          BB = !0
        }
      }), [wB, KB, VB, fB, lB, oB]);
      const SB = null !== (BB = null === AB || void 0 === AB ? void 0 : AB.results) && void 0 !== BB ? BB : null,
        BI = function(BB, IB, ZB) {
          const [JB, oB] = (0, TB.useState)({}), GB = ZB ? (null !== BB && void 0 !== BB ? BB : []).flatMap((BB => "firstPartyGame" === BB.type ? [(0, vB.e)(BB.gameNameWithVariation, !0)] : [])).join(",") : "", kB = (0, TB.useMemo)((() => "" === GB ? [] : GB.split(",")), [GB]);
          return (0, TB.useEffect)((() => {
            if (0 === kB.length) return void oB({});
            let BB = !1;
            return hB.c.getGamesByAnalyticsIds(IB, kB).then((IB => {
              BB || oB(IB)
            })).catch((BB => {
              console.error("Failed to load first party discoverability for the studio leaderboard", BB)
            })), () => {
              BB = !0
            }
          }), [kB, IB]), JB
        }(SB, oB, DB),
        II = null !== SB ? function(BB, IB, ZB, TB, JB) {
          return BB.map(((BB, oB) => {
            var GB;
            const kB = TB + oB + 1;
            if ("customGame" === BB.type) {
              const IB = BB.preview;
              return {
                key: IB.schematicId,
                position: kB,
                thumbnail: (0, YB.jsx)(NB.d, {
                  game: IB
                }),
                name: IB.name,
                owner: BB.owner,
                category: IB.gameCategory,
                ccu: IB.ccu,
                favourites: IB.favourites,
                discoverability: (0, zB.m)(IB) ? IB : null,
                url: (0, OB.k)((0, vB.d)(IB.schematicId))
              }
            }
            const cB = BB.gameNameWithVariation,
              nB = (0, vB.e)(cB, !0);
            return {
              key: cB,
              position: kB,
              thumbnail: (0, YB.jsx)(sB.c, {
                game: cB
              }),
              name: (0, OB.h)(cB, JB),
              owner: null,
              category: (0, OB.b)(cB),
              ccu: (0, QB.d)(cB, IB),
              favourites: null,
              discoverability: null !== (GB = ZB[nB]) && void 0 !== GB ? GB : null,
              url: (0, OB.k)(nB)
            }
          }))
        }(SB, PB, BI, (lB - 1) * pB, ZB) : [],
        ZI = !bB && null === AB,
        TI = !ZI && !bB && 0 === II.length,
        JI = null !== (IB = null === AB || void 0 === AB ? void 0 : AB.totalPages) && void 0 !== IB ? IB : 1;
      return (0, YB.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, YB.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, YB.jsx)("h1", {
            className: "StudioPageTitle",
            children: ZB("studio:leaderboard")
          })
        }), (0, YB.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!VB && (0, YB.jsx)("div", {
            children: ZB("studio:leaderboardBanner")
          }), VB && (0, YB.jsx)("div", {
            children: ZB("studio:leaderboardDormantBanner")
          }), (0, YB.jsx)("div", {
            children: ZB("studio:leaderboardMetricsBanner", {
              days: jB
            })
          })]
        }), DB && (0, YB.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: iB.map((BB => (0, YB.jsx)(qB.V, {
            active: eB === BB.scope,
            onClick: () => {
              EB({
                scope: BB.scope,
                category: fB,
                page: 1
              })
            },
            children: ZB(BB.title)
          }, BB.scope)))
        }), (0, YB.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, YB.jsx)(qB.V, {
            active: null === fB,
            onClick: () => {
              EB({
                scope: eB,
                category: null,
                page: 1
              })
            },
            children: ZB("studio:leaderboardAllCategories")
          }), GB.ab.map((BB => (0, YB.jsx)(qB.V, {
            active: fB === BB,
            onClick: () => {
              EB({
                scope: eB,
                category: BB,
                page: 1
              })
            },
            children: (0, GB.pb)(BB)
          }, BB)))]
        }), ZI && (0, YB.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, YB.jsx)(WB.d, {})
        }), bB && (0, YB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ZB("studio:failedToLoadLeaderboard")
        }), TI && (0, YB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ZB("studio:leaderboardEmpty")
        }), !ZI && !bB && !TI && (0, YB.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, YB.jsx)(UB.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: ZB("general:game")
            }, {
              key: "owner",
              header: ZB("general:owner")
            }, ...null === fB ? [{
              key: "category",
              header: ZB("general:category")
            }] : [], ...DB ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: ZB("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: ZB("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: ZB("studio:leaderboardSessionsPerPlayer")
            }, ...VB ? [] : [{
              key: "ccu",
              header: ZB("studio:metricCcu")
            }], {
              key: "favourites",
              header: ZB("general:favourites")
            }],
            rows: II,
            getRowKey: BB => BB.key,
            renderRow: BB => (0, YB.jsxs)("tr", {
              onClick: () => {
                JB(BB.url)
              },
              children: [(0, YB.jsx)(RB, {
                position: BB.position
              }), (0, YB.jsx)("td", {
                children: (0, YB.jsx)(sB.e, {
                  thumbnail: BB.thumbnail,
                  name: BB.name
                })
              }), (0, YB.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === BB.owner && "-", null !== BB.owner && (0, YB.jsx)(gB.f, {
                  playerSocialPreview: BB.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === fB && (0, YB.jsx)("td", {
                children: (0, GB.pb)(BB.category)
              }), DB && (0, YB.jsx)(mB, {
                discoverability: BB.discoverability
              }), (0, YB.jsx)(rB, {
                discoverability: BB.discoverability
              }), !VB && (0, YB.jsx)("td", {
                children: null !== BB.ccu ? (0, kB.J)(BB.ccu) : "-"
              }), (0, YB.jsx)("td", {
                children: null !== BB.favourites ? (0, kB.J)(BB.favourites) : "-"
              })]
            })
          })
        }), !bB && (0, YB.jsx)(yB.e, {
          className: "AnimFadeIn",
          page: lB,
          totalPages: JI,
          onSetPage: BB => {
            EB({
              scope: eB,
              category: fB,
              page: BB
            })
          }
        })]
      })
    }
  },
  5072: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      e: () => oB
    });
    var TB = ZB(1605),
      JB = ZB(1153);

    function oB(BB) {
      let {
        thumbnail: IB,
        name: ZB
      } = BB;
      return (0, JB.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, JB.jsx)("div", {
          className: "StudioTableThumbnail",
          children: IB
        }), (0, JB.jsx)("span", {
          className: "StudioTableGameName",
          children: ZB
        })]
      })
    }

    function GB(BB) {
      let {
        game: IB
      } = BB;
      return (0, JB.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, TB.g)(IB),
        alt: ""
      })
    }
  },
  6565: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    const TB = {
      1: ZB(6570),
      2: ZB(6576),
      3: ZB(6583)
    }
  },
  5065: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(1153);

    function vB(BB) {
      let {
        columns: IB,
        rows: ZB,
        getRowKey: JB,
        renderRow: vB,
        className: kB
      } = BB;
      return (0, GB.jsxs)("table", {
        className: oB()("Table", kB),
        children: [(0, GB.jsx)("thead", {
          children: (0, GB.jsx)("tr", {
            children: IB.map((BB => (0, GB.jsx)("th", {
              children: BB.header
            }, BB.key)))
          })
        }), (0, GB.jsx)("tbody", {
          children: ZB.map((BB => (0, GB.jsx)(TB.Fragment, {
            children: vB(BB)
          }, JB(BB))))
        })]
      })
    }
  },
  5053: () => {},
  6570: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6576: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6583: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);