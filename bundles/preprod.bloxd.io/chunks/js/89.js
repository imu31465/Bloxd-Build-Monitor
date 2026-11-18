export const id = 89;
export const ids = [89];
export const modules = {
  4111: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => ey
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(910),
      Zy = Wy(1194),
      cb = Wy(2802),
      Py = Wy(139),
      oy = Wy(2837),
      By = Wy(2829),
      Ky = Wy(952);

    function ey(yb) {
      let {
        game: bb
      } = yb;
      const Wy = (0, Py.o)() ? "large" : "small",
        Uy = (0, oy.c)(bb, Wy),
        ey = (0, cb.e)(Uy),
        qb = void 0 !== ey.blurhash;
      return (0, Ky.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [ey.isLoading && !qb && (0, Ky.jsx)(Zy.e, {
          loaderType: "Secondary"
        }), !ey.failed && (null !== ey.src || qb) && (0, Ky.jsx)("div", {
          className: hy()("SchematicImage", By.i, {
            SchematicImageFadeIn: ey.fadeIn && !qb
          }),
          style: (0, By.h)(ey),
          children: (0, Ky.jsx)(By.e, {
            image: ey
          })
        }), ey.failed && (0, Ky.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Ky.jsx)(fy.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4106: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Oy
    });
    Wy(4108);
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(248),
      cb = Wy(880),
      Py = Wy(1080),
      oy = Wy(1042),
      By = Wy(980),
      Ky = Wy(1339),
      ey = Wy(4111),
      qb = Wy(1273),
      sy = Wy(4116),
      Sy = Wy(1194),
      Ey = Wy(1356),
      ly = Wy(3843),
      mb = Wy(910),
      Cy = Wy(860),
      Ty = Wy(2042),
      Vy = Wy(4124),
      Jy = Wy(1383),
      gb = Wy(952);

    function Gy() {
      const {
        t: yb
      } = (0, oy.D)(), bb = (0, Ey.useNavigatePreserveSearch)(), Wy = (0, Ty.k)(), hy = (0, Uy.useMemo)((() => [...Cy.c].sort(((bb, Uy) => {
        var hy, fy;
        const Zy = (null !== (hy = (0, Ty.c)(Uy, Wy)) && void 0 !== hy ? hy : 0) - (null !== (fy = (0, Ty.c)(bb, Wy)) && void 0 !== fy ? fy : 0);
        return 0 !== Zy ? Zy : (0, Jy.l)(bb, yb).localeCompare((0, Jy.l)(Uy, yb))
      }))), [Wy, yb]);
      return (0, gb.jsxs)(gb.Fragment, {
        children: [(0, gb.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, gb.jsx)("h1", {
            className: "StudioPageTitle",
            children: yb("studio:firstPartyGames")
          })
        }), (0, gb.jsx)(sy.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: yb("general:game")
          }, {
            key: "ccu",
            header: yb("studio:metricCcu")
          }],
          rows: hy,
          getRowKey: yb => yb,
          renderRow: Uy => {
            var hy;
            return (0, gb.jsxs)("tr", {
              onClick: () => {
                bb((0, Jy.n)((0, cb.d)(Uy, !0)))
              },
              children: [(0, gb.jsx)("td", {
                children: (0, gb.jsx)(Vy.h, {
                  thumbnail: (0, gb.jsx)(Vy.e, {
                    game: Uy
                  }),
                  name: (0, Jy.l)(Uy, yb)
                })
              }), (0, gb.jsx)("td", {
                children: (0, Py.S)(null !== (hy = (0, Ty.c)(Uy, Wy)) && void 0 !== hy ? hy : 0)
              })]
            })
          }
        })]
      })
    }

    function Oy() {
      const {
        t: yb
      } = (0, oy.D)(), bb = (0, Ey.useNavigatePreserveSearch)(), {
        userContext: Wy,
        isUserContextUpdating: hy
      } = (0, By.c)(), {
        isCreating: Cy,
        create: Ty
      } = (0, ly.f)(), [Oy, Ry] = (0, Uy.useState)(null), [vb, ib] = (0, Uy.useState)(null), [My, Yy] = (0, Uy.useState)(!1);
      (0, Uy.useEffect)((() => {
        hy || (Yy(!1), Ky.c.getPublishedGamePreviews(Wy, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((yb => {
          Ry({
            ...yb,
            results: (0, Zy.db)(yb.results)
          })
        })).catch((yb => {
          console.error("Failed to get owned published games", yb), Yy(!0)
        })), Ky.c.getOwnedUnpublishedGames(Wy).then((yb => {
          ib(yb)
        })).catch((yb => {
          console.error("Failed to get owned unpublished games", yb), Yy(!0)
        })))
      }), [hy, Wy]);
      const Xy = null !== Oy && null !== vb ? [...Oy.results, ...vb] : [],
        ny = !My && (null === Oy || null === vb),
        uy = !ny && !My && 0 === Xy.length,
        rb = !hy && Wy.playerHasRank("developer");
      return (0, gb.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, gb.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, gb.jsx)("h1", {
            className: "StudioPageTitle",
            children: yb("studio:myGames")
          }), (0, gb.jsxs)(qb.i, {
            onClick: Ty,
            loading: Cy,
            children: [(0, gb.jsx)(mb.e, {
              name: "plus"
            }), " ", yb("homePage:createCustomGame")]
          })]
        }), ny && (0, gb.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, gb.jsx)(Sy.e, {})
        }), My && (0, gb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: yb("studio:failedToLoadGames")
        }), uy && (0, gb.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: yb("studio:noGamesYet")
        }), !ny && !My && !uy && (0, gb.jsx)(sy.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: yb("general:game")
          }, {
            key: "status",
            header: yb("general:status")
          }, {
            key: "ccu",
            header: yb("studio:metricCcu")
          }, {
            key: "favourites",
            header: yb("general:favourites")
          }],
          rows: Xy,
          getRowKey: yb => yb.schematicId,
          renderRow: Wy => (0, gb.jsxs)("tr", {
            onClick: () => {
              var yb;
              yb = Wy.schematicId, bb((0, Jy.n)((0, cb.c)(yb)))
            },
            children: [(0, gb.jsx)("td", {
              children: (0, gb.jsx)(Vy.h, {
                thumbnail: (0, gb.jsx)(ey.d, {
                  game: Wy
                }),
                name: Wy.name
              })
            }), (0, gb.jsx)("td", {
              children: (0, gb.jsx)("span", {
                className: fy()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: Wy.gamePublished
                }),
                children: Wy.gamePublished ? yb("general:published") : yb("general:draft")
              })
            }), (0, gb.jsx)("td", {
              children: (0, Py.S)(Wy.ccu)
            }), (0, gb.jsx)("td", {
              children: (0, Py.S)(Wy.favourites)
            })]
          })
        }), rb && (0, gb.jsx)(Gy, {})]
      })
    }
  },
  4124: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      h: () => fy
    });
    var Uy = Wy(1383),
      hy = Wy(952);

    function fy(yb) {
      let {
        thumbnail: bb,
        name: Wy
      } = yb;
      return (0, hy.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, hy.jsx)("div", {
          className: "StudioTableThumbnail",
          children: bb
        }), (0, hy.jsx)("span", {
          className: "StudioTableGameName",
          children: Wy
        })]
      })
    }

    function Zy(yb) {
      let {
        game: bb
      } = yb;
      return (0, hy.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Uy.j)(bb),
        alt: ""
      })
    }
  },
  4116: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb
    });
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(952);

    function cb(yb) {
      let {
        columns: bb,
        rows: Wy,
        getRowKey: hy,
        renderRow: cb,
        className: Py
      } = yb;
      return (0, Zy.jsxs)("table", {
        className: fy()("Table", Py),
        children: [(0, Zy.jsx)("thead", {
          children: (0, Zy.jsx)("tr", {
            children: bb.map((yb => (0, Zy.jsx)("th", {
              children: yb.header
            }, yb.key)))
          })
        }), (0, Zy.jsx)("tbody", {
          children: Wy.map((yb => (0, Zy.jsx)(Uy.Fragment, {
            children: cb(yb)
          }, hy(yb))))
        })]
      })
    }
  },
  4108: () => {}
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);