export const id = 117;
export const ids = [117];
export const modules = {
  5691: (dd, Od, md) => {
    md.d(Od, {
      e: () => od
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(1443),
      Xd = md(1436),
      Kd = md(4734),
      hd = md(151),
      vd = md(4776),
      Qd = md(4767),
      td = md(1341);

    function od(dd) {
      let {
        game: Od
      } = dd;
      const md = (0, hd.is99NightsCrazyGamesBundle)() ? "large" : "small",
        Wd = (0, vd.i)(Od, md),
        od = (0, Kd.g)(Wd),
        Nd = void 0 !== od.blurhash;
      return (0, td.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [od.isLoading && !Nd && (0, td.jsx)(Xd.c, {
          loaderType: "Secondary"
        }), !od.failed && (null !== od.src || Nd) && (0, td.jsx)("div", {
          className: Fd()("SchematicImage", Qd.j, {
            SchematicImageFadeIn: od.fadeIn && !Nd
          }),
          style: (0, Qd.g)(od),
          children: (0, td.jsx)(Qd.e, {
            image: od
          })
        }), od.failed && (0, td.jsx)("div", {
          className: "SchematicImageError",
          children: (0, td.jsx)(Rd.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  7468: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Pd
    });
    md(5687);
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(387),
      Kd = md(1135),
      hd = md(1286),
      vd = md(1113),
      Qd = md(1238),
      td = md(1627),
      od = md(4789),
      Nd = md(1186),
      qd = md(5691),
      Hd = md(3662),
      yd = md(1572),
      bd = md(5232),
      Td = md(5693),
      pd = md(1436),
      Yd = md(1641),
      gd = md(5223),
      wd = md(3544),
      Ed = md(5700),
      Jd = md(7339),
      Ud = md(1666),
      xd = md(1341);
    const Bd = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      Sd = 25,
      sd = "scope",
      ud = "category",
      Vd = "customGames";
    const Ad = 7,
      rd = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function Gd(dd) {
      let {
        position: Od
      } = dd;
      const md = Jd.b[Od];
      return (0, xd.jsxs)("td", {
        className: Rd()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== md,
          [`StudioLeaderboardTopPosition${Od}`]: void 0 !== md
        }),
        children: [void 0 !== md && (0, xd.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: md,
          alt: ""
        }), Od]
      })
    }

    function nd(dd) {
      let {
        discoverability: Od
      } = dd;
      const {
        playsPerDay: md,
        avgPlaytimeMinutes: Fd,
        retention: Rd
      } = null === Od ? rd : (0, od.j)(Od);
      return (0, xd.jsxs)(Wd.Fragment, {
        children: [(0, xd.jsx)("td", {
          children: null !== md ? (0, od.e)(md) : "-"
        }), (0, xd.jsx)("td", {
          children: null !== Fd ? (0, od.f)(Fd) : "-"
        }), (0, xd.jsx)("td", {
          children: null !== Rd ? (0, od.g)(Rd) : "-"
        })]
      })
    }

    function Ld(dd) {
      let {
        discoverability: Od
      } = dd;
      return (0, xd.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === Od || void 0 === Od ? void 0 : Od.engagementScore) ? (0, hd.M)(Math.round(Od.engagementScore)) : "-"
      })
    }

    function Pd() {
      var dd, Od;
      const {
        t: md
      } = (0, Qd.G)(), Fd = (0, Yd.useNavigatePreserveSearch)(), {
        userContext: Rd,
        isUserContextUpdating: Jd
      } = (0, Nd.d)(), rd = (0, wd.n)(), [Pd, zd] = (0, gd.k)(), cd = (jd = Pd.get(sd), Bd.some((dd => dd.scope === jd)) ? jd : Vd);
      var jd;
      const Dd = function(dd) {
          return Xd.V.includes(dd) ? dd : null
        }(Pd.get(ud)),
        ed = (0, gd.e)(Pd.get(gd.d)),
        [Id, ld] = (0, Wd.useState)(null),
        [Cd, Zd] = (0, Wd.useState)(!1);

      function kd(dd) {
        zd((Od => {
          (0, gd.g)(Od, sd, dd.scope === Vd ? null : dd.scope), (0, gd.g)(Od, ud, dd.category), (0, gd.j)(Od, dd.page)
        }))
      }
      const fd = !Jd && Rd.playerHasRank("developer"),
        Md = fd && "allGames" === cd,
        dO = fd && "dormantGames" === cd;
      (0, Wd.useEffect)((() => {
        if (Jd) return;
        let dd = !1;
        return ld(null), Zd(!1), td.e.getPublishedGamePreviews(Rd, {
          searchQuery: null,
          pageNumber: ed,
          pageSize: Sd,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== Dd ? [Dd] : [],
          upAndComing: !1,
          dormantGames: dO,
          sortByEngagementScore: !0,
          firstPartyGameNames: Md ? vd.d : void 0,
          includeOwners: !0
        }).then((Od => {
          dd || ld(Od)
        })).catch((Od => {
          console.error("Failed to load the studio leaderboard", Od), dd || Zd(!0)
        })), () => {
          dd = !0
        }
      }), [Jd, Md, dO, Dd, ed, Rd]);
      const OO = null !== (dd = null === Id || void 0 === Id ? void 0 : Id.results) && void 0 !== dd ? dd : null,
        mO = function(dd, Od, md) {
          const [Fd, Rd] = (0, Wd.useState)({}), Xd = md ? (null !== dd && void 0 !== dd ? dd : []).flatMap((dd => "firstPartyGame" === dd.type ? [(0, Kd.h)(dd.gameNameWithVariation, !0)] : [])).join(",") : "", hd = (0, Wd.useMemo)((() => "" === Xd ? [] : Xd.split(",")), [Xd]);
          return (0, Wd.useEffect)((() => {
            if (0 === hd.length) return void Rd({});
            let dd = !1;
            return td.e.getGamesByAnalyticsIds(Od, hd).then((Od => {
              dd || Rd(Od)
            })).catch((dd => {
              console.error("Failed to load first party discoverability for the studio leaderboard", dd)
            })), () => {
              dd = !0
            }
          }), [hd, Od]), Fd
        }(OO, Rd, fd),
        WO = null !== OO ? function(dd, Od, md, Wd, Fd) {
          return dd.map(((dd, Rd) => {
            var Xd;
            const hd = Wd + Rd + 1;
            if ("customGame" === dd.type) {
              const Od = dd.preview;
              return {
                key: Od.schematicId,
                position: hd,
                thumbnail: (0, xd.jsx)(qd.e, {
                  game: Od
                }),
                name: Od.name,
                owner: dd.owner,
                category: Od.gameCategory,
                ccu: Od.ccu,
                favourites: Od.favourites,
                discoverability: (0, od.l)(Od) ? Od : null,
                url: (0, Ud.q)((0, Kd.e)(Od.schematicId))
              }
            }
            const vd = dd.gameNameWithVariation,
              Qd = (0, Kd.h)(vd, !0);
            return {
              key: vd,
              position: hd,
              thumbnail: (0, xd.jsx)(Ed.b, {
                game: vd
              }),
              name: (0, Ud.o)(vd, Fd),
              owner: null,
              category: (0, Ud.g)(vd),
              ccu: (0, wd.e)(vd, Od),
              favourites: null,
              discoverability: null !== (Xd = md[Qd]) && void 0 !== Xd ? Xd : null,
              url: (0, Ud.q)(Qd)
            }
          }))
        }(OO, rd, mO, (ed - 1) * Sd, md) : [],
        FO = !Cd && null === Id,
        RO = !FO && !Cd && 0 === WO.length,
        XO = null !== (Od = null === Id || void 0 === Id ? void 0 : Id.totalPages) && void 0 !== Od ? Od : 1;
      return (0, xd.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, xd.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, xd.jsx)("h1", {
            className: "StudioPageTitle",
            children: md("studio:leaderboard")
          })
        }), (0, xd.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!dO && (0, xd.jsx)("div", {
            children: md("studio:leaderboardBanner")
          }), dO && (0, xd.jsx)("div", {
            children: md("studio:leaderboardDormantBanner")
          }), (0, xd.jsx)("div", {
            children: md("studio:leaderboardMetricsBanner", {
              days: Ad
            })
          })]
        }), fd && (0, xd.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Bd.map((dd => (0, xd.jsx)(yd.S, {
            active: cd === dd.scope,
            onClick: () => {
              kd({
                scope: dd.scope,
                category: Dd,
                page: 1
              })
            },
            children: md(dd.title)
          }, dd.scope)))
        }), (0, xd.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, xd.jsx)(yd.S, {
            active: null === Dd,
            onClick: () => {
              kd({
                scope: cd,
                category: null,
                page: 1
              })
            },
            children: md("studio:leaderboardAllCategories")
          }), Xd.V.map((dd => (0, xd.jsx)(yd.S, {
            active: Dd === dd,
            onClick: () => {
              kd({
                scope: cd,
                category: dd,
                page: 1
              })
            },
            children: (0, Xd.fb)(dd)
          }, dd)))]
        }), FO && (0, xd.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, xd.jsx)(pd.c, {})
        }), Cd && (0, xd.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: md("studio:failedToLoadLeaderboard")
        }), RO && (0, xd.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: md("studio:leaderboardEmpty")
        }), !FO && !Cd && !RO && (0, xd.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, xd.jsx)(Td.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: md("general:game")
            }, {
              key: "owner",
              header: md("general:owner")
            }, ...null === Dd ? [{
              key: "category",
              header: md("general:category")
            }] : [], ...fd ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: md("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: md("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: md("studio:leaderboardSessionsPerPlayer")
            }, ...dO ? [] : [{
              key: "ccu",
              header: md("studio:metricCcu")
            }], {
              key: "favourites",
              header: md("general:favourites")
            }],
            rows: WO,
            getRowKey: dd => dd.key,
            renderRow: dd => (0, xd.jsxs)("tr", {
              onClick: () => {
                Fd(dd.url)
              },
              children: [(0, xd.jsx)(Gd, {
                position: dd.position
              }), (0, xd.jsx)("td", {
                children: (0, xd.jsx)(Ed.c, {
                  thumbnail: dd.thumbnail,
                  name: dd.name
                })
              }), (0, xd.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === dd.owner && "-", null !== dd.owner && (0, xd.jsx)(Hd.c, {
                  playerSocialPreview: dd.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === Dd && (0, xd.jsx)("td", {
                children: (0, Xd.fb)(dd.category)
              }), fd && (0, xd.jsx)(Ld, {
                discoverability: dd.discoverability
              }), (0, xd.jsx)(nd, {
                discoverability: dd.discoverability
              }), !dO && (0, xd.jsx)("td", {
                children: null !== dd.ccu ? (0, hd.M)(dd.ccu) : "-"
              }), (0, xd.jsx)("td", {
                children: null !== dd.favourites ? (0, hd.M)(dd.favourites) : "-"
              })]
            })
          })
        }), !Cd && (0, xd.jsx)(bd.e, {
          className: "AnimFadeIn",
          page: ed,
          totalPages: XO,
          onSetPage: dd => {
            kd({
              scope: cd,
              category: Dd,
              page: dd
            })
          }
        })]
      })
    }
  },
  5700: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      c: () => Rd
    });
    var Wd = md(1666),
      Fd = md(1341);

    function Rd(dd) {
      let {
        thumbnail: Od,
        name: md
      } = dd;
      return (0, Fd.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Fd.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Od
        }), (0, Fd.jsx)("span", {
          className: "StudioTableGameName",
          children: md
        })]
      })
    }

    function Xd(dd) {
      let {
        game: Od
      } = dd;
      return (0, Fd.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Wd.l)(Od),
        alt: ""
      })
    }
  },
  7339: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    const Wd = {
      1: md(7343),
      2: md(7348),
      3: md(7357)
    }
  },
  5693: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(1341);

    function Kd(dd) {
      let {
        columns: Od,
        rows: md,
        getRowKey: Fd,
        renderRow: Kd,
        className: hd
      } = dd;
      return (0, Xd.jsxs)("table", {
        className: Rd()("Table", hd),
        children: [(0, Xd.jsx)("thead", {
          children: (0, Xd.jsx)("tr", {
            children: Od.map((dd => (0, Xd.jsx)("th", {
              children: dd.header
            }, dd.key)))
          })
        }), (0, Xd.jsx)("tbody", {
          children: md.map(((dd, Od) => (0, Xd.jsx)(Wd.Fragment, {
            children: Kd(dd, Od)
          }, Fd(dd))))
        })]
      })
    }
  },
  5687: () => {},
  7343: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  7348: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  7357: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);