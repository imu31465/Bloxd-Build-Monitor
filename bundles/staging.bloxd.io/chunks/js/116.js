export const id = 116;
export const ids = [116];
export const modules = {
  5404: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => vV
    });
    var JV = xV(1146),
      YV = xV.n(JV),
      UV = xV(1414),
      yV = xV(1408),
      pV = xV(3942),
      QV = xV(138),
      nV = xV(3974),
      wV = xV(3967),
      ZV = xV(1321);

    function vV(VV) {
      let {
        game: eV
      } = VV;
      const xV = (0, QV.is99NightsCrazyGamesBundle)() ? "large" : "small",
        JV = (0, nV.g)(eV, xV),
        vV = (0, pV.d)(JV),
        rV = void 0 !== vV.blurhash;
      return (0, ZV.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [vV.isLoading && !rV && (0, ZV.jsx)(yV.d, {
          loaderType: "Secondary"
        }), !vV.failed && (null !== vV.src || rV) && (0, ZV.jsx)("div", {
          className: YV()("SchematicImage", wV.i, {
            SchematicImageFadeIn: vV.fadeIn && !rV
          }),
          style: (0, wV.h)(vV),
          children: (0, ZV.jsx)(wV.e, {
            image: vV
          })
        }), vV.failed && (0, ZV.jsx)("div", {
          className: "SchematicImageError",
          children: (0, ZV.jsx)(UV.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  7085: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => oV
    });
    xV(5402);
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(364),
      pV = xV(1117),
      QV = xV(1252),
      nV = xV(1093),
      wV = xV(1220),
      ZV = xV(1603),
      vV = xV(3980),
      rV = xV(1168),
      kV = xV(5404),
      bV = xV(2903),
      EV = xV(1551),
      BV = xV(5043),
      jV = xV(5410),
      qV = xV(1408),
      tV = xV(1612),
      FV = xV(5037),
      TV = xV(2777),
      PV = xV(5418),
      AV = xV(6968),
      NV = xV(1639),
      XV = xV(1321);
    const MV = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      zV = 25,
      GV = "scope",
      WV = "category",
      RV = "customGames";
    const gV = 7,
      DV = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function iV(VV) {
      let {
        position: eV
      } = VV;
      const xV = AV.b[eV];
      return (0, XV.jsxs)("td", {
        className: UV()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== xV,
          [`StudioLeaderboardTopPosition${eV}`]: void 0 !== xV
        }),
        children: [void 0 !== xV && (0, XV.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: xV,
          alt: ""
        }), eV]
      })
    }

    function CV(VV) {
      let {
        discoverability: eV
      } = VV;
      const {
        playsPerDay: xV,
        avgPlaytimeMinutes: YV,
        retention: UV
      } = null === eV ? DV : (0, vV.o)(eV);
      return (0, XV.jsxs)(JV.Fragment, {
        children: [(0, XV.jsx)("td", {
          children: null !== xV ? (0, vV.e)(xV) : "-"
        }), (0, XV.jsx)("td", {
          children: null !== YV ? (0, vV.i)(YV) : "-"
        }), (0, XV.jsx)("td", {
          children: null !== UV ? (0, vV.m)(UV) : "-"
        })]
      })
    }

    function aV(VV) {
      let {
        discoverability: eV
      } = VV;
      return (0, XV.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === eV || void 0 === eV ? void 0 : eV.engagementScore) ? (0, QV.N)(Math.round(eV.engagementScore)) : "-"
      })
    }

    function oV() {
      var VV, eV;
      const {
        t: xV
      } = (0, wV.A)(), YV = (0, tV.useNavigatePreserveSearch)(), {
        userContext: UV,
        isUserContextUpdating: AV
      } = (0, rV.d)(), DV = (0, TV.r)(), [oV, cV] = (0, FV.n)(), hV = (lV = oV.get(GV), MV.some((VV => VV.scope === lV)) ? lV : RV);
      var lV;
      const LV = function(VV) {
          return yV.X.includes(VV) ? VV : null
        }(oV.get(WV)),
        fV = (0, FV.g)(oV.get(FV.d)),
        [mV, KV] = (0, JV.useState)(null),
        [HV, uV] = (0, JV.useState)(!1);

      function sV(VV) {
        cV((eV => {
          (0, FV.k)(eV, GV, VV.scope === RV ? null : VV.scope), (0, FV.k)(eV, WV, VV.category), (0, FV.l)(eV, VV.page)
        }))
      }
      const SV = !AV && UV.playerHasRank("developer"),
        IV = SV && "allGames" === hV,
        dV = SV && "dormantGames" === hV;
      (0, JV.useEffect)((() => {
        if (AV) return;
        let VV = !1;
        return KV(null), uV(!1), ZV.b.getPublishedGamePreviews(UV, {
          searchQuery: null,
          pageNumber: fV,
          pageSize: zV,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== LV ? [LV] : [],
          upAndComing: !1,
          dormantGames: dV,
          sortByEngagementScore: !0,
          firstPartyGameNames: IV ? nV.b : void 0,
          includeOwners: !0
        }).then((eV => {
          VV || KV(eV)
        })).catch((eV => {
          console.error("Failed to load the studio leaderboard", eV), VV || uV(!0)
        })), () => {
          VV = !0
        }
      }), [AV, IV, dV, LV, fV, UV]);
      const OV = null !== (VV = null === mV || void 0 === mV ? void 0 : mV.results) && void 0 !== VV ? VV : null,
        Ve = function(VV, eV, xV) {
          const [YV, UV] = (0, JV.useState)({}), yV = xV ? (null !== VV && void 0 !== VV ? VV : []).flatMap((VV => "firstPartyGame" === VV.type ? [(0, pV.i)(VV.gameNameWithVariation, !0)] : [])).join(",") : "", QV = (0, JV.useMemo)((() => "" === yV ? [] : yV.split(",")), [yV]);
          return (0, JV.useEffect)((() => {
            if (0 === QV.length) return void UV({});
            let VV = !1;
            return ZV.b.getGamesByAnalyticsIds(eV, QV).then((eV => {
              VV || UV(eV)
            })).catch((VV => {
              console.error("Failed to load first party discoverability for the studio leaderboard", VV)
            })), () => {
              VV = !0
            }
          }), [QV, eV]), YV
        }(OV, UV, SV),
        ee = null !== OV ? function(VV, eV, xV, JV, YV) {
          return VV.map(((VV, UV) => {
            var yV;
            const QV = JV + UV + 1;
            if ("customGame" === VV.type) {
              const eV = VV.preview;
              return {
                key: eV.schematicId,
                position: QV,
                thumbnail: (0, XV.jsx)(kV.d, {
                  game: eV
                }),
                name: eV.name,
                owner: VV.owner,
                category: eV.gameCategory,
                ccu: eV.ccu,
                favourites: eV.favourites,
                discoverability: (0, vV.q)(eV) ? eV : null,
                url: (0, NV.m)((0, pV.e)(eV.schematicId))
              }
            }
            const nV = VV.gameNameWithVariation,
              wV = (0, pV.i)(nV, !0);
            return {
              key: nV,
              position: QV,
              thumbnail: (0, XV.jsx)(PV.c, {
                game: nV
              }),
              name: (0, NV.j)(nV, YV),
              owner: null,
              category: (0, NV.d)(nV),
              ccu: (0, TV.e)(nV, eV),
              favourites: null,
              discoverability: null !== (yV = xV[wV]) && void 0 !== yV ? yV : null,
              url: (0, NV.m)(wV)
            }
          }))
        }(OV, DV, Ve, (fV - 1) * zV, xV) : [],
        xe = !HV && null === mV,
        Je = !xe && !HV && 0 === ee.length,
        Ye = null !== (eV = null === mV || void 0 === mV ? void 0 : mV.totalPages) && void 0 !== eV ? eV : 1;
      return (0, XV.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, XV.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, XV.jsx)("h1", {
            className: "StudioPageTitle",
            children: xV("studio:leaderboard")
          })
        }), (0, XV.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!dV && (0, XV.jsx)("div", {
            children: xV("studio:leaderboardBanner")
          }), dV && (0, XV.jsx)("div", {
            children: xV("studio:leaderboardDormantBanner")
          }), (0, XV.jsx)("div", {
            children: xV("studio:leaderboardMetricsBanner", {
              days: gV
            })
          })]
        }), SV && (0, XV.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: MV.map((VV => (0, XV.jsx)(EV.M, {
            active: hV === VV.scope,
            onClick: () => {
              sV({
                scope: VV.scope,
                category: LV,
                page: 1
              })
            },
            children: xV(VV.title)
          }, VV.scope)))
        }), (0, XV.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, XV.jsx)(EV.M, {
            active: null === LV,
            onClick: () => {
              sV({
                scope: hV,
                category: null,
                page: 1
              })
            },
            children: xV("studio:leaderboardAllCategories")
          }), yV.X.map((VV => (0, XV.jsx)(EV.M, {
            active: LV === VV,
            onClick: () => {
              sV({
                scope: hV,
                category: VV,
                page: 1
              })
            },
            children: (0, yV.gb)(VV)
          }, VV)))]
        }), xe && (0, XV.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, XV.jsx)(qV.d, {})
        }), HV && (0, XV.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: xV("studio:failedToLoadLeaderboard")
        }), Je && (0, XV.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: xV("studio:leaderboardEmpty")
        }), !xe && !HV && !Je && (0, XV.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, XV.jsx)(jV.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: xV("general:game")
            }, {
              key: "owner",
              header: xV("general:owner")
            }, ...null === LV ? [{
              key: "category",
              header: xV("general:category")
            }] : [], ...SV ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: xV("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: xV("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: xV("studio:leaderboardSessionsPerPlayer")
            }, ...dV ? [] : [{
              key: "ccu",
              header: xV("studio:metricCcu")
            }], {
              key: "favourites",
              header: xV("general:favourites")
            }],
            rows: ee,
            getRowKey: VV => VV.key,
            renderRow: VV => (0, XV.jsxs)("tr", {
              onClick: () => {
                YV(VV.url)
              },
              children: [(0, XV.jsx)(iV, {
                position: VV.position
              }), (0, XV.jsx)("td", {
                children: (0, XV.jsx)(PV.f, {
                  thumbnail: VV.thumbnail,
                  name: VV.name
                })
              }), (0, XV.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === VV.owner && "-", null !== VV.owner && (0, XV.jsx)(bV.f, {
                  playerSocialPreview: VV.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === LV && (0, XV.jsx)("td", {
                children: (0, yV.gb)(VV.category)
              }), SV && (0, XV.jsx)(aV, {
                discoverability: VV.discoverability
              }), (0, XV.jsx)(CV, {
                discoverability: VV.discoverability
              }), !dV && (0, XV.jsx)("td", {
                children: null !== VV.ccu ? (0, QV.N)(VV.ccu) : "-"
              }), (0, XV.jsx)("td", {
                children: null !== VV.favourites ? (0, QV.N)(VV.favourites) : "-"
              })]
            })
          })
        }), !HV && (0, XV.jsx)(BV.b, {
          className: "AnimFadeIn",
          page: fV,
          totalPages: Ye,
          onSetPage: VV => {
            sV({
              scope: hV,
              category: LV,
              page: VV
            })
          }
        })]
      })
    }
  },
  5418: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      f: () => UV
    });
    var JV = xV(1639),
      YV = xV(1321);

    function UV(VV) {
      let {
        thumbnail: eV,
        name: xV
      } = VV;
      return (0, YV.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, YV.jsx)("div", {
          className: "StudioTableThumbnail",
          children: eV
        }), (0, YV.jsx)("span", {
          className: "StudioTableGameName",
          children: xV
        })]
      })
    }

    function yV(VV) {
      let {
        game: eV
      } = VV;
      return (0, YV.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, JV.h)(eV),
        alt: ""
      })
    }
  },
  6968: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    const JV = {
      1: xV(6973),
      2: xV(6976),
      3: xV(6980)
    }
  },
  5410: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(1321);

    function pV(VV) {
      let {
        columns: eV,
        rows: xV,
        getRowKey: YV,
        renderRow: pV,
        className: QV
      } = VV;
      return (0, yV.jsxs)("table", {
        className: UV()("Table", QV),
        children: [(0, yV.jsx)("thead", {
          children: (0, yV.jsx)("tr", {
            children: eV.map((VV => (0, yV.jsx)("th", {
              children: VV.header
            }, VV.key)))
          })
        }), (0, yV.jsx)("tbody", {
          children: xV.map((VV => (0, yV.jsx)(JV.Fragment, {
            children: pV(VV)
          }, YV(VV))))
        })]
      })
    }
  },
  5402: () => {},
  6973: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6976: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6980: VV => {
    VV.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);