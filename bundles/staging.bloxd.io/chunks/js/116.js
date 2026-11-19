export const id = 116;
export const ids = [116, 389];
export const modules = {
  35765: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => zr
    });
    var FY = DY(332),
      AY = DY(3082),
      IY = DY(3139),
      RY = DY(3131),
      OY = DY(3123),
      gY = DY(1211),
      aY = DY(40),
      vY = DY(1699),
      uY = DY(1354),
      sY = DY(1437),
      iY = DY(1092),
      yY = DY.n(iY),
      QY = DY(1654),
      oY = DY(61),
      WY = DY(76),
      EY = DY(2216),
      mY = DY(1330),
      VY = DY(1596),
      SY = DY(1152),
      lY = DY(2973),
      TY = DY(4113),
      eY = DY(3067),
      NY = DY(3069),
      BY = DY(1778),
      cY = DY(3077),
      KY = DY(1710),
      HY = DY(1471),
      zY = DY(2016),
      ZY = DY(1337),
      CY = DY(2353),
      fY = DY(4608),
      jY = DY(1125);
    const hY = 15e3,
      dY = 2500;

    function JY(YY) {
      var rY;
      let {
        eventName: DY
      } = YY;
      const {
        t: FY
      } = (0, gY.C)(), AY = KY.c[DY], [IY, RY] = (0, oY.useState)((() => Date.now() >= AY.endsAt.getTime())), [OY, aY] = (0, oY.useState)("overall"), vY = function(YY, rY) {
        const {
          userContext: DY,
          isUserContextUpdating: FY
        } = (0, SY.d)(), AY = `${YY}:${rY}`, [IY, RY] = (0, oY.useState)({
          requestKey: AY,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, oY.useEffect)((() => {
          if (FY) return;
          let IY, OY = !1;
          const gY = async () => {
            if ("visible" === document.visibilityState) try {
              const FY = await HY.e.getGameEventLeaderboard(DY, {
                event: YY,
                scope: rY
              });
              OY || RY({
                requestKey: AY,
                leaderboard: {
                  status: "loaded",
                  leaderboard: FY
                }
              })
            } catch {
              OY || RY((YY => YY.requestKey === AY && "loaded" === YY.leaderboard.status ? YY : {
                requestKey: AY,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            OY || (IY = setTimeout(gY, hY))
          };
          return gY(), () => {
            OY = !0, clearTimeout(IY)
          }
        }), [YY, rY, AY, DY, FY]), IY.requestKey === AY ? IY.leaderboard : {
          status: "loading"
        }
      }(DY, OY), uY = function(YY) {
        const rY = (0, oY.useRef)(null),
          DY = (0, oY.useRef)(0),
          FY = (0, oY.useRef)(),
          [AY, IY] = (0, oY.useState)({});
        return (0, oY.useEffect)((() => {
          const AY = null === YY || void 0 === YY ? void 0 : YY.entries;
          if (!AY) return;
          const RY = new Map(AY.map((YY => [YY.player.name, YY.value]))),
            OY = rY.current;
          if (rY.current = RY, null === OY) return;
          const gY = {};
          for (const [YY, rY] of RY) {
            const FY = OY.get(YY);
            void 0 !== FY && rY > FY && (gY[YY] = {
              amount: rY - FY,
              key: DY.current++
            })
          }
          0 !== Object.keys(gY).length && (IY(gY), clearTimeout(FY.current), FY.current = setTimeout((() => {
            IY({})
          }), dY))
        }), [YY]), (0, oY.useEffect)((() => () => {
          clearTimeout(FY.current)
        }), []), AY
      }("loaded" === vY.status ? vY.leaderboard : null), sY = function(YY) {
        const [rY, DY] = (0, oY.useState)(null), FY = "loaded" === YY.status ? YY.leaderboard.goalProgress : void 0;
        return (0, oY.useEffect)((() => {
          FY && DY(FY)
        }), [FY]), rY
      }(vY), iY = zY.f[`profileEffect_${AY.prizePack}`];
      if (IY) return null;
      const QY = "loaded" === vY.status ? vY.leaderboard : null,
        WY = null !== (rY = null === QY || void 0 === QY ? void 0 : QY.entries) && void 0 !== rY ? rY : null,
        EY = null !== QY && void 0 !== QY && QY.own && null !== WY && !WY.some((YY => YY.isOwn)) ? QY.own : null;
      return (0, jY.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, jY.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, jY.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, jY.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, jY.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, jY.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), FY("gameEvents:live")]
              }), (0, jY.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [FY("gameEvents:endsIn"), (0, jY.jsx)(eY.d, {
                  toTime: AY.endsAt,
                  onReachEndOfCountdown: () => {
                    RY(!0)
                  }
                })]
              })]
            }), (0, jY.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: FY(AY.titleKey)
            }), (0, jY.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, jY.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [iY && (0, jY.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, jY.jsx)(iY, {})
                }), (0, jY.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, jY.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: FY("gameEvents:prize")
                  }), (0, jY.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: FY(AY.prizeNameKey)
                  })]
                })]
              }), (0, jY.jsx)(MY, {
                event: AY,
                progress: sY
              })]
            })]
          }), (0, jY.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, jY.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, jY.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: FY(AY.leaderboard.titleKey)
              }), (0, jY.jsx)(fY.d, {
                ariaLabel: FY("gameEvents:leaderboardScope"),
                options: KY.b.map((YY => ({
                  value: YY,
                  label: FY(`gameEvents:${YY}Scope`)
                }))),
                value: OY,
                onChange: aY
              })]
            }), "loading" === vY.status && (0, jY.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, jY.jsx)(ZY.c, {})
            }), ("unavailable" === vY.status || "loaded" === vY.status && null === WY) && (0, jY.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: FY("gameEvents:leaderboardUnavailable")
            }), null !== WY && 0 === WY.length && (0, jY.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: FY("friends" === OY ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== WY && WY.length > 0 && (0, jY.jsx)("ol", {
              className: "GameEventPanelRows",
              children: WY.map((YY => {
                const rY = uY[YY.player.name];
                return (0, jY.jsxs)("li", {
                  className: yY()("GameEventPanelRow", {
                    GameEventPanelRowOwn: YY.isOwn,
                    GameEventPanelRowTop: YY.rank <= 3
                  }),
                  children: [(0, jY.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", YY.rank]
                  }), (0, jY.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, jY.jsx)(CY.g, {
                      playerSocialPreview: {
                        ...YY.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== rY && (0, jY.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", rY.amount.toLocaleString()]
                  }, rY.key), (0, jY.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: YY.value.toLocaleString()
                  })]
                }, YY.player.name)
              }))
            }), EY && (0, jY.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, jY.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", EY.rank.toLocaleString()]
              }), (0, jY.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: FY("gameEvents:yourPlace")
              }), (0, jY.jsx)("span", {
                className: "GameEventPanelScore",
                children: EY.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function MY(YY) {
      let {
        event: rY,
        progress: DY
      } = YY;
      const {
        t: FY
      } = (0, gY.C)(), AY = null !== DY && rY.prizeGoals.some(((YY, rY) => DY[rY] >= YY.target));
      return (0, jY.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, jY.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: FY(AY ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, jY.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: rY.prizeGoals.map(((YY, rY) => {
            const AY = null === DY ? null : Math.min(DY[rY], YY.target);
            return (0, jY.jsxs)(oY.Fragment, {
              children: [rY > 0 && (0, jY.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: FY("gameEvents:goalsOr")
              }), (0, jY.jsxs)("div", {
                className: yY()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: AY === YY.target
                }),
                children: [(0, jY.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: FY(YY.labelKey)
                }), (0, jY.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, jY.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== AY && void 0 !== AY ? AY : 0) / YY.target * 100 + "%"
                    }
                  }), null !== AY && (0, jY.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [AY.toLocaleString(), " / ", YY.target.toLocaleString()]
                  })]
                })]
              })]
            }, YY.board)
          }))
        })]
      })
    }
    var wY = DY(1526),
      bY = DY(1574),
      XY = DY(1076),
      qY = DY(741),
      pY = DY(3061);

    function kY(YY) {
      let {
        gameNameWithVariation: rY
      } = YY;
      const DY = (0, wY.x)(rY),
        [FY, AY] = (0, oY.useState)(null);
      if ((0, oY.useEffect)((() => {
          if (!DY) return;
          let YY = !0;
          return (0, bY.h)(DY).then((rY => {
            YY && AY(rY)
          })).catch((YY => {
            console.error(`Failed to load the page copy for ${DY.name}`, YY)
          })), () => {
            YY = !1
          }
        }), [DY]), !DY || !FY || FY.name !== DY.name) return null;
      const IY = (0, bY.d)(FY),
        RY = new Set((0, XY.d)((0, qY.f)()).map((YY => (0, wY.p)(YY)))),
        OY = FY.similarGames.filter((YY => RY.has((0, wY.p)(YY))));
      return (0, jY.jsx)("div", {
        className: "GamePageContent",
        children: (0, jY.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, jY.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, jY.jsx)("h2", {
              children: IY.whatIs
            }), FY.whatIs.map((YY => (0, jY.jsx)("p", {
              children: YY
            }, YY)))]
          }), (0, jY.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, jY.jsx)("h2", {
              children: IY.howToPlay
            }), FY.howToPlay.map((YY => (0, jY.jsx)("p", {
              children: YY
            }, YY)))]
          }), (0, jY.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, jY.jsx)("h2", {
              children: IY.features
            }), (0, jY.jsx)("ul", {
              children: FY.features.map((YY => (0, jY.jsx)("li", {
                children: YY
              }, YY)))
            })]
          }), (0, jY.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, jY.jsx)("h2", {
              children: IY.tips
            }), (0, jY.jsx)("ul", {
              children: FY.tips.map((YY => (0, jY.jsx)("li", {
                children: YY
              }, YY)))
            })]
          }), (0, jY.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, jY.jsx)("h2", {
              children: IY.faq
            }), FY.faq.map((YY => {
              let {
                question: rY,
                answer: DY
              } = YY;
              return (0, jY.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, jY.jsx)("h3", {
                  children: rY
                }), (0, jY.jsx)("p", {
                  children: DY
                })]
              }, rY)
            }))]
          }), OY.length > 0 && (0, jY.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, jY.jsx)("h2", {
              children: IY.similarGames
            }), (0, jY.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: OY.map((YY => (0, jY.jsx)("li", {
                children: (0, jY.jsx)(pY.g, {
                  source: {
                    type: "game",
                    gameNameWithVariation: YY
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, YY)))
            })]
          })]
        })
      })
    }
    var GY = DY(1098),
      xY = DY(99),
      nY = DY(1159),
      PY = DY(8783),
      UY = DY(1636),
      LY = DY(1501),
      tY = DY(1488),
      Yr = DY(1591),
      rr = DY(1443),
      Dr = DY(1346),
      Fr = DY(35773),
      Ar = DY(1237),
      Ir = DY(1057),
      Rr = DY(341),
      Or = DY(1066),
      gr = DY(1519),
      ar = DY(8317),
      vr = DY(19),
      ur = DY(2317),
      sr = DY(778),
      ir = DY(1231),
      yr = DY(6064);

    function Qr(YY) {
      let {
        preview: rY,
        isBroken: DY
      } = YY;
      const FY = null === rY ? null : (0, IY.c)(rY, "small"),
        RY = (0, AY.f)(null !== FY && void 0 !== FY ? FY : IY.l);
      return null === rY ? (0, jY.jsx)("div", {
        className: yY()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: DY
        }),
        children: (0, jY.jsx)(GY.e, {
          name: DY ? "triangle-exclamation" : "star"
        })
      }) : (0, jY.jsx)("div", {
        className: yY()("FeaturedGamesPopupSlotThumbnail", OY.j),
        style: (0, OY.h)(RY),
        role: "img",
        "aria-label": rY.name,
        children: (0, jY.jsx)(OY.d, {
          image: RY
        })
      })
    }

    function or(YY) {
      let {
        schematicId: rY,
        gameName: DY
      } = YY;
      const {
        userContext: AY
      } = (0, SY.d)(), IY = (0, NY.b)(), [RY, OY] = (0, oY.useState)(null), [gY, aY] = (0, oY.useState)(null), [vY, uY] = (0, oY.useState)(!1), iY = (0, oY.useCallback)((() => {
        aY(null), HY.e.getFeaturedGames(AY).then((YY => {
          IY.current && OY(YY.slots)
        })).catch((YY => {
          console.error("Failed to get featured games", YY), IY.current && aY("Failed to load featured games")
        }))
      }), [AY, IY]);
      (0, oY.useEffect)((() => {
        iY()
      }), [iY]);
      const yY = (YY, rY) => {
        vY || (uY(!0), HY.e.setFeaturedGame(AY, YY, rY).then((() => {
          IY.current && iY()
        })).catch((YY => {
          console.error("Failed to set featured game", YY), IY.current && aY("Failed to update the featured slot")
        })).finally((() => {
          IY.current && uY(!1)
        })))
      };
      return (0, jY.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, jY.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !RY && !gY && (0, jY.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, jY.jsx)(ZY.c, {})
        }), gY && (0, jY.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: gY
        }), RY && (0, jY.jsxs)(jY.Fragment, {
          children: [(0, jY.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: RY.map((YY => {
              const DY = YY.schematicId === rY,
                AY = null === YY.schematicId,
                {
                  categoryGroup: IY
                } = FY.N[YY.slotId];
              return (0, jY.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, jY.jsx)(Qr, {
                  preview: YY.preview,
                  isBroken: !AY
                }), (0, jY.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, jY.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, FY.nb)(IY), " \xb7 position", " ", (0, FY.P)(YY.slotId, FY.Ob) + 1, " of", " ", (0, FY.Lb)(IY, FY.Ob)]
                  }), AY && (0, jY.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !AY && null !== YY.preview && (0, jY.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: YY.preview.name
                  }), !AY && null === YY.preview && (0, jY.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, jY.jsx)(GY.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, jY.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [AY && (0, jY.jsxs)(sY.p, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      yY(YY.slotId, rY)
                    },
                    disabled: vY,
                    children: [(0, jY.jsx)(GY.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !AY && !DY && (0, jY.jsxs)(sY.J, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      yY(YY.slotId, rY)
                    },
                    disabled: vY,
                    children: [(0, jY.jsx)(GY.e, {
                      name: "star"
                    }), " Replace"]
                  }), !AY && (0, jY.jsxs)(sY.D, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      yY(YY.slotId, null)
                    },
                    disabled: vY,
                    children: [(0, jY.jsx)(GY.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, YY.slotId)
            }))
          }), (0, jY.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var Wr = DY(4246),
      Er = DY(4156),
      mr = DY(4162),
      Vr = DY(4186),
      Sr = DY(4135),
      lr = DY(3165),
      Tr = DY(8309),
      er = DY(236);
    const Nr = {
      skyblock: [DY(35799).b]
    };
    var Br = DY(625);
    const cr = {
      listedVariations: null,
      backgroundImage: IY.l,
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

    function Kr(YY, rY) {
      const DY = sr.g[YY.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, IY.c)(YY, "large"),
        badges: [],
        category: YY.gameCategory,
        title: void 0 !== (null === DY || void 0 === DY ? void 0 : DY.title) ? rY(DY.title) : YY.name,
        variationTitle: null,
        description: void 0 !== (null === DY || void 0 === DY ? void 0 : DY.description) ? rY(DY.description) : YY.description,
        ownerSocialPreviewWithoutLocation: "owner" in YY ? YY.owner : null,
        ccu: YY.ccu,
        favourites: YY.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in YY ? YY.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function Hr(YY) {
      var rY, DY, FY;
      return null !== (rY = null !== (DY = (0, er.k)() ? function(YY) {
        for (const [rY, DY] of Object.entries(Nr)) {
          const FY = [rY, ...DY.map((YY => (0, Rr.Lb)(rY, YY)))];
          if (FY.includes(YY)) return FY
        }
        return null
      }(YY) : null) && void 0 !== DY ? DY : null === (FY = sr.d[YY]) || void 0 === FY ? void 0 : FY.listedVariations) && void 0 !== rY ? rY : null
    }

    function zr() {
      const {
        gameNameWithVariation: YY
      } = (0, LY.D)();
      if ((0, oY.useEffect)(lr.p, []), YY && (0, Ar.r)(YY)) return (0, jY.jsx)(Zr, {
        urlId: YY
      }, YY);
      const rY = YY && (0, Ir.l)(YY) ? YY : "firstParty";
      return (0, jY.jsx)(Cr, {}, rY)
    }

    function Zr(YY) {
      let {
        urlId: rY
      } = YY;
      const {
        userContext: DY,
        isUserContextUpdating: FY
      } = (0, SY.d)(), AY = (0, oY.useMemo)((() => (0, UY.k)(rY)), [rY]);
      (0, oY.useMemo)((() => {
        if (null === AY) return;
        const YY = nY.userContextManager.peekCurrentUserContext();
        (null !== YY ? HY.e.getGame(YY, AY.schematicId) : nY.userContextManager.getCurrentUserContext().then((YY => HY.e.getGame(YY, AY.schematicId)))).catch((YY => {
          console.error(`Failed to get the custom game ${AY.schematicId}`, YY), (0, UY.h)(rY)
        }))
      }), [AY, rY]);
      const [IY, RY] = (0, oY.useState)(null), OY = (0, PY.c)();
      (0, oY.useEffect)((() => {
        if (null !== AY || FY) return;
        let YY = !0;
        return HY.e.getGameByUrlId(DY, rY).then((DY => {
          YY && RY({
            urlId: rY,
            game: DY
          })
        })).catch((DY => {
          console.error(`Failed to find the custom game with urlId ${rY}`, DY), YY && (0, tY.navigateToHomePage)()
        })), () => {
          YY = !1
        }
      }), [rY, AY, FY, DY]);
      const gY = null !== AY && void 0 !== AY ? AY : (null === IY || void 0 === IY ? void 0 : IY.urlId) === rY ? IY.game : null;
      return null === gY ? (0, jY.jsx)(ZY.c, {}) : OY ? (0, jY.jsx)(Cr, {
        gameNameWithVariation: (0, Ir.y)(gY.schematicId),
        knownCustomGame: gY
      }, gY.schematicId) : null
    }

    function Cr(YY) {
      var rY, DY, RY, iY, KY, zY, ZY, fY;
      let {
        gameNameWithVariation: hY,
        knownCustomGame: dY = null
      } = YY;
      const {
        t: MY
      } = (0, gY.C)();
      (0, ur.g)();
      const bY = (0, ur.k)(),
        {
          userContext: XY,
          isUserContextUpdating: qY
        } = (0, SY.d)(),
        pY = (0, Sr.g)(),
        nY = (0, tY.useNavigatePreserveSearch)(),
        PY = (0, LY.D)(),
        UY = (0, oY.useMemo)((() => hY ? {
          gameNameWithVariation: hY
        } : PY), [hY, PY]),
        rr = (0, ar.e)(UY),
        Ar = (0, oY.useMemo)((() => {
          const YY = function(YY) {
            var rY, DY;
            const FY = Hr(YY);
            if (!FY || 0 === FY.length || FY.includes(YY)) return YY;
            const AY = aY.m.getItem((0, EY.k)(YY));
            if (AY && FY.includes(AY)) return AY;
            return null !== (rY = null === (DY = sr.d[YY]) || void 0 === DY ? void 0 : DY.defaultListedVariation) && void 0 !== rY ? rY : FY[0]
          }(rr.gameNameWithVariation);
          return YY === rr.gameNameWithVariation ? rr : {
            ...rr,
            gameNameWithVariation: YY
          }
        }), [rr]);
      (0, oY.useEffect)((() => {
        const YY = rr.gameNameWithVariation;
        Ar.gameNameWithVariation !== YY && YY !== (0, Rr.Pb)(YY) && nY((0, wY.t)(Ar.gameNameWithVariation), {
          replace: !0
        })
      }), [Ar.gameNameWithVariation, rr.gameNameWithVariation, nY]);
      const Qr = (0, NY.b)(),
        [lr, er] = (0, oY.useState)(""),
        Nr = oY.useRef(null),
        [zr, Zr] = (0, oY.useState)(),
        Cr = (0, Ir.l)(Ar.gameNameWithVariation),
        jr = (0, oY.useMemo)((() => Cr ? null : function(YY, rY, DY) {
          var FY, AY;
          const RY = sr.d[YY];
          return (0, Br.H)(RY) ? null : {
            listedVariations: Hr(YY),
            backgroundImage: (0, IY.i)(YY, (0, IY.b)(RY)),
            badges: (0, vY.filterBadges)(RY.badges),
            category: RY.type,
            title: DY(RY.title),
            variationTitle: RY.variationTitle ? DY(RY.variationTitle) : null,
            description: DY(RY.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== rY ? null !== (FY = rY[YY]) && void 0 !== FY ? FY : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: RY.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: RY.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (AY = RY.canCreateCustomLobbies) || void 0 === AY || AY,
            countdownInformation: (0, EY.g)(YY)
          }
        }(Ar.gameNameWithVariation, bY, MY)), [Cr, Ar.gameNameWithVariation, bY, MY]),
        [hr, dr] = (0, oY.useState)(!1),
        [Jr, Mr] = (0, oY.useState)((() => dY ? Kr(dY, MY) : cr)),
        wr = null !== jr && void 0 !== jr ? jr : Jr,
        [br] = (0, oY.useState)(wr === cr),
        Xr = (0, AY.f)(wr.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: qr,
          recentlyPlayedCustomLobbies: pr
        } = (0, oY.useMemo)((() => function(YY, rY, DY, FY) {
          var AY;
          const IY = YY => {
              const DY = (0, Ir.r)(YY),
                FY = rY.find((rY => "custom" === rY.type ? rY.schematicId === DY : rY.gameNameWithVariation === YY));
              return FY ? [...FY.recentLobbies] : []
            },
            RY = (0, vY.getRecentGameNameWithVariationLobbiesKey)(YY),
            OY = null !== (AY = aY.m.getItem(RY)) && void 0 !== AY ? AY : [],
            gY = [...IY(YY), ...OY],
            uY = [];
          for (const aY of gY)(0, ir.P)(aY) && !uY.includes(aY) && uY.push(aY);
          let sY = gY;
          if (DY) {
            const YY = IY("classic_worlds"),
              rY = gY.filter((rY => !YY.includes(rY)));
            sY = [...YY, ...rY]
          }
          const iY = [],
            yY = !1 === FY ? [] : sY;
          for (const aY of yY)(0, ir.P)(aY) || iY.includes(aY) || iY.push(aY);
          return {
            recentlyPlayedPublicLobbies: uY,
            recentlyPlayedCustomLobbies: iY
          }
        }(Ar.gameNameWithVariation, pY, wr.showWorldsInsteadOfCustomLobbies, wr.canCreateCustomLobbies)), [Ar.gameNameWithVariation, pY, wr.showWorldsInsteadOfCustomLobbies, wr.canCreateCustomLobbies]),
        [kr, Gr] = (0, oY.useState)(!0),
        [xr, nr] = (0, oY.useState)([]),
        [Pr, Ur] = (0, oY.useState)(null),
        [Lr, tr] = (0, oY.useState)("explore"),
        YD = (0, oY.useRef)(!1),
        rD = (0, oY.useCallback)((YY => {
          (0, WY.unstable_batchedUpdates)((() => {
            Zr(YY), Mr((rY => ({
              ...Kr(YY, MY),
              isFavourite: rY.isFavourite
            })))
          }))
        }), [MY]);
      (0, oY.useEffect)((() => {
        null === vr.b.get("gameEntrySource") && (0, vr.g)("gameInformationPageDirect")
      }), []);
      const DD = (0, oY.useRef)(null);
      (0, oY.useEffect)((() => {
        const YY = YY => {
            DD.current = YY.target instanceof Element ? YY.target.closest("a, button") : null
          },
          rY = YY => {
            "Tab" === YY.key && (DD.current = null)
          };
        return document.addEventListener("pointerdown", YY, !0), document.addEventListener("keydown", rY, !0), () => {
          document.removeEventListener("pointerdown", YY, !0), document.removeEventListener("keydown", rY, !0)
        }
      }), []), (0, lY.e)("Enter", (YY => {
        const rY = YY.target instanceof Element ? YY.target : null;
        if (YY.defaultPrevented || null !== rY && void 0 !== rY && rY.closest("input, textarea, select")) return;
        const DY = null === rY || void 0 === rY ? void 0 : rY.closest("a, button");
        DY && DY !== DD.current || (YY.preventDefault(), uD())
      })), (0, TY.d)(tY.navigateToHomePage);
      const FD = qr.length > 0 || pr.length > 0,
        AD = !wr.useRejoinLastLobbyButton || 0 === qr.length,
        ID = Cr && null === wr.ownerSocialPreviewWithoutLocation,
        RD = XY.getPlayerName() === (null === zr || void 0 === zr || null === (rY = zr.owner) || void 0 === rY ? void 0 : rY.name),
        OD = null !== (DY = null === (RY = wr.badges.find((YY => "event" === YY.type))) || void 0 === RY ? void 0 : RY.event) && void 0 !== DY ? DY : null,
        gD = AD ? sY.n : sY.f,
        aD = (0, jY.jsx)(uY.g, {
          tooltipInner: (0, jY.jsx)("div", {
            children: MY("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, jY.jsx)(gD, {
            className: "GameInformationButton",
            padDefaultFocus: AD,
            showPress: !0,
            onClick: () => {
              uD()
            },
            children: (0, jY.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [AD && (0, jY.jsxs)(jY.Fragment, {
                children: [(0, jY.jsx)(GY.e, {
                  name: "play"
                }), " "]
              }), MY("homePage:quickPlay")]
            })
          })
        });
      (0, oY.useEffect)((() => {
        if (!Cr || qY) return;
        let YY = !0;
        const rY = (0, Ir.r)(Ar.gameNameWithVariation);
        return HY.e.getGame(XY, rY).then((rY => {
          YY && rD(rY)
        })).catch((rY => {
          console.error("Failed to get Custom Game information", rY), YY && (0, tY.navigateToHomePage)()
        })), HY.e.getFavouriteGames(XY).then((DY => {
          YY && Mr((YY => ({
            ...YY,
            isFavourite: DY.includes(rY)
          })))
        })).catch((rY => {
          console.error("Failed to get favourite games", rY), YY && dr(!0)
        })), () => {
          YY = !1
        }
      }), [Cr, qY, Ar.gameNameWithVariation, rD, XY]);
      const vD = !Cr && null === jr;

      function uD(YY) {
        (0, Tr.h)(), nY((0, mY.d)(Ar.gameNameWithVariation, YY))
      }(0, oY.useEffect)((() => {
        vD && (0, tY.navigateToHomePage)()
      }), [vD]), (0, oY.useEffect)((() => {
        !1 !== wr.canCreateCustomLobbies && null !== wr.showWorldsInsteadOfCustomLobbies && !1 === qY && (Gr(!0), HY.e.getFavouriteLobbies(XY).then((YY => {
          Ur(YY)
        })), HY.e.getOpenCustomLobbies(XY, {
          gameNameWithVariation: wr.showWorldsInsteadOfCustomLobbies ? "classic" : Ar.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === Lr,
          onlyFavouriteLobbies: "favourite" === Lr
        }).then((YY => {
          Qr.current && nr(YY)
        })).catch((YY => {})).finally((() => {
          Qr.current && Gr(!1)
        })))
      }), [qY, Ar, Lr, wr.showWorldsInsteadOfCustomLobbies, wr.canCreateCustomLobbies, Qr, XY]);
      const sD = (0, oY.useCallback)((async YY => {
          try {
            if (!Pr) return;
            Pr.includes(YY) ? (HY.e.unfavouriteLobby(XY, YY), Ur(Pr.filter((rY => rY !== YY)))) : (HY.e.favouriteLobby(XY, YY).catch((YY => {
              console.error("Failed to favourite lobby", YY)
            })), Ur([...Pr, YY]))
          } catch (rY) {
            console.error("Failed to like lobby", rY)
          }
        }), [XY, Pr]),
        iD = (null === zr || void 0 === zr ? void 0 : zr.schematicId) === (0, Ir.r)(rr.gameNameWithVariation) ? zr : null,
        yD = iD && (0, wY.z)(rr.gameNameWithVariation, (YY => MY(YY)), iD);
      (0, Yr.h)(iD && (0, wY.t)(rr.gameNameWithVariation, iD));
      const QD = xY.featureFlags.canUseCustomLobbies && !0 === wr.canCreateCustomLobbies,
        oD = (0, jY.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, jY.jsx)(kY, {
            gameNameWithVariation: Ar.gameNameWithVariation
          })
        });
      return (0, jY.jsx)(jY.Fragment, {
        children: (0, jY.jsxs)("article", {
          className: yY()("GameInformation", {
            GameInformationFadeIn: br,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (iY = wr.countdownInformation) || void 0 === iY ? void 0 : iY.type)
          }),
          children: [yD && (0, jY.jsx)(VY.d, {
            meta: yD
          }), (0, jY.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, jY.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, jY.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, jY.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, jY.jsx)("div", {
                  className: yY()("GameInformationTopBackgroundImage", OY.j),
                  style: (0, OY.h)(Xr),
                  children: (0, jY.jsx)(OY.d, {
                    image: Xr
                  })
                })]
              }), (0, jY.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, jY.jsx)(Wr.b, {}), (0, jY.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, jY.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, jY.jsxs)("div", {
                      className: yY()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: ID
                      }),
                      children: [wr.badges.map((YY => (0, jY.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${YY.type}`,
                        children: (0, jY.jsx)(cY.e, {
                          badge: YY
                        })
                      }, YY.type))), Cr && (0, jY.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, jY.jsx)(BY.b, {
                          text: (0, FY.eb)({
                            type: "playerCrafted"
                          })
                        })
                      }), wr.category && (0, jY.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, jY.jsx)(BY.b, {
                          text: [{
                            str: (0, FY.fb)(wr.category).toUpperCase()
                          }]
                        })
                      }), null !== wr.ccu && (0, jY.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, jY.jsx)(GY.e, {
                          name: "user"
                        }), (0, ir.S)(wr.ccu), " online"]
                      }), null !== wr.ownerSocialPreviewWithoutLocation && (0, jY.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, jY.jsx)("span", {
                          children: "Made by"
                        }), (0, jY.jsx)(CY.g, {
                          playerSocialPreview: {
                            ...wr.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), ID && (0, jY.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, jY.jsx)("span", {
                          children: "Made by"
                        }), (0, jY.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== wr.favourites && (null !== wr.isFavourite || Cr && !hr) && (0, jY.jsx)(sY.q, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== YD.current && (YD.current = !0, null !== wr.isFavourite)) {
                              const YY = (0, Ir.r)(Ar.gameNameWithVariation);
                              let rY;
                              wr.isFavourite ? (rY = -1, HY.e.unfavouriteGame(XY, YY).catch((YY => {
                                console.error("Failed to get unfavourite game", YY)
                              })).finally((() => {
                                YD.current = !1
                              }))) : (rY = 1, HY.e.favouriteGame(XY, YY).catch((YY => {
                                console.error("Failed to get favourite game", YY)
                              })).finally((() => {
                                YD.current = !1
                              }))), Mr((YY => ({
                                ...YY,
                                isFavourite: !YY.isFavourite
                              }))), Mr((YY => ({
                                ...YY,
                                favourites: YY.favourites + rY
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (KY = wr.isFavourite) && void 0 !== KY && KY,
                        disabled: null === wr.isFavourite,
                        className: yY()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === wr.isFavourite
                        })
                      }, null === wr.isFavourite ? "pending" : "known"), Cr && !ID && xY.featureFlags.useSocialFeatures && !RD && (0, jY.jsx)(mr.c, {
                        targetType: "customGame",
                        targetId: (0, Ir.r)(Ar.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (XY.playerHasRank("developer") || XY.playerHasRank("admin") && RD) && (0, jY.jsxs)(sY.n, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          nY((0, gr.q)((0, Or.g)(Ar.gameNameWithVariation, !0)))
                        },
                        children: [(0, jY.jsx)(GY.e, {
                          name: "star-christmas"
                        }), " ", MY("studio:viewInStudio")]
                      }), Cr && XY.playerHasRank("developer") && (0, jY.jsxs)(sY.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, yr.e)({
                            schematicId: (0, Ir.r)(Ar.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, jY.jsx)(GY.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), Cr && XY.playerHasRank("developer") && (0, jY.jsxs)(sY.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Dr.NotificationProvider.showCustomPopup({
                            body: () => (0, jY.jsx)(or, {
                              schematicId: (0, Ir.r)(Ar.gameNameWithVariation),
                              gameName: wr.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, jY.jsx)(GY.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (zY = wr.countdownInformation) || void 0 === zY ? void 0 : zY.type) && (0, jY.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, jY.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, jY.jsx)(eY.d, {
                            toTime: wr.countdownInformation.countdownToTime
                          })]
                        }), (0, jY.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: wr.countdownInformation.previewText
                        })]
                      })]
                    }, ID ? "pending" : "shown"), (0, jY.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, jY.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, jY.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [wr.title, " ", wr.variationTitle && (null === (ZY = sr.d[Ar.gameNameWithVariation]) || void 0 === ZY ? void 0 : ZY.variationThumbnailUseBigRatio) && (0, jY.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: wr.variationTitle
                          })]
                        })
                      }), wr.listedVariations && wr.listedVariations.length > 0 && (0, jY.jsx)("div", {
                        className: yY()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (fY = sr.d[Ar.gameNameWithVariation]) || void 0 === fY ? void 0 : fY.variationThumbnailUseBigRatio
                        }),
                        children: wr.listedVariations.map((YY => {
                          var rY, DY;
                          return (0, jY.jsxs)(fr, {
                            variation: YY,
                            isSelected: Ar.gameNameWithVariation === YY,
                            children: [null !== bY && (0, jY.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, jY.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, jY.jsx)(GY.e, {
                                  name: "user"
                                }), " ", (0, ir.S)(null !== (rY = bY[YY]) && void 0 !== rY ? rY : 0)]
                              })
                            }), (0, jY.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: MY(null !== (DY = sr.d[YY].variationTitle) && void 0 !== DY ? DY : sr.d[YY].title)
                            }), (0, jY.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, vY.filterBadges)(sr.d[YY].badges).map((YY => (0, jY.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + YY.type,
                                children: (0, jY.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, jY.jsx)(cY.e, {
                                    badge: YY
                                  })
                                })
                              }, YY.type)))
                            })]
                          }, YY)
                        }))
                      })]
                    }), wr.description && (0, jY.jsx)("p", {
                      className: "GameInformationDescription",
                      children: wr.description
                    })]
                  }), (0, jY.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, jY.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!AD && (0, jY.jsx)(uY.g, {
                        tooltipInner: (0, jY.jsx)("div", {
                          children: MY("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, jY.jsx)(sY.n, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            uD(qr[0])
                          },
                          children: (0, jY.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, jY.jsx)(GY.e, {
                              name: "play"
                            }), " ", MY("homePage:rejoinLobbyNumber", {
                              number: qr[0]
                            })]
                          })
                        })
                      }), AD && aD]
                    }), (0, jY.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!AD && aD, (0, jY.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, jY.jsx)(GY.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, jY.jsx)(QY.d, {
                          className: "JoinLobbyInput",
                          placeholderText: MY("homePage:lobbyName"),
                          maxLength: ir.Q,
                          domRef: Nr,
                          onValueChange: YY => {
                            YY = (0, ir.ub)(YY), er(YY)
                          },
                          onEnter: () => {
                            0 === lr.length ? uD(qr[0]) : uD(lr)
                          }
                        }), (0, jY.jsx)(sY.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === lr.length ? uD(qr[0]) : uD(lr)
                          },
                          children: MY("general:join")
                        })]
                      })]
                    }), (0, jY.jsxs)("section", {
                      className: yY()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !FD
                      }),
                      children: [(0, jY.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, jY.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, jY.jsx)(GY.e, {
                            name: "clock-rotate-left"
                          }), FD && (0, jY.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: MY("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, jY.jsx)(Vr.b, {
                        lobbyGroups: [qr, pr],
                        onLobbyClick: YY => {
                          uD(YY)
                        },
                        keyPrefix: Ar.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== OD && (0, jY.jsx)(JY, {
                eventName: OD
              })]
            }), QD && (0, jY.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, jY.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, jY.jsxs)("div", {
                  className: yY()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === wr.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === wr.showWorldsInsteadOfCustomLobbies && (0, jY.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, jY.jsx)(GY.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, jY.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, jY.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), MY("game:worlds")]
                    })]
                  }), !1 === wr.showWorldsInsteadOfCustomLobbies && (0, jY.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, jY.jsx)(GY.e, {
                      name: "joystick"
                    }), (0, jY.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, jY.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), MY("homePage:customLobbies")]
                    })]
                  }), (0, jY.jsx)(sY.J, {
                    onClick: () => {
                      tr("explore")
                    },
                    active: "explore" === Lr,
                    children: MY("general:explore")
                  }), (0, jY.jsx)(sY.J, {
                    onClick: () => {
                      tr("favourite")
                    },
                    active: "favourite" === Lr,
                    children: MY("homePage:favouriteLobbies")
                  }), (0, jY.jsx)(sY.J, {
                    onClick: () => {
                      tr("owned")
                    },
                    active: "owned" === Lr,
                    children: MY("homePage:ownedLobbies")
                  })]
                }), (0, jY.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, jY.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, jY.jsx)(Er.e, {
                      label: "Create",
                      onClick: () => {
                        Dr.NotificationProvider.showCustomPopup({
                          body: YY => (0, jY.jsx)(Fr.CreateCustomLobby, {
                            gameNameWithVariation: Ar.gameNameWithVariation,
                            close: YY
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === kr && (0, jY.jsx)(Er.j, {}), !1 === kr && xr.length > 0 && xr.map((YY => (0, jY.jsx)(Er.g, {
                      customLobby: YY,
                      favouriteLobbies: Pr,
                      toggleLikeLobby: sD,
                      showReport: xY.featureFlags.useSocialFeatures && "owned" !== Lr
                    }, YY.name)))]
                  }), oD]
                })]
              })
            })]
          }), !QD && oD]
        })
      })
    }

    function fr(YY) {
      let {
        variation: rY,
        isSelected: DY,
        children: FY
      } = YY;
      const gY = sr.d[rY],
        vY = (0, IY.i)(rY, (0, IY.j)(gY)),
        uY = (0, AY.f)(vY),
        sY = (0, RY.f)([(0, IY.f)(rY, (0, IY.b)(gY))]);
      return (0, jY.jsxs)(tY.LinkPreserveSearch, {
        to: (0, wY.t)(rY),
        replace: !0,
        className: yY()("GameInformationVariation", OY.j, {
          SelectedGameInformationVariation: DY
        }),
        onClick: YY => {
          if (!(0, rr.b)(YY)) return;
          const DY = (0, EY.k)(rY);
          aY.m.setItem(DY, rY)
        },
        onMouseEnter: sY.start,
        onMouseLeave: sY.cancel,
        onFocus: sY.start,
        onBlur: sY.cancel,
        style: (0, OY.h)(uY),
        children: [(0, jY.jsx)(OY.d, {
          image: uY
        }), FY]
      })
    }
  },
  6064: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => WY
    });
    var FY = DY(61),
      AY = DY(1437),
      IY = DY(1471),
      RY = DY(3069),
      OY = DY(1152),
      gY = DY(1337),
      aY = DY(1354),
      vY = DY(1098),
      uY = DY(1092),
      sY = DY.n(uY),
      iY = DY(1125);

    function yY(YY) {
      let {
        info: rY,
        className: DY
      } = YY;
      return (0, iY.jsxs)("div", {
        className: sY()("GameApprovalInfoDetails", DY),
        children: [(0, iY.jsxs)("div", {
          className: sY()("GameApprovalInfoSummary", rY.overallPassed ? "Passed" : "Failed"),
          children: [(0, iY.jsx)(vY.e, {
            name: rY.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, iY.jsx)("span", {
            children: rY.summary
          })]
        }), rY.rows.length > 0 && (0, iY.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: rY.rows.map((YY => (0, iY.jsxs)("div", {
            className: sY()("GameApprovalInfoRow", YY.passed ? "Passed" : "Failed"),
            children: [(0, iY.jsx)(vY.e, {
              name: YY.passed ? "check" : "xmark"
            }), (0, iY.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, iY.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: YY.label
              }), (0, iY.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: YY.valueText
              })]
            })]
          }, YY.label)))
        })]
      })
    }
    var QY = DY(1211),
      oY = DY(1346);

    function WY(YY) {
      oY.NotificationProvider.showCustomPopup({
        body: () => (0, iY.jsx)(EY, {
          ...YY
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function EY(YY) {
      let {
        schematicId: rY,
        canOverride: DY,
        onApprovalChanged: uY
      } = YY;
      const {
        t: sY
      } = (0, QY.C)(), {
        userContext: oY
      } = (0, OY.d)(), WY = (0, RY.b)(), [EY, mY] = (0, FY.useState)(null), [VY, SY] = (0, FY.useState)(null), [lY, TY] = (0, FY.useState)(!1), eY = (0, FY.useCallback)((() => {
        SY(null), IY.e.getGameApprovalInfo(oY, rY).then((YY => {
          WY.current && mY(YY)
        })).catch((YY => {
          console.error("Failed to get game approval info", YY), WY.current && SY(sY("studio:approvalLoadFailed"))
        }))
      }), [oY, rY, WY, sY]);
      (0, FY.useEffect)((() => {
        eY()
      }), [eY]);
      const NY = YY => {
        lY || (TY(!0), IY.e.setGameApproval(oY, rY, YY).then((() => {
          null === uY || void 0 === uY || uY(), WY.current && eY()
        })).catch((YY => {
          console.error("Failed to set game approval", YY)
        })).finally((() => {
          WY.current && TY(!1)
        })))
      };
      return (0, iY.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, iY.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: sY("studio:approvalTitle")
        }), !EY && !VY && (0, iY.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, iY.jsx)(gY.c, {})
        }), VY && (0, iY.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: VY
        }), EY && (0, iY.jsxs)(iY.Fragment, {
          children: [(0, iY.jsx)(yY, {
            info: EY
          }), DY && (0, iY.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== EY.manualOverride && (0, iY.jsx)(aY.g, {
              tooltipInner: (0, iY.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, iY.jsxs)(AY.n, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  NY(!0)
                },
                disabled: lY,
                children: [(0, iY.jsx)(vY.e, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== EY.manualOverride && (0, iY.jsx)(aY.g, {
              tooltipInner: (0, iY.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, iY.jsxs)(AY.D, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  NY(!1)
                },
                disabled: lY,
                children: [(0, iY.jsx)(vY.e, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== EY.manualOverride && (0, iY.jsx)(aY.g, {
              tooltipInner: (0, iY.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, iY.jsxs)(AY.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  NY(null)
                },
                disabled: lY,
                children: [(0, iY.jsx)(vY.e, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  8783: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(61),
      AY = DY(3168);

    function IY() {
      const [YY, rY] = (0, FY.useState)(!1);
      return (0, FY.useLayoutEffect)((() => {
        let YY = !0;
        return (0, AY.b)().then((() => {
          YY && rY(!0)
        })), () => {
          YY = !1
        }
      }), []), YY
    }
  },
  8317: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    var FY = DY(1330),
      AY = DY(1231),
      IY = DY(625);

    function RY(YY) {
      return YY = function(YY, rY) {
        var DY;
        const FY = new URLSearchParams(rY),
          AY = FY.get("lobby"),
          IY = FY.get("vm"),
          RY = null !== (DY = AY) && void 0 !== DY ? DY : YY.lobbyName,
          OY = null !== IY && void 0 !== IY ? IY : YY.directJoinVmUrl;
        if (RY === YY.lobbyName && OY === YY.directJoinVmUrl) return YY;
        return {
          ...YY,
          lobbyName: RY,
          directJoinVmUrl: OY
        }
      }(YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), YY = function(YY) {
        if ((0, IY.H)(YY.directJoinVmUrl)) return YY;
        const rY = (0, AY.Z)(YY.directJoinVmUrl);
        null === rY && (YY.directJoinVmUrl = void 0);
        return YY
      }(YY = function(YY) {
        if ((0, IY.H)(YY.gameNameWithVariation)) return YY;
        return YY.gameNameWithVariation = (0, FY.m)(YY.gameNameWithVariation), YY
      }(YY))
    }
  },
  8309: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY,
      h: () => AY
    });
    let FY = !1;

    function AY() {
      FY = !0
    }

    function IY() {
      return FY
    }
  },
  35799: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      e: () => FY
    });
    const FY = "skyblockSkills",
      AY = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);