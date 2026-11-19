export const id = 101;
export const ids = [101];
export const modules = {
  4398: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(1055),
      WT = IT(1310),
      XT = IT(3061),
      BT = IT(139),
      FT = IT(3105),
      ST = IT(3091),
      DT = IT(1083);

    function LT(TT) {
      let {
        game: oT
      } = TT;
      const IT = (0, BT.j)() ? "large" : "small",
        iT = (0, FT.g)(oT, IT),
        LT = (0, XT.g)(iT),
        xT = void 0 !== LT.blurhash;
      return (0, DT.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [LT.isLoading && !xT && (0, DT.jsx)(WT.d, {
          loaderType: "Secondary"
        }), !LT.failed && (null !== LT.src || xT) && (0, DT.jsx)("div", {
          className: zT()("SchematicImage", ST.g, {
            SchematicImageFadeIn: LT.fadeIn && !xT
          }),
          style: (0, ST.e)(LT),
          children: (0, DT.jsx)(ST.d, {
            image: LT
          })
        }), LT.failed && (0, DT.jsx)("div", {
          className: "SchematicImageError",
          children: (0, DT.jsx)(kT.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6008: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => HT
    });
    IT(4390);
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(306),
      XT = IT(1023),
      BT = IT(1193),
      FT = IT(998),
      ST = IT(1171),
      DT = IT(1451),
      LT = IT(3116),
      xT = IT(1110),
      cT = IT(4398),
      KT = IT(2303),
      MT = IT(1408),
      rT = IT(4079),
      AT = IT(4400),
      gT = IT(1310),
      hT = IT(1468),
      wT = IT(4074),
      mT = IT(2261),
      eT = IT(4404),
      RT = IT(5900),
      uT = IT(1499),
      vT = IT(1083);
    const ET = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      fT = 25,
      CT = "scope",
      jT = "category",
      JT = "customGames";
    const UT = 7,
      aT = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function YT(TT) {
      let {
        position: oT
      } = TT;
      const IT = RT.e[oT];
      return (0, vT.jsxs)("td", {
        className: kT()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== IT,
          [`StudioLeaderboardTopPosition${oT}`]: void 0 !== IT
        }),
        children: [void 0 !== IT && (0, vT.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: IT,
          alt: ""
        }), oT]
      })
    }

    function QT(TT) {
      let {
        discoverability: oT
      } = TT;
      const {
        playsPerDay: IT,
        avgPlaytimeMinutes: zT,
        retention: kT
      } = null === oT ? aT : (0, LT.i)(oT);
      return (0, vT.jsxs)(iT.Fragment, {
        children: [(0, vT.jsx)("td", {
          children: null !== IT ? (0, LT.c)(IT) : "-"
        }), (0, vT.jsx)("td", {
          children: null !== zT ? (0, LT.d)(zT) : "-"
        }), (0, vT.jsx)("td", {
          children: null !== kT ? (0, LT.e)(kT) : "-"
        })]
      })
    }

    function OT(TT) {
      let {
        discoverability: oT
      } = TT;
      return (0, vT.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === oT || void 0 === oT ? void 0 : oT.engagementScore) ? (0, BT.S)(Math.round(oT.engagementScore)) : "-"
      })
    }

    function HT() {
      var TT, oT;
      const {
        t: IT
      } = (0, ST.t)(), zT = (0, hT.useNavigatePreserveSearch)(), {
        userContext: kT,
        isUserContextUpdating: RT
      } = (0, xT.b)(), aT = (0, mT.q)(), [HT, nT] = (0, wT.o)(), qT = (ZT = HT.get(CT), ET.some((TT => TT.scope === ZT)) ? ZT : JT);
      var ZT;
      const lT = function(TT) {
          return WT.S.includes(TT) ? TT : null
        }(HT.get(jT)),
        sT = (0, wT.i)(HT.get(wT.e)),
        [tT, GT] = (0, iT.useState)(null),
        [pT, bT] = (0, iT.useState)(!1);

      function yT(TT) {
        nT((oT => {
          (0, wT.l)(oT, CT, TT.scope === JT ? null : TT.scope), (0, wT.l)(oT, jT, TT.category), (0, wT.n)(oT, TT.page)
        }))
      }
      const NT = !RT && kT.playerHasRank("developer"),
        PT = NT && "allGames" === qT,
        dT = NT && "dormantGames" === qT;
      (0, iT.useEffect)((() => {
        if (RT) return;
        let TT = !1;
        return GT(null), bT(!1), DT.e.getPublishedGamePreviews(kT, {
          searchQuery: null,
          pageNumber: sT,
          pageSize: fT,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== lT ? [lT] : [],
          upAndComing: !1,
          dormantGames: dT,
          sortByEngagementScore: !0,
          firstPartyGameNames: PT ? FT.b : void 0,
          includeOwners: !0
        }).then((oT => {
          TT || GT(oT)
        })).catch((oT => {
          console.error("Failed to load the studio leaderboard", oT), TT || bT(!0)
        })), () => {
          TT = !0
        }
      }), [RT, PT, dT, lT, sT, kT]);
      const VT = null !== (TT = null === tT || void 0 === tT ? void 0 : tT.results) && void 0 !== TT ? TT : null,
        To = function(TT, oT, IT) {
          const [zT, kT] = (0, iT.useState)({}), WT = IT ? (null !== TT && void 0 !== TT ? TT : []).flatMap((TT => "firstPartyGame" === TT.type ? [(0, XT.g)(TT.gameNameWithVariation, !0)] : [])).join(",") : "", BT = (0, iT.useMemo)((() => "" === WT ? [] : WT.split(",")), [WT]);
          return (0, iT.useEffect)((() => {
            if (0 === BT.length) return void kT({});
            let TT = !1;
            return DT.e.getGamesByAnalyticsIds(oT, BT).then((oT => {
              TT || kT(oT)
            })).catch((TT => {
              console.error("Failed to load first party discoverability for the studio leaderboard", TT)
            })), () => {
              TT = !0
            }
          }), [BT, oT]), zT
        }(VT, kT, NT),
        oo = null !== VT ? function(TT, oT, IT, iT, zT) {
          return TT.map(((TT, kT) => {
            var WT;
            const BT = iT + kT + 1;
            if ("customGame" === TT.type) {
              const oT = TT.preview;
              return {
                key: oT.schematicId,
                position: BT,
                thumbnail: (0, vT.jsx)(cT.e, {
                  game: oT
                }),
                name: oT.name,
                owner: TT.owner,
                category: oT.gameCategory,
                ccu: oT.ccu,
                favourites: oT.favourites,
                discoverability: (0, LT.k)(oT) ? oT : null,
                url: (0, uT.k)((0, XT.c)(oT.schematicId))
              }
            }
            const FT = TT.gameNameWithVariation,
              ST = (0, XT.g)(FT, !0);
            return {
              key: FT,
              position: BT,
              thumbnail: (0, vT.jsx)(eT.e, {
                game: FT
              }),
              name: (0, uT.i)(FT, zT),
              owner: null,
              category: (0, uT.b)(FT),
              ccu: (0, mT.d)(FT, oT),
              favourites: null,
              discoverability: null !== (WT = IT[ST]) && void 0 !== WT ? WT : null,
              url: (0, uT.k)(ST)
            }
          }))
        }(VT, aT, To, (sT - 1) * fT, IT) : [],
        Io = !pT && null === tT,
        io = !Io && !pT && 0 === oo.length,
        zo = null !== (oT = null === tT || void 0 === tT ? void 0 : tT.totalPages) && void 0 !== oT ? oT : 1;
      return (0, vT.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, vT.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, vT.jsx)("h1", {
            className: "StudioPageTitle",
            children: IT("studio:leaderboard")
          })
        }), (0, vT.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!dT && (0, vT.jsx)("div", {
            children: IT("studio:leaderboardBanner")
          }), dT && (0, vT.jsx)("div", {
            children: IT("studio:leaderboardDormantBanner")
          }), (0, vT.jsx)("div", {
            children: IT("studio:leaderboardMetricsBanner", {
              days: UT
            })
          })]
        }), NT && (0, vT.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: ET.map((TT => (0, vT.jsx)(MT.J, {
            active: qT === TT.scope,
            onClick: () => {
              yT({
                scope: TT.scope,
                category: lT,
                page: 1
              })
            },
            children: IT(TT.title)
          }, TT.scope)))
        }), (0, vT.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, vT.jsx)(MT.J, {
            active: null === lT,
            onClick: () => {
              yT({
                scope: qT,
                category: null,
                page: 1
              })
            },
            children: IT("studio:leaderboardAllCategories")
          }), WT.S.map((TT => (0, vT.jsx)(MT.J, {
            active: lT === TT,
            onClick: () => {
              yT({
                scope: qT,
                category: TT,
                page: 1
              })
            },
            children: (0, WT.eb)(TT)
          }, TT)))]
        }), Io && (0, vT.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, vT.jsx)(gT.d, {})
        }), pT && (0, vT.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: IT("studio:failedToLoadLeaderboard")
        }), io && (0, vT.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: IT("studio:leaderboardEmpty")
        }), !Io && !pT && !io && (0, vT.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, vT.jsx)(AT.b, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: IT("general:game")
            }, {
              key: "owner",
              header: IT("general:owner")
            }, ...null === lT ? [{
              key: "category",
              header: IT("general:category")
            }] : [], ...NT ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: IT("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: IT("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: IT("studio:leaderboardSessionsPerPlayer")
            }, ...dT ? [] : [{
              key: "ccu",
              header: IT("studio:metricCcu")
            }], {
              key: "favourites",
              header: IT("general:favourites")
            }],
            rows: oo,
            getRowKey: TT => TT.key,
            renderRow: TT => (0, vT.jsxs)("tr", {
              onClick: () => {
                zT(TT.url)
              },
              children: [(0, vT.jsx)(YT, {
                position: TT.position
              }), (0, vT.jsx)("td", {
                children: (0, vT.jsx)(eT.h, {
                  thumbnail: TT.thumbnail,
                  name: TT.name
                })
              }), (0, vT.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === TT.owner && "-", null !== TT.owner && (0, vT.jsx)(KT.g, {
                  playerSocialPreview: TT.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === lT && (0, vT.jsx)("td", {
                children: (0, WT.eb)(TT.category)
              }), NT && (0, vT.jsx)(OT, {
                discoverability: TT.discoverability
              }), (0, vT.jsx)(QT, {
                discoverability: TT.discoverability
              }), !dT && (0, vT.jsx)("td", {
                children: null !== TT.ccu ? (0, BT.S)(TT.ccu) : "-"
              }), (0, vT.jsx)("td", {
                children: null !== TT.favourites ? (0, BT.S)(TT.favourites) : "-"
              })]
            })
          })
        }), !pT && (0, vT.jsx)(rT.c, {
          className: "AnimFadeIn",
          page: sT,
          totalPages: zo,
          onSetPage: TT => {
            yT({
              scope: qT,
              category: lT,
              page: TT
            })
          }
        })]
      })
    }
  },
  4404: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT,
      h: () => kT
    });
    var iT = IT(1499),
      zT = IT(1083);

    function kT(TT) {
      let {
        thumbnail: oT,
        name: IT
      } = TT;
      return (0, zT.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, zT.jsx)("div", {
          className: "StudioTableThumbnail",
          children: oT
        }), (0, zT.jsx)("span", {
          className: "StudioTableGameName",
          children: IT
        })]
      })
    }

    function WT(TT) {
      let {
        game: oT
      } = TT;
      return (0, zT.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, iT.f)(oT),
        alt: ""
      })
    }
  },
  5900: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT
    });
    const iT = {
      1: IT(5903),
      2: IT(5911),
      3: IT(5920)
    }
  },
  4400: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => XT
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(1083);

    function XT(TT) {
      let {
        columns: oT,
        rows: IT,
        getRowKey: zT,
        renderRow: XT,
        className: BT
      } = TT;
      return (0, WT.jsxs)("table", {
        className: kT()("Table", BT),
        children: [(0, WT.jsx)("thead", {
          children: (0, WT.jsx)("tr", {
            children: oT.map((TT => (0, WT.jsx)("th", {
              children: TT.header
            }, TT.key)))
          })
        }), (0, WT.jsx)("tbody", {
          children: IT.map((TT => (0, WT.jsx)(iT.Fragment, {
            children: XT(TT)
          }, zT(TT))))
        })]
      })
    }
  },
  4390: () => {},
  5903: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  5911: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  5920: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);