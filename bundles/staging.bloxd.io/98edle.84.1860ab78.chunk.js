export const id = 84;
export const ids = [84];
export const modules = {
  3893: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(904),
      AW = MW(1157),
      bR = MW(2601),
      yR = MW(151),
      NW = MW(2640),
      eW = MW(2628),
      BW = MW(940);

    function tR(WW) {
      let {
        game: RW
      } = WW;
      const MW = (0, yR.n)() ? "large" : "small",
        wW = (0, NW.f)(RW, MW),
        tR = (0, bR.c)(wW),
        TW = void 0 !== tR.blurhash;
      return (0, BW.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [tR.isLoading && !TW && (0, BW.jsx)(AW.d, {
          loaderType: "Secondary"
        }), !tR.failed && (null !== tR.src || TW) && (0, BW.jsx)("div", {
          className: CW()("SchematicImage", eW.g, {
            SchematicImageFadeIn: tR.fadeIn && !TW
          }),
          style: (0, eW.c)(tR),
          children: (0, BW.jsx)(eW.b, {
            image: tR
          })
        }), tR.failed && (0, BW.jsx)("div", {
          className: "SchematicImageError",
          children: (0, BW.jsx)(zR.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  3879: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => rR
    });
    MW(3885);
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(232),
      bR = MW(874),
      yR = MW(1053),
      NW = MW(1027),
      eW = MW(969),
      BW = MW(1314),
      tR = MW(3893),
      TW = MW(1255),
      gR = MW(3901),
      iR = MW(1157),
      YW = MW(1330),
      JW = MW(3639),
      PW = MW(904),
      IW = MW(851),
      oW = MW(1979),
      lW = MW(3904),
      FW = MW(1363),
      fW = MW(940);

    function QW() {
      const {
        t: WW
      } = (0, NW.C)(), RW = (0, YW.useNavigatePreserveSearch)(), MW = (0, oW.j)(), CW = (0, wW.useMemo)((() => [...IW.d].sort(((RW, wW) => {
        var CW, zR;
        const AW = (null !== (CW = (0, oW.c)(wW, MW)) && void 0 !== CW ? CW : 0) - (null !== (zR = (0, oW.c)(RW, MW)) && void 0 !== zR ? zR : 0);
        return 0 !== AW ? AW : (0, FW.k)(RW, WW).localeCompare((0, FW.k)(wW, WW))
      }))), [MW, WW]);
      return (0, fW.jsxs)(fW.Fragment, {
        children: [(0, fW.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, fW.jsx)("h1", {
            className: "StudioPageTitle",
            children: WW("studio:firstPartyGames")
          })
        }), (0, fW.jsx)(gR.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: WW("general:game")
          }, {
            key: "ccu",
            header: WW("studio:metricCcu")
          }],
          rows: CW,
          getRowKey: WW => WW,
          renderRow: wW => {
            var CW;
            return (0, fW.jsxs)("tr", {
              onClick: () => {
                RW((0, FW.m)((0, bR.f)(wW, !0)))
              },
              children: [(0, fW.jsx)("td", {
                children: (0, fW.jsx)(lW.c, {
                  thumbnail: (0, fW.jsx)(lW.b, {
                    game: wW
                  }),
                  name: (0, FW.k)(wW, WW)
                })
              }), (0, fW.jsx)("td", {
                children: (0, yR.I)(null !== (CW = (0, oW.c)(wW, MW)) && void 0 !== CW ? CW : 0)
              })]
            })
          }
        })]
      })
    }

    function rR() {
      const {
        t: WW
      } = (0, NW.C)(), RW = (0, YW.useNavigatePreserveSearch)(), {
        userContext: MW,
        isUserContextUpdating: CW
      } = (0, eW.c)(), {
        isCreating: IW,
        create: oW
      } = (0, JW.f)(), [rR, cR] = (0, wW.useState)(null), [XW, jR] = (0, wW.useState)(null), [kR, aR] = (0, wW.useState)(!1);
      (0, wW.useEffect)((() => {
        CW || (aR(!1), BW.c.getPublishedGamePreviews(MW, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((WW => {
          cR({
            ...WW,
            results: (0, AW.$)(WW.results)
          })
        })).catch((WW => {
          console.error("Failed to get owned published games", WW), aR(!0)
        })), BW.c.getOwnedUnpublishedGames(MW).then((WW => {
          jR(WW)
        })).catch((WW => {
          console.error("Failed to get owned unpublished games", WW), aR(!0)
        })))
      }), [CW, MW]);
      const sW = null !== rR && null !== XW ? [...rR.results, ...XW] : [],
        dW = !kR && (null === rR || null === XW),
        pW = !dW && !kR && 0 === sW.length,
        hW = !CW && MW.playerHasRank("developer");
      return (0, fW.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, fW.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, fW.jsx)("h1", {
            className: "StudioPageTitle",
            children: WW("studio:myGames")
          }), (0, fW.jsxs)(TW.m, {
            onClick: oW,
            loading: IW,
            children: [(0, fW.jsx)(PW.e, {
              name: "plus"
            }), " ", WW("homePage:createCustomGame")]
          })]
        }), dW && (0, fW.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, fW.jsx)(iR.d, {})
        }), kR && (0, fW.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: WW("studio:failedToLoadGames")
        }), pW && (0, fW.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: WW("studio:noGamesYet")
        }), !dW && !kR && !pW && (0, fW.jsx)(gR.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: WW("general:game")
          }, {
            key: "status",
            header: WW("general:status")
          }, {
            key: "ccu",
            header: WW("studio:metricCcu")
          }, {
            key: "favourites",
            header: WW("general:favourites")
          }],
          rows: sW,
          getRowKey: WW => WW.schematicId,
          renderRow: MW => (0, fW.jsxs)("tr", {
            onClick: () => {
              var WW;
              WW = MW.schematicId, RW((0, FW.m)((0, bR.c)(WW)))
            },
            children: [(0, fW.jsx)("td", {
              children: (0, fW.jsx)(lW.c, {
                thumbnail: (0, fW.jsx)(tR.e, {
                  game: MW
                }),
                name: MW.name
              })
            }), (0, fW.jsx)("td", {
              children: (0, fW.jsx)("span", {
                className: zR()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: MW.gamePublished
                }),
                children: MW.gamePublished ? WW("general:published") : WW("general:draft")
              })
            }), (0, fW.jsx)("td", {
              children: (0, yR.I)(MW.ccu)
            }), (0, fW.jsx)("td", {
              children: (0, yR.I)(MW.favourites)
            })]
          })
        }), hW && (0, fW.jsx)(QW, {})]
      })
    }
  },
  3904: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW,
      c: () => zR
    });
    var wW = MW(1363),
      CW = MW(940);

    function zR(WW) {
      let {
        thumbnail: RW,
        name: MW
      } = WW;
      return (0, CW.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, CW.jsx)("div", {
          className: "StudioTableThumbnail",
          children: RW
        }), (0, CW.jsx)("span", {
          className: "StudioTableGameName",
          children: MW
        })]
      })
    }

    function AW(WW) {
      let {
        game: RW
      } = WW;
      return (0, CW.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, wW.h)(RW),
        alt: ""
      })
    }
  },
  3901: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => bR
    });
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(940);

    function bR(WW) {
      let {
        columns: RW,
        rows: MW,
        getRowKey: CW,
        renderRow: bR,
        className: yR
      } = WW;
      return (0, AW.jsxs)("table", {
        className: zR()("Table", yR),
        children: [(0, AW.jsx)("thead", {
          children: (0, AW.jsx)("tr", {
            children: RW.map((WW => (0, AW.jsx)("th", {
              children: WW.header
            }, WW.key)))
          })
        }), (0, AW.jsx)("tbody", {
          children: MW.map((WW => (0, AW.jsx)(wW.Fragment, {
            children: bR(WW)
          }, CW(WW))))
        })]
      })
    }
  },
  3885: () => {}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);