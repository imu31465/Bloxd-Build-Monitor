export const id = 116;
export const ids = [116, 390];
export const modules = {
  35981: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => KF
    });
    var LQ = wQ(307),
      qQ = wQ(3380),
      oQ = wQ(3415),
      DQ = wQ(3408),
      kQ = wQ(3399),
      vQ = wQ(1207),
      mQ = wQ(27),
      uQ = wQ(1725),
      HQ = wQ(1367),
      bQ = wQ(1451),
      YQ = wQ(1070),
      xQ = wQ.n(YQ),
      AQ = wQ(1682),
      tQ = wQ(53),
      eQ = wQ(71),
      MQ = wQ(2278),
      GQ = wQ(1342),
      pQ = wQ(1612),
      cQ = wQ(1140),
      CQ = wQ(3276),
      SQ = wQ(4400),
      iQ = wQ(3361),
      WQ = wQ(1873),
      RQ = wQ(3374),
      OQ = wQ(1736),
      sQ = wQ(1489),
      rQ = wQ(2088),
      IQ = wQ(1348),
      UQ = wQ(2489),
      NQ = wQ(4867),
      TQ = wQ(1107);
    const KQ = 15e3,
      zQ = 2500;

    function lQ(QQ) {
      var FQ;
      let {
        eventName: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, vQ.y)(), qQ = OQ.i[wQ], [oQ, DQ] = (0, tQ.useState)((() => Date.now() >= qQ.endsAt.getTime())), [kQ, mQ] = (0, tQ.useState)("overall"), uQ = function(QQ, FQ) {
        const {
          userContext: wQ,
          isUserContextUpdating: LQ
        } = (0, cQ.e)(), qQ = `${QQ}:${FQ}`, [oQ, DQ] = (0, tQ.useState)({
          requestKey: qQ,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, tQ.useEffect)((() => {
          if (LQ) return;
          let oQ, kQ = !1;
          const vQ = async () => {
            if ("visible" === document.visibilityState) try {
              const LQ = await sQ.b.getGameEventLeaderboard(wQ, {
                event: QQ,
                scope: FQ
              });
              kQ || DQ({
                requestKey: qQ,
                leaderboard: {
                  status: "loaded",
                  leaderboard: LQ
                }
              })
            } catch {
              kQ || DQ((QQ => QQ.requestKey === qQ && "loaded" === QQ.leaderboard.status ? QQ : {
                requestKey: qQ,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            kQ || (oQ = setTimeout(vQ, KQ))
          };
          return vQ(), () => {
            kQ = !0, clearTimeout(oQ)
          }
        }), [QQ, FQ, qQ, wQ, LQ]), oQ.requestKey === qQ ? oQ.leaderboard : {
          status: "loading"
        }
      }(wQ, kQ), HQ = function(QQ) {
        const FQ = (0, tQ.useRef)(null),
          wQ = (0, tQ.useRef)(0),
          LQ = (0, tQ.useRef)(),
          [qQ, oQ] = (0, tQ.useState)({});
        return (0, tQ.useEffect)((() => {
          const qQ = null === QQ || void 0 === QQ ? void 0 : QQ.entries;
          if (!qQ) return;
          const DQ = new Map(qQ.map((QQ => [QQ.player.name, QQ.value]))),
            kQ = FQ.current;
          if (FQ.current = DQ, null === kQ) return;
          const vQ = {};
          for (const [QQ, FQ] of DQ) {
            const LQ = kQ.get(QQ);
            void 0 !== LQ && FQ > LQ && (vQ[QQ] = {
              amount: FQ - LQ,
              key: wQ.current++
            })
          }
          0 !== Object.keys(vQ).length && (oQ(vQ), clearTimeout(LQ.current), LQ.current = setTimeout((() => {
            oQ({})
          }), zQ))
        }), [QQ]), (0, tQ.useEffect)((() => () => {
          clearTimeout(LQ.current)
        }), []), qQ
      }("loaded" === uQ.status ? uQ.leaderboard : null), bQ = function(QQ) {
        const [FQ, wQ] = (0, tQ.useState)(null), LQ = "loaded" === QQ.status ? QQ.leaderboard.goalProgress : void 0;
        return (0, tQ.useEffect)((() => {
          LQ && wQ(LQ)
        }), [LQ]), FQ
      }(uQ), YQ = rQ.d[`profileEffect_${qQ.prizePack}`];
      if (oQ) return null;
      const AQ = "loaded" === uQ.status ? uQ.leaderboard : null,
        eQ = null !== (FQ = null === AQ || void 0 === AQ ? void 0 : AQ.entries) && void 0 !== FQ ? FQ : null,
        MQ = null !== AQ && void 0 !== AQ && AQ.own && null !== eQ && !eQ.some((QQ => QQ.isOwn)) ? AQ.own : null;
      return (0, TQ.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, TQ.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, TQ.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, TQ.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, TQ.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, TQ.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), LQ("gameEvents:live")]
              }), (0, TQ.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [LQ("gameEvents:endsIn"), (0, TQ.jsx)(iQ.b, {
                  toTime: qQ.endsAt,
                  onReachEndOfCountdown: () => {
                    DQ(!0)
                  }
                })]
              })]
            }), (0, TQ.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: LQ(qQ.titleKey)
            }), (0, TQ.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, TQ.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [YQ && (0, TQ.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, TQ.jsx)(YQ, {})
                }), (0, TQ.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, TQ.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: LQ("gameEvents:prize")
                  }), (0, TQ.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: LQ(qQ.prizeNameKey)
                  })]
                })]
              }), (0, TQ.jsx)(jQ, {
                event: qQ,
                progress: bQ
              })]
            })]
          }), (0, TQ.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, TQ.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, TQ.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: LQ(qQ.leaderboard.titleKey)
              }), (0, TQ.jsx)(NQ.c, {
                ariaLabel: LQ("gameEvents:leaderboardScope"),
                options: OQ.e.map((QQ => ({
                  value: QQ,
                  label: LQ(`gameEvents:${QQ}Scope`)
                }))),
                value: kQ,
                onChange: mQ
              })]
            }), "loading" === uQ.status && (0, TQ.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, TQ.jsx)(IQ.c, {})
            }), ("unavailable" === uQ.status || "loaded" === uQ.status && null === eQ) && (0, TQ.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: LQ("gameEvents:leaderboardUnavailable")
            }), null !== eQ && 0 === eQ.length && (0, TQ.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: LQ("friends" === kQ ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== eQ && eQ.length > 0 && (0, TQ.jsx)("ol", {
              className: "GameEventPanelRows",
              children: eQ.map((QQ => {
                const FQ = HQ[QQ.player.name];
                return (0, TQ.jsxs)("li", {
                  className: xQ()("GameEventPanelRow", {
                    GameEventPanelRowOwn: QQ.isOwn,
                    GameEventPanelRowTop: QQ.rank <= 3
                  }),
                  children: [(0, TQ.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", QQ.rank]
                  }), (0, TQ.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, TQ.jsx)(UQ.e, {
                      playerSocialPreview: {
                        ...QQ.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== FQ && (0, TQ.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", FQ.amount.toLocaleString()]
                  }, FQ.key), (0, TQ.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: QQ.value.toLocaleString()
                  })]
                }, QQ.player.name)
              }))
            }), MQ && (0, TQ.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, TQ.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", MQ.rank.toLocaleString()]
              }), (0, TQ.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: LQ("gameEvents:yourPlace")
              }), (0, TQ.jsx)("span", {
                className: "GameEventPanelScore",
                children: MQ.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function jQ(QQ) {
      let {
        event: FQ,
        progress: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, vQ.y)(), qQ = null !== wQ && FQ.prizeGoals.some(((QQ, FQ) => wQ[FQ] >= QQ.target));
      return (0, TQ.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, TQ.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: LQ(qQ ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, TQ.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: FQ.prizeGoals.map(((QQ, FQ) => {
            const qQ = null === wQ ? null : Math.min(wQ[FQ], QQ.target);
            return (0, TQ.jsxs)(tQ.Fragment, {
              children: [FQ > 0 && (0, TQ.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: LQ("gameEvents:goalsOr")
              }), (0, TQ.jsxs)("div", {
                className: xQ()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: qQ === QQ.target
                }),
                children: [(0, TQ.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: LQ(QQ.labelKey)
                }), (0, TQ.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, TQ.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== qQ && void 0 !== qQ ? qQ : 0) / QQ.target * 100 + "%"
                    }
                  }), null !== qQ && (0, TQ.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [qQ.toLocaleString(), " / ", QQ.target.toLocaleString()]
                  })]
                })]
              })]
            }, QQ.board)
          }))
        })]
      })
    }
    var aQ = wQ(1539),
      XQ = wQ(1595),
      fQ = wQ(1053),
      VQ = wQ(720),
      hQ = wQ(3356);

    function JQ(QQ) {
      let {
        gameNameWithVariation: FQ
      } = QQ;
      const wQ = (0, aQ.G)(FQ),
        [LQ, qQ] = (0, tQ.useState)(null);
      if ((0, tQ.useEffect)((() => {
          if (!wQ) return;
          let QQ = !0;
          return (0, XQ.i)(wQ).then((FQ => {
            QQ && qQ(FQ)
          })).catch((QQ => {
            console.error(`Failed to load the page copy for ${wQ.name}`, QQ)
          })), () => {
            QQ = !1
          }
        }), [wQ]), !wQ || !LQ || LQ.name !== wQ.name) return null;
      const oQ = (0, XQ.g)(LQ),
        DQ = new Set((0, fQ.b)((0, VQ.i)()).map((QQ => (0, aQ.y)(QQ)))),
        kQ = LQ.similarGames.filter((QQ => DQ.has((0, aQ.y)(QQ))));
      return (0, TQ.jsx)("div", {
        className: "GamePageContent",
        children: (0, TQ.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, TQ.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, TQ.jsx)("h2", {
              children: oQ.whatIs
            }), LQ.whatIs.map((QQ => (0, TQ.jsx)("p", {
              children: QQ
            }, QQ)))]
          }), (0, TQ.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, TQ.jsx)("h2", {
              children: oQ.howToPlay
            }), LQ.howToPlay.map((QQ => (0, TQ.jsx)("p", {
              children: QQ
            }, QQ)))]
          }), (0, TQ.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, TQ.jsx)("h2", {
              children: oQ.features
            }), (0, TQ.jsx)("ul", {
              children: LQ.features.map((QQ => (0, TQ.jsx)("li", {
                children: QQ
              }, QQ)))
            })]
          }), (0, TQ.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, TQ.jsx)("h2", {
              children: oQ.tips
            }), (0, TQ.jsx)("ul", {
              children: LQ.tips.map((QQ => (0, TQ.jsx)("li", {
                children: QQ
              }, QQ)))
            })]
          }), (0, TQ.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, TQ.jsx)("h2", {
              children: oQ.faq
            }), LQ.faq.map((QQ => {
              let {
                question: FQ,
                answer: wQ
              } = QQ;
              return (0, TQ.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, TQ.jsx)("h3", {
                  children: FQ
                }), (0, TQ.jsx)("p", {
                  children: wQ
                })]
              }, FQ)
            }))]
          }), kQ.length > 0 && (0, TQ.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, TQ.jsx)("h2", {
              children: oQ.similarGames
            }), (0, TQ.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: kQ.map((QQ => (0, TQ.jsx)("li", {
                children: (0, TQ.jsx)(hQ.f, {
                  source: {
                    type: "game",
                    gameNameWithVariation: QQ
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, QQ)))
            })]
          })]
        })
      })
    }
    var EQ = wQ(1079),
      nQ = wQ(96),
      gQ = wQ(1147),
      PQ = wQ(9149),
      ZQ = wQ(1658),
      yQ = wQ(1515),
      BQ = wQ(1503),
      dQ = wQ(1607),
      QF = wQ(1461),
      FF = wQ(1362),
      wF = wQ(35988),
      LF = wQ(1246),
      qF = wQ(1038),
      oF = wQ(317),
      DF = wQ(1047),
      kF = wQ(1532),
      vF = wQ(8681),
      mF = wQ(17),
      uF = wQ(2444),
      HF = wQ(745),
      bF = wQ(1237),
      YF = wQ(6339),
      xF = wQ(3363);

    function AF(QQ) {
      let {
        preview: FQ,
        isBroken: wQ
      } = QQ;
      const LQ = null === FQ ? null : (0, oQ.e)(FQ, "small"),
        DQ = (0, qQ.f)(null !== LQ && void 0 !== LQ ? LQ : oQ.q);
      return null === FQ ? (0, TQ.jsx)("div", {
        className: xQ()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: wQ
        }),
        children: (0, TQ.jsx)(EQ.c, {
          name: wQ ? "triangle-exclamation" : "star"
        })
      }) : (0, TQ.jsx)("div", {
        className: xQ()("FeaturedGamesPopupSlotThumbnail", kQ.j),
        style: (0, kQ.f)(DQ),
        role: "img",
        "aria-label": FQ.name,
        children: (0, TQ.jsx)(kQ.b, {
          image: DQ
        })
      })
    }

    function tF(QQ) {
      let {
        schematicId: FQ,
        gameName: wQ
      } = QQ;
      const {
        userContext: qQ
      } = (0, cQ.e)(), oQ = (0, xF.c)(), [DQ, kQ] = (0, tQ.useState)(null), [vQ, mQ] = (0, tQ.useState)(null), [uQ, HQ] = (0, tQ.useState)(!1), YQ = (0, tQ.useCallback)((() => {
        mQ(null), sQ.b.getFeaturedGames(qQ).then((QQ => {
          oQ.current && kQ(QQ.slots)
        })).catch((QQ => {
          console.error("Failed to get featured games", QQ), oQ.current && mQ("Failed to load featured games")
        }))
      }), [qQ, oQ]);
      (0, tQ.useEffect)((() => {
        YQ()
      }), [YQ]);
      const xQ = (QQ, FQ) => {
        uQ || (HQ(!0), sQ.b.setFeaturedGame(qQ, QQ, FQ).then((() => {
          oQ.current && YQ()
        })).catch((QQ => {
          console.error("Failed to set featured game", QQ), oQ.current && mQ("Failed to update the featured slot")
        })).finally((() => {
          oQ.current && HQ(!1)
        })))
      };
      return (0, TQ.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, TQ.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !DQ && !vQ && (0, TQ.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, TQ.jsx)(IQ.c, {})
        }), vQ && (0, TQ.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: vQ
        }), DQ && (0, TQ.jsxs)(TQ.Fragment, {
          children: [(0, TQ.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: DQ.map((QQ => {
              const wQ = QQ.schematicId === FQ,
                qQ = null === QQ.schematicId,
                {
                  categoryGroup: oQ
                } = LQ.G[QQ.slotId];
              return (0, TQ.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, TQ.jsx)(AF, {
                  preview: QQ.preview,
                  isBroken: !qQ
                }), (0, TQ.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, TQ.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, LQ.ab)(oQ), " \xb7 position", " ", (0, LQ.K)(QQ.slotId, LQ.Kb) + 1, " of", " ", (0, LQ.Jb)(oQ, LQ.Kb)]
                  }), qQ && (0, TQ.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !qQ && null !== QQ.preview && (0, TQ.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: QQ.preview.name
                  }), !qQ && null === QQ.preview && (0, TQ.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, TQ.jsx)(EQ.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, TQ.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [qQ && (0, TQ.jsxs)(bQ.s, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      xQ(QQ.slotId, FQ)
                    },
                    disabled: uQ,
                    children: [(0, TQ.jsx)(EQ.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !qQ && !wQ && (0, TQ.jsxs)(bQ.L, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      xQ(QQ.slotId, FQ)
                    },
                    disabled: uQ,
                    children: [(0, TQ.jsx)(EQ.c, {
                      name: "star"
                    }), " Replace"]
                  }), !qQ && (0, TQ.jsxs)(bQ.F, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      xQ(QQ.slotId, null)
                    },
                    disabled: uQ,
                    children: [(0, TQ.jsx)(EQ.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, QQ.slotId)
            }))
          }), (0, TQ.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var eF = wQ(4516),
      MF = wQ(4443),
      GF = wQ(3451);
    const pF = 8,
      cF = 12;

    function CF(QQ) {
      let {
        customLobbies: FQ,
        favouriteLobbies: wQ,
        toggleLikeLobby: LQ,
        showReport: qQ
      } = QQ;
      const [oQ, DQ] = (0, tQ.useState)(pF);
      return (0, tQ.useEffect)((() => {
        if (oQ >= FQ.length) return;
        let QQ = !0;
        return (0, GF.d)().then((() => {
          QQ && DQ(oQ + cF)
        })), () => {
          QQ = !1
        }
      }), [oQ, FQ.length]), (0, TQ.jsx)(TQ.Fragment, {
        children: FQ.slice(0, oQ).map((QQ => (0, TQ.jsx)(MF.f, {
          customLobby: QQ,
          favouriteLobbies: wQ,
          toggleLikeLobby: LQ,
          showReport: qQ
        }, QQ.name)))
      })
    }
    var SF = wQ(4446),
      iF = wQ(4457),
      WF = wQ(4424),
      RF = wQ(3443),
      OF = wQ(8677),
      sF = wQ(220);
    const rF = {
      skyblock: [wQ(36021).d]
    };
    var IF = wQ(619);
    const UF = {
      listedVariations: null,
      backgroundImage: oQ.q,
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

    function NF(QQ, FQ) {
      const wQ = HF.f[QQ.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, oQ.e)(QQ, "large"),
        badges: [],
        category: QQ.gameCategory,
        title: void 0 !== (null === wQ || void 0 === wQ ? void 0 : wQ.title) ? FQ(wQ.title) : QQ.name,
        variationTitle: null,
        description: void 0 !== (null === wQ || void 0 === wQ ? void 0 : wQ.description) ? FQ(wQ.description) : QQ.description,
        ownerSocialPreviewWithoutLocation: "owner" in QQ ? QQ.owner : null,
        ccu: QQ.ccu,
        favourites: QQ.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in QQ ? QQ.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function TF(QQ) {
      var FQ, wQ, LQ;
      return null !== (FQ = null !== (wQ = (0, sF.k)() ? function(QQ) {
        for (const [FQ, wQ] of Object.entries(rF)) {
          const LQ = [FQ, ...wQ.map((QQ => (0, oF.Sb)(FQ, QQ)))];
          if (LQ.includes(QQ)) return LQ
        }
        return null
      }(QQ) : null) && void 0 !== wQ ? wQ : null === (LQ = HF.e[QQ]) || void 0 === LQ ? void 0 : LQ.listedVariations) && void 0 !== FQ ? FQ : null
    }

    function KF() {
      const {
        gameNameWithVariation: QQ
      } = (0, yQ.y)();
      if ((0, tQ.useEffect)(RF.r, []), QQ && (0, LF.q)(QQ)) return (0, TQ.jsx)(zF, {
        urlId: QQ
      }, QQ);
      const FQ = QQ && (0, qF.f)(QQ) ? QQ : "firstParty";
      return (0, TQ.jsx)(lF, {}, FQ)
    }

    function zF(QQ) {
      let {
        urlId: FQ
      } = QQ;
      const {
        userContext: wQ,
        isUserContextUpdating: LQ
      } = (0, cQ.e)(), qQ = (0, tQ.useMemo)((() => (0, ZQ.h)(FQ)), [FQ]);
      (0, tQ.useMemo)((() => {
        if (null === qQ) return;
        const QQ = gQ.userContextManager.peekCurrentUserContext();
        (null !== QQ ? sQ.b.getGame(QQ, qQ.schematicId) : gQ.userContextManager.getCurrentUserContext().then((QQ => sQ.b.getGame(QQ, qQ.schematicId)))).catch((QQ => {
          console.error(`Failed to get the custom game ${qQ.schematicId}`, QQ), (0, ZQ.f)(FQ)
        }))
      }), [qQ, FQ]);
      const [oQ, DQ] = (0, tQ.useState)(null), kQ = (0, PQ.b)();
      (0, tQ.useEffect)((() => {
        if (null !== qQ || LQ) return;
        let QQ = !0;
        return sQ.b.getGameByUrlId(wQ, FQ).then((wQ => {
          QQ && DQ({
            urlId: FQ,
            game: wQ
          })
        })).catch((wQ => {
          console.error(`Failed to find the custom game with urlId ${FQ}`, wQ), QQ && (0, BQ.navigateToHomePage)()
        })), () => {
          QQ = !1
        }
      }), [FQ, qQ, LQ, wQ]);
      const vQ = null !== qQ && void 0 !== qQ ? qQ : (null === oQ || void 0 === oQ ? void 0 : oQ.urlId) === FQ ? oQ.game : null;
      return null === vQ ? (0, TQ.jsx)(IQ.c, {}) : kQ ? (0, TQ.jsx)(lF, {
        gameNameWithVariation: (0, qF.r)(vQ.schematicId),
        knownCustomGame: vQ
      }, vQ.schematicId) : null
    }

    function lF(QQ) {
      var FQ, wQ, DQ, YQ, OQ, rQ, IQ, NQ;
      let {
        gameNameWithVariation: KQ,
        knownCustomGame: zQ = null
      } = QQ;
      const {
        t: jQ
      } = (0, vQ.y)();
      (0, uF.h)();
      const XQ = (0, uF.m)(),
        {
          userContext: fQ,
          isUserContextUpdating: VQ
        } = (0, cQ.e)(),
        hQ = (0, WF.e)(),
        gQ = (0, BQ.useNavigatePreserveSearch)(),
        PQ = (0, yQ.y)(),
        ZQ = (0, tQ.useMemo)((() => KQ ? {
          gameNameWithVariation: KQ
        } : PQ), [KQ, PQ]),
        QF = (0, vF.d)(ZQ),
        LF = (0, tQ.useMemo)((() => {
          const QQ = function(QQ) {
            var FQ, wQ;
            const LQ = TF(QQ);
            if (!LQ || 0 === LQ.length || LQ.includes(QQ)) return QQ;
            const qQ = mQ.i.getItem((0, MQ.e)(QQ));
            if (qQ && LQ.includes(qQ)) return qQ;
            return null !== (FQ = null === (wQ = HF.e[QQ]) || void 0 === wQ ? void 0 : wQ.defaultListedVariation) && void 0 !== FQ ? FQ : LQ[0]
          }(QF.gameNameWithVariation);
          return QQ === QF.gameNameWithVariation ? QF : {
            ...QF,
            gameNameWithVariation: QQ
          }
        }), [QF]);
      (0, tQ.useEffect)((() => {
        const QQ = QF.gameNameWithVariation;
        LF.gameNameWithVariation !== QQ && QQ !== (0, oF.Wb)(QQ) && gQ((0, aQ.B)(LF.gameNameWithVariation), {
          replace: !0
        })
      }), [LF.gameNameWithVariation, QF.gameNameWithVariation, gQ]);
      const [xF, AF] = (0, tQ.useState)(""), GF = tQ.useRef(null), [pF, cF] = (0, tQ.useState)(), RF = (0, qF.f)(LF.gameNameWithVariation), sF = (0, tQ.useMemo)((() => RF ? null : function(QQ, FQ, wQ) {
        var LQ, qQ;
        const DQ = HF.e[QQ];
        return (0, IF.F)(DQ) ? null : {
          listedVariations: TF(QQ),
          backgroundImage: (0, oQ.j)(QQ, (0, oQ.c)(DQ)),
          badges: (0, uQ.filterBadges)(DQ.badges),
          category: DQ.type,
          title: wQ(DQ.title),
          variationTitle: DQ.variationTitle ? wQ(DQ.variationTitle) : null,
          description: wQ(DQ.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== FQ ? null !== (LQ = FQ[QQ]) && void 0 !== LQ ? LQ : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: DQ.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: DQ.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (qQ = DQ.canCreateCustomLobbies) || void 0 === qQ || qQ,
          countdownInformation: (0, MQ.d)(QQ)
        }
      }(LF.gameNameWithVariation, XQ, jQ)), [RF, LF.gameNameWithVariation, XQ, jQ]), [rF, KF] = (0, tQ.useState)(!1), [zF, lF] = (0, tQ.useState)((() => zQ ? NF(zQ, jQ) : UF)), aF = null !== sF && void 0 !== sF ? sF : zF, [XF] = (0, tQ.useState)(aF === UF), fF = (0, qQ.f)(aF.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: VF,
        recentlyPlayedCustomLobbies: hF
      } = (0, tQ.useMemo)((() => function(QQ, FQ, wQ, LQ) {
        var qQ;
        const oQ = QQ => {
            const wQ = (0, qF.l)(QQ),
              LQ = FQ.find((FQ => "custom" === FQ.type ? FQ.schematicId === wQ : FQ.gameNameWithVariation === QQ));
            return LQ ? [...LQ.recentLobbies] : []
          },
          DQ = (0, uQ.getRecentGameNameWithVariationLobbiesKey)(QQ),
          kQ = null !== (qQ = mQ.i.getItem(DQ)) && void 0 !== qQ ? qQ : [],
          vQ = [...oQ(QQ), ...kQ],
          HQ = [];
        for (const mQ of vQ)(0, bF.S)(mQ) && !HQ.includes(mQ) && HQ.push(mQ);
        let bQ = vQ;
        if (wQ) {
          const QQ = oQ("classic_worlds"),
            FQ = vQ.filter((FQ => !QQ.includes(FQ)));
          bQ = [...QQ, ...FQ]
        }
        const YQ = [],
          xQ = !1 === LQ ? [] : bQ;
        for (const mQ of xQ)(0, bF.S)(mQ) || YQ.includes(mQ) || YQ.push(mQ);
        return {
          recentlyPlayedPublicLobbies: HQ,
          recentlyPlayedCustomLobbies: YQ
        }
      }(LF.gameNameWithVariation, hQ, aF.showWorldsInsteadOfCustomLobbies, aF.canCreateCustomLobbies)), [LF.gameNameWithVariation, hQ, aF.showWorldsInsteadOfCustomLobbies, aF.canCreateCustomLobbies]), [JF, EF] = (0, tQ.useState)(!0), [nF, gF] = (0, tQ.useState)([]), [PF, ZF] = (0, tQ.useState)(null), [yF, BF] = (0, tQ.useState)("explore"), dF = (0, tQ.useRef)(!1), Qw = (0, tQ.useCallback)((QQ => {
        (0, eQ.unstable_batchedUpdates)((() => {
          cF(QQ), lF((FQ => ({
            ...NF(QQ, jQ),
            isFavourite: FQ.isFavourite
          })))
        }))
      }), [jQ]);
      (0, tQ.useEffect)((() => {
        null === mF.c.get("gameEntrySource") && (0, mF.k)("gameInformationPageDirect")
      }), []);
      const Fw = (0, tQ.useRef)(null);
      (0, tQ.useEffect)((() => {
        const QQ = QQ => {
            Fw.current = QQ.target instanceof Element ? QQ.target.closest("a, button") : null
          },
          FQ = QQ => {
            "Tab" === QQ.key && (Fw.current = null)
          };
        return document.addEventListener("pointerdown", QQ, !0), document.addEventListener("keydown", FQ, !0), () => {
          document.removeEventListener("pointerdown", QQ, !0), document.removeEventListener("keydown", FQ, !0)
        }
      }), []), (0, CQ.d)("Enter", (QQ => {
        const FQ = QQ.target instanceof Element ? QQ.target : null;
        if (QQ.defaultPrevented || null !== FQ && void 0 !== FQ && FQ.closest("input, textarea, select")) return;
        const wQ = null === FQ || void 0 === FQ ? void 0 : FQ.closest("a, button");
        wQ && wQ !== Fw.current || (QQ.preventDefault(), uw())
      })), (0, SQ.c)(BQ.navigateToHomePage);
      const ww = VF.length > 0 || hF.length > 0,
        Lw = !aF.useRejoinLastLobbyButton || 0 === VF.length,
        qw = RF && null === aF.ownerSocialPreviewWithoutLocation,
        ow = fQ.getPlayerName() === (null === pF || void 0 === pF || null === (FQ = pF.owner) || void 0 === FQ ? void 0 : FQ.name),
        Dw = null !== (wQ = null === (DQ = aF.badges.find((QQ => "event" === QQ.type))) || void 0 === DQ ? void 0 : DQ.event) && void 0 !== wQ ? wQ : null,
        kw = Lw ? bQ.m : bQ.f,
        vw = (0, TQ.jsx)(HQ.f, {
          tooltipInner: (0, TQ.jsx)("div", {
            children: jQ("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, TQ.jsx)(kw, {
            className: "GameInformationButton",
            padDefaultFocus: Lw,
            showPress: !0,
            onClick: () => {
              uw()
            },
            children: (0, TQ.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Lw && (0, TQ.jsxs)(TQ.Fragment, {
                children: [(0, TQ.jsx)(EQ.c, {
                  name: "play"
                }), " "]
              }), jQ("homePage:quickPlay")]
            })
          })
        });
      (0, tQ.useEffect)((() => {
        if (!RF || VQ) return;
        let QQ = !0;
        const FQ = (0, qF.l)(LF.gameNameWithVariation);
        return sQ.b.getGame(fQ, FQ).then((FQ => {
          QQ && Qw(FQ)
        })).catch((FQ => {
          console.error("Failed to get Custom Game information", FQ), QQ && (0, BQ.navigateToHomePage)()
        })), sQ.b.getFavouriteGames(fQ).then((wQ => {
          QQ && lF((QQ => ({
            ...QQ,
            isFavourite: wQ.includes(FQ)
          })))
        })).catch((FQ => {
          console.error("Failed to get favourite games", FQ), QQ && KF(!0)
        })), () => {
          QQ = !1
        }
      }), [RF, VQ, LF.gameNameWithVariation, Qw, fQ]);
      const mw = !RF && null === sF;

      function uw(QQ) {
        (0, OF.i)(), gQ((0, GQ.e)(LF.gameNameWithVariation, QQ))
      }(0, tQ.useEffect)((() => {
        mw && (0, BQ.navigateToHomePage)()
      }), [mw]), (0, tQ.useEffect)((() => {
        if (!1 === aF.canCreateCustomLobbies) return;
        let QQ = !0;
        return null !== aF.showWorldsInsteadOfCustomLobbies && !1 === VQ && (EF(!0), sQ.b.getFavouriteLobbies(fQ).then((QQ => {
          ZF(QQ)
        })), sQ.b.getOpenCustomLobbies(fQ, {
          gameNameWithVariation: aF.showWorldsInsteadOfCustomLobbies ? "classic" : LF.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === yF,
          onlyFavouriteLobbies: "favourite" === yF
        }).then((FQ => {
          QQ && (0, eQ.unstable_batchedUpdates)((() => {
            gF(FQ), EF(!1)
          }))
        })).catch((FQ => {
          console.error("Failed to get open custom lobbies", FQ), QQ && EF(!1)
        }))), () => {
          QQ = !1
        }
      }), [VQ, LF, yF, aF.showWorldsInsteadOfCustomLobbies, aF.canCreateCustomLobbies, fQ]);
      const Hw = (0, tQ.useCallback)((async QQ => {
          try {
            if (!PF) return;
            PF.includes(QQ) ? (sQ.b.unfavouriteLobby(fQ, QQ), ZF(PF.filter((FQ => FQ !== QQ)))) : (sQ.b.favouriteLobby(fQ, QQ).catch((QQ => {
              console.error("Failed to favourite lobby", QQ)
            })), ZF([...PF, QQ]))
          } catch (FQ) {
            console.error("Failed to like lobby", FQ)
          }
        }), [fQ, PF]),
        bw = (null === pF || void 0 === pF ? void 0 : pF.schematicId) === (0, qF.l)(QF.gameNameWithVariation) ? pF : null,
        Yw = bw && (0, aQ.K)(QF.gameNameWithVariation, (QQ => jQ(QQ)), bw);
      (0, dQ.h)(bw && (0, aQ.B)(QF.gameNameWithVariation, bw));
      const xw = nQ.featureFlags.canUseCustomLobbies && !0 === aF.canCreateCustomLobbies,
        Aw = (0, TQ.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, TQ.jsx)(JQ, {
            gameNameWithVariation: LF.gameNameWithVariation
          })
        });
      return (0, TQ.jsx)(TQ.Fragment, {
        children: (0, TQ.jsxs)("article", {
          className: xQ()("GameInformation", {
            GameInformationFadeIn: XF,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (YQ = aF.countdownInformation) || void 0 === YQ ? void 0 : YQ.type)
          }),
          children: [Yw && (0, TQ.jsx)(pQ.c, {
            meta: Yw
          }), (0, TQ.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, TQ.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, TQ.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, TQ.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, TQ.jsx)("div", {
                  className: xQ()("GameInformationTopBackgroundImage", kQ.j),
                  style: (0, kQ.f)(fF),
                  children: (0, TQ.jsx)(kQ.b, {
                    image: fF
                  })
                })]
              }), (0, TQ.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, TQ.jsx)(eF.c, {}), (0, TQ.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, TQ.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, TQ.jsxs)("div", {
                      className: xQ()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: qw
                      }),
                      children: [aF.badges.map((QQ => (0, TQ.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${QQ.type}`,
                        children: (0, TQ.jsx)(RQ.b, {
                          badge: QQ
                        })
                      }, QQ.type))), RF && (0, TQ.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, TQ.jsx)(WQ.e, {
                          text: (0, LQ.Y)({
                            type: "playerCrafted"
                          })
                        })
                      }), aF.category && (0, TQ.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, TQ.jsx)(WQ.e, {
                          text: [{
                            str: (0, LQ._)(aF.category).toUpperCase()
                          }]
                        })
                      }), null !== aF.ccu && (0, TQ.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, TQ.jsx)(EQ.c, {
                          name: "user"
                        }), (0, bF.W)(aF.ccu), " online"]
                      }), null !== aF.ownerSocialPreviewWithoutLocation && (0, TQ.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, TQ.jsx)("span", {
                          children: "Made by"
                        }), (0, TQ.jsx)(UQ.e, {
                          playerSocialPreview: {
                            ...aF.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), qw && (0, TQ.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, TQ.jsx)("span", {
                          children: "Made by"
                        }), (0, TQ.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== aF.favourites && (null !== aF.isFavourite || RF && !rF) && (0, TQ.jsx)(bQ.w, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== dF.current && (dF.current = !0, null !== aF.isFavourite)) {
                              const QQ = (0, qF.l)(LF.gameNameWithVariation);
                              let FQ;
                              aF.isFavourite ? (FQ = -1, sQ.b.unfavouriteGame(fQ, QQ).catch((QQ => {
                                console.error("Failed to get unfavourite game", QQ)
                              })).finally((() => {
                                dF.current = !1
                              }))) : (FQ = 1, sQ.b.favouriteGame(fQ, QQ).catch((QQ => {
                                console.error("Failed to get favourite game", QQ)
                              })).finally((() => {
                                dF.current = !1
                              }))), lF((QQ => ({
                                ...QQ,
                                isFavourite: !QQ.isFavourite
                              }))), lF((QQ => ({
                                ...QQ,
                                favourites: QQ.favourites + FQ
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (OQ = aF.isFavourite) && void 0 !== OQ && OQ,
                        disabled: null === aF.isFavourite,
                        className: xQ()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === aF.isFavourite
                        })
                      }, null === aF.isFavourite ? "pending" : "known"), RF && !qw && nQ.featureFlags.useSocialFeatures && !ow && (0, TQ.jsx)(SF.e, {
                        targetType: "customGame",
                        targetId: (0, qF.l)(LF.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (fQ.playerHasRank("developer") || fQ.playerHasRank("admin") && ow) && (0, TQ.jsxs)(bQ.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          gQ((0, kF.r)((0, DF.h)(LF.gameNameWithVariation, !0)))
                        },
                        children: [(0, TQ.jsx)(EQ.c, {
                          name: "star-christmas"
                        }), " ", jQ("studio:viewInStudio")]
                      }), RF && fQ.playerHasRank("developer") && (0, TQ.jsxs)(bQ.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, YF.c)({
                            schematicId: (0, qF.l)(LF.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, TQ.jsx)(EQ.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), RF && fQ.playerHasRank("developer") && (0, TQ.jsxs)(bQ.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          FF.NotificationProvider.showCustomPopup({
                            body: () => (0, TQ.jsx)(tF, {
                              schematicId: (0, qF.l)(LF.gameNameWithVariation),
                              gameName: aF.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, TQ.jsx)(EQ.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (rQ = aF.countdownInformation) || void 0 === rQ ? void 0 : rQ.type) && (0, TQ.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, TQ.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, TQ.jsx)(iQ.b, {
                            toTime: aF.countdownInformation.countdownToTime
                          })]
                        }), (0, TQ.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: aF.countdownInformation.previewText
                        })]
                      })]
                    }, qw ? "pending" : "shown"), (0, TQ.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, TQ.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, TQ.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [aF.title, " ", aF.variationTitle && (null === (IQ = HF.e[LF.gameNameWithVariation]) || void 0 === IQ ? void 0 : IQ.variationThumbnailUseBigRatio) && (0, TQ.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: aF.variationTitle
                          })]
                        })
                      }), aF.listedVariations && aF.listedVariations.length > 0 && (0, TQ.jsx)("div", {
                        className: xQ()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (NQ = HF.e[LF.gameNameWithVariation]) || void 0 === NQ ? void 0 : NQ.variationThumbnailUseBigRatio
                        }),
                        children: aF.listedVariations.map((QQ => {
                          var FQ, wQ;
                          return (0, TQ.jsxs)(jF, {
                            variation: QQ,
                            isSelected: LF.gameNameWithVariation === QQ,
                            children: [null !== XQ && (0, TQ.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, TQ.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, TQ.jsx)(EQ.c, {
                                  name: "user"
                                }), " ", (0, bF.W)(null !== (FQ = XQ[QQ]) && void 0 !== FQ ? FQ : 0)]
                              })
                            }), (0, TQ.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: jQ(null !== (wQ = HF.e[QQ].variationTitle) && void 0 !== wQ ? wQ : HF.e[QQ].title)
                            }), (0, TQ.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, uQ.filterBadges)(HF.e[QQ].badges).map((QQ => (0, TQ.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + QQ.type,
                                children: (0, TQ.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, TQ.jsx)(RQ.b, {
                                    badge: QQ
                                  })
                                })
                              }, QQ.type)))
                            })]
                          }, QQ)
                        }))
                      })]
                    }), aF.description && (0, TQ.jsx)("p", {
                      className: "GameInformationDescription",
                      children: aF.description
                    })]
                  }), (0, TQ.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, TQ.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Lw && (0, TQ.jsx)(HQ.f, {
                        tooltipInner: (0, TQ.jsx)("div", {
                          children: jQ("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, TQ.jsx)(bQ.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            uw(VF[0])
                          },
                          children: (0, TQ.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, TQ.jsx)(EQ.c, {
                              name: "play"
                            }), " ", jQ("homePage:rejoinLobbyNumber", {
                              number: VF[0]
                            })]
                          })
                        })
                      }), Lw && vw]
                    }), (0, TQ.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Lw && vw, (0, TQ.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, TQ.jsx)(EQ.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, TQ.jsx)(AQ.b, {
                          className: "JoinLobbyInput",
                          placeholderText: jQ("homePage:lobbyName"),
                          maxLength: bF.T,
                          domRef: GF,
                          onValueChange: QQ => {
                            QQ = (0, bF.Cb)(QQ), AF(QQ)
                          },
                          onEnter: () => {
                            0 === xF.length ? uw(VF[0]) : uw(xF)
                          }
                        }), (0, TQ.jsx)(bQ.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === xF.length ? uw(VF[0]) : uw(xF)
                          },
                          children: jQ("general:join")
                        })]
                      })]
                    }), (0, TQ.jsxs)("section", {
                      className: xQ()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !ww
                      }),
                      children: [(0, TQ.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, TQ.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, TQ.jsx)(EQ.c, {
                            name: "clock-rotate-left"
                          }), ww && (0, TQ.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: jQ("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, TQ.jsx)(iF.d, {
                        lobbyGroups: [VF, hF],
                        onLobbyClick: QQ => {
                          uw(QQ)
                        },
                        keyPrefix: LF.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== Dw && (0, TQ.jsx)(lQ, {
                eventName: Dw
              })]
            }), xw && (0, TQ.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, TQ.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, TQ.jsxs)("div", {
                  className: xQ()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === aF.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === aF.showWorldsInsteadOfCustomLobbies && (0, TQ.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, TQ.jsx)(EQ.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, TQ.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, TQ.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), jQ("game:worlds")]
                    })]
                  }), !1 === aF.showWorldsInsteadOfCustomLobbies && (0, TQ.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, TQ.jsx)(EQ.c, {
                      name: "joystick"
                    }), (0, TQ.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, TQ.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), jQ("homePage:customLobbies")]
                    })]
                  }), (0, TQ.jsx)(bQ.L, {
                    onClick: () => {
                      BF("explore")
                    },
                    active: "explore" === yF,
                    children: jQ("general:explore")
                  }), (0, TQ.jsx)(bQ.L, {
                    onClick: () => {
                      BF("favourite")
                    },
                    active: "favourite" === yF,
                    children: jQ("homePage:favouriteLobbies")
                  }), (0, TQ.jsx)(bQ.L, {
                    onClick: () => {
                      BF("owned")
                    },
                    active: "owned" === yF,
                    children: jQ("homePage:ownedLobbies")
                  })]
                }), (0, TQ.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, TQ.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, TQ.jsx)(MF.b, {
                      label: "Create",
                      onClick: () => {
                        FF.NotificationProvider.showCustomPopup({
                          body: QQ => (0, TQ.jsx)(wF.CreateCustomLobby, {
                            gameNameWithVariation: LF.gameNameWithVariation,
                            close: QQ
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === JF && (0, TQ.jsx)(MF.g, {}), !1 === JF && (0, TQ.jsx)(CF, {
                      customLobbies: nF,
                      favouriteLobbies: PF,
                      toggleLikeLobby: Hw,
                      showReport: nQ.featureFlags.useSocialFeatures && "owned" !== yF
                    })]
                  }), Aw]
                })]
              })
            })]
          }), !xw && Aw]
        })
      })
    }

    function jF(QQ) {
      let {
        variation: FQ,
        isSelected: wQ,
        children: LQ
      } = QQ;
      const vQ = HF.e[FQ],
        uQ = (0, oQ.j)(FQ, (0, oQ.m)(vQ)),
        HQ = (0, qQ.f)(uQ),
        bQ = (0, DQ.g)([(0, oQ.i)(FQ, (0, oQ.c)(vQ))]);
      return (0, TQ.jsxs)(BQ.LinkPreserveSearch, {
        to: (0, aQ.B)(FQ),
        replace: !0,
        className: xQ()("GameInformationVariation", kQ.j, {
          SelectedGameInformationVariation: wQ
        }),
        onClick: QQ => {
          if (!(0, QF.c)(QQ)) return;
          const wQ = (0, MQ.e)(FQ);
          mQ.i.setItem(wQ, FQ)
        },
        onMouseEnter: bQ.start,
        onMouseLeave: bQ.cancel,
        onFocus: bQ.start,
        onBlur: bQ.cancel,
        style: (0, kQ.f)(HQ),
        children: [(0, TQ.jsx)(kQ.b, {
          image: HQ
        }), LQ]
      })
    }
  },
  6339: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => eQ
    });
    var LQ = wQ(53),
      qQ = wQ(1451),
      oQ = wQ(1489),
      DQ = wQ(3363),
      kQ = wQ(1140),
      vQ = wQ(1348),
      mQ = wQ(1367),
      uQ = wQ(1079),
      HQ = wQ(1070),
      bQ = wQ.n(HQ),
      YQ = wQ(1107);

    function xQ(QQ) {
      let {
        info: FQ,
        className: wQ
      } = QQ;
      return (0, YQ.jsxs)("div", {
        className: bQ()("GameApprovalInfoDetails", wQ),
        children: [(0, YQ.jsxs)("div", {
          className: bQ()("GameApprovalInfoSummary", FQ.overallPassed ? "Passed" : "Failed"),
          children: [(0, YQ.jsx)(uQ.c, {
            name: FQ.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, YQ.jsx)("span", {
            children: FQ.summary
          })]
        }), FQ.rows.length > 0 && (0, YQ.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: FQ.rows.map((QQ => (0, YQ.jsxs)("div", {
            className: bQ()("GameApprovalInfoRow", QQ.passed ? "Passed" : "Failed"),
            children: [(0, YQ.jsx)(uQ.c, {
              name: QQ.passed ? "check" : "xmark"
            }), (0, YQ.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, YQ.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: QQ.label
              }), (0, YQ.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: QQ.valueText
              })]
            })]
          }, QQ.label)))
        })]
      })
    }
    var AQ = wQ(1207),
      tQ = wQ(1362);

    function eQ(QQ) {
      tQ.NotificationProvider.showCustomPopup({
        body: () => (0, YQ.jsx)(MQ, {
          ...QQ
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function MQ(QQ) {
      let {
        schematicId: FQ,
        canOverride: wQ,
        onApprovalChanged: HQ
      } = QQ;
      const {
        t: bQ
      } = (0, AQ.y)(), {
        userContext: tQ
      } = (0, kQ.e)(), eQ = (0, DQ.c)(), [MQ, GQ] = (0, LQ.useState)(null), [pQ, cQ] = (0, LQ.useState)(null), [CQ, SQ] = (0, LQ.useState)(!1), iQ = (0, LQ.useCallback)((() => {
        cQ(null), oQ.b.getGameApprovalInfo(tQ, FQ).then((QQ => {
          eQ.current && GQ(QQ)
        })).catch((QQ => {
          console.error("Failed to get game approval info", QQ), eQ.current && cQ(bQ("studio:approvalLoadFailed"))
        }))
      }), [tQ, FQ, eQ, bQ]);
      (0, LQ.useEffect)((() => {
        iQ()
      }), [iQ]);
      const WQ = QQ => {
        CQ || (SQ(!0), oQ.b.setGameApproval(tQ, FQ, QQ).then((() => {
          null === HQ || void 0 === HQ || HQ(), eQ.current && iQ()
        })).catch((QQ => {
          console.error("Failed to set game approval", QQ)
        })).finally((() => {
          eQ.current && SQ(!1)
        })))
      };
      return (0, YQ.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, YQ.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: bQ("studio:approvalTitle")
        }), !MQ && !pQ && (0, YQ.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, YQ.jsx)(vQ.c, {})
        }), pQ && (0, YQ.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: pQ
        }), MQ && (0, YQ.jsxs)(YQ.Fragment, {
          children: [(0, YQ.jsx)(xQ, {
            info: MQ
          }), wQ && (0, YQ.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== MQ.manualOverride && (0, YQ.jsx)(mQ.f, {
              tooltipInner: (0, YQ.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, YQ.jsxs)(qQ.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  WQ(!0)
                },
                disabled: CQ,
                children: [(0, YQ.jsx)(uQ.c, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== MQ.manualOverride && (0, YQ.jsx)(mQ.f, {
              tooltipInner: (0, YQ.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, YQ.jsxs)(qQ.F, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  WQ(!1)
                },
                disabled: CQ,
                children: [(0, YQ.jsx)(uQ.c, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== MQ.manualOverride && (0, YQ.jsx)(mQ.f, {
              tooltipInner: (0, YQ.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, YQ.jsxs)(qQ.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  WQ(null)
                },
                disabled: CQ,
                children: [(0, YQ.jsx)(uQ.c, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  9149: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(53),
      qQ = wQ(3451);

    function oQ() {
      const [QQ, FQ] = (0, LQ.useState)(!1);
      return (0, LQ.useLayoutEffect)((() => {
        let QQ = !0;
        return (0, qQ.d)().then((() => {
          QQ && FQ(!0)
        })), () => {
          QQ = !1
        }
      }), []), QQ
    }
  },
  8681: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ
    });
    var LQ = wQ(1342),
      qQ = wQ(1237),
      oQ = wQ(619);

    function DQ(QQ) {
      return QQ = function(QQ, FQ) {
        var wQ;
        const LQ = new URLSearchParams(FQ),
          qQ = LQ.get("lobby"),
          oQ = LQ.get("vm"),
          DQ = null !== (wQ = qQ) && void 0 !== wQ ? wQ : QQ.lobbyName,
          kQ = null !== oQ && void 0 !== oQ ? oQ : QQ.directJoinVmUrl;
        if (DQ === QQ.lobbyName && kQ === QQ.directJoinVmUrl) return QQ;
        return {
          ...QQ,
          lobbyName: DQ,
          directJoinVmUrl: kQ
        }
      }(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), QQ = function(QQ) {
        if ((0, oQ.F)(QQ.directJoinVmUrl)) return QQ;
        const FQ = (0, qQ.cb)(QQ.directJoinVmUrl);
        null === FQ && (QQ.directJoinVmUrl = void 0);
        return QQ
      }(QQ = function(QQ) {
        if ((0, oQ.F)(QQ.gameNameWithVariation)) return QQ;
        return QQ.gameNameWithVariation = (0, LQ.i)(QQ.gameNameWithVariation), QQ
      }(QQ))
    }
  },
  8677: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      i: () => qQ
    });
    let LQ = !1;

    function qQ() {
      LQ = !0
    }

    function oQ() {
      return LQ
    }
  },
  36021: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      e: () => LQ
    });
    const LQ = "skyblockSkills",
      qQ = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);