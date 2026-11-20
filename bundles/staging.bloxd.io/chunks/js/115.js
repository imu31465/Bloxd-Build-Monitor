export const id = 115;
export const ids = [115, 389];
export const modules = {
  35989: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Pc
    });
    var kb = sb(334),
      Wb = sb(3294),
      ab = sb(3335),
      Tb = sb(3333),
      Ub = sb(3329),
      Ib = sb(1197),
      Hb = sb(37),
      fb = sb(1704),
      Mb = sb(1341),
      Xb = sb(1431),
      nb = sb(1033),
      mb = sb.n(nb),
      lb = sb(1664),
      Qb = sb(64),
      eb = sb(89),
      Cb = sb(2271),
      Nb = sb(1316),
      Vb = sb(1603),
      Lb = sb(1117),
      ub = sb(3184),
      Yb = sb(4293),
      hb = sb(3272),
      Jb = sb(3281),
      gb = sb(1839),
      Bb = sb(3290),
      tb = sb(1713),
      yb = sb(1474),
      Pb = sb(2084),
      Db = sb(1327),
      Eb = sb(2441),
      ib = sb(4728),
      Ob = sb(1087);
    const Gb = 15e3,
      Kb = 2500;

    function Zb(bb) {
      var cb;
      let {
        eventName: sb
      } = bb;
      const {
        t: kb
      } = (0, Ib.E)(), Wb = tb.g[sb], [ab, Tb] = (0, Qb.useState)((() => Date.now() >= Wb.endsAt.getTime())), [Ub, Hb] = (0, Qb.useState)("overall"), fb = function(bb, cb) {
        const {
          userContext: sb,
          isUserContextUpdating: kb
        } = (0, Lb.c)(), Wb = `${bb}:${cb}`, [ab, Tb] = (0, Qb.useState)({
          requestKey: Wb,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, Qb.useEffect)((() => {
          if (kb) return;
          let ab, Ub = !1;
          const Ib = async () => {
            if ("visible" === document.visibilityState) try {
              const kb = await yb.b.getGameEventLeaderboard(sb, {
                event: bb,
                scope: cb
              });
              Ub || Tb({
                requestKey: Wb,
                leaderboard: {
                  status: "loaded",
                  leaderboard: kb
                }
              })
            } catch {
              Ub || Tb((bb => bb.requestKey === Wb && "loaded" === bb.leaderboard.status ? bb : {
                requestKey: Wb,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            Ub || (ab = setTimeout(Ib, Gb))
          };
          return Ib(), () => {
            Ub = !0, clearTimeout(ab)
          }
        }), [bb, cb, Wb, sb, kb]), ab.requestKey === Wb ? ab.leaderboard : {
          status: "loading"
        }
      }(sb, Ub), Mb = function(bb) {
        const cb = (0, Qb.useRef)(null),
          sb = (0, Qb.useRef)(0),
          kb = (0, Qb.useRef)(),
          [Wb, ab] = (0, Qb.useState)({});
        return (0, Qb.useEffect)((() => {
          const Wb = null === bb || void 0 === bb ? void 0 : bb.entries;
          if (!Wb) return;
          const Tb = new Map(Wb.map((bb => [bb.player.name, bb.value]))),
            Ub = cb.current;
          if (cb.current = Tb, null === Ub) return;
          const Ib = {};
          for (const [bb, cb] of Tb) {
            const kb = Ub.get(bb);
            void 0 !== kb && cb > kb && (Ib[bb] = {
              amount: cb - kb,
              key: sb.current++
            })
          }
          0 !== Object.keys(Ib).length && (ab(Ib), clearTimeout(kb.current), kb.current = setTimeout((() => {
            ab({})
          }), Kb))
        }), [bb]), (0, Qb.useEffect)((() => () => {
          clearTimeout(kb.current)
        }), []), Wb
      }("loaded" === fb.status ? fb.leaderboard : null), Xb = function(bb) {
        const [cb, sb] = (0, Qb.useState)(null), kb = "loaded" === bb.status ? bb.leaderboard.goalProgress : void 0;
        return (0, Qb.useEffect)((() => {
          kb && sb(kb)
        }), [kb]), cb
      }(fb), nb = Pb.h[`profileEffect_${Wb.prizePack}`];
      if (ab) return null;
      const lb = "loaded" === fb.status ? fb.leaderboard : null,
        eb = null !== (cb = null === lb || void 0 === lb ? void 0 : lb.entries) && void 0 !== cb ? cb : null,
        Cb = null !== lb && void 0 !== lb && lb.own && null !== eb && !eb.some((bb => bb.isOwn)) ? lb.own : null;
      return (0, Ob.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Ob.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Ob.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Ob.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Ob.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Ob.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), kb("gameEvents:live")]
              }), (0, Ob.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [kb("gameEvents:endsIn"), (0, Ob.jsx)(hb.b, {
                  toTime: Wb.endsAt,
                  onReachEndOfCountdown: () => {
                    Tb(!0)
                  }
                })]
              })]
            }), (0, Ob.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: kb(Wb.titleKey)
            }), (0, Ob.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Ob.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [nb && (0, Ob.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Ob.jsx)(nb, {})
                }), (0, Ob.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Ob.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: kb("gameEvents:prize")
                  }), (0, Ob.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: kb(Wb.prizeNameKey)
                  })]
                })]
              }), (0, Ob.jsx)(zb, {
                event: Wb,
                progress: Xb
              })]
            })]
          }), (0, Ob.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Ob.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Ob.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: kb(Wb.leaderboard.titleKey)
              }), (0, Ob.jsx)(ib.e, {
                ariaLabel: kb("gameEvents:leaderboardScope"),
                options: tb.d.map((bb => ({
                  value: bb,
                  label: kb(`gameEvents:${bb}Scope`)
                }))),
                value: Ub,
                onChange: Hb
              })]
            }), "loading" === fb.status && (0, Ob.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Ob.jsx)(Db.d, {})
            }), ("unavailable" === fb.status || "loaded" === fb.status && null === eb) && (0, Ob.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: kb("gameEvents:leaderboardUnavailable")
            }), null !== eb && 0 === eb.length && (0, Ob.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: kb("friends" === Ub ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== eb && eb.length > 0 && (0, Ob.jsx)("ol", {
              className: "GameEventPanelRows",
              children: eb.map((bb => {
                const cb = Mb[bb.player.name];
                return (0, Ob.jsxs)("li", {
                  className: mb()("GameEventPanelRow", {
                    GameEventPanelRowOwn: bb.isOwn,
                    GameEventPanelRowTop: bb.rank <= 3
                  }),
                  children: [(0, Ob.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", bb.rank]
                  }), (0, Ob.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Ob.jsx)(Eb.h, {
                      playerSocialPreview: {
                        ...bb.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== cb && (0, Ob.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", cb.amount.toLocaleString()]
                  }, cb.key), (0, Ob.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: bb.value.toLocaleString()
                  })]
                }, bb.player.name)
              }))
            }), Cb && (0, Ob.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Ob.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", Cb.rank.toLocaleString()]
              }), (0, Ob.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: kb("gameEvents:yourPlace")
              }), (0, Ob.jsx)("span", {
                className: "GameEventPanelScore",
                children: Cb.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function zb(bb) {
      let {
        event: cb,
        progress: sb
      } = bb;
      const {
        t: kb
      } = (0, Ib.E)(), Wb = null !== sb && cb.prizeGoals.some(((bb, cb) => sb[cb] >= bb.target));
      return (0, Ob.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Ob.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: kb(Wb ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Ob.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: cb.prizeGoals.map(((bb, cb) => {
            const Wb = null === sb ? null : Math.min(sb[cb], bb.target);
            return (0, Ob.jsxs)(Qb.Fragment, {
              children: [cb > 0 && (0, Ob.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: kb("gameEvents:goalsOr")
              }), (0, Ob.jsxs)("div", {
                className: mb()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Wb === bb.target
                }),
                children: [(0, Ob.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: kb(bb.labelKey)
                }), (0, Ob.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Ob.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Wb && void 0 !== Wb ? Wb : 0) / bb.target * 100 + "%"
                    }
                  }), null !== Wb && (0, Ob.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Wb.toLocaleString(), " / ", bb.target.toLocaleString()]
                  })]
                })]
              })]
            }, bb.board)
          }))
        })]
      })
    }
    var qb = sb(1534),
      db = sb(1583),
      Ab = sb(1020),
      wb = sb(734),
      rb = sb(3263);

    function ob(bb) {
      let {
        gameNameWithVariation: cb
      } = bb;
      const sb = (0, qb.D)(cb),
        [kb, Wb] = (0, Qb.useState)(null);
      if ((0, Qb.useEffect)((() => {
          if (!sb) return;
          let bb = !0;
          return (0, db.k)(sb).then((cb => {
            bb && Wb(cb)
          })).catch((bb => {
            console.error(`Failed to load the page copy for ${sb.name}`, bb)
          })), () => {
            bb = !1
          }
        }), [sb]), !sb || !kb || kb.name !== sb.name) return null;
      const ab = (0, db.h)(kb),
        Tb = new Set((0, Ab.b)((0, wb.f)()).map((bb => (0, qb.u)(bb)))),
        Ub = kb.similarGames.filter((bb => Tb.has((0, qb.u)(bb))));
      return (0, Ob.jsx)("div", {
        className: "GamePageContent",
        children: (0, Ob.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Ob.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Ob.jsx)("h2", {
              children: ab.whatIs
            }), kb.whatIs.map((bb => (0, Ob.jsx)("p", {
              children: bb
            }, bb)))]
          }), (0, Ob.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Ob.jsx)("h2", {
              children: ab.howToPlay
            }), kb.howToPlay.map((bb => (0, Ob.jsx)("p", {
              children: bb
            }, bb)))]
          }), (0, Ob.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Ob.jsx)("h2", {
              children: ab.features
            }), (0, Ob.jsx)("ul", {
              children: kb.features.map((bb => (0, Ob.jsx)("li", {
                children: bb
              }, bb)))
            })]
          }), (0, Ob.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Ob.jsx)("h2", {
              children: ab.tips
            }), (0, Ob.jsx)("ul", {
              children: kb.tips.map((bb => (0, Ob.jsx)("li", {
                children: bb
              }, bb)))
            })]
          }), (0, Ob.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Ob.jsx)("h2", {
              children: ab.faq
            }), kb.faq.map((bb => {
              let {
                question: cb,
                answer: sb
              } = bb;
              return (0, Ob.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Ob.jsx)("h3", {
                  children: cb
                }), (0, Ob.jsx)("p", {
                  children: sb
                })]
              }, cb)
            }))]
          }), Ub.length > 0 && (0, Ob.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Ob.jsx)("h2", {
              children: ab.similarGames
            }), (0, Ob.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: Ub.map((bb => (0, Ob.jsx)("li", {
                children: (0, Ob.jsx)(rb.h, {
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
    var Sb = sb(1039),
      Rb = sb(117),
      vb = sb(1126),
      Fb = sb(8967),
      xb = sb(1641),
      jb = sb(1511),
      pb = sb(1495),
      bc = sb(1599),
      cc = sb(1438),
      sc = sb(1332),
      kc = sb(35998),
      Wc = sb(1246),
      ac = sb(1008),
      Tc = sb(344),
      Uc = sb(1015),
      Ic = sb(1528),
      Hc = sb(8522),
      fc = sb(19),
      Mc = sb(2396),
      Xc = sb(760),
      nc = sb(1235),
      mc = sb(6159);

    function lc(bb) {
      let {
        preview: cb,
        isBroken: sb
      } = bb;
      const kb = null === cb ? null : (0, ab.f)(cb, "small"),
        Tb = (0, Wb.f)(null !== kb && void 0 !== kb ? kb : ab.o);
      return null === cb ? (0, Ob.jsx)("div", {
        className: mb()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: sb
        }),
        children: (0, Ob.jsx)(Sb.b, {
          name: sb ? "triangle-exclamation" : "star"
        })
      }) : (0, Ob.jsx)("div", {
        className: mb()("FeaturedGamesPopupSlotThumbnail", Ub.h),
        style: (0, Ub.e)(Tb),
        role: "img",
        "aria-label": cb.name,
        children: (0, Ob.jsx)(Ub.c, {
          image: Tb
        })
      })
    }

    function Qc(bb) {
      let {
        schematicId: cb,
        gameName: sb
      } = bb;
      const {
        userContext: Wb
      } = (0, Lb.c)(), ab = (0, Jb.e)(), [Tb, Ub] = (0, Qb.useState)(null), [Ib, Hb] = (0, Qb.useState)(null), [fb, Mb] = (0, Qb.useState)(!1), nb = (0, Qb.useCallback)((() => {
        Hb(null), yb.b.getFeaturedGames(Wb).then((bb => {
          ab.current && Ub(bb.slots)
        })).catch((bb => {
          console.error("Failed to get featured games", bb), ab.current && Hb("Failed to load featured games")
        }))
      }), [Wb, ab]);
      (0, Qb.useEffect)((() => {
        nb()
      }), [nb]);
      const mb = (bb, cb) => {
        fb || (Mb(!0), yb.b.setFeaturedGame(Wb, bb, cb).then((() => {
          ab.current && nb()
        })).catch((bb => {
          console.error("Failed to set featured game", bb), ab.current && Hb("Failed to update the featured slot")
        })).finally((() => {
          ab.current && Mb(!1)
        })))
      };
      return (0, Ob.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Ob.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !Tb && !Ib && (0, Ob.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Ob.jsx)(Db.d, {})
        }), Ib && (0, Ob.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: Ib
        }), Tb && (0, Ob.jsxs)(Ob.Fragment, {
          children: [(0, Ob.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: Tb.map((bb => {
              const sb = bb.schematicId === cb,
                Wb = null === bb.schematicId,
                {
                  categoryGroup: ab
                } = kb.O[bb.slotId];
              return (0, Ob.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Ob.jsx)(lc, {
                  preview: bb.preview,
                  isBroken: !Wb
                }), (0, Ob.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Ob.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, kb.rb)(ab), " \xb7 position", " ", (0, kb.R)(bb.slotId, kb.Ub) + 1, " of", " ", (0, kb.Sb)(ab, kb.Ub)]
                  }), Wb && (0, Ob.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Wb && null !== bb.preview && (0, Ob.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: bb.preview.name
                  }), !Wb && null === bb.preview && (0, Ob.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Ob.jsx)(Sb.b, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Ob.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Wb && (0, Ob.jsxs)(Xb.p, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      mb(bb.slotId, cb)
                    },
                    disabled: fb,
                    children: [(0, Ob.jsx)(Sb.b, {
                      name: "star"
                    }), " Feature here"]
                  }), !Wb && !sb && (0, Ob.jsxs)(Xb.M, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      mb(bb.slotId, cb)
                    },
                    disabled: fb,
                    children: [(0, Ob.jsx)(Sb.b, {
                      name: "star"
                    }), " Replace"]
                  }), !Wb && (0, Ob.jsxs)(Xb.G, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      mb(bb.slotId, null)
                    },
                    disabled: fb,
                    children: [(0, Ob.jsx)(Sb.b, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, bb.slotId)
            }))
          }), (0, Ob.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var ec = sb(4404),
      Cc = sb(4335),
      Nc = sb(4337),
      Vc = sb(4353),
      Lc = sb(4311),
      uc = sb(3367),
      Yc = sb(8514),
      hc = sb(241);
    const Jc = {
      skyblock: [sb(36039).c]
    };
    var gc = sb(628);
    const Bc = {
      listedVariations: null,
      backgroundImage: ab.o,
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

    function tc(bb, cb) {
      const sb = Xc.d[bb.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, ab.f)(bb, "large"),
        badges: [],
        category: bb.gameCategory,
        title: void 0 !== (null === sb || void 0 === sb ? void 0 : sb.title) ? cb(sb.title) : bb.name,
        variationTitle: null,
        description: void 0 !== (null === sb || void 0 === sb ? void 0 : sb.description) ? cb(sb.description) : bb.description,
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

    function yc(bb) {
      var cb, sb, kb;
      return null !== (cb = null !== (sb = (0, hc.j)() ? function(bb) {
        for (const [cb, sb] of Object.entries(Jc)) {
          const kb = [cb, ...sb.map((bb => (0, Tc.Ub)(cb, bb)))];
          if (kb.includes(bb)) return kb
        }
        return null
      }(bb) : null) && void 0 !== sb ? sb : null === (kb = Xc.b[bb]) || void 0 === kb ? void 0 : kb.listedVariations) && void 0 !== cb ? cb : null
    }

    function Pc() {
      const {
        gameNameWithVariation: bb
      } = (0, jb.D)();
      if ((0, Qb.useEffect)(uc.u, []), bb && (0, Wc.u)(bb)) return (0, Ob.jsx)(Dc, {
        urlId: bb
      }, bb);
      const cb = bb && (0, ac.k)(bb) ? bb : "firstParty";
      return (0, Ob.jsx)(Ec, {}, cb)
    }

    function Dc(bb) {
      let {
        urlId: cb
      } = bb;
      const {
        userContext: sb,
        isUserContextUpdating: kb
      } = (0, Lb.c)(), Wb = (0, Qb.useMemo)((() => (0, xb.g)(cb)), [cb]);
      (0, Qb.useMemo)((() => {
        if (null === Wb) return;
        const bb = vb.userContextManager.peekCurrentUserContext();
        (null !== bb ? yb.b.getGame(bb, Wb.schematicId) : vb.userContextManager.getCurrentUserContext().then((bb => yb.b.getGame(bb, Wb.schematicId)))).catch((bb => {
          console.error(`Failed to get the custom game ${Wb.schematicId}`, bb), (0, xb.f)(cb)
        }))
      }), [Wb, cb]);
      const [ab, Tb] = (0, Qb.useState)(null), Ub = (0, Fb.b)();
      (0, Qb.useEffect)((() => {
        if (null !== Wb || kb) return;
        let bb = !0;
        return yb.b.getGameByUrlId(sb, cb).then((sb => {
          bb && Tb({
            urlId: cb,
            game: sb
          })
        })).catch((sb => {
          console.error(`Failed to find the custom game with urlId ${cb}`, sb), bb && (0, pb.navigateToHomePage)()
        })), () => {
          bb = !1
        }
      }), [cb, Wb, kb, sb]);
      const Ib = null !== Wb && void 0 !== Wb ? Wb : (null === ab || void 0 === ab ? void 0 : ab.urlId) === cb ? ab.game : null;
      return null === Ib ? (0, Ob.jsx)(Db.d, {}) : Ub ? (0, Ob.jsx)(Ec, {
        gameNameWithVariation: (0, ac.x)(Ib.schematicId),
        knownCustomGame: Ib
      }, Ib.schematicId) : null
    }

    function Ec(bb) {
      var cb, sb, Tb, nb, tb, Pb, Db, ib;
      let {
        gameNameWithVariation: Gb,
        knownCustomGame: Kb = null
      } = bb;
      const {
        t: zb
      } = (0, Ib.E)();
      (0, Mc.l)();
      const db = (0, Mc.p)(),
        {
          userContext: Ab,
          isUserContextUpdating: wb
        } = (0, Lb.c)(),
        rb = (0, Lc.f)(),
        vb = (0, pb.useNavigatePreserveSearch)(),
        Fb = (0, jb.D)(),
        xb = (0, Qb.useMemo)((() => Gb ? {
          gameNameWithVariation: Gb
        } : Fb), [Gb, Fb]),
        cc = (0, Hc.d)(xb),
        Wc = (0, Qb.useMemo)((() => {
          const bb = function(bb) {
            var cb, sb;
            const kb = yc(bb);
            if (!kb || 0 === kb.length || kb.includes(bb)) return bb;
            const Wb = Hb.h.getItem((0, Cb.k)(bb));
            if (Wb && kb.includes(Wb)) return Wb;
            return null !== (cb = null === (sb = Xc.b[bb]) || void 0 === sb ? void 0 : sb.defaultListedVariation) && void 0 !== cb ? cb : kb[0]
          }(cc.gameNameWithVariation);
          return bb === cc.gameNameWithVariation ? cc : {
            ...cc,
            gameNameWithVariation: bb
          }
        }), [cc]);
      (0, Qb.useEffect)((() => {
        const bb = cc.gameNameWithVariation;
        Wc.gameNameWithVariation !== bb && bb !== (0, Tc.Wb)(bb) && vb((0, qb.v)(Wc.gameNameWithVariation), {
          replace: !0
        })
      }), [Wc.gameNameWithVariation, cc.gameNameWithVariation, vb]);
      const lc = (0, Jb.e)(),
        [uc, hc] = (0, Qb.useState)(""),
        Jc = Qb.useRef(null),
        [Pc, Dc] = (0, Qb.useState)(),
        Ec = (0, ac.k)(Wc.gameNameWithVariation),
        Oc = (0, Qb.useMemo)((() => Ec ? null : function(bb, cb, sb) {
          var kb, Wb;
          const Tb = Xc.b[bb];
          return (0, gc.L)(Tb) ? null : {
            listedVariations: yc(bb),
            backgroundImage: (0, ab.j)(bb, (0, ab.d)(Tb)),
            badges: (0, fb.filterBadges)(Tb.badges),
            category: Tb.type,
            title: sb(Tb.title),
            variationTitle: Tb.variationTitle ? sb(Tb.variationTitle) : null,
            description: sb(Tb.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== cb ? null !== (kb = cb[bb]) && void 0 !== kb ? kb : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: Tb.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: Tb.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (Wb = Tb.canCreateCustomLobbies) || void 0 === Wb || Wb,
            countdownInformation: (0, Cb.h)(bb)
          }
        }(Wc.gameNameWithVariation, db, zb)), [Ec, Wc.gameNameWithVariation, db, zb]),
        [Gc, Kc] = (0, Qb.useState)(!1),
        [Zc, zc] = (0, Qb.useState)((() => Kb ? tc(Kb, zb) : Bc)),
        qc = null !== Oc && void 0 !== Oc ? Oc : Zc,
        [dc] = (0, Qb.useState)(qc === Bc),
        Ac = (0, Wb.f)(qc.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: wc,
          recentlyPlayedCustomLobbies: rc
        } = (0, Qb.useMemo)((() => function(bb, cb, sb, kb) {
          var Wb;
          const ab = bb => {
              const sb = (0, ac.s)(bb),
                kb = cb.find((cb => "custom" === cb.type ? cb.schematicId === sb : cb.gameNameWithVariation === bb));
              return kb ? [...kb.recentLobbies] : []
            },
            Tb = (0, fb.getRecentGameNameWithVariationLobbiesKey)(bb),
            Ub = null !== (Wb = Hb.h.getItem(Tb)) && void 0 !== Wb ? Wb : [],
            Ib = [...ab(bb), ...Ub],
            Mb = [];
          for (const Hb of Ib)(0, nc.F)(Hb) && !Mb.includes(Hb) && Mb.push(Hb);
          let Xb = Ib;
          if (sb) {
            const bb = ab("classic_worlds"),
              cb = Ib.filter((cb => !bb.includes(cb)));
            Xb = [...bb, ...cb]
          }
          const nb = [],
            mb = !1 === kb ? [] : Xb;
          for (const Hb of mb)(0, nc.F)(Hb) || nb.includes(Hb) || nb.push(Hb);
          return {
            recentlyPlayedPublicLobbies: Mb,
            recentlyPlayedCustomLobbies: nb
          }
        }(Wc.gameNameWithVariation, rb, qc.showWorldsInsteadOfCustomLobbies, qc.canCreateCustomLobbies)), [Wc.gameNameWithVariation, rb, qc.showWorldsInsteadOfCustomLobbies, qc.canCreateCustomLobbies]),
        [oc, Sc] = (0, Qb.useState)(!0),
        [Rc, vc] = (0, Qb.useState)([]),
        [Fc, xc] = (0, Qb.useState)(null),
        [jc, pc] = (0, Qb.useState)("explore"),
        bs = (0, Qb.useRef)(!1),
        cs = (0, Qb.useCallback)((bb => {
          (0, eb.unstable_batchedUpdates)((() => {
            Dc(bb), zc((cb => ({
              ...tc(bb, zb),
              isFavourite: cb.isFavourite
            })))
          }))
        }), [zb]);
      (0, Qb.useEffect)((() => {
        null === fc.d.get("gameEntrySource") && (0, fc.l)("gameInformationPageDirect")
      }), []);
      const ss = (0, Qb.useRef)(null);
      (0, Qb.useEffect)((() => {
        const bb = bb => {
            ss.current = bb.target instanceof Element ? bb.target.closest("a, button") : null
          },
          cb = bb => {
            "Tab" === bb.key && (ss.current = null)
          };
        return document.addEventListener("pointerdown", bb, !0), document.addEventListener("keydown", cb, !0), () => {
          document.removeEventListener("pointerdown", bb, !0), document.removeEventListener("keydown", cb, !0)
        }
      }), []), (0, ub.e)("Enter", (bb => {
        const cb = bb.target instanceof Element ? bb.target : null;
        if (bb.defaultPrevented || null !== cb && void 0 !== cb && cb.closest("input, textarea, select")) return;
        const sb = null === cb || void 0 === cb ? void 0 : cb.closest("a, button");
        sb && sb !== ss.current || (bb.preventDefault(), Ms())
      })), (0, Yb.d)(pb.navigateToHomePage);
      const ks = wc.length > 0 || rc.length > 0,
        Ws = !qc.useRejoinLastLobbyButton || 0 === wc.length,
        as = Ec && null === qc.ownerSocialPreviewWithoutLocation,
        Ts = Ab.getPlayerName() === (null === Pc || void 0 === Pc || null === (cb = Pc.owner) || void 0 === cb ? void 0 : cb.name),
        Us = null !== (sb = null === (Tb = qc.badges.find((bb => "event" === bb.type))) || void 0 === Tb ? void 0 : Tb.event) && void 0 !== sb ? sb : null,
        Is = Ws ? Xb.n : Xb.d,
        Hs = (0, Ob.jsx)(Mb.f, {
          tooltipInner: (0, Ob.jsx)("div", {
            children: zb("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Ob.jsx)(Is, {
            className: "GameInformationButton",
            padDefaultFocus: Ws,
            showPress: !0,
            onClick: () => {
              Ms()
            },
            children: (0, Ob.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Ws && (0, Ob.jsxs)(Ob.Fragment, {
                children: [(0, Ob.jsx)(Sb.b, {
                  name: "play"
                }), " "]
              }), zb("homePage:quickPlay")]
            })
          })
        });
      (0, Qb.useEffect)((() => {
        if (!Ec || wb) return;
        let bb = !0;
        const cb = (0, ac.s)(Wc.gameNameWithVariation);
        return yb.b.getGame(Ab, cb).then((cb => {
          bb && cs(cb)
        })).catch((cb => {
          console.error("Failed to get Custom Game information", cb), bb && (0, pb.navigateToHomePage)()
        })), yb.b.getFavouriteGames(Ab).then((sb => {
          bb && zc((bb => ({
            ...bb,
            isFavourite: sb.includes(cb)
          })))
        })).catch((cb => {
          console.error("Failed to get favourite games", cb), bb && Kc(!0)
        })), () => {
          bb = !1
        }
      }), [Ec, wb, Wc.gameNameWithVariation, cs, Ab]);
      const fs = !Ec && null === Oc;

      function Ms(bb) {
        (0, Yc.d)(), vb((0, Nb.b)(Wc.gameNameWithVariation, bb))
      }(0, Qb.useEffect)((() => {
        fs && (0, pb.navigateToHomePage)()
      }), [fs]), (0, Qb.useEffect)((() => {
        !1 !== qc.canCreateCustomLobbies && null !== qc.showWorldsInsteadOfCustomLobbies && !1 === wb && (Sc(!0), yb.b.getFavouriteLobbies(Ab).then((bb => {
          xc(bb)
        })), yb.b.getOpenCustomLobbies(Ab, {
          gameNameWithVariation: qc.showWorldsInsteadOfCustomLobbies ? "classic" : Wc.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === jc,
          onlyFavouriteLobbies: "favourite" === jc
        }).then((bb => {
          lc.current && vc(bb)
        })).catch((bb => {})).finally((() => {
          lc.current && Sc(!1)
        })))
      }), [wb, Wc, jc, qc.showWorldsInsteadOfCustomLobbies, qc.canCreateCustomLobbies, lc, Ab]);
      const Xs = (0, Qb.useCallback)((async bb => {
          try {
            if (!Fc) return;
            Fc.includes(bb) ? (yb.b.unfavouriteLobby(Ab, bb), xc(Fc.filter((cb => cb !== bb)))) : (yb.b.favouriteLobby(Ab, bb).catch((bb => {
              console.error("Failed to favourite lobby", bb)
            })), xc([...Fc, bb]))
          } catch (cb) {
            console.error("Failed to like lobby", cb)
          }
        }), [Ab, Fc]),
        ns = (null === Pc || void 0 === Pc ? void 0 : Pc.schematicId) === (0, ac.s)(cc.gameNameWithVariation) ? Pc : null,
        ms = ns && (0, qb.H)(cc.gameNameWithVariation, (bb => zb(bb)), ns);
      (0, bc.g)(ns && (0, qb.v)(cc.gameNameWithVariation, ns));
      const ls = Rb.featureFlags.canUseCustomLobbies && !0 === qc.canCreateCustomLobbies,
        Qs = (0, Ob.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Ob.jsx)(ob, {
            gameNameWithVariation: Wc.gameNameWithVariation
          })
        });
      return (0, Ob.jsx)(Ob.Fragment, {
        children: (0, Ob.jsxs)("article", {
          className: mb()("GameInformation", {
            GameInformationFadeIn: dc,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (nb = qc.countdownInformation) || void 0 === nb ? void 0 : nb.type)
          }),
          children: [ms && (0, Ob.jsx)(Vb.e, {
            meta: ms
          }), (0, Ob.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Ob.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Ob.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Ob.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Ob.jsx)("div", {
                  className: mb()("GameInformationTopBackgroundImage", Ub.h),
                  style: (0, Ub.e)(Ac),
                  children: (0, Ob.jsx)(Ub.c, {
                    image: Ac
                  })
                })]
              }), (0, Ob.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Ob.jsx)(ec.e, {}), (0, Ob.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Ob.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Ob.jsxs)("div", {
                      className: mb()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: as
                      }),
                      children: [qc.badges.map((bb => (0, Ob.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${bb.type}`,
                        children: (0, Ob.jsx)(Bb.c, {
                          badge: bb
                        })
                      }, bb.type))), Ec && (0, Ob.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Ob.jsx)(gb.d, {
                          text: (0, kb.hb)({
                            type: "playerCrafted"
                          })
                        })
                      }), qc.category && (0, Ob.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Ob.jsx)(gb.d, {
                          text: [{
                            str: (0, kb.lb)(qc.category).toUpperCase()
                          }]
                        })
                      }), null !== qc.ccu && (0, Ob.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Ob.jsx)(Sb.b, {
                          name: "user"
                        }), (0, nc.K)(qc.ccu), " online"]
                      }), null !== qc.ownerSocialPreviewWithoutLocation && (0, Ob.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Ob.jsx)("span", {
                          children: "Made by"
                        }), (0, Ob.jsx)(Eb.h, {
                          playerSocialPreview: {
                            ...qc.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), as && (0, Ob.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Ob.jsx)("span", {
                          children: "Made by"
                        }), (0, Ob.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== qc.favourites && (null !== qc.isFavourite || Ec && !Gc) && (0, Ob.jsx)(Xb.r, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== bs.current && (bs.current = !0, null !== qc.isFavourite)) {
                              const bb = (0, ac.s)(Wc.gameNameWithVariation);
                              let cb;
                              qc.isFavourite ? (cb = -1, yb.b.unfavouriteGame(Ab, bb).catch((bb => {
                                console.error("Failed to get unfavourite game", bb)
                              })).finally((() => {
                                bs.current = !1
                              }))) : (cb = 1, yb.b.favouriteGame(Ab, bb).catch((bb => {
                                console.error("Failed to get favourite game", bb)
                              })).finally((() => {
                                bs.current = !1
                              }))), zc((bb => ({
                                ...bb,
                                isFavourite: !bb.isFavourite
                              }))), zc((bb => ({
                                ...bb,
                                favourites: bb.favourites + cb
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (tb = qc.isFavourite) && void 0 !== tb && tb,
                        disabled: null === qc.isFavourite,
                        className: mb()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === qc.isFavourite
                        })
                      }, null === qc.isFavourite ? "pending" : "known"), Ec && !as && Rb.featureFlags.useSocialFeatures && !Ts && (0, Ob.jsx)(Nc.d, {
                        targetType: "customGame",
                        targetId: (0, ac.s)(Wc.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (Ab.playerHasRank("developer") || Ab.playerHasRank("admin") && Ts) && (0, Ob.jsxs)(Xb.n, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          vb((0, Ic.l)((0, Uc.f)(Wc.gameNameWithVariation, !0)))
                        },
                        children: [(0, Ob.jsx)(Sb.b, {
                          name: "star-christmas"
                        }), " ", zb("studio:viewInStudio")]
                      }), Ec && Ab.playerHasRank("developer") && (0, Ob.jsxs)(Xb.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, mc.d)({
                            schematicId: (0, ac.s)(Wc.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Ob.jsx)(Sb.b, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), Ec && Ab.playerHasRank("developer") && (0, Ob.jsxs)(Xb.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          sc.NotificationProvider.showCustomPopup({
                            body: () => (0, Ob.jsx)(Qc, {
                              schematicId: (0, ac.s)(Wc.gameNameWithVariation),
                              gameName: qc.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Ob.jsx)(Sb.b, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (Pb = qc.countdownInformation) || void 0 === Pb ? void 0 : Pb.type) && (0, Ob.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Ob.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Ob.jsx)(hb.b, {
                            toTime: qc.countdownInformation.countdownToTime
                          })]
                        }), (0, Ob.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: qc.countdownInformation.previewText
                        })]
                      })]
                    }, as ? "pending" : "shown"), (0, Ob.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Ob.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Ob.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [qc.title, " ", qc.variationTitle && (null === (Db = Xc.b[Wc.gameNameWithVariation]) || void 0 === Db ? void 0 : Db.variationThumbnailUseBigRatio) && (0, Ob.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: qc.variationTitle
                          })]
                        })
                      }), qc.listedVariations && qc.listedVariations.length > 0 && (0, Ob.jsx)("div", {
                        className: mb()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (ib = Xc.b[Wc.gameNameWithVariation]) || void 0 === ib ? void 0 : ib.variationThumbnailUseBigRatio
                        }),
                        children: qc.listedVariations.map((bb => {
                          var cb, sb;
                          return (0, Ob.jsxs)(ic, {
                            variation: bb,
                            isSelected: Wc.gameNameWithVariation === bb,
                            children: [null !== db && (0, Ob.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Ob.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Ob.jsx)(Sb.b, {
                                  name: "user"
                                }), " ", (0, nc.K)(null !== (cb = db[bb]) && void 0 !== cb ? cb : 0)]
                              })
                            }), (0, Ob.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: zb(null !== (sb = Xc.b[bb].variationTitle) && void 0 !== sb ? sb : Xc.b[bb].title)
                            }), (0, Ob.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, fb.filterBadges)(Xc.b[bb].badges).map((bb => (0, Ob.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + bb.type,
                                children: (0, Ob.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Ob.jsx)(Bb.c, {
                                    badge: bb
                                  })
                                })
                              }, bb.type)))
                            })]
                          }, bb)
                        }))
                      })]
                    }), qc.description && (0, Ob.jsx)("p", {
                      className: "GameInformationDescription",
                      children: qc.description
                    })]
                  }), (0, Ob.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Ob.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Ws && (0, Ob.jsx)(Mb.f, {
                        tooltipInner: (0, Ob.jsx)("div", {
                          children: zb("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Ob.jsx)(Xb.n, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            Ms(wc[0])
                          },
                          children: (0, Ob.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Ob.jsx)(Sb.b, {
                              name: "play"
                            }), " ", zb("homePage:rejoinLobbyNumber", {
                              number: wc[0]
                            })]
                          })
                        })
                      }), Ws && Hs]
                    }), (0, Ob.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Ws && Hs, (0, Ob.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Ob.jsx)(Sb.b, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Ob.jsx)(lb.c, {
                          className: "JoinLobbyInput",
                          placeholderText: zb("homePage:lobbyName"),
                          maxLength: nc.I,
                          domRef: Jc,
                          onValueChange: bb => {
                            bb = (0, nc.mb)(bb), hc(bb)
                          },
                          onEnter: () => {
                            0 === uc.length ? Ms(wc[0]) : Ms(uc)
                          }
                        }), (0, Ob.jsx)(Xb.d, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === uc.length ? Ms(wc[0]) : Ms(uc)
                          },
                          children: zb("general:join")
                        })]
                      })]
                    }), (0, Ob.jsxs)("section", {
                      className: mb()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !ks
                      }),
                      children: [(0, Ob.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Ob.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Ob.jsx)(Sb.b, {
                            name: "clock-rotate-left"
                          }), ks && (0, Ob.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: zb("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Ob.jsx)(Vc.e, {
                        lobbyGroups: [wc, rc],
                        onLobbyClick: bb => {
                          Ms(bb)
                        },
                        keyPrefix: Wc.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== Us && (0, Ob.jsx)(Zb, {
                eventName: Us
              })]
            }), ls && (0, Ob.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Ob.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Ob.jsxs)("div", {
                  className: mb()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === qc.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === qc.showWorldsInsteadOfCustomLobbies && (0, Ob.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Ob.jsx)(Sb.b, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Ob.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Ob.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), zb("game:worlds")]
                    })]
                  }), !1 === qc.showWorldsInsteadOfCustomLobbies && (0, Ob.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Ob.jsx)(Sb.b, {
                      name: "joystick"
                    }), (0, Ob.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Ob.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), zb("homePage:customLobbies")]
                    })]
                  }), (0, Ob.jsx)(Xb.M, {
                    onClick: () => {
                      pc("explore")
                    },
                    active: "explore" === jc,
                    children: zb("general:explore")
                  }), (0, Ob.jsx)(Xb.M, {
                    onClick: () => {
                      pc("favourite")
                    },
                    active: "favourite" === jc,
                    children: zb("homePage:favouriteLobbies")
                  }), (0, Ob.jsx)(Xb.M, {
                    onClick: () => {
                      pc("owned")
                    },
                    active: "owned" === jc,
                    children: zb("homePage:ownedLobbies")
                  })]
                }), (0, Ob.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Ob.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Ob.jsx)(Cc.b, {
                      label: "Create",
                      onClick: () => {
                        sc.NotificationProvider.showCustomPopup({
                          body: bb => (0, Ob.jsx)(kc.CreateCustomLobby, {
                            gameNameWithVariation: Wc.gameNameWithVariation,
                            close: bb
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === oc && (0, Ob.jsx)(Cc.i, {}), !1 === oc && Rc.length > 0 && Rc.map((bb => (0, Ob.jsx)(Cc.f, {
                      customLobby: bb,
                      favouriteLobbies: Fc,
                      toggleLikeLobby: Xs,
                      showReport: Rb.featureFlags.useSocialFeatures && "owned" !== jc
                    }, bb.name)))]
                  }), Qs]
                })]
              })
            })]
          }), !ls && Qs]
        })
      })
    }

    function ic(bb) {
      let {
        variation: cb,
        isSelected: sb,
        children: kb
      } = bb;
      const Ib = Xc.b[cb],
        fb = (0, ab.j)(cb, (0, ab.n)(Ib)),
        Mb = (0, Wb.f)(fb),
        Xb = (0, Tb.f)([(0, ab.i)(cb, (0, ab.d)(Ib))]);
      return (0, Ob.jsxs)(pb.LinkPreserveSearch, {
        to: (0, qb.v)(cb),
        replace: !0,
        className: mb()("GameInformationVariation", Ub.h, {
          SelectedGameInformationVariation: sb
        }),
        onClick: bb => {
          if (!(0, cc.b)(bb)) return;
          const sb = (0, Cb.k)(cb);
          Hb.h.setItem(sb, cb)
        },
        onMouseEnter: Xb.start,
        onMouseLeave: Xb.cancel,
        onFocus: Xb.start,
        onBlur: Xb.cancel,
        style: (0, Ub.e)(Mb),
        children: [(0, Ob.jsx)(Ub.c, {
          image: Mb
        }), kb]
      })
    }
  },
  6159: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => eb
    });
    var kb = sb(64),
      Wb = sb(1431),
      ab = sb(1474),
      Tb = sb(3281),
      Ub = sb(1117),
      Ib = sb(1327),
      Hb = sb(1341),
      fb = sb(1039),
      Mb = sb(1033),
      Xb = sb.n(Mb),
      nb = sb(1087);

    function mb(bb) {
      let {
        info: cb,
        className: sb
      } = bb;
      return (0, nb.jsxs)("div", {
        className: Xb()("GameApprovalInfoDetails", sb),
        children: [(0, nb.jsxs)("div", {
          className: Xb()("GameApprovalInfoSummary", cb.overallPassed ? "Passed" : "Failed"),
          children: [(0, nb.jsx)(fb.b, {
            name: cb.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, nb.jsx)("span", {
            children: cb.summary
          })]
        }), cb.rows.length > 0 && (0, nb.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: cb.rows.map((bb => (0, nb.jsxs)("div", {
            className: Xb()("GameApprovalInfoRow", bb.passed ? "Passed" : "Failed"),
            children: [(0, nb.jsx)(fb.b, {
              name: bb.passed ? "check" : "xmark"
            }), (0, nb.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, nb.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: bb.label
              }), (0, nb.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: bb.valueText
              })]
            })]
          }, bb.label)))
        })]
      })
    }
    var lb = sb(1197),
      Qb = sb(1332);

    function eb(bb) {
      Qb.NotificationProvider.showCustomPopup({
        body: () => (0, nb.jsx)(Cb, {
          ...bb
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function Cb(bb) {
      let {
        schematicId: cb,
        canOverride: sb,
        onApprovalChanged: Mb
      } = bb;
      const {
        t: Xb
      } = (0, lb.E)(), {
        userContext: Qb
      } = (0, Ub.c)(), eb = (0, Tb.e)(), [Cb, Nb] = (0, kb.useState)(null), [Vb, Lb] = (0, kb.useState)(null), [ub, Yb] = (0, kb.useState)(!1), hb = (0, kb.useCallback)((() => {
        Lb(null), ab.b.getGameApprovalInfo(Qb, cb).then((bb => {
          eb.current && Nb(bb)
        })).catch((bb => {
          console.error("Failed to get game approval info", bb), eb.current && Lb(Xb("studio:approvalLoadFailed"))
        }))
      }), [Qb, cb, eb, Xb]);
      (0, kb.useEffect)((() => {
        hb()
      }), [hb]);
      const Jb = bb => {
        ub || (Yb(!0), ab.b.setGameApproval(Qb, cb, bb).then((() => {
          null === Mb || void 0 === Mb || Mb(), eb.current && hb()
        })).catch((bb => {
          console.error("Failed to set game approval", bb)
        })).finally((() => {
          eb.current && Yb(!1)
        })))
      };
      return (0, nb.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, nb.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: Xb("studio:approvalTitle")
        }), !Cb && !Vb && (0, nb.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, nb.jsx)(Ib.d, {})
        }), Vb && (0, nb.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: Vb
        }), Cb && (0, nb.jsxs)(nb.Fragment, {
          children: [(0, nb.jsx)(mb, {
            info: Cb
          }), sb && (0, nb.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== Cb.manualOverride && (0, nb.jsx)(Hb.f, {
              tooltipInner: (0, nb.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, nb.jsxs)(Wb.n, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Jb(!0)
                },
                disabled: ub,
                children: [(0, nb.jsx)(fb.b, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== Cb.manualOverride && (0, nb.jsx)(Hb.f, {
              tooltipInner: (0, nb.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, nb.jsxs)(Wb.G, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Jb(!1)
                },
                disabled: ub,
                children: [(0, nb.jsx)(fb.b, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== Cb.manualOverride && (0, nb.jsx)(Hb.f, {
              tooltipInner: (0, nb.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, nb.jsxs)(Wb.d, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Jb(null)
                },
                disabled: ub,
                children: [(0, nb.jsx)(fb.b, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  8967: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(64),
      Wb = sb(3369);

    function ab() {
      const [bb, cb] = (0, kb.useState)(!1);
      return (0, kb.useLayoutEffect)((() => {
        let bb = !0;
        return (0, Wb.e)().then((() => {
          bb && cb(!0)
        })), () => {
          bb = !1
        }
      }), []), bb
    }
  },
  8522: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(1316),
      Wb = sb(1235),
      ab = sb(628);

    function Tb(bb) {
      return bb = function(bb, cb) {
        var sb;
        const kb = new URLSearchParams(cb),
          Wb = kb.get("lobby"),
          ab = kb.get("vm"),
          Tb = null !== (sb = Wb) && void 0 !== sb ? sb : bb.lobbyName,
          Ub = null !== ab && void 0 !== ab ? ab : bb.directJoinVmUrl;
        if (Tb === bb.lobbyName && Ub === bb.directJoinVmUrl) return bb;
        return {
          ...bb,
          lobbyName: Tb,
          directJoinVmUrl: Ub
        }
      }(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), bb = function(bb) {
        if ((0, ab.L)(bb.directJoinVmUrl)) return bb;
        const cb = (0, Wb.U)(bb.directJoinVmUrl);
        null === cb && (bb.directJoinVmUrl = void 0);
        return bb
      }(bb = function(bb) {
        if ((0, ab.L)(bb.gameNameWithVariation)) return bb;
        return bb.gameNameWithVariation = (0, kb.i)(bb.gameNameWithVariation), bb
      }(bb))
    }
  },
  8514: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      d: () => Wb
    });
    let kb = !1;

    function Wb() {
      kb = !0
    }

    function ab() {
      return kb
    }
  },
  36039: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      f: () => kb
    });
    const kb = "skyblockSkills",
      Wb = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);