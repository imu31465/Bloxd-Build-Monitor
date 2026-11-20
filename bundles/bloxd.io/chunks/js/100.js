export const id = 100;
export const ids = [100];
export const modules = {
  4653: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Wv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(1042),
      gv = Pv(1327),
      pv = Pv(3258),
      dv = Pv(108),
      Nv = Pv(3301),
      lv = Pv(3289),
      Tv = Pv(1082);

    function Wv(vv) {
      let {
        game: zv
      } = vv;
      const Pv = (0, dv.i)() ? "large" : "small",
        hv = (0, Nv.g)(zv, Pv),
        Wv = (0, pv.f)(hv),
        wv = void 0 !== Wv.blurhash;
      return (0, Tv.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Wv.isLoading && !wv && (0, Tv.jsx)(gv.c, {
          loaderType: "Secondary"
        }), !Wv.failed && (null !== Wv.src || wv) && (0, Tv.jsx)("div", {
          className: Sv()("SchematicImage", lv.g, {
            SchematicImageFadeIn: Wv.fadeIn && !wv
          }),
          style: (0, lv.e)(Wv),
          children: (0, Tv.jsx)(lv.b, {
            image: Wv
          })
        }), Wv.failed && (0, Tv.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Tv.jsx)(ev.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4645: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => nv
    });
    Pv(4650);
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(302),
      pv = Pv(1011),
      dv = Pv(1209),
      Nv = Pv(1175),
      lv = Pv(1108),
      Tv = Pv(1482),
      Wv = Pv(4653),
      wv = Pv(1442),
      av = Pv(4662),
      sv = Pv(1327),
      Cv = Pv(1492),
      iv = Pv(4389),
      cv = Pv(1042),
      Gv = Pv(997),
      mv = Pv(2396),
      jv = Pv(4668),
      fv = Pv(1529),
      Fv = Pv(1082);

    function Yv() {
      const {
        t: vv
      } = (0, Nv.x)(), zv = (0, Cv.useNavigatePreserveSearch)(), Pv = (0, mv.o)(), Sv = (0, hv.useMemo)((() => [...Gv.c].sort(((zv, hv) => {
        var Sv, ev;
        const gv = (null !== (Sv = (0, mv.c)(hv, Pv)) && void 0 !== Sv ? Sv : 0) - (null !== (ev = (0, mv.c)(zv, Pv)) && void 0 !== ev ? ev : 0);
        return 0 !== gv ? gv : (0, fv.n)(zv, vv).localeCompare((0, fv.n)(hv, vv))
      }))), [Pv, vv]);
      return (0, Fv.jsxs)(Fv.Fragment, {
        children: [(0, Fv.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Fv.jsx)("h1", {
            className: "StudioPageTitle",
            children: vv("studio:firstPartyGames")
          })
        }), (0, Fv.jsx)(av.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: vv("general:game")
          }, {
            key: "ccu",
            header: vv("studio:metricCcu")
          }],
          rows: Sv,
          getRowKey: vv => vv,
          renderRow: hv => {
            var Sv;
            return (0, Fv.jsxs)("tr", {
              onClick: () => {
                zv((0, fv.o)((0, pv.i)(hv, !0)))
              },
              children: [(0, Fv.jsx)("td", {
                children: (0, Fv.jsx)(jv.i, {
                  thumbnail: (0, Fv.jsx)(jv.e, {
                    game: hv
                  }),
                  name: (0, fv.n)(hv, vv)
                })
              }), (0, Fv.jsx)("td", {
                children: (0, dv.X)(null !== (Sv = (0, mv.c)(hv, Pv)) && void 0 !== Sv ? Sv : 0)
              })]
            })
          }
        })]
      })
    }

    function nv() {
      const {
        t: vv
      } = (0, Nv.x)(), zv = (0, Cv.useNavigatePreserveSearch)(), {
        userContext: Pv,
        isUserContextUpdating: Sv
      } = (0, lv.d)(), {
        isCreating: Gv,
        create: mv
      } = (0, iv.f)(), [nv, Ov] = (0, hv.useState)(null), [Dv, Kv] = (0, hv.useState)(null), [Vv, Uv] = (0, hv.useState)(!1);
      (0, hv.useEffect)((() => {
        Sv || (Uv(!1), Tv.e.getPublishedGamePreviews(Pv, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((vv => {
          Ov({
            ...vv,
            results: (0, gv.V)(vv.results)
          })
        })).catch((vv => {
          console.error("Failed to get owned published games", vv), Uv(!0)
        })), Tv.e.getOwnedUnpublishedGames(Pv).then((vv => {
          Kv(vv)
        })).catch((vv => {
          console.error("Failed to get owned unpublished games", vv), Uv(!0)
        })))
      }), [Sv, Pv]);
      const Rv = null !== nv && null !== Dv ? [...nv.results, ...Dv] : [],
        xv = !Vv && (null === nv || null === Dv),
        tv = !xv && !Vv && 0 === Rv.length,
        qv = !Sv && Pv.playerHasRank("developer");
      return (0, Fv.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, Fv.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, Fv.jsx)("h1", {
            className: "StudioPageTitle",
            children: vv("studio:myGames")
          }), (0, Fv.jsxs)(wv.j, {
            onClick: mv,
            loading: Gv,
            children: [(0, Fv.jsx)(cv.b, {
              name: "plus"
            }), " ", vv("homePage:createCustomGame")]
          })]
        }), xv && (0, Fv.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Fv.jsx)(sv.c, {})
        }), Vv && (0, Fv.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: vv("studio:failedToLoadGames")
        }), tv && (0, Fv.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: vv("studio:noGamesYet")
        }), !xv && !Vv && !tv && (0, Fv.jsx)(av.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: vv("general:game")
          }, {
            key: "status",
            header: vv("general:status")
          }, {
            key: "ccu",
            header: vv("studio:metricCcu")
          }, {
            key: "favourites",
            header: vv("general:favourites")
          }],
          rows: Rv,
          getRowKey: vv => vv.schematicId,
          renderRow: Pv => (0, Fv.jsxs)("tr", {
            onClick: () => {
              var vv;
              vv = Pv.schematicId, zv((0, fv.o)((0, pv.e)(vv)))
            },
            children: [(0, Fv.jsx)("td", {
              children: (0, Fv.jsx)(jv.i, {
                thumbnail: (0, Fv.jsx)(Wv.e, {
                  game: Pv
                }),
                name: Pv.name
              })
            }), (0, Fv.jsx)("td", {
              children: (0, Fv.jsx)("span", {
                className: ev()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: Pv.gamePublished
                }),
                children: Pv.gamePublished ? vv("general:published") : vv("general:draft")
              })
            }), (0, Fv.jsx)("td", {
              children: (0, dv.X)(Pv.ccu)
            }), (0, Fv.jsx)("td", {
              children: (0, dv.X)(Pv.favourites)
            })]
          })
        }), qv && (0, Fv.jsx)(Yv, {})]
      })
    }
  },
  4668: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      i: () => ev
    });
    var hv = Pv(1529),
      Sv = Pv(1082);

    function ev(vv) {
      let {
        thumbnail: zv,
        name: Pv
      } = vv;
      return (0, Sv.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Sv.jsx)("div", {
          className: "StudioTableThumbnail",
          children: zv
        }), (0, Sv.jsx)("span", {
          className: "StudioTableGameName",
          children: Pv
        })]
      })
    }

    function gv(vv) {
      let {
        game: zv
      } = vv;
      return (0, Sv.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, hv.l)(zv),
        alt: ""
      })
    }
  },
  4662: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1082);

    function pv(vv) {
      let {
        columns: zv,
        rows: Pv,
        getRowKey: Sv,
        renderRow: pv,
        className: dv
      } = vv;
      return (0, gv.jsxs)("table", {
        className: ev()("Table", dv),
        children: [(0, gv.jsx)("thead", {
          children: (0, gv.jsx)("tr", {
            children: zv.map((vv => (0, gv.jsx)("th", {
              children: vv.header
            }, vv.key)))
          })
        }), (0, gv.jsx)("tbody", {
          children: Pv.map((vv => (0, gv.jsx)(hv.Fragment, {
            children: pv(vv)
          }, Sv(vv))))
        })]
      })
    }
  },
  4650: () => {}
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);