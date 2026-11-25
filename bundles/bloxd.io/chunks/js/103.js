export const id = 103;
export const ids = [103];
export const modules = {
  5077: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => cu
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(1116),
      Xu = ju(1393),
      lu = ju(3691),
      qu = ju(131),
      fu = ju(3738),
      Cu = ju(3729),
      bu = ju(1154);

    function cu(uu) {
      let {
        game: Eu
      } = uu;
      const ju = (0, qu.is99NightsCrazyGamesBundle)() ? "large" : "small",
        su = (0, fu.e)(Eu, ju),
        cu = (0, lu.h)(su),
        Nu = void 0 !== cu.blurhash;
      return (0, bu.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [cu.isLoading && !Nu && (0, bu.jsx)(Xu.b, {
          loaderType: "Secondary"
        }), !cu.failed && (null !== cu.src || Nu) && (0, bu.jsx)("div", {
          className: Uu()("SchematicImage", Cu.d, {
            SchematicImageFadeIn: cu.fadeIn && !Nu
          }),
          style: (0, Cu.c)(cu),
          children: (0, bu.jsx)(Cu.b, {
            image: cu
          })
        }), cu.failed && (0, bu.jsx)("div", {
          className: "SchematicImageError",
          children: (0, bu.jsx)(Zu.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5064: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => du
    });
    ju(5073);
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(337),
      lu = ju(1079),
      qu = ju(1278),
      fu = ju(1244),
      Cu = ju(1178),
      bu = ju(1559),
      cu = ju(5077),
      Nu = ju(1506),
      Ou = ju(5084),
      Yu = ju(1393),
      hu = ju(1570),
      Du = ju(4817),
      gu = ju(1116),
      Mu = ju(1065),
      eu = ju(2655),
      Gu = ju(5089),
      pu = ju(1595),
      wu = ju(1154);

    function Ju() {
      const {
        t: uu
      } = (0, fu.A)(), Eu = (0, hu.useNavigatePreserveSearch)(), ju = (0, eu.l)(), Uu = (0, su.useMemo)((() => [...Mu.d].sort(((Eu, su) => {
        var Uu, Zu;
        const Xu = (null !== (Uu = (0, eu.c)(su, ju)) && void 0 !== Uu ? Uu : 0) - (null !== (Zu = (0, eu.c)(Eu, ju)) && void 0 !== Zu ? Zu : 0);
        return 0 !== Xu ? Xu : (0, pu.h)(Eu, uu).localeCompare((0, pu.h)(su, uu))
      }))), [ju, uu]);
      return (0, wu.jsxs)(wu.Fragment, {
        children: [(0, wu.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, wu.jsx)("h1", {
            className: "StudioPageTitle",
            children: uu("studio:firstPartyGames")
          })
        }), (0, wu.jsx)(Ou.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: uu("general:game")
          }, {
            key: "ccu",
            header: uu("studio:metricCcu")
          }],
          rows: Uu,
          getRowKey: uu => uu,
          renderRow: su => {
            var Uu;
            return (0, wu.jsxs)("tr", {
              onClick: () => {
                Eu((0, pu.i)((0, lu.i)(su, !0)))
              },
              children: [(0, wu.jsx)("td", {
                children: (0, wu.jsx)(Gu.f, {
                  thumbnail: (0, wu.jsx)(Gu.c, {
                    game: su
                  }),
                  name: (0, pu.h)(su, uu)
                })
              }), (0, wu.jsx)("td", {
                children: (0, qu.S)(null !== (Uu = (0, eu.c)(su, ju)) && void 0 !== Uu ? Uu : 0)
              })]
            })
          }
        })]
      })
    }

    function du() {
      const {
        t: uu
      } = (0, fu.A)(), Eu = (0, hu.useNavigatePreserveSearch)(), {
        userContext: ju,
        isUserContextUpdating: Uu
      } = (0, Cu.c)(), {
        isCreating: Mu,
        create: eu
      } = (0, Du.g)(), [du, au] = (0, su.useState)(null), [Pu, ou] = (0, su.useState)(null), [ku, mu] = (0, su.useState)(!1);
      (0, su.useEffect)((() => {
        Uu || (mu(!1), bu.b.getPublishedGamePreviews(ju, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((uu => {
          au({
            ...uu,
            results: (0, Xu.bb)(uu.results)
          })
        })).catch((uu => {
          console.error("Failed to get owned published games", uu), mu(!0)
        })), bu.b.getOwnedUnpublishedGames(ju).then((uu => {
          ou(uu)
        })).catch((uu => {
          console.error("Failed to get owned unpublished games", uu), mu(!0)
        })))
      }), [Uu, ju]);
      const vu = null !== du && null !== Pu ? [...du.results, ...Pu] : [],
        Ku = !ku && (null === du || null === Pu),
        Vu = !Ku && !ku && 0 === vu.length,
        ru = !Uu && ju.playerHasRank("developer");
      return (0, wu.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, wu.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, wu.jsx)("h1", {
            className: "StudioPageTitle",
            children: uu("studio:myGames")
          }), (0, wu.jsxs)(Nu.p, {
            onClick: eu,
            loading: Mu,
            children: [(0, wu.jsx)(gu.e, {
              name: "plus"
            }), " ", uu("homePage:createCustomGame")]
          })]
        }), Ku && (0, wu.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, wu.jsx)(Yu.b, {})
        }), ku && (0, wu.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: uu("studio:failedToLoadGames")
        }), Vu && (0, wu.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: uu("studio:noGamesYet")
        }), !Ku && !ku && !Vu && (0, wu.jsx)(Ou.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: uu("general:game")
          }, {
            key: "status",
            header: uu("general:status")
          }, {
            key: "ccu",
            header: uu("studio:metricCcu")
          }, {
            key: "favourites",
            header: uu("general:favourites")
          }],
          rows: vu,
          getRowKey: uu => uu.schematicId,
          renderRow: ju => (0, wu.jsxs)("tr", {
            onClick: () => {
              var uu;
              uu = ju.schematicId, Eu((0, pu.i)((0, lu.e)(uu)))
            },
            children: [(0, wu.jsx)("td", {
              children: (0, wu.jsx)(Gu.f, {
                thumbnail: (0, wu.jsx)(cu.b, {
                  game: ju
                }),
                name: ju.name
              })
            }), (0, wu.jsx)("td", {
              children: (0, wu.jsx)("span", {
                className: Zu()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: ju.gamePublished
                }),
                children: ju.gamePublished ? uu("general:published") : uu("general:draft")
              })
            }), (0, wu.jsx)("td", {
              children: (0, qu.S)(ju.ccu)
            }), (0, wu.jsx)("td", {
              children: (0, qu.S)(ju.favourites)
            })]
          })
        }), ru && (0, wu.jsx)(Ju, {})]
      })
    }
  },
  5089: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu,
      f: () => Zu
    });
    var su = ju(1595),
      Uu = ju(1154);

    function Zu(uu) {
      let {
        thumbnail: Eu,
        name: ju
      } = uu;
      return (0, Uu.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Uu.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Eu
        }), (0, Uu.jsx)("span", {
          className: "StudioTableGameName",
          children: ju
        })]
      })
    }

    function Xu(uu) {
      let {
        game: Eu
      } = uu;
      return (0, Uu.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, su.e)(Eu),
        alt: ""
      })
    }
  },
  5084: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(1154);

    function lu(uu) {
      let {
        columns: Eu,
        rows: ju,
        getRowKey: Uu,
        renderRow: lu,
        className: qu
      } = uu;
      return (0, Xu.jsxs)("table", {
        className: Zu()("Table", qu),
        children: [(0, Xu.jsx)("thead", {
          children: (0, Xu.jsx)("tr", {
            children: Eu.map((uu => (0, Xu.jsx)("th", {
              children: uu.header
            }, uu.key)))
          })
        }), (0, Xu.jsx)("tbody", {
          children: ju.map((uu => (0, Xu.jsx)(su.Fragment, {
            children: lu(uu)
          }, Uu(uu))))
        })]
      })
    }
  },
  5073: () => {}
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);