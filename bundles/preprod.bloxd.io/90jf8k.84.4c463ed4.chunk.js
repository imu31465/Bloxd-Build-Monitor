export const id = 84;
export const ids = [84];
export const modules = {
  3902: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => eF
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(929),
      hF = SF(1186),
      bW = SF(2679),
      dF = SF(132),
      PF = SF(2726),
      RF = SF(2716),
      iW = SF(971);

    function eF(FF) {
      let {
        game: WF
      } = FF;
      const SF = (0, dF.l)() ? "large" : "small",
        CF = (0, PF.e)(WF, SF),
        eF = (0, bW.e)(CF),
        EF = void 0 !== eF.blurhash;
      return (0, iW.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [eF.isLoading && !EF && (0, iW.jsx)(hF.c, {
          loaderType: "Secondary"
        }), !eF.failed && (null !== eF.src || EF) && (0, iW.jsx)("div", {
          className: AF()("SchematicImage", RF.j, {
            SchematicImageFadeIn: eF.fadeIn && !EF
          }),
          style: (0, RF.f)(eF),
          children: (0, iW.jsx)(RF.d, {
            image: eF
          })
        }), eF.failed && (0, iW.jsx)("div", {
          className: "SchematicImageError",
          children: (0, iW.jsx)(uF.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  3896: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => LF
    });
    SF(3899);
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(220),
      bW = SF(887),
      dF = SF(1085),
      PF = SF(1046),
      RF = SF(996),
      iW = SF(1336),
      eF = SF(3902),
      EF = SF(1266),
      QF = SF(3907),
      rW = SF(1186),
      gW = SF(1352),
      tW = SF(3670),
      TF = SF(929),
      aW = SF(866),
      kW = SF(1979),
      qW = SF(3915),
      VF = SF(1381),
      NF = SF(971);

    function DF() {
      const {
        t: FF
      } = (0, PF.B)(), WF = (0, gW.useNavigatePreserveSearch)(), SF = (0, kW.h)(), AF = (0, CF.useMemo)((() => [...aW.e].sort(((WF, CF) => {
        var AF, uF;
        const hF = (null !== (AF = (0, kW.d)(CF, SF)) && void 0 !== AF ? AF : 0) - (null !== (uF = (0, kW.d)(WF, SF)) && void 0 !== uF ? uF : 0);
        return 0 !== hF ? hF : (0, VF.l)(WF, FF).localeCompare((0, VF.l)(CF, FF))
      }))), [SF, FF]);
      return (0, NF.jsxs)(NF.Fragment, {
        children: [(0, NF.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, NF.jsx)("h1", {
            className: "StudioPageTitle",
            children: FF("studio:firstPartyGames")
          })
        }), (0, NF.jsx)(QF.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: FF("general:game")
          }, {
            key: "ccu",
            header: FF("studio:metricCcu")
          }],
          rows: AF,
          getRowKey: FF => FF,
          renderRow: CF => {
            var AF;
            return (0, NF.jsxs)("tr", {
              onClick: () => {
                WF((0, VF.m)((0, bW.g)(CF, !0)))
              },
              children: [(0, NF.jsx)("td", {
                children: (0, NF.jsx)(qW.e, {
                  thumbnail: (0, NF.jsx)(qW.b, {
                    game: CF
                  }),
                  name: (0, VF.l)(CF, FF)
                })
              }), (0, NF.jsx)("td", {
                children: (0, dF.R)(null !== (AF = (0, kW.d)(CF, SF)) && void 0 !== AF ? AF : 0)
              })]
            })
          }
        })]
      })
    }

    function LF() {
      const {
        t: FF
      } = (0, PF.B)(), WF = (0, gW.useNavigatePreserveSearch)(), {
        userContext: SF,
        isUserContextUpdating: AF
      } = (0, RF.b)(), {
        isCreating: aW,
        create: kW
      } = (0, tW.d)(), [LF, mW] = (0, CF.useState)(null), [OF, xW] = (0, CF.useState)(null), [ZF, oF] = (0, CF.useState)(!1);
      (0, CF.useEffect)((() => {
        AF || (oF(!1), iW.b.getPublishedGamePreviews(SF, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((FF => {
          mW({
            ...FF,
            results: (0, hF.cb)(FF.results)
          })
        })).catch((FF => {
          console.error("Failed to get owned published games", FF), oF(!0)
        })), iW.b.getOwnedUnpublishedGames(SF).then((FF => {
          xW(FF)
        })).catch((FF => {
          console.error("Failed to get owned unpublished games", FF), oF(!0)
        })))
      }), [AF, SF]);
      const YF = null !== LF && null !== OF ? [...LF.results, ...OF] : [],
        MF = !ZF && (null === LF || null === OF),
        cW = !MF && !ZF && 0 === YF.length,
        GF = !AF && SF.playerHasRank("developer");
      return (0, NF.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, NF.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, NF.jsx)("h1", {
            className: "StudioPageTitle",
            children: FF("studio:myGames")
          }), (0, NF.jsxs)(EF.k, {
            onClick: kW,
            loading: aW,
            children: [(0, NF.jsx)(TF.e, {
              name: "plus"
            }), " ", FF("homePage:createCustomGame")]
          })]
        }), MF && (0, NF.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, NF.jsx)(rW.c, {})
        }), ZF && (0, NF.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: FF("studio:failedToLoadGames")
        }), cW && (0, NF.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: FF("studio:noGamesYet")
        }), !MF && !ZF && !cW && (0, NF.jsx)(QF.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: FF("general:game")
          }, {
            key: "status",
            header: FF("general:status")
          }, {
            key: "ccu",
            header: FF("studio:metricCcu")
          }, {
            key: "favourites",
            header: FF("general:favourites")
          }],
          rows: YF,
          getRowKey: FF => FF.schematicId,
          renderRow: SF => (0, NF.jsxs)("tr", {
            onClick: () => {
              var FF;
              FF = SF.schematicId, WF((0, VF.m)((0, bW.d)(FF)))
            },
            children: [(0, NF.jsx)("td", {
              children: (0, NF.jsx)(qW.e, {
                thumbnail: (0, NF.jsx)(eF.c, {
                  game: SF
                }),
                name: SF.name
              })
            }), (0, NF.jsx)("td", {
              children: (0, NF.jsx)("span", {
                className: uF()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: SF.gamePublished
                }),
                children: SF.gamePublished ? FF("general:published") : FF("general:draft")
              })
            }), (0, NF.jsx)("td", {
              children: (0, dF.R)(SF.ccu)
            }), (0, NF.jsx)("td", {
              children: (0, dF.R)(SF.favourites)
            })]
          })
        }), GF && (0, NF.jsx)(DF, {})]
      })
    }
  },
  3915: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF,
      e: () => uF
    });
    var CF = SF(1381),
      AF = SF(971);

    function uF(FF) {
      let {
        thumbnail: WF,
        name: SF
      } = FF;
      return (0, AF.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, AF.jsx)("div", {
          className: "StudioTableThumbnail",
          children: WF
        }), (0, AF.jsx)("span", {
          className: "StudioTableGameName",
          children: SF
        })]
      })
    }

    function hF(FF) {
      let {
        game: WF
      } = FF;
      return (0, AF.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, CF.i)(WF),
        alt: ""
      })
    }
  },
  3907: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => bW
    });
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(971);

    function bW(FF) {
      let {
        columns: WF,
        rows: SF,
        getRowKey: AF,
        renderRow: bW,
        className: dF
      } = FF;
      return (0, hF.jsxs)("table", {
        className: uF()("Table", dF),
        children: [(0, hF.jsx)("thead", {
          children: (0, hF.jsx)("tr", {
            children: WF.map((FF => (0, hF.jsx)("th", {
              children: FF.header
            }, FF.key)))
          })
        }), (0, hF.jsx)("tbody", {
          children: SF.map((FF => (0, hF.jsx)(CF.Fragment, {
            children: bW(FF)
          }, AF(FF))))
        })]
      })
    }
  },
  3899: () => {}
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);