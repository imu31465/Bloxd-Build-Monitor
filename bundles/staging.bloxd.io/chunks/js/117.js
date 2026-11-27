export const id = 117;
export const ids = [117];
export const modules = {
  5792: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => wR
    });
    var yR = GR(1163),
      tR = GR.n(yR),
      uR = GR(1468),
      ZR = GR(1465),
      qR = GR(4850),
      iR = GR(134),
      fR = GR(4889),
      VR = GR(4881),
      KR = GR(1378);

    function wR(RR) {
      let {
        game: JR
      } = RR;
      const GR = (0, iR.is99NightsCrazyGamesBundle)() ? "large" : "small",
        yR = (0, fR.d)(JR, GR),
        wR = (0, qR.h)(yR),
        rR = void 0 !== wR.blurhash;
      return (0, KR.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [wR.isLoading && !rR && (0, KR.jsx)(ZR.d, {
          loaderType: "Secondary"
        }), !wR.failed && (null !== wR.src || rR) && (0, KR.jsx)("div", {
          className: tR()("SchematicImage", VR.f, {
            SchematicImageFadeIn: wR.fadeIn && !rR
          }),
          style: (0, VR.c)(wR),
          children: (0, KR.jsx)(VR.b, {
            image: wR
          })
        }), wR.failed && (0, KR.jsx)("div", {
          className: "SchematicImageError",
          children: (0, KR.jsx)(uR.d, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  7646: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => PR
    });
    GR(5785);
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(359),
      qR = GR(1141),
      iR = GR(1317),
      fR = GR(1120),
      VR = GR(1270),
      KR = GR(1647),
      wR = GR(4897),
      rR = GR(1196),
      eR = GR(5792),
      aR = GR(3713),
      LR = GR(1590),
      nR = GR(5375),
      UR = GR(5798),
      WR = GR(1465),
      AR = GR(1663),
      CR = GR(5368),
      XR = GR(3611),
      MR = GR(5804),
      BR = GR(7524),
      lR = GR(1695),
      pR = GR(1378);
    const gR = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      bR = 25,
      vR = "scope",
      OR = "category",
      xR = "customGames";
    const NR = 7,
      DR = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function HR(RR) {
      let {
        position: JR
      } = RR;
      const GR = BR.d[JR];
      return (0, pR.jsxs)("td", {
        className: uR()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== GR,
          [`StudioLeaderboardTopPosition${JR}`]: void 0 !== GR
        }),
        children: [void 0 !== GR && (0, pR.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: GR,
          alt: ""
        }), JR]
      })
    }

    function oR(RR) {
      let {
        discoverability: JR
      } = RR;
      const {
        playsPerDay: GR,
        avgPlaytimeMinutes: tR,
        retention: uR
      } = null === JR ? DR : (0, wR.m)(JR);
      return (0, pR.jsxs)(yR.Fragment, {
        children: [(0, pR.jsx)("td", {
          children: null !== GR ? (0, wR.c)(GR) : "-"
        }), (0, pR.jsx)("td", {
          children: null !== tR ? (0, wR.g)(tR) : "-"
        }), (0, pR.jsx)("td", {
          children: null !== uR ? (0, wR.k)(uR) : "-"
        })]
      })
    }

    function cR(RR) {
      let {
        discoverability: JR
      } = RR;
      return (0, pR.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === JR || void 0 === JR ? void 0 : JR.engagementScore) ? (0, iR.J)(Math.round(JR.engagementScore)) : "-"
      })
    }

    function PR() {
      var RR, JR;
      const {
        t: GR
      } = (0, VR.A)(), tR = (0, AR.useNavigatePreserveSearch)(), {
        userContext: uR,
        isUserContextUpdating: BR
      } = (0, rR.d)(), DR = (0, XR.l)(), [PR, IR] = (0, CR.o)(), mR = (zR = PR.get(vR), gR.some((RR => RR.scope === zR)) ? zR : xR);
      var zR;
      const SR = function(RR) {
          return ZR.V.includes(RR) ? RR : null
        }(PR.get(OR)),
        jR = (0, CR.g)(PR.get(CR.c)),
        [dR, ER] = (0, yR.useState)(null),
        [YR, kR] = (0, yR.useState)(!1);

      function QR(RR) {
        IR((JR => {
          (0, CR.h)(JR, vR, RR.scope === xR ? null : RR.scope), (0, CR.h)(JR, OR, RR.category), (0, CR.l)(JR, RR.page)
        }))
      }
      const FR = !BR && uR.playerHasRank("developer"),
        TR = FR && "allGames" === mR,
        sR = FR && "dormantGames" === mR;
      (0, yR.useEffect)((() => {
        if (BR) return;
        let RR = !1;
        return ER(null), kR(!1), KR.c.getPublishedGamePreviews(uR, {
          searchQuery: null,
          pageNumber: jR,
          pageSize: bR,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== SR ? [SR] : [],
          upAndComing: !1,
          dormantGames: sR,
          sortByEngagementScore: !0,
          firstPartyGameNames: TR ? fR.b : void 0,
          includeOwners: !0
        }).then((JR => {
          RR || ER(JR)
        })).catch((JR => {
          console.error("Failed to load the studio leaderboard", JR), RR || kR(!0)
        })), () => {
          RR = !0
        }
      }), [BR, TR, sR, SR, jR, uR]);
      const hR = null !== (RR = null === dR || void 0 === dR ? void 0 : dR.results) && void 0 !== RR ? RR : null,
        RJ = function(RR, JR, GR) {
          const [tR, uR] = (0, yR.useState)({}), ZR = GR ? (null !== RR && void 0 !== RR ? RR : []).flatMap((RR => "firstPartyGame" === RR.type ? [(0, qR.e)(RR.gameNameWithVariation, !0)] : [])).join(",") : "", iR = (0, yR.useMemo)((() => "" === ZR ? [] : ZR.split(",")), [ZR]);
          return (0, yR.useEffect)((() => {
            if (0 === iR.length) return void uR({});
            let RR = !1;
            return KR.c.getGamesByAnalyticsIds(JR, iR).then((JR => {
              RR || uR(JR)
            })).catch((RR => {
              console.error("Failed to load first party discoverability for the studio leaderboard", RR)
            })), () => {
              RR = !0
            }
          }), [iR, JR]), tR
        }(hR, uR, FR),
        JJ = null !== hR ? function(RR, JR, GR, yR, tR) {
          return RR.map(((RR, uR) => {
            var ZR;
            const iR = yR + uR + 1;
            if ("customGame" === RR.type) {
              const JR = RR.preview;
              return {
                key: JR.schematicId,
                position: iR,
                thumbnail: (0, pR.jsx)(eR.e, {
                  game: JR
                }),
                name: JR.name,
                owner: RR.owner,
                category: JR.gameCategory,
                ccu: JR.ccu,
                favourites: JR.favourites,
                discoverability: (0, wR.o)(JR) ? JR : null,
                url: (0, lR.p)((0, qR.d)(JR.schematicId))
              }
            }
            const fR = RR.gameNameWithVariation,
              VR = (0, qR.e)(fR, !0);
            return {
              key: fR,
              position: iR,
              thumbnail: (0, pR.jsx)(MR.d, {
                game: fR
              }),
              name: (0, lR.n)(fR, tR),
              owner: null,
              category: (0, lR.f)(fR),
              ccu: (0, XR.c)(fR, JR),
              favourites: null,
              discoverability: null !== (ZR = GR[VR]) && void 0 !== ZR ? ZR : null,
              url: (0, lR.p)(VR)
            }
          }))
        }(hR, DR, RJ, (jR - 1) * bR, GR) : [],
        GJ = !YR && null === dR,
        yJ = !GJ && !YR && 0 === JJ.length,
        tJ = null !== (JR = null === dR || void 0 === dR ? void 0 : dR.totalPages) && void 0 !== JR ? JR : 1;
      return (0, pR.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, pR.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, pR.jsx)("h1", {
            className: "StudioPageTitle",
            children: GR("studio:leaderboard")
          })
        }), (0, pR.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!sR && (0, pR.jsx)("div", {
            children: GR("studio:leaderboardBanner")
          }), sR && (0, pR.jsx)("div", {
            children: GR("studio:leaderboardDormantBanner")
          }), (0, pR.jsx)("div", {
            children: GR("studio:leaderboardMetricsBanner", {
              days: NR
            })
          })]
        }), FR && (0, pR.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: gR.map((RR => (0, pR.jsx)(LR.U, {
            active: mR === RR.scope,
            onClick: () => {
              QR({
                scope: RR.scope,
                category: SR,
                page: 1
              })
            },
            children: GR(RR.title)
          }, RR.scope)))
        }), (0, pR.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, pR.jsx)(LR.U, {
            active: null === SR,
            onClick: () => {
              QR({
                scope: mR,
                category: null,
                page: 1
              })
            },
            children: GR("studio:leaderboardAllCategories")
          }), ZR.V.map((RR => (0, pR.jsx)(LR.U, {
            active: SR === RR,
            onClick: () => {
              QR({
                scope: mR,
                category: RR,
                page: 1
              })
            },
            children: (0, ZR.eb)(RR)
          }, RR)))]
        }), GJ && (0, pR.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, pR.jsx)(WR.d, {})
        }), YR && (0, pR.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: GR("studio:failedToLoadLeaderboard")
        }), yJ && (0, pR.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: GR("studio:leaderboardEmpty")
        }), !GJ && !YR && !yJ && (0, pR.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, pR.jsx)(UR.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: GR("general:game")
            }, {
              key: "owner",
              header: GR("general:owner")
            }, ...null === SR ? [{
              key: "category",
              header: GR("general:category")
            }] : [], ...FR ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: GR("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: GR("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: GR("studio:leaderboardSessionsPerPlayer")
            }, ...sR ? [] : [{
              key: "ccu",
              header: GR("studio:metricCcu")
            }], {
              key: "favourites",
              header: GR("general:favourites")
            }],
            rows: JJ,
            getRowKey: RR => RR.key,
            renderRow: RR => (0, pR.jsxs)("tr", {
              onClick: () => {
                tR(RR.url)
              },
              children: [(0, pR.jsx)(HR, {
                position: RR.position
              }), (0, pR.jsx)("td", {
                children: (0, pR.jsx)(MR.e, {
                  thumbnail: RR.thumbnail,
                  name: RR.name
                })
              }), (0, pR.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === RR.owner && "-", null !== RR.owner && (0, pR.jsx)(aR.h, {
                  playerSocialPreview: RR.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === SR && (0, pR.jsx)("td", {
                children: (0, ZR.eb)(RR.category)
              }), FR && (0, pR.jsx)(cR, {
                discoverability: RR.discoverability
              }), (0, pR.jsx)(oR, {
                discoverability: RR.discoverability
              }), !sR && (0, pR.jsx)("td", {
                children: null !== RR.ccu ? (0, iR.J)(RR.ccu) : "-"
              }), (0, pR.jsx)("td", {
                children: null !== RR.favourites ? (0, iR.J)(RR.favourites) : "-"
              })]
            })
          })
        }), !YR && (0, pR.jsx)(nR.c, {
          className: "AnimFadeIn",
          page: jR,
          totalPages: tJ,
          onSetPage: RR => {
            QR({
              scope: mR,
              category: SR,
              page: RR
            })
          }
        })]
      })
    }
  },
  5804: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      e: () => uR
    });
    var yR = GR(1695),
      tR = GR(1378);

    function uR(RR) {
      let {
        thumbnail: JR,
        name: GR
      } = RR;
      return (0, tR.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, tR.jsx)("div", {
          className: "StudioTableThumbnail",
          children: JR
        }), (0, tR.jsx)("span", {
          className: "StudioTableGameName",
          children: GR
        })]
      })
    }

    function ZR(RR) {
      let {
        game: JR
      } = RR;
      return (0, tR.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, yR.k)(JR),
        alt: ""
      })
    }
  },
  7524: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    const yR = {
      1: GR(7527),
      2: GR(7536),
      3: GR(7541)
    }
  },
  5798: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(1378);

    function qR(RR) {
      let {
        columns: JR,
        rows: GR,
        getRowKey: tR,
        renderRow: qR,
        className: iR
      } = RR;
      return (0, ZR.jsxs)("table", {
        className: uR()("Table", iR),
        children: [(0, ZR.jsx)("thead", {
          children: (0, ZR.jsx)("tr", {
            children: JR.map((RR => (0, ZR.jsx)("th", {
              children: RR.header
            }, RR.key)))
          })
        }), (0, ZR.jsx)("tbody", {
          children: GR.map(((RR, JR) => (0, ZR.jsx)(yR.Fragment, {
            children: qR(RR, JR)
          }, tR(RR))))
        })]
      })
    }
  },
  5785: () => {},
  7527: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  7536: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  7541: RR => {
    RR.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);