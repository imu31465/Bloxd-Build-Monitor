export const id = 122;
export const ids = [122, 396];
export const modules = {
  36319: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => RF
    });
    var Xk = Ik(318),
      Tk = Ik(3442),
      ik = Ik(3488),
      yk = Ik(3482),
      lk = Ik(3475),
      ak = Ik(1179),
      qk = Ik(41),
      Lk = Ik(1665),
      tk = Ik(1333),
      Zk = Ik(1406),
      jk = Ik(1055),
      ek = Ik.n(jk),
      wk = Ik(1617),
      Hk = Ik(58),
      Jk = Ik(74),
      xk = Ik(2291),
      Pk = Ik(1308),
      Kk = Ik(1560),
      Qk = Ik(1118),
      sk = Ik(3352),
      Vk = Ik(4543),
      zk = Ik(3420),
      Sk = Ik(1849),
      vk = Ik(3437),
      Ek = Ik(1673),
      Ok = Ik(1453),
      nk = Ik(2089),
      Gk = Ik(1318),
      pk = Ik(2525),
      uk = Ik(5016),
      bk = Ik(1096);
    const Rk = 15e3,
      Uk = 2500;

    function Ck(kk) {
      var Fk;
      let {
        eventName: Ik
      } = kk;
      const {
        t: Xk
      } = (0, ak.y)(), Tk = Ek.f[Ik], [ik, yk] = (0, Hk.useState)((() => Date.now() >= Tk.endsAt.getTime())), [lk, qk] = (0, Hk.useState)("overall"), Lk = function(kk, Fk) {
        const {
          userContext: Ik,
          isUserContextUpdating: Xk
        } = (0, Qk.d)(), Tk = `${kk}:${Fk}`, [ik, yk] = (0, Hk.useState)({
          requestKey: Tk,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, Hk.useEffect)((() => {
          if (Xk) return;
          let ik, lk = !1;
          const ak = async () => {
            if ("visible" === document.visibilityState) try {
              const Xk = await Ok.e.getGameEventLeaderboard(Ik, {
                event: kk,
                scope: Fk
              });
              lk || yk({
                requestKey: Tk,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Xk
                }
              })
            } catch {
              lk || yk((kk => kk.requestKey === Tk && "loaded" === kk.leaderboard.status ? kk : {
                requestKey: Tk,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            lk || (ik = setTimeout(ak, Rk))
          };
          return ak(), () => {
            lk = !0, clearTimeout(ik)
          }
        }), [kk, Fk, Tk, Ik, Xk]), ik.requestKey === Tk ? ik.leaderboard : {
          status: "loading"
        }
      }(Ik, lk), tk = function(kk) {
        const Fk = (0, Hk.useRef)(null),
          Ik = (0, Hk.useRef)(0),
          Xk = (0, Hk.useRef)(),
          [Tk, ik] = (0, Hk.useState)({});
        return (0, Hk.useEffect)((() => {
          const Tk = null === kk || void 0 === kk ? void 0 : kk.entries;
          if (!Tk) return;
          const yk = new Map(Tk.map((kk => [kk.player.name, kk.value]))),
            lk = Fk.current;
          if (Fk.current = yk, null === lk) return;
          const ak = {};
          for (const [kk, Fk] of yk) {
            const Xk = lk.get(kk);
            void 0 !== Xk && Fk > Xk && (ak[kk] = {
              amount: Fk - Xk,
              key: Ik.current++
            })
          }
          0 !== Object.keys(ak).length && (ik(ak), clearTimeout(Xk.current), Xk.current = setTimeout((() => {
            ik({})
          }), Uk))
        }), [kk]), (0, Hk.useEffect)((() => () => {
          clearTimeout(Xk.current)
        }), []), Tk
      }("loaded" === Lk.status ? Lk.leaderboard : null), Zk = function(kk) {
        const [Fk, Ik] = (0, Hk.useState)(null), Xk = "loaded" === kk.status ? kk.leaderboard.goalProgress : void 0;
        return (0, Hk.useEffect)((() => {
          Xk && Ik(Xk)
        }), [Xk]), Fk
      }(Lk), jk = nk.d[`profileEffect_${Tk.prizePack}`];
      if (ik) return null;
      const wk = "loaded" === Lk.status ? Lk.leaderboard : null,
        Jk = null !== (Fk = null === wk || void 0 === wk ? void 0 : wk.entries) && void 0 !== Fk ? Fk : null,
        xk = null !== wk && void 0 !== wk && wk.own && null !== Jk && !Jk.some((kk => kk.isOwn)) ? wk.own : null;
      return (0, bk.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, bk.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, bk.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, bk.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, bk.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, bk.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Xk("gameEvents:live")]
              }), (0, bk.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Xk("gameEvents:endsIn"), (0, bk.jsx)(zk.b, {
                  toTime: Tk.endsAt,
                  onReachEndOfCountdown: () => {
                    yk(!0)
                  }
                })]
              })]
            }), (0, bk.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Xk(Tk.titleKey)
            }), (0, bk.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, bk.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [jk && (0, bk.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, bk.jsx)(jk, {})
                }), (0, bk.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, bk.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Xk("gameEvents:prize")
                  }), (0, bk.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Xk(Tk.prizeNameKey)
                  })]
                })]
              }), (0, bk.jsx)(Nk, {
                event: Tk,
                progress: Zk
              })]
            })]
          }), (0, bk.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, bk.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, bk.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Xk(Tk.leaderboard.titleKey)
              }), (0, bk.jsx)(uk.b, {
                ariaLabel: Xk("gameEvents:leaderboardScope"),
                options: Ek.c.map((kk => ({
                  value: kk,
                  label: Xk(`gameEvents:${kk}Scope`)
                }))),
                value: lk,
                onChange: qk
              })]
            }), "loading" === Lk.status && (0, bk.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, bk.jsx)(Gk.c, {})
            }), ("unavailable" === Lk.status || "loaded" === Lk.status && null === Jk) && (0, bk.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Xk("gameEvents:leaderboardUnavailable")
            }), null !== Jk && 0 === Jk.length && (0, bk.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Xk("friends" === lk ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== Jk && Jk.length > 0 && (0, bk.jsx)("ol", {
              className: "GameEventPanelRows",
              children: Jk.map((kk => {
                const Fk = tk[kk.player.name];
                return (0, bk.jsxs)("li", {
                  className: ek()("GameEventPanelRow", {
                    GameEventPanelRowOwn: kk.isOwn,
                    GameEventPanelRowTop: kk.rank <= 3
                  }),
                  children: [(0, bk.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", kk.rank]
                  }), (0, bk.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, bk.jsx)(pk.g, {
                      playerSocialPreview: {
                        ...kk.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== Fk && (0, bk.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", Fk.amount.toLocaleString()]
                  }, Fk.key), (0, bk.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: kk.value.toLocaleString()
                  })]
                }, kk.player.name)
              }))
            }), xk && (0, bk.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, bk.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", xk.rank.toLocaleString()]
              }), (0, bk.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Xk("gameEvents:yourPlace")
              }), (0, bk.jsx)("span", {
                className: "GameEventPanelScore",
                children: xk.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function Nk(kk) {
      let {
        event: Fk,
        progress: Ik
      } = kk;
      const {
        t: Xk
      } = (0, ak.y)(), Tk = null !== Ik && Fk.prizeGoals.some(((kk, Fk) => Ik[Fk] >= kk.target));
      return (0, bk.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, bk.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Xk(Tk ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, bk.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: Fk.prizeGoals.map(((kk, Fk) => {
            const Tk = null === Ik ? null : Math.min(Ik[Fk], kk.target);
            return (0, bk.jsxs)(Hk.Fragment, {
              children: [Fk > 0 && (0, bk.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Xk("gameEvents:goalsOr")
              }), (0, bk.jsxs)("div", {
                className: ek()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Tk === kk.target
                }),
                children: [(0, bk.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Xk(kk.labelKey)
                }), (0, bk.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, bk.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Tk && void 0 !== Tk ? Tk : 0) / kk.target * 100 + "%"
                    }
                  }), null !== Tk && (0, bk.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Tk.toLocaleString(), " / ", kk.target.toLocaleString()]
                  })]
                })]
              })]
            }, kk.board)
          }))
        })]
      })
    }
    var ck = Ik(1511),
      Wk = Ik(1545),
      fk = Ik(1041),
      Bk = Ik(743),
      dk = Ik(3414);

    function Yk(kk) {
      let {
        gameNameWithVariation: Fk
      } = kk;
      const Ik = (0, ck.J)(Fk),
        [Xk, Tk] = (0, Hk.useState)(null);
      if ((0, Hk.useEffect)((() => {
          if (!Ik) return;
          let kk = !0;
          return (0, Wk.e)(Ik).then((Fk => {
            kk && Tk(Fk)
          })).catch((kk => {
            console.error(`Failed to load the page copy for ${Ik.name}`, kk)
          })), () => {
            kk = !1
          }
        }), [Ik]), !Ik || !Xk || Xk.name !== Ik.name) return null;
      const ik = (0, Wk.d)(Xk),
        yk = new Set((0, fk.d)((0, Bk.k)()).map((kk => (0, ck.C)(kk)))),
        lk = Xk.similarGames.filter((kk => yk.has((0, ck.C)(kk))));
      return (0, bk.jsx)("div", {
        className: "GamePageContent",
        children: (0, bk.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, bk.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, bk.jsx)("h2", {
              children: ik.whatIs
            }), Xk.whatIs.map((kk => (0, bk.jsx)("p", {
              children: kk
            }, kk)))]
          }), (0, bk.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, bk.jsx)("h2", {
              children: ik.howToPlay
            }), Xk.howToPlay.map((kk => (0, bk.jsx)("p", {
              children: kk
            }, kk)))]
          }), (0, bk.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, bk.jsx)("h2", {
              children: ik.features
            }), (0, bk.jsx)("ul", {
              children: Xk.features.map((kk => (0, bk.jsx)("li", {
                children: kk
              }, kk)))
            })]
          }), (0, bk.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, bk.jsx)("h2", {
              children: ik.tips
            }), (0, bk.jsx)("ul", {
              children: Xk.tips.map((kk => (0, bk.jsx)("li", {
                children: kk
              }, kk)))
            })]
          }), (0, bk.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, bk.jsx)("h2", {
              children: ik.faq
            }), Xk.faq.map((kk => {
              let {
                question: Fk,
                answer: Ik
              } = kk;
              return (0, bk.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, bk.jsx)("h3", {
                  children: Fk
                }), (0, bk.jsx)("p", {
                  children: Ik
                })]
              }, Fk)
            }))]
          }), lk.length > 0 && (0, bk.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, bk.jsx)("h2", {
              children: ik.similarGames
            }), (0, bk.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: lk.map((kk => (0, bk.jsx)("li", {
                children: (0, bk.jsx)(dk.c, {
                  source: {
                    type: "game",
                    gameNameWithVariation: kk
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, kk)))
            })]
          })]
        })
      })
    }
    var Ak = Ik(1066),
      gk = Ik(95),
      mk = Ik(1120),
      hk = Ik(34231),
      rk = Ik(1597),
      Dk = Ik(1485),
      Mk = Ik(1475),
      kF = Ik(1556),
      FF = Ik(1420),
      IF = Ik(1324),
      XF = Ik(36327),
      TF = Ik(1223),
      iF = Ik(1018),
      yF = Ik(337),
      lF = Ik(1023),
      aF = Ik(1504),
      qF = Ik(8898),
      LF = Ik(25),
      tF = Ik(2438),
      ZF = Ik(768),
      jF = Ik(1217),
      eF = Ik(6501),
      wF = Ik(3428);

    function HF(kk) {
      let {
        preview: Fk,
        isBroken: Ik
      } = kk;
      const Xk = null === Fk ? null : (0, ik.h)(Fk, "small"),
        yk = (0, Tk.e)(null !== Xk && void 0 !== Xk ? Xk : ik.s);
      return null === Fk ? (0, bk.jsx)("div", {
        className: ek()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: Ik
        }),
        children: (0, bk.jsx)(Ak.e, {
          name: Ik ? "triangle-exclamation" : "star"
        })
      }) : (0, bk.jsx)("div", {
        className: ek()("FeaturedGamesPopupSlotThumbnail", lk.g),
        style: (0, lk.f)(yk),
        role: "img",
        "aria-label": Fk.name,
        children: (0, bk.jsx)(lk.d, {
          image: yk
        })
      })
    }

    function JF(kk) {
      let {
        schematicId: Fk,
        gameName: Ik
      } = kk;
      const {
        userContext: Tk
      } = (0, Qk.d)(), ik = (0, wF.d)(), [yk, lk] = (0, Hk.useState)(null), [ak, qk] = (0, Hk.useState)(null), [Lk, tk] = (0, Hk.useState)(!1), jk = (0, Hk.useCallback)((() => {
        qk(null), Ok.e.getFeaturedGames(Tk).then((kk => {
          ik.current && lk(kk.slots)
        })).catch((kk => {
          console.error("Failed to get featured games", kk), ik.current && qk("Failed to load featured games")
        }))
      }), [Tk, ik]);
      (0, Hk.useEffect)((() => {
        jk()
      }), [jk]);
      const ek = (kk, Fk) => {
        Lk || (tk(!0), Ok.e.setFeaturedGame(Tk, kk, Fk).then((() => {
          ik.current && jk()
        })).catch((kk => {
          console.error("Failed to set featured game", kk), ik.current && qk("Failed to update the featured slot")
        })).finally((() => {
          ik.current && tk(!1)
        })))
      };
      return (0, bk.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, bk.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !yk && !ak && (0, bk.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, bk.jsx)(Gk.c, {})
        }), ak && (0, bk.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: ak
        }), yk && (0, bk.jsxs)(bk.Fragment, {
          children: [(0, bk.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: yk.map((kk => {
              const Ik = kk.schematicId === Fk,
                Tk = null === kk.schematicId,
                {
                  categoryGroup: ik
                } = Xk.N[kk.slotId];
              return (0, bk.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, bk.jsx)(HF, {
                  preview: kk.preview,
                  isBroken: !Tk
                }), (0, bk.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, bk.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Xk.mb)(ik), " \xb7 position", " ", (0, Xk.P)(kk.slotId, Xk.Ub) + 1, " of", " ", (0, Xk.Sb)(ik, Xk.Ub)]
                  }), Tk && (0, bk.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Tk && null !== kk.preview && (0, bk.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: kk.preview.name
                  }), !Tk && null === kk.preview && (0, bk.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, bk.jsx)(Ak.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, bk.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Tk && (0, bk.jsxs)(Zk.q, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      ek(kk.slotId, Fk)
                    },
                    disabled: Lk,
                    children: [(0, bk.jsx)(Ak.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !Tk && !Ik && (0, bk.jsxs)(Zk.Q, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      ek(kk.slotId, Fk)
                    },
                    disabled: Lk,
                    children: [(0, bk.jsx)(Ak.e, {
                      name: "star"
                    }), " Replace"]
                  }), !Tk && (0, bk.jsxs)(Zk.G, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      ek(kk.slotId, null)
                    },
                    disabled: Lk,
                    children: [(0, bk.jsx)(Ak.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, kk.slotId)
            }))
          }), (0, bk.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var xF = Ik(4663),
      PF = Ik(4587),
      KF = Ik(3378);
    const QF = 8,
      sF = 12;

    function VF(kk) {
      let {
        customLobbies: Fk,
        favouriteLobbies: Ik,
        toggleLikeLobby: Xk,
        showReport: Tk
      } = kk;
      const [ik, yk] = (0, Hk.useState)(QF);
      return (0, Hk.useEffect)((() => {
        if (ik >= Fk.length) return;
        let kk = !0;
        return (0, KF.e)().then((() => {
          kk && yk(ik + sF)
        })), () => {
          kk = !1
        }
      }), [ik, Fk.length]), (0, bk.jsx)(bk.Fragment, {
        children: Fk.slice(0, ik).map((kk => (0, bk.jsx)(PF.f, {
          customLobby: kk,
          favouriteLobbies: Ik,
          toggleLikeLobby: Xk,
          showReport: Tk
        }, kk.name)))
      })
    }
    var zF = Ik(4595),
      SF = Ik(4607),
      oF = Ik(4562),
      vF = Ik(3520),
      EF = Ik(8895),
      OF = Ik(207);
    const nF = {
      skyblock: [Ik(36363).e]
    };
    var GF = Ik(628);
    const pF = {
      listedVariations: null,
      backgroundImage: ik.s,
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

    function uF(kk, Fk) {
      const Ik = ZF.g[kk.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, ik.h)(kk, "large"),
        badges: [],
        category: kk.gameCategory,
        title: void 0 !== (null === Ik || void 0 === Ik ? void 0 : Ik.title) ? Fk(Ik.title) : kk.name,
        variationTitle: null,
        description: void 0 !== (null === Ik || void 0 === Ik ? void 0 : Ik.description) ? Fk(Ik.description) : kk.description,
        ownerSocialPreviewWithoutLocation: "owner" in kk ? kk.owner : null,
        ccu: kk.ccu,
        favourites: kk.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in kk ? kk.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function bF(kk) {
      var Fk, Ik, Xk;
      return null !== (Fk = null !== (Ik = (0, OF.h)() ? function(kk) {
        for (const [Fk, Ik] of Object.entries(nF)) {
          const Xk = [Fk, ...Ik.map((kk => (0, yF.$b)(Fk, kk)))];
          if (Xk.includes(kk)) return Xk
        }
        return null
      }(kk) : null) && void 0 !== Ik ? Ik : null === (Xk = ZF.e[kk]) || void 0 === Xk ? void 0 : Xk.listedVariations) && void 0 !== Fk ? Fk : null
    }

    function RF() {
      const {
        gameNameWithVariation: kk
      } = (0, Dk.A)();
      if ((0, Hk.useEffect)(vF.p, []), kk && (0, TF.r)(kk)) return (0, bk.jsx)(UF, {
        urlId: kk
      }, kk);
      const Fk = kk && (0, iF.j)(kk) ? kk : "firstParty";
      return (0, bk.jsx)(CF, {}, Fk)
    }

    function UF(kk) {
      let {
        urlId: Fk
      } = kk;
      const {
        userContext: Ik,
        isUserContextUpdating: Xk
      } = (0, Qk.d)(), Tk = (0, Hk.useMemo)((() => (0, rk.e)(Fk)), [Fk]);
      (0, Hk.useMemo)((() => {
        if (null === Tk) return;
        const kk = mk.userContextManager.peekCurrentUserContext();
        (null !== kk ? Ok.e.getGame(kk, Tk.schematicId) : mk.userContextManager.getCurrentUserContext().then((kk => Ok.e.getGame(kk, Tk.schematicId)))).catch((kk => {
          console.error(`Failed to get the custom game ${Tk.schematicId}`, kk), (0, rk.d)(Fk)
        }))
      }), [Tk, Fk]);
      const [ik, yk] = (0, Hk.useState)(null), lk = (0, hk.c)();
      (0, Hk.useEffect)((() => {
        if (null !== Tk || Xk) return;
        let kk = !0;
        return Ok.e.getGameByUrlId(Ik, Fk).then((Ik => {
          kk && yk({
            urlId: Fk,
            game: Ik
          })
        })).catch((Ik => {
          console.error(`Failed to find the custom game with urlId ${Fk}`, Ik), kk && (0, Mk.navigateToHomePage)()
        })), () => {
          kk = !1
        }
      }), [Fk, Tk, Xk, Ik]);
      const ak = null !== Tk && void 0 !== Tk ? Tk : (null === ik || void 0 === ik ? void 0 : ik.urlId) === Fk ? ik.game : null;
      return null === ak ? (0, bk.jsx)(Gk.c, {}) : lk ? (0, bk.jsx)(CF, {
        gameNameWithVariation: (0, iF.r)(ak.schematicId),
        knownCustomGame: ak
      }, ak.schematicId) : null
    }

    function CF(kk) {
      var Fk, Ik, yk, jk, Ek, nk, Gk, uk;
      let {
        gameNameWithVariation: Rk,
        knownCustomGame: Uk = null
      } = kk;
      const {
        t: Nk
      } = (0, ak.y)();
      (0, tF.e)();
      const Wk = (0, tF.l)(),
        {
          userContext: fk,
          isUserContextUpdating: Bk
        } = (0, Qk.d)(),
        dk = (0, oF.f)(),
        mk = (0, Mk.useNavigatePreserveSearch)(),
        hk = (0, Dk.A)(),
        rk = (0, Hk.useMemo)((() => Rk ? {
          gameNameWithVariation: Rk
        } : hk), [Rk, hk]),
        FF = (0, qF.d)(rk),
        TF = (0, Hk.useMemo)((() => {
          const kk = function(kk) {
            var Fk, Ik;
            const Xk = bF(kk);
            if (!Xk || 0 === Xk.length || Xk.includes(kk)) return kk;
            const Tk = qk.j.getItem((0, xk.h)(kk));
            if (Tk && Xk.includes(Tk)) return Tk;
            return null !== (Fk = null === (Ik = ZF.e[kk]) || void 0 === Ik ? void 0 : Ik.defaultListedVariation) && void 0 !== Fk ? Fk : Xk[0]
          }(FF.gameNameWithVariation);
          return kk === FF.gameNameWithVariation ? FF : {
            ...FF,
            gameNameWithVariation: kk
          }
        }), [FF]);
      (0, Hk.useEffect)((() => {
        const kk = FF.gameNameWithVariation;
        TF.gameNameWithVariation !== kk && kk !== (0, yF.dc)(kk) && mk((0, ck.F)(TF.gameNameWithVariation), {
          replace: !0
        })
      }), [TF.gameNameWithVariation, FF.gameNameWithVariation, mk]);
      const [wF, HF] = (0, Hk.useState)(""), KF = Hk.useRef(null), [QF, sF] = (0, Hk.useState)(), vF = (0, iF.j)(TF.gameNameWithVariation), OF = (0, Hk.useMemo)((() => vF ? null : function(kk, Fk, Ik) {
        var Xk, Tk;
        const yk = ZF.e[kk];
        return (0, GF.Q)(yk) ? null : {
          listedVariations: bF(kk),
          backgroundImage: (0, ik.m)(kk, (0, ik.e)(yk)),
          badges: (0, Lk.filterBadges)(yk.badges),
          category: yk.type,
          title: Ik(yk.title),
          variationTitle: yk.variationTitle ? Ik(yk.variationTitle) : null,
          description: Ik(yk.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== Fk ? null !== (Xk = Fk[kk]) && void 0 !== Xk ? Xk : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: yk.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: yk.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (Tk = yk.canCreateCustomLobbies) || void 0 === Tk || Tk,
          countdownInformation: (0, xk.d)(kk)
        }
      }(TF.gameNameWithVariation, Wk, Nk)), [vF, TF.gameNameWithVariation, Wk, Nk]), [nF, RF] = (0, Hk.useState)(!1), [UF, CF] = (0, Hk.useState)((() => Uk ? uF(Uk, Nk) : pF)), cF = null !== OF && void 0 !== OF ? OF : UF, [WF] = (0, Hk.useState)(cF === pF), fF = (0, Tk.e)(cF.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: BF,
        recentlyPlayedCustomLobbies: dF
      } = (0, Hk.useMemo)((() => function(kk, Fk, Ik, Xk) {
        var Tk;
        const ik = kk => {
            const Ik = (0, iF.n)(kk),
              Xk = Fk.find((Fk => "custom" === Fk.type ? Fk.schematicId === Ik : Fk.gameNameWithVariation === kk));
            return Xk ? [...Xk.recentLobbies] : []
          },
          yk = (0, Lk.getRecentGameNameWithVariationLobbiesKey)(kk),
          lk = null !== (Tk = qk.j.getItem(yk)) && void 0 !== Tk ? Tk : [],
          ak = [...ik(kk), ...lk],
          tk = [];
        for (const qk of ak)(0, jF.K)(qk) && !tk.includes(qk) && tk.push(qk);
        let Zk = ak;
        if (Ik) {
          const kk = ik("classic_worlds"),
            Fk = ak.filter((Fk => !kk.includes(Fk)));
          Zk = [...kk, ...Fk]
        }
        const jk = [],
          ek = !1 === Xk ? [] : Zk;
        for (const qk of ek)(0, jF.K)(qk) || jk.includes(qk) || jk.push(qk);
        return {
          recentlyPlayedPublicLobbies: tk,
          recentlyPlayedCustomLobbies: jk
        }
      }(TF.gameNameWithVariation, dk, cF.showWorldsInsteadOfCustomLobbies, cF.canCreateCustomLobbies)), [TF.gameNameWithVariation, dk, cF.showWorldsInsteadOfCustomLobbies, cF.canCreateCustomLobbies]), [YF, AF] = (0, Hk.useState)(!0), [gF, mF] = (0, Hk.useState)([]), [hF, rF] = (0, Hk.useState)(null), [DF, MF] = (0, Hk.useState)("explore"), kI = (0, Hk.useRef)(!1), FI = (0, Hk.useCallback)((kk => {
        (0, Jk.unstable_batchedUpdates)((() => {
          sF(kk), CF((Fk => ({
            ...uF(kk, Nk),
            isFavourite: Fk.isFavourite
          })))
        }))
      }), [Nk]);
      (0, Hk.useEffect)((() => {
        null === LF.d.get("gameEntrySource") && (0, LF.h)("gameInformationPageDirect")
      }), []);
      const II = (0, Hk.useRef)(null);
      (0, Hk.useEffect)((() => {
        const kk = kk => {
            II.current = kk.target instanceof Element ? kk.target.closest("a, button") : null
          },
          Fk = kk => {
            "Tab" === kk.key && (II.current = null)
          };
        return document.addEventListener("pointerdown", kk, !0), document.addEventListener("keydown", Fk, !0), () => {
          document.removeEventListener("pointerdown", kk, !0), document.removeEventListener("keydown", Fk, !0)
        }
      }), []), (0, sk.b)("Enter", (kk => {
        const Fk = kk.target instanceof Element ? kk.target : null;
        if (kk.defaultPrevented || null !== Fk && void 0 !== Fk && Fk.closest("input, textarea, select")) return;
        const Ik = null === Fk || void 0 === Fk ? void 0 : Fk.closest("a, button");
        Ik && Ik !== II.current || (kk.preventDefault(), tI())
      })), (0, Vk.b)(Mk.navigateToHomePage);
      const XI = BF.length > 0 || dF.length > 0,
        TI = !cF.useRejoinLastLobbyButton || 0 === BF.length,
        iI = vF && null === cF.ownerSocialPreviewWithoutLocation,
        yI = fk.getPlayerName() === (null === QF || void 0 === QF || null === (Fk = QF.owner) || void 0 === Fk ? void 0 : Fk.name),
        lI = null !== (Ik = null === (yk = cF.badges.find((kk => "event" === kk.type))) || void 0 === yk ? void 0 : yk.event) && void 0 !== Ik ? Ik : null,
        aI = TI ? Zk.m : Zk.d,
        qI = (0, bk.jsx)(tk.g, {
          tooltipInner: (0, bk.jsx)("div", {
            children: Nk("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, bk.jsx)(aI, {
            className: "GameInformationButton",
            padDefaultFocus: TI,
            showPress: !0,
            onClick: () => {
              tI()
            },
            children: (0, bk.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [TI && (0, bk.jsxs)(bk.Fragment, {
                children: [(0, bk.jsx)(Ak.e, {
                  name: "play"
                }), " "]
              }), Nk("homePage:quickPlay")]
            })
          })
        });
      (0, Hk.useEffect)((() => {
        if (!vF || Bk) return;
        let kk = !0;
        const Fk = (0, iF.n)(TF.gameNameWithVariation);
        return Ok.e.getGame(fk, Fk).then((Fk => {
          kk && FI(Fk)
        })).catch((Fk => {
          console.error("Failed to get Custom Game information", Fk), kk && (0, Mk.navigateToHomePage)()
        })), Ok.e.getFavouriteGames(fk).then((Ik => {
          kk && CF((kk => ({
            ...kk,
            isFavourite: Ik.includes(Fk)
          })))
        })).catch((Fk => {
          console.error("Failed to get favourite games", Fk), kk && RF(!0)
        })), () => {
          kk = !1
        }
      }), [vF, Bk, TF.gameNameWithVariation, FI, fk]);
      const LI = !vF && null === OF;

      function tI(kk) {
        (0, EF.e)(), mk((0, Pk.e)(TF.gameNameWithVariation, kk))
      }(0, Hk.useEffect)((() => {
        LI && (0, Mk.navigateToHomePage)()
      }), [LI]), (0, Hk.useEffect)((() => {
        if (!1 === cF.canCreateCustomLobbies) return;
        let kk = !0;
        return null !== cF.showWorldsInsteadOfCustomLobbies && !1 === Bk && (AF(!0), Ok.e.getFavouriteLobbies(fk).then((kk => {
          rF(kk)
        })), Ok.e.getOpenCustomLobbies(fk, {
          gameNameWithVariation: cF.showWorldsInsteadOfCustomLobbies ? "classic" : TF.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === DF,
          onlyFavouriteLobbies: "favourite" === DF
        }).then((Fk => {
          kk && (0, Jk.unstable_batchedUpdates)((() => {
            mF(Fk), AF(!1)
          }))
        })).catch((Fk => {
          console.error("Failed to get open custom lobbies", Fk), kk && AF(!1)
        }))), () => {
          kk = !1
        }
      }), [Bk, TF, DF, cF.showWorldsInsteadOfCustomLobbies, cF.canCreateCustomLobbies, fk]);
      const ZI = (0, Hk.useCallback)((async kk => {
          try {
            if (!hF) return;
            hF.includes(kk) ? (Ok.e.unfavouriteLobby(fk, kk), rF(hF.filter((Fk => Fk !== kk)))) : (Ok.e.favouriteLobby(fk, kk).catch((kk => {
              console.error("Failed to favourite lobby", kk)
            })), rF([...hF, kk]))
          } catch (Fk) {
            console.error("Failed to like lobby", Fk)
          }
        }), [fk, hF]),
        jI = (null === QF || void 0 === QF ? void 0 : QF.schematicId) === (0, iF.n)(FF.gameNameWithVariation) ? QF : null,
        eI = jI && (0, ck.N)(FF.gameNameWithVariation, (kk => Nk(kk)), jI);
      (0, kF.e)(jI && (0, ck.F)(FF.gameNameWithVariation, jI));
      const wI = gk.featureFlags.canUseCustomLobbies && !0 === cF.canCreateCustomLobbies,
        HI = (0, bk.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, bk.jsx)(Yk, {
            gameNameWithVariation: TF.gameNameWithVariation
          })
        });
      return (0, bk.jsx)(bk.Fragment, {
        children: (0, bk.jsxs)("article", {
          className: ek()("GameInformation", {
            GameInformationFadeIn: WF,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (jk = cF.countdownInformation) || void 0 === jk ? void 0 : jk.type)
          }),
          children: [eI && (0, bk.jsx)(Kk.d, {
            meta: eI
          }), (0, bk.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, bk.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, bk.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, bk.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, bk.jsx)("div", {
                  className: ek()("GameInformationTopBackgroundImage", lk.g),
                  style: (0, lk.f)(fF),
                  children: (0, bk.jsx)(lk.d, {
                    image: fF
                  })
                })]
              }), (0, bk.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, bk.jsx)(xF.e, {}), (0, bk.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, bk.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, bk.jsxs)("div", {
                      className: ek()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: iI
                      }),
                      children: [cF.badges.map((kk => (0, bk.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${kk.type}`,
                        children: (0, bk.jsx)(vk.c, {
                          badge: kk
                        })
                      }, kk.type))), vF && (0, bk.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, bk.jsx)(Sk.c, {
                          text: (0, Xk.bb)({
                            type: "playerCrafted"
                          })
                        })
                      }), cF.category && (0, bk.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, bk.jsx)(Sk.c, {
                          text: [{
                            str: (0, Xk.eb)(cF.category).toUpperCase()
                          }]
                        })
                      }), null !== cF.ccu && (0, bk.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, bk.jsx)(Ak.e, {
                          name: "user"
                        }), (0, jF.Q)(cF.ccu), " online"]
                      }), null !== cF.ownerSocialPreviewWithoutLocation && (0, bk.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, bk.jsx)("span", {
                          children: "Made by"
                        }), (0, bk.jsx)(pk.g, {
                          playerSocialPreview: {
                            ...cF.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), iI && (0, bk.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, bk.jsx)("span", {
                          children: "Made by"
                        }), (0, bk.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== cF.favourites && (null !== cF.isFavourite || vF && !nF) && (0, bk.jsx)(Zk.t, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== kI.current && (kI.current = !0, null !== cF.isFavourite)) {
                              const kk = (0, iF.n)(TF.gameNameWithVariation);
                              let Fk;
                              cF.isFavourite ? (Fk = -1, Ok.e.unfavouriteGame(fk, kk).catch((kk => {
                                console.error("Failed to get unfavourite game", kk)
                              })).finally((() => {
                                kI.current = !1
                              }))) : (Fk = 1, Ok.e.favouriteGame(fk, kk).catch((kk => {
                                console.error("Failed to get favourite game", kk)
                              })).finally((() => {
                                kI.current = !1
                              }))), CF((kk => ({
                                ...kk,
                                isFavourite: !kk.isFavourite
                              }))), CF((kk => ({
                                ...kk,
                                favourites: kk.favourites + Fk
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (Ek = cF.isFavourite) && void 0 !== Ek && Ek,
                        disabled: null === cF.isFavourite,
                        className: ek()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === cF.isFavourite
                        })
                      }, null === cF.isFavourite ? "pending" : "known"), vF && !iI && gk.featureFlags.useSocialFeatures && !yI && (0, bk.jsx)(zF.e, {
                        targetType: "customGame",
                        targetId: (0, iF.n)(TF.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (fk.playerHasRank("developer") || fk.playerHasRank("admin") && yI) && (0, bk.jsxs)(Zk.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          mk((0, aF.m)((0, lF.d)(TF.gameNameWithVariation, !0)))
                        },
                        children: [(0, bk.jsx)(Ak.e, {
                          name: "star-christmas"
                        }), " ", Nk("studio:viewInStudio")]
                      }), vF && fk.playerHasRank("developer") && (0, bk.jsxs)(Zk.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, eF.d)({
                            schematicId: (0, iF.n)(TF.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, bk.jsx)(Ak.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), vF && fk.playerHasRank("developer") && (0, bk.jsxs)(Zk.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          IF.NotificationProvider.showCustomPopup({
                            body: () => (0, bk.jsx)(JF, {
                              schematicId: (0, iF.n)(TF.gameNameWithVariation),
                              gameName: cF.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, bk.jsx)(Ak.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (nk = cF.countdownInformation) || void 0 === nk ? void 0 : nk.type) && (0, bk.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, bk.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, bk.jsx)(zk.b, {
                            toTime: cF.countdownInformation.countdownToTime
                          })]
                        }), (0, bk.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: cF.countdownInformation.previewText
                        })]
                      })]
                    }, iI ? "pending" : "shown"), (0, bk.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, bk.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, bk.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [cF.title, " ", cF.variationTitle && (null === (Gk = ZF.e[TF.gameNameWithVariation]) || void 0 === Gk ? void 0 : Gk.variationThumbnailUseBigRatio) && (0, bk.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: cF.variationTitle
                          })]
                        })
                      }), cF.listedVariations && cF.listedVariations.length > 0 && (0, bk.jsx)("div", {
                        className: ek()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (uk = ZF.e[TF.gameNameWithVariation]) || void 0 === uk ? void 0 : uk.variationThumbnailUseBigRatio
                        }),
                        children: cF.listedVariations.map((kk => {
                          var Fk, Ik;
                          return (0, bk.jsxs)(NF, {
                            variation: kk,
                            isSelected: TF.gameNameWithVariation === kk,
                            children: [null !== Wk && (0, bk.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, bk.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, bk.jsx)(Ak.e, {
                                  name: "user"
                                }), " ", (0, jF.Q)(null !== (Fk = Wk[kk]) && void 0 !== Fk ? Fk : 0)]
                              })
                            }), (0, bk.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: Nk(null !== (Ik = ZF.e[kk].variationTitle) && void 0 !== Ik ? Ik : ZF.e[kk].title)
                            }), (0, bk.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, Lk.filterBadges)(ZF.e[kk].badges).map((kk => (0, bk.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + kk.type,
                                children: (0, bk.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, bk.jsx)(vk.c, {
                                    badge: kk
                                  })
                                })
                              }, kk.type)))
                            })]
                          }, kk)
                        }))
                      })]
                    }), cF.description && (0, bk.jsx)("p", {
                      className: "GameInformationDescription",
                      children: cF.description
                    })]
                  }), (0, bk.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, bk.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!TI && (0, bk.jsx)(tk.g, {
                        tooltipInner: (0, bk.jsx)("div", {
                          children: Nk("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, bk.jsx)(Zk.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            tI(BF[0])
                          },
                          children: (0, bk.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, bk.jsx)(Ak.e, {
                              name: "play"
                            }), " ", Nk("homePage:rejoinLobbyNumber", {
                              number: BF[0]
                            })]
                          })
                        })
                      }), TI && qI]
                    }), (0, bk.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!TI && qI, (0, bk.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, bk.jsx)(Ak.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, bk.jsx)(wk.c, {
                          className: "JoinLobbyInput",
                          placeholderText: Nk("homePage:lobbyName"),
                          maxLength: jF.M,
                          domRef: KF,
                          onValueChange: kk => {
                            kk = (0, jF.qb)(kk), HF(kk)
                          },
                          onEnter: () => {
                            0 === wF.length ? tI(BF[0]) : tI(wF)
                          }
                        }), (0, bk.jsx)(Zk.d, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === wF.length ? tI(BF[0]) : tI(wF)
                          },
                          children: Nk("general:join")
                        })]
                      })]
                    }), (0, bk.jsxs)("section", {
                      className: ek()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !XI
                      }),
                      children: [(0, bk.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, bk.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, bk.jsx)(Ak.e, {
                            name: "clock-rotate-left"
                          }), XI && (0, bk.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: Nk("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, bk.jsx)(SF.e, {
                        lobbyGroups: [BF, dF],
                        onLobbyClick: kk => {
                          tI(kk)
                        },
                        keyPrefix: TF.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== lI && (0, bk.jsx)(Ck, {
                eventName: lI
              })]
            }), wI && (0, bk.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, bk.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, bk.jsxs)("div", {
                  className: ek()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === cF.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === cF.showWorldsInsteadOfCustomLobbies && (0, bk.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, bk.jsx)(Ak.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, bk.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, bk.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Nk("game:worlds")]
                    })]
                  }), !1 === cF.showWorldsInsteadOfCustomLobbies && (0, bk.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, bk.jsx)(Ak.e, {
                      name: "joystick"
                    }), (0, bk.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, bk.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Nk("homePage:customLobbies")]
                    })]
                  }), (0, bk.jsx)(Zk.Q, {
                    onClick: () => {
                      MF("explore")
                    },
                    active: "explore" === DF,
                    children: Nk("general:explore")
                  }), (0, bk.jsx)(Zk.Q, {
                    onClick: () => {
                      MF("favourite")
                    },
                    active: "favourite" === DF,
                    children: Nk("homePage:favouriteLobbies")
                  }), (0, bk.jsx)(Zk.Q, {
                    onClick: () => {
                      MF("owned")
                    },
                    active: "owned" === DF,
                    children: Nk("homePage:ownedLobbies")
                  })]
                }), (0, bk.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, bk.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, bk.jsx)(PF.c, {
                      label: "Create",
                      onClick: () => {
                        IF.NotificationProvider.showCustomPopup({
                          body: kk => (0, bk.jsx)(XF.CreateCustomLobby, {
                            gameNameWithVariation: TF.gameNameWithVariation,
                            close: kk
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === YF && (0, bk.jsx)(PF.g, {}), !1 === YF && (0, bk.jsx)(VF, {
                      customLobbies: gF,
                      favouriteLobbies: hF,
                      toggleLikeLobby: ZI,
                      showReport: gk.featureFlags.useSocialFeatures && "owned" !== DF
                    })]
                  }), HI]
                })]
              })
            })]
          }), !wI && HI]
        })
      })
    }

    function NF(kk) {
      let {
        variation: Fk,
        isSelected: Ik,
        children: Xk
      } = kk;
      const ak = ZF.e[Fk],
        Lk = (0, ik.m)(Fk, (0, ik.p)(ak)),
        tk = (0, Tk.e)(Lk),
        Zk = (0, yk.d)([(0, ik.k)(Fk, (0, ik.e)(ak))]);
      return (0, bk.jsxs)(Mk.LinkPreserveSearch, {
        to: (0, ck.F)(Fk),
        replace: !0,
        className: ek()("GameInformationVariation", lk.g, {
          SelectedGameInformationVariation: Ik
        }),
        onClick: kk => {
          if (!(0, FF.e)(kk)) return;
          const Ik = (0, xk.h)(Fk);
          qk.j.setItem(Ik, Fk)
        },
        onMouseEnter: Zk.start,
        onMouseLeave: Zk.cancel,
        onFocus: Zk.start,
        onBlur: Zk.cancel,
        style: (0, lk.f)(tk),
        children: [(0, bk.jsx)(lk.d, {
          image: tk
        }), Xk]
      })
    }
  },
  6501: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => xk
    });
    var Xk = Ik(58),
      Tk = Ik(1406),
      ik = Ik(1453),
      yk = Ik(3428),
      lk = Ik(1118),
      ak = Ik(1318),
      qk = Ik(1333),
      Lk = Ik(1066),
      tk = Ik(1055),
      Zk = Ik.n(tk),
      jk = Ik(6498),
      ek = Ik(1096);

    function wk(kk) {
      let {
        info: Fk,
        className: Ik
      } = kk;
      const {
        statusText: Xk,
        rowText: Tk
      } = (0, jk.g)();
      return (0, ek.jsxs)("div", {
        className: Zk()("GameApprovalInfoDetails", Ik),
        children: [(0, ek.jsxs)("div", {
          className: Zk()("GameApprovalInfoSummary", Fk.overallPassed ? "Passed" : "Failed"),
          children: [(0, ek.jsx)(Lk.e, {
            name: Fk.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, ek.jsx)("span", {
            children: Xk(Fk.status)
          })]
        }), Fk.rows.length > 0 && (0, ek.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: Fk.rows.map((kk => {
            const {
              label: Fk,
              value: Ik
            } = Tk(kk);
            return (0, ek.jsxs)("div", {
              className: Zk()("GameApprovalInfoRow", kk.passed ? "Passed" : "Failed"),
              children: [(0, ek.jsx)(Lk.e, {
                name: kk.passed ? "check" : "xmark"
              }), (0, ek.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, ek.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: Fk
                }), null !== Ik && (0, ek.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: Ik
                })]
              })]
            }, kk.kind)
          }))
        })]
      })
    }
    var Hk = Ik(1179),
      Jk = Ik(1324);

    function xk(kk) {
      Jk.NotificationProvider.showCustomPopup({
        body: () => (0, ek.jsx)(Pk, {
          ...kk
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function Pk(kk) {
      let {
        schematicId: Fk,
        canOverride: Ik,
        onApprovalChanged: tk
      } = kk;
      const {
        t: Zk
      } = (0, Hk.y)(), {
        userContext: jk
      } = (0, lk.d)(), Jk = (0, yk.d)(), [xk, Pk] = (0, Xk.useState)(null), [Kk, Qk] = (0, Xk.useState)(null), [sk, Vk] = (0, Xk.useState)(!1), zk = (0, Xk.useCallback)((() => {
        Qk(null), ik.e.getGameApprovalInfo(jk, Fk).then((kk => {
          Jk.current && Pk(kk)
        })).catch((kk => {
          console.error("Failed to get game approval info", kk), Jk.current && Qk(Zk("studio:approvalLoadFailed"))
        }))
      }), [jk, Fk, Jk, Zk]);
      (0, Xk.useEffect)((() => {
        zk()
      }), [zk]);
      const Sk = kk => {
        sk || (Vk(!0), ik.e.setGameApproval(jk, Fk, kk).then((() => {
          null === tk || void 0 === tk || tk(), Jk.current && zk()
        })).catch((kk => {
          console.error("Failed to set game approval", kk)
        })).finally((() => {
          Jk.current && Vk(!1)
        })))
      };
      return (0, ek.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, ek.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: Zk("studio:approvalTitle")
        }), !xk && !Kk && (0, ek.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, ek.jsx)(ak.c, {})
        }), Kk && (0, ek.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: Kk
        }), xk && (0, ek.jsxs)(ek.Fragment, {
          children: [(0, ek.jsx)(wk, {
            info: xk
          }), Ik && (0, ek.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== xk.manualOverride && (0, ek.jsx)(qk.g, {
              tooltipInner: (0, ek.jsx)("div", {
                children: Zk("studio:approvalApproveTooltip")
              }),
              children: (0, ek.jsxs)(Tk.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Sk(!0)
                },
                disabled: sk,
                children: [(0, ek.jsx)(Lk.e, {
                  name: "check"
                }), " ", Zk("studio:approvalApprove")]
              })
            }), !1 !== xk.manualOverride && (0, ek.jsx)(qk.g, {
              tooltipInner: (0, ek.jsx)("div", {
                children: Zk("studio:approvalDenyTooltip")
              }),
              children: (0, ek.jsxs)(Tk.G, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Sk(!1)
                },
                disabled: sk,
                children: [(0, ek.jsx)(Lk.e, {
                  name: "xmark"
                }), " ", Zk("studio:approvalDeny")]
              })
            }), null !== xk.manualOverride && (0, ek.jsx)(qk.g, {
              tooltipInner: (0, ek.jsx)("div", {
                children: Zk("studio:approvalClearOverrideTooltip")
              }),
              children: (0, ek.jsxs)(Tk.d, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Sk(null)
                },
                disabled: sk,
                children: [(0, ek.jsx)(Lk.e, {
                  name: "arrows-rotate"
                }), " ", Zk("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6498: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => lk,
      g: () => yk
    });
    var Xk = Ik(337),
      Tk = Ik(1179);
    const ik = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function yk() {
      const {
        t: kk,
        selectedLanguage: Fk
      } = (0, Tk.y)();
      return {
        statusText: Fk => kk(ik[Fk]),
        rowText: Ik => {
          const ik = (kk, Ik) => (0, Xk.gb)((0, Tk.l)(Fk.code, kk), 0, Ik);
          switch (Ik.kind) {
            case "ownerAccountAge": {
              const Fk = Ik.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: kk("studio:approvalAccountAgeLabel"),
                value: kk(Fk, {
                  age: ik(Fk, Ik.accountAgeMs),
                  days: Ik.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: kk("studio:approvalSinceUnbannedLabel"), value: kk("studio:approvalSinceUnbannedValue", {
                  time: ik("studio:approvalSinceUnbannedValue", Ik.sinceMs),
                  days: Ik.minDays
                })
              };
            case "reportHold": {
              const {
                detail: Fk
              } = Ik;
              if (null === Fk) return {
                label: kk("studio:approvalUnderInvestigation"),
                value: null
              };
              const Xk = Fk.weightedReporters.toFixed(1),
                Tk = Fk.threshold.toFixed(1),
                yk = kk("studio:approvalReportHoldLabel", {
                  hours: Fk.windowHours
                });
              if (null === Fk.heldUntil) return {
                label: yk,
                value: kk("studio:approvalReportHoldValue", {
                  weightedReporters: Xk,
                  threshold: Tk
                })
              };
              const lk = "studio:approvalReportHoldValueHeld";
              return {
                label: yk,
                value: kk(lk, {
                  weightedReporters: Xk,
                  threshold: Tk,
                  time: ik(lk, Fk.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function lk(kk) {
      return null === kk.manualOverride && kk.rows.some((kk => "reportHold" === kk.kind && !kk.passed))
    }
  },
  34231: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(58),
      Tk = Ik(3378);

    function ik() {
      const [kk, Fk] = (0, Xk.useState)(!1);
      return (0, Xk.useLayoutEffect)((() => {
        let kk = !0;
        return (0, Tk.e)().then((() => {
          kk && Fk(!0)
        })), () => {
          kk = !1
        }
      }), []), kk
    }
  },
  8898: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => yk
    });
    var Xk = Ik(1308),
      Tk = Ik(1217),
      ik = Ik(628);

    function yk(kk) {
      return kk = function(kk, Fk) {
        var Ik;
        const Xk = new URLSearchParams(Fk),
          Tk = Xk.get("lobby"),
          ik = Xk.get("vm"),
          yk = null !== (Ik = Tk) && void 0 !== Ik ? Ik : kk.lobbyName,
          lk = null !== ik && void 0 !== ik ? ik : kk.directJoinVmUrl;
        if (yk === kk.lobbyName && lk === kk.directJoinVmUrl) return kk;
        return {
          ...kk,
          lobbyName: yk,
          directJoinVmUrl: lk
        }
      }(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), kk = function(kk) {
        if ((0, ik.Q)(kk.directJoinVmUrl)) return kk;
        const Fk = (0, Tk.Z)(kk.directJoinVmUrl);
        null === Fk && (kk.directJoinVmUrl = void 0);
        return kk
      }(kk = function(kk) {
        if ((0, ik.Q)(kk.gameNameWithVariation)) return kk;
        return kk.gameNameWithVariation = (0, Xk.n)(kk.gameNameWithVariation), kk
      }(kk))
    }
  },
  8895: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik,
      e: () => Tk
    });
    let Xk = !1;

    function Tk() {
      Xk = !0
    }

    function ik() {
      return Xk
    }
  },
  36363: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      f: () => Xk
    });
    const Xk = "skyblockSkills",
      Tk = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);