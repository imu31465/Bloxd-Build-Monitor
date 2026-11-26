export const id = 114;
export const ids = [114];
export const modules = {
  5383: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => GH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(1315),
      hH = LH(1313),
      tH = LH(3892),
      zH = LH(120),
      CH = LH(3924),
      EH = LH(3917),
      XH = LH(1225);

    function GH(HH) {
      let {
        game: BH
      } = HH;
      const LH = (0, zH.is99NightsCrazyGamesBundle)() ? "large" : "small",
        AH = (0, CH.h)(BH, LH),
        GH = (0, tH.g)(AH),
        YH = void 0 !== GH.blurhash;
      return (0, XH.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [GH.isLoading && !YH && (0, XH.jsx)(hH.d, {
          loaderType: "Secondary"
        }), !GH.failed && (null !== GH.src || YH) && (0, XH.jsx)("div", {
          className: rH()("SchematicImage", EH.i, {
            SchematicImageFadeIn: GH.fadeIn && !YH
          }),
          style: (0, EH.f)(GH),
          children: (0, XH.jsx)(EH.e, {
            image: GH
          })
        }), GH.failed && (0, XH.jsx)("div", {
          className: "SchematicImageError",
          children: (0, XH.jsx)(SH.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5377: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => bH
    });
    LH(5379);
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(304),
      tH = LH(1016),
      zH = LH(1168),
      CH = LH(1123),
      EH = LH(1061),
      XH = LH(1502),
      GH = LH(5383),
      YH = LH(1455),
      uH = LH(5386),
      QH = LH(1313),
      WH = LH(1509),
      MH = LH(5044),
      xH = LH(1315),
      vH = LH(998),
      PH = LH(2710),
      TH = LH(5388),
      UH = LH(1536),
      VH = LH(1225);

    function OH() {
      const {
        t: HH
      } = (0, CH.B)(), BH = (0, WH.useNavigatePreserveSearch)(), LH = (0, PH.l)(), rH = (0, AH.useMemo)((() => [...vH.d].sort(((BH, AH) => {
        var rH, SH;
        const hH = (null !== (rH = (0, PH.e)(AH, LH)) && void 0 !== rH ? rH : 0) - (null !== (SH = (0, PH.e)(BH, LH)) && void 0 !== SH ? SH : 0);
        return 0 !== hH ? hH : (0, UH.q)(BH, HH).localeCompare((0, UH.q)(AH, HH))
      }))), [LH, HH]);
      return (0, VH.jsxs)(VH.Fragment, {
        children: [(0, VH.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, VH.jsx)("h1", {
            className: "StudioPageTitle",
            children: HH("studio:firstPartyGames")
          })
        }), (0, VH.jsx)(uH.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: HH("general:game")
          }, {
            key: "ccu",
            header: HH("studio:metricCcu")
          }],
          rows: rH,
          getRowKey: HH => HH,
          renderRow: AH => {
            var rH;
            return (0, VH.jsxs)("tr", {
              onClick: () => {
                BH((0, UH.t)((0, tH.g)(AH, !0)))
              },
              children: [(0, VH.jsx)("td", {
                children: (0, VH.jsx)(TH.h, {
                  thumbnail: (0, VH.jsx)(TH.d, {
                    game: AH
                  }),
                  name: (0, UH.q)(AH, HH)
                })
              }), (0, VH.jsx)("td", {
                children: (0, zH.T)(null !== (rH = (0, PH.e)(AH, LH)) && void 0 !== rH ? rH : 0)
              })]
            })
          }
        })]
      })
    }

    function bH() {
      const {
        t: HH
      } = (0, CH.B)(), BH = (0, WH.useNavigatePreserveSearch)(), {
        userContext: LH,
        isUserContextUpdating: rH
      } = (0, EH.e)(), {
        isCreating: vH,
        create: PH
      } = (0, MH.e)(), [bH, kH] = (0, AH.useState)(null), [mH, oH] = (0, AH.useState)(null), [IH, fH] = (0, AH.useState)(!1);
      (0, AH.useEffect)((() => {
        rH || (fH(!1), XH.d.getPublishedGamePreviews(LH, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((HH => {
          kH({
            ...HH,
            results: (0, hH.fb)(HH.results)
          })
        })).catch((HH => {
          console.error("Failed to get owned published games", HH), fH(!0)
        })), XH.d.getOwnedUnpublishedGames(LH).then((HH => {
          oH(HH)
        })).catch((HH => {
          console.error("Failed to get owned unpublished games", HH), fH(!0)
        })))
      }), [rH, LH]);
      const lH = null !== bH && null !== mH ? [...bH.results, ...mH] : [],
        KH = !IH && (null === bH || null === mH),
        cH = !KH && !IH && 0 === lH.length,
        eH = !rH && LH.playerHasRank("developer");
      return (0, VH.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, VH.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, VH.jsx)("h1", {
            className: "StudioPageTitle",
            children: HH("studio:myGames")
          }), (0, VH.jsxs)(YH.u, {
            onClick: PH,
            loading: vH,
            children: [(0, VH.jsx)(xH.c, {
              name: "plus"
            }), " ", HH("homePage:createCustomGame")]
          })]
        }), KH && (0, VH.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, VH.jsx)(QH.d, {})
        }), IH && (0, VH.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: HH("studio:failedToLoadGames")
        }), cH && (0, VH.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: HH("studio:noGamesYet")
        }), !KH && !IH && !cH && (0, VH.jsx)(uH.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: HH("general:game")
          }, {
            key: "status",
            header: HH("general:status")
          }, {
            key: "ccu",
            header: HH("studio:metricCcu")
          }, {
            key: "favourites",
            header: HH("general:favourites")
          }],
          rows: lH,
          getRowKey: HH => HH.schematicId,
          renderRow: LH => {
            const AH = function(HH) {
              return (0, UH.f)(HH.gamePublished, "takenDown" in HH && HH.takenDown)
            }(LH);
            return (0, VH.jsxs)("tr", {
              onClick: () => {
                var HH;
                HH = LH.schematicId, BH((0, UH.t)((0, tH.d)(HH)))
              },
              children: [(0, VH.jsx)("td", {
                children: (0, VH.jsx)(TH.h, {
                  thumbnail: (0, VH.jsx)(GH.b, {
                    game: LH
                  }),
                  name: LH.name
                })
              }), (0, VH.jsx)("td", {
                children: (0, VH.jsx)("span", {
                  className: SH()("StudioGameListStatusChip", {
                    StudioGameListStatusChipPublished: "published" === AH,
                    StudioGameListStatusChipTakenDown: "takenDown" === AH
                  }),
                  children: (0, UH.e)(HH, AH)
                })
              }), (0, VH.jsx)("td", {
                children: (0, zH.T)(LH.ccu)
              }), (0, VH.jsx)("td", {
                children: (0, zH.T)(LH.favourites)
              })]
            })
          }
        }), eH && (0, VH.jsx)(OH, {})]
      })
    }
  },
  5388: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      h: () => SH
    });
    var AH = LH(1536),
      rH = LH(1225);

    function SH(HH) {
      let {
        thumbnail: BH,
        name: LH
      } = HH;
      return (0, rH.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, rH.jsx)("div", {
          className: "StudioTableThumbnail",
          children: BH
        }), (0, rH.jsx)("span", {
          className: "StudioTableGameName",
          children: LH
        })]
      })
    }

    function hH(HH) {
      let {
        game: BH
      } = HH;
      return (0, rH.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, AH.o)(BH),
        alt: ""
      })
    }
  },
  5386: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1225);

    function tH(HH) {
      let {
        columns: BH,
        rows: LH,
        getRowKey: rH,
        renderRow: tH,
        className: zH
      } = HH;
      return (0, hH.jsxs)("table", {
        className: SH()("Table", zH),
        children: [(0, hH.jsx)("thead", {
          children: (0, hH.jsx)("tr", {
            children: BH.map((HH => (0, hH.jsx)("th", {
              children: HH.header
            }, HH.key)))
          })
        }), (0, hH.jsx)("tbody", {
          children: LH.map((HH => (0, hH.jsx)(AH.Fragment, {
            children: tH(HH)
          }, rH(HH))))
        })]
      })
    }
  },
  5379: () => {}
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);