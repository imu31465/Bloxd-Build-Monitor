export const id = 103;
export const ids = [103];
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
  5011: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Rp
    });
    cp(5017);
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(322),
      xp = cp(1024),
      Lp = cp(1234),
      Yp = cp(1201),
      Dp = cp(1141),
      Ap = cp(1520),
      Pp = cp(5025),
      Wp = cp(1480),
      yp = cp(5034),
      Up = cp(1361),
      wp = cp(1538),
      vp = cp(4728),
      tp = cp(1060),
      Hp = cp(1005),
      dp = cp(2580),
      ep = cp(5040),
      jp = cp(1563),
      kp = cp(1112);

    function mp() {
      const {
        t: pp
      } = (0, Yp.H)(), ip = (0, wp.useNavigatePreserveSearch)(), cp = (0, dp.n)(), op = (0, Op.useMemo)((() => [...Hp.e].sort(((ip, Op) => {
        var op, Ip;
        const Sp = (null !== (op = (0, dp.c)(Op, cp)) && void 0 !== op ? op : 0) - (null !== (Ip = (0, dp.c)(ip, cp)) && void 0 !== Ip ? Ip : 0);
        return 0 !== Sp ? Sp : (0, jp.k)(ip, pp).localeCompare((0, jp.k)(Op, pp))
      }))), [cp, pp]);
      return (0, kp.jsxs)(kp.Fragment, {
        children: [(0, kp.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, kp.jsx)("h1", {
            className: "StudioPageTitle",
            children: pp("studio:firstPartyGames")
          })
        }), (0, kp.jsx)(yp.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: pp("general:game")
          }, {
            key: "ccu",
            header: pp("studio:metricCcu")
          }],
          rows: op,
          getRowKey: pp => pp,
          renderRow: Op => {
            var op;
            return (0, kp.jsxs)("tr", {
              onClick: () => {
                ip((0, jp.n)((0, xp.g)(Op, !0)))
              },
              children: [(0, kp.jsx)("td", {
                children: (0, kp.jsx)(ep.h, {
                  thumbnail: (0, kp.jsx)(ep.e, {
                    game: Op
                  }),
                  name: (0, jp.k)(Op, pp)
                })
              }), (0, kp.jsx)("td", {
                children: (0, Lp.O)(null !== (op = (0, dp.c)(Op, cp)) && void 0 !== op ? op : 0)
              })]
            })
          }
        })]
      })
    }

    function Rp() {
      const {
        t: pp
      } = (0, Yp.H)(), ip = (0, wp.useNavigatePreserveSearch)(), {
        userContext: cp,
        isUserContextUpdating: op
      } = (0, Dp.b)(), {
        isCreating: Hp,
        create: dp
      } = (0, vp.e)(), [Rp, qp] = (0, Op.useState)(null), [Mp, Cp] = (0, Op.useState)(null), [Ep, Xp] = (0, Op.useState)(!1);
      (0, Op.useEffect)((() => {
        op || (Xp(!1), Ap.b.getPublishedGamePreviews(cp, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((pp => {
          qp({
            ...pp,
            results: (0, Sp.gb)(pp.results)
          })
        })).catch((pp => {
          console.error("Failed to get owned published games", pp), Xp(!0)
        })), Ap.b.getOwnedUnpublishedGames(cp).then((pp => {
          Cp(pp)
        })).catch((pp => {
          console.error("Failed to get owned unpublished games", pp), Xp(!0)
        })))
      }), [op, cp]);
      const lp = null !== Rp && null !== Mp ? [...Rp.results, ...Mp] : [],
        Qp = !Ep && (null === Rp || null === Mp),
        Jp = !Qp && !Ep && 0 === lp.length,
        Bp = !op && cp.playerHasRank("developer");
      return (0, kp.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, kp.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, kp.jsx)("h1", {
            className: "StudioPageTitle",
            children: pp("studio:myGames")
          }), (0, kp.jsxs)(Wp.o, {
            onClick: dp,
            loading: Hp,
            children: [(0, kp.jsx)(tp.d, {
              name: "plus"
            }), " ", pp("homePage:createCustomGame")]
          })]
        }), Qp && (0, kp.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, kp.jsx)(Up.c, {})
        }), Ep && (0, kp.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: pp("studio:failedToLoadGames")
        }), Jp && (0, kp.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: pp("studio:noGamesYet")
        }), !Qp && !Ep && !Jp && (0, kp.jsx)(yp.d, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: pp("general:game")
          }, {
            key: "status",
            header: pp("general:status")
          }, {
            key: "ccu",
            header: pp("studio:metricCcu")
          }, {
            key: "favourites",
            header: pp("general:favourites")
          }],
          rows: lp,
          getRowKey: pp => pp.schematicId,
          renderRow: cp => (0, kp.jsxs)("tr", {
            onClick: () => {
              var pp;
              pp = cp.schematicId, ip((0, jp.n)((0, xp.e)(pp)))
            },
            children: [(0, kp.jsx)("td", {
              children: (0, kp.jsx)(ep.h, {
                thumbnail: (0, kp.jsx)(Pp.b, {
                  game: cp
                }),
                name: cp.name
              })
            }), (0, kp.jsx)("td", {
              children: (0, kp.jsx)("span", {
                className: Ip()("StudioGameListStatusChip", {
                  StudioGameListStatusChipPublished: cp.gamePublished
                }),
                children: cp.gamePublished ? pp("general:published") : pp("general:draft")
              })
            }), (0, kp.jsx)("td", {
              children: (0, Lp.O)(cp.ccu)
            }), (0, kp.jsx)("td", {
              children: (0, Lp.O)(cp.favourites)
            })]
          })
        }), Bp && (0, kp.jsx)(mp, {})]
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
  5017: () => {}
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);