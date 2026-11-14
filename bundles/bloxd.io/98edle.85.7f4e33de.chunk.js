export const id = 85;
export const ids = [85];
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
  5514: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => VW
    });
    MW(3885);
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(232),
      bR = MW(874),
      yR = MW(1053),
      NW = MW(851),
      eW = MW(1027),
      BW = MW(1314),
      tR = MW(2646),
      TW = MW(969),
      gR = MW(3893),
      iR = MW(2011),
      YW = MW(1255),
      JW = MW(3604),
      PW = MW(3901),
      IW = MW(1157),
      oW = MW(1330),
      lW = MW(3600),
      FW = MW(1979),
      fW = MW(3904),
      QW = MW(5408),
      rR = MW(1363),
      cR = MW(940);
    const XW = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      jR = 25,
      kR = "scope",
      aR = "category",
      sW = "customGames";
    const dW = 7,
      pW = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function hW(WW) {
      let {
        position: RW
      } = WW;
      const MW = QW.e[RW];
      return (0, cR.jsxs)("td", {
        className: zR()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== MW,
          [`StudioLeaderboardTopPosition${RW}`]: void 0 !== MW
        }),
        children: [void 0 !== MW && (0, cR.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: MW,
          alt: ""
        }), RW]
      })
    }

    function UW(WW) {
      let {
        discoverability: RW
      } = WW;
      const {
        playsPerDay: MW,
        avgPlaytimeMinutes: CW,
        retention: zR
      } = null === RW ? pW : (0, tR.k)(RW);
      return (0, cR.jsxs)(wW.Fragment, {
        children: [(0, cR.jsx)("td", {
          children: null !== MW ? (0, tR.d)(MW) : "-"
        }), (0, cR.jsx)("td", {
          children: null !== CW ? (0, tR.g)(CW) : "-"
        }), (0, cR.jsx)("td", {
          children: null !== zR ? (0, tR.h)(zR) : "-"
        })]
      })
    }

    function EW(WW) {
      let {
        discoverability: RW
      } = WW;
      return (0, cR.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === RW || void 0 === RW ? void 0 : RW.engagementScore) ? (0, yR.I)(Math.round(RW.engagementScore)) : "-"
      })
    }

    function VW() {
      var WW, RW;
      const {
        t: MW
      } = (0, eW.C)(), CW = (0, oW.useNavigatePreserveSearch)(), {
        userContext: zR,
        isUserContextUpdating: QW
      } = (0, TW.c)(), pW = (0, FW.j)(), [VW, mR] = (0, lW.l)(), xR = (vR = VW.get(kR), XW.some((WW => WW.scope === vR)) ? vR : sW);
      var vR;
      const KW = function(WW) {
          return AW.T.includes(WW) ? WW : null
        }(VW.get(aR)),
        uW = (0, lW.f)(VW.get(lW.b)),
        [OW, nW] = (0, wW.useState)(null),
        [GW, LW] = (0, wW.useState)(!1);

      function HW(WW) {
        mR((RW => {
          (0, lW.i)(RW, kR, WW.scope === sW ? null : WW.scope), (0, lW.i)(RW, aR, WW.category), (0, lW.k)(RW, WW.page)
        }))
      }
      const DW = !QW && zR.playerHasRank("developer"),
        qR = DW && "allGames" === xR,
        ZW = DW && "dormantGames" === xR;
      (0, wW.useEffect)((() => {
        if (QW) return;
        let WW = !1;
        return nW(null), LW(!1), BW.c.getPublishedGamePreviews(zR, {
          searchQuery: null,
          pageNumber: uW,
          pageSize: jR,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== KW ? [KW] : [],
          upAndComing: !1,
          dormantGames: ZW,
          sortByEngagementScore: !0,
          firstPartyGameNames: qR ? NW.d : void 0,
          includeOwners: !0
        }).then((RW => {
          WW || nW(RW)
        })).catch((RW => {
          console.error("Failed to load the studio leaderboard", RW), WW || LW(!0)
        })), () => {
          WW = !0
        }
      }), [QW, qR, ZW, KW, uW, zR]);
      const SW = null !== (WW = null === OW || void 0 === OW ? void 0 : OW.results) && void 0 !== WW ? WW : null,
        WR = function(WW, RW, MW) {
          const [CW, zR] = (0, wW.useState)({}), AW = MW ? (null !== WW && void 0 !== WW ? WW : []).flatMap((WW => "firstPartyGame" === WW.type ? [(0, bR.f)(WW.gameNameWithVariation, !0)] : [])).join(",") : "", yR = (0, wW.useMemo)((() => "" === AW ? [] : AW.split(",")), [AW]);
          return (0, wW.useEffect)((() => {
            if (0 === yR.length) return void zR({});
            let WW = !1;
            return BW.c.getGamesByAnalyticsIds(RW, yR).then((RW => {
              WW || zR(RW)
            })).catch((WW => {
              console.error("Failed to load first party discoverability for the studio leaderboard", WW)
            })), () => {
              WW = !0
            }
          }), [yR, RW]), CW
        }(SW, zR, DW),
        RR = null !== SW ? function(WW, RW, MW, wW, CW) {
          return WW.map(((WW, zR) => {
            var AW;
            const yR = wW + zR + 1;
            if ("customGame" === WW.type) {
              const RW = WW.preview;
              return {
                key: RW.schematicId,
                position: yR,
                thumbnail: (0, cR.jsx)(gR.e, {
                  game: RW
                }),
                name: RW.name,
                owner: WW.owner,
                category: RW.gameCategory,
                ccu: RW.ccu,
                favourites: RW.favourites,
                discoverability: (0, tR.n)(RW) ? RW : null,
                url: (0, rR.m)((0, bR.c)(RW.schematicId))
              }
            }
            const NW = WW.gameNameWithVariation,
              eW = (0, bR.f)(NW, !0);
            return {
              key: NW,
              position: yR,
              thumbnail: (0, cR.jsx)(fW.b, {
                game: NW
              }),
              name: (0, rR.k)(NW, CW),
              owner: null,
              category: (0, rR.c)(NW),
              ccu: (0, FW.c)(NW, RW),
              favourites: null,
              discoverability: null !== (AW = MW[eW]) && void 0 !== AW ? AW : null,
              url: (0, rR.m)(eW)
            }
          }))
        }(SW, pW, WR, (uW - 1) * jR, MW) : [],
        MR = !GW && null === OW,
        wR = !MR && !GW && 0 === RR.length,
        CR = null !== (RW = null === OW || void 0 === OW ? void 0 : OW.totalPages) && void 0 !== RW ? RW : 1;
      return (0, cR.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, cR.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, cR.jsx)("h1", {
            className: "StudioPageTitle",
            children: MW("studio:leaderboard")
          })
        }), (0, cR.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!ZW && (0, cR.jsx)("div", {
            children: MW("studio:leaderboardBanner")
          }), ZW && (0, cR.jsx)("div", {
            children: MW("studio:leaderboardDormantBanner")
          }), (0, cR.jsx)("div", {
            children: MW("studio:leaderboardMetricsBanner", {
              days: dW
            })
          })]
        }), DW && (0, cR.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: XW.map((WW => (0, cR.jsx)(YW.O, {
            active: xR === WW.scope,
            onClick: () => {
              HW({
                scope: WW.scope,
                category: KW,
                page: 1
              })
            },
            children: MW(WW.title)
          }, WW.scope)))
        }), (0, cR.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, cR.jsx)(YW.O, {
            active: null === KW,
            onClick: () => {
              HW({
                scope: xR,
                category: null,
                page: 1
              })
            },
            children: MW("studio:leaderboardAllCategories")
          }), AW.T.map((WW => (0, cR.jsx)(YW.O, {
            active: KW === WW,
            onClick: () => {
              HW({
                scope: xR,
                category: WW,
                page: 1
              })
            },
            children: (0, AW.fb)(WW)
          }, WW)))]
        }), MR && (0, cR.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, cR.jsx)(IW.d, {})
        }), GW && (0, cR.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: MW("studio:failedToLoadLeaderboard")
        }), wR && (0, cR.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: MW("studio:leaderboardEmpty")
        }), !MR && !GW && !wR && (0, cR.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, cR.jsx)(PW.d, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: MW("general:game")
            }, {
              key: "owner",
              header: MW("general:owner")
            }, ...null === KW ? [{
              key: "category",
              header: MW("general:category")
            }] : [], ...DW ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: MW("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: MW("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: MW("studio:leaderboardSessionsPerPlayer")
            }, ...ZW ? [] : [{
              key: "ccu",
              header: MW("studio:metricCcu")
            }], {
              key: "favourites",
              header: MW("general:favourites")
            }],
            rows: RR,
            getRowKey: WW => WW.key,
            renderRow: WW => (0, cR.jsxs)("tr", {
              onClick: () => {
                CW(WW.url)
              },
              children: [(0, cR.jsx)(hW, {
                position: WW.position
              }), (0, cR.jsx)("td", {
                children: (0, cR.jsx)(fW.c, {
                  thumbnail: WW.thumbnail,
                  name: WW.name
                })
              }), (0, cR.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === WW.owner && "-", null !== WW.owner && (0, cR.jsx)(iR.e, {
                  playerSocialPreview: WW.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === KW && (0, cR.jsx)("td", {
                children: (0, AW.fb)(WW.category)
              }), DW && (0, cR.jsx)(EW, {
                discoverability: WW.discoverability
              }), (0, cR.jsx)(UW, {
                discoverability: WW.discoverability
              }), !ZW && (0, cR.jsx)("td", {
                children: null !== WW.ccu ? (0, yR.I)(WW.ccu) : "-"
              }), (0, cR.jsx)("td", {
                children: null !== WW.favourites ? (0, yR.I)(WW.favourites) : "-"
              })]
            })
          })
        }), !GW && (0, cR.jsx)(JW.b, {
          className: "AnimFadeIn",
          page: uW,
          totalPages: CR,
          onSetPage: WW => {
            HW({
              scope: xR,
              category: KW,
              page: WW
            })
          }
        })]
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
  5408: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW
    });
    const wW = {
      1: MW(5410),
      2: MW(5418),
      3: MW(5422)
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
  3885: () => {},
  5410: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  5418: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  5422: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);