export const id = 100;
export const ids = [100];
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
  4727: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => vq
    });
    gq(4735);
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(296),
      xq = gq(997),
      Aq = gq(1214),
      cq = gq(1183),
      uq = gq(1101),
      Bq = gq(1477),
      Wq = gq(4739),
      Nq = gq(1422),
      aq = gq(4748),
      Vq = gq(1326),
      dq = gq(1498),
      jq = gq(4459),
      Hq = gq(1025),
      oq = gq(985),
      Pq = gq(2470),
      Qq = gq(4753),
      yq = gq(1529),
      tq = gq(1070);

    function rq() {
      const {
        t: qq
      } = (0, cq.v)(), Eq = (0, dq.useNavigatePreserveSearch)(), gq = (0, Pq.j)(), lq = (0, Yq.useMemo)((() => [...oq.d].sort(((Eq, Yq) => {
        var lq, Oq;
        const mq = (null !== (lq = (0, Pq.c)(Yq, gq)) && void 0 !== lq ? lq : 0) - (null !== (Oq = (0, Pq.c)(Eq, gq)) && void 0 !== Oq ? Oq : 0);
        return 0 !== mq ? mq : (0, yq.j)(Eq, qq).localeCompare((0, yq.j)(Yq, qq))
      }))), [gq, qq]);
      return (0, tq.jsxs)(tq.Fragment, {
        children: [(0, tq.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, tq.jsx)("h1", {
            className: "StudioPageTitle",
            children: qq("studio:firstPartyGames")
          })
        }), (0, tq.jsx)(aq.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: qq("general:game")
          }, {
            key: "ccu",
            header: qq("studio:metricCcu")
          }],
          rows: lq,
          getRowKey: qq => qq,
          renderRow: Yq => {
            var lq;
            return (0, tq.jsxs)("tr", {
              onClick: () => {
                Eq((0, yq.n)((0, xq.d)(Yq, !0)))
              },
              children: [(0, tq.jsx)("td", {
                children: (0, tq.jsx)(Qq.d, {
                  thumbnail: (0, tq.jsx)(Qq.c, {
                    game: Yq
                  }),
                  name: (0, yq.j)(Yq, qq)
                })
              }), (0, tq.jsx)("td", {
                children: (0, Aq.S)(null !== (lq = (0, Pq.c)(Yq, gq)) && void 0 !== lq ? lq : 0)
              })]
            })
          }
        })]
      })
    }

    function vq() {
      const {
        t: qq
      } = (0, cq.v)(), Eq = (0, dq.useNavigatePreserveSearch)(), {
        userContext: gq,
        isUserContextUpdating: lq
      } = (0, uq.c)(), {
        isCreating: oq,
        create: Pq
      } = (0, jq.f)(), [vq, hq] = (0, Yq.useState)(null), [nq, bq] = (0, Yq.useState)(null), [iq, Zq] = (0, Yq.useState)(!1);
      (0, Yq.useEffect)((() => {
        lq || (Zq(!1), Bq.e.getPublishedGamePreviews(gq, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((qq => {
          hq({
            ...qq,
            results: (0, mq.ab)(qq.results)
          })
        })).catch((qq => {
          console.error("Failed to get owned published games", qq), Zq(!0)
        })), Bq.e.getOwnedUnpublishedGames(gq).then((qq => {
          bq(qq)
        })).catch((qq => {
          console.error("Failed to get owned unpublished games", qq), Zq(!0)
        })))
      }), [lq, gq]);
      const fq = null !== vq && null !== nq ? [...vq.results, ...nq] : [],
        Mq = !iq && (null === vq || null === nq),
        Tq = !Mq && !iq && 0 === fq.length,
        zq = !lq && gq.playerHasRank("developer");
      return (0, tq.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, tq.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, tq.jsx)("h1", {
            className: "StudioPageTitle",
            children: qq("studio:myGames")
          }), (0, tq.jsxs)(Nq.p, {
            onClick: Pq,
            loading: oq,
            children: [(0, tq.jsx)(Hq.d, {
              name: "plus"
            }), " ", qq("homePage:createCustomGame")]
          })]
        }), Mq && (0, tq.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, tq.jsx)(Vq.e, {})
        }), iq && (0, tq.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: qq("studio:failedToLoadGames")
        }), Tq && (0, tq.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: qq("studio:noGamesYet")
        }), !Mq && !iq && !Tq && (0, tq.jsx)(aq.c, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: qq("general:game")
          }, {
            key: "status",
            header: qq("general:status")
          }, {
            key: "ccu",
            header: qq("studio:metricCcu")
          }, {
            key: "favourites",
            header: qq("general:favourites")
          }],
          rows: fq,
          getRowKey: qq => qq.schematicId,
          renderRow: gq => (0, tq.jsxs)("tr", {
            onClick: () => {
              var qq;
              qq = gq.schematicId, Eq((0, yq.n)((0, xq.b)(qq)))
            },
            children: [(0, tq.jsx)("td", {
              children: (0, tq.jsx)(Qq.d, {
                thumbnail: (0, tq.jsx)(Wq.d, {
                  game: gq
                }),
                name: gq.name
              })
            }), (0, tq.jsx)("td", {
              children: (0, tq.jsx)("span", {
                className: Oq()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: gq.gamePublished
                }),
                children: gq.gamePublished ? qq("general:published") : qq("general:draft")
              })
            }), (0, tq.jsx)("td", {
              children: (0, Aq.S)(gq.ccu)
            }), (0, tq.jsx)("td", {
              children: (0, Aq.S)(gq.favourites)
            })]
          })
        }), zq && (0, tq.jsx)(rq, {})]
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
  4735: () => {}
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);