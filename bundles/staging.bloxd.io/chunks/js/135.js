export const id = 135;
export const ids = [135, 705];
export const modules = {
  37022: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => gO
    });
    var YB = GB(331),
      DB = GB(3944),
      QB = GB(3982),
      oB = GB(3976),
      jB = GB(3968),
      yB = GB(1175),
      JB = GB(31),
      MB = GB(1822),
      PB = GB(1405),
      zB = GB(1485),
      lB = GB(1090),
      pB = GB.n(lB),
      qB = GB(1735),
      ZB = GB(56),
      NB = GB(70),
      RB = GB(2549),
      WB = GB(1360),
      AB = GB(1675),
      VB = GB(1112),
      SB = GB(3839),
      nB = GB(4967),
      UB = GB(2831),
      fB = GB(2e3),
      kB = GB(3941),
      dB = GB(1831),
      KB = GB(1540),
      uB = GB(2289),
      mB = GB(1375),
      IB = GB(2874),
      FB = GB(5512),
      iB = GB(1282);
    const LB = 15e3,
      gB = 2500;

    function rB(BB) {
      var OB;
      let {
        eventName: GB
      } = BB;
      const {
        t: YB
      } = (0, yB.H)(), DB = dB.g[GB], [QB, oB] = (0, ZB.useState)((() => Date.now() >= DB.endsAt.getTime())), [jB, JB] = (0, ZB.useState)("overall"), MB = function(BB, OB) {
        const {
          userContext: GB,
          isUserContextUpdating: YB
        } = (0, VB.d)(), DB = `${BB}:${OB}`, [QB, oB] = (0, ZB.useState)({
          requestKey: DB,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, ZB.useEffect)((() => {
          if (YB) return;
          let QB, jB = !1;
          const yB = async () => {
            if ("visible" === document.visibilityState) try {
              const YB = await KB.b.getGameEventLeaderboard(GB, {
                event: BB,
                scope: OB
              });
              jB || oB({
                requestKey: DB,
                leaderboard: {
                  status: "loaded",
                  leaderboard: YB
                }
              })
            } catch {
              jB || oB((BB => BB.requestKey === DB && "loaded" === BB.leaderboard.status ? BB : {
                requestKey: DB,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            jB || (QB = setTimeout(yB, LB))
          };
          return yB(), () => {
            jB = !0, clearTimeout(QB)
          }
        }), [BB, OB, DB, GB, YB]), QB.requestKey === DB ? QB.leaderboard : {
          status: "loading"
        }
      }(GB, jB), PB = function(BB) {
        const OB = (0, ZB.useRef)(null),
          GB = (0, ZB.useRef)(0),
          YB = (0, ZB.useRef)(),
          [DB, QB] = (0, ZB.useState)({});
        return (0, ZB.useEffect)((() => {
          const DB = null === BB || void 0 === BB ? void 0 : BB.entries;
          if (!DB) return;
          const oB = new Map(DB.map((BB => [BB.player.name, BB.value]))),
            jB = OB.current;
          if (OB.current = oB, null === jB) return;
          const yB = {};
          for (const [BB, OB] of oB) {
            const YB = jB.get(BB);
            void 0 !== YB && OB > YB && (yB[BB] = {
              amount: OB - YB,
              key: GB.current++
            })
          }
          0 !== Object.keys(yB).length && (QB(yB), clearTimeout(YB.current), YB.current = setTimeout((() => {
            QB({})
          }), gB))
        }), [BB]), (0, ZB.useEffect)((() => () => {
          clearTimeout(YB.current)
        }), []), DB
      }("loaded" === MB.status ? MB.leaderboard : null), zB = function(BB) {
        const [OB, GB] = (0, ZB.useState)(null), YB = "loaded" === BB.status ? BB.leaderboard.goalProgress : void 0;
        return (0, ZB.useEffect)((() => {
          YB && GB(YB)
        }), [YB]), OB
      }(MB), lB = uB.h[`profileEffect_${DB.prizePack}`];
      if (QB) return null;
      const qB = "loaded" === MB.status ? MB.leaderboard : null,
        NB = null !== (OB = null === qB || void 0 === qB ? void 0 : qB.entries) && void 0 !== OB ? OB : null,
        RB = null !== qB && void 0 !== qB && qB.own && null !== NB && !NB.some((BB => BB.isOwn)) ? qB.own : null;
      return (0, iB.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, iB.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, iB.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, iB.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, iB.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, iB.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), YB("gameEvents:live")]
              }), (0, iB.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [YB("gameEvents:endsIn"), (0, iB.jsx)(UB.b, {
                  toTime: DB.endsAt,
                  onReachEndOfCountdown: () => {
                    oB(!0)
                  }
                })]
              })]
            }), (0, iB.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: YB(DB.titleKey)
            }), (0, iB.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, iB.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [lB && (0, iB.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, iB.jsx)(lB, {})
                }), (0, iB.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, iB.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: YB("gameEvents:prize")
                  }), (0, iB.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: YB(DB.prizeNameKey)
                  })]
                })]
              }), (0, iB.jsx)(XB, {
                event: DB,
                progress: zB
              })]
            })]
          }), (0, iB.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, iB.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, iB.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: YB(DB.leaderboard.titleKey)
              }), (0, iB.jsx)(FB.c, {
                ariaLabel: YB("gameEvents:leaderboardScope"),
                options: dB.d.map((BB => ({
                  value: BB,
                  label: YB(`gameEvents:${BB}Scope`)
                }))),
                value: jB,
                onChange: JB
              })]
            }), "loading" === MB.status && (0, iB.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, iB.jsx)(mB.b, {})
            }), ("unavailable" === MB.status || "loaded" === MB.status && null === NB) && (0, iB.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: YB("gameEvents:leaderboardUnavailable")
            }), null !== NB && 0 === NB.length && (0, iB.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: YB("friends" === jB ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== NB && NB.length > 0 && (0, iB.jsx)("ol", {
              className: "GameEventPanelRows",
              children: NB.map((BB => {
                const OB = PB[BB.player.name];
                return (0, iB.jsxs)("li", {
                  className: pB()("GameEventPanelRow", {
                    GameEventPanelRowOwn: BB.isOwn,
                    GameEventPanelRowTop: BB.rank <= 3
                  }),
                  children: [(0, iB.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", BB.rank]
                  }), (0, iB.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, iB.jsx)(IB.g, {
                      playerSocialPreview: {
                        ...BB.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== OB && (0, iB.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", OB.amount.toLocaleString()]
                  }, OB.key), (0, iB.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: BB.value.toLocaleString()
                  })]
                }, BB.player.name)
              }))
            }), RB && (0, iB.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, iB.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", RB.rank.toLocaleString()]
              }), (0, iB.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: YB("gameEvents:yourPlace")
              }), (0, iB.jsx)("span", {
                className: "GameEventPanelScore",
                children: RB.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function XB(BB) {
      let {
        event: OB,
        progress: GB
      } = BB;
      const {
        t: YB
      } = (0, yB.H)(), DB = null !== GB && OB.prizeGoals.some(((BB, OB) => GB[OB] >= BB.target));
      return (0, iB.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, iB.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: YB(DB ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, iB.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: OB.prizeGoals.map(((BB, OB) => {
            const DB = null === GB ? null : Math.min(GB[OB], BB.target);
            return (0, iB.jsxs)(ZB.Fragment, {
              children: [OB > 0 && (0, iB.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: YB("gameEvents:goalsOr")
              }), (0, iB.jsxs)("div", {
                className: pB()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: DB === BB.target
                }),
                children: [(0, iB.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: YB(BB.labelKey)
                }), (0, iB.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, iB.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== DB && void 0 !== DB ? DB : 0) / BB.target * 100 + "%"
                    }
                  }), null !== DB && (0, iB.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [DB.toLocaleString(), " / ", BB.target.toLocaleString()]
                  })]
                })]
              })]
            }, BB.board)
          }))
        })]
      })
    }
    var wB = GB(1591),
      EB = GB(1658),
      cB = GB(1074),
      hB = GB(760),
      aB = GB(3926);

    function eB(BB) {
      let {
        gameNameWithVariation: OB
      } = BB;
      const GB = (0, wB.x)(OB),
        [YB, DB] = (0, ZB.useState)(null);
      if ((0, ZB.useEffect)((() => {
          if (!GB) return;
          let BB = !0;
          return (0, EB.j)(GB).then((OB => {
            BB && DB(OB)
          })).catch((BB => {
            console.error(`Failed to load the page copy for ${GB.name}`, BB)
          })), () => {
            BB = !1
          }
        }), [GB]), !GB || !YB || YB.name !== GB.name) return null;
      const QB = (0, EB.g)(YB),
        oB = new Set((0, cB.e)((0, hB.f)()).map((BB => (0, wB.l)(BB)))),
        jB = YB.similarGames.filter((BB => oB.has((0, wB.l)(BB))));
      return (0, iB.jsx)("div", {
        className: "GamePageContent",
        children: (0, iB.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, iB.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, iB.jsx)("h2", {
              children: QB.whatIs
            }), YB.whatIs.map((BB => (0, iB.jsx)("p", {
              children: BB
            }, BB)))]
          }), (0, iB.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, iB.jsx)("h2", {
              children: QB.howToPlay
            }), YB.howToPlay.map((BB => (0, iB.jsx)("p", {
              children: BB
            }, BB)))]
          }), (0, iB.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, iB.jsx)("h2", {
              children: QB.features
            }), (0, iB.jsx)("ul", {
              children: YB.features.map((BB => (0, iB.jsx)("li", {
                children: BB
              }, BB)))
            })]
          }), (0, iB.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, iB.jsx)("h2", {
              children: QB.tips
            }), (0, iB.jsx)("ul", {
              children: YB.tips.map((BB => (0, iB.jsx)("li", {
                children: BB
              }, BB)))
            })]
          }), (0, iB.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, iB.jsx)("h2", {
              children: QB.faq
            }), YB.faq.map((BB => {
              let {
                question: OB,
                answer: GB
              } = BB;
              return (0, iB.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, iB.jsx)("h3", {
                  children: OB
                }), (0, iB.jsx)("p", {
                  children: GB
                })]
              }, OB)
            }))]
          }), jB.length > 0 && (0, iB.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, iB.jsx)("h2", {
              children: QB.similarGames
            }), (0, iB.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: jB.map((BB => (0, iB.jsx)("li", {
                children: (0, iB.jsx)(aB.h, {
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
    var TB = GB(1383),
      bB = GB(92),
      CB = GB(1121),
      HB = GB(34834),
      vB = GB(1715),
      sB = GB(1571),
      xB = GB(1560),
      tB = GB(1673),
      BO = GB(1499),
      OO = GB(1400),
      GO = GB(37029),
      YO = GB(1234),
      DO = GB(1049),
      QO = GB(353),
      oO = GB(1061),
      jO = GB(1586),
      yO = GB(9622),
      JO = GB(16),
      MO = GB(2733),
      PO = GB(791),
      zO = GB(1217),
      lO = GB(7015),
      pO = GB(3928);

    function qO(BB) {
      let {
        preview: OB,
        isBroken: GB
      } = BB;
      const YB = null === OB ? null : (0, QB.f)(OB, "small"),
        oB = (0, DB.e)(null !== YB && void 0 !== YB ? YB : QB.q);
      return null === OB ? (0, iB.jsx)("div", {
        className: pB()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: GB
        }),
        children: (0, iB.jsx)(TB.b, {
          name: GB ? "triangle-exclamation" : "star"
        })
      }) : (0, iB.jsx)("div", {
        className: pB()("FeaturedGamesPopupSlotThumbnail", jB.h),
        style: (0, jB.e)(oB),
        role: "img",
        "aria-label": OB.name,
        children: (0, iB.jsx)(jB.d, {
          image: oB
        })
      })
    }

    function ZO(BB) {
      let {
        schematicId: OB,
        gameName: GB
      } = BB;
      const {
        userContext: DB
      } = (0, VB.d)(), QB = (0, pO.c)(), [oB, jB] = (0, ZB.useState)(null), [yB, JB] = (0, ZB.useState)(null), [MB, PB] = (0, ZB.useState)(!1), lB = (0, ZB.useCallback)((() => {
        JB(null), KB.b.getFeaturedGames(DB).then((BB => {
          QB.current && jB(BB.slots)
        })).catch((BB => {
          console.error("Failed to get featured games", BB), QB.current && JB("Failed to load featured games")
        }))
      }), [DB, QB]);
      (0, ZB.useEffect)((() => {
        lB()
      }), [lB]);
      const pB = (BB, OB) => {
        MB || (PB(!0), KB.b.setFeaturedGame(DB, BB, OB).then((() => {
          QB.current && lB()
        })).catch((BB => {
          console.error("Failed to set featured game", BB), QB.current && JB("Failed to update the featured slot")
        })).finally((() => {
          QB.current && PB(!1)
        })))
      };
      return (0, iB.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, iB.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !oB && !yB && (0, iB.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, iB.jsx)(mB.b, {})
        }), yB && (0, iB.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: yB
        }), oB && (0, iB.jsxs)(iB.Fragment, {
          children: [(0, iB.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: oB.map((BB => {
              const GB = BB.schematicId === OB,
                DB = null === BB.schematicId,
                {
                  categoryGroup: QB
                } = YB.O[BB.slotId];
              return (0, iB.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, iB.jsx)(qO, {
                  preview: BB.preview,
                  isBroken: !DB
                }), (0, iB.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, iB.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, YB.kb)(QB), " \xb7 position", " ", (0, YB.P)(BB.slotId, YB.Qb) + 1, " of", " ", (0, YB.Nb)(QB, YB.Qb)]
                  }), DB && (0, iB.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !DB && null !== BB.preview && (0, iB.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: BB.preview.name
                  }), !DB && null === BB.preview && (0, iB.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, iB.jsx)(TB.b, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, iB.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [DB && (0, iB.jsxs)(zB.v, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      pB(BB.slotId, OB)
                    },
                    disabled: MB,
                    children: [(0, iB.jsx)(TB.b, {
                      name: "star"
                    }), " Feature here"]
                  }), !DB && !GB && (0, iB.jsxs)(zB.Z, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      pB(BB.slotId, OB)
                    },
                    disabled: MB,
                    children: [(0, iB.jsx)(TB.b, {
                      name: "star"
                    }), " Replace"]
                  }), !DB && (0, iB.jsxs)(zB.Q, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      pB(BB.slotId, null)
                    },
                    disabled: MB,
                    children: [(0, iB.jsx)(TB.b, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, BB.slotId)
            }))
          }), (0, iB.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var NO = GB(5146),
      RO = GB(5014),
      WO = GB(3873);
    const AO = 8,
      VO = 12;

    function SO(BB) {
      let {
        customLobbies: OB,
        favouriteLobbies: GB,
        toggleLikeLobby: YB,
        showReport: DB
      } = BB;
      const [QB, oB] = (0, ZB.useState)(AO);
      return (0, ZB.useEffect)((() => {
        if (QB >= OB.length) return;
        let BB = !0;
        return (0, WO.e)().then((() => {
          BB && oB(QB + VO)
        })), () => {
          BB = !1
        }
      }), [QB, OB.length]), (0, iB.jsx)(iB.Fragment, {
        children: OB.slice(0, QB).map((BB => (0, iB.jsx)(RO.f, {
          customLobby: BB,
          favouriteLobbies: GB,
          toggleLikeLobby: YB,
          showReport: DB
        }, BB.name)))
      })
    }
    var nO = GB(5020),
      UO = GB(5037),
      fO = GB(4990),
      kO = GB(4010),
      dO = GB(9614),
      KO = GB(9592),
      uO = GB(206);
    const mO = {
      skyblock: [GB(37048).e]
    };
    var IO = GB(641);
    const FO = {
      listedVariations: null,
      backgroundImage: QB.q,
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

    function iO(BB, OB) {
      const GB = PO.e[BB.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, QB.f)(BB, "large"),
        badges: [],
        category: BB.gameCategory,
        title: void 0 !== (null === GB || void 0 === GB ? void 0 : GB.title) ? OB(GB.title) : BB.name,
        variationTitle: null,
        description: void 0 !== (null === GB || void 0 === GB ? void 0 : GB.description) ? OB(GB.description) : BB.description,
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

    function LO(BB) {
      var OB, GB, YB;
      return null !== (OB = null !== (GB = (0, uO.k)() ? function(BB) {
        for (const [OB, GB] of Object.entries(mO)) {
          const YB = [OB, ...GB.map((BB => (0, QO.Yb)(OB, BB)))];
          if (YB.includes(BB)) return YB
        }
        return null
      }(BB) : null) && void 0 !== GB ? GB : null === (YB = PO.b[BB]) || void 0 === YB ? void 0 : YB.listedVariations) && void 0 !== OB ? OB : null
    }

    function gO() {
      const {
        gameNameWithVariation: BB
      } = (0, sB.A)();
      if ((0, ZB.useEffect)(kO.s, []), BB && (0, YO.t)(BB)) return (0, iB.jsx)(rO, {
        urlId: BB
      }, BB);
      const OB = BB && (0, DO.l)(BB) ? BB : "firstParty";
      return (0, iB.jsx)(wO, {}, OB)
    }

    function rO(BB) {
      let {
        urlId: OB
      } = BB;
      const {
        t: GB
      } = (0, yB.H)(), {
        userContext: YB,
        isUserContextUpdating: DB
      } = (0, VB.d)(), QB = (0, ZB.useMemo)((() => (0, vB.i)(OB)), [OB]);
      (0, ZB.useMemo)((() => {
        if (null === QB) return;
        const BB = CB.userContextManager.peekCurrentUserContext();
        (null !== BB ? KB.b.getGame(BB, QB.schematicId) : CB.userContextManager.getCurrentUserContext().then((BB => KB.b.getGame(BB, QB.schematicId)))).catch((BB => {
          null === (0, KB.j)(BB) && console.error(`Failed to get the custom game ${QB.schematicId}`, BB), (0, vB.e)(OB)
        }))
      }), [QB, OB]);
      const [oB, jB] = (0, ZB.useState)(null), JB = (0, HB.d)();
      (0, ZB.useEffect)((() => {
        if (null !== QB || DB) return;
        let BB = !0;
        return KB.b.getGameByUrlId(YB, OB).then((YB => {
          BB && (YB.takenDown ? XO(GB, YB) : jB({
            urlId: OB,
            game: YB
          }))
        })).catch((YB => {
          const DB = null !== (0, KB.j)(YB);
          DB || console.error(`Failed to find the custom game with urlId ${OB}`, YB), BB && (DB ? XO(GB, null) : (0, xB.navigateToHomePage)())
        })), () => {
          BB = !1
        }
      }), [OB, QB, DB, YB, GB]);
      const MB = null !== QB && void 0 !== QB ? QB : (null === oB || void 0 === oB ? void 0 : oB.urlId) === OB ? oB.game : null;
      return null === MB ? (0, iB.jsx)(mB.b, {}) : JB ? (0, iB.jsx)(wO, {
        gameNameWithVariation: (0, DO.v)(MB.schematicId),
        knownCustomGame: MB
      }, MB.schematicId) : null
    }

    function XO(BB, OB) {
      (0, xB.navigateToHomePage)(), (0, KO.g)(BB, OB)
    }

    function wO(BB) {
      var OB, GB, oB, lB, dB, uB, mB, FB;
      let {
        gameNameWithVariation: LB,
        knownCustomGame: gB = null
      } = BB;
      const {
        t: XB
      } = (0, yB.H)();
      (0, MO.j)();
      const EB = (0, MO.o)(),
        {
          userContext: cB,
          isUserContextUpdating: hB
        } = (0, VB.d)(),
        aB = (0, fO.d)(),
        CB = (0, xB.useNavigatePreserveSearch)(),
        HB = (0, sB.A)(),
        vB = (0, ZB.useMemo)((() => LB ? {
          gameNameWithVariation: LB
        } : HB), [LB, HB]),
        BO = (0, yO.b)(vB),
        YO = (0, ZB.useMemo)((() => {
          const BB = function(BB) {
            var OB, GB;
            const YB = LO(BB);
            if (!YB || 0 === YB.length || YB.includes(BB)) return BB;
            const DB = JB.g.getItem((0, RB.g)(BB));
            if (DB && YB.includes(DB)) return DB;
            return null !== (OB = null === (GB = PO.b[BB]) || void 0 === GB ? void 0 : GB.defaultListedVariation) && void 0 !== OB ? OB : YB[0]
          }(BO.gameNameWithVariation);
          return BB === BO.gameNameWithVariation ? BO : {
            ...BO,
            gameNameWithVariation: BB
          }
        }), [BO]);
      (0, ZB.useEffect)((() => {
        const BB = BO.gameNameWithVariation;
        YO.gameNameWithVariation !== BB && BB !== (0, QO.ac)(BB) && CB((0, wB.p)(YO.gameNameWithVariation), {
          replace: !0
        })
      }), [YO.gameNameWithVariation, BO.gameNameWithVariation, CB]);
      const [pO, qO] = (0, ZB.useState)(""), WO = ZB.useRef(null), [AO, VO] = (0, ZB.useState)(), kO = (0, DO.l)(YO.gameNameWithVariation), KO = (0, ZB.useMemo)((() => kO ? null : function(BB, OB, GB) {
        var YB, DB;
        const oB = PO.b[BB];
        return (0, IO.Q)(oB) ? null : {
          listedVariations: LO(BB),
          backgroundImage: (0, QB.l)(BB, (0, QB.c)(oB)),
          badges: (0, MB.filterBadges)(oB.badges),
          category: oB.type,
          title: GB(oB.title),
          variationTitle: oB.variationTitle ? GB(oB.variationTitle) : null,
          description: GB(oB.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== OB ? null !== (YB = OB[BB]) && void 0 !== YB ? YB : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: oB.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: oB.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (DB = oB.canCreateCustomLobbies) || void 0 === DB || DB,
          countdownInformation: (0, RB.d)(BB)
        }
      }(YO.gameNameWithVariation, EB, XB)), [kO, YO.gameNameWithVariation, EB, XB]), [uO, mO] = (0, ZB.useState)(!1), [gO, rO] = (0, ZB.useState)(null), [wO, cO] = (0, ZB.useState)((() => gB ? iO(gB, XB) : FO)), hO = null !== KO && void 0 !== KO ? KO : wO, [aO] = (0, ZB.useState)(hO === FO), eO = (0, DB.e)(hO.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: TO,
        recentlyPlayedCustomLobbies: bO
      } = (0, ZB.useMemo)((() => function(BB, OB, GB, YB) {
        var DB;
        const QB = BB => {
            const GB = (0, DO.r)(BB),
              YB = OB.find((OB => "custom" === OB.type ? OB.schematicId === GB : OB.gameNameWithVariation === BB));
            return YB ? [...YB.recentLobbies] : []
          },
          oB = (0, MB.getRecentGameNameWithVariationLobbiesKey)(BB),
          jB = null !== (DB = JB.g.getItem(oB)) && void 0 !== DB ? DB : [],
          yB = [...QB(BB), ...jB],
          PB = [];
        for (const JB of yB)(0, zO.Q)(JB) && !PB.includes(JB) && PB.push(JB);
        let zB = yB;
        if (GB) {
          const BB = QB("classic_worlds"),
            OB = yB.filter((OB => !BB.includes(OB)));
          zB = [...BB, ...OB]
        }
        const lB = [],
          pB = !1 === YB ? [] : zB;
        for (const JB of pB)(0, zO.Q)(JB) || lB.includes(JB) || lB.push(JB);
        return {
          recentlyPlayedPublicLobbies: PB,
          recentlyPlayedCustomLobbies: lB
        }
      }(YO.gameNameWithVariation, aB, hO.showWorldsInsteadOfCustomLobbies, hO.canCreateCustomLobbies)), [YO.gameNameWithVariation, aB, hO.showWorldsInsteadOfCustomLobbies, hO.canCreateCustomLobbies]), [CO, HO] = (0, ZB.useState)(!0), [vO, sO] = (0, ZB.useState)([]), [xO, tO] = (0, ZB.useState)(null), [BG, OG] = (0, ZB.useState)("explore"), GG = (0, ZB.useRef)(!1), YG = (0, ZB.useCallback)((BB => {
        (0, NB.unstable_batchedUpdates)((() => {
          VO(BB), cO((OB => ({
            ...iO(BB, XB),
            isFavourite: OB.isFavourite
          })))
        }))
      }), [XB]);
      (0, ZB.useEffect)((() => {
        null === JO.c.get("gameEntrySource") && (0, JO.m)("gameInformationPageDirect")
      }), []);
      const DG = (0, ZB.useRef)(null);
      (0, ZB.useEffect)((() => {
        const BB = BB => {
            DG.current = BB.target instanceof Element ? BB.target.closest("a, button") : null
          },
          OB = BB => {
            "Tab" === BB.key && (DG.current = null)
          };
        return document.addEventListener("pointerdown", BB, !0), document.addEventListener("keydown", OB, !0), () => {
          document.removeEventListener("pointerdown", BB, !0), document.removeEventListener("keydown", OB, !0)
        }
      }), []), (0, SB.b)("Enter", (BB => {
        const OB = BB.target instanceof Element ? BB.target : null;
        if (BB.defaultPrevented || null !== OB && void 0 !== OB && OB.closest("input, textarea, select")) return;
        const GB = null === OB || void 0 === OB ? void 0 : OB.closest("a, button");
        GB && GB !== DG.current || (BB.preventDefault(), lG())
      })), (0, nB.e)(xB.navigateToHomePage);
      const QG = TO.length > 0 || bO.length > 0,
        oG = !hO.useRejoinLastLobbyButton || 0 === TO.length,
        jG = kO && null === hO.ownerSocialPreviewWithoutLocation,
        yG = cB.getPlayerName() === (null === AO || void 0 === AO || null === (OB = AO.owner) || void 0 === OB ? void 0 : OB.name),
        JG = null !== (GB = null === (oB = hO.badges.find((BB => "event" === BB.type))) || void 0 === oB ? void 0 : oB.event) && void 0 !== GB ? GB : null,
        MG = oG ? zB.q : zB.f,
        PG = (0, iB.jsx)(PB.g, {
          tooltipInner: (0, iB.jsx)("div", {
            children: XB("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, iB.jsx)(MG, {
            className: "GameInformationButton",
            padDefaultFocus: oG,
            showPress: !0,
            onClick: () => {
              lG()
            },
            children: (0, iB.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [oG && (0, iB.jsxs)(iB.Fragment, {
                children: [(0, iB.jsx)(TB.b, {
                  name: "play"
                }), " "]
              }), XB("homePage:quickPlay")]
            })
          })
        });
      (0, ZB.useEffect)((() => {
        if (!kO || hB) return;
        let BB = !0;
        const OB = (0, DO.r)(YO.gameNameWithVariation);
        return KB.b.getGame(cB, OB).then((OB => {
          BB && (OB.takenDown ? rO({
            ownGame: OB
          }) : YG(OB))
        })).catch((OB => {
          const GB = null !== (0, KB.j)(OB);
          GB || console.error("Failed to get Custom Game information", OB), BB && (GB ? rO({
            ownGame: null
          }) : (0, xB.navigateToHomePage)())
        })), KB.b.getFavouriteGames(cB).then((GB => {
          BB && cO((BB => ({
            ...BB,
            isFavourite: GB.includes(OB)
          })))
        })).catch((OB => {
          console.error("Failed to get favourite games", OB), BB && mO(!0)
        })), () => {
          BB = !1
        }
      }), [kO, hB, YO.gameNameWithVariation, YG, cB]), (0, ZB.useEffect)((() => {
        null !== gO && XO(XB, gO.ownGame)
      }), [gO, XB]);
      const zG = !kO && null === KO;

      function lG(BB) {
        (0, dO.d)(), CB((0, WB.c)(YO.gameNameWithVariation, BB))
      }(0, ZB.useEffect)((() => {
        zG && (0, xB.navigateToHomePage)()
      }), [zG]), (0, ZB.useEffect)((() => {
        if (!1 === hO.canCreateCustomLobbies) return;
        let BB = !0;
        return null !== hO.showWorldsInsteadOfCustomLobbies && !1 === hB && (HO(!0), KB.b.getFavouriteLobbies(cB).then((BB => {
          tO(BB)
        })), KB.b.getOpenCustomLobbies(cB, {
          gameNameWithVariation: hO.showWorldsInsteadOfCustomLobbies ? "classic" : YO.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === BG,
          onlyFavouriteLobbies: "favourite" === BG
        }).then((OB => {
          BB && (0, NB.unstable_batchedUpdates)((() => {
            sO(OB), HO(!1)
          }))
        })).catch((OB => {
          console.error("Failed to get open custom lobbies", OB), BB && HO(!1)
        }))), () => {
          BB = !1
        }
      }), [hB, YO, BG, hO.showWorldsInsteadOfCustomLobbies, hO.canCreateCustomLobbies, cB]);
      const pG = (0, ZB.useCallback)((async BB => {
          try {
            if (!xO) return;
            xO.includes(BB) ? (KB.b.unfavouriteLobby(cB, BB), tO(xO.filter((OB => OB !== BB)))) : (KB.b.favouriteLobby(cB, BB).catch((BB => {
              console.error("Failed to favourite lobby", BB)
            })), tO([...xO, BB]))
          } catch (OB) {
            console.error("Failed to like lobby", OB)
          }
        }), [cB, xO]),
        qG = (null === AO || void 0 === AO ? void 0 : AO.schematicId) === (0, DO.r)(BO.gameNameWithVariation) ? AO : null,
        ZG = qG && (0, wB.A)(BO.gameNameWithVariation, (BB => XB(BB)), qG);
      (0, tB.h)(qG && (0, wB.p)(BO.gameNameWithVariation, qG));
      const NG = bB.featureFlags.canUseCustomLobbies && !0 === hO.canCreateCustomLobbies,
        RG = (0, iB.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, iB.jsx)(eB, {
            gameNameWithVariation: YO.gameNameWithVariation
          })
        });
      return (0, iB.jsx)(iB.Fragment, {
        children: (0, iB.jsxs)("article", {
          className: pB()("GameInformation", {
            GameInformationFadeIn: aO,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (lB = hO.countdownInformation) || void 0 === lB ? void 0 : lB.type)
          }),
          children: [ZG && (0, iB.jsx)(AB.d, {
            meta: ZG
          }), (0, iB.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, iB.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, iB.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, iB.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, iB.jsx)("div", {
                  className: pB()("GameInformationTopBackgroundImage", jB.h),
                  style: (0, jB.e)(eO),
                  children: (0, iB.jsx)(jB.d, {
                    image: eO
                  })
                })]
              }), (0, iB.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, iB.jsx)(NO.e, {}), (0, iB.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, iB.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, iB.jsxs)("div", {
                      className: pB()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: jG
                      }),
                      children: [hO.badges.map((BB => (0, iB.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${BB.type}`,
                        children: (0, iB.jsx)(kB.e, {
                          badge: BB
                        })
                      }, BB.type))), kO && (0, iB.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, iB.jsx)(fB.b, {
                          text: (0, YB.fb)({
                            type: "playerCrafted"
                          })
                        })
                      }), hO.category && (0, iB.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, iB.jsx)(fB.b, {
                          text: [{
                            str: (0, YB.hb)(hO.category).toUpperCase()
                          }]
                        })
                      }), null !== hO.ccu && (0, iB.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, iB.jsx)(TB.b, {
                          name: "user"
                        }), (0, zO.U)(hO.ccu), " online"]
                      }), null !== hO.ownerSocialPreviewWithoutLocation && (0, iB.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, iB.jsx)("span", {
                          children: "Made by"
                        }), (0, iB.jsx)(IB.g, {
                          playerSocialPreview: {
                            ...hO.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), jG && (0, iB.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, iB.jsx)("span", {
                          children: "Made by"
                        }), (0, iB.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== hO.favourites && (null !== hO.isFavourite || kO && !uO) && (0, iB.jsx)(zB.z, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== GG.current && (GG.current = !0, null !== hO.isFavourite)) {
                              const BB = (0, DO.r)(YO.gameNameWithVariation);
                              let OB;
                              hO.isFavourite ? (OB = -1, KB.b.unfavouriteGame(cB, BB).catch((BB => {
                                console.error("Failed to get unfavourite game", BB)
                              })).finally((() => {
                                GG.current = !1
                              }))) : (OB = 1, KB.b.favouriteGame(cB, BB).catch((BB => {
                                console.error("Failed to get favourite game", BB)
                              })).finally((() => {
                                GG.current = !1
                              }))), cO((BB => ({
                                ...BB,
                                isFavourite: !BB.isFavourite
                              }))), cO((BB => ({
                                ...BB,
                                favourites: BB.favourites + OB
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (dB = hO.isFavourite) && void 0 !== dB && dB,
                        disabled: null === hO.isFavourite,
                        className: pB()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === hO.isFavourite
                        })
                      }, null === hO.isFavourite ? "pending" : "known"), kO && !jG && bB.featureFlags.useSocialFeatures && !yG && (0, iB.jsx)(nO.b, {
                        targetType: "customGame",
                        targetId: (0, DO.r)(YO.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (cB.playerHasRank("developer") || cB.playerHasRank("admin") && yG) && (0, iB.jsxs)(zB.q, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          CB((0, jO.w)((0, oO.g)(YO.gameNameWithVariation, !0)))
                        },
                        children: [(0, iB.jsx)(TB.b, {
                          name: "star-christmas"
                        }), " ", XB("studio:viewInStudio")]
                      }), kO && cB.playerHasRank("developer") && (0, iB.jsxs)(zB.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, lO.d)({
                            schematicId: (0, DO.r)(YO.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, iB.jsx)(TB.b, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), kO && cB.playerHasRank("developer") && (0, iB.jsxs)(zB.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          OO.NotificationProvider.showCustomPopup({
                            body: () => (0, iB.jsx)(ZO, {
                              schematicId: (0, DO.r)(YO.gameNameWithVariation),
                              gameName: hO.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, iB.jsx)(TB.b, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (uB = hO.countdownInformation) || void 0 === uB ? void 0 : uB.type) && (0, iB.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, iB.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, iB.jsx)(UB.b, {
                            toTime: hO.countdownInformation.countdownToTime
                          })]
                        }), (0, iB.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: hO.countdownInformation.previewText
                        })]
                      })]
                    }, jG ? "pending" : "shown"), (0, iB.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, iB.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, iB.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [hO.title, " ", hO.variationTitle && (null === (mB = PO.b[YO.gameNameWithVariation]) || void 0 === mB ? void 0 : mB.variationThumbnailUseBigRatio) && (0, iB.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: hO.variationTitle
                          })]
                        })
                      }), hO.listedVariations && hO.listedVariations.length > 0 && (0, iB.jsx)("div", {
                        className: pB()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (FB = PO.b[YO.gameNameWithVariation]) || void 0 === FB ? void 0 : FB.variationThumbnailUseBigRatio
                        }),
                        children: hO.listedVariations.map((BB => {
                          var OB, GB;
                          return (0, iB.jsxs)(EO, {
                            variation: BB,
                            isSelected: YO.gameNameWithVariation === BB,
                            children: [null !== EB && (0, iB.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, iB.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, iB.jsx)(TB.b, {
                                  name: "user"
                                }), " ", (0, zO.U)(null !== (OB = EB[BB]) && void 0 !== OB ? OB : 0)]
                              })
                            }), (0, iB.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: XB(null !== (GB = PO.b[BB].variationTitle) && void 0 !== GB ? GB : PO.b[BB].title)
                            }), (0, iB.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, MB.filterBadges)(PO.b[BB].badges).map((BB => (0, iB.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + BB.type,
                                children: (0, iB.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, iB.jsx)(kB.e, {
                                    badge: BB
                                  })
                                })
                              }, BB.type)))
                            })]
                          }, BB)
                        }))
                      })]
                    }), hO.description && (0, iB.jsx)("p", {
                      className: "GameInformationDescription",
                      children: hO.description
                    })]
                  }), (0, iB.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, iB.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!oG && (0, iB.jsx)(PB.g, {
                        tooltipInner: (0, iB.jsx)("div", {
                          children: XB("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, iB.jsx)(zB.q, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            lG(TO[0])
                          },
                          children: (0, iB.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, iB.jsx)(TB.b, {
                              name: "play"
                            }), " ", XB("homePage:rejoinLobbyNumber", {
                              number: TO[0]
                            })]
                          })
                        })
                      }), oG && PG]
                    }), (0, iB.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!oG && PG, (0, iB.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, iB.jsx)(TB.b, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, iB.jsx)(qB.b, {
                          className: "JoinLobbyInput",
                          placeholderText: XB("homePage:lobbyName"),
                          maxLength: zO.T,
                          domRef: WO,
                          onValueChange: BB => {
                            BB = (0, zO.vb)(BB), qO(BB)
                          },
                          onEnter: () => {
                            0 === pO.length ? lG(TO[0]) : lG(pO)
                          }
                        }), (0, iB.jsx)(zB.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === pO.length ? lG(TO[0]) : lG(pO)
                          },
                          children: XB("general:join")
                        })]
                      })]
                    }), (0, iB.jsxs)("section", {
                      className: pB()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !QG
                      }),
                      children: [(0, iB.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, iB.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, iB.jsx)(TB.b, {
                            name: "clock-rotate-left"
                          }), QG && (0, iB.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: XB("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, iB.jsx)(UO.d, {
                        lobbyGroups: [TO, bO],
                        onLobbyClick: BB => {
                          lG(BB)
                        },
                        keyPrefix: YO.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== JG && (0, iB.jsx)(rB, {
                eventName: JG
              })]
            }), NG && (0, iB.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, iB.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, iB.jsxs)("div", {
                  className: pB()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === hO.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === hO.showWorldsInsteadOfCustomLobbies && (0, iB.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, iB.jsx)(TB.b, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, iB.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, iB.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), XB("game:worlds")]
                    })]
                  }), !1 === hO.showWorldsInsteadOfCustomLobbies && (0, iB.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, iB.jsx)(TB.b, {
                      name: "joystick"
                    }), (0, iB.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, iB.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), XB("homePage:customLobbies")]
                    })]
                  }), (0, iB.jsx)(zB.Z, {
                    onClick: () => {
                      OG("explore")
                    },
                    active: "explore" === BG,
                    children: XB("general:explore")
                  }), (0, iB.jsx)(zB.Z, {
                    onClick: () => {
                      OG("favourite")
                    },
                    active: "favourite" === BG,
                    children: XB("homePage:favouriteLobbies")
                  }), (0, iB.jsx)(zB.Z, {
                    onClick: () => {
                      OG("owned")
                    },
                    active: "owned" === BG,
                    children: XB("homePage:ownedLobbies")
                  })]
                }), (0, iB.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, iB.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, iB.jsx)(RO.b, {
                      label: "Create",
                      onClick: () => {
                        OO.NotificationProvider.showCustomPopup({
                          body: BB => (0, iB.jsx)(GO.CreateCustomLobby, {
                            gameNameWithVariation: YO.gameNameWithVariation,
                            close: BB
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === CO && (0, iB.jsx)(RO.g, {}), !1 === CO && (0, iB.jsx)(SO, {
                      customLobbies: vO,
                      favouriteLobbies: xO,
                      toggleLikeLobby: pG,
                      showReport: bB.featureFlags.useSocialFeatures && "owned" !== BG
                    })]
                  }), RG]
                })]
              })
            })]
          }), !NG && RG]
        })
      })
    }

    function EO(BB) {
      let {
        variation: OB,
        isSelected: GB,
        children: YB
      } = BB;
      const yB = PO.b[OB],
        MB = (0, QB.l)(OB, (0, QB.m)(yB)),
        PB = (0, DB.e)(MB),
        zB = (0, oB.i)([(0, QB.j)(OB, (0, QB.c)(yB))]);
      return (0, iB.jsxs)(xB.LinkPreserveSearch, {
        to: (0, wB.p)(OB),
        replace: !0,
        className: pB()("GameInformationVariation", jB.h, {
          SelectedGameInformationVariation: GB
        }),
        onClick: BB => {
          if (!(0, BO.d)(BB)) return;
          const GB = (0, RB.g)(OB);
          JB.g.setItem(GB, OB)
        },
        onMouseEnter: zB.start,
        onMouseLeave: zB.cancel,
        onFocus: zB.start,
        onBlur: zB.cancel,
        style: (0, jB.e)(PB),
        children: [(0, iB.jsx)(jB.d, {
          image: PB
        }), YB]
      })
    }
  },
  7015: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => RB
    });
    var YB = GB(56),
      DB = GB(1485),
      QB = GB(1540),
      oB = GB(3928),
      jB = GB(1112),
      yB = GB(1375),
      JB = GB(1405),
      MB = GB(1383),
      PB = GB(1090),
      zB = GB.n(PB),
      lB = GB(7011),
      pB = GB(1282);

    function qB(BB) {
      let {
        info: OB,
        className: GB
      } = BB;
      const {
        statusText: YB,
        rowText: DB
      } = (0, lB.d)();
      return (0, pB.jsxs)("div", {
        className: zB()("GameApprovalInfoDetails", GB),
        children: [(0, pB.jsxs)("div", {
          className: zB()("GameApprovalInfoSummary", OB.overallPassed ? "Passed" : "Failed"),
          children: [(0, pB.jsx)(MB.b, {
            name: OB.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, pB.jsx)("span", {
            children: YB(OB.status)
          })]
        }), OB.rows.length > 0 && (0, pB.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: OB.rows.map((BB => {
            const {
              label: OB,
              value: GB
            } = DB(BB);
            return (0, pB.jsxs)("div", {
              className: zB()("GameApprovalInfoRow", BB.passed ? "Passed" : "Failed"),
              children: [(0, pB.jsx)(MB.b, {
                name: BB.passed ? "check" : "xmark"
              }), (0, pB.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, pB.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: OB
                }), null !== GB && (0, pB.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: GB
                })]
              })]
            }, BB.kind)
          }))
        })]
      })
    }
    var ZB = GB(1175),
      NB = GB(1400);

    function RB(BB) {
      NB.NotificationProvider.showCustomPopup({
        body: () => (0, pB.jsx)(WB, {
          ...BB
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function WB(BB) {
      let {
        schematicId: OB,
        canOverride: GB,
        onApprovalChanged: PB
      } = BB;
      const {
        t: zB
      } = (0, ZB.H)(), {
        userContext: lB
      } = (0, jB.d)(), NB = (0, oB.c)(), [RB, WB] = (0, YB.useState)(null), [AB, VB] = (0, YB.useState)(null), [SB, nB] = (0, YB.useState)(!1), UB = (0, YB.useCallback)((() => {
        VB(null), QB.b.getGameApprovalInfo(lB, OB).then((BB => {
          NB.current && WB(BB)
        })).catch((BB => {
          console.error("Failed to get game approval info", BB), NB.current && VB(zB("studio:approvalLoadFailed"))
        }))
      }), [lB, OB, NB, zB]);
      (0, YB.useEffect)((() => {
        UB()
      }), [UB]);
      const fB = BB => {
        SB || (nB(!0), QB.b.setGameApproval(lB, OB, BB).then((() => {
          null === PB || void 0 === PB || PB(), NB.current && UB()
        })).catch((BB => {
          console.error("Failed to set game approval", BB)
        })).finally((() => {
          NB.current && nB(!1)
        })))
      };
      return (0, pB.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, pB.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: zB("studio:approvalTitle")
        }), !RB && !AB && (0, pB.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, pB.jsx)(yB.b, {})
        }), AB && (0, pB.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: AB
        }), RB && (0, pB.jsxs)(pB.Fragment, {
          children: [(0, pB.jsx)(qB, {
            info: RB
          }), GB && (0, pB.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== RB.manualOverride && (0, pB.jsx)(JB.g, {
              tooltipInner: (0, pB.jsx)("div", {
                children: zB("studio:approvalApproveTooltip")
              }),
              children: (0, pB.jsxs)(DB.q, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  fB(!0)
                },
                disabled: SB,
                children: [(0, pB.jsx)(MB.b, {
                  name: "check"
                }), " ", zB("studio:approvalApprove")]
              })
            }), !1 !== RB.manualOverride && (0, pB.jsx)(JB.g, {
              tooltipInner: (0, pB.jsx)("div", {
                children: zB("studio:approvalDenyTooltip")
              }),
              children: (0, pB.jsxs)(DB.Q, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  fB(!1)
                },
                disabled: SB,
                children: [(0, pB.jsx)(MB.b, {
                  name: "xmark"
                }), " ", zB("studio:approvalDeny")]
              })
            }), null !== RB.manualOverride && (0, pB.jsx)(JB.g, {
              tooltipInner: (0, pB.jsx)("div", {
                children: zB("studio:approvalClearOverrideTooltip")
              }),
              children: (0, pB.jsxs)(DB.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  fB(null)
                },
                disabled: SB,
                children: [(0, pB.jsx)(MB.b, {
                  name: "arrows-rotate"
                }), " ", zB("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  7011: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      d: () => oB
    });
    var YB = GB(353),
      DB = GB(1175);
    const QB = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function oB() {
      const {
        t: BB,
        selectedLanguage: OB
      } = (0, DB.H)();
      return {
        statusText: OB => BB(QB[OB]),
        rowText: GB => {
          const QB = (BB, GB) => (0, YB.eb)((0, DB.s)(OB.code, BB), 0, GB),
            oB = (OB, GB) => null === GB ? OB : BB("studio:approvalWithMinDays", {
              value: OB,
              days: GB
            });
          switch (GB.kind) {
            case "ownerAccountAge": {
              const OB = GB.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: BB("studio:approvalAccountAgeLabel"),
                value: oB(BB(OB, {
                  age: QB(OB, GB.accountAgeMs)
                }), GB.minAccountAgeDays)
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: BB("studio:approvalSinceUnbannedLabel"), value: oB(QB("studio:approvalSinceUnbannedLabel", GB.sinceMs), GB.minDays)
              };
            case "reportHold": {
              const {
                detail: OB
              } = GB;
              if (null === OB) return {
                label: BB("studio:approvalUnderInvestigation"),
                value: null
              };
              const YB = OB.weightedReporters.toFixed(1),
                DB = OB.threshold.toFixed(1),
                oB = BB("studio:approvalReportHoldLabel", {
                  hours: OB.windowHours
                });
              if (null === OB.heldUntil) return {
                label: oB,
                value: BB("studio:approvalReportHoldValue", {
                  weightedReporters: YB,
                  threshold: DB
                })
              };
              const jB = "studio:approvalReportHoldValueHeld";
              return {
                label: oB,
                value: BB(jB, {
                  weightedReporters: YB,
                  threshold: DB,
                  time: QB(jB, OB.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function jB(BB) {
      return null === BB.manualOverride && BB.rows.some((BB => "reportHold" === BB.kind && !BB.passed))
    }
  },
  34834: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(56),
      DB = GB(3873);

    function QB() {
      const [BB, OB] = (0, YB.useState)(!1);
      return (0, YB.useLayoutEffect)((() => {
        let BB = !0;
        return (0, DB.e)().then((() => {
          BB && OB(!0)
        })), () => {
          BB = !1
        }
      }), []), BB
    }
  },
  9592: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => ZB,
      g: () => NB
    });
    var YB = GB(162),
      DB = GB(192),
      QB = GB(1049),
      oB = GB(1061),
      jB = GB(1217),
      yB = GB(2023),
      JB = GB(2549),
      MB = GB(1540),
      PB = GB(1400),
      zB = GB(1121),
      lB = GB(9599),
      pB = GB(1560),
      qB = GB(1586);

    function ZB(BB, OB) {
      const GB = !0 === OB.debugResult.gameRefused,
        QB = GB || OB.code === YB.l.REQUEST_TO_MATCHMAKING ? (0, lB.h)(OB.message) : null;
      if (null !== QB) return VB(BB, BB((0, lB.m)(QB)), BB(lB.k[QB])), !0;
      if (GB) return async function(BB) {
        const {
          gameNameWithVariation: OB,
          lobbyName: GB,
          shownLobbyName: YB
        } = yB.gameBridge.latest("connectedGame"), DB = "classic" === OB && (0, jB.L)(GB) ? YB : await (0, JB.c)(BB, OB, GB);
        return "" !== DB ? BB("general:cantJoinGame", {
          game: DB
        }) : BB("general:cantJoinThisGame")
      }(BB).then((GB => {
        VB(BB, GB, OB.message)
      })), !0;
      const {
        joinFailure: oB
      } = OB.debugResult, MB = "refused" === (null === oB || void 0 === oB ? void 0 : oB.at) ? oB.code : null;
      return MB === DB.c.schematicNotPublished.code ? (async function(BB, OB) {
        const GB = RB(),
          YB = await AB(GB);
        if (null === YB || YB.gamePublished) return void VB(BB, BB("general:cantJoinThisGame"), OB);
        await WB(BB, "rocket-launch", BB("studio:gameNotPublishedTitle", {
          game: YB.name
        }), BB("studio:publishInStudio"), GB)
      }(BB, OB.message), !0) : (MB === DB.c.schematicBanned.code || MB === DB.c.customGameTakenDown.code) && (AB(RB()).then((OB => {
        NB(BB, OB)
      })), !0)
    }

    function NB(BB, OB) {
      !0 !== (null === OB || void 0 === OB ? void 0 : OB.takenDown) ? VB(BB, BB("general:cantJoinThisGame"), DB.c.customGameTakenDown.text) : WB(BB, "lock", BB("studio:gameTakenDownTitle", {
        game: OB.name
      }), BB("studio:viewInStudio"), OB.schematicId)
    }

    function RB() {
      return (0, QB.r)(yB.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function WB(BB, OB, GB, YB, DB) {
      !0 === await PB.NotificationProvider.showPromptPopup({
        icon: OB,
        title: GB,
        confirmText: YB,
        cancelText: BB("general:cancel")
      }).getResult() && (0, pB.navigatePreserveSearch)((0, qB.w)((0, oB.e)(DB), "manage"))
    }
    async function AB(BB) {
      try {
        return await MB.b.getGame(await zB.userContextManager.getCurrentUserContext(), BB, !0)
      } catch (OB) {
        return (0, MB.f)(OB) || console.error(`Failed to get game ${BB}`, OB), null
      }
    }

    function VB(BB, OB, GB) {
      PB.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: OB,
        subtitle: GB,
        confirmText: BB("general:ok"),
        cancelText: ""
      })
    }
  },
  9622: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB
    });
    var YB = GB(1360),
      DB = GB(1217),
      QB = GB(641);

    function oB(BB) {
      return BB = function(BB, OB) {
        var GB;
        const YB = new URLSearchParams(OB),
          DB = YB.get("lobby"),
          QB = YB.get("vm"),
          oB = null !== (GB = DB) && void 0 !== GB ? GB : BB.lobbyName,
          jB = null !== QB && void 0 !== QB ? QB : BB.directJoinVmUrl;
        if (oB === BB.lobbyName && jB === BB.directJoinVmUrl) return BB;
        return {
          ...BB,
          lobbyName: oB,
          directJoinVmUrl: jB
        }
      }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), BB = function(BB) {
        if ((0, QB.Q)(BB.directJoinVmUrl)) return BB;
        const OB = (0, DB.fb)(BB.directJoinVmUrl);
        null === OB && (BB.directJoinVmUrl = void 0);
        return BB
      }(BB = function(BB) {
        if ((0, QB.Q)(BB.gameNameWithVariation)) return BB;
        return BB.gameNameWithVariation = (0, YB.m)(BB.gameNameWithVariation), BB
      }(BB))
    }
  },
  9614: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => DB
    });
    let YB = !1;

    function DB() {
      YB = !0
    }

    function QB() {
      return YB
    }
  },
  9599: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => oB,
      h: () => jB,
      k: () => JB,
      m: () => yB
    });
    var YB = GB(192),
      DB = GB(5047);

    function QB(BB) {
      return oB(BB) === YB.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function oB(BB) {
      return "object" === typeof BB && null !== BB ? BB.code : void 0
    }

    function jB(BB) {
      var OB;
      return null !== (OB = Object.keys(DB.b).find((OB => DB.b[OB] === BB))) && void 0 !== OB ? OB : null
    }

    function yB(BB) {
      return "notWhitelisted" === BB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const JB = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37048: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB,
      g: () => YB
    });
    const YB = "skyblockSkills",
      DB = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);