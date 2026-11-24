export const id = 123;
export const ids = [123, 401];
export const modules = {
  36349: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => RI
    });
    var TB = ZB(342),
      JB = ZB(3676),
      oB = ZB(3706),
      GB = ZB(3704),
      vB = ZB(3698),
      kB = ZB(1248),
      cB = ZB(36),
      nB = ZB(1805),
      hB = ZB(1421),
      zB = ZB(1516),
      FB = ZB(1091),
      NB = ZB.n(FB),
      gB = ZB(1746),
      qB = ZB(63),
      yB = ZB(82),
      UB = ZB(2458),
      WB = ZB(1385),
      dB = ZB(1687),
      CB = ZB(1179),
      QB = ZB(3595),
      sB = ZB(4741),
      wB = ZB(3666),
      OB = ZB(1960),
      YB = ZB(3673),
      iB = ZB(1816),
      pB = ZB(1561),
      aB = ZB(2259),
      HB = ZB(1397),
      MB = ZB(2739),
      jB = ZB(5177),
      PB = ZB(1153);
    const RB = 15e3,
      rB = 2500;

    function mB(BB) {
      var IB;
      let {
        eventName: ZB
      } = BB;
      const {
        t: TB
      } = (0, kB.G)(), JB = iB.i[ZB], [oB, GB] = (0, qB.useState)((() => Date.now() >= JB.endsAt.getTime())), [vB, cB] = (0, qB.useState)("overall"), nB = function(BB, IB) {
        const {
          userContext: ZB,
          isUserContextUpdating: TB
        } = (0, CB.d)(), JB = `${BB}:${IB}`, [oB, GB] = (0, qB.useState)({
          requestKey: JB,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, qB.useEffect)((() => {
          if (TB) return;
          let oB, vB = !1;
          const kB = async () => {
            if ("visible" === document.visibilityState) try {
              const TB = await pB.c.getGameEventLeaderboard(ZB, {
                event: BB,
                scope: IB
              });
              vB || GB({
                requestKey: JB,
                leaderboard: {
                  status: "loaded",
                  leaderboard: TB
                }
              })
            } catch {
              vB || GB((BB => BB.requestKey === JB && "loaded" === BB.leaderboard.status ? BB : {
                requestKey: JB,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            vB || (oB = setTimeout(kB, RB))
          };
          return kB(), () => {
            vB = !0, clearTimeout(oB)
          }
        }), [BB, IB, JB, ZB, TB]), oB.requestKey === JB ? oB.leaderboard : {
          status: "loading"
        }
      }(ZB, vB), hB = function(BB) {
        const IB = (0, qB.useRef)(null),
          ZB = (0, qB.useRef)(0),
          TB = (0, qB.useRef)(),
          [JB, oB] = (0, qB.useState)({});
        return (0, qB.useEffect)((() => {
          const JB = null === BB || void 0 === BB ? void 0 : BB.entries;
          if (!JB) return;
          const GB = new Map(JB.map((BB => [BB.player.name, BB.value]))),
            vB = IB.current;
          if (IB.current = GB, null === vB) return;
          const kB = {};
          for (const [BB, IB] of GB) {
            const TB = vB.get(BB);
            void 0 !== TB && IB > TB && (kB[BB] = {
              amount: IB - TB,
              key: ZB.current++
            })
          }
          0 !== Object.keys(kB).length && (oB(kB), clearTimeout(TB.current), TB.current = setTimeout((() => {
            oB({})
          }), rB))
        }), [BB]), (0, qB.useEffect)((() => () => {
          clearTimeout(TB.current)
        }), []), JB
      }("loaded" === nB.status ? nB.leaderboard : null), zB = function(BB) {
        const [IB, ZB] = (0, qB.useState)(null), TB = "loaded" === BB.status ? BB.leaderboard.goalProgress : void 0;
        return (0, qB.useEffect)((() => {
          TB && ZB(TB)
        }), [TB]), IB
      }(nB), FB = aB.e[`profileEffect_${JB.prizePack}`];
      if (oB) return null;
      const gB = "loaded" === nB.status ? nB.leaderboard : null,
        yB = null !== (IB = null === gB || void 0 === gB ? void 0 : gB.entries) && void 0 !== IB ? IB : null,
        UB = null !== gB && void 0 !== gB && gB.own && null !== yB && !yB.some((BB => BB.isOwn)) ? gB.own : null;
      return (0, PB.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, PB.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, PB.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, PB.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, PB.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, PB.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), TB("gameEvents:live")]
              }), (0, PB.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [TB("gameEvents:endsIn"), (0, PB.jsx)(wB.d, {
                  toTime: JB.endsAt,
                  onReachEndOfCountdown: () => {
                    GB(!0)
                  }
                })]
              })]
            }), (0, PB.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: TB(JB.titleKey)
            }), (0, PB.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, PB.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [FB && (0, PB.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, PB.jsx)(FB, {})
                }), (0, PB.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, PB.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: TB("gameEvents:prize")
                  }), (0, PB.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: TB(JB.prizeNameKey)
                  })]
                })]
              }), (0, PB.jsx)(XB, {
                event: JB,
                progress: zB
              })]
            })]
          }), (0, PB.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, PB.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, PB.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: TB(JB.leaderboard.titleKey)
              }), (0, PB.jsx)(jB.d, {
                ariaLabel: TB("gameEvents:leaderboardScope"),
                options: iB.e.map((BB => ({
                  value: BB,
                  label: TB(`gameEvents:${BB}Scope`)
                }))),
                value: vB,
                onChange: cB
              })]
            }), "loading" === nB.status && (0, PB.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, PB.jsx)(HB.d, {})
            }), ("unavailable" === nB.status || "loaded" === nB.status && null === yB) && (0, PB.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: TB("gameEvents:leaderboardUnavailable")
            }), null !== yB && 0 === yB.length && (0, PB.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: TB("friends" === vB ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== yB && yB.length > 0 && (0, PB.jsx)("ol", {
              className: "GameEventPanelRows",
              children: yB.map((BB => {
                const IB = hB[BB.player.name];
                return (0, PB.jsxs)("li", {
                  className: NB()("GameEventPanelRow", {
                    GameEventPanelRowOwn: BB.isOwn,
                    GameEventPanelRowTop: BB.rank <= 3
                  }),
                  children: [(0, PB.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", BB.rank]
                  }), (0, PB.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, PB.jsx)(MB.f, {
                      playerSocialPreview: {
                        ...BB.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== IB && (0, PB.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", IB.amount.toLocaleString()]
                  }, IB.key), (0, PB.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: BB.value.toLocaleString()
                  })]
                }, BB.player.name)
              }))
            }), UB && (0, PB.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, PB.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", UB.rank.toLocaleString()]
              }), (0, PB.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: TB("gameEvents:yourPlace")
              }), (0, PB.jsx)("span", {
                className: "GameEventPanelScore",
                children: UB.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function XB(BB) {
      let {
        event: IB,
        progress: ZB
      } = BB;
      const {
        t: TB
      } = (0, kB.G)(), JB = null !== ZB && IB.prizeGoals.some(((BB, IB) => ZB[IB] >= BB.target));
      return (0, PB.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, PB.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: TB(JB ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, PB.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: IB.prizeGoals.map(((BB, IB) => {
            const JB = null === ZB ? null : Math.min(ZB[IB], BB.target);
            return (0, PB.jsxs)(qB.Fragment, {
              children: [IB > 0 && (0, PB.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: TB("gameEvents:goalsOr")
              }), (0, PB.jsxs)("div", {
                className: NB()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: JB === BB.target
                }),
                children: [(0, PB.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: TB(BB.labelKey)
                }), (0, PB.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, PB.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== JB && void 0 !== JB ? JB : 0) / BB.target * 100 + "%"
                    }
                  }), null !== JB && (0, PB.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [JB.toLocaleString(), " / ", BB.target.toLocaleString()]
                  })]
                })]
              })]
            }, BB.board)
          }))
        })]
      })
    }
    var LB = ZB(1614),
      eB = ZB(1663),
      uB = ZB(1075),
      fB = ZB(768),
      lB = ZB(3663);

    function AB(BB) {
      let {
        gameNameWithVariation: IB
      } = BB;
      const ZB = (0, LB.G)(IB),
        [TB, JB] = (0, qB.useState)(null);
      if ((0, qB.useEffect)((() => {
          if (!ZB) return;
          let BB = !0;
          return (0, eB.j)(ZB).then((IB => {
            BB && JB(IB)
          })).catch((BB => {
            console.error(`Failed to load the page copy for ${ZB.name}`, BB)
          })), () => {
            BB = !1
          }
        }), [ZB]), !ZB || !TB || TB.name !== ZB.name) return null;
      const oB = (0, eB.f)(TB),
        GB = new Set((0, uB.d)((0, fB.i)()).map((BB => (0, LB.w)(BB)))),
        vB = TB.similarGames.filter((BB => GB.has((0, LB.w)(BB))));
      return (0, PB.jsx)("div", {
        className: "GamePageContent",
        children: (0, PB.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, PB.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, PB.jsx)("h2", {
              children: oB.whatIs
            }), TB.whatIs.map((BB => (0, PB.jsx)("p", {
              children: BB
            }, BB)))]
          }), (0, PB.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, PB.jsx)("h2", {
              children: oB.howToPlay
            }), TB.howToPlay.map((BB => (0, PB.jsx)("p", {
              children: BB
            }, BB)))]
          }), (0, PB.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, PB.jsx)("h2", {
              children: oB.features
            }), (0, PB.jsx)("ul", {
              children: TB.features.map((BB => (0, PB.jsx)("li", {
                children: BB
              }, BB)))
            })]
          }), (0, PB.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, PB.jsx)("h2", {
              children: oB.tips
            }), (0, PB.jsx)("ul", {
              children: TB.tips.map((BB => (0, PB.jsx)("li", {
                children: BB
              }, BB)))
            })]
          }), (0, PB.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, PB.jsx)("h2", {
              children: oB.faq
            }), TB.faq.map((BB => {
              let {
                question: IB,
                answer: ZB
              } = BB;
              return (0, PB.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, PB.jsx)("h3", {
                  children: IB
                }), (0, PB.jsx)("p", {
                  children: ZB
                })]
              }, IB)
            }))]
          }), vB.length > 0 && (0, PB.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, PB.jsx)("h2", {
              children: oB.similarGames
            }), (0, PB.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: vB.map((BB => (0, PB.jsx)("li", {
                children: (0, PB.jsx)(lB.f, {
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
    var tB = ZB(1102),
      bB = ZB(105),
      xB = ZB(1186),
      EB = ZB(34243),
      DB = ZB(1727),
      KB = ZB(1591),
      VB = ZB(1579),
      SB = ZB(1679),
      BI = ZB(1522),
      II = ZB(1403),
      ZI = ZB(36356),
      TI = ZB(1296),
      JI = ZB(1058),
      oI = ZB(360),
      GI = ZB(1062),
      vI = ZB(1605),
      kI = ZB(9021),
      cI = ZB(20),
      nI = ZB(2637),
      hI = ZB(810),
      zI = ZB(1281),
      FI = ZB(6666),
      NI = ZB(3668);

    function gI(BB) {
      let {
        preview: IB,
        isBroken: ZB
      } = BB;
      const TB = null === IB ? null : (0, oB.c)(IB, "small"),
        GB = (0, JB.c)(null !== TB && void 0 !== TB ? TB : oB.o);
      return null === IB ? (0, PB.jsx)("div", {
        className: NB()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: ZB
        }),
        children: (0, PB.jsx)(tB.d, {
          name: ZB ? "triangle-exclamation" : "star"
        })
      }) : (0, PB.jsx)("div", {
        className: NB()("FeaturedGamesPopupSlotThumbnail", vB.h),
        style: (0, vB.f)(GB),
        role: "img",
        "aria-label": IB.name,
        children: (0, PB.jsx)(vB.d, {
          image: GB
        })
      })
    }

    function qI(BB) {
      let {
        schematicId: IB,
        gameName: ZB
      } = BB;
      const {
        userContext: JB
      } = (0, CB.d)(), oB = (0, NI.d)(), [GB, vB] = (0, qB.useState)(null), [kB, cB] = (0, qB.useState)(null), [nB, hB] = (0, qB.useState)(!1), FB = (0, qB.useCallback)((() => {
        cB(null), pB.c.getFeaturedGames(JB).then((BB => {
          oB.current && vB(BB.slots)
        })).catch((BB => {
          console.error("Failed to get featured games", BB), oB.current && cB("Failed to load featured games")
        }))
      }), [JB, oB]);
      (0, qB.useEffect)((() => {
        FB()
      }), [FB]);
      const NB = (BB, IB) => {
        nB || (hB(!0), pB.c.setFeaturedGame(JB, BB, IB).then((() => {
          oB.current && FB()
        })).catch((BB => {
          console.error("Failed to set featured game", BB), oB.current && cB("Failed to update the featured slot")
        })).finally((() => {
          oB.current && hB(!1)
        })))
      };
      return (0, PB.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, PB.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !GB && !kB && (0, PB.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, PB.jsx)(HB.d, {})
        }), kB && (0, PB.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: kB
        }), GB && (0, PB.jsxs)(PB.Fragment, {
          children: [(0, PB.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: GB.map((BB => {
              const ZB = BB.schematicId === IB,
                JB = null === BB.schematicId,
                {
                  categoryGroup: oB
                } = TB.Q[BB.slotId];
              return (0, PB.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, PB.jsx)(gI, {
                  preview: BB.preview,
                  isBroken: !JB
                }), (0, PB.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, PB.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, TB.ub)(oB), " \xb7 position", " ", (0, TB.U)(BB.slotId, TB.Vb) + 1, " of", " ", (0, TB.Ub)(oB, TB.Vb)]
                  }), JB && (0, PB.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !JB && null !== BB.preview && (0, PB.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: BB.preview.name
                  }), !JB && null === BB.preview && (0, PB.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, PB.jsx)(tB.d, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, PB.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [JB && (0, PB.jsxs)(zB.s, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      NB(BB.slotId, IB)
                    },
                    disabled: nB,
                    children: [(0, PB.jsx)(tB.d, {
                      name: "star"
                    }), " Feature here"]
                  }), !JB && !ZB && (0, PB.jsxs)(zB.V, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      NB(BB.slotId, IB)
                    },
                    disabled: nB,
                    children: [(0, PB.jsx)(tB.d, {
                      name: "star"
                    }), " Replace"]
                  }), !JB && (0, PB.jsxs)(zB.M, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      NB(BB.slotId, null)
                    },
                    disabled: nB,
                    children: [(0, PB.jsx)(tB.d, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, BB.slotId)
            }))
          }), (0, PB.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var yI = ZB(4850),
      UI = ZB(4772),
      WI = ZB(3625);
    const dI = 8,
      CI = 12;

    function QI(BB) {
      let {
        customLobbies: IB,
        favouriteLobbies: ZB,
        toggleLikeLobby: TB,
        showReport: JB
      } = BB;
      const [oB, GB] = (0, qB.useState)(dI);
      return (0, qB.useEffect)((() => {
        if (oB >= IB.length) return;
        let BB = !0;
        return (0, WI.h)().then((() => {
          BB && GB(oB + CI)
        })), () => {
          BB = !1
        }
      }), [oB, IB.length]), (0, PB.jsx)(PB.Fragment, {
        children: IB.slice(0, oB).map((BB => (0, PB.jsx)(UI.f, {
          customLobby: BB,
          favouriteLobbies: ZB,
          toggleLikeLobby: TB,
          showReport: JB
        }, BB.name)))
      })
    }
    var sI = ZB(4774),
      wI = ZB(4792),
      OI = ZB(4756),
      YI = ZB(3731),
      iI = ZB(9019),
      pI = ZB(220);
    const aI = {
      skyblock: [ZB(36387).e]
    };
    var HI = ZB(665);
    const MI = {
      listedVariations: null,
      backgroundImage: oB.o,
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

    function jI(BB, IB) {
      const ZB = hI.f[BB.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, oB.c)(BB, "large"),
        badges: [],
        category: BB.gameCategory,
        title: void 0 !== (null === ZB || void 0 === ZB ? void 0 : ZB.title) ? IB(ZB.title) : BB.name,
        variationTitle: null,
        description: void 0 !== (null === ZB || void 0 === ZB ? void 0 : ZB.description) ? IB(ZB.description) : BB.description,
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

    function PI(BB) {
      var IB, ZB, TB;
      return null !== (IB = null !== (ZB = (0, pI.j)() ? function(BB) {
        for (const [IB, ZB] of Object.entries(aI)) {
          const TB = [IB, ...ZB.map((BB => (0, oI.Sb)(IB, BB)))];
          if (TB.includes(BB)) return TB
        }
        return null
      }(BB) : null) && void 0 !== ZB ? ZB : null === (TB = hI.c[BB]) || void 0 === TB ? void 0 : TB.listedVariations) && void 0 !== IB ? IB : null
    }

    function RI() {
      const {
        gameNameWithVariation: BB
      } = (0, KB.B)();
      if ((0, qB.useEffect)(YI.s, []), BB && (0, TI.u)(BB)) return (0, PB.jsx)(rI, {
        urlId: BB
      }, BB);
      const IB = BB && (0, JI.i)(BB) ? BB : "firstParty";
      return (0, PB.jsx)(mI, {}, IB)
    }

    function rI(BB) {
      let {
        urlId: IB
      } = BB;
      const {
        userContext: ZB,
        isUserContextUpdating: TB
      } = (0, CB.d)(), JB = (0, qB.useMemo)((() => (0, DB.j)(IB)), [IB]);
      (0, qB.useMemo)((() => {
        if (null === JB) return;
        const BB = xB.userContextManager.peekCurrentUserContext();
        (null !== BB ? pB.c.getGame(BB, JB.schematicId) : xB.userContextManager.getCurrentUserContext().then((BB => pB.c.getGame(BB, JB.schematicId)))).catch((BB => {
          console.error(`Failed to get the custom game ${JB.schematicId}`, BB), (0, DB.g)(IB)
        }))
      }), [JB, IB]);
      const [oB, GB] = (0, qB.useState)(null), vB = (0, EB.c)();
      (0, qB.useEffect)((() => {
        if (null !== JB || TB) return;
        let BB = !0;
        return pB.c.getGameByUrlId(ZB, IB).then((ZB => {
          BB && GB({
            urlId: IB,
            game: ZB
          })
        })).catch((ZB => {
          console.error(`Failed to find the custom game with urlId ${IB}`, ZB), BB && (0, VB.navigateToHomePage)()
        })), () => {
          BB = !1
        }
      }), [IB, JB, TB, ZB]);
      const kB = null !== JB && void 0 !== JB ? JB : (null === oB || void 0 === oB ? void 0 : oB.urlId) === IB ? oB.game : null;
      return null === kB ? (0, PB.jsx)(HB.d, {}) : vB ? (0, PB.jsx)(mI, {
        gameNameWithVariation: (0, JI.o)(kB.schematicId),
        knownCustomGame: kB
      }, kB.schematicId) : null
    }

    function mI(BB) {
      var IB, ZB, GB, FB, iB, aB, HB, jB;
      let {
        gameNameWithVariation: RB,
        knownCustomGame: rB = null
      } = BB;
      const {
        t: XB
      } = (0, kB.G)();
      (0, nI.i)();
      const eB = (0, nI.o)(),
        {
          userContext: uB,
          isUserContextUpdating: fB
        } = (0, CB.d)(),
        lB = (0, OI.i)(),
        xB = (0, VB.useNavigatePreserveSearch)(),
        EB = (0, KB.B)(),
        DB = (0, qB.useMemo)((() => RB ? {
          gameNameWithVariation: RB
        } : EB), [RB, EB]),
        BI = (0, kI.b)(DB),
        TI = (0, qB.useMemo)((() => {
          const BB = function(BB) {
            var IB, ZB;
            const TB = PI(BB);
            if (!TB || 0 === TB.length || TB.includes(BB)) return BB;
            const JB = cB.m.getItem((0, UB.k)(BB));
            if (JB && TB.includes(JB)) return JB;
            return null !== (IB = null === (ZB = hI.c[BB]) || void 0 === ZB ? void 0 : ZB.defaultListedVariation) && void 0 !== IB ? IB : TB[0]
          }(BI.gameNameWithVariation);
          return BB === BI.gameNameWithVariation ? BI : {
            ...BI,
            gameNameWithVariation: BB
          }
        }), [BI]);
      (0, qB.useEffect)((() => {
        const BB = BI.gameNameWithVariation;
        TI.gameNameWithVariation !== BB && BB !== (0, oI.Vb)(BB) && xB((0, LB.A)(TI.gameNameWithVariation), {
          replace: !0
        })
      }), [TI.gameNameWithVariation, BI.gameNameWithVariation, xB]);
      const [NI, gI] = (0, qB.useState)(""), WI = qB.useRef(null), [dI, CI] = (0, qB.useState)(), YI = (0, JI.i)(TI.gameNameWithVariation), pI = (0, qB.useMemo)((() => YI ? null : function(BB, IB, ZB) {
        var TB, JB;
        const GB = hI.c[BB];
        return (0, HI.L)(GB) ? null : {
          listedVariations: PI(BB),
          backgroundImage: (0, oB.h)(BB, (0, oB.b)(GB)),
          badges: (0, nB.filterBadges)(GB.badges),
          category: GB.type,
          title: ZB(GB.title),
          variationTitle: GB.variationTitle ? ZB(GB.variationTitle) : null,
          description: ZB(GB.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== IB ? null !== (TB = IB[BB]) && void 0 !== TB ? TB : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: GB.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: GB.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (JB = GB.canCreateCustomLobbies) || void 0 === JB || JB,
          countdownInformation: (0, UB.i)(BB)
        }
      }(TI.gameNameWithVariation, eB, XB)), [YI, TI.gameNameWithVariation, eB, XB]), [aI, RI] = (0, qB.useState)(!1), [rI, mI] = (0, qB.useState)((() => rB ? jI(rB, XB) : MI)), LI = null !== pI && void 0 !== pI ? pI : rI, [eI] = (0, qB.useState)(LI === MI), uI = (0, JB.c)(LI.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: fI,
        recentlyPlayedCustomLobbies: lI
      } = (0, qB.useMemo)((() => function(BB, IB, ZB, TB) {
        var JB;
        const oB = BB => {
            const ZB = (0, JI.l)(BB),
              TB = IB.find((IB => "custom" === IB.type ? IB.schematicId === ZB : IB.gameNameWithVariation === BB));
            return TB ? [...TB.recentLobbies] : []
          },
          GB = (0, nB.getRecentGameNameWithVariationLobbiesKey)(BB),
          vB = null !== (JB = cB.m.getItem(GB)) && void 0 !== JB ? JB : [],
          kB = [...oB(BB), ...vB],
          hB = [];
        for (const cB of kB)(0, zI.G)(cB) && !hB.includes(cB) && hB.push(cB);
        let zB = kB;
        if (ZB) {
          const BB = oB("classic_worlds"),
            IB = kB.filter((IB => !BB.includes(IB)));
          zB = [...BB, ...IB]
        }
        const FB = [],
          NB = !1 === TB ? [] : zB;
        for (const cB of NB)(0, zI.G)(cB) || FB.includes(cB) || FB.push(cB);
        return {
          recentlyPlayedPublicLobbies: hB,
          recentlyPlayedCustomLobbies: FB
        }
      }(TI.gameNameWithVariation, lB, LI.showWorldsInsteadOfCustomLobbies, LI.canCreateCustomLobbies)), [TI.gameNameWithVariation, lB, LI.showWorldsInsteadOfCustomLobbies, LI.canCreateCustomLobbies]), [AI, tI] = (0, qB.useState)(!0), [bI, xI] = (0, qB.useState)([]), [EI, DI] = (0, qB.useState)(null), [KI, VI] = (0, qB.useState)("explore"), SI = (0, qB.useRef)(!1), BZ = (0, qB.useCallback)((BB => {
        (0, yB.unstable_batchedUpdates)((() => {
          CI(BB), mI((IB => ({
            ...jI(BB, XB),
            isFavourite: IB.isFavourite
          })))
        }))
      }), [XB]);
      (0, qB.useEffect)((() => {
        null === cI.d.get("gameEntrySource") && (0, cI.m)("gameInformationPageDirect")
      }), []);
      const IZ = (0, qB.useRef)(null);
      (0, qB.useEffect)((() => {
        const BB = BB => {
            IZ.current = BB.target instanceof Element ? BB.target.closest("a, button") : null
          },
          IB = BB => {
            "Tab" === BB.key && (IZ.current = null)
          };
        return document.addEventListener("pointerdown", BB, !0), document.addEventListener("keydown", IB, !0), () => {
          document.removeEventListener("pointerdown", BB, !0), document.removeEventListener("keydown", IB, !0)
        }
      }), []), (0, QB.e)("Enter", (BB => {
        const IB = BB.target instanceof Element ? BB.target : null;
        if (BB.defaultPrevented || null !== IB && void 0 !== IB && IB.closest("input, textarea, select")) return;
        const ZB = null === IB || void 0 === IB ? void 0 : IB.closest("a, button");
        ZB && ZB !== IZ.current || (BB.preventDefault(), nZ())
      })), (0, sB.e)(VB.navigateToHomePage);
      const ZZ = fI.length > 0 || lI.length > 0,
        TZ = !LI.useRejoinLastLobbyButton || 0 === fI.length,
        JZ = YI && null === LI.ownerSocialPreviewWithoutLocation,
        oZ = uB.getPlayerName() === (null === dI || void 0 === dI || null === (IB = dI.owner) || void 0 === IB ? void 0 : IB.name),
        GZ = null !== (ZB = null === (GB = LI.badges.find((BB => "event" === BB.type))) || void 0 === GB ? void 0 : GB.event) && void 0 !== ZB ? ZB : null,
        vZ = TZ ? zB.p : zB.g,
        kZ = (0, PB.jsx)(hB.e, {
          tooltipInner: (0, PB.jsx)("div", {
            children: XB("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, PB.jsx)(vZ, {
            className: "GameInformationButton",
            padDefaultFocus: TZ,
            showPress: !0,
            onClick: () => {
              nZ()
            },
            children: (0, PB.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [TZ && (0, PB.jsxs)(PB.Fragment, {
                children: [(0, PB.jsx)(tB.d, {
                  name: "play"
                }), " "]
              }), XB("homePage:quickPlay")]
            })
          })
        });
      (0, qB.useEffect)((() => {
        if (!YI || fB) return;
        let BB = !0;
        const IB = (0, JI.l)(TI.gameNameWithVariation);
        return pB.c.getGame(uB, IB).then((IB => {
          BB && BZ(IB)
        })).catch((IB => {
          console.error("Failed to get Custom Game information", IB), BB && (0, VB.navigateToHomePage)()
        })), pB.c.getFavouriteGames(uB).then((ZB => {
          BB && mI((BB => ({
            ...BB,
            isFavourite: ZB.includes(IB)
          })))
        })).catch((IB => {
          console.error("Failed to get favourite games", IB), BB && RI(!0)
        })), () => {
          BB = !1
        }
      }), [YI, fB, TI.gameNameWithVariation, BZ, uB]);
      const cZ = !YI && null === pI;

      function nZ(BB) {
        (0, iI.g)(), xB((0, WB.b)(TI.gameNameWithVariation, BB))
      }(0, qB.useEffect)((() => {
        cZ && (0, VB.navigateToHomePage)()
      }), [cZ]), (0, qB.useEffect)((() => {
        if (!1 === LI.canCreateCustomLobbies) return;
        let BB = !0;
        return null !== LI.showWorldsInsteadOfCustomLobbies && !1 === fB && (tI(!0), pB.c.getFavouriteLobbies(uB).then((BB => {
          DI(BB)
        })), pB.c.getOpenCustomLobbies(uB, {
          gameNameWithVariation: LI.showWorldsInsteadOfCustomLobbies ? "classic" : TI.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === KI,
          onlyFavouriteLobbies: "favourite" === KI
        }).then((IB => {
          BB && (0, yB.unstable_batchedUpdates)((() => {
            xI(IB), tI(!1)
          }))
        })).catch((IB => {
          console.error("Failed to get open custom lobbies", IB), BB && tI(!1)
        }))), () => {
          BB = !1
        }
      }), [fB, TI, KI, LI.showWorldsInsteadOfCustomLobbies, LI.canCreateCustomLobbies, uB]);
      const hZ = (0, qB.useCallback)((async BB => {
          try {
            if (!EI) return;
            EI.includes(BB) ? (pB.c.unfavouriteLobby(uB, BB), DI(EI.filter((IB => IB !== BB)))) : (pB.c.favouriteLobby(uB, BB).catch((BB => {
              console.error("Failed to favourite lobby", BB)
            })), DI([...EI, BB]))
          } catch (IB) {
            console.error("Failed to like lobby", IB)
          }
        }), [uB, EI]),
        zZ = (null === dI || void 0 === dI ? void 0 : dI.schematicId) === (0, JI.l)(BI.gameNameWithVariation) ? dI : null,
        FZ = zZ && (0, LB.I)(BI.gameNameWithVariation, (BB => XB(BB)), zZ);
      (0, SB.i)(zZ && (0, LB.A)(BI.gameNameWithVariation, zZ));
      const NZ = bB.featureFlags.canUseCustomLobbies && !0 === LI.canCreateCustomLobbies,
        gZ = (0, PB.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, PB.jsx)(AB, {
            gameNameWithVariation: TI.gameNameWithVariation
          })
        });
      return (0, PB.jsx)(PB.Fragment, {
        children: (0, PB.jsxs)("article", {
          className: NB()("GameInformation", {
            GameInformationFadeIn: eI,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (FB = LI.countdownInformation) || void 0 === FB ? void 0 : FB.type)
          }),
          children: [FZ && (0, PB.jsx)(dB.c, {
            meta: FZ
          }), (0, PB.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, PB.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, PB.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, PB.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, PB.jsx)("div", {
                  className: NB()("GameInformationTopBackgroundImage", vB.h),
                  style: (0, vB.f)(uI),
                  children: (0, PB.jsx)(vB.d, {
                    image: uI
                  })
                })]
              }), (0, PB.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, PB.jsx)(yI.c, {}), (0, PB.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, PB.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, PB.jsxs)("div", {
                      className: NB()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: JZ
                      }),
                      children: [LI.badges.map((BB => (0, PB.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${BB.type}`,
                        children: (0, PB.jsx)(YB.d, {
                          badge: BB
                        })
                      }, BB.type))), YI && (0, PB.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, PB.jsx)(OB.e, {
                          text: (0, TB.ob)({
                            type: "playerCrafted"
                          })
                        })
                      }), LI.category && (0, PB.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, PB.jsx)(OB.e, {
                          text: [{
                            str: (0, TB.pb)(LI.category).toUpperCase()
                          }]
                        })
                      }), null !== LI.ccu && (0, PB.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, PB.jsx)(tB.d, {
                          name: "user"
                        }), (0, zI.J)(LI.ccu), " online"]
                      }), null !== LI.ownerSocialPreviewWithoutLocation && (0, PB.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, PB.jsx)("span", {
                          children: "Made by"
                        }), (0, PB.jsx)(MB.f, {
                          playerSocialPreview: {
                            ...LI.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), JZ && (0, PB.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, PB.jsx)("span", {
                          children: "Made by"
                        }), (0, PB.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== LI.favourites && (null !== LI.isFavourite || YI && !aI) && (0, PB.jsx)(zB.w, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== SI.current && (SI.current = !0, null !== LI.isFavourite)) {
                              const BB = (0, JI.l)(TI.gameNameWithVariation);
                              let IB;
                              LI.isFavourite ? (IB = -1, pB.c.unfavouriteGame(uB, BB).catch((BB => {
                                console.error("Failed to get unfavourite game", BB)
                              })).finally((() => {
                                SI.current = !1
                              }))) : (IB = 1, pB.c.favouriteGame(uB, BB).catch((BB => {
                                console.error("Failed to get favourite game", BB)
                              })).finally((() => {
                                SI.current = !1
                              }))), mI((BB => ({
                                ...BB,
                                isFavourite: !BB.isFavourite
                              }))), mI((BB => ({
                                ...BB,
                                favourites: BB.favourites + IB
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (iB = LI.isFavourite) && void 0 !== iB && iB,
                        disabled: null === LI.isFavourite,
                        className: NB()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === LI.isFavourite
                        })
                      }, null === LI.isFavourite ? "pending" : "known"), YI && !JZ && bB.featureFlags.useSocialFeatures && !oZ && (0, PB.jsx)(sI.c, {
                        targetType: "customGame",
                        targetId: (0, JI.l)(TI.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (uB.playerHasRank("developer") || uB.playerHasRank("admin") && oZ) && (0, PB.jsxs)(zB.p, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          xB((0, vI.k)((0, GI.e)(TI.gameNameWithVariation, !0)))
                        },
                        children: [(0, PB.jsx)(tB.d, {
                          name: "star-christmas"
                        }), " ", XB("studio:viewInStudio")]
                      }), YI && uB.playerHasRank("developer") && (0, PB.jsxs)(zB.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, FI.e)({
                            schematicId: (0, JI.l)(TI.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, PB.jsx)(tB.d, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), YI && uB.playerHasRank("developer") && (0, PB.jsxs)(zB.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          II.NotificationProvider.showCustomPopup({
                            body: () => (0, PB.jsx)(qI, {
                              schematicId: (0, JI.l)(TI.gameNameWithVariation),
                              gameName: LI.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, PB.jsx)(tB.d, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (aB = LI.countdownInformation) || void 0 === aB ? void 0 : aB.type) && (0, PB.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, PB.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, PB.jsx)(wB.d, {
                            toTime: LI.countdownInformation.countdownToTime
                          })]
                        }), (0, PB.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: LI.countdownInformation.previewText
                        })]
                      })]
                    }, JZ ? "pending" : "shown"), (0, PB.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, PB.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, PB.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [LI.title, " ", LI.variationTitle && (null === (HB = hI.c[TI.gameNameWithVariation]) || void 0 === HB ? void 0 : HB.variationThumbnailUseBigRatio) && (0, PB.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: LI.variationTitle
                          })]
                        })
                      }), LI.listedVariations && LI.listedVariations.length > 0 && (0, PB.jsx)("div", {
                        className: NB()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (jB = hI.c[TI.gameNameWithVariation]) || void 0 === jB ? void 0 : jB.variationThumbnailUseBigRatio
                        }),
                        children: LI.listedVariations.map((BB => {
                          var IB, ZB;
                          return (0, PB.jsxs)(XI, {
                            variation: BB,
                            isSelected: TI.gameNameWithVariation === BB,
                            children: [null !== eB && (0, PB.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, PB.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, PB.jsx)(tB.d, {
                                  name: "user"
                                }), " ", (0, zI.J)(null !== (IB = eB[BB]) && void 0 !== IB ? IB : 0)]
                              })
                            }), (0, PB.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: XB(null !== (ZB = hI.c[BB].variationTitle) && void 0 !== ZB ? ZB : hI.c[BB].title)
                            }), (0, PB.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, nB.filterBadges)(hI.c[BB].badges).map((BB => (0, PB.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + BB.type,
                                children: (0, PB.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, PB.jsx)(YB.d, {
                                    badge: BB
                                  })
                                })
                              }, BB.type)))
                            })]
                          }, BB)
                        }))
                      })]
                    }), LI.description && (0, PB.jsx)("p", {
                      className: "GameInformationDescription",
                      children: LI.description
                    })]
                  }), (0, PB.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, PB.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!TZ && (0, PB.jsx)(hB.e, {
                        tooltipInner: (0, PB.jsx)("div", {
                          children: XB("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, PB.jsx)(zB.p, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            nZ(fI[0])
                          },
                          children: (0, PB.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, PB.jsx)(tB.d, {
                              name: "play"
                            }), " ", XB("homePage:rejoinLobbyNumber", {
                              number: fI[0]
                            })]
                          })
                        })
                      }), TZ && kZ]
                    }), (0, PB.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!TZ && kZ, (0, PB.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, PB.jsx)(tB.d, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, PB.jsx)(gB.c, {
                          className: "JoinLobbyInput",
                          placeholderText: XB("homePage:lobbyName"),
                          maxLength: zI.H,
                          domRef: WI,
                          onValueChange: BB => {
                            BB = (0, zI.ib)(BB), gI(BB)
                          },
                          onEnter: () => {
                            0 === NI.length ? nZ(fI[0]) : nZ(NI)
                          }
                        }), (0, PB.jsx)(zB.g, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === NI.length ? nZ(fI[0]) : nZ(NI)
                          },
                          children: XB("general:join")
                        })]
                      })]
                    }), (0, PB.jsxs)("section", {
                      className: NB()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !ZZ
                      }),
                      children: [(0, PB.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, PB.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, PB.jsx)(tB.d, {
                            name: "clock-rotate-left"
                          }), ZZ && (0, PB.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: XB("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, PB.jsx)(wI.d, {
                        lobbyGroups: [fI, lI],
                        onLobbyClick: BB => {
                          nZ(BB)
                        },
                        keyPrefix: TI.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== GZ && (0, PB.jsx)(mB, {
                eventName: GZ
              })]
            }), NZ && (0, PB.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, PB.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, PB.jsxs)("div", {
                  className: NB()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === LI.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === LI.showWorldsInsteadOfCustomLobbies && (0, PB.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, PB.jsx)(tB.d, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, PB.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, PB.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), XB("game:worlds")]
                    })]
                  }), !1 === LI.showWorldsInsteadOfCustomLobbies && (0, PB.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, PB.jsx)(tB.d, {
                      name: "joystick"
                    }), (0, PB.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, PB.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), XB("homePage:customLobbies")]
                    })]
                  }), (0, PB.jsx)(zB.V, {
                    onClick: () => {
                      VI("explore")
                    },
                    active: "explore" === KI,
                    children: XB("general:explore")
                  }), (0, PB.jsx)(zB.V, {
                    onClick: () => {
                      VI("favourite")
                    },
                    active: "favourite" === KI,
                    children: XB("homePage:favouriteLobbies")
                  }), (0, PB.jsx)(zB.V, {
                    onClick: () => {
                      VI("owned")
                    },
                    active: "owned" === KI,
                    children: XB("homePage:ownedLobbies")
                  })]
                }), (0, PB.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, PB.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, PB.jsx)(UI.e, {
                      label: "Create",
                      onClick: () => {
                        II.NotificationProvider.showCustomPopup({
                          body: BB => (0, PB.jsx)(ZI.CreateCustomLobby, {
                            gameNameWithVariation: TI.gameNameWithVariation,
                            close: BB
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === AI && (0, PB.jsx)(UI.i, {}), !1 === AI && (0, PB.jsx)(QI, {
                      customLobbies: bI,
                      favouriteLobbies: EI,
                      toggleLikeLobby: hZ,
                      showReport: bB.featureFlags.useSocialFeatures && "owned" !== KI
                    })]
                  }), gZ]
                })]
              })
            })]
          }), !NZ && gZ]
        })
      })
    }

    function XI(BB) {
      let {
        variation: IB,
        isSelected: ZB,
        children: TB
      } = BB;
      const kB = hI.c[IB],
        nB = (0, oB.h)(IB, (0, oB.k)(kB)),
        hB = (0, JB.c)(nB),
        zB = (0, GB.g)([(0, oB.g)(IB, (0, oB.b)(kB))]);
      return (0, PB.jsxs)(VB.LinkPreserveSearch, {
        to: (0, LB.A)(IB),
        replace: !0,
        className: NB()("GameInformationVariation", vB.h, {
          SelectedGameInformationVariation: ZB
        }),
        onClick: BB => {
          if (!(0, BI.c)(BB)) return;
          const ZB = (0, UB.k)(IB);
          cB.m.setItem(ZB, IB)
        },
        onMouseEnter: zB.start,
        onMouseLeave: zB.cancel,
        onFocus: zB.start,
        onBlur: zB.cancel,
        style: (0, vB.f)(hB),
        children: [(0, PB.jsx)(vB.d, {
          image: hB
        }), TB]
      })
    }
  },
  6666: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => UB
    });
    var TB = ZB(63),
      JB = ZB(1516),
      oB = ZB(1561),
      GB = ZB(3668),
      vB = ZB(1179),
      kB = ZB(1397),
      cB = ZB(1421),
      nB = ZB(1102),
      hB = ZB(1091),
      zB = ZB.n(hB),
      FB = ZB(6659),
      NB = ZB(1153);

    function gB(BB) {
      let {
        info: IB,
        className: ZB
      } = BB;
      const {
        statusText: TB,
        rowText: JB
      } = (0, FB.f)();
      return (0, NB.jsxs)("div", {
        className: zB()("GameApprovalInfoDetails", ZB),
        children: [(0, NB.jsxs)("div", {
          className: zB()("GameApprovalInfoSummary", IB.overallPassed ? "Passed" : "Failed"),
          children: [(0, NB.jsx)(nB.d, {
            name: IB.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, NB.jsx)("span", {
            children: TB(IB.status)
          })]
        }), IB.rows.length > 0 && (0, NB.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: IB.rows.map((BB => {
            const {
              label: IB,
              value: ZB
            } = JB(BB);
            return (0, NB.jsxs)("div", {
              className: zB()("GameApprovalInfoRow", BB.passed ? "Passed" : "Failed"),
              children: [(0, NB.jsx)(nB.d, {
                name: BB.passed ? "check" : "xmark"
              }), (0, NB.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, NB.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: IB
                }), null !== ZB && (0, NB.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: ZB
                })]
              })]
            }, BB.kind)
          }))
        })]
      })
    }
    var qB = ZB(1248),
      yB = ZB(1403);

    function UB(BB) {
      yB.NotificationProvider.showCustomPopup({
        body: () => (0, NB.jsx)(WB, {
          ...BB
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function WB(BB) {
      let {
        schematicId: IB,
        canOverride: ZB,
        onApprovalChanged: hB
      } = BB;
      const {
        t: zB
      } = (0, qB.G)(), {
        userContext: FB
      } = (0, vB.d)(), yB = (0, GB.d)(), [UB, WB] = (0, TB.useState)(null), [dB, CB] = (0, TB.useState)(null), [QB, sB] = (0, TB.useState)(!1), wB = (0, TB.useCallback)((() => {
        CB(null), oB.c.getGameApprovalInfo(FB, IB).then((BB => {
          yB.current && WB(BB)
        })).catch((BB => {
          console.error("Failed to get game approval info", BB), yB.current && CB(zB("studio:approvalLoadFailed"))
        }))
      }), [FB, IB, yB, zB]);
      (0, TB.useEffect)((() => {
        wB()
      }), [wB]);
      const OB = BB => {
        QB || (sB(!0), oB.c.setGameApproval(FB, IB, BB).then((() => {
          null === hB || void 0 === hB || hB(), yB.current && wB()
        })).catch((BB => {
          console.error("Failed to set game approval", BB)
        })).finally((() => {
          yB.current && sB(!1)
        })))
      };
      return (0, NB.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, NB.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: zB("studio:approvalTitle")
        }), !UB && !dB && (0, NB.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, NB.jsx)(kB.d, {})
        }), dB && (0, NB.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: dB
        }), UB && (0, NB.jsxs)(NB.Fragment, {
          children: [(0, NB.jsx)(gB, {
            info: UB
          }), ZB && (0, NB.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== UB.manualOverride && (0, NB.jsx)(cB.e, {
              tooltipInner: (0, NB.jsx)("div", {
                children: zB("studio:approvalApproveTooltip")
              }),
              children: (0, NB.jsxs)(JB.p, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  OB(!0)
                },
                disabled: QB,
                children: [(0, NB.jsx)(nB.d, {
                  name: "check"
                }), " ", zB("studio:approvalApprove")]
              })
            }), !1 !== UB.manualOverride && (0, NB.jsx)(cB.e, {
              tooltipInner: (0, NB.jsx)("div", {
                children: zB("studio:approvalDenyTooltip")
              }),
              children: (0, NB.jsxs)(JB.M, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  OB(!1)
                },
                disabled: QB,
                children: [(0, NB.jsx)(nB.d, {
                  name: "xmark"
                }), " ", zB("studio:approvalDeny")]
              })
            }), null !== UB.manualOverride && (0, NB.jsx)(cB.e, {
              tooltipInner: (0, NB.jsx)("div", {
                children: zB("studio:approvalClearOverrideTooltip")
              }),
              children: (0, NB.jsxs)(JB.g, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  OB(null)
                },
                disabled: QB,
                children: [(0, NB.jsx)(nB.d, {
                  name: "arrows-rotate"
                }), " ", zB("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6659: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB,
      f: () => GB
    });
    var TB = ZB(360),
      JB = ZB(1248);
    const oB = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function GB() {
      const {
        t: BB,
        selectedLanguage: IB
      } = (0, JB.G)();
      return {
        statusText: IB => BB(oB[IB]),
        rowText: ZB => {
          const oB = (BB, ZB) => (0, TB.hb)((0, JB.o)(IB.code, BB), 0, ZB);
          switch (ZB.kind) {
            case "ownerAccountAge": {
              const IB = ZB.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: BB("studio:approvalAccountAgeLabel"),
                value: BB(IB, {
                  age: oB(IB, ZB.accountAgeMs),
                  days: ZB.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: BB("studio:approvalSinceUnbannedLabel"), value: BB("studio:approvalSinceUnbannedValue", {
                  time: oB("studio:approvalSinceUnbannedValue", ZB.sinceMs),
                  days: ZB.minDays
                })
              };
            case "reportHold": {
              const {
                detail: IB
              } = ZB;
              if (null === IB) return {
                label: BB("studio:approvalUnderInvestigation"),
                value: null
              };
              const TB = IB.weightedReporters.toFixed(1),
                JB = IB.threshold.toFixed(1),
                GB = BB("studio:approvalReportHoldLabel", {
                  hours: IB.windowHours
                });
              if (null === IB.heldUntil) return {
                label: GB,
                value: BB("studio:approvalReportHoldValue", {
                  weightedReporters: TB,
                  threshold: JB
                })
              };
              const vB = "studio:approvalReportHoldValueHeld";
              return {
                label: GB,
                value: BB(vB, {
                  weightedReporters: TB,
                  threshold: JB,
                  time: oB(vB, IB.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function vB(BB) {
      return null === BB.manualOverride && BB.rows.some((BB => "reportHold" === BB.kind && !BB.passed))
    }
  },
  34243: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB
    });
    var TB = ZB(63),
      JB = ZB(3625);

    function oB() {
      const [BB, IB] = (0, TB.useState)(!1);
      return (0, TB.useLayoutEffect)((() => {
        let BB = !0;
        return (0, JB.h)().then((() => {
          BB && IB(!0)
        })), () => {
          BB = !1
        }
      }), []), BB
    }
  },
  9021: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    var TB = ZB(1385),
      JB = ZB(1281),
      oB = ZB(665);

    function GB(BB) {
      return BB = function(BB, IB) {
        var ZB;
        const TB = new URLSearchParams(IB),
          JB = TB.get("lobby"),
          oB = TB.get("vm"),
          GB = null !== (ZB = JB) && void 0 !== ZB ? ZB : BB.lobbyName,
          vB = null !== oB && void 0 !== oB ? oB : BB.directJoinVmUrl;
        if (GB === BB.lobbyName && vB === BB.directJoinVmUrl) return BB;
        return {
          ...BB,
          lobbyName: GB,
          directJoinVmUrl: vB
        }
      }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), BB = function(BB) {
        if ((0, oB.L)(BB.directJoinVmUrl)) return BB;
        const IB = (0, JB.U)(BB.directJoinVmUrl);
        null === IB && (BB.directJoinVmUrl = void 0);
        return BB
      }(BB = function(BB) {
        if ((0, oB.L)(BB.gameNameWithVariation)) return BB;
        return BB.gameNameWithVariation = (0, TB.i)(BB.gameNameWithVariation), BB
      }(BB))
    }
  },
  9019: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      g: () => JB
    });
    let TB = !1;

    function JB() {
      TB = !0
    }

    function oB() {
      return TB
    }
  },
  36387: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      f: () => TB
    });
    const TB = "skyblockSkills",
      JB = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);