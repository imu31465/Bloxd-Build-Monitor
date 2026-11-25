export const id = 104;
export const ids = [104];
export const modules = {
  5077: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => cu
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(1116),
      Xu = ju(1393),
      lu = ju(3691),
      qu = ju(131),
      fu = ju(3738),
      Cu = ju(3729),
      bu = ju(1154);

    function cu(uu) {
      let {
        game: Eu
      } = uu;
      const ju = (0, qu.is99NightsCrazyGamesBundle)() ? "large" : "small",
        su = (0, fu.e)(Eu, ju),
        cu = (0, lu.h)(su),
        Nu = void 0 !== cu.blurhash;
      return (0, bu.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [cu.isLoading && !Nu && (0, bu.jsx)(Xu.b, {
          loaderType: "Secondary"
        }), !cu.failed && (null !== cu.src || Nu) && (0, bu.jsx)("div", {
          className: Uu()("SchematicImage", Cu.d, {
            SchematicImageFadeIn: cu.fadeIn && !Nu
          }),
          style: (0, Cu.c)(cu),
          children: (0, bu.jsx)(Cu.b, {
            image: cu
          })
        }), cu.failed && (0, bu.jsx)("div", {
          className: "SchematicImageError",
          children: (0, bu.jsx)(Zu.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6719: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Wu
    });
    ju(5073);
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(337),
      lu = ju(1079),
      qu = ju(1278),
      fu = ju(1065),
      Cu = ju(1244),
      bu = ju(1559),
      cu = ju(3754),
      Nu = ju(1178),
      Ou = ju(5077),
      Yu = ju(2716),
      hu = ju(1506),
      Du = ju(4749),
      gu = ju(5084),
      Mu = ju(1393),
      eu = ju(1570),
      Gu = ju(4740),
      pu = ju(2655),
      wu = ju(5089),
      Ju = ju(6618),
      du = ju(1595),
      au = ju(1154);
    const Pu = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      ou = 25,
      ku = "scope",
      mu = "category",
      vu = "customGames";
    const Ku = 7,
      Vu = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function ru(uu) {
      let {
        position: Eu
      } = uu;
      const ju = Ju.c[Eu];
      return (0, au.jsxs)("td", {
        className: Zu()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== ju,
          [`StudioLeaderboardTopPosition${Eu}`]: void 0 !== ju
        }),
        children: [void 0 !== ju && (0, au.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: ju,
          alt: ""
        }), Eu]
      })
    }

    function Qu(uu) {
      let {
        discoverability: Eu
      } = uu;
      const {
        playsPerDay: ju,
        avgPlaytimeMinutes: Uu,
        retention: Zu
      } = null === Eu ? Vu : (0, cu.h)(Eu);
      return (0, au.jsxs)(su.Fragment, {
        children: [(0, au.jsx)("td", {
          children: null !== ju ? (0, cu.c)(ju) : "-"
        }), (0, au.jsx)("td", {
          children: null !== Uu ? (0, cu.e)(Uu) : "-"
        }), (0, au.jsx)("td", {
          children: null !== Zu ? (0, cu.f)(Zu) : "-"
        })]
      })
    }

    function iu(uu) {
      let {
        discoverability: Eu
      } = uu;
      return (0, au.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === Eu || void 0 === Eu ? void 0 : Eu.engagementScore) ? (0, qu.S)(Math.round(Eu.engagementScore)) : "-"
      })
    }

    function Wu() {
      var uu, Eu;
      const {
        t: ju
      } = (0, Cu.A)(), Uu = (0, eu.useNavigatePreserveSearch)(), {
        userContext: Zu,
        isUserContextUpdating: Ju
      } = (0, Nu.c)(), Vu = (0, pu.l)(), [Wu, Su] = (0, Gu.k)(), Iu = (Fu = Wu.get(ku), Pu.some((uu => uu.scope === Fu)) ? Fu : vu);
      var Fu;
      const Bu = function(uu) {
          return Xu.Y.includes(uu) ? uu : null
        }(Wu.get(mu)),
        Lu = (0, Gu.c)(Wu.get(Gu.b)),
        [tu, xu] = (0, su.useState)(null),
        [Tu, Hu] = (0, su.useState)(!1);

      function Au(uu) {
        Su((Eu => {
          (0, Gu.f)(Eu, ku, uu.scope === vu ? null : uu.scope), (0, Gu.f)(Eu, mu, uu.category), (0, Gu.i)(Eu, uu.page)
        }))
      }
      const nu = !Ju && Zu.playerHasRank("developer"),
        yu = nu && "allGames" === Iu,
        zu = nu && "dormantGames" === Iu;
      (0, su.useEffect)((() => {
        if (Ju) return;
        let uu = !1;
        return xu(null), Hu(!1), bu.b.getPublishedGamePreviews(Zu, {
          searchQuery: null,
          pageNumber: Lu,
          pageSize: ou,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== Bu ? [Bu] : [],
          upAndComing: !1,
          dormantGames: zu,
          sortByEngagementScore: !0,
          firstPartyGameNames: yu ? fu.d : void 0,
          includeOwners: !0
        }).then((Eu => {
          uu || xu(Eu)
        })).catch((Eu => {
          console.error("Failed to load the studio leaderboard", Eu), uu || Hu(!0)
        })), () => {
          uu = !0
        }
      }), [Ju, yu, zu, Bu, Lu, Zu]);
      const Ru = null !== (uu = null === tu || void 0 === tu ? void 0 : tu.results) && void 0 !== uu ? uu : null,
        uE = function(uu, Eu, ju) {
          const [Uu, Zu] = (0, su.useState)({}), Xu = ju ? (null !== uu && void 0 !== uu ? uu : []).flatMap((uu => "firstPartyGame" === uu.type ? [(0, lu.i)(uu.gameNameWithVariation, !0)] : [])).join(",") : "", qu = (0, su.useMemo)((() => "" === Xu ? [] : Xu.split(",")), [Xu]);
          return (0, su.useEffect)((() => {
            if (0 === qu.length) return void Zu({});
            let uu = !1;
            return bu.b.getGamesByAnalyticsIds(Eu, qu).then((Eu => {
              uu || Zu(Eu)
            })).catch((uu => {
              console.error("Failed to load first party discoverability for the studio leaderboard", uu)
            })), () => {
              uu = !0
            }
          }), [qu, Eu]), Uu
        }(Ru, Zu, nu),
        EE = null !== Ru ? function(uu, Eu, ju, su, Uu) {
          return uu.map(((uu, Zu) => {
            var Xu;
            const qu = su + Zu + 1;
            if ("customGame" === uu.type) {
              const Eu = uu.preview;
              return {
                key: Eu.schematicId,
                position: qu,
                thumbnail: (0, au.jsx)(Ou.b, {
                  game: Eu
                }),
                name: Eu.name,
                owner: uu.owner,
                category: Eu.gameCategory,
                ccu: Eu.ccu,
                favourites: Eu.favourites,
                discoverability: (0, cu.l)(Eu) ? Eu : null,
                url: (0, du.i)((0, lu.e)(Eu.schematicId))
              }
            }
            const fu = uu.gameNameWithVariation,
              Cu = (0, lu.i)(fu, !0);
            return {
              key: fu,
              position: qu,
              thumbnail: (0, au.jsx)(wu.c, {
                game: fu
              }),
              name: (0, du.h)(fu, Uu),
              owner: null,
              category: (0, du.c)(fu),
              ccu: (0, pu.c)(fu, Eu),
              favourites: null,
              discoverability: null !== (Xu = ju[Cu]) && void 0 !== Xu ? Xu : null,
              url: (0, du.i)(Cu)
            }
          }))
        }(Ru, Vu, uE, (Lu - 1) * ou, ju) : [],
        jE = !Tu && null === tu,
        sE = !jE && !Tu && 0 === EE.length,
        UE = null !== (Eu = null === tu || void 0 === tu ? void 0 : tu.totalPages) && void 0 !== Eu ? Eu : 1;
      return (0, au.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, au.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, au.jsx)("h1", {
            className: "StudioPageTitle",
            children: ju("studio:leaderboard")
          })
        }), (0, au.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!zu && (0, au.jsx)("div", {
            children: ju("studio:leaderboardBanner")
          }), zu && (0, au.jsx)("div", {
            children: ju("studio:leaderboardDormantBanner")
          }), (0, au.jsx)("div", {
            children: ju("studio:leaderboardMetricsBanner", {
              days: Ku
            })
          })]
        }), nu && (0, au.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Pu.map((uu => (0, au.jsx)(hu.$, {
            active: Iu === uu.scope,
            onClick: () => {
              Au({
                scope: uu.scope,
                category: Bu,
                page: 1
              })
            },
            children: ju(uu.title)
          }, uu.scope)))
        }), (0, au.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, au.jsx)(hu.$, {
            active: null === Bu,
            onClick: () => {
              Au({
                scope: Iu,
                category: null,
                page: 1
              })
            },
            children: ju("studio:leaderboardAllCategories")
          }), Xu.Y.map((uu => (0, au.jsx)(hu.$, {
            active: Bu === uu,
            onClick: () => {
              Au({
                scope: Iu,
                category: uu,
                page: 1
              })
            },
            children: (0, Xu.ib)(uu)
          }, uu)))]
        }), jE && (0, au.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, au.jsx)(Mu.b, {})
        }), Tu && (0, au.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ju("studio:failedToLoadLeaderboard")
        }), sE && (0, au.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ju("studio:leaderboardEmpty")
        }), !jE && !Tu && !sE && (0, au.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, au.jsx)(gu.d, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: ju("general:game")
            }, {
              key: "owner",
              header: ju("general:owner")
            }, ...null === Bu ? [{
              key: "category",
              header: ju("general:category")
            }] : [], ...nu ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: ju("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: ju("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: ju("studio:leaderboardSessionsPerPlayer")
            }, ...zu ? [] : [{
              key: "ccu",
              header: ju("studio:metricCcu")
            }], {
              key: "favourites",
              header: ju("general:favourites")
            }],
            rows: EE,
            getRowKey: uu => uu.key,
            renderRow: uu => (0, au.jsxs)("tr", {
              onClick: () => {
                Uu(uu.url)
              },
              children: [(0, au.jsx)(ru, {
                position: uu.position
              }), (0, au.jsx)("td", {
                children: (0, au.jsx)(wu.f, {
                  thumbnail: uu.thumbnail,
                  name: uu.name
                })
              }), (0, au.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === uu.owner && "-", null !== uu.owner && (0, au.jsx)(Yu.f, {
                  playerSocialPreview: uu.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === Bu && (0, au.jsx)("td", {
                children: (0, Xu.ib)(uu.category)
              }), nu && (0, au.jsx)(iu, {
                discoverability: uu.discoverability
              }), (0, au.jsx)(Qu, {
                discoverability: uu.discoverability
              }), !zu && (0, au.jsx)("td", {
                children: null !== uu.ccu ? (0, qu.S)(uu.ccu) : "-"
              }), (0, au.jsx)("td", {
                children: null !== uu.favourites ? (0, qu.S)(uu.favourites) : "-"
              })]
            })
          })
        }), !Tu && (0, au.jsx)(Du.d, {
          className: "AnimFadeIn",
          page: Lu,
          totalPages: UE,
          onSetPage: uu => {
            Au({
              scope: Iu,
              category: Bu,
              page: uu
            })
          }
        })]
      })
    }
  },
  5089: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu,
      f: () => Zu
    });
    var su = ju(1595),
      Uu = ju(1154);

    function Zu(uu) {
      let {
        thumbnail: Eu,
        name: ju
      } = uu;
      return (0, Uu.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Uu.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Eu
        }), (0, Uu.jsx)("span", {
          className: "StudioTableGameName",
          children: ju
        })]
      })
    }

    function Xu(uu) {
      let {
        game: Eu
      } = uu;
      return (0, Uu.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, su.e)(Eu),
        alt: ""
      })
    }
  },
  6618: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su
    });
    const su = {
      1: ju(6624),
      2: ju(6631),
      3: ju(6635)
    }
  },
  5084: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(1154);

    function lu(uu) {
      let {
        columns: Eu,
        rows: ju,
        getRowKey: Uu,
        renderRow: lu,
        className: qu
      } = uu;
      return (0, Xu.jsxs)("table", {
        className: Zu()("Table", qu),
        children: [(0, Xu.jsx)("thead", {
          children: (0, Xu.jsx)("tr", {
            children: Eu.map((uu => (0, Xu.jsx)("th", {
              children: uu.header
            }, uu.key)))
          })
        }), (0, Xu.jsx)("tbody", {
          children: ju.map((uu => (0, Xu.jsx)(su.Fragment, {
            children: lu(uu)
          }, Uu(uu))))
        })]
      })
    }
  },
  5073: () => {},
  6624: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6631: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6635: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);