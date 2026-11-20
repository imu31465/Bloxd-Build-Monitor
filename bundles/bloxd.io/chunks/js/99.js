export const id = 99;
export const ids = [99];
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
  4580: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => pb
    });
    Ub(4589);
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(307),
      Yb = Ub(963),
      Bb = Ub(1162),
      eb = Ub(1134),
      vb = Ub(1060),
      Lb = Ub(1413),
      Pb = Ub(4595),
      Xb = Ub(1352),
      jb = Ub(4598),
      Rb = Ub(1254),
      kb = Ub(1433),
      yb = Ub(4321),
      Zb = Ub(990),
      Db = Ub(945),
      zb = Ub(2348),
      xb = Ub(4607),
      ib = Ub(1458),
      fb = Ub(1023);

    function mb() {
      const {
        t: bb
      } = (0, eb.A)(), ab = (0, kb.useNavigatePreserveSearch)(), Ub = (0, zb.m)(), Mb = (0, Ab.useMemo)((() => [...Db.c].sort(((ab, Ab) => {
        var Mb, Tb;
        const Eb = (null !== (Mb = (0, zb.e)(Ab, Ub)) && void 0 !== Mb ? Mb : 0) - (null !== (Tb = (0, zb.e)(ab, Ub)) && void 0 !== Tb ? Tb : 0);
        return 0 !== Eb ? Eb : (0, ib.h)(ab, bb).localeCompare((0, ib.h)(Ab, bb))
      }))), [Ub, bb]);
      return (0, fb.jsxs)(fb.Fragment, {
        children: [(0, fb.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, fb.jsx)("h1", {
            className: "StudioPageTitle",
            children: bb("studio:firstPartyGames")
          })
        }), (0, fb.jsx)(jb.b, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: bb("general:game")
          }, {
            key: "ccu",
            header: bb("studio:metricCcu")
          }],
          rows: Mb,
          getRowKey: bb => bb,
          renderRow: Ab => {
            var Mb;
            return (0, fb.jsxs)("tr", {
              onClick: () => {
                ab((0, ib.i)((0, Yb.h)(Ab, !0)))
              },
              children: [(0, fb.jsx)("td", {
                children: (0, fb.jsx)(xb.h, {
                  thumbnail: (0, fb.jsx)(xb.d, {
                    game: Ab
                  }),
                  name: (0, ib.h)(Ab, bb)
                })
              }), (0, fb.jsx)("td", {
                children: (0, Bb.T)(null !== (Mb = (0, zb.e)(Ab, Ub)) && void 0 !== Mb ? Mb : 0)
              })]
            })
          }
        })]
      })
    }

    function pb() {
      const {
        t: bb
      } = (0, eb.A)(), ab = (0, kb.useNavigatePreserveSearch)(), {
        userContext: Ub,
        isUserContextUpdating: Mb
      } = (0, vb.c)(), {
        isCreating: Db,
        create: zb
      } = (0, yb.f)(), [pb, Nb] = (0, Ab.useState)(null), [Wb, Hb] = (0, Ab.useState)(null), [Ib, db] = (0, Ab.useState)(!1);
      (0, Ab.useEffect)((() => {
        Mb || (db(!1), Lb.b.getPublishedGamePreviews(Ub, {
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
          Nb({
            ...bb,
            results: (0, Eb.W)(bb.results)
          })
        })).catch((bb => {
          console.error("Failed to get owned published games", bb), db(!0)
        })), Lb.b.getOwnedUnpublishedGames(Ub).then((bb => {
          Hb(bb)
        })).catch((bb => {
          console.error("Failed to get owned unpublished games", bb), db(!0)
        })))
      }), [Mb, Ub]);
      const Fb = null !== pb && null !== Wb ? [...pb.results, ...Wb] : [],
        hb = !Ib && (null === pb || null === Wb),
        Gb = !hb && !Ib && 0 === Fb.length,
        Qb = !Mb && Ub.playerHasRank("developer");
      return (0, fb.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, fb.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, fb.jsx)("h1", {
            className: "StudioPageTitle",
            children: bb("studio:myGames")
          }), (0, fb.jsxs)(Xb.m, {
            onClick: zb,
            loading: Db,
            children: [(0, fb.jsx)(Zb.e, {
              name: "plus"
            }), " ", bb("homePage:createCustomGame")]
          })]
        }), hb && (0, fb.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, fb.jsx)(Rb.b, {})
        }), Ib && (0, fb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: bb("studio:failedToLoadGames")
        }), Gb && (0, fb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: bb("studio:noGamesYet")
        }), !hb && !Ib && !Gb && (0, fb.jsx)(jb.b, {
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
          rows: Fb,
          getRowKey: bb => bb.schematicId,
          renderRow: Ub => (0, fb.jsxs)("tr", {
            onClick: () => {
              var bb;
              bb = Ub.schematicId, ab((0, ib.i)((0, Yb.d)(bb)))
            },
            children: [(0, fb.jsx)("td", {
              children: (0, fb.jsx)(xb.h, {
                thumbnail: (0, fb.jsx)(Pb.e, {
                  game: Ub
                }),
                name: Ub.name
              })
            }), (0, fb.jsx)("td", {
              children: (0, fb.jsx)("span", {
                className: Tb()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: Ub.gamePublished
                }),
                children: Ub.gamePublished ? bb("general:published") : bb("general:draft")
              })
            }), (0, fb.jsx)("td", {
              children: (0, Bb.T)(Ub.ccu)
            }), (0, fb.jsx)("td", {
              children: (0, Bb.T)(Ub.favourites)
            })]
          })
        }), Qb && (0, fb.jsx)(mb, {})]
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
  4589: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);