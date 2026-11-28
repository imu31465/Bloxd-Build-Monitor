export const id = 117;
export const ids = [117];
export const modules = {
  5817: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ub
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(1475),
      Vb = Mb(1468),
      gb = Mb(4896),
      lb = Mb(160),
      Lb = Mb(4929),
      Ib = Mb(4920),
      Ob = Mb(1364);

    function Ub(bb) {
      let {
        game: wb
      } = bb;
      const Mb = (0, lb.is99NightsCrazyGamesBundle)() ? "large" : "small",
        eb = (0, Lb.f)(wb, Mb),
        Ub = (0, gb.i)(eb),
        tb = void 0 !== Ub.blurhash;
      return (0, Ob.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Ub.isLoading && !tb && (0, Ob.jsx)(Vb.c, {
          loaderType: "Secondary"
        }), !Ub.failed && (null !== Ub.src || tb) && (0, Ob.jsx)("div", {
          className: Hb()("SchematicImage", Ib.h, {
            SchematicImageFadeIn: Ub.fadeIn && !tb
          }),
          style: (0, Ib.d)(Ub),
          children: (0, Ob.jsx)(Ib.b, {
            image: Ub
          })
        }), Ub.failed && (0, Ob.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Ob.jsx)(pb.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  7701: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Nb
    });
    Mb(5812);
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(366),
      gb = Mb(1136),
      lb = Mb(1301),
      Lb = Mb(1119),
      Ib = Mb(1259),
      Ob = Mb(1677),
      Ub = Mb(4943),
      tb = Mb(1179),
      Cb = Mb(5817),
      Eb = Mb(3797),
      Fb = Mb(1616),
      Bb = Mb(5417),
      sb = Mb(5822),
      mb = Mb(1468),
      hb = Mb(1686),
      zb = Mb(5411),
      Xb = Mb(3677),
      xb = Mb(5825),
      jb = Mb(7572),
      Kb = Mb(1713),
      rb = Mb(1364);
    const Rb = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      Db = 25,
      cb = "scope",
      Yb = "category",
      Zb = "customGames";
    const fb = 7,
      Ab = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function Wb(bb) {
      let {
        position: wb
      } = bb;
      const Mb = jb.e[wb];
      return (0, rb.jsxs)("td", {
        className: pb()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== Mb,
          [`StudioLeaderboardTopPosition${wb}`]: void 0 !== Mb
        }),
        children: [void 0 !== Mb && (0, rb.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: Mb,
          alt: ""
        }), wb]
      })
    }

    function Jb(bb) {
      let {
        discoverability: wb
      } = bb;
      const {
        playsPerDay: Mb,
        avgPlaytimeMinutes: Hb,
        retention: pb
      } = null === wb ? Ab : (0, Ub.n)(wb);
      return (0, rb.jsxs)(eb.Fragment, {
        children: [(0, rb.jsx)("td", {
          children: null !== Mb ? (0, Ub.d)(Mb) : "-"
        }), (0, rb.jsx)("td", {
          children: null !== Hb ? (0, Ub.g)(Hb) : "-"
        }), (0, rb.jsx)("td", {
          children: null !== pb ? (0, Ub.j)(pb) : "-"
        })]
      })
    }

    function Sb(bb) {
      let {
        discoverability: wb
      } = bb;
      return (0, rb.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === wb || void 0 === wb ? void 0 : wb.engagementScore) ? (0, lb.L)(Math.round(wb.engagementScore)) : "-"
      })
    }

    function Nb() {
      var bb, wb;
      const {
        t: Mb
      } = (0, Ib.C)(), Hb = (0, hb.useNavigatePreserveSearch)(), {
        userContext: pb,
        isUserContextUpdating: jb
      } = (0, tb.e)(), Ab = (0, Xb.q)(), [Nb, vb] = (0, zb.m)(), Qb = (Gb = Nb.get(cb), Rb.some((bb => bb.scope === Gb)) ? Gb : Zb);
      var Gb;
      const qb = function(bb) {
          return Vb.S.includes(bb) ? bb : null
        }(Nb.get(Yb)),
        ab = (0, zb.f)(Nb.get(zb.b)),
        [ib, ub] = (0, eb.useState)(null),
        [db, Pb] = (0, eb.useState)(!1);

      function nb(bb) {
        vb((wb => {
          (0, zb.g)(wb, cb, bb.scope === Zb ? null : bb.scope), (0, zb.g)(wb, Yb, bb.category), (0, zb.i)(wb, bb.page)
        }))
      }
      const yb = !jb && pb.playerHasRank("developer"),
        ob = yb && "allGames" === Qb,
        Tb = yb && "dormantGames" === Qb;
      (0, eb.useEffect)((() => {
        if (jb) return;
        let bb = !1;
        return ub(null), Pb(!1), Ob.e.getPublishedGamePreviews(pb, {
          searchQuery: null,
          pageNumber: ab,
          pageSize: Db,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== qb ? [qb] : [],
          upAndComing: !1,
          dormantGames: Tb,
          sortByEngagementScore: !0,
          firstPartyGameNames: ob ? Lb.c : void 0,
          includeOwners: !0
        }).then((wb => {
          bb || ub(wb)
        })).catch((wb => {
          console.error("Failed to load the studio leaderboard", wb), bb || Pb(!0)
        })), () => {
          bb = !0
        }
      }), [jb, ob, Tb, qb, ab, pb]);
      const kb = null !== (bb = null === ib || void 0 === ib ? void 0 : ib.results) && void 0 !== bb ? bb : null,
        bw = function(bb, wb, Mb) {
          const [Hb, pb] = (0, eb.useState)({}), Vb = Mb ? (null !== bb && void 0 !== bb ? bb : []).flatMap((bb => "firstPartyGame" === bb.type ? [(0, gb.f)(bb.gameNameWithVariation, !0)] : [])).join(",") : "", lb = (0, eb.useMemo)((() => "" === Vb ? [] : Vb.split(",")), [Vb]);
          return (0, eb.useEffect)((() => {
            if (0 === lb.length) return void pb({});
            let bb = !1;
            return Ob.e.getGamesByAnalyticsIds(wb, lb).then((wb => {
              bb || pb(wb)
            })).catch((bb => {
              console.error("Failed to load first party discoverability for the studio leaderboard", bb)
            })), () => {
              bb = !0
            }
          }), [lb, wb]), Hb
        }(kb, pb, yb),
        ww = null !== kb ? function(bb, wb, Mb, eb, Hb) {
          return bb.map(((bb, pb) => {
            var Vb;
            const lb = eb + pb + 1;
            if ("customGame" === bb.type) {
              const wb = bb.preview;
              return {
                key: wb.schematicId,
                position: lb,
                thumbnail: (0, rb.jsx)(Cb.e, {
                  game: wb
                }),
                name: wb.name,
                owner: bb.owner,
                category: wb.gameCategory,
                ccu: wb.ccu,
                favourites: wb.favourites,
                discoverability: (0, Ub.p)(wb) ? wb : null,
                url: (0, Kb.p)((0, gb.c)(wb.schematicId))
              }
            }
            const Lb = bb.gameNameWithVariation,
              Ib = (0, gb.f)(Lb, !0);
            return {
              key: Lb,
              position: lb,
              thumbnail: (0, rb.jsx)(xb.d, {
                game: Lb
              }),
              name: (0, Kb.n)(Lb, Hb),
              owner: null,
              category: (0, Kb.h)(Lb),
              ccu: (0, Xb.e)(Lb, wb),
              favourites: null,
              discoverability: null !== (Vb = Mb[Ib]) && void 0 !== Vb ? Vb : null,
              url: (0, Kb.p)(Ib)
            }
          }))
        }(kb, Ab, bw, (ab - 1) * Db, Mb) : [],
        Mw = !db && null === ib,
        ew = !Mw && !db && 0 === ww.length,
        Hw = null !== (wb = null === ib || void 0 === ib ? void 0 : ib.totalPages) && void 0 !== wb ? wb : 1;
      return (0, rb.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, rb.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, rb.jsx)("h1", {
            className: "StudioPageTitle",
            children: Mb("studio:leaderboard")
          })
        }), (0, rb.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!Tb && (0, rb.jsx)("div", {
            children: Mb("studio:leaderboardBanner")
          }), Tb && (0, rb.jsx)("div", {
            children: Mb("studio:leaderboardDormantBanner")
          }), (0, rb.jsx)("div", {
            children: Mb("studio:leaderboardMetricsBanner", {
              days: fb
            })
          })]
        }), yb && (0, rb.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Rb.map((bb => (0, rb.jsx)(Fb.Y, {
            active: Qb === bb.scope,
            onClick: () => {
              nb({
                scope: bb.scope,
                category: qb,
                page: 1
              })
            },
            children: Mb(bb.title)
          }, bb.scope)))
        }), (0, rb.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, rb.jsx)(Fb.Y, {
            active: null === qb,
            onClick: () => {
              nb({
                scope: Qb,
                category: null,
                page: 1
              })
            },
            children: Mb("studio:leaderboardAllCategories")
          }), Vb.S.map((bb => (0, rb.jsx)(Fb.Y, {
            active: qb === bb,
            onClick: () => {
              nb({
                scope: Qb,
                category: bb,
                page: 1
              })
            },
            children: (0, Vb.eb)(bb)
          }, bb)))]
        }), Mw && (0, rb.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, rb.jsx)(mb.c, {})
        }), db && (0, rb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Mb("studio:failedToLoadLeaderboard")
        }), ew && (0, rb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Mb("studio:leaderboardEmpty")
        }), !Mw && !db && !ew && (0, rb.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, rb.jsx)(sb.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: Mb("general:game")
            }, {
              key: "owner",
              header: Mb("general:owner")
            }, ...null === qb ? [{
              key: "category",
              header: Mb("general:category")
            }] : [], ...yb ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: Mb("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: Mb("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: Mb("studio:leaderboardSessionsPerPlayer")
            }, ...Tb ? [] : [{
              key: "ccu",
              header: Mb("studio:metricCcu")
            }], {
              key: "favourites",
              header: Mb("general:favourites")
            }],
            rows: ww,
            getRowKey: bb => bb.key,
            renderRow: bb => (0, rb.jsxs)("tr", {
              onClick: () => {
                Hb(bb.url)
              },
              children: [(0, rb.jsx)(Wb, {
                position: bb.position
              }), (0, rb.jsx)("td", {
                children: (0, rb.jsx)(xb.f, {
                  thumbnail: bb.thumbnail,
                  name: bb.name
                })
              }), (0, rb.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === bb.owner && "-", null !== bb.owner && (0, rb.jsx)(Eb.d, {
                  playerSocialPreview: bb.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === qb && (0, rb.jsx)("td", {
                children: (0, Vb.eb)(bb.category)
              }), yb && (0, rb.jsx)(Sb, {
                discoverability: bb.discoverability
              }), (0, rb.jsx)(Jb, {
                discoverability: bb.discoverability
              }), !Tb && (0, rb.jsx)("td", {
                children: null !== bb.ccu ? (0, lb.L)(bb.ccu) : "-"
              }), (0, rb.jsx)("td", {
                children: null !== bb.favourites ? (0, lb.L)(bb.favourites) : "-"
              })]
            })
          })
        }), !db && (0, rb.jsx)(Bb.d, {
          className: "AnimFadeIn",
          page: ab,
          totalPages: Hw,
          onSetPage: bb => {
            nb({
              scope: Qb,
              category: qb,
              page: bb
            })
          }
        })]
      })
    }
  },
  5825: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      f: () => pb
    });
    var eb = Mb(1713),
      Hb = Mb(1364);

    function pb(bb) {
      let {
        thumbnail: wb,
        name: Mb
      } = bb;
      return (0, Hb.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Hb.jsx)("div", {
          className: "StudioTableThumbnail",
          children: wb
        }), (0, Hb.jsx)("span", {
          className: "StudioTableGameName",
          children: Mb
        })]
      })
    }

    function Vb(bb) {
      let {
        game: wb
      } = bb;
      return (0, Hb.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, eb.l)(wb),
        alt: ""
      })
    }
  },
  7572: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    const eb = {
      1: Mb(7579),
      2: Mb(7586),
      3: Mb(7593)
    }
  },
  5822: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(1364);

    function gb(bb) {
      let {
        columns: wb,
        rows: Mb,
        getRowKey: Hb,
        renderRow: gb,
        className: lb
      } = bb;
      return (0, Vb.jsxs)("table", {
        className: pb()("Table", lb),
        children: [(0, Vb.jsx)("thead", {
          children: (0, Vb.jsx)("tr", {
            children: wb.map((bb => (0, Vb.jsx)("th", {
              children: bb.header
            }, bb.key)))
          })
        }), (0, Vb.jsx)("tbody", {
          children: Mb.map(((bb, wb) => (0, Vb.jsx)(eb.Fragment, {
            children: gb(bb, wb)
          }, Hb(bb))))
        })]
      })
    }
  },
  5812: () => {},
  7579: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  7586: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  7593: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);