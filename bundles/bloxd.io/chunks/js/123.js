export const id = 123;
export const ids = [123, 401];
export const modules = {
  36555: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => Fe
    });
    var Ot = Vt(377),
      qt = Vt(3564),
      Dt = Vt(3613),
      mt = Vt(3606),
      dt = Vt(3597),
      jt = Vt(1286),
      Ht = Vt(39),
      Xt = Vt(1826),
      Qt = Vt(1464),
      lt = Vt(1556),
      Et = Vt(1140),
      ft = Vt.n(Et),
      wt = Vt(1770),
      yt = Vt(63),
      Nt = Vt(83),
      Mt = Vt(2427),
      bt = Vt(1429),
      Jt = Vt(1709),
      Ct = Vt(1218),
      ut = Vt(3482),
      Kt = Vt(4689),
      ht = Vt(3551),
      vt = Vt(2001),
      Wt = Vt(3561),
      St = Vt(1837),
      ct = Vt(1600),
      Rt = Vt(2232),
      It = Vt(1436),
      Pt = Vt(2693),
      Zt = Vt(5186),
      Lt = Vt(1188);
    const Ft = 15e3,
      kt = 2500;

    function Gt(tt) {
      var et;
      let {
        eventName: Vt
      } = tt;
      const {
        t: Ot
      } = (0, jt.H)(), qt = St.g[Vt], [Dt, mt] = (0, yt.useState)((() => Date.now() >= qt.endsAt.getTime())), [dt, Ht] = (0, yt.useState)("overall"), Xt = function(tt, et) {
        const {
          userContext: Vt,
          isUserContextUpdating: Ot
        } = (0, Ct.d)(), qt = `${tt}:${et}`, [Dt, mt] = (0, yt.useState)({
          requestKey: qt,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, yt.useEffect)((() => {
          if (Ot) return;
          let Dt, dt = !1;
          const jt = async () => {
            if ("visible" === document.visibilityState) try {
              const Ot = await ct.e.getGameEventLeaderboard(Vt, {
                event: tt,
                scope: et
              });
              dt || mt({
                requestKey: qt,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Ot
                }
              })
            } catch {
              dt || mt((tt => tt.requestKey === qt && "loaded" === tt.leaderboard.status ? tt : {
                requestKey: qt,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            dt || (Dt = setTimeout(jt, Ft))
          };
          return jt(), () => {
            dt = !0, clearTimeout(Dt)
          }
        }), [tt, et, qt, Vt, Ot]), Dt.requestKey === qt ? Dt.leaderboard : {
          status: "loading"
        }
      }(Vt, dt), Qt = function(tt) {
        const et = (0, yt.useRef)(null),
          Vt = (0, yt.useRef)(0),
          Ot = (0, yt.useRef)(),
          [qt, Dt] = (0, yt.useState)({});
        return (0, yt.useEffect)((() => {
          const qt = null === tt || void 0 === tt ? void 0 : tt.entries;
          if (!qt) return;
          const mt = new Map(qt.map((tt => [tt.player.name, tt.value]))),
            dt = et.current;
          if (et.current = mt, null === dt) return;
          const jt = {};
          for (const [tt, et] of mt) {
            const Ot = dt.get(tt);
            void 0 !== Ot && et > Ot && (jt[tt] = {
              amount: et - Ot,
              key: Vt.current++
            })
          }
          0 !== Object.keys(jt).length && (Dt(jt), clearTimeout(Ot.current), Ot.current = setTimeout((() => {
            Dt({})
          }), kt))
        }), [tt]), (0, yt.useEffect)((() => () => {
          clearTimeout(Ot.current)
        }), []), qt
      }("loaded" === Xt.status ? Xt.leaderboard : null), lt = function(tt) {
        const [et, Vt] = (0, yt.useState)(null), Ot = "loaded" === tt.status ? tt.leaderboard.goalProgress : void 0;
        return (0, yt.useEffect)((() => {
          Ot && Vt(Ot)
        }), [Ot]), et
      }(Xt), Et = Rt.f[`profileEffect_${qt.prizePack}`];
      if (Dt) return null;
      const wt = "loaded" === Xt.status ? Xt.leaderboard : null,
        Nt = null !== (et = null === wt || void 0 === wt ? void 0 : wt.entries) && void 0 !== et ? et : null,
        Mt = null !== wt && void 0 !== wt && wt.own && null !== Nt && !Nt.some((tt => tt.isOwn)) ? wt.own : null;
      return (0, Lt.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Lt.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Lt.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Lt.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Lt.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Lt.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Ot("gameEvents:live")]
              }), (0, Lt.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Ot("gameEvents:endsIn"), (0, Lt.jsx)(ht.c, {
                  toTime: qt.endsAt,
                  onReachEndOfCountdown: () => {
                    mt(!0)
                  }
                })]
              })]
            }), (0, Lt.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Ot(qt.titleKey)
            }), (0, Lt.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Lt.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [Et && (0, Lt.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Lt.jsx)(Et, {})
                }), (0, Lt.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Lt.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Ot("gameEvents:prize")
                  }), (0, Lt.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Ot(qt.prizeNameKey)
                  })]
                })]
              }), (0, Lt.jsx)(zt, {
                event: qt,
                progress: lt
              })]
            })]
          }), (0, Lt.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Lt.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Lt.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Ot(qt.leaderboard.titleKey)
              }), (0, Lt.jsx)(Zt.c, {
                ariaLabel: Ot("gameEvents:leaderboardScope"),
                options: St.e.map((tt => ({
                  value: tt,
                  label: Ot(`gameEvents:${tt}Scope`)
                }))),
                value: dt,
                onChange: Ht
              })]
            }), "loading" === Xt.status && (0, Lt.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Lt.jsx)(It.b, {})
            }), ("unavailable" === Xt.status || "loaded" === Xt.status && null === Nt) && (0, Lt.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Ot("gameEvents:leaderboardUnavailable")
            }), null !== Nt && 0 === Nt.length && (0, Lt.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Ot("friends" === dt ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== Nt && Nt.length > 0 && (0, Lt.jsx)("ol", {
              className: "GameEventPanelRows",
              children: Nt.map((tt => {
                const et = Qt[tt.player.name];
                return (0, Lt.jsxs)("li", {
                  className: ft()("GameEventPanelRow", {
                    GameEventPanelRowOwn: tt.isOwn,
                    GameEventPanelRowTop: tt.rank <= 3
                  }),
                  children: [(0, Lt.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", tt.rank]
                  }), (0, Lt.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Lt.jsx)(Pt.f, {
                      playerSocialPreview: {
                        ...tt.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== et && (0, Lt.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", et.amount.toLocaleString()]
                  }, et.key), (0, Lt.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: tt.value.toLocaleString()
                  })]
                }, tt.player.name)
              }))
            }), Mt && (0, Lt.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Lt.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", Mt.rank.toLocaleString()]
              }), (0, Lt.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Ot("gameEvents:yourPlace")
              }), (0, Lt.jsx)("span", {
                className: "GameEventPanelScore",
                children: Mt.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function zt(tt) {
      let {
        event: et,
        progress: Vt
      } = tt;
      const {
        t: Ot
      } = (0, jt.H)(), qt = null !== Vt && et.prizeGoals.some(((tt, et) => Vt[et] >= tt.target));
      return (0, Lt.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Lt.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Ot(qt ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Lt.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: et.prizeGoals.map(((tt, et) => {
            const qt = null === Vt ? null : Math.min(Vt[et], tt.target);
            return (0, Lt.jsxs)(yt.Fragment, {
              children: [et > 0 && (0, Lt.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Ot("gameEvents:goalsOr")
              }), (0, Lt.jsxs)("div", {
                className: ft()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: qt === tt.target
                }),
                children: [(0, Lt.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Ot(tt.labelKey)
                }), (0, Lt.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Lt.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== qt && void 0 !== qt ? qt : 0) / tt.target * 100 + "%"
                    }
                  }), null !== qt && (0, Lt.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [qt.toLocaleString(), " / ", tt.target.toLocaleString()]
                  })]
                })]
              })]
            }, tt.board)
          }))
        })]
      })
    }
    var ot = Vt(1641),
      rt = Vt(1687),
      Ut = Vt(1130),
      At = Vt(815),
      it = Vt(3544);

    function Yt(tt) {
      let {
        gameNameWithVariation: et
      } = tt;
      const Vt = (0, ot.A)(et),
        [Ot, qt] = (0, yt.useState)(null);
      if ((0, yt.useEffect)((() => {
          if (!Vt) return;
          let tt = !0;
          return (0, rt.j)(Vt).then((et => {
            tt && qt(et)
          })).catch((tt => {
            console.error(`Failed to load the page copy for ${Vt.name}`, tt)
          })), () => {
            tt = !1
          }
        }), [Vt]), !Vt || !Ot || Ot.name !== Vt.name) return null;
      const Dt = (0, rt.f)(Ot),
        mt = new Set((0, Ut.c)((0, At.j)()).map((tt => (0, ot.u)(tt)))),
        dt = Ot.similarGames.filter((tt => mt.has((0, ot.u)(tt))));
      return (0, Lt.jsx)("div", {
        className: "GamePageContent",
        children: (0, Lt.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Lt.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Lt.jsx)("h2", {
              children: Dt.whatIs
            }), Ot.whatIs.map((tt => (0, Lt.jsx)("p", {
              children: tt
            }, tt)))]
          }), (0, Lt.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Lt.jsx)("h2", {
              children: Dt.howToPlay
            }), Ot.howToPlay.map((tt => (0, Lt.jsx)("p", {
              children: tt
            }, tt)))]
          }), (0, Lt.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Lt.jsx)("h2", {
              children: Dt.features
            }), (0, Lt.jsx)("ul", {
              children: Ot.features.map((tt => (0, Lt.jsx)("li", {
                children: tt
              }, tt)))
            })]
          }), (0, Lt.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Lt.jsx)("h2", {
              children: Dt.tips
            }), (0, Lt.jsx)("ul", {
              children: Ot.tips.map((tt => (0, Lt.jsx)("li", {
                children: tt
              }, tt)))
            })]
          }), (0, Lt.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Lt.jsx)("h2", {
              children: Dt.faq
            }), Ot.faq.map((tt => {
              let {
                question: et,
                answer: Vt
              } = tt;
              return (0, Lt.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Lt.jsx)("h3", {
                  children: et
                }), (0, Lt.jsx)("p", {
                  children: Vt
                })]
              }, et)
            }))]
          }), dt.length > 0 && (0, Lt.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Lt.jsx)("h2", {
              children: Dt.similarGames
            }), (0, Lt.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: dt.map((tt => (0, Lt.jsx)("li", {
                children: (0, Lt.jsx)(it.h, {
                  source: {
                    type: "game",
                    gameNameWithVariation: tt
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, tt)))
            })]
          })]
        })
      })
    }
    var Bt = Vt(1152),
      pt = Vt(106),
      xt = Vt(1223),
      Tt = Vt(34423),
      gt = Vt(1750),
      st = Vt(1623),
      nt = Vt(1613),
      te = Vt(1700),
      ee = Vt(1566),
      Ve = Vt(1450),
      Oe = Vt(36558),
      qe = Vt(1316),
      De = Vt(1103),
      me = Vt(391),
      de = Vt(1117),
      je = Vt(1633),
      He = Vt(9148),
      Xe = Vt(26),
      Qe = Vt(2602),
      le = Vt(839),
      Ee = Vt(1308),
      fe = Vt(6700),
      we = Vt(3555);

    function ye(tt) {
      let {
        preview: et,
        isBroken: Vt
      } = tt;
      const Ot = null === et ? null : (0, Dt.h)(et, "small"),
        mt = (0, qt.g)(null !== Ot && void 0 !== Ot ? Ot : Dt.u);
      return null === et ? (0, Lt.jsx)("div", {
        className: ft()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: Vt
        }),
        children: (0, Lt.jsx)(Bt.b, {
          name: Vt ? "triangle-exclamation" : "star"
        })
      }) : (0, Lt.jsx)("div", {
        className: ft()("FeaturedGamesPopupSlotThumbnail", dt.j),
        style: (0, dt.h)(mt),
        role: "img",
        "aria-label": et.name,
        children: (0, Lt.jsx)(dt.e, {
          image: mt
        })
      })
    }

    function Ne(tt) {
      let {
        schematicId: et,
        gameName: Vt
      } = tt;
      const {
        userContext: qt
      } = (0, Ct.d)(), Dt = (0, we.b)(), [mt, dt] = (0, yt.useState)(null), [jt, Ht] = (0, yt.useState)(null), [Xt, Qt] = (0, yt.useState)(!1), Et = (0, yt.useCallback)((() => {
        Ht(null), ct.e.getFeaturedGames(qt).then((tt => {
          Dt.current && dt(tt.slots)
        })).catch((tt => {
          console.error("Failed to get featured games", tt), Dt.current && Ht("Failed to load featured games")
        }))
      }), [qt, Dt]);
      (0, yt.useEffect)((() => {
        Et()
      }), [Et]);
      const ft = (tt, et) => {
        Xt || (Qt(!0), ct.e.setFeaturedGame(qt, tt, et).then((() => {
          Dt.current && Et()
        })).catch((tt => {
          console.error("Failed to set featured game", tt), Dt.current && Ht("Failed to update the featured slot")
        })).finally((() => {
          Dt.current && Qt(!1)
        })))
      };
      return (0, Lt.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Lt.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !mt && !jt && (0, Lt.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Lt.jsx)(It.b, {})
        }), jt && (0, Lt.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: jt
        }), mt && (0, Lt.jsxs)(Lt.Fragment, {
          children: [(0, Lt.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: mt.map((tt => {
              const Vt = tt.schematicId === et,
                qt = null === tt.schematicId,
                {
                  categoryGroup: Dt
                } = Ot.E[tt.slotId];
              return (0, Lt.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Lt.jsx)(ye, {
                  preview: tt.preview,
                  isBroken: !qt
                }), (0, Lt.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Lt.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Ot._)(Dt), " \xb7 position", " ", (0, Ot.F)(tt.slotId, Ot.Ab) + 1, " of", " ", (0, Ot.zb)(Dt, Ot.Ab)]
                  }), qt && (0, Lt.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !qt && null !== tt.preview && (0, Lt.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: tt.preview.name
                  }), !qt && null === tt.preview && (0, Lt.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Lt.jsx)(Bt.b, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Lt.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [qt && (0, Lt.jsxs)(lt.s, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      ft(tt.slotId, et)
                    },
                    disabled: Xt,
                    children: [(0, Lt.jsx)(Bt.b, {
                      name: "star"
                    }), " Feature here"]
                  }), !qt && !Vt && (0, Lt.jsxs)(lt.Q, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      ft(tt.slotId, et)
                    },
                    disabled: Xt,
                    children: [(0, Lt.jsx)(Bt.b, {
                      name: "star"
                    }), " Replace"]
                  }), !qt && (0, Lt.jsxs)(lt.G, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      ft(tt.slotId, null)
                    },
                    disabled: Xt,
                    children: [(0, Lt.jsx)(Bt.b, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, tt.slotId)
            }))
          }), (0, Lt.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var ae = Vt(4823),
      Me = Vt(4732),
      be = Vt(3510);
    const Je = 8,
      Ce = 12;

    function ue(tt) {
      let {
        customLobbies: et,
        favouriteLobbies: Vt,
        toggleLikeLobby: Ot,
        showReport: qt
      } = tt;
      const [Dt, mt] = (0, yt.useState)(Je);
      return (0, yt.useEffect)((() => {
        if (Dt >= et.length) return;
        let tt = !0;
        return (0, be.e)().then((() => {
          tt && mt(Dt + Ce)
        })), () => {
          tt = !1
        }
      }), [Dt, et.length]), (0, Lt.jsx)(Lt.Fragment, {
        children: et.slice(0, Dt).map((tt => (0, Lt.jsx)(Me.e, {
          customLobby: tt,
          favouriteLobbies: Vt,
          toggleLikeLobby: Ot,
          showReport: qt
        }, tt.name)))
      })
    }
    var Ke = Vt(4737),
      he = Vt(4754),
      ve = Vt(4709),
      We = Vt(3634),
      Se = Vt(9140),
      ce = Vt(246);
    const Re = {
      skyblock: [Vt(36593).e]
    };
    var Ie = Vt(710);
    const Pe = {
      listedVariations: null,
      backgroundImage: Dt.u,
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

    function Ze(tt, et) {
      const Vt = le.d[tt.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, Dt.h)(tt, "large"),
        badges: [],
        category: tt.gameCategory,
        title: void 0 !== (null === Vt || void 0 === Vt ? void 0 : Vt.title) ? et(Vt.title) : tt.name,
        variationTitle: null,
        description: void 0 !== (null === Vt || void 0 === Vt ? void 0 : Vt.description) ? et(Vt.description) : tt.description,
        ownerSocialPreviewWithoutLocation: "owner" in tt ? tt.owner : null,
        ccu: tt.ccu,
        favourites: tt.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in tt ? tt.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function Le(tt) {
      var et, Vt, Ot;
      return null !== (et = null !== (Vt = (0, ce.k)() ? function(tt) {
        for (const [et, Vt] of Object.entries(Re)) {
          const Ot = [et, ...Vt.map((tt => (0, me._b)(et, tt)))];
          if (Ot.includes(tt)) return Ot
        }
        return null
      }(tt) : null) && void 0 !== Vt ? Vt : null === (Ot = le.c[tt]) || void 0 === Ot ? void 0 : Ot.listedVariations) && void 0 !== et ? et : null
    }

    function Fe() {
      const {
        gameNameWithVariation: tt
      } = (0, st.B)();
      if ((0, yt.useEffect)(We.q, []), tt && (0, qe.m)(tt)) return (0, Lt.jsx)(ke, {
        urlId: tt
      }, tt);
      const et = tt && (0, De.k)(tt) ? tt : "firstParty";
      return (0, Lt.jsx)(Ge, {}, et)
    }

    function ke(tt) {
      let {
        urlId: et
      } = tt;
      const {
        userContext: Vt,
        isUserContextUpdating: Ot
      } = (0, Ct.d)(), qt = (0, yt.useMemo)((() => (0, gt.h)(et)), [et]);
      (0, yt.useMemo)((() => {
        if (null === qt) return;
        const tt = xt.userContextManager.peekCurrentUserContext();
        (null !== tt ? ct.e.getGame(tt, qt.schematicId) : xt.userContextManager.getCurrentUserContext().then((tt => ct.e.getGame(tt, qt.schematicId)))).catch((tt => {
          console.error(`Failed to get the custom game ${qt.schematicId}`, tt), (0, gt.g)(et)
        }))
      }), [qt, et]);
      const [Dt, mt] = (0, yt.useState)(null), dt = (0, Tt.e)();
      (0, yt.useEffect)((() => {
        if (null !== qt || Ot) return;
        let tt = !0;
        return ct.e.getGameByUrlId(Vt, et).then((Vt => {
          tt && mt({
            urlId: et,
            game: Vt
          })
        })).catch((Vt => {
          console.error(`Failed to find the custom game with urlId ${et}`, Vt), tt && (0, nt.navigateToHomePage)()
        })), () => {
          tt = !1
        }
      }), [et, qt, Ot, Vt]);
      const jt = null !== qt && void 0 !== qt ? qt : (null === Dt || void 0 === Dt ? void 0 : Dt.urlId) === et ? Dt.game : null;
      return null === jt ? (0, Lt.jsx)(It.b, {}) : dt ? (0, Lt.jsx)(Ge, {
        gameNameWithVariation: (0, De.u)(jt.schematicId),
        knownCustomGame: jt
      }, jt.schematicId) : null
    }

    function Ge(tt) {
      var et, Vt, mt, Et, St, Rt, It, Zt;
      let {
        gameNameWithVariation: Ft,
        knownCustomGame: kt = null
      } = tt;
      const {
        t: zt
      } = (0, jt.H)();
      (0, Qe.g)();
      const rt = (0, Qe.m)(),
        {
          userContext: Ut,
          isUserContextUpdating: At
        } = (0, Ct.d)(),
        it = (0, ve.c)(),
        xt = (0, nt.useNavigatePreserveSearch)(),
        Tt = (0, st.B)(),
        gt = (0, yt.useMemo)((() => Ft ? {
          gameNameWithVariation: Ft
        } : Tt), [Ft, Tt]),
        ee = (0, He.b)(gt),
        qe = (0, yt.useMemo)((() => {
          const tt = function(tt) {
            var et, Vt;
            const Ot = Le(tt);
            if (!Ot || 0 === Ot.length || Ot.includes(tt)) return tt;
            const qt = Ht.e.getItem((0, Mt.j)(tt));
            if (qt && Ot.includes(qt)) return qt;
            return null !== (et = null === (Vt = le.c[tt]) || void 0 === Vt ? void 0 : Vt.defaultListedVariation) && void 0 !== et ? et : Ot[0]
          }(ee.gameNameWithVariation);
          return tt === ee.gameNameWithVariation ? ee : {
            ...ee,
            gameNameWithVariation: tt
          }
        }), [ee]);
      (0, yt.useEffect)((() => {
        const tt = ee.gameNameWithVariation;
        qe.gameNameWithVariation !== tt && tt !== (0, me.bc)(tt) && xt((0, ot.v)(qe.gameNameWithVariation), {
          replace: !0
        })
      }), [qe.gameNameWithVariation, ee.gameNameWithVariation, xt]);
      const [we, ye] = (0, yt.useState)(""), be = yt.useRef(null), [Je, Ce] = (0, yt.useState)(), We = (0, De.k)(qe.gameNameWithVariation), ce = (0, yt.useMemo)((() => We ? null : function(tt, et, Vt) {
        var Ot, qt;
        const mt = le.c[tt];
        return (0, Ie.B)(mt) ? null : {
          listedVariations: Le(tt),
          backgroundImage: (0, Dt.o)(tt, (0, Dt.d)(mt)),
          badges: (0, Xt.filterBadges)(mt.badges),
          category: mt.type,
          title: Vt(mt.title),
          variationTitle: mt.variationTitle ? Vt(mt.variationTitle) : null,
          description: Vt(mt.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== et ? null !== (Ot = et[tt]) && void 0 !== Ot ? Ot : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: mt.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: mt.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (qt = mt.canCreateCustomLobbies) || void 0 === qt || qt,
          countdownInformation: (0, Mt.i)(tt)
        }
      }(qe.gameNameWithVariation, rt, zt)), [We, qe.gameNameWithVariation, rt, zt]), [Re, Fe] = (0, yt.useState)(!1), [ke, Ge] = (0, yt.useState)((() => kt ? Ze(kt, zt) : Pe)), oe = null !== ce && void 0 !== ce ? ce : ke, [re] = (0, yt.useState)(oe === Pe), Ue = (0, qt.g)(oe.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: Ae,
        recentlyPlayedCustomLobbies: ie
      } = (0, yt.useMemo)((() => function(tt, et, Vt, Ot) {
        var qt;
        const Dt = tt => {
            const Vt = (0, De.p)(tt),
              Ot = et.find((et => "custom" === et.type ? et.schematicId === Vt : et.gameNameWithVariation === tt));
            return Ot ? [...Ot.recentLobbies] : []
          },
          mt = (0, Xt.getRecentGameNameWithVariationLobbiesKey)(tt),
          dt = null !== (qt = Ht.e.getItem(mt)) && void 0 !== qt ? qt : [],
          jt = [...Dt(tt), ...dt],
          Qt = [];
        for (const Ht of jt)(0, Ee.P)(Ht) && !Qt.includes(Ht) && Qt.push(Ht);
        let lt = jt;
        if (Vt) {
          const tt = Dt("classic_worlds"),
            et = jt.filter((et => !tt.includes(et)));
          lt = [...tt, ...et]
        }
        const Et = [],
          ft = !1 === Ot ? [] : lt;
        for (const Ht of ft)(0, Ee.P)(Ht) || Et.includes(Ht) || Et.push(Ht);
        return {
          recentlyPlayedPublicLobbies: Qt,
          recentlyPlayedCustomLobbies: Et
        }
      }(qe.gameNameWithVariation, it, oe.showWorldsInsteadOfCustomLobbies, oe.canCreateCustomLobbies)), [qe.gameNameWithVariation, it, oe.showWorldsInsteadOfCustomLobbies, oe.canCreateCustomLobbies]), [Ye, Be] = (0, yt.useState)(!0), [pe, xe] = (0, yt.useState)([]), [Te, ge] = (0, yt.useState)(null), [se, ne] = (0, yt.useState)("explore"), tV = (0, yt.useRef)(!1), eV = (0, yt.useCallback)((tt => {
        (0, Nt.unstable_batchedUpdates)((() => {
          Ce(tt), Ge((et => ({
            ...Ze(tt, zt),
            isFavourite: et.isFavourite
          })))
        }))
      }), [zt]);
      (0, yt.useEffect)((() => {
        null === Xe.b.get("gameEntrySource") && (0, Xe.i)("gameInformationPageDirect")
      }), []);
      const VV = (0, yt.useRef)(null);
      (0, yt.useEffect)((() => {
        const tt = tt => {
            VV.current = tt.target instanceof Element ? tt.target.closest("a, button") : null
          },
          et = tt => {
            "Tab" === tt.key && (VV.current = null)
          };
        return document.addEventListener("pointerdown", tt, !0), document.addEventListener("keydown", et, !0), () => {
          document.removeEventListener("pointerdown", tt, !0), document.removeEventListener("keydown", et, !0)
        }
      }), []), (0, ut.c)("Enter", (tt => {
        const et = tt.target instanceof Element ? tt.target : null;
        if (tt.defaultPrevented || null !== et && void 0 !== et && et.closest("input, textarea, select")) return;
        const Vt = null === et || void 0 === et ? void 0 : et.closest("a, button");
        Vt && Vt !== VV.current || (tt.preventDefault(), QV())
      })), (0, Kt.b)(nt.navigateToHomePage);
      const OV = Ae.length > 0 || ie.length > 0,
        qV = !oe.useRejoinLastLobbyButton || 0 === Ae.length,
        DV = We && null === oe.ownerSocialPreviewWithoutLocation,
        mV = Ut.getPlayerName() === (null === Je || void 0 === Je || null === (et = Je.owner) || void 0 === et ? void 0 : et.name),
        dV = null !== (Vt = null === (mt = oe.badges.find((tt => "event" === tt.type))) || void 0 === mt ? void 0 : mt.event) && void 0 !== Vt ? Vt : null,
        jV = qV ? lt.m : lt.f,
        HV = (0, Lt.jsx)(Qt.g, {
          tooltipInner: (0, Lt.jsx)("div", {
            children: zt("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Lt.jsx)(jV, {
            className: "GameInformationButton",
            padDefaultFocus: qV,
            showPress: !0,
            onClick: () => {
              QV()
            },
            children: (0, Lt.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [qV && (0, Lt.jsxs)(Lt.Fragment, {
                children: [(0, Lt.jsx)(Bt.b, {
                  name: "play"
                }), " "]
              }), zt("homePage:quickPlay")]
            })
          })
        });
      (0, yt.useEffect)((() => {
        if (!We || At) return;
        let tt = !0;
        const et = (0, De.p)(qe.gameNameWithVariation);
        return ct.e.getGame(Ut, et).then((et => {
          tt && eV(et)
        })).catch((et => {
          console.error("Failed to get Custom Game information", et), tt && (0, nt.navigateToHomePage)()
        })), ct.e.getFavouriteGames(Ut).then((Vt => {
          tt && Ge((tt => ({
            ...tt,
            isFavourite: Vt.includes(et)
          })))
        })).catch((et => {
          console.error("Failed to get favourite games", et), tt && Fe(!0)
        })), () => {
          tt = !1
        }
      }), [We, At, qe.gameNameWithVariation, eV, Ut]);
      const XV = !We && null === ce;

      function QV(tt) {
        (0, Se.d)(), xt((0, bt.c)(qe.gameNameWithVariation, tt))
      }(0, yt.useEffect)((() => {
        XV && (0, nt.navigateToHomePage)()
      }), [XV]), (0, yt.useEffect)((() => {
        if (!1 === oe.canCreateCustomLobbies) return;
        let tt = !0;
        return null !== oe.showWorldsInsteadOfCustomLobbies && !1 === At && (Be(!0), ct.e.getFavouriteLobbies(Ut).then((tt => {
          ge(tt)
        })), ct.e.getOpenCustomLobbies(Ut, {
          gameNameWithVariation: oe.showWorldsInsteadOfCustomLobbies ? "classic" : qe.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === se,
          onlyFavouriteLobbies: "favourite" === se
        }).then((et => {
          tt && (0, Nt.unstable_batchedUpdates)((() => {
            xe(et), Be(!1)
          }))
        })).catch((et => {
          console.error("Failed to get open custom lobbies", et), tt && Be(!1)
        }))), () => {
          tt = !1
        }
      }), [At, qe, se, oe.showWorldsInsteadOfCustomLobbies, oe.canCreateCustomLobbies, Ut]);
      const lV = (0, yt.useCallback)((async tt => {
          try {
            if (!Te) return;
            Te.includes(tt) ? (ct.e.unfavouriteLobby(Ut, tt), ge(Te.filter((et => et !== tt)))) : (ct.e.favouriteLobby(Ut, tt).catch((tt => {
              console.error("Failed to favourite lobby", tt)
            })), ge([...Te, tt]))
          } catch (et) {
            console.error("Failed to like lobby", et)
          }
        }), [Ut, Te]),
        EV = (null === Je || void 0 === Je ? void 0 : Je.schematicId) === (0, De.p)(ee.gameNameWithVariation) ? Je : null,
        fV = EV && (0, ot.D)(ee.gameNameWithVariation, (tt => zt(tt)), EV);
      (0, te.e)(EV && (0, ot.v)(ee.gameNameWithVariation, EV));
      const wV = pt.featureFlags.canUseCustomLobbies && !0 === oe.canCreateCustomLobbies,
        yV = (0, Lt.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Lt.jsx)(Yt, {
            gameNameWithVariation: qe.gameNameWithVariation
          })
        });
      return (0, Lt.jsx)(Lt.Fragment, {
        children: (0, Lt.jsxs)("article", {
          className: ft()("GameInformation", {
            GameInformationFadeIn: re,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (Et = oe.countdownInformation) || void 0 === Et ? void 0 : Et.type)
          }),
          children: [fV && (0, Lt.jsx)(Jt.c, {
            meta: fV
          }), (0, Lt.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Lt.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Lt.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Lt.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Lt.jsx)("div", {
                  className: ft()("GameInformationTopBackgroundImage", dt.j),
                  style: (0, dt.h)(Ue),
                  children: (0, Lt.jsx)(dt.e, {
                    image: Ue
                  })
                })]
              }), (0, Lt.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Lt.jsx)(ae.b, {}), (0, Lt.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Lt.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Lt.jsxs)("div", {
                      className: ft()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: DV
                      }),
                      children: [oe.badges.map((tt => (0, Lt.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${tt.type}`,
                        children: (0, Lt.jsx)(Wt.e, {
                          badge: tt
                        })
                      }, tt.type))), We && (0, Lt.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Lt.jsx)(vt.e, {
                          text: (0, Ot.U)({
                            type: "playerCrafted"
                          })
                        })
                      }), oe.category && (0, Lt.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Lt.jsx)(vt.e, {
                          text: [{
                            str: (0, Ot.Y)(oe.category).toUpperCase()
                          }]
                        })
                      }), null !== oe.ccu && (0, Lt.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Lt.jsx)(Bt.b, {
                          name: "user"
                        }), (0, Ee.S)(oe.ccu), " online"]
                      }), null !== oe.ownerSocialPreviewWithoutLocation && (0, Lt.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Lt.jsx)("span", {
                          children: "Made by"
                        }), (0, Lt.jsx)(Pt.f, {
                          playerSocialPreview: {
                            ...oe.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), DV && (0, Lt.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Lt.jsx)("span", {
                          children: "Made by"
                        }), (0, Lt.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== oe.favourites && (null !== oe.isFavourite || We && !Re) && (0, Lt.jsx)(lt.t, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== tV.current && (tV.current = !0, null !== oe.isFavourite)) {
                              const tt = (0, De.p)(qe.gameNameWithVariation);
                              let et;
                              oe.isFavourite ? (et = -1, ct.e.unfavouriteGame(Ut, tt).catch((tt => {
                                console.error("Failed to get unfavourite game", tt)
                              })).finally((() => {
                                tV.current = !1
                              }))) : (et = 1, ct.e.favouriteGame(Ut, tt).catch((tt => {
                                console.error("Failed to get favourite game", tt)
                              })).finally((() => {
                                tV.current = !1
                              }))), Ge((tt => ({
                                ...tt,
                                isFavourite: !tt.isFavourite
                              }))), Ge((tt => ({
                                ...tt,
                                favourites: tt.favourites + et
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (St = oe.isFavourite) && void 0 !== St && St,
                        disabled: null === oe.isFavourite,
                        className: ft()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === oe.isFavourite
                        })
                      }, null === oe.isFavourite ? "pending" : "known"), We && !DV && pt.featureFlags.useSocialFeatures && !mV && (0, Lt.jsx)(Ke.c, {
                        targetType: "customGame",
                        targetId: (0, De.p)(qe.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (Ut.playerHasRank("developer") || Ut.playerHasRank("admin") && mV) && (0, Lt.jsxs)(lt.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          xt((0, je.k)((0, de.i)(qe.gameNameWithVariation, !0)))
                        },
                        children: [(0, Lt.jsx)(Bt.b, {
                          name: "star-christmas"
                        }), " ", zt("studio:viewInStudio")]
                      }), We && Ut.playerHasRank("developer") && (0, Lt.jsxs)(lt.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, fe.d)({
                            schematicId: (0, De.p)(qe.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Lt.jsx)(Bt.b, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), We && Ut.playerHasRank("developer") && (0, Lt.jsxs)(lt.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Ve.NotificationProvider.showCustomPopup({
                            body: () => (0, Lt.jsx)(Ne, {
                              schematicId: (0, De.p)(qe.gameNameWithVariation),
                              gameName: oe.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Lt.jsx)(Bt.b, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (Rt = oe.countdownInformation) || void 0 === Rt ? void 0 : Rt.type) && (0, Lt.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Lt.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Lt.jsx)(ht.c, {
                            toTime: oe.countdownInformation.countdownToTime
                          })]
                        }), (0, Lt.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: oe.countdownInformation.previewText
                        })]
                      })]
                    }, DV ? "pending" : "shown"), (0, Lt.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Lt.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Lt.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [oe.title, " ", oe.variationTitle && (null === (It = le.c[qe.gameNameWithVariation]) || void 0 === It ? void 0 : It.variationThumbnailUseBigRatio) && (0, Lt.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: oe.variationTitle
                          })]
                        })
                      }), oe.listedVariations && oe.listedVariations.length > 0 && (0, Lt.jsx)("div", {
                        className: ft()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (Zt = le.c[qe.gameNameWithVariation]) || void 0 === Zt ? void 0 : Zt.variationThumbnailUseBigRatio
                        }),
                        children: oe.listedVariations.map((tt => {
                          var et, Vt;
                          return (0, Lt.jsxs)(ze, {
                            variation: tt,
                            isSelected: qe.gameNameWithVariation === tt,
                            children: [null !== rt && (0, Lt.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Lt.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Lt.jsx)(Bt.b, {
                                  name: "user"
                                }), " ", (0, Ee.S)(null !== (et = rt[tt]) && void 0 !== et ? et : 0)]
                              })
                            }), (0, Lt.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: zt(null !== (Vt = le.c[tt].variationTitle) && void 0 !== Vt ? Vt : le.c[tt].title)
                            }), (0, Lt.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, Xt.filterBadges)(le.c[tt].badges).map((tt => (0, Lt.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + tt.type,
                                children: (0, Lt.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Lt.jsx)(Wt.e, {
                                    badge: tt
                                  })
                                })
                              }, tt.type)))
                            })]
                          }, tt)
                        }))
                      })]
                    }), oe.description && (0, Lt.jsx)("p", {
                      className: "GameInformationDescription",
                      children: oe.description
                    })]
                  }), (0, Lt.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Lt.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!qV && (0, Lt.jsx)(Qt.g, {
                        tooltipInner: (0, Lt.jsx)("div", {
                          children: zt("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Lt.jsx)(lt.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            QV(Ae[0])
                          },
                          children: (0, Lt.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Lt.jsx)(Bt.b, {
                              name: "play"
                            }), " ", zt("homePage:rejoinLobbyNumber", {
                              number: Ae[0]
                            })]
                          })
                        })
                      }), qV && HV]
                    }), (0, Lt.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!qV && HV, (0, Lt.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Lt.jsx)(Bt.b, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Lt.jsx)(wt.d, {
                          className: "JoinLobbyInput",
                          placeholderText: zt("homePage:lobbyName"),
                          maxLength: Ee.R,
                          domRef: be,
                          onValueChange: tt => {
                            tt = (0, Ee.vb)(tt), ye(tt)
                          },
                          onEnter: () => {
                            0 === we.length ? QV(Ae[0]) : QV(we)
                          }
                        }), (0, Lt.jsx)(lt.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === we.length ? QV(Ae[0]) : QV(we)
                          },
                          children: zt("general:join")
                        })]
                      })]
                    }), (0, Lt.jsxs)("section", {
                      className: ft()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !OV
                      }),
                      children: [(0, Lt.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Lt.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Lt.jsx)(Bt.b, {
                            name: "clock-rotate-left"
                          }), OV && (0, Lt.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: zt("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Lt.jsx)(he.c, {
                        lobbyGroups: [Ae, ie],
                        onLobbyClick: tt => {
                          QV(tt)
                        },
                        keyPrefix: qe.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== dV && (0, Lt.jsx)(Gt, {
                eventName: dV
              })]
            }), wV && (0, Lt.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Lt.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Lt.jsxs)("div", {
                  className: ft()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === oe.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === oe.showWorldsInsteadOfCustomLobbies && (0, Lt.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Lt.jsx)(Bt.b, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Lt.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Lt.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), zt("game:worlds")]
                    })]
                  }), !1 === oe.showWorldsInsteadOfCustomLobbies && (0, Lt.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Lt.jsx)(Bt.b, {
                      name: "joystick"
                    }), (0, Lt.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Lt.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), zt("homePage:customLobbies")]
                    })]
                  }), (0, Lt.jsx)(lt.Q, {
                    onClick: () => {
                      ne("explore")
                    },
                    active: "explore" === se,
                    children: zt("general:explore")
                  }), (0, Lt.jsx)(lt.Q, {
                    onClick: () => {
                      ne("favourite")
                    },
                    active: "favourite" === se,
                    children: zt("homePage:favouriteLobbies")
                  }), (0, Lt.jsx)(lt.Q, {
                    onClick: () => {
                      ne("owned")
                    },
                    active: "owned" === se,
                    children: zt("homePage:ownedLobbies")
                  })]
                }), (0, Lt.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Lt.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Lt.jsx)(Me.d, {
                      label: "Create",
                      onClick: () => {
                        Ve.NotificationProvider.showCustomPopup({
                          body: tt => (0, Lt.jsx)(Oe.CreateCustomLobby, {
                            gameNameWithVariation: qe.gameNameWithVariation,
                            close: tt
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === Ye && (0, Lt.jsx)(Me.h, {}), !1 === Ye && (0, Lt.jsx)(ue, {
                      customLobbies: pe,
                      favouriteLobbies: Te,
                      toggleLikeLobby: lV,
                      showReport: pt.featureFlags.useSocialFeatures && "owned" !== se
                    })]
                  }), yV]
                })]
              })
            })]
          }), !wV && yV]
        })
      })
    }

    function ze(tt) {
      let {
        variation: et,
        isSelected: Vt,
        children: Ot
      } = tt;
      const jt = le.c[et],
        Xt = (0, Dt.o)(et, (0, Dt.s)(jt)),
        Qt = (0, qt.g)(Xt),
        lt = (0, mt.h)([(0, Dt.k)(et, (0, Dt.d)(jt))]);
      return (0, Lt.jsxs)(nt.LinkPreserveSearch, {
        to: (0, ot.v)(et),
        replace: !0,
        className: ft()("GameInformationVariation", dt.j, {
          SelectedGameInformationVariation: Vt
        }),
        onClick: tt => {
          if (!(0, ee.e)(tt)) return;
          const Vt = (0, Mt.j)(et);
          Ht.e.setItem(Vt, et)
        },
        onMouseEnter: lt.start,
        onMouseLeave: lt.cancel,
        onFocus: lt.start,
        onBlur: lt.cancel,
        style: (0, dt.h)(Qt),
        children: [(0, Lt.jsx)(dt.e, {
          image: Qt
        }), Ot]
      })
    }
  },
  6700: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Mt
    });
    var Ot = Vt(63),
      qt = Vt(1556),
      Dt = Vt(1600),
      mt = Vt(3555),
      dt = Vt(1218),
      jt = Vt(1436),
      Ht = Vt(1464),
      Xt = Vt(1152),
      Qt = Vt(1140),
      lt = Vt.n(Qt),
      Et = Vt(6695),
      ft = Vt(1188);

    function wt(tt) {
      let {
        info: et,
        className: Vt
      } = tt;
      const {
        statusText: Ot,
        rowText: qt
      } = (0, Et.g)();
      return (0, ft.jsxs)("div", {
        className: lt()("GameApprovalInfoDetails", Vt),
        children: [(0, ft.jsxs)("div", {
          className: lt()("GameApprovalInfoSummary", et.overallPassed ? "Passed" : "Failed"),
          children: [(0, ft.jsx)(Xt.b, {
            name: et.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, ft.jsx)("span", {
            children: Ot(et.status)
          })]
        }), et.rows.length > 0 && (0, ft.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: et.rows.map((tt => {
            const {
              label: et,
              value: Vt
            } = qt(tt);
            return (0, ft.jsxs)("div", {
              className: lt()("GameApprovalInfoRow", tt.passed ? "Passed" : "Failed"),
              children: [(0, ft.jsx)(Xt.b, {
                name: tt.passed ? "check" : "xmark"
              }), (0, ft.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, ft.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: et
                }), null !== Vt && (0, ft.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: Vt
                })]
              })]
            }, tt.kind)
          }))
        })]
      })
    }
    var yt = Vt(1286),
      Nt = Vt(1450);

    function Mt(tt) {
      Nt.NotificationProvider.showCustomPopup({
        body: () => (0, ft.jsx)(bt, {
          ...tt
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function bt(tt) {
      let {
        schematicId: et,
        canOverride: Vt,
        onApprovalChanged: Qt
      } = tt;
      const {
        t: lt
      } = (0, yt.H)(), {
        userContext: Et
      } = (0, dt.d)(), Nt = (0, mt.b)(), [Mt, bt] = (0, Ot.useState)(null), [Jt, Ct] = (0, Ot.useState)(null), [ut, Kt] = (0, Ot.useState)(!1), ht = (0, Ot.useCallback)((() => {
        Ct(null), Dt.e.getGameApprovalInfo(Et, et).then((tt => {
          Nt.current && bt(tt)
        })).catch((tt => {
          console.error("Failed to get game approval info", tt), Nt.current && Ct(lt("studio:approvalLoadFailed"))
        }))
      }), [Et, et, Nt, lt]);
      (0, Ot.useEffect)((() => {
        ht()
      }), [ht]);
      const vt = tt => {
        ut || (Kt(!0), Dt.e.setGameApproval(Et, et, tt).then((() => {
          null === Qt || void 0 === Qt || Qt(), Nt.current && ht()
        })).catch((tt => {
          console.error("Failed to set game approval", tt)
        })).finally((() => {
          Nt.current && Kt(!1)
        })))
      };
      return (0, ft.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, ft.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: lt("studio:approvalTitle")
        }), !Mt && !Jt && (0, ft.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, ft.jsx)(jt.b, {})
        }), Jt && (0, ft.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: Jt
        }), Mt && (0, ft.jsxs)(ft.Fragment, {
          children: [(0, ft.jsx)(wt, {
            info: Mt
          }), Vt && (0, ft.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== Mt.manualOverride && (0, ft.jsx)(Ht.g, {
              tooltipInner: (0, ft.jsx)("div", {
                children: lt("studio:approvalApproveTooltip")
              }),
              children: (0, ft.jsxs)(qt.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  vt(!0)
                },
                disabled: ut,
                children: [(0, ft.jsx)(Xt.b, {
                  name: "check"
                }), " ", lt("studio:approvalApprove")]
              })
            }), !1 !== Mt.manualOverride && (0, ft.jsx)(Ht.g, {
              tooltipInner: (0, ft.jsx)("div", {
                children: lt("studio:approvalDenyTooltip")
              }),
              children: (0, ft.jsxs)(qt.G, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  vt(!1)
                },
                disabled: ut,
                children: [(0, ft.jsx)(Xt.b, {
                  name: "xmark"
                }), " ", lt("studio:approvalDeny")]
              })
            }), null !== Mt.manualOverride && (0, ft.jsx)(Ht.g, {
              tooltipInner: (0, ft.jsx)("div", {
                children: lt("studio:approvalClearOverrideTooltip")
              }),
              children: (0, ft.jsxs)(qt.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  vt(null)
                },
                disabled: ut,
                children: [(0, ft.jsx)(Xt.b, {
                  name: "arrows-rotate"
                }), " ", lt("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6695: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt,
      g: () => mt
    });
    var Ot = Vt(391),
      qt = Vt(1286);
    const Dt = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function mt() {
      const {
        t: tt,
        selectedLanguage: et
      } = (0, qt.H)();
      return {
        statusText: et => tt(Dt[et]),
        rowText: Vt => {
          const Dt = (tt, Vt) => (0, Ot.mb)((0, qt.o)(et.code, tt), 0, Vt);
          switch (Vt.kind) {
            case "ownerAccountAge": {
              const et = Vt.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: tt("studio:approvalAccountAgeLabel"),
                value: tt(et, {
                  age: Dt(et, Vt.accountAgeMs),
                  days: Vt.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: tt("studio:approvalSinceUnbannedLabel"), value: tt("studio:approvalSinceUnbannedValue", {
                  time: Dt("studio:approvalSinceUnbannedValue", Vt.sinceMs),
                  days: Vt.minDays
                })
              };
            case "reportHold": {
              const {
                detail: et
              } = Vt;
              if (null === et) return {
                label: tt("studio:approvalUnderInvestigation"),
                value: null
              };
              const Ot = et.weightedReporters.toFixed(1),
                qt = et.threshold.toFixed(1),
                mt = tt("studio:approvalReportHoldLabel", {
                  hours: et.windowHours
                });
              if (null === et.heldUntil) return {
                label: mt,
                value: tt("studio:approvalReportHoldValue", {
                  weightedReporters: Ot,
                  threshold: qt
                })
              };
              const dt = "studio:approvalReportHoldValueHeld";
              return {
                label: mt,
                value: tt(dt, {
                  weightedReporters: Ot,
                  threshold: qt,
                  time: Dt(dt, et.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function dt(tt) {
      return null === tt.manualOverride && tt.rows.some((tt => "reportHold" === tt.kind && !tt.passed))
    }
  },
  34423: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt
    });
    var Ot = Vt(63),
      qt = Vt(3510);

    function Dt() {
      const [tt, et] = (0, Ot.useState)(!1);
      return (0, Ot.useLayoutEffect)((() => {
        let tt = !0;
        return (0, qt.e)().then((() => {
          tt && et(!0)
        })), () => {
          tt = !1
        }
      }), []), tt
    }
  },
  9148: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt
    });
    var Ot = Vt(1429),
      qt = Vt(1308),
      Dt = Vt(710);

    function mt(tt) {
      return tt = function(tt, et) {
        var Vt;
        const Ot = new URLSearchParams(et),
          qt = Ot.get("lobby"),
          Dt = Ot.get("vm"),
          mt = null !== (Vt = qt) && void 0 !== Vt ? Vt : tt.lobbyName,
          dt = null !== Dt && void 0 !== Dt ? Dt : tt.directJoinVmUrl;
        if (mt === tt.lobbyName && dt === tt.directJoinVmUrl) return tt;
        return {
          ...tt,
          lobbyName: mt,
          directJoinVmUrl: dt
        }
      }(tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), tt = function(tt) {
        if ((0, Dt.B)(tt.directJoinVmUrl)) return tt;
        const et = (0, qt.ab)(tt.directJoinVmUrl);
        null === et && (tt.directJoinVmUrl = void 0);
        return tt
      }(tt = function(tt) {
        if ((0, Dt.B)(tt.gameNameWithVariation)) return tt;
        return tt.gameNameWithVariation = (0, Ot.j)(tt.gameNameWithVariation), tt
      }(tt))
    }
  },
  9140: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      d: () => qt
    });
    let Ot = !1;

    function qt() {
      Ot = !0
    }

    function Dt() {
      return Ot
    }
  },
  36593: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      i: () => Ot
    });
    const Ot = "skyblockSkills",
      qt = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);