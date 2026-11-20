export const id = 100;
export const ids = [100];
export const modules = {
  4612: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Jk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(1028),
      Xk = Bk(1288),
      bk = Bk(3309),
      wk = Bk(132),
      dk = Bk(3348),
      sk = Bk(3336),
      Vk = Bk(1069);

    function Jk(kk) {
      let {
        game: Fk
      } = kk;
      const Bk = (0, wk.h)() ? "large" : "small",
        Rk = (0, dk.e)(Fk, Bk),
        Jk = (0, bk.i)(Rk),
        Ak = void 0 !== Jk.blurhash;
      return (0, Vk.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Jk.isLoading && !Ak && (0, Vk.jsx)(Xk.b, {
          loaderType: "Secondary"
        }), !Jk.failed && (null !== Jk.src || Ak) && (0, Vk.jsx)("div", {
          className: tk()("SchematicImage", sk.g, {
            SchematicImageFadeIn: Jk.fadeIn && !Ak
          }),
          style: (0, sk.e)(Jk),
          children: (0, Vk.jsx)(sk.d, {
            image: Jk
          })
        }), Jk.failed && (0, Vk.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Vk.jsx)(ak.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6208: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => zk
    });
    Bk(4610);
    var Rk = Bk(61),
      tk = Bk(1020),
      ak = Bk.n(tk),
      Xk = Bk(279),
      bk = Bk(1004),
      wk = Bk(1173),
      dk = Bk(986),
      sk = Bk(1149),
      Vk = Bk(1441),
      Jk = Bk(3356),
      Ak = Bk(1096),
      ek = Bk(4612),
      yk = Bk(2436),
      fk = Bk(1389),
      mk = Bk(4302),
      Wk = Bk(4620),
      vk = Bk(1288),
      ik = Bk(1459),
      Yk = Bk(4299),
      Lk = Bk(2396),
      Ok = Bk(4624),
      Ek = Bk(6106),
      Sk = Bk(1484),
      Nk = Bk(1069);
    const Hk = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      uk = 25,
      Mk = "scope",
      gk = "category",
      Uk = "customGames";
    const ck = 7,
      Gk = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function Tk(kk) {
      let {
        position: Fk
      } = kk;
      const Bk = Ek.e[Fk];
      return (0, Nk.jsxs)("td", {
        className: ak()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== Bk,
          [`StudioLeaderboardTopPosition${Fk}`]: void 0 !== Bk
        }),
        children: [void 0 !== Bk && (0, Nk.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: Bk,
          alt: ""
        }), Fk]
      })
    }

    function rk(kk) {
      let {
        discoverability: Fk
      } = kk;
      const {
        playsPerDay: Bk,
        avgPlaytimeMinutes: tk,
        retention: ak
      } = null === Fk ? Gk : (0, Jk.j)(Fk);
      return (0, Nk.jsxs)(Rk.Fragment, {
        children: [(0, Nk.jsx)("td", {
          children: null !== Bk ? (0, Jk.e)(Bk) : "-"
        }), (0, Nk.jsx)("td", {
          children: null !== tk ? (0, Jk.g)(tk) : "-"
        }), (0, Nk.jsx)("td", {
          children: null !== ak ? (0, Jk.i)(ak) : "-"
        })]
      })
    }

    function Dk(kk) {
      let {
        discoverability: Fk
      } = kk;
      return (0, Nk.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === Fk || void 0 === Fk ? void 0 : Fk.engagementScore) ? (0, wk.R)(Math.round(Fk.engagementScore)) : "-"
      })
    }

    function zk() {
      var kk, Fk;
      const {
        t: Bk
      } = (0, sk.x)(), tk = (0, ik.useNavigatePreserveSearch)(), {
        userContext: ak,
        isUserContextUpdating: Ek
      } = (0, Ak.e)(), Gk = (0, Lk.p)(), [zk, Pk] = (0, Yk.o)(), hk = (qk = zk.get(Mk), Hk.some((kk => kk.scope === qk)) ? qk : Uk);
      var qk;
      const Ck = function(kk) {
          return Xk.N.includes(kk) ? kk : null
        }(zk.get(gk)),
        Zk = (0, Yk.g)(zk.get(Yk.d)),
        [pk, Kk] = (0, Rk.useState)(null),
        [xk, jk] = (0, Rk.useState)(!1);

      function lk(kk) {
        Pk((Fk => {
          (0, Yk.k)(Fk, Mk, kk.scope === Uk ? null : kk.scope), (0, Yk.k)(Fk, gk, kk.category), (0, Yk.l)(Fk, kk.page)
        }))
      }
      const nk = !Ek && ak.playerHasRank("developer"),
        Ik = nk && "allGames" === hk,
        Qk = nk && "dormantGames" === hk;
      (0, Rk.useEffect)((() => {
        if (Ek) return;
        let kk = !1;
        return Kk(null), jk(!1), Vk.b.getPublishedGamePreviews(ak, {
          searchQuery: null,
          pageNumber: Zk,
          pageSize: uk,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== Ck ? [Ck] : [],
          upAndComing: !1,
          dormantGames: Qk,
          sortByEngagementScore: !0,
          firstPartyGameNames: Ik ? dk.c : void 0,
          includeOwners: !0
        }).then((Fk => {
          kk || Kk(Fk)
        })).catch((Fk => {
          console.error("Failed to load the studio leaderboard", Fk), kk || jk(!0)
        })), () => {
          kk = !0
        }
      }), [Ek, Ik, Qk, Ck, Zk, ak]);
      const kF = null !== (kk = null === pk || void 0 === pk ? void 0 : pk.results) && void 0 !== kk ? kk : null,
        FF = function(kk, Fk, Bk) {
          const [tk, ak] = (0, Rk.useState)({}), Xk = Bk ? (null !== kk && void 0 !== kk ? kk : []).flatMap((kk => "firstPartyGame" === kk.type ? [(0, bk.f)(kk.gameNameWithVariation, !0)] : [])).join(",") : "", wk = (0, Rk.useMemo)((() => "" === Xk ? [] : Xk.split(",")), [Xk]);
          return (0, Rk.useEffect)((() => {
            if (0 === wk.length) return void ak({});
            let kk = !1;
            return Vk.b.getGamesByAnalyticsIds(Fk, wk).then((Fk => {
              kk || ak(Fk)
            })).catch((kk => {
              console.error("Failed to load first party discoverability for the studio leaderboard", kk)
            })), () => {
              kk = !0
            }
          }), [wk, Fk]), tk
        }(kF, ak, nk),
        BF = null !== kF ? function(kk, Fk, Bk, Rk, tk) {
          return kk.map(((kk, ak) => {
            var Xk;
            const wk = Rk + ak + 1;
            if ("customGame" === kk.type) {
              const Fk = kk.preview;
              return {
                key: Fk.schematicId,
                position: wk,
                thumbnail: (0, Nk.jsx)(ek.c, {
                  game: Fk
                }),
                name: Fk.name,
                owner: kk.owner,
                category: Fk.gameCategory,
                ccu: Fk.ccu,
                favourites: Fk.favourites,
                discoverability: (0, Jk.k)(Fk) ? Fk : null,
                url: (0, Sk.n)((0, bk.b)(Fk.schematicId))
              }
            }
            const dk = kk.gameNameWithVariation,
              sk = (0, bk.f)(dk, !0);
            return {
              key: dk,
              position: wk,
              thumbnail: (0, Nk.jsx)(Ok.c, {
                game: dk
              }),
              name: (0, Sk.m)(dk, tk),
              owner: null,
              category: (0, Sk.c)(dk),
              ccu: (0, Lk.e)(dk, Fk),
              favourites: null,
              discoverability: null !== (Xk = Bk[sk]) && void 0 !== Xk ? Xk : null,
              url: (0, Sk.n)(sk)
            }
          }))
        }(kF, Gk, FF, (Zk - 1) * uk, Bk) : [],
        RF = !xk && null === pk,
        tF = !RF && !xk && 0 === BF.length,
        aF = null !== (Fk = null === pk || void 0 === pk ? void 0 : pk.totalPages) && void 0 !== Fk ? Fk : 1;
      return (0, Nk.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, Nk.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Nk.jsx)("h1", {
            className: "StudioPageTitle",
            children: Bk("studio:leaderboard")
          })
        }), (0, Nk.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!Qk && (0, Nk.jsx)("div", {
            children: Bk("studio:leaderboardBanner")
          }), Qk && (0, Nk.jsx)("div", {
            children: Bk("studio:leaderboardDormantBanner")
          }), (0, Nk.jsx)("div", {
            children: Bk("studio:leaderboardMetricsBanner", {
              days: ck
            })
          })]
        }), nk && (0, Nk.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Hk.map((kk => (0, Nk.jsx)(fk.O, {
            active: hk === kk.scope,
            onClick: () => {
              lk({
                scope: kk.scope,
                category: Ck,
                page: 1
              })
            },
            children: Bk(kk.title)
          }, kk.scope)))
        }), (0, Nk.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, Nk.jsx)(fk.O, {
            active: null === Ck,
            onClick: () => {
              lk({
                scope: hk,
                category: null,
                page: 1
              })
            },
            children: Bk("studio:leaderboardAllCategories")
          }), Xk.N.map((kk => (0, Nk.jsx)(fk.O, {
            active: Ck === kk,
            onClick: () => {
              lk({
                scope: hk,
                category: kk,
                page: 1
              })
            },
            children: (0, Xk.cb)(kk)
          }, kk)))]
        }), RF && (0, Nk.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Nk.jsx)(vk.b, {})
        }), xk && (0, Nk.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Bk("studio:failedToLoadLeaderboard")
        }), tF && (0, Nk.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Bk("studio:leaderboardEmpty")
        }), !RF && !xk && !tF && (0, Nk.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, Nk.jsx)(Wk.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: Bk("general:game")
            }, {
              key: "owner",
              header: Bk("general:owner")
            }, ...null === Ck ? [{
              key: "category",
              header: Bk("general:category")
            }] : [], ...nk ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: Bk("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: Bk("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: Bk("studio:leaderboardSessionsPerPlayer")
            }, ...Qk ? [] : [{
              key: "ccu",
              header: Bk("studio:metricCcu")
            }], {
              key: "favourites",
              header: Bk("general:favourites")
            }],
            rows: BF,
            getRowKey: kk => kk.key,
            renderRow: kk => (0, Nk.jsxs)("tr", {
              onClick: () => {
                tk(kk.url)
              },
              children: [(0, Nk.jsx)(Tk, {
                position: kk.position
              }), (0, Nk.jsx)("td", {
                children: (0, Nk.jsx)(Ok.e, {
                  thumbnail: kk.thumbnail,
                  name: kk.name
                })
              }), (0, Nk.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === kk.owner && "-", null !== kk.owner && (0, Nk.jsx)(yk.d, {
                  playerSocialPreview: kk.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === Ck && (0, Nk.jsx)("td", {
                children: (0, Xk.cb)(kk.category)
              }), nk && (0, Nk.jsx)(Dk, {
                discoverability: kk.discoverability
              }), (0, Nk.jsx)(rk, {
                discoverability: kk.discoverability
              }), !Qk && (0, Nk.jsx)("td", {
                children: null !== kk.ccu ? (0, wk.R)(kk.ccu) : "-"
              }), (0, Nk.jsx)("td", {
                children: null !== kk.favourites ? (0, wk.R)(kk.favourites) : "-"
              })]
            })
          })
        }), !xk && (0, Nk.jsx)(mk.c, {
          className: "AnimFadeIn",
          page: Zk,
          totalPages: aF,
          onSetPage: kk => {
            lk({
              scope: hk,
              category: Ck,
              page: kk
            })
          }
        })]
      })
    }
  },
  4624: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk,
      e: () => ak
    });
    var Rk = Bk(1484),
      tk = Bk(1069);

    function ak(kk) {
      let {
        thumbnail: Fk,
        name: Bk
      } = kk;
      return (0, tk.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, tk.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Fk
        }), (0, tk.jsx)("span", {
          className: "StudioTableGameName",
          children: Bk
        })]
      })
    }

    function Xk(kk) {
      let {
        game: Fk
      } = kk;
      return (0, tk.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Rk.i)(Fk),
        alt: ""
      })
    }
  },
  6106: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    const Rk = {
      1: Bk(6112),
      2: Bk(6116),
      3: Bk(6120)
    }
  },
  4620: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk
    });
    var Rk = Bk(61),
      tk = Bk(1020),
      ak = Bk.n(tk),
      Xk = Bk(1069);

    function bk(kk) {
      let {
        columns: Fk,
        rows: Bk,
        getRowKey: tk,
        renderRow: bk,
        className: wk
      } = kk;
      return (0, Xk.jsxs)("table", {
        className: ak()("Table", wk),
        children: [(0, Xk.jsx)("thead", {
          children: (0, Xk.jsx)("tr", {
            children: Fk.map((kk => (0, Xk.jsx)("th", {
              children: kk.header
            }, kk.key)))
          })
        }), (0, Xk.jsx)("tbody", {
          children: Bk.map((kk => (0, Xk.jsx)(Rk.Fragment, {
            children: bk(kk)
          }, tk(kk))))
        })]
      })
    }
  },
  4610: () => {},
  6112: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6116: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6120: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);