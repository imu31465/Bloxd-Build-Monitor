export const id = 104;
export const ids = [104];
export const modules = {
  5002: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => rB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(1108),
      IB = zB(1369),
      NB = zB(3606),
      uB = zB(145),
      UB = zB(3645),
      aB = zB(3634),
      pB = zB(1148);

    function rB(BB) {
      let {
        game: jB
      } = BB;
      const zB = (0, uB.is99NightsCrazyGamesBundle)() ? "large" : "small",
        QB = (0, UB.e)(jB, zB),
        rB = (0, NB.f)(QB),
        sB = void 0 !== rB.blurhash;
      return (0, pB.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [rB.isLoading && !sB && (0, pB.jsx)(IB.e, {
          loaderType: "Secondary"
        }), !rB.failed && (null !== rB.src || sB) && (0, pB.jsx)("div", {
          className: nB()("SchematicImage", aB.h, {
            SchematicImageFadeIn: rB.fadeIn && !sB
          }),
          style: (0, aB.g)(rB),
          children: (0, pB.jsx)(aB.c, {
            image: rB
          })
        }), rB.failed && (0, pB.jsx)("div", {
          className: "SchematicImageError",
          children: (0, pB.jsx)(dB.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6460: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => AB
    });
    zB(4999);
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(363),
      NB = zB(1073),
      uB = zB(1263),
      UB = zB(1060),
      aB = zB(1240),
      pB = zB(1532),
      rB = zB(3657),
      sB = zB(1169),
      JB = zB(5002),
      mB = zB(2711),
      yB = zB(1478),
      kB = zB(4676),
      GB = zB(5004),
      LB = zB(1369),
      gB = zB(1543),
      tB = zB(4673),
      SB = zB(2624),
      MB = zB(5012),
      EB = zB(6382),
      iB = zB(1562),
      qB = zB(1148);
    const fB = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      oB = 25,
      HB = "scope",
      DB = "category",
      FB = "customGames";
    const YB = 7,
      VB = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function hB(BB) {
      let {
        position: jB
      } = BB;
      const zB = EB.d[jB];
      return (0, qB.jsxs)("td", {
        className: dB()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== zB,
          [`StudioLeaderboardTopPosition${jB}`]: void 0 !== zB
        }),
        children: [void 0 !== zB && (0, qB.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: zB,
          alt: ""
        }), jB]
      })
    }

    function XB(BB) {
      let {
        discoverability: jB
      } = BB;
      const {
        playsPerDay: zB,
        avgPlaytimeMinutes: nB,
        retention: dB
      } = null === jB ? VB : (0, rB.l)(jB);
      return (0, qB.jsxs)(QB.Fragment, {
        children: [(0, qB.jsx)("td", {
          children: null !== zB ? (0, rB.b)(zB) : "-"
        }), (0, qB.jsx)("td", {
          children: null !== nB ? (0, rB.f)(nB) : "-"
        }), (0, qB.jsx)("td", {
          children: null !== dB ? (0, rB.i)(dB) : "-"
        })]
      })
    }

    function ZB(BB) {
      let {
        discoverability: jB
      } = BB;
      return (0, qB.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === jB || void 0 === jB ? void 0 : jB.engagementScore) ? (0, uB.J)(Math.round(jB.engagementScore)) : "-"
      })
    }

    function AB() {
      var BB, jB;
      const {
        t: zB
      } = (0, aB.D)(), nB = (0, gB.useNavigatePreserveSearch)(), {
        userContext: dB,
        isUserContextUpdating: EB
      } = (0, sB.d)(), VB = (0, SB.m)(), [AB, TB] = (0, tB.k)(), PB = (WB = AB.get(HB), fB.some((BB => BB.scope === WB)) ? WB : FB);
      var WB;
      const eB = function(BB) {
          return IB.Q.includes(BB) ? BB : null
        }(AB.get(DB)),
        lB = (0, tB.d)(AB.get(tB.c)),
        [wB, xB] = (0, QB.useState)(null),
        [KB, CB] = (0, QB.useState)(!1);

      function cB(BB) {
        TB((jB => {
          (0, tB.f)(jB, HB, BB.scope === FB ? null : BB.scope), (0, tB.f)(jB, DB, BB.category), (0, tB.i)(jB, BB.page)
        }))
      }
      const bB = !EB && dB.playerHasRank("developer"),
        vB = bB && "allGames" === PB,
        RB = bB && "dormantGames" === PB;
      (0, QB.useEffect)((() => {
        if (EB) return;
        let BB = !1;
        return xB(null), CB(!1), pB.b.getPublishedGamePreviews(dB, {
          searchQuery: null,
          pageNumber: lB,
          pageSize: oB,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== eB ? [eB] : [],
          upAndComing: !1,
          dormantGames: RB,
          sortByEngagementScore: !0,
          firstPartyGameNames: vB ? UB.c : void 0,
          includeOwners: !0
        }).then((jB => {
          BB || xB(jB)
        })).catch((jB => {
          console.error("Failed to load the studio leaderboard", jB), BB || CB(!0)
        })), () => {
          BB = !0
        }
      }), [EB, vB, RB, eB, lB, dB]);
      const OB = null !== (BB = null === wB || void 0 === wB ? void 0 : wB.results) && void 0 !== BB ? BB : null,
        Bj = function(BB, jB, zB) {
          const [nB, dB] = (0, QB.useState)({}), IB = zB ? (null !== BB && void 0 !== BB ? BB : []).flatMap((BB => "firstPartyGame" === BB.type ? [(0, NB.h)(BB.gameNameWithVariation, !0)] : [])).join(",") : "", uB = (0, QB.useMemo)((() => "" === IB ? [] : IB.split(",")), [IB]);
          return (0, QB.useEffect)((() => {
            if (0 === uB.length) return void dB({});
            let BB = !1;
            return pB.b.getGamesByAnalyticsIds(jB, uB).then((jB => {
              BB || dB(jB)
            })).catch((BB => {
              console.error("Failed to load first party discoverability for the studio leaderboard", BB)
            })), () => {
              BB = !0
            }
          }), [uB, jB]), nB
        }(OB, dB, bB),
        jj = null !== OB ? function(BB, jB, zB, QB, nB) {
          return BB.map(((BB, dB) => {
            var IB;
            const uB = QB + dB + 1;
            if ("customGame" === BB.type) {
              const jB = BB.preview;
              return {
                key: jB.schematicId,
                position: uB,
                thumbnail: (0, qB.jsx)(JB.c, {
                  game: jB
                }),
                name: jB.name,
                owner: BB.owner,
                category: jB.gameCategory,
                ccu: jB.ccu,
                favourites: jB.favourites,
                discoverability: (0, rB.n)(jB) ? jB : null,
                url: (0, iB.s)((0, NB.e)(jB.schematicId))
              }
            }
            const UB = BB.gameNameWithVariation,
              aB = (0, NB.h)(UB, !0);
            return {
              key: UB,
              position: uB,
              thumbnail: (0, qB.jsx)(MB.d, {
                game: UB
              }),
              name: (0, iB.p)(UB, nB),
              owner: null,
              category: (0, iB.d)(UB),
              ccu: (0, SB.e)(UB, jB),
              favourites: null,
              discoverability: null !== (IB = zB[aB]) && void 0 !== IB ? IB : null,
              url: (0, iB.s)(aB)
            }
          }))
        }(OB, VB, Bj, (lB - 1) * oB, zB) : [],
        zj = !KB && null === wB,
        Qj = !zj && !KB && 0 === jj.length,
        nj = null !== (jB = null === wB || void 0 === wB ? void 0 : wB.totalPages) && void 0 !== jB ? jB : 1;
      return (0, qB.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, qB.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, qB.jsx)("h1", {
            className: "StudioPageTitle",
            children: zB("studio:leaderboard")
          })
        }), (0, qB.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!RB && (0, qB.jsx)("div", {
            children: zB("studio:leaderboardBanner")
          }), RB && (0, qB.jsx)("div", {
            children: zB("studio:leaderboardDormantBanner")
          }), (0, qB.jsx)("div", {
            children: zB("studio:leaderboardMetricsBanner", {
              days: YB
            })
          })]
        }), bB && (0, qB.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: fB.map((BB => (0, qB.jsx)(yB.M, {
            active: PB === BB.scope,
            onClick: () => {
              cB({
                scope: BB.scope,
                category: eB,
                page: 1
              })
            },
            children: zB(BB.title)
          }, BB.scope)))
        }), (0, qB.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, qB.jsx)(yB.M, {
            active: null === eB,
            onClick: () => {
              cB({
                scope: PB,
                category: null,
                page: 1
              })
            },
            children: zB("studio:leaderboardAllCategories")
          }), IB.Q.map((BB => (0, qB.jsx)(yB.M, {
            active: eB === BB,
            onClick: () => {
              cB({
                scope: PB,
                category: BB,
                page: 1
              })
            },
            children: (0, IB.$)(BB)
          }, BB)))]
        }), zj && (0, qB.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, qB.jsx)(LB.e, {})
        }), KB && (0, qB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: zB("studio:failedToLoadLeaderboard")
        }), Qj && (0, qB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: zB("studio:leaderboardEmpty")
        }), !zj && !KB && !Qj && (0, qB.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, qB.jsx)(GB.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: zB("general:game")
            }, {
              key: "owner",
              header: zB("general:owner")
            }, ...null === eB ? [{
              key: "category",
              header: zB("general:category")
            }] : [], ...bB ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: zB("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: zB("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: zB("studio:leaderboardSessionsPerPlayer")
            }, ...RB ? [] : [{
              key: "ccu",
              header: zB("studio:metricCcu")
            }], {
              key: "favourites",
              header: zB("general:favourites")
            }],
            rows: jj,
            getRowKey: BB => BB.key,
            renderRow: BB => (0, qB.jsxs)("tr", {
              onClick: () => {
                nB(BB.url)
              },
              children: [(0, qB.jsx)(hB, {
                position: BB.position
              }), (0, qB.jsx)("td", {
                children: (0, qB.jsx)(MB.f, {
                  thumbnail: BB.thumbnail,
                  name: BB.name
                })
              }), (0, qB.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === BB.owner && "-", null !== BB.owner && (0, qB.jsx)(mB.g, {
                  playerSocialPreview: BB.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === eB && (0, qB.jsx)("td", {
                children: (0, IB.$)(BB.category)
              }), bB && (0, qB.jsx)(ZB, {
                discoverability: BB.discoverability
              }), (0, qB.jsx)(XB, {
                discoverability: BB.discoverability
              }), !RB && (0, qB.jsx)("td", {
                children: null !== BB.ccu ? (0, uB.J)(BB.ccu) : "-"
              }), (0, qB.jsx)("td", {
                children: null !== BB.favourites ? (0, uB.J)(BB.favourites) : "-"
              })]
            })
          })
        }), !KB && (0, qB.jsx)(kB.d, {
          className: "AnimFadeIn",
          page: lB,
          totalPages: nj,
          onSetPage: BB => {
            cB({
              scope: PB,
              category: eB,
              page: BB
            })
          }
        })]
      })
    }
  },
  5012: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      f: () => dB
    });
    var QB = zB(1562),
      nB = zB(1148);

    function dB(BB) {
      let {
        thumbnail: jB,
        name: zB
      } = BB;
      return (0, nB.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, nB.jsx)("div", {
          className: "StudioTableThumbnail",
          children: jB
        }), (0, nB.jsx)("span", {
          className: "StudioTableGameName",
          children: zB
        })]
      })
    }

    function IB(BB) {
      let {
        game: jB
      } = BB;
      return (0, nB.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, QB.l)(jB),
        alt: ""
      })
    }
  },
  6382: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB
    });
    const QB = {
      1: zB(6385),
      2: zB(6387),
      3: zB(6390)
    }
  },
  5004: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(1148);

    function NB(BB) {
      let {
        columns: jB,
        rows: zB,
        getRowKey: nB,
        renderRow: NB,
        className: uB
      } = BB;
      return (0, IB.jsxs)("table", {
        className: dB()("Table", uB),
        children: [(0, IB.jsx)("thead", {
          children: (0, IB.jsx)("tr", {
            children: jB.map((BB => (0, IB.jsx)("th", {
              children: BB.header
            }, BB.key)))
          })
        }), (0, IB.jsx)("tbody", {
          children: zB.map((BB => (0, IB.jsx)(QB.Fragment, {
            children: NB(BB)
          }, nB(BB))))
        })]
      })
    }
  },
  4999: () => {},
  6385: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6387: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6390: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);