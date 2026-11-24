export const id = 102;
export const ids = [102];
export const modules = {
  4920: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => UD
    });
    var pD = wD(1044),
      sD = wD.n(pD),
      KD = wD(1057),
      rD = wD(1346),
      LD = wD(3494),
      cD = wD(128),
      gD = wD(3535),
      RD = wD(3521),
      AD = wD(1096);

    function UD(DD) {
      let {
        game: zD
      } = DD;
      const wD = (0, cD.m)() ? "large" : "small",
        pD = (0, gD.f)(zD, wD),
        UD = (0, LD.c)(pD),
        fD = void 0 !== UD.blurhash;
      return (0, AD.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [UD.isLoading && !fD && (0, AD.jsx)(rD.e, {
          loaderType: "Secondary"
        }), !UD.failed && (null !== UD.src || fD) && (0, AD.jsx)("div", {
          className: sD()("SchematicImage", RD.g, {
            SchematicImageFadeIn: UD.fadeIn && !fD
          }),
          style: (0, RD.e)(UD),
          children: (0, AD.jsx)(RD.b, {
            image: UD
          })
        }), UD.failed && (0, AD.jsx)("div", {
          className: "SchematicImageError",
          children: (0, AD.jsx)(KD.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6556: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => ND
    });
    wD(4911);
    var pD = wD(58),
      sD = wD(1044),
      KD = wD.n(sD),
      rD = wD(338),
      LD = wD(1025),
      cD = wD(1232),
      gD = wD(1e3),
      RD = wD(1200),
      AD = wD(1495),
      UD = wD(3541),
      fD = wD(1127),
      ID = wD(4920),
      BD = wD(2600),
      GD = wD(1447),
      hD = wD(4583),
      nD = wD(4929),
      MD = wD(1346),
      OD = wD(1511),
      JD = wD(4576),
      ED = wD(2500),
      QD = wD(4936),
      XD = wD(6461),
      VD = wD(1540),
      PD = wD(1096);
    const CD = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      xD = 25,
      TD = "scope",
      bD = "category",
      jD = "customGames";
    const dD = 7,
      SD = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function iD(DD) {
      let {
        position: zD
      } = DD;
      const wD = XD.e[zD];
      return (0, PD.jsxs)("td", {
        className: KD()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== wD,
          [`StudioLeaderboardTopPosition${zD}`]: void 0 !== wD
        }),
        children: [void 0 !== wD && (0, PD.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: wD,
          alt: ""
        }), zD]
      })
    }

    function lD(DD) {
      let {
        discoverability: zD
      } = DD;
      const {
        playsPerDay: wD,
        avgPlaytimeMinutes: sD,
        retention: KD
      } = null === zD ? SD : (0, UD.h)(zD);
      return (0, PD.jsxs)(pD.Fragment, {
        children: [(0, PD.jsx)("td", {
          children: null !== wD ? (0, UD.b)(wD) : "-"
        }), (0, PD.jsx)("td", {
          children: null !== sD ? (0, UD.e)(sD) : "-"
        }), (0, PD.jsx)("td", {
          children: null !== KD ? (0, UD.f)(KD) : "-"
        })]
      })
    }

    function WD(DD) {
      let {
        discoverability: zD
      } = DD;
      return (0, PD.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === zD || void 0 === zD ? void 0 : zD.engagementScore) ? (0, cD.N)(Math.round(zD.engagementScore)) : "-"
      })
    }

    function ND() {
      var DD, zD;
      const {
        t: wD
      } = (0, RD.E)(), sD = (0, OD.useNavigatePreserveSearch)(), {
        userContext: KD,
        isUserContextUpdating: XD
      } = (0, fD.c)(), SD = (0, ED.l)(), [ND, ZD] = (0, JD.r)(), yD = (kD = ND.get(TD), CD.some((DD => DD.scope === kD)) ? kD : jD);
      var kD;
      const mD = function(DD) {
          return rD.W.includes(DD) ? DD : null
        }(ND.get(bD)),
        eD = (0, JD.g)(ND.get(JD.d)),
        [oD, aD] = (0, pD.useState)(null),
        [uD, vD] = (0, pD.useState)(!1);

      function tD(DD) {
        ZD((zD => {
          (0, JD.j)(zD, TD, DD.scope === jD ? null : DD.scope), (0, JD.j)(zD, bD, DD.category), (0, JD.n)(zD, DD.page)
        }))
      }
      const FD = !XD && KD.playerHasRank("developer"),
        YD = FD && "allGames" === yD,
        HD = FD && "dormantGames" === yD;
      (0, pD.useEffect)((() => {
        if (XD) return;
        let DD = !1;
        return aD(null), vD(!1), AD.d.getPublishedGamePreviews(KD, {
          searchQuery: null,
          pageNumber: eD,
          pageSize: xD,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== mD ? [mD] : [],
          upAndComing: !1,
          dormantGames: HD,
          sortByEngagementScore: !0,
          firstPartyGameNames: YD ? gD.d : void 0,
          includeOwners: !0
        }).then((zD => {
          DD || aD(zD)
        })).catch((zD => {
          console.error("Failed to load the studio leaderboard", zD), DD || vD(!0)
        })), () => {
          DD = !0
        }
      }), [XD, YD, HD, mD, eD, KD]);
      const qD = null !== (DD = null === oD || void 0 === oD ? void 0 : oD.results) && void 0 !== DD ? DD : null,
        Dz = function(DD, zD, wD) {
          const [sD, KD] = (0, pD.useState)({}), rD = wD ? (null !== DD && void 0 !== DD ? DD : []).flatMap((DD => "firstPartyGame" === DD.type ? [(0, LD.g)(DD.gameNameWithVariation, !0)] : [])).join(",") : "", cD = (0, pD.useMemo)((() => "" === rD ? [] : rD.split(",")), [rD]);
          return (0, pD.useEffect)((() => {
            if (0 === cD.length) return void KD({});
            let DD = !1;
            return AD.d.getGamesByAnalyticsIds(zD, cD).then((zD => {
              DD || KD(zD)
            })).catch((DD => {
              console.error("Failed to load first party discoverability for the studio leaderboard", DD)
            })), () => {
              DD = !0
            }
          }), [cD, zD]), sD
        }(qD, KD, FD),
        zz = null !== qD ? function(DD, zD, wD, pD, sD) {
          return DD.map(((DD, KD) => {
            var rD;
            const cD = pD + KD + 1;
            if ("customGame" === DD.type) {
              const zD = DD.preview;
              return {
                key: zD.schematicId,
                position: cD,
                thumbnail: (0, PD.jsx)(ID.e, {
                  game: zD
                }),
                name: zD.name,
                owner: DD.owner,
                category: zD.gameCategory,
                ccu: zD.ccu,
                favourites: zD.favourites,
                discoverability: (0, UD.j)(zD) ? zD : null,
                url: (0, VD.i)((0, LD.e)(zD.schematicId))
              }
            }
            const gD = DD.gameNameWithVariation,
              RD = (0, LD.g)(gD, !0);
            return {
              key: gD,
              position: cD,
              thumbnail: (0, PD.jsx)(QD.c, {
                game: gD
              }),
              name: (0, VD.h)(gD, sD),
              owner: null,
              category: (0, VD.b)(gD),
              ccu: (0, ED.c)(gD, zD),
              favourites: null,
              discoverability: null !== (rD = wD[RD]) && void 0 !== rD ? rD : null,
              url: (0, VD.i)(RD)
            }
          }))
        }(qD, SD, Dz, (eD - 1) * xD, wD) : [],
        wz = !uD && null === oD,
        pz = !wz && !uD && 0 === zz.length,
        sz = null !== (zD = null === oD || void 0 === oD ? void 0 : oD.totalPages) && void 0 !== zD ? zD : 1;
      return (0, PD.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, PD.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, PD.jsx)("h1", {
            className: "StudioPageTitle",
            children: wD("studio:leaderboard")
          })
        }), (0, PD.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!HD && (0, PD.jsx)("div", {
            children: wD("studio:leaderboardBanner")
          }), HD && (0, PD.jsx)("div", {
            children: wD("studio:leaderboardDormantBanner")
          }), (0, PD.jsx)("div", {
            children: wD("studio:leaderboardMetricsBanner", {
              days: dD
            })
          })]
        }), FD && (0, PD.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: CD.map((DD => (0, PD.jsx)(GD.Y, {
            active: yD === DD.scope,
            onClick: () => {
              tD({
                scope: DD.scope,
                category: mD,
                page: 1
              })
            },
            children: wD(DD.title)
          }, DD.scope)))
        }), (0, PD.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, PD.jsx)(GD.Y, {
            active: null === mD,
            onClick: () => {
              tD({
                scope: yD,
                category: null,
                page: 1
              })
            },
            children: wD("studio:leaderboardAllCategories")
          }), rD.W.map((DD => (0, PD.jsx)(GD.Y, {
            active: mD === DD,
            onClick: () => {
              tD({
                scope: yD,
                category: DD,
                page: 1
              })
            },
            children: (0, rD.bb)(DD)
          }, DD)))]
        }), wz && (0, PD.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, PD.jsx)(MD.e, {})
        }), uD && (0, PD.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: wD("studio:failedToLoadLeaderboard")
        }), pz && (0, PD.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: wD("studio:leaderboardEmpty")
        }), !wz && !uD && !pz && (0, PD.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, PD.jsx)(nD.d, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: wD("general:game")
            }, {
              key: "owner",
              header: wD("general:owner")
            }, ...null === mD ? [{
              key: "category",
              header: wD("general:category")
            }] : [], ...FD ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: wD("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: wD("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: wD("studio:leaderboardSessionsPerPlayer")
            }, ...HD ? [] : [{
              key: "ccu",
              header: wD("studio:metricCcu")
            }], {
              key: "favourites",
              header: wD("general:favourites")
            }],
            rows: zz,
            getRowKey: DD => DD.key,
            renderRow: DD => (0, PD.jsxs)("tr", {
              onClick: () => {
                sD(DD.url)
              },
              children: [(0, PD.jsx)(iD, {
                position: DD.position
              }), (0, PD.jsx)("td", {
                children: (0, PD.jsx)(QD.d, {
                  thumbnail: DD.thumbnail,
                  name: DD.name
                })
              }), (0, PD.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === DD.owner && "-", null !== DD.owner && (0, PD.jsx)(BD.e, {
                  playerSocialPreview: DD.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === mD && (0, PD.jsx)("td", {
                children: (0, rD.bb)(DD.category)
              }), FD && (0, PD.jsx)(WD, {
                discoverability: DD.discoverability
              }), (0, PD.jsx)(lD, {
                discoverability: DD.discoverability
              }), !HD && (0, PD.jsx)("td", {
                children: null !== DD.ccu ? (0, cD.N)(DD.ccu) : "-"
              }), (0, PD.jsx)("td", {
                children: null !== DD.favourites ? (0, cD.N)(DD.favourites) : "-"
              })]
            })
          })
        }), !uD && (0, PD.jsx)(hD.c, {
          className: "AnimFadeIn",
          page: eD,
          totalPages: sz,
          onSetPage: DD => {
            tD({
              scope: yD,
              category: mD,
              page: DD
            })
          }
        })]
      })
    }
  },
  4936: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD,
      d: () => KD
    });
    var pD = wD(1540),
      sD = wD(1096);

    function KD(DD) {
      let {
        thumbnail: zD,
        name: wD
      } = DD;
      return (0, sD.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, sD.jsx)("div", {
          className: "StudioTableThumbnail",
          children: zD
        }), (0, sD.jsx)("span", {
          className: "StudioTableGameName",
          children: wD
        })]
      })
    }

    function rD(DD) {
      let {
        game: zD
      } = DD;
      return (0, sD.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, pD.f)(zD),
        alt: ""
      })
    }
  },
  6461: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    const pD = {
      1: wD(6469),
      2: wD(6478),
      3: wD(6481)
    }
  },
  4929: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD
    });
    var pD = wD(58),
      sD = wD(1044),
      KD = wD.n(sD),
      rD = wD(1096);

    function LD(DD) {
      let {
        columns: zD,
        rows: wD,
        getRowKey: sD,
        renderRow: LD,
        className: cD
      } = DD;
      return (0, rD.jsxs)("table", {
        className: KD()("Table", cD),
        children: [(0, rD.jsx)("thead", {
          children: (0, rD.jsx)("tr", {
            children: zD.map((DD => (0, rD.jsx)("th", {
              children: DD.header
            }, DD.key)))
          })
        }), (0, rD.jsx)("tbody", {
          children: wD.map((DD => (0, rD.jsx)(pD.Fragment, {
            children: LD(DD)
          }, sD(DD))))
        })]
      })
    }
  },
  4911: () => {},
  6469: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6478: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6481: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);