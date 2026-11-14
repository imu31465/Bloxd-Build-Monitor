export const id = 87;
export const ids = [87];
export const modules = {
  3959: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Tc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(926),
      uc = nc(1188),
      sc = nc(2672),
      Mc = nc(145),
      Pc = nc(2716),
      qB = nc(2701),
      Oc = nc(957);

    function Tc(cB) {
      let {
        game: Bc
      } = cB;
      const nc = (0, Mc.l)() ? "large" : "small",
        Vc = (0, Pc.f)(Bc, nc),
        Tc = (0, sc.c)(Vc),
        fc = void 0 !== Tc.blurhash;
      return (0, Oc.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Tc.isLoading && !fc && (0, Oc.jsx)(uc.e, {
          loaderType: "Secondary"
        }), !Tc.failed && (null !== Tc.src || fc) && (0, Oc.jsx)("div", {
          className: Ic()("SchematicImage", qB.g, {
            SchematicImageFadeIn: Tc.fadeIn && !fc
          }),
          style: (0, qB.d)(Tc),
          children: (0, Oc.jsx)(qB.b, {
            image: Tc
          })
        }), Tc.failed && (0, Oc.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Oc.jsx)(rB.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5489: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Wc
    });
    nc(3957);
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(244),
      sc = nc(883),
      Mc = nc(1090),
      Pc = nc(862),
      qB = nc(1051),
      Oc = nc(1314),
      Tc = nc(2723),
      fc = nc(985),
      mB = nc(3959),
      ec = nc(2020),
      tB = nc(1255),
      Sc = nc(3672),
      yB = nc(3965),
      zB = nc(1188),
      pc = nc(1330),
      hc = nc(3668),
      aB = nc(1969),
      lc = nc(3967),
      Yc = nc(5385),
      Lc = nc(1362),
      gB = nc(957);
    const Uc = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      bB = 25,
      Zc = "scope",
      Qc = "category",
      Cc = "customGames";
    const vB = 7,
      Dc = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function Nc(cB) {
      let {
        position: Bc
      } = cB;
      const nc = Yc.b[Bc];
      return (0, gB.jsxs)("td", {
        className: rB()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== nc,
          [`StudioLeaderboardTopPosition${Bc}`]: void 0 !== nc
        }),
        children: [void 0 !== nc && (0, gB.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: nc,
          alt: ""
        }), Bc]
      })
    }

    function Ec(cB) {
      let {
        discoverability: Bc
      } = cB;
      const {
        playsPerDay: nc,
        avgPlaytimeMinutes: Ic,
        retention: rB
      } = null === Bc ? Dc : (0, Tc.j)(Bc);
      return (0, gB.jsxs)(Vc.Fragment, {
        children: [(0, gB.jsx)("td", {
          children: null !== nc ? (0, Tc.d)(nc) : "-"
        }), (0, gB.jsx)("td", {
          children: null !== Ic ? (0, Tc.g)(Ic) : "-"
        }), (0, gB.jsx)("td", {
          children: null !== rB ? (0, Tc.i)(rB) : "-"
        })]
      })
    }

    function oc(cB) {
      let {
        discoverability: Bc
      } = cB;
      return (0, gB.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === Bc || void 0 === Bc ? void 0 : Bc.engagementScore) ? (0, Mc.M)(Math.round(Bc.engagementScore)) : "-"
      })
    }

    function Wc() {
      var cB, Bc;
      const {
        t: nc
      } = (0, qB.x)(), Ic = (0, pc.useNavigatePreserveSearch)(), {
        userContext: rB,
        isUserContextUpdating: Yc
      } = (0, fc.c)(), Dc = (0, aB.n)(), [Wc, wc] = (0, hc.l)(), kB = (Xc = Wc.get(Zc), Uc.some((cB => cB.scope === Xc)) ? Xc : Cc);
      var Xc;
      const Hc = function(cB) {
          return uc.U.includes(cB) ? cB : null
        }(Wc.get(Qc)),
        Fc = (0, hc.g)(Wc.get(hc.c)),
        [Jc, jB] = (0, Vc.useState)(null),
        [Rc, iB] = (0, Vc.useState)(!1);

      function Kc(cB) {
        wc((Bc => {
          (0, hc.j)(Bc, Zc, cB.scope === Cc ? null : cB.scope), (0, hc.j)(Bc, Qc, cB.category), (0, hc.k)(Bc, cB.page)
        }))
      }
      const xB = !Yc && rB.playerHasRank("developer"),
        dc = xB && "allGames" === kB,
        Ac = xB && "dormantGames" === kB;
      (0, Vc.useEffect)((() => {
        if (Yc) return;
        let cB = !1;
        return jB(null), iB(!1), Oc.e.getPublishedGamePreviews(rB, {
          searchQuery: null,
          pageNumber: Fc,
          pageSize: bB,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== Hc ? [Hc] : [],
          upAndComing: !1,
          dormantGames: Ac,
          sortByEngagementScore: !0,
          firstPartyGameNames: dc ? Pc.b : void 0,
          includeOwners: !0
        }).then((Bc => {
          cB || jB(Bc)
        })).catch((Bc => {
          console.error("Failed to load the studio leaderboard", Bc), cB || iB(!0)
        })), () => {
          cB = !0
        }
      }), [Yc, dc, Ac, Hc, Fc, rB]);
      const Gc = null !== (cB = null === Jc || void 0 === Jc ? void 0 : Jc.results) && void 0 !== cB ? cB : null,
        cn = function(cB, Bc, nc) {
          const [Ic, rB] = (0, Vc.useState)({}), uc = nc ? (null !== cB && void 0 !== cB ? cB : []).flatMap((cB => "firstPartyGame" === cB.type ? [(0, sc.h)(cB.gameNameWithVariation, !0)] : [])).join(",") : "", Mc = (0, Vc.useMemo)((() => "" === uc ? [] : uc.split(",")), [uc]);
          return (0, Vc.useEffect)((() => {
            if (0 === Mc.length) return void rB({});
            let cB = !1;
            return Oc.e.getGamesByAnalyticsIds(Bc, Mc).then((Bc => {
              cB || rB(Bc)
            })).catch((cB => {
              console.error("Failed to load first party discoverability for the studio leaderboard", cB)
            })), () => {
              cB = !0
            }
          }), [Mc, Bc]), Ic
        }(Gc, rB, xB),
        BB = null !== Gc ? function(cB, Bc, nc, Vc, Ic) {
          return cB.map(((cB, rB) => {
            var uc;
            const Mc = Vc + rB + 1;
            if ("customGame" === cB.type) {
              const Bc = cB.preview;
              return {
                key: Bc.schematicId,
                position: Mc,
                thumbnail: (0, gB.jsx)(mB.c, {
                  game: Bc
                }),
                name: Bc.name,
                owner: cB.owner,
                category: Bc.gameCategory,
                ccu: Bc.ccu,
                favourites: Bc.favourites,
                discoverability: (0, Tc.l)(Bc) ? Bc : null,
                url: (0, Lc.o)((0, sc.e)(Bc.schematicId))
              }
            }
            const Pc = cB.gameNameWithVariation,
              qB = (0, sc.h)(Pc, !0);
            return {
              key: Pc,
              position: Mc,
              thumbnail: (0, gB.jsx)(lc.d, {
                game: Pc
              }),
              name: (0, Lc.k)(Pc, Ic),
              owner: null,
              category: (0, Lc.c)(Pc),
              ccu: (0, aB.c)(Pc, Bc),
              favourites: null,
              discoverability: null !== (uc = nc[qB]) && void 0 !== uc ? uc : null,
              url: (0, Lc.o)(qB)
            }
          }))
        }(Gc, Dc, cn, (Fc - 1) * bB, nc) : [],
        nB = !Rc && null === Jc,
        VB = !nB && !Rc && 0 === BB.length,
        IB = null !== (Bc = null === Jc || void 0 === Jc ? void 0 : Jc.totalPages) && void 0 !== Bc ? Bc : 1;
      return (0, gB.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, gB.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, gB.jsx)("h1", {
            className: "StudioPageTitle",
            children: nc("studio:leaderboard")
          })
        }), (0, gB.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!Ac && (0, gB.jsx)("div", {
            children: nc("studio:leaderboardBanner")
          }), Ac && (0, gB.jsx)("div", {
            children: nc("studio:leaderboardDormantBanner")
          }), (0, gB.jsx)("div", {
            children: nc("studio:leaderboardMetricsBanner", {
              days: vB
            })
          })]
        }), xB && (0, gB.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Uc.map((cB => (0, gB.jsx)(tB.Q, {
            active: kB === cB.scope,
            onClick: () => {
              Kc({
                scope: cB.scope,
                category: Hc,
                page: 1
              })
            },
            children: nc(cB.title)
          }, cB.scope)))
        }), (0, gB.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, gB.jsx)(tB.Q, {
            active: null === Hc,
            onClick: () => {
              Kc({
                scope: kB,
                category: null,
                page: 1
              })
            },
            children: nc("studio:leaderboardAllCategories")
          }), uc.U.map((cB => (0, gB.jsx)(tB.Q, {
            active: Hc === cB,
            onClick: () => {
              Kc({
                scope: kB,
                category: cB,
                page: 1
              })
            },
            children: (0, uc.db)(cB)
          }, cB)))]
        }), nB && (0, gB.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, gB.jsx)(zB.e, {})
        }), Rc && (0, gB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: nc("studio:failedToLoadLeaderboard")
        }), VB && (0, gB.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: nc("studio:leaderboardEmpty")
        }), !nB && !Rc && !VB && (0, gB.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, gB.jsx)(yB.d, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: nc("general:game")
            }, {
              key: "owner",
              header: nc("general:owner")
            }, ...null === Hc ? [{
              key: "category",
              header: nc("general:category")
            }] : [], ...xB ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: nc("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: nc("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: nc("studio:leaderboardSessionsPerPlayer")
            }, ...Ac ? [] : [{
              key: "ccu",
              header: nc("studio:metricCcu")
            }], {
              key: "favourites",
              header: nc("general:favourites")
            }],
            rows: BB,
            getRowKey: cB => cB.key,
            renderRow: cB => (0, gB.jsxs)("tr", {
              onClick: () => {
                Ic(cB.url)
              },
              children: [(0, gB.jsx)(Nc, {
                position: cB.position
              }), (0, gB.jsx)("td", {
                children: (0, gB.jsx)(lc.e, {
                  thumbnail: cB.thumbnail,
                  name: cB.name
                })
              }), (0, gB.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === cB.owner && "-", null !== cB.owner && (0, gB.jsx)(ec.h, {
                  playerSocialPreview: cB.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === Hc && (0, gB.jsx)("td", {
                children: (0, uc.db)(cB.category)
              }), xB && (0, gB.jsx)(oc, {
                discoverability: cB.discoverability
              }), (0, gB.jsx)(Ec, {
                discoverability: cB.discoverability
              }), !Ac && (0, gB.jsx)("td", {
                children: null !== cB.ccu ? (0, Mc.M)(cB.ccu) : "-"
              }), (0, gB.jsx)("td", {
                children: null !== cB.favourites ? (0, Mc.M)(cB.favourites) : "-"
              })]
            })
          })
        }), !Rc && (0, gB.jsx)(Sc.c, {
          className: "AnimFadeIn",
          page: Fc,
          totalPages: IB,
          onSetPage: cB => {
            Kc({
              scope: kB,
              category: Hc,
              page: cB
            })
          }
        })]
      })
    }
  },
  3967: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      e: () => rB
    });
    var Vc = nc(1362),
      Ic = nc(957);

    function rB(cB) {
      let {
        thumbnail: Bc,
        name: nc
      } = cB;
      return (0, Ic.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Ic.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Bc
        }), (0, Ic.jsx)("span", {
          className: "StudioTableGameName",
          children: nc
        })]
      })
    }

    function uc(cB) {
      let {
        game: Bc
      } = cB;
      return (0, Ic.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Vc.i)(Bc),
        alt: ""
      })
    }
  },
  5385: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc
    });
    const Vc = {
      1: nc(5392),
      2: nc(5401),
      3: nc(5407)
    }
  },
  3965: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(957);

    function sc(cB) {
      let {
        columns: Bc,
        rows: nc,
        getRowKey: Ic,
        renderRow: sc,
        className: Mc
      } = cB;
      return (0, uc.jsxs)("table", {
        className: rB()("Table", Mc),
        children: [(0, uc.jsx)("thead", {
          children: (0, uc.jsx)("tr", {
            children: Bc.map((cB => (0, uc.jsx)("th", {
              children: cB.header
            }, cB.key)))
          })
        }), (0, uc.jsx)("tbody", {
          children: nc.map((cB => (0, uc.jsx)(Vc.Fragment, {
            children: sc(cB)
          }, Ic(cB))))
        })]
      })
    }
  },
  3957: () => {},
  5392: cB => {
    cB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  5401: cB => {
    cB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  5407: cB => {
    cB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);