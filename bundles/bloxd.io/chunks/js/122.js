export const id = 122;
export const ids = [122, 396];
export const modules = {
  36345: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => yH
    });
    var tS = gS(369),
      bS = gS(3639),
      XS = gS(3676),
      xS = gS(3671),
      NS = gS(3665),
      qS = gS(1281),
      uS = gS(45),
      IS = gS(1844),
      fS = gS(1444),
      kS = gS(1528),
      aS = gS(1121),
      KS = gS.n(aS),
      jS = gS(1774),
      GS = gS(64),
      CS = gS(77),
      nS = gS(2475),
      PS = gS(1406),
      QS = gS(1712),
      DS = gS(1211),
      wS = gS(3549),
      hS = gS(4691),
      ZS = gS(3614),
      JS = gS(2031),
      OS = gS(3635),
      dS = gS(1851),
      cS = gS(1588),
      vS = gS(2273),
      ES = gS(1419),
      LS = gS(2725),
      YS = gS(5182),
      AS = gS(1181);
    const yS = 15e3,
      VS = 2500;

    function iS(SS) {
      var HS;
      let {
        eventName: gS
      } = SS;
      const {
        t: tS
      } = (0, qS.F)(), bS = dS.d[gS], [XS, xS] = (0, GS.useState)((() => Date.now() >= bS.endsAt.getTime())), [NS, uS] = (0, GS.useState)("overall"), IS = function(SS, HS) {
        const {
          userContext: gS,
          isUserContextUpdating: tS
        } = (0, DS.b)(), bS = `${SS}:${HS}`, [XS, xS] = (0, GS.useState)({
          requestKey: bS,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, GS.useEffect)((() => {
          if (tS) return;
          let XS, NS = !1;
          const qS = async () => {
            if ("visible" === document.visibilityState) try {
              const tS = await cS.b.getGameEventLeaderboard(gS, {
                event: SS,
                scope: HS
              });
              NS || xS({
                requestKey: bS,
                leaderboard: {
                  status: "loaded",
                  leaderboard: tS
                }
              })
            } catch {
              NS || xS((SS => SS.requestKey === bS && "loaded" === SS.leaderboard.status ? SS : {
                requestKey: bS,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            NS || (XS = setTimeout(qS, yS))
          };
          return qS(), () => {
            NS = !0, clearTimeout(XS)
          }
        }), [SS, HS, bS, gS, tS]), XS.requestKey === bS ? XS.leaderboard : {
          status: "loading"
        }
      }(gS, NS), fS = function(SS) {
        const HS = (0, GS.useRef)(null),
          gS = (0, GS.useRef)(0),
          tS = (0, GS.useRef)(),
          [bS, XS] = (0, GS.useState)({});
        return (0, GS.useEffect)((() => {
          const bS = null === SS || void 0 === SS ? void 0 : SS.entries;
          if (!bS) return;
          const xS = new Map(bS.map((SS => [SS.player.name, SS.value]))),
            NS = HS.current;
          if (HS.current = xS, null === NS) return;
          const qS = {};
          for (const [SS, HS] of xS) {
            const tS = NS.get(SS);
            void 0 !== tS && HS > tS && (qS[SS] = {
              amount: HS - tS,
              key: gS.current++
            })
          }
          0 !== Object.keys(qS).length && (XS(qS), clearTimeout(tS.current), tS.current = setTimeout((() => {
            XS({})
          }), VS))
        }), [SS]), (0, GS.useEffect)((() => () => {
          clearTimeout(tS.current)
        }), []), bS
      }("loaded" === IS.status ? IS.leaderboard : null), kS = function(SS) {
        const [HS, gS] = (0, GS.useState)(null), tS = "loaded" === SS.status ? SS.leaderboard.goalProgress : void 0;
        return (0, GS.useEffect)((() => {
          tS && gS(tS)
        }), [tS]), HS
      }(IS), aS = vS.g[`profileEffect_${bS.prizePack}`];
      if (XS) return null;
      const jS = "loaded" === IS.status ? IS.leaderboard : null,
        CS = null !== (HS = null === jS || void 0 === jS ? void 0 : jS.entries) && void 0 !== HS ? HS : null,
        nS = null !== jS && void 0 !== jS && jS.own && null !== CS && !CS.some((SS => SS.isOwn)) ? jS.own : null;
      return (0, AS.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, AS.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, AS.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, AS.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, AS.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, AS.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), tS("gameEvents:live")]
              }), (0, AS.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [tS("gameEvents:endsIn"), (0, AS.jsx)(ZS.d, {
                  toTime: bS.endsAt,
                  onReachEndOfCountdown: () => {
                    xS(!0)
                  }
                })]
              })]
            }), (0, AS.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: tS(bS.titleKey)
            }), (0, AS.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, AS.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [aS && (0, AS.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, AS.jsx)(aS, {})
                }), (0, AS.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, AS.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: tS("gameEvents:prize")
                  }), (0, AS.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: tS(bS.prizeNameKey)
                  })]
                })]
              }), (0, AS.jsx)(WS, {
                event: bS,
                progress: kS
              })]
            })]
          }), (0, AS.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, AS.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, AS.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: tS(bS.leaderboard.titleKey)
              }), (0, AS.jsx)(YS.d, {
                ariaLabel: tS("gameEvents:leaderboardScope"),
                options: dS.b.map((SS => ({
                  value: SS,
                  label: tS(`gameEvents:${SS}Scope`)
                }))),
                value: NS,
                onChange: uS
              })]
            }), "loading" === IS.status && (0, AS.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, AS.jsx)(ES.c, {})
            }), ("unavailable" === IS.status || "loaded" === IS.status && null === CS) && (0, AS.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: tS("gameEvents:leaderboardUnavailable")
            }), null !== CS && 0 === CS.length && (0, AS.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: tS("friends" === NS ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== CS && CS.length > 0 && (0, AS.jsx)("ol", {
              className: "GameEventPanelRows",
              children: CS.map((SS => {
                const HS = fS[SS.player.name];
                return (0, AS.jsxs)("li", {
                  className: KS()("GameEventPanelRow", {
                    GameEventPanelRowOwn: SS.isOwn,
                    GameEventPanelRowTop: SS.rank <= 3
                  }),
                  children: [(0, AS.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", SS.rank]
                  }), (0, AS.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, AS.jsx)(LS.g, {
                      playerSocialPreview: {
                        ...SS.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== HS && (0, AS.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", HS.amount.toLocaleString()]
                  }, HS.key), (0, AS.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: SS.value.toLocaleString()
                  })]
                }, SS.player.name)
              }))
            }), nS && (0, AS.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, AS.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", nS.rank.toLocaleString()]
              }), (0, AS.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: tS("gameEvents:yourPlace")
              }), (0, AS.jsx)("span", {
                className: "GameEventPanelScore",
                children: nS.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function WS(SS) {
      let {
        event: HS,
        progress: gS
      } = SS;
      const {
        t: tS
      } = (0, qS.F)(), bS = null !== gS && HS.prizeGoals.some(((SS, HS) => gS[HS] >= SS.target));
      return (0, AS.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, AS.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: tS(bS ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, AS.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: HS.prizeGoals.map(((SS, HS) => {
            const bS = null === gS ? null : Math.min(gS[HS], SS.target);
            return (0, AS.jsxs)(GS.Fragment, {
              children: [HS > 0 && (0, AS.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: tS("gameEvents:goalsOr")
              }), (0, AS.jsxs)("div", {
                className: KS()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: bS === SS.target
                }),
                children: [(0, AS.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: tS(SS.labelKey)
                }), (0, AS.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, AS.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== bS && void 0 !== bS ? bS : 0) / SS.target * 100 + "%"
                    }
                  }), null !== bS && (0, AS.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [bS.toLocaleString(), " / ", SS.target.toLocaleString()]
                  })]
                })]
              })]
            }, SS.board)
          }))
        })]
      })
    }
    var zS = gS(1647),
      US = gS(1689),
      pS = gS(1107),
      sS = gS(795),
      BS = gS(3608);

    function MS(SS) {
      let {
        gameNameWithVariation: HS
      } = SS;
      const gS = (0, zS.D)(HS),
        [tS, bS] = (0, GS.useState)(null);
      if ((0, GS.useEffect)((() => {
          if (!gS) return;
          let SS = !0;
          return (0, US.i)(gS).then((HS => {
            SS && bS(HS)
          })).catch((SS => {
            console.error(`Failed to load the page copy for ${gS.name}`, SS)
          })), () => {
            SS = !1
          }
        }), [gS]), !gS || !tS || tS.name !== gS.name) return null;
      const XS = (0, US.e)(tS),
        xS = new Set((0, pS.e)((0, sS.g)()).map((SS => (0, zS.w)(SS)))),
        NS = tS.similarGames.filter((SS => xS.has((0, zS.w)(SS))));
      return (0, AS.jsx)("div", {
        className: "GamePageContent",
        children: (0, AS.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, AS.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, AS.jsx)("h2", {
              children: XS.whatIs
            }), tS.whatIs.map((SS => (0, AS.jsx)("p", {
              children: SS
            }, SS)))]
          }), (0, AS.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, AS.jsx)("h2", {
              children: XS.howToPlay
            }), tS.howToPlay.map((SS => (0, AS.jsx)("p", {
              children: SS
            }, SS)))]
          }), (0, AS.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, AS.jsx)("h2", {
              children: XS.features
            }), (0, AS.jsx)("ul", {
              children: tS.features.map((SS => (0, AS.jsx)("li", {
                children: SS
              }, SS)))
            })]
          }), (0, AS.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, AS.jsx)("h2", {
              children: XS.tips
            }), (0, AS.jsx)("ul", {
              children: tS.tips.map((SS => (0, AS.jsx)("li", {
                children: SS
              }, SS)))
            })]
          }), (0, AS.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, AS.jsx)("h2", {
              children: XS.faq
            }), tS.faq.map((SS => {
              let {
                question: HS,
                answer: gS
              } = SS;
              return (0, AS.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, AS.jsx)("h3", {
                  children: HS
                }), (0, AS.jsx)("p", {
                  children: gS
                })]
              }, HS)
            }))]
          }), NS.length > 0 && (0, AS.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, AS.jsx)("h2", {
              children: XS.similarGames
            }), (0, AS.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: NS.map((SS => (0, AS.jsx)("li", {
                children: (0, AS.jsx)(BS.g, {
                  source: {
                    type: "game",
                    gameNameWithVariation: SS
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, SS)))
            })]
          })]
        })
      })
    }
    var FS = gS(1127),
      RS = gS(104),
      TS = gS(1216),
      oS = gS(34280),
      lS = gS(1749),
      mS = gS(1622),
      eS = gS(1608),
      rS = gS(1704),
      SH = gS(1541),
      HH = gS(1435),
      gH = gS(36353),
      tH = gS(1318),
      bH = gS(1087),
      XH = gS(387),
      xH = gS(1097),
      NH = gS(1641),
      qH = gS(9102),
      uH = gS(24),
      IH = gS(2641),
      fH = gS(830),
      kH = gS(1309),
      aH = gS(6713),
      KH = gS(3623);

    function jH(SS) {
      let {
        preview: HS,
        isBroken: gS
      } = SS;
      const tS = null === HS ? null : (0, XS.c)(HS, "small"),
        xS = (0, bS.f)(null !== tS && void 0 !== tS ? tS : XS.l);
      return null === HS ? (0, AS.jsx)("div", {
        className: KS()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: gS
        }),
        children: (0, AS.jsx)(FS.d, {
          name: gS ? "triangle-exclamation" : "star"
        })
      }) : (0, AS.jsx)("div", {
        className: KS()("FeaturedGamesPopupSlotThumbnail", NS.h),
        style: (0, NS.g)(xS),
        role: "img",
        "aria-label": HS.name,
        children: (0, AS.jsx)(NS.c, {
          image: xS
        })
      })
    }

    function GH(SS) {
      let {
        schematicId: HS,
        gameName: gS
      } = SS;
      const {
        userContext: bS
      } = (0, DS.b)(), XS = (0, KH.b)(), [xS, NS] = (0, GS.useState)(null), [qS, uS] = (0, GS.useState)(null), [IS, fS] = (0, GS.useState)(!1), aS = (0, GS.useCallback)((() => {
        uS(null), cS.b.getFeaturedGames(bS).then((SS => {
          XS.current && NS(SS.slots)
        })).catch((SS => {
          console.error("Failed to get featured games", SS), XS.current && uS("Failed to load featured games")
        }))
      }), [bS, XS]);
      (0, GS.useEffect)((() => {
        aS()
      }), [aS]);
      const KS = (SS, HS) => {
        IS || (fS(!0), cS.b.setFeaturedGame(bS, SS, HS).then((() => {
          XS.current && aS()
        })).catch((SS => {
          console.error("Failed to set featured game", SS), XS.current && uS("Failed to update the featured slot")
        })).finally((() => {
          XS.current && fS(!1)
        })))
      };
      return (0, AS.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, AS.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !xS && !qS && (0, AS.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, AS.jsx)(ES.c, {})
        }), qS && (0, AS.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: qS
        }), xS && (0, AS.jsxs)(AS.Fragment, {
          children: [(0, AS.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: xS.map((SS => {
              const gS = SS.schematicId === HS,
                bS = null === SS.schematicId,
                {
                  categoryGroup: XS
                } = tS.M[SS.slotId];
              return (0, AS.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, AS.jsx)(jH, {
                  preview: SS.preview,
                  isBroken: !bS
                }), (0, AS.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, AS.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, tS.ob)(XS), " \xb7 position", " ", (0, tS.O)(SS.slotId, tS.Vb) + 1, " of", " ", (0, tS.Sb)(XS, tS.Vb)]
                  }), bS && (0, AS.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !bS && null !== SS.preview && (0, AS.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: SS.preview.name
                  }), !bS && null === SS.preview && (0, AS.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, AS.jsx)(FS.d, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, AS.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [bS && (0, AS.jsxs)(kS.u, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      KS(SS.slotId, HS)
                    },
                    disabled: IS,
                    children: [(0, AS.jsx)(FS.d, {
                      name: "star"
                    }), " Feature here"]
                  }), !bS && !gS && (0, AS.jsxs)(kS.P, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      KS(SS.slotId, HS)
                    },
                    disabled: IS,
                    children: [(0, AS.jsx)(FS.d, {
                      name: "star"
                    }), " Replace"]
                  }), !bS && (0, AS.jsxs)(kS.L, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      KS(SS.slotId, null)
                    },
                    disabled: IS,
                    children: [(0, AS.jsx)(FS.d, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, SS.slotId)
            }))
          }), (0, AS.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var CH = gS(4791),
      nH = gS(4714),
      PH = gS(3577);
    const QH = 8,
      DH = 12;

    function wH(SS) {
      let {
        customLobbies: HS,
        favouriteLobbies: gS,
        toggleLikeLobby: tS,
        showReport: bS
      } = SS;
      const [XS, xS] = (0, GS.useState)(QH);
      return (0, GS.useEffect)((() => {
        if (XS >= HS.length) return;
        let SS = !0;
        return (0, PH.f)().then((() => {
          SS && xS(XS + DH)
        })), () => {
          SS = !1
        }
      }), [XS, HS.length]), (0, AS.jsx)(AS.Fragment, {
        children: HS.slice(0, XS).map((SS => (0, AS.jsx)(nH.f, {
          customLobby: SS,
          favouriteLobbies: gS,
          toggleLikeLobby: tS,
          showReport: bS
        }, SS.name)))
      })
    }
    var hH = gS(4723),
      ZH = gS(4745),
      JH = gS(4699),
      OH = gS(3700),
      dH = gS(9099),
      cH = gS(221);
    const vH = {
      skyblock: [gS(36381).e]
    };
    var EH = gS(680);
    const LH = {
      listedVariations: null,
      backgroundImage: XS.l,
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

    function YH(SS, HS) {
      const gS = fH.f[SS.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, XS.c)(SS, "large"),
        badges: [],
        category: SS.gameCategory,
        title: void 0 !== (null === gS || void 0 === gS ? void 0 : gS.title) ? HS(gS.title) : SS.name,
        variationTitle: null,
        description: void 0 !== (null === gS || void 0 === gS ? void 0 : gS.description) ? HS(gS.description) : SS.description,
        ownerSocialPreviewWithoutLocation: "owner" in SS ? SS.owner : null,
        ccu: SS.ccu,
        favourites: SS.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in SS ? SS.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function AH(SS) {
      var HS, gS, tS;
      return null !== (HS = null !== (gS = (0, cH.l)() ? function(SS) {
        for (const [HS, gS] of Object.entries(vH)) {
          const tS = [HS, ...gS.map((SS => (0, XH.Ib)(HS, SS)))];
          if (tS.includes(SS)) return tS
        }
        return null
      }(SS) : null) && void 0 !== gS ? gS : null === (tS = fH.d[SS]) || void 0 === tS ? void 0 : tS.listedVariations) && void 0 !== HS ? HS : null
    }

    function yH() {
      const {
        gameNameWithVariation: SS
      } = (0, mS.z)();
      if ((0, GS.useEffect)(OH.o, []), SS && (0, tH.p)(SS)) return (0, AS.jsx)(VH, {
        urlId: SS
      }, SS);
      const HS = SS && (0, bH.m)(SS) ? SS : "firstParty";
      return (0, AS.jsx)(iH, {}, HS)
    }

    function VH(SS) {
      let {
        urlId: HS
      } = SS;
      const {
        userContext: gS,
        isUserContextUpdating: tS
      } = (0, DS.b)(), bS = (0, GS.useMemo)((() => (0, lS.i)(HS)), [HS]);
      (0, GS.useMemo)((() => {
        if (null === bS) return;
        const SS = TS.userContextManager.peekCurrentUserContext();
        (null !== SS ? cS.b.getGame(SS, bS.schematicId) : TS.userContextManager.getCurrentUserContext().then((SS => cS.b.getGame(SS, bS.schematicId)))).catch((SS => {
          console.error(`Failed to get the custom game ${bS.schematicId}`, SS), (0, lS.h)(HS)
        }))
      }), [bS, HS]);
      const [XS, xS] = (0, GS.useState)(null), NS = (0, oS.e)();
      (0, GS.useEffect)((() => {
        if (null !== bS || tS) return;
        let SS = !0;
        return cS.b.getGameByUrlId(gS, HS).then((gS => {
          SS && xS({
            urlId: HS,
            game: gS
          })
        })).catch((gS => {
          console.error(`Failed to find the custom game with urlId ${HS}`, gS), SS && (0, eS.navigateToHomePage)()
        })), () => {
          SS = !1
        }
      }), [HS, bS, tS, gS]);
      const qS = null !== bS && void 0 !== bS ? bS : (null === XS || void 0 === XS ? void 0 : XS.urlId) === HS ? XS.game : null;
      return null === qS ? (0, AS.jsx)(ES.c, {}) : NS ? (0, AS.jsx)(iH, {
        gameNameWithVariation: (0, bH.y)(qS.schematicId),
        knownCustomGame: qS
      }, qS.schematicId) : null
    }

    function iH(SS) {
      var HS, gS, xS, aS, dS, vS, ES, YS;
      let {
        gameNameWithVariation: yS,
        knownCustomGame: VS = null
      } = SS;
      const {
        t: WS
      } = (0, qS.F)();
      (0, IH.h)();
      const US = (0, IH.k)(),
        {
          userContext: pS,
          isUserContextUpdating: sS
        } = (0, DS.b)(),
        BS = (0, JH.d)(),
        TS = (0, eS.useNavigatePreserveSearch)(),
        oS = (0, mS.z)(),
        lS = (0, GS.useMemo)((() => yS ? {
          gameNameWithVariation: yS
        } : oS), [yS, oS]),
        SH = (0, qH.b)(lS),
        tH = (0, GS.useMemo)((() => {
          const SS = function(SS) {
            var HS, gS;
            const tS = AH(SS);
            if (!tS || 0 === tS.length || tS.includes(SS)) return SS;
            const bS = uS.g.getItem((0, nS.j)(SS));
            if (bS && tS.includes(bS)) return bS;
            return null !== (HS = null === (gS = fH.d[SS]) || void 0 === gS ? void 0 : gS.defaultListedVariation) && void 0 !== HS ? HS : tS[0]
          }(SH.gameNameWithVariation);
          return SS === SH.gameNameWithVariation ? SH : {
            ...SH,
            gameNameWithVariation: SS
          }
        }), [SH]);
      (0, GS.useEffect)((() => {
        const SS = SH.gameNameWithVariation;
        tH.gameNameWithVariation !== SS && SS !== (0, XH.Kb)(SS) && TS((0, zS.z)(tH.gameNameWithVariation), {
          replace: !0
        })
      }), [tH.gameNameWithVariation, SH.gameNameWithVariation, TS]);
      const [KH, jH] = (0, GS.useState)(""), PH = GS.useRef(null), [QH, DH] = (0, GS.useState)(), OH = (0, bH.m)(tH.gameNameWithVariation), cH = (0, GS.useMemo)((() => OH ? null : function(SS, HS, gS) {
        var tS, bS;
        const xS = fH.d[SS];
        return (0, EH.K)(xS) ? null : {
          listedVariations: AH(SS),
          backgroundImage: (0, XS.g)(SS, (0, XS.b)(xS)),
          badges: (0, IS.filterBadges)(xS.badges),
          category: xS.type,
          title: gS(xS.title),
          variationTitle: xS.variationTitle ? gS(xS.variationTitle) : null,
          description: gS(xS.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== HS ? null !== (tS = HS[SS]) && void 0 !== tS ? tS : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: xS.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: xS.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (bS = xS.canCreateCustomLobbies) || void 0 === bS || bS,
          countdownInformation: (0, nS.f)(SS)
        }
      }(tH.gameNameWithVariation, US, WS)), [OH, tH.gameNameWithVariation, US, WS]), [vH, yH] = (0, GS.useState)(!1), [VH, iH] = (0, GS.useState)((() => VS ? YH(VS, WS) : LH)), zH = null !== cH && void 0 !== cH ? cH : VH, [UH] = (0, GS.useState)(zH === LH), pH = (0, bS.f)(zH.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: sH,
        recentlyPlayedCustomLobbies: BH
      } = (0, GS.useMemo)((() => function(SS, HS, gS, tS) {
        var bS;
        const XS = SS => {
            const gS = (0, bH.t)(SS),
              tS = HS.find((HS => "custom" === HS.type ? HS.schematicId === gS : HS.gameNameWithVariation === SS));
            return tS ? [...tS.recentLobbies] : []
          },
          xS = (0, IS.getRecentGameNameWithVariationLobbiesKey)(SS),
          NS = null !== (bS = uS.g.getItem(xS)) && void 0 !== bS ? bS : [],
          qS = [...XS(SS), ...NS],
          fS = [];
        for (const uS of qS)(0, kH.P)(uS) && !fS.includes(uS) && fS.push(uS);
        let kS = qS;
        if (gS) {
          const SS = XS("classic_worlds"),
            HS = qS.filter((HS => !SS.includes(HS)));
          kS = [...SS, ...HS]
        }
        const aS = [],
          KS = !1 === tS ? [] : kS;
        for (const uS of KS)(0, kH.P)(uS) || aS.includes(uS) || aS.push(uS);
        return {
          recentlyPlayedPublicLobbies: fS,
          recentlyPlayedCustomLobbies: aS
        }
      }(tH.gameNameWithVariation, BS, zH.showWorldsInsteadOfCustomLobbies, zH.canCreateCustomLobbies)), [tH.gameNameWithVariation, BS, zH.showWorldsInsteadOfCustomLobbies, zH.canCreateCustomLobbies]), [MH, FH] = (0, GS.useState)(!0), [RH, TH] = (0, GS.useState)([]), [oH, lH] = (0, GS.useState)(null), [mH, eH] = (0, GS.useState)("explore"), rH = (0, GS.useRef)(!1), Sg = (0, GS.useCallback)((SS => {
        (0, CS.unstable_batchedUpdates)((() => {
          DH(SS), iH((HS => ({
            ...YH(SS, WS),
            isFavourite: HS.isFavourite
          })))
        }))
      }), [WS]);
      (0, GS.useEffect)((() => {
        null === uH.b.get("gameEntrySource") && (0, uH.k)("gameInformationPageDirect")
      }), []);
      const Hg = (0, GS.useRef)(null);
      (0, GS.useEffect)((() => {
        const SS = SS => {
            Hg.current = SS.target instanceof Element ? SS.target.closest("a, button") : null
          },
          HS = SS => {
            "Tab" === SS.key && (Hg.current = null)
          };
        return document.addEventListener("pointerdown", SS, !0), document.addEventListener("keydown", HS, !0), () => {
          document.removeEventListener("pointerdown", SS, !0), document.removeEventListener("keydown", HS, !0)
        }
      }), []), (0, wS.d)("Enter", (SS => {
        const HS = SS.target instanceof Element ? SS.target : null;
        if (SS.defaultPrevented || null !== HS && void 0 !== HS && HS.closest("input, textarea, select")) return;
        const gS = null === HS || void 0 === HS ? void 0 : HS.closest("a, button");
        gS && gS !== Hg.current || (SS.preventDefault(), Ig())
      })), (0, hS.c)(eS.navigateToHomePage);
      const gg = sH.length > 0 || BH.length > 0,
        tg = !zH.useRejoinLastLobbyButton || 0 === sH.length,
        bg = OH && null === zH.ownerSocialPreviewWithoutLocation,
        Xg = pS.getPlayerName() === (null === QH || void 0 === QH || null === (HS = QH.owner) || void 0 === HS ? void 0 : HS.name),
        xg = null !== (gS = null === (xS = zH.badges.find((SS => "event" === SS.type))) || void 0 === xS ? void 0 : xS.event) && void 0 !== gS ? gS : null,
        Ng = tg ? kS.p : kS.g,
        qg = (0, AS.jsx)(fS.h, {
          tooltipInner: (0, AS.jsx)("div", {
            children: WS("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, AS.jsx)(Ng, {
            className: "GameInformationButton",
            padDefaultFocus: tg,
            showPress: !0,
            onClick: () => {
              Ig()
            },
            children: (0, AS.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [tg && (0, AS.jsxs)(AS.Fragment, {
                children: [(0, AS.jsx)(FS.d, {
                  name: "play"
                }), " "]
              }), WS("homePage:quickPlay")]
            })
          })
        });
      (0, GS.useEffect)((() => {
        if (!OH || sS) return;
        let SS = !0;
        const HS = (0, bH.t)(tH.gameNameWithVariation);
        return cS.b.getGame(pS, HS).then((HS => {
          SS && Sg(HS)
        })).catch((HS => {
          console.error("Failed to get Custom Game information", HS), SS && (0, eS.navigateToHomePage)()
        })), cS.b.getFavouriteGames(pS).then((gS => {
          SS && iH((SS => ({
            ...SS,
            isFavourite: gS.includes(HS)
          })))
        })).catch((HS => {
          console.error("Failed to get favourite games", HS), SS && yH(!0)
        })), () => {
          SS = !1
        }
      }), [OH, sS, tH.gameNameWithVariation, Sg, pS]);
      const ug = !OH && null === cH;

      function Ig(SS) {
        (0, dH.f)(), TS((0, PS.d)(tH.gameNameWithVariation, SS))
      }(0, GS.useEffect)((() => {
        ug && (0, eS.navigateToHomePage)()
      }), [ug]), (0, GS.useEffect)((() => {
        if (!1 === zH.canCreateCustomLobbies) return;
        let SS = !0;
        return null !== zH.showWorldsInsteadOfCustomLobbies && !1 === sS && (FH(!0), cS.b.getFavouriteLobbies(pS).then((SS => {
          lH(SS)
        })), cS.b.getOpenCustomLobbies(pS, {
          gameNameWithVariation: zH.showWorldsInsteadOfCustomLobbies ? "classic" : tH.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === mH,
          onlyFavouriteLobbies: "favourite" === mH
        }).then((HS => {
          SS && (0, CS.unstable_batchedUpdates)((() => {
            TH(HS), FH(!1)
          }))
        })).catch((HS => {
          console.error("Failed to get open custom lobbies", HS), SS && FH(!1)
        }))), () => {
          SS = !1
        }
      }), [sS, tH, mH, zH.showWorldsInsteadOfCustomLobbies, zH.canCreateCustomLobbies, pS]);
      const fg = (0, GS.useCallback)((async SS => {
          try {
            if (!oH) return;
            oH.includes(SS) ? (cS.b.unfavouriteLobby(pS, SS), lH(oH.filter((HS => HS !== SS)))) : (cS.b.favouriteLobby(pS, SS).catch((SS => {
              console.error("Failed to favourite lobby", SS)
            })), lH([...oH, SS]))
          } catch (HS) {
            console.error("Failed to like lobby", HS)
          }
        }), [pS, oH]),
        kg = (null === QH || void 0 === QH ? void 0 : QH.schematicId) === (0, bH.t)(SH.gameNameWithVariation) ? QH : null,
        ag = kg && (0, zS.E)(SH.gameNameWithVariation, (SS => WS(SS)), kg);
      (0, rS.f)(kg && (0, zS.z)(SH.gameNameWithVariation, kg));
      const Kg = RS.featureFlags.canUseCustomLobbies && !0 === zH.canCreateCustomLobbies,
        jg = (0, AS.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, AS.jsx)(MS, {
            gameNameWithVariation: tH.gameNameWithVariation
          })
        });
      return (0, AS.jsx)(AS.Fragment, {
        children: (0, AS.jsxs)("article", {
          className: KS()("GameInformation", {
            GameInformationFadeIn: UH,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (aS = zH.countdownInformation) || void 0 === aS ? void 0 : aS.type)
          }),
          children: [ag && (0, AS.jsx)(QS.e, {
            meta: ag
          }), (0, AS.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, AS.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, AS.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, AS.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, AS.jsx)("div", {
                  className: KS()("GameInformationTopBackgroundImage", NS.h),
                  style: (0, NS.g)(pH),
                  children: (0, AS.jsx)(NS.c, {
                    image: pH
                  })
                })]
              }), (0, AS.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, AS.jsx)(CH.d, {}), (0, AS.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, AS.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, AS.jsxs)("div", {
                      className: KS()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: bg
                      }),
                      children: [zH.badges.map((SS => (0, AS.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${SS.type}`,
                        children: (0, AS.jsx)(OS.e, {
                          badge: SS
                        })
                      }, SS.type))), OH && (0, AS.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, AS.jsx)(JS.c, {
                          text: (0, tS.eb)({
                            type: "playerCrafted"
                          })
                        })
                      }), zH.category && (0, AS.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, AS.jsx)(JS.c, {
                          text: [{
                            str: (0, tS.hb)(zH.category).toUpperCase()
                          }]
                        })
                      }), null !== zH.ccu && (0, AS.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, AS.jsx)(FS.d, {
                          name: "user"
                        }), (0, kH.R)(zH.ccu), " online"]
                      }), null !== zH.ownerSocialPreviewWithoutLocation && (0, AS.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, AS.jsx)("span", {
                          children: "Made by"
                        }), (0, AS.jsx)(LS.g, {
                          playerSocialPreview: {
                            ...zH.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), bg && (0, AS.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, AS.jsx)("span", {
                          children: "Made by"
                        }), (0, AS.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== zH.favourites && (null !== zH.isFavourite || OH && !vH) && (0, AS.jsx)(kS.w, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== rH.current && (rH.current = !0, null !== zH.isFavourite)) {
                              const SS = (0, bH.t)(tH.gameNameWithVariation);
                              let HS;
                              zH.isFavourite ? (HS = -1, cS.b.unfavouriteGame(pS, SS).catch((SS => {
                                console.error("Failed to get unfavourite game", SS)
                              })).finally((() => {
                                rH.current = !1
                              }))) : (HS = 1, cS.b.favouriteGame(pS, SS).catch((SS => {
                                console.error("Failed to get favourite game", SS)
                              })).finally((() => {
                                rH.current = !1
                              }))), iH((SS => ({
                                ...SS,
                                isFavourite: !SS.isFavourite
                              }))), iH((SS => ({
                                ...SS,
                                favourites: SS.favourites + HS
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (dS = zH.isFavourite) && void 0 !== dS && dS,
                        disabled: null === zH.isFavourite,
                        className: KS()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === zH.isFavourite
                        })
                      }, null === zH.isFavourite ? "pending" : "known"), OH && !bg && RS.featureFlags.useSocialFeatures && !Xg && (0, AS.jsx)(hH.d, {
                        targetType: "customGame",
                        targetId: (0, bH.t)(tH.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (pS.playerHasRank("developer") || pS.playerHasRank("admin") && Xg) && (0, AS.jsxs)(kS.p, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          TS((0, NH.p)((0, xH.c)(tH.gameNameWithVariation, !0)))
                        },
                        children: [(0, AS.jsx)(FS.d, {
                          name: "star-christmas"
                        }), " ", WS("studio:viewInStudio")]
                      }), OH && pS.playerHasRank("developer") && (0, AS.jsxs)(kS.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, aH.c)({
                            schematicId: (0, bH.t)(tH.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, AS.jsx)(FS.d, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), OH && pS.playerHasRank("developer") && (0, AS.jsxs)(kS.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          HH.NotificationProvider.showCustomPopup({
                            body: () => (0, AS.jsx)(GH, {
                              schematicId: (0, bH.t)(tH.gameNameWithVariation),
                              gameName: zH.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, AS.jsx)(FS.d, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (vS = zH.countdownInformation) || void 0 === vS ? void 0 : vS.type) && (0, AS.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, AS.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, AS.jsx)(ZS.d, {
                            toTime: zH.countdownInformation.countdownToTime
                          })]
                        }), (0, AS.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: zH.countdownInformation.previewText
                        })]
                      })]
                    }, bg ? "pending" : "shown"), (0, AS.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, AS.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, AS.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [zH.title, " ", zH.variationTitle && (null === (ES = fH.d[tH.gameNameWithVariation]) || void 0 === ES ? void 0 : ES.variationThumbnailUseBigRatio) && (0, AS.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: zH.variationTitle
                          })]
                        })
                      }), zH.listedVariations && zH.listedVariations.length > 0 && (0, AS.jsx)("div", {
                        className: KS()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (YS = fH.d[tH.gameNameWithVariation]) || void 0 === YS ? void 0 : YS.variationThumbnailUseBigRatio
                        }),
                        children: zH.listedVariations.map((SS => {
                          var HS, gS;
                          return (0, AS.jsxs)(WH, {
                            variation: SS,
                            isSelected: tH.gameNameWithVariation === SS,
                            children: [null !== US && (0, AS.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, AS.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, AS.jsx)(FS.d, {
                                  name: "user"
                                }), " ", (0, kH.R)(null !== (HS = US[SS]) && void 0 !== HS ? HS : 0)]
                              })
                            }), (0, AS.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: WS(null !== (gS = fH.d[SS].variationTitle) && void 0 !== gS ? gS : fH.d[SS].title)
                            }), (0, AS.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, IS.filterBadges)(fH.d[SS].badges).map((SS => (0, AS.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + SS.type,
                                children: (0, AS.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, AS.jsx)(OS.e, {
                                    badge: SS
                                  })
                                })
                              }, SS.type)))
                            })]
                          }, SS)
                        }))
                      })]
                    }), zH.description && (0, AS.jsx)("p", {
                      className: "GameInformationDescription",
                      children: zH.description
                    })]
                  }), (0, AS.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, AS.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!tg && (0, AS.jsx)(fS.h, {
                        tooltipInner: (0, AS.jsx)("div", {
                          children: WS("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, AS.jsx)(kS.p, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            Ig(sH[0])
                          },
                          children: (0, AS.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, AS.jsx)(FS.d, {
                              name: "play"
                            }), " ", WS("homePage:rejoinLobbyNumber", {
                              number: sH[0]
                            })]
                          })
                        })
                      }), tg && qg]
                    }), (0, AS.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!tg && qg, (0, AS.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, AS.jsx)(FS.d, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, AS.jsx)(jS.e, {
                          className: "JoinLobbyInput",
                          placeholderText: WS("homePage:lobbyName"),
                          maxLength: kH.Q,
                          domRef: PH,
                          onValueChange: SS => {
                            SS = (0, kH.ob)(SS), jH(SS)
                          },
                          onEnter: () => {
                            0 === KH.length ? Ig(sH[0]) : Ig(KH)
                          }
                        }), (0, AS.jsx)(kS.g, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === KH.length ? Ig(sH[0]) : Ig(KH)
                          },
                          children: WS("general:join")
                        })]
                      })]
                    }), (0, AS.jsxs)("section", {
                      className: KS()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !gg
                      }),
                      children: [(0, AS.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, AS.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, AS.jsx)(FS.d, {
                            name: "clock-rotate-left"
                          }), gg && (0, AS.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: WS("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, AS.jsx)(ZH.b, {
                        lobbyGroups: [sH, BH],
                        onLobbyClick: SS => {
                          Ig(SS)
                        },
                        keyPrefix: tH.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== xg && (0, AS.jsx)(iS, {
                eventName: xg
              })]
            }), Kg && (0, AS.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, AS.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, AS.jsxs)("div", {
                  className: KS()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === zH.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === zH.showWorldsInsteadOfCustomLobbies && (0, AS.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, AS.jsx)(FS.d, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, AS.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, AS.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), WS("game:worlds")]
                    })]
                  }), !1 === zH.showWorldsInsteadOfCustomLobbies && (0, AS.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, AS.jsx)(FS.d, {
                      name: "joystick"
                    }), (0, AS.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, AS.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), WS("homePage:customLobbies")]
                    })]
                  }), (0, AS.jsx)(kS.P, {
                    onClick: () => {
                      eH("explore")
                    },
                    active: "explore" === mH,
                    children: WS("general:explore")
                  }), (0, AS.jsx)(kS.P, {
                    onClick: () => {
                      eH("favourite")
                    },
                    active: "favourite" === mH,
                    children: WS("homePage:favouriteLobbies")
                  }), (0, AS.jsx)(kS.P, {
                    onClick: () => {
                      eH("owned")
                    },
                    active: "owned" === mH,
                    children: WS("homePage:ownedLobbies")
                  })]
                }), (0, AS.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, AS.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, AS.jsx)(nH.b, {
                      label: "Create",
                      onClick: () => {
                        HH.NotificationProvider.showCustomPopup({
                          body: SS => (0, AS.jsx)(gH.CreateCustomLobby, {
                            gameNameWithVariation: tH.gameNameWithVariation,
                            close: SS
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === MH && (0, AS.jsx)(nH.i, {}), !1 === MH && (0, AS.jsx)(wH, {
                      customLobbies: RH,
                      favouriteLobbies: oH,
                      toggleLikeLobby: fg,
                      showReport: RS.featureFlags.useSocialFeatures && "owned" !== mH
                    })]
                  }), jg]
                })]
              })
            })]
          }), !Kg && jg]
        })
      })
    }

    function WH(SS) {
      let {
        variation: HS,
        isSelected: gS,
        children: tS
      } = SS;
      const qS = fH.d[HS],
        IS = (0, XS.g)(HS, (0, XS.i)(qS)),
        fS = (0, bS.f)(IS),
        kS = (0, xS.g)([(0, XS.f)(HS, (0, XS.b)(qS))]);
      return (0, AS.jsxs)(eS.LinkPreserveSearch, {
        to: (0, zS.z)(HS),
        replace: !0,
        className: KS()("GameInformationVariation", NS.h, {
          SelectedGameInformationVariation: gS
        }),
        onClick: SS => {
          if (!(0, SH.b)(SS)) return;
          const gS = (0, nS.j)(HS);
          uS.g.setItem(gS, HS)
        },
        onMouseEnter: kS.start,
        onMouseLeave: kS.cancel,
        onFocus: kS.start,
        onBlur: kS.cancel,
        style: (0, NS.g)(fS),
        children: [(0, AS.jsx)(NS.c, {
          image: fS
        }), tS]
      })
    }
  },
  6713: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => nS
    });
    var tS = gS(64),
      bS = gS(1528),
      XS = gS(1588),
      xS = gS(3623),
      NS = gS(1211),
      qS = gS(1419),
      uS = gS(1444),
      IS = gS(1127),
      fS = gS(1121),
      kS = gS.n(fS),
      aS = gS(6705),
      KS = gS(1181);

    function jS(SS) {
      let {
        info: HS,
        className: gS
      } = SS;
      const {
        statusText: tS,
        rowText: bS
      } = (0, aS.f)();
      return (0, KS.jsxs)("div", {
        className: kS()("GameApprovalInfoDetails", gS),
        children: [(0, KS.jsxs)("div", {
          className: kS()("GameApprovalInfoSummary", HS.overallPassed ? "Passed" : "Failed"),
          children: [(0, KS.jsx)(IS.d, {
            name: HS.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, KS.jsx)("span", {
            children: tS(HS.status)
          })]
        }), HS.rows.length > 0 && (0, KS.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: HS.rows.map((SS => {
            const {
              label: HS,
              value: gS
            } = bS(SS);
            return (0, KS.jsxs)("div", {
              className: kS()("GameApprovalInfoRow", SS.passed ? "Passed" : "Failed"),
              children: [(0, KS.jsx)(IS.d, {
                name: SS.passed ? "check" : "xmark"
              }), (0, KS.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, KS.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: HS
                }), null !== gS && (0, KS.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: gS
                })]
              })]
            }, SS.kind)
          }))
        })]
      })
    }
    var GS = gS(1281),
      CS = gS(1435);

    function nS(SS) {
      CS.NotificationProvider.showCustomPopup({
        body: () => (0, KS.jsx)(PS, {
          ...SS
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function PS(SS) {
      let {
        schematicId: HS,
        canOverride: gS,
        onApprovalChanged: fS
      } = SS;
      const {
        t: kS
      } = (0, GS.F)(), {
        userContext: aS
      } = (0, NS.b)(), CS = (0, xS.b)(), [nS, PS] = (0, tS.useState)(null), [QS, DS] = (0, tS.useState)(null), [wS, hS] = (0, tS.useState)(!1), ZS = (0, tS.useCallback)((() => {
        DS(null), XS.b.getGameApprovalInfo(aS, HS).then((SS => {
          CS.current && PS(SS)
        })).catch((SS => {
          console.error("Failed to get game approval info", SS), CS.current && DS(kS("studio:approvalLoadFailed"))
        }))
      }), [aS, HS, CS, kS]);
      (0, tS.useEffect)((() => {
        ZS()
      }), [ZS]);
      const JS = SS => {
        wS || (hS(!0), XS.b.setGameApproval(aS, HS, SS).then((() => {
          null === fS || void 0 === fS || fS(), CS.current && ZS()
        })).catch((SS => {
          console.error("Failed to set game approval", SS)
        })).finally((() => {
          CS.current && hS(!1)
        })))
      };
      return (0, KS.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, KS.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: kS("studio:approvalTitle")
        }), !nS && !QS && (0, KS.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, KS.jsx)(qS.c, {})
        }), QS && (0, KS.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: QS
        }), nS && (0, KS.jsxs)(KS.Fragment, {
          children: [(0, KS.jsx)(jS, {
            info: nS
          }), gS && (0, KS.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== nS.manualOverride && (0, KS.jsx)(uS.h, {
              tooltipInner: (0, KS.jsx)("div", {
                children: kS("studio:approvalApproveTooltip")
              }),
              children: (0, KS.jsxs)(bS.p, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  JS(!0)
                },
                disabled: wS,
                children: [(0, KS.jsx)(IS.d, {
                  name: "check"
                }), " ", kS("studio:approvalApprove")]
              })
            }), !1 !== nS.manualOverride && (0, KS.jsx)(uS.h, {
              tooltipInner: (0, KS.jsx)("div", {
                children: kS("studio:approvalDenyTooltip")
              }),
              children: (0, KS.jsxs)(bS.L, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  JS(!1)
                },
                disabled: wS,
                children: [(0, KS.jsx)(IS.d, {
                  name: "xmark"
                }), " ", kS("studio:approvalDeny")]
              })
            }), null !== nS.manualOverride && (0, KS.jsx)(uS.h, {
              tooltipInner: (0, KS.jsx)("div", {
                children: kS("studio:approvalClearOverrideTooltip")
              }),
              children: (0, KS.jsxs)(bS.g, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  JS(null)
                },
                disabled: wS,
                children: [(0, KS.jsx)(IS.d, {
                  name: "arrows-rotate"
                }), " ", kS("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6705: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS,
      f: () => xS
    });
    var tS = gS(387),
      bS = gS(1281);
    const XS = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function xS() {
      const {
        t: SS,
        selectedLanguage: HS
      } = (0, bS.F)();
      return {
        statusText: HS => SS(XS[HS]),
        rowText: gS => {
          const XS = (SS, gS) => (0, tS.W)((0, bS.q)(HS.code, SS), 0, gS);
          switch (gS.kind) {
            case "ownerAccountAge": {
              const HS = gS.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: SS("studio:approvalAccountAgeLabel"),
                value: SS(HS, {
                  age: XS(HS, gS.accountAgeMs),
                  days: gS.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: SS("studio:approvalSinceUnbannedLabel"), value: SS("studio:approvalSinceUnbannedValue", {
                  time: XS("studio:approvalSinceUnbannedValue", gS.sinceMs),
                  days: gS.minDays
                })
              };
            case "reportHold": {
              const {
                detail: HS
              } = gS;
              if (null === HS) return {
                label: SS("studio:approvalUnderInvestigation"),
                value: null
              };
              const tS = HS.weightedReporters.toFixed(1),
                bS = HS.threshold.toFixed(1),
                xS = SS("studio:approvalReportHoldLabel", {
                  hours: HS.windowHours
                });
              if (null === HS.heldUntil) return {
                label: xS,
                value: SS("studio:approvalReportHoldValue", {
                  weightedReporters: tS,
                  threshold: bS
                })
              };
              const NS = "studio:approvalReportHoldValueHeld";
              return {
                label: xS,
                value: SS(NS, {
                  weightedReporters: tS,
                  threshold: bS,
                  time: XS(NS, HS.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function NS(SS) {
      return null === SS.manualOverride && SS.rows.some((SS => "reportHold" === SS.kind && !SS.passed))
    }
  },
  34280: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS
    });
    var tS = gS(64),
      bS = gS(3577);

    function XS() {
      const [SS, HS] = (0, tS.useState)(!1);
      return (0, tS.useLayoutEffect)((() => {
        let SS = !0;
        return (0, bS.f)().then((() => {
          SS && HS(!0)
        })), () => {
          SS = !1
        }
      }), []), SS
    }
  },
  9102: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    var tS = gS(1406),
      bS = gS(1309),
      XS = gS(680);

    function xS(SS) {
      return SS = function(SS, HS) {
        var gS;
        const tS = new URLSearchParams(HS),
          bS = tS.get("lobby"),
          XS = tS.get("vm"),
          xS = null !== (gS = bS) && void 0 !== gS ? gS : SS.lobbyName,
          NS = null !== XS && void 0 !== XS ? XS : SS.directJoinVmUrl;
        if (xS === SS.lobbyName && NS === SS.directJoinVmUrl) return SS;
        return {
          ...SS,
          lobbyName: xS,
          directJoinVmUrl: NS
        }
      }(SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), SS = function(SS) {
        if ((0, XS.K)(SS.directJoinVmUrl)) return SS;
        const HS = (0, bS.$)(SS.directJoinVmUrl);
        null === HS && (SS.directJoinVmUrl = void 0);
        return SS
      }(SS = function(SS) {
        if ((0, XS.K)(SS.gameNameWithVariation)) return SS;
        return SS.gameNameWithVariation = (0, tS.i)(SS.gameNameWithVariation), SS
      }(SS))
    }
  },
  9099: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      f: () => bS
    });
    let tS = !1;

    function bS() {
      tS = !0
    }

    function XS() {
      return tS
    }
  },
  36381: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS,
      i: () => tS
    });
    const tS = "skyblockSkills",
      bS = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);