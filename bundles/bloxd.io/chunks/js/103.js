export const id = 103;
export const ids = [103];
export const modules = {
  5081: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => lt
    });
    var Ot = Vt(1140),
      qt = Vt.n(Ot),
      Dt = Vt(1152),
      mt = Vt(1436),
      dt = Vt(3564),
      jt = Vt(153),
      Ht = Vt(3613),
      Xt = Vt(3597),
      Qt = Vt(1188);

    function lt(tt) {
      let {
        game: et
      } = tt;
      const Vt = (0, jt.is99NightsCrazyGamesBundle)() ? "large" : "small",
        Ot = (0, Ht.h)(et, Vt),
        lt = (0, dt.g)(Ot),
        Et = void 0 !== lt.blurhash;
      return (0, Qt.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [lt.isLoading && !Et && (0, Qt.jsx)(mt.b, {
          loaderType: "Secondary"
        }), !lt.failed && (null !== lt.src || Et) && (0, Qt.jsx)("div", {
          className: qt()("SchematicImage", Xt.j, {
            SchematicImageFadeIn: lt.fadeIn && !Et
          }),
          style: (0, Xt.h)(lt),
          children: (0, Qt.jsx)(Xt.e, {
            image: lt
          })
        }), lt.failed && (0, Qt.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Qt.jsx)(Dt.b, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5069: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => vt
    });
    Vt(5078);
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(377),
      dt = Vt(1117),
      jt = Vt(1308),
      Ht = Vt(1286),
      Xt = Vt(1218),
      Qt = Vt(1600),
      lt = Vt(5081),
      Et = Vt(1556),
      ft = Vt(5086),
      wt = Vt(1436),
      yt = Vt(1613),
      Nt = Vt(4777),
      Mt = Vt(1152),
      bt = Vt(1099),
      Jt = Vt(2602),
      Ct = Vt(5089),
      ut = Vt(1633),
      Kt = Vt(1188);

    function ht() {
      const {
        t: tt
      } = (0, Ht.H)(), et = (0, yt.useNavigatePreserveSearch)(), Vt = (0, Jt.m)(), qt = (0, Ot.useMemo)((() => [...bt.d].sort(((et, Ot) => {
        var qt, Dt;
        const mt = (null !== (qt = (0, Jt.e)(Ot, Vt)) && void 0 !== qt ? qt : 0) - (null !== (Dt = (0, Jt.e)(et, Vt)) && void 0 !== Dt ? Dt : 0);
        return 0 !== mt ? mt : (0, ut.j)(et, tt).localeCompare((0, ut.j)(Ot, tt))
      }))), [Vt, tt]);
      return (0, Kt.jsxs)(Kt.Fragment, {
        children: [(0, Kt.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Kt.jsx)("h1", {
            className: "StudioPageTitle",
            children: tt("studio:firstPartyGames")
          })
        }), (0, Kt.jsx)(ft.b, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: tt("general:game")
          }, {
            key: "ccu",
            header: tt("studio:metricCcu")
          }],
          rows: qt,
          getRowKey: tt => tt,
          renderRow: Ot => {
            var qt;
            return (0, Kt.jsxs)("tr", {
              onClick: () => {
                et((0, ut.k)((0, dt.i)(Ot, !0)))
              },
              children: [(0, Kt.jsx)("td", {
                children: (0, Kt.jsx)(Ct.e, {
                  thumbnail: (0, Kt.jsx)(Ct.d, {
                    game: Ot
                  }),
                  name: (0, ut.j)(Ot, tt)
                })
              }), (0, Kt.jsx)("td", {
                children: (0, jt.S)(null !== (qt = (0, Jt.e)(Ot, Vt)) && void 0 !== qt ? qt : 0)
              })]
            })
          }
        })]
      })
    }

    function vt() {
      const {
        t: tt
      } = (0, Ht.H)(), et = (0, yt.useNavigatePreserveSearch)(), {
        userContext: Vt,
        isUserContextUpdating: qt
      } = (0, Xt.d)(), {
        isCreating: bt,
        create: Jt
      } = (0, Nt.d)(), [vt, Wt] = (0, Ot.useState)(null), [St, ct] = (0, Ot.useState)(null), [Rt, It] = (0, Ot.useState)(!1);
      (0, Ot.useEffect)((() => {
        qt || (It(!1), Qt.e.getPublishedGamePreviews(Vt, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((tt => {
          Wt({
            ...tt,
            results: (0, mt.R)(tt.results)
          })
        })).catch((tt => {
          console.error("Failed to get owned published games", tt), It(!0)
        })), Qt.e.getOwnedUnpublishedGames(Vt).then((tt => {
          ct(tt)
        })).catch((tt => {
          console.error("Failed to get owned unpublished games", tt), It(!0)
        })))
      }), [qt, Vt]);
      const Pt = null !== vt && null !== St ? [...vt.results, ...St] : [],
        Zt = !Rt && (null === vt || null === St),
        Lt = !Zt && !Rt && 0 === Pt.length,
        Ft = !qt && Vt.playerHasRank("developer");
      return (0, Kt.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, Kt.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, Kt.jsx)("h1", {
            className: "StudioPageTitle",
            children: tt("studio:myGames")
          }), (0, Kt.jsxs)(Et.m, {
            onClick: Jt,
            loading: bt,
            children: [(0, Kt.jsx)(Mt.b, {
              name: "plus"
            }), " ", tt("homePage:createCustomGame")]
          })]
        }), Zt && (0, Kt.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Kt.jsx)(wt.b, {})
        }), Rt && (0, Kt.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: tt("studio:failedToLoadGames")
        }), Lt && (0, Kt.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: tt("studio:noGamesYet")
        }), !Zt && !Rt && !Lt && (0, Kt.jsx)(ft.b, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: tt("general:game")
          }, {
            key: "status",
            header: tt("general:status")
          }, {
            key: "ccu",
            header: tt("studio:metricCcu")
          }, {
            key: "favourites",
            header: tt("general:favourites")
          }],
          rows: Pt,
          getRowKey: tt => tt.schematicId,
          renderRow: Vt => (0, Kt.jsxs)("tr", {
            onClick: () => {
              var tt;
              tt = Vt.schematicId, et((0, ut.k)((0, dt.e)(tt)))
            },
            children: [(0, Kt.jsx)("td", {
              children: (0, Kt.jsx)(Ct.e, {
                thumbnail: (0, Kt.jsx)(lt.b, {
                  game: Vt
                }),
                name: Vt.name
              })
            }), (0, Kt.jsx)("td", {
              children: (0, Kt.jsx)("span", {
                className: Dt()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: Vt.gamePublished
                }),
                children: Vt.gamePublished ? tt("general:published") : tt("general:draft")
              })
            }), (0, Kt.jsx)("td", {
              children: (0, jt.S)(Vt.ccu)
            }), (0, Kt.jsx)("td", {
              children: (0, jt.S)(Vt.favourites)
            })]
          })
        }), Ft && (0, Kt.jsx)(ht, {})]
      })
    }
  },
  5089: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      e: () => Dt
    });
    var Ot = Vt(1633),
      qt = Vt(1188);

    function Dt(tt) {
      let {
        thumbnail: et,
        name: Vt
      } = tt;
      return (0, qt.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, qt.jsx)("div", {
          className: "StudioTableThumbnail",
          children: et
        }), (0, qt.jsx)("span", {
          className: "StudioTableGameName",
          children: Vt
        })]
      })
    }

    function mt(tt) {
      let {
        game: et
      } = tt;
      return (0, qt.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Ot.h)(et),
        alt: ""
      })
    }
  },
  5086: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(1188);

    function dt(tt) {
      let {
        columns: et,
        rows: Vt,
        getRowKey: qt,
        renderRow: dt,
        className: jt
      } = tt;
      return (0, mt.jsxs)("table", {
        className: Dt()("Table", jt),
        children: [(0, mt.jsx)("thead", {
          children: (0, mt.jsx)("tr", {
            children: et.map((tt => (0, mt.jsx)("th", {
              children: tt.header
            }, tt.key)))
          })
        }), (0, mt.jsx)("tbody", {
          children: Vt.map((tt => (0, mt.jsx)(Ot.Fragment, {
            children: dt(tt)
          }, qt(tt))))
        })]
      })
    }
  },
  5078: () => {}
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);