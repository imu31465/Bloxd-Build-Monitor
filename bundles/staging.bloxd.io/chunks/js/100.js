export const id = 100;
export const ids = [100];
export const modules = {
  4615: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Xb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(1039),
      Tb = sb(1327),
      Ub = sb(3294),
      Ib = sb(167),
      Hb = sb(3335),
      fb = sb(3329),
      Mb = sb(1087);

    function Xb(bb) {
      let {
        game: cb
      } = bb;
      const sb = (0, Ib.k)() ? "large" : "small",
        kb = (0, Hb.f)(cb, sb),
        Xb = (0, Ub.f)(kb),
        nb = void 0 !== Xb.blurhash;
      return (0, Mb.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Xb.isLoading && !nb && (0, Mb.jsx)(Tb.d, {
          loaderType: "Secondary"
        }), !Xb.failed && (null !== Xb.src || nb) && (0, Mb.jsx)("div", {
          className: Wb()("SchematicImage", fb.h, {
            SchematicImageFadeIn: Xb.fadeIn && !nb
          }),
          style: (0, fb.e)(Xb),
          children: (0, Mb.jsx)(fb.c, {
            image: Xb
          })
        }), Xb.failed && (0, Mb.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Mb.jsx)(ab.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6167: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Zb
    });
    sb(4608);
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(334),
      Ub = sb(1015),
      Ib = sb(1235),
      Hb = sb(1001),
      fb = sb(1197),
      Mb = sb(1474),
      Xb = sb(3349),
      nb = sb(1117),
      mb = sb(4615),
      lb = sb(2441),
      Qb = sb(1431),
      eb = sb(4304),
      Cb = sb(4622),
      Nb = sb(1327),
      Vb = sb(1495),
      Lb = sb(4295),
      ub = sb(2396),
      Yb = sb(4625),
      hb = sb(6084),
      Jb = sb(1528),
      gb = sb(1087);
    const Bb = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      tb = 25,
      yb = "scope",
      Pb = "category",
      Db = "customGames";
    const Eb = 7,
      ib = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function Ob(bb) {
      let {
        position: cb
      } = bb;
      const sb = hb.c[cb];
      return (0, gb.jsxs)("td", {
        className: ab()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== sb,
          [`StudioLeaderboardTopPosition${cb}`]: void 0 !== sb
        }),
        children: [void 0 !== sb && (0, gb.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: sb,
          alt: ""
        }), cb]
      })
    }

    function Gb(bb) {
      let {
        discoverability: cb
      } = bb;
      const {
        playsPerDay: sb,
        avgPlaytimeMinutes: Wb,
        retention: ab
      } = null === cb ? ib : (0, Xb.k)(cb);
      return (0, gb.jsxs)(kb.Fragment, {
        children: [(0, gb.jsx)("td", {
          children: null !== sb ? (0, Xb.d)(sb) : "-"
        }), (0, gb.jsx)("td", {
          children: null !== Wb ? (0, Xb.f)(Wb) : "-"
        }), (0, gb.jsx)("td", {
          children: null !== ab ? (0, Xb.j)(ab) : "-"
        })]
      })
    }

    function Kb(bb) {
      let {
        discoverability: cb
      } = bb;
      return (0, gb.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === cb || void 0 === cb ? void 0 : cb.engagementScore) ? (0, Ib.K)(Math.round(cb.engagementScore)) : "-"
      })
    }

    function Zb() {
      var bb, cb;
      const {
        t: sb
      } = (0, fb.E)(), Wb = (0, Vb.useNavigatePreserveSearch)(), {
        userContext: ab,
        isUserContextUpdating: hb
      } = (0, nb.c)(), ib = (0, ub.p)(), [Zb, zb] = (0, Lb.m)(), qb = (db = Zb.get(yb), Bb.some((bb => bb.scope === db)) ? db : Db);
      var db;
      const Ab = function(bb) {
          return Tb._.includes(bb) ? bb : null
        }(Zb.get(Pb)),
        wb = (0, Lb.d)(Zb.get(Lb.b)),
        [rb, ob] = (0, kb.useState)(null),
        [Sb, Rb] = (0, kb.useState)(!1);

      function vb(bb) {
        zb((cb => {
          (0, Lb.g)(cb, yb, bb.scope === Db ? null : bb.scope), (0, Lb.g)(cb, Pb, bb.category), (0, Lb.k)(cb, bb.page)
        }))
      }
      const Fb = !hb && ab.playerHasRank("developer"),
        xb = Fb && "allGames" === qb,
        jb = Fb && "dormantGames" === qb;
      (0, kb.useEffect)((() => {
        if (hb) return;
        let bb = !1;
        return ob(null), Rb(!1), Mb.b.getPublishedGamePreviews(ab, {
          searchQuery: null,
          pageNumber: wb,
          pageSize: tb,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== Ab ? [Ab] : [],
          upAndComing: !1,
          dormantGames: jb,
          sortByEngagementScore: !0,
          firstPartyGameNames: xb ? Hb.c : void 0,
          includeOwners: !0
        }).then((cb => {
          bb || ob(cb)
        })).catch((cb => {
          console.error("Failed to load the studio leaderboard", cb), bb || Rb(!0)
        })), () => {
          bb = !0
        }
      }), [hb, xb, jb, Ab, wb, ab]);
      const pb = null !== (bb = null === rb || void 0 === rb ? void 0 : rb.results) && void 0 !== bb ? bb : null,
        bc = function(bb, cb, sb) {
          const [Wb, ab] = (0, kb.useState)({}), Tb = sb ? (null !== bb && void 0 !== bb ? bb : []).flatMap((bb => "firstPartyGame" === bb.type ? [(0, Ub.f)(bb.gameNameWithVariation, !0)] : [])).join(",") : "", Ib = (0, kb.useMemo)((() => "" === Tb ? [] : Tb.split(",")), [Tb]);
          return (0, kb.useEffect)((() => {
            if (0 === Ib.length) return void ab({});
            let bb = !1;
            return Mb.b.getGamesByAnalyticsIds(cb, Ib).then((cb => {
              bb || ab(cb)
            })).catch((bb => {
              console.error("Failed to load first party discoverability for the studio leaderboard", bb)
            })), () => {
              bb = !0
            }
          }), [Ib, cb]), Wb
        }(pb, ab, Fb),
        cc = null !== pb ? function(bb, cb, sb, kb, Wb) {
          return bb.map(((bb, ab) => {
            var Tb;
            const Ib = kb + ab + 1;
            if ("customGame" === bb.type) {
              const cb = bb.preview;
              return {
                key: cb.schematicId,
                position: Ib,
                thumbnail: (0, gb.jsx)(mb.c, {
                  game: cb
                }),
                name: cb.name,
                owner: bb.owner,
                category: cb.gameCategory,
                ccu: cb.ccu,
                favourites: cb.favourites,
                discoverability: (0, Xb.n)(cb) ? cb : null,
                url: (0, Jb.l)((0, Ub.c)(cb.schematicId))
              }
            }
            const Hb = bb.gameNameWithVariation,
              fb = (0, Ub.f)(Hb, !0);
            return {
              key: Hb,
              position: Ib,
              thumbnail: (0, gb.jsx)(Yb.e, {
                game: Hb
              }),
              name: (0, Jb.i)(Hb, Wb),
              owner: null,
              category: (0, Jb.b)(Hb),
              ccu: (0, ub.d)(Hb, cb),
              favourites: null,
              discoverability: null !== (Tb = sb[fb]) && void 0 !== Tb ? Tb : null,
              url: (0, Jb.l)(fb)
            }
          }))
        }(pb, ib, bc, (wb - 1) * tb, sb) : [],
        sc = !Sb && null === rb,
        kc = !sc && !Sb && 0 === cc.length,
        Wc = null !== (cb = null === rb || void 0 === rb ? void 0 : rb.totalPages) && void 0 !== cb ? cb : 1;
      return (0, gb.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, gb.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, gb.jsx)("h1", {
            className: "StudioPageTitle",
            children: sb("studio:leaderboard")
          })
        }), (0, gb.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!jb && (0, gb.jsx)("div", {
            children: sb("studio:leaderboardBanner")
          }), jb && (0, gb.jsx)("div", {
            children: sb("studio:leaderboardDormantBanner")
          }), (0, gb.jsx)("div", {
            children: sb("studio:leaderboardMetricsBanner", {
              days: Eb
            })
          })]
        }), Fb && (0, gb.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Bb.map((bb => (0, gb.jsx)(Qb.M, {
            active: qb === bb.scope,
            onClick: () => {
              vb({
                scope: bb.scope,
                category: Ab,
                page: 1
              })
            },
            children: sb(bb.title)
          }, bb.scope)))
        }), (0, gb.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, gb.jsx)(Qb.M, {
            active: null === Ab,
            onClick: () => {
              vb({
                scope: qb,
                category: null,
                page: 1
              })
            },
            children: sb("studio:leaderboardAllCategories")
          }), Tb._.map((bb => (0, gb.jsx)(Qb.M, {
            active: Ab === bb,
            onClick: () => {
              vb({
                scope: qb,
                category: bb,
                page: 1
              })
            },
            children: (0, Tb.lb)(bb)
          }, bb)))]
        }), sc && (0, gb.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, gb.jsx)(Nb.d, {})
        }), Sb && (0, gb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: sb("studio:failedToLoadLeaderboard")
        }), kc && (0, gb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: sb("studio:leaderboardEmpty")
        }), !sc && !Sb && !kc && (0, gb.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, gb.jsx)(Cb.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: sb("general:game")
            }, {
              key: "owner",
              header: sb("general:owner")
            }, ...null === Ab ? [{
              key: "category",
              header: sb("general:category")
            }] : [], ...Fb ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: sb("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: sb("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: sb("studio:leaderboardSessionsPerPlayer")
            }, ...jb ? [] : [{
              key: "ccu",
              header: sb("studio:metricCcu")
            }], {
              key: "favourites",
              header: sb("general:favourites")
            }],
            rows: cc,
            getRowKey: bb => bb.key,
            renderRow: bb => (0, gb.jsxs)("tr", {
              onClick: () => {
                Wb(bb.url)
              },
              children: [(0, gb.jsx)(Ob, {
                position: bb.position
              }), (0, gb.jsx)("td", {
                children: (0, gb.jsx)(Yb.h, {
                  thumbnail: bb.thumbnail,
                  name: bb.name
                })
              }), (0, gb.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === bb.owner && "-", null !== bb.owner && (0, gb.jsx)(lb.h, {
                  playerSocialPreview: bb.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === Ab && (0, gb.jsx)("td", {
                children: (0, Tb.lb)(bb.category)
              }), Fb && (0, gb.jsx)(Kb, {
                discoverability: bb.discoverability
              }), (0, gb.jsx)(Gb, {
                discoverability: bb.discoverability
              }), !jb && (0, gb.jsx)("td", {
                children: null !== bb.ccu ? (0, Ib.K)(bb.ccu) : "-"
              }), (0, gb.jsx)("td", {
                children: null !== bb.favourites ? (0, Ib.K)(bb.favourites) : "-"
              })]
            })
          })
        }), !Sb && (0, gb.jsx)(eb.d, {
          className: "AnimFadeIn",
          page: wb,
          totalPages: Wc,
          onSetPage: bb => {
            vb({
              scope: qb,
              category: Ab,
              page: bb
            })
          }
        })]
      })
    }
  },
  4625: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      h: () => ab
    });
    var kb = sb(1528),
      Wb = sb(1087);

    function ab(bb) {
      let {
        thumbnail: cb,
        name: sb
      } = bb;
      return (0, Wb.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Wb.jsx)("div", {
          className: "StudioTableThumbnail",
          children: cb
        }), (0, Wb.jsx)("span", {
          className: "StudioTableGameName",
          children: sb
        })]
      })
    }

    function Tb(bb) {
      let {
        game: cb
      } = bb;
      return (0, Wb.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, kb.h)(cb),
        alt: ""
      })
    }
  },
  6084: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    const kb = {
      1: sb(6091),
      2: sb(6094),
      3: sb(6096)
    }
  },
  4622: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ub
    });
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(1087);

    function Ub(bb) {
      let {
        columns: cb,
        rows: sb,
        getRowKey: Wb,
        renderRow: Ub,
        className: Ib
      } = bb;
      return (0, Tb.jsxs)("table", {
        className: ab()("Table", Ib),
        children: [(0, Tb.jsx)("thead", {
          children: (0, Tb.jsx)("tr", {
            children: cb.map((bb => (0, Tb.jsx)("th", {
              children: bb.header
            }, bb.key)))
          })
        }), (0, Tb.jsx)("tbody", {
          children: sb.map((bb => (0, Tb.jsx)(kb.Fragment, {
            children: Ub(bb)
          }, Wb(bb))))
        })]
      })
    }
  },
  4608: () => {},
  6091: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6094: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6096: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);