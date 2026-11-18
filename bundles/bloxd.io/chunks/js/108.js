export const id = 108;
export const ids = [108, 379];
export const modules = {
  35458: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => wc
    });
    var FJ = ZJ(227),
      UJ = ZJ(2988),
      eJ = ZJ(3026),
      XJ = ZJ(3019),
      AJ = ZJ(3017),
      qJ = ZJ(1086),
      jJ = ZJ(29),
      YJ = ZJ(1599),
      hJ = ZJ(1259),
      DJ = ZJ(1329),
      sJ = ZJ(926),
      nJ = ZJ.n(sJ),
      GJ = ZJ(1566),
      fJ = ZJ(47),
      xJ = ZJ(60),
      rJ = ZJ(2109),
      vJ = ZJ(1221),
      mJ = ZJ(1505),
      QJ = ZJ(1022),
      EJ = ZJ(2906),
      VJ = ZJ(3977),
      KJ = ZJ(2973),
      yJ = ZJ(2975),
      SJ = ZJ(1675),
      IJ = ZJ(2979),
      MJ = ZJ(1612),
      bJ = ZJ(1389),
      wJ = ZJ(1931),
      WJ = ZJ(1232),
      gJ = ZJ(2246),
      HJ = ZJ(4426),
      PJ = ZJ(990);
    const kJ = 15e3,
      pJ = 2500;

    function dJ(JJ) {
      var cJ;
      let {
        eventName: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, qJ.F)(), UJ = MJ.h[ZJ], [eJ, XJ] = (0, fJ.useState)((() => Date.now() >= UJ.endsAt.getTime())), [AJ, jJ] = (0, fJ.useState)("overall"), YJ = function(JJ, cJ) {
        const {
          userContext: ZJ,
          isUserContextUpdating: FJ
        } = (0, QJ.d)(), UJ = `${JJ}:${cJ}`, [eJ, XJ] = (0, fJ.useState)({
          requestKey: UJ,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, fJ.useEffect)((() => {
          if (FJ) return;
          let eJ, AJ = !1;
          const qJ = async () => {
            if ("visible" === document.visibilityState) try {
              const FJ = await bJ.c.getGameEventLeaderboard(ZJ, {
                event: JJ,
                scope: cJ
              });
              AJ || XJ({
                requestKey: UJ,
                leaderboard: {
                  status: "loaded",
                  leaderboard: FJ
                }
              })
            } catch {
              AJ || XJ((JJ => JJ.requestKey === UJ && "loaded" === JJ.leaderboard.status ? JJ : {
                requestKey: UJ,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            AJ || (eJ = setTimeout(qJ, kJ))
          };
          return qJ(), () => {
            AJ = !0, clearTimeout(eJ)
          }
        }), [JJ, cJ, UJ, ZJ, FJ]), eJ.requestKey === UJ ? eJ.leaderboard : {
          status: "loading"
        }
      }(ZJ, AJ), hJ = function(JJ) {
        const cJ = (0, fJ.useRef)(null),
          ZJ = (0, fJ.useRef)(0),
          FJ = (0, fJ.useRef)(),
          [UJ, eJ] = (0, fJ.useState)({});
        return (0, fJ.useEffect)((() => {
          const UJ = null === JJ || void 0 === JJ ? void 0 : JJ.entries;
          if (!UJ) return;
          const XJ = new Map(UJ.map((JJ => [JJ.player.name, JJ.value]))),
            AJ = cJ.current;
          if (cJ.current = XJ, null === AJ) return;
          const qJ = {};
          for (const [JJ, cJ] of XJ) {
            const FJ = AJ.get(JJ);
            void 0 !== FJ && cJ > FJ && (qJ[JJ] = {
              amount: cJ - FJ,
              key: ZJ.current++
            })
          }
          0 !== Object.keys(qJ).length && (eJ(qJ), clearTimeout(FJ.current), FJ.current = setTimeout((() => {
            eJ({})
          }), pJ))
        }), [JJ]), (0, fJ.useEffect)((() => () => {
          clearTimeout(FJ.current)
        }), []), UJ
      }("loaded" === YJ.status ? YJ.leaderboard : null), DJ = function(JJ) {
        const [cJ, ZJ] = (0, fJ.useState)(null), FJ = "loaded" === JJ.status ? JJ.leaderboard.goalProgress : void 0;
        return (0, fJ.useEffect)((() => {
          FJ && ZJ(FJ)
        }), [FJ]), cJ
      }(YJ), sJ = wJ.h[`profileEffect_${UJ.prizePack}`];
      if (eJ) return null;
      const GJ = "loaded" === YJ.status ? YJ.leaderboard : null,
        xJ = null !== (cJ = null === GJ || void 0 === GJ ? void 0 : GJ.entries) && void 0 !== cJ ? cJ : null,
        rJ = null !== GJ && void 0 !== GJ && GJ.own && null !== xJ && !xJ.some((JJ => JJ.isOwn)) ? GJ.own : null;
      return (0, PJ.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, PJ.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, PJ.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, PJ.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, PJ.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, PJ.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), FJ("gameEvents:live")]
              }), (0, PJ.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [FJ("gameEvents:endsIn"), (0, PJ.jsx)(KJ.e, {
                  toTime: UJ.endsAt,
                  onReachEndOfCountdown: () => {
                    XJ(!0)
                  }
                })]
              })]
            }), (0, PJ.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: FJ(UJ.titleKey)
            }), (0, PJ.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, PJ.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [sJ && (0, PJ.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, PJ.jsx)(sJ, {})
                }), (0, PJ.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, PJ.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: FJ("gameEvents:prize")
                  }), (0, PJ.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: FJ(UJ.prizeNameKey)
                  })]
                })]
              }), (0, PJ.jsx)(zJ, {
                event: UJ,
                progress: DJ
              })]
            })]
          }), (0, PJ.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, PJ.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, PJ.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: FJ(UJ.leaderboard.titleKey)
              }), (0, PJ.jsx)(HJ.b, {
                ariaLabel: FJ("gameEvents:leaderboardScope"),
                options: MJ.d.map((JJ => ({
                  value: JJ,
                  label: FJ(`gameEvents:${JJ}Scope`)
                }))),
                value: AJ,
                onChange: jJ
              })]
            }), "loading" === YJ.status && (0, PJ.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, PJ.jsx)(WJ.c, {})
            }), ("unavailable" === YJ.status || "loaded" === YJ.status && null === xJ) && (0, PJ.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: FJ("gameEvents:leaderboardUnavailable")
            }), null !== xJ && 0 === xJ.length && (0, PJ.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: FJ("friends" === AJ ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== xJ && xJ.length > 0 && (0, PJ.jsx)("ol", {
              className: "GameEventPanelRows",
              children: xJ.map((JJ => {
                const cJ = hJ[JJ.player.name];
                return (0, PJ.jsxs)("li", {
                  className: nJ()("GameEventPanelRow", {
                    GameEventPanelRowOwn: JJ.isOwn,
                    GameEventPanelRowTop: JJ.rank <= 3
                  }),
                  children: [(0, PJ.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", JJ.rank]
                  }), (0, PJ.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, PJ.jsx)(gJ.g, {
                      playerSocialPreview: {
                        ...JJ.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== cJ && (0, PJ.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", cJ.amount.toLocaleString()]
                  }, cJ.key), (0, PJ.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: JJ.value.toLocaleString()
                  })]
                }, JJ.player.name)
              }))
            }), rJ && (0, PJ.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, PJ.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", rJ.rank.toLocaleString()]
              }), (0, PJ.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: FJ("gameEvents:yourPlace")
              }), (0, PJ.jsx)("span", {
                className: "GameEventPanelScore",
                children: rJ.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function zJ(JJ) {
      let {
        event: cJ,
        progress: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, qJ.F)(), UJ = null !== ZJ && cJ.prizeGoals.some(((JJ, cJ) => ZJ[cJ] >= JJ.target));
      return (0, PJ.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, PJ.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: FJ(UJ ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, PJ.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: cJ.prizeGoals.map(((JJ, cJ) => {
            const UJ = null === ZJ ? null : Math.min(ZJ[cJ], JJ.target);
            return (0, PJ.jsxs)(fJ.Fragment, {
              children: [cJ > 0 && (0, PJ.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: FJ("gameEvents:goalsOr")
              }), (0, PJ.jsxs)("div", {
                className: nJ()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: UJ === JJ.target
                }),
                children: [(0, PJ.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: FJ(JJ.labelKey)
                }), (0, PJ.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, PJ.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== UJ && void 0 !== UJ ? UJ : 0) / JJ.target * 100 + "%"
                    }
                  }), null !== UJ && (0, PJ.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [UJ.toLocaleString(), " / ", JJ.target.toLocaleString()]
                  })]
                })]
              })]
            }, JJ.board)
          }))
        })]
      })
    }
    var NJ = ZJ(1447),
      OJ = ZJ(1480),
      TJ = ZJ(917),
      CJ = ZJ(578),
      uJ = ZJ(2969);

    function iJ(JJ) {
      let {
        gameNameWithVariation: cJ
      } = JJ;
      const ZJ = (0, NJ.A)(cJ),
        [FJ, UJ] = (0, fJ.useState)(null);
      if ((0, fJ.useEffect)((() => {
          if (!ZJ) return;
          let JJ = !0;
          return (0, OJ.i)(ZJ).then((cJ => {
            JJ && UJ(cJ)
          })).catch((JJ => {
            console.error(`Failed to load the page copy for ${ZJ.name}`, JJ)
          })), () => {
            JJ = !1
          }
        }), [ZJ]), !ZJ || !FJ || FJ.name !== ZJ.name) return null;
      const eJ = (0, OJ.g)(FJ),
        XJ = new Set((0, TJ.d)((0, CJ.f)()).map((JJ => (0, NJ.s)(JJ)))),
        AJ = FJ.similarGames.filter((JJ => XJ.has((0, NJ.s)(JJ))));
      return (0, PJ.jsx)("div", {
        className: "GamePageContent",
        children: (0, PJ.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, PJ.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, PJ.jsx)("h2", {
              children: eJ.whatIs
            }), FJ.whatIs.map((JJ => (0, PJ.jsx)("p", {
              children: JJ
            }, JJ)))]
          }), (0, PJ.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, PJ.jsx)("h2", {
              children: eJ.howToPlay
            }), FJ.howToPlay.map((JJ => (0, PJ.jsx)("p", {
              children: JJ
            }, JJ)))]
          }), (0, PJ.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, PJ.jsx)("h2", {
              children: eJ.features
            }), (0, PJ.jsx)("ul", {
              children: FJ.features.map((JJ => (0, PJ.jsx)("li", {
                children: JJ
              }, JJ)))
            })]
          }), (0, PJ.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, PJ.jsx)("h2", {
              children: eJ.tips
            }), (0, PJ.jsx)("ul", {
              children: FJ.tips.map((JJ => (0, PJ.jsx)("li", {
                children: JJ
              }, JJ)))
            })]
          }), (0, PJ.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, PJ.jsx)("h2", {
              children: eJ.faq
            }), FJ.faq.map((JJ => {
              let {
                question: cJ,
                answer: ZJ
              } = JJ;
              return (0, PJ.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, PJ.jsx)("h3", {
                  children: cJ
                }), (0, PJ.jsx)("p", {
                  children: ZJ
                })]
              }, cJ)
            }))]
          }), AJ.length > 0 && (0, PJ.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, PJ.jsx)("h2", {
              children: eJ.similarGames
            }), (0, PJ.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: AJ.map((JJ => (0, PJ.jsx)("li", {
                children: (0, PJ.jsx)(uJ.f, {
                  source: {
                    type: "game",
                    gameNameWithVariation: JJ
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, JJ)))
            })]
          })]
        })
      })
    }
    var RJ = ZJ(942),
      LJ = ZJ(80),
      aJ = ZJ(1028),
      BJ = ZJ(3055),
      tJ = ZJ(1549),
      oJ = ZJ(1421),
      lJ = ZJ(1406),
      Jc = ZJ(1498),
      cc = ZJ(1339),
      Zc = ZJ(1247),
      Fc = ZJ(35465),
      Uc = ZJ(1133),
      ec = ZJ(889),
      Xc = ZJ(235),
      Ac = ZJ(905),
      qc = ZJ(1441),
      jc = ZJ(8192),
      Yc = ZJ(13),
      hc = ZJ(2202),
      Dc = ZJ(622),
      sc = ZJ(1122),
      nc = ZJ(5842);

    function Gc(JJ) {
      let {
        preview: cJ,
        isBroken: ZJ
      } = JJ;
      const FJ = null === cJ ? null : (0, eJ.f)(cJ, "small"),
        XJ = (0, UJ.f)(null !== FJ && void 0 !== FJ ? FJ : eJ.q);
      return null === cJ ? (0, PJ.jsx)("div", {
        className: nJ()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: ZJ
        }),
        children: (0, PJ.jsx)(RJ.c, {
          name: ZJ ? "triangle-exclamation" : "star"
        })
      }) : (0, PJ.jsx)("div", {
        className: nJ()("FeaturedGamesPopupSlotThumbnail", AJ.j),
        style: (0, AJ.g)(XJ),
        role: "img",
        "aria-label": cJ.name,
        children: (0, PJ.jsx)(AJ.e, {
          image: XJ
        })
      })
    }

    function fc(JJ) {
      let {
        schematicId: cJ,
        gameName: ZJ
      } = JJ;
      const {
        userContext: UJ
      } = (0, QJ.d)(), eJ = (0, yJ.e)(), [XJ, AJ] = (0, fJ.useState)(null), [qJ, jJ] = (0, fJ.useState)(null), [YJ, hJ] = (0, fJ.useState)(!1), sJ = (0, fJ.useCallback)((() => {
        jJ(null), bJ.c.getFeaturedGames(UJ).then((JJ => {
          eJ.current && AJ(JJ.slots)
        })).catch((JJ => {
          console.error("Failed to get featured games", JJ), eJ.current && jJ("Failed to load featured games")
        }))
      }), [UJ, eJ]);
      (0, fJ.useEffect)((() => {
        sJ()
      }), [sJ]);
      const nJ = (JJ, cJ) => {
        YJ || (hJ(!0), bJ.c.setFeaturedGame(UJ, JJ, cJ).then((() => {
          eJ.current && sJ()
        })).catch((JJ => {
          console.error("Failed to set featured game", JJ), eJ.current && jJ("Failed to update the featured slot")
        })).finally((() => {
          eJ.current && hJ(!1)
        })))
      };
      return (0, PJ.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, PJ.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !XJ && !qJ && (0, PJ.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, PJ.jsx)(WJ.c, {})
        }), qJ && (0, PJ.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: qJ
        }), XJ && (0, PJ.jsxs)(PJ.Fragment, {
          children: [(0, PJ.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: XJ.map((JJ => {
              const ZJ = JJ.schematicId === cJ,
                UJ = null === JJ.schematicId,
                {
                  categoryGroup: eJ
                } = FJ.C[JJ.slotId];
              return (0, PJ.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, PJ.jsx)(Gc, {
                  preview: JJ.preview,
                  isBroken: !UJ
                }), (0, PJ.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, PJ.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, FJ.Y)(eJ), " \xb7 position", " ", (0, FJ.F)(JJ.slotId, FJ.Bb) + 1, " of", " ", (0, FJ.zb)(eJ, FJ.Bb)]
                  }), UJ && (0, PJ.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !UJ && null !== JJ.preview && (0, PJ.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: JJ.preview.name
                  }), !UJ && null === JJ.preview && (0, PJ.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, PJ.jsx)(RJ.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, PJ.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [UJ && (0, PJ.jsxs)(DJ.r, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      nJ(JJ.slotId, cJ)
                    },
                    disabled: YJ,
                    children: [(0, PJ.jsx)(RJ.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !UJ && !ZJ && (0, PJ.jsxs)(DJ.O, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      nJ(JJ.slotId, cJ)
                    },
                    disabled: YJ,
                    children: [(0, PJ.jsx)(RJ.c, {
                      name: "star"
                    }), " Replace"]
                  }), !UJ && (0, PJ.jsxs)(DJ.I, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      nJ(JJ.slotId, null)
                    },
                    disabled: YJ,
                    children: [(0, PJ.jsx)(RJ.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, JJ.slotId)
            }))
          }), (0, PJ.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var xc = ZJ(4085),
      rc = ZJ(4011),
      vc = ZJ(4020),
      mc = ZJ(4033),
      Qc = ZJ(3992),
      Ec = ZJ(3050),
      Vc = ZJ(35489),
      Kc = ZJ(166);
    const yc = {
      skyblock: [ZJ(35494).d]
    };
    var Sc = ZJ(535);
    const Ic = {
      listedVariations: null,
      backgroundImage: eJ.q,
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

    function Mc(JJ, cJ) {
      const ZJ = Dc.g[JJ.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, eJ.f)(JJ, "large"),
        badges: [],
        category: JJ.gameCategory,
        title: void 0 !== (null === ZJ || void 0 === ZJ ? void 0 : ZJ.title) ? cJ(ZJ.title) : JJ.name,
        variationTitle: null,
        description: void 0 !== (null === ZJ || void 0 === ZJ ? void 0 : ZJ.description) ? cJ(ZJ.description) : JJ.description,
        ownerSocialPreviewWithoutLocation: "owner" in JJ ? JJ.owner : null,
        ccu: JJ.ccu,
        favourites: JJ.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in JJ ? JJ.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function bc(JJ) {
      var cJ, ZJ, FJ;
      return null !== (cJ = null !== (ZJ = (0, Kc.h)() ? function(JJ) {
        for (const [cJ, ZJ] of Object.entries(yc)) {
          const FJ = [cJ, ...ZJ.map((JJ => (0, Xc.Ib)(cJ, JJ)))];
          if (FJ.includes(JJ)) return FJ
        }
        return null
      }(JJ) : null) && void 0 !== ZJ ? ZJ : null === (FJ = Dc.d[JJ]) || void 0 === FJ ? void 0 : FJ.listedVariations) && void 0 !== cJ ? cJ : null
    }

    function wc() {
      const {
        gameNameWithVariation: JJ
      } = (0, oJ.x)();
      if ((0, fJ.useEffect)(Ec.m, []), (0, fJ.useEffect)(Vc.c, []), JJ && (0, Uc.o)(JJ)) return (0, PJ.jsx)(Wc, {
        urlId: JJ
      }, JJ);
      const cJ = JJ && (0, ec.k)(JJ) ? JJ : "firstParty";
      return (0, PJ.jsx)(gc, {}, cJ)
    }

    function Wc(JJ) {
      let {
        urlId: cJ
      } = JJ;
      const {
        userContext: ZJ,
        isUserContextUpdating: FJ
      } = (0, QJ.d)(), UJ = (0, fJ.useMemo)((() => (0, tJ.k)(cJ)), [cJ]);
      (0, fJ.useMemo)((() => {
        if (null === UJ) return;
        const JJ = aJ.userContextManager.peekCurrentUserContext();
        (null !== JJ ? bJ.c.getGame(JJ, UJ.schematicId) : aJ.userContextManager.getCurrentUserContext().then((JJ => bJ.c.getGame(JJ, UJ.schematicId)))).catch((JJ => {
          console.error(`Failed to get the custom game ${UJ.schematicId}`, JJ), (0, tJ.g)(cJ)
        }))
      }), [UJ, cJ]);
      const [eJ, XJ] = (0, fJ.useState)(null), [AJ, qJ] = (0, fJ.useState)(!1);
      (0, fJ.useLayoutEffect)((() => {
        let JJ = !0;
        return (0, BJ.c)().then((() => {
          JJ && qJ(!0)
        })), () => {
          JJ = !1
        }
      }), []), (0, fJ.useEffect)((() => {
        if (null !== UJ || FJ) return;
        let JJ = !0;
        return bJ.c.getGameByUrlId(ZJ, cJ).then((ZJ => {
          JJ && XJ({
            urlId: cJ,
            game: ZJ
          })
        })).catch((ZJ => {
          console.error(`Failed to find the custom game with urlId ${cJ}`, ZJ), JJ && (0, lJ.navigateToHomePage)()
        })), () => {
          JJ = !1
        }
      }), [cJ, UJ, FJ, ZJ]);
      const jJ = null !== UJ && void 0 !== UJ ? UJ : (null === eJ || void 0 === eJ ? void 0 : eJ.urlId) === cJ ? eJ.game : null;
      return null === jJ ? (0, PJ.jsx)(WJ.c, {}) : AJ ? (0, PJ.jsx)(gc, {
        gameNameWithVariation: (0, ec.p)(jJ.schematicId),
        knownCustomGame: jJ
      }, jJ.schematicId) : null
    }

    function gc(JJ) {
      var cJ, ZJ, XJ, sJ, MJ, wJ, WJ, HJ;
      let {
        gameNameWithVariation: kJ,
        knownCustomGame: pJ = null
      } = JJ;
      const {
        t: zJ
      } = (0, qJ.F)();
      (0, hc.i)();
      const OJ = (0, hc.o)(),
        {
          userContext: TJ,
          isUserContextUpdating: uJ
        } = (0, QJ.d)(),
        aJ = (0, Qc.f)(),
        BJ = (0, lJ.useNavigatePreserveSearch)(),
        tJ = (0, oJ.x)(),
        cc = (0, fJ.useMemo)((() => kJ ? {
          gameNameWithVariation: kJ
        } : tJ), [kJ, tJ]),
        Uc = (0, jc.e)(cc),
        Gc = (0, fJ.useMemo)((() => {
          const JJ = function(JJ) {
            var cJ, ZJ;
            const FJ = bc(JJ);
            if (!FJ || 0 === FJ.length || FJ.includes(JJ)) return JJ;
            const UJ = jJ.j.getItem((0, rJ.i)(JJ));
            if (UJ && FJ.includes(UJ)) return UJ;
            return null !== (cJ = null === (ZJ = Dc.d[JJ]) || void 0 === ZJ ? void 0 : ZJ.defaultListedVariation) && void 0 !== cJ ? cJ : FJ[0]
          }(Uc.gameNameWithVariation);
          return JJ === Uc.gameNameWithVariation ? Uc : {
            ...Uc,
            gameNameWithVariation: JJ
          }
        }), [Uc]);
      (0, fJ.useEffect)((() => {
        const JJ = Uc.gameNameWithVariation;
        Gc.gameNameWithVariation !== JJ && JJ !== (0, Xc.Jb)(JJ) && BJ((0, NJ.t)(Gc.gameNameWithVariation), {
          replace: !0
        })
      }), [Gc.gameNameWithVariation, Uc.gameNameWithVariation, BJ]);
      const Ec = (0, yJ.e)(),
        [Vc, Kc] = (0, fJ.useState)(""),
        yc = fJ.useRef(null),
        [wc, Wc] = (0, fJ.useState)(),
        gc = (0, ec.k)(Gc.gameNameWithVariation),
        Pc = (0, fJ.useMemo)((() => gc ? null : function(JJ, cJ, ZJ) {
          var FJ, UJ;
          const XJ = Dc.d[JJ];
          return (0, Sc.P)(XJ) ? null : {
            listedVariations: bc(JJ),
            backgroundImage: (0, eJ.n)(JJ, (0, eJ.c)(XJ)),
            badges: (0, YJ.filterBadges)(XJ.badges),
            category: XJ.type,
            title: ZJ(XJ.title),
            variationTitle: XJ.variationTitle ? ZJ(XJ.variationTitle) : null,
            description: ZJ(XJ.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== cJ ? null !== (FJ = cJ[JJ]) && void 0 !== FJ ? FJ : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: XJ.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: XJ.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (UJ = XJ.canCreateCustomLobbies) || void 0 === UJ || UJ,
            countdownInformation: (0, rJ.h)(JJ)
          }
        }(Gc.gameNameWithVariation, OJ, zJ)), [gc, Gc.gameNameWithVariation, OJ, zJ]),
        [kc, pc] = (0, fJ.useState)(!1),
        [dc, zc] = (0, fJ.useState)((() => pJ ? Mc(pJ, zJ) : Ic)),
        Nc = null !== Pc && void 0 !== Pc ? Pc : dc,
        [Oc] = (0, fJ.useState)(Nc === Ic),
        Tc = (0, UJ.f)(Nc.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: Cc,
          recentlyPlayedCustomLobbies: uc
        } = (0, fJ.useMemo)((() => function(JJ, cJ, ZJ, FJ) {
          var UJ;
          const eJ = JJ => {
              const ZJ = (0, ec.n)(JJ),
                FJ = cJ.find((cJ => "custom" === cJ.type ? cJ.schematicId === ZJ : cJ.gameNameWithVariation === JJ));
              return FJ ? [...FJ.recentLobbies] : []
            },
            XJ = (0, YJ.getRecentGameNameWithVariationLobbiesKey)(JJ),
            AJ = null !== (UJ = jJ.j.getItem(XJ)) && void 0 !== UJ ? UJ : [],
            qJ = [...eJ(JJ), ...AJ],
            hJ = [];
          for (const jJ of qJ)(0, sc.N)(jJ) && !hJ.includes(jJ) && hJ.push(jJ);
          let DJ = qJ;
          if (ZJ) {
            const JJ = eJ("classic_worlds"),
              cJ = qJ.filter((cJ => !JJ.includes(cJ)));
            DJ = [...JJ, ...cJ]
          }
          const sJ = [],
            nJ = !1 === FJ ? [] : DJ;
          for (const jJ of nJ)(0, sc.N)(jJ) || sJ.includes(jJ) || sJ.push(jJ);
          return {
            recentlyPlayedPublicLobbies: hJ,
            recentlyPlayedCustomLobbies: sJ
          }
        }(Gc.gameNameWithVariation, aJ, Nc.showWorldsInsteadOfCustomLobbies, Nc.canCreateCustomLobbies)), [Gc.gameNameWithVariation, aJ, Nc.showWorldsInsteadOfCustomLobbies, Nc.canCreateCustomLobbies]),
        [ic, Rc] = (0, fJ.useState)(!0),
        [Lc, ac] = (0, fJ.useState)([]),
        [Bc, tc] = (0, fJ.useState)(null),
        [oc, lc] = (0, fJ.useState)("explore"),
        JZ = (0, fJ.useRef)(!1),
        cZ = (0, fJ.useCallback)((JJ => {
          (0, xJ.unstable_batchedUpdates)((() => {
            Wc(JJ), zc((cJ => ({
              ...Mc(JJ, zJ),
              isFavourite: cJ.isFavourite
            })))
          }))
        }), [zJ]);
      (0, fJ.useEffect)((() => {
        null === Yc.d.get("gameEntrySource") && (0, Yc.h)("gameInformationPageDirect")
      }), []);
      const ZZ = (0, fJ.useRef)(null);
      (0, fJ.useEffect)((() => {
        const JJ = JJ => {
            ZZ.current = JJ.target instanceof Element ? JJ.target.closest("a, button") : null
          },
          cJ = JJ => {
            "Tab" === JJ.key && (ZZ.current = null)
          };
        return document.addEventListener("pointerdown", JJ, !0), document.addEventListener("keydown", cJ, !0), () => {
          document.removeEventListener("pointerdown", JJ, !0), document.removeEventListener("keydown", cJ, !0)
        }
      }), []), (0, EJ.b)("Enter", (JJ => {
        const cJ = JJ.target instanceof Element ? JJ.target : null;
        if (JJ.defaultPrevented || null !== cJ && void 0 !== cJ && cJ.closest("input, textarea, select")) return;
        const ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.closest("a, button");
        ZJ && ZJ !== ZZ.current || (JJ.preventDefault(), hZ())
      })), (0, VJ.d)(lJ.navigateToHomePage);
      const FZ = !CJ.j && (Cc.length > 0 || uc.length > 0),
        UZ = !Nc.useRejoinLastLobbyButton || 0 === Cc.length,
        eZ = gc && null === Nc.ownerSocialPreviewWithoutLocation,
        XZ = TJ.getPlayerName() === (null === wc || void 0 === wc || null === (cJ = wc.owner) || void 0 === cJ ? void 0 : cJ.name),
        AZ = null !== (ZJ = null === (XJ = Nc.badges.find((JJ => "event" === JJ.type))) || void 0 === XJ ? void 0 : XJ.event) && void 0 !== ZJ ? ZJ : null,
        qZ = UZ ? DJ.m : DJ.d,
        jZ = (0, PJ.jsx)(hJ.g, {
          tooltipInner: (0, PJ.jsx)("div", {
            children: zJ("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, PJ.jsx)(qZ, {
            className: "GameInformationButton",
            padDefaultFocus: UZ,
            showPress: !0,
            onClick: () => {
              hZ()
            },
            children: (0, PJ.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [UZ && (0, PJ.jsxs)(PJ.Fragment, {
                children: [(0, PJ.jsx)(RJ.c, {
                  name: "play"
                }), " "]
              }), zJ("homePage:quickPlay")]
            })
          })
        });
      (0, fJ.useEffect)((() => {
        if (!gc || uJ) return;
        let JJ = !0;
        const cJ = (0, ec.n)(Gc.gameNameWithVariation);
        return bJ.c.getGame(TJ, cJ).then((cJ => {
          JJ && cZ(cJ)
        })).catch((cJ => {
          console.error("Failed to get Custom Game information", cJ), JJ && (0, lJ.navigateToHomePage)()
        })), bJ.c.getFavouriteGames(TJ).then((ZJ => {
          JJ && zc((JJ => ({
            ...JJ,
            isFavourite: ZJ.includes(cJ)
          })))
        })).catch((cJ => {
          console.error("Failed to get favourite games", cJ), JJ && pc(!0)
        })), () => {
          JJ = !1
        }
      }), [gc, uJ, Gc.gameNameWithVariation, cZ, TJ]);
      const YZ = !gc && null === Pc;

      function hZ(JJ) {
        BJ((0, vJ.c)(Gc.gameNameWithVariation, JJ))
      }(0, fJ.useEffect)((() => {
        YZ && (0, lJ.navigateToHomePage)()
      }), [YZ]), (0, fJ.useEffect)((() => {
        !1 !== Nc.canCreateCustomLobbies && null !== Nc.showWorldsInsteadOfCustomLobbies && (CJ.j || !1 !== uJ || (Rc(!0), bJ.c.getFavouriteLobbies(TJ).then((JJ => {
          tc(JJ)
        })), bJ.c.getOpenCustomLobbies(TJ, {
          gameNameWithVariation: Nc.showWorldsInsteadOfCustomLobbies ? "classic" : Gc.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === oc,
          onlyFavouriteLobbies: "favourite" === oc
        }).then((JJ => {
          Ec.current && ac(JJ)
        })).catch((JJ => {})).finally((() => {
          Ec.current && Rc(!1)
        }))))
      }), [uJ, Gc, oc, Nc.showWorldsInsteadOfCustomLobbies, Nc.canCreateCustomLobbies, Ec, TJ]);
      const DZ = (0, fJ.useCallback)((async JJ => {
          try {
            if (!Bc) return;
            Bc.includes(JJ) ? (bJ.c.unfavouriteLobby(TJ, JJ), tc(Bc.filter((cJ => cJ !== JJ)))) : (bJ.c.favouriteLobby(TJ, JJ).catch((JJ => {
              console.error("Failed to favourite lobby", JJ)
            })), tc([...Bc, JJ]))
          } catch (cJ) {
            console.error("Failed to like lobby", cJ)
          }
        }), [TJ, Bc]),
        sZ = (null === wc || void 0 === wc ? void 0 : wc.schematicId) === (0, ec.n)(Uc.gameNameWithVariation) ? wc : null,
        nZ = sZ && (0, NJ.D)(Uc.gameNameWithVariation, (JJ => zJ(JJ)), sZ);
      (0, Jc.e)(sZ && (0, NJ.t)(Uc.gameNameWithVariation, sZ));
      const GZ = !CJ.j && LJ.featureFlags.canUseCustomLobbies && !0 === Nc.canCreateCustomLobbies,
        fZ = (0, PJ.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, PJ.jsx)(iJ, {
            gameNameWithVariation: Gc.gameNameWithVariation
          })
        });
      return (0, PJ.jsx)(PJ.Fragment, {
        children: (0, PJ.jsxs)("article", {
          className: nJ()("GameInformation", {
            GameInformationFadeIn: Oc,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (sJ = Nc.countdownInformation) || void 0 === sJ ? void 0 : sJ.type)
          }),
          children: [nZ && (0, PJ.jsx)(mJ.d, {
            meta: nZ
          }), (0, PJ.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, PJ.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, PJ.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, PJ.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, PJ.jsx)("div", {
                  className: nJ()("GameInformationTopBackgroundImage", AJ.j),
                  style: (0, AJ.g)(Tc),
                  children: (0, PJ.jsx)(AJ.e, {
                    image: Tc
                  })
                })]
              }), (0, PJ.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, PJ.jsx)(xc.c, {}), (0, PJ.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, PJ.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, PJ.jsxs)("div", {
                      className: nJ()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: eZ
                      }),
                      children: [Nc.badges.map((JJ => (0, PJ.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${JJ.type}`,
                        children: (0, PJ.jsx)(IJ.e, {
                          badge: JJ
                        })
                      }, JJ.type))), gc && (0, PJ.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, PJ.jsx)(SJ.d, {
                          text: (0, FJ.S)({
                            type: "playerCrafted"
                          })
                        })
                      }), Nc.category && (0, PJ.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, PJ.jsx)(SJ.d, {
                          text: [{
                            str: (0, FJ.T)(Nc.category).toUpperCase()
                          }]
                        })
                      }), null !== Nc.ccu && (0, PJ.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, PJ.jsx)(RJ.c, {
                          name: "user"
                        }), (0, sc.S)(Nc.ccu), " online"]
                      }), null !== Nc.ownerSocialPreviewWithoutLocation && (0, PJ.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, PJ.jsx)("span", {
                          children: "Made by"
                        }), (0, PJ.jsx)(gJ.g, {
                          playerSocialPreview: {
                            ...Nc.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), eZ && (0, PJ.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, PJ.jsx)("span", {
                          children: "Made by"
                        }), (0, PJ.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== Nc.favourites && (null !== Nc.isFavourite || gc && !kc) && (0, PJ.jsx)(DJ.u, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== JZ.current && (JZ.current = !0, null !== Nc.isFavourite)) {
                              const JJ = (0, ec.n)(Gc.gameNameWithVariation);
                              let cJ;
                              Nc.isFavourite ? (cJ = -1, bJ.c.unfavouriteGame(TJ, JJ).catch((JJ => {
                                console.error("Failed to get unfavourite game", JJ)
                              })).finally((() => {
                                JZ.current = !1
                              }))) : (cJ = 1, bJ.c.favouriteGame(TJ, JJ).catch((JJ => {
                                console.error("Failed to get favourite game", JJ)
                              })).finally((() => {
                                JZ.current = !1
                              }))), zc((JJ => ({
                                ...JJ,
                                isFavourite: !JJ.isFavourite
                              }))), zc((JJ => ({
                                ...JJ,
                                favourites: JJ.favourites + cJ
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (MJ = Nc.isFavourite) && void 0 !== MJ && MJ,
                        disabled: null === Nc.isFavourite,
                        className: nJ()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === Nc.isFavourite
                        })
                      }, null === Nc.isFavourite ? "pending" : "known"), gc && !eZ && LJ.featureFlags.useSocialFeatures && !XZ && (0, PJ.jsx)(vc.b, {
                        targetType: "customGame",
                        targetId: (0, ec.n)(Gc.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (TJ.playerHasRank("developer") || TJ.playerHasRank("admin") && XZ) && (0, PJ.jsxs)(DJ.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          BJ((0, qc.h)((0, Ac.g)(Gc.gameNameWithVariation, !0)))
                        },
                        children: [(0, PJ.jsx)(RJ.c, {
                          name: "star-christmas"
                        }), " ", zJ("studio:viewInStudio")]
                      }), gc && TJ.playerHasRank("developer") && (0, PJ.jsxs)(DJ.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, nc.d)({
                            schematicId: (0, ec.n)(Gc.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, PJ.jsx)(RJ.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), gc && TJ.playerHasRank("developer") && (0, PJ.jsxs)(DJ.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Zc.NotificationProvider.showCustomPopup({
                            body: () => (0, PJ.jsx)(fc, {
                              schematicId: (0, ec.n)(Gc.gameNameWithVariation),
                              gameName: Nc.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, PJ.jsx)(RJ.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (wJ = Nc.countdownInformation) || void 0 === wJ ? void 0 : wJ.type) && (0, PJ.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, PJ.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, PJ.jsx)(KJ.e, {
                            toTime: Nc.countdownInformation.countdownToTime
                          })]
                        }), (0, PJ.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: Nc.countdownInformation.previewText
                        })]
                      })]
                    }, eZ ? "pending" : "shown"), (0, PJ.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, PJ.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, PJ.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [Nc.title, " ", Nc.variationTitle && (null === (WJ = Dc.d[Gc.gameNameWithVariation]) || void 0 === WJ ? void 0 : WJ.variationThumbnailUseBigRatio) && (0, PJ.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: Nc.variationTitle
                          })]
                        })
                      }), Nc.listedVariations && Nc.listedVariations.length > 0 && (0, PJ.jsx)("div", {
                        className: nJ()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (HJ = Dc.d[Gc.gameNameWithVariation]) || void 0 === HJ ? void 0 : HJ.variationThumbnailUseBigRatio
                        }),
                        children: Nc.listedVariations.map((JJ => {
                          var cJ, ZJ;
                          return (0, PJ.jsxs)(Hc, {
                            variation: JJ,
                            isSelected: Gc.gameNameWithVariation === JJ,
                            children: [null !== OJ && (0, PJ.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, PJ.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, PJ.jsx)(RJ.c, {
                                  name: "user"
                                }), " ", (0, sc.S)(null !== (cJ = OJ[JJ]) && void 0 !== cJ ? cJ : 0)]
                              })
                            }), (0, PJ.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: zJ(null !== (ZJ = Dc.d[JJ].variationTitle) && void 0 !== ZJ ? ZJ : Dc.d[JJ].title)
                            }), (0, PJ.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, YJ.filterBadges)(Dc.d[JJ].badges).map((JJ => (0, PJ.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + JJ.type,
                                children: (0, PJ.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, PJ.jsx)(IJ.e, {
                                    badge: JJ
                                  })
                                })
                              }, JJ.type)))
                            })]
                          }, JJ)
                        }))
                      })]
                    }), Nc.description && (0, PJ.jsx)("p", {
                      className: "GameInformationDescription",
                      children: Nc.description
                    })]
                  }), (0, PJ.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, PJ.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!CJ.j && !UZ && (0, PJ.jsx)(hJ.g, {
                        tooltipInner: (0, PJ.jsx)("div", {
                          children: zJ("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, PJ.jsx)(DJ.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            hZ(Cc[0])
                          },
                          children: (0, PJ.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, PJ.jsx)(RJ.c, {
                              name: "play"
                            }), " ", zJ("homePage:rejoinLobbyNumber", {
                              number: Cc[0]
                            })]
                          })
                        })
                      }), !CJ.j && UZ && jZ]
                    }), (0, PJ.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!CJ.j && !UZ && jZ, (0, PJ.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, PJ.jsx)(RJ.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, PJ.jsx)(GJ.e, {
                          className: "JoinLobbyInput",
                          placeholderText: zJ("homePage:lobbyName"),
                          maxLength: sc.R,
                          domRef: yc,
                          onValueChange: JJ => {
                            JJ = (0, sc.rb)(JJ), Kc(JJ)
                          },
                          onEnter: () => {
                            0 === Vc.length ? hZ(Cc[0]) : hZ(Vc)
                          }
                        }), (0, PJ.jsx)(DJ.d, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === Vc.length ? hZ(Cc[0]) : hZ(Vc)
                          },
                          children: zJ("general:join")
                        })]
                      })]
                    }), (0, PJ.jsxs)("section", {
                      className: nJ()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !FZ
                      }),
                      children: [(0, PJ.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, PJ.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, PJ.jsx)(RJ.c, {
                            name: "clock-rotate-left"
                          }), FZ && (0, PJ.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: zJ("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, PJ.jsx)(mc.d, {
                        lobbyGroups: [Cc, uc],
                        onLobbyClick: JJ => {
                          hZ(JJ)
                        },
                        keyPrefix: Gc.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== AZ && (0, PJ.jsx)(dJ, {
                eventName: AZ
              })]
            }), GZ && (0, PJ.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, PJ.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, PJ.jsxs)("div", {
                  className: nJ()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === Nc.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === Nc.showWorldsInsteadOfCustomLobbies && (0, PJ.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, PJ.jsx)(RJ.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, PJ.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, PJ.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), zJ("game:worlds")]
                    })]
                  }), !1 === Nc.showWorldsInsteadOfCustomLobbies && (0, PJ.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, PJ.jsx)(RJ.c, {
                      name: "joystick"
                    }), (0, PJ.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, PJ.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), zJ("homePage:customLobbies")]
                    })]
                  }), (0, PJ.jsx)(DJ.O, {
                    onClick: () => {
                      lc("explore")
                    },
                    active: "explore" === oc,
                    children: zJ("general:explore")
                  }), (0, PJ.jsx)(DJ.O, {
                    onClick: () => {
                      lc("favourite")
                    },
                    active: "favourite" === oc,
                    children: zJ("homePage:favouriteLobbies")
                  }), (0, PJ.jsx)(DJ.O, {
                    onClick: () => {
                      lc("owned")
                    },
                    active: "owned" === oc,
                    children: zJ("homePage:ownedLobbies")
                  })]
                }), (0, PJ.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, PJ.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, PJ.jsx)(rc.b, {
                      label: "Create",
                      onClick: () => {
                        Zc.NotificationProvider.showCustomPopup({
                          body: JJ => (0, PJ.jsx)(Fc.CreateCustomLobby, {
                            gameNameWithVariation: Gc.gameNameWithVariation,
                            close: JJ
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === ic && (0, PJ.jsx)(rc.j, {}), !1 === ic && Lc.length > 0 && Lc.map((JJ => (0, PJ.jsx)(rc.f, {
                      customLobby: JJ,
                      favouriteLobbies: Bc,
                      toggleLikeLobby: DZ,
                      showReport: LJ.featureFlags.useSocialFeatures && "owned" !== oc
                    }, JJ.name)))]
                  }), fZ]
                })]
              })
            })]
          }), !GZ && fZ]
        })
      })
    }

    function Hc(JJ) {
      let {
        variation: cJ,
        isSelected: ZJ,
        children: FJ
      } = JJ;
      const qJ = Dc.d[cJ],
        YJ = (0, eJ.n)(cJ, (0, eJ.p)(qJ)),
        hJ = (0, UJ.f)(YJ),
        DJ = (0, XJ.f)([(0, eJ.j)(cJ, (0, eJ.c)(qJ))]);
      return (0, PJ.jsxs)(lJ.LinkPreserveSearch, {
        to: (0, NJ.t)(cJ),
        replace: !0,
        className: nJ()("GameInformationVariation", AJ.j, {
          SelectedGameInformationVariation: ZJ
        }),
        onClick: JJ => {
          if (!(0, cc.d)(JJ)) return;
          const ZJ = (0, rJ.i)(cJ);
          jJ.j.setItem(ZJ, cJ)
        },
        onMouseEnter: DJ.start,
        onMouseLeave: DJ.cancel,
        onFocus: DJ.start,
        onBlur: DJ.cancel,
        style: (0, AJ.g)(hJ),
        children: [(0, PJ.jsx)(AJ.e, {
          image: hJ
        }), FJ]
      })
    }
  },
  5842: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => xJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1329),
      eJ = ZJ(1389),
      XJ = ZJ(2975),
      AJ = ZJ(1022),
      qJ = ZJ(1232),
      jJ = ZJ(1259),
      YJ = ZJ(942),
      hJ = ZJ(926),
      DJ = ZJ.n(hJ),
      sJ = ZJ(990);

    function nJ(JJ) {
      let {
        info: cJ,
        className: ZJ
      } = JJ;
      return (0, sJ.jsxs)("div", {
        className: DJ()("GameApprovalInfoDetails", ZJ),
        children: [(0, sJ.jsxs)("div", {
          className: DJ()("GameApprovalInfoSummary", cJ.overallPassed ? "Passed" : "Failed"),
          children: [(0, sJ.jsx)(YJ.c, {
            name: cJ.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, sJ.jsx)("span", {
            children: cJ.summary
          })]
        }), cJ.rows.length > 0 && (0, sJ.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: cJ.rows.map((JJ => (0, sJ.jsxs)("div", {
            className: DJ()("GameApprovalInfoRow", JJ.passed ? "Passed" : "Failed"),
            children: [(0, sJ.jsx)(YJ.c, {
              name: JJ.passed ? "check" : "xmark"
            }), (0, sJ.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, sJ.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: JJ.label
              }), (0, sJ.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: JJ.valueText
              })]
            })]
          }, JJ.label)))
        })]
      })
    }
    var GJ = ZJ(1086),
      fJ = ZJ(1247);

    function xJ(JJ) {
      fJ.NotificationProvider.showCustomPopup({
        body: () => (0, sJ.jsx)(rJ, {
          ...JJ
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function rJ(JJ) {
      let {
        schematicId: cJ,
        canOverride: ZJ,
        onApprovalChanged: hJ
      } = JJ;
      const {
        t: DJ
      } = (0, GJ.F)(), {
        userContext: fJ
      } = (0, AJ.d)(), xJ = (0, XJ.e)(), [rJ, vJ] = (0, FJ.useState)(null), [mJ, QJ] = (0, FJ.useState)(null), [EJ, VJ] = (0, FJ.useState)(!1), KJ = (0, FJ.useCallback)((() => {
        QJ(null), eJ.c.getGameApprovalInfo(fJ, cJ).then((JJ => {
          xJ.current && vJ(JJ)
        })).catch((JJ => {
          console.error("Failed to get game approval info", JJ), xJ.current && QJ(DJ("studio:approvalLoadFailed"))
        }))
      }), [fJ, cJ, xJ, DJ]);
      (0, FJ.useEffect)((() => {
        KJ()
      }), [KJ]);
      const yJ = JJ => {
        EJ || (VJ(!0), eJ.c.setGameApproval(fJ, cJ, JJ).then((() => {
          null === hJ || void 0 === hJ || hJ(), xJ.current && KJ()
        })).catch((JJ => {
          console.error("Failed to set game approval", JJ)
        })).finally((() => {
          xJ.current && VJ(!1)
        })))
      };
      return (0, sJ.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, sJ.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: DJ("studio:approvalTitle")
        }), !rJ && !mJ && (0, sJ.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, sJ.jsx)(qJ.c, {})
        }), mJ && (0, sJ.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: mJ
        }), rJ && (0, sJ.jsxs)(sJ.Fragment, {
          children: [(0, sJ.jsx)(nJ, {
            info: rJ
          }), ZJ && (0, sJ.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== rJ.manualOverride && (0, sJ.jsx)(jJ.g, {
              tooltipInner: (0, sJ.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, sJ.jsxs)(UJ.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  yJ(!0)
                },
                disabled: EJ,
                children: [(0, sJ.jsx)(YJ.c, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== rJ.manualOverride && (0, sJ.jsx)(jJ.g, {
              tooltipInner: (0, sJ.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, sJ.jsxs)(UJ.I, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  yJ(!1)
                },
                disabled: EJ,
                children: [(0, sJ.jsx)(YJ.c, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== rJ.manualOverride && (0, sJ.jsx)(jJ.g, {
              tooltipInner: (0, sJ.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, sJ.jsxs)(UJ.d, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  yJ(null)
                },
                disabled: EJ,
                children: [(0, sJ.jsx)(YJ.c, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  8192: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(1221),
      UJ = ZJ(1122),
      eJ = ZJ(535);

    function XJ(JJ) {
      return JJ = function(JJ, cJ) {
        var ZJ;
        const FJ = new URLSearchParams(cJ),
          UJ = FJ.get("lobby"),
          eJ = FJ.get("vm"),
          XJ = null !== (ZJ = UJ) && void 0 !== ZJ ? ZJ : JJ.lobbyName,
          AJ = null !== eJ && void 0 !== eJ ? eJ : JJ.directJoinVmUrl;
        if (XJ === JJ.lobbyName && AJ === JJ.directJoinVmUrl) return JJ;
        return {
          ...JJ,
          lobbyName: XJ,
          directJoinVmUrl: AJ
        }
      }(JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), JJ = function(JJ) {
        if ((0, eJ.P)(JJ.directJoinVmUrl)) return JJ;
        const cJ = (0, UJ.cb)(JJ.directJoinVmUrl);
        null === cJ && (JJ.directJoinVmUrl = void 0);
        return JJ
      }(JJ = function(JJ) {
        if ((0, eJ.P)(JJ.gameNameWithVariation)) return JJ;
        return JJ.gameNameWithVariation = (0, FJ.k)(JJ.gameNameWithVariation), JJ
      }(JJ))
    }
  },
  35489: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => qJ,
      c: () => jJ
    });
    var FJ = ZJ(1151),
      UJ = ZJ(3059),
      eJ = ZJ(547),
      XJ = ZJ(8187);

    function AJ(JJ, cJ) {
      let FJ = !1;
      const eJ = () => {
        FJ = !0
      };
      if (! function(JJ) {
          var cJ;
          return !0 !== (null === JJ || void 0 === JJ ? void 0 : JJ.saveData) && !/2g$/.test(null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.effectiveType) && void 0 !== cJ ? cJ : "")
        }(navigator.connection)) return eJ;
      const AJ = () => !FJ && !(0, XJ.g)();
      return (0, UJ.e)((() => {
        AJ() && Promise.all([ZJ.e(126), ZJ.e(81), ZJ.e(51)]).then((() => ZJ(39512))).then((JJ => AJ() ? cJ(JJ) : void 0), (cJ => {
          console.warn(`[bloxd-wasm-client] ${JJ} did not load: the join loads the client itself`, cJ)
        }))
      })), eJ
    }

    function qJ() {
      AJ("the prefetch", (JJ => {
        let {
          prefetchWasmClient: cJ
        } = JJ;
        return cJ({
          joinStarted: XJ.g,
          language: FJ.e.get().getCurrentLanguageCode()
        })
      }))
    }

    function jJ() {
      return eJ.r ? AJ("the game page's early load", (JJ => {
        let {
          startGamePageLoad: cJ
        } = JJ;
        return cJ()
      })) : () => {}
    }
  },
  8187: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => YJ,
      e: () => DJ,
      g: () => hJ
    });
    var FJ = ZJ(2642),
      UJ = ZJ(2042),
      eJ = ZJ(2675),
      XJ = ZJ(4057),
      AJ = ZJ(2988);
    let qJ = null,
      jJ = !1;

    function YJ() {
      return XJ.e.cancelDownloadForJoin(), (0, AJ.e)(), (0, UJ.c)(), jJ = !0, (0, eJ.j)(), Promise.all([ZJ.e(64), ZJ.e(67), ZJ.e(66), ZJ.e(65), ZJ.e(77), ZJ.e(228), ZJ.e(202), ZJ.e(226), ZJ.e(197), ZJ.e(43)]).then((() => ZJ(39445))).catch((() => {})), Promise.all([ZJ.e(126), ZJ.e(81), ZJ.e(51)]).then((() => ZJ(39512))).then((JJ => {
        let {
          startJoinLoad: cJ
        } = JJ;
        cJ()
      }), (() => {})), qJ ??= Promise.all([ZJ.e(66), ZJ.e(126), ZJ.e(122), ZJ.e(251), ZJ.e(177), ZJ.e(81), ZJ.e(80), ZJ.e(79), ZJ.e(197), ZJ.e(56)]).then((() => ZJ(39595))).then((JJ => (JJ.startWasmPlay(), JJ.followPageUiPack((JJ => {
        FJ.b.showGamePack(JJ)
      })), JJ)), (JJ => {
        throw qJ = null, JJ
      })), qJ
    }

    function hJ() {
      return jJ
    }

    function DJ() {
      return Promise.all([ZJ.e(66), ZJ.e(126), ZJ.e(122), ZJ.e(251), ZJ.e(177), ZJ.e(81), ZJ.e(80), ZJ.e(79), ZJ.e(197), ZJ.e(56)]).then((() => ZJ(39595))).then((JJ => {
        JJ.startWasmPreviews(), JJ.prefetchWasmPreviews()
      }))
    }
  },
  35494: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ,
      e: () => FJ
    });
    const FJ = "skyblockSkills",
      UJ = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);