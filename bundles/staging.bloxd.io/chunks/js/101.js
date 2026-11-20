export const id = 101;
export const ids = [101];
export const modules = {
  4653: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Wv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(1042),
      gv = Pv(1327),
      pv = Pv(3258),
      dv = Pv(108),
      Nv = Pv(3301),
      lv = Pv(3289),
      Tv = Pv(1082);

    function Wv(vv) {
      let {
        game: zv
      } = vv;
      const Pv = (0, dv.i)() ? "large" : "small",
        hv = (0, Nv.g)(zv, Pv),
        Wv = (0, pv.f)(hv),
        wv = void 0 !== Wv.blurhash;
      return (0, Tv.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Wv.isLoading && !wv && (0, Tv.jsx)(gv.c, {
          loaderType: "Secondary"
        }), !Wv.failed && (null !== Wv.src || wv) && (0, Tv.jsx)("div", {
          className: Sv()("SchematicImage", lv.g, {
            SchematicImageFadeIn: Wv.fadeIn && !wv
          }),
          style: (0, lv.e)(Wv),
          children: (0, Tv.jsx)(lv.b, {
            image: Wv
          })
        }), Wv.failed && (0, Tv.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Tv.jsx)(ev.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6232: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => Zv
    });
    Pv(4650);
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(302),
      pv = Pv(1011),
      dv = Pv(1209),
      Nv = Pv(997),
      lv = Pv(1175),
      Tv = Pv(1482),
      Wv = Pv(3306),
      wv = Pv(1108),
      av = Pv(4653),
      sv = Pv(2432),
      Cv = Pv(1442),
      iv = Pv(4326),
      cv = Pv(4662),
      Gv = Pv(1327),
      mv = Pv(1492),
      jv = Pv(4319),
      fv = Pv(2396),
      Fv = Pv(4668),
      Yv = Pv(6129),
      nv = Pv(1529),
      Ov = Pv(1082);
    const Dv = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      Kv = 25,
      Vv = "scope",
      Uv = "category",
      Rv = "customGames";
    const xv = 7,
      tv = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function qv(vv) {
      let {
        position: zv
      } = vv;
      const Pv = Yv.e[zv];
      return (0, Ov.jsxs)("td", {
        className: ev()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== Pv,
          [`StudioLeaderboardTopPosition${zv}`]: void 0 !== Pv
        }),
        children: [void 0 !== Pv && (0, Ov.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: Pv,
          alt: ""
        }), zv]
      })
    }

    function Iv(vv) {
      let {
        discoverability: zv
      } = vv;
      const {
        playsPerDay: Pv,
        avgPlaytimeMinutes: Sv,
        retention: ev
      } = null === zv ? tv : (0, Wv.m)(zv);
      return (0, Ov.jsxs)(hv.Fragment, {
        children: [(0, Ov.jsx)("td", {
          children: null !== Pv ? (0, Wv.e)(Pv) : "-"
        }), (0, Ov.jsx)("td", {
          children: null !== Sv ? (0, Wv.f)(Sv) : "-"
        }), (0, Ov.jsx)("td", {
          children: null !== ev ? (0, Wv.j)(ev) : "-"
        })]
      })
    }

    function Qv(vv) {
      let {
        discoverability: zv
      } = vv;
      return (0, Ov.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === zv || void 0 === zv ? void 0 : zv.engagementScore) ? (0, dv.X)(Math.round(zv.engagementScore)) : "-"
      })
    }

    function Zv() {
      var vv, zv;
      const {
        t: Pv
      } = (0, lv.x)(), Sv = (0, mv.useNavigatePreserveSearch)(), {
        userContext: ev,
        isUserContextUpdating: Yv
      } = (0, wv.d)(), tv = (0, fv.o)(), [Zv, Av] = (0, jv.r)(), Lv = (Hv = Zv.get(Vv), Dv.some((vv => vv.scope === Hv)) ? Hv : Rv);
      var Hv;
      const Mv = function(vv) {
          return gv.O.includes(vv) ? vv : null
        }(Zv.get(Uv)),
        yv = (0, jv.f)(Zv.get(jv.d)),
        [Bv, Jv] = (0, hv.useState)(null),
        [Ev, ov] = (0, hv.useState)(!1);

      function bv(vv) {
        Av((zv => {
          (0, jv.j)(zv, Vv, vv.scope === Rv ? null : vv.scope), (0, jv.j)(zv, Uv, vv.category), (0, jv.n)(zv, vv.page)
        }))
      }
      const rv = !Yv && ev.playerHasRank("developer"),
        kv = rv && "allGames" === Lv,
        Xv = rv && "dormantGames" === Lv;
      (0, hv.useEffect)((() => {
        if (Yv) return;
        let vv = !1;
        return Jv(null), ov(!1), Tv.e.getPublishedGamePreviews(ev, {
          searchQuery: null,
          pageNumber: yv,
          pageSize: Kv,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== Mv ? [Mv] : [],
          upAndComing: !1,
          dormantGames: Xv,
          sortByEngagementScore: !0,
          firstPartyGameNames: kv ? Nv.c : void 0,
          includeOwners: !0
        }).then((zv => {
          vv || Jv(zv)
        })).catch((zv => {
          console.error("Failed to load the studio leaderboard", zv), vv || ov(!0)
        })), () => {
          vv = !0
        }
      }), [Yv, kv, Xv, Mv, yv, ev]);
      const uv = null !== (vv = null === Bv || void 0 === Bv ? void 0 : Bv.results) && void 0 !== vv ? vv : null,
        vz = function(vv, zv, Pv) {
          const [Sv, ev] = (0, hv.useState)({}), gv = Pv ? (null !== vv && void 0 !== vv ? vv : []).flatMap((vv => "firstPartyGame" === vv.type ? [(0, pv.i)(vv.gameNameWithVariation, !0)] : [])).join(",") : "", dv = (0, hv.useMemo)((() => "" === gv ? [] : gv.split(",")), [gv]);
          return (0, hv.useEffect)((() => {
            if (0 === dv.length) return void ev({});
            let vv = !1;
            return Tv.e.getGamesByAnalyticsIds(zv, dv).then((zv => {
              vv || ev(zv)
            })).catch((vv => {
              console.error("Failed to load first party discoverability for the studio leaderboard", vv)
            })), () => {
              vv = !0
            }
          }), [dv, zv]), Sv
        }(uv, ev, rv),
        zz = null !== uv ? function(vv, zv, Pv, hv, Sv) {
          return vv.map(((vv, ev) => {
            var gv;
            const dv = hv + ev + 1;
            if ("customGame" === vv.type) {
              const zv = vv.preview;
              return {
                key: zv.schematicId,
                position: dv,
                thumbnail: (0, Ov.jsx)(av.e, {
                  game: zv
                }),
                name: zv.name,
                owner: vv.owner,
                category: zv.gameCategory,
                ccu: zv.ccu,
                favourites: zv.favourites,
                discoverability: (0, Wv.n)(zv) ? zv : null,
                url: (0, nv.o)((0, pv.e)(zv.schematicId))
              }
            }
            const Nv = vv.gameNameWithVariation,
              lv = (0, pv.i)(Nv, !0);
            return {
              key: Nv,
              position: dv,
              thumbnail: (0, Ov.jsx)(Fv.e, {
                game: Nv
              }),
              name: (0, nv.n)(Nv, Sv),
              owner: null,
              category: (0, nv.e)(Nv),
              ccu: (0, fv.c)(Nv, zv),
              favourites: null,
              discoverability: null !== (gv = Pv[lv]) && void 0 !== gv ? gv : null,
              url: (0, nv.o)(lv)
            }
          }))
        }(uv, tv, vz, (yv - 1) * Kv, Pv) : [],
        Pz = !Ev && null === Bv,
        hz = !Pz && !Ev && 0 === zz.length,
        Sz = null !== (zv = null === Bv || void 0 === Bv ? void 0 : Bv.totalPages) && void 0 !== zv ? zv : 1;
      return (0, Ov.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, Ov.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Ov.jsx)("h1", {
            className: "StudioPageTitle",
            children: Pv("studio:leaderboard")
          })
        }), (0, Ov.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!Xv && (0, Ov.jsx)("div", {
            children: Pv("studio:leaderboardBanner")
          }), Xv && (0, Ov.jsx)("div", {
            children: Pv("studio:leaderboardDormantBanner")
          }), (0, Ov.jsx)("div", {
            children: Pv("studio:leaderboardMetricsBanner", {
              days: xv
            })
          })]
        }), rv && (0, Ov.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Dv.map((vv => (0, Ov.jsx)(Cv.K, {
            active: Lv === vv.scope,
            onClick: () => {
              bv({
                scope: vv.scope,
                category: Mv,
                page: 1
              })
            },
            children: Pv(vv.title)
          }, vv.scope)))
        }), (0, Ov.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, Ov.jsx)(Cv.K, {
            active: null === Mv,
            onClick: () => {
              bv({
                scope: Lv,
                category: null,
                page: 1
              })
            },
            children: Pv("studio:leaderboardAllCategories")
          }), gv.O.map((vv => (0, Ov.jsx)(Cv.K, {
            active: Mv === vv,
            onClick: () => {
              bv({
                scope: Lv,
                category: vv,
                page: 1
              })
            },
            children: (0, gv.Z)(vv)
          }, vv)))]
        }), Pz && (0, Ov.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Ov.jsx)(Gv.c, {})
        }), Ev && (0, Ov.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Pv("studio:failedToLoadLeaderboard")
        }), hz && (0, Ov.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Pv("studio:leaderboardEmpty")
        }), !Pz && !Ev && !hz && (0, Ov.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, Ov.jsx)(cv.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: Pv("general:game")
            }, {
              key: "owner",
              header: Pv("general:owner")
            }, ...null === Mv ? [{
              key: "category",
              header: Pv("general:category")
            }] : [], ...rv ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: Pv("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: Pv("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: Pv("studio:leaderboardSessionsPerPlayer")
            }, ...Xv ? [] : [{
              key: "ccu",
              header: Pv("studio:metricCcu")
            }], {
              key: "favourites",
              header: Pv("general:favourites")
            }],
            rows: zz,
            getRowKey: vv => vv.key,
            renderRow: vv => (0, Ov.jsxs)("tr", {
              onClick: () => {
                Sv(vv.url)
              },
              children: [(0, Ov.jsx)(qv, {
                position: vv.position
              }), (0, Ov.jsx)("td", {
                children: (0, Ov.jsx)(Fv.i, {
                  thumbnail: vv.thumbnail,
                  name: vv.name
                })
              }), (0, Ov.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === vv.owner && "-", null !== vv.owner && (0, Ov.jsx)(sv.e, {
                  playerSocialPreview: vv.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === Mv && (0, Ov.jsx)("td", {
                children: (0, gv.Z)(vv.category)
              }), rv && (0, Ov.jsx)(Qv, {
                discoverability: vv.discoverability
              }), (0, Ov.jsx)(Iv, {
                discoverability: vv.discoverability
              }), !Xv && (0, Ov.jsx)("td", {
                children: null !== vv.ccu ? (0, dv.X)(vv.ccu) : "-"
              }), (0, Ov.jsx)("td", {
                children: null !== vv.favourites ? (0, dv.X)(vv.favourites) : "-"
              })]
            })
          })
        }), !Ev && (0, Ov.jsx)(iv.c, {
          className: "AnimFadeIn",
          page: yv,
          totalPages: Sz,
          onSetPage: vv => {
            bv({
              scope: Lv,
              category: Mv,
              page: vv
            })
          }
        })]
      })
    }
  },
  4668: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      i: () => ev
    });
    var hv = Pv(1529),
      Sv = Pv(1082);

    function ev(vv) {
      let {
        thumbnail: zv,
        name: Pv
      } = vv;
      return (0, Sv.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Sv.jsx)("div", {
          className: "StudioTableThumbnail",
          children: zv
        }), (0, Sv.jsx)("span", {
          className: "StudioTableGameName",
          children: Pv
        })]
      })
    }

    function gv(vv) {
      let {
        game: zv
      } = vv;
      return (0, Sv.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, hv.l)(zv),
        alt: ""
      })
    }
  },
  6129: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv
    });
    const hv = {
      1: Pv(6138),
      2: Pv(6147),
      3: Pv(6154)
    }
  },
  4662: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1082);

    function pv(vv) {
      let {
        columns: zv,
        rows: Pv,
        getRowKey: Sv,
        renderRow: pv,
        className: dv
      } = vv;
      return (0, gv.jsxs)("table", {
        className: ev()("Table", dv),
        children: [(0, gv.jsx)("thead", {
          children: (0, gv.jsx)("tr", {
            children: zv.map((vv => (0, gv.jsx)("th", {
              children: vv.header
            }, vv.key)))
          })
        }), (0, gv.jsx)("tbody", {
          children: Pv.map((vv => (0, gv.jsx)(hv.Fragment, {
            children: pv(vv)
          }, Sv(vv))))
        })]
      })
    }
  },
  4650: () => {},
  6138: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6147: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6154: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);