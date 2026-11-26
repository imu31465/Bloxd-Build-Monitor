export const id = 135;
export const ids = [135, 705];
export const modules = {
  37192: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => qB
    });
    var AH = LH(304),
      rH = LH(3892),
      SH = LH(3924),
      hH = LH(3919),
      tH = LH(3917),
      zH = LH(1123),
      CH = LH(30),
      EH = LH(1789),
      XH = LH(1365),
      GH = LH(1455),
      YH = LH(1038),
      uH = LH.n(YH),
      QH = LH(1706),
      WH = LH(45),
      MH = LH(69),
      xH = LH(2523),
      vH = LH(1306),
      PH = LH(1631),
      TH = LH(1061),
      UH = LH(3779),
      VH = LH(4961),
      OH = LH(2795),
      bH = LH(1967),
      kH = LH(3887),
      mH = LH(1805),
      oH = LH(1502),
      IH = LH(2257),
      fH = LH(1313),
      lH = LH(2833),
      KH = LH(5506),
      cH = LH(1225);
    const eH = 15e3,
      qH = 2500;

    function gH(HH) {
      var BH;
      let {
        eventName: LH
      } = HH;
      const {
        t: AH
      } = (0, zH.B)(), rH = mH.h[LH], [SH, hH] = (0, WH.useState)((() => Date.now() >= rH.endsAt.getTime())), [tH, CH] = (0, WH.useState)("overall"), EH = function(HH, BH) {
        const {
          userContext: LH,
          isUserContextUpdating: AH
        } = (0, TH.e)(), rH = `${HH}:${BH}`, [SH, hH] = (0, WH.useState)({
          requestKey: rH,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, WH.useEffect)((() => {
          if (AH) return;
          let SH, tH = !1;
          const zH = async () => {
            if ("visible" === document.visibilityState) try {
              const AH = await oH.d.getGameEventLeaderboard(LH, {
                event: HH,
                scope: BH
              });
              tH || hH({
                requestKey: rH,
                leaderboard: {
                  status: "loaded",
                  leaderboard: AH
                }
              })
            } catch {
              tH || hH((HH => HH.requestKey === rH && "loaded" === HH.leaderboard.status ? HH : {
                requestKey: rH,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            tH || (SH = setTimeout(zH, eH))
          };
          return zH(), () => {
            tH = !0, clearTimeout(SH)
          }
        }), [HH, BH, rH, LH, AH]), SH.requestKey === rH ? SH.leaderboard : {
          status: "loading"
        }
      }(LH, tH), XH = function(HH) {
        const BH = (0, WH.useRef)(null),
          LH = (0, WH.useRef)(0),
          AH = (0, WH.useRef)(),
          [rH, SH] = (0, WH.useState)({});
        return (0, WH.useEffect)((() => {
          const rH = null === HH || void 0 === HH ? void 0 : HH.entries;
          if (!rH) return;
          const hH = new Map(rH.map((HH => [HH.player.name, HH.value]))),
            tH = BH.current;
          if (BH.current = hH, null === tH) return;
          const zH = {};
          for (const [HH, BH] of hH) {
            const AH = tH.get(HH);
            void 0 !== AH && BH > AH && (zH[HH] = {
              amount: BH - AH,
              key: LH.current++
            })
          }
          0 !== Object.keys(zH).length && (SH(zH), clearTimeout(AH.current), AH.current = setTimeout((() => {
            SH({})
          }), qH))
        }), [HH]), (0, WH.useEffect)((() => () => {
          clearTimeout(AH.current)
        }), []), rH
      }("loaded" === EH.status ? EH.leaderboard : null), GH = function(HH) {
        const [BH, LH] = (0, WH.useState)(null), AH = "loaded" === HH.status ? HH.leaderboard.goalProgress : void 0;
        return (0, WH.useEffect)((() => {
          AH && LH(AH)
        }), [AH]), BH
      }(EH), YH = IH.f[`profileEffect_${rH.prizePack}`];
      if (SH) return null;
      const QH = "loaded" === EH.status ? EH.leaderboard : null,
        MH = null !== (BH = null === QH || void 0 === QH ? void 0 : QH.entries) && void 0 !== BH ? BH : null,
        xH = null !== QH && void 0 !== QH && QH.own && null !== MH && !MH.some((HH => HH.isOwn)) ? QH.own : null;
      return (0, cH.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, cH.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, cH.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, cH.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, cH.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, cH.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), AH("gameEvents:live")]
              }), (0, cH.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [AH("gameEvents:endsIn"), (0, cH.jsx)(OH.e, {
                  toTime: rH.endsAt,
                  onReachEndOfCountdown: () => {
                    hH(!0)
                  }
                })]
              })]
            }), (0, cH.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: AH(rH.titleKey)
            }), (0, cH.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, cH.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [YH && (0, cH.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, cH.jsx)(YH, {})
                }), (0, cH.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, cH.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: AH("gameEvents:prize")
                  }), (0, cH.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: AH(rH.prizeNameKey)
                  })]
                })]
              }), (0, cH.jsx)(NH, {
                event: rH,
                progress: GH
              })]
            })]
          }), (0, cH.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, cH.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, cH.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: AH(rH.leaderboard.titleKey)
              }), (0, cH.jsx)(KH.b, {
                ariaLabel: AH("gameEvents:leaderboardScope"),
                options: mH.e.map((HH => ({
                  value: HH,
                  label: AH(`gameEvents:${HH}Scope`)
                }))),
                value: tH,
                onChange: CH
              })]
            }), "loading" === EH.status && (0, cH.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, cH.jsx)(fH.d, {})
            }), ("unavailable" === EH.status || "loaded" === EH.status && null === MH) && (0, cH.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: AH("gameEvents:leaderboardUnavailable")
            }), null !== MH && 0 === MH.length && (0, cH.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: AH("friends" === tH ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== MH && MH.length > 0 && (0, cH.jsx)("ol", {
              className: "GameEventPanelRows",
              children: MH.map((HH => {
                const BH = XH[HH.player.name];
                return (0, cH.jsxs)("li", {
                  className: uH()("GameEventPanelRow", {
                    GameEventPanelRowOwn: HH.isOwn,
                    GameEventPanelRowTop: HH.rank <= 3
                  }),
                  children: [(0, cH.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", HH.rank]
                  }), (0, cH.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, cH.jsx)(lH.g, {
                      playerSocialPreview: {
                        ...HH.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== BH && (0, cH.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", BH.amount.toLocaleString()]
                  }, BH.key), (0, cH.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: HH.value.toLocaleString()
                  })]
                }, HH.player.name)
              }))
            }), xH && (0, cH.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, cH.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", xH.rank.toLocaleString()]
              }), (0, cH.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: AH("gameEvents:yourPlace")
              }), (0, cH.jsx)("span", {
                className: "GameEventPanelScore",
                children: xH.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function NH(HH) {
      let {
        event: BH,
        progress: LH
      } = HH;
      const {
        t: AH
      } = (0, zH.B)(), rH = null !== LH && BH.prizeGoals.some(((HH, BH) => LH[BH] >= HH.target));
      return (0, cH.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, cH.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: AH(rH ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, cH.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: BH.prizeGoals.map(((HH, BH) => {
            const rH = null === LH ? null : Math.min(LH[BH], HH.target);
            return (0, cH.jsxs)(WH.Fragment, {
              children: [BH > 0 && (0, cH.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: AH("gameEvents:goalsOr")
              }), (0, cH.jsxs)("div", {
                className: uH()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: rH === HH.target
                }),
                children: [(0, cH.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: AH(HH.labelKey)
                }), (0, cH.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, cH.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== rH && void 0 !== rH ? rH : 0) / HH.target * 100 + "%"
                    }
                  }), null !== rH && (0, cH.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [rH.toLocaleString(), " / ", HH.target.toLocaleString()]
                  })]
                })]
              })]
            }, HH.board)
          }))
        })]
      })
    }
    var RH = LH(1543),
      jH = LH(1613),
      nH = LH(1026),
      FH = LH(732),
      DH = LH(3872);

    function wH(HH) {
      let {
        gameNameWithVariation: BH
      } = HH;
      const LH = (0, RH.G)(BH),
        [AH, rH] = (0, WH.useState)(null);
      if ((0, WH.useEffect)((() => {
          if (!LH) return;
          let HH = !0;
          return (0, jH.g)(LH).then((BH => {
            HH && rH(BH)
          })).catch((HH => {
            console.error(`Failed to load the page copy for ${LH.name}`, HH)
          })), () => {
            HH = !1
          }
        }), [LH]), !LH || !AH || AH.name !== LH.name) return null;
      const SH = (0, jH.d)(AH),
        hH = new Set((0, nH.c)((0, FH.i)()).map((HH => (0, RH.v)(HH)))),
        tH = AH.similarGames.filter((HH => hH.has((0, RH.v)(HH))));
      return (0, cH.jsx)("div", {
        className: "GamePageContent",
        children: (0, cH.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, cH.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, cH.jsx)("h2", {
              children: SH.whatIs
            }), AH.whatIs.map((HH => (0, cH.jsx)("p", {
              children: HH
            }, HH)))]
          }), (0, cH.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, cH.jsx)("h2", {
              children: SH.howToPlay
            }), AH.howToPlay.map((HH => (0, cH.jsx)("p", {
              children: HH
            }, HH)))]
          }), (0, cH.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, cH.jsx)("h2", {
              children: SH.features
            }), (0, cH.jsx)("ul", {
              children: AH.features.map((HH => (0, cH.jsx)("li", {
                children: HH
              }, HH)))
            })]
          }), (0, cH.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, cH.jsx)("h2", {
              children: SH.tips
            }), (0, cH.jsx)("ul", {
              children: AH.tips.map((HH => (0, cH.jsx)("li", {
                children: HH
              }, HH)))
            })]
          }), (0, cH.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, cH.jsx)("h2", {
              children: SH.faq
            }), AH.faq.map((HH => {
              let {
                question: BH,
                answer: LH
              } = HH;
              return (0, cH.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, cH.jsx)("h3", {
                  children: BH
                }), (0, cH.jsx)("p", {
                  children: LH
                })]
              }, BH)
            }))]
          }), tH.length > 0 && (0, cH.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, cH.jsx)("h2", {
              children: SH.similarGames
            }), (0, cH.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: tH.map((HH => (0, cH.jsx)("li", {
                children: (0, cH.jsx)(DH.d, {
                  source: {
                    type: "game",
                    gameNameWithVariation: HH
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, HH)))
            })]
          })]
        })
      })
    }
    var ZH = LH(1315),
      dH = LH(81),
      aH = LH(1070),
      sH = LH(35020),
      JH = LH(1679),
      iH = LH(1520),
      pH = LH(1509),
      yH = LH(1624),
      HB = LH(1460),
      BB = LH(1352),
      LB = LH(37201),
      AB = LH(1179),
      rB = LH(1005),
      SB = LH(317),
      hB = LH(1016),
      tB = LH(1536),
      zB = LH(9637),
      CB = LH(15),
      EB = LH(2710),
      XB = LH(761),
      GB = LH(1168),
      YB = LH(7042),
      uB = LH(3879);

    function QB(HH) {
      let {
        preview: BH,
        isBroken: LH
      } = HH;
      const AH = null === BH ? null : (0, SH.h)(BH, "small"),
        hH = (0, rH.g)(null !== AH && void 0 !== AH ? AH : SH.t);
      return null === BH ? (0, cH.jsx)("div", {
        className: uH()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: LH
        }),
        children: (0, cH.jsx)(ZH.c, {
          name: LH ? "triangle-exclamation" : "star"
        })
      }) : (0, cH.jsx)("div", {
        className: uH()("FeaturedGamesPopupSlotThumbnail", tH.i),
        style: (0, tH.f)(hH),
        role: "img",
        "aria-label": BH.name,
        children: (0, cH.jsx)(tH.e, {
          image: hH
        })
      })
    }

    function WB(HH) {
      let {
        schematicId: BH,
        gameName: LH
      } = HH;
      const {
        userContext: rH
      } = (0, TH.e)(), SH = (0, uB.c)(), [hH, tH] = (0, WH.useState)(null), [zH, CH] = (0, WH.useState)(null), [EH, XH] = (0, WH.useState)(!1), YH = (0, WH.useCallback)((() => {
        CH(null), oH.d.getFeaturedGames(rH).then((HH => {
          SH.current && tH(HH.slots)
        })).catch((HH => {
          console.error("Failed to get featured games", HH), SH.current && CH("Failed to load featured games")
        }))
      }), [rH, SH]);
      (0, WH.useEffect)((() => {
        YH()
      }), [YH]);
      const uH = (HH, BH) => {
        EH || (XH(!0), oH.d.setFeaturedGame(rH, HH, BH).then((() => {
          SH.current && YH()
        })).catch((HH => {
          console.error("Failed to set featured game", HH), SH.current && CH("Failed to update the featured slot")
        })).finally((() => {
          SH.current && XH(!1)
        })))
      };
      return (0, cH.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, cH.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !hH && !zH && (0, cH.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, cH.jsx)(fH.d, {})
        }), zH && (0, cH.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: zH
        }), hH && (0, cH.jsxs)(cH.Fragment, {
          children: [(0, cH.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: hH.map((HH => {
              const LH = HH.schematicId === BH,
                rH = null === HH.schematicId,
                {
                  categoryGroup: SH
                } = AH.R[HH.slotId];
              return (0, cH.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, cH.jsx)(QB, {
                  preview: HH.preview,
                  isBroken: !rH
                }), (0, cH.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, cH.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, AH.qb)(SH), " \xb7 position", " ", (0, AH.T)(HH.slotId, AH.Vb) + 1, " of", " ", (0, AH.Ub)(SH, AH.Vb)]
                  }), rH && (0, cH.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !rH && null !== HH.preview && (0, cH.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: HH.preview.name
                  }), !rH && null === HH.preview && (0, cH.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, cH.jsx)(ZH.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, cH.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [rH && (0, cH.jsxs)(GH.x, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      uH(HH.slotId, BH)
                    },
                    disabled: EH,
                    children: [(0, cH.jsx)(ZH.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !rH && !LH && (0, cH.jsxs)(GH.W, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      uH(HH.slotId, BH)
                    },
                    disabled: EH,
                    children: [(0, cH.jsx)(ZH.c, {
                      name: "star"
                    }), " Replace"]
                  }), !rH && (0, cH.jsxs)(GH.O, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      uH(HH.slotId, null)
                    },
                    disabled: EH,
                    children: [(0, cH.jsx)(ZH.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, HH.slotId)
            }))
          }), (0, cH.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var MB = LH(5128),
      xB = LH(4998),
      vB = LH(3811);
    const PB = 8,
      TB = 12;

    function UB(HH) {
      let {
        customLobbies: BH,
        favouriteLobbies: LH,
        toggleLikeLobby: AH,
        showReport: rH
      } = HH;
      const [SH, hH] = (0, WH.useState)(PB);
      return (0, WH.useEffect)((() => {
        if (SH >= BH.length) return;
        let HH = !0;
        return (0, vB.e)().then((() => {
          HH && hH(SH + TB)
        })), () => {
          HH = !1
        }
      }), [SH, BH.length]), (0, cH.jsx)(cH.Fragment, {
        children: BH.slice(0, SH).map((HH => (0, cH.jsx)(xB.f, {
          customLobby: HH,
          favouriteLobbies: LH,
          toggleLikeLobby: AH,
          showReport: rH
        }, HH.name)))
      })
    }
    var VB = LH(5001),
      OB = LH(5020),
      bB = LH(4975),
      kB = LH(3952),
      mB = LH(9634),
      oB = LH(9619),
      IB = LH(193);
    const fB = {
      skyblock: [LH(37235).d]
    };
    var lB = LH(619);
    const KB = {
      listedVariations: null,
      backgroundImage: SH.t,
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

    function cB(HH, BH) {
      const LH = XB.d[HH.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, SH.h)(HH, "large"),
        badges: [],
        category: HH.gameCategory,
        title: void 0 !== (null === LH || void 0 === LH ? void 0 : LH.title) ? BH(LH.title) : HH.name,
        variationTitle: null,
        description: void 0 !== (null === LH || void 0 === LH ? void 0 : LH.description) ? BH(LH.description) : HH.description,
        ownerSocialPreviewWithoutLocation: "owner" in HH ? HH.owner : null,
        ccu: HH.ccu,
        favourites: HH.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in HH ? HH.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function eB(HH) {
      var BH, LH, AH;
      return null !== (BH = null !== (LH = (0, IB.l)() ? function(HH) {
        for (const [BH, LH] of Object.entries(fB)) {
          const AH = [BH, ...LH.map((HH => (0, SB.Sb)(BH, HH)))];
          if (AH.includes(HH)) return AH
        }
        return null
      }(HH) : null) && void 0 !== LH ? LH : null === (AH = XB.b[HH]) || void 0 === AH ? void 0 : AH.listedVariations) && void 0 !== BH ? BH : null
    }

    function qB() {
      const {
        gameNameWithVariation: HH
      } = (0, iH.A)();
      if ((0, WH.useEffect)(kB.k, []), HH && (0, AB.q)(HH)) return (0, cH.jsx)(gB, {
        urlId: HH
      }, HH);
      const BH = HH && (0, rB.l)(HH) ? HH : "firstParty";
      return (0, cH.jsx)(RB, {}, BH)
    }

    function gB(HH) {
      let {
        urlId: BH
      } = HH;
      const {
        t: LH
      } = (0, zH.B)(), {
        userContext: AH,
        isUserContextUpdating: rH
      } = (0, TH.e)(), SH = (0, WH.useMemo)((() => (0, JH.g)(BH)), [BH]);
      (0, WH.useMemo)((() => {
        if (null === SH) return;
        const HH = aH.userContextManager.peekCurrentUserContext();
        (null !== HH ? oH.d.getGame(HH, SH.schematicId) : aH.userContextManager.getCurrentUserContext().then((HH => oH.d.getGame(HH, SH.schematicId)))).catch((HH => {
          null === (0, oH.j)(HH) && console.error(`Failed to get the custom game ${SH.schematicId}`, HH), (0, JH.e)(BH)
        }))
      }), [SH, BH]);
      const [hH, tH] = (0, WH.useState)(null), CH = (0, sH.c)();
      (0, WH.useEffect)((() => {
        if (null !== SH || rH) return;
        let HH = !0;
        return oH.d.getGameByUrlId(AH, BH).then((AH => {
          HH && (AH.takenDown ? NB(LH, AH) : tH({
            urlId: BH,
            game: AH
          }))
        })).catch((AH => {
          const rH = null !== (0, oH.j)(AH);
          rH || console.error(`Failed to find the custom game with urlId ${BH}`, AH), HH && (rH ? NB(LH, null) : (0, pH.navigateToHomePage)())
        })), () => {
          HH = !1
        }
      }), [BH, SH, rH, AH, LH]);
      const EH = null !== SH && void 0 !== SH ? SH : (null === hH || void 0 === hH ? void 0 : hH.urlId) === BH ? hH.game : null;
      return null === EH ? (0, cH.jsx)(fH.d, {}) : CH ? (0, cH.jsx)(RB, {
        gameNameWithVariation: (0, rB.t)(EH.schematicId),
        knownCustomGame: EH
      }, EH.schematicId) : null
    }

    function NB(HH, BH) {
      (0, pH.navigateToHomePage)(), (0, oB.d)(HH, BH)
    }

    function RB(HH) {
      var BH, LH, hH, YH, mH, IH, fH, KH;
      let {
        gameNameWithVariation: eH,
        knownCustomGame: qH = null
      } = HH;
      const {
        t: NH
      } = (0, zH.B)();
      (0, EB.j)();
      const jH = (0, EB.l)(),
        {
          userContext: nH,
          isUserContextUpdating: FH
        } = (0, TH.e)(),
        DH = (0, bB.i)(),
        aH = (0, pH.useNavigatePreserveSearch)(),
        sH = (0, iH.A)(),
        JH = (0, WH.useMemo)((() => eH ? {
          gameNameWithVariation: eH
        } : sH), [eH, sH]),
        HB = (0, zB.b)(JH),
        AB = (0, WH.useMemo)((() => {
          const HH = function(HH) {
            var BH, LH;
            const AH = eB(HH);
            if (!AH || 0 === AH.length || AH.includes(HH)) return HH;
            const rH = CH.e.getItem((0, xH.i)(HH));
            if (rH && AH.includes(rH)) return rH;
            return null !== (BH = null === (LH = XB.b[HH]) || void 0 === LH ? void 0 : LH.defaultListedVariation) && void 0 !== BH ? BH : AH[0]
          }(HB.gameNameWithVariation);
          return HH === HB.gameNameWithVariation ? HB : {
            ...HB,
            gameNameWithVariation: HH
          }
        }), [HB]);
      (0, WH.useEffect)((() => {
        const HH = HB.gameNameWithVariation;
        AB.gameNameWithVariation !== HH && HH !== (0, SB.Wb)(HH) && aH((0, RH.z)(AB.gameNameWithVariation), {
          replace: !0
        })
      }), [AB.gameNameWithVariation, HB.gameNameWithVariation, aH]);
      const [uB, QB] = (0, WH.useState)(""), vB = WH.useRef(null), [PB, TB] = (0, WH.useState)(), kB = (0, rB.l)(AB.gameNameWithVariation), oB = (0, WH.useMemo)((() => kB ? null : function(HH, BH, LH) {
        var AH, rH;
        const hH = XB.b[HH];
        return (0, lB.M)(hH) ? null : {
          listedVariations: eB(HH),
          backgroundImage: (0, SH.n)(HH, (0, SH.d)(hH)),
          badges: (0, EH.filterBadges)(hH.badges),
          category: hH.type,
          title: LH(hH.title),
          variationTitle: hH.variationTitle ? LH(hH.variationTitle) : null,
          description: LH(hH.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== BH ? null !== (AH = BH[HH]) && void 0 !== AH ? AH : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: hH.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: hH.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (rH = hH.canCreateCustomLobbies) || void 0 === rH || rH,
          countdownInformation: (0, xH.h)(HH)
        }
      }(AB.gameNameWithVariation, jH, NH)), [kB, AB.gameNameWithVariation, jH, NH]), [IB, fB] = (0, WH.useState)(!1), [qB, gB] = (0, WH.useState)(null), [RB, nB] = (0, WH.useState)((() => qH ? cB(qH, NH) : KB)), FB = null !== oB && void 0 !== oB ? oB : RB, [DB] = (0, WH.useState)(FB === KB), wB = (0, rH.g)(FB.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: ZB,
        recentlyPlayedCustomLobbies: dB
      } = (0, WH.useMemo)((() => function(HH, BH, LH, AH) {
        var rH;
        const SH = HH => {
            const LH = (0, rB.q)(HH),
              AH = BH.find((BH => "custom" === BH.type ? BH.schematicId === LH : BH.gameNameWithVariation === HH));
            return AH ? [...AH.recentLobbies] : []
          },
          hH = (0, EH.getRecentGameNameWithVariationLobbiesKey)(HH),
          tH = null !== (rH = CH.e.getItem(hH)) && void 0 !== rH ? rH : [],
          zH = [...SH(HH), ...tH],
          XH = [];
        for (const CH of zH)(0, GB.N)(CH) && !XH.includes(CH) && XH.push(CH);
        let GH = zH;
        if (LH) {
          const HH = SH("classic_worlds"),
            BH = zH.filter((BH => !HH.includes(BH)));
          GH = [...HH, ...BH]
        }
        const YH = [],
          uH = !1 === AH ? [] : GH;
        for (const CH of uH)(0, GB.N)(CH) || YH.includes(CH) || YH.push(CH);
        return {
          recentlyPlayedPublicLobbies: XH,
          recentlyPlayedCustomLobbies: YH
        }
      }(AB.gameNameWithVariation, DH, FB.showWorldsInsteadOfCustomLobbies, FB.canCreateCustomLobbies)), [AB.gameNameWithVariation, DH, FB.showWorldsInsteadOfCustomLobbies, FB.canCreateCustomLobbies]), [aB, sB] = (0, WH.useState)(!0), [JB, iB] = (0, WH.useState)([]), [pB, yB] = (0, WH.useState)(null), [HL, BL] = (0, WH.useState)("explore"), LL = (0, WH.useRef)(!1), AL = (0, WH.useCallback)((HH => {
        (0, MH.unstable_batchedUpdates)((() => {
          TB(HH), nB((BH => ({
            ...cB(HH, NH),
            isFavourite: BH.isFavourite
          })))
        }))
      }), [NH]);
      (0, WH.useEffect)((() => {
        null === CB.c.get("gameEntrySource") && (0, CB.l)("gameInformationPageDirect")
      }), []);
      const rL = (0, WH.useRef)(null);
      (0, WH.useEffect)((() => {
        const HH = HH => {
            rL.current = HH.target instanceof Element ? HH.target.closest("a, button") : null
          },
          BH = HH => {
            "Tab" === HH.key && (rL.current = null)
          };
        return document.addEventListener("pointerdown", HH, !0), document.addEventListener("keydown", BH, !0), () => {
          document.removeEventListener("pointerdown", HH, !0), document.removeEventListener("keydown", BH, !0)
        }
      }), []), (0, UH.c)("Enter", (HH => {
        const BH = HH.target instanceof Element ? HH.target : null;
        if (HH.defaultPrevented || null !== BH && void 0 !== BH && BH.closest("input, textarea, select")) return;
        const LH = null === BH || void 0 === BH ? void 0 : BH.closest("a, button");
        LH && LH !== rL.current || (HH.preventDefault(), YL())
      })), (0, VH.c)(pH.navigateToHomePage);
      const SL = ZB.length > 0 || dB.length > 0,
        hL = !FB.useRejoinLastLobbyButton || 0 === ZB.length,
        tL = kB && null === FB.ownerSocialPreviewWithoutLocation,
        zL = nH.getPlayerName() === (null === PB || void 0 === PB || null === (BH = PB.owner) || void 0 === BH ? void 0 : BH.name),
        CL = null !== (LH = null === (hH = FB.badges.find((HH => "event" === HH.type))) || void 0 === hH ? void 0 : hH.event) && void 0 !== LH ? LH : null,
        EL = hL ? GH.u : GH.i,
        XL = (0, cH.jsx)(XH.g, {
          tooltipInner: (0, cH.jsx)("div", {
            children: NH("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, cH.jsx)(EL, {
            className: "GameInformationButton",
            padDefaultFocus: hL,
            showPress: !0,
            onClick: () => {
              YL()
            },
            children: (0, cH.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [hL && (0, cH.jsxs)(cH.Fragment, {
                children: [(0, cH.jsx)(ZH.c, {
                  name: "play"
                }), " "]
              }), NH("homePage:quickPlay")]
            })
          })
        });
      (0, WH.useEffect)((() => {
        if (!kB || FH) return;
        let HH = !0;
        const BH = (0, rB.q)(AB.gameNameWithVariation);
        return oH.d.getGame(nH, BH).then((BH => {
          HH && (BH.takenDown ? gB({
            ownGame: BH
          }) : AL(BH))
        })).catch((BH => {
          const LH = null !== (0, oH.j)(BH);
          LH || console.error("Failed to get Custom Game information", BH), HH && (LH ? gB({
            ownGame: null
          }) : (0, pH.navigateToHomePage)())
        })), oH.d.getFavouriteGames(nH).then((LH => {
          HH && nB((HH => ({
            ...HH,
            isFavourite: LH.includes(BH)
          })))
        })).catch((BH => {
          console.error("Failed to get favourite games", BH), HH && fB(!0)
        })), () => {
          HH = !1
        }
      }), [kB, FH, AB.gameNameWithVariation, AL, nH]), (0, WH.useEffect)((() => {
        null !== qB && NB(NH, qB.ownGame)
      }), [qB, NH]);
      const GL = !kB && null === oB;

      function YL(HH) {
        (0, mB.f)(), aH((0, vH.b)(AB.gameNameWithVariation, HH))
      }(0, WH.useEffect)((() => {
        GL && (0, pH.navigateToHomePage)()
      }), [GL]), (0, WH.useEffect)((() => {
        if (!1 === FB.canCreateCustomLobbies) return;
        let HH = !0;
        return null !== FB.showWorldsInsteadOfCustomLobbies && !1 === FH && (sB(!0), oH.d.getFavouriteLobbies(nH).then((HH => {
          yB(HH)
        })), oH.d.getOpenCustomLobbies(nH, {
          gameNameWithVariation: FB.showWorldsInsteadOfCustomLobbies ? "classic" : AB.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === HL,
          onlyFavouriteLobbies: "favourite" === HL
        }).then((BH => {
          HH && (0, MH.unstable_batchedUpdates)((() => {
            iB(BH), sB(!1)
          }))
        })).catch((BH => {
          console.error("Failed to get open custom lobbies", BH), HH && sB(!1)
        }))), () => {
          HH = !1
        }
      }), [FH, AB, HL, FB.showWorldsInsteadOfCustomLobbies, FB.canCreateCustomLobbies, nH]);
      const uL = (0, WH.useCallback)((async HH => {
          try {
            if (!pB) return;
            pB.includes(HH) ? (oH.d.unfavouriteLobby(nH, HH), yB(pB.filter((BH => BH !== HH)))) : (oH.d.favouriteLobby(nH, HH).catch((HH => {
              console.error("Failed to favourite lobby", HH)
            })), yB([...pB, HH]))
          } catch (BH) {
            console.error("Failed to like lobby", BH)
          }
        }), [nH, pB]),
        QL = (null === PB || void 0 === PB ? void 0 : PB.schematicId) === (0, rB.q)(HB.gameNameWithVariation) ? PB : null,
        WL = QL && (0, RH.I)(HB.gameNameWithVariation, (HH => NH(HH)), QL);
      (0, yH.f)(QL && (0, RH.z)(HB.gameNameWithVariation, QL));
      const ML = dH.featureFlags.canUseCustomLobbies && !0 === FB.canCreateCustomLobbies,
        xL = (0, cH.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, cH.jsx)(wH, {
            gameNameWithVariation: AB.gameNameWithVariation
          })
        });
      return (0, cH.jsx)(cH.Fragment, {
        children: (0, cH.jsxs)("article", {
          className: uH()("GameInformation", {
            GameInformationFadeIn: DB,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (YH = FB.countdownInformation) || void 0 === YH ? void 0 : YH.type)
          }),
          children: [WL && (0, cH.jsx)(PH.c, {
            meta: WL
          }), (0, cH.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, cH.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, cH.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, cH.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, cH.jsx)("div", {
                  className: uH()("GameInformationTopBackgroundImage", tH.i),
                  style: (0, tH.f)(wB),
                  children: (0, cH.jsx)(tH.e, {
                    image: wB
                  })
                })]
              }), (0, cH.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, cH.jsx)(MB.e, {}), (0, cH.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, cH.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, cH.jsxs)("div", {
                      className: uH()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: tL
                      }),
                      children: [FB.badges.map((HH => (0, cH.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${HH.type}`,
                        children: (0, cH.jsx)(kH.d, {
                          badge: HH
                        })
                      }, HH.type))), kB && (0, cH.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, cH.jsx)(bH.b, {
                          text: (0, AH.jb)({
                            type: "playerCrafted"
                          })
                        })
                      }), FB.category && (0, cH.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, cH.jsx)(bH.b, {
                          text: [{
                            str: (0, AH.mb)(FB.category).toUpperCase()
                          }]
                        })
                      }), null !== FB.ccu && (0, cH.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, cH.jsx)(ZH.c, {
                          name: "user"
                        }), (0, GB.T)(FB.ccu), " online"]
                      }), null !== FB.ownerSocialPreviewWithoutLocation && (0, cH.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, cH.jsx)("span", {
                          children: "Made by"
                        }), (0, cH.jsx)(lH.g, {
                          playerSocialPreview: {
                            ...FB.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), tL && (0, cH.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, cH.jsx)("span", {
                          children: "Made by"
                        }), (0, cH.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== FB.favourites && (null !== FB.isFavourite || kB && !IB) && (0, cH.jsx)(GH.C, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== LL.current && (LL.current = !0, null !== FB.isFavourite)) {
                              const HH = (0, rB.q)(AB.gameNameWithVariation);
                              let BH;
                              FB.isFavourite ? (BH = -1, oH.d.unfavouriteGame(nH, HH).catch((HH => {
                                console.error("Failed to get unfavourite game", HH)
                              })).finally((() => {
                                LL.current = !1
                              }))) : (BH = 1, oH.d.favouriteGame(nH, HH).catch((HH => {
                                console.error("Failed to get favourite game", HH)
                              })).finally((() => {
                                LL.current = !1
                              }))), nB((HH => ({
                                ...HH,
                                isFavourite: !HH.isFavourite
                              }))), nB((HH => ({
                                ...HH,
                                favourites: HH.favourites + BH
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (mH = FB.isFavourite) && void 0 !== mH && mH,
                        disabled: null === FB.isFavourite,
                        className: uH()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === FB.isFavourite
                        })
                      }, null === FB.isFavourite ? "pending" : "known"), kB && !tL && dH.featureFlags.useSocialFeatures && !zL && (0, cH.jsx)(VB.c, {
                        targetType: "customGame",
                        targetId: (0, rB.q)(AB.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (nH.playerHasRank("developer") || nH.playerHasRank("admin") && zL) && (0, cH.jsxs)(GH.u, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          aH((0, tB.t)((0, hB.g)(AB.gameNameWithVariation, !0)))
                        },
                        children: [(0, cH.jsx)(ZH.c, {
                          name: "star-christmas"
                        }), " ", NH("studio:viewInStudio")]
                      }), kB && nH.playerHasRank("developer") && (0, cH.jsxs)(GH.i, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, YB.d)({
                            schematicId: (0, rB.q)(AB.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, cH.jsx)(ZH.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), kB && nH.playerHasRank("developer") && (0, cH.jsxs)(GH.i, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          BB.NotificationProvider.showCustomPopup({
                            body: () => (0, cH.jsx)(WB, {
                              schematicId: (0, rB.q)(AB.gameNameWithVariation),
                              gameName: FB.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, cH.jsx)(ZH.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (IH = FB.countdownInformation) || void 0 === IH ? void 0 : IH.type) && (0, cH.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, cH.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, cH.jsx)(OH.e, {
                            toTime: FB.countdownInformation.countdownToTime
                          })]
                        }), (0, cH.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: FB.countdownInformation.previewText
                        })]
                      })]
                    }, tL ? "pending" : "shown"), (0, cH.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, cH.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, cH.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [FB.title, " ", FB.variationTitle && (null === (fH = XB.b[AB.gameNameWithVariation]) || void 0 === fH ? void 0 : fH.variationThumbnailUseBigRatio) && (0, cH.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: FB.variationTitle
                          })]
                        })
                      }), FB.listedVariations && FB.listedVariations.length > 0 && (0, cH.jsx)("div", {
                        className: uH()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (KH = XB.b[AB.gameNameWithVariation]) || void 0 === KH ? void 0 : KH.variationThumbnailUseBigRatio
                        }),
                        children: FB.listedVariations.map((HH => {
                          var BH, LH;
                          return (0, cH.jsxs)(jB, {
                            variation: HH,
                            isSelected: AB.gameNameWithVariation === HH,
                            children: [null !== jH && (0, cH.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, cH.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, cH.jsx)(ZH.c, {
                                  name: "user"
                                }), " ", (0, GB.T)(null !== (BH = jH[HH]) && void 0 !== BH ? BH : 0)]
                              })
                            }), (0, cH.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: NH(null !== (LH = XB.b[HH].variationTitle) && void 0 !== LH ? LH : XB.b[HH].title)
                            }), (0, cH.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, EH.filterBadges)(XB.b[HH].badges).map((HH => (0, cH.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + HH.type,
                                children: (0, cH.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, cH.jsx)(kH.d, {
                                    badge: HH
                                  })
                                })
                              }, HH.type)))
                            })]
                          }, HH)
                        }))
                      })]
                    }), FB.description && (0, cH.jsx)("p", {
                      className: "GameInformationDescription",
                      children: FB.description
                    })]
                  }), (0, cH.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, cH.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!hL && (0, cH.jsx)(XH.g, {
                        tooltipInner: (0, cH.jsx)("div", {
                          children: NH("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, cH.jsx)(GH.u, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            YL(ZB[0])
                          },
                          children: (0, cH.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, cH.jsx)(ZH.c, {
                              name: "play"
                            }), " ", NH("homePage:rejoinLobbyNumber", {
                              number: ZB[0]
                            })]
                          })
                        })
                      }), hL && XL]
                    }), (0, cH.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!hL && XL, (0, cH.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, cH.jsx)(ZH.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, cH.jsx)(QH.e, {
                          className: "JoinLobbyInput",
                          placeholderText: NH("homePage:lobbyName"),
                          maxLength: GB.R,
                          domRef: vB,
                          onValueChange: HH => {
                            HH = (0, GB.tb)(HH), QB(HH)
                          },
                          onEnter: () => {
                            0 === uB.length ? YL(ZB[0]) : YL(uB)
                          }
                        }), (0, cH.jsx)(GH.i, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === uB.length ? YL(ZB[0]) : YL(uB)
                          },
                          children: NH("general:join")
                        })]
                      })]
                    }), (0, cH.jsxs)("section", {
                      className: uH()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !SL
                      }),
                      children: [(0, cH.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, cH.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, cH.jsx)(ZH.c, {
                            name: "clock-rotate-left"
                          }), SL && (0, cH.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: NH("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, cH.jsx)(OB.e, {
                        lobbyGroups: [ZB, dB],
                        onLobbyClick: HH => {
                          YL(HH)
                        },
                        keyPrefix: AB.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== CL && (0, cH.jsx)(gH, {
                eventName: CL
              })]
            }), ML && (0, cH.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, cH.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, cH.jsxs)("div", {
                  className: uH()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === FB.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === FB.showWorldsInsteadOfCustomLobbies && (0, cH.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, cH.jsx)(ZH.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, cH.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, cH.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), NH("game:worlds")]
                    })]
                  }), !1 === FB.showWorldsInsteadOfCustomLobbies && (0, cH.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, cH.jsx)(ZH.c, {
                      name: "joystick"
                    }), (0, cH.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, cH.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), NH("homePage:customLobbies")]
                    })]
                  }), (0, cH.jsx)(GH.W, {
                    onClick: () => {
                      BL("explore")
                    },
                    active: "explore" === HL,
                    children: NH("general:explore")
                  }), (0, cH.jsx)(GH.W, {
                    onClick: () => {
                      BL("favourite")
                    },
                    active: "favourite" === HL,
                    children: NH("homePage:favouriteLobbies")
                  }), (0, cH.jsx)(GH.W, {
                    onClick: () => {
                      BL("owned")
                    },
                    active: "owned" === HL,
                    children: NH("homePage:ownedLobbies")
                  })]
                }), (0, cH.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, cH.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, cH.jsx)(xB.c, {
                      label: "Create",
                      onClick: () => {
                        BB.NotificationProvider.showCustomPopup({
                          body: HH => (0, cH.jsx)(LB.CreateCustomLobby, {
                            gameNameWithVariation: AB.gameNameWithVariation,
                            close: HH
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === aB && (0, cH.jsx)(xB.g, {}), !1 === aB && (0, cH.jsx)(UB, {
                      customLobbies: JB,
                      favouriteLobbies: pB,
                      toggleLikeLobby: uL,
                      showReport: dH.featureFlags.useSocialFeatures && "owned" !== HL
                    })]
                  }), xL]
                })]
              })
            })]
          }), !ML && xL]
        })
      })
    }

    function jB(HH) {
      let {
        variation: BH,
        isSelected: LH,
        children: AH
      } = HH;
      const zH = XB.b[BH],
        EH = (0, SH.n)(BH, (0, SH.r)(zH)),
        XH = (0, rH.g)(EH),
        GH = (0, hH.e)([(0, SH.k)(BH, (0, SH.d)(zH))]);
      return (0, cH.jsxs)(pH.LinkPreserveSearch, {
        to: (0, RH.z)(BH),
        replace: !0,
        className: uH()("GameInformationVariation", tH.i, {
          SelectedGameInformationVariation: LH
        }),
        onClick: HH => {
          if (!(0, HB.c)(HH)) return;
          const LH = (0, xH.i)(BH);
          CH.e.setItem(LH, BH)
        },
        onMouseEnter: GH.start,
        onMouseLeave: GH.cancel,
        onFocus: GH.start,
        onBlur: GH.cancel,
        style: (0, tH.f)(XH),
        children: [(0, cH.jsx)(tH.e, {
          image: XH
        }), AH]
      })
    }
  },
  7042: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => xH
    });
    var AH = LH(45),
      rH = LH(1455),
      SH = LH(1502),
      hH = LH(3879),
      tH = LH(1061),
      zH = LH(1313),
      CH = LH(1365),
      EH = LH(1315),
      XH = LH(1038),
      GH = LH.n(XH),
      YH = LH(7033),
      uH = LH(1225);

    function QH(HH) {
      let {
        info: BH,
        className: LH
      } = HH;
      const {
        statusText: AH,
        rowText: rH
      } = (0, YH.e)();
      return (0, uH.jsxs)("div", {
        className: GH()("GameApprovalInfoDetails", LH),
        children: [(0, uH.jsxs)("div", {
          className: GH()("GameApprovalInfoSummary", BH.overallPassed ? "Passed" : "Failed"),
          children: [(0, uH.jsx)(EH.c, {
            name: BH.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, uH.jsx)("span", {
            children: AH(BH.status)
          })]
        }), BH.rows.length > 0 && (0, uH.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: BH.rows.map((HH => {
            const {
              label: BH,
              value: LH
            } = rH(HH);
            return (0, uH.jsxs)("div", {
              className: GH()("GameApprovalInfoRow", HH.passed ? "Passed" : "Failed"),
              children: [(0, uH.jsx)(EH.c, {
                name: HH.passed ? "check" : "xmark"
              }), (0, uH.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, uH.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: BH
                }), null !== LH && (0, uH.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: LH
                })]
              })]
            }, HH.kind)
          }))
        })]
      })
    }
    var WH = LH(1123),
      MH = LH(1352);

    function xH(HH) {
      MH.NotificationProvider.showCustomPopup({
        body: () => (0, uH.jsx)(vH, {
          ...HH
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function vH(HH) {
      let {
        schematicId: BH,
        canOverride: LH,
        onApprovalChanged: XH
      } = HH;
      const {
        t: GH
      } = (0, WH.B)(), {
        userContext: YH
      } = (0, tH.e)(), MH = (0, hH.c)(), [xH, vH] = (0, AH.useState)(null), [PH, TH] = (0, AH.useState)(null), [UH, VH] = (0, AH.useState)(!1), OH = (0, AH.useCallback)((() => {
        TH(null), SH.d.getGameApprovalInfo(YH, BH).then((HH => {
          MH.current && vH(HH)
        })).catch((HH => {
          console.error("Failed to get game approval info", HH), MH.current && TH(GH("studio:approvalLoadFailed"))
        }))
      }), [YH, BH, MH, GH]);
      (0, AH.useEffect)((() => {
        OH()
      }), [OH]);
      const bH = HH => {
        UH || (VH(!0), SH.d.setGameApproval(YH, BH, HH).then((() => {
          null === XH || void 0 === XH || XH(), MH.current && OH()
        })).catch((HH => {
          console.error("Failed to set game approval", HH)
        })).finally((() => {
          MH.current && VH(!1)
        })))
      };
      return (0, uH.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, uH.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: GH("studio:approvalTitle")
        }), !xH && !PH && (0, uH.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, uH.jsx)(zH.d, {})
        }), PH && (0, uH.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: PH
        }), xH && (0, uH.jsxs)(uH.Fragment, {
          children: [(0, uH.jsx)(QH, {
            info: xH
          }), LH && (0, uH.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== xH.manualOverride && (0, uH.jsx)(CH.g, {
              tooltipInner: (0, uH.jsx)("div", {
                children: GH("studio:approvalApproveTooltip")
              }),
              children: (0, uH.jsxs)(rH.u, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  bH(!0)
                },
                disabled: UH,
                children: [(0, uH.jsx)(EH.c, {
                  name: "check"
                }), " ", GH("studio:approvalApprove")]
              })
            }), !1 !== xH.manualOverride && (0, uH.jsx)(CH.g, {
              tooltipInner: (0, uH.jsx)("div", {
                children: GH("studio:approvalDenyTooltip")
              }),
              children: (0, uH.jsxs)(rH.O, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  bH(!1)
                },
                disabled: UH,
                children: [(0, uH.jsx)(EH.c, {
                  name: "xmark"
                }), " ", GH("studio:approvalDeny")]
              })
            }), null !== xH.manualOverride && (0, uH.jsx)(CH.g, {
              tooltipInner: (0, uH.jsx)("div", {
                children: GH("studio:approvalClearOverrideTooltip")
              }),
              children: (0, uH.jsxs)(rH.i, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  bH(null)
                },
                disabled: UH,
                children: [(0, uH.jsx)(EH.c, {
                  name: "arrows-rotate"
                }), " ", GH("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  7033: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      e: () => hH
    });
    var AH = LH(317),
      rH = LH(1123);
    const SH = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function hH() {
      const {
        t: HH,
        selectedLanguage: BH
      } = (0, rH.B)();
      return {
        statusText: BH => HH(SH[BH]),
        rowText: LH => {
          const SH = (HH, LH) => (0, AH._)((0, rH.n)(BH.code, HH), 0, LH);
          switch (LH.kind) {
            case "ownerAccountAge": {
              const BH = LH.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: HH("studio:approvalAccountAgeLabel"),
                value: HH(BH, {
                  age: SH(BH, LH.accountAgeMs),
                  days: LH.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: HH("studio:approvalSinceUnbannedLabel"), value: HH("studio:approvalSinceUnbannedValue", {
                  time: SH("studio:approvalSinceUnbannedValue", LH.sinceMs),
                  days: LH.minDays
                })
              };
            case "reportHold": {
              const {
                detail: BH
              } = LH;
              if (null === BH) return {
                label: HH("studio:approvalUnderInvestigation"),
                value: null
              };
              const AH = BH.weightedReporters.toFixed(1),
                rH = BH.threshold.toFixed(1),
                hH = HH("studio:approvalReportHoldLabel", {
                  hours: BH.windowHours
                });
              if (null === BH.heldUntil) return {
                label: hH,
                value: HH("studio:approvalReportHoldValue", {
                  weightedReporters: AH,
                  threshold: rH
                })
              };
              const tH = "studio:approvalReportHoldValueHeld";
              return {
                label: hH,
                value: HH(tH, {
                  weightedReporters: AH,
                  threshold: rH,
                  time: SH(tH, BH.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function tH(HH) {
      return null === HH.manualOverride && HH.rows.some((HH => "reportHold" === HH.kind && !HH.passed))
    }
  },
  35020: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(45),
      rH = LH(3811);

    function SH() {
      const [HH, BH] = (0, AH.useState)(!1);
      return (0, AH.useLayoutEffect)((() => {
        let HH = !0;
        return (0, rH.e)().then((() => {
          HH && BH(!0)
        })), () => {
          HH = !1
        }
      }), []), HH
    }
  },
  9619: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => WH,
      d: () => MH
    });
    var AH = LH(152),
      rH = LH(176),
      SH = LH(1005),
      hH = LH(1016),
      tH = LH(1168),
      zH = LH(1998),
      CH = LH(2523),
      EH = LH(1502),
      XH = LH(1352),
      GH = LH(1070),
      YH = LH(9627),
      uH = LH(1509),
      QH = LH(1536);

    function WH(HH, BH) {
      const LH = !0 === BH.debugResult.gameRefused,
        SH = LH || BH.code === AH.h.REQUEST_TO_MATCHMAKING ? (0, YH.f)(BH.message) : null;
      if (null !== SH) return TH(HH, HH((0, YH.l)(SH)), HH(YH.j[SH])), !0;
      if (LH) return async function(HH) {
        const {
          gameNameWithVariation: BH,
          lobbyName: LH,
          shownLobbyName: AH
        } = zH.gameBridge.latest("connectedGame"), rH = "classic" === BH && (0, tH.G)(LH) ? AH : await (0, CH.f)(HH, BH, LH);
        return "" !== rH ? HH("general:cantJoinGame", {
          game: rH
        }) : HH("general:cantJoinThisGame")
      }(HH).then((LH => {
        TH(HH, LH, BH.message)
      })), !0;
      const {
        joinFailure: hH
      } = BH.debugResult, EH = "refused" === (null === hH || void 0 === hH ? void 0 : hH.at) ? hH.code : null;
      return EH === rH.e.schematicNotPublished.code ? (async function(HH, BH) {
        const LH = xH(),
          AH = await PH(LH);
        if (null === AH || AH.gamePublished) return void TH(HH, HH("general:cantJoinThisGame"), BH);
        await vH(HH, "rocket-launch", HH("studio:gameNotPublishedTitle", {
          game: AH.name
        }), HH("studio:publishInStudio"), LH)
      }(HH, BH.message), !0) : (EH === rH.e.schematicBanned.code || EH === rH.e.customGameTakenDown.code) && (PH(xH()).then((BH => {
        MH(HH, BH)
      })), !0)
    }

    function MH(HH, BH) {
      !0 !== (null === BH || void 0 === BH ? void 0 : BH.takenDown) ? TH(HH, HH("general:cantJoinThisGame"), rH.e.customGameTakenDown.text) : vH(HH, "lock", HH("studio:gameTakenDownTitle", {
        game: BH.name
      }), HH("studio:viewInStudio"), BH.schematicId)
    }

    function xH() {
      return (0, SH.q)(zH.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function vH(HH, BH, LH, AH, rH) {
      !0 === await XH.NotificationProvider.showPromptPopup({
        icon: BH,
        title: LH,
        confirmText: AH,
        cancelText: HH("general:cancel")
      }).getResult() && (0, uH.navigatePreserveSearch)((0, QH.t)((0, hH.d)(rH), "manage"))
    }
    async function PH(HH) {
      try {
        return await EH.d.getGame(await GH.userContextManager.getCurrentUserContext(), HH, !0)
      } catch (BH) {
        return (0, EH.g)(BH) || console.error(`Failed to get game ${HH}`, BH), null
      }
    }

    function TH(HH, BH, LH) {
      XH.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: BH,
        subtitle: LH,
        confirmText: HH("general:ok"),
        cancelText: ""
      })
    }
  },
  9637: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(1306),
      rH = LH(1168),
      SH = LH(619);

    function hH(HH) {
      return HH = function(HH, BH) {
        var LH;
        const AH = new URLSearchParams(BH),
          rH = AH.get("lobby"),
          SH = AH.get("vm"),
          hH = null !== (LH = rH) && void 0 !== LH ? LH : HH.lobbyName,
          tH = null !== SH && void 0 !== SH ? SH : HH.directJoinVmUrl;
        if (hH === HH.lobbyName && tH === HH.directJoinVmUrl) return HH;
        return {
          ...HH,
          lobbyName: hH,
          directJoinVmUrl: tH
        }
      }(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), HH = function(HH) {
        if ((0, SH.M)(HH.directJoinVmUrl)) return HH;
        const BH = (0, rH.bb)(HH.directJoinVmUrl);
        null === BH && (HH.directJoinVmUrl = void 0);
        return HH
      }(HH = function(HH) {
        if ((0, SH.M)(HH.gameNameWithVariation)) return HH;
        return HH.gameNameWithVariation = (0, AH.m)(HH.gameNameWithVariation), HH
      }(HH))
    }
  },
  9634: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      f: () => rH
    });
    let AH = !1;

    function rH() {
      AH = !0
    }

    function SH() {
      return AH
    }
  },
  9627: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      e: () => hH,
      f: () => tH,
      j: () => CH,
      l: () => zH
    });
    var AH = LH(176),
      rH = LH(5037);

    function SH(HH) {
      return hH(HH) === AH.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function hH(HH) {
      return "object" === typeof HH && null !== HH ? HH.code : void 0
    }

    function tH(HH) {
      var BH;
      return null !== (BH = Object.keys(rH.d).find((BH => rH.d[BH] === HH))) && void 0 !== BH ? BH : null
    }

    function zH(HH) {
      return "notWhitelisted" === HH ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const CH = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37235: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      e: () => AH
    });
    const AH = "skyblockSkills",
      rH = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);