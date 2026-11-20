export const id = 115;
export const ids = [115, 390];
export const modules = {
  36130: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => Ek
    });
    var lT = cT(328),
      MT = cT(3449),
      KT = cT(3491),
      OT = cT(3485),
      yT = cT(3482),
      fT = cT(1195),
      xT = cT(47),
      IT = cT(1741),
      AT = cT(1379),
      CT = cT(1470),
      jT = cT(1046),
      vT = cT.n(jT),
      tT = cT(1692),
      hT = cT(71),
      NT = cT(94),
      QT = cT(2401),
      ST = cT(1333),
      DT = cT(1637),
      aT = cT(1130),
      FT = cT(3352),
      rT = cT(4537),
      PT = cT(3428),
      wT = cT(1921),
      mT = cT(3446),
      bT = cT(1749),
      zT = cT(1518),
      JT = cT(2181),
      oT = cT(1348),
      HT = cT(2600),
      eT = cT(4968),
      GT = cT(1099);
    const VT = 15e3,
      ET = 2500;

    function ZT(TT) {
      var kT;
      let {
        eventName: cT
      } = TT;
      const {
        t: lT
      } = (0, fT.B)(), MT = bT.h[cT], [KT, OT] = (0, hT.useState)((() => Date.now() >= MT.endsAt.getTime())), [yT, xT] = (0, hT.useState)("overall"), IT = function(TT, kT) {
        const {
          userContext: cT,
          isUserContextUpdating: lT
        } = (0, aT.b)(), MT = `${TT}:${kT}`, [KT, OT] = (0, hT.useState)({
          requestKey: MT,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, hT.useEffect)((() => {
          if (lT) return;
          let KT, yT = !1;
          const fT = async () => {
            if ("visible" === document.visibilityState) try {
              const lT = await zT.d.getGameEventLeaderboard(cT, {
                event: TT,
                scope: kT
              });
              yT || OT({
                requestKey: MT,
                leaderboard: {
                  status: "loaded",
                  leaderboard: lT
                }
              })
            } catch {
              yT || OT((TT => TT.requestKey === MT && "loaded" === TT.leaderboard.status ? TT : {
                requestKey: MT,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            yT || (KT = setTimeout(fT, VT))
          };
          return fT(), () => {
            yT = !0, clearTimeout(KT)
          }
        }), [TT, kT, MT, cT, lT]), KT.requestKey === MT ? KT.leaderboard : {
          status: "loading"
        }
      }(cT, yT), AT = function(TT) {
        const kT = (0, hT.useRef)(null),
          cT = (0, hT.useRef)(0),
          lT = (0, hT.useRef)(),
          [MT, KT] = (0, hT.useState)({});
        return (0, hT.useEffect)((() => {
          const MT = null === TT || void 0 === TT ? void 0 : TT.entries;
          if (!MT) return;
          const OT = new Map(MT.map((TT => [TT.player.name, TT.value]))),
            yT = kT.current;
          if (kT.current = OT, null === yT) return;
          const fT = {};
          for (const [TT, kT] of OT) {
            const lT = yT.get(TT);
            void 0 !== lT && kT > lT && (fT[TT] = {
              amount: kT - lT,
              key: cT.current++
            })
          }
          0 !== Object.keys(fT).length && (KT(fT), clearTimeout(lT.current), lT.current = setTimeout((() => {
            KT({})
          }), ET))
        }), [TT]), (0, hT.useEffect)((() => () => {
          clearTimeout(lT.current)
        }), []), MT
      }("loaded" === IT.status ? IT.leaderboard : null), CT = function(TT) {
        const [kT, cT] = (0, hT.useState)(null), lT = "loaded" === TT.status ? TT.leaderboard.goalProgress : void 0;
        return (0, hT.useEffect)((() => {
          lT && cT(lT)
        }), [lT]), kT
      }(IT), jT = JT.f[`profileEffect_${MT.prizePack}`];
      if (KT) return null;
      const tT = "loaded" === IT.status ? IT.leaderboard : null,
        NT = null !== (kT = null === tT || void 0 === tT ? void 0 : tT.entries) && void 0 !== kT ? kT : null,
        QT = null !== tT && void 0 !== tT && tT.own && null !== NT && !NT.some((TT => TT.isOwn)) ? tT.own : null;
      return (0, GT.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, GT.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, GT.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, GT.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, GT.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, GT.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), lT("gameEvents:live")]
              }), (0, GT.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [lT("gameEvents:endsIn"), (0, GT.jsx)(PT.b, {
                  toTime: MT.endsAt,
                  onReachEndOfCountdown: () => {
                    OT(!0)
                  }
                })]
              })]
            }), (0, GT.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: lT(MT.titleKey)
            }), (0, GT.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, GT.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [jT && (0, GT.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, GT.jsx)(jT, {})
                }), (0, GT.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, GT.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: lT("gameEvents:prize")
                  }), (0, GT.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: lT(MT.prizeNameKey)
                  })]
                })]
              }), (0, GT.jsx)(uT, {
                event: MT,
                progress: CT
              })]
            })]
          }), (0, GT.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, GT.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, GT.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: lT(MT.leaderboard.titleKey)
              }), (0, GT.jsx)(eT.d, {
                ariaLabel: lT("gameEvents:leaderboardScope"),
                options: bT.d.map((TT => ({
                  value: TT,
                  label: lT(`gameEvents:${TT}Scope`)
                }))),
                value: yT,
                onChange: xT
              })]
            }), "loading" === IT.status && (0, GT.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, GT.jsx)(oT.d, {})
            }), ("unavailable" === IT.status || "loaded" === IT.status && null === NT) && (0, GT.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: lT("gameEvents:leaderboardUnavailable")
            }), null !== NT && 0 === NT.length && (0, GT.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: lT("friends" === yT ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== NT && NT.length > 0 && (0, GT.jsx)("ol", {
              className: "GameEventPanelRows",
              children: NT.map((TT => {
                const kT = AT[TT.player.name];
                return (0, GT.jsxs)("li", {
                  className: vT()("GameEventPanelRow", {
                    GameEventPanelRowOwn: TT.isOwn,
                    GameEventPanelRowTop: TT.rank <= 3
                  }),
                  children: [(0, GT.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", TT.rank]
                  }), (0, GT.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, GT.jsx)(HT.h, {
                      playerSocialPreview: {
                        ...TT.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== kT && (0, GT.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", kT.amount.toLocaleString()]
                  }, kT.key), (0, GT.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: TT.value.toLocaleString()
                  })]
                }, TT.player.name)
              }))
            }), QT && (0, GT.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, GT.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", QT.rank.toLocaleString()]
              }), (0, GT.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: lT("gameEvents:yourPlace")
              }), (0, GT.jsx)("span", {
                className: "GameEventPanelScore",
                children: QT.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function uT(TT) {
      let {
        event: kT,
        progress: cT
      } = TT;
      const {
        t: lT
      } = (0, fT.B)(), MT = null !== cT && kT.prizeGoals.some(((TT, kT) => cT[kT] >= TT.target));
      return (0, GT.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, GT.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: lT(MT ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, GT.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: kT.prizeGoals.map(((TT, kT) => {
            const MT = null === cT ? null : Math.min(cT[kT], TT.target);
            return (0, GT.jsxs)(hT.Fragment, {
              children: [kT > 0 && (0, GT.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: lT("gameEvents:goalsOr")
              }), (0, GT.jsxs)("div", {
                className: vT()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: MT === TT.target
                }),
                children: [(0, GT.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: lT(TT.labelKey)
                }), (0, GT.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, GT.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== MT && void 0 !== MT ? MT : 0) / TT.target * 100 + "%"
                    }
                  }), null !== MT && (0, GT.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [MT.toLocaleString(), " / ", TT.target.toLocaleString()]
                  })]
                })]
              })]
            }, TT.board)
          }))
        })]
      })
    }
    var XT = cT(1559),
      dT = cT(1616),
      LT = cT(1035),
      RT = cT(731),
      gT = cT(3419);

    function UT(TT) {
      let {
        gameNameWithVariation: kT
      } = TT;
      const cT = (0, XT.F)(kT),
        [lT, MT] = (0, hT.useState)(null);
      if ((0, hT.useEffect)((() => {
          if (!cT) return;
          let TT = !0;
          return (0, dT.m)(cT).then((kT => {
            TT && MT(kT)
          })).catch((TT => {
            console.error(`Failed to load the page copy for ${cT.name}`, TT)
          })), () => {
            TT = !1
          }
        }), [cT]), !cT || !lT || lT.name !== cT.name) return null;
      const KT = (0, dT.i)(lT),
        OT = new Set((0, LT.d)((0, RT.g)()).map((TT => (0, XT.u)(TT)))),
        yT = lT.similarGames.filter((TT => OT.has((0, XT.u)(TT))));
      return (0, GT.jsx)("div", {
        className: "GamePageContent",
        children: (0, GT.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, GT.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, GT.jsx)("h2", {
              children: KT.whatIs
            }), lT.whatIs.map((TT => (0, GT.jsx)("p", {
              children: TT
            }, TT)))]
          }), (0, GT.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, GT.jsx)("h2", {
              children: KT.howToPlay
            }), lT.howToPlay.map((TT => (0, GT.jsx)("p", {
              children: TT
            }, TT)))]
          }), (0, GT.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, GT.jsx)("h2", {
              children: KT.features
            }), (0, GT.jsx)("ul", {
              children: lT.features.map((TT => (0, GT.jsx)("li", {
                children: TT
              }, TT)))
            })]
          }), (0, GT.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, GT.jsx)("h2", {
              children: KT.tips
            }), (0, GT.jsx)("ul", {
              children: lT.tips.map((TT => (0, GT.jsx)("li", {
                children: TT
              }, TT)))
            })]
          }), (0, GT.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, GT.jsx)("h2", {
              children: KT.faq
            }), lT.faq.map((TT => {
              let {
                question: kT,
                answer: cT
              } = TT;
              return (0, GT.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, GT.jsx)("h3", {
                  children: kT
                }), (0, GT.jsx)("p", {
                  children: cT
                })]
              }, kT)
            }))]
          }), yT.length > 0 && (0, GT.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, GT.jsx)("h2", {
              children: KT.similarGames
            }), (0, GT.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: yT.map((TT => (0, GT.jsx)("li", {
                children: (0, GT.jsx)(gT.d, {
                  source: {
                    type: "game",
                    gameNameWithVariation: TT
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, TT)))
            })]
          })]
        })
      })
    }
    var YT = cT(1061),
      BT = cT(118),
      WT = cT(1136),
      nT = cT(9406),
      pT = cT(1671),
      iT = cT(1535),
      qT = cT(1530),
      sT = cT(1628),
      Tk = cT(1478),
      kk = cT(1363),
      ck = cT(36138),
      lk = cT(1242),
      Mk = cT(1018),
      Kk = cT(339),
      Ok = cT(1026),
      yk = cT(1554),
      fk = cT(8946),
      xk = cT(31),
      Ik = cT(2563),
      Ak = cT(761),
      Ck = cT(1226),
      jk = cT(6516),
      vk = cT(3436);

    function tk(TT) {
      let {
        preview: kT,
        isBroken: cT
      } = TT;
      const lT = null === kT ? null : (0, KT.i)(kT, "small"),
        OT = (0, MT.f)(null !== lT && void 0 !== lT ? lT : KT.s);
      return null === kT ? (0, GT.jsx)("div", {
        className: vT()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: cT
        }),
        children: (0, GT.jsx)(YT.e, {
          name: cT ? "triangle-exclamation" : "star"
        })
      }) : (0, GT.jsx)("div", {
        className: vT()("FeaturedGamesPopupSlotThumbnail", yT.g),
        style: (0, yT.f)(OT),
        role: "img",
        "aria-label": kT.name,
        children: (0, GT.jsx)(yT.d, {
          image: OT
        })
      })
    }

    function hk(TT) {
      let {
        schematicId: kT,
        gameName: cT
      } = TT;
      const {
        userContext: MT
      } = (0, aT.b)(), KT = (0, vk.b)(), [OT, yT] = (0, hT.useState)(null), [fT, xT] = (0, hT.useState)(null), [IT, AT] = (0, hT.useState)(!1), jT = (0, hT.useCallback)((() => {
        xT(null), zT.d.getFeaturedGames(MT).then((TT => {
          KT.current && yT(TT.slots)
        })).catch((TT => {
          console.error("Failed to get featured games", TT), KT.current && xT("Failed to load featured games")
        }))
      }), [MT, KT]);
      (0, hT.useEffect)((() => {
        jT()
      }), [jT]);
      const vT = (TT, kT) => {
        IT || (AT(!0), zT.d.setFeaturedGame(MT, TT, kT).then((() => {
          KT.current && jT()
        })).catch((TT => {
          console.error("Failed to set featured game", TT), KT.current && xT("Failed to update the featured slot")
        })).finally((() => {
          KT.current && AT(!1)
        })))
      };
      return (0, GT.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, GT.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !OT && !fT && (0, GT.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, GT.jsx)(oT.d, {})
        }), fT && (0, GT.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: fT
        }), OT && (0, GT.jsxs)(GT.Fragment, {
          children: [(0, GT.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: OT.map((TT => {
              const cT = TT.schematicId === kT,
                MT = null === TT.schematicId,
                {
                  categoryGroup: KT
                } = lT.J[TT.slotId];
              return (0, GT.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, GT.jsx)(tk, {
                  preview: TT.preview,
                  isBroken: !MT
                }), (0, GT.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, GT.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, lT.Y)(KT), " \xb7 position", " ", (0, lT.L)(TT.slotId, lT.Db) + 1, " of", " ", (0, lT.Bb)(KT, lT.Db)]
                  }), MT && (0, GT.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !MT && null !== TT.preview && (0, GT.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: TT.preview.name
                  }), !MT && null === TT.preview && (0, GT.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, GT.jsx)(YT.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, GT.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [MT && (0, GT.jsxs)(CT.r, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      vT(TT.slotId, kT)
                    },
                    disabled: IT,
                    children: [(0, GT.jsx)(YT.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !MT && !cT && (0, GT.jsxs)(CT.P, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      vT(TT.slotId, kT)
                    },
                    disabled: IT,
                    children: [(0, GT.jsx)(YT.e, {
                      name: "star"
                    }), " Replace"]
                  }), !MT && (0, GT.jsxs)(CT.I, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      vT(TT.slotId, null)
                    },
                    disabled: IT,
                    children: [(0, GT.jsx)(YT.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, TT.slotId)
            }))
          }), (0, GT.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var Nk = cT(4660),
      Qk = cT(4572),
      Sk = cT(3536);
    const Dk = 8,
      ak = 12;

    function Fk(TT) {
      let {
        customLobbies: kT,
        favouriteLobbies: cT,
        toggleLikeLobby: lT,
        showReport: MT
      } = TT;
      const [KT, OT] = (0, hT.useState)(Dk);
      return (0, hT.useEffect)((() => {
        if (KT >= kT.length) return;
        let TT = !0;
        return (0, Sk.e)().then((() => {
          TT && OT(KT + ak)
        })), () => {
          TT = !1
        }
      }), [KT, kT.length]), (0, GT.jsx)(GT.Fragment, {
        children: kT.slice(0, KT).map((TT => (0, GT.jsx)(Qk.g, {
          customLobby: TT,
          favouriteLobbies: cT,
          toggleLikeLobby: lT,
          showReport: MT
        }, TT.name)))
      })
    }
    var rk = cT(4575),
      Pk = cT(4590),
      wk = cT(4550),
      mk = cT(3527),
      bk = cT(8939),
      zk = cT(232);
    const Jk = {
      skyblock: [cT(36174).e]
    };
    var Hk = cT(617);
    const ek = {
      listedVariations: null,
      backgroundImage: KT.s,
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

    function Gk(TT, kT) {
      const cT = Ak.i[TT.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, KT.i)(TT, "large"),
        badges: [],
        category: TT.gameCategory,
        title: void 0 !== (null === cT || void 0 === cT ? void 0 : cT.title) ? kT(cT.title) : TT.name,
        variationTitle: null,
        description: void 0 !== (null === cT || void 0 === cT ? void 0 : cT.description) ? kT(cT.description) : TT.description,
        ownerSocialPreviewWithoutLocation: "owner" in TT ? TT.owner : null,
        ccu: TT.ccu,
        favourites: TT.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in TT ? TT.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function Vk(TT) {
      var kT, cT, lT;
      return null !== (kT = null !== (cT = (0, zk.l)() ? function(TT) {
        for (const [kT, cT] of Object.entries(Jk)) {
          const lT = [kT, ...cT.map((TT => (0, Kk.Kb)(kT, TT)))];
          if (lT.includes(TT)) return lT
        }
        return null
      }(TT) : null) && void 0 !== cT ? cT : null === (lT = Ak.e[TT]) || void 0 === lT ? void 0 : lT.listedVariations) && void 0 !== kT ? kT : null
    }

    function Ek() {
      const {
        gameNameWithVariation: TT
      } = (0, iT.v)();
      if ((0, hT.useEffect)(mk.o, []), TT && (0, lk.v)(TT)) return (0, GT.jsx)(Zk, {
        urlId: TT
      }, TT);
      const kT = TT && (0, Mk.j)(TT) ? TT : "firstParty";
      return (0, GT.jsx)(uk, {}, kT)
    }

    function Zk(TT) {
      let {
        urlId: kT
      } = TT;
      const {
        userContext: cT,
        isUserContextUpdating: lT
      } = (0, aT.b)(), MT = (0, hT.useMemo)((() => (0, pT.h)(kT)), [kT]);
      (0, hT.useMemo)((() => {
        if (null === MT) return;
        const TT = WT.userContextManager.peekCurrentUserContext();
        (null !== TT ? zT.d.getGame(TT, MT.schematicId) : WT.userContextManager.getCurrentUserContext().then((TT => zT.d.getGame(TT, MT.schematicId)))).catch((TT => {
          console.error(`Failed to get the custom game ${MT.schematicId}`, TT), (0, pT.g)(kT)
        }))
      }), [MT, kT]);
      const [KT, OT] = (0, hT.useState)(null), yT = (0, nT.c)();
      (0, hT.useEffect)((() => {
        if (null !== MT || lT) return;
        let TT = !0;
        return zT.d.getGameByUrlId(cT, kT).then((cT => {
          TT && OT({
            urlId: kT,
            game: cT
          })
        })).catch((cT => {
          console.error(`Failed to find the custom game with urlId ${kT}`, cT), TT && (0, qT.navigateToHomePage)()
        })), () => {
          TT = !1
        }
      }), [kT, MT, lT, cT]);
      const fT = null !== MT && void 0 !== MT ? MT : (null === KT || void 0 === KT ? void 0 : KT.urlId) === kT ? KT.game : null;
      return null === fT ? (0, GT.jsx)(oT.d, {}) : yT ? (0, GT.jsx)(uk, {
        gameNameWithVariation: (0, Mk.s)(fT.schematicId),
        knownCustomGame: fT
      }, fT.schematicId) : null
    }

    function uk(TT) {
      var kT, cT, OT, jT, bT, JT, oT, eT;
      let {
        gameNameWithVariation: VT,
        knownCustomGame: ET = null
      } = TT;
      const {
        t: uT
      } = (0, fT.B)();
      (0, Ik.j)();
      const dT = (0, Ik.o)(),
        {
          userContext: LT,
          isUserContextUpdating: RT
        } = (0, aT.b)(),
        gT = (0, wk.g)(),
        WT = (0, qT.useNavigatePreserveSearch)(),
        nT = (0, iT.v)(),
        pT = (0, hT.useMemo)((() => VT ? {
          gameNameWithVariation: VT
        } : nT), [VT, nT]),
        Tk = (0, fk.e)(pT),
        lk = (0, hT.useMemo)((() => {
          const TT = function(TT) {
            var kT, cT;
            const lT = Vk(TT);
            if (!lT || 0 === lT.length || lT.includes(TT)) return TT;
            const MT = xT.e.getItem((0, QT.g)(TT));
            if (MT && lT.includes(MT)) return MT;
            return null !== (kT = null === (cT = Ak.e[TT]) || void 0 === cT ? void 0 : cT.defaultListedVariation) && void 0 !== kT ? kT : lT[0]
          }(Tk.gameNameWithVariation);
          return TT === Tk.gameNameWithVariation ? Tk : {
            ...Tk,
            gameNameWithVariation: TT
          }
        }), [Tk]);
      (0, hT.useEffect)((() => {
        const TT = Tk.gameNameWithVariation;
        lk.gameNameWithVariation !== TT && TT !== (0, Kk.Lb)(TT) && WT((0, XT.x)(lk.gameNameWithVariation), {
          replace: !0
        })
      }), [lk.gameNameWithVariation, Tk.gameNameWithVariation, WT]);
      const [vk, tk] = (0, hT.useState)(""), Sk = hT.useRef(null), [Dk, ak] = (0, hT.useState)(), mk = (0, Mk.j)(lk.gameNameWithVariation), zk = (0, hT.useMemo)((() => mk ? null : function(TT, kT, cT) {
        var lT, MT;
        const OT = Ak.e[TT];
        return (0, Hk.R)(OT) ? null : {
          listedVariations: Vk(TT),
          backgroundImage: (0, KT.o)(TT, (0, KT.e)(OT)),
          badges: (0, IT.filterBadges)(OT.badges),
          category: OT.type,
          title: cT(OT.title),
          variationTitle: OT.variationTitle ? cT(OT.variationTitle) : null,
          description: cT(OT.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== kT ? null !== (lT = kT[TT]) && void 0 !== lT ? lT : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: OT.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: OT.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (MT = OT.canCreateCustomLobbies) || void 0 === MT || MT,
          countdownInformation: (0, QT.d)(TT)
        }
      }(lk.gameNameWithVariation, dT, uT)), [mk, lk.gameNameWithVariation, dT, uT]), [Jk, Ek] = (0, hT.useState)(!1), [Zk, uk] = (0, hT.useState)((() => ET ? Gk(ET, uT) : ek)), dk = null !== zk && void 0 !== zk ? zk : Zk, [Lk] = (0, hT.useState)(dk === ek), Rk = (0, MT.f)(dk.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: gk,
        recentlyPlayedCustomLobbies: Uk
      } = (0, hT.useMemo)((() => function(TT, kT, cT, lT) {
        var MT;
        const KT = TT => {
            const cT = (0, Mk.n)(TT),
              lT = kT.find((kT => "custom" === kT.type ? kT.schematicId === cT : kT.gameNameWithVariation === TT));
            return lT ? [...lT.recentLobbies] : []
          },
          OT = (0, IT.getRecentGameNameWithVariationLobbiesKey)(TT),
          yT = null !== (MT = xT.e.getItem(OT)) && void 0 !== MT ? MT : [],
          fT = [...KT(TT), ...yT],
          AT = [];
        for (const xT of fT)(0, Ck.K)(xT) && !AT.includes(xT) && AT.push(xT);
        let CT = fT;
        if (cT) {
          const TT = KT("classic_worlds"),
            kT = fT.filter((kT => !TT.includes(kT)));
          CT = [...TT, ...kT]
        }
        const jT = [],
          vT = !1 === lT ? [] : CT;
        for (const xT of vT)(0, Ck.K)(xT) || jT.includes(xT) || jT.push(xT);
        return {
          recentlyPlayedPublicLobbies: AT,
          recentlyPlayedCustomLobbies: jT
        }
      }(lk.gameNameWithVariation, gT, dk.showWorldsInsteadOfCustomLobbies, dk.canCreateCustomLobbies)), [lk.gameNameWithVariation, gT, dk.showWorldsInsteadOfCustomLobbies, dk.canCreateCustomLobbies]), [Yk, Bk] = (0, hT.useState)(!0), [Wk, nk] = (0, hT.useState)([]), [pk, ik] = (0, hT.useState)(null), [qk, sk] = (0, hT.useState)("explore"), Tc = (0, hT.useRef)(!1), kc = (0, hT.useCallback)((TT => {
        (0, NT.unstable_batchedUpdates)((() => {
          ak(TT), uk((kT => ({
            ...Gk(TT, uT),
            isFavourite: kT.isFavourite
          })))
        }))
      }), [uT]);
      (0, hT.useEffect)((() => {
        null === xk.e.get("gameEntrySource") && (0, xk.l)("gameInformationPageDirect")
      }), []);
      const cc = (0, hT.useRef)(null);
      (0, hT.useEffect)((() => {
        const TT = TT => {
            cc.current = TT.target instanceof Element ? TT.target.closest("a, button") : null
          },
          kT = TT => {
            "Tab" === TT.key && (cc.current = null)
          };
        return document.addEventListener("pointerdown", TT, !0), document.addEventListener("keydown", kT, !0), () => {
          document.removeEventListener("pointerdown", TT, !0), document.removeEventListener("keydown", kT, !0)
        }
      }), []), (0, FT.e)("Enter", (TT => {
        const kT = TT.target instanceof Element ? TT.target : null;
        if (TT.defaultPrevented || null !== kT && void 0 !== kT && kT.closest("input, textarea, select")) return;
        const cT = null === kT || void 0 === kT ? void 0 : kT.closest("a, button");
        cT && cT !== cc.current || (TT.preventDefault(), Ac())
      })), (0, rT.e)(qT.navigateToHomePage);
      const lc = gk.length > 0 || Uk.length > 0,
        Mc = !dk.useRejoinLastLobbyButton || 0 === gk.length,
        Kc = mk && null === dk.ownerSocialPreviewWithoutLocation,
        Oc = LT.getPlayerName() === (null === Dk || void 0 === Dk || null === (kT = Dk.owner) || void 0 === kT ? void 0 : kT.name),
        yc = null !== (cT = null === (OT = dk.badges.find((TT => "event" === TT.type))) || void 0 === OT ? void 0 : OT.event) && void 0 !== cT ? cT : null,
        fc = Mc ? CT.m : CT.e,
        xc = (0, GT.jsx)(AT.c, {
          tooltipInner: (0, GT.jsx)("div", {
            children: uT("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, GT.jsx)(fc, {
            className: "GameInformationButton",
            padDefaultFocus: Mc,
            showPress: !0,
            onClick: () => {
              Ac()
            },
            children: (0, GT.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Mc && (0, GT.jsxs)(GT.Fragment, {
                children: [(0, GT.jsx)(YT.e, {
                  name: "play"
                }), " "]
              }), uT("homePage:quickPlay")]
            })
          })
        });
      (0, hT.useEffect)((() => {
        if (!mk || RT) return;
        let TT = !0;
        const kT = (0, Mk.n)(lk.gameNameWithVariation);
        return zT.d.getGame(LT, kT).then((kT => {
          TT && kc(kT)
        })).catch((kT => {
          console.error("Failed to get Custom Game information", kT), TT && (0, qT.navigateToHomePage)()
        })), zT.d.getFavouriteGames(LT).then((cT => {
          TT && uk((TT => ({
            ...TT,
            isFavourite: cT.includes(kT)
          })))
        })).catch((kT => {
          console.error("Failed to get favourite games", kT), TT && Ek(!0)
        })), () => {
          TT = !1
        }
      }), [mk, RT, lk.gameNameWithVariation, kc, LT]);
      const Ic = !mk && null === zk;

      function Ac(TT) {
        (0, bk.f)(), WT((0, ST.c)(lk.gameNameWithVariation, TT))
      }(0, hT.useEffect)((() => {
        Ic && (0, qT.navigateToHomePage)()
      }), [Ic]), (0, hT.useEffect)((() => {
        if (!1 === dk.canCreateCustomLobbies) return;
        let TT = !0;
        return null !== dk.showWorldsInsteadOfCustomLobbies && !1 === RT && (Bk(!0), zT.d.getFavouriteLobbies(LT).then((TT => {
          ik(TT)
        })), zT.d.getOpenCustomLobbies(LT, {
          gameNameWithVariation: dk.showWorldsInsteadOfCustomLobbies ? "classic" : lk.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === qk,
          onlyFavouriteLobbies: "favourite" === qk
        }).then((kT => {
          TT && (0, NT.unstable_batchedUpdates)((() => {
            nk(kT), Bk(!1)
          }))
        })).catch((kT => {
          console.error("Failed to get open custom lobbies", kT), TT && Bk(!1)
        }))), () => {
          TT = !1
        }
      }), [RT, lk, qk, dk.showWorldsInsteadOfCustomLobbies, dk.canCreateCustomLobbies, LT]);
      const Cc = (0, hT.useCallback)((async TT => {
          try {
            if (!pk) return;
            pk.includes(TT) ? (zT.d.unfavouriteLobby(LT, TT), ik(pk.filter((kT => kT !== TT)))) : (zT.d.favouriteLobby(LT, TT).catch((TT => {
              console.error("Failed to favourite lobby", TT)
            })), ik([...pk, TT]))
          } catch (kT) {
            console.error("Failed to like lobby", kT)
          }
        }), [LT, pk]),
        jc = (null === Dk || void 0 === Dk ? void 0 : Dk.schematicId) === (0, Mk.n)(Tk.gameNameWithVariation) ? Dk : null,
        vc = jc && (0, XT.H)(Tk.gameNameWithVariation, (TT => uT(TT)), jc);
      (0, sT.e)(jc && (0, XT.x)(Tk.gameNameWithVariation, jc));
      const tc = BT.featureFlags.canUseCustomLobbies && !0 === dk.canCreateCustomLobbies,
        hc = (0, GT.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, GT.jsx)(UT, {
            gameNameWithVariation: lk.gameNameWithVariation
          })
        });
      return (0, GT.jsx)(GT.Fragment, {
        children: (0, GT.jsxs)("article", {
          className: vT()("GameInformation", {
            GameInformationFadeIn: Lk,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (jT = dk.countdownInformation) || void 0 === jT ? void 0 : jT.type)
          }),
          children: [vc && (0, GT.jsx)(DT.b, {
            meta: vc
          }), (0, GT.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, GT.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, GT.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, GT.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, GT.jsx)("div", {
                  className: vT()("GameInformationTopBackgroundImage", yT.g),
                  style: (0, yT.f)(Rk),
                  children: (0, GT.jsx)(yT.d, {
                    image: Rk
                  })
                })]
              }), (0, GT.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, GT.jsx)(Nk.e, {}), (0, GT.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, GT.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, GT.jsxs)("div", {
                      className: vT()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: Kc
                      }),
                      children: [dk.badges.map((TT => (0, GT.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${TT.type}`,
                        children: (0, GT.jsx)(mT.b, {
                          badge: TT
                        })
                      }, TT.type))), mk && (0, GT.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, GT.jsx)(wT.b, {
                          text: (0, lT.T)({
                            type: "playerCrafted"
                          })
                        })
                      }), dk.category && (0, GT.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, GT.jsx)(wT.b, {
                          text: [{
                            str: (0, lT.W)(dk.category).toUpperCase()
                          }]
                        })
                      }), null !== dk.ccu && (0, GT.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, GT.jsx)(YT.e, {
                          name: "user"
                        }), (0, Ck.P)(dk.ccu), " online"]
                      }), null !== dk.ownerSocialPreviewWithoutLocation && (0, GT.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, GT.jsx)("span", {
                          children: "Made by"
                        }), (0, GT.jsx)(HT.h, {
                          playerSocialPreview: {
                            ...dk.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), Kc && (0, GT.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, GT.jsx)("span", {
                          children: "Made by"
                        }), (0, GT.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== dk.favourites && (null !== dk.isFavourite || mk && !Jk) && (0, GT.jsx)(CT.s, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== Tc.current && (Tc.current = !0, null !== dk.isFavourite)) {
                              const TT = (0, Mk.n)(lk.gameNameWithVariation);
                              let kT;
                              dk.isFavourite ? (kT = -1, zT.d.unfavouriteGame(LT, TT).catch((TT => {
                                console.error("Failed to get unfavourite game", TT)
                              })).finally((() => {
                                Tc.current = !1
                              }))) : (kT = 1, zT.d.favouriteGame(LT, TT).catch((TT => {
                                console.error("Failed to get favourite game", TT)
                              })).finally((() => {
                                Tc.current = !1
                              }))), uk((TT => ({
                                ...TT,
                                isFavourite: !TT.isFavourite
                              }))), uk((TT => ({
                                ...TT,
                                favourites: TT.favourites + kT
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (bT = dk.isFavourite) && void 0 !== bT && bT,
                        disabled: null === dk.isFavourite,
                        className: vT()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === dk.isFavourite
                        })
                      }, null === dk.isFavourite ? "pending" : "known"), mk && !Kc && BT.featureFlags.useSocialFeatures && !Oc && (0, GT.jsx)(rk.b, {
                        targetType: "customGame",
                        targetId: (0, Mk.n)(lk.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (LT.playerHasRank("developer") || LT.playerHasRank("admin") && Oc) && (0, GT.jsxs)(CT.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          WT((0, yk.o)((0, Ok.h)(lk.gameNameWithVariation, !0)))
                        },
                        children: [(0, GT.jsx)(YT.e, {
                          name: "star-christmas"
                        }), " ", uT("studio:viewInStudio")]
                      }), mk && LT.playerHasRank("developer") && (0, GT.jsxs)(CT.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, jk.c)({
                            schematicId: (0, Mk.n)(lk.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, GT.jsx)(YT.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), mk && LT.playerHasRank("developer") && (0, GT.jsxs)(CT.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          kk.NotificationProvider.showCustomPopup({
                            body: () => (0, GT.jsx)(hk, {
                              schematicId: (0, Mk.n)(lk.gameNameWithVariation),
                              gameName: dk.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, GT.jsx)(YT.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (JT = dk.countdownInformation) || void 0 === JT ? void 0 : JT.type) && (0, GT.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, GT.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, GT.jsx)(PT.b, {
                            toTime: dk.countdownInformation.countdownToTime
                          })]
                        }), (0, GT.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: dk.countdownInformation.previewText
                        })]
                      })]
                    }, Kc ? "pending" : "shown"), (0, GT.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, GT.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, GT.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [dk.title, " ", dk.variationTitle && (null === (oT = Ak.e[lk.gameNameWithVariation]) || void 0 === oT ? void 0 : oT.variationThumbnailUseBigRatio) && (0, GT.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: dk.variationTitle
                          })]
                        })
                      }), dk.listedVariations && dk.listedVariations.length > 0 && (0, GT.jsx)("div", {
                        className: vT()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (eT = Ak.e[lk.gameNameWithVariation]) || void 0 === eT ? void 0 : eT.variationThumbnailUseBigRatio
                        }),
                        children: dk.listedVariations.map((TT => {
                          var kT, cT;
                          return (0, GT.jsxs)(Xk, {
                            variation: TT,
                            isSelected: lk.gameNameWithVariation === TT,
                            children: [null !== dT && (0, GT.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, GT.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, GT.jsx)(YT.e, {
                                  name: "user"
                                }), " ", (0, Ck.P)(null !== (kT = dT[TT]) && void 0 !== kT ? kT : 0)]
                              })
                            }), (0, GT.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: uT(null !== (cT = Ak.e[TT].variationTitle) && void 0 !== cT ? cT : Ak.e[TT].title)
                            }), (0, GT.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, IT.filterBadges)(Ak.e[TT].badges).map((TT => (0, GT.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + TT.type,
                                children: (0, GT.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, GT.jsx)(mT.b, {
                                    badge: TT
                                  })
                                })
                              }, TT.type)))
                            })]
                          }, TT)
                        }))
                      })]
                    }), dk.description && (0, GT.jsx)("p", {
                      className: "GameInformationDescription",
                      children: dk.description
                    })]
                  }), (0, GT.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, GT.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Mc && (0, GT.jsx)(AT.c, {
                        tooltipInner: (0, GT.jsx)("div", {
                          children: uT("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, GT.jsx)(CT.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            Ac(gk[0])
                          },
                          children: (0, GT.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, GT.jsx)(YT.e, {
                              name: "play"
                            }), " ", uT("homePage:rejoinLobbyNumber", {
                              number: gk[0]
                            })]
                          })
                        })
                      }), Mc && xc]
                    }), (0, GT.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Mc && xc, (0, GT.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, GT.jsx)(YT.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, GT.jsx)(tT.b, {
                          className: "JoinLobbyInput",
                          placeholderText: uT("homePage:lobbyName"),
                          maxLength: Ck.O,
                          domRef: Sk,
                          onValueChange: TT => {
                            TT = (0, Ck.Bb)(TT), tk(TT)
                          },
                          onEnter: () => {
                            0 === vk.length ? Ac(gk[0]) : Ac(vk)
                          }
                        }), (0, GT.jsx)(CT.e, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === vk.length ? Ac(gk[0]) : Ac(vk)
                          },
                          children: uT("general:join")
                        })]
                      })]
                    }), (0, GT.jsxs)("section", {
                      className: vT()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !lc
                      }),
                      children: [(0, GT.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, GT.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, GT.jsx)(YT.e, {
                            name: "clock-rotate-left"
                          }), lc && (0, GT.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: uT("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, GT.jsx)(Pk.b, {
                        lobbyGroups: [gk, Uk],
                        onLobbyClick: TT => {
                          Ac(TT)
                        },
                        keyPrefix: lk.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== yc && (0, GT.jsx)(ZT, {
                eventName: yc
              })]
            }), tc && (0, GT.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, GT.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, GT.jsxs)("div", {
                  className: vT()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === dk.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === dk.showWorldsInsteadOfCustomLobbies && (0, GT.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, GT.jsx)(YT.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, GT.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, GT.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), uT("game:worlds")]
                    })]
                  }), !1 === dk.showWorldsInsteadOfCustomLobbies && (0, GT.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, GT.jsx)(YT.e, {
                      name: "joystick"
                    }), (0, GT.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, GT.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), uT("homePage:customLobbies")]
                    })]
                  }), (0, GT.jsx)(CT.P, {
                    onClick: () => {
                      sk("explore")
                    },
                    active: "explore" === qk,
                    children: uT("general:explore")
                  }), (0, GT.jsx)(CT.P, {
                    onClick: () => {
                      sk("favourite")
                    },
                    active: "favourite" === qk,
                    children: uT("homePage:favouriteLobbies")
                  }), (0, GT.jsx)(CT.P, {
                    onClick: () => {
                      sk("owned")
                    },
                    active: "owned" === qk,
                    children: uT("homePage:ownedLobbies")
                  })]
                }), (0, GT.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, GT.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, GT.jsx)(Qk.d, {
                      label: "Create",
                      onClick: () => {
                        kk.NotificationProvider.showCustomPopup({
                          body: TT => (0, GT.jsx)(ck.CreateCustomLobby, {
                            gameNameWithVariation: lk.gameNameWithVariation,
                            close: TT
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === Yk && (0, GT.jsx)(Qk.i, {}), !1 === Yk && (0, GT.jsx)(Fk, {
                      customLobbies: Wk,
                      favouriteLobbies: pk,
                      toggleLikeLobby: Cc,
                      showReport: BT.featureFlags.useSocialFeatures && "owned" !== qk
                    })]
                  }), hc]
                })]
              })
            })]
          }), !tc && hc]
        })
      })
    }

    function Xk(TT) {
      let {
        variation: kT,
        isSelected: cT,
        children: lT
      } = TT;
      const fT = Ak.e[kT],
        IT = (0, KT.o)(kT, (0, KT.q)(fT)),
        AT = (0, MT.f)(IT),
        CT = (0, OT.d)([(0, KT.k)(kT, (0, KT.e)(fT))]);
      return (0, GT.jsxs)(qT.LinkPreserveSearch, {
        to: (0, XT.x)(kT),
        replace: !0,
        className: vT()("GameInformationVariation", yT.g, {
          SelectedGameInformationVariation: cT
        }),
        onClick: TT => {
          if (!(0, Tk.c)(TT)) return;
          const cT = (0, QT.g)(kT);
          xT.e.setItem(cT, kT)
        },
        onMouseEnter: CT.start,
        onMouseLeave: CT.cancel,
        onFocus: CT.start,
        onBlur: CT.cancel,
        style: (0, yT.f)(AT),
        children: [(0, GT.jsx)(yT.d, {
          image: AT
        }), lT]
      })
    }
  },
  6516: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => NT
    });
    var lT = cT(71),
      MT = cT(1470),
      KT = cT(1518),
      OT = cT(3436),
      yT = cT(1130),
      fT = cT(1348),
      xT = cT(1379),
      IT = cT(1061),
      AT = cT(1046),
      CT = cT.n(AT),
      jT = cT(1099);

    function vT(TT) {
      let {
        info: kT,
        className: cT
      } = TT;
      return (0, jT.jsxs)("div", {
        className: CT()("GameApprovalInfoDetails", cT),
        children: [(0, jT.jsxs)("div", {
          className: CT()("GameApprovalInfoSummary", kT.overallPassed ? "Passed" : "Failed"),
          children: [(0, jT.jsx)(IT.e, {
            name: kT.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, jT.jsx)("span", {
            children: kT.summary
          })]
        }), kT.rows.length > 0 && (0, jT.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: kT.rows.map((TT => (0, jT.jsxs)("div", {
            className: CT()("GameApprovalInfoRow", TT.passed ? "Passed" : "Failed"),
            children: [(0, jT.jsx)(IT.e, {
              name: TT.passed ? "check" : "xmark"
            }), (0, jT.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, jT.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: TT.label
              }), (0, jT.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: TT.valueText
              })]
            })]
          }, TT.label)))
        })]
      })
    }
    var tT = cT(1195),
      hT = cT(1363);

    function NT(TT) {
      hT.NotificationProvider.showCustomPopup({
        body: () => (0, jT.jsx)(QT, {
          ...TT
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function QT(TT) {
      let {
        schematicId: kT,
        canOverride: cT,
        onApprovalChanged: AT
      } = TT;
      const {
        t: CT
      } = (0, tT.B)(), {
        userContext: hT
      } = (0, yT.b)(), NT = (0, OT.b)(), [QT, ST] = (0, lT.useState)(null), [DT, aT] = (0, lT.useState)(null), [FT, rT] = (0, lT.useState)(!1), PT = (0, lT.useCallback)((() => {
        aT(null), KT.d.getGameApprovalInfo(hT, kT).then((TT => {
          NT.current && ST(TT)
        })).catch((TT => {
          console.error("Failed to get game approval info", TT), NT.current && aT(CT("studio:approvalLoadFailed"))
        }))
      }), [hT, kT, NT, CT]);
      (0, lT.useEffect)((() => {
        PT()
      }), [PT]);
      const wT = TT => {
        FT || (rT(!0), KT.d.setGameApproval(hT, kT, TT).then((() => {
          null === AT || void 0 === AT || AT(), NT.current && PT()
        })).catch((TT => {
          console.error("Failed to set game approval", TT)
        })).finally((() => {
          NT.current && rT(!1)
        })))
      };
      return (0, jT.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, jT.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: CT("studio:approvalTitle")
        }), !QT && !DT && (0, jT.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, jT.jsx)(fT.d, {})
        }), DT && (0, jT.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: DT
        }), QT && (0, jT.jsxs)(jT.Fragment, {
          children: [(0, jT.jsx)(vT, {
            info: QT
          }), cT && (0, jT.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== QT.manualOverride && (0, jT.jsx)(xT.c, {
              tooltipInner: (0, jT.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, jT.jsxs)(MT.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  wT(!0)
                },
                disabled: FT,
                children: [(0, jT.jsx)(IT.e, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== QT.manualOverride && (0, jT.jsx)(xT.c, {
              tooltipInner: (0, jT.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, jT.jsxs)(MT.I, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  wT(!1)
                },
                disabled: FT,
                children: [(0, jT.jsx)(IT.e, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== QT.manualOverride && (0, jT.jsx)(xT.c, {
              tooltipInner: (0, jT.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, jT.jsxs)(MT.e, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  wT(null)
                },
                disabled: FT,
                children: [(0, jT.jsx)(IT.e, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  9406: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT
    });
    var lT = cT(71),
      MT = cT(3536);

    function KT() {
      const [TT, kT] = (0, lT.useState)(!1);
      return (0, lT.useLayoutEffect)((() => {
        let TT = !0;
        return (0, MT.e)().then((() => {
          TT && kT(!0)
        })), () => {
          TT = !1
        }
      }), []), TT
    }
  },
  8946: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(1333),
      MT = cT(1226),
      KT = cT(617);

    function OT(TT) {
      return TT = function(TT, kT) {
        var cT;
        const lT = new URLSearchParams(kT),
          MT = lT.get("lobby"),
          KT = lT.get("vm"),
          OT = null !== (cT = MT) && void 0 !== cT ? cT : TT.lobbyName,
          yT = null !== KT && void 0 !== KT ? KT : TT.directJoinVmUrl;
        if (OT === TT.lobbyName && yT === TT.directJoinVmUrl) return TT;
        return {
          ...TT,
          lobbyName: OT,
          directJoinVmUrl: yT
        }
      }(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), TT = function(TT) {
        if ((0, KT.R)(TT.directJoinVmUrl)) return TT;
        const kT = (0, MT.cb)(TT.directJoinVmUrl);
        null === kT && (TT.directJoinVmUrl = void 0);
        return TT
      }(TT = function(TT) {
        if ((0, KT.R)(TT.gameNameWithVariation)) return TT;
        return TT.gameNameWithVariation = (0, lT.l)(TT.gameNameWithVariation), TT
      }(TT))
    }
  },
  8939: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      f: () => MT
    });
    let lT = !1;

    function MT() {
      lT = !0
    }

    function KT() {
      return lT
    }
  },
  36174: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      f: () => lT
    });
    const lT = "skyblockSkills",
      MT = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);