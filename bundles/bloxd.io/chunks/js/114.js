export const id = 114;
export const ids = [114];
export const modules = {
  5388: (ee, ie, He) => {
    He.d(ie, {
      d: () => ke
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(1323),
      Ke = He(1320),
      Ue = He(3892),
      Fe = He(125),
      Je = He(3937),
      oe = He(3927),
      Re = He(1228);

    function ke(ee) {
      let {
        game: ie
      } = ee;
      const He = (0, Fe.is99NightsCrazyGamesBundle)() ? "large" : "small",
        ye = (0, Je.h)(ie, He),
        ke = (0, Ue.f)(ye),
        qe = void 0 !== ke.blurhash;
      return (0, Re.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [ke.isLoading && !qe && (0, Re.jsx)(Ke.b, {
          loaderType: "Secondary"
        }), !ke.failed && (null !== ke.src || qe) && (0, Re.jsx)("div", {
          className: be()("SchematicImage", oe.l, {
            SchematicImageFadeIn: ke.fadeIn && !qe
          }),
          style: (0, oe.i)(ke),
          children: (0, Re.jsx)(oe.e, {
            image: ke
          })
        }), ke.failed && (0, Re.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Re.jsx)(Me.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5373: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => te
    });
    He(5382);
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(335),
      Ue = He(1040),
      Fe = He(1169),
      Je = He(1127),
      oe = He(1075),
      Re = He(1490),
      ke = He(5388),
      qe = He(1438),
      fe = He(5390),
      Te = He(1320),
      pe = He(1502),
      Xe = He(5026),
      ze = He(1323),
      Be = He(1027),
      Ee = He(2626),
      ge = He(5395),
      Oe = He(1536),
      de = He(1228);

    function We() {
      const {
        t: ee
      } = (0, Je.v)(), ie = (0, pe.useNavigatePreserveSearch)(), He = (0, Ee.p)(), be = (0, ye.useMemo)((() => [...Be.e].sort(((ie, ye) => {
        var be, Me;
        const Ke = (null !== (be = (0, Ee.e)(ye, He)) && void 0 !== be ? be : 0) - (null !== (Me = (0, Ee.e)(ie, He)) && void 0 !== Me ? Me : 0);
        return 0 !== Ke ? Ke : (0, Oe.o)(ie, ee).localeCompare((0, Oe.o)(ye, ee))
      }))), [He, ee]);
      return (0, de.jsxs)(de.Fragment, {
        children: [(0, de.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, de.jsx)("h1", {
            className: "StudioPageTitle",
            children: ee("studio:firstPartyGames")
          })
        }), (0, de.jsx)(fe.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: ee("general:game")
          }, {
            key: "ccu",
            header: ee("studio:metricCcu")
          }],
          rows: be,
          getRowKey: ee => ee,
          renderRow: ye => {
            var be;
            return (0, de.jsxs)("tr", {
              onClick: () => {
                ie((0, Oe.s)((0, Ue.c)(ye, !0)))
              },
              children: [(0, de.jsx)("td", {
                children: (0, de.jsx)(ge.e, {
                  thumbnail: (0, de.jsx)(ge.b, {
                    game: ye
                  }),
                  name: (0, Oe.o)(ye, ee)
                })
              }), (0, de.jsx)("td", {
                children: (0, Fe.P)(null !== (be = (0, Ee.e)(ye, He)) && void 0 !== be ? be : 0)
              })]
            })
          }
        })]
      })
    }

    function te() {
      const {
        t: ee
      } = (0, Je.v)(), ie = (0, pe.useNavigatePreserveSearch)(), {
        userContext: He,
        isUserContextUpdating: be
      } = (0, oe.b)(), {
        isCreating: Be,
        create: Ee
      } = (0, Xe.d)(), [te, Ze] = (0, ye.useState)(null), [we, De] = (0, ye.useState)(null), [Pe, Ae] = (0, ye.useState)(!1);
      (0, ye.useEffect)((() => {
        be || (Ae(!1), Re.b.getPublishedGamePreviews(He, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((ee => {
          Ze({
            ...ee,
            results: (0, Ke.eb)(ee.results)
          })
        })).catch((ee => {
          console.error("Failed to get owned published games", ee), Ae(!0)
        })), Re.b.getOwnedUnpublishedGames(He).then((ee => {
          De(ee)
        })).catch((ee => {
          console.error("Failed to get owned unpublished games", ee), Ae(!0)
        })))
      }), [be, He]);
      const Ye = null !== te && null !== we ? [...te.results, ...we] : [],
        Ve = !Pe && (null === te || null === we),
        ae = !Ve && !Pe && 0 === Ye.length,
        ce = !be && He.playerHasRank("developer");
      return (0, de.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, de.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, de.jsx)("h1", {
            className: "StudioPageTitle",
            children: ee("studio:myGames")
          }), (0, de.jsxs)(qe.m, {
            onClick: Ee,
            loading: Be,
            children: [(0, de.jsx)(ze.e, {
              name: "plus"
            }), " ", ee("homePage:createCustomGame")]
          })]
        }), Ve && (0, de.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, de.jsx)(Te.b, {})
        }), Pe && (0, de.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ee("studio:failedToLoadGames")
        }), ae && (0, de.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ee("studio:noGamesYet")
        }), !Ve && !Pe && !ae && (0, de.jsx)(fe.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: ee("general:game")
          }, {
            key: "status",
            header: ee("general:status")
          }, {
            key: "ccu",
            header: ee("studio:metricCcu")
          }, {
            key: "favourites",
            header: ee("general:favourites")
          }],
          rows: Ye,
          getRowKey: ee => ee.schematicId,
          renderRow: He => {
            const ye = function(ee) {
              return (0, Oe.f)(ee.gamePublished, "takenDown" in ee && ee.takenDown)
            }(He);
            return (0, de.jsxs)("tr", {
              onClick: () => {
                var ee;
                ee = He.schematicId, ie((0, Oe.s)((0, Ue.b)(ee)))
              },
              children: [(0, de.jsx)("td", {
                children: (0, de.jsx)(ge.e, {
                  thumbnail: (0, de.jsx)(ke.d, {
                    game: He
                  }),
                  name: He.name
                })
              }), (0, de.jsx)("td", {
                children: (0, de.jsx)("span", {
                  className: Me()("StudioGameListStatusChip", {
                    StudioGameListStatusChipPublished: "published" === ye,
                    StudioGameListStatusChipTakenDown: "takenDown" === ye
                  }),
                  children: (0, Oe.c)(ee, ye)
                })
              }), (0, de.jsx)("td", {
                children: (0, Fe.P)(He.ccu)
              }), (0, de.jsx)("td", {
                children: (0, Fe.P)(He.favourites)
              })]
            })
          }
        }), ce && (0, de.jsx)(We, {})]
      })
    }
  },
  5395: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      e: () => Me
    });
    var ye = He(1536),
      be = He(1228);

    function Me(ee) {
      let {
        thumbnail: ie,
        name: He
      } = ee;
      return (0, be.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, be.jsx)("div", {
          className: "StudioTableThumbnail",
          children: ie
        }), (0, be.jsx)("span", {
          className: "StudioTableGameName",
          children: He
        })]
      })
    }

    function Ke(ee) {
      let {
        game: ie
      } = ee;
      return (0, be.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, ye.l)(ie),
        alt: ""
      })
    }
  },
  5390: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1228);

    function Ue(ee) {
      let {
        columns: ie,
        rows: He,
        getRowKey: be,
        renderRow: Ue,
        className: Fe
      } = ee;
      return (0, Ke.jsxs)("table", {
        className: Me()("Table", Fe),
        children: [(0, Ke.jsx)("thead", {
          children: (0, Ke.jsx)("tr", {
            children: ie.map((ee => (0, Ke.jsx)("th", {
              children: ee.header
            }, ee.key)))
          })
        }), (0, Ke.jsx)("tbody", {
          children: He.map((ee => (0, Ke.jsx)(ye.Fragment, {
            children: Ue(ee)
          }, be(ee))))
        })]
      })
    }
  },
  5382: () => {}
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);