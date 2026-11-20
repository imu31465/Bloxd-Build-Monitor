export const id = 99;
export const ids = [99];
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
  4607: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => Sk
    });
    Bk(4610);
    var Rk = Bk(61),
      tk = Bk(1020),
      ak = Bk.n(tk),
      Xk = Bk(279),
      bk = Bk(1004),
      wk = Bk(1173),
      dk = Bk(1149),
      sk = Bk(1096),
      Vk = Bk(1441),
      Jk = Bk(4612),
      Ak = Bk(1389),
      ek = Bk(4620),
      yk = Bk(1288),
      fk = Bk(1459),
      mk = Bk(4371),
      Wk = Bk(1028),
      vk = Bk(986),
      ik = Bk(2396),
      Yk = Bk(4624),
      Lk = Bk(1484),
      Ok = Bk(1069);

    function Ek() {
      const {
        t: kk
      } = (0, dk.x)(), Fk = (0, fk.useNavigatePreserveSearch)(), Bk = (0, ik.p)(), tk = (0, Rk.useMemo)((() => [...vk.c].sort(((Fk, Rk) => {
        var tk, ak;
        const Xk = (null !== (tk = (0, ik.e)(Rk, Bk)) && void 0 !== tk ? tk : 0) - (null !== (ak = (0, ik.e)(Fk, Bk)) && void 0 !== ak ? ak : 0);
        return 0 !== Xk ? Xk : (0, Lk.m)(Fk, kk).localeCompare((0, Lk.m)(Rk, kk))
      }))), [Bk, kk]);
      return (0, Ok.jsxs)(Ok.Fragment, {
        children: [(0, Ok.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Ok.jsx)("h1", {
            className: "StudioPageTitle",
            children: kk("studio:firstPartyGames")
          })
        }), (0, Ok.jsx)(ek.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: kk("general:game")
          }, {
            key: "ccu",
            header: kk("studio:metricCcu")
          }],
          rows: tk,
          getRowKey: kk => kk,
          renderRow: Rk => {
            var tk;
            return (0, Ok.jsxs)("tr", {
              onClick: () => {
                Fk((0, Lk.n)((0, bk.f)(Rk, !0)))
              },
              children: [(0, Ok.jsx)("td", {
                children: (0, Ok.jsx)(Yk.e, {
                  thumbnail: (0, Ok.jsx)(Yk.c, {
                    game: Rk
                  }),
                  name: (0, Lk.m)(Rk, kk)
                })
              }), (0, Ok.jsx)("td", {
                children: (0, wk.R)(null !== (tk = (0, ik.e)(Rk, Bk)) && void 0 !== tk ? tk : 0)
              })]
            })
          }
        })]
      })
    }

    function Sk() {
      const {
        t: kk
      } = (0, dk.x)(), Fk = (0, fk.useNavigatePreserveSearch)(), {
        userContext: Bk,
        isUserContextUpdating: tk
      } = (0, sk.e)(), {
        isCreating: vk,
        create: ik
      } = (0, mk.e)(), [Sk, Nk] = (0, Rk.useState)(null), [Hk, uk] = (0, Rk.useState)(null), [Mk, gk] = (0, Rk.useState)(!1);
      (0, Rk.useEffect)((() => {
        tk || (gk(!1), Vk.b.getPublishedGamePreviews(Bk, {
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
          Nk({
            ...kk,
            results: (0, Xk.Y)(kk.results)
          })
        })).catch((kk => {
          console.error("Failed to get owned published games", kk), gk(!0)
        })), Vk.b.getOwnedUnpublishedGames(Bk).then((kk => {
          uk(kk)
        })).catch((kk => {
          console.error("Failed to get owned unpublished games", kk), gk(!0)
        })))
      }), [tk, Bk]);
      const Uk = null !== Sk && null !== Hk ? [...Sk.results, ...Hk] : [],
        ck = !Mk && (null === Sk || null === Hk),
        Gk = !ck && !Mk && 0 === Uk.length,
        Tk = !tk && Bk.playerHasRank("developer");
      return (0, Ok.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, Ok.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, Ok.jsx)("h1", {
            className: "StudioPageTitle",
            children: kk("studio:myGames")
          }), (0, Ok.jsxs)(Ak.o, {
            onClick: ik,
            loading: vk,
            children: [(0, Ok.jsx)(Wk.d, {
              name: "plus"
            }), " ", kk("homePage:createCustomGame")]
          })]
        }), ck && (0, Ok.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Ok.jsx)(yk.b, {})
        }), Mk && (0, Ok.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: kk("studio:failedToLoadGames")
        }), Gk && (0, Ok.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: kk("studio:noGamesYet")
        }), !ck && !Mk && !Gk && (0, Ok.jsx)(ek.c, {
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
          rows: Uk,
          getRowKey: kk => kk.schematicId,
          renderRow: Bk => (0, Ok.jsxs)("tr", {
            onClick: () => {
              var kk;
              kk = Bk.schematicId, Fk((0, Lk.n)((0, bk.b)(kk)))
            },
            children: [(0, Ok.jsx)("td", {
              children: (0, Ok.jsx)(Yk.e, {
                thumbnail: (0, Ok.jsx)(Jk.c, {
                  game: Bk
                }),
                name: Bk.name
              })
            }), (0, Ok.jsx)("td", {
              children: (0, Ok.jsx)("span", {
                className: ak()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: Bk.gamePublished
                }),
                children: Bk.gamePublished ? kk("general:published") : kk("general:draft")
              })
            }), (0, Ok.jsx)("td", {
              children: (0, wk.R)(Bk.ccu)
            }), (0, Ok.jsx)("td", {
              children: (0, wk.R)(Bk.favourites)
            })]
          })
        }), Tk && (0, Ok.jsx)(Ek, {})]
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
  4610: () => {}
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);