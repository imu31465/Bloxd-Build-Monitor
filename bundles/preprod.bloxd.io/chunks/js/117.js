export const id = 117;
export const ids = [117];
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
  7511: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => VW
    });
    OW(5662);
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(327),
      LW = OW(1065),
      cW = OW(1217),
      wW = OW(1049),
      tW = OW(1172),
      ZW = OW(1584),
      xW = OW(4792),
      lW = OW(1107),
      AW = OW(5668),
      bW = OW(3610),
      jW = OW(1532),
      UW = OW(5271),
      kW = OW(5673),
      sW = OW(1383),
      MW = OW(1605),
      KW = OW(5268),
      SW = OW(3488),
      YW = OW(5676),
      yW = OW(7392),
      TW = OW(1638),
      JW = OW(1283);
    const hW = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      HW = 25,
      nW = "scope",
      uW = "category",
      oW = "customGames";
    const dW = 7,
      eW = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function vW(WW) {
      let {
        position: iW
      } = WW;
      const OW = yW.e[iW];
      return (0, JW.jsxs)("td", {
        className: NW()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== OW,
          [`StudioLeaderboardTopPosition${iW}`]: void 0 !== OW
        }),
        children: [void 0 !== OW && (0, JW.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: OW,
          alt: ""
        }), iW]
      })
    }

    function gW(WW) {
      let {
        discoverability: iW
      } = WW;
      const {
        playsPerDay: OW,
        avgPlaytimeMinutes: EW,
        retention: NW
      } = null === iW ? eW : (0, xW.m)(iW);
      return (0, JW.jsxs)(mW.Fragment, {
        children: [(0, JW.jsx)("td", {
          children: null !== OW ? (0, xW.d)(OW) : "-"
        }), (0, JW.jsx)("td", {
          children: null !== EW ? (0, xW.h)(EW) : "-"
        }), (0, JW.jsx)("td", {
          children: null !== NW ? (0, xW.k)(NW) : "-"
        })]
      })
    }

    function DW(WW) {
      let {
        discoverability: iW
      } = WW;
      return (0, JW.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === iW || void 0 === iW ? void 0 : iW.engagementScore) ? (0, cW.V)(Math.round(iW.engagementScore)) : "-"
      })
    }

    function VW() {
      var WW, iW;
      const {
        t: OW
      } = (0, tW.B)(), EW = (0, MW.useNavigatePreserveSearch)(), {
        userContext: NW,
        isUserContextUpdating: yW
      } = (0, lW.e)(), eW = (0, SW.m)(), [VW, pW] = (0, KW.q)(), fW = (CW = VW.get(nW), hW.some((WW => WW.scope === CW)) ? CW : oW);
      var CW;
      const XW = function(WW) {
          return PW.T.includes(WW) ? WW : null
        }(VW.get(uW)),
        BW = (0, KW.f)(VW.get(KW.b)),
        [qW, RW] = (0, mW.useState)(null),
        [GW, IW] = (0, mW.useState)(!1);

      function aW(WW) {
        pW((iW => {
          (0, KW.j)(iW, nW, WW.scope === oW ? null : WW.scope), (0, KW.j)(iW, uW, WW.category), (0, KW.m)(iW, WW.page)
        }))
      }
      const rW = !yW && NW.playerHasRank("developer"),
        zW = rW && "allGames" === fW,
        FW = rW && "dormantGames" === fW;
      (0, mW.useEffect)((() => {
        if (yW) return;
        let WW = !1;
        return RW(null), IW(!1), ZW.e.getPublishedGamePreviews(NW, {
          searchQuery: null,
          pageNumber: BW,
          pageSize: HW,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== XW ? [XW] : [],
          upAndComing: !1,
          dormantGames: FW,
          sortByEngagementScore: !0,
          firstPartyGameNames: zW ? wW.e : void 0,
          includeOwners: !0
        }).then((iW => {
          WW || RW(iW)
        })).catch((iW => {
          console.error("Failed to load the studio leaderboard", iW), WW || IW(!0)
        })), () => {
          WW = !0
        }
      }), [yW, zW, FW, XW, BW, NW]);
      const QW = null !== (WW = null === qW || void 0 === qW ? void 0 : qW.results) && void 0 !== WW ? WW : null,
        Wi = function(WW, iW, OW) {
          const [EW, NW] = (0, mW.useState)({}), PW = OW ? (null !== WW && void 0 !== WW ? WW : []).flatMap((WW => "firstPartyGame" === WW.type ? [(0, LW.e)(WW.gameNameWithVariation, !0)] : [])).join(",") : "", cW = (0, mW.useMemo)((() => "" === PW ? [] : PW.split(",")), [PW]);
          return (0, mW.useEffect)((() => {
            if (0 === cW.length) return void NW({});
            let WW = !1;
            return ZW.e.getGamesByAnalyticsIds(iW, cW).then((iW => {
              WW || NW(iW)
            })).catch((WW => {
              console.error("Failed to load first party discoverability for the studio leaderboard", WW)
            })), () => {
              WW = !0
            }
          }), [cW, iW]), EW
        }(QW, NW, rW),
        ii = null !== QW ? function(WW, iW, OW, mW, EW) {
          return WW.map(((WW, NW) => {
            var PW;
            const cW = mW + NW + 1;
            if ("customGame" === WW.type) {
              const iW = WW.preview;
              return {
                key: iW.schematicId,
                position: cW,
                thumbnail: (0, JW.jsx)(AW.b, {
                  game: iW
                }),
                name: iW.name,
                owner: WW.owner,
                category: iW.gameCategory,
                ccu: iW.ccu,
                favourites: iW.favourites,
                discoverability: (0, xW.n)(iW) ? iW : null,
                url: (0, TW.v)((0, LW.d)(iW.schematicId))
              }
            }
            const wW = WW.gameNameWithVariation,
              tW = (0, LW.e)(wW, !0);
            return {
              key: wW,
              position: cW,
              thumbnail: (0, JW.jsx)(YW.c, {
                game: wW
              }),
              name: (0, TW.s)(wW, EW),
              owner: null,
              category: (0, TW.j)(wW),
              ccu: (0, SW.e)(wW, iW),
              favourites: null,
              discoverability: null !== (PW = OW[tW]) && void 0 !== PW ? PW : null,
              url: (0, TW.v)(tW)
            }
          }))
        }(QW, eW, Wi, (BW - 1) * HW, OW) : [],
        Oi = !GW && null === qW,
        mi = !Oi && !GW && 0 === ii.length,
        Ei = null !== (iW = null === qW || void 0 === qW ? void 0 : qW.totalPages) && void 0 !== iW ? iW : 1;
      return (0, JW.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, JW.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, JW.jsx)("h1", {
            className: "StudioPageTitle",
            children: OW("studio:leaderboard")
          })
        }), (0, JW.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!FW && (0, JW.jsx)("div", {
            children: OW("studio:leaderboardBanner")
          }), FW && (0, JW.jsx)("div", {
            children: OW("studio:leaderboardDormantBanner")
          }), (0, JW.jsx)("div", {
            children: OW("studio:leaderboardMetricsBanner", {
              days: dW
            })
          })]
        }), rW && (0, JW.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: hW.map((WW => (0, JW.jsx)(jW.Z, {
            active: fW === WW.scope,
            onClick: () => {
              aW({
                scope: WW.scope,
                category: XW,
                page: 1
              })
            },
            children: OW(WW.title)
          }, WW.scope)))
        }), (0, JW.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, JW.jsx)(jW.Z, {
            active: null === XW,
            onClick: () => {
              aW({
                scope: fW,
                category: null,
                page: 1
              })
            },
            children: OW("studio:leaderboardAllCategories")
          }), PW.T.map((WW => (0, JW.jsx)(jW.Z, {
            active: XW === WW,
            onClick: () => {
              aW({
                scope: fW,
                category: WW,
                page: 1
              })
            },
            children: (0, PW.gb)(WW)
          }, WW)))]
        }), Oi && (0, JW.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, JW.jsx)(sW.d, {})
        }), GW && (0, JW.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: OW("studio:failedToLoadLeaderboard")
        }), mi && (0, JW.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: OW("studio:leaderboardEmpty")
        }), !Oi && !GW && !mi && (0, JW.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, JW.jsx)(kW.b, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: OW("general:game")
            }, {
              key: "owner",
              header: OW("general:owner")
            }, ...null === XW ? [{
              key: "category",
              header: OW("general:category")
            }] : [], ...rW ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: OW("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: OW("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: OW("studio:leaderboardSessionsPerPlayer")
            }, ...FW ? [] : [{
              key: "ccu",
              header: OW("studio:metricCcu")
            }], {
              key: "favourites",
              header: OW("general:favourites")
            }],
            rows: ii,
            getRowKey: WW => WW.key,
            renderRow: WW => (0, JW.jsxs)("tr", {
              onClick: () => {
                EW(WW.url)
              },
              children: [(0, JW.jsx)(vW, {
                position: WW.position
              }), (0, JW.jsx)("td", {
                children: (0, JW.jsx)(YW.e, {
                  thumbnail: WW.thumbnail,
                  name: WW.name
                })
              }), (0, JW.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === WW.owner && "-", null !== WW.owner && (0, JW.jsx)(bW.g, {
                  playerSocialPreview: WW.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === XW && (0, JW.jsx)("td", {
                children: (0, PW.gb)(WW.category)
              }), rW && (0, JW.jsx)(DW, {
                discoverability: WW.discoverability
              }), (0, JW.jsx)(gW, {
                discoverability: WW.discoverability
              }), !FW && (0, JW.jsx)("td", {
                children: null !== WW.ccu ? (0, cW.V)(WW.ccu) : "-"
              }), (0, JW.jsx)("td", {
                children: null !== WW.favourites ? (0, cW.V)(WW.favourites) : "-"
              })]
            })
          })
        }), !GW && (0, JW.jsx)(UW.c, {
          className: "AnimFadeIn",
          page: BW,
          totalPages: Ei,
          onSetPage: WW => {
            aW({
              scope: fW,
              category: XW,
              page: WW
            })
          }
        })]
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
  7392: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    const mW = {
      1: OW(7401),
      2: OW(7406),
      3: OW(7411)
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
  5662: () => {},
  7401: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  7406: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  7411: WW => {
    WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);