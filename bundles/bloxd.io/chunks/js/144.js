export const id = 144;
export const ids = [144, 715];
export const modules = {
  37766: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => CS
    });
    var Zr = Qr(360),
      Wr = Qr(4759),
      ar = Qr(4791),
      jr = Qr(4785),
      Ir = Qr(4777),
      fr = Qr(1251),
      Er = Qr(43),
      pr = Qr(1885),
      xr = Qr(1489),
      mr = Qr(1576),
      Nr = Qr(1155),
      Ur = Qr.n(Nr),
      tr = Qr(1804),
      hr = Qr(72),
      zr = Qr(92),
      Yr = Qr(3312),
      nr = Qr(1433),
      er = Qr(1743),
      Kr = Qr(1181),
      yr = Qr(4650),
      Br = Qr(5320),
      Tr = Qr(3628),
      vr = Qr(2057),
      Or = Qr(4752),
      Lr = Qr(1895),
      lr = Qr(1629),
      Xr = Qr(3045),
      Pr = Qr(1444),
      Hr = Qr(3657),
      qr = Qr(4205),
      Rr = Qr(1338);
    const gr = 15e3,
      Cr = 2500;

    function Mr(rr) {
      var Sr;
      let {
        eventName: Qr
      } = rr;
      const {
        t: Zr
      } = (0, fr.E)(), Wr = Lr.d[Qr], [ar, jr] = (0, hr.useState)((() => Date.now() >= Wr.endsAt.getTime())), [Ir, Er] = (0, hr.useState)("overall"), pr = function(rr, Sr) {
        const {
          userContext: Qr,
          isUserContextUpdating: Zr
        } = (0, Kr.c)(), Wr = `${rr}:${Sr}`, [ar, jr] = (0, hr.useState)({
          requestKey: Wr,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, hr.useEffect)((() => {
          if (Zr) return;
          let ar, Ir = !1;
          const fr = async () => {
            if ("visible" === document.visibilityState) try {
              const Zr = await lr.c.getGameEventLeaderboard(Qr, {
                event: rr,
                scope: Sr
              });
              Ir || jr({
                requestKey: Wr,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Zr
                }
              })
            } catch {
              Ir || jr((rr => rr.requestKey === Wr && "loaded" === rr.leaderboard.status ? rr : {
                requestKey: Wr,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            Ir || (ar = setTimeout(fr, gr))
          };
          return fr(), () => {
            Ir = !0, clearTimeout(ar)
          }
        }), [rr, Sr, Wr, Qr, Zr]), ar.requestKey === Wr ? ar.leaderboard : {
          status: "loading"
        }
      }(Qr, Ir), xr = function(rr) {
        const Sr = (0, hr.useRef)(null),
          Qr = (0, hr.useRef)(0),
          Zr = (0, hr.useRef)(),
          [Wr, ar] = (0, hr.useState)({});
        return (0, hr.useEffect)((() => {
          const Wr = null === rr || void 0 === rr ? void 0 : rr.entries;
          if (!Wr) return;
          const jr = new Map(Wr.map((rr => [rr.player.name, rr.value]))),
            Ir = Sr.current;
          if (Sr.current = jr, null === Ir) return;
          const fr = {};
          for (const [rr, Sr] of jr) {
            const Zr = Ir.get(rr);
            void 0 !== Zr && Sr > Zr && (fr[rr] = {
              amount: Sr - Zr,
              key: Qr.current++
            })
          }
          0 !== Object.keys(fr).length && (ar(fr), clearTimeout(Zr.current), Zr.current = setTimeout((() => {
            ar({})
          }), Cr))
        }), [rr]), (0, hr.useEffect)((() => () => {
          clearTimeout(Zr.current)
        }), []), Wr
      }("loaded" === pr.status ? pr.leaderboard : null), mr = function(rr) {
        const [Sr, Qr] = (0, hr.useState)(null), Zr = "loaded" === rr.status ? rr.leaderboard.goalProgress : void 0;
        return (0, hr.useEffect)((() => {
          Zr && Qr(Zr)
        }), [Zr]), Sr
      }(pr), Nr = Xr.f[`profileEffect_${Wr.prizePack}`];
      if (ar) return null;
      const tr = "loaded" === pr.status ? pr.leaderboard : null,
        zr = null !== (Sr = null === tr || void 0 === tr ? void 0 : tr.entries) && void 0 !== Sr ? Sr : null,
        Yr = null !== tr && void 0 !== tr && tr.own && null !== zr && !zr.some((rr => rr.isOwn)) ? tr.own : null;
      return (0, Rr.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Rr.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Rr.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Rr.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Rr.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Rr.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Zr("gameEvents:live")]
              }), (0, Rr.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Zr("gameEvents:endsIn"), (0, Rr.jsx)(Tr.d, {
                  toTime: Wr.endsAt,
                  onReachEndOfCountdown: () => {
                    jr(!0)
                  }
                })]
              })]
            }), (0, Rr.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Zr(Wr.titleKey)
            }), (0, Rr.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Rr.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [Nr && (0, Rr.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Rr.jsx)(Nr, {})
                }), (0, Rr.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Rr.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Zr("gameEvents:prize")
                  }), (0, Rr.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Zr(Wr.prizeNameKey)
                  })]
                })]
              }), (0, Rr.jsx)(Gr, {
                event: Wr,
                progress: mr
              })]
            })]
          }), (0, Rr.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Rr.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Rr.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Zr(Wr.leaderboard.titleKey)
              }), (0, Rr.jsx)(qr.d, {
                ariaLabel: Zr("gameEvents:leaderboardScope"),
                options: Lr.c.map((rr => ({
                  value: rr,
                  label: Zr(`gameEvents:${rr}Scope`)
                }))),
                value: Ir,
                onChange: Er
              })]
            }), "loading" === pr.status && (0, Rr.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Rr.jsx)(Pr.c, {})
            }), ("unavailable" === pr.status || "loaded" === pr.status && null === zr) && (0, Rr.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Zr("gameEvents:leaderboardUnavailable")
            }), null !== zr && 0 === zr.length && (0, Rr.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Zr("friends" === Ir ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== zr && zr.length > 0 && (0, Rr.jsx)("ol", {
              className: "GameEventPanelRows",
              children: zr.map((rr => {
                const Sr = xr[rr.player.name];
                return (0, Rr.jsxs)("li", {
                  className: Ur()("GameEventPanelRow", {
                    GameEventPanelRowOwn: rr.isOwn,
                    GameEventPanelRowTop: rr.rank <= 3
                  }),
                  children: [(0, Rr.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", rr.rank]
                  }), (0, Rr.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Rr.jsx)(Hr.i, {
                      playerSocialPreview: {
                        ...rr.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== Sr && (0, Rr.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", Sr.amount.toLocaleString()]
                  }, Sr.key), (0, Rr.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: rr.value.toLocaleString()
                  })]
                }, rr.player.name)
              }))
            }), Yr && (0, Rr.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Rr.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", Yr.rank.toLocaleString()]
              }), (0, Rr.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Zr("gameEvents:yourPlace")
              }), (0, Rr.jsx)("span", {
                className: "GameEventPanelScore",
                children: Yr.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function Gr(rr) {
      let {
        event: Sr,
        progress: Qr
      } = rr;
      const {
        t: Zr
      } = (0, fr.E)(), Wr = null !== Qr && Sr.prizeGoals.some(((rr, Sr) => Qr[Sr] >= rr.target));
      return (0, Rr.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Rr.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Zr(Wr ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Rr.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: Sr.prizeGoals.map(((rr, Sr) => {
            const Wr = null === Qr ? null : Math.min(Qr[Sr], rr.target);
            return (0, Rr.jsxs)(hr.Fragment, {
              children: [Sr > 0 && (0, Rr.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Zr("gameEvents:goalsOr")
              }), (0, Rr.jsxs)("div", {
                className: Ur()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Wr === rr.target
                }),
                children: [(0, Rr.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Zr(rr.labelKey)
                }), (0, Rr.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Rr.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Wr && void 0 !== Wr ? Wr : 0) / rr.target * 100 + "%"
                    }
                  }), null !== Wr && (0, Rr.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Wr.toLocaleString(), " / ", rr.target.toLocaleString()]
                  })]
                })]
              })]
            }, rr.board)
          }))
        })]
      })
    }
    var kr = Qr(1675),
      Ar = Qr(1729),
      Vr = Qr(1144),
      ir = Qr(815),
      wr = Qr(4743);

    function cr(rr) {
      let {
        gameNameWithVariation: Sr
      } = rr;
      const Qr = (0, kr.G)(Sr),
        [Zr, Wr] = (0, hr.useState)(null);
      if ((0, hr.useEffect)((() => {
          if (!Qr) return;
          let rr = !0;
          return (0, Ar.i)(Qr).then((Sr => {
            rr && Wr(Sr)
          })).catch((rr => {
            console.error(`Failed to load the page copy for ${Qr.name}`, rr)
          })), () => {
            rr = !1
          }
        }), [Qr]), !Qr || !Zr || Zr.name !== Qr.name) return null;
      const ar = (0, Ar.f)(Zr),
        jr = new Set((0, Vr.d)((0, ir.f)()).map((rr => (0, kr.y)(rr)))),
        Ir = Zr.similarGames.filter((rr => jr.has((0, kr.y)(rr))));
      return (0, Rr.jsx)("div", {
        className: "GamePageContent",
        children: (0, Rr.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Rr.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Rr.jsx)("h2", {
              children: ar.whatIs
            }), Zr.whatIs.map((rr => (0, Rr.jsx)("p", {
              children: rr
            }, rr)))]
          }), (0, Rr.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Rr.jsx)("h2", {
              children: ar.howToPlay
            }), Zr.howToPlay.map((rr => (0, Rr.jsx)("p", {
              children: rr
            }, rr)))]
          }), (0, Rr.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Rr.jsx)("h2", {
              children: ar.features
            }), (0, Rr.jsx)("ul", {
              children: Zr.features.map((rr => (0, Rr.jsx)("li", {
                children: rr
              }, rr)))
            })]
          }), (0, Rr.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Rr.jsx)("h2", {
              children: ar.tips
            }), (0, Rr.jsx)("ul", {
              children: Zr.tips.map((rr => (0, Rr.jsx)("li", {
                children: rr
              }, rr)))
            })]
          }), (0, Rr.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Rr.jsx)("h2", {
              children: ar.faq
            }), Zr.faq.map((rr => {
              let {
                question: Sr,
                answer: Qr
              } = rr;
              return (0, Rr.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Rr.jsx)("h3", {
                  children: Sr
                }), (0, Rr.jsx)("p", {
                  children: Qr
                })]
              }, Sr)
            }))]
          }), Ir.length > 0 && (0, Rr.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Rr.jsx)("h2", {
              children: ar.similarGames
            }), (0, Rr.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: Ir.map((rr => (0, Rr.jsx)("li", {
                children: (0, Rr.jsx)(wr.e, {
                  source: {
                    type: "game",
                    gameNameWithVariation: rr
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, rr)))
            })]
          })]
        })
      })
    }
    var Fr = Qr(1448),
      or = Qr(109),
      br = Qr(1187),
      Jr = Qr(35515),
      Dr = Qr(1776),
      dr = Qr(1653),
      sr = Qr(1644),
      ur = Qr(1738),
      rS = Qr(1583),
      SS = Qr(1475),
      QS = Qr(37770),
      ZS = Qr(1283),
      WS = Qr(1127),
      aS = Qr(379),
      jS = Qr(1133),
      IS = Qr(1671),
      fS = Qr(10073),
      ES = Qr(26),
      pS = Qr(3549),
      xS = Qr(868),
      mS = Qr(1279),
      NS = Qr(7458),
      US = Qr(4746);

    function tS(rr) {
      let {
        preview: Sr,
        isBroken: Qr
      } = rr;
      const Zr = null === Sr ? null : (0, ar.g)(Sr, "small"),
        jr = (0, Wr.f)(null !== Zr && void 0 !== Zr ? Zr : ar.q);
      return null === Sr ? (0, Rr.jsx)("div", {
        className: Ur()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: Qr
        }),
        children: (0, Rr.jsx)(Fr.c, {
          name: Qr ? "triangle-exclamation" : "star"
        })
      }) : (0, Rr.jsx)("div", {
        className: Ur()("FeaturedGamesPopupSlotThumbnail", Ir.j),
        style: (0, Ir.g)(jr),
        role: "img",
        "aria-label": Sr.name,
        children: (0, Rr.jsx)(Ir.c, {
          image: jr
        })
      })
    }

    function hS(rr) {
      let {
        schematicId: Sr,
        gameName: Qr
      } = rr;
      const {
        userContext: Wr
      } = (0, Kr.c)(), ar = (0, US.b)(), [jr, Ir] = (0, hr.useState)(null), [fr, Er] = (0, hr.useState)(null), [pr, xr] = (0, hr.useState)(!1), Nr = (0, hr.useCallback)((() => {
        Er(null), lr.c.getFeaturedGames(Wr).then((rr => {
          ar.current && Ir(rr.slots)
        })).catch((rr => {
          console.error("Failed to get featured games", rr), ar.current && Er("Failed to load featured games")
        }))
      }), [Wr, ar]);
      (0, hr.useEffect)((() => {
        Nr()
      }), [Nr]);
      const Ur = (rr, Sr) => {
        pr || (xr(!0), lr.c.setFeaturedGame(Wr, rr, Sr).then((() => {
          ar.current && Nr()
        })).catch((rr => {
          console.error("Failed to set featured game", rr), ar.current && Er("Failed to update the featured slot")
        })).finally((() => {
          ar.current && xr(!1)
        })))
      };
      return (0, Rr.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Rr.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !jr && !fr && (0, Rr.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Rr.jsx)(Pr.c, {})
        }), fr && (0, Rr.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: fr
        }), jr && (0, Rr.jsxs)(Rr.Fragment, {
          children: [(0, Rr.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: jr.map((rr => {
              const Qr = rr.schematicId === Sr,
                Wr = null === rr.schematicId,
                {
                  categoryGroup: ar
                } = Zr.N[rr.slotId];
              return (0, Rr.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Rr.jsx)(tS, {
                  preview: rr.preview,
                  isBroken: !Wr
                }), (0, Rr.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Rr.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Zr.ob)(ar), " \xb7 position", " ", (0, Zr.Q)(rr.slotId, Zr.Pb) + 1, " of", " ", (0, Zr.Lb)(ar, Zr.Pb)]
                  }), Wr && (0, Rr.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Wr && null !== rr.preview && (0, Rr.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: rr.preview.name
                  }), !Wr && null === rr.preview && (0, Rr.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Rr.jsx)(Fr.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Rr.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Wr && (0, Rr.jsxs)(mr.u, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Ur(rr.slotId, Sr)
                    },
                    disabled: pr,
                    children: [(0, Rr.jsx)(Fr.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !Wr && !Qr && (0, Rr.jsxs)(mr.U, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Ur(rr.slotId, Sr)
                    },
                    disabled: pr,
                    children: [(0, Rr.jsx)(Fr.c, {
                      name: "star"
                    }), " Replace"]
                  }), !Wr && (0, Rr.jsxs)(mr.L, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Ur(rr.slotId, null)
                    },
                    disabled: pr,
                    children: [(0, Rr.jsx)(Fr.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, rr.slotId)
            }))
          }), (0, Rr.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var zS = Qr(5473),
      YS = Qr(5352),
      nS = Qr(4681);
    const eS = 8,
      KS = 12;

    function yS(rr) {
      let {
        customLobbies: Sr,
        favouriteLobbies: Qr,
        toggleLikeLobby: Zr,
        showReport: Wr
      } = rr;
      const [ar, jr] = (0, hr.useState)(eS);
      return (0, hr.useEffect)((() => {
        if (ar >= Sr.length) return;
        let rr = !0;
        return (0, nS.i)().then((() => {
          rr && jr(ar + KS)
        })), () => {
          rr = !1
        }
      }), [ar, Sr.length]), (0, Rr.jsx)(Rr.Fragment, {
        children: Sr.slice(0, ar).map((rr => (0, Rr.jsx)(YS.c, {
          customLobby: rr,
          favouriteLobbies: Qr,
          toggleLikeLobby: Zr,
          showReport: Wr
        }, rr.name)))
      })
    }
    var BS = Qr(5359),
      TS = Qr(5375),
      vS = Qr(5335),
      OS = Qr(4828),
      LS = Qr(5428),
      lS = Qr(10055),
      XS = Qr(219);
    const PS = {
      skyblock: [Qr(37798).b]
    };
    var HS = Qr(688);
    const qS = {
      listedVariations: null,
      backgroundImage: ar.q,
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

    function RS(rr, Sr) {
      const Qr = xS.f[rr.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, ar.g)(rr, "large"),
        badges: [],
        category: rr.gameCategory,
        title: void 0 !== (null === Qr || void 0 === Qr ? void 0 : Qr.title) ? Sr(Qr.title) : rr.name,
        variationTitle: null,
        description: void 0 !== (null === Qr || void 0 === Qr ? void 0 : Qr.description) ? Sr(Qr.description) : rr.description,
        ownerSocialPreviewWithoutLocation: "owner" in rr ? rr.owner : null,
        ccu: rr.ccu,
        favourites: rr.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in rr ? rr.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function gS(rr) {
      var Sr, Qr, Zr;
      return null !== (Sr = null !== (Qr = (0, XS.m)() ? function(rr) {
        for (const [Sr, Qr] of Object.entries(PS)) {
          const Zr = [Sr, ...Qr.map((rr => (0, aS.Ib)(Sr, rr)))];
          if (Zr.includes(rr)) return Zr
        }
        return null
      }(rr) : null) && void 0 !== Qr ? Qr : null === (Zr = xS.c[rr]) || void 0 === Zr ? void 0 : Zr.listedVariations) && void 0 !== Sr ? Sr : null
    }

    function CS() {
      const {
        gameNameWithVariation: rr
      } = (0, dr.w)();
      if ((0, hr.useEffect)(OS.n, []), rr && (0, ZS.u)(rr)) return (0, Rr.jsx)(MS, {
        urlId: rr
      }, rr);
      const Sr = rr && (0, WS.l)(rr) ? rr : "firstParty";
      return (0, Rr.jsx)(kS, {}, Sr)
    }

    function MS(rr) {
      let {
        urlId: Sr
      } = rr;
      const {
        t: Qr
      } = (0, fr.E)(), {
        userContext: Zr,
        isUserContextUpdating: Wr
      } = (0, Kr.c)(), ar = (0, hr.useMemo)((() => (0, Dr.i)(Sr)), [Sr]);
      (0, hr.useMemo)((() => {
        if (null === ar) return;
        const rr = br.userContextManager.peekCurrentUserContext();
        (null !== rr ? lr.c.getGame(rr, ar.schematicId) : br.userContextManager.getCurrentUserContext().then((rr => lr.c.getGame(rr, ar.schematicId)))).catch((rr => {
          null === (0, lr.h)(rr) && console.error(`Failed to get the custom game ${ar.schematicId}`, rr), (0, Dr.f)(Sr)
        }))
      }), [ar, Sr]);
      const [jr, Ir] = (0, hr.useState)(null), Er = (0, Jr.d)();
      (0, hr.useEffect)((() => {
        if (null !== ar || Wr) return;
        let rr = !0;
        return lr.c.getGameByUrlId(Zr, Sr).then((Zr => {
          rr && (Zr.takenDown ? GS(Qr, Zr) : Ir({
            urlId: Sr,
            game: Zr
          }))
        })).catch((Zr => {
          const Wr = null !== (0, lr.h)(Zr);
          Wr || console.error(`Failed to find the custom game with urlId ${Sr}`, Zr), rr && (Wr ? GS(Qr, null) : (0, sr.navigateToHomePage)())
        })), () => {
          rr = !1
        }
      }), [Sr, ar, Wr, Zr, Qr]);
      const pr = null !== ar && void 0 !== ar ? ar : (null === jr || void 0 === jr ? void 0 : jr.urlId) === Sr ? jr.game : null;
      return null === pr ? (0, Rr.jsx)(Pr.c, {}) : Er ? (0, Rr.jsx)(kS, {
        gameNameWithVariation: (0, WS.v)(pr.schematicId),
        knownCustomGame: pr
      }, pr.schematicId) : null
    }

    function GS(rr, Sr) {
      (0, sr.navigateToHomePage)(), (0, lS.f)(rr, Sr)
    }

    function kS(rr) {
      var Sr, Qr, jr, Nr, Lr, Xr, Pr, qr;
      let {
        gameNameWithVariation: gr,
        knownCustomGame: Cr = null
      } = rr;
      const {
        t: Gr
      } = (0, fr.E)();
      (0, pS.k)();
      const Ar = (0, pS.r)(),
        {
          userContext: Vr,
          isUserContextUpdating: ir
        } = (0, Kr.c)(),
        wr = (0, vS.e)(),
        br = (0, sr.useNavigatePreserveSearch)(),
        Jr = (0, dr.w)(),
        Dr = (0, hr.useMemo)((() => gr ? {
          gameNameWithVariation: gr
        } : Jr), [gr, Jr]),
        rS = (0, fS.c)(Dr),
        ZS = (0, hr.useMemo)((() => {
          const rr = function(rr) {
            var Sr, Qr;
            const Zr = gS(rr);
            if (!Zr || 0 === Zr.length || Zr.includes(rr)) return rr;
            const Wr = Er.j.getItem((0, Yr.g)(rr));
            if (Wr && Zr.includes(Wr)) return Wr;
            return null !== (Sr = null === (Qr = xS.c[rr]) || void 0 === Qr ? void 0 : Qr.defaultListedVariation) && void 0 !== Sr ? Sr : Zr[0]
          }(rS.gameNameWithVariation);
          return rr === rS.gameNameWithVariation ? rS : {
            ...rS,
            gameNameWithVariation: rr
          }
        }), [rS]);
      (0, hr.useEffect)((() => {
        const rr = rS.gameNameWithVariation;
        ZS.gameNameWithVariation !== rr && rr !== (0, aS.Mb)(rr) && br((0, kr.A)(ZS.gameNameWithVariation), {
          replace: !0
        })
      }), [ZS.gameNameWithVariation, rS.gameNameWithVariation, br]);
      const [US, tS] = (0, hr.useState)(""), nS = hr.useRef(null), [eS, KS] = (0, hr.useState)(), OS = (0, WS.l)(ZS.gameNameWithVariation), lS = (0, hr.useMemo)((() => OS ? null : function(rr, Sr, Qr) {
        var Zr, Wr;
        const jr = xS.c[rr];
        return (0, HS.L)(jr) ? null : {
          listedVariations: gS(rr),
          backgroundImage: (0, ar.m)(rr, (0, ar.d)(jr)),
          badges: (0, pr.filterBadges)(jr.badges),
          category: jr.type,
          title: Qr(jr.title),
          variationTitle: jr.variationTitle ? Qr(jr.variationTitle) : null,
          description: Qr(jr.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== Sr ? null !== (Zr = Sr[rr]) && void 0 !== Zr ? Zr : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: jr.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: jr.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (Wr = jr.canCreateCustomLobbies) || void 0 === Wr || Wr,
          countdownInformation: (0, Yr.f)(rr)
        }
      }(ZS.gameNameWithVariation, Ar, Gr)), [OS, ZS.gameNameWithVariation, Ar, Gr]), [XS, PS] = (0, hr.useState)(!1), [CS, MS] = (0, hr.useState)(null), [kS, VS] = (0, hr.useState)((() => Cr ? RS(Cr, Gr) : qS)), iS = null !== lS && void 0 !== lS ? lS : kS, [wS] = (0, hr.useState)(iS === qS), cS = (0, Wr.f)(iS.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: FS,
        recentlyPlayedCustomLobbies: oS
      } = (0, hr.useMemo)((() => function(rr, Sr, Qr, Zr) {
        var Wr;
        const ar = rr => {
            const Qr = (0, WS.q)(rr),
              Zr = Sr.find((Sr => "custom" === Sr.type ? Sr.schematicId === Qr : Sr.gameNameWithVariation === rr));
            return Zr ? [...Zr.recentLobbies] : []
          },
          jr = (0, pr.getRecentGameNameWithVariationLobbiesKey)(rr),
          Ir = null !== (Wr = Er.j.getItem(jr)) && void 0 !== Wr ? Wr : [],
          fr = [...ar(rr), ...Ir],
          xr = [];
        for (const Er of fr)(0, mS.M)(Er) && !xr.includes(Er) && xr.push(Er);
        let mr = fr;
        if (Qr) {
          const rr = ar("classic_worlds"),
            Sr = fr.filter((Sr => !rr.includes(Sr)));
          mr = [...rr, ...Sr]
        }
        const Nr = [],
          Ur = !1 === Zr ? [] : mr;
        for (const Er of Ur)(0, mS.M)(Er) || Nr.includes(Er) || Nr.push(Er);
        return {
          recentlyPlayedPublicLobbies: xr,
          recentlyPlayedCustomLobbies: Nr
        }
      }(ZS.gameNameWithVariation, wr, iS.showWorldsInsteadOfCustomLobbies, iS.canCreateCustomLobbies)), [ZS.gameNameWithVariation, wr, iS.showWorldsInsteadOfCustomLobbies, iS.canCreateCustomLobbies]), [bS, JS] = (0, hr.useState)(!0), [DS, dS] = (0, hr.useState)([]), [sS, uS] = (0, hr.useState)(null), [rQ, SQ] = (0, hr.useState)("explore"), QQ = (0, hr.useRef)(!1), ZQ = (0, hr.useCallback)((rr => {
        (0, zr.unstable_batchedUpdates)((() => {
          KS(rr), VS((Sr => ({
            ...RS(rr, Gr),
            isFavourite: Sr.isFavourite
          })))
        }))
      }), [Gr]);
      (0, hr.useEffect)((() => {
        null === ES.c.get("gameEntrySource") && (0, ES.m)("gameInformationPageDirect")
      }), []);
      const WQ = (0, hr.useRef)(null);
      (0, hr.useEffect)((() => {
        const rr = rr => {
            WQ.current = rr.target instanceof Element ? rr.target.closest("a, button") : null
          },
          Sr = rr => {
            "Tab" === rr.key && (WQ.current = null)
          };
        return document.addEventListener("pointerdown", rr, !0), document.addEventListener("keydown", Sr, !0), () => {
          document.removeEventListener("pointerdown", rr, !0), document.removeEventListener("keydown", Sr, !0)
        }
      }), []), (0, yr.d)("Enter", (rr => {
        const Sr = rr.target instanceof Element ? rr.target : null;
        if (rr.defaultPrevented || null !== Sr && void 0 !== Sr && Sr.closest("input, textarea, select")) return;
        const Qr = null === Sr || void 0 === Sr ? void 0 : Sr.closest("a, button");
        Qr && Qr !== WQ.current || (rr.preventDefault(), NQ())
      })), (0, Br.e)(sr.navigateToHomePage);
      const aQ = FS.length > 0 || oS.length > 0,
        jQ = !iS.useRejoinLastLobbyButton || 0 === FS.length,
        IQ = OS && null === iS.ownerSocialPreviewWithoutLocation,
        fQ = Vr.getPlayerName() === (null === eS || void 0 === eS || null === (Sr = eS.owner) || void 0 === Sr ? void 0 : Sr.name),
        EQ = null !== (Qr = null === (jr = iS.badges.find((rr => "event" === rr.type))) || void 0 === jr ? void 0 : jr.event) && void 0 !== Qr ? Qr : null,
        pQ = jQ ? mr.p : mr.h,
        xQ = (0, Rr.jsx)(xr.f, {
          tooltipInner: (0, Rr.jsx)("div", {
            children: Gr("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Rr.jsx)(pQ, {
            className: "GameInformationButton",
            padDefaultFocus: jQ,
            showPress: !0,
            onClick: () => {
              NQ()
            },
            children: (0, Rr.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [jQ && (0, Rr.jsxs)(Rr.Fragment, {
                children: [(0, Rr.jsx)(Fr.c, {
                  name: "play"
                }), " "]
              }), Gr("homePage:quickPlay")]
            })
          })
        });
      (0, hr.useEffect)((() => {
        if (!OS || ir) return;
        let rr = !0;
        const Sr = (0, WS.q)(ZS.gameNameWithVariation);
        return lr.c.getGame(Vr, Sr).then((Sr => {
          rr && (Sr.takenDown ? MS({
            ownGame: Sr
          }) : ZQ(Sr))
        })).catch((Sr => {
          const Qr = null !== (0, lr.h)(Sr);
          Qr || console.error("Failed to get Custom Game information", Sr), rr && (Qr ? MS({
            ownGame: null
          }) : (0, sr.navigateToHomePage)())
        })), lr.c.getFavouriteGames(Vr).then((Qr => {
          rr && VS((rr => ({
            ...rr,
            isFavourite: Qr.includes(Sr)
          })))
        })).catch((Sr => {
          console.error("Failed to get favourite games", Sr), rr && PS(!0)
        })), () => {
          rr = !1
        }
      }), [OS, ir, ZS.gameNameWithVariation, ZQ, Vr]), (0, hr.useEffect)((() => {
        null !== CS && GS(Gr, CS.ownGame)
      }), [CS, Gr]);
      const mQ = !OS && null === lS;

      function NQ(rr) {
        (0, LS.e)(), br((0, nr.c)(ZS.gameNameWithVariation, rr))
      }(0, hr.useEffect)((() => {
        mQ && (0, sr.navigateToHomePage)()
      }), [mQ]), (0, hr.useEffect)((() => {
        if (!1 === iS.canCreateCustomLobbies) return;
        let rr = !0;
        return null !== iS.showWorldsInsteadOfCustomLobbies && !1 === ir && (JS(!0), lr.c.getFavouriteLobbies(Vr).then((rr => {
          uS(rr)
        })), lr.c.getOpenCustomLobbies(Vr, {
          gameNameWithVariation: iS.showWorldsInsteadOfCustomLobbies ? "classic" : ZS.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === rQ,
          onlyFavouriteLobbies: "favourite" === rQ
        }).then((Sr => {
          rr && (0, zr.unstable_batchedUpdates)((() => {
            dS(Sr), JS(!1)
          }))
        })).catch((Sr => {
          console.error("Failed to get open custom lobbies", Sr), rr && JS(!1)
        }))), () => {
          rr = !1
        }
      }), [ir, ZS, rQ, iS.showWorldsInsteadOfCustomLobbies, iS.canCreateCustomLobbies, Vr]);
      const UQ = (0, hr.useCallback)((async rr => {
          try {
            if (!sS) return;
            sS.includes(rr) ? (lr.c.unfavouriteLobby(Vr, rr), uS(sS.filter((Sr => Sr !== rr)))) : (lr.c.favouriteLobby(Vr, rr).catch((rr => {
              console.error("Failed to favourite lobby", rr)
            })), uS([...sS, rr]))
          } catch (Sr) {
            console.error("Failed to like lobby", Sr)
          }
        }), [Vr, sS]),
        tQ = (null === eS || void 0 === eS ? void 0 : eS.schematicId) === (0, WS.q)(rS.gameNameWithVariation) ? eS : null,
        hQ = tQ && (0, kr.I)(rS.gameNameWithVariation, (rr => Gr(rr)), tQ);
      (0, ur.e)(tQ && (0, kr.A)(rS.gameNameWithVariation, tQ));
      const zQ = or.featureFlags.canUseCustomLobbies && !0 === iS.canCreateCustomLobbies,
        YQ = (0, Rr.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Rr.jsx)(cr, {
            gameNameWithVariation: ZS.gameNameWithVariation
          })
        });
      return (0, Rr.jsx)(Rr.Fragment, {
        children: (0, Rr.jsxs)("article", {
          className: Ur()("GameInformation", {
            GameInformationFadeIn: wS,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (Nr = iS.countdownInformation) || void 0 === Nr ? void 0 : Nr.type)
          }),
          children: [hQ && (0, Rr.jsx)(er.b, {
            meta: hQ
          }), (0, Rr.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Rr.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Rr.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Rr.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Rr.jsx)("div", {
                  className: Ur()("GameInformationTopBackgroundImage", Ir.j),
                  style: (0, Ir.g)(cS),
                  children: (0, Rr.jsx)(Ir.c, {
                    image: cS
                  })
                })]
              }), (0, Rr.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Rr.jsx)(zS.e, {}), (0, Rr.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Rr.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Rr.jsxs)("div", {
                      className: Ur()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: IQ
                      }),
                      children: [iS.badges.map((rr => (0, Rr.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${rr.type}`,
                        children: (0, Rr.jsx)(Or.e, {
                          badge: rr
                        })
                      }, rr.type))), OS && (0, Rr.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Rr.jsx)(vr.c, {
                          text: (0, Zr.hb)({
                            type: "playerCrafted"
                          })
                        })
                      }), iS.category && (0, Rr.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Rr.jsx)(vr.c, {
                          text: [{
                            str: (0, Zr.jb)(iS.category).toUpperCase()
                          }]
                        })
                      }), null !== iS.ccu && (0, Rr.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Rr.jsx)(Fr.c, {
                          name: "user"
                        }), (0, mS.S)(iS.ccu), " online"]
                      }), null !== iS.ownerSocialPreviewWithoutLocation && (0, Rr.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Rr.jsx)("span", {
                          children: "Made by"
                        }), (0, Rr.jsx)(Hr.i, {
                          playerSocialPreview: {
                            ...iS.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), IQ && (0, Rr.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Rr.jsx)("span", {
                          children: "Made by"
                        }), (0, Rr.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== iS.favourites && (null !== iS.isFavourite || OS && !XS) && (0, Rr.jsx)(mr.w, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== QQ.current && (QQ.current = !0, null !== iS.isFavourite)) {
                              const rr = (0, WS.q)(ZS.gameNameWithVariation);
                              let Sr;
                              iS.isFavourite ? (Sr = -1, lr.c.unfavouriteGame(Vr, rr).catch((rr => {
                                console.error("Failed to get unfavourite game", rr)
                              })).finally((() => {
                                QQ.current = !1
                              }))) : (Sr = 1, lr.c.favouriteGame(Vr, rr).catch((rr => {
                                console.error("Failed to get favourite game", rr)
                              })).finally((() => {
                                QQ.current = !1
                              }))), VS((rr => ({
                                ...rr,
                                isFavourite: !rr.isFavourite
                              }))), VS((rr => ({
                                ...rr,
                                favourites: rr.favourites + Sr
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (Lr = iS.isFavourite) && void 0 !== Lr && Lr,
                        disabled: null === iS.isFavourite,
                        className: Ur()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === iS.isFavourite
                        })
                      }, null === iS.isFavourite ? "pending" : "known"), OS && !IQ && or.featureFlags.useSocialFeatures && !fQ && (0, Rr.jsx)(BS.d, {
                        targetType: "customGame",
                        targetId: (0, WS.q)(ZS.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (Vr.playerHasRank("developer") || Vr.playerHasRank("admin") && fQ) && (0, Rr.jsxs)(mr.p, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          br((0, IS.r)((0, jS.d)(ZS.gameNameWithVariation, !0)))
                        },
                        children: [(0, Rr.jsx)(Fr.c, {
                          name: "star-christmas"
                        }), " ", Gr("studio:viewInStudio")]
                      }), OS && Vr.playerHasRank("developer") && (0, Rr.jsxs)(mr.h, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, NS.c)({
                            schematicId: (0, WS.q)(ZS.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Rr.jsx)(Fr.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), OS && Vr.playerHasRank("developer") && (0, Rr.jsxs)(mr.h, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          SS.NotificationProvider.showCustomPopup({
                            body: () => (0, Rr.jsx)(hS, {
                              schematicId: (0, WS.q)(ZS.gameNameWithVariation),
                              gameName: iS.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Rr.jsx)(Fr.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (Xr = iS.countdownInformation) || void 0 === Xr ? void 0 : Xr.type) && (0, Rr.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Rr.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Rr.jsx)(Tr.d, {
                            toTime: iS.countdownInformation.countdownToTime
                          })]
                        }), (0, Rr.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: iS.countdownInformation.previewText
                        })]
                      })]
                    }, IQ ? "pending" : "shown"), (0, Rr.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Rr.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Rr.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [iS.title, " ", iS.variationTitle && (null === (Pr = xS.c[ZS.gameNameWithVariation]) || void 0 === Pr ? void 0 : Pr.variationThumbnailUseBigRatio) && (0, Rr.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: iS.variationTitle
                          })]
                        })
                      }), iS.listedVariations && iS.listedVariations.length > 1 && (0, Rr.jsx)("div", {
                        className: Ur()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (qr = xS.c[ZS.gameNameWithVariation]) || void 0 === qr ? void 0 : qr.variationThumbnailUseBigRatio
                        }),
                        children: iS.listedVariations.map((rr => {
                          var Sr, Qr;
                          return (0, Rr.jsxs)(AS, {
                            variation: rr,
                            isSelected: ZS.gameNameWithVariation === rr,
                            children: [null !== Ar && (0, Rr.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Rr.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Rr.jsx)(Fr.c, {
                                  name: "user"
                                }), " ", (0, mS.S)(null !== (Sr = Ar[rr]) && void 0 !== Sr ? Sr : 0)]
                              })
                            }), (0, Rr.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: Gr(null !== (Qr = xS.c[rr].variationTitle) && void 0 !== Qr ? Qr : xS.c[rr].title)
                            }), (0, Rr.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, pr.filterBadges)(xS.c[rr].badges).map((rr => (0, Rr.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + rr.type,
                                children: (0, Rr.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Rr.jsx)(Or.e, {
                                    badge: rr
                                  })
                                })
                              }, rr.type)))
                            })]
                          }, rr)
                        }))
                      })]
                    }), iS.description && (0, Rr.jsx)("p", {
                      className: "GameInformationDescription",
                      children: iS.description
                    })]
                  }), (0, Rr.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Rr.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!jQ && (0, Rr.jsx)(xr.f, {
                        tooltipInner: (0, Rr.jsx)("div", {
                          children: Gr("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Rr.jsx)(mr.p, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            NQ(FS[0])
                          },
                          children: (0, Rr.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Rr.jsx)(Fr.c, {
                              name: "play"
                            }), " ", Gr("homePage:rejoinLobbyNumber", {
                              number: FS[0]
                            })]
                          })
                        })
                      }), jQ && xQ]
                    }), (0, Rr.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!jQ && xQ, (0, Rr.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Rr.jsx)(Fr.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Rr.jsx)(tr.b, {
                          className: "JoinLobbyInput",
                          placeholderText: Gr("homePage:lobbyName"),
                          maxLength: mS.O,
                          domRef: nS,
                          onValueChange: rr => {
                            rr = (0, mS.ub)(rr), tS(rr)
                          },
                          onEnter: () => {
                            0 === US.length ? NQ(FS[0]) : NQ(US)
                          }
                        }), (0, Rr.jsx)(mr.h, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === US.length ? NQ(FS[0]) : NQ(US)
                          },
                          children: Gr("general:join")
                        })]
                      })]
                    }), (0, Rr.jsxs)("section", {
                      className: Ur()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !aQ
                      }),
                      children: [(0, Rr.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Rr.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Rr.jsx)(Fr.c, {
                            name: "clock-rotate-left"
                          }), aQ && (0, Rr.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: Gr("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Rr.jsx)(TS.e, {
                        lobbyGroups: [FS, oS],
                        onLobbyClick: rr => {
                          NQ(rr)
                        },
                        keyPrefix: ZS.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== EQ && (0, Rr.jsx)(Mr, {
                eventName: EQ
              })]
            }), zQ && (0, Rr.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Rr.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Rr.jsxs)("div", {
                  className: Ur()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === iS.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === iS.showWorldsInsteadOfCustomLobbies && (0, Rr.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Rr.jsx)(Fr.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Rr.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Rr.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Gr("game:worlds")]
                    })]
                  }), !1 === iS.showWorldsInsteadOfCustomLobbies && (0, Rr.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Rr.jsx)(Fr.c, {
                      name: "joystick"
                    }), (0, Rr.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Rr.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Gr("homePage:customLobbies")]
                    })]
                  }), (0, Rr.jsx)(mr.U, {
                    onClick: () => {
                      SQ("explore")
                    },
                    active: "explore" === rQ,
                    children: Gr("general:explore")
                  }), (0, Rr.jsx)(mr.U, {
                    onClick: () => {
                      SQ("favourite")
                    },
                    active: "favourite" === rQ,
                    children: Gr("homePage:favouriteLobbies")
                  }), (0, Rr.jsx)(mr.U, {
                    onClick: () => {
                      SQ("owned")
                    },
                    active: "owned" === rQ,
                    children: Gr("homePage:ownedLobbies")
                  })]
                }), (0, Rr.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Rr.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Rr.jsx)(YS.b, {
                      label: "Create",
                      onClick: () => {
                        SS.NotificationProvider.showCustomPopup({
                          body: rr => (0, Rr.jsx)(QS.CreateCustomLobby, {
                            gameNameWithVariation: ZS.gameNameWithVariation,
                            close: rr
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === bS && (0, Rr.jsx)(YS.d, {}), !1 === bS && (0, Rr.jsx)(yS, {
                      customLobbies: DS,
                      favouriteLobbies: sS,
                      toggleLikeLobby: UQ,
                      showReport: or.featureFlags.useSocialFeatures && "owned" !== rQ
                    })]
                  }), YQ]
                })]
              })
            })]
          }), !zQ && YQ]
        })
      })
    }

    function AS(rr) {
      let {
        variation: Sr,
        isSelected: Qr,
        children: Zr
      } = rr;
      const fr = xS.c[Sr],
        pr = (0, ar.m)(Sr, (0, ar.p)(fr)),
        xr = (0, Wr.f)(pr),
        mr = (0, jr.e)([(0, ar.i)(Sr, (0, ar.d)(fr))]);
      return (0, Rr.jsxs)(sr.LinkPreserveSearch, {
        to: (0, kr.A)(Sr),
        replace: !0,
        className: Ur()("GameInformationVariation", Ir.j, {
          SelectedGameInformationVariation: Qr
        }),
        onClick: rr => {
          if (!(0, rS.d)(rr)) return;
          const Qr = (0, Yr.g)(Sr);
          Er.j.setItem(Qr, Sr)
        },
        onMouseEnter: mr.start,
        onMouseLeave: mr.cancel,
        onFocus: mr.start,
        onBlur: mr.cancel,
        style: (0, Ir.g)(xr),
        children: [(0, Rr.jsx)(Ir.c, {
          image: xr
        }), Zr]
      })
    }
  },
  7458: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Yr
    });
    var Zr = Qr(72),
      Wr = Qr(1576),
      ar = Qr(1629),
      jr = Qr(4746),
      Ir = Qr(1181),
      fr = Qr(1444),
      Er = Qr(1489),
      pr = Qr(1448),
      xr = Qr(1155),
      mr = Qr.n(xr),
      Nr = Qr(7449),
      Ur = Qr(1338);

    function tr(rr) {
      let {
        info: Sr,
        className: Qr
      } = rr;
      const {
        statusText: Zr,
        rowText: Wr
      } = (0, Nr.e)();
      return (0, Ur.jsxs)("div", {
        className: mr()("GameApprovalInfoDetails", Qr),
        children: [(0, Ur.jsxs)("div", {
          className: mr()("GameApprovalInfoSummary", Sr.overallPassed ? "Passed" : "Failed"),
          children: [(0, Ur.jsx)(pr.c, {
            name: Sr.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, Ur.jsx)("span", {
            children: Zr(Sr.status)
          })]
        }), Sr.rows.length > 0 && (0, Ur.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: Sr.rows.map((rr => {
            const {
              label: Sr,
              value: Qr
            } = Wr(rr);
            return (0, Ur.jsxs)("div", {
              className: mr()("GameApprovalInfoRow", rr.passed ? "Passed" : "Failed"),
              children: [(0, Ur.jsx)(pr.c, {
                name: rr.passed ? "check" : "xmark"
              }), (0, Ur.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, Ur.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: Sr
                }), null !== Qr && (0, Ur.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: Qr
                })]
              })]
            }, rr.kind)
          }))
        })]
      })
    }
    var hr = Qr(1251),
      zr = Qr(1475);

    function Yr(rr) {
      zr.NotificationProvider.showCustomPopup({
        body: () => (0, Ur.jsx)(nr, {
          ...rr
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function nr(rr) {
      let {
        schematicId: Sr,
        canOverride: Qr,
        onApprovalChanged: xr
      } = rr;
      const {
        t: mr
      } = (0, hr.E)(), {
        userContext: Nr
      } = (0, Ir.c)(), zr = (0, jr.b)(), [Yr, nr] = (0, Zr.useState)(null), [er, Kr] = (0, Zr.useState)(null), [yr, Br] = (0, Zr.useState)(!1), Tr = (0, Zr.useCallback)((() => {
        Kr(null), ar.c.getGameApprovalInfo(Nr, Sr).then((rr => {
          zr.current && nr(rr)
        })).catch((rr => {
          console.error("Failed to get game approval info", rr), zr.current && Kr(mr("studio:approvalLoadFailed"))
        }))
      }), [Nr, Sr, zr, mr]);
      (0, Zr.useEffect)((() => {
        Tr()
      }), [Tr]);
      const vr = rr => {
        yr || (Br(!0), ar.c.setGameApproval(Nr, Sr, rr).then((() => {
          null === xr || void 0 === xr || xr(), zr.current && Tr()
        })).catch((rr => {
          console.error("Failed to set game approval", rr)
        })).finally((() => {
          zr.current && Br(!1)
        })))
      };
      return (0, Ur.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, Ur.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: mr("studio:approvalTitle")
        }), !Yr && !er && (0, Ur.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, Ur.jsx)(fr.c, {})
        }), er && (0, Ur.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: er
        }), Yr && (0, Ur.jsxs)(Ur.Fragment, {
          children: [(0, Ur.jsx)(tr, {
            info: Yr
          }), Qr && (0, Ur.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== Yr.manualOverride && (0, Ur.jsx)(Er.f, {
              tooltipInner: (0, Ur.jsx)("div", {
                children: mr("studio:approvalApproveTooltip")
              }),
              children: (0, Ur.jsxs)(Wr.p, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  vr(!0)
                },
                disabled: yr,
                children: [(0, Ur.jsx)(pr.c, {
                  name: "check"
                }), " ", mr("studio:approvalApprove")]
              })
            }), !1 !== Yr.manualOverride && (0, Ur.jsx)(Er.f, {
              tooltipInner: (0, Ur.jsx)("div", {
                children: mr("studio:approvalDenyTooltip")
              }),
              children: (0, Ur.jsxs)(Wr.L, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  vr(!1)
                },
                disabled: yr,
                children: [(0, Ur.jsx)(pr.c, {
                  name: "xmark"
                }), " ", mr("studio:approvalDeny")]
              })
            }), null !== Yr.manualOverride && (0, Ur.jsx)(Er.f, {
              tooltipInner: (0, Ur.jsx)("div", {
                children: mr("studio:approvalClearOverrideTooltip")
              }),
              children: (0, Ur.jsxs)(Wr.h, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  vr(null)
                },
                disabled: yr,
                children: [(0, Ur.jsx)(pr.c, {
                  name: "arrows-rotate"
                }), " ", mr("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  7449: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      e: () => jr
    });
    var Zr = Qr(379),
      Wr = Qr(1251);
    const ar = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function jr() {
      const {
        t: rr,
        selectedLanguage: Sr
      } = (0, Wr.E)();
      return {
        statusText: Sr => rr(ar[Sr]),
        rowText: Qr => {
          const ar = (rr, Qr) => (0, Zr.W)((0, Wr.m)(Sr.code, rr), 0, Qr),
            jr = (Sr, Qr) => null === Qr ? Sr : rr("studio:approvalWithMinDays", {
              value: Sr,
              days: Qr
            });
          switch (Qr.kind) {
            case "ownerAccountAge": {
              const Sr = Qr.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: rr("studio:approvalAccountAgeLabel"),
                value: jr(rr(Sr, {
                  age: ar(Sr, Qr.accountAgeMs)
                }), Qr.minAccountAgeDays)
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: rr("studio:approvalSinceUnbannedLabel"), value: jr(ar("studio:approvalSinceUnbannedLabel", Qr.sinceMs), Qr.minDays)
              };
            case "reportHold": {
              const {
                detail: Sr
              } = Qr;
              if (null === Sr) return {
                label: rr("studio:approvalUnderInvestigation"),
                value: null
              };
              const Zr = Sr.weightedReporters.toFixed(1),
                Wr = Sr.threshold.toFixed(1),
                jr = rr("studio:approvalReportHoldLabel", {
                  hours: Sr.windowHours
                });
              if (null === Sr.heldUntil) return {
                label: jr,
                value: rr("studio:approvalReportHoldValue", {
                  weightedReporters: Zr,
                  threshold: Wr
                })
              };
              const Ir = "studio:approvalReportHoldValueHeld";
              return {
                label: jr,
                value: rr(Ir, {
                  weightedReporters: Zr,
                  threshold: Wr,
                  time: ar(Ir, Sr.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function Ir(rr) {
      return null === rr.manualOverride && rr.rows.some((rr => "reportHold" === rr.kind && !rr.passed))
    }
  },
  35515: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(72),
      Wr = Qr(4681);

    function ar() {
      const [rr, Sr] = (0, Zr.useState)(!1);
      return (0, Zr.useLayoutEffect)((() => {
        let rr = !0;
        return (0, Wr.i)().then((() => {
          rr && Sr(!0)
        })), () => {
          rr = !1
        }
      }), []), rr
    }
  },
  10055: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => hr,
      f: () => zr
    });
    var Zr = Qr(161),
      Wr = Qr(208),
      ar = Qr(1127),
      jr = Qr(1133),
      Ir = Qr(1279),
      fr = Qr(2089),
      Er = Qr(3312),
      pr = Qr(1629),
      xr = Qr(1475),
      mr = Qr(1187),
      Nr = Qr(10062),
      Ur = Qr(1644),
      tr = Qr(1671);

    function hr(rr, Sr) {
      const Qr = !0 === Sr.debugResult.gameRefused,
        ar = Qr || Sr.code === Zr.i.REQUEST_TO_MATCHMAKING ? (0, Nr.e)(Sr.message) : null;
      if (null !== ar) return Kr(rr, rr((0, Nr.g)(ar)), rr(Nr.f[ar])), !0;
      if (Qr) return async function(rr) {
        const {
          gameNameWithVariation: Sr,
          lobbyName: Qr,
          shownLobbyName: Zr
        } = fr.gameBridge.latest("connectedGame"), Wr = "classic" === Sr && (0, Ir.F)(Qr) ? Zr : await (0, Er.e)(rr, Sr, Qr);
        return "" !== Wr ? rr("general:cantJoinGame", {
          game: Wr
        }) : rr("general:cantJoinThisGame")
      }(rr).then((Qr => {
        Kr(rr, Qr, Sr.message)
      })), !0;
      const {
        joinFailure: jr
      } = Sr.debugResult, pr = "refused" === (null === jr || void 0 === jr ? void 0 : jr.at) ? jr.code : null;
      return pr === Wr.e.schematicNotPublished.code ? (async function(rr, Sr) {
        const Qr = Yr(),
          Zr = await er(Qr);
        if (null === Zr || Zr.gamePublished) return void Kr(rr, rr("general:cantJoinThisGame"), Sr);
        await nr(rr, "rocket-launch", rr("studio:gameNotPublishedTitle", {
          game: Zr.name
        }), rr("studio:publishInStudio"), Qr)
      }(rr, Sr.message), !0) : (pr === Wr.e.schematicBanned.code || pr === Wr.e.customGameTakenDown.code) && (er(Yr()).then((Sr => {
        zr(rr, Sr)
      })), !0)
    }

    function zr(rr, Sr) {
      !0 !== (null === Sr || void 0 === Sr ? void 0 : Sr.takenDown) ? Kr(rr, rr("general:cantJoinThisGame"), Wr.e.customGameTakenDown.text) : nr(rr, "lock", rr("studio:gameTakenDownTitle", {
        game: Sr.name
      }), rr("studio:viewInStudio"), Sr.schematicId)
    }

    function Yr() {
      return (0, ar.q)(fr.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function nr(rr, Sr, Qr, Zr, Wr) {
      !0 === await xr.NotificationProvider.showPromptPopup({
        icon: Sr,
        title: Qr,
        confirmText: Zr,
        cancelText: rr("general:cancel")
      }).getResult() && (0, Ur.navigatePreserveSearch)((0, tr.r)((0, jr.b)(Wr), "manage"))
    }
    async function er(rr) {
      try {
        return await pr.c.getGame(await mr.userContextManager.getCurrentUserContext(), rr, !0)
      } catch (Sr) {
        return (0, pr.g)(Sr) || console.error(`Failed to get game ${rr}`, Sr), null
      }
    }

    function Kr(rr, Sr, Qr) {
      xr.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: Sr,
        subtitle: Qr,
        confirmText: rr("general:ok"),
        cancelText: ""
      })
    }
  },
  10073: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(1433),
      Wr = Qr(1279),
      ar = Qr(688);

    function jr(rr) {
      return rr = function(rr, Sr) {
        var Qr;
        const Zr = new URLSearchParams(Sr),
          Wr = Zr.get("lobby"),
          ar = Zr.get("vm"),
          jr = null !== (Qr = Wr) && void 0 !== Qr ? Qr : rr.lobbyName,
          Ir = null !== ar && void 0 !== ar ? ar : rr.directJoinVmUrl;
        if (jr === rr.lobbyName && Ir === rr.directJoinVmUrl) return rr;
        return {
          ...rr,
          lobbyName: jr,
          directJoinVmUrl: Ir
        }
      }(rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), rr = function(rr) {
        if ((0, ar.L)(rr.directJoinVmUrl)) return rr;
        const Sr = (0, Wr.cb)(rr.directJoinVmUrl);
        null === Sr && (rr.directJoinVmUrl = void 0);
        return rr
      }(rr = function(rr) {
        if ((0, ar.L)(rr.gameNameWithVariation)) return rr;
        return rr.gameNameWithVariation = (0, Zr.g)(rr.gameNameWithVariation), rr
      }(rr))
    }
  },
  10062: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      d: () => jr,
      e: () => Ir,
      f: () => Er,
      g: () => fr
    });
    var Zr = Qr(208),
      Wr = Qr(5384);

    function ar(rr) {
      return jr(rr) === Zr.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function jr(rr) {
      return "object" === typeof rr && null !== rr ? rr.code : void 0
    }

    function Ir(rr) {
      var Sr;
      return null !== (Sr = Object.keys(Wr.b).find((Sr => Wr.b[Sr] === rr))) && void 0 !== Sr ? Sr : null
    }

    function fr(rr) {
      return "notWhitelisted" === rr ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Er = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37798: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      c: () => Zr
    });
    const Zr = "skyblockSkills",
      Wr = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);