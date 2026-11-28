export const id = 116;
export const ids = [116];
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
  5804: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Kb
    });
    Mb(5812);
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(366),
      gb = Mb(1136),
      lb = Mb(1301),
      Lb = Mb(1259),
      Ib = Mb(1179),
      Ob = Mb(1677),
      Ub = Mb(5817),
      tb = Mb(1616),
      Cb = Mb(5822),
      Eb = Mb(1468),
      Fb = Mb(1686),
      Bb = Mb(5477),
      sb = Mb(1475),
      mb = Mb(1119),
      hb = Mb(3677),
      zb = Mb(5825),
      Xb = Mb(1713),
      xb = Mb(1364);

    function jb() {
      const {
        t: bb
      } = (0, Lb.C)(), wb = (0, Fb.useNavigatePreserveSearch)(), Mb = (0, hb.q)(), Hb = (0, eb.useMemo)((() => [...mb.c].sort(((wb, eb) => {
        var Hb, pb;
        const Vb = (null !== (Hb = (0, hb.e)(eb, Mb)) && void 0 !== Hb ? Hb : 0) - (null !== (pb = (0, hb.e)(wb, Mb)) && void 0 !== pb ? pb : 0);
        return 0 !== Vb ? Vb : (0, Xb.n)(wb, bb).localeCompare((0, Xb.n)(eb, bb))
      }))), [Mb, bb]);
      return (0, xb.jsxs)(xb.Fragment, {
        children: [(0, xb.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, xb.jsx)("h1", {
            className: "StudioPageTitle",
            children: bb("studio:firstPartyGames")
          })
        }), (0, xb.jsx)(Cb.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: bb("general:game")
          }, {
            key: "ccu",
            header: bb("studio:metricCcu")
          }],
          rows: Hb,
          getRowKey: bb => bb,
          renderRow: eb => {
            var Hb;
            return (0, xb.jsxs)("tr", {
              onClick: () => {
                wb((0, Xb.p)((0, gb.f)(eb, !0)))
              },
              children: [(0, xb.jsx)("td", {
                children: (0, xb.jsx)(zb.f, {
                  thumbnail: (0, xb.jsx)(zb.d, {
                    game: eb
                  }),
                  name: (0, Xb.n)(eb, bb)
                })
              }), (0, xb.jsx)("td", {
                children: (0, lb.L)(null !== (Hb = (0, hb.e)(eb, Mb)) && void 0 !== Hb ? Hb : 0)
              })]
            })
          }
        })]
      })
    }

    function Kb() {
      const {
        t: bb
      } = (0, Lb.C)(), wb = (0, Fb.useNavigatePreserveSearch)(), {
        userContext: Mb,
        isUserContextUpdating: Hb
      } = (0, Ib.e)(), {
        isCreating: mb,
        create: hb
      } = (0, Bb.g)(), [Kb, rb] = (0, eb.useState)(null), [Rb, Db] = (0, eb.useState)(null), [cb, Yb] = (0, eb.useState)(!1);
      (0, eb.useEffect)((() => {
        Hb || (Yb(!1), Ob.e.getPublishedGamePreviews(Mb, {
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
          rb({
            ...bb,
            results: (0, Vb._)(bb.results)
          })
        })).catch((bb => {
          console.error("Failed to get owned published games", bb), Yb(!0)
        })), Ob.e.getOwnedUnpublishedGames(Mb).then((bb => {
          Db(bb)
        })).catch((bb => {
          console.error("Failed to get owned unpublished games", bb), Yb(!0)
        })))
      }), [Hb, Mb]);
      const Zb = null !== Kb && null !== Rb ? [...Kb.results, ...Rb] : [],
        fb = !cb && (null === Kb || null === Rb),
        Ab = !fb && !cb && 0 === Zb.length,
        Wb = !Hb && Mb.playerHasRank("developer");
      return (0, xb.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, xb.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, xb.jsx)("h1", {
            className: "StudioPageTitle",
            children: bb("studio:myGames")
          }), (0, xb.jsxs)(tb.p, {
            onClick: hb,
            loading: mb,
            children: [(0, xb.jsx)(sb.b, {
              name: "plus"
            }), " ", bb("homePage:createCustomGame")]
          })]
        }), fb && (0, xb.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, xb.jsx)(Eb.c, {})
        }), cb && (0, xb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: bb("studio:failedToLoadGames")
        }), Ab && (0, xb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: bb("studio:noGamesYet")
        }), !fb && !cb && !Ab && (0, xb.jsx)(Cb.c, {
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
          rows: Zb,
          getRowKey: bb => bb.schematicId,
          renderRow: Mb => {
            const eb = function(bb) {
              return (0, Xb.f)(bb.gamePublished, "takenDown" in bb && bb.takenDown)
            }(Mb);
            return (0, xb.jsxs)("tr", {
              onClick: () => {
                var bb;
                bb = Mb.schematicId, wb((0, Xb.p)((0, gb.c)(bb)))
              },
              children: [(0, xb.jsx)("td", {
                children: (0, xb.jsx)(zb.f, {
                  thumbnail: (0, xb.jsx)(Ub.e, {
                    game: Mb
                  }),
                  name: Mb.name
                })
              }), (0, xb.jsx)("td", {
                children: (0, xb.jsx)("span", {
                  className: pb()("StudioGameListStatusChip", {
                    StudioGameListStatusChipPublished: "published" === eb,
                    StudioGameListStatusChipTakenDown: "takenDown" === eb
                  }),
                  children: (0, Xb.d)(bb, eb)
                })
              }), (0, xb.jsx)("td", {
                children: (0, lb.L)(Mb.ccu)
              }), (0, xb.jsx)("td", {
                children: (0, lb.L)(Mb.favourites)
              })]
            })
          }
        }), Wb && (0, xb.jsx)(jb, {})]
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
  5812: () => {}
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);