export const id = 99;
export const ids = [99];
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
  4606: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Jb
    });
    sb(4608);
    var kb = sb(64),
      Wb = sb(1033),
      ab = sb.n(Wb),
      Tb = sb(334),
      Ub = sb(1015),
      Ib = sb(1235),
      Hb = sb(1197),
      fb = sb(1117),
      Mb = sb(1474),
      Xb = sb(4615),
      nb = sb(1431),
      mb = sb(4622),
      lb = sb(1327),
      Qb = sb(1495),
      eb = sb(4375),
      Cb = sb(1039),
      Nb = sb(1001),
      Vb = sb(2396),
      Lb = sb(4625),
      ub = sb(1528),
      Yb = sb(1087);

    function hb() {
      const {
        t: bb
      } = (0, Hb.E)(), cb = (0, Qb.useNavigatePreserveSearch)(), sb = (0, Vb.p)(), Wb = (0, kb.useMemo)((() => [...Nb.c].sort(((cb, kb) => {
        var Wb, ab;
        const Tb = (null !== (Wb = (0, Vb.d)(kb, sb)) && void 0 !== Wb ? Wb : 0) - (null !== (ab = (0, Vb.d)(cb, sb)) && void 0 !== ab ? ab : 0);
        return 0 !== Tb ? Tb : (0, ub.i)(cb, bb).localeCompare((0, ub.i)(kb, bb))
      }))), [sb, bb]);
      return (0, Yb.jsxs)(Yb.Fragment, {
        children: [(0, Yb.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Yb.jsx)("h1", {
            className: "StudioPageTitle",
            children: bb("studio:firstPartyGames")
          })
        }), (0, Yb.jsx)(mb.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: bb("general:game")
          }, {
            key: "ccu",
            header: bb("studio:metricCcu")
          }],
          rows: Wb,
          getRowKey: bb => bb,
          renderRow: kb => {
            var Wb;
            return (0, Yb.jsxs)("tr", {
              onClick: () => {
                cb((0, ub.l)((0, Ub.f)(kb, !0)))
              },
              children: [(0, Yb.jsx)("td", {
                children: (0, Yb.jsx)(Lb.h, {
                  thumbnail: (0, Yb.jsx)(Lb.e, {
                    game: kb
                  }),
                  name: (0, ub.i)(kb, bb)
                })
              }), (0, Yb.jsx)("td", {
                children: (0, Ib.K)(null !== (Wb = (0, Vb.d)(kb, sb)) && void 0 !== Wb ? Wb : 0)
              })]
            })
          }
        })]
      })
    }

    function Jb() {
      const {
        t: bb
      } = (0, Hb.E)(), cb = (0, Qb.useNavigatePreserveSearch)(), {
        userContext: sb,
        isUserContextUpdating: Wb
      } = (0, fb.c)(), {
        isCreating: Nb,
        create: Vb
      } = (0, eb.c)(), [Jb, gb] = (0, kb.useState)(null), [Bb, tb] = (0, kb.useState)(null), [yb, Pb] = (0, kb.useState)(!1);
      (0, kb.useEffect)((() => {
        Wb || (Pb(!1), Mb.b.getPublishedGamePreviews(sb, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((bb => {
          gb({
            ...bb,
            results: (0, Tb.fb)(bb.results)
          })
        })).catch((bb => {
          console.error("Failed to get owned published games", bb), Pb(!0)
        })), Mb.b.getOwnedUnpublishedGames(sb).then((bb => {
          tb(bb)
        })).catch((bb => {
          console.error("Failed to get owned unpublished games", bb), Pb(!0)
        })))
      }), [Wb, sb]);
      const Db = null !== Jb && null !== Bb ? [...Jb.results, ...Bb] : [],
        Eb = !yb && (null === Jb || null === Bb),
        ib = !Eb && !yb && 0 === Db.length,
        Ob = !Wb && sb.playerHasRank("developer");
      return (0, Yb.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, Yb.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, Yb.jsx)("h1", {
            className: "StudioPageTitle",
            children: bb("studio:myGames")
          }), (0, Yb.jsxs)(nb.n, {
            onClick: Vb,
            loading: Nb,
            children: [(0, Yb.jsx)(Cb.b, {
              name: "plus"
            }), " ", bb("homePage:createCustomGame")]
          })]
        }), Eb && (0, Yb.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Yb.jsx)(lb.d, {})
        }), yb && (0, Yb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: bb("studio:failedToLoadGames")
        }), ib && (0, Yb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: bb("studio:noGamesYet")
        }), !Eb && !yb && !ib && (0, Yb.jsx)(mb.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: bb("general:game")
          }, {
            key: "status",
            header: bb("general:status")
          }, {
            key: "ccu",
            header: bb("studio:metricCcu")
          }, {
            key: "favourites",
            header: bb("general:favourites")
          }],
          rows: Db,
          getRowKey: bb => bb.schematicId,
          renderRow: sb => (0, Yb.jsxs)("tr", {
            onClick: () => {
              var bb;
              bb = sb.schematicId, cb((0, ub.l)((0, Ub.c)(bb)))
            },
            children: [(0, Yb.jsx)("td", {
              children: (0, Yb.jsx)(Lb.h, {
                thumbnail: (0, Yb.jsx)(Xb.c, {
                  game: sb
                }),
                name: sb.name
              })
            }), (0, Yb.jsx)("td", {
              children: (0, Yb.jsx)("span", {
                className: ab()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: sb.gamePublished
                }),
                children: sb.gamePublished ? bb("general:published") : bb("general:draft")
              })
            }), (0, Yb.jsx)("td", {
              children: (0, Ib.K)(sb.ccu)
            }), (0, Yb.jsx)("td", {
              children: (0, Ib.K)(sb.favourites)
            })]
          })
        }), Ob && (0, Yb.jsx)(hb, {})]
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
  4608: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);