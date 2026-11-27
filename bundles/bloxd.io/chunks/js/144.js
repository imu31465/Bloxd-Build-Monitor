export const id = 144;
export const ids = [144, 714];
export const modules = {
  37382: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => oJ
    });
    var yR = GR(359),
      tR = GR(4850),
      uR = GR(4889),
      ZR = GR(4884),
      qR = GR(4881),
      iR = GR(1270),
      fR = GR(46),
      VR = GR(1943),
      KR = GR(1501),
      wR = GR(1590),
      rR = GR(1163),
      eR = GR.n(rR),
      aR = GR(1867),
      LR = GR(66),
      nR = GR(83),
      UR = GR(3357),
      WR = GR(1459),
      AR = GR(1778),
      CR = GR(1196),
      XR = GR(4724),
      MR = GR(5361),
      BR = GR(3690),
      lR = GR(2105),
      pR = GR(4841),
      gR = GR(1956),
      bR = GR(1647),
      vR = GR(3071),
      OR = GR(1465),
      xR = GR(3713),
      NR = GR(4250),
      DR = GR(1378);
    const HR = 15e3,
      oR = 2500;

    function cR(RR) {
      var JR;
      let {
        eventName: GR
      } = RR;
      const {
        t: yR
      } = (0, iR.A)(), tR = gR.g[GR], [uR, ZR] = (0, LR.useState)((() => Date.now() >= tR.endsAt.getTime())), [qR, fR] = (0, LR.useState)("overall"), VR = function(RR, JR) {
        const {
          userContext: GR,
          isUserContextUpdating: yR
        } = (0, CR.d)(), tR = `${RR}:${JR}`, [uR, ZR] = (0, LR.useState)({
          requestKey: tR,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, LR.useEffect)((() => {
          if (yR) return;
          let uR, qR = !1;
          const iR = async () => {
            if ("visible" === document.visibilityState) try {
              const yR = await bR.c.getGameEventLeaderboard(GR, {
                event: RR,
                scope: JR
              });
              qR || ZR({
                requestKey: tR,
                leaderboard: {
                  status: "loaded",
                  leaderboard: yR
                }
              })
            } catch {
              qR || ZR((RR => RR.requestKey === tR && "loaded" === RR.leaderboard.status ? RR : {
                requestKey: tR,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            qR || (uR = setTimeout(iR, HR))
          };
          return iR(), () => {
            qR = !0, clearTimeout(uR)
          }
        }), [RR, JR, tR, GR, yR]), uR.requestKey === tR ? uR.leaderboard : {
          status: "loading"
        }
      }(GR, qR), KR = function(RR) {
        const JR = (0, LR.useRef)(null),
          GR = (0, LR.useRef)(0),
          yR = (0, LR.useRef)(),
          [tR, uR] = (0, LR.useState)({});
        return (0, LR.useEffect)((() => {
          const tR = null === RR || void 0 === RR ? void 0 : RR.entries;
          if (!tR) return;
          const ZR = new Map(tR.map((RR => [RR.player.name, RR.value]))),
            qR = JR.current;
          if (JR.current = ZR, null === qR) return;
          const iR = {};
          for (const [RR, JR] of ZR) {
            const yR = qR.get(RR);
            void 0 !== yR && JR > yR && (iR[RR] = {
              amount: JR - yR,
              key: GR.current++
            })
          }
          0 !== Object.keys(iR).length && (uR(iR), clearTimeout(yR.current), yR.current = setTimeout((() => {
            uR({})
          }), oR))
        }), [RR]), (0, LR.useEffect)((() => () => {
          clearTimeout(yR.current)
        }), []), tR
      }("loaded" === VR.status ? VR.leaderboard : null), wR = function(RR) {
        const [JR, GR] = (0, LR.useState)(null), yR = "loaded" === RR.status ? RR.leaderboard.goalProgress : void 0;
        return (0, LR.useEffect)((() => {
          yR && GR(yR)
        }), [yR]), JR
      }(VR), rR = vR.f[`profileEffect_${tR.prizePack}`];
      if (uR) return null;
      const aR = "loaded" === VR.status ? VR.leaderboard : null,
        nR = null !== (JR = null === aR || void 0 === aR ? void 0 : aR.entries) && void 0 !== JR ? JR : null,
        UR = null !== aR && void 0 !== aR && aR.own && null !== nR && !nR.some((RR => RR.isOwn)) ? aR.own : null;
      return (0, DR.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, DR.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, DR.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, DR.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, DR.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, DR.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), yR("gameEvents:live")]
              }), (0, DR.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [yR("gameEvents:endsIn"), (0, DR.jsx)(BR.d, {
                  toTime: tR.endsAt,
                  onReachEndOfCountdown: () => {
                    ZR(!0)
                  }
                })]
              })]
            }), (0, DR.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: yR(tR.titleKey)
            }), (0, DR.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, DR.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [rR && (0, DR.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, DR.jsx)(rR, {})
                }), (0, DR.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, DR.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: yR("gameEvents:prize")
                  }), (0, DR.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: yR(tR.prizeNameKey)
                  })]
                })]
              }), (0, DR.jsx)(PR, {
                event: tR,
                progress: wR
              })]
            })]
          }), (0, DR.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, DR.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, DR.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: yR(tR.leaderboard.titleKey)
              }), (0, DR.jsx)(NR.c, {
                ariaLabel: yR("gameEvents:leaderboardScope"),
                options: gR.c.map((RR => ({
                  value: RR,
                  label: yR(`gameEvents:${RR}Scope`)
                }))),
                value: qR,
                onChange: fR
              })]
            }), "loading" === VR.status && (0, DR.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, DR.jsx)(OR.d, {})
            }), ("unavailable" === VR.status || "loaded" === VR.status && null === nR) && (0, DR.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: yR("gameEvents:leaderboardUnavailable")
            }), null !== nR && 0 === nR.length && (0, DR.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: yR("friends" === qR ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== nR && nR.length > 0 && (0, DR.jsx)("ol", {
              className: "GameEventPanelRows",
              children: nR.map((RR => {
                const JR = KR[RR.player.name];
                return (0, DR.jsxs)("li", {
                  className: eR()("GameEventPanelRow", {
                    GameEventPanelRowOwn: RR.isOwn,
                    GameEventPanelRowTop: RR.rank <= 3
                  }),
                  children: [(0, DR.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", RR.rank]
                  }), (0, DR.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, DR.jsx)(xR.h, {
                      playerSocialPreview: {
                        ...RR.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== JR && (0, DR.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", JR.amount.toLocaleString()]
                  }, JR.key), (0, DR.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: RR.value.toLocaleString()
                  })]
                }, RR.player.name)
              }))
            }), UR && (0, DR.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, DR.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", UR.rank.toLocaleString()]
              }), (0, DR.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: yR("gameEvents:yourPlace")
              }), (0, DR.jsx)("span", {
                className: "GameEventPanelScore",
                children: UR.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function PR(RR) {
      let {
        event: JR,
        progress: GR
      } = RR;
      const {
        t: yR
      } = (0, iR.A)(), tR = null !== GR && JR.prizeGoals.some(((RR, JR) => GR[JR] >= RR.target));
      return (0, DR.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, DR.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: yR(tR ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, DR.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: JR.prizeGoals.map(((RR, JR) => {
            const tR = null === GR ? null : Math.min(GR[JR], RR.target);
            return (0, DR.jsxs)(LR.Fragment, {
              children: [JR > 0 && (0, DR.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: yR("gameEvents:goalsOr")
              }), (0, DR.jsxs)("div", {
                className: eR()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: tR === RR.target
                }),
                children: [(0, DR.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: yR(RR.labelKey)
                }), (0, DR.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, DR.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== tR && void 0 !== tR ? tR : 0) / RR.target * 100 + "%"
                    }
                  }), null !== tR && (0, DR.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [tR.toLocaleString(), " / ", RR.target.toLocaleString()]
                  })]
                })]
              })]
            }, RR.board)
          }))
        })]
      })
    }
    var IR = GR(1701),
      mR = GR(1757),
      zR = GR(1149),
      SR = GR(810),
      jR = GR(4824);

    function dR(RR) {
      let {
        gameNameWithVariation: JR
      } = RR;
      const GR = (0, IR.E)(JR),
        [yR, tR] = (0, LR.useState)(null);
      if ((0, LR.useEffect)((() => {
          if (!GR) return;
          let RR = !0;
          return (0, mR.i)(GR).then((JR => {
            RR && tR(JR)
          })).catch((RR => {
            console.error(`Failed to load the page copy for ${GR.name}`, RR)
          })), () => {
            RR = !1
          }
        }), [GR]), !GR || !yR || yR.name !== GR.name) return null;
      const uR = (0, mR.h)(yR),
        ZR = new Set((0, zR.d)((0, SR.j)()).map((RR => (0, IR.v)(RR)))),
        qR = yR.similarGames.filter((RR => ZR.has((0, IR.v)(RR))));
      return (0, DR.jsx)("div", {
        className: "GamePageContent",
        children: (0, DR.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, DR.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, DR.jsx)("h2", {
              children: uR.whatIs
            }), yR.whatIs.map((RR => (0, DR.jsx)("p", {
              children: RR
            }, RR)))]
          }), (0, DR.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, DR.jsx)("h2", {
              children: uR.howToPlay
            }), yR.howToPlay.map((RR => (0, DR.jsx)("p", {
              children: RR
            }, RR)))]
          }), (0, DR.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, DR.jsx)("h2", {
              children: uR.features
            }), (0, DR.jsx)("ul", {
              children: yR.features.map((RR => (0, DR.jsx)("li", {
                children: RR
              }, RR)))
            })]
          }), (0, DR.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, DR.jsx)("h2", {
              children: uR.tips
            }), (0, DR.jsx)("ul", {
              children: yR.tips.map((RR => (0, DR.jsx)("li", {
                children: RR
              }, RR)))
            })]
          }), (0, DR.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, DR.jsx)("h2", {
              children: uR.faq
            }), yR.faq.map((RR => {
              let {
                question: JR,
                answer: GR
              } = RR;
              return (0, DR.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, DR.jsx)("h3", {
                  children: JR
                }), (0, DR.jsx)("p", {
                  children: GR
                })]
              }, JR)
            }))]
          }), qR.length > 0 && (0, DR.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, DR.jsx)("h2", {
              children: uR.similarGames
            }), (0, DR.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: qR.map((RR => (0, DR.jsx)("li", {
                children: (0, DR.jsx)(jR.i, {
                  source: {
                    type: "game",
                    gameNameWithVariation: RR
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, RR)))
            })]
          })]
        })
      })
    }
    var ER = GR(1468),
      YR = GR(103),
      kR = GR(1201),
      QR = GR(35204),
      FR = GR(1814),
      TR = GR(1677),
      sR = GR(1663),
      hR = GR(1771),
      RJ = GR(1597),
      JJ = GR(1493),
      GJ = GR(37389),
      yJ = GR(1328),
      tJ = GR(1127),
      uJ = GR(377),
      ZJ = GR(1141),
      qJ = GR(1695),
      iJ = GR(10315),
      fJ = GR(25),
      VJ = GR(3611),
      KJ = GR(858),
      wJ = GR(1317),
      rJ = GR(7622),
      eJ = GR(4829);

    function aJ(RR) {
      let {
        preview: JR,
        isBroken: GR
      } = RR;
      const yR = null === JR ? null : (0, uR.d)(JR, "small"),
        ZR = (0, tR.h)(null !== yR && void 0 !== yR ? yR : uR.p);
      return null === JR ? (0, DR.jsx)("div", {
        className: eR()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: GR
        }),
        children: (0, DR.jsx)(ER.d, {
          name: GR ? "triangle-exclamation" : "star"
        })
      }) : (0, DR.jsx)("div", {
        className: eR()("FeaturedGamesPopupSlotThumbnail", qR.f),
        style: (0, qR.c)(ZR),
        role: "img",
        "aria-label": JR.name,
        children: (0, DR.jsx)(qR.b, {
          image: ZR
        })
      })
    }

    function LJ(RR) {
      let {
        schematicId: JR,
        gameName: GR
      } = RR;
      const {
        userContext: tR
      } = (0, CR.d)(), uR = (0, eJ.d)(), [ZR, qR] = (0, LR.useState)(null), [iR, fR] = (0, LR.useState)(null), [VR, KR] = (0, LR.useState)(!1), rR = (0, LR.useCallback)((() => {
        fR(null), bR.c.getFeaturedGames(tR).then((RR => {
          uR.current && qR(RR.slots)
        })).catch((RR => {
          console.error("Failed to get featured games", RR), uR.current && fR("Failed to load featured games")
        }))
      }), [tR, uR]);
      (0, LR.useEffect)((() => {
        rR()
      }), [rR]);
      const eR = (RR, JR) => {
        VR || (KR(!0), bR.c.setFeaturedGame(tR, RR, JR).then((() => {
          uR.current && rR()
        })).catch((RR => {
          console.error("Failed to set featured game", RR), uR.current && fR("Failed to update the featured slot")
        })).finally((() => {
          uR.current && KR(!1)
        })))
      };
      return (0, DR.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, DR.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !ZR && !iR && (0, DR.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, DR.jsx)(OR.d, {})
        }), iR && (0, DR.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: iR
        }), ZR && (0, DR.jsxs)(DR.Fragment, {
          children: [(0, DR.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: ZR.map((RR => {
              const GR = RR.schematicId === JR,
                tR = null === RR.schematicId,
                {
                  categoryGroup: uR
                } = yR.O[RR.slotId];
              return (0, DR.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, DR.jsx)(aJ, {
                  preview: RR.preview,
                  isBroken: !tR
                }), (0, DR.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, DR.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, yR.jb)(uR), " \xb7 position", " ", (0, yR.Q)(RR.slotId, yR.Jb) + 1, " of", " ", (0, yR.Hb)(uR, yR.Jb)]
                  }), tR && (0, DR.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !tR && null !== RR.preview && (0, DR.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: RR.preview.name
                  }), !tR && null === RR.preview && (0, DR.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, DR.jsx)(ER.d, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, DR.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [tR && (0, DR.jsxs)(wR.r, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      eR(RR.slotId, JR)
                    },
                    disabled: VR,
                    children: [(0, DR.jsx)(ER.d, {
                      name: "star"
                    }), " Feature here"]
                  }), !tR && !GR && (0, DR.jsxs)(wR.U, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      eR(RR.slotId, JR)
                    },
                    disabled: VR,
                    children: [(0, DR.jsx)(ER.d, {
                      name: "star"
                    }), " Replace"]
                  }), !tR && (0, DR.jsxs)(wR.M, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      eR(RR.slotId, null)
                    },
                    disabled: VR,
                    children: [(0, DR.jsx)(ER.d, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, RR.slotId)
            }))
          }), (0, DR.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var nJ = GR(5531),
      UJ = GR(5400),
      WJ = GR(4757);
    const AJ = 8,
      CJ = 12;

    function XJ(RR) {
      let {
        customLobbies: JR,
        favouriteLobbies: GR,
        toggleLikeLobby: yR,
        showReport: tR
      } = RR;
      const [uR, ZR] = (0, LR.useState)(AJ);
      return (0, LR.useEffect)((() => {
        if (uR >= JR.length) return;
        let RR = !0;
        return (0, WJ.h)().then((() => {
          RR && ZR(uR + CJ)
        })), () => {
          RR = !1
        }
      }), [uR, JR.length]), (0, DR.jsx)(DR.Fragment, {
        children: JR.slice(0, uR).map((RR => (0, DR.jsx)(UJ.d, {
          customLobby: RR,
          favouriteLobbies: GR,
          toggleLikeLobby: yR,
          showReport: tR
        }, RR.name)))
      })
    }
    var MJ = GR(5405),
      BJ = GR(5420),
      lJ = GR(5378),
      pJ = GR(4921),
      gJ = GR(5467),
      bJ = GR(10291),
      vJ = GR(224);
    const OJ = {
      skyblock: [GR(37415).d]
    };
    var xJ = GR(679);
    const NJ = {
      listedVariations: null,
      backgroundImage: uR.p,
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

    function DJ(RR, JR) {
      const GR = KJ.d[RR.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, uR.d)(RR, "large"),
        badges: [],
        category: RR.gameCategory,
        title: void 0 !== (null === GR || void 0 === GR ? void 0 : GR.title) ? JR(GR.title) : RR.name,
        variationTitle: null,
        description: void 0 !== (null === GR || void 0 === GR ? void 0 : GR.description) ? JR(GR.description) : RR.description,
        ownerSocialPreviewWithoutLocation: "owner" in RR ? RR.owner : null,
        ccu: RR.ccu,
        favourites: RR.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in RR ? RR.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function HJ(RR) {
      var JR, GR, yR;
      return null !== (JR = null !== (GR = (0, vJ.k)() ? function(RR) {
        for (const [JR, GR] of Object.entries(OJ)) {
          const yR = [JR, ...GR.map((RR => (0, uJ.Qb)(JR, RR)))];
          if (yR.includes(RR)) return yR
        }
        return null
      }(RR) : null) && void 0 !== GR ? GR : null === (yR = KJ.b[RR]) || void 0 === yR ? void 0 : yR.listedVariations) && void 0 !== JR ? JR : null
    }

    function oJ() {
      const {
        gameNameWithVariation: RR
      } = (0, TR.x)();
      if ((0, LR.useEffect)(pJ.t, []), RR && (0, yJ.l)(RR)) return (0, DR.jsx)(cJ, {
        urlId: RR
      }, RR);
      const JR = RR && (0, tJ.n)(RR) ? RR : "firstParty";
      return (0, DR.jsx)(IJ, {}, JR)
    }

    function cJ(RR) {
      let {
        urlId: JR
      } = RR;
      const {
        t: GR
      } = (0, iR.A)(), {
        userContext: yR,
        isUserContextUpdating: tR
      } = (0, CR.d)(), uR = (0, LR.useMemo)((() => (0, FR.h)(JR)), [JR]);
      (0, LR.useMemo)((() => {
        if (null === uR) return;
        const RR = kR.userContextManager.peekCurrentUserContext();
        (null !== RR ? bR.c.getGame(RR, uR.schematicId) : kR.userContextManager.getCurrentUserContext().then((RR => bR.c.getGame(RR, uR.schematicId)))).catch((RR => {
          null === (0, bR.k)(RR) && console.error(`Failed to get the custom game ${uR.schematicId}`, RR), (0, FR.e)(JR)
        }))
      }), [uR, JR]);
      const [ZR, qR] = (0, LR.useState)(null), fR = (0, QR.e)();
      (0, LR.useEffect)((() => {
        if (null !== uR || tR) return;
        let RR = !0;
        return bR.c.getGameByUrlId(yR, JR).then((yR => {
          RR && (yR.takenDown ? PJ(GR, yR) : qR({
            urlId: JR,
            game: yR
          }))
        })).catch((yR => {
          const tR = null !== (0, bR.k)(yR);
          tR || console.error(`Failed to find the custom game with urlId ${JR}`, yR), RR && (tR ? PJ(GR, null) : (0, sR.navigateToHomePage)())
        })), () => {
          RR = !1
        }
      }), [JR, uR, tR, yR, GR]);
      const VR = null !== uR && void 0 !== uR ? uR : (null === ZR || void 0 === ZR ? void 0 : ZR.urlId) === JR ? ZR.game : null;
      return null === VR ? (0, DR.jsx)(OR.d, {}) : fR ? (0, DR.jsx)(IJ, {
        gameNameWithVariation: (0, tJ.w)(VR.schematicId),
        knownCustomGame: VR
      }, VR.schematicId) : null
    }

    function PJ(RR, JR) {
      (0, sR.navigateToHomePage)(), (0, bJ.i)(RR, JR)
    }

    function IJ(RR) {
      var JR, GR, ZR, rR, gR, vR, OR, NR;
      let {
        gameNameWithVariation: HR,
        knownCustomGame: oR = null
      } = RR;
      const {
        t: PR
      } = (0, iR.A)();
      (0, VJ.i)();
      const mR = (0, VJ.l)(),
        {
          userContext: zR,
          isUserContextUpdating: SR
        } = (0, CR.d)(),
        jR = (0, lJ.f)(),
        kR = (0, sR.useNavigatePreserveSearch)(),
        QR = (0, TR.x)(),
        FR = (0, LR.useMemo)((() => HR ? {
          gameNameWithVariation: HR
        } : QR), [HR, QR]),
        RJ = (0, iJ.b)(FR),
        yJ = (0, LR.useMemo)((() => {
          const RR = function(RR) {
            var JR, GR;
            const yR = HJ(RR);
            if (!yR || 0 === yR.length || yR.includes(RR)) return RR;
            const tR = fR.i.getItem((0, UR.i)(RR));
            if (tR && yR.includes(tR)) return tR;
            return null !== (JR = null === (GR = KJ.b[RR]) || void 0 === GR ? void 0 : GR.defaultListedVariation) && void 0 !== JR ? JR : yR[0]
          }(RJ.gameNameWithVariation);
          return RR === RJ.gameNameWithVariation ? RJ : {
            ...RJ,
            gameNameWithVariation: RR
          }
        }), [RJ]);
      (0, LR.useEffect)((() => {
        const RR = RJ.gameNameWithVariation;
        yJ.gameNameWithVariation !== RR && RR !== (0, uJ.Sb)(RR) && kR((0, IR.z)(yJ.gameNameWithVariation), {
          replace: !0
        })
      }), [yJ.gameNameWithVariation, RJ.gameNameWithVariation, kR]);
      const [eJ, aJ] = (0, LR.useState)(""), WJ = LR.useRef(null), [AJ, CJ] = (0, LR.useState)(), pJ = (0, tJ.n)(yJ.gameNameWithVariation), bJ = (0, LR.useMemo)((() => pJ ? null : function(RR, JR, GR) {
        var yR, tR;
        const ZR = KJ.b[RR];
        return (0, xJ.I)(ZR) ? null : {
          listedVariations: HJ(RR),
          backgroundImage: (0, uR.l)(RR, (0, uR.b)(ZR)),
          badges: (0, VR.filterBadges)(ZR.badges),
          category: ZR.type,
          title: GR(ZR.title),
          variationTitle: ZR.variationTitle ? GR(ZR.variationTitle) : null,
          description: GR(ZR.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== JR ? null !== (yR = JR[RR]) && void 0 !== yR ? yR : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: ZR.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: ZR.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (tR = ZR.canCreateCustomLobbies) || void 0 === tR || tR,
          countdownInformation: (0, UR.g)(RR)
        }
      }(yJ.gameNameWithVariation, mR, PR)), [pJ, yJ.gameNameWithVariation, mR, PR]), [vJ, OJ] = (0, LR.useState)(!1), [oJ, cJ] = (0, LR.useState)(null), [IJ, zJ] = (0, LR.useState)((() => oR ? DJ(oR, PR) : NJ)), SJ = null !== bJ && void 0 !== bJ ? bJ : IJ, [jJ] = (0, LR.useState)(SJ === NJ), dJ = (0, tR.h)(SJ.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: EJ,
        recentlyPlayedCustomLobbies: YJ
      } = (0, LR.useMemo)((() => function(RR, JR, GR, yR) {
        var tR;
        const uR = RR => {
            const GR = (0, tJ.s)(RR),
              yR = JR.find((JR => "custom" === JR.type ? JR.schematicId === GR : JR.gameNameWithVariation === RR));
            return yR ? [...yR.recentLobbies] : []
          },
          ZR = (0, VR.getRecentGameNameWithVariationLobbiesKey)(RR),
          qR = null !== (tR = fR.i.getItem(ZR)) && void 0 !== tR ? tR : [],
          iR = [...uR(RR), ...qR],
          KR = [];
        for (const fR of iR)(0, wJ.E)(fR) && !KR.includes(fR) && KR.push(fR);
        let wR = iR;
        if (GR) {
          const RR = uR("classic_worlds"),
            JR = iR.filter((JR => !RR.includes(JR)));
          wR = [...RR, ...JR]
        }
        const rR = [],
          eR = !1 === yR ? [] : wR;
        for (const fR of eR)(0, wJ.E)(fR) || rR.includes(fR) || rR.push(fR);
        return {
          recentlyPlayedPublicLobbies: KR,
          recentlyPlayedCustomLobbies: rR
        }
      }(yJ.gameNameWithVariation, jR, SJ.showWorldsInsteadOfCustomLobbies, SJ.canCreateCustomLobbies)), [yJ.gameNameWithVariation, jR, SJ.showWorldsInsteadOfCustomLobbies, SJ.canCreateCustomLobbies]), [kJ, QJ] = (0, LR.useState)(!0), [FJ, TJ] = (0, LR.useState)([]), [sJ, hJ] = (0, LR.useState)(null), [RG, JG] = (0, LR.useState)("explore"), GG = (0, LR.useRef)(!1), yG = (0, LR.useCallback)((RR => {
        (0, nR.unstable_batchedUpdates)((() => {
          CJ(RR), zJ((JR => ({
            ...DJ(RR, PR),
            isFavourite: JR.isFavourite
          })))
        }))
      }), [PR]);
      (0, LR.useEffect)((() => {
        null === fJ.d.get("gameEntrySource") && (0, fJ.k)("gameInformationPageDirect")
      }), []);
      const tG = (0, LR.useRef)(null);
      (0, LR.useEffect)((() => {
        const RR = RR => {
            tG.current = RR.target instanceof Element ? RR.target.closest("a, button") : null
          },
          JR = RR => {
            "Tab" === RR.key && (tG.current = null)
          };
        return document.addEventListener("pointerdown", RR, !0), document.addEventListener("keydown", JR, !0), () => {
          document.removeEventListener("pointerdown", RR, !0), document.removeEventListener("keydown", JR, !0)
        }
      }), []), (0, XR.e)("Enter", (RR => {
        const JR = RR.target instanceof Element ? RR.target : null;
        if (RR.defaultPrevented || null !== JR && void 0 !== JR && JR.closest("input, textarea, select")) return;
        const GR = null === JR || void 0 === JR ? void 0 : JR.closest("a, button");
        GR && GR !== tG.current || (RR.preventDefault(), rG())
      })), (0, MR.c)(sR.navigateToHomePage);
      const uG = EJ.length > 0 || YJ.length > 0,
        ZG = !SJ.useRejoinLastLobbyButton || 0 === EJ.length,
        qG = pJ && null === SJ.ownerSocialPreviewWithoutLocation,
        iG = zR.getPlayerName() === (null === AJ || void 0 === AJ || null === (JR = AJ.owner) || void 0 === JR ? void 0 : JR.name),
        fG = null !== (GR = null === (ZR = SJ.badges.find((RR => "event" === RR.type))) || void 0 === ZR ? void 0 : ZR.event) && void 0 !== GR ? GR : null,
        VG = ZG ? wR.n : wR.g,
        KG = (0, DR.jsx)(KR.h, {
          tooltipInner: (0, DR.jsx)("div", {
            children: PR("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, DR.jsx)(VG, {
            className: "GameInformationButton",
            padDefaultFocus: ZG,
            showPress: !0,
            onClick: () => {
              rG()
            },
            children: (0, DR.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [ZG && (0, DR.jsxs)(DR.Fragment, {
                children: [(0, DR.jsx)(ER.d, {
                  name: "play"
                }), " "]
              }), PR("homePage:quickPlay")]
            })
          })
        });
      (0, LR.useEffect)((() => {
        if (!pJ || SR) return;
        let RR = !0;
        const JR = (0, tJ.s)(yJ.gameNameWithVariation);
        return bR.c.getGame(zR, JR).then((JR => {
          RR && (JR.takenDown ? cJ({
            ownGame: JR
          }) : yG(JR))
        })).catch((JR => {
          const GR = null !== (0, bR.k)(JR);
          GR || console.error("Failed to get Custom Game information", JR), RR && (GR ? cJ({
            ownGame: null
          }) : (0, sR.navigateToHomePage)())
        })), bR.c.getFavouriteGames(zR).then((GR => {
          RR && zJ((RR => ({
            ...RR,
            isFavourite: GR.includes(JR)
          })))
        })).catch((JR => {
          console.error("Failed to get favourite games", JR), RR && OJ(!0)
        })), () => {
          RR = !1
        }
      }), [pJ, SR, yJ.gameNameWithVariation, yG, zR]), (0, LR.useEffect)((() => {
        null !== oJ && PJ(PR, oJ.ownGame)
      }), [oJ, PR]);
      const wG = !pJ && null === bJ;

      function rG(RR) {
        (0, gJ.h)(), kR((0, WR.e)(yJ.gameNameWithVariation, RR))
      }(0, LR.useEffect)((() => {
        wG && (0, sR.navigateToHomePage)()
      }), [wG]), (0, LR.useEffect)((() => {
        if (!1 === SJ.canCreateCustomLobbies) return;
        let RR = !0;
        return null !== SJ.showWorldsInsteadOfCustomLobbies && !1 === SR && (QJ(!0), bR.c.getFavouriteLobbies(zR).then((RR => {
          hJ(RR)
        })), bR.c.getOpenCustomLobbies(zR, {
          gameNameWithVariation: SJ.showWorldsInsteadOfCustomLobbies ? "classic" : yJ.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === RG,
          onlyFavouriteLobbies: "favourite" === RG
        }).then((JR => {
          RR && (0, nR.unstable_batchedUpdates)((() => {
            TJ(JR), QJ(!1)
          }))
        })).catch((JR => {
          console.error("Failed to get open custom lobbies", JR), RR && QJ(!1)
        }))), () => {
          RR = !1
        }
      }), [SR, yJ, RG, SJ.showWorldsInsteadOfCustomLobbies, SJ.canCreateCustomLobbies, zR]);
      const eG = (0, LR.useCallback)((async RR => {
          try {
            if (!sJ) return;
            sJ.includes(RR) ? (bR.c.unfavouriteLobby(zR, RR), hJ(sJ.filter((JR => JR !== RR)))) : (bR.c.favouriteLobby(zR, RR).catch((RR => {
              console.error("Failed to favourite lobby", RR)
            })), hJ([...sJ, RR]))
          } catch (JR) {
            console.error("Failed to like lobby", JR)
          }
        }), [zR, sJ]),
        aG = (null === AJ || void 0 === AJ ? void 0 : AJ.schematicId) === (0, tJ.s)(RJ.gameNameWithVariation) ? AJ : null,
        LG = aG && (0, IR.G)(RJ.gameNameWithVariation, (RR => PR(RR)), aG);
      (0, hR.i)(aG && (0, IR.z)(RJ.gameNameWithVariation, aG));
      const nG = YR.featureFlags.canUseCustomLobbies && !0 === SJ.canCreateCustomLobbies,
        UG = (0, DR.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, DR.jsx)(dR, {
            gameNameWithVariation: yJ.gameNameWithVariation
          })
        });
      return (0, DR.jsx)(DR.Fragment, {
        children: (0, DR.jsxs)("article", {
          className: eR()("GameInformation", {
            GameInformationFadeIn: jJ,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (rR = SJ.countdownInformation) || void 0 === rR ? void 0 : rR.type)
          }),
          children: [LG && (0, DR.jsx)(AR.b, {
            meta: LG
          }), (0, DR.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, DR.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, DR.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, DR.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, DR.jsx)("div", {
                  className: eR()("GameInformationTopBackgroundImage", qR.f),
                  style: (0, qR.c)(dJ),
                  children: (0, DR.jsx)(qR.b, {
                    image: dJ
                  })
                })]
              }), (0, DR.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, DR.jsx)(nJ.c, {}), (0, DR.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, DR.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, DR.jsxs)("div", {
                      className: eR()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: qG
                      }),
                      children: [SJ.badges.map((RR => (0, DR.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${RR.type}`,
                        children: (0, DR.jsx)(pR.d, {
                          badge: RR
                        })
                      }, RR.type))), pJ && (0, DR.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, DR.jsx)(lR.c, {
                          text: (0, yR.db)({
                            type: "playerCrafted"
                          })
                        })
                      }), SJ.category && (0, DR.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, DR.jsx)(lR.c, {
                          text: [{
                            str: (0, yR.eb)(SJ.category).toUpperCase()
                          }]
                        })
                      }), null !== SJ.ccu && (0, DR.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, DR.jsx)(ER.d, {
                          name: "user"
                        }), (0, wJ.J)(SJ.ccu), " online"]
                      }), null !== SJ.ownerSocialPreviewWithoutLocation && (0, DR.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, DR.jsx)("span", {
                          children: "Made by"
                        }), (0, DR.jsx)(xR.h, {
                          playerSocialPreview: {
                            ...SJ.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), qG && (0, DR.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, DR.jsx)("span", {
                          children: "Made by"
                        }), (0, DR.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== SJ.favourites && (null !== SJ.isFavourite || pJ && !vJ) && (0, DR.jsx)(wR.y, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== GG.current && (GG.current = !0, null !== SJ.isFavourite)) {
                              const RR = (0, tJ.s)(yJ.gameNameWithVariation);
                              let JR;
                              SJ.isFavourite ? (JR = -1, bR.c.unfavouriteGame(zR, RR).catch((RR => {
                                console.error("Failed to get unfavourite game", RR)
                              })).finally((() => {
                                GG.current = !1
                              }))) : (JR = 1, bR.c.favouriteGame(zR, RR).catch((RR => {
                                console.error("Failed to get favourite game", RR)
                              })).finally((() => {
                                GG.current = !1
                              }))), zJ((RR => ({
                                ...RR,
                                isFavourite: !RR.isFavourite
                              }))), zJ((RR => ({
                                ...RR,
                                favourites: RR.favourites + JR
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (gR = SJ.isFavourite) && void 0 !== gR && gR,
                        disabled: null === SJ.isFavourite,
                        className: eR()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === SJ.isFavourite
                        })
                      }, null === SJ.isFavourite ? "pending" : "known"), pJ && !qG && YR.featureFlags.useSocialFeatures && !iG && (0, DR.jsx)(MJ.c, {
                        targetType: "customGame",
                        targetId: (0, tJ.s)(yJ.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (zR.playerHasRank("developer") || zR.playerHasRank("admin") && iG) && (0, DR.jsxs)(wR.n, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          kR((0, qJ.p)((0, ZJ.e)(yJ.gameNameWithVariation, !0)))
                        },
                        children: [(0, DR.jsx)(ER.d, {
                          name: "star-christmas"
                        }), " ", PR("studio:viewInStudio")]
                      }), pJ && zR.playerHasRank("developer") && (0, DR.jsxs)(wR.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, rJ.e)({
                            schematicId: (0, tJ.s)(yJ.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, DR.jsx)(ER.d, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), pJ && zR.playerHasRank("developer") && (0, DR.jsxs)(wR.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          JJ.NotificationProvider.showCustomPopup({
                            body: () => (0, DR.jsx)(LJ, {
                              schematicId: (0, tJ.s)(yJ.gameNameWithVariation),
                              gameName: SJ.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, DR.jsx)(ER.d, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (vR = SJ.countdownInformation) || void 0 === vR ? void 0 : vR.type) && (0, DR.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, DR.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, DR.jsx)(BR.d, {
                            toTime: SJ.countdownInformation.countdownToTime
                          })]
                        }), (0, DR.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: SJ.countdownInformation.previewText
                        })]
                      })]
                    }, qG ? "pending" : "shown"), (0, DR.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, DR.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, DR.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [SJ.title, " ", SJ.variationTitle && (null === (OR = KJ.b[yJ.gameNameWithVariation]) || void 0 === OR ? void 0 : OR.variationThumbnailUseBigRatio) && (0, DR.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: SJ.variationTitle
                          })]
                        })
                      }), SJ.listedVariations && SJ.listedVariations.length > 1 && (0, DR.jsx)("div", {
                        className: eR()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (NR = KJ.b[yJ.gameNameWithVariation]) || void 0 === NR ? void 0 : NR.variationThumbnailUseBigRatio
                        }),
                        children: SJ.listedVariations.map((RR => {
                          var JR, GR;
                          return (0, DR.jsxs)(mJ, {
                            variation: RR,
                            isSelected: yJ.gameNameWithVariation === RR,
                            children: [null !== mR && (0, DR.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, DR.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, DR.jsx)(ER.d, {
                                  name: "user"
                                }), " ", (0, wJ.J)(null !== (JR = mR[RR]) && void 0 !== JR ? JR : 0)]
                              })
                            }), (0, DR.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: PR(null !== (GR = KJ.b[RR].variationTitle) && void 0 !== GR ? GR : KJ.b[RR].title)
                            }), (0, DR.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, VR.filterBadges)(KJ.b[RR].badges).map((RR => (0, DR.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + RR.type,
                                children: (0, DR.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, DR.jsx)(pR.d, {
                                    badge: RR
                                  })
                                })
                              }, RR.type)))
                            })]
                          }, RR)
                        }))
                      })]
                    }), SJ.description && (0, DR.jsx)("p", {
                      className: "GameInformationDescription",
                      children: SJ.description
                    })]
                  }), (0, DR.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, DR.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!ZG && (0, DR.jsx)(KR.h, {
                        tooltipInner: (0, DR.jsx)("div", {
                          children: PR("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, DR.jsx)(wR.n, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            rG(EJ[0])
                          },
                          children: (0, DR.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, DR.jsx)(ER.d, {
                              name: "play"
                            }), " ", PR("homePage:rejoinLobbyNumber", {
                              number: EJ[0]
                            })]
                          })
                        })
                      }), ZG && KG]
                    }), (0, DR.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!ZG && KG, (0, DR.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, DR.jsx)(ER.d, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, DR.jsx)(aR.b, {
                          className: "JoinLobbyInput",
                          placeholderText: PR("homePage:lobbyName"),
                          maxLength: wJ.I,
                          domRef: WJ,
                          onValueChange: RR => {
                            RR = (0, wJ.hb)(RR), aJ(RR)
                          },
                          onEnter: () => {
                            0 === eJ.length ? rG(EJ[0]) : rG(eJ)
                          }
                        }), (0, DR.jsx)(wR.g, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === eJ.length ? rG(EJ[0]) : rG(eJ)
                          },
                          children: PR("general:join")
                        })]
                      })]
                    }), (0, DR.jsxs)("section", {
                      className: eR()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !uG
                      }),
                      children: [(0, DR.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, DR.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, DR.jsx)(ER.d, {
                            name: "clock-rotate-left"
                          }), uG && (0, DR.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: PR("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, DR.jsx)(BJ.e, {
                        lobbyGroups: [EJ, YJ],
                        onLobbyClick: RR => {
                          rG(RR)
                        },
                        keyPrefix: yJ.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== fG && (0, DR.jsx)(cR, {
                eventName: fG
              })]
            }), nG && (0, DR.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, DR.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, DR.jsxs)("div", {
                  className: eR()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === SJ.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === SJ.showWorldsInsteadOfCustomLobbies && (0, DR.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, DR.jsx)(ER.d, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, DR.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, DR.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), PR("game:worlds")]
                    })]
                  }), !1 === SJ.showWorldsInsteadOfCustomLobbies && (0, DR.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, DR.jsx)(ER.d, {
                      name: "joystick"
                    }), (0, DR.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, DR.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), PR("homePage:customLobbies")]
                    })]
                  }), (0, DR.jsx)(wR.U, {
                    onClick: () => {
                      JG("explore")
                    },
                    active: "explore" === RG,
                    children: PR("general:explore")
                  }), (0, DR.jsx)(wR.U, {
                    onClick: () => {
                      JG("favourite")
                    },
                    active: "favourite" === RG,
                    children: PR("homePage:favouriteLobbies")
                  }), (0, DR.jsx)(wR.U, {
                    onClick: () => {
                      JG("owned")
                    },
                    active: "owned" === RG,
                    children: PR("homePage:ownedLobbies")
                  })]
                }), (0, DR.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, DR.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, DR.jsx)(UJ.c, {
                      label: "Create",
                      onClick: () => {
                        JJ.NotificationProvider.showCustomPopup({
                          body: RR => (0, DR.jsx)(GJ.CreateCustomLobby, {
                            gameNameWithVariation: yJ.gameNameWithVariation,
                            close: RR
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === kJ && (0, DR.jsx)(UJ.g, {}), !1 === kJ && (0, DR.jsx)(XJ, {
                      customLobbies: FJ,
                      favouriteLobbies: sJ,
                      toggleLikeLobby: eG,
                      showReport: YR.featureFlags.useSocialFeatures && "owned" !== RG
                    })]
                  }), UG]
                })]
              })
            })]
          }), !nG && UG]
        })
      })
    }

    function mJ(RR) {
      let {
        variation: JR,
        isSelected: GR,
        children: yR
      } = RR;
      const iR = KJ.b[JR],
        VR = (0, uR.l)(JR, (0, uR.o)(iR)),
        KR = (0, tR.h)(VR),
        wR = (0, ZR.f)([(0, uR.h)(JR, (0, uR.b)(iR))]);
      return (0, DR.jsxs)(sR.LinkPreserveSearch, {
        to: (0, IR.z)(JR),
        replace: !0,
        className: eR()("GameInformationVariation", qR.f, {
          SelectedGameInformationVariation: GR
        }),
        onClick: RR => {
          if (!(0, RJ.e)(RR)) return;
          const GR = (0, UR.i)(JR);
          fR.i.setItem(GR, JR)
        },
        onMouseEnter: wR.start,
        onMouseLeave: wR.cancel,
        onFocus: wR.start,
        onBlur: wR.cancel,
        style: (0, qR.c)(KR),
        children: [(0, DR.jsx)(qR.b, {
          image: KR
        }), yR]
      })
    }
  },
  7622: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => UR
    });
    var yR = GR(66),
      tR = GR(1590),
      uR = GR(1647),
      ZR = GR(4829),
      qR = GR(1196),
      iR = GR(1465),
      fR = GR(1501),
      VR = GR(1468),
      KR = GR(1163),
      wR = GR.n(KR),
      rR = GR(7615),
      eR = GR(1378);

    function aR(RR) {
      let {
        info: JR,
        className: GR
      } = RR;
      const {
        statusText: yR,
        rowText: tR
      } = (0, rR.f)();
      return (0, eR.jsxs)("div", {
        className: wR()("GameApprovalInfoDetails", GR),
        children: [(0, eR.jsxs)("div", {
          className: wR()("GameApprovalInfoSummary", JR.overallPassed ? "Passed" : "Failed"),
          children: [(0, eR.jsx)(VR.d, {
            name: JR.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, eR.jsx)("span", {
            children: yR(JR.status)
          })]
        }), JR.rows.length > 0 && (0, eR.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: JR.rows.map((RR => {
            const {
              label: JR,
              value: GR
            } = tR(RR);
            return (0, eR.jsxs)("div", {
              className: wR()("GameApprovalInfoRow", RR.passed ? "Passed" : "Failed"),
              children: [(0, eR.jsx)(VR.d, {
                name: RR.passed ? "check" : "xmark"
              }), (0, eR.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, eR.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: JR
                }), null !== GR && (0, eR.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: GR
                })]
              })]
            }, RR.kind)
          }))
        })]
      })
    }
    var LR = GR(1270),
      nR = GR(1493);

    function UR(RR) {
      nR.NotificationProvider.showCustomPopup({
        body: () => (0, eR.jsx)(WR, {
          ...RR
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function WR(RR) {
      let {
        schematicId: JR,
        canOverride: GR,
        onApprovalChanged: KR
      } = RR;
      const {
        t: wR
      } = (0, LR.A)(), {
        userContext: rR
      } = (0, qR.d)(), nR = (0, ZR.d)(), [UR, WR] = (0, yR.useState)(null), [AR, CR] = (0, yR.useState)(null), [XR, MR] = (0, yR.useState)(!1), BR = (0, yR.useCallback)((() => {
        CR(null), uR.c.getGameApprovalInfo(rR, JR).then((RR => {
          nR.current && WR(RR)
        })).catch((RR => {
          console.error("Failed to get game approval info", RR), nR.current && CR(wR("studio:approvalLoadFailed"))
        }))
      }), [rR, JR, nR, wR]);
      (0, yR.useEffect)((() => {
        BR()
      }), [BR]);
      const lR = RR => {
        XR || (MR(!0), uR.c.setGameApproval(rR, JR, RR).then((() => {
          null === KR || void 0 === KR || KR(), nR.current && BR()
        })).catch((RR => {
          console.error("Failed to set game approval", RR)
        })).finally((() => {
          nR.current && MR(!1)
        })))
      };
      return (0, eR.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, eR.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: wR("studio:approvalTitle")
        }), !UR && !AR && (0, eR.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, eR.jsx)(iR.d, {})
        }), AR && (0, eR.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: AR
        }), UR && (0, eR.jsxs)(eR.Fragment, {
          children: [(0, eR.jsx)(aR, {
            info: UR
          }), GR && (0, eR.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== UR.manualOverride && (0, eR.jsx)(fR.h, {
              tooltipInner: (0, eR.jsx)("div", {
                children: wR("studio:approvalApproveTooltip")
              }),
              children: (0, eR.jsxs)(tR.n, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  lR(!0)
                },
                disabled: XR,
                children: [(0, eR.jsx)(VR.d, {
                  name: "check"
                }), " ", wR("studio:approvalApprove")]
              })
            }), !1 !== UR.manualOverride && (0, eR.jsx)(fR.h, {
              tooltipInner: (0, eR.jsx)("div", {
                children: wR("studio:approvalDenyTooltip")
              }),
              children: (0, eR.jsxs)(tR.M, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  lR(!1)
                },
                disabled: XR,
                children: [(0, eR.jsx)(VR.d, {
                  name: "xmark"
                }), " ", wR("studio:approvalDeny")]
              })
            }), null !== UR.manualOverride && (0, eR.jsx)(fR.h, {
              tooltipInner: (0, eR.jsx)("div", {
                children: wR("studio:approvalClearOverrideTooltip")
              }),
              children: (0, eR.jsxs)(tR.g, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  lR(null)
                },
                disabled: XR,
                children: [(0, eR.jsx)(VR.d, {
                  name: "arrows-rotate"
                }), " ", wR("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  7615: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      f: () => ZR
    });
    var yR = GR(377),
      tR = GR(1270);
    const uR = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function ZR() {
      const {
        t: RR,
        selectedLanguage: JR
      } = (0, tR.A)();
      return {
        statusText: JR => RR(uR[JR]),
        rowText: GR => {
          const uR = (RR, GR) => (0, yR.Z)((0, tR.n)(JR.code, RR), 0, GR),
            ZR = (JR, GR) => null === GR ? JR : RR("studio:approvalWithMinDays", {
              value: JR,
              days: GR
            });
          switch (GR.kind) {
            case "ownerAccountAge": {
              const JR = GR.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: RR("studio:approvalAccountAgeLabel"),
                value: ZR(RR(JR, {
                  age: uR(JR, GR.accountAgeMs)
                }), GR.minAccountAgeDays)
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: RR("studio:approvalSinceUnbannedLabel"), value: ZR(uR("studio:approvalSinceUnbannedLabel", GR.sinceMs), GR.minDays)
              };
            case "reportHold": {
              const {
                detail: JR
              } = GR;
              if (null === JR) return {
                label: RR("studio:approvalUnderInvestigation"),
                value: null
              };
              const yR = JR.weightedReporters.toFixed(1),
                tR = JR.threshold.toFixed(1),
                ZR = RR("studio:approvalReportHoldLabel", {
                  hours: JR.windowHours
                });
              if (null === JR.heldUntil) return {
                label: ZR,
                value: RR("studio:approvalReportHoldValue", {
                  weightedReporters: yR,
                  threshold: tR
                })
              };
              const qR = "studio:approvalReportHoldValueHeld";
              return {
                label: ZR,
                value: RR(qR, {
                  weightedReporters: yR,
                  threshold: tR,
                  time: uR(qR, JR.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function qR(RR) {
      return null === RR.manualOverride && RR.rows.some((RR => "reportHold" === RR.kind && !RR.passed))
    }
  },
  35204: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(66),
      tR = GR(4757);

    function uR() {
      const [RR, JR] = (0, yR.useState)(!1);
      return (0, yR.useLayoutEffect)((() => {
        let RR = !0;
        return (0, tR.h)().then((() => {
          RR && JR(!0)
        })), () => {
          RR = !1
        }
      }), []), RR
    }
  },
  10291: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => LR,
      i: () => nR
    });
    var yR = GR(163),
      tR = GR(203),
      uR = GR(1127),
      ZR = GR(1141),
      qR = GR(1317),
      iR = GR(2134),
      fR = GR(3357),
      VR = GR(1647),
      KR = GR(1493),
      wR = GR(1201),
      rR = GR(10298),
      eR = GR(1663),
      aR = GR(1695);

    function LR(RR, JR) {
      const GR = !0 === JR.debugResult.gameRefused,
        uR = GR || JR.code === yR.j.REQUEST_TO_MATCHMAKING ? (0, rR.k)(JR.message) : null;
      if (null !== uR) return CR(RR, RR((0, rR.p)(uR)), RR(rR.n[uR])), !0;
      if (GR) return async function(RR) {
        const {
          gameNameWithVariation: JR,
          lobbyName: GR,
          shownLobbyName: yR
        } = iR.gameBridge.latest("connectedGame"), tR = "classic" === JR && (0, qR.A)(GR) ? yR : await (0, fR.d)(RR, JR, GR);
        return "" !== tR ? RR("general:cantJoinGame", {
          game: tR
        }) : RR("general:cantJoinThisGame")
      }(RR).then((GR => {
        CR(RR, GR, JR.message)
      })), !0;
      const {
        joinFailure: ZR
      } = JR.debugResult, VR = "refused" === (null === ZR || void 0 === ZR ? void 0 : ZR.at) ? ZR.code : null;
      return VR === tR.e.schematicNotPublished.code ? (async function(RR, JR) {
        const GR = UR(),
          yR = await AR(GR);
        if (null === yR || yR.gamePublished) return void CR(RR, RR("general:cantJoinThisGame"), JR);
        await WR(RR, "rocket-launch", RR("studio:gameNotPublishedTitle", {
          game: yR.name
        }), RR("studio:publishInStudio"), GR)
      }(RR, JR.message), !0) : (VR === tR.e.schematicBanned.code || VR === tR.e.customGameTakenDown.code) && (AR(UR()).then((JR => {
        nR(RR, JR)
      })), !0)
    }

    function nR(RR, JR) {
      !0 !== (null === JR || void 0 === JR ? void 0 : JR.takenDown) ? CR(RR, RR("general:cantJoinThisGame"), tR.e.customGameTakenDown.text) : WR(RR, "lock", RR("studio:gameTakenDownTitle", {
        game: JR.name
      }), RR("studio:viewInStudio"), JR.schematicId)
    }

    function UR() {
      return (0, uR.s)(iR.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function WR(RR, JR, GR, yR, tR) {
      !0 === await KR.NotificationProvider.showPromptPopup({
        icon: JR,
        title: GR,
        confirmText: yR,
        cancelText: RR("general:cancel")
      }).getResult() && (0, eR.navigatePreserveSearch)((0, aR.p)((0, ZR.d)(tR), "manage"))
    }
    async function AR(RR) {
      try {
        return await VR.c.getGame(await wR.userContextManager.getCurrentUserContext(), RR, !0)
      } catch (JR) {
        return (0, VR.g)(JR) || console.error(`Failed to get game ${RR}`, JR), null
      }
    }

    function CR(RR, JR, GR) {
      KR.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: JR,
        subtitle: GR,
        confirmText: RR("general:ok"),
        cancelText: ""
      })
    }
  },
  10315: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(1459),
      tR = GR(1317),
      uR = GR(679);

    function ZR(RR) {
      return RR = function(RR, JR) {
        var GR;
        const yR = new URLSearchParams(JR),
          tR = yR.get("lobby"),
          uR = yR.get("vm"),
          ZR = null !== (GR = tR) && void 0 !== GR ? GR : RR.lobbyName,
          qR = null !== uR && void 0 !== uR ? uR : RR.directJoinVmUrl;
        if (ZR === RR.lobbyName && qR === RR.directJoinVmUrl) return RR;
        return {
          ...RR,
          lobbyName: ZR,
          directJoinVmUrl: qR
        }
      }(RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), RR = function(RR) {
        if ((0, uR.I)(RR.directJoinVmUrl)) return RR;
        const JR = (0, tR.S)(RR.directJoinVmUrl);
        null === JR && (RR.directJoinVmUrl = void 0);
        return RR
      }(RR = function(RR) {
        if ((0, uR.I)(RR.gameNameWithVariation)) return RR;
        return RR.gameNameWithVariation = (0, yR.j)(RR.gameNameWithVariation), RR
      }(RR))
    }
  },
  10298: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      h: () => ZR,
      k: () => qR,
      n: () => fR,
      p: () => iR
    });
    var yR = GR(203),
      tR = GR(5425);

    function uR(RR) {
      return ZR(RR) === yR.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function ZR(RR) {
      return "object" === typeof RR && null !== RR ? RR.code : void 0
    }

    function qR(RR) {
      var JR;
      return null !== (JR = Object.keys(tR.d).find((JR => tR.d[JR] === RR))) && void 0 !== JR ? JR : null
    }

    function iR(RR) {
      return "notWhitelisted" === RR ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const fR = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37415: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      g: () => yR
    });
    const yR = "skyblockSkills",
      tR = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);