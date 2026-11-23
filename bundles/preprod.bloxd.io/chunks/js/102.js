export const id = 102;
export const ids = [102];
export const modules = {
  4847: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => NC
    });
    var QC = ZC(1002),
      wC = ZC.n(QC),
      bC = ZC(1013),
      nC = ZC(1295),
      fC = ZC(3464),
      oC = ZC(113),
      qC = ZC(3498),
      FC = ZC(3487),
      WC = ZC(1056);

    function NC(CC) {
      let {
        game: zC
      } = CC;
      const ZC = (0, oC.o)() ? "large" : "small",
        QC = (0, qC.g)(zC, ZC),
        NC = (0, fC.e)(QC),
        MC = void 0 !== NC.blurhash;
      return (0, WC.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [NC.isLoading && !MC && (0, WC.jsx)(nC.d, {
          loaderType: "Secondary"
        }), !NC.failed && (null !== NC.src || MC) && (0, WC.jsx)("div", {
          className: wC()("SchematicImage", FC.k, {
            SchematicImageFadeIn: NC.fadeIn && !MC
          }),
          style: (0, FC.g)(NC),
          children: (0, WC.jsx)(FC.d, {
            image: NC
          })
        }), NC.failed && (0, WC.jsx)("div", {
          className: "SchematicImageError",
          children: (0, WC.jsx)(bC.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6520: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => uC
    });
    ZC(4838);
    var QC = ZC(48),
      wC = ZC(1002),
      bC = ZC.n(wC),
      nC = ZC(310),
      fC = ZC(979),
      oC = ZC(1169),
      qC = ZC(964),
      FC = ZC(1143),
      WC = ZC(1439),
      NC = ZC(3507),
      MC = ZC(1076),
      gC = ZC(4847),
      SC = ZC(2575),
      pC = ZC(1388),
      PC = ZC(4503),
      GC = ZC(4854),
      RC = ZC(1295),
      AC = ZC(1453),
      xC = ZC(4496),
      JC = ZC(2465),
      IC = ZC(4863),
      iC = ZC(6419),
      vC = ZC(1477),
      eC = ZC(1056);
    const hC = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      KC = 25,
      YC = "scope",
      dC = "category",
      mC = "customGames";
    const HC = 7,
      EC = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function lC(CC) {
      let {
        position: zC
      } = CC;
      const ZC = iC.e[zC];
      return (0, eC.jsxs)("td", {
        className: bC()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== ZC,
          [`StudioLeaderboardTopPosition${zC}`]: void 0 !== ZC
        }),
        children: [void 0 !== ZC && (0, eC.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: ZC,
          alt: ""
        }), zC]
      })
    }

    function XC(CC) {
      let {
        discoverability: zC
      } = CC;
      const {
        playsPerDay: ZC,
        avgPlaytimeMinutes: wC,
        retention: bC
      } = null === zC ? EC : (0, NC.j)(zC);
      return (0, eC.jsxs)(QC.Fragment, {
        children: [(0, eC.jsx)("td", {
          children: null !== ZC ? (0, NC.e)(ZC) : "-"
        }), (0, eC.jsx)("td", {
          children: null !== wC ? (0, NC.g)(wC) : "-"
        }), (0, eC.jsx)("td", {
          children: null !== bC ? (0, NC.i)(bC) : "-"
        })]
      })
    }

    function cC(CC) {
      let {
        discoverability: zC
      } = CC;
      return (0, eC.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === zC || void 0 === zC ? void 0 : zC.engagementScore) ? (0, oC.Z)(Math.round(zC.engagementScore)) : "-"
      })
    }

    function uC() {
      var CC, zC;
      const {
        t: ZC
      } = (0, FC.y)(), wC = (0, AC.useNavigatePreserveSearch)(), {
        userContext: bC,
        isUserContextUpdating: iC
      } = (0, MC.e)(), EC = (0, JC.r)(), [uC, rC] = (0, xC.n)(), sC = (TC = uC.get(YC), hC.some((CC => CC.scope === TC)) ? TC : mC);
      var TC;
      const aC = function(CC) {
          return nC.U.includes(CC) ? CC : null
        }(uC.get(dC)),
        tC = (0, xC.f)(uC.get(xC.b)),
        [DC, jC] = (0, QC.useState)(null),
        [yC, LC] = (0, QC.useState)(!1);

      function UC(CC) {
        rC((zC => {
          (0, xC.i)(zC, YC, CC.scope === mC ? null : CC.scope), (0, xC.i)(zC, dC, CC.category), (0, xC.l)(zC, CC.page)
        }))
      }
      const BC = !iC && bC.playerHasRank("developer"),
        OC = BC && "allGames" === sC,
        kC = BC && "dormantGames" === sC;
      (0, QC.useEffect)((() => {
        if (iC) return;
        let CC = !1;
        return jC(null), LC(!1), WC.d.getPublishedGamePreviews(bC, {
          searchQuery: null,
          pageNumber: tC,
          pageSize: KC,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== aC ? [aC] : [],
          upAndComing: !1,
          dormantGames: kC,
          sortByEngagementScore: !0,
          firstPartyGameNames: OC ? qC.e : void 0,
          includeOwners: !0
        }).then((zC => {
          CC || jC(zC)
        })).catch((zC => {
          console.error("Failed to load the studio leaderboard", zC), CC || LC(!0)
        })), () => {
          CC = !0
        }
      }), [iC, OC, kC, aC, tC, bC]);
      const VC = null !== (CC = null === DC || void 0 === DC ? void 0 : DC.results) && void 0 !== CC ? CC : null,
        Cz = function(CC, zC, ZC) {
          const [wC, bC] = (0, QC.useState)({}), nC = ZC ? (null !== CC && void 0 !== CC ? CC : []).flatMap((CC => "firstPartyGame" === CC.type ? [(0, fC.f)(CC.gameNameWithVariation, !0)] : [])).join(",") : "", oC = (0, QC.useMemo)((() => "" === nC ? [] : nC.split(",")), [nC]);
          return (0, QC.useEffect)((() => {
            if (0 === oC.length) return void bC({});
            let CC = !1;
            return WC.d.getGamesByAnalyticsIds(zC, oC).then((zC => {
              CC || bC(zC)
            })).catch((CC => {
              console.error("Failed to load first party discoverability for the studio leaderboard", CC)
            })), () => {
              CC = !0
            }
          }), [oC, zC]), wC
        }(VC, bC, BC),
        zz = null !== VC ? function(CC, zC, ZC, QC, wC) {
          return CC.map(((CC, bC) => {
            var nC;
            const oC = QC + bC + 1;
            if ("customGame" === CC.type) {
              const zC = CC.preview;
              return {
                key: zC.schematicId,
                position: oC,
                thumbnail: (0, eC.jsx)(gC.d, {
                  game: zC
                }),
                name: zC.name,
                owner: CC.owner,
                category: zC.gameCategory,
                ccu: zC.ccu,
                favourites: zC.favourites,
                discoverability: (0, NC.m)(zC) ? zC : null,
                url: (0, vC.o)((0, fC.d)(zC.schematicId))
              }
            }
            const qC = CC.gameNameWithVariation,
              FC = (0, fC.f)(qC, !0);
            return {
              key: qC,
              position: oC,
              thumbnail: (0, eC.jsx)(IC.e, {
                game: qC
              }),
              name: (0, vC.n)(qC, wC),
              owner: null,
              category: (0, vC.e)(qC),
              ccu: (0, JC.b)(qC, zC),
              favourites: null,
              discoverability: null !== (nC = ZC[FC]) && void 0 !== nC ? nC : null,
              url: (0, vC.o)(FC)
            }
          }))
        }(VC, EC, Cz, (tC - 1) * KC, ZC) : [],
        Zz = !yC && null === DC,
        Qz = !Zz && !yC && 0 === zz.length,
        wz = null !== (zC = null === DC || void 0 === DC ? void 0 : DC.totalPages) && void 0 !== zC ? zC : 1;
      return (0, eC.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, eC.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, eC.jsx)("h1", {
            className: "StudioPageTitle",
            children: ZC("studio:leaderboard")
          })
        }), (0, eC.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!kC && (0, eC.jsx)("div", {
            children: ZC("studio:leaderboardBanner")
          }), kC && (0, eC.jsx)("div", {
            children: ZC("studio:leaderboardDormantBanner")
          }), (0, eC.jsx)("div", {
            children: ZC("studio:leaderboardMetricsBanner", {
              days: HC
            })
          })]
        }), BC && (0, eC.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: hC.map((CC => (0, eC.jsx)(pC.O, {
            active: sC === CC.scope,
            onClick: () => {
              UC({
                scope: CC.scope,
                category: aC,
                page: 1
              })
            },
            children: ZC(CC.title)
          }, CC.scope)))
        }), (0, eC.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, eC.jsx)(pC.O, {
            active: null === aC,
            onClick: () => {
              UC({
                scope: sC,
                category: null,
                page: 1
              })
            },
            children: ZC("studio:leaderboardAllCategories")
          }), nC.U.map((CC => (0, eC.jsx)(pC.O, {
            active: aC === CC,
            onClick: () => {
              UC({
                scope: sC,
                category: CC,
                page: 1
              })
            },
            children: (0, nC.eb)(CC)
          }, CC)))]
        }), Zz && (0, eC.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, eC.jsx)(RC.d, {})
        }), yC && (0, eC.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ZC("studio:failedToLoadLeaderboard")
        }), Qz && (0, eC.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: ZC("studio:leaderboardEmpty")
        }), !Zz && !yC && !Qz && (0, eC.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, eC.jsx)(GC.b, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: ZC("general:game")
            }, {
              key: "owner",
              header: ZC("general:owner")
            }, ...null === aC ? [{
              key: "category",
              header: ZC("general:category")
            }] : [], ...BC ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: ZC("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: ZC("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: ZC("studio:leaderboardSessionsPerPlayer")
            }, ...kC ? [] : [{
              key: "ccu",
              header: ZC("studio:metricCcu")
            }], {
              key: "favourites",
              header: ZC("general:favourites")
            }],
            rows: zz,
            getRowKey: CC => CC.key,
            renderRow: CC => (0, eC.jsxs)("tr", {
              onClick: () => {
                wC(CC.url)
              },
              children: [(0, eC.jsx)(lC, {
                position: CC.position
              }), (0, eC.jsx)("td", {
                children: (0, eC.jsx)(IC.g, {
                  thumbnail: CC.thumbnail,
                  name: CC.name
                })
              }), (0, eC.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === CC.owner && "-", null !== CC.owner && (0, eC.jsx)(SC.f, {
                  playerSocialPreview: CC.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === aC && (0, eC.jsx)("td", {
                children: (0, nC.eb)(CC.category)
              }), BC && (0, eC.jsx)(cC, {
                discoverability: CC.discoverability
              }), (0, eC.jsx)(XC, {
                discoverability: CC.discoverability
              }), !kC && (0, eC.jsx)("td", {
                children: null !== CC.ccu ? (0, oC.Z)(CC.ccu) : "-"
              }), (0, eC.jsx)("td", {
                children: null !== CC.favourites ? (0, oC.Z)(CC.favourites) : "-"
              })]
            })
          })
        }), !yC && (0, eC.jsx)(PC.c, {
          className: "AnimFadeIn",
          page: tC,
          totalPages: wz,
          onSetPage: CC => {
            UC({
              scope: sC,
              category: aC,
              page: CC
            })
          }
        })]
      })
    }
  },
  4863: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      g: () => bC
    });
    var QC = ZC(1477),
      wC = ZC(1056);

    function bC(CC) {
      let {
        thumbnail: zC,
        name: ZC
      } = CC;
      return (0, wC.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, wC.jsx)("div", {
          className: "StudioTableThumbnail",
          children: zC
        }), (0, wC.jsx)("span", {
          className: "StudioTableGameName",
          children: ZC
        })]
      })
    }

    function nC(CC) {
      let {
        game: zC
      } = CC;
      return (0, wC.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, QC.j)(zC),
        alt: ""
      })
    }
  },
  6419: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC
    });
    const QC = {
      1: ZC(6422),
      2: ZC(6430),
      3: ZC(6437)
    }
  },
  4854: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => fC
    });
    var QC = ZC(48),
      wC = ZC(1002),
      bC = ZC.n(wC),
      nC = ZC(1056);

    function fC(CC) {
      let {
        columns: zC,
        rows: ZC,
        getRowKey: wC,
        renderRow: fC,
        className: oC
      } = CC;
      return (0, nC.jsxs)("table", {
        className: bC()("Table", oC),
        children: [(0, nC.jsx)("thead", {
          children: (0, nC.jsx)("tr", {
            children: zC.map((CC => (0, nC.jsx)("th", {
              children: CC.header
            }, CC.key)))
          })
        }), (0, nC.jsx)("tbody", {
          children: ZC.map((CC => (0, nC.jsx)(QC.Fragment, {
            children: fC(CC)
          }, wC(CC))))
        })]
      })
    }
  },
  4838: () => {},
  6422: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6430: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6437: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);