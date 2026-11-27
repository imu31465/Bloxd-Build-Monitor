export const id = 116;
export const ids = [116];
export const modules = {
  5792: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => wR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(1468),
      ZR = GR(1465),
      qR = GR(4850),
      iR = GR(134),
      fR = GR(4889),
      VR = GR(4881),
      KR = GR(1378);

    function wR(RR) {
      let {
        game: JR
      } = RR;
      const GR = (0, iR.is99NightsCrazyGamesBundle)() ? "large" : "small",
        yR = (0, fR.d)(JR, GR),
        wR = (0, qR.h)(yR),
        rR = void 0 !== wR.blurhash;
      return (0, KR.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [wR.isLoading && !rR && (0, KR.jsx)(ZR.d, {
          loaderType: "Secondary"
        }), !wR.failed && (null !== wR.src || rR) && (0, KR.jsx)("div", {
          className: tR()("SchematicImage", VR.f, {
            SchematicImageFadeIn: wR.fadeIn && !rR
          }),
          style: (0, VR.c)(wR),
          children: (0, KR.jsx)(VR.b, {
            image: wR
          })
        }), wR.failed && (0, KR.jsx)("div", {
          className: "SchematicImageError",
          children: (0, KR.jsx)(uR.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5777: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => lR
    });
    GR(5785);
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(359),
      qR = GR(1141),
      iR = GR(1317),
      fR = GR(1270),
      VR = GR(1196),
      KR = GR(1647),
      wR = GR(5792),
      rR = GR(1590),
      eR = GR(5798),
      aR = GR(1465),
      LR = GR(1663),
      nR = GR(5430),
      UR = GR(1468),
      WR = GR(1120),
      AR = GR(3611),
      CR = GR(5804),
      XR = GR(1695),
      MR = GR(1378);

    function BR() {
      const {
        t: RR
      } = (0, fR.A)(), JR = (0, LR.useNavigatePreserveSearch)(), GR = (0, AR.l)(), tR = (0, yR.useMemo)((() => [...WR.b].sort(((JR, yR) => {
        var tR, uR;
        const ZR = (null !== (tR = (0, AR.c)(yR, GR)) && void 0 !== tR ? tR : 0) - (null !== (uR = (0, AR.c)(JR, GR)) && void 0 !== uR ? uR : 0);
        return 0 !== ZR ? ZR : (0, XR.n)(JR, RR).localeCompare((0, XR.n)(yR, RR))
      }))), [GR, RR]);
      return (0, MR.jsxs)(MR.Fragment, {
        children: [(0, MR.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, MR.jsx)("h1", {
            className: "StudioPageTitle",
            children: RR("studio:firstPartyGames")
          })
        }), (0, MR.jsx)(eR.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: RR("general:game")
          }, {
            key: "ccu",
            header: RR("studio:metricCcu")
          }],
          rows: tR,
          getRowKey: RR => RR,
          renderRow: yR => {
            var tR;
            return (0, MR.jsxs)("tr", {
              onClick: () => {
                JR((0, XR.p)((0, qR.e)(yR, !0)))
              },
              children: [(0, MR.jsx)("td", {
                children: (0, MR.jsx)(CR.e, {
                  thumbnail: (0, MR.jsx)(CR.d, {
                    game: yR
                  }),
                  name: (0, XR.n)(yR, RR)
                })
              }), (0, MR.jsx)("td", {
                children: (0, iR.J)(null !== (tR = (0, AR.c)(yR, GR)) && void 0 !== tR ? tR : 0)
              })]
            })
          }
        })]
      })
    }

    function lR() {
      const {
        t: RR
      } = (0, fR.A)(), JR = (0, LR.useNavigatePreserveSearch)(), {
        userContext: GR,
        isUserContextUpdating: tR
      } = (0, VR.d)(), {
        isCreating: WR,
        create: AR
      } = (0, nR.g)(), [lR, pR] = (0, yR.useState)(null), [gR, bR] = (0, yR.useState)(null), [vR, OR] = (0, yR.useState)(!1);
      (0, yR.useEffect)((() => {
        tR || (OR(!1), KR.c.getPublishedGamePreviews(GR, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((RR => {
          pR({
            ...RR,
            results: (0, ZR.$)(RR.results)
          })
        })).catch((RR => {
          console.error("Failed to get owned published games", RR), OR(!0)
        })), KR.c.getOwnedUnpublishedGames(GR).then((RR => {
          bR(RR)
        })).catch((RR => {
          console.error("Failed to get owned unpublished games", RR), OR(!0)
        })))
      }), [tR, GR]);
      const xR = null !== lR && null !== gR ? [...lR.results, ...gR] : [],
        NR = !vR && (null === lR || null === gR),
        DR = !NR && !vR && 0 === xR.length,
        HR = !tR && GR.playerHasRank("developer");
      return (0, MR.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, MR.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, MR.jsx)("h1", {
            className: "StudioPageTitle",
            children: RR("studio:myGames")
          }), (0, MR.jsxs)(rR.n, {
            onClick: AR,
            loading: WR,
            children: [(0, MR.jsx)(UR.d, {
              name: "plus"
            }), " ", RR("homePage:createCustomGame")]
          })]
        }), NR && (0, MR.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, MR.jsx)(aR.d, {})
        }), vR && (0, MR.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: RR("studio:failedToLoadGames")
        }), DR && (0, MR.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: RR("studio:noGamesYet")
        }), !NR && !vR && !DR && (0, MR.jsx)(eR.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: RR("general:game")
          }, {
            key: "status",
            header: RR("general:status")
          }, {
            key: "ccu",
            header: RR("studio:metricCcu")
          }, {
            key: "favourites",
            header: RR("general:favourites")
          }],
          rows: xR,
          getRowKey: RR => RR.schematicId,
          renderRow: GR => {
            const yR = function(RR) {
              return (0, XR.d)(RR.gamePublished, "takenDown" in RR && RR.takenDown)
            }(GR);
            return (0, MR.jsxs)("tr", {
              onClick: () => {
                var RR;
                RR = GR.schematicId, JR((0, XR.p)((0, qR.d)(RR)))
              },
              children: [(0, MR.jsx)("td", {
                children: (0, MR.jsx)(CR.e, {
                  thumbnail: (0, MR.jsx)(wR.e, {
                    game: GR
                  }),
                  name: GR.name
                })
              }), (0, MR.jsx)("td", {
                children: (0, MR.jsx)("span", {
                  className: uR()("StudioGameListStatusChip", {
                    StudioGameListStatusChipPublished: "published" === yR,
                    StudioGameListStatusChipTakenDown: "takenDown" === yR
                  }),
                  children: (0, XR.c)(RR, yR)
                })
              }), (0, MR.jsx)("td", {
                children: (0, iR.J)(GR.ccu)
              }), (0, MR.jsx)("td", {
                children: (0, iR.J)(GR.favourites)
              })]
            })
          }
        }), HR && (0, MR.jsx)(BR, {})]
      })
    }
  },
  5804: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      e: () => uR
    });
    var yR = GR(1695),
      tR = GR(1378);

    function uR(RR) {
      let {
        thumbnail: JR,
        name: GR
      } = RR;
      return (0, tR.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, tR.jsx)("div", {
          className: "StudioTableThumbnail",
          children: JR
        }), (0, tR.jsx)("span", {
          className: "StudioTableGameName",
          children: GR
        })]
      })
    }

    function ZR(RR) {
      let {
        game: JR
      } = RR;
      return (0, tR.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, yR.k)(JR),
        alt: ""
      })
    }
  },
  5798: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(1378);

    function qR(RR) {
      let {
        columns: JR,
        rows: GR,
        getRowKey: tR,
        renderRow: qR,
        className: iR
      } = RR;
      return (0, ZR.jsxs)("table", {
        className: uR()("Table", iR),
        children: [(0, ZR.jsx)("thead", {
          children: (0, ZR.jsx)("tr", {
            children: JR.map((RR => (0, ZR.jsx)("th", {
              children: RR.header
            }, RR.key)))
          })
        }), (0, ZR.jsx)("tbody", {
          children: GR.map(((RR, JR) => (0, ZR.jsx)(yR.Fragment, {
            children: qR(RR, JR)
          }, tR(RR))))
        })]
      })
    }
  },
  5785: () => {}
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);