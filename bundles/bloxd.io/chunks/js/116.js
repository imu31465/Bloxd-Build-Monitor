export const id = 116;
export const ids = [116, 389];
export const modules = {
  35352: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => jo
    });
    var iT = IT(306),
      zT = IT(3061),
      kT = IT(3105),
      WT = IT(3098),
      XT = IT(3091),
      BT = IT(1171),
      FT = IT(26),
      ST = IT(1665),
      DT = IT(1337),
      LT = IT(1408),
      xT = IT(1042),
      cT = IT.n(xT),
      KT = IT(1624),
      MT = IT(46),
      rT = IT(68),
      AT = IT(2174),
      gT = IT(1296),
      hT = IT(1556),
      wT = IT(1110),
      mT = IT(2969),
      eT = IT(4068),
      RT = IT(3045),
      uT = IT(3049),
      vT = IT(1729),
      ET = IT(3052),
      fT = IT(1677),
      CT = IT(1451),
      jT = IT(1957),
      JT = IT(1310),
      UT = IT(2303),
      aT = IT(4509),
      YT = IT(1083);
    const QT = 15e3,
      OT = 2500;

    function HT(TT) {
      var oT;
      let {
        eventName: IT
      } = TT;
      const {
        t: iT
      } = (0, BT.t)(), zT = fT.h[IT], [kT, WT] = (0, MT.useState)((() => Date.now() >= zT.endsAt.getTime())), [XT, FT] = (0, MT.useState)("overall"), ST = function(TT, oT) {
        const {
          userContext: IT,
          isUserContextUpdating: iT
        } = (0, wT.b)(), zT = `${TT}:${oT}`, [kT, WT] = (0, MT.useState)({
          requestKey: zT,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, MT.useEffect)((() => {
          if (iT) return;
          let kT, XT = !1;
          const BT = async () => {
            if ("visible" === document.visibilityState) try {
              const iT = await CT.e.getGameEventLeaderboard(IT, {
                event: TT,
                scope: oT
              });
              XT || WT({
                requestKey: zT,
                leaderboard: {
                  status: "loaded",
                  leaderboard: iT
                }
              })
            } catch {
              XT || WT((TT => TT.requestKey === zT && "loaded" === TT.leaderboard.status ? TT : {
                requestKey: zT,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            XT || (kT = setTimeout(BT, QT))
          };
          return BT(), () => {
            XT = !0, clearTimeout(kT)
          }
        }), [TT, oT, zT, IT, iT]), kT.requestKey === zT ? kT.leaderboard : {
          status: "loading"
        }
      }(IT, XT), DT = function(TT) {
        const oT = (0, MT.useRef)(null),
          IT = (0, MT.useRef)(0),
          iT = (0, MT.useRef)(),
          [zT, kT] = (0, MT.useState)({});
        return (0, MT.useEffect)((() => {
          const zT = null === TT || void 0 === TT ? void 0 : TT.entries;
          if (!zT) return;
          const WT = new Map(zT.map((TT => [TT.player.name, TT.value]))),
            XT = oT.current;
          if (oT.current = WT, null === XT) return;
          const BT = {};
          for (const [TT, oT] of WT) {
            const iT = XT.get(TT);
            void 0 !== iT && oT > iT && (BT[TT] = {
              amount: oT - iT,
              key: IT.current++
            })
          }
          0 !== Object.keys(BT).length && (kT(BT), clearTimeout(iT.current), iT.current = setTimeout((() => {
            kT({})
          }), OT))
        }), [TT]), (0, MT.useEffect)((() => () => {
          clearTimeout(iT.current)
        }), []), zT
      }("loaded" === ST.status ? ST.leaderboard : null), LT = function(TT) {
        const [oT, IT] = (0, MT.useState)(null), iT = "loaded" === TT.status ? TT.leaderboard.goalProgress : void 0;
        return (0, MT.useEffect)((() => {
          iT && IT(iT)
        }), [iT]), oT
      }(ST), xT = jT.h[`profileEffect_${zT.prizePack}`];
      if (kT) return null;
      const KT = "loaded" === ST.status ? ST.leaderboard : null,
        rT = null !== (oT = null === KT || void 0 === KT ? void 0 : KT.entries) && void 0 !== oT ? oT : null,
        AT = null !== KT && void 0 !== KT && KT.own && null !== rT && !rT.some((TT => TT.isOwn)) ? KT.own : null;
      return (0, YT.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, YT.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, YT.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, YT.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, YT.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, YT.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), iT("gameEvents:live")]
              }), (0, YT.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [iT("gameEvents:endsIn"), (0, YT.jsx)(RT.b, {
                  toTime: zT.endsAt,
                  onReachEndOfCountdown: () => {
                    WT(!0)
                  }
                })]
              })]
            }), (0, YT.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: iT(zT.titleKey)
            }), (0, YT.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, YT.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [xT && (0, YT.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, YT.jsx)(xT, {})
                }), (0, YT.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, YT.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: iT("gameEvents:prize")
                  }), (0, YT.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: iT(zT.prizeNameKey)
                  })]
                })]
              }), (0, YT.jsx)(nT, {
                event: zT,
                progress: LT
              })]
            })]
          }), (0, YT.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, YT.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, YT.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: iT(zT.leaderboard.titleKey)
              }), (0, YT.jsx)(aT.e, {
                ariaLabel: iT("gameEvents:leaderboardScope"),
                options: fT.d.map((TT => ({
                  value: TT,
                  label: iT(`gameEvents:${TT}Scope`)
                }))),
                value: XT,
                onChange: FT
              })]
            }), "loading" === ST.status && (0, YT.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, YT.jsx)(JT.d, {})
            }), ("unavailable" === ST.status || "loaded" === ST.status && null === rT) && (0, YT.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: iT("gameEvents:leaderboardUnavailable")
            }), null !== rT && 0 === rT.length && (0, YT.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: iT("friends" === XT ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== rT && rT.length > 0 && (0, YT.jsx)("ol", {
              className: "GameEventPanelRows",
              children: rT.map((TT => {
                const oT = DT[TT.player.name];
                return (0, YT.jsxs)("li", {
                  className: cT()("GameEventPanelRow", {
                    GameEventPanelRowOwn: TT.isOwn,
                    GameEventPanelRowTop: TT.rank <= 3
                  }),
                  children: [(0, YT.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", TT.rank]
                  }), (0, YT.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, YT.jsx)(UT.g, {
                      playerSocialPreview: {
                        ...TT.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== oT && (0, YT.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", oT.amount.toLocaleString()]
                  }, oT.key), (0, YT.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: TT.value.toLocaleString()
                  })]
                }, TT.player.name)
              }))
            }), AT && (0, YT.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, YT.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", AT.rank.toLocaleString()]
              }), (0, YT.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: iT("gameEvents:yourPlace")
              }), (0, YT.jsx)("span", {
                className: "GameEventPanelScore",
                children: AT.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function nT(TT) {
      let {
        event: oT,
        progress: IT
      } = TT;
      const {
        t: iT
      } = (0, BT.t)(), zT = null !== IT && oT.prizeGoals.some(((TT, oT) => IT[oT] >= TT.target));
      return (0, YT.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, YT.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: iT(zT ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, YT.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: oT.prizeGoals.map(((TT, oT) => {
            const zT = null === IT ? null : Math.min(IT[oT], TT.target);
            return (0, YT.jsxs)(MT.Fragment, {
              children: [oT > 0 && (0, YT.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: iT("gameEvents:goalsOr")
              }), (0, YT.jsxs)("div", {
                className: cT()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: zT === TT.target
                }),
                children: [(0, YT.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: iT(TT.labelKey)
                }), (0, YT.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, YT.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== zT && void 0 !== zT ? zT : 0) / TT.target * 100 + "%"
                    }
                  }), null !== zT && (0, YT.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [zT.toLocaleString(), " / ", TT.target.toLocaleString()]
                  })]
                })]
              })]
            }, TT.board)
          }))
        })]
      })
    }
    var qT = IT(1501),
      ZT = IT(1543),
      lT = IT(1032),
      sT = IT(719),
      tT = IT(3041);

    function GT(TT) {
      let {
        gameNameWithVariation: oT
      } = TT;
      const IT = (0, qT.E)(oT),
        [iT, zT] = (0, MT.useState)(null);
      if ((0, MT.useEffect)((() => {
          if (!IT) return;
          let TT = !0;
          return (0, ZT.i)(IT).then((oT => {
            TT && zT(oT)
          })).catch((TT => {
            console.error(`Failed to load the page copy for ${IT.name}`, TT)
          })), () => {
            TT = !1
          }
        }), [IT]), !IT || !iT || iT.name !== IT.name) return null;
      const kT = (0, ZT.e)(iT),
        WT = new Set((0, lT.b)((0, sT.k)()).map((TT => (0, qT.y)(TT)))),
        XT = iT.similarGames.filter((TT => WT.has((0, qT.y)(TT))));
      return (0, YT.jsx)("div", {
        className: "GamePageContent",
        children: (0, YT.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, YT.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, YT.jsx)("h2", {
              children: kT.whatIs
            }), iT.whatIs.map((TT => (0, YT.jsx)("p", {
              children: TT
            }, TT)))]
          }), (0, YT.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, YT.jsx)("h2", {
              children: kT.howToPlay
            }), iT.howToPlay.map((TT => (0, YT.jsx)("p", {
              children: TT
            }, TT)))]
          }), (0, YT.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, YT.jsx)("h2", {
              children: kT.features
            }), (0, YT.jsx)("ul", {
              children: iT.features.map((TT => (0, YT.jsx)("li", {
                children: TT
              }, TT)))
            })]
          }), (0, YT.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, YT.jsx)("h2", {
              children: kT.tips
            }), (0, YT.jsx)("ul", {
              children: iT.tips.map((TT => (0, YT.jsx)("li", {
                children: TT
              }, TT)))
            })]
          }), (0, YT.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, YT.jsx)("h2", {
              children: kT.faq
            }), iT.faq.map((TT => {
              let {
                question: oT,
                answer: IT
              } = TT;
              return (0, YT.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, YT.jsx)("h3", {
                  children: oT
                }), (0, YT.jsx)("p", {
                  children: IT
                })]
              }, oT)
            }))]
          }), XT.length > 0 && (0, YT.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, YT.jsx)("h2", {
              children: kT.similarGames
            }), (0, YT.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: XT.map((TT => (0, YT.jsx)("li", {
                children: (0, YT.jsx)(tT.g, {
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
    var pT = IT(1055),
      bT = IT(90),
      yT = IT(1117),
      NT = IT(8783),
      PT = IT(1603),
      dT = IT(1484),
      VT = IT(1468),
      To = IT(1551),
      oo = IT(1414),
      Io = IT(1325),
      io = IT(35360),
      zo = IT(1207),
      ko = IT(1007),
      Wo = IT(314),
      Xo = IT(1023),
      Bo = IT(1499),
      Fo = IT(8335),
      So = IT(12),
      Do = IT(2261),
      Lo = IT(748),
      xo = IT(1193),
      co = IT(6004);

    function Ko(TT) {
      let {
        preview: oT,
        isBroken: IT
      } = TT;
      const iT = null === oT ? null : (0, kT.g)(oT, "small"),
        WT = (0, zT.g)(null !== iT && void 0 !== iT ? iT : kT.t);
      return null === oT ? (0, YT.jsx)("div", {
        className: cT()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: IT
        }),
        children: (0, YT.jsx)(pT.e, {
          name: IT ? "triangle-exclamation" : "star"
        })
      }) : (0, YT.jsx)("div", {
        className: cT()("FeaturedGamesPopupSlotThumbnail", XT.g),
        style: (0, XT.e)(WT),
        role: "img",
        "aria-label": oT.name,
        children: (0, YT.jsx)(XT.d, {
          image: WT
        })
      })
    }

    function Mo(TT) {
      let {
        schematicId: oT,
        gameName: IT
      } = TT;
      const {
        userContext: zT
      } = (0, wT.b)(), kT = (0, uT.c)(), [WT, XT] = (0, MT.useState)(null), [BT, FT] = (0, MT.useState)(null), [ST, DT] = (0, MT.useState)(!1), xT = (0, MT.useCallback)((() => {
        FT(null), CT.e.getFeaturedGames(zT).then((TT => {
          kT.current && XT(TT.slots)
        })).catch((TT => {
          console.error("Failed to get featured games", TT), kT.current && FT("Failed to load featured games")
        }))
      }), [zT, kT]);
      (0, MT.useEffect)((() => {
        xT()
      }), [xT]);
      const cT = (TT, oT) => {
        ST || (DT(!0), CT.e.setFeaturedGame(zT, TT, oT).then((() => {
          kT.current && xT()
        })).catch((TT => {
          console.error("Failed to set featured game", TT), kT.current && FT("Failed to update the featured slot")
        })).finally((() => {
          kT.current && DT(!1)
        })))
      };
      return (0, YT.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, YT.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !WT && !BT && (0, YT.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, YT.jsx)(JT.d, {})
        }), BT && (0, YT.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: BT
        }), WT && (0, YT.jsxs)(YT.Fragment, {
          children: [(0, YT.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: WT.map((TT => {
              const IT = TT.schematicId === oT,
                zT = null === TT.schematicId,
                {
                  categoryGroup: kT
                } = iT.K[TT.slotId];
              return (0, YT.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, YT.jsx)(Ko, {
                  preview: TT.preview,
                  isBroken: !zT
                }), (0, YT.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, YT.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, iT.kb)(kT), " \xb7 position", " ", (0, iT.L)(TT.slotId, iT.Lb) + 1, " of", " ", (0, iT.Kb)(kT, iT.Lb)]
                  }), zT && (0, YT.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !zT && null !== TT.preview && (0, YT.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: TT.preview.name
                  }), !zT && null === TT.preview && (0, YT.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, YT.jsx)(pT.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, YT.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [zT && (0, YT.jsxs)(LT.r, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      cT(TT.slotId, oT)
                    },
                    disabled: ST,
                    children: [(0, YT.jsx)(pT.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !zT && !IT && (0, YT.jsxs)(LT.J, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      cT(TT.slotId, oT)
                    },
                    disabled: ST,
                    children: [(0, YT.jsx)(pT.e, {
                      name: "star"
                    }), " Replace"]
                  }), !zT && (0, YT.jsxs)(LT.C, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      cT(TT.slotId, null)
                    },
                    disabled: ST,
                    children: [(0, YT.jsx)(pT.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, TT.slotId)
            }))
          }), (0, YT.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var ro = IT(4175),
      Ao = IT(4101),
      go = IT(4107),
      ho = IT(4118),
      wo = IT(4088),
      mo = IT(3131),
      eo = IT(8329),
      Ro = IT(205);
    const uo = {
      skyblock: [IT(35376).b]
    };
    var vo = IT(618);
    const Eo = {
      listedVariations: null,
      backgroundImage: kT.t,
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

    function fo(TT, oT) {
      const IT = Lo.e[TT.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, kT.g)(TT, "large"),
        badges: [],
        category: TT.gameCategory,
        title: void 0 !== (null === IT || void 0 === IT ? void 0 : IT.title) ? oT(IT.title) : TT.name,
        variationTitle: null,
        description: void 0 !== (null === IT || void 0 === IT ? void 0 : IT.description) ? oT(IT.description) : TT.description,
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

    function Co(TT) {
      var oT, IT, iT;
      return null !== (oT = null !== (IT = (0, Ro.n)() ? function(TT) {
        for (const [oT, IT] of Object.entries(uo)) {
          const iT = [oT, ...IT.map((TT => (0, Wo.Hb)(oT, TT)))];
          if (iT.includes(TT)) return iT
        }
        return null
      }(TT) : null) && void 0 !== IT ? IT : null === (iT = Lo.d[TT]) || void 0 === iT ? void 0 : iT.listedVariations) && void 0 !== oT ? oT : null
    }

    function jo() {
      const {
        gameNameWithVariation: TT
      } = (0, dT.C)();
      if ((0, MT.useEffect)(mo.o, []), TT && (0, zo.m)(TT)) return (0, YT.jsx)(Jo, {
        urlId: TT
      }, TT);
      const oT = TT && (0, ko.m)(TT) ? TT : "firstParty";
      return (0, YT.jsx)(Uo, {}, oT)
    }

    function Jo(TT) {
      let {
        urlId: oT
      } = TT;
      const {
        userContext: IT,
        isUserContextUpdating: iT
      } = (0, wT.b)(), zT = (0, MT.useMemo)((() => (0, PT.h)(oT)), [oT]);
      (0, MT.useMemo)((() => {
        if (null === zT) return;
        const TT = yT.userContextManager.peekCurrentUserContext();
        (null !== TT ? CT.e.getGame(TT, zT.schematicId) : yT.userContextManager.getCurrentUserContext().then((TT => CT.e.getGame(TT, zT.schematicId)))).catch((TT => {
          console.error(`Failed to get the custom game ${zT.schematicId}`, TT), (0, PT.f)(oT)
        }))
      }), [zT, oT]);
      const [kT, WT] = (0, MT.useState)(null), XT = (0, NT.b)();
      (0, MT.useEffect)((() => {
        if (null !== zT || iT) return;
        let TT = !0;
        return CT.e.getGameByUrlId(IT, oT).then((IT => {
          TT && WT({
            urlId: oT,
            game: IT
          })
        })).catch((IT => {
          console.error(`Failed to find the custom game with urlId ${oT}`, IT), TT && (0, VT.navigateToHomePage)()
        })), () => {
          TT = !1
        }
      }), [oT, zT, iT, IT]);
      const BT = null !== zT && void 0 !== zT ? zT : (null === kT || void 0 === kT ? void 0 : kT.urlId) === oT ? kT.game : null;
      return null === BT ? (0, YT.jsx)(JT.d, {}) : XT ? (0, YT.jsx)(Uo, {
        gameNameWithVariation: (0, ko.s)(BT.schematicId),
        knownCustomGame: BT
      }, BT.schematicId) : null
    }

    function Uo(TT) {
      var oT, IT, WT, xT, fT, jT, JT, aT;
      let {
        gameNameWithVariation: QT,
        knownCustomGame: OT = null
      } = TT;
      const {
        t: nT
      } = (0, BT.t)();
      (0, Do.i)();
      const ZT = (0, Do.q)(),
        {
          userContext: lT,
          isUserContextUpdating: sT
        } = (0, wT.b)(),
        tT = (0, wo.f)(),
        yT = (0, VT.useNavigatePreserveSearch)(),
        NT = (0, dT.C)(),
        PT = (0, MT.useMemo)((() => QT ? {
          gameNameWithVariation: QT
        } : NT), [QT, NT]),
        oo = (0, Fo.d)(PT),
        zo = (0, MT.useMemo)((() => {
          const TT = function(TT) {
            var oT, IT;
            const iT = Co(TT);
            if (!iT || 0 === iT.length || iT.includes(TT)) return TT;
            const zT = FT.e.getItem((0, AT.d)(TT));
            if (zT && iT.includes(zT)) return zT;
            return null !== (oT = null === (IT = Lo.d[TT]) || void 0 === IT ? void 0 : IT.defaultListedVariation) && void 0 !== oT ? oT : iT[0]
          }(oo.gameNameWithVariation);
          return TT === oo.gameNameWithVariation ? oo : {
            ...oo,
            gameNameWithVariation: TT
          }
        }), [oo]);
      (0, MT.useEffect)((() => {
        const TT = oo.gameNameWithVariation;
        zo.gameNameWithVariation !== TT && TT !== (0, Wo.Ib)(TT) && yT((0, qT.z)(zo.gameNameWithVariation), {
          replace: !0
        })
      }), [zo.gameNameWithVariation, oo.gameNameWithVariation, yT]);
      const Ko = (0, uT.c)(),
        [mo, Ro] = (0, MT.useState)(""),
        uo = MT.useRef(null),
        [jo, Jo] = (0, MT.useState)(),
        Uo = (0, ko.m)(zo.gameNameWithVariation),
        Yo = (0, MT.useMemo)((() => Uo ? null : function(TT, oT, IT) {
          var iT, zT;
          const WT = Lo.d[TT];
          return (0, vo.K)(WT) ? null : {
            listedVariations: Co(TT),
            backgroundImage: (0, kT.n)(TT, (0, kT.d)(WT)),
            badges: (0, ST.filterBadges)(WT.badges),
            category: WT.type,
            title: IT(WT.title),
            variationTitle: WT.variationTitle ? IT(WT.variationTitle) : null,
            description: IT(WT.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== oT ? null !== (iT = oT[TT]) && void 0 !== iT ? iT : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: WT.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: WT.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (zT = WT.canCreateCustomLobbies) || void 0 === zT || zT,
            countdownInformation: (0, AT.c)(TT)
          }
        }(zo.gameNameWithVariation, ZT, nT)), [Uo, zo.gameNameWithVariation, ZT, nT]),
        [Qo, Oo] = (0, MT.useState)(!1),
        [Ho, no] = (0, MT.useState)((() => OT ? fo(OT, nT) : Eo)),
        qo = null !== Yo && void 0 !== Yo ? Yo : Ho,
        [Zo] = (0, MT.useState)(qo === Eo),
        so = (0, zT.g)(qo.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: to,
          recentlyPlayedCustomLobbies: Go
        } = (0, MT.useMemo)((() => function(TT, oT, IT, iT) {
          var zT;
          const kT = TT => {
              const IT = (0, ko.p)(TT),
                iT = oT.find((oT => "custom" === oT.type ? oT.schematicId === IT : oT.gameNameWithVariation === TT));
              return iT ? [...iT.recentLobbies] : []
            },
            WT = (0, ST.getRecentGameNameWithVariationLobbiesKey)(TT),
            XT = null !== (zT = FT.e.getItem(WT)) && void 0 !== zT ? zT : [],
            BT = [...kT(TT), ...XT],
            DT = [];
          for (const FT of BT)(0, xo.L)(FT) && !DT.includes(FT) && DT.push(FT);
          let LT = BT;
          if (IT) {
            const TT = kT("classic_worlds"),
              oT = BT.filter((oT => !TT.includes(oT)));
            LT = [...TT, ...oT]
          }
          const xT = [],
            cT = !1 === iT ? [] : LT;
          for (const FT of cT)(0, xo.L)(FT) || xT.includes(FT) || xT.push(FT);
          return {
            recentlyPlayedPublicLobbies: DT,
            recentlyPlayedCustomLobbies: xT
          }
        }(zo.gameNameWithVariation, tT, qo.showWorldsInsteadOfCustomLobbies, qo.canCreateCustomLobbies)), [zo.gameNameWithVariation, tT, qo.showWorldsInsteadOfCustomLobbies, qo.canCreateCustomLobbies]),
        [po, bo] = (0, MT.useState)(!0),
        [yo, No] = (0, MT.useState)([]),
        [Po, Vo] = (0, MT.useState)(null),
        [TI, oI] = (0, MT.useState)("explore"),
        II = (0, MT.useRef)(!1),
        iI = (0, MT.useCallback)((TT => {
          (0, rT.unstable_batchedUpdates)((() => {
            Jo(TT), no((oT => ({
              ...fo(TT, nT),
              isFavourite: oT.isFavourite
            })))
          }))
        }), [nT]);
      (0, MT.useEffect)((() => {
        null === So.c.get("gameEntrySource") && (0, So.h)("gameInformationPageDirect")
      }), []);
      const zI = (0, MT.useRef)(null);
      (0, MT.useEffect)((() => {
        const TT = TT => {
            zI.current = TT.target instanceof Element ? TT.target.closest("a, button") : null
          },
          oT = TT => {
            "Tab" === TT.key && (zI.current = null)
          };
        return document.addEventListener("pointerdown", TT, !0), document.addEventListener("keydown", oT, !0), () => {
          document.removeEventListener("pointerdown", TT, !0), document.removeEventListener("keydown", oT, !0)
        }
      }), []), (0, mT.b)("Enter", (TT => {
        const oT = TT.target instanceof Element ? TT.target : null;
        if (TT.defaultPrevented || null !== oT && void 0 !== oT && oT.closest("input, textarea, select")) return;
        const IT = null === oT || void 0 === oT ? void 0 : oT.closest("a, button");
        IT && IT !== zI.current || (TT.preventDefault(), xI())
      })), (0, eT.e)(VT.navigateToHomePage);
      const kI = to.length > 0 || Go.length > 0,
        WI = !qo.useRejoinLastLobbyButton || 0 === to.length,
        XI = Uo && null === qo.ownerSocialPreviewWithoutLocation,
        BI = lT.getPlayerName() === (null === jo || void 0 === jo || null === (oT = jo.owner) || void 0 === oT ? void 0 : oT.name),
        FI = null !== (IT = null === (WT = qo.badges.find((TT => "event" === TT.type))) || void 0 === WT ? void 0 : WT.event) && void 0 !== IT ? IT : null,
        SI = WI ? LT.m : LT.e,
        DI = (0, YT.jsx)(DT.e, {
          tooltipInner: (0, YT.jsx)("div", {
            children: nT("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, YT.jsx)(SI, {
            className: "GameInformationButton",
            padDefaultFocus: WI,
            showPress: !0,
            onClick: () => {
              xI()
            },
            children: (0, YT.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [WI && (0, YT.jsxs)(YT.Fragment, {
                children: [(0, YT.jsx)(pT.e, {
                  name: "play"
                }), " "]
              }), nT("homePage:quickPlay")]
            })
          })
        });
      (0, MT.useEffect)((() => {
        if (!Uo || sT) return;
        let TT = !0;
        const oT = (0, ko.p)(zo.gameNameWithVariation);
        return CT.e.getGame(lT, oT).then((oT => {
          TT && iI(oT)
        })).catch((oT => {
          console.error("Failed to get Custom Game information", oT), TT && (0, VT.navigateToHomePage)()
        })), CT.e.getFavouriteGames(lT).then((IT => {
          TT && no((TT => ({
            ...TT,
            isFavourite: IT.includes(oT)
          })))
        })).catch((oT => {
          console.error("Failed to get favourite games", oT), TT && Oo(!0)
        })), () => {
          TT = !1
        }
      }), [Uo, sT, zo.gameNameWithVariation, iI, lT]);
      const LI = !Uo && null === Yo;

      function xI(TT) {
        (0, eo.f)(), yT((0, gT.c)(zo.gameNameWithVariation, TT))
      }(0, MT.useEffect)((() => {
        LI && (0, VT.navigateToHomePage)()
      }), [LI]), (0, MT.useEffect)((() => {
        !1 !== qo.canCreateCustomLobbies && null !== qo.showWorldsInsteadOfCustomLobbies && !1 === sT && (bo(!0), CT.e.getFavouriteLobbies(lT).then((TT => {
          Vo(TT)
        })), CT.e.getOpenCustomLobbies(lT, {
          gameNameWithVariation: qo.showWorldsInsteadOfCustomLobbies ? "classic" : zo.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === TI,
          onlyFavouriteLobbies: "favourite" === TI
        }).then((TT => {
          Ko.current && No(TT)
        })).catch((TT => {})).finally((() => {
          Ko.current && bo(!1)
        })))
      }), [sT, zo, TI, qo.showWorldsInsteadOfCustomLobbies, qo.canCreateCustomLobbies, Ko, lT]);
      const cI = (0, MT.useCallback)((async TT => {
          try {
            if (!Po) return;
            Po.includes(TT) ? (CT.e.unfavouriteLobby(lT, TT), Vo(Po.filter((oT => oT !== TT)))) : (CT.e.favouriteLobby(lT, TT).catch((TT => {
              console.error("Failed to favourite lobby", TT)
            })), Vo([...Po, TT]))
          } catch (oT) {
            console.error("Failed to like lobby", oT)
          }
        }), [lT, Po]),
        KI = (null === jo || void 0 === jo ? void 0 : jo.schematicId) === (0, ko.p)(oo.gameNameWithVariation) ? jo : null,
        MI = KI && (0, qT.G)(oo.gameNameWithVariation, (TT => nT(TT)), KI);
      (0, To.c)(KI && (0, qT.z)(oo.gameNameWithVariation, KI));
      const rI = bT.featureFlags.canUseCustomLobbies && !0 === qo.canCreateCustomLobbies,
        AI = (0, YT.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, YT.jsx)(GT, {
            gameNameWithVariation: zo.gameNameWithVariation
          })
        });
      return (0, YT.jsx)(YT.Fragment, {
        children: (0, YT.jsxs)("article", {
          className: cT()("GameInformation", {
            GameInformationFadeIn: Zo,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (xT = qo.countdownInformation) || void 0 === xT ? void 0 : xT.type)
          }),
          children: [MI && (0, YT.jsx)(hT.e, {
            meta: MI
          }), (0, YT.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, YT.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, YT.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, YT.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, YT.jsx)("div", {
                  className: cT()("GameInformationTopBackgroundImage", XT.g),
                  style: (0, XT.e)(so),
                  children: (0, YT.jsx)(XT.d, {
                    image: so
                  })
                })]
              }), (0, YT.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, YT.jsx)(ro.d, {}), (0, YT.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, YT.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, YT.jsxs)("div", {
                      className: cT()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: XI
                      }),
                      children: [qo.badges.map((TT => (0, YT.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${TT.type}`,
                        children: (0, YT.jsx)(ET.c, {
                          badge: TT
                        })
                      }, TT.type))), Uo && (0, YT.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, YT.jsx)(vT.c, {
                          text: (0, iT.db)({
                            type: "playerCrafted"
                          })
                        })
                      }), qo.category && (0, YT.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, YT.jsx)(vT.c, {
                          text: [{
                            str: (0, iT.eb)(qo.category).toUpperCase()
                          }]
                        })
                      }), null !== qo.ccu && (0, YT.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, YT.jsx)(pT.e, {
                          name: "user"
                        }), (0, xo.S)(qo.ccu), " online"]
                      }), null !== qo.ownerSocialPreviewWithoutLocation && (0, YT.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, YT.jsx)("span", {
                          children: "Made by"
                        }), (0, YT.jsx)(UT.g, {
                          playerSocialPreview: {
                            ...qo.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), XI && (0, YT.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, YT.jsx)("span", {
                          children: "Made by"
                        }), (0, YT.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== qo.favourites && (null !== qo.isFavourite || Uo && !Qo) && (0, YT.jsx)(LT.t, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== II.current && (II.current = !0, null !== qo.isFavourite)) {
                              const TT = (0, ko.p)(zo.gameNameWithVariation);
                              let oT;
                              qo.isFavourite ? (oT = -1, CT.e.unfavouriteGame(lT, TT).catch((TT => {
                                console.error("Failed to get unfavourite game", TT)
                              })).finally((() => {
                                II.current = !1
                              }))) : (oT = 1, CT.e.favouriteGame(lT, TT).catch((TT => {
                                console.error("Failed to get favourite game", TT)
                              })).finally((() => {
                                II.current = !1
                              }))), no((TT => ({
                                ...TT,
                                isFavourite: !TT.isFavourite
                              }))), no((TT => ({
                                ...TT,
                                favourites: TT.favourites + oT
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (fT = qo.isFavourite) && void 0 !== fT && fT,
                        disabled: null === qo.isFavourite,
                        className: cT()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === qo.isFavourite
                        })
                      }, null === qo.isFavourite ? "pending" : "known"), Uo && !XI && bT.featureFlags.useSocialFeatures && !BI && (0, YT.jsx)(go.e, {
                        targetType: "customGame",
                        targetId: (0, ko.p)(zo.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (lT.playerHasRank("developer") || lT.playerHasRank("admin") && BI) && (0, YT.jsxs)(LT.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          yT((0, Bo.k)((0, Xo.g)(zo.gameNameWithVariation, !0)))
                        },
                        children: [(0, YT.jsx)(pT.e, {
                          name: "star-christmas"
                        }), " ", nT("studio:viewInStudio")]
                      }), Uo && lT.playerHasRank("developer") && (0, YT.jsxs)(LT.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, co.b)({
                            schematicId: (0, ko.p)(zo.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, YT.jsx)(pT.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), Uo && lT.playerHasRank("developer") && (0, YT.jsxs)(LT.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Io.NotificationProvider.showCustomPopup({
                            body: () => (0, YT.jsx)(Mo, {
                              schematicId: (0, ko.p)(zo.gameNameWithVariation),
                              gameName: qo.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, YT.jsx)(pT.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (jT = qo.countdownInformation) || void 0 === jT ? void 0 : jT.type) && (0, YT.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, YT.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, YT.jsx)(RT.b, {
                            toTime: qo.countdownInformation.countdownToTime
                          })]
                        }), (0, YT.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: qo.countdownInformation.previewText
                        })]
                      })]
                    }, XI ? "pending" : "shown"), (0, YT.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, YT.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, YT.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [qo.title, " ", qo.variationTitle && (null === (JT = Lo.d[zo.gameNameWithVariation]) || void 0 === JT ? void 0 : JT.variationThumbnailUseBigRatio) && (0, YT.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: qo.variationTitle
                          })]
                        })
                      }), qo.listedVariations && qo.listedVariations.length > 0 && (0, YT.jsx)("div", {
                        className: cT()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (aT = Lo.d[zo.gameNameWithVariation]) || void 0 === aT ? void 0 : aT.variationThumbnailUseBigRatio
                        }),
                        children: qo.listedVariations.map((TT => {
                          var oT, IT;
                          return (0, YT.jsxs)(ao, {
                            variation: TT,
                            isSelected: zo.gameNameWithVariation === TT,
                            children: [null !== ZT && (0, YT.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, YT.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, YT.jsx)(pT.e, {
                                  name: "user"
                                }), " ", (0, xo.S)(null !== (oT = ZT[TT]) && void 0 !== oT ? oT : 0)]
                              })
                            }), (0, YT.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: nT(null !== (IT = Lo.d[TT].variationTitle) && void 0 !== IT ? IT : Lo.d[TT].title)
                            }), (0, YT.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, ST.filterBadges)(Lo.d[TT].badges).map((TT => (0, YT.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + TT.type,
                                children: (0, YT.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, YT.jsx)(ET.c, {
                                    badge: TT
                                  })
                                })
                              }, TT.type)))
                            })]
                          }, TT)
                        }))
                      })]
                    }), qo.description && (0, YT.jsx)("p", {
                      className: "GameInformationDescription",
                      children: qo.description
                    })]
                  }), (0, YT.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, YT.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!WI && (0, YT.jsx)(DT.e, {
                        tooltipInner: (0, YT.jsx)("div", {
                          children: nT("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, YT.jsx)(LT.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            xI(to[0])
                          },
                          children: (0, YT.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, YT.jsx)(pT.e, {
                              name: "play"
                            }), " ", nT("homePage:rejoinLobbyNumber", {
                              number: to[0]
                            })]
                          })
                        })
                      }), WI && DI]
                    }), (0, YT.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!WI && DI, (0, YT.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, YT.jsx)(pT.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, YT.jsx)(KT.e, {
                          className: "JoinLobbyInput",
                          placeholderText: nT("homePage:lobbyName"),
                          maxLength: xo.O,
                          domRef: uo,
                          onValueChange: TT => {
                            TT = (0, xo.Db)(TT), Ro(TT)
                          },
                          onEnter: () => {
                            0 === mo.length ? xI(to[0]) : xI(mo)
                          }
                        }), (0, YT.jsx)(LT.e, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === mo.length ? xI(to[0]) : xI(mo)
                          },
                          children: nT("general:join")
                        })]
                      })]
                    }), (0, YT.jsxs)("section", {
                      className: cT()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !kI
                      }),
                      children: [(0, YT.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, YT.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, YT.jsx)(pT.e, {
                            name: "clock-rotate-left"
                          }), kI && (0, YT.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: nT("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, YT.jsx)(ho.e, {
                        lobbyGroups: [to, Go],
                        onLobbyClick: TT => {
                          xI(TT)
                        },
                        keyPrefix: zo.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== FI && (0, YT.jsx)(HT, {
                eventName: FI
              })]
            }), rI && (0, YT.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, YT.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, YT.jsxs)("div", {
                  className: cT()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === qo.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === qo.showWorldsInsteadOfCustomLobbies && (0, YT.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, YT.jsx)(pT.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, YT.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, YT.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), nT("game:worlds")]
                    })]
                  }), !1 === qo.showWorldsInsteadOfCustomLobbies && (0, YT.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, YT.jsx)(pT.e, {
                      name: "joystick"
                    }), (0, YT.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, YT.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), nT("homePage:customLobbies")]
                    })]
                  }), (0, YT.jsx)(LT.J, {
                    onClick: () => {
                      oI("explore")
                    },
                    active: "explore" === TI,
                    children: nT("general:explore")
                  }), (0, YT.jsx)(LT.J, {
                    onClick: () => {
                      oI("favourite")
                    },
                    active: "favourite" === TI,
                    children: nT("homePage:favouriteLobbies")
                  }), (0, YT.jsx)(LT.J, {
                    onClick: () => {
                      oI("owned")
                    },
                    active: "owned" === TI,
                    children: nT("homePage:ownedLobbies")
                  })]
                }), (0, YT.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, YT.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, YT.jsx)(Ao.e, {
                      label: "Create",
                      onClick: () => {
                        Io.NotificationProvider.showCustomPopup({
                          body: TT => (0, YT.jsx)(io.CreateCustomLobby, {
                            gameNameWithVariation: zo.gameNameWithVariation,
                            close: TT
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === po && (0, YT.jsx)(Ao.l, {}), !1 === po && yo.length > 0 && yo.map((TT => (0, YT.jsx)(Ao.h, {
                      customLobby: TT,
                      favouriteLobbies: Po,
                      toggleLikeLobby: cI,
                      showReport: bT.featureFlags.useSocialFeatures && "owned" !== TI
                    }, TT.name)))]
                  }), AI]
                })]
              })
            })]
          }), !rI && AI]
        })
      })
    }

    function ao(TT) {
      let {
        variation: oT,
        isSelected: IT,
        children: iT
      } = TT;
      const BT = Lo.d[oT],
        ST = (0, kT.n)(oT, (0, kT.r)(BT)),
        DT = (0, zT.g)(ST),
        LT = (0, WT.f)([(0, kT.k)(oT, (0, kT.d)(BT))]);
      return (0, YT.jsxs)(VT.LinkPreserveSearch, {
        to: (0, qT.z)(oT),
        replace: !0,
        className: cT()("GameInformationVariation", XT.g, {
          SelectedGameInformationVariation: IT
        }),
        onClick: TT => {
          if (!(0, oo.b)(TT)) return;
          const IT = (0, AT.d)(oT);
          FT.e.setItem(IT, oT)
        },
        onMouseEnter: LT.start,
        onMouseLeave: LT.cancel,
        onFocus: LT.start,
        onBlur: LT.cancel,
        style: (0, XT.e)(DT),
        children: [(0, YT.jsx)(XT.d, {
          image: DT
        }), iT]
      })
    }
  },
  6004: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => rT
    });
    var iT = IT(46),
      zT = IT(1408),
      kT = IT(1451),
      WT = IT(3049),
      XT = IT(1110),
      BT = IT(1310),
      FT = IT(1337),
      ST = IT(1055),
      DT = IT(1042),
      LT = IT.n(DT),
      xT = IT(1083);

    function cT(TT) {
      let {
        info: oT,
        className: IT
      } = TT;
      return (0, xT.jsxs)("div", {
        className: LT()("GameApprovalInfoDetails", IT),
        children: [(0, xT.jsxs)("div", {
          className: LT()("GameApprovalInfoSummary", oT.overallPassed ? "Passed" : "Failed"),
          children: [(0, xT.jsx)(ST.e, {
            name: oT.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, xT.jsx)("span", {
            children: oT.summary
          })]
        }), oT.rows.length > 0 && (0, xT.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: oT.rows.map((TT => (0, xT.jsxs)("div", {
            className: LT()("GameApprovalInfoRow", TT.passed ? "Passed" : "Failed"),
            children: [(0, xT.jsx)(ST.e, {
              name: TT.passed ? "check" : "xmark"
            }), (0, xT.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, xT.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: TT.label
              }), (0, xT.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: TT.valueText
              })]
            })]
          }, TT.label)))
        })]
      })
    }
    var KT = IT(1171),
      MT = IT(1325);

    function rT(TT) {
      MT.NotificationProvider.showCustomPopup({
        body: () => (0, xT.jsx)(AT, {
          ...TT
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function AT(TT) {
      let {
        schematicId: oT,
        canOverride: IT,
        onApprovalChanged: DT
      } = TT;
      const {
        t: LT
      } = (0, KT.t)(), {
        userContext: MT
      } = (0, XT.b)(), rT = (0, WT.c)(), [AT, gT] = (0, iT.useState)(null), [hT, wT] = (0, iT.useState)(null), [mT, eT] = (0, iT.useState)(!1), RT = (0, iT.useCallback)((() => {
        wT(null), kT.e.getGameApprovalInfo(MT, oT).then((TT => {
          rT.current && gT(TT)
        })).catch((TT => {
          console.error("Failed to get game approval info", TT), rT.current && wT(LT("studio:approvalLoadFailed"))
        }))
      }), [MT, oT, rT, LT]);
      (0, iT.useEffect)((() => {
        RT()
      }), [RT]);
      const uT = TT => {
        mT || (eT(!0), kT.e.setGameApproval(MT, oT, TT).then((() => {
          null === DT || void 0 === DT || DT(), rT.current && RT()
        })).catch((TT => {
          console.error("Failed to set game approval", TT)
        })).finally((() => {
          rT.current && eT(!1)
        })))
      };
      return (0, xT.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, xT.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: LT("studio:approvalTitle")
        }), !AT && !hT && (0, xT.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, xT.jsx)(BT.d, {})
        }), hT && (0, xT.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: hT
        }), AT && (0, xT.jsxs)(xT.Fragment, {
          children: [(0, xT.jsx)(cT, {
            info: AT
          }), IT && (0, xT.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== AT.manualOverride && (0, xT.jsx)(FT.e, {
              tooltipInner: (0, xT.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, xT.jsxs)(zT.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  uT(!0)
                },
                disabled: mT,
                children: [(0, xT.jsx)(ST.e, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== AT.manualOverride && (0, xT.jsx)(FT.e, {
              tooltipInner: (0, xT.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, xT.jsxs)(zT.C, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  uT(!1)
                },
                disabled: mT,
                children: [(0, xT.jsx)(ST.e, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== AT.manualOverride && (0, xT.jsx)(FT.e, {
              tooltipInner: (0, xT.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, xT.jsxs)(zT.e, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  uT(null)
                },
                disabled: mT,
                children: [(0, xT.jsx)(ST.e, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  8783: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => kT
    });
    var iT = IT(46),
      zT = IT(3138);

    function kT() {
      const [TT, oT] = (0, iT.useState)(!1);
      return (0, iT.useLayoutEffect)((() => {
        let TT = !0;
        return (0, zT.c)().then((() => {
          TT && oT(!0)
        })), () => {
          TT = !1
        }
      }), []), TT
    }
  },
  8335: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(1296),
      zT = IT(1193),
      kT = IT(618);

    function WT(TT) {
      return TT = function(TT, oT) {
        var IT;
        const iT = new URLSearchParams(oT),
          zT = iT.get("lobby"),
          kT = iT.get("vm"),
          WT = null !== (IT = zT) && void 0 !== IT ? IT : TT.lobbyName,
          XT = null !== kT && void 0 !== kT ? kT : TT.directJoinVmUrl;
        if (WT === TT.lobbyName && XT === TT.directJoinVmUrl) return TT;
        return {
          ...TT,
          lobbyName: WT,
          directJoinVmUrl: XT
        }
      }(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), TT = function(TT) {
        if ((0, kT.K)(TT.directJoinVmUrl)) return TT;
        const oT = (0, zT.db)(TT.directJoinVmUrl);
        null === oT && (TT.directJoinVmUrl = void 0);
        return TT
      }(TT = function(TT) {
        if ((0, kT.K)(TT.gameNameWithVariation)) return TT;
        return TT.gameNameWithVariation = (0, iT.i)(TT.gameNameWithVariation), TT
      }(TT))
    }
  },
  8329: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      f: () => zT
    });
    let iT = !1;

    function zT() {
      iT = !0
    }

    function kT() {
      return iT
    }
  },
  35376: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      d: () => iT
    });
    const iT = "skyblockSkills",
      zT = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);