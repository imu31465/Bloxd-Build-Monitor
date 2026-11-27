export const id = 115;
export const ids = [115];
export const modules = {
  5388: (ee, ie, He) => {
    He.d(ie, {
      d: () => ke
    });
    var ye = He(1053),
      be = He.n(ye),
      Me = He(1323),
      Ke = He(1320),
      Ue = He(3892),
      Fe = He(125),
      Je = He(3937),
      oe = He(3927),
      Re = He(1228);

    function ke(ee) {
      let {
        game: ie
      } = ee;
      const He = (0, Fe.is99NightsCrazyGamesBundle)() ? "large" : "small",
        ye = (0, Je.h)(ie, He),
        ke = (0, Ue.f)(ye),
        qe = void 0 !== ke.blurhash;
      return (0, Re.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [ke.isLoading && !qe && (0, Re.jsx)(Ke.b, {
          loaderType: "Secondary"
        }), !ke.failed && (null !== ke.src || qe) && (0, Re.jsx)("div", {
          className: be()("SchematicImage", oe.l, {
            SchematicImageFadeIn: ke.fadeIn && !qe
          }),
          style: (0, oe.i)(ke),
          children: (0, Re.jsx)(oe.e, {
            image: ke
          })
        }), ke.failed && (0, Re.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Re.jsx)(Me.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  7149: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => Ce
    });
    He(5382);
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(335),
      Ue = He(1040),
      Fe = He(1169),
      Je = He(1027),
      oe = He(1127),
      Re = He(1490),
      ke = He(3950),
      qe = He(1075),
      fe = He(5388),
      Te = He(2749),
      pe = He(1438),
      Xe = He(4953),
      ze = He(5390),
      Be = He(1320),
      Ee = He(1502),
      ge = He(4947),
      Oe = He(2626),
      de = He(5395),
      We = He(7021),
      te = He(1536),
      Ze = He(1228);
    const we = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      De = 25,
      Pe = "scope",
      Ae = "category",
      Ye = "customGames";
    const Ve = 7,
      ae = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function ce(ee) {
      let {
        position: ie
      } = ee;
      const He = We.b[ie];
      return (0, Ze.jsxs)("td", {
        className: Me()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== He,
          [`StudioLeaderboardTopPosition${ie}`]: void 0 !== He
        }),
        children: [void 0 !== He && (0, Ze.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: He,
          alt: ""
        }), ie]
      })
    }

    function xe(ee) {
      let {
        discoverability: ie
      } = ee;
      const {
        playsPerDay: He,
        avgPlaytimeMinutes: be,
        retention: Me
      } = null === ie ? ae : (0, ke.i)(ie);
      return (0, Ze.jsxs)(ye.Fragment, {
        children: [(0, Ze.jsx)("td", {
          children: null !== He ? (0, ke.b)(He) : "-"
        }), (0, Ze.jsx)("td", {
          children: null !== be ? (0, ke.f)(be) : "-"
        }), (0, Ze.jsx)("td", {
          children: null !== Me ? (0, ke.h)(Me) : "-"
        })]
      })
    }

    function Le(ee) {
      let {
        discoverability: ie
      } = ee;
      return (0, Ze.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === ie || void 0 === ie ? void 0 : ie.engagementScore) ? (0, Fe.P)(Math.round(ie.engagementScore)) : "-"
      })
    }

    function Ce() {
      var ee, ie;
      const {
        t: He
      } = (0, oe.v)(), be = (0, Ee.useNavigatePreserveSearch)(), {
        userContext: Me,
        isUserContextUpdating: We
      } = (0, qe.b)(), ae = (0, Oe.p)(), [Ce, ve] = (0, ge.l)(), ue = (me = Ce.get(Pe), we.some((ee => ee.scope === me)) ? me : Ye);
      var me;
      const le = function(ee) {
          return Ke.Y.includes(ee) ? ee : null
        }(Ce.get(Ae)),
        Se = (0, ge.g)(Ce.get(ge.e)),
        [ne, je] = (0, ye.useState)(null),
        [se, Ie] = (0, ye.useState)(!1);

      function he(ee) {
        ve((ie => {
          (0, ge.i)(ie, Pe, ee.scope === Ye ? null : ee.scope), (0, ge.i)(ie, Ae, ee.category), (0, ge.k)(ie, ee.page)
        }))
      }
      const Ne = !We && Me.playerHasRank("developer"),
        Ge = Ne && "allGames" === ue,
        re = Ne && "dormantGames" === ue;
      (0, ye.useEffect)((() => {
        if (We) return;
        let ee = !1;
        return je(null), Ie(!1), Re.b.getPublishedGamePreviews(Me, {
          searchQuery: null,
          pageNumber: Se,
          pageSize: De,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== le ? [le] : [],
          upAndComing: !1,
          dormantGames: re,
          sortByEngagementScore: !0,
          firstPartyGameNames: Ge ? Je.e : void 0,
          includeOwners: !0
        }).then((ie => {
          ee || je(ie)
        })).catch((ie => {
          console.error("Failed to load the studio leaderboard", ie), ee || Ie(!0)
        })), () => {
          ee = !0
        }
      }), [We, Ge, re, le, Se, Me]);
      const Qe = null !== (ee = null === ne || void 0 === ne ? void 0 : ne.results) && void 0 !== ee ? ee : null,
        ei = function(ee, ie, He) {
          const [be, Me] = (0, ye.useState)({}), Ke = He ? (null !== ee && void 0 !== ee ? ee : []).flatMap((ee => "firstPartyGame" === ee.type ? [(0, Ue.c)(ee.gameNameWithVariation, !0)] : [])).join(",") : "", Fe = (0, ye.useMemo)((() => "" === Ke ? [] : Ke.split(",")), [Ke]);
          return (0, ye.useEffect)((() => {
            if (0 === Fe.length) return void Me({});
            let ee = !1;
            return Re.b.getGamesByAnalyticsIds(ie, Fe).then((ie => {
              ee || Me(ie)
            })).catch((ee => {
              console.error("Failed to load first party discoverability for the studio leaderboard", ee)
            })), () => {
              ee = !0
            }
          }), [Fe, ie]), be
        }(Qe, Me, Ne),
        ii = null !== Qe ? function(ee, ie, He, ye, be) {
          return ee.map(((ee, Me) => {
            var Ke;
            const Fe = ye + Me + 1;
            if ("customGame" === ee.type) {
              const ie = ee.preview;
              return {
                key: ie.schematicId,
                position: Fe,
                thumbnail: (0, Ze.jsx)(fe.d, {
                  game: ie
                }),
                name: ie.name,
                owner: ee.owner,
                category: ie.gameCategory,
                ccu: ie.ccu,
                favourites: ie.favourites,
                discoverability: (0, ke.j)(ie) ? ie : null,
                url: (0, te.s)((0, Ue.b)(ie.schematicId))
              }
            }
            const Je = ee.gameNameWithVariation,
              oe = (0, Ue.c)(Je, !0);
            return {
              key: Je,
              position: Fe,
              thumbnail: (0, Ze.jsx)(de.b, {
                game: Je
              }),
              name: (0, te.o)(Je, be),
              owner: null,
              category: (0, te.h)(Je),
              ccu: (0, Oe.e)(Je, ie),
              favourites: null,
              discoverability: null !== (Ke = He[oe]) && void 0 !== Ke ? Ke : null,
              url: (0, te.s)(oe)
            }
          }))
        }(Qe, ae, ei, (Se - 1) * De, He) : [],
        Hi = !se && null === ne,
        yi = !Hi && !se && 0 === ii.length,
        bi = null !== (ie = null === ne || void 0 === ne ? void 0 : ne.totalPages) && void 0 !== ie ? ie : 1;
      return (0, Ze.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, Ze.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Ze.jsx)("h1", {
            className: "StudioPageTitle",
            children: He("studio:leaderboard")
          })
        }), (0, Ze.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!re && (0, Ze.jsx)("div", {
            children: He("studio:leaderboardBanner")
          }), re && (0, Ze.jsx)("div", {
            children: He("studio:leaderboardDormantBanner")
          }), (0, Ze.jsx)("div", {
            children: He("studio:leaderboardMetricsBanner", {
              days: Ve
            })
          })]
        }), Ne && (0, Ze.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: we.map((ee => (0, Ze.jsx)(pe.M, {
            active: ue === ee.scope,
            onClick: () => {
              he({
                scope: ee.scope,
                category: le,
                page: 1
              })
            },
            children: He(ee.title)
          }, ee.scope)))
        }), (0, Ze.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, Ze.jsx)(pe.M, {
            active: null === le,
            onClick: () => {
              he({
                scope: ue,
                category: null,
                page: 1
              })
            },
            children: He("studio:leaderboardAllCategories")
          }), Ke.Y.map((ee => (0, Ze.jsx)(pe.M, {
            active: le === ee,
            onClick: () => {
              he({
                scope: ue,
                category: ee,
                page: 1
              })
            },
            children: (0, Ke.lb)(ee)
          }, ee)))]
        }), Hi && (0, Ze.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Ze.jsx)(Be.b, {})
        }), se && (0, Ze.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: He("studio:failedToLoadLeaderboard")
        }), yi && (0, Ze.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: He("studio:leaderboardEmpty")
        }), !Hi && !se && !yi && (0, Ze.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, Ze.jsx)(ze.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: He("general:game")
            }, {
              key: "owner",
              header: He("general:owner")
            }, ...null === le ? [{
              key: "category",
              header: He("general:category")
            }] : [], ...Ne ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: He("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: He("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: He("studio:leaderboardSessionsPerPlayer")
            }, ...re ? [] : [{
              key: "ccu",
              header: He("studio:metricCcu")
            }], {
              key: "favourites",
              header: He("general:favourites")
            }],
            rows: ii,
            getRowKey: ee => ee.key,
            renderRow: ee => (0, Ze.jsxs)("tr", {
              onClick: () => {
                be(ee.url)
              },
              children: [(0, Ze.jsx)(ce, {
                position: ee.position
              }), (0, Ze.jsx)("td", {
                children: (0, Ze.jsx)(de.e, {
                  thumbnail: ee.thumbnail,
                  name: ee.name
                })
              }), (0, Ze.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === ee.owner && "-", null !== ee.owner && (0, Ze.jsx)(Te.h, {
                  playerSocialPreview: ee.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === le && (0, Ze.jsx)("td", {
                children: (0, Ke.lb)(ee.category)
              }), Ne && (0, Ze.jsx)(Le, {
                discoverability: ee.discoverability
              }), (0, Ze.jsx)(xe, {
                discoverability: ee.discoverability
              }), !re && (0, Ze.jsx)("td", {
                children: null !== ee.ccu ? (0, Fe.P)(ee.ccu) : "-"
              }), (0, Ze.jsx)("td", {
                children: null !== ee.favourites ? (0, Fe.P)(ee.favourites) : "-"
              })]
            })
          })
        }), !se && (0, Ze.jsx)(Xe.d, {
          className: "AnimFadeIn",
          page: Se,
          totalPages: bi,
          onSetPage: ee => {
            he({
              scope: ue,
              category: le,
              page: ee
            })
          }
        })]
      })
    }
  },
  5395: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      e: () => Me
    });
    var ye = He(1536),
      be = He(1228);

    function Me(ee) {
      let {
        thumbnail: ie,
        name: He
      } = ee;
      return (0, be.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, be.jsx)("div", {
          className: "StudioTableThumbnail",
          children: ie
        }), (0, be.jsx)("span", {
          className: "StudioTableGameName",
          children: He
        })]
      })
    }

    function Ke(ee) {
      let {
        game: ie
      } = ee;
      return (0, be.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, ye.l)(ie),
        alt: ""
      })
    }
  },
  7021: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye
    });
    const ye = {
      1: He(7025),
      2: He(7027),
      3: He(7029)
    }
  },
  5390: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1228);

    function Ue(ee) {
      let {
        columns: ie,
        rows: He,
        getRowKey: be,
        renderRow: Ue,
        className: Fe
      } = ee;
      return (0, Ke.jsxs)("table", {
        className: Me()("Table", Fe),
        children: [(0, Ke.jsx)("thead", {
          children: (0, Ke.jsx)("tr", {
            children: ie.map((ee => (0, Ke.jsx)("th", {
              children: ee.header
            }, ee.key)))
          })
        }), (0, Ke.jsx)("tbody", {
          children: He.map((ee => (0, Ke.jsx)(ye.Fragment, {
            children: Ue(ee)
          }, be(ee))))
        })]
      })
    }
  },
  5382: () => {},
  7025: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  7027: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  7029: ee => {
    ee.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);