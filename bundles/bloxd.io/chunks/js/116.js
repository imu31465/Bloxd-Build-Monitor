export const id = 116;
export const ids = [116];
export const modules = {
  5731: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => mr
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(1448),
      jr = Qr(1444),
      Ir = Qr(4759),
      fr = Qr(139),
      Er = Qr(4791),
      pr = Qr(4777),
      xr = Qr(1338);

    function mr(rr) {
      let {
        game: Sr
      } = rr;
      const Qr = (0, fr.is99NightsCrazyGamesBundle)() ? "large" : "small",
        Zr = (0, Er.g)(Sr, Qr),
        mr = (0, Ir.f)(Zr),
        Nr = void 0 !== mr.blurhash;
      return (0, xr.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [mr.isLoading && !Nr && (0, xr.jsx)(jr.c, {
          loaderType: "Secondary"
        }), !mr.failed && (null !== mr.src || Nr) && (0, xr.jsx)("div", {
          className: Wr()("SchematicImage", pr.j, {
            SchematicImageFadeIn: mr.fadeIn && !Nr
          }),
          style: (0, pr.g)(mr),
          children: (0, xr.jsx)(pr.c, {
            image: mr
          })
        }), mr.failed && (0, xr.jsx)("div", {
          className: "SchematicImageError",
          children: (0, xr.jsx)(ar.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5722: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => vr
    });
    Qr(5726);
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(360),
      Ir = Qr(1133),
      fr = Qr(1279),
      Er = Qr(1251),
      pr = Qr(1181),
      xr = Qr(1629),
      mr = Qr(5731),
      Nr = Qr(1576),
      Ur = Qr(5736),
      tr = Qr(1444),
      hr = Qr(1644),
      zr = Qr(5387),
      Yr = Qr(1448),
      nr = Qr(1121),
      er = Qr(3549),
      Kr = Qr(5738),
      yr = Qr(1671),
      Br = Qr(1338);

    function Tr() {
      const {
        t: rr
      } = (0, Er.E)(), Sr = (0, hr.useNavigatePreserveSearch)(), Qr = (0, er.r)(), Wr = (0, Zr.useMemo)((() => [...nr.d].sort(((Sr, Zr) => {
        var Wr, ar;
        const jr = (null !== (Wr = (0, er.e)(Zr, Qr)) && void 0 !== Wr ? Wr : 0) - (null !== (ar = (0, er.e)(Sr, Qr)) && void 0 !== ar ? ar : 0);
        return 0 !== jr ? jr : (0, yr.o)(Sr, rr).localeCompare((0, yr.o)(Zr, rr))
      }))), [Qr, rr]);
      return (0, Br.jsxs)(Br.Fragment, {
        children: [(0, Br.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Br.jsx)("h1", {
            className: "StudioPageTitle",
            children: rr("studio:firstPartyGames")
          })
        }), (0, Br.jsx)(Ur.b, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: rr("general:game")
          }, {
            key: "ccu",
            header: rr("studio:metricCcu")
          }],
          rows: Wr,
          getRowKey: rr => rr,
          renderRow: Zr => {
            var Wr;
            return (0, Br.jsxs)("tr", {
              onClick: () => {
                Sr((0, yr.r)((0, Ir.d)(Zr, !0)))
              },
              children: [(0, Br.jsx)("td", {
                children: (0, Br.jsx)(Kr.e, {
                  thumbnail: (0, Br.jsx)(Kr.d, {
                    game: Zr
                  }),
                  name: (0, yr.o)(Zr, rr)
                })
              }), (0, Br.jsx)("td", {
                children: (0, fr.S)(null !== (Wr = (0, er.e)(Zr, Qr)) && void 0 !== Wr ? Wr : 0)
              })]
            })
          }
        })]
      })
    }

    function vr() {
      const {
        t: rr
      } = (0, Er.E)(), Sr = (0, hr.useNavigatePreserveSearch)(), {
        userContext: Qr,
        isUserContextUpdating: Wr
      } = (0, pr.c)(), {
        isCreating: nr,
        create: er
      } = (0, zr.f)(), [vr, Or] = (0, Zr.useState)(null), [Lr, lr] = (0, Zr.useState)(null), [Xr, Pr] = (0, Zr.useState)(!1);
      (0, Zr.useEffect)((() => {
        Wr || (Pr(!1), xr.c.getPublishedGamePreviews(Qr, {
          searchQuery: null,
          pageNumber: 1,
          pageSize: 50,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !0,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: [],
          upAndComing: !1
        }).then((rr => {
          Or({
            ...rr,
            results: (0, jr.fb)(rr.results)
          })
        })).catch((rr => {
          console.error("Failed to get owned published games", rr), Pr(!0)
        })), xr.c.getOwnedUnpublishedGames(Qr).then((rr => {
          lr(rr)
        })).catch((rr => {
          console.error("Failed to get owned unpublished games", rr), Pr(!0)
        })))
      }), [Wr, Qr]);
      const Hr = null !== vr && null !== Lr ? [...vr.results, ...Lr] : [],
        qr = !Xr && (null === vr || null === Lr),
        Rr = !qr && !Xr && 0 === Hr.length,
        gr = !Wr && Qr.playerHasRank("developer");
      return (0, Br.jsxs)("div", {
        className: "StudioPage StudioGameList",
        children: [(0, Br.jsxs)("div", {
          className: "StudioPageHeader",
          children: [(0, Br.jsx)("h1", {
            className: "StudioPageTitle",
            children: rr("studio:myGames")
          }), (0, Br.jsxs)(Nr.p, {
            onClick: er,
            loading: nr,
            children: [(0, Br.jsx)(Yr.c, {
              name: "plus"
            }), " ", rr("homePage:createCustomGame")]
          })]
        }), qr && (0, Br.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Br.jsx)(tr.c, {})
        }), Xr && (0, Br.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: rr("studio:failedToLoadGames")
        }), Rr && (0, Br.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: rr("studio:noGamesYet")
        }), !qr && !Xr && !Rr && (0, Br.jsx)(Ur.b, {
          className: "StudioTable AnimFadeIn",
          columns: [{
            key: "game",
            header: rr("general:game")
          }, {
            key: "status",
            header: rr("general:status")
          }, {
            key: "ccu",
            header: rr("studio:metricCcu")
          }, {
            key: "favourites",
            header: rr("general:favourites")
          }],
          rows: Hr,
          getRowKey: rr => rr.schematicId,
          renderRow: Qr => {
            const Zr = function(rr) {
              return (0, yr.g)(rr.gamePublished, "takenDown" in rr && rr.takenDown)
            }(Qr);
            return (0, Br.jsxs)("tr", {
              onClick: () => {
                var rr;
                rr = Qr.schematicId, Sr((0, yr.r)((0, Ir.b)(rr)))
              },
              children: [(0, Br.jsx)("td", {
                children: (0, Br.jsx)(Kr.e, {
                  thumbnail: (0, Br.jsx)(mr.e, {
                    game: Qr
                  }),
                  name: Qr.name
                })
              }), (0, Br.jsx)("td", {
                children: (0, Br.jsx)("span", {
                  className: ar()("StudioGameListStatusChip", {
                    StudioGameListStatusChipPublished: "published" === Zr,
                    StudioGameListStatusChipTakenDown: "takenDown" === Zr
                  }),
                  children: (0, yr.e)(rr, Zr)
                })
              }), (0, Br.jsx)("td", {
                children: (0, fr.S)(Qr.ccu)
              }), (0, Br.jsx)("td", {
                children: (0, fr.S)(Qr.favourites)
              })]
            })
          }
        }), gr && (0, Br.jsx)(Tr, {})]
      })
    }
  },
  5738: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      e: () => ar
    });
    var Zr = Qr(1671),
      Wr = Qr(1338);

    function ar(rr) {
      let {
        thumbnail: Sr,
        name: Qr
      } = rr;
      return (0, Wr.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Wr.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Sr
        }), (0, Wr.jsx)("span", {
          className: "StudioTableGameName",
          children: Qr
        })]
      })
    }

    function jr(rr) {
      let {
        game: Sr
      } = rr;
      return (0, Wr.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Zr.m)(Sr),
        alt: ""
      })
    }
  },
  5736: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(1338);

    function Ir(rr) {
      let {
        columns: Sr,
        rows: Qr,
        getRowKey: Wr,
        renderRow: Ir,
        className: fr
      } = rr;
      return (0, jr.jsxs)("table", {
        className: ar()("Table", fr),
        children: [(0, jr.jsx)("thead", {
          children: (0, jr.jsx)("tr", {
            children: Sr.map((rr => (0, jr.jsx)("th", {
              children: rr.header
            }, rr.key)))
          })
        }), (0, jr.jsx)("tbody", {
          children: Qr.map(((rr, Sr) => (0, jr.jsx)(Zr.Fragment, {
            children: Ir(rr, Sr)
          }, Wr(rr))))
        })]
      })
    }
  },
  5726: () => {}
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);