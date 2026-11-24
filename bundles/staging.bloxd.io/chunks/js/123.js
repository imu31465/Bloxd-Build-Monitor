export const id = 123;
export const ids = [123, 401];
export const modules = {
  36413: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => QU
    });
    var WT = mT(351),
      zT = mT(3599),
      MT = mT(3644),
      gT = mT(3635),
      nT = mT(3627),
      HT = mT(1288),
      kT = mT(44),
      jT = mT(1863),
      lT = mT(1475),
      LT = mT(1569),
      pT = mT(1126),
      BT = mT.n(pT),
      ZT = mT(1792),
      cT = mT(63),
      vT = mT(85),
      fT = mT(2490),
      qT = mT(1437),
      iT = mT(1731),
      bT = mT(1225),
      OT = mT(3518),
      eT = mT(4655),
      YT = mT(3577),
      JT = mT(2023),
      xT = mT(3593),
      dT = mT(1872),
      wT = mT(1613),
      tT = mT(2286),
      aT = mT(1446),
      yT = mT(2713),
      XT = mT(5116),
      IT = mT(1188);
    const QT = 15e3,
      sT = 2500;

    function FT(TT) {
      var UT;
      let {
        eventName: mT
      } = TT;
      const {
        t: WT
      } = (0, HT.z)(), zT = dT.e[mT], [MT, gT] = (0, cT.useState)((() => Date.now() >= zT.endsAt.getTime())), [nT, kT] = (0, cT.useState)("overall"), jT = function(TT, UT) {
        const {
          userContext: mT,
          isUserContextUpdating: WT
        } = (0, bT.d)(), zT = `${TT}:${UT}`, [MT, gT] = (0, cT.useState)({
          requestKey: zT,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, cT.useEffect)((() => {
          if (WT) return;
          let MT, nT = !1;
          const HT = async () => {
            if ("visible" === document.visibilityState) try {
              const WT = await wT.b.getGameEventLeaderboard(mT, {
                event: TT,
                scope: UT
              });
              nT || gT({
                requestKey: zT,
                leaderboard: {
                  status: "loaded",
                  leaderboard: WT
                }
              })
            } catch {
              nT || gT((TT => TT.requestKey === zT && "loaded" === TT.leaderboard.status ? TT : {
                requestKey: zT,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            nT || (MT = setTimeout(HT, QT))
          };
          return HT(), () => {
            nT = !0, clearTimeout(MT)
          }
        }), [TT, UT, zT, mT, WT]), MT.requestKey === zT ? MT.leaderboard : {
          status: "loading"
        }
      }(mT, nT), lT = function(TT) {
        const UT = (0, cT.useRef)(null),
          mT = (0, cT.useRef)(0),
          WT = (0, cT.useRef)(),
          [zT, MT] = (0, cT.useState)({});
        return (0, cT.useEffect)((() => {
          const zT = null === TT || void 0 === TT ? void 0 : TT.entries;
          if (!zT) return;
          const gT = new Map(zT.map((TT => [TT.player.name, TT.value]))),
            nT = UT.current;
          if (UT.current = gT, null === nT) return;
          const HT = {};
          for (const [TT, UT] of gT) {
            const WT = nT.get(TT);
            void 0 !== WT && UT > WT && (HT[TT] = {
              amount: UT - WT,
              key: mT.current++
            })
          }
          0 !== Object.keys(HT).length && (MT(HT), clearTimeout(WT.current), WT.current = setTimeout((() => {
            MT({})
          }), sT))
        }), [TT]), (0, cT.useEffect)((() => () => {
          clearTimeout(WT.current)
        }), []), zT
      }("loaded" === jT.status ? jT.leaderboard : null), LT = function(TT) {
        const [UT, mT] = (0, cT.useState)(null), WT = "loaded" === TT.status ? TT.leaderboard.goalProgress : void 0;
        return (0, cT.useEffect)((() => {
          WT && mT(WT)
        }), [WT]), UT
      }(jT), pT = tT.c[`profileEffect_${zT.prizePack}`];
      if (MT) return null;
      const ZT = "loaded" === jT.status ? jT.leaderboard : null,
        vT = null !== (UT = null === ZT || void 0 === ZT ? void 0 : ZT.entries) && void 0 !== UT ? UT : null,
        fT = null !== ZT && void 0 !== ZT && ZT.own && null !== vT && !vT.some((TT => TT.isOwn)) ? ZT.own : null;
      return (0, IT.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, IT.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, IT.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, IT.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, IT.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, IT.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), WT("gameEvents:live")]
              }), (0, IT.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [WT("gameEvents:endsIn"), (0, IT.jsx)(YT.e, {
                  toTime: zT.endsAt,
                  onReachEndOfCountdown: () => {
                    gT(!0)
                  }
                })]
              })]
            }), (0, IT.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: WT(zT.titleKey)
            }), (0, IT.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, IT.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [pT && (0, IT.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, IT.jsx)(pT, {})
                }), (0, IT.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, IT.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: WT("gameEvents:prize")
                  }), (0, IT.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: WT(zT.prizeNameKey)
                  })]
                })]
              }), (0, IT.jsx)(PT, {
                event: zT,
                progress: LT
              })]
            })]
          }), (0, IT.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, IT.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, IT.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: WT(zT.leaderboard.titleKey)
              }), (0, IT.jsx)(XT.c, {
                ariaLabel: WT("gameEvents:leaderboardScope"),
                options: dT.d.map((TT => ({
                  value: TT,
                  label: WT(`gameEvents:${TT}Scope`)
                }))),
                value: nT,
                onChange: kT
              })]
            }), "loading" === jT.status && (0, IT.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, IT.jsx)(aT.c, {})
            }), ("unavailable" === jT.status || "loaded" === jT.status && null === vT) && (0, IT.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: WT("gameEvents:leaderboardUnavailable")
            }), null !== vT && 0 === vT.length && (0, IT.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: WT("friends" === nT ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== vT && vT.length > 0 && (0, IT.jsx)("ol", {
              className: "GameEventPanelRows",
              children: vT.map((TT => {
                const UT = lT[TT.player.name];
                return (0, IT.jsxs)("li", {
                  className: BT()("GameEventPanelRow", {
                    GameEventPanelRowOwn: TT.isOwn,
                    GameEventPanelRowTop: TT.rank <= 3
                  }),
                  children: [(0, IT.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", TT.rank]
                  }), (0, IT.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, IT.jsx)(yT.i, {
                      playerSocialPreview: {
                        ...TT.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== UT && (0, IT.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", UT.amount.toLocaleString()]
                  }, UT.key), (0, IT.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: TT.value.toLocaleString()
                  })]
                }, TT.player.name)
              }))
            }), fT && (0, IT.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, IT.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", fT.rank.toLocaleString()]
              }), (0, IT.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: WT("gameEvents:yourPlace")
              }), (0, IT.jsx)("span", {
                className: "GameEventPanelScore",
                children: fT.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function PT(TT) {
      let {
        event: UT,
        progress: mT
      } = TT;
      const {
        t: WT
      } = (0, HT.z)(), zT = null !== mT && UT.prizeGoals.some(((TT, UT) => mT[UT] >= TT.target));
      return (0, IT.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, IT.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: WT(zT ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, IT.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: UT.prizeGoals.map(((TT, UT) => {
            const zT = null === mT ? null : Math.min(mT[UT], TT.target);
            return (0, IT.jsxs)(cT.Fragment, {
              children: [UT > 0 && (0, IT.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: WT("gameEvents:goalsOr")
              }), (0, IT.jsxs)("div", {
                className: BT()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: zT === TT.target
                }),
                children: [(0, IT.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: WT(TT.labelKey)
                }), (0, IT.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, IT.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== zT && void 0 !== zT ? zT : 0) / TT.target * 100 + "%"
                    }
                  }), null !== zT && (0, IT.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [zT.toLocaleString(), " / ", TT.target.toLocaleString()]
                  })]
                })]
              })]
            }, TT.board)
          }))
        })]
      })
    }
    var VT = mT(1667),
      uT = mT(1717),
      CT = mT(1113),
      rT = mT(782),
      KT = mT(3568);

    function ST(TT) {
      let {
        gameNameWithVariation: UT
      } = TT;
      const mT = (0, VT.z)(UT),
        [WT, zT] = (0, cT.useState)(null);
      if ((0, cT.useEffect)((() => {
          if (!mT) return;
          let TT = !0;
          return (0, uT.i)(mT).then((UT => {
            TT && zT(UT)
          })).catch((TT => {
            console.error(`Failed to load the page copy for ${mT.name}`, TT)
          })), () => {
            TT = !1
          }
        }), [mT]), !mT || !WT || WT.name !== mT.name) return null;
      const MT = (0, uT.e)(WT),
        gT = new Set((0, CT.b)((0, rT.j)()).map((TT => (0, VT.r)(TT)))),
        nT = WT.similarGames.filter((TT => gT.has((0, VT.r)(TT))));
      return (0, IT.jsx)("div", {
        className: "GamePageContent",
        children: (0, IT.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, IT.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, IT.jsx)("h2", {
              children: MT.whatIs
            }), WT.whatIs.map((TT => (0, IT.jsx)("p", {
              children: TT
            }, TT)))]
          }), (0, IT.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, IT.jsx)("h2", {
              children: MT.howToPlay
            }), WT.howToPlay.map((TT => (0, IT.jsx)("p", {
              children: TT
            }, TT)))]
          }), (0, IT.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, IT.jsx)("h2", {
              children: MT.features
            }), (0, IT.jsx)("ul", {
              children: WT.features.map((TT => (0, IT.jsx)("li", {
                children: TT
              }, TT)))
            })]
          }), (0, IT.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, IT.jsx)("h2", {
              children: MT.tips
            }), (0, IT.jsx)("ul", {
              children: WT.tips.map((TT => (0, IT.jsx)("li", {
                children: TT
              }, TT)))
            })]
          }), (0, IT.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, IT.jsx)("h2", {
              children: MT.faq
            }), WT.faq.map((TT => {
              let {
                question: UT,
                answer: mT
              } = TT;
              return (0, IT.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, IT.jsx)("h3", {
                  children: UT
                }), (0, IT.jsx)("p", {
                  children: mT
                })]
              }, UT)
            }))]
          }), nT.length > 0 && (0, IT.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, IT.jsx)("h2", {
              children: MT.similarGames
            }), (0, IT.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: nT.map((TT => (0, IT.jsx)("li", {
                children: (0, IT.jsx)(KT.f, {
                  source: {
                    type: "game",
                    gameNameWithVariation: TT
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, TT)))
            })]
          })]
        })
      })
    }
    var GT = mT(1135),
      NT = mT(102),
      ET = mT(1231),
      hT = mT(34323),
      DT = mT(1772),
      oT = mT(1641),
      AT = mT(1633),
      RT = mT(1723),
      TU = mT(1580),
      UU = mT(1457),
      mU = mT(36415),
      WU = mT(1327),
      zU = mT(1089),
      MU = mT(366),
      gU = mT(1099),
      nU = mT(1658),
      HU = mT(9039),
      kU = mT(25),
      jU = mT(2641),
      lU = mT(825),
      LU = mT(1321),
      pU = mT(6569),
      BU = mT(3582);

    function ZU(TT) {
      let {
        preview: UT,
        isBroken: mT
      } = TT;
      const WT = null === UT ? null : (0, MT.e)(UT, "small"),
        gT = (0, zT.e)(null !== WT && void 0 !== WT ? WT : MT.n);
      return null === UT ? (0, IT.jsx)("div", {
        className: BT()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: mT
        }),
        children: (0, IT.jsx)(GT.c, {
          name: mT ? "triangle-exclamation" : "star"
        })
      }) : (0, IT.jsx)("div", {
        className: BT()("FeaturedGamesPopupSlotThumbnail", nT.h),
        style: (0, nT.e)(gT),
        role: "img",
        "aria-label": UT.name,
        children: (0, IT.jsx)(nT.c, {
          image: gT
        })
      })
    }

    function cU(TT) {
      let {
        schematicId: UT,
        gameName: mT
      } = TT;
      const {
        userContext: zT
      } = (0, bT.d)(), MT = (0, BU.c)(), [gT, nT] = (0, cT.useState)(null), [HT, kT] = (0, cT.useState)(null), [jT, lT] = (0, cT.useState)(!1), pT = (0, cT.useCallback)((() => {
        kT(null), wT.b.getFeaturedGames(zT).then((TT => {
          MT.current && nT(TT.slots)
        })).catch((TT => {
          console.error("Failed to get featured games", TT), MT.current && kT("Failed to load featured games")
        }))
      }), [zT, MT]);
      (0, cT.useEffect)((() => {
        pT()
      }), [pT]);
      const BT = (TT, UT) => {
        jT || (lT(!0), wT.b.setFeaturedGame(zT, TT, UT).then((() => {
          MT.current && pT()
        })).catch((TT => {
          console.error("Failed to set featured game", TT), MT.current && kT("Failed to update the featured slot")
        })).finally((() => {
          MT.current && lT(!1)
        })))
      };
      return (0, IT.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, IT.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !gT && !HT && (0, IT.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, IT.jsx)(aT.c, {})
        }), HT && (0, IT.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: HT
        }), gT && (0, IT.jsxs)(IT.Fragment, {
          children: [(0, IT.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: gT.map((TT => {
              const mT = TT.schematicId === UT,
                zT = null === TT.schematicId,
                {
                  categoryGroup: MT
                } = WT.F[TT.slotId];
              return (0, IT.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, IT.jsx)(ZU, {
                  preview: TT.preview,
                  isBroken: !zT
                }), (0, IT.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, IT.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, WT.ab)(MT), " \xb7 position", " ", (0, WT.I)(TT.slotId, WT.Fb) + 1, " of", " ", (0, WT.Bb)(MT, WT.Fb)]
                  }), zT && (0, IT.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !zT && null !== TT.preview && (0, IT.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: TT.preview.name
                  }), !zT && null === TT.preview && (0, IT.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, IT.jsx)(GT.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, IT.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [zT && (0, IT.jsxs)(LT.s, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      BT(TT.slotId, UT)
                    },
                    disabled: jT,
                    children: [(0, IT.jsx)(GT.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !zT && !mT && (0, IT.jsxs)(LT.L, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      BT(TT.slotId, UT)
                    },
                    disabled: jT,
                    children: [(0, IT.jsx)(GT.c, {
                      name: "star"
                    }), " Replace"]
                  }), !zT && (0, IT.jsxs)(LT.I, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      BT(TT.slotId, null)
                    },
                    disabled: jT,
                    children: [(0, IT.jsx)(GT.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, TT.slotId)
            }))
          }), (0, IT.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var vU = mT(4761),
      fU = mT(4688),
      qU = mT(3536);
    const iU = 8,
      bU = 12;

    function OU(TT) {
      let {
        customLobbies: UT,
        favouriteLobbies: mT,
        toggleLikeLobby: WT,
        showReport: zT
      } = TT;
      const [MT, gT] = (0, cT.useState)(iU);
      return (0, cT.useEffect)((() => {
        if (MT >= UT.length) return;
        let TT = !0;
        return (0, qU.h)().then((() => {
          TT && gT(MT + bU)
        })), () => {
          TT = !1
        }
      }), [MT, UT.length]), (0, IT.jsx)(IT.Fragment, {
        children: UT.slice(0, MT).map((TT => (0, IT.jsx)(fU.e, {
          customLobby: TT,
          favouriteLobbies: mT,
          toggleLikeLobby: WT,
          showReport: zT
        }, TT.name)))
      })
    }
    var eU = mT(4696),
      YU = mT(4707),
      JU = mT(4673),
      xU = mT(3674),
      dU = mT(9036),
      wU = mT(227);
    const tU = {
      skyblock: [mT(36437).c]
    };
    var aU = mT(653);
    const yU = {
      listedVariations: null,
      backgroundImage: MT.n,
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

    function XU(TT, UT) {
      const mT = lU.h[TT.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, MT.e)(TT, "large"),
        badges: [],
        category: TT.gameCategory,
        title: void 0 !== (null === mT || void 0 === mT ? void 0 : mT.title) ? UT(mT.title) : TT.name,
        variationTitle: null,
        description: void 0 !== (null === mT || void 0 === mT ? void 0 : mT.description) ? UT(mT.description) : TT.description,
        ownerSocialPreviewWithoutLocation: "owner" in TT ? TT.owner : null,
        ccu: TT.ccu,
        favourites: TT.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in TT ? TT.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function IU(TT) {
      var UT, mT, WT;
      return null !== (UT = null !== (mT = (0, wU.k)() ? function(TT) {
        for (const [UT, mT] of Object.entries(tU)) {
          const WT = [UT, ...mT.map((TT => (0, MU.ac)(UT, TT)))];
          if (WT.includes(TT)) return WT
        }
        return null
      }(TT) : null) && void 0 !== mT ? mT : null === (WT = lU.d[TT]) || void 0 === WT ? void 0 : WT.listedVariations) && void 0 !== UT ? UT : null
    }

    function QU() {
      const {
        gameNameWithVariation: TT
      } = (0, oT.y)();
      if ((0, cT.useEffect)(xU.n, []), TT && (0, WU.u)(TT)) return (0, IT.jsx)(sU, {
        urlId: TT
      }, TT);
      const UT = TT && (0, zU.k)(TT) ? TT : "firstParty";
      return (0, IT.jsx)(FU, {}, UT)
    }

    function sU(TT) {
      let {
        urlId: UT
      } = TT;
      const {
        userContext: mT,
        isUserContextUpdating: WT
      } = (0, bT.d)(), zT = (0, cT.useMemo)((() => (0, DT.j)(UT)), [UT]);
      (0, cT.useMemo)((() => {
        if (null === zT) return;
        const TT = ET.userContextManager.peekCurrentUserContext();
        (null !== TT ? wT.b.getGame(TT, zT.schematicId) : ET.userContextManager.getCurrentUserContext().then((TT => wT.b.getGame(TT, zT.schematicId)))).catch((TT => {
          console.error(`Failed to get the custom game ${zT.schematicId}`, TT), (0, DT.f)(UT)
        }))
      }), [zT, UT]);
      const [MT, gT] = (0, cT.useState)(null), nT = (0, hT.d)();
      (0, cT.useEffect)((() => {
        if (null !== zT || WT) return;
        let TT = !0;
        return wT.b.getGameByUrlId(mT, UT).then((mT => {
          TT && gT({
            urlId: UT,
            game: mT
          })
        })).catch((mT => {
          console.error(`Failed to find the custom game with urlId ${UT}`, mT), TT && (0, AT.navigateToHomePage)()
        })), () => {
          TT = !1
        }
      }), [UT, zT, WT, mT]);
      const HT = null !== zT && void 0 !== zT ? zT : (null === MT || void 0 === MT ? void 0 : MT.urlId) === UT ? MT.game : null;
      return null === HT ? (0, IT.jsx)(aT.c, {}) : nT ? (0, IT.jsx)(FU, {
        gameNameWithVariation: (0, zU.s)(HT.schematicId),
        knownCustomGame: HT
      }, HT.schematicId) : null
    }

    function FU(TT) {
      var UT, mT, gT, pT, dT, tT, aT, XT;
      let {
        gameNameWithVariation: QT,
        knownCustomGame: sT = null
      } = TT;
      const {
        t: PT
      } = (0, HT.z)();
      (0, jU.i)();
      const uT = (0, jU.m)(),
        {
          userContext: CT,
          isUserContextUpdating: rT
        } = (0, bT.d)(),
        KT = (0, JU.e)(),
        ET = (0, AT.useNavigatePreserveSearch)(),
        hT = (0, oT.y)(),
        DT = (0, cT.useMemo)((() => QT ? {
          gameNameWithVariation: QT
        } : hT), [QT, hT]),
        TU = (0, HU.b)(DT),
        WU = (0, cT.useMemo)((() => {
          const TT = function(TT) {
            var UT, mT;
            const WT = IU(TT);
            if (!WT || 0 === WT.length || WT.includes(TT)) return TT;
            const zT = kT.l.getItem((0, fT.g)(TT));
            if (zT && WT.includes(zT)) return zT;
            return null !== (UT = null === (mT = lU.d[TT]) || void 0 === mT ? void 0 : mT.defaultListedVariation) && void 0 !== UT ? UT : WT[0]
          }(TU.gameNameWithVariation);
          return TT === TU.gameNameWithVariation ? TU : {
            ...TU,
            gameNameWithVariation: TT
          }
        }), [TU]);
      (0, cT.useEffect)((() => {
        const TT = TU.gameNameWithVariation;
        WU.gameNameWithVariation !== TT && TT !== (0, MU.dc)(TT) && ET((0, VT.v)(WU.gameNameWithVariation), {
          replace: !0
        })
      }), [WU.gameNameWithVariation, TU.gameNameWithVariation, ET]);
      const [BU, ZU] = (0, cT.useState)(""), qU = cT.useRef(null), [iU, bU] = (0, cT.useState)(), xU = (0, zU.k)(WU.gameNameWithVariation), wU = (0, cT.useMemo)((() => xU ? null : function(TT, UT, mT) {
        var WT, zT;
        const gT = lU.d[TT];
        return (0, aU.E)(gT) ? null : {
          listedVariations: IU(TT),
          backgroundImage: (0, MT.j)(TT, (0, MT.d)(gT)),
          badges: (0, jT.filterBadges)(gT.badges),
          category: gT.type,
          title: mT(gT.title),
          variationTitle: gT.variationTitle ? mT(gT.variationTitle) : null,
          description: mT(gT.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== UT ? null !== (WT = UT[TT]) && void 0 !== WT ? WT : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: gT.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: gT.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (zT = gT.canCreateCustomLobbies) || void 0 === zT || zT,
          countdownInformation: (0, fT.d)(TT)
        }
      }(WU.gameNameWithVariation, uT, PT)), [xU, WU.gameNameWithVariation, uT, PT]), [tU, QU] = (0, cT.useState)(!1), [sU, FU] = (0, cT.useState)((() => sT ? XU(sT, PT) : yU)), VU = null !== wU && void 0 !== wU ? wU : sU, [uU] = (0, cT.useState)(VU === yU), CU = (0, zT.e)(VU.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: rU,
        recentlyPlayedCustomLobbies: KU
      } = (0, cT.useMemo)((() => function(TT, UT, mT, WT) {
        var zT;
        const MT = TT => {
            const mT = (0, zU.q)(TT),
              WT = UT.find((UT => "custom" === UT.type ? UT.schematicId === mT : UT.gameNameWithVariation === TT));
            return WT ? [...WT.recentLobbies] : []
          },
          gT = (0, jT.getRecentGameNameWithVariationLobbiesKey)(TT),
          nT = null !== (zT = kT.l.getItem(gT)) && void 0 !== zT ? zT : [],
          HT = [...MT(TT), ...nT],
          lT = [];
        for (const kT of HT)(0, LU.S)(kT) && !lT.includes(kT) && lT.push(kT);
        let LT = HT;
        if (mT) {
          const TT = MT("classic_worlds"),
            UT = HT.filter((UT => !TT.includes(UT)));
          LT = [...TT, ...UT]
        }
        const pT = [],
          BT = !1 === WT ? [] : LT;
        for (const kT of BT)(0, LU.S)(kT) || pT.includes(kT) || pT.push(kT);
        return {
          recentlyPlayedPublicLobbies: lT,
          recentlyPlayedCustomLobbies: pT
        }
      }(WU.gameNameWithVariation, KT, VU.showWorldsInsteadOfCustomLobbies, VU.canCreateCustomLobbies)), [WU.gameNameWithVariation, KT, VU.showWorldsInsteadOfCustomLobbies, VU.canCreateCustomLobbies]), [SU, GU] = (0, cT.useState)(!0), [NU, EU] = (0, cT.useState)([]), [hU, DU] = (0, cT.useState)(null), [oU, AU] = (0, cT.useState)("explore"), RU = (0, cT.useRef)(!1), Tm = (0, cT.useCallback)((TT => {
        (0, vT.unstable_batchedUpdates)((() => {
          bU(TT), FU((UT => ({
            ...XU(TT, PT),
            isFavourite: UT.isFavourite
          })))
        }))
      }), [PT]);
      (0, cT.useEffect)((() => {
        null === kU.b.get("gameEntrySource") && (0, kU.e)("gameInformationPageDirect")
      }), []);
      const Um = (0, cT.useRef)(null);
      (0, cT.useEffect)((() => {
        const TT = TT => {
            Um.current = TT.target instanceof Element ? TT.target.closest("a, button") : null
          },
          UT = TT => {
            "Tab" === TT.key && (Um.current = null)
          };
        return document.addEventListener("pointerdown", TT, !0), document.addEventListener("keydown", UT, !0), () => {
          document.removeEventListener("pointerdown", TT, !0), document.removeEventListener("keydown", UT, !0)
        }
      }), []), (0, OT.c)("Enter", (TT => {
        const UT = TT.target instanceof Element ? TT.target : null;
        if (TT.defaultPrevented || null !== UT && void 0 !== UT && UT.closest("input, textarea, select")) return;
        const mT = null === UT || void 0 === UT ? void 0 : UT.closest("a, button");
        mT && mT !== Um.current || (TT.preventDefault(), jm())
      })), (0, eT.d)(AT.navigateToHomePage);
      const mm = rU.length > 0 || KU.length > 0,
        Wm = !VU.useRejoinLastLobbyButton || 0 === rU.length,
        zm = xU && null === VU.ownerSocialPreviewWithoutLocation,
        Mm = CT.getPlayerName() === (null === iU || void 0 === iU || null === (UT = iU.owner) || void 0 === UT ? void 0 : UT.name),
        gm = null !== (mT = null === (gT = VU.badges.find((TT => "event" === TT.type))) || void 0 === gT ? void 0 : gT.event) && void 0 !== mT ? mT : null,
        nm = Wm ? LT.l : LT.e,
        Hm = (0, IT.jsx)(lT.e, {
          tooltipInner: (0, IT.jsx)("div", {
            children: PT("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, IT.jsx)(nm, {
            className: "GameInformationButton",
            padDefaultFocus: Wm,
            showPress: !0,
            onClick: () => {
              jm()
            },
            children: (0, IT.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Wm && (0, IT.jsxs)(IT.Fragment, {
                children: [(0, IT.jsx)(GT.c, {
                  name: "play"
                }), " "]
              }), PT("homePage:quickPlay")]
            })
          })
        });
      (0, cT.useEffect)((() => {
        if (!xU || rT) return;
        let TT = !0;
        const UT = (0, zU.q)(WU.gameNameWithVariation);
        return wT.b.getGame(CT, UT).then((UT => {
          TT && Tm(UT)
        })).catch((UT => {
          console.error("Failed to get Custom Game information", UT), TT && (0, AT.navigateToHomePage)()
        })), wT.b.getFavouriteGames(CT).then((mT => {
          TT && FU((TT => ({
            ...TT,
            isFavourite: mT.includes(UT)
          })))
        })).catch((UT => {
          console.error("Failed to get favourite games", UT), TT && QU(!0)
        })), () => {
          TT = !1
        }
      }), [xU, rT, WU.gameNameWithVariation, Tm, CT]);
      const km = !xU && null === wU;

      function jm(TT) {
        (0, dU.c)(), ET((0, qT.d)(WU.gameNameWithVariation, TT))
      }(0, cT.useEffect)((() => {
        km && (0, AT.navigateToHomePage)()
      }), [km]), (0, cT.useEffect)((() => {
        if (!1 === VU.canCreateCustomLobbies) return;
        let TT = !0;
        return null !== VU.showWorldsInsteadOfCustomLobbies && !1 === rT && (GU(!0), wT.b.getFavouriteLobbies(CT).then((TT => {
          DU(TT)
        })), wT.b.getOpenCustomLobbies(CT, {
          gameNameWithVariation: VU.showWorldsInsteadOfCustomLobbies ? "classic" : WU.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === oU,
          onlyFavouriteLobbies: "favourite" === oU
        }).then((UT => {
          TT && (0, vT.unstable_batchedUpdates)((() => {
            EU(UT), GU(!1)
          }))
        })).catch((UT => {
          console.error("Failed to get open custom lobbies", UT), TT && GU(!1)
        }))), () => {
          TT = !1
        }
      }), [rT, WU, oU, VU.showWorldsInsteadOfCustomLobbies, VU.canCreateCustomLobbies, CT]);
      const lm = (0, cT.useCallback)((async TT => {
          try {
            if (!hU) return;
            hU.includes(TT) ? (wT.b.unfavouriteLobby(CT, TT), DU(hU.filter((UT => UT !== TT)))) : (wT.b.favouriteLobby(CT, TT).catch((TT => {
              console.error("Failed to favourite lobby", TT)
            })), DU([...hU, TT]))
          } catch (UT) {
            console.error("Failed to like lobby", UT)
          }
        }), [CT, hU]),
        Lm = (null === iU || void 0 === iU ? void 0 : iU.schematicId) === (0, zU.q)(TU.gameNameWithVariation) ? iU : null,
        pm = Lm && (0, VT.C)(TU.gameNameWithVariation, (TT => PT(TT)), Lm);
      (0, RT.i)(Lm && (0, VT.v)(TU.gameNameWithVariation, Lm));
      const Bm = NT.featureFlags.canUseCustomLobbies && !0 === VU.canCreateCustomLobbies,
        Zm = (0, IT.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, IT.jsx)(ST, {
            gameNameWithVariation: WU.gameNameWithVariation
          })
        });
      return (0, IT.jsx)(IT.Fragment, {
        children: (0, IT.jsxs)("article", {
          className: BT()("GameInformation", {
            GameInformationFadeIn: uU,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (pT = VU.countdownInformation) || void 0 === pT ? void 0 : pT.type)
          }),
          children: [pm && (0, IT.jsx)(iT.e, {
            meta: pm
          }), (0, IT.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, IT.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, IT.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, IT.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, IT.jsx)("div", {
                  className: BT()("GameInformationTopBackgroundImage", nT.h),
                  style: (0, nT.e)(CU),
                  children: (0, IT.jsx)(nT.c, {
                    image: CU
                  })
                })]
              }), (0, IT.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, IT.jsx)(vU.c, {}), (0, IT.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, IT.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, IT.jsxs)("div", {
                      className: BT()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: zm
                      }),
                      children: [VU.badges.map((TT => (0, IT.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${TT.type}`,
                        children: (0, IT.jsx)(xT.d, {
                          badge: TT
                        })
                      }, TT.type))), xU && (0, IT.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, IT.jsx)(JT.e, {
                          text: (0, WT.Y)({
                            type: "playerCrafted"
                          })
                        })
                      }), VU.category && (0, IT.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, IT.jsx)(JT.e, {
                          text: [{
                            str: (0, WT.Z)(VU.category).toUpperCase()
                          }]
                        })
                      }), null !== VU.ccu && (0, IT.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, IT.jsx)(GT.c, {
                          name: "user"
                        }), (0, LU.V)(VU.ccu), " online"]
                      }), null !== VU.ownerSocialPreviewWithoutLocation && (0, IT.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, IT.jsx)("span", {
                          children: "Made by"
                        }), (0, IT.jsx)(yT.i, {
                          playerSocialPreview: {
                            ...VU.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), zm && (0, IT.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, IT.jsx)("span", {
                          children: "Made by"
                        }), (0, IT.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== VU.favourites && (null !== VU.isFavourite || xU && !tU) && (0, IT.jsx)(LT.t, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== RU.current && (RU.current = !0, null !== VU.isFavourite)) {
                              const TT = (0, zU.q)(WU.gameNameWithVariation);
                              let UT;
                              VU.isFavourite ? (UT = -1, wT.b.unfavouriteGame(CT, TT).catch((TT => {
                                console.error("Failed to get unfavourite game", TT)
                              })).finally((() => {
                                RU.current = !1
                              }))) : (UT = 1, wT.b.favouriteGame(CT, TT).catch((TT => {
                                console.error("Failed to get favourite game", TT)
                              })).finally((() => {
                                RU.current = !1
                              }))), FU((TT => ({
                                ...TT,
                                isFavourite: !TT.isFavourite
                              }))), FU((TT => ({
                                ...TT,
                                favourites: TT.favourites + UT
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (dT = VU.isFavourite) && void 0 !== dT && dT,
                        disabled: null === VU.isFavourite,
                        className: BT()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === VU.isFavourite
                        })
                      }, null === VU.isFavourite ? "pending" : "known"), xU && !zm && NT.featureFlags.useSocialFeatures && !Mm && (0, IT.jsx)(eU.c, {
                        targetType: "customGame",
                        targetId: (0, zU.q)(WU.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (CT.playerHasRank("developer") || CT.playerHasRank("admin") && Mm) && (0, IT.jsxs)(LT.l, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          ET((0, nU.k)((0, gU.e)(WU.gameNameWithVariation, !0)))
                        },
                        children: [(0, IT.jsx)(GT.c, {
                          name: "star-christmas"
                        }), " ", PT("studio:viewInStudio")]
                      }), xU && CT.playerHasRank("developer") && (0, IT.jsxs)(LT.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, pU.e)({
                            schematicId: (0, zU.q)(WU.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, IT.jsx)(GT.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), xU && CT.playerHasRank("developer") && (0, IT.jsxs)(LT.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          UU.NotificationProvider.showCustomPopup({
                            body: () => (0, IT.jsx)(cU, {
                              schematicId: (0, zU.q)(WU.gameNameWithVariation),
                              gameName: VU.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, IT.jsx)(GT.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (tT = VU.countdownInformation) || void 0 === tT ? void 0 : tT.type) && (0, IT.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, IT.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, IT.jsx)(YT.e, {
                            toTime: VU.countdownInformation.countdownToTime
                          })]
                        }), (0, IT.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: VU.countdownInformation.previewText
                        })]
                      })]
                    }, zm ? "pending" : "shown"), (0, IT.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, IT.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, IT.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [VU.title, " ", VU.variationTitle && (null === (aT = lU.d[WU.gameNameWithVariation]) || void 0 === aT ? void 0 : aT.variationThumbnailUseBigRatio) && (0, IT.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: VU.variationTitle
                          })]
                        })
                      }), VU.listedVariations && VU.listedVariations.length > 0 && (0, IT.jsx)("div", {
                        className: BT()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (XT = lU.d[WU.gameNameWithVariation]) || void 0 === XT ? void 0 : XT.variationThumbnailUseBigRatio
                        }),
                        children: VU.listedVariations.map((TT => {
                          var UT, mT;
                          return (0, IT.jsxs)(PU, {
                            variation: TT,
                            isSelected: WU.gameNameWithVariation === TT,
                            children: [null !== uT && (0, IT.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, IT.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, IT.jsx)(GT.c, {
                                  name: "user"
                                }), " ", (0, LU.V)(null !== (UT = uT[TT]) && void 0 !== UT ? UT : 0)]
                              })
                            }), (0, IT.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: PT(null !== (mT = lU.d[TT].variationTitle) && void 0 !== mT ? mT : lU.d[TT].title)
                            }), (0, IT.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, jT.filterBadges)(lU.d[TT].badges).map((TT => (0, IT.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + TT.type,
                                children: (0, IT.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, IT.jsx)(xT.d, {
                                    badge: TT
                                  })
                                })
                              }, TT.type)))
                            })]
                          }, TT)
                        }))
                      })]
                    }), VU.description && (0, IT.jsx)("p", {
                      className: "GameInformationDescription",
                      children: VU.description
                    })]
                  }), (0, IT.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, IT.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Wm && (0, IT.jsx)(lT.e, {
                        tooltipInner: (0, IT.jsx)("div", {
                          children: PT("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, IT.jsx)(LT.l, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            jm(rU[0])
                          },
                          children: (0, IT.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, IT.jsx)(GT.c, {
                              name: "play"
                            }), " ", PT("homePage:rejoinLobbyNumber", {
                              number: rU[0]
                            })]
                          })
                        })
                      }), Wm && Hm]
                    }), (0, IT.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Wm && Hm, (0, IT.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, IT.jsx)(GT.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, IT.jsx)(ZT.e, {
                          className: "JoinLobbyInput",
                          placeholderText: PT("homePage:lobbyName"),
                          maxLength: LU.U,
                          domRef: qU,
                          onValueChange: TT => {
                            TT = (0, LU.Ab)(TT), ZU(TT)
                          },
                          onEnter: () => {
                            0 === BU.length ? jm(rU[0]) : jm(BU)
                          }
                        }), (0, IT.jsx)(LT.e, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === BU.length ? jm(rU[0]) : jm(BU)
                          },
                          children: PT("general:join")
                        })]
                      })]
                    }), (0, IT.jsxs)("section", {
                      className: BT()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !mm
                      }),
                      children: [(0, IT.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, IT.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, IT.jsx)(GT.c, {
                            name: "clock-rotate-left"
                          }), mm && (0, IT.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: PT("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, IT.jsx)(YU.d, {
                        lobbyGroups: [rU, KU],
                        onLobbyClick: TT => {
                          jm(TT)
                        },
                        keyPrefix: WU.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== gm && (0, IT.jsx)(FT, {
                eventName: gm
              })]
            }), Bm && (0, IT.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, IT.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, IT.jsxs)("div", {
                  className: BT()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === VU.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === VU.showWorldsInsteadOfCustomLobbies && (0, IT.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, IT.jsx)(GT.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, IT.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, IT.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), PT("game:worlds")]
                    })]
                  }), !1 === VU.showWorldsInsteadOfCustomLobbies && (0, IT.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, IT.jsx)(GT.c, {
                      name: "joystick"
                    }), (0, IT.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, IT.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), PT("homePage:customLobbies")]
                    })]
                  }), (0, IT.jsx)(LT.L, {
                    onClick: () => {
                      AU("explore")
                    },
                    active: "explore" === oU,
                    children: PT("general:explore")
                  }), (0, IT.jsx)(LT.L, {
                    onClick: () => {
                      AU("favourite")
                    },
                    active: "favourite" === oU,
                    children: PT("homePage:favouriteLobbies")
                  }), (0, IT.jsx)(LT.L, {
                    onClick: () => {
                      AU("owned")
                    },
                    active: "owned" === oU,
                    children: PT("homePage:ownedLobbies")
                  })]
                }), (0, IT.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, IT.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, IT.jsx)(fU.b, {
                      label: "Create",
                      onClick: () => {
                        UU.NotificationProvider.showCustomPopup({
                          body: TT => (0, IT.jsx)(mU.CreateCustomLobby, {
                            gameNameWithVariation: WU.gameNameWithVariation,
                            close: TT
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === SU && (0, IT.jsx)(fU.g, {}), !1 === SU && (0, IT.jsx)(OU, {
                      customLobbies: NU,
                      favouriteLobbies: hU,
                      toggleLikeLobby: lm,
                      showReport: NT.featureFlags.useSocialFeatures && "owned" !== oU
                    })]
                  }), Zm]
                })]
              })
            })]
          }), !Bm && Zm]
        })
      })
    }

    function PU(TT) {
      let {
        variation: UT,
        isSelected: mT,
        children: WT
      } = TT;
      const HT = lU.d[UT],
        jT = (0, MT.j)(UT, (0, MT.m)(HT)),
        lT = (0, zT.e)(jT),
        LT = (0, gT.d)([(0, MT.f)(UT, (0, MT.d)(HT))]);
      return (0, IT.jsxs)(AT.LinkPreserveSearch, {
        to: (0, VT.v)(UT),
        replace: !0,
        className: BT()("GameInformationVariation", nT.h, {
          SelectedGameInformationVariation: mT
        }),
        onClick: TT => {
          if (!(0, TU.e)(TT)) return;
          const mT = (0, fT.g)(UT);
          kT.l.setItem(mT, UT)
        },
        onMouseEnter: LT.start,
        onMouseLeave: LT.cancel,
        onFocus: LT.start,
        onBlur: LT.cancel,
        style: (0, nT.e)(lT),
        children: [(0, IT.jsx)(nT.c, {
          image: lT
        }), WT]
      })
    }
  },
  6569: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => fT
    });
    var WT = mT(63),
      zT = mT(1569),
      MT = mT(1613),
      gT = mT(3582),
      nT = mT(1225),
      HT = mT(1446),
      kT = mT(1475),
      jT = mT(1135),
      lT = mT(1126),
      LT = mT.n(lT),
      pT = mT(6565),
      BT = mT(1188);

    function ZT(TT) {
      let {
        info: UT,
        className: mT
      } = TT;
      const {
        statusText: WT,
        rowText: zT
      } = (0, pT.f)();
      return (0, BT.jsxs)("div", {
        className: LT()("GameApprovalInfoDetails", mT),
        children: [(0, BT.jsxs)("div", {
          className: LT()("GameApprovalInfoSummary", UT.overallPassed ? "Passed" : "Failed"),
          children: [(0, BT.jsx)(jT.c, {
            name: UT.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, BT.jsx)("span", {
            children: WT(UT.status)
          })]
        }), UT.rows.length > 0 && (0, BT.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: UT.rows.map((TT => {
            const {
              label: UT,
              value: mT
            } = zT(TT);
            return (0, BT.jsxs)("div", {
              className: LT()("GameApprovalInfoRow", TT.passed ? "Passed" : "Failed"),
              children: [(0, BT.jsx)(jT.c, {
                name: TT.passed ? "check" : "xmark"
              }), (0, BT.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, BT.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: UT
                }), null !== mT && (0, BT.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: mT
                })]
              })]
            }, TT.kind)
          }))
        })]
      })
    }
    var cT = mT(1288),
      vT = mT(1457);

    function fT(TT) {
      vT.NotificationProvider.showCustomPopup({
        body: () => (0, BT.jsx)(qT, {
          ...TT
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function qT(TT) {
      let {
        schematicId: UT,
        canOverride: mT,
        onApprovalChanged: lT
      } = TT;
      const {
        t: LT
      } = (0, cT.z)(), {
        userContext: pT
      } = (0, nT.d)(), vT = (0, gT.c)(), [fT, qT] = (0, WT.useState)(null), [iT, bT] = (0, WT.useState)(null), [OT, eT] = (0, WT.useState)(!1), YT = (0, WT.useCallback)((() => {
        bT(null), MT.b.getGameApprovalInfo(pT, UT).then((TT => {
          vT.current && qT(TT)
        })).catch((TT => {
          console.error("Failed to get game approval info", TT), vT.current && bT(LT("studio:approvalLoadFailed"))
        }))
      }), [pT, UT, vT, LT]);
      (0, WT.useEffect)((() => {
        YT()
      }), [YT]);
      const JT = TT => {
        OT || (eT(!0), MT.b.setGameApproval(pT, UT, TT).then((() => {
          null === lT || void 0 === lT || lT(), vT.current && YT()
        })).catch((TT => {
          console.error("Failed to set game approval", TT)
        })).finally((() => {
          vT.current && eT(!1)
        })))
      };
      return (0, BT.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, BT.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: LT("studio:approvalTitle")
        }), !fT && !iT && (0, BT.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, BT.jsx)(HT.c, {})
        }), iT && (0, BT.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: iT
        }), fT && (0, BT.jsxs)(BT.Fragment, {
          children: [(0, BT.jsx)(ZT, {
            info: fT
          }), mT && (0, BT.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== fT.manualOverride && (0, BT.jsx)(kT.e, {
              tooltipInner: (0, BT.jsx)("div", {
                children: LT("studio:approvalApproveTooltip")
              }),
              children: (0, BT.jsxs)(zT.l, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  JT(!0)
                },
                disabled: OT,
                children: [(0, BT.jsx)(jT.c, {
                  name: "check"
                }), " ", LT("studio:approvalApprove")]
              })
            }), !1 !== fT.manualOverride && (0, BT.jsx)(kT.e, {
              tooltipInner: (0, BT.jsx)("div", {
                children: LT("studio:approvalDenyTooltip")
              }),
              children: (0, BT.jsxs)(zT.I, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  JT(!1)
                },
                disabled: OT,
                children: [(0, BT.jsx)(jT.c, {
                  name: "xmark"
                }), " ", LT("studio:approvalDeny")]
              })
            }), null !== fT.manualOverride && (0, BT.jsx)(kT.e, {
              tooltipInner: (0, BT.jsx)("div", {
                children: LT("studio:approvalClearOverrideTooltip")
              }),
              children: (0, BT.jsxs)(zT.e, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  JT(null)
                },
                disabled: OT,
                children: [(0, BT.jsx)(jT.c, {
                  name: "arrows-rotate"
                }), " ", LT("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6565: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => nT,
      f: () => gT
    });
    var WT = mT(366),
      zT = mT(1288);
    const MT = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function gT() {
      const {
        t: TT,
        selectedLanguage: UT
      } = (0, zT.z)();
      return {
        statusText: UT => TT(MT[UT]),
        rowText: mT => {
          const MT = (TT, mT) => (0, WT.nb)((0, zT.m)(UT.code, TT), 0, mT);
          switch (mT.kind) {
            case "ownerAccountAge": {
              const UT = mT.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: TT("studio:approvalAccountAgeLabel"),
                value: TT(UT, {
                  age: MT(UT, mT.accountAgeMs),
                  days: mT.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: TT("studio:approvalSinceUnbannedLabel"), value: TT("studio:approvalSinceUnbannedValue", {
                  time: MT("studio:approvalSinceUnbannedValue", mT.sinceMs),
                  days: mT.minDays
                })
              };
            case "reportHold": {
              const {
                detail: UT
              } = mT;
              if (null === UT) return {
                label: TT("studio:approvalUnderInvestigation"),
                value: null
              };
              const WT = UT.weightedReporters.toFixed(1),
                zT = UT.threshold.toFixed(1),
                gT = TT("studio:approvalReportHoldLabel", {
                  hours: UT.windowHours
                });
              if (null === UT.heldUntil) return {
                label: gT,
                value: TT("studio:approvalReportHoldValue", {
                  weightedReporters: WT,
                  threshold: zT
                })
              };
              const nT = "studio:approvalReportHoldValueHeld";
              return {
                label: gT,
                value: TT(nT, {
                  weightedReporters: WT,
                  threshold: zT,
                  time: MT(nT, UT.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function nT(TT) {
      return null === TT.manualOverride && TT.rows.some((TT => "reportHold" === TT.kind && !TT.passed))
    }
  },
  34323: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT
    });
    var WT = mT(63),
      zT = mT(3536);

    function MT() {
      const [TT, UT] = (0, WT.useState)(!1);
      return (0, WT.useLayoutEffect)((() => {
        let TT = !0;
        return (0, zT.h)().then((() => {
          TT && UT(!0)
        })), () => {
          TT = !1
        }
      }), []), TT
    }
  },
  9039: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    var WT = mT(1437),
      zT = mT(1321),
      MT = mT(653);

    function gT(TT) {
      return TT = function(TT, UT) {
        var mT;
        const WT = new URLSearchParams(UT),
          zT = WT.get("lobby"),
          MT = WT.get("vm"),
          gT = null !== (mT = zT) && void 0 !== mT ? mT : TT.lobbyName,
          nT = null !== MT && void 0 !== MT ? MT : TT.directJoinVmUrl;
        if (gT === TT.lobbyName && nT === TT.directJoinVmUrl) return TT;
        return {
          ...TT,
          lobbyName: gT,
          directJoinVmUrl: nT
        }
      }(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), TT = function(TT) {
        if ((0, MT.E)(TT.directJoinVmUrl)) return TT;
        const UT = (0, zT.gb)(TT.directJoinVmUrl);
        null === UT && (TT.directJoinVmUrl = void 0);
        return TT
      }(TT = function(TT) {
        if ((0, MT.E)(TT.gameNameWithVariation)) return TT;
        return TT.gameNameWithVariation = (0, WT.i)(TT.gameNameWithVariation), TT
      }(TT))
    }
  },
  9036: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT,
      c: () => zT
    });
    let WT = !1;

    function zT() {
      WT = !0
    }

    function MT() {
      return WT
    }
  },
  36437: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      e: () => WT
    });
    const WT = "skyblockSkills",
      zT = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);