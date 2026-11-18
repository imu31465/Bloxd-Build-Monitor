export const id = 94;
export const ids = [94];
export const modules = {
  4323: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => DJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(942),
      XJ = ZJ(1232),
      AJ = ZJ(2988),
      qJ = ZJ(112),
      jJ = ZJ(3026),
      YJ = ZJ(3017),
      hJ = ZJ(990);

    function DJ(JJ) {
      let {
        game: cJ
      } = JJ;
      const ZJ = (0, qJ.f)() ? "large" : "small",
        FJ = (0, jJ.f)(cJ, ZJ),
        DJ = (0, AJ.f)(FJ),
        sJ = void 0 !== DJ.blurhash;
      return (0, hJ.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [DJ.isLoading && !sJ && (0, hJ.jsx)(XJ.c, {
          loaderType: "Secondary"
        }), !DJ.failed && (null !== DJ.src || sJ) && (0, hJ.jsx)("div", {
          className: UJ()("SchematicImage", YJ.j, {
            SchematicImageFadeIn: DJ.fadeIn && !sJ
          }),
          style: (0, YJ.g)(DJ),
          children: (0, hJ.jsx)(YJ.e, {
            image: DJ
          })
        }), DJ.failed && (0, hJ.jsx)("div", {
          className: "SchematicImageError",
          children: (0, hJ.jsx)(eJ.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5846: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => dJ
    });
    ZJ(4317);
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(227),
      AJ = ZJ(905),
      qJ = ZJ(1122),
      jJ = ZJ(880),
      YJ = ZJ(1086),
      hJ = ZJ(1389),
      DJ = ZJ(3036),
      sJ = ZJ(1022),
      nJ = ZJ(4323),
      GJ = ZJ(2246),
      fJ = ZJ(1329),
      xJ = ZJ(3989),
      rJ = ZJ(4325),
      vJ = ZJ(1232),
      mJ = ZJ(1406),
      QJ = ZJ(3982),
      EJ = ZJ(2202),
      VJ = ZJ(4332),
      KJ = ZJ(5759),
      yJ = ZJ(1441),
      SJ = ZJ(990);
    const IJ = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      MJ = 25,
      bJ = "scope",
      wJ = "category",
      WJ = "customGames";
    const gJ = 7,
      HJ = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function PJ(JJ) {
      let {
        position: cJ
      } = JJ;
      const ZJ = KJ.d[cJ];
      return (0, SJ.jsxs)("td", {
        className: eJ()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== ZJ,
          [`StudioLeaderboardTopPosition${cJ}`]: void 0 !== ZJ
        }),
        children: [void 0 !== ZJ && (0, SJ.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: ZJ,
          alt: ""
        }), cJ]
      })
    }

    function kJ(JJ) {
      let {
        discoverability: cJ
      } = JJ;
      const {
        playsPerDay: ZJ,
        avgPlaytimeMinutes: UJ,
        retention: eJ
      } = null === cJ ? HJ : (0, DJ.g)(cJ);
      return (0, SJ.jsxs)(FJ.Fragment, {
        children: [(0, SJ.jsx)("td", {
          children: null !== ZJ ? (0, DJ.c)(ZJ) : "-"
        }), (0, SJ.jsx)("td", {
          children: null !== UJ ? (0, DJ.e)(UJ) : "-"
        }), (0, SJ.jsx)("td", {
          children: null !== eJ ? (0, DJ.f)(eJ) : "-"
        })]
      })
    }

    function pJ(JJ) {
      let {
        discoverability: cJ
      } = JJ;
      return (0, SJ.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === cJ || void 0 === cJ ? void 0 : cJ.engagementScore) ? (0, qJ.S)(Math.round(cJ.engagementScore)) : "-"
      })
    }

    function dJ() {
      var JJ, cJ;
      const {
        t: ZJ
      } = (0, YJ.F)(), UJ = (0, mJ.useNavigatePreserveSearch)(), {
        userContext: eJ,
        isUserContextUpdating: KJ
      } = (0, sJ.d)(), HJ = (0, EJ.o)(), [dJ, zJ] = (0, QJ.n)(), NJ = (OJ = dJ.get(bJ), IJ.some((JJ => JJ.scope === OJ)) ? OJ : WJ);
      var OJ;
      const TJ = function(JJ) {
          return XJ.K.includes(JJ) ? JJ : null
        }(dJ.get(wJ)),
        CJ = (0, QJ.h)(dJ.get(QJ.e)),
        [uJ, iJ] = (0, FJ.useState)(null),
        [RJ, LJ] = (0, FJ.useState)(!1);

      function aJ(JJ) {
        zJ((cJ => {
          (0, QJ.l)(cJ, bJ, JJ.scope === WJ ? null : JJ.scope), (0, QJ.l)(cJ, wJ, JJ.category), (0, QJ.m)(cJ, JJ.page)
        }))
      }
      const BJ = !KJ && eJ.playerHasRank("developer"),
        tJ = BJ && "allGames" === NJ,
        oJ = BJ && "dormantGames" === NJ;
      (0, FJ.useEffect)((() => {
        if (KJ) return;
        let JJ = !1;
        return iJ(null), LJ(!1), hJ.c.getPublishedGamePreviews(eJ, {
          searchQuery: null,
          pageNumber: CJ,
          pageSize: MJ,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== TJ ? [TJ] : [],
          upAndComing: !1,
          dormantGames: oJ,
          sortByEngagementScore: !0,
          firstPartyGameNames: tJ ? jJ.c : void 0,
          includeOwners: !0
        }).then((cJ => {
          JJ || iJ(cJ)
        })).catch((cJ => {
          console.error("Failed to load the studio leaderboard", cJ), JJ || LJ(!0)
        })), () => {
          JJ = !0
        }
      }), [KJ, tJ, oJ, TJ, CJ, eJ]);
      const lJ = null !== (JJ = null === uJ || void 0 === uJ ? void 0 : uJ.results) && void 0 !== JJ ? JJ : null,
        Jc = function(JJ, cJ, ZJ) {
          const [UJ, eJ] = (0, FJ.useState)({}), XJ = ZJ ? (null !== JJ && void 0 !== JJ ? JJ : []).flatMap((JJ => "firstPartyGame" === JJ.type ? [(0, AJ.g)(JJ.gameNameWithVariation, !0)] : [])).join(",") : "", qJ = (0, FJ.useMemo)((() => "" === XJ ? [] : XJ.split(",")), [XJ]);
          return (0, FJ.useEffect)((() => {
            if (0 === qJ.length) return void eJ({});
            let JJ = !1;
            return hJ.c.getGamesByAnalyticsIds(cJ, qJ).then((cJ => {
              JJ || eJ(cJ)
            })).catch((JJ => {
              console.error("Failed to load first party discoverability for the studio leaderboard", JJ)
            })), () => {
              JJ = !0
            }
          }), [qJ, cJ]), UJ
        }(lJ, eJ, BJ),
        cc = null !== lJ ? function(JJ, cJ, ZJ, FJ, UJ) {
          return JJ.map(((JJ, eJ) => {
            var XJ;
            const qJ = FJ + eJ + 1;
            if ("customGame" === JJ.type) {
              const cJ = JJ.preview;
              return {
                key: cJ.schematicId,
                position: qJ,
                thumbnail: (0, SJ.jsx)(nJ.e, {
                  game: cJ
                }),
                name: cJ.name,
                owner: JJ.owner,
                category: cJ.gameCategory,
                ccu: cJ.ccu,
                favourites: cJ.favourites,
                discoverability: (0, DJ.i)(cJ) ? cJ : null,
                url: (0, yJ.h)((0, AJ.e)(cJ.schematicId))
              }
            }
            const jJ = JJ.gameNameWithVariation,
              YJ = (0, AJ.g)(jJ, !0);
            return {
              key: jJ,
              position: qJ,
              thumbnail: (0, SJ.jsx)(VJ.b, {
                game: jJ
              }),
              name: (0, yJ.g)(jJ, UJ),
              owner: null,
              category: (0, yJ.b)(jJ),
              ccu: (0, EJ.b)(jJ, cJ),
              favourites: null,
              discoverability: null !== (XJ = ZJ[YJ]) && void 0 !== XJ ? XJ : null,
              url: (0, yJ.h)(YJ)
            }
          }))
        }(lJ, HJ, Jc, (CJ - 1) * MJ, ZJ) : [],
        Zc = !RJ && null === uJ,
        Fc = !Zc && !RJ && 0 === cc.length,
        Uc = null !== (cJ = null === uJ || void 0 === uJ ? void 0 : uJ.totalPages) && void 0 !== cJ ? cJ : 1;
      return (0, SJ.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, SJ.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, SJ.jsx)("h1", {
            className: "StudioPageTitle",
            children: ZJ("studio:leaderboard")
          })
        }), (0, SJ.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!oJ && (0, SJ.jsx)("div", {
            children: ZJ("studio:leaderboardBanner")
          }), oJ && (0, SJ.jsx)("div", {
            children: ZJ("studio:leaderboardDormantBanner")
          }), (0, SJ.jsx)("div", {
            children: ZJ("studio:leaderboardMetricsBanner", {
              days: gJ
            })
          })]
        }), BJ && (0, SJ.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: IJ.map((JJ => (0, SJ.jsx)(fJ.O, {
            active: NJ === JJ.scope,
            onClick: () => {
              aJ({
                scope: JJ.scope,
                category: TJ,
                page: 1
              })
            },
            children: ZJ(JJ.title)
          }, JJ.scope)))
        }), (0, SJ.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, SJ.jsx)(fJ.O, {
            active: null === TJ,
            onClick: () => {
              aJ({
                scope: NJ,
                category: null,
                page: 1
              })
            },
            children: ZJ("studio:leaderboardAllCategories")
          }), XJ.K.map((JJ => (0, SJ.jsx)(fJ.O, {
            active: TJ === JJ,
            onClick: () => {
              aJ({
                scope: NJ,
                category: JJ,
                page: 1
              })
            },
            children: (0, XJ.T)(JJ)
          }, JJ)))]
        }), Zc && (0, SJ.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, SJ.jsx)(vJ.c, {})
        }), RJ && (0, SJ.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ZJ("studio:failedToLoadLeaderboard")
        }), Fc && (0, SJ.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ZJ("studio:leaderboardEmpty")
        }), !Zc && !RJ && !Fc && (0, SJ.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, SJ.jsx)(rJ.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: ZJ("general:game")
            }, {
              key: "owner",
              header: ZJ("general:owner")
            }, ...null === TJ ? [{
              key: "category",
              header: ZJ("general:category")
            }] : [], ...BJ ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: ZJ("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: ZJ("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: ZJ("studio:leaderboardSessionsPerPlayer")
            }, ...oJ ? [] : [{
              key: "ccu",
              header: ZJ("studio:metricCcu")
            }], {
              key: "favourites",
              header: ZJ("general:favourites")
            }],
            rows: cc,
            getRowKey: JJ => JJ.key,
            renderRow: JJ => (0, SJ.jsxs)("tr", {
              onClick: () => {
                UJ(JJ.url)
              },
              children: [(0, SJ.jsx)(PJ, {
                position: JJ.position
              }), (0, SJ.jsx)("td", {
                children: (0, SJ.jsx)(VJ.f, {
                  thumbnail: JJ.thumbnail,
                  name: JJ.name
                })
              }), (0, SJ.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === JJ.owner && "-", null !== JJ.owner && (0, SJ.jsx)(GJ.g, {
                  playerSocialPreview: JJ.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === TJ && (0, SJ.jsx)("td", {
                children: (0, XJ.T)(JJ.category)
              }), BJ && (0, SJ.jsx)(pJ, {
                discoverability: JJ.discoverability
              }), (0, SJ.jsx)(kJ, {
                discoverability: JJ.discoverability
              }), !oJ && (0, SJ.jsx)("td", {
                children: null !== JJ.ccu ? (0, qJ.S)(JJ.ccu) : "-"
              }), (0, SJ.jsx)("td", {
                children: null !== JJ.favourites ? (0, qJ.S)(JJ.favourites) : "-"
              })]
            })
          })
        }), !RJ && (0, SJ.jsx)(xJ.e, {
          className: "AnimFadeIn",
          page: CJ,
          totalPages: Uc,
          onSetPage: JJ => {
            aJ({
              scope: NJ,
              category: TJ,
              page: JJ
            })
          }
        })]
      })
    }
  },
  4332: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      f: () => eJ
    });
    var FJ = ZJ(1441),
      UJ = ZJ(990);

    function eJ(JJ) {
      let {
        thumbnail: cJ,
        name: ZJ
      } = JJ;
      return (0, UJ.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, UJ.jsx)("div", {
          className: "StudioTableThumbnail",
          children: cJ
        }), (0, UJ.jsx)("span", {
          className: "StudioTableGameName",
          children: ZJ
        })]
      })
    }

    function XJ(JJ) {
      let {
        game: cJ
      } = JJ;
      return (0, UJ.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, FJ.f)(cJ),
        alt: ""
      })
    }
  },
  5759: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    const FJ = {
      1: ZJ(5768),
      2: ZJ(5776),
      3: ZJ(5779)
    }
  },
  4325: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(990);

    function AJ(JJ) {
      let {
        columns: cJ,
        rows: ZJ,
        getRowKey: UJ,
        renderRow: AJ,
        className: qJ
      } = JJ;
      return (0, XJ.jsxs)("table", {
        className: eJ()("Table", qJ),
        children: [(0, XJ.jsx)("thead", {
          children: (0, XJ.jsx)("tr", {
            children: cJ.map((JJ => (0, XJ.jsx)("th", {
              children: JJ.header
            }, JJ.key)))
          })
        }), (0, XJ.jsx)("tbody", {
          children: ZJ.map((JJ => (0, XJ.jsx)(FJ.Fragment, {
            children: AJ(JJ)
          }, UJ(JJ))))
        })]
      })
    }
  },
  4317: () => {},
  5768: JJ => {
    JJ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  5776: JJ => {
    JJ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  5779: JJ => {
    JJ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);