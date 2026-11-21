export const id = 116;
export const ids = [116, 390];
export const modules = {
  36498: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => fJ
    });
    var pd = kd(300),
      Nd = kd(3360),
      Wd = kd(3408),
      Pd = kd(3404),
      Zd = kd(3397),
      gd = kd(1211),
      Cd = kd(33),
      Kd = kd(1753),
      od = kd(1384),
      ld = kd(1461),
      Qd = kd(1044),
      Ld = kd.n(Qd),
      Od = kd(1714),
      ed = kd(56),
      Rd = kd(72),
      Id = kd(2314),
      Gd = kd(1352),
      vd = kd(1653),
      xd = kd(1140),
      qd = kd(3249),
      Bd = kd(4403),
      sd = kd(3340),
      ad = kd(1904),
      Md = kd(3353),
      Fd = kd(1762),
      Yd = kd(1520),
      md = kd(2126),
      bd = kd(1359),
      Sd = kd(2479),
      jd = kd(4904),
      Xd = kd(1103);
    const fd = 15e3,
      nd = 2500;

    function Ud(dd) {
      var Jd;
      let {
        eventName: kd
      } = dd;
      const {
        t: pd
      } = (0, gd.B)(), Nd = Fd.e[kd], [Wd, Pd] = (0, ed.useState)((() => Date.now() >= Nd.endsAt.getTime())), [Zd, Cd] = (0, ed.useState)("overall"), Kd = function(dd, Jd) {
        const {
          userContext: kd,
          isUserContextUpdating: pd
        } = (0, xd.c)(), Nd = `${dd}:${Jd}`, [Wd, Pd] = (0, ed.useState)({
          requestKey: Nd,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, ed.useEffect)((() => {
          if (pd) return;
          let Wd, Zd = !1;
          const gd = async () => {
            if ("visible" === document.visibilityState) try {
              const pd = await Yd.d.getGameEventLeaderboard(kd, {
                event: dd,
                scope: Jd
              });
              Zd || Pd({
                requestKey: Nd,
                leaderboard: {
                  status: "loaded",
                  leaderboard: pd
                }
              })
            } catch {
              Zd || Pd((dd => dd.requestKey === Nd && "loaded" === dd.leaderboard.status ? dd : {
                requestKey: Nd,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            Zd || (Wd = setTimeout(gd, fd))
          };
          return gd(), () => {
            Zd = !0, clearTimeout(Wd)
          }
        }), [dd, Jd, Nd, kd, pd]), Wd.requestKey === Nd ? Wd.leaderboard : {
          status: "loading"
        }
      }(kd, Zd), od = function(dd) {
        const Jd = (0, ed.useRef)(null),
          kd = (0, ed.useRef)(0),
          pd = (0, ed.useRef)(),
          [Nd, Wd] = (0, ed.useState)({});
        return (0, ed.useEffect)((() => {
          const Nd = null === dd || void 0 === dd ? void 0 : dd.entries;
          if (!Nd) return;
          const Pd = new Map(Nd.map((dd => [dd.player.name, dd.value]))),
            Zd = Jd.current;
          if (Jd.current = Pd, null === Zd) return;
          const gd = {};
          for (const [dd, Jd] of Pd) {
            const pd = Zd.get(dd);
            void 0 !== pd && Jd > pd && (gd[dd] = {
              amount: Jd - pd,
              key: kd.current++
            })
          }
          0 !== Object.keys(gd).length && (Wd(gd), clearTimeout(pd.current), pd.current = setTimeout((() => {
            Wd({})
          }), nd))
        }), [dd]), (0, ed.useEffect)((() => () => {
          clearTimeout(pd.current)
        }), []), Nd
      }("loaded" === Kd.status ? Kd.leaderboard : null), ld = function(dd) {
        const [Jd, kd] = (0, ed.useState)(null), pd = "loaded" === dd.status ? dd.leaderboard.goalProgress : void 0;
        return (0, ed.useEffect)((() => {
          pd && kd(pd)
        }), [pd]), Jd
      }(Kd), Qd = md.c[`profileEffect_${Nd.prizePack}`];
      if (Wd) return null;
      const Od = "loaded" === Kd.status ? Kd.leaderboard : null,
        Rd = null !== (Jd = null === Od || void 0 === Od ? void 0 : Od.entries) && void 0 !== Jd ? Jd : null,
        Id = null !== Od && void 0 !== Od && Od.own && null !== Rd && !Rd.some((dd => dd.isOwn)) ? Od.own : null;
      return (0, Xd.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Xd.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Xd.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Xd.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Xd.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Xd.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), pd("gameEvents:live")]
              }), (0, Xd.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [pd("gameEvents:endsIn"), (0, Xd.jsx)(sd.e, {
                  toTime: Nd.endsAt,
                  onReachEndOfCountdown: () => {
                    Pd(!0)
                  }
                })]
              })]
            }), (0, Xd.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: pd(Nd.titleKey)
            }), (0, Xd.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Xd.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [Qd && (0, Xd.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Xd.jsx)(Qd, {})
                }), (0, Xd.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Xd.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: pd("gameEvents:prize")
                  }), (0, Xd.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: pd(Nd.prizeNameKey)
                  })]
                })]
              }), (0, Xd.jsx)(yd, {
                event: Nd,
                progress: ld
              })]
            })]
          }), (0, Xd.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Xd.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Xd.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: pd(Nd.leaderboard.titleKey)
              }), (0, Xd.jsx)(jd.c, {
                ariaLabel: pd("gameEvents:leaderboardScope"),
                options: Fd.d.map((dd => ({
                  value: dd,
                  label: pd(`gameEvents:${dd}Scope`)
                }))),
                value: Zd,
                onChange: Cd
              })]
            }), "loading" === Kd.status && (0, Xd.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Xd.jsx)(bd.b, {})
            }), ("unavailable" === Kd.status || "loaded" === Kd.status && null === Rd) && (0, Xd.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: pd("gameEvents:leaderboardUnavailable")
            }), null !== Rd && 0 === Rd.length && (0, Xd.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: pd("friends" === Zd ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== Rd && Rd.length > 0 && (0, Xd.jsx)("ol", {
              className: "GameEventPanelRows",
              children: Rd.map((dd => {
                const Jd = od[dd.player.name];
                return (0, Xd.jsxs)("li", {
                  className: Ld()("GameEventPanelRow", {
                    GameEventPanelRowOwn: dd.isOwn,
                    GameEventPanelRowTop: dd.rank <= 3
                  }),
                  children: [(0, Xd.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", dd.rank]
                  }), (0, Xd.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Xd.jsx)(Sd.f, {
                      playerSocialPreview: {
                        ...dd.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== Jd && (0, Xd.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", Jd.amount.toLocaleString()]
                  }, Jd.key), (0, Xd.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: dd.value.toLocaleString()
                  })]
                }, dd.player.name)
              }))
            }), Id && (0, Xd.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Xd.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", Id.rank.toLocaleString()]
              }), (0, Xd.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: pd("gameEvents:yourPlace")
              }), (0, Xd.jsx)("span", {
                className: "GameEventPanelScore",
                children: Id.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function yd(dd) {
      let {
        event: Jd,
        progress: kd
      } = dd;
      const {
        t: pd
      } = (0, gd.B)(), Nd = null !== kd && Jd.prizeGoals.some(((dd, Jd) => kd[Jd] >= dd.target));
      return (0, Xd.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Xd.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: pd(Nd ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Xd.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: Jd.prizeGoals.map(((dd, Jd) => {
            const Nd = null === kd ? null : Math.min(kd[Jd], dd.target);
            return (0, Xd.jsxs)(ed.Fragment, {
              children: [Jd > 0 && (0, Xd.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: pd("gameEvents:goalsOr")
              }), (0, Xd.jsxs)("div", {
                className: Ld()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Nd === dd.target
                }),
                children: [(0, Xd.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: pd(dd.labelKey)
                }), (0, Xd.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Xd.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Nd && void 0 !== Nd ? Nd : 0) / dd.target * 100 + "%"
                    }
                  }), null !== Nd && (0, Xd.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Nd.toLocaleString(), " / ", dd.target.toLocaleString()]
                  })]
                })]
              })]
            }, dd.board)
          }))
        })]
      })
    }
    var Dd = kd(1578),
      Td = kd(1638),
      Ed = kd(1040),
      cd = kd(718),
      hd = kd(3332);

    function rd(dd) {
      let {
        gameNameWithVariation: Jd
      } = dd;
      const kd = (0, Dd.y)(Jd),
        [pd, Nd] = (0, ed.useState)(null);
      if ((0, ed.useEffect)((() => {
          if (!kd) return;
          let dd = !0;
          return (0, Td.g)(kd).then((Jd => {
            dd && Nd(Jd)
          })).catch((dd => {
            console.error(`Failed to load the page copy for ${kd.name}`, dd)
          })), () => {
            dd = !1
          }
        }), [kd]), !kd || !pd || pd.name !== kd.name) return null;
      const Wd = (0, Td.e)(pd),
        Pd = new Set((0, Ed.c)((0, cd.e)()).map((dd => (0, Dd.r)(dd)))),
        Zd = pd.similarGames.filter((dd => Pd.has((0, Dd.r)(dd))));
      return (0, Xd.jsx)("div", {
        className: "GamePageContent",
        children: (0, Xd.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Xd.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Xd.jsx)("h2", {
              children: Wd.whatIs
            }), pd.whatIs.map((dd => (0, Xd.jsx)("p", {
              children: dd
            }, dd)))]
          }), (0, Xd.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Xd.jsx)("h2", {
              children: Wd.howToPlay
            }), pd.howToPlay.map((dd => (0, Xd.jsx)("p", {
              children: dd
            }, dd)))]
          }), (0, Xd.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Xd.jsx)("h2", {
              children: Wd.features
            }), (0, Xd.jsx)("ul", {
              children: pd.features.map((dd => (0, Xd.jsx)("li", {
                children: dd
              }, dd)))
            })]
          }), (0, Xd.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Xd.jsx)("h2", {
              children: Wd.tips
            }), (0, Xd.jsx)("ul", {
              children: pd.tips.map((dd => (0, Xd.jsx)("li", {
                children: dd
              }, dd)))
            })]
          }), (0, Xd.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Xd.jsx)("h2", {
              children: Wd.faq
            }), pd.faq.map((dd => {
              let {
                question: Jd,
                answer: kd
              } = dd;
              return (0, Xd.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Xd.jsx)("h3", {
                  children: Jd
                }), (0, Xd.jsx)("p", {
                  children: kd
                })]
              }, Jd)
            }))]
          }), Zd.length > 0 && (0, Xd.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Xd.jsx)("h2", {
              children: Wd.similarGames
            }), (0, Xd.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: Zd.map((dd => (0, Xd.jsx)("li", {
                children: (0, Xd.jsx)(hd.h, {
                  source: {
                    type: "game",
                    gameNameWithVariation: dd
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, dd)))
            })]
          })]
        })
      })
    }
    var ud = kd(1059),
      td = kd(95),
      Vd = kd(1147),
      zd = kd(9276),
      Hd = kd(1689),
      wd = kd(1557),
      Ad = kd(1543),
      dJ = kd(1646),
      JJ = kd(1478),
      kJ = kd(1371),
      pJ = kd(36507),
      NJ = kd(1253),
      WJ = kd(1013),
      PJ = kd(313),
      ZJ = kd(1022),
      gJ = kd(1569),
      CJ = kd(8837),
      KJ = kd(22),
      oJ = kd(2432),
      lJ = kd(756),
      QJ = kd(1245),
      LJ = kd(6375),
      OJ = kd(3342);

    function eJ(dd) {
      let {
        preview: Jd,
        isBroken: kd
      } = dd;
      const pd = null === Jd ? null : (0, Wd.d)(Jd, "small"),
        Pd = (0, Nd.h)(null !== pd && void 0 !== pd ? pd : Wd.n);
      return null === Jd ? (0, Xd.jsx)("div", {
        className: Ld()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: kd
        }),
        children: (0, Xd.jsx)(ud.e, {
          name: kd ? "triangle-exclamation" : "star"
        })
      }) : (0, Xd.jsx)("div", {
        className: Ld()("FeaturedGamesPopupSlotThumbnail", Zd.f),
        style: (0, Zd.c)(Pd),
        role: "img",
        "aria-label": Jd.name,
        children: (0, Xd.jsx)(Zd.b, {
          image: Pd
        })
      })
    }

    function RJ(dd) {
      let {
        schematicId: Jd,
        gameName: kd
      } = dd;
      const {
        userContext: Nd
      } = (0, xd.c)(), Wd = (0, OJ.d)(), [Pd, Zd] = (0, ed.useState)(null), [gd, Cd] = (0, ed.useState)(null), [Kd, od] = (0, ed.useState)(!1), Qd = (0, ed.useCallback)((() => {
        Cd(null), Yd.d.getFeaturedGames(Nd).then((dd => {
          Wd.current && Zd(dd.slots)
        })).catch((dd => {
          console.error("Failed to get featured games", dd), Wd.current && Cd("Failed to load featured games")
        }))
      }), [Nd, Wd]);
      (0, ed.useEffect)((() => {
        Qd()
      }), [Qd]);
      const Ld = (dd, Jd) => {
        Kd || (od(!0), Yd.d.setFeaturedGame(Nd, dd, Jd).then((() => {
          Wd.current && Qd()
        })).catch((dd => {
          console.error("Failed to set featured game", dd), Wd.current && Cd("Failed to update the featured slot")
        })).finally((() => {
          Wd.current && od(!1)
        })))
      };
      return (0, Xd.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Xd.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !Pd && !gd && (0, Xd.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Xd.jsx)(bd.b, {})
        }), gd && (0, Xd.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: gd
        }), Pd && (0, Xd.jsxs)(Xd.Fragment, {
          children: [(0, Xd.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: Pd.map((dd => {
              const kd = dd.schematicId === Jd,
                Nd = null === dd.schematicId,
                {
                  categoryGroup: Wd
                } = pd.L[dd.slotId];
              return (0, Xd.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Xd.jsx)(eJ, {
                  preview: dd.preview,
                  isBroken: !Nd
                }), (0, Xd.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Xd.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, pd.kb)(Wd), " \xb7 position", " ", (0, pd.P)(dd.slotId, pd.Hb) + 1, " of", " ", (0, pd.Eb)(Wd, pd.Hb)]
                  }), Nd && (0, Xd.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Nd && null !== dd.preview && (0, Xd.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: dd.preview.name
                  }), !Nd && null === dd.preview && (0, Xd.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Xd.jsx)(ud.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Xd.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Nd && (0, Xd.jsxs)(ld.n, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Ld(dd.slotId, Jd)
                    },
                    disabled: Kd,
                    children: [(0, Xd.jsx)(ud.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !Nd && !kd && (0, Xd.jsxs)(ld.G, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Ld(dd.slotId, Jd)
                    },
                    disabled: Kd,
                    children: [(0, Xd.jsx)(ud.e, {
                      name: "star"
                    }), " Replace"]
                  }), !Nd && (0, Xd.jsxs)(ld.B, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Ld(dd.slotId, null)
                    },
                    disabled: Kd,
                    children: [(0, Xd.jsx)(ud.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, dd.slotId)
            }))
          }), (0, Xd.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var IJ = kd(4541),
      GJ = kd(4440),
      vJ = kd(3451);
    const xJ = 8,
      qJ = 12;

    function BJ(dd) {
      let {
        customLobbies: Jd,
        favouriteLobbies: kd,
        toggleLikeLobby: pd,
        showReport: Nd
      } = dd;
      const [Wd, Pd] = (0, ed.useState)(xJ);
      return (0, ed.useEffect)((() => {
        if (Wd >= Jd.length) return;
        let dd = !0;
        return (0, vJ.d)().then((() => {
          dd && Pd(Wd + qJ)
        })), () => {
          dd = !1
        }
      }), [Wd, Jd.length]), (0, Xd.jsx)(Xd.Fragment, {
        children: Jd.slice(0, Wd).map((dd => (0, Xd.jsx)(GJ.d, {
          customLobby: dd,
          favouriteLobbies: kd,
          toggleLikeLobby: pd,
          showReport: Nd
        }, dd.name)))
      })
    }
    var sJ = kd(4446),
      iJ = kd(4468),
      aJ = kd(4425),
      MJ = kd(3443),
      FJ = kd(8835),
      YJ = kd(209);
    const mJ = {
      skyblock: [kd(36534).d]
    };
    var bJ = kd(610);
    const SJ = {
      listedVariations: null,
      backgroundImage: Wd.n,
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

    function jJ(dd, Jd) {
      const kd = lJ.h[dd.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, Wd.d)(dd, "large"),
        badges: [],
        category: dd.gameCategory,
        title: void 0 !== (null === kd || void 0 === kd ? void 0 : kd.title) ? Jd(kd.title) : dd.name,
        variationTitle: null,
        description: void 0 !== (null === kd || void 0 === kd ? void 0 : kd.description) ? Jd(kd.description) : dd.description,
        ownerSocialPreviewWithoutLocation: "owner" in dd ? dd.owner : null,
        ccu: dd.ccu,
        favourites: dd.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in dd ? dd.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function XJ(dd) {
      var Jd, kd, pd;
      return null !== (Jd = null !== (kd = (0, YJ.m)() ? function(dd) {
        for (const [Jd, kd] of Object.entries(mJ)) {
          const pd = [Jd, ...kd.map((dd => (0, PJ.Xb)(Jd, dd)))];
          if (pd.includes(dd)) return pd
        }
        return null
      }(dd) : null) && void 0 !== kd ? kd : null === (pd = lJ.d[dd]) || void 0 === pd ? void 0 : pd.listedVariations) && void 0 !== Jd ? Jd : null
    }

    function fJ() {
      const {
        gameNameWithVariation: dd
      } = (0, wd.y)();
      if ((0, ed.useEffect)(MJ.n, []), dd && (0, NJ.q)(dd)) return (0, Xd.jsx)(nJ, {
        urlId: dd
      }, dd);
      const Jd = dd && (0, WJ.i)(dd) ? dd : "firstParty";
      return (0, Xd.jsx)(UJ, {}, Jd)
    }

    function nJ(dd) {
      let {
        urlId: Jd
      } = dd;
      const {
        userContext: kd,
        isUserContextUpdating: pd
      } = (0, xd.c)(), Nd = (0, ed.useMemo)((() => (0, Hd.i)(Jd)), [Jd]);
      (0, ed.useMemo)((() => {
        if (null === Nd) return;
        const dd = Vd.userContextManager.peekCurrentUserContext();
        (null !== dd ? Yd.d.getGame(dd, Nd.schematicId) : Vd.userContextManager.getCurrentUserContext().then((dd => Yd.d.getGame(dd, Nd.schematicId)))).catch((dd => {
          console.error(`Failed to get the custom game ${Nd.schematicId}`, dd), (0, Hd.h)(Jd)
        }))
      }), [Nd, Jd]);
      const [Wd, Pd] = (0, ed.useState)(null), Zd = (0, zd.b)();
      (0, ed.useEffect)((() => {
        if (null !== Nd || pd) return;
        let dd = !0;
        return Yd.d.getGameByUrlId(kd, Jd).then((kd => {
          dd && Pd({
            urlId: Jd,
            game: kd
          })
        })).catch((kd => {
          console.error(`Failed to find the custom game with urlId ${Jd}`, kd), dd && (0, Ad.navigateToHomePage)()
        })), () => {
          dd = !1
        }
      }), [Jd, Nd, pd, kd]);
      const gd = null !== Nd && void 0 !== Nd ? Nd : (null === Wd || void 0 === Wd ? void 0 : Wd.urlId) === Jd ? Wd.game : null;
      return null === gd ? (0, Xd.jsx)(bd.b, {}) : Zd ? (0, Xd.jsx)(UJ, {
        gameNameWithVariation: (0, WJ.t)(gd.schematicId),
        knownCustomGame: gd
      }, gd.schematicId) : null
    }

    function UJ(dd) {
      var Jd, kd, Pd, Qd, Fd, md, bd, jd;
      let {
        gameNameWithVariation: fd,
        knownCustomGame: nd = null
      } = dd;
      const {
        t: yd
      } = (0, gd.B)();
      (0, oJ.f)();
      const Td = (0, oJ.i)(),
        {
          userContext: Ed,
          isUserContextUpdating: cd
        } = (0, xd.c)(),
        hd = (0, aJ.f)(),
        Vd = (0, Ad.useNavigatePreserveSearch)(),
        zd = (0, wd.y)(),
        Hd = (0, ed.useMemo)((() => fd ? {
          gameNameWithVariation: fd
        } : zd), [fd, zd]),
        JJ = (0, CJ.b)(Hd),
        NJ = (0, ed.useMemo)((() => {
          const dd = function(dd) {
            var Jd, kd;
            const pd = XJ(dd);
            if (!pd || 0 === pd.length || pd.includes(dd)) return dd;
            const Nd = Cd.i.getItem((0, Id.i)(dd));
            if (Nd && pd.includes(Nd)) return Nd;
            return null !== (Jd = null === (kd = lJ.d[dd]) || void 0 === kd ? void 0 : kd.defaultListedVariation) && void 0 !== Jd ? Jd : pd[0]
          }(JJ.gameNameWithVariation);
          return dd === JJ.gameNameWithVariation ? JJ : {
            ...JJ,
            gameNameWithVariation: dd
          }
        }), [JJ]);
      (0, ed.useEffect)((() => {
        const dd = JJ.gameNameWithVariation;
        NJ.gameNameWithVariation !== dd && dd !== (0, PJ._b)(dd) && Vd((0, Dd.v)(NJ.gameNameWithVariation), {
          replace: !0
        })
      }), [NJ.gameNameWithVariation, JJ.gameNameWithVariation, Vd]);
      const [OJ, eJ] = (0, ed.useState)(""), vJ = ed.useRef(null), [xJ, qJ] = (0, ed.useState)(), MJ = (0, WJ.i)(NJ.gameNameWithVariation), YJ = (0, ed.useMemo)((() => MJ ? null : function(dd, Jd, kd) {
        var pd, Nd;
        const Pd = lJ.d[dd];
        return (0, bJ.I)(Pd) ? null : {
          listedVariations: XJ(dd),
          backgroundImage: (0, Wd.k)(dd, (0, Wd.b)(Pd)),
          badges: (0, Kd.filterBadges)(Pd.badges),
          category: Pd.type,
          title: kd(Pd.title),
          variationTitle: Pd.variationTitle ? kd(Pd.variationTitle) : null,
          description: kd(Pd.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== Jd ? null !== (pd = Jd[dd]) && void 0 !== pd ? pd : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: Pd.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: Pd.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (Nd = Pd.canCreateCustomLobbies) || void 0 === Nd || Nd,
          countdownInformation: (0, Id.g)(dd)
        }
      }(NJ.gameNameWithVariation, Td, yd)), [MJ, NJ.gameNameWithVariation, Td, yd]), [mJ, fJ] = (0, ed.useState)(!1), [nJ, UJ] = (0, ed.useState)((() => nd ? jJ(nd, yd) : SJ)), DJ = null !== YJ && void 0 !== YJ ? YJ : nJ, [TJ] = (0, ed.useState)(DJ === SJ), EJ = (0, Nd.h)(DJ.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: cJ,
        recentlyPlayedCustomLobbies: hJ
      } = (0, ed.useMemo)((() => function(dd, Jd, kd, pd) {
        var Nd;
        const Wd = dd => {
            const kd = (0, WJ.o)(dd),
              pd = Jd.find((Jd => "custom" === Jd.type ? Jd.schematicId === kd : Jd.gameNameWithVariation === dd));
            return pd ? [...pd.recentLobbies] : []
          },
          Pd = (0, Kd.getRecentGameNameWithVariationLobbiesKey)(dd),
          Zd = null !== (Nd = Cd.i.getItem(Pd)) && void 0 !== Nd ? Nd : [],
          gd = [...Wd(dd), ...Zd],
          od = [];
        for (const Cd of gd)(0, QJ.M)(Cd) && !od.includes(Cd) && od.push(Cd);
        let ld = gd;
        if (kd) {
          const dd = Wd("classic_worlds"),
            Jd = gd.filter((Jd => !dd.includes(Jd)));
          ld = [...dd, ...Jd]
        }
        const Qd = [],
          Ld = !1 === pd ? [] : ld;
        for (const Cd of Ld)(0, QJ.M)(Cd) || Qd.includes(Cd) || Qd.push(Cd);
        return {
          recentlyPlayedPublicLobbies: od,
          recentlyPlayedCustomLobbies: Qd
        }
      }(NJ.gameNameWithVariation, hd, DJ.showWorldsInsteadOfCustomLobbies, DJ.canCreateCustomLobbies)), [NJ.gameNameWithVariation, hd, DJ.showWorldsInsteadOfCustomLobbies, DJ.canCreateCustomLobbies]), [rJ, uJ] = (0, ed.useState)(!0), [tJ, VJ] = (0, ed.useState)([]), [zJ, HJ] = (0, ed.useState)(null), [wJ, AJ] = (0, ed.useState)("explore"), dk = (0, ed.useRef)(!1), Jk = (0, ed.useCallback)((dd => {
        (0, Rd.unstable_batchedUpdates)((() => {
          qJ(dd), UJ((Jd => ({
            ...jJ(dd, yd),
            isFavourite: Jd.isFavourite
          })))
        }))
      }), [yd]);
      (0, ed.useEffect)((() => {
        null === KJ.d.get("gameEntrySource") && (0, KJ.f)("gameInformationPageDirect")
      }), []);
      const kk = (0, ed.useRef)(null);
      (0, ed.useEffect)((() => {
        const dd = dd => {
            kk.current = dd.target instanceof Element ? dd.target.closest("a, button") : null
          },
          Jd = dd => {
            "Tab" === dd.key && (kk.current = null)
          };
        return document.addEventListener("pointerdown", dd, !0), document.addEventListener("keydown", Jd, !0), () => {
          document.removeEventListener("pointerdown", dd, !0), document.removeEventListener("keydown", Jd, !0)
        }
      }), []), (0, qd.d)("Enter", (dd => {
        const Jd = dd.target instanceof Element ? dd.target : null;
        if (dd.defaultPrevented || null !== Jd && void 0 !== Jd && Jd.closest("input, textarea, select")) return;
        const kd = null === Jd || void 0 === Jd ? void 0 : Jd.closest("a, button");
        kd && kd !== kk.current || (dd.preventDefault(), lk())
      })), (0, Bd.d)(Ad.navigateToHomePage);
      const pk = cJ.length > 0 || hJ.length > 0,
        Nk = !DJ.useRejoinLastLobbyButton || 0 === cJ.length,
        Wk = MJ && null === DJ.ownerSocialPreviewWithoutLocation,
        Pk = Ed.getPlayerName() === (null === xJ || void 0 === xJ || null === (Jd = xJ.owner) || void 0 === Jd ? void 0 : Jd.name),
        Zk = null !== (kd = null === (Pd = DJ.badges.find((dd => "event" === dd.type))) || void 0 === Pd ? void 0 : Pd.event) && void 0 !== kd ? kd : null,
        gk = Nk ? ld.j : ld.d,
        Ck = (0, Xd.jsx)(od.f, {
          tooltipInner: (0, Xd.jsx)("div", {
            children: yd("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Xd.jsx)(gk, {
            className: "GameInformationButton",
            padDefaultFocus: Nk,
            showPress: !0,
            onClick: () => {
              lk()
            },
            children: (0, Xd.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Nk && (0, Xd.jsxs)(Xd.Fragment, {
                children: [(0, Xd.jsx)(ud.e, {
                  name: "play"
                }), " "]
              }), yd("homePage:quickPlay")]
            })
          })
        });
      (0, ed.useEffect)((() => {
        if (!MJ || cd) return;
        let dd = !0;
        const Jd = (0, WJ.o)(NJ.gameNameWithVariation);
        return Yd.d.getGame(Ed, Jd).then((Jd => {
          dd && Jk(Jd)
        })).catch((Jd => {
          console.error("Failed to get Custom Game information", Jd), dd && (0, Ad.navigateToHomePage)()
        })), Yd.d.getFavouriteGames(Ed).then((kd => {
          dd && UJ((dd => ({
            ...dd,
            isFavourite: kd.includes(Jd)
          })))
        })).catch((Jd => {
          console.error("Failed to get favourite games", Jd), dd && fJ(!0)
        })), () => {
          dd = !1
        }
      }), [MJ, cd, NJ.gameNameWithVariation, Jk, Ed]);
      const Kk = !MJ && null === YJ;

      function lk(dd) {
        (0, FJ.f)(), Vd((0, Gd.c)(NJ.gameNameWithVariation, dd))
      }(0, ed.useEffect)((() => {
        Kk && (0, Ad.navigateToHomePage)()
      }), [Kk]), (0, ed.useEffect)((() => {
        if (!1 === DJ.canCreateCustomLobbies) return;
        let dd = !0;
        return null !== DJ.showWorldsInsteadOfCustomLobbies && !1 === cd && (uJ(!0), Yd.d.getFavouriteLobbies(Ed).then((dd => {
          HJ(dd)
        })), Yd.d.getOpenCustomLobbies(Ed, {
          gameNameWithVariation: DJ.showWorldsInsteadOfCustomLobbies ? "classic" : NJ.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === wJ,
          onlyFavouriteLobbies: "favourite" === wJ
        }).then((Jd => {
          dd && (0, Rd.unstable_batchedUpdates)((() => {
            VJ(Jd), uJ(!1)
          }))
        })).catch((Jd => {
          console.error("Failed to get open custom lobbies", Jd), dd && uJ(!1)
        }))), () => {
          dd = !1
        }
      }), [cd, NJ, wJ, DJ.showWorldsInsteadOfCustomLobbies, DJ.canCreateCustomLobbies, Ed]);
      const Qk = (0, ed.useCallback)((async dd => {
          try {
            if (!zJ) return;
            zJ.includes(dd) ? (Yd.d.unfavouriteLobby(Ed, dd), HJ(zJ.filter((Jd => Jd !== dd)))) : (Yd.d.favouriteLobby(Ed, dd).catch((dd => {
              console.error("Failed to favourite lobby", dd)
            })), HJ([...zJ, dd]))
          } catch (Jd) {
            console.error("Failed to like lobby", Jd)
          }
        }), [Ed, zJ]),
        Lk = (null === xJ || void 0 === xJ ? void 0 : xJ.schematicId) === (0, WJ.o)(JJ.gameNameWithVariation) ? xJ : null,
        Ok = Lk && (0, Dd.B)(JJ.gameNameWithVariation, (dd => yd(dd)), Lk);
      (0, dJ.e)(Lk && (0, Dd.v)(JJ.gameNameWithVariation, Lk));
      const ek = td.featureFlags.canUseCustomLobbies && !0 === DJ.canCreateCustomLobbies,
        Rk = (0, Xd.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Xd.jsx)(rd, {
            gameNameWithVariation: NJ.gameNameWithVariation
          })
        });
      return (0, Xd.jsx)(Xd.Fragment, {
        children: (0, Xd.jsxs)("article", {
          className: Ld()("GameInformation", {
            GameInformationFadeIn: TJ,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (Qd = DJ.countdownInformation) || void 0 === Qd ? void 0 : Qd.type)
          }),
          children: [Ok && (0, Xd.jsx)(vd.e, {
            meta: Ok
          }), (0, Xd.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Xd.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Xd.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Xd.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Xd.jsx)("div", {
                  className: Ld()("GameInformationTopBackgroundImage", Zd.f),
                  style: (0, Zd.c)(EJ),
                  children: (0, Xd.jsx)(Zd.b, {
                    image: EJ
                  })
                })]
              }), (0, Xd.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Xd.jsx)(IJ.e, {}), (0, Xd.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Xd.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Xd.jsxs)("div", {
                      className: Ld()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: Wk
                      }),
                      children: [DJ.badges.map((dd => (0, Xd.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${dd.type}`,
                        children: (0, Xd.jsx)(Md.e, {
                          badge: dd
                        })
                      }, dd.type))), MJ && (0, Xd.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Xd.jsx)(ad.c, {
                          text: (0, pd.db)({
                            type: "playerCrafted"
                          })
                        })
                      }), DJ.category && (0, Xd.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Xd.jsx)(ad.c, {
                          text: [{
                            str: (0, pd.eb)(DJ.category).toUpperCase()
                          }]
                        })
                      }), null !== DJ.ccu && (0, Xd.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Xd.jsx)(ud.e, {
                          name: "user"
                        }), (0, QJ.Q)(DJ.ccu), " online"]
                      }), null !== DJ.ownerSocialPreviewWithoutLocation && (0, Xd.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Xd.jsx)("span", {
                          children: "Made by"
                        }), (0, Xd.jsx)(Sd.f, {
                          playerSocialPreview: {
                            ...DJ.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), Wk && (0, Xd.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Xd.jsx)("span", {
                          children: "Made by"
                        }), (0, Xd.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== DJ.favourites && (null !== DJ.isFavourite || MJ && !mJ) && (0, Xd.jsx)(ld.p, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== dk.current && (dk.current = !0, null !== DJ.isFavourite)) {
                              const dd = (0, WJ.o)(NJ.gameNameWithVariation);
                              let Jd;
                              DJ.isFavourite ? (Jd = -1, Yd.d.unfavouriteGame(Ed, dd).catch((dd => {
                                console.error("Failed to get unfavourite game", dd)
                              })).finally((() => {
                                dk.current = !1
                              }))) : (Jd = 1, Yd.d.favouriteGame(Ed, dd).catch((dd => {
                                console.error("Failed to get favourite game", dd)
                              })).finally((() => {
                                dk.current = !1
                              }))), UJ((dd => ({
                                ...dd,
                                isFavourite: !dd.isFavourite
                              }))), UJ((dd => ({
                                ...dd,
                                favourites: dd.favourites + Jd
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (Fd = DJ.isFavourite) && void 0 !== Fd && Fd,
                        disabled: null === DJ.isFavourite,
                        className: Ld()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === DJ.isFavourite
                        })
                      }, null === DJ.isFavourite ? "pending" : "known"), MJ && !Wk && td.featureFlags.useSocialFeatures && !Pk && (0, Xd.jsx)(sJ.d, {
                        targetType: "customGame",
                        targetId: (0, WJ.o)(NJ.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (Ed.playerHasRank("developer") || Ed.playerHasRank("admin") && Pk) && (0, Xd.jsxs)(ld.j, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Vd((0, gJ.s)((0, ZJ.i)(NJ.gameNameWithVariation, !0)))
                        },
                        children: [(0, Xd.jsx)(ud.e, {
                          name: "star-christmas"
                        }), " ", yd("studio:viewInStudio")]
                      }), MJ && Ed.playerHasRank("developer") && (0, Xd.jsxs)(ld.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, LJ.c)({
                            schematicId: (0, WJ.o)(NJ.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Xd.jsx)(ud.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), MJ && Ed.playerHasRank("developer") && (0, Xd.jsxs)(ld.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          kJ.NotificationProvider.showCustomPopup({
                            body: () => (0, Xd.jsx)(RJ, {
                              schematicId: (0, WJ.o)(NJ.gameNameWithVariation),
                              gameName: DJ.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Xd.jsx)(ud.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (md = DJ.countdownInformation) || void 0 === md ? void 0 : md.type) && (0, Xd.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Xd.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Xd.jsx)(sd.e, {
                            toTime: DJ.countdownInformation.countdownToTime
                          })]
                        }), (0, Xd.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: DJ.countdownInformation.previewText
                        })]
                      })]
                    }, Wk ? "pending" : "shown"), (0, Xd.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Xd.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Xd.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [DJ.title, " ", DJ.variationTitle && (null === (bd = lJ.d[NJ.gameNameWithVariation]) || void 0 === bd ? void 0 : bd.variationThumbnailUseBigRatio) && (0, Xd.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: DJ.variationTitle
                          })]
                        })
                      }), DJ.listedVariations && DJ.listedVariations.length > 0 && (0, Xd.jsx)("div", {
                        className: Ld()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (jd = lJ.d[NJ.gameNameWithVariation]) || void 0 === jd ? void 0 : jd.variationThumbnailUseBigRatio
                        }),
                        children: DJ.listedVariations.map((dd => {
                          var Jd, kd;
                          return (0, Xd.jsxs)(yJ, {
                            variation: dd,
                            isSelected: NJ.gameNameWithVariation === dd,
                            children: [null !== Td && (0, Xd.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Xd.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Xd.jsx)(ud.e, {
                                  name: "user"
                                }), " ", (0, QJ.Q)(null !== (Jd = Td[dd]) && void 0 !== Jd ? Jd : 0)]
                              })
                            }), (0, Xd.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: yd(null !== (kd = lJ.d[dd].variationTitle) && void 0 !== kd ? kd : lJ.d[dd].title)
                            }), (0, Xd.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, Kd.filterBadges)(lJ.d[dd].badges).map((dd => (0, Xd.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + dd.type,
                                children: (0, Xd.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Xd.jsx)(Md.e, {
                                    badge: dd
                                  })
                                })
                              }, dd.type)))
                            })]
                          }, dd)
                        }))
                      })]
                    }), DJ.description && (0, Xd.jsx)("p", {
                      className: "GameInformationDescription",
                      children: DJ.description
                    })]
                  }), (0, Xd.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Xd.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Nk && (0, Xd.jsx)(od.f, {
                        tooltipInner: (0, Xd.jsx)("div", {
                          children: yd("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Xd.jsx)(ld.j, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            lk(cJ[0])
                          },
                          children: (0, Xd.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Xd.jsx)(ud.e, {
                              name: "play"
                            }), " ", yd("homePage:rejoinLobbyNumber", {
                              number: cJ[0]
                            })]
                          })
                        })
                      }), Nk && Ck]
                    }), (0, Xd.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Nk && Ck, (0, Xd.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Xd.jsx)(ud.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Xd.jsx)(Od.e, {
                          className: "JoinLobbyInput",
                          placeholderText: yd("homePage:lobbyName"),
                          maxLength: QJ.O,
                          domRef: vJ,
                          onValueChange: dd => {
                            dd = (0, QJ.tb)(dd), eJ(dd)
                          },
                          onEnter: () => {
                            0 === OJ.length ? lk(cJ[0]) : lk(OJ)
                          }
                        }), (0, Xd.jsx)(ld.d, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === OJ.length ? lk(cJ[0]) : lk(OJ)
                          },
                          children: yd("general:join")
                        })]
                      })]
                    }), (0, Xd.jsxs)("section", {
                      className: Ld()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !pk
                      }),
                      children: [(0, Xd.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Xd.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Xd.jsx)(ud.e, {
                            name: "clock-rotate-left"
                          }), pk && (0, Xd.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: yd("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Xd.jsx)(iJ.d, {
                        lobbyGroups: [cJ, hJ],
                        onLobbyClick: dd => {
                          lk(dd)
                        },
                        keyPrefix: NJ.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== Zk && (0, Xd.jsx)(Ud, {
                eventName: Zk
              })]
            }), ek && (0, Xd.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Xd.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Xd.jsxs)("div", {
                  className: Ld()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === DJ.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === DJ.showWorldsInsteadOfCustomLobbies && (0, Xd.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Xd.jsx)(ud.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Xd.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Xd.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), yd("game:worlds")]
                    })]
                  }), !1 === DJ.showWorldsInsteadOfCustomLobbies && (0, Xd.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Xd.jsx)(ud.e, {
                      name: "joystick"
                    }), (0, Xd.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Xd.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), yd("homePage:customLobbies")]
                    })]
                  }), (0, Xd.jsx)(ld.G, {
                    onClick: () => {
                      AJ("explore")
                    },
                    active: "explore" === wJ,
                    children: yd("general:explore")
                  }), (0, Xd.jsx)(ld.G, {
                    onClick: () => {
                      AJ("favourite")
                    },
                    active: "favourite" === wJ,
                    children: yd("homePage:favouriteLobbies")
                  }), (0, Xd.jsx)(ld.G, {
                    onClick: () => {
                      AJ("owned")
                    },
                    active: "owned" === wJ,
                    children: yd("homePage:ownedLobbies")
                  })]
                }), (0, Xd.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Xd.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Xd.jsx)(GJ.b, {
                      label: "Create",
                      onClick: () => {
                        kJ.NotificationProvider.showCustomPopup({
                          body: dd => (0, Xd.jsx)(pJ.CreateCustomLobby, {
                            gameNameWithVariation: NJ.gameNameWithVariation,
                            close: dd
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === rJ && (0, Xd.jsx)(GJ.e, {}), !1 === rJ && (0, Xd.jsx)(BJ, {
                      customLobbies: tJ,
                      favouriteLobbies: zJ,
                      toggleLikeLobby: Qk,
                      showReport: td.featureFlags.useSocialFeatures && "owned" !== wJ
                    })]
                  }), Rk]
                })]
              })
            })]
          }), !ek && Rk]
        })
      })
    }

    function yJ(dd) {
      let {
        variation: Jd,
        isSelected: kd,
        children: pd
      } = dd;
      const gd = lJ.d[Jd],
        Kd = (0, Wd.k)(Jd, (0, Wd.l)(gd)),
        od = (0, Nd.h)(Kd),
        ld = (0, Pd.f)([(0, Wd.g)(Jd, (0, Wd.b)(gd))]);
      return (0, Xd.jsxs)(Ad.LinkPreserveSearch, {
        to: (0, Dd.v)(Jd),
        replace: !0,
        className: Ld()("GameInformationVariation", Zd.f, {
          SelectedGameInformationVariation: kd
        }),
        onClick: dd => {
          if (!(0, JJ.d)(dd)) return;
          const kd = (0, Id.i)(Jd);
          Cd.i.setItem(kd, Jd)
        },
        onMouseEnter: ld.start,
        onMouseLeave: ld.cancel,
        onFocus: ld.start,
        onBlur: ld.cancel,
        style: (0, Zd.c)(od),
        children: [(0, Xd.jsx)(Zd.b, {
          image: od
        }), pd]
      })
    }
  },
  6375: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Rd
    });
    var pd = kd(56),
      Nd = kd(1461),
      Wd = kd(1520),
      Pd = kd(3342),
      Zd = kd(1140),
      gd = kd(1359),
      Cd = kd(1384),
      Kd = kd(1059),
      od = kd(1044),
      ld = kd.n(od),
      Qd = kd(1103);

    function Ld(dd) {
      let {
        info: Jd,
        className: kd
      } = dd;
      return (0, Qd.jsxs)("div", {
        className: ld()("GameApprovalInfoDetails", kd),
        children: [(0, Qd.jsxs)("div", {
          className: ld()("GameApprovalInfoSummary", Jd.overallPassed ? "Passed" : "Failed"),
          children: [(0, Qd.jsx)(Kd.e, {
            name: Jd.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, Qd.jsx)("span", {
            children: Jd.summary
          })]
        }), Jd.rows.length > 0 && (0, Qd.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: Jd.rows.map((dd => (0, Qd.jsxs)("div", {
            className: ld()("GameApprovalInfoRow", dd.passed ? "Passed" : "Failed"),
            children: [(0, Qd.jsx)(Kd.e, {
              name: dd.passed ? "check" : "xmark"
            }), (0, Qd.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, Qd.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: dd.label
              }), (0, Qd.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: dd.valueText
              })]
            })]
          }, dd.label)))
        })]
      })
    }
    var Od = kd(1211),
      ed = kd(1371);

    function Rd(dd) {
      ed.NotificationProvider.showCustomPopup({
        body: () => (0, Qd.jsx)(Id, {
          ...dd
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function Id(dd) {
      let {
        schematicId: Jd,
        canOverride: kd,
        onApprovalChanged: od
      } = dd;
      const {
        t: ld
      } = (0, Od.B)(), {
        userContext: ed
      } = (0, Zd.c)(), Rd = (0, Pd.d)(), [Id, Gd] = (0, pd.useState)(null), [vd, xd] = (0, pd.useState)(null), [qd, Bd] = (0, pd.useState)(!1), sd = (0, pd.useCallback)((() => {
        xd(null), Wd.d.getGameApprovalInfo(ed, Jd).then((dd => {
          Rd.current && Gd(dd)
        })).catch((dd => {
          console.error("Failed to get game approval info", dd), Rd.current && xd(ld("studio:approvalLoadFailed"))
        }))
      }), [ed, Jd, Rd, ld]);
      (0, pd.useEffect)((() => {
        sd()
      }), [sd]);
      const ad = dd => {
        qd || (Bd(!0), Wd.d.setGameApproval(ed, Jd, dd).then((() => {
          null === od || void 0 === od || od(), Rd.current && sd()
        })).catch((dd => {
          console.error("Failed to set game approval", dd)
        })).finally((() => {
          Rd.current && Bd(!1)
        })))
      };
      return (0, Qd.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, Qd.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: ld("studio:approvalTitle")
        }), !Id && !vd && (0, Qd.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, Qd.jsx)(gd.b, {})
        }), vd && (0, Qd.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: vd
        }), Id && (0, Qd.jsxs)(Qd.Fragment, {
          children: [(0, Qd.jsx)(Ld, {
            info: Id
          }), kd && (0, Qd.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== Id.manualOverride && (0, Qd.jsx)(Cd.f, {
              tooltipInner: (0, Qd.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, Qd.jsxs)(Nd.j, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  ad(!0)
                },
                disabled: qd,
                children: [(0, Qd.jsx)(Kd.e, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== Id.manualOverride && (0, Qd.jsx)(Cd.f, {
              tooltipInner: (0, Qd.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, Qd.jsxs)(Nd.B, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  ad(!1)
                },
                disabled: qd,
                children: [(0, Qd.jsx)(Kd.e, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== Id.manualOverride && (0, Qd.jsx)(Cd.f, {
              tooltipInner: (0, Qd.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, Qd.jsxs)(Nd.d, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  ad(null)
                },
                disabled: qd,
                children: [(0, Qd.jsx)(Kd.e, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  9276: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd
    });
    var pd = kd(56),
      Nd = kd(3451);

    function Wd() {
      const [dd, Jd] = (0, pd.useState)(!1);
      return (0, pd.useLayoutEffect)((() => {
        let dd = !0;
        return (0, Nd.d)().then((() => {
          dd && Jd(!0)
        })), () => {
          dd = !1
        }
      }), []), dd
    }
  },
  8837: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd
    });
    var pd = kd(1352),
      Nd = kd(1245),
      Wd = kd(610);

    function Pd(dd) {
      return dd = function(dd, Jd) {
        var kd;
        const pd = new URLSearchParams(Jd),
          Nd = pd.get("lobby"),
          Wd = pd.get("vm"),
          Pd = null !== (kd = Nd) && void 0 !== kd ? kd : dd.lobbyName,
          Zd = null !== Wd && void 0 !== Wd ? Wd : dd.directJoinVmUrl;
        if (Pd === dd.lobbyName && Zd === dd.directJoinVmUrl) return dd;
        return {
          ...dd,
          lobbyName: Pd,
          directJoinVmUrl: Zd
        }
      }(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), dd = function(dd) {
        if ((0, Wd.I)(dd.directJoinVmUrl)) return dd;
        const Jd = (0, Nd.Z)(dd.directJoinVmUrl);
        null === Jd && (dd.directJoinVmUrl = void 0);
        return dd
      }(dd = function(dd) {
        if ((0, Wd.I)(dd.gameNameWithVariation)) return dd;
        return dd.gameNameWithVariation = (0, pd.k)(dd.gameNameWithVariation), dd
      }(dd))
    }
  },
  8835: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      f: () => Nd
    });
    let pd = !1;

    function Nd() {
      pd = !0
    }

    function Wd() {
      return pd
    }
  },
  36534: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      g: () => pd
    });
    const pd = "skyblockSkills",
      Nd = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);