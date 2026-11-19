export const id = 100;
export const ids = [100];
export const modules = {
  4677: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => yD
    });
    var ID = cD(1049),
      pD = cD.n(ID),
      iD = cD(1064),
      fD = cD(1328),
      bD = cD(3314),
      QD = cD(120),
      wD = cD(3346),
      SD = cD(3342),
      BD = cD(1093);

    function yD(DD) {
      let {
        game: CD
      } = DD;
      const cD = (0, QD.i)() ? "large" : "small",
        ID = (0, wD.f)(CD, cD),
        yD = (0, bD.f)(ID),
        MD = void 0 !== yD.blurhash;
      return (0, BD.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [yD.isLoading && !MD && (0, BD.jsx)(fD.e, {
          loaderType: "Secondary"
        }), !yD.failed && (null !== yD.src || MD) && (0, BD.jsx)("div", {
          className: pD()("SchematicImage", SD.h, {
            SchematicImageFadeIn: yD.fadeIn && !MD
          }),
          style: (0, SD.d)(yD),
          children: (0, BD.jsx)(SD.b, {
            image: yD
          })
        }), yD.failed && (0, BD.jsx)("div", {
          className: "SchematicImageError",
          children: (0, BD.jsx)(iD.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6253: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => TD
    });
    cD(4668);
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(312),
      bD = cD(1025),
      QD = cD(1221),
      wD = cD(1007),
      SD = cD(1192),
      BD = cD(1497),
      yD = cD(3364),
      MD = cD(1120),
      tD = cD(4677),
      ZD = cD(2466),
      oD = cD(1442),
      vD = cD(4361),
      ND = cD(4681),
      gD = cD(1328),
      XD = cD(1508),
      mD = cD(4353),
      nD = cD(2432),
      OD = cD(4690),
      PD = cD(6147),
      HD = cD(1537),
      UD = cD(1093);
    const xD = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      qD = 25,
      JD = "scope",
      KD = "category",
      aD = "customGames";
    const VD = 7,
      zD = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function jD(DD) {
      let {
        position: CD
      } = DD;
      const cD = PD.c[CD];
      return (0, UD.jsxs)("td", {
        className: iD()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== cD,
          [`StudioLeaderboardTopPosition${CD}`]: void 0 !== cD
        }),
        children: [void 0 !== cD && (0, UD.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: cD,
          alt: ""
        }), CD]
      })
    }

    function lD(DD) {
      let {
        discoverability: CD
      } = DD;
      const {
        playsPerDay: cD,
        avgPlaytimeMinutes: pD,
        retention: iD
      } = null === CD ? zD : (0, yD.n)(CD);
      return (0, UD.jsxs)(ID.Fragment, {
        children: [(0, UD.jsx)("td", {
          children: null !== cD ? (0, yD.c)(cD) : "-"
        }), (0, UD.jsx)("td", {
          children: null !== pD ? (0, yD.g)(pD) : "-"
        }), (0, UD.jsx)("td", {
          children: null !== iD ? (0, yD.j)(iD) : "-"
        })]
      })
    }

    function LD(DD) {
      let {
        discoverability: CD
      } = DD;
      return (0, UD.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === CD || void 0 === CD ? void 0 : CD.engagementScore) ? (0, QD.S)(Math.round(CD.engagementScore)) : "-"
      })
    }

    function TD() {
      var DD, CD;
      const {
        t: cD
      } = (0, SD.F)(), pD = (0, XD.useNavigatePreserveSearch)(), {
        userContext: iD,
        isUserContextUpdating: PD
      } = (0, MD.c)(), zD = (0, nD.g)(), [TD, GD] = (0, mD.k)(), RD = (kD = TD.get(JD), xD.some((DD => DD.scope === kD)) ? kD : aD);
      var kD;
      const dD = function(DD) {
          return fD.S.includes(DD) ? DD : null
        }(TD.get(KD)),
        YD = (0, mD.e)(TD.get(mD.b)),
        [WD, sD] = (0, ID.useState)(null),
        [ED, eD] = (0, ID.useState)(!1);

      function uD(DD) {
        GD((CD => {
          (0, mD.f)(CD, JD, DD.scope === aD ? null : DD.scope), (0, mD.f)(CD, KD, DD.category), (0, mD.h)(CD, DD.page)
        }))
      }
      const hD = !PD && iD.playerHasRank("developer"),
        rD = hD && "allGames" === RD,
        AD = hD && "dormantGames" === RD;
      (0, ID.useEffect)((() => {
        if (PD) return;
        let DD = !1;
        return sD(null), eD(!1), BD.c.getPublishedGamePreviews(iD, {
          searchQuery: null,
          pageNumber: YD,
          pageSize: qD,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== dD ? [dD] : [],
          upAndComing: !1,
          dormantGames: AD,
          sortByEngagementScore: !0,
          firstPartyGameNames: rD ? wD.b : void 0,
          includeOwners: !0
        }).then((CD => {
          DD || sD(CD)
        })).catch((CD => {
          console.error("Failed to load the studio leaderboard", CD), DD || eD(!0)
        })), () => {
          DD = !0
        }
      }), [PD, rD, AD, dD, YD, iD]);
      const FD = null !== (DD = null === WD || void 0 === WD ? void 0 : WD.results) && void 0 !== DD ? DD : null,
        DC = function(DD, CD, cD) {
          const [pD, iD] = (0, ID.useState)({}), fD = cD ? (null !== DD && void 0 !== DD ? DD : []).flatMap((DD => "firstPartyGame" === DD.type ? [(0, bD.f)(DD.gameNameWithVariation, !0)] : [])).join(",") : "", QD = (0, ID.useMemo)((() => "" === fD ? [] : fD.split(",")), [fD]);
          return (0, ID.useEffect)((() => {
            if (0 === QD.length) return void iD({});
            let DD = !1;
            return BD.c.getGamesByAnalyticsIds(CD, QD).then((CD => {
              DD || iD(CD)
            })).catch((DD => {
              console.error("Failed to load first party discoverability for the studio leaderboard", DD)
            })), () => {
              DD = !0
            }
          }), [QD, CD]), pD
        }(FD, iD, hD),
        CC = null !== FD ? function(DD, CD, cD, ID, pD) {
          return DD.map(((DD, iD) => {
            var fD;
            const QD = ID + iD + 1;
            if ("customGame" === DD.type) {
              const CD = DD.preview;
              return {
                key: CD.schematicId,
                position: QD,
                thumbnail: (0, UD.jsx)(tD.e, {
                  game: CD
                }),
                name: CD.name,
                owner: DD.owner,
                category: CD.gameCategory,
                ccu: CD.ccu,
                favourites: CD.favourites,
                discoverability: (0, yD.q)(CD) ? CD : null,
                url: (0, HD.o)((0, bD.d)(CD.schematicId))
              }
            }
            const wD = DD.gameNameWithVariation,
              SD = (0, bD.f)(wD, !0);
            return {
              key: wD,
              position: QD,
              thumbnail: (0, UD.jsx)(OD.c, {
                game: wD
              }),
              name: (0, HD.m)(wD, pD),
              owner: null,
              category: (0, HD.c)(wD),
              ccu: (0, nD.b)(wD, CD),
              favourites: null,
              discoverability: null !== (fD = cD[SD]) && void 0 !== fD ? fD : null,
              url: (0, HD.o)(SD)
            }
          }))
        }(FD, zD, DC, (YD - 1) * qD, cD) : [],
        cC = !ED && null === WD,
        IC = !cC && !ED && 0 === CC.length,
        pC = null !== (CD = null === WD || void 0 === WD ? void 0 : WD.totalPages) && void 0 !== CD ? CD : 1;
      return (0, UD.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, UD.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, UD.jsx)("h1", {
            className: "StudioPageTitle",
            children: cD("studio:leaderboard")
          })
        }), (0, UD.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!AD && (0, UD.jsx)("div", {
            children: cD("studio:leaderboardBanner")
          }), AD && (0, UD.jsx)("div", {
            children: cD("studio:leaderboardDormantBanner")
          }), (0, UD.jsx)("div", {
            children: cD("studio:leaderboardMetricsBanner", {
              days: VD
            })
          })]
        }), hD && (0, UD.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: xD.map((DD => (0, UD.jsx)(oD.P, {
            active: RD === DD.scope,
            onClick: () => {
              uD({
                scope: DD.scope,
                category: dD,
                page: 1
              })
            },
            children: cD(DD.title)
          }, DD.scope)))
        }), (0, UD.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, UD.jsx)(oD.P, {
            active: null === dD,
            onClick: () => {
              uD({
                scope: RD,
                category: null,
                page: 1
              })
            },
            children: cD("studio:leaderboardAllCategories")
          }), fD.S.map((DD => (0, UD.jsx)(oD.P, {
            active: dD === DD,
            onClick: () => {
              uD({
                scope: RD,
                category: DD,
                page: 1
              })
            },
            children: (0, fD.ab)(DD)
          }, DD)))]
        }), cC && (0, UD.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, UD.jsx)(gD.e, {})
        }), ED && (0, UD.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: cD("studio:failedToLoadLeaderboard")
        }), IC && (0, UD.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: cD("studio:leaderboardEmpty")
        }), !cC && !ED && !IC && (0, UD.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, UD.jsx)(ND.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: cD("general:game")
            }, {
              key: "owner",
              header: cD("general:owner")
            }, ...null === dD ? [{
              key: "category",
              header: cD("general:category")
            }] : [], ...hD ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: cD("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: cD("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: cD("studio:leaderboardSessionsPerPlayer")
            }, ...AD ? [] : [{
              key: "ccu",
              header: cD("studio:metricCcu")
            }], {
              key: "favourites",
              header: cD("general:favourites")
            }],
            rows: CC,
            getRowKey: DD => DD.key,
            renderRow: DD => (0, UD.jsxs)("tr", {
              onClick: () => {
                pD(DD.url)
              },
              children: [(0, UD.jsx)(jD, {
                position: DD.position
              }), (0, UD.jsx)("td", {
                children: (0, UD.jsx)(OD.e, {
                  thumbnail: DD.thumbnail,
                  name: DD.name
                })
              }), (0, UD.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === DD.owner && "-", null !== DD.owner && (0, UD.jsx)(ZD.h, {
                  playerSocialPreview: DD.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === dD && (0, UD.jsx)("td", {
                children: (0, fD.ab)(DD.category)
              }), hD && (0, UD.jsx)(LD, {
                discoverability: DD.discoverability
              }), (0, UD.jsx)(lD, {
                discoverability: DD.discoverability
              }), !AD && (0, UD.jsx)("td", {
                children: null !== DD.ccu ? (0, QD.S)(DD.ccu) : "-"
              }), (0, UD.jsx)("td", {
                children: null !== DD.favourites ? (0, QD.S)(DD.favourites) : "-"
              })]
            })
          })
        }), !ED && (0, UD.jsx)(vD.c, {
          className: "AnimFadeIn",
          page: YD,
          totalPages: pC,
          onSetPage: DD => {
            uD({
              scope: RD,
              category: dD,
              page: DD
            })
          }
        })]
      })
    }
  },
  4690: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      e: () => iD
    });
    var ID = cD(1537),
      pD = cD(1093);

    function iD(DD) {
      let {
        thumbnail: CD,
        name: cD
      } = DD;
      return (0, pD.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, pD.jsx)("div", {
          className: "StudioTableThumbnail",
          children: CD
        }), (0, pD.jsx)("span", {
          className: "StudioTableGameName",
          children: cD
        })]
      })
    }

    function fD(DD) {
      let {
        game: CD
      } = DD;
      return (0, pD.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, ID.j)(CD),
        alt: ""
      })
    }
  },
  6147: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    const ID = {
      1: cD(6153),
      2: cD(6161),
      3: cD(6163)
    }
  },
  4681: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(1093);

    function bD(DD) {
      let {
        columns: CD,
        rows: cD,
        getRowKey: pD,
        renderRow: bD,
        className: QD
      } = DD;
      return (0, fD.jsxs)("table", {
        className: iD()("Table", QD),
        children: [(0, fD.jsx)("thead", {
          children: (0, fD.jsx)("tr", {
            children: CD.map((DD => (0, fD.jsx)("th", {
              children: DD.header
            }, DD.key)))
          })
        }), (0, fD.jsx)("tbody", {
          children: cD.map((DD => (0, fD.jsx)(ID.Fragment, {
            children: bD(DD)
          }, pD(DD))))
        })]
      })
    }
  },
  4668: () => {},
  6153: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6161: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6163: DD => {
    DD.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);