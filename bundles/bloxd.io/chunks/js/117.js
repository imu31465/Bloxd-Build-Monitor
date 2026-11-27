export const id = 117;
export const ids = [117];
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
  7476: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => Gr
    });
    Qr(5726);
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(360),
      Ir = Qr(1133),
      fr = Qr(1279),
      Er = Qr(1121),
      pr = Qr(1251),
      xr = Qr(1629),
      mr = Qr(4806),
      Nr = Qr(1181),
      Ur = Qr(5731),
      tr = Qr(3657),
      hr = Qr(1576),
      zr = Qr(5331),
      Yr = Qr(5736),
      nr = Qr(1444),
      er = Qr(1644),
      Kr = Qr(5323),
      yr = Qr(3549),
      Br = Qr(5738),
      Tr = Qr(7356),
      vr = Qr(1671),
      Or = Qr(1338);
    const Lr = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      lr = 25,
      Xr = "scope",
      Pr = "category",
      Hr = "customGames";
    const qr = 7,
      Rr = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function gr(rr) {
      let {
        position: Sr
      } = rr;
      const Qr = Tr.c[Sr];
      return (0, Or.jsxs)("td", {
        className: ar()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== Qr,
          [`StudioLeaderboardTopPosition${Sr}`]: void 0 !== Qr
        }),
        children: [void 0 !== Qr && (0, Or.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: Qr,
          alt: ""
        }), Sr]
      })
    }

    function Cr(rr) {
      let {
        discoverability: Sr
      } = rr;
      const {
        playsPerDay: Qr,
        avgPlaytimeMinutes: Wr,
        retention: ar
      } = null === Sr ? Rr : (0, mr.j)(Sr);
      return (0, Or.jsxs)(Zr.Fragment, {
        children: [(0, Or.jsx)("td", {
          children: null !== Qr ? (0, mr.c)(Qr) : "-"
        }), (0, Or.jsx)("td", {
          children: null !== Wr ? (0, mr.g)(Wr) : "-"
        }), (0, Or.jsx)("td", {
          children: null !== ar ? (0, mr.h)(ar) : "-"
        })]
      })
    }

    function Mr(rr) {
      let {
        discoverability: Sr
      } = rr;
      return (0, Or.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === Sr || void 0 === Sr ? void 0 : Sr.engagementScore) ? (0, fr.S)(Math.round(Sr.engagementScore)) : "-"
      })
    }

    function Gr() {
      var rr, Sr;
      const {
        t: Qr
      } = (0, pr.E)(), Wr = (0, er.useNavigatePreserveSearch)(), {
        userContext: ar,
        isUserContextUpdating: Tr
      } = (0, Nr.c)(), Rr = (0, yr.r)(), [Gr, kr] = (0, Kr.m)(), Ar = (Vr = Gr.get(Xr), Lr.some((rr => rr.scope === Vr)) ? Vr : Hr);
      var Vr;
      const ir = function(rr) {
          return jr.Y.includes(rr) ? rr : null
        }(Gr.get(Pr)),
        wr = (0, Kr.c)(Gr.get(Kr.b)),
        [cr, Fr] = (0, Zr.useState)(null),
        [or, br] = (0, Zr.useState)(!1);

      function Jr(rr) {
        kr((Sr => {
          (0, Kr.g)(Sr, Xr, rr.scope === Hr ? null : rr.scope), (0, Kr.g)(Sr, Pr, rr.category), (0, Kr.j)(Sr, rr.page)
        }))
      }
      const Dr = !Tr && ar.playerHasRank("developer"),
        dr = Dr && "allGames" === Ar,
        sr = Dr && "dormantGames" === Ar;
      (0, Zr.useEffect)((() => {
        if (Tr) return;
        let rr = !1;
        return Fr(null), br(!1), xr.c.getPublishedGamePreviews(ar, {
          searchQuery: null,
          pageNumber: wr,
          pageSize: lr,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== ir ? [ir] : [],
          upAndComing: !1,
          dormantGames: sr,
          sortByEngagementScore: !0,
          firstPartyGameNames: dr ? Er.d : void 0,
          includeOwners: !0
        }).then((Sr => {
          rr || Fr(Sr)
        })).catch((Sr => {
          console.error("Failed to load the studio leaderboard", Sr), rr || br(!0)
        })), () => {
          rr = !0
        }
      }), [Tr, dr, sr, ir, wr, ar]);
      const ur = null !== (rr = null === cr || void 0 === cr ? void 0 : cr.results) && void 0 !== rr ? rr : null,
        rS = function(rr, Sr, Qr) {
          const [Wr, ar] = (0, Zr.useState)({}), jr = Qr ? (null !== rr && void 0 !== rr ? rr : []).flatMap((rr => "firstPartyGame" === rr.type ? [(0, Ir.d)(rr.gameNameWithVariation, !0)] : [])).join(",") : "", fr = (0, Zr.useMemo)((() => "" === jr ? [] : jr.split(",")), [jr]);
          return (0, Zr.useEffect)((() => {
            if (0 === fr.length) return void ar({});
            let rr = !1;
            return xr.c.getGamesByAnalyticsIds(Sr, fr).then((Sr => {
              rr || ar(Sr)
            })).catch((rr => {
              console.error("Failed to load first party discoverability for the studio leaderboard", rr)
            })), () => {
              rr = !0
            }
          }), [fr, Sr]), Wr
        }(ur, ar, Dr),
        SS = null !== ur ? function(rr, Sr, Qr, Zr, Wr) {
          return rr.map(((rr, ar) => {
            var jr;
            const fr = Zr + ar + 1;
            if ("customGame" === rr.type) {
              const Sr = rr.preview;
              return {
                key: Sr.schematicId,
                position: fr,
                thumbnail: (0, Or.jsx)(Ur.e, {
                  game: Sr
                }),
                name: Sr.name,
                owner: rr.owner,
                category: Sr.gameCategory,
                ccu: Sr.ccu,
                favourites: Sr.favourites,
                discoverability: (0, mr.n)(Sr) ? Sr : null,
                url: (0, vr.r)((0, Ir.b)(Sr.schematicId))
              }
            }
            const Er = rr.gameNameWithVariation,
              pr = (0, Ir.d)(Er, !0);
            return {
              key: Er,
              position: fr,
              thumbnail: (0, Or.jsx)(Br.d, {
                game: Er
              }),
              name: (0, vr.o)(Er, Wr),
              owner: null,
              category: (0, vr.j)(Er),
              ccu: (0, yr.e)(Er, Sr),
              favourites: null,
              discoverability: null !== (jr = Qr[pr]) && void 0 !== jr ? jr : null,
              url: (0, vr.r)(pr)
            }
          }))
        }(ur, Rr, rS, (wr - 1) * lr, Qr) : [],
        QS = !or && null === cr,
        ZS = !QS && !or && 0 === SS.length,
        WS = null !== (Sr = null === cr || void 0 === cr ? void 0 : cr.totalPages) && void 0 !== Sr ? Sr : 1;
      return (0, Or.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, Or.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Or.jsx)("h1", {
            className: "StudioPageTitle",
            children: Qr("studio:leaderboard")
          })
        }), (0, Or.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!sr && (0, Or.jsx)("div", {
            children: Qr("studio:leaderboardBanner")
          }), sr && (0, Or.jsx)("div", {
            children: Qr("studio:leaderboardDormantBanner")
          }), (0, Or.jsx)("div", {
            children: Qr("studio:leaderboardMetricsBanner", {
              days: qr
            })
          })]
        }), Dr && (0, Or.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Lr.map((rr => (0, Or.jsx)(hr.U, {
            active: Ar === rr.scope,
            onClick: () => {
              Jr({
                scope: rr.scope,
                category: ir,
                page: 1
              })
            },
            children: Qr(rr.title)
          }, rr.scope)))
        }), (0, Or.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, Or.jsx)(hr.U, {
            active: null === ir,
            onClick: () => {
              Jr({
                scope: Ar,
                category: null,
                page: 1
              })
            },
            children: Qr("studio:leaderboardAllCategories")
          }), jr.Y.map((rr => (0, Or.jsx)(hr.U, {
            active: ir === rr,
            onClick: () => {
              Jr({
                scope: Ar,
                category: rr,
                page: 1
              })
            },
            children: (0, jr.jb)(rr)
          }, rr)))]
        }), QS && (0, Or.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Or.jsx)(nr.c, {})
        }), or && (0, Or.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Qr("studio:failedToLoadLeaderboard")
        }), ZS && (0, Or.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Qr("studio:leaderboardEmpty")
        }), !QS && !or && !ZS && (0, Or.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, Or.jsx)(Yr.b, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: Qr("general:game")
            }, {
              key: "owner",
              header: Qr("general:owner")
            }, ...null === ir ? [{
              key: "category",
              header: Qr("general:category")
            }] : [], ...Dr ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: Qr("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: Qr("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: Qr("studio:leaderboardSessionsPerPlayer")
            }, ...sr ? [] : [{
              key: "ccu",
              header: Qr("studio:metricCcu")
            }], {
              key: "favourites",
              header: Qr("general:favourites")
            }],
            rows: SS,
            getRowKey: rr => rr.key,
            renderRow: rr => (0, Or.jsxs)("tr", {
              onClick: () => {
                Wr(rr.url)
              },
              children: [(0, Or.jsx)(gr, {
                position: rr.position
              }), (0, Or.jsx)("td", {
                children: (0, Or.jsx)(Br.e, {
                  thumbnail: rr.thumbnail,
                  name: rr.name
                })
              }), (0, Or.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === rr.owner && "-", null !== rr.owner && (0, Or.jsx)(tr.i, {
                  playerSocialPreview: rr.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === ir && (0, Or.jsx)("td", {
                children: (0, jr.jb)(rr.category)
              }), Dr && (0, Or.jsx)(Mr, {
                discoverability: rr.discoverability
              }), (0, Or.jsx)(Cr, {
                discoverability: rr.discoverability
              }), !sr && (0, Or.jsx)("td", {
                children: null !== rr.ccu ? (0, fr.S)(rr.ccu) : "-"
              }), (0, Or.jsx)("td", {
                children: null !== rr.favourites ? (0, fr.S)(rr.favourites) : "-"
              })]
            })
          })
        }), !or && (0, Or.jsx)(zr.b, {
          className: "AnimFadeIn",
          page: wr,
          totalPages: WS,
          onSetPage: rr => {
            Jr({
              scope: Ar,
              category: ir,
              page: rr
            })
          }
        })]
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
  7356: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr
    });
    const Zr = {
      1: Qr(7365),
      2: Qr(7369),
      3: Qr(7377)
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
  5726: () => {},
  7365: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  7369: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  7377: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);