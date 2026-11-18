export const id = 108;
export const ids = [108, 379];
export const modules = {
  35364: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => KT
    });
    var VB = dB(270),
      yB = dB(2998),
      pB = dB(3037),
      lB = dB(3031),
      JB = dB(3026),
      YB = dB(1078),
      gB = dB(33),
      oB = dB(1596),
      kB = dB(1249),
      LB = dB(1324),
      OB = dB(933),
      DB = dB.n(OB),
      uB = dB(1555),
      HB = dB(62),
      EB = dB(72),
      vB = dB(2076),
      mB = dB(1214),
      iB = dB(1495),
      NB = dB(1011),
      tB = dB(2892),
      fB = dB(3962),
      sB = dB(2978),
      MB = dB(2983),
      zB = dB(1657),
      wB = dB(2991),
      UB = dB(1610),
      FB = dB(1393),
      KB = dB(1901),
      rB = dB(1225),
      IB = dB(2208),
      cB = dB(4438),
      SB = dB(980);
    const PB = 15e3,
      QB = 2500;

    function RB(BB) {
      var TB;
      let {
        eventName: dB
      } = BB;
      const {
        t: VB
      } = (0, YB.z)(), yB = UB.e[dB], [pB, lB] = (0, HB.useState)((() => Date.now() >= yB.endsAt.getTime())), [JB, gB] = (0, HB.useState)("overall"), oB = function(BB, TB) {
        const {
          userContext: dB,
          isUserContextUpdating: VB
        } = (0, NB.b)(), yB = `${BB}:${TB}`, [pB, lB] = (0, HB.useState)({
          requestKey: yB,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, HB.useEffect)((() => {
          if (VB) return;
          let pB, JB = !1;
          const YB = async () => {
            if ("visible" === document.visibilityState) try {
              const VB = await FB.c.getGameEventLeaderboard(dB, {
                event: BB,
                scope: TB
              });
              JB || lB({
                requestKey: yB,
                leaderboard: {
                  status: "loaded",
                  leaderboard: VB
                }
              })
            } catch {
              JB || lB((BB => BB.requestKey === yB && "loaded" === BB.leaderboard.status ? BB : {
                requestKey: yB,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            JB || (pB = setTimeout(YB, PB))
          };
          return YB(), () => {
            JB = !0, clearTimeout(pB)
          }
        }), [BB, TB, yB, dB, VB]), pB.requestKey === yB ? pB.leaderboard : {
          status: "loading"
        }
      }(dB, JB), kB = function(BB) {
        const TB = (0, HB.useRef)(null),
          dB = (0, HB.useRef)(0),
          VB = (0, HB.useRef)(),
          [yB, pB] = (0, HB.useState)({});
        return (0, HB.useEffect)((() => {
          const yB = null === BB || void 0 === BB ? void 0 : BB.entries;
          if (!yB) return;
          const lB = new Map(yB.map((BB => [BB.player.name, BB.value]))),
            JB = TB.current;
          if (TB.current = lB, null === JB) return;
          const YB = {};
          for (const [BB, TB] of lB) {
            const VB = JB.get(BB);
            void 0 !== VB && TB > VB && (YB[BB] = {
              amount: TB - VB,
              key: dB.current++
            })
          }
          0 !== Object.keys(YB).length && (pB(YB), clearTimeout(VB.current), VB.current = setTimeout((() => {
            pB({})
          }), QB))
        }), [BB]), (0, HB.useEffect)((() => () => {
          clearTimeout(VB.current)
        }), []), yB
      }("loaded" === oB.status ? oB.leaderboard : null), LB = function(BB) {
        const [TB, dB] = (0, HB.useState)(null), VB = "loaded" === BB.status ? BB.leaderboard.goalProgress : void 0;
        return (0, HB.useEffect)((() => {
          VB && dB(VB)
        }), [VB]), TB
      }(oB), OB = KB.i[`profileEffect_${yB.prizePack}`];
      if (pB) return null;
      const uB = "loaded" === oB.status ? oB.leaderboard : null,
        EB = null !== (TB = null === uB || void 0 === uB ? void 0 : uB.entries) && void 0 !== TB ? TB : null,
        vB = null !== uB && void 0 !== uB && uB.own && null !== EB && !EB.some((BB => BB.isOwn)) ? uB.own : null;
      return (0, SB.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, SB.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, SB.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, SB.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, SB.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, SB.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), VB("gameEvents:live")]
              }), (0, SB.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [VB("gameEvents:endsIn"), (0, SB.jsx)(sB.d, {
                  toTime: yB.endsAt,
                  onReachEndOfCountdown: () => {
                    lB(!0)
                  }
                })]
              })]
            }), (0, SB.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: VB(yB.titleKey)
            }), (0, SB.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, SB.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [OB && (0, SB.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, SB.jsx)(OB, {})
                }), (0, SB.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, SB.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: VB("gameEvents:prize")
                  }), (0, SB.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: VB(yB.prizeNameKey)
                  })]
                })]
              }), (0, SB.jsx)(aB, {
                event: yB,
                progress: LB
              })]
            })]
          }), (0, SB.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, SB.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, SB.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: VB(yB.leaderboard.titleKey)
              }), (0, SB.jsx)(cB.d, {
                ariaLabel: VB("gameEvents:leaderboardScope"),
                options: UB.c.map((BB => ({
                  value: BB,
                  label: VB(`gameEvents:${BB}Scope`)
                }))),
                value: JB,
                onChange: gB
              })]
            }), "loading" === oB.status && (0, SB.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, SB.jsx)(rB.b, {})
            }), ("unavailable" === oB.status || "loaded" === oB.status && null === EB) && (0, SB.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: VB("gameEvents:leaderboardUnavailable")
            }), null !== EB && 0 === EB.length && (0, SB.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: VB("friends" === JB ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== EB && EB.length > 0 && (0, SB.jsx)("ol", {
              className: "GameEventPanelRows",
              children: EB.map((BB => {
                const TB = kB[BB.player.name];
                return (0, SB.jsxs)("li", {
                  className: DB()("GameEventPanelRow", {
                    GameEventPanelRowOwn: BB.isOwn,
                    GameEventPanelRowTop: BB.rank <= 3
                  }),
                  children: [(0, SB.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", BB.rank]
                  }), (0, SB.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, SB.jsx)(IB.i, {
                      playerSocialPreview: {
                        ...BB.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== TB && (0, SB.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", TB.amount.toLocaleString()]
                  }, TB.key), (0, SB.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: BB.value.toLocaleString()
                  })]
                }, BB.player.name)
              }))
            }), vB && (0, SB.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, SB.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", vB.rank.toLocaleString()]
              }), (0, SB.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: VB("gameEvents:yourPlace")
              }), (0, SB.jsx)("span", {
                className: "GameEventPanelScore",
                children: vB.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function aB(BB) {
      let {
        event: TB,
        progress: dB
      } = BB;
      const {
        t: VB
      } = (0, YB.z)(), yB = null !== dB && TB.prizeGoals.some(((BB, TB) => dB[TB] >= BB.target));
      return (0, SB.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, SB.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: VB(yB ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, SB.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: TB.prizeGoals.map(((BB, TB) => {
            const yB = null === dB ? null : Math.min(dB[TB], BB.target);
            return (0, SB.jsxs)(HB.Fragment, {
              children: [TB > 0 && (0, SB.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: VB("gameEvents:goalsOr")
              }), (0, SB.jsxs)("div", {
                className: DB()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: yB === BB.target
                }),
                children: [(0, SB.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: VB(BB.labelKey)
                }), (0, SB.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, SB.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== yB && void 0 !== yB ? yB : 0) / BB.target * 100 + "%"
                    }
                  }), null !== yB && (0, SB.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [yB.toLocaleString(), " / ", BB.target.toLocaleString()]
                  })]
                })]
              })]
            }, BB.board)
          }))
        })]
      })
    }
    var ZB = dB(1445),
      XB = dB(1484),
      WB = dB(925),
      hB = dB(618),
      CB = dB(2971);

    function GB(BB) {
      let {
        gameNameWithVariation: TB
      } = BB;
      const dB = (0, ZB.D)(TB),
        [VB, yB] = (0, HB.useState)(null);
      if ((0, HB.useEffect)((() => {
          if (!dB) return;
          let BB = !0;
          return (0, XB.f)(dB).then((TB => {
            BB && yB(TB)
          })).catch((BB => {
            console.error(`Failed to load the page copy for ${dB.name}`, BB)
          })), () => {
            BB = !1
          }
        }), [dB]), !dB || !VB || VB.name !== dB.name) return null;
      const pB = (0, XB.e)(VB),
        lB = new Set((0, WB.d)((0, hB.k)()).map((BB => (0, ZB.x)(BB)))),
        JB = VB.similarGames.filter((BB => lB.has((0, ZB.x)(BB))));
      return (0, SB.jsx)("div", {
        className: "GamePageContent",
        children: (0, SB.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, SB.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, SB.jsx)("h2", {
              children: pB.whatIs
            }), VB.whatIs.map((BB => (0, SB.jsx)("p", {
              children: BB
            }, BB)))]
          }), (0, SB.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, SB.jsx)("h2", {
              children: pB.howToPlay
            }), VB.howToPlay.map((BB => (0, SB.jsx)("p", {
              children: BB
            }, BB)))]
          }), (0, SB.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, SB.jsx)("h2", {
              children: pB.features
            }), (0, SB.jsx)("ul", {
              children: VB.features.map((BB => (0, SB.jsx)("li", {
                children: BB
              }, BB)))
            })]
          }), (0, SB.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, SB.jsx)("h2", {
              children: pB.tips
            }), (0, SB.jsx)("ul", {
              children: VB.tips.map((BB => (0, SB.jsx)("li", {
                children: BB
              }, BB)))
            })]
          }), (0, SB.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, SB.jsx)("h2", {
              children: pB.faq
            }), VB.faq.map((BB => {
              let {
                question: TB,
                answer: dB
              } = BB;
              return (0, SB.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, SB.jsx)("h3", {
                  children: TB
                }), (0, SB.jsx)("p", {
                  children: dB
                })]
              }, TB)
            }))]
          }), JB.length > 0 && (0, SB.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, SB.jsx)("h2", {
              children: pB.similarGames
            }), (0, SB.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: JB.map((BB => (0, SB.jsx)("li", {
                children: (0, SB.jsx)(CB.f, {
                  source: {
                    type: "game",
                    gameNameWithVariation: BB
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, BB)))
            })]
          })]
        })
      })
    }
    var qB = dB(946),
      xB = dB(95),
      jB = dB(1020),
      AB = dB(3069),
      bB = dB(1530),
      nB = dB(1422),
      eB = dB(1407),
      BT = dB(1491),
      TT = dB(1336),
      dT = dB(1235),
      VT = dB(35367),
      yT = dB(1113),
      pT = dB(900),
      lT = dB(279),
      JT = dB(912),
      YT = dB(1441),
      gT = dB(8223),
      oT = dB(21),
      kT = dB(2170),
      LT = dB(663),
      OT = dB(1105),
      DT = dB(5855);

    function uT(BB) {
      let {
        preview: TB,
        isBroken: dB
      } = BB;
      const VB = null === TB ? null : (0, pB.f)(TB, "small"),
        lB = (0, yB.h)(null !== VB && void 0 !== VB ? VB : pB.t);
      return null === TB ? (0, SB.jsx)("div", {
        className: DB()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: dB
        }),
        children: (0, SB.jsx)(qB.e, {
          name: dB ? "triangle-exclamation" : "star"
        })
      }) : (0, SB.jsx)("div", {
        className: DB()("FeaturedGamesPopupSlotThumbnail", JB.e),
        style: (0, JB.d)(lB),
        role: "img",
        "aria-label": TB.name,
        children: (0, SB.jsx)(JB.c, {
          image: lB
        })
      })
    }

    function HT(BB) {
      let {
        schematicId: TB,
        gameName: dB
      } = BB;
      const {
        userContext: yB
      } = (0, NB.b)(), pB = (0, MB.b)(), [lB, JB] = (0, HB.useState)(null), [YB, gB] = (0, HB.useState)(null), [oB, kB] = (0, HB.useState)(!1), OB = (0, HB.useCallback)((() => {
        gB(null), FB.c.getFeaturedGames(yB).then((BB => {
          pB.current && JB(BB.slots)
        })).catch((BB => {
          console.error("Failed to get featured games", BB), pB.current && gB("Failed to load featured games")
        }))
      }), [yB, pB]);
      (0, HB.useEffect)((() => {
        OB()
      }), [OB]);
      const DB = (BB, TB) => {
        oB || (kB(!0), FB.c.setFeaturedGame(yB, BB, TB).then((() => {
          pB.current && OB()
        })).catch((BB => {
          console.error("Failed to set featured game", BB), pB.current && gB("Failed to update the featured slot")
        })).finally((() => {
          pB.current && kB(!1)
        })))
      };
      return (0, SB.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, SB.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !lB && !YB && (0, SB.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, SB.jsx)(rB.b, {})
        }), YB && (0, SB.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: YB
        }), lB && (0, SB.jsxs)(SB.Fragment, {
          children: [(0, SB.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: lB.map((BB => {
              const dB = BB.schematicId === TB,
                yB = null === BB.schematicId,
                {
                  categoryGroup: pB
                } = VB.G[BB.slotId];
              return (0, SB.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, SB.jsx)(uT, {
                  preview: BB.preview,
                  isBroken: !yB
                }), (0, SB.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, SB.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, VB.jb)(pB), " \xb7 position", " ", (0, VB.K)(BB.slotId, VB.Ob) + 1, " of", " ", (0, VB.Lb)(pB, VB.Ob)]
                  }), yB && (0, SB.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !yB && null !== BB.preview && (0, SB.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: BB.preview.name
                  }), !yB && null === BB.preview && (0, SB.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, SB.jsx)(qB.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, SB.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [yB && (0, SB.jsxs)(LB.r, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      DB(BB.slotId, TB)
                    },
                    disabled: oB,
                    children: [(0, SB.jsx)(qB.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !yB && !dB && (0, SB.jsxs)(LB.T, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      DB(BB.slotId, TB)
                    },
                    disabled: oB,
                    children: [(0, SB.jsx)(qB.e, {
                      name: "star"
                    }), " Replace"]
                  }), !yB && (0, SB.jsxs)(LB.K, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      DB(BB.slotId, null)
                    },
                    disabled: oB,
                    children: [(0, SB.jsx)(qB.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, BB.slotId)
            }))
          }), (0, SB.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var ET = dB(4076),
      vT = dB(3996),
      mT = dB(4003),
      iT = dB(4014),
      NT = dB(3984),
      tT = dB(3060),
      fT = dB(35399),
      sT = dB(195);
    const MT = {
      skyblock: [dB(35404).d]
    };
    var zT = dB(572);
    const wT = {
      listedVariations: null,
      backgroundImage: pB.t,
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

    function UT(BB, TB) {
      const dB = LT.i[BB.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, pB.f)(BB, "large"),
        badges: [],
        category: BB.gameCategory,
        title: void 0 !== (null === dB || void 0 === dB ? void 0 : dB.title) ? TB(dB.title) : BB.name,
        variationTitle: null,
        description: void 0 !== (null === dB || void 0 === dB ? void 0 : dB.description) ? TB(dB.description) : BB.description,
        ownerSocialPreviewWithoutLocation: "owner" in BB ? BB.owner : null,
        ccu: BB.ccu,
        favourites: BB.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in BB ? BB.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function FT(BB) {
      var TB, dB, VB;
      return null !== (TB = null !== (dB = (0, sT.g)() ? function(BB) {
        for (const [TB, dB] of Object.entries(MT)) {
          const VB = [TB, ...dB.map((BB => (0, lT.Tb)(TB, BB)))];
          if (VB.includes(BB)) return VB
        }
        return null
      }(BB) : null) && void 0 !== dB ? dB : null === (VB = LT.e[BB]) || void 0 === VB ? void 0 : VB.listedVariations) && void 0 !== TB ? TB : null
    }

    function KT() {
      const {
        gameNameWithVariation: BB
      } = (0, nB.u)();
      if ((0, HB.useEffect)(tT.t, []), (0, HB.useEffect)(fT.g, []), BB && (0, yT.v)(BB)) return (0, SB.jsx)(rT, {
        urlId: BB
      }, BB);
      const TB = BB && (0, pT.j)(BB) ? BB : "firstParty";
      return (0, SB.jsx)(IT, {}, TB)
    }

    function rT(BB) {
      let {
        urlId: TB
      } = BB;
      const {
        userContext: dB,
        isUserContextUpdating: VB
      } = (0, NB.b)(), yB = (0, HB.useMemo)((() => (0, bB.i)(TB)), [TB]);
      (0, HB.useMemo)((() => {
        if (null === yB) return;
        const BB = jB.userContextManager.peekCurrentUserContext();
        (null !== BB ? FB.c.getGame(BB, yB.schematicId) : jB.userContextManager.getCurrentUserContext().then((BB => FB.c.getGame(BB, yB.schematicId)))).catch((BB => {
          console.error(`Failed to get the custom game ${yB.schematicId}`, BB), (0, bB.f)(TB)
        }))
      }), [yB, TB]);
      const [pB, lB] = (0, HB.useState)(null), [JB, YB] = (0, HB.useState)(!1);
      (0, HB.useLayoutEffect)((() => {
        let BB = !0;
        return (0, AB.d)().then((() => {
          BB && YB(!0)
        })), () => {
          BB = !1
        }
      }), []), (0, HB.useEffect)((() => {
        if (null !== yB || VB) return;
        let BB = !0;
        return FB.c.getGameByUrlId(dB, TB).then((dB => {
          BB && lB({
            urlId: TB,
            game: dB
          })
        })).catch((dB => {
          console.error(`Failed to find the custom game with urlId ${TB}`, dB), BB && (0, eB.navigateToHomePage)()
        })), () => {
          BB = !1
        }
      }), [TB, yB, VB, dB]);
      const gB = null !== yB && void 0 !== yB ? yB : (null === pB || void 0 === pB ? void 0 : pB.urlId) === TB ? pB.game : null;
      return null === gB ? (0, SB.jsx)(rB.b, {}) : JB ? (0, SB.jsx)(IT, {
        gameNameWithVariation: (0, pT.t)(gB.schematicId),
        knownCustomGame: gB
      }, gB.schematicId) : null
    }

    function IT(BB) {
      var TB, dB, lB, OB, UB, KB, rB, cB;
      let {
        gameNameWithVariation: PB,
        knownCustomGame: QB = null
      } = BB;
      const {
        t: aB
      } = (0, YB.z)();
      (0, kT.e)();
      const XB = (0, kT.k)(),
        {
          userContext: WB,
          isUserContextUpdating: CB
        } = (0, NB.b)(),
        jB = (0, NT.f)(),
        AB = (0, eB.useNavigatePreserveSearch)(),
        bB = (0, nB.u)(),
        TT = (0, HB.useMemo)((() => PB ? {
          gameNameWithVariation: PB
        } : bB), [PB, bB]),
        yT = (0, gT.c)(TT),
        uT = (0, HB.useMemo)((() => {
          const BB = function(BB) {
            var TB, dB;
            const VB = FT(BB);
            if (!VB || 0 === VB.length || VB.includes(BB)) return BB;
            const yB = gB.j.getItem((0, vB.e)(BB));
            if (yB && VB.includes(yB)) return yB;
            return null !== (TB = null === (dB = LT.e[BB]) || void 0 === dB ? void 0 : dB.defaultListedVariation) && void 0 !== TB ? TB : VB[0]
          }(yT.gameNameWithVariation);
          return BB === yT.gameNameWithVariation ? yT : {
            ...yT,
            gameNameWithVariation: BB
          }
        }), [yT]);
      (0, HB.useEffect)((() => {
        const BB = yT.gameNameWithVariation;
        uT.gameNameWithVariation !== BB && BB !== (0, lT.Vb)(BB) && AB((0, ZB.z)(uT.gameNameWithVariation), {
          replace: !0
        })
      }), [uT.gameNameWithVariation, yT.gameNameWithVariation, AB]);
      const tT = (0, MB.b)(),
        [fT, sT] = (0, HB.useState)(""),
        MT = HB.useRef(null),
        [KT, rT] = (0, HB.useState)(),
        IT = (0, pT.j)(uT.gameNameWithVariation),
        ST = (0, HB.useMemo)((() => IT ? null : function(BB, TB, dB) {
          var VB, yB;
          const lB = LT.e[BB];
          return (0, zT.M)(lB) ? null : {
            listedVariations: FT(BB),
            backgroundImage: (0, pB.n)(BB, (0, pB.d)(lB)),
            badges: (0, oB.filterBadges)(lB.badges),
            category: lB.type,
            title: dB(lB.title),
            variationTitle: lB.variationTitle ? dB(lB.variationTitle) : null,
            description: dB(lB.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== TB ? null !== (VB = TB[BB]) && void 0 !== VB ? VB : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: lB.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: lB.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (yB = lB.canCreateCustomLobbies) || void 0 === yB || yB,
            countdownInformation: (0, vB.d)(BB)
          }
        }(uT.gameNameWithVariation, XB, aB)), [IT, uT.gameNameWithVariation, XB, aB]),
        [PT, QT] = (0, HB.useState)(!1),
        [RT, aT] = (0, HB.useState)((() => QB ? UT(QB, aB) : wT)),
        ZT = null !== ST && void 0 !== ST ? ST : RT,
        [XT] = (0, HB.useState)(ZT === wT),
        WT = (0, yB.h)(ZT.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: hT,
          recentlyPlayedCustomLobbies: CT
        } = (0, HB.useMemo)((() => function(BB, TB, dB, VB) {
          var yB;
          const pB = BB => {
              const dB = (0, pT.l)(BB),
                VB = TB.find((TB => "custom" === TB.type ? TB.schematicId === dB : TB.gameNameWithVariation === BB));
              return VB ? [...VB.recentLobbies] : []
            },
            lB = (0, oB.getRecentGameNameWithVariationLobbiesKey)(BB),
            JB = null !== (yB = gB.j.getItem(lB)) && void 0 !== yB ? yB : [],
            YB = [...pB(BB), ...JB],
            kB = [];
          for (const gB of YB)(0, OT.O)(gB) && !kB.includes(gB) && kB.push(gB);
          let LB = YB;
          if (dB) {
            const BB = pB("classic_worlds"),
              TB = YB.filter((TB => !BB.includes(TB)));
            LB = [...BB, ...TB]
          }
          const OB = [],
            DB = !1 === VB ? [] : LB;
          for (const gB of DB)(0, OT.O)(gB) || OB.includes(gB) || OB.push(gB);
          return {
            recentlyPlayedPublicLobbies: kB,
            recentlyPlayedCustomLobbies: OB
          }
        }(uT.gameNameWithVariation, jB, ZT.showWorldsInsteadOfCustomLobbies, ZT.canCreateCustomLobbies)), [uT.gameNameWithVariation, jB, ZT.showWorldsInsteadOfCustomLobbies, ZT.canCreateCustomLobbies]),
        [GT, qT] = (0, HB.useState)(!0),
        [xT, jT] = (0, HB.useState)([]),
        [AT, bT] = (0, HB.useState)(null),
        [nT, eT] = (0, HB.useState)("explore"),
        Bd = (0, HB.useRef)(!1),
        Td = (0, HB.useCallback)((BB => {
          (0, EB.unstable_batchedUpdates)((() => {
            rT(BB), aT((TB => ({
              ...UT(BB, aB),
              isFavourite: TB.isFavourite
            })))
          }))
        }), [aB]);
      (0, HB.useEffect)((() => {
        null === oT.d.get("gameEntrySource") && (0, oT.i)("gameInformationPageDirect")
      }), []);
      const dd = (0, HB.useRef)(null);
      (0, HB.useEffect)((() => {
        const BB = BB => {
            dd.current = BB.target instanceof Element ? BB.target.closest("a, button") : null
          },
          TB = BB => {
            "Tab" === BB.key && (dd.current = null)
          };
        return document.addEventListener("pointerdown", BB, !0), document.addEventListener("keydown", TB, !0), () => {
          document.removeEventListener("pointerdown", BB, !0), document.removeEventListener("keydown", TB, !0)
        }
      }), []), (0, tB.d)("Enter", (BB => {
        const TB = BB.target instanceof Element ? BB.target : null;
        if (BB.defaultPrevented || null !== TB && void 0 !== TB && TB.closest("input, textarea, select")) return;
        const dB = null === TB || void 0 === TB ? void 0 : TB.closest("a, button");
        dB && dB !== dd.current || (BB.preventDefault(), kd())
      })), (0, fB.d)(eB.navigateToHomePage);
      const Vd = !hB.n && (hT.length > 0 || CT.length > 0),
        yd = !ZT.useRejoinLastLobbyButton || 0 === hT.length,
        pd = IT && null === ZT.ownerSocialPreviewWithoutLocation,
        ld = WB.getPlayerName() === (null === KT || void 0 === KT || null === (TB = KT.owner) || void 0 === TB ? void 0 : TB.name),
        Jd = null !== (dB = null === (lB = ZT.badges.find((BB => "event" === BB.type))) || void 0 === lB ? void 0 : lB.event) && void 0 !== dB ? dB : null,
        Yd = yd ? LB.k : LB.d,
        gd = (0, SB.jsx)(kB.h, {
          tooltipInner: (0, SB.jsx)("div", {
            children: aB("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, SB.jsx)(Yd, {
            className: "GameInformationButton",
            padDefaultFocus: yd,
            showPress: !0,
            onClick: () => {
              kd()
            },
            children: (0, SB.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [yd && (0, SB.jsxs)(SB.Fragment, {
                children: [(0, SB.jsx)(qB.e, {
                  name: "play"
                }), " "]
              }), aB("homePage:quickPlay")]
            })
          })
        });
      (0, HB.useEffect)((() => {
        if (!IT || CB) return;
        let BB = !0;
        const TB = (0, pT.l)(uT.gameNameWithVariation);
        return FB.c.getGame(WB, TB).then((TB => {
          BB && Td(TB)
        })).catch((TB => {
          console.error("Failed to get Custom Game information", TB), BB && (0, eB.navigateToHomePage)()
        })), FB.c.getFavouriteGames(WB).then((dB => {
          BB && aT((BB => ({
            ...BB,
            isFavourite: dB.includes(TB)
          })))
        })).catch((TB => {
          console.error("Failed to get favourite games", TB), BB && QT(!0)
        })), () => {
          BB = !1
        }
      }), [IT, CB, uT.gameNameWithVariation, Td, WB]);
      const od = !IT && null === ST;

      function kd(BB) {
        AB((0, mB.b)(uT.gameNameWithVariation, BB))
      }(0, HB.useEffect)((() => {
        od && (0, eB.navigateToHomePage)()
      }), [od]), (0, HB.useEffect)((() => {
        !1 !== ZT.canCreateCustomLobbies && null !== ZT.showWorldsInsteadOfCustomLobbies && (hB.n || !1 !== CB || (qT(!0), FB.c.getFavouriteLobbies(WB).then((BB => {
          bT(BB)
        })), FB.c.getOpenCustomLobbies(WB, {
          gameNameWithVariation: ZT.showWorldsInsteadOfCustomLobbies ? "classic" : uT.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === nT,
          onlyFavouriteLobbies: "favourite" === nT
        }).then((BB => {
          tT.current && jT(BB)
        })).catch((BB => {})).finally((() => {
          tT.current && qT(!1)
        }))))
      }), [CB, uT, nT, ZT.showWorldsInsteadOfCustomLobbies, ZT.canCreateCustomLobbies, tT, WB]);
      const Ld = (0, HB.useCallback)((async BB => {
          try {
            if (!AT) return;
            AT.includes(BB) ? (FB.c.unfavouriteLobby(WB, BB), bT(AT.filter((TB => TB !== BB)))) : (FB.c.favouriteLobby(WB, BB).catch((BB => {
              console.error("Failed to favourite lobby", BB)
            })), bT([...AT, BB]))
          } catch (TB) {
            console.error("Failed to like lobby", TB)
          }
        }), [WB, AT]),
        Od = (null === KT || void 0 === KT ? void 0 : KT.schematicId) === (0, pT.l)(yT.gameNameWithVariation) ? KT : null,
        Dd = Od && (0, ZB.H)(yT.gameNameWithVariation, (BB => aB(BB)), Od);
      (0, BT.e)(Od && (0, ZB.z)(yT.gameNameWithVariation, Od));
      const ud = !hB.n && xB.featureFlags.canUseCustomLobbies && !0 === ZT.canCreateCustomLobbies,
        Hd = (0, SB.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, SB.jsx)(GB, {
            gameNameWithVariation: uT.gameNameWithVariation
          })
        });
      return (0, SB.jsx)(SB.Fragment, {
        children: (0, SB.jsxs)("article", {
          className: DB()("GameInformation", {
            GameInformationFadeIn: XT,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (OB = ZT.countdownInformation) || void 0 === OB ? void 0 : OB.type)
          }),
          children: [Dd && (0, SB.jsx)(iB.e, {
            meta: Dd
          }), (0, SB.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, SB.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, SB.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, SB.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, SB.jsx)("div", {
                  className: DB()("GameInformationTopBackgroundImage", JB.e),
                  style: (0, JB.d)(WT),
                  children: (0, SB.jsx)(JB.c, {
                    image: WT
                  })
                })]
              }), (0, SB.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, SB.jsx)(ET.e, {}), (0, SB.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, SB.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, SB.jsxs)("div", {
                      className: DB()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: pd
                      }),
                      children: [ZT.badges.map((BB => (0, SB.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${BB.type}`,
                        children: (0, SB.jsx)(wB.c, {
                          badge: BB
                        })
                      }, BB.type))), IT && (0, SB.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, SB.jsx)(zB.e, {
                          text: (0, VB.$)({
                            type: "playerCrafted"
                          })
                        })
                      }), ZT.category && (0, SB.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, SB.jsx)(zB.e, {
                          text: [{
                            str: (0, VB.db)(ZT.category).toUpperCase()
                          }]
                        })
                      }), null !== ZT.ccu && (0, SB.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, SB.jsx)(qB.e, {
                          name: "user"
                        }), (0, OT.S)(ZT.ccu), " online"]
                      }), null !== ZT.ownerSocialPreviewWithoutLocation && (0, SB.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, SB.jsx)("span", {
                          children: "Made by"
                        }), (0, SB.jsx)(IB.i, {
                          playerSocialPreview: {
                            ...ZT.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), pd && (0, SB.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, SB.jsx)("span", {
                          children: "Made by"
                        }), (0, SB.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== ZT.favourites && (null !== ZT.isFavourite || IT && !PT) && (0, SB.jsx)(LB.t, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== Bd.current && (Bd.current = !0, null !== ZT.isFavourite)) {
                              const BB = (0, pT.l)(uT.gameNameWithVariation);
                              let TB;
                              ZT.isFavourite ? (TB = -1, FB.c.unfavouriteGame(WB, BB).catch((BB => {
                                console.error("Failed to get unfavourite game", BB)
                              })).finally((() => {
                                Bd.current = !1
                              }))) : (TB = 1, FB.c.favouriteGame(WB, BB).catch((BB => {
                                console.error("Failed to get favourite game", BB)
                              })).finally((() => {
                                Bd.current = !1
                              }))), aT((BB => ({
                                ...BB,
                                isFavourite: !BB.isFavourite
                              }))), aT((BB => ({
                                ...BB,
                                favourites: BB.favourites + TB
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (UB = ZT.isFavourite) && void 0 !== UB && UB,
                        disabled: null === ZT.isFavourite,
                        className: DB()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === ZT.isFavourite
                        })
                      }, null === ZT.isFavourite ? "pending" : "known"), IT && !pd && xB.featureFlags.useSocialFeatures && !ld && (0, SB.jsx)(mT.b, {
                        targetType: "customGame",
                        targetId: (0, pT.l)(uT.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (WB.playerHasRank("developer") || WB.playerHasRank("admin") && ld) && (0, SB.jsxs)(LB.k, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          AB((0, YT.g)((0, JT.d)(uT.gameNameWithVariation, !0)))
                        },
                        children: [(0, SB.jsx)(qB.e, {
                          name: "star-christmas"
                        }), " ", aB("studio:viewInStudio")]
                      }), IT && WB.playerHasRank("developer") && (0, SB.jsxs)(LB.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, DT.c)({
                            schematicId: (0, pT.l)(uT.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, SB.jsx)(qB.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), IT && WB.playerHasRank("developer") && (0, SB.jsxs)(LB.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          dT.NotificationProvider.showCustomPopup({
                            body: () => (0, SB.jsx)(HT, {
                              schematicId: (0, pT.l)(uT.gameNameWithVariation),
                              gameName: ZT.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, SB.jsx)(qB.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (KB = ZT.countdownInformation) || void 0 === KB ? void 0 : KB.type) && (0, SB.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, SB.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, SB.jsx)(sB.d, {
                            toTime: ZT.countdownInformation.countdownToTime
                          })]
                        }), (0, SB.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: ZT.countdownInformation.previewText
                        })]
                      })]
                    }, pd ? "pending" : "shown"), (0, SB.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, SB.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, SB.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [ZT.title, " ", ZT.variationTitle && (null === (rB = LT.e[uT.gameNameWithVariation]) || void 0 === rB ? void 0 : rB.variationThumbnailUseBigRatio) && (0, SB.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: ZT.variationTitle
                          })]
                        })
                      }), ZT.listedVariations && ZT.listedVariations.length > 0 && (0, SB.jsx)("div", {
                        className: DB()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (cB = LT.e[uT.gameNameWithVariation]) || void 0 === cB ? void 0 : cB.variationThumbnailUseBigRatio
                        }),
                        children: ZT.listedVariations.map((BB => {
                          var TB, dB;
                          return (0, SB.jsxs)(cT, {
                            variation: BB,
                            isSelected: uT.gameNameWithVariation === BB,
                            children: [null !== XB && (0, SB.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, SB.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, SB.jsx)(qB.e, {
                                  name: "user"
                                }), " ", (0, OT.S)(null !== (TB = XB[BB]) && void 0 !== TB ? TB : 0)]
                              })
                            }), (0, SB.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: aB(null !== (dB = LT.e[BB].variationTitle) && void 0 !== dB ? dB : LT.e[BB].title)
                            }), (0, SB.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, oB.filterBadges)(LT.e[BB].badges).map((BB => (0, SB.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + BB.type,
                                children: (0, SB.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, SB.jsx)(wB.c, {
                                    badge: BB
                                  })
                                })
                              }, BB.type)))
                            })]
                          }, BB)
                        }))
                      })]
                    }), ZT.description && (0, SB.jsx)("p", {
                      className: "GameInformationDescription",
                      children: ZT.description
                    })]
                  }), (0, SB.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, SB.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!hB.n && !yd && (0, SB.jsx)(kB.h, {
                        tooltipInner: (0, SB.jsx)("div", {
                          children: aB("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, SB.jsx)(LB.k, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            kd(hT[0])
                          },
                          children: (0, SB.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, SB.jsx)(qB.e, {
                              name: "play"
                            }), " ", aB("homePage:rejoinLobbyNumber", {
                              number: hT[0]
                            })]
                          })
                        })
                      }), !hB.n && yd && gd]
                    }), (0, SB.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!hB.n && !yd && gd, (0, SB.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, SB.jsx)(qB.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, SB.jsx)(uB.e, {
                          className: "JoinLobbyInput",
                          placeholderText: aB("homePage:lobbyName"),
                          maxLength: OT.R,
                          domRef: MT,
                          onValueChange: BB => {
                            BB = (0, OT.xb)(BB), sT(BB)
                          },
                          onEnter: () => {
                            0 === fT.length ? kd(hT[0]) : kd(fT)
                          }
                        }), (0, SB.jsx)(LB.d, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === fT.length ? kd(hT[0]) : kd(fT)
                          },
                          children: aB("general:join")
                        })]
                      })]
                    }), (0, SB.jsxs)("section", {
                      className: DB()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !Vd
                      }),
                      children: [(0, SB.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, SB.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, SB.jsx)(qB.e, {
                            name: "clock-rotate-left"
                          }), Vd && (0, SB.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: aB("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, SB.jsx)(iT.e, {
                        lobbyGroups: [hT, CT],
                        onLobbyClick: BB => {
                          kd(BB)
                        },
                        keyPrefix: uT.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== Jd && (0, SB.jsx)(RB, {
                eventName: Jd
              })]
            }), ud && (0, SB.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, SB.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, SB.jsxs)("div", {
                  className: DB()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === ZT.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === ZT.showWorldsInsteadOfCustomLobbies && (0, SB.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, SB.jsx)(qB.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, SB.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, SB.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), aB("game:worlds")]
                    })]
                  }), !1 === ZT.showWorldsInsteadOfCustomLobbies && (0, SB.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, SB.jsx)(qB.e, {
                      name: "joystick"
                    }), (0, SB.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, SB.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), aB("homePage:customLobbies")]
                    })]
                  }), (0, SB.jsx)(LB.T, {
                    onClick: () => {
                      eT("explore")
                    },
                    active: "explore" === nT,
                    children: aB("general:explore")
                  }), (0, SB.jsx)(LB.T, {
                    onClick: () => {
                      eT("favourite")
                    },
                    active: "favourite" === nT,
                    children: aB("homePage:favouriteLobbies")
                  }), (0, SB.jsx)(LB.T, {
                    onClick: () => {
                      eT("owned")
                    },
                    active: "owned" === nT,
                    children: aB("homePage:ownedLobbies")
                  })]
                }), (0, SB.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, SB.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, SB.jsx)(vT.c, {
                      label: "Create",
                      onClick: () => {
                        dT.NotificationProvider.showCustomPopup({
                          body: BB => (0, SB.jsx)(VT.CreateCustomLobby, {
                            gameNameWithVariation: uT.gameNameWithVariation,
                            close: BB
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === GT && (0, SB.jsx)(vT.h, {}), !1 === GT && xT.length > 0 && xT.map((BB => (0, SB.jsx)(vT.d, {
                      customLobby: BB,
                      favouriteLobbies: AT,
                      toggleLikeLobby: Ld,
                      showReport: xB.featureFlags.useSocialFeatures && "owned" !== nT
                    }, BB.name)))]
                  }), Hd]
                })]
              })
            })]
          }), !ud && Hd]
        })
      })
    }

    function cT(BB) {
      let {
        variation: TB,
        isSelected: dB,
        children: VB
      } = BB;
      const YB = LT.e[TB],
        oB = (0, pB.n)(TB, (0, pB.p)(YB)),
        kB = (0, yB.h)(oB),
        LB = (0, lB.i)([(0, pB.j)(TB, (0, pB.d)(YB))]);
      return (0, SB.jsxs)(eB.LinkPreserveSearch, {
        to: (0, ZB.z)(TB),
        replace: !0,
        className: DB()("GameInformationVariation", JB.e, {
          SelectedGameInformationVariation: dB
        }),
        onClick: BB => {
          if (!(0, TT.d)(BB)) return;
          const dB = (0, vB.e)(TB);
          gB.j.setItem(dB, TB)
        },
        onMouseEnter: LB.start,
        onMouseLeave: LB.cancel,
        onFocus: LB.start,
        onBlur: LB.cancel,
        style: (0, JB.d)(kB),
        children: [(0, SB.jsx)(JB.c, {
          image: kB
        }), VB]
      })
    }
  },
  5855: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => EB
    });
    var VB = dB(62),
      yB = dB(1324),
      pB = dB(1393),
      lB = dB(2983),
      JB = dB(1011),
      YB = dB(1225),
      gB = dB(1249),
      oB = dB(946),
      kB = dB(933),
      LB = dB.n(kB),
      OB = dB(980);

    function DB(BB) {
      let {
        info: TB,
        className: dB
      } = BB;
      return (0, OB.jsxs)("div", {
        className: LB()("GameApprovalInfoDetails", dB),
        children: [(0, OB.jsxs)("div", {
          className: LB()("GameApprovalInfoSummary", TB.overallPassed ? "Passed" : "Failed"),
          children: [(0, OB.jsx)(oB.e, {
            name: TB.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, OB.jsx)("span", {
            children: TB.summary
          })]
        }), TB.rows.length > 0 && (0, OB.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: TB.rows.map((BB => (0, OB.jsxs)("div", {
            className: LB()("GameApprovalInfoRow", BB.passed ? "Passed" : "Failed"),
            children: [(0, OB.jsx)(oB.e, {
              name: BB.passed ? "check" : "xmark"
            }), (0, OB.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, OB.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: BB.label
              }), (0, OB.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: BB.valueText
              })]
            })]
          }, BB.label)))
        })]
      })
    }
    var uB = dB(1078),
      HB = dB(1235);

    function EB(BB) {
      HB.NotificationProvider.showCustomPopup({
        body: () => (0, OB.jsx)(vB, {
          ...BB
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function vB(BB) {
      let {
        schematicId: TB,
        canOverride: dB,
        onApprovalChanged: kB
      } = BB;
      const {
        t: LB
      } = (0, uB.z)(), {
        userContext: HB
      } = (0, JB.b)(), EB = (0, lB.b)(), [vB, mB] = (0, VB.useState)(null), [iB, NB] = (0, VB.useState)(null), [tB, fB] = (0, VB.useState)(!1), sB = (0, VB.useCallback)((() => {
        NB(null), pB.c.getGameApprovalInfo(HB, TB).then((BB => {
          EB.current && mB(BB)
        })).catch((BB => {
          console.error("Failed to get game approval info", BB), EB.current && NB(LB("studio:approvalLoadFailed"))
        }))
      }), [HB, TB, EB, LB]);
      (0, VB.useEffect)((() => {
        sB()
      }), [sB]);
      const MB = BB => {
        tB || (fB(!0), pB.c.setGameApproval(HB, TB, BB).then((() => {
          null === kB || void 0 === kB || kB(), EB.current && sB()
        })).catch((BB => {
          console.error("Failed to set game approval", BB)
        })).finally((() => {
          EB.current && fB(!1)
        })))
      };
      return (0, OB.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, OB.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: LB("studio:approvalTitle")
        }), !vB && !iB && (0, OB.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, OB.jsx)(YB.b, {})
        }), iB && (0, OB.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: iB
        }), vB && (0, OB.jsxs)(OB.Fragment, {
          children: [(0, OB.jsx)(DB, {
            info: vB
          }), dB && (0, OB.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== vB.manualOverride && (0, OB.jsx)(gB.h, {
              tooltipInner: (0, OB.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, OB.jsxs)(yB.k, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  MB(!0)
                },
                disabled: tB,
                children: [(0, OB.jsx)(oB.e, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== vB.manualOverride && (0, OB.jsx)(gB.h, {
              tooltipInner: (0, OB.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, OB.jsxs)(yB.K, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  MB(!1)
                },
                disabled: tB,
                children: [(0, OB.jsx)(oB.e, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== vB.manualOverride && (0, OB.jsx)(gB.h, {
              tooltipInner: (0, OB.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, OB.jsxs)(yB.d, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  MB(null)
                },
                disabled: tB,
                children: [(0, OB.jsx)(oB.e, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  8223: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(1214),
      yB = dB(1105),
      pB = dB(572);

    function lB(BB) {
      return BB = function(BB, TB) {
        var dB;
        const VB = new URLSearchParams(TB),
          yB = VB.get("lobby"),
          pB = VB.get("vm"),
          lB = null !== (dB = yB) && void 0 !== dB ? dB : BB.lobbyName,
          JB = null !== pB && void 0 !== pB ? pB : BB.directJoinVmUrl;
        if (lB === BB.lobbyName && JB === BB.directJoinVmUrl) return BB;
        return {
          ...BB,
          lobbyName: lB,
          directJoinVmUrl: JB
        }
      }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), BB = function(BB) {
        if ((0, pB.M)(BB.directJoinVmUrl)) return BB;
        const TB = (0, yB.db)(BB.directJoinVmUrl);
        null === TB && (BB.directJoinVmUrl = void 0);
        return BB
      }(BB = function(BB) {
        if ((0, pB.M)(BB.gameNameWithVariation)) return BB;
        return BB.gameNameWithVariation = (0, VB.k)(BB.gameNameWithVariation), BB
      }(BB))
    }
  },
  35399: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => YB,
      g: () => gB
    });
    var VB = dB(1133),
      yB = dB(3073),
      pB = dB(586),
      lB = dB(8214);

    function JB(BB, TB) {
      let VB = !1;
      const pB = () => {
        VB = !0
      };
      if (! function(BB) {
          var TB;
          return !0 !== (null === BB || void 0 === BB ? void 0 : BB.saveData) && !/2g$/.test(null !== (TB = null === BB || void 0 === BB ? void 0 : BB.effectiveType) && void 0 !== TB ? TB : "")
        }(navigator.connection)) return pB;
      const JB = () => !VB && !(0, lB.i)();
      return (0, yB.b)((() => {
        JB() && Promise.all([dB.e(126), dB.e(81), dB.e(51)]).then((() => dB(39476))).then((BB => JB() ? TB(BB) : void 0), (TB => {
          console.warn(`[bloxd-wasm-client] ${BB} did not load: the join loads the client itself`, TB)
        }))
      })), pB
    }

    function YB() {
      JB("the prefetch", (BB => {
        let {
          prefetchWasmClient: TB
        } = BB;
        return TB({
          joinStarted: lB.i,
          language: VB.f.get().getCurrentLanguageCode()
        })
      }))
    }

    function gB() {
      return pB.p ? JB("the game page's early load", (BB => {
        let {
          startGamePageLoad: TB
        } = BB;
        return TB()
      })) : () => {}
    }
  },
  8214: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => oB,
      g: () => LB,
      i: () => kB
    });
    var VB = dB(2614),
      yB = dB(2034),
      pB = dB(2664),
      lB = dB(4051),
      JB = dB(2998);
    let YB = null,
      gB = !1;

    function oB() {
      return lB.e.cancelDownloadForJoin(), (0, JB.d)(), (0, yB.i)(), gB = !0, (0, pB.h)(), Promise.all([dB.e(64), dB.e(67), dB.e(66), dB.e(65), dB.e(77), dB.e(228), dB.e(202), dB.e(226), dB.e(197), dB.e(43)]).then((() => dB(39407))).catch((() => {})), Promise.all([dB.e(126), dB.e(81), dB.e(51)]).then((() => dB(39476))).then((BB => {
        let {
          startJoinLoad: TB
        } = BB;
        TB()
      }), (() => {})), YB ??= Promise.all([dB.e(66), dB.e(126), dB.e(122), dB.e(251), dB.e(177), dB.e(81), dB.e(80), dB.e(79), dB.e(197), dB.e(56)]).then((() => dB(39565))).then((BB => (BB.startWasmPlay(), BB.followPageUiPack((BB => {
        VB.b.showGamePack(BB)
      })), BB)), (BB => {
        throw YB = null, BB
      })), YB
    }

    function kB() {
      return gB
    }

    function LB() {
      return Promise.all([dB.e(66), dB.e(126), dB.e(122), dB.e(251), dB.e(177), dB.e(81), dB.e(80), dB.e(79), dB.e(197), dB.e(56)]).then((() => dB(39565))).then((BB => {
        BB.startWasmPreviews(), BB.prefetchWasmPreviews()
      }))
    }
  },
  35404: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      f: () => VB
    });
    const VB = "skyblockSkills",
      yB = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);