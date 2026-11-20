export const id = 101;
export const ids = [101];
export const modules = {
  4739: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Wq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(1025),
      mq = gq(1326),
      xq = gq(3383),
      Aq = gq(136),
      cq = gq(3428),
      uq = gq(3416),
      Bq = gq(1070);

    function Wq(qq) {
      let {
        game: Eq
      } = qq;
      const gq = (0, Aq.i)() ? "large" : "small",
        Yq = (0, cq.e)(Eq, gq),
        Wq = (0, xq.e)(Yq),
        Nq = void 0 !== Wq.blurhash;
      return (0, Bq.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Wq.isLoading && !Nq && (0, Bq.jsx)(mq.e, {
          loaderType: "Secondary"
        }), !Wq.failed && (null !== Wq.src || Nq) && (0, Bq.jsx)("div", {
          className: lq()("SchematicImage", uq.i, {
            SchematicImageFadeIn: Wq.fadeIn && !Nq
          }),
          style: (0, uq.e)(Wq),
          children: (0, Bq.jsx)(uq.d, {
            image: Wq
          })
        }), Wq.failed && (0, Bq.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Bq.jsx)(Oq.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6381: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => Gq
    });
    gq(4735);
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(296),
      xq = gq(997),
      Aq = gq(1214),
      cq = gq(985),
      uq = gq(1183),
      Bq = gq(1477),
      Wq = gq(3438),
      Nq = gq(1101),
      aq = gq(4739),
      Vq = gq(2517),
      dq = gq(1422),
      jq = gq(4393),
      Hq = gq(4748),
      oq = gq(1326),
      Pq = gq(1498),
      Qq = gq(4387),
      yq = gq(2470),
      tq = gq(4753),
      rq = gq(6291),
      vq = gq(1529),
      hq = gq(1070);
    const nq = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      bq = 25,
      iq = "scope",
      Zq = "category",
      fq = "customGames";
    const Mq = 7,
      Tq = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function zq(qq) {
      let {
        position: Eq
      } = qq;
      const gq = rq.d[Eq];
      return (0, hq.jsxs)("td", {
        className: Oq()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== gq,
          [`StudioLeaderboardTopPosition${Eq}`]: void 0 !== gq
        }),
        children: [void 0 !== gq && (0, hq.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: gq,
          alt: ""
        }), Eq]
      })
    }

    function Sq(qq) {
      let {
        discoverability: Eq
      } = qq;
      const {
        playsPerDay: gq,
        avgPlaytimeMinutes: lq,
        retention: Oq
      } = null === Eq ? Tq : (0, Wq.j)(Eq);
      return (0, hq.jsxs)(Yq.Fragment, {
        children: [(0, hq.jsx)("td", {
          children: null !== gq ? (0, Wq.e)(gq) : "-"
        }), (0, hq.jsx)("td", {
          children: null !== lq ? (0, Wq.f)(lq) : "-"
        }), (0, hq.jsx)("td", {
          children: null !== Oq ? (0, Wq.i)(Oq) : "-"
        })]
      })
    }

    function pq(qq) {
      let {
        discoverability: Eq
      } = qq;
      return (0, hq.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === Eq || void 0 === Eq ? void 0 : Eq.engagementScore) ? (0, Aq.S)(Math.round(Eq.engagementScore)) : "-"
      })
    }

    function Gq() {
      var qq, Eq;
      const {
        t: gq
      } = (0, uq.v)(), lq = (0, Pq.useNavigatePreserveSearch)(), {
        userContext: Oq,
        isUserContextUpdating: rq
      } = (0, Nq.c)(), Tq = (0, yq.j)(), [Gq, Lq] = (0, Qq.k)(), Jq = (kq = Gq.get(iq), nq.some((qq => qq.scope === kq)) ? kq : fq);
      var kq;
      const Rq = function(qq) {
          return mq.T.includes(qq) ? qq : null
        }(Gq.get(Zq)),
        Uq = (0, Qq.e)(Gq.get(Qq.d)),
        [Fq, sq] = (0, Yq.useState)(null),
        [Xq, wq] = (0, Yq.useState)(!1);

      function Kq(qq) {
        Lq((Eq => {
          (0, Qq.f)(Eq, iq, qq.scope === fq ? null : qq.scope), (0, Qq.f)(Eq, Zq, qq.category), (0, Qq.g)(Eq, qq.page)
        }))
      }
      const Cq = !rq && Oq.playerHasRank("developer"),
        Iq = Cq && "allGames" === Jq,
        eq = Cq && "dormantGames" === Jq;
      (0, Yq.useEffect)((() => {
        if (rq) return;
        let qq = !1;
        return sq(null), wq(!1), Bq.e.getPublishedGamePreviews(Oq, {
          searchQuery: null,
          pageNumber: Uq,
          pageSize: bq,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== Rq ? [Rq] : [],
          upAndComing: !1,
          dormantGames: eq,
          sortByEngagementScore: !0,
          firstPartyGameNames: Iq ? cq.d : void 0,
          includeOwners: !0
        }).then((Eq => {
          qq || sq(Eq)
        })).catch((Eq => {
          console.error("Failed to load the studio leaderboard", Eq), qq || wq(!0)
        })), () => {
          qq = !0
        }
      }), [rq, Iq, eq, Rq, Uq, Oq]);
      const Dq = null !== (qq = null === Fq || void 0 === Fq ? void 0 : Fq.results) && void 0 !== qq ? qq : null,
        qE = function(qq, Eq, gq) {
          const [lq, Oq] = (0, Yq.useState)({}), mq = gq ? (null !== qq && void 0 !== qq ? qq : []).flatMap((qq => "firstPartyGame" === qq.type ? [(0, xq.d)(qq.gameNameWithVariation, !0)] : [])).join(",") : "", Aq = (0, Yq.useMemo)((() => "" === mq ? [] : mq.split(",")), [mq]);
          return (0, Yq.useEffect)((() => {
            if (0 === Aq.length) return void Oq({});
            let qq = !1;
            return Bq.e.getGamesByAnalyticsIds(Eq, Aq).then((Eq => {
              qq || Oq(Eq)
            })).catch((qq => {
              console.error("Failed to load first party discoverability for the studio leaderboard", qq)
            })), () => {
              qq = !0
            }
          }), [Aq, Eq]), lq
        }(Dq, Oq, Cq),
        EE = null !== Dq ? function(qq, Eq, gq, Yq, lq) {
          return qq.map(((qq, Oq) => {
            var mq;
            const Aq = Yq + Oq + 1;
            if ("customGame" === qq.type) {
              const Eq = qq.preview;
              return {
                key: Eq.schematicId,
                position: Aq,
                thumbnail: (0, hq.jsx)(aq.d, {
                  game: Eq
                }),
                name: Eq.name,
                owner: qq.owner,
                category: Eq.gameCategory,
                ccu: Eq.ccu,
                favourites: Eq.favourites,
                discoverability: (0, Wq.k)(Eq) ? Eq : null,
                url: (0, vq.n)((0, xq.b)(Eq.schematicId))
              }
            }
            const cq = qq.gameNameWithVariation,
              uq = (0, xq.d)(cq, !0);
            return {
              key: cq,
              position: Aq,
              thumbnail: (0, hq.jsx)(tq.c, {
                game: cq
              }),
              name: (0, vq.j)(cq, lq),
              owner: null,
              category: (0, vq.b)(cq),
              ccu: (0, yq.c)(cq, Eq),
              favourites: null,
              discoverability: null !== (mq = gq[uq]) && void 0 !== mq ? mq : null,
              url: (0, vq.n)(uq)
            }
          }))
        }(Dq, Tq, qE, (Uq - 1) * bq, gq) : [],
        gE = !Xq && null === Fq,
        YE = !gE && !Xq && 0 === EE.length,
        lE = null !== (Eq = null === Fq || void 0 === Fq ? void 0 : Fq.totalPages) && void 0 !== Eq ? Eq : 1;
      return (0, hq.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, hq.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, hq.jsx)("h1", {
            className: "StudioPageTitle",
            children: gq("studio:leaderboard")
          })
        }), (0, hq.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!eq && (0, hq.jsx)("div", {
            children: gq("studio:leaderboardBanner")
          }), eq && (0, hq.jsx)("div", {
            children: gq("studio:leaderboardDormantBanner")
          }), (0, hq.jsx)("div", {
            children: gq("studio:leaderboardMetricsBanner", {
              days: Mq
            })
          })]
        }), Cq && (0, hq.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: nq.map((qq => (0, hq.jsx)(dq.Q, {
            active: Jq === qq.scope,
            onClick: () => {
              Kq({
                scope: qq.scope,
                category: Rq,
                page: 1
              })
            },
            children: gq(qq.title)
          }, qq.scope)))
        }), (0, hq.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, hq.jsx)(dq.Q, {
            active: null === Rq,
            onClick: () => {
              Kq({
                scope: Jq,
                category: null,
                page: 1
              })
            },
            children: gq("studio:leaderboardAllCategories")
          }), mq.T.map((qq => (0, hq.jsx)(dq.Q, {
            active: Rq === qq,
            onClick: () => {
              Kq({
                scope: Jq,
                category: qq,
                page: 1
              })
            },
            children: (0, mq.eb)(qq)
          }, qq)))]
        }), gE && (0, hq.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, hq.jsx)(oq.e, {})
        }), Xq && (0, hq.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: gq("studio:failedToLoadLeaderboard")
        }), YE && (0, hq.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: gq("studio:leaderboardEmpty")
        }), !gE && !Xq && !YE && (0, hq.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, hq.jsx)(Hq.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: gq("general:game")
            }, {
              key: "owner",
              header: gq("general:owner")
            }, ...null === Rq ? [{
              key: "category",
              header: gq("general:category")
            }] : [], ...Cq ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: gq("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: gq("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: gq("studio:leaderboardSessionsPerPlayer")
            }, ...eq ? [] : [{
              key: "ccu",
              header: gq("studio:metricCcu")
            }], {
              key: "favourites",
              header: gq("general:favourites")
            }],
            rows: EE,
            getRowKey: qq => qq.key,
            renderRow: qq => (0, hq.jsxs)("tr", {
              onClick: () => {
                lq(qq.url)
              },
              children: [(0, hq.jsx)(zq, {
                position: qq.position
              }), (0, hq.jsx)("td", {
                children: (0, hq.jsx)(tq.d, {
                  thumbnail: qq.thumbnail,
                  name: qq.name
                })
              }), (0, hq.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === qq.owner && "-", null !== qq.owner && (0, hq.jsx)(Vq.h, {
                  playerSocialPreview: qq.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === Rq && (0, hq.jsx)("td", {
                children: (0, mq.eb)(qq.category)
              }), Cq && (0, hq.jsx)(pq, {
                discoverability: qq.discoverability
              }), (0, hq.jsx)(Sq, {
                discoverability: qq.discoverability
              }), !eq && (0, hq.jsx)("td", {
                children: null !== qq.ccu ? (0, Aq.S)(qq.ccu) : "-"
              }), (0, hq.jsx)("td", {
                children: null !== qq.favourites ? (0, Aq.S)(qq.favourites) : "-"
              })]
            })
          })
        }), !Xq && (0, hq.jsx)(jq.d, {
          className: "AnimFadeIn",
          page: Uq,
          totalPages: lE,
          onSetPage: qq => {
            Kq({
              scope: Jq,
              category: Rq,
              page: qq
            })
          }
        })]
      })
    }
  },
  4753: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      d: () => Oq
    });
    var Yq = gq(1529),
      lq = gq(1070);

    function Oq(qq) {
      let {
        thumbnail: Eq,
        name: gq
      } = qq;
      return (0, lq.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, lq.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Eq
        }), (0, lq.jsx)("span", {
          className: "StudioTableGameName",
          children: gq
        })]
      })
    }

    function mq(qq) {
      let {
        game: Eq
      } = qq;
      return (0, lq.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Yq.g)(Eq),
        alt: ""
      })
    }
  },
  6291: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    const Yq = {
      1: gq(6295),
      2: gq(6297),
      3: gq(6299)
    }
  },
  4748: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(1070);

    function xq(qq) {
      let {
        columns: Eq,
        rows: gq,
        getRowKey: lq,
        renderRow: xq,
        className: Aq
      } = qq;
      return (0, mq.jsxs)("table", {
        className: Oq()("Table", Aq),
        children: [(0, mq.jsx)("thead", {
          children: (0, mq.jsx)("tr", {
            children: Eq.map((qq => (0, mq.jsx)("th", {
              children: qq.header
            }, qq.key)))
          })
        }), (0, mq.jsx)("tbody", {
          children: gq.map((qq => (0, mq.jsx)(Yq.Fragment, {
            children: xq(qq)
          }, lq(qq))))
        })]
      })
    }
  },
  4735: () => {},
  6295: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6297: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6299: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);