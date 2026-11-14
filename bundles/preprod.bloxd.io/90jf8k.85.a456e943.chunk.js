export const id = 85;
export const ids = [85];
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
  5484: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => fF
    });
    SF(3899);
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(220),
      bW = SF(887),
      dF = SF(1085),
      PF = SF(866),
      RF = SF(1046),
      iW = SF(1336),
      eF = SF(2732),
      EF = SF(996),
      QF = SF(3902),
      rW = SF(2012),
      gW = SF(1266),
      tW = SF(3632),
      TF = SF(3907),
      aW = SF(1186),
      kW = SF(1352),
      qW = SF(3629),
      VF = SF(1979),
      NF = SF(3915),
      DF = SF(5390),
      LF = SF(1381),
      mW = SF(971);
    const OF = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      xW = 25,
      ZF = "scope",
      oF = "category",
      YF = "customGames";
    const MF = 7,
      cW = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function GF(FF) {
      let {
        position: WF
      } = FF;
      const SF = DF.d[WF];
      return (0, mW.jsxs)("td", {
        className: uF()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== SF,
          [`StudioLeaderboardTopPosition${WF}`]: void 0 !== SF
        }),
        children: [void 0 !== SF && (0, mW.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: SF,
          alt: ""
        }), WF]
      })
    }

    function zW(FF) {
      let {
        discoverability: WF
      } = FF;
      const {
        playsPerDay: SF,
        avgPlaytimeMinutes: AF,
        retention: uF
      } = null === WF ? cW : (0, eF.k)(WF);
      return (0, mW.jsxs)(CF.Fragment, {
        children: [(0, mW.jsx)("td", {
          children: null !== SF ? (0, eF.c)(SF) : "-"
        }), (0, mW.jsx)("td", {
          children: null !== AF ? (0, eF.e)(AF) : "-"
        }), (0, mW.jsx)("td", {
          children: null !== uF ? (0, eF.h)(uF) : "-"
        })]
      })
    }

    function IF(FF) {
      let {
        discoverability: WF
      } = FF;
      return (0, mW.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === WF || void 0 === WF ? void 0 : WF.engagementScore) ? (0, dF.R)(Math.round(WF.engagementScore)) : "-"
      })
    }

    function fF() {
      var FF, WF;
      const {
        t: SF
      } = (0, RF.B)(), AF = (0, kW.useNavigatePreserveSearch)(), {
        userContext: uF,
        isUserContextUpdating: DF
      } = (0, EF.b)(), cW = (0, VF.h)(), [fF, yW] = (0, qW.n)(), sF = (nF = fF.get(ZF), OF.some((FF => FF.scope === nF)) ? nF : YF);
      var nF;
      const HF = function(FF) {
          return hF.X.includes(FF) ? FF : null
        }(fF.get(oF)),
        KF = (0, qW.g)(fF.get(qW.e)),
        [wF, XF] = (0, CF.useState)(null),
        [UF, BF] = (0, CF.useState)(!1);

      function jW(FF) {
        yW((WF => {
          (0, qW.i)(WF, ZF, FF.scope === YF ? null : FF.scope), (0, qW.i)(WF, oF, FF.category), (0, qW.l)(WF, FF.page)
        }))
      }
      const vW = !DF && uF.playerHasRank("developer"),
        JF = vW && "allGames" === sF,
        pF = vW && "dormantGames" === sF;
      (0, CF.useEffect)((() => {
        if (DF) return;
        let FF = !1;
        return XF(null), BF(!1), iW.b.getPublishedGamePreviews(uF, {
          searchQuery: null,
          pageNumber: KF,
          pageSize: xW,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== HF ? [HF] : [],
          upAndComing: !1,
          dormantGames: pF,
          sortByEngagementScore: !0,
          firstPartyGameNames: JF ? PF.e : void 0,
          includeOwners: !0
        }).then((WF => {
          FF || XF(WF)
        })).catch((WF => {
          console.error("Failed to load the studio leaderboard", WF), FF || BF(!0)
        })), () => {
          FF = !0
        }
      }), [DF, JF, pF, HF, KF, uF]);
      const lF = null !== (FF = null === wF || void 0 === wF ? void 0 : wF.results) && void 0 !== FF ? FF : null,
        FW = function(FF, WF, SF) {
          const [AF, uF] = (0, CF.useState)({}), hF = SF ? (null !== FF && void 0 !== FF ? FF : []).flatMap((FF => "firstPartyGame" === FF.type ? [(0, bW.g)(FF.gameNameWithVariation, !0)] : [])).join(",") : "", dF = (0, CF.useMemo)((() => "" === hF ? [] : hF.split(",")), [hF]);
          return (0, CF.useEffect)((() => {
            if (0 === dF.length) return void uF({});
            let FF = !1;
            return iW.b.getGamesByAnalyticsIds(WF, dF).then((WF => {
              FF || uF(WF)
            })).catch((FF => {
              console.error("Failed to load first party discoverability for the studio leaderboard", FF)
            })), () => {
              FF = !0
            }
          }), [dF, WF]), AF
        }(lF, uF, vW),
        WW = null !== lF ? function(FF, WF, SF, CF, AF) {
          return FF.map(((FF, uF) => {
            var hF;
            const dF = CF + uF + 1;
            if ("customGame" === FF.type) {
              const WF = FF.preview;
              return {
                key: WF.schematicId,
                position: dF,
                thumbnail: (0, mW.jsx)(QF.c, {
                  game: WF
                }),
                name: WF.name,
                owner: FF.owner,
                category: WF.gameCategory,
                ccu: WF.ccu,
                favourites: WF.favourites,
                discoverability: (0, eF.o)(WF) ? WF : null,
                url: (0, LF.m)((0, bW.d)(WF.schematicId))
              }
            }
            const PF = FF.gameNameWithVariation,
              RF = (0, bW.g)(PF, !0);
            return {
              key: PF,
              position: dF,
              thumbnail: (0, mW.jsx)(NF.b, {
                game: PF
              }),
              name: (0, LF.l)(PF, AF),
              owner: null,
              category: (0, LF.d)(PF),
              ccu: (0, VF.d)(PF, WF),
              favourites: null,
              discoverability: null !== (hF = SF[RF]) && void 0 !== hF ? hF : null,
              url: (0, LF.m)(RF)
            }
          }))
        }(lF, cW, FW, (KF - 1) * xW, SF) : [],
        SW = !UF && null === wF,
        CW = !SW && !UF && 0 === WW.length,
        AW = null !== (WF = null === wF || void 0 === wF ? void 0 : wF.totalPages) && void 0 !== WF ? WF : 1;
      return (0, mW.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, mW.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, mW.jsx)("h1", {
            className: "StudioPageTitle",
            children: SF("studio:leaderboard")
          })
        }), (0, mW.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!pF && (0, mW.jsx)("div", {
            children: SF("studio:leaderboardBanner")
          }), pF && (0, mW.jsx)("div", {
            children: SF("studio:leaderboardDormantBanner")
          }), (0, mW.jsx)("div", {
            children: SF("studio:leaderboardMetricsBanner", {
              days: MF
            })
          })]
        }), vW && (0, mW.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: OF.map((FF => (0, mW.jsx)(gW.N, {
            active: sF === FF.scope,
            onClick: () => {
              jW({
                scope: FF.scope,
                category: HF,
                page: 1
              })
            },
            children: SF(FF.title)
          }, FF.scope)))
        }), (0, mW.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, mW.jsx)(gW.N, {
            active: null === HF,
            onClick: () => {
              jW({
                scope: sF,
                category: null,
                page: 1
              })
            },
            children: SF("studio:leaderboardAllCategories")
          }), hF.X.map((FF => (0, mW.jsx)(gW.N, {
            active: HF === FF,
            onClick: () => {
              jW({
                scope: sF,
                category: FF,
                page: 1
              })
            },
            children: (0, hF.gb)(FF)
          }, FF)))]
        }), SW && (0, mW.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, mW.jsx)(aW.c, {})
        }), UF && (0, mW.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: SF("studio:failedToLoadLeaderboard")
        }), CW && (0, mW.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: SF("studio:leaderboardEmpty")
        }), !SW && !UF && !CW && (0, mW.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, mW.jsx)(TF.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: SF("general:game")
            }, {
              key: "owner",
              header: SF("general:owner")
            }, ...null === HF ? [{
              key: "category",
              header: SF("general:category")
            }] : [], ...vW ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: SF("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: SF("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: SF("studio:leaderboardSessionsPerPlayer")
            }, ...pF ? [] : [{
              key: "ccu",
              header: SF("studio:metricCcu")
            }], {
              key: "favourites",
              header: SF("general:favourites")
            }],
            rows: WW,
            getRowKey: FF => FF.key,
            renderRow: FF => (0, mW.jsxs)("tr", {
              onClick: () => {
                AF(FF.url)
              },
              children: [(0, mW.jsx)(GF, {
                position: FF.position
              }), (0, mW.jsx)("td", {
                children: (0, mW.jsx)(NF.e, {
                  thumbnail: FF.thumbnail,
                  name: FF.name
                })
              }), (0, mW.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === FF.owner && "-", null !== FF.owner && (0, mW.jsx)(rW.d, {
                  playerSocialPreview: FF.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === HF && (0, mW.jsx)("td", {
                children: (0, hF.gb)(FF.category)
              }), vW && (0, mW.jsx)(IF, {
                discoverability: FF.discoverability
              }), (0, mW.jsx)(zW, {
                discoverability: FF.discoverability
              }), !pF && (0, mW.jsx)("td", {
                children: null !== FF.ccu ? (0, dF.R)(FF.ccu) : "-"
              }), (0, mW.jsx)("td", {
                children: null !== FF.favourites ? (0, dF.R)(FF.favourites) : "-"
              })]
            })
          })
        }), !UF && (0, mW.jsx)(tW.c, {
          className: "AnimFadeIn",
          page: KF,
          totalPages: AW,
          onSetPage: FF => {
            jW({
              scope: sF,
              category: HF,
              page: FF
            })
          }
        })]
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
  5390: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF
    });
    const CF = {
      1: SF(5394),
      2: SF(5399),
      3: SF(5403)
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
  3899: () => {},
  5394: FF => {
    FF.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  5399: FF => {
    FF.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  5403: FF => {
    FF.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);