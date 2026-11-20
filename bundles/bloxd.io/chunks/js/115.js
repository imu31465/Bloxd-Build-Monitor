export const id = 115;
export const ids = [115, 389];
export const modules = {
  35925: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => YR
    });
    var tU = gU(299),
      pU = gU(3194),
      EU = gU(3232),
      PU = gU(3229),
      TU = gU(3223),
      qU = gU(1181),
      KU = gU(34),
      cU = gU(1637),
      GU = gU(1344),
      jU = gU(1412),
      uU = gU(1037),
      CU = gU.n(uU),
      hU = gU(1602),
      QU = gU(56),
      eU = gU(74),
      WU = gU(2190),
      fU = gU(1320),
      xU = gU(1554),
      mU = gU(1112),
      IU = gU(3111),
      JU = gU(4214),
      wU = gU(3180),
      nU = gU(3182),
      bU = gU(1777),
      oU = gU(3185),
      ZU = gU(1646),
      aU = gU(1461),
      YU = gU(1998),
      BU = gU(1326),
      VU = gU(2374),
      rU = gU(4693),
      XU = gU(1090);
    const vU = 15e3,
      dU = 2500;

    function HU(UU) {
      var RU;
      let {
        eventName: gU
      } = UU;
      const {
        t: tU
      } = (0, qU.B)(), pU = ZU.f[gU], [EU, PU] = (0, QU.useState)((() => Date.now() >= pU.endsAt.getTime())), [TU, KU] = (0, QU.useState)("overall"), cU = function(UU, RU) {
        const {
          userContext: gU,
          isUserContextUpdating: tU
        } = (0, mU.e)(), pU = `${UU}:${RU}`, [EU, PU] = (0, QU.useState)({
          requestKey: pU,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, QU.useEffect)((() => {
          if (tU) return;
          let EU, TU = !1;
          const qU = async () => {
            if ("visible" === document.visibilityState) try {
              const tU = await aU.c.getGameEventLeaderboard(gU, {
                event: UU,
                scope: RU
              });
              TU || PU({
                requestKey: pU,
                leaderboard: {
                  status: "loaded",
                  leaderboard: tU
                }
              })
            } catch {
              TU || PU((UU => UU.requestKey === pU && "loaded" === UU.leaderboard.status ? UU : {
                requestKey: pU,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            TU || (EU = setTimeout(qU, vU))
          };
          return qU(), () => {
            TU = !0, clearTimeout(EU)
          }
        }), [UU, RU, pU, gU, tU]), EU.requestKey === pU ? EU.leaderboard : {
          status: "loading"
        }
      }(gU, TU), GU = function(UU) {
        const RU = (0, QU.useRef)(null),
          gU = (0, QU.useRef)(0),
          tU = (0, QU.useRef)(),
          [pU, EU] = (0, QU.useState)({});
        return (0, QU.useEffect)((() => {
          const pU = null === UU || void 0 === UU ? void 0 : UU.entries;
          if (!pU) return;
          const PU = new Map(pU.map((UU => [UU.player.name, UU.value]))),
            TU = RU.current;
          if (RU.current = PU, null === TU) return;
          const qU = {};
          for (const [UU, RU] of PU) {
            const tU = TU.get(UU);
            void 0 !== tU && RU > tU && (qU[UU] = {
              amount: RU - tU,
              key: gU.current++
            })
          }
          0 !== Object.keys(qU).length && (EU(qU), clearTimeout(tU.current), tU.current = setTimeout((() => {
            EU({})
          }), dU))
        }), [UU]), (0, QU.useEffect)((() => () => {
          clearTimeout(tU.current)
        }), []), pU
      }("loaded" === cU.status ? cU.leaderboard : null), jU = function(UU) {
        const [RU, gU] = (0, QU.useState)(null), tU = "loaded" === UU.status ? UU.leaderboard.goalProgress : void 0;
        return (0, QU.useEffect)((() => {
          tU && gU(tU)
        }), [tU]), RU
      }(cU), uU = YU.d[`profileEffect_${pU.prizePack}`];
      if (EU) return null;
      const hU = "loaded" === cU.status ? cU.leaderboard : null,
        eU = null !== (RU = null === hU || void 0 === hU ? void 0 : hU.entries) && void 0 !== RU ? RU : null,
        WU = null !== hU && void 0 !== hU && hU.own && null !== eU && !eU.some((UU => UU.isOwn)) ? hU.own : null;
      return (0, XU.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, XU.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, XU.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, XU.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, XU.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, XU.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), tU("gameEvents:live")]
              }), (0, XU.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [tU("gameEvents:endsIn"), (0, XU.jsx)(wU.e, {
                  toTime: pU.endsAt,
                  onReachEndOfCountdown: () => {
                    PU(!0)
                  }
                })]
              })]
            }), (0, XU.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: tU(pU.titleKey)
            }), (0, XU.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, XU.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [uU && (0, XU.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, XU.jsx)(uU, {})
                }), (0, XU.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, XU.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: tU("gameEvents:prize")
                  }), (0, XU.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: tU(pU.prizeNameKey)
                  })]
                })]
              }), (0, XU.jsx)(SU, {
                event: pU,
                progress: jU
              })]
            })]
          }), (0, XU.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, XU.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, XU.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: tU(pU.leaderboard.titleKey)
              }), (0, XU.jsx)(rU.d, {
                ariaLabel: tU("gameEvents:leaderboardScope"),
                options: ZU.d.map((UU => ({
                  value: UU,
                  label: tU(`gameEvents:${UU}Scope`)
                }))),
                value: TU,
                onChange: KU
              })]
            }), "loading" === cU.status && (0, XU.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, XU.jsx)(BU.d, {})
            }), ("unavailable" === cU.status || "loaded" === cU.status && null === eU) && (0, XU.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: tU("gameEvents:leaderboardUnavailable")
            }), null !== eU && 0 === eU.length && (0, XU.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: tU("friends" === TU ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== eU && eU.length > 0 && (0, XU.jsx)("ol", {
              className: "GameEventPanelRows",
              children: eU.map((UU => {
                const RU = GU[UU.player.name];
                return (0, XU.jsxs)("li", {
                  className: CU()("GameEventPanelRow", {
                    GameEventPanelRowOwn: UU.isOwn,
                    GameEventPanelRowTop: UU.rank <= 3
                  }),
                  children: [(0, XU.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", UU.rank]
                  }), (0, XU.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, XU.jsx)(VU.d, {
                      playerSocialPreview: {
                        ...UU.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== RU && (0, XU.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", RU.amount.toLocaleString()]
                  }, RU.key), (0, XU.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: UU.value.toLocaleString()
                  })]
                }, UU.player.name)
              }))
            }), WU && (0, XU.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, XU.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", WU.rank.toLocaleString()]
              }), (0, XU.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: tU("gameEvents:yourPlace")
              }), (0, XU.jsx)("span", {
                className: "GameEventPanelScore",
                children: WU.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function SU(UU) {
      let {
        event: RU,
        progress: gU
      } = UU;
      const {
        t: tU
      } = (0, qU.B)(), pU = null !== gU && RU.prizeGoals.some(((UU, RU) => gU[RU] >= UU.target));
      return (0, XU.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, XU.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: tU(pU ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, XU.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: RU.prizeGoals.map(((UU, RU) => {
            const pU = null === gU ? null : Math.min(gU[RU], UU.target);
            return (0, XU.jsxs)(QU.Fragment, {
              children: [RU > 0 && (0, XU.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: tU("gameEvents:goalsOr")
              }), (0, XU.jsxs)("div", {
                className: CU()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: pU === UU.target
                }),
                children: [(0, XU.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: tU(UU.labelKey)
                }), (0, XU.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, XU.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== pU && void 0 !== pU ? pU : 0) / UU.target * 100 + "%"
                    }
                  }), null !== pU && (0, XU.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [pU.toLocaleString(), " / ", UU.target.toLocaleString()]
                  })]
                })]
              })]
            }, UU.board)
          }))
        })]
      })
    }
    var sU = gU(1501),
      yU = gU(1545),
      kU = gU(1020),
      FU = gU(704),
      iU = gU(3176);

    function AU(UU) {
      let {
        gameNameWithVariation: RU
      } = UU;
      const gU = (0, sU.C)(RU),
        [tU, pU] = (0, QU.useState)(null);
      if ((0, QU.useEffect)((() => {
          if (!gU) return;
          let UU = !0;
          return (0, yU.h)(gU).then((RU => {
            UU && pU(RU)
          })).catch((UU => {
            console.error(`Failed to load the page copy for ${gU.name}`, UU)
          })), () => {
            UU = !1
          }
        }), [gU]), !gU || !tU || tU.name !== gU.name) return null;
      const EU = (0, yU.d)(tU),
        PU = new Set((0, kU.e)((0, FU.j)()).map((UU => (0, sU.u)(UU)))),
        TU = tU.similarGames.filter((UU => PU.has((0, sU.u)(UU))));
      return (0, XU.jsx)("div", {
        className: "GamePageContent",
        children: (0, XU.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, XU.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, XU.jsx)("h2", {
              children: EU.whatIs
            }), tU.whatIs.map((UU => (0, XU.jsx)("p", {
              children: UU
            }, UU)))]
          }), (0, XU.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, XU.jsx)("h2", {
              children: EU.howToPlay
            }), tU.howToPlay.map((UU => (0, XU.jsx)("p", {
              children: UU
            }, UU)))]
          }), (0, XU.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, XU.jsx)("h2", {
              children: EU.features
            }), (0, XU.jsx)("ul", {
              children: tU.features.map((UU => (0, XU.jsx)("li", {
                children: UU
              }, UU)))
            })]
          }), (0, XU.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, XU.jsx)("h2", {
              children: EU.tips
            }), (0, XU.jsx)("ul", {
              children: tU.tips.map((UU => (0, XU.jsx)("li", {
                children: UU
              }, UU)))
            })]
          }), (0, XU.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, XU.jsx)("h2", {
              children: EU.faq
            }), tU.faq.map((UU => {
              let {
                question: RU,
                answer: gU
              } = UU;
              return (0, XU.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, XU.jsx)("h3", {
                  children: RU
                }), (0, XU.jsx)("p", {
                  children: gU
                })]
              }, RU)
            }))]
          }), TU.length > 0 && (0, XU.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, XU.jsx)("h2", {
              children: EU.similarGames
            }), (0, XU.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: TU.map((UU => (0, XU.jsx)("li", {
                children: (0, XU.jsx)(iU.f, {
                  source: {
                    type: "game",
                    gameNameWithVariation: UU
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, UU)))
            })]
          })]
        })
      })
    }
    var zU = gU(1049),
      MU = gU(96),
      DU = gU(1120),
      LU = gU(9033),
      NU = gU(1581),
      lU = gU(1481),
      OU = gU(1475),
      UR = gU(1551),
      RR = gU(1425),
      gR = gU(1333),
      tR = gU(35933),
      pR = gU(1229),
      ER = gU(994),
      PR = gU(311),
      TR = gU(1007),
      qR = gU(1497),
      KR = gU(8544),
      cR = gU(21),
      GR = gU(2320),
      jR = gU(731),
      uR = gU(1217),
      CR = gU(6182);

    function hR(UU) {
      let {
        preview: RU,
        isBroken: gU
      } = UU;
      const tU = null === RU ? null : (0, EU.f)(RU, "small"),
        PU = (0, pU.h)(null !== tU && void 0 !== tU ? tU : EU.p);
      return null === RU ? (0, XU.jsx)("div", {
        className: CU()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: gU
        }),
        children: (0, XU.jsx)(zU.c, {
          name: gU ? "triangle-exclamation" : "star"
        })
      }) : (0, XU.jsx)("div", {
        className: CU()("FeaturedGamesPopupSlotThumbnail", TU.h),
        style: (0, TU.e)(PU),
        role: "img",
        "aria-label": RU.name,
        children: (0, XU.jsx)(TU.c, {
          image: PU
        })
      })
    }

    function QR(UU) {
      let {
        schematicId: RU,
        gameName: gU
      } = UU;
      const {
        userContext: pU
      } = (0, mU.e)(), EU = (0, nU.b)(), [PU, TU] = (0, QU.useState)(null), [qU, KU] = (0, QU.useState)(null), [cU, GU] = (0, QU.useState)(!1), uU = (0, QU.useCallback)((() => {
        KU(null), aU.c.getFeaturedGames(pU).then((UU => {
          EU.current && TU(UU.slots)
        })).catch((UU => {
          console.error("Failed to get featured games", UU), EU.current && KU("Failed to load featured games")
        }))
      }), [pU, EU]);
      (0, QU.useEffect)((() => {
        uU()
      }), [uU]);
      const CU = (UU, RU) => {
        cU || (GU(!0), aU.c.setFeaturedGame(pU, UU, RU).then((() => {
          EU.current && uU()
        })).catch((UU => {
          console.error("Failed to set featured game", UU), EU.current && KU("Failed to update the featured slot")
        })).finally((() => {
          EU.current && GU(!1)
        })))
      };
      return (0, XU.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, XU.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !PU && !qU && (0, XU.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, XU.jsx)(BU.d, {})
        }), qU && (0, XU.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: qU
        }), PU && (0, XU.jsxs)(XU.Fragment, {
          children: [(0, XU.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: PU.map((UU => {
              const gU = UU.schematicId === RU,
                pU = null === UU.schematicId,
                {
                  categoryGroup: EU
                } = tU.O[UU.slotId];
              return (0, XU.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, XU.jsx)(hR, {
                  preview: UU.preview,
                  isBroken: !pU
                }), (0, XU.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, XU.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, tU.mb)(EU), " \xb7 position", " ", (0, tU.S)(UU.slotId, tU.Lb) + 1, " of", " ", (0, tU.Hb)(EU, tU.Lb)]
                  }), pU && (0, XU.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !pU && null !== UU.preview && (0, XU.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: UU.preview.name
                  }), !pU && null === UU.preview && (0, XU.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, XU.jsx)(zU.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, XU.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [pU && (0, XU.jsxs)(jU.p, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      CU(UU.slotId, RU)
                    },
                    disabled: cU,
                    children: [(0, XU.jsx)(zU.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !pU && !gU && (0, XU.jsxs)(jU.M, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      CU(UU.slotId, RU)
                    },
                    disabled: cU,
                    children: [(0, XU.jsx)(zU.c, {
                      name: "star"
                    }), " Replace"]
                  }), !pU && (0, XU.jsxs)(jU.E, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      CU(UU.slotId, null)
                    },
                    disabled: cU,
                    children: [(0, XU.jsx)(zU.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, UU.slotId)
            }))
          }), (0, XU.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var eR = gU(4331),
      WR = gU(4257),
      fR = gU(4260),
      xR = gU(4276),
      mR = gU(4232),
      IR = gU(3257),
      JR = gU(8536),
      wR = gU(207);
    const nR = {
      skyblock: [gU(35963).e]
    };
    var bR = gU(581);
    const oR = {
      listedVariations: null,
      backgroundImage: EU.p,
      badges: [],
      category: null,
      title: null,
      variationTitle: null,
      description: null,
      ownerSocialPreviewWithoutLocation: null,
      ccu: null,
      favourites: null,
      isFavourite: null,
      useRejoinLastLobbyButton: null,
      showWorldsInsteadOfCustomLobbies: null,
      canCreateCustomLobbies: null,
      countdownInformation: null
    };

    function ZR(UU, RU) {
      const gU = jR.g[UU.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, EU.f)(UU, "large"),
        badges: [],
        category: UU.gameCategory,
        title: void 0 !== (null === gU || void 0 === gU ? void 0 : gU.title) ? RU(gU.title) : UU.name,
        variationTitle: null,
        description: void 0 !== (null === gU || void 0 === gU ? void 0 : gU.description) ? RU(gU.description) : UU.description,
        ownerSocialPreviewWithoutLocation: "owner" in UU ? UU.owner : null,
        ccu: UU.ccu,
        favourites: UU.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in UU ? UU.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function aR(UU) {
      var RU, gU, tU;
      return null !== (RU = null !== (gU = (0, wR.g)() ? function(UU) {
        for (const [RU, gU] of Object.entries(nR)) {
          const tU = [RU, ...gU.map((UU => (0, PR.Vb)(RU, UU)))];
          if (tU.includes(UU)) return tU
        }
        return null
      }(UU) : null) && void 0 !== gU ? gU : null === (tU = jR.d[UU]) || void 0 === tU ? void 0 : tU.listedVariations) && void 0 !== RU ? RU : null
    }

    function YR() {
      const {
        gameNameWithVariation: UU
      } = (0, lU.y)();
      if ((0, QU.useEffect)(IR.p, []), UU && (0, pR.v)(UU)) return (0, XU.jsx)(BR, {
        urlId: UU
      }, UU);
      const RU = UU && (0, ER.m)(UU) ? UU : "firstParty";
      return (0, XU.jsx)(VR, {}, RU)
    }

    function BR(UU) {
      let {
        urlId: RU
      } = UU;
      const {
        userContext: gU,
        isUserContextUpdating: tU
      } = (0, mU.e)(), pU = (0, QU.useMemo)((() => (0, NU.i)(RU)), [RU]);
      (0, QU.useMemo)((() => {
        if (null === pU) return;
        const UU = DU.userContextManager.peekCurrentUserContext();
        (null !== UU ? aU.c.getGame(UU, pU.schematicId) : DU.userContextManager.getCurrentUserContext().then((UU => aU.c.getGame(UU, pU.schematicId)))).catch((UU => {
          console.error(`Failed to get the custom game ${pU.schematicId}`, UU), (0, NU.f)(RU)
        }))
      }), [pU, RU]);
      const [EU, PU] = (0, QU.useState)(null), TU = (0, LU.d)();
      (0, QU.useEffect)((() => {
        if (null !== pU || tU) return;
        let UU = !0;
        return aU.c.getGameByUrlId(gU, RU).then((gU => {
          UU && PU({
            urlId: RU,
            game: gU
          })
        })).catch((gU => {
          console.error(`Failed to find the custom game with urlId ${RU}`, gU), UU && (0, OU.navigateToHomePage)()
        })), () => {
          UU = !1
        }
      }), [RU, pU, tU, gU]);
      const qU = null !== pU && void 0 !== pU ? pU : (null === EU || void 0 === EU ? void 0 : EU.urlId) === RU ? EU.game : null;
      return null === qU ? (0, XU.jsx)(BU.d, {}) : TU ? (0, XU.jsx)(VR, {
        gameNameWithVariation: (0, ER.x)(qU.schematicId),
        knownCustomGame: qU
      }, qU.schematicId) : null
    }

    function VR(UU) {
      var RU, gU, PU, uU, ZU, YU, BU, rU;
      let {
        gameNameWithVariation: vU,
        knownCustomGame: dU = null
      } = UU;
      const {
        t: SU
      } = (0, qU.B)();
      (0, GR.h)();
      const yU = (0, GR.p)(),
        {
          userContext: kU,
          isUserContextUpdating: FU
        } = (0, mU.e)(),
        iU = (0, mR.d)(),
        DU = (0, OU.useNavigatePreserveSearch)(),
        LU = (0, lU.y)(),
        NU = (0, QU.useMemo)((() => vU ? {
          gameNameWithVariation: vU
        } : LU), [vU, LU]),
        RR = (0, KR.d)(NU),
        pR = (0, QU.useMemo)((() => {
          const UU = function(UU) {
            var RU, gU;
            const tU = aR(UU);
            if (!tU || 0 === tU.length || tU.includes(UU)) return UU;
            const pU = KU.k.getItem((0, WU.j)(UU));
            if (pU && tU.includes(pU)) return pU;
            return null !== (RU = null === (gU = jR.d[UU]) || void 0 === gU ? void 0 : gU.defaultListedVariation) && void 0 !== RU ? RU : tU[0]
          }(RR.gameNameWithVariation);
          return UU === RR.gameNameWithVariation ? RR : {
            ...RR,
            gameNameWithVariation: UU
          }
        }), [RR]);
      (0, QU.useEffect)((() => {
        const UU = RR.gameNameWithVariation;
        pR.gameNameWithVariation !== UU && UU !== (0, PR.Wb)(UU) && DU((0, sU.v)(pR.gameNameWithVariation), {
          replace: !0
        })
      }), [pR.gameNameWithVariation, RR.gameNameWithVariation, DU]);
      const hR = (0, nU.b)(),
        [IR, wR] = (0, QU.useState)(""),
        nR = QU.useRef(null),
        [YR, BR] = (0, QU.useState)(),
        VR = (0, ER.m)(pR.gameNameWithVariation),
        XR = (0, QU.useMemo)((() => VR ? null : function(UU, RU, gU) {
          var tU, pU;
          const PU = jR.d[UU];
          return (0, bR.E)(PU) ? null : {
            listedVariations: aR(UU),
            backgroundImage: (0, EU.j)(UU, (0, EU.c)(PU)),
            badges: (0, cU.filterBadges)(PU.badges),
            category: PU.type,
            title: gU(PU.title),
            variationTitle: PU.variationTitle ? gU(PU.variationTitle) : null,
            description: gU(PU.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== RU ? null !== (tU = RU[UU]) && void 0 !== tU ? tU : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: PU.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: PU.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (pU = PU.canCreateCustomLobbies) || void 0 === pU || pU,
            countdownInformation: (0, WU.f)(UU)
          }
        }(pR.gameNameWithVariation, yU, SU)), [VR, pR.gameNameWithVariation, yU, SU]),
        [vR, dR] = (0, QU.useState)(!1),
        [HR, SR] = (0, QU.useState)((() => dU ? ZR(dU, SU) : oR)),
        sR = null !== XR && void 0 !== XR ? XR : HR,
        [yR] = (0, QU.useState)(sR === oR),
        kR = (0, pU.h)(sR.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: FR,
          recentlyPlayedCustomLobbies: iR
        } = (0, QU.useMemo)((() => function(UU, RU, gU, tU) {
          var pU;
          const EU = UU => {
              const gU = (0, ER.q)(UU),
                tU = RU.find((RU => "custom" === RU.type ? RU.schematicId === gU : RU.gameNameWithVariation === UU));
              return tU ? [...tU.recentLobbies] : []
            },
            PU = (0, cU.getRecentGameNameWithVariationLobbiesKey)(UU),
            TU = null !== (pU = KU.k.getItem(PU)) && void 0 !== pU ? pU : [],
            qU = [...EU(UU), ...TU],
            GU = [];
          for (const KU of qU)(0, uR.P)(KU) && !GU.includes(KU) && GU.push(KU);
          let jU = qU;
          if (gU) {
            const UU = EU("classic_worlds"),
              RU = qU.filter((RU => !UU.includes(RU)));
            jU = [...UU, ...RU]
          }
          const uU = [],
            CU = !1 === tU ? [] : jU;
          for (const KU of CU)(0, uR.P)(KU) || uU.includes(KU) || uU.push(KU);
          return {
            recentlyPlayedPublicLobbies: GU,
            recentlyPlayedCustomLobbies: uU
          }
        }(pR.gameNameWithVariation, iU, sR.showWorldsInsteadOfCustomLobbies, sR.canCreateCustomLobbies)), [pR.gameNameWithVariation, iU, sR.showWorldsInsteadOfCustomLobbies, sR.canCreateCustomLobbies]),
        [AR, zR] = (0, QU.useState)(!0),
        [MR, DR] = (0, QU.useState)([]),
        [LR, NR] = (0, QU.useState)(null),
        [lR, OR] = (0, QU.useState)("explore"),
        Ug = (0, QU.useRef)(!1),
        Rg = (0, QU.useCallback)((UU => {
          (0, eU.unstable_batchedUpdates)((() => {
            BR(UU), SR((RU => ({
              ...ZR(UU, SU),
              isFavourite: RU.isFavourite
            })))
          }))
        }), [SU]);
      (0, QU.useEffect)((() => {
        null === cR.b.get("gameEntrySource") && (0, cR.h)("gameInformationPageDirect")
      }), []);
      const gg = (0, QU.useRef)(null);
      (0, QU.useEffect)((() => {
        const UU = UU => {
            gg.current = UU.target instanceof Element ? UU.target.closest("a, button") : null
          },
          RU = UU => {
            "Tab" === UU.key && (gg.current = null)
          };
        return document.addEventListener("pointerdown", UU, !0), document.addEventListener("keydown", RU, !0), () => {
          document.removeEventListener("pointerdown", UU, !0), document.removeEventListener("keydown", RU, !0)
        }
      }), []), (0, IU.d)("Enter", (UU => {
        const RU = UU.target instanceof Element ? UU.target : null;
        if (UU.defaultPrevented || null !== RU && void 0 !== RU && RU.closest("input, textarea, select")) return;
        const gU = null === RU || void 0 === RU ? void 0 : RU.closest("a, button");
        gU && gU !== gg.current || (UU.preventDefault(), Gg())
      })), (0, JU.c)(OU.navigateToHomePage);
      const tg = FR.length > 0 || iR.length > 0,
        pg = !sR.useRejoinLastLobbyButton || 0 === FR.length,
        Eg = VR && null === sR.ownerSocialPreviewWithoutLocation,
        Pg = kU.getPlayerName() === (null === YR || void 0 === YR || null === (RU = YR.owner) || void 0 === RU ? void 0 : RU.name),
        Tg = null !== (gU = null === (PU = sR.badges.find((UU => "event" === UU.type))) || void 0 === PU ? void 0 : PU.event) && void 0 !== gU ? gU : null,
        qg = pg ? jU.j : jU.e,
        Kg = (0, XU.jsx)(GU.g, {
          tooltipInner: (0, XU.jsx)("div", {
            children: SU("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, XU.jsx)(qg, {
            className: "GameInformationButton",
            padDefaultFocus: pg,
            showPress: !0,
            onClick: () => {
              Gg()
            },
            children: (0, XU.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [pg && (0, XU.jsxs)(XU.Fragment, {
                children: [(0, XU.jsx)(zU.c, {
                  name: "play"
                }), " "]
              }), SU("homePage:quickPlay")]
            })
          })
        });
      (0, QU.useEffect)((() => {
        if (!VR || FU) return;
        let UU = !0;
        const RU = (0, ER.q)(pR.gameNameWithVariation);
        return aU.c.getGame(kU, RU).then((RU => {
          UU && Rg(RU)
        })).catch((RU => {
          console.error("Failed to get Custom Game information", RU), UU && (0, OU.navigateToHomePage)()
        })), aU.c.getFavouriteGames(kU).then((gU => {
          UU && SR((UU => ({
            ...UU,
            isFavourite: gU.includes(RU)
          })))
        })).catch((RU => {
          console.error("Failed to get favourite games", RU), UU && dR(!0)
        })), () => {
          UU = !1
        }
      }), [VR, FU, pR.gameNameWithVariation, Rg, kU]);
      const cg = !VR && null === XR;

      function Gg(UU) {
        (0, JR.e)(), DU((0, fU.e)(pR.gameNameWithVariation, UU))
      }(0, QU.useEffect)((() => {
        cg && (0, OU.navigateToHomePage)()
      }), [cg]), (0, QU.useEffect)((() => {
        !1 !== sR.canCreateCustomLobbies && null !== sR.showWorldsInsteadOfCustomLobbies && !1 === FU && (zR(!0), aU.c.getFavouriteLobbies(kU).then((UU => {
          NR(UU)
        })), aU.c.getOpenCustomLobbies(kU, {
          gameNameWithVariation: sR.showWorldsInsteadOfCustomLobbies ? "classic" : pR.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === lR,
          onlyFavouriteLobbies: "favourite" === lR
        }).then((UU => {
          hR.current && DR(UU)
        })).catch((UU => {})).finally((() => {
          hR.current && zR(!1)
        })))
      }), [FU, pR, lR, sR.showWorldsInsteadOfCustomLobbies, sR.canCreateCustomLobbies, hR, kU]);
      const jg = (0, QU.useCallback)((async UU => {
          try {
            if (!LR) return;
            LR.includes(UU) ? (aU.c.unfavouriteLobby(kU, UU), NR(LR.filter((RU => RU !== UU)))) : (aU.c.favouriteLobby(kU, UU).catch((UU => {
              console.error("Failed to favourite lobby", UU)
            })), NR([...LR, UU]))
          } catch (RU) {
            console.error("Failed to like lobby", RU)
          }
        }), [kU, LR]),
        ug = (null === YR || void 0 === YR ? void 0 : YR.schematicId) === (0, ER.q)(RR.gameNameWithVariation) ? YR : null,
        Cg = ug && (0, sU.G)(RR.gameNameWithVariation, (UU => SU(UU)), ug);
      (0, UR.g)(ug && (0, sU.v)(RR.gameNameWithVariation, ug));
      const hg = MU.featureFlags.canUseCustomLobbies && !0 === sR.canCreateCustomLobbies,
        Qg = (0, XU.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, XU.jsx)(AU, {
            gameNameWithVariation: pR.gameNameWithVariation
          })
        });
      return (0, XU.jsx)(XU.Fragment, {
        children: (0, XU.jsxs)("article", {
          className: CU()("GameInformation", {
            GameInformationFadeIn: yR,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (uU = sR.countdownInformation) || void 0 === uU ? void 0 : uU.type)
          }),
          children: [Cg && (0, XU.jsx)(xU.c, {
            meta: Cg
          }), (0, XU.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, XU.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, XU.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, XU.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, XU.jsx)("div", {
                  className: CU()("GameInformationTopBackgroundImage", TU.h),
                  style: (0, TU.e)(kR),
                  children: (0, XU.jsx)(TU.c, {
                    image: kR
                  })
                })]
              }), (0, XU.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, XU.jsx)(eR.e, {}), (0, XU.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, XU.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, XU.jsxs)("div", {
                      className: CU()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: Eg
                      }),
                      children: [sR.badges.map((UU => (0, XU.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${UU.type}`,
                        children: (0, XU.jsx)(oU.b, {
                          badge: UU
                        })
                      }, UU.type))), VR && (0, XU.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, XU.jsx)(bU.e, {
                          text: (0, tU.gb)({
                            type: "playerCrafted"
                          })
                        })
                      }), sR.category && (0, XU.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, XU.jsx)(bU.e, {
                          text: [{
                            str: (0, tU.ib)(sR.category).toUpperCase()
                          }]
                        })
                      }), null !== sR.ccu && (0, XU.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, XU.jsx)(zU.c, {
                          name: "user"
                        }), (0, uR.R)(sR.ccu), " online"]
                      }), null !== sR.ownerSocialPreviewWithoutLocation && (0, XU.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, XU.jsx)("span", {
                          children: "Made by"
                        }), (0, XU.jsx)(VU.d, {
                          playerSocialPreview: {
                            ...sR.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), Eg && (0, XU.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, XU.jsx)("span", {
                          children: "Made by"
                        }), (0, XU.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== sR.favourites && (null !== sR.isFavourite || VR && !vR) && (0, XU.jsx)(jU.s, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== Ug.current && (Ug.current = !0, null !== sR.isFavourite)) {
                              const UU = (0, ER.q)(pR.gameNameWithVariation);
                              let RU;
                              sR.isFavourite ? (RU = -1, aU.c.unfavouriteGame(kU, UU).catch((UU => {
                                console.error("Failed to get unfavourite game", UU)
                              })).finally((() => {
                                Ug.current = !1
                              }))) : (RU = 1, aU.c.favouriteGame(kU, UU).catch((UU => {
                                console.error("Failed to get favourite game", UU)
                              })).finally((() => {
                                Ug.current = !1
                              }))), SR((UU => ({
                                ...UU,
                                isFavourite: !UU.isFavourite
                              }))), SR((UU => ({
                                ...UU,
                                favourites: UU.favourites + RU
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (ZU = sR.isFavourite) && void 0 !== ZU && ZU,
                        disabled: null === sR.isFavourite,
                        className: CU()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === sR.isFavourite
                        })
                      }, null === sR.isFavourite ? "pending" : "known"), VR && !Eg && MU.featureFlags.useSocialFeatures && !Pg && (0, XU.jsx)(fR.b, {
                        targetType: "customGame",
                        targetId: (0, ER.q)(pR.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (kU.playerHasRank("developer") || kU.playerHasRank("admin") && Pg) && (0, XU.jsxs)(jU.j, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          DU((0, qR.m)((0, TR.f)(pR.gameNameWithVariation, !0)))
                        },
                        children: [(0, XU.jsx)(zU.c, {
                          name: "star-christmas"
                        }), " ", SU("studio:viewInStudio")]
                      }), VR && kU.playerHasRank("developer") && (0, XU.jsxs)(jU.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, CR.b)({
                            schematicId: (0, ER.q)(pR.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, XU.jsx)(zU.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), VR && kU.playerHasRank("developer") && (0, XU.jsxs)(jU.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          gR.NotificationProvider.showCustomPopup({
                            body: () => (0, XU.jsx)(QR, {
                              schematicId: (0, ER.q)(pR.gameNameWithVariation),
                              gameName: sR.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, XU.jsx)(zU.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (YU = sR.countdownInformation) || void 0 === YU ? void 0 : YU.type) && (0, XU.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, XU.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, XU.jsx)(wU.e, {
                            toTime: sR.countdownInformation.countdownToTime
                          })]
                        }), (0, XU.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: sR.countdownInformation.previewText
                        })]
                      })]
                    }, Eg ? "pending" : "shown"), (0, XU.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, XU.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, XU.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [sR.title, " ", sR.variationTitle && (null === (BU = jR.d[pR.gameNameWithVariation]) || void 0 === BU ? void 0 : BU.variationThumbnailUseBigRatio) && (0, XU.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: sR.variationTitle
                          })]
                        })
                      }), sR.listedVariations && sR.listedVariations.length > 0 && (0, XU.jsx)("div", {
                        className: CU()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (rU = jR.d[pR.gameNameWithVariation]) || void 0 === rU ? void 0 : rU.variationThumbnailUseBigRatio
                        }),
                        children: sR.listedVariations.map((UU => {
                          var RU, gU;
                          return (0, XU.jsxs)(rR, {
                            variation: UU,
                            isSelected: pR.gameNameWithVariation === UU,
                            children: [null !== yU && (0, XU.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, XU.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, XU.jsx)(zU.c, {
                                  name: "user"
                                }), " ", (0, uR.R)(null !== (RU = yU[UU]) && void 0 !== RU ? RU : 0)]
                              })
                            }), (0, XU.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: SU(null !== (gU = jR.d[UU].variationTitle) && void 0 !== gU ? gU : jR.d[UU].title)
                            }), (0, XU.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, cU.filterBadges)(jR.d[UU].badges).map((UU => (0, XU.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + UU.type,
                                children: (0, XU.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, XU.jsx)(oU.b, {
                                    badge: UU
                                  })
                                })
                              }, UU.type)))
                            })]
                          }, UU)
                        }))
                      })]
                    }), sR.description && (0, XU.jsx)("p", {
                      className: "GameInformationDescription",
                      children: sR.description
                    })]
                  }), (0, XU.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, XU.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!pg && (0, XU.jsx)(GU.g, {
                        tooltipInner: (0, XU.jsx)("div", {
                          children: SU("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, XU.jsx)(jU.j, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            Gg(FR[0])
                          },
                          children: (0, XU.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, XU.jsx)(zU.c, {
                              name: "play"
                            }), " ", SU("homePage:rejoinLobbyNumber", {
                              number: FR[0]
                            })]
                          })
                        })
                      }), pg && Kg]
                    }), (0, XU.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!pg && Kg, (0, XU.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, XU.jsx)(zU.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, XU.jsx)(hU.d, {
                          className: "JoinLobbyInput",
                          placeholderText: SU("homePage:lobbyName"),
                          maxLength: uR.Q,
                          domRef: nR,
                          onValueChange: UU => {
                            UU = (0, uR.rb)(UU), wR(UU)
                          },
                          onEnter: () => {
                            0 === IR.length ? Gg(FR[0]) : Gg(IR)
                          }
                        }), (0, XU.jsx)(jU.e, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === IR.length ? Gg(FR[0]) : Gg(IR)
                          },
                          children: SU("general:join")
                        })]
                      })]
                    }), (0, XU.jsxs)("section", {
                      className: CU()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !tg
                      }),
                      children: [(0, XU.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, XU.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, XU.jsx)(zU.c, {
                            name: "clock-rotate-left"
                          }), tg && (0, XU.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: SU("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, XU.jsx)(xR.c, {
                        lobbyGroups: [FR, iR],
                        onLobbyClick: UU => {
                          Gg(UU)
                        },
                        keyPrefix: pR.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== Tg && (0, XU.jsx)(HU, {
                eventName: Tg
              })]
            }), hg && (0, XU.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, XU.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, XU.jsxs)("div", {
                  className: CU()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === sR.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === sR.showWorldsInsteadOfCustomLobbies && (0, XU.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, XU.jsx)(zU.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, XU.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, XU.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), SU("game:worlds")]
                    })]
                  }), !1 === sR.showWorldsInsteadOfCustomLobbies && (0, XU.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, XU.jsx)(zU.c, {
                      name: "joystick"
                    }), (0, XU.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, XU.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), SU("homePage:customLobbies")]
                    })]
                  }), (0, XU.jsx)(jU.M, {
                    onClick: () => {
                      OR("explore")
                    },
                    active: "explore" === lR,
                    children: SU("general:explore")
                  }), (0, XU.jsx)(jU.M, {
                    onClick: () => {
                      OR("favourite")
                    },
                    active: "favourite" === lR,
                    children: SU("homePage:favouriteLobbies")
                  }), (0, XU.jsx)(jU.M, {
                    onClick: () => {
                      OR("owned")
                    },
                    active: "owned" === lR,
                    children: SU("homePage:ownedLobbies")
                  })]
                }), (0, XU.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, XU.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, XU.jsx)(WR.e, {
                      label: "Create",
                      onClick: () => {
                        gR.NotificationProvider.showCustomPopup({
                          body: UU => (0, XU.jsx)(tR.CreateCustomLobby, {
                            gameNameWithVariation: pR.gameNameWithVariation,
                            close: UU
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === AR && (0, XU.jsx)(WR.i, {}), !1 === AR && MR.length > 0 && MR.map((UU => (0, XU.jsx)(WR.h, {
                      customLobby: UU,
                      favouriteLobbies: LR,
                      toggleLikeLobby: jg,
                      showReport: MU.featureFlags.useSocialFeatures && "owned" !== lR
                    }, UU.name)))]
                  }), Qg]
                })]
              })
            })]
          }), !hg && Qg]
        })
      })
    }

    function rR(UU) {
      let {
        variation: RU,
        isSelected: gU,
        children: tU
      } = UU;
      const qU = jR.d[RU],
        cU = (0, EU.j)(RU, (0, EU.m)(qU)),
        GU = (0, pU.h)(cU),
        jU = (0, PU.h)([(0, EU.h)(RU, (0, EU.c)(qU))]);
      return (0, XU.jsxs)(OU.LinkPreserveSearch, {
        to: (0, sU.v)(RU),
        replace: !0,
        className: CU()("GameInformationVariation", TU.h, {
          SelectedGameInformationVariation: gU
        }),
        onClick: UU => {
          if (!(0, RR.c)(UU)) return;
          const gU = (0, WU.j)(RU);
          KU.k.setItem(gU, RU)
        },
        onMouseEnter: jU.start,
        onMouseLeave: jU.cancel,
        onFocus: jU.start,
        onBlur: jU.cancel,
        style: (0, TU.e)(GU),
        children: [(0, XU.jsx)(TU.c, {
          image: GU
        }), tU]
      })
    }
  },
  6182: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => eU
    });
    var tU = gU(56),
      pU = gU(1412),
      EU = gU(1461),
      PU = gU(3182),
      TU = gU(1112),
      qU = gU(1326),
      KU = gU(1344),
      cU = gU(1049),
      GU = gU(1037),
      jU = gU.n(GU),
      uU = gU(1090);

    function CU(UU) {
      let {
        info: RU,
        className: gU
      } = UU;
      return (0, uU.jsxs)("div", {
        className: jU()("GameApprovalInfoDetails", gU),
        children: [(0, uU.jsxs)("div", {
          className: jU()("GameApprovalInfoSummary", RU.overallPassed ? "Passed" : "Failed"),
          children: [(0, uU.jsx)(cU.c, {
            name: RU.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, uU.jsx)("span", {
            children: RU.summary
          })]
        }), RU.rows.length > 0 && (0, uU.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: RU.rows.map((UU => (0, uU.jsxs)("div", {
            className: jU()("GameApprovalInfoRow", UU.passed ? "Passed" : "Failed"),
            children: [(0, uU.jsx)(cU.c, {
              name: UU.passed ? "check" : "xmark"
            }), (0, uU.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, uU.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: UU.label
              }), (0, uU.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: UU.valueText
              })]
            })]
          }, UU.label)))
        })]
      })
    }
    var hU = gU(1181),
      QU = gU(1333);

    function eU(UU) {
      QU.NotificationProvider.showCustomPopup({
        body: () => (0, uU.jsx)(WU, {
          ...UU
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function WU(UU) {
      let {
        schematicId: RU,
        canOverride: gU,
        onApprovalChanged: GU
      } = UU;
      const {
        t: jU
      } = (0, hU.B)(), {
        userContext: QU
      } = (0, TU.e)(), eU = (0, PU.b)(), [WU, fU] = (0, tU.useState)(null), [xU, mU] = (0, tU.useState)(null), [IU, JU] = (0, tU.useState)(!1), wU = (0, tU.useCallback)((() => {
        mU(null), EU.c.getGameApprovalInfo(QU, RU).then((UU => {
          eU.current && fU(UU)
        })).catch((UU => {
          console.error("Failed to get game approval info", UU), eU.current && mU(jU("studio:approvalLoadFailed"))
        }))
      }), [QU, RU, eU, jU]);
      (0, tU.useEffect)((() => {
        wU()
      }), [wU]);
      const nU = UU => {
        IU || (JU(!0), EU.c.setGameApproval(QU, RU, UU).then((() => {
          null === GU || void 0 === GU || GU(), eU.current && wU()
        })).catch((UU => {
          console.error("Failed to set game approval", UU)
        })).finally((() => {
          eU.current && JU(!1)
        })))
      };
      return (0, uU.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, uU.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: jU("studio:approvalTitle")
        }), !WU && !xU && (0, uU.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, uU.jsx)(qU.d, {})
        }), xU && (0, uU.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: xU
        }), WU && (0, uU.jsxs)(uU.Fragment, {
          children: [(0, uU.jsx)(CU, {
            info: WU
          }), gU && (0, uU.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== WU.manualOverride && (0, uU.jsx)(KU.g, {
              tooltipInner: (0, uU.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, uU.jsxs)(pU.j, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  nU(!0)
                },
                disabled: IU,
                children: [(0, uU.jsx)(cU.c, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== WU.manualOverride && (0, uU.jsx)(KU.g, {
              tooltipInner: (0, uU.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, uU.jsxs)(pU.E, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  nU(!1)
                },
                disabled: IU,
                children: [(0, uU.jsx)(cU.c, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== WU.manualOverride && (0, uU.jsx)(KU.g, {
              tooltipInner: (0, uU.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, uU.jsxs)(pU.e, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  nU(null)
                },
                disabled: IU,
                children: [(0, uU.jsx)(cU.c, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  9033: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU
    });
    var tU = gU(56),
      pU = gU(3262);

    function EU() {
      const [UU, RU] = (0, tU.useState)(!1);
      return (0, tU.useLayoutEffect)((() => {
        let UU = !0;
        return (0, pU.e)().then((() => {
          UU && RU(!0)
        })), () => {
          UU = !1
        }
      }), []), UU
    }
  },
  8544: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(1320),
      pU = gU(1217),
      EU = gU(581);

    function PU(UU) {
      return UU = function(UU, RU) {
        var gU;
        const tU = new URLSearchParams(RU),
          pU = tU.get("lobby"),
          EU = tU.get("vm"),
          PU = null !== (gU = pU) && void 0 !== gU ? gU : UU.lobbyName,
          TU = null !== EU && void 0 !== EU ? EU : UU.directJoinVmUrl;
        if (PU === UU.lobbyName && TU === UU.directJoinVmUrl) return UU;
        return {
          ...UU,
          lobbyName: PU,
          directJoinVmUrl: TU
        }
      }(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), UU = function(UU) {
        if ((0, EU.E)(UU.directJoinVmUrl)) return UU;
        const RU = (0, pU.Y)(UU.directJoinVmUrl);
        null === RU && (UU.directJoinVmUrl = void 0);
        return UU
      }(UU = function(UU) {
        if ((0, EU.E)(UU.gameNameWithVariation)) return UU;
        return UU.gameNameWithVariation = (0, tU.i)(UU.gameNameWithVariation), UU
      }(UU))
    }
  },
  8536: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      e: () => pU
    });
    let tU = !1;

    function pU() {
      tU = !0
    }

    function EU() {
      return tU
    }
  },
  35963: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      f: () => tU
    });
    const tU = "skyblockSkills",
      pU = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);