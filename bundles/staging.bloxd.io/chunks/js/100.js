export const id = 100;
export const ids = [100];
export const modules = {
  4686: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Bu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(1043),
      mu = yu(1300),
      Ju = yu(3318),
      Nu = yu(145),
      Xu = yu(3361),
      Vu = yu(3347),
      ru = yu(1079);

    function Bu(uu) {
      let {
        game: Ru
      } = uu;
      const yu = (0, Nu.n)() ? "large" : "small",
        Eu = (0, Xu.g)(Ru, yu),
        Bu = (0, Ju.g)(Eu),
        xu = void 0 !== Bu.blurhash;
      return (0, ru.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Bu.isLoading && !xu && (0, ru.jsx)(mu.b, {
          loaderType: "Secondary"
        }), !Bu.failed && (null !== Bu.src || xu) && (0, ru.jsx)("div", {
          className: Ku()("SchematicImage", Vu.h, {
            SchematicImageFadeIn: Bu.fadeIn && !xu
          }),
          style: (0, Vu.f)(Bu),
          children: (0, ru.jsx)(Vu.c, {
            image: Bu
          })
        }), Bu.failed && (0, ru.jsx)("div", {
          className: "SchematicImageError",
          children: (0, ru.jsx)(Qu.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6293: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Lu
    });
    yu(4677);
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(330),
      Ju = yu(1011),
      Nu = yu(1199),
      Xu = yu(998),
      Vu = yu(1170),
      ru = yu(1447),
      Bu = yu(3366),
      xu = yu(1107),
      Su = yu(4686),
      pu = yu(2457),
      Tu = yu(1408),
      Wu = yu(4338),
      ju = yu(4689),
      Hu = yu(1300),
      du = yu(1467),
      bu = yu(4331),
      Cu = yu(2407),
      ku = yu(4698),
      eu = yu(6202),
      Au = yu(1497),
      Du = yu(1079);
    const Mu = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      Iu = 25,
      Gu = "scope",
      Uu = "category",
      nu = "customGames";
    const su = 7,
      tu = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function lu(uu) {
      let {
        position: Ru
      } = uu;
      const yu = eu.c[Ru];
      return (0, Du.jsxs)("td", {
        className: Qu()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== yu,
          [`StudioLeaderboardTopPosition${Ru}`]: void 0 !== yu
        }),
        children: [void 0 !== yu && (0, Du.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: yu,
          alt: ""
        }), Ru]
      })
    }

    function gu(uu) {
      let {
        discoverability: Ru
      } = uu;
      const {
        playsPerDay: yu,
        avgPlaytimeMinutes: Ku,
        retention: Qu
      } = null === Ru ? tu : (0, Bu.p)(Ru);
      return (0, Du.jsxs)(Eu.Fragment, {
        children: [(0, Du.jsx)("td", {
          children: null !== yu ? (0, Bu.e)(yu) : "-"
        }), (0, Du.jsx)("td", {
          children: null !== Ku ? (0, Bu.h)(Ku) : "-"
        }), (0, Du.jsx)("td", {
          children: null !== Qu ? (0, Bu.l)(Qu) : "-"
        })]
      })
    }

    function cu(uu) {
      let {
        discoverability: Ru
      } = uu;
      return (0, Du.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === Ru || void 0 === Ru ? void 0 : Ru.engagementScore) ? (0, Nu.Q)(Math.round(Ru.engagementScore)) : "-"
      })
    }

    function Lu() {
      var uu, Ru;
      const {
        t: yu
      } = (0, Vu.E)(), Ku = (0, du.useNavigatePreserveSearch)(), {
        userContext: Qu,
        isUserContextUpdating: eu
      } = (0, xu.d)(), tu = (0, Cu.g)(), [Lu, zu] = (0, bu.m)(), Fu = (wu = Lu.get(Gu), Mu.some((uu => uu.scope === wu)) ? wu : nu);
      var wu;
      const Zu = function(uu) {
          return mu.U.includes(uu) ? uu : null
        }(Lu.get(Uu)),
        hu = (0, bu.d)(Lu.get(bu.c)),
        [Pu, iu] = (0, Eu.useState)(null),
        [Yu, ou] = (0, Eu.useState)(!1);

      function qu(uu) {
        zu((Ru => {
          (0, bu.h)(Ru, Gu, uu.scope === nu ? null : uu.scope), (0, bu.h)(Ru, Uu, uu.category), (0, bu.j)(Ru, uu.page)
        }))
      }
      const Ou = !eu && Qu.playerHasRank("developer"),
        vu = Ou && "allGames" === Fu,
        au = Ou && "dormantGames" === Fu;
      (0, Eu.useEffect)((() => {
        if (eu) return;
        let uu = !1;
        return iu(null), ou(!1), ru.e.getPublishedGamePreviews(Qu, {
          searchQuery: null,
          pageNumber: hu,
          pageSize: Iu,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== Zu ? [Zu] : [],
          upAndComing: !1,
          dormantGames: au,
          sortByEngagementScore: !0,
          firstPartyGameNames: vu ? Xu.d : void 0,
          includeOwners: !0
        }).then((Ru => {
          uu || iu(Ru)
        })).catch((Ru => {
          console.error("Failed to load the studio leaderboard", Ru), uu || ou(!0)
        })), () => {
          uu = !0
        }
      }), [eu, vu, au, Zu, hu, Qu]);
      const fu = null !== (uu = null === Pu || void 0 === Pu ? void 0 : Pu.results) && void 0 !== uu ? uu : null,
        uR = function(uu, Ru, yu) {
          const [Ku, Qu] = (0, Eu.useState)({}), mu = yu ? (null !== uu && void 0 !== uu ? uu : []).flatMap((uu => "firstPartyGame" === uu.type ? [(0, Ju.f)(uu.gameNameWithVariation, !0)] : [])).join(",") : "", Nu = (0, Eu.useMemo)((() => "" === mu ? [] : mu.split(",")), [mu]);
          return (0, Eu.useEffect)((() => {
            if (0 === Nu.length) return void Qu({});
            let uu = !1;
            return ru.e.getGamesByAnalyticsIds(Ru, Nu).then((Ru => {
              uu || Qu(Ru)
            })).catch((uu => {
              console.error("Failed to load first party discoverability for the studio leaderboard", uu)
            })), () => {
              uu = !0
            }
          }), [Nu, Ru]), Ku
        }(fu, Qu, Ou),
        RR = null !== fu ? function(uu, Ru, yu, Eu, Ku) {
          return uu.map(((uu, Qu) => {
            var mu;
            const Nu = Eu + Qu + 1;
            if ("customGame" === uu.type) {
              const Ru = uu.preview;
              return {
                key: Ru.schematicId,
                position: Nu,
                thumbnail: (0, Du.jsx)(Su.e, {
                  game: Ru
                }),
                name: Ru.name,
                owner: uu.owner,
                category: Ru.gameCategory,
                ccu: Ru.ccu,
                favourites: Ru.favourites,
                discoverability: (0, Bu.q)(Ru) ? Ru : null,
                url: (0, Au.j)((0, Ju.d)(Ru.schematicId))
              }
            }
            const Xu = uu.gameNameWithVariation,
              Vu = (0, Ju.f)(Xu, !0);
            return {
              key: Xu,
              position: Nu,
              thumbnail: (0, Du.jsx)(ku.c, {
                game: Xu
              }),
              name: (0, Au.i)(Xu, Ku),
              owner: null,
              category: (0, Au.b)(Xu),
              ccu: (0, Cu.c)(Xu, Ru),
              favourites: null,
              discoverability: null !== (mu = yu[Vu]) && void 0 !== mu ? mu : null,
              url: (0, Au.j)(Vu)
            }
          }))
        }(fu, tu, uR, (hu - 1) * Iu, yu) : [],
        yR = !Yu && null === Pu,
        ER = !yR && !Yu && 0 === RR.length,
        KR = null !== (Ru = null === Pu || void 0 === Pu ? void 0 : Pu.totalPages) && void 0 !== Ru ? Ru : 1;
      return (0, Du.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, Du.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Du.jsx)("h1", {
            className: "StudioPageTitle",
            children: yu("studio:leaderboard")
          })
        }), (0, Du.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!au && (0, Du.jsx)("div", {
            children: yu("studio:leaderboardBanner")
          }), au && (0, Du.jsx)("div", {
            children: yu("studio:leaderboardDormantBanner")
          }), (0, Du.jsx)("div", {
            children: yu("studio:leaderboardMetricsBanner", {
              days: su
            })
          })]
        }), Ou && (0, Du.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Mu.map((uu => (0, Du.jsx)(Tu.P, {
            active: Fu === uu.scope,
            onClick: () => {
              qu({
                scope: uu.scope,
                category: Zu,
                page: 1
              })
            },
            children: yu(uu.title)
          }, uu.scope)))
        }), (0, Du.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, Du.jsx)(Tu.P, {
            active: null === Zu,
            onClick: () => {
              qu({
                scope: Fu,
                category: null,
                page: 1
              })
            },
            children: yu("studio:leaderboardAllCategories")
          }), mu.U.map((uu => (0, Du.jsx)(Tu.P, {
            active: Zu === uu,
            onClick: () => {
              qu({
                scope: Fu,
                category: uu,
                page: 1
              })
            },
            children: (0, mu.hb)(uu)
          }, uu)))]
        }), yR && (0, Du.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Du.jsx)(Hu.b, {})
        }), Yu && (0, Du.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: yu("studio:failedToLoadLeaderboard")
        }), ER && (0, Du.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: yu("studio:leaderboardEmpty")
        }), !yR && !Yu && !ER && (0, Du.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, Du.jsx)(ju.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: yu("general:game")
            }, {
              key: "owner",
              header: yu("general:owner")
            }, ...null === Zu ? [{
              key: "category",
              header: yu("general:category")
            }] : [], ...Ou ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: yu("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: yu("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: yu("studio:leaderboardSessionsPerPlayer")
            }, ...au ? [] : [{
              key: "ccu",
              header: yu("studio:metricCcu")
            }], {
              key: "favourites",
              header: yu("general:favourites")
            }],
            rows: RR,
            getRowKey: uu => uu.key,
            renderRow: uu => (0, Du.jsxs)("tr", {
              onClick: () => {
                Ku(uu.url)
              },
              children: [(0, Du.jsx)(lu, {
                position: uu.position
              }), (0, Du.jsx)("td", {
                children: (0, Du.jsx)(ku.g, {
                  thumbnail: uu.thumbnail,
                  name: uu.name
                })
              }), (0, Du.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === uu.owner && "-", null !== uu.owner && (0, Du.jsx)(pu.e, {
                  playerSocialPreview: uu.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === Zu && (0, Du.jsx)("td", {
                children: (0, mu.hb)(uu.category)
              }), Ou && (0, Du.jsx)(cu, {
                discoverability: uu.discoverability
              }), (0, Du.jsx)(gu, {
                discoverability: uu.discoverability
              }), !au && (0, Du.jsx)("td", {
                children: null !== uu.ccu ? (0, Nu.Q)(uu.ccu) : "-"
              }), (0, Du.jsx)("td", {
                children: null !== uu.favourites ? (0, Nu.Q)(uu.favourites) : "-"
              })]
            })
          })
        }), !Yu && (0, Du.jsx)(Wu.d, {
          className: "AnimFadeIn",
          page: hu,
          totalPages: KR,
          onSetPage: uu => {
            qu({
              scope: Fu,
              category: Zu,
              page: uu
            })
          }
        })]
      })
    }
  },
  4698: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu,
      g: () => Qu
    });
    var Eu = yu(1497),
      Ku = yu(1079);

    function Qu(uu) {
      let {
        thumbnail: Ru,
        name: yu
      } = uu;
      return (0, Ku.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Ku.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Ru
        }), (0, Ku.jsx)("span", {
          className: "StudioTableGameName",
          children: yu
        })]
      })
    }

    function mu(uu) {
      let {
        game: Ru
      } = uu;
      return (0, Ku.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Eu.g)(Ru),
        alt: ""
      })
    }
  },
  6202: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu
    });
    const Eu = {
      1: yu(6206),
      2: yu(6212),
      3: yu(6219)
    }
  },
  4689: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(1079);

    function Ju(uu) {
      let {
        columns: Ru,
        rows: yu,
        getRowKey: Ku,
        renderRow: Ju,
        className: Nu
      } = uu;
      return (0, mu.jsxs)("table", {
        className: Qu()("Table", Nu),
        children: [(0, mu.jsx)("thead", {
          children: (0, mu.jsx)("tr", {
            children: Ru.map((uu => (0, mu.jsx)("th", {
              children: uu.header
            }, uu.key)))
          })
        }), (0, mu.jsx)("tbody", {
          children: yu.map((uu => (0, mu.jsx)(Eu.Fragment, {
            children: Ju(uu)
          }, Ku(uu))))
        })]
      })
    }
  },
  4677: () => {},
  6206: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6212: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6219: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);