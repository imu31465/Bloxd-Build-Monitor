export const id = 123;
export const ids = [123, 401];
export const modules = {
  36400: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => hj
    });
    var QB = zB(363),
      nB = zB(3606),
      dB = zB(3645),
      IB = zB(3637),
      NB = zB(3634),
      uB = zB(1240),
      UB = zB(41),
      aB = zB(1778),
      pB = zB(1388),
      rB = zB(1478),
      sB = zB(1091),
      JB = zB.n(sB),
      mB = zB(1710),
      yB = zB(62),
      kB = zB(83),
      GB = zB(2449),
      LB = zB(1359),
      gB = zB(1637),
      tB = zB(1169),
      SB = zB(3525),
      MB = zB(4668),
      EB = zB(3591),
      iB = zB(1952),
      qB = zB(3603),
      fB = zB(1791),
      oB = zB(1532),
      HB = zB(2224),
      DB = zB(1369),
      FB = zB(2711),
      YB = zB(5097),
      VB = zB(1148);
    const hB = 15e3,
      XB = 2500;

    function ZB(BB) {
      var jB;
      let {
        eventName: zB
      } = BB;
      const {
        t: QB
      } = (0, uB.D)(), nB = fB.i[zB], [dB, IB] = (0, yB.useState)((() => Date.now() >= nB.endsAt.getTime())), [NB, UB] = (0, yB.useState)("overall"), aB = function(BB, jB) {
        const {
          userContext: zB,
          isUserContextUpdating: QB
        } = (0, tB.d)(), nB = `${BB}:${jB}`, [dB, IB] = (0, yB.useState)({
          requestKey: nB,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, yB.useEffect)((() => {
          if (QB) return;
          let dB, NB = !1;
          const uB = async () => {
            if ("visible" === document.visibilityState) try {
              const QB = await oB.b.getGameEventLeaderboard(zB, {
                event: BB,
                scope: jB
              });
              NB || IB({
                requestKey: nB,
                leaderboard: {
                  status: "loaded",
                  leaderboard: QB
                }
              })
            } catch {
              NB || IB((BB => BB.requestKey === nB && "loaded" === BB.leaderboard.status ? BB : {
                requestKey: nB,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            NB || (dB = setTimeout(uB, hB))
          };
          return uB(), () => {
            NB = !0, clearTimeout(dB)
          }
        }), [BB, jB, nB, zB, QB]), dB.requestKey === nB ? dB.leaderboard : {
          status: "loading"
        }
      }(zB, NB), pB = function(BB) {
        const jB = (0, yB.useRef)(null),
          zB = (0, yB.useRef)(0),
          QB = (0, yB.useRef)(),
          [nB, dB] = (0, yB.useState)({});
        return (0, yB.useEffect)((() => {
          const nB = null === BB || void 0 === BB ? void 0 : BB.entries;
          if (!nB) return;
          const IB = new Map(nB.map((BB => [BB.player.name, BB.value]))),
            NB = jB.current;
          if (jB.current = IB, null === NB) return;
          const uB = {};
          for (const [BB, jB] of IB) {
            const QB = NB.get(BB);
            void 0 !== QB && jB > QB && (uB[BB] = {
              amount: jB - QB,
              key: zB.current++
            })
          }
          0 !== Object.keys(uB).length && (dB(uB), clearTimeout(QB.current), QB.current = setTimeout((() => {
            dB({})
          }), XB))
        }), [BB]), (0, yB.useEffect)((() => () => {
          clearTimeout(QB.current)
        }), []), nB
      }("loaded" === aB.status ? aB.leaderboard : null), rB = function(BB) {
        const [jB, zB] = (0, yB.useState)(null), QB = "loaded" === BB.status ? BB.leaderboard.goalProgress : void 0;
        return (0, yB.useEffect)((() => {
          QB && zB(QB)
        }), [QB]), jB
      }(aB), sB = HB.d[`profileEffect_${nB.prizePack}`];
      if (dB) return null;
      const mB = "loaded" === aB.status ? aB.leaderboard : null,
        kB = null !== (jB = null === mB || void 0 === mB ? void 0 : mB.entries) && void 0 !== jB ? jB : null,
        GB = null !== mB && void 0 !== mB && mB.own && null !== kB && !kB.some((BB => BB.isOwn)) ? mB.own : null;
      return (0, VB.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, VB.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, VB.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, VB.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, VB.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, VB.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), QB("gameEvents:live")]
              }), (0, VB.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [QB("gameEvents:endsIn"), (0, VB.jsx)(EB.e, {
                  toTime: nB.endsAt,
                  onReachEndOfCountdown: () => {
                    IB(!0)
                  }
                })]
              })]
            }), (0, VB.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: QB(nB.titleKey)
            }), (0, VB.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, VB.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [sB && (0, VB.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, VB.jsx)(sB, {})
                }), (0, VB.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, VB.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: QB("gameEvents:prize")
                  }), (0, VB.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: QB(nB.prizeNameKey)
                  })]
                })]
              }), (0, VB.jsx)(AB, {
                event: nB,
                progress: rB
              })]
            })]
          }), (0, VB.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, VB.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, VB.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: QB(nB.leaderboard.titleKey)
              }), (0, VB.jsx)(YB.e, {
                ariaLabel: QB("gameEvents:leaderboardScope"),
                options: fB.e.map((BB => ({
                  value: BB,
                  label: QB(`gameEvents:${BB}Scope`)
                }))),
                value: NB,
                onChange: UB
              })]
            }), "loading" === aB.status && (0, VB.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, VB.jsx)(DB.e, {})
            }), ("unavailable" === aB.status || "loaded" === aB.status && null === kB) && (0, VB.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: QB("gameEvents:leaderboardUnavailable")
            }), null !== kB && 0 === kB.length && (0, VB.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: QB("friends" === NB ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== kB && kB.length > 0 && (0, VB.jsx)("ol", {
              className: "GameEventPanelRows",
              children: kB.map((BB => {
                const jB = pB[BB.player.name];
                return (0, VB.jsxs)("li", {
                  className: JB()("GameEventPanelRow", {
                    GameEventPanelRowOwn: BB.isOwn,
                    GameEventPanelRowTop: BB.rank <= 3
                  }),
                  children: [(0, VB.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", BB.rank]
                  }), (0, VB.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, VB.jsx)(FB.g, {
                      playerSocialPreview: {
                        ...BB.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== jB && (0, VB.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", jB.amount.toLocaleString()]
                  }, jB.key), (0, VB.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: BB.value.toLocaleString()
                  })]
                }, BB.player.name)
              }))
            }), GB && (0, VB.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, VB.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", GB.rank.toLocaleString()]
              }), (0, VB.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: QB("gameEvents:yourPlace")
              }), (0, VB.jsx)("span", {
                className: "GameEventPanelScore",
                children: GB.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function AB(BB) {
      let {
        event: jB,
        progress: zB
      } = BB;
      const {
        t: QB
      } = (0, uB.D)(), nB = null !== zB && jB.prizeGoals.some(((BB, jB) => zB[jB] >= BB.target));
      return (0, VB.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, VB.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: QB(nB ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, VB.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: jB.prizeGoals.map(((BB, jB) => {
            const nB = null === zB ? null : Math.min(zB[jB], BB.target);
            return (0, VB.jsxs)(yB.Fragment, {
              children: [jB > 0 && (0, VB.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: QB("gameEvents:goalsOr")
              }), (0, VB.jsxs)("div", {
                className: JB()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: nB === BB.target
                }),
                children: [(0, VB.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: QB(BB.labelKey)
                }), (0, VB.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, VB.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== nB && void 0 !== nB ? nB : 0) / BB.target * 100 + "%"
                    }
                  }), null !== nB && (0, VB.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [nB.toLocaleString(), " / ", BB.target.toLocaleString()]
                  })]
                })]
              })]
            }, BB.board)
          }))
        })]
      })
    }
    var TB = zB(1570),
      PB = zB(1621),
      WB = zB(1082),
      eB = zB(781),
      lB = zB(3587);

    function wB(BB) {
      let {
        gameNameWithVariation: jB
      } = BB;
      const zB = (0, TB.u)(jB),
        [QB, nB] = (0, yB.useState)(null);
      if ((0, yB.useEffect)((() => {
          if (!zB) return;
          let BB = !0;
          return (0, PB.j)(zB).then((jB => {
            BB && nB(jB)
          })).catch((BB => {
            console.error(`Failed to load the page copy for ${zB.name}`, BB)
          })), () => {
            BB = !1
          }
        }), [zB]), !zB || !QB || QB.name !== zB.name) return null;
      const dB = (0, PB.h)(QB),
        IB = new Set((0, WB.d)((0, eB.i)()).map((BB => (0, TB.o)(BB)))),
        NB = QB.similarGames.filter((BB => IB.has((0, TB.o)(BB))));
      return (0, VB.jsx)("div", {
        className: "GamePageContent",
        children: (0, VB.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, VB.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, VB.jsx)("h2", {
              children: dB.whatIs
            }), QB.whatIs.map((BB => (0, VB.jsx)("p", {
              children: BB
            }, BB)))]
          }), (0, VB.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, VB.jsx)("h2", {
              children: dB.howToPlay
            }), QB.howToPlay.map((BB => (0, VB.jsx)("p", {
              children: BB
            }, BB)))]
          }), (0, VB.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, VB.jsx)("h2", {
              children: dB.features
            }), (0, VB.jsx)("ul", {
              children: QB.features.map((BB => (0, VB.jsx)("li", {
                children: BB
              }, BB)))
            })]
          }), (0, VB.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, VB.jsx)("h2", {
              children: dB.tips
            }), (0, VB.jsx)("ul", {
              children: QB.tips.map((BB => (0, VB.jsx)("li", {
                children: BB
              }, BB)))
            })]
          }), (0, VB.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, VB.jsx)("h2", {
              children: dB.faq
            }), QB.faq.map((BB => {
              let {
                question: jB,
                answer: zB
              } = BB;
              return (0, VB.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, VB.jsx)("h3", {
                  children: jB
                }), (0, VB.jsx)("p", {
                  children: zB
                })]
              }, jB)
            }))]
          }), NB.length > 0 && (0, VB.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, VB.jsx)("h2", {
              children: dB.similarGames
            }), (0, VB.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: NB.map((BB => (0, VB.jsx)("li", {
                children: (0, VB.jsx)(lB.f, {
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
    var xB = zB(1108),
      KB = zB(106),
      CB = zB(1173),
      cB = zB(34292),
      bB = zB(1679),
      vB = zB(1547),
      RB = zB(1543),
      OB = zB(1630),
      Bj = zB(1494),
      jj = zB(1381),
      zj = zB(36406),
      Qj = zB(1268),
      nj = zB(1067),
      dj = zB(376),
      Ij = zB(1073),
      Nj = zB(1562),
      uj = zB(8946),
      Uj = zB(28),
      aj = zB(2624),
      pj = zB(814),
      rj = zB(1263),
      sj = zB(6451),
      Jj = zB(3593);

    function mj(BB) {
      let {
        preview: jB,
        isBroken: zB
      } = BB;
      const QB = null === jB ? null : (0, dB.e)(jB, "small"),
        IB = (0, nB.f)(null !== QB && void 0 !== QB ? QB : dB.m);
      return null === jB ? (0, VB.jsx)("div", {
        className: JB()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: zB
        }),
        children: (0, VB.jsx)(xB.c, {
          name: zB ? "triangle-exclamation" : "star"
        })
      }) : (0, VB.jsx)("div", {
        className: JB()("FeaturedGamesPopupSlotThumbnail", NB.h),
        style: (0, NB.g)(IB),
        role: "img",
        "aria-label": jB.name,
        children: (0, VB.jsx)(NB.c, {
          image: IB
        })
      })
    }

    function yj(BB) {
      let {
        schematicId: jB,
        gameName: zB
      } = BB;
      const {
        userContext: nB
      } = (0, tB.d)(), dB = (0, Jj.d)(), [IB, NB] = (0, yB.useState)(null), [uB, UB] = (0, yB.useState)(null), [aB, pB] = (0, yB.useState)(!1), sB = (0, yB.useCallback)((() => {
        UB(null), oB.b.getFeaturedGames(nB).then((BB => {
          dB.current && NB(BB.slots)
        })).catch((BB => {
          console.error("Failed to get featured games", BB), dB.current && UB("Failed to load featured games")
        }))
      }), [nB, dB]);
      (0, yB.useEffect)((() => {
        sB()
      }), [sB]);
      const JB = (BB, jB) => {
        aB || (pB(!0), oB.b.setFeaturedGame(nB, BB, jB).then((() => {
          dB.current && sB()
        })).catch((BB => {
          console.error("Failed to set featured game", BB), dB.current && UB("Failed to update the featured slot")
        })).finally((() => {
          dB.current && pB(!1)
        })))
      };
      return (0, VB.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, VB.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !IB && !uB && (0, VB.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, VB.jsx)(DB.e, {})
        }), uB && (0, VB.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: uB
        }), IB && (0, VB.jsxs)(VB.Fragment, {
          children: [(0, VB.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: IB.map((BB => {
              const zB = BB.schematicId === jB,
                nB = null === BB.schematicId,
                {
                  categoryGroup: dB
                } = QB.H[BB.slotId];
              return (0, VB.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, VB.jsx)(mj, {
                  preview: BB.preview,
                  isBroken: !nB
                }), (0, VB.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, VB.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, QB.db)(dB), " \xb7 position", " ", (0, QB.K)(BB.slotId, QB.Ab) + 1, " of", " ", (0, QB.zb)(dB, QB.Ab)]
                  }), nB && (0, VB.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !nB && null !== BB.preview && (0, VB.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: BB.preview.name
                  }), !nB && null === BB.preview && (0, VB.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, VB.jsx)(xB.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, VB.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [nB && (0, VB.jsxs)(rB.r, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      JB(BB.slotId, jB)
                    },
                    disabled: aB,
                    children: [(0, VB.jsx)(xB.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !nB && !zB && (0, VB.jsxs)(rB.M, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      JB(BB.slotId, jB)
                    },
                    disabled: aB,
                    children: [(0, VB.jsx)(xB.c, {
                      name: "star"
                    }), " Replace"]
                  }), !nB && (0, VB.jsxs)(rB.G, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      JB(BB.slotId, null)
                    },
                    disabled: aB,
                    children: [(0, VB.jsx)(xB.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, BB.slotId)
            }))
          }), (0, VB.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var kj = zB(4757),
      Gj = zB(4703),
      Lj = zB(3551);
    const gj = 8,
      tj = 12;

    function Sj(BB) {
      let {
        customLobbies: jB,
        favouriteLobbies: zB,
        toggleLikeLobby: QB,
        showReport: nB
      } = BB;
      const [dB, IB] = (0, yB.useState)(gj);
      return (0, yB.useEffect)((() => {
        if (dB >= jB.length) return;
        let BB = !0;
        return (0, Lj.e)().then((() => {
          BB && IB(dB + tj)
        })), () => {
          BB = !1
        }
      }), [dB, jB.length]), (0, VB.jsx)(VB.Fragment, {
        children: jB.slice(0, dB).map((BB => (0, VB.jsx)(Gj.c, {
          customLobby: BB,
          favouriteLobbies: zB,
          toggleLikeLobby: QB,
          showReport: nB
        }, BB.name)))
      })
    }
    var Mj = zB(4709),
      Ej = zB(4717),
      ij = zB(4680),
      qj = zB(3671),
      fj = zB(8937),
      oj = zB(230);
    const Hj = {
      skyblock: [zB(36439).d]
    };
    var Dj = zB(658);
    const Fj = {
      listedVariations: null,
      backgroundImage: dB.m,
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

    function Yj(BB, jB) {
      const zB = pj.d[BB.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, dB.e)(BB, "large"),
        badges: [],
        category: BB.gameCategory,
        title: void 0 !== (null === zB || void 0 === zB ? void 0 : zB.title) ? jB(zB.title) : BB.name,
        variationTitle: null,
        description: void 0 !== (null === zB || void 0 === zB ? void 0 : zB.description) ? jB(zB.description) : BB.description,
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

    function Vj(BB) {
      var jB, zB, QB;
      return null !== (jB = null !== (zB = (0, oj.k)() ? function(BB) {
        for (const [jB, zB] of Object.entries(Hj)) {
          const QB = [jB, ...zB.map((BB => (0, dj.Pb)(jB, BB)))];
          if (QB.includes(BB)) return QB
        }
        return null
      }(BB) : null) && void 0 !== zB ? zB : null === (QB = pj.c[BB]) || void 0 === QB ? void 0 : QB.listedVariations) && void 0 !== jB ? jB : null
    }

    function hj() {
      const {
        gameNameWithVariation: BB
      } = (0, vB.w)();
      if ((0, yB.useEffect)(qj.s, []), BB && (0, Qj.l)(BB)) return (0, VB.jsx)(Xj, {
        urlId: BB
      }, BB);
      const jB = BB && (0, nj.n)(BB) ? BB : "firstParty";
      return (0, VB.jsx)(Zj, {}, jB)
    }

    function Xj(BB) {
      let {
        urlId: jB
      } = BB;
      const {
        userContext: zB,
        isUserContextUpdating: QB
      } = (0, tB.d)(), nB = (0, yB.useMemo)((() => (0, bB.j)(jB)), [jB]);
      (0, yB.useMemo)((() => {
        if (null === nB) return;
        const BB = CB.userContextManager.peekCurrentUserContext();
        (null !== BB ? oB.b.getGame(BB, nB.schematicId) : CB.userContextManager.getCurrentUserContext().then((BB => oB.b.getGame(BB, nB.schematicId)))).catch((BB => {
          console.error(`Failed to get the custom game ${nB.schematicId}`, BB), (0, bB.i)(jB)
        }))
      }), [nB, jB]);
      const [dB, IB] = (0, yB.useState)(null), NB = (0, cB.d)();
      (0, yB.useEffect)((() => {
        if (null !== nB || QB) return;
        let BB = !0;
        return oB.b.getGameByUrlId(zB, jB).then((zB => {
          BB && IB({
            urlId: jB,
            game: zB
          })
        })).catch((zB => {
          console.error(`Failed to find the custom game with urlId ${jB}`, zB), BB && (0, RB.navigateToHomePage)()
        })), () => {
          BB = !1
        }
      }), [jB, nB, QB, zB]);
      const uB = null !== nB && void 0 !== nB ? nB : (null === dB || void 0 === dB ? void 0 : dB.urlId) === jB ? dB.game : null;
      return null === uB ? (0, VB.jsx)(DB.e, {}) : NB ? (0, VB.jsx)(Zj, {
        gameNameWithVariation: (0, nj.y)(uB.schematicId),
        knownCustomGame: uB
      }, uB.schematicId) : null
    }

    function Zj(BB) {
      var jB, zB, IB, sB, fB, HB, DB, YB;
      let {
        gameNameWithVariation: hB,
        knownCustomGame: XB = null
      } = BB;
      const {
        t: AB
      } = (0, uB.D)();
      (0, aj.h)();
      const PB = (0, aj.m)(),
        {
          userContext: WB,
          isUserContextUpdating: eB
        } = (0, tB.d)(),
        lB = (0, ij.f)(),
        CB = (0, RB.useNavigatePreserveSearch)(),
        cB = (0, vB.w)(),
        bB = (0, yB.useMemo)((() => hB ? {
          gameNameWithVariation: hB
        } : cB), [hB, cB]),
        Bj = (0, uj.b)(bB),
        Qj = (0, yB.useMemo)((() => {
          const BB = function(BB) {
            var jB, zB;
            const QB = Vj(BB);
            if (!QB || 0 === QB.length || QB.includes(BB)) return BB;
            const nB = UB.j.getItem((0, GB.e)(BB));
            if (nB && QB.includes(nB)) return nB;
            return null !== (jB = null === (zB = pj.c[BB]) || void 0 === zB ? void 0 : zB.defaultListedVariation) && void 0 !== jB ? jB : QB[0]
          }(Bj.gameNameWithVariation);
          return BB === Bj.gameNameWithVariation ? Bj : {
            ...Bj,
            gameNameWithVariation: BB
          }
        }), [Bj]);
      (0, yB.useEffect)((() => {
        const BB = Bj.gameNameWithVariation;
        Qj.gameNameWithVariation !== BB && BB !== (0, dj.Sb)(BB) && CB((0, TB.p)(Qj.gameNameWithVariation), {
          replace: !0
        })
      }), [Qj.gameNameWithVariation, Bj.gameNameWithVariation, CB]);
      const [Jj, mj] = (0, yB.useState)(""), Lj = yB.useRef(null), [gj, tj] = (0, yB.useState)(), qj = (0, nj.n)(Qj.gameNameWithVariation), oj = (0, yB.useMemo)((() => qj ? null : function(BB, jB, zB) {
        var QB, nB;
        const IB = pj.c[BB];
        return (0, Dj.I)(IB) ? null : {
          listedVariations: Vj(BB),
          backgroundImage: (0, dB.i)(BB, (0, dB.c)(IB)),
          badges: (0, aB.filterBadges)(IB.badges),
          category: IB.type,
          title: zB(IB.title),
          variationTitle: IB.variationTitle ? zB(IB.variationTitle) : null,
          description: zB(IB.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== jB ? null !== (QB = jB[BB]) && void 0 !== QB ? QB : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: IB.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: IB.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (nB = IB.canCreateCustomLobbies) || void 0 === nB || nB,
          countdownInformation: (0, GB.d)(BB)
        }
      }(Qj.gameNameWithVariation, PB, AB)), [qj, Qj.gameNameWithVariation, PB, AB]), [Hj, hj] = (0, yB.useState)(!1), [Xj, Zj] = (0, yB.useState)((() => XB ? Yj(XB, AB) : Fj)), Tj = null !== oj && void 0 !== oj ? oj : Xj, [Pj] = (0, yB.useState)(Tj === Fj), Wj = (0, nB.f)(Tj.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: ej,
        recentlyPlayedCustomLobbies: lj
      } = (0, yB.useMemo)((() => function(BB, jB, zB, QB) {
        var nB;
        const dB = BB => {
            const zB = (0, nj.q)(BB),
              QB = jB.find((jB => "custom" === jB.type ? jB.schematicId === zB : jB.gameNameWithVariation === BB));
            return QB ? [...QB.recentLobbies] : []
          },
          IB = (0, aB.getRecentGameNameWithVariationLobbiesKey)(BB),
          NB = null !== (nB = UB.j.getItem(IB)) && void 0 !== nB ? nB : [],
          uB = [...dB(BB), ...NB],
          pB = [];
        for (const UB of uB)(0, rj.E)(UB) && !pB.includes(UB) && pB.push(UB);
        let rB = uB;
        if (zB) {
          const BB = dB("classic_worlds"),
            jB = uB.filter((jB => !BB.includes(jB)));
          rB = [...BB, ...jB]
        }
        const sB = [],
          JB = !1 === QB ? [] : rB;
        for (const UB of JB)(0, rj.E)(UB) || sB.includes(UB) || sB.push(UB);
        return {
          recentlyPlayedPublicLobbies: pB,
          recentlyPlayedCustomLobbies: sB
        }
      }(Qj.gameNameWithVariation, lB, Tj.showWorldsInsteadOfCustomLobbies, Tj.canCreateCustomLobbies)), [Qj.gameNameWithVariation, lB, Tj.showWorldsInsteadOfCustomLobbies, Tj.canCreateCustomLobbies]), [wj, xj] = (0, yB.useState)(!0), [Kj, Cj] = (0, yB.useState)([]), [cj, bj] = (0, yB.useState)(null), [vj, Rj] = (0, yB.useState)("explore"), Oj = (0, yB.useRef)(!1), Bz = (0, yB.useCallback)((BB => {
        (0, kB.unstable_batchedUpdates)((() => {
          tj(BB), Zj((jB => ({
            ...Yj(BB, AB),
            isFavourite: jB.isFavourite
          })))
        }))
      }), [AB]);
      (0, yB.useEffect)((() => {
        null === Uj.c.get("gameEntrySource") && (0, Uj.i)("gameInformationPageDirect")
      }), []);
      const jz = (0, yB.useRef)(null);
      (0, yB.useEffect)((() => {
        const BB = BB => {
            jz.current = BB.target instanceof Element ? BB.target.closest("a, button") : null
          },
          jB = BB => {
            "Tab" === BB.key && (jz.current = null)
          };
        return document.addEventListener("pointerdown", BB, !0), document.addEventListener("keydown", jB, !0), () => {
          document.removeEventListener("pointerdown", BB, !0), document.removeEventListener("keydown", jB, !0)
        }
      }), []), (0, SB.c)("Enter", (BB => {
        const jB = BB.target instanceof Element ? BB.target : null;
        if (BB.defaultPrevented || null !== jB && void 0 !== jB && jB.closest("input, textarea, select")) return;
        const zB = null === jB || void 0 === jB ? void 0 : jB.closest("a, button");
        zB && zB !== jz.current || (BB.preventDefault(), az())
      })), (0, MB.b)(RB.navigateToHomePage);
      const zz = ej.length > 0 || lj.length > 0,
        Qz = !Tj.useRejoinLastLobbyButton || 0 === ej.length,
        nz = qj && null === Tj.ownerSocialPreviewWithoutLocation,
        dz = WB.getPlayerName() === (null === gj || void 0 === gj || null === (jB = gj.owner) || void 0 === jB ? void 0 : jB.name),
        Iz = null !== (zB = null === (IB = Tj.badges.find((BB => "event" === BB.type))) || void 0 === IB ? void 0 : IB.event) && void 0 !== zB ? zB : null,
        Nz = Qz ? rB.m : rB.f,
        uz = (0, VB.jsx)(pB.g, {
          tooltipInner: (0, VB.jsx)("div", {
            children: AB("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, VB.jsx)(Nz, {
            className: "GameInformationButton",
            padDefaultFocus: Qz,
            showPress: !0,
            onClick: () => {
              az()
            },
            children: (0, VB.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Qz && (0, VB.jsxs)(VB.Fragment, {
                children: [(0, VB.jsx)(xB.c, {
                  name: "play"
                }), " "]
              }), AB("homePage:quickPlay")]
            })
          })
        });
      (0, yB.useEffect)((() => {
        if (!qj || eB) return;
        let BB = !0;
        const jB = (0, nj.q)(Qj.gameNameWithVariation);
        return oB.b.getGame(WB, jB).then((jB => {
          BB && Bz(jB)
        })).catch((jB => {
          console.error("Failed to get Custom Game information", jB), BB && (0, RB.navigateToHomePage)()
        })), oB.b.getFavouriteGames(WB).then((zB => {
          BB && Zj((BB => ({
            ...BB,
            isFavourite: zB.includes(jB)
          })))
        })).catch((jB => {
          console.error("Failed to get favourite games", jB), BB && hj(!0)
        })), () => {
          BB = !1
        }
      }), [qj, eB, Qj.gameNameWithVariation, Bz, WB]);
      const Uz = !qj && null === oj;

      function az(BB) {
        (0, fj.f)(), CB((0, LB.e)(Qj.gameNameWithVariation, BB))
      }(0, yB.useEffect)((() => {
        Uz && (0, RB.navigateToHomePage)()
      }), [Uz]), (0, yB.useEffect)((() => {
        if (!1 === Tj.canCreateCustomLobbies) return;
        let BB = !0;
        return null !== Tj.showWorldsInsteadOfCustomLobbies && !1 === eB && (xj(!0), oB.b.getFavouriteLobbies(WB).then((BB => {
          bj(BB)
        })), oB.b.getOpenCustomLobbies(WB, {
          gameNameWithVariation: Tj.showWorldsInsteadOfCustomLobbies ? "classic" : Qj.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === vj,
          onlyFavouriteLobbies: "favourite" === vj
        }).then((jB => {
          BB && (0, kB.unstable_batchedUpdates)((() => {
            Cj(jB), xj(!1)
          }))
        })).catch((jB => {
          console.error("Failed to get open custom lobbies", jB), BB && xj(!1)
        }))), () => {
          BB = !1
        }
      }), [eB, Qj, vj, Tj.showWorldsInsteadOfCustomLobbies, Tj.canCreateCustomLobbies, WB]);
      const pz = (0, yB.useCallback)((async BB => {
          try {
            if (!cj) return;
            cj.includes(BB) ? (oB.b.unfavouriteLobby(WB, BB), bj(cj.filter((jB => jB !== BB)))) : (oB.b.favouriteLobby(WB, BB).catch((BB => {
              console.error("Failed to favourite lobby", BB)
            })), bj([...cj, BB]))
          } catch (jB) {
            console.error("Failed to like lobby", jB)
          }
        }), [WB, cj]),
        rz = (null === gj || void 0 === gj ? void 0 : gj.schematicId) === (0, nj.q)(Bj.gameNameWithVariation) ? gj : null,
        sz = rz && (0, TB.y)(Bj.gameNameWithVariation, (BB => AB(BB)), rz);
      (0, OB.d)(rz && (0, TB.p)(Bj.gameNameWithVariation, rz));
      const Jz = KB.featureFlags.canUseCustomLobbies && !0 === Tj.canCreateCustomLobbies,
        mz = (0, VB.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, VB.jsx)(wB, {
            gameNameWithVariation: Qj.gameNameWithVariation
          })
        });
      return (0, VB.jsx)(VB.Fragment, {
        children: (0, VB.jsxs)("article", {
          className: JB()("GameInformation", {
            GameInformationFadeIn: Pj,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (sB = Tj.countdownInformation) || void 0 === sB ? void 0 : sB.type)
          }),
          children: [sz && (0, VB.jsx)(gB.b, {
            meta: sz
          }), (0, VB.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, VB.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, VB.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, VB.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, VB.jsx)("div", {
                  className: JB()("GameInformationTopBackgroundImage", NB.h),
                  style: (0, NB.g)(Wj),
                  children: (0, VB.jsx)(NB.c, {
                    image: Wj
                  })
                })]
              }), (0, VB.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, VB.jsx)(kj.b, {}), (0, VB.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, VB.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, VB.jsxs)("div", {
                      className: JB()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: nz
                      }),
                      children: [Tj.badges.map((BB => (0, VB.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${BB.type}`,
                        children: (0, VB.jsx)(qB.c, {
                          badge: BB
                        })
                      }, BB.type))), qj && (0, VB.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, VB.jsx)(iB.e, {
                          text: (0, QB.Z)({
                            type: "playerCrafted"
                          })
                        })
                      }), Tj.category && (0, VB.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, VB.jsx)(iB.e, {
                          text: [{
                            str: (0, QB.$)(Tj.category).toUpperCase()
                          }]
                        })
                      }), null !== Tj.ccu && (0, VB.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, VB.jsx)(xB.c, {
                          name: "user"
                        }), (0, rj.J)(Tj.ccu), " online"]
                      }), null !== Tj.ownerSocialPreviewWithoutLocation && (0, VB.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, VB.jsx)("span", {
                          children: "Made by"
                        }), (0, VB.jsx)(FB.g, {
                          playerSocialPreview: {
                            ...Tj.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), nz && (0, VB.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, VB.jsx)("span", {
                          children: "Made by"
                        }), (0, VB.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== Tj.favourites && (null !== Tj.isFavourite || qj && !Hj) && (0, VB.jsx)(rB.t, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== Oj.current && (Oj.current = !0, null !== Tj.isFavourite)) {
                              const BB = (0, nj.q)(Qj.gameNameWithVariation);
                              let jB;
                              Tj.isFavourite ? (jB = -1, oB.b.unfavouriteGame(WB, BB).catch((BB => {
                                console.error("Failed to get unfavourite game", BB)
                              })).finally((() => {
                                Oj.current = !1
                              }))) : (jB = 1, oB.b.favouriteGame(WB, BB).catch((BB => {
                                console.error("Failed to get favourite game", BB)
                              })).finally((() => {
                                Oj.current = !1
                              }))), Zj((BB => ({
                                ...BB,
                                isFavourite: !BB.isFavourite
                              }))), Zj((BB => ({
                                ...BB,
                                favourites: BB.favourites + jB
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (fB = Tj.isFavourite) && void 0 !== fB && fB,
                        disabled: null === Tj.isFavourite,
                        className: JB()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === Tj.isFavourite
                        })
                      }, null === Tj.isFavourite ? "pending" : "known"), qj && !nz && KB.featureFlags.useSocialFeatures && !dz && (0, VB.jsx)(Mj.c, {
                        targetType: "customGame",
                        targetId: (0, nj.q)(Qj.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (WB.playerHasRank("developer") || WB.playerHasRank("admin") && dz) && (0, VB.jsxs)(rB.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          CB((0, Nj.s)((0, Ij.h)(Qj.gameNameWithVariation, !0)))
                        },
                        children: [(0, VB.jsx)(xB.c, {
                          name: "star-christmas"
                        }), " ", AB("studio:viewInStudio")]
                      }), qj && WB.playerHasRank("developer") && (0, VB.jsxs)(rB.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, sj.e)({
                            schematicId: (0, nj.q)(Qj.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, VB.jsx)(xB.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), qj && WB.playerHasRank("developer") && (0, VB.jsxs)(rB.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          jj.NotificationProvider.showCustomPopup({
                            body: () => (0, VB.jsx)(yj, {
                              schematicId: (0, nj.q)(Qj.gameNameWithVariation),
                              gameName: Tj.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, VB.jsx)(xB.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (HB = Tj.countdownInformation) || void 0 === HB ? void 0 : HB.type) && (0, VB.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, VB.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, VB.jsx)(EB.e, {
                            toTime: Tj.countdownInformation.countdownToTime
                          })]
                        }), (0, VB.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: Tj.countdownInformation.previewText
                        })]
                      })]
                    }, nz ? "pending" : "shown"), (0, VB.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, VB.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, VB.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [Tj.title, " ", Tj.variationTitle && (null === (DB = pj.c[Qj.gameNameWithVariation]) || void 0 === DB ? void 0 : DB.variationThumbnailUseBigRatio) && (0, VB.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: Tj.variationTitle
                          })]
                        })
                      }), Tj.listedVariations && Tj.listedVariations.length > 0 && (0, VB.jsx)("div", {
                        className: JB()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (YB = pj.c[Qj.gameNameWithVariation]) || void 0 === YB ? void 0 : YB.variationThumbnailUseBigRatio
                        }),
                        children: Tj.listedVariations.map((BB => {
                          var jB, zB;
                          return (0, VB.jsxs)(Aj, {
                            variation: BB,
                            isSelected: Qj.gameNameWithVariation === BB,
                            children: [null !== PB && (0, VB.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, VB.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, VB.jsx)(xB.c, {
                                  name: "user"
                                }), " ", (0, rj.J)(null !== (jB = PB[BB]) && void 0 !== jB ? jB : 0)]
                              })
                            }), (0, VB.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: AB(null !== (zB = pj.c[BB].variationTitle) && void 0 !== zB ? zB : pj.c[BB].title)
                            }), (0, VB.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, aB.filterBadges)(pj.c[BB].badges).map((BB => (0, VB.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + BB.type,
                                children: (0, VB.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, VB.jsx)(qB.c, {
                                    badge: BB
                                  })
                                })
                              }, BB.type)))
                            })]
                          }, BB)
                        }))
                      })]
                    }), Tj.description && (0, VB.jsx)("p", {
                      className: "GameInformationDescription",
                      children: Tj.description
                    })]
                  }), (0, VB.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, VB.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Qz && (0, VB.jsx)(pB.g, {
                        tooltipInner: (0, VB.jsx)("div", {
                          children: AB("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, VB.jsx)(rB.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            az(ej[0])
                          },
                          children: (0, VB.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, VB.jsx)(xB.c, {
                              name: "play"
                            }), " ", AB("homePage:rejoinLobbyNumber", {
                              number: ej[0]
                            })]
                          })
                        })
                      }), Qz && uz]
                    }), (0, VB.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Qz && uz, (0, VB.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, VB.jsx)(xB.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, VB.jsx)(mB.d, {
                          className: "JoinLobbyInput",
                          placeholderText: AB("homePage:lobbyName"),
                          maxLength: rj.H,
                          domRef: Lj,
                          onValueChange: BB => {
                            BB = (0, rj.db)(BB), mj(BB)
                          },
                          onEnter: () => {
                            0 === Jj.length ? az(ej[0]) : az(Jj)
                          }
                        }), (0, VB.jsx)(rB.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === Jj.length ? az(ej[0]) : az(Jj)
                          },
                          children: AB("general:join")
                        })]
                      })]
                    }), (0, VB.jsxs)("section", {
                      className: JB()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !zz
                      }),
                      children: [(0, VB.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, VB.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, VB.jsx)(xB.c, {
                            name: "clock-rotate-left"
                          }), zz && (0, VB.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: AB("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, VB.jsx)(Ej.e, {
                        lobbyGroups: [ej, lj],
                        onLobbyClick: BB => {
                          az(BB)
                        },
                        keyPrefix: Qj.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== Iz && (0, VB.jsx)(ZB, {
                eventName: Iz
              })]
            }), Jz && (0, VB.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, VB.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, VB.jsxs)("div", {
                  className: JB()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === Tj.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === Tj.showWorldsInsteadOfCustomLobbies && (0, VB.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, VB.jsx)(xB.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, VB.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, VB.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), AB("game:worlds")]
                    })]
                  }), !1 === Tj.showWorldsInsteadOfCustomLobbies && (0, VB.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, VB.jsx)(xB.c, {
                      name: "joystick"
                    }), (0, VB.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, VB.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), AB("homePage:customLobbies")]
                    })]
                  }), (0, VB.jsx)(rB.M, {
                    onClick: () => {
                      Rj("explore")
                    },
                    active: "explore" === vj,
                    children: AB("general:explore")
                  }), (0, VB.jsx)(rB.M, {
                    onClick: () => {
                      Rj("favourite")
                    },
                    active: "favourite" === vj,
                    children: AB("homePage:favouriteLobbies")
                  }), (0, VB.jsx)(rB.M, {
                    onClick: () => {
                      Rj("owned")
                    },
                    active: "owned" === vj,
                    children: AB("homePage:ownedLobbies")
                  })]
                }), (0, VB.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, VB.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, VB.jsx)(Gj.b, {
                      label: "Create",
                      onClick: () => {
                        jj.NotificationProvider.showCustomPopup({
                          body: BB => (0, VB.jsx)(zj.CreateCustomLobby, {
                            gameNameWithVariation: Qj.gameNameWithVariation,
                            close: BB
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === wj && (0, VB.jsx)(Gj.e, {}), !1 === wj && (0, VB.jsx)(Sj, {
                      customLobbies: Kj,
                      favouriteLobbies: cj,
                      toggleLikeLobby: pz,
                      showReport: KB.featureFlags.useSocialFeatures && "owned" !== vj
                    })]
                  }), mz]
                })]
              })
            })]
          }), !Jz && mz]
        })
      })
    }

    function Aj(BB) {
      let {
        variation: jB,
        isSelected: zB,
        children: QB
      } = BB;
      const uB = pj.c[jB],
        aB = (0, dB.i)(jB, (0, dB.k)(uB)),
        pB = (0, nB.f)(aB),
        rB = (0, IB.f)([(0, dB.f)(jB, (0, dB.c)(uB))]);
      return (0, VB.jsxs)(RB.LinkPreserveSearch, {
        to: (0, TB.p)(jB),
        replace: !0,
        className: JB()("GameInformationVariation", NB.h, {
          SelectedGameInformationVariation: zB
        }),
        onClick: BB => {
          if (!(0, Bj.d)(BB)) return;
          const zB = (0, GB.e)(jB);
          UB.j.setItem(zB, jB)
        },
        onMouseEnter: rB.start,
        onMouseLeave: rB.cancel,
        onFocus: rB.start,
        onBlur: rB.cancel,
        style: (0, NB.g)(pB),
        children: [(0, VB.jsx)(NB.c, {
          image: pB
        }), QB]
      })
    }
  },
  6451: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => GB
    });
    var QB = zB(62),
      nB = zB(1478),
      dB = zB(1532),
      IB = zB(3593),
      NB = zB(1169),
      uB = zB(1369),
      UB = zB(1388),
      aB = zB(1108),
      pB = zB(1091),
      rB = zB.n(pB),
      sB = zB(6446),
      JB = zB(1148);

    function mB(BB) {
      let {
        info: jB,
        className: zB
      } = BB;
      const {
        statusText: QB,
        rowText: nB
      } = (0, sB.f)();
      return (0, JB.jsxs)("div", {
        className: rB()("GameApprovalInfoDetails", zB),
        children: [(0, JB.jsxs)("div", {
          className: rB()("GameApprovalInfoSummary", jB.overallPassed ? "Passed" : "Failed"),
          children: [(0, JB.jsx)(aB.c, {
            name: jB.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, JB.jsx)("span", {
            children: QB(jB.status)
          })]
        }), jB.rows.length > 0 && (0, JB.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: jB.rows.map((BB => {
            const {
              label: jB,
              value: zB
            } = nB(BB);
            return (0, JB.jsxs)("div", {
              className: rB()("GameApprovalInfoRow", BB.passed ? "Passed" : "Failed"),
              children: [(0, JB.jsx)(aB.c, {
                name: BB.passed ? "check" : "xmark"
              }), (0, JB.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, JB.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: jB
                }), null !== zB && (0, JB.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: zB
                })]
              })]
            }, BB.kind)
          }))
        })]
      })
    }
    var yB = zB(1240),
      kB = zB(1381);

    function GB(BB) {
      kB.NotificationProvider.showCustomPopup({
        body: () => (0, JB.jsx)(LB, {
          ...BB
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function LB(BB) {
      let {
        schematicId: jB,
        canOverride: zB,
        onApprovalChanged: pB
      } = BB;
      const {
        t: rB
      } = (0, yB.D)(), {
        userContext: sB
      } = (0, NB.d)(), kB = (0, IB.d)(), [GB, LB] = (0, QB.useState)(null), [gB, tB] = (0, QB.useState)(null), [SB, MB] = (0, QB.useState)(!1), EB = (0, QB.useCallback)((() => {
        tB(null), dB.b.getGameApprovalInfo(sB, jB).then((BB => {
          kB.current && LB(BB)
        })).catch((BB => {
          console.error("Failed to get game approval info", BB), kB.current && tB(rB("studio:approvalLoadFailed"))
        }))
      }), [sB, jB, kB, rB]);
      (0, QB.useEffect)((() => {
        EB()
      }), [EB]);
      const iB = BB => {
        SB || (MB(!0), dB.b.setGameApproval(sB, jB, BB).then((() => {
          null === pB || void 0 === pB || pB(), kB.current && EB()
        })).catch((BB => {
          console.error("Failed to set game approval", BB)
        })).finally((() => {
          kB.current && MB(!1)
        })))
      };
      return (0, JB.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, JB.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: rB("studio:approvalTitle")
        }), !GB && !gB && (0, JB.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, JB.jsx)(uB.e, {})
        }), gB && (0, JB.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: gB
        }), GB && (0, JB.jsxs)(JB.Fragment, {
          children: [(0, JB.jsx)(mB, {
            info: GB
          }), zB && (0, JB.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== GB.manualOverride && (0, JB.jsx)(UB.g, {
              tooltipInner: (0, JB.jsx)("div", {
                children: rB("studio:approvalApproveTooltip")
              }),
              children: (0, JB.jsxs)(nB.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  iB(!0)
                },
                disabled: SB,
                children: [(0, JB.jsx)(aB.c, {
                  name: "check"
                }), " ", rB("studio:approvalApprove")]
              })
            }), !1 !== GB.manualOverride && (0, JB.jsx)(UB.g, {
              tooltipInner: (0, JB.jsx)("div", {
                children: rB("studio:approvalDenyTooltip")
              }),
              children: (0, JB.jsxs)(nB.G, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  iB(!1)
                },
                disabled: SB,
                children: [(0, JB.jsx)(aB.c, {
                  name: "xmark"
                }), " ", rB("studio:approvalDeny")]
              })
            }), null !== GB.manualOverride && (0, JB.jsx)(UB.g, {
              tooltipInner: (0, JB.jsx)("div", {
                children: rB("studio:approvalClearOverrideTooltip")
              }),
              children: (0, JB.jsxs)(nB.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  iB(null)
                },
                disabled: SB,
                children: [(0, JB.jsx)(aB.c, {
                  name: "arrows-rotate"
                }), " ", rB("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6446: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      f: () => IB
    });
    var QB = zB(376),
      nB = zB(1240);
    const dB = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function IB() {
      const {
        t: BB,
        selectedLanguage: jB
      } = (0, nB.D)();
      return {
        statusText: jB => BB(dB[jB]),
        rowText: zB => {
          const dB = (BB, zB) => (0, QB.$)((0, nB.n)(jB.code, BB), 0, zB);
          switch (zB.kind) {
            case "ownerAccountAge": {
              const jB = zB.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: BB("studio:approvalAccountAgeLabel"),
                value: BB(jB, {
                  age: dB(jB, zB.accountAgeMs),
                  days: zB.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: BB("studio:approvalSinceUnbannedLabel"), value: BB("studio:approvalSinceUnbannedValue", {
                  time: dB("studio:approvalSinceUnbannedValue", zB.sinceMs),
                  days: zB.minDays
                })
              };
            case "reportHold": {
              const {
                detail: jB
              } = zB;
              if (null === jB) return {
                label: BB("studio:approvalUnderInvestigation"),
                value: null
              };
              const QB = jB.weightedReporters.toFixed(1),
                nB = jB.threshold.toFixed(1),
                IB = BB("studio:approvalReportHoldLabel", {
                  hours: jB.windowHours
                });
              if (null === jB.heldUntil) return {
                label: IB,
                value: BB("studio:approvalReportHoldValue", {
                  weightedReporters: QB,
                  threshold: nB
                })
              };
              const NB = "studio:approvalReportHoldValueHeld";
              return {
                label: IB,
                value: BB(NB, {
                  weightedReporters: QB,
                  threshold: nB,
                  time: dB(NB, jB.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function NB(BB) {
      return null === BB.manualOverride && BB.rows.some((BB => "reportHold" === BB.kind && !BB.passed))
    }
  },
  34292: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB
    });
    var QB = zB(62),
      nB = zB(3551);

    function dB() {
      const [BB, jB] = (0, QB.useState)(!1);
      return (0, QB.useLayoutEffect)((() => {
        let BB = !0;
        return (0, nB.e)().then((() => {
          BB && jB(!0)
        })), () => {
          BB = !1
        }
      }), []), BB
    }
  },
  8946: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(1359),
      nB = zB(1263),
      dB = zB(658);

    function IB(BB) {
      return BB = function(BB, jB) {
        var zB;
        const QB = new URLSearchParams(jB),
          nB = QB.get("lobby"),
          dB = QB.get("vm"),
          IB = null !== (zB = nB) && void 0 !== zB ? zB : BB.lobbyName,
          NB = null !== dB && void 0 !== dB ? dB : BB.directJoinVmUrl;
        if (IB === BB.lobbyName && NB === BB.directJoinVmUrl) return BB;
        return {
          ...BB,
          lobbyName: IB,
          directJoinVmUrl: NB
        }
      }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), BB = function(BB) {
        if ((0, dB.I)(BB.directJoinVmUrl)) return BB;
        const jB = (0, nB.O)(BB.directJoinVmUrl);
        null === jB && (BB.directJoinVmUrl = void 0);
        return BB
      }(BB = function(BB) {
        if ((0, dB.I)(BB.gameNameWithVariation)) return BB;
        return BB.gameNameWithVariation = (0, QB.o)(BB.gameNameWithVariation), BB
      }(BB))
    }
  },
  8937: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      f: () => nB
    });
    let QB = !1;

    function nB() {
      QB = !0
    }

    function dB() {
      return QB
    }
  },
  36439: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      e: () => QB
    });
    const QB = "skyblockSkills",
      nB = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);