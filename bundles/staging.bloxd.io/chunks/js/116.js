export const id = 116;
export const ids = [116, 390];
export const modules = {
  36394: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => zE
    });
    var Yq = gq(296),
      lq = gq(3383),
      Oq = gq(3428),
      mq = gq(3422),
      xq = gq(3416),
      Aq = gq(1183),
      cq = gq(38),
      uq = gq(1710),
      Bq = gq(1341),
      Wq = gq(1422),
      Nq = gq(1018),
      aq = gq.n(Nq),
      Vq = gq(1659),
      dq = gq(57),
      jq = gq(71),
      Hq = gq(2330),
      oq = gq(1313),
      Pq = gq(1592),
      Qq = gq(1101),
      yq = gq(3282),
      tq = gq(4379),
      rq = gq(3366),
      vq = gq(1876),
      hq = gq(3380),
      nq = gq(1718),
      bq = gq(1477),
      iq = gq(2121),
      Zq = gq(1326),
      fq = gq(2517),
      Mq = gq(4858),
      Tq = gq(1070);
    const zq = 15e3,
      Sq = 2500;

    function pq(qq) {
      var Eq;
      let {
        eventName: gq
      } = qq;
      const {
        t: Yq
      } = (0, Aq.v)(), lq = nq.h[gq], [Oq, mq] = (0, dq.useState)((() => Date.now() >= lq.endsAt.getTime())), [xq, cq] = (0, dq.useState)("overall"), uq = function(qq, Eq) {
        const {
          userContext: gq,
          isUserContextUpdating: Yq
        } = (0, Qq.c)(), lq = `${qq}:${Eq}`, [Oq, mq] = (0, dq.useState)({
          requestKey: lq,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, dq.useEffect)((() => {
          if (Yq) return;
          let Oq, xq = !1;
          const Aq = async () => {
            if ("visible" === document.visibilityState) try {
              const Yq = await bq.e.getGameEventLeaderboard(gq, {
                event: qq,
                scope: Eq
              });
              xq || mq({
                requestKey: lq,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Yq
                }
              })
            } catch {
              xq || mq((qq => qq.requestKey === lq && "loaded" === qq.leaderboard.status ? qq : {
                requestKey: lq,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            xq || (Oq = setTimeout(Aq, zq))
          };
          return Aq(), () => {
            xq = !0, clearTimeout(Oq)
          }
        }), [qq, Eq, lq, gq, Yq]), Oq.requestKey === lq ? Oq.leaderboard : {
          status: "loading"
        }
      }(gq, xq), Bq = function(qq) {
        const Eq = (0, dq.useRef)(null),
          gq = (0, dq.useRef)(0),
          Yq = (0, dq.useRef)(),
          [lq, Oq] = (0, dq.useState)({});
        return (0, dq.useEffect)((() => {
          const lq = null === qq || void 0 === qq ? void 0 : qq.entries;
          if (!lq) return;
          const mq = new Map(lq.map((qq => [qq.player.name, qq.value]))),
            xq = Eq.current;
          if (Eq.current = mq, null === xq) return;
          const Aq = {};
          for (const [qq, Eq] of mq) {
            const Yq = xq.get(qq);
            void 0 !== Yq && Eq > Yq && (Aq[qq] = {
              amount: Eq - Yq,
              key: gq.current++
            })
          }
          0 !== Object.keys(Aq).length && (Oq(Aq), clearTimeout(Yq.current), Yq.current = setTimeout((() => {
            Oq({})
          }), Sq))
        }), [qq]), (0, dq.useEffect)((() => () => {
          clearTimeout(Yq.current)
        }), []), lq
      }("loaded" === uq.status ? uq.leaderboard : null), Wq = function(qq) {
        const [Eq, gq] = (0, dq.useState)(null), Yq = "loaded" === qq.status ? qq.leaderboard.goalProgress : void 0;
        return (0, dq.useEffect)((() => {
          Yq && gq(Yq)
        }), [Yq]), Eq
      }(uq), Nq = iq.e[`profileEffect_${lq.prizePack}`];
      if (Oq) return null;
      const Vq = "loaded" === uq.status ? uq.leaderboard : null,
        jq = null !== (Eq = null === Vq || void 0 === Vq ? void 0 : Vq.entries) && void 0 !== Eq ? Eq : null,
        Hq = null !== Vq && void 0 !== Vq && Vq.own && null !== jq && !jq.some((qq => qq.isOwn)) ? Vq.own : null;
      return (0, Tq.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Tq.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Tq.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Tq.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Tq.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Tq.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Yq("gameEvents:live")]
              }), (0, Tq.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Yq("gameEvents:endsIn"), (0, Tq.jsx)(rq.d, {
                  toTime: lq.endsAt,
                  onReachEndOfCountdown: () => {
                    mq(!0)
                  }
                })]
              })]
            }), (0, Tq.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Yq(lq.titleKey)
            }), (0, Tq.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Tq.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [Nq && (0, Tq.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Tq.jsx)(Nq, {})
                }), (0, Tq.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Tq.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Yq("gameEvents:prize")
                  }), (0, Tq.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Yq(lq.prizeNameKey)
                  })]
                })]
              }), (0, Tq.jsx)(Gq, {
                event: lq,
                progress: Wq
              })]
            })]
          }), (0, Tq.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Tq.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Tq.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Yq(lq.leaderboard.titleKey)
              }), (0, Tq.jsx)(Mq.c, {
                ariaLabel: Yq("gameEvents:leaderboardScope"),
                options: nq.e.map((qq => ({
                  value: qq,
                  label: Yq(`gameEvents:${qq}Scope`)
                }))),
                value: xq,
                onChange: cq
              })]
            }), "loading" === uq.status && (0, Tq.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Tq.jsx)(Zq.e, {})
            }), ("unavailable" === uq.status || "loaded" === uq.status && null === jq) && (0, Tq.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Yq("gameEvents:leaderboardUnavailable")
            }), null !== jq && 0 === jq.length && (0, Tq.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Yq("friends" === xq ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== jq && jq.length > 0 && (0, Tq.jsx)("ol", {
              className: "GameEventPanelRows",
              children: jq.map((qq => {
                const Eq = Bq[qq.player.name];
                return (0, Tq.jsxs)("li", {
                  className: aq()("GameEventPanelRow", {
                    GameEventPanelRowOwn: qq.isOwn,
                    GameEventPanelRowTop: qq.rank <= 3
                  }),
                  children: [(0, Tq.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", qq.rank]
                  }), (0, Tq.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Tq.jsx)(fq.h, {
                      playerSocialPreview: {
                        ...qq.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== Eq && (0, Tq.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", Eq.amount.toLocaleString()]
                  }, Eq.key), (0, Tq.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: qq.value.toLocaleString()
                  })]
                }, qq.player.name)
              }))
            }), Hq && (0, Tq.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Tq.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", Hq.rank.toLocaleString()]
              }), (0, Tq.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Yq("gameEvents:yourPlace")
              }), (0, Tq.jsx)("span", {
                className: "GameEventPanelScore",
                children: Hq.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function Gq(qq) {
      let {
        event: Eq,
        progress: gq
      } = qq;
      const {
        t: Yq
      } = (0, Aq.v)(), lq = null !== gq && Eq.prizeGoals.some(((qq, Eq) => gq[Eq] >= qq.target));
      return (0, Tq.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Tq.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Yq(lq ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Tq.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: Eq.prizeGoals.map(((qq, Eq) => {
            const lq = null === gq ? null : Math.min(gq[Eq], qq.target);
            return (0, Tq.jsxs)(dq.Fragment, {
              children: [Eq > 0 && (0, Tq.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Yq("gameEvents:goalsOr")
              }), (0, Tq.jsxs)("div", {
                className: aq()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: lq === qq.target
                }),
                children: [(0, Tq.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Yq(qq.labelKey)
                }), (0, Tq.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Tq.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== lq && void 0 !== lq ? lq : 0) / qq.target * 100 + "%"
                    }
                  }), null !== lq && (0, Tq.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [lq.toLocaleString(), " / ", qq.target.toLocaleString()]
                  })]
                })]
              })]
            }, qq.board)
          }))
        })]
      })
    }
    var Lq = gq(1532),
      Jq = gq(1580),
      kq = gq(1006),
      Rq = gq(702),
      Uq = gq(3358);

    function Fq(qq) {
      let {
        gameNameWithVariation: Eq
      } = qq;
      const gq = (0, Lq.C)(Eq),
        [Yq, lq] = (0, dq.useState)(null);
      if ((0, dq.useEffect)((() => {
          if (!gq) return;
          let qq = !0;
          return (0, Jq.i)(gq).then((Eq => {
            qq && lq(Eq)
          })).catch((qq => {
            console.error(`Failed to load the page copy for ${gq.name}`, qq)
          })), () => {
            qq = !1
          }
        }), [gq]), !gq || !Yq || Yq.name !== gq.name) return null;
      const Oq = (0, Jq.g)(Yq),
        mq = new Set((0, kq.d)((0, Rq.g)()).map((qq => (0, Lq.w)(qq)))),
        xq = Yq.similarGames.filter((qq => mq.has((0, Lq.w)(qq))));
      return (0, Tq.jsx)("div", {
        className: "GamePageContent",
        children: (0, Tq.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Tq.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Tq.jsx)("h2", {
              children: Oq.whatIs
            }), Yq.whatIs.map((qq => (0, Tq.jsx)("p", {
              children: qq
            }, qq)))]
          }), (0, Tq.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Tq.jsx)("h2", {
              children: Oq.howToPlay
            }), Yq.howToPlay.map((qq => (0, Tq.jsx)("p", {
              children: qq
            }, qq)))]
          }), (0, Tq.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Tq.jsx)("h2", {
              children: Oq.features
            }), (0, Tq.jsx)("ul", {
              children: Yq.features.map((qq => (0, Tq.jsx)("li", {
                children: qq
              }, qq)))
            })]
          }), (0, Tq.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Tq.jsx)("h2", {
              children: Oq.tips
            }), (0, Tq.jsx)("ul", {
              children: Yq.tips.map((qq => (0, Tq.jsx)("li", {
                children: qq
              }, qq)))
            })]
          }), (0, Tq.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Tq.jsx)("h2", {
              children: Oq.faq
            }), Yq.faq.map((qq => {
              let {
                question: Eq,
                answer: gq
              } = qq;
              return (0, Tq.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Tq.jsx)("h3", {
                  children: Eq
                }), (0, Tq.jsx)("p", {
                  children: gq
                })]
              }, Eq)
            }))]
          }), xq.length > 0 && (0, Tq.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Tq.jsx)("h2", {
              children: Oq.similarGames
            }), (0, Tq.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: xq.map((qq => (0, Tq.jsx)("li", {
                children: (0, Tq.jsx)(Uq.e, {
                  source: {
                    type: "game",
                    gameNameWithVariation: qq
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, qq)))
            })]
          })]
        })
      })
    }
    var sq = gq(1025),
      Xq = gq(96),
      wq = gq(1109),
      Kq = gq(9326),
      Cq = gq(1639),
      Iq = gq(1512),
      eq = gq(1498),
      Dq = gq(1587),
      qE = gq(1435),
      EE = gq(1336),
      gE = gq(36397),
      YE = gq(1219),
      lE = gq(987),
      OE = gq(307),
      mE = gq(997),
      xE = gq(1529),
      AE = gq(8876),
      cE = gq(24),
      uE = gq(2470),
      BE = gq(729),
      WE = gq(1214),
      NE = gq(6373),
      aE = gq(3369);

    function VE(qq) {
      let {
        preview: Eq,
        isBroken: gq
      } = qq;
      const Yq = null === Eq ? null : (0, Oq.e)(Eq, "small"),
        mq = (0, lq.e)(null !== Yq && void 0 !== Yq ? Yq : Oq.l);
      return null === Eq ? (0, Tq.jsx)("div", {
        className: aq()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: gq
        }),
        children: (0, Tq.jsx)(sq.d, {
          name: gq ? "triangle-exclamation" : "star"
        })
      }) : (0, Tq.jsx)("div", {
        className: aq()("FeaturedGamesPopupSlotThumbnail", xq.i),
        style: (0, xq.e)(mq),
        role: "img",
        "aria-label": Eq.name,
        children: (0, Tq.jsx)(xq.d, {
          image: mq
        })
      })
    }

    function dE(qq) {
      let {
        schematicId: Eq,
        gameName: gq
      } = qq;
      const {
        userContext: lq
      } = (0, Qq.c)(), Oq = (0, aE.c)(), [mq, xq] = (0, dq.useState)(null), [Aq, cq] = (0, dq.useState)(null), [uq, Bq] = (0, dq.useState)(!1), Nq = (0, dq.useCallback)((() => {
        cq(null), bq.e.getFeaturedGames(lq).then((qq => {
          Oq.current && xq(qq.slots)
        })).catch((qq => {
          console.error("Failed to get featured games", qq), Oq.current && cq("Failed to load featured games")
        }))
      }), [lq, Oq]);
      (0, dq.useEffect)((() => {
        Nq()
      }), [Nq]);
      const aq = (qq, Eq) => {
        uq || (Bq(!0), bq.e.setFeaturedGame(lq, qq, Eq).then((() => {
          Oq.current && Nq()
        })).catch((qq => {
          console.error("Failed to set featured game", qq), Oq.current && cq("Failed to update the featured slot")
        })).finally((() => {
          Oq.current && Bq(!1)
        })))
      };
      return (0, Tq.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Tq.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !mq && !Aq && (0, Tq.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Tq.jsx)(Zq.e, {})
        }), Aq && (0, Tq.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: Aq
        }), mq && (0, Tq.jsxs)(Tq.Fragment, {
          children: [(0, Tq.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: mq.map((qq => {
              const gq = qq.schematicId === Eq,
                lq = null === qq.schematicId,
                {
                  categoryGroup: Oq
                } = Yq.J[qq.slotId];
              return (0, Tq.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Tq.jsx)(VE, {
                  preview: qq.preview,
                  isBroken: !lq
                }), (0, Tq.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Tq.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Yq.jb)(Oq), " \xb7 position", " ", (0, Yq.K)(qq.slotId, Yq.Lb) + 1, " of", " ", (0, Yq.Hb)(Oq, Yq.Lb)]
                  }), lq && (0, Tq.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !lq && null !== qq.preview && (0, Tq.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: qq.preview.name
                  }), !lq && null === qq.preview && (0, Tq.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Tq.jsx)(sq.d, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Tq.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [lq && (0, Tq.jsxs)(Wq.v, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      aq(qq.slotId, Eq)
                    },
                    disabled: uq,
                    children: [(0, Tq.jsx)(sq.d, {
                      name: "star"
                    }), " Feature here"]
                  }), !lq && !gq && (0, Tq.jsxs)(Wq.Q, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      aq(qq.slotId, Eq)
                    },
                    disabled: uq,
                    children: [(0, Tq.jsx)(sq.d, {
                      name: "star"
                    }), " Replace"]
                  }), !lq && (0, Tq.jsxs)(Wq.K, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      aq(qq.slotId, null)
                    },
                    disabled: uq,
                    children: [(0, Tq.jsx)(sq.d, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, qq.slotId)
            }))
          }), (0, Tq.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var jE = gq(4501),
      HE = gq(4420),
      oE = gq(3455);
    const PE = 8,
      QE = 12;

    function yE(qq) {
      let {
        customLobbies: Eq,
        favouriteLobbies: gq,
        toggleLikeLobby: Yq,
        showReport: lq
      } = qq;
      const [Oq, mq] = (0, dq.useState)(PE);
      return (0, dq.useEffect)((() => {
        if (Oq >= Eq.length) return;
        let qq = !0;
        return (0, oE.b)().then((() => {
          qq && mq(Oq + QE)
        })), () => {
          qq = !1
        }
      }), [Oq, Eq.length]), (0, Tq.jsx)(Tq.Fragment, {
        children: Eq.slice(0, Oq).map((qq => (0, Tq.jsx)(HE.h, {
          customLobby: qq,
          favouriteLobbies: gq,
          toggleLikeLobby: Yq,
          showReport: lq
        }, qq.name)))
      })
    }
    var tE = gq(4425),
      rE = gq(4437),
      vE = gq(4396),
      hE = gq(3447),
      nE = gq(8867),
      bE = gq(209);
    const iE = {
      skyblock: [gq(36431).d]
    };
    var ZE = gq(598);
    const fE = {
      listedVariations: null,
      backgroundImage: Oq.l,
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

    function ME(qq, Eq) {
      const gq = BE.f[qq.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, Oq.e)(qq, "large"),
        badges: [],
        category: qq.gameCategory,
        title: void 0 !== (null === gq || void 0 === gq ? void 0 : gq.title) ? Eq(gq.title) : qq.name,
        variationTitle: null,
        description: void 0 !== (null === gq || void 0 === gq ? void 0 : gq.description) ? Eq(gq.description) : qq.description,
        ownerSocialPreviewWithoutLocation: "owner" in qq ? qq.owner : null,
        ccu: qq.ccu,
        favourites: qq.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in qq ? qq.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function TE(qq) {
      var Eq, gq, Yq;
      return null !== (Eq = null !== (gq = (0, bE.l)() ? function(qq) {
        for (const [Eq, gq] of Object.entries(iE)) {
          const Yq = [Eq, ...gq.map((qq => (0, OE.Ub)(Eq, qq)))];
          if (Yq.includes(qq)) return Yq
        }
        return null
      }(qq) : null) && void 0 !== gq ? gq : null === (Yq = BE.c[qq]) || void 0 === Yq ? void 0 : Yq.listedVariations) && void 0 !== Eq ? Eq : null
    }

    function zE() {
      const {
        gameNameWithVariation: qq
      } = (0, Iq.v)();
      if ((0, dq.useEffect)(hE.o, []), qq && (0, YE.o)(qq)) return (0, Tq.jsx)(SE, {
        urlId: qq
      }, qq);
      const Eq = qq && (0, lE.j)(qq) ? qq : "firstParty";
      return (0, Tq.jsx)(pE, {}, Eq)
    }

    function SE(qq) {
      let {
        urlId: Eq
      } = qq;
      const {
        userContext: gq,
        isUserContextUpdating: Yq
      } = (0, Qq.c)(), lq = (0, dq.useMemo)((() => (0, Cq.j)(Eq)), [Eq]);
      (0, dq.useMemo)((() => {
        if (null === lq) return;
        const qq = wq.userContextManager.peekCurrentUserContext();
        (null !== qq ? bq.e.getGame(qq, lq.schematicId) : wq.userContextManager.getCurrentUserContext().then((qq => bq.e.getGame(qq, lq.schematicId)))).catch((qq => {
          console.error(`Failed to get the custom game ${lq.schematicId}`, qq), (0, Cq.g)(Eq)
        }))
      }), [lq, Eq]);
      const [Oq, mq] = (0, dq.useState)(null), xq = (0, Kq.d)();
      (0, dq.useEffect)((() => {
        if (null !== lq || Yq) return;
        let qq = !0;
        return bq.e.getGameByUrlId(gq, Eq).then((gq => {
          qq && mq({
            urlId: Eq,
            game: gq
          })
        })).catch((gq => {
          console.error(`Failed to find the custom game with urlId ${Eq}`, gq), qq && (0, eq.navigateToHomePage)()
        })), () => {
          qq = !1
        }
      }), [Eq, lq, Yq, gq]);
      const Aq = null !== lq && void 0 !== lq ? lq : (null === Oq || void 0 === Oq ? void 0 : Oq.urlId) === Eq ? Oq.game : null;
      return null === Aq ? (0, Tq.jsx)(Zq.e, {}) : xq ? (0, Tq.jsx)(pE, {
        gameNameWithVariation: (0, lE.q)(Aq.schematicId),
        knownCustomGame: Aq
      }, Aq.schematicId) : null
    }

    function pE(qq) {
      var Eq, gq, mq, Nq, nq, iq, Zq, Mq;
      let {
        gameNameWithVariation: zq,
        knownCustomGame: Sq = null
      } = qq;
      const {
        t: Gq
      } = (0, Aq.v)();
      (0, uE.e)();
      const Jq = (0, uE.j)(),
        {
          userContext: kq,
          isUserContextUpdating: Rq
        } = (0, Qq.c)(),
        Uq = (0, vE.f)(),
        wq = (0, eq.useNavigatePreserveSearch)(),
        Kq = (0, Iq.v)(),
        Cq = (0, dq.useMemo)((() => zq ? {
          gameNameWithVariation: zq
        } : Kq), [zq, Kq]),
        qE = (0, AE.e)(Cq),
        YE = (0, dq.useMemo)((() => {
          const qq = function(qq) {
            var Eq, gq;
            const Yq = TE(qq);
            if (!Yq || 0 === Yq.length || Yq.includes(qq)) return qq;
            const lq = cq.i.getItem((0, Hq.k)(qq));
            if (lq && Yq.includes(lq)) return lq;
            return null !== (Eq = null === (gq = BE.c[qq]) || void 0 === gq ? void 0 : gq.defaultListedVariation) && void 0 !== Eq ? Eq : Yq[0]
          }(qE.gameNameWithVariation);
          return qq === qE.gameNameWithVariation ? qE : {
            ...qE,
            gameNameWithVariation: qq
          }
        }), [qE]);
      (0, dq.useEffect)((() => {
        const qq = qE.gameNameWithVariation;
        YE.gameNameWithVariation !== qq && qq !== (0, OE.Yb)(qq) && wq((0, Lq.x)(YE.gameNameWithVariation), {
          replace: !0
        })
      }), [YE.gameNameWithVariation, qE.gameNameWithVariation, wq]);
      const [aE, VE] = (0, dq.useState)(""), oE = dq.useRef(null), [PE, QE] = (0, dq.useState)(), hE = (0, lE.j)(YE.gameNameWithVariation), bE = (0, dq.useMemo)((() => hE ? null : function(qq, Eq, gq) {
        var Yq, lq;
        const mq = BE.c[qq];
        return (0, ZE.H)(mq) ? null : {
          listedVariations: TE(qq),
          backgroundImage: (0, Oq.h)(qq, (0, Oq.b)(mq)),
          badges: (0, uq.filterBadges)(mq.badges),
          category: mq.type,
          title: gq(mq.title),
          variationTitle: mq.variationTitle ? gq(mq.variationTitle) : null,
          description: gq(mq.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== Eq ? null !== (Yq = Eq[qq]) && void 0 !== Yq ? Yq : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: mq.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: mq.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (lq = mq.canCreateCustomLobbies) || void 0 === lq || lq,
          countdownInformation: (0, Hq.g)(qq)
        }
      }(YE.gameNameWithVariation, Jq, Gq)), [hE, YE.gameNameWithVariation, Jq, Gq]), [iE, zE] = (0, dq.useState)(!1), [SE, pE] = (0, dq.useState)((() => Sq ? ME(Sq, Gq) : fE)), LE = null !== bE && void 0 !== bE ? bE : SE, [JE] = (0, dq.useState)(LE === fE), kE = (0, lq.e)(LE.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: RE,
        recentlyPlayedCustomLobbies: UE
      } = (0, dq.useMemo)((() => function(qq, Eq, gq, Yq) {
        var lq;
        const Oq = qq => {
            const gq = (0, lE.o)(qq),
              Yq = Eq.find((Eq => "custom" === Eq.type ? Eq.schematicId === gq : Eq.gameNameWithVariation === qq));
            return Yq ? [...Yq.recentLobbies] : []
          },
          mq = (0, uq.getRecentGameNameWithVariationLobbiesKey)(qq),
          xq = null !== (lq = cq.i.getItem(mq)) && void 0 !== lq ? lq : [],
          Aq = [...Oq(qq), ...xq],
          Bq = [];
        for (const cq of Aq)(0, WE.N)(cq) && !Bq.includes(cq) && Bq.push(cq);
        let Wq = Aq;
        if (gq) {
          const qq = Oq("classic_worlds"),
            Eq = Aq.filter((Eq => !qq.includes(Eq)));
          Wq = [...qq, ...Eq]
        }
        const Nq = [],
          aq = !1 === Yq ? [] : Wq;
        for (const cq of aq)(0, WE.N)(cq) || Nq.includes(cq) || Nq.push(cq);
        return {
          recentlyPlayedPublicLobbies: Bq,
          recentlyPlayedCustomLobbies: Nq
        }
      }(YE.gameNameWithVariation, Uq, LE.showWorldsInsteadOfCustomLobbies, LE.canCreateCustomLobbies)), [YE.gameNameWithVariation, Uq, LE.showWorldsInsteadOfCustomLobbies, LE.canCreateCustomLobbies]), [FE, sE] = (0, dq.useState)(!0), [XE, wE] = (0, dq.useState)([]), [KE, CE] = (0, dq.useState)(null), [IE, eE] = (0, dq.useState)("explore"), DE = (0, dq.useRef)(!1), qg = (0, dq.useCallback)((qq => {
        (0, jq.unstable_batchedUpdates)((() => {
          QE(qq), pE((Eq => ({
            ...ME(qq, Gq),
            isFavourite: Eq.isFavourite
          })))
        }))
      }), [Gq]);
      (0, dq.useEffect)((() => {
        null === cE.b.get("gameEntrySource") && (0, cE.f)("gameInformationPageDirect")
      }), []);
      const Eg = (0, dq.useRef)(null);
      (0, dq.useEffect)((() => {
        const qq = qq => {
            Eg.current = qq.target instanceof Element ? qq.target.closest("a, button") : null
          },
          Eq = qq => {
            "Tab" === qq.key && (Eg.current = null)
          };
        return document.addEventListener("pointerdown", qq, !0), document.addEventListener("keydown", Eq, !0), () => {
          document.removeEventListener("pointerdown", qq, !0), document.removeEventListener("keydown", Eq, !0)
        }
      }), []), (0, yq.c)("Enter", (qq => {
        const Eq = qq.target instanceof Element ? qq.target : null;
        if (qq.defaultPrevented || null !== Eq && void 0 !== Eq && Eq.closest("input, textarea, select")) return;
        const gq = null === Eq || void 0 === Eq ? void 0 : Eq.closest("a, button");
        gq && gq !== Eg.current || (qq.preventDefault(), ug())
      })), (0, tq.b)(eq.navigateToHomePage);
      const gg = RE.length > 0 || UE.length > 0,
        Yg = !LE.useRejoinLastLobbyButton || 0 === RE.length,
        lg = hE && null === LE.ownerSocialPreviewWithoutLocation,
        Og = kq.getPlayerName() === (null === PE || void 0 === PE || null === (Eq = PE.owner) || void 0 === Eq ? void 0 : Eq.name),
        mg = null !== (gq = null === (mq = LE.badges.find((qq => "event" === qq.type))) || void 0 === mq ? void 0 : mq.event) && void 0 !== gq ? gq : null,
        xg = Yg ? Wq.p : Wq.g,
        Ag = (0, Tq.jsx)(Bq.e, {
          tooltipInner: (0, Tq.jsx)("div", {
            children: Gq("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Tq.jsx)(xg, {
            className: "GameInformationButton",
            padDefaultFocus: Yg,
            showPress: !0,
            onClick: () => {
              ug()
            },
            children: (0, Tq.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Yg && (0, Tq.jsxs)(Tq.Fragment, {
                children: [(0, Tq.jsx)(sq.d, {
                  name: "play"
                }), " "]
              }), Gq("homePage:quickPlay")]
            })
          })
        });
      (0, dq.useEffect)((() => {
        if (!hE || Rq) return;
        let qq = !0;
        const Eq = (0, lE.o)(YE.gameNameWithVariation);
        return bq.e.getGame(kq, Eq).then((Eq => {
          qq && qg(Eq)
        })).catch((Eq => {
          console.error("Failed to get Custom Game information", Eq), qq && (0, eq.navigateToHomePage)()
        })), bq.e.getFavouriteGames(kq).then((gq => {
          qq && pE((qq => ({
            ...qq,
            isFavourite: gq.includes(Eq)
          })))
        })).catch((Eq => {
          console.error("Failed to get favourite games", Eq), qq && zE(!0)
        })), () => {
          qq = !1
        }
      }), [hE, Rq, YE.gameNameWithVariation, qg, kq]);
      const cg = !hE && null === bE;

      function ug(qq) {
        (0, nE.h)(), wq((0, oq.e)(YE.gameNameWithVariation, qq))
      }(0, dq.useEffect)((() => {
        cg && (0, eq.navigateToHomePage)()
      }), [cg]), (0, dq.useEffect)((() => {
        if (!1 === LE.canCreateCustomLobbies) return;
        let qq = !0;
        return null !== LE.showWorldsInsteadOfCustomLobbies && !1 === Rq && (sE(!0), bq.e.getFavouriteLobbies(kq).then((qq => {
          CE(qq)
        })), bq.e.getOpenCustomLobbies(kq, {
          gameNameWithVariation: LE.showWorldsInsteadOfCustomLobbies ? "classic" : YE.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === IE,
          onlyFavouriteLobbies: "favourite" === IE
        }).then((Eq => {
          qq && (0, jq.unstable_batchedUpdates)((() => {
            wE(Eq), sE(!1)
          }))
        })).catch((Eq => {
          console.error("Failed to get open custom lobbies", Eq), qq && sE(!1)
        }))), () => {
          qq = !1
        }
      }), [Rq, YE, IE, LE.showWorldsInsteadOfCustomLobbies, LE.canCreateCustomLobbies, kq]);
      const Bg = (0, dq.useCallback)((async qq => {
          try {
            if (!KE) return;
            KE.includes(qq) ? (bq.e.unfavouriteLobby(kq, qq), CE(KE.filter((Eq => Eq !== qq)))) : (bq.e.favouriteLobby(kq, qq).catch((qq => {
              console.error("Failed to favourite lobby", qq)
            })), CE([...KE, qq]))
          } catch (Eq) {
            console.error("Failed to like lobby", Eq)
          }
        }), [kq, KE]),
        Wg = (null === PE || void 0 === PE ? void 0 : PE.schematicId) === (0, lE.o)(qE.gameNameWithVariation) ? PE : null,
        Ng = Wg && (0, Lq.G)(qE.gameNameWithVariation, (qq => Gq(qq)), Wg);
      (0, Dq.g)(Wg && (0, Lq.x)(qE.gameNameWithVariation, Wg));
      const ag = Xq.featureFlags.canUseCustomLobbies && !0 === LE.canCreateCustomLobbies,
        Vg = (0, Tq.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Tq.jsx)(Fq, {
            gameNameWithVariation: YE.gameNameWithVariation
          })
        });
      return (0, Tq.jsx)(Tq.Fragment, {
        children: (0, Tq.jsxs)("article", {
          className: aq()("GameInformation", {
            GameInformationFadeIn: JE,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (Nq = LE.countdownInformation) || void 0 === Nq ? void 0 : Nq.type)
          }),
          children: [Ng && (0, Tq.jsx)(Pq.c, {
            meta: Ng
          }), (0, Tq.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Tq.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Tq.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Tq.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Tq.jsx)("div", {
                  className: aq()("GameInformationTopBackgroundImage", xq.i),
                  style: (0, xq.e)(kE),
                  children: (0, Tq.jsx)(xq.d, {
                    image: kE
                  })
                })]
              }), (0, Tq.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Tq.jsx)(jE.d, {}), (0, Tq.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Tq.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Tq.jsxs)("div", {
                      className: aq()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: lg
                      }),
                      children: [LE.badges.map((qq => (0, Tq.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${qq.type}`,
                        children: (0, Tq.jsx)(hq.d, {
                          badge: qq
                        })
                      }, qq.type))), hE && (0, Tq.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Tq.jsx)(vq.c, {
                          text: (0, Yq.db)({
                            type: "playerCrafted"
                          })
                        })
                      }), LE.category && (0, Tq.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Tq.jsx)(vq.c, {
                          text: [{
                            str: (0, Yq.eb)(LE.category).toUpperCase()
                          }]
                        })
                      }), null !== LE.ccu && (0, Tq.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Tq.jsx)(sq.d, {
                          name: "user"
                        }), (0, WE.S)(LE.ccu), " online"]
                      }), null !== LE.ownerSocialPreviewWithoutLocation && (0, Tq.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Tq.jsx)("span", {
                          children: "Made by"
                        }), (0, Tq.jsx)(fq.h, {
                          playerSocialPreview: {
                            ...LE.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), lg && (0, Tq.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Tq.jsx)("span", {
                          children: "Made by"
                        }), (0, Tq.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== LE.favourites && (null !== LE.isFavourite || hE && !iE) && (0, Tq.jsx)(Wq.x, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== DE.current && (DE.current = !0, null !== LE.isFavourite)) {
                              const qq = (0, lE.o)(YE.gameNameWithVariation);
                              let Eq;
                              LE.isFavourite ? (Eq = -1, bq.e.unfavouriteGame(kq, qq).catch((qq => {
                                console.error("Failed to get unfavourite game", qq)
                              })).finally((() => {
                                DE.current = !1
                              }))) : (Eq = 1, bq.e.favouriteGame(kq, qq).catch((qq => {
                                console.error("Failed to get favourite game", qq)
                              })).finally((() => {
                                DE.current = !1
                              }))), pE((qq => ({
                                ...qq,
                                isFavourite: !qq.isFavourite
                              }))), pE((qq => ({
                                ...qq,
                                favourites: qq.favourites + Eq
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (nq = LE.isFavourite) && void 0 !== nq && nq,
                        disabled: null === LE.isFavourite,
                        className: aq()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === LE.isFavourite
                        })
                      }, null === LE.isFavourite ? "pending" : "known"), hE && !lg && Xq.featureFlags.useSocialFeatures && !Og && (0, Tq.jsx)(tE.b, {
                        targetType: "customGame",
                        targetId: (0, lE.o)(YE.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (kq.playerHasRank("developer") || kq.playerHasRank("admin") && Og) && (0, Tq.jsxs)(Wq.p, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          wq((0, xE.n)((0, mE.d)(YE.gameNameWithVariation, !0)))
                        },
                        children: [(0, Tq.jsx)(sq.d, {
                          name: "star-christmas"
                        }), " ", Gq("studio:viewInStudio")]
                      }), hE && kq.playerHasRank("developer") && (0, Tq.jsxs)(Wq.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, NE.c)({
                            schematicId: (0, lE.o)(YE.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Tq.jsx)(sq.d, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), hE && kq.playerHasRank("developer") && (0, Tq.jsxs)(Wq.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          EE.NotificationProvider.showCustomPopup({
                            body: () => (0, Tq.jsx)(dE, {
                              schematicId: (0, lE.o)(YE.gameNameWithVariation),
                              gameName: LE.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Tq.jsx)(sq.d, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (iq = LE.countdownInformation) || void 0 === iq ? void 0 : iq.type) && (0, Tq.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Tq.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Tq.jsx)(rq.d, {
                            toTime: LE.countdownInformation.countdownToTime
                          })]
                        }), (0, Tq.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: LE.countdownInformation.previewText
                        })]
                      })]
                    }, lg ? "pending" : "shown"), (0, Tq.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Tq.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Tq.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [LE.title, " ", LE.variationTitle && (null === (Zq = BE.c[YE.gameNameWithVariation]) || void 0 === Zq ? void 0 : Zq.variationThumbnailUseBigRatio) && (0, Tq.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: LE.variationTitle
                          })]
                        })
                      }), LE.listedVariations && LE.listedVariations.length > 0 && (0, Tq.jsx)("div", {
                        className: aq()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (Mq = BE.c[YE.gameNameWithVariation]) || void 0 === Mq ? void 0 : Mq.variationThumbnailUseBigRatio
                        }),
                        children: LE.listedVariations.map((qq => {
                          var Eq, gq;
                          return (0, Tq.jsxs)(GE, {
                            variation: qq,
                            isSelected: YE.gameNameWithVariation === qq,
                            children: [null !== Jq && (0, Tq.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Tq.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Tq.jsx)(sq.d, {
                                  name: "user"
                                }), " ", (0, WE.S)(null !== (Eq = Jq[qq]) && void 0 !== Eq ? Eq : 0)]
                              })
                            }), (0, Tq.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: Gq(null !== (gq = BE.c[qq].variationTitle) && void 0 !== gq ? gq : BE.c[qq].title)
                            }), (0, Tq.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, uq.filterBadges)(BE.c[qq].badges).map((qq => (0, Tq.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + qq.type,
                                children: (0, Tq.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Tq.jsx)(hq.d, {
                                    badge: qq
                                  })
                                })
                              }, qq.type)))
                            })]
                          }, qq)
                        }))
                      })]
                    }), LE.description && (0, Tq.jsx)("p", {
                      className: "GameInformationDescription",
                      children: LE.description
                    })]
                  }), (0, Tq.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Tq.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Yg && (0, Tq.jsx)(Bq.e, {
                        tooltipInner: (0, Tq.jsx)("div", {
                          children: Gq("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Tq.jsx)(Wq.p, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            ug(RE[0])
                          },
                          children: (0, Tq.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Tq.jsx)(sq.d, {
                              name: "play"
                            }), " ", Gq("homePage:rejoinLobbyNumber", {
                              number: RE[0]
                            })]
                          })
                        })
                      }), Yg && Ag]
                    }), (0, Tq.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Yg && Ag, (0, Tq.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Tq.jsx)(sq.d, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Tq.jsx)(Vq.b, {
                          className: "JoinLobbyInput",
                          placeholderText: Gq("homePage:lobbyName"),
                          maxLength: WE.R,
                          domRef: oE,
                          onValueChange: qq => {
                            qq = (0, WE.Bb)(qq), VE(qq)
                          },
                          onEnter: () => {
                            0 === aE.length ? ug(RE[0]) : ug(aE)
                          }
                        }), (0, Tq.jsx)(Wq.g, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === aE.length ? ug(RE[0]) : ug(aE)
                          },
                          children: Gq("general:join")
                        })]
                      })]
                    }), (0, Tq.jsxs)("section", {
                      className: aq()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !gg
                      }),
                      children: [(0, Tq.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Tq.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Tq.jsx)(sq.d, {
                            name: "clock-rotate-left"
                          }), gg && (0, Tq.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: Gq("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Tq.jsx)(rE.b, {
                        lobbyGroups: [RE, UE],
                        onLobbyClick: qq => {
                          ug(qq)
                        },
                        keyPrefix: YE.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== mg && (0, Tq.jsx)(pq, {
                eventName: mg
              })]
            }), ag && (0, Tq.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Tq.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Tq.jsxs)("div", {
                  className: aq()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === LE.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === LE.showWorldsInsteadOfCustomLobbies && (0, Tq.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Tq.jsx)(sq.d, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Tq.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Tq.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Gq("game:worlds")]
                    })]
                  }), !1 === LE.showWorldsInsteadOfCustomLobbies && (0, Tq.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Tq.jsx)(sq.d, {
                      name: "joystick"
                    }), (0, Tq.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Tq.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Gq("homePage:customLobbies")]
                    })]
                  }), (0, Tq.jsx)(Wq.Q, {
                    onClick: () => {
                      eE("explore")
                    },
                    active: "explore" === IE,
                    children: Gq("general:explore")
                  }), (0, Tq.jsx)(Wq.Q, {
                    onClick: () => {
                      eE("favourite")
                    },
                    active: "favourite" === IE,
                    children: Gq("homePage:favouriteLobbies")
                  }), (0, Tq.jsx)(Wq.Q, {
                    onClick: () => {
                      eE("owned")
                    },
                    active: "owned" === IE,
                    children: Gq("homePage:ownedLobbies")
                  })]
                }), (0, Tq.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Tq.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Tq.jsx)(HE.e, {
                      label: "Create",
                      onClick: () => {
                        EE.NotificationProvider.showCustomPopup({
                          body: qq => (0, Tq.jsx)(gE.CreateCustomLobby, {
                            gameNameWithVariation: YE.gameNameWithVariation,
                            close: qq
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === FE && (0, Tq.jsx)(HE.i, {}), !1 === FE && (0, Tq.jsx)(yE, {
                      customLobbies: XE,
                      favouriteLobbies: KE,
                      toggleLikeLobby: Bg,
                      showReport: Xq.featureFlags.useSocialFeatures && "owned" !== IE
                    })]
                  }), Vg]
                })]
              })
            })]
          }), !ag && Vg]
        })
      })
    }

    function GE(qq) {
      let {
        variation: Eq,
        isSelected: gq,
        children: Yq
      } = qq;
      const Aq = BE.c[Eq],
        uq = (0, Oq.h)(Eq, (0, Oq.i)(Aq)),
        Bq = (0, lq.e)(uq),
        Wq = (0, mq.g)([(0, Oq.f)(Eq, (0, Oq.b)(Aq))]);
      return (0, Tq.jsxs)(eq.LinkPreserveSearch, {
        to: (0, Lq.x)(Eq),
        replace: !0,
        className: aq()("GameInformationVariation", xq.i, {
          SelectedGameInformationVariation: gq
        }),
        onClick: qq => {
          if (!(0, qE.e)(qq)) return;
          const gq = (0, Hq.k)(Eq);
          cq.i.setItem(gq, Eq)
        },
        onMouseEnter: Wq.start,
        onMouseLeave: Wq.cancel,
        onFocus: Wq.start,
        onBlur: Wq.cancel,
        style: (0, xq.e)(Bq),
        children: [(0, Tq.jsx)(xq.d, {
          image: Bq
        }), Yq]
      })
    }
  },
  6373: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => jq
    });
    var Yq = gq(57),
      lq = gq(1422),
      Oq = gq(1477),
      mq = gq(3369),
      xq = gq(1101),
      Aq = gq(1326),
      cq = gq(1341),
      uq = gq(1025),
      Bq = gq(1018),
      Wq = gq.n(Bq),
      Nq = gq(1070);

    function aq(qq) {
      let {
        info: Eq,
        className: gq
      } = qq;
      return (0, Nq.jsxs)("div", {
        className: Wq()("GameApprovalInfoDetails", gq),
        children: [(0, Nq.jsxs)("div", {
          className: Wq()("GameApprovalInfoSummary", Eq.overallPassed ? "Passed" : "Failed"),
          children: [(0, Nq.jsx)(uq.d, {
            name: Eq.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, Nq.jsx)("span", {
            children: Eq.summary
          })]
        }), Eq.rows.length > 0 && (0, Nq.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: Eq.rows.map((qq => (0, Nq.jsxs)("div", {
            className: Wq()("GameApprovalInfoRow", qq.passed ? "Passed" : "Failed"),
            children: [(0, Nq.jsx)(uq.d, {
              name: qq.passed ? "check" : "xmark"
            }), (0, Nq.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, Nq.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: qq.label
              }), (0, Nq.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: qq.valueText
              })]
            })]
          }, qq.label)))
        })]
      })
    }
    var Vq = gq(1183),
      dq = gq(1336);

    function jq(qq) {
      dq.NotificationProvider.showCustomPopup({
        body: () => (0, Nq.jsx)(Hq, {
          ...qq
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function Hq(qq) {
      let {
        schematicId: Eq,
        canOverride: gq,
        onApprovalChanged: Bq
      } = qq;
      const {
        t: Wq
      } = (0, Vq.v)(), {
        userContext: dq
      } = (0, xq.c)(), jq = (0, mq.c)(), [Hq, oq] = (0, Yq.useState)(null), [Pq, Qq] = (0, Yq.useState)(null), [yq, tq] = (0, Yq.useState)(!1), rq = (0, Yq.useCallback)((() => {
        Qq(null), Oq.e.getGameApprovalInfo(dq, Eq).then((qq => {
          jq.current && oq(qq)
        })).catch((qq => {
          console.error("Failed to get game approval info", qq), jq.current && Qq(Wq("studio:approvalLoadFailed"))
        }))
      }), [dq, Eq, jq, Wq]);
      (0, Yq.useEffect)((() => {
        rq()
      }), [rq]);
      const vq = qq => {
        yq || (tq(!0), Oq.e.setGameApproval(dq, Eq, qq).then((() => {
          null === Bq || void 0 === Bq || Bq(), jq.current && rq()
        })).catch((qq => {
          console.error("Failed to set game approval", qq)
        })).finally((() => {
          jq.current && tq(!1)
        })))
      };
      return (0, Nq.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, Nq.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: Wq("studio:approvalTitle")
        }), !Hq && !Pq && (0, Nq.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, Nq.jsx)(Aq.e, {})
        }), Pq && (0, Nq.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: Pq
        }), Hq && (0, Nq.jsxs)(Nq.Fragment, {
          children: [(0, Nq.jsx)(aq, {
            info: Hq
          }), gq && (0, Nq.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== Hq.manualOverride && (0, Nq.jsx)(cq.e, {
              tooltipInner: (0, Nq.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, Nq.jsxs)(lq.p, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  vq(!0)
                },
                disabled: yq,
                children: [(0, Nq.jsx)(uq.d, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== Hq.manualOverride && (0, Nq.jsx)(cq.e, {
              tooltipInner: (0, Nq.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, Nq.jsxs)(lq.K, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  vq(!1)
                },
                disabled: yq,
                children: [(0, Nq.jsx)(uq.d, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== Hq.manualOverride && (0, Nq.jsx)(cq.e, {
              tooltipInner: (0, Nq.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, Nq.jsxs)(lq.g, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  vq(null)
                },
                disabled: yq,
                children: [(0, Nq.jsx)(uq.d, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  9326: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq
    });
    var Yq = gq(57),
      lq = gq(3455);

    function Oq() {
      const [qq, Eq] = (0, Yq.useState)(!1);
      return (0, Yq.useLayoutEffect)((() => {
        let qq = !0;
        return (0, lq.b)().then((() => {
          qq && Eq(!0)
        })), () => {
          qq = !1
        }
      }), []), qq
    }
  },
  8876: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(1313),
      lq = gq(1214),
      Oq = gq(598);

    function mq(qq) {
      return qq = function(qq, Eq) {
        var gq;
        const Yq = new URLSearchParams(Eq),
          lq = Yq.get("lobby"),
          Oq = Yq.get("vm"),
          mq = null !== (gq = lq) && void 0 !== gq ? gq : qq.lobbyName,
          xq = null !== Oq && void 0 !== Oq ? Oq : qq.directJoinVmUrl;
        if (mq === qq.lobbyName && xq === qq.directJoinVmUrl) return qq;
        return {
          ...qq,
          lobbyName: mq,
          directJoinVmUrl: xq
        }
      }(qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), qq = function(qq) {
        if ((0, Oq.H)(qq.directJoinVmUrl)) return qq;
        const Eq = (0, lq.gb)(qq.directJoinVmUrl);
        null === Eq && (qq.directJoinVmUrl = void 0);
        return qq
      }(qq = function(qq) {
        if ((0, Oq.H)(qq.gameNameWithVariation)) return qq;
        return qq.gameNameWithVariation = (0, Yq.i)(qq.gameNameWithVariation), qq
      }(qq))
    }
  },
  8867: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      h: () => lq
    });
    let Yq = !1;

    function lq() {
      Yq = !0
    }

    function Oq() {
      return Yq
    }
  },
  36431: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq,
      g: () => Yq
    });
    const Yq = "skyblockSkills",
      lq = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);