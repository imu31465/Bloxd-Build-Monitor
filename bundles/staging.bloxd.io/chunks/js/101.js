export const id = 101;
export const ids = [101];
export const modules = {
  4483: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => sY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(1098),
      RY = DY(1337),
      OY = DY(3082),
      gY = DY(144),
      aY = DY(3139),
      vY = DY(3123),
      uY = DY(1125);

    function sY(YY) {
      let {
        game: rY
      } = YY;
      const DY = (0, gY.h)() ? "large" : "small",
        FY = (0, aY.c)(rY, DY),
        sY = (0, OY.f)(FY),
        iY = void 0 !== sY.blurhash;
      return (0, uY.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [sY.isLoading && !iY && (0, uY.jsx)(RY.c, {
          loaderType: "Secondary"
        }), !sY.failed && (null !== sY.src || iY) && (0, uY.jsx)("div", {
          className: AY()("SchematicImage", vY.j, {
            SchematicImageFadeIn: sY.fadeIn && !iY
          }),
          style: (0, vY.h)(sY),
          children: (0, uY.jsx)(vY.d, {
            image: sY
          })
        }), sY.failed && (0, uY.jsx)("div", {
          className: "SchematicImageError",
          children: (0, uY.jsx)(IY.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  6067: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => JY
    });
    DY(4478);
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(332),
      OY = DY(1066),
      gY = DY(1231),
      aY = DY(1055),
      vY = DY(1211),
      uY = DY(1471),
      sY = DY(3149),
      iY = DY(1152),
      yY = DY(4483),
      QY = DY(2353),
      oY = DY(1437),
      WY = DY(4129),
      EY = DY(4491),
      mY = DY(1337),
      VY = DY(1488),
      SY = DY(4122),
      lY = DY(2317),
      TY = DY(4500),
      eY = DY(5980),
      NY = DY(1519),
      BY = DY(1125);
    const cY = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      KY = 25,
      HY = "scope",
      zY = "category",
      ZY = "customGames";
    const CY = 7,
      fY = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function jY(YY) {
      let {
        position: rY
      } = YY;
      const DY = eY.d[rY];
      return (0, BY.jsxs)("td", {
        className: IY()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== DY,
          [`StudioLeaderboardTopPosition${rY}`]: void 0 !== DY
        }),
        children: [void 0 !== DY && (0, BY.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: DY,
          alt: ""
        }), rY]
      })
    }

    function hY(YY) {
      let {
        discoverability: rY
      } = YY;
      const {
        playsPerDay: DY,
        avgPlaytimeMinutes: AY,
        retention: IY
      } = null === rY ? fY : (0, sY.o)(rY);
      return (0, BY.jsxs)(FY.Fragment, {
        children: [(0, BY.jsx)("td", {
          children: null !== DY ? (0, sY.e)(DY) : "-"
        }), (0, BY.jsx)("td", {
          children: null !== AY ? (0, sY.i)(AY) : "-"
        }), (0, BY.jsx)("td", {
          children: null !== IY ? (0, sY.m)(IY) : "-"
        })]
      })
    }

    function dY(YY) {
      let {
        discoverability: rY
      } = YY;
      return (0, BY.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === rY || void 0 === rY ? void 0 : rY.engagementScore) ? (0, gY.S)(Math.round(rY.engagementScore)) : "-"
      })
    }

    function JY() {
      var YY, rY;
      const {
        t: DY
      } = (0, vY.C)(), AY = (0, VY.useNavigatePreserveSearch)(), {
        userContext: IY,
        isUserContextUpdating: eY
      } = (0, iY.d)(), fY = (0, lY.k)(), [JY, MY] = (0, SY.o)(), wY = (bY = JY.get(HY), cY.some((YY => YY.scope === bY)) ? bY : ZY);
      var bY;
      const XY = function(YY) {
          return RY.W.includes(YY) ? YY : null
        }(JY.get(zY)),
        qY = (0, SY.i)(JY.get(SY.e)),
        [pY, kY] = (0, FY.useState)(null),
        [GY, xY] = (0, FY.useState)(!1);

      function nY(YY) {
        MY((rY => {
          (0, SY.l)(rY, HY, YY.scope === ZY ? null : YY.scope), (0, SY.l)(rY, zY, YY.category), (0, SY.n)(rY, YY.page)
        }))
      }
      const PY = !eY && IY.playerHasRank("developer"),
        UY = PY && "allGames" === wY,
        LY = PY && "dormantGames" === wY;
      (0, FY.useEffect)((() => {
        if (eY) return;
        let YY = !1;
        return kY(null), xY(!1), uY.e.getPublishedGamePreviews(IY, {
          searchQuery: null,
          pageNumber: qY,
          pageSize: KY,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== XY ? [XY] : [],
          upAndComing: !1,
          dormantGames: LY,
          sortByEngagementScore: !0,
          firstPartyGameNames: UY ? aY.b : void 0,
          includeOwners: !0
        }).then((rY => {
          YY || kY(rY)
        })).catch((rY => {
          console.error("Failed to load the studio leaderboard", rY), YY || xY(!0)
        })), () => {
          YY = !0
        }
      }), [eY, UY, LY, XY, qY, IY]);
      const tY = null !== (YY = null === pY || void 0 === pY ? void 0 : pY.results) && void 0 !== YY ? YY : null,
        Yr = function(YY, rY, DY) {
          const [AY, IY] = (0, FY.useState)({}), RY = DY ? (null !== YY && void 0 !== YY ? YY : []).flatMap((YY => "firstPartyGame" === YY.type ? [(0, OY.g)(YY.gameNameWithVariation, !0)] : [])).join(",") : "", gY = (0, FY.useMemo)((() => "" === RY ? [] : RY.split(",")), [RY]);
          return (0, FY.useEffect)((() => {
            if (0 === gY.length) return void IY({});
            let YY = !1;
            return uY.e.getGamesByAnalyticsIds(rY, gY).then((rY => {
              YY || IY(rY)
            })).catch((YY => {
              console.error("Failed to load first party discoverability for the studio leaderboard", YY)
            })), () => {
              YY = !0
            }
          }), [gY, rY]), AY
        }(tY, IY, PY),
        rr = null !== tY ? function(YY, rY, DY, FY, AY) {
          return YY.map(((YY, IY) => {
            var RY;
            const gY = FY + IY + 1;
            if ("customGame" === YY.type) {
              const rY = YY.preview;
              return {
                key: rY.schematicId,
                position: gY,
                thumbnail: (0, BY.jsx)(yY.e, {
                  game: rY
                }),
                name: rY.name,
                owner: YY.owner,
                category: rY.gameCategory,
                ccu: rY.ccu,
                favourites: rY.favourites,
                discoverability: (0, sY.r)(rY) ? rY : null,
                url: (0, NY.q)((0, OY.d)(rY.schematicId))
              }
            }
            const aY = YY.gameNameWithVariation,
              vY = (0, OY.g)(aY, !0);
            return {
              key: aY,
              position: gY,
              thumbnail: (0, BY.jsx)(TY.c, {
                game: aY
              }),
              name: (0, NY.n)(aY, AY),
              owner: null,
              category: (0, NY.d)(aY),
              ccu: (0, lY.d)(aY, rY),
              favourites: null,
              discoverability: null !== (RY = DY[vY]) && void 0 !== RY ? RY : null,
              url: (0, NY.q)(vY)
            }
          }))
        }(tY, fY, Yr, (qY - 1) * KY, DY) : [],
        Dr = !GY && null === pY,
        Fr = !Dr && !GY && 0 === rr.length,
        Ar = null !== (rY = null === pY || void 0 === pY ? void 0 : pY.totalPages) && void 0 !== rY ? rY : 1;
      return (0, BY.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, BY.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, BY.jsx)("h1", {
            className: "StudioPageTitle",
            children: DY("studio:leaderboard")
          })
        }), (0, BY.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!LY && (0, BY.jsx)("div", {
            children: DY("studio:leaderboardBanner")
          }), LY && (0, BY.jsx)("div", {
            children: DY("studio:leaderboardDormantBanner")
          }), (0, BY.jsx)("div", {
            children: DY("studio:leaderboardMetricsBanner", {
              days: CY
            })
          })]
        }), PY && (0, BY.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: cY.map((YY => (0, BY.jsx)(oY.J, {
            active: wY === YY.scope,
            onClick: () => {
              nY({
                scope: YY.scope,
                category: XY,
                page: 1
              })
            },
            children: DY(YY.title)
          }, YY.scope)))
        }), (0, BY.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, BY.jsx)(oY.J, {
            active: null === XY,
            onClick: () => {
              nY({
                scope: wY,
                category: null,
                page: 1
              })
            },
            children: DY("studio:leaderboardAllCategories")
          }), RY.W.map((YY => (0, BY.jsx)(oY.J, {
            active: XY === YY,
            onClick: () => {
              nY({
                scope: wY,
                category: YY,
                page: 1
              })
            },
            children: (0, RY.fb)(YY)
          }, YY)))]
        }), Dr && (0, BY.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, BY.jsx)(mY.c, {})
        }), GY && (0, BY.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: DY("studio:failedToLoadLeaderboard")
        }), Fr && (0, BY.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: DY("studio:leaderboardEmpty")
        }), !Dr && !GY && !Fr && (0, BY.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, BY.jsx)(EY.e, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: DY("general:game")
            }, {
              key: "owner",
              header: DY("general:owner")
            }, ...null === XY ? [{
              key: "category",
              header: DY("general:category")
            }] : [], ...PY ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: DY("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: DY("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: DY("studio:leaderboardSessionsPerPlayer")
            }, ...LY ? [] : [{
              key: "ccu",
              header: DY("studio:metricCcu")
            }], {
              key: "favourites",
              header: DY("general:favourites")
            }],
            rows: rr,
            getRowKey: YY => YY.key,
            renderRow: YY => (0, BY.jsxs)("tr", {
              onClick: () => {
                AY(YY.url)
              },
              children: [(0, BY.jsx)(jY, {
                position: YY.position
              }), (0, BY.jsx)("td", {
                children: (0, BY.jsx)(TY.g, {
                  thumbnail: YY.thumbnail,
                  name: YY.name
                })
              }), (0, BY.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === YY.owner && "-", null !== YY.owner && (0, BY.jsx)(QY.g, {
                  playerSocialPreview: YY.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === XY && (0, BY.jsx)("td", {
                children: (0, RY.fb)(YY.category)
              }), PY && (0, BY.jsx)(dY, {
                discoverability: YY.discoverability
              }), (0, BY.jsx)(hY, {
                discoverability: YY.discoverability
              }), !LY && (0, BY.jsx)("td", {
                children: null !== YY.ccu ? (0, gY.S)(YY.ccu) : "-"
              }), (0, BY.jsx)("td", {
                children: null !== YY.favourites ? (0, gY.S)(YY.favourites) : "-"
              })]
            })
          })
        }), !GY && (0, BY.jsx)(WY.d, {
          className: "AnimFadeIn",
          page: qY,
          totalPages: Ar,
          onSetPage: YY => {
            nY({
              scope: wY,
              category: XY,
              page: YY
            })
          }
        })]
      })
    }
  },
  4500: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      g: () => IY
    });
    var FY = DY(1519),
      AY = DY(1125);

    function IY(YY) {
      let {
        thumbnail: rY,
        name: DY
      } = YY;
      return (0, AY.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, AY.jsx)("div", {
          className: "StudioTableThumbnail",
          children: rY
        }), (0, AY.jsx)("span", {
          className: "StudioTableGameName",
          children: DY
        })]
      })
    }

    function RY(YY) {
      let {
        game: rY
      } = YY;
      return (0, AY.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, FY.k)(rY),
        alt: ""
      })
    }
  },
  5980: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    const FY = {
      1: DY(5982),
      2: DY(5988),
      3: DY(5991)
    }
  },
  4491: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(1125);

    function OY(YY) {
      let {
        columns: rY,
        rows: DY,
        getRowKey: AY,
        renderRow: OY,
        className: gY
      } = YY;
      return (0, RY.jsxs)("table", {
        className: IY()("Table", gY),
        children: [(0, RY.jsx)("thead", {
          children: (0, RY.jsx)("tr", {
            children: rY.map((YY => (0, RY.jsx)("th", {
              children: YY.header
            }, YY.key)))
          })
        }), (0, RY.jsx)("tbody", {
          children: DY.map((YY => (0, RY.jsx)(FY.Fragment, {
            children: OY(YY)
          }, AY(YY))))
        })]
      })
    }
  },
  4478: () => {},
  5982: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  5988: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  5991: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);