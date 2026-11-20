export const id = 100;
export const ids = [100];
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
  4662: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => nb
    });
    hb(4670);
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(298),
      Lb = hb(944),
      Yb = hb(1124),
      Sb = hb(1095),
      ab = hb(1029),
      Hb = hb(1398),
      wb = hb(4672),
      Zb = hb(1357),
      Xb = hb(4679),
      pb = hb(1242),
      ob = hb(1415),
      Ab = hb(4401),
      lb = hb(966),
      Kb = hb(931),
      Wb = hb(2389),
      Cb = hb(4683),
      db = hb(1442),
      rb = hb(1007);

    function jb() {
      const {
        t: bb
      } = (0, Sb.K)(), ub = (0, ob.useNavigatePreserveSearch)(), hb = (0, Wb.o)(), Ob = (0, Bb.useMemo)((() => [...Kb.d].sort(((ub, Bb) => {
        var Ob, Gb;
        const Ub = (null !== (Ob = (0, Wb.d)(Bb, hb)) && void 0 !== Ob ? Ob : 0) - (null !== (Gb = (0, Wb.d)(ub, hb)) && void 0 !== Gb ? Gb : 0);
        return 0 !== Ub ? Ub : (0, db.j)(ub, bb).localeCompare((0, db.j)(Bb, bb))
      }))), [hb, bb]);
      return (0, rb.jsxs)(rb.Fragment, {
        children: [(0, rb.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, rb.jsx)("h1", {
            className: "StudioPageTitle",
            children: bb("studio:firstPartyGames")
          })
        }), (0, rb.jsx)(Xb.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: bb("general:game")
          }, {
            key: "ccu",
            header: bb("studio:metricCcu")
          }],
          rows: Ob,
          getRowKey: bb => bb,
          renderRow: Bb => {
            var Ob;
            return (0, rb.jsxs)("tr", {
              onClick: () => {
                ub((0, db.k)((0, Lb.e)(Bb, !0)))
              },
              children: [(0, rb.jsx)("td", {
                children: (0, rb.jsx)(Cb.f, {
                  thumbnail: (0, rb.jsx)(Cb.d, {
                    game: Bb
                  }),
                  name: (0, db.j)(Bb, bb)
                })
              }), (0, rb.jsx)("td", {
                children: (0, Yb._)(null !== (Ob = (0, Wb.d)(Bb, hb)) && void 0 !== Ob ? Ob : 0)
              })]
            })
          }
        })]
      })
    }

    function nb() {
      const {
        t: bb
      } = (0, Sb.K)(), ub = (0, ob.useNavigatePreserveSearch)(), {
        userContext: hb,
        isUserContextUpdating: Ob
      } = (0, ab.d)(), {
        isCreating: Kb,
        create: Wb
      } = (0, Ab.f)(), [nb, Db] = (0, Bb.useState)(null), [xb, zb] = (0, Bb.useState)(null), [gb, ib] = (0, Bb.useState)(!1);
      (0, Bb.useEffect)((() => {
        Ob || (ib(!1), Hb.e.getPublishedGamePreviews(hb, {
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
          Db({
            ...bb,
            results: (0, Ub.ib)(bb.results)
          })
        })).catch((bb => {
          console.error("Failed to get owned published games", bb), ib(!0)
        })), Hb.e.getOwnedUnpublishedGames(hb).then((bb => {
          zb(bb)
        })).catch((bb => {
          console.error("Failed to get owned unpublished games", bb), ib(!0)
        })))
      }), [Ob, hb]);
      const vb = null !== nb && null !== xb ? [...nb.results, ...xb] : [],
        tb = !gb && (null === nb || null === xb),
        Jb = !tb && !gb && 0 === vb.length,
        eb = !Ob && hb.playerHasRank("developer");
      return (0, rb.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, rb.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, rb.jsx)("h1", {
            className: "StudioPageTitle",
            children: bb("studio:myGames")
          }), (0, rb.jsxs)(Zb.m, {
            onClick: Wb,
            loading: Kb,
            children: [(0, rb.jsx)(lb.e, {
              name: "plus"
            }), " ", bb("homePage:createCustomGame")]
          })]
        }), tb && (0, rb.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, rb.jsx)(pb.c, {})
        }), gb && (0, rb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: bb("studio:failedToLoadGames")
        }), Jb && (0, rb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: bb("studio:noGamesYet")
        }), !tb && !gb && !Jb && (0, rb.jsx)(Xb.c, {
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
          rows: vb,
          getRowKey: bb => bb.schematicId,
          renderRow: hb => (0, rb.jsxs)("tr", {
            onClick: () => {
              var bb;
              bb = hb.schematicId, ub((0, db.k)((0, Lb.c)(bb)))
            },
            children: [(0, rb.jsx)("td", {
              children: (0, rb.jsx)(Cb.f, {
                thumbnail: (0, rb.jsx)(wb.b, {
                  game: hb
                }),
                name: hb.name
              })
            }), (0, rb.jsx)("td", {
              children: (0, rb.jsx)("span", {
                className: Gb()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: hb.gamePublished
                }),
                children: hb.gamePublished ? bb("general:published") : bb("general:draft")
              })
            }), (0, rb.jsx)("td", {
              children: (0, Yb._)(hb.ccu)
            }), (0, rb.jsx)("td", {
              children: (0, Yb._)(hb.favourites)
            })]
          })
        }), eb && (0, rb.jsx)(jb, {})]
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
  4670: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);