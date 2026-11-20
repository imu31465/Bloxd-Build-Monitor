export const id = 115;
export const ids = [115, 389];
export const modules = {
  36059: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => gF
    });
    var Rk = Bk(279),
      tk = Bk(3309),
      ak = Bk(3348),
      Xk = Bk(3344),
      bk = Bk(3336),
      wk = Bk(1149),
      dk = Bk(42),
      sk = Bk(1650),
      Vk = Bk(1312),
      Jk = Bk(1389),
      Ak = Bk(1020),
      ek = Bk.n(Ak),
      yk = Bk(1620),
      fk = Bk(61),
      mk = Bk(67),
      Wk = Bk(2267),
      vk = Bk(1273),
      ik = Bk(1563),
      Yk = Bk(1096),
      Lk = Bk(3214),
      Ok = Bk(4291),
      Ek = Bk(3288),
      Sk = Bk(3294),
      Nk = Bk(1812),
      Hk = Bk(3303),
      uk = Bk(1656),
      Mk = Bk(1441),
      gk = Bk(2049),
      Uk = Bk(1288),
      ck = Bk(2436),
      Gk = Bk(4712),
      Tk = Bk(1069);
    const rk = 15e3,
      Dk = 2500;

    function zk(kk) {
      var Fk;
      let {
        eventName: Bk
      } = kk;
      const {
        t: Rk
      } = (0, wk.x)(), tk = uk.f[Bk], [ak, Xk] = (0, fk.useState)((() => Date.now() >= tk.endsAt.getTime())), [bk, dk] = (0, fk.useState)("overall"), sk = function(kk, Fk) {
        const {
          userContext: Bk,
          isUserContextUpdating: Rk
        } = (0, Yk.e)(), tk = `${kk}:${Fk}`, [ak, Xk] = (0, fk.useState)({
          requestKey: tk,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, fk.useEffect)((() => {
          if (Rk) return;
          let ak, bk = !1;
          const wk = async () => {
            if ("visible" === document.visibilityState) try {
              const Rk = await Mk.b.getGameEventLeaderboard(Bk, {
                event: kk,
                scope: Fk
              });
              bk || Xk({
                requestKey: tk,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Rk
                }
              })
            } catch {
              bk || Xk((kk => kk.requestKey === tk && "loaded" === kk.leaderboard.status ? kk : {
                requestKey: tk,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            bk || (ak = setTimeout(wk, rk))
          };
          return wk(), () => {
            bk = !0, clearTimeout(ak)
          }
        }), [kk, Fk, tk, Bk, Rk]), ak.requestKey === tk ? ak.leaderboard : {
          status: "loading"
        }
      }(Bk, bk), Vk = function(kk) {
        const Fk = (0, fk.useRef)(null),
          Bk = (0, fk.useRef)(0),
          Rk = (0, fk.useRef)(),
          [tk, ak] = (0, fk.useState)({});
        return (0, fk.useEffect)((() => {
          const tk = null === kk || void 0 === kk ? void 0 : kk.entries;
          if (!tk) return;
          const Xk = new Map(tk.map((kk => [kk.player.name, kk.value]))),
            bk = Fk.current;
          if (Fk.current = Xk, null === bk) return;
          const wk = {};
          for (const [kk, Fk] of Xk) {
            const Rk = bk.get(kk);
            void 0 !== Rk && Fk > Rk && (wk[kk] = {
              amount: Fk - Rk,
              key: Bk.current++
            })
          }
          0 !== Object.keys(wk).length && (ak(wk), clearTimeout(Rk.current), Rk.current = setTimeout((() => {
            ak({})
          }), Dk))
        }), [kk]), (0, fk.useEffect)((() => () => {
          clearTimeout(Rk.current)
        }), []), tk
      }("loaded" === sk.status ? sk.leaderboard : null), Jk = function(kk) {
        const [Fk, Bk] = (0, fk.useState)(null), Rk = "loaded" === kk.status ? kk.leaderboard.goalProgress : void 0;
        return (0, fk.useEffect)((() => {
          Rk && Bk(Rk)
        }), [Rk]), Fk
      }(sk), Ak = gk.f[`profileEffect_${tk.prizePack}`];
      if (ak) return null;
      const yk = "loaded" === sk.status ? sk.leaderboard : null,
        mk = null !== (Fk = null === yk || void 0 === yk ? void 0 : yk.entries) && void 0 !== Fk ? Fk : null,
        Wk = null !== yk && void 0 !== yk && yk.own && null !== mk && !mk.some((kk => kk.isOwn)) ? yk.own : null;
      return (0, Tk.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Tk.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Tk.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Tk.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Tk.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Tk.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Rk("gameEvents:live")]
              }), (0, Tk.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Rk("gameEvents:endsIn"), (0, Tk.jsx)(Ek.e, {
                  toTime: tk.endsAt,
                  onReachEndOfCountdown: () => {
                    Xk(!0)
                  }
                })]
              })]
            }), (0, Tk.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Rk(tk.titleKey)
            }), (0, Tk.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Tk.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [Ak && (0, Tk.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Tk.jsx)(Ak, {})
                }), (0, Tk.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Tk.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Rk("gameEvents:prize")
                  }), (0, Tk.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Rk(tk.prizeNameKey)
                  })]
                })]
              }), (0, Tk.jsx)(Pk, {
                event: tk,
                progress: Jk
              })]
            })]
          }), (0, Tk.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Tk.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Tk.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Rk(tk.leaderboard.titleKey)
              }), (0, Tk.jsx)(Gk.b, {
                ariaLabel: Rk("gameEvents:leaderboardScope"),
                options: uk.b.map((kk => ({
                  value: kk,
                  label: Rk(`gameEvents:${kk}Scope`)
                }))),
                value: bk,
                onChange: dk
              })]
            }), "loading" === sk.status && (0, Tk.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Tk.jsx)(Uk.b, {})
            }), ("unavailable" === sk.status || "loaded" === sk.status && null === mk) && (0, Tk.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Rk("gameEvents:leaderboardUnavailable")
            }), null !== mk && 0 === mk.length && (0, Tk.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Rk("friends" === bk ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== mk && mk.length > 0 && (0, Tk.jsx)("ol", {
              className: "GameEventPanelRows",
              children: mk.map((kk => {
                const Fk = Vk[kk.player.name];
                return (0, Tk.jsxs)("li", {
                  className: ek()("GameEventPanelRow", {
                    GameEventPanelRowOwn: kk.isOwn,
                    GameEventPanelRowTop: kk.rank <= 3
                  }),
                  children: [(0, Tk.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", kk.rank]
                  }), (0, Tk.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Tk.jsx)(ck.d, {
                      playerSocialPreview: {
                        ...kk.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== Fk && (0, Tk.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", Fk.amount.toLocaleString()]
                  }, Fk.key), (0, Tk.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: kk.value.toLocaleString()
                  })]
                }, kk.player.name)
              }))
            }), Wk && (0, Tk.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Tk.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", Wk.rank.toLocaleString()]
              }), (0, Tk.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Rk("gameEvents:yourPlace")
              }), (0, Tk.jsx)("span", {
                className: "GameEventPanelScore",
                children: Wk.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function Pk(kk) {
      let {
        event: Fk,
        progress: Bk
      } = kk;
      const {
        t: Rk
      } = (0, wk.x)(), tk = null !== Bk && Fk.prizeGoals.some(((kk, Fk) => Bk[Fk] >= kk.target));
      return (0, Tk.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Tk.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Rk(tk ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Tk.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: Fk.prizeGoals.map(((kk, Fk) => {
            const tk = null === Bk ? null : Math.min(Bk[Fk], kk.target);
            return (0, Tk.jsxs)(fk.Fragment, {
              children: [Fk > 0 && (0, Tk.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Rk("gameEvents:goalsOr")
              }), (0, Tk.jsxs)("div", {
                className: ek()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: tk === kk.target
                }),
                children: [(0, Tk.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Rk(kk.labelKey)
                }), (0, Tk.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Tk.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== tk && void 0 !== tk ? tk : 0) / kk.target * 100 + "%"
                    }
                  }), null !== tk && (0, Tk.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [tk.toLocaleString(), " / ", kk.target.toLocaleString()]
                  })]
                })]
              })]
            }, kk.board)
          }))
        })]
      })
    }
    var hk = Bk(1490),
      qk = Bk(1545),
      Ck = Bk(1012),
      Zk = Bk(695),
      pk = Bk(3284);

    function Kk(kk) {
      let {
        gameNameWithVariation: Fk
      } = kk;
      const Bk = (0, hk.C)(Fk),
        [Rk, tk] = (0, fk.useState)(null);
      if ((0, fk.useEffect)((() => {
          if (!Bk) return;
          let kk = !0;
          return (0, qk.i)(Bk).then((Fk => {
            kk && tk(Fk)
          })).catch((kk => {
            console.error(`Failed to load the page copy for ${Bk.name}`, kk)
          })), () => {
            kk = !1
          }
        }), [Bk]), !Bk || !Rk || Rk.name !== Bk.name) return null;
      const ak = (0, qk.e)(Rk),
        Xk = new Set((0, Ck.b)((0, Zk.i)()).map((kk => (0, hk.u)(kk)))),
        bk = Rk.similarGames.filter((kk => Xk.has((0, hk.u)(kk))));
      return (0, Tk.jsx)("div", {
        className: "GamePageContent",
        children: (0, Tk.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Tk.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Tk.jsx)("h2", {
              children: ak.whatIs
            }), Rk.whatIs.map((kk => (0, Tk.jsx)("p", {
              children: kk
            }, kk)))]
          }), (0, Tk.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Tk.jsx)("h2", {
              children: ak.howToPlay
            }), Rk.howToPlay.map((kk => (0, Tk.jsx)("p", {
              children: kk
            }, kk)))]
          }), (0, Tk.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Tk.jsx)("h2", {
              children: ak.features
            }), (0, Tk.jsx)("ul", {
              children: Rk.features.map((kk => (0, Tk.jsx)("li", {
                children: kk
              }, kk)))
            })]
          }), (0, Tk.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Tk.jsx)("h2", {
              children: ak.tips
            }), (0, Tk.jsx)("ul", {
              children: Rk.tips.map((kk => (0, Tk.jsx)("li", {
                children: kk
              }, kk)))
            })]
          }), (0, Tk.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Tk.jsx)("h2", {
              children: ak.faq
            }), Rk.faq.map((kk => {
              let {
                question: Fk,
                answer: Bk
              } = kk;
              return (0, Tk.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Tk.jsx)("h3", {
                  children: Fk
                }), (0, Tk.jsx)("p", {
                  children: Bk
                })]
              }, Fk)
            }))]
          }), bk.length > 0 && (0, Tk.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Tk.jsx)("h2", {
              children: ak.similarGames
            }), (0, Tk.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: bk.map((kk => (0, Tk.jsx)("li", {
                children: (0, Tk.jsx)(pk.g, {
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
    var xk = Bk(1028),
      jk = Bk(98),
      lk = Bk(1101),
      nk = Bk(9051),
      Ik = Bk(1601),
      Qk = Bk(1473),
      kF = Bk(1459),
      FF = Bk(1556),
      BF = Bk(1402),
      RF = Bk(1300),
      tF = Bk(36064),
      aF = Bk(1183),
      XF = Bk(994),
      bF = Bk(291),
      wF = Bk(1004),
      dF = Bk(1484),
      sF = Bk(8588),
      VF = Bk(22),
      JF = Bk(2396),
      AF = Bk(729),
      eF = Bk(1173),
      yF = Bk(6202);

    function fF(kk) {
      let {
        preview: Fk,
        isBroken: Bk
      } = kk;
      const Rk = null === Fk ? null : (0, ak.e)(Fk, "small"),
        Xk = (0, tk.i)(null !== Rk && void 0 !== Rk ? Rk : ak.m);
      return null === Fk ? (0, Tk.jsx)("div", {
        className: ek()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: Bk
        }),
        children: (0, Tk.jsx)(xk.d, {
          name: Bk ? "triangle-exclamation" : "star"
        })
      }) : (0, Tk.jsx)("div", {
        className: ek()("FeaturedGamesPopupSlotThumbnail", bk.g),
        style: (0, bk.e)(Xk),
        role: "img",
        "aria-label": Fk.name,
        children: (0, Tk.jsx)(bk.d, {
          image: Xk
        })
      })
    }

    function mF(kk) {
      let {
        schematicId: Fk,
        gameName: Bk
      } = kk;
      const {
        userContext: tk
      } = (0, Yk.e)(), ak = (0, Sk.d)(), [Xk, bk] = (0, fk.useState)(null), [wk, dk] = (0, fk.useState)(null), [sk, Vk] = (0, fk.useState)(!1), Ak = (0, fk.useCallback)((() => {
        dk(null), Mk.b.getFeaturedGames(tk).then((kk => {
          ak.current && bk(kk.slots)
        })).catch((kk => {
          console.error("Failed to get featured games", kk), ak.current && dk("Failed to load featured games")
        }))
      }), [tk, ak]);
      (0, fk.useEffect)((() => {
        Ak()
      }), [Ak]);
      const ek = (kk, Fk) => {
        sk || (Vk(!0), Mk.b.setFeaturedGame(tk, kk, Fk).then((() => {
          ak.current && Ak()
        })).catch((kk => {
          console.error("Failed to set featured game", kk), ak.current && dk("Failed to update the featured slot")
        })).finally((() => {
          ak.current && Vk(!1)
        })))
      };
      return (0, Tk.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Tk.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !Xk && !wk && (0, Tk.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Tk.jsx)(Uk.b, {})
        }), wk && (0, Tk.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: wk
        }), Xk && (0, Tk.jsxs)(Tk.Fragment, {
          children: [(0, Tk.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: Xk.map((kk => {
              const Bk = kk.schematicId === Fk,
                tk = null === kk.schematicId,
                {
                  categoryGroup: ak
                } = Rk.H[kk.slotId];
              return (0, Tk.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Tk.jsx)(fF, {
                  preview: kk.preview,
                  isBroken: !tk
                }), (0, Tk.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Tk.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Rk.hb)(ak), " \xb7 position", " ", (0, Rk.J)(kk.slotId, Rk.Nb) + 1, " of", " ", (0, Rk.Mb)(ak, Rk.Nb)]
                  }), tk && (0, Tk.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !tk && null !== kk.preview && (0, Tk.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: kk.preview.name
                  }), !tk && null === kk.preview && (0, Tk.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Tk.jsx)(xk.d, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Tk.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [tk && (0, Tk.jsxs)(Jk.v, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      ek(kk.slotId, Fk)
                    },
                    disabled: sk,
                    children: [(0, Tk.jsx)(xk.d, {
                      name: "star"
                    }), " Feature here"]
                  }), !tk && !Bk && (0, Tk.jsxs)(Jk.O, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      ek(kk.slotId, Fk)
                    },
                    disabled: sk,
                    children: [(0, Tk.jsx)(xk.d, {
                      name: "star"
                    }), " Replace"]
                  }), !tk && (0, Tk.jsxs)(Jk.J, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      ek(kk.slotId, null)
                    },
                    disabled: sk,
                    children: [(0, Tk.jsx)(xk.d, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, kk.slotId)
            }))
          }), (0, Tk.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var WF = Bk(4404),
      vF = Bk(4333),
      iF = Bk(4340),
      YF = Bk(4355),
      oF = Bk(4306),
      LF = Bk(3371),
      OF = Bk(8583),
      EF = Bk(197);
    const SF = {
      skyblock: [Bk(36097).c]
    };
    var NF = Bk(606);
    const HF = {
      listedVariations: null,
      backgroundImage: ak.m,
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
      const Bk = AF.i[kk.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, ak.e)(kk, "large"),
        badges: [],
        category: kk.gameCategory,
        title: void 0 !== (null === Bk || void 0 === Bk ? void 0 : Bk.title) ? Fk(Bk.title) : kk.name,
        variationTitle: null,
        description: void 0 !== (null === Bk || void 0 === Bk ? void 0 : Bk.description) ? Fk(Bk.description) : kk.description,
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

    function MF(kk) {
      var Fk, Bk, Rk;
      return null !== (Fk = null !== (Bk = (0, EF.n)() ? function(kk) {
        for (const [Fk, Bk] of Object.entries(SF)) {
          const Rk = [Fk, ...Bk.map((kk => (0, bF.Sb)(Fk, kk)))];
          if (Rk.includes(kk)) return Rk
        }
        return null
      }(kk) : null) && void 0 !== Bk ? Bk : null === (Rk = AF.e[kk]) || void 0 === Rk ? void 0 : Rk.listedVariations) && void 0 !== Fk ? Fk : null
    }

    function gF() {
      const {
        gameNameWithVariation: kk
      } = (0, Qk.x)();
      if ((0, fk.useEffect)(LF.m, []), kk && (0, aF.t)(kk)) return (0, Tk.jsx)(UF, {
        urlId: kk
      }, kk);
      const Fk = kk && (0, XF.n)(kk) ? kk : "firstParty";
      return (0, Tk.jsx)(cF, {}, Fk)
    }

    function UF(kk) {
      let {
        urlId: Fk
      } = kk;
      const {
        userContext: Bk,
        isUserContextUpdating: Rk
      } = (0, Yk.e)(), tk = (0, fk.useMemo)((() => (0, Ik.h)(Fk)), [Fk]);
      (0, fk.useMemo)((() => {
        if (null === tk) return;
        const kk = lk.userContextManager.peekCurrentUserContext();
        (null !== kk ? Mk.b.getGame(kk, tk.schematicId) : lk.userContextManager.getCurrentUserContext().then((kk => Mk.b.getGame(kk, tk.schematicId)))).catch((kk => {
          console.error(`Failed to get the custom game ${tk.schematicId}`, kk), (0, Ik.g)(Fk)
        }))
      }), [tk, Fk]);
      const [ak, Xk] = (0, fk.useState)(null), bk = (0, nk.c)();
      (0, fk.useEffect)((() => {
        if (null !== tk || Rk) return;
        let kk = !0;
        return Mk.b.getGameByUrlId(Bk, Fk).then((Bk => {
          kk && Xk({
            urlId: Fk,
            game: Bk
          })
        })).catch((Bk => {
          console.error(`Failed to find the custom game with urlId ${Fk}`, Bk), kk && (0, kF.navigateToHomePage)()
        })), () => {
          kk = !1
        }
      }), [Fk, tk, Rk, Bk]);
      const wk = null !== tk && void 0 !== tk ? tk : (null === ak || void 0 === ak ? void 0 : ak.urlId) === Fk ? ak.game : null;
      return null === wk ? (0, Tk.jsx)(Uk.b, {}) : bk ? (0, Tk.jsx)(cF, {
        gameNameWithVariation: (0, XF.C)(wk.schematicId),
        knownCustomGame: wk
      }, wk.schematicId) : null
    }

    function cF(kk) {
      var Fk, Bk, Xk, Ak, uk, gk, Uk, Gk;
      let {
        gameNameWithVariation: rk,
        knownCustomGame: Dk = null
      } = kk;
      const {
        t: Pk
      } = (0, wk.x)();
      (0, JF.m)();
      const qk = (0, JF.p)(),
        {
          userContext: Ck,
          isUserContextUpdating: Zk
        } = (0, Yk.e)(),
        pk = (0, oF.h)(),
        lk = (0, kF.useNavigatePreserveSearch)(),
        nk = (0, Qk.x)(),
        Ik = (0, fk.useMemo)((() => rk ? {
          gameNameWithVariation: rk
        } : nk), [rk, nk]),
        BF = (0, sF.d)(Ik),
        aF = (0, fk.useMemo)((() => {
          const kk = function(kk) {
            var Fk, Bk;
            const Rk = MF(kk);
            if (!Rk || 0 === Rk.length || Rk.includes(kk)) return kk;
            const tk = dk.i.getItem((0, Wk.h)(kk));
            if (tk && Rk.includes(tk)) return tk;
            return null !== (Fk = null === (Bk = AF.e[kk]) || void 0 === Bk ? void 0 : Bk.defaultListedVariation) && void 0 !== Fk ? Fk : Rk[0]
          }(BF.gameNameWithVariation);
          return kk === BF.gameNameWithVariation ? BF : {
            ...BF,
            gameNameWithVariation: kk
          }
        }), [BF]);
      (0, fk.useEffect)((() => {
        const kk = BF.gameNameWithVariation;
        aF.gameNameWithVariation !== kk && kk !== (0, bF.Vb)(kk) && lk((0, hk.y)(aF.gameNameWithVariation), {
          replace: !0
        })
      }), [aF.gameNameWithVariation, BF.gameNameWithVariation, lk]);
      const fF = (0, Sk.d)(),
        [LF, EF] = (0, fk.useState)(""),
        SF = fk.useRef(null),
        [gF, UF] = (0, fk.useState)(),
        cF = (0, XF.n)(aF.gameNameWithVariation),
        TF = (0, fk.useMemo)((() => cF ? null : function(kk, Fk, Bk) {
          var Rk, tk;
          const Xk = AF.e[kk];
          return (0, NF.F)(Xk) ? null : {
            listedVariations: MF(kk),
            backgroundImage: (0, ak.j)(kk, (0, ak.b)(Xk)),
            badges: (0, sk.filterBadges)(Xk.badges),
            category: Xk.type,
            title: Bk(Xk.title),
            variationTitle: Xk.variationTitle ? Bk(Xk.variationTitle) : null,
            description: Bk(Xk.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== Fk ? null !== (Rk = Fk[kk]) && void 0 !== Rk ? Rk : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: Xk.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: Xk.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (tk = Xk.canCreateCustomLobbies) || void 0 === tk || tk,
            countdownInformation: (0, Wk.e)(kk)
          }
        }(aF.gameNameWithVariation, qk, Pk)), [cF, aF.gameNameWithVariation, qk, Pk]),
        [rF, DF] = (0, fk.useState)(!1),
        [zF, PF] = (0, fk.useState)((() => Dk ? uF(Dk, Pk) : HF)),
        hF = null !== TF && void 0 !== TF ? TF : zF,
        [qF] = (0, fk.useState)(hF === HF),
        CF = (0, tk.i)(hF.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: ZF,
          recentlyPlayedCustomLobbies: pF
        } = (0, fk.useMemo)((() => function(kk, Fk, Bk, Rk) {
          var tk;
          const ak = kk => {
              const Bk = (0, XF.v)(kk),
                Rk = Fk.find((Fk => "custom" === Fk.type ? Fk.schematicId === Bk : Fk.gameNameWithVariation === kk));
              return Rk ? [...Rk.recentLobbies] : []
            },
            Xk = (0, sk.getRecentGameNameWithVariationLobbiesKey)(kk),
            bk = null !== (tk = dk.i.getItem(Xk)) && void 0 !== tk ? tk : [],
            wk = [...ak(kk), ...bk],
            Vk = [];
          for (const dk of wk)(0, eF.N)(dk) && !Vk.includes(dk) && Vk.push(dk);
          let Jk = wk;
          if (Bk) {
            const kk = ak("classic_worlds"),
              Fk = wk.filter((Fk => !kk.includes(Fk)));
            Jk = [...kk, ...Fk]
          }
          const Ak = [],
            ek = !1 === Rk ? [] : Jk;
          for (const dk of ek)(0, eF.N)(dk) || Ak.includes(dk) || Ak.push(dk);
          return {
            recentlyPlayedPublicLobbies: Vk,
            recentlyPlayedCustomLobbies: Ak
          }
        }(aF.gameNameWithVariation, pk, hF.showWorldsInsteadOfCustomLobbies, hF.canCreateCustomLobbies)), [aF.gameNameWithVariation, pk, hF.showWorldsInsteadOfCustomLobbies, hF.canCreateCustomLobbies]),
        [KF, xF] = (0, fk.useState)(!0),
        [jF, lF] = (0, fk.useState)([]),
        [nF, IF] = (0, fk.useState)(null),
        [QF, kB] = (0, fk.useState)("explore"),
        FB = (0, fk.useRef)(!1),
        BB = (0, fk.useCallback)((kk => {
          (0, mk.unstable_batchedUpdates)((() => {
            UF(kk), PF((Fk => ({
              ...uF(kk, Pk),
              isFavourite: Fk.isFavourite
            })))
          }))
        }), [Pk]);
      (0, fk.useEffect)((() => {
        null === VF.c.get("gameEntrySource") && (0, VF.f)("gameInformationPageDirect")
      }), []);
      const RB = (0, fk.useRef)(null);
      (0, fk.useEffect)((() => {
        const kk = kk => {
            RB.current = kk.target instanceof Element ? kk.target.closest("a, button") : null
          },
          Fk = kk => {
            "Tab" === kk.key && (RB.current = null)
          };
        return document.addEventListener("pointerdown", kk, !0), document.addEventListener("keydown", Fk, !0), () => {
          document.removeEventListener("pointerdown", kk, !0), document.removeEventListener("keydown", Fk, !0)
        }
      }), []), (0, Lk.b)("Enter", (kk => {
        const Fk = kk.target instanceof Element ? kk.target : null;
        if (kk.defaultPrevented || null !== Fk && void 0 !== Fk && Fk.closest("input, textarea, select")) return;
        const Bk = null === Fk || void 0 === Fk ? void 0 : Fk.closest("a, button");
        Bk && Bk !== RB.current || (kk.preventDefault(), JB())
      })), (0, Ok.d)(kF.navigateToHomePage);
      const tB = ZF.length > 0 || pF.length > 0,
        aB = !hF.useRejoinLastLobbyButton || 0 === ZF.length,
        XB = cF && null === hF.ownerSocialPreviewWithoutLocation,
        bB = Ck.getPlayerName() === (null === gF || void 0 === gF || null === (Fk = gF.owner) || void 0 === Fk ? void 0 : Fk.name),
        wB = null !== (Bk = null === (Xk = hF.badges.find((kk => "event" === kk.type))) || void 0 === Xk ? void 0 : Xk.event) && void 0 !== Bk ? Bk : null,
        dB = aB ? Jk.o : Jk.g,
        sB = (0, Tk.jsx)(Vk.d, {
          tooltipInner: (0, Tk.jsx)("div", {
            children: Pk("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Tk.jsx)(dB, {
            className: "GameInformationButton",
            padDefaultFocus: aB,
            showPress: !0,
            onClick: () => {
              JB()
            },
            children: (0, Tk.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [aB && (0, Tk.jsxs)(Tk.Fragment, {
                children: [(0, Tk.jsx)(xk.d, {
                  name: "play"
                }), " "]
              }), Pk("homePage:quickPlay")]
            })
          })
        });
      (0, fk.useEffect)((() => {
        if (!cF || Zk) return;
        let kk = !0;
        const Fk = (0, XF.v)(aF.gameNameWithVariation);
        return Mk.b.getGame(Ck, Fk).then((Fk => {
          kk && BB(Fk)
        })).catch((Fk => {
          console.error("Failed to get Custom Game information", Fk), kk && (0, kF.navigateToHomePage)()
        })), Mk.b.getFavouriteGames(Ck).then((Bk => {
          kk && PF((kk => ({
            ...kk,
            isFavourite: Bk.includes(Fk)
          })))
        })).catch((Fk => {
          console.error("Failed to get favourite games", Fk), kk && DF(!0)
        })), () => {
          kk = !1
        }
      }), [cF, Zk, aF.gameNameWithVariation, BB, Ck]);
      const VB = !cF && null === TF;

      function JB(kk) {
        (0, OF.d)(), lk((0, vk.b)(aF.gameNameWithVariation, kk))
      }(0, fk.useEffect)((() => {
        VB && (0, kF.navigateToHomePage)()
      }), [VB]), (0, fk.useEffect)((() => {
        !1 !== hF.canCreateCustomLobbies && null !== hF.showWorldsInsteadOfCustomLobbies && !1 === Zk && (xF(!0), Mk.b.getFavouriteLobbies(Ck).then((kk => {
          IF(kk)
        })), Mk.b.getOpenCustomLobbies(Ck, {
          gameNameWithVariation: hF.showWorldsInsteadOfCustomLobbies ? "classic" : aF.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === QF,
          onlyFavouriteLobbies: "favourite" === QF
        }).then((kk => {
          fF.current && lF(kk)
        })).catch((kk => {})).finally((() => {
          fF.current && xF(!1)
        })))
      }), [Zk, aF, QF, hF.showWorldsInsteadOfCustomLobbies, hF.canCreateCustomLobbies, fF, Ck]);
      const AB = (0, fk.useCallback)((async kk => {
          try {
            if (!nF) return;
            nF.includes(kk) ? (Mk.b.unfavouriteLobby(Ck, kk), IF(nF.filter((Fk => Fk !== kk)))) : (Mk.b.favouriteLobby(Ck, kk).catch((kk => {
              console.error("Failed to favourite lobby", kk)
            })), IF([...nF, kk]))
          } catch (Fk) {
            console.error("Failed to like lobby", Fk)
          }
        }), [Ck, nF]),
        eB = (null === gF || void 0 === gF ? void 0 : gF.schematicId) === (0, XF.v)(BF.gameNameWithVariation) ? gF : null,
        yB = eB && (0, hk.D)(BF.gameNameWithVariation, (kk => Pk(kk)), eB);
      (0, FF.e)(eB && (0, hk.y)(BF.gameNameWithVariation, eB));
      const fB = jk.featureFlags.canUseCustomLobbies && !0 === hF.canCreateCustomLobbies,
        mB = (0, Tk.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Tk.jsx)(Kk, {
            gameNameWithVariation: aF.gameNameWithVariation
          })
        });
      return (0, Tk.jsx)(Tk.Fragment, {
        children: (0, Tk.jsxs)("article", {
          className: ek()("GameInformation", {
            GameInformationFadeIn: qF,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (Ak = hF.countdownInformation) || void 0 === Ak ? void 0 : Ak.type)
          }),
          children: [yB && (0, Tk.jsx)(ik.e, {
            meta: yB
          }), (0, Tk.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Tk.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Tk.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Tk.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Tk.jsx)("div", {
                  className: ek()("GameInformationTopBackgroundImage", bk.g),
                  style: (0, bk.e)(CF),
                  children: (0, Tk.jsx)(bk.d, {
                    image: CF
                  })
                })]
              }), (0, Tk.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Tk.jsx)(WF.d, {}), (0, Tk.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Tk.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Tk.jsxs)("div", {
                      className: ek()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: XB
                      }),
                      children: [hF.badges.map((kk => (0, Tk.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${kk.type}`,
                        children: (0, Tk.jsx)(Hk.d, {
                          badge: kk
                        })
                      }, kk.type))), cF && (0, Tk.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Tk.jsx)(Nk.d, {
                          text: (0, Rk._)({
                            type: "playerCrafted"
                          })
                        })
                      }), hF.category && (0, Tk.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Tk.jsx)(Nk.d, {
                          text: [{
                            str: (0, Rk.cb)(hF.category).toUpperCase()
                          }]
                        })
                      }), null !== hF.ccu && (0, Tk.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Tk.jsx)(xk.d, {
                          name: "user"
                        }), (0, eF.R)(hF.ccu), " online"]
                      }), null !== hF.ownerSocialPreviewWithoutLocation && (0, Tk.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Tk.jsx)("span", {
                          children: "Made by"
                        }), (0, Tk.jsx)(ck.d, {
                          playerSocialPreview: {
                            ...hF.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), XB && (0, Tk.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Tk.jsx)("span", {
                          children: "Made by"
                        }), (0, Tk.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== hF.favourites && (null !== hF.isFavourite || cF && !rF) && (0, Tk.jsx)(Jk.y, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== FB.current && (FB.current = !0, null !== hF.isFavourite)) {
                              const kk = (0, XF.v)(aF.gameNameWithVariation);
                              let Fk;
                              hF.isFavourite ? (Fk = -1, Mk.b.unfavouriteGame(Ck, kk).catch((kk => {
                                console.error("Failed to get unfavourite game", kk)
                              })).finally((() => {
                                FB.current = !1
                              }))) : (Fk = 1, Mk.b.favouriteGame(Ck, kk).catch((kk => {
                                console.error("Failed to get favourite game", kk)
                              })).finally((() => {
                                FB.current = !1
                              }))), PF((kk => ({
                                ...kk,
                                isFavourite: !kk.isFavourite
                              }))), PF((kk => ({
                                ...kk,
                                favourites: kk.favourites + Fk
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (uk = hF.isFavourite) && void 0 !== uk && uk,
                        disabled: null === hF.isFavourite,
                        className: ek()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === hF.isFavourite
                        })
                      }, null === hF.isFavourite ? "pending" : "known"), cF && !XB && jk.featureFlags.useSocialFeatures && !bB && (0, Tk.jsx)(iF.c, {
                        targetType: "customGame",
                        targetId: (0, XF.v)(aF.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (Ck.playerHasRank("developer") || Ck.playerHasRank("admin") && bB) && (0, Tk.jsxs)(Jk.o, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          lk((0, dF.n)((0, wF.f)(aF.gameNameWithVariation, !0)))
                        },
                        children: [(0, Tk.jsx)(xk.d, {
                          name: "star-christmas"
                        }), " ", Pk("studio:viewInStudio")]
                      }), cF && Ck.playerHasRank("developer") && (0, Tk.jsxs)(Jk.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, yF.b)({
                            schematicId: (0, XF.v)(aF.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Tk.jsx)(xk.d, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), cF && Ck.playerHasRank("developer") && (0, Tk.jsxs)(Jk.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          RF.NotificationProvider.showCustomPopup({
                            body: () => (0, Tk.jsx)(mF, {
                              schematicId: (0, XF.v)(aF.gameNameWithVariation),
                              gameName: hF.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Tk.jsx)(xk.d, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (gk = hF.countdownInformation) || void 0 === gk ? void 0 : gk.type) && (0, Tk.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Tk.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Tk.jsx)(Ek.e, {
                            toTime: hF.countdownInformation.countdownToTime
                          })]
                        }), (0, Tk.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: hF.countdownInformation.previewText
                        })]
                      })]
                    }, XB ? "pending" : "shown"), (0, Tk.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Tk.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Tk.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [hF.title, " ", hF.variationTitle && (null === (Uk = AF.e[aF.gameNameWithVariation]) || void 0 === Uk ? void 0 : Uk.variationThumbnailUseBigRatio) && (0, Tk.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: hF.variationTitle
                          })]
                        })
                      }), hF.listedVariations && hF.listedVariations.length > 0 && (0, Tk.jsx)("div", {
                        className: ek()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (Gk = AF.e[aF.gameNameWithVariation]) || void 0 === Gk ? void 0 : Gk.variationThumbnailUseBigRatio
                        }),
                        children: hF.listedVariations.map((kk => {
                          var Fk, Bk;
                          return (0, Tk.jsxs)(GF, {
                            variation: kk,
                            isSelected: aF.gameNameWithVariation === kk,
                            children: [null !== qk && (0, Tk.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Tk.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Tk.jsx)(xk.d, {
                                  name: "user"
                                }), " ", (0, eF.R)(null !== (Fk = qk[kk]) && void 0 !== Fk ? Fk : 0)]
                              })
                            }), (0, Tk.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: Pk(null !== (Bk = AF.e[kk].variationTitle) && void 0 !== Bk ? Bk : AF.e[kk].title)
                            }), (0, Tk.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, sk.filterBadges)(AF.e[kk].badges).map((kk => (0, Tk.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + kk.type,
                                children: (0, Tk.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Tk.jsx)(Hk.d, {
                                    badge: kk
                                  })
                                })
                              }, kk.type)))
                            })]
                          }, kk)
                        }))
                      })]
                    }), hF.description && (0, Tk.jsx)("p", {
                      className: "GameInformationDescription",
                      children: hF.description
                    })]
                  }), (0, Tk.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Tk.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!aB && (0, Tk.jsx)(Vk.d, {
                        tooltipInner: (0, Tk.jsx)("div", {
                          children: Pk("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Tk.jsx)(Jk.o, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            JB(ZF[0])
                          },
                          children: (0, Tk.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Tk.jsx)(xk.d, {
                              name: "play"
                            }), " ", Pk("homePage:rejoinLobbyNumber", {
                              number: ZF[0]
                            })]
                          })
                        })
                      }), aB && sB]
                    }), (0, Tk.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!aB && sB, (0, Tk.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Tk.jsx)(xk.d, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Tk.jsx)(yk.e, {
                          className: "JoinLobbyInput",
                          placeholderText: Pk("homePage:lobbyName"),
                          maxLength: eF.Q,
                          domRef: SF,
                          onValueChange: kk => {
                            kk = (0, eF.ub)(kk), EF(kk)
                          },
                          onEnter: () => {
                            0 === LF.length ? JB(ZF[0]) : JB(LF)
                          }
                        }), (0, Tk.jsx)(Jk.g, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === LF.length ? JB(ZF[0]) : JB(LF)
                          },
                          children: Pk("general:join")
                        })]
                      })]
                    }), (0, Tk.jsxs)("section", {
                      className: ek()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !tB
                      }),
                      children: [(0, Tk.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Tk.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Tk.jsx)(xk.d, {
                            name: "clock-rotate-left"
                          }), tB && (0, Tk.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: Pk("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Tk.jsx)(YF.d, {
                        lobbyGroups: [ZF, pF],
                        onLobbyClick: kk => {
                          JB(kk)
                        },
                        keyPrefix: aF.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== wB && (0, Tk.jsx)(zk, {
                eventName: wB
              })]
            }), fB && (0, Tk.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Tk.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Tk.jsxs)("div", {
                  className: ek()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === hF.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === hF.showWorldsInsteadOfCustomLobbies && (0, Tk.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Tk.jsx)(xk.d, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Tk.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Tk.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Pk("game:worlds")]
                    })]
                  }), !1 === hF.showWorldsInsteadOfCustomLobbies && (0, Tk.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Tk.jsx)(xk.d, {
                      name: "joystick"
                    }), (0, Tk.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Tk.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Pk("homePage:customLobbies")]
                    })]
                  }), (0, Tk.jsx)(Jk.O, {
                    onClick: () => {
                      kB("explore")
                    },
                    active: "explore" === QF,
                    children: Pk("general:explore")
                  }), (0, Tk.jsx)(Jk.O, {
                    onClick: () => {
                      kB("favourite")
                    },
                    active: "favourite" === QF,
                    children: Pk("homePage:favouriteLobbies")
                  }), (0, Tk.jsx)(Jk.O, {
                    onClick: () => {
                      kB("owned")
                    },
                    active: "owned" === QF,
                    children: Pk("homePage:ownedLobbies")
                  })]
                }), (0, Tk.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Tk.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Tk.jsx)(vF.d, {
                      label: "Create",
                      onClick: () => {
                        RF.NotificationProvider.showCustomPopup({
                          body: kk => (0, Tk.jsx)(tF.CreateCustomLobby, {
                            gameNameWithVariation: aF.gameNameWithVariation,
                            close: kk
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === KF && (0, Tk.jsx)(vF.i, {}), !1 === KF && jF.length > 0 && jF.map((kk => (0, Tk.jsx)(vF.h, {
                      customLobby: kk,
                      favouriteLobbies: nF,
                      toggleLikeLobby: AB,
                      showReport: jk.featureFlags.useSocialFeatures && "owned" !== QF
                    }, kk.name)))]
                  }), mB]
                })]
              })
            })]
          }), !fB && mB]
        })
      })
    }

    function GF(kk) {
      let {
        variation: Fk,
        isSelected: Bk,
        children: Rk
      } = kk;
      const wk = AF.e[Fk],
        sk = (0, ak.j)(Fk, (0, ak.l)(wk)),
        Vk = (0, tk.i)(sk),
        Jk = (0, Xk.h)([(0, ak.i)(Fk, (0, ak.b)(wk))]);
      return (0, Tk.jsxs)(kF.LinkPreserveSearch, {
        to: (0, hk.y)(Fk),
        replace: !0,
        className: ek()("GameInformationVariation", bk.g, {
          SelectedGameInformationVariation: Bk
        }),
        onClick: kk => {
          if (!(0, BF.e)(kk)) return;
          const Bk = (0, Wk.h)(Fk);
          dk.i.setItem(Bk, Fk)
        },
        onMouseEnter: Jk.start,
        onMouseLeave: Jk.cancel,
        onFocus: Jk.start,
        onBlur: Jk.cancel,
        style: (0, bk.e)(Vk),
        children: [(0, Tk.jsx)(bk.d, {
          image: Vk
        }), Rk]
      })
    }
  },
  6202: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => mk
    });
    var Rk = Bk(61),
      tk = Bk(1389),
      ak = Bk(1441),
      Xk = Bk(3294),
      bk = Bk(1096),
      wk = Bk(1288),
      dk = Bk(1312),
      sk = Bk(1028),
      Vk = Bk(1020),
      Jk = Bk.n(Vk),
      Ak = Bk(1069);

    function ek(kk) {
      let {
        info: Fk,
        className: Bk
      } = kk;
      return (0, Ak.jsxs)("div", {
        className: Jk()("GameApprovalInfoDetails", Bk),
        children: [(0, Ak.jsxs)("div", {
          className: Jk()("GameApprovalInfoSummary", Fk.overallPassed ? "Passed" : "Failed"),
          children: [(0, Ak.jsx)(sk.d, {
            name: Fk.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, Ak.jsx)("span", {
            children: Fk.summary
          })]
        }), Fk.rows.length > 0 && (0, Ak.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: Fk.rows.map((kk => (0, Ak.jsxs)("div", {
            className: Jk()("GameApprovalInfoRow", kk.passed ? "Passed" : "Failed"),
            children: [(0, Ak.jsx)(sk.d, {
              name: kk.passed ? "check" : "xmark"
            }), (0, Ak.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, Ak.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: kk.label
              }), (0, Ak.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: kk.valueText
              })]
            })]
          }, kk.label)))
        })]
      })
    }
    var yk = Bk(1149),
      fk = Bk(1300);

    function mk(kk) {
      fk.NotificationProvider.showCustomPopup({
        body: () => (0, Ak.jsx)(Wk, {
          ...kk
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function Wk(kk) {
      let {
        schematicId: Fk,
        canOverride: Bk,
        onApprovalChanged: Vk
      } = kk;
      const {
        t: Jk
      } = (0, yk.x)(), {
        userContext: fk
      } = (0, bk.e)(), mk = (0, Xk.d)(), [Wk, vk] = (0, Rk.useState)(null), [ik, Yk] = (0, Rk.useState)(null), [Lk, Ok] = (0, Rk.useState)(!1), Ek = (0, Rk.useCallback)((() => {
        Yk(null), ak.b.getGameApprovalInfo(fk, Fk).then((kk => {
          mk.current && vk(kk)
        })).catch((kk => {
          console.error("Failed to get game approval info", kk), mk.current && Yk(Jk("studio:approvalLoadFailed"))
        }))
      }), [fk, Fk, mk, Jk]);
      (0, Rk.useEffect)((() => {
        Ek()
      }), [Ek]);
      const Sk = kk => {
        Lk || (Ok(!0), ak.b.setGameApproval(fk, Fk, kk).then((() => {
          null === Vk || void 0 === Vk || Vk(), mk.current && Ek()
        })).catch((kk => {
          console.error("Failed to set game approval", kk)
        })).finally((() => {
          mk.current && Ok(!1)
        })))
      };
      return (0, Ak.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, Ak.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: Jk("studio:approvalTitle")
        }), !Wk && !ik && (0, Ak.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, Ak.jsx)(wk.b, {})
        }), ik && (0, Ak.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: ik
        }), Wk && (0, Ak.jsxs)(Ak.Fragment, {
          children: [(0, Ak.jsx)(ek, {
            info: Wk
          }), Bk && (0, Ak.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== Wk.manualOverride && (0, Ak.jsx)(dk.d, {
              tooltipInner: (0, Ak.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, Ak.jsxs)(tk.o, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Sk(!0)
                },
                disabled: Lk,
                children: [(0, Ak.jsx)(sk.d, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== Wk.manualOverride && (0, Ak.jsx)(dk.d, {
              tooltipInner: (0, Ak.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, Ak.jsxs)(tk.J, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Sk(!1)
                },
                disabled: Lk,
                children: [(0, Ak.jsx)(sk.d, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== Wk.manualOverride && (0, Ak.jsx)(dk.d, {
              tooltipInner: (0, Ak.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, Ak.jsxs)(tk.g, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Sk(null)
                },
                disabled: Lk,
                children: [(0, Ak.jsx)(sk.d, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  9051: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak
    });
    var Rk = Bk(61),
      tk = Bk(3374);

    function ak() {
      const [kk, Fk] = (0, Rk.useState)(!1);
      return (0, Rk.useLayoutEffect)((() => {
        let kk = !0;
        return (0, tk.d)().then((() => {
          kk && Fk(!0)
        })), () => {
          kk = !1
        }
      }), []), kk
    }
  },
  8588: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(1273),
      tk = Bk(1173),
      ak = Bk(606);

    function Xk(kk) {
      return kk = function(kk, Fk) {
        var Bk;
        const Rk = new URLSearchParams(Fk),
          tk = Rk.get("lobby"),
          ak = Rk.get("vm"),
          Xk = null !== (Bk = tk) && void 0 !== Bk ? Bk : kk.lobbyName,
          bk = null !== ak && void 0 !== ak ? ak : kk.directJoinVmUrl;
        if (Xk === kk.lobbyName && bk === kk.directJoinVmUrl) return kk;
        return {
          ...kk,
          lobbyName: Xk,
          directJoinVmUrl: bk
        }
      }(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), kk = function(kk) {
        if ((0, ak.F)(kk.directJoinVmUrl)) return kk;
        const Fk = (0, tk.$)(kk.directJoinVmUrl);
        null === Fk && (kk.directJoinVmUrl = void 0);
        return kk
      }(kk = function(kk) {
        if ((0, ak.F)(kk.gameNameWithVariation)) return kk;
        return kk.gameNameWithVariation = (0, Rk.h)(kk.gameNameWithVariation), kk
      }(kk))
    }
  },
  8583: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      d: () => tk
    });
    let Rk = !1;

    function tk() {
      Rk = !0
    }

    function ak() {
      return Rk
    }
  },
  36097: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      e: () => Rk
    });
    const Rk = "skyblockSkills",
      tk = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);