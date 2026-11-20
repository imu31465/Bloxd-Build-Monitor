export const id = 116;
export const ids = [116, 390];
export const modules = {
  35964: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => eu
    });
    var Bb = hb(298),
      Ob = hb(3291),
      Gb = hb(3330),
      Ub = hb(3326),
      Lb = hb(3323),
      Yb = hb(1095),
      Sb = hb(29),
      ab = hb(1622),
      Hb = hb(1260),
      wb = hb(1357),
      Zb = hb(958),
      Xb = hb.n(Zb),
      pb = hb(1585),
      ob = hb(49),
      Ab = hb(65),
      lb = hb(2233),
      Kb = hb(1227),
      Wb = hb(1515),
      Cb = hb(1029),
      db = hb(3191),
      rb = hb(4318),
      jb = hb(3274),
      nb = hb(1789),
      Db = hb(3282),
      xb = hb(1633),
      zb = hb(1398),
      gb = hb(2022),
      ib = hb(1242),
      vb = hb(2418),
      tb = hb(4791),
      Jb = hb(1007);
    const eb = 15e3,
      Nb = 2500;

    function sb(bb) {
      var ub;
      let {
        eventName: hb
      } = bb;
      const {
        t: Bb
      } = (0, Yb.K)(), Ob = xb.h[hb], [Gb, Ub] = (0, ob.useState)((() => Date.now() >= Ob.endsAt.getTime())), [Lb, Sb] = (0, ob.useState)("overall"), ab = function(bb, ub) {
        const {
          userContext: hb,
          isUserContextUpdating: Bb
        } = (0, Cb.d)(), Ob = `${bb}:${ub}`, [Gb, Ub] = (0, ob.useState)({
          requestKey: Ob,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, ob.useEffect)((() => {
          if (Bb) return;
          let Gb, Lb = !1;
          const Yb = async () => {
            if ("visible" === document.visibilityState) try {
              const Bb = await zb.e.getGameEventLeaderboard(hb, {
                event: bb,
                scope: ub
              });
              Lb || Ub({
                requestKey: Ob,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Bb
                }
              })
            } catch {
              Lb || Ub((bb => bb.requestKey === Ob && "loaded" === bb.leaderboard.status ? bb : {
                requestKey: Ob,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            Lb || (Gb = setTimeout(Yb, eb))
          };
          return Yb(), () => {
            Lb = !0, clearTimeout(Gb)
          }
        }), [bb, ub, Ob, hb, Bb]), Gb.requestKey === Ob ? Gb.leaderboard : {
          status: "loading"
        }
      }(hb, Lb), Hb = function(bb) {
        const ub = (0, ob.useRef)(null),
          hb = (0, ob.useRef)(0),
          Bb = (0, ob.useRef)(),
          [Ob, Gb] = (0, ob.useState)({});
        return (0, ob.useEffect)((() => {
          const Ob = null === bb || void 0 === bb ? void 0 : bb.entries;
          if (!Ob) return;
          const Ub = new Map(Ob.map((bb => [bb.player.name, bb.value]))),
            Lb = ub.current;
          if (ub.current = Ub, null === Lb) return;
          const Yb = {};
          for (const [bb, ub] of Ub) {
            const Bb = Lb.get(bb);
            void 0 !== Bb && ub > Bb && (Yb[bb] = {
              amount: ub - Bb,
              key: hb.current++
            })
          }
          0 !== Object.keys(Yb).length && (Gb(Yb), clearTimeout(Bb.current), Bb.current = setTimeout((() => {
            Gb({})
          }), Nb))
        }), [bb]), (0, ob.useEffect)((() => () => {
          clearTimeout(Bb.current)
        }), []), Ob
      }("loaded" === ab.status ? ab.leaderboard : null), wb = function(bb) {
        const [ub, hb] = (0, ob.useState)(null), Bb = "loaded" === bb.status ? bb.leaderboard.goalProgress : void 0;
        return (0, ob.useEffect)((() => {
          Bb && hb(Bb)
        }), [Bb]), ub
      }(ab), Zb = gb.g[`profileEffect_${Ob.prizePack}`];
      if (Gb) return null;
      const pb = "loaded" === ab.status ? ab.leaderboard : null,
        Ab = null !== (ub = null === pb || void 0 === pb ? void 0 : pb.entries) && void 0 !== ub ? ub : null,
        lb = null !== pb && void 0 !== pb && pb.own && null !== Ab && !Ab.some((bb => bb.isOwn)) ? pb.own : null;
      return (0, Jb.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Jb.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Jb.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Jb.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Jb.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Jb.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Bb("gameEvents:live")]
              }), (0, Jb.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Bb("gameEvents:endsIn"), (0, Jb.jsx)(jb.e, {
                  toTime: Ob.endsAt,
                  onReachEndOfCountdown: () => {
                    Ub(!0)
                  }
                })]
              })]
            }), (0, Jb.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Bb(Ob.titleKey)
            }), (0, Jb.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Jb.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [Zb && (0, Jb.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Jb.jsx)(Zb, {})
                }), (0, Jb.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Jb.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Bb("gameEvents:prize")
                  }), (0, Jb.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Bb(Ob.prizeNameKey)
                  })]
                })]
              }), (0, Jb.jsx)(Mb, {
                event: Ob,
                progress: wb
              })]
            })]
          }), (0, Jb.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Jb.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Jb.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Bb(Ob.leaderboard.titleKey)
              }), (0, Jb.jsx)(tb.c, {
                ariaLabel: Bb("gameEvents:leaderboardScope"),
                options: xb.e.map((bb => ({
                  value: bb,
                  label: Bb(`gameEvents:${bb}Scope`)
                }))),
                value: Lb,
                onChange: Sb
              })]
            }), "loading" === ab.status && (0, Jb.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Jb.jsx)(ib.c, {})
            }), ("unavailable" === ab.status || "loaded" === ab.status && null === Ab) && (0, Jb.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Bb("gameEvents:leaderboardUnavailable")
            }), null !== Ab && 0 === Ab.length && (0, Jb.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Bb("friends" === Lb ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== Ab && Ab.length > 0 && (0, Jb.jsx)("ol", {
              className: "GameEventPanelRows",
              children: Ab.map((bb => {
                const ub = Hb[bb.player.name];
                return (0, Jb.jsxs)("li", {
                  className: Xb()("GameEventPanelRow", {
                    GameEventPanelRowOwn: bb.isOwn,
                    GameEventPanelRowTop: bb.rank <= 3
                  }),
                  children: [(0, Jb.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", bb.rank]
                  }), (0, Jb.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Jb.jsx)(vb.h, {
                      playerSocialPreview: {
                        ...bb.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== ub && (0, Jb.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", ub.amount.toLocaleString()]
                  }, ub.key), (0, Jb.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: bb.value.toLocaleString()
                  })]
                }, bb.player.name)
              }))
            }), lb && (0, Jb.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Jb.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", lb.rank.toLocaleString()]
              }), (0, Jb.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Bb("gameEvents:yourPlace")
              }), (0, Jb.jsx)("span", {
                className: "GameEventPanelScore",
                children: lb.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function Mb(bb) {
      let {
        event: ub,
        progress: hb
      } = bb;
      const {
        t: Bb
      } = (0, Yb.K)(), Ob = null !== hb && ub.prizeGoals.some(((bb, ub) => hb[ub] >= bb.target));
      return (0, Jb.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Jb.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Bb(Ob ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Jb.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: ub.prizeGoals.map(((bb, ub) => {
            const Ob = null === hb ? null : Math.min(hb[ub], bb.target);
            return (0, Jb.jsxs)(ob.Fragment, {
              children: [ub > 0 && (0, Jb.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Bb("gameEvents:goalsOr")
              }), (0, Jb.jsxs)("div", {
                className: Xb()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Ob === bb.target
                }),
                children: [(0, Jb.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Bb(bb.labelKey)
                }), (0, Jb.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Jb.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Ob && void 0 !== Ob ? Ob : 0) / bb.target * 100 + "%"
                    }
                  }), null !== Ob && (0, Jb.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Ob.toLocaleString(), " / ", bb.target.toLocaleString()]
                  })]
                })]
              })]
            }, bb.board)
          }))
        })]
      })
    }
    var mb = hb(1447),
      Ib = hb(1497),
      Pb = hb(949),
      qb = hb(674),
      Eb = hb(3268);

    function yb(bb) {
      let {
        gameNameWithVariation: ub
      } = bb;
      const hb = (0, mb.u)(ub),
        [Bb, Ob] = (0, ob.useState)(null);
      if ((0, ob.useEffect)((() => {
          if (!hb) return;
          let bb = !0;
          return (0, Ib.e)(hb).then((ub => {
            bb && Ob(ub)
          })).catch((bb => {
            console.error(`Failed to load the page copy for ${hb.name}`, bb)
          })), () => {
            bb = !1
          }
        }), [hb]), !hb || !Bb || Bb.name !== hb.name) return null;
      const Gb = (0, Ib.c)(Bb),
        Ub = new Set((0, Pb.b)((0, qb.k)()).map((bb => (0, mb.q)(bb)))),
        Lb = Bb.similarGames.filter((bb => Ub.has((0, mb.q)(bb))));
      return (0, Jb.jsx)("div", {
        className: "GamePageContent",
        children: (0, Jb.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Jb.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Jb.jsx)("h2", {
              children: Gb.whatIs
            }), Bb.whatIs.map((bb => (0, Jb.jsx)("p", {
              children: bb
            }, bb)))]
          }), (0, Jb.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Jb.jsx)("h2", {
              children: Gb.howToPlay
            }), Bb.howToPlay.map((bb => (0, Jb.jsx)("p", {
              children: bb
            }, bb)))]
          }), (0, Jb.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Jb.jsx)("h2", {
              children: Gb.features
            }), (0, Jb.jsx)("ul", {
              children: Bb.features.map((bb => (0, Jb.jsx)("li", {
                children: bb
              }, bb)))
            })]
          }), (0, Jb.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Jb.jsx)("h2", {
              children: Gb.tips
            }), (0, Jb.jsx)("ul", {
              children: Bb.tips.map((bb => (0, Jb.jsx)("li", {
                children: bb
              }, bb)))
            })]
          }), (0, Jb.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Jb.jsx)("h2", {
              children: Gb.faq
            }), Bb.faq.map((bb => {
              let {
                question: ub,
                answer: hb
              } = bb;
              return (0, Jb.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Jb.jsx)("h3", {
                  children: ub
                }), (0, Jb.jsx)("p", {
                  children: hb
                })]
              }, ub)
            }))]
          }), Lb.length > 0 && (0, Jb.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Jb.jsx)("h2", {
              children: Gb.similarGames
            }), (0, Jb.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: Lb.map((bb => (0, Jb.jsx)("li", {
                children: (0, Jb.jsx)(Eb.e, {
                  source: {
                    type: "game",
                    gameNameWithVariation: bb
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, bb)))
            })]
          })]
        })
      })
    }
    var Vb = hb(966),
      Fb = hb(86),
      fb = hb(1038),
      kb = hb(9131),
      Tb = hb(1559),
      cb = hb(1431),
      Qb = hb(1415),
      Rb = hb(1506),
      bu = hb(1361),
      uu = hb(1249),
      hu = hb(35968),
      Bu = hb(1131),
      Ou = hb(934),
      Gu = hb(314),
      Uu = hb(944),
      Lu = hb(1442),
      Yu = hb(8642),
      Su = hb(13),
      au = hb(2389),
      Hu = hb(701),
      wu = hb(1124),
      Zu = hb(6235),
      Xu = hb(3278);

    function pu(bb) {
      let {
        preview: ub,
        isBroken: hb
      } = bb;
      const Bb = null === ub ? null : (0, Gb.i)(ub, "small"),
        Ub = (0, Ob.h)(null !== Bb && void 0 !== Bb ? Bb : Gb.p);
      return null === ub ? (0, Jb.jsx)("div", {
        className: Xb()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: hb
        }),
        children: (0, Jb.jsx)(Vb.e, {
          name: hb ? "triangle-exclamation" : "star"
        })
      }) : (0, Jb.jsx)("div", {
        className: Xb()("FeaturedGamesPopupSlotThumbnail", Lb.g),
        style: (0, Lb.f)(Ub),
        role: "img",
        "aria-label": ub.name,
        children: (0, Jb.jsx)(Lb.d, {
          image: Ub
        })
      })
    }

    function ou(bb) {
      let {
        schematicId: ub,
        gameName: hb
      } = bb;
      const {
        userContext: Ob
      } = (0, Cb.d)(), Gb = (0, Xu.d)(), [Ub, Lb] = (0, ob.useState)(null), [Yb, Sb] = (0, ob.useState)(null), [ab, Hb] = (0, ob.useState)(!1), Zb = (0, ob.useCallback)((() => {
        Sb(null), zb.e.getFeaturedGames(Ob).then((bb => {
          Gb.current && Lb(bb.slots)
        })).catch((bb => {
          console.error("Failed to get featured games", bb), Gb.current && Sb("Failed to load featured games")
        }))
      }), [Ob, Gb]);
      (0, ob.useEffect)((() => {
        Zb()
      }), [Zb]);
      const Xb = (bb, ub) => {
        ab || (Hb(!0), zb.e.setFeaturedGame(Ob, bb, ub).then((() => {
          Gb.current && Zb()
        })).catch((bb => {
          console.error("Failed to set featured game", bb), Gb.current && Sb("Failed to update the featured slot")
        })).finally((() => {
          Gb.current && Hb(!1)
        })))
      };
      return (0, Jb.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Jb.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !Ub && !Yb && (0, Jb.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Jb.jsx)(ib.c, {})
        }), Yb && (0, Jb.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: Yb
        }), Ub && (0, Jb.jsxs)(Jb.Fragment, {
          children: [(0, Jb.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: Ub.map((bb => {
              const hb = bb.schematicId === ub,
                Ob = null === bb.schematicId,
                {
                  categoryGroup: Gb
                } = Bb.Q[bb.slotId];
              return (0, Jb.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Jb.jsx)(pu, {
                  preview: bb.preview,
                  isBroken: !Ob
                }), (0, Jb.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Jb.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Bb.tb)(Gb), " \xb7 position", " ", (0, Bb.T)(bb.slotId, Bb.Wb) + 1, " of", " ", (0, Bb.Tb)(Gb, Bb.Wb)]
                  }), Ob && (0, Jb.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Ob && null !== bb.preview && (0, Jb.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: bb.preview.name
                  }), !Ob && null === bb.preview && (0, Jb.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Jb.jsx)(Vb.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Jb.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Ob && (0, Jb.jsxs)(wb.q, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Xb(bb.slotId, ub)
                    },
                    disabled: ab,
                    children: [(0, Jb.jsx)(Vb.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !Ob && !hb && (0, Jb.jsxs)(wb.O, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Xb(bb.slotId, ub)
                    },
                    disabled: ab,
                    children: [(0, Jb.jsx)(Vb.e, {
                      name: "star"
                    }), " Replace"]
                  }), !Ob && (0, Jb.jsxs)(wb.H, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Xb(bb.slotId, null)
                    },
                    disabled: ab,
                    children: [(0, Jb.jsx)(Vb.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, bb.slotId)
            }))
          }), (0, Jb.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var Au = hb(4439),
      lu = hb(4356),
      Ku = hb(3364);
    const Wu = 8,
      Cu = 12;

    function du(bb) {
      let {
        customLobbies: ub,
        favouriteLobbies: hb,
        toggleLikeLobby: Bb,
        showReport: Ob
      } = bb;
      const [Gb, Ub] = (0, ob.useState)(Wu);
      return (0, ob.useEffect)((() => {
        if (Gb >= ub.length) return;
        let bb = !0;
        return (0, Ku.e)().then((() => {
          bb && Ub(Gb + Cu)
        })), () => {
          bb = !1
        }
      }), [Gb, ub.length]), (0, Jb.jsx)(Jb.Fragment, {
        children: ub.slice(0, Gb).map((bb => (0, Jb.jsx)(lu.c, {
          customLobby: bb,
          favouriteLobbies: hb,
          toggleLikeLobby: Bb,
          showReport: Ob
        }, bb.name)))
      })
    }
    var ru = hb(4363),
      ju = hb(4380),
      nu = hb(4335),
      Du = hb(3355),
      xu = hb(8633),
      zu = hb(204);
    const gu = {
      skyblock: [hb(35987).d]
    };
    var iu = hb(588);
    const vu = {
      listedVariations: null,
      backgroundImage: Gb.p,
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

    function tu(bb, ub) {
      const hb = Hu.i[bb.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, Gb.i)(bb, "large"),
        badges: [],
        category: bb.gameCategory,
        title: void 0 !== (null === hb || void 0 === hb ? void 0 : hb.title) ? ub(hb.title) : bb.name,
        variationTitle: null,
        description: void 0 !== (null === hb || void 0 === hb ? void 0 : hb.description) ? ub(hb.description) : bb.description,
        ownerSocialPreviewWithoutLocation: "owner" in bb ? bb.owner : null,
        ccu: bb.ccu,
        favourites: bb.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in bb ? bb.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function Ju(bb) {
      var ub, hb, Bb;
      return null !== (ub = null !== (hb = (0, zu.j)() ? function(bb) {
        for (const [ub, hb] of Object.entries(gu)) {
          const Bb = [ub, ...hb.map((bb => (0, Gu.Ub)(ub, bb)))];
          if (Bb.includes(bb)) return Bb
        }
        return null
      }(bb) : null) && void 0 !== hb ? hb : null === (Bb = Hu.e[bb]) || void 0 === Bb ? void 0 : Bb.listedVariations) && void 0 !== ub ? ub : null
    }

    function eu() {
      const {
        gameNameWithVariation: bb
      } = (0, cb.F)();
      if ((0, ob.useEffect)(Du.o, []), bb && (0, Bu.o)(bb)) return (0, Jb.jsx)(Nu, {
        urlId: bb
      }, bb);
      const ub = bb && (0, Ou.i)(bb) ? bb : "firstParty";
      return (0, Jb.jsx)(su, {}, ub)
    }

    function Nu(bb) {
      let {
        urlId: ub
      } = bb;
      const {
        userContext: hb,
        isUserContextUpdating: Bb
      } = (0, Cb.d)(), Ob = (0, ob.useMemo)((() => (0, Tb.i)(ub)), [ub]);
      (0, ob.useMemo)((() => {
        if (null === Ob) return;
        const bb = fb.userContextManager.peekCurrentUserContext();
        (null !== bb ? zb.e.getGame(bb, Ob.schematicId) : fb.userContextManager.getCurrentUserContext().then((bb => zb.e.getGame(bb, Ob.schematicId)))).catch((bb => {
          console.error(`Failed to get the custom game ${Ob.schematicId}`, bb), (0, Tb.g)(ub)
        }))
      }), [Ob, ub]);
      const [Gb, Ub] = (0, ob.useState)(null), Lb = (0, kb.b)();
      (0, ob.useEffect)((() => {
        if (null !== Ob || Bb) return;
        let bb = !0;
        return zb.e.getGameByUrlId(hb, ub).then((hb => {
          bb && Ub({
            urlId: ub,
            game: hb
          })
        })).catch((hb => {
          console.error(`Failed to find the custom game with urlId ${ub}`, hb), bb && (0, Qb.navigateToHomePage)()
        })), () => {
          bb = !1
        }
      }), [ub, Ob, Bb, hb]);
      const Yb = null !== Ob && void 0 !== Ob ? Ob : (null === Gb || void 0 === Gb ? void 0 : Gb.urlId) === ub ? Gb.game : null;
      return null === Yb ? (0, Jb.jsx)(ib.c, {}) : Lb ? (0, Jb.jsx)(su, {
        gameNameWithVariation: (0, Ou.s)(Yb.schematicId),
        knownCustomGame: Yb
      }, Yb.schematicId) : null
    }

    function su(bb) {
      var ub, hb, Ub, Zb, xb, gb, ib, tb;
      let {
        gameNameWithVariation: eb,
        knownCustomGame: Nb = null
      } = bb;
      const {
        t: Mb
      } = (0, Yb.K)();
      (0, au.g)();
      const Ib = (0, au.o)(),
        {
          userContext: Pb,
          isUserContextUpdating: qb
        } = (0, Cb.d)(),
        Eb = (0, nu.e)(),
        fb = (0, Qb.useNavigatePreserveSearch)(),
        kb = (0, cb.F)(),
        Tb = (0, ob.useMemo)((() => eb ? {
          gameNameWithVariation: eb
        } : kb), [eb, kb]),
        bu = (0, Yu.b)(Tb),
        Bu = (0, ob.useMemo)((() => {
          const bb = function(bb) {
            var ub, hb;
            const Bb = Ju(bb);
            if (!Bb || 0 === Bb.length || Bb.includes(bb)) return bb;
            const Ob = Sb.j.getItem((0, lb.i)(bb));
            if (Ob && Bb.includes(Ob)) return Ob;
            return null !== (ub = null === (hb = Hu.e[bb]) || void 0 === hb ? void 0 : hb.defaultListedVariation) && void 0 !== ub ? ub : Bb[0]
          }(bu.gameNameWithVariation);
          return bb === bu.gameNameWithVariation ? bu : {
            ...bu,
            gameNameWithVariation: bb
          }
        }), [bu]);
      (0, ob.useEffect)((() => {
        const bb = bu.gameNameWithVariation;
        Bu.gameNameWithVariation !== bb && bb !== (0, Gu.Xb)(bb) && fb((0, mb.r)(Bu.gameNameWithVariation), {
          replace: !0
        })
      }), [Bu.gameNameWithVariation, bu.gameNameWithVariation, fb]);
      const [Xu, pu] = (0, ob.useState)(""), Ku = ob.useRef(null), [Wu, Cu] = (0, ob.useState)(), Du = (0, Ou.i)(Bu.gameNameWithVariation), zu = (0, ob.useMemo)((() => Du ? null : function(bb, ub, hb) {
        var Bb, Ob;
        const Ub = Hu.e[bb];
        return (0, iu.J)(Ub) ? null : {
          listedVariations: Ju(bb),
          backgroundImage: (0, Gb.l)(bb, (0, Gb.e)(Ub)),
          badges: (0, ab.filterBadges)(Ub.badges),
          category: Ub.type,
          title: hb(Ub.title),
          variationTitle: Ub.variationTitle ? hb(Ub.variationTitle) : null,
          description: hb(Ub.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== ub ? null !== (Bb = ub[bb]) && void 0 !== Bb ? Bb : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: Ub.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: Ub.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (Ob = Ub.canCreateCustomLobbies) || void 0 === Ob || Ob,
          countdownInformation: (0, lb.e)(bb)
        }
      }(Bu.gameNameWithVariation, Ib, Mb)), [Du, Bu.gameNameWithVariation, Ib, Mb]), [gu, eu] = (0, ob.useState)(!1), [Nu, su] = (0, ob.useState)((() => Nb ? tu(Nb, Mb) : vu)), mu = null !== zu && void 0 !== zu ? zu : Nu, [Iu] = (0, ob.useState)(mu === vu), Pu = (0, Ob.h)(mu.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: qu,
        recentlyPlayedCustomLobbies: Eu
      } = (0, ob.useMemo)((() => function(bb, ub, hb, Bb) {
        var Ob;
        const Gb = bb => {
            const hb = (0, Ou.p)(bb),
              Bb = ub.find((ub => "custom" === ub.type ? ub.schematicId === hb : ub.gameNameWithVariation === bb));
            return Bb ? [...Bb.recentLobbies] : []
          },
          Ub = (0, ab.getRecentGameNameWithVariationLobbiesKey)(bb),
          Lb = null !== (Ob = Sb.j.getItem(Ub)) && void 0 !== Ob ? Ob : [],
          Yb = [...Gb(bb), ...Lb],
          Hb = [];
        for (const Sb of Yb)(0, wu.X)(Sb) && !Hb.includes(Sb) && Hb.push(Sb);
        let wb = Yb;
        if (hb) {
          const bb = Gb("classic_worlds"),
            ub = Yb.filter((ub => !bb.includes(ub)));
          wb = [...bb, ...ub]
        }
        const Zb = [],
          Xb = !1 === Bb ? [] : wb;
        for (const Sb of Xb)(0, wu.X)(Sb) || Zb.includes(Sb) || Zb.push(Sb);
        return {
          recentlyPlayedPublicLobbies: Hb,
          recentlyPlayedCustomLobbies: Zb
        }
      }(Bu.gameNameWithVariation, Eb, mu.showWorldsInsteadOfCustomLobbies, mu.canCreateCustomLobbies)), [Bu.gameNameWithVariation, Eb, mu.showWorldsInsteadOfCustomLobbies, mu.canCreateCustomLobbies]), [yu, Vu] = (0, ob.useState)(!0), [Fu, fu] = (0, ob.useState)([]), [ku, Tu] = (0, ob.useState)(null), [cu, Qu] = (0, ob.useState)("explore"), Ru = (0, ob.useRef)(!1), bh = (0, ob.useCallback)((bb => {
        (0, Ab.unstable_batchedUpdates)((() => {
          Cu(bb), su((ub => ({
            ...tu(bb, Mb),
            isFavourite: ub.isFavourite
          })))
        }))
      }), [Mb]);
      (0, ob.useEffect)((() => {
        null === Su.d.get("gameEntrySource") && (0, Su.h)("gameInformationPageDirect")
      }), []);
      const uh = (0, ob.useRef)(null);
      (0, ob.useEffect)((() => {
        const bb = bb => {
            uh.current = bb.target instanceof Element ? bb.target.closest("a, button") : null
          },
          ub = bb => {
            "Tab" === bb.key && (uh.current = null)
          };
        return document.addEventListener("pointerdown", bb, !0), document.addEventListener("keydown", ub, !0), () => {
          document.removeEventListener("pointerdown", bb, !0), document.removeEventListener("keydown", ub, !0)
        }
      }), []), (0, db.c)("Enter", (bb => {
        const ub = bb.target instanceof Element ? bb.target : null;
        if (bb.defaultPrevented || null !== ub && void 0 !== ub && ub.closest("input, textarea, select")) return;
        const hb = null === ub || void 0 === ub ? void 0 : ub.closest("a, button");
        hb && hb !== uh.current || (bb.preventDefault(), ah())
      })), (0, rb.c)(Qb.navigateToHomePage);
      const hh = qu.length > 0 || Eu.length > 0,
        Bh = !mu.useRejoinLastLobbyButton || 0 === qu.length,
        Oh = Du && null === mu.ownerSocialPreviewWithoutLocation,
        Gh = Pb.getPlayerName() === (null === Wu || void 0 === Wu || null === (ub = Wu.owner) || void 0 === ub ? void 0 : ub.name),
        Uh = null !== (hb = null === (Ub = mu.badges.find((bb => "event" === bb.type))) || void 0 === Ub ? void 0 : Ub.event) && void 0 !== hb ? hb : null,
        Lh = Bh ? wb.m : wb.e,
        Yh = (0, Jb.jsx)(Hb.d, {
          tooltipInner: (0, Jb.jsx)("div", {
            children: Mb("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Jb.jsx)(Lh, {
            className: "GameInformationButton",
            padDefaultFocus: Bh,
            showPress: !0,
            onClick: () => {
              ah()
            },
            children: (0, Jb.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Bh && (0, Jb.jsxs)(Jb.Fragment, {
                children: [(0, Jb.jsx)(Vb.e, {
                  name: "play"
                }), " "]
              }), Mb("homePage:quickPlay")]
            })
          })
        });
      (0, ob.useEffect)((() => {
        if (!Du || qb) return;
        let bb = !0;
        const ub = (0, Ou.p)(Bu.gameNameWithVariation);
        return zb.e.getGame(Pb, ub).then((ub => {
          bb && bh(ub)
        })).catch((ub => {
          console.error("Failed to get Custom Game information", ub), bb && (0, Qb.navigateToHomePage)()
        })), zb.e.getFavouriteGames(Pb).then((hb => {
          bb && su((bb => ({
            ...bb,
            isFavourite: hb.includes(ub)
          })))
        })).catch((ub => {
          console.error("Failed to get favourite games", ub), bb && eu(!0)
        })), () => {
          bb = !1
        }
      }), [Du, qb, Bu.gameNameWithVariation, bh, Pb]);
      const Sh = !Du && null === zu;

      function ah(bb) {
        (0, xu.g)(), fb((0, Kb.e)(Bu.gameNameWithVariation, bb))
      }(0, ob.useEffect)((() => {
        Sh && (0, Qb.navigateToHomePage)()
      }), [Sh]), (0, ob.useEffect)((() => {
        if (!1 === mu.canCreateCustomLobbies) return;
        let bb = !0;
        return null !== mu.showWorldsInsteadOfCustomLobbies && !1 === qb && (Vu(!0), zb.e.getFavouriteLobbies(Pb).then((bb => {
          Tu(bb)
        })), zb.e.getOpenCustomLobbies(Pb, {
          gameNameWithVariation: mu.showWorldsInsteadOfCustomLobbies ? "classic" : Bu.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === cu,
          onlyFavouriteLobbies: "favourite" === cu
        }).then((ub => {
          bb && (0, Ab.unstable_batchedUpdates)((() => {
            fu(ub), Vu(!1)
          }))
        })).catch((ub => {
          console.error("Failed to get open custom lobbies", ub), bb && Vu(!1)
        }))), () => {
          bb = !1
        }
      }), [qb, Bu, cu, mu.showWorldsInsteadOfCustomLobbies, mu.canCreateCustomLobbies, Pb]);
      const Hh = (0, ob.useCallback)((async bb => {
          try {
            if (!ku) return;
            ku.includes(bb) ? (zb.e.unfavouriteLobby(Pb, bb), Tu(ku.filter((ub => ub !== bb)))) : (zb.e.favouriteLobby(Pb, bb).catch((bb => {
              console.error("Failed to favourite lobby", bb)
            })), Tu([...ku, bb]))
          } catch (ub) {
            console.error("Failed to like lobby", ub)
          }
        }), [Pb, ku]),
        wh = (null === Wu || void 0 === Wu ? void 0 : Wu.schematicId) === (0, Ou.p)(bu.gameNameWithVariation) ? Wu : null,
        Zh = wh && (0, mb.v)(bu.gameNameWithVariation, (bb => Mb(bb)), wh);
      (0, Rb.e)(wh && (0, mb.r)(bu.gameNameWithVariation, wh));
      const Xh = Fb.featureFlags.canUseCustomLobbies && !0 === mu.canCreateCustomLobbies,
        ph = (0, Jb.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Jb.jsx)(yb, {
            gameNameWithVariation: Bu.gameNameWithVariation
          })
        });
      return (0, Jb.jsx)(Jb.Fragment, {
        children: (0, Jb.jsxs)("article", {
          className: Xb()("GameInformation", {
            GameInformationFadeIn: Iu,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (Zb = mu.countdownInformation) || void 0 === Zb ? void 0 : Zb.type)
          }),
          children: [Zh && (0, Jb.jsx)(Wb.c, {
            meta: Zh
          }), (0, Jb.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Jb.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Jb.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Jb.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Jb.jsx)("div", {
                  className: Xb()("GameInformationTopBackgroundImage", Lb.g),
                  style: (0, Lb.f)(Pu),
                  children: (0, Jb.jsx)(Lb.d, {
                    image: Pu
                  })
                })]
              }), (0, Jb.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Jb.jsx)(Au.e, {}), (0, Jb.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Jb.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Jb.jsxs)("div", {
                      className: Xb()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: Oh
                      }),
                      children: [mu.badges.map((bb => (0, Jb.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${bb.type}`,
                        children: (0, Jb.jsx)(Db.c, {
                          badge: bb
                        })
                      }, bb.type))), Du && (0, Jb.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Jb.jsx)(nb.c, {
                          text: (0, Bb.jb)({
                            type: "playerCrafted"
                          })
                        })
                      }), mu.category && (0, Jb.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Jb.jsx)(nb.c, {
                          text: [{
                            str: (0, Bb.mb)(mu.category).toUpperCase()
                          }]
                        })
                      }), null !== mu.ccu && (0, Jb.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Jb.jsx)(Vb.e, {
                          name: "user"
                        }), (0, wu._)(mu.ccu), " online"]
                      }), null !== mu.ownerSocialPreviewWithoutLocation && (0, Jb.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Jb.jsx)("span", {
                          children: "Made by"
                        }), (0, Jb.jsx)(vb.h, {
                          playerSocialPreview: {
                            ...mu.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), Oh && (0, Jb.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Jb.jsx)("span", {
                          children: "Made by"
                        }), (0, Jb.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== mu.favourites && (null !== mu.isFavourite || Du && !gu) && (0, Jb.jsx)(wb.u, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== Ru.current && (Ru.current = !0, null !== mu.isFavourite)) {
                              const bb = (0, Ou.p)(Bu.gameNameWithVariation);
                              let ub;
                              mu.isFavourite ? (ub = -1, zb.e.unfavouriteGame(Pb, bb).catch((bb => {
                                console.error("Failed to get unfavourite game", bb)
                              })).finally((() => {
                                Ru.current = !1
                              }))) : (ub = 1, zb.e.favouriteGame(Pb, bb).catch((bb => {
                                console.error("Failed to get favourite game", bb)
                              })).finally((() => {
                                Ru.current = !1
                              }))), su((bb => ({
                                ...bb,
                                isFavourite: !bb.isFavourite
                              }))), su((bb => ({
                                ...bb,
                                favourites: bb.favourites + ub
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (xb = mu.isFavourite) && void 0 !== xb && xb,
                        disabled: null === mu.isFavourite,
                        className: Xb()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === mu.isFavourite
                        })
                      }, null === mu.isFavourite ? "pending" : "known"), Du && !Oh && Fb.featureFlags.useSocialFeatures && !Gh && (0, Jb.jsx)(ru.c, {
                        targetType: "customGame",
                        targetId: (0, Ou.p)(Bu.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (Pb.playerHasRank("developer") || Pb.playerHasRank("admin") && Gh) && (0, Jb.jsxs)(wb.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          fb((0, Lu.k)((0, Uu.e)(Bu.gameNameWithVariation, !0)))
                        },
                        children: [(0, Jb.jsx)(Vb.e, {
                          name: "star-christmas"
                        }), " ", Mb("studio:viewInStudio")]
                      }), Du && Pb.playerHasRank("developer") && (0, Jb.jsxs)(wb.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, Zu.d)({
                            schematicId: (0, Ou.p)(Bu.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Jb.jsx)(Vb.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), Du && Pb.playerHasRank("developer") && (0, Jb.jsxs)(wb.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          uu.NotificationProvider.showCustomPopup({
                            body: () => (0, Jb.jsx)(ou, {
                              schematicId: (0, Ou.p)(Bu.gameNameWithVariation),
                              gameName: mu.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Jb.jsx)(Vb.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (gb = mu.countdownInformation) || void 0 === gb ? void 0 : gb.type) && (0, Jb.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Jb.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Jb.jsx)(jb.e, {
                            toTime: mu.countdownInformation.countdownToTime
                          })]
                        }), (0, Jb.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: mu.countdownInformation.previewText
                        })]
                      })]
                    }, Oh ? "pending" : "shown"), (0, Jb.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Jb.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Jb.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [mu.title, " ", mu.variationTitle && (null === (ib = Hu.e[Bu.gameNameWithVariation]) || void 0 === ib ? void 0 : ib.variationThumbnailUseBigRatio) && (0, Jb.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: mu.variationTitle
                          })]
                        })
                      }), mu.listedVariations && mu.listedVariations.length > 0 && (0, Jb.jsx)("div", {
                        className: Xb()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (tb = Hu.e[Bu.gameNameWithVariation]) || void 0 === tb ? void 0 : tb.variationThumbnailUseBigRatio
                        }),
                        children: mu.listedVariations.map((bb => {
                          var ub, hb;
                          return (0, Jb.jsxs)(Mu, {
                            variation: bb,
                            isSelected: Bu.gameNameWithVariation === bb,
                            children: [null !== Ib && (0, Jb.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Jb.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Jb.jsx)(Vb.e, {
                                  name: "user"
                                }), " ", (0, wu._)(null !== (ub = Ib[bb]) && void 0 !== ub ? ub : 0)]
                              })
                            }), (0, Jb.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: Mb(null !== (hb = Hu.e[bb].variationTitle) && void 0 !== hb ? hb : Hu.e[bb].title)
                            }), (0, Jb.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, ab.filterBadges)(Hu.e[bb].badges).map((bb => (0, Jb.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + bb.type,
                                children: (0, Jb.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Jb.jsx)(Db.c, {
                                    badge: bb
                                  })
                                })
                              }, bb.type)))
                            })]
                          }, bb)
                        }))
                      })]
                    }), mu.description && (0, Jb.jsx)("p", {
                      className: "GameInformationDescription",
                      children: mu.description
                    })]
                  }), (0, Jb.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Jb.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Bh && (0, Jb.jsx)(Hb.d, {
                        tooltipInner: (0, Jb.jsx)("div", {
                          children: Mb("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Jb.jsx)(wb.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            ah(qu[0])
                          },
                          children: (0, Jb.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Jb.jsx)(Vb.e, {
                              name: "play"
                            }), " ", Mb("homePage:rejoinLobbyNumber", {
                              number: qu[0]
                            })]
                          })
                        })
                      }), Bh && Yh]
                    }), (0, Jb.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Bh && Yh, (0, Jb.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Jb.jsx)(Vb.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Jb.jsx)(pb.b, {
                          className: "JoinLobbyInput",
                          placeholderText: Mb("homePage:lobbyName"),
                          maxLength: wu.Z,
                          domRef: Ku,
                          onValueChange: bb => {
                            bb = (0, wu.Jb)(bb), pu(bb)
                          },
                          onEnter: () => {
                            0 === Xu.length ? ah(qu[0]) : ah(Xu)
                          }
                        }), (0, Jb.jsx)(wb.e, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === Xu.length ? ah(qu[0]) : ah(Xu)
                          },
                          children: Mb("general:join")
                        })]
                      })]
                    }), (0, Jb.jsxs)("section", {
                      className: Xb()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !hh
                      }),
                      children: [(0, Jb.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Jb.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Jb.jsx)(Vb.e, {
                            name: "clock-rotate-left"
                          }), hh && (0, Jb.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: Mb("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Jb.jsx)(ju.c, {
                        lobbyGroups: [qu, Eu],
                        onLobbyClick: bb => {
                          ah(bb)
                        },
                        keyPrefix: Bu.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== Uh && (0, Jb.jsx)(sb, {
                eventName: Uh
              })]
            }), Xh && (0, Jb.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Jb.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Jb.jsxs)("div", {
                  className: Xb()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === mu.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === mu.showWorldsInsteadOfCustomLobbies && (0, Jb.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Jb.jsx)(Vb.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Jb.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Jb.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Mb("game:worlds")]
                    })]
                  }), !1 === mu.showWorldsInsteadOfCustomLobbies && (0, Jb.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Jb.jsx)(Vb.e, {
                      name: "joystick"
                    }), (0, Jb.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Jb.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Mb("homePage:customLobbies")]
                    })]
                  }), (0, Jb.jsx)(wb.O, {
                    onClick: () => {
                      Qu("explore")
                    },
                    active: "explore" === cu,
                    children: Mb("general:explore")
                  }), (0, Jb.jsx)(wb.O, {
                    onClick: () => {
                      Qu("favourite")
                    },
                    active: "favourite" === cu,
                    children: Mb("homePage:favouriteLobbies")
                  }), (0, Jb.jsx)(wb.O, {
                    onClick: () => {
                      Qu("owned")
                    },
                    active: "owned" === cu,
                    children: Mb("homePage:ownedLobbies")
                  })]
                }), (0, Jb.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Jb.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Jb.jsx)(lu.b, {
                      label: "Create",
                      onClick: () => {
                        uu.NotificationProvider.showCustomPopup({
                          body: bb => (0, Jb.jsx)(hu.CreateCustomLobby, {
                            gameNameWithVariation: Bu.gameNameWithVariation,
                            close: bb
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === yu && (0, Jb.jsx)(lu.d, {}), !1 === yu && (0, Jb.jsx)(du, {
                      customLobbies: Fu,
                      favouriteLobbies: ku,
                      toggleLikeLobby: Hh,
                      showReport: Fb.featureFlags.useSocialFeatures && "owned" !== cu
                    })]
                  }), ph]
                })]
              })
            })]
          }), !Xh && ph]
        })
      })
    }

    function Mu(bb) {
      let {
        variation: ub,
        isSelected: hb,
        children: Bb
      } = bb;
      const Yb = Hu.e[ub],
        ab = (0, Gb.l)(ub, (0, Gb.o)(Yb)),
        Hb = (0, Ob.h)(ab),
        wb = (0, Ub.e)([(0, Gb.k)(ub, (0, Gb.e)(Yb))]);
      return (0, Jb.jsxs)(Qb.LinkPreserveSearch, {
        to: (0, mb.r)(ub),
        replace: !0,
        className: Xb()("GameInformationVariation", Lb.g, {
          SelectedGameInformationVariation: hb
        }),
        onClick: bb => {
          if (!(0, bu.c)(bb)) return;
          const hb = (0, lb.i)(ub);
          Sb.j.setItem(hb, ub)
        },
        onMouseEnter: wb.start,
        onMouseLeave: wb.cancel,
        onFocus: wb.start,
        onBlur: wb.cancel,
        style: (0, Lb.f)(Hb),
        children: [(0, Jb.jsx)(Lb.d, {
          image: Hb
        }), Bb]
      })
    }
  },
  6235: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ab
    });
    var Bb = hb(49),
      Ob = hb(1357),
      Gb = hb(1398),
      Ub = hb(3278),
      Lb = hb(1029),
      Yb = hb(1242),
      Sb = hb(1260),
      ab = hb(966),
      Hb = hb(958),
      wb = hb.n(Hb),
      Zb = hb(1007);

    function Xb(bb) {
      let {
        info: ub,
        className: hb
      } = bb;
      return (0, Zb.jsxs)("div", {
        className: wb()("GameApprovalInfoDetails", hb),
        children: [(0, Zb.jsxs)("div", {
          className: wb()("GameApprovalInfoSummary", ub.overallPassed ? "Passed" : "Failed"),
          children: [(0, Zb.jsx)(ab.e, {
            name: ub.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, Zb.jsx)("span", {
            children: ub.summary
          })]
        }), ub.rows.length > 0 && (0, Zb.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: ub.rows.map((bb => (0, Zb.jsxs)("div", {
            className: wb()("GameApprovalInfoRow", bb.passed ? "Passed" : "Failed"),
            children: [(0, Zb.jsx)(ab.e, {
              name: bb.passed ? "check" : "xmark"
            }), (0, Zb.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, Zb.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: bb.label
              }), (0, Zb.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: bb.valueText
              })]
            })]
          }, bb.label)))
        })]
      })
    }
    var pb = hb(1095),
      ob = hb(1249);

    function Ab(bb) {
      ob.NotificationProvider.showCustomPopup({
        body: () => (0, Zb.jsx)(lb, {
          ...bb
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function lb(bb) {
      let {
        schematicId: ub,
        canOverride: hb,
        onApprovalChanged: Hb
      } = bb;
      const {
        t: wb
      } = (0, pb.K)(), {
        userContext: ob
      } = (0, Lb.d)(), Ab = (0, Ub.d)(), [lb, Kb] = (0, Bb.useState)(null), [Wb, Cb] = (0, Bb.useState)(null), [db, rb] = (0, Bb.useState)(!1), jb = (0, Bb.useCallback)((() => {
        Cb(null), Gb.e.getGameApprovalInfo(ob, ub).then((bb => {
          Ab.current && Kb(bb)
        })).catch((bb => {
          console.error("Failed to get game approval info", bb), Ab.current && Cb(wb("studio:approvalLoadFailed"))
        }))
      }), [ob, ub, Ab, wb]);
      (0, Bb.useEffect)((() => {
        jb()
      }), [jb]);
      const nb = bb => {
        db || (rb(!0), Gb.e.setGameApproval(ob, ub, bb).then((() => {
          null === Hb || void 0 === Hb || Hb(), Ab.current && jb()
        })).catch((bb => {
          console.error("Failed to set game approval", bb)
        })).finally((() => {
          Ab.current && rb(!1)
        })))
      };
      return (0, Zb.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, Zb.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: wb("studio:approvalTitle")
        }), !lb && !Wb && (0, Zb.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, Zb.jsx)(Yb.c, {})
        }), Wb && (0, Zb.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: Wb
        }), lb && (0, Zb.jsxs)(Zb.Fragment, {
          children: [(0, Zb.jsx)(Xb, {
            info: lb
          }), hb && (0, Zb.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== lb.manualOverride && (0, Zb.jsx)(Sb.d, {
              tooltipInner: (0, Zb.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, Zb.jsxs)(Ob.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  nb(!0)
                },
                disabled: db,
                children: [(0, Zb.jsx)(ab.e, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== lb.manualOverride && (0, Zb.jsx)(Sb.d, {
              tooltipInner: (0, Zb.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, Zb.jsxs)(Ob.H, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  nb(!1)
                },
                disabled: db,
                children: [(0, Zb.jsx)(ab.e, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== lb.manualOverride && (0, Zb.jsx)(Sb.d, {
              tooltipInner: (0, Zb.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, Zb.jsxs)(Ob.e, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  nb(null)
                },
                disabled: db,
                children: [(0, Zb.jsx)(ab.e, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  9131: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(49),
      Ob = hb(3364);

    function Gb() {
      const [bb, ub] = (0, Bb.useState)(!1);
      return (0, Bb.useLayoutEffect)((() => {
        let bb = !0;
        return (0, Ob.e)().then((() => {
          bb && ub(!0)
        })), () => {
          bb = !1
        }
      }), []), bb
    }
  },
  8642: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb = hb(1227),
      Ob = hb(1124),
      Gb = hb(588);

    function Ub(bb) {
      return bb = function(bb, ub) {
        var hb;
        const Bb = new URLSearchParams(ub),
          Ob = Bb.get("lobby"),
          Gb = Bb.get("vm"),
          Ub = null !== (hb = Ob) && void 0 !== hb ? hb : bb.lobbyName,
          Lb = null !== Gb && void 0 !== Gb ? Gb : bb.directJoinVmUrl;
        if (Ub === bb.lobbyName && Lb === bb.directJoinVmUrl) return bb;
        return {
          ...bb,
          lobbyName: Ub,
          directJoinVmUrl: Lb
        }
      }(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), bb = function(bb) {
        if ((0, Gb.J)(bb.directJoinVmUrl)) return bb;
        const ub = (0, Ob.jb)(bb.directJoinVmUrl);
        null === ub && (bb.directJoinVmUrl = void 0);
        return bb
      }(bb = function(bb) {
        if ((0, Gb.J)(bb.gameNameWithVariation)) return bb;
        return bb.gameNameWithVariation = (0, Bb.o)(bb.gameNameWithVariation), bb
      }(bb))
    }
  },
  8633: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb,
      g: () => Ob
    });
    let Bb = !1;

    function Ob() {
      Bb = !0
    }

    function Gb() {
      return Bb
    }
  },
  35987: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      e: () => Bb
    });
    const Bb = "skyblockSkills",
      Ob = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);