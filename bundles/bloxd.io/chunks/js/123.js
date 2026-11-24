export const id = 123;
export const ids = [123, 401];
export const modules = {
  36533: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Ni
    });
    var Op = cp(322),
      op = cp(3607),
      Ip = cp(3641),
      Sp = cp(3635),
      xp = cp(3628),
      Lp = cp(1201),
      Yp = cp(44),
      Dp = cp(1765),
      Ap = cp(1387),
      Pp = cp(1480),
      Wp = cp(1049),
      yp = cp.n(Wp),
      Up = cp(1692),
      wp = cp(62),
      vp = cp(82),
      tp = cp(2420),
      Hp = cp(1356),
      dp = cp(1626),
      ep = cp(1141),
      jp = cp(3523),
      kp = cp(4648),
      mp = cp(3584),
      Rp = cp(1929),
      qp = cp(3600),
      Mp = cp(1776),
      Cp = cp(1520),
      Ep = cp(2210),
      Xp = cp(1361),
      lp = cp(2671),
      Qp = cp(5146),
      Jp = cp(1112);
    const Bp = 15e3,
      Np = 2500;

    function Tp(pp) {
      var ip;
      let {
        eventName: cp
      } = pp;
      const {
        t: Op
      } = (0, Lp.H)(), op = Mp.e[cp], [Ip, Sp] = (0, wp.useState)((() => Date.now() >= op.endsAt.getTime())), [xp, Yp] = (0, wp.useState)("overall"), Dp = function(pp, ip) {
        const {
          userContext: cp,
          isUserContextUpdating: Op
        } = (0, ep.b)(), op = `${pp}:${ip}`, [Ip, Sp] = (0, wp.useState)({
          requestKey: op,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, wp.useEffect)((() => {
          if (Op) return;
          let Ip, xp = !1;
          const Lp = async () => {
            if ("visible" === document.visibilityState) try {
              const Op = await Cp.b.getGameEventLeaderboard(cp, {
                event: pp,
                scope: ip
              });
              xp || Sp({
                requestKey: op,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Op
                }
              })
            } catch {
              xp || Sp((pp => pp.requestKey === op && "loaded" === pp.leaderboard.status ? pp : {
                requestKey: op,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            xp || (Ip = setTimeout(Lp, Bp))
          };
          return Lp(), () => {
            xp = !0, clearTimeout(Ip)
          }
        }), [pp, ip, op, cp, Op]), Ip.requestKey === op ? Ip.leaderboard : {
          status: "loading"
        }
      }(cp, xp), Ap = function(pp) {
        const ip = (0, wp.useRef)(null),
          cp = (0, wp.useRef)(0),
          Op = (0, wp.useRef)(),
          [op, Ip] = (0, wp.useState)({});
        return (0, wp.useEffect)((() => {
          const op = null === pp || void 0 === pp ? void 0 : pp.entries;
          if (!op) return;
          const Sp = new Map(op.map((pp => [pp.player.name, pp.value]))),
            xp = ip.current;
          if (ip.current = Sp, null === xp) return;
          const Lp = {};
          for (const [pp, ip] of Sp) {
            const Op = xp.get(pp);
            void 0 !== Op && ip > Op && (Lp[pp] = {
              amount: ip - Op,
              key: cp.current++
            })
          }
          0 !== Object.keys(Lp).length && (Ip(Lp), clearTimeout(Op.current), Op.current = setTimeout((() => {
            Ip({})
          }), Np))
        }), [pp]), (0, wp.useEffect)((() => () => {
          clearTimeout(Op.current)
        }), []), op
      }("loaded" === Dp.status ? Dp.leaderboard : null), Pp = function(pp) {
        const [ip, cp] = (0, wp.useState)(null), Op = "loaded" === pp.status ? pp.leaderboard.goalProgress : void 0;
        return (0, wp.useEffect)((() => {
          Op && cp(Op)
        }), [Op]), ip
      }(Dp), Wp = Ep.f[`profileEffect_${op.prizePack}`];
      if (Ip) return null;
      const Up = "loaded" === Dp.status ? Dp.leaderboard : null,
        vp = null !== (ip = null === Up || void 0 === Up ? void 0 : Up.entries) && void 0 !== ip ? ip : null,
        tp = null !== Up && void 0 !== Up && Up.own && null !== vp && !vp.some((pp => pp.isOwn)) ? Up.own : null;
      return (0, Jp.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Jp.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Jp.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Jp.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Jp.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Jp.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Op("gameEvents:live")]
              }), (0, Jp.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Op("gameEvents:endsIn"), (0, Jp.jsx)(mp.e, {
                  toTime: op.endsAt,
                  onReachEndOfCountdown: () => {
                    Sp(!0)
                  }
                })]
              })]
            }), (0, Jp.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Op(op.titleKey)
            }), (0, Jp.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Jp.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [Wp && (0, Jp.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Jp.jsx)(Wp, {})
                }), (0, Jp.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Jp.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Op("gameEvents:prize")
                  }), (0, Jp.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Op(op.prizeNameKey)
                  })]
                })]
              }), (0, Jp.jsx)(fp, {
                event: op,
                progress: Pp
              })]
            })]
          }), (0, Jp.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Jp.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Jp.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Op(op.leaderboard.titleKey)
              }), (0, Jp.jsx)(Qp.b, {
                ariaLabel: Op("gameEvents:leaderboardScope"),
                options: Mp.b.map((pp => ({
                  value: pp,
                  label: Op(`gameEvents:${pp}Scope`)
                }))),
                value: xp,
                onChange: Yp
              })]
            }), "loading" === Dp.status && (0, Jp.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Jp.jsx)(Xp.c, {})
            }), ("unavailable" === Dp.status || "loaded" === Dp.status && null === vp) && (0, Jp.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Op("gameEvents:leaderboardUnavailable")
            }), null !== vp && 0 === vp.length && (0, Jp.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Op("friends" === xp ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== vp && vp.length > 0 && (0, Jp.jsx)("ol", {
              className: "GameEventPanelRows",
              children: vp.map((pp => {
                const ip = Ap[pp.player.name];
                return (0, Jp.jsxs)("li", {
                  className: yp()("GameEventPanelRow", {
                    GameEventPanelRowOwn: pp.isOwn,
                    GameEventPanelRowTop: pp.rank <= 3
                  }),
                  children: [(0, Jp.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", pp.rank]
                  }), (0, Jp.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Jp.jsx)(lp.d, {
                      playerSocialPreview: {
                        ...pp.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== ip && (0, Jp.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", ip.amount.toLocaleString()]
                  }, ip.key), (0, Jp.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: pp.value.toLocaleString()
                  })]
                }, pp.player.name)
              }))
            }), tp && (0, Jp.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Jp.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", tp.rank.toLocaleString()]
              }), (0, Jp.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Op("gameEvents:yourPlace")
              }), (0, Jp.jsx)("span", {
                className: "GameEventPanelScore",
                children: tp.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function fp(pp) {
      let {
        event: ip,
        progress: cp
      } = pp;
      const {
        t: Op
      } = (0, Lp.H)(), op = null !== cp && ip.prizeGoals.some(((pp, ip) => cp[ip] >= pp.target));
      return (0, Jp.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Jp.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Op(op ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Jp.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: ip.prizeGoals.map(((pp, ip) => {
            const op = null === cp ? null : Math.min(cp[ip], pp.target);
            return (0, Jp.jsxs)(wp.Fragment, {
              children: [ip > 0 && (0, Jp.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Op("gameEvents:goalsOr")
              }), (0, Jp.jsxs)("div", {
                className: yp()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: op === pp.target
                }),
                children: [(0, Jp.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Op(pp.labelKey)
                }), (0, Jp.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Jp.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== op && void 0 !== op ? op : 0) / pp.target * 100 + "%"
                    }
                  }), null !== op && (0, Jp.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [op.toLocaleString(), " / ", pp.target.toLocaleString()]
                  })]
                })]
              })]
            }, pp.board)
          }))
        })]
      })
    }
    var bp = cp(1569),
      hp = cp(1611),
      ap = cp(1035),
      np = cp(739),
      Fp = cp(3581);

    function gp(pp) {
      let {
        gameNameWithVariation: ip
      } = pp;
      const cp = (0, bp.B)(ip),
        [Op, op] = (0, wp.useState)(null);
      if ((0, wp.useEffect)((() => {
          if (!cp) return;
          let pp = !0;
          return (0, hp.i)(cp).then((ip => {
            pp && op(ip)
          })).catch((pp => {
            console.error(`Failed to load the page copy for ${cp.name}`, pp)
          })), () => {
            pp = !1
          }
        }), [cp]), !cp || !Op || Op.name !== cp.name) return null;
      const Ip = (0, hp.e)(Op),
        Sp = new Set((0, ap.e)((0, np.i)()).map((pp => (0, bp.t)(pp)))),
        xp = Op.similarGames.filter((pp => Sp.has((0, bp.t)(pp))));
      return (0, Jp.jsx)("div", {
        className: "GamePageContent",
        children: (0, Jp.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Jp.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Jp.jsx)("h2", {
              children: Ip.whatIs
            }), Op.whatIs.map((pp => (0, Jp.jsx)("p", {
              children: pp
            }, pp)))]
          }), (0, Jp.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Jp.jsx)("h2", {
              children: Ip.howToPlay
            }), Op.howToPlay.map((pp => (0, Jp.jsx)("p", {
              children: pp
            }, pp)))]
          }), (0, Jp.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Jp.jsx)("h2", {
              children: Ip.features
            }), (0, Jp.jsx)("ul", {
              children: Op.features.map((pp => (0, Jp.jsx)("li", {
                children: pp
              }, pp)))
            })]
          }), (0, Jp.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Jp.jsx)("h2", {
              children: Ip.tips
            }), (0, Jp.jsx)("ul", {
              children: Op.tips.map((pp => (0, Jp.jsx)("li", {
                children: pp
              }, pp)))
            })]
          }), (0, Jp.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Jp.jsx)("h2", {
              children: Ip.faq
            }), Op.faq.map((pp => {
              let {
                question: ip,
                answer: cp
              } = pp;
              return (0, Jp.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Jp.jsx)("h3", {
                  children: ip
                }), (0, Jp.jsx)("p", {
                  children: cp
                })]
              }, ip)
            }))]
          }), xp.length > 0 && (0, Jp.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Jp.jsx)("h2", {
              children: Ip.similarGames
            }), (0, Jp.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: xp.map((pp => (0, Jp.jsx)("li", {
                children: (0, Jp.jsx)(Fp.g, {
                  source: {
                    type: "game",
                    gameNameWithVariation: pp
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, pp)))
            })]
          })]
        })
      })
    }
    var Gp = cp(1060),
      rp = cp(104),
      Zp = cp(1149),
      zp = cp(34470),
      sp = cp(1666),
      Kp = cp(1543),
      Vp = cp(1538),
      ii = cp(1623),
      ci = cp(1490),
      Oi = cp(1372),
      oi = cp(36539),
      Ii = cp(1244),
      Si = cp(1014),
      xi = cp(337),
      Li = cp(1024),
      Yi = cp(1563),
      Di = cp(9049),
      Ai = cp(25),
      Pi = cp(2580),
      Wi = cp(768),
      yi = cp(1234),
      Ui = cp(6648),
      wi = cp(3587);

    function vi(pp) {
      let {
        preview: ip,
        isBroken: cp
      } = pp;
      const Op = null === ip ? null : (0, Ip.f)(ip, "small"),
        Sp = (0, op.d)(null !== Op && void 0 !== Op ? Op : Ip.q);
      return null === ip ? (0, Jp.jsx)("div", {
        className: yp()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: cp
        }),
        children: (0, Jp.jsx)(Gp.d, {
          name: cp ? "triangle-exclamation" : "star"
        })
      }) : (0, Jp.jsx)("div", {
        className: yp()("FeaturedGamesPopupSlotThumbnail", xp.g),
        style: (0, xp.f)(Sp),
        role: "img",
        "aria-label": ip.name,
        children: (0, Jp.jsx)(xp.c, {
          image: Sp
        })
      })
    }

    function ti(pp) {
      let {
        schematicId: ip,
        gameName: cp
      } = pp;
      const {
        userContext: op
      } = (0, ep.b)(), Ip = (0, wi.b)(), [Sp, xp] = (0, wp.useState)(null), [Lp, Yp] = (0, wp.useState)(null), [Dp, Ap] = (0, wp.useState)(!1), Wp = (0, wp.useCallback)((() => {
        Yp(null), Cp.b.getFeaturedGames(op).then((pp => {
          Ip.current && xp(pp.slots)
        })).catch((pp => {
          console.error("Failed to get featured games", pp), Ip.current && Yp("Failed to load featured games")
        }))
      }), [op, Ip]);
      (0, wp.useEffect)((() => {
        Wp()
      }), [Wp]);
      const yp = (pp, ip) => {
        Dp || (Ap(!0), Cp.b.setFeaturedGame(op, pp, ip).then((() => {
          Ip.current && Wp()
        })).catch((pp => {
          console.error("Failed to set featured game", pp), Ip.current && Yp("Failed to update the featured slot")
        })).finally((() => {
          Ip.current && Ap(!1)
        })))
      };
      return (0, Jp.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Jp.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !Sp && !Lp && (0, Jp.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Jp.jsx)(Xp.c, {})
        }), Lp && (0, Jp.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: Lp
        }), Sp && (0, Jp.jsxs)(Jp.Fragment, {
          children: [(0, Jp.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: Sp.map((pp => {
              const cp = pp.schematicId === ip,
                op = null === pp.schematicId,
                {
                  categoryGroup: Ip
                } = Op.N[pp.slotId];
              return (0, Jp.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Jp.jsx)(vi, {
                  preview: pp.preview,
                  isBroken: !op
                }), (0, Jp.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Jp.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Op.rb)(Ip), " \xb7 position", " ", (0, Op.Q)(pp.slotId, Op.Zb) + 1, " of", " ", (0, Op.Xb)(Ip, Op.Zb)]
                  }), op && (0, Jp.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !op && null !== pp.preview && (0, Jp.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: pp.preview.name
                  }), !op && null === pp.preview && (0, Jp.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Jp.jsx)(Gp.d, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Jp.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [op && (0, Jp.jsxs)(Pp.w, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      yp(pp.slotId, ip)
                    },
                    disabled: Dp,
                    children: [(0, Jp.jsx)(Gp.d, {
                      name: "star"
                    }), " Feature here"]
                  }), !op && !cp && (0, Jp.jsxs)(Pp.S, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      yp(pp.slotId, ip)
                    },
                    disabled: Dp,
                    children: [(0, Jp.jsx)(Gp.d, {
                      name: "star"
                    }), " Replace"]
                  }), !op && (0, Jp.jsxs)(Pp.K, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      yp(pp.slotId, null)
                    },
                    disabled: Dp,
                    children: [(0, Jp.jsx)(Gp.d, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, pp.slotId)
            }))
          }), (0, Jp.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var Hi = cp(4766),
      di = cp(4685),
      ei = cp(3546);
    const ui = 8,
      ji = 12;

    function ki(pp) {
      let {
        customLobbies: ip,
        favouriteLobbies: cp,
        toggleLikeLobby: Op,
        showReport: op
      } = pp;
      const [Ip, Sp] = (0, wp.useState)(ui);
      return (0, wp.useEffect)((() => {
        if (Ip >= ip.length) return;
        let pp = !0;
        return (0, ei.h)().then((() => {
          pp && Sp(Ip + ji)
        })), () => {
          pp = !1
        }
      }), [Ip, ip.length]), (0, Jp.jsx)(Jp.Fragment, {
        children: ip.slice(0, Ip).map((pp => (0, Jp.jsx)(di.f, {
          customLobby: pp,
          favouriteLobbies: cp,
          toggleLikeLobby: Op,
          showReport: op
        }, pp.name)))
      })
    }
    var mi = cp(4694),
      Ri = cp(4705),
      qi = cp(4661),
      Mi = cp(3662),
      Ci = cp(9046),
      Ei = cp(212);
    const Xi = {
      skyblock: [cp(36569).c]
    };
    var li = cp(640);
    const Qi = {
      listedVariations: null,
      backgroundImage: Ip.q,
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

    function Ji(pp, ip) {
      const cp = Wi.d[pp.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, Ip.f)(pp, "large"),
        badges: [],
        category: pp.gameCategory,
        title: void 0 !== (null === cp || void 0 === cp ? void 0 : cp.title) ? ip(cp.title) : pp.name,
        variationTitle: null,
        description: void 0 !== (null === cp || void 0 === cp ? void 0 : cp.description) ? ip(cp.description) : pp.description,
        ownerSocialPreviewWithoutLocation: "owner" in pp ? pp.owner : null,
        ccu: pp.ccu,
        favourites: pp.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in pp ? pp.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function Bi(pp) {
      var ip, cp, Op;
      return null !== (ip = null !== (cp = (0, Ei.h)() ? function(pp) {
        for (const [ip, cp] of Object.entries(Xi)) {
          const Op = [ip, ...cp.map((pp => (0, xi.Lb)(ip, pp)))];
          if (Op.includes(pp)) return Op
        }
        return null
      }(pp) : null) && void 0 !== cp ? cp : null === (Op = Wi.c[pp]) || void 0 === Op ? void 0 : Op.listedVariations) && void 0 !== ip ? ip : null
    }

    function Ni() {
      const {
        gameNameWithVariation: pp
      } = (0, Kp.A)();
      if ((0, wp.useEffect)(Mi.p, []), pp && (0, Ii.r)(pp)) return (0, Jp.jsx)(Ti, {
        urlId: pp
      }, pp);
      const ip = pp && (0, Si.j)(pp) ? pp : "firstParty";
      return (0, Jp.jsx)(fi, {}, ip)
    }

    function Ti(pp) {
      let {
        urlId: ip
      } = pp;
      const {
        userContext: cp,
        isUserContextUpdating: Op
      } = (0, ep.b)(), op = (0, wp.useMemo)((() => (0, sp.i)(ip)), [ip]);
      (0, wp.useMemo)((() => {
        if (null === op) return;
        const pp = Zp.userContextManager.peekCurrentUserContext();
        (null !== pp ? Cp.b.getGame(pp, op.schematicId) : Zp.userContextManager.getCurrentUserContext().then((pp => Cp.b.getGame(pp, op.schematicId)))).catch((pp => {
          console.error(`Failed to get the custom game ${op.schematicId}`, pp), (0, sp.f)(ip)
        }))
      }), [op, ip]);
      const [Ip, Sp] = (0, wp.useState)(null), xp = (0, zp.d)();
      (0, wp.useEffect)((() => {
        if (null !== op || Op) return;
        let pp = !0;
        return Cp.b.getGameByUrlId(cp, ip).then((cp => {
          pp && Sp({
            urlId: ip,
            game: cp
          })
        })).catch((cp => {
          console.error(`Failed to find the custom game with urlId ${ip}`, cp), pp && (0, Vp.navigateToHomePage)()
        })), () => {
          pp = !1
        }
      }), [ip, op, Op, cp]);
      const Lp = null !== op && void 0 !== op ? op : (null === Ip || void 0 === Ip ? void 0 : Ip.urlId) === ip ? Ip.game : null;
      return null === Lp ? (0, Jp.jsx)(Xp.c, {}) : xp ? (0, Jp.jsx)(fi, {
        gameNameWithVariation: (0, Si.t)(Lp.schematicId),
        knownCustomGame: Lp
      }, Lp.schematicId) : null
    }

    function fi(pp) {
      var ip, cp, Sp, Wp, Mp, Ep, Xp, Qp;
      let {
        gameNameWithVariation: Bp,
        knownCustomGame: Np = null
      } = pp;
      const {
        t: fp
      } = (0, Lp.H)();
      (0, Pi.g)();
      const hp = (0, Pi.n)(),
        {
          userContext: ap,
          isUserContextUpdating: np
        } = (0, ep.b)(),
        Fp = (0, qi.f)(),
        Zp = (0, Vp.useNavigatePreserveSearch)(),
        zp = (0, Kp.A)(),
        sp = (0, wp.useMemo)((() => Bp ? {
          gameNameWithVariation: Bp
        } : zp), [Bp, zp]),
        ci = (0, Di.c)(sp),
        Ii = (0, wp.useMemo)((() => {
          const pp = function(pp) {
            var ip, cp;
            const Op = Bi(pp);
            if (!Op || 0 === Op.length || Op.includes(pp)) return pp;
            const op = Yp.h.getItem((0, tp.g)(pp));
            if (op && Op.includes(op)) return op;
            return null !== (ip = null === (cp = Wi.c[pp]) || void 0 === cp ? void 0 : cp.defaultListedVariation) && void 0 !== ip ? ip : Op[0]
          }(ci.gameNameWithVariation);
          return pp === ci.gameNameWithVariation ? ci : {
            ...ci,
            gameNameWithVariation: pp
          }
        }), [ci]);
      (0, wp.useEffect)((() => {
        const pp = ci.gameNameWithVariation;
        Ii.gameNameWithVariation !== pp && pp !== (0, xi.Mb)(pp) && Zp((0, bp.u)(Ii.gameNameWithVariation), {
          replace: !0
        })
      }), [Ii.gameNameWithVariation, ci.gameNameWithVariation, Zp]);
      const [wi, vi] = (0, wp.useState)(""), ei = wp.useRef(null), [ui, ji] = (0, wp.useState)(), Mi = (0, Si.j)(Ii.gameNameWithVariation), Ei = (0, wp.useMemo)((() => Mi ? null : function(pp, ip, cp) {
        var Op, op;
        const Sp = Wi.c[pp];
        return (0, li.G)(Sp) ? null : {
          listedVariations: Bi(pp),
          backgroundImage: (0, Ip.k)(pp, (0, Ip.c)(Sp)),
          badges: (0, Dp.filterBadges)(Sp.badges),
          category: Sp.type,
          title: cp(Sp.title),
          variationTitle: Sp.variationTitle ? cp(Sp.variationTitle) : null,
          description: cp(Sp.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== ip ? null !== (Op = ip[pp]) && void 0 !== Op ? Op : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: Sp.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: Sp.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (op = Sp.canCreateCustomLobbies) || void 0 === op || op,
          countdownInformation: (0, tp.c)(pp)
        }
      }(Ii.gameNameWithVariation, hp, fp)), [Mi, Ii.gameNameWithVariation, hp, fp]), [Xi, Ni] = (0, wp.useState)(!1), [Ti, fi] = (0, wp.useState)((() => Np ? Ji(Np, fp) : Qi)), ai = null !== Ei && void 0 !== Ei ? Ei : Ti, [ni] = (0, wp.useState)(ai === Qi), Fi = (0, op.d)(ai.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: gi,
        recentlyPlayedCustomLobbies: Gi
      } = (0, wp.useMemo)((() => function(pp, ip, cp, Op) {
        var op;
        const Ip = pp => {
            const cp = (0, Si.o)(pp),
              Op = ip.find((ip => "custom" === ip.type ? ip.schematicId === cp : ip.gameNameWithVariation === pp));
            return Op ? [...Op.recentLobbies] : []
          },
          Sp = (0, Dp.getRecentGameNameWithVariationLobbiesKey)(pp),
          xp = null !== (op = Yp.h.getItem(Sp)) && void 0 !== op ? op : [],
          Lp = [...Ip(pp), ...xp],
          Ap = [];
        for (const Yp of Lp)(0, yi.I)(Yp) && !Ap.includes(Yp) && Ap.push(Yp);
        let Pp = Lp;
        if (cp) {
          const pp = Ip("classic_worlds"),
            ip = Lp.filter((ip => !pp.includes(ip)));
          Pp = [...pp, ...ip]
        }
        const Wp = [],
          yp = !1 === Op ? [] : Pp;
        for (const Yp of yp)(0, yi.I)(Yp) || Wp.includes(Yp) || Wp.push(Yp);
        return {
          recentlyPlayedPublicLobbies: Ap,
          recentlyPlayedCustomLobbies: Wp
        }
      }(Ii.gameNameWithVariation, Fp, ai.showWorldsInsteadOfCustomLobbies, ai.canCreateCustomLobbies)), [Ii.gameNameWithVariation, Fp, ai.showWorldsInsteadOfCustomLobbies, ai.canCreateCustomLobbies]), [ri, Zi] = (0, wp.useState)(!0), [zi, si] = (0, wp.useState)([]), [Ki, Vi] = (0, wp.useState)(null), [pc, ic] = (0, wp.useState)("explore"), cc = (0, wp.useRef)(!1), Oc = (0, wp.useCallback)((pp => {
        (0, vp.unstable_batchedUpdates)((() => {
          ji(pp), fi((ip => ({
            ...Ji(pp, fp),
            isFavourite: ip.isFavourite
          })))
        }))
      }), [fp]);
      (0, wp.useEffect)((() => {
        null === Ai.c.get("gameEntrySource") && (0, Ai.k)("gameInformationPageDirect")
      }), []);
      const oc = (0, wp.useRef)(null);
      (0, wp.useEffect)((() => {
        const pp = pp => {
            oc.current = pp.target instanceof Element ? pp.target.closest("a, button") : null
          },
          ip = pp => {
            "Tab" === pp.key && (oc.current = null)
          };
        return document.addEventListener("pointerdown", pp, !0), document.addEventListener("keydown", ip, !0), () => {
          document.removeEventListener("pointerdown", pp, !0), document.removeEventListener("keydown", ip, !0)
        }
      }), []), (0, jp.b)("Enter", (pp => {
        const ip = pp.target instanceof Element ? pp.target : null;
        if (pp.defaultPrevented || null !== ip && void 0 !== ip && ip.closest("input, textarea, select")) return;
        const cp = null === ip || void 0 === ip ? void 0 : ip.closest("a, button");
        cp && cp !== oc.current || (pp.preventDefault(), Wc())
      })), (0, kp.e)(Vp.navigateToHomePage);
      const Ic = gi.length > 0 || Gi.length > 0,
        Sc = !ai.useRejoinLastLobbyButton || 0 === gi.length,
        xc = Mi && null === ai.ownerSocialPreviewWithoutLocation,
        Lc = ap.getPlayerName() === (null === ui || void 0 === ui || null === (ip = ui.owner) || void 0 === ip ? void 0 : ip.name),
        Yc = null !== (cp = null === (Sp = ai.badges.find((pp => "event" === pp.type))) || void 0 === Sp ? void 0 : Sp.event) && void 0 !== cp ? cp : null,
        Dc = Sc ? Pp.o : Pp.f,
        Ac = (0, Jp.jsx)(Ap.f, {
          tooltipInner: (0, Jp.jsx)("div", {
            children: fp("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Jp.jsx)(Dc, {
            className: "GameInformationButton",
            padDefaultFocus: Sc,
            showPress: !0,
            onClick: () => {
              Wc()
            },
            children: (0, Jp.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Sc && (0, Jp.jsxs)(Jp.Fragment, {
                children: [(0, Jp.jsx)(Gp.d, {
                  name: "play"
                }), " "]
              }), fp("homePage:quickPlay")]
            })
          })
        });
      (0, wp.useEffect)((() => {
        if (!Mi || np) return;
        let pp = !0;
        const ip = (0, Si.o)(Ii.gameNameWithVariation);
        return Cp.b.getGame(ap, ip).then((ip => {
          pp && Oc(ip)
        })).catch((ip => {
          console.error("Failed to get Custom Game information", ip), pp && (0, Vp.navigateToHomePage)()
        })), Cp.b.getFavouriteGames(ap).then((cp => {
          pp && fi((pp => ({
            ...pp,
            isFavourite: cp.includes(ip)
          })))
        })).catch((ip => {
          console.error("Failed to get favourite games", ip), pp && Ni(!0)
        })), () => {
          pp = !1
        }
      }), [Mi, np, Ii.gameNameWithVariation, Oc, ap]);
      const Pc = !Mi && null === Ei;

      function Wc(pp) {
        (0, Ci.g)(), Zp((0, Hp.c)(Ii.gameNameWithVariation, pp))
      }(0, wp.useEffect)((() => {
        Pc && (0, Vp.navigateToHomePage)()
      }), [Pc]), (0, wp.useEffect)((() => {
        if (!1 === ai.canCreateCustomLobbies) return;
        let pp = !0;
        return null !== ai.showWorldsInsteadOfCustomLobbies && !1 === np && (Zi(!0), Cp.b.getFavouriteLobbies(ap).then((pp => {
          Vi(pp)
        })), Cp.b.getOpenCustomLobbies(ap, {
          gameNameWithVariation: ai.showWorldsInsteadOfCustomLobbies ? "classic" : Ii.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === pc,
          onlyFavouriteLobbies: "favourite" === pc
        }).then((ip => {
          pp && (0, vp.unstable_batchedUpdates)((() => {
            si(ip), Zi(!1)
          }))
        })).catch((ip => {
          console.error("Failed to get open custom lobbies", ip), pp && Zi(!1)
        }))), () => {
          pp = !1
        }
      }), [np, Ii, pc, ai.showWorldsInsteadOfCustomLobbies, ai.canCreateCustomLobbies, ap]);
      const yc = (0, wp.useCallback)((async pp => {
          try {
            if (!Ki) return;
            Ki.includes(pp) ? (Cp.b.unfavouriteLobby(ap, pp), Vi(Ki.filter((ip => ip !== pp)))) : (Cp.b.favouriteLobby(ap, pp).catch((pp => {
              console.error("Failed to favourite lobby", pp)
            })), Vi([...Ki, pp]))
          } catch (ip) {
            console.error("Failed to like lobby", ip)
          }
        }), [ap, Ki]),
        Uc = (null === ui || void 0 === ui ? void 0 : ui.schematicId) === (0, Si.o)(ci.gameNameWithVariation) ? ui : null,
        wc = Uc && (0, bp.E)(ci.gameNameWithVariation, (pp => fp(pp)), Uc);
      (0, ii.e)(Uc && (0, bp.u)(ci.gameNameWithVariation, Uc));
      const vc = rp.featureFlags.canUseCustomLobbies && !0 === ai.canCreateCustomLobbies,
        tc = (0, Jp.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Jp.jsx)(gp, {
            gameNameWithVariation: Ii.gameNameWithVariation
          })
        });
      return (0, Jp.jsx)(Jp.Fragment, {
        children: (0, Jp.jsxs)("article", {
          className: yp()("GameInformation", {
            GameInformationFadeIn: ni,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (Wp = ai.countdownInformation) || void 0 === Wp ? void 0 : Wp.type)
          }),
          children: [wc && (0, Jp.jsx)(dp.c, {
            meta: wc
          }), (0, Jp.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Jp.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Jp.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Jp.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Jp.jsx)("div", {
                  className: yp()("GameInformationTopBackgroundImage", xp.g),
                  style: (0, xp.f)(Fi),
                  children: (0, Jp.jsx)(xp.c, {
                    image: Fi
                  })
                })]
              }), (0, Jp.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Jp.jsx)(Hi.c, {}), (0, Jp.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Jp.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Jp.jsxs)("div", {
                      className: yp()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: xc
                      }),
                      children: [ai.badges.map((pp => (0, Jp.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${pp.type}`,
                        children: (0, Jp.jsx)(qp.b, {
                          badge: pp
                        })
                      }, pp.type))), Mi && (0, Jp.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Jp.jsx)(Rp.e, {
                          text: (0, Op.kb)({
                            type: "playerCrafted"
                          })
                        })
                      }), ai.category && (0, Jp.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Jp.jsx)(Rp.e, {
                          text: [{
                            str: (0, Op.nb)(ai.category).toUpperCase()
                          }]
                        })
                      }), null !== ai.ccu && (0, Jp.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Jp.jsx)(Gp.d, {
                          name: "user"
                        }), (0, yi.O)(ai.ccu), " online"]
                      }), null !== ai.ownerSocialPreviewWithoutLocation && (0, Jp.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Jp.jsx)("span", {
                          children: "Made by"
                        }), (0, Jp.jsx)(lp.d, {
                          playerSocialPreview: {
                            ...ai.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), xc && (0, Jp.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Jp.jsx)("span", {
                          children: "Made by"
                        }), (0, Jp.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== ai.favourites && (null !== ai.isFavourite || Mi && !Xi) && (0, Jp.jsx)(Pp.x, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== cc.current && (cc.current = !0, null !== ai.isFavourite)) {
                              const pp = (0, Si.o)(Ii.gameNameWithVariation);
                              let ip;
                              ai.isFavourite ? (ip = -1, Cp.b.unfavouriteGame(ap, pp).catch((pp => {
                                console.error("Failed to get unfavourite game", pp)
                              })).finally((() => {
                                cc.current = !1
                              }))) : (ip = 1, Cp.b.favouriteGame(ap, pp).catch((pp => {
                                console.error("Failed to get favourite game", pp)
                              })).finally((() => {
                                cc.current = !1
                              }))), fi((pp => ({
                                ...pp,
                                isFavourite: !pp.isFavourite
                              }))), fi((pp => ({
                                ...pp,
                                favourites: pp.favourites + ip
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (Mp = ai.isFavourite) && void 0 !== Mp && Mp,
                        disabled: null === ai.isFavourite,
                        className: yp()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === ai.isFavourite
                        })
                      }, null === ai.isFavourite ? "pending" : "known"), Mi && !xc && rp.featureFlags.useSocialFeatures && !Lc && (0, Jp.jsx)(mi.c, {
                        targetType: "customGame",
                        targetId: (0, Si.o)(Ii.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (ap.playerHasRank("developer") || ap.playerHasRank("admin") && Lc) && (0, Jp.jsxs)(Pp.o, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Zp((0, Yi.n)((0, Li.g)(Ii.gameNameWithVariation, !0)))
                        },
                        children: [(0, Jp.jsx)(Gp.d, {
                          name: "star-christmas"
                        }), " ", fp("studio:viewInStudio")]
                      }), Mi && ap.playerHasRank("developer") && (0, Jp.jsxs)(Pp.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, Ui.d)({
                            schematicId: (0, Si.o)(Ii.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Jp.jsx)(Gp.d, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), Mi && ap.playerHasRank("developer") && (0, Jp.jsxs)(Pp.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Oi.NotificationProvider.showCustomPopup({
                            body: () => (0, Jp.jsx)(ti, {
                              schematicId: (0, Si.o)(Ii.gameNameWithVariation),
                              gameName: ai.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Jp.jsx)(Gp.d, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (Ep = ai.countdownInformation) || void 0 === Ep ? void 0 : Ep.type) && (0, Jp.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Jp.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Jp.jsx)(mp.e, {
                            toTime: ai.countdownInformation.countdownToTime
                          })]
                        }), (0, Jp.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: ai.countdownInformation.previewText
                        })]
                      })]
                    }, xc ? "pending" : "shown"), (0, Jp.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Jp.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Jp.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [ai.title, " ", ai.variationTitle && (null === (Xp = Wi.c[Ii.gameNameWithVariation]) || void 0 === Xp ? void 0 : Xp.variationThumbnailUseBigRatio) && (0, Jp.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: ai.variationTitle
                          })]
                        })
                      }), ai.listedVariations && ai.listedVariations.length > 0 && (0, Jp.jsx)("div", {
                        className: yp()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (Qp = Wi.c[Ii.gameNameWithVariation]) || void 0 === Qp ? void 0 : Qp.variationThumbnailUseBigRatio
                        }),
                        children: ai.listedVariations.map((pp => {
                          var ip, cp;
                          return (0, Jp.jsxs)(bi, {
                            variation: pp,
                            isSelected: Ii.gameNameWithVariation === pp,
                            children: [null !== hp && (0, Jp.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Jp.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Jp.jsx)(Gp.d, {
                                  name: "user"
                                }), " ", (0, yi.O)(null !== (ip = hp[pp]) && void 0 !== ip ? ip : 0)]
                              })
                            }), (0, Jp.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: fp(null !== (cp = Wi.c[pp].variationTitle) && void 0 !== cp ? cp : Wi.c[pp].title)
                            }), (0, Jp.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, Dp.filterBadges)(Wi.c[pp].badges).map((pp => (0, Jp.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + pp.type,
                                children: (0, Jp.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Jp.jsx)(qp.b, {
                                    badge: pp
                                  })
                                })
                              }, pp.type)))
                            })]
                          }, pp)
                        }))
                      })]
                    }), ai.description && (0, Jp.jsx)("p", {
                      className: "GameInformationDescription",
                      children: ai.description
                    })]
                  }), (0, Jp.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Jp.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Sc && (0, Jp.jsx)(Ap.f, {
                        tooltipInner: (0, Jp.jsx)("div", {
                          children: fp("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Jp.jsx)(Pp.o, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            Wc(gi[0])
                          },
                          children: (0, Jp.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Jp.jsx)(Gp.d, {
                              name: "play"
                            }), " ", fp("homePage:rejoinLobbyNumber", {
                              number: gi[0]
                            })]
                          })
                        })
                      }), Sc && Ac]
                    }), (0, Jp.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Sc && Ac, (0, Jp.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Jp.jsx)(Gp.d, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Jp.jsx)(Up.c, {
                          className: "JoinLobbyInput",
                          placeholderText: fp("homePage:lobbyName"),
                          maxLength: yi.M,
                          domRef: ei,
                          onValueChange: pp => {
                            pp = (0, yi.rb)(pp), vi(pp)
                          },
                          onEnter: () => {
                            0 === wi.length ? Wc(gi[0]) : Wc(wi)
                          }
                        }), (0, Jp.jsx)(Pp.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === wi.length ? Wc(gi[0]) : Wc(wi)
                          },
                          children: fp("general:join")
                        })]
                      })]
                    }), (0, Jp.jsxs)("section", {
                      className: yp()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !Ic
                      }),
                      children: [(0, Jp.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Jp.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Jp.jsx)(Gp.d, {
                            name: "clock-rotate-left"
                          }), Ic && (0, Jp.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: fp("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Jp.jsx)(Ri.b, {
                        lobbyGroups: [gi, Gi],
                        onLobbyClick: pp => {
                          Wc(pp)
                        },
                        keyPrefix: Ii.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== Yc && (0, Jp.jsx)(Tp, {
                eventName: Yc
              })]
            }), vc && (0, Jp.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Jp.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Jp.jsxs)("div", {
                  className: yp()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === ai.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === ai.showWorldsInsteadOfCustomLobbies && (0, Jp.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Jp.jsx)(Gp.d, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Jp.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Jp.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), fp("game:worlds")]
                    })]
                  }), !1 === ai.showWorldsInsteadOfCustomLobbies && (0, Jp.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Jp.jsx)(Gp.d, {
                      name: "joystick"
                    }), (0, Jp.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Jp.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), fp("homePage:customLobbies")]
                    })]
                  }), (0, Jp.jsx)(Pp.S, {
                    onClick: () => {
                      ic("explore")
                    },
                    active: "explore" === pc,
                    children: fp("general:explore")
                  }), (0, Jp.jsx)(Pp.S, {
                    onClick: () => {
                      ic("favourite")
                    },
                    active: "favourite" === pc,
                    children: fp("homePage:favouriteLobbies")
                  }), (0, Jp.jsx)(Pp.S, {
                    onClick: () => {
                      ic("owned")
                    },
                    active: "owned" === pc,
                    children: fp("homePage:ownedLobbies")
                  })]
                }), (0, Jp.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Jp.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Jp.jsx)(di.e, {
                      label: "Create",
                      onClick: () => {
                        Oi.NotificationProvider.showCustomPopup({
                          body: pp => (0, Jp.jsx)(oi.CreateCustomLobby, {
                            gameNameWithVariation: Ii.gameNameWithVariation,
                            close: pp
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === ri && (0, Jp.jsx)(di.i, {}), !1 === ri && (0, Jp.jsx)(ki, {
                      customLobbies: zi,
                      favouriteLobbies: Ki,
                      toggleLikeLobby: yc,
                      showReport: rp.featureFlags.useSocialFeatures && "owned" !== pc
                    })]
                  }), tc]
                })]
              })
            })]
          }), !vc && tc]
        })
      })
    }

    function bi(pp) {
      let {
        variation: ip,
        isSelected: cp,
        children: Op
      } = pp;
      const Lp = Wi.c[ip],
        Dp = (0, Ip.k)(ip, (0, Ip.m)(Lp)),
        Ap = (0, op.d)(Dp),
        Pp = (0, Sp.f)([(0, Ip.i)(ip, (0, Ip.c)(Lp))]);
      return (0, Jp.jsxs)(Vp.LinkPreserveSearch, {
        to: (0, bp.u)(ip),
        replace: !0,
        className: yp()("GameInformationVariation", xp.g, {
          SelectedGameInformationVariation: cp
        }),
        onClick: pp => {
          if (!(0, ci.e)(pp)) return;
          const cp = (0, tp.g)(ip);
          Yp.h.setItem(cp, ip)
        },
        onMouseEnter: Pp.start,
        onMouseLeave: Pp.cancel,
        onFocus: Pp.start,
        onBlur: Pp.cancel,
        style: (0, xp.f)(Ap),
        children: [(0, Jp.jsx)(xp.c, {
          image: Ap
        }), Op]
      })
    }
  },
  6648: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => tp
    });
    var Op = cp(62),
      op = cp(1480),
      Ip = cp(1520),
      Sp = cp(3587),
      xp = cp(1141),
      Lp = cp(1361),
      Yp = cp(1387),
      Dp = cp(1060),
      Ap = cp(1049),
      Pp = cp.n(Ap),
      Wp = cp(6644),
      yp = cp(1112);

    function Up(pp) {
      let {
        info: ip,
        className: cp
      } = pp;
      const {
        statusText: Op,
        rowText: op
      } = (0, Wp.f)();
      return (0, yp.jsxs)("div", {
        className: Pp()("GameApprovalInfoDetails", cp),
        children: [(0, yp.jsxs)("div", {
          className: Pp()("GameApprovalInfoSummary", ip.overallPassed ? "Passed" : "Failed"),
          children: [(0, yp.jsx)(Dp.d, {
            name: ip.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, yp.jsx)("span", {
            children: Op(ip.status)
          })]
        }), ip.rows.length > 0 && (0, yp.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: ip.rows.map((pp => {
            const {
              label: ip,
              value: cp
            } = op(pp);
            return (0, yp.jsxs)("div", {
              className: Pp()("GameApprovalInfoRow", pp.passed ? "Passed" : "Failed"),
              children: [(0, yp.jsx)(Dp.d, {
                name: pp.passed ? "check" : "xmark"
              }), (0, yp.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, yp.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: ip
                }), null !== cp && (0, yp.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: cp
                })]
              })]
            }, pp.kind)
          }))
        })]
      })
    }
    var wp = cp(1201),
      vp = cp(1372);

    function tp(pp) {
      vp.NotificationProvider.showCustomPopup({
        body: () => (0, yp.jsx)(Hp, {
          ...pp
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function Hp(pp) {
      let {
        schematicId: ip,
        canOverride: cp,
        onApprovalChanged: Ap
      } = pp;
      const {
        t: Pp
      } = (0, wp.H)(), {
        userContext: Wp
      } = (0, xp.b)(), vp = (0, Sp.b)(), [tp, Hp] = (0, Op.useState)(null), [dp, ep] = (0, Op.useState)(null), [jp, kp] = (0, Op.useState)(!1), mp = (0, Op.useCallback)((() => {
        ep(null), Ip.b.getGameApprovalInfo(Wp, ip).then((pp => {
          vp.current && Hp(pp)
        })).catch((pp => {
          console.error("Failed to get game approval info", pp), vp.current && ep(Pp("studio:approvalLoadFailed"))
        }))
      }), [Wp, ip, vp, Pp]);
      (0, Op.useEffect)((() => {
        mp()
      }), [mp]);
      const Rp = pp => {
        jp || (kp(!0), Ip.b.setGameApproval(Wp, ip, pp).then((() => {
          null === Ap || void 0 === Ap || Ap(), vp.current && mp()
        })).catch((pp => {
          console.error("Failed to set game approval", pp)
        })).finally((() => {
          vp.current && kp(!1)
        })))
      };
      return (0, yp.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, yp.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: Pp("studio:approvalTitle")
        }), !tp && !dp && (0, yp.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, yp.jsx)(Lp.c, {})
        }), dp && (0, yp.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: dp
        }), tp && (0, yp.jsxs)(yp.Fragment, {
          children: [(0, yp.jsx)(Up, {
            info: tp
          }), cp && (0, yp.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== tp.manualOverride && (0, yp.jsx)(Yp.f, {
              tooltipInner: (0, yp.jsx)("div", {
                children: Pp("studio:approvalApproveTooltip")
              }),
              children: (0, yp.jsxs)(op.o, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Rp(!0)
                },
                disabled: jp,
                children: [(0, yp.jsx)(Dp.d, {
                  name: "check"
                }), " ", Pp("studio:approvalApprove")]
              })
            }), !1 !== tp.manualOverride && (0, yp.jsx)(Yp.f, {
              tooltipInner: (0, yp.jsx)("div", {
                children: Pp("studio:approvalDenyTooltip")
              }),
              children: (0, yp.jsxs)(op.K, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Rp(!1)
                },
                disabled: jp,
                children: [(0, yp.jsx)(Dp.d, {
                  name: "xmark"
                }), " ", Pp("studio:approvalDeny")]
              })
            }), null !== tp.manualOverride && (0, yp.jsx)(Yp.f, {
              tooltipInner: (0, yp.jsx)("div", {
                children: Pp("studio:approvalClearOverrideTooltip")
              }),
              children: (0, yp.jsxs)(op.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Rp(null)
                },
                disabled: jp,
                children: [(0, yp.jsx)(Dp.d, {
                  name: "arrows-rotate"
                }), " ", Pp("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6644: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp,
      f: () => Sp
    });
    var Op = cp(337),
      op = cp(1201);
    const Ip = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function Sp() {
      const {
        t: pp,
        selectedLanguage: ip
      } = (0, op.H)();
      return {
        statusText: ip => pp(Ip[ip]),
        rowText: cp => {
          const Ip = (pp, cp) => (0, Op.cb)((0, op.p)(ip.code, pp), 0, cp);
          switch (cp.kind) {
            case "ownerAccountAge": {
              const ip = cp.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: pp("studio:approvalAccountAgeLabel"),
                value: pp(ip, {
                  age: Ip(ip, cp.accountAgeMs),
                  days: cp.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: pp("studio:approvalSinceUnbannedLabel"), value: pp("studio:approvalSinceUnbannedValue", {
                  time: Ip("studio:approvalSinceUnbannedValue", cp.sinceMs),
                  days: cp.minDays
                })
              };
            case "reportHold": {
              const {
                detail: ip
              } = cp;
              if (null === ip) return {
                label: pp("studio:approvalUnderInvestigation"),
                value: null
              };
              const Op = ip.weightedReporters.toFixed(1),
                op = ip.threshold.toFixed(1),
                Sp = pp("studio:approvalReportHoldLabel", {
                  hours: ip.windowHours
                });
              if (null === ip.heldUntil) return {
                label: Sp,
                value: pp("studio:approvalReportHoldValue", {
                  weightedReporters: Op,
                  threshold: op
                })
              };
              const xp = "studio:approvalReportHoldValueHeld";
              return {
                label: Sp,
                value: pp(xp, {
                  weightedReporters: Op,
                  threshold: op,
                  time: Ip(xp, ip.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function xp(pp) {
      return null === pp.manualOverride && pp.rows.some((pp => "reportHold" === pp.kind && !pp.passed))
    }
  },
  34470: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip
    });
    var Op = cp(62),
      op = cp(3546);

    function Ip() {
      const [pp, ip] = (0, Op.useState)(!1);
      return (0, Op.useLayoutEffect)((() => {
        let pp = !0;
        return (0, op.h)().then((() => {
          pp && ip(!0)
        })), () => {
          pp = !1
        }
      }), []), pp
    }
  },
  9049: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp
    });
    var Op = cp(1356),
      op = cp(1234),
      Ip = cp(640);

    function Sp(pp) {
      return pp = function(pp, ip) {
        var cp;
        const Op = new URLSearchParams(ip),
          op = Op.get("lobby"),
          Ip = Op.get("vm"),
          Sp = null !== (cp = op) && void 0 !== cp ? cp : pp.lobbyName,
          xp = null !== Ip && void 0 !== Ip ? Ip : pp.directJoinVmUrl;
        if (Sp === pp.lobbyName && xp === pp.directJoinVmUrl) return pp;
        return {
          ...pp,
          lobbyName: Sp,
          directJoinVmUrl: xp
        }
      }(pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), pp = function(pp) {
        if ((0, Ip.G)(pp.directJoinVmUrl)) return pp;
        const ip = (0, op.Z)(pp.directJoinVmUrl);
        null === ip && (pp.directJoinVmUrl = void 0);
        return pp
      }(pp = function(pp) {
        if ((0, Ip.G)(pp.gameNameWithVariation)) return pp;
        return pp.gameNameWithVariation = (0, Op.m)(pp.gameNameWithVariation), pp
      }(pp))
    }
  },
  9046: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip,
      g: () => op
    });
    let Op = !1;

    function op() {
      Op = !0
    }

    function Ip() {
      return Op
    }
  },
  36569: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      e: () => Op
    });
    const Op = "skyblockSkills",
      op = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);