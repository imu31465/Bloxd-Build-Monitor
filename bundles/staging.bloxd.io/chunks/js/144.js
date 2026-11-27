export const id = 144;
export const ids = [144, 714];
export const modules = {
  37468: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => Di
    });
    var mW = OW(327),
      EW = OW(4746),
      NW = OW(4787),
      PW = OW(4779),
      LW = OW(4776),
      cW = OW(1172),
      wW = OW(39),
      tW = OW(1856),
      ZW = OW(1434),
      xW = OW(1532),
      lW = OW(1089),
      AW = OW.n(lW),
      bW = OW(1782),
      jW = OW(62),
      UW = OW(80),
      kW = OW(3245),
      sW = OW(1365),
      MW = OW(1713),
      KW = OW(1107),
      SW = OW(4619),
      YW = OW(5261),
      yW = OW(3582),
      TW = OW(2021),
      JW = OW(4738),
      hW = OW(1873),
      HW = OW(1584),
      nW = OW(2991),
      uW = OW(1383),
      oW = OW(3610),
      dW = OW(4171),
      eW = OW(1283);
    const vW = 15e3,
      gW = 2500;

    function DW(WW) {
      var iW;
      let {
        eventName: OW
      } = WW;
      const {
        t: mW
      } = (0, cW.B)(), EW = hW.d[OW], [NW, PW] = (0, jW.useState)((() => Date.now() >= EW.endsAt.getTime())), [LW, wW] = (0, jW.useState)("overall"), tW = function(WW, iW) {
        const {
          userContext: OW,
          isUserContextUpdating: mW
        } = (0, KW.e)(), EW = `${WW}:${iW}`, [NW, PW] = (0, jW.useState)({
          requestKey: EW,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, jW.useEffect)((() => {
          if (mW) return;
          let NW, LW = !1;
          const cW = async () => {
            if ("visible" === document.visibilityState) try {
              const mW = await HW.e.getGameEventLeaderboard(OW, {
                event: WW,
                scope: iW
              });
              LW || PW({
                requestKey: EW,
                leaderboard: {
                  status: "loaded",
                  leaderboard: mW
                }
              })
            } catch {
              LW || PW((WW => WW.requestKey === EW && "loaded" === WW.leaderboard.status ? WW : {
                requestKey: EW,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            LW || (NW = setTimeout(cW, vW))
          };
          return cW(), () => {
            LW = !0, clearTimeout(NW)
          }
        }), [WW, iW, EW, OW, mW]), NW.requestKey === EW ? NW.leaderboard : {
          status: "loading"
        }
      }(OW, LW), ZW = function(WW) {
        const iW = (0, jW.useRef)(null),
          OW = (0, jW.useRef)(0),
          mW = (0, jW.useRef)(),
          [EW, NW] = (0, jW.useState)({});
        return (0, jW.useEffect)((() => {
          const EW = null === WW || void 0 === WW ? void 0 : WW.entries;
          if (!EW) return;
          const PW = new Map(EW.map((WW => [WW.player.name, WW.value]))),
            LW = iW.current;
          if (iW.current = PW, null === LW) return;
          const cW = {};
          for (const [WW, iW] of PW) {
            const mW = LW.get(WW);
            void 0 !== mW && iW > mW && (cW[WW] = {
              amount: iW - mW,
              key: OW.current++
            })
          }
          0 !== Object.keys(cW).length && (NW(cW), clearTimeout(mW.current), mW.current = setTimeout((() => {
            NW({})
          }), gW))
        }), [WW]), (0, jW.useEffect)((() => () => {
          clearTimeout(mW.current)
        }), []), EW
      }("loaded" === tW.status ? tW.leaderboard : null), xW = function(WW) {
        const [iW, OW] = (0, jW.useState)(null), mW = "loaded" === WW.status ? WW.leaderboard.goalProgress : void 0;
        return (0, jW.useEffect)((() => {
          mW && OW(mW)
        }), [mW]), iW
      }(tW), lW = nW.d[`profileEffect_${EW.prizePack}`];
      if (NW) return null;
      const bW = "loaded" === tW.status ? tW.leaderboard : null,
        UW = null !== (iW = null === bW || void 0 === bW ? void 0 : bW.entries) && void 0 !== iW ? iW : null,
        kW = null !== bW && void 0 !== bW && bW.own && null !== UW && !UW.some((WW => WW.isOwn)) ? bW.own : null;
      return (0, eW.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, eW.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, eW.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, eW.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, eW.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, eW.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), mW("gameEvents:live")]
              }), (0, eW.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [mW("gameEvents:endsIn"), (0, eW.jsx)(yW.c, {
                  toTime: EW.endsAt,
                  onReachEndOfCountdown: () => {
                    PW(!0)
                  }
                })]
              })]
            }), (0, eW.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: mW(EW.titleKey)
            }), (0, eW.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, eW.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [lW && (0, eW.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, eW.jsx)(lW, {})
                }), (0, eW.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, eW.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: mW("gameEvents:prize")
                  }), (0, eW.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: mW(EW.prizeNameKey)
                  })]
                })]
              }), (0, eW.jsx)(VW, {
                event: EW,
                progress: xW
              })]
            })]
          }), (0, eW.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, eW.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, eW.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: mW(EW.leaderboard.titleKey)
              }), (0, eW.jsx)(dW.c, {
                ariaLabel: mW("gameEvents:leaderboardScope"),
                options: hW.c.map((WW => ({
                  value: WW,
                  label: mW(`gameEvents:${WW}Scope`)
                }))),
                value: LW,
                onChange: wW
              })]
            }), "loading" === tW.status && (0, eW.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, eW.jsx)(uW.d, {})
            }), ("unavailable" === tW.status || "loaded" === tW.status && null === UW) && (0, eW.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: mW("gameEvents:leaderboardUnavailable")
            }), null !== UW && 0 === UW.length && (0, eW.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: mW("friends" === LW ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== UW && UW.length > 0 && (0, eW.jsx)("ol", {
              className: "GameEventPanelRows",
              children: UW.map((WW => {
                const iW = ZW[WW.player.name];
                return (0, eW.jsxs)("li", {
                  className: AW()("GameEventPanelRow", {
                    GameEventPanelRowOwn: WW.isOwn,
                    GameEventPanelRowTop: WW.rank <= 3
                  }),
                  children: [(0, eW.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", WW.rank]
                  }), (0, eW.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, eW.jsx)(oW.g, {
                      playerSocialPreview: {
                        ...WW.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== iW && (0, eW.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", iW.amount.toLocaleString()]
                  }, iW.key), (0, eW.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: WW.value.toLocaleString()
                  })]
                }, WW.player.name)
              }))
            }), kW && (0, eW.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, eW.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", kW.rank.toLocaleString()]
              }), (0, eW.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: mW("gameEvents:yourPlace")
              }), (0, eW.jsx)("span", {
                className: "GameEventPanelScore",
                children: kW.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function VW(WW) {
      let {
        event: iW,
        progress: OW
      } = WW;
      const {
        t: mW
      } = (0, cW.B)(), EW = null !== OW && iW.prizeGoals.some(((WW, iW) => OW[iW] >= WW.target));
      return (0, eW.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, eW.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: mW(EW ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, eW.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: iW.prizeGoals.map(((WW, iW) => {
            const EW = null === OW ? null : Math.min(OW[iW], WW.target);
            return (0, eW.jsxs)(jW.Fragment, {
              children: [iW > 0 && (0, eW.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: mW("gameEvents:goalsOr")
              }), (0, eW.jsxs)("div", {
                className: AW()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: EW === WW.target
                }),
                children: [(0, eW.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: mW(WW.labelKey)
                }), (0, eW.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, eW.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== EW && void 0 !== EW ? EW : 0) / WW.target * 100 + "%"
                    }
                  }), null !== EW && (0, eW.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [EW.toLocaleString(), " / ", WW.target.toLocaleString()]
                  })]
                })]
              })]
            }, WW.board)
          }))
        })]
      })
    }
    var pW = OW(1642),
      fW = OW(1697),
      CW = OW(1078),
      XW = OW(754),
      BW = OW(4718);

    function qW(WW) {
      let {
        gameNameWithVariation: iW
      } = WW;
      const OW = (0, pW.B)(iW),
        [mW, EW] = (0, jW.useState)(null);
      if ((0, jW.useEffect)((() => {
          if (!OW) return;
          let WW = !0;
          return (0, fW.g)(OW).then((iW => {
            WW && EW(iW)
          })).catch((WW => {
            console.error(`Failed to load the page copy for ${OW.name}`, WW)
          })), () => {
            WW = !1
          }
        }), [OW]), !OW || !mW || mW.name !== OW.name) return null;
      const NW = (0, fW.d)(mW),
        PW = new Set((0, CW.c)((0, XW.p)()).map((WW => (0, pW.u)(WW)))),
        LW = mW.similarGames.filter((WW => PW.has((0, pW.u)(WW))));
      return (0, eW.jsx)("div", {
        className: "GamePageContent",
        children: (0, eW.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, eW.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, eW.jsx)("h2", {
              children: NW.whatIs
            }), mW.whatIs.map((WW => (0, eW.jsx)("p", {
              children: WW
            }, WW)))]
          }), (0, eW.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, eW.jsx)("h2", {
              children: NW.howToPlay
            }), mW.howToPlay.map((WW => (0, eW.jsx)("p", {
              children: WW
            }, WW)))]
          }), (0, eW.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, eW.jsx)("h2", {
              children: NW.features
            }), (0, eW.jsx)("ul", {
              children: mW.features.map((WW => (0, eW.jsx)("li", {
                children: WW
              }, WW)))
            })]
          }), (0, eW.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, eW.jsx)("h2", {
              children: NW.tips
            }), (0, eW.jsx)("ul", {
              children: mW.tips.map((WW => (0, eW.jsx)("li", {
                children: WW
              }, WW)))
            })]
          }), (0, eW.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, eW.jsx)("h2", {
              children: NW.faq
            }), mW.faq.map((WW => {
              let {
                question: iW,
                answer: OW
              } = WW;
              return (0, eW.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, eW.jsx)("h3", {
                  children: iW
                }), (0, eW.jsx)("p", {
                  children: OW
                })]
              }, iW)
            }))]
          }), LW.length > 0 && (0, eW.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, eW.jsx)("h2", {
              children: NW.similarGames
            }), (0, eW.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: LW.map((WW => (0, eW.jsx)("li", {
                children: (0, eW.jsx)(BW.d, {
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
    var RW = OW(1391),
      GW = OW(100),
      IW = OW(1111),
      aW = OW(35272),
      rW = OW(1747),
      zW = OW(1616),
      FW = OW(1605),
      QW = OW(1707),
      Wi = OW(1544),
      ii = OW(1422),
      Oi = OW(37474),
      mi = OW(1223),
      Ei = OW(1052),
      Ni = OW(344),
      Pi = OW(1065),
      Li = OW(1638),
      ci = OW(10206),
      wi = OW(25),
      ti = OW(3488),
      Zi = OW(805),
      xi = OW(1217),
      li = OW(7485),
      Ai = OW(4723);

    function bi(WW) {
      let {
        preview: iW,
        isBroken: OW
      } = WW;
      const mW = null === iW ? null : (0, NW.f)(iW, "small"),
        PW = (0, EW.f)(null !== mW && void 0 !== mW ? mW : NW.t);
      return null === iW ? (0, eW.jsx)("div", {
        className: AW()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: OW
        }),
        children: (0, eW.jsx)(RW.c, {
          name: OW ? "triangle-exclamation" : "star"
        })
      }) : (0, eW.jsx)("div", {
        className: AW()("FeaturedGamesPopupSlotThumbnail", LW.j),
        style: (0, LW.f)(PW),
        role: "img",
        "aria-label": iW.name,
        children: (0, eW.jsx)(LW.b, {
          image: PW
        })
      })
    }

    function ji(WW) {
      let {
        schematicId: iW,
        gameName: OW
      } = WW;
      const {
        userContext: EW
      } = (0, KW.e)(), NW = (0, Ai.c)(), [PW, LW] = (0, jW.useState)(null), [cW, wW] = (0, jW.useState)(null), [tW, ZW] = (0, jW.useState)(!1), lW = (0, jW.useCallback)((() => {
        wW(null), HW.e.getFeaturedGames(EW).then((WW => {
          NW.current && LW(WW.slots)
        })).catch((WW => {
          console.error("Failed to get featured games", WW), NW.current && wW("Failed to load featured games")
        }))
      }), [EW, NW]);
      (0, jW.useEffect)((() => {
        lW()
      }), [lW]);
      const AW = (WW, iW) => {
        tW || (ZW(!0), HW.e.setFeaturedGame(EW, WW, iW).then((() => {
          NW.current && lW()
        })).catch((WW => {
          console.error("Failed to set featured game", WW), NW.current && wW("Failed to update the featured slot")
        })).finally((() => {
          NW.current && ZW(!1)
        })))
      };
      return (0, eW.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, eW.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !PW && !cW && (0, eW.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, eW.jsx)(uW.d, {})
        }), cW && (0, eW.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: cW
        }), PW && (0, eW.jsxs)(eW.Fragment, {
          children: [(0, eW.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: PW.map((WW => {
              const OW = WW.schematicId === iW,
                EW = null === WW.schematicId,
                {
                  categoryGroup: NW
                } = mW.H[WW.slotId];
              return (0, eW.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, eW.jsx)(bi, {
                  preview: WW.preview,
                  isBroken: !EW
                }), (0, eW.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, eW.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, mW.nb)(NW), " \xb7 position", " ", (0, mW.L)(WW.slotId, mW.Vb) + 1, " of", " ", (0, mW.Sb)(NW, mW.Vb)]
                  }), EW && (0, eW.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !EW && null !== WW.preview && (0, eW.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: WW.preview.name
                  }), !EW && null === WW.preview && (0, eW.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, eW.jsx)(RW.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, eW.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [EW && (0, eW.jsxs)(xW.s, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      AW(WW.slotId, iW)
                    },
                    disabled: tW,
                    children: [(0, eW.jsx)(RW.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !EW && !OW && (0, eW.jsxs)(xW.Z, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      AW(WW.slotId, iW)
                    },
                    disabled: tW,
                    children: [(0, eW.jsx)(RW.c, {
                      name: "star"
                    }), " Replace"]
                  }), !EW && (0, eW.jsxs)(xW.O, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      AW(WW.slotId, null)
                    },
                    disabled: tW,
                    children: [(0, eW.jsx)(RW.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, WW.slotId)
            }))
          }), (0, eW.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var Ui = OW(5413),
      ki = OW(5291),
      si = OW(4653);
    const Mi = 8,
      Ki = 12;

    function Si(WW) {
      let {
        customLobbies: iW,
        favouriteLobbies: OW,
        toggleLikeLobby: mW,
        showReport: EW
      } = WW;
      const [NW, PW] = (0, jW.useState)(Mi);
      return (0, jW.useEffect)((() => {
        if (NW >= iW.length) return;
        let WW = !0;
        return (0, si.c)().then((() => {
          WW && PW(NW + Ki)
        })), () => {
          WW = !1
        }
      }), [NW, iW.length]), (0, eW.jsx)(eW.Fragment, {
        children: iW.slice(0, NW).map((WW => (0, eW.jsx)(ki.f, {
          customLobby: WW,
          favouriteLobbies: OW,
          toggleLikeLobby: mW,
          showReport: EW
        }, WW.name)))
      })
    }
    var Yi = OW(5299),
      yi = OW(5310),
      Ti = OW(5274),
      Ji = OW(4811),
      Hi = OW(5368),
      ni = OW(10176),
      ui = OW(195);
    const oi = {
      skyblock: [OW(37503).d]
    };
    var di = OW(643);
    const ei = {
      listedVariations: null,
      backgroundImage: NW.t,
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

    function vi(WW, iW) {
      const OW = Zi.g[WW.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, NW.f)(WW, "large"),
        badges: [],
        category: WW.gameCategory,
        title: void 0 !== (null === OW || void 0 === OW ? void 0 : OW.title) ? iW(OW.title) : WW.name,
        variationTitle: null,
        description: void 0 !== (null === OW || void 0 === OW ? void 0 : OW.description) ? iW(OW.description) : WW.description,
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

    function gi(WW) {
      var iW, OW, mW;
      return null !== (iW = null !== (OW = (0, ui.h)() ? function(WW) {
        for (const [iW, OW] of Object.entries(oi)) {
          const mW = [iW, ...OW.map((WW => (0, Ni.Pb)(iW, WW)))];
          if (mW.includes(WW)) return mW
        }
        return null
      }(WW) : null) && void 0 !== OW ? OW : null === (mW = Zi.d[WW]) || void 0 === mW ? void 0 : mW.listedVariations) && void 0 !== iW ? iW : null
    }

    function Di() {
      const {
        gameNameWithVariation: WW
      } = (0, zW.z)();
      if ((0, jW.useEffect)(Ji.n, []), WW && (0, mi.r)(WW)) return (0, eW.jsx)(Vi, {
        urlId: WW
      }, WW);
      const iW = WW && (0, Ei.i)(WW) ? WW : "firstParty";
      return (0, eW.jsx)(Ci, {}, iW)
    }

    function Vi(WW) {
      let {
        urlId: iW
      } = WW;
      const {
        t: OW
      } = (0, cW.B)(), {
        userContext: mW,
        isUserContextUpdating: EW
      } = (0, KW.e)(), NW = (0, jW.useMemo)((() => (0, rW.i)(iW)), [iW]);
      (0, jW.useMemo)((() => {
        if (null === NW) return;
        const WW = IW.userContextManager.peekCurrentUserContext();
        (null !== WW ? HW.e.getGame(WW, NW.schematicId) : IW.userContextManager.getCurrentUserContext().then((WW => HW.e.getGame(WW, NW.schematicId)))).catch((WW => {
          null === (0, HW.g)(WW) && console.error(`Failed to get the custom game ${NW.schematicId}`, WW), (0, rW.f)(iW)
        }))
      }), [NW, iW]);
      const [PW, LW] = (0, jW.useState)(null), wW = (0, aW.c)();
      (0, jW.useEffect)((() => {
        if (null !== NW || EW) return;
        let WW = !0;
        return HW.e.getGameByUrlId(mW, iW).then((mW => {
          WW && (mW.takenDown ? fi(OW, mW) : LW({
            urlId: iW,
            game: mW
          }))
        })).catch((mW => {
          const EW = null !== (0, HW.g)(mW);
          EW || console.error(`Failed to find the custom game with urlId ${iW}`, mW), WW && (EW ? fi(OW, null) : (0, FW.navigateToHomePage)())
        })), () => {
          WW = !1
        }
      }), [iW, NW, EW, mW, OW]);
      const tW = null !== NW && void 0 !== NW ? NW : (null === PW || void 0 === PW ? void 0 : PW.urlId) === iW ? PW.game : null;
      return null === tW ? (0, eW.jsx)(uW.d, {}) : wW ? (0, eW.jsx)(Ci, {
        gameNameWithVariation: (0, Ei.r)(tW.schematicId),
        knownCustomGame: tW
      }, tW.schematicId) : null
    }

    function fi(WW, iW) {
      (0, FW.navigateToHomePage)(), (0, ni.c)(WW, iW)
    }

    function Ci(WW) {
      var iW, OW, PW, lW, hW, nW, uW, dW;
      let {
        gameNameWithVariation: vW,
        knownCustomGame: gW = null
      } = WW;
      const {
        t: VW
      } = (0, cW.B)();
      (0, ti.j)();
      const fW = (0, ti.m)(),
        {
          userContext: CW,
          isUserContextUpdating: XW
        } = (0, KW.e)(),
        BW = (0, Ti.h)(),
        IW = (0, FW.useNavigatePreserveSearch)(),
        aW = (0, zW.z)(),
        rW = (0, jW.useMemo)((() => vW ? {
          gameNameWithVariation: vW
        } : aW), [vW, aW]),
        Wi = (0, ci.e)(rW),
        mi = (0, jW.useMemo)((() => {
          const WW = function(WW) {
            var iW, OW;
            const mW = gi(WW);
            if (!mW || 0 === mW.length || mW.includes(WW)) return WW;
            const EW = wW.i.getItem((0, kW.l)(WW));
            if (EW && mW.includes(EW)) return EW;
            return null !== (iW = null === (OW = Zi.d[WW]) || void 0 === OW ? void 0 : OW.defaultListedVariation) && void 0 !== iW ? iW : mW[0]
          }(Wi.gameNameWithVariation);
          return WW === Wi.gameNameWithVariation ? Wi : {
            ...Wi,
            gameNameWithVariation: WW
          }
        }), [Wi]);
      (0, jW.useEffect)((() => {
        const WW = Wi.gameNameWithVariation;
        mi.gameNameWithVariation !== WW && WW !== (0, Ni.Tb)(WW) && IW((0, pW.w)(mi.gameNameWithVariation), {
          replace: !0
        })
      }), [mi.gameNameWithVariation, Wi.gameNameWithVariation, IW]);
      const [Ai, bi] = (0, jW.useState)(""), si = jW.useRef(null), [Mi, Ki] = (0, jW.useState)(), Ji = (0, Ei.i)(mi.gameNameWithVariation), ni = (0, jW.useMemo)((() => Ji ? null : function(WW, iW, OW) {
        var mW, EW;
        const PW = Zi.d[WW];
        return (0, di.K)(PW) ? null : {
          listedVariations: gi(WW),
          backgroundImage: (0, NW.n)(WW, (0, NW.c)(PW)),
          badges: (0, tW.filterBadges)(PW.badges),
          category: PW.type,
          title: OW(PW.title),
          variationTitle: PW.variationTitle ? OW(PW.variationTitle) : null,
          description: OW(PW.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== iW ? null !== (mW = iW[WW]) && void 0 !== mW ? mW : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: PW.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: PW.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (EW = PW.canCreateCustomLobbies) || void 0 === EW || EW,
          countdownInformation: (0, kW.k)(WW)
        }
      }(mi.gameNameWithVariation, fW, VW)), [Ji, mi.gameNameWithVariation, fW, VW]), [ui, oi] = (0, jW.useState)(!1), [Di, Vi] = (0, jW.useState)(null), [Ci, Bi] = (0, jW.useState)((() => gW ? vi(gW, VW) : ei)), qi = null !== ni && void 0 !== ni ? ni : Ci, [Ri] = (0, jW.useState)(qi === ei), Gi = (0, EW.f)(qi.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: Ii,
        recentlyPlayedCustomLobbies: ai
      } = (0, jW.useMemo)((() => function(WW, iW, OW, mW) {
        var EW;
        const NW = WW => {
            const OW = (0, Ei.n)(WW),
              mW = iW.find((iW => "custom" === iW.type ? iW.schematicId === OW : iW.gameNameWithVariation === WW));
            return mW ? [...mW.recentLobbies] : []
          },
          PW = (0, tW.getRecentGameNameWithVariationLobbiesKey)(WW),
          LW = null !== (EW = wW.i.getItem(PW)) && void 0 !== EW ? EW : [],
          cW = [...NW(WW), ...LW],
          ZW = [];
        for (const wW of cW)(0, xi.R)(wW) && !ZW.includes(wW) && ZW.push(wW);
        let xW = cW;
        if (OW) {
          const WW = NW("classic_worlds"),
            iW = cW.filter((iW => !WW.includes(iW)));
          xW = [...WW, ...iW]
        }
        const lW = [],
          AW = !1 === mW ? [] : xW;
        for (const wW of AW)(0, xi.R)(wW) || lW.includes(wW) || lW.push(wW);
        return {
          recentlyPlayedPublicLobbies: ZW,
          recentlyPlayedCustomLobbies: lW
        }
      }(mi.gameNameWithVariation, BW, qi.showWorldsInsteadOfCustomLobbies, qi.canCreateCustomLobbies)), [mi.gameNameWithVariation, BW, qi.showWorldsInsteadOfCustomLobbies, qi.canCreateCustomLobbies]), [ri, zi] = (0, jW.useState)(!0), [Fi, Qi] = (0, jW.useState)([]), [WO, iO] = (0, jW.useState)(null), [OO, mO] = (0, jW.useState)("explore"), EO = (0, jW.useRef)(!1), NO = (0, jW.useCallback)((WW => {
        (0, UW.unstable_batchedUpdates)((() => {
          Ki(WW), Bi((iW => ({
            ...vi(WW, VW),
            isFavourite: iW.isFavourite
          })))
        }))
      }), [VW]);
      (0, jW.useEffect)((() => {
        null === wi.d.get("gameEntrySource") && (0, wi.l)("gameInformationPageDirect")
      }), []);
      const PO = (0, jW.useRef)(null);
      (0, jW.useEffect)((() => {
        const WW = WW => {
            PO.current = WW.target instanceof Element ? WW.target.closest("a, button") : null
          },
          iW = WW => {
            "Tab" === WW.key && (PO.current = null)
          };
        return document.addEventListener("pointerdown", WW, !0), document.addEventListener("keydown", iW, !0), () => {
          document.removeEventListener("pointerdown", WW, !0), document.removeEventListener("keydown", iW, !0)
        }
      }), []), (0, SW.c)("Enter", (WW => {
        const iW = WW.target instanceof Element ? WW.target : null;
        if (WW.defaultPrevented || null !== iW && void 0 !== iW && iW.closest("input, textarea, select")) return;
        const OW = null === iW || void 0 === iW ? void 0 : iW.closest("a, button");
        OW && OW !== PO.current || (WW.preventDefault(), bO())
      })), (0, YW.c)(FW.navigateToHomePage);
      const LO = Ii.length > 0 || ai.length > 0,
        cO = !qi.useRejoinLastLobbyButton || 0 === Ii.length,
        wO = Ji && null === qi.ownerSocialPreviewWithoutLocation,
        tO = CW.getPlayerName() === (null === Mi || void 0 === Mi || null === (iW = Mi.owner) || void 0 === iW ? void 0 : iW.name),
        ZO = null !== (OW = null === (PW = qi.badges.find((WW => "event" === WW.type))) || void 0 === PW ? void 0 : PW.event) && void 0 !== OW ? OW : null,
        xO = cO ? xW.n : xW.f,
        lO = (0, eW.jsx)(ZW.f, {
          tooltipInner: (0, eW.jsx)("div", {
            children: VW("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, eW.jsx)(xO, {
            className: "GameInformationButton",
            padDefaultFocus: cO,
            showPress: !0,
            onClick: () => {
              bO()
            },
            children: (0, eW.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [cO && (0, eW.jsxs)(eW.Fragment, {
                children: [(0, eW.jsx)(RW.c, {
                  name: "play"
                }), " "]
              }), VW("homePage:quickPlay")]
            })
          })
        });
      (0, jW.useEffect)((() => {
        if (!Ji || XW) return;
        let WW = !0;
        const iW = (0, Ei.n)(mi.gameNameWithVariation);
        return HW.e.getGame(CW, iW).then((iW => {
          WW && (iW.takenDown ? Vi({
            ownGame: iW
          }) : NO(iW))
        })).catch((iW => {
          const OW = null !== (0, HW.g)(iW);
          OW || console.error("Failed to get Custom Game information", iW), WW && (OW ? Vi({
            ownGame: null
          }) : (0, FW.navigateToHomePage)())
        })), HW.e.getFavouriteGames(CW).then((OW => {
          WW && Bi((WW => ({
            ...WW,
            isFavourite: OW.includes(iW)
          })))
        })).catch((iW => {
          console.error("Failed to get favourite games", iW), WW && oi(!0)
        })), () => {
          WW = !1
        }
      }), [Ji, XW, mi.gameNameWithVariation, NO, CW]), (0, jW.useEffect)((() => {
        null !== Di && fi(VW, Di.ownGame)
      }), [Di, VW]);
      const AO = !Ji && null === ni;

      function bO(WW) {
        (0, Hi.g)(), IW((0, sW.e)(mi.gameNameWithVariation, WW))
      }(0, jW.useEffect)((() => {
        AO && (0, FW.navigateToHomePage)()
      }), [AO]), (0, jW.useEffect)((() => {
        if (!1 === qi.canCreateCustomLobbies) return;
        let WW = !0;
        return null !== qi.showWorldsInsteadOfCustomLobbies && !1 === XW && (zi(!0), HW.e.getFavouriteLobbies(CW).then((WW => {
          iO(WW)
        })), HW.e.getOpenCustomLobbies(CW, {
          gameNameWithVariation: qi.showWorldsInsteadOfCustomLobbies ? "classic" : mi.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === OO,
          onlyFavouriteLobbies: "favourite" === OO
        }).then((iW => {
          WW && (0, UW.unstable_batchedUpdates)((() => {
            Qi(iW), zi(!1)
          }))
        })).catch((iW => {
          console.error("Failed to get open custom lobbies", iW), WW && zi(!1)
        }))), () => {
          WW = !1
        }
      }), [XW, mi, OO, qi.showWorldsInsteadOfCustomLobbies, qi.canCreateCustomLobbies, CW]);
      const jO = (0, jW.useCallback)((async WW => {
          try {
            if (!WO) return;
            WO.includes(WW) ? (HW.e.unfavouriteLobby(CW, WW), iO(WO.filter((iW => iW !== WW)))) : (HW.e.favouriteLobby(CW, WW).catch((WW => {
              console.error("Failed to favourite lobby", WW)
            })), iO([...WO, WW]))
          } catch (iW) {
            console.error("Failed to like lobby", iW)
          }
        }), [CW, WO]),
        UO = (null === Mi || void 0 === Mi ? void 0 : Mi.schematicId) === (0, Ei.n)(Wi.gameNameWithVariation) ? Mi : null,
        kO = UO && (0, pW.D)(Wi.gameNameWithVariation, (WW => VW(WW)), UO);
      (0, QW.f)(UO && (0, pW.w)(Wi.gameNameWithVariation, UO));
      const sO = GW.featureFlags.canUseCustomLobbies && !0 === qi.canCreateCustomLobbies,
        MO = (0, eW.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, eW.jsx)(qW, {
            gameNameWithVariation: mi.gameNameWithVariation
          })
        });
      return (0, eW.jsx)(eW.Fragment, {
        children: (0, eW.jsxs)("article", {
          className: AW()("GameInformation", {
            GameInformationFadeIn: Ri,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (lW = qi.countdownInformation) || void 0 === lW ? void 0 : lW.type)
          }),
          children: [kO && (0, eW.jsx)(MW.c, {
            meta: kO
          }), (0, eW.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, eW.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, eW.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, eW.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, eW.jsx)("div", {
                  className: AW()("GameInformationTopBackgroundImage", LW.j),
                  style: (0, LW.f)(Gi),
                  children: (0, eW.jsx)(LW.b, {
                    image: Gi
                  })
                })]
              }), (0, eW.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, eW.jsx)(Ui.d, {}), (0, eW.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, eW.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, eW.jsxs)("div", {
                      className: AW()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: wO
                      }),
                      children: [qi.badges.map((WW => (0, eW.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${WW.type}`,
                        children: (0, eW.jsx)(JW.c, {
                          badge: WW
                        })
                      }, WW.type))), Ji && (0, eW.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, eW.jsx)(TW.d, {
                          text: (0, mW.fb)({
                            type: "playerCrafted"
                          })
                        })
                      }), qi.category && (0, eW.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, eW.jsx)(TW.d, {
                          text: [{
                            str: (0, mW.gb)(qi.category).toUpperCase()
                          }]
                        })
                      }), null !== qi.ccu && (0, eW.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, eW.jsx)(RW.c, {
                          name: "user"
                        }), (0, xi.V)(qi.ccu), " online"]
                      }), null !== qi.ownerSocialPreviewWithoutLocation && (0, eW.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, eW.jsx)("span", {
                          children: "Made by"
                        }), (0, eW.jsx)(oW.g, {
                          playerSocialPreview: {
                            ...qi.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), wO && (0, eW.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, eW.jsx)("span", {
                          children: "Made by"
                        }), (0, eW.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== qi.favourites && (null !== qi.isFavourite || Ji && !ui) && (0, eW.jsx)(xW.y, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== EO.current && (EO.current = !0, null !== qi.isFavourite)) {
                              const WW = (0, Ei.n)(mi.gameNameWithVariation);
                              let iW;
                              qi.isFavourite ? (iW = -1, HW.e.unfavouriteGame(CW, WW).catch((WW => {
                                console.error("Failed to get unfavourite game", WW)
                              })).finally((() => {
                                EO.current = !1
                              }))) : (iW = 1, HW.e.favouriteGame(CW, WW).catch((WW => {
                                console.error("Failed to get favourite game", WW)
                              })).finally((() => {
                                EO.current = !1
                              }))), Bi((WW => ({
                                ...WW,
                                isFavourite: !WW.isFavourite
                              }))), Bi((WW => ({
                                ...WW,
                                favourites: WW.favourites + iW
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (hW = qi.isFavourite) && void 0 !== hW && hW,
                        disabled: null === qi.isFavourite,
                        className: AW()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === qi.isFavourite
                        })
                      }, null === qi.isFavourite ? "pending" : "known"), Ji && !wO && GW.featureFlags.useSocialFeatures && !tO && (0, eW.jsx)(Yi.b, {
                        targetType: "customGame",
                        targetId: (0, Ei.n)(mi.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (CW.playerHasRank("developer") || CW.playerHasRank("admin") && tO) && (0, eW.jsxs)(xW.n, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          IW((0, Li.v)((0, Pi.e)(mi.gameNameWithVariation, !0)))
                        },
                        children: [(0, eW.jsx)(RW.c, {
                          name: "star-christmas"
                        }), " ", VW("studio:viewInStudio")]
                      }), Ji && CW.playerHasRank("developer") && (0, eW.jsxs)(xW.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, li.c)({
                            schematicId: (0, Ei.n)(mi.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, eW.jsx)(RW.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), Ji && CW.playerHasRank("developer") && (0, eW.jsxs)(xW.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          ii.NotificationProvider.showCustomPopup({
                            body: () => (0, eW.jsx)(ji, {
                              schematicId: (0, Ei.n)(mi.gameNameWithVariation),
                              gameName: qi.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, eW.jsx)(RW.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (nW = qi.countdownInformation) || void 0 === nW ? void 0 : nW.type) && (0, eW.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, eW.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, eW.jsx)(yW.c, {
                            toTime: qi.countdownInformation.countdownToTime
                          })]
                        }), (0, eW.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: qi.countdownInformation.previewText
                        })]
                      })]
                    }, wO ? "pending" : "shown"), (0, eW.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, eW.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, eW.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [qi.title, " ", qi.variationTitle && (null === (uW = Zi.d[mi.gameNameWithVariation]) || void 0 === uW ? void 0 : uW.variationThumbnailUseBigRatio) && (0, eW.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: qi.variationTitle
                          })]
                        })
                      }), qi.listedVariations && qi.listedVariations.length > 1 && (0, eW.jsx)("div", {
                        className: AW()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (dW = Zi.d[mi.gameNameWithVariation]) || void 0 === dW ? void 0 : dW.variationThumbnailUseBigRatio
                        }),
                        children: qi.listedVariations.map((WW => {
                          var iW, OW;
                          return (0, eW.jsxs)(Xi, {
                            variation: WW,
                            isSelected: mi.gameNameWithVariation === WW,
                            children: [null !== fW && (0, eW.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, eW.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, eW.jsx)(RW.c, {
                                  name: "user"
                                }), " ", (0, xi.V)(null !== (iW = fW[WW]) && void 0 !== iW ? iW : 0)]
                              })
                            }), (0, eW.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: VW(null !== (OW = Zi.d[WW].variationTitle) && void 0 !== OW ? OW : Zi.d[WW].title)
                            }), (0, eW.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, tW.filterBadges)(Zi.d[WW].badges).map((WW => (0, eW.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + WW.type,
                                children: (0, eW.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, eW.jsx)(JW.c, {
                                    badge: WW
                                  })
                                })
                              }, WW.type)))
                            })]
                          }, WW)
                        }))
                      })]
                    }), qi.description && (0, eW.jsx)("p", {
                      className: "GameInformationDescription",
                      children: qi.description
                    })]
                  }), (0, eW.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, eW.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!cO && (0, eW.jsx)(ZW.f, {
                        tooltipInner: (0, eW.jsx)("div", {
                          children: VW("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, eW.jsx)(xW.n, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            bO(Ii[0])
                          },
                          children: (0, eW.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, eW.jsx)(RW.c, {
                              name: "play"
                            }), " ", VW("homePage:rejoinLobbyNumber", {
                              number: Ii[0]
                            })]
                          })
                        })
                      }), cO && lO]
                    }), (0, eW.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!cO && lO, (0, eW.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, eW.jsx)(RW.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, eW.jsx)(bW.b, {
                          className: "JoinLobbyInput",
                          placeholderText: VW("homePage:lobbyName"),
                          maxLength: xi.T,
                          domRef: si,
                          onValueChange: WW => {
                            WW = (0, xi.Cb)(WW), bi(WW)
                          },
                          onEnter: () => {
                            0 === Ai.length ? bO(Ii[0]) : bO(Ai)
                          }
                        }), (0, eW.jsx)(xW.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === Ai.length ? bO(Ii[0]) : bO(Ai)
                          },
                          children: VW("general:join")
                        })]
                      })]
                    }), (0, eW.jsxs)("section", {
                      className: AW()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !LO
                      }),
                      children: [(0, eW.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, eW.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, eW.jsx)(RW.c, {
                            name: "clock-rotate-left"
                          }), LO && (0, eW.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: VW("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, eW.jsx)(yi.e, {
                        lobbyGroups: [Ii, ai],
                        onLobbyClick: WW => {
                          bO(WW)
                        },
                        keyPrefix: mi.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== ZO && (0, eW.jsx)(DW, {
                eventName: ZO
              })]
            }), sO && (0, eW.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, eW.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, eW.jsxs)("div", {
                  className: AW()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === qi.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === qi.showWorldsInsteadOfCustomLobbies && (0, eW.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, eW.jsx)(RW.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, eW.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, eW.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), VW("game:worlds")]
                    })]
                  }), !1 === qi.showWorldsInsteadOfCustomLobbies && (0, eW.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, eW.jsx)(RW.c, {
                      name: "joystick"
                    }), (0, eW.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, eW.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), VW("homePage:customLobbies")]
                    })]
                  }), (0, eW.jsx)(xW.Z, {
                    onClick: () => {
                      mO("explore")
                    },
                    active: "explore" === OO,
                    children: VW("general:explore")
                  }), (0, eW.jsx)(xW.Z, {
                    onClick: () => {
                      mO("favourite")
                    },
                    active: "favourite" === OO,
                    children: VW("homePage:favouriteLobbies")
                  }), (0, eW.jsx)(xW.Z, {
                    onClick: () => {
                      mO("owned")
                    },
                    active: "owned" === OO,
                    children: VW("homePage:ownedLobbies")
                  })]
                }), (0, eW.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, eW.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, eW.jsx)(ki.d, {
                      label: "Create",
                      onClick: () => {
                        ii.NotificationProvider.showCustomPopup({
                          body: WW => (0, eW.jsx)(Oi.CreateCustomLobby, {
                            gameNameWithVariation: mi.gameNameWithVariation,
                            close: WW
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === ri && (0, eW.jsx)(ki.j, {}), !1 === ri && (0, eW.jsx)(Si, {
                      customLobbies: Fi,
                      favouriteLobbies: WO,
                      toggleLikeLobby: jO,
                      showReport: GW.featureFlags.useSocialFeatures && "owned" !== OO
                    })]
                  }), MO]
                })]
              })
            })]
          }), !sO && MO]
        })
      })
    }

    function Xi(WW) {
      let {
        variation: iW,
        isSelected: OW,
        children: mW
      } = WW;
      const cW = Zi.d[iW],
        tW = (0, NW.n)(iW, (0, NW.p)(cW)),
        ZW = (0, EW.f)(tW),
        xW = (0, PW.d)([(0, NW.j)(iW, (0, NW.c)(cW))]);
      return (0, eW.jsxs)(FW.LinkPreserveSearch, {
        to: (0, pW.w)(iW),
        replace: !0,
        className: AW()("GameInformationVariation", LW.j, {
          SelectedGameInformationVariation: OW
        }),
        onClick: WW => {
          if (!(0, Wi.d)(WW)) return;
          const OW = (0, kW.l)(iW);
          wW.i.setItem(OW, iW)
        },
        onMouseEnter: xW.start,
        onMouseLeave: xW.cancel,
        onFocus: xW.start,
        onBlur: xW.cancel,
        style: (0, LW.f)(ZW),
        children: [(0, eW.jsx)(LW.b, {
          image: ZW
        }), mW]
      })
    }
  },
  7485: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => kW
    });
    var mW = OW(62),
      EW = OW(1532),
      NW = OW(1584),
      PW = OW(4723),
      LW = OW(1107),
      cW = OW(1383),
      wW = OW(1434),
      tW = OW(1391),
      ZW = OW(1089),
      xW = OW.n(ZW),
      lW = OW(7482),
      AW = OW(1283);

    function bW(WW) {
      let {
        info: iW,
        className: OW
      } = WW;
      const {
        statusText: mW,
        rowText: EW
      } = (0, lW.h)();
      return (0, AW.jsxs)("div", {
        className: xW()("GameApprovalInfoDetails", OW),
        children: [(0, AW.jsxs)("div", {
          className: xW()("GameApprovalInfoSummary", iW.overallPassed ? "Passed" : "Failed"),
          children: [(0, AW.jsx)(tW.c, {
            name: iW.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, AW.jsx)("span", {
            children: mW(iW.status)
          })]
        }), iW.rows.length > 0 && (0, AW.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: iW.rows.map((WW => {
            const {
              label: iW,
              value: OW
            } = EW(WW);
            return (0, AW.jsxs)("div", {
              className: xW()("GameApprovalInfoRow", WW.passed ? "Passed" : "Failed"),
              children: [(0, AW.jsx)(tW.c, {
                name: WW.passed ? "check" : "xmark"
              }), (0, AW.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, AW.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: iW
                }), null !== OW && (0, AW.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: OW
                })]
              })]
            }, WW.kind)
          }))
        })]
      })
    }
    var jW = OW(1172),
      UW = OW(1422);

    function kW(WW) {
      UW.NotificationProvider.showCustomPopup({
        body: () => (0, AW.jsx)(sW, {
          ...WW
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function sW(WW) {
      let {
        schematicId: iW,
        canOverride: OW,
        onApprovalChanged: ZW
      } = WW;
      const {
        t: xW
      } = (0, jW.B)(), {
        userContext: lW
      } = (0, LW.e)(), UW = (0, PW.c)(), [kW, sW] = (0, mW.useState)(null), [MW, KW] = (0, mW.useState)(null), [SW, YW] = (0, mW.useState)(!1), yW = (0, mW.useCallback)((() => {
        KW(null), NW.e.getGameApprovalInfo(lW, iW).then((WW => {
          UW.current && sW(WW)
        })).catch((WW => {
          console.error("Failed to get game approval info", WW), UW.current && KW(xW("studio:approvalLoadFailed"))
        }))
      }), [lW, iW, UW, xW]);
      (0, mW.useEffect)((() => {
        yW()
      }), [yW]);
      const TW = WW => {
        SW || (YW(!0), NW.e.setGameApproval(lW, iW, WW).then((() => {
          null === ZW || void 0 === ZW || ZW(), UW.current && yW()
        })).catch((WW => {
          console.error("Failed to set game approval", WW)
        })).finally((() => {
          UW.current && YW(!1)
        })))
      };
      return (0, AW.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, AW.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: xW("studio:approvalTitle")
        }), !kW && !MW && (0, AW.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, AW.jsx)(cW.d, {})
        }), MW && (0, AW.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: MW
        }), kW && (0, AW.jsxs)(AW.Fragment, {
          children: [(0, AW.jsx)(bW, {
            info: kW
          }), OW && (0, AW.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== kW.manualOverride && (0, AW.jsx)(wW.f, {
              tooltipInner: (0, AW.jsx)("div", {
                children: xW("studio:approvalApproveTooltip")
              }),
              children: (0, AW.jsxs)(EW.n, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  TW(!0)
                },
                disabled: SW,
                children: [(0, AW.jsx)(tW.c, {
                  name: "check"
                }), " ", xW("studio:approvalApprove")]
              })
            }), !1 !== kW.manualOverride && (0, AW.jsx)(wW.f, {
              tooltipInner: (0, AW.jsx)("div", {
                children: xW("studio:approvalDenyTooltip")
              }),
              children: (0, AW.jsxs)(EW.O, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  TW(!1)
                },
                disabled: SW,
                children: [(0, AW.jsx)(tW.c, {
                  name: "xmark"
                }), " ", xW("studio:approvalDeny")]
              })
            }), null !== kW.manualOverride && (0, AW.jsx)(wW.f, {
              tooltipInner: (0, AW.jsx)("div", {
                children: xW("studio:approvalClearOverrideTooltip")
              }),
              children: (0, AW.jsxs)(EW.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  TW(null)
                },
                disabled: SW,
                children: [(0, AW.jsx)(tW.c, {
                  name: "arrows-rotate"
                }), " ", xW("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  7482: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW,
      h: () => PW
    });
    var mW = OW(344),
      EW = OW(1172);
    const NW = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function PW() {
      const {
        t: WW,
        selectedLanguage: iW
      } = (0, EW.B)();
      return {
        statusText: iW => WW(NW[iW]),
        rowText: OW => {
          const NW = (WW, OW) => (0, mW.$)((0, EW.k)(iW.code, WW), 0, OW),
            PW = (iW, OW) => null === OW ? iW : WW("studio:approvalWithMinDays", {
              value: iW,
              days: OW
            });
          switch (OW.kind) {
            case "ownerAccountAge": {
              const iW = OW.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: WW("studio:approvalAccountAgeLabel"),
                value: PW(WW(iW, {
                  age: NW(iW, OW.accountAgeMs)
                }), OW.minAccountAgeDays)
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: WW("studio:approvalSinceUnbannedLabel"), value: PW(NW("studio:approvalSinceUnbannedLabel", OW.sinceMs), OW.minDays)
              };
            case "reportHold": {
              const {
                detail: iW
              } = OW;
              if (null === iW) return {
                label: WW("studio:approvalUnderInvestigation"),
                value: null
              };
              const mW = iW.weightedReporters.toFixed(1),
                EW = iW.threshold.toFixed(1),
                PW = WW("studio:approvalReportHoldLabel", {
                  hours: iW.windowHours
                });
              if (null === iW.heldUntil) return {
                label: PW,
                value: WW("studio:approvalReportHoldValue", {
                  weightedReporters: mW,
                  threshold: EW
                })
              };
              const LW = "studio:approvalReportHoldValueHeld";
              return {
                label: PW,
                value: WW(LW, {
                  weightedReporters: mW,
                  threshold: EW,
                  time: NW(LW, iW.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function LW(WW) {
      return null === WW.manualOverride && WW.rows.some((WW => "reportHold" === WW.kind && !WW.passed))
    }
  },
  35272: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(62),
      EW = OW(4653);

    function NW() {
      const [WW, iW] = (0, mW.useState)(!1);
      return (0, mW.useLayoutEffect)((() => {
        let WW = !0;
        return (0, EW.c)().then((() => {
          WW && iW(!0)
        })), () => {
          WW = !1
        }
      }), []), WW
    }
  },
  10176: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => jW,
      c: () => UW
    });
    var mW = OW(154),
      EW = OW(182),
      NW = OW(1052),
      PW = OW(1065),
      LW = OW(1217),
      cW = OW(2037),
      wW = OW(3245),
      tW = OW(1584),
      ZW = OW(1422),
      xW = OW(1111),
      lW = OW(10181),
      AW = OW(1605),
      bW = OW(1638);

    function jW(WW, iW) {
      const OW = !0 === iW.debugResult.gameRefused,
        NW = OW || iW.code === mW.k.REQUEST_TO_MATCHMAKING ? (0, lW.h)(iW.message) : null;
      if (null !== NW) return KW(WW, WW((0, lW.n)(NW)), WW(lW.k[NW])), !0;
      if (OW) return async function(WW) {
        const {
          gameNameWithVariation: iW,
          lobbyName: OW,
          shownLobbyName: mW
        } = cW.gameBridge.latest("connectedGame"), EW = "classic" === iW && (0, LW.M)(OW) ? mW : await (0, wW.i)(WW, iW, OW);
        return "" !== EW ? WW("general:cantJoinGame", {
          game: EW
        }) : WW("general:cantJoinThisGame")
      }(WW).then((OW => {
        KW(WW, OW, iW.message)
      })), !0;
      const {
        joinFailure: PW
      } = iW.debugResult, tW = "refused" === (null === PW || void 0 === PW ? void 0 : PW.at) ? PW.code : null;
      return tW === EW.e.schematicNotPublished.code ? (async function(WW, iW) {
        const OW = kW(),
          mW = await MW(OW);
        if (null === mW || mW.gamePublished) return void KW(WW, WW("general:cantJoinThisGame"), iW);
        await sW(WW, "rocket-launch", WW("studio:gameNotPublishedTitle", {
          game: mW.name
        }), WW("studio:publishInStudio"), OW)
      }(WW, iW.message), !0) : (tW === EW.e.schematicBanned.code || tW === EW.e.customGameTakenDown.code) && (MW(kW()).then((iW => {
        UW(WW, iW)
      })), !0)
    }

    function UW(WW, iW) {
      !0 !== (null === iW || void 0 === iW ? void 0 : iW.takenDown) ? KW(WW, WW("general:cantJoinThisGame"), EW.e.customGameTakenDown.text) : sW(WW, "lock", WW("studio:gameTakenDownTitle", {
        game: iW.name
      }), WW("studio:viewInStudio"), iW.schematicId)
    }

    function kW() {
      return (0, NW.n)(cW.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function sW(WW, iW, OW, mW, EW) {
      !0 === await ZW.NotificationProvider.showPromptPopup({
        icon: iW,
        title: OW,
        confirmText: mW,
        cancelText: WW("general:cancel")
      }).getResult() && (0, AW.navigatePreserveSearch)((0, bW.v)((0, PW.d)(EW), "manage"))
    }
    async function MW(WW) {
      try {
        return await tW.e.getGame(await xW.userContextManager.getCurrentUserContext(), WW, !0)
      } catch (iW) {
        return (0, tW.f)(iW) || console.error(`Failed to get game ${WW}`, iW), null
      }
    }

    function KW(WW, iW, OW) {
      ZW.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: iW,
        subtitle: OW,
        confirmText: WW("general:ok"),
        cancelText: ""
      })
    }
  },
  10206: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW
    });
    var mW = OW(1365),
      EW = OW(1217),
      NW = OW(643);

    function PW(WW) {
      return WW = function(WW, iW) {
        var OW;
        const mW = new URLSearchParams(iW),
          EW = mW.get("lobby"),
          NW = mW.get("vm"),
          PW = null !== (OW = EW) && void 0 !== OW ? OW : WW.lobbyName,
          LW = null !== NW && void 0 !== NW ? NW : WW.directJoinVmUrl;
        if (PW === WW.lobbyName && LW === WW.directJoinVmUrl) return WW;
        return {
          ...WW,
          lobbyName: PW,
          directJoinVmUrl: LW
        }
      }(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), WW = function(WW) {
        if ((0, NW.K)(WW.directJoinVmUrl)) return WW;
        const iW = (0, EW.fb)(WW.directJoinVmUrl);
        null === iW && (WW.directJoinVmUrl = void 0);
        return WW
      }(WW = function(WW) {
        if ((0, NW.K)(WW.gameNameWithVariation)) return WW;
        return WW.gameNameWithVariation = (0, mW.h)(WW.gameNameWithVariation), WW
      }(WW))
    }
  },
  10181: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      f: () => PW,
      h: () => LW,
      k: () => wW,
      n: () => cW
    });
    var mW = OW(182),
      EW = OW(5318);

    function NW(WW) {
      return PW(WW) === mW.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function PW(WW) {
      return "object" === typeof WW && null !== WW ? WW.code : void 0
    }

    function LW(WW) {
      var iW;
      return null !== (iW = Object.keys(EW.d).find((iW => EW.d[iW] === WW))) && void 0 !== iW ? iW : null
    }

    function cW(WW) {
      return "notWhitelisted" === WW ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const wW = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37503: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW,
      e: () => mW
    });
    const mW = "skyblockSkills",
      EW = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);