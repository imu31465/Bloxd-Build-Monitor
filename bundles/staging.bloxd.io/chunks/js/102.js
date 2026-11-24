export const id = 102;
export const ids = [102];
export const modules = {
  4848: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Em
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(1089),
      xm = fm(1345),
      wm = fm(3505),
      Dm = fm(135),
      im = fm(3551),
      Rm = fm(3537),
      pm = fm(1135);

    function Em(mm) {
      let {
        game: Tm
      } = mm;
      const fm = (0, Dm.g)() ? "large" : "small",
        hm = (0, im.f)(Tm, fm),
        Em = (0, wm.g)(hm),
        om = void 0 !== Em.blurhash;
      return (0, pm.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [Em.isLoading && !om && (0, pm.jsx)(xm.c, {
          loaderType: "Secondary"
        }), !Em.failed && (null !== Em.src || om) && (0, pm.jsx)("div", {
          className: Am()("SchematicImage", Rm.j, {
            SchematicImageFadeIn: Em.fadeIn && !om
          }),
          style: (0, Rm.g)(Em),
          children: (0, pm.jsx)(Rm.c, {
            image: Em
          })
        }), Em.failed && (0, pm.jsx)("div", {
          className: "SchematicImageError",
          children: (0, pm.jsx)(am.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6476: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => Cm
    });
    fm(4839);
    var hm = fm(59),
      Am = fm(1080),
      am = fm.n(Am),
      xm = fm(339),
      wm = fm(1053),
      Dm = fm(1235),
      im = fm(1038),
      Rm = fm(1208),
      pm = fm(1494),
      Em = fm(3558),
      om = fm(1160),
      Om = fm(4848),
      Ym = fm(2588),
      qm = fm(1454),
      jm = fm(4507),
      Vm = fm(4851),
      Im = fm(1345),
      Km = fm(1519),
      Qm = fm(4501),
      nm = fm(2496),
      Jm = fm(4860),
      cm = fm(6409),
      zm = fm(1548),
      Zm = fm(1135);
    const km = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      bm = 25,
      Sm = "scope",
      em = "category",
      Nm = "customGames";
    const Gm = 7,
      Xm = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function Pm(mm) {
      let {
        position: Tm
      } = mm;
      const fm = cm.c[Tm];
      return (0, Zm.jsxs)("td", {
        className: am()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== fm,
          [`StudioLeaderboardTopPosition${Tm}`]: void 0 !== fm
        }),
        children: [void 0 !== fm && (0, Zm.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: fm,
          alt: ""
        }), Tm]
      })
    }

    function Hm(mm) {
      let {
        discoverability: Tm
      } = mm;
      const {
        playsPerDay: fm,
        avgPlaytimeMinutes: Am,
        retention: am
      } = null === Tm ? Xm : (0, Em.i)(Tm);
      return (0, Zm.jsxs)(hm.Fragment, {
        children: [(0, Zm.jsx)("td", {
          children: null !== fm ? (0, Em.d)(fm) : "-"
        }), (0, Zm.jsx)("td", {
          children: null !== Am ? (0, Em.e)(Am) : "-"
        }), (0, Zm.jsx)("td", {
          children: null !== am ? (0, Em.h)(am) : "-"
        })]
      })
    }

    function ym(mm) {
      let {
        discoverability: Tm
      } = mm;
      return (0, Zm.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === Tm || void 0 === Tm ? void 0 : Tm.engagementScore) ? (0, Dm.J)(Math.round(Tm.engagementScore)) : "-"
      })
    }

    function Cm() {
      var mm, Tm;
      const {
        t: fm
      } = (0, Rm.A)(), Am = (0, Km.useNavigatePreserveSearch)(), {
        userContext: am,
        isUserContextUpdating: cm
      } = (0, om.e)(), Xm = (0, nm.m)(), [Cm, rm] = (0, Qm.m)(), sm = (lm = Cm.get(Sm), km.some((mm => mm.scope === lm)) ? lm : Nm);
      var lm;
      const Mm = function(mm) {
          return xm.V.includes(mm) ? mm : null
        }(Cm.get(em)),
        um = (0, Qm.f)(Cm.get(Qm.d)),
        [Bm, Lm] = (0, hm.useState)(null),
        [tm, Um] = (0, hm.useState)(!1);

      function dm(mm) {
        rm((Tm => {
          (0, Qm.h)(Tm, Sm, mm.scope === Nm ? null : mm.scope), (0, Qm.h)(Tm, em, mm.category), (0, Qm.i)(Tm, mm.page)
        }))
      }
      const gm = !cm && am.playerHasRank("developer"),
        Wm = gm && "allGames" === sm,
        Fm = gm && "dormantGames" === sm;
      (0, hm.useEffect)((() => {
        if (cm) return;
        let mm = !1;
        return Lm(null), Um(!1), pm.d.getPublishedGamePreviews(am, {
          searchQuery: null,
          pageNumber: um,
          pageSize: bm,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== Mm ? [Mm] : [],
          upAndComing: !1,
          dormantGames: Fm,
          sortByEngagementScore: !0,
          firstPartyGameNames: Wm ? im.c : void 0,
          includeOwners: !0
        }).then((Tm => {
          mm || Lm(Tm)
        })).catch((Tm => {
          console.error("Failed to load the studio leaderboard", Tm), mm || Um(!0)
        })), () => {
          mm = !0
        }
      }), [cm, Wm, Fm, Mm, um, am]);
      const mT = null !== (mm = null === Bm || void 0 === Bm ? void 0 : Bm.results) && void 0 !== mm ? mm : null,
        TT = function(mm, Tm, fm) {
          const [Am, am] = (0, hm.useState)({}), xm = fm ? (null !== mm && void 0 !== mm ? mm : []).flatMap((mm => "firstPartyGame" === mm.type ? [(0, wm.f)(mm.gameNameWithVariation, !0)] : [])).join(",") : "", Dm = (0, hm.useMemo)((() => "" === xm ? [] : xm.split(",")), [xm]);
          return (0, hm.useEffect)((() => {
            if (0 === Dm.length) return void am({});
            let mm = !1;
            return pm.d.getGamesByAnalyticsIds(Tm, Dm).then((Tm => {
              mm || am(Tm)
            })).catch((mm => {
              console.error("Failed to load first party discoverability for the studio leaderboard", mm)
            })), () => {
              mm = !0
            }
          }), [Dm, Tm]), Am
        }(mT, am, gm),
        fT = null !== mT ? function(mm, Tm, fm, hm, Am) {
          return mm.map(((mm, am) => {
            var xm;
            const Dm = hm + am + 1;
            if ("customGame" === mm.type) {
              const Tm = mm.preview;
              return {
                key: Tm.schematicId,
                position: Dm,
                thumbnail: (0, Zm.jsx)(Om.c, {
                  game: Tm
                }),
                name: Tm.name,
                owner: mm.owner,
                category: Tm.gameCategory,
                ccu: Tm.ccu,
                favourites: Tm.favourites,
                discoverability: (0, Em.j)(Tm) ? Tm : null,
                url: (0, zm.p)((0, wm.d)(Tm.schematicId))
              }
            }
            const im = mm.gameNameWithVariation,
              Rm = (0, wm.f)(im, !0);
            return {
              key: im,
              position: Dm,
              thumbnail: (0, Zm.jsx)(Jm.d, {
                game: im
              }),
              name: (0, zm.n)(im, Am),
              owner: null,
              category: (0, zm.d)(im),
              ccu: (0, nm.d)(im, Tm),
              favourites: null,
              discoverability: null !== (xm = fm[Rm]) && void 0 !== xm ? xm : null,
              url: (0, zm.p)(Rm)
            }
          }))
        }(mT, Xm, TT, (um - 1) * bm, fm) : [],
        hT = !tm && null === Bm,
        AT = !hT && !tm && 0 === fT.length,
        aT = null !== (Tm = null === Bm || void 0 === Bm ? void 0 : Bm.totalPages) && void 0 !== Tm ? Tm : 1;
      return (0, Zm.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, Zm.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Zm.jsx)("h1", {
            className: "StudioPageTitle",
            children: fm("studio:leaderboard")
          })
        }), (0, Zm.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!Fm && (0, Zm.jsx)("div", {
            children: fm("studio:leaderboardBanner")
          }), Fm && (0, Zm.jsx)("div", {
            children: fm("studio:leaderboardDormantBanner")
          }), (0, Zm.jsx)("div", {
            children: fm("studio:leaderboardMetricsBanner", {
              days: Gm
            })
          })]
        }), gm && (0, Zm.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: km.map((mm => (0, Zm.jsx)(qm.V, {
            active: sm === mm.scope,
            onClick: () => {
              dm({
                scope: mm.scope,
                category: Mm,
                page: 1
              })
            },
            children: fm(mm.title)
          }, mm.scope)))
        }), (0, Zm.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, Zm.jsx)(qm.V, {
            active: null === Mm,
            onClick: () => {
              dm({
                scope: sm,
                category: null,
                page: 1
              })
            },
            children: fm("studio:leaderboardAllCategories")
          }), xm.V.map((mm => (0, Zm.jsx)(qm.V, {
            active: Mm === mm,
            onClick: () => {
              dm({
                scope: sm,
                category: mm,
                page: 1
              })
            },
            children: (0, xm.gb)(mm)
          }, mm)))]
        }), hT && (0, Zm.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Zm.jsx)(Im.c, {})
        }), tm && (0, Zm.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: fm("studio:failedToLoadLeaderboard")
        }), AT && (0, Zm.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: fm("studio:leaderboardEmpty")
        }), !hT && !tm && !AT && (0, Zm.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, Zm.jsx)(Vm.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: fm("general:game")
            }, {
              key: "owner",
              header: fm("general:owner")
            }, ...null === Mm ? [{
              key: "category",
              header: fm("general:category")
            }] : [], ...gm ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: fm("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: fm("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: fm("studio:leaderboardSessionsPerPlayer")
            }, ...Fm ? [] : [{
              key: "ccu",
              header: fm("studio:metricCcu")
            }], {
              key: "favourites",
              header: fm("general:favourites")
            }],
            rows: fT,
            getRowKey: mm => mm.key,
            renderRow: mm => (0, Zm.jsxs)("tr", {
              onClick: () => {
                Am(mm.url)
              },
              children: [(0, Zm.jsx)(Pm, {
                position: mm.position
              }), (0, Zm.jsx)("td", {
                children: (0, Zm.jsx)(Jm.h, {
                  thumbnail: mm.thumbnail,
                  name: mm.name
                })
              }), (0, Zm.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === mm.owner && "-", null !== mm.owner && (0, Zm.jsx)(Ym.f, {
                  playerSocialPreview: mm.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === Mm && (0, Zm.jsx)("td", {
                children: (0, xm.gb)(mm.category)
              }), gm && (0, Zm.jsx)(ym, {
                discoverability: mm.discoverability
              }), (0, Zm.jsx)(Hm, {
                discoverability: mm.discoverability
              }), !Fm && (0, Zm.jsx)("td", {
                children: null !== mm.ccu ? (0, Dm.J)(mm.ccu) : "-"
              }), (0, Zm.jsx)("td", {
                children: null !== mm.favourites ? (0, Dm.J)(mm.favourites) : "-"
              })]
            })
          })
        }), !tm && (0, Zm.jsx)(jm.e, {
          className: "AnimFadeIn",
          page: um,
          totalPages: aT,
          onSetPage: mm => {
            dm({
              scope: sm,
              category: Mm,
              page: mm
            })
          }
        })]
      })
    }
  },
  4860: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm,
      h: () => am
    });
    var hm = fm(1548),
      Am = fm(1135);

    function am(mm) {
      let {
        thumbnail: Tm,
        name: fm
      } = mm;
      return (0, Am.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Am.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Tm
        }), (0, Am.jsx)("span", {
          className: "StudioTableGameName",
          children: fm
        })]
      })
    }

    function xm(mm) {
      let {
        game: Tm
      } = mm;
      return (0, Am.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, hm.k)(Tm),
        alt: ""
      })
    }
  },
  6409: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm
    });
    const hm = {
      1: fm(6414),
      2: fm(6423),
      3: fm(6425)
    }
  },
  4851: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm
    });
    var hm = fm(59),
      Am = fm(1080),
      am = fm.n(Am),
      xm = fm(1135);

    function wm(mm) {
      let {
        columns: Tm,
        rows: fm,
        getRowKey: Am,
        renderRow: wm,
        className: Dm
      } = mm;
      return (0, xm.jsxs)("table", {
        className: am()("Table", Dm),
        children: [(0, xm.jsx)("thead", {
          children: (0, xm.jsx)("tr", {
            children: Tm.map((mm => (0, xm.jsx)("th", {
              children: mm.header
            }, mm.key)))
          })
        }), (0, xm.jsx)("tbody", {
          children: fm.map((mm => (0, xm.jsx)(hm.Fragment, {
            children: wm(mm)
          }, Am(mm))))
        })]
      })
    }
  },
  4839: () => {},
  6414: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6423: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6425: mm => {
    mm.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);