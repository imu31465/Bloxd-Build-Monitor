export const id = 104;
export const ids = [104];
export const modules = {
  5025: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Pp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(1060),
      Sp = cp(1361),
      xp = cp(3607),
      Lp = cp(131),
      Yp = cp(3641),
      Dp = cp(3628),
      Ap = cp(1112);

    function Pp(pp) {
      let {
        game: ip
      } = pp;
      const cp = (0, Lp.is99NightsCrazyGamesBundle)() ? "large" : "small",
        Op = (0, Yp.f)(ip, cp),
        Pp = (0, xp.d)(Op),
        Wp = void 0 !== Pp.blurhash;
      return (0, Ap.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Pp.isLoading && !Wp && (0, Ap.jsx)(Sp.c, {
          loaderType: "Secondary"
        }), !Pp.failed && (null !== Pp.src || Wp) && (0, Ap.jsx)("div", {
          className: op()("SchematicImage", Dp.g, {
            SchematicImageFadeIn: Pp.fadeIn && !Wp
          }),
          style: (0, Dp.f)(Pp),
          children: (0, Ap.jsx)(Dp.c, {
            image: Pp
          })
        }), Pp.failed && (0, Ap.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Ap.jsx)(Ip.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6652: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => fp
    });
    cp(5017);
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(322),
      xp = cp(1024),
      Lp = cp(1234),
      Yp = cp(1005),
      Dp = cp(1201),
      Ap = cp(1520),
      Pp = cp(3651),
      Wp = cp(1141),
      yp = cp(5025),
      Up = cp(2671),
      wp = cp(1480),
      vp = cp(4656),
      tp = cp(5034),
      Hp = cp(1361),
      dp = cp(1538),
      ep = cp(4653),
      jp = cp(2580),
      kp = cp(5040),
      mp = cp(6539),
      Rp = cp(1563),
      qp = cp(1112);
    const Mp = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      Cp = 25,
      Ep = "scope",
      Xp = "category",
      lp = "customGames";
    const Qp = 7,
      Jp = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function Bp(pp) {
      let {
        position: ip
      } = pp;
      const cp = mp.b[ip];
      return (0, qp.jsxs)("td", {
        className: Ip()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== cp,
          [`StudioLeaderboardTopPosition${ip}`]: void 0 !== cp
        }),
        children: [void 0 !== cp && (0, qp.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: cp,
          alt: ""
        }), ip]
      })
    }

    function Np(pp) {
      let {
        discoverability: ip
      } = pp;
      const {
        playsPerDay: cp,
        avgPlaytimeMinutes: op,
        retention: Ip
      } = null === ip ? Jp : (0, Pp.j)(ip);
      return (0, qp.jsxs)(Op.Fragment, {
        children: [(0, qp.jsx)("td", {
          children: null !== cp ? (0, Pp.b)(cp) : "-"
        }), (0, qp.jsx)("td", {
          children: null !== op ? (0, Pp.d)(op) : "-"
        }), (0, qp.jsx)("td", {
          children: null !== Ip ? (0, Pp.f)(Ip) : "-"
        })]
      })
    }

    function Tp(pp) {
      let {
        discoverability: ip
      } = pp;
      return (0, qp.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === ip || void 0 === ip ? void 0 : ip.engagementScore) ? (0, Lp.O)(Math.round(ip.engagementScore)) : "-"
      })
    }

    function fp() {
      var pp, ip;
      const {
        t: cp
      } = (0, Dp.H)(), op = (0, dp.useNavigatePreserveSearch)(), {
        userContext: Ip,
        isUserContextUpdating: mp
      } = (0, Wp.b)(), Jp = (0, jp.n)(), [fp, bp] = (0, ep.o)(), hp = (ap = fp.get(Ep), Mp.some((pp => pp.scope === ap)) ? ap : lp);
      var ap;
      const np = function(pp) {
          return Sp.$.includes(pp) ? pp : null
        }(fp.get(Xp)),
        Fp = (0, ep.e)(fp.get(ep.c)),
        [gp, Gp] = (0, Op.useState)(null),
        [rp, Zp] = (0, Op.useState)(!1);

      function zp(pp) {
        bp((ip => {
          (0, ep.g)(ip, Ep, pp.scope === lp ? null : pp.scope), (0, ep.g)(ip, Xp, pp.category), (0, ep.k)(ip, pp.page)
        }))
      }
      const sp = !mp && Ip.playerHasRank("developer"),
        Kp = sp && "allGames" === hp,
        Vp = sp && "dormantGames" === hp;
      (0, Op.useEffect)((() => {
        if (mp) return;
        let pp = !1;
        return Gp(null), Zp(!1), Ap.b.getPublishedGamePreviews(Ip, {
          searchQuery: null,
          pageNumber: Fp,
          pageSize: Cp,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== np ? [np] : [],
          upAndComing: !1,
          dormantGames: Vp,
          sortByEngagementScore: !0,
          firstPartyGameNames: Kp ? Yp.e : void 0,
          includeOwners: !0
        }).then((ip => {
          pp || Gp(ip)
        })).catch((ip => {
          console.error("Failed to load the studio leaderboard", ip), pp || Zp(!0)
        })), () => {
          pp = !0
        }
      }), [mp, Kp, Vp, np, Fp, Ip]);
      const ii = null !== (pp = null === gp || void 0 === gp ? void 0 : gp.results) && void 0 !== pp ? pp : null,
        ci = function(pp, ip, cp) {
          const [op, Ip] = (0, Op.useState)({}), Sp = cp ? (null !== pp && void 0 !== pp ? pp : []).flatMap((pp => "firstPartyGame" === pp.type ? [(0, xp.g)(pp.gameNameWithVariation, !0)] : [])).join(",") : "", Lp = (0, Op.useMemo)((() => "" === Sp ? [] : Sp.split(",")), [Sp]);
          return (0, Op.useEffect)((() => {
            if (0 === Lp.length) return void Ip({});
            let pp = !1;
            return Ap.b.getGamesByAnalyticsIds(ip, Lp).then((ip => {
              pp || Ip(ip)
            })).catch((pp => {
              console.error("Failed to load first party discoverability for the studio leaderboard", pp)
            })), () => {
              pp = !0
            }
          }), [Lp, ip]), op
        }(ii, Ip, sp),
        Oi = null !== ii ? function(pp, ip, cp, Op, op) {
          return pp.map(((pp, Ip) => {
            var Sp;
            const Lp = Op + Ip + 1;
            if ("customGame" === pp.type) {
              const ip = pp.preview;
              return {
                key: ip.schematicId,
                position: Lp,
                thumbnail: (0, qp.jsx)(yp.b, {
                  game: ip
                }),
                name: ip.name,
                owner: pp.owner,
                category: ip.gameCategory,
                ccu: ip.ccu,
                favourites: ip.favourites,
                discoverability: (0, Pp.k)(ip) ? ip : null,
                url: (0, Rp.n)((0, xp.e)(ip.schematicId))
              }
            }
            const Yp = pp.gameNameWithVariation,
              Dp = (0, xp.g)(Yp, !0);
            return {
              key: Yp,
              position: Lp,
              thumbnail: (0, qp.jsx)(kp.e, {
                game: Yp
              }),
              name: (0, Rp.k)(Yp, op),
              owner: null,
              category: (0, Rp.c)(Yp),
              ccu: (0, jp.c)(Yp, ip),
              favourites: null,
              discoverability: null !== (Sp = cp[Dp]) && void 0 !== Sp ? Sp : null,
              url: (0, Rp.n)(Dp)
            }
          }))
        }(ii, Jp, ci, (Fp - 1) * Cp, cp) : [],
        oi = !rp && null === gp,
        Ii = !oi && !rp && 0 === Oi.length,
        Si = null !== (ip = null === gp || void 0 === gp ? void 0 : gp.totalPages) && void 0 !== ip ? ip : 1;
      return (0, qp.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, qp.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, qp.jsx)("h1", {
            className: "StudioPageTitle",
            children: cp("studio:leaderboard")
          })
        }), (0, qp.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!Vp && (0, qp.jsx)("div", {
            children: cp("studio:leaderboardBanner")
          }), Vp && (0, qp.jsx)("div", {
            children: cp("studio:leaderboardDormantBanner")
          }), (0, qp.jsx)("div", {
            children: cp("studio:leaderboardMetricsBanner", {
              days: Qp
            })
          })]
        }), sp && (0, qp.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Mp.map((pp => (0, qp.jsx)(wp.S, {
            active: hp === pp.scope,
            onClick: () => {
              zp({
                scope: pp.scope,
                category: np,
                page: 1
              })
            },
            children: cp(pp.title)
          }, pp.scope)))
        }), (0, qp.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, qp.jsx)(wp.S, {
            active: null === np,
            onClick: () => {
              zp({
                scope: hp,
                category: null,
                page: 1
              })
            },
            children: cp("studio:leaderboardAllCategories")
          }), Sp.$.map((pp => (0, qp.jsx)(wp.S, {
            active: np === pp,
            onClick: () => {
              zp({
                scope: hp,
                category: pp,
                page: 1
              })
            },
            children: (0, Sp.nb)(pp)
          }, pp)))]
        }), oi && (0, qp.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, qp.jsx)(Hp.c, {})
        }), rp && (0, qp.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: cp("studio:failedToLoadLeaderboard")
        }), Ii && (0, qp.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: cp("studio:leaderboardEmpty")
        }), !oi && !rp && !Ii && (0, qp.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, qp.jsx)(tp.d, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: cp("general:game")
            }, {
              key: "owner",
              header: cp("general:owner")
            }, ...null === np ? [{
              key: "category",
              header: cp("general:category")
            }] : [], ...sp ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: cp("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: cp("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: cp("studio:leaderboardSessionsPerPlayer")
            }, ...Vp ? [] : [{
              key: "ccu",
              header: cp("studio:metricCcu")
            }], {
              key: "favourites",
              header: cp("general:favourites")
            }],
            rows: Oi,
            getRowKey: pp => pp.key,
            renderRow: pp => (0, qp.jsxs)("tr", {
              onClick: () => {
                op(pp.url)
              },
              children: [(0, qp.jsx)(Bp, {
                position: pp.position
              }), (0, qp.jsx)("td", {
                children: (0, qp.jsx)(kp.h, {
                  thumbnail: pp.thumbnail,
                  name: pp.name
                })
              }), (0, qp.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === pp.owner && "-", null !== pp.owner && (0, qp.jsx)(Up.d, {
                  playerSocialPreview: pp.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === np && (0, qp.jsx)("td", {
                children: (0, Sp.nb)(pp.category)
              }), sp && (0, qp.jsx)(Tp, {
                discoverability: pp.discoverability
              }), (0, qp.jsx)(Np, {
                discoverability: pp.discoverability
              }), !Vp && (0, qp.jsx)("td", {
                children: null !== pp.ccu ? (0, Lp.O)(pp.ccu) : "-"
              }), (0, qp.jsx)("td", {
                children: null !== pp.favourites ? (0, Lp.O)(pp.favourites) : "-"
              })]
            })
          })
        }), !rp && (0, qp.jsx)(vp.d, {
          className: "AnimFadeIn",
          page: Fp,
          totalPages: Si,
          onSetPage: pp => {
            zp({
              scope: hp,
              category: np,
              page: pp
            })
          }
        })]
      })
    }
  },
  5040: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      h: () => Ip
    });
    var Op = cp(1563),
      op = cp(1112);

    function Ip(pp) {
      let {
        thumbnail: ip,
        name: cp
      } = pp;
      return (0, op.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, op.jsx)("div", {
          className: "StudioTableThumbnail",
          children: ip
        }), (0, op.jsx)("span", {
          className: "StudioTableGameName",
          children: cp
        })]
      })
    }

    function Sp(pp) {
      let {
        game: ip
      } = pp;
      return (0, op.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Op.h)(ip),
        alt: ""
      })
    }
  },
  6539: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    const Op = {
      1: cp(6546),
      2: cp(6551),
      3: cp(6557)
    }
  },
  5034: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => xp
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(1112);

    function xp(pp) {
      let {
        columns: ip,
        rows: cp,
        getRowKey: op,
        renderRow: xp,
        className: Lp
      } = pp;
      return (0, Sp.jsxs)("table", {
        className: Ip()("Table", Lp),
        children: [(0, Sp.jsx)("thead", {
          children: (0, Sp.jsx)("tr", {
            children: ip.map((pp => (0, Sp.jsx)("th", {
              children: pp.header
            }, pp.key)))
          })
        }), (0, Sp.jsx)("tbody", {
          children: cp.map((pp => (0, Sp.jsx)(Op.Fragment, {
            children: xp(pp)
          }, op(pp))))
        })]
      })
    }
  },
  5017: () => {},
  6546: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6551: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6557: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);