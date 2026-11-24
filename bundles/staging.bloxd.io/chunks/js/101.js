export const id = 101;
export const ids = [101];
export const modules = {
  4848: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Em
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(1089),
      xm = fm(1345),
      wm = fm(3505),
      Dm = fm(135),
      im = fm(3551),
      Rm = fm(3537),
      pm = fm(1135);

    function Em(mm) {
      let {
        game: Tm
      } = mm;
      const fm = (0, Dm.g)() ? "large" : "small",
        hm = (0, im.f)(Tm, fm),
        Em = (0, wm.g)(hm),
        om = void 0 !== Em.blurhash;
      return (0, pm.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Em.isLoading && !om && (0, pm.jsx)(xm.c, {
          loaderType: "Secondary"
        }), !Em.failed && (null !== Em.src || om) && (0, pm.jsx)("div", {
          className: Am()("SchematicImage", Rm.j, {
            SchematicImageFadeIn: Em.fadeIn && !om
          }),
          style: (0, Rm.g)(Em),
          children: (0, pm.jsx)(Rm.c, {
            image: Em
          })
        }), Em.failed && (0, pm.jsx)("div", {
          className: "SchematicImageError",
          children: (0, pm.jsx)(am.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4835: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => zm
    });
    fm(4839);
    var hm = fm(59),
      Am = fm(1080),
      am = fm.n(Am),
      xm = fm(339),
      wm = fm(1053),
      Dm = fm(1235),
      im = fm(1208),
      Rm = fm(1160),
      pm = fm(1494),
      Em = fm(4848),
      om = fm(1454),
      Om = fm(4851),
      Ym = fm(1345),
      qm = fm(1519),
      jm = fm(4569),
      Vm = fm(1089),
      Im = fm(1038),
      Km = fm(2496),
      Qm = fm(4860),
      nm = fm(1548),
      Jm = fm(1135);

    function cm() {
      const {
        t: mm
      } = (0, im.A)(), Tm = (0, qm.useNavigatePreserveSearch)(), fm = (0, Km.m)(), Am = (0, hm.useMemo)((() => [...Im.c].sort(((Tm, hm) => {
        var Am, am;
        const xm = (null !== (Am = (0, Km.d)(hm, fm)) && void 0 !== Am ? Am : 0) - (null !== (am = (0, Km.d)(Tm, fm)) && void 0 !== am ? am : 0);
        return 0 !== xm ? xm : (0, nm.n)(Tm, mm).localeCompare((0, nm.n)(hm, mm))
      }))), [fm, mm]);
      return (0, Jm.jsxs)(Jm.Fragment, {
        children: [(0, Jm.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Jm.jsx)("h1", {
            className: "StudioPageTitle",
            children: mm("studio:firstPartyGames")
          })
        }), (0, Jm.jsx)(Om.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: mm("general:game")
          }, {
            key: "ccu",
            header: mm("studio:metricCcu")
          }],
          rows: Am,
          getRowKey: mm => mm,
          renderRow: hm => {
            var Am;
            return (0, Jm.jsxs)("tr", {
              onClick: () => {
                Tm((0, nm.p)((0, wm.f)(hm, !0)))
              },
              children: [(0, Jm.jsx)("td", {
                children: (0, Jm.jsx)(Qm.h, {
                  thumbnail: (0, Jm.jsx)(Qm.d, {
                    game: hm
                  }),
                  name: (0, nm.n)(hm, mm)
                })
              }), (0, Jm.jsx)("td", {
                children: (0, Dm.J)(null !== (Am = (0, Km.d)(hm, fm)) && void 0 !== Am ? Am : 0)
              })]
            })
          }
        })]
      })
    }

    function zm() {
      const {
        t: mm
      } = (0, im.A)(), Tm = (0, qm.useNavigatePreserveSearch)(), {
        userContext: fm,
        isUserContextUpdating: Am
      } = (0, Rm.e)(), {
        isCreating: Im,
        create: Km
      } = (0, jm.d)(), [zm, Zm] = (0, hm.useState)(null), [km, bm] = (0, hm.useState)(null), [Sm, em] = (0, hm.useState)(!1);
      (0, hm.useEffect)((() => {
        Am || (em(!1), pm.d.getPublishedGamePreviews(fm, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((mm => {
          Zm({
            ...mm,
            results: (0, xm.bb)(mm.results)
          })
        })).catch((mm => {
          console.error("Failed to get owned published games", mm), em(!0)
        })), pm.d.getOwnedUnpublishedGames(fm).then((mm => {
          bm(mm)
        })).catch((mm => {
          console.error("Failed to get owned unpublished games", mm), em(!0)
        })))
      }), [Am, fm]);
      const Nm = null !== zm && null !== km ? [...zm.results, ...km] : [],
        Gm = !Sm && (null === zm || null === km),
        Xm = !Gm && !Sm && 0 === Nm.length,
        Pm = !Am && fm.playerHasRank("developer");
      return (0, Jm.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, Jm.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, Jm.jsx)("h1", {
            className: "StudioPageTitle",
            children: mm("studio:myGames")
          }), (0, Jm.jsxs)(om.m, {
            onClick: Km,
            loading: Im,
            children: [(0, Jm.jsx)(Vm.c, {
              name: "plus"
            }), " ", mm("homePage:createCustomGame")]
          })]
        }), Gm && (0, Jm.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Jm.jsx)(Ym.c, {})
        }), Sm && (0, Jm.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: mm("studio:failedToLoadGames")
        }), Xm && (0, Jm.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: mm("studio:noGamesYet")
        }), !Gm && !Sm && !Xm && (0, Jm.jsx)(Om.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: mm("general:game")
          }, {
            key: "status",
            header: mm("general:status")
          }, {
            key: "ccu",
            header: mm("studio:metricCcu")
          }, {
            key: "favourites",
            header: mm("general:favourites")
          }],
          rows: Nm,
          getRowKey: mm => mm.schematicId,
          renderRow: fm => (0, Jm.jsxs)("tr", {
            onClick: () => {
              var mm;
              mm = fm.schematicId, Tm((0, nm.p)((0, wm.d)(mm)))
            },
            children: [(0, Jm.jsx)("td", {
              children: (0, Jm.jsx)(Qm.h, {
                thumbnail: (0, Jm.jsx)(Em.c, {
                  game: fm
                }),
                name: fm.name
              })
            }), (0, Jm.jsx)("td", {
              children: (0, Jm.jsx)("span", {
                className: am()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: fm.gamePublished
                }),
                children: fm.gamePublished ? mm("general:published") : mm("general:draft")
              })
            }), (0, Jm.jsx)("td", {
              children: (0, Dm.J)(fm.ccu)
            }), (0, Jm.jsx)("td", {
              children: (0, Dm.J)(fm.favourites)
            })]
          })
        }), Pm && (0, Jm.jsx)(cm, {})]
      })
    }
  },
  4860: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm,
      h: () => am
    });
    var hm = fm(1548),
      Am = fm(1135);

    function am(mm) {
      let {
        thumbnail: Tm,
        name: fm
      } = mm;
      return (0, Am.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Am.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Tm
        }), (0, Am.jsx)("span", {
          className: "StudioTableGameName",
          children: fm
        })]
      })
    }

    function xm(mm) {
      let {
        game: Tm
      } = mm;
      return (0, Am.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, hm.k)(Tm),
        alt: ""
      })
    }
  },
  4851: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm
    });
    var hm = fm(59),
      Am = fm(1080),
      am = fm.n(Am),
      xm = fm(1135);

    function wm(mm) {
      let {
        columns: Tm,
        rows: fm,
        getRowKey: Am,
        renderRow: wm,
        className: Dm
      } = mm;
      return (0, xm.jsxs)("table", {
        className: am()("Table", Dm),
        children: [(0, xm.jsx)("thead", {
          children: (0, xm.jsx)("tr", {
            children: Tm.map((mm => (0, xm.jsx)("th", {
              children: mm.header
            }, mm.key)))
          })
        }), (0, xm.jsx)("tbody", {
          children: fm.map((mm => (0, xm.jsx)(hm.Fragment, {
            children: wm(mm)
          }, Am(mm))))
        })]
      })
    }
  },
  4839: () => {}
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);