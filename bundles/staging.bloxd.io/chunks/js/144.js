export const id = 144;
export const ids = [144, 715];
export const modules = {
  37559: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Sw
    });
    var eb = Mb(366),
      Hb = Mb(4896),
      pb = Mb(4929),
      Vb = Mb(4922),
      gb = Mb(4920),
      lb = Mb(1259),
      Lb = Mb(43),
      Ib = Mb(1965),
      Ob = Mb(1516),
      Ub = Mb(1616),
      tb = Mb(1159),
      Cb = Mb.n(tb),
      Eb = Mb(1876),
      Fb = Mb(64),
      Bb = Mb(81),
      sb = Mb(3394),
      mb = Mb(1455),
      hb = Mb(1799),
      zb = Mb(1179),
      Xb = Mb(4800),
      xb = Mb(5405),
      jb = Mb(3770),
      Kb = Mb(2116),
      rb = Mb(4892),
      Rb = Mb(1977),
      Db = Mb(1677),
      cb = Mb(3121),
      Yb = Mb(1468),
      Zb = Mb(3797),
      fb = Mb(4374),
      Ab = Mb(1364);
    const Wb = 15e3,
      Jb = 2500;

    function Sb(bb) {
      var wb;
      let {
        eventName: Mb
      } = bb;
      const {
        t: eb
      } = (0, lb.C)(), Hb = Rb.f[Mb], [pb, Vb] = (0, Fb.useState)((() => Date.now() >= Hb.endsAt.getTime())), [gb, Lb] = (0, Fb.useState)("overall"), Ib = function(bb, wb) {
        const {
          userContext: Mb,
          isUserContextUpdating: eb
        } = (0, zb.e)(), Hb = `${bb}:${wb}`, [pb, Vb] = (0, Fb.useState)({
          requestKey: Hb,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, Fb.useEffect)((() => {
          if (eb) return;
          let pb, gb = !1;
          const lb = async () => {
            if ("visible" === document.visibilityState) try {
              const eb = await Db.e.getGameEventLeaderboard(Mb, {
                event: bb,
                scope: wb
              });
              gb || Vb({
                requestKey: Hb,
                leaderboard: {
                  status: "loaded",
                  leaderboard: eb
                }
              })
            } catch {
              gb || Vb((bb => bb.requestKey === Hb && "loaded" === bb.leaderboard.status ? bb : {
                requestKey: Hb,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            gb || (pb = setTimeout(lb, Wb))
          };
          return lb(), () => {
            gb = !0, clearTimeout(pb)
          }
        }), [bb, wb, Hb, Mb, eb]), pb.requestKey === Hb ? pb.leaderboard : {
          status: "loading"
        }
      }(Mb, gb), Ob = function(bb) {
        const wb = (0, Fb.useRef)(null),
          Mb = (0, Fb.useRef)(0),
          eb = (0, Fb.useRef)(),
          [Hb, pb] = (0, Fb.useState)({});
        return (0, Fb.useEffect)((() => {
          const Hb = null === bb || void 0 === bb ? void 0 : bb.entries;
          if (!Hb) return;
          const Vb = new Map(Hb.map((bb => [bb.player.name, bb.value]))),
            gb = wb.current;
          if (wb.current = Vb, null === gb) return;
          const lb = {};
          for (const [bb, wb] of Vb) {
            const eb = gb.get(bb);
            void 0 !== eb && wb > eb && (lb[bb] = {
              amount: wb - eb,
              key: Mb.current++
            })
          }
          0 !== Object.keys(lb).length && (pb(lb), clearTimeout(eb.current), eb.current = setTimeout((() => {
            pb({})
          }), Jb))
        }), [bb]), (0, Fb.useEffect)((() => () => {
          clearTimeout(eb.current)
        }), []), Hb
      }("loaded" === Ib.status ? Ib.leaderboard : null), Ub = function(bb) {
        const [wb, Mb] = (0, Fb.useState)(null), eb = "loaded" === bb.status ? bb.leaderboard.goalProgress : void 0;
        return (0, Fb.useEffect)((() => {
          eb && Mb(eb)
        }), [eb]), wb
      }(Ib), tb = cb.h[`profileEffect_${Hb.prizePack}`];
      if (pb) return null;
      const Eb = "loaded" === Ib.status ? Ib.leaderboard : null,
        Bb = null !== (wb = null === Eb || void 0 === Eb ? void 0 : Eb.entries) && void 0 !== wb ? wb : null,
        sb = null !== Eb && void 0 !== Eb && Eb.own && null !== Bb && !Bb.some((bb => bb.isOwn)) ? Eb.own : null;
      return (0, Ab.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Ab.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Ab.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Ab.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Ab.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Ab.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), eb("gameEvents:live")]
              }), (0, Ab.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [eb("gameEvents:endsIn"), (0, Ab.jsx)(jb.d, {
                  toTime: Hb.endsAt,
                  onReachEndOfCountdown: () => {
                    Vb(!0)
                  }
                })]
              })]
            }), (0, Ab.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: eb(Hb.titleKey)
            }), (0, Ab.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Ab.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [tb && (0, Ab.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Ab.jsx)(tb, {})
                }), (0, Ab.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Ab.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: eb("gameEvents:prize")
                  }), (0, Ab.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: eb(Hb.prizeNameKey)
                  })]
                })]
              }), (0, Ab.jsx)(Nb, {
                event: Hb,
                progress: Ub
              })]
            })]
          }), (0, Ab.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Ab.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Ab.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: eb(Hb.leaderboard.titleKey)
              }), (0, Ab.jsx)(fb.c, {
                ariaLabel: eb("gameEvents:leaderboardScope"),
                options: Rb.e.map((bb => ({
                  value: bb,
                  label: eb(`gameEvents:${bb}Scope`)
                }))),
                value: gb,
                onChange: Lb
              })]
            }), "loading" === Ib.status && (0, Ab.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Ab.jsx)(Yb.c, {})
            }), ("unavailable" === Ib.status || "loaded" === Ib.status && null === Bb) && (0, Ab.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: eb("gameEvents:leaderboardUnavailable")
            }), null !== Bb && 0 === Bb.length && (0, Ab.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: eb("friends" === gb ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== Bb && Bb.length > 0 && (0, Ab.jsx)("ol", {
              className: "GameEventPanelRows",
              children: Bb.map((bb => {
                const wb = Ob[bb.player.name];
                return (0, Ab.jsxs)("li", {
                  className: Cb()("GameEventPanelRow", {
                    GameEventPanelRowOwn: bb.isOwn,
                    GameEventPanelRowTop: bb.rank <= 3
                  }),
                  children: [(0, Ab.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", bb.rank]
                  }), (0, Ab.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Ab.jsx)(Zb.d, {
                      playerSocialPreview: {
                        ...bb.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== wb && (0, Ab.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", wb.amount.toLocaleString()]
                  }, wb.key), (0, Ab.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: bb.value.toLocaleString()
                  })]
                }, bb.player.name)
              }))
            }), sb && (0, Ab.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Ab.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", sb.rank.toLocaleString()]
              }), (0, Ab.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: eb("gameEvents:yourPlace")
              }), (0, Ab.jsx)("span", {
                className: "GameEventPanelScore",
                children: sb.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function Nb(bb) {
      let {
        event: wb,
        progress: Mb
      } = bb;
      const {
        t: eb
      } = (0, lb.C)(), Hb = null !== Mb && wb.prizeGoals.some(((bb, wb) => Mb[wb] >= bb.target));
      return (0, Ab.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Ab.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: eb(Hb ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Ab.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: wb.prizeGoals.map(((bb, wb) => {
            const Hb = null === Mb ? null : Math.min(Mb[wb], bb.target);
            return (0, Ab.jsxs)(Fb.Fragment, {
              children: [wb > 0 && (0, Ab.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: eb("gameEvents:goalsOr")
              }), (0, Ab.jsxs)("div", {
                className: Cb()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Hb === bb.target
                }),
                children: [(0, Ab.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: eb(bb.labelKey)
                }), (0, Ab.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Ab.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Hb && void 0 !== Hb ? Hb : 0) / bb.target * 100 + "%"
                    }
                  }), null !== Hb && (0, Ab.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Hb.toLocaleString(), " / ", bb.target.toLocaleString()]
                  })]
                })]
              })]
            }, bb.board)
          }))
        })]
      })
    }
    var vb = Mb(1720),
      Qb = Mb(1782),
      Gb = Mb(1146),
      qb = Mb(815),
      ab = Mb(4881);

    function ib(bb) {
      let {
        gameNameWithVariation: wb
      } = bb;
      const Mb = (0, vb.y)(wb),
        [eb, Hb] = (0, Fb.useState)(null);
      if ((0, Fb.useEffect)((() => {
          if (!Mb) return;
          let bb = !0;
          return (0, Qb.k)(Mb).then((wb => {
            bb && Hb(wb)
          })).catch((bb => {
            console.error(`Failed to load the page copy for ${Mb.name}`, bb)
          })), () => {
            bb = !1
          }
        }), [Mb]), !Mb || !eb || eb.name !== Mb.name) return null;
      const pb = (0, Qb.g)(eb),
        Vb = new Set((0, Gb.d)((0, qb.j)()).map((bb => (0, vb.t)(bb)))),
        gb = eb.similarGames.filter((bb => Vb.has((0, vb.t)(bb))));
      return (0, Ab.jsx)("div", {
        className: "GamePageContent",
        children: (0, Ab.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Ab.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Ab.jsx)("h2", {
              children: pb.whatIs
            }), eb.whatIs.map((bb => (0, Ab.jsx)("p", {
              children: bb
            }, bb)))]
          }), (0, Ab.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Ab.jsx)("h2", {
              children: pb.howToPlay
            }), eb.howToPlay.map((bb => (0, Ab.jsx)("p", {
              children: bb
            }, bb)))]
          }), (0, Ab.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Ab.jsx)("h2", {
              children: pb.features
            }), (0, Ab.jsx)("ul", {
              children: eb.features.map((bb => (0, Ab.jsx)("li", {
                children: bb
              }, bb)))
            })]
          }), (0, Ab.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Ab.jsx)("h2", {
              children: pb.tips
            }), (0, Ab.jsx)("ul", {
              children: eb.tips.map((bb => (0, Ab.jsx)("li", {
                children: bb
              }, bb)))
            })]
          }), (0, Ab.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Ab.jsx)("h2", {
              children: pb.faq
            }), eb.faq.map((bb => {
              let {
                question: wb,
                answer: Mb
              } = bb;
              return (0, Ab.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Ab.jsx)("h3", {
                  children: wb
                }), (0, Ab.jsx)("p", {
                  children: Mb
                })]
              }, wb)
            }))]
          }), gb.length > 0 && (0, Ab.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Ab.jsx)("h2", {
              children: pb.similarGames
            }), (0, Ab.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: gb.map((bb => (0, Ab.jsx)("li", {
                children: (0, Ab.jsx)(ab.f, {
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
    var ub = Mb(1475),
      db = Mb(110),
      Pb = Mb(1186),
      nb = Mb(35377),
      yb = Mb(1840),
      ob = Mb(1696),
      Tb = Mb(1686),
      kb = Mb(1793),
      bw = Mb(1633),
      ww = Mb(1504),
      Mw = Mb(37568),
      ew = Mb(1309),
      Hw = Mb(1126),
      pw = Mb(382),
      Vw = Mb(1136),
      gw = Mb(1713),
      lw = Mb(10298),
      Lw = Mb(26),
      Iw = Mb(3677),
      Ow = Mb(867),
      Uw = Mb(1301),
      tw = Mb(7672),
      Cw = Mb(4883);

    function Ew(bb) {
      let {
        preview: wb,
        isBroken: Mb
      } = bb;
      const eb = null === wb ? null : (0, pb.f)(wb, "small"),
        Vb = (0, Hb.i)(null !== eb && void 0 !== eb ? eb : pb.s);
      return null === wb ? (0, Ab.jsx)("div", {
        className: Cb()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: Mb
        }),
        children: (0, Ab.jsx)(ub.b, {
          name: Mb ? "triangle-exclamation" : "star"
        })
      }) : (0, Ab.jsx)("div", {
        className: Cb()("FeaturedGamesPopupSlotThumbnail", gb.h),
        style: (0, gb.d)(Vb),
        role: "img",
        "aria-label": wb.name,
        children: (0, Ab.jsx)(gb.b, {
          image: Vb
        })
      })
    }

    function Fw(bb) {
      let {
        schematicId: wb,
        gameName: Mb
      } = bb;
      const {
        userContext: Hb
      } = (0, zb.e)(), pb = (0, Cw.d)(), [Vb, gb] = (0, Fb.useState)(null), [lb, Lb] = (0, Fb.useState)(null), [Ib, Ob] = (0, Fb.useState)(!1), tb = (0, Fb.useCallback)((() => {
        Lb(null), Db.e.getFeaturedGames(Hb).then((bb => {
          pb.current && gb(bb.slots)
        })).catch((bb => {
          console.error("Failed to get featured games", bb), pb.current && Lb("Failed to load featured games")
        }))
      }), [Hb, pb]);
      (0, Fb.useEffect)((() => {
        tb()
      }), [tb]);
      const Cb = (bb, wb) => {
        Ib || (Ob(!0), Db.e.setFeaturedGame(Hb, bb, wb).then((() => {
          pb.current && tb()
        })).catch((bb => {
          console.error("Failed to set featured game", bb), pb.current && Lb("Failed to update the featured slot")
        })).finally((() => {
          pb.current && Ob(!1)
        })))
      };
      return (0, Ab.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Ab.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !Vb && !lb && (0, Ab.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Ab.jsx)(Yb.c, {})
        }), lb && (0, Ab.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: lb
        }), Vb && (0, Ab.jsxs)(Ab.Fragment, {
          children: [(0, Ab.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: Vb.map((bb => {
              const Mb = bb.schematicId === wb,
                Hb = null === bb.schematicId,
                {
                  categoryGroup: pb
                } = eb.F[bb.slotId];
              return (0, Ab.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Ab.jsx)(Ew, {
                  preview: bb.preview,
                  isBroken: !Hb
                }), (0, Ab.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Ab.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, eb.hb)(pb), " \xb7 position", " ", (0, eb.J)(bb.slotId, eb.Mb) + 1, " of", " ", (0, eb.Lb)(pb, eb.Mb)]
                  }), Hb && (0, Ab.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Hb && null !== bb.preview && (0, Ab.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: bb.preview.name
                  }), !Hb && null === bb.preview && (0, Ab.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Ab.jsx)(ub.b, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Ab.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Hb && (0, Ab.jsxs)(Ub.u, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Cb(bb.slotId, wb)
                    },
                    disabled: Ib,
                    children: [(0, Ab.jsx)(ub.b, {
                      name: "star"
                    }), " Feature here"]
                  }), !Hb && !Mb && (0, Ab.jsxs)(Ub.Y, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Cb(bb.slotId, wb)
                    },
                    disabled: Ib,
                    children: [(0, Ab.jsx)(ub.b, {
                      name: "star"
                    }), " Replace"]
                  }), !Hb && (0, Ab.jsxs)(Ub.Q, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Cb(bb.slotId, null)
                    },
                    disabled: Ib,
                    children: [(0, Ab.jsx)(ub.b, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, bb.slotId)
            }))
          }), (0, Ab.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var Bw = Mb(5555),
      sw = Mb(5438),
      mw = Mb(4835);
    const hw = 8,
      zw = 12;

    function Xw(bb) {
      let {
        customLobbies: wb,
        favouriteLobbies: Mb,
        toggleLikeLobby: eb,
        showReport: Hb
      } = bb;
      const [pb, Vb] = (0, Fb.useState)(hw);
      return (0, Fb.useEffect)((() => {
        if (pb >= wb.length) return;
        let bb = !0;
        return (0, mw.e)().then((() => {
          bb && Vb(pb + zw)
        })), () => {
          bb = !1
        }
      }), [pb, wb.length]), (0, Ab.jsx)(Ab.Fragment, {
        children: wb.slice(0, pb).map((bb => (0, Ab.jsx)(sw.f, {
          customLobby: bb,
          favouriteLobbies: Mb,
          toggleLikeLobby: eb,
          showReport: Hb
        }, bb.name)))
      })
    }
    var xw = Mb(5443),
      jw = Mb(5459),
      Kw = Mb(5423),
      rw = Mb(4958),
      Rw = Mb(5511),
      Dw = Mb(10273),
      Yw = Mb(244);
    const Zw = {
      skyblock: [Mb(37587).c]
    };
    var fw = Mb(661);
    const Aw = {
      listedVariations: null,
      backgroundImage: pb.s,
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

    function Ww(bb, wb) {
      const Mb = Ow.d[bb.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, pb.f)(bb, "large"),
        badges: [],
        category: bb.gameCategory,
        title: void 0 !== (null === Mb || void 0 === Mb ? void 0 : Mb.title) ? wb(Mb.title) : bb.name,
        variationTitle: null,
        description: void 0 !== (null === Mb || void 0 === Mb ? void 0 : Mb.description) ? wb(Mb.description) : bb.description,
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

    function Jw(bb) {
      var wb, Mb, eb;
      return null !== (wb = null !== (Mb = (0, Yw.j)() ? function(bb) {
        for (const [wb, Mb] of Object.entries(Zw)) {
          const eb = [wb, ...Mb.map((bb => (0, pw.Wb)(wb, bb)))];
          if (eb.includes(bb)) return eb
        }
        return null
      }(bb) : null) && void 0 !== Mb ? Mb : null === (eb = Ow.b[bb]) || void 0 === eb ? void 0 : eb.listedVariations) && void 0 !== wb ? wb : null
    }

    function Sw() {
      const {
        gameNameWithVariation: bb
      } = (0, ob.E)();
      if ((0, Fb.useEffect)(rw.q, []), bb && (0, ew.r)(bb)) return (0, Ab.jsx)(Nw, {
        urlId: bb
      }, bb);
      const wb = bb && (0, Hw.j)(bb) ? bb : "firstParty";
      return (0, Ab.jsx)(Qw, {}, wb)
    }

    function Nw(bb) {
      let {
        urlId: wb
      } = bb;
      const {
        t: Mb
      } = (0, lb.C)(), {
        userContext: eb,
        isUserContextUpdating: Hb
      } = (0, zb.e)(), pb = (0, Fb.useMemo)((() => (0, yb.i)(wb)), [wb]);
      (0, Fb.useMemo)((() => {
        if (null === pb) return;
        const bb = Pb.userContextManager.peekCurrentUserContext();
        (null !== bb ? Db.e.getGame(bb, pb.schematicId) : Pb.userContextManager.getCurrentUserContext().then((bb => Db.e.getGame(bb, pb.schematicId)))).catch((bb => {
          null === (0, Db.l)(bb) && console.error(`Failed to get the custom game ${pb.schematicId}`, bb), (0, yb.h)(wb)
        }))
      }), [pb, wb]);
      const [Vb, gb] = (0, Fb.useState)(null), Lb = (0, nb.b)();
      (0, Fb.useEffect)((() => {
        if (null !== pb || Hb) return;
        let bb = !0;
        return Db.e.getGameByUrlId(eb, wb).then((eb => {
          bb && (eb.takenDown ? vw(Mb, eb) : gb({
            urlId: wb,
            game: eb
          }))
        })).catch((eb => {
          const Hb = null !== (0, Db.l)(eb);
          Hb || console.error(`Failed to find the custom game with urlId ${wb}`, eb), bb && (Hb ? vw(Mb, null) : (0, Tb.navigateToHomePage)())
        })), () => {
          bb = !1
        }
      }), [wb, pb, Hb, eb, Mb]);
      const Ib = null !== pb && void 0 !== pb ? pb : (null === Vb || void 0 === Vb ? void 0 : Vb.urlId) === wb ? Vb.game : null;
      return null === Ib ? (0, Ab.jsx)(Yb.c, {}) : Lb ? (0, Ab.jsx)(Qw, {
        gameNameWithVariation: (0, Hw.t)(Ib.schematicId),
        knownCustomGame: Ib
      }, Ib.schematicId) : null
    }

    function vw(bb, wb) {
      (0, Tb.navigateToHomePage)(), (0, Dw.d)(bb, wb)
    }

    function Qw(bb) {
      var wb, Mb, Vb, tb, Rb, cb, Yb, fb;
      let {
        gameNameWithVariation: Wb,
        knownCustomGame: Jb = null
      } = bb;
      const {
        t: Nb
      } = (0, lb.C)();
      (0, Iw.j)();
      const Qb = (0, Iw.q)(),
        {
          userContext: Gb,
          isUserContextUpdating: qb
        } = (0, zb.e)(),
        ab = (0, Kw.f)(),
        Pb = (0, Tb.useNavigatePreserveSearch)(),
        nb = (0, ob.E)(),
        yb = (0, Fb.useMemo)((() => Wb ? {
          gameNameWithVariation: Wb
        } : nb), [Wb, nb]),
        bw = (0, lw.c)(yb),
        ew = (0, Fb.useMemo)((() => {
          const bb = function(bb) {
            var wb, Mb;
            const eb = Jw(bb);
            if (!eb || 0 === eb.length || eb.includes(bb)) return bb;
            const Hb = Lb.i.getItem((0, sb.j)(bb));
            if (Hb && eb.includes(Hb)) return Hb;
            return null !== (wb = null === (Mb = Ow.b[bb]) || void 0 === Mb ? void 0 : Mb.defaultListedVariation) && void 0 !== wb ? wb : eb[0]
          }(bw.gameNameWithVariation);
          return bb === bw.gameNameWithVariation ? bw : {
            ...bw,
            gameNameWithVariation: bb
          }
        }), [bw]);
      (0, Fb.useEffect)((() => {
        const bb = bw.gameNameWithVariation;
        ew.gameNameWithVariation !== bb && bb !== (0, pw.Zb)(bb) && Pb((0, vb.v)(ew.gameNameWithVariation), {
          replace: !0
        })
      }), [ew.gameNameWithVariation, bw.gameNameWithVariation, Pb]);
      const [Cw, Ew] = (0, Fb.useState)(""), mw = Fb.useRef(null), [hw, zw] = (0, Fb.useState)(), rw = (0, Hw.j)(ew.gameNameWithVariation), Dw = (0, Fb.useMemo)((() => rw ? null : function(bb, wb, Mb) {
        var eb, Hb;
        const Vb = Ow.b[bb];
        return (0, fw.K)(Vb) ? null : {
          listedVariations: Jw(bb),
          backgroundImage: (0, pb.k)(bb, (0, pb.b)(Vb)),
          badges: (0, Ib.filterBadges)(Vb.badges),
          category: Vb.type,
          title: Mb(Vb.title),
          variationTitle: Vb.variationTitle ? Mb(Vb.variationTitle) : null,
          description: Mb(Vb.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== wb ? null !== (eb = wb[bb]) && void 0 !== eb ? eb : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: Vb.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: Vb.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (Hb = Vb.canCreateCustomLobbies) || void 0 === Hb || Hb,
          countdownInformation: (0, sb.h)(bb)
        }
      }(ew.gameNameWithVariation, Qb, Nb)), [rw, ew.gameNameWithVariation, Qb, Nb]), [Yw, Zw] = (0, Fb.useState)(!1), [Sw, Nw] = (0, Fb.useState)(null), [Qw, qw] = (0, Fb.useState)((() => Jb ? Ww(Jb, Nb) : Aw)), aw = null !== Dw && void 0 !== Dw ? Dw : Qw, [iw] = (0, Fb.useState)(aw === Aw), uw = (0, Hb.i)(aw.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: dw,
        recentlyPlayedCustomLobbies: Pw
      } = (0, Fb.useMemo)((() => function(bb, wb, Mb, eb) {
        var Hb;
        const pb = bb => {
            const Mb = (0, Hw.o)(bb),
              eb = wb.find((wb => "custom" === wb.type ? wb.schematicId === Mb : wb.gameNameWithVariation === bb));
            return eb ? [...eb.recentLobbies] : []
          },
          Vb = (0, Ib.getRecentGameNameWithVariationLobbiesKey)(bb),
          gb = null !== (Hb = Lb.i.getItem(Vb)) && void 0 !== Hb ? Hb : [],
          lb = [...pb(bb), ...gb],
          Ob = [];
        for (const Lb of lb)(0, Uw.E)(Lb) && !Ob.includes(Lb) && Ob.push(Lb);
        let Ub = lb;
        if (Mb) {
          const bb = pb("classic_worlds"),
            wb = lb.filter((wb => !bb.includes(wb)));
          Ub = [...bb, ...wb]
        }
        const tb = [],
          Cb = !1 === eb ? [] : Ub;
        for (const Lb of Cb)(0, Uw.E)(Lb) || tb.includes(Lb) || tb.push(Lb);
        return {
          recentlyPlayedPublicLobbies: Ob,
          recentlyPlayedCustomLobbies: tb
        }
      }(ew.gameNameWithVariation, ab, aw.showWorldsInsteadOfCustomLobbies, aw.canCreateCustomLobbies)), [ew.gameNameWithVariation, ab, aw.showWorldsInsteadOfCustomLobbies, aw.canCreateCustomLobbies]), [nw, yw] = (0, Fb.useState)(!0), [ow, Tw] = (0, Fb.useState)([]), [kw, bM] = (0, Fb.useState)(null), [wM, MM] = (0, Fb.useState)("explore"), eM = (0, Fb.useRef)(!1), HM = (0, Fb.useCallback)((bb => {
        (0, Bb.unstable_batchedUpdates)((() => {
          zw(bb), qw((wb => ({
            ...Ww(bb, Nb),
            isFavourite: wb.isFavourite
          })))
        }))
      }), [Nb]);
      (0, Fb.useEffect)((() => {
        null === Lw.c.get("gameEntrySource") && (0, Lw.k)("gameInformationPageDirect")
      }), []);
      const pM = (0, Fb.useRef)(null);
      (0, Fb.useEffect)((() => {
        const bb = bb => {
            pM.current = bb.target instanceof Element ? bb.target.closest("a, button") : null
          },
          wb = bb => {
            "Tab" === bb.key && (pM.current = null)
          };
        return document.addEventListener("pointerdown", bb, !0), document.addEventListener("keydown", wb, !0), () => {
          document.removeEventListener("pointerdown", bb, !0), document.removeEventListener("keydown", wb, !0)
        }
      }), []), (0, Xb.d)("Enter", (bb => {
        const wb = bb.target instanceof Element ? bb.target : null;
        if (bb.defaultPrevented || null !== wb && void 0 !== wb && wb.closest("input, textarea, select")) return;
        const Mb = null === wb || void 0 === wb ? void 0 : wb.closest("a, button");
        Mb && Mb !== pM.current || (bb.preventDefault(), CM())
      })), (0, xb.e)(Tb.navigateToHomePage);
      const VM = dw.length > 0 || Pw.length > 0,
        gM = !aw.useRejoinLastLobbyButton || 0 === dw.length,
        lM = rw && null === aw.ownerSocialPreviewWithoutLocation,
        LM = Gb.getPlayerName() === (null === hw || void 0 === hw || null === (wb = hw.owner) || void 0 === wb ? void 0 : wb.name),
        IM = null !== (Mb = null === (Vb = aw.badges.find((bb => "event" === bb.type))) || void 0 === Vb ? void 0 : Vb.event) && void 0 !== Mb ? Mb : null,
        OM = gM ? Ub.p : Ub.f,
        UM = (0, Ab.jsx)(Ob.d, {
          tooltipInner: (0, Ab.jsx)("div", {
            children: Nb("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Ab.jsx)(OM, {
            className: "GameInformationButton",
            padDefaultFocus: gM,
            showPress: !0,
            onClick: () => {
              CM()
            },
            children: (0, Ab.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [gM && (0, Ab.jsxs)(Ab.Fragment, {
                children: [(0, Ab.jsx)(ub.b, {
                  name: "play"
                }), " "]
              }), Nb("homePage:quickPlay")]
            })
          })
        });
      (0, Fb.useEffect)((() => {
        if (!rw || qb) return;
        let bb = !0;
        const wb = (0, Hw.o)(ew.gameNameWithVariation);
        return Db.e.getGame(Gb, wb).then((wb => {
          bb && (wb.takenDown ? Nw({
            ownGame: wb
          }) : HM(wb))
        })).catch((wb => {
          const Mb = null !== (0, Db.l)(wb);
          Mb || console.error("Failed to get Custom Game information", wb), bb && (Mb ? Nw({
            ownGame: null
          }) : (0, Tb.navigateToHomePage)())
        })), Db.e.getFavouriteGames(Gb).then((Mb => {
          bb && qw((bb => ({
            ...bb,
            isFavourite: Mb.includes(wb)
          })))
        })).catch((wb => {
          console.error("Failed to get favourite games", wb), bb && Zw(!0)
        })), () => {
          bb = !1
        }
      }), [rw, qb, ew.gameNameWithVariation, HM, Gb]), (0, Fb.useEffect)((() => {
        null !== Sw && vw(Nb, Sw.ownGame)
      }), [Sw, Nb]);
      const tM = !rw && null === Dw;

      function CM(bb) {
        (0, Rw.f)(), Pb((0, mb.b)(ew.gameNameWithVariation, bb))
      }(0, Fb.useEffect)((() => {
        tM && (0, Tb.navigateToHomePage)()
      }), [tM]), (0, Fb.useEffect)((() => {
        if (!1 === aw.canCreateCustomLobbies) return;
        let bb = !0;
        return null !== aw.showWorldsInsteadOfCustomLobbies && !1 === qb && (yw(!0), Db.e.getFavouriteLobbies(Gb).then((bb => {
          bM(bb)
        })), Db.e.getOpenCustomLobbies(Gb, {
          gameNameWithVariation: aw.showWorldsInsteadOfCustomLobbies ? "classic" : ew.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === wM,
          onlyFavouriteLobbies: "favourite" === wM
        }).then((wb => {
          bb && (0, Bb.unstable_batchedUpdates)((() => {
            Tw(wb), yw(!1)
          }))
        })).catch((wb => {
          console.error("Failed to get open custom lobbies", wb), bb && yw(!1)
        }))), () => {
          bb = !1
        }
      }), [qb, ew, wM, aw.showWorldsInsteadOfCustomLobbies, aw.canCreateCustomLobbies, Gb]);
      const EM = (0, Fb.useCallback)((async bb => {
          try {
            if (!kw) return;
            kw.includes(bb) ? (Db.e.unfavouriteLobby(Gb, bb), bM(kw.filter((wb => wb !== bb)))) : (Db.e.favouriteLobby(Gb, bb).catch((bb => {
              console.error("Failed to favourite lobby", bb)
            })), bM([...kw, bb]))
          } catch (wb) {
            console.error("Failed to like lobby", wb)
          }
        }), [Gb, kw]),
        FM = (null === hw || void 0 === hw ? void 0 : hw.schematicId) === (0, Hw.o)(bw.gameNameWithVariation) ? hw : null,
        BM = FM && (0, vb.C)(bw.gameNameWithVariation, (bb => Nb(bb)), FM);
      (0, kb.d)(FM && (0, vb.v)(bw.gameNameWithVariation, FM));
      const sM = db.featureFlags.canUseCustomLobbies && !0 === aw.canCreateCustomLobbies,
        mM = (0, Ab.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Ab.jsx)(ib, {
            gameNameWithVariation: ew.gameNameWithVariation
          })
        });
      return (0, Ab.jsx)(Ab.Fragment, {
        children: (0, Ab.jsxs)("article", {
          className: Cb()("GameInformation", {
            GameInformationFadeIn: iw,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (tb = aw.countdownInformation) || void 0 === tb ? void 0 : tb.type)
          }),
          children: [BM && (0, Ab.jsx)(hb.d, {
            meta: BM
          }), (0, Ab.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Ab.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Ab.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Ab.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Ab.jsx)("div", {
                  className: Cb()("GameInformationTopBackgroundImage", gb.h),
                  style: (0, gb.d)(uw),
                  children: (0, Ab.jsx)(gb.b, {
                    image: uw
                  })
                })]
              }), (0, Ab.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Ab.jsx)(Bw.c, {}), (0, Ab.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Ab.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Ab.jsxs)("div", {
                      className: Cb()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: lM
                      }),
                      children: [aw.badges.map((bb => (0, Ab.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${bb.type}`,
                        children: (0, Ab.jsx)(rb.c, {
                          badge: bb
                        })
                      }, bb.type))), rw && (0, Ab.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Ab.jsx)(Kb.d, {
                          text: (0, eb.ab)({
                            type: "playerCrafted"
                          })
                        })
                      }), aw.category && (0, Ab.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Ab.jsx)(Kb.d, {
                          text: [{
                            str: (0, eb.eb)(aw.category).toUpperCase()
                          }]
                        })
                      }), null !== aw.ccu && (0, Ab.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Ab.jsx)(ub.b, {
                          name: "user"
                        }), (0, Uw.L)(aw.ccu), " online"]
                      }), null !== aw.ownerSocialPreviewWithoutLocation && (0, Ab.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Ab.jsx)("span", {
                          children: "Made by"
                        }), (0, Ab.jsx)(Zb.d, {
                          playerSocialPreview: {
                            ...aw.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), lM && (0, Ab.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Ab.jsx)("span", {
                          children: "Made by"
                        }), (0, Ab.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== aw.favourites && (null !== aw.isFavourite || rw && !Yw) && (0, Ab.jsx)(Ub.C, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== eM.current && (eM.current = !0, null !== aw.isFavourite)) {
                              const bb = (0, Hw.o)(ew.gameNameWithVariation);
                              let wb;
                              aw.isFavourite ? (wb = -1, Db.e.unfavouriteGame(Gb, bb).catch((bb => {
                                console.error("Failed to get unfavourite game", bb)
                              })).finally((() => {
                                eM.current = !1
                              }))) : (wb = 1, Db.e.favouriteGame(Gb, bb).catch((bb => {
                                console.error("Failed to get favourite game", bb)
                              })).finally((() => {
                                eM.current = !1
                              }))), qw((bb => ({
                                ...bb,
                                isFavourite: !bb.isFavourite
                              }))), qw((bb => ({
                                ...bb,
                                favourites: bb.favourites + wb
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (Rb = aw.isFavourite) && void 0 !== Rb && Rb,
                        disabled: null === aw.isFavourite,
                        className: Cb()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === aw.isFavourite
                        })
                      }, null === aw.isFavourite ? "pending" : "known"), rw && !lM && db.featureFlags.useSocialFeatures && !LM && (0, Ab.jsx)(xw.b, {
                        targetType: "customGame",
                        targetId: (0, Hw.o)(ew.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (Gb.playerHasRank("developer") || Gb.playerHasRank("admin") && LM) && (0, Ab.jsxs)(Ub.p, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Pb((0, gw.p)((0, Vw.f)(ew.gameNameWithVariation, !0)))
                        },
                        children: [(0, Ab.jsx)(ub.b, {
                          name: "star-christmas"
                        }), " ", Nb("studio:viewInStudio")]
                      }), rw && Gb.playerHasRank("developer") && (0, Ab.jsxs)(Ub.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, tw.b)({
                            schematicId: (0, Hw.o)(ew.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Ab.jsx)(ub.b, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), rw && Gb.playerHasRank("developer") && (0, Ab.jsxs)(Ub.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          ww.NotificationProvider.showCustomPopup({
                            body: () => (0, Ab.jsx)(Fw, {
                              schematicId: (0, Hw.o)(ew.gameNameWithVariation),
                              gameName: aw.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Ab.jsx)(ub.b, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (cb = aw.countdownInformation) || void 0 === cb ? void 0 : cb.type) && (0, Ab.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Ab.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Ab.jsx)(jb.d, {
                            toTime: aw.countdownInformation.countdownToTime
                          })]
                        }), (0, Ab.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: aw.countdownInformation.previewText
                        })]
                      })]
                    }, lM ? "pending" : "shown"), (0, Ab.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Ab.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Ab.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [aw.title, " ", aw.variationTitle && (null === (Yb = Ow.b[ew.gameNameWithVariation]) || void 0 === Yb ? void 0 : Yb.variationThumbnailUseBigRatio) && (0, Ab.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: aw.variationTitle
                          })]
                        })
                      }), aw.listedVariations && aw.listedVariations.length > 1 && (0, Ab.jsx)("div", {
                        className: Cb()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (fb = Ow.b[ew.gameNameWithVariation]) || void 0 === fb ? void 0 : fb.variationThumbnailUseBigRatio
                        }),
                        children: aw.listedVariations.map((bb => {
                          var wb, Mb;
                          return (0, Ab.jsxs)(Gw, {
                            variation: bb,
                            isSelected: ew.gameNameWithVariation === bb,
                            children: [null !== Qb && (0, Ab.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Ab.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Ab.jsx)(ub.b, {
                                  name: "user"
                                }), " ", (0, Uw.L)(null !== (wb = Qb[bb]) && void 0 !== wb ? wb : 0)]
                              })
                            }), (0, Ab.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: Nb(null !== (Mb = Ow.b[bb].variationTitle) && void 0 !== Mb ? Mb : Ow.b[bb].title)
                            }), (0, Ab.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, Ib.filterBadges)(Ow.b[bb].badges).map((bb => (0, Ab.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + bb.type,
                                children: (0, Ab.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Ab.jsx)(rb.c, {
                                    badge: bb
                                  })
                                })
                              }, bb.type)))
                            })]
                          }, bb)
                        }))
                      })]
                    }), aw.description && (0, Ab.jsx)("p", {
                      className: "GameInformationDescription",
                      children: aw.description
                    })]
                  }), (0, Ab.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Ab.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!gM && (0, Ab.jsx)(Ob.d, {
                        tooltipInner: (0, Ab.jsx)("div", {
                          children: Nb("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Ab.jsx)(Ub.p, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            CM(dw[0])
                          },
                          children: (0, Ab.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Ab.jsx)(ub.b, {
                              name: "play"
                            }), " ", Nb("homePage:rejoinLobbyNumber", {
                              number: dw[0]
                            })]
                          })
                        })
                      }), gM && UM]
                    }), (0, Ab.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!gM && UM, (0, Ab.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Ab.jsx)(ub.b, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Ab.jsx)(Eb.d, {
                          className: "JoinLobbyInput",
                          placeholderText: Nb("homePage:lobbyName"),
                          maxLength: Uw.I,
                          domRef: mw,
                          onValueChange: bb => {
                            bb = (0, Uw.mb)(bb), Ew(bb)
                          },
                          onEnter: () => {
                            0 === Cw.length ? CM(dw[0]) : CM(Cw)
                          }
                        }), (0, Ab.jsx)(Ub.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === Cw.length ? CM(dw[0]) : CM(Cw)
                          },
                          children: Nb("general:join")
                        })]
                      })]
                    }), (0, Ab.jsxs)("section", {
                      className: Cb()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !VM
                      }),
                      children: [(0, Ab.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Ab.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Ab.jsx)(ub.b, {
                            name: "clock-rotate-left"
                          }), VM && (0, Ab.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: Nb("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Ab.jsx)(jw.c, {
                        lobbyGroups: [dw, Pw],
                        onLobbyClick: bb => {
                          CM(bb)
                        },
                        keyPrefix: ew.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== IM && (0, Ab.jsx)(Sb, {
                eventName: IM
              })]
            }), sM && (0, Ab.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Ab.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Ab.jsxs)("div", {
                  className: Cb()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === aw.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === aw.showWorldsInsteadOfCustomLobbies && (0, Ab.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Ab.jsx)(ub.b, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Ab.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Ab.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Nb("game:worlds")]
                    })]
                  }), !1 === aw.showWorldsInsteadOfCustomLobbies && (0, Ab.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Ab.jsx)(ub.b, {
                      name: "joystick"
                    }), (0, Ab.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Ab.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Nb("homePage:customLobbies")]
                    })]
                  }), (0, Ab.jsx)(Ub.Y, {
                    onClick: () => {
                      MM("explore")
                    },
                    active: "explore" === wM,
                    children: Nb("general:explore")
                  }), (0, Ab.jsx)(Ub.Y, {
                    onClick: () => {
                      MM("favourite")
                    },
                    active: "favourite" === wM,
                    children: Nb("homePage:favouriteLobbies")
                  }), (0, Ab.jsx)(Ub.Y, {
                    onClick: () => {
                      MM("owned")
                    },
                    active: "owned" === wM,
                    children: Nb("homePage:ownedLobbies")
                  })]
                }), (0, Ab.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Ab.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Ab.jsx)(sw.b, {
                      label: "Create",
                      onClick: () => {
                        ww.NotificationProvider.showCustomPopup({
                          body: bb => (0, Ab.jsx)(Mw.CreateCustomLobby, {
                            gameNameWithVariation: ew.gameNameWithVariation,
                            close: bb
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === nw && (0, Ab.jsx)(sw.i, {}), !1 === nw && (0, Ab.jsx)(Xw, {
                      customLobbies: ow,
                      favouriteLobbies: kw,
                      toggleLikeLobby: EM,
                      showReport: db.featureFlags.useSocialFeatures && "owned" !== wM
                    })]
                  }), mM]
                })]
              })
            })]
          }), !sM && mM]
        })
      })
    }

    function Gw(bb) {
      let {
        variation: wb,
        isSelected: Mb,
        children: eb
      } = bb;
      const lb = Ow.b[wb],
        Ib = (0, pb.k)(wb, (0, pb.o)(lb)),
        Ob = (0, Hb.i)(Ib),
        Ub = (0, Vb.h)([(0, pb.g)(wb, (0, pb.b)(lb))]);
      return (0, Ab.jsxs)(Tb.LinkPreserveSearch, {
        to: (0, vb.v)(wb),
        replace: !0,
        className: Cb()("GameInformationVariation", gb.h, {
          SelectedGameInformationVariation: Mb
        }),
        onClick: bb => {
          if (!(0, bw.b)(bb)) return;
          const Mb = (0, sb.j)(wb);
          Lb.i.setItem(Mb, wb)
        },
        onMouseEnter: Ub.start,
        onMouseLeave: Ub.cancel,
        onFocus: Ub.start,
        onBlur: Ub.cancel,
        style: (0, gb.d)(Ob),
        children: [(0, Ab.jsx)(gb.b, {
          image: Ob
        }), eb]
      })
    }
  },
  7672: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => sb
    });
    var eb = Mb(64),
      Hb = Mb(1616),
      pb = Mb(1677),
      Vb = Mb(4883),
      gb = Mb(1179),
      lb = Mb(1468),
      Lb = Mb(1516),
      Ib = Mb(1475),
      Ob = Mb(1159),
      Ub = Mb.n(Ob),
      tb = Mb(7664),
      Cb = Mb(1364);

    function Eb(bb) {
      let {
        info: wb,
        className: Mb
      } = bb;
      const {
        statusText: eb,
        rowText: Hb
      } = (0, tb.d)();
      return (0, Cb.jsxs)("div", {
        className: Ub()("GameApprovalInfoDetails", Mb),
        children: [(0, Cb.jsxs)("div", {
          className: Ub()("GameApprovalInfoSummary", wb.overallPassed ? "Passed" : "Failed"),
          children: [(0, Cb.jsx)(Ib.b, {
            name: wb.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, Cb.jsx)("span", {
            children: eb(wb.status)
          })]
        }), wb.rows.length > 0 && (0, Cb.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: wb.rows.map((bb => {
            const {
              label: wb,
              value: Mb
            } = Hb(bb);
            return (0, Cb.jsxs)("div", {
              className: Ub()("GameApprovalInfoRow", bb.passed ? "Passed" : "Failed"),
              children: [(0, Cb.jsx)(Ib.b, {
                name: bb.passed ? "check" : "xmark"
              }), (0, Cb.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, Cb.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: wb
                }), null !== Mb && (0, Cb.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: Mb
                })]
              })]
            }, bb.kind)
          }))
        })]
      })
    }
    var Fb = Mb(1259),
      Bb = Mb(1504);

    function sb(bb) {
      Bb.NotificationProvider.showCustomPopup({
        body: () => (0, Cb.jsx)(mb, {
          ...bb
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function mb(bb) {
      let {
        schematicId: wb,
        canOverride: Mb,
        onApprovalChanged: Ob
      } = bb;
      const {
        t: Ub
      } = (0, Fb.C)(), {
        userContext: tb
      } = (0, gb.e)(), Bb = (0, Vb.d)(), [sb, mb] = (0, eb.useState)(null), [hb, zb] = (0, eb.useState)(null), [Xb, xb] = (0, eb.useState)(!1), jb = (0, eb.useCallback)((() => {
        zb(null), pb.e.getGameApprovalInfo(tb, wb).then((bb => {
          Bb.current && mb(bb)
        })).catch((bb => {
          console.error("Failed to get game approval info", bb), Bb.current && zb(Ub("studio:approvalLoadFailed"))
        }))
      }), [tb, wb, Bb, Ub]);
      (0, eb.useEffect)((() => {
        jb()
      }), [jb]);
      const Kb = bb => {
        Xb || (xb(!0), pb.e.setGameApproval(tb, wb, bb).then((() => {
          null === Ob || void 0 === Ob || Ob(), Bb.current && jb()
        })).catch((bb => {
          console.error("Failed to set game approval", bb)
        })).finally((() => {
          Bb.current && xb(!1)
        })))
      };
      return (0, Cb.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, Cb.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: Ub("studio:approvalTitle")
        }), !sb && !hb && (0, Cb.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, Cb.jsx)(lb.c, {})
        }), hb && (0, Cb.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: hb
        }), sb && (0, Cb.jsxs)(Cb.Fragment, {
          children: [(0, Cb.jsx)(Eb, {
            info: sb
          }), Mb && (0, Cb.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== sb.manualOverride && (0, Cb.jsx)(Lb.d, {
              tooltipInner: (0, Cb.jsx)("div", {
                children: Ub("studio:approvalApproveTooltip")
              }),
              children: (0, Cb.jsxs)(Hb.p, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Kb(!0)
                },
                disabled: Xb,
                children: [(0, Cb.jsx)(Ib.b, {
                  name: "check"
                }), " ", Ub("studio:approvalApprove")]
              })
            }), !1 !== sb.manualOverride && (0, Cb.jsx)(Lb.d, {
              tooltipInner: (0, Cb.jsx)("div", {
                children: Ub("studio:approvalDenyTooltip")
              }),
              children: (0, Cb.jsxs)(Hb.Q, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Kb(!1)
                },
                disabled: Xb,
                children: [(0, Cb.jsx)(Ib.b, {
                  name: "xmark"
                }), " ", Ub("studio:approvalDeny")]
              })
            }), null !== sb.manualOverride && (0, Cb.jsx)(Lb.d, {
              tooltipInner: (0, Cb.jsx)("div", {
                children: Ub("studio:approvalClearOverrideTooltip")
              }),
              children: (0, Cb.jsxs)(Hb.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Kb(null)
                },
                disabled: Xb,
                children: [(0, Cb.jsx)(Ib.b, {
                  name: "arrows-rotate"
                }), " ", Ub("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  7664: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      d: () => Vb
    });
    var eb = Mb(382),
      Hb = Mb(1259);
    const pb = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function Vb() {
      const {
        t: bb,
        selectedLanguage: wb
      } = (0, Hb.C)();
      return {
        statusText: wb => bb(pb[wb]),
        rowText: Mb => {
          const pb = (bb, Mb) => (0, eb.ib)((0, Hb.l)(wb.code, bb), 0, Mb),
            Vb = (wb, Mb) => null === Mb ? wb : bb("studio:approvalWithMinDays", {
              value: wb,
              days: Mb
            });
          switch (Mb.kind) {
            case "ownerAccountAge": {
              const wb = Mb.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: bb("studio:approvalAccountAgeLabel"),
                value: Vb(bb(wb, {
                  age: pb(wb, Mb.accountAgeMs)
                }), Mb.minAccountAgeDays)
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: bb("studio:approvalSinceUnbannedLabel"), value: Vb(pb("studio:approvalSinceUnbannedLabel", Mb.sinceMs), Mb.minDays)
              };
            case "reportHold": {
              const {
                detail: wb
              } = Mb;
              if (null === wb) return {
                label: bb("studio:approvalUnderInvestigation"),
                value: null
              };
              const eb = wb.weightedReporters.toFixed(1),
                Hb = wb.threshold.toFixed(1),
                Vb = bb("studio:approvalReportHoldLabel", {
                  hours: wb.windowHours
                });
              if (null === wb.heldUntil) return {
                label: Vb,
                value: bb("studio:approvalReportHoldValue", {
                  weightedReporters: eb,
                  threshold: Hb
                })
              };
              const gb = "studio:approvalReportHoldValueHeld";
              return {
                label: Vb,
                value: bb(gb, {
                  weightedReporters: eb,
                  threshold: Hb,
                  time: pb(gb, wb.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function gb(bb) {
      return null === bb.manualOverride && bb.rows.some((bb => "reportHold" === bb.kind && !bb.passed))
    }
  },
  35377: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb
    });
    var eb = Mb(64),
      Hb = Mb(4835);

    function pb() {
      const [bb, wb] = (0, eb.useState)(!1);
      return (0, eb.useLayoutEffect)((() => {
        let bb = !0;
        return (0, Hb.e)().then((() => {
          bb && wb(!0)
        })), () => {
          bb = !1
        }
      }), []), bb
    }
  },
  10273: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Fb,
      d: () => Bb
    });
    var eb = Mb(192),
      Hb = Mb(225),
      pb = Mb(1126),
      Vb = Mb(1136),
      gb = Mb(1301),
      lb = Mb(2142),
      Lb = Mb(3394),
      Ib = Mb(1677),
      Ob = Mb(1504),
      Ub = Mb(1186),
      tb = Mb(10278),
      Cb = Mb(1686),
      Eb = Mb(1713);

    function Fb(bb, wb) {
      const Mb = !0 === wb.debugResult.gameRefused,
        pb = Mb || wb.code === eb.i.REQUEST_TO_MATCHMAKING ? (0, tb.f)(wb.message) : null;
      if (null !== pb) return zb(bb, bb((0, tb.j)(pb)), bb(tb.g[pb])), !0;
      if (Mb) return async function(bb) {
        const {
          gameNameWithVariation: wb,
          lobbyName: Mb,
          shownLobbyName: eb
        } = lb.gameBridge.latest("connectedGame"), Hb = "classic" === wb && (0, gb.y)(Mb) ? eb : await (0, Lb.d)(bb, wb, Mb);
        return "" !== Hb ? bb("general:cantJoinGame", {
          game: Hb
        }) : bb("general:cantJoinThisGame")
      }(bb).then((Mb => {
        zb(bb, Mb, wb.message)
      })), !0;
      const {
        joinFailure: Vb
      } = wb.debugResult, Ib = "refused" === (null === Vb || void 0 === Vb ? void 0 : Vb.at) ? Vb.code : null;
      return Ib === Hb.b.schematicNotPublished.code ? (async function(bb, wb) {
        const Mb = sb(),
          eb = await hb(Mb);
        if (null === eb || eb.gamePublished) return void zb(bb, bb("general:cantJoinThisGame"), wb);
        await mb(bb, "rocket-launch", bb("studio:gameNotPublishedTitle", {
          game: eb.name
        }), bb("studio:publishInStudio"), Mb)
      }(bb, wb.message), !0) : (Ib === Hb.b.schematicBanned.code || Ib === Hb.b.customGameTakenDown.code) && (hb(sb()).then((wb => {
        Bb(bb, wb)
      })), !0)
    }

    function Bb(bb, wb) {
      !0 !== (null === wb || void 0 === wb ? void 0 : wb.takenDown) ? zb(bb, bb("general:cantJoinThisGame"), Hb.b.customGameTakenDown.text) : mb(bb, "lock", bb("studio:gameTakenDownTitle", {
        game: wb.name
      }), bb("studio:viewInStudio"), wb.schematicId)
    }

    function sb() {
      return (0, pb.o)(lb.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function mb(bb, wb, Mb, eb, Hb) {
      !0 === await Ob.NotificationProvider.showPromptPopup({
        icon: wb,
        title: Mb,
        confirmText: eb,
        cancelText: bb("general:cancel")
      }).getResult() && (0, Cb.navigatePreserveSearch)((0, Eb.p)((0, Vb.c)(Hb), "manage"))
    }
    async function hb(bb) {
      try {
        return await Ib.e.getGame(await Ub.userContextManager.getCurrentUserContext(), bb, !0)
      } catch (wb) {
        return (0, Ib.i)(wb) || console.error(`Failed to get game ${bb}`, wb), null
      }
    }

    function zb(bb, wb, Mb) {
      Ob.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: wb,
        subtitle: Mb,
        confirmText: bb("general:ok"),
        cancelText: ""
      })
    }
  },
  10298: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb
    });
    var eb = Mb(1455),
      Hb = Mb(1301),
      pb = Mb(661);

    function Vb(bb) {
      return bb = function(bb, wb) {
        var Mb;
        const eb = new URLSearchParams(wb),
          Hb = eb.get("lobby"),
          pb = eb.get("vm"),
          Vb = null !== (Mb = Hb) && void 0 !== Mb ? Mb : bb.lobbyName,
          gb = null !== pb && void 0 !== pb ? pb : bb.directJoinVmUrl;
        if (Vb === bb.lobbyName && gb === bb.directJoinVmUrl) return bb;
        return {
          ...bb,
          lobbyName: Vb,
          directJoinVmUrl: gb
        }
      }(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), bb = function(bb) {
        if ((0, pb.K)(bb.directJoinVmUrl)) return bb;
        const wb = (0, Hb.X)(bb.directJoinVmUrl);
        null === wb && (bb.directJoinVmUrl = void 0);
        return bb
      }(bb = function(bb) {
        if ((0, pb.K)(bb.gameNameWithVariation)) return bb;
        return bb.gameNameWithVariation = (0, eb.g)(bb.gameNameWithVariation), bb
      }(bb))
    }
  },
  10278: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      e: () => Vb,
      f: () => gb,
      g: () => Lb,
      j: () => lb
    });
    var eb = Mb(225),
      Hb = Mb(5472);

    function pb(bb) {
      return Vb(bb) === eb.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function Vb(bb) {
      return "object" === typeof bb && null !== bb ? bb.code : void 0
    }

    function gb(bb) {
      var wb;
      return null !== (wb = Object.keys(Hb.c).find((wb => Hb.c[wb] === bb))) && void 0 !== wb ? wb : null
    }

    function lb(bb) {
      return "notWhitelisted" === bb ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Lb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37587: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      f: () => eb
    });
    const eb = "skyblockSkills",
      Hb = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);