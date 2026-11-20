export const id = 115;
export const ids = [115, 389];
export const modules = {
  36215: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => UR
    });
    var Eu = yu(330),
      Ku = yu(3318),
      Qu = yu(3361),
      mu = yu(3356),
      Ju = yu(3347),
      Nu = yu(1170),
      Xu = yu(47),
      Vu = yu(1661),
      ru = yu(1325),
      Bu = yu(1408),
      xu = yu(1035),
      Su = yu.n(xu),
      pu = yu(1617),
      Tu = yu(64),
      Wu = yu(80),
      ju = yu(2269),
      Hu = yu(1289),
      du = yu(1566),
      bu = yu(1107),
      Cu = yu(3214),
      ku = yu(4322),
      eu = yu(3298),
      Au = yu(3307),
      Du = yu(1825),
      Mu = yu(3312),
      Iu = yu(1667),
      Gu = yu(1447),
      Uu = yu(2066),
      nu = yu(1300),
      su = yu(2457),
      tu = yu(4811),
      lu = yu(1079);
    const gu = 15e3,
      cu = 2500;

    function Lu(uu) {
      var Ru;
      let {
        eventName: yu
      } = uu;
      const {
        t: Eu
      } = (0, Nu.E)(), Ku = Iu.f[yu], [Qu, mu] = (0, Tu.useState)((() => Date.now() >= Ku.endsAt.getTime())), [Ju, Xu] = (0, Tu.useState)("overall"), Vu = function(uu, Ru) {
        const {
          userContext: yu,
          isUserContextUpdating: Eu
        } = (0, bu.d)(), Ku = `${uu}:${Ru}`, [Qu, mu] = (0, Tu.useState)({
          requestKey: Ku,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, Tu.useEffect)((() => {
          if (Eu) return;
          let Qu, Ju = !1;
          const Nu = async () => {
            if ("visible" === document.visibilityState) try {
              const Eu = await Gu.e.getGameEventLeaderboard(yu, {
                event: uu,
                scope: Ru
              });
              Ju || mu({
                requestKey: Ku,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Eu
                }
              })
            } catch {
              Ju || mu((uu => uu.requestKey === Ku && "loaded" === uu.leaderboard.status ? uu : {
                requestKey: Ku,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            Ju || (Qu = setTimeout(Nu, gu))
          };
          return Nu(), () => {
            Ju = !0, clearTimeout(Qu)
          }
        }), [uu, Ru, Ku, yu, Eu]), Qu.requestKey === Ku ? Qu.leaderboard : {
          status: "loading"
        }
      }(yu, Ju), ru = function(uu) {
        const Ru = (0, Tu.useRef)(null),
          yu = (0, Tu.useRef)(0),
          Eu = (0, Tu.useRef)(),
          [Ku, Qu] = (0, Tu.useState)({});
        return (0, Tu.useEffect)((() => {
          const Ku = null === uu || void 0 === uu ? void 0 : uu.entries;
          if (!Ku) return;
          const mu = new Map(Ku.map((uu => [uu.player.name, uu.value]))),
            Ju = Ru.current;
          if (Ru.current = mu, null === Ju) return;
          const Nu = {};
          for (const [uu, Ru] of mu) {
            const Eu = Ju.get(uu);
            void 0 !== Eu && Ru > Eu && (Nu[uu] = {
              amount: Ru - Eu,
              key: yu.current++
            })
          }
          0 !== Object.keys(Nu).length && (Qu(Nu), clearTimeout(Eu.current), Eu.current = setTimeout((() => {
            Qu({})
          }), cu))
        }), [uu]), (0, Tu.useEffect)((() => () => {
          clearTimeout(Eu.current)
        }), []), Ku
      }("loaded" === Vu.status ? Vu.leaderboard : null), Bu = function(uu) {
        const [Ru, yu] = (0, Tu.useState)(null), Eu = "loaded" === uu.status ? uu.leaderboard.goalProgress : void 0;
        return (0, Tu.useEffect)((() => {
          Eu && yu(Eu)
        }), [Eu]), Ru
      }(Vu), xu = Uu.i[`profileEffect_${Ku.prizePack}`];
      if (Qu) return null;
      const pu = "loaded" === Vu.status ? Vu.leaderboard : null,
        Wu = null !== (Ru = null === pu || void 0 === pu ? void 0 : pu.entries) && void 0 !== Ru ? Ru : null,
        ju = null !== pu && void 0 !== pu && pu.own && null !== Wu && !Wu.some((uu => uu.isOwn)) ? pu.own : null;
      return (0, lu.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, lu.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, lu.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, lu.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, lu.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, lu.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Eu("gameEvents:live")]
              }), (0, lu.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Eu("gameEvents:endsIn"), (0, lu.jsx)(eu.b, {
                  toTime: Ku.endsAt,
                  onReachEndOfCountdown: () => {
                    mu(!0)
                  }
                })]
              })]
            }), (0, lu.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Eu(Ku.titleKey)
            }), (0, lu.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, lu.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [xu && (0, lu.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, lu.jsx)(xu, {})
                }), (0, lu.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, lu.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Eu("gameEvents:prize")
                  }), (0, lu.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Eu(Ku.prizeNameKey)
                  })]
                })]
              }), (0, lu.jsx)(zu, {
                event: Ku,
                progress: Bu
              })]
            })]
          }), (0, lu.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, lu.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, lu.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Eu(Ku.leaderboard.titleKey)
              }), (0, lu.jsx)(tu.b, {
                ariaLabel: Eu("gameEvents:leaderboardScope"),
                options: Iu.e.map((uu => ({
                  value: uu,
                  label: Eu(`gameEvents:${uu}Scope`)
                }))),
                value: Ju,
                onChange: Xu
              })]
            }), "loading" === Vu.status && (0, lu.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, lu.jsx)(nu.b, {})
            }), ("unavailable" === Vu.status || "loaded" === Vu.status && null === Wu) && (0, lu.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Eu("gameEvents:leaderboardUnavailable")
            }), null !== Wu && 0 === Wu.length && (0, lu.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Eu("friends" === Ju ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== Wu && Wu.length > 0 && (0, lu.jsx)("ol", {
              className: "GameEventPanelRows",
              children: Wu.map((uu => {
                const Ru = ru[uu.player.name];
                return (0, lu.jsxs)("li", {
                  className: Su()("GameEventPanelRow", {
                    GameEventPanelRowOwn: uu.isOwn,
                    GameEventPanelRowTop: uu.rank <= 3
                  }),
                  children: [(0, lu.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", uu.rank]
                  }), (0, lu.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, lu.jsx)(su.e, {
                      playerSocialPreview: {
                        ...uu.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== Ru && (0, lu.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", Ru.amount.toLocaleString()]
                  }, Ru.key), (0, lu.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: uu.value.toLocaleString()
                  })]
                }, uu.player.name)
              }))
            }), ju && (0, lu.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, lu.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", ju.rank.toLocaleString()]
              }), (0, lu.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Eu("gameEvents:yourPlace")
              }), (0, lu.jsx)("span", {
                className: "GameEventPanelScore",
                children: ju.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function zu(uu) {
      let {
        event: Ru,
        progress: yu
      } = uu;
      const {
        t: Eu
      } = (0, Nu.E)(), Ku = null !== yu && Ru.prizeGoals.some(((uu, Ru) => yu[Ru] >= uu.target));
      return (0, lu.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, lu.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Eu(Ku ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, lu.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: Ru.prizeGoals.map(((uu, Ru) => {
            const Ku = null === yu ? null : Math.min(yu[Ru], uu.target);
            return (0, lu.jsxs)(Tu.Fragment, {
              children: [Ru > 0 && (0, lu.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Eu("gameEvents:goalsOr")
              }), (0, lu.jsxs)("div", {
                className: Su()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Ku === uu.target
                }),
                children: [(0, lu.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Eu(uu.labelKey)
                }), (0, lu.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, lu.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Ku && void 0 !== Ku ? Ku : 0) / uu.target * 100 + "%"
                    }
                  }), null !== Ku && (0, lu.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Ku.toLocaleString(), " / ", uu.target.toLocaleString()]
                  })]
                })]
              })]
            }, uu.board)
          }))
        })]
      })
    }
    var Fu = yu(1499),
      wu = yu(1551),
      Zu = yu(1020),
      hu = yu(719),
      Pu = yu(3296);

    function iu(uu) {
      let {
        gameNameWithVariation: Ru
      } = uu;
      const yu = (0, Fu.E)(Ru),
        [Eu, Ku] = (0, Tu.useState)(null);
      if ((0, Tu.useEffect)((() => {
          if (!yu) return;
          let uu = !0;
          return (0, wu.j)(yu).then((Ru => {
            uu && Ku(Ru)
          })).catch((uu => {
            console.error(`Failed to load the page copy for ${yu.name}`, uu)
          })), () => {
            uu = !1
          }
        }), [yu]), !yu || !Eu || Eu.name !== yu.name) return null;
      const Qu = (0, wu.f)(Eu),
        mu = new Set((0, Zu.c)((0, hu.i)()).map((uu => (0, Fu.x)(uu)))),
        Ju = Eu.similarGames.filter((uu => mu.has((0, Fu.x)(uu))));
      return (0, lu.jsx)("div", {
        className: "GamePageContent",
        children: (0, lu.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, lu.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, lu.jsx)("h2", {
              children: Qu.whatIs
            }), Eu.whatIs.map((uu => (0, lu.jsx)("p", {
              children: uu
            }, uu)))]
          }), (0, lu.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, lu.jsx)("h2", {
              children: Qu.howToPlay
            }), Eu.howToPlay.map((uu => (0, lu.jsx)("p", {
              children: uu
            }, uu)))]
          }), (0, lu.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, lu.jsx)("h2", {
              children: Qu.features
            }), (0, lu.jsx)("ul", {
              children: Eu.features.map((uu => (0, lu.jsx)("li", {
                children: uu
              }, uu)))
            })]
          }), (0, lu.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, lu.jsx)("h2", {
              children: Qu.tips
            }), (0, lu.jsx)("ul", {
              children: Eu.tips.map((uu => (0, lu.jsx)("li", {
                children: uu
              }, uu)))
            })]
          }), (0, lu.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, lu.jsx)("h2", {
              children: Qu.faq
            }), Eu.faq.map((uu => {
              let {
                question: Ru,
                answer: yu
              } = uu;
              return (0, lu.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, lu.jsx)("h3", {
                  children: Ru
                }), (0, lu.jsx)("p", {
                  children: yu
                })]
              }, Ru)
            }))]
          }), Ju.length > 0 && (0, lu.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, lu.jsx)("h2", {
              children: Qu.similarGames
            }), (0, lu.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: Ju.map((uu => (0, lu.jsx)("li", {
                children: (0, lu.jsx)(Pu.e, {
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
    var Yu = yu(1043),
      ou = yu(106),
      qu = yu(1110),
      Ou = yu(9103),
      vu = yu(1600),
      au = yu(1483),
      fu = yu(1467),
      uR = yu(1562),
      RR = yu(1415),
      yR = yu(1311),
      ER = yu(36219),
      KR = yu(1213),
      QR = yu(1001),
      mR = yu(343),
      JR = yu(1011),
      NR = yu(1497),
      XR = yu(8666),
      VR = yu(27),
      rR = yu(2407),
      BR = yu(753),
      xR = yu(1199),
      SR = yu(6291);

    function pR(uu) {
      let {
        preview: Ru,
        isBroken: yu
      } = uu;
      const Eu = null === Ru ? null : (0, Qu.g)(Ru, "small"),
        mu = (0, Ku.g)(null !== Eu && void 0 !== Eu ? Eu : Qu.m);
      return null === Ru ? (0, lu.jsx)("div", {
        className: Su()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: yu
        }),
        children: (0, lu.jsx)(Yu.c, {
          name: yu ? "triangle-exclamation" : "star"
        })
      }) : (0, lu.jsx)("div", {
        className: Su()("FeaturedGamesPopupSlotThumbnail", Ju.h),
        style: (0, Ju.f)(mu),
        role: "img",
        "aria-label": Ru.name,
        children: (0, lu.jsx)(Ju.c, {
          image: mu
        })
      })
    }

    function TR(uu) {
      let {
        schematicId: Ru,
        gameName: yu
      } = uu;
      const {
        userContext: Ku
      } = (0, bu.d)(), Qu = (0, Au.b)(), [mu, Ju] = (0, Tu.useState)(null), [Nu, Xu] = (0, Tu.useState)(null), [Vu, ru] = (0, Tu.useState)(!1), xu = (0, Tu.useCallback)((() => {
        Xu(null), Gu.e.getFeaturedGames(Ku).then((uu => {
          Qu.current && Ju(uu.slots)
        })).catch((uu => {
          console.error("Failed to get featured games", uu), Qu.current && Xu("Failed to load featured games")
        }))
      }), [Ku, Qu]);
      (0, Tu.useEffect)((() => {
        xu()
      }), [xu]);
      const Su = (uu, Ru) => {
        Vu || (ru(!0), Gu.e.setFeaturedGame(Ku, uu, Ru).then((() => {
          Qu.current && xu()
        })).catch((uu => {
          console.error("Failed to set featured game", uu), Qu.current && Xu("Failed to update the featured slot")
        })).finally((() => {
          Qu.current && ru(!1)
        })))
      };
      return (0, lu.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, lu.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !mu && !Nu && (0, lu.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, lu.jsx)(nu.b, {})
        }), Nu && (0, lu.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: Nu
        }), mu && (0, lu.jsxs)(lu.Fragment, {
          children: [(0, lu.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: mu.map((uu => {
              const yu = uu.schematicId === Ru,
                Ku = null === uu.schematicId,
                {
                  categoryGroup: Qu
                } = Eu.J[uu.slotId];
              return (0, lu.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, lu.jsx)(pR, {
                  preview: uu.preview,
                  isBroken: !Ku
                }), (0, lu.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, lu.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Eu.lb)(Qu), " \xb7 position", " ", (0, Eu.N)(uu.slotId, Eu.Tb) + 1, " of", " ", (0, Eu.Qb)(Qu, Eu.Tb)]
                  }), Ku && (0, lu.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Ku && null !== uu.preview && (0, lu.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: uu.preview.name
                  }), !Ku && null === uu.preview && (0, lu.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, lu.jsx)(Yu.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, lu.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Ku && (0, lu.jsxs)(Bu.n, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Su(uu.slotId, Ru)
                    },
                    disabled: Vu,
                    children: [(0, lu.jsx)(Yu.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !Ku && !yu && (0, lu.jsxs)(Bu.P, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Su(uu.slotId, Ru)
                    },
                    disabled: Vu,
                    children: [(0, lu.jsx)(Yu.c, {
                      name: "star"
                    }), " Replace"]
                  }), !Ku && (0, lu.jsxs)(Bu.F, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Su(uu.slotId, null)
                    },
                    disabled: Vu,
                    children: [(0, lu.jsx)(Yu.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, uu.slotId)
            }))
          }), (0, lu.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var WR = yu(4453),
      jR = yu(4365),
      HR = yu(4374),
      dR = yu(4390),
      bR = yu(4345),
      CR = yu(3386),
      kR = yu(8663),
      eR = yu(232);
    const AR = {
      skyblock: [yu(36243).d]
    };
    var DR = yu(610);
    const MR = {
      listedVariations: null,
      backgroundImage: Qu.m,
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

    function IR(uu, Ru) {
      const yu = BR.c[uu.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, Qu.g)(uu, "large"),
        badges: [],
        category: uu.gameCategory,
        title: void 0 !== (null === yu || void 0 === yu ? void 0 : yu.title) ? Ru(yu.title) : uu.name,
        variationTitle: null,
        description: void 0 !== (null === yu || void 0 === yu ? void 0 : yu.description) ? Ru(yu.description) : uu.description,
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

    function GR(uu) {
      var Ru, yu, Eu;
      return null !== (Ru = null !== (yu = (0, eR.o)() ? function(uu) {
        for (const [Ru, yu] of Object.entries(AR)) {
          const Eu = [Ru, ...yu.map((uu => (0, mR._b)(Ru, uu)))];
          if (Eu.includes(uu)) return Eu
        }
        return null
      }(uu) : null) && void 0 !== yu ? yu : null === (Eu = BR.b[uu]) || void 0 === Eu ? void 0 : Eu.listedVariations) && void 0 !== Ru ? Ru : null
    }

    function UR() {
      const {
        gameNameWithVariation: uu
      } = (0, au.A)();
      if ((0, Tu.useEffect)(CR.n, []), uu && (0, KR.o)(uu)) return (0, lu.jsx)(nR, {
        urlId: uu
      }, uu);
      const Ru = uu && (0, QR.i)(uu) ? uu : "firstParty";
      return (0, lu.jsx)(sR, {}, Ru)
    }

    function nR(uu) {
      let {
        urlId: Ru
      } = uu;
      const {
        userContext: yu,
        isUserContextUpdating: Eu
      } = (0, bu.d)(), Ku = (0, Tu.useMemo)((() => (0, vu.i)(Ru)), [Ru]);
      (0, Tu.useMemo)((() => {
        if (null === Ku) return;
        const uu = qu.userContextManager.peekCurrentUserContext();
        (null !== uu ? Gu.e.getGame(uu, Ku.schematicId) : qu.userContextManager.getCurrentUserContext().then((uu => Gu.e.getGame(uu, Ku.schematicId)))).catch((uu => {
          console.error(`Failed to get the custom game ${Ku.schematicId}`, uu), (0, vu.g)(Ru)
        }))
      }), [Ku, Ru]);
      const [Qu, mu] = (0, Tu.useState)(null), Ju = (0, Ou.e)();
      (0, Tu.useEffect)((() => {
        if (null !== Ku || Eu) return;
        let uu = !0;
        return Gu.e.getGameByUrlId(yu, Ru).then((yu => {
          uu && mu({
            urlId: Ru,
            game: yu
          })
        })).catch((yu => {
          console.error(`Failed to find the custom game with urlId ${Ru}`, yu), uu && (0, fu.navigateToHomePage)()
        })), () => {
          uu = !1
        }
      }), [Ru, Ku, Eu, yu]);
      const Nu = null !== Ku && void 0 !== Ku ? Ku : (null === Qu || void 0 === Qu ? void 0 : Qu.urlId) === Ru ? Qu.game : null;
      return null === Nu ? (0, lu.jsx)(nu.b, {}) : Ju ? (0, lu.jsx)(sR, {
        gameNameWithVariation: (0, QR.t)(Nu.schematicId),
        knownCustomGame: Nu
      }, Nu.schematicId) : null
    }

    function sR(uu) {
      var Ru, yu, mu, xu, Iu, Uu, nu, tu;
      let {
        gameNameWithVariation: gu,
        knownCustomGame: cu = null
      } = uu;
      const {
        t: zu
      } = (0, Nu.E)();
      (0, rR.e)();
      const wu = (0, rR.g)(),
        {
          userContext: Zu,
          isUserContextUpdating: hu
        } = (0, bu.d)(),
        Pu = (0, bR.f)(),
        qu = (0, fu.useNavigatePreserveSearch)(),
        Ou = (0, au.A)(),
        vu = (0, Tu.useMemo)((() => gu ? {
          gameNameWithVariation: gu
        } : Ou), [gu, Ou]),
        RR = (0, XR.e)(vu),
        KR = (0, Tu.useMemo)((() => {
          const uu = function(uu) {
            var Ru, yu;
            const Eu = GR(uu);
            if (!Eu || 0 === Eu.length || Eu.includes(uu)) return uu;
            const Ku = Xu.i.getItem((0, ju.g)(uu));
            if (Ku && Eu.includes(Ku)) return Ku;
            return null !== (Ru = null === (yu = BR.b[uu]) || void 0 === yu ? void 0 : yu.defaultListedVariation) && void 0 !== Ru ? Ru : Eu[0]
          }(RR.gameNameWithVariation);
          return uu === RR.gameNameWithVariation ? RR : {
            ...RR,
            gameNameWithVariation: uu
          }
        }), [RR]);
      (0, Tu.useEffect)((() => {
        const uu = RR.gameNameWithVariation;
        KR.gameNameWithVariation !== uu && uu !== (0, mR.cc)(uu) && qu((0, Fu.y)(KR.gameNameWithVariation), {
          replace: !0
        })
      }), [KR.gameNameWithVariation, RR.gameNameWithVariation, qu]);
      const pR = (0, Au.b)(),
        [CR, eR] = (0, Tu.useState)(""),
        AR = Tu.useRef(null),
        [UR, nR] = (0, Tu.useState)(),
        sR = (0, QR.i)(KR.gameNameWithVariation),
        lR = (0, Tu.useMemo)((() => sR ? null : function(uu, Ru, yu) {
          var Eu, Ku;
          const mu = BR.b[uu];
          return (0, DR.E)(mu) ? null : {
            listedVariations: GR(uu),
            backgroundImage: (0, Qu.j)(uu, (0, Qu.e)(mu)),
            badges: (0, Vu.filterBadges)(mu.badges),
            category: mu.type,
            title: yu(mu.title),
            variationTitle: mu.variationTitle ? yu(mu.variationTitle) : null,
            description: yu(mu.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== Ru ? null !== (Eu = Ru[uu]) && void 0 !== Eu ? Eu : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: mu.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: mu.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (Ku = mu.canCreateCustomLobbies) || void 0 === Ku || Ku,
            countdownInformation: (0, ju.f)(uu)
          }
        }(KR.gameNameWithVariation, wu, zu)), [sR, KR.gameNameWithVariation, wu, zu]),
        [gR, cR] = (0, Tu.useState)(!1),
        [LR, zR] = (0, Tu.useState)((() => cu ? IR(cu, zu) : MR)),
        FR = null !== lR && void 0 !== lR ? lR : LR,
        [wR] = (0, Tu.useState)(FR === MR),
        ZR = (0, Ku.g)(FR.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: hR,
          recentlyPlayedCustomLobbies: PR
        } = (0, Tu.useMemo)((() => function(uu, Ru, yu, Eu) {
          var Ku;
          const Qu = uu => {
              const yu = (0, QR.n)(uu),
                Eu = Ru.find((Ru => "custom" === Ru.type ? Ru.schematicId === yu : Ru.gameNameWithVariation === uu));
              return Eu ? [...Eu.recentLobbies] : []
            },
            mu = (0, Vu.getRecentGameNameWithVariationLobbiesKey)(uu),
            Ju = null !== (Ku = Xu.i.getItem(mu)) && void 0 !== Ku ? Ku : [],
            Nu = [...Qu(uu), ...Ju],
            ru = [];
          for (const Xu of Nu)(0, xR.N)(Xu) && !ru.includes(Xu) && ru.push(Xu);
          let Bu = Nu;
          if (yu) {
            const uu = Qu("classic_worlds"),
              Ru = Nu.filter((Ru => !uu.includes(Ru)));
            Bu = [...uu, ...Ru]
          }
          const xu = [],
            Su = !1 === Eu ? [] : Bu;
          for (const Xu of Su)(0, xR.N)(Xu) || xu.includes(Xu) || xu.push(Xu);
          return {
            recentlyPlayedPublicLobbies: ru,
            recentlyPlayedCustomLobbies: xu
          }
        }(KR.gameNameWithVariation, Pu, FR.showWorldsInsteadOfCustomLobbies, FR.canCreateCustomLobbies)), [KR.gameNameWithVariation, Pu, FR.showWorldsInsteadOfCustomLobbies, FR.canCreateCustomLobbies]),
        [iR, YR] = (0, Tu.useState)(!0),
        [oR, qR] = (0, Tu.useState)([]),
        [OR, vR] = (0, Tu.useState)(null),
        [aR, fR] = (0, Tu.useState)("explore"),
        uy = (0, Tu.useRef)(!1),
        Ry = (0, Tu.useCallback)((uu => {
          (0, Wu.unstable_batchedUpdates)((() => {
            nR(uu), zR((Ru => ({
              ...IR(uu, zu),
              isFavourite: Ru.isFavourite
            })))
          }))
        }), [zu]);
      (0, Tu.useEffect)((() => {
        null === VR.d.get("gameEntrySource") && (0, VR.i)("gameInformationPageDirect")
      }), []);
      const yy = (0, Tu.useRef)(null);
      (0, Tu.useEffect)((() => {
        const uu = uu => {
            yy.current = uu.target instanceof Element ? uu.target.closest("a, button") : null
          },
          Ru = uu => {
            "Tab" === uu.key && (yy.current = null)
          };
        return document.addEventListener("pointerdown", uu, !0), document.addEventListener("keydown", Ru, !0), () => {
          document.removeEventListener("pointerdown", uu, !0), document.removeEventListener("keydown", Ru, !0)
        }
      }), []), (0, Cu.c)("Enter", (uu => {
        const Ru = uu.target instanceof Element ? uu.target : null;
        if (uu.defaultPrevented || null !== Ru && void 0 !== Ru && Ru.closest("input, textarea, select")) return;
        const yu = null === Ru || void 0 === Ru ? void 0 : Ru.closest("a, button");
        yu && yu !== yy.current || (uu.preventDefault(), ry())
      })), (0, ku.c)(fu.navigateToHomePage);
      const Ey = hR.length > 0 || PR.length > 0,
        Ky = !FR.useRejoinLastLobbyButton || 0 === hR.length,
        Qy = sR && null === FR.ownerSocialPreviewWithoutLocation,
        my = Zu.getPlayerName() === (null === UR || void 0 === UR || null === (Ru = UR.owner) || void 0 === Ru ? void 0 : Ru.name),
        Jy = null !== (yu = null === (mu = FR.badges.find((uu => "event" === uu.type))) || void 0 === mu ? void 0 : mu.event) && void 0 !== yu ? yu : null,
        Ny = Ky ? Bu.l : Bu.e,
        Xy = (0, lu.jsx)(ru.i, {
          tooltipInner: (0, lu.jsx)("div", {
            children: zu("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, lu.jsx)(Ny, {
            className: "GameInformationButton",
            padDefaultFocus: Ky,
            showPress: !0,
            onClick: () => {
              ry()
            },
            children: (0, lu.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Ky && (0, lu.jsxs)(lu.Fragment, {
                children: [(0, lu.jsx)(Yu.c, {
                  name: "play"
                }), " "]
              }), zu("homePage:quickPlay")]
            })
          })
        });
      (0, Tu.useEffect)((() => {
        if (!sR || hu) return;
        let uu = !0;
        const Ru = (0, QR.n)(KR.gameNameWithVariation);
        return Gu.e.getGame(Zu, Ru).then((Ru => {
          uu && Ry(Ru)
        })).catch((Ru => {
          console.error("Failed to get Custom Game information", Ru), uu && (0, fu.navigateToHomePage)()
        })), Gu.e.getFavouriteGames(Zu).then((yu => {
          uu && zR((uu => ({
            ...uu,
            isFavourite: yu.includes(Ru)
          })))
        })).catch((Ru => {
          console.error("Failed to get favourite games", Ru), uu && cR(!0)
        })), () => {
          uu = !1
        }
      }), [sR, hu, KR.gameNameWithVariation, Ry, Zu]);
      const Vy = !sR && null === lR;

      function ry(uu) {
        (0, kR.f)(), qu((0, Hu.b)(KR.gameNameWithVariation, uu))
      }(0, Tu.useEffect)((() => {
        Vy && (0, fu.navigateToHomePage)()
      }), [Vy]), (0, Tu.useEffect)((() => {
        !1 !== FR.canCreateCustomLobbies && null !== FR.showWorldsInsteadOfCustomLobbies && !1 === hu && (YR(!0), Gu.e.getFavouriteLobbies(Zu).then((uu => {
          vR(uu)
        })), Gu.e.getOpenCustomLobbies(Zu, {
          gameNameWithVariation: FR.showWorldsInsteadOfCustomLobbies ? "classic" : KR.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === aR,
          onlyFavouriteLobbies: "favourite" === aR
        }).then((uu => {
          pR.current && qR(uu)
        })).catch((uu => {})).finally((() => {
          pR.current && YR(!1)
        })))
      }), [hu, KR, aR, FR.showWorldsInsteadOfCustomLobbies, FR.canCreateCustomLobbies, pR, Zu]);
      const By = (0, Tu.useCallback)((async uu => {
          try {
            if (!OR) return;
            OR.includes(uu) ? (Gu.e.unfavouriteLobby(Zu, uu), vR(OR.filter((Ru => Ru !== uu)))) : (Gu.e.favouriteLobby(Zu, uu).catch((uu => {
              console.error("Failed to favourite lobby", uu)
            })), vR([...OR, uu]))
          } catch (Ru) {
            console.error("Failed to like lobby", Ru)
          }
        }), [Zu, OR]),
        xy = (null === UR || void 0 === UR ? void 0 : UR.schematicId) === (0, QR.n)(RR.gameNameWithVariation) ? UR : null,
        Sy = xy && (0, Fu.F)(RR.gameNameWithVariation, (uu => zu(uu)), xy);
      (0, uR.f)(xy && (0, Fu.y)(RR.gameNameWithVariation, xy));
      const py = ou.featureFlags.canUseCustomLobbies && !0 === FR.canCreateCustomLobbies,
        Ty = (0, lu.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, lu.jsx)(iu, {
            gameNameWithVariation: KR.gameNameWithVariation
          })
        });
      return (0, lu.jsx)(lu.Fragment, {
        children: (0, lu.jsxs)("article", {
          className: Su()("GameInformation", {
            GameInformationFadeIn: wR,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (xu = FR.countdownInformation) || void 0 === xu ? void 0 : xu.type)
          }),
          children: [Sy && (0, lu.jsx)(du.d, {
            meta: Sy
          }), (0, lu.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, lu.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, lu.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, lu.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, lu.jsx)("div", {
                  className: Su()("GameInformationTopBackgroundImage", Ju.h),
                  style: (0, Ju.f)(ZR),
                  children: (0, lu.jsx)(Ju.c, {
                    image: ZR
                  })
                })]
              }), (0, lu.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, lu.jsx)(WR.e, {}), (0, lu.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, lu.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, lu.jsxs)("div", {
                      className: Su()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: Qy
                      }),
                      children: [FR.badges.map((uu => (0, lu.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${uu.type}`,
                        children: (0, lu.jsx)(Mu.e, {
                          badge: uu
                        })
                      }, uu.type))), sR && (0, lu.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, lu.jsx)(Du.d, {
                          text: (0, Eu.db)({
                            type: "playerCrafted"
                          })
                        })
                      }), FR.category && (0, lu.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, lu.jsx)(Du.d, {
                          text: [{
                            str: (0, Eu.hb)(FR.category).toUpperCase()
                          }]
                        })
                      }), null !== FR.ccu && (0, lu.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, lu.jsx)(Yu.c, {
                          name: "user"
                        }), (0, xR.Q)(FR.ccu), " online"]
                      }), null !== FR.ownerSocialPreviewWithoutLocation && (0, lu.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, lu.jsx)("span", {
                          children: "Made by"
                        }), (0, lu.jsx)(su.e, {
                          playerSocialPreview: {
                            ...FR.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), Qy && (0, lu.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, lu.jsx)("span", {
                          children: "Made by"
                        }), (0, lu.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== FR.favourites && (null !== FR.isFavourite || sR && !gR) && (0, lu.jsx)(Bu.q, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== uy.current && (uy.current = !0, null !== FR.isFavourite)) {
                              const uu = (0, QR.n)(KR.gameNameWithVariation);
                              let Ru;
                              FR.isFavourite ? (Ru = -1, Gu.e.unfavouriteGame(Zu, uu).catch((uu => {
                                console.error("Failed to get unfavourite game", uu)
                              })).finally((() => {
                                uy.current = !1
                              }))) : (Ru = 1, Gu.e.favouriteGame(Zu, uu).catch((uu => {
                                console.error("Failed to get favourite game", uu)
                              })).finally((() => {
                                uy.current = !1
                              }))), zR((uu => ({
                                ...uu,
                                isFavourite: !uu.isFavourite
                              }))), zR((uu => ({
                                ...uu,
                                favourites: uu.favourites + Ru
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (Iu = FR.isFavourite) && void 0 !== Iu && Iu,
                        disabled: null === FR.isFavourite,
                        className: Su()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === FR.isFavourite
                        })
                      }, null === FR.isFavourite ? "pending" : "known"), sR && !Qy && ou.featureFlags.useSocialFeatures && !my && (0, lu.jsx)(HR.e, {
                        targetType: "customGame",
                        targetId: (0, QR.n)(KR.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (Zu.playerHasRank("developer") || Zu.playerHasRank("admin") && my) && (0, lu.jsxs)(Bu.l, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          qu((0, NR.j)((0, JR.f)(KR.gameNameWithVariation, !0)))
                        },
                        children: [(0, lu.jsx)(Yu.c, {
                          name: "star-christmas"
                        }), " ", zu("studio:viewInStudio")]
                      }), sR && Zu.playerHasRank("developer") && (0, lu.jsxs)(Bu.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, SR.c)({
                            schematicId: (0, QR.n)(KR.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, lu.jsx)(Yu.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), sR && Zu.playerHasRank("developer") && (0, lu.jsxs)(Bu.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          yR.NotificationProvider.showCustomPopup({
                            body: () => (0, lu.jsx)(TR, {
                              schematicId: (0, QR.n)(KR.gameNameWithVariation),
                              gameName: FR.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, lu.jsx)(Yu.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (Uu = FR.countdownInformation) || void 0 === Uu ? void 0 : Uu.type) && (0, lu.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, lu.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, lu.jsx)(eu.b, {
                            toTime: FR.countdownInformation.countdownToTime
                          })]
                        }), (0, lu.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: FR.countdownInformation.previewText
                        })]
                      })]
                    }, Qy ? "pending" : "shown"), (0, lu.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, lu.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, lu.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [FR.title, " ", FR.variationTitle && (null === (nu = BR.b[KR.gameNameWithVariation]) || void 0 === nu ? void 0 : nu.variationThumbnailUseBigRatio) && (0, lu.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: FR.variationTitle
                          })]
                        })
                      }), FR.listedVariations && FR.listedVariations.length > 0 && (0, lu.jsx)("div", {
                        className: Su()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (tu = BR.b[KR.gameNameWithVariation]) || void 0 === tu ? void 0 : tu.variationThumbnailUseBigRatio
                        }),
                        children: FR.listedVariations.map((uu => {
                          var Ru, yu;
                          return (0, lu.jsxs)(tR, {
                            variation: uu,
                            isSelected: KR.gameNameWithVariation === uu,
                            children: [null !== wu && (0, lu.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, lu.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, lu.jsx)(Yu.c, {
                                  name: "user"
                                }), " ", (0, xR.Q)(null !== (Ru = wu[uu]) && void 0 !== Ru ? Ru : 0)]
                              })
                            }), (0, lu.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: zu(null !== (yu = BR.b[uu].variationTitle) && void 0 !== yu ? yu : BR.b[uu].title)
                            }), (0, lu.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, Vu.filterBadges)(BR.b[uu].badges).map((uu => (0, lu.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + uu.type,
                                children: (0, lu.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, lu.jsx)(Mu.e, {
                                    badge: uu
                                  })
                                })
                              }, uu.type)))
                            })]
                          }, uu)
                        }))
                      })]
                    }), FR.description && (0, lu.jsx)("p", {
                      className: "GameInformationDescription",
                      children: FR.description
                    })]
                  }), (0, lu.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, lu.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Ky && (0, lu.jsx)(ru.i, {
                        tooltipInner: (0, lu.jsx)("div", {
                          children: zu("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, lu.jsx)(Bu.l, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            ry(hR[0])
                          },
                          children: (0, lu.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, lu.jsx)(Yu.c, {
                              name: "play"
                            }), " ", zu("homePage:rejoinLobbyNumber", {
                              number: hR[0]
                            })]
                          })
                        })
                      }), Ky && Xy]
                    }), (0, lu.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Ky && Xy, (0, lu.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, lu.jsx)(Yu.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, lu.jsx)(pu.b, {
                          className: "JoinLobbyInput",
                          placeholderText: zu("homePage:lobbyName"),
                          maxLength: xR.O,
                          domRef: AR,
                          onValueChange: uu => {
                            uu = (0, xR.rb)(uu), eR(uu)
                          },
                          onEnter: () => {
                            0 === CR.length ? ry(hR[0]) : ry(CR)
                          }
                        }), (0, lu.jsx)(Bu.e, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === CR.length ? ry(hR[0]) : ry(CR)
                          },
                          children: zu("general:join")
                        })]
                      })]
                    }), (0, lu.jsxs)("section", {
                      className: Su()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !Ey
                      }),
                      children: [(0, lu.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, lu.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, lu.jsx)(Yu.c, {
                            name: "clock-rotate-left"
                          }), Ey && (0, lu.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: zu("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, lu.jsx)(dR.c, {
                        lobbyGroups: [hR, PR],
                        onLobbyClick: uu => {
                          ry(uu)
                        },
                        keyPrefix: KR.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== Jy && (0, lu.jsx)(Lu, {
                eventName: Jy
              })]
            }), py && (0, lu.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, lu.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, lu.jsxs)("div", {
                  className: Su()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === FR.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === FR.showWorldsInsteadOfCustomLobbies && (0, lu.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, lu.jsx)(Yu.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, lu.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, lu.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), zu("game:worlds")]
                    })]
                  }), !1 === FR.showWorldsInsteadOfCustomLobbies && (0, lu.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, lu.jsx)(Yu.c, {
                      name: "joystick"
                    }), (0, lu.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, lu.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), zu("homePage:customLobbies")]
                    })]
                  }), (0, lu.jsx)(Bu.P, {
                    onClick: () => {
                      fR("explore")
                    },
                    active: "explore" === aR,
                    children: zu("general:explore")
                  }), (0, lu.jsx)(Bu.P, {
                    onClick: () => {
                      fR("favourite")
                    },
                    active: "favourite" === aR,
                    children: zu("homePage:favouriteLobbies")
                  }), (0, lu.jsx)(Bu.P, {
                    onClick: () => {
                      fR("owned")
                    },
                    active: "owned" === aR,
                    children: zu("homePage:ownedLobbies")
                  })]
                }), (0, lu.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, lu.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, lu.jsx)(jR.d, {
                      label: "Create",
                      onClick: () => {
                        yR.NotificationProvider.showCustomPopup({
                          body: uu => (0, lu.jsx)(ER.CreateCustomLobby, {
                            gameNameWithVariation: KR.gameNameWithVariation,
                            close: uu
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === iR && (0, lu.jsx)(jR.i, {}), !1 === iR && oR.length > 0 && oR.map((uu => (0, lu.jsx)(jR.h, {
                      customLobby: uu,
                      favouriteLobbies: OR,
                      toggleLikeLobby: By,
                      showReport: ou.featureFlags.useSocialFeatures && "owned" !== aR
                    }, uu.name)))]
                  }), Ty]
                })]
              })
            })]
          }), !py && Ty]
        })
      })
    }

    function tR(uu) {
      let {
        variation: Ru,
        isSelected: yu,
        children: Eu
      } = uu;
      const Nu = BR.b[Ru],
        Vu = (0, Qu.j)(Ru, (0, Qu.k)(Nu)),
        ru = (0, Ku.g)(Vu),
        Bu = (0, mu.e)([(0, Qu.i)(Ru, (0, Qu.e)(Nu))]);
      return (0, lu.jsxs)(fu.LinkPreserveSearch, {
        to: (0, Fu.y)(Ru),
        replace: !0,
        className: Su()("GameInformationVariation", Ju.h, {
          SelectedGameInformationVariation: yu
        }),
        onClick: uu => {
          if (!(0, RR.c)(uu)) return;
          const yu = (0, ju.g)(Ru);
          Xu.i.setItem(yu, Ru)
        },
        onMouseEnter: Bu.start,
        onMouseLeave: Bu.cancel,
        onFocus: Bu.start,
        onBlur: Bu.cancel,
        style: (0, Ju.f)(ru),
        children: [(0, lu.jsx)(Ju.c, {
          image: ru
        }), Eu]
      })
    }
  },
  6291: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Wu
    });
    var Eu = yu(64),
      Ku = yu(1408),
      Qu = yu(1447),
      mu = yu(3307),
      Ju = yu(1107),
      Nu = yu(1300),
      Xu = yu(1325),
      Vu = yu(1043),
      ru = yu(1035),
      Bu = yu.n(ru),
      xu = yu(1079);

    function Su(uu) {
      let {
        info: Ru,
        className: yu
      } = uu;
      return (0, xu.jsxs)("div", {
        className: Bu()("GameApprovalInfoDetails", yu),
        children: [(0, xu.jsxs)("div", {
          className: Bu()("GameApprovalInfoSummary", Ru.overallPassed ? "Passed" : "Failed"),
          children: [(0, xu.jsx)(Vu.c, {
            name: Ru.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, xu.jsx)("span", {
            children: Ru.summary
          })]
        }), Ru.rows.length > 0 && (0, xu.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: Ru.rows.map((uu => (0, xu.jsxs)("div", {
            className: Bu()("GameApprovalInfoRow", uu.passed ? "Passed" : "Failed"),
            children: [(0, xu.jsx)(Vu.c, {
              name: uu.passed ? "check" : "xmark"
            }), (0, xu.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, xu.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: uu.label
              }), (0, xu.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: uu.valueText
              })]
            })]
          }, uu.label)))
        })]
      })
    }
    var pu = yu(1170),
      Tu = yu(1311);

    function Wu(uu) {
      Tu.NotificationProvider.showCustomPopup({
        body: () => (0, xu.jsx)(ju, {
          ...uu
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function ju(uu) {
      let {
        schematicId: Ru,
        canOverride: yu,
        onApprovalChanged: ru
      } = uu;
      const {
        t: Bu
      } = (0, pu.E)(), {
        userContext: Tu
      } = (0, Ju.d)(), Wu = (0, mu.b)(), [ju, Hu] = (0, Eu.useState)(null), [du, bu] = (0, Eu.useState)(null), [Cu, ku] = (0, Eu.useState)(!1), eu = (0, Eu.useCallback)((() => {
        bu(null), Qu.e.getGameApprovalInfo(Tu, Ru).then((uu => {
          Wu.current && Hu(uu)
        })).catch((uu => {
          console.error("Failed to get game approval info", uu), Wu.current && bu(Bu("studio:approvalLoadFailed"))
        }))
      }), [Tu, Ru, Wu, Bu]);
      (0, Eu.useEffect)((() => {
        eu()
      }), [eu]);
      const Au = uu => {
        Cu || (ku(!0), Qu.e.setGameApproval(Tu, Ru, uu).then((() => {
          null === ru || void 0 === ru || ru(), Wu.current && eu()
        })).catch((uu => {
          console.error("Failed to set game approval", uu)
        })).finally((() => {
          Wu.current && ku(!1)
        })))
      };
      return (0, xu.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, xu.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: Bu("studio:approvalTitle")
        }), !ju && !du && (0, xu.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, xu.jsx)(Nu.b, {})
        }), du && (0, xu.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: du
        }), ju && (0, xu.jsxs)(xu.Fragment, {
          children: [(0, xu.jsx)(Su, {
            info: ju
          }), yu && (0, xu.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== ju.manualOverride && (0, xu.jsx)(Xu.i, {
              tooltipInner: (0, xu.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, xu.jsxs)(Ku.l, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Au(!0)
                },
                disabled: Cu,
                children: [(0, xu.jsx)(Vu.c, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== ju.manualOverride && (0, xu.jsx)(Xu.i, {
              tooltipInner: (0, xu.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, xu.jsxs)(Ku.F, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Au(!1)
                },
                disabled: Cu,
                children: [(0, xu.jsx)(Vu.c, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== ju.manualOverride && (0, xu.jsx)(Xu.i, {
              tooltipInner: (0, xu.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, xu.jsxs)(Ku.e, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Au(null)
                },
                disabled: Cu,
                children: [(0, xu.jsx)(Vu.c, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  9103: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu
    });
    var Eu = yu(64),
      Ku = yu(3394);

    function Qu() {
      const [uu, Ru] = (0, Eu.useState)(!1);
      return (0, Eu.useLayoutEffect)((() => {
        let uu = !0;
        return (0, Ku.b)().then((() => {
          uu && Ru(!0)
        })), () => {
          uu = !1
        }
      }), []), uu
    }
  },
  8666: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(1289),
      Ku = yu(1199),
      Qu = yu(610);

    function mu(uu) {
      return uu = function(uu, Ru) {
        var yu;
        const Eu = new URLSearchParams(Ru),
          Ku = Eu.get("lobby"),
          Qu = Eu.get("vm"),
          mu = null !== (yu = Ku) && void 0 !== yu ? yu : uu.lobbyName,
          Ju = null !== Qu && void 0 !== Qu ? Qu : uu.directJoinVmUrl;
        if (mu === uu.lobbyName && Ju === uu.directJoinVmUrl) return uu;
        return {
          ...uu,
          lobbyName: mu,
          directJoinVmUrl: Ju
        }
      }(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), uu = function(uu) {
        if ((0, Qu.E)(uu.directJoinVmUrl)) return uu;
        const Ru = (0, Ku.X)(uu.directJoinVmUrl);
        null === Ru && (uu.directJoinVmUrl = void 0);
        return uu
      }(uu = function(uu) {
        if ((0, Qu.E)(uu.gameNameWithVariation)) return uu;
        return uu.gameNameWithVariation = (0, Eu.k)(uu.gameNameWithVariation), uu
      }(uu))
    }
  },
  8663: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      f: () => Ku
    });
    let Eu = !1;

    function Ku() {
      Eu = !0
    }

    function Qu() {
      return Eu
    }
  },
  36243: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      f: () => Eu
    });
    const Eu = "skyblockSkills",
      Ku = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);