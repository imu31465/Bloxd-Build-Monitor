export const id = 100;
export const ids = [100];
export const modules = {
  4794: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ld
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(1059),
      Pd = kd(1359),
      Zd = kd(3360),
      gd = kd(126),
      Cd = kd(3408),
      Kd = kd(3397),
      od = kd(1103);

    function ld(dd) {
      let {
        game: Jd
      } = dd;
      const kd = (0, gd.n)() ? "large" : "small",
        pd = (0, Cd.d)(Jd, kd),
        ld = (0, Zd.h)(pd),
        Qd = void 0 !== ld.blurhash;
      return (0, od.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [ld.isLoading && !Qd && (0, od.jsx)(Pd.b, {
          loaderType: "Secondary"
        }), !ld.failed && (null !== ld.src || Qd) && (0, od.jsx)("div", {
          className: Nd()("SchematicImage", Kd.f, {
            SchematicImageFadeIn: ld.fadeIn && !Qd
          }),
          style: (0, Kd.c)(ld),
          children: (0, od.jsx)(Kd.b, {
            image: ld
          })
        }), ld.failed && (0, od.jsx)("div", {
          className: "SchematicImageError",
          children: (0, od.jsx)(Wd.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4780: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => ad
    });
    kd(4788);
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(300),
      Zd = kd(1022),
      gd = kd(1245),
      Cd = kd(1211),
      Kd = kd(1140),
      od = kd(1520),
      ld = kd(4794),
      Qd = kd(1461),
      Ld = kd(4796),
      Od = kd(1359),
      ed = kd(1543),
      Rd = kd(4489),
      Id = kd(1059),
      Gd = kd(1008),
      vd = kd(2432),
      xd = kd(4799),
      qd = kd(1569),
      Bd = kd(1103);

    function sd() {
      const {
        t: dd
      } = (0, Cd.B)(), Jd = (0, ed.useNavigatePreserveSearch)(), kd = (0, vd.i)(), Nd = (0, pd.useMemo)((() => [...Gd.d].sort(((Jd, pd) => {
        var Nd, Wd;
        const Pd = (null !== (Nd = (0, vd.b)(pd, kd)) && void 0 !== Nd ? Nd : 0) - (null !== (Wd = (0, vd.b)(Jd, kd)) && void 0 !== Wd ? Wd : 0);
        return 0 !== Pd ? Pd : (0, qd.p)(Jd, dd).localeCompare((0, qd.p)(pd, dd))
      }))), [kd, dd]);
      return (0, Bd.jsxs)(Bd.Fragment, {
        children: [(0, Bd.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Bd.jsx)("h1", {
            className: "StudioPageTitle",
            children: dd("studio:firstPartyGames")
          })
        }), (0, Bd.jsx)(Ld.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: dd("general:game")
          }, {
            key: "ccu",
            header: dd("studio:metricCcu")
          }],
          rows: Nd,
          getRowKey: dd => dd,
          renderRow: pd => {
            var Nd;
            return (0, Bd.jsxs)("tr", {
              onClick: () => {
                Jd((0, qd.s)((0, Zd.i)(pd, !0)))
              },
              children: [(0, Bd.jsx)("td", {
                children: (0, Bd.jsx)(xd.f, {
                  thumbnail: (0, Bd.jsx)(xd.b, {
                    game: pd
                  }),
                  name: (0, qd.p)(pd, dd)
                })
              }), (0, Bd.jsx)("td", {
                children: (0, gd.Q)(null !== (Nd = (0, vd.b)(pd, kd)) && void 0 !== Nd ? Nd : 0)
              })]
            })
          }
        })]
      })
    }

    function ad() {
      const {
        t: dd
      } = (0, Cd.B)(), Jd = (0, ed.useNavigatePreserveSearch)(), {
        userContext: kd,
        isUserContextUpdating: Nd
      } = (0, Kd.c)(), {
        isCreating: Gd,
        create: vd
      } = (0, Rd.d)(), [ad, Md] = (0, pd.useState)(null), [Fd, Yd] = (0, pd.useState)(null), [md, bd] = (0, pd.useState)(!1);
      (0, pd.useEffect)((() => {
        Nd || (bd(!1), od.d.getPublishedGamePreviews(kd, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((dd => {
          Md({
            ...dd,
            results: (0, Pd.bb)(dd.results)
          })
        })).catch((dd => {
          console.error("Failed to get owned published games", dd), bd(!0)
        })), od.d.getOwnedUnpublishedGames(kd).then((dd => {
          Yd(dd)
        })).catch((dd => {
          console.error("Failed to get owned unpublished games", dd), bd(!0)
        })))
      }), [Nd, kd]);
      const Sd = null !== ad && null !== Fd ? [...ad.results, ...Fd] : [],
        jd = !md && (null === ad || null === Fd),
        Xd = !jd && !md && 0 === Sd.length,
        fd = !Nd && kd.playerHasRank("developer");
      return (0, Bd.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, Bd.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, Bd.jsx)("h1", {
            className: "StudioPageTitle",
            children: dd("studio:myGames")
          }), (0, Bd.jsxs)(Qd.j, {
            onClick: vd,
            loading: Gd,
            children: [(0, Bd.jsx)(Id.e, {
              name: "plus"
            }), " ", dd("homePage:createCustomGame")]
          })]
        }), jd && (0, Bd.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Bd.jsx)(Od.b, {})
        }), md && (0, Bd.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: dd("studio:failedToLoadGames")
        }), Xd && (0, Bd.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: dd("studio:noGamesYet")
        }), !jd && !md && !Xd && (0, Bd.jsx)(Ld.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: dd("general:game")
          }, {
            key: "status",
            header: dd("general:status")
          }, {
            key: "ccu",
            header: dd("studio:metricCcu")
          }, {
            key: "favourites",
            header: dd("general:favourites")
          }],
          rows: Sd,
          getRowKey: dd => dd.schematicId,
          renderRow: kd => (0, Bd.jsxs)("tr", {
            onClick: () => {
              var dd;
              dd = kd.schematicId, Jd((0, qd.s)((0, Zd.e)(dd)))
            },
            children: [(0, Bd.jsx)("td", {
              children: (0, Bd.jsx)(xd.f, {
                thumbnail: (0, Bd.jsx)(ld.c, {
                  game: kd
                }),
                name: kd.name
              })
            }), (0, Bd.jsx)("td", {
              children: (0, Bd.jsx)("span", {
                className: Wd()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: kd.gamePublished
                }),
                children: kd.gamePublished ? dd("general:published") : dd("general:draft")
              })
            }), (0, Bd.jsx)("td", {
              children: (0, gd.Q)(kd.ccu)
            }), (0, Bd.jsx)("td", {
              children: (0, gd.Q)(kd.favourites)
            })]
          })
        }), fd && (0, Bd.jsx)(sd, {})]
      })
    }
  },
  4799: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd,
      f: () => Wd
    });
    var pd = kd(1569),
      Nd = kd(1103);

    function Wd(dd) {
      let {
        thumbnail: Jd,
        name: kd
      } = dd;
      return (0, Nd.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Nd.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Jd
        }), (0, Nd.jsx)("span", {
          className: "StudioTableGameName",
          children: kd
        })]
      })
    }

    function Pd(dd) {
      let {
        game: Jd
      } = dd;
      return (0, Nd.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, pd.l)(Jd),
        alt: ""
      })
    }
  },
  4796: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1103);

    function Zd(dd) {
      let {
        columns: Jd,
        rows: kd,
        getRowKey: Nd,
        renderRow: Zd,
        className: gd
      } = dd;
      return (0, Pd.jsxs)("table", {
        className: Wd()("Table", gd),
        children: [(0, Pd.jsx)("thead", {
          children: (0, Pd.jsx)("tr", {
            children: Jd.map((dd => (0, Pd.jsx)("th", {
              children: dd.header
            }, dd.key)))
          })
        }), (0, Pd.jsx)("tbody", {
          children: kd.map((dd => (0, Pd.jsx)(pd.Fragment, {
            children: Zd(dd)
          }, Nd(dd))))
        })]
      })
    }
  },
  4788: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);