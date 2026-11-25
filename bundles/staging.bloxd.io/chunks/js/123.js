export const id = 123;
export const ids = [123, 401];
export const modules = {
  36663: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => jb
    });
    var wG = ZG(333),
      SG = ZG(3481),
      LG = ZG(3513),
      yG = ZG(3507),
      kG = ZG(3505),
      UG = ZG(1151),
      YG = ZG(29),
      VG = ZG(1702),
      pG = ZG(1320),
      fG = ZG(1393),
      QG = ZG(1006),
      KG = ZG.n(QG),
      hG = ZG(1621),
      dG = ZG(51),
      JG = ZG(59),
      rG = ZG(2351),
      zG = ZG(1290),
      EG = ZG(1557),
      oG = ZG(1092),
      XG = ZG(3400),
      uG = ZG(4573),
      iG = ZG(3463),
      CG = ZG(1876),
      WG = ZG(3473),
      mG = ZG(1715),
      IG = ZG(1431),
      FG = ZG(2157),
      vG = ZG(1302),
      aG = ZG(2575),
      cG = ZG(5039),
      lG = ZG(1067);
    const jG = 15e3,
      PG = 2500;

    function MG(GG) {
      var bG;
      let {
        eventName: ZG
      } = GG;
      const {
        t: wG
      } = (0, UG.w)(), SG = mG.i[ZG], [LG, yG] = (0, dG.useState)((() => Date.now() >= SG.endsAt.getTime())), [kG, YG] = (0, dG.useState)("overall"), VG = function(GG, bG) {
        const {
          userContext: ZG,
          isUserContextUpdating: wG
        } = (0, oG.e)(), SG = `${GG}:${bG}`, [LG, yG] = (0, dG.useState)({
          requestKey: SG,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, dG.useEffect)((() => {
          if (wG) return;
          let LG, kG = !1;
          const UG = async () => {
            if ("visible" === document.visibilityState) try {
              const wG = await IG.d.getGameEventLeaderboard(ZG, {
                event: GG,
                scope: bG
              });
              kG || yG({
                requestKey: SG,
                leaderboard: {
                  status: "loaded",
                  leaderboard: wG
                }
              })
            } catch {
              kG || yG((GG => GG.requestKey === SG && "loaded" === GG.leaderboard.status ? GG : {
                requestKey: SG,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            kG || (LG = setTimeout(UG, jG))
          };
          return UG(), () => {
            kG = !0, clearTimeout(LG)
          }
        }), [GG, bG, SG, ZG, wG]), LG.requestKey === SG ? LG.leaderboard : {
          status: "loading"
        }
      }(ZG, kG), pG = function(GG) {
        const bG = (0, dG.useRef)(null),
          ZG = (0, dG.useRef)(0),
          wG = (0, dG.useRef)(),
          [SG, LG] = (0, dG.useState)({});
        return (0, dG.useEffect)((() => {
          const SG = null === GG || void 0 === GG ? void 0 : GG.entries;
          if (!SG) return;
          const yG = new Map(SG.map((GG => [GG.player.name, GG.value]))),
            kG = bG.current;
          if (bG.current = yG, null === kG) return;
          const UG = {};
          for (const [GG, bG] of yG) {
            const wG = kG.get(GG);
            void 0 !== wG && bG > wG && (UG[GG] = {
              amount: bG - wG,
              key: ZG.current++
            })
          }
          0 !== Object.keys(UG).length && (LG(UG), clearTimeout(wG.current), wG.current = setTimeout((() => {
            LG({})
          }), PG))
        }), [GG]), (0, dG.useEffect)((() => () => {
          clearTimeout(wG.current)
        }), []), SG
      }("loaded" === VG.status ? VG.leaderboard : null), fG = function(GG) {
        const [bG, ZG] = (0, dG.useState)(null), wG = "loaded" === GG.status ? GG.leaderboard.goalProgress : void 0;
        return (0, dG.useEffect)((() => {
          wG && ZG(wG)
        }), [wG]), bG
      }(VG), QG = FG.c[`profileEffect_${SG.prizePack}`];
      if (LG) return null;
      const hG = "loaded" === VG.status ? VG.leaderboard : null,
        JG = null !== (bG = null === hG || void 0 === hG ? void 0 : hG.entries) && void 0 !== bG ? bG : null,
        rG = null !== hG && void 0 !== hG && hG.own && null !== JG && !JG.some((GG => GG.isOwn)) ? hG.own : null;
      return (0, lG.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, lG.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, lG.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, lG.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, lG.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, lG.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), wG("gameEvents:live")]
              }), (0, lG.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [wG("gameEvents:endsIn"), (0, lG.jsx)(iG.d, {
                  toTime: SG.endsAt,
                  onReachEndOfCountdown: () => {
                    yG(!0)
                  }
                })]
              })]
            }), (0, lG.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: wG(SG.titleKey)
            }), (0, lG.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, lG.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [QG && (0, lG.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, lG.jsx)(QG, {})
                }), (0, lG.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, lG.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: wG("gameEvents:prize")
                  }), (0, lG.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: wG(SG.prizeNameKey)
                  })]
                })]
              }), (0, lG.jsx)(AG, {
                event: SG,
                progress: fG
              })]
            })]
          }), (0, lG.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, lG.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, lG.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: wG(SG.leaderboard.titleKey)
              }), (0, lG.jsx)(cG.c, {
                ariaLabel: wG("gameEvents:leaderboardScope"),
                options: mG.e.map((GG => ({
                  value: GG,
                  label: wG(`gameEvents:${GG}Scope`)
                }))),
                value: kG,
                onChange: YG
              })]
            }), "loading" === VG.status && (0, lG.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, lG.jsx)(vG.b, {})
            }), ("unavailable" === VG.status || "loaded" === VG.status && null === JG) && (0, lG.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: wG("gameEvents:leaderboardUnavailable")
            }), null !== JG && 0 === JG.length && (0, lG.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: wG("friends" === kG ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== JG && JG.length > 0 && (0, lG.jsx)("ol", {
              className: "GameEventPanelRows",
              children: JG.map((GG => {
                const bG = pG[GG.player.name];
                return (0, lG.jsxs)("li", {
                  className: KG()("GameEventPanelRow", {
                    GameEventPanelRowOwn: GG.isOwn,
                    GameEventPanelRowTop: GG.rank <= 3
                  }),
                  children: [(0, lG.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", GG.rank]
                  }), (0, lG.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, lG.jsx)(aG.h, {
                      playerSocialPreview: {
                        ...GG.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== bG && (0, lG.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", bG.amount.toLocaleString()]
                  }, bG.key), (0, lG.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: GG.value.toLocaleString()
                  })]
                }, GG.player.name)
              }))
            }), rG && (0, lG.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, lG.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", rG.rank.toLocaleString()]
              }), (0, lG.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: wG("gameEvents:yourPlace")
              }), (0, lG.jsx)("span", {
                className: "GameEventPanelScore",
                children: rG.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function AG(GG) {
      let {
        event: bG,
        progress: ZG
      } = GG;
      const {
        t: wG
      } = (0, UG.w)(), SG = null !== ZG && bG.prizeGoals.some(((GG, bG) => ZG[bG] >= GG.target));
      return (0, lG.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, lG.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: wG(SG ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, lG.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: bG.prizeGoals.map(((GG, bG) => {
            const SG = null === ZG ? null : Math.min(ZG[bG], GG.target);
            return (0, lG.jsxs)(dG.Fragment, {
              children: [bG > 0 && (0, lG.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: wG("gameEvents:goalsOr")
              }), (0, lG.jsxs)("div", {
                className: KG()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: SG === GG.target
                }),
                children: [(0, lG.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: wG(GG.labelKey)
                }), (0, lG.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, lG.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== SG && void 0 !== SG ? SG : 0) / GG.target * 100 + "%"
                    }
                  }), null !== SG && (0, lG.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [SG.toLocaleString(), " / ", GG.target.toLocaleString()]
                  })]
                })]
              })]
            }, GG.board)
          }))
        })]
      })
    }
    var sG = ZG(1490),
      qG = ZG(1535),
      nG = ZG(999),
      gG = ZG(719),
      eG = ZG(3458);

    function RG(GG) {
      let {
        gameNameWithVariation: bG
      } = GG;
      const ZG = (0, sG.H)(bG),
        [wG, SG] = (0, dG.useState)(null);
      if ((0, dG.useEffect)((() => {
          if (!ZG) return;
          let GG = !0;
          return (0, qG.j)(ZG).then((bG => {
            GG && SG(bG)
          })).catch((GG => {
            console.error(`Failed to load the page copy for ${ZG.name}`, GG)
          })), () => {
            GG = !1
          }
        }), [ZG]), !ZG || !wG || wG.name !== ZG.name) return null;
      const LG = (0, qG.f)(wG),
        yG = new Set((0, nG.e)((0, gG.i)()).map((GG => (0, sG.x)(GG)))),
        kG = wG.similarGames.filter((GG => yG.has((0, sG.x)(GG))));
      return (0, lG.jsx)("div", {
        className: "GamePageContent",
        children: (0, lG.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, lG.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, lG.jsx)("h2", {
              children: LG.whatIs
            }), wG.whatIs.map((GG => (0, lG.jsx)("p", {
              children: GG
            }, GG)))]
          }), (0, lG.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, lG.jsx)("h2", {
              children: LG.howToPlay
            }), wG.howToPlay.map((GG => (0, lG.jsx)("p", {
              children: GG
            }, GG)))]
          }), (0, lG.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, lG.jsx)("h2", {
              children: LG.features
            }), (0, lG.jsx)("ul", {
              children: wG.features.map((GG => (0, lG.jsx)("li", {
                children: GG
              }, GG)))
            })]
          }), (0, lG.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, lG.jsx)("h2", {
              children: LG.tips
            }), (0, lG.jsx)("ul", {
              children: wG.tips.map((GG => (0, lG.jsx)("li", {
                children: GG
              }, GG)))
            })]
          }), (0, lG.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, lG.jsx)("h2", {
              children: LG.faq
            }), wG.faq.map((GG => {
              let {
                question: bG,
                answer: ZG
              } = GG;
              return (0, lG.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, lG.jsx)("h3", {
                  children: bG
                }), (0, lG.jsx)("p", {
                  children: ZG
                })]
              }, bG)
            }))]
          }), kG.length > 0 && (0, lG.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, lG.jsx)("h2", {
              children: LG.similarGames
            }), (0, lG.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: kG.map((GG => (0, lG.jsx)("li", {
                children: (0, lG.jsx)(eG.g, {
                  source: {
                    type: "game",
                    gameNameWithVariation: GG
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, GG)))
            })]
          })]
        })
      })
    }
    var TG = ZG(1016),
      HG = ZG(80),
      tG = ZG(1096),
      DG = ZG(34528),
      NG = ZG(1592),
      OG = ZG(1457),
      xG = ZG(1444),
      BG = ZG(1548),
      Gb = ZG(1398),
      bb = ZG(1311),
      Zb = ZG(36668),
      wb = ZG(1192),
      Sb = ZG(982),
      Lb = ZG(352),
      yb = ZG(988),
      kb = ZG(1481),
      Ub = ZG(8975),
      Yb = ZG(17),
      Vb = ZG(2489),
      pb = ZG(751),
      fb = ZG(1177),
      Qb = ZG(6507),
      Kb = ZG(3465);

    function hb(GG) {
      let {
        preview: bG,
        isBroken: ZG
      } = GG;
      const wG = null === bG ? null : (0, LG.c)(bG, "small"),
        yG = (0, SG.f)(null !== wG && void 0 !== wG ? wG : LG.m);
      return null === bG ? (0, lG.jsx)("div", {
        className: KG()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: ZG
        }),
        children: (0, lG.jsx)(TG.c, {
          name: ZG ? "triangle-exclamation" : "star"
        })
      }) : (0, lG.jsx)("div", {
        className: KG()("FeaturedGamesPopupSlotThumbnail", kG.h),
        style: (0, kG.e)(yG),
        role: "img",
        "aria-label": bG.name,
        children: (0, lG.jsx)(kG.c, {
          image: yG
        })
      })
    }

    function db(GG) {
      let {
        schematicId: bG,
        gameName: ZG
      } = GG;
      const {
        userContext: SG
      } = (0, oG.e)(), LG = (0, Kb.c)(), [yG, kG] = (0, dG.useState)(null), [UG, YG] = (0, dG.useState)(null), [VG, pG] = (0, dG.useState)(!1), QG = (0, dG.useCallback)((() => {
        YG(null), IG.d.getFeaturedGames(SG).then((GG => {
          LG.current && kG(GG.slots)
        })).catch((GG => {
          console.error("Failed to get featured games", GG), LG.current && YG("Failed to load featured games")
        }))
      }), [SG, LG]);
      (0, dG.useEffect)((() => {
        QG()
      }), [QG]);
      const KG = (GG, bG) => {
        VG || (pG(!0), IG.d.setFeaturedGame(SG, GG, bG).then((() => {
          LG.current && QG()
        })).catch((GG => {
          console.error("Failed to set featured game", GG), LG.current && YG("Failed to update the featured slot")
        })).finally((() => {
          LG.current && pG(!1)
        })))
      };
      return (0, lG.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, lG.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !yG && !UG && (0, lG.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, lG.jsx)(vG.b, {})
        }), UG && (0, lG.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: UG
        }), yG && (0, lG.jsxs)(lG.Fragment, {
          children: [(0, lG.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: yG.map((GG => {
              const ZG = GG.schematicId === bG,
                SG = null === GG.schematicId,
                {
                  categoryGroup: LG
                } = wG.W[GG.slotId];
              return (0, lG.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, lG.jsx)(hb, {
                  preview: GG.preview,
                  isBroken: !SG
                }), (0, lG.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, lG.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, wG.Db)(LG), " \xb7 position", " ", (0, wG._)(GG.slotId, wG.fc) + 1, " of", " ", (0, wG.ec)(LG, wG.fc)]
                  }), SG && (0, lG.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !SG && null !== GG.preview && (0, lG.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: GG.preview.name
                  }), !SG && null === GG.preview && (0, lG.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, lG.jsx)(TG.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, lG.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [SG && (0, lG.jsxs)(fG.n, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      KG(GG.slotId, bG)
                    },
                    disabled: VG,
                    children: [(0, lG.jsx)(TG.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !SG && !ZG && (0, lG.jsxs)(fG.K, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      KG(GG.slotId, bG)
                    },
                    disabled: VG,
                    children: [(0, lG.jsx)(TG.c, {
                      name: "star"
                    }), " Replace"]
                  }), !SG && (0, lG.jsxs)(fG.C, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      KG(GG.slotId, null)
                    },
                    disabled: VG,
                    children: [(0, lG.jsx)(TG.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, GG.slotId)
            }))
          }), (0, lG.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var Jb = ZG(4691),
      rb = ZG(4613),
      zb = ZG(3423);
    const Eb = 8,
      ob = 12;

    function Xb(GG) {
      let {
        customLobbies: bG,
        favouriteLobbies: ZG,
        toggleLikeLobby: wG,
        showReport: SG
      } = GG;
      const [LG, yG] = (0, dG.useState)(Eb);
      return (0, dG.useEffect)((() => {
        if (LG >= bG.length) return;
        let GG = !0;
        return (0, zb.e)().then((() => {
          GG && yG(LG + ob)
        })), () => {
          GG = !1
        }
      }), [LG, bG.length]), (0, lG.jsx)(lG.Fragment, {
        children: bG.slice(0, LG).map((GG => (0, lG.jsx)(rb.e, {
          customLobby: GG,
          favouriteLobbies: ZG,
          toggleLikeLobby: wG,
          showReport: SG
        }, GG.name)))
      })
    }
    var ub = ZG(4621),
      ib = ZG(4643),
      Cb = ZG(4589),
      Wb = ZG(3550),
      mb = ZG(8967),
      Ib = ZG(209);
    const Fb = {
      skyblock: [ZG(36693).c]
    };
    var vb = ZG(604);
    const ab = {
      listedVariations: null,
      backgroundImage: LG.m,
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

    function cb(GG, bG) {
      const ZG = pb.h[GG.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, LG.c)(GG, "large"),
        badges: [],
        category: GG.gameCategory,
        title: void 0 !== (null === ZG || void 0 === ZG ? void 0 : ZG.title) ? bG(ZG.title) : GG.name,
        variationTitle: null,
        description: void 0 !== (null === ZG || void 0 === ZG ? void 0 : ZG.description) ? bG(ZG.description) : GG.description,
        ownerSocialPreviewWithoutLocation: "owner" in GG ? GG.owner : null,
        ccu: GG.ccu,
        favourites: GG.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in GG ? GG.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function lb(GG) {
      var bG, ZG, wG;
      return null !== (bG = null !== (ZG = (0, Ib.m)() ? function(GG) {
        for (const [bG, ZG] of Object.entries(Fb)) {
          const wG = [bG, ...ZG.map((GG => (0, Lb.Wb)(bG, GG)))];
          if (wG.includes(GG)) return wG
        }
        return null
      }(GG) : null) && void 0 !== ZG ? ZG : null === (wG = pb.d[GG]) || void 0 === wG ? void 0 : wG.listedVariations) && void 0 !== bG ? bG : null
    }

    function jb() {
      const {
        gameNameWithVariation: GG
      } = (0, OG.v)();
      if ((0, dG.useEffect)(Wb.q, []), GG && (0, wb.x)(GG)) return (0, lG.jsx)(Pb, {
        urlId: GG
      }, GG);
      const bG = GG && (0, Sb.h)(GG) ? GG : "firstParty";
      return (0, lG.jsx)(Mb, {}, bG)
    }

    function Pb(GG) {
      let {
        urlId: bG
      } = GG;
      const {
        userContext: ZG,
        isUserContextUpdating: wG
      } = (0, oG.e)(), SG = (0, dG.useMemo)((() => (0, NG.i)(bG)), [bG]);
      (0, dG.useMemo)((() => {
        if (null === SG) return;
        const GG = tG.userContextManager.peekCurrentUserContext();
        (null !== GG ? IG.d.getGame(GG, SG.schematicId) : tG.userContextManager.getCurrentUserContext().then((GG => IG.d.getGame(GG, SG.schematicId)))).catch((GG => {
          console.error(`Failed to get the custom game ${SG.schematicId}`, GG), (0, NG.f)(bG)
        }))
      }), [SG, bG]);
      const [LG, yG] = (0, dG.useState)(null), kG = (0, DG.b)();
      (0, dG.useEffect)((() => {
        if (null !== SG || wG) return;
        let GG = !0;
        return IG.d.getGameByUrlId(ZG, bG).then((ZG => {
          GG && yG({
            urlId: bG,
            game: ZG
          })
        })).catch((ZG => {
          console.error(`Failed to find the custom game with urlId ${bG}`, ZG), GG && (0, xG.navigateToHomePage)()
        })), () => {
          GG = !1
        }
      }), [bG, SG, wG, ZG]);
      const UG = null !== SG && void 0 !== SG ? SG : (null === LG || void 0 === LG ? void 0 : LG.urlId) === bG ? LG.game : null;
      return null === UG ? (0, lG.jsx)(vG.b, {}) : kG ? (0, lG.jsx)(Mb, {
        gameNameWithVariation: (0, Sb.n)(UG.schematicId),
        knownCustomGame: UG
      }, UG.schematicId) : null
    }

    function Mb(GG) {
      var bG, ZG, yG, QG, mG, FG, vG, cG;
      let {
        gameNameWithVariation: jG,
        knownCustomGame: PG = null
      } = GG;
      const {
        t: AG
      } = (0, UG.w)();
      (0, Vb.f)();
      const qG = (0, Vb.i)(),
        {
          userContext: nG,
          isUserContextUpdating: gG
        } = (0, oG.e)(),
        eG = (0, Cb.f)(),
        tG = (0, xG.useNavigatePreserveSearch)(),
        DG = (0, OG.v)(),
        NG = (0, dG.useMemo)((() => jG ? {
          gameNameWithVariation: jG
        } : DG), [jG, DG]),
        Gb = (0, Ub.b)(NG),
        wb = (0, dG.useMemo)((() => {
          const GG = function(GG) {
            var bG, ZG;
            const wG = lb(GG);
            if (!wG || 0 === wG.length || wG.includes(GG)) return GG;
            const SG = YG.h.getItem((0, rG.n)(GG));
            if (SG && wG.includes(SG)) return SG;
            return null !== (bG = null === (ZG = pb.d[GG]) || void 0 === ZG ? void 0 : ZG.defaultListedVariation) && void 0 !== bG ? bG : wG[0]
          }(Gb.gameNameWithVariation);
          return GG === Gb.gameNameWithVariation ? Gb : {
            ...Gb,
            gameNameWithVariation: GG
          }
        }), [Gb]);
      (0, dG.useEffect)((() => {
        const GG = Gb.gameNameWithVariation;
        wb.gameNameWithVariation !== GG && GG !== (0, Lb.Yb)(GG) && tG((0, sG.B)(wb.gameNameWithVariation), {
          replace: !0
        })
      }), [wb.gameNameWithVariation, Gb.gameNameWithVariation, tG]);
      const [Kb, hb] = (0, dG.useState)(""), zb = dG.useRef(null), [Eb, ob] = (0, dG.useState)(), Wb = (0, Sb.h)(wb.gameNameWithVariation), Ib = (0, dG.useMemo)((() => Wb ? null : function(GG, bG, ZG) {
        var wG, SG;
        const yG = pb.d[GG];
        return (0, vb.L)(yG) ? null : {
          listedVariations: lb(GG),
          backgroundImage: (0, LG.g)(GG, (0, LG.b)(yG)),
          badges: (0, VG.filterBadges)(yG.badges),
          category: yG.type,
          title: ZG(yG.title),
          variationTitle: yG.variationTitle ? ZG(yG.variationTitle) : null,
          description: ZG(yG.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== bG ? null !== (wG = bG[GG]) && void 0 !== wG ? wG : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: yG.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: yG.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (SG = yG.canCreateCustomLobbies) || void 0 === SG || SG,
          countdownInformation: (0, rG.j)(GG)
        }
      }(wb.gameNameWithVariation, qG, AG)), [Wb, wb.gameNameWithVariation, qG, AG]), [Fb, jb] = (0, dG.useState)(!1), [Pb, Mb] = (0, dG.useState)((() => PG ? cb(PG, AG) : ab)), sb = null !== Ib && void 0 !== Ib ? Ib : Pb, [qb] = (0, dG.useState)(sb === ab), nb = (0, SG.f)(sb.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: gb,
        recentlyPlayedCustomLobbies: eb
      } = (0, dG.useMemo)((() => function(GG, bG, ZG, wG) {
        var SG;
        const LG = GG => {
            const ZG = (0, Sb.j)(GG),
              wG = bG.find((bG => "custom" === bG.type ? bG.schematicId === ZG : bG.gameNameWithVariation === GG));
            return wG ? [...wG.recentLobbies] : []
          },
          yG = (0, VG.getRecentGameNameWithVariationLobbiesKey)(GG),
          kG = null !== (SG = YG.h.getItem(yG)) && void 0 !== SG ? SG : [],
          UG = [...LG(GG), ...kG],
          pG = [];
        for (const YG of UG)(0, fb.K)(YG) && !pG.includes(YG) && pG.push(YG);
        let fG = UG;
        if (ZG) {
          const GG = LG("classic_worlds"),
            bG = UG.filter((bG => !GG.includes(bG)));
          fG = [...GG, ...bG]
        }
        const QG = [],
          KG = !1 === wG ? [] : fG;
        for (const YG of KG)(0, fb.K)(YG) || QG.includes(YG) || QG.push(YG);
        return {
          recentlyPlayedPublicLobbies: pG,
          recentlyPlayedCustomLobbies: QG
        }
      }(wb.gameNameWithVariation, eG, sb.showWorldsInsteadOfCustomLobbies, sb.canCreateCustomLobbies)), [wb.gameNameWithVariation, eG, sb.showWorldsInsteadOfCustomLobbies, sb.canCreateCustomLobbies]), [Rb, Tb] = (0, dG.useState)(!0), [Hb, tb] = (0, dG.useState)([]), [Db, Nb] = (0, dG.useState)(null), [Ob, xb] = (0, dG.useState)("explore"), Bb = (0, dG.useRef)(!1), GZ = (0, dG.useCallback)((GG => {
        (0, JG.unstable_batchedUpdates)((() => {
          ob(GG), Mb((bG => ({
            ...cb(GG, AG),
            isFavourite: bG.isFavourite
          })))
        }))
      }), [AG]);
      (0, dG.useEffect)((() => {
        null === Yb.e.get("gameEntrySource") && (0, Yb.n)("gameInformationPageDirect")
      }), []);
      const bZ = (0, dG.useRef)(null);
      (0, dG.useEffect)((() => {
        const GG = GG => {
            bZ.current = GG.target instanceof Element ? GG.target.closest("a, button") : null
          },
          bG = GG => {
            "Tab" === GG.key && (bZ.current = null)
          };
        return document.addEventListener("pointerdown", GG, !0), document.addEventListener("keydown", bG, !0), () => {
          document.removeEventListener("pointerdown", GG, !0), document.removeEventListener("keydown", bG, !0)
        }
      }), []), (0, XG.c)("Enter", (GG => {
        const bG = GG.target instanceof Element ? GG.target : null;
        if (GG.defaultPrevented || null !== bG && void 0 !== bG && bG.closest("input, textarea, select")) return;
        const ZG = null === bG || void 0 === bG ? void 0 : bG.closest("a, button");
        ZG && ZG !== bZ.current || (GG.preventDefault(), VZ())
      })), (0, uG.e)(xG.navigateToHomePage);
      const ZZ = gb.length > 0 || eb.length > 0,
        wZ = !sb.useRejoinLastLobbyButton || 0 === gb.length,
        SZ = Wb && null === sb.ownerSocialPreviewWithoutLocation,
        LZ = nG.getPlayerName() === (null === Eb || void 0 === Eb || null === (bG = Eb.owner) || void 0 === bG ? void 0 : bG.name),
        yZ = null !== (ZG = null === (yG = sb.badges.find((GG => "event" === GG.type))) || void 0 === yG ? void 0 : yG.event) && void 0 !== ZG ? ZG : null,
        kZ = wZ ? fG.k : fG.d,
        UZ = (0, lG.jsx)(pG.h, {
          tooltipInner: (0, lG.jsx)("div", {
            children: AG("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, lG.jsx)(kZ, {
            className: "GameInformationButton",
            padDefaultFocus: wZ,
            showPress: !0,
            onClick: () => {
              VZ()
            },
            children: (0, lG.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [wZ && (0, lG.jsxs)(lG.Fragment, {
                children: [(0, lG.jsx)(TG.c, {
                  name: "play"
                }), " "]
              }), AG("homePage:quickPlay")]
            })
          })
        });
      (0, dG.useEffect)((() => {
        if (!Wb || gG) return;
        let GG = !0;
        const bG = (0, Sb.j)(wb.gameNameWithVariation);
        return IG.d.getGame(nG, bG).then((bG => {
          GG && GZ(bG)
        })).catch((bG => {
          console.error("Failed to get Custom Game information", bG), GG && (0, xG.navigateToHomePage)()
        })), IG.d.getFavouriteGames(nG).then((ZG => {
          GG && Mb((GG => ({
            ...GG,
            isFavourite: ZG.includes(bG)
          })))
        })).catch((bG => {
          console.error("Failed to get favourite games", bG), GG && jb(!0)
        })), () => {
          GG = !1
        }
      }), [Wb, gG, wb.gameNameWithVariation, GZ, nG]);
      const YZ = !Wb && null === Ib;

      function VZ(GG) {
        (0, mb.g)(), tG((0, zG.d)(wb.gameNameWithVariation, GG))
      }(0, dG.useEffect)((() => {
        YZ && (0, xG.navigateToHomePage)()
      }), [YZ]), (0, dG.useEffect)((() => {
        if (!1 === sb.canCreateCustomLobbies) return;
        let GG = !0;
        return null !== sb.showWorldsInsteadOfCustomLobbies && !1 === gG && (Tb(!0), IG.d.getFavouriteLobbies(nG).then((GG => {
          Nb(GG)
        })), IG.d.getOpenCustomLobbies(nG, {
          gameNameWithVariation: sb.showWorldsInsteadOfCustomLobbies ? "classic" : wb.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === Ob,
          onlyFavouriteLobbies: "favourite" === Ob
        }).then((bG => {
          GG && (0, JG.unstable_batchedUpdates)((() => {
            tb(bG), Tb(!1)
          }))
        })).catch((bG => {
          console.error("Failed to get open custom lobbies", bG), GG && Tb(!1)
        }))), () => {
          GG = !1
        }
      }), [gG, wb, Ob, sb.showWorldsInsteadOfCustomLobbies, sb.canCreateCustomLobbies, nG]);
      const pZ = (0, dG.useCallback)((async GG => {
          try {
            if (!Db) return;
            Db.includes(GG) ? (IG.d.unfavouriteLobby(nG, GG), Nb(Db.filter((bG => bG !== GG)))) : (IG.d.favouriteLobby(nG, GG).catch((GG => {
              console.error("Failed to favourite lobby", GG)
            })), Nb([...Db, GG]))
          } catch (bG) {
            console.error("Failed to like lobby", bG)
          }
        }), [nG, Db]),
        fZ = (null === Eb || void 0 === Eb ? void 0 : Eb.schematicId) === (0, Sb.j)(Gb.gameNameWithVariation) ? Eb : null,
        QZ = fZ && (0, sG.L)(Gb.gameNameWithVariation, (GG => AG(GG)), fZ);
      (0, BG.d)(fZ && (0, sG.B)(Gb.gameNameWithVariation, fZ));
      const KZ = HG.featureFlags.canUseCustomLobbies && !0 === sb.canCreateCustomLobbies,
        hZ = (0, lG.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, lG.jsx)(RG, {
            gameNameWithVariation: wb.gameNameWithVariation
          })
        });
      return (0, lG.jsx)(lG.Fragment, {
        children: (0, lG.jsxs)("article", {
          className: KG()("GameInformation", {
            GameInformationFadeIn: qb,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (QG = sb.countdownInformation) || void 0 === QG ? void 0 : QG.type)
          }),
          children: [QZ && (0, lG.jsx)(EG.c, {
            meta: QZ
          }), (0, lG.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, lG.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, lG.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, lG.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, lG.jsx)("div", {
                  className: KG()("GameInformationTopBackgroundImage", kG.h),
                  style: (0, kG.e)(nb),
                  children: (0, lG.jsx)(kG.c, {
                    image: nb
                  })
                })]
              }), (0, lG.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, lG.jsx)(Jb.d, {}), (0, lG.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, lG.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, lG.jsxs)("div", {
                      className: KG()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: SZ
                      }),
                      children: [sb.badges.map((GG => (0, lG.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${GG.type}`,
                        children: (0, lG.jsx)(WG.c, {
                          badge: GG
                        })
                      }, GG.type))), Wb && (0, lG.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, lG.jsx)(CG.c, {
                          text: (0, wG.vb)({
                            type: "playerCrafted"
                          })
                        })
                      }), sb.category && (0, lG.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, lG.jsx)(CG.c, {
                          text: [{
                            str: (0, wG.yb)(sb.category).toUpperCase()
                          }]
                        })
                      }), null !== sb.ccu && (0, lG.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, lG.jsx)(TG.c, {
                          name: "user"
                        }), (0, fb.O)(sb.ccu), " online"]
                      }), null !== sb.ownerSocialPreviewWithoutLocation && (0, lG.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, lG.jsx)("span", {
                          children: "Made by"
                        }), (0, lG.jsx)(aG.h, {
                          playerSocialPreview: {
                            ...sb.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), SZ && (0, lG.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, lG.jsx)("span", {
                          children: "Made by"
                        }), (0, lG.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== sb.favourites && (null !== sb.isFavourite || Wb && !Fb) && (0, lG.jsx)(fG.o, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== Bb.current && (Bb.current = !0, null !== sb.isFavourite)) {
                              const GG = (0, Sb.j)(wb.gameNameWithVariation);
                              let bG;
                              sb.isFavourite ? (bG = -1, IG.d.unfavouriteGame(nG, GG).catch((GG => {
                                console.error("Failed to get unfavourite game", GG)
                              })).finally((() => {
                                Bb.current = !1
                              }))) : (bG = 1, IG.d.favouriteGame(nG, GG).catch((GG => {
                                console.error("Failed to get favourite game", GG)
                              })).finally((() => {
                                Bb.current = !1
                              }))), Mb((GG => ({
                                ...GG,
                                isFavourite: !GG.isFavourite
                              }))), Mb((GG => ({
                                ...GG,
                                favourites: GG.favourites + bG
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (mG = sb.isFavourite) && void 0 !== mG && mG,
                        disabled: null === sb.isFavourite,
                        className: KG()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === sb.isFavourite
                        })
                      }, null === sb.isFavourite ? "pending" : "known"), Wb && !SZ && HG.featureFlags.useSocialFeatures && !LZ && (0, lG.jsx)(ub.b, {
                        targetType: "customGame",
                        targetId: (0, Sb.j)(wb.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (nG.playerHasRank("developer") || nG.playerHasRank("admin") && LZ) && (0, lG.jsxs)(fG.k, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          tG((0, kb.p)((0, yb.d)(wb.gameNameWithVariation, !0)))
                        },
                        children: [(0, lG.jsx)(TG.c, {
                          name: "star-christmas"
                        }), " ", AG("studio:viewInStudio")]
                      }), Wb && nG.playerHasRank("developer") && (0, lG.jsxs)(fG.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, Qb.c)({
                            schematicId: (0, Sb.j)(wb.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, lG.jsx)(TG.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), Wb && nG.playerHasRank("developer") && (0, lG.jsxs)(fG.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          bb.NotificationProvider.showCustomPopup({
                            body: () => (0, lG.jsx)(db, {
                              schematicId: (0, Sb.j)(wb.gameNameWithVariation),
                              gameName: sb.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, lG.jsx)(TG.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (FG = sb.countdownInformation) || void 0 === FG ? void 0 : FG.type) && (0, lG.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, lG.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, lG.jsx)(iG.d, {
                            toTime: sb.countdownInformation.countdownToTime
                          })]
                        }), (0, lG.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: sb.countdownInformation.previewText
                        })]
                      })]
                    }, SZ ? "pending" : "shown"), (0, lG.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, lG.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, lG.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [sb.title, " ", sb.variationTitle && (null === (vG = pb.d[wb.gameNameWithVariation]) || void 0 === vG ? void 0 : vG.variationThumbnailUseBigRatio) && (0, lG.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: sb.variationTitle
                          })]
                        })
                      }), sb.listedVariations && sb.listedVariations.length > 0 && (0, lG.jsx)("div", {
                        className: KG()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (cG = pb.d[wb.gameNameWithVariation]) || void 0 === cG ? void 0 : cG.variationThumbnailUseBigRatio
                        }),
                        children: sb.listedVariations.map((GG => {
                          var bG, ZG;
                          return (0, lG.jsxs)(Ab, {
                            variation: GG,
                            isSelected: wb.gameNameWithVariation === GG,
                            children: [null !== qG && (0, lG.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, lG.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, lG.jsx)(TG.c, {
                                  name: "user"
                                }), " ", (0, fb.O)(null !== (bG = qG[GG]) && void 0 !== bG ? bG : 0)]
                              })
                            }), (0, lG.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: AG(null !== (ZG = pb.d[GG].variationTitle) && void 0 !== ZG ? ZG : pb.d[GG].title)
                            }), (0, lG.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, VG.filterBadges)(pb.d[GG].badges).map((GG => (0, lG.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + GG.type,
                                children: (0, lG.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, lG.jsx)(WG.c, {
                                    badge: GG
                                  })
                                })
                              }, GG.type)))
                            })]
                          }, GG)
                        }))
                      })]
                    }), sb.description && (0, lG.jsx)("p", {
                      className: "GameInformationDescription",
                      children: sb.description
                    })]
                  }), (0, lG.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, lG.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!wZ && (0, lG.jsx)(pG.h, {
                        tooltipInner: (0, lG.jsx)("div", {
                          children: AG("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, lG.jsx)(fG.k, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            VZ(gb[0])
                          },
                          children: (0, lG.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, lG.jsx)(TG.c, {
                              name: "play"
                            }), " ", AG("homePage:rejoinLobbyNumber", {
                              number: gb[0]
                            })]
                          })
                        })
                      }), wZ && UZ]
                    }), (0, lG.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!wZ && UZ, (0, lG.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, lG.jsx)(TG.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, lG.jsx)(hG.b, {
                          className: "JoinLobbyInput",
                          placeholderText: AG("homePage:lobbyName"),
                          maxLength: fb.L,
                          domRef: zb,
                          onValueChange: GG => {
                            GG = (0, fb.wb)(GG), hb(GG)
                          },
                          onEnter: () => {
                            0 === Kb.length ? VZ(gb[0]) : VZ(Kb)
                          }
                        }), (0, lG.jsx)(fG.d, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === Kb.length ? VZ(gb[0]) : VZ(Kb)
                          },
                          children: AG("general:join")
                        })]
                      })]
                    }), (0, lG.jsxs)("section", {
                      className: KG()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !ZZ
                      }),
                      children: [(0, lG.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, lG.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, lG.jsx)(TG.c, {
                            name: "clock-rotate-left"
                          }), ZZ && (0, lG.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: AG("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, lG.jsx)(ib.e, {
                        lobbyGroups: [gb, eb],
                        onLobbyClick: GG => {
                          VZ(GG)
                        },
                        keyPrefix: wb.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== yZ && (0, lG.jsx)(MG, {
                eventName: yZ
              })]
            }), KZ && (0, lG.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, lG.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, lG.jsxs)("div", {
                  className: KG()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === sb.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === sb.showWorldsInsteadOfCustomLobbies && (0, lG.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, lG.jsx)(TG.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, lG.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, lG.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), AG("game:worlds")]
                    })]
                  }), !1 === sb.showWorldsInsteadOfCustomLobbies && (0, lG.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, lG.jsx)(TG.c, {
                      name: "joystick"
                    }), (0, lG.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, lG.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), AG("homePage:customLobbies")]
                    })]
                  }), (0, lG.jsx)(fG.K, {
                    onClick: () => {
                      xb("explore")
                    },
                    active: "explore" === Ob,
                    children: AG("general:explore")
                  }), (0, lG.jsx)(fG.K, {
                    onClick: () => {
                      xb("favourite")
                    },
                    active: "favourite" === Ob,
                    children: AG("homePage:favouriteLobbies")
                  }), (0, lG.jsx)(fG.K, {
                    onClick: () => {
                      xb("owned")
                    },
                    active: "owned" === Ob,
                    children: AG("homePage:ownedLobbies")
                  })]
                }), (0, lG.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, lG.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, lG.jsx)(rb.d, {
                      label: "Create",
                      onClick: () => {
                        bb.NotificationProvider.showCustomPopup({
                          body: GG => (0, lG.jsx)(Zb.CreateCustomLobby, {
                            gameNameWithVariation: wb.gameNameWithVariation,
                            close: GG
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === Rb && (0, lG.jsx)(rb.i, {}), !1 === Rb && (0, lG.jsx)(Xb, {
                      customLobbies: Hb,
                      favouriteLobbies: Db,
                      toggleLikeLobby: pZ,
                      showReport: HG.featureFlags.useSocialFeatures && "owned" !== Ob
                    })]
                  }), hZ]
                })]
              })
            })]
          }), !KZ && hZ]
        })
      })
    }

    function Ab(GG) {
      let {
        variation: bG,
        isSelected: ZG,
        children: wG
      } = GG;
      const UG = pb.d[bG],
        VG = (0, LG.g)(bG, (0, LG.i)(UG)),
        pG = (0, SG.f)(VG),
        fG = (0, yG.g)([(0, LG.e)(bG, (0, LG.b)(UG))]);
      return (0, lG.jsxs)(xG.LinkPreserveSearch, {
        to: (0, sG.B)(bG),
        replace: !0,
        className: KG()("GameInformationVariation", kG.h, {
          SelectedGameInformationVariation: ZG
        }),
        onClick: GG => {
          if (!(0, Gb.d)(GG)) return;
          const ZG = (0, rG.n)(bG);
          YG.h.setItem(ZG, bG)
        },
        onMouseEnter: fG.start,
        onMouseLeave: fG.cancel,
        onFocus: fG.start,
        onBlur: fG.cancel,
        style: (0, kG.e)(pG),
        children: [(0, lG.jsx)(kG.c, {
          image: pG
        }), wG]
      })
    }
  },
  6507: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => rG
    });
    var wG = ZG(51),
      SG = ZG(1393),
      LG = ZG(1431),
      yG = ZG(3465),
      kG = ZG(1092),
      UG = ZG(1302),
      YG = ZG(1320),
      VG = ZG(1016),
      pG = ZG(1006),
      fG = ZG.n(pG),
      QG = ZG(6505),
      KG = ZG(1067);

    function hG(GG) {
      let {
        info: bG,
        className: ZG
      } = GG;
      const {
        statusText: wG,
        rowText: SG
      } = (0, QG.f)();
      return (0, KG.jsxs)("div", {
        className: fG()("GameApprovalInfoDetails", ZG),
        children: [(0, KG.jsxs)("div", {
          className: fG()("GameApprovalInfoSummary", bG.overallPassed ? "Passed" : "Failed"),
          children: [(0, KG.jsx)(VG.c, {
            name: bG.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, KG.jsx)("span", {
            children: wG(bG.status)
          })]
        }), bG.rows.length > 0 && (0, KG.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: bG.rows.map((GG => {
            const {
              label: bG,
              value: ZG
            } = SG(GG);
            return (0, KG.jsxs)("div", {
              className: fG()("GameApprovalInfoRow", GG.passed ? "Passed" : "Failed"),
              children: [(0, KG.jsx)(VG.c, {
                name: GG.passed ? "check" : "xmark"
              }), (0, KG.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, KG.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: bG
                }), null !== ZG && (0, KG.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: ZG
                })]
              })]
            }, GG.kind)
          }))
        })]
      })
    }
    var dG = ZG(1151),
      JG = ZG(1311);

    function rG(GG) {
      JG.NotificationProvider.showCustomPopup({
        body: () => (0, KG.jsx)(zG, {
          ...GG
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function zG(GG) {
      let {
        schematicId: bG,
        canOverride: ZG,
        onApprovalChanged: pG
      } = GG;
      const {
        t: fG
      } = (0, dG.w)(), {
        userContext: QG
      } = (0, kG.e)(), JG = (0, yG.c)(), [rG, zG] = (0, wG.useState)(null), [EG, oG] = (0, wG.useState)(null), [XG, uG] = (0, wG.useState)(!1), iG = (0, wG.useCallback)((() => {
        oG(null), LG.d.getGameApprovalInfo(QG, bG).then((GG => {
          JG.current && zG(GG)
        })).catch((GG => {
          console.error("Failed to get game approval info", GG), JG.current && oG(fG("studio:approvalLoadFailed"))
        }))
      }), [QG, bG, JG, fG]);
      (0, wG.useEffect)((() => {
        iG()
      }), [iG]);
      const CG = GG => {
        XG || (uG(!0), LG.d.setGameApproval(QG, bG, GG).then((() => {
          null === pG || void 0 === pG || pG(), JG.current && iG()
        })).catch((GG => {
          console.error("Failed to set game approval", GG)
        })).finally((() => {
          JG.current && uG(!1)
        })))
      };
      return (0, KG.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, KG.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: fG("studio:approvalTitle")
        }), !rG && !EG && (0, KG.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, KG.jsx)(UG.b, {})
        }), EG && (0, KG.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: EG
        }), rG && (0, KG.jsxs)(KG.Fragment, {
          children: [(0, KG.jsx)(hG, {
            info: rG
          }), ZG && (0, KG.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== rG.manualOverride && (0, KG.jsx)(YG.h, {
              tooltipInner: (0, KG.jsx)("div", {
                children: fG("studio:approvalApproveTooltip")
              }),
              children: (0, KG.jsxs)(SG.k, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  CG(!0)
                },
                disabled: XG,
                children: [(0, KG.jsx)(VG.c, {
                  name: "check"
                }), " ", fG("studio:approvalApprove")]
              })
            }), !1 !== rG.manualOverride && (0, KG.jsx)(YG.h, {
              tooltipInner: (0, KG.jsx)("div", {
                children: fG("studio:approvalDenyTooltip")
              }),
              children: (0, KG.jsxs)(SG.C, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  CG(!1)
                },
                disabled: XG,
                children: [(0, KG.jsx)(VG.c, {
                  name: "xmark"
                }), " ", fG("studio:approvalDeny")]
              })
            }), null !== rG.manualOverride && (0, KG.jsx)(YG.h, {
              tooltipInner: (0, KG.jsx)("div", {
                children: fG("studio:approvalClearOverrideTooltip")
              }),
              children: (0, KG.jsxs)(SG.d, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  CG(null)
                },
                disabled: XG,
                children: [(0, KG.jsx)(VG.c, {
                  name: "arrows-rotate"
                }), " ", fG("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6505: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => kG,
      f: () => yG
    });
    var wG = ZG(352),
      SG = ZG(1151);
    const LG = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function yG() {
      const {
        t: GG,
        selectedLanguage: bG
      } = (0, SG.w)();
      return {
        statusText: bG => GG(LG[bG]),
        rowText: ZG => {
          const LG = (GG, ZG) => (0, wG.lb)((0, SG.j)(bG.code, GG), 0, ZG);
          switch (ZG.kind) {
            case "ownerAccountAge": {
              const bG = ZG.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: GG("studio:approvalAccountAgeLabel"),
                value: GG(bG, {
                  age: LG(bG, ZG.accountAgeMs),
                  days: ZG.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: GG("studio:approvalSinceUnbannedLabel"), value: GG("studio:approvalSinceUnbannedValue", {
                  time: LG("studio:approvalSinceUnbannedValue", ZG.sinceMs),
                  days: ZG.minDays
                })
              };
            case "reportHold": {
              const {
                detail: bG
              } = ZG;
              if (null === bG) return {
                label: GG("studio:approvalUnderInvestigation"),
                value: null
              };
              const wG = bG.weightedReporters.toFixed(1),
                SG = bG.threshold.toFixed(1),
                yG = GG("studio:approvalReportHoldLabel", {
                  hours: bG.windowHours
                });
              if (null === bG.heldUntil) return {
                label: yG,
                value: GG("studio:approvalReportHoldValue", {
                  weightedReporters: wG,
                  threshold: SG
                })
              };
              const kG = "studio:approvalReportHoldValueHeld";
              return {
                label: yG,
                value: GG(kG, {
                  weightedReporters: wG,
                  threshold: SG,
                  time: LG(kG, bG.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function kG(GG) {
      return null === GG.manualOverride && GG.rows.some((GG => "reportHold" === GG.kind && !GG.passed))
    }
  },
  34528: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(51),
      SG = ZG(3423);

    function LG() {
      const [GG, bG] = (0, wG.useState)(!1);
      return (0, wG.useLayoutEffect)((() => {
        let GG = !0;
        return (0, SG.e)().then((() => {
          GG && bG(!0)
        })), () => {
          GG = !1
        }
      }), []), GG
    }
  },
  8975: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG
    });
    var wG = ZG(1290),
      SG = ZG(1177),
      LG = ZG(604);

    function yG(GG) {
      return GG = function(GG, bG) {
        var ZG;
        const wG = new URLSearchParams(bG),
          SG = wG.get("lobby"),
          LG = wG.get("vm"),
          yG = null !== (ZG = SG) && void 0 !== ZG ? ZG : GG.lobbyName,
          kG = null !== LG && void 0 !== LG ? LG : GG.directJoinVmUrl;
        if (yG === GG.lobbyName && kG === GG.directJoinVmUrl) return GG;
        return {
          ...GG,
          lobbyName: yG,
          directJoinVmUrl: kG
        }
      }(GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), GG = function(GG) {
        if ((0, LG.L)(GG.directJoinVmUrl)) return GG;
        const bG = (0, SG.Z)(GG.directJoinVmUrl);
        null === bG && (GG.directJoinVmUrl = void 0);
        return GG
      }(GG = function(GG) {
        if ((0, LG.L)(GG.gameNameWithVariation)) return GG;
        return GG.gameNameWithVariation = (0, wG.k)(GG.gameNameWithVariation), GG
      }(GG))
    }
  },
  8967: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => SG
    });
    let wG = !1;

    function SG() {
      wG = !0
    }

    function LG() {
      return wG
    }
  },
  36693: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      e: () => wG
    });
    const wG = "skyblockSkills",
      SG = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);