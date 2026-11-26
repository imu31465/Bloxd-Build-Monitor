export const id = 135;
export const ids = [135, 705];
export const modules = {
  37482: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => ie
    });
    var JV = xV(364),
      YV = xV(3942),
      UV = xV(3974),
      yV = xV(3971),
      pV = xV(3967),
      QV = xV(1220),
      nV = xV(40),
      wV = xV(1838),
      ZV = xV(1446),
      vV = xV(1551),
      rV = xV(1146),
      kV = xV.n(rV),
      bV = xV(1772),
      EV = xV(62),
      BV = xV(78),
      jV = xV(2517),
      qV = xV(1397),
      tV = xV(1708),
      FV = xV(1168),
      TV = xV(3853),
      PV = xV(5031),
      AV = xV(2866),
      NV = xV(2021),
      XV = xV(3935),
      MV = xV(1844),
      zV = xV(1603),
      GV = xV(2298),
      WV = xV(1408),
      RV = xV(2903),
      gV = xV(5529),
      DV = xV(1321);
    const iV = 15e3,
      CV = 2500;

    function aV(VV) {
      var eV;
      let {
        eventName: xV
      } = VV;
      const {
        t: JV
      } = (0, QV.A)(), YV = MV.g[xV], [UV, yV] = (0, EV.useState)((() => Date.now() >= YV.endsAt.getTime())), [pV, nV] = (0, EV.useState)("overall"), wV = function(VV, eV) {
        const {
          userContext: xV,
          isUserContextUpdating: JV
        } = (0, FV.d)(), YV = `${VV}:${eV}`, [UV, yV] = (0, EV.useState)({
          requestKey: YV,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, EV.useEffect)((() => {
          if (JV) return;
          let UV, pV = !1;
          const QV = async () => {
            if ("visible" === document.visibilityState) try {
              const JV = await zV.b.getGameEventLeaderboard(xV, {
                event: VV,
                scope: eV
              });
              pV || yV({
                requestKey: YV,
                leaderboard: {
                  status: "loaded",
                  leaderboard: JV
                }
              })
            } catch {
              pV || yV((VV => VV.requestKey === YV && "loaded" === VV.leaderboard.status ? VV : {
                requestKey: YV,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            pV || (UV = setTimeout(QV, iV))
          };
          return QV(), () => {
            pV = !0, clearTimeout(UV)
          }
        }), [VV, eV, YV, xV, JV]), UV.requestKey === YV ? UV.leaderboard : {
          status: "loading"
        }
      }(xV, pV), ZV = function(VV) {
        const eV = (0, EV.useRef)(null),
          xV = (0, EV.useRef)(0),
          JV = (0, EV.useRef)(),
          [YV, UV] = (0, EV.useState)({});
        return (0, EV.useEffect)((() => {
          const YV = null === VV || void 0 === VV ? void 0 : VV.entries;
          if (!YV) return;
          const yV = new Map(YV.map((VV => [VV.player.name, VV.value]))),
            pV = eV.current;
          if (eV.current = yV, null === pV) return;
          const QV = {};
          for (const [VV, eV] of yV) {
            const JV = pV.get(VV);
            void 0 !== JV && eV > JV && (QV[VV] = {
              amount: eV - JV,
              key: xV.current++
            })
          }
          0 !== Object.keys(QV).length && (UV(QV), clearTimeout(JV.current), JV.current = setTimeout((() => {
            UV({})
          }), CV))
        }), [VV]), (0, EV.useEffect)((() => () => {
          clearTimeout(JV.current)
        }), []), YV
      }("loaded" === wV.status ? wV.leaderboard : null), vV = function(VV) {
        const [eV, xV] = (0, EV.useState)(null), JV = "loaded" === VV.status ? VV.leaderboard.goalProgress : void 0;
        return (0, EV.useEffect)((() => {
          JV && xV(JV)
        }), [JV]), eV
      }(wV), rV = GV.f[`profileEffect_${YV.prizePack}`];
      if (UV) return null;
      const bV = "loaded" === wV.status ? wV.leaderboard : null,
        BV = null !== (eV = null === bV || void 0 === bV ? void 0 : bV.entries) && void 0 !== eV ? eV : null,
        jV = null !== bV && void 0 !== bV && bV.own && null !== BV && !BV.some((VV => VV.isOwn)) ? bV.own : null;
      return (0, DV.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, DV.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, DV.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, DV.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, DV.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, DV.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), JV("gameEvents:live")]
              }), (0, DV.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [JV("gameEvents:endsIn"), (0, DV.jsx)(AV.d, {
                  toTime: YV.endsAt,
                  onReachEndOfCountdown: () => {
                    yV(!0)
                  }
                })]
              })]
            }), (0, DV.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: JV(YV.titleKey)
            }), (0, DV.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, DV.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [rV && (0, DV.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, DV.jsx)(rV, {})
                }), (0, DV.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, DV.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: JV("gameEvents:prize")
                  }), (0, DV.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: JV(YV.prizeNameKey)
                  })]
                })]
              }), (0, DV.jsx)(oV, {
                event: YV,
                progress: vV
              })]
            })]
          }), (0, DV.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, DV.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, DV.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: JV(YV.leaderboard.titleKey)
              }), (0, DV.jsx)(gV.b, {
                ariaLabel: JV("gameEvents:leaderboardScope"),
                options: MV.c.map((VV => ({
                  value: VV,
                  label: JV(`gameEvents:${VV}Scope`)
                }))),
                value: pV,
                onChange: nV
              })]
            }), "loading" === wV.status && (0, DV.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, DV.jsx)(WV.d, {})
            }), ("unavailable" === wV.status || "loaded" === wV.status && null === BV) && (0, DV.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: JV("gameEvents:leaderboardUnavailable")
            }), null !== BV && 0 === BV.length && (0, DV.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: JV("friends" === pV ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== BV && BV.length > 0 && (0, DV.jsx)("ol", {
              className: "GameEventPanelRows",
              children: BV.map((VV => {
                const eV = ZV[VV.player.name];
                return (0, DV.jsxs)("li", {
                  className: kV()("GameEventPanelRow", {
                    GameEventPanelRowOwn: VV.isOwn,
                    GameEventPanelRowTop: VV.rank <= 3
                  }),
                  children: [(0, DV.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", VV.rank]
                  }), (0, DV.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, DV.jsx)(RV.f, {
                      playerSocialPreview: {
                        ...VV.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== eV && (0, DV.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", eV.amount.toLocaleString()]
                  }, eV.key), (0, DV.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: VV.value.toLocaleString()
                  })]
                }, VV.player.name)
              }))
            }), jV && (0, DV.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, DV.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", jV.rank.toLocaleString()]
              }), (0, DV.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: JV("gameEvents:yourPlace")
              }), (0, DV.jsx)("span", {
                className: "GameEventPanelScore",
                children: jV.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function oV(VV) {
      let {
        event: eV,
        progress: xV
      } = VV;
      const {
        t: JV
      } = (0, QV.A)(), YV = null !== xV && eV.prizeGoals.some(((VV, eV) => xV[eV] >= VV.target));
      return (0, DV.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, DV.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: JV(YV ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, DV.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: eV.prizeGoals.map(((VV, eV) => {
            const YV = null === xV ? null : Math.min(xV[eV], VV.target);
            return (0, DV.jsxs)(EV.Fragment, {
              children: [eV > 0 && (0, DV.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: JV("gameEvents:goalsOr")
              }), (0, DV.jsxs)("div", {
                className: kV()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: YV === VV.target
                }),
                children: [(0, DV.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: JV(VV.labelKey)
                }), (0, DV.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, DV.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== YV && void 0 !== YV ? YV : 0) / VV.target * 100 + "%"
                    }
                  }), null !== YV && (0, DV.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [YV.toLocaleString(), " / ", VV.target.toLocaleString()]
                  })]
                })]
              })]
            }, VV.board)
          }))
        })]
      })
    }
    var cV = xV(1643),
      hV = xV(1700),
      lV = xV(1133),
      LV = xV(780),
      fV = xV(3922);

    function mV(VV) {
      let {
        gameNameWithVariation: eV
      } = VV;
      const xV = (0, cV.z)(eV),
        [JV, YV] = (0, EV.useState)(null);
      if ((0, EV.useEffect)((() => {
          if (!xV) return;
          let VV = !0;
          return (0, hV.i)(xV).then((eV => {
            VV && YV(eV)
          })).catch((VV => {
            console.error(`Failed to load the page copy for ${xV.name}`, VV)
          })), () => {
            VV = !1
          }
        }), [xV]), !xV || !JV || JV.name !== xV.name) return null;
      const UV = (0, hV.g)(JV),
        yV = new Set((0, lV.b)((0, LV.h)()).map((VV => (0, cV.v)(VV)))),
        pV = JV.similarGames.filter((VV => yV.has((0, cV.v)(VV))));
      return (0, DV.jsx)("div", {
        className: "GamePageContent",
        children: (0, DV.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, DV.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, DV.jsx)("h2", {
              children: UV.whatIs
            }), JV.whatIs.map((VV => (0, DV.jsx)("p", {
              children: VV
            }, VV)))]
          }), (0, DV.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, DV.jsx)("h2", {
              children: UV.howToPlay
            }), JV.howToPlay.map((VV => (0, DV.jsx)("p", {
              children: VV
            }, VV)))]
          }), (0, DV.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, DV.jsx)("h2", {
              children: UV.features
            }), (0, DV.jsx)("ul", {
              children: JV.features.map((VV => (0, DV.jsx)("li", {
                children: VV
              }, VV)))
            })]
          }), (0, DV.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, DV.jsx)("h2", {
              children: UV.tips
            }), (0, DV.jsx)("ul", {
              children: JV.tips.map((VV => (0, DV.jsx)("li", {
                children: VV
              }, VV)))
            })]
          }), (0, DV.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, DV.jsx)("h2", {
              children: UV.faq
            }), JV.faq.map((VV => {
              let {
                question: eV,
                answer: xV
              } = VV;
              return (0, DV.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, DV.jsx)("h3", {
                  children: eV
                }), (0, DV.jsx)("p", {
                  children: xV
                })]
              }, eV)
            }))]
          }), pV.length > 0 && (0, DV.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, DV.jsx)("h2", {
              children: UV.similarGames
            }), (0, DV.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: pV.map((VV => (0, DV.jsx)("li", {
                children: (0, DV.jsx)(fV.g, {
                  source: {
                    type: "game",
                    gameNameWithVariation: VV
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, VV)))
            })]
          })]
        })
      })
    }
    var KV = xV(1414),
      HV = xV(99),
      uV = xV(1173),
      sV = xV(35346),
      SV = xV(1745),
      IV = xV(1625),
      dV = xV(1612),
      OV = xV(1704),
      Ve = xV(1565),
      ee = xV(1439),
      xe = xV(37486),
      Je = xV(1267),
      Ye = xV(1099),
      Ue = xV(375),
      ye = xV(1117),
      pe = xV(1639),
      Qe = xV(9541),
      ne = xV(27),
      we = xV(2777),
      Ze = xV(812),
      ve = xV(1252),
      re = xV(7064),
      ke = xV(3931);

    function be(VV) {
      let {
        preview: eV,
        isBroken: xV
      } = VV;
      const JV = null === eV ? null : (0, UV.g)(eV, "small"),
        yV = (0, YV.d)(null !== JV && void 0 !== JV ? JV : UV.q);
      return null === eV ? (0, DV.jsx)("div", {
        className: kV()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: xV
        }),
        children: (0, DV.jsx)(KV.b, {
          name: xV ? "triangle-exclamation" : "star"
        })
      }) : (0, DV.jsx)("div", {
        className: kV()("FeaturedGamesPopupSlotThumbnail", pV.i),
        style: (0, pV.h)(yV),
        role: "img",
        "aria-label": eV.name,
        children: (0, DV.jsx)(pV.e, {
          image: yV
        })
      })
    }

    function Ee(VV) {
      let {
        schematicId: eV,
        gameName: xV
      } = VV;
      const {
        userContext: YV
      } = (0, FV.d)(), UV = (0, ke.e)(), [yV, pV] = (0, EV.useState)(null), [QV, nV] = (0, EV.useState)(null), [wV, ZV] = (0, EV.useState)(!1), rV = (0, EV.useCallback)((() => {
        nV(null), zV.b.getFeaturedGames(YV).then((VV => {
          UV.current && pV(VV.slots)
        })).catch((VV => {
          console.error("Failed to get featured games", VV), UV.current && nV("Failed to load featured games")
        }))
      }), [YV, UV]);
      (0, EV.useEffect)((() => {
        rV()
      }), [rV]);
      const kV = (VV, eV) => {
        wV || (ZV(!0), zV.b.setFeaturedGame(YV, VV, eV).then((() => {
          UV.current && rV()
        })).catch((VV => {
          console.error("Failed to set featured game", VV), UV.current && nV("Failed to update the featured slot")
        })).finally((() => {
          UV.current && ZV(!1)
        })))
      };
      return (0, DV.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, DV.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !yV && !QV && (0, DV.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, DV.jsx)(WV.d, {})
        }), QV && (0, DV.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: QV
        }), yV && (0, DV.jsxs)(DV.Fragment, {
          children: [(0, DV.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: yV.map((VV => {
              const xV = VV.schematicId === eV,
                YV = null === VV.schematicId,
                {
                  categoryGroup: UV
                } = JV.K[VV.slotId];
              return (0, DV.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, DV.jsx)(be, {
                  preview: VV.preview,
                  isBroken: !YV
                }), (0, DV.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, DV.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, JV.lb)(UV), " \xb7 position", " ", (0, JV.O)(VV.slotId, JV.Nb) + 1, " of", " ", (0, JV.Lb)(UV, JV.Nb)]
                  }), YV && (0, DV.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !YV && null !== VV.preview && (0, DV.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: VV.preview.name
                  }), !YV && null === VV.preview && (0, DV.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, DV.jsx)(KV.b, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, DV.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [YV && (0, DV.jsxs)(vV.q, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      kV(VV.slotId, eV)
                    },
                    disabled: wV,
                    children: [(0, DV.jsx)(KV.b, {
                      name: "star"
                    }), " Feature here"]
                  }), !YV && !xV && (0, DV.jsxs)(vV.M, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      kV(VV.slotId, eV)
                    },
                    disabled: wV,
                    children: [(0, DV.jsx)(KV.b, {
                      name: "star"
                    }), " Replace"]
                  }), !YV && (0, DV.jsxs)(vV.E, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      kV(VV.slotId, null)
                    },
                    disabled: wV,
                    children: [(0, DV.jsx)(KV.b, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, VV.slotId)
            }))
          }), (0, DV.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var Be = xV(5157),
      je = xV(5062),
      qe = xV(3886);
    const te = 8,
      Fe = 12;

    function Te(VV) {
      let {
        customLobbies: eV,
        favouriteLobbies: xV,
        toggleLikeLobby: JV,
        showReport: YV
      } = VV;
      const [UV, yV] = (0, EV.useState)(te);
      return (0, EV.useEffect)((() => {
        if (UV >= eV.length) return;
        let VV = !0;
        return (0, qe.f)().then((() => {
          VV && yV(UV + Fe)
        })), () => {
          VV = !1
        }
      }), [UV, eV.length]), (0, DV.jsx)(DV.Fragment, {
        children: eV.slice(0, UV).map((VV => (0, DV.jsx)(je.d, {
          customLobby: VV,
          favouriteLobbies: xV,
          toggleLikeLobby: JV,
          showReport: YV
        }, VV.name)))
      })
    }
    var Pe = xV(5065),
      Ae = xV(5087),
      Ne = xV(5045),
      Xe = xV(3995),
      Me = xV(9532),
      ze = xV(228);
    const Ge = {
      skyblock: [xV(37507).e]
    };
    var We = xV(657);
    const Re = {
      listedVariations: null,
      backgroundImage: UV.q,
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

    function ge(VV, eV) {
      const xV = Ze.h[VV.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, UV.g)(VV, "large"),
        badges: [],
        category: VV.gameCategory,
        title: void 0 !== (null === xV || void 0 === xV ? void 0 : xV.title) ? eV(xV.title) : VV.name,
        variationTitle: null,
        description: void 0 !== (null === xV || void 0 === xV ? void 0 : xV.description) ? eV(xV.description) : VV.description,
        ownerSocialPreviewWithoutLocation: "owner" in VV ? VV.owner : null,
        ccu: VV.ccu,
        favourites: VV.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in VV ? VV.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function De(VV) {
      var eV, xV, JV;
      return null !== (eV = null !== (xV = (0, ze.l)() ? function(VV) {
        for (const [eV, xV] of Object.entries(Ge)) {
          const JV = [eV, ...xV.map((VV => (0, Ue.Mb)(eV, VV)))];
          if (JV.includes(VV)) return JV
        }
        return null
      }(VV) : null) && void 0 !== xV ? xV : null === (JV = Ze.e[VV]) || void 0 === JV ? void 0 : JV.listedVariations) && void 0 !== eV ? eV : null
    }

    function ie() {
      const {
        gameNameWithVariation: VV
      } = (0, IV.A)();
      if ((0, EV.useEffect)(Xe.m, []), VV && (0, Je.w)(VV)) return (0, DV.jsx)(Ce, {
        urlId: VV
      }, VV);
      const eV = VV && (0, Ye.l)(VV) ? VV : "firstParty";
      return (0, DV.jsx)(ae, {}, eV)
    }

    function Ce(VV) {
      let {
        urlId: eV
      } = VV;
      const {
        userContext: xV,
        isUserContextUpdating: JV
      } = (0, FV.d)(), YV = (0, EV.useMemo)((() => (0, SV.j)(eV)), [eV]);
      (0, EV.useMemo)((() => {
        if (null === YV) return;
        const VV = uV.userContextManager.peekCurrentUserContext();
        (null !== VV ? zV.b.getGame(VV, YV.schematicId) : uV.userContextManager.getCurrentUserContext().then((VV => zV.b.getGame(VV, YV.schematicId)))).catch((VV => {
          console.error(`Failed to get the custom game ${YV.schematicId}`, VV), (0, SV.g)(eV)
        }))
      }), [YV, eV]);
      const [UV, yV] = (0, EV.useState)(null), pV = (0, sV.e)();
      (0, EV.useEffect)((() => {
        if (null !== YV || JV) return;
        let VV = !0;
        return zV.b.getGameByUrlId(xV, eV).then((xV => {
          VV && yV({
            urlId: eV,
            game: xV
          })
        })).catch((xV => {
          console.error(`Failed to find the custom game with urlId ${eV}`, xV), VV && (0, dV.navigateToHomePage)()
        })), () => {
          VV = !1
        }
      }), [eV, YV, JV, xV]);
      const QV = null !== YV && void 0 !== YV ? YV : (null === UV || void 0 === UV ? void 0 : UV.urlId) === eV ? UV.game : null;
      return null === QV ? (0, DV.jsx)(WV.d, {}) : pV ? (0, DV.jsx)(ae, {
        gameNameWithVariation: (0, Ye.t)(QV.schematicId),
        knownCustomGame: QV
      }, QV.schematicId) : null
    }

    function ae(VV) {
      var eV, xV, yV, rV, MV, GV, WV, gV;
      let {
        gameNameWithVariation: iV,
        knownCustomGame: CV = null
      } = VV;
      const {
        t: oV
      } = (0, QV.A)();
      (0, we.l)();
      const hV = (0, we.r)(),
        {
          userContext: lV,
          isUserContextUpdating: LV
        } = (0, FV.d)(),
        fV = (0, Ne.h)(),
        uV = (0, dV.useNavigatePreserveSearch)(),
        sV = (0, IV.A)(),
        SV = (0, EV.useMemo)((() => iV ? {
          gameNameWithVariation: iV
        } : sV), [iV, sV]),
        Ve = (0, Qe.d)(SV),
        Je = (0, EV.useMemo)((() => {
          const VV = function(VV) {
            var eV, xV;
            const JV = De(VV);
            if (!JV || 0 === JV.length || JV.includes(VV)) return VV;
            const YV = nV.m.getItem((0, jV.n)(VV));
            if (YV && JV.includes(YV)) return YV;
            return null !== (eV = null === (xV = Ze.e[VV]) || void 0 === xV ? void 0 : xV.defaultListedVariation) && void 0 !== eV ? eV : JV[0]
          }(Ve.gameNameWithVariation);
          return VV === Ve.gameNameWithVariation ? Ve : {
            ...Ve,
            gameNameWithVariation: VV
          }
        }), [Ve]);
      (0, EV.useEffect)((() => {
        const VV = Ve.gameNameWithVariation;
        Je.gameNameWithVariation !== VV && VV !== (0, Ue.Pb)(VV) && uV((0, cV.x)(Je.gameNameWithVariation), {
          replace: !0
        })
      }), [Je.gameNameWithVariation, Ve.gameNameWithVariation, uV]);
      const [ke, be] = (0, EV.useState)(""), qe = EV.useRef(null), [te, Fe] = (0, EV.useState)(), Xe = (0, Ye.l)(Je.gameNameWithVariation), ze = (0, EV.useMemo)((() => Xe ? null : function(VV, eV, xV) {
        var JV, YV;
        const yV = Ze.e[VV];
        return (0, We.J)(yV) ? null : {
          listedVariations: De(VV),
          backgroundImage: (0, UV.n)(VV, (0, UV.e)(yV)),
          badges: (0, wV.filterBadges)(yV.badges),
          category: yV.type,
          title: xV(yV.title),
          variationTitle: yV.variationTitle ? xV(yV.variationTitle) : null,
          description: xV(yV.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== eV ? null !== (JV = eV[VV]) && void 0 !== JV ? JV : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: yV.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: yV.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (YV = yV.canCreateCustomLobbies) || void 0 === YV || YV,
          countdownInformation: (0, jV.k)(VV)
        }
      }(Je.gameNameWithVariation, hV, oV)), [Xe, Je.gameNameWithVariation, hV, oV]), [Ge, ie] = (0, EV.useState)(!1), [Ce, ae] = (0, EV.useState)((() => CV ? ge(CV, oV) : Re)), ce = null !== ze && void 0 !== ze ? ze : Ce, [he] = (0, EV.useState)(ce === Re), le = (0, YV.d)(ce.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: Le,
        recentlyPlayedCustomLobbies: fe
      } = (0, EV.useMemo)((() => function(VV, eV, xV, JV) {
        var YV;
        const UV = VV => {
            const xV = (0, Ye.p)(VV),
              JV = eV.find((eV => "custom" === eV.type ? eV.schematicId === xV : eV.gameNameWithVariation === VV));
            return JV ? [...JV.recentLobbies] : []
          },
          yV = (0, wV.getRecentGameNameWithVariationLobbiesKey)(VV),
          pV = null !== (YV = nV.m.getItem(yV)) && void 0 !== YV ? YV : [],
          QV = [...UV(VV), ...pV],
          ZV = [];
        for (const nV of QV)(0, ve.I)(nV) && !ZV.includes(nV) && ZV.push(nV);
        let vV = QV;
        if (xV) {
          const VV = UV("classic_worlds"),
            eV = QV.filter((eV => !VV.includes(eV)));
          vV = [...VV, ...eV]
        }
        const rV = [],
          kV = !1 === JV ? [] : vV;
        for (const nV of kV)(0, ve.I)(nV) || rV.includes(nV) || rV.push(nV);
        return {
          recentlyPlayedPublicLobbies: ZV,
          recentlyPlayedCustomLobbies: rV
        }
      }(Je.gameNameWithVariation, fV, ce.showWorldsInsteadOfCustomLobbies, ce.canCreateCustomLobbies)), [Je.gameNameWithVariation, fV, ce.showWorldsInsteadOfCustomLobbies, ce.canCreateCustomLobbies]), [me, Ke] = (0, EV.useState)(!0), [He, ue] = (0, EV.useState)([]), [se, Se] = (0, EV.useState)(null), [Ie, de] = (0, EV.useState)("explore"), Oe = (0, EV.useRef)(!1), Vx = (0, EV.useCallback)((VV => {
        (0, BV.unstable_batchedUpdates)((() => {
          Fe(VV), ae((eV => ({
            ...ge(VV, oV),
            isFavourite: eV.isFavourite
          })))
        }))
      }), [oV]);
      (0, EV.useEffect)((() => {
        null === ne.b.get("gameEntrySource") && (0, ne.h)("gameInformationPageDirect")
      }), []);
      const ex = (0, EV.useRef)(null);
      (0, EV.useEffect)((() => {
        const VV = VV => {
            ex.current = VV.target instanceof Element ? VV.target.closest("a, button") : null
          },
          eV = VV => {
            "Tab" === VV.key && (ex.current = null)
          };
        return document.addEventListener("pointerdown", VV, !0), document.addEventListener("keydown", eV, !0), () => {
          document.removeEventListener("pointerdown", VV, !0), document.removeEventListener("keydown", eV, !0)
        }
      }), []), (0, TV.d)("Enter", (VV => {
        const eV = VV.target instanceof Element ? VV.target : null;
        if (VV.defaultPrevented || null !== eV && void 0 !== eV && eV.closest("input, textarea, select")) return;
        const xV = null === eV || void 0 === eV ? void 0 : eV.closest("a, button");
        xV && xV !== ex.current || (VV.preventDefault(), wx())
      })), (0, PV.d)(dV.navigateToHomePage);
      const xx = Le.length > 0 || fe.length > 0,
        Jx = !ce.useRejoinLastLobbyButton || 0 === Le.length,
        Yx = Xe && null === ce.ownerSocialPreviewWithoutLocation,
        Ux = lV.getPlayerName() === (null === te || void 0 === te || null === (eV = te.owner) || void 0 === eV ? void 0 : eV.name),
        yx = null !== (xV = null === (yV = ce.badges.find((VV => "event" === VV.type))) || void 0 === yV ? void 0 : yV.event) && void 0 !== xV ? xV : null,
        px = Jx ? vV.m : vV.f,
        Qx = (0, DV.jsx)(ZV.d, {
          tooltipInner: (0, DV.jsx)("div", {
            children: oV("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, DV.jsx)(px, {
            className: "GameInformationButton",
            padDefaultFocus: Jx,
            showPress: !0,
            onClick: () => {
              wx()
            },
            children: (0, DV.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Jx && (0, DV.jsxs)(DV.Fragment, {
                children: [(0, DV.jsx)(KV.b, {
                  name: "play"
                }), " "]
              }), oV("homePage:quickPlay")]
            })
          })
        });
      (0, EV.useEffect)((() => {
        if (!Xe || LV) return;
        let VV = !0;
        const eV = (0, Ye.p)(Je.gameNameWithVariation);
        return zV.b.getGame(lV, eV).then((eV => {
          VV && Vx(eV)
        })).catch((eV => {
          console.error("Failed to get Custom Game information", eV), VV && (0, dV.navigateToHomePage)()
        })), zV.b.getFavouriteGames(lV).then((xV => {
          VV && ae((VV => ({
            ...VV,
            isFavourite: xV.includes(eV)
          })))
        })).catch((eV => {
          console.error("Failed to get favourite games", eV), VV && ie(!0)
        })), () => {
          VV = !1
        }
      }), [Xe, LV, Je.gameNameWithVariation, Vx, lV]);
      const nx = !Xe && null === ze;

      function wx(VV) {
        (0, Me.h)(), uV((0, qV.c)(Je.gameNameWithVariation, VV))
      }(0, EV.useEffect)((() => {
        nx && (0, dV.navigateToHomePage)()
      }), [nx]), (0, EV.useEffect)((() => {
        if (!1 === ce.canCreateCustomLobbies) return;
        let VV = !0;
        return null !== ce.showWorldsInsteadOfCustomLobbies && !1 === LV && (Ke(!0), zV.b.getFavouriteLobbies(lV).then((VV => {
          Se(VV)
        })), zV.b.getOpenCustomLobbies(lV, {
          gameNameWithVariation: ce.showWorldsInsteadOfCustomLobbies ? "classic" : Je.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === Ie,
          onlyFavouriteLobbies: "favourite" === Ie
        }).then((eV => {
          VV && (0, BV.unstable_batchedUpdates)((() => {
            ue(eV), Ke(!1)
          }))
        })).catch((eV => {
          console.error("Failed to get open custom lobbies", eV), VV && Ke(!1)
        }))), () => {
          VV = !1
        }
      }), [LV, Je, Ie, ce.showWorldsInsteadOfCustomLobbies, ce.canCreateCustomLobbies, lV]);
      const Zx = (0, EV.useCallback)((async VV => {
          try {
            if (!se) return;
            se.includes(VV) ? (zV.b.unfavouriteLobby(lV, VV), Se(se.filter((eV => eV !== VV)))) : (zV.b.favouriteLobby(lV, VV).catch((VV => {
              console.error("Failed to favourite lobby", VV)
            })), Se([...se, VV]))
          } catch (eV) {
            console.error("Failed to like lobby", eV)
          }
        }), [lV, se]),
        vx = (null === te || void 0 === te ? void 0 : te.schematicId) === (0, Ye.p)(Ve.gameNameWithVariation) ? te : null,
        rx = vx && (0, cV.B)(Ve.gameNameWithVariation, (VV => oV(VV)), vx);
      (0, OV.e)(vx && (0, cV.x)(Ve.gameNameWithVariation, vx));
      const kx = HV.featureFlags.canUseCustomLobbies && !0 === ce.canCreateCustomLobbies,
        bx = (0, DV.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, DV.jsx)(mV, {
            gameNameWithVariation: Je.gameNameWithVariation
          })
        });
      return (0, DV.jsx)(DV.Fragment, {
        children: (0, DV.jsxs)("article", {
          className: kV()("GameInformation", {
            GameInformationFadeIn: he,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (rV = ce.countdownInformation) || void 0 === rV ? void 0 : rV.type)
          }),
          children: [rx && (0, DV.jsx)(tV.c, {
            meta: rx
          }), (0, DV.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, DV.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, DV.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, DV.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, DV.jsx)("div", {
                  className: kV()("GameInformationTopBackgroundImage", pV.i),
                  style: (0, pV.h)(le),
                  children: (0, DV.jsx)(pV.e, {
                    image: le
                  })
                })]
              }), (0, DV.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, DV.jsx)(Be.e, {}), (0, DV.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, DV.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, DV.jsxs)("div", {
                      className: kV()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: Yx
                      }),
                      children: [ce.badges.map((VV => (0, DV.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${VV.type}`,
                        children: (0, DV.jsx)(XV.d, {
                          badge: VV
                        })
                      }, VV.type))), Xe && (0, DV.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, DV.jsx)(NV.b, {
                          text: (0, JV.fb)({
                            type: "playerCrafted"
                          })
                        })
                      }), ce.category && (0, DV.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, DV.jsx)(NV.b, {
                          text: [{
                            str: (0, JV.gb)(ce.category).toUpperCase()
                          }]
                        })
                      }), null !== ce.ccu && (0, DV.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, DV.jsx)(KV.b, {
                          name: "user"
                        }), (0, ve.N)(ce.ccu), " online"]
                      }), null !== ce.ownerSocialPreviewWithoutLocation && (0, DV.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, DV.jsx)("span", {
                          children: "Made by"
                        }), (0, DV.jsx)(RV.f, {
                          playerSocialPreview: {
                            ...ce.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), Yx && (0, DV.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, DV.jsx)("span", {
                          children: "Made by"
                        }), (0, DV.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== ce.favourites && (null !== ce.isFavourite || Xe && !Ge) && (0, DV.jsx)(vV.s, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== Oe.current && (Oe.current = !0, null !== ce.isFavourite)) {
                              const VV = (0, Ye.p)(Je.gameNameWithVariation);
                              let eV;
                              ce.isFavourite ? (eV = -1, zV.b.unfavouriteGame(lV, VV).catch((VV => {
                                console.error("Failed to get unfavourite game", VV)
                              })).finally((() => {
                                Oe.current = !1
                              }))) : (eV = 1, zV.b.favouriteGame(lV, VV).catch((VV => {
                                console.error("Failed to get favourite game", VV)
                              })).finally((() => {
                                Oe.current = !1
                              }))), ae((VV => ({
                                ...VV,
                                isFavourite: !VV.isFavourite
                              }))), ae((VV => ({
                                ...VV,
                                favourites: VV.favourites + eV
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (MV = ce.isFavourite) && void 0 !== MV && MV,
                        disabled: null === ce.isFavourite,
                        className: kV()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === ce.isFavourite
                        })
                      }, null === ce.isFavourite ? "pending" : "known"), Xe && !Yx && HV.featureFlags.useSocialFeatures && !Ux && (0, DV.jsx)(Pe.b, {
                        targetType: "customGame",
                        targetId: (0, Ye.p)(Je.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (lV.playerHasRank("developer") || lV.playerHasRank("admin") && Ux) && (0, DV.jsxs)(vV.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          uV((0, pe.m)((0, ye.i)(Je.gameNameWithVariation, !0)))
                        },
                        children: [(0, DV.jsx)(KV.b, {
                          name: "star-christmas"
                        }), " ", oV("studio:viewInStudio")]
                      }), Xe && lV.playerHasRank("developer") && (0, DV.jsxs)(vV.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, re.d)({
                            schematicId: (0, Ye.p)(Je.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, DV.jsx)(KV.b, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), Xe && lV.playerHasRank("developer") && (0, DV.jsxs)(vV.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          ee.NotificationProvider.showCustomPopup({
                            body: () => (0, DV.jsx)(Ee, {
                              schematicId: (0, Ye.p)(Je.gameNameWithVariation),
                              gameName: ce.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, DV.jsx)(KV.b, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (GV = ce.countdownInformation) || void 0 === GV ? void 0 : GV.type) && (0, DV.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, DV.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, DV.jsx)(AV.d, {
                            toTime: ce.countdownInformation.countdownToTime
                          })]
                        }), (0, DV.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: ce.countdownInformation.previewText
                        })]
                      })]
                    }, Yx ? "pending" : "shown"), (0, DV.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, DV.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, DV.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [ce.title, " ", ce.variationTitle && (null === (WV = Ze.e[Je.gameNameWithVariation]) || void 0 === WV ? void 0 : WV.variationThumbnailUseBigRatio) && (0, DV.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: ce.variationTitle
                          })]
                        })
                      }), ce.listedVariations && ce.listedVariations.length > 0 && (0, DV.jsx)("div", {
                        className: kV()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (gV = Ze.e[Je.gameNameWithVariation]) || void 0 === gV ? void 0 : gV.variationThumbnailUseBigRatio
                        }),
                        children: ce.listedVariations.map((VV => {
                          var eV, xV;
                          return (0, DV.jsxs)(oe, {
                            variation: VV,
                            isSelected: Je.gameNameWithVariation === VV,
                            children: [null !== hV && (0, DV.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, DV.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, DV.jsx)(KV.b, {
                                  name: "user"
                                }), " ", (0, ve.N)(null !== (eV = hV[VV]) && void 0 !== eV ? eV : 0)]
                              })
                            }), (0, DV.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: oV(null !== (xV = Ze.e[VV].variationTitle) && void 0 !== xV ? xV : Ze.e[VV].title)
                            }), (0, DV.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, wV.filterBadges)(Ze.e[VV].badges).map((VV => (0, DV.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + VV.type,
                                children: (0, DV.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, DV.jsx)(XV.d, {
                                    badge: VV
                                  })
                                })
                              }, VV.type)))
                            })]
                          }, VV)
                        }))
                      })]
                    }), ce.description && (0, DV.jsx)("p", {
                      className: "GameInformationDescription",
                      children: ce.description
                    })]
                  }), (0, DV.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, DV.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Jx && (0, DV.jsx)(ZV.d, {
                        tooltipInner: (0, DV.jsx)("div", {
                          children: oV("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, DV.jsx)(vV.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            wx(Le[0])
                          },
                          children: (0, DV.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, DV.jsx)(KV.b, {
                              name: "play"
                            }), " ", oV("homePage:rejoinLobbyNumber", {
                              number: Le[0]
                            })]
                          })
                        })
                      }), Jx && Qx]
                    }), (0, DV.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Jx && Qx, (0, DV.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, DV.jsx)(KV.b, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, DV.jsx)(bV.d, {
                          className: "JoinLobbyInput",
                          placeholderText: oV("homePage:lobbyName"),
                          maxLength: ve.L,
                          domRef: qe,
                          onValueChange: VV => {
                            VV = (0, ve.qb)(VV), be(VV)
                          },
                          onEnter: () => {
                            0 === ke.length ? wx(Le[0]) : wx(ke)
                          }
                        }), (0, DV.jsx)(vV.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === ke.length ? wx(Le[0]) : wx(ke)
                          },
                          children: oV("general:join")
                        })]
                      })]
                    }), (0, DV.jsxs)("section", {
                      className: kV()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !xx
                      }),
                      children: [(0, DV.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, DV.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, DV.jsx)(KV.b, {
                            name: "clock-rotate-left"
                          }), xx && (0, DV.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: oV("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, DV.jsx)(Ae.c, {
                        lobbyGroups: [Le, fe],
                        onLobbyClick: VV => {
                          wx(VV)
                        },
                        keyPrefix: Je.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== yx && (0, DV.jsx)(aV, {
                eventName: yx
              })]
            }), kx && (0, DV.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, DV.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, DV.jsxs)("div", {
                  className: kV()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === ce.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === ce.showWorldsInsteadOfCustomLobbies && (0, DV.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, DV.jsx)(KV.b, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, DV.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, DV.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), oV("game:worlds")]
                    })]
                  }), !1 === ce.showWorldsInsteadOfCustomLobbies && (0, DV.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, DV.jsx)(KV.b, {
                      name: "joystick"
                    }), (0, DV.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, DV.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), oV("homePage:customLobbies")]
                    })]
                  }), (0, DV.jsx)(vV.M, {
                    onClick: () => {
                      de("explore")
                    },
                    active: "explore" === Ie,
                    children: oV("general:explore")
                  }), (0, DV.jsx)(vV.M, {
                    onClick: () => {
                      de("favourite")
                    },
                    active: "favourite" === Ie,
                    children: oV("homePage:favouriteLobbies")
                  }), (0, DV.jsx)(vV.M, {
                    onClick: () => {
                      de("owned")
                    },
                    active: "owned" === Ie,
                    children: oV("homePage:ownedLobbies")
                  })]
                }), (0, DV.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, DV.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, DV.jsx)(je.c, {
                      label: "Create",
                      onClick: () => {
                        ee.NotificationProvider.showCustomPopup({
                          body: VV => (0, DV.jsx)(xe.CreateCustomLobby, {
                            gameNameWithVariation: Je.gameNameWithVariation,
                            close: VV
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === me && (0, DV.jsx)(je.e, {}), !1 === me && (0, DV.jsx)(Te, {
                      customLobbies: He,
                      favouriteLobbies: se,
                      toggleLikeLobby: Zx,
                      showReport: HV.featureFlags.useSocialFeatures && "owned" !== Ie
                    })]
                  }), bx]
                })]
              })
            })]
          }), !kx && bx]
        })
      })
    }

    function oe(VV) {
      let {
        variation: eV,
        isSelected: xV,
        children: JV
      } = VV;
      const QV = Ze.e[eV],
        wV = (0, UV.n)(eV, (0, UV.o)(QV)),
        ZV = (0, YV.d)(wV),
        vV = (0, yV.g)([(0, UV.j)(eV, (0, UV.e)(QV))]);
      return (0, DV.jsxs)(dV.LinkPreserveSearch, {
        to: (0, cV.x)(eV),
        replace: !0,
        className: kV()("GameInformationVariation", pV.i, {
          SelectedGameInformationVariation: xV
        }),
        onClick: VV => {
          if (!(0, Ve.e)(VV)) return;
          const xV = (0, jV.n)(eV);
          nV.m.setItem(xV, eV)
        },
        onMouseEnter: vV.start,
        onMouseLeave: vV.cancel,
        onFocus: vV.start,
        onBlur: vV.cancel,
        style: (0, pV.h)(ZV),
        children: [(0, DV.jsx)(pV.e, {
          image: ZV
        }), JV]
      })
    }
  },
  7064: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => jV
    });
    var JV = xV(62),
      YV = xV(1551),
      UV = xV(1603),
      yV = xV(3931),
      pV = xV(1168),
      QV = xV(1408),
      nV = xV(1446),
      wV = xV(1414),
      ZV = xV(1146),
      vV = xV.n(ZV),
      rV = xV(7056),
      kV = xV(1321);

    function bV(VV) {
      let {
        info: eV,
        className: xV
      } = VV;
      const {
        statusText: JV,
        rowText: YV
      } = (0, rV.f)();
      return (0, kV.jsxs)("div", {
        className: vV()("GameApprovalInfoDetails", xV),
        children: [(0, kV.jsxs)("div", {
          className: vV()("GameApprovalInfoSummary", eV.overallPassed ? "Passed" : "Failed"),
          children: [(0, kV.jsx)(wV.b, {
            name: eV.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, kV.jsx)("span", {
            children: JV(eV.status)
          })]
        }), eV.rows.length > 0 && (0, kV.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: eV.rows.map((VV => {
            const {
              label: eV,
              value: xV
            } = YV(VV);
            return (0, kV.jsxs)("div", {
              className: vV()("GameApprovalInfoRow", VV.passed ? "Passed" : "Failed"),
              children: [(0, kV.jsx)(wV.b, {
                name: VV.passed ? "check" : "xmark"
              }), (0, kV.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, kV.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: eV
                }), null !== xV && (0, kV.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: xV
                })]
              })]
            }, VV.kind)
          }))
        })]
      })
    }
    var EV = xV(1220),
      BV = xV(1439);

    function jV(VV) {
      BV.NotificationProvider.showCustomPopup({
        body: () => (0, kV.jsx)(qV, {
          ...VV
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function qV(VV) {
      let {
        schematicId: eV,
        canOverride: xV,
        onApprovalChanged: ZV
      } = VV;
      const {
        t: vV
      } = (0, EV.A)(), {
        userContext: rV
      } = (0, pV.d)(), BV = (0, yV.e)(), [jV, qV] = (0, JV.useState)(null), [tV, FV] = (0, JV.useState)(null), [TV, PV] = (0, JV.useState)(!1), AV = (0, JV.useCallback)((() => {
        FV(null), UV.b.getGameApprovalInfo(rV, eV).then((VV => {
          BV.current && qV(VV)
        })).catch((VV => {
          console.error("Failed to get game approval info", VV), BV.current && FV(vV("studio:approvalLoadFailed"))
        }))
      }), [rV, eV, BV, vV]);
      (0, JV.useEffect)((() => {
        AV()
      }), [AV]);
      const NV = VV => {
        TV || (PV(!0), UV.b.setGameApproval(rV, eV, VV).then((() => {
          null === ZV || void 0 === ZV || ZV(), BV.current && AV()
        })).catch((VV => {
          console.error("Failed to set game approval", VV)
        })).finally((() => {
          BV.current && PV(!1)
        })))
      };
      return (0, kV.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, kV.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: vV("studio:approvalTitle")
        }), !jV && !tV && (0, kV.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, kV.jsx)(QV.d, {})
        }), tV && (0, kV.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: tV
        }), jV && (0, kV.jsxs)(kV.Fragment, {
          children: [(0, kV.jsx)(bV, {
            info: jV
          }), xV && (0, kV.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== jV.manualOverride && (0, kV.jsx)(nV.d, {
              tooltipInner: (0, kV.jsx)("div", {
                children: vV("studio:approvalApproveTooltip")
              }),
              children: (0, kV.jsxs)(YV.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  NV(!0)
                },
                disabled: TV,
                children: [(0, kV.jsx)(wV.b, {
                  name: "check"
                }), " ", vV("studio:approvalApprove")]
              })
            }), !1 !== jV.manualOverride && (0, kV.jsx)(nV.d, {
              tooltipInner: (0, kV.jsx)("div", {
                children: vV("studio:approvalDenyTooltip")
              }),
              children: (0, kV.jsxs)(YV.E, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  NV(!1)
                },
                disabled: TV,
                children: [(0, kV.jsx)(wV.b, {
                  name: "xmark"
                }), " ", vV("studio:approvalDeny")]
              })
            }), null !== jV.manualOverride && (0, kV.jsx)(nV.d, {
              tooltipInner: (0, kV.jsx)("div", {
                children: vV("studio:approvalClearOverrideTooltip")
              }),
              children: (0, kV.jsxs)(YV.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  NV(null)
                },
                disabled: TV,
                children: [(0, kV.jsx)(wV.b, {
                  name: "arrows-rotate"
                }), " ", vV("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  7056: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV,
      f: () => yV
    });
    var JV = xV(375),
      YV = xV(1220);
    const UV = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function yV() {
      const {
        t: VV,
        selectedLanguage: eV
      } = (0, YV.A)();
      return {
        statusText: eV => VV(UV[eV]),
        rowText: xV => {
          const UV = (VV, xV) => (0, JV.bb)((0, YV.m)(eV.code, VV), 0, xV);
          switch (xV.kind) {
            case "ownerAccountAge": {
              const eV = xV.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: VV("studio:approvalAccountAgeLabel"),
                value: VV(eV, {
                  age: UV(eV, xV.accountAgeMs),
                  days: xV.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: VV("studio:approvalSinceUnbannedLabel"), value: VV("studio:approvalSinceUnbannedValue", {
                  time: UV("studio:approvalSinceUnbannedValue", xV.sinceMs),
                  days: xV.minDays
                })
              };
            case "reportHold": {
              const {
                detail: eV
              } = xV;
              if (null === eV) return {
                label: VV("studio:approvalUnderInvestigation"),
                value: null
              };
              const JV = eV.weightedReporters.toFixed(1),
                YV = eV.threshold.toFixed(1),
                yV = VV("studio:approvalReportHoldLabel", {
                  hours: eV.windowHours
                });
              if (null === eV.heldUntil) return {
                label: yV,
                value: VV("studio:approvalReportHoldValue", {
                  weightedReporters: JV,
                  threshold: YV
                })
              };
              const pV = "studio:approvalReportHoldValueHeld";
              return {
                label: yV,
                value: VV(pV, {
                  weightedReporters: JV,
                  threshold: YV,
                  time: UV(pV, eV.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function pV(VV) {
      return null === VV.manualOverride && VV.rows.some((VV => "reportHold" === VV.kind && !VV.passed))
    }
  },
  35346: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV
    });
    var JV = xV(62),
      YV = xV(3886);

    function UV() {
      const [VV, eV] = (0, JV.useState)(!1);
      return (0, JV.useLayoutEffect)((() => {
        let VV = !0;
        return (0, YV.f)().then((() => {
          VV && eV(!0)
        })), () => {
          VV = !1
        }
      }), []), VV
    }
  },
  9541: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV
    });
    var JV = xV(1397),
      YV = xV(1252),
      UV = xV(657);

    function yV(VV) {
      return VV = function(VV, eV) {
        var xV;
        const JV = new URLSearchParams(eV),
          YV = JV.get("lobby"),
          UV = JV.get("vm"),
          yV = null !== (xV = YV) && void 0 !== xV ? xV : VV.lobbyName,
          pV = null !== UV && void 0 !== UV ? UV : VV.directJoinVmUrl;
        if (yV === VV.lobbyName && pV === VV.directJoinVmUrl) return VV;
        return {
          ...VV,
          lobbyName: yV,
          directJoinVmUrl: pV
        }
      }(VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), VV = function(VV) {
        if ((0, UV.J)(VV.directJoinVmUrl)) return VV;
        const eV = (0, YV.U)(VV.directJoinVmUrl);
        null === eV && (VV.directJoinVmUrl = void 0);
        return VV
      }(VV = function(VV) {
        if ((0, UV.J)(VV.gameNameWithVariation)) return VV;
        return VV.gameNameWithVariation = (0, JV.g)(VV.gameNameWithVariation), VV
      }(VV))
    }
  },
  9532: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      h: () => YV
    });
    let JV = !1;

    function YV() {
      JV = !0
    }

    function UV() {
      return JV
    }
  },
  37507: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      f: () => JV
    });
    const JV = "skyblockSkills",
      YV = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);