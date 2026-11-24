export const id = 101;
export const ids = [101];
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
  4895: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => Sk
    });
    Ik(4903);
    var Xk = Ik(58),
      Tk = Ik(1055),
      ik = Ik.n(Tk),
      yk = Ik(318),
      lk = Ik(1023),
      ak = Ik(1217),
      qk = Ik(1179),
      Lk = Ik(1118),
      tk = Ik(1453),
      Zk = Ik(4911),
      jk = Ik(1406),
      ek = Ik(4914),
      wk = Ik(1318),
      Hk = Ik(1475),
      Jk = Ik(4616),
      xk = Ik(1066),
      Pk = Ik(1016),
      Kk = Ik(2438),
      Qk = Ik(4922),
      sk = Ik(1504),
      Vk = Ik(1096);

    function zk() {
      const {
        t: kk
      } = (0, qk.y)(), Fk = (0, Hk.useNavigatePreserveSearch)(), Ik = (0, Kk.l)(), Tk = (0, Xk.useMemo)((() => [...Pk.e].sort(((Fk, Xk) => {
        var Tk, ik;
        const yk = (null !== (Tk = (0, Kk.b)(Xk, Ik)) && void 0 !== Tk ? Tk : 0) - (null !== (ik = (0, Kk.b)(Fk, Ik)) && void 0 !== ik ? ik : 0);
        return 0 !== yk ? yk : (0, sk.k)(Fk, kk).localeCompare((0, sk.k)(Xk, kk))
      }))), [Ik, kk]);
      return (0, Vk.jsxs)(Vk.Fragment, {
        children: [(0, Vk.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Vk.jsx)("h1", {
            className: "StudioPageTitle",
            children: kk("studio:firstPartyGames")
          })
        }), (0, Vk.jsx)(ek.e, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: kk("general:game")
          }, {
            key: "ccu",
            header: kk("studio:metricCcu")
          }],
          rows: Tk,
          getRowKey: kk => kk,
          renderRow: Xk => {
            var Tk;
            return (0, Vk.jsxs)("tr", {
              onClick: () => {
                Fk((0, sk.m)((0, lk.d)(Xk, !0)))
              },
              children: [(0, Vk.jsx)("td", {
                children: (0, Vk.jsx)(Qk.g, {
                  thumbnail: (0, Vk.jsx)(Qk.c, {
                    game: Xk
                  }),
                  name: (0, sk.k)(Xk, kk)
                })
              }), (0, Vk.jsx)("td", {
                children: (0, ak.Q)(null !== (Tk = (0, Kk.b)(Xk, Ik)) && void 0 !== Tk ? Tk : 0)
              })]
            })
          }
        })]
      })
    }

    function Sk() {
      const {
        t: kk
      } = (0, qk.y)(), Fk = (0, Hk.useNavigatePreserveSearch)(), {
        userContext: Ik,
        isUserContextUpdating: Tk
      } = (0, Lk.d)(), {
        isCreating: Pk,
        create: Kk
      } = (0, Jk.h)(), [Sk, vk] = (0, Xk.useState)(null), [Ek, Ok] = (0, Xk.useState)(null), [nk, Gk] = (0, Xk.useState)(!1);
      (0, Xk.useEffect)((() => {
        Tk || (Gk(!1), tk.e.getPublishedGamePreviews(Ik, {
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
          vk({
            ...kk,
            results: (0, yk.ab)(kk.results)
          })
        })).catch((kk => {
          console.error("Failed to get owned published games", kk), Gk(!0)
        })), tk.e.getOwnedUnpublishedGames(Ik).then((kk => {
          Ok(kk)
        })).catch((kk => {
          console.error("Failed to get owned unpublished games", kk), Gk(!0)
        })))
      }), [Tk, Ik]);
      const pk = null !== Sk && null !== Ek ? [...Sk.results, ...Ek] : [],
        uk = !nk && (null === Sk || null === Ek),
        bk = !uk && !nk && 0 === pk.length,
        Rk = !Tk && Ik.playerHasRank("developer");
      return (0, Vk.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, Vk.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, Vk.jsx)("h1", {
            className: "StudioPageTitle",
            children: kk("studio:myGames")
          }), (0, Vk.jsxs)(jk.m, {
            onClick: Kk,
            loading: Pk,
            children: [(0, Vk.jsx)(xk.e, {
              name: "plus"
            }), " ", kk("homePage:createCustomGame")]
          })]
        }), uk && (0, Vk.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Vk.jsx)(wk.c, {})
        }), nk && (0, Vk.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: kk("studio:failedToLoadGames")
        }), bk && (0, Vk.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: kk("studio:noGamesYet")
        }), !uk && !nk && !bk && (0, Vk.jsx)(ek.e, {
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
          rows: pk,
          getRowKey: kk => kk.schematicId,
          renderRow: Ik => (0, Vk.jsxs)("tr", {
            onClick: () => {
              var kk;
              kk = Ik.schematicId, Fk((0, sk.m)((0, lk.c)(kk)))
            },
            children: [(0, Vk.jsx)("td", {
              children: (0, Vk.jsx)(Qk.g, {
                thumbnail: (0, Vk.jsx)(Zk.b, {
                  game: Ik
                }),
                name: Ik.name
              })
            }), (0, Vk.jsx)("td", {
              children: (0, Vk.jsx)("span", {
                className: ik()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: Ik.gamePublished
                }),
                children: Ik.gamePublished ? kk("general:published") : kk("general:draft")
              })
            }), (0, Vk.jsx)("td", {
              children: (0, ak.Q)(Ik.ccu)
            }), (0, Vk.jsx)("td", {
              children: (0, ak.Q)(Ik.favourites)
            })]
          })
        }), Rk && (0, Vk.jsx)(zk, {})]
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
  4903: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);