export const id = 104;
export const ids = [104];
export const modules = {
  5013: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => LT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(1135),
      gT = mT(1446),
      nT = mT(3599),
      HT = mT(133),
      kT = mT(3644),
      jT = mT(3627),
      lT = mT(1188);

    function LT(TT) {
      let {
        game: UT
      } = TT;
      const mT = (0, HT.is99NightsCrazyGamesBundle)() ? "large" : "small",
        WT = (0, kT.e)(UT, mT),
        LT = (0, nT.e)(WT),
        pT = void 0 !== LT.blurhash;
      return (0, lT.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [LT.isLoading && !pT && (0, lT.jsx)(gT.c, {
          loaderType: "Secondary"
        }), !LT.failed && (null !== LT.src || pT) && (0, lT.jsx)("div", {
          className: zT()("SchematicImage", jT.h, {
            SchematicImageFadeIn: LT.fadeIn && !pT
          }),
          style: (0, jT.e)(LT),
          children: (0, lT.jsx)(jT.c, {
            image: LT
          })
        }), LT.failed && (0, lT.jsx)("div", {
          className: "SchematicImageError",
          children: (0, lT.jsx)(MT.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6573: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => PT
    });
    mT(5009);
    var WT = mT(63),
      zT = mT(1126),
      MT = mT.n(zT),
      gT = mT(351),
      nT = mT(1099),
      HT = mT(1321),
      kT = mT(1087),
      jT = mT(1288),
      lT = mT(1613),
      LT = mT(3656),
      pT = mT(1225),
      BT = mT(5013),
      ZT = mT(2713),
      cT = mT(1569),
      vT = mT(4667),
      fT = mT(5017),
      qT = mT(1446),
      iT = mT(1633),
      bT = mT(4660),
      OT = mT(2641),
      eT = mT(5021),
      YT = mT(6482),
      JT = mT(1658),
      xT = mT(1188);
    const dT = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      wT = 25,
      tT = "scope",
      aT = "category",
      yT = "customGames";
    const XT = 7,
      IT = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function QT(TT) {
      let {
        position: UT
      } = TT;
      const mT = YT.c[UT];
      return (0, xT.jsxs)("td", {
        className: MT()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== mT,
          [`StudioLeaderboardTopPosition${UT}`]: void 0 !== mT
        }),
        children: [void 0 !== mT && (0, xT.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: mT,
          alt: ""
        }), UT]
      })
    }

    function sT(TT) {
      let {
        discoverability: UT
      } = TT;
      const {
        playsPerDay: mT,
        avgPlaytimeMinutes: zT,
        retention: MT
      } = null === UT ? IT : (0, LT.l)(UT);
      return (0, xT.jsxs)(WT.Fragment, {
        children: [(0, xT.jsx)("td", {
          children: null !== mT ? (0, LT.c)(mT) : "-"
        }), (0, xT.jsx)("td", {
          children: null !== zT ? (0, LT.g)(zT) : "-"
        }), (0, xT.jsx)("td", {
          children: null !== MT ? (0, LT.k)(MT) : "-"
        })]
      })
    }

    function FT(TT) {
      let {
        discoverability: UT
      } = TT;
      return (0, xT.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === UT || void 0 === UT ? void 0 : UT.engagementScore) ? (0, HT.V)(Math.round(UT.engagementScore)) : "-"
      })
    }

    function PT() {
      var TT, UT;
      const {
        t: mT
      } = (0, jT.z)(), zT = (0, iT.useNavigatePreserveSearch)(), {
        userContext: MT,
        isUserContextUpdating: YT
      } = (0, pT.d)(), IT = (0, OT.m)(), [PT, VT] = (0, bT.l)(), uT = (CT = PT.get(tT), dT.some((TT => TT.scope === CT)) ? CT : yT);
      var CT;
      const rT = function(TT) {
          return gT.O.includes(TT) ? TT : null
        }(PT.get(aT)),
        KT = (0, bT.f)(PT.get(bT.d)),
        [ST, GT] = (0, WT.useState)(null),
        [NT, ET] = (0, WT.useState)(!1);

      function hT(TT) {
        VT((UT => {
          (0, bT.j)(UT, tT, TT.scope === yT ? null : TT.scope), (0, bT.j)(UT, aT, TT.category), (0, bT.k)(UT, TT.page)
        }))
      }
      const DT = !YT && MT.playerHasRank("developer"),
        oT = DT && "allGames" === uT,
        AT = DT && "dormantGames" === uT;
      (0, WT.useEffect)((() => {
        if (YT) return;
        let TT = !1;
        return GT(null), ET(!1), lT.b.getPublishedGamePreviews(MT, {
          searchQuery: null,
          pageNumber: KT,
          pageSize: wT,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== rT ? [rT] : [],
          upAndComing: !1,
          dormantGames: AT,
          sortByEngagementScore: !0,
          firstPartyGameNames: oT ? kT.b : void 0,
          includeOwners: !0
        }).then((UT => {
          TT || GT(UT)
        })).catch((UT => {
          console.error("Failed to load the studio leaderboard", UT), TT || ET(!0)
        })), () => {
          TT = !0
        }
      }), [YT, oT, AT, rT, KT, MT]);
      const RT = null !== (TT = null === ST || void 0 === ST ? void 0 : ST.results) && void 0 !== TT ? TT : null,
        TU = function(TT, UT, mT) {
          const [zT, MT] = (0, WT.useState)({}), gT = mT ? (null !== TT && void 0 !== TT ? TT : []).flatMap((TT => "firstPartyGame" === TT.type ? [(0, nT.e)(TT.gameNameWithVariation, !0)] : [])).join(",") : "", HT = (0, WT.useMemo)((() => "" === gT ? [] : gT.split(",")), [gT]);
          return (0, WT.useEffect)((() => {
            if (0 === HT.length) return void MT({});
            let TT = !1;
            return lT.b.getGamesByAnalyticsIds(UT, HT).then((UT => {
              TT || MT(UT)
            })).catch((TT => {
              console.error("Failed to load first party discoverability for the studio leaderboard", TT)
            })), () => {
              TT = !0
            }
          }), [HT, UT]), zT
        }(RT, MT, DT),
        UU = null !== RT ? function(TT, UT, mT, WT, zT) {
          return TT.map(((TT, MT) => {
            var gT;
            const HT = WT + MT + 1;
            if ("customGame" === TT.type) {
              const UT = TT.preview;
              return {
                key: UT.schematicId,
                position: HT,
                thumbnail: (0, xT.jsx)(BT.c, {
                  game: UT
                }),
                name: UT.name,
                owner: TT.owner,
                category: UT.gameCategory,
                ccu: UT.ccu,
                favourites: UT.favourites,
                discoverability: (0, LT.n)(UT) ? UT : null,
                url: (0, JT.k)((0, nT.d)(UT.schematicId))
              }
            }
            const kT = TT.gameNameWithVariation,
              jT = (0, nT.e)(kT, !0);
            return {
              key: kT,
              position: HT,
              thumbnail: (0, xT.jsx)(eT.d, {
                game: kT
              }),
              name: (0, JT.h)(kT, zT),
              owner: null,
              category: (0, JT.d)(kT),
              ccu: (0, OT.c)(kT, UT),
              favourites: null,
              discoverability: null !== (gT = mT[jT]) && void 0 !== gT ? gT : null,
              url: (0, JT.k)(jT)
            }
          }))
        }(RT, IT, TU, (KT - 1) * wT, mT) : [],
        mU = !NT && null === ST,
        WU = !mU && !NT && 0 === UU.length,
        zU = null !== (UT = null === ST || void 0 === ST ? void 0 : ST.totalPages) && void 0 !== UT ? UT : 1;
      return (0, xT.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, xT.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, xT.jsx)("h1", {
            className: "StudioPageTitle",
            children: mT("studio:leaderboard")
          })
        }), (0, xT.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!AT && (0, xT.jsx)("div", {
            children: mT("studio:leaderboardBanner")
          }), AT && (0, xT.jsx)("div", {
            children: mT("studio:leaderboardDormantBanner")
          }), (0, xT.jsx)("div", {
            children: mT("studio:leaderboardMetricsBanner", {
              days: XT
            })
          })]
        }), DT && (0, xT.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: dT.map((TT => (0, xT.jsx)(cT.L, {
            active: uT === TT.scope,
            onClick: () => {
              hT({
                scope: TT.scope,
                category: rT,
                page: 1
              })
            },
            children: mT(TT.title)
          }, TT.scope)))
        }), (0, xT.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, xT.jsx)(cT.L, {
            active: null === rT,
            onClick: () => {
              hT({
                scope: uT,
                category: null,
                page: 1
              })
            },
            children: mT("studio:leaderboardAllCategories")
          }), gT.O.map((TT => (0, xT.jsx)(cT.L, {
            active: rT === TT,
            onClick: () => {
              hT({
                scope: uT,
                category: TT,
                page: 1
              })
            },
            children: (0, gT.Z)(TT)
          }, TT)))]
        }), mU && (0, xT.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, xT.jsx)(qT.c, {})
        }), NT && (0, xT.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: mT("studio:failedToLoadLeaderboard")
        }), WU && (0, xT.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: mT("studio:leaderboardEmpty")
        }), !mU && !NT && !WU && (0, xT.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, xT.jsx)(fT.b, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: mT("general:game")
            }, {
              key: "owner",
              header: mT("general:owner")
            }, ...null === rT ? [{
              key: "category",
              header: mT("general:category")
            }] : [], ...DT ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: mT("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: mT("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: mT("studio:leaderboardSessionsPerPlayer")
            }, ...AT ? [] : [{
              key: "ccu",
              header: mT("studio:metricCcu")
            }], {
              key: "favourites",
              header: mT("general:favourites")
            }],
            rows: UU,
            getRowKey: TT => TT.key,
            renderRow: TT => (0, xT.jsxs)("tr", {
              onClick: () => {
                zT(TT.url)
              },
              children: [(0, xT.jsx)(QT, {
                position: TT.position
              }), (0, xT.jsx)("td", {
                children: (0, xT.jsx)(eT.f, {
                  thumbnail: TT.thumbnail,
                  name: TT.name
                })
              }), (0, xT.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === TT.owner && "-", null !== TT.owner && (0, xT.jsx)(ZT.i, {
                  playerSocialPreview: TT.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === rT && (0, xT.jsx)("td", {
                children: (0, gT.Z)(TT.category)
              }), DT && (0, xT.jsx)(FT, {
                discoverability: TT.discoverability
              }), (0, xT.jsx)(sT, {
                discoverability: TT.discoverability
              }), !AT && (0, xT.jsx)("td", {
                children: null !== TT.ccu ? (0, HT.V)(TT.ccu) : "-"
              }), (0, xT.jsx)("td", {
                children: null !== TT.favourites ? (0, HT.V)(TT.favourites) : "-"
              })]
            })
          })
        }), !NT && (0, xT.jsx)(vT.b, {
          className: "AnimFadeIn",
          page: KT,
          totalPages: zU,
          onSetPage: TT => {
            hT({
              scope: uT,
              category: rT,
              page: TT
            })
          }
        })]
      })
    }
  },
  5021: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT,
      f: () => MT
    });
    var WT = mT(1658),
      zT = mT(1188);

    function MT(TT) {
      let {
        thumbnail: UT,
        name: mT
      } = TT;
      return (0, zT.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, zT.jsx)("div", {
          className: "StudioTableThumbnail",
          children: UT
        }), (0, zT.jsx)("span", {
          className: "StudioTableGameName",
          children: mT
        })]
      })
    }

    function gT(TT) {
      let {
        game: UT
      } = TT;
      return (0, zT.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, WT.f)(UT),
        alt: ""
      })
    }
  },
  6482: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT
    });
    const WT = {
      1: mT(6485),
      2: mT(6488),
      3: mT(6495)
    }
  },
  5017: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT
    });
    var WT = mT(63),
      zT = mT(1126),
      MT = mT.n(zT),
      gT = mT(1188);

    function nT(TT) {
      let {
        columns: UT,
        rows: mT,
        getRowKey: zT,
        renderRow: nT,
        className: HT
      } = TT;
      return (0, gT.jsxs)("table", {
        className: MT()("Table", HT),
        children: [(0, gT.jsx)("thead", {
          children: (0, gT.jsx)("tr", {
            children: UT.map((TT => (0, gT.jsx)("th", {
              children: TT.header
            }, TT.key)))
          })
        }), (0, gT.jsx)("tbody", {
          children: mT.map((TT => (0, gT.jsx)(WT.Fragment, {
            children: nT(TT)
          }, zT(TT))))
        })]
      })
    }
  },
  5009: () => {},
  6485: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6488: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6495: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);