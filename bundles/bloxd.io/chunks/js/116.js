export const id = 116;
export const ids = [116];
export const modules = {
  5306: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => mM
    });
    var OM = iM(1116),
      SM = iM.n(OM),
      jM = iM(1398),
      aM = iM(1396),
      PM = iM(3902),
      nM = iM(119),
      QM = iM(3945),
      zM = iM(3934),
      LM = iM(1303);

    function mM(MM) {
      let {
        game: rM
      } = MM;
      const iM = (0, nM.is99NightsCrazyGamesBundle)() ? "large" : "small",
        OM = (0, QM.g)(rM, iM),
        mM = (0, PM.c)(OM),
        HM = void 0 !== mM.blurhash;
      return (0, LM.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [mM.isLoading && !HM && (0, LM.jsx)(aM.d, {
          loaderType: "Secondary"
        }), !mM.failed && (null !== mM.src || HM) && (0, LM.jsx)("div", {
          className: SM()("SchematicImage", zM.k, {
            SchematicImageFadeIn: mM.fadeIn && !HM
          }),
          style: (0, zM.h)(mM),
          children: (0, LM.jsx)(zM.e, {
            image: mM
          })
        }), mM.failed && (0, LM.jsx)("div", {
          className: "SchematicImageError",
          children: (0, LM.jsx)(jM.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  7012: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => fM
    });
    iM(5299);
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(313),
      PM = iM(1088),
      nM = iM(1229),
      QM = iM(1067),
      zM = iM(1188),
      LM = iM(1573),
      mM = iM(3955),
      HM = iM(1142),
      hM = iM(5306),
      JM = iM(2818),
      dM = iM(1520),
      yM = iM(4945),
      lM = iM(5309),
      EM = iM(1396),
      UM = iM(1591),
      GM = iM(4937),
      CM = iM(2721),
      eM = iM(5318),
      bM = iM(6869),
      wM = iM(1627),
      tM = iM(1303);
    const gM = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      uM = 25,
      RM = "scope",
      pM = "category",
      WM = "customGames";
    const sM = 7,
      DM = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function kM(MM) {
      let {
        position: rM
      } = MM;
      const iM = bM.e[rM];
      return (0, tM.jsxs)("td", {
        className: jM()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== iM,
          [`StudioLeaderboardTopPosition${rM}`]: void 0 !== iM
        }),
        children: [void 0 !== iM && (0, tM.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: iM,
          alt: ""
        }), rM]
      })
    }

    function ZM(MM) {
      let {
        discoverability: rM
      } = MM;
      const {
        playsPerDay: iM,
        avgPlaytimeMinutes: SM,
        retention: jM
      } = null === rM ? DM : (0, mM.i)(rM);
      return (0, tM.jsxs)(OM.Fragment, {
        children: [(0, tM.jsx)("td", {
          children: null !== iM ? (0, mM.b)(iM) : "-"
        }), (0, tM.jsx)("td", {
          children: null !== SM ? (0, mM.d)(SM) : "-"
        }), (0, tM.jsx)("td", {
          children: null !== jM ? (0, mM.g)(jM) : "-"
        })]
      })
    }

    function oM(MM) {
      let {
        discoverability: rM
      } = MM;
      return (0, tM.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === rM || void 0 === rM ? void 0 : rM.engagementScore) ? (0, nM.T)(Math.round(rM.engagementScore)) : "-"
      })
    }

    function fM() {
      var MM, rM;
      const {
        t: iM
      } = (0, zM.A)(), SM = (0, UM.useNavigatePreserveSearch)(), {
        userContext: jM,
        isUserContextUpdating: bM
      } = (0, HM.b)(), DM = (0, CM.q)(), [fM, YM] = (0, GM.k)(), NM = (AM = fM.get(RM), gM.some((MM => MM.scope === AM)) ? AM : WM);
      var AM;
      const xM = function(MM) {
          return aM.N.includes(MM) ? MM : null
        }(fM.get(pM)),
        vM = (0, GM.d)(fM.get(GM.c)),
        [FM, BM] = (0, OM.useState)(null),
        [XM, IM] = (0, OM.useState)(!1);

      function KM(MM) {
        YM((rM => {
          (0, GM.f)(rM, RM, MM.scope === WM ? null : MM.scope), (0, GM.f)(rM, pM, MM.category), (0, GM.h)(rM, MM.page)
        }))
      }
      const qM = !bM && jM.playerHasRank("developer"),
        TM = qM && "allGames" === NM,
        VM = qM && "dormantGames" === NM;
      (0, OM.useEffect)((() => {
        if (bM) return;
        let MM = !1;
        return BM(null), IM(!1), LM.c.getPublishedGamePreviews(jM, {
          searchQuery: null,
          pageNumber: vM,
          pageSize: uM,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== xM ? [xM] : [],
          upAndComing: !1,
          dormantGames: VM,
          sortByEngagementScore: !0,
          firstPartyGameNames: TM ? QM.b : void 0,
          includeOwners: !0
        }).then((rM => {
          MM || BM(rM)
        })).catch((rM => {
          console.error("Failed to load the studio leaderboard", rM), MM || IM(!0)
        })), () => {
          MM = !0
        }
      }), [bM, TM, VM, xM, vM, jM]);
      const cM = null !== (MM = null === FM || void 0 === FM ? void 0 : FM.results) && void 0 !== MM ? MM : null,
        Mr = function(MM, rM, iM) {
          const [SM, jM] = (0, OM.useState)({}), aM = iM ? (null !== MM && void 0 !== MM ? MM : []).flatMap((MM => "firstPartyGame" === MM.type ? [(0, PM.e)(MM.gameNameWithVariation, !0)] : [])).join(",") : "", nM = (0, OM.useMemo)((() => "" === aM ? [] : aM.split(",")), [aM]);
          return (0, OM.useEffect)((() => {
            if (0 === nM.length) return void jM({});
            let MM = !1;
            return LM.c.getGamesByAnalyticsIds(rM, nM).then((rM => {
              MM || jM(rM)
            })).catch((MM => {
              console.error("Failed to load first party discoverability for the studio leaderboard", MM)
            })), () => {
              MM = !0
            }
          }), [nM, rM]), SM
        }(cM, jM, qM),
        rr = null !== cM ? function(MM, rM, iM, OM, SM) {
          return MM.map(((MM, jM) => {
            var aM;
            const nM = OM + jM + 1;
            if ("customGame" === MM.type) {
              const rM = MM.preview;
              return {
                key: rM.schematicId,
                position: nM,
                thumbnail: (0, tM.jsx)(hM.b, {
                  game: rM
                }),
                name: rM.name,
                owner: MM.owner,
                category: rM.gameCategory,
                ccu: rM.ccu,
                favourites: rM.favourites,
                discoverability: (0, mM.k)(rM) ? rM : null,
                url: (0, wM.p)((0, PM.d)(rM.schematicId))
              }
            }
            const QM = MM.gameNameWithVariation,
              zM = (0, PM.e)(QM, !0);
            return {
              key: QM,
              position: nM,
              thumbnail: (0, tM.jsx)(eM.d, {
                game: QM
              }),
              name: (0, wM.n)(QM, SM),
              owner: null,
              category: (0, wM.e)(QM),
              ccu: (0, CM.e)(QM, rM),
              favourites: null,
              discoverability: null !== (aM = iM[zM]) && void 0 !== aM ? aM : null,
              url: (0, wM.p)(zM)
            }
          }))
        }(cM, DM, Mr, (vM - 1) * uM, iM) : [],
        ir = !XM && null === FM,
        Or = !ir && !XM && 0 === rr.length,
        Sr = null !== (rM = null === FM || void 0 === FM ? void 0 : FM.totalPages) && void 0 !== rM ? rM : 1;
      return (0, tM.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, tM.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, tM.jsx)("h1", {
            className: "StudioPageTitle",
            children: iM("studio:leaderboard")
          })
        }), (0, tM.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!VM && (0, tM.jsx)("div", {
            children: iM("studio:leaderboardBanner")
          }), VM && (0, tM.jsx)("div", {
            children: iM("studio:leaderboardDormantBanner")
          }), (0, tM.jsx)("div", {
            children: iM("studio:leaderboardMetricsBanner", {
              days: sM
            })
          })]
        }), qM && (0, tM.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: gM.map((MM => (0, tM.jsx)(dM.V, {
            active: NM === MM.scope,
            onClick: () => {
              KM({
                scope: MM.scope,
                category: xM,
                page: 1
              })
            },
            children: iM(MM.title)
          }, MM.scope)))
        }), (0, tM.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, tM.jsx)(dM.V, {
            active: null === xM,
            onClick: () => {
              KM({
                scope: NM,
                category: null,
                page: 1
              })
            },
            children: iM("studio:leaderboardAllCategories")
          }), aM.N.map((MM => (0, tM.jsx)(dM.V, {
            active: xM === MM,
            onClick: () => {
              KM({
                scope: NM,
                category: MM,
                page: 1
              })
            },
            children: (0, aM.W)(MM)
          }, MM)))]
        }), ir && (0, tM.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, tM.jsx)(EM.d, {})
        }), XM && (0, tM.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: iM("studio:failedToLoadLeaderboard")
        }), Or && (0, tM.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: iM("studio:leaderboardEmpty")
        }), !ir && !XM && !Or && (0, tM.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, tM.jsx)(lM.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: iM("general:game")
            }, {
              key: "owner",
              header: iM("general:owner")
            }, ...null === xM ? [{
              key: "category",
              header: iM("general:category")
            }] : [], ...qM ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: iM("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: iM("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: iM("studio:leaderboardSessionsPerPlayer")
            }, ...VM ? [] : [{
              key: "ccu",
              header: iM("studio:metricCcu")
            }], {
              key: "favourites",
              header: iM("general:favourites")
            }],
            rows: rr,
            getRowKey: MM => MM.key,
            renderRow: MM => (0, tM.jsxs)("tr", {
              onClick: () => {
                SM(MM.url)
              },
              children: [(0, tM.jsx)(kM, {
                position: MM.position
              }), (0, tM.jsx)("td", {
                children: (0, tM.jsx)(eM.f, {
                  thumbnail: MM.thumbnail,
                  name: MM.name
                })
              }), (0, tM.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === MM.owner && "-", null !== MM.owner && (0, tM.jsx)(JM.f, {
                  playerSocialPreview: MM.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === xM && (0, tM.jsx)("td", {
                children: (0, aM.W)(MM.category)
              }), qM && (0, tM.jsx)(oM, {
                discoverability: MM.discoverability
              }), (0, tM.jsx)(ZM, {
                discoverability: MM.discoverability
              }), !VM && (0, tM.jsx)("td", {
                children: null !== MM.ccu ? (0, nM.T)(MM.ccu) : "-"
              }), (0, tM.jsx)("td", {
                children: null !== MM.favourites ? (0, nM.T)(MM.favourites) : "-"
              })]
            })
          })
        }), !XM && (0, tM.jsx)(yM.d, {
          className: "AnimFadeIn",
          page: vM,
          totalPages: Sr,
          onSetPage: MM => {
            KM({
              scope: NM,
              category: xM,
              page: MM
            })
          }
        })]
      })
    }
  },
  5318: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM,
      f: () => jM
    });
    var OM = iM(1627),
      SM = iM(1303);

    function jM(MM) {
      let {
        thumbnail: rM,
        name: iM
      } = MM;
      return (0, SM.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, SM.jsx)("div", {
          className: "StudioTableThumbnail",
          children: rM
        }), (0, SM.jsx)("span", {
          className: "StudioTableGameName",
          children: iM
        })]
      })
    }

    function aM(MM) {
      let {
        game: rM
      } = MM;
      return (0, SM.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, OM.j)(rM),
        alt: ""
      })
    }
  },
  6869: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    const OM = {
      1: iM(6874),
      2: iM(6877),
      3: iM(6883)
    }
  },
  5309: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(1303);

    function PM(MM) {
      let {
        columns: rM,
        rows: iM,
        getRowKey: SM,
        renderRow: PM,
        className: nM
      } = MM;
      return (0, aM.jsxs)("table", {
        className: jM()("Table", nM),
        children: [(0, aM.jsx)("thead", {
          children: (0, aM.jsx)("tr", {
            children: rM.map((MM => (0, aM.jsx)("th", {
              children: MM.header
            }, MM.key)))
          })
        }), (0, aM.jsx)("tbody", {
          children: iM.map((MM => (0, aM.jsx)(OM.Fragment, {
            children: PM(MM)
          }, SM(MM))))
        })]
      })
    }
  },
  5299: () => {},
  6874: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6877: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6883: MM => {
    MM.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);