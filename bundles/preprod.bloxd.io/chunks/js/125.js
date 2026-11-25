export const id = 125;
export const ids = [125, 405];
export const modules = {
  36625: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => CW
    });
    var wQ = XQ(382),
      qQ = XQ(3751),
      TQ = XQ(3793),
      zQ = XQ(3785),
      sQ = XQ(3776),
      FQ = XQ(1226),
      PQ = XQ(43),
      gQ = XQ(1802),
      JQ = XQ(1416),
      rQ = XQ(1507),
      IQ = XQ(1081),
      jQ = XQ.n(IQ),
      BQ = XQ(1739),
      yQ = XQ(61),
      VQ = XQ(78),
      DQ = XQ(2447),
      pQ = XQ(1384),
      GQ = XQ(1676),
      UQ = XQ(1162),
      bQ = XQ(3681),
      vQ = XQ(4875),
      dQ = XQ(2726),
      HQ = XQ(1975),
      aQ = XQ(3743),
      lQ = XQ(1808),
      hQ = XQ(1548),
      iQ = XQ(2237),
      cQ = XQ(1391),
      AQ = XQ(2756),
      RQ = XQ(5376),
      EQ = XQ(1145);
    const CQ = 15e3,
      uQ = 2500;

    function LQ(QQ) {
      var WQ;
      let {
        eventName: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, FQ.C)(), qQ = lQ.c[XQ], [TQ, zQ] = (0, yQ.useState)((() => Date.now() >= qQ.endsAt.getTime())), [sQ, PQ] = (0, yQ.useState)("overall"), gQ = function(QQ, WQ) {
        const {
          userContext: XQ,
          isUserContextUpdating: wQ
        } = (0, UQ.c)(), qQ = `${QQ}:${WQ}`, [TQ, zQ] = (0, yQ.useState)({
          requestKey: qQ,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, yQ.useEffect)((() => {
          if (wQ) return;
          let TQ, sQ = !1;
          const FQ = async () => {
            if ("visible" === document.visibilityState) try {
              const wQ = await hQ.e.getGameEventLeaderboard(XQ, {
                event: QQ,
                scope: WQ
              });
              sQ || zQ({
                requestKey: qQ,
                leaderboard: {
                  status: "loaded",
                  leaderboard: wQ
                }
              })
            } catch {
              sQ || zQ((QQ => QQ.requestKey === qQ && "loaded" === QQ.leaderboard.status ? QQ : {
                requestKey: qQ,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            sQ || (TQ = setTimeout(FQ, CQ))
          };
          return FQ(), () => {
            sQ = !0, clearTimeout(TQ)
          }
        }), [QQ, WQ, qQ, XQ, wQ]), TQ.requestKey === qQ ? TQ.leaderboard : {
          status: "loading"
        }
      }(XQ, sQ), JQ = function(QQ) {
        const WQ = (0, yQ.useRef)(null),
          XQ = (0, yQ.useRef)(0),
          wQ = (0, yQ.useRef)(),
          [qQ, TQ] = (0, yQ.useState)({});
        return (0, yQ.useEffect)((() => {
          const qQ = null === QQ || void 0 === QQ ? void 0 : QQ.entries;
          if (!qQ) return;
          const zQ = new Map(qQ.map((QQ => [QQ.player.name, QQ.value]))),
            sQ = WQ.current;
          if (WQ.current = zQ, null === sQ) return;
          const FQ = {};
          for (const [QQ, WQ] of zQ) {
            const wQ = sQ.get(QQ);
            void 0 !== wQ && WQ > wQ && (FQ[QQ] = {
              amount: WQ - wQ,
              key: XQ.current++
            })
          }
          0 !== Object.keys(FQ).length && (TQ(FQ), clearTimeout(wQ.current), wQ.current = setTimeout((() => {
            TQ({})
          }), uQ))
        }), [QQ]), (0, yQ.useEffect)((() => () => {
          clearTimeout(wQ.current)
        }), []), qQ
      }("loaded" === gQ.status ? gQ.leaderboard : null), rQ = function(QQ) {
        const [WQ, XQ] = (0, yQ.useState)(null), wQ = "loaded" === QQ.status ? QQ.leaderboard.goalProgress : void 0;
        return (0, yQ.useEffect)((() => {
          wQ && XQ(wQ)
        }), [wQ]), WQ
      }(gQ), IQ = iQ.d[`profileEffect_${qQ.prizePack}`];
      if (TQ) return null;
      const BQ = "loaded" === gQ.status ? gQ.leaderboard : null,
        VQ = null !== (WQ = null === BQ || void 0 === BQ ? void 0 : BQ.entries) && void 0 !== WQ ? WQ : null,
        DQ = null !== BQ && void 0 !== BQ && BQ.own && null !== VQ && !VQ.some((QQ => QQ.isOwn)) ? BQ.own : null;
      return (0, EQ.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, EQ.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, EQ.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, EQ.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, EQ.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, EQ.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), wQ("gameEvents:live")]
              }), (0, EQ.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [wQ("gameEvents:endsIn"), (0, EQ.jsx)(dQ.d, {
                  toTime: qQ.endsAt,
                  onReachEndOfCountdown: () => {
                    zQ(!0)
                  }
                })]
              })]
            }), (0, EQ.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: wQ(qQ.titleKey)
            }), (0, EQ.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, EQ.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [IQ && (0, EQ.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, EQ.jsx)(IQ, {})
                }), (0, EQ.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, EQ.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: wQ("gameEvents:prize")
                  }), (0, EQ.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: wQ(qQ.prizeNameKey)
                  })]
                })]
              }), (0, EQ.jsx)(kQ, {
                event: qQ,
                progress: rQ
              })]
            })]
          }), (0, EQ.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, EQ.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, EQ.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: wQ(qQ.leaderboard.titleKey)
              }), (0, EQ.jsx)(RQ.d, {
                ariaLabel: wQ("gameEvents:leaderboardScope"),
                options: lQ.b.map((QQ => ({
                  value: QQ,
                  label: wQ(`gameEvents:${QQ}Scope`)
                }))),
                value: sQ,
                onChange: PQ
              })]
            }), "loading" === gQ.status && (0, EQ.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, EQ.jsx)(cQ.e, {})
            }), ("unavailable" === gQ.status || "loaded" === gQ.status && null === VQ) && (0, EQ.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: wQ("gameEvents:leaderboardUnavailable")
            }), null !== VQ && 0 === VQ.length && (0, EQ.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: wQ("friends" === sQ ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== VQ && VQ.length > 0 && (0, EQ.jsx)("ol", {
              className: "GameEventPanelRows",
              children: VQ.map((QQ => {
                const WQ = JQ[QQ.player.name];
                return (0, EQ.jsxs)("li", {
                  className: jQ()("GameEventPanelRow", {
                    GameEventPanelRowOwn: QQ.isOwn,
                    GameEventPanelRowTop: QQ.rank <= 3
                  }),
                  children: [(0, EQ.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", QQ.rank]
                  }), (0, EQ.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, EQ.jsx)(AQ.c, {
                      playerSocialPreview: {
                        ...QQ.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== WQ && (0, EQ.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", WQ.amount.toLocaleString()]
                  }, WQ.key), (0, EQ.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: QQ.value.toLocaleString()
                  })]
                }, QQ.player.name)
              }))
            }), DQ && (0, EQ.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, EQ.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", DQ.rank.toLocaleString()]
              }), (0, EQ.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: wQ("gameEvents:yourPlace")
              }), (0, EQ.jsx)("span", {
                className: "GameEventPanelScore",
                children: DQ.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function kQ(QQ) {
      let {
        event: WQ,
        progress: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, FQ.C)(), qQ = null !== XQ && WQ.prizeGoals.some(((QQ, WQ) => XQ[WQ] >= QQ.target));
      return (0, EQ.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, EQ.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: wQ(qQ ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, EQ.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: WQ.prizeGoals.map(((QQ, WQ) => {
            const qQ = null === XQ ? null : Math.min(XQ[WQ], QQ.target);
            return (0, EQ.jsxs)(yQ.Fragment, {
              children: [WQ > 0 && (0, EQ.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: wQ("gameEvents:goalsOr")
              }), (0, EQ.jsxs)("div", {
                className: jQ()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: qQ === QQ.target
                }),
                children: [(0, EQ.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: wQ(QQ.labelKey)
                }), (0, EQ.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, EQ.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== qQ && void 0 !== qQ ? qQ : 0) / QQ.target * 100 + "%"
                    }
                  }), null !== qQ && (0, EQ.jsxs)("span", {
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
    var fQ = XQ(1607),
      SQ = XQ(1666),
      tQ = XQ(1064),
      oQ = XQ(772),
      eQ = XQ(3732);

    function nQ(QQ) {
      let {
        gameNameWithVariation: WQ
      } = QQ;
      const XQ = (0, fQ.A)(WQ),
        [wQ, qQ] = (0, yQ.useState)(null);
      if ((0, yQ.useEffect)((() => {
          if (!XQ) return;
          let QQ = !0;
          return (0, SQ.f)(XQ).then((WQ => {
            QQ && qQ(WQ)
          })).catch((QQ => {
            console.error(`Failed to load the page copy for ${XQ.name}`, QQ)
          })), () => {
            QQ = !1
          }
        }), [XQ]), !XQ || !wQ || wQ.name !== XQ.name) return null;
      const TQ = (0, SQ.c)(wQ),
        zQ = new Set((0, tQ.d)((0, oQ.h)()).map((QQ => (0, fQ.s)(QQ)))),
        sQ = wQ.similarGames.filter((QQ => zQ.has((0, fQ.s)(QQ))));
      return (0, EQ.jsx)("div", {
        className: "GamePageContent",
        children: (0, EQ.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, EQ.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, EQ.jsx)("h2", {
              children: TQ.whatIs
            }), wQ.whatIs.map((QQ => (0, EQ.jsx)("p", {
              children: QQ
            }, QQ)))]
          }), (0, EQ.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, EQ.jsx)("h2", {
              children: TQ.howToPlay
            }), wQ.howToPlay.map((QQ => (0, EQ.jsx)("p", {
              children: QQ
            }, QQ)))]
          }), (0, EQ.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, EQ.jsx)("h2", {
              children: TQ.features
            }), (0, EQ.jsx)("ul", {
              children: wQ.features.map((QQ => (0, EQ.jsx)("li", {
                children: QQ
              }, QQ)))
            })]
          }), (0, EQ.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, EQ.jsx)("h2", {
              children: TQ.tips
            }), (0, EQ.jsx)("ul", {
              children: wQ.tips.map((QQ => (0, EQ.jsx)("li", {
                children: QQ
              }, QQ)))
            })]
          }), (0, EQ.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, EQ.jsx)("h2", {
              children: TQ.faq
            }), wQ.faq.map((QQ => {
              let {
                question: WQ,
                answer: XQ
              } = QQ;
              return (0, EQ.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, EQ.jsx)("h3", {
                  children: WQ
                }), (0, EQ.jsx)("p", {
                  children: XQ
                })]
              }, WQ)
            }))]
          }), sQ.length > 0 && (0, EQ.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, EQ.jsx)("h2", {
              children: TQ.similarGames
            }), (0, EQ.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: sQ.map((QQ => (0, EQ.jsx)("li", {
                children: (0, EQ.jsx)(eQ.d, {
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
    var xQ = XQ(1094),
      YQ = XQ(105),
      NQ = XQ(1165),
      ZQ = XQ(34554),
      OQ = XQ(1714),
      KQ = XQ(1581),
      mQ = XQ(1567),
      MQ = XQ(1674),
      QW = XQ(1517),
      WW = XQ(1404),
      XW = XQ(36634),
      wW = XQ(1268),
      qW = XQ(1049),
      TW = XQ(402),
      zW = XQ(1057),
      sW = XQ(1601),
      FW = XQ(9297),
      PW = XQ(26),
      gW = XQ(2627),
      JW = XQ(814),
      rW = XQ(1257),
      IW = XQ(6900),
      jW = XQ(3736);

    function BW(QQ) {
      let {
        preview: WQ,
        isBroken: XQ
      } = QQ;
      const wQ = null === WQ ? null : (0, TQ.g)(WQ, "small"),
        zQ = (0, qQ.g)(null !== wQ && void 0 !== wQ ? wQ : TQ.q);
      return null === WQ ? (0, EQ.jsx)("div", {
        className: jQ()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: XQ
        }),
        children: (0, EQ.jsx)(xQ.d, {
          name: XQ ? "triangle-exclamation" : "star"
        })
      }) : (0, EQ.jsx)("div", {
        className: jQ()("FeaturedGamesPopupSlotThumbnail", sQ.i),
        style: (0, sQ.h)(zQ),
        role: "img",
        "aria-label": WQ.name,
        children: (0, EQ.jsx)(sQ.e, {
          image: zQ
        })
      })
    }

    function yW(QQ) {
      let {
        schematicId: WQ,
        gameName: XQ
      } = QQ;
      const {
        userContext: qQ
      } = (0, UQ.c)(), TQ = (0, jW.d)(), [zQ, sQ] = (0, yQ.useState)(null), [FQ, PQ] = (0, yQ.useState)(null), [gQ, JQ] = (0, yQ.useState)(!1), IQ = (0, yQ.useCallback)((() => {
        PQ(null), hQ.e.getFeaturedGames(qQ).then((QQ => {
          TQ.current && sQ(QQ.slots)
        })).catch((QQ => {
          console.error("Failed to get featured games", QQ), TQ.current && PQ("Failed to load featured games")
        }))
      }), [qQ, TQ]);
      (0, yQ.useEffect)((() => {
        IQ()
      }), [IQ]);
      const jQ = (QQ, WQ) => {
        gQ || (JQ(!0), hQ.e.setFeaturedGame(qQ, QQ, WQ).then((() => {
          TQ.current && IQ()
        })).catch((QQ => {
          console.error("Failed to set featured game", QQ), TQ.current && PQ("Failed to update the featured slot")
        })).finally((() => {
          TQ.current && JQ(!1)
        })))
      };
      return (0, EQ.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, EQ.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !zQ && !FQ && (0, EQ.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, EQ.jsx)(cQ.e, {})
        }), FQ && (0, EQ.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: FQ
        }), zQ && (0, EQ.jsxs)(EQ.Fragment, {
          children: [(0, EQ.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: zQ.map((QQ => {
              const XQ = QQ.schematicId === WQ,
                qQ = null === QQ.schematicId,
                {
                  categoryGroup: TQ
                } = wQ.O[QQ.slotId];
              return (0, EQ.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, EQ.jsx)(BW, {
                  preview: QQ.preview,
                  isBroken: !qQ
                }), (0, EQ.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, EQ.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, wQ.lb)(TQ), " \xb7 position", " ", (0, wQ.P)(QQ.slotId, wQ.Ub) + 1, " of", " ", (0, wQ.Rb)(TQ, wQ.Ub)]
                  }), qQ && (0, EQ.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !qQ && null !== QQ.preview && (0, EQ.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: QQ.preview.name
                  }), !qQ && null === QQ.preview && (0, EQ.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, EQ.jsx)(xQ.d, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, EQ.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [qQ && (0, EQ.jsxs)(rQ.y, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      jQ(QQ.slotId, WQ)
                    },
                    disabled: gQ,
                    children: [(0, EQ.jsx)(xQ.d, {
                      name: "star"
                    }), " Feature here"]
                  }), !qQ && !XQ && (0, EQ.jsxs)(rQ.T, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      jQ(QQ.slotId, WQ)
                    },
                    disabled: gQ,
                    children: [(0, EQ.jsx)(xQ.d, {
                      name: "star"
                    }), " Replace"]
                  }), !qQ && (0, EQ.jsxs)(rQ.P, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      jQ(QQ.slotId, null)
                    },
                    disabled: gQ,
                    children: [(0, EQ.jsx)(xQ.d, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, QQ.slotId)
            }))
          }), (0, EQ.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var VW = XQ(4990),
      DW = XQ(4916),
      pW = XQ(3699);
    const GW = 8,
      UW = 12;

    function bW(QQ) {
      let {
        customLobbies: WQ,
        favouriteLobbies: XQ,
        toggleLikeLobby: wQ,
        showReport: qQ
      } = QQ;
      const [TQ, zQ] = (0, yQ.useState)(GW);
      return (0, yQ.useEffect)((() => {
        if (TQ >= WQ.length) return;
        let QQ = !0;
        return (0, pW.e)().then((() => {
          QQ && zQ(TQ + UW)
        })), () => {
          QQ = !1
        }
      }), [TQ, WQ.length]), (0, EQ.jsx)(EQ.Fragment, {
        children: WQ.slice(0, TQ).map((QQ => (0, EQ.jsx)(DW.f, {
          customLobby: QQ,
          favouriteLobbies: XQ,
          toggleLikeLobby: wQ,
          showReport: qQ
        }, QQ.name)))
      })
    }
    var vW = XQ(4922),
      dW = XQ(4938),
      HW = XQ(4888),
      aW = XQ(3813),
      lW = XQ(9295),
      hW = XQ(249);
    const iW = {
      skyblock: [XQ(36661).e]
    };
    var cW = XQ(663);
    const AW = {
      listedVariations: null,
      backgroundImage: TQ.q,
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

    function RW(QQ, WQ) {
      const XQ = JW.f[QQ.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, TQ.g)(QQ, "large"),
        badges: [],
        category: QQ.gameCategory,
        title: void 0 !== (null === XQ || void 0 === XQ ? void 0 : XQ.title) ? WQ(XQ.title) : QQ.name,
        variationTitle: null,
        description: void 0 !== (null === XQ || void 0 === XQ ? void 0 : XQ.description) ? WQ(XQ.description) : QQ.description,
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

    function EW(QQ) {
      var WQ, XQ, wQ;
      return null !== (WQ = null !== (XQ = (0, hW.n)() ? function(QQ) {
        for (const [WQ, XQ] of Object.entries(iW)) {
          const wQ = [WQ, ...XQ.map((QQ => (0, TW.Ib)(WQ, QQ)))];
          if (wQ.includes(QQ)) return wQ
        }
        return null
      }(QQ) : null) && void 0 !== XQ ? XQ : null === (wQ = JW.e[QQ]) || void 0 === wQ ? void 0 : wQ.listedVariations) && void 0 !== WQ ? WQ : null
    }

    function CW() {
      const {
        gameNameWithVariation: QQ
      } = (0, KQ.E)();
      if ((0, yQ.useEffect)(aW.l, []), QQ && (0, wW.q)(QQ)) return (0, EQ.jsx)(uW, {
        urlId: QQ
      }, QQ);
      const WQ = QQ && (0, qW.k)(QQ) ? QQ : "firstParty";
      return (0, EQ.jsx)(LW, {}, WQ)
    }

    function uW(QQ) {
      let {
        urlId: WQ
      } = QQ;
      const {
        userContext: XQ,
        isUserContextUpdating: wQ
      } = (0, UQ.c)(), qQ = (0, yQ.useMemo)((() => (0, OQ.i)(WQ)), [WQ]);
      (0, yQ.useMemo)((() => {
        if (null === qQ) return;
        const QQ = NQ.userContextManager.peekCurrentUserContext();
        (null !== QQ ? hQ.e.getGame(QQ, qQ.schematicId) : NQ.userContextManager.getCurrentUserContext().then((QQ => hQ.e.getGame(QQ, qQ.schematicId)))).catch((QQ => {
          console.error(`Failed to get the custom game ${qQ.schematicId}`, QQ), (0, OQ.g)(WQ)
        }))
      }), [qQ, WQ]);
      const [TQ, zQ] = (0, yQ.useState)(null), sQ = (0, ZQ.c)();
      (0, yQ.useEffect)((() => {
        if (null !== qQ || wQ) return;
        let QQ = !0;
        return hQ.e.getGameByUrlId(XQ, WQ).then((XQ => {
          QQ && zQ({
            urlId: WQ,
            game: XQ
          })
        })).catch((XQ => {
          console.error(`Failed to find the custom game with urlId ${WQ}`, XQ), QQ && (0, mQ.navigateToHomePage)()
        })), () => {
          QQ = !1
        }
      }), [WQ, qQ, wQ, XQ]);
      const FQ = null !== qQ && void 0 !== qQ ? qQ : (null === TQ || void 0 === TQ ? void 0 : TQ.urlId) === WQ ? TQ.game : null;
      return null === FQ ? (0, EQ.jsx)(cQ.e, {}) : sQ ? (0, EQ.jsx)(LW, {
        gameNameWithVariation: (0, qW.u)(FQ.schematicId),
        knownCustomGame: FQ
      }, FQ.schematicId) : null
    }

    function LW(QQ) {
      var WQ, XQ, zQ, IQ, lQ, iQ, cQ, RQ;
      let {
        gameNameWithVariation: CQ,
        knownCustomGame: uQ = null
      } = QQ;
      const {
        t: kQ
      } = (0, FQ.C)();
      (0, gW.i)();
      const SQ = (0, gW.m)(),
        {
          userContext: tQ,
          isUserContextUpdating: oQ
        } = (0, UQ.c)(),
        eQ = (0, HW.e)(),
        NQ = (0, mQ.useNavigatePreserveSearch)(),
        ZQ = (0, KQ.E)(),
        OQ = (0, yQ.useMemo)((() => CQ ? {
          gameNameWithVariation: CQ
        } : ZQ), [CQ, ZQ]),
        QW = (0, FW.e)(OQ),
        wW = (0, yQ.useMemo)((() => {
          const QQ = function(QQ) {
            var WQ, XQ;
            const wQ = EW(QQ);
            if (!wQ || 0 === wQ.length || wQ.includes(QQ)) return QQ;
            const qQ = PQ.i.getItem((0, DQ.i)(QQ));
            if (qQ && wQ.includes(qQ)) return qQ;
            return null !== (WQ = null === (XQ = JW.e[QQ]) || void 0 === XQ ? void 0 : XQ.defaultListedVariation) && void 0 !== WQ ? WQ : wQ[0]
          }(QW.gameNameWithVariation);
          return QQ === QW.gameNameWithVariation ? QW : {
            ...QW,
            gameNameWithVariation: QQ
          }
        }), [QW]);
      (0, yQ.useEffect)((() => {
        const QQ = QW.gameNameWithVariation;
        wW.gameNameWithVariation !== QQ && QQ !== (0, TW.Mb)(QQ) && NQ((0, fQ.v)(wW.gameNameWithVariation), {
          replace: !0
        })
      }), [wW.gameNameWithVariation, QW.gameNameWithVariation, NQ]);
      const [jW, BW] = (0, yQ.useState)(""), pW = yQ.useRef(null), [GW, UW] = (0, yQ.useState)(), aW = (0, qW.k)(wW.gameNameWithVariation), hW = (0, yQ.useMemo)((() => aW ? null : function(QQ, WQ, XQ) {
        var wQ, qQ;
        const zQ = JW.e[QQ];
        return (0, cW.G)(zQ) ? null : {
          listedVariations: EW(QQ),
          backgroundImage: (0, TQ.i)(QQ, (0, TQ.e)(zQ)),
          badges: (0, gQ.filterBadges)(zQ.badges),
          category: zQ.type,
          title: XQ(zQ.title),
          variationTitle: zQ.variationTitle ? XQ(zQ.variationTitle) : null,
          description: XQ(zQ.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== WQ ? null !== (wQ = WQ[QQ]) && void 0 !== wQ ? wQ : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: zQ.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: zQ.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (qQ = zQ.canCreateCustomLobbies) || void 0 === qQ || qQ,
          countdownInformation: (0, DQ.f)(QQ)
        }
      }(wW.gameNameWithVariation, SQ, kQ)), [aW, wW.gameNameWithVariation, SQ, kQ]), [iW, CW] = (0, yQ.useState)(!1), [uW, LW] = (0, yQ.useState)((() => uQ ? RW(uQ, kQ) : AW)), fW = null !== hW && void 0 !== hW ? hW : uW, [SW] = (0, yQ.useState)(fW === AW), tW = (0, qQ.g)(fW.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: oW,
        recentlyPlayedCustomLobbies: eW
      } = (0, yQ.useMemo)((() => function(QQ, WQ, XQ, wQ) {
        var qQ;
        const TQ = QQ => {
            const XQ = (0, qW.n)(QQ),
              wQ = WQ.find((WQ => "custom" === WQ.type ? WQ.schematicId === XQ : WQ.gameNameWithVariation === QQ));
            return wQ ? [...wQ.recentLobbies] : []
          },
          zQ = (0, gQ.getRecentGameNameWithVariationLobbiesKey)(QQ),
          sQ = null !== (qQ = PQ.i.getItem(zQ)) && void 0 !== qQ ? qQ : [],
          FQ = [...TQ(QQ), ...sQ],
          JQ = [];
        for (const PQ of FQ)(0, rW.I)(PQ) && !JQ.includes(PQ) && JQ.push(PQ);
        let rQ = FQ;
        if (XQ) {
          const QQ = TQ("classic_worlds"),
            WQ = FQ.filter((WQ => !QQ.includes(WQ)));
          rQ = [...QQ, ...WQ]
        }
        const IQ = [],
          jQ = !1 === wQ ? [] : rQ;
        for (const PQ of jQ)(0, rW.I)(PQ) || IQ.includes(PQ) || IQ.push(PQ);
        return {
          recentlyPlayedPublicLobbies: JQ,
          recentlyPlayedCustomLobbies: IQ
        }
      }(wW.gameNameWithVariation, eQ, fW.showWorldsInsteadOfCustomLobbies, fW.canCreateCustomLobbies)), [wW.gameNameWithVariation, eQ, fW.showWorldsInsteadOfCustomLobbies, fW.canCreateCustomLobbies]), [nW, xW] = (0, yQ.useState)(!0), [YW, NW] = (0, yQ.useState)([]), [ZW, OW] = (0, yQ.useState)(null), [KW, mW] = (0, yQ.useState)("explore"), MW = (0, yQ.useRef)(!1), QX = (0, yQ.useCallback)((QQ => {
        (0, VQ.unstable_batchedUpdates)((() => {
          UW(QQ), LW((WQ => ({
            ...RW(QQ, kQ),
            isFavourite: WQ.isFavourite
          })))
        }))
      }), [kQ]);
      (0, yQ.useEffect)((() => {
        null === PW.b.get("gameEntrySource") && (0, PW.m)("gameInformationPageDirect")
      }), []);
      const WX = (0, yQ.useRef)(null);
      (0, yQ.useEffect)((() => {
        const QQ = QQ => {
            WX.current = QQ.target instanceof Element ? QQ.target.closest("a, button") : null
          },
          WQ = QQ => {
            "Tab" === QQ.key && (WX.current = null)
          };
        return document.addEventListener("pointerdown", QQ, !0), document.addEventListener("keydown", WQ, !0), () => {
          document.removeEventListener("pointerdown", QQ, !0), document.removeEventListener("keydown", WQ, !0)
        }
      }), []), (0, bQ.c)("Enter", (QQ => {
        const WQ = QQ.target instanceof Element ? QQ.target : null;
        if (QQ.defaultPrevented || null !== WQ && void 0 !== WQ && WQ.closest("input, textarea, select")) return;
        const XQ = null === WQ || void 0 === WQ ? void 0 : WQ.closest("a, button");
        XQ && XQ !== WX.current || (QQ.preventDefault(), gX())
      })), (0, vQ.b)(mQ.navigateToHomePage);
      const XX = oW.length > 0 || eW.length > 0,
        wX = !fW.useRejoinLastLobbyButton || 0 === oW.length,
        qX = aW && null === fW.ownerSocialPreviewWithoutLocation,
        TX = tQ.getPlayerName() === (null === GW || void 0 === GW || null === (WQ = GW.owner) || void 0 === WQ ? void 0 : WQ.name),
        zX = null !== (XQ = null === (zQ = fW.badges.find((QQ => "event" === QQ.type))) || void 0 === zQ ? void 0 : zQ.event) && void 0 !== XQ ? XQ : null,
        sX = wX ? rQ.s : rQ.h,
        FX = (0, EQ.jsx)(JQ.e, {
          tooltipInner: (0, EQ.jsx)("div", {
            children: kQ("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, EQ.jsx)(sX, {
            className: "GameInformationButton",
            padDefaultFocus: wX,
            showPress: !0,
            onClick: () => {
              gX()
            },
            children: (0, EQ.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [wX && (0, EQ.jsxs)(EQ.Fragment, {
                children: [(0, EQ.jsx)(xQ.d, {
                  name: "play"
                }), " "]
              }), kQ("homePage:quickPlay")]
            })
          })
        });
      (0, yQ.useEffect)((() => {
        if (!aW || oQ) return;
        let QQ = !0;
        const WQ = (0, qW.n)(wW.gameNameWithVariation);
        return hQ.e.getGame(tQ, WQ).then((WQ => {
          QQ && QX(WQ)
        })).catch((WQ => {
          console.error("Failed to get Custom Game information", WQ), QQ && (0, mQ.navigateToHomePage)()
        })), hQ.e.getFavouriteGames(tQ).then((XQ => {
          QQ && LW((QQ => ({
            ...QQ,
            isFavourite: XQ.includes(WQ)
          })))
        })).catch((WQ => {
          console.error("Failed to get favourite games", WQ), QQ && CW(!0)
        })), () => {
          QQ = !1
        }
      }), [aW, oQ, wW.gameNameWithVariation, QX, tQ]);
      const PX = !aW && null === hW;

      function gX(QQ) {
        (0, lW.f)(), NQ((0, pQ.c)(wW.gameNameWithVariation, QQ))
      }(0, yQ.useEffect)((() => {
        PX && (0, mQ.navigateToHomePage)()
      }), [PX]), (0, yQ.useEffect)((() => {
        if (!1 === fW.canCreateCustomLobbies) return;
        let QQ = !0;
        return null !== fW.showWorldsInsteadOfCustomLobbies && !1 === oQ && (xW(!0), hQ.e.getFavouriteLobbies(tQ).then((QQ => {
          OW(QQ)
        })), hQ.e.getOpenCustomLobbies(tQ, {
          gameNameWithVariation: fW.showWorldsInsteadOfCustomLobbies ? "classic" : wW.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === KW,
          onlyFavouriteLobbies: "favourite" === KW
        }).then((WQ => {
          QQ && (0, VQ.unstable_batchedUpdates)((() => {
            NW(WQ), xW(!1)
          }))
        })).catch((WQ => {
          console.error("Failed to get open custom lobbies", WQ), QQ && xW(!1)
        }))), () => {
          QQ = !1
        }
      }), [oQ, wW, KW, fW.showWorldsInsteadOfCustomLobbies, fW.canCreateCustomLobbies, tQ]);
      const JX = (0, yQ.useCallback)((async QQ => {
          try {
            if (!ZW) return;
            ZW.includes(QQ) ? (hQ.e.unfavouriteLobby(tQ, QQ), OW(ZW.filter((WQ => WQ !== QQ)))) : (hQ.e.favouriteLobby(tQ, QQ).catch((QQ => {
              console.error("Failed to favourite lobby", QQ)
            })), OW([...ZW, QQ]))
          } catch (WQ) {
            console.error("Failed to like lobby", WQ)
          }
        }), [tQ, ZW]),
        rX = (null === GW || void 0 === GW ? void 0 : GW.schematicId) === (0, qW.n)(QW.gameNameWithVariation) ? GW : null,
        IX = rX && (0, fQ.E)(QW.gameNameWithVariation, (QQ => kQ(QQ)), rX);
      (0, MQ.g)(rX && (0, fQ.v)(QW.gameNameWithVariation, rX));
      const jX = YQ.featureFlags.canUseCustomLobbies && !0 === fW.canCreateCustomLobbies,
        BX = (0, EQ.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, EQ.jsx)(nQ, {
            gameNameWithVariation: wW.gameNameWithVariation
          })
        });
      return (0, EQ.jsx)(EQ.Fragment, {
        children: (0, EQ.jsxs)("article", {
          className: jQ()("GameInformation", {
            GameInformationFadeIn: SW,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (IQ = fW.countdownInformation) || void 0 === IQ ? void 0 : IQ.type)
          }),
          children: [IX && (0, EQ.jsx)(GQ.d, {
            meta: IX
          }), (0, EQ.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, EQ.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, EQ.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, EQ.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, EQ.jsx)("div", {
                  className: jQ()("GameInformationTopBackgroundImage", sQ.i),
                  style: (0, sQ.h)(tW),
                  children: (0, EQ.jsx)(sQ.e, {
                    image: tW
                  })
                })]
              }), (0, EQ.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, EQ.jsx)(VW.d, {}), (0, EQ.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, EQ.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, EQ.jsxs)("div", {
                      className: jQ()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: qX
                      }),
                      children: [fW.badges.map((QQ => (0, EQ.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${QQ.type}`,
                        children: (0, EQ.jsx)(aQ.e, {
                          badge: QQ
                        })
                      }, QQ.type))), aW && (0, EQ.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, EQ.jsx)(HQ.e, {
                          text: (0, wQ.fb)({
                            type: "playerCrafted"
                          })
                        })
                      }), fW.category && (0, EQ.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, EQ.jsx)(HQ.e, {
                          text: [{
                            str: (0, wQ.hb)(fW.category).toUpperCase()
                          }]
                        })
                      }), null !== fW.ccu && (0, EQ.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, EQ.jsx)(xQ.d, {
                          name: "user"
                        }), (0, rW.O)(fW.ccu), " online"]
                      }), null !== fW.ownerSocialPreviewWithoutLocation && (0, EQ.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, EQ.jsx)("span", {
                          children: "Made by"
                        }), (0, EQ.jsx)(AQ.c, {
                          playerSocialPreview: {
                            ...fW.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), qX && (0, EQ.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, EQ.jsx)("span", {
                          children: "Made by"
                        }), (0, EQ.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== fW.favourites && (null !== fW.isFavourite || aW && !iW) && (0, EQ.jsx)(rQ.C, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== MW.current && (MW.current = !0, null !== fW.isFavourite)) {
                              const QQ = (0, qW.n)(wW.gameNameWithVariation);
                              let WQ;
                              fW.isFavourite ? (WQ = -1, hQ.e.unfavouriteGame(tQ, QQ).catch((QQ => {
                                console.error("Failed to get unfavourite game", QQ)
                              })).finally((() => {
                                MW.current = !1
                              }))) : (WQ = 1, hQ.e.favouriteGame(tQ, QQ).catch((QQ => {
                                console.error("Failed to get favourite game", QQ)
                              })).finally((() => {
                                MW.current = !1
                              }))), LW((QQ => ({
                                ...QQ,
                                isFavourite: !QQ.isFavourite
                              }))), LW((QQ => ({
                                ...QQ,
                                favourites: QQ.favourites + WQ
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (lQ = fW.isFavourite) && void 0 !== lQ && lQ,
                        disabled: null === fW.isFavourite,
                        className: jQ()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === fW.isFavourite
                        })
                      }, null === fW.isFavourite ? "pending" : "known"), aW && !qX && YQ.featureFlags.useSocialFeatures && !TX && (0, EQ.jsx)(vW.e, {
                        targetType: "customGame",
                        targetId: (0, qW.n)(wW.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (tQ.playerHasRank("developer") || tQ.playerHasRank("admin") && TX) && (0, EQ.jsxs)(rQ.s, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          NQ((0, sW.m)((0, zW.d)(wW.gameNameWithVariation, !0)))
                        },
                        children: [(0, EQ.jsx)(xQ.d, {
                          name: "star-christmas"
                        }), " ", kQ("studio:viewInStudio")]
                      }), aW && tQ.playerHasRank("developer") && (0, EQ.jsxs)(rQ.h, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, IW.b)({
                            schematicId: (0, qW.n)(wW.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, EQ.jsx)(xQ.d, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), aW && tQ.playerHasRank("developer") && (0, EQ.jsxs)(rQ.h, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          WW.NotificationProvider.showCustomPopup({
                            body: () => (0, EQ.jsx)(yW, {
                              schematicId: (0, qW.n)(wW.gameNameWithVariation),
                              gameName: fW.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, EQ.jsx)(xQ.d, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (iQ = fW.countdownInformation) || void 0 === iQ ? void 0 : iQ.type) && (0, EQ.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, EQ.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, EQ.jsx)(dQ.d, {
                            toTime: fW.countdownInformation.countdownToTime
                          })]
                        }), (0, EQ.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: fW.countdownInformation.previewText
                        })]
                      })]
                    }, qX ? "pending" : "shown"), (0, EQ.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, EQ.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, EQ.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [fW.title, " ", fW.variationTitle && (null === (cQ = JW.e[wW.gameNameWithVariation]) || void 0 === cQ ? void 0 : cQ.variationThumbnailUseBigRatio) && (0, EQ.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: fW.variationTitle
                          })]
                        })
                      }), fW.listedVariations && fW.listedVariations.length > 0 && (0, EQ.jsx)("div", {
                        className: jQ()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (RQ = JW.e[wW.gameNameWithVariation]) || void 0 === RQ ? void 0 : RQ.variationThumbnailUseBigRatio
                        }),
                        children: fW.listedVariations.map((QQ => {
                          var WQ, XQ;
                          return (0, EQ.jsxs)(kW, {
                            variation: QQ,
                            isSelected: wW.gameNameWithVariation === QQ,
                            children: [null !== SQ && (0, EQ.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, EQ.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, EQ.jsx)(xQ.d, {
                                  name: "user"
                                }), " ", (0, rW.O)(null !== (WQ = SQ[QQ]) && void 0 !== WQ ? WQ : 0)]
                              })
                            }), (0, EQ.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: kQ(null !== (XQ = JW.e[QQ].variationTitle) && void 0 !== XQ ? XQ : JW.e[QQ].title)
                            }), (0, EQ.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, gQ.filterBadges)(JW.e[QQ].badges).map((QQ => (0, EQ.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + QQ.type,
                                children: (0, EQ.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, EQ.jsx)(aQ.e, {
                                    badge: QQ
                                  })
                                })
                              }, QQ.type)))
                            })]
                          }, QQ)
                        }))
                      })]
                    }), fW.description && (0, EQ.jsx)("p", {
                      className: "GameInformationDescription",
                      children: fW.description
                    })]
                  }), (0, EQ.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, EQ.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!wX && (0, EQ.jsx)(JQ.e, {
                        tooltipInner: (0, EQ.jsx)("div", {
                          children: kQ("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, EQ.jsx)(rQ.s, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            gX(oW[0])
                          },
                          children: (0, EQ.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, EQ.jsx)(xQ.d, {
                              name: "play"
                            }), " ", kQ("homePage:rejoinLobbyNumber", {
                              number: oW[0]
                            })]
                          })
                        })
                      }), wX && FX]
                    }), (0, EQ.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!wX && FX, (0, EQ.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, EQ.jsx)(xQ.d, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, EQ.jsx)(BQ.e, {
                          className: "JoinLobbyInput",
                          placeholderText: kQ("homePage:lobbyName"),
                          maxLength: rW.K,
                          domRef: pW,
                          onValueChange: QQ => {
                            QQ = (0, rW.qb)(QQ), BW(QQ)
                          },
                          onEnter: () => {
                            0 === jW.length ? gX(oW[0]) : gX(jW)
                          }
                        }), (0, EQ.jsx)(rQ.h, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === jW.length ? gX(oW[0]) : gX(jW)
                          },
                          children: kQ("general:join")
                        })]
                      })]
                    }), (0, EQ.jsxs)("section", {
                      className: jQ()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !XX
                      }),
                      children: [(0, EQ.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, EQ.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, EQ.jsx)(xQ.d, {
                            name: "clock-rotate-left"
                          }), XX && (0, EQ.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: kQ("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, EQ.jsx)(dW.d, {
                        lobbyGroups: [oW, eW],
                        onLobbyClick: QQ => {
                          gX(QQ)
                        },
                        keyPrefix: wW.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== zX && (0, EQ.jsx)(LQ, {
                eventName: zX
              })]
            }), jX && (0, EQ.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, EQ.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, EQ.jsxs)("div", {
                  className: jQ()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === fW.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === fW.showWorldsInsteadOfCustomLobbies && (0, EQ.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, EQ.jsx)(xQ.d, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, EQ.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, EQ.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), kQ("game:worlds")]
                    })]
                  }), !1 === fW.showWorldsInsteadOfCustomLobbies && (0, EQ.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, EQ.jsx)(xQ.d, {
                      name: "joystick"
                    }), (0, EQ.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, EQ.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), kQ("homePage:customLobbies")]
                    })]
                  }), (0, EQ.jsx)(rQ.T, {
                    onClick: () => {
                      mW("explore")
                    },
                    active: "explore" === KW,
                    children: kQ("general:explore")
                  }), (0, EQ.jsx)(rQ.T, {
                    onClick: () => {
                      mW("favourite")
                    },
                    active: "favourite" === KW,
                    children: kQ("homePage:favouriteLobbies")
                  }), (0, EQ.jsx)(rQ.T, {
                    onClick: () => {
                      mW("owned")
                    },
                    active: "owned" === KW,
                    children: kQ("homePage:ownedLobbies")
                  })]
                }), (0, EQ.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, EQ.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, EQ.jsx)(DW.b, {
                      label: "Create",
                      onClick: () => {
                        WW.NotificationProvider.showCustomPopup({
                          body: QQ => (0, EQ.jsx)(XW.CreateCustomLobby, {
                            gameNameWithVariation: wW.gameNameWithVariation,
                            close: QQ
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === nW && (0, EQ.jsx)(DW.g, {}), !1 === nW && (0, EQ.jsx)(bW, {
                      customLobbies: YW,
                      favouriteLobbies: ZW,
                      toggleLikeLobby: JX,
                      showReport: YQ.featureFlags.useSocialFeatures && "owned" !== KW
                    })]
                  }), BX]
                })]
              })
            })]
          }), !jX && BX]
        })
      })
    }

    function kW(QQ) {
      let {
        variation: WQ,
        isSelected: XQ,
        children: wQ
      } = QQ;
      const FQ = JW.e[WQ],
        gQ = (0, TQ.i)(WQ, (0, TQ.m)(FQ)),
        JQ = (0, qQ.g)(gQ),
        rQ = (0, zQ.d)([(0, TQ.h)(WQ, (0, TQ.e)(FQ))]);
      return (0, EQ.jsxs)(mQ.LinkPreserveSearch, {
        to: (0, fQ.v)(WQ),
        replace: !0,
        className: jQ()("GameInformationVariation", sQ.i, {
          SelectedGameInformationVariation: XQ
        }),
        onClick: QQ => {
          if (!(0, QW.d)(QQ)) return;
          const XQ = (0, DQ.i)(WQ);
          PQ.i.setItem(XQ, WQ)
        },
        onMouseEnter: rQ.start,
        onMouseLeave: rQ.cancel,
        onFocus: rQ.start,
        onBlur: rQ.cancel,
        style: (0, sQ.h)(JQ),
        children: [(0, EQ.jsx)(sQ.e, {
          image: JQ
        }), wQ]
      })
    }
  },
  6900: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => DQ
    });
    var wQ = XQ(61),
      qQ = XQ(1507),
      TQ = XQ(1548),
      zQ = XQ(3736),
      sQ = XQ(1162),
      FQ = XQ(1391),
      PQ = XQ(1416),
      gQ = XQ(1094),
      JQ = XQ(1081),
      rQ = XQ.n(JQ),
      IQ = XQ(6896),
      jQ = XQ(1145);

    function BQ(QQ) {
      let {
        info: WQ,
        className: XQ
      } = QQ;
      const {
        statusText: wQ,
        rowText: qQ
      } = (0, IQ.e)();
      return (0, jQ.jsxs)("div", {
        className: rQ()("GameApprovalInfoDetails", XQ),
        children: [(0, jQ.jsxs)("div", {
          className: rQ()("GameApprovalInfoSummary", WQ.overallPassed ? "Passed" : "Failed"),
          children: [(0, jQ.jsx)(gQ.d, {
            name: WQ.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, jQ.jsx)("span", {
            children: wQ(WQ.status)
          })]
        }), WQ.rows.length > 0 && (0, jQ.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: WQ.rows.map((QQ => {
            const {
              label: WQ,
              value: XQ
            } = qQ(QQ);
            return (0, jQ.jsxs)("div", {
              className: rQ()("GameApprovalInfoRow", QQ.passed ? "Passed" : "Failed"),
              children: [(0, jQ.jsx)(gQ.d, {
                name: QQ.passed ? "check" : "xmark"
              }), (0, jQ.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, jQ.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: WQ
                }), null !== XQ && (0, jQ.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: XQ
                })]
              })]
            }, QQ.kind)
          }))
        })]
      })
    }
    var yQ = XQ(1226),
      VQ = XQ(1404);

    function DQ(QQ) {
      VQ.NotificationProvider.showCustomPopup({
        body: () => (0, jQ.jsx)(pQ, {
          ...QQ
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function pQ(QQ) {
      let {
        schematicId: WQ,
        canOverride: XQ,
        onApprovalChanged: JQ
      } = QQ;
      const {
        t: rQ
      } = (0, yQ.C)(), {
        userContext: IQ
      } = (0, sQ.c)(), VQ = (0, zQ.d)(), [DQ, pQ] = (0, wQ.useState)(null), [GQ, UQ] = (0, wQ.useState)(null), [bQ, vQ] = (0, wQ.useState)(!1), dQ = (0, wQ.useCallback)((() => {
        UQ(null), TQ.e.getGameApprovalInfo(IQ, WQ).then((QQ => {
          VQ.current && pQ(QQ)
        })).catch((QQ => {
          console.error("Failed to get game approval info", QQ), VQ.current && UQ(rQ("studio:approvalLoadFailed"))
        }))
      }), [IQ, WQ, VQ, rQ]);
      (0, wQ.useEffect)((() => {
        dQ()
      }), [dQ]);
      const HQ = QQ => {
        bQ || (vQ(!0), TQ.e.setGameApproval(IQ, WQ, QQ).then((() => {
          null === JQ || void 0 === JQ || JQ(), VQ.current && dQ()
        })).catch((QQ => {
          console.error("Failed to set game approval", QQ)
        })).finally((() => {
          VQ.current && vQ(!1)
        })))
      };
      return (0, jQ.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, jQ.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: rQ("studio:approvalTitle")
        }), !DQ && !GQ && (0, jQ.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, jQ.jsx)(FQ.e, {})
        }), GQ && (0, jQ.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: GQ
        }), DQ && (0, jQ.jsxs)(jQ.Fragment, {
          children: [(0, jQ.jsx)(BQ, {
            info: DQ
          }), XQ && (0, jQ.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== DQ.manualOverride && (0, jQ.jsx)(PQ.e, {
              tooltipInner: (0, jQ.jsx)("div", {
                children: rQ("studio:approvalApproveTooltip")
              }),
              children: (0, jQ.jsxs)(qQ.s, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  HQ(!0)
                },
                disabled: bQ,
                children: [(0, jQ.jsx)(gQ.d, {
                  name: "check"
                }), " ", rQ("studio:approvalApprove")]
              })
            }), !1 !== DQ.manualOverride && (0, jQ.jsx)(PQ.e, {
              tooltipInner: (0, jQ.jsx)("div", {
                children: rQ("studio:approvalDenyTooltip")
              }),
              children: (0, jQ.jsxs)(qQ.P, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  HQ(!1)
                },
                disabled: bQ,
                children: [(0, jQ.jsx)(gQ.d, {
                  name: "xmark"
                }), " ", rQ("studio:approvalDeny")]
              })
            }), null !== DQ.manualOverride && (0, jQ.jsx)(PQ.e, {
              tooltipInner: (0, jQ.jsx)("div", {
                children: rQ("studio:approvalClearOverrideTooltip")
              }),
              children: (0, jQ.jsxs)(qQ.h, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  HQ(null)
                },
                disabled: bQ,
                children: [(0, jQ.jsx)(gQ.d, {
                  name: "arrows-rotate"
                }), " ", rQ("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6896: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ,
      e: () => zQ
    });
    var wQ = XQ(402),
      qQ = XQ(1226);
    const TQ = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function zQ() {
      const {
        t: QQ,
        selectedLanguage: WQ
      } = (0, qQ.C)();
      return {
        statusText: WQ => QQ(TQ[WQ]),
        rowText: XQ => {
          const TQ = (QQ, XQ) => (0, wQ.bb)((0, qQ.n)(WQ.code, QQ), 0, XQ);
          switch (XQ.kind) {
            case "ownerAccountAge": {
              const WQ = XQ.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: QQ("studio:approvalAccountAgeLabel"),
                value: QQ(WQ, {
                  age: TQ(WQ, XQ.accountAgeMs),
                  days: XQ.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: QQ("studio:approvalSinceUnbannedLabel"), value: QQ("studio:approvalSinceUnbannedValue", {
                  time: TQ("studio:approvalSinceUnbannedValue", XQ.sinceMs),
                  days: XQ.minDays
                })
              };
            case "reportHold": {
              const {
                detail: WQ
              } = XQ;
              if (null === WQ) return {
                label: QQ("studio:approvalUnderInvestigation"),
                value: null
              };
              const wQ = WQ.weightedReporters.toFixed(1),
                qQ = WQ.threshold.toFixed(1),
                zQ = QQ("studio:approvalReportHoldLabel", {
                  hours: WQ.windowHours
                });
              if (null === WQ.heldUntil) return {
                label: zQ,
                value: QQ("studio:approvalReportHoldValue", {
                  weightedReporters: wQ,
                  threshold: qQ
                })
              };
              const sQ = "studio:approvalReportHoldValueHeld";
              return {
                label: zQ,
                value: QQ(sQ, {
                  weightedReporters: wQ,
                  threshold: qQ,
                  time: TQ(sQ, WQ.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function sQ(QQ) {
      return null === QQ.manualOverride && QQ.rows.some((QQ => "reportHold" === QQ.kind && !QQ.passed))
    }
  },
  34554: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ
    });
    var wQ = XQ(61),
      qQ = XQ(3699);

    function TQ() {
      const [QQ, WQ] = (0, wQ.useState)(!1);
      return (0, wQ.useLayoutEffect)((() => {
        let QQ = !0;
        return (0, qQ.e)().then((() => {
          QQ && WQ(!0)
        })), () => {
          QQ = !1
        }
      }), []), QQ
    }
  },
  9297: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(1384),
      qQ = XQ(1257),
      TQ = XQ(663);

    function zQ(QQ) {
      return QQ = function(QQ, WQ) {
        var XQ;
        const wQ = new URLSearchParams(WQ),
          qQ = wQ.get("lobby"),
          TQ = wQ.get("vm"),
          zQ = null !== (XQ = qQ) && void 0 !== XQ ? XQ : QQ.lobbyName,
          sQ = null !== TQ && void 0 !== TQ ? TQ : QQ.directJoinVmUrl;
        if (zQ === QQ.lobbyName && sQ === QQ.directJoinVmUrl) return QQ;
        return {
          ...QQ,
          lobbyName: zQ,
          directJoinVmUrl: sQ
        }
      }(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), QQ = function(QQ) {
        if ((0, TQ.G)(QQ.directJoinVmUrl)) return QQ;
        const WQ = (0, qQ.X)(QQ.directJoinVmUrl);
        null === WQ && (QQ.directJoinVmUrl = void 0);
        return QQ
      }(QQ = function(QQ) {
        if ((0, TQ.G)(QQ.gameNameWithVariation)) return QQ;
        return QQ.gameNameWithVariation = (0, wQ.j)(QQ.gameNameWithVariation), QQ
      }(QQ))
    }
  },
  9295: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      f: () => qQ
    });
    let wQ = !1;

    function qQ() {
      wQ = !0
    }

    function TQ() {
      return wQ
    }
  },
  36661: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ,
      i: () => wQ
    });
    const wQ = "skyblockSkills",
      qQ = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);