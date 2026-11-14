export const id = 101;
export const ids = [101, 369];
export const modules = {
  34647: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => kM
    });
    var wW = MW(232),
      CW = MW(2601),
      zR = MW(2640),
      AW = MW(2632),
      bR = MW(2628),
      yR = MW(1027),
      NW = MW(50),
      eW = MW(1495),
      BW = MW(1180),
      tR = MW(1255),
      TW = MW(897),
      gR = MW.n(TW),
      iR = MW(1489),
      YW = MW(75),
      JW = MW(93),
      PW = MW(1901),
      IW = MW(1379),
      oW = MW(1441),
      lW = MW(969),
      FW = MW(2534),
      fW = MW(3591),
      QW = MW(2583),
      rR = MW(2592),
      cR = MW(1523),
      XW = MW(2599),
      jR = MW(1501),
      kR = MW(1314),
      aR = MW(1749),
      sW = MW(1157),
      dW = MW(2011),
      pW = MW(3991),
      hW = MW(940);
    const UW = 15e3,
      EW = 2500;

    function VW(WW) {
      var RW;
      let {
        eventName: MW
      } = WW;
      const {
        t: wW
      } = (0, yR.C)(), CW = jR.c[MW], [zR, AW] = (0, YW.useState)((() => Date.now() >= CW.endsAt.getTime())), [bR, NW] = (0, YW.useState)("overall"), eW = function(WW, RW) {
        const {
          userContext: MW,
          isUserContextUpdating: wW
        } = (0, lW.c)(), CW = `${WW}:${RW}`, [zR, AW] = (0, YW.useState)({
          requestKey: CW,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, YW.useEffect)((() => {
          if (wW) return;
          let zR, bR = !1;
          const yR = async () => {
            if ("visible" === document.visibilityState) try {
              const wW = await kR.c.getGameEventLeaderboard(MW, {
                event: WW,
                scope: RW
              });
              bR || AW({
                requestKey: CW,
                leaderboard: {
                  status: "loaded",
                  leaderboard: wW
                }
              })
            } catch {
              bR || AW((WW => WW.requestKey === CW && "loaded" === WW.leaderboard.status ? WW : {
                requestKey: CW,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            bR || (zR = setTimeout(yR, UW))
          };
          return yR(), () => {
            bR = !0, clearTimeout(zR)
          }
        }), [WW, RW, CW, MW, wW]), zR.requestKey === CW ? zR.leaderboard : {
          status: "loading"
        }
      }(MW, bR), BW = function(WW) {
        const RW = (0, YW.useRef)(null),
          MW = (0, YW.useRef)(0),
          wW = (0, YW.useRef)(),
          [CW, zR] = (0, YW.useState)({});
        return (0, YW.useEffect)((() => {
          const CW = null === WW || void 0 === WW ? void 0 : WW.entries;
          if (!CW) return;
          const AW = new Map(CW.map((WW => [WW.player.name, WW.value]))),
            bR = RW.current;
          if (RW.current = AW, null === bR) return;
          const yR = {};
          for (const [WW, RW] of AW) {
            const wW = bR.get(WW);
            void 0 !== wW && RW > wW && (yR[WW] = {
              amount: RW - wW,
              key: MW.current++
            })
          }
          0 !== Object.keys(yR).length && (zR(yR), clearTimeout(wW.current), wW.current = setTimeout((() => {
            zR({})
          }), EW))
        }), [WW]), (0, YW.useEffect)((() => () => {
          clearTimeout(wW.current)
        }), []), CW
      }("loaded" === eW.status ? eW.leaderboard : null), tR = function(WW) {
        const [RW, MW] = (0, YW.useState)(null), wW = "loaded" === WW.status ? WW.leaderboard.goalProgress : void 0;
        return (0, YW.useEffect)((() => {
          wW && MW(wW)
        }), [wW]), RW
      }(eW), TW = aR.e[`profileEffect_${CW.prizePack}`];
      if (zR) return null;
      const iR = "loaded" === eW.status ? eW.leaderboard : null,
        JW = null !== (RW = null === iR || void 0 === iR ? void 0 : iR.entries) && void 0 !== RW ? RW : null,
        PW = null !== iR && void 0 !== iR && iR.own && null !== JW && !JW.some((WW => WW.isOwn)) ? iR.own : null;
      return (0, hW.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, hW.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, hW.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, hW.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, hW.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, hW.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), wW("gameEvents:live")]
              }), (0, hW.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [wW("gameEvents:endsIn"), (0, hW.jsx)(QW.c, {
                  toTime: CW.endsAt,
                  onReachEndOfCountdown: () => {
                    AW(!0)
                  }
                })]
              })]
            }), (0, hW.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: wW(CW.titleKey)
            }), (0, hW.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, hW.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [TW && (0, hW.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, hW.jsx)(TW, {})
                }), (0, hW.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, hW.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: wW("gameEvents:prize")
                  }), (0, hW.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: wW(CW.prizeNameKey)
                  })]
                })]
              }), (0, hW.jsx)(mR, {
                event: CW,
                progress: tR
              })]
            })]
          }), (0, hW.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, hW.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, hW.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: wW(CW.leaderboard.titleKey)
              }), (0, hW.jsx)(pW.c, {
                ariaLabel: wW("gameEvents:leaderboardScope"),
                options: jR.b.map((WW => ({
                  value: WW,
                  label: wW(`gameEvents:${WW}Scope`)
                }))),
                value: bR,
                onChange: NW
              })]
            }), "loading" === eW.status && (0, hW.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, hW.jsx)(sW.d, {})
            }), ("unavailable" === eW.status || "loaded" === eW.status && null === JW) && (0, hW.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: wW("gameEvents:leaderboardUnavailable")
            }), null !== JW && 0 === JW.length && (0, hW.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: wW("friends" === bR ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== JW && JW.length > 0 && (0, hW.jsx)("ol", {
              className: "GameEventPanelRows",
              children: JW.map((WW => {
                const RW = BW[WW.player.name];
                return (0, hW.jsxs)("li", {
                  className: gR()("GameEventPanelRow", {
                    GameEventPanelRowOwn: WW.isOwn,
                    GameEventPanelRowTop: WW.rank <= 3
                  }),
                  children: [(0, hW.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", WW.rank]
                  }), (0, hW.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, hW.jsx)(dW.e, {
                      playerSocialPreview: {
                        ...WW.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== RW && (0, hW.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", RW.amount.toLocaleString()]
                  }, RW.key), (0, hW.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: WW.value.toLocaleString()
                  })]
                }, WW.player.name)
              }))
            }), PW && (0, hW.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, hW.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", PW.rank.toLocaleString()]
              }), (0, hW.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: wW("gameEvents:yourPlace")
              }), (0, hW.jsx)("span", {
                className: "GameEventPanelScore",
                children: PW.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function mR(WW) {
      let {
        event: RW,
        progress: MW
      } = WW;
      const {
        t: wW
      } = (0, yR.C)(), CW = null !== MW && RW.prizeGoals.some(((WW, RW) => MW[RW] >= WW.target));
      return (0, hW.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, hW.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: wW(CW ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, hW.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: RW.prizeGoals.map(((WW, RW) => {
            const CW = null === MW ? null : Math.min(MW[RW], WW.target);
            return (0, hW.jsxs)(YW.Fragment, {
              children: [RW > 0 && (0, hW.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: wW("gameEvents:goalsOr")
              }), (0, hW.jsxs)("div", {
                className: gR()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: CW === WW.target
                }),
                children: [(0, hW.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: wW(WW.labelKey)
                }), (0, hW.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, hW.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== CW && void 0 !== CW ? CW : 0) / WW.target * 100 + "%"
                    }
                  }), null !== CW && (0, hW.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [CW.toLocaleString(), " / ", WW.target.toLocaleString()]
                  })]
                })]
              })]
            }, WW.board)
          }))
        })]
      })
    }
    var xR = MW(1371),
      vR = MW(1423),
      KW = MW(885),
      uW = MW(572),
      OW = MW(2576);

    function nW(WW) {
      let {
        gameNameWithVariation: RW
      } = WW;
      const MW = (0, xR.F)(RW),
        [wW, CW] = (0, YW.useState)(null);
      if ((0, YW.useEffect)((() => {
          if (!MW) return;
          let WW = !0;
          return (0, vR.i)(MW).then((RW => {
            WW && CW(RW)
          })).catch((WW => {
            console.error(`Failed to load the page copy for ${MW.name}`, WW)
          })), () => {
            WW = !1
          }
        }), [MW]), !MW || !wW || wW.name !== MW.name) return null;
      const zR = (0, vR.g)(wW),
        AW = new Set((0, KW.c)((0, uW.h)()).map((WW => (0, xR.v)(WW)))),
        bR = wW.similarGames.filter((WW => AW.has((0, xR.v)(WW))));
      return (0, hW.jsx)("div", {
        className: "GamePageContent",
        children: (0, hW.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, hW.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, hW.jsx)("h2", {
              children: zR.whatIs
            }), wW.whatIs.map((WW => (0, hW.jsx)("p", {
              children: WW
            }, WW)))]
          }), (0, hW.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, hW.jsx)("h2", {
              children: zR.howToPlay
            }), wW.howToPlay.map((WW => (0, hW.jsx)("p", {
              children: WW
            }, WW)))]
          }), (0, hW.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, hW.jsx)("h2", {
              children: zR.features
            }), (0, hW.jsx)("ul", {
              children: wW.features.map((WW => (0, hW.jsx)("li", {
                children: WW
              }, WW)))
            })]
          }), (0, hW.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, hW.jsx)("h2", {
              children: zR.tips
            }), (0, hW.jsx)("ul", {
              children: wW.tips.map((WW => (0, hW.jsx)("li", {
                children: WW
              }, WW)))
            })]
          }), (0, hW.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, hW.jsx)("h2", {
              children: zR.faq
            }), wW.faq.map((WW => {
              let {
                question: RW,
                answer: MW
              } = WW;
              return (0, hW.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, hW.jsx)("h3", {
                  children: RW
                }), (0, hW.jsx)("p", {
                  children: MW
                })]
              }, RW)
            }))]
          }), bR.length > 0 && (0, hW.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, hW.jsx)("h2", {
              children: zR.similarGames
            }), (0, hW.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: bR.map((WW => (0, hW.jsx)("li", {
                children: (0, hW.jsx)(OW.d, {
                  source: {
                    type: "game",
                    gameNameWithVariation: WW
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, WW)))
            })]
          })]
        })
      })
    }
    var GW = MW(904),
      LW = MW(116),
      HW = MW(975),
      DW = MW(2672),
      qR = MW(1473),
      ZW = MW(1345),
      SW = MW(1330),
      WR = MW(1435),
      RR = MW(1269),
      MR = MW(1166),
      wR = MW(34653),
      CR = MW(1064),
      zM = MW(860),
      AR = MW(284),
      bM = MW(874),
      yM = MW(1363),
      NR = MW(7775),
      eR = MW(27),
      BR = MW(1979),
      tM = MW(607),
      TR = MW(1053),
      gM = MW(5507);

    function iM(WW) {
      let {
        preview: RW,
        isBroken: MW
      } = WW;
      const wW = null === RW ? null : (0, zR.f)(RW, "small"),
        AW = (0, CW.c)(null !== wW && void 0 !== wW ? wW : zR.n);
      return null === RW ? (0, hW.jsx)("div", {
        className: gR()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: MW
        }),
        children: (0, hW.jsx)(GW.e, {
          name: MW ? "triangle-exclamation" : "star"
        })
      }) : (0, hW.jsx)("div", {
        className: gR()("FeaturedGamesPopupSlotThumbnail", bR.g),
        style: (0, bR.c)(AW),
        role: "img",
        "aria-label": RW.name,
        children: (0, hW.jsx)(bR.b, {
          image: AW
        })
      })
    }

    function YR(WW) {
      let {
        schematicId: RW,
        gameName: MW
      } = WW;
      const {
        userContext: CW
      } = (0, lW.c)(), zR = (0, rR.e)(), [AW, bR] = (0, YW.useState)(null), [yR, NW] = (0, YW.useState)(null), [eW, BW] = (0, YW.useState)(!1), TW = (0, YW.useCallback)((() => {
        NW(null), kR.c.getFeaturedGames(CW).then((WW => {
          zR.current && bR(WW.slots)
        })).catch((WW => {
          console.error("Failed to get featured games", WW), zR.current && NW("Failed to load featured games")
        }))
      }), [CW, zR]);
      (0, YW.useEffect)((() => {
        TW()
      }), [TW]);
      const gR = (WW, RW) => {
        eW || (BW(!0), kR.c.setFeaturedGame(CW, WW, RW).then((() => {
          zR.current && TW()
        })).catch((WW => {
          console.error("Failed to set featured game", WW), zR.current && NW("Failed to update the featured slot")
        })).finally((() => {
          zR.current && BW(!1)
        })))
      };
      return (0, hW.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, hW.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !AW && !yR && (0, hW.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, hW.jsx)(sW.d, {})
        }), yR && (0, hW.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: yR
        }), AW && (0, hW.jsxs)(hW.Fragment, {
          children: [(0, hW.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: AW.map((WW => {
              const MW = WW.schematicId === RW,
                CW = null === WW.schematicId,
                {
                  categoryGroup: zR
                } = wW.I[WW.slotId];
              return (0, hW.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, hW.jsx)(iM, {
                  preview: WW.preview,
                  isBroken: !CW
                }), (0, hW.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, hW.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, wW.jb)(zR), " \xb7 position", " ", (0, wW.M)(WW.slotId, wW.Fb) + 1, " of", " ", (0, wW.Db)(zR, wW.Fb)]
                  }), CW && (0, hW.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !CW && null !== WW.preview && (0, hW.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: WW.preview.name
                  }), !CW && null === WW.preview && (0, hW.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, hW.jsx)(GW.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, hW.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [CW && (0, hW.jsxs)(tR.r, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      gR(WW.slotId, RW)
                    },
                    disabled: eW,
                    children: [(0, hW.jsx)(GW.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !CW && !MW && (0, hW.jsxs)(tR.O, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      gR(WW.slotId, RW)
                    },
                    disabled: eW,
                    children: [(0, hW.jsx)(GW.e, {
                      name: "star"
                    }), " Replace"]
                  }), !CW && (0, hW.jsxs)(tR.E, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      gR(WW.slotId, null)
                    },
                    disabled: eW,
                    children: [(0, hW.jsx)(GW.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, WW.slotId)
            }))
          }), (0, hW.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var JR = MW(3659),
      PR = MW(3622),
      IR = MW(3624),
      oR = MW(3631),
      lR = MW(3613),
      FR = MW(2664),
      fR = MW(190);
    const QR = {
      skyblock: [MW(34660).b]
    };
    var rM = MW(564);
    const cM = {
      listedVariations: null,
      backgroundImage: zR.n,
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

    function XR(WW, RW) {
      const MW = tM.e[WW.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, zR.f)(WW, "large"),
        badges: [],
        category: WW.gameCategory,
        title: void 0 !== (null === MW || void 0 === MW ? void 0 : MW.title) ? RW(MW.title) : WW.name,
        variationTitle: null,
        description: void 0 !== (null === MW || void 0 === MW ? void 0 : MW.description) ? RW(MW.description) : WW.description,
        ownerSocialPreviewWithoutLocation: "owner" in WW ? WW.owner : null,
        ccu: WW.ccu,
        favourites: WW.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in WW ? WW.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function jM(WW) {
      var RW, MW, wW;
      return null !== (RW = null !== (MW = (0, fR.l)() ? function(WW) {
        for (const [RW, MW] of Object.entries(QR)) {
          const wW = [RW, ...MW.map((WW => (0, AR.Lb)(RW, WW)))];
          if (wW.includes(WW)) return wW
        }
        return null
      }(WW) : null) && void 0 !== MW ? MW : null === (wW = tM.b[WW]) || void 0 === wW ? void 0 : wW.listedVariations) && void 0 !== RW ? RW : null
    }

    function kM() {
      const {
        gameNameWithVariation: WW
      } = (0, ZW.A)();
      if ((0, YW.useEffect)(FR.o, []), WW && (0, CR.o)(WW)) return (0, hW.jsx)(aM, {
        urlId: WW
      }, WW);
      const RW = WW && (0, zM.k)(WW) ? WW : "firstParty";
      return (0, hW.jsx)(sR, {}, RW)
    }

    function aM(WW) {
      let {
        urlId: RW
      } = WW;
      const {
        userContext: MW,
        isUserContextUpdating: wW
      } = (0, lW.c)(), CW = (0, YW.useMemo)((() => (0, qR.j)(RW)), [RW]);
      (0, YW.useMemo)((() => {
        if (null === CW) return;
        const WW = HW.userContextManager.peekCurrentUserContext();
        (null !== WW ? kR.c.getGame(WW, CW.schematicId) : HW.userContextManager.getCurrentUserContext().then((WW => kR.c.getGame(WW, CW.schematicId)))).catch((WW => {
          console.error(`Failed to get the custom game ${CW.schematicId}`, WW), (0, qR.f)(RW)
        }))
      }), [CW, RW]);
      const [zR, AW] = (0, YW.useState)(null), [bR, yR] = (0, YW.useState)(!1);
      (0, YW.useLayoutEffect)((() => {
        let WW = !0;
        return (0, DW.b)().then((() => {
          WW && yR(!0)
        })), () => {
          WW = !1
        }
      }), []), (0, YW.useEffect)((() => {
        if (null !== CW || wW) return;
        let WW = !0;
        return kR.c.getGameByUrlId(MW, RW).then((MW => {
          WW && AW({
            urlId: RW,
            game: MW
          })
        })).catch((MW => {
          console.error(`Failed to find the custom game with urlId ${RW}`, MW), WW && (0, SW.navigateToHomePage)()
        })), () => {
          WW = !1
        }
      }), [RW, CW, wW, MW]);
      const NW = null !== CW && void 0 !== CW ? CW : (null === zR || void 0 === zR ? void 0 : zR.urlId) === RW ? zR.game : null;
      return null === NW ? (0, hW.jsx)(sW.d, {}) : bR ? (0, hW.jsx)(sR, {
        gameNameWithVariation: (0, zM.q)(NW.schematicId),
        knownCustomGame: NW
      }, NW.schematicId) : null
    }

    function sR(WW) {
      var RW, MW, AW, TW, jR, aR, sW, pW;
      let {
        gameNameWithVariation: UW,
        knownCustomGame: EW = null
      } = WW;
      const {
        t: mR
      } = (0, yR.C)(), vR = (0, BR.j)({
        refresh: !0
      }), {
        userContext: KW,
        isUserContextUpdating: OW
      } = (0, lW.c)(), HW = (0, lR.d)(), DW = (0, SW.useNavigatePreserveSearch)(), qR = (0, ZW.A)(), RR = (0, YW.useMemo)((() => UW ? {
        gameNameWithVariation: UW
      } : qR), [UW, qR]), CR = (0, NR.c)(RR), iM = (0, YW.useMemo)((() => {
        const WW = function(WW) {
          var RW, MW;
          const wW = jM(WW);
          if (!wW || 0 === wW.length || wW.includes(WW)) return WW;
          const CW = NW.g.getItem((0, PW.i)(WW));
          if (CW && wW.includes(CW)) return CW;
          return null !== (RW = null === (MW = tM.b[WW]) || void 0 === MW ? void 0 : MW.defaultListedVariation) && void 0 !== RW ? RW : wW[0]
        }(CR.gameNameWithVariation);
        return WW === CR.gameNameWithVariation ? CR : {
          ...CR,
          gameNameWithVariation: WW
        }
      }), [CR]);
      (0, YW.useEffect)((() => {
        const WW = CR.gameNameWithVariation;
        iM.gameNameWithVariation !== WW && WW !== (0, AR.Pb)(WW) && DW((0, xR.z)(iM.gameNameWithVariation), {
          replace: !0
        })
      }), [iM.gameNameWithVariation, CR.gameNameWithVariation, DW]);
      const FR = (0, rR.e)(),
        [fR, QR] = (0, YW.useState)(""),
        kM = YW.useRef(null),
        [aM, sR] = (0, YW.useState)(),
        pR = (0, zM.k)(iM.gameNameWithVariation),
        hR = (0, YW.useMemo)((() => pR ? null : function(WW, RW, MW) {
          var wW, CW;
          const AW = tM.b[WW];
          return (0, rM.S)(AW) ? null : {
            listedVariations: jM(WW),
            backgroundImage: (0, zR.k)(WW, (0, zR.b)(AW)),
            badges: (0, eW.filterBadges)(AW.badges),
            category: AW.type,
            title: MW(AW.title),
            variationTitle: AW.variationTitle ? MW(AW.variationTitle) : null,
            description: MW(AW.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== RW ? null !== (wW = RW[WW]) && void 0 !== wW ? wW : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: AW.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: AW.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (CW = AW.canCreateCustomLobbies) || void 0 === CW || CW,
            countdownInformation: (0, PW.f)(WW)
          }
        }(iM.gameNameWithVariation, vR, mR)), [pR, iM.gameNameWithVariation, vR, mR]),
        [UR, ER] = (0, YW.useState)(!1),
        [VR, mM] = (0, YW.useState)((() => EW ? XR(EW, mR) : cM)),
        xM = null !== hR && void 0 !== hR ? hR : VR,
        [vM] = (0, YW.useState)(xM === cM),
        KR = (0, CW.c)(xM.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: uR,
          recentlyPlayedCustomLobbies: OR
        } = (0, YW.useMemo)((() => function(WW, RW, MW, wW) {
          var CW;
          const zR = WW => {
              const MW = (0, zM.n)(WW),
                wW = RW.find((RW => "custom" === RW.type ? RW.schematicId === MW : RW.gameNameWithVariation === WW));
              return wW ? [...wW.recentLobbies] : []
            },
            AW = (0, eW.getRecentGameNameWithVariationLobbiesKey)(WW),
            bR = null !== (CW = NW.g.getItem(AW)) && void 0 !== CW ? CW : [],
            yR = [...zR(WW), ...bR],
            BW = [];
          for (const NW of yR)(0, TR.F)(NW) && !BW.includes(NW) && BW.push(NW);
          let tR = yR;
          if (MW) {
            const WW = zR("classic_worlds"),
              RW = yR.filter((RW => !WW.includes(RW)));
            tR = [...WW, ...RW]
          }
          const TW = [],
            gR = !1 === wW ? [] : tR;
          for (const NW of gR)(0, TR.F)(NW) || TW.includes(NW) || TW.push(NW);
          return {
            recentlyPlayedPublicLobbies: BW,
            recentlyPlayedCustomLobbies: TW
          }
        }(iM.gameNameWithVariation, HW, xM.showWorldsInsteadOfCustomLobbies, xM.canCreateCustomLobbies)), [iM.gameNameWithVariation, HW, xM.showWorldsInsteadOfCustomLobbies, xM.canCreateCustomLobbies]),
        [nR, GR] = (0, YW.useState)(!0),
        [LR, HR] = (0, YW.useState)([]),
        [DR, qM] = (0, YW.useState)(null),
        [ZR, SR] = (0, YW.useState)("explore"),
        WM = (0, YW.useRef)(!1),
        RM = (0, YW.useCallback)((WW => {
          (0, JW.unstable_batchedUpdates)((() => {
            sR(WW), mM((RW => ({
              ...XR(WW, mR),
              isFavourite: RW.isFavourite
            })))
          }))
        }), [mR]);
      (0, YW.useEffect)((() => {
        null === eR.b.get("gameEntrySource") && (0, eR.f)("gameInformationPageDirect")
      }), []);
      const MM = (0, YW.useRef)(null);
      (0, YW.useEffect)((() => {
        const WW = WW => {
            MM.current = WW.target instanceof Element ? WW.target.closest("a, button") : null
          },
          RW = WW => {
            "Tab" === WW.key && (MM.current = null)
          };
        return document.addEventListener("pointerdown", WW, !0), document.addEventListener("keydown", RW, !0), () => {
          document.removeEventListener("pointerdown", WW, !0), document.removeEventListener("keydown", RW, !0)
        }
      }), []), (0, FW.c)("Enter", (WW => {
        const RW = WW.target instanceof Element ? WW.target : null;
        if (WW.defaultPrevented || null !== RW && void 0 !== RW && RW.closest("input, textarea, select")) return;
        const MW = null === RW || void 0 === RW ? void 0 : RW.closest("a, button");
        MW && MW !== MM.current || (WW.preventDefault(), BM())
      })), (0, fW.c)(SW.navigateToHomePage);
      const wM = !uW.i && (uR.length > 0 || OR.length > 0),
        CM = !xM.useRejoinLastLobbyButton || 0 === uR.length,
        zw = pR && null === xM.ownerSocialPreviewWithoutLocation,
        AM = KW.getPlayerName() === (null === aM || void 0 === aM || null === (RW = aM.owner) || void 0 === RW ? void 0 : RW.name),
        bw = null !== (MW = null === (AW = xM.badges.find((WW => "event" === WW.type))) || void 0 === AW ? void 0 : AW.event) && void 0 !== MW ? MW : null,
        yw = CM ? tR.m : tR.h,
        NM = (0, hW.jsx)(BW.e, {
          tooltipInner: (0, hW.jsx)("div", {
            children: mR("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, hW.jsx)(yw, {
            className: "GameInformationButton",
            padDefaultFocus: CM,
            showPress: !0,
            onClick: () => {
              BM()
            },
            children: (0, hW.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [CM && (0, hW.jsxs)(hW.Fragment, {
                children: [(0, hW.jsx)(GW.e, {
                  name: "play"
                }), " "]
              }), mR("homePage:quickPlay")]
            })
          })
        });
      (0, YW.useEffect)((() => {
        if (!pR || OW) return;
        let WW = !0;
        const RW = (0, zM.n)(iM.gameNameWithVariation);
        return kR.c.getGame(KW, RW).then((RW => {
          WW && RM(RW)
        })).catch((RW => {
          console.error("Failed to get Custom Game information", RW), WW && (0, SW.navigateToHomePage)()
        })), kR.c.getFavouriteGames(KW).then((MW => {
          WW && mM((WW => ({
            ...WW,
            isFavourite: MW.includes(RW)
          })))
        })).catch((RW => {
          console.error("Failed to get favourite games", RW), WW && ER(!0)
        })), () => {
          WW = !1
        }
      }), [pR, OW, iM.gameNameWithVariation, RM, KW]);
      const eM = !pR && null === hR;

      function BM(WW) {
        DW((0, IW.d)(iM.gameNameWithVariation, WW))
      }(0, YW.useEffect)((() => {
        eM && (0, SW.navigateToHomePage)()
      }), [eM]), (0, YW.useEffect)((() => {
        !1 !== xM.canCreateCustomLobbies && null !== xM.showWorldsInsteadOfCustomLobbies && (uW.i || !1 !== OW || (GR(!0), kR.c.getFavouriteLobbies(KW).then((WW => {
          qM(WW)
        })), kR.c.getOpenCustomLobbies(KW, {
          gameNameWithVariation: xM.showWorldsInsteadOfCustomLobbies ? "classic" : iM.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === ZR,
          onlyFavouriteLobbies: "favourite" === ZR
        }).then((WW => {
          FR.current && HR(WW)
        })).catch((WW => {})).finally((() => {
          FR.current && GR(!1)
        }))))
      }), [OW, iM, ZR, xM.showWorldsInsteadOfCustomLobbies, xM.canCreateCustomLobbies, FR, KW]);
      const tw = (0, YW.useCallback)((async WW => {
          try {
            if (!DR) return;
            DR.includes(WW) ? (kR.c.unfavouriteLobby(KW, WW), qM(DR.filter((RW => RW !== WW)))) : (kR.c.favouriteLobby(KW, WW).catch((WW => {
              console.error("Failed to favourite lobby", WW)
            })), qM([...DR, WW]))
          } catch (RW) {
            console.error("Failed to like lobby", RW)
          }
        }), [KW, DR]),
        TM = (null === aM || void 0 === aM ? void 0 : aM.schematicId) === (0, zM.n)(CR.gameNameWithVariation) ? aM : null,
        gw = TM && (0, xR.I)(CR.gameNameWithVariation, (WW => mR(WW)), TM);
      (0, WR.e)(TM && (0, xR.z)(CR.gameNameWithVariation, TM));
      const iw = !uW.i && LW.featureFlags.canUseCustomLobbies && !0 === xM.canCreateCustomLobbies,
        YM = (0, hW.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, hW.jsx)(nW, {
            gameNameWithVariation: iM.gameNameWithVariation
          })
        });
      return (0, hW.jsx)(hW.Fragment, {
        children: (0, hW.jsxs)("article", {
          className: gR()("GameInformation", {
            GameInformationFadeIn: vM,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (TW = xM.countdownInformation) || void 0 === TW ? void 0 : TW.type)
          }),
          children: [gw && (0, hW.jsx)(oW.e, {
            meta: gw
          }), (0, hW.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, hW.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, hW.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, hW.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, hW.jsx)("div", {
                  className: gR()("GameInformationTopBackgroundImage", bR.g),
                  style: (0, bR.c)(KR),
                  children: (0, hW.jsx)(bR.b, {
                    image: KR
                  })
                })]
              }), (0, hW.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, hW.jsx)(JR.b, {}), (0, hW.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, hW.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, hW.jsxs)("div", {
                      className: gR()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: zw
                      }),
                      children: [xM.badges.map((WW => (0, hW.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${WW.type}`,
                        children: (0, hW.jsx)(XW.d, {
                          badge: WW
                        })
                      }, WW.type))), pR && (0, hW.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, hW.jsx)(cR.c, {
                          text: (0, wW.cb)({
                            type: "playerCrafted"
                          })
                        })
                      }), xM.category && (0, hW.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, hW.jsx)(cR.c, {
                          text: [{
                            str: (0, wW.fb)(xM.category).toUpperCase()
                          }]
                        })
                      }), null !== xM.ccu && (0, hW.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, hW.jsx)(GW.e, {
                          name: "user"
                        }), (0, TR.I)(xM.ccu), " online"]
                      }), null !== xM.ownerSocialPreviewWithoutLocation && (0, hW.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, hW.jsx)("span", {
                          children: "Made by"
                        }), (0, hW.jsx)(dW.e, {
                          playerSocialPreview: {
                            ...xM.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), zw && (0, hW.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, hW.jsx)("span", {
                          children: "Made by"
                        }), (0, hW.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== xM.favourites && (null !== xM.isFavourite || pR && !UR) && (0, hW.jsx)(tR.s, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== WM.current && (WM.current = !0, null !== xM.isFavourite)) {
                              const WW = (0, zM.n)(iM.gameNameWithVariation);
                              let RW;
                              xM.isFavourite ? (RW = -1, kR.c.unfavouriteGame(KW, WW).catch((WW => {
                                console.error("Failed to get unfavourite game", WW)
                              })).finally((() => {
                                WM.current = !1
                              }))) : (RW = 1, kR.c.favouriteGame(KW, WW).catch((WW => {
                                console.error("Failed to get favourite game", WW)
                              })).finally((() => {
                                WM.current = !1
                              }))), mM((WW => ({
                                ...WW,
                                isFavourite: !WW.isFavourite
                              }))), mM((WW => ({
                                ...WW,
                                favourites: WW.favourites + RW
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (jR = xM.isFavourite) && void 0 !== jR && jR,
                        disabled: null === xM.isFavourite,
                        className: gR()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === xM.isFavourite
                        })
                      }, null === xM.isFavourite ? "pending" : "known"), pR && !zw && LW.featureFlags.useSocialFeatures && !AM && (0, hW.jsx)(IR.d, {
                        targetType: "customGame",
                        targetId: (0, zM.n)(iM.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (KW.playerHasRank("developer") || KW.playerHasRank("admin") && AM) && (0, hW.jsxs)(tR.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          DW((0, yM.m)((0, bM.f)(iM.gameNameWithVariation, !0)))
                        },
                        children: [(0, hW.jsx)(GW.e, {
                          name: "star-christmas"
                        }), " ", mR("studio:viewInStudio")]
                      }), pR && KW.playerHasRank("developer") && (0, hW.jsxs)(tR.h, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, gM.b)({
                            schematicId: (0, zM.n)(iM.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, hW.jsx)(GW.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), pR && KW.playerHasRank("developer") && (0, hW.jsxs)(tR.h, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          MR.NotificationProvider.showCustomPopup({
                            body: () => (0, hW.jsx)(YR, {
                              schematicId: (0, zM.n)(iM.gameNameWithVariation),
                              gameName: xM.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, hW.jsx)(GW.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (aR = xM.countdownInformation) || void 0 === aR ? void 0 : aR.type) && (0, hW.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, hW.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, hW.jsx)(QW.c, {
                            toTime: xM.countdownInformation.countdownToTime
                          })]
                        }), (0, hW.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: xM.countdownInformation.previewText
                        })]
                      })]
                    }, zw ? "pending" : "shown"), (0, hW.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, hW.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, hW.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [xM.title, " ", xM.variationTitle && (null === (sW = tM.b[iM.gameNameWithVariation]) || void 0 === sW ? void 0 : sW.variationThumbnailUseBigRatio) && (0, hW.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: xM.variationTitle
                          })]
                        })
                      }), xM.listedVariations && xM.listedVariations.length > 0 && (0, hW.jsx)("div", {
                        className: gR()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (pW = tM.b[iM.gameNameWithVariation]) || void 0 === pW ? void 0 : pW.variationThumbnailUseBigRatio
                        }),
                        children: xM.listedVariations.map((WW => {
                          var RW, MW;
                          return (0, hW.jsxs)(dR, {
                            variation: WW,
                            isSelected: iM.gameNameWithVariation === WW,
                            children: [null !== vR && (0, hW.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, hW.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, hW.jsx)(GW.e, {
                                  name: "user"
                                }), " ", (0, TR.I)(null !== (RW = vR[WW]) && void 0 !== RW ? RW : 0)]
                              })
                            }), (0, hW.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: mR(null !== (MW = tM.b[WW].variationTitle) && void 0 !== MW ? MW : tM.b[WW].title)
                            }), (0, hW.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, eW.filterBadges)(tM.b[WW].badges).map((WW => (0, hW.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + WW.type,
                                children: (0, hW.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, hW.jsx)(XW.d, {
                                    badge: WW
                                  })
                                })
                              }, WW.type)))
                            })]
                          }, WW)
                        }))
                      })]
                    }), xM.description && (0, hW.jsx)("p", {
                      className: "GameInformationDescription",
                      children: xM.description
                    })]
                  }), (0, hW.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, hW.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!uW.i && !CM && (0, hW.jsx)(BW.e, {
                        tooltipInner: (0, hW.jsx)("div", {
                          children: mR("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, hW.jsx)(tR.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            BM(uR[0])
                          },
                          children: (0, hW.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, hW.jsx)(GW.e, {
                              name: "play"
                            }), " ", mR("homePage:rejoinLobbyNumber", {
                              number: uR[0]
                            })]
                          })
                        })
                      }), !uW.i && CM && NM]
                    }), (0, hW.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!uW.i && !CM && NM, (0, hW.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, hW.jsx)(GW.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, hW.jsx)(iR.e, {
                          className: "JoinLobbyInput",
                          placeholderText: mR("homePage:lobbyName"),
                          maxLength: TR.H,
                          domRef: kM,
                          onValueChange: WW => {
                            WW = (0, TR.lb)(WW), QR(WW)
                          },
                          onEnter: () => {
                            0 === fR.length ? BM(uR[0]) : BM(fR)
                          }
                        }), (0, hW.jsx)(tR.h, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === fR.length ? BM(uR[0]) : BM(fR)
                          },
                          children: mR("general:join")
                        })]
                      })]
                    }), (0, hW.jsxs)("section", {
                      className: gR()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !wM
                      }),
                      children: [(0, hW.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, hW.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, hW.jsx)(GW.e, {
                            name: "clock-rotate-left"
                          }), wM && (0, hW.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: mR("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, hW.jsx)(oR.e, {
                        lobbyGroups: [uR, OR],
                        onLobbyClick: WW => {
                          BM(WW)
                        },
                        keyPrefix: iM.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== bw && (0, hW.jsx)(VW, {
                eventName: bw
              })]
            }), iw && (0, hW.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, hW.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, hW.jsxs)("div", {
                  className: gR()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === xM.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === xM.showWorldsInsteadOfCustomLobbies && (0, hW.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, hW.jsx)(GW.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, hW.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, hW.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), mR("game:worlds")]
                    })]
                  }), !1 === xM.showWorldsInsteadOfCustomLobbies && (0, hW.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, hW.jsx)(GW.e, {
                      name: "joystick"
                    }), (0, hW.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, hW.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), mR("homePage:customLobbies")]
                    })]
                  }), (0, hW.jsx)(tR.O, {
                    onClick: () => {
                      SR("explore")
                    },
                    active: "explore" === ZR,
                    children: mR("general:explore")
                  }), (0, hW.jsx)(tR.O, {
                    onClick: () => {
                      SR("favourite")
                    },
                    active: "favourite" === ZR,
                    children: mR("homePage:favouriteLobbies")
                  }), (0, hW.jsx)(tR.O, {
                    onClick: () => {
                      SR("owned")
                    },
                    active: "owned" === ZR,
                    children: mR("homePage:ownedLobbies")
                  })]
                }), (0, hW.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, hW.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, hW.jsx)(PR.e, {
                      label: "Create",
                      onClick: () => {
                        MR.NotificationProvider.showCustomPopup({
                          body: WW => (0, hW.jsx)(wR.CreateCustomLobby, {
                            gameNameWithVariation: iM.gameNameWithVariation,
                            close: WW
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === nR && (0, hW.jsx)(PR.j, {}), !1 === nR && LR.length > 0 && LR.map((WW => (0, hW.jsx)(PR.i, {
                      customLobby: WW,
                      favouriteLobbies: DR,
                      toggleLikeLobby: tw,
                      showReport: LW.featureFlags.useSocialFeatures && "owned" !== ZR
                    }, WW.name)))]
                  }), YM]
                })]
              })
            })]
          }), !iw && YM]
        })
      })
    }

    function dR(WW) {
      let {
        variation: RW,
        isSelected: MW,
        children: wW
      } = WW;
      const yR = tM.b[RW],
        eW = (0, zR.k)(RW, (0, zR.l)(yR)),
        BW = (0, CW.c)(eW),
        tR = (0, AW.c)([(0, zR.i)(RW, (0, zR.b)(yR))]);
      return (0, hW.jsxs)(SW.LinkPreserveSearch, {
        to: (0, xR.z)(RW),
        replace: !0,
        className: gR()("GameInformationVariation", bR.g, {
          SelectedGameInformationVariation: MW
        }),
        onClick: WW => {
          if (!(0, RR.d)(WW)) return;
          const MW = (0, PW.i)(RW);
          NW.g.setItem(MW, RW)
        },
        onMouseEnter: tR.start,
        onMouseLeave: tR.cancel,
        onFocus: tR.start,
        onBlur: tR.cancel,
        style: (0, bR.c)(BW),
        children: [(0, hW.jsx)(bR.b, {
          image: BW
        }), wW]
      })
    }
  },
  5507: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => JW
    });
    var wW = MW(75),
      CW = MW(1255),
      zR = MW(1314),
      AW = MW(2592),
      bR = MW(969),
      yR = MW(1157),
      NW = MW(1180),
      eW = MW(904),
      BW = MW(897),
      tR = MW.n(BW),
      TW = MW(940);

    function gR(WW) {
      let {
        info: RW,
        className: MW
      } = WW;
      return (0, TW.jsxs)("div", {
        className: tR()("GameApprovalInfoDetails", MW),
        children: [(0, TW.jsxs)("div", {
          className: tR()("GameApprovalInfoSummary", RW.overallPassed ? "Passed" : "Failed"),
          children: [(0, TW.jsx)(eW.e, {
            name: RW.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, TW.jsx)("span", {
            children: RW.summary
          })]
        }), RW.rows.length > 0 && (0, TW.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: RW.rows.map((WW => (0, TW.jsxs)("div", {
            className: tR()("GameApprovalInfoRow", WW.passed ? "Passed" : "Failed"),
            children: [(0, TW.jsx)(eW.e, {
              name: WW.passed ? "check" : "xmark"
            }), (0, TW.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, TW.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: WW.label
              }), (0, TW.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: WW.valueText
              })]
            })]
          }, WW.label)))
        })]
      })
    }
    var iR = MW(1027),
      YW = MW(1166);

    function JW(WW) {
      YW.NotificationProvider.showCustomPopup({
        body: () => (0, TW.jsx)(PW, {
          ...WW
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function PW(WW) {
      let {
        schematicId: RW,
        canOverride: MW,
        onApprovalChanged: BW
      } = WW;
      const {
        t: tR
      } = (0, iR.C)(), {
        userContext: YW
      } = (0, bR.c)(), JW = (0, AW.e)(), [PW, IW] = (0, wW.useState)(null), [oW, lW] = (0, wW.useState)(null), [FW, fW] = (0, wW.useState)(!1), QW = (0, wW.useCallback)((() => {
        lW(null), zR.c.getGameApprovalInfo(YW, RW).then((WW => {
          JW.current && IW(WW)
        })).catch((WW => {
          console.error("Failed to get game approval info", WW), JW.current && lW(tR("studio:approvalLoadFailed"))
        }))
      }), [YW, RW, JW, tR]);
      (0, wW.useEffect)((() => {
        QW()
      }), [QW]);
      const rR = WW => {
        FW || (fW(!0), zR.c.setGameApproval(YW, RW, WW).then((() => {
          null === BW || void 0 === BW || BW(), JW.current && QW()
        })).catch((WW => {
          console.error("Failed to set game approval", WW)
        })).finally((() => {
          JW.current && fW(!1)
        })))
      };
      return (0, TW.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, TW.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: tR("studio:approvalTitle")
        }), !PW && !oW && (0, TW.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, TW.jsx)(yR.d, {})
        }), oW && (0, TW.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: oW
        }), PW && (0, TW.jsxs)(TW.Fragment, {
          children: [(0, TW.jsx)(gR, {
            info: PW
          }), MW && (0, TW.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== PW.manualOverride && (0, TW.jsx)(NW.e, {
              tooltipInner: (0, TW.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, TW.jsxs)(CW.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  rR(!0)
                },
                disabled: FW,
                children: [(0, TW.jsx)(eW.e, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== PW.manualOverride && (0, TW.jsx)(NW.e, {
              tooltipInner: (0, TW.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, TW.jsxs)(CW.E, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  rR(!1)
                },
                disabled: FW,
                children: [(0, TW.jsx)(eW.e, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== PW.manualOverride && (0, TW.jsx)(NW.e, {
              tooltipInner: (0, TW.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, TW.jsxs)(CW.h, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  rR(null)
                },
                disabled: FW,
                children: [(0, TW.jsx)(eW.e, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  7775: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(1379),
      CW = MW(1053),
      zR = MW(564);

    function AW(WW) {
      return WW = function(WW, RW) {
        var MW;
        const wW = new URLSearchParams(RW),
          CW = wW.get("lobby"),
          zR = wW.get("vm"),
          AW = null !== (MW = CW) && void 0 !== MW ? MW : WW.lobbyName,
          bR = null !== zR && void 0 !== zR ? zR : WW.directJoinVmUrl;
        if (AW === WW.lobbyName && bR === WW.directJoinVmUrl) return WW;
        return {
          ...WW,
          lobbyName: AW,
          directJoinVmUrl: bR
        }
      }(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), WW = function(WW) {
        if ((0, zR.S)(WW.directJoinVmUrl)) return WW;
        const RW = (0, CW.U)(WW.directJoinVmUrl);
        null === RW && (WW.directJoinVmUrl = void 0);
        return WW
      }(WW = function(WW) {
        if ((0, zR.S)(WW.gameNameWithVariation)) return WW;
        return WW.gameNameWithVariation = (0, wW.i)(WW.gameNameWithVariation), WW
      }(WW))
    }
  },
  34660: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW,
      c: () => wW
    });
    const wW = "skyblockSkills",
      CW = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);