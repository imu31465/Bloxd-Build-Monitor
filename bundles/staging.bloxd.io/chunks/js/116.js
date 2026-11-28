export const id = 116;
export const ids = [116];
export const modules = {
  5691: (dd, Od, md) => {
    md.d(Od, {
      e: () => od
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(1443),
      Xd = md(1436),
      Kd = md(4734),
      hd = md(151),
      vd = md(4776),
      Qd = md(4767),
      td = md(1341);

    function od(dd) {
      let {
        game: Od
      } = dd;
      const md = (0, hd.is99NightsCrazyGamesBundle)() ? "large" : "small",
        Wd = (0, vd.i)(Od, md),
        od = (0, Kd.g)(Wd),
        Nd = void 0 !== od.blurhash;
      return (0, td.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [od.isLoading && !Nd && (0, td.jsx)(Xd.c, {
          loaderType: "Secondary"
        }), !od.failed && (null !== od.src || Nd) && (0, td.jsx)("div", {
          className: Fd()("SchematicImage", Qd.j, {
            SchematicImageFadeIn: od.fadeIn && !Nd
          }),
          style: (0, Qd.g)(od),
          children: (0, td.jsx)(Qd.e, {
            image: od
          })
        }), od.failed && (0, td.jsx)("div", {
          className: "SchematicImageError",
          children: (0, td.jsx)(Rd.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5680: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Ud
    });
    md(5687);
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(387),
      Kd = md(1135),
      hd = md(1286),
      vd = md(1238),
      Qd = md(1186),
      td = md(1627),
      od = md(5691),
      Nd = md(1572),
      qd = md(5693),
      Hd = md(1436),
      yd = md(1641),
      bd = md(5296),
      Td = md(1443),
      pd = md(1113),
      Yd = md(3544),
      gd = md(5700),
      wd = md(1666),
      Ed = md(1341);

    function Jd() {
      const {
        t: dd
      } = (0, vd.G)(), Od = (0, yd.useNavigatePreserveSearch)(), md = (0, Yd.n)(), Fd = (0, Wd.useMemo)((() => [...pd.d].sort(((Od, Wd) => {
        var Fd, Rd;
        const Xd = (null !== (Fd = (0, Yd.e)(Wd, md)) && void 0 !== Fd ? Fd : 0) - (null !== (Rd = (0, Yd.e)(Od, md)) && void 0 !== Rd ? Rd : 0);
        return 0 !== Xd ? Xd : (0, wd.o)(Od, dd).localeCompare((0, wd.o)(Wd, dd))
      }))), [md, dd]);
      return (0, Ed.jsxs)(Ed.Fragment, {
        children: [(0, Ed.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Ed.jsx)("h1", {
            className: "StudioPageTitle",
            children: dd("studio:firstPartyGames")
          })
        }), (0, Ed.jsx)(qd.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: dd("general:game")
          }, {
            key: "ccu",
            header: dd("studio:metricCcu")
          }],
          rows: Fd,
          getRowKey: dd => dd,
          renderRow: Wd => {
            var Fd;
            return (0, Ed.jsxs)("tr", {
              onClick: () => {
                Od((0, wd.q)((0, Kd.h)(Wd, !0)))
              },
              children: [(0, Ed.jsx)("td", {
                children: (0, Ed.jsx)(gd.c, {
                  thumbnail: (0, Ed.jsx)(gd.b, {
                    game: Wd
                  }),
                  name: (0, wd.o)(Wd, dd)
                })
              }), (0, Ed.jsx)("td", {
                children: (0, hd.M)(null !== (Fd = (0, Yd.e)(Wd, md)) && void 0 !== Fd ? Fd : 0)
              })]
            })
          }
        })]
      })
    }

    function Ud() {
      const {
        t: dd
      } = (0, vd.G)(), Od = (0, yd.useNavigatePreserveSearch)(), {
        userContext: md,
        isUserContextUpdating: Fd
      } = (0, Qd.d)(), {
        isCreating: pd,
        create: Yd
      } = (0, bd.h)(), [Ud, xd] = (0, Wd.useState)(null), [Bd, Sd] = (0, Wd.useState)(null), [sd, ud] = (0, Wd.useState)(!1);
      (0, Wd.useEffect)((() => {
        Fd || (ud(!1), td.e.getPublishedGamePreviews(md, {
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
          xd({
            ...dd,
            results: (0, Xd.cb)(dd.results)
          })
        })).catch((dd => {
          console.error("Failed to get owned published games", dd), ud(!0)
        })), td.e.getOwnedUnpublishedGames(md).then((dd => {
          Sd(dd)
        })).catch((dd => {
          console.error("Failed to get owned unpublished games", dd), ud(!0)
        })))
      }), [Fd, md]);
      const Vd = null !== Ud && null !== Bd ? [...Ud.results, ...Bd] : [],
        Ad = !sd && (null === Ud || null === Bd),
        rd = !Ad && !sd && 0 === Vd.length,
        Gd = !Fd && md.playerHasRank("developer");
      return (0, Ed.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, Ed.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, Ed.jsx)("h1", {
            className: "StudioPageTitle",
            children: dd("studio:myGames")
          }), (0, Ed.jsxs)(Nd.m, {
            onClick: Yd,
            loading: pd,
            children: [(0, Ed.jsx)(Td.c, {
              name: "plus"
            }), " ", dd("homePage:createCustomGame")]
          })]
        }), Ad && (0, Ed.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Ed.jsx)(Hd.c, {})
        }), sd && (0, Ed.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: dd("studio:failedToLoadGames")
        }), rd && (0, Ed.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: dd("studio:noGamesYet")
        }), !Ad && !sd && !rd && (0, Ed.jsx)(qd.e, {
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
          rows: Vd,
          getRowKey: dd => dd.schematicId,
          renderRow: md => {
            const Wd = function(dd) {
              return (0, wd.d)(dd.gamePublished, "takenDown" in dd && dd.takenDown)
            }(md);
            return (0, Ed.jsxs)("tr", {
              onClick: () => {
                var dd;
                dd = md.schematicId, Od((0, wd.q)((0, Kd.e)(dd)))
              },
              children: [(0, Ed.jsx)("td", {
                children: (0, Ed.jsx)(gd.c, {
                  thumbnail: (0, Ed.jsx)(od.e, {
                    game: md
                  }),
                  name: md.name
                })
              }), (0, Ed.jsx)("td", {
                children: (0, Ed.jsx)("span", {
                  className: Rd()("StudioGameListStatusChip", {
                    StudioGameListStatusChipPublished: "published" === Wd,
                    StudioGameListStatusChipTakenDown: "takenDown" === Wd
                  }),
                  children: (0, wd.c)(dd, Wd)
                })
              }), (0, Ed.jsx)("td", {
                children: (0, hd.M)(md.ccu)
              }), (0, Ed.jsx)("td", {
                children: (0, hd.M)(md.favourites)
              })]
            })
          }
        }), Gd && (0, Ed.jsx)(Jd, {})]
      })
    }
  },
  5700: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      c: () => Rd
    });
    var Wd = md(1666),
      Fd = md(1341);

    function Rd(dd) {
      let {
        thumbnail: Od,
        name: md
      } = dd;
      return (0, Fd.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Fd.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Od
        }), (0, Fd.jsx)("span", {
          className: "StudioTableGameName",
          children: md
        })]
      })
    }

    function Xd(dd) {
      let {
        game: Od
      } = dd;
      return (0, Fd.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Wd.l)(Od),
        alt: ""
      })
    }
  },
  5693: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(1341);

    function Kd(dd) {
      let {
        columns: Od,
        rows: md,
        getRowKey: Fd,
        renderRow: Kd,
        className: hd
      } = dd;
      return (0, Xd.jsxs)("table", {
        className: Rd()("Table", hd),
        children: [(0, Xd.jsx)("thead", {
          children: (0, Xd.jsx)("tr", {
            children: Od.map((dd => (0, Xd.jsx)("th", {
              children: dd.header
            }, dd.key)))
          })
        }), (0, Xd.jsx)("tbody", {
          children: md.map(((dd, Od) => (0, Xd.jsx)(Wd.Fragment, {
            children: Kd(dd, Od)
          }, Fd(dd))))
        })]
      })
    }
  },
  5687: () => {}
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);