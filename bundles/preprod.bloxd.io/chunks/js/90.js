export const id = 90;
export const ids = [90];
export const modules = {
  4111: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => ey
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(910),
      Zy = Wy(1194),
      cb = Wy(2802),
      Py = Wy(139),
      oy = Wy(2837),
      By = Wy(2829),
      Ky = Wy(952);

    function ey(yb) {
      let {
        game: bb
      } = yb;
      const Wy = (0, Py.o)() ? "large" : "small",
        Uy = (0, oy.c)(bb, Wy),
        ey = (0, cb.e)(Uy),
        qb = void 0 !== ey.blurhash;
      return (0, Ky.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [ey.isLoading && !qb && (0, Ky.jsx)(Zy.e, {
          loaderType: "Secondary"
        }), !ey.failed && (null !== ey.src || qb) && (0, Ky.jsx)("div", {
          className: hy()("SchematicImage", By.i, {
            SchematicImageFadeIn: ey.fadeIn && !qb
          }),
          style: (0, By.h)(ey),
          children: (0, Ky.jsx)(By.e, {
            image: ey
          })
        }), ey.failed && (0, Ky.jsx)("div", {
          className: "SchematicImageError",
          children: (0, Ky.jsx)(fy.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  5763: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Fy
    });
    Wy(4108);
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(248),
      cb = Wy(880),
      Py = Wy(1080),
      oy = Wy(860),
      By = Wy(1042),
      Ky = Wy(1339),
      ey = Wy(2851),
      qb = Wy(980),
      sy = Wy(4111),
      Sy = Wy(2078),
      Ey = Wy(1273),
      ly = Wy(3761),
      mb = Wy(4116),
      Cy = Wy(1194),
      Ty = Wy(1356),
      Vy = Wy(3758),
      Jy = Wy(2042),
      gb = Wy(4124),
      Gy = Wy(5669),
      Oy = Wy(1383),
      Ry = Wy(952);
    const vb = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      ib = 25,
      My = "scope",
      Yy = "category",
      Xy = "customGames";
    const ny = 7,
      uy = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function rb(yb) {
      let {
        position: bb
      } = yb;
      const Wy = Gy.e[bb];
      return (0, Ry.jsxs)("td", {
        className: fy()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== Wy,
          [`StudioLeaderboardTopPosition${bb}`]: void 0 !== Wy
        }),
        children: [void 0 !== Wy && (0, Ry.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: Wy,
          alt: ""
        }), bb]
      })
    }

    function Hy(yb) {
      let {
        discoverability: bb
      } = yb;
      const {
        playsPerDay: Wy,
        avgPlaytimeMinutes: hy,
        retention: fy
      } = null === bb ? uy : (0, ey.i)(bb);
      return (0, Ry.jsxs)(Uy.Fragment, {
        children: [(0, Ry.jsx)("td", {
          children: null !== Wy ? (0, ey.b)(Wy) : "-"
        }), (0, Ry.jsx)("td", {
          children: null !== hy ? (0, ey.f)(hy) : "-"
        }), (0, Ry.jsx)("td", {
          children: null !== fy ? (0, ey.h)(fy) : "-"
        })]
      })
    }

    function ab(yb) {
      let {
        discoverability: bb
      } = yb;
      return (0, Ry.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === bb || void 0 === bb ? void 0 : bb.engagementScore) ? (0, Py.S)(Math.round(bb.engagementScore)) : "-"
      })
    }

    function Fy() {
      var yb, bb;
      const {
        t: Wy
      } = (0, By.D)(), hy = (0, Ty.useNavigatePreserveSearch)(), {
        userContext: fy,
        isUserContextUpdating: Gy
      } = (0, qb.c)(), uy = (0, Jy.k)(), [Fy, py] = (0, Vy.o)(), Ly = (Qy = Fy.get(My), vb.some((yb => yb.scope === Qy)) ? Qy : Xy);
      var Qy;
      const jb = function(yb) {
          return Zy.Y.includes(yb) ? yb : null
        }(Fy.get(Yy)),
        Dy = (0, Vy.i)(Fy.get(Vy.e)),
        [tb, wy] = (0, Uy.useState)(null),
        [kb, Ny] = (0, Uy.useState)(!1);

      function zb(yb) {
        py((bb => {
          (0, Vy.k)(bb, My, yb.scope === Xy ? null : yb.scope), (0, Vy.k)(bb, Yy, yb.category), (0, Vy.n)(bb, yb.page)
        }))
      }
      const Iy = !Gy && fy.playerHasRank("developer"),
        xb = Iy && "allGames" === Ly,
        Ay = Iy && "dormantGames" === Ly;
      (0, Uy.useEffect)((() => {
        if (Gy) return;
        let yb = !1;
        return wy(null), Ny(!1), Ky.c.getPublishedGamePreviews(fy, {
          searchQuery: null,
          pageNumber: Dy,
          pageSize: ib,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== jb ? [jb] : [],
          upAndComing: !1,
          dormantGames: Ay,
          sortByEngagementScore: !0,
          firstPartyGameNames: xb ? oy.c : void 0,
          includeOwners: !0
        }).then((bb => {
          yb || wy(bb)
        })).catch((bb => {
          console.error("Failed to load the studio leaderboard", bb), yb || Ny(!0)
        })), () => {
          yb = !0
        }
      }), [Gy, xb, Ay, jb, Dy, fy]);
      const dy = null !== (yb = null === tb || void 0 === tb ? void 0 : tb.results) && void 0 !== yb ? yb : null,
        yW = function(yb, bb, Wy) {
          const [hy, fy] = (0, Uy.useState)({}), Zy = Wy ? (null !== yb && void 0 !== yb ? yb : []).flatMap((yb => "firstPartyGame" === yb.type ? [(0, cb.d)(yb.gameNameWithVariation, !0)] : [])).join(",") : "", Py = (0, Uy.useMemo)((() => "" === Zy ? [] : Zy.split(",")), [Zy]);
          return (0, Uy.useEffect)((() => {
            if (0 === Py.length) return void fy({});
            let yb = !1;
            return Ky.c.getGamesByAnalyticsIds(bb, Py).then((bb => {
              yb || fy(bb)
            })).catch((yb => {
              console.error("Failed to load first party discoverability for the studio leaderboard", yb)
            })), () => {
              yb = !0
            }
          }), [Py, bb]), hy
        }(dy, fy, Iy),
        bW = null !== dy ? function(yb, bb, Wy, Uy, hy) {
          return yb.map(((yb, fy) => {
            var Zy;
            const Py = Uy + fy + 1;
            if ("customGame" === yb.type) {
              const bb = yb.preview;
              return {
                key: bb.schematicId,
                position: Py,
                thumbnail: (0, Ry.jsx)(sy.d, {
                  game: bb
                }),
                name: bb.name,
                owner: yb.owner,
                category: bb.gameCategory,
                ccu: bb.ccu,
                favourites: bb.favourites,
                discoverability: (0, ey.j)(bb) ? bb : null,
                url: (0, Oy.n)((0, cb.c)(bb.schematicId))
              }
            }
            const oy = yb.gameNameWithVariation,
              By = (0, cb.d)(oy, !0);
            return {
              key: oy,
              position: Py,
              thumbnail: (0, Ry.jsx)(gb.e, {
                game: oy
              }),
              name: (0, Oy.l)(oy, hy),
              owner: null,
              category: (0, Oy.e)(oy),
              ccu: (0, Jy.c)(oy, bb),
              favourites: null,
              discoverability: null !== (Zy = Wy[By]) && void 0 !== Zy ? Zy : null,
              url: (0, Oy.n)(By)
            }
          }))
        }(dy, uy, yW, (Dy - 1) * ib, Wy) : [],
        Wb = !kb && null === tb,
        Ub = !Wb && !kb && 0 === bW.length,
        hb = null !== (bb = null === tb || void 0 === tb ? void 0 : tb.totalPages) && void 0 !== bb ? bb : 1;
      return (0, Ry.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, Ry.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Ry.jsx)("h1", {
            className: "StudioPageTitle",
            children: Wy("studio:leaderboard")
          })
        }), (0, Ry.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!Ay && (0, Ry.jsx)("div", {
            children: Wy("studio:leaderboardBanner")
          }), Ay && (0, Ry.jsx)("div", {
            children: Wy("studio:leaderboardDormantBanner")
          }), (0, Ry.jsx)("div", {
            children: Wy("studio:leaderboardMetricsBanner", {
              days: ny
            })
          })]
        }), Iy && (0, Ry.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: vb.map((yb => (0, Ry.jsx)(Ey.M, {
            active: Ly === yb.scope,
            onClick: () => {
              zb({
                scope: yb.scope,
                category: jb,
                page: 1
              })
            },
            children: Wy(yb.title)
          }, yb.scope)))
        }), (0, Ry.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, Ry.jsx)(Ey.M, {
            active: null === jb,
            onClick: () => {
              zb({
                scope: Ly,
                category: null,
                page: 1
              })
            },
            children: Wy("studio:leaderboardAllCategories")
          }), Zy.Y.map((yb => (0, Ry.jsx)(Ey.M, {
            active: jb === yb,
            onClick: () => {
              zb({
                scope: Ly,
                category: yb,
                page: 1
              })
            },
            children: (0, Zy.ib)(yb)
          }, yb)))]
        }), Wb && (0, Ry.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Ry.jsx)(Cy.e, {})
        }), kb && (0, Ry.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Wy("studio:failedToLoadLeaderboard")
        }), Ub && (0, Ry.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: Wy("studio:leaderboardEmpty")
        }), !Wb && !kb && !Ub && (0, Ry.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, Ry.jsx)(mb.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: Wy("general:game")
            }, {
              key: "owner",
              header: Wy("general:owner")
            }, ...null === jb ? [{
              key: "category",
              header: Wy("general:category")
            }] : [], ...Iy ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: Wy("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: Wy("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: Wy("studio:leaderboardSessionsPerPlayer")
            }, ...Ay ? [] : [{
              key: "ccu",
              header: Wy("studio:metricCcu")
            }], {
              key: "favourites",
              header: Wy("general:favourites")
            }],
            rows: bW,
            getRowKey: yb => yb.key,
            renderRow: yb => (0, Ry.jsxs)("tr", {
              onClick: () => {
                hy(yb.url)
              },
              children: [(0, Ry.jsx)(rb, {
                position: yb.position
              }), (0, Ry.jsx)("td", {
                children: (0, Ry.jsx)(gb.h, {
                  thumbnail: yb.thumbnail,
                  name: yb.name
                })
              }), (0, Ry.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === yb.owner && "-", null !== yb.owner && (0, Ry.jsx)(Sy.d, {
                  playerSocialPreview: yb.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === jb && (0, Ry.jsx)("td", {
                children: (0, Zy.ib)(yb.category)
              }), Iy && (0, Ry.jsx)(ab, {
                discoverability: yb.discoverability
              }), (0, Ry.jsx)(Hy, {
                discoverability: yb.discoverability
              }), !Ay && (0, Ry.jsx)("td", {
                children: null !== yb.ccu ? (0, Py.S)(yb.ccu) : "-"
              }), (0, Ry.jsx)("td", {
                children: null !== yb.favourites ? (0, Py.S)(yb.favourites) : "-"
              })]
            })
          })
        }), !kb && (0, Ry.jsx)(ly.e, {
          className: "AnimFadeIn",
          page: Dy,
          totalPages: hb,
          onSetPage: yb => {
            zb({
              scope: Ly,
              category: jb,
              page: yb
            })
          }
        })]
      })
    }
  },
  4124: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      h: () => fy
    });
    var Uy = Wy(1383),
      hy = Wy(952);

    function fy(yb) {
      let {
        thumbnail: bb,
        name: Wy
      } = yb;
      return (0, hy.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, hy.jsx)("div", {
          className: "StudioTableThumbnail",
          children: bb
        }), (0, hy.jsx)("span", {
          className: "StudioTableGameName",
          children: Wy
        })]
      })
    }

    function Zy(yb) {
      let {
        game: bb
      } = yb;
      return (0, hy.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, Uy.j)(bb),
        alt: ""
      })
    }
  },
  5669: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    const Uy = {
      1: Wy(5672),
      2: Wy(5680),
      3: Wy(5684)
    }
  },
  4116: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb
    });
    var Uy = Wy(55),
      hy = Wy(898),
      fy = Wy.n(hy),
      Zy = Wy(952);

    function cb(yb) {
      let {
        columns: bb,
        rows: Wy,
        getRowKey: hy,
        renderRow: cb,
        className: Py
      } = yb;
      return (0, Zy.jsxs)("table", {
        className: fy()("Table", Py),
        children: [(0, Zy.jsx)("thead", {
          children: (0, Zy.jsx)("tr", {
            children: bb.map((yb => (0, Zy.jsx)("th", {
              children: yb.header
            }, yb.key)))
          })
        }), (0, Zy.jsx)("tbody", {
          children: Wy.map((yb => (0, Zy.jsx)(Uy.Fragment, {
            children: cb(yb)
          }, hy(yb))))
        })]
      })
    }
  },
  4108: () => {},
  5672: yb => {
    yb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  5680: yb => {
    yb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  5684: yb => {
    yb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);