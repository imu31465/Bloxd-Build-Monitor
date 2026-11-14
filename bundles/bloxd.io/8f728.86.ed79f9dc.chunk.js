export const id = 86;
export const ids = [86];
export const modules = {
  3959: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Tc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(926),
      uc = nc(1188),
      sc = nc(2672),
      Mc = nc(145),
      Pc = nc(2716),
      qB = nc(2701),
      Oc = nc(957);

    function Tc(cB) {
      let {
        game: Bc
      } = cB;
      const nc = (0, Mc.l)() ? "large" : "small",
        Vc = (0, Pc.f)(Bc, nc),
        Tc = (0, sc.c)(Vc),
        fc = void 0 !== Tc.blurhash;
      return (0, Oc.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Tc.isLoading && !fc && (0, Oc.jsx)(uc.e, {
          loaderType: "Secondary"
        }), !Tc.failed && (null !== Tc.src || fc) && (0, Oc.jsx)("div", {
          className: Ic()("SchematicImage", qB.g, {
            SchematicImageFadeIn: Tc.fadeIn && !fc
          }),
          style: (0, qB.d)(Tc),
          children: (0, Oc.jsx)(qB.b, {
            image: Tc
          })
        }), Tc.failed && (0, Oc.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Oc.jsx)(rB.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  3949: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Lc
    });
    nc(3957);
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(244),
      sc = nc(883),
      Mc = nc(1090),
      Pc = nc(1051),
      qB = nc(985),
      Oc = nc(1314),
      Tc = nc(3959),
      fc = nc(1255),
      mB = nc(3965),
      ec = nc(1188),
      tB = nc(1330),
      Sc = nc(3724),
      yB = nc(926),
      zB = nc(862),
      pc = nc(1969),
      hc = nc(3967),
      aB = nc(1362),
      lc = nc(957);

    function Yc() {
      const {
        t: cB
      } = (0, Pc.x)(), Bc = (0, tB.useNavigatePreserveSearch)(), nc = (0, pc.n)(), Ic = (0, Vc.useMemo)((() => [...zB.b].sort(((Bc, Vc) => {
        var Ic, rB;
        const uc = (null !== (Ic = (0, pc.c)(Vc, nc)) && void 0 !== Ic ? Ic : 0) - (null !== (rB = (0, pc.c)(Bc, nc)) && void 0 !== rB ? rB : 0);
        return 0 !== uc ? uc : (0, aB.k)(Bc, cB).localeCompare((0, aB.k)(Vc, cB))
      }))), [nc, cB]);
      return (0, lc.jsxs)(lc.Fragment, {
        children: [(0, lc.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, lc.jsx)("h1", {
            className: "StudioPageTitle",
            children: cB("studio:firstPartyGames")
          })
        }), (0, lc.jsx)(mB.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: cB("general:game")
          }, {
            key: "ccu",
            header: cB("studio:metricCcu")
          }],
          rows: Ic,
          getRowKey: cB => cB,
          renderRow: Vc => {
            var Ic;
            return (0, lc.jsxs)("tr", {
              onClick: () => {
                Bc((0, aB.o)((0, sc.h)(Vc, !0)))
              },
              children: [(0, lc.jsx)("td", {
                children: (0, lc.jsx)(hc.e, {
                  thumbnail: (0, lc.jsx)(hc.d, {
                    game: Vc
                  }),
                  name: (0, aB.k)(Vc, cB)
                })
              }), (0, lc.jsx)("td", {
                children: (0, Mc.M)(null !== (Ic = (0, pc.c)(Vc, nc)) && void 0 !== Ic ? Ic : 0)
              })]
            })
          }
        })]
      })
    }

    function Lc() {
      const {
        t: cB
      } = (0, Pc.x)(), Bc = (0, tB.useNavigatePreserveSearch)(), {
        userContext: nc,
        isUserContextUpdating: Ic
      } = (0, qB.c)(), {
        isCreating: zB,
        create: pc
      } = (0, Sc.h)(), [Lc, gB] = (0, Vc.useState)(null), [Uc, bB] = (0, Vc.useState)(null), [Zc, Qc] = (0, Vc.useState)(!1);
      (0, Vc.useEffect)((() => {
        Ic || (Qc(!1), Oc.e.getPublishedGamePreviews(nc, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((cB => {
          gB({
            ...cB,
            results: (0, uc._)(cB.results)
          })
        })).catch((cB => {
          console.error("Failed to get owned published games", cB), Qc(!0)
        })), Oc.e.getOwnedUnpublishedGames(nc).then((cB => {
          bB(cB)
        })).catch((cB => {
          console.error("Failed to get owned unpublished games", cB), Qc(!0)
        })))
      }), [Ic, nc]);
      const Cc = null !== Lc && null !== Uc ? [...Lc.results, ...Uc] : [],
        vB = !Zc && (null === Lc || null === Uc),
        Dc = !vB && !Zc && 0 === Cc.length,
        Nc = !Ic && nc.playerHasRank("developer");
      return (0, lc.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, lc.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, lc.jsx)("h1", {
            className: "StudioPageTitle",
            children: cB("studio:myGames")
          }), (0, lc.jsxs)(fc.n, {
            onClick: pc,
            loading: zB,
            children: [(0, lc.jsx)(yB.e, {
              name: "plus"
            }), " ", cB("homePage:createCustomGame")]
          })]
        }), vB && (0, lc.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, lc.jsx)(ec.e, {})
        }), Zc && (0, lc.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: cB("studio:failedToLoadGames")
        }), Dc && (0, lc.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: cB("studio:noGamesYet")
        }), !vB && !Zc && !Dc && (0, lc.jsx)(mB.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: cB("general:game")
          }, {
            key: "status",
            header: cB("general:status")
          }, {
            key: "ccu",
            header: cB("studio:metricCcu")
          }, {
            key: "favourites",
            header: cB("general:favourites")
          }],
          rows: Cc,
          getRowKey: cB => cB.schematicId,
          renderRow: nc => (0, lc.jsxs)("tr", {
            onClick: () => {
              var cB;
              cB = nc.schematicId, Bc((0, aB.o)((0, sc.e)(cB)))
            },
            children: [(0, lc.jsx)("td", {
              children: (0, lc.jsx)(hc.e, {
                thumbnail: (0, lc.jsx)(Tc.c, {
                  game: nc
                }),
                name: nc.name
              })
            }), (0, lc.jsx)("td", {
              children: (0, lc.jsx)("span", {
                className: rB()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: nc.gamePublished
                }),
                children: nc.gamePublished ? cB("general:published") : cB("general:draft")
              })
            }), (0, lc.jsx)("td", {
              children: (0, Mc.M)(nc.ccu)
            }), (0, lc.jsx)("td", {
              children: (0, Mc.M)(nc.favourites)
            })]
          })
        }), Nc && (0, lc.jsx)(Yc, {})]
      })
    }
  },
  3967: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      e: () => rB
    });
    var Vc = nc(1362),
      Ic = nc(957);

    function rB(cB) {
      let {
        thumbnail: Bc,
        name: nc
      } = cB;
      return (0, Ic.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Ic.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Bc
        }), (0, Ic.jsx)("span", {
          className: "StudioTableGameName",
          children: nc
        })]
      })
    }

    function uc(cB) {
      let {
        game: Bc
      } = cB;
      return (0, Ic.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Vc.i)(Bc),
        alt: ""
      })
    }
  },
  3965: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(957);

    function sc(cB) {
      let {
        columns: Bc,
        rows: nc,
        getRowKey: Ic,
        renderRow: sc,
        className: Mc
      } = cB;
      return (0, uc.jsxs)("table", {
        className: rB()("Table", Mc),
        children: [(0, uc.jsx)("thead", {
          children: (0, uc.jsx)("tr", {
            children: Bc.map((cB => (0, uc.jsx)("th", {
              children: cB.header
            }, cB.key)))
          })
        }), (0, uc.jsx)("tbody", {
          children: nc.map((cB => (0, uc.jsx)(Vc.Fragment, {
            children: sc(cB)
          }, Ic(cB))))
        })]
      })
    }
  },
  3957: () => {}
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);