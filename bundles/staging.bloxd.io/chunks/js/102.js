export const id = 102;
export const ids = [102];
export const modules = {
  5065: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => kS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(1127),
      xS = gS(1419),
      NS = gS(3639),
      qS = gS(138),
      uS = gS(3676),
      IS = gS(3665),
      fS = gS(1181);

    function kS(SS) {
      let {
        game: HS
      } = SS;
      const gS = (0, qS.j)() ? "large" : "small",
        tS = (0, uS.c)(HS, gS),
        kS = (0, NS.f)(tS),
        aS = void 0 !== kS.blurhash;
      return (0, fS.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [kS.isLoading && !aS && (0, fS.jsx)(xS.c, {
          loaderType: "Secondary"
        }), !kS.failed && (null !== kS.src || aS) && (0, fS.jsx)("div", {
          className: bS()("SchematicImage", IS.h, {
            SchematicImageFadeIn: kS.fadeIn && !aS
          }),
          style: (0, IS.g)(kS),
          children: (0, fS.jsx)(IS.c, {
            image: kS
          })
        }), kS.failed && (0, fS.jsx)("div", {
          className: "SchematicImageError",
          children: (0, fS.jsx)(XS.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6722: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => WS
    });
    gS(5060);
    var tS = gS(64),
      bS = gS(1121),
      XS = gS.n(bS),
      xS = gS(369),
      NS = gS(1097),
      qS = gS(1309),
      uS = gS(1081),
      IS = gS(1281),
      fS = gS(1588),
      kS = gS(3687),
      aS = gS(1211),
      KS = gS(5065),
      jS = gS(2725),
      GS = gS(1528),
      CS = gS(4697),
      nS = gS(5072),
      PS = gS(1419),
      QS = gS(1608),
      DS = gS(4693),
      wS = gS(2641),
      hS = gS(5074),
      ZS = gS(6629),
      JS = gS(1641),
      OS = gS(1181);
    const dS = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      cS = 25,
      vS = "scope",
      ES = "category",
      LS = "customGames";
    const YS = 7,
      AS = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function yS(SS) {
      let {
        position: HS
      } = SS;
      const gS = ZS.e[HS];
      return (0, OS.jsxs)("td", {
        className: XS()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== gS,
          [`StudioLeaderboardTopPosition${HS}`]: void 0 !== gS
        }),
        children: [void 0 !== gS && (0, OS.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: gS,
          alt: ""
        }), HS]
      })
    }

    function VS(SS) {
      let {
        discoverability: HS
      } = SS;
      const {
        playsPerDay: gS,
        avgPlaytimeMinutes: bS,
        retention: XS
      } = null === HS ? AS : (0, kS.j)(HS);
      return (0, OS.jsxs)(tS.Fragment, {
        children: [(0, OS.jsx)("td", {
          children: null !== gS ? (0, kS.c)(gS) : "-"
        }), (0, OS.jsx)("td", {
          children: null !== bS ? (0, kS.g)(bS) : "-"
        }), (0, OS.jsx)("td", {
          children: null !== XS ? (0, kS.h)(XS) : "-"
        })]
      })
    }

    function iS(SS) {
      let {
        discoverability: HS
      } = SS;
      return (0, OS.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === HS || void 0 === HS ? void 0 : HS.engagementScore) ? (0, qS.R)(Math.round(HS.engagementScore)) : "-"
      })
    }

    function WS() {
      var SS, HS;
      const {
        t: gS
      } = (0, IS.F)(), bS = (0, QS.useNavigatePreserveSearch)(), {
        userContext: XS,
        isUserContextUpdating: ZS
      } = (0, aS.b)(), AS = (0, wS.k)(), [WS, zS] = (0, DS.m)(), US = (pS = WS.get(vS), dS.some((SS => SS.scope === pS)) ? pS : LS);
      var pS;
      const sS = function(SS) {
          return xS.X.includes(SS) ? SS : null
        }(WS.get(ES)),
        BS = (0, DS.e)(WS.get(DS.c)),
        [MS, FS] = (0, tS.useState)(null),
        [RS, TS] = (0, tS.useState)(!1);

      function oS(SS) {
        zS((HS => {
          (0, DS.f)(HS, vS, SS.scope === LS ? null : SS.scope), (0, DS.f)(HS, ES, SS.category), (0, DS.i)(HS, SS.page)
        }))
      }
      const lS = !ZS && XS.playerHasRank("developer"),
        mS = lS && "allGames" === US,
        eS = lS && "dormantGames" === US;
      (0, tS.useEffect)((() => {
        if (ZS) return;
        let SS = !1;
        return FS(null), TS(!1), fS.b.getPublishedGamePreviews(XS, {
          searchQuery: null,
          pageNumber: BS,
          pageSize: cS,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== sS ? [sS] : [],
          upAndComing: !1,
          dormantGames: eS,
          sortByEngagementScore: !0,
          firstPartyGameNames: mS ? uS.b : void 0,
          includeOwners: !0
        }).then((HS => {
          SS || FS(HS)
        })).catch((HS => {
          console.error("Failed to load the studio leaderboard", HS), SS || TS(!0)
        })), () => {
          SS = !0
        }
      }), [ZS, mS, eS, sS, BS, XS]);
      const rS = null !== (SS = null === MS || void 0 === MS ? void 0 : MS.results) && void 0 !== SS ? SS : null,
        SH = function(SS, HS, gS) {
          const [bS, XS] = (0, tS.useState)({}), xS = gS ? (null !== SS && void 0 !== SS ? SS : []).flatMap((SS => "firstPartyGame" === SS.type ? [(0, NS.c)(SS.gameNameWithVariation, !0)] : [])).join(",") : "", qS = (0, tS.useMemo)((() => "" === xS ? [] : xS.split(",")), [xS]);
          return (0, tS.useEffect)((() => {
            if (0 === qS.length) return void XS({});
            let SS = !1;
            return fS.b.getGamesByAnalyticsIds(HS, qS).then((HS => {
              SS || XS(HS)
            })).catch((SS => {
              console.error("Failed to load first party discoverability for the studio leaderboard", SS)
            })), () => {
              SS = !0
            }
          }), [qS, HS]), bS
        }(rS, XS, lS),
        HH = null !== rS ? function(SS, HS, gS, tS, bS) {
          return SS.map(((SS, XS) => {
            var xS;
            const qS = tS + XS + 1;
            if ("customGame" === SS.type) {
              const HS = SS.preview;
              return {
                key: HS.schematicId,
                position: qS,
                thumbnail: (0, OS.jsx)(KS.d, {
                  game: HS
                }),
                name: HS.name,
                owner: SS.owner,
                category: HS.gameCategory,
                ccu: HS.ccu,
                favourites: HS.favourites,
                discoverability: (0, kS.k)(HS) ? HS : null,
                url: (0, JS.p)((0, NS.b)(HS.schematicId))
              }
            }
            const uS = SS.gameNameWithVariation,
              IS = (0, NS.c)(uS, !0);
            return {
              key: uS,
              position: qS,
              thumbnail: (0, OS.jsx)(hS.e, {
                game: uS
              }),
              name: (0, JS.m)(uS, bS),
              owner: null,
              category: (0, JS.c)(uS),
              ccu: (0, wS.d)(uS, HS),
              favourites: null,
              discoverability: null !== (xS = gS[IS]) && void 0 !== xS ? xS : null,
              url: (0, JS.p)(IS)
            }
          }))
        }(rS, AS, SH, (BS - 1) * cS, gS) : [],
        gH = !RS && null === MS,
        tH = !gH && !RS && 0 === HH.length,
        bH = null !== (HS = null === MS || void 0 === MS ? void 0 : MS.totalPages) && void 0 !== HS ? HS : 1;
      return (0, OS.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, OS.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, OS.jsx)("h1", {
            className: "StudioPageTitle",
            children: gS("studio:leaderboard")
          })
        }), (0, OS.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!eS && (0, OS.jsx)("div", {
            children: gS("studio:leaderboardBanner")
          }), eS && (0, OS.jsx)("div", {
            children: gS("studio:leaderboardDormantBanner")
          }), (0, OS.jsx)("div", {
            children: gS("studio:leaderboardMetricsBanner", {
              days: YS
            })
          })]
        }), lS && (0, OS.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: dS.map((SS => (0, OS.jsx)(GS.P, {
            active: US === SS.scope,
            onClick: () => {
              oS({
                scope: SS.scope,
                category: sS,
                page: 1
              })
            },
            children: gS(SS.title)
          }, SS.scope)))
        }), (0, OS.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, OS.jsx)(GS.P, {
            active: null === sS,
            onClick: () => {
              oS({
                scope: US,
                category: null,
                page: 1
              })
            },
            children: gS("studio:leaderboardAllCategories")
          }), xS.X.map((SS => (0, OS.jsx)(GS.P, {
            active: sS === SS,
            onClick: () => {
              oS({
                scope: US,
                category: SS,
                page: 1
              })
            },
            children: (0, xS.hb)(SS)
          }, SS)))]
        }), gH && (0, OS.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, OS.jsx)(PS.c, {})
        }), RS && (0, OS.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: gS("studio:failedToLoadLeaderboard")
        }), tH && (0, OS.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: gS("studio:leaderboardEmpty")
        }), !gH && !RS && !tH && (0, OS.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, OS.jsx)(nS.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: gS("general:game")
            }, {
              key: "owner",
              header: gS("general:owner")
            }, ...null === sS ? [{
              key: "category",
              header: gS("general:category")
            }] : [], ...lS ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: gS("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: gS("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: gS("studio:leaderboardSessionsPerPlayer")
            }, ...eS ? [] : [{
              key: "ccu",
              header: gS("studio:metricCcu")
            }], {
              key: "favourites",
              header: gS("general:favourites")
            }],
            rows: HH,
            getRowKey: SS => SS.key,
            renderRow: SS => (0, OS.jsxs)("tr", {
              onClick: () => {
                bS(SS.url)
              },
              children: [(0, OS.jsx)(yS, {
                position: SS.position
              }), (0, OS.jsx)("td", {
                children: (0, OS.jsx)(hS.f, {
                  thumbnail: SS.thumbnail,
                  name: SS.name
                })
              }), (0, OS.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === SS.owner && "-", null !== SS.owner && (0, OS.jsx)(jS.g, {
                  playerSocialPreview: SS.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === sS && (0, OS.jsx)("td", {
                children: (0, xS.hb)(SS.category)
              }), lS && (0, OS.jsx)(iS, {
                discoverability: SS.discoverability
              }), (0, OS.jsx)(VS, {
                discoverability: SS.discoverability
              }), !eS && (0, OS.jsx)("td", {
                children: null !== SS.ccu ? (0, qS.R)(SS.ccu) : "-"
              }), (0, OS.jsx)("td", {
                children: null !== SS.favourites ? (0, qS.R)(SS.favourites) : "-"
              })]
            })
          })
        }), !RS && (0, OS.jsx)(CS.c, {
          className: "AnimFadeIn",
          page: BS,
          totalPages: bH,
          onSetPage: SS => {
            oS({
              scope: US,
              category: sS,
              page: SS
            })
          }
        })]
      })
    }
  },
  5074: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      f: () => XS
    });
    var tS = gS(1641),
      bS = gS(1181);

    function XS(SS) {
      let {
        thumbnail: HS,
        name: gS
      } = SS;
      return (0, bS.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, bS.jsx)("div", {
          className: "StudioTableThumbnail",
          children: HS
        }), (0, bS.jsx)("span", {
          className: "StudioTableGameName",
          children: gS
        })]
      })
    }

    function xS(SS) {
      let {
        game: HS
      } = SS;
      return (0, bS.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, tS.i)(HS),
        alt: ""
      })
    }
  },
  6629: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS
    });
    const tS = {
      1: gS(6631),
      2: gS(6633),
      3: gS(6635)
    }
  },
  5072: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS
    });
    var tS = gS(64),
      bS = gS(1121),
      XS = gS.n(bS),
      xS = gS(1181);

    function NS(SS) {
      let {
        columns: HS,
        rows: gS,
        getRowKey: bS,
        renderRow: NS,
        className: qS
      } = SS;
      return (0, xS.jsxs)("table", {
        className: XS()("Table", qS),
        children: [(0, xS.jsx)("thead", {
          children: (0, xS.jsx)("tr", {
            children: HS.map((SS => (0, xS.jsx)("th", {
              children: SS.header
            }, SS.key)))
          })
        }), (0, xS.jsx)("tbody", {
          children: gS.map((SS => (0, xS.jsx)(tS.Fragment, {
            children: NS(SS)
          }, bS(SS))))
        })]
      })
    }
  },
  5060: () => {},
  6631: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6633: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6635: SS => {
    SS.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);