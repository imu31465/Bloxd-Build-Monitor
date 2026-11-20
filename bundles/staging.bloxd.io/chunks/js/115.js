export const id = 115;
export const ids = [115, 389];
export const modules = {
  35787: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => da
    });
    var Ab = Ub(307),
      Mb = Ub(3180),
      Tb = Ub(3211),
      Eb = Ub(3209),
      Yb = Ub(3200),
      Bb = Ub(1134),
      eb = Ub(31),
      vb = Ub(1639),
      Lb = Ub(1268),
      Pb = Ub(1352),
      Xb = Ub(984),
      jb = Ub.n(Xb),
      Rb = Ub(1589),
      kb = Ub(52),
      yb = Ub(75),
      Zb = Ub(2224),
      Db = Ub(1249),
      zb = Ub(1527),
      xb = Ub(1060),
      ib = Ub(3088),
      fb = Ub(4234),
      mb = Ub(3167),
      pb = Ub(3170),
      Nb = Ub(1794),
      Wb = Ub(3178),
      Hb = Ub(1650),
      Ib = Ub(1413),
      db = Ub(2039),
      Fb = Ub(1254),
      hb = Ub(2397),
      Gb = Ub(4690),
      Qb = Ub(1023);
    const qb = 15e3,
      ub = 2500;

    function rb(bb) {
      var ab;
      let {
        eventName: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Bb.A)(), Mb = Hb.g[Ub], [Tb, Eb] = (0, kb.useState)((() => Date.now() >= Mb.endsAt.getTime())), [Yb, eb] = (0, kb.useState)("overall"), vb = function(bb, ab) {
        const {
          userContext: Ub,
          isUserContextUpdating: Ab
        } = (0, xb.c)(), Mb = `${bb}:${ab}`, [Tb, Eb] = (0, kb.useState)({
          requestKey: Mb,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, kb.useEffect)((() => {
          if (Ab) return;
          let Tb, Yb = !1;
          const Bb = async () => {
            if ("visible" === document.visibilityState) try {
              const Ab = await Ib.b.getGameEventLeaderboard(Ub, {
                event: bb,
                scope: ab
              });
              Yb || Eb({
                requestKey: Mb,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Ab
                }
              })
            } catch {
              Yb || Eb((bb => bb.requestKey === Mb && "loaded" === bb.leaderboard.status ? bb : {
                requestKey: Mb,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            Yb || (Tb = setTimeout(Bb, qb))
          };
          return Bb(), () => {
            Yb = !0, clearTimeout(Tb)
          }
        }), [bb, ab, Mb, Ub, Ab]), Tb.requestKey === Mb ? Tb.leaderboard : {
          status: "loading"
        }
      }(Ub, Yb), Lb = function(bb) {
        const ab = (0, kb.useRef)(null),
          Ub = (0, kb.useRef)(0),
          Ab = (0, kb.useRef)(),
          [Mb, Tb] = (0, kb.useState)({});
        return (0, kb.useEffect)((() => {
          const Mb = null === bb || void 0 === bb ? void 0 : bb.entries;
          if (!Mb) return;
          const Eb = new Map(Mb.map((bb => [bb.player.name, bb.value]))),
            Yb = ab.current;
          if (ab.current = Eb, null === Yb) return;
          const Bb = {};
          for (const [bb, ab] of Eb) {
            const Ab = Yb.get(bb);
            void 0 !== Ab && ab > Ab && (Bb[bb] = {
              amount: ab - Ab,
              key: Ub.current++
            })
          }
          0 !== Object.keys(Bb).length && (Tb(Bb), clearTimeout(Ab.current), Ab.current = setTimeout((() => {
            Tb({})
          }), ub))
        }), [bb]), (0, kb.useEffect)((() => () => {
          clearTimeout(Ab.current)
        }), []), Mb
      }("loaded" === vb.status ? vb.leaderboard : null), Pb = function(bb) {
        const [ab, Ub] = (0, kb.useState)(null), Ab = "loaded" === bb.status ? bb.leaderboard.goalProgress : void 0;
        return (0, kb.useEffect)((() => {
          Ab && Ub(Ab)
        }), [Ab]), ab
      }(vb), Xb = db.f[`profileEffect_${Mb.prizePack}`];
      if (Tb) return null;
      const Rb = "loaded" === vb.status ? vb.leaderboard : null,
        yb = null !== (ab = null === Rb || void 0 === Rb ? void 0 : Rb.entries) && void 0 !== ab ? ab : null,
        Zb = null !== Rb && void 0 !== Rb && Rb.own && null !== yb && !yb.some((bb => bb.isOwn)) ? Rb.own : null;
      return (0, Qb.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Qb.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Qb.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Qb.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Qb.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Qb.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Ab("gameEvents:live")]
              }), (0, Qb.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Ab("gameEvents:endsIn"), (0, Qb.jsx)(mb.c, {
                  toTime: Mb.endsAt,
                  onReachEndOfCountdown: () => {
                    Eb(!0)
                  }
                })]
              })]
            }), (0, Qb.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Ab(Mb.titleKey)
            }), (0, Qb.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Qb.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [Xb && (0, Qb.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Qb.jsx)(Xb, {})
                }), (0, Qb.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Qb.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Ab("gameEvents:prize")
                  }), (0, Qb.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Ab(Mb.prizeNameKey)
                  })]
                })]
              }), (0, Qb.jsx)(Kb, {
                event: Mb,
                progress: Pb
              })]
            })]
          }), (0, Qb.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Qb.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Qb.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Ab(Mb.leaderboard.titleKey)
              }), (0, Qb.jsx)(Gb.e, {
                ariaLabel: Ab("gameEvents:leaderboardScope"),
                options: Hb.e.map((bb => ({
                  value: bb,
                  label: Ab(`gameEvents:${bb}Scope`)
                }))),
                value: Yb,
                onChange: eb
              })]
            }), "loading" === vb.status && (0, Qb.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Qb.jsx)(Fb.b, {})
            }), ("unavailable" === vb.status || "loaded" === vb.status && null === yb) && (0, Qb.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Ab("gameEvents:leaderboardUnavailable")
            }), null !== yb && 0 === yb.length && (0, Qb.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Ab("friends" === Yb ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== yb && yb.length > 0 && (0, Qb.jsx)("ol", {
              className: "GameEventPanelRows",
              children: yb.map((bb => {
                const ab = Lb[bb.player.name];
                return (0, Qb.jsxs)("li", {
                  className: jb()("GameEventPanelRow", {
                    GameEventPanelRowOwn: bb.isOwn,
                    GameEventPanelRowTop: bb.rank <= 3
                  }),
                  children: [(0, Qb.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", bb.rank]
                  }), (0, Qb.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Qb.jsx)(hb.h, {
                      playerSocialPreview: {
                        ...bb.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== ab && (0, Qb.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", ab.amount.toLocaleString()]
                  }, ab.key), (0, Qb.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: bb.value.toLocaleString()
                  })]
                }, bb.player.name)
              }))
            }), Zb && (0, Qb.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Qb.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", Zb.rank.toLocaleString()]
              }), (0, Qb.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Ab("gameEvents:yourPlace")
              }), (0, Qb.jsx)("span", {
                className: "GameEventPanelScore",
                children: Zb.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function Kb(bb) {
      let {
        event: ab,
        progress: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Bb.A)(), Mb = null !== Ub && ab.prizeGoals.some(((bb, ab) => Ub[ab] >= bb.target));
      return (0, Qb.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Qb.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Ab(Mb ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Qb.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: ab.prizeGoals.map(((bb, ab) => {
            const Mb = null === Ub ? null : Math.min(Ub[ab], bb.target);
            return (0, Qb.jsxs)(kb.Fragment, {
              children: [ab > 0 && (0, Qb.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Ab("gameEvents:goalsOr")
              }), (0, Qb.jsxs)("div", {
                className: jb()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Mb === bb.target
                }),
                children: [(0, Qb.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Ab(bb.labelKey)
                }), (0, Qb.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Qb.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Mb && void 0 !== Mb ? Mb : 0) / bb.target * 100 + "%"
                    }
                  }), null !== Mb && (0, Qb.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Mb.toLocaleString(), " / ", bb.target.toLocaleString()]
                  })]
                })]
              })]
            }, bb.board)
          }))
        })]
      })
    }
    var ob = Ub(1464),
      lb = Ub(1516),
      tb = Ub(973),
      wb = Ub(688),
      sb = Ub(3161);

    function gb(bb) {
      let {
        gameNameWithVariation: ab
      } = bb;
      const Ub = (0, ob.z)(ab),
        [Ab, Mb] = (0, kb.useState)(null);
      if ((0, kb.useEffect)((() => {
          if (!Ub) return;
          let bb = !0;
          return (0, lb.k)(Ub).then((ab => {
            bb && Mb(ab)
          })).catch((bb => {
            console.error(`Failed to load the page copy for ${Ub.name}`, bb)
          })), () => {
            bb = !1
          }
        }), [Ub]), !Ub || !Ab || Ab.name !== Ub.name) return null;
      const Tb = (0, lb.i)(Ab),
        Eb = new Set((0, tb.c)((0, wb.g)()).map((bb => (0, ob.t)(bb)))),
        Yb = Ab.similarGames.filter((bb => Eb.has((0, ob.t)(bb))));
      return (0, Qb.jsx)("div", {
        className: "GamePageContent",
        children: (0, Qb.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Qb.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Qb.jsx)("h2", {
              children: Tb.whatIs
            }), Ab.whatIs.map((bb => (0, Qb.jsx)("p", {
              children: bb
            }, bb)))]
          }), (0, Qb.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Qb.jsx)("h2", {
              children: Tb.howToPlay
            }), Ab.howToPlay.map((bb => (0, Qb.jsx)("p", {
              children: bb
            }, bb)))]
          }), (0, Qb.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Qb.jsx)("h2", {
              children: Tb.features
            }), (0, Qb.jsx)("ul", {
              children: Ab.features.map((bb => (0, Qb.jsx)("li", {
                children: bb
              }, bb)))
            })]
          }), (0, Qb.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Qb.jsx)("h2", {
              children: Tb.tips
            }), (0, Qb.jsx)("ul", {
              children: Ab.tips.map((bb => (0, Qb.jsx)("li", {
                children: bb
              }, bb)))
            })]
          }), (0, Qb.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Qb.jsx)("h2", {
              children: Tb.faq
            }), Ab.faq.map((bb => {
              let {
                question: ab,
                answer: Ub
              } = bb;
              return (0, Qb.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Qb.jsx)("h3", {
                  children: ab
                }), (0, Qb.jsx)("p", {
                  children: Ub
                })]
              }, ab)
            }))]
          }), Yb.length > 0 && (0, Qb.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Qb.jsx)("h2", {
              children: Tb.similarGames
            }), (0, Qb.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: Yb.map((bb => (0, Qb.jsx)("li", {
                children: (0, Qb.jsx)(sb.f, {
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
    var Cb = Ub(990),
      Vb = Ub(101),
      Ob = Ub(1065),
      cb = Ub(8957),
      Jb = Ub(1568),
      nb = Ub(1446),
      Sb = Ub(1433),
      ba = Ub(1520),
      aa = Ub(1365),
      Ua = Ub(1260),
      Aa = Ub(35790),
      Ma = Ub(1180),
      Ta = Ub(950),
      Ea = Ub(325),
      Ya = Ub(963),
      Ba = Ub(1458),
      ea = Ub(8483),
      va = Ub(19),
      La = Ub(2348),
      Pa = Ub(714),
      Xa = Ub(1162),
      ja = Ub(6113);

    function Ra(bb) {
      let {
        preview: ab,
        isBroken: Ub
      } = bb;
      const Ab = null === ab ? null : (0, Tb.c)(ab, "small"),
        Eb = (0, Mb.f)(null !== Ab && void 0 !== Ab ? Ab : Tb.l);
      return null === ab ? (0, Qb.jsx)("div", {
        className: jb()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: Ub
        }),
        children: (0, Qb.jsx)(Cb.e, {
          name: Ub ? "triangle-exclamation" : "star"
        })
      }) : (0, Qb.jsx)("div", {
        className: jb()("FeaturedGamesPopupSlotThumbnail", Yb.f),
        style: (0, Yb.d)(Eb),
        role: "img",
        "aria-label": ab.name,
        children: (0, Qb.jsx)(Yb.c, {
          image: Eb
        })
      })
    }

    function ka(bb) {
      let {
        schematicId: ab,
        gameName: Ub
      } = bb;
      const {
        userContext: Mb
      } = (0, xb.c)(), Tb = (0, pb.b)(), [Eb, Yb] = (0, kb.useState)(null), [Bb, eb] = (0, kb.useState)(null), [vb, Lb] = (0, kb.useState)(!1), Xb = (0, kb.useCallback)((() => {
        eb(null), Ib.b.getFeaturedGames(Mb).then((bb => {
          Tb.current && Yb(bb.slots)
        })).catch((bb => {
          console.error("Failed to get featured games", bb), Tb.current && eb("Failed to load featured games")
        }))
      }), [Mb, Tb]);
      (0, kb.useEffect)((() => {
        Xb()
      }), [Xb]);
      const jb = (bb, ab) => {
        vb || (Lb(!0), Ib.b.setFeaturedGame(Mb, bb, ab).then((() => {
          Tb.current && Xb()
        })).catch((bb => {
          console.error("Failed to set featured game", bb), Tb.current && eb("Failed to update the featured slot")
        })).finally((() => {
          Tb.current && Lb(!1)
        })))
      };
      return (0, Qb.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Qb.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !Eb && !Bb && (0, Qb.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Qb.jsx)(Fb.b, {})
        }), Bb && (0, Qb.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: Bb
        }), Eb && (0, Qb.jsxs)(Qb.Fragment, {
          children: [(0, Qb.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: Eb.map((bb => {
              const Ub = bb.schematicId === ab,
                Mb = null === bb.schematicId,
                {
                  categoryGroup: Tb
                } = Ab.E[bb.slotId];
              return (0, Qb.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Qb.jsx)(Ra, {
                  preview: bb.preview,
                  isBroken: !Mb
                }), (0, Qb.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Qb.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Ab.eb)(Tb), " \xb7 position", " ", (0, Ab.G)(bb.slotId, Ab.Lb) + 1, " of", " ", (0, Ab.Hb)(Tb, Ab.Lb)]
                  }), Mb && (0, Qb.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Mb && null !== bb.preview && (0, Qb.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: bb.preview.name
                  }), !Mb && null === bb.preview && (0, Qb.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Qb.jsx)(Cb.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Qb.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Mb && (0, Qb.jsxs)(Pb.s, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      jb(bb.slotId, ab)
                    },
                    disabled: vb,
                    children: [(0, Qb.jsx)(Cb.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !Mb && !Ub && (0, Qb.jsxs)(Pb.M, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      jb(bb.slotId, ab)
                    },
                    disabled: vb,
                    children: [(0, Qb.jsx)(Cb.e, {
                      name: "star"
                    }), " Replace"]
                  }), !Mb && (0, Qb.jsxs)(Pb.D, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      jb(bb.slotId, null)
                    },
                    disabled: vb,
                    children: [(0, Qb.jsx)(Cb.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, bb.slotId)
            }))
          }), (0, Qb.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var ya = Ub(4351),
      Za = Ub(4277),
      Da = Ub(4281),
      za = Ub(4294),
      xa = Ub(4253),
      ia = Ub(3234),
      fa = Ub(8475),
      ma = Ub(217);
    const pa = {
      skyblock: [Ub(35822).e]
    };
    var Na = Ub(591);
    const Wa = {
      listedVariations: null,
      backgroundImage: Tb.l,
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

    function Ha(bb, ab) {
      const Ub = Pa.h[bb.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, Tb.c)(bb, "large"),
        badges: [],
        category: bb.gameCategory,
        title: void 0 !== (null === Ub || void 0 === Ub ? void 0 : Ub.title) ? ab(Ub.title) : bb.name,
        variationTitle: null,
        description: void 0 !== (null === Ub || void 0 === Ub ? void 0 : Ub.description) ? ab(Ub.description) : bb.description,
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

    function Ia(bb) {
      var ab, Ub, Ab;
      return null !== (ab = null !== (Ub = (0, ma.i)() ? function(bb) {
        for (const [ab, Ub] of Object.entries(pa)) {
          const Ab = [ab, ...Ub.map((bb => (0, Ea.Fb)(ab, bb)))];
          if (Ab.includes(bb)) return Ab
        }
        return null
      }(bb) : null) && void 0 !== Ub ? Ub : null === (Ab = Pa.d[bb]) || void 0 === Ab ? void 0 : Ab.listedVariations) && void 0 !== ab ? ab : null
    }

    function da() {
      const {
        gameNameWithVariation: bb
      } = (0, nb.F)();
      if ((0, kb.useEffect)(ia.r, []), bb && (0, Ma.l)(bb)) return (0, Qb.jsx)(Fa, {
        urlId: bb
      }, bb);
      const ab = bb && (0, Ta.l)(bb) ? bb : "firstParty";
      return (0, Qb.jsx)(ha, {}, ab)
    }

    function Fa(bb) {
      let {
        urlId: ab
      } = bb;
      const {
        userContext: Ub,
        isUserContextUpdating: Ab
      } = (0, xb.c)(), Mb = (0, kb.useMemo)((() => (0, Jb.f)(ab)), [ab]);
      (0, kb.useMemo)((() => {
        if (null === Mb) return;
        const bb = Ob.userContextManager.peekCurrentUserContext();
        (null !== bb ? Ib.b.getGame(bb, Mb.schematicId) : Ob.userContextManager.getCurrentUserContext().then((bb => Ib.b.getGame(bb, Mb.schematicId)))).catch((bb => {
          console.error(`Failed to get the custom game ${Mb.schematicId}`, bb), (0, Jb.c)(ab)
        }))
      }), [Mb, ab]);
      const [Tb, Eb] = (0, kb.useState)(null), Yb = (0, cb.c)();
      (0, kb.useEffect)((() => {
        if (null !== Mb || Ab) return;
        let bb = !0;
        return Ib.b.getGameByUrlId(Ub, ab).then((Ub => {
          bb && Eb({
            urlId: ab,
            game: Ub
          })
        })).catch((Ub => {
          console.error(`Failed to find the custom game with urlId ${ab}`, Ub), bb && (0, Sb.navigateToHomePage)()
        })), () => {
          bb = !1
        }
      }), [ab, Mb, Ab, Ub]);
      const Bb = null !== Mb && void 0 !== Mb ? Mb : (null === Tb || void 0 === Tb ? void 0 : Tb.urlId) === ab ? Tb.game : null;
      return null === Bb ? (0, Qb.jsx)(Fb.b, {}) : Yb ? (0, Qb.jsx)(ha, {
        gameNameWithVariation: (0, Ta.s)(Bb.schematicId),
        knownCustomGame: Bb
      }, Bb.schematicId) : null
    }

    function ha(bb) {
      var ab, Ub, Eb, Xb, Hb, db, Fb, Gb;
      let {
        gameNameWithVariation: qb,
        knownCustomGame: ub = null
      } = bb;
      const {
        t: Kb
      } = (0, Bb.A)();
      (0, La.h)();
      const lb = (0, La.m)(),
        {
          userContext: tb,
          isUserContextUpdating: wb
        } = (0, xb.c)(),
        sb = (0, xa.i)(),
        Ob = (0, Sb.useNavigatePreserveSearch)(),
        cb = (0, nb.F)(),
        Jb = (0, kb.useMemo)((() => qb ? {
          gameNameWithVariation: qb
        } : cb), [qb, cb]),
        aa = (0, ea.c)(Jb),
        Ma = (0, kb.useMemo)((() => {
          const bb = function(bb) {
            var ab, Ub;
            const Ab = Ia(bb);
            if (!Ab || 0 === Ab.length || Ab.includes(bb)) return bb;
            const Mb = eb.f.getItem((0, Zb.g)(bb));
            if (Mb && Ab.includes(Mb)) return Mb;
            return null !== (ab = null === (Ub = Pa.d[bb]) || void 0 === Ub ? void 0 : Ub.defaultListedVariation) && void 0 !== ab ? ab : Ab[0]
          }(aa.gameNameWithVariation);
          return bb === aa.gameNameWithVariation ? aa : {
            ...aa,
            gameNameWithVariation: bb
          }
        }), [aa]);
      (0, kb.useEffect)((() => {
        const bb = aa.gameNameWithVariation;
        Ma.gameNameWithVariation !== bb && bb !== (0, Ea.Gb)(bb) && Ob((0, ob.v)(Ma.gameNameWithVariation), {
          replace: !0
        })
      }), [Ma.gameNameWithVariation, aa.gameNameWithVariation, Ob]);
      const Ra = (0, pb.b)(),
        [ia, ma] = (0, kb.useState)(""),
        pa = kb.useRef(null),
        [da, Fa] = (0, kb.useState)(),
        ha = (0, Ta.l)(Ma.gameNameWithVariation),
        Qa = (0, kb.useMemo)((() => ha ? null : function(bb, ab, Ub) {
          var Ab, Mb;
          const Eb = Pa.d[bb];
          return (0, Na.I)(Eb) ? null : {
            listedVariations: Ia(bb),
            backgroundImage: (0, Tb.g)(bb, (0, Tb.b)(Eb)),
            badges: (0, vb.filterBadges)(Eb.badges),
            category: Eb.type,
            title: Ub(Eb.title),
            variationTitle: Eb.variationTitle ? Ub(Eb.variationTitle) : null,
            description: Ub(Eb.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== ab ? null !== (Ab = ab[bb]) && void 0 !== Ab ? Ab : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: Eb.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: Eb.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (Mb = Eb.canCreateCustomLobbies) || void 0 === Mb || Mb,
            countdownInformation: (0, Zb.e)(bb)
          }
        }(Ma.gameNameWithVariation, lb, Kb)), [ha, Ma.gameNameWithVariation, lb, Kb]),
        [qa, ua] = (0, kb.useState)(!1),
        [ra, Ka] = (0, kb.useState)((() => ub ? Ha(ub, Kb) : Wa)),
        oa = null !== Qa && void 0 !== Qa ? Qa : ra,
        [la] = (0, kb.useState)(oa === Wa),
        ta = (0, Mb.f)(oa.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: wa,
          recentlyPlayedCustomLobbies: sa
        } = (0, kb.useMemo)((() => function(bb, ab, Ub, Ab) {
          var Mb;
          const Tb = bb => {
              const Ub = (0, Ta.p)(bb),
                Ab = ab.find((ab => "custom" === ab.type ? ab.schematicId === Ub : ab.gameNameWithVariation === bb));
              return Ab ? [...Ab.recentLobbies] : []
            },
            Eb = (0, vb.getRecentGameNameWithVariationLobbiesKey)(bb),
            Yb = null !== (Mb = eb.f.getItem(Eb)) && void 0 !== Mb ? Mb : [],
            Bb = [...Tb(bb), ...Yb],
            Lb = [];
          for (const eb of Bb)(0, Xa.R)(eb) && !Lb.includes(eb) && Lb.push(eb);
          let Pb = Bb;
          if (Ub) {
            const bb = Tb("classic_worlds"),
              ab = Bb.filter((ab => !bb.includes(ab)));
            Pb = [...bb, ...ab]
          }
          const Xb = [],
            jb = !1 === Ab ? [] : Pb;
          for (const eb of jb)(0, Xa.R)(eb) || Xb.includes(eb) || Xb.push(eb);
          return {
            recentlyPlayedPublicLobbies: Lb,
            recentlyPlayedCustomLobbies: Xb
          }
        }(Ma.gameNameWithVariation, sb, oa.showWorldsInsteadOfCustomLobbies, oa.canCreateCustomLobbies)), [Ma.gameNameWithVariation, sb, oa.showWorldsInsteadOfCustomLobbies, oa.canCreateCustomLobbies]),
        [ga, Ca] = (0, kb.useState)(!0),
        [Va, Oa] = (0, kb.useState)([]),
        [ca, Ja] = (0, kb.useState)(null),
        [na, Sa] = (0, kb.useState)("explore"),
        bU = (0, kb.useRef)(!1),
        aU = (0, kb.useCallback)((bb => {
          (0, yb.unstable_batchedUpdates)((() => {
            Fa(bb), Ka((ab => ({
              ...Ha(bb, Kb),
              isFavourite: ab.isFavourite
            })))
          }))
        }), [Kb]);
      (0, kb.useEffect)((() => {
        null === va.c.get("gameEntrySource") && (0, va.k)("gameInformationPageDirect")
      }), []);
      const UU = (0, kb.useRef)(null);
      (0, kb.useEffect)((() => {
        const bb = bb => {
            UU.current = bb.target instanceof Element ? bb.target.closest("a, button") : null
          },
          ab = bb => {
            "Tab" === bb.key && (UU.current = null)
          };
        return document.addEventListener("pointerdown", bb, !0), document.addEventListener("keydown", ab, !0), () => {
          document.removeEventListener("pointerdown", bb, !0), document.removeEventListener("keydown", ab, !0)
        }
      }), []), (0, ib.d)("Enter", (bb => {
        const ab = bb.target instanceof Element ? bb.target : null;
        if (bb.defaultPrevented || null !== ab && void 0 !== ab && ab.closest("input, textarea, select")) return;
        const Ub = null === ab || void 0 === ab ? void 0 : ab.closest("a, button");
        Ub && Ub !== UU.current || (bb.preventDefault(), LU())
      })), (0, fb.c)(Sb.navigateToHomePage);
      const AU = wa.length > 0 || sa.length > 0,
        MU = !oa.useRejoinLastLobbyButton || 0 === wa.length,
        TU = ha && null === oa.ownerSocialPreviewWithoutLocation,
        EU = tb.getPlayerName() === (null === da || void 0 === da || null === (ab = da.owner) || void 0 === ab ? void 0 : ab.name),
        YU = null !== (Ub = null === (Eb = oa.badges.find((bb => "event" === bb.type))) || void 0 === Eb ? void 0 : Eb.event) && void 0 !== Ub ? Ub : null,
        BU = MU ? Pb.m : Pb.g,
        eU = (0, Qb.jsx)(Lb.g, {
          tooltipInner: (0, Qb.jsx)("div", {
            children: Kb("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Qb.jsx)(BU, {
            className: "GameInformationButton",
            padDefaultFocus: MU,
            showPress: !0,
            onClick: () => {
              LU()
            },
            children: (0, Qb.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [MU && (0, Qb.jsxs)(Qb.Fragment, {
                children: [(0, Qb.jsx)(Cb.e, {
                  name: "play"
                }), " "]
              }), Kb("homePage:quickPlay")]
            })
          })
        });
      (0, kb.useEffect)((() => {
        if (!ha || wb) return;
        let bb = !0;
        const ab = (0, Ta.p)(Ma.gameNameWithVariation);
        return Ib.b.getGame(tb, ab).then((ab => {
          bb && aU(ab)
        })).catch((ab => {
          console.error("Failed to get Custom Game information", ab), bb && (0, Sb.navigateToHomePage)()
        })), Ib.b.getFavouriteGames(tb).then((Ub => {
          bb && Ka((bb => ({
            ...bb,
            isFavourite: Ub.includes(ab)
          })))
        })).catch((ab => {
          console.error("Failed to get favourite games", ab), bb && ua(!0)
        })), () => {
          bb = !1
        }
      }), [ha, wb, Ma.gameNameWithVariation, aU, tb]);
      const vU = !ha && null === Qa;

      function LU(bb) {
        (0, fa.h)(), Ob((0, Db.b)(Ma.gameNameWithVariation, bb))
      }(0, kb.useEffect)((() => {
        vU && (0, Sb.navigateToHomePage)()
      }), [vU]), (0, kb.useEffect)((() => {
        !1 !== oa.canCreateCustomLobbies && null !== oa.showWorldsInsteadOfCustomLobbies && !1 === wb && (Ca(!0), Ib.b.getFavouriteLobbies(tb).then((bb => {
          Ja(bb)
        })), Ib.b.getOpenCustomLobbies(tb, {
          gameNameWithVariation: oa.showWorldsInsteadOfCustomLobbies ? "classic" : Ma.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === na,
          onlyFavouriteLobbies: "favourite" === na
        }).then((bb => {
          Ra.current && Oa(bb)
        })).catch((bb => {})).finally((() => {
          Ra.current && Ca(!1)
        })))
      }), [wb, Ma, na, oa.showWorldsInsteadOfCustomLobbies, oa.canCreateCustomLobbies, Ra, tb]);
      const PU = (0, kb.useCallback)((async bb => {
          try {
            if (!ca) return;
            ca.includes(bb) ? (Ib.b.unfavouriteLobby(tb, bb), Ja(ca.filter((ab => ab !== bb)))) : (Ib.b.favouriteLobby(tb, bb).catch((bb => {
              console.error("Failed to favourite lobby", bb)
            })), Ja([...ca, bb]))
          } catch (ab) {
            console.error("Failed to like lobby", ab)
          }
        }), [tb, ca]),
        XU = (null === da || void 0 === da ? void 0 : da.schematicId) === (0, Ta.p)(aa.gameNameWithVariation) ? da : null,
        jU = XU && (0, ob.A)(aa.gameNameWithVariation, (bb => Kb(bb)), XU);
      (0, ba.d)(XU && (0, ob.v)(aa.gameNameWithVariation, XU));
      const RU = Vb.featureFlags.canUseCustomLobbies && !0 === oa.canCreateCustomLobbies,
        kU = (0, Qb.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Qb.jsx)(gb, {
            gameNameWithVariation: Ma.gameNameWithVariation
          })
        });
      return (0, Qb.jsx)(Qb.Fragment, {
        children: (0, Qb.jsxs)("article", {
          className: jb()("GameInformation", {
            GameInformationFadeIn: la,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (Xb = oa.countdownInformation) || void 0 === Xb ? void 0 : Xb.type)
          }),
          children: [jU && (0, Qb.jsx)(zb.c, {
            meta: jU
          }), (0, Qb.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Qb.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Qb.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Qb.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Qb.jsx)("div", {
                  className: jb()("GameInformationTopBackgroundImage", Yb.f),
                  style: (0, Yb.d)(ta),
                  children: (0, Qb.jsx)(Yb.c, {
                    image: ta
                  })
                })]
              }), (0, Qb.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Qb.jsx)(ya.c, {}), (0, Qb.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Qb.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Qb.jsxs)("div", {
                      className: jb()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: TU
                      }),
                      children: [oa.badges.map((bb => (0, Qb.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${bb.type}`,
                        children: (0, Qb.jsx)(Wb.d, {
                          badge: bb
                        })
                      }, bb.type))), ha && (0, Qb.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Qb.jsx)(Nb.c, {
                          text: (0, Ab.X)({
                            type: "playerCrafted"
                          })
                        })
                      }), oa.category && (0, Qb.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Qb.jsx)(Nb.c, {
                          text: [{
                            str: (0, Ab._)(oa.category).toUpperCase()
                          }]
                        })
                      }), null !== oa.ccu && (0, Qb.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Qb.jsx)(Cb.e, {
                          name: "user"
                        }), (0, Xa.T)(oa.ccu), " online"]
                      }), null !== oa.ownerSocialPreviewWithoutLocation && (0, Qb.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Qb.jsx)("span", {
                          children: "Made by"
                        }), (0, Qb.jsx)(hb.h, {
                          playerSocialPreview: {
                            ...oa.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), TU && (0, Qb.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Qb.jsx)("span", {
                          children: "Made by"
                        }), (0, Qb.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== oa.favourites && (null !== oa.isFavourite || ha && !qa) && (0, Qb.jsx)(Pb.w, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== bU.current && (bU.current = !0, null !== oa.isFavourite)) {
                              const bb = (0, Ta.p)(Ma.gameNameWithVariation);
                              let ab;
                              oa.isFavourite ? (ab = -1, Ib.b.unfavouriteGame(tb, bb).catch((bb => {
                                console.error("Failed to get unfavourite game", bb)
                              })).finally((() => {
                                bU.current = !1
                              }))) : (ab = 1, Ib.b.favouriteGame(tb, bb).catch((bb => {
                                console.error("Failed to get favourite game", bb)
                              })).finally((() => {
                                bU.current = !1
                              }))), Ka((bb => ({
                                ...bb,
                                isFavourite: !bb.isFavourite
                              }))), Ka((bb => ({
                                ...bb,
                                favourites: bb.favourites + ab
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (Hb = oa.isFavourite) && void 0 !== Hb && Hb,
                        disabled: null === oa.isFavourite,
                        className: jb()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === oa.isFavourite
                        })
                      }, null === oa.isFavourite ? "pending" : "known"), ha && !TU && Vb.featureFlags.useSocialFeatures && !EU && (0, Qb.jsx)(Da.d, {
                        targetType: "customGame",
                        targetId: (0, Ta.p)(Ma.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (tb.playerHasRank("developer") || tb.playerHasRank("admin") && EU) && (0, Qb.jsxs)(Pb.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Ob((0, Ba.i)((0, Ya.h)(Ma.gameNameWithVariation, !0)))
                        },
                        children: [(0, Qb.jsx)(Cb.e, {
                          name: "star-christmas"
                        }), " ", Kb("studio:viewInStudio")]
                      }), ha && tb.playerHasRank("developer") && (0, Qb.jsxs)(Pb.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, ja.d)({
                            schematicId: (0, Ta.p)(Ma.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Qb.jsx)(Cb.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), ha && tb.playerHasRank("developer") && (0, Qb.jsxs)(Pb.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Ua.NotificationProvider.showCustomPopup({
                            body: () => (0, Qb.jsx)(ka, {
                              schematicId: (0, Ta.p)(Ma.gameNameWithVariation),
                              gameName: oa.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Qb.jsx)(Cb.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (db = oa.countdownInformation) || void 0 === db ? void 0 : db.type) && (0, Qb.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Qb.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Qb.jsx)(mb.c, {
                            toTime: oa.countdownInformation.countdownToTime
                          })]
                        }), (0, Qb.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: oa.countdownInformation.previewText
                        })]
                      })]
                    }, TU ? "pending" : "shown"), (0, Qb.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Qb.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Qb.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [oa.title, " ", oa.variationTitle && (null === (Fb = Pa.d[Ma.gameNameWithVariation]) || void 0 === Fb ? void 0 : Fb.variationThumbnailUseBigRatio) && (0, Qb.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: oa.variationTitle
                          })]
                        })
                      }), oa.listedVariations && oa.listedVariations.length > 0 && (0, Qb.jsx)("div", {
                        className: jb()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (Gb = Pa.d[Ma.gameNameWithVariation]) || void 0 === Gb ? void 0 : Gb.variationThumbnailUseBigRatio
                        }),
                        children: oa.listedVariations.map((bb => {
                          var ab, Ub;
                          return (0, Qb.jsxs)(Ga, {
                            variation: bb,
                            isSelected: Ma.gameNameWithVariation === bb,
                            children: [null !== lb && (0, Qb.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Qb.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Qb.jsx)(Cb.e, {
                                  name: "user"
                                }), " ", (0, Xa.T)(null !== (ab = lb[bb]) && void 0 !== ab ? ab : 0)]
                              })
                            }), (0, Qb.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: Kb(null !== (Ub = Pa.d[bb].variationTitle) && void 0 !== Ub ? Ub : Pa.d[bb].title)
                            }), (0, Qb.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, vb.filterBadges)(Pa.d[bb].badges).map((bb => (0, Qb.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + bb.type,
                                children: (0, Qb.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Qb.jsx)(Wb.d, {
                                    badge: bb
                                  })
                                })
                              }, bb.type)))
                            })]
                          }, bb)
                        }))
                      })]
                    }), oa.description && (0, Qb.jsx)("p", {
                      className: "GameInformationDescription",
                      children: oa.description
                    })]
                  }), (0, Qb.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Qb.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!MU && (0, Qb.jsx)(Lb.g, {
                        tooltipInner: (0, Qb.jsx)("div", {
                          children: Kb("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Qb.jsx)(Pb.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            LU(wa[0])
                          },
                          children: (0, Qb.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Qb.jsx)(Cb.e, {
                              name: "play"
                            }), " ", Kb("homePage:rejoinLobbyNumber", {
                              number: wa[0]
                            })]
                          })
                        })
                      }), MU && eU]
                    }), (0, Qb.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!MU && eU, (0, Qb.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Qb.jsx)(Cb.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Qb.jsx)(Rb.c, {
                          className: "JoinLobbyInput",
                          placeholderText: Kb("homePage:lobbyName"),
                          maxLength: Xa.S,
                          domRef: pa,
                          onValueChange: bb => {
                            bb = (0, Xa.xb)(bb), ma(bb)
                          },
                          onEnter: () => {
                            0 === ia.length ? LU(wa[0]) : LU(ia)
                          }
                        }), (0, Qb.jsx)(Pb.g, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === ia.length ? LU(wa[0]) : LU(ia)
                          },
                          children: Kb("general:join")
                        })]
                      })]
                    }), (0, Qb.jsxs)("section", {
                      className: jb()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !AU
                      }),
                      children: [(0, Qb.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Qb.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Qb.jsx)(Cb.e, {
                            name: "clock-rotate-left"
                          }), AU && (0, Qb.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: Kb("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Qb.jsx)(za.d, {
                        lobbyGroups: [wa, sa],
                        onLobbyClick: bb => {
                          LU(bb)
                        },
                        keyPrefix: Ma.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== YU && (0, Qb.jsx)(rb, {
                eventName: YU
              })]
            }), RU && (0, Qb.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Qb.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Qb.jsxs)("div", {
                  className: jb()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === oa.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === oa.showWorldsInsteadOfCustomLobbies && (0, Qb.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Qb.jsx)(Cb.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Qb.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Qb.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Kb("game:worlds")]
                    })]
                  }), !1 === oa.showWorldsInsteadOfCustomLobbies && (0, Qb.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Qb.jsx)(Cb.e, {
                      name: "joystick"
                    }), (0, Qb.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Qb.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Kb("homePage:customLobbies")]
                    })]
                  }), (0, Qb.jsx)(Pb.M, {
                    onClick: () => {
                      Sa("explore")
                    },
                    active: "explore" === na,
                    children: Kb("general:explore")
                  }), (0, Qb.jsx)(Pb.M, {
                    onClick: () => {
                      Sa("favourite")
                    },
                    active: "favourite" === na,
                    children: Kb("homePage:favouriteLobbies")
                  }), (0, Qb.jsx)(Pb.M, {
                    onClick: () => {
                      Sa("owned")
                    },
                    active: "owned" === na,
                    children: Kb("homePage:ownedLobbies")
                  })]
                }), (0, Qb.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Qb.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Qb.jsx)(Za.b, {
                      label: "Create",
                      onClick: () => {
                        Ua.NotificationProvider.showCustomPopup({
                          body: bb => (0, Qb.jsx)(Aa.CreateCustomLobby, {
                            gameNameWithVariation: Ma.gameNameWithVariation,
                            close: bb
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === ga && (0, Qb.jsx)(Za.j, {}), !1 === ga && Va.length > 0 && Va.map((bb => (0, Qb.jsx)(Za.f, {
                      customLobby: bb,
                      favouriteLobbies: ca,
                      toggleLikeLobby: PU,
                      showReport: Vb.featureFlags.useSocialFeatures && "owned" !== na
                    }, bb.name)))]
                  }), kU]
                })]
              })
            })]
          }), !RU && kU]
        })
      })
    }

    function Ga(bb) {
      let {
        variation: ab,
        isSelected: Ub,
        children: Ab
      } = bb;
      const Bb = Pa.d[ab],
        vb = (0, Tb.g)(ab, (0, Tb.i)(Bb)),
        Lb = (0, Mb.f)(vb),
        Pb = (0, Eb.d)([(0, Tb.f)(ab, (0, Tb.b)(Bb))]);
      return (0, Qb.jsxs)(Sb.LinkPreserveSearch, {
        to: (0, ob.v)(ab),
        replace: !0,
        className: jb()("GameInformationVariation", Yb.f, {
          SelectedGameInformationVariation: Ub
        }),
        onClick: bb => {
          if (!(0, aa.e)(bb)) return;
          const Ub = (0, Zb.g)(ab);
          eb.f.setItem(Ub, ab)
        },
        onMouseEnter: Pb.start,
        onMouseLeave: Pb.cancel,
        onFocus: Pb.start,
        onBlur: Pb.cancel,
        style: (0, Yb.d)(Lb),
        children: [(0, Qb.jsx)(Yb.c, {
          image: Lb
        }), Ab]
      })
    }
  },
  6113: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => yb
    });
    var Ab = Ub(52),
      Mb = Ub(1352),
      Tb = Ub(1413),
      Eb = Ub(3170),
      Yb = Ub(1060),
      Bb = Ub(1254),
      eb = Ub(1268),
      vb = Ub(990),
      Lb = Ub(984),
      Pb = Ub.n(Lb),
      Xb = Ub(1023);

    function jb(bb) {
      let {
        info: ab,
        className: Ub
      } = bb;
      return (0, Xb.jsxs)("div", {
        className: Pb()("GameApprovalInfoDetails", Ub),
        children: [(0, Xb.jsxs)("div", {
          className: Pb()("GameApprovalInfoSummary", ab.overallPassed ? "Passed" : "Failed"),
          children: [(0, Xb.jsx)(vb.e, {
            name: ab.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, Xb.jsx)("span", {
            children: ab.summary
          })]
        }), ab.rows.length > 0 && (0, Xb.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: ab.rows.map((bb => (0, Xb.jsxs)("div", {
            className: Pb()("GameApprovalInfoRow", bb.passed ? "Passed" : "Failed"),
            children: [(0, Xb.jsx)(vb.e, {
              name: bb.passed ? "check" : "xmark"
            }), (0, Xb.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, Xb.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: bb.label
              }), (0, Xb.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: bb.valueText
              })]
            })]
          }, bb.label)))
        })]
      })
    }
    var Rb = Ub(1134),
      kb = Ub(1260);

    function yb(bb) {
      kb.NotificationProvider.showCustomPopup({
        body: () => (0, Xb.jsx)(Zb, {
          ...bb
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function Zb(bb) {
      let {
        schematicId: ab,
        canOverride: Ub,
        onApprovalChanged: Lb
      } = bb;
      const {
        t: Pb
      } = (0, Rb.A)(), {
        userContext: kb
      } = (0, Yb.c)(), yb = (0, Eb.b)(), [Zb, Db] = (0, Ab.useState)(null), [zb, xb] = (0, Ab.useState)(null), [ib, fb] = (0, Ab.useState)(!1), mb = (0, Ab.useCallback)((() => {
        xb(null), Tb.b.getGameApprovalInfo(kb, ab).then((bb => {
          yb.current && Db(bb)
        })).catch((bb => {
          console.error("Failed to get game approval info", bb), yb.current && xb(Pb("studio:approvalLoadFailed"))
        }))
      }), [kb, ab, yb, Pb]);
      (0, Ab.useEffect)((() => {
        mb()
      }), [mb]);
      const pb = bb => {
        ib || (fb(!0), Tb.b.setGameApproval(kb, ab, bb).then((() => {
          null === Lb || void 0 === Lb || Lb(), yb.current && mb()
        })).catch((bb => {
          console.error("Failed to set game approval", bb)
        })).finally((() => {
          yb.current && fb(!1)
        })))
      };
      return (0, Xb.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, Xb.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: Pb("studio:approvalTitle")
        }), !Zb && !zb && (0, Xb.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, Xb.jsx)(Bb.b, {})
        }), zb && (0, Xb.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: zb
        }), Zb && (0, Xb.jsxs)(Xb.Fragment, {
          children: [(0, Xb.jsx)(jb, {
            info: Zb
          }), Ub && (0, Xb.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== Zb.manualOverride && (0, Xb.jsx)(eb.g, {
              tooltipInner: (0, Xb.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, Xb.jsxs)(Mb.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  pb(!0)
                },
                disabled: ib,
                children: [(0, Xb.jsx)(vb.e, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== Zb.manualOverride && (0, Xb.jsx)(eb.g, {
              tooltipInner: (0, Xb.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, Xb.jsxs)(Mb.D, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  pb(!1)
                },
                disabled: ib,
                children: [(0, Xb.jsx)(vb.e, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== Zb.manualOverride && (0, Xb.jsx)(eb.g, {
              tooltipInner: (0, Xb.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, Xb.jsxs)(Mb.g, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  pb(null)
                },
                disabled: ib,
                children: [(0, Xb.jsx)(vb.e, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  8957: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb
    });
    var Ab = Ub(52),
      Mb = Ub(3237);

    function Tb() {
      const [bb, ab] = (0, Ab.useState)(!1);
      return (0, Ab.useLayoutEffect)((() => {
        let bb = !0;
        return (0, Mb.b)().then((() => {
          bb && ab(!0)
        })), () => {
          bb = !1
        }
      }), []), bb
    }
  },
  8483: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb
    });
    var Ab = Ub(1249),
      Mb = Ub(1162),
      Tb = Ub(591);

    function Eb(bb) {
      return bb = function(bb, ab) {
        var Ub;
        const Ab = new URLSearchParams(ab),
          Mb = Ab.get("lobby"),
          Tb = Ab.get("vm"),
          Eb = null !== (Ub = Mb) && void 0 !== Ub ? Ub : bb.lobbyName,
          Yb = null !== Tb && void 0 !== Tb ? Tb : bb.directJoinVmUrl;
        if (Eb === bb.lobbyName && Yb === bb.directJoinVmUrl) return bb;
        return {
          ...bb,
          lobbyName: Eb,
          directJoinVmUrl: Yb
        }
      }(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), bb = function(bb) {
        if ((0, Tb.I)(bb.directJoinVmUrl)) return bb;
        const ab = (0, Mb.db)(bb.directJoinVmUrl);
        null === ab && (bb.directJoinVmUrl = void 0);
        return bb
      }(bb = function(bb) {
        if ((0, Tb.I)(bb.gameNameWithVariation)) return bb;
        return bb.gameNameWithVariation = (0, Ab.n)(bb.gameNameWithVariation), bb
      }(bb))
    }
  },
  8475: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      h: () => Mb
    });
    let Ab = !1;

    function Mb() {
      Ab = !0
    }

    function Tb() {
      return Ab
    }
  },
  35822: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      g: () => Ab
    });
    const Ab = "skyblockSkills",
      Mb = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);