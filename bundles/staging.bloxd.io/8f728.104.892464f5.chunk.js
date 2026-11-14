export const id = 104;
export const ids = [104, 374];
export const modules = {
  35062: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => ZB
    });
    var Vc = nc(244),
      Ic = nc(2672),
      rB = nc(2716),
      uc = nc(2708),
      sc = nc(2701),
      Mc = nc(1051),
      Pc = nc(51),
      qB = nc(1495),
      Oc = nc(1205),
      Tc = nc(1255),
      fc = nc(912),
      mB = nc.n(fc),
      ec = nc(1485),
      tB = nc(73),
      Sc = nc(83),
      yB = nc(1900),
      zB = nc(1373),
      pc = nc(1440),
      hc = nc(985),
      aB = nc(2597),
      lc = nc(3659),
      Yc = nc(2657),
      Lc = nc(2659),
      gB = nc(1536),
      Uc = nc(2668),
      bB = nc(1510),
      Zc = nc(1314),
      Qc = nc(1762),
      Cc = nc(1188),
      vB = nc(2020),
      Dc = nc(4066),
      Nc = nc(957);
    const Ec = 15e3,
      oc = 2500;

    function Wc(cB) {
      var Bc;
      let {
        eventName: nc
      } = cB;
      const {
        t: Vc
      } = (0, Mc.x)(), Ic = bB.c[nc], [rB, uc] = (0, tB.useState)((() => Date.now() >= Ic.endsAt.getTime())), [sc, Pc] = (0, tB.useState)("overall"), qB = function(cB, Bc) {
        const {
          userContext: nc,
          isUserContextUpdating: Vc
        } = (0, hc.c)(), Ic = `${cB}:${Bc}`, [rB, uc] = (0, tB.useState)({
          requestKey: Ic,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, tB.useEffect)((() => {
          if (Vc) return;
          let rB, sc = !1;
          const Mc = async () => {
            if ("visible" === document.visibilityState) try {
              const Vc = await Zc.e.getGameEventLeaderboard(nc, {
                event: cB,
                scope: Bc
              });
              sc || uc({
                requestKey: Ic,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Vc
                }
              })
            } catch {
              sc || uc((cB => cB.requestKey === Ic && "loaded" === cB.leaderboard.status ? cB : {
                requestKey: Ic,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            sc || (rB = setTimeout(Mc, Ec))
          };
          return Mc(), () => {
            sc = !0, clearTimeout(rB)
          }
        }), [cB, Bc, Ic, nc, Vc]), rB.requestKey === Ic ? rB.leaderboard : {
          status: "loading"
        }
      }(nc, sc), Oc = function(cB) {
        const Bc = (0, tB.useRef)(null),
          nc = (0, tB.useRef)(0),
          Vc = (0, tB.useRef)(),
          [Ic, rB] = (0, tB.useState)({});
        return (0, tB.useEffect)((() => {
          const Ic = null === cB || void 0 === cB ? void 0 : cB.entries;
          if (!Ic) return;
          const uc = new Map(Ic.map((cB => [cB.player.name, cB.value]))),
            sc = Bc.current;
          if (Bc.current = uc, null === sc) return;
          const Mc = {};
          for (const [cB, Bc] of uc) {
            const Vc = sc.get(cB);
            void 0 !== Vc && Bc > Vc && (Mc[cB] = {
              amount: Bc - Vc,
              key: nc.current++
            })
          }
          0 !== Object.keys(Mc).length && (rB(Mc), clearTimeout(Vc.current), Vc.current = setTimeout((() => {
            rB({})
          }), oc))
        }), [cB]), (0, tB.useEffect)((() => () => {
          clearTimeout(Vc.current)
        }), []), Ic
      }("loaded" === qB.status ? qB.leaderboard : null), Tc = function(cB) {
        const [Bc, nc] = (0, tB.useState)(null), Vc = "loaded" === cB.status ? cB.leaderboard.goalProgress : void 0;
        return (0, tB.useEffect)((() => {
          Vc && nc(Vc)
        }), [Vc]), Bc
      }(qB), fc = Qc.f[`profileEffect_${Ic.prizePack}`];
      if (rB) return null;
      const ec = "loaded" === qB.status ? qB.leaderboard : null,
        Sc = null !== (Bc = null === ec || void 0 === ec ? void 0 : ec.entries) && void 0 !== Bc ? Bc : null,
        yB = null !== ec && void 0 !== ec && ec.own && null !== Sc && !Sc.some((cB => cB.isOwn)) ? ec.own : null;
      return (0, Nc.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Nc.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Nc.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Nc.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Nc.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Nc.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Vc("gameEvents:live")]
              }), (0, Nc.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Vc("gameEvents:endsIn"), (0, Nc.jsx)(Yc.b, {
                  toTime: Ic.endsAt,
                  onReachEndOfCountdown: () => {
                    uc(!0)
                  }
                })]
              })]
            }), (0, Nc.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Vc(Ic.titleKey)
            }), (0, Nc.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Nc.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [fc && (0, Nc.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Nc.jsx)(fc, {})
                }), (0, Nc.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Nc.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Vc("gameEvents:prize")
                  }), (0, Nc.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Vc(Ic.prizeNameKey)
                  })]
                })]
              }), (0, Nc.jsx)(wc, {
                event: Ic,
                progress: Tc
              })]
            })]
          }), (0, Nc.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Nc.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Nc.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Vc(Ic.leaderboard.titleKey)
              }), (0, Nc.jsx)(Dc.e, {
                ariaLabel: Vc("gameEvents:leaderboardScope"),
                options: bB.b.map((cB => ({
                  value: cB,
                  label: Vc(`gameEvents:${cB}Scope`)
                }))),
                value: sc,
                onChange: Pc
              })]
            }), "loading" === qB.status && (0, Nc.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Nc.jsx)(Cc.e, {})
            }), ("unavailable" === qB.status || "loaded" === qB.status && null === Sc) && (0, Nc.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Vc("gameEvents:leaderboardUnavailable")
            }), null !== Sc && 0 === Sc.length && (0, Nc.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Vc("friends" === sc ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== Sc && Sc.length > 0 && (0, Nc.jsx)("ol", {
              className: "GameEventPanelRows",
              children: Sc.map((cB => {
                const Bc = Oc[cB.player.name];
                return (0, Nc.jsxs)("li", {
                  className: mB()("GameEventPanelRow", {
                    GameEventPanelRowOwn: cB.isOwn,
                    GameEventPanelRowTop: cB.rank <= 3
                  }),
                  children: [(0, Nc.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", cB.rank]
                  }), (0, Nc.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Nc.jsx)(vB.h, {
                      playerSocialPreview: {
                        ...cB.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== Bc && (0, Nc.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", Bc.amount.toLocaleString()]
                  }, Bc.key), (0, Nc.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: cB.value.toLocaleString()
                  })]
                }, cB.player.name)
              }))
            }), yB && (0, Nc.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Nc.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", yB.rank.toLocaleString()]
              }), (0, Nc.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Vc("gameEvents:yourPlace")
              }), (0, Nc.jsx)("span", {
                className: "GameEventPanelScore",
                children: yB.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function wc(cB) {
      let {
        event: Bc,
        progress: nc
      } = cB;
      const {
        t: Vc
      } = (0, Mc.x)(), Ic = null !== nc && Bc.prizeGoals.some(((cB, Bc) => nc[Bc] >= cB.target));
      return (0, Nc.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Nc.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Vc(Ic ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Nc.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: Bc.prizeGoals.map(((cB, Bc) => {
            const Ic = null === nc ? null : Math.min(nc[Bc], cB.target);
            return (0, Nc.jsxs)(tB.Fragment, {
              children: [Bc > 0 && (0, Nc.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Vc("gameEvents:goalsOr")
              }), (0, Nc.jsxs)("div", {
                className: mB()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Ic === cB.target
                }),
                children: [(0, Nc.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Vc(cB.labelKey)
                }), (0, Nc.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Nc.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Ic && void 0 !== Ic ? Ic : 0) / cB.target * 100 + "%"
                    }
                  }), null !== Ic && (0, Nc.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Ic.toLocaleString(), " / ", cB.target.toLocaleString()]
                  })]
                })]
              })]
            }, cB.board)
          }))
        })]
      })
    }
    var kB = nc(1370),
      Xc = nc(1420),
      Hc = nc(899),
      Fc = nc(578),
      Jc = nc(2648);

    function jB(cB) {
      let {
        gameNameWithVariation: Bc
      } = cB;
      const nc = (0, kB.D)(Bc),
        [Vc, Ic] = (0, tB.useState)(null);
      if ((0, tB.useEffect)((() => {
          if (!nc) return;
          let cB = !0;
          return (0, Xc.f)(nc).then((Bc => {
            cB && Ic(Bc)
          })).catch((cB => {
            console.error(`Failed to load the page copy for ${nc.name}`, cB)
          })), () => {
            cB = !1
          }
        }), [nc]), !nc || !Vc || Vc.name !== nc.name) return null;
      const rB = (0, Xc.d)(Vc),
        uc = new Set((0, Hc.e)((0, Fc.l)()).map((cB => (0, kB.u)(cB)))),
        sc = Vc.similarGames.filter((cB => uc.has((0, kB.u)(cB))));
      return (0, Nc.jsx)("div", {
        className: "GamePageContent",
        children: (0, Nc.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Nc.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Nc.jsx)("h2", {
              children: rB.whatIs
            }), Vc.whatIs.map((cB => (0, Nc.jsx)("p", {
              children: cB
            }, cB)))]
          }), (0, Nc.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Nc.jsx)("h2", {
              children: rB.howToPlay
            }), Vc.howToPlay.map((cB => (0, Nc.jsx)("p", {
              children: cB
            }, cB)))]
          }), (0, Nc.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Nc.jsx)("h2", {
              children: rB.features
            }), (0, Nc.jsx)("ul", {
              children: Vc.features.map((cB => (0, Nc.jsx)("li", {
                children: cB
              }, cB)))
            })]
          }), (0, Nc.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Nc.jsx)("h2", {
              children: rB.tips
            }), (0, Nc.jsx)("ul", {
              children: Vc.tips.map((cB => (0, Nc.jsx)("li", {
                children: cB
              }, cB)))
            })]
          }), (0, Nc.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Nc.jsx)("h2", {
              children: rB.faq
            }), Vc.faq.map((cB => {
              let {
                question: Bc,
                answer: nc
              } = cB;
              return (0, Nc.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Nc.jsx)("h3", {
                  children: Bc
                }), (0, Nc.jsx)("p", {
                  children: nc
                })]
              }, Bc)
            }))]
          }), sc.length > 0 && (0, Nc.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Nc.jsx)("h2", {
              children: rB.similarGames
            }), (0, Nc.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: sc.map((cB => (0, Nc.jsx)("li", {
                children: (0, Nc.jsx)(Jc.g, {
                  source: {
                    type: "game",
                    gameNameWithVariation: cB
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, cB)))
            })]
          })]
        })
      })
    }
    var Rc = nc(926),
      iB = nc(107),
      Kc = nc(988),
      xB = nc(2745),
      dc = nc(1475),
      Ac = nc(1344),
      Gc = nc(1330),
      cn = nc(1432),
      BB = nc(1264),
      nB = nc(1194),
      VB = nc(35066),
      IB = nc(1102),
      rn = nc(867),
      uB = nc(302),
      sB = nc(883),
      MB = nc(1362),
      PB = nc(7811),
      qn = nc(27),
      OB = nc(1969),
      TB = nc(623),
      fB = nc(1090),
      mn = nc(5483);

    function eB(cB) {
      let {
        preview: Bc,
        isBroken: nc
      } = cB;
      const Vc = null === Bc ? null : (0, rB.f)(Bc, "small"),
        uc = (0, Ic.c)(null !== Vc && void 0 !== Vc ? Vc : rB.m);
      return null === Bc ? (0, Nc.jsx)("div", {
        className: mB()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: nc
        }),
        children: (0, Nc.jsx)(Rc.e, {
          name: nc ? "triangle-exclamation" : "star"
        })
      }) : (0, Nc.jsx)("div", {
        className: mB()("FeaturedGamesPopupSlotThumbnail", sc.g),
        style: (0, sc.d)(uc),
        role: "img",
        "aria-label": Bc.name,
        children: (0, Nc.jsx)(sc.b, {
          image: uc
        })
      })
    }

    function tn(cB) {
      let {
        schematicId: Bc,
        gameName: nc
      } = cB;
      const {
        userContext: Ic
      } = (0, hc.c)(), rB = (0, Lc.e)(), [uc, sc] = (0, tB.useState)(null), [Mc, Pc] = (0, tB.useState)(null), [qB, Oc] = (0, tB.useState)(!1), fc = (0, tB.useCallback)((() => {
        Pc(null), Zc.e.getFeaturedGames(Ic).then((cB => {
          rB.current && sc(cB.slots)
        })).catch((cB => {
          console.error("Failed to get featured games", cB), rB.current && Pc("Failed to load featured games")
        }))
      }), [Ic, rB]);
      (0, tB.useEffect)((() => {
        fc()
      }), [fc]);
      const mB = (cB, Bc) => {
        qB || (Oc(!0), Zc.e.setFeaturedGame(Ic, cB, Bc).then((() => {
          rB.current && fc()
        })).catch((cB => {
          console.error("Failed to set featured game", cB), rB.current && Pc("Failed to update the featured slot")
        })).finally((() => {
          rB.current && Oc(!1)
        })))
      };
      return (0, Nc.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Nc.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !uc && !Mc && (0, Nc.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Nc.jsx)(Cc.e, {})
        }), Mc && (0, Nc.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: Mc
        }), uc && (0, Nc.jsxs)(Nc.Fragment, {
          children: [(0, Nc.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: uc.map((cB => {
              const nc = cB.schematicId === Bc,
                Ic = null === cB.schematicId,
                {
                  categoryGroup: rB
                } = Vc.H[cB.slotId];
              return (0, Nc.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Nc.jsx)(eB, {
                  preview: cB.preview,
                  isBroken: !Ic
                }), (0, Nc.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Nc.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Vc.hb)(rB), " \xb7 position", " ", (0, Vc.L)(cB.slotId, Vc.Ob) + 1, " of", " ", (0, Vc.Mb)(rB, Vc.Ob)]
                  }), Ic && (0, Nc.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Ic && null !== cB.preview && (0, Nc.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: cB.preview.name
                  }), !Ic && null === cB.preview && (0, Nc.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Nc.jsx)(Rc.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Nc.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Ic && (0, Nc.jsxs)(Tc.u, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      mB(cB.slotId, Bc)
                    },
                    disabled: qB,
                    children: [(0, Nc.jsx)(Rc.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !Ic && !nc && (0, Nc.jsxs)(Tc.Q, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      mB(cB.slotId, Bc)
                    },
                    disabled: qB,
                    children: [(0, Nc.jsx)(Rc.e, {
                      name: "star"
                    }), " Replace"]
                  }), !Ic && (0, Nc.jsxs)(Tc.L, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      mB(cB.slotId, null)
                    },
                    disabled: qB,
                    children: [(0, Nc.jsx)(Rc.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, cB.slotId)
            }))
          }), (0, Nc.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var SB = nc(3747),
      yn = nc(3694),
      zn = nc(3703),
      pB = nc(3715),
      hB = nc(3681),
      an = nc(2740),
      lB = nc(183);
    const YB = {
      skyblock: [nc(35077).e]
    };
    var LB = nc(569);
    const gn = {
      listedVariations: null,
      backgroundImage: rB.m,
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

    function UB(cB, Bc) {
      const nc = TB.f[cB.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, rB.f)(cB, "large"),
        badges: [],
        category: cB.gameCategory,
        title: void 0 !== (null === nc || void 0 === nc ? void 0 : nc.title) ? Bc(nc.title) : cB.name,
        variationTitle: null,
        description: void 0 !== (null === nc || void 0 === nc ? void 0 : nc.description) ? Bc(nc.description) : cB.description,
        ownerSocialPreviewWithoutLocation: "owner" in cB ? cB.owner : null,
        ccu: cB.ccu,
        favourites: cB.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in cB ? cB.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function bn(cB) {
      var Bc, nc, Vc;
      return null !== (Bc = null !== (nc = (0, lB.l)() ? function(cB) {
        for (const [Bc, nc] of Object.entries(YB)) {
          const Vc = [Bc, ...nc.map((cB => (0, uB.Bb)(Bc, cB)))];
          if (Vc.includes(cB)) return Vc
        }
        return null
      }(cB) : null) && void 0 !== nc ? nc : null === (Vc = TB.e[cB]) || void 0 === Vc ? void 0 : Vc.listedVariations) && void 0 !== Bc ? Bc : null
    }

    function ZB() {
      const {
        gameNameWithVariation: cB
      } = (0, Ac.z)();
      if ((0, tB.useEffect)(an.n, []), cB && (0, IB.n)(cB)) return (0, Nc.jsx)(QB, {
        urlId: cB
      }, cB);
      const Bc = cB && (0, rn.k)(cB) ? cB : "firstParty";
      return (0, Nc.jsx)(CB, {}, Bc)
    }

    function QB(cB) {
      let {
        urlId: Bc
      } = cB;
      const {
        userContext: nc,
        isUserContextUpdating: Vc
      } = (0, hc.c)(), Ic = (0, tB.useMemo)((() => (0, dc.h)(Bc)), [Bc]);
      (0, tB.useMemo)((() => {
        if (null === Ic) return;
        const cB = Kc.userContextManager.peekCurrentUserContext();
        (null !== cB ? Zc.e.getGame(cB, Ic.schematicId) : Kc.userContextManager.getCurrentUserContext().then((cB => Zc.e.getGame(cB, Ic.schematicId)))).catch((cB => {
          console.error(`Failed to get the custom game ${Ic.schematicId}`, cB), (0, dc.g)(Bc)
        }))
      }), [Ic, Bc]);
      const [rB, uc] = (0, tB.useState)(null), [sc, Mc] = (0, tB.useState)(!1);
      (0, tB.useLayoutEffect)((() => {
        let cB = !0;
        return (0, xB.c)().then((() => {
          cB && Mc(!0)
        })), () => {
          cB = !1
        }
      }), []), (0, tB.useEffect)((() => {
        if (null !== Ic || Vc) return;
        let cB = !0;
        return Zc.e.getGameByUrlId(nc, Bc).then((nc => {
          cB && uc({
            urlId: Bc,
            game: nc
          })
        })).catch((nc => {
          console.error(`Failed to find the custom game with urlId ${Bc}`, nc), cB && (0, Gc.navigateToHomePage)()
        })), () => {
          cB = !1
        }
      }), [Bc, Ic, Vc, nc]);
      const Pc = null !== Ic && void 0 !== Ic ? Ic : (null === rB || void 0 === rB ? void 0 : rB.urlId) === Bc ? rB.game : null;
      return null === Pc ? (0, Nc.jsx)(Cc.e, {}) : sc ? (0, Nc.jsx)(CB, {
        gameNameWithVariation: (0, rn.v)(Pc.schematicId),
        knownCustomGame: Pc
      }, Pc.schematicId) : null
    }

    function CB(cB) {
      var Bc, nc, uc, fc, bB, Qc, Cc, Dc;
      let {
        gameNameWithVariation: Ec,
        knownCustomGame: oc = null
      } = cB;
      const {
        t: wc
      } = (0, Mc.x)();
      (0, OB.i)();
      const Xc = (0, OB.n)(),
        {
          userContext: Hc,
          isUserContextUpdating: Jc
        } = (0, hc.c)(),
        Kc = (0, hB.d)(),
        xB = (0, Gc.useNavigatePreserveSearch)(),
        dc = (0, Ac.z)(),
        BB = (0, tB.useMemo)((() => Ec ? {
          gameNameWithVariation: Ec
        } : dc), [Ec, dc]),
        IB = (0, PB.e)(BB),
        eB = (0, tB.useMemo)((() => {
          const cB = function(cB) {
            var Bc, nc;
            const Vc = bn(cB);
            if (!Vc || 0 === Vc.length || Vc.includes(cB)) return cB;
            const Ic = Pc.h.getItem((0, yB.h)(cB));
            if (Ic && Vc.includes(Ic)) return Ic;
            return null !== (Bc = null === (nc = TB.e[cB]) || void 0 === nc ? void 0 : nc.defaultListedVariation) && void 0 !== Bc ? Bc : Vc[0]
          }(IB.gameNameWithVariation);
          return cB === IB.gameNameWithVariation ? IB : {
            ...IB,
            gameNameWithVariation: cB
          }
        }), [IB]);
      (0, tB.useEffect)((() => {
        const cB = IB.gameNameWithVariation;
        eB.gameNameWithVariation !== cB && cB !== (0, uB.Db)(cB) && xB((0, kB.w)(eB.gameNameWithVariation), {
          replace: !0
        })
      }), [eB.gameNameWithVariation, IB.gameNameWithVariation, xB]);
      const an = (0, Lc.e)(),
        [lB, YB] = (0, tB.useState)(""),
        ZB = tB.useRef(null),
        [QB, CB] = (0, tB.useState)(),
        DB = (0, rn.k)(eB.gameNameWithVariation),
        NB = (0, tB.useMemo)((() => DB ? null : function(cB, Bc, nc) {
          var Vc, Ic;
          const uc = TB.e[cB];
          return (0, LB.E)(uc) ? null : {
            listedVariations: bn(cB),
            backgroundImage: (0, rB.h)(cB, (0, rB.c)(uc)),
            badges: (0, qB.filterBadges)(uc.badges),
            category: uc.type,
            title: nc(uc.title),
            variationTitle: uc.variationTitle ? nc(uc.variationTitle) : null,
            description: nc(uc.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== Bc ? null !== (Vc = Bc[cB]) && void 0 !== Vc ? Vc : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: uc.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: uc.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (Ic = uc.canCreateCustomLobbies) || void 0 === Ic || Ic,
            countdownInformation: (0, yB.e)(cB)
          }
        }(eB.gameNameWithVariation, Xc, wc)), [DB, eB.gameNameWithVariation, Xc, wc]),
        [EB, oB] = (0, tB.useState)(!1),
        [WB, wB] = (0, tB.useState)((() => oc ? UB(oc, wc) : gn)),
        kn = null !== NB && void 0 !== NB ? NB : WB,
        [XB] = (0, tB.useState)(kn === gn),
        HB = (0, Ic.c)(kn.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: FB,
          recentlyPlayedCustomLobbies: JB
        } = (0, tB.useMemo)((() => function(cB, Bc, nc, Vc) {
          var Ic;
          const rB = cB => {
              const nc = (0, rn.r)(cB),
                Vc = Bc.find((Bc => "custom" === Bc.type ? Bc.schematicId === nc : Bc.gameNameWithVariation === cB));
              return Vc ? [...Vc.recentLobbies] : []
            },
            uc = (0, qB.getRecentGameNameWithVariationLobbiesKey)(cB),
            sc = null !== (Ic = Pc.h.getItem(uc)) && void 0 !== Ic ? Ic : [],
            Mc = [...rB(cB), ...sc],
            Oc = [];
          for (const Pc of Mc)(0, fB.F)(Pc) && !Oc.includes(Pc) && Oc.push(Pc);
          let Tc = Mc;
          if (nc) {
            const cB = rB("classic_worlds"),
              Bc = Mc.filter((Bc => !cB.includes(Bc)));
            Tc = [...cB, ...Bc]
          }
          const fc = [],
            mB = !1 === Vc ? [] : Tc;
          for (const Pc of mB)(0, fB.F)(Pc) || fc.includes(Pc) || fc.push(Pc);
          return {
            recentlyPlayedPublicLobbies: Oc,
            recentlyPlayedCustomLobbies: fc
          }
        }(eB.gameNameWithVariation, Kc, kn.showWorldsInsteadOfCustomLobbies, kn.canCreateCustomLobbies)), [eB.gameNameWithVariation, Kc, kn.showWorldsInsteadOfCustomLobbies, kn.canCreateCustomLobbies]),
        [jn, RB] = (0, tB.useState)(!0),
        [KB, xn] = (0, tB.useState)([]),
        [dB, AB] = (0, tB.useState)(null),
        [GB, cV] = (0, tB.useState)("explore"),
        Bn = (0, tB.useRef)(!1),
        nn = (0, tB.useCallback)((cB => {
          (0, Sc.unstable_batchedUpdates)((() => {
            CB(cB), wB((Bc => ({
              ...UB(cB, wc),
              isFavourite: Bc.isFavourite
            })))
          }))
        }), [wc]);
      (0, tB.useEffect)((() => {
        null === qn.d.get("gameEntrySource") && (0, qn.h)("gameInformationPageDirect")
      }), []);
      const Vn = (0, tB.useRef)(null);
      (0, tB.useEffect)((() => {
        const cB = cB => {
            Vn.current = cB.target instanceof Element ? cB.target.closest("a, button") : null
          },
          Bc = cB => {
            "Tab" === cB.key && (Vn.current = null)
          };
        return document.addEventListener("pointerdown", cB, !0), document.addEventListener("keydown", Bc, !0), () => {
          document.removeEventListener("pointerdown", cB, !0), document.removeEventListener("keydown", Bc, !0)
        }
      }), []), (0, aB.e)("Enter", (cB => {
        const Bc = cB.target instanceof Element ? cB.target : null;
        if (cB.defaultPrevented || null !== Bc && void 0 !== Bc && Bc.closest("input, textarea, select")) return;
        const nc = null === Bc || void 0 === Bc ? void 0 : Bc.closest("a, button");
        nc && nc !== Vn.current || (cB.preventDefault(), Tn())
      })), (0, lc.e)(Gc.navigateToHomePage);
      const In = !Fc.o && (FB.length > 0 || JB.length > 0),
        rV = !kn.useRejoinLastLobbyButton || 0 === FB.length,
        un = DB && null === kn.ownerSocialPreviewWithoutLocation,
        sn = Hc.getPlayerName() === (null === QB || void 0 === QB || null === (Bc = QB.owner) || void 0 === Bc ? void 0 : Bc.name),
        Mn = null !== (nc = null === (uc = kn.badges.find((cB => "event" === cB.type))) || void 0 === uc ? void 0 : uc.event) && void 0 !== nc ? nc : null,
        Pn = rV ? Tc.n : Tc.d,
        qV = (0, Nc.jsx)(Oc.d, {
          tooltipInner: (0, Nc.jsx)("div", {
            children: wc("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Nc.jsx)(Pn, {
            className: "GameInformationButton",
            padDefaultFocus: rV,
            showPress: !0,
            onClick: () => {
              Tn()
            },
            children: (0, Nc.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [rV && (0, Nc.jsxs)(Nc.Fragment, {
                children: [(0, Nc.jsx)(Rc.e, {
                  name: "play"
                }), " "]
              }), wc("homePage:quickPlay")]
            })
          })
        });
      (0, tB.useEffect)((() => {
        if (!DB || Jc) return;
        let cB = !0;
        const Bc = (0, rn.r)(eB.gameNameWithVariation);
        return Zc.e.getGame(Hc, Bc).then((Bc => {
          cB && nn(Bc)
        })).catch((Bc => {
          console.error("Failed to get Custom Game information", Bc), cB && (0, Gc.navigateToHomePage)()
        })), Zc.e.getFavouriteGames(Hc).then((nc => {
          cB && wB((cB => ({
            ...cB,
            isFavourite: nc.includes(Bc)
          })))
        })).catch((Bc => {
          console.error("Failed to get favourite games", Bc), cB && oB(!0)
        })), () => {
          cB = !1
        }
      }), [DB, Jc, eB.gameNameWithVariation, nn, Hc]);
      const On = !DB && null === NB;

      function Tn(cB) {
        xB((0, zB.e)(eB.gameNameWithVariation, cB))
      }(0, tB.useEffect)((() => {
        On && (0, Gc.navigateToHomePage)()
      }), [On]), (0, tB.useEffect)((() => {
        !1 !== kn.canCreateCustomLobbies && null !== kn.showWorldsInsteadOfCustomLobbies && (Fc.o || !1 !== Jc || (RB(!0), Zc.e.getFavouriteLobbies(Hc).then((cB => {
          AB(cB)
        })), Zc.e.getOpenCustomLobbies(Hc, {
          gameNameWithVariation: kn.showWorldsInsteadOfCustomLobbies ? "classic" : eB.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === GB,
          onlyFavouriteLobbies: "favourite" === GB
        }).then((cB => {
          an.current && xn(cB)
        })).catch((cB => {})).finally((() => {
          an.current && RB(!1)
        }))))
      }), [Jc, eB, GB, kn.showWorldsInsteadOfCustomLobbies, kn.canCreateCustomLobbies, an, Hc]);
      const fn = (0, tB.useCallback)((async cB => {
          try {
            if (!dB) return;
            dB.includes(cB) ? (Zc.e.unfavouriteLobby(Hc, cB), AB(dB.filter((Bc => Bc !== cB)))) : (Zc.e.favouriteLobby(Hc, cB).catch((cB => {
              console.error("Failed to favourite lobby", cB)
            })), AB([...dB, cB]))
          } catch (Bc) {
            console.error("Failed to like lobby", Bc)
          }
        }), [Hc, dB]),
        mV = (null === QB || void 0 === QB ? void 0 : QB.schematicId) === (0, rn.r)(IB.gameNameWithVariation) ? QB : null,
        en = mV && (0, kB.G)(IB.gameNameWithVariation, (cB => wc(cB)), mV);
      (0, cn.g)(mV && (0, kB.w)(IB.gameNameWithVariation, mV));
      const tV = !Fc.o && iB.featureFlags.canUseCustomLobbies && !0 === kn.canCreateCustomLobbies,
        Sn = (0, Nc.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Nc.jsx)(jB, {
            gameNameWithVariation: eB.gameNameWithVariation
          })
        });
      return (0, Nc.jsx)(Nc.Fragment, {
        children: (0, Nc.jsxs)("article", {
          className: mB()("GameInformation", {
            GameInformationFadeIn: XB,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (fc = kn.countdownInformation) || void 0 === fc ? void 0 : fc.type)
          }),
          children: [en && (0, Nc.jsx)(pc.e, {
            meta: en
          }), (0, Nc.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Nc.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Nc.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Nc.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Nc.jsx)("div", {
                  className: mB()("GameInformationTopBackgroundImage", sc.g),
                  style: (0, sc.d)(HB),
                  children: (0, Nc.jsx)(sc.b, {
                    image: HB
                  })
                })]
              }), (0, Nc.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Nc.jsx)(SB.d, {}), (0, Nc.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Nc.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Nc.jsxs)("div", {
                      className: mB()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: un
                      }),
                      children: [kn.badges.map((cB => (0, Nc.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${cB.type}`,
                        children: (0, Nc.jsx)(Uc.b, {
                          badge: cB
                        })
                      }, cB.type))), DB && (0, Nc.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Nc.jsx)(gB.e, {
                          text: (0, Vc.ab)({
                            type: "playerCrafted"
                          })
                        })
                      }), kn.category && (0, Nc.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Nc.jsx)(gB.e, {
                          text: [{
                            str: (0, Vc.db)(kn.category).toUpperCase()
                          }]
                        })
                      }), null !== kn.ccu && (0, Nc.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Nc.jsx)(Rc.e, {
                          name: "user"
                        }), (0, fB.M)(kn.ccu), " online"]
                      }), null !== kn.ownerSocialPreviewWithoutLocation && (0, Nc.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Nc.jsx)("span", {
                          children: "Made by"
                        }), (0, Nc.jsx)(vB.h, {
                          playerSocialPreview: {
                            ...kn.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), un && (0, Nc.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Nc.jsx)("span", {
                          children: "Made by"
                        }), (0, Nc.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== kn.favourites && (null !== kn.isFavourite || DB && !EB) && (0, Nc.jsx)(Tc.w, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== Bn.current && (Bn.current = !0, null !== kn.isFavourite)) {
                              const cB = (0, rn.r)(eB.gameNameWithVariation);
                              let Bc;
                              kn.isFavourite ? (Bc = -1, Zc.e.unfavouriteGame(Hc, cB).catch((cB => {
                                console.error("Failed to get unfavourite game", cB)
                              })).finally((() => {
                                Bn.current = !1
                              }))) : (Bc = 1, Zc.e.favouriteGame(Hc, cB).catch((cB => {
                                console.error("Failed to get favourite game", cB)
                              })).finally((() => {
                                Bn.current = !1
                              }))), wB((cB => ({
                                ...cB,
                                isFavourite: !cB.isFavourite
                              }))), wB((cB => ({
                                ...cB,
                                favourites: cB.favourites + Bc
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (bB = kn.isFavourite) && void 0 !== bB && bB,
                        disabled: null === kn.isFavourite,
                        className: mB()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === kn.isFavourite
                        })
                      }, null === kn.isFavourite ? "pending" : "known"), DB && !un && iB.featureFlags.useSocialFeatures && !sn && (0, Nc.jsx)(zn.b, {
                        targetType: "customGame",
                        targetId: (0, rn.r)(eB.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (Hc.playerHasRank("developer") || Hc.playerHasRank("admin") && sn) && (0, Nc.jsxs)(Tc.n, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          xB((0, MB.o)((0, sB.h)(eB.gameNameWithVariation, !0)))
                        },
                        children: [(0, Nc.jsx)(Rc.e, {
                          name: "star-christmas"
                        }), " ", wc("studio:viewInStudio")]
                      }), DB && Hc.playerHasRank("developer") && (0, Nc.jsxs)(Tc.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, mn.e)({
                            schematicId: (0, rn.r)(eB.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Nc.jsx)(Rc.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), DB && Hc.playerHasRank("developer") && (0, Nc.jsxs)(Tc.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          nB.NotificationProvider.showCustomPopup({
                            body: () => (0, Nc.jsx)(tn, {
                              schematicId: (0, rn.r)(eB.gameNameWithVariation),
                              gameName: kn.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Nc.jsx)(Rc.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (Qc = kn.countdownInformation) || void 0 === Qc ? void 0 : Qc.type) && (0, Nc.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Nc.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Nc.jsx)(Yc.b, {
                            toTime: kn.countdownInformation.countdownToTime
                          })]
                        }), (0, Nc.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: kn.countdownInformation.previewText
                        })]
                      })]
                    }, un ? "pending" : "shown"), (0, Nc.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Nc.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Nc.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [kn.title, " ", kn.variationTitle && (null === (Cc = TB.e[eB.gameNameWithVariation]) || void 0 === Cc ? void 0 : Cc.variationThumbnailUseBigRatio) && (0, Nc.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: kn.variationTitle
                          })]
                        })
                      }), kn.listedVariations && kn.listedVariations.length > 0 && (0, Nc.jsx)("div", {
                        className: mB()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (Dc = TB.e[eB.gameNameWithVariation]) || void 0 === Dc ? void 0 : Dc.variationThumbnailUseBigRatio
                        }),
                        children: kn.listedVariations.map((cB => {
                          var Bc, nc;
                          return (0, Nc.jsxs)(vn, {
                            variation: cB,
                            isSelected: eB.gameNameWithVariation === cB,
                            children: [null !== Xc && (0, Nc.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Nc.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Nc.jsx)(Rc.e, {
                                  name: "user"
                                }), " ", (0, fB.M)(null !== (Bc = Xc[cB]) && void 0 !== Bc ? Bc : 0)]
                              })
                            }), (0, Nc.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: wc(null !== (nc = TB.e[cB].variationTitle) && void 0 !== nc ? nc : TB.e[cB].title)
                            }), (0, Nc.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, qB.filterBadges)(TB.e[cB].badges).map((cB => (0, Nc.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + cB.type,
                                children: (0, Nc.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Nc.jsx)(Uc.b, {
                                    badge: cB
                                  })
                                })
                              }, cB.type)))
                            })]
                          }, cB)
                        }))
                      })]
                    }), kn.description && (0, Nc.jsx)("p", {
                      className: "GameInformationDescription",
                      children: kn.description
                    })]
                  }), (0, Nc.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Nc.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Fc.o && !rV && (0, Nc.jsx)(Oc.d, {
                        tooltipInner: (0, Nc.jsx)("div", {
                          children: wc("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Nc.jsx)(Tc.n, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            Tn(FB[0])
                          },
                          children: (0, Nc.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Nc.jsx)(Rc.e, {
                              name: "play"
                            }), " ", wc("homePage:rejoinLobbyNumber", {
                              number: FB[0]
                            })]
                          })
                        })
                      }), !Fc.o && rV && qV]
                    }), (0, Nc.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Fc.o && !rV && qV, (0, Nc.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Nc.jsx)(Rc.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Nc.jsx)(ec.e, {
                          className: "JoinLobbyInput",
                          placeholderText: wc("homePage:lobbyName"),
                          maxLength: fB.J,
                          domRef: ZB,
                          onValueChange: cB => {
                            cB = (0, fB.nb)(cB), YB(cB)
                          },
                          onEnter: () => {
                            0 === lB.length ? Tn(FB[0]) : Tn(lB)
                          }
                        }), (0, Nc.jsx)(Tc.d, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === lB.length ? Tn(FB[0]) : Tn(lB)
                          },
                          children: wc("general:join")
                        })]
                      })]
                    }), (0, Nc.jsxs)("section", {
                      className: mB()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !In
                      }),
                      children: [(0, Nc.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Nc.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Nc.jsx)(Rc.e, {
                            name: "clock-rotate-left"
                          }), In && (0, Nc.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: wc("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Nc.jsx)(pB.e, {
                        lobbyGroups: [FB, JB],
                        onLobbyClick: cB => {
                          Tn(cB)
                        },
                        keyPrefix: eB.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== Mn && (0, Nc.jsx)(Wc, {
                eventName: Mn
              })]
            }), tV && (0, Nc.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Nc.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Nc.jsxs)("div", {
                  className: mB()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === kn.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === kn.showWorldsInsteadOfCustomLobbies && (0, Nc.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Nc.jsx)(Rc.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Nc.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Nc.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), wc("game:worlds")]
                    })]
                  }), !1 === kn.showWorldsInsteadOfCustomLobbies && (0, Nc.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Nc.jsx)(Rc.e, {
                      name: "joystick"
                    }), (0, Nc.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Nc.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), wc("homePage:customLobbies")]
                    })]
                  }), (0, Nc.jsx)(Tc.Q, {
                    onClick: () => {
                      cV("explore")
                    },
                    active: "explore" === GB,
                    children: wc("general:explore")
                  }), (0, Nc.jsx)(Tc.Q, {
                    onClick: () => {
                      cV("favourite")
                    },
                    active: "favourite" === GB,
                    children: wc("homePage:favouriteLobbies")
                  }), (0, Nc.jsx)(Tc.Q, {
                    onClick: () => {
                      cV("owned")
                    },
                    active: "owned" === GB,
                    children: wc("homePage:ownedLobbies")
                  })]
                }), (0, Nc.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Nc.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Nc.jsx)(yn.d, {
                      label: "Create",
                      onClick: () => {
                        nB.NotificationProvider.showCustomPopup({
                          body: cB => (0, Nc.jsx)(VB.CreateCustomLobby, {
                            gameNameWithVariation: eB.gameNameWithVariation,
                            close: cB
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === jn && (0, Nc.jsx)(yn.f, {}), !1 === jn && KB.length > 0 && KB.map((cB => (0, Nc.jsx)(yn.e, {
                      customLobby: cB,
                      favouriteLobbies: dB,
                      toggleLikeLobby: fn,
                      showReport: iB.featureFlags.useSocialFeatures && "owned" !== GB
                    }, cB.name)))]
                  }), Sn]
                })]
              })
            })]
          }), !tV && Sn]
        })
      })
    }

    function vn(cB) {
      let {
        variation: Bc,
        isSelected: nc,
        children: Vc
      } = cB;
      const Mc = TB.e[Bc],
        qB = (0, rB.h)(Bc, (0, rB.l)(Mc)),
        Oc = (0, Ic.c)(qB),
        Tc = (0, uc.c)([(0, rB.g)(Bc, (0, rB.c)(Mc))]);
      return (0, Nc.jsxs)(Gc.LinkPreserveSearch, {
        to: (0, kB.w)(Bc),
        replace: !0,
        className: mB()("GameInformationVariation", sc.g, {
          SelectedGameInformationVariation: nc
        }),
        onClick: cB => {
          if (!(0, BB.d)(cB)) return;
          const nc = (0, yB.h)(Bc);
          Pc.h.setItem(nc, Bc)
        },
        onMouseEnter: Tc.start,
        onMouseLeave: Tc.cancel,
        onFocus: Tc.start,
        onBlur: Tc.cancel,
        style: (0, sc.d)(Oc),
        children: [(0, Nc.jsx)(sc.b, {
          image: Oc
        }), Vc]
      })
    }
  },
  5483: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Sc
    });
    var Vc = nc(73),
      Ic = nc(1255),
      rB = nc(1314),
      uc = nc(2659),
      sc = nc(985),
      Mc = nc(1188),
      Pc = nc(1205),
      qB = nc(926),
      Oc = nc(912),
      Tc = nc.n(Oc),
      fc = nc(957);

    function mB(cB) {
      let {
        info: Bc,
        className: nc
      } = cB;
      return (0, fc.jsxs)("div", {
        className: Tc()("GameApprovalInfoDetails", nc),
        children: [(0, fc.jsxs)("div", {
          className: Tc()("GameApprovalInfoSummary", Bc.overallPassed ? "Passed" : "Failed"),
          children: [(0, fc.jsx)(qB.e, {
            name: Bc.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, fc.jsx)("span", {
            children: Bc.summary
          })]
        }), Bc.rows.length > 0 && (0, fc.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: Bc.rows.map((cB => (0, fc.jsxs)("div", {
            className: Tc()("GameApprovalInfoRow", cB.passed ? "Passed" : "Failed"),
            children: [(0, fc.jsx)(qB.e, {
              name: cB.passed ? "check" : "xmark"
            }), (0, fc.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, fc.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: cB.label
              }), (0, fc.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: cB.valueText
              })]
            })]
          }, cB.label)))
        })]
      })
    }
    var ec = nc(1051),
      tB = nc(1194);

    function Sc(cB) {
      tB.NotificationProvider.showCustomPopup({
        body: () => (0, fc.jsx)(yB, {
          ...cB
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function yB(cB) {
      let {
        schematicId: Bc,
        canOverride: nc,
        onApprovalChanged: Oc
      } = cB;
      const {
        t: Tc
      } = (0, ec.x)(), {
        userContext: tB
      } = (0, sc.c)(), Sc = (0, uc.e)(), [yB, zB] = (0, Vc.useState)(null), [pc, hc] = (0, Vc.useState)(null), [aB, lc] = (0, Vc.useState)(!1), Yc = (0, Vc.useCallback)((() => {
        hc(null), rB.e.getGameApprovalInfo(tB, Bc).then((cB => {
          Sc.current && zB(cB)
        })).catch((cB => {
          console.error("Failed to get game approval info", cB), Sc.current && hc(Tc("studio:approvalLoadFailed"))
        }))
      }), [tB, Bc, Sc, Tc]);
      (0, Vc.useEffect)((() => {
        Yc()
      }), [Yc]);
      const Lc = cB => {
        aB || (lc(!0), rB.e.setGameApproval(tB, Bc, cB).then((() => {
          null === Oc || void 0 === Oc || Oc(), Sc.current && Yc()
        })).catch((cB => {
          console.error("Failed to set game approval", cB)
        })).finally((() => {
          Sc.current && lc(!1)
        })))
      };
      return (0, fc.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, fc.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: Tc("studio:approvalTitle")
        }), !yB && !pc && (0, fc.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, fc.jsx)(Mc.e, {})
        }), pc && (0, fc.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: pc
        }), yB && (0, fc.jsxs)(fc.Fragment, {
          children: [(0, fc.jsx)(mB, {
            info: yB
          }), nc && (0, fc.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== yB.manualOverride && (0, fc.jsx)(Pc.d, {
              tooltipInner: (0, fc.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, fc.jsxs)(Ic.n, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Lc(!0)
                },
                disabled: aB,
                children: [(0, fc.jsx)(qB.e, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== yB.manualOverride && (0, fc.jsx)(Pc.d, {
              tooltipInner: (0, fc.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, fc.jsxs)(Ic.L, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Lc(!1)
                },
                disabled: aB,
                children: [(0, fc.jsx)(qB.e, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== yB.manualOverride && (0, fc.jsx)(Pc.d, {
              tooltipInner: (0, fc.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, fc.jsxs)(Ic.d, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Lc(null)
                },
                disabled: aB,
                children: [(0, fc.jsx)(qB.e, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  7811: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(1373),
      Ic = nc(1090),
      rB = nc(569);

    function uc(cB) {
      return cB = function(cB, Bc) {
        var nc;
        const Vc = new URLSearchParams(Bc),
          Ic = Vc.get("lobby"),
          rB = Vc.get("vm"),
          uc = null !== (nc = Ic) && void 0 !== nc ? nc : cB.lobbyName,
          sc = null !== rB && void 0 !== rB ? rB : cB.directJoinVmUrl;
        if (uc === cB.lobbyName && sc === cB.directJoinVmUrl) return cB;
        return {
          ...cB,
          lobbyName: uc,
          directJoinVmUrl: sc
        }
      }(cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), cB = function(cB) {
        if ((0, rB.E)(cB.directJoinVmUrl)) return cB;
        const Bc = (0, Ic.W)(cB.directJoinVmUrl);
        null === Bc && (cB.directJoinVmUrl = void 0);
        return cB
      }(cB = function(cB) {
        if ((0, rB.E)(cB.gameNameWithVariation)) return cB;
        return cB.gameNameWithVariation = (0, Vc.j)(cB.gameNameWithVariation), cB
      }(cB))
    }
  },
  35077: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      f: () => Vc
    });
    const Vc = "skyblockSkills",
      Ic = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);