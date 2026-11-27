export const id = 116;
export const ids = [116];
export const modules = {
  5668: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => xW
    });
    var mW = OW(1089),
      EW = OW.n(mW),
      NW = OW(1391),
      PW = OW(1383),
      LW = OW(4746),
      cW = OW(136),
      wW = OW(4787),
      tW = OW(4776),
      ZW = OW(1283);

    function xW(WW) {
      let {
        game: iW
      } = WW;
      const OW = (0, cW.is99NightsCrazyGamesBundle)() ? "large" : "small",
        mW = (0, wW.f)(iW, OW),
        xW = (0, LW.f)(mW),
        lW = void 0 !== xW.blurhash;
      return (0, ZW.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [xW.isLoading && !lW && (0, ZW.jsx)(PW.d, {
          loaderType: "Secondary"
        }), !xW.failed && (null !== xW.src || lW) && (0, ZW.jsx)("div", {
          className: EW()("SchematicImage", tW.j, {
            SchematicImageFadeIn: xW.fadeIn && !lW
          }),
          style: (0, tW.f)(xW),
          children: (0, ZW.jsx)(tW.b, {
            image: xW
          })
        }), xW.failed && (0, ZW.jsx)("div", {
          className: "SchematicImageError",
          children: (0, ZW.jsx)(NW.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5660: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => TW
    });
    OW(5662);
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(327),
      LW = OW(1065),
      cW = OW(1217),
      wW = OW(1172),
      tW = OW(1107),
      ZW = OW(1584),
      xW = OW(5668),
      lW = OW(1532),
      AW = OW(5673),
      bW = OW(1383),
      jW = OW(1605),
      UW = OW(5325),
      kW = OW(1391),
      sW = OW(1049),
      MW = OW(3488),
      KW = OW(5676),
      SW = OW(1638),
      YW = OW(1283);

    function yW() {
      const {
        t: WW
      } = (0, wW.B)(), iW = (0, jW.useNavigatePreserveSearch)(), OW = (0, MW.m)(), EW = (0, mW.useMemo)((() => [...sW.e].sort(((iW, mW) => {
        var EW, NW;
        const PW = (null !== (EW = (0, MW.e)(mW, OW)) && void 0 !== EW ? EW : 0) - (null !== (NW = (0, MW.e)(iW, OW)) && void 0 !== NW ? NW : 0);
        return 0 !== PW ? PW : (0, SW.s)(iW, WW).localeCompare((0, SW.s)(mW, WW))
      }))), [OW, WW]);
      return (0, YW.jsxs)(YW.Fragment, {
        children: [(0, YW.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, YW.jsx)("h1", {
            className: "StudioPageTitle",
            children: WW("studio:firstPartyGames")
          })
        }), (0, YW.jsx)(AW.b, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: WW("general:game")
          }, {
            key: "ccu",
            header: WW("studio:metricCcu")
          }],
          rows: EW,
          getRowKey: WW => WW,
          renderRow: mW => {
            var EW;
            return (0, YW.jsxs)("tr", {
              onClick: () => {
                iW((0, SW.v)((0, LW.e)(mW, !0)))
              },
              children: [(0, YW.jsx)("td", {
                children: (0, YW.jsx)(KW.e, {
                  thumbnail: (0, YW.jsx)(KW.c, {
                    game: mW
                  }),
                  name: (0, SW.s)(mW, WW)
                })
              }), (0, YW.jsx)("td", {
                children: (0, cW.V)(null !== (EW = (0, MW.e)(mW, OW)) && void 0 !== EW ? EW : 0)
              })]
            })
          }
        })]
      })
    }

    function TW() {
      const {
        t: WW
      } = (0, wW.B)(), iW = (0, jW.useNavigatePreserveSearch)(), {
        userContext: OW,
        isUserContextUpdating: EW
      } = (0, tW.e)(), {
        isCreating: sW,
        create: MW
      } = (0, UW.h)(), [TW, JW] = (0, mW.useState)(null), [hW, HW] = (0, mW.useState)(null), [nW, uW] = (0, mW.useState)(!1);
      (0, mW.useEffect)((() => {
        EW || (uW(!1), ZW.e.getPublishedGamePreviews(OW, {
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
          JW({
            ...WW,
            results: (0, PW.cb)(WW.results)
          })
        })).catch((WW => {
          console.error("Failed to get owned published games", WW), uW(!0)
        })), ZW.e.getOwnedUnpublishedGames(OW).then((WW => {
          HW(WW)
        })).catch((WW => {
          console.error("Failed to get owned unpublished games", WW), uW(!0)
        })))
      }), [EW, OW]);
      const oW = null !== TW && null !== hW ? [...TW.results, ...hW] : [],
        dW = !nW && (null === TW || null === hW),
        eW = !dW && !nW && 0 === oW.length,
        vW = !EW && OW.playerHasRank("developer");
      return (0, YW.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, YW.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, YW.jsx)("h1", {
            className: "StudioPageTitle",
            children: WW("studio:myGames")
          }), (0, YW.jsxs)(lW.n, {
            onClick: MW,
            loading: sW,
            children: [(0, YW.jsx)(kW.c, {
              name: "plus"
            }), " ", WW("homePage:createCustomGame")]
          })]
        }), dW && (0, YW.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, YW.jsx)(bW.d, {})
        }), nW && (0, YW.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: WW("studio:failedToLoadGames")
        }), eW && (0, YW.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: WW("studio:noGamesYet")
        }), !dW && !nW && !eW && (0, YW.jsx)(AW.b, {
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
          rows: oW,
          getRowKey: WW => WW.schematicId,
          renderRow: OW => {
            const mW = function(WW) {
              return (0, SW.f)(WW.gamePublished, "takenDown" in WW && WW.takenDown)
            }(OW);
            return (0, YW.jsxs)("tr", {
              onClick: () => {
                var WW;
                WW = OW.schematicId, iW((0, SW.v)((0, LW.d)(WW)))
              },
              children: [(0, YW.jsx)("td", {
                children: (0, YW.jsx)(KW.e, {
                  thumbnail: (0, YW.jsx)(xW.b, {
                    game: OW
                  }),
                  name: OW.name
                })
              }), (0, YW.jsx)("td", {
                children: (0, YW.jsx)("span", {
                  className: NW()("StudioGameListStatusChip", {
                    StudioGameListStatusChipPublished: "published" === mW,
                    StudioGameListStatusChipTakenDown: "takenDown" === mW
                  }),
                  children: (0, SW.c)(WW, mW)
                })
              }), (0, YW.jsx)("td", {
                children: (0, cW.V)(OW.ccu)
              }), (0, YW.jsx)("td", {
                children: (0, cW.V)(OW.favourites)
              })]
            })
          }
        }), vW && (0, YW.jsx)(yW, {})]
      })
    }
  },
  5676: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      e: () => NW
    });
    var mW = OW(1638),
      EW = OW(1283);

    function NW(WW) {
      let {
        thumbnail: iW,
        name: OW
      } = WW;
      return (0, EW.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, EW.jsx)("div", {
          className: "StudioTableThumbnail",
          children: iW
        }), (0, EW.jsx)("span", {
          className: "StudioTableGameName",
          children: OW
        })]
      })
    }

    function PW(WW) {
      let {
        game: iW
      } = WW;
      return (0, EW.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, mW.o)(iW),
        alt: ""
      })
    }
  },
  5673: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(1283);

    function LW(WW) {
      let {
        columns: iW,
        rows: OW,
        getRowKey: EW,
        renderRow: LW,
        className: cW
      } = WW;
      return (0, PW.jsxs)("table", {
        className: NW()("Table", cW),
        children: [(0, PW.jsx)("thead", {
          children: (0, PW.jsx)("tr", {
            children: iW.map((WW => (0, PW.jsx)("th", {
              children: WW.header
            }, WW.key)))
          })
        }), (0, PW.jsx)("tbody", {
          children: OW.map(((WW, iW) => (0, PW.jsx)(mW.Fragment, {
            children: LW(WW, iW)
          }, EW(WW))))
        })]
      })
    }
  },
  5662: () => {}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);