export const id = 115;
export const ids = [115];
export const modules = {
  5383: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => GH
    });
    var AH = LH(1038),
      rH = LH.n(AH),
      SH = LH(1315),
      hH = LH(1313),
      tH = LH(3892),
      zH = LH(120),
      CH = LH(3924),
      EH = LH(3917),
      XH = LH(1225);

    function GH(HH) {
      let {
        game: BH
      } = HH;
      const LH = (0, zH.is99NightsCrazyGamesBundle)() ? "large" : "small",
        AH = (0, CH.h)(BH, LH),
        GH = (0, tH.g)(AH),
        YH = void 0 !== GH.blurhash;
      return (0, XH.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [GH.isLoading && !YH && (0, XH.jsx)(hH.d, {
          loaderType: "Secondary"
        }), !GH.failed && (null !== GH.src || YH) && (0, XH.jsx)("div", {
          className: rH()("SchematicImage", EH.i, {
            SchematicImageFadeIn: GH.fadeIn && !YH
          }),
          style: (0, EH.f)(GH),
          children: (0, XH.jsx)(EH.e, {
            image: GH
          })
        }), GH.failed && (0, XH.jsx)("div", {
          className: "SchematicImageError",
          children: (0, XH.jsx)(SH.c, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  7071: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => NH
    });
    LH(5379);
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(304),
      tH = LH(1016),
      zH = LH(1168),
      CH = LH(998),
      EH = LH(1123),
      XH = LH(1502),
      GH = LH(3935),
      YH = LH(1061),
      uH = LH(5383),
      QH = LH(2833),
      WH = LH(1455),
      MH = LH(4973),
      xH = LH(5386),
      vH = LH(1313),
      PH = LH(1509),
      TH = LH(4969),
      UH = LH(2710),
      VH = LH(5388),
      OH = LH(6957),
      bH = LH(1536),
      kH = LH(1225);
    const mH = [{
        scope: "customGames",
        title: "studio:leaderboardCustomGames"
      }, {
        scope: "allGames",
        title: "studio:leaderboardAllGames"
      }, {
        scope: "dormantGames",
        title: "studio:leaderboardDormantGames"
      }],
      oH = 25,
      IH = "scope",
      fH = "category",
      lH = "customGames";
    const KH = 7,
      cH = {
        playsPerDay: null,
        avgPlaytimeMinutes: null,
        retention: null
      };

    function eH(HH) {
      let {
        position: BH
      } = HH;
      const LH = OH.c[BH];
      return (0, kH.jsxs)("td", {
        className: SH()("StudioLeaderboardPosition", {
          StudioLeaderboardTopPosition: void 0 !== LH,
          [`StudioLeaderboardTopPosition${BH}`]: void 0 !== LH
        }),
        children: [void 0 !== LH && (0, kH.jsx)("img", {
          className: "StudioLeaderboardPositionItem",
          src: LH,
          alt: ""
        }), BH]
      })
    }

    function qH(HH) {
      let {
        discoverability: BH
      } = HH;
      const {
        playsPerDay: LH,
        avgPlaytimeMinutes: rH,
        retention: SH
      } = null === BH ? cH : (0, GH.i)(BH);
      return (0, kH.jsxs)(AH.Fragment, {
        children: [(0, kH.jsx)("td", {
          children: null !== LH ? (0, GH.c)(LH) : "-"
        }), (0, kH.jsx)("td", {
          children: null !== rH ? (0, GH.d)(rH) : "-"
        }), (0, kH.jsx)("td", {
          children: null !== SH ? (0, GH.g)(SH) : "-"
        })]
      })
    }

    function gH(HH) {
      let {
        discoverability: BH
      } = HH;
      return (0, kH.jsx)("td", {
        className: "StudioLeaderboardEngagementScore",
        children: void 0 !== (null === BH || void 0 === BH ? void 0 : BH.engagementScore) ? (0, zH.T)(Math.round(BH.engagementScore)) : "-"
      })
    }

    function NH() {
      var HH, BH;
      const {
        t: LH
      } = (0, EH.B)(), rH = (0, PH.useNavigatePreserveSearch)(), {
        userContext: SH,
        isUserContextUpdating: OH
      } = (0, YH.e)(), cH = (0, UH.l)(), [NH, RH] = (0, TH.p)(), jH = (nH = NH.get(IH), mH.some((HH => HH.scope === nH)) ? nH : lH);
      var nH;
      const FH = function(HH) {
          return hH.Z.includes(HH) ? HH : null
        }(NH.get(fH)),
        DH = (0, TH.g)(NH.get(TH.c)),
        [wH, ZH] = (0, AH.useState)(null),
        [dH, aH] = (0, AH.useState)(!1);

      function sH(HH) {
        RH((BH => {
          (0, TH.j)(BH, IH, HH.scope === lH ? null : HH.scope), (0, TH.j)(BH, fH, HH.category), (0, TH.m)(BH, HH.page)
        }))
      }
      const JH = !OH && SH.playerHasRank("developer"),
        iH = JH && "allGames" === jH,
        pH = JH && "dormantGames" === jH;
      (0, AH.useEffect)((() => {
        if (OH) return;
        let HH = !1;
        return ZH(null), aH(!1), XH.d.getPublishedGamePreviews(SH, {
          searchQuery: null,
          pageNumber: DH,
          pageSize: oH,
          onlyFavouriteGames: !1,
          onlyOwnedGames: !1,
          onlyApprovedGames: !1,
          schematicIdsToExclude: [],
          gameCategories: null !== FH ? [FH] : [],
          upAndComing: !1,
          dormantGames: pH,
          sortByEngagementScore: !0,
          firstPartyGameNames: iH ? CH.d : void 0,
          includeOwners: !0
        }).then((BH => {
          HH || ZH(BH)
        })).catch((BH => {
          console.error("Failed to load the studio leaderboard", BH), HH || aH(!0)
        })), () => {
          HH = !0
        }
      }), [OH, iH, pH, FH, DH, SH]);
      const yH = null !== (HH = null === wH || void 0 === wH ? void 0 : wH.results) && void 0 !== HH ? HH : null,
        HB = function(HH, BH, LH) {
          const [rH, SH] = (0, AH.useState)({}), hH = LH ? (null !== HH && void 0 !== HH ? HH : []).flatMap((HH => "firstPartyGame" === HH.type ? [(0, tH.g)(HH.gameNameWithVariation, !0)] : [])).join(",") : "", zH = (0, AH.useMemo)((() => "" === hH ? [] : hH.split(",")), [hH]);
          return (0, AH.useEffect)((() => {
            if (0 === zH.length) return void SH({});
            let HH = !1;
            return XH.d.getGamesByAnalyticsIds(BH, zH).then((BH => {
              HH || SH(BH)
            })).catch((HH => {
              console.error("Failed to load first party discoverability for the studio leaderboard", HH)
            })), () => {
              HH = !0
            }
          }), [zH, BH]), rH
        }(yH, SH, JH),
        BB = null !== yH ? function(HH, BH, LH, AH, rH) {
          return HH.map(((HH, SH) => {
            var hH;
            const zH = AH + SH + 1;
            if ("customGame" === HH.type) {
              const BH = HH.preview;
              return {
                key: BH.schematicId,
                position: zH,
                thumbnail: (0, kH.jsx)(uH.b, {
                  game: BH
                }),
                name: BH.name,
                owner: HH.owner,
                category: BH.gameCategory,
                ccu: BH.ccu,
                favourites: BH.favourites,
                discoverability: (0, GH.j)(BH) ? BH : null,
                url: (0, bH.t)((0, tH.d)(BH.schematicId))
              }
            }
            const CH = HH.gameNameWithVariation,
              EH = (0, tH.g)(CH, !0);
            return {
              key: CH,
              position: zH,
              thumbnail: (0, kH.jsx)(VH.d, {
                game: CH
              }),
              name: (0, bH.q)(CH, rH),
              owner: null,
              category: (0, bH.i)(CH),
              ccu: (0, UH.e)(CH, BH),
              favourites: null,
              discoverability: null !== (hH = LH[EH]) && void 0 !== hH ? hH : null,
              url: (0, bH.t)(EH)
            }
          }))
        }(yH, cH, HB, (DH - 1) * oH, LH) : [],
        LB = !dH && null === wH,
        AB = !LB && !dH && 0 === BB.length,
        rB = null !== (BH = null === wH || void 0 === wH ? void 0 : wH.totalPages) && void 0 !== BH ? BH : 1;
      return (0, kH.jsxs)("div", {
        className: "StudioPage StudioLeaderboard",
        children: [(0, kH.jsx)("div", {
          className: "StudioPageHeader",
          children: (0, kH.jsx)("h1", {
            className: "StudioPageTitle",
            children: LH("studio:leaderboard")
          })
        }), (0, kH.jsxs)("div", {
          className: "StudioLeaderboardBanner",
          children: [!pH && (0, kH.jsx)("div", {
            children: LH("studio:leaderboardBanner")
          }), pH && (0, kH.jsx)("div", {
            children: LH("studio:leaderboardDormantBanner")
          }), (0, kH.jsx)("div", {
            children: LH("studio:leaderboardMetricsBanner", {
              days: KH
            })
          })]
        }), JH && (0, kH.jsx)("div", {
          className: "StudioLeaderboardScopes",
          children: mH.map((HH => (0, kH.jsx)(WH.W, {
            active: jH === HH.scope,
            onClick: () => {
              sH({
                scope: HH.scope,
                category: FH,
                page: 1
              })
            },
            children: LH(HH.title)
          }, HH.scope)))
        }), (0, kH.jsxs)("div", {
          className: "StudioLeaderboardCategories",
          children: [(0, kH.jsx)(WH.W, {
            active: null === FH,
            onClick: () => {
              sH({
                scope: jH,
                category: null,
                page: 1
              })
            },
            children: LH("studio:leaderboardAllCategories")
          }), hH.Z.map((HH => (0, kH.jsx)(WH.W, {
            active: FH === HH,
            onClick: () => {
              sH({
                scope: jH,
                category: HH,
                page: 1
              })
            },
            children: (0, hH.mb)(HH)
          }, HH)))]
        }), LB && (0, kH.jsx)("div", {
          className: "StudioPageLoader AnimFadeIn",
          children: (0, kH.jsx)(vH.d, {})
        }), dH && (0, kH.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: LH("studio:failedToLoadLeaderboard")
        }), AB && (0, kH.jsx)("div", {
          className: "StudioPageMessage AnimFadeIn",
          children: LH("studio:leaderboardEmpty")
        }), !LB && !dH && !AB && (0, kH.jsx)("div", {
          className: "StudioLeaderboardTableScroll AnimFadeIn",
          children: (0, kH.jsx)(xH.c, {
            className: "StudioTable",
            columns: [{
              key: "position",
              header: "#"
            }, {
              key: "game",
              header: LH("general:game")
            }, {
              key: "owner",
              header: LH("general:owner")
            }, ...null === FH ? [{
              key: "category",
              header: LH("general:category")
            }] : [], ...JH ? [{
              key: "engagementScore",
              header: "engagementScore"
            }] : [], {
              key: "playsPerDay",
              header: LH("studio:leaderboardPlaysPerDay")
            }, {
              key: "sessionLength",
              header: LH("studio:leaderboardSessionLength")
            }, {
              key: "retention",
              header: LH("studio:leaderboardSessionsPerPlayer")
            }, ...pH ? [] : [{
              key: "ccu",
              header: LH("studio:metricCcu")
            }], {
              key: "favourites",
              header: LH("general:favourites")
            }],
            rows: BB,
            getRowKey: HH => HH.key,
            renderRow: HH => (0, kH.jsxs)("tr", {
              onClick: () => {
                rH(HH.url)
              },
              children: [(0, kH.jsx)(eH, {
                position: HH.position
              }), (0, kH.jsx)("td", {
                children: (0, kH.jsx)(VH.h, {
                  thumbnail: HH.thumbnail,
                  name: HH.name
                })
              }), (0, kH.jsxs)("td", {
                className: "StudioLeaderboardOwner",
                children: [null === HH.owner && "-", null !== HH.owner && (0, kH.jsx)(QH.g, {
                  playerSocialPreview: HH.owner,
                  showLocation: !1,
                  opensProfileCard: !1
                })]
              }), null === FH && (0, kH.jsx)("td", {
                children: (0, hH.mb)(HH.category)
              }), JH && (0, kH.jsx)(gH, {
                discoverability: HH.discoverability
              }), (0, kH.jsx)(qH, {
                discoverability: HH.discoverability
              }), !pH && (0, kH.jsx)("td", {
                children: null !== HH.ccu ? (0, zH.T)(HH.ccu) : "-"
              }), (0, kH.jsx)("td", {
                children: null !== HH.favourites ? (0, zH.T)(HH.favourites) : "-"
              })]
            })
          })
        }), !dH && (0, kH.jsx)(MH.e, {
          className: "AnimFadeIn",
          page: DH,
          totalPages: rB,
          onSetPage: HH => {
            sH({
              scope: jH,
              category: FH,
              page: HH
            })
          }
        })]
      })
    }
  },
  5388: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      h: () => SH
    });
    var AH = LH(1536),
      rH = LH(1225);

    function SH(HH) {
      let {
        thumbnail: BH,
        name: LH
      } = HH;
      return (0, rH.jsxs)("div", {
        className: "StudioTableGameCell",
        children: [(0, rH.jsx)("div", {
          className: "StudioTableThumbnail",
          children: BH
        }), (0, rH.jsx)("span", {
          className: "StudioTableGameName",
          children: LH
        })]
      })
    }

    function hH(HH) {
      let {
        game: BH
      } = HH;
      return (0, rH.jsx)("img", {
        className: "StudioTableThumbnailImage",
        src: (0, AH.o)(BH),
        alt: ""
      })
    }
  },
  6957: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    const AH = {
      1: LH(6966),
      2: LH(6972),
      3: LH(6974)
    }
  },
  5386: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1225);

    function tH(HH) {
      let {
        columns: BH,
        rows: LH,
        getRowKey: rH,
        renderRow: tH,
        className: zH
      } = HH;
      return (0, hH.jsxs)("table", {
        className: SH()("Table", zH),
        children: [(0, hH.jsx)("thead", {
          children: (0, hH.jsx)("tr", {
            children: BH.map((HH => (0, hH.jsx)("th", {
              children: HH.header
            }, HH.key)))
          })
        }), (0, hH.jsx)("tbody", {
          children: LH.map((HH => (0, hH.jsx)(AH.Fragment, {
            children: tH(HH)
          }, rH(HH))))
        })]
      })
    }
  },
  5379: () => {},
  6966: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGVJREFUGJVjYKAZ4LF0YGBgYPiPhrErsn9/8v/Tv5//P/37+b/9+5NYFaMowqaYCaby2Z4fDAwMDAwO684xOKw7hyLGwMDAwIhmKlxSyoWD4aCgOVwNskK4YgYGBhRFuAB2HxMLAPX+QYFf3uJZAAAAAElFTkSuQmCC"
  },
  6972: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAKhJREFUOI1jYBhxgJGQAntrHgYGBgaGg0e//EcWDw0NZWRgYGBYvXo1inom6rkNAjBciMtFv18bQhhCEBexMqtgdSlNXYjXRbgAzKUws6juQhZ0AUIu+7HWA6+BtA9DuAthLtr/GatG3rA7WM2iXRiG+AkwMjAwMLCKnsfqUnQX2WhxMjIwMDAcufYdRZz2OSXET4CBgYGBYc2mDyjpEpeL0AHVXTgCAQAJXjDPnoKDuAAAAABJRU5ErkJggg=="
  },
  6974: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAK9JREFUOI3l0zEKwjAYhuE3QY+hWEWQ4lwovYE4WY+pDg7iBURwlrYgWtGD1EGCtk3aJZn6jV9+fh5CAp2LaBuY+zMArklW/PfreCUANttdaV7as31TE5pEyf0BwNQbAdCXUit1KmwUmaKkapd1Ya9atMn2h2PjQvdClVv+BCBNM+15vFxoe3fCKAwEgD8ZF/C7S5PIGw4EQP56uxXWfkoUBgCczpfSuzSJqrEu7GA+v28v0x7vVwcAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);