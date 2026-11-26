export const id = 133;
export const ids = [133, 702];
export const modules = {
  37032: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => fX
    });
    var cU = zU(320),
      yU = zU(3887),
      QU = zU(3929),
      AU = zU(3920),
      FU = zU(3914),
      oU = zU(1193),
      DU = zU(42),
      EU = zU(1800),
      YU = zU(1420),
      NU = zU(1494),
      IU = zU(1106),
      pU = zU.n(IU),
      aU = zU(1726),
      tU = zU(61),
      gU = zU(73),
      kU = zU(2494),
      GU = zU(1376),
      BU = zU(1660),
      ZU = zU(1129),
      RU = zU(3805),
      PU = zU(4991),
      WU = zU(2812),
      dU = zU(1978),
      LU = zU(3884),
      eU = zU(1814),
      CU = zU(1545),
      wU = zU(2236),
      qU = zU(1384),
      OU = zU(2841),
      SU = zU(5581),
      rU = zU(1305);
    const uU = 15e3,
      fU = 2500;

    function iU(UU) {
      var XU;
      let {
        eventName: zU
      } = UU;
      const {
        t: cU
      } = (0, oU.I)(), yU = eU.h[zU], [QU, AU] = (0, tU.useState)((() => Date.now() >= yU.endsAt.getTime())), [FU, DU] = (0, tU.useState)("overall"), EU = function(UU, XU) {
        const {
          userContext: zU,
          isUserContextUpdating: cU
        } = (0, ZU.d)(), yU = `${UU}:${XU}`, [QU, AU] = (0, tU.useState)({
          requestKey: yU,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, tU.useEffect)((() => {
          if (cU) return;
          let QU, FU = !1;
          const oU = async () => {
            if ("visible" === document.visibilityState) try {
              const cU = await CU.c.getGameEventLeaderboard(zU, {
                event: UU,
                scope: XU
              });
              FU || AU({
                requestKey: yU,
                leaderboard: {
                  status: "loaded",
                  leaderboard: cU
                }
              })
            } catch {
              FU || AU((UU => UU.requestKey === yU && "loaded" === UU.leaderboard.status ? UU : {
                requestKey: yU,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            FU || (QU = setTimeout(oU, uU))
          };
          return oU(), () => {
            FU = !0, clearTimeout(QU)
          }
        }), [UU, XU, yU, zU, cU]), QU.requestKey === yU ? QU.leaderboard : {
          status: "loading"
        }
      }(zU, FU), YU = function(UU) {
        const XU = (0, tU.useRef)(null),
          zU = (0, tU.useRef)(0),
          cU = (0, tU.useRef)(),
          [yU, QU] = (0, tU.useState)({});
        return (0, tU.useEffect)((() => {
          const yU = null === UU || void 0 === UU ? void 0 : UU.entries;
          if (!yU) return;
          const AU = new Map(yU.map((UU => [UU.player.name, UU.value]))),
            FU = XU.current;
          if (XU.current = AU, null === FU) return;
          const oU = {};
          for (const [UU, XU] of AU) {
            const cU = FU.get(UU);
            void 0 !== cU && XU > cU && (oU[UU] = {
              amount: XU - cU,
              key: zU.current++
            })
          }
          0 !== Object.keys(oU).length && (QU(oU), clearTimeout(cU.current), cU.current = setTimeout((() => {
            QU({})
          }), fU))
        }), [UU]), (0, tU.useEffect)((() => () => {
          clearTimeout(cU.current)
        }), []), yU
      }("loaded" === EU.status ? EU.leaderboard : null), NU = function(UU) {
        const [XU, zU] = (0, tU.useState)(null), cU = "loaded" === UU.status ? UU.leaderboard.goalProgress : void 0;
        return (0, tU.useEffect)((() => {
          cU && zU(cU)
        }), [cU]), XU
      }(EU), IU = wU.h[`profileEffect_${yU.prizePack}`];
      if (QU) return null;
      const aU = "loaded" === EU.status ? EU.leaderboard : null,
        gU = null !== (XU = null === aU || void 0 === aU ? void 0 : aU.entries) && void 0 !== XU ? XU : null,
        kU = null !== aU && void 0 !== aU && aU.own && null !== gU && !gU.some((UU => UU.isOwn)) ? aU.own : null;
      return (0, rU.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, rU.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, rU.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, rU.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, rU.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, rU.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), cU("gameEvents:live")]
              }), (0, rU.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [cU("gameEvents:endsIn"), (0, rU.jsx)(WU.b, {
                  toTime: yU.endsAt,
                  onReachEndOfCountdown: () => {
                    AU(!0)
                  }
                })]
              })]
            }), (0, rU.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: cU(yU.titleKey)
            }), (0, rU.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, rU.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [IU && (0, rU.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, rU.jsx)(IU, {})
                }), (0, rU.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, rU.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: cU("gameEvents:prize")
                  }), (0, rU.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: cU(yU.prizeNameKey)
                  })]
                })]
              }), (0, rU.jsx)(HU, {
                event: yU,
                progress: NU
              })]
            })]
          }), (0, rU.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, rU.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, rU.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: cU(yU.leaderboard.titleKey)
              }), (0, rU.jsx)(SU.d, {
                ariaLabel: cU("gameEvents:leaderboardScope"),
                options: eU.e.map((UU => ({
                  value: UU,
                  label: cU(`gameEvents:${UU}Scope`)
                }))),
                value: FU,
                onChange: DU
              })]
            }), "loading" === EU.status && (0, rU.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, rU.jsx)(qU.b, {})
            }), ("unavailable" === EU.status || "loaded" === EU.status && null === gU) && (0, rU.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: cU("gameEvents:leaderboardUnavailable")
            }), null !== gU && 0 === gU.length && (0, rU.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: cU("friends" === FU ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== gU && gU.length > 0 && (0, rU.jsx)("ol", {
              className: "GameEventPanelRows",
              children: gU.map((UU => {
                const XU = YU[UU.player.name];
                return (0, rU.jsxs)("li", {
                  className: pU()("GameEventPanelRow", {
                    GameEventPanelRowOwn: UU.isOwn,
                    GameEventPanelRowTop: UU.rank <= 3
                  }),
                  children: [(0, rU.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", UU.rank]
                  }), (0, rU.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, rU.jsx)(OU.f, {
                      playerSocialPreview: {
                        ...UU.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== XU && (0, rU.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", XU.amount.toLocaleString()]
                  }, XU.key), (0, rU.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: UU.value.toLocaleString()
                  })]
                }, UU.player.name)
              }))
            }), kU && (0, rU.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, rU.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", kU.rank.toLocaleString()]
              }), (0, rU.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: cU("gameEvents:yourPlace")
              }), (0, rU.jsx)("span", {
                className: "GameEventPanelScore",
                children: kU.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function HU(UU) {
      let {
        event: XU,
        progress: zU
      } = UU;
      const {
        t: cU
      } = (0, oU.I)(), yU = null !== zU && XU.prizeGoals.some(((UU, XU) => zU[XU] >= UU.target));
      return (0, rU.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, rU.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: cU(yU ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, rU.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: XU.prizeGoals.map(((UU, XU) => {
            const yU = null === zU ? null : Math.min(zU[XU], UU.target);
            return (0, rU.jsxs)(tU.Fragment, {
              children: [XU > 0 && (0, rU.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: cU("gameEvents:goalsOr")
              }), (0, rU.jsxs)("div", {
                className: pU()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: yU === UU.target
                }),
                children: [(0, rU.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: cU(UU.labelKey)
                }), (0, rU.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, rU.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== yU && void 0 !== yU ? yU : 0) / UU.target * 100 + "%"
                    }
                  }), null !== yU && (0, rU.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [yU.toLocaleString(), " / ", UU.target.toLocaleString()]
                  })]
                })]
              })]
            }, UU.board)
          }))
        })]
      })
    }
    var MU = zU(1596),
      vU = zU(1647),
      VU = zU(1096),
      sU = zU(794),
      nU = zU(3869);

    function mU(UU) {
      let {
        gameNameWithVariation: XU
      } = UU;
      const zU = (0, MU.F)(XU),
        [cU, yU] = (0, tU.useState)(null);
      if ((0, tU.useEffect)((() => {
          if (!zU) return;
          let UU = !0;
          return (0, vU.k)(zU).then((XU => {
            UU && yU(XU)
          })).catch((UU => {
            console.error(`Failed to load the page copy for ${zU.name}`, UU)
          })), () => {
            UU = !1
          }
        }), [zU]), !zU || !cU || cU.name !== zU.name) return null;
      const QU = (0, vU.g)(cU),
        AU = new Set((0, VU.c)((0, sU.l)()).map((UU => (0, MU.z)(UU)))),
        FU = cU.similarGames.filter((UU => AU.has((0, MU.z)(UU))));
      return (0, rU.jsx)("div", {
        className: "GamePageContent",
        children: (0, rU.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, rU.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, rU.jsx)("h2", {
              children: QU.whatIs
            }), cU.whatIs.map((UU => (0, rU.jsx)("p", {
              children: UU
            }, UU)))]
          }), (0, rU.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, rU.jsx)("h2", {
              children: QU.howToPlay
            }), cU.howToPlay.map((UU => (0, rU.jsx)("p", {
              children: UU
            }, UU)))]
          }), (0, rU.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, rU.jsx)("h2", {
              children: QU.features
            }), (0, rU.jsx)("ul", {
              children: cU.features.map((UU => (0, rU.jsx)("li", {
                children: UU
              }, UU)))
            })]
          }), (0, rU.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, rU.jsx)("h2", {
              children: QU.tips
            }), (0, rU.jsx)("ul", {
              children: cU.tips.map((UU => (0, rU.jsx)("li", {
                children: UU
              }, UU)))
            })]
          }), (0, rU.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, rU.jsx)("h2", {
              children: QU.faq
            }), cU.faq.map((UU => {
              let {
                question: XU,
                answer: zU
              } = UU;
              return (0, rU.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, rU.jsx)("h3", {
                  children: XU
                }), (0, rU.jsx)("p", {
                  children: zU
                })]
              }, XU)
            }))]
          }), FU.length > 0 && (0, rU.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, rU.jsx)("h2", {
              children: QU.similarGames
            }), (0, rU.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: FU.map((UU => (0, rU.jsx)("li", {
                children: (0, rU.jsx)(nU.g, {
                  source: {
                    type: "game",
                    gameNameWithVariation: UU
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, UU)))
            })]
          })]
        })
      })
    }
    var lU = zU(1390),
      xU = zU(97),
      JU = zU(1131),
      jU = zU(34909),
      KU = zU(1696),
      bU = zU(1577),
      TU = zU(1568),
      hU = zU(1652),
      UX = zU(1507),
      XX = zU(1410),
      zX = zU(37036),
      cX = zU(1250),
      yX = zU(1079),
      QX = zU(344),
      AX = zU(1086),
      FX = zU(1592),
      oX = zU(9510),
      DX = zU(27),
      EX = zU(2702),
      YX = zU(825),
      NX = zU(1236),
      IX = zU(7089),
      pX = zU(3873);

    function aX(UU) {
      let {
        preview: XU,
        isBroken: zU
      } = UU;
      const cU = null === XU ? null : (0, QU.c)(XU, "small"),
        AU = (0, yU.f)(null !== cU && void 0 !== cU ? cU : QU.i);
      return null === XU ? (0, rU.jsx)("div", {
        className: pU()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: zU
        }),
        children: (0, rU.jsx)(lU.d, {
          name: zU ? "triangle-exclamation" : "star"
        })
      }) : (0, rU.jsx)("div", {
        className: pU()("FeaturedGamesPopupSlotThumbnail", FU.i),
        style: (0, FU.h)(AU),
        role: "img",
        "aria-label": XU.name,
        children: (0, rU.jsx)(FU.d, {
          image: AU
        })
      })
    }

    function tX(UU) {
      let {
        schematicId: XU,
        gameName: zU
      } = UU;
      const {
        userContext: yU
      } = (0, ZU.d)(), QU = (0, pX.b)(), [AU, FU] = (0, tU.useState)(null), [oU, DU] = (0, tU.useState)(null), [EU, YU] = (0, tU.useState)(!1), IU = (0, tU.useCallback)((() => {
        DU(null), CU.c.getFeaturedGames(yU).then((UU => {
          QU.current && FU(UU.slots)
        })).catch((UU => {
          console.error("Failed to get featured games", UU), QU.current && DU("Failed to load featured games")
        }))
      }), [yU, QU]);
      (0, tU.useEffect)((() => {
        IU()
      }), [IU]);
      const pU = (UU, XU) => {
        EU || (YU(!0), CU.c.setFeaturedGame(yU, UU, XU).then((() => {
          QU.current && IU()
        })).catch((UU => {
          console.error("Failed to set featured game", UU), QU.current && DU("Failed to update the featured slot")
        })).finally((() => {
          QU.current && YU(!1)
        })))
      };
      return (0, rU.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, rU.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !AU && !oU && (0, rU.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, rU.jsx)(qU.b, {})
        }), oU && (0, rU.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: oU
        }), AU && (0, rU.jsxs)(rU.Fragment, {
          children: [(0, rU.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: AU.map((UU => {
              const zU = UU.schematicId === XU,
                yU = null === UU.schematicId,
                {
                  categoryGroup: QU
                } = cU.M[UU.slotId];
              return (0, rU.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, rU.jsx)(aX, {
                  preview: UU.preview,
                  isBroken: !yU
                }), (0, rU.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, rU.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, cU.jb)(QU), " \xb7 position", " ", (0, cU.P)(UU.slotId, cU.Xb) + 1, " of", " ", (0, cU.Tb)(QU, cU.Xb)]
                  }), yU && (0, rU.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !yU && null !== UU.preview && (0, rU.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: UU.preview.name
                  }), !yU && null === UU.preview && (0, rU.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, rU.jsx)(lU.d, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, rU.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [yU && (0, rU.jsxs)(NU.n, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      pU(UU.slotId, XU)
                    },
                    disabled: EU,
                    children: [(0, rU.jsx)(lU.d, {
                      name: "star"
                    }), " Feature here"]
                  }), !yU && !zU && (0, rU.jsxs)(NU.O, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      pU(UU.slotId, XU)
                    },
                    disabled: EU,
                    children: [(0, rU.jsx)(lU.d, {
                      name: "star"
                    }), " Replace"]
                  }), !yU && (0, rU.jsxs)(NU.G, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      pU(UU.slotId, null)
                    },
                    disabled: EU,
                    children: [(0, rU.jsx)(lU.d, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, UU.slotId)
            }))
          }), (0, rU.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var gX = zU(5154),
      kX = zU(5032),
      GX = zU(3837);
    const BX = 8,
      ZX = 12;

    function RX(UU) {
      let {
        customLobbies: XU,
        favouriteLobbies: zU,
        toggleLikeLobby: cU,
        showReport: yU
      } = UU;
      const [QU, AU] = (0, tU.useState)(BX);
      return (0, tU.useEffect)((() => {
        if (QU >= XU.length) return;
        let UU = !0;
        return (0, GX.g)().then((() => {
          UU && AU(QU + ZX)
        })), () => {
          UU = !1
        }
      }), [QU, XU.length]), (0, rU.jsx)(rU.Fragment, {
        children: XU.slice(0, QU).map((UU => (0, rU.jsx)(kX.e, {
          customLobby: UU,
          favouriteLobbies: zU,
          toggleLikeLobby: cU,
          showReport: yU
        }, UU.name)))
      })
    }
    var PX = zU(5034),
      WX = zU(5047),
      dX = zU(5010),
      LX = zU(3961),
      eX = zU(9505),
      CX = zU(9489),
      wX = zU(226);
    const qX = {
      skyblock: [zU(37067).e]
    };
    var OX = zU(646);
    const SX = {
      listedVariations: null,
      backgroundImage: QU.i,
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

    function rX(UU, XU) {
      const zU = YX.f[UU.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, QU.c)(UU, "large"),
        badges: [],
        category: UU.gameCategory,
        title: void 0 !== (null === zU || void 0 === zU ? void 0 : zU.title) ? XU(zU.title) : UU.name,
        variationTitle: null,
        description: void 0 !== (null === zU || void 0 === zU ? void 0 : zU.description) ? XU(zU.description) : UU.description,
        ownerSocialPreviewWithoutLocation: "owner" in UU ? UU.owner : null,
        ccu: UU.ccu,
        favourites: UU.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in UU ? UU.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function uX(UU) {
      var XU, zU, cU;
      return null !== (XU = null !== (zU = (0, wX.j)() ? function(UU) {
        for (const [XU, zU] of Object.entries(qX)) {
          const cU = [XU, ...zU.map((UU => (0, QX.Rb)(XU, UU)))];
          if (cU.includes(UU)) return cU
        }
        return null
      }(UU) : null) && void 0 !== zU ? zU : null === (cU = YX.d[UU]) || void 0 === cU ? void 0 : cU.listedVariations) && void 0 !== XU ? XU : null
    }

    function fX() {
      const {
        gameNameWithVariation: UU
      } = (0, bU.C)();
      if ((0, tU.useEffect)(LX.r, []), UU && (0, cX.w)(UU)) return (0, rU.jsx)(iX, {
        urlId: UU
      }, UU);
      const XU = UU && (0, yX.l)(UU) ? UU : "firstParty";
      return (0, rU.jsx)(MX, {}, XU)
    }

    function iX(UU) {
      let {
        urlId: XU
      } = UU;
      const {
        t: zU
      } = (0, oU.I)(), {
        userContext: cU,
        isUserContextUpdating: yU
      } = (0, ZU.d)(), QU = (0, tU.useMemo)((() => (0, KU.h)(XU)), [XU]);
      (0, tU.useMemo)((() => {
        if (null === QU) return;
        const UU = JU.userContextManager.peekCurrentUserContext();
        (null !== UU ? CU.c.getGame(UU, QU.schematicId) : JU.userContextManager.getCurrentUserContext().then((UU => CU.c.getGame(UU, QU.schematicId)))).catch((UU => {
          null === (0, CU.h)(UU) && console.error(`Failed to get the custom game ${QU.schematicId}`, UU), (0, KU.g)(XU)
        }))
      }), [QU, XU]);
      const [AU, FU] = (0, tU.useState)(null), DU = (0, jU.b)();
      (0, tU.useEffect)((() => {
        if (null !== QU || yU) return;
        let UU = !0;
        return CU.c.getGameByUrlId(cU, XU).then((cU => {
          UU && (cU.takenDown ? HX(zU, cU) : FU({
            urlId: XU,
            game: cU
          }))
        })).catch((cU => {
          const yU = null !== (0, CU.h)(cU);
          yU || console.error(`Failed to find the custom game with urlId ${XU}`, cU), UU && (yU ? HX(zU, null) : (0, TU.navigateToHomePage)())
        })), () => {
          UU = !1
        }
      }), [XU, QU, yU, cU, zU]);
      const EU = null !== QU && void 0 !== QU ? QU : (null === AU || void 0 === AU ? void 0 : AU.urlId) === XU ? AU.game : null;
      return null === EU ? (0, rU.jsx)(qU.b, {}) : DU ? (0, rU.jsx)(MX, {
        gameNameWithVariation: (0, yX.w)(EU.schematicId),
        knownCustomGame: EU
      }, EU.schematicId) : null
    }

    function HX(UU, XU) {
      (0, TU.navigateToHomePage)(), (0, CX.e)(UU, XU)
    }

    function MX(UU) {
      var XU, zU, AU, IU, eU, wU, qU, SU;
      let {
        gameNameWithVariation: uU,
        knownCustomGame: fU = null
      } = UU;
      const {
        t: HU
      } = (0, oU.I)();
      (0, EX.j)();
      const vU = (0, EX.o)(),
        {
          userContext: VU,
          isUserContextUpdating: sU
        } = (0, ZU.d)(),
        nU = (0, dX.g)(),
        JU = (0, TU.useNavigatePreserveSearch)(),
        jU = (0, bU.C)(),
        KU = (0, tU.useMemo)((() => uU ? {
          gameNameWithVariation: uU
        } : jU), [uU, jU]),
        UX = (0, oX.d)(KU),
        cX = (0, tU.useMemo)((() => {
          const UU = function(UU) {
            var XU, zU;
            const cU = uX(UU);
            if (!cU || 0 === cU.length || cU.includes(UU)) return UU;
            const yU = DU.k.getItem((0, kU.m)(UU));
            if (yU && cU.includes(yU)) return yU;
            return null !== (XU = null === (zU = YX.d[UU]) || void 0 === zU ? void 0 : zU.defaultListedVariation) && void 0 !== XU ? XU : cU[0]
          }(UX.gameNameWithVariation);
          return UU === UX.gameNameWithVariation ? UX : {
            ...UX,
            gameNameWithVariation: UU
          }
        }), [UX]);
      (0, tU.useEffect)((() => {
        const UU = UX.gameNameWithVariation;
        cX.gameNameWithVariation !== UU && UU !== (0, QX.Tb)(UU) && JU((0, MU.A)(cX.gameNameWithVariation), {
          replace: !0
        })
      }), [cX.gameNameWithVariation, UX.gameNameWithVariation, JU]);
      const [pX, aX] = (0, tU.useState)(""), GX = tU.useRef(null), [BX, ZX] = (0, tU.useState)(), LX = (0, yX.l)(cX.gameNameWithVariation), CX = (0, tU.useMemo)((() => LX ? null : function(UU, XU, zU) {
        var cU, yU;
        const AU = YX.d[UU];
        return (0, OX.P)(AU) ? null : {
          listedVariations: uX(UU),
          backgroundImage: (0, QU.g)(UU, (0, QU.b)(AU)),
          badges: (0, EU.filterBadges)(AU.badges),
          category: AU.type,
          title: zU(AU.title),
          variationTitle: AU.variationTitle ? zU(AU.variationTitle) : null,
          description: zU(AU.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== XU ? null !== (cU = XU[UU]) && void 0 !== cU ? cU : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: AU.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: AU.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (yU = AU.canCreateCustomLobbies) || void 0 === yU || yU,
          countdownInformation: (0, kU.i)(UU)
        }
      }(cX.gameNameWithVariation, vU, HU)), [LX, cX.gameNameWithVariation, vU, HU]), [wX, qX] = (0, tU.useState)(!1), [fX, iX] = (0, tU.useState)(null), [MX, VX] = (0, tU.useState)((() => fU ? rX(fU, HU) : SX)), sX = null !== CX && void 0 !== CX ? CX : MX, [nX] = (0, tU.useState)(sX === SX), mX = (0, yU.f)(sX.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: lX,
        recentlyPlayedCustomLobbies: xX
      } = (0, tU.useMemo)((() => function(UU, XU, zU, cU) {
        var yU;
        const QU = UU => {
            const zU = (0, yX.p)(UU),
              cU = XU.find((XU => "custom" === XU.type ? XU.schematicId === zU : XU.gameNameWithVariation === UU));
            return cU ? [...cU.recentLobbies] : []
          },
          AU = (0, EU.getRecentGameNameWithVariationLobbiesKey)(UU),
          FU = null !== (yU = DU.k.getItem(AU)) && void 0 !== yU ? yU : [],
          oU = [...QU(UU), ...FU],
          YU = [];
        for (const DU of oU)(0, NX.G)(DU) && !YU.includes(DU) && YU.push(DU);
        let NU = oU;
        if (zU) {
          const UU = QU("classic_worlds"),
            XU = oU.filter((XU => !UU.includes(XU)));
          NU = [...UU, ...XU]
        }
        const IU = [],
          pU = !1 === cU ? [] : NU;
        for (const DU of pU)(0, NX.G)(DU) || IU.includes(DU) || IU.push(DU);
        return {
          recentlyPlayedPublicLobbies: YU,
          recentlyPlayedCustomLobbies: IU
        }
      }(cX.gameNameWithVariation, nU, sX.showWorldsInsteadOfCustomLobbies, sX.canCreateCustomLobbies)), [cX.gameNameWithVariation, nU, sX.showWorldsInsteadOfCustomLobbies, sX.canCreateCustomLobbies]), [JX, jX] = (0, tU.useState)(!0), [KX, bX] = (0, tU.useState)([]), [TX, hX] = (0, tU.useState)(null), [Uz, Xz] = (0, tU.useState)("explore"), zz = (0, tU.useRef)(!1), cz = (0, tU.useCallback)((UU => {
        (0, gU.unstable_batchedUpdates)((() => {
          ZX(UU), VX((XU => ({
            ...rX(UU, HU),
            isFavourite: XU.isFavourite
          })))
        }))
      }), [HU]);
      (0, tU.useEffect)((() => {
        null === DX.e.get("gameEntrySource") && (0, DX.n)("gameInformationPageDirect")
      }), []);
      const yz = (0, tU.useRef)(null);
      (0, tU.useEffect)((() => {
        const UU = UU => {
            yz.current = UU.target instanceof Element ? UU.target.closest("a, button") : null
          },
          XU = UU => {
            "Tab" === UU.key && (yz.current = null)
          };
        return document.addEventListener("pointerdown", UU, !0), document.addEventListener("keydown", XU, !0), () => {
          document.removeEventListener("pointerdown", UU, !0), document.removeEventListener("keydown", XU, !0)
        }
      }), []), (0, RU.d)("Enter", (UU => {
        const XU = UU.target instanceof Element ? UU.target : null;
        if (UU.defaultPrevented || null !== XU && void 0 !== XU && XU.closest("input, textarea, select")) return;
        const zU = null === XU || void 0 === XU ? void 0 : XU.closest("a, button");
        zU && zU !== yz.current || (UU.preventDefault(), Iz())
      })), (0, PU.e)(TU.navigateToHomePage);
      const Qz = lX.length > 0 || xX.length > 0,
        Az = !sX.useRejoinLastLobbyButton || 0 === lX.length,
        Fz = LX && null === sX.ownerSocialPreviewWithoutLocation,
        oz = VU.getPlayerName() === (null === BX || void 0 === BX || null === (XU = BX.owner) || void 0 === XU ? void 0 : XU.name),
        Dz = null !== (zU = null === (AU = sX.badges.find((UU => "event" === UU.type))) || void 0 === AU ? void 0 : AU.event) && void 0 !== zU ? zU : null,
        Ez = Az ? NU.l : NU.f,
        Yz = (0, rU.jsx)(YU.d, {
          tooltipInner: (0, rU.jsx)("div", {
            children: HU("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, rU.jsx)(Ez, {
            className: "GameInformationButton",
            padDefaultFocus: Az,
            showPress: !0,
            onClick: () => {
              Iz()
            },
            children: (0, rU.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Az && (0, rU.jsxs)(rU.Fragment, {
                children: [(0, rU.jsx)(lU.d, {
                  name: "play"
                }), " "]
              }), HU("homePage:quickPlay")]
            })
          })
        });
      (0, tU.useEffect)((() => {
        if (!LX || sU) return;
        let UU = !0;
        const XU = (0, yX.p)(cX.gameNameWithVariation);
        return CU.c.getGame(VU, XU).then((XU => {
          UU && (XU.takenDown ? iX({
            ownGame: XU
          }) : cz(XU))
        })).catch((XU => {
          const zU = null !== (0, CU.h)(XU);
          zU || console.error("Failed to get Custom Game information", XU), UU && (zU ? iX({
            ownGame: null
          }) : (0, TU.navigateToHomePage)())
        })), CU.c.getFavouriteGames(VU).then((zU => {
          UU && VX((UU => ({
            ...UU,
            isFavourite: zU.includes(XU)
          })))
        })).catch((XU => {
          console.error("Failed to get favourite games", XU), UU && qX(!0)
        })), () => {
          UU = !1
        }
      }), [LX, sU, cX.gameNameWithVariation, cz, VU]), (0, tU.useEffect)((() => {
        null !== fX && HX(HU, fX.ownGame)
      }), [fX, HU]);
      const Nz = !LX && null === CX;

      function Iz(UU) {
        (0, eX.h)(), JU((0, GU.b)(cX.gameNameWithVariation, UU))
      }(0, tU.useEffect)((() => {
        Nz && (0, TU.navigateToHomePage)()
      }), [Nz]), (0, tU.useEffect)((() => {
        if (!1 === sX.canCreateCustomLobbies) return;
        let UU = !0;
        return null !== sX.showWorldsInsteadOfCustomLobbies && !1 === sU && (jX(!0), CU.c.getFavouriteLobbies(VU).then((UU => {
          hX(UU)
        })), CU.c.getOpenCustomLobbies(VU, {
          gameNameWithVariation: sX.showWorldsInsteadOfCustomLobbies ? "classic" : cX.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === Uz,
          onlyFavouriteLobbies: "favourite" === Uz
        }).then((XU => {
          UU && (0, gU.unstable_batchedUpdates)((() => {
            bX(XU), jX(!1)
          }))
        })).catch((XU => {
          console.error("Failed to get open custom lobbies", XU), UU && jX(!1)
        }))), () => {
          UU = !1
        }
      }), [sU, cX, Uz, sX.showWorldsInsteadOfCustomLobbies, sX.canCreateCustomLobbies, VU]);
      const pz = (0, tU.useCallback)((async UU => {
          try {
            if (!TX) return;
            TX.includes(UU) ? (CU.c.unfavouriteLobby(VU, UU), hX(TX.filter((XU => XU !== UU)))) : (CU.c.favouriteLobby(VU, UU).catch((UU => {
              console.error("Failed to favourite lobby", UU)
            })), hX([...TX, UU]))
          } catch (XU) {
            console.error("Failed to like lobby", XU)
          }
        }), [VU, TX]),
        az = (null === BX || void 0 === BX ? void 0 : BX.schematicId) === (0, yX.p)(UX.gameNameWithVariation) ? BX : null,
        tz = az && (0, MU.G)(UX.gameNameWithVariation, (UU => HU(UU)), az);
      (0, hU.g)(az && (0, MU.A)(UX.gameNameWithVariation, az));
      const gz = xU.featureFlags.canUseCustomLobbies && !0 === sX.canCreateCustomLobbies,
        kz = (0, rU.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, rU.jsx)(mU, {
            gameNameWithVariation: cX.gameNameWithVariation
          })
        });
      return (0, rU.jsx)(rU.Fragment, {
        children: (0, rU.jsxs)("article", {
          className: pU()("GameInformation", {
            GameInformationFadeIn: nX,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (IU = sX.countdownInformation) || void 0 === IU ? void 0 : IU.type)
          }),
          children: [tz && (0, rU.jsx)(BU.d, {
            meta: tz
          }), (0, rU.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, rU.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, rU.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, rU.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, rU.jsx)("div", {
                  className: pU()("GameInformationTopBackgroundImage", FU.i),
                  style: (0, FU.h)(mX),
                  children: (0, rU.jsx)(FU.d, {
                    image: mX
                  })
                })]
              }), (0, rU.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, rU.jsx)(gX.c, {}), (0, rU.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, rU.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, rU.jsxs)("div", {
                      className: pU()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: Fz
                      }),
                      children: [sX.badges.map((UU => (0, rU.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${UU.type}`,
                        children: (0, rU.jsx)(LU.b, {
                          badge: UU
                        })
                      }, UU.type))), LX && (0, rU.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, rU.jsx)(dU.d, {
                          text: (0, cU.db)({
                            type: "playerCrafted"
                          })
                        })
                      }), sX.category && (0, rU.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, rU.jsx)(dU.d, {
                          text: [{
                            str: (0, cU.gb)(sX.category).toUpperCase()
                          }]
                        })
                      }), null !== sX.ccu && (0, rU.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, rU.jsx)(lU.d, {
                          name: "user"
                        }), (0, NX.I)(sX.ccu), " online"]
                      }), null !== sX.ownerSocialPreviewWithoutLocation && (0, rU.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, rU.jsx)("span", {
                          children: "Made by"
                        }), (0, rU.jsx)(OU.f, {
                          playerSocialPreview: {
                            ...sX.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), Fz && (0, rU.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, rU.jsx)("span", {
                          children: "Made by"
                        }), (0, rU.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== sX.favourites && (null !== sX.isFavourite || LX && !wX) && (0, rU.jsx)(NU.q, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== zz.current && (zz.current = !0, null !== sX.isFavourite)) {
                              const UU = (0, yX.p)(cX.gameNameWithVariation);
                              let XU;
                              sX.isFavourite ? (XU = -1, CU.c.unfavouriteGame(VU, UU).catch((UU => {
                                console.error("Failed to get unfavourite game", UU)
                              })).finally((() => {
                                zz.current = !1
                              }))) : (XU = 1, CU.c.favouriteGame(VU, UU).catch((UU => {
                                console.error("Failed to get favourite game", UU)
                              })).finally((() => {
                                zz.current = !1
                              }))), VX((UU => ({
                                ...UU,
                                isFavourite: !UU.isFavourite
                              }))), VX((UU => ({
                                ...UU,
                                favourites: UU.favourites + XU
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (eU = sX.isFavourite) && void 0 !== eU && eU,
                        disabled: null === sX.isFavourite,
                        className: pU()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === sX.isFavourite
                        })
                      }, null === sX.isFavourite ? "pending" : "known"), LX && !Fz && xU.featureFlags.useSocialFeatures && !oz && (0, rU.jsx)(PX.d, {
                        targetType: "customGame",
                        targetId: (0, yX.p)(cX.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (VU.playerHasRank("developer") || VU.playerHasRank("admin") && oz) && (0, rU.jsxs)(NU.l, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          JU((0, FX.r)((0, AX.f)(cX.gameNameWithVariation, !0)))
                        },
                        children: [(0, rU.jsx)(lU.d, {
                          name: "star-christmas"
                        }), " ", HU("studio:viewInStudio")]
                      }), LX && VU.playerHasRank("developer") && (0, rU.jsxs)(NU.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, IX.b)({
                            schematicId: (0, yX.p)(cX.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, rU.jsx)(lU.d, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), LX && VU.playerHasRank("developer") && (0, rU.jsxs)(NU.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          XX.NotificationProvider.showCustomPopup({
                            body: () => (0, rU.jsx)(tX, {
                              schematicId: (0, yX.p)(cX.gameNameWithVariation),
                              gameName: sX.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, rU.jsx)(lU.d, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (wU = sX.countdownInformation) || void 0 === wU ? void 0 : wU.type) && (0, rU.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, rU.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, rU.jsx)(WU.b, {
                            toTime: sX.countdownInformation.countdownToTime
                          })]
                        }), (0, rU.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: sX.countdownInformation.previewText
                        })]
                      })]
                    }, Fz ? "pending" : "shown"), (0, rU.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, rU.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, rU.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [sX.title, " ", sX.variationTitle && (null === (qU = YX.d[cX.gameNameWithVariation]) || void 0 === qU ? void 0 : qU.variationThumbnailUseBigRatio) && (0, rU.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: sX.variationTitle
                          })]
                        })
                      }), sX.listedVariations && sX.listedVariations.length > 0 && (0, rU.jsx)("div", {
                        className: pU()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (SU = YX.d[cX.gameNameWithVariation]) || void 0 === SU ? void 0 : SU.variationThumbnailUseBigRatio
                        }),
                        children: sX.listedVariations.map((UU => {
                          var XU, zU;
                          return (0, rU.jsxs)(vX, {
                            variation: UU,
                            isSelected: cX.gameNameWithVariation === UU,
                            children: [null !== vU && (0, rU.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, rU.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, rU.jsx)(lU.d, {
                                  name: "user"
                                }), " ", (0, NX.I)(null !== (XU = vU[UU]) && void 0 !== XU ? XU : 0)]
                              })
                            }), (0, rU.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: HU(null !== (zU = YX.d[UU].variationTitle) && void 0 !== zU ? zU : YX.d[UU].title)
                            }), (0, rU.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, EU.filterBadges)(YX.d[UU].badges).map((UU => (0, rU.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + UU.type,
                                children: (0, rU.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, rU.jsx)(LU.b, {
                                    badge: UU
                                  })
                                })
                              }, UU.type)))
                            })]
                          }, UU)
                        }))
                      })]
                    }), sX.description && (0, rU.jsx)("p", {
                      className: "GameInformationDescription",
                      children: sX.description
                    })]
                  }), (0, rU.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, rU.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Az && (0, rU.jsx)(YU.d, {
                        tooltipInner: (0, rU.jsx)("div", {
                          children: HU("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, rU.jsx)(NU.l, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            Iz(lX[0])
                          },
                          children: (0, rU.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, rU.jsx)(lU.d, {
                              name: "play"
                            }), " ", HU("homePage:rejoinLobbyNumber", {
                              number: lX[0]
                            })]
                          })
                        })
                      }), Az && Yz]
                    }), (0, rU.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Az && Yz, (0, rU.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, rU.jsx)(lU.d, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, rU.jsx)(aU.e, {
                          className: "JoinLobbyInput",
                          placeholderText: HU("homePage:lobbyName"),
                          maxLength: NX.H,
                          domRef: GX,
                          onValueChange: UU => {
                            UU = (0, NX.ib)(UU), aX(UU)
                          },
                          onEnter: () => {
                            0 === pX.length ? Iz(lX[0]) : Iz(pX)
                          }
                        }), (0, rU.jsx)(NU.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === pX.length ? Iz(lX[0]) : Iz(pX)
                          },
                          children: HU("general:join")
                        })]
                      })]
                    }), (0, rU.jsxs)("section", {
                      className: pU()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !Qz
                      }),
                      children: [(0, rU.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, rU.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, rU.jsx)(lU.d, {
                            name: "clock-rotate-left"
                          }), Qz && (0, rU.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: HU("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, rU.jsx)(WX.c, {
                        lobbyGroups: [lX, xX],
                        onLobbyClick: UU => {
                          Iz(UU)
                        },
                        keyPrefix: cX.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== Dz && (0, rU.jsx)(iU, {
                eventName: Dz
              })]
            }), gz && (0, rU.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, rU.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, rU.jsxs)("div", {
                  className: pU()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === sX.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === sX.showWorldsInsteadOfCustomLobbies && (0, rU.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, rU.jsx)(lU.d, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, rU.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, rU.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), HU("game:worlds")]
                    })]
                  }), !1 === sX.showWorldsInsteadOfCustomLobbies && (0, rU.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, rU.jsx)(lU.d, {
                      name: "joystick"
                    }), (0, rU.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, rU.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), HU("homePage:customLobbies")]
                    })]
                  }), (0, rU.jsx)(NU.O, {
                    onClick: () => {
                      Xz("explore")
                    },
                    active: "explore" === Uz,
                    children: HU("general:explore")
                  }), (0, rU.jsx)(NU.O, {
                    onClick: () => {
                      Xz("favourite")
                    },
                    active: "favourite" === Uz,
                    children: HU("homePage:favouriteLobbies")
                  }), (0, rU.jsx)(NU.O, {
                    onClick: () => {
                      Xz("owned")
                    },
                    active: "owned" === Uz,
                    children: HU("homePage:ownedLobbies")
                  })]
                }), (0, rU.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, rU.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, rU.jsx)(kX.d, {
                      label: "Create",
                      onClick: () => {
                        XX.NotificationProvider.showCustomPopup({
                          body: UU => (0, rU.jsx)(zX.CreateCustomLobby, {
                            gameNameWithVariation: cX.gameNameWithVariation,
                            close: UU
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === JX && (0, rU.jsx)(kX.i, {}), !1 === JX && (0, rU.jsx)(RX, {
                      customLobbies: KX,
                      favouriteLobbies: TX,
                      toggleLikeLobby: pz,
                      showReport: xU.featureFlags.useSocialFeatures && "owned" !== Uz
                    })]
                  }), kz]
                })]
              })
            })]
          }), !gz && kz]
        })
      })
    }

    function vX(UU) {
      let {
        variation: XU,
        isSelected: zU,
        children: cU
      } = UU;
      const oU = YX.d[XU],
        EU = (0, QU.g)(XU, (0, QU.h)(oU)),
        YU = (0, yU.f)(EU),
        NU = (0, AU.f)([(0, QU.f)(XU, (0, QU.b)(oU))]);
      return (0, rU.jsxs)(TU.LinkPreserveSearch, {
        to: (0, MU.A)(XU),
        replace: !0,
        className: pU()("GameInformationVariation", FU.i, {
          SelectedGameInformationVariation: zU
        }),
        onClick: UU => {
          if (!(0, UX.c)(UU)) return;
          const zU = (0, kU.m)(XU);
          DU.k.setItem(zU, XU)
        },
        onMouseEnter: NU.start,
        onMouseLeave: NU.cancel,
        onFocus: NU.start,
        onBlur: NU.cancel,
        style: (0, FU.h)(YU),
        children: [(0, rU.jsx)(FU.d, {
          image: YU
        }), cU]
      })
    }
  },
  7089: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => kU
    });
    var cU = zU(61),
      yU = zU(1494),
      QU = zU(1545),
      AU = zU(3873),
      FU = zU(1129),
      oU = zU(1384),
      DU = zU(1420),
      EU = zU(1390),
      YU = zU(1106),
      NU = zU.n(YU),
      IU = zU(7085),
      pU = zU(1305);

    function aU(UU) {
      let {
        info: XU,
        className: zU
      } = UU;
      const {
        statusText: cU,
        rowText: yU
      } = (0, IU.f)();
      return (0, pU.jsxs)("div", {
        className: NU()("GameApprovalInfoDetails", zU),
        children: [(0, pU.jsxs)("div", {
          className: NU()("GameApprovalInfoSummary", XU.overallPassed ? "Passed" : "Failed"),
          children: [(0, pU.jsx)(EU.d, {
            name: XU.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, pU.jsx)("span", {
            children: cU(XU.status)
          })]
        }), XU.rows.length > 0 && (0, pU.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: XU.rows.map((UU => {
            const {
              label: XU,
              value: zU
            } = yU(UU);
            return (0, pU.jsxs)("div", {
              className: NU()("GameApprovalInfoRow", UU.passed ? "Passed" : "Failed"),
              children: [(0, pU.jsx)(EU.d, {
                name: UU.passed ? "check" : "xmark"
              }), (0, pU.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, pU.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: XU
                }), null !== zU && (0, pU.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: zU
                })]
              })]
            }, UU.kind)
          }))
        })]
      })
    }
    var tU = zU(1193),
      gU = zU(1410);

    function kU(UU) {
      gU.NotificationProvider.showCustomPopup({
        body: () => (0, pU.jsx)(GU, {
          ...UU
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function GU(UU) {
      let {
        schematicId: XU,
        canOverride: zU,
        onApprovalChanged: YU
      } = UU;
      const {
        t: NU
      } = (0, tU.I)(), {
        userContext: IU
      } = (0, FU.d)(), gU = (0, AU.b)(), [kU, GU] = (0, cU.useState)(null), [BU, ZU] = (0, cU.useState)(null), [RU, PU] = (0, cU.useState)(!1), WU = (0, cU.useCallback)((() => {
        ZU(null), QU.c.getGameApprovalInfo(IU, XU).then((UU => {
          gU.current && GU(UU)
        })).catch((UU => {
          console.error("Failed to get game approval info", UU), gU.current && ZU(NU("studio:approvalLoadFailed"))
        }))
      }), [IU, XU, gU, NU]);
      (0, cU.useEffect)((() => {
        WU()
      }), [WU]);
      const dU = UU => {
        RU || (PU(!0), QU.c.setGameApproval(IU, XU, UU).then((() => {
          null === YU || void 0 === YU || YU(), gU.current && WU()
        })).catch((UU => {
          console.error("Failed to set game approval", UU)
        })).finally((() => {
          gU.current && PU(!1)
        })))
      };
      return (0, pU.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, pU.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: NU("studio:approvalTitle")
        }), !kU && !BU && (0, pU.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, pU.jsx)(oU.b, {})
        }), BU && (0, pU.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: BU
        }), kU && (0, pU.jsxs)(pU.Fragment, {
          children: [(0, pU.jsx)(aU, {
            info: kU
          }), zU && (0, pU.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== kU.manualOverride && (0, pU.jsx)(DU.d, {
              tooltipInner: (0, pU.jsx)("div", {
                children: NU("studio:approvalApproveTooltip")
              }),
              children: (0, pU.jsxs)(yU.l, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  dU(!0)
                },
                disabled: RU,
                children: [(0, pU.jsx)(EU.d, {
                  name: "check"
                }), " ", NU("studio:approvalApprove")]
              })
            }), !1 !== kU.manualOverride && (0, pU.jsx)(DU.d, {
              tooltipInner: (0, pU.jsx)("div", {
                children: NU("studio:approvalDenyTooltip")
              }),
              children: (0, pU.jsxs)(yU.G, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  dU(!1)
                },
                disabled: RU,
                children: [(0, pU.jsx)(EU.d, {
                  name: "xmark"
                }), " ", NU("studio:approvalDeny")]
              })
            }), null !== kU.manualOverride && (0, pU.jsx)(DU.d, {
              tooltipInner: (0, pU.jsx)("div", {
                children: NU("studio:approvalClearOverrideTooltip")
              }),
              children: (0, pU.jsxs)(yU.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  dU(null)
                },
                disabled: RU,
                children: [(0, pU.jsx)(EU.d, {
                  name: "arrows-rotate"
                }), " ", NU("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  7085: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      f: () => AU
    });
    var cU = zU(344),
      yU = zU(1193);
    const QU = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function AU() {
      const {
        t: UU,
        selectedLanguage: XU
      } = (0, yU.I)();
      return {
        statusText: XU => UU(QU[XU]),
        rowText: zU => {
          const QU = (UU, zU) => (0, cU.eb)((0, yU.l)(XU.code, UU), 0, zU);
          switch (zU.kind) {
            case "ownerAccountAge": {
              const XU = zU.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: UU("studio:approvalAccountAgeLabel"),
                value: UU(XU, {
                  age: QU(XU, zU.accountAgeMs),
                  days: zU.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: UU("studio:approvalSinceUnbannedLabel"), value: UU("studio:approvalSinceUnbannedValue", {
                  time: QU("studio:approvalSinceUnbannedValue", zU.sinceMs),
                  days: zU.minDays
                })
              };
            case "reportHold": {
              const {
                detail: XU
              } = zU;
              if (null === XU) return {
                label: UU("studio:approvalUnderInvestigation"),
                value: null
              };
              const cU = XU.weightedReporters.toFixed(1),
                yU = XU.threshold.toFixed(1),
                AU = UU("studio:approvalReportHoldLabel", {
                  hours: XU.windowHours
                });
              if (null === XU.heldUntil) return {
                label: AU,
                value: UU("studio:approvalReportHoldValue", {
                  weightedReporters: cU,
                  threshold: yU
                })
              };
              const FU = "studio:approvalReportHoldValueHeld";
              return {
                label: AU,
                value: UU(FU, {
                  weightedReporters: cU,
                  threshold: yU,
                  time: QU(FU, XU.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function FU(UU) {
      return null === UU.manualOverride && UU.rows.some((UU => "reportHold" === UU.kind && !UU.passed))
    }
  },
  34909: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU
    });
    var cU = zU(61),
      yU = zU(3837);

    function QU() {
      const [UU, XU] = (0, cU.useState)(!1);
      return (0, cU.useLayoutEffect)((() => {
        let UU = !0;
        return (0, yU.g)().then((() => {
          UU && XU(!0)
        })), () => {
          UU = !1
        }
      }), []), UU
    }
  },
  9489: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => tU,
      e: () => gU
    });
    var cU = zU(173),
      yU = zU(212),
      QU = zU(1079),
      AU = zU(1086),
      FU = zU(1236),
      oU = zU(2005),
      DU = zU(2494),
      EU = zU(1545),
      YU = zU(1410),
      NU = zU(1131),
      IU = zU(9493),
      pU = zU(1568),
      aU = zU(1592);

    function tU(UU, XU) {
      const zU = !0 === XU.debugResult.gameRefused,
        QU = zU || XU.code === cU.m.REQUEST_TO_MATCHMAKING ? (0, IU.h)(XU.message) : null;
      if (null !== QU) return ZU(UU, UU((0, IU.n)(QU)), UU(IU.j[QU])), !0;
      if (zU) return async function(UU) {
        const {
          gameNameWithVariation: XU,
          lobbyName: zU,
          shownLobbyName: cU
        } = oU.gameBridge.latest("connectedGame"), yU = "classic" === XU && (0, FU.A)(zU) ? cU : await (0, DU.g)(UU, XU, zU);
        return "" !== yU ? UU("general:cantJoinGame", {
          game: yU
        }) : UU("general:cantJoinThisGame")
      }(UU).then((zU => {
        ZU(UU, zU, XU.message)
      })), !0;
      const {
        joinFailure: AU
      } = XU.debugResult, EU = "refused" === (null === AU || void 0 === AU ? void 0 : AU.at) ? AU.code : null;
      return EU === yU.e.schematicNotPublished.code ? (async function(UU, XU) {
        const zU = kU(),
          cU = await BU(zU);
        if (null === cU || cU.gamePublished) return void ZU(UU, UU("general:cantJoinThisGame"), XU);
        await GU(UU, "rocket-launch", UU("studio:gameNotPublishedTitle", {
          game: cU.name
        }), UU("studio:publishInStudio"), zU)
      }(UU, XU.message), !0) : (EU === yU.e.schematicBanned.code || EU === yU.e.customGameTakenDown.code) && (BU(kU()).then((XU => {
        gU(UU, XU)
      })), !0)
    }

    function gU(UU, XU) {
      !0 !== (null === XU || void 0 === XU ? void 0 : XU.takenDown) ? ZU(UU, UU("general:cantJoinThisGame"), yU.e.customGameTakenDown.text) : GU(UU, "lock", UU("studio:gameTakenDownTitle", {
        game: XU.name
      }), UU("studio:viewInStudio"), XU.schematicId)
    }

    function kU() {
      return (0, QU.p)(oU.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function GU(UU, XU, zU, cU, yU) {
      !0 === await YU.NotificationProvider.showPromptPopup({
        icon: XU,
        title: zU,
        confirmText: cU,
        cancelText: UU("general:cancel")
      }).getResult() && (0, pU.navigatePreserveSearch)((0, aU.r)((0, AU.e)(yU), "manage"))
    }
    async function BU(UU) {
      try {
        return await EU.c.getGame(await NU.userContextManager.getCurrentUserContext(), UU, !0)
      } catch (XU) {
        return (0, EU.e)(XU) || console.error(`Failed to get game ${UU}`, XU), null
      }
    }

    function ZU(UU, XU, zU) {
      YU.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: XU,
        subtitle: zU,
        confirmText: UU("general:ok"),
        cancelText: ""
      })
    }
  },
  9510: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(1376),
      yU = zU(1236),
      QU = zU(646);

    function AU(UU) {
      return UU = function(UU, XU) {
        var zU;
        const cU = new URLSearchParams(XU),
          yU = cU.get("lobby"),
          QU = cU.get("vm"),
          AU = null !== (zU = yU) && void 0 !== zU ? zU : UU.lobbyName,
          FU = null !== QU && void 0 !== QU ? QU : UU.directJoinVmUrl;
        if (AU === UU.lobbyName && FU === UU.directJoinVmUrl) return UU;
        return {
          ...UU,
          lobbyName: AU,
          directJoinVmUrl: FU
        }
      }(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), UU = function(UU) {
        if ((0, QU.P)(UU.directJoinVmUrl)) return UU;
        const XU = (0, yU.S)(UU.directJoinVmUrl);
        null === XU && (UU.directJoinVmUrl = void 0);
        return UU
      }(UU = function(UU) {
        if ((0, QU.P)(UU.gameNameWithVariation)) return UU;
        return UU.gameNameWithVariation = (0, cU.j)(UU.gameNameWithVariation), UU
      }(UU))
    }
  },
  9505: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      h: () => yU
    });
    let cU = !1;

    function yU() {
      cU = !0
    }

    function QU() {
      return cU
    }
  },
  9493: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      f: () => AU,
      h: () => FU,
      j: () => DU,
      n: () => oU
    });
    var cU = zU(212),
      yU = zU(5057);

    function QU(UU) {
      return AU(UU) === cU.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function AU(UU) {
      return "object" === typeof UU && null !== UU ? UU.code : void 0
    }

    function FU(UU) {
      var XU;
      return null !== (XU = Object.keys(yU.b).find((XU => yU.b[XU] === UU))) && void 0 !== XU ? XU : null
    }

    function oU(UU) {
      return "notWhitelisted" === UU ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const DU = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37067: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      h: () => cU
    });
    const cU = "skyblockSkills",
      yU = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);