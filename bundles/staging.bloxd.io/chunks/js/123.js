export const id = 123;
export const ids = [123, 401];
export const modules = {
  36724: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => rE
    });
    var su = ju(337),
      Uu = ju(3691),
      Zu = ju(3738),
      Xu = ju(3733),
      lu = ju(3729),
      qu = ju(1244),
      fu = ju(31),
      Cu = ju(1779),
      bu = ju(1419),
      cu = ju(1506),
      Nu = ju(1105),
      Ou = ju.n(Nu),
      Yu = ju(1723),
      hu = ju(58),
      Du = ju(65),
      gu = ju(2474),
      Mu = ju(1376),
      eu = ju(1667),
      Gu = ju(1178),
      pu = ju(3610),
      wu = ju(4737),
      Ju = ju(3675),
      du = ju(1964),
      au = ju(3689),
      Pu = ju(1794),
      ou = ju(1559),
      ku = ju(2260),
      mu = ju(1393),
      vu = ju(2716),
      Ku = ju(5179),
      Vu = ju(1154);
    const ru = 15e3,
      Qu = 2500;

    function iu(uu) {
      var Eu;
      let {
        eventName: ju
      } = uu;
      const {
        t: su
      } = (0, qu.A)(), Uu = Pu.f[ju], [Zu, Xu] = (0, hu.useState)((() => Date.now() >= Uu.endsAt.getTime())), [lu, fu] = (0, hu.useState)("overall"), Cu = function(uu, Eu) {
        const {
          userContext: ju,
          isUserContextUpdating: su
        } = (0, Gu.c)(), Uu = `${uu}:${Eu}`, [Zu, Xu] = (0, hu.useState)({
          requestKey: Uu,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, hu.useEffect)((() => {
          if (su) return;
          let Zu, lu = !1;
          const qu = async () => {
            if ("visible" === document.visibilityState) try {
              const su = await ou.b.getGameEventLeaderboard(ju, {
                event: uu,
                scope: Eu
              });
              lu || Xu({
                requestKey: Uu,
                leaderboard: {
                  status: "loaded",
                  leaderboard: su
                }
              })
            } catch {
              lu || Xu((uu => uu.requestKey === Uu && "loaded" === uu.leaderboard.status ? uu : {
                requestKey: Uu,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            lu || (Zu = setTimeout(qu, ru))
          };
          return qu(), () => {
            lu = !0, clearTimeout(Zu)
          }
        }), [uu, Eu, Uu, ju, su]), Zu.requestKey === Uu ? Zu.leaderboard : {
          status: "loading"
        }
      }(ju, lu), bu = function(uu) {
        const Eu = (0, hu.useRef)(null),
          ju = (0, hu.useRef)(0),
          su = (0, hu.useRef)(),
          [Uu, Zu] = (0, hu.useState)({});
        return (0, hu.useEffect)((() => {
          const Uu = null === uu || void 0 === uu ? void 0 : uu.entries;
          if (!Uu) return;
          const Xu = new Map(Uu.map((uu => [uu.player.name, uu.value]))),
            lu = Eu.current;
          if (Eu.current = Xu, null === lu) return;
          const qu = {};
          for (const [uu, Eu] of Xu) {
            const su = lu.get(uu);
            void 0 !== su && Eu > su && (qu[uu] = {
              amount: Eu - su,
              key: ju.current++
            })
          }
          0 !== Object.keys(qu).length && (Zu(qu), clearTimeout(su.current), su.current = setTimeout((() => {
            Zu({})
          }), Qu))
        }), [uu]), (0, hu.useEffect)((() => () => {
          clearTimeout(su.current)
        }), []), Uu
      }("loaded" === Cu.status ? Cu.leaderboard : null), cu = function(uu) {
        const [Eu, ju] = (0, hu.useState)(null), su = "loaded" === uu.status ? uu.leaderboard.goalProgress : void 0;
        return (0, hu.useEffect)((() => {
          su && ju(su)
        }), [su]), Eu
      }(Cu), Nu = ku.e[`profileEffect_${Uu.prizePack}`];
      if (Zu) return null;
      const Yu = "loaded" === Cu.status ? Cu.leaderboard : null,
        Du = null !== (Eu = null === Yu || void 0 === Yu ? void 0 : Yu.entries) && void 0 !== Eu ? Eu : null,
        gu = null !== Yu && void 0 !== Yu && Yu.own && null !== Du && !Du.some((uu => uu.isOwn)) ? Yu.own : null;
      return (0, Vu.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Vu.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Vu.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Vu.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Vu.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Vu.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), su("gameEvents:live")]
              }), (0, Vu.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [su("gameEvents:endsIn"), (0, Vu.jsx)(Ju.d, {
                  toTime: Uu.endsAt,
                  onReachEndOfCountdown: () => {
                    Xu(!0)
                  }
                })]
              })]
            }), (0, Vu.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: su(Uu.titleKey)
            }), (0, Vu.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Vu.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [Nu && (0, Vu.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Vu.jsx)(Nu, {})
                }), (0, Vu.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Vu.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: su("gameEvents:prize")
                  }), (0, Vu.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: su(Uu.prizeNameKey)
                  })]
                })]
              }), (0, Vu.jsx)(Wu, {
                event: Uu,
                progress: cu
              })]
            })]
          }), (0, Vu.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Vu.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Vu.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: su(Uu.leaderboard.titleKey)
              }), (0, Vu.jsx)(Ku.c, {
                ariaLabel: su("gameEvents:leaderboardScope"),
                options: Pu.e.map((uu => ({
                  value: uu,
                  label: su(`gameEvents:${uu}Scope`)
                }))),
                value: lu,
                onChange: fu
              })]
            }), "loading" === Cu.status && (0, Vu.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Vu.jsx)(mu.b, {})
            }), ("unavailable" === Cu.status || "loaded" === Cu.status && null === Du) && (0, Vu.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: su("gameEvents:leaderboardUnavailable")
            }), null !== Du && 0 === Du.length && (0, Vu.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: su("friends" === lu ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== Du && Du.length > 0 && (0, Vu.jsx)("ol", {
              className: "GameEventPanelRows",
              children: Du.map((uu => {
                const Eu = bu[uu.player.name];
                return (0, Vu.jsxs)("li", {
                  className: Ou()("GameEventPanelRow", {
                    GameEventPanelRowOwn: uu.isOwn,
                    GameEventPanelRowTop: uu.rank <= 3
                  }),
                  children: [(0, Vu.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", uu.rank]
                  }), (0, Vu.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Vu.jsx)(vu.f, {
                      playerSocialPreview: {
                        ...uu.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== Eu && (0, Vu.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", Eu.amount.toLocaleString()]
                  }, Eu.key), (0, Vu.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: uu.value.toLocaleString()
                  })]
                }, uu.player.name)
              }))
            }), gu && (0, Vu.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Vu.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", gu.rank.toLocaleString()]
              }), (0, Vu.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: su("gameEvents:yourPlace")
              }), (0, Vu.jsx)("span", {
                className: "GameEventPanelScore",
                children: gu.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function Wu(uu) {
      let {
        event: Eu,
        progress: ju
      } = uu;
      const {
        t: su
      } = (0, qu.A)(), Uu = null !== ju && Eu.prizeGoals.some(((uu, Eu) => ju[Eu] >= uu.target));
      return (0, Vu.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Vu.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: su(Uu ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Vu.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: Eu.prizeGoals.map(((uu, Eu) => {
            const Uu = null === ju ? null : Math.min(ju[Eu], uu.target);
            return (0, Vu.jsxs)(hu.Fragment, {
              children: [Eu > 0 && (0, Vu.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: su("gameEvents:goalsOr")
              }), (0, Vu.jsxs)("div", {
                className: Ou()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Uu === uu.target
                }),
                children: [(0, Vu.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: su(uu.labelKey)
                }), (0, Vu.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Vu.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Uu && void 0 !== Uu ? Uu : 0) / uu.target * 100 + "%"
                    }
                  }), null !== Uu && (0, Vu.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Uu.toLocaleString(), " / ", uu.target.toLocaleString()]
                  })]
                })]
              })]
            }, uu.board)
          }))
        })]
      })
    }
    var Su = ju(1600),
      Iu = ju(1651),
      Fu = ju(1094),
      Bu = ju(790),
      Lu = ju(3667);

    function tu(uu) {
      let {
        gameNameWithVariation: Eu
      } = uu;
      const ju = (0, Su.I)(Eu),
        [su, Uu] = (0, hu.useState)(null);
      if ((0, hu.useEffect)((() => {
          if (!ju) return;
          let uu = !0;
          return (0, Iu.h)(ju).then((Eu => {
            uu && Uu(Eu)
          })).catch((uu => {
            console.error(`Failed to load the page copy for ${ju.name}`, uu)
          })), () => {
            uu = !1
          }
        }), [ju]), !ju || !su || su.name !== ju.name) return null;
      const Zu = (0, Iu.e)(su),
        Xu = new Set((0, Fu.e)((0, Bu.f)()).map((uu => (0, Su.B)(uu)))),
        lu = su.similarGames.filter((uu => Xu.has((0, Su.B)(uu))));
      return (0, Vu.jsx)("div", {
        className: "GamePageContent",
        children: (0, Vu.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Vu.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Vu.jsx)("h2", {
              children: Zu.whatIs
            }), su.whatIs.map((uu => (0, Vu.jsx)("p", {
              children: uu
            }, uu)))]
          }), (0, Vu.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Vu.jsx)("h2", {
              children: Zu.howToPlay
            }), su.howToPlay.map((uu => (0, Vu.jsx)("p", {
              children: uu
            }, uu)))]
          }), (0, Vu.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Vu.jsx)("h2", {
              children: Zu.features
            }), (0, Vu.jsx)("ul", {
              children: su.features.map((uu => (0, Vu.jsx)("li", {
                children: uu
              }, uu)))
            })]
          }), (0, Vu.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Vu.jsx)("h2", {
              children: Zu.tips
            }), (0, Vu.jsx)("ul", {
              children: su.tips.map((uu => (0, Vu.jsx)("li", {
                children: uu
              }, uu)))
            })]
          }), (0, Vu.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Vu.jsx)("h2", {
              children: Zu.faq
            }), su.faq.map((uu => {
              let {
                question: Eu,
                answer: ju
              } = uu;
              return (0, Vu.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Vu.jsx)("h3", {
                  children: Eu
                }), (0, Vu.jsx)("p", {
                  children: ju
                })]
              }, Eu)
            }))]
          }), lu.length > 0 && (0, Vu.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Vu.jsx)("h2", {
              children: Zu.similarGames
            }), (0, Vu.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: lu.map((uu => (0, Vu.jsx)("li", {
                children: (0, Vu.jsx)(Lu.e, {
                  source: {
                    type: "game",
                    gameNameWithVariation: uu
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, uu)))
            })]
          })]
        })
      })
    }
    var xu = ju(1116),
      Tu = ju(91),
      Hu = ju(1183),
      Au = ju(34590),
      nu = ju(1700),
      yu = ju(1580),
      zu = ju(1570),
      Ru = ju(1662),
      uE = ju(1517),
      EE = ju(1405),
      jE = ju(36730),
      sE = ju(1293),
      UE = ju(1069),
      ZE = ju(349),
      XE = ju(1079),
      lE = ju(1595),
      qE = ju(9145),
      fE = ju(22),
      CE = ju(2655),
      bE = ju(822),
      cE = ju(1278),
      NE = ju(6711),
      OE = ju(3678);

    function YE(uu) {
      let {
        preview: Eu,
        isBroken: ju
      } = uu;
      const su = null === Eu ? null : (0, Zu.e)(Eu, "small"),
        Xu = (0, Uu.h)(null !== su && void 0 !== su ? su : Zu.p);
      return null === Eu ? (0, Vu.jsx)("div", {
        className: Ou()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: ju
        }),
        children: (0, Vu.jsx)(xu.e, {
          name: ju ? "triangle-exclamation" : "star"
        })
      }) : (0, Vu.jsx)("div", {
        className: Ou()("FeaturedGamesPopupSlotThumbnail", lu.d),
        style: (0, lu.c)(Xu),
        role: "img",
        "aria-label": Eu.name,
        children: (0, Vu.jsx)(lu.b, {
          image: Xu
        })
      })
    }

    function hE(uu) {
      let {
        schematicId: Eu,
        gameName: ju
      } = uu;
      const {
        userContext: Uu
      } = (0, Gu.c)(), Zu = (0, OE.c)(), [Xu, lu] = (0, hu.useState)(null), [qu, fu] = (0, hu.useState)(null), [Cu, bu] = (0, hu.useState)(!1), Nu = (0, hu.useCallback)((() => {
        fu(null), ou.b.getFeaturedGames(Uu).then((uu => {
          Zu.current && lu(uu.slots)
        })).catch((uu => {
          console.error("Failed to get featured games", uu), Zu.current && fu("Failed to load featured games")
        }))
      }), [Uu, Zu]);
      (0, hu.useEffect)((() => {
        Nu()
      }), [Nu]);
      const Ou = (uu, Eu) => {
        Cu || (bu(!0), ou.b.setFeaturedGame(Uu, uu, Eu).then((() => {
          Zu.current && Nu()
        })).catch((uu => {
          console.error("Failed to set featured game", uu), Zu.current && fu("Failed to update the featured slot")
        })).finally((() => {
          Zu.current && bu(!1)
        })))
      };
      return (0, Vu.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Vu.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !Xu && !qu && (0, Vu.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Vu.jsx)(mu.b, {})
        }), qu && (0, Vu.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: qu
        }), Xu && (0, Vu.jsxs)(Vu.Fragment, {
          children: [(0, Vu.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: Xu.map((uu => {
              const ju = uu.schematicId === Eu,
                Uu = null === uu.schematicId,
                {
                  categoryGroup: Zu
                } = su.N[uu.slotId];
              return (0, Vu.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Vu.jsx)(YE, {
                  preview: uu.preview,
                  isBroken: !Uu
                }), (0, Vu.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Vu.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, su.mb)(Zu), " \xb7 position", " ", (0, su.P)(uu.slotId, su.Mb) + 1, " of", " ", (0, su.Lb)(Zu, su.Mb)]
                  }), Uu && (0, Vu.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Uu && null !== uu.preview && (0, Vu.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: uu.preview.name
                  }), !Uu && null === uu.preview && (0, Vu.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Vu.jsx)(xu.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Vu.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Uu && (0, Vu.jsxs)(cu.x, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Ou(uu.slotId, Eu)
                    },
                    disabled: Cu,
                    children: [(0, Vu.jsx)(xu.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !Uu && !ju && (0, Vu.jsxs)(cu.$, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Ou(uu.slotId, Eu)
                    },
                    disabled: Cu,
                    children: [(0, Vu.jsx)(xu.e, {
                      name: "star"
                    }), " Replace"]
                  }), !Uu && (0, Vu.jsxs)(cu.R, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Ou(uu.slotId, null)
                    },
                    disabled: Cu,
                    children: [(0, Vu.jsx)(xu.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, uu.slotId)
            }))
          }), (0, Vu.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var DE = ju(4851),
      gE = ju(4778),
      ME = ju(3634);
    const eE = 8,
      GE = 12;

    function pE(uu) {
      let {
        customLobbies: Eu,
        favouriteLobbies: ju,
        toggleLikeLobby: su,
        showReport: Uu
      } = uu;
      const [Zu, Xu] = (0, hu.useState)(eE);
      return (0, hu.useEffect)((() => {
        if (Zu >= Eu.length) return;
        let uu = !0;
        return (0, ME.e)().then((() => {
          uu && Xu(Zu + GE)
        })), () => {
          uu = !1
        }
      }), [Zu, Eu.length]), (0, Vu.jsx)(Vu.Fragment, {
        children: Eu.slice(0, Zu).map((uu => (0, Vu.jsx)(gE.g, {
          customLobby: uu,
          favouriteLobbies: ju,
          toggleLikeLobby: su,
          showReport: Uu
        }, uu.name)))
      })
    }
    var wE = ju(4780),
      JE = ju(4796),
      dE = ju(4752),
      aE = ju(3770),
      PE = ju(9136),
      oE = ju(216);
    const kE = {
      skyblock: [ju(36756).c]
    };
    var mE = ju(649);
    const vE = {
      listedVariations: null,
      backgroundImage: Zu.p,
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

    function KE(uu, Eu) {
      const ju = bE.e[uu.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, Zu.e)(uu, "large"),
        badges: [],
        category: uu.gameCategory,
        title: void 0 !== (null === ju || void 0 === ju ? void 0 : ju.title) ? Eu(ju.title) : uu.name,
        variationTitle: null,
        description: void 0 !== (null === ju || void 0 === ju ? void 0 : ju.description) ? Eu(ju.description) : uu.description,
        ownerSocialPreviewWithoutLocation: "owner" in uu ? uu.owner : null,
        ccu: uu.ccu,
        favourites: uu.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in uu ? uu.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function VE(uu) {
      var Eu, ju, su;
      return null !== (Eu = null !== (ju = (0, oE.h)() ? function(uu) {
        for (const [Eu, ju] of Object.entries(kE)) {
          const su = [Eu, ...ju.map((uu => (0, ZE.Ub)(Eu, uu)))];
          if (su.includes(uu)) return su
        }
        return null
      }(uu) : null) && void 0 !== ju ? ju : null === (su = bE.c[uu]) || void 0 === su ? void 0 : su.listedVariations) && void 0 !== Eu ? Eu : null
    }

    function rE() {
      const {
        gameNameWithVariation: uu
      } = (0, yu.B)();
      if ((0, hu.useEffect)(aE.p, []), uu && (0, sE.q)(uu)) return (0, Vu.jsx)(QE, {
        urlId: uu
      }, uu);
      const Eu = uu && (0, UE.l)(uu) ? uu : "firstParty";
      return (0, Vu.jsx)(iE, {}, Eu)
    }

    function QE(uu) {
      let {
        urlId: Eu
      } = uu;
      const {
        userContext: ju,
        isUserContextUpdating: su
      } = (0, Gu.c)(), Uu = (0, hu.useMemo)((() => (0, nu.j)(Eu)), [Eu]);
      (0, hu.useMemo)((() => {
        if (null === Uu) return;
        const uu = Hu.userContextManager.peekCurrentUserContext();
        (null !== uu ? ou.b.getGame(uu, Uu.schematicId) : Hu.userContextManager.getCurrentUserContext().then((uu => ou.b.getGame(uu, Uu.schematicId)))).catch((uu => {
          console.error(`Failed to get the custom game ${Uu.schematicId}`, uu), (0, nu.f)(Eu)
        }))
      }), [Uu, Eu]);
      const [Zu, Xu] = (0, hu.useState)(null), lu = (0, Au.b)();
      (0, hu.useEffect)((() => {
        if (null !== Uu || su) return;
        let uu = !0;
        return ou.b.getGameByUrlId(ju, Eu).then((ju => {
          uu && Xu({
            urlId: Eu,
            game: ju
          })
        })).catch((ju => {
          console.error(`Failed to find the custom game with urlId ${Eu}`, ju), uu && (0, zu.navigateToHomePage)()
        })), () => {
          uu = !1
        }
      }), [Eu, Uu, su, ju]);
      const qu = null !== Uu && void 0 !== Uu ? Uu : (null === Zu || void 0 === Zu ? void 0 : Zu.urlId) === Eu ? Zu.game : null;
      return null === qu ? (0, Vu.jsx)(mu.b, {}) : lu ? (0, Vu.jsx)(iE, {
        gameNameWithVariation: (0, UE.w)(qu.schematicId),
        knownCustomGame: qu
      }, qu.schematicId) : null
    }

    function iE(uu) {
      var Eu, ju, Xu, Nu, Pu, ku, mu, Ku;
      let {
        gameNameWithVariation: ru,
        knownCustomGame: Qu = null
      } = uu;
      const {
        t: Wu
      } = (0, qu.A)();
      (0, CE.i)();
      const Iu = (0, CE.l)(),
        {
          userContext: Fu,
          isUserContextUpdating: Bu
        } = (0, Gu.c)(),
        Lu = (0, dE.f)(),
        Hu = (0, zu.useNavigatePreserveSearch)(),
        Au = (0, yu.B)(),
        nu = (0, hu.useMemo)((() => ru ? {
          gameNameWithVariation: ru
        } : Au), [ru, Au]),
        uE = (0, qE.e)(nu),
        sE = (0, hu.useMemo)((() => {
          const uu = function(uu) {
            var Eu, ju;
            const su = VE(uu);
            if (!su || 0 === su.length || su.includes(uu)) return uu;
            const Uu = fu.k.getItem((0, gu.o)(uu));
            if (Uu && su.includes(Uu)) return Uu;
            return null !== (Eu = null === (ju = bE.c[uu]) || void 0 === ju ? void 0 : ju.defaultListedVariation) && void 0 !== Eu ? Eu : su[0]
          }(uE.gameNameWithVariation);
          return uu === uE.gameNameWithVariation ? uE : {
            ...uE,
            gameNameWithVariation: uu
          }
        }), [uE]);
      (0, hu.useEffect)((() => {
        const uu = uE.gameNameWithVariation;
        sE.gameNameWithVariation !== uu && uu !== (0, ZE.Vb)(uu) && Hu((0, Su.F)(sE.gameNameWithVariation), {
          replace: !0
        })
      }), [sE.gameNameWithVariation, uE.gameNameWithVariation, Hu]);
      const [OE, YE] = (0, hu.useState)(""), ME = hu.useRef(null), [eE, GE] = (0, hu.useState)(), aE = (0, UE.l)(sE.gameNameWithVariation), oE = (0, hu.useMemo)((() => aE ? null : function(uu, Eu, ju) {
        var su, Uu;
        const Xu = bE.c[uu];
        return (0, mE.H)(Xu) ? null : {
          listedVariations: VE(uu),
          backgroundImage: (0, Zu.k)(uu, (0, Zu.c)(Xu)),
          badges: (0, Cu.filterBadges)(Xu.badges),
          category: Xu.type,
          title: ju(Xu.title),
          variationTitle: Xu.variationTitle ? ju(Xu.variationTitle) : null,
          description: ju(Xu.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== Eu ? null !== (su = Eu[uu]) && void 0 !== su ? su : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: Xu.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: Xu.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (Uu = Xu.canCreateCustomLobbies) || void 0 === Uu || Uu,
          countdownInformation: (0, gu.k)(uu)
        }
      }(sE.gameNameWithVariation, Iu, Wu)), [aE, sE.gameNameWithVariation, Iu, Wu]), [kE, rE] = (0, hu.useState)(!1), [QE, iE] = (0, hu.useState)((() => Qu ? KE(Qu, Wu) : vE)), SE = null !== oE && void 0 !== oE ? oE : QE, [IE] = (0, hu.useState)(SE === vE), FE = (0, Uu.h)(SE.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: BE,
        recentlyPlayedCustomLobbies: LE
      } = (0, hu.useMemo)((() => function(uu, Eu, ju, su) {
        var Uu;
        const Zu = uu => {
            const ju = (0, UE.q)(uu),
              su = Eu.find((Eu => "custom" === Eu.type ? Eu.schematicId === ju : Eu.gameNameWithVariation === uu));
            return su ? [...su.recentLobbies] : []
          },
          Xu = (0, Cu.getRecentGameNameWithVariationLobbiesKey)(uu),
          lu = null !== (Uu = fu.k.getItem(Xu)) && void 0 !== Uu ? Uu : [],
          qu = [...Zu(uu), ...lu],
          bu = [];
        for (const fu of qu)(0, cE.N)(fu) && !bu.includes(fu) && bu.push(fu);
        let cu = qu;
        if (ju) {
          const uu = Zu("classic_worlds"),
            Eu = qu.filter((Eu => !uu.includes(Eu)));
          cu = [...uu, ...Eu]
        }
        const Nu = [],
          Ou = !1 === su ? [] : cu;
        for (const fu of Ou)(0, cE.N)(fu) || Nu.includes(fu) || Nu.push(fu);
        return {
          recentlyPlayedPublicLobbies: bu,
          recentlyPlayedCustomLobbies: Nu
        }
      }(sE.gameNameWithVariation, Lu, SE.showWorldsInsteadOfCustomLobbies, SE.canCreateCustomLobbies)), [sE.gameNameWithVariation, Lu, SE.showWorldsInsteadOfCustomLobbies, SE.canCreateCustomLobbies]), [tE, xE] = (0, hu.useState)(!0), [TE, HE] = (0, hu.useState)([]), [AE, nE] = (0, hu.useState)(null), [yE, zE] = (0, hu.useState)("explore"), RE = (0, hu.useRef)(!1), uj = (0, hu.useCallback)((uu => {
        (0, Du.unstable_batchedUpdates)((() => {
          GE(uu), iE((Eu => ({
            ...KE(uu, Wu),
            isFavourite: Eu.isFavourite
          })))
        }))
      }), [Wu]);
      (0, hu.useEffect)((() => {
        null === fE.d.get("gameEntrySource") && (0, fE.j)("gameInformationPageDirect")
      }), []);
      const Ej = (0, hu.useRef)(null);
      (0, hu.useEffect)((() => {
        const uu = uu => {
            Ej.current = uu.target instanceof Element ? uu.target.closest("a, button") : null
          },
          Eu = uu => {
            "Tab" === uu.key && (Ej.current = null)
          };
        return document.addEventListener("pointerdown", uu, !0), document.addEventListener("keydown", Eu, !0), () => {
          document.removeEventListener("pointerdown", uu, !0), document.removeEventListener("keydown", Eu, !0)
        }
      }), []), (0, pu.e)("Enter", (uu => {
        const Eu = uu.target instanceof Element ? uu.target : null;
        if (uu.defaultPrevented || null !== Eu && void 0 !== Eu && Eu.closest("input, textarea, select")) return;
        const ju = null === Eu || void 0 === Eu ? void 0 : Eu.closest("a, button");
        ju && ju !== Ej.current || (uu.preventDefault(), Cj())
      })), (0, wu.b)(zu.navigateToHomePage);
      const jj = BE.length > 0 || LE.length > 0,
        sj = !SE.useRejoinLastLobbyButton || 0 === BE.length,
        Uj = aE && null === SE.ownerSocialPreviewWithoutLocation,
        Zj = Fu.getPlayerName() === (null === eE || void 0 === eE || null === (Eu = eE.owner) || void 0 === Eu ? void 0 : Eu.name),
        Xj = null !== (ju = null === (Xu = SE.badges.find((uu => "event" === uu.type))) || void 0 === Xu ? void 0 : Xu.event) && void 0 !== ju ? ju : null,
        lj = sj ? cu.p : cu.f,
        qj = (0, Vu.jsx)(bu.e, {
          tooltipInner: (0, Vu.jsx)("div", {
            children: Wu("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Vu.jsx)(lj, {
            className: "GameInformationButton",
            padDefaultFocus: sj,
            showPress: !0,
            onClick: () => {
              Cj()
            },
            children: (0, Vu.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [sj && (0, Vu.jsxs)(Vu.Fragment, {
                children: [(0, Vu.jsx)(xu.e, {
                  name: "play"
                }), " "]
              }), Wu("homePage:quickPlay")]
            })
          })
        });
      (0, hu.useEffect)((() => {
        if (!aE || Bu) return;
        let uu = !0;
        const Eu = (0, UE.q)(sE.gameNameWithVariation);
        return ou.b.getGame(Fu, Eu).then((Eu => {
          uu && uj(Eu)
        })).catch((Eu => {
          console.error("Failed to get Custom Game information", Eu), uu && (0, zu.navigateToHomePage)()
        })), ou.b.getFavouriteGames(Fu).then((ju => {
          uu && iE((uu => ({
            ...uu,
            isFavourite: ju.includes(Eu)
          })))
        })).catch((Eu => {
          console.error("Failed to get favourite games", Eu), uu && rE(!0)
        })), () => {
          uu = !1
        }
      }), [aE, Bu, sE.gameNameWithVariation, uj, Fu]);
      const fj = !aE && null === oE;

      function Cj(uu) {
        (0, PE.h)(), Hu((0, Mu.c)(sE.gameNameWithVariation, uu))
      }(0, hu.useEffect)((() => {
        fj && (0, zu.navigateToHomePage)()
      }), [fj]), (0, hu.useEffect)((() => {
        if (!1 === SE.canCreateCustomLobbies) return;
        let uu = !0;
        return null !== SE.showWorldsInsteadOfCustomLobbies && !1 === Bu && (xE(!0), ou.b.getFavouriteLobbies(Fu).then((uu => {
          nE(uu)
        })), ou.b.getOpenCustomLobbies(Fu, {
          gameNameWithVariation: SE.showWorldsInsteadOfCustomLobbies ? "classic" : sE.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === yE,
          onlyFavouriteLobbies: "favourite" === yE
        }).then((Eu => {
          uu && (0, Du.unstable_batchedUpdates)((() => {
            HE(Eu), xE(!1)
          }))
        })).catch((Eu => {
          console.error("Failed to get open custom lobbies", Eu), uu && xE(!1)
        }))), () => {
          uu = !1
        }
      }), [Bu, sE, yE, SE.showWorldsInsteadOfCustomLobbies, SE.canCreateCustomLobbies, Fu]);
      const bj = (0, hu.useCallback)((async uu => {
          try {
            if (!AE) return;
            AE.includes(uu) ? (ou.b.unfavouriteLobby(Fu, uu), nE(AE.filter((Eu => Eu !== uu)))) : (ou.b.favouriteLobby(Fu, uu).catch((uu => {
              console.error("Failed to favourite lobby", uu)
            })), nE([...AE, uu]))
          } catch (Eu) {
            console.error("Failed to like lobby", Eu)
          }
        }), [Fu, AE]),
        cj = (null === eE || void 0 === eE ? void 0 : eE.schematicId) === (0, UE.q)(uE.gameNameWithVariation) ? eE : null,
        Nj = cj && (0, Su.L)(uE.gameNameWithVariation, (uu => Wu(uu)), cj);
      (0, Ru.c)(cj && (0, Su.F)(uE.gameNameWithVariation, cj));
      const Oj = Tu.featureFlags.canUseCustomLobbies && !0 === SE.canCreateCustomLobbies,
        Yj = (0, Vu.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Vu.jsx)(tu, {
            gameNameWithVariation: sE.gameNameWithVariation
          })
        });
      return (0, Vu.jsx)(Vu.Fragment, {
        children: (0, Vu.jsxs)("article", {
          className: Ou()("GameInformation", {
            GameInformationFadeIn: IE,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (Nu = SE.countdownInformation) || void 0 === Nu ? void 0 : Nu.type)
          }),
          children: [Nj && (0, Vu.jsx)(eu.d, {
            meta: Nj
          }), (0, Vu.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Vu.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Vu.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Vu.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Vu.jsx)("div", {
                  className: Ou()("GameInformationTopBackgroundImage", lu.d),
                  style: (0, lu.c)(FE),
                  children: (0, Vu.jsx)(lu.b, {
                    image: FE
                  })
                })]
              }), (0, Vu.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Vu.jsx)(DE.c, {}), (0, Vu.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Vu.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Vu.jsxs)("div", {
                      className: Ou()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: Uj
                      }),
                      children: [SE.badges.map((uu => (0, Vu.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${uu.type}`,
                        children: (0, Vu.jsx)(au.c, {
                          badge: uu
                        })
                      }, uu.type))), aE && (0, Vu.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Vu.jsx)(du.d, {
                          text: (0, su.fb)({
                            type: "playerCrafted"
                          })
                        })
                      }), SE.category && (0, Vu.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Vu.jsx)(du.d, {
                          text: [{
                            str: (0, su.ib)(SE.category).toUpperCase()
                          }]
                        })
                      }), null !== SE.ccu && (0, Vu.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Vu.jsx)(xu.e, {
                          name: "user"
                        }), (0, cE.S)(SE.ccu), " online"]
                      }), null !== SE.ownerSocialPreviewWithoutLocation && (0, Vu.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Vu.jsx)("span", {
                          children: "Made by"
                        }), (0, Vu.jsx)(vu.f, {
                          playerSocialPreview: {
                            ...SE.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), Uj && (0, Vu.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Vu.jsx)("span", {
                          children: "Made by"
                        }), (0, Vu.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== SE.favourites && (null !== SE.isFavourite || aE && !kE) && (0, Vu.jsx)(cu.A, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== RE.current && (RE.current = !0, null !== SE.isFavourite)) {
                              const uu = (0, UE.q)(sE.gameNameWithVariation);
                              let Eu;
                              SE.isFavourite ? (Eu = -1, ou.b.unfavouriteGame(Fu, uu).catch((uu => {
                                console.error("Failed to get unfavourite game", uu)
                              })).finally((() => {
                                RE.current = !1
                              }))) : (Eu = 1, ou.b.favouriteGame(Fu, uu).catch((uu => {
                                console.error("Failed to get favourite game", uu)
                              })).finally((() => {
                                RE.current = !1
                              }))), iE((uu => ({
                                ...uu,
                                isFavourite: !uu.isFavourite
                              }))), iE((uu => ({
                                ...uu,
                                favourites: uu.favourites + Eu
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (Pu = SE.isFavourite) && void 0 !== Pu && Pu,
                        disabled: null === SE.isFavourite,
                        className: Ou()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === SE.isFavourite
                        })
                      }, null === SE.isFavourite ? "pending" : "known"), aE && !Uj && Tu.featureFlags.useSocialFeatures && !Zj && (0, Vu.jsx)(wE.d, {
                        targetType: "customGame",
                        targetId: (0, UE.q)(sE.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (Fu.playerHasRank("developer") || Fu.playerHasRank("admin") && Zj) && (0, Vu.jsxs)(cu.p, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Hu((0, lE.i)((0, XE.i)(sE.gameNameWithVariation, !0)))
                        },
                        children: [(0, Vu.jsx)(xu.e, {
                          name: "star-christmas"
                        }), " ", Wu("studio:viewInStudio")]
                      }), aE && Fu.playerHasRank("developer") && (0, Vu.jsxs)(cu.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, NE.c)({
                            schematicId: (0, UE.q)(sE.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Vu.jsx)(xu.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), aE && Fu.playerHasRank("developer") && (0, Vu.jsxs)(cu.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          EE.NotificationProvider.showCustomPopup({
                            body: () => (0, Vu.jsx)(hE, {
                              schematicId: (0, UE.q)(sE.gameNameWithVariation),
                              gameName: SE.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Vu.jsx)(xu.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (ku = SE.countdownInformation) || void 0 === ku ? void 0 : ku.type) && (0, Vu.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Vu.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Vu.jsx)(Ju.d, {
                            toTime: SE.countdownInformation.countdownToTime
                          })]
                        }), (0, Vu.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: SE.countdownInformation.previewText
                        })]
                      })]
                    }, Uj ? "pending" : "shown"), (0, Vu.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Vu.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Vu.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [SE.title, " ", SE.variationTitle && (null === (mu = bE.c[sE.gameNameWithVariation]) || void 0 === mu ? void 0 : mu.variationThumbnailUseBigRatio) && (0, Vu.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: SE.variationTitle
                          })]
                        })
                      }), SE.listedVariations && SE.listedVariations.length > 0 && (0, Vu.jsx)("div", {
                        className: Ou()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (Ku = bE.c[sE.gameNameWithVariation]) || void 0 === Ku ? void 0 : Ku.variationThumbnailUseBigRatio
                        }),
                        children: SE.listedVariations.map((uu => {
                          var Eu, ju;
                          return (0, Vu.jsxs)(WE, {
                            variation: uu,
                            isSelected: sE.gameNameWithVariation === uu,
                            children: [null !== Iu && (0, Vu.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Vu.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Vu.jsx)(xu.e, {
                                  name: "user"
                                }), " ", (0, cE.S)(null !== (Eu = Iu[uu]) && void 0 !== Eu ? Eu : 0)]
                              })
                            }), (0, Vu.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: Wu(null !== (ju = bE.c[uu].variationTitle) && void 0 !== ju ? ju : bE.c[uu].title)
                            }), (0, Vu.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, Cu.filterBadges)(bE.c[uu].badges).map((uu => (0, Vu.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + uu.type,
                                children: (0, Vu.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Vu.jsx)(au.c, {
                                    badge: uu
                                  })
                                })
                              }, uu.type)))
                            })]
                          }, uu)
                        }))
                      })]
                    }), SE.description && (0, Vu.jsx)("p", {
                      className: "GameInformationDescription",
                      children: SE.description
                    })]
                  }), (0, Vu.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Vu.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!sj && (0, Vu.jsx)(bu.e, {
                        tooltipInner: (0, Vu.jsx)("div", {
                          children: Wu("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Vu.jsx)(cu.p, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            Cj(BE[0])
                          },
                          children: (0, Vu.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Vu.jsx)(xu.e, {
                              name: "play"
                            }), " ", Wu("homePage:rejoinLobbyNumber", {
                              number: BE[0]
                            })]
                          })
                        })
                      }), sj && qj]
                    }), (0, Vu.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!sj && qj, (0, Vu.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Vu.jsx)(xu.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Vu.jsx)(Yu.d, {
                          className: "JoinLobbyInput",
                          placeholderText: Wu("homePage:lobbyName"),
                          maxLength: cE.P,
                          domRef: ME,
                          onValueChange: uu => {
                            uu = (0, cE.tb)(uu), YE(uu)
                          },
                          onEnter: () => {
                            0 === OE.length ? Cj(BE[0]) : Cj(OE)
                          }
                        }), (0, Vu.jsx)(cu.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === OE.length ? Cj(BE[0]) : Cj(OE)
                          },
                          children: Wu("general:join")
                        })]
                      })]
                    }), (0, Vu.jsxs)("section", {
                      className: Ou()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !jj
                      }),
                      children: [(0, Vu.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Vu.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Vu.jsx)(xu.e, {
                            name: "clock-rotate-left"
                          }), jj && (0, Vu.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: Wu("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Vu.jsx)(JE.c, {
                        lobbyGroups: [BE, LE],
                        onLobbyClick: uu => {
                          Cj(uu)
                        },
                        keyPrefix: sE.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== Xj && (0, Vu.jsx)(iu, {
                eventName: Xj
              })]
            }), Oj && (0, Vu.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Vu.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Vu.jsxs)("div", {
                  className: Ou()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === SE.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === SE.showWorldsInsteadOfCustomLobbies && (0, Vu.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Vu.jsx)(xu.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Vu.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Vu.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Wu("game:worlds")]
                    })]
                  }), !1 === SE.showWorldsInsteadOfCustomLobbies && (0, Vu.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Vu.jsx)(xu.e, {
                      name: "joystick"
                    }), (0, Vu.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Vu.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Wu("homePage:customLobbies")]
                    })]
                  }), (0, Vu.jsx)(cu.$, {
                    onClick: () => {
                      zE("explore")
                    },
                    active: "explore" === yE,
                    children: Wu("general:explore")
                  }), (0, Vu.jsx)(cu.$, {
                    onClick: () => {
                      zE("favourite")
                    },
                    active: "favourite" === yE,
                    children: Wu("homePage:favouriteLobbies")
                  }), (0, Vu.jsx)(cu.$, {
                    onClick: () => {
                      zE("owned")
                    },
                    active: "owned" === yE,
                    children: Wu("homePage:ownedLobbies")
                  })]
                }), (0, Vu.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Vu.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Vu.jsx)(gE.c, {
                      label: "Create",
                      onClick: () => {
                        EE.NotificationProvider.showCustomPopup({
                          body: uu => (0, Vu.jsx)(jE.CreateCustomLobby, {
                            gameNameWithVariation: sE.gameNameWithVariation,
                            close: uu
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === tE && (0, Vu.jsx)(gE.j, {}), !1 === tE && (0, Vu.jsx)(pE, {
                      customLobbies: TE,
                      favouriteLobbies: AE,
                      toggleLikeLobby: bj,
                      showReport: Tu.featureFlags.useSocialFeatures && "owned" !== yE
                    })]
                  }), Yj]
                })]
              })
            })]
          }), !Oj && Yj]
        })
      })
    }

    function WE(uu) {
      let {
        variation: Eu,
        isSelected: ju,
        children: su
      } = uu;
      const qu = bE.c[Eu],
        Cu = (0, Zu.k)(Eu, (0, Zu.o)(qu)),
        bu = (0, Uu.h)(Cu),
        cu = (0, Xu.c)([(0, Zu.h)(Eu, (0, Zu.c)(qu))]);
      return (0, Vu.jsxs)(zu.LinkPreserveSearch, {
        to: (0, Su.F)(Eu),
        replace: !0,
        className: Ou()("GameInformationVariation", lu.d, {
          SelectedGameInformationVariation: ju
        }),
        onClick: uu => {
          if (!(0, uE.b)(uu)) return;
          const ju = (0, gu.o)(Eu);
          fu.k.setItem(ju, Eu)
        },
        onMouseEnter: cu.start,
        onMouseLeave: cu.cancel,
        onFocus: cu.start,
        onBlur: cu.cancel,
        style: (0, lu.c)(bu),
        children: [(0, Vu.jsx)(lu.b, {
          image: bu
        }), su]
      })
    }
  },
  6711: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => gu
    });
    var su = ju(58),
      Uu = ju(1506),
      Zu = ju(1559),
      Xu = ju(3678),
      lu = ju(1178),
      qu = ju(1393),
      fu = ju(1419),
      Cu = ju(1116),
      bu = ju(1105),
      cu = ju.n(bu),
      Nu = ju(6707),
      Ou = ju(1154);

    function Yu(uu) {
      let {
        info: Eu,
        className: ju
      } = uu;
      const {
        statusText: su,
        rowText: Uu
      } = (0, Nu.f)();
      return (0, Ou.jsxs)("div", {
        className: cu()("GameApprovalInfoDetails", ju),
        children: [(0, Ou.jsxs)("div", {
          className: cu()("GameApprovalInfoSummary", Eu.overallPassed ? "Passed" : "Failed"),
          children: [(0, Ou.jsx)(Cu.e, {
            name: Eu.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, Ou.jsx)("span", {
            children: su(Eu.status)
          })]
        }), Eu.rows.length > 0 && (0, Ou.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: Eu.rows.map((uu => {
            const {
              label: Eu,
              value: ju
            } = Uu(uu);
            return (0, Ou.jsxs)("div", {
              className: cu()("GameApprovalInfoRow", uu.passed ? "Passed" : "Failed"),
              children: [(0, Ou.jsx)(Cu.e, {
                name: uu.passed ? "check" : "xmark"
              }), (0, Ou.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, Ou.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: Eu
                }), null !== ju && (0, Ou.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: ju
                })]
              })]
            }, uu.kind)
          }))
        })]
      })
    }
    var hu = ju(1244),
      Du = ju(1405);

    function gu(uu) {
      Du.NotificationProvider.showCustomPopup({
        body: () => (0, Ou.jsx)(Mu, {
          ...uu
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function Mu(uu) {
      let {
        schematicId: Eu,
        canOverride: ju,
        onApprovalChanged: bu
      } = uu;
      const {
        t: cu
      } = (0, hu.A)(), {
        userContext: Nu
      } = (0, lu.c)(), Du = (0, Xu.c)(), [gu, Mu] = (0, su.useState)(null), [eu, Gu] = (0, su.useState)(null), [pu, wu] = (0, su.useState)(!1), Ju = (0, su.useCallback)((() => {
        Gu(null), Zu.b.getGameApprovalInfo(Nu, Eu).then((uu => {
          Du.current && Mu(uu)
        })).catch((uu => {
          console.error("Failed to get game approval info", uu), Du.current && Gu(cu("studio:approvalLoadFailed"))
        }))
      }), [Nu, Eu, Du, cu]);
      (0, su.useEffect)((() => {
        Ju()
      }), [Ju]);
      const du = uu => {
        pu || (wu(!0), Zu.b.setGameApproval(Nu, Eu, uu).then((() => {
          null === bu || void 0 === bu || bu(), Du.current && Ju()
        })).catch((uu => {
          console.error("Failed to set game approval", uu)
        })).finally((() => {
          Du.current && wu(!1)
        })))
      };
      return (0, Ou.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, Ou.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: cu("studio:approvalTitle")
        }), !gu && !eu && (0, Ou.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, Ou.jsx)(qu.b, {})
        }), eu && (0, Ou.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: eu
        }), gu && (0, Ou.jsxs)(Ou.Fragment, {
          children: [(0, Ou.jsx)(Yu, {
            info: gu
          }), ju && (0, Ou.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== gu.manualOverride && (0, Ou.jsx)(fu.e, {
              tooltipInner: (0, Ou.jsx)("div", {
                children: cu("studio:approvalApproveTooltip")
              }),
              children: (0, Ou.jsxs)(Uu.p, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  du(!0)
                },
                disabled: pu,
                children: [(0, Ou.jsx)(Cu.e, {
                  name: "check"
                }), " ", cu("studio:approvalApprove")]
              })
            }), !1 !== gu.manualOverride && (0, Ou.jsx)(fu.e, {
              tooltipInner: (0, Ou.jsx)("div", {
                children: cu("studio:approvalDenyTooltip")
              }),
              children: (0, Ou.jsxs)(Uu.R, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  du(!1)
                },
                disabled: pu,
                children: [(0, Ou.jsx)(Cu.e, {
                  name: "xmark"
                }), " ", cu("studio:approvalDeny")]
              })
            }), null !== gu.manualOverride && (0, Ou.jsx)(fu.e, {
              tooltipInner: (0, Ou.jsx)("div", {
                children: cu("studio:approvalClearOverrideTooltip")
              }),
              children: (0, Ou.jsxs)(Uu.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  du(null)
                },
                disabled: pu,
                children: [(0, Ou.jsx)(Cu.e, {
                  name: "arrows-rotate"
                }), " ", cu("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6707: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      f: () => Xu
    });
    var su = ju(349),
      Uu = ju(1244);
    const Zu = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function Xu() {
      const {
        t: uu,
        selectedLanguage: Eu
      } = (0, Uu.A)();
      return {
        statusText: Eu => uu(Zu[Eu]),
        rowText: ju => {
          const Zu = (uu, ju) => (0, su._)((0, Uu.n)(Eu.code, uu), 0, ju);
          switch (ju.kind) {
            case "ownerAccountAge": {
              const Eu = ju.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: uu("studio:approvalAccountAgeLabel"),
                value: uu(Eu, {
                  age: Zu(Eu, ju.accountAgeMs),
                  days: ju.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: uu("studio:approvalSinceUnbannedLabel"), value: uu("studio:approvalSinceUnbannedValue", {
                  time: Zu("studio:approvalSinceUnbannedValue", ju.sinceMs),
                  days: ju.minDays
                })
              };
            case "reportHold": {
              const {
                detail: Eu
              } = ju;
              if (null === Eu) return {
                label: uu("studio:approvalUnderInvestigation"),
                value: null
              };
              const su = Eu.weightedReporters.toFixed(1),
                Uu = Eu.threshold.toFixed(1),
                Xu = uu("studio:approvalReportHoldLabel", {
                  hours: Eu.windowHours
                });
              if (null === Eu.heldUntil) return {
                label: Xu,
                value: uu("studio:approvalReportHoldValue", {
                  weightedReporters: su,
                  threshold: Uu
                })
              };
              const lu = "studio:approvalReportHoldValueHeld";
              return {
                label: Xu,
                value: uu(lu, {
                  weightedReporters: su,
                  threshold: Uu,
                  time: Zu(lu, Eu.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function lu(uu) {
      return null === uu.manualOverride && uu.rows.some((uu => "reportHold" === uu.kind && !uu.passed))
    }
  },
  34590: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu
    });
    var su = ju(58),
      Uu = ju(3634);

    function Zu() {
      const [uu, Eu] = (0, su.useState)(!1);
      return (0, su.useLayoutEffect)((() => {
        let uu = !0;
        return (0, Uu.e)().then((() => {
          uu && Eu(!0)
        })), () => {
          uu = !1
        }
      }), []), uu
    }
  },
  9145: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu
    });
    var su = ju(1376),
      Uu = ju(1278),
      Zu = ju(649);

    function Xu(uu) {
      return uu = function(uu, Eu) {
        var ju;
        const su = new URLSearchParams(Eu),
          Uu = su.get("lobby"),
          Zu = su.get("vm"),
          Xu = null !== (ju = Uu) && void 0 !== ju ? ju : uu.lobbyName,
          lu = null !== Zu && void 0 !== Zu ? Zu : uu.directJoinVmUrl;
        if (Xu === uu.lobbyName && lu === uu.directJoinVmUrl) return uu;
        return {
          ...uu,
          lobbyName: Xu,
          directJoinVmUrl: lu
        }
      }(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), uu = function(uu) {
        if ((0, Zu.H)(uu.directJoinVmUrl)) return uu;
        const Eu = (0, Uu._)(uu.directJoinVmUrl);
        null === Eu && (uu.directJoinVmUrl = void 0);
        return uu
      }(uu = function(uu) {
        if ((0, Zu.H)(uu.gameNameWithVariation)) return uu;
        return uu.gameNameWithVariation = (0, su.o)(uu.gameNameWithVariation), uu
      }(uu))
    }
  },
  9136: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      h: () => Uu
    });
    let su = !1;

    function Uu() {
      su = !0
    }

    function Zu() {
      return su
    }
  },
  36756: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      d: () => su
    });
    const su = "skyblockSkills",
      Uu = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);