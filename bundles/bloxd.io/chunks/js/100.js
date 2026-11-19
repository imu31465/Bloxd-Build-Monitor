export const id = 100;
export const ids = [100];
export const modules = {
  4483: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => sY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(1098),
      RY = DY(1337),
      OY = DY(3082),
      gY = DY(144),
      aY = DY(3139),
      vY = DY(3123),
      uY = DY(1125);

    function sY(YY) {
      let {
        game: rY
      } = YY;
      const DY = (0, gY.h)() ? "large" : "small",
        FY = (0, aY.c)(rY, DY),
        sY = (0, OY.f)(FY),
        iY = void 0 !== sY.blurhash;
      return (0, uY.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [sY.isLoading && !iY && (0, uY.jsx)(RY.c, {
          loaderType: "Secondary"
        }), !sY.failed && (null !== sY.src || iY) && (0, uY.jsx)("div", {
          className: AY()("SchematicImage", vY.j, {
            SchematicImageFadeIn: sY.fadeIn && !iY
          }),
          style: (0, vY.h)(sY),
          children: (0, uY.jsx)(vY.d, {
            image: sY
          })
        }), sY.failed && (0, uY.jsx)("div", {
          className: "SchematicImageError",
          children: (0, uY.jsx)(IY.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4469: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => NY
    });
    DY(4478);
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(332),
      OY = DY(1066),
      gY = DY(1231),
      aY = DY(1211),
      vY = DY(1152),
      uY = DY(1471),
      sY = DY(4483),
      iY = DY(1437),
      yY = DY(4491),
      QY = DY(1337),
      oY = DY(1488),
      WY = DY(4210),
      EY = DY(1098),
      mY = DY(1055),
      VY = DY(2317),
      SY = DY(4500),
      lY = DY(1519),
      TY = DY(1125);

    function eY() {
      const {
        t: YY
      } = (0, aY.C)(), rY = (0, oY.useNavigatePreserveSearch)(), DY = (0, VY.k)(), AY = (0, FY.useMemo)((() => [...mY.b].sort(((rY, FY) => {
        var AY, IY;
        const RY = (null !== (AY = (0, VY.d)(FY, DY)) && void 0 !== AY ? AY : 0) - (null !== (IY = (0, VY.d)(rY, DY)) && void 0 !== IY ? IY : 0);
        return 0 !== RY ? RY : (0, lY.n)(rY, YY).localeCompare((0, lY.n)(FY, YY))
      }))), [DY, YY]);
      return (0, TY.jsxs)(TY.Fragment, {
        children: [(0, TY.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, TY.jsx)("h1", {
            className: "StudioPageTitle",
            children: YY("studio:firstPartyGames")
          })
        }), (0, TY.jsx)(yY.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: YY("general:game")
          }, {
            key: "ccu",
            header: YY("studio:metricCcu")
          }],
          rows: AY,
          getRowKey: YY => YY,
          renderRow: FY => {
            var AY;
            return (0, TY.jsxs)("tr", {
              onClick: () => {
                rY((0, lY.q)((0, OY.g)(FY, !0)))
              },
              children: [(0, TY.jsx)("td", {
                children: (0, TY.jsx)(SY.g, {
                  thumbnail: (0, TY.jsx)(SY.c, {
                    game: FY
                  }),
                  name: (0, lY.n)(FY, YY)
                })
              }), (0, TY.jsx)("td", {
                children: (0, gY.S)(null !== (AY = (0, VY.d)(FY, DY)) && void 0 !== AY ? AY : 0)
              })]
            })
          }
        })]
      })
    }

    function NY() {
      const {
        t: YY
      } = (0, aY.C)(), rY = (0, oY.useNavigatePreserveSearch)(), {
        userContext: DY,
        isUserContextUpdating: AY
      } = (0, vY.d)(), {
        isCreating: mY,
        create: VY
      } = (0, WY.g)(), [NY, BY] = (0, FY.useState)(null), [cY, KY] = (0, FY.useState)(null), [HY, zY] = (0, FY.useState)(!1);
      (0, FY.useEffect)((() => {
        AY || (zY(!1), uY.e.getPublishedGamePreviews(DY, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((YY => {
          BY({
            ...YY,
            results: (0, RY.cb)(YY.results)
          })
        })).catch((YY => {
          console.error("Failed to get owned published games", YY), zY(!0)
        })), uY.e.getOwnedUnpublishedGames(DY).then((YY => {
          KY(YY)
        })).catch((YY => {
          console.error("Failed to get owned unpublished games", YY), zY(!0)
        })))
      }), [AY, DY]);
      const ZY = null !== NY && null !== cY ? [...NY.results, ...cY] : [],
        CY = !HY && (null === NY || null === cY),
        fY = !CY && !HY && 0 === ZY.length,
        jY = !AY && DY.playerHasRank("developer");
      return (0, TY.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, TY.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, TY.jsx)("h1", {
            className: "StudioPageTitle",
            children: YY("studio:myGames")
          }), (0, TY.jsxs)(iY.n, {
            onClick: VY,
            loading: mY,
            children: [(0, TY.jsx)(EY.e, {
              name: "plus"
            }), " ", YY("homePage:createCustomGame")]
          })]
        }), CY && (0, TY.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, TY.jsx)(QY.c, {})
        }), HY && (0, TY.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: YY("studio:failedToLoadGames")
        }), fY && (0, TY.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: YY("studio:noGamesYet")
        }), !CY && !HY && !fY && (0, TY.jsx)(yY.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: YY("general:game")
          }, {
            key: "status",
            header: YY("general:status")
          }, {
            key: "ccu",
            header: YY("studio:metricCcu")
          }, {
            key: "favourites",
            header: YY("general:favourites")
          }],
          rows: ZY,
          getRowKey: YY => YY.schematicId,
          renderRow: DY => (0, TY.jsxs)("tr", {
            onClick: () => {
              var YY;
              YY = DY.schematicId, rY((0, lY.q)((0, OY.d)(YY)))
            },
            children: [(0, TY.jsx)("td", {
              children: (0, TY.jsx)(SY.g, {
                thumbnail: (0, TY.jsx)(sY.e, {
                  game: DY
                }),
                name: DY.name
              })
            }), (0, TY.jsx)("td", {
              children: (0, TY.jsx)("span", {
                className: IY()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: DY.gamePublished
                }),
                children: DY.gamePublished ? YY("general:published") : YY("general:draft")
              })
            }), (0, TY.jsx)("td", {
              children: (0, gY.S)(DY.ccu)
            }), (0, TY.jsx)("td", {
              children: (0, gY.S)(DY.favourites)
            })]
          })
        }), jY && (0, TY.jsx)(eY, {})]
      })
    }
  },
  4500: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      g: () => IY
    });
    var FY = DY(1519),
      AY = DY(1125);

    function IY(YY) {
      let {
        thumbnail: rY,
        name: DY
      } = YY;
      return (0, AY.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, AY.jsx)("div", {
          className: "StudioTableThumbnail",
          children: rY
        }), (0, AY.jsx)("span", {
          className: "StudioTableGameName",
          children: DY
        })]
      })
    }

    function RY(YY) {
      let {
        game: rY
      } = YY;
      return (0, AY.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, FY.k)(rY),
        alt: ""
      })
    }
  },
  4491: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(1125);

    function OY(YY) {
      let {
        columns: rY,
        rows: DY,
        getRowKey: AY,
        renderRow: OY,
        className: gY
      } = YY;
      return (0, RY.jsxs)("table", {
        className: IY()("Table", gY),
        children: [(0, RY.jsx)("thead", {
          children: (0, RY.jsx)("tr", {
            children: rY.map((YY => (0, RY.jsx)("th", {
              children: YY.header
            }, YY.key)))
          })
        }), (0, RY.jsx)("tbody", {
          children: DY.map((YY => (0, RY.jsx)(FY.Fragment, {
            children: OY(YY)
          }, AY(YY))))
        })]
      })
    }
  },
  4478: () => {}
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);