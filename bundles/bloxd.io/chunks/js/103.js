export const id = 103;
export const ids = [103];
export const modules = {
  5013: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => LT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(1135),
      gT = mT(1446),
      nT = mT(3599),
      HT = mT(133),
      kT = mT(3644),
      jT = mT(3627),
      lT = mT(1188);

    function LT(TT) {
      let {
        game: UT
      } = TT;
      const mT = (0, HT.is99NightsCrazyGamesBundle)() ? "large" : "small",
        WT = (0, kT.e)(UT, mT),
        LT = (0, nT.e)(WT),
        pT = void 0 !== LT.blurhash;
      return (0, lT.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [LT.isLoading && !pT && (0, lT.jsx)(gT.c, {
          loaderType: "Secondary"
        }), !LT.failed && (null !== LT.src || pT) && (0, lT.jsx)("div", {
          className: zT()("SchematicImage", jT.h, {
            SchematicImageFadeIn: LT.fadeIn && !pT
          }),
          style: (0, jT.e)(LT),
          children: (0, lT.jsx)(jT.c, {
            image: LT
          })
        }), LT.failed && (0, lT.jsx)("div", {
          className: "SchematicImageError",
          children: (0, lT.jsx)(MT.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5006: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => JT
    });
    mT(5009);
    var WT = mT(63),
      zT = mT(1126),
      MT = mT.n(zT),
      gT = mT(351),
      nT = mT(1099),
      HT = mT(1321),
      kT = mT(1288),
      jT = mT(1225),
      lT = mT(1613),
      LT = mT(5013),
      pT = mT(1569),
      BT = mT(5017),
      ZT = mT(1446),
      cT = mT(1633),
      vT = mT(4726),
      fT = mT(1135),
      qT = mT(1087),
      iT = mT(2641),
      bT = mT(5021),
      OT = mT(1658),
      eT = mT(1188);

    function YT() {
      const {
        t: TT
      } = (0, kT.z)(), UT = (0, cT.useNavigatePreserveSearch)(), mT = (0, iT.m)(), zT = (0, WT.useMemo)((() => [...qT.b].sort(((UT, WT) => {
        var zT, MT;
        const gT = (null !== (zT = (0, iT.c)(WT, mT)) && void 0 !== zT ? zT : 0) - (null !== (MT = (0, iT.c)(UT, mT)) && void 0 !== MT ? MT : 0);
        return 0 !== gT ? gT : (0, OT.h)(UT, TT).localeCompare((0, OT.h)(WT, TT))
      }))), [mT, TT]);
      return (0, eT.jsxs)(eT.Fragment, {
        children: [(0, eT.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, eT.jsx)("h1", {
            className: "StudioPageTitle",
            children: TT("studio:firstPartyGames")
          })
        }), (0, eT.jsx)(BT.b, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: TT("general:game")
          }, {
            key: "ccu",
            header: TT("studio:metricCcu")
          }],
          rows: zT,
          getRowKey: TT => TT,
          renderRow: WT => {
            var zT;
            return (0, eT.jsxs)("tr", {
              onClick: () => {
                UT((0, OT.k)((0, nT.e)(WT, !0)))
              },
              children: [(0, eT.jsx)("td", {
                children: (0, eT.jsx)(bT.f, {
                  thumbnail: (0, eT.jsx)(bT.d, {
                    game: WT
                  }),
                  name: (0, OT.h)(WT, TT)
                })
              }), (0, eT.jsx)("td", {
                children: (0, HT.V)(null !== (zT = (0, iT.c)(WT, mT)) && void 0 !== zT ? zT : 0)
              })]
            })
          }
        })]
      })
    }

    function JT() {
      const {
        t: TT
      } = (0, kT.z)(), UT = (0, cT.useNavigatePreserveSearch)(), {
        userContext: mT,
        isUserContextUpdating: zT
      } = (0, jT.d)(), {
        isCreating: qT,
        create: iT
      } = (0, vT.c)(), [JT, xT] = (0, WT.useState)(null), [dT, wT] = (0, WT.useState)(null), [tT, aT] = (0, WT.useState)(!1);
      (0, WT.useEffect)((() => {
        zT || (aT(!1), lT.b.getPublishedGamePreviews(mT, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((TT => {
          xT({
            ...TT,
            results: (0, gT.V)(TT.results)
          })
        })).catch((TT => {
          console.error("Failed to get owned published games", TT), aT(!0)
        })), lT.b.getOwnedUnpublishedGames(mT).then((TT => {
          wT(TT)
        })).catch((TT => {
          console.error("Failed to get owned unpublished games", TT), aT(!0)
        })))
      }), [zT, mT]);
      const yT = null !== JT && null !== dT ? [...JT.results, ...dT] : [],
        XT = !tT && (null === JT || null === dT),
        IT = !XT && !tT && 0 === yT.length,
        QT = !zT && mT.playerHasRank("developer");
      return (0, eT.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, eT.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, eT.jsx)("h1", {
            className: "StudioPageTitle",
            children: TT("studio:myGames")
          }), (0, eT.jsxs)(pT.l, {
            onClick: iT,
            loading: qT,
            children: [(0, eT.jsx)(fT.c, {
              name: "plus"
            }), " ", TT("homePage:createCustomGame")]
          })]
        }), XT && (0, eT.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, eT.jsx)(ZT.c, {})
        }), tT && (0, eT.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: TT("studio:failedToLoadGames")
        }), IT && (0, eT.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: TT("studio:noGamesYet")
        }), !XT && !tT && !IT && (0, eT.jsx)(BT.b, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: TT("general:game")
          }, {
            key: "status",
            header: TT("general:status")
          }, {
            key: "ccu",
            header: TT("studio:metricCcu")
          }, {
            key: "favourites",
            header: TT("general:favourites")
          }],
          rows: yT,
          getRowKey: TT => TT.schematicId,
          renderRow: mT => (0, eT.jsxs)("tr", {
            onClick: () => {
              var TT;
              TT = mT.schematicId, UT((0, OT.k)((0, nT.d)(TT)))
            },
            children: [(0, eT.jsx)("td", {
              children: (0, eT.jsx)(bT.f, {
                thumbnail: (0, eT.jsx)(LT.c, {
                  game: mT
                }),
                name: mT.name
              })
            }), (0, eT.jsx)("td", {
              children: (0, eT.jsx)("span", {
                className: MT()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: mT.gamePublished
                }),
                children: mT.gamePublished ? TT("general:published") : TT("general:draft")
              })
            }), (0, eT.jsx)("td", {
              children: (0, HT.V)(mT.ccu)
            }), (0, eT.jsx)("td", {
              children: (0, HT.V)(mT.favourites)
            })]
          })
        }), QT && (0, eT.jsx)(YT, {})]
      })
    }
  },
  5021: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      f: () => MT
    });
    var WT = mT(1658),
      zT = mT(1188);

    function MT(TT) {
      let {
        thumbnail: UT,
        name: mT
      } = TT;
      return (0, zT.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, zT.jsx)("div", {
          className: "StudioTableThumbnail",
          children: UT
        }), (0, zT.jsx)("span", {
          className: "StudioTableGameName",
          children: mT
        })]
      })
    }

    function gT(TT) {
      let {
        game: UT
      } = TT;
      return (0, zT.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, WT.f)(UT),
        alt: ""
      })
    }
  },
  5017: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT
    });
    var WT = mT(63),
      zT = mT(1126),
      MT = mT.n(zT),
      gT = mT(1188);

    function nT(TT) {
      let {
        columns: UT,
        rows: mT,
        getRowKey: zT,
        renderRow: nT,
        className: HT
      } = TT;
      return (0, gT.jsxs)("table", {
        className: MT()("Table", HT),
        children: [(0, gT.jsx)("thead", {
          children: (0, gT.jsx)("tr", {
            children: UT.map((TT => (0, gT.jsx)("th", {
              children: TT.header
            }, TT.key)))
          })
        }), (0, gT.jsx)("tbody", {
          children: mT.map((TT => (0, gT.jsx)(WT.Fragment, {
            children: nT(TT)
          }, zT(TT))))
        })]
      })
    }
  },
  5009: () => {}
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);