export const id = 101;
export const ids = [101, 368];
export const modules = {
  34935: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => ZW
    });
    var CF = SF(220),
      AF = SF(2679),
      uF = SF(2726),
      hF = SF(2720),
      bW = SF(2716),
      dF = SF(1046),
      PF = SF(33),
      RF = SF(1510),
      iW = SF(1198),
      eF = SF(1266),
      EF = SF(918),
      QF = SF.n(EF),
      rW = SF(1504),
      gW = SF(46),
      tW = SF(61),
      TF = SF(1916),
      aW = SF(1392),
      kW = SF(1453),
      qW = SF(996),
      VF = SF(2607),
      NF = SF(3626),
      DF = SF(2658),
      LF = SF(2663),
      mW = SF(1546),
      OF = SF(2672),
      xW = SF(1521),
      ZF = SF(1336),
      oF = SF(1775),
      YF = SF(1186),
      MF = SF(2012),
      cW = SF(4027),
      GF = SF(971);
    const zW = 15e3,
      IF = 2500;

    function fF(FF) {
      var WF;
      let {
        eventName: SF
      } = FF;
      const {
        t: CF
      } = (0, dF.B)(), AF = xW.g[SF], [uF, hF] = (0, gW.useState)((() => Date.now() >= AF.endsAt.getTime())), [bW, PF] = (0, gW.useState)("overall"), RF = function(FF, WF) {
        const {
          userContext: SF,
          isUserContextUpdating: CF
        } = (0, qW.b)(), AF = `${FF}:${WF}`, [uF, hF] = (0, gW.useState)({
          requestKey: AF,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, gW.useEffect)((() => {
          if (CF) return;
          let uF, bW = !1;
          const dF = async () => {
            if ("visible" === document.visibilityState) try {
              const CF = await ZF.b.getGameEventLeaderboard(SF, {
                event: FF,
                scope: WF
              });
              bW || hF({
                requestKey: AF,
                leaderboard: {
                  status: "loaded",
                  leaderboard: CF
                }
              })
            } catch {
              bW || hF((FF => FF.requestKey === AF && "loaded" === FF.leaderboard.status ? FF : {
                requestKey: AF,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            bW || (uF = setTimeout(dF, zW))
          };
          return dF(), () => {
            bW = !0, clearTimeout(uF)
          }
        }), [FF, WF, AF, SF, CF]), uF.requestKey === AF ? uF.leaderboard : {
          status: "loading"
        }
      }(SF, bW), iW = function(FF) {
        const WF = (0, gW.useRef)(null),
          SF = (0, gW.useRef)(0),
          CF = (0, gW.useRef)(),
          [AF, uF] = (0, gW.useState)({});
        return (0, gW.useEffect)((() => {
          const AF = null === FF || void 0 === FF ? void 0 : FF.entries;
          if (!AF) return;
          const hF = new Map(AF.map((FF => [FF.player.name, FF.value]))),
            bW = WF.current;
          if (WF.current = hF, null === bW) return;
          const dF = {};
          for (const [FF, WF] of hF) {
            const CF = bW.get(FF);
            void 0 !== CF && WF > CF && (dF[FF] = {
              amount: WF - CF,
              key: SF.current++
            })
          }
          0 !== Object.keys(dF).length && (uF(dF), clearTimeout(CF.current), CF.current = setTimeout((() => {
            uF({})
          }), IF))
        }), [FF]), (0, gW.useEffect)((() => () => {
          clearTimeout(CF.current)
        }), []), AF
      }("loaded" === RF.status ? RF.leaderboard : null), eF = function(FF) {
        const [WF, SF] = (0, gW.useState)(null), CF = "loaded" === FF.status ? FF.leaderboard.goalProgress : void 0;
        return (0, gW.useEffect)((() => {
          CF && SF(CF)
        }), [CF]), WF
      }(RF), EF = oF.f[`profileEffect_${AF.prizePack}`];
      if (uF) return null;
      const rW = "loaded" === RF.status ? RF.leaderboard : null,
        tW = null !== (WF = null === rW || void 0 === rW ? void 0 : rW.entries) && void 0 !== WF ? WF : null,
        TF = null !== rW && void 0 !== rW && rW.own && null !== tW && !tW.some((FF => FF.isOwn)) ? rW.own : null;
      return (0, GF.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, GF.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, GF.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, GF.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, GF.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, GF.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), CF("gameEvents:live")]
              }), (0, GF.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [CF("gameEvents:endsIn"), (0, GF.jsx)(DF.b, {
                  toTime: AF.endsAt,
                  onReachEndOfCountdown: () => {
                    hF(!0)
                  }
                })]
              })]
            }), (0, GF.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: CF(AF.titleKey)
            }), (0, GF.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, GF.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [EF && (0, GF.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, GF.jsx)(EF, {})
                }), (0, GF.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, GF.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: CF("gameEvents:prize")
                  }), (0, GF.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: CF(AF.prizeNameKey)
                  })]
                })]
              }), (0, GF.jsx)(yW, {
                event: AF,
                progress: eF
              })]
            })]
          }), (0, GF.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, GF.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, GF.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: CF(AF.leaderboard.titleKey)
              }), (0, GF.jsx)(cW.b, {
                ariaLabel: CF("gameEvents:leaderboardScope"),
                options: xW.c.map((FF => ({
                  value: FF,
                  label: CF(`gameEvents:${FF}Scope`)
                }))),
                value: bW,
                onChange: PF
              })]
            }), "loading" === RF.status && (0, GF.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, GF.jsx)(YF.c, {})
            }), ("unavailable" === RF.status || "loaded" === RF.status && null === tW) && (0, GF.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: CF("gameEvents:leaderboardUnavailable")
            }), null !== tW && 0 === tW.length && (0, GF.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: CF("friends" === bW ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== tW && tW.length > 0 && (0, GF.jsx)("ol", {
              className: "GameEventPanelRows",
              children: tW.map((FF => {
                const WF = iW[FF.player.name];
                return (0, GF.jsxs)("li", {
                  className: QF()("GameEventPanelRow", {
                    GameEventPanelRowOwn: FF.isOwn,
                    GameEventPanelRowTop: FF.rank <= 3
                  }),
                  children: [(0, GF.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", FF.rank]
                  }), (0, GF.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, GF.jsx)(MF.d, {
                      playerSocialPreview: {
                        ...FF.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== WF && (0, GF.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", WF.amount.toLocaleString()]
                  }, WF.key), (0, GF.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: FF.value.toLocaleString()
                  })]
                }, FF.player.name)
              }))
            }), TF && (0, GF.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, GF.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", TF.rank.toLocaleString()]
              }), (0, GF.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: CF("gameEvents:yourPlace")
              }), (0, GF.jsx)("span", {
                className: "GameEventPanelScore",
                children: TF.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function yW(FF) {
      let {
        event: WF,
        progress: SF
      } = FF;
      const {
        t: CF
      } = (0, dF.B)(), AF = null !== SF && WF.prizeGoals.some(((FF, WF) => SF[WF] >= FF.target));
      return (0, GF.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, GF.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: CF(AF ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, GF.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: WF.prizeGoals.map(((FF, WF) => {
            const AF = null === SF ? null : Math.min(SF[WF], FF.target);
            return (0, GF.jsxs)(gW.Fragment, {
              children: [WF > 0 && (0, GF.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: CF("gameEvents:goalsOr")
              }), (0, GF.jsxs)("div", {
                className: QF()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: AF === FF.target
                }),
                children: [(0, GF.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: CF(FF.labelKey)
                }), (0, GF.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, GF.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== AF && void 0 !== AF ? AF : 0) / FF.target * 100 + "%"
                    }
                  }), null !== AF && (0, GF.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [AF.toLocaleString(), " / ", FF.target.toLocaleString()]
                  })]
                })]
              })]
            }, FF.board)
          }))
        })]
      })
    }
    var sF = SF(1385),
      nF = SF(1435),
      HF = SF(901),
      KF = SF(573),
      wF = SF(2649);

    function XF(FF) {
      let {
        gameNameWithVariation: WF
      } = FF;
      const SF = (0, sF.F)(WF),
        [CF, AF] = (0, gW.useState)(null);
      if ((0, gW.useEffect)((() => {
          if (!SF) return;
          let FF = !0;
          return (0, nF.f)(SF).then((WF => {
            FF && AF(WF)
          })).catch((FF => {
            console.error(`Failed to load the page copy for ${SF.name}`, FF)
          })), () => {
            FF = !1
          }
        }), [SF]), !SF || !CF || CF.name !== SF.name) return null;
      const uF = (0, nF.e)(CF),
        hF = new Set((0, HF.d)((0, KF.e)()).map((FF => (0, sF.w)(FF)))),
        bW = CF.similarGames.filter((FF => hF.has((0, sF.w)(FF))));
      return (0, GF.jsx)("div", {
        className: "GamePageContent",
        children: (0, GF.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, GF.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, GF.jsx)("h2", {
              children: uF.whatIs
            }), CF.whatIs.map((FF => (0, GF.jsx)("p", {
              children: FF
            }, FF)))]
          }), (0, GF.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, GF.jsx)("h2", {
              children: uF.howToPlay
            }), CF.howToPlay.map((FF => (0, GF.jsx)("p", {
              children: FF
            }, FF)))]
          }), (0, GF.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, GF.jsx)("h2", {
              children: uF.features
            }), (0, GF.jsx)("ul", {
              children: CF.features.map((FF => (0, GF.jsx)("li", {
                children: FF
              }, FF)))
            })]
          }), (0, GF.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, GF.jsx)("h2", {
              children: uF.tips
            }), (0, GF.jsx)("ul", {
              children: CF.tips.map((FF => (0, GF.jsx)("li", {
                children: FF
              }, FF)))
            })]
          }), (0, GF.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, GF.jsx)("h2", {
              children: uF.faq
            }), CF.faq.map((FF => {
              let {
                question: WF,
                answer: SF
              } = FF;
              return (0, GF.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, GF.jsx)("h3", {
                  children: WF
                }), (0, GF.jsx)("p", {
                  children: SF
                })]
              }, WF)
            }))]
          }), bW.length > 0 && (0, GF.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, GF.jsx)("h2", {
              children: uF.similarGames
            }), (0, GF.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: bW.map((FF => (0, GF.jsx)("li", {
                children: (0, GF.jsx)(wF.f, {
                  source: {
                    type: "game",
                    gameNameWithVariation: FF
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, FF)))
            })]
          })]
        })
      })
    }
    var UF = SF(929),
      BF = SF(89),
      jW = SF(1001),
      vW = SF(2760),
      JF = SF(1490),
      pF = SF(1360),
      lF = SF(1352),
      FW = SF(1447),
      WW = SF(1280),
      SW = SF(1189),
      CW = SF(34938),
      AW = SF(1099),
      uW = SF(874),
      hW = SF(271),
      bS = SF(887),
      dW = SF(1381),
      PW = SF(7834),
      RW = SF(11),
      iS = SF(1979),
      eW = SF(612),
      EW = SF(1085),
      QW = SF(5478);

    function rS(FF) {
      let {
        preview: WF,
        isBroken: SF
      } = FF;
      const CF = null === WF ? null : (0, uF.e)(WF, "small"),
        hF = (0, AF.e)(null !== CF && void 0 !== CF ? CF : uF.n);
      return null === WF ? (0, GF.jsx)("div", {
        className: QF()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: SF
        }),
        children: (0, GF.jsx)(UF.e, {
          name: SF ? "triangle-exclamation" : "star"
        })
      }) : (0, GF.jsx)("div", {
        className: QF()("FeaturedGamesPopupSlotThumbnail", bW.j),
        style: (0, bW.f)(hF),
        role: "img",
        "aria-label": WF.name,
        children: (0, GF.jsx)(bW.d, {
          image: hF
        })
      })
    }

    function gS(FF) {
      let {
        schematicId: WF,
        gameName: SF
      } = FF;
      const {
        userContext: AF
      } = (0, qW.b)(), uF = (0, LF.d)(), [hF, bW] = (0, gW.useState)(null), [dF, PF] = (0, gW.useState)(null), [RF, iW] = (0, gW.useState)(!1), EF = (0, gW.useCallback)((() => {
        PF(null), ZF.b.getFeaturedGames(AF).then((FF => {
          uF.current && bW(FF.slots)
        })).catch((FF => {
          console.error("Failed to get featured games", FF), uF.current && PF("Failed to load featured games")
        }))
      }), [AF, uF]);
      (0, gW.useEffect)((() => {
        EF()
      }), [EF]);
      const QF = (FF, WF) => {
        RF || (iW(!0), ZF.b.setFeaturedGame(AF, FF, WF).then((() => {
          uF.current && EF()
        })).catch((FF => {
          console.error("Failed to set featured game", FF), uF.current && PF("Failed to update the featured slot")
        })).finally((() => {
          uF.current && iW(!1)
        })))
      };
      return (0, GF.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, GF.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !hF && !dF && (0, GF.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, GF.jsx)(YF.c, {})
        }), dF && (0, GF.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: dF
        }), hF && (0, GF.jsxs)(GF.Fragment, {
          children: [(0, GF.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: hF.map((FF => {
              const SF = FF.schematicId === WF,
                AF = null === FF.schematicId,
                {
                  categoryGroup: uF
                } = CF.J[FF.slotId];
              return (0, GF.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, GF.jsx)(rS, {
                  preview: FF.preview,
                  isBroken: !AF
                }), (0, GF.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, GF.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, CF.nb)(uF), " \xb7 position", " ", (0, CF.N)(FF.slotId, CF.Qb) + 1, " of", " ", (0, CF.Mb)(uF, CF.Qb)]
                  }), AF && (0, GF.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !AF && null !== FF.preview && (0, GF.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: FF.preview.name
                  }), !AF && null === FF.preview && (0, GF.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, GF.jsx)(UF.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, GF.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [AF && (0, GF.jsxs)(eF.r, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      QF(FF.slotId, WF)
                    },
                    disabled: RF,
                    children: [(0, GF.jsx)(UF.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !AF && !SF && (0, GF.jsxs)(eF.N, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      QF(FF.slotId, WF)
                    },
                    disabled: RF,
                    children: [(0, GF.jsx)(UF.e, {
                      name: "star"
                    }), " Replace"]
                  }), !AF && (0, GF.jsxs)(eF.E, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      QF(FF.slotId, null)
                    },
                    disabled: RF,
                    children: [(0, GF.jsx)(UF.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, FF.slotId)
            }))
          }), (0, GF.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var tS = SF(3681),
      TW = SF(3654),
      aS = SF(3657),
      kS = SF(3667),
      qS = SF(3637),
      VW = SF(2753),
      NW = SF(174);
    const DW = {
      skyblock: [SF(34948).e]
    };
    var LW = SF(568);
    const mS = {
      listedVariations: null,
      backgroundImage: uF.n,
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

    function OW(FF, WF) {
      const SF = eW.g[FF.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, uF.e)(FF, "large"),
        badges: [],
        category: FF.gameCategory,
        title: void 0 !== (null === SF || void 0 === SF ? void 0 : SF.title) ? WF(SF.title) : FF.name,
        variationTitle: null,
        description: void 0 !== (null === SF || void 0 === SF ? void 0 : SF.description) ? WF(SF.description) : FF.description,
        ownerSocialPreviewWithoutLocation: "owner" in FF ? FF.owner : null,
        ccu: FF.ccu,
        favourites: FF.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in FF ? FF.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function xS(FF) {
      var WF, SF, CF;
      return null !== (WF = null !== (SF = (0, NW.o)() ? function(FF) {
        for (const [WF, SF] of Object.entries(DW)) {
          const CF = [WF, ...SF.map((FF => (0, hW.Vb)(WF, FF)))];
          if (CF.includes(FF)) return CF
        }
        return null
      }(FF) : null) && void 0 !== SF ? SF : null === (CF = eW.e[FF]) || void 0 === CF ? void 0 : CF.listedVariations) && void 0 !== WF ? WF : null
    }

    function ZW() {
      const {
        gameNameWithVariation: FF
      } = (0, pF.v)();
      if ((0, gW.useEffect)(VW.n, []), FF && (0, AW.x)(FF)) return (0, GF.jsx)(oW, {
        urlId: FF
      }, FF);
      const WF = FF && (0, uW.j)(FF) ? FF : "firstParty";
      return (0, GF.jsx)(YW, {}, WF)
    }

    function oW(FF) {
      let {
        urlId: WF
      } = FF;
      const {
        userContext: SF,
        isUserContextUpdating: CF
      } = (0, qW.b)(), AF = (0, gW.useMemo)((() => (0, JF.k)(WF)), [WF]);
      (0, gW.useMemo)((() => {
        if (null === AF) return;
        const FF = jW.userContextManager.peekCurrentUserContext();
        (null !== FF ? ZF.b.getGame(FF, AF.schematicId) : jW.userContextManager.getCurrentUserContext().then((FF => ZF.b.getGame(FF, AF.schematicId)))).catch((FF => {
          console.error(`Failed to get the custom game ${AF.schematicId}`, FF), (0, JF.g)(WF)
        }))
      }), [AF, WF]);
      const [uF, hF] = (0, gW.useState)(null), [bW, dF] = (0, gW.useState)(!1);
      (0, gW.useLayoutEffect)((() => {
        let FF = !0;
        return (0, vW.c)().then((() => {
          FF && dF(!0)
        })), () => {
          FF = !1
        }
      }), []), (0, gW.useEffect)((() => {
        if (null !== AF || CF) return;
        let FF = !0;
        return ZF.b.getGameByUrlId(SF, WF).then((SF => {
          FF && hF({
            urlId: WF,
            game: SF
          })
        })).catch((SF => {
          console.error(`Failed to find the custom game with urlId ${WF}`, SF), FF && (0, lF.navigateToHomePage)()
        })), () => {
          FF = !1
        }
      }), [WF, AF, CF, SF]);
      const PF = null !== AF && void 0 !== AF ? AF : (null === uF || void 0 === uF ? void 0 : uF.urlId) === WF ? uF.game : null;
      return null === PF ? (0, GF.jsx)(YF.c, {}) : bW ? (0, GF.jsx)(YW, {
        gameNameWithVariation: (0, uW.s)(PF.schematicId),
        knownCustomGame: PF
      }, PF.schematicId) : null
    }

    function YW(FF) {
      var WF, SF, hF, EF, xW, oF, YF, cW;
      let {
        gameNameWithVariation: zW,
        knownCustomGame: IF = null
      } = FF;
      const {
        t: yW
      } = (0, dF.B)(), nF = (0, iS.h)({
        refresh: !0
      }), {
        userContext: HF,
        isUserContextUpdating: wF
      } = (0, qW.b)(), jW = (0, qS.g)(), vW = (0, lF.useNavigatePreserveSearch)(), JF = (0, pF.v)(), WW = (0, gW.useMemo)((() => zW ? {
        gameNameWithVariation: zW
      } : JF), [zW, JF]), AW = (0, PW.e)(WW), rS = (0, gW.useMemo)((() => {
        const FF = function(FF) {
          var WF, SF;
          const CF = xS(FF);
          if (!CF || 0 === CF.length || CF.includes(FF)) return FF;
          const AF = PF.h.getItem((0, TF.h)(FF));
          if (AF && CF.includes(AF)) return AF;
          return null !== (WF = null === (SF = eW.e[FF]) || void 0 === SF ? void 0 : SF.defaultListedVariation) && void 0 !== WF ? WF : CF[0]
        }(AW.gameNameWithVariation);
        return FF === AW.gameNameWithVariation ? AW : {
          ...AW,
          gameNameWithVariation: FF
        }
      }), [AW]);
      (0, gW.useEffect)((() => {
        const FF = AW.gameNameWithVariation;
        rS.gameNameWithVariation !== FF && FF !== (0, hW.Yb)(FF) && vW((0, sF.y)(rS.gameNameWithVariation), {
          replace: !0
        })
      }), [rS.gameNameWithVariation, AW.gameNameWithVariation, vW]);
      const VW = (0, LF.d)(),
        [NW, DW] = (0, gW.useState)(""),
        ZW = gW.useRef(null),
        [oW, YW] = (0, gW.useState)(),
        cS = (0, uW.j)(rS.gameNameWithVariation),
        GW = (0, gW.useMemo)((() => cS ? null : function(FF, WF, SF) {
          var CF, AF;
          const hF = eW.e[FF];
          return (0, LW.Q)(hF) ? null : {
            listedVariations: xS(FF),
            backgroundImage: (0, uF.i)(FF, (0, uF.b)(hF)),
            badges: (0, RF.filterBadges)(hF.badges),
            category: hF.type,
            title: SF(hF.title),
            variationTitle: hF.variationTitle ? SF(hF.variationTitle) : null,
            description: SF(hF.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== WF ? null !== (CF = WF[FF]) && void 0 !== CF ? CF : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: hF.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: hF.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (AF = hF.canCreateCustomLobbies) || void 0 === AF || AF,
            countdownInformation: (0, TF.g)(FF)
          }
        }(rS.gameNameWithVariation, nF, yW)), [cS, rS.gameNameWithVariation, nF, yW]),
        [zS, IW] = (0, gW.useState)(!1),
        [fW, yS] = (0, gW.useState)((() => IF ? OW(IF, yW) : mS)),
        sW = null !== GW && void 0 !== GW ? GW : fW,
        [nW] = (0, gW.useState)(sW === mS),
        HW = (0, AF.e)(sW.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: KW,
          recentlyPlayedCustomLobbies: wW
        } = (0, gW.useMemo)((() => function(FF, WF, SF, CF) {
          var AF;
          const uF = FF => {
              const SF = (0, uW.o)(FF),
                CF = WF.find((WF => "custom" === WF.type ? WF.schematicId === SF : WF.gameNameWithVariation === FF));
              return CF ? [...CF.recentLobbies] : []
            },
            hF = (0, RF.getRecentGameNameWithVariationLobbiesKey)(FF),
            bW = null !== (AF = PF.h.getItem(hF)) && void 0 !== AF ? AF : [],
            dF = [...uF(FF), ...bW],
            iW = [];
          for (const PF of dF)(0, EW.L)(PF) && !iW.includes(PF) && iW.push(PF);
          let eF = dF;
          if (SF) {
            const FF = uF("classic_worlds"),
              WF = dF.filter((WF => !FF.includes(WF)));
            eF = [...FF, ...WF]
          }
          const EF = [],
            QF = !1 === CF ? [] : eF;
          for (const PF of QF)(0, EW.L)(PF) || EF.includes(PF) || EF.push(PF);
          return {
            recentlyPlayedPublicLobbies: iW,
            recentlyPlayedCustomLobbies: EF
          }
        }(rS.gameNameWithVariation, jW, sW.showWorldsInsteadOfCustomLobbies, sW.canCreateCustomLobbies)), [rS.gameNameWithVariation, jW, sW.showWorldsInsteadOfCustomLobbies, sW.canCreateCustomLobbies]),
        [XW, UW] = (0, gW.useState)(!0),
        [BW, jS] = (0, gW.useState)([]),
        [vS, JW] = (0, gW.useState)(null),
        [pW, lW] = (0, gW.useState)("explore"),
        FS = (0, gW.useRef)(!1),
        WS = (0, gW.useCallback)((FF => {
          (0, tW.unstable_batchedUpdates)((() => {
            YW(FF), yS((WF => ({
              ...OW(FF, yW),
              isFavourite: WF.isFavourite
            })))
          }))
        }), [yW]);
      (0, gW.useEffect)((() => {
        null === RW.b.get("gameEntrySource") && (0, RW.c)("gameInformationPageDirect")
      }), []);
      const SS = (0, gW.useRef)(null);
      (0, gW.useEffect)((() => {
        const FF = FF => {
            SS.current = FF.target instanceof Element ? FF.target.closest("a, button") : null
          },
          WF = FF => {
            "Tab" === FF.key && (SS.current = null)
          };
        return document.addEventListener("pointerdown", FF, !0), document.addEventListener("keydown", WF, !0), () => {
          document.removeEventListener("pointerdown", FF, !0), document.removeEventListener("keydown", WF, !0)
        }
      }), []), (0, VF.b)("Enter", (FF => {
        const WF = FF.target instanceof Element ? FF.target : null;
        if (FF.defaultPrevented || null !== WF && void 0 !== WF && WF.closest("input, textarea, select")) return;
        const SF = null === WF || void 0 === WF ? void 0 : WF.closest("a, button");
        SF && SF !== SS.current || (FF.preventDefault(), iC())
      })), (0, NF.b)(lF.navigateToHomePage);
      const CS = !KF.h && (KW.length > 0 || wW.length > 0),
        AS = !sW.useRejoinLastLobbyButton || 0 === KW.length,
        uS = cS && null === sW.ownerSocialPreviewWithoutLocation,
        hS = HF.getPlayerName() === (null === oW || void 0 === oW || null === (WF = oW.owner) || void 0 === WF ? void 0 : WF.name),
        bC = null !== (SF = null === (hF = sW.badges.find((FF => "event" === FF.type))) || void 0 === hF ? void 0 : hF.event) && void 0 !== SF ? SF : null,
        dS = AS ? eF.k : eF.e,
        PS = (0, GF.jsx)(iW.g, {
          tooltipInner: (0, GF.jsx)("div", {
            children: yW("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, GF.jsx)(dS, {
            className: "GameInformationButton",
            padDefaultFocus: AS,
            showPress: !0,
            onClick: () => {
              iC()
            },
            children: (0, GF.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [AS && (0, GF.jsxs)(GF.Fragment, {
                children: [(0, GF.jsx)(UF.e, {
                  name: "play"
                }), " "]
              }), yW("homePage:quickPlay")]
            })
          })
        });
      (0, gW.useEffect)((() => {
        if (!cS || wF) return;
        let FF = !0;
        const WF = (0, uW.o)(rS.gameNameWithVariation);
        return ZF.b.getGame(HF, WF).then((WF => {
          FF && WS(WF)
        })).catch((WF => {
          console.error("Failed to get Custom Game information", WF), FF && (0, lF.navigateToHomePage)()
        })), ZF.b.getFavouriteGames(HF).then((SF => {
          FF && yS((FF => ({
            ...FF,
            isFavourite: SF.includes(WF)
          })))
        })).catch((WF => {
          console.error("Failed to get favourite games", WF), FF && IW(!0)
        })), () => {
          FF = !1
        }
      }), [cS, wF, rS.gameNameWithVariation, WS, HF]);
      const RS = !cS && null === GW;

      function iC(FF) {
        vW((0, aW.c)(rS.gameNameWithVariation, FF))
      }(0, gW.useEffect)((() => {
        RS && (0, lF.navigateToHomePage)()
      }), [RS]), (0, gW.useEffect)((() => {
        !1 !== sW.canCreateCustomLobbies && null !== sW.showWorldsInsteadOfCustomLobbies && (KF.h || !1 !== wF || (UW(!0), ZF.b.getFavouriteLobbies(HF).then((FF => {
          JW(FF)
        })), ZF.b.getOpenCustomLobbies(HF, {
          gameNameWithVariation: sW.showWorldsInsteadOfCustomLobbies ? "classic" : rS.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === pW,
          onlyFavouriteLobbies: "favourite" === pW
        }).then((FF => {
          VW.current && jS(FF)
        })).catch((FF => {})).finally((() => {
          VW.current && UW(!1)
        }))))
      }), [wF, rS, pW, sW.showWorldsInsteadOfCustomLobbies, sW.canCreateCustomLobbies, VW, HF]);
      const eS = (0, gW.useCallback)((async FF => {
          try {
            if (!vS) return;
            vS.includes(FF) ? (ZF.b.unfavouriteLobby(HF, FF), JW(vS.filter((WF => WF !== FF)))) : (ZF.b.favouriteLobby(HF, FF).catch((FF => {
              console.error("Failed to favourite lobby", FF)
            })), JW([...vS, FF]))
          } catch (WF) {
            console.error("Failed to like lobby", WF)
          }
        }), [HF, vS]),
        ES = (null === oW || void 0 === oW ? void 0 : oW.schematicId) === (0, uW.o)(AW.gameNameWithVariation) ? oW : null,
        QS = ES && (0, sF.I)(AW.gameNameWithVariation, (FF => yW(FF)), ES);
      (0, FW.f)(ES && (0, sF.y)(AW.gameNameWithVariation, ES));
      const rC = !KF.h && BF.featureFlags.canUseCustomLobbies && !0 === sW.canCreateCustomLobbies,
        gC = (0, GF.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, GF.jsx)(XF, {
            gameNameWithVariation: rS.gameNameWithVariation
          })
        });
      return (0, GF.jsx)(GF.Fragment, {
        children: (0, GF.jsxs)("article", {
          className: QF()("GameInformation", {
            GameInformationFadeIn: nW,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (EF = sW.countdownInformation) || void 0 === EF ? void 0 : EF.type)
          }),
          children: [QS && (0, GF.jsx)(kW.d, {
            meta: QS
          }), (0, GF.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, GF.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, GF.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, GF.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, GF.jsx)("div", {
                  className: QF()("GameInformationTopBackgroundImage", bW.j),
                  style: (0, bW.f)(HW),
                  children: (0, GF.jsx)(bW.d, {
                    image: HW
                  })
                })]
              }), (0, GF.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, GF.jsx)(tS.d, {}), (0, GF.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, GF.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, GF.jsxs)("div", {
                      className: QF()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: uS
                      }),
                      children: [sW.badges.map((FF => (0, GF.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${FF.type}`,
                        children: (0, GF.jsx)(OF.c, {
                          badge: FF
                        })
                      }, FF.type))), cS && (0, GF.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, GF.jsx)(mW.d, {
                          text: (0, CF.eb)({
                            type: "playerCrafted"
                          })
                        })
                      }), sW.category && (0, GF.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, GF.jsx)(mW.d, {
                          text: [{
                            str: (0, CF.gb)(sW.category).toUpperCase()
                          }]
                        })
                      }), null !== sW.ccu && (0, GF.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, GF.jsx)(UF.e, {
                          name: "user"
                        }), (0, EW.R)(sW.ccu), " online"]
                      }), null !== sW.ownerSocialPreviewWithoutLocation && (0, GF.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, GF.jsx)("span", {
                          children: "Made by"
                        }), (0, GF.jsx)(MF.d, {
                          playerSocialPreview: {
                            ...sW.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), uS && (0, GF.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, GF.jsx)("span", {
                          children: "Made by"
                        }), (0, GF.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== sW.favourites && (null !== sW.isFavourite || cS && !zS) && (0, GF.jsx)(eF.s, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== FS.current && (FS.current = !0, null !== sW.isFavourite)) {
                              const FF = (0, uW.o)(rS.gameNameWithVariation);
                              let WF;
                              sW.isFavourite ? (WF = -1, ZF.b.unfavouriteGame(HF, FF).catch((FF => {
                                console.error("Failed to get unfavourite game", FF)
                              })).finally((() => {
                                FS.current = !1
                              }))) : (WF = 1, ZF.b.favouriteGame(HF, FF).catch((FF => {
                                console.error("Failed to get favourite game", FF)
                              })).finally((() => {
                                FS.current = !1
                              }))), yS((FF => ({
                                ...FF,
                                isFavourite: !FF.isFavourite
                              }))), yS((FF => ({
                                ...FF,
                                favourites: FF.favourites + WF
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (xW = sW.isFavourite) && void 0 !== xW && xW,
                        disabled: null === sW.isFavourite,
                        className: QF()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === sW.isFavourite
                        })
                      }, null === sW.isFavourite ? "pending" : "known"), cS && !uS && BF.featureFlags.useSocialFeatures && !hS && (0, GF.jsx)(aS.b, {
                        targetType: "customGame",
                        targetId: (0, uW.o)(rS.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (HF.playerHasRank("developer") || HF.playerHasRank("admin") && hS) && (0, GF.jsxs)(eF.k, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          vW((0, dW.m)((0, bS.g)(rS.gameNameWithVariation, !0)))
                        },
                        children: [(0, GF.jsx)(UF.e, {
                          name: "star-christmas"
                        }), " ", yW("studio:viewInStudio")]
                      }), cS && HF.playerHasRank("developer") && (0, GF.jsxs)(eF.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, QW.c)({
                            schematicId: (0, uW.o)(rS.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, GF.jsx)(UF.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), cS && HF.playerHasRank("developer") && (0, GF.jsxs)(eF.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          SW.NotificationProvider.showCustomPopup({
                            body: () => (0, GF.jsx)(gS, {
                              schematicId: (0, uW.o)(rS.gameNameWithVariation),
                              gameName: sW.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, GF.jsx)(UF.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (oF = sW.countdownInformation) || void 0 === oF ? void 0 : oF.type) && (0, GF.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, GF.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, GF.jsx)(DF.b, {
                            toTime: sW.countdownInformation.countdownToTime
                          })]
                        }), (0, GF.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: sW.countdownInformation.previewText
                        })]
                      })]
                    }, uS ? "pending" : "shown"), (0, GF.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, GF.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, GF.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [sW.title, " ", sW.variationTitle && (null === (YF = eW.e[rS.gameNameWithVariation]) || void 0 === YF ? void 0 : YF.variationThumbnailUseBigRatio) && (0, GF.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: sW.variationTitle
                          })]
                        })
                      }), sW.listedVariations && sW.listedVariations.length > 0 && (0, GF.jsx)("div", {
                        className: QF()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (cW = eW.e[rS.gameNameWithVariation]) || void 0 === cW ? void 0 : cW.variationThumbnailUseBigRatio
                        }),
                        children: sW.listedVariations.map((FF => {
                          var WF, SF;
                          return (0, GF.jsxs)(MW, {
                            variation: FF,
                            isSelected: rS.gameNameWithVariation === FF,
                            children: [null !== nF && (0, GF.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, GF.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, GF.jsx)(UF.e, {
                                  name: "user"
                                }), " ", (0, EW.R)(null !== (WF = nF[FF]) && void 0 !== WF ? WF : 0)]
                              })
                            }), (0, GF.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: yW(null !== (SF = eW.e[FF].variationTitle) && void 0 !== SF ? SF : eW.e[FF].title)
                            }), (0, GF.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, RF.filterBadges)(eW.e[FF].badges).map((FF => (0, GF.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + FF.type,
                                children: (0, GF.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, GF.jsx)(OF.c, {
                                    badge: FF
                                  })
                                })
                              }, FF.type)))
                            })]
                          }, FF)
                        }))
                      })]
                    }), sW.description && (0, GF.jsx)("p", {
                      className: "GameInformationDescription",
                      children: sW.description
                    })]
                  }), (0, GF.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, GF.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!KF.h && !AS && (0, GF.jsx)(iW.g, {
                        tooltipInner: (0, GF.jsx)("div", {
                          children: yW("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, GF.jsx)(eF.k, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            iC(KW[0])
                          },
                          children: (0, GF.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, GF.jsx)(UF.e, {
                              name: "play"
                            }), " ", yW("homePage:rejoinLobbyNumber", {
                              number: KW[0]
                            })]
                          })
                        })
                      }), !KF.h && AS && PS]
                    }), (0, GF.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!KF.h && !AS && PS, (0, GF.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, GF.jsx)(UF.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, GF.jsx)(rW.d, {
                          className: "JoinLobbyInput",
                          placeholderText: yW("homePage:lobbyName"),
                          maxLength: EW.O,
                          domRef: ZW,
                          onValueChange: FF => {
                            FF = (0, EW.wb)(FF), DW(FF)
                          },
                          onEnter: () => {
                            0 === NW.length ? iC(KW[0]) : iC(NW)
                          }
                        }), (0, GF.jsx)(eF.e, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === NW.length ? iC(KW[0]) : iC(NW)
                          },
                          children: yW("general:join")
                        })]
                      })]
                    }), (0, GF.jsxs)("section", {
                      className: QF()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !CS
                      }),
                      children: [(0, GF.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, GF.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, GF.jsx)(UF.e, {
                            name: "clock-rotate-left"
                          }), CS && (0, GF.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: yW("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, GF.jsx)(kS.b, {
                        lobbyGroups: [KW, wW],
                        onLobbyClick: FF => {
                          iC(FF)
                        },
                        keyPrefix: rS.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== bC && (0, GF.jsx)(fF, {
                eventName: bC
              })]
            }), rC && (0, GF.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, GF.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, GF.jsxs)("div", {
                  className: QF()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === sW.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === sW.showWorldsInsteadOfCustomLobbies && (0, GF.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, GF.jsx)(UF.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, GF.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, GF.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), yW("game:worlds")]
                    })]
                  }), !1 === sW.showWorldsInsteadOfCustomLobbies && (0, GF.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, GF.jsx)(UF.e, {
                      name: "joystick"
                    }), (0, GF.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, GF.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), yW("homePage:customLobbies")]
                    })]
                  }), (0, GF.jsx)(eF.N, {
                    onClick: () => {
                      lW("explore")
                    },
                    active: "explore" === pW,
                    children: yW("general:explore")
                  }), (0, GF.jsx)(eF.N, {
                    onClick: () => {
                      lW("favourite")
                    },
                    active: "favourite" === pW,
                    children: yW("homePage:favouriteLobbies")
                  }), (0, GF.jsx)(eF.N, {
                    onClick: () => {
                      lW("owned")
                    },
                    active: "owned" === pW,
                    children: yW("homePage:ownedLobbies")
                  })]
                }), (0, GF.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, GF.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, GF.jsx)(TW.c, {
                      label: "Create",
                      onClick: () => {
                        SW.NotificationProvider.showCustomPopup({
                          body: FF => (0, GF.jsx)(CW.CreateCustomLobby, {
                            gameNameWithVariation: rS.gameNameWithVariation,
                            close: FF
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === XW && (0, GF.jsx)(TW.f, {}), !1 === XW && BW.length > 0 && BW.map((FF => (0, GF.jsx)(TW.d, {
                      customLobby: FF,
                      favouriteLobbies: vS,
                      toggleLikeLobby: eS,
                      showReport: BF.featureFlags.useSocialFeatures && "owned" !== pW
                    }, FF.name)))]
                  }), gC]
                })]
              })
            })]
          }), !rC && gC]
        })
      })
    }

    function MW(FF) {
      let {
        variation: WF,
        isSelected: SF,
        children: CF
      } = FF;
      const dF = eW.e[WF],
        RF = (0, uF.i)(WF, (0, uF.m)(dF)),
        iW = (0, AF.e)(RF),
        eF = (0, hF.c)([(0, uF.f)(WF, (0, uF.b)(dF))]);
      return (0, GF.jsxs)(lF.LinkPreserveSearch, {
        to: (0, sF.y)(WF),
        replace: !0,
        className: QF()("GameInformationVariation", bW.j, {
          SelectedGameInformationVariation: SF
        }),
        onClick: FF => {
          if (!(0, WW.d)(FF)) return;
          const SF = (0, TF.h)(WF);
          PF.h.setItem(SF, WF)
        },
        onMouseEnter: eF.start,
        onMouseLeave: eF.cancel,
        onFocus: eF.start,
        onBlur: eF.cancel,
        style: (0, bW.f)(iW),
        children: [(0, GF.jsx)(bW.d, {
          image: iW
        }), CF]
      })
    }
  },
  5478: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => tW
    });
    var CF = SF(46),
      AF = SF(1266),
      uF = SF(1336),
      hF = SF(2663),
      bW = SF(996),
      dF = SF(1186),
      PF = SF(1198),
      RF = SF(929),
      iW = SF(918),
      eF = SF.n(iW),
      EF = SF(971);

    function QF(FF) {
      let {
        info: WF,
        className: SF
      } = FF;
      return (0, EF.jsxs)("div", {
        className: eF()("GameApprovalInfoDetails", SF),
        children: [(0, EF.jsxs)("div", {
          className: eF()("GameApprovalInfoSummary", WF.overallPassed ? "Passed" : "Failed"),
          children: [(0, EF.jsx)(RF.e, {
            name: WF.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, EF.jsx)("span", {
            children: WF.summary
          })]
        }), WF.rows.length > 0 && (0, EF.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: WF.rows.map((FF => (0, EF.jsxs)("div", {
            className: eF()("GameApprovalInfoRow", FF.passed ? "Passed" : "Failed"),
            children: [(0, EF.jsx)(RF.e, {
              name: FF.passed ? "check" : "xmark"
            }), (0, EF.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, EF.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: FF.label
              }), (0, EF.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: FF.valueText
              })]
            })]
          }, FF.label)))
        })]
      })
    }
    var rW = SF(1046),
      gW = SF(1189);

    function tW(FF) {
      gW.NotificationProvider.showCustomPopup({
        body: () => (0, EF.jsx)(TF, {
          ...FF
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function TF(FF) {
      let {
        schematicId: WF,
        canOverride: SF,
        onApprovalChanged: iW
      } = FF;
      const {
        t: eF
      } = (0, rW.B)(), {
        userContext: gW
      } = (0, bW.b)(), tW = (0, hF.d)(), [TF, aW] = (0, CF.useState)(null), [kW, qW] = (0, CF.useState)(null), [VF, NF] = (0, CF.useState)(!1), DF = (0, CF.useCallback)((() => {
        qW(null), uF.b.getGameApprovalInfo(gW, WF).then((FF => {
          tW.current && aW(FF)
        })).catch((FF => {
          console.error("Failed to get game approval info", FF), tW.current && qW(eF("studio:approvalLoadFailed"))
        }))
      }), [gW, WF, tW, eF]);
      (0, CF.useEffect)((() => {
        DF()
      }), [DF]);
      const LF = FF => {
        VF || (NF(!0), uF.b.setGameApproval(gW, WF, FF).then((() => {
          null === iW || void 0 === iW || iW(), tW.current && DF()
        })).catch((FF => {
          console.error("Failed to set game approval", FF)
        })).finally((() => {
          tW.current && NF(!1)
        })))
      };
      return (0, EF.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, EF.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: eF("studio:approvalTitle")
        }), !TF && !kW && (0, EF.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, EF.jsx)(dF.c, {})
        }), kW && (0, EF.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: kW
        }), TF && (0, EF.jsxs)(EF.Fragment, {
          children: [(0, EF.jsx)(QF, {
            info: TF
          }), SF && (0, EF.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== TF.manualOverride && (0, EF.jsx)(PF.g, {
              tooltipInner: (0, EF.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, EF.jsxs)(AF.k, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  LF(!0)
                },
                disabled: VF,
                children: [(0, EF.jsx)(RF.e, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== TF.manualOverride && (0, EF.jsx)(PF.g, {
              tooltipInner: (0, EF.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, EF.jsxs)(AF.E, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  LF(!1)
                },
                disabled: VF,
                children: [(0, EF.jsx)(RF.e, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== TF.manualOverride && (0, EF.jsx)(PF.g, {
              tooltipInner: (0, EF.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, EF.jsxs)(AF.e, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  LF(null)
                },
                disabled: VF,
                children: [(0, EF.jsx)(RF.e, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  7834: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF
    });
    var CF = SF(1392),
      AF = SF(1085),
      uF = SF(568);

    function hF(FF) {
      return FF = function(FF, WF) {
        var SF;
        const CF = new URLSearchParams(WF),
          AF = CF.get("lobby"),
          uF = CF.get("vm"),
          hF = null !== (SF = AF) && void 0 !== SF ? SF : FF.lobbyName,
          bW = null !== uF && void 0 !== uF ? uF : FF.directJoinVmUrl;
        if (hF === FF.lobbyName && bW === FF.directJoinVmUrl) return FF;
        return {
          ...FF,
          lobbyName: hF,
          directJoinVmUrl: bW
        }
      }(FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), FF = function(FF) {
        if ((0, uF.Q)(FF.directJoinVmUrl)) return FF;
        const WF = (0, AF.bb)(FF.directJoinVmUrl);
        null === WF && (FF.directJoinVmUrl = void 0);
        return FF
      }(FF = function(FF) {
        if ((0, uF.Q)(FF.gameNameWithVariation)) return FF;
        return FF.gameNameWithVariation = (0, CF.j)(FF.gameNameWithVariation), FF
      }(FF))
    }
  },
  34948: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      f: () => CF
    });
    const CF = "skyblockSkills",
      AF = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);