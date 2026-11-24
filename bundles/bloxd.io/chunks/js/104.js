export const id = 104;
export const ids = [104];
export const modules = {
  5081: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => lt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(1152),
      mt = Vt(1436),
      dt = Vt(3564),
      jt = Vt(153),
      Ht = Vt(3613),
      Xt = Vt(3597),
      Qt = Vt(1188);

    function lt(tt) {
      let {
        game: et
      } = tt;
      const Vt = (0, jt.is99NightsCrazyGamesBundle)() ? "large" : "small",
        Ot = (0, Ht.h)(et, Vt),
        lt = (0, dt.g)(Ot),
        Et = void 0 !== lt.blurhash;
      return (0, Qt.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [lt.isLoading && !Et && (0, Qt.jsx)(mt.b, {
          loaderType: "Secondary"
        }), !lt.failed && (null !== lt.src || Et) && (0, Qt.jsx)("div", {
          className: qt()("SchematicImage", Xt.j, {
            SchematicImageFadeIn: lt.fadeIn && !Et
          }),
          style: (0, Xt.h)(lt),
          children: (0, Qt.jsx)(Xt.e, {
            image: lt
          })
        }), lt.failed && (0, Qt.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Qt.jsx)(Dt.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6708: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => zt
    });
    Vt(5078);
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(377),
      dt = Vt(1117),
      jt = Vt(1308),
      Ht = Vt(1099),
      Xt = Vt(1286),
      Qt = Vt(1600),
      lt = Vt(3621),
      Et = Vt(1218),
      ft = Vt(5081),
      wt = Vt(2693),
      yt = Vt(1556),
      Nt = Vt(4700),
      Mt = Vt(5086),
      bt = Vt(1436),
      Jt = Vt(1613),
      Ct = Vt(4691),
      ut = Vt(2602),
      Kt = Vt(5089),
      ht = Vt(6596),
      vt = Vt(1633),
      Wt = Vt(1188);
    const St = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      ct = 25,
      Rt = "scope",
      It = "category",
      Pt = "customGames";
    const Zt = 7,
      Lt = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function Ft(tt) {
      let {
        position: et
      } = tt;
      const Vt = ht.e[et];
      return (0, Wt.jsxs)("td", {
        className: Dt()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== Vt,
          [`StudioLeaderboardTopPosition${et}`]: void 0 !== Vt
        }),
        children: [void 0 !== Vt && (0, Wt.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: Vt,
          alt: ""
        }), et]
      })
    }

    function kt(tt) {
      let {
        discoverability: et
      } = tt;
      const {
        playsPerDay: Vt,
        avgPlaytimeMinutes: qt,
        retention: Dt
      } = null === et ? Lt : (0, lt.k)(et);
      return (0, Wt.jsxs)(Ot.Fragment, {
        children: [(0, Wt.jsx)("td", {
          children: null !== Vt ? (0, lt.d)(Vt) : "-"
        }), (0, Wt.jsx)("td", {
          children: null !== qt ? (0, lt.g)(qt) : "-"
        }), (0, Wt.jsx)("td", {
          children: null !== Dt ? (0, lt.i)(Dt) : "-"
        })]
      })
    }

    function Gt(tt) {
      let {
        discoverability: et
      } = tt;
      return (0, Wt.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === et || void 0 === et ? void 0 : et.engagementScore) ? (0, jt.S)(Math.round(et.engagementScore)) : "-"
      })
    }

    function zt() {
      var tt, et;
      const {
        t: Vt
      } = (0, Xt.H)(), qt = (0, Jt.useNavigatePreserveSearch)(), {
        userContext: Dt,
        isUserContextUpdating: ht
      } = (0, Et.d)(), Lt = (0, ut.m)(), [zt, ot] = (0, Ct.r)(), rt = (Ut = zt.get(Rt), St.some((tt => tt.scope === Ut)) ? Ut : Pt);
      var Ut;
      const At = function(tt) {
          return mt.K.includes(tt) ? tt : null
        }(zt.get(It)),
        it = (0, Ct.h)(zt.get(Ct.d)),
        [Yt, Bt] = (0, Ot.useState)(null),
        [pt, xt] = (0, Ot.useState)(!1);

      function Tt(tt) {
        ot((et => {
          (0, Ct.j)(et, Rt, tt.scope === Pt ? null : tt.scope), (0, Ct.j)(et, It, tt.category), (0, Ct.n)(et, tt.page)
        }))
      }
      const gt = !ht && Dt.playerHasRank("developer"),
        st = gt && "allGames" === rt,
        nt = gt && "dormantGames" === rt;
      (0, Ot.useEffect)((() => {
        if (ht) return;
        let tt = !1;
        return Bt(null), xt(!1), Qt.e.getPublishedGamePreviews(Dt, {
          searchQuery: null,
          pageNumber: it,
          pageSize: ct,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== At ? [At] : [],
          upAndComing: !1,
          dormantGames: nt,
          sortByEngagementScore: !0,
          firstPartyGameNames: st ? Ht.d : void 0,
          includeOwners: !0
        }).then((et => {
          tt || Bt(et)
        })).catch((et => {
          console.error("Failed to load the studio leaderboard", et), tt || xt(!0)
        })), () => {
          tt = !0
        }
      }), [ht, st, nt, At, it, Dt]);
      const te = null !== (tt = null === Yt || void 0 === Yt ? void 0 : Yt.results) && void 0 !== tt ? tt : null,
        ee = function(tt, et, Vt) {
          const [qt, Dt] = (0, Ot.useState)({}), mt = Vt ? (null !== tt && void 0 !== tt ? tt : []).flatMap((tt => "firstPartyGame" === tt.type ? [(0, dt.i)(tt.gameNameWithVariation, !0)] : [])).join(",") : "", jt = (0, Ot.useMemo)((() => "" === mt ? [] : mt.split(",")), [mt]);
          return (0, Ot.useEffect)((() => {
            if (0 === jt.length) return void Dt({});
            let tt = !1;
            return Qt.e.getGamesByAnalyticsIds(et, jt).then((et => {
              tt || Dt(et)
            })).catch((tt => {
              console.error("Failed to load first party discoverability for the studio leaderboard", tt)
            })), () => {
              tt = !0
            }
          }), [jt, et]), qt
        }(te, Dt, gt),
        Ve = null !== te ? function(tt, et, Vt, Ot, qt) {
          return tt.map(((tt, Dt) => {
            var mt;
            const jt = Ot + Dt + 1;
            if ("customGame" === tt.type) {
              const et = tt.preview;
              return {
                key: et.schematicId,
                position: jt,
                thumbnail: (0, Wt.jsx)(ft.b, {
                  game: et
                }),
                name: et.name,
                owner: tt.owner,
                category: et.gameCategory,
                ccu: et.ccu,
                favourites: et.favourites,
                discoverability: (0, lt.n)(et) ? et : null,
                url: (0, vt.k)((0, dt.e)(et.schematicId))
              }
            }
            const Ht = tt.gameNameWithVariation,
              Xt = (0, dt.i)(Ht, !0);
            return {
              key: Ht,
              position: jt,
              thumbnail: (0, Wt.jsx)(Kt.d, {
                game: Ht
              }),
              name: (0, vt.j)(Ht, qt),
              owner: null,
              category: (0, vt.d)(Ht),
              ccu: (0, ut.e)(Ht, et),
              favourites: null,
              discoverability: null !== (mt = Vt[Xt]) && void 0 !== mt ? mt : null,
              url: (0, vt.k)(Xt)
            }
          }))
        }(te, Lt, ee, (it - 1) * ct, Vt) : [],
        Oe = !pt && null === Yt,
        qe = !Oe && !pt && 0 === Ve.length,
        De = null !== (et = null === Yt || void 0 === Yt ? void 0 : Yt.totalPages) && void 0 !== et ? et : 1;
      return (0, Wt.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, Wt.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Wt.jsx)("h1", {
            className: "StudioPageTitle",
            children: Vt("studio:leaderboard")
          })
        }), (0, Wt.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!nt && (0, Wt.jsx)("div", {
            children: Vt("studio:leaderboardBanner")
          }), nt && (0, Wt.jsx)("div", {
            children: Vt("studio:leaderboardDormantBanner")
          }), (0, Wt.jsx)("div", {
            children: Vt("studio:leaderboardMetricsBanner", {
              days: Zt
            })
          })]
        }), gt && (0, Wt.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: St.map((tt => (0, Wt.jsx)(yt.Q, {
            active: rt === tt.scope,
            onClick: () => {
              Tt({
                scope: tt.scope,
                category: At,
                page: 1
              })
            },
            children: Vt(tt.title)
          }, tt.scope)))
        }), (0, Wt.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, Wt.jsx)(yt.Q, {
            active: null === At,
            onClick: () => {
              Tt({
                scope: rt,
                category: null,
                page: 1
              })
            },
            children: Vt("studio:leaderboardAllCategories")
          }), mt.K.map((tt => (0, Wt.jsx)(yt.Q, {
            active: At === tt,
            onClick: () => {
              Tt({
                scope: rt,
                category: tt,
                page: 1
              })
            },
            children: (0, mt.Y)(tt)
          }, tt)))]
        }), Oe && (0, Wt.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Wt.jsx)(bt.b, {})
        }), pt && (0, Wt.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Vt("studio:failedToLoadLeaderboard")
        }), qe && (0, Wt.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Vt("studio:leaderboardEmpty")
        }), !Oe && !pt && !qe && (0, Wt.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, Wt.jsx)(Mt.b, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: Vt("general:game")
            }, {
              key: "owner",
              header: Vt("general:owner")
            }, ...null === At ? [{
              key: "category",
              header: Vt("general:category")
            }] : [], ...gt ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: Vt("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: Vt("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: Vt("studio:leaderboardSessionsPerPlayer")
            }, ...nt ? [] : [{
              key: "ccu",
              header: Vt("studio:metricCcu")
            }], {
              key: "favourites",
              header: Vt("general:favourites")
            }],
            rows: Ve,
            getRowKey: tt => tt.key,
            renderRow: tt => (0, Wt.jsxs)("tr", {
              onClick: () => {
                qt(tt.url)
              },
              children: [(0, Wt.jsx)(Ft, {
                position: tt.position
              }), (0, Wt.jsx)("td", {
                children: (0, Wt.jsx)(Kt.e, {
                  thumbnail: tt.thumbnail,
                  name: tt.name
                })
              }), (0, Wt.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === tt.owner && "-", null !== tt.owner && (0, Wt.jsx)(wt.f, {
                  playerSocialPreview: tt.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === At && (0, Wt.jsx)("td", {
                children: (0, mt.Y)(tt.category)
              }), gt && (0, Wt.jsx)(Gt, {
                discoverability: tt.discoverability
              }), (0, Wt.jsx)(kt, {
                discoverability: tt.discoverability
              }), !nt && (0, Wt.jsx)("td", {
                children: null !== tt.ccu ? (0, jt.S)(tt.ccu) : "-"
              }), (0, Wt.jsx)("td", {
                children: null !== tt.favourites ? (0, jt.S)(tt.favourites) : "-"
              })]
            })
          })
        }), !pt && (0, Wt.jsx)(Nt.d, {
          className: "AnimFadeIn",
          page: it,
          totalPages: De,
          onSetPage: tt => {
            Tt({
              scope: rt,
              category: At,
              page: tt
            })
          }
        })]
      })
    }
  },
  5089: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      e: () => Dt
    });
    var Ot = Vt(1633),
      qt = Vt(1188);

    function Dt(tt) {
      let {
        thumbnail: et,
        name: Vt
      } = tt;
      return (0, qt.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, qt.jsx)("div", {
          className: "StudioTableThumbnail",
          children: et
        }), (0, qt.jsx)("span", {
          className: "StudioTableGameName",
          children: Vt
        })]
      })
    }

    function mt(tt) {
      let {
        game: et
      } = tt;
      return (0, qt.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Ot.h)(et),
        alt: ""
      })
    }
  },
  6596: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    const Ot = {
      1: Vt(6602),
      2: Vt(6608),
      3: Vt(6616)
    }
  },
  5086: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(1188);

    function dt(tt) {
      let {
        columns: et,
        rows: Vt,
        getRowKey: qt,
        renderRow: dt,
        className: jt
      } = tt;
      return (0, mt.jsxs)("table", {
        className: Dt()("Table", jt),
        children: [(0, mt.jsx)("thead", {
          children: (0, mt.jsx)("tr", {
            children: et.map((tt => (0, mt.jsx)("th", {
              children: tt.header
            }, tt.key)))
          })
        }), (0, mt.jsx)("tbody", {
          children: Vt.map((tt => (0, mt.jsx)(Ot.Fragment, {
            children: dt(tt)
          }, qt(tt))))
        })]
      })
    }
  },
  5078: () => {},
  6602: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6608: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6616: tt => {
    tt.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);