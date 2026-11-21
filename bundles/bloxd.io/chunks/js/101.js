export const id = 101;
export const ids = [101];
export const modules = {
  4794: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ld
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(1059),
      Pd = kd(1359),
      Zd = kd(3360),
      gd = kd(126),
      Cd = kd(3408),
      Kd = kd(3397),
      od = kd(1103);

    function ld(dd) {
      let {
        game: Jd
      } = dd;
      const kd = (0, gd.n)() ? "large" : "small",
        pd = (0, Cd.d)(Jd, kd),
        ld = (0, Zd.h)(pd),
        Qd = void 0 !== ld.blurhash;
      return (0, od.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [ld.isLoading && !Qd && (0, od.jsx)(Pd.b, {
          loaderType: "Secondary"
        }), !ld.failed && (null !== ld.src || Qd) && (0, od.jsx)("div", {
          className: Nd()("SchematicImage", Kd.f, {
            SchematicImageFadeIn: ld.fadeIn && !Qd
          }),
          style: (0, Kd.c)(ld),
          children: (0, od.jsx)(Kd.b, {
            image: ld
          })
        }), ld.failed && (0, od.jsx)("div", {
          className: "SchematicImageError",
          children: (0, od.jsx)(Wd.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6381: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => yd
    });
    kd(4788);
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(300),
      Zd = kd(1022),
      gd = kd(1245),
      Cd = kd(1008),
      Kd = kd(1211),
      od = kd(1520),
      ld = kd(3424),
      Qd = kd(1140),
      Ld = kd(4794),
      Od = kd(2479),
      ed = kd(1461),
      Rd = kd(4417),
      Id = kd(4796),
      Gd = kd(1359),
      vd = kd(1543),
      xd = kd(4411),
      qd = kd(2432),
      Bd = kd(4799),
      sd = kd(6282),
      ad = kd(1569),
      Md = kd(1103);
    const Fd = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      Yd = 25,
      md = "scope",
      bd = "category",
      Sd = "customGames";
    const jd = 7,
      Xd = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function fd(dd) {
      let {
        position: Jd
      } = dd;
      const kd = sd.d[Jd];
      return (0, Md.jsxs)("td", {
        className: Wd()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== kd,
          [`StudioLeaderboardTopPosition${Jd}`]: void 0 !== kd
        }),
        children: [void 0 !== kd && (0, Md.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: kd,
          alt: ""
        }), Jd]
      })
    }

    function nd(dd) {
      let {
        discoverability: Jd
      } = dd;
      const {
        playsPerDay: kd,
        avgPlaytimeMinutes: Nd,
        retention: Wd
      } = null === Jd ? Xd : (0, ld.h)(Jd);
      return (0, Md.jsxs)(pd.Fragment, {
        children: [(0, Md.jsx)("td", {
          children: null !== kd ? (0, ld.b)(kd) : "-"
        }), (0, Md.jsx)("td", {
          children: null !== Nd ? (0, ld.d)(Nd) : "-"
        }), (0, Md.jsx)("td", {
          children: null !== Wd ? (0, ld.f)(Wd) : "-"
        })]
      })
    }

    function Ud(dd) {
      let {
        discoverability: Jd
      } = dd;
      return (0, Md.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === Jd || void 0 === Jd ? void 0 : Jd.engagementScore) ? (0, gd.Q)(Math.round(Jd.engagementScore)) : "-"
      })
    }

    function yd() {
      var dd, Jd;
      const {
        t: kd
      } = (0, Kd.B)(), Nd = (0, vd.useNavigatePreserveSearch)(), {
        userContext: Wd,
        isUserContextUpdating: sd
      } = (0, Qd.c)(), Xd = (0, qd.i)(), [yd, Dd] = (0, xd.l)(), Td = (Ed = yd.get(md), Fd.some((dd => dd.scope === Ed)) ? Ed : Sd);
      var Ed;
      const cd = function(dd) {
          return Pd.U.includes(dd) ? dd : null
        }(yd.get(bd)),
        hd = (0, xd.e)(yd.get(xd.b)),
        [rd, ud] = (0, pd.useState)(null),
        [td, Vd] = (0, pd.useState)(!1);

      function zd(dd) {
        Dd((Jd => {
          (0, xd.i)(Jd, md, dd.scope === Sd ? null : dd.scope), (0, xd.i)(Jd, bd, dd.category), (0, xd.k)(Jd, dd.page)
        }))
      }
      const Hd = !sd && Wd.playerHasRank("developer"),
        wd = Hd && "allGames" === Td,
        Ad = Hd && "dormantGames" === Td;
      (0, pd.useEffect)((() => {
        if (sd) return;
        let dd = !1;
        return ud(null), Vd(!1), od.d.getPublishedGamePreviews(Wd, {
          searchQuery: null,
          pageNumber: hd,
          pageSize: Yd,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== cd ? [cd] : [],
          upAndComing: !1,
          dormantGames: Ad,
          sortByEngagementScore: !0,
          firstPartyGameNames: wd ? Cd.d : void 0,
          includeOwners: !0
        }).then((Jd => {
          dd || ud(Jd)
        })).catch((Jd => {
          console.error("Failed to load the studio leaderboard", Jd), dd || Vd(!0)
        })), () => {
          dd = !0
        }
      }), [sd, wd, Ad, cd, hd, Wd]);
      const dJ = null !== (dd = null === rd || void 0 === rd ? void 0 : rd.results) && void 0 !== dd ? dd : null,
        JJ = function(dd, Jd, kd) {
          const [Nd, Wd] = (0, pd.useState)({}), Pd = kd ? (null !== dd && void 0 !== dd ? dd : []).flatMap((dd => "firstPartyGame" === dd.type ? [(0, Zd.i)(dd.gameNameWithVariation, !0)] : [])).join(",") : "", gd = (0, pd.useMemo)((() => "" === Pd ? [] : Pd.split(",")), [Pd]);
          return (0, pd.useEffect)((() => {
            if (0 === gd.length) return void Wd({});
            let dd = !1;
            return od.d.getGamesByAnalyticsIds(Jd, gd).then((Jd => {
              dd || Wd(Jd)
            })).catch((dd => {
              console.error("Failed to load first party discoverability for the studio leaderboard", dd)
            })), () => {
              dd = !0
            }
          }), [gd, Jd]), Nd
        }(dJ, Wd, Hd),
        kJ = null !== dJ ? function(dd, Jd, kd, pd, Nd) {
          return dd.map(((dd, Wd) => {
            var Pd;
            const gd = pd + Wd + 1;
            if ("customGame" === dd.type) {
              const Jd = dd.preview;
              return {
                key: Jd.schematicId,
                position: gd,
                thumbnail: (0, Md.jsx)(Ld.c, {
                  game: Jd
                }),
                name: Jd.name,
                owner: dd.owner,
                category: Jd.gameCategory,
                ccu: Jd.ccu,
                favourites: Jd.favourites,
                discoverability: (0, ld.j)(Jd) ? Jd : null,
                url: (0, ad.s)((0, Zd.e)(Jd.schematicId))
              }
            }
            const Cd = dd.gameNameWithVariation,
              Kd = (0, Zd.i)(Cd, !0);
            return {
              key: Cd,
              position: gd,
              thumbnail: (0, Md.jsx)(Bd.b, {
                game: Cd
              }),
              name: (0, ad.p)(Cd, Nd),
              owner: null,
              category: (0, ad.e)(Cd),
              ccu: (0, qd.b)(Cd, Jd),
              favourites: null,
              discoverability: null !== (Pd = kd[Kd]) && void 0 !== Pd ? Pd : null,
              url: (0, ad.s)(Kd)
            }
          }))
        }(dJ, Xd, JJ, (hd - 1) * Yd, kd) : [],
        pJ = !td && null === rd,
        NJ = !pJ && !td && 0 === kJ.length,
        WJ = null !== (Jd = null === rd || void 0 === rd ? void 0 : rd.totalPages) && void 0 !== Jd ? Jd : 1;
      return (0, Md.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, Md.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, Md.jsx)("h1", {
            className: "StudioPageTitle",
            children: kd("studio:leaderboard")
          })
        }), (0, Md.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!Ad && (0, Md.jsx)("div", {
            children: kd("studio:leaderboardBanner")
          }), Ad && (0, Md.jsx)("div", {
            children: kd("studio:leaderboardDormantBanner")
          }), (0, Md.jsx)("div", {
            children: kd("studio:leaderboardMetricsBanner", {
              days: jd
            })
          })]
        }), Hd && (0, Md.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: Fd.map((dd => (0, Md.jsx)(ed.G, {
            active: Td === dd.scope,
            onClick: () => {
              zd({
                scope: dd.scope,
                category: cd,
                page: 1
              })
            },
            children: kd(dd.title)
          }, dd.scope)))
        }), (0, Md.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, Md.jsx)(ed.G, {
            active: null === cd,
            onClick: () => {
              zd({
                scope: Td,
                category: null,
                page: 1
              })
            },
            children: kd("studio:leaderboardAllCategories")
          }), Pd.U.map((dd => (0, Md.jsx)(ed.G, {
            active: cd === dd,
            onClick: () => {
              zd({
                scope: Td,
                category: dd,
                page: 1
              })
            },
            children: (0, Pd.eb)(dd)
          }, dd)))]
        }), pJ && (0, Md.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, Md.jsx)(Gd.b, {})
        }), td && (0, Md.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: kd("studio:failedToLoadLeaderboard")
        }), NJ && (0, Md.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: kd("studio:leaderboardEmpty")
        }), !pJ && !td && !NJ && (0, Md.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, Md.jsx)(Id.d, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: kd("general:game")
            }, {
              key: "owner",
              header: kd("general:owner")
            }, ...null === cd ? [{
              key: "category",
              header: kd("general:category")
            }] : [], ...Hd ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: kd("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: kd("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: kd("studio:leaderboardSessionsPerPlayer")
            }, ...Ad ? [] : [{
              key: "ccu",
              header: kd("studio:metricCcu")
            }], {
              key: "favourites",
              header: kd("general:favourites")
            }],
            rows: kJ,
            getRowKey: dd => dd.key,
            renderRow: dd => (0, Md.jsxs)("tr", {
              onClick: () => {
                Nd(dd.url)
              },
              children: [(0, Md.jsx)(fd, {
                position: dd.position
              }), (0, Md.jsx)("td", {
                children: (0, Md.jsx)(Bd.f, {
                  thumbnail: dd.thumbnail,
                  name: dd.name
                })
              }), (0, Md.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === dd.owner && "-", null !== dd.owner && (0, Md.jsx)(Od.f, {
                  playerSocialPreview: dd.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === cd && (0, Md.jsx)("td", {
                children: (0, Pd.eb)(dd.category)
              }), Hd && (0, Md.jsx)(Ud, {
                discoverability: dd.discoverability
              }), (0, Md.jsx)(nd, {
                discoverability: dd.discoverability
              }), !Ad && (0, Md.jsx)("td", {
                children: null !== dd.ccu ? (0, gd.Q)(dd.ccu) : "-"
              }), (0, Md.jsx)("td", {
                children: null !== dd.favourites ? (0, gd.Q)(dd.favourites) : "-"
              })]
            })
          })
        }), !td && (0, Md.jsx)(Rd.b, {
          className: "AnimFadeIn",
          page: hd,
          totalPages: WJ,
          onSetPage: dd => {
            zd({
              scope: Td,
              category: cd,
              page: dd
            })
          }
        })]
      })
    }
  },
  4799: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd,
      f: () => Wd
    });
    var pd = kd(1569),
      Nd = kd(1103);

    function Wd(dd) {
      let {
        thumbnail: Jd,
        name: kd
      } = dd;
      return (0, Nd.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, Nd.jsx)("div", {
          className: "StudioTableThumbnail",
          children: Jd
        }), (0, Nd.jsx)("span", {
          className: "StudioTableGameName",
          children: kd
        })]
      })
    }

    function Pd(dd) {
      let {
        game: Jd
      } = dd;
      return (0, Nd.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, pd.l)(Jd),
        alt: ""
      })
    }
  },
  6282: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    const pd = {
      1: kd(6287),
      2: kd(6289),
      3: kd(6295)
    }
  },
  4796: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1103);

    function Zd(dd) {
      let {
        columns: Jd,
        rows: kd,
        getRowKey: Nd,
        renderRow: Zd,
        className: gd
      } = dd;
      return (0, Pd.jsxs)("table", {
        className: Wd()("Table", gd),
        children: [(0, Pd.jsx)("thead", {
          children: (0, Pd.jsx)("tr", {
            children: Jd.map((dd => (0, Pd.jsx)("th", {
              children: dd.header
            }, dd.key)))
          })
        }), (0, Pd.jsx)("tbody", {
          children: kd.map((dd => (0, Pd.jsx)(pd.Fragment, {
            children: Zd(dd)
          }, Nd(dd))))
        })]
      })
    }
  },
  4788: () => {},
  6287: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6289: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6295: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);