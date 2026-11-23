export const id = 102;
export const ids = [102];
export const modules = {
  4911: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Zk
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(1066),
      yk = Ik(1318),
      lk = Ik(3442),
      ak = Ik(129),
      qk = Ik(3488),
      Lk = Ik(3475),
      tk = Ik(1096);

    function Zk(kk) {
      let {
        game: Fk
      } = kk;
      const Ik = (0, ak.p)() ? "large" : "small",
        Xk = (0, qk.h)(Fk, Ik),
        Zk = (0, lk.e)(Xk),
        jk = void 0 !== Zk.blurhash;
      return (0, tk.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Zk.isLoading && !jk && (0, tk.jsx)(yk.c, {
          loaderType: "Secondary"
        }), !Zk.failed && (null !== Zk.src || jk) && (0, tk.jsx)("div", {
          className: Tk()("SchematicImage", Lk.g, {
            SchematicImageFadeIn: Zk.fadeIn && !jk
          }),
          style: (0, Lk.f)(Zk),
          children: (0, tk.jsx)(Lk.d, {
            image: Zk
          })
        }), Zk.failed && (0, tk.jsx)("div", {
          className: "SchematicImageError",
          children: (0, tk.jsx)(ik.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6506: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => Nk
    });
    Ik(4903);
    var Xk = Ik(58),
      Tk = Ik(1055),
      ik = Ik.n(Tk),
      yk = Ik(318),
      lk = Ik(1023),
      ak = Ik(1217),
      qk = Ik(1016),
      Lk = Ik(1179),
      tk = Ik(1453),
      Zk = Ik(3498),
      jk = Ik(1118),
      ek = Ik(4911),
      wk = Ik(2525),
      Hk = Ik(1406),
      Jk = Ik(4556),
      xk = Ik(4914),
      Pk = Ik(1318),
      Kk = Ik(1475),
      Qk = Ik(4550),
      sk = Ik(2438),
      Vk = Ik(4922),
      zk = Ik(6419),
      Sk = Ik(1504),
      vk = Ik(1096);
    const Ek = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      Ok = 25,
      nk = "scope",
      Gk = "category",
      pk = "customGames";
    const uk = 7,
      bk = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function Rk(kk) {
      let {
        position: Fk
      } = kk;
      const Ik = zk.e[Fk];
      return (0, vk.jsxs)("td", {
        className: ik()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== Ik,
          [`StudioLeaderboardTopPosition${Fk}`]: void 0 !== Ik
        }),
        children: [void 0 !== Ik && (0, vk.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: Ik,
          alt: ""
        }), Fk]
      })
    }

    function Uk(kk) {
      let {
        discoverability: Fk
      } = kk;
      const {
        playsPerDay: Ik,
        avgPlaytimeMinutes: Tk,
        retention: ik
      } = null === Fk ? bk : (0, Zk.i)(Fk);
      return (0, vk.jsxs)(Xk.Fragment, {
        children: [(0, vk.jsx)("td", {
          children: null !== Ik ? (0, Zk.d)(Ik) : "-"
        }), (0, vk.jsx)("td", {
          children: null !== Tk ? (0, Zk.f)(Tk) : "-"
        }), (0, vk.jsx)("td", {
          children: null !== ik ? (0, Zk.g)(ik) : "-"
        })]
      })
    }

    function Ck(kk) {
      let {
        discoverability: Fk
      } = kk;
      return (0, vk.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === Fk || void 0 === Fk ? void 0 : Fk.engagementScore) ? (0, ak.Q)(Math.round(Fk.engagementScore)) : "-"
      })
    }

    function Nk() {
      var kk, Fk;
      const {
        t: Ik
      } = (0, Lk.y)(), Tk = (0, Kk.useNavigatePreserveSearch)(), {
        userContext: ik,
        isUserContextUpdating: zk
      } = (0, jk.d)(), bk = (0, sk.l)(), [Nk, ck] = (0, Qk.k)(), Wk = (fk = Nk.get(nk), Ek.some((kk => kk.scope === fk)) ? fk : pk);
      var fk;
      const Bk = function(kk) {
          return yk.W.includes(kk) ? kk : null
        }(Nk.get(Gk)),
        dk = (0, Qk.f)(Nk.get(Qk.b)),
        [Yk, Ak] = (0, Xk.useState)(null),
        [gk, mk] = (0, Xk.useState)(!1);

      function hk(kk) {
        ck((Fk => {
          (0, Qk.g)(Fk, nk, kk.scope === pk ? null : kk.scope), (0, Qk.g)(Fk, Gk, kk.category), (0, Qk.i)(Fk, kk.page)
        }))
      }
      const rk = !zk && ik.playerHasRank("developer"),
        Dk = rk && "allGames" === Wk,
        Mk = rk && "dormantGames" === Wk;
      (0, Xk.useEffect)((() => {
        if (zk) return;
        let kk = !1;
        return Ak(null), mk(!1), tk.e.getPublishedGamePreviews(ik, {
          searchQuery: null,
          pageNumber: dk,
          pageSize: Ok,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== Bk ? [Bk] : [],
          upAndComing: !1,
          dormantGames: Mk,
          sortByEngagementScore: !0,
          firstPartyGameNames: Dk ? qk.e : void 0,
          includeOwners: !0
        }).then((Fk => {
          kk || Ak(Fk)
        })).catch((Fk => {
          console.error("Failed to load the studio leaderboard", Fk), kk || mk(!0)
        })), () => {
          kk = !0
        }
      }), [zk, Dk, Mk, Bk, dk, ik]);
      const kF = null !== (kk = null === Yk || void 0 === Yk ? void 0 : Yk.results) && void 0 !== kk ? kk : null,
        FF = function(kk, Fk, Ik) {
          const [Tk, ik] = (0, Xk.useState)({}), yk = Ik ? (null !== kk && void 0 !== kk ? kk : []).flatMap((kk => "firstPartyGame" === kk.type ? [(0, lk.d)(kk.gameNameWithVariation, !0)] : [])).join(",") : "", ak = (0, Xk.useMemo)((() => "" === yk ? [] : yk.split(",")), [yk]);
          return (0, Xk.useEffect)((() => {
            if (0 === ak.length) return void ik({});
            let kk = !1;
            return tk.e.getGamesByAnalyticsIds(Fk, ak).then((Fk => {
              kk || ik(Fk)
            })).catch((kk => {
              console.error("Failed to load first party discoverability for the studio leaderboard", kk)
            })), () => {
              kk = !0
            }
          }), [ak, Fk]), Tk
        }(kF, ik, rk),
        IF = null !== kF ? function(kk, Fk, Ik, Xk, Tk) {
          return kk.map(((kk, ik) => {
            var yk;
            const ak = Xk + ik + 1;
            if ("customGame" === kk.type) {
              const Fk = kk.preview;
              return {
                key: Fk.schematicId,
                position: ak,
                thumbnail: (0, vk.jsx)(ek.b, {
                  game: Fk
                }),
                name: Fk.name,
                owner: kk.owner,
                category: Fk.gameCategory,
                ccu: Fk.ccu,
                favourites: Fk.favourites,
                discoverability: (0, Zk.j)(Fk) ? Fk : null,
                url: (0, Sk.m)((0, lk.c)(Fk.schematicId))
              }
            }
            const qk = kk.gameNameWithVariation,
              Lk = (0, lk.d)(qk, !0);
            return {
              key: qk,
              position: ak,
              thumbnail: (0, vk.jsx)(Vk.c, {
                game: qk
              }),
              name: (0, Sk.k)(qk, Tk),
              owner: null,
              category: (0, Sk.c)(qk),
              ccu: (0, sk.b)(qk, Fk),
              favourites: null,
              discoverability: null !== (yk = Ik[Lk]) && void 0 !== yk ? yk : null,
              url: (0, Sk.m)(Lk)
            }
          }))
        }(kF, bk, FF, (dk - 1) * Ok, Ik) : [],
        XF = !gk && null === Yk,
        TF = !XF && !gk && 0 === IF.length,
        iF = null !== (Fk = null === Yk || void 0 === Yk ? void 0 : Yk.totalPages) && void 0 !== Fk ? Fk : 1;
      return (0, vk.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, vk.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, vk.jsx)("h1", {
            className: "StudioPageTitle",
            children: Ik("studio:leaderboard")
          })
        }), (0, vk.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!Mk && (0, vk.jsx)("div", {
            children: Ik("studio:leaderboardBanner")
          }), Mk && (0, vk.jsx)("div", {
            children: Ik("studio:leaderboardDormantBanner")
          }), (0, vk.jsx)("div", {
            children: Ik("studio:leaderboardMetricsBanner", {
              days: uk
            })
          })]
        }), rk && (0, vk.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Ek.map((kk => (0, vk.jsx)(Hk.Q, {
            active: Wk === kk.scope,
            onClick: () => {
              hk({
                scope: kk.scope,
                category: Bk,
                page: 1
              })
            },
            children: Ik(kk.title)
          }, kk.scope)))
        }), (0, vk.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, vk.jsx)(Hk.Q, {
            active: null === Bk,
            onClick: () => {
              hk({
                scope: Wk,
                category: null,
                page: 1
              })
            },
            children: Ik("studio:leaderboardAllCategories")
          }), yk.W.map((kk => (0, vk.jsx)(Hk.Q, {
            active: Bk === kk,
            onClick: () => {
              hk({
                scope: Wk,
                category: kk,
                page: 1
              })
            },
            children: (0, yk.eb)(kk)
          }, kk)))]
        }), XF && (0, vk.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, vk.jsx)(Pk.c, {})
        }), gk && (0, vk.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Ik("studio:failedToLoadLeaderboard")
        }), TF && (0, vk.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Ik("studio:leaderboardEmpty")
        }), !XF && !gk && !TF && (0, vk.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, vk.jsx)(xk.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: Ik("general:game")
            }, {
              key: "owner",
              header: Ik("general:owner")
            }, ...null === Bk ? [{
              key: "category",
              header: Ik("general:category")
            }] : [], ...rk ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: Ik("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: Ik("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: Ik("studio:leaderboardSessionsPerPlayer")
            }, ...Mk ? [] : [{
              key: "ccu",
              header: Ik("studio:metricCcu")
            }], {
              key: "favourites",
              header: Ik("general:favourites")
            }],
            rows: IF,
            getRowKey: kk => kk.key,
            renderRow: kk => (0, vk.jsxs)("tr", {
              onClick: () => {
                Tk(kk.url)
              },
              children: [(0, vk.jsx)(Rk, {
                position: kk.position
              }), (0, vk.jsx)("td", {
                children: (0, vk.jsx)(Vk.g, {
                  thumbnail: kk.thumbnail,
                  name: kk.name
                })
              }), (0, vk.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === kk.owner && "-", null !== kk.owner && (0, vk.jsx)(wk.g, {
                  playerSocialPreview: kk.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === Bk && (0, vk.jsx)("td", {
                children: (0, yk.eb)(kk.category)
              }), rk && (0, vk.jsx)(Ck, {
                discoverability: kk.discoverability
              }), (0, vk.jsx)(Uk, {
                discoverability: kk.discoverability
              }), !Mk && (0, vk.jsx)("td", {
                children: null !== kk.ccu ? (0, ak.Q)(kk.ccu) : "-"
              }), (0, vk.jsx)("td", {
                children: null !== kk.favourites ? (0, ak.Q)(kk.favourites) : "-"
              })]
            })
          })
        }), !gk && (0, vk.jsx)(Jk.e, {
          className: "AnimFadeIn",
          page: dk,
          totalPages: iF,
          onSetPage: kk => {
            hk({
              scope: Wk,
              category: Bk,
              page: kk
            })
          }
        })]
      })
    }
  },
  4922: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      g: () => ik
    });
    var Xk = Ik(1504),
      Tk = Ik(1096);

    function ik(kk) {
      let {
        thumbnail: Fk,
        name: Ik
      } = kk;
      return (0, Tk.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Tk.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Fk
        }), (0, Tk.jsx)("span", {
          className: "StudioTableGameName",
          children: Ik
        })]
      })
    }

    function yk(kk) {
      let {
        game: Fk
      } = kk;
      return (0, Tk.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Xk.g)(Fk),
        alt: ""
      })
    }
  },
  6419: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    const Xk = {
      1: Ik(6422),
      2: Ik(6428),
      3: Ik(6433)
    }
  },
  4914: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk
    });
    var Xk = Ik(58),
      Tk = Ik(1055),
      ik = Ik.n(Tk),
      yk = Ik(1096);

    function lk(kk) {
      let {
        columns: Fk,
        rows: Ik,
        getRowKey: Tk,
        renderRow: lk,
        className: ak
      } = kk;
      return (0, yk.jsxs)("table", {
        className: ik()("Table", ak),
        children: [(0, yk.jsx)("thead", {
          children: (0, yk.jsx)("tr", {
            children: Fk.map((kk => (0, yk.jsx)("th", {
              children: kk.header
            }, kk.key)))
          })
        }), (0, yk.jsx)("tbody", {
          children: Ik.map((kk => (0, yk.jsx)(Xk.Fragment, {
            children: lk(kk)
          }, Tk(kk))))
        })]
      })
    }
  },
  4903: () => {},
  6422: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6428: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6433: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);