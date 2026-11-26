export const id = 115;
export const ids = [115];
export const modules = {
  5392: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => zB
    });
    var YB = GB(1090),
      DB = GB.n(YB),
      QB = GB(1383),
      oB = GB(1375),
      jB = GB(3944),
      yB = GB(120),
      JB = GB(3982),
      MB = GB(3968),
      PB = GB(1282);

    function zB(BB) {
      let {
        game: OB
      } = BB;
      const GB = (0, yB.is99NightsCrazyGamesBundle)() ? "large" : "small",
        YB = (0, JB.f)(OB, GB),
        zB = (0, jB.e)(YB),
        lB = void 0 !== zB.blurhash;
      return (0, PB.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [zB.isLoading && !lB && (0, PB.jsx)(oB.b, {
          loaderType: "Secondary"
        }), !zB.failed && (null !== zB.src || lB) && (0, PB.jsx)("div", {
          className: DB()("SchematicImage", MB.h, {
            SchematicImageFadeIn: zB.fadeIn && !lB
          }),
          style: (0, MB.e)(zB),
          children: (0, PB.jsx)(MB.d, {
            image: zB
          })
        }), zB.failed && (0, PB.jsx)("div", {
          className: "SchematicImageError",
          children: (0, PB.jsx)(QB.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  7050: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => XB
    });
    GB(5386);
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(331),
      jB = GB(1061),
      yB = GB(1217),
      JB = GB(1044),
      MB = GB(1175),
      PB = GB(1540),
      zB = GB(3994),
      lB = GB(1112),
      pB = GB(5392),
      qB = GB(2874),
      ZB = GB(1485),
      NB = GB(4982),
      RB = GB(5396),
      WB = GB(1375),
      AB = GB(1560),
      VB = GB(4975),
      SB = GB(2733),
      nB = GB(5402),
      UB = GB(6920),
      fB = GB(1586),
      kB = GB(1282);
    const dB = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      KB = 25,
      uB = "scope",
      mB = "category",
      IB = "customGames";
    const FB = 7,
      iB = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function LB(BB) {
      let {
        position: OB
      } = BB;
      const GB = UB.c[OB];
      return (0, kB.jsxs)("td", {
        className: QB()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== GB,
          [`StudioLeaderboardTopPosition${OB}`]: void 0 !== GB
        }),
        children: [void 0 !== GB && (0, kB.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: GB,
          alt: ""
        }), OB]
      })
    }

    function gB(BB) {
      let {
        discoverability: OB
      } = BB;
      const {
        playsPerDay: GB,
        avgPlaytimeMinutes: DB,
        retention: QB
      } = null === OB ? iB : (0, zB.j)(OB);
      return (0, kB.jsxs)(YB.Fragment, {
        children: [(0, kB.jsx)("td", {
          children: null !== GB ? (0, zB.b)(GB) : "-"
        }), (0, kB.jsx)("td", {
          children: null !== DB ? (0, zB.e)(DB) : "-"
        }), (0, kB.jsx)("td", {
          children: null !== QB ? (0, zB.g)(QB) : "-"
        })]
      })
    }

    function rB(BB) {
      let {
        discoverability: OB
      } = BB;
      return (0, kB.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === OB || void 0 === OB ? void 0 : OB.engagementScore) ? (0, yB.U)(Math.round(OB.engagementScore)) : "-"
      })
    }

    function XB() {
      var BB, OB;
      const {
        t: GB
      } = (0, MB.H)(), DB = (0, AB.useNavigatePreserveSearch)(), {
        userContext: QB,
        isUserContextUpdating: UB
      } = (0, lB.d)(), iB = (0, SB.o)(), [XB, wB] = (0, VB.l)(), EB = (cB = XB.get(uB), dB.some((BB => BB.scope === cB)) ? cB : IB);
      var cB;
      const hB = function(BB) {
          return oB.Y.includes(BB) ? BB : null
        }(XB.get(mB)),
        aB = (0, VB.h)(XB.get(VB.d)),
        [eB, TB] = (0, YB.useState)(null),
        [bB, CB] = (0, YB.useState)(!1);

      function HB(BB) {
        wB((OB => {
          (0, VB.i)(OB, uB, BB.scope === IB ? null : BB.scope), (0, VB.i)(OB, mB, BB.category), (0, VB.k)(OB, BB.page)
        }))
      }
      const vB = !UB && QB.playerHasRank("developer"),
        sB = vB && "allGames" === EB,
        xB = vB && "dormantGames" === EB;
      (0, YB.useEffect)((() => {
        if (UB) return;
        let BB = !1;
        return TB(null), CB(!1), PB.b.getPublishedGamePreviews(QB, {
          searchQuery: null,
          pageNumber: aB,
          pageSize: KB,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== hB ? [hB] : [],
          upAndComing: !1,
          dormantGames: xB,
          sortByEngagementScore: !0,
          firstPartyGameNames: sB ? JB.b : void 0,
          includeOwners: !0
        }).then((OB => {
          BB || TB(OB)
        })).catch((OB => {
          console.error("Failed to load the studio leaderboard", OB), BB || CB(!0)
        })), () => {
          BB = !0
        }
      }), [UB, sB, xB, hB, aB, QB]);
      const tB = null !== (BB = null === eB || void 0 === eB ? void 0 : eB.results) && void 0 !== BB ? BB : null,
        BO = function(BB, OB, GB) {
          const [DB, QB] = (0, YB.useState)({}), oB = GB ? (null !== BB && void 0 !== BB ? BB : []).flatMap((BB => "firstPartyGame" === BB.type ? [(0, jB.g)(BB.gameNameWithVariation, !0)] : [])).join(",") : "", yB = (0, YB.useMemo)((() => "" === oB ? [] : oB.split(",")), [oB]);
          return (0, YB.useEffect)((() => {
            if (0 === yB.length) return void QB({});
            let BB = !1;
            return PB.b.getGamesByAnalyticsIds(OB, yB).then((OB => {
              BB || QB(OB)
            })).catch((BB => {
              console.error("Failed to load first party discoverability for the studio leaderboard", BB)
            })), () => {
              BB = !0
            }
          }), [yB, OB]), DB
        }(tB, QB, vB),
        OO = null !== tB ? function(BB, OB, GB, YB, DB) {
          return BB.map(((BB, QB) => {
            var oB;
            const yB = YB + QB + 1;
            if ("customGame" === BB.type) {
              const OB = BB.preview;
              return {
                key: OB.schematicId,
                position: yB,
                thumbnail: (0, kB.jsx)(pB.d, {
                  game: OB
                }),
                name: OB.name,
                owner: BB.owner,
                category: OB.gameCategory,
                ccu: OB.ccu,
                favourites: OB.favourites,
                discoverability: (0, zB.k)(OB) ? OB : null,
                url: (0, fB.w)((0, jB.e)(OB.schematicId))
              }
            }
            const JB = BB.gameNameWithVariation,
              MB = (0, jB.g)(JB, !0);
            return {
              key: JB,
              position: yB,
              thumbnail: (0, kB.jsx)(nB.c, {
                game: JB
              }),
              name: (0, fB.s)(JB, DB),
              owner: null,
              category: (0, fB.k)(JB),
              ccu: (0, SB.d)(JB, OB),
              favourites: null,
              discoverability: null !== (oB = GB[MB]) && void 0 !== oB ? oB : null,
              url: (0, fB.w)(MB)
            }
          }))
        }(tB, iB, BO, (aB - 1) * KB, GB) : [],
        GO = !bB && null === eB,
        YO = !GO && !bB && 0 === OO.length,
        DO = null !== (OB = null === eB || void 0 === eB ? void 0 : eB.totalPages) && void 0 !== OB ? OB : 1;
      return (0, kB.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, kB.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, kB.jsx)("h1", {
            className: "StudioPageTitle",
            children: GB("studio:leaderboard")
          })
        }), (0, kB.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!xB && (0, kB.jsx)("div", {
            children: GB("studio:leaderboardBanner")
          }), xB && (0, kB.jsx)("div", {
            children: GB("studio:leaderboardDormantBanner")
          }), (0, kB.jsx)("div", {
            children: GB("studio:leaderboardMetricsBanner", {
              days: FB
            })
          })]
        }), vB && (0, kB.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: dB.map((BB => (0, kB.jsx)(ZB.Z, {
            active: EB === BB.scope,
            onClick: () => {
              HB({
                scope: BB.scope,
                category: hB,
                page: 1
              })
            },
            children: GB(BB.title)
          }, BB.scope)))
        }), (0, kB.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, kB.jsx)(ZB.Z, {
            active: null === hB,
            onClick: () => {
              HB({
                scope: EB,
                category: null,
                page: 1
              })
            },
            children: GB("studio:leaderboardAllCategories")
          }), oB.Y.map((BB => (0, kB.jsx)(ZB.Z, {
            active: hB === BB,
            onClick: () => {
              HB({
                scope: EB,
                category: BB,
                page: 1
              })
            },
            children: (0, oB.hb)(BB)
          }, BB)))]
        }), GO && (0, kB.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, kB.jsx)(WB.b, {})
        }), bB && (0, kB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: GB("studio:failedToLoadLeaderboard")
        }), YO && (0, kB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: GB("studio:leaderboardEmpty")
        }), !GO && !bB && !YO && (0, kB.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, kB.jsx)(RB.d, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: GB("general:game")
            }, {
              key: "owner",
              header: GB("general:owner")
            }, ...null === hB ? [{
              key: "category",
              header: GB("general:category")
            }] : [], ...vB ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: GB("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: GB("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: GB("studio:leaderboardSessionsPerPlayer")
            }, ...xB ? [] : [{
              key: "ccu",
              header: GB("studio:metricCcu")
            }], {
              key: "favourites",
              header: GB("general:favourites")
            }],
            rows: OO,
            getRowKey: BB => BB.key,
            renderRow: BB => (0, kB.jsxs)("tr", {
              onClick: () => {
                DB(BB.url)
              },
              children: [(0, kB.jsx)(LB, {
                position: BB.position
              }), (0, kB.jsx)("td", {
                children: (0, kB.jsx)(nB.f, {
                  thumbnail: BB.thumbnail,
                  name: BB.name
                })
              }), (0, kB.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === BB.owner && "-", null !== BB.owner && (0, kB.jsx)(qB.g, {
                  playerSocialPreview: BB.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === hB && (0, kB.jsx)("td", {
                children: (0, oB.hb)(BB.category)
              }), vB && (0, kB.jsx)(rB, {
                discoverability: BB.discoverability
              }), (0, kB.jsx)(gB, {
                discoverability: BB.discoverability
              }), !xB && (0, kB.jsx)("td", {
                children: null !== BB.ccu ? (0, yB.U)(BB.ccu) : "-"
              }), (0, kB.jsx)("td", {
                children: null !== BB.favourites ? (0, yB.U)(BB.favourites) : "-"
              })]
            })
          })
        }), !bB && (0, kB.jsx)(NB.b, {
          className: "AnimFadeIn",
          page: aB,
          totalPages: DO,
          onSetPage: BB => {
            HB({
              scope: EB,
              category: hB,
              page: BB
            })
          }
        })]
      })
    }
  },
  5402: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      f: () => QB
    });
    var YB = GB(1586),
      DB = GB(1282);

    function QB(BB) {
      let {
        thumbnail: OB,
        name: GB
      } = BB;
      return (0, DB.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, DB.jsx)("div", {
          className: "StudioTableThumbnail",
          children: OB
        }), (0, DB.jsx)("span", {
          className: "StudioTableGameName",
          children: GB
        })]
      })
    }

    function oB(BB) {
      let {
        game: OB
      } = BB;
      return (0, DB.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, YB.p)(OB),
        alt: ""
      })
    }
  },
  6920: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    const YB = {
      1: GB(6928),
      2: GB(6937),
      3: GB(6941)
    }
  },
  5396: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(1282);

    function jB(BB) {
      let {
        columns: OB,
        rows: GB,
        getRowKey: DB,
        renderRow: jB,
        className: yB
      } = BB;
      return (0, oB.jsxs)("table", {
        className: QB()("Table", yB),
        children: [(0, oB.jsx)("thead", {
          children: (0, oB.jsx)("tr", {
            children: OB.map((BB => (0, oB.jsx)("th", {
              children: BB.header
            }, BB.key)))
          })
        }), (0, oB.jsx)("tbody", {
          children: GB.map((BB => (0, oB.jsx)(YB.Fragment, {
            children: jB(BB)
          }, DB(BB))))
        })]
      })
    }
  },
  5386: () => {},
  6928: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6937: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6941: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);