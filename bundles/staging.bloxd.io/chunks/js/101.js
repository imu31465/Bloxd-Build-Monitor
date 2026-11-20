export const id = 101;
export const ids = [101];
export const modules = {
  4672: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(966),
      Ub = hb(1242),
      Lb = hb(3291),
      Yb = hb(115),
      Sb = hb(3330),
      ab = hb(3323),
      Hb = hb(1007);

    function wb(bb) {
      let {
        game: ub
      } = bb;
      const hb = (0, Yb.j)() ? "large" : "small",
        Bb = (0, Sb.i)(ub, hb),
        wb = (0, Lb.h)(Bb),
        Zb = void 0 !== wb.blurhash;
      return (0, Hb.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [wb.isLoading && !Zb && (0, Hb.jsx)(Ub.c, {
          loaderType: "Secondary"
        }), !wb.failed && (null !== wb.src || Zb) && (0, Hb.jsx)("div", {
          className: Ob()("SchematicImage", ab.g, {
            SchematicImageFadeIn: wb.fadeIn && !Zb
          }),
          style: (0, ab.f)(wb),
          children: (0, Hb.jsx)(ab.d, {
            image: wb
          })
        }), wb.failed && (0, Hb.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Hb.jsx)(Gb.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6243: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Mb
    });
    hb(4670);
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(298),
      Lb = hb(944),
      Yb = hb(1124),
      Sb = hb(931),
      ab = hb(1095),
      Hb = hb(1398),
      wb = hb(3339),
      Zb = hb(1029),
      Xb = hb(4672),
      pb = hb(2418),
      ob = hb(1357),
      Ab = hb(4327),
      lb = hb(4679),
      Kb = hb(1242),
      Wb = hb(1415),
      Cb = hb(4322),
      db = hb(2389),
      rb = hb(4683),
      jb = hb(6142),
      nb = hb(1442),
      Db = hb(1007);
    const xb = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      zb = 25,
      gb = "scope",
      ib = "category",
      vb = "customGames";
    const tb = 7,
      Jb = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function eb(bb) {
      let {
        position: ub
      } = bb;
      const hb = jb.b[ub];
      return (0, Db.jsxs)("td", {
        className: Gb()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== hb,
          [`StudioLeaderboardTopPosition${ub}`]: void 0 !== hb
        }),
        children: [void 0 !== hb && (0, Db.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: hb,
          alt: ""
        }), ub]
      })
    }

    function Nb(bb) {
      let {
        discoverability: ub
      } = bb;
      const {
        playsPerDay: hb,
        avgPlaytimeMinutes: Ob,
        retention: Gb
      } = null === ub ? Jb : (0, wb.l)(ub);
      return (0, Db.jsxs)(Bb.Fragment, {
        children: [(0, Db.jsx)("td", {
          children: null !== hb ? (0, wb.d)(hb) : "-"
        }), (0, Db.jsx)("td", {
          children: null !== Ob ? (0, wb.e)(Ob) : "-"
        }), (0, Db.jsx)("td", {
          children: null !== Gb ? (0, wb.i)(Gb) : "-"
        })]
      })
    }

    function sb(bb) {
      let {
        discoverability: ub
      } = bb;
      return (0, Db.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === ub || void 0 === ub ? void 0 : ub.engagementScore) ? (0, Yb._)(Math.round(ub.engagementScore)) : "-"
      })
    }

    function Mb() {
      var bb, ub;
      const {
        t: hb
      } = (0, ab.K)(), Ob = (0, Wb.useNavigatePreserveSearch)(), {
        userContext: Gb,
        isUserContextUpdating: jb
      } = (0, Zb.d)(), Jb = (0, db.o)(), [Mb, mb] = (0, Cb.k)(), Ib = (Pb = Mb.get(gb), xb.some((bb => bb.scope === Pb)) ? Pb : vb);
      var Pb;
      const qb = function(bb) {
          return Ub.$.includes(bb) ? bb : null
        }(Mb.get(ib)),
        Eb = (0, Cb.d)(Mb.get(Cb.c)),
        [yb, Vb] = (0, Bb.useState)(null),
        [Fb, fb] = (0, Bb.useState)(!1);

      function kb(bb) {
        mb((ub => {
          (0, Cb.g)(ub, gb, bb.scope === vb ? null : bb.scope), (0, Cb.g)(ub, ib, bb.category), (0, Cb.h)(ub, bb.page)
        }))
      }
      const Tb = !jb && Gb.playerHasRank("developer"),
        cb = Tb && "allGames" === Ib,
        Qb = Tb && "dormantGames" === Ib;
      (0, Bb.useEffect)((() => {
        if (jb) return;
        let bb = !1;
        return Vb(null), fb(!1), Hb.e.getPublishedGamePreviews(Gb, {
          searchQuery: null,
          pageNumber: Eb,
          pageSize: zb,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== qb ? [qb] : [],
          upAndComing: !1,
          dormantGames: Qb,
          sortByEngagementScore: !0,
          firstPartyGameNames: cb ? Sb.d : void 0,
          includeOwners: !0
        }).then((ub => {
          bb || Vb(ub)
        })).catch((ub => {
          console.error("Failed to load the studio leaderboard", ub), bb || fb(!0)
        })), () => {
          bb = !0
        }
      }), [jb, cb, Qb, qb, Eb, Gb]);
      const Rb = null !== (bb = null === yb || void 0 === yb ? void 0 : yb.results) && void 0 !== bb ? bb : null,
        bu = function(bb, ub, hb) {
          const [Ob, Gb] = (0, Bb.useState)({}), Ub = hb ? (null !== bb && void 0 !== bb ? bb : []).flatMap((bb => "firstPartyGame" === bb.type ? [(0, Lb.e)(bb.gameNameWithVariation, !0)] : [])).join(",") : "", Yb = (0, Bb.useMemo)((() => "" === Ub ? [] : Ub.split(",")), [Ub]);
          return (0, Bb.useEffect)((() => {
            if (0 === Yb.length) return void Gb({});
            let bb = !1;
            return Hb.e.getGamesByAnalyticsIds(ub, Yb).then((ub => {
              bb || Gb(ub)
            })).catch((bb => {
              console.error("Failed to load first party discoverability for the studio leaderboard", bb)
            })), () => {
              bb = !0
            }
          }), [Yb, ub]), Ob
        }(Rb, Gb, Tb),
        uu = null !== Rb ? function(bb, ub, hb, Bb, Ob) {
          return bb.map(((bb, Gb) => {
            var Ub;
            const Yb = Bb + Gb + 1;
            if ("customGame" === bb.type) {
              const ub = bb.preview;
              return {
                key: ub.schematicId,
                position: Yb,
                thumbnail: (0, Db.jsx)(Xb.b, {
                  game: ub
                }),
                name: ub.name,
                owner: bb.owner,
                category: ub.gameCategory,
                ccu: ub.ccu,
                favourites: ub.favourites,
                discoverability: (0, wb.n)(ub) ? ub : null,
                url: (0, nb.k)((0, Lb.c)(ub.schematicId))
              }
            }
            const Sb = bb.gameNameWithVariation,
              ab = (0, Lb.e)(Sb, !0);
            return {
              key: Sb,
              position: Yb,
              thumbnail: (0, Db.jsx)(rb.d, {
                game: Sb
              }),
              name: (0, nb.j)(Sb, Ob),
              owner: null,
              category: (0, nb.e)(Sb),
              ccu: (0, db.d)(Sb, ub),
              favourites: null,
              discoverability: null !== (Ub = hb[ab]) && void 0 !== Ub ? Ub : null,
              url: (0, nb.k)(ab)
            }
          }))
        }(Rb, Jb, bu, (Eb - 1) * zb, hb) : [],
        hu = !Fb && null === yb,
        Bu = !hu && !Fb && 0 === uu.length,
        Ou = null !== (ub = null === yb || void 0 === yb ? void 0 : yb.totalPages) && void 0 !== ub ? ub : 1;
      return (0, Db.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, Db.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Db.jsx)("h1", {
            className: "StudioPageTitle",
            children: hb("studio:leaderboard")
          })
        }), (0, Db.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!Qb && (0, Db.jsx)("div", {
            children: hb("studio:leaderboardBanner")
          }), Qb && (0, Db.jsx)("div", {
            children: hb("studio:leaderboardDormantBanner")
          }), (0, Db.jsx)("div", {
            children: hb("studio:leaderboardMetricsBanner", {
              days: tb
            })
          })]
        }), Tb && (0, Db.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: xb.map((bb => (0, Db.jsx)(ob.O, {
            active: Ib === bb.scope,
            onClick: () => {
              kb({
                scope: bb.scope,
                category: qb,
                page: 1
              })
            },
            children: hb(bb.title)
          }, bb.scope)))
        }), (0, Db.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, Db.jsx)(ob.O, {
            active: null === qb,
            onClick: () => {
              kb({
                scope: Ib,
                category: null,
                page: 1
              })
            },
            children: hb("studio:leaderboardAllCategories")
          }), Ub.$.map((bb => (0, Db.jsx)(ob.O, {
            active: qb === bb,
            onClick: () => {
              kb({
                scope: Ib,
                category: bb,
                page: 1
              })
            },
            children: (0, Ub.mb)(bb)
          }, bb)))]
        }), hu && (0, Db.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Db.jsx)(Kb.c, {})
        }), Fb && (0, Db.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: hb("studio:failedToLoadLeaderboard")
        }), Bu && (0, Db.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: hb("studio:leaderboardEmpty")
        }), !hu && !Fb && !Bu && (0, Db.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, Db.jsx)(lb.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: hb("general:game")
            }, {
              key: "owner",
              header: hb("general:owner")
            }, ...null === qb ? [{
              key: "category",
              header: hb("general:category")
            }] : [], ...Tb ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: hb("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: hb("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: hb("studio:leaderboardSessionsPerPlayer")
            }, ...Qb ? [] : [{
              key: "ccu",
              header: hb("studio:metricCcu")
            }], {
              key: "favourites",
              header: hb("general:favourites")
            }],
            rows: uu,
            getRowKey: bb => bb.key,
            renderRow: bb => (0, Db.jsxs)("tr", {
              onClick: () => {
                Ob(bb.url)
              },
              children: [(0, Db.jsx)(eb, {
                position: bb.position
              }), (0, Db.jsx)("td", {
                children: (0, Db.jsx)(rb.f, {
                  thumbnail: bb.thumbnail,
                  name: bb.name
                })
              }), (0, Db.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === bb.owner && "-", null !== bb.owner && (0, Db.jsx)(pb.h, {
                  playerSocialPreview: bb.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === qb && (0, Db.jsx)("td", {
                children: (0, Ub.mb)(bb.category)
              }), Tb && (0, Db.jsx)(sb, {
                discoverability: bb.discoverability
              }), (0, Db.jsx)(Nb, {
                discoverability: bb.discoverability
              }), !Qb && (0, Db.jsx)("td", {
                children: null !== bb.ccu ? (0, Yb._)(bb.ccu) : "-"
              }), (0, Db.jsx)("td", {
                children: null !== bb.favourites ? (0, Yb._)(bb.favourites) : "-"
              })]
            })
          })
        }), !Fb && (0, Db.jsx)(Ab.e, {
          className: "AnimFadeIn",
          page: Eb,
          totalPages: Ou,
          onSetPage: bb => {
            kb({
              scope: Ib,
              category: qb,
              page: bb
            })
          }
        })]
      })
    }
  },
  4683: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      f: () => Gb
    });
    var Bb = hb(1442),
      Ob = hb(1007);

    function Gb(bb) {
      let {
        thumbnail: ub,
        name: hb
      } = bb;
      return (0, Ob.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Ob.jsx)("div", {
          className: "StudioTableThumbnail",
          children: ub
        }), (0, Ob.jsx)("span", {
          className: "StudioTableGameName",
          children: hb
        })]
      })
    }

    function Ub(bb) {
      let {
        game: ub
      } = bb;
      return (0, Ob.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Bb.i)(ub),
        alt: ""
      })
    }
  },
  6142: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    const Bb = {
      1: hb(6146),
      2: hb(6151),
      3: hb(6158)
    }
  },
  4679: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(1007);

    function Lb(bb) {
      let {
        columns: ub,
        rows: hb,
        getRowKey: Ob,
        renderRow: Lb,
        className: Yb
      } = bb;
      return (0, Ub.jsxs)("table", {
        className: Gb()("Table", Yb),
        children: [(0, Ub.jsx)("thead", {
          children: (0, Ub.jsx)("tr", {
            children: ub.map((bb => (0, Ub.jsx)("th", {
              children: bb.header
            }, bb.key)))
          })
        }), (0, Ub.jsx)("tbody", {
          children: hb.map((bb => (0, Ub.jsx)(Bb.Fragment, {
            children: Lb(bb)
          }, Ob(bb))))
        })]
      })
    }
  },
  4670: () => {},
  6146: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6151: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6158: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);