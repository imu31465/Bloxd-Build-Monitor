export const id = 102;
export const ids = [102];
export const modules = {
  4840: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => xk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(1033),
      bk = ik(1327),
      rk = ik(3456),
      Pk = ik(131),
      mk = ik(3487),
      Mk = ik(3475),
      Kk = ik(1066);

    function xk(kk) {
      let {
        game: ek
      } = kk;
      const ik = (0, Pk.m)() ? "large" : "small",
        Dk = (0, mk.g)(ek, ik),
        xk = (0, rk.d)(Dk),
        nk = void 0 !== xk.blurhash;
      return (0, Kk.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [xk.isLoading && !nk && (0, Kk.jsx)(bk.d, {
          loaderType: "Secondary"
        }), !xk.failed && (null !== xk.src || nk) && (0, Kk.jsx)("div", {
          className: fk()("SchematicImage", Mk.k, {
            SchematicImageFadeIn: xk.fadeIn && !nk
          }),
          style: (0, Mk.g)(xk),
          children: (0, Kk.jsx)(Mk.d, {
            image: xk
          })
        }), xk.failed && (0, Kk.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Kk.jsx)(Sk.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6361: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => ak
    });
    ik(4835);
    var Dk = ik(60),
      fk = ik(1021),
      Sk = ik.n(fk),
      bk = ik(302),
      rk = ik(1005),
      Pk = ik(1207),
      mk = ik(987),
      Mk = ik(1172),
      Kk = ik(1459),
      xk = ik(3501),
      nk = ik(1095),
      Uk = ik(4840),
      Hk = ik(2540),
      wk = ik(1410),
      lk = ik(4508),
      pk = ik(4847),
      yk = ik(1327),
      Yk = ik(1479),
      Lk = ik(4505),
      Ck = ik(2499),
      Ak = ik(4852),
      jk = ik(6270),
      sk = ik(1512),
      dk = ik(1066);
    const Vk = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      Fk = 25,
      uk = "scope",
      qk = "category",
      Ik = "customGames";
    const zk = 7,
      Qk = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function vk(kk) {
      let {
        position: ek
      } = kk;
      const ik = jk.c[ek];
      return (0, dk.jsxs)("td", {
        className: Sk()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== ik,
          [`StudioLeaderboardTopPosition${ek}`]: void 0 !== ik
        }),
        children: [void 0 !== ik && (0, dk.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: ik,
          alt: ""
        }), ek]
      })
    }

    function Ek(kk) {
      let {
        discoverability: ek
      } = kk;
      const {
        playsPerDay: ik,
        avgPlaytimeMinutes: fk,
        retention: Sk
      } = null === ek ? Qk : (0, xk.k)(ek);
      return (0, dk.jsxs)(Dk.Fragment, {
        children: [(0, dk.jsx)("td", {
          children: null !== ik ? (0, xk.c)(ik) : "-"
        }), (0, dk.jsx)("td", {
          children: null !== fk ? (0, xk.e)(fk) : "-"
        }), (0, dk.jsx)("td", {
          children: null !== Sk ? (0, xk.g)(Sk) : "-"
        })]
      })
    }

    function hk(kk) {
      let {
        discoverability: ek
      } = kk;
      return (0, dk.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === ek || void 0 === ek ? void 0 : ek.engagementScore) ? (0, Pk.Q)(Math.round(ek.engagementScore)) : "-"
      })
    }

    function ak() {
      var kk, ek;
      const {
        t: ik
      } = (0, Mk.D)(), fk = (0, Yk.useNavigatePreserveSearch)(), {
        userContext: Sk,
        isUserContextUpdating: jk
      } = (0, nk.d)(), Qk = (0, Ck.m)(), [ak, Wk] = (0, Lk.o)(), tk = (Xk = ak.get(uk), Vk.some((kk => kk.scope === Xk)) ? Xk : Ik);
      var Xk;
      const Bk = function(kk) {
          return bk.T.includes(kk) ? kk : null
        }(ak.get(qk)),
        ck = (0, Lk.g)(ak.get(Lk.e)),
        [Tk, Zk] = (0, Dk.useState)(null),
        [Ok, gk] = (0, Dk.useState)(!1);

      function Gk(kk) {
        Wk((ek => {
          (0, Lk.k)(ek, uk, kk.scope === Ik ? null : kk.scope), (0, Lk.k)(ek, qk, kk.category), (0, Lk.n)(ek, kk.page)
        }))
      }
      const Nk = !jk && Sk.playerHasRank("developer"),
        Rk = Nk && "allGames" === tk,
        Jk = Nk && "dormantGames" === tk;
      (0, Dk.useEffect)((() => {
        if (jk) return;
        let kk = !1;
        return Zk(null), gk(!1), Kk.b.getPublishedGamePreviews(Sk, {
          searchQuery: null,
          pageNumber: ck,
          pageSize: Fk,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== Bk ? [Bk] : [],
          upAndComing: !1,
          dormantGames: Jk,
          sortByEngagementScore: !0,
          firstPartyGameNames: Rk ? mk.e : void 0,
          includeOwners: !0
        }).then((ek => {
          kk || Zk(ek)
        })).catch((ek => {
          console.error("Failed to load the studio leaderboard", ek), kk || gk(!0)
        })), () => {
          kk = !0
        }
      }), [jk, Rk, Jk, Bk, ck, Sk]);
      const ke = null !== (kk = null === Tk || void 0 === Tk ? void 0 : Tk.results) && void 0 !== kk ? kk : null,
        ee = function(kk, ek, ik) {
          const [fk, Sk] = (0, Dk.useState)({}), bk = ik ? (null !== kk && void 0 !== kk ? kk : []).flatMap((kk => "firstPartyGame" === kk.type ? [(0, rk.h)(kk.gameNameWithVariation, !0)] : [])).join(",") : "", Pk = (0, Dk.useMemo)((() => "" === bk ? [] : bk.split(",")), [bk]);
          return (0, Dk.useEffect)((() => {
            if (0 === Pk.length) return void Sk({});
            let kk = !1;
            return Kk.b.getGamesByAnalyticsIds(ek, Pk).then((ek => {
              kk || Sk(ek)
            })).catch((kk => {
              console.error("Failed to load first party discoverability for the studio leaderboard", kk)
            })), () => {
              kk = !0
            }
          }), [Pk, ek]), fk
        }(ke, Sk, Nk),
        ie = null !== ke ? function(kk, ek, ik, Dk, fk) {
          return kk.map(((kk, Sk) => {
            var bk;
            const Pk = Dk + Sk + 1;
            if ("customGame" === kk.type) {
              const ek = kk.preview;
              return {
                key: ek.schematicId,
                position: Pk,
                thumbnail: (0, dk.jsx)(Uk.e, {
                  game: ek
                }),
                name: ek.name,
                owner: kk.owner,
                category: ek.gameCategory,
                ccu: ek.ccu,
                favourites: ek.favourites,
                discoverability: (0, xk.n)(ek) ? ek : null,
                url: (0, sk.m)((0, rk.d)(ek.schematicId))
              }
            }
            const mk = kk.gameNameWithVariation,
              Mk = (0, rk.h)(mk, !0);
            return {
              key: mk,
              position: Pk,
              thumbnail: (0, dk.jsx)(Ak.e, {
                game: mk
              }),
              name: (0, sk.j)(mk, fk),
              owner: null,
              category: (0, sk.d)(mk),
              ccu: (0, Ck.b)(mk, ek),
              favourites: null,
              discoverability: null !== (bk = ik[Mk]) && void 0 !== bk ? bk : null,
              url: (0, sk.m)(Mk)
            }
          }))
        }(ke, Qk, ee, (ck - 1) * Fk, ik) : [],
        De = !Ok && null === Tk,
        fe = !De && !Ok && 0 === ie.length,
        Se = null !== (ek = null === Tk || void 0 === Tk ? void 0 : Tk.totalPages) && void 0 !== ek ? ek : 1;
      return (0, dk.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, dk.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, dk.jsx)("h1", {
            className: "StudioPageTitle",
            children: ik("studio:leaderboard")
          })
        }), (0, dk.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!Jk && (0, dk.jsx)("div", {
            children: ik("studio:leaderboardBanner")
          }), Jk && (0, dk.jsx)("div", {
            children: ik("studio:leaderboardDormantBanner")
          }), (0, dk.jsx)("div", {
            children: ik("studio:leaderboardMetricsBanner", {
              days: zk
            })
          })]
        }), Nk && (0, dk.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Vk.map((kk => (0, dk.jsx)(wk.X, {
            active: tk === kk.scope,
            onClick: () => {
              Gk({
                scope: kk.scope,
                category: Bk,
                page: 1
              })
            },
            children: ik(kk.title)
          }, kk.scope)))
        }), (0, dk.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, dk.jsx)(wk.X, {
            active: null === Bk,
            onClick: () => {
              Gk({
                scope: tk,
                category: null,
                page: 1
              })
            },
            children: ik("studio:leaderboardAllCategories")
          }), bk.T.map((kk => (0, dk.jsx)(wk.X, {
            active: Bk === kk,
            onClick: () => {
              Gk({
                scope: tk,
                category: kk,
                page: 1
              })
            },
            children: (0, bk.gb)(kk)
          }, kk)))]
        }), De && (0, dk.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, dk.jsx)(yk.d, {})
        }), Ok && (0, dk.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ik("studio:failedToLoadLeaderboard")
        }), fe && (0, dk.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ik("studio:leaderboardEmpty")
        }), !De && !Ok && !fe && (0, dk.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, dk.jsx)(pk.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: ik("general:game")
            }, {
              key: "owner",
              header: ik("general:owner")
            }, ...null === Bk ? [{
              key: "category",
              header: ik("general:category")
            }] : [], ...Nk ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: ik("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: ik("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: ik("studio:leaderboardSessionsPerPlayer")
            }, ...Jk ? [] : [{
              key: "ccu",
              header: ik("studio:metricCcu")
            }], {
              key: "favourites",
              header: ik("general:favourites")
            }],
            rows: ie,
            getRowKey: kk => kk.key,
            renderRow: kk => (0, dk.jsxs)("tr", {
              onClick: () => {
                fk(kk.url)
              },
              children: [(0, dk.jsx)(vk, {
                position: kk.position
              }), (0, dk.jsx)("td", {
                children: (0, dk.jsx)(Ak.h, {
                  thumbnail: kk.thumbnail,
                  name: kk.name
                })
              }), (0, dk.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === kk.owner && "-", null !== kk.owner && (0, dk.jsx)(Hk.d, {
                  playerSocialPreview: kk.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === Bk && (0, dk.jsx)("td", {
                children: (0, bk.gb)(kk.category)
              }), Nk && (0, dk.jsx)(hk, {
                discoverability: kk.discoverability
              }), (0, dk.jsx)(Ek, {
                discoverability: kk.discoverability
              }), !Jk && (0, dk.jsx)("td", {
                children: null !== kk.ccu ? (0, Pk.Q)(kk.ccu) : "-"
              }), (0, dk.jsx)("td", {
                children: null !== kk.favourites ? (0, Pk.Q)(kk.favourites) : "-"
              })]
            })
          })
        }), !Ok && (0, dk.jsx)(lk.c, {
          className: "AnimFadeIn",
          page: ck,
          totalPages: Se,
          onSetPage: kk => {
            Gk({
              scope: tk,
              category: Bk,
              page: kk
            })
          }
        })]
      })
    }
  },
  4852: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk,
      h: () => Sk
    });
    var Dk = ik(1512),
      fk = ik(1066);

    function Sk(kk) {
      let {
        thumbnail: ek,
        name: ik
      } = kk;
      return (0, fk.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, fk.jsx)("div", {
          className: "StudioTableThumbnail",
          children: ek
        }), (0, fk.jsx)("span", {
          className: "StudioTableGameName",
          children: ik
        })]
      })
    }

    function bk(kk) {
      let {
        game: ek
      } = kk;
      return (0, fk.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Dk.i)(ek),
        alt: ""
      })
    }
  },
  6270: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    const Dk = {
      1: ik(6273),
      2: ik(6282),
      3: ik(6286)
    }
  },
  4847: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk
    });
    var Dk = ik(60),
      fk = ik(1021),
      Sk = ik.n(fk),
      bk = ik(1066);

    function rk(kk) {
      let {
        columns: ek,
        rows: ik,
        getRowKey: fk,
        renderRow: rk,
        className: Pk
      } = kk;
      return (0, bk.jsxs)("table", {
        className: Sk()("Table", Pk),
        children: [(0, bk.jsx)("thead", {
          children: (0, bk.jsx)("tr", {
            children: ek.map((kk => (0, bk.jsx)("th", {
              children: kk.header
            }, kk.key)))
          })
        }), (0, bk.jsx)("tbody", {
          children: ik.map((kk => (0, bk.jsx)(Dk.Fragment, {
            children: rk(kk)
          }, fk(kk))))
        })]
      })
    }
  },
  4835: () => {},
  6273: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6282: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6286: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);