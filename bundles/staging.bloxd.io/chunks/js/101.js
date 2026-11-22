export const id = 101;
export const ids = [101];
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
  4828: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => sk
    });
    ik(4835);
    var Dk = ik(60),
      fk = ik(1021),
      Sk = ik.n(fk),
      bk = ik(302),
      rk = ik(1005),
      Pk = ik(1207),
      mk = ik(1172),
      Mk = ik(1095),
      Kk = ik(1459),
      xk = ik(4840),
      nk = ik(1410),
      Uk = ik(4847),
      Hk = ik(1327),
      wk = ik(1479),
      lk = ik(4568),
      pk = ik(1033),
      yk = ik(987),
      Yk = ik(2499),
      Lk = ik(4852),
      Ck = ik(1512),
      Ak = ik(1066);

    function jk() {
      const {
        t: kk
      } = (0, mk.D)(), ek = (0, wk.useNavigatePreserveSearch)(), ik = (0, Yk.m)(), fk = (0, Dk.useMemo)((() => [...yk.e].sort(((ek, Dk) => {
        var fk, Sk;
        const bk = (null !== (fk = (0, Yk.b)(Dk, ik)) && void 0 !== fk ? fk : 0) - (null !== (Sk = (0, Yk.b)(ek, ik)) && void 0 !== Sk ? Sk : 0);
        return 0 !== bk ? bk : (0, Ck.j)(ek, kk).localeCompare((0, Ck.j)(Dk, kk))
      }))), [ik, kk]);
      return (0, Ak.jsxs)(Ak.Fragment, {
        children: [(0, Ak.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Ak.jsx)("h1", {
            className: "StudioPageTitle",
            children: kk("studio:firstPartyGames")
          })
        }), (0, Ak.jsx)(Uk.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: kk("general:game")
          }, {
            key: "ccu",
            header: kk("studio:metricCcu")
          }],
          rows: fk,
          getRowKey: kk => kk,
          renderRow: Dk => {
            var fk;
            return (0, Ak.jsxs)("tr", {
              onClick: () => {
                ek((0, Ck.m)((0, rk.h)(Dk, !0)))
              },
              children: [(0, Ak.jsx)("td", {
                children: (0, Ak.jsx)(Lk.h, {
                  thumbnail: (0, Ak.jsx)(Lk.e, {
                    game: Dk
                  }),
                  name: (0, Ck.j)(Dk, kk)
                })
              }), (0, Ak.jsx)("td", {
                children: (0, Pk.Q)(null !== (fk = (0, Yk.b)(Dk, ik)) && void 0 !== fk ? fk : 0)
              })]
            })
          }
        })]
      })
    }

    function sk() {
      const {
        t: kk
      } = (0, mk.D)(), ek = (0, wk.useNavigatePreserveSearch)(), {
        userContext: ik,
        isUserContextUpdating: fk
      } = (0, Mk.d)(), {
        isCreating: yk,
        create: Yk
      } = (0, lk.d)(), [sk, dk] = (0, Dk.useState)(null), [Vk, Fk] = (0, Dk.useState)(null), [uk, qk] = (0, Dk.useState)(!1);
      (0, Dk.useEffect)((() => {
        fk || (qk(!1), Kk.b.getPublishedGamePreviews(ik, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((kk => {
          dk({
            ...kk,
            results: (0, bk.bb)(kk.results)
          })
        })).catch((kk => {
          console.error("Failed to get owned published games", kk), qk(!0)
        })), Kk.b.getOwnedUnpublishedGames(ik).then((kk => {
          Fk(kk)
        })).catch((kk => {
          console.error("Failed to get owned unpublished games", kk), qk(!0)
        })))
      }), [fk, ik]);
      const Ik = null !== sk && null !== Vk ? [...sk.results, ...Vk] : [],
        zk = !uk && (null === sk || null === Vk),
        Qk = !zk && !uk && 0 === Ik.length,
        vk = !fk && ik.playerHasRank("developer");
      return (0, Ak.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, Ak.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, Ak.jsx)("h1", {
            className: "StudioPageTitle",
            children: kk("studio:myGames")
          }), (0, Ak.jsxs)(nk.r, {
            onClick: Yk,
            loading: yk,
            children: [(0, Ak.jsx)(pk.d, {
              name: "plus"
            }), " ", kk("homePage:createCustomGame")]
          })]
        }), zk && (0, Ak.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Ak.jsx)(Hk.d, {})
        }), uk && (0, Ak.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: kk("studio:failedToLoadGames")
        }), Qk && (0, Ak.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: kk("studio:noGamesYet")
        }), !zk && !uk && !Qk && (0, Ak.jsx)(Uk.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: kk("general:game")
          }, {
            key: "status",
            header: kk("general:status")
          }, {
            key: "ccu",
            header: kk("studio:metricCcu")
          }, {
            key: "favourites",
            header: kk("general:favourites")
          }],
          rows: Ik,
          getRowKey: kk => kk.schematicId,
          renderRow: ik => (0, Ak.jsxs)("tr", {
            onClick: () => {
              var kk;
              kk = ik.schematicId, ek((0, Ck.m)((0, rk.d)(kk)))
            },
            children: [(0, Ak.jsx)("td", {
              children: (0, Ak.jsx)(Lk.h, {
                thumbnail: (0, Ak.jsx)(xk.e, {
                  game: ik
                }),
                name: ik.name
              })
            }), (0, Ak.jsx)("td", {
              children: (0, Ak.jsx)("span", {
                className: Sk()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: ik.gamePublished
                }),
                children: ik.gamePublished ? kk("general:published") : kk("general:draft")
              })
            }), (0, Ak.jsx)("td", {
              children: (0, Pk.Q)(ik.ccu)
            }), (0, Ak.jsx)("td", {
              children: (0, Pk.Q)(ik.favourites)
            })]
          })
        }), vk && (0, Ak.jsx)(jk, {})]
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
  4835: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);