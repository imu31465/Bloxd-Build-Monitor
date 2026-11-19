export const id = 115;
export const ids = [115, 389];
export const modules = {
  35745: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => KC
    });
    var ID = cD(312),
      pD = cD(3314),
      iD = cD(3346),
      fD = cD(3344),
      bD = cD(3342),
      QD = cD(1192),
      wD = cD(36),
      SD = cD(1701),
      BD = cD(1356),
      yD = cD(1442),
      MD = cD(1049),
      tD = cD.n(MD),
      ZD = cD(1655),
      oD = cD(53),
      vD = cD(62),
      ND = cD(2302),
      gD = cD(1319),
      XD = cD(1609),
      mD = cD(1120),
      nD = cD(3209),
      OD = cD(4346),
      PD = cD(3300),
      HD = cD(3306),
      UD = cD(1872),
      xD = cD(3309),
      qD = cD(1719),
      JD = cD(1497),
      KD = cD(2112),
      aD = cD(1328),
      VD = cD(2466),
      zD = cD(4799),
      jD = cD(1093);
    const lD = 15e3,
      LD = 2500;

    function TD(DD) {
      var CD;
      let {
        eventName: cD
      } = DD;
      const {
        t: ID
      } = (0, QD.F)(), pD = qD.d[cD], [iD, fD] = (0, oD.useState)((() => Date.now() >= pD.endsAt.getTime())), [bD, wD] = (0, oD.useState)("overall"), SD = function(DD, CD) {
        const {
          userContext: cD,
          isUserContextUpdating: ID
        } = (0, mD.c)(), pD = `${DD}:${CD}`, [iD, fD] = (0, oD.useState)({
          requestKey: pD,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, oD.useEffect)((() => {
          if (ID) return;
          let iD, bD = !1;
          const QD = async () => {
            if ("visible" === document.visibilityState) try {
              const ID = await JD.c.getGameEventLeaderboard(cD, {
                event: DD,
                scope: CD
              });
              bD || fD({
                requestKey: pD,
                leaderboard: {
                  status: "loaded",
                  leaderboard: ID
                }
              })
            } catch {
              bD || fD((DD => DD.requestKey === pD && "loaded" === DD.leaderboard.status ? DD : {
                requestKey: pD,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            bD || (iD = setTimeout(QD, lD))
          };
          return QD(), () => {
            bD = !0, clearTimeout(iD)
          }
        }), [DD, CD, pD, cD, ID]), iD.requestKey === pD ? iD.leaderboard : {
          status: "loading"
        }
      }(cD, bD), BD = function(DD) {
        const CD = (0, oD.useRef)(null),
          cD = (0, oD.useRef)(0),
          ID = (0, oD.useRef)(),
          [pD, iD] = (0, oD.useState)({});
        return (0, oD.useEffect)((() => {
          const pD = null === DD || void 0 === DD ? void 0 : DD.entries;
          if (!pD) return;
          const fD = new Map(pD.map((DD => [DD.player.name, DD.value]))),
            bD = CD.current;
          if (CD.current = fD, null === bD) return;
          const QD = {};
          for (const [DD, CD] of fD) {
            const ID = bD.get(DD);
            void 0 !== ID && CD > ID && (QD[DD] = {
              amount: CD - ID,
              key: cD.current++
            })
          }
          0 !== Object.keys(QD).length && (iD(QD), clearTimeout(ID.current), ID.current = setTimeout((() => {
            iD({})
          }), LD))
        }), [DD]), (0, oD.useEffect)((() => () => {
          clearTimeout(ID.current)
        }), []), pD
      }("loaded" === SD.status ? SD.leaderboard : null), yD = function(DD) {
        const [CD, cD] = (0, oD.useState)(null), ID = "loaded" === DD.status ? DD.leaderboard.goalProgress : void 0;
        return (0, oD.useEffect)((() => {
          ID && cD(ID)
        }), [ID]), CD
      }(SD), MD = KD.h[`profileEffect_${pD.prizePack}`];
      if (iD) return null;
      const ZD = "loaded" === SD.status ? SD.leaderboard : null,
        vD = null !== (CD = null === ZD || void 0 === ZD ? void 0 : ZD.entries) && void 0 !== CD ? CD : null,
        ND = null !== ZD && void 0 !== ZD && ZD.own && null !== vD && !vD.some((DD => DD.isOwn)) ? ZD.own : null;
      return (0, jD.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, jD.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, jD.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, jD.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, jD.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, jD.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), ID("gameEvents:live")]
              }), (0, jD.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [ID("gameEvents:endsIn"), (0, jD.jsx)(PD.d, {
                  toTime: pD.endsAt,
                  onReachEndOfCountdown: () => {
                    fD(!0)
                  }
                })]
              })]
            }), (0, jD.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: ID(pD.titleKey)
            }), (0, jD.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, jD.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [MD && (0, jD.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, jD.jsx)(MD, {})
                }), (0, jD.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, jD.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: ID("gameEvents:prize")
                  }), (0, jD.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: ID(pD.prizeNameKey)
                  })]
                })]
              }), (0, jD.jsx)(GD, {
                event: pD,
                progress: yD
              })]
            })]
          }), (0, jD.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, jD.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, jD.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: ID(pD.leaderboard.titleKey)
              }), (0, jD.jsx)(zD.b, {
                ariaLabel: ID("gameEvents:leaderboardScope"),
                options: qD.b.map((DD => ({
                  value: DD,
                  label: ID(`gameEvents:${DD}Scope`)
                }))),
                value: bD,
                onChange: wD
              })]
            }), "loading" === SD.status && (0, jD.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, jD.jsx)(aD.e, {})
            }), ("unavailable" === SD.status || "loaded" === SD.status && null === vD) && (0, jD.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: ID("gameEvents:leaderboardUnavailable")
            }), null !== vD && 0 === vD.length && (0, jD.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: ID("friends" === bD ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== vD && vD.length > 0 && (0, jD.jsx)("ol", {
              className: "GameEventPanelRows",
              children: vD.map((DD => {
                const CD = BD[DD.player.name];
                return (0, jD.jsxs)("li", {
                  className: tD()("GameEventPanelRow", {
                    GameEventPanelRowOwn: DD.isOwn,
                    GameEventPanelRowTop: DD.rank <= 3
                  }),
                  children: [(0, jD.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", DD.rank]
                  }), (0, jD.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, jD.jsx)(VD.h, {
                      playerSocialPreview: {
                        ...DD.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== CD && (0, jD.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", CD.amount.toLocaleString()]
                  }, CD.key), (0, jD.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: DD.value.toLocaleString()
                  })]
                }, DD.player.name)
              }))
            }), ND && (0, jD.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, jD.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", ND.rank.toLocaleString()]
              }), (0, jD.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: ID("gameEvents:yourPlace")
              }), (0, jD.jsx)("span", {
                className: "GameEventPanelScore",
                children: ND.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function GD(DD) {
      let {
        event: CD,
        progress: cD
      } = DD;
      const {
        t: ID
      } = (0, QD.F)(), pD = null !== cD && CD.prizeGoals.some(((DD, CD) => cD[CD] >= DD.target));
      return (0, jD.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, jD.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: ID(pD ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, jD.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: CD.prizeGoals.map(((DD, CD) => {
            const pD = null === cD ? null : Math.min(cD[CD], DD.target);
            return (0, jD.jsxs)(oD.Fragment, {
              children: [CD > 0 && (0, jD.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: ID("gameEvents:goalsOr")
              }), (0, jD.jsxs)("div", {
                className: tD()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: pD === DD.target
                }),
                children: [(0, jD.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: ID(DD.labelKey)
                }), (0, jD.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, jD.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== pD && void 0 !== pD ? pD : 0) / DD.target * 100 + "%"
                    }
                  }), null !== pD && (0, jD.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [pD.toLocaleString(), " / ", DD.target.toLocaleString()]
                  })]
                })]
              })]
            }, DD.board)
          }))
        })]
      })
    }
    var RD = cD(1540),
      kD = cD(1593),
      dD = cD(1042),
      YD = cD(735),
      WD = cD(3295);

    function sD(DD) {
      let {
        gameNameWithVariation: CD
      } = DD;
      const cD = (0, RD.D)(CD),
        [ID, pD] = (0, oD.useState)(null);
      if ((0, oD.useEffect)((() => {
          if (!cD) return;
          let DD = !0;
          return (0, kD.g)(cD).then((CD => {
            DD && pD(CD)
          })).catch((DD => {
            console.error(`Failed to load the page copy for ${cD.name}`, DD)
          })), () => {
            DD = !1
          }
        }), [cD]), !cD || !ID || ID.name !== cD.name) return null;
      const iD = (0, kD.f)(ID),
        fD = new Set((0, dD.e)((0, YD.j)()).map((DD => (0, RD.z)(DD)))),
        bD = ID.similarGames.filter((DD => fD.has((0, RD.z)(DD))));
      return (0, jD.jsx)("div", {
        className: "GamePageContent",
        children: (0, jD.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, jD.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, jD.jsx)("h2", {
              children: iD.whatIs
            }), ID.whatIs.map((DD => (0, jD.jsx)("p", {
              children: DD
            }, DD)))]
          }), (0, jD.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, jD.jsx)("h2", {
              children: iD.howToPlay
            }), ID.howToPlay.map((DD => (0, jD.jsx)("p", {
              children: DD
            }, DD)))]
          }), (0, jD.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, jD.jsx)("h2", {
              children: iD.features
            }), (0, jD.jsx)("ul", {
              children: ID.features.map((DD => (0, jD.jsx)("li", {
                children: DD
              }, DD)))
            })]
          }), (0, jD.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, jD.jsx)("h2", {
              children: iD.tips
            }), (0, jD.jsx)("ul", {
              children: ID.tips.map((DD => (0, jD.jsx)("li", {
                children: DD
              }, DD)))
            })]
          }), (0, jD.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, jD.jsx)("h2", {
              children: iD.faq
            }), ID.faq.map((DD => {
              let {
                question: CD,
                answer: cD
              } = DD;
              return (0, jD.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, jD.jsx)("h3", {
                  children: CD
                }), (0, jD.jsx)("p", {
                  children: cD
                })]
              }, CD)
            }))]
          }), bD.length > 0 && (0, jD.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, jD.jsx)("h2", {
              children: iD.similarGames
            }), (0, jD.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: bD.map((DD => (0, jD.jsx)("li", {
                children: (0, jD.jsx)(WD.f, {
                  source: {
                    type: "game",
                    gameNameWithVariation: DD
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, DD)))
            })]
          })]
        })
      })
    }
    var ED = cD(1064),
      eD = cD(90),
      uD = cD(1127),
      hD = cD(9084),
      rD = cD(1636),
      AD = cD(1517),
      FD = cD(1508),
      DC = cD(1607),
      CC = cD(1451),
      cC = cD(1340),
      IC = cD(35753),
      pC = cD(1232),
      iC = cD(1011),
      fC = cD(326),
      bC = cD(1025),
      QC = cD(1537),
      wC = cD(8609),
      SC = cD(16),
      BC = cD(2432),
      yC = cD(767),
      MC = cD(1221),
      tC = cD(6244);

    function ZC(DD) {
      let {
        preview: CD,
        isBroken: cD
      } = DD;
      const ID = null === CD ? null : (0, iD.f)(CD, "small"),
        fD = (0, pD.f)(null !== ID && void 0 !== ID ? ID : iD.q);
      return null === CD ? (0, jD.jsx)("div", {
        className: tD()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: cD
        }),
        children: (0, jD.jsx)(ED.c, {
          name: cD ? "triangle-exclamation" : "star"
        })
      }) : (0, jD.jsx)("div", {
        className: tD()("FeaturedGamesPopupSlotThumbnail", bD.h),
        style: (0, bD.d)(fD),
        role: "img",
        "aria-label": CD.name,
        children: (0, jD.jsx)(bD.b, {
          image: fD
        })
      })
    }

    function oC(DD) {
      let {
        schematicId: CD,
        gameName: cD
      } = DD;
      const {
        userContext: pD
      } = (0, mD.c)(), iD = (0, HD.d)(), [fD, bD] = (0, oD.useState)(null), [QD, wD] = (0, oD.useState)(null), [SD, BD] = (0, oD.useState)(!1), MD = (0, oD.useCallback)((() => {
        wD(null), JD.c.getFeaturedGames(pD).then((DD => {
          iD.current && bD(DD.slots)
        })).catch((DD => {
          console.error("Failed to get featured games", DD), iD.current && wD("Failed to load featured games")
        }))
      }), [pD, iD]);
      (0, oD.useEffect)((() => {
        MD()
      }), [MD]);
      const tD = (DD, CD) => {
        SD || (BD(!0), JD.c.setFeaturedGame(pD, DD, CD).then((() => {
          iD.current && MD()
        })).catch((DD => {
          console.error("Failed to set featured game", DD), iD.current && wD("Failed to update the featured slot")
        })).finally((() => {
          iD.current && BD(!1)
        })))
      };
      return (0, jD.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, jD.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !fD && !QD && (0, jD.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, jD.jsx)(aD.e, {})
        }), QD && (0, jD.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: QD
        }), fD && (0, jD.jsxs)(jD.Fragment, {
          children: [(0, jD.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: fD.map((DD => {
              const cD = DD.schematicId === CD,
                pD = null === DD.schematicId,
                {
                  categoryGroup: iD
                } = ID.K[DD.slotId];
              return (0, jD.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, jD.jsx)(ZC, {
                  preview: DD.preview,
                  isBroken: !pD
                }), (0, jD.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, jD.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, ID.hb)(iD), " \xb7 position", " ", (0, ID.N)(DD.slotId, ID.Lb) + 1, " of", " ", (0, ID.Kb)(iD, ID.Lb)]
                  }), pD && (0, jD.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !pD && null !== DD.preview && (0, jD.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: DD.preview.name
                  }), !pD && null === DD.preview && (0, jD.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, jD.jsx)(ED.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, jD.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [pD && (0, jD.jsxs)(yD.r, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      tD(DD.slotId, CD)
                    },
                    disabled: SD,
                    children: [(0, jD.jsx)(ED.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !pD && !cD && (0, jD.jsxs)(yD.P, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      tD(DD.slotId, CD)
                    },
                    disabled: SD,
                    children: [(0, jD.jsx)(ED.c, {
                      name: "star"
                    }), " Replace"]
                  }), !pD && (0, jD.jsxs)(yD.J, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      tD(DD.slotId, null)
                    },
                    disabled: SD,
                    children: [(0, jD.jsx)(ED.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, DD.slotId)
            }))
          }), (0, jD.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var vC = cD(4469),
      NC = cD(4391),
      gC = cD(4394),
      XC = cD(4409),
      mC = cD(4368),
      nC = cD(3385),
      OC = cD(8606),
      PC = cD(215);
    const HC = {
      skyblock: [cD(35788).c]
    };
    var UC = cD(624);
    const xC = {
      listedVariations: null,
      backgroundImage: iD.q,
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

    function qC(DD, CD) {
      const cD = yC.f[DD.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, iD.f)(DD, "large"),
        badges: [],
        category: DD.gameCategory,
        title: void 0 !== (null === cD || void 0 === cD ? void 0 : cD.title) ? CD(cD.title) : DD.name,
        variationTitle: null,
        description: void 0 !== (null === cD || void 0 === cD ? void 0 : cD.description) ? CD(cD.description) : DD.description,
        ownerSocialPreviewWithoutLocation: "owner" in DD ? DD.owner : null,
        ccu: DD.ccu,
        favourites: DD.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in DD ? DD.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function JC(DD) {
      var CD, cD, ID;
      return null !== (CD = null !== (cD = (0, PC.i)() ? function(DD) {
        for (const [CD, cD] of Object.entries(HC)) {
          const ID = [CD, ...cD.map((DD => (0, fC.Sb)(CD, DD)))];
          if (ID.includes(DD)) return ID
        }
        return null
      }(DD) : null) && void 0 !== cD ? cD : null === (ID = yC.b[DD]) || void 0 === ID ? void 0 : ID.listedVariations) && void 0 !== CD ? CD : null
    }

    function KC() {
      const {
        gameNameWithVariation: DD
      } = (0, AD.F)();
      if ((0, oD.useEffect)(nC.n, []), DD && (0, pC.s)(DD)) return (0, jD.jsx)(aC, {
        urlId: DD
      }, DD);
      const CD = DD && (0, iC.m)(DD) ? DD : "firstParty";
      return (0, jD.jsx)(VC, {}, CD)
    }

    function aC(DD) {
      let {
        urlId: CD
      } = DD;
      const {
        userContext: cD,
        isUserContextUpdating: ID
      } = (0, mD.c)(), pD = (0, oD.useMemo)((() => (0, rD.j)(CD)), [CD]);
      (0, oD.useMemo)((() => {
        if (null === pD) return;
        const DD = uD.userContextManager.peekCurrentUserContext();
        (null !== DD ? JD.c.getGame(DD, pD.schematicId) : uD.userContextManager.getCurrentUserContext().then((DD => JD.c.getGame(DD, pD.schematicId)))).catch((DD => {
          console.error(`Failed to get the custom game ${pD.schematicId}`, DD), (0, rD.i)(CD)
        }))
      }), [pD, CD]);
      const [iD, fD] = (0, oD.useState)(null), bD = (0, hD.d)();
      (0, oD.useEffect)((() => {
        if (null !== pD || ID) return;
        let DD = !0;
        return JD.c.getGameByUrlId(cD, CD).then((cD => {
          DD && fD({
            urlId: CD,
            game: cD
          })
        })).catch((cD => {
          console.error(`Failed to find the custom game with urlId ${CD}`, cD), DD && (0, FD.navigateToHomePage)()
        })), () => {
          DD = !1
        }
      }), [CD, pD, ID, cD]);
      const QD = null !== pD && void 0 !== pD ? pD : (null === iD || void 0 === iD ? void 0 : iD.urlId) === CD ? iD.game : null;
      return null === QD ? (0, jD.jsx)(aD.e, {}) : bD ? (0, jD.jsx)(VC, {
        gameNameWithVariation: (0, iC.v)(QD.schematicId),
        knownCustomGame: QD
      }, QD.schematicId) : null
    }

    function VC(DD) {
      var CD, cD, fD, MD, qD, KD, aD, zD;
      let {
        gameNameWithVariation: lD,
        knownCustomGame: LD = null
      } = DD;
      const {
        t: GD
      } = (0, QD.F)();
      (0, BC.d)();
      const kD = (0, BC.g)(),
        {
          userContext: dD,
          isUserContextUpdating: YD
        } = (0, mD.c)(),
        WD = (0, mC.f)(),
        uD = (0, FD.useNavigatePreserveSearch)(),
        hD = (0, AD.F)(),
        rD = (0, oD.useMemo)((() => lD ? {
          gameNameWithVariation: lD
        } : hD), [lD, hD]),
        CC = (0, wC.e)(rD),
        pC = (0, oD.useMemo)((() => {
          const DD = function(DD) {
            var CD, cD;
            const ID = JC(DD);
            if (!ID || 0 === ID.length || ID.includes(DD)) return DD;
            const pD = wD.h.getItem((0, ND.f)(DD));
            if (pD && ID.includes(pD)) return pD;
            return null !== (CD = null === (cD = yC.b[DD]) || void 0 === cD ? void 0 : cD.defaultListedVariation) && void 0 !== CD ? CD : ID[0]
          }(CC.gameNameWithVariation);
          return DD === CC.gameNameWithVariation ? CC : {
            ...CC,
            gameNameWithVariation: DD
          }
        }), [CC]);
      (0, oD.useEffect)((() => {
        const DD = CC.gameNameWithVariation;
        pC.gameNameWithVariation !== DD && DD !== (0, fC.Vb)(DD) && uD((0, RD.A)(pC.gameNameWithVariation), {
          replace: !0
        })
      }), [pC.gameNameWithVariation, CC.gameNameWithVariation, uD]);
      const ZC = (0, HD.d)(),
        [nC, PC] = (0, oD.useState)(""),
        HC = oD.useRef(null),
        [KC, aC] = (0, oD.useState)(),
        VC = (0, iC.m)(pC.gameNameWithVariation),
        jC = (0, oD.useMemo)((() => VC ? null : function(DD, CD, cD) {
          var ID, pD;
          const fD = yC.b[DD];
          return (0, UC.C)(fD) ? null : {
            listedVariations: JC(DD),
            backgroundImage: (0, iD.m)(DD, (0, iD.c)(fD)),
            badges: (0, SD.filterBadges)(fD.badges),
            category: fD.type,
            title: cD(fD.title),
            variationTitle: fD.variationTitle ? cD(fD.variationTitle) : null,
            description: cD(fD.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== CD ? null !== (ID = CD[DD]) && void 0 !== ID ? ID : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: fD.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: fD.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (pD = fD.canCreateCustomLobbies) || void 0 === pD || pD,
            countdownInformation: (0, ND.e)(DD)
          }
        }(pC.gameNameWithVariation, kD, GD)), [VC, pC.gameNameWithVariation, kD, GD]),
        [lC, LC] = (0, oD.useState)(!1),
        [TC, GC] = (0, oD.useState)((() => LD ? qC(LD, GD) : xC)),
        RC = null !== jC && void 0 !== jC ? jC : TC,
        [kC] = (0, oD.useState)(RC === xC),
        dC = (0, pD.f)(RC.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: YC,
          recentlyPlayedCustomLobbies: WC
        } = (0, oD.useMemo)((() => function(DD, CD, cD, ID) {
          var pD;
          const iD = DD => {
              const cD = (0, iC.t)(DD),
                ID = CD.find((CD => "custom" === CD.type ? CD.schematicId === cD : CD.gameNameWithVariation === DD));
              return ID ? [...ID.recentLobbies] : []
            },
            fD = (0, SD.getRecentGameNameWithVariationLobbiesKey)(DD),
            bD = null !== (pD = wD.h.getItem(fD)) && void 0 !== pD ? pD : [],
            QD = [...iD(DD), ...bD],
            BD = [];
          for (const wD of QD)(0, MC.N)(wD) && !BD.includes(wD) && BD.push(wD);
          let yD = QD;
          if (cD) {
            const DD = iD("classic_worlds"),
              CD = QD.filter((CD => !DD.includes(CD)));
            yD = [...DD, ...CD]
          }
          const MD = [],
            tD = !1 === ID ? [] : yD;
          for (const wD of tD)(0, MC.N)(wD) || MD.includes(wD) || MD.push(wD);
          return {
            recentlyPlayedPublicLobbies: BD,
            recentlyPlayedCustomLobbies: MD
          }
        }(pC.gameNameWithVariation, WD, RC.showWorldsInsteadOfCustomLobbies, RC.canCreateCustomLobbies)), [pC.gameNameWithVariation, WD, RC.showWorldsInsteadOfCustomLobbies, RC.canCreateCustomLobbies]),
        [sC, EC] = (0, oD.useState)(!0),
        [eC, uC] = (0, oD.useState)([]),
        [hC, rC] = (0, oD.useState)(null),
        [AC, FC] = (0, oD.useState)("explore"),
        Dc = (0, oD.useRef)(!1),
        Cc = (0, oD.useCallback)((DD => {
          (0, vD.unstable_batchedUpdates)((() => {
            aC(DD), GC((CD => ({
              ...qC(DD, GD),
              isFavourite: CD.isFavourite
            })))
          }))
        }), [GD]);
      (0, oD.useEffect)((() => {
        null === SC.d.get("gameEntrySource") && (0, SC.k)("gameInformationPageDirect")
      }), []);
      const cc = (0, oD.useRef)(null);
      (0, oD.useEffect)((() => {
        const DD = DD => {
            cc.current = DD.target instanceof Element ? DD.target.closest("a, button") : null
          },
          CD = DD => {
            "Tab" === DD.key && (cc.current = null)
          };
        return document.addEventListener("pointerdown", DD, !0), document.addEventListener("keydown", CD, !0), () => {
          document.removeEventListener("pointerdown", DD, !0), document.removeEventListener("keydown", CD, !0)
        }
      }), []), (0, nD.e)("Enter", (DD => {
        const CD = DD.target instanceof Element ? DD.target : null;
        if (DD.defaultPrevented || null !== CD && void 0 !== CD && CD.closest("input, textarea, select")) return;
        const cD = null === CD || void 0 === CD ? void 0 : CD.closest("a, button");
        cD && cD !== cc.current || (DD.preventDefault(), Bc())
      })), (0, OD.d)(FD.navigateToHomePage);
      const Ic = YC.length > 0 || WC.length > 0,
        pc = !RC.useRejoinLastLobbyButton || 0 === YC.length,
        ic = VC && null === RC.ownerSocialPreviewWithoutLocation,
        fc = dD.getPlayerName() === (null === KC || void 0 === KC || null === (CD = KC.owner) || void 0 === CD ? void 0 : CD.name),
        bc = null !== (cD = null === (fD = RC.badges.find((DD => "event" === DD.type))) || void 0 === fD ? void 0 : fD.event) && void 0 !== cD ? cD : null,
        Qc = pc ? yD.o : yD.i,
        wc = (0, jD.jsx)(BD.f, {
          tooltipInner: (0, jD.jsx)("div", {
            children: GD("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, jD.jsx)(Qc, {
            className: "GameInformationButton",
            padDefaultFocus: pc,
            showPress: !0,
            onClick: () => {
              Bc()
            },
            children: (0, jD.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [pc && (0, jD.jsxs)(jD.Fragment, {
                children: [(0, jD.jsx)(ED.c, {
                  name: "play"
                }), " "]
              }), GD("homePage:quickPlay")]
            })
          })
        });
      (0, oD.useEffect)((() => {
        if (!VC || YD) return;
        let DD = !0;
        const CD = (0, iC.t)(pC.gameNameWithVariation);
        return JD.c.getGame(dD, CD).then((CD => {
          DD && Cc(CD)
        })).catch((CD => {
          console.error("Failed to get Custom Game information", CD), DD && (0, FD.navigateToHomePage)()
        })), JD.c.getFavouriteGames(dD).then((cD => {
          DD && GC((DD => ({
            ...DD,
            isFavourite: cD.includes(CD)
          })))
        })).catch((CD => {
          console.error("Failed to get favourite games", CD), DD && LC(!0)
        })), () => {
          DD = !1
        }
      }), [VC, YD, pC.gameNameWithVariation, Cc, dD]);
      const Sc = !VC && null === jC;

      function Bc(DD) {
        (0, OC.d)(), uD((0, gD.b)(pC.gameNameWithVariation, DD))
      }(0, oD.useEffect)((() => {
        Sc && (0, FD.navigateToHomePage)()
      }), [Sc]), (0, oD.useEffect)((() => {
        !1 !== RC.canCreateCustomLobbies && null !== RC.showWorldsInsteadOfCustomLobbies && !1 === YD && (EC(!0), JD.c.getFavouriteLobbies(dD).then((DD => {
          rC(DD)
        })), JD.c.getOpenCustomLobbies(dD, {
          gameNameWithVariation: RC.showWorldsInsteadOfCustomLobbies ? "classic" : pC.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === AC,
          onlyFavouriteLobbies: "favourite" === AC
        }).then((DD => {
          ZC.current && uC(DD)
        })).catch((DD => {})).finally((() => {
          ZC.current && EC(!1)
        })))
      }), [YD, pC, AC, RC.showWorldsInsteadOfCustomLobbies, RC.canCreateCustomLobbies, ZC, dD]);
      const yc = (0, oD.useCallback)((async DD => {
          try {
            if (!hC) return;
            hC.includes(DD) ? (JD.c.unfavouriteLobby(dD, DD), rC(hC.filter((CD => CD !== DD)))) : (JD.c.favouriteLobby(dD, DD).catch((DD => {
              console.error("Failed to favourite lobby", DD)
            })), rC([...hC, DD]))
          } catch (CD) {
            console.error("Failed to like lobby", CD)
          }
        }), [dD, hC]),
        Mc = (null === KC || void 0 === KC ? void 0 : KC.schematicId) === (0, iC.t)(CC.gameNameWithVariation) ? KC : null,
        tc = Mc && (0, RD.H)(CC.gameNameWithVariation, (DD => GD(DD)), Mc);
      (0, DC.e)(Mc && (0, RD.A)(CC.gameNameWithVariation, Mc));
      const Zc = eD.featureFlags.canUseCustomLobbies && !0 === RC.canCreateCustomLobbies,
        oc = (0, jD.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, jD.jsx)(sD, {
            gameNameWithVariation: pC.gameNameWithVariation
          })
        });
      return (0, jD.jsx)(jD.Fragment, {
        children: (0, jD.jsxs)("article", {
          className: tD()("GameInformation", {
            GameInformationFadeIn: kC,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (MD = RC.countdownInformation) || void 0 === MD ? void 0 : MD.type)
          }),
          children: [tc && (0, jD.jsx)(XD.d, {
            meta: tc
          }), (0, jD.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, jD.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, jD.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, jD.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, jD.jsx)("div", {
                  className: tD()("GameInformationTopBackgroundImage", bD.h),
                  style: (0, bD.d)(dC),
                  children: (0, jD.jsx)(bD.b, {
                    image: dC
                  })
                })]
              }), (0, jD.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, jD.jsx)(vC.c, {}), (0, jD.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, jD.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, jD.jsxs)("div", {
                      className: tD()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: ic
                      }),
                      children: [RC.badges.map((DD => (0, jD.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${DD.type}`,
                        children: (0, jD.jsx)(xD.d, {
                          badge: DD
                        })
                      }, DD.type))), VC && (0, jD.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, jD.jsx)(UD.c, {
                          text: (0, ID._)({
                            type: "playerCrafted"
                          })
                        })
                      }), RC.category && (0, jD.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, jD.jsx)(UD.c, {
                          text: [{
                            str: (0, ID.ab)(RC.category).toUpperCase()
                          }]
                        })
                      }), null !== RC.ccu && (0, jD.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, jD.jsx)(ED.c, {
                          name: "user"
                        }), (0, MC.S)(RC.ccu), " online"]
                      }), null !== RC.ownerSocialPreviewWithoutLocation && (0, jD.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, jD.jsx)("span", {
                          children: "Made by"
                        }), (0, jD.jsx)(VD.h, {
                          playerSocialPreview: {
                            ...RC.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), ic && (0, jD.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, jD.jsx)("span", {
                          children: "Made by"
                        }), (0, jD.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== RC.favourites && (null !== RC.isFavourite || VC && !lC) && (0, jD.jsx)(yD.t, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== Dc.current && (Dc.current = !0, null !== RC.isFavourite)) {
                              const DD = (0, iC.t)(pC.gameNameWithVariation);
                              let CD;
                              RC.isFavourite ? (CD = -1, JD.c.unfavouriteGame(dD, DD).catch((DD => {
                                console.error("Failed to get unfavourite game", DD)
                              })).finally((() => {
                                Dc.current = !1
                              }))) : (CD = 1, JD.c.favouriteGame(dD, DD).catch((DD => {
                                console.error("Failed to get favourite game", DD)
                              })).finally((() => {
                                Dc.current = !1
                              }))), GC((DD => ({
                                ...DD,
                                isFavourite: !DD.isFavourite
                              }))), GC((DD => ({
                                ...DD,
                                favourites: DD.favourites + CD
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (qD = RC.isFavourite) && void 0 !== qD && qD,
                        disabled: null === RC.isFavourite,
                        className: tD()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === RC.isFavourite
                        })
                      }, null === RC.isFavourite ? "pending" : "known"), VC && !ic && eD.featureFlags.useSocialFeatures && !fc && (0, jD.jsx)(gC.c, {
                        targetType: "customGame",
                        targetId: (0, iC.t)(pC.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (dD.playerHasRank("developer") || dD.playerHasRank("admin") && fc) && (0, jD.jsxs)(yD.o, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          uD((0, QC.o)((0, bC.f)(pC.gameNameWithVariation, !0)))
                        },
                        children: [(0, jD.jsx)(ED.c, {
                          name: "star-christmas"
                        }), " ", GD("studio:viewInStudio")]
                      }), VC && dD.playerHasRank("developer") && (0, jD.jsxs)(yD.i, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, tC.e)({
                            schematicId: (0, iC.t)(pC.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, jD.jsx)(ED.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), VC && dD.playerHasRank("developer") && (0, jD.jsxs)(yD.i, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          cC.NotificationProvider.showCustomPopup({
                            body: () => (0, jD.jsx)(oC, {
                              schematicId: (0, iC.t)(pC.gameNameWithVariation),
                              gameName: RC.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, jD.jsx)(ED.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (KD = RC.countdownInformation) || void 0 === KD ? void 0 : KD.type) && (0, jD.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, jD.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, jD.jsx)(PD.d, {
                            toTime: RC.countdownInformation.countdownToTime
                          })]
                        }), (0, jD.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: RC.countdownInformation.previewText
                        })]
                      })]
                    }, ic ? "pending" : "shown"), (0, jD.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, jD.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, jD.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [RC.title, " ", RC.variationTitle && (null === (aD = yC.b[pC.gameNameWithVariation]) || void 0 === aD ? void 0 : aD.variationThumbnailUseBigRatio) && (0, jD.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: RC.variationTitle
                          })]
                        })
                      }), RC.listedVariations && RC.listedVariations.length > 0 && (0, jD.jsx)("div", {
                        className: tD()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (zD = yC.b[pC.gameNameWithVariation]) || void 0 === zD ? void 0 : zD.variationThumbnailUseBigRatio
                        }),
                        children: RC.listedVariations.map((DD => {
                          var CD, cD;
                          return (0, jD.jsxs)(zC, {
                            variation: DD,
                            isSelected: pC.gameNameWithVariation === DD,
                            children: [null !== kD && (0, jD.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, jD.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, jD.jsx)(ED.c, {
                                  name: "user"
                                }), " ", (0, MC.S)(null !== (CD = kD[DD]) && void 0 !== CD ? CD : 0)]
                              })
                            }), (0, jD.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: GD(null !== (cD = yC.b[DD].variationTitle) && void 0 !== cD ? cD : yC.b[DD].title)
                            }), (0, jD.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, SD.filterBadges)(yC.b[DD].badges).map((DD => (0, jD.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + DD.type,
                                children: (0, jD.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, jD.jsx)(xD.d, {
                                    badge: DD
                                  })
                                })
                              }, DD.type)))
                            })]
                          }, DD)
                        }))
                      })]
                    }), RC.description && (0, jD.jsx)("p", {
                      className: "GameInformationDescription",
                      children: RC.description
                    })]
                  }), (0, jD.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, jD.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!pc && (0, jD.jsx)(BD.f, {
                        tooltipInner: (0, jD.jsx)("div", {
                          children: GD("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, jD.jsx)(yD.o, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            Bc(YC[0])
                          },
                          children: (0, jD.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, jD.jsx)(ED.c, {
                              name: "play"
                            }), " ", GD("homePage:rejoinLobbyNumber", {
                              number: YC[0]
                            })]
                          })
                        })
                      }), pc && wc]
                    }), (0, jD.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!pc && wc, (0, jD.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, jD.jsx)(ED.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, jD.jsx)(ZD.b, {
                          className: "JoinLobbyInput",
                          placeholderText: GD("homePage:lobbyName"),
                          maxLength: MC.Q,
                          domRef: HC,
                          onValueChange: DD => {
                            DD = (0, MC.sb)(DD), PC(DD)
                          },
                          onEnter: () => {
                            0 === nC.length ? Bc(YC[0]) : Bc(nC)
                          }
                        }), (0, jD.jsx)(yD.i, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === nC.length ? Bc(YC[0]) : Bc(nC)
                          },
                          children: GD("general:join")
                        })]
                      })]
                    }), (0, jD.jsxs)("section", {
                      className: tD()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !Ic
                      }),
                      children: [(0, jD.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, jD.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, jD.jsx)(ED.c, {
                            name: "clock-rotate-left"
                          }), Ic && (0, jD.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: GD("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, jD.jsx)(XC.d, {
                        lobbyGroups: [YC, WC],
                        onLobbyClick: DD => {
                          Bc(DD)
                        },
                        keyPrefix: pC.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== bc && (0, jD.jsx)(TD, {
                eventName: bc
              })]
            }), Zc && (0, jD.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, jD.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, jD.jsxs)("div", {
                  className: tD()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === RC.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === RC.showWorldsInsteadOfCustomLobbies && (0, jD.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, jD.jsx)(ED.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, jD.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, jD.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), GD("game:worlds")]
                    })]
                  }), !1 === RC.showWorldsInsteadOfCustomLobbies && (0, jD.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, jD.jsx)(ED.c, {
                      name: "joystick"
                    }), (0, jD.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, jD.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), GD("homePage:customLobbies")]
                    })]
                  }), (0, jD.jsx)(yD.P, {
                    onClick: () => {
                      FC("explore")
                    },
                    active: "explore" === AC,
                    children: GD("general:explore")
                  }), (0, jD.jsx)(yD.P, {
                    onClick: () => {
                      FC("favourite")
                    },
                    active: "favourite" === AC,
                    children: GD("homePage:favouriteLobbies")
                  }), (0, jD.jsx)(yD.P, {
                    onClick: () => {
                      FC("owned")
                    },
                    active: "owned" === AC,
                    children: GD("homePage:ownedLobbies")
                  })]
                }), (0, jD.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, jD.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, jD.jsx)(NC.c, {
                      label: "Create",
                      onClick: () => {
                        cC.NotificationProvider.showCustomPopup({
                          body: DD => (0, jD.jsx)(IC.CreateCustomLobby, {
                            gameNameWithVariation: pC.gameNameWithVariation,
                            close: DD
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === sC && (0, jD.jsx)(NC.j, {}), !1 === sC && eC.length > 0 && eC.map((DD => (0, jD.jsx)(NC.f, {
                      customLobby: DD,
                      favouriteLobbies: hC,
                      toggleLikeLobby: yc,
                      showReport: eD.featureFlags.useSocialFeatures && "owned" !== AC
                    }, DD.name)))]
                  }), oc]
                })]
              })
            })]
          }), !Zc && oc]
        })
      })
    }

    function zC(DD) {
      let {
        variation: CD,
        isSelected: cD,
        children: ID
      } = DD;
      const QD = yC.b[CD],
        SD = (0, iD.m)(CD, (0, iD.p)(QD)),
        BD = (0, pD.f)(SD),
        yD = (0, fD.f)([(0, iD.j)(CD, (0, iD.c)(QD))]);
      return (0, jD.jsxs)(FD.LinkPreserveSearch, {
        to: (0, RD.A)(CD),
        replace: !0,
        className: tD()("GameInformationVariation", bD.h, {
          SelectedGameInformationVariation: cD
        }),
        onClick: DD => {
          if (!(0, CC.d)(DD)) return;
          const cD = (0, ND.f)(CD);
          wD.h.setItem(cD, CD)
        },
        onMouseEnter: yD.start,
        onMouseLeave: yD.cancel,
        onFocus: yD.start,
        onBlur: yD.cancel,
        style: (0, bD.d)(BD),
        children: [(0, jD.jsx)(bD.b, {
          image: BD
        }), ID]
      })
    }
  },
  6244: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => vD
    });
    var ID = cD(53),
      pD = cD(1442),
      iD = cD(1497),
      fD = cD(3306),
      bD = cD(1120),
      QD = cD(1328),
      wD = cD(1356),
      SD = cD(1064),
      BD = cD(1049),
      yD = cD.n(BD),
      MD = cD(1093);

    function tD(DD) {
      let {
        info: CD,
        className: cD
      } = DD;
      return (0, MD.jsxs)("div", {
        className: yD()("GameApprovalInfoDetails", cD),
        children: [(0, MD.jsxs)("div", {
          className: yD()("GameApprovalInfoSummary", CD.overallPassed ? "Passed" : "Failed"),
          children: [(0, MD.jsx)(SD.c, {
            name: CD.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, MD.jsx)("span", {
            children: CD.summary
          })]
        }), CD.rows.length > 0 && (0, MD.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: CD.rows.map((DD => (0, MD.jsxs)("div", {
            className: yD()("GameApprovalInfoRow", DD.passed ? "Passed" : "Failed"),
            children: [(0, MD.jsx)(SD.c, {
              name: DD.passed ? "check" : "xmark"
            }), (0, MD.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, MD.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: DD.label
              }), (0, MD.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: DD.valueText
              })]
            })]
          }, DD.label)))
        })]
      })
    }
    var ZD = cD(1192),
      oD = cD(1340);

    function vD(DD) {
      oD.NotificationProvider.showCustomPopup({
        body: () => (0, MD.jsx)(ND, {
          ...DD
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function ND(DD) {
      let {
        schematicId: CD,
        canOverride: cD,
        onApprovalChanged: BD
      } = DD;
      const {
        t: yD
      } = (0, ZD.F)(), {
        userContext: oD
      } = (0, bD.c)(), vD = (0, fD.d)(), [ND, gD] = (0, ID.useState)(null), [XD, mD] = (0, ID.useState)(null), [nD, OD] = (0, ID.useState)(!1), PD = (0, ID.useCallback)((() => {
        mD(null), iD.c.getGameApprovalInfo(oD, CD).then((DD => {
          vD.current && gD(DD)
        })).catch((DD => {
          console.error("Failed to get game approval info", DD), vD.current && mD(yD("studio:approvalLoadFailed"))
        }))
      }), [oD, CD, vD, yD]);
      (0, ID.useEffect)((() => {
        PD()
      }), [PD]);
      const HD = DD => {
        nD || (OD(!0), iD.c.setGameApproval(oD, CD, DD).then((() => {
          null === BD || void 0 === BD || BD(), vD.current && PD()
        })).catch((DD => {
          console.error("Failed to set game approval", DD)
        })).finally((() => {
          vD.current && OD(!1)
        })))
      };
      return (0, MD.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, MD.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: yD("studio:approvalTitle")
        }), !ND && !XD && (0, MD.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, MD.jsx)(QD.e, {})
        }), XD && (0, MD.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: XD
        }), ND && (0, MD.jsxs)(MD.Fragment, {
          children: [(0, MD.jsx)(tD, {
            info: ND
          }), cD && (0, MD.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== ND.manualOverride && (0, MD.jsx)(wD.f, {
              tooltipInner: (0, MD.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, MD.jsxs)(pD.o, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  HD(!0)
                },
                disabled: nD,
                children: [(0, MD.jsx)(SD.c, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== ND.manualOverride && (0, MD.jsx)(wD.f, {
              tooltipInner: (0, MD.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, MD.jsxs)(pD.J, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  HD(!1)
                },
                disabled: nD,
                children: [(0, MD.jsx)(SD.c, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== ND.manualOverride && (0, MD.jsx)(wD.f, {
              tooltipInner: (0, MD.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, MD.jsxs)(pD.i, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  HD(null)
                },
                disabled: nD,
                children: [(0, MD.jsx)(SD.c, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  9084: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => iD
    });
    var ID = cD(53),
      pD = cD(3387);

    function iD() {
      const [DD, CD] = (0, ID.useState)(!1);
      return (0, ID.useLayoutEffect)((() => {
        let DD = !0;
        return (0, pD.d)().then((() => {
          DD && CD(!0)
        })), () => {
          DD = !1
        }
      }), []), DD
    }
  },
  8609: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(1319),
      pD = cD(1221),
      iD = cD(624);

    function fD(DD) {
      return DD = function(DD, CD) {
        var cD;
        const ID = new URLSearchParams(CD),
          pD = ID.get("lobby"),
          iD = ID.get("vm"),
          fD = null !== (cD = pD) && void 0 !== cD ? cD : DD.lobbyName,
          bD = null !== iD && void 0 !== iD ? iD : DD.directJoinVmUrl;
        if (fD === DD.lobbyName && bD === DD.directJoinVmUrl) return DD;
        return {
          ...DD,
          lobbyName: fD,
          directJoinVmUrl: bD
        }
      }(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), DD = function(DD) {
        if ((0, iD.C)(DD.directJoinVmUrl)) return DD;
        const CD = (0, pD.$)(DD.directJoinVmUrl);
        null === CD && (DD.directJoinVmUrl = void 0);
        return DD
      }(DD = function(DD) {
        if ((0, iD.C)(DD.gameNameWithVariation)) return DD;
        return DD.gameNameWithVariation = (0, ID.l)(DD.gameNameWithVariation), DD
      }(DD))
    }
  },
  8606: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      d: () => pD
    });
    let ID = !1;

    function pD() {
      ID = !0
    }

    function iD() {
      return ID
    }
  },
  35788: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      e: () => ID
    });
    const ID = "skyblockSkills",
      pD = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);