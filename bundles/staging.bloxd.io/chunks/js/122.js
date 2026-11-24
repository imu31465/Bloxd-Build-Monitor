export const id = 122;
export const ids = [122, 396];
export const modules = {
  36310: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => iz
    });
    var pD = wD(338),
      sD = wD(3494),
      KD = wD(3535),
      rD = wD(3528),
      LD = wD(3521),
      cD = wD(1200),
      gD = wD(35),
      RD = wD(1737),
      AD = wD(1366),
      UD = wD(1447),
      fD = wD(1044),
      ID = wD.n(fD),
      BD = wD(1687),
      GD = wD(58),
      hD = wD(79),
      nD = wD(2349),
      MD = wD(1339),
      OD = wD(1620),
      JD = wD(1127),
      ED = wD(3416),
      QD = wD(4572),
      XD = wD(3479),
      VD = wD(1895),
      PD = wD(3492),
      CD = wD(1748),
      xD = wD(1495),
      TD = wD(2144),
      bD = wD(1346),
      jD = wD(2600),
      dD = wD(5049),
      SD = wD(1096);
    const iD = 15e3,
      lD = 2500;

    function WD(DD) {
      var zD;
      let {
        eventName: wD
      } = DD;
      const {
        t: pD
      } = (0, cD.E)(), sD = CD.g[wD], [KD, rD] = (0, GD.useState)((() => Date.now() >= sD.endsAt.getTime())), [LD, gD] = (0, GD.useState)("overall"), RD = function(DD, zD) {
        const {
          userContext: wD,
          isUserContextUpdating: pD
        } = (0, JD.c)(), sD = `${DD}:${zD}`, [KD, rD] = (0, GD.useState)({
          requestKey: sD,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, GD.useEffect)((() => {
          if (pD) return;
          let KD, LD = !1;
          const cD = async () => {
            if ("visible" === document.visibilityState) try {
              const pD = await xD.d.getGameEventLeaderboard(wD, {
                event: DD,
                scope: zD
              });
              LD || rD({
                requestKey: sD,
                leaderboard: {
                  status: "loaded",
                  leaderboard: pD
                }
              })
            } catch {
              LD || rD((DD => DD.requestKey === sD && "loaded" === DD.leaderboard.status ? DD : {
                requestKey: sD,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            LD || (KD = setTimeout(cD, iD))
          };
          return cD(), () => {
            LD = !0, clearTimeout(KD)
          }
        }), [DD, zD, sD, wD, pD]), KD.requestKey === sD ? KD.leaderboard : {
          status: "loading"
        }
      }(wD, LD), AD = function(DD) {
        const zD = (0, GD.useRef)(null),
          wD = (0, GD.useRef)(0),
          pD = (0, GD.useRef)(),
          [sD, KD] = (0, GD.useState)({});
        return (0, GD.useEffect)((() => {
          const sD = null === DD || void 0 === DD ? void 0 : DD.entries;
          if (!sD) return;
          const rD = new Map(sD.map((DD => [DD.player.name, DD.value]))),
            LD = zD.current;
          if (zD.current = rD, null === LD) return;
          const cD = {};
          for (const [DD, zD] of rD) {
            const pD = LD.get(DD);
            void 0 !== pD && zD > pD && (cD[DD] = {
              amount: zD - pD,
              key: wD.current++
            })
          }
          0 !== Object.keys(cD).length && (KD(cD), clearTimeout(pD.current), pD.current = setTimeout((() => {
            KD({})
          }), lD))
        }), [DD]), (0, GD.useEffect)((() => () => {
          clearTimeout(pD.current)
        }), []), sD
      }("loaded" === RD.status ? RD.leaderboard : null), UD = function(DD) {
        const [zD, wD] = (0, GD.useState)(null), pD = "loaded" === DD.status ? DD.leaderboard.goalProgress : void 0;
        return (0, GD.useEffect)((() => {
          pD && wD(pD)
        }), [pD]), zD
      }(RD), fD = TD.g[`profileEffect_${sD.prizePack}`];
      if (KD) return null;
      const BD = "loaded" === RD.status ? RD.leaderboard : null,
        hD = null !== (zD = null === BD || void 0 === BD ? void 0 : BD.entries) && void 0 !== zD ? zD : null,
        nD = null !== BD && void 0 !== BD && BD.own && null !== hD && !hD.some((DD => DD.isOwn)) ? BD.own : null;
      return (0, SD.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, SD.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, SD.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, SD.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, SD.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, SD.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), pD("gameEvents:live")]
              }), (0, SD.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [pD("gameEvents:endsIn"), (0, SD.jsx)(XD.d, {
                  toTime: sD.endsAt,
                  onReachEndOfCountdown: () => {
                    rD(!0)
                  }
                })]
              })]
            }), (0, SD.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: pD(sD.titleKey)
            }), (0, SD.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, SD.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [fD && (0, SD.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, SD.jsx)(fD, {})
                }), (0, SD.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, SD.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: pD("gameEvents:prize")
                  }), (0, SD.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: pD(sD.prizeNameKey)
                  })]
                })]
              }), (0, SD.jsx)(ND, {
                event: sD,
                progress: UD
              })]
            })]
          }), (0, SD.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, SD.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, SD.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: pD(sD.leaderboard.titleKey)
              }), (0, SD.jsx)(dD.e, {
                ariaLabel: pD("gameEvents:leaderboardScope"),
                options: CD.d.map((DD => ({
                  value: DD,
                  label: pD(`gameEvents:${DD}Scope`)
                }))),
                value: LD,
                onChange: gD
              })]
            }), "loading" === RD.status && (0, SD.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, SD.jsx)(bD.e, {})
            }), ("unavailable" === RD.status || "loaded" === RD.status && null === hD) && (0, SD.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: pD("gameEvents:leaderboardUnavailable")
            }), null !== hD && 0 === hD.length && (0, SD.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: pD("friends" === LD ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== hD && hD.length > 0 && (0, SD.jsx)("ol", {
              className: "GameEventPanelRows",
              children: hD.map((DD => {
                const zD = AD[DD.player.name];
                return (0, SD.jsxs)("li", {
                  className: ID()("GameEventPanelRow", {
                    GameEventPanelRowOwn: DD.isOwn,
                    GameEventPanelRowTop: DD.rank <= 3
                  }),
                  children: [(0, SD.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", DD.rank]
                  }), (0, SD.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, SD.jsx)(jD.e, {
                      playerSocialPreview: {
                        ...DD.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== zD && (0, SD.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", zD.amount.toLocaleString()]
                  }, zD.key), (0, SD.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: DD.value.toLocaleString()
                  })]
                }, DD.player.name)
              }))
            }), nD && (0, SD.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, SD.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", nD.rank.toLocaleString()]
              }), (0, SD.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: pD("gameEvents:yourPlace")
              }), (0, SD.jsx)("span", {
                className: "GameEventPanelScore",
                children: nD.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function ND(DD) {
      let {
        event: zD,
        progress: wD
      } = DD;
      const {
        t: pD
      } = (0, cD.E)(), sD = null !== wD && zD.prizeGoals.some(((DD, zD) => wD[zD] >= DD.target));
      return (0, SD.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, SD.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: pD(sD ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, SD.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: zD.prizeGoals.map(((DD, zD) => {
            const sD = null === wD ? null : Math.min(wD[zD], DD.target);
            return (0, SD.jsxs)(GD.Fragment, {
              children: [zD > 0 && (0, SD.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: pD("gameEvents:goalsOr")
              }), (0, SD.jsxs)("div", {
                className: ID()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: sD === DD.target
                }),
                children: [(0, SD.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: pD(DD.labelKey)
                }), (0, SD.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, SD.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== sD && void 0 !== sD ? sD : 0) / DD.target * 100 + "%"
                    }
                  }), null !== sD && (0, SD.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [sD.toLocaleString(), " / ", DD.target.toLocaleString()]
                  })]
                })]
              })]
            }, DD.board)
          }))
        })]
      })
    }
    var ZD = wD(1548),
      yD = wD(1604),
      kD = wD(1032),
      mD = wD(730),
      eD = wD(3473);

    function oD(DD) {
      let {
        gameNameWithVariation: zD
      } = DD;
      const wD = (0, ZD.F)(zD),
        [pD, sD] = (0, GD.useState)(null);
      if ((0, GD.useEffect)((() => {
          if (!wD) return;
          let DD = !0;
          return (0, yD.h)(wD).then((zD => {
            DD && sD(zD)
          })).catch((DD => {
            console.error(`Failed to load the page copy for ${wD.name}`, DD)
          })), () => {
            DD = !1
          }
        }), [wD]), !wD || !pD || pD.name !== wD.name) return null;
      const KD = (0, yD.d)(pD),
        rD = new Set((0, kD.d)((0, mD.g)()).map((DD => (0, ZD.w)(DD)))),
        LD = pD.similarGames.filter((DD => rD.has((0, ZD.w)(DD))));
      return (0, SD.jsx)("div", {
        className: "GamePageContent",
        children: (0, SD.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, SD.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, SD.jsx)("h2", {
              children: KD.whatIs
            }), pD.whatIs.map((DD => (0, SD.jsx)("p", {
              children: DD
            }, DD)))]
          }), (0, SD.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, SD.jsx)("h2", {
              children: KD.howToPlay
            }), pD.howToPlay.map((DD => (0, SD.jsx)("p", {
              children: DD
            }, DD)))]
          }), (0, SD.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, SD.jsx)("h2", {
              children: KD.features
            }), (0, SD.jsx)("ul", {
              children: pD.features.map((DD => (0, SD.jsx)("li", {
                children: DD
              }, DD)))
            })]
          }), (0, SD.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, SD.jsx)("h2", {
              children: KD.tips
            }), (0, SD.jsx)("ul", {
              children: pD.tips.map((DD => (0, SD.jsx)("li", {
                children: DD
              }, DD)))
            })]
          }), (0, SD.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, SD.jsx)("h2", {
              children: KD.faq
            }), pD.faq.map((DD => {
              let {
                question: zD,
                answer: wD
              } = DD;
              return (0, SD.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, SD.jsx)("h3", {
                  children: zD
                }), (0, SD.jsx)("p", {
                  children: wD
                })]
              }, zD)
            }))]
          }), LD.length > 0 && (0, SD.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, SD.jsx)("h2", {
              children: KD.similarGames
            }), (0, SD.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: LD.map((DD => (0, SD.jsx)("li", {
                children: (0, SD.jsx)(eD.g, {
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
    var aD = wD(1057),
      uD = wD(103),
      vD = wD(1130),
      tD = wD(34241),
      FD = wD(1664),
      YD = wD(1523),
      HD = wD(1511),
      qD = wD(1616),
      Dz = wD(1457),
      zz = wD(1355),
      wz = wD(36318),
      pz = wD(1238),
      sz = wD(1008),
      Kz = wD(351),
      rz = wD(1025),
      Lz = wD(1540),
      cz = wD(8919),
      gz = wD(20),
      Rz = wD(2500),
      Az = wD(760),
      Uz = wD(1232),
      fz = wD(6554),
      Iz = wD(3482);

    function Bz(DD) {
      let {
        preview: zD,
        isBroken: wD
      } = DD;
      const pD = null === zD ? null : (0, KD.f)(zD, "small"),
        rD = (0, sD.c)(null !== pD && void 0 !== pD ? pD : KD.n);
      return null === zD ? (0, SD.jsx)("div", {
        className: ID()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: wD
        }),
        children: (0, SD.jsx)(aD.e, {
          name: wD ? "triangle-exclamation" : "star"
        })
      }) : (0, SD.jsx)("div", {
        className: ID()("FeaturedGamesPopupSlotThumbnail", LD.g),
        style: (0, LD.e)(rD),
        role: "img",
        "aria-label": zD.name,
        children: (0, SD.jsx)(LD.b, {
          image: rD
        })
      })
    }

    function Gz(DD) {
      let {
        schematicId: zD,
        gameName: wD
      } = DD;
      const {
        userContext: sD
      } = (0, JD.c)(), KD = (0, Iz.c)(), [rD, LD] = (0, GD.useState)(null), [cD, gD] = (0, GD.useState)(null), [RD, AD] = (0, GD.useState)(!1), fD = (0, GD.useCallback)((() => {
        gD(null), xD.d.getFeaturedGames(sD).then((DD => {
          KD.current && LD(DD.slots)
        })).catch((DD => {
          console.error("Failed to get featured games", DD), KD.current && gD("Failed to load featured games")
        }))
      }), [sD, KD]);
      (0, GD.useEffect)((() => {
        fD()
      }), [fD]);
      const ID = (DD, zD) => {
        RD || (AD(!0), xD.d.setFeaturedGame(sD, DD, zD).then((() => {
          KD.current && fD()
        })).catch((DD => {
          console.error("Failed to set featured game", DD), KD.current && gD("Failed to update the featured slot")
        })).finally((() => {
          KD.current && AD(!1)
        })))
      };
      return (0, SD.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, SD.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !rD && !cD && (0, SD.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, SD.jsx)(bD.e, {})
        }), cD && (0, SD.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: cD
        }), rD && (0, SD.jsxs)(SD.Fragment, {
          children: [(0, SD.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: rD.map((DD => {
              const wD = DD.schematicId === zD,
                sD = null === DD.schematicId,
                {
                  categoryGroup: KD
                } = pD.L[DD.slotId];
              return (0, SD.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, SD.jsx)(Bz, {
                  preview: DD.preview,
                  isBroken: !sD
                }), (0, SD.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, SD.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, pD.db)(KD), " \xb7 position", " ", (0, pD.N)(DD.slotId, pD.Db) + 1, " of", " ", (0, pD.zb)(KD, pD.Db)]
                  }), sD && (0, SD.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !sD && null !== DD.preview && (0, SD.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: DD.preview.name
                  }), !sD && null === DD.preview && (0, SD.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, SD.jsx)(aD.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, SD.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [sD && (0, SD.jsxs)(UD.v, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      ID(DD.slotId, zD)
                    },
                    disabled: RD,
                    children: [(0, SD.jsx)(aD.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !sD && !wD && (0, SD.jsxs)(UD.Y, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      ID(DD.slotId, zD)
                    },
                    disabled: RD,
                    children: [(0, SD.jsx)(aD.e, {
                      name: "star"
                    }), " Replace"]
                  }), !sD && (0, SD.jsxs)(UD.R, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      ID(DD.slotId, null)
                    },
                    disabled: RD,
                    children: [(0, SD.jsx)(aD.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, DD.slotId)
            }))
          }), (0, SD.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var hz = wD(4699),
      nz = wD(4620),
      Mz = wD(3444);
    const Oz = 8,
      Jz = 12;

    function Ez(DD) {
      let {
        customLobbies: zD,
        favouriteLobbies: wD,
        toggleLikeLobby: pD,
        showReport: sD
      } = DD;
      const [KD, rD] = (0, GD.useState)(Oz);
      return (0, GD.useEffect)((() => {
        if (KD >= zD.length) return;
        let DD = !0;
        return (0, Mz.e)().then((() => {
          DD && rD(KD + Jz)
        })), () => {
          DD = !1
        }
      }), [KD, zD.length]), (0, SD.jsx)(SD.Fragment, {
        children: zD.slice(0, KD).map((DD => (0, SD.jsx)(nz.d, {
          customLobby: DD,
          favouriteLobbies: wD,
          toggleLikeLobby: pD,
          showReport: sD
        }, DD.name)))
      })
    }
    var Qz = wD(4623),
      Xz = wD(4644),
      Vz = wD(4590),
      Pz = wD(3562),
      Cz = wD(8915),
      xz = wD(219);
    const Tz = {
      skyblock: [wD(36352).b]
    };
    var bz = wD(619);
    const jz = {
      listedVariations: null,
      backgroundImage: KD.n,
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

    function dz(DD, zD) {
      const wD = Az.h[DD.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, KD.f)(DD, "large"),
        badges: [],
        category: DD.gameCategory,
        title: void 0 !== (null === wD || void 0 === wD ? void 0 : wD.title) ? zD(wD.title) : DD.name,
        variationTitle: null,
        description: void 0 !== (null === wD || void 0 === wD ? void 0 : wD.description) ? zD(wD.description) : DD.description,
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

    function Sz(DD) {
      var zD, wD, pD;
      return null !== (zD = null !== (wD = (0, xz.j)() ? function(DD) {
        for (const [zD, wD] of Object.entries(Tz)) {
          const pD = [zD, ...wD.map((DD => (0, Kz.Rb)(zD, DD)))];
          if (pD.includes(DD)) return pD
        }
        return null
      }(DD) : null) && void 0 !== wD ? wD : null === (pD = Az.e[DD]) || void 0 === pD ? void 0 : pD.listedVariations) && void 0 !== zD ? zD : null
    }

    function iz() {
      const {
        gameNameWithVariation: DD
      } = (0, YD.C)();
      if ((0, GD.useEffect)(Pz.n, []), DD && (0, pz.r)(DD)) return (0, SD.jsx)(lz, {
        urlId: DD
      }, DD);
      const zD = DD && (0, sz.l)(DD) ? DD : "firstParty";
      return (0, SD.jsx)(Wz, {}, zD)
    }

    function lz(DD) {
      let {
        urlId: zD
      } = DD;
      const {
        userContext: wD,
        isUserContextUpdating: pD
      } = (0, JD.c)(), sD = (0, GD.useMemo)((() => (0, FD.h)(zD)), [zD]);
      (0, GD.useMemo)((() => {
        if (null === sD) return;
        const DD = vD.userContextManager.peekCurrentUserContext();
        (null !== DD ? xD.d.getGame(DD, sD.schematicId) : vD.userContextManager.getCurrentUserContext().then((DD => xD.d.getGame(DD, sD.schematicId)))).catch((DD => {
          console.error(`Failed to get the custom game ${sD.schematicId}`, DD), (0, FD.g)(zD)
        }))
      }), [sD, zD]);
      const [KD, rD] = (0, GD.useState)(null), LD = (0, tD.e)();
      (0, GD.useEffect)((() => {
        if (null !== sD || pD) return;
        let DD = !0;
        return xD.d.getGameByUrlId(wD, zD).then((wD => {
          DD && rD({
            urlId: zD,
            game: wD
          })
        })).catch((wD => {
          console.error(`Failed to find the custom game with urlId ${zD}`, wD), DD && (0, HD.navigateToHomePage)()
        })), () => {
          DD = !1
        }
      }), [zD, sD, pD, wD]);
      const cD = null !== sD && void 0 !== sD ? sD : (null === KD || void 0 === KD ? void 0 : KD.urlId) === zD ? KD.game : null;
      return null === cD ? (0, SD.jsx)(bD.e, {}) : LD ? (0, SD.jsx)(Wz, {
        gameNameWithVariation: (0, sz.t)(cD.schematicId),
        knownCustomGame: cD
      }, cD.schematicId) : null
    }

    function Wz(DD) {
      var zD, wD, rD, fD, CD, TD, bD, dD;
      let {
        gameNameWithVariation: iD,
        knownCustomGame: lD = null
      } = DD;
      const {
        t: ND
      } = (0, cD.E)();
      (0, Rz.h)();
      const yD = (0, Rz.l)(),
        {
          userContext: kD,
          isUserContextUpdating: mD
        } = (0, JD.c)(),
        eD = (0, Vz.c)(),
        vD = (0, HD.useNavigatePreserveSearch)(),
        tD = (0, YD.C)(),
        FD = (0, GD.useMemo)((() => iD ? {
          gameNameWithVariation: iD
        } : tD), [iD, tD]),
        Dz = (0, cz.c)(FD),
        pz = (0, GD.useMemo)((() => {
          const DD = function(DD) {
            var zD, wD;
            const pD = Sz(DD);
            if (!pD || 0 === pD.length || pD.includes(DD)) return DD;
            const sD = gD.h.getItem((0, nD.k)(DD));
            if (sD && pD.includes(sD)) return sD;
            return null !== (zD = null === (wD = Az.e[DD]) || void 0 === wD ? void 0 : wD.defaultListedVariation) && void 0 !== zD ? zD : pD[0]
          }(Dz.gameNameWithVariation);
          return DD === Dz.gameNameWithVariation ? Dz : {
            ...Dz,
            gameNameWithVariation: DD
          }
        }), [Dz]);
      (0, GD.useEffect)((() => {
        const DD = Dz.gameNameWithVariation;
        pz.gameNameWithVariation !== DD && DD !== (0, Kz.Tb)(DD) && vD((0, ZD.y)(pz.gameNameWithVariation), {
          replace: !0
        })
      }), [pz.gameNameWithVariation, Dz.gameNameWithVariation, vD]);
      const [Iz, Bz] = (0, GD.useState)(""), Mz = GD.useRef(null), [Oz, Jz] = (0, GD.useState)(), Pz = (0, sz.l)(pz.gameNameWithVariation), xz = (0, GD.useMemo)((() => Pz ? null : function(DD, zD, wD) {
        var pD, sD;
        const rD = Az.e[DD];
        return (0, bz.B)(rD) ? null : {
          listedVariations: Sz(DD),
          backgroundImage: (0, KD.j)(DD, (0, KD.c)(rD)),
          badges: (0, RD.filterBadges)(rD.badges),
          category: rD.type,
          title: wD(rD.title),
          variationTitle: rD.variationTitle ? wD(rD.variationTitle) : null,
          description: wD(rD.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== zD ? null !== (pD = zD[DD]) && void 0 !== pD ? pD : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: rD.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: rD.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (sD = rD.canCreateCustomLobbies) || void 0 === sD || sD,
          countdownInformation: (0, nD.g)(DD)
        }
      }(pz.gameNameWithVariation, yD, ND)), [Pz, pz.gameNameWithVariation, yD, ND]), [Tz, iz] = (0, GD.useState)(!1), [lz, Wz] = (0, GD.useState)((() => lD ? dz(lD, ND) : jz)), Zz = null !== xz && void 0 !== xz ? xz : lz, [yz] = (0, GD.useState)(Zz === jz), kz = (0, sD.c)(Zz.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: mz,
        recentlyPlayedCustomLobbies: ez
      } = (0, GD.useMemo)((() => function(DD, zD, wD, pD) {
        var sD;
        const KD = DD => {
            const wD = (0, sz.o)(DD),
              pD = zD.find((zD => "custom" === zD.type ? zD.schematicId === wD : zD.gameNameWithVariation === DD));
            return pD ? [...pD.recentLobbies] : []
          },
          rD = (0, RD.getRecentGameNameWithVariationLobbiesKey)(DD),
          LD = null !== (sD = gD.h.getItem(rD)) && void 0 !== sD ? sD : [],
          cD = [...KD(DD), ...LD],
          AD = [];
        for (const gD of cD)(0, Uz.J)(gD) && !AD.includes(gD) && AD.push(gD);
        let UD = cD;
        if (wD) {
          const DD = KD("classic_worlds"),
            zD = cD.filter((zD => !DD.includes(zD)));
          UD = [...DD, ...zD]
        }
        const fD = [],
          ID = !1 === pD ? [] : UD;
        for (const gD of ID)(0, Uz.J)(gD) || fD.includes(gD) || fD.push(gD);
        return {
          recentlyPlayedPublicLobbies: AD,
          recentlyPlayedCustomLobbies: fD
        }
      }(pz.gameNameWithVariation, eD, Zz.showWorldsInsteadOfCustomLobbies, Zz.canCreateCustomLobbies)), [pz.gameNameWithVariation, eD, Zz.showWorldsInsteadOfCustomLobbies, Zz.canCreateCustomLobbies]), [oz, az] = (0, GD.useState)(!0), [uz, vz] = (0, GD.useState)([]), [tz, Fz] = (0, GD.useState)(null), [Yz, Hz] = (0, GD.useState)("explore"), qz = (0, GD.useRef)(!1), Dw = (0, GD.useCallback)((DD => {
        (0, hD.unstable_batchedUpdates)((() => {
          Jz(DD), Wz((zD => ({
            ...dz(DD, ND),
            isFavourite: zD.isFavourite
          })))
        }))
      }), [ND]);
      (0, GD.useEffect)((() => {
        null === gz.e.get("gameEntrySource") && (0, gz.k)("gameInformationPageDirect")
      }), []);
      const zw = (0, GD.useRef)(null);
      (0, GD.useEffect)((() => {
        const DD = DD => {
            zw.current = DD.target instanceof Element ? DD.target.closest("a, button") : null
          },
          zD = DD => {
            "Tab" === DD.key && (zw.current = null)
          };
        return document.addEventListener("pointerdown", DD, !0), document.addEventListener("keydown", zD, !0), () => {
          document.removeEventListener("pointerdown", DD, !0), document.removeEventListener("keydown", zD, !0)
        }
      }), []), (0, ED.d)("Enter", (DD => {
        const zD = DD.target instanceof Element ? DD.target : null;
        if (DD.defaultPrevented || null !== zD && void 0 !== zD && zD.closest("input, textarea, select")) return;
        const wD = null === zD || void 0 === zD ? void 0 : zD.closest("a, button");
        wD && wD !== zw.current || (DD.preventDefault(), Aw())
      })), (0, QD.e)(HD.navigateToHomePage);
      const ww = mz.length > 0 || ez.length > 0,
        pw = !Zz.useRejoinLastLobbyButton || 0 === mz.length,
        sw = Pz && null === Zz.ownerSocialPreviewWithoutLocation,
        Kw = kD.getPlayerName() === (null === Oz || void 0 === Oz || null === (zD = Oz.owner) || void 0 === zD ? void 0 : zD.name),
        rw = null !== (wD = null === (rD = Zz.badges.find((DD => "event" === DD.type))) || void 0 === rD ? void 0 : rD.event) && void 0 !== wD ? wD : null,
        Lw = pw ? UD.o : UD.f,
        gw = (0, SD.jsx)(AD.f, {
          tooltipInner: (0, SD.jsx)("div", {
            children: ND("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, SD.jsx)(Lw, {
            className: "GameInformationButton",
            padDefaultFocus: pw,
            showPress: !0,
            onClick: () => {
              Aw()
            },
            children: (0, SD.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [pw && (0, SD.jsxs)(SD.Fragment, {
                children: [(0, SD.jsx)(aD.e, {
                  name: "play"
                }), " "]
              }), ND("homePage:quickPlay")]
            })
          })
        });
      (0, GD.useEffect)((() => {
        if (!Pz || mD) return;
        let DD = !0;
        const zD = (0, sz.o)(pz.gameNameWithVariation);
        return xD.d.getGame(kD, zD).then((zD => {
          DD && Dw(zD)
        })).catch((zD => {
          console.error("Failed to get Custom Game information", zD), DD && (0, HD.navigateToHomePage)()
        })), xD.d.getFavouriteGames(kD).then((wD => {
          DD && Wz((DD => ({
            ...DD,
            isFavourite: wD.includes(zD)
          })))
        })).catch((zD => {
          console.error("Failed to get favourite games", zD), DD && iz(!0)
        })), () => {
          DD = !1
        }
      }), [Pz, mD, pz.gameNameWithVariation, Dw, kD]);
      const Rw = !Pz && null === xz;

      function Aw(DD) {
        (0, Cz.c)(), vD((0, MD.c)(pz.gameNameWithVariation, DD))
      }(0, GD.useEffect)((() => {
        Rw && (0, HD.navigateToHomePage)()
      }), [Rw]), (0, GD.useEffect)((() => {
        if (!1 === Zz.canCreateCustomLobbies) return;
        let DD = !0;
        return null !== Zz.showWorldsInsteadOfCustomLobbies && !1 === mD && (az(!0), xD.d.getFavouriteLobbies(kD).then((DD => {
          Fz(DD)
        })), xD.d.getOpenCustomLobbies(kD, {
          gameNameWithVariation: Zz.showWorldsInsteadOfCustomLobbies ? "classic" : pz.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === Yz,
          onlyFavouriteLobbies: "favourite" === Yz
        }).then((zD => {
          DD && (0, hD.unstable_batchedUpdates)((() => {
            vz(zD), az(!1)
          }))
        })).catch((zD => {
          console.error("Failed to get open custom lobbies", zD), DD && az(!1)
        }))), () => {
          DD = !1
        }
      }), [mD, pz, Yz, Zz.showWorldsInsteadOfCustomLobbies, Zz.canCreateCustomLobbies, kD]);
      const Uw = (0, GD.useCallback)((async DD => {
          try {
            if (!tz) return;
            tz.includes(DD) ? (xD.d.unfavouriteLobby(kD, DD), Fz(tz.filter((zD => zD !== DD)))) : (xD.d.favouriteLobby(kD, DD).catch((DD => {
              console.error("Failed to favourite lobby", DD)
            })), Fz([...tz, DD]))
          } catch (zD) {
            console.error("Failed to like lobby", zD)
          }
        }), [kD, tz]),
        fw = (null === Oz || void 0 === Oz ? void 0 : Oz.schematicId) === (0, sz.o)(Dz.gameNameWithVariation) ? Oz : null,
        Iw = fw && (0, ZD.J)(Dz.gameNameWithVariation, (DD => ND(DD)), fw);
      (0, qD.h)(fw && (0, ZD.y)(Dz.gameNameWithVariation, fw));
      const Bw = uD.featureFlags.canUseCustomLobbies && !0 === Zz.canCreateCustomLobbies,
        Gw = (0, SD.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, SD.jsx)(oD, {
            gameNameWithVariation: pz.gameNameWithVariation
          })
        });
      return (0, SD.jsx)(SD.Fragment, {
        children: (0, SD.jsxs)("article", {
          className: ID()("GameInformation", {
            GameInformationFadeIn: yz,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (fD = Zz.countdownInformation) || void 0 === fD ? void 0 : fD.type)
          }),
          children: [Iw && (0, SD.jsx)(OD.d, {
            meta: Iw
          }), (0, SD.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, SD.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, SD.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, SD.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, SD.jsx)("div", {
                  className: ID()("GameInformationTopBackgroundImage", LD.g),
                  style: (0, LD.e)(kz),
                  children: (0, SD.jsx)(LD.b, {
                    image: kz
                  })
                })]
              }), (0, SD.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, SD.jsx)(hz.b, {}), (0, SD.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, SD.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, SD.jsxs)("div", {
                      className: ID()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: sw
                      }),
                      children: [Zz.badges.map((DD => (0, SD.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${DD.type}`,
                        children: (0, SD.jsx)(PD.c, {
                          badge: DD
                        })
                      }, DD.type))), Pz && (0, SD.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, SD.jsx)(VD.e, {
                          text: (0, pD.ab)({
                            type: "playerCrafted"
                          })
                        })
                      }), Zz.category && (0, SD.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, SD.jsx)(VD.e, {
                          text: [{
                            str: (0, pD.bb)(Zz.category).toUpperCase()
                          }]
                        })
                      }), null !== Zz.ccu && (0, SD.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, SD.jsx)(aD.e, {
                          name: "user"
                        }), (0, Uz.N)(Zz.ccu), " online"]
                      }), null !== Zz.ownerSocialPreviewWithoutLocation && (0, SD.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, SD.jsx)("span", {
                          children: "Made by"
                        }), (0, SD.jsx)(jD.e, {
                          playerSocialPreview: {
                            ...Zz.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), sw && (0, SD.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, SD.jsx)("span", {
                          children: "Made by"
                        }), (0, SD.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== Zz.favourites && (null !== Zz.isFavourite || Pz && !Tz) && (0, SD.jsx)(UD.x, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== qz.current && (qz.current = !0, null !== Zz.isFavourite)) {
                              const DD = (0, sz.o)(pz.gameNameWithVariation);
                              let zD;
                              Zz.isFavourite ? (zD = -1, xD.d.unfavouriteGame(kD, DD).catch((DD => {
                                console.error("Failed to get unfavourite game", DD)
                              })).finally((() => {
                                qz.current = !1
                              }))) : (zD = 1, xD.d.favouriteGame(kD, DD).catch((DD => {
                                console.error("Failed to get favourite game", DD)
                              })).finally((() => {
                                qz.current = !1
                              }))), Wz((DD => ({
                                ...DD,
                                isFavourite: !DD.isFavourite
                              }))), Wz((DD => ({
                                ...DD,
                                favourites: DD.favourites + zD
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (CD = Zz.isFavourite) && void 0 !== CD && CD,
                        disabled: null === Zz.isFavourite,
                        className: ID()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === Zz.isFavourite
                        })
                      }, null === Zz.isFavourite ? "pending" : "known"), Pz && !sw && uD.featureFlags.useSocialFeatures && !Kw && (0, SD.jsx)(Qz.d, {
                        targetType: "customGame",
                        targetId: (0, sz.o)(pz.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (kD.playerHasRank("developer") || kD.playerHasRank("admin") && Kw) && (0, SD.jsxs)(UD.o, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          vD((0, Lz.i)((0, rz.g)(pz.gameNameWithVariation, !0)))
                        },
                        children: [(0, SD.jsx)(aD.e, {
                          name: "star-christmas"
                        }), " ", ND("studio:viewInStudio")]
                      }), Pz && kD.playerHasRank("developer") && (0, SD.jsxs)(UD.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, fz.e)({
                            schematicId: (0, sz.o)(pz.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, SD.jsx)(aD.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), Pz && kD.playerHasRank("developer") && (0, SD.jsxs)(UD.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          zz.NotificationProvider.showCustomPopup({
                            body: () => (0, SD.jsx)(Gz, {
                              schematicId: (0, sz.o)(pz.gameNameWithVariation),
                              gameName: Zz.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, SD.jsx)(aD.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (TD = Zz.countdownInformation) || void 0 === TD ? void 0 : TD.type) && (0, SD.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, SD.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, SD.jsx)(XD.d, {
                            toTime: Zz.countdownInformation.countdownToTime
                          })]
                        }), (0, SD.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: Zz.countdownInformation.previewText
                        })]
                      })]
                    }, sw ? "pending" : "shown"), (0, SD.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, SD.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, SD.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [Zz.title, " ", Zz.variationTitle && (null === (bD = Az.e[pz.gameNameWithVariation]) || void 0 === bD ? void 0 : bD.variationThumbnailUseBigRatio) && (0, SD.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: Zz.variationTitle
                          })]
                        })
                      }), Zz.listedVariations && Zz.listedVariations.length > 0 && (0, SD.jsx)("div", {
                        className: ID()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (dD = Az.e[pz.gameNameWithVariation]) || void 0 === dD ? void 0 : dD.variationThumbnailUseBigRatio
                        }),
                        children: Zz.listedVariations.map((DD => {
                          var zD, wD;
                          return (0, SD.jsxs)(Nz, {
                            variation: DD,
                            isSelected: pz.gameNameWithVariation === DD,
                            children: [null !== yD && (0, SD.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, SD.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, SD.jsx)(aD.e, {
                                  name: "user"
                                }), " ", (0, Uz.N)(null !== (zD = yD[DD]) && void 0 !== zD ? zD : 0)]
                              })
                            }), (0, SD.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: ND(null !== (wD = Az.e[DD].variationTitle) && void 0 !== wD ? wD : Az.e[DD].title)
                            }), (0, SD.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, RD.filterBadges)(Az.e[DD].badges).map((DD => (0, SD.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + DD.type,
                                children: (0, SD.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, SD.jsx)(PD.c, {
                                    badge: DD
                                  })
                                })
                              }, DD.type)))
                            })]
                          }, DD)
                        }))
                      })]
                    }), Zz.description && (0, SD.jsx)("p", {
                      className: "GameInformationDescription",
                      children: Zz.description
                    })]
                  }), (0, SD.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, SD.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!pw && (0, SD.jsx)(AD.f, {
                        tooltipInner: (0, SD.jsx)("div", {
                          children: ND("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, SD.jsx)(UD.o, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            Aw(mz[0])
                          },
                          children: (0, SD.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, SD.jsx)(aD.e, {
                              name: "play"
                            }), " ", ND("homePage:rejoinLobbyNumber", {
                              number: mz[0]
                            })]
                          })
                        })
                      }), pw && gw]
                    }), (0, SD.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!pw && gw, (0, SD.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, SD.jsx)(aD.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, SD.jsx)(BD.e, {
                          className: "JoinLobbyInput",
                          placeholderText: ND("homePage:lobbyName"),
                          maxLength: Uz.L,
                          domRef: Mz,
                          onValueChange: DD => {
                            DD = (0, Uz.mb)(DD), Bz(DD)
                          },
                          onEnter: () => {
                            0 === Iz.length ? Aw(mz[0]) : Aw(Iz)
                          }
                        }), (0, SD.jsx)(UD.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === Iz.length ? Aw(mz[0]) : Aw(Iz)
                          },
                          children: ND("general:join")
                        })]
                      })]
                    }), (0, SD.jsxs)("section", {
                      className: ID()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !ww
                      }),
                      children: [(0, SD.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, SD.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, SD.jsx)(aD.e, {
                            name: "clock-rotate-left"
                          }), ww && (0, SD.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: ND("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, SD.jsx)(Xz.d, {
                        lobbyGroups: [mz, ez],
                        onLobbyClick: DD => {
                          Aw(DD)
                        },
                        keyPrefix: pz.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== rw && (0, SD.jsx)(WD, {
                eventName: rw
              })]
            }), Bw && (0, SD.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, SD.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, SD.jsxs)("div", {
                  className: ID()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === Zz.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === Zz.showWorldsInsteadOfCustomLobbies && (0, SD.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, SD.jsx)(aD.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, SD.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, SD.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), ND("game:worlds")]
                    })]
                  }), !1 === Zz.showWorldsInsteadOfCustomLobbies && (0, SD.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, SD.jsx)(aD.e, {
                      name: "joystick"
                    }), (0, SD.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, SD.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), ND("homePage:customLobbies")]
                    })]
                  }), (0, SD.jsx)(UD.Y, {
                    onClick: () => {
                      Hz("explore")
                    },
                    active: "explore" === Yz,
                    children: ND("general:explore")
                  }), (0, SD.jsx)(UD.Y, {
                    onClick: () => {
                      Hz("favourite")
                    },
                    active: "favourite" === Yz,
                    children: ND("homePage:favouriteLobbies")
                  }), (0, SD.jsx)(UD.Y, {
                    onClick: () => {
                      Hz("owned")
                    },
                    active: "owned" === Yz,
                    children: ND("homePage:ownedLobbies")
                  })]
                }), (0, SD.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, SD.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, SD.jsx)(nz.b, {
                      label: "Create",
                      onClick: () => {
                        zz.NotificationProvider.showCustomPopup({
                          body: DD => (0, SD.jsx)(wz.CreateCustomLobby, {
                            gameNameWithVariation: pz.gameNameWithVariation,
                            close: DD
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === oz && (0, SD.jsx)(nz.e, {}), !1 === oz && (0, SD.jsx)(Ez, {
                      customLobbies: uz,
                      favouriteLobbies: tz,
                      toggleLikeLobby: Uw,
                      showReport: uD.featureFlags.useSocialFeatures && "owned" !== Yz
                    })]
                  }), Gw]
                })]
              })
            })]
          }), !Bw && Gw]
        })
      })
    }

    function Nz(DD) {
      let {
        variation: zD,
        isSelected: wD,
        children: pD
      } = DD;
      const cD = Az.e[zD],
        RD = (0, KD.j)(zD, (0, KD.k)(cD)),
        AD = (0, sD.c)(RD),
        UD = (0, rD.g)([(0, KD.i)(zD, (0, KD.c)(cD))]);
      return (0, SD.jsxs)(HD.LinkPreserveSearch, {
        to: (0, ZD.y)(zD),
        replace: !0,
        className: ID()("GameInformationVariation", LD.g, {
          SelectedGameInformationVariation: wD
        }),
        onClick: DD => {
          if (!(0, Dz.e)(DD)) return;
          const wD = (0, nD.k)(zD);
          gD.h.setItem(wD, zD)
        },
        onMouseEnter: UD.start,
        onMouseLeave: UD.cancel,
        onFocus: UD.start,
        onBlur: UD.cancel,
        style: (0, LD.e)(AD),
        children: [(0, SD.jsx)(LD.b, {
          image: AD
        }), pD]
      })
    }
  },
  6554: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => nD
    });
    var pD = wD(58),
      sD = wD(1447),
      KD = wD(1495),
      rD = wD(3482),
      LD = wD(1127),
      cD = wD(1346),
      gD = wD(1366),
      RD = wD(1057),
      AD = wD(1044),
      UD = wD.n(AD),
      fD = wD(6546),
      ID = wD(1096);

    function BD(DD) {
      let {
        info: zD,
        className: wD
      } = DD;
      const {
        statusText: pD,
        rowText: sD
      } = (0, fD.e)();
      return (0, ID.jsxs)("div", {
        className: UD()("GameApprovalInfoDetails", wD),
        children: [(0, ID.jsxs)("div", {
          className: UD()("GameApprovalInfoSummary", zD.overallPassed ? "Passed" : "Failed"),
          children: [(0, ID.jsx)(RD.e, {
            name: zD.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, ID.jsx)("span", {
            children: pD(zD.status)
          })]
        }), zD.rows.length > 0 && (0, ID.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: zD.rows.map((DD => {
            const {
              label: zD,
              value: wD
            } = sD(DD);
            return (0, ID.jsxs)("div", {
              className: UD()("GameApprovalInfoRow", DD.passed ? "Passed" : "Failed"),
              children: [(0, ID.jsx)(RD.e, {
                name: DD.passed ? "check" : "xmark"
              }), (0, ID.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, ID.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: zD
                }), null !== wD && (0, ID.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: wD
                })]
              })]
            }, DD.kind)
          }))
        })]
      })
    }
    var GD = wD(1200),
      hD = wD(1355);

    function nD(DD) {
      hD.NotificationProvider.showCustomPopup({
        body: () => (0, ID.jsx)(MD, {
          ...DD
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function MD(DD) {
      let {
        schematicId: zD,
        canOverride: wD,
        onApprovalChanged: AD
      } = DD;
      const {
        t: UD
      } = (0, GD.E)(), {
        userContext: fD
      } = (0, LD.c)(), hD = (0, rD.c)(), [nD, MD] = (0, pD.useState)(null), [OD, JD] = (0, pD.useState)(null), [ED, QD] = (0, pD.useState)(!1), XD = (0, pD.useCallback)((() => {
        JD(null), KD.d.getGameApprovalInfo(fD, zD).then((DD => {
          hD.current && MD(DD)
        })).catch((DD => {
          console.error("Failed to get game approval info", DD), hD.current && JD(UD("studio:approvalLoadFailed"))
        }))
      }), [fD, zD, hD, UD]);
      (0, pD.useEffect)((() => {
        XD()
      }), [XD]);
      const VD = DD => {
        ED || (QD(!0), KD.d.setGameApproval(fD, zD, DD).then((() => {
          null === AD || void 0 === AD || AD(), hD.current && XD()
        })).catch((DD => {
          console.error("Failed to set game approval", DD)
        })).finally((() => {
          hD.current && QD(!1)
        })))
      };
      return (0, ID.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, ID.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: UD("studio:approvalTitle")
        }), !nD && !OD && (0, ID.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, ID.jsx)(cD.e, {})
        }), OD && (0, ID.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: OD
        }), nD && (0, ID.jsxs)(ID.Fragment, {
          children: [(0, ID.jsx)(BD, {
            info: nD
          }), wD && (0, ID.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== nD.manualOverride && (0, ID.jsx)(gD.f, {
              tooltipInner: (0, ID.jsx)("div", {
                children: UD("studio:approvalApproveTooltip")
              }),
              children: (0, ID.jsxs)(sD.o, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  VD(!0)
                },
                disabled: ED,
                children: [(0, ID.jsx)(RD.e, {
                  name: "check"
                }), " ", UD("studio:approvalApprove")]
              })
            }), !1 !== nD.manualOverride && (0, ID.jsx)(gD.f, {
              tooltipInner: (0, ID.jsx)("div", {
                children: UD("studio:approvalDenyTooltip")
              }),
              children: (0, ID.jsxs)(sD.R, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  VD(!1)
                },
                disabled: ED,
                children: [(0, ID.jsx)(RD.e, {
                  name: "xmark"
                }), " ", UD("studio:approvalDeny")]
              })
            }), null !== nD.manualOverride && (0, ID.jsx)(gD.f, {
              tooltipInner: (0, ID.jsx)("div", {
                children: UD("studio:approvalClearOverrideTooltip")
              }),
              children: (0, ID.jsxs)(sD.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  VD(null)
                },
                disabled: ED,
                children: [(0, ID.jsx)(RD.e, {
                  name: "arrows-rotate"
                }), " ", UD("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6546: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => LD,
      e: () => rD
    });
    var pD = wD(351),
      sD = wD(1200);
    const KD = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function rD() {
      const {
        t: DD,
        selectedLanguage: zD
      } = (0, sD.E)();
      return {
        statusText: zD => DD(KD[zD]),
        rowText: wD => {
          const KD = (DD, wD) => (0, pD.fb)((0, sD.n)(zD.code, DD), 0, wD);
          switch (wD.kind) {
            case "ownerAccountAge": {
              const zD = wD.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: DD("studio:approvalAccountAgeLabel"),
                value: DD(zD, {
                  age: KD(zD, wD.accountAgeMs),
                  days: wD.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: DD("studio:approvalSinceUnbannedLabel"), value: DD("studio:approvalSinceUnbannedValue", {
                  time: KD("studio:approvalSinceUnbannedValue", wD.sinceMs),
                  days: wD.minDays
                })
              };
            case "reportHold": {
              const {
                detail: zD
              } = wD;
              if (null === zD) return {
                label: DD("studio:approvalUnderInvestigation"),
                value: null
              };
              const pD = zD.weightedReporters.toFixed(1),
                sD = zD.threshold.toFixed(1),
                rD = DD("studio:approvalReportHoldLabel", {
                  hours: zD.windowHours
                });
              if (null === zD.heldUntil) return {
                label: rD,
                value: DD("studio:approvalReportHoldValue", {
                  weightedReporters: pD,
                  threshold: sD
                })
              };
              const LD = "studio:approvalReportHoldValueHeld";
              return {
                label: rD,
                value: DD(LD, {
                  weightedReporters: pD,
                  threshold: sD,
                  time: KD(LD, zD.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function LD(DD) {
      return null === DD.manualOverride && DD.rows.some((DD => "reportHold" === DD.kind && !DD.passed))
    }
  },
  34241: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD
    });
    var pD = wD(58),
      sD = wD(3444);

    function KD() {
      const [DD, zD] = (0, pD.useState)(!1);
      return (0, pD.useLayoutEffect)((() => {
        let DD = !0;
        return (0, sD.e)().then((() => {
          DD && zD(!0)
        })), () => {
          DD = !1
        }
      }), []), DD
    }
  },
  8919: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD
    });
    var pD = wD(1339),
      sD = wD(1232),
      KD = wD(619);

    function rD(DD) {
      return DD = function(DD, zD) {
        var wD;
        const pD = new URLSearchParams(zD),
          sD = pD.get("lobby"),
          KD = pD.get("vm"),
          rD = null !== (wD = sD) && void 0 !== wD ? wD : DD.lobbyName,
          LD = null !== KD && void 0 !== KD ? KD : DD.directJoinVmUrl;
        if (rD === DD.lobbyName && LD === DD.directJoinVmUrl) return DD;
        return {
          ...DD,
          lobbyName: rD,
          directJoinVmUrl: LD
        }
      }(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), DD = function(DD) {
        if ((0, KD.B)(DD.directJoinVmUrl)) return DD;
        const zD = (0, sD.V)(DD.directJoinVmUrl);
        null === zD && (DD.directJoinVmUrl = void 0);
        return DD
      }(DD = function(DD) {
        if ((0, KD.B)(DD.gameNameWithVariation)) return DD;
        return DD.gameNameWithVariation = (0, pD.i)(DD.gameNameWithVariation), DD
      }(DD))
    }
  },
  8915: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      c: () => sD
    });
    let pD = !1;

    function sD() {
      pD = !0
    }

    function KD() {
      return pD
    }
  },
  36352: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      d: () => pD
    });
    const pD = "skyblockSkills",
      sD = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);