export const id = 100;
export const ids = [100];
export const modules = {
  4595: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Pb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(990),
      Eb = Ub(1254),
      Yb = Ub(3180),
      Bb = Ub(137),
      eb = Ub(3211),
      vb = Ub(3200),
      Lb = Ub(1023);

    function Pb(bb) {
      let {
        game: ab
      } = bb;
      const Ub = (0, Bb.j)() ? "large" : "small",
        Ab = (0, eb.c)(ab, Ub),
        Pb = (0, Yb.f)(Ab),
        Xb = void 0 !== Pb.blurhash;
      return (0, Lb.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Pb.isLoading && !Xb && (0, Lb.jsx)(Eb.b, {
          loaderType: "Secondary"
        }), !Pb.failed && (null !== Pb.src || Xb) && (0, Lb.jsx)("div", {
          className: Mb()("SchematicImage", vb.f, {
            SchematicImageFadeIn: Pb.fadeIn && !Xb
          }),
          style: (0, vb.d)(Pb),
          children: (0, Lb.jsx)(vb.c, {
            image: Pb
          })
        }), Pb.failed && (0, Lb.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Lb.jsx)(Tb.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6117: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => rb
    });
    Ub(4589);
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(307),
      Yb = Ub(963),
      Bb = Ub(1162),
      eb = Ub(945),
      vb = Ub(1134),
      Lb = Ub(1413),
      Pb = Ub(3220),
      Xb = Ub(1060),
      jb = Ub(4595),
      Rb = Ub(2397),
      kb = Ub(1352),
      yb = Ub(4244),
      Zb = Ub(4598),
      Db = Ub(1254),
      zb = Ub(1433),
      xb = Ub(4239),
      ib = Ub(2348),
      fb = Ub(4607),
      mb = Ub(6022),
      pb = Ub(1458),
      Nb = Ub(1023);
    const Wb = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      Hb = 25,
      Ib = "scope",
      db = "category",
      Fb = "customGames";
    const hb = 7,
      Gb = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function Qb(bb) {
      let {
        position: ab
      } = bb;
      const Ub = mb.b[ab];
      return (0, Nb.jsxs)("td", {
        className: Tb()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== Ub,
          [`StudioLeaderboardTopPosition${ab}`]: void 0 !== Ub
        }),
        children: [void 0 !== Ub && (0, Nb.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: Ub,
          alt: ""
        }), ab]
      })
    }

    function qb(bb) {
      let {
        discoverability: ab
      } = bb;
      const {
        playsPerDay: Ub,
        avgPlaytimeMinutes: Mb,
        retention: Tb
      } = null === ab ? Gb : (0, Pb.m)(ab);
      return (0, Nb.jsxs)(Ab.Fragment, {
        children: [(0, Nb.jsx)("td", {
          children: null !== Ub ? (0, Pb.d)(Ub) : "-"
        }), (0, Nb.jsx)("td", {
          children: null !== Mb ? (0, Pb.e)(Mb) : "-"
        }), (0, Nb.jsx)("td", {
          children: null !== Tb ? (0, Pb.i)(Tb) : "-"
        })]
      })
    }

    function ub(bb) {
      let {
        discoverability: ab
      } = bb;
      return (0, Nb.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === ab || void 0 === ab ? void 0 : ab.engagementScore) ? (0, Bb.T)(Math.round(ab.engagementScore)) : "-"
      })
    }

    function rb() {
      var bb, ab;
      const {
        t: Ub
      } = (0, vb.A)(), Mb = (0, zb.useNavigatePreserveSearch)(), {
        userContext: Tb,
        isUserContextUpdating: mb
      } = (0, Xb.c)(), Gb = (0, ib.m)(), [rb, Kb] = (0, xb.l)(), ob = (lb = rb.get(Ib), Wb.some((bb => bb.scope === lb)) ? lb : Fb);
      var lb;
      const tb = function(bb) {
          return Eb.N.includes(bb) ? bb : null
        }(rb.get(db)),
        wb = (0, xb.e)(rb.get(xb.b)),
        [sb, gb] = (0, Ab.useState)(null),
        [Cb, Vb] = (0, Ab.useState)(!1);

      function Ob(bb) {
        Kb((ab => {
          (0, xb.f)(ab, Ib, bb.scope === Fb ? null : bb.scope), (0, xb.f)(ab, db, bb.category), (0, xb.h)(ab, bb.page)
        }))
      }
      const cb = !mb && Tb.playerHasRank("developer"),
        Jb = cb && "allGames" === ob,
        nb = cb && "dormantGames" === ob;
      (0, Ab.useEffect)((() => {
        if (mb) return;
        let bb = !1;
        return gb(null), Vb(!1), Lb.b.getPublishedGamePreviews(Tb, {
          searchQuery: null,
          pageNumber: wb,
          pageSize: Hb,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== tb ? [tb] : [],
          upAndComing: !1,
          dormantGames: nb,
          sortByEngagementScore: !0,
          firstPartyGameNames: Jb ? eb.c : void 0,
          includeOwners: !0
        }).then((ab => {
          bb || gb(ab)
        })).catch((ab => {
          console.error("Failed to load the studio leaderboard", ab), bb || Vb(!0)
        })), () => {
          bb = !0
        }
      }), [mb, Jb, nb, tb, wb, Tb]);
      const Sb = null !== (bb = null === sb || void 0 === sb ? void 0 : sb.results) && void 0 !== bb ? bb : null,
        ba = function(bb, ab, Ub) {
          const [Mb, Tb] = (0, Ab.useState)({}), Eb = Ub ? (null !== bb && void 0 !== bb ? bb : []).flatMap((bb => "firstPartyGame" === bb.type ? [(0, Yb.h)(bb.gameNameWithVariation, !0)] : [])).join(",") : "", Bb = (0, Ab.useMemo)((() => "" === Eb ? [] : Eb.split(",")), [Eb]);
          return (0, Ab.useEffect)((() => {
            if (0 === Bb.length) return void Tb({});
            let bb = !1;
            return Lb.b.getGamesByAnalyticsIds(ab, Bb).then((ab => {
              bb || Tb(ab)
            })).catch((bb => {
              console.error("Failed to load first party discoverability for the studio leaderboard", bb)
            })), () => {
              bb = !0
            }
          }), [Bb, ab]), Mb
        }(Sb, Tb, cb),
        aa = null !== Sb ? function(bb, ab, Ub, Ab, Mb) {
          return bb.map(((bb, Tb) => {
            var Eb;
            const Bb = Ab + Tb + 1;
            if ("customGame" === bb.type) {
              const ab = bb.preview;
              return {
                key: ab.schematicId,
                position: Bb,
                thumbnail: (0, Nb.jsx)(jb.e, {
                  game: ab
                }),
                name: ab.name,
                owner: bb.owner,
                category: ab.gameCategory,
                ccu: ab.ccu,
                favourites: ab.favourites,
                discoverability: (0, Pb.o)(ab) ? ab : null,
                url: (0, pb.i)((0, Yb.d)(ab.schematicId))
              }
            }
            const eb = bb.gameNameWithVariation,
              vb = (0, Yb.h)(eb, !0);
            return {
              key: eb,
              position: Bb,
              thumbnail: (0, Nb.jsx)(fb.d, {
                game: eb
              }),
              name: (0, pb.h)(eb, Mb),
              owner: null,
              category: (0, pb.d)(eb),
              ccu: (0, ib.e)(eb, ab),
              favourites: null,
              discoverability: null !== (Eb = Ub[vb]) && void 0 !== Eb ? Eb : null,
              url: (0, pb.i)(vb)
            }
          }))
        }(Sb, Gb, ba, (wb - 1) * Hb, Ub) : [],
        Ua = !Cb && null === sb,
        Aa = !Ua && !Cb && 0 === aa.length,
        Ma = null !== (ab = null === sb || void 0 === sb ? void 0 : sb.totalPages) && void 0 !== ab ? ab : 1;
      return (0, Nb.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, Nb.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Nb.jsx)("h1", {
            className: "StudioPageTitle",
            children: Ub("studio:leaderboard")
          })
        }), (0, Nb.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!nb && (0, Nb.jsx)("div", {
            children: Ub("studio:leaderboardBanner")
          }), nb && (0, Nb.jsx)("div", {
            children: Ub("studio:leaderboardDormantBanner")
          }), (0, Nb.jsx)("div", {
            children: Ub("studio:leaderboardMetricsBanner", {
              days: hb
            })
          })]
        }), cb && (0, Nb.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Wb.map((bb => (0, Nb.jsx)(kb.M, {
            active: ob === bb.scope,
            onClick: () => {
              Ob({
                scope: bb.scope,
                category: tb,
                page: 1
              })
            },
            children: Ub(bb.title)
          }, bb.scope)))
        }), (0, Nb.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, Nb.jsx)(kb.M, {
            active: null === tb,
            onClick: () => {
              Ob({
                scope: ob,
                category: null,
                page: 1
              })
            },
            children: Ub("studio:leaderboardAllCategories")
          }), Eb.N.map((bb => (0, Nb.jsx)(kb.M, {
            active: tb === bb,
            onClick: () => {
              Ob({
                scope: ob,
                category: bb,
                page: 1
              })
            },
            children: (0, Eb._)(bb)
          }, bb)))]
        }), Ua && (0, Nb.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Nb.jsx)(Db.b, {})
        }), Cb && (0, Nb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Ub("studio:failedToLoadLeaderboard")
        }), Aa && (0, Nb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Ub("studio:leaderboardEmpty")
        }), !Ua && !Cb && !Aa && (0, Nb.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, Nb.jsx)(Zb.b, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: Ub("general:game")
            }, {
              key: "owner",
              header: Ub("general:owner")
            }, ...null === tb ? [{
              key: "category",
              header: Ub("general:category")
            }] : [], ...cb ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: Ub("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: Ub("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: Ub("studio:leaderboardSessionsPerPlayer")
            }, ...nb ? [] : [{
              key: "ccu",
              header: Ub("studio:metricCcu")
            }], {
              key: "favourites",
              header: Ub("general:favourites")
            }],
            rows: aa,
            getRowKey: bb => bb.key,
            renderRow: bb => (0, Nb.jsxs)("tr", {
              onClick: () => {
                Mb(bb.url)
              },
              children: [(0, Nb.jsx)(Qb, {
                position: bb.position
              }), (0, Nb.jsx)("td", {
                children: (0, Nb.jsx)(fb.h, {
                  thumbnail: bb.thumbnail,
                  name: bb.name
                })
              }), (0, Nb.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === bb.owner && "-", null !== bb.owner && (0, Nb.jsx)(Rb.h, {
                  playerSocialPreview: bb.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === tb && (0, Nb.jsx)("td", {
                children: (0, Eb._)(bb.category)
              }), cb && (0, Nb.jsx)(ub, {
                discoverability: bb.discoverability
              }), (0, Nb.jsx)(qb, {
                discoverability: bb.discoverability
              }), !nb && (0, Nb.jsx)("td", {
                children: null !== bb.ccu ? (0, Bb.T)(bb.ccu) : "-"
              }), (0, Nb.jsx)("td", {
                children: null !== bb.favourites ? (0, Bb.T)(bb.favourites) : "-"
              })]
            })
          })
        }), !Cb && (0, Nb.jsx)(yb.e, {
          className: "AnimFadeIn",
          page: wb,
          totalPages: Ma,
          onSetPage: bb => {
            Ob({
              scope: ob,
              category: tb,
              page: bb
            })
          }
        })]
      })
    }
  },
  4607: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      h: () => Tb
    });
    var Ab = Ub(1458),
      Mb = Ub(1023);

    function Tb(bb) {
      let {
        thumbnail: ab,
        name: Ub
      } = bb;
      return (0, Mb.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Mb.jsx)("div", {
          className: "StudioTableThumbnail",
          children: ab
        }), (0, Mb.jsx)("span", {
          className: "StudioTableGameName",
          children: Ub
        })]
      })
    }

    function Eb(bb) {
      let {
        game: ab
      } = bb;
      return (0, Mb.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Ab.g)(ab),
        alt: ""
      })
    }
  },
  6022: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    const Ab = {
      1: Ub(6025),
      2: Ub(6033),
      3: Ub(6041)
    }
  },
  4598: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Yb
    });
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(1023);

    function Yb(bb) {
      let {
        columns: ab,
        rows: Ub,
        getRowKey: Mb,
        renderRow: Yb,
        className: Bb
      } = bb;
      return (0, Eb.jsxs)("table", {
        className: Tb()("Table", Bb),
        children: [(0, Eb.jsx)("thead", {
          children: (0, Eb.jsx)("tr", {
            children: ab.map((bb => (0, Eb.jsx)("th", {
              children: bb.header
            }, bb.key)))
          })
        }), (0, Eb.jsx)("tbody", {
          children: Ub.map((bb => (0, Eb.jsx)(Ab.Fragment, {
            children: Yb(bb)
          }, Mb(bb))))
        })]
      })
    }
  },
  4589: () => {},
  6025: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6033: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6041: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);