export const id = 144;
export const ids = [144, 715];
export const modules = {
  37871: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => nO
    });
    var Wd = md(387),
      Fd = md(4734),
      Rd = md(4776),
      Xd = md(4771),
      Kd = md(4767),
      hd = md(1238),
      vd = md(46),
      Qd = md(1890),
      td = md(1471),
      od = md(1572),
      Nd = md(1155),
      qd = md.n(Nd),
      Hd = md(1808),
      yd = md(66),
      bd = md(86),
      Td = md(3301),
      pd = md(1424),
      Yd = md(1739),
      gd = md(1186),
      wd = md(4629),
      Ed = md(5220),
      Jd = md(3635),
      Ud = md(2060),
      xd = md(4729),
      Bd = md(1899),
      Sd = md(1627),
      sd = md(3044),
      ud = md(1436),
      Vd = md(3662),
      Ad = md(4199),
      rd = md(1341);
    const Gd = 15e3,
      nd = 2500;

    function Ld(dd) {
      var Od;
      let {
        eventName: md
      } = dd;
      const {
        t: Wd
      } = (0, hd.G)(), Fd = Bd.f[md], [Rd, Xd] = (0, yd.useState)((() => Date.now() >= Fd.endsAt.getTime())), [Kd, vd] = (0, yd.useState)("overall"), Qd = function(dd, Od) {
        const {
          userContext: md,
          isUserContextUpdating: Wd
        } = (0, gd.d)(), Fd = `${dd}:${Od}`, [Rd, Xd] = (0, yd.useState)({
          requestKey: Fd,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, yd.useEffect)((() => {
          if (Wd) return;
          let Rd, Kd = !1;
          const hd = async () => {
            if ("visible" === document.visibilityState) try {
              const Wd = await Sd.e.getGameEventLeaderboard(md, {
                event: dd,
                scope: Od
              });
              Kd || Xd({
                requestKey: Fd,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Wd
                }
              })
            } catch {
              Kd || Xd((dd => dd.requestKey === Fd && "loaded" === dd.leaderboard.status ? dd : {
                requestKey: Fd,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            Kd || (Rd = setTimeout(hd, Gd))
          };
          return hd(), () => {
            Kd = !0, clearTimeout(Rd)
          }
        }), [dd, Od, Fd, md, Wd]), Rd.requestKey === Fd ? Rd.leaderboard : {
          status: "loading"
        }
      }(md, Kd), td = function(dd) {
        const Od = (0, yd.useRef)(null),
          md = (0, yd.useRef)(0),
          Wd = (0, yd.useRef)(),
          [Fd, Rd] = (0, yd.useState)({});
        return (0, yd.useEffect)((() => {
          const Fd = null === dd || void 0 === dd ? void 0 : dd.entries;
          if (!Fd) return;
          const Xd = new Map(Fd.map((dd => [dd.player.name, dd.value]))),
            Kd = Od.current;
          if (Od.current = Xd, null === Kd) return;
          const hd = {};
          for (const [dd, Od] of Xd) {
            const Wd = Kd.get(dd);
            void 0 !== Wd && Od > Wd && (hd[dd] = {
              amount: Od - Wd,
              key: md.current++
            })
          }
          0 !== Object.keys(hd).length && (Rd(hd), clearTimeout(Wd.current), Wd.current = setTimeout((() => {
            Rd({})
          }), nd))
        }), [dd]), (0, yd.useEffect)((() => () => {
          clearTimeout(Wd.current)
        }), []), Fd
      }("loaded" === Qd.status ? Qd.leaderboard : null), od = function(dd) {
        const [Od, md] = (0, yd.useState)(null), Wd = "loaded" === dd.status ? dd.leaderboard.goalProgress : void 0;
        return (0, yd.useEffect)((() => {
          Wd && md(Wd)
        }), [Wd]), Od
      }(Qd), Nd = sd.c[`profileEffect_${Fd.prizePack}`];
      if (Rd) return null;
      const Hd = "loaded" === Qd.status ? Qd.leaderboard : null,
        bd = null !== (Od = null === Hd || void 0 === Hd ? void 0 : Hd.entries) && void 0 !== Od ? Od : null,
        Td = null !== Hd && void 0 !== Hd && Hd.own && null !== bd && !bd.some((dd => dd.isOwn)) ? Hd.own : null;
      return (0, rd.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, rd.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, rd.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, rd.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, rd.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, rd.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Wd("gameEvents:live")]
              }), (0, rd.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Wd("gameEvents:endsIn"), (0, rd.jsx)(Jd.b, {
                  toTime: Fd.endsAt,
                  onReachEndOfCountdown: () => {
                    Xd(!0)
                  }
                })]
              })]
            }), (0, rd.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Wd(Fd.titleKey)
            }), (0, rd.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, rd.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [Nd && (0, rd.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, rd.jsx)(Nd, {})
                }), (0, rd.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, rd.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Wd("gameEvents:prize")
                  }), (0, rd.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Wd(Fd.prizeNameKey)
                  })]
                })]
              }), (0, rd.jsx)(Pd, {
                event: Fd,
                progress: od
              })]
            })]
          }), (0, rd.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, rd.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, rd.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Wd(Fd.leaderboard.titleKey)
              }), (0, rd.jsx)(Ad.e, {
                ariaLabel: Wd("gameEvents:leaderboardScope"),
                options: Bd.e.map((dd => ({
                  value: dd,
                  label: Wd(`gameEvents:${dd}Scope`)
                }))),
                value: Kd,
                onChange: vd
              })]
            }), "loading" === Qd.status && (0, rd.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, rd.jsx)(ud.c, {})
            }), ("unavailable" === Qd.status || "loaded" === Qd.status && null === bd) && (0, rd.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Wd("gameEvents:leaderboardUnavailable")
            }), null !== bd && 0 === bd.length && (0, rd.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Wd("friends" === Kd ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== bd && bd.length > 0 && (0, rd.jsx)("ol", {
              className: "GameEventPanelRows",
              children: bd.map((dd => {
                const Od = td[dd.player.name];
                return (0, rd.jsxs)("li", {
                  className: qd()("GameEventPanelRow", {
                    GameEventPanelRowOwn: dd.isOwn,
                    GameEventPanelRowTop: dd.rank <= 3
                  }),
                  children: [(0, rd.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", dd.rank]
                  }), (0, rd.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, rd.jsx)(Vd.c, {
                      playerSocialPreview: {
                        ...dd.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== Od && (0, rd.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", Od.amount.toLocaleString()]
                  }, Od.key), (0, rd.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: dd.value.toLocaleString()
                  })]
                }, dd.player.name)
              }))
            }), Td && (0, rd.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, rd.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", Td.rank.toLocaleString()]
              }), (0, rd.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Wd("gameEvents:yourPlace")
              }), (0, rd.jsx)("span", {
                className: "GameEventPanelScore",
                children: Td.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function Pd(dd) {
      let {
        event: Od,
        progress: md
      } = dd;
      const {
        t: Wd
      } = (0, hd.G)(), Fd = null !== md && Od.prizeGoals.some(((dd, Od) => md[Od] >= dd.target));
      return (0, rd.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, rd.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Wd(Fd ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, rd.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: Od.prizeGoals.map(((dd, Od) => {
            const Fd = null === md ? null : Math.min(md[Od], dd.target);
            return (0, rd.jsxs)(yd.Fragment, {
              children: [Od > 0 && (0, rd.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Wd("gameEvents:goalsOr")
              }), (0, rd.jsxs)("div", {
                className: qd()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Fd === dd.target
                }),
                children: [(0, rd.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Wd(dd.labelKey)
                }), (0, rd.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, rd.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Fd && void 0 !== Fd ? Fd : 0) / dd.target * 100 + "%"
                    }
                  }), null !== Fd && (0, rd.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Fd.toLocaleString(), " / ", dd.target.toLocaleString()]
                  })]
                })]
              })]
            }, dd.board)
          }))
        })]
      })
    }
    var zd = md(1670),
      cd = md(1719),
      jd = md(1145),
      Dd = md(824),
      ed = md(4711);

    function Id(dd) {
      let {
        gameNameWithVariation: Od
      } = dd;
      const md = (0, zd.G)(Od),
        [Wd, Fd] = (0, yd.useState)(null);
      if ((0, yd.useEffect)((() => {
          if (!md) return;
          let dd = !0;
          return (0, cd.h)(md).then((Od => {
            dd && Fd(Od)
          })).catch((dd => {
            console.error(`Failed to load the page copy for ${md.name}`, dd)
          })), () => {
            dd = !1
          }
        }), [md]), !md || !Wd || Wd.name !== md.name) return null;
      const Rd = (0, cd.d)(Wd),
        Xd = new Set((0, jd.e)((0, Dd.k)()).map((dd => (0, zd.v)(dd)))),
        Kd = Wd.similarGames.filter((dd => Xd.has((0, zd.v)(dd))));
      return (0, rd.jsx)("div", {
        className: "GamePageContent",
        children: (0, rd.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, rd.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, rd.jsx)("h2", {
              children: Rd.whatIs
            }), Wd.whatIs.map((dd => (0, rd.jsx)("p", {
              children: dd
            }, dd)))]
          }), (0, rd.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, rd.jsx)("h2", {
              children: Rd.howToPlay
            }), Wd.howToPlay.map((dd => (0, rd.jsx)("p", {
              children: dd
            }, dd)))]
          }), (0, rd.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, rd.jsx)("h2", {
              children: Rd.features
            }), (0, rd.jsx)("ul", {
              children: Wd.features.map((dd => (0, rd.jsx)("li", {
                children: dd
              }, dd)))
            })]
          }), (0, rd.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, rd.jsx)("h2", {
              children: Rd.tips
            }), (0, rd.jsx)("ul", {
              children: Wd.tips.map((dd => (0, rd.jsx)("li", {
                children: dd
              }, dd)))
            })]
          }), (0, rd.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, rd.jsx)("h2", {
              children: Rd.faq
            }), Wd.faq.map((dd => {
              let {
                question: Od,
                answer: md
              } = dd;
              return (0, rd.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, rd.jsx)("h3", {
                  children: Od
                }), (0, rd.jsx)("p", {
                  children: md
                })]
              }, Od)
            }))]
          }), Kd.length > 0 && (0, rd.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, rd.jsx)("h2", {
              children: Rd.similarGames
            }), (0, rd.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: Kd.map((dd => (0, rd.jsx)("li", {
                children: (0, rd.jsx)(ed.f, {
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
    var ld = md(1443),
      Cd = md(107),
      Zd = md(1189),
      kd = md(35596),
      fd = md(1782),
      Md = md(1650),
      dO = md(1641),
      OO = md(1731),
      mO = md(1587),
      WO = md(1462),
      FO = md(37877),
      RO = md(1295),
      XO = md(1122),
      KO = md(405),
      hO = md(1135),
      vO = md(1666),
      QO = md(10113),
      tO = md(29),
      oO = md(3544),
      NO = md(870),
      qO = md(1286),
      HO = md(7449),
      yO = md(4717);

    function bO(dd) {
      let {
        preview: Od,
        isBroken: md
      } = dd;
      const Wd = null === Od ? null : (0, Rd.i)(Od, "small"),
        Xd = (0, Fd.g)(null !== Wd && void 0 !== Wd ? Wd : Rd.x);
      return null === Od ? (0, rd.jsx)("div", {
        className: qd()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: md
        }),
        children: (0, rd.jsx)(ld.c, {
          name: md ? "triangle-exclamation" : "star"
        })
      }) : (0, rd.jsx)("div", {
        className: qd()("FeaturedGamesPopupSlotThumbnail", Kd.j),
        style: (0, Kd.g)(Xd),
        role: "img",
        "aria-label": Od.name,
        children: (0, rd.jsx)(Kd.e, {
          image: Xd
        })
      })
    }

    function TO(dd) {
      let {
        schematicId: Od,
        gameName: md
      } = dd;
      const {
        userContext: Fd
      } = (0, gd.d)(), Rd = (0, yO.b)(), [Xd, Kd] = (0, yd.useState)(null), [hd, vd] = (0, yd.useState)(null), [Qd, td] = (0, yd.useState)(!1), Nd = (0, yd.useCallback)((() => {
        vd(null), Sd.e.getFeaturedGames(Fd).then((dd => {
          Rd.current && Kd(dd.slots)
        })).catch((dd => {
          console.error("Failed to get featured games", dd), Rd.current && vd("Failed to load featured games")
        }))
      }), [Fd, Rd]);
      (0, yd.useEffect)((() => {
        Nd()
      }), [Nd]);
      const qd = (dd, Od) => {
        Qd || (td(!0), Sd.e.setFeaturedGame(Fd, dd, Od).then((() => {
          Rd.current && Nd()
        })).catch((dd => {
          console.error("Failed to set featured game", dd), Rd.current && vd("Failed to update the featured slot")
        })).finally((() => {
          Rd.current && td(!1)
        })))
      };
      return (0, rd.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, rd.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !Xd && !hd && (0, rd.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, rd.jsx)(ud.c, {})
        }), hd && (0, rd.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: hd
        }), Xd && (0, rd.jsxs)(rd.Fragment, {
          children: [(0, rd.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: Xd.map((dd => {
              const md = dd.schematicId === Od,
                Fd = null === dd.schematicId,
                {
                  categoryGroup: Rd
                } = Wd.G[dd.slotId];
              return (0, rd.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, rd.jsx)(bO, {
                  preview: dd.preview,
                  isBroken: !Fd
                }), (0, rd.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, rd.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Wd.lb)(Rd), " \xb7 position", " ", (0, Wd.K)(dd.slotId, Wd.Mb) + 1, " of", " ", (0, Wd.Jb)(Rd, Wd.Mb)]
                  }), Fd && (0, rd.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Fd && null !== dd.preview && (0, rd.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: dd.preview.name
                  }), !Fd && null === dd.preview && (0, rd.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, rd.jsx)(ld.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, rd.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Fd && (0, rd.jsxs)(od.r, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      qd(dd.slotId, Od)
                    },
                    disabled: Qd,
                    children: [(0, rd.jsx)(ld.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !Fd && !md && (0, rd.jsxs)(od.S, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      qd(dd.slotId, Od)
                    },
                    disabled: Qd,
                    children: [(0, rd.jsx)(ld.c, {
                      name: "star"
                    }), " Replace"]
                  }), !Fd && (0, rd.jsxs)(od.G, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      qd(dd.slotId, null)
                    },
                    disabled: Qd,
                    children: [(0, rd.jsx)(ld.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, dd.slotId)
            }))
          }), (0, rd.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var pO = md(5394),
      YO = md(5262),
      gO = md(4664);
    const wO = 8,
      aO = 12;

    function EO(dd) {
      let {
        customLobbies: Od,
        favouriteLobbies: md,
        toggleLikeLobby: Wd,
        showReport: Fd
      } = dd;
      const [Rd, Xd] = (0, yd.useState)(wO);
      return (0, yd.useEffect)((() => {
        if (Rd >= Od.length) return;
        let dd = !0;
        return (0, gO.e)().then((() => {
          dd && Xd(Rd + aO)
        })), () => {
          dd = !1
        }
      }), [Rd, Od.length]), (0, rd.jsx)(rd.Fragment, {
        children: Od.slice(0, Rd).map((dd => (0, rd.jsx)(YO.d, {
          customLobby: dd,
          favouriteLobbies: md,
          toggleLikeLobby: Wd,
          showReport: Fd
        }, dd.name)))
      })
    }
    var JO = md(5268),
      UO = md(5280),
      xO = md(5237),
      BO = md(4811),
      SO = md(5336),
      sO = md(10090),
      uO = md(235);
    const VO = {
      skyblock: [md(37901).c]
    };
    var iO = md(701);
    const AO = {
      listedVariations: null,
      backgroundImage: Rd.x,
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

    function rO(dd, Od) {
      const md = NO.d[dd.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, Rd.i)(dd, "large"),
        badges: [],
        category: dd.gameCategory,
        title: void 0 !== (null === md || void 0 === md ? void 0 : md.title) ? Od(md.title) : dd.name,
        variationTitle: null,
        description: void 0 !== (null === md || void 0 === md ? void 0 : md.description) ? Od(md.description) : dd.description,
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

    function GO(dd) {
      var Od, md, Wd;
      return null !== (Od = null !== (md = (0, uO.m)() ? function(dd) {
        for (const [Od, md] of Object.entries(VO)) {
          const Wd = [Od, ...md.map((dd => (0, KO.Fb)(Od, dd)))];
          if (Wd.includes(dd)) return Wd
        }
        return null
      }(dd) : null) && void 0 !== md ? md : null === (Wd = NO.c[dd]) || void 0 === Wd ? void 0 : Wd.listedVariations) && void 0 !== Od ? Od : null
    }

    function nO() {
      const {
        gameNameWithVariation: dd
      } = (0, Md.u)();
      if ((0, yd.useEffect)(BO.n, []), dd && (0, RO.p)(dd)) return (0, rd.jsx)(LO, {
        urlId: dd
      }, dd);
      const Od = dd && (0, XO.k)(dd) ? dd : "firstParty";
      return (0, rd.jsx)(zO, {}, Od)
    }

    function LO(dd) {
      let {
        urlId: Od
      } = dd;
      const {
        t: md
      } = (0, hd.G)(), {
        userContext: Wd,
        isUserContextUpdating: Fd
      } = (0, gd.d)(), Rd = (0, yd.useMemo)((() => (0, fd.g)(Od)), [Od]);
      (0, yd.useMemo)((() => {
        if (null === Rd) return;
        const dd = Zd.userContextManager.peekCurrentUserContext();
        (null !== dd ? Sd.e.getGame(dd, Rd.schematicId) : Zd.userContextManager.getCurrentUserContext().then((dd => Sd.e.getGame(dd, Rd.schematicId)))).catch((dd => {
          null === (0, Sd.j)(dd) && console.error(`Failed to get the custom game ${Rd.schematicId}`, dd), (0, fd.d)(Od)
        }))
      }), [Rd, Od]);
      const [Xd, Kd] = (0, yd.useState)(null), vd = (0, kd.c)();
      (0, yd.useEffect)((() => {
        if (null !== Rd || Fd) return;
        let dd = !0;
        return Sd.e.getGameByUrlId(Wd, Od).then((Wd => {
          dd && (Wd.takenDown ? PO(md, Wd) : Kd({
            urlId: Od,
            game: Wd
          }))
        })).catch((Wd => {
          const Fd = null !== (0, Sd.j)(Wd);
          Fd || console.error(`Failed to find the custom game with urlId ${Od}`, Wd), dd && (Fd ? PO(md, null) : (0, dO.navigateToHomePage)())
        })), () => {
          dd = !1
        }
      }), [Od, Rd, Fd, Wd, md]);
      const Qd = null !== Rd && void 0 !== Rd ? Rd : (null === Xd || void 0 === Xd ? void 0 : Xd.urlId) === Od ? Xd.game : null;
      return null === Qd ? (0, rd.jsx)(ud.c, {}) : vd ? (0, rd.jsx)(zO, {
        gameNameWithVariation: (0, XO.w)(Qd.schematicId),
        knownCustomGame: Qd
      }, Qd.schematicId) : null
    }

    function PO(dd, Od) {
      (0, dO.navigateToHomePage)(), (0, sO.e)(dd, Od)
    }

    function zO(dd) {
      var Od, md, Xd, Nd, Bd, sd, ud, Ad;
      let {
        gameNameWithVariation: Gd,
        knownCustomGame: nd = null
      } = dd;
      const {
        t: Pd
      } = (0, hd.G)();
      (0, oO.j)();
      const cd = (0, oO.n)(),
        {
          userContext: jd,
          isUserContextUpdating: Dd
        } = (0, gd.d)(),
        ed = (0, xO.f)(),
        Zd = (0, dO.useNavigatePreserveSearch)(),
        kd = (0, Md.u)(),
        fd = (0, yd.useMemo)((() => Gd ? {
          gameNameWithVariation: Gd
        } : kd), [Gd, kd]),
        mO = (0, QO.c)(fd),
        RO = (0, yd.useMemo)((() => {
          const dd = function(dd) {
            var Od, md;
            const Wd = GO(dd);
            if (!Wd || 0 === Wd.length || Wd.includes(dd)) return dd;
            const Fd = vd.k.getItem((0, Td.m)(dd));
            if (Fd && Wd.includes(Fd)) return Fd;
            return null !== (Od = null === (md = NO.c[dd]) || void 0 === md ? void 0 : md.defaultListedVariation) && void 0 !== Od ? Od : Wd[0]
          }(mO.gameNameWithVariation);
          return dd === mO.gameNameWithVariation ? mO : {
            ...mO,
            gameNameWithVariation: dd
          }
        }), [mO]);
      (0, yd.useEffect)((() => {
        const dd = mO.gameNameWithVariation;
        RO.gameNameWithVariation !== dd && dd !== (0, KO.Gb)(dd) && Zd((0, zd.z)(RO.gameNameWithVariation), {
          replace: !0
        })
      }), [RO.gameNameWithVariation, mO.gameNameWithVariation, Zd]);
      const [yO, bO] = (0, yd.useState)(""), gO = yd.useRef(null), [wO, aO] = (0, yd.useState)(), BO = (0, XO.k)(RO.gameNameWithVariation), sO = (0, yd.useMemo)((() => BO ? null : function(dd, Od, md) {
        var Wd, Fd;
        const Xd = NO.c[dd];
        return (0, iO.O)(Xd) ? null : {
          listedVariations: GO(dd),
          backgroundImage: (0, Rd.q)(dd, (0, Rd.e)(Xd)),
          badges: (0, Qd.filterBadges)(Xd.badges),
          category: Xd.type,
          title: md(Xd.title),
          variationTitle: Xd.variationTitle ? md(Xd.variationTitle) : null,
          description: md(Xd.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== Od ? null !== (Wd = Od[dd]) && void 0 !== Wd ? Wd : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: Xd.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: Xd.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (Fd = Xd.canCreateCustomLobbies) || void 0 === Fd || Fd,
          countdownInformation: (0, Td.j)(dd)
        }
      }(RO.gameNameWithVariation, cd, Pd)), [BO, RO.gameNameWithVariation, cd, Pd]), [uO, VO] = (0, yd.useState)(!1), [nO, LO] = (0, yd.useState)(null), [zO, jO] = (0, yd.useState)((() => nd ? rO(nd, Pd) : AO)), DO = null !== sO && void 0 !== sO ? sO : zO, [eO] = (0, yd.useState)(DO === AO), IO = (0, Fd.g)(DO.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: lO,
        recentlyPlayedCustomLobbies: CO
      } = (0, yd.useMemo)((() => function(dd, Od, md, Wd) {
        var Fd;
        const Rd = dd => {
            const md = (0, XO.p)(dd),
              Wd = Od.find((Od => "custom" === Od.type ? Od.schematicId === md : Od.gameNameWithVariation === dd));
            return Wd ? [...Wd.recentLobbies] : []
          },
          Xd = (0, Qd.getRecentGameNameWithVariationLobbiesKey)(dd),
          Kd = null !== (Fd = vd.k.getItem(Xd)) && void 0 !== Fd ? Fd : [],
          hd = [...Rd(dd), ...Kd],
          td = [];
        for (const vd of hd)(0, qO.K)(vd) && !td.includes(vd) && td.push(vd);
        let od = hd;
        if (md) {
          const dd = Rd("classic_worlds"),
            Od = hd.filter((Od => !dd.includes(Od)));
          od = [...dd, ...Od]
        }
        const Nd = [],
          qd = !1 === Wd ? [] : od;
        for (const vd of qd)(0, qO.K)(vd) || Nd.includes(vd) || Nd.push(vd);
        return {
          recentlyPlayedPublicLobbies: td,
          recentlyPlayedCustomLobbies: Nd
        }
      }(RO.gameNameWithVariation, ed, DO.showWorldsInsteadOfCustomLobbies, DO.canCreateCustomLobbies)), [RO.gameNameWithVariation, ed, DO.showWorldsInsteadOfCustomLobbies, DO.canCreateCustomLobbies]), [ZO, kO] = (0, yd.useState)(!0), [fO, MO] = (0, yd.useState)([]), [dm, Om] = (0, yd.useState)(null), [mm, Wm] = (0, yd.useState)("explore"), Fm = (0, yd.useRef)(!1), Rm = (0, yd.useCallback)((dd => {
        (0, bd.unstable_batchedUpdates)((() => {
          aO(dd), jO((Od => ({
            ...rO(dd, Pd),
            isFavourite: Od.isFavourite
          })))
        }))
      }), [Pd]);
      (0, yd.useEffect)((() => {
        null === tO.e.get("gameEntrySource") && (0, tO.l)("gameInformationPageDirect")
      }), []);
      const Xm = (0, yd.useRef)(null);
      (0, yd.useEffect)((() => {
        const dd = dd => {
            Xm.current = dd.target instanceof Element ? dd.target.closest("a, button") : null
          },
          Od = dd => {
            "Tab" === dd.key && (Xm.current = null)
          };
        return document.addEventListener("pointerdown", dd, !0), document.addEventListener("keydown", Od, !0), () => {
          document.removeEventListener("pointerdown", dd, !0), document.removeEventListener("keydown", Od, !0)
        }
      }), []), (0, wd.d)("Enter", (dd => {
        const Od = dd.target instanceof Element ? dd.target : null;
        if (dd.defaultPrevented || null !== Od && void 0 !== Od && Od.closest("input, textarea, select")) return;
        const md = null === Od || void 0 === Od ? void 0 : Od.closest("a, button");
        md && md !== Xm.current || (dd.preventDefault(), ym())
      })), (0, Ed.d)(dO.navigateToHomePage);
      const Km = lO.length > 0 || CO.length > 0,
        hm = !DO.useRejoinLastLobbyButton || 0 === lO.length,
        Qm = BO && null === DO.ownerSocialPreviewWithoutLocation,
        tm = jd.getPlayerName() === (null === wO || void 0 === wO || null === (Od = wO.owner) || void 0 === Od ? void 0 : Od.name),
        om = null !== (md = null === (Xd = DO.badges.find((dd => "event" === dd.type))) || void 0 === Xd ? void 0 : Xd.event) && void 0 !== md ? md : null,
        Nm = hm ? od.m : od.g,
        qm = (0, rd.jsx)(td.g, {
          tooltipInner: (0, rd.jsx)("div", {
            children: Pd("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, rd.jsx)(Nm, {
            className: "GameInformationButton",
            padDefaultFocus: hm,
            showPress: !0,
            onClick: () => {
              ym()
            },
            children: (0, rd.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [hm && (0, rd.jsxs)(rd.Fragment, {
                children: [(0, rd.jsx)(ld.c, {
                  name: "play"
                }), " "]
              }), Pd("homePage:quickPlay")]
            })
          })
        });
      (0, yd.useEffect)((() => {
        if (!BO || Dd) return;
        let dd = !0;
        const Od = (0, XO.p)(RO.gameNameWithVariation);
        return Sd.e.getGame(jd, Od).then((Od => {
          dd && (Od.takenDown ? LO({
            ownGame: Od
          }) : Rm(Od))
        })).catch((Od => {
          const md = null !== (0, Sd.j)(Od);
          md || console.error("Failed to get Custom Game information", Od), dd && (md ? LO({
            ownGame: null
          }) : (0, dO.navigateToHomePage)())
        })), Sd.e.getFavouriteGames(jd).then((md => {
          dd && jO((dd => ({
            ...dd,
            isFavourite: md.includes(Od)
          })))
        })).catch((Od => {
          console.error("Failed to get favourite games", Od), dd && VO(!0)
        })), () => {
          dd = !1
        }
      }), [BO, Dd, RO.gameNameWithVariation, Rm, jd]), (0, yd.useEffect)((() => {
        null !== nO && PO(Pd, nO.ownGame)
      }), [nO, Pd]);
      const Hm = !BO && null === sO;

      function ym(dd) {
        (0, SO.e)(), Zd((0, pd.c)(RO.gameNameWithVariation, dd))
      }(0, yd.useEffect)((() => {
        Hm && (0, dO.navigateToHomePage)()
      }), [Hm]), (0, yd.useEffect)((() => {
        if (!1 === DO.canCreateCustomLobbies) return;
        let dd = !0;
        return null !== DO.showWorldsInsteadOfCustomLobbies && !1 === Dd && (kO(!0), Sd.e.getFavouriteLobbies(jd).then((dd => {
          Om(dd)
        })), Sd.e.getOpenCustomLobbies(jd, {
          gameNameWithVariation: DO.showWorldsInsteadOfCustomLobbies ? "classic" : RO.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === mm,
          onlyFavouriteLobbies: "favourite" === mm
        }).then((Od => {
          dd && (0, bd.unstable_batchedUpdates)((() => {
            MO(Od), kO(!1)
          }))
        })).catch((Od => {
          console.error("Failed to get open custom lobbies", Od), dd && kO(!1)
        }))), () => {
          dd = !1
        }
      }), [Dd, RO, mm, DO.showWorldsInsteadOfCustomLobbies, DO.canCreateCustomLobbies, jd]);
      const bm = (0, yd.useCallback)((async dd => {
          try {
            if (!dm) return;
            dm.includes(dd) ? (Sd.e.unfavouriteLobby(jd, dd), Om(dm.filter((Od => Od !== dd)))) : (Sd.e.favouriteLobby(jd, dd).catch((dd => {
              console.error("Failed to favourite lobby", dd)
            })), Om([...dm, dd]))
          } catch (Od) {
            console.error("Failed to like lobby", Od)
          }
        }), [jd, dm]),
        Tm = (null === wO || void 0 === wO ? void 0 : wO.schematicId) === (0, XO.p)(mO.gameNameWithVariation) ? wO : null,
        pm = Tm && (0, zd.K)(mO.gameNameWithVariation, (dd => Pd(dd)), Tm);
      (0, OO.g)(Tm && (0, zd.z)(mO.gameNameWithVariation, Tm));
      const Ym = Cd.featureFlags.canUseCustomLobbies && !0 === DO.canCreateCustomLobbies,
        gm = (0, rd.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, rd.jsx)(Id, {
            gameNameWithVariation: RO.gameNameWithVariation
          })
        });
      return (0, rd.jsx)(rd.Fragment, {
        children: (0, rd.jsxs)("article", {
          className: qd()("GameInformation", {
            GameInformationFadeIn: eO,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (Nd = DO.countdownInformation) || void 0 === Nd ? void 0 : Nd.type)
          }),
          children: [pm && (0, rd.jsx)(Yd.c, {
            meta: pm
          }), (0, rd.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, rd.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, rd.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, rd.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, rd.jsx)("div", {
                  className: qd()("GameInformationTopBackgroundImage", Kd.j),
                  style: (0, Kd.g)(IO),
                  children: (0, rd.jsx)(Kd.e, {
                    image: IO
                  })
                })]
              }), (0, rd.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, rd.jsx)(pO.e, {}), (0, rd.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, rd.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, rd.jsxs)("div", {
                      className: qd()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: Qm
                      }),
                      children: [DO.badges.map((dd => (0, rd.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${dd.type}`,
                        children: (0, rd.jsx)(xd.b, {
                          badge: dd
                        })
                      }, dd.type))), BO && (0, rd.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, rd.jsx)(Ud.d, {
                          text: (0, Wd.db)({
                            type: "playerCrafted"
                          })
                        })
                      }), DO.category && (0, rd.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, rd.jsx)(Ud.d, {
                          text: [{
                            str: (0, Wd.fb)(DO.category).toUpperCase()
                          }]
                        })
                      }), null !== DO.ccu && (0, rd.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, rd.jsx)(ld.c, {
                          name: "user"
                        }), (0, qO.M)(DO.ccu), " online"]
                      }), null !== DO.ownerSocialPreviewWithoutLocation && (0, rd.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, rd.jsx)("span", {
                          children: "Made by"
                        }), (0, rd.jsx)(Vd.c, {
                          playerSocialPreview: {
                            ...DO.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), Qm && (0, rd.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, rd.jsx)("span", {
                          children: "Made by"
                        }), (0, rd.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== DO.favourites && (null !== DO.isFavourite || BO && !uO) && (0, rd.jsx)(od.z, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== Fm.current && (Fm.current = !0, null !== DO.isFavourite)) {
                              const dd = (0, XO.p)(RO.gameNameWithVariation);
                              let Od;
                              DO.isFavourite ? (Od = -1, Sd.e.unfavouriteGame(jd, dd).catch((dd => {
                                console.error("Failed to get unfavourite game", dd)
                              })).finally((() => {
                                Fm.current = !1
                              }))) : (Od = 1, Sd.e.favouriteGame(jd, dd).catch((dd => {
                                console.error("Failed to get favourite game", dd)
                              })).finally((() => {
                                Fm.current = !1
                              }))), jO((dd => ({
                                ...dd,
                                isFavourite: !dd.isFavourite
                              }))), jO((dd => ({
                                ...dd,
                                favourites: dd.favourites + Od
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (Bd = DO.isFavourite) && void 0 !== Bd && Bd,
                        disabled: null === DO.isFavourite,
                        className: qd()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === DO.isFavourite
                        })
                      }, null === DO.isFavourite ? "pending" : "known"), BO && !Qm && Cd.featureFlags.useSocialFeatures && !tm && (0, rd.jsx)(JO.d, {
                        targetType: "customGame",
                        targetId: (0, XO.p)(RO.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (jd.playerHasRank("developer") || jd.playerHasRank("admin") && tm) && (0, rd.jsxs)(od.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Zd((0, vO.q)((0, hO.h)(RO.gameNameWithVariation, !0)))
                        },
                        children: [(0, rd.jsx)(ld.c, {
                          name: "star-christmas"
                        }), " ", Pd("studio:viewInStudio")]
                      }), BO && jd.playerHasRank("developer") && (0, rd.jsxs)(od.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, HO.c)({
                            schematicId: (0, XO.p)(RO.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, rd.jsx)(ld.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), BO && jd.playerHasRank("developer") && (0, rd.jsxs)(od.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          WO.NotificationProvider.showCustomPopup({
                            body: () => (0, rd.jsx)(TO, {
                              schematicId: (0, XO.p)(RO.gameNameWithVariation),
                              gameName: DO.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, rd.jsx)(ld.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (sd = DO.countdownInformation) || void 0 === sd ? void 0 : sd.type) && (0, rd.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, rd.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, rd.jsx)(Jd.b, {
                            toTime: DO.countdownInformation.countdownToTime
                          })]
                        }), (0, rd.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: DO.countdownInformation.previewText
                        })]
                      })]
                    }, Qm ? "pending" : "shown"), (0, rd.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, rd.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, rd.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [DO.title, " ", DO.variationTitle && (null === (ud = NO.c[RO.gameNameWithVariation]) || void 0 === ud ? void 0 : ud.variationThumbnailUseBigRatio) && (0, rd.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: DO.variationTitle
                          })]
                        })
                      }), DO.listedVariations && DO.listedVariations.length > 1 && (0, rd.jsx)("div", {
                        className: qd()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (Ad = NO.c[RO.gameNameWithVariation]) || void 0 === Ad ? void 0 : Ad.variationThumbnailUseBigRatio
                        }),
                        children: DO.listedVariations.map((dd => {
                          var Od, md;
                          return (0, rd.jsxs)(cO, {
                            variation: dd,
                            isSelected: RO.gameNameWithVariation === dd,
                            children: [null !== cd && (0, rd.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, rd.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, rd.jsx)(ld.c, {
                                  name: "user"
                                }), " ", (0, qO.M)(null !== (Od = cd[dd]) && void 0 !== Od ? Od : 0)]
                              })
                            }), (0, rd.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: Pd(null !== (md = NO.c[dd].variationTitle) && void 0 !== md ? md : NO.c[dd].title)
                            }), (0, rd.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, Qd.filterBadges)(NO.c[dd].badges).map((dd => (0, rd.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + dd.type,
                                children: (0, rd.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, rd.jsx)(xd.b, {
                                    badge: dd
                                  })
                                })
                              }, dd.type)))
                            })]
                          }, dd)
                        }))
                      })]
                    }), DO.description && (0, rd.jsx)("p", {
                      className: "GameInformationDescription",
                      children: DO.description
                    })]
                  }), (0, rd.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, rd.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!hm && (0, rd.jsx)(td.g, {
                        tooltipInner: (0, rd.jsx)("div", {
                          children: Pd("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, rd.jsx)(od.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            ym(lO[0])
                          },
                          children: (0, rd.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, rd.jsx)(ld.c, {
                              name: "play"
                            }), " ", Pd("homePage:rejoinLobbyNumber", {
                              number: lO[0]
                            })]
                          })
                        })
                      }), hm && qm]
                    }), (0, rd.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!hm && qm, (0, rd.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, rd.jsx)(ld.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, rd.jsx)(Hd.c, {
                          className: "JoinLobbyInput",
                          placeholderText: Pd("homePage:lobbyName"),
                          maxLength: qO.L,
                          domRef: gO,
                          onValueChange: dd => {
                            dd = (0, qO.rb)(dd), bO(dd)
                          },
                          onEnter: () => {
                            0 === yO.length ? ym(lO[0]) : ym(yO)
                          }
                        }), (0, rd.jsx)(od.g, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === yO.length ? ym(lO[0]) : ym(yO)
                          },
                          children: Pd("general:join")
                        })]
                      })]
                    }), (0, rd.jsxs)("section", {
                      className: qd()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !Km
                      }),
                      children: [(0, rd.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, rd.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, rd.jsx)(ld.c, {
                            name: "clock-rotate-left"
                          }), Km && (0, rd.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: Pd("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, rd.jsx)(UO.b, {
                        lobbyGroups: [lO, CO],
                        onLobbyClick: dd => {
                          ym(dd)
                        },
                        keyPrefix: RO.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== om && (0, rd.jsx)(Ld, {
                eventName: om
              })]
            }), Ym && (0, rd.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, rd.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, rd.jsxs)("div", {
                  className: qd()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === DO.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === DO.showWorldsInsteadOfCustomLobbies && (0, rd.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, rd.jsx)(ld.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, rd.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, rd.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Pd("game:worlds")]
                    })]
                  }), !1 === DO.showWorldsInsteadOfCustomLobbies && (0, rd.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, rd.jsx)(ld.c, {
                      name: "joystick"
                    }), (0, rd.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, rd.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Pd("homePage:customLobbies")]
                    })]
                  }), (0, rd.jsx)(od.S, {
                    onClick: () => {
                      Wm("explore")
                    },
                    active: "explore" === mm,
                    children: Pd("general:explore")
                  }), (0, rd.jsx)(od.S, {
                    onClick: () => {
                      Wm("favourite")
                    },
                    active: "favourite" === mm,
                    children: Pd("homePage:favouriteLobbies")
                  }), (0, rd.jsx)(od.S, {
                    onClick: () => {
                      Wm("owned")
                    },
                    active: "owned" === mm,
                    children: Pd("homePage:ownedLobbies")
                  })]
                }), (0, rd.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, rd.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, rd.jsx)(YO.b, {
                      label: "Create",
                      onClick: () => {
                        WO.NotificationProvider.showCustomPopup({
                          body: dd => (0, rd.jsx)(FO.CreateCustomLobby, {
                            gameNameWithVariation: RO.gameNameWithVariation,
                            close: dd
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === ZO && (0, rd.jsx)(YO.g, {}), !1 === ZO && (0, rd.jsx)(EO, {
                      customLobbies: fO,
                      favouriteLobbies: dm,
                      toggleLikeLobby: bm,
                      showReport: Cd.featureFlags.useSocialFeatures && "owned" !== mm
                    })]
                  }), gm]
                })]
              })
            })]
          }), !Ym && gm]
        })
      })
    }

    function cO(dd) {
      let {
        variation: Od,
        isSelected: md,
        children: Wd
      } = dd;
      const hd = NO.c[Od],
        Qd = (0, Rd.q)(Od, (0, Rd.u)(hd)),
        td = (0, Fd.g)(Qd),
        od = (0, Xd.e)([(0, Rd.m)(Od, (0, Rd.e)(hd))]);
      return (0, rd.jsxs)(dO.LinkPreserveSearch, {
        to: (0, zd.z)(Od),
        replace: !0,
        className: qd()("GameInformationVariation", Kd.j, {
          SelectedGameInformationVariation: md
        }),
        onClick: dd => {
          if (!(0, mO.b)(dd)) return;
          const md = (0, Td.m)(Od);
          vd.k.setItem(md, Od)
        },
        onMouseEnter: od.start,
        onMouseLeave: od.cancel,
        onFocus: od.start,
        onBlur: od.cancel,
        style: (0, Kd.g)(td),
        children: [(0, rd.jsx)(Kd.e, {
          image: td
        }), Wd]
      })
    }
  },
  7449: (dd, Od, md) => {
    md.d(Od, {
      c: () => Td
    });
    var Wd = md(66),
      Fd = md(1572),
      Rd = md(1627),
      Xd = md(4717),
      Kd = md(1186),
      hd = md(1436),
      vd = md(1471),
      Qd = md(1443),
      td = md(1155),
      od = md.n(td),
      Nd = md(7443),
      qd = md(1341);

    function Hd(dd) {
      let {
        info: Od,
        className: md
      } = dd;
      const {
        statusText: Wd,
        rowText: Fd
      } = (0, Nd.c)();
      return (0, qd.jsxs)("div", {
        className: od()("GameApprovalInfoDetails", md),
        children: [(0, qd.jsxs)("div", {
          className: od()("GameApprovalInfoSummary", Od.overallPassed ? "Passed" : "Failed"),
          children: [(0, qd.jsx)(Qd.c, {
            name: Od.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, qd.jsx)("span", {
            children: Wd(Od.status)
          })]
        }), Od.rows.length > 0 && (0, qd.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: Od.rows.map((dd => {
            const {
              label: Od,
              value: md
            } = Fd(dd);
            return (0, qd.jsxs)("div", {
              className: od()("GameApprovalInfoRow", dd.passed ? "Passed" : "Failed"),
              children: [(0, qd.jsx)(Qd.c, {
                name: dd.passed ? "check" : "xmark"
              }), (0, qd.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, qd.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: Od
                }), null !== md && (0, qd.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: md
                })]
              })]
            }, dd.kind)
          }))
        })]
      })
    }
    var yd = md(1238),
      bd = md(1462);

    function Td(dd) {
      bd.NotificationProvider.showCustomPopup({
        body: () => (0, qd.jsx)(pd, {
          ...dd
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function pd(dd) {
      let {
        schematicId: Od,
        canOverride: md,
        onApprovalChanged: td
      } = dd;
      const {
        t: od
      } = (0, yd.G)(), {
        userContext: Nd
      } = (0, Kd.d)(), bd = (0, Xd.b)(), [Td, pd] = (0, Wd.useState)(null), [Yd, gd] = (0, Wd.useState)(null), [wd, Ed] = (0, Wd.useState)(!1), Jd = (0, Wd.useCallback)((() => {
        gd(null), Rd.e.getGameApprovalInfo(Nd, Od).then((dd => {
          bd.current && pd(dd)
        })).catch((dd => {
          console.error("Failed to get game approval info", dd), bd.current && gd(od("studio:approvalLoadFailed"))
        }))
      }), [Nd, Od, bd, od]);
      (0, Wd.useEffect)((() => {
        Jd()
      }), [Jd]);
      const Ud = dd => {
        wd || (Ed(!0), Rd.e.setGameApproval(Nd, Od, dd).then((() => {
          null === td || void 0 === td || td(), bd.current && Jd()
        })).catch((dd => {
          console.error("Failed to set game approval", dd)
        })).finally((() => {
          bd.current && Ed(!1)
        })))
      };
      return (0, qd.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, qd.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: od("studio:approvalTitle")
        }), !Td && !Yd && (0, qd.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, qd.jsx)(hd.c, {})
        }), Yd && (0, qd.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: Yd
        }), Td && (0, qd.jsxs)(qd.Fragment, {
          children: [(0, qd.jsx)(Hd, {
            info: Td
          }), md && (0, qd.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== Td.manualOverride && (0, qd.jsx)(vd.g, {
              tooltipInner: (0, qd.jsx)("div", {
                children: od("studio:approvalApproveTooltip")
              }),
              children: (0, qd.jsxs)(Fd.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Ud(!0)
                },
                disabled: wd,
                children: [(0, qd.jsx)(Qd.c, {
                  name: "check"
                }), " ", od("studio:approvalApprove")]
              })
            }), !1 !== Td.manualOverride && (0, qd.jsx)(vd.g, {
              tooltipInner: (0, qd.jsx)("div", {
                children: od("studio:approvalDenyTooltip")
              }),
              children: (0, qd.jsxs)(Fd.G, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Ud(!1)
                },
                disabled: wd,
                children: [(0, qd.jsx)(Qd.c, {
                  name: "xmark"
                }), " ", od("studio:approvalDeny")]
              })
            }), null !== Td.manualOverride && (0, qd.jsx)(vd.g, {
              tooltipInner: (0, qd.jsx)("div", {
                children: od("studio:approvalClearOverrideTooltip")
              }),
              children: (0, qd.jsxs)(Fd.g, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Ud(null)
                },
                disabled: wd,
                children: [(0, qd.jsx)(Qd.c, {
                  name: "arrows-rotate"
                }), " ", od("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  7443: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      c: () => Xd
    });
    var Wd = md(405),
      Fd = md(1238);
    const Rd = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function Xd() {
      const {
        t: dd,
        selectedLanguage: Od
      } = (0, Fd.G)();
      return {
        statusText: Od => dd(Rd[Od]),
        rowText: md => {
          const Rd = (dd, md) => (0, Wd.Q)((0, Fd.p)(Od.code, dd), 0, md),
            Xd = (Od, md) => null === md ? Od : dd("studio:approvalWithMinDays", {
              value: Od,
              days: md
            });
          switch (md.kind) {
            case "ownerAccountAge": {
              const Od = md.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: dd("studio:approvalAccountAgeLabel"),
                value: Xd(dd(Od, {
                  age: Rd(Od, md.accountAgeMs)
                }), md.minAccountAgeDays)
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: dd("studio:approvalSinceUnbannedLabel"), value: Xd(Rd("studio:approvalSinceUnbannedLabel", md.sinceMs), md.minDays)
              };
            case "reportHold": {
              const {
                detail: Od
              } = md;
              if (null === Od) return {
                label: dd("studio:approvalUnderInvestigation"),
                value: null
              };
              const Wd = Od.weightedReporters.toFixed(1),
                Fd = Od.threshold.toFixed(1),
                Xd = dd("studio:approvalReportHoldLabel", {
                  hours: Od.windowHours
                });
              if (null === Od.heldUntil) return {
                label: Xd,
                value: dd("studio:approvalReportHoldValue", {
                  weightedReporters: Wd,
                  threshold: Fd
                })
              };
              const Kd = "studio:approvalReportHoldValueHeld";
              return {
                label: Xd,
                value: dd(Kd, {
                  weightedReporters: Wd,
                  threshold: Fd,
                  time: Rd(Kd, Od.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function Kd(dd) {
      return null === dd.manualOverride && dd.rows.some((dd => "reportHold" === dd.kind && !dd.passed))
    }
  },
  35596: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(66),
      Fd = md(4664);

    function Rd() {
      const [dd, Od] = (0, Wd.useState)(!1);
      return (0, Wd.useLayoutEffect)((() => {
        let dd = !0;
        return (0, Fd.e)().then((() => {
          dd && Od(!0)
        })), () => {
          dd = !1
        }
      }), []), dd
    }
  },
  10090: (dd, Od, md) => {
    md.d(Od, {
      d: () => yd,
      e: () => bd
    });
    var Wd = md(180),
      Fd = md(218),
      Rd = md(1122),
      Xd = md(1135),
      Kd = md(1286),
      hd = md(2092),
      vd = md(3301),
      Qd = md(1627),
      td = md(1462),
      od = md(1189),
      Nd = md(10092),
      qd = md(1641),
      Hd = md(1666);

    function yd(dd, Od) {
      const md = !0 === Od.debugResult.gameRefused,
        Rd = md || Od.code === Wd.l.REQUEST_TO_MATCHMAKING ? (0, Nd.h)(Od.message) : null;
      if (null !== Rd) return gd(dd, dd((0, Nd.j)(Rd)), dd(Nd.i[Rd])), !0;
      if (md) return async function(dd) {
        const {
          gameNameWithVariation: Od,
          lobbyName: md,
          shownLobbyName: Wd
        } = hd.gameBridge.latest("connectedGame"), Fd = "classic" === Od && (0, Kd.F)(md) ? Wd : await (0, vd.g)(dd, Od, md);
        return "" !== Fd ? dd("general:cantJoinGame", {
          game: Fd
        }) : dd("general:cantJoinThisGame")
      }(dd).then((md => {
        gd(dd, md, Od.message)
      })), !0;
      const {
        joinFailure: Xd
      } = Od.debugResult, Qd = "refused" === (null === Xd || void 0 === Xd ? void 0 : Xd.at) ? Xd.code : null;
      return Qd === Fd.e.schematicNotPublished.code ? (async function(dd, Od) {
        const md = Td(),
          Wd = await Yd(md);
        if (null === Wd || Wd.gamePublished) return void gd(dd, dd("general:cantJoinThisGame"), Od);
        await pd(dd, "rocket-launch", dd("studio:gameNotPublishedTitle", {
          game: Wd.name
        }), dd("studio:publishInStudio"), md)
      }(dd, Od.message), !0) : (Qd === Fd.e.schematicBanned.code || Qd === Fd.e.customGameTakenDown.code) && (Yd(Td()).then((Od => {
        bd(dd, Od)
      })), !0)
    }

    function bd(dd, Od) {
      !0 !== (null === Od || void 0 === Od ? void 0 : Od.takenDown) ? gd(dd, dd("general:cantJoinThisGame"), Fd.e.customGameTakenDown.text) : pd(dd, "lock", dd("studio:gameTakenDownTitle", {
        game: Od.name
      }), dd("studio:viewInStudio"), Od.schematicId)
    }

    function Td() {
      return (0, Rd.p)(hd.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function pd(dd, Od, md, Wd, Fd) {
      !0 === await td.NotificationProvider.showPromptPopup({
        icon: Od,
        title: md,
        confirmText: Wd,
        cancelText: dd("general:cancel")
      }).getResult() && (0, qd.navigatePreserveSearch)((0, Hd.q)((0, Xd.e)(Fd), "manage"))
    }
    async function Yd(dd) {
      try {
        return await Qd.e.getGame(await od.userContextManager.getCurrentUserContext(), dd, !0)
      } catch (Od) {
        return (0, Qd.g)(Od) || console.error(`Failed to get game ${dd}`, Od), null
      }
    }

    function gd(dd, Od, md) {
      td.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: Od,
        subtitle: md,
        confirmText: dd("general:ok"),
        cancelText: ""
      })
    }
  },
  10113: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(1424),
      Fd = md(1286),
      Rd = md(701);

    function Xd(dd) {
      return dd = function(dd, Od) {
        var md;
        const Wd = new URLSearchParams(Od),
          Fd = Wd.get("lobby"),
          Rd = Wd.get("vm"),
          Xd = null !== (md = Fd) && void 0 !== md ? md : dd.lobbyName,
          Kd = null !== Rd && void 0 !== Rd ? Rd : dd.directJoinVmUrl;
        if (Xd === dd.lobbyName && Kd === dd.directJoinVmUrl) return dd;
        return {
          ...dd,
          lobbyName: Xd,
          directJoinVmUrl: Kd
        }
      }(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), dd = function(dd) {
        if ((0, Rd.O)(dd.directJoinVmUrl)) return dd;
        const Od = (0, Fd.Y)(dd.directJoinVmUrl);
        null === Od && (dd.directJoinVmUrl = void 0);
        return dd
      }(dd = function(dd) {
        if ((0, Rd.O)(dd.gameNameWithVariation)) return dd;
        return dd.gameNameWithVariation = (0, Wd.m)(dd.gameNameWithVariation), dd
      }(dd))
    }
  },
  10092: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      f: () => Xd,
      h: () => Kd,
      i: () => vd,
      j: () => hd
    });
    var Wd = md(218),
      Fd = md(5294);

    function Rd(dd) {
      return Xd(dd) === Wd.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function Xd(dd) {
      return "object" === typeof dd && null !== dd ? dd.code : void 0
    }

    function Kd(dd) {
      var Od;
      return null !== (Od = Object.keys(Fd.e).find((Od => Fd.e[Od] === dd))) && void 0 !== Od ? Od : null
    }

    function hd(dd) {
      return "notWhitelisted" === dd ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const vd = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37901: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd,
      e: () => Wd
    });
    const Wd = "skyblockSkills",
      Fd = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);