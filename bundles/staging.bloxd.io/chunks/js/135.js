export const id = 135;
export const ids = [135, 705];
export const modules = {
  37278: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => kr
    });
    var OM = iM(313),
      SM = iM(3902),
      jM = iM(3945),
      aM = iM(3938),
      PM = iM(3934),
      nM = iM(1188),
      QM = iM(30),
      zM = iM(1830),
      LM = iM(1440),
      mM = iM(1520),
      HM = iM(1116),
      hM = iM.n(HM),
      JM = iM(1763),
      dM = iM(44),
      yM = iM(65),
      lM = iM(2482),
      EM = iM(1382),
      UM = iM(1694),
      GM = iM(1142),
      CM = iM(3821),
      eM = iM(4934),
      bM = iM(2796),
      wM = iM(2006),
      tM = iM(3898),
      gM = iM(1843),
      uM = iM(1573),
      RM = iM(2280),
      pM = iM(1396),
      WM = iM(2818),
      sM = iM(5417),
      DM = iM(1303);
    const kM = 15e3,
      ZM = 2500;

    function oM(MM) {
      var rM;
      let {
        eventName: iM
      } = MM;
      const {
        t: OM
      } = (0, nM.A)(), SM = gM.e[iM], [jM, aM] = (0, dM.useState)((() => Date.now() >= SM.endsAt.getTime())), [PM, QM] = (0, dM.useState)("overall"), zM = function(MM, rM) {
        const {
          userContext: iM,
          isUserContextUpdating: OM
        } = (0, GM.b)(), SM = `${MM}:${rM}`, [jM, aM] = (0, dM.useState)({
          requestKey: SM,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, dM.useEffect)((() => {
          if (OM) return;
          let jM, PM = !1;
          const nM = async () => {
            if ("visible" === document.visibilityState) try {
              const OM = await uM.c.getGameEventLeaderboard(iM, {
                event: MM,
                scope: rM
              });
              PM || aM({
                requestKey: SM,
                leaderboard: {
                  status: "loaded",
                  leaderboard: OM
                }
              })
            } catch {
              PM || aM((MM => MM.requestKey === SM && "loaded" === MM.leaderboard.status ? MM : {
                requestKey: SM,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            PM || (jM = setTimeout(nM, kM))
          };
          return nM(), () => {
            PM = !0, clearTimeout(jM)
          }
        }), [MM, rM, SM, iM, OM]), jM.requestKey === SM ? jM.leaderboard : {
          status: "loading"
        }
      }(iM, PM), LM = function(MM) {
        const rM = (0, dM.useRef)(null),
          iM = (0, dM.useRef)(0),
          OM = (0, dM.useRef)(),
          [SM, jM] = (0, dM.useState)({});
        return (0, dM.useEffect)((() => {
          const SM = null === MM || void 0 === MM ? void 0 : MM.entries;
          if (!SM) return;
          const aM = new Map(SM.map((MM => [MM.player.name, MM.value]))),
            PM = rM.current;
          if (rM.current = aM, null === PM) return;
          const nM = {};
          for (const [MM, rM] of aM) {
            const OM = PM.get(MM);
            void 0 !== OM && rM > OM && (nM[MM] = {
              amount: rM - OM,
              key: iM.current++
            })
          }
          0 !== Object.keys(nM).length && (jM(nM), clearTimeout(OM.current), OM.current = setTimeout((() => {
            jM({})
          }), ZM))
        }), [MM]), (0, dM.useEffect)((() => () => {
          clearTimeout(OM.current)
        }), []), SM
      }("loaded" === zM.status ? zM.leaderboard : null), mM = function(MM) {
        const [rM, iM] = (0, dM.useState)(null), OM = "loaded" === MM.status ? MM.leaderboard.goalProgress : void 0;
        return (0, dM.useEffect)((() => {
          OM && iM(OM)
        }), [OM]), rM
      }(zM), HM = RM.f[`profileEffect_${SM.prizePack}`];
      if (jM) return null;
      const JM = "loaded" === zM.status ? zM.leaderboard : null,
        yM = null !== (rM = null === JM || void 0 === JM ? void 0 : JM.entries) && void 0 !== rM ? rM : null,
        lM = null !== JM && void 0 !== JM && JM.own && null !== yM && !yM.some((MM => MM.isOwn)) ? JM.own : null;
      return (0, DM.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, DM.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, DM.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, DM.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, DM.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, DM.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), OM("gameEvents:live")]
              }), (0, DM.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [OM("gameEvents:endsIn"), (0, DM.jsx)(bM.c, {
                  toTime: SM.endsAt,
                  onReachEndOfCountdown: () => {
                    aM(!0)
                  }
                })]
              })]
            }), (0, DM.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: OM(SM.titleKey)
            }), (0, DM.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, DM.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [HM && (0, DM.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, DM.jsx)(HM, {})
                }), (0, DM.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, DM.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: OM("gameEvents:prize")
                  }), (0, DM.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: OM(SM.prizeNameKey)
                  })]
                })]
              }), (0, DM.jsx)(fM, {
                event: SM,
                progress: mM
              })]
            })]
          }), (0, DM.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, DM.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, DM.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: OM(SM.leaderboard.titleKey)
              }), (0, DM.jsx)(sM.e, {
                ariaLabel: OM("gameEvents:leaderboardScope"),
                options: gM.b.map((MM => ({
                  value: MM,
                  label: OM(`gameEvents:${MM}Scope`)
                }))),
                value: PM,
                onChange: QM
              })]
            }), "loading" === zM.status && (0, DM.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, DM.jsx)(pM.d, {})
            }), ("unavailable" === zM.status || "loaded" === zM.status && null === yM) && (0, DM.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: OM("gameEvents:leaderboardUnavailable")
            }), null !== yM && 0 === yM.length && (0, DM.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: OM("friends" === PM ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== yM && yM.length > 0 && (0, DM.jsx)("ol", {
              className: "GameEventPanelRows",
              children: yM.map((MM => {
                const rM = LM[MM.player.name];
                return (0, DM.jsxs)("li", {
                  className: hM()("GameEventPanelRow", {
                    GameEventPanelRowOwn: MM.isOwn,
                    GameEventPanelRowTop: MM.rank <= 3
                  }),
                  children: [(0, DM.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", MM.rank]
                  }), (0, DM.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, DM.jsx)(WM.f, {
                      playerSocialPreview: {
                        ...MM.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== rM && (0, DM.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", rM.amount.toLocaleString()]
                  }, rM.key), (0, DM.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: MM.value.toLocaleString()
                  })]
                }, MM.player.name)
              }))
            }), lM && (0, DM.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, DM.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", lM.rank.toLocaleString()]
              }), (0, DM.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: OM("gameEvents:yourPlace")
              }), (0, DM.jsx)("span", {
                className: "GameEventPanelScore",
                children: lM.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function fM(MM) {
      let {
        event: rM,
        progress: iM
      } = MM;
      const {
        t: OM
      } = (0, nM.A)(), SM = null !== iM && rM.prizeGoals.some(((MM, rM) => iM[rM] >= MM.target));
      return (0, DM.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, DM.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: OM(SM ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, DM.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: rM.prizeGoals.map(((MM, rM) => {
            const SM = null === iM ? null : Math.min(iM[rM], MM.target);
            return (0, DM.jsxs)(dM.Fragment, {
              children: [rM > 0 && (0, DM.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: OM("gameEvents:goalsOr")
              }), (0, DM.jsxs)("div", {
                className: hM()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: SM === MM.target
                }),
                children: [(0, DM.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: OM(MM.labelKey)
                }), (0, DM.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, DM.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== SM && void 0 !== SM ? SM : 0) / MM.target * 100 + "%"
                    }
                  }), null !== SM && (0, DM.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [SM.toLocaleString(), " / ", MM.target.toLocaleString()]
                  })]
                })]
              })]
            }, MM.board)
          }))
        })]
      })
    }
    var YM = iM(1630),
      NM = iM(1675),
      AM = iM(1099),
      xM = iM(783),
      vM = iM(3875);

    function FM(MM) {
      let {
        gameNameWithVariation: rM
      } = MM;
      const iM = (0, YM.F)(rM),
        [OM, SM] = (0, dM.useState)(null);
      if ((0, dM.useEffect)((() => {
          if (!iM) return;
          let MM = !0;
          return (0, NM.h)(iM).then((rM => {
            MM && SM(rM)
          })).catch((MM => {
            console.error(`Failed to load the page copy for ${iM.name}`, MM)
          })), () => {
            MM = !1
          }
        }), [iM]), !iM || !OM || OM.name !== iM.name) return null;
      const jM = (0, NM.e)(OM),
        aM = new Set((0, AM.c)((0, xM.i)()).map((MM => (0, YM.w)(MM)))),
        PM = OM.similarGames.filter((MM => aM.has((0, YM.w)(MM))));
      return (0, DM.jsx)("div", {
        className: "GamePageContent",
        children: (0, DM.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, DM.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, DM.jsx)("h2", {
              children: jM.whatIs
            }), OM.whatIs.map((MM => (0, DM.jsx)("p", {
              children: MM
            }, MM)))]
          }), (0, DM.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, DM.jsx)("h2", {
              children: jM.howToPlay
            }), OM.howToPlay.map((MM => (0, DM.jsx)("p", {
              children: MM
            }, MM)))]
          }), (0, DM.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, DM.jsx)("h2", {
              children: jM.features
            }), (0, DM.jsx)("ul", {
              children: OM.features.map((MM => (0, DM.jsx)("li", {
                children: MM
              }, MM)))
            })]
          }), (0, DM.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, DM.jsx)("h2", {
              children: jM.tips
            }), (0, DM.jsx)("ul", {
              children: OM.tips.map((MM => (0, DM.jsx)("li", {
                children: MM
              }, MM)))
            })]
          }), (0, DM.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, DM.jsx)("h2", {
              children: jM.faq
            }), OM.faq.map((MM => {
              let {
                question: rM,
                answer: iM
              } = MM;
              return (0, DM.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, DM.jsx)("h3", {
                  children: rM
                }), (0, DM.jsx)("p", {
                  children: iM
                })]
              }, rM)
            }))]
          }), PM.length > 0 && (0, DM.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, DM.jsx)("h2", {
              children: jM.similarGames
            }), (0, DM.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: PM.map((MM => (0, DM.jsx)("li", {
                children: (0, DM.jsx)(vM.h, {
                  source: {
                    type: "game",
                    gameNameWithVariation: MM
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, MM)))
            })]
          })]
        })
      })
    }
    var BM = iM(1398),
      XM = iM(83),
      IM = iM(1144),
      KM = iM(35064),
      qM = iM(1733),
      TM = iM(1608),
      VM = iM(1591),
      cM = iM(1685),
      Mr = iM(1530),
      rr = iM(1429),
      ir = iM(37280),
      Or = iM(1240),
      Sr = iM(1073),
      jr = iM(332),
      ar = iM(1088),
      Pr = iM(1627),
      nr = iM(9525),
      Qr = iM(19),
      zr = iM(2721),
      Lr = iM(821),
      mr = iM(1229),
      Hr = iM(6982),
      hr = iM(3881);

    function Jr(MM) {
      let {
        preview: rM,
        isBroken: iM
      } = MM;
      const OM = null === rM ? null : (0, jM.g)(rM, "small"),
        aM = (0, SM.c)(null !== OM && void 0 !== OM ? OM : jM.t);
      return null === rM ? (0, DM.jsx)("div", {
        className: hM()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: iM
        }),
        children: (0, DM.jsx)(BM.b, {
          name: iM ? "triangle-exclamation" : "star"
        })
      }) : (0, DM.jsx)("div", {
        className: hM()("FeaturedGamesPopupSlotThumbnail", PM.k),
        style: (0, PM.h)(aM),
        role: "img",
        "aria-label": rM.name,
        children: (0, DM.jsx)(PM.e, {
          image: aM
        })
      })
    }

    function dr(MM) {
      let {
        schematicId: rM,
        gameName: iM
      } = MM;
      const {
        userContext: SM
      } = (0, GM.b)(), jM = (0, hr.b)(), [aM, PM] = (0, dM.useState)(null), [nM, QM] = (0, dM.useState)(null), [zM, LM] = (0, dM.useState)(!1), HM = (0, dM.useCallback)((() => {
        QM(null), uM.c.getFeaturedGames(SM).then((MM => {
          jM.current && PM(MM.slots)
        })).catch((MM => {
          console.error("Failed to get featured games", MM), jM.current && QM("Failed to load featured games")
        }))
      }), [SM, jM]);
      (0, dM.useEffect)((() => {
        HM()
      }), [HM]);
      const hM = (MM, rM) => {
        zM || (LM(!0), uM.c.setFeaturedGame(SM, MM, rM).then((() => {
          jM.current && HM()
        })).catch((MM => {
          console.error("Failed to set featured game", MM), jM.current && QM("Failed to update the featured slot")
        })).finally((() => {
          jM.current && LM(!1)
        })))
      };
      return (0, DM.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, DM.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !aM && !nM && (0, DM.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, DM.jsx)(pM.d, {})
        }), nM && (0, DM.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: nM
        }), aM && (0, DM.jsxs)(DM.Fragment, {
          children: [(0, DM.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: aM.map((MM => {
              const iM = MM.schematicId === rM,
                SM = null === MM.schematicId,
                {
                  categoryGroup: jM
                } = OM.I[MM.slotId];
              return (0, DM.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, DM.jsx)(Jr, {
                  preview: MM.preview,
                  isBroken: !SM
                }), (0, DM.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, DM.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, OM.ab)(jM), " \xb7 position", " ", (0, OM.J)(MM.slotId, OM.Jb) + 1, " of", " ", (0, OM.Gb)(jM, OM.Jb)]
                  }), SM && (0, DM.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !SM && null !== MM.preview && (0, DM.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: MM.preview.name
                  }), !SM && null === MM.preview && (0, DM.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, DM.jsx)(BM.b, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, DM.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [SM && (0, DM.jsxs)(mM.u, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      hM(MM.slotId, rM)
                    },
                    disabled: zM,
                    children: [(0, DM.jsx)(BM.b, {
                      name: "star"
                    }), " Feature here"]
                  }), !SM && !iM && (0, DM.jsxs)(mM.V, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      hM(MM.slotId, rM)
                    },
                    disabled: zM,
                    children: [(0, DM.jsx)(BM.b, {
                      name: "star"
                    }), " Replace"]
                  }), !SM && (0, DM.jsxs)(mM.J, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      hM(MM.slotId, null)
                    },
                    disabled: zM,
                    children: [(0, DM.jsx)(BM.b, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, MM.slotId)
            }))
          }), (0, DM.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var yr = iM(5046),
      lr = iM(4963),
      Er = iM(3839);
    const Ur = 8,
      Gr = 12;

    function Cr(MM) {
      let {
        customLobbies: rM,
        favouriteLobbies: iM,
        toggleLikeLobby: OM,
        showReport: SM
      } = MM;
      const [jM, aM] = (0, dM.useState)(Ur);
      return (0, dM.useEffect)((() => {
        if (jM >= rM.length) return;
        let MM = !0;
        return (0, Er.e)().then((() => {
          MM && aM(jM + Gr)
        })), () => {
          MM = !1
        }
      }), [jM, rM.length]), (0, DM.jsx)(DM.Fragment, {
        children: rM.slice(0, jM).map((MM => (0, DM.jsx)(lr.e, {
          customLobby: MM,
          favouriteLobbies: iM,
          toggleLikeLobby: OM,
          showReport: SM
        }, MM.name)))
      })
    }
    var er = iM(4971),
      br = iM(4987),
      wr = iM(4948),
      tr = iM(3963),
      gr = iM(9517),
      ur = iM(192);
    const Rr = {
      skyblock: [iM(37305).b]
    };
    var pr = iM(625);
    const Wr = {
      listedVariations: null,
      backgroundImage: jM.t,
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

    function sr(MM, rM) {
      const iM = Lr.g[MM.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, jM.g)(MM, "large"),
        badges: [],
        category: MM.gameCategory,
        title: void 0 !== (null === iM || void 0 === iM ? void 0 : iM.title) ? rM(iM.title) : MM.name,
        variationTitle: null,
        description: void 0 !== (null === iM || void 0 === iM ? void 0 : iM.description) ? rM(iM.description) : MM.description,
        ownerSocialPreviewWithoutLocation: "owner" in MM ? MM.owner : null,
        ccu: MM.ccu,
        favourites: MM.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in MM ? MM.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function Dr(MM) {
      var rM, iM, OM;
      return null !== (rM = null !== (iM = (0, ur.m)() ? function(MM) {
        for (const [rM, iM] of Object.entries(Rr)) {
          const OM = [rM, ...iM.map((MM => (0, jr.Kb)(rM, MM)))];
          if (OM.includes(MM)) return OM
        }
        return null
      }(MM) : null) && void 0 !== iM ? iM : null === (OM = Lr.e[MM]) || void 0 === OM ? void 0 : OM.listedVariations) && void 0 !== rM ? rM : null
    }

    function kr() {
      const {
        gameNameWithVariation: MM
      } = (0, TM.D)();
      if ((0, dM.useEffect)(tr.r, []), MM && (0, Or.r)(MM)) return (0, DM.jsx)(Zr, {
        urlId: MM
      }, MM);
      const rM = MM && (0, Sr.m)(MM) ? MM : "firstParty";
      return (0, DM.jsx)(or, {}, rM)
    }

    function Zr(MM) {
      let {
        urlId: rM
      } = MM;
      const {
        userContext: iM,
        isUserContextUpdating: OM
      } = (0, GM.b)(), SM = (0, dM.useMemo)((() => (0, qM.g)(rM)), [rM]);
      (0, dM.useMemo)((() => {
        if (null === SM) return;
        const MM = IM.userContextManager.peekCurrentUserContext();
        (null !== MM ? uM.c.getGame(MM, SM.schematicId) : IM.userContextManager.getCurrentUserContext().then((MM => uM.c.getGame(MM, SM.schematicId)))).catch((MM => {
          console.error(`Failed to get the custom game ${SM.schematicId}`, MM), (0, qM.f)(rM)
        }))
      }), [SM, rM]);
      const [jM, aM] = (0, dM.useState)(null), PM = (0, KM.d)();
      (0, dM.useEffect)((() => {
        if (null !== SM || OM) return;
        let MM = !0;
        return uM.c.getGameByUrlId(iM, rM).then((iM => {
          MM && aM({
            urlId: rM,
            game: iM
          })
        })).catch((iM => {
          console.error(`Failed to find the custom game with urlId ${rM}`, iM), MM && (0, VM.navigateToHomePage)()
        })), () => {
          MM = !1
        }
      }), [rM, SM, OM, iM]);
      const nM = null !== SM && void 0 !== SM ? SM : (null === jM || void 0 === jM ? void 0 : jM.urlId) === rM ? jM.game : null;
      return null === nM ? (0, DM.jsx)(pM.d, {}) : PM ? (0, DM.jsx)(or, {
        gameNameWithVariation: (0, Sr.w)(nM.schematicId),
        knownCustomGame: nM
      }, nM.schematicId) : null
    }

    function or(MM) {
      var rM, iM, aM, HM, gM, RM, pM, sM;
      let {
        gameNameWithVariation: kM,
        knownCustomGame: ZM = null
      } = MM;
      const {
        t: fM
      } = (0, nM.A)();
      (0, zr.j)();
      const NM = (0, zr.q)(),
        {
          userContext: AM,
          isUserContextUpdating: xM
        } = (0, GM.b)(),
        vM = (0, wr.d)(),
        IM = (0, VM.useNavigatePreserveSearch)(),
        KM = (0, TM.D)(),
        qM = (0, dM.useMemo)((() => kM ? {
          gameNameWithVariation: kM
        } : KM), [kM, KM]),
        Mr = (0, nr.d)(qM),
        Or = (0, dM.useMemo)((() => {
          const MM = function(MM) {
            var rM, iM;
            const OM = Dr(MM);
            if (!OM || 0 === OM.length || OM.includes(MM)) return MM;
            const SM = QM.g.getItem((0, lM.n)(MM));
            if (SM && OM.includes(SM)) return SM;
            return null !== (rM = null === (iM = Lr.e[MM]) || void 0 === iM ? void 0 : iM.defaultListedVariation) && void 0 !== rM ? rM : OM[0]
          }(Mr.gameNameWithVariation);
          return MM === Mr.gameNameWithVariation ? Mr : {
            ...Mr,
            gameNameWithVariation: MM
          }
        }), [Mr]);
      (0, dM.useEffect)((() => {
        const MM = Mr.gameNameWithVariation;
        Or.gameNameWithVariation !== MM && MM !== (0, jr.Mb)(MM) && IM((0, YM.x)(Or.gameNameWithVariation), {
          replace: !0
        })
      }), [Or.gameNameWithVariation, Mr.gameNameWithVariation, IM]);
      const [hr, Jr] = (0, dM.useState)(""), Er = dM.useRef(null), [Ur, Gr] = (0, dM.useState)(), tr = (0, Sr.m)(Or.gameNameWithVariation), ur = (0, dM.useMemo)((() => tr ? null : function(MM, rM, iM) {
        var OM, SM;
        const aM = Lr.e[MM];
        return (0, pr.J)(aM) ? null : {
          listedVariations: Dr(MM),
          backgroundImage: (0, jM.m)(MM, (0, jM.d)(aM)),
          badges: (0, zM.filterBadges)(aM.badges),
          category: aM.type,
          title: iM(aM.title),
          variationTitle: aM.variationTitle ? iM(aM.variationTitle) : null,
          description: iM(aM.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== rM ? null !== (OM = rM[MM]) && void 0 !== OM ? OM : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: aM.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: aM.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (SM = aM.canCreateCustomLobbies) || void 0 === SM || SM,
          countdownInformation: (0, lM.j)(MM)
        }
      }(Or.gameNameWithVariation, NM, fM)), [tr, Or.gameNameWithVariation, NM, fM]), [Rr, kr] = (0, dM.useState)(!1), [Zr, or] = (0, dM.useState)((() => ZM ? sr(ZM, fM) : Wr)), Yr = null !== ur && void 0 !== ur ? ur : Zr, [Nr] = (0, dM.useState)(Yr === Wr), Ar = (0, SM.c)(Yr.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: xr,
        recentlyPlayedCustomLobbies: vr
      } = (0, dM.useMemo)((() => function(MM, rM, iM, OM) {
        var SM;
        const jM = MM => {
            const iM = (0, Sr.p)(MM),
              OM = rM.find((rM => "custom" === rM.type ? rM.schematicId === iM : rM.gameNameWithVariation === MM));
            return OM ? [...OM.recentLobbies] : []
          },
          aM = (0, zM.getRecentGameNameWithVariationLobbiesKey)(MM),
          PM = null !== (SM = QM.g.getItem(aM)) && void 0 !== SM ? SM : [],
          nM = [...jM(MM), ...PM],
          LM = [];
        for (const QM of nM)(0, mr.P)(QM) && !LM.includes(QM) && LM.push(QM);
        let mM = nM;
        if (iM) {
          const MM = jM("classic_worlds"),
            rM = nM.filter((rM => !MM.includes(rM)));
          mM = [...MM, ...rM]
        }
        const HM = [],
          hM = !1 === OM ? [] : mM;
        for (const QM of hM)(0, mr.P)(QM) || HM.includes(QM) || HM.push(QM);
        return {
          recentlyPlayedPublicLobbies: LM,
          recentlyPlayedCustomLobbies: HM
        }
      }(Or.gameNameWithVariation, vM, Yr.showWorldsInsteadOfCustomLobbies, Yr.canCreateCustomLobbies)), [Or.gameNameWithVariation, vM, Yr.showWorldsInsteadOfCustomLobbies, Yr.canCreateCustomLobbies]), [Fr, Br] = (0, dM.useState)(!0), [Xr, Ir] = (0, dM.useState)([]), [Kr, qr] = (0, dM.useState)(null), [Tr, Vr] = (0, dM.useState)("explore"), cr = (0, dM.useRef)(!1), Mi = (0, dM.useCallback)((MM => {
        (0, yM.unstable_batchedUpdates)((() => {
          Gr(MM), or((rM => ({
            ...sr(MM, fM),
            isFavourite: rM.isFavourite
          })))
        }))
      }), [fM]);
      (0, dM.useEffect)((() => {
        null === Qr.d.get("gameEntrySource") && (0, Qr.j)("gameInformationPageDirect")
      }), []);
      const ri = (0, dM.useRef)(null);
      (0, dM.useEffect)((() => {
        const MM = MM => {
            ri.current = MM.target instanceof Element ? MM.target.closest("a, button") : null
          },
          rM = MM => {
            "Tab" === MM.key && (ri.current = null)
          };
        return document.addEventListener("pointerdown", MM, !0), document.addEventListener("keydown", rM, !0), () => {
          document.removeEventListener("pointerdown", MM, !0), document.removeEventListener("keydown", rM, !0)
        }
      }), []), (0, CM.d)("Enter", (MM => {
        const rM = MM.target instanceof Element ? MM.target : null;
        if (MM.defaultPrevented || null !== rM && void 0 !== rM && rM.closest("input, textarea, select")) return;
        const iM = null === rM || void 0 === rM ? void 0 : rM.closest("a, button");
        iM && iM !== ri.current || (MM.preventDefault(), zi())
      })), (0, eM.e)(VM.navigateToHomePage);
      const ii = xr.length > 0 || vr.length > 0,
        Oi = !Yr.useRejoinLastLobbyButton || 0 === xr.length,
        Si = tr && null === Yr.ownerSocialPreviewWithoutLocation,
        ji = AM.getPlayerName() === (null === Ur || void 0 === Ur || null === (rM = Ur.owner) || void 0 === rM ? void 0 : rM.name),
        ai = null !== (iM = null === (aM = Yr.badges.find((MM => "event" === MM.type))) || void 0 === aM ? void 0 : aM.event) && void 0 !== iM ? iM : null,
        Pi = Oi ? mM.p : mM.e,
        ni = (0, DM.jsx)(LM.i, {
          tooltipInner: (0, DM.jsx)("div", {
            children: fM("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, DM.jsx)(Pi, {
            className: "GameInformationButton",
            padDefaultFocus: Oi,
            showPress: !0,
            onClick: () => {
              zi()
            },
            children: (0, DM.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Oi && (0, DM.jsxs)(DM.Fragment, {
                children: [(0, DM.jsx)(BM.b, {
                  name: "play"
                }), " "]
              }), fM("homePage:quickPlay")]
            })
          })
        });
      (0, dM.useEffect)((() => {
        if (!tr || xM) return;
        let MM = !0;
        const rM = (0, Sr.p)(Or.gameNameWithVariation);
        return uM.c.getGame(AM, rM).then((rM => {
          MM && Mi(rM)
        })).catch((rM => {
          console.error("Failed to get Custom Game information", rM), MM && (0, VM.navigateToHomePage)()
        })), uM.c.getFavouriteGames(AM).then((iM => {
          MM && or((MM => ({
            ...MM,
            isFavourite: iM.includes(rM)
          })))
        })).catch((rM => {
          console.error("Failed to get favourite games", rM), MM && kr(!0)
        })), () => {
          MM = !1
        }
      }), [tr, xM, Or.gameNameWithVariation, Mi, AM]);
      const Qi = !tr && null === ur;

      function zi(MM) {
        (0, gr.e)(), IM((0, EM.b)(Or.gameNameWithVariation, MM))
      }(0, dM.useEffect)((() => {
        Qi && (0, VM.navigateToHomePage)()
      }), [Qi]), (0, dM.useEffect)((() => {
        if (!1 === Yr.canCreateCustomLobbies) return;
        let MM = !0;
        return null !== Yr.showWorldsInsteadOfCustomLobbies && !1 === xM && (Br(!0), uM.c.getFavouriteLobbies(AM).then((MM => {
          qr(MM)
        })), uM.c.getOpenCustomLobbies(AM, {
          gameNameWithVariation: Yr.showWorldsInsteadOfCustomLobbies ? "classic" : Or.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === Tr,
          onlyFavouriteLobbies: "favourite" === Tr
        }).then((rM => {
          MM && (0, yM.unstable_batchedUpdates)((() => {
            Ir(rM), Br(!1)
          }))
        })).catch((rM => {
          console.error("Failed to get open custom lobbies", rM), MM && Br(!1)
        }))), () => {
          MM = !1
        }
      }), [xM, Or, Tr, Yr.showWorldsInsteadOfCustomLobbies, Yr.canCreateCustomLobbies, AM]);
      const Li = (0, dM.useCallback)((async MM => {
          try {
            if (!Kr) return;
            Kr.includes(MM) ? (uM.c.unfavouriteLobby(AM, MM), qr(Kr.filter((rM => rM !== MM)))) : (uM.c.favouriteLobby(AM, MM).catch((MM => {
              console.error("Failed to favourite lobby", MM)
            })), qr([...Kr, MM]))
          } catch (rM) {
            console.error("Failed to like lobby", rM)
          }
        }), [AM, Kr]),
        mi = (null === Ur || void 0 === Ur ? void 0 : Ur.schematicId) === (0, Sr.p)(Mr.gameNameWithVariation) ? Ur : null,
        Hi = mi && (0, YM.H)(Mr.gameNameWithVariation, (MM => fM(MM)), mi);
      (0, cM.g)(mi && (0, YM.x)(Mr.gameNameWithVariation, mi));
      const Ji = XM.featureFlags.canUseCustomLobbies && !0 === Yr.canCreateCustomLobbies,
        di = (0, DM.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, DM.jsx)(FM, {
            gameNameWithVariation: Or.gameNameWithVariation
          })
        });
      return (0, DM.jsx)(DM.Fragment, {
        children: (0, DM.jsxs)("article", {
          className: hM()("GameInformation", {
            GameInformationFadeIn: Nr,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (HM = Yr.countdownInformation) || void 0 === HM ? void 0 : HM.type)
          }),
          children: [Hi && (0, DM.jsx)(UM.c, {
            meta: Hi
          }), (0, DM.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, DM.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, DM.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, DM.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, DM.jsx)("div", {
                  className: hM()("GameInformationTopBackgroundImage", PM.k),
                  style: (0, PM.h)(Ar),
                  children: (0, DM.jsx)(PM.e, {
                    image: Ar
                  })
                })]
              }), (0, DM.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, DM.jsx)(yr.c, {}), (0, DM.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, DM.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, DM.jsxs)("div", {
                      className: hM()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: Si
                      }),
                      children: [Yr.badges.map((MM => (0, DM.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${MM.type}`,
                        children: (0, DM.jsx)(tM.b, {
                          badge: MM
                        })
                      }, MM.type))), tr && (0, DM.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, DM.jsx)(wM.b, {
                          text: (0, OM.U)({
                            type: "playerCrafted"
                          })
                        })
                      }), Yr.category && (0, DM.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, DM.jsx)(wM.b, {
                          text: [{
                            str: (0, OM.W)(Yr.category).toUpperCase()
                          }]
                        })
                      }), null !== Yr.ccu && (0, DM.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, DM.jsx)(BM.b, {
                          name: "user"
                        }), (0, mr.T)(Yr.ccu), " online"]
                      }), null !== Yr.ownerSocialPreviewWithoutLocation && (0, DM.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, DM.jsx)("span", {
                          children: "Made by"
                        }), (0, DM.jsx)(WM.f, {
                          playerSocialPreview: {
                            ...Yr.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), Si && (0, DM.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, DM.jsx)("span", {
                          children: "Made by"
                        }), (0, DM.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== Yr.favourites && (null !== Yr.isFavourite || tr && !Rr) && (0, DM.jsx)(mM.y, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== cr.current && (cr.current = !0, null !== Yr.isFavourite)) {
                              const MM = (0, Sr.p)(Or.gameNameWithVariation);
                              let rM;
                              Yr.isFavourite ? (rM = -1, uM.c.unfavouriteGame(AM, MM).catch((MM => {
                                console.error("Failed to get unfavourite game", MM)
                              })).finally((() => {
                                cr.current = !1
                              }))) : (rM = 1, uM.c.favouriteGame(AM, MM).catch((MM => {
                                console.error("Failed to get favourite game", MM)
                              })).finally((() => {
                                cr.current = !1
                              }))), or((MM => ({
                                ...MM,
                                isFavourite: !MM.isFavourite
                              }))), or((MM => ({
                                ...MM,
                                favourites: MM.favourites + rM
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (gM = Yr.isFavourite) && void 0 !== gM && gM,
                        disabled: null === Yr.isFavourite,
                        className: hM()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === Yr.isFavourite
                        })
                      }, null === Yr.isFavourite ? "pending" : "known"), tr && !Si && XM.featureFlags.useSocialFeatures && !ji && (0, DM.jsx)(er.e, {
                        targetType: "customGame",
                        targetId: (0, Sr.p)(Or.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (AM.playerHasRank("developer") || AM.playerHasRank("admin") && ji) && (0, DM.jsxs)(mM.p, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          IM((0, Pr.p)((0, ar.e)(Or.gameNameWithVariation, !0)))
                        },
                        children: [(0, DM.jsx)(BM.b, {
                          name: "star-christmas"
                        }), " ", fM("studio:viewInStudio")]
                      }), tr && AM.playerHasRank("developer") && (0, DM.jsxs)(mM.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, Hr.b)({
                            schematicId: (0, Sr.p)(Or.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, DM.jsx)(BM.b, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), tr && AM.playerHasRank("developer") && (0, DM.jsxs)(mM.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          rr.NotificationProvider.showCustomPopup({
                            body: () => (0, DM.jsx)(dr, {
                              schematicId: (0, Sr.p)(Or.gameNameWithVariation),
                              gameName: Yr.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, DM.jsx)(BM.b, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (RM = Yr.countdownInformation) || void 0 === RM ? void 0 : RM.type) && (0, DM.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, DM.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, DM.jsx)(bM.c, {
                            toTime: Yr.countdownInformation.countdownToTime
                          })]
                        }), (0, DM.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: Yr.countdownInformation.previewText
                        })]
                      })]
                    }, Si ? "pending" : "shown"), (0, DM.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, DM.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, DM.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [Yr.title, " ", Yr.variationTitle && (null === (pM = Lr.e[Or.gameNameWithVariation]) || void 0 === pM ? void 0 : pM.variationThumbnailUseBigRatio) && (0, DM.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: Yr.variationTitle
                          })]
                        })
                      }), Yr.listedVariations && Yr.listedVariations.length > 0 && (0, DM.jsx)("div", {
                        className: hM()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (sM = Lr.e[Or.gameNameWithVariation]) || void 0 === sM ? void 0 : sM.variationThumbnailUseBigRatio
                        }),
                        children: Yr.listedVariations.map((MM => {
                          var rM, iM;
                          return (0, DM.jsxs)(fr, {
                            variation: MM,
                            isSelected: Or.gameNameWithVariation === MM,
                            children: [null !== NM && (0, DM.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, DM.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, DM.jsx)(BM.b, {
                                  name: "user"
                                }), " ", (0, mr.T)(null !== (rM = NM[MM]) && void 0 !== rM ? rM : 0)]
                              })
                            }), (0, DM.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: fM(null !== (iM = Lr.e[MM].variationTitle) && void 0 !== iM ? iM : Lr.e[MM].title)
                            }), (0, DM.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, zM.filterBadges)(Lr.e[MM].badges).map((MM => (0, DM.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + MM.type,
                                children: (0, DM.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, DM.jsx)(tM.b, {
                                    badge: MM
                                  })
                                })
                              }, MM.type)))
                            })]
                          }, MM)
                        }))
                      })]
                    }), Yr.description && (0, DM.jsx)("p", {
                      className: "GameInformationDescription",
                      children: Yr.description
                    })]
                  }), (0, DM.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, DM.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Oi && (0, DM.jsx)(LM.i, {
                        tooltipInner: (0, DM.jsx)("div", {
                          children: fM("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, DM.jsx)(mM.p, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            zi(xr[0])
                          },
                          children: (0, DM.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, DM.jsx)(BM.b, {
                              name: "play"
                            }), " ", fM("homePage:rejoinLobbyNumber", {
                              number: xr[0]
                            })]
                          })
                        })
                      }), Oi && ni]
                    }), (0, DM.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Oi && ni, (0, DM.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, DM.jsx)(BM.b, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, DM.jsx)(JM.b, {
                          className: "JoinLobbyInput",
                          placeholderText: fM("homePage:lobbyName"),
                          maxLength: mr.Q,
                          domRef: Er,
                          onValueChange: MM => {
                            MM = (0, mr.vb)(MM), Jr(MM)
                          },
                          onEnter: () => {
                            0 === hr.length ? zi(xr[0]) : zi(hr)
                          }
                        }), (0, DM.jsx)(mM.e, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === hr.length ? zi(xr[0]) : zi(hr)
                          },
                          children: fM("general:join")
                        })]
                      })]
                    }), (0, DM.jsxs)("section", {
                      className: hM()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !ii
                      }),
                      children: [(0, DM.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, DM.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, DM.jsx)(BM.b, {
                            name: "clock-rotate-left"
                          }), ii && (0, DM.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: fM("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, DM.jsx)(br.b, {
                        lobbyGroups: [xr, vr],
                        onLobbyClick: MM => {
                          zi(MM)
                        },
                        keyPrefix: Or.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== ai && (0, DM.jsx)(oM, {
                eventName: ai
              })]
            }), Ji && (0, DM.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, DM.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, DM.jsxs)("div", {
                  className: hM()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === Yr.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === Yr.showWorldsInsteadOfCustomLobbies && (0, DM.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, DM.jsx)(BM.b, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, DM.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, DM.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), fM("game:worlds")]
                    })]
                  }), !1 === Yr.showWorldsInsteadOfCustomLobbies && (0, DM.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, DM.jsx)(BM.b, {
                      name: "joystick"
                    }), (0, DM.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, DM.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), fM("homePage:customLobbies")]
                    })]
                  }), (0, DM.jsx)(mM.V, {
                    onClick: () => {
                      Vr("explore")
                    },
                    active: "explore" === Tr,
                    children: fM("general:explore")
                  }), (0, DM.jsx)(mM.V, {
                    onClick: () => {
                      Vr("favourite")
                    },
                    active: "favourite" === Tr,
                    children: fM("homePage:favouriteLobbies")
                  }), (0, DM.jsx)(mM.V, {
                    onClick: () => {
                      Vr("owned")
                    },
                    active: "owned" === Tr,
                    children: fM("homePage:ownedLobbies")
                  })]
                }), (0, DM.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, DM.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, DM.jsx)(lr.c, {
                      label: "Create",
                      onClick: () => {
                        rr.NotificationProvider.showCustomPopup({
                          body: MM => (0, DM.jsx)(ir.CreateCustomLobby, {
                            gameNameWithVariation: Or.gameNameWithVariation,
                            close: MM
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === Fr && (0, DM.jsx)(lr.g, {}), !1 === Fr && (0, DM.jsx)(Cr, {
                      customLobbies: Xr,
                      favouriteLobbies: Kr,
                      toggleLikeLobby: Li,
                      showReport: XM.featureFlags.useSocialFeatures && "owned" !== Tr
                    })]
                  }), di]
                })]
              })
            })]
          }), !Ji && di]
        })
      })
    }

    function fr(MM) {
      let {
        variation: rM,
        isSelected: iM,
        children: OM
      } = MM;
      const nM = Lr.e[rM],
        zM = (0, jM.m)(rM, (0, jM.p)(nM)),
        LM = (0, SM.c)(zM),
        mM = (0, aM.e)([(0, jM.j)(rM, (0, jM.d)(nM))]);
      return (0, DM.jsxs)(VM.LinkPreserveSearch, {
        to: (0, YM.x)(rM),
        replace: !0,
        className: hM()("GameInformationVariation", PM.k, {
          SelectedGameInformationVariation: iM
        }),
        onClick: MM => {
          if (!(0, Mr.d)(MM)) return;
          const iM = (0, lM.n)(rM);
          QM.g.setItem(iM, rM)
        },
        onMouseEnter: mM.start,
        onMouseLeave: mM.cancel,
        onFocus: mM.start,
        onBlur: mM.cancel,
        style: (0, PM.h)(LM),
        children: [(0, DM.jsx)(PM.e, {
          image: LM
        }), OM]
      })
    }
  },
  6982: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => lM
    });
    var OM = iM(44),
      SM = iM(1520),
      jM = iM(1573),
      aM = iM(3881),
      PM = iM(1142),
      nM = iM(1396),
      QM = iM(1440),
      zM = iM(1398),
      LM = iM(1116),
      mM = iM.n(LM),
      HM = iM(6975),
      hM = iM(1303);

    function JM(MM) {
      let {
        info: rM,
        className: iM
      } = MM;
      const {
        statusText: OM,
        rowText: SM
      } = (0, HM.f)();
      return (0, hM.jsxs)("div", {
        className: mM()("GameApprovalInfoDetails", iM),
        children: [(0, hM.jsxs)("div", {
          className: mM()("GameApprovalInfoSummary", rM.overallPassed ? "Passed" : "Failed"),
          children: [(0, hM.jsx)(zM.b, {
            name: rM.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, hM.jsx)("span", {
            children: OM(rM.status)
          })]
        }), rM.rows.length > 0 && (0, hM.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: rM.rows.map((MM => {
            const {
              label: rM,
              value: iM
            } = SM(MM);
            return (0, hM.jsxs)("div", {
              className: mM()("GameApprovalInfoRow", MM.passed ? "Passed" : "Failed"),
              children: [(0, hM.jsx)(zM.b, {
                name: MM.passed ? "check" : "xmark"
              }), (0, hM.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, hM.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: rM
                }), null !== iM && (0, hM.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: iM
                })]
              })]
            }, MM.kind)
          }))
        })]
      })
    }
    var dM = iM(1188),
      yM = iM(1429);

    function lM(MM) {
      yM.NotificationProvider.showCustomPopup({
        body: () => (0, hM.jsx)(EM, {
          ...MM
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function EM(MM) {
      let {
        schematicId: rM,
        canOverride: iM,
        onApprovalChanged: LM
      } = MM;
      const {
        t: mM
      } = (0, dM.A)(), {
        userContext: HM
      } = (0, PM.b)(), yM = (0, aM.b)(), [lM, EM] = (0, OM.useState)(null), [UM, GM] = (0, OM.useState)(null), [CM, eM] = (0, OM.useState)(!1), bM = (0, OM.useCallback)((() => {
        GM(null), jM.c.getGameApprovalInfo(HM, rM).then((MM => {
          yM.current && EM(MM)
        })).catch((MM => {
          console.error("Failed to get game approval info", MM), yM.current && GM(mM("studio:approvalLoadFailed"))
        }))
      }), [HM, rM, yM, mM]);
      (0, OM.useEffect)((() => {
        bM()
      }), [bM]);
      const wM = MM => {
        CM || (eM(!0), jM.c.setGameApproval(HM, rM, MM).then((() => {
          null === LM || void 0 === LM || LM(), yM.current && bM()
        })).catch((MM => {
          console.error("Failed to set game approval", MM)
        })).finally((() => {
          yM.current && eM(!1)
        })))
      };
      return (0, hM.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, hM.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: mM("studio:approvalTitle")
        }), !lM && !UM && (0, hM.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, hM.jsx)(nM.d, {})
        }), UM && (0, hM.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: UM
        }), lM && (0, hM.jsxs)(hM.Fragment, {
          children: [(0, hM.jsx)(JM, {
            info: lM
          }), iM && (0, hM.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== lM.manualOverride && (0, hM.jsx)(QM.i, {
              tooltipInner: (0, hM.jsx)("div", {
                children: mM("studio:approvalApproveTooltip")
              }),
              children: (0, hM.jsxs)(SM.p, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  wM(!0)
                },
                disabled: CM,
                children: [(0, hM.jsx)(zM.b, {
                  name: "check"
                }), " ", mM("studio:approvalApprove")]
              })
            }), !1 !== lM.manualOverride && (0, hM.jsx)(QM.i, {
              tooltipInner: (0, hM.jsx)("div", {
                children: mM("studio:approvalDenyTooltip")
              }),
              children: (0, hM.jsxs)(SM.J, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  wM(!1)
                },
                disabled: CM,
                children: [(0, hM.jsx)(zM.b, {
                  name: "xmark"
                }), " ", mM("studio:approvalDeny")]
              })
            }), null !== lM.manualOverride && (0, hM.jsx)(QM.i, {
              tooltipInner: (0, hM.jsx)("div", {
                children: mM("studio:approvalClearOverrideTooltip")
              }),
              children: (0, hM.jsxs)(SM.e, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  wM(null)
                },
                disabled: CM,
                children: [(0, hM.jsx)(zM.b, {
                  name: "arrows-rotate"
                }), " ", mM("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6975: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM,
      f: () => aM
    });
    var OM = iM(332),
      SM = iM(1188);
    const jM = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function aM() {
      const {
        t: MM,
        selectedLanguage: rM
      } = (0, SM.A)();
      return {
        statusText: rM => MM(jM[rM]),
        rowText: iM => {
          const jM = (MM, iM) => (0, OM.db)((0, SM.n)(rM.code, MM), 0, iM);
          switch (iM.kind) {
            case "ownerAccountAge": {
              const rM = iM.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: MM("studio:approvalAccountAgeLabel"),
                value: MM(rM, {
                  age: jM(rM, iM.accountAgeMs),
                  days: iM.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: MM("studio:approvalSinceUnbannedLabel"), value: MM("studio:approvalSinceUnbannedValue", {
                  time: jM("studio:approvalSinceUnbannedValue", iM.sinceMs),
                  days: iM.minDays
                })
              };
            case "reportHold": {
              const {
                detail: rM
              } = iM;
              if (null === rM) return {
                label: MM("studio:approvalUnderInvestigation"),
                value: null
              };
              const OM = rM.weightedReporters.toFixed(1),
                SM = rM.threshold.toFixed(1),
                aM = MM("studio:approvalReportHoldLabel", {
                  hours: rM.windowHours
                });
              if (null === rM.heldUntil) return {
                label: aM,
                value: MM("studio:approvalReportHoldValue", {
                  weightedReporters: OM,
                  threshold: SM
                })
              };
              const PM = "studio:approvalReportHoldValueHeld";
              return {
                label: aM,
                value: MM(PM, {
                  weightedReporters: OM,
                  threshold: SM,
                  time: jM(PM, rM.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function PM(MM) {
      return null === MM.manualOverride && MM.rows.some((MM => "reportHold" === MM.kind && !MM.passed))
    }
  },
  35064: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM
    });
    var OM = iM(44),
      SM = iM(3839);

    function jM() {
      const [MM, rM] = (0, OM.useState)(!1);
      return (0, OM.useLayoutEffect)((() => {
        let MM = !0;
        return (0, SM.e)().then((() => {
          MM && rM(!0)
        })), () => {
          MM = !1
        }
      }), []), MM
    }
  },
  9525: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(1382),
      SM = iM(1229),
      jM = iM(625);

    function aM(MM) {
      return MM = function(MM, rM) {
        var iM;
        const OM = new URLSearchParams(rM),
          SM = OM.get("lobby"),
          jM = OM.get("vm"),
          aM = null !== (iM = SM) && void 0 !== iM ? iM : MM.lobbyName,
          PM = null !== jM && void 0 !== jM ? jM : MM.directJoinVmUrl;
        if (aM === MM.lobbyName && PM === MM.directJoinVmUrl) return MM;
        return {
          ...MM,
          lobbyName: aM,
          directJoinVmUrl: PM
        }
      }(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), MM = function(MM) {
        if ((0, jM.J)(MM.directJoinVmUrl)) return MM;
        const rM = (0, SM.bb)(MM.directJoinVmUrl);
        null === rM && (MM.directJoinVmUrl = void 0);
        return MM
      }(MM = function(MM) {
        if ((0, jM.J)(MM.gameNameWithVariation)) return MM;
        return MM.gameNameWithVariation = (0, OM.h)(MM.gameNameWithVariation), MM
      }(MM))
    }
  },
  9517: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      e: () => SM
    });
    let OM = !1;

    function SM() {
      OM = !0
    }

    function jM() {
      return OM
    }
  },
  37305: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      f: () => OM
    });
    const OM = "skyblockSkills",
      SM = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);