export const id = 107;
export const ids = [107, 377];
export const modules = {
  35159: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Mb
    });
    var Uy = Wy(248),
      hy = Wy(2802),
      fy = Wy(2837),
      Zy = Wy(2833),
      cb = Wy(2829),
      Py = Wy(1042),
      oy = Wy(33),
      By = Wy(1496),
      Ky = Wy(1217),
      ey = Wy(1273),
      qb = Wy(898),
      sy = Wy.n(qb),
      Sy = Wy(1486),
      Ey = Wy(55),
      ly = Wy(70),
      mb = Wy(1949),
      Cy = Wy(1185),
      Ty = Wy(1436),
      Vy = Wy(980),
      Jy = Wy(2717),
      gb = Wy(3750),
      Gy = Wy(2785),
      Oy = Wy(2793),
      Ry = Wy(1546),
      vb = Wy(2795),
      ib = Wy(1504),
      My = Wy(1339),
      Yy = Wy(1788),
      Xy = Wy(1194),
      ny = Wy(2078),
      uy = Wy(4222),
      rb = Wy(952);
    const Hy = 15e3,
      ab = 2500;

    function Fy(yb) {
      var bb;
      let {
        eventName: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Py.D)(), hy = ib.i[Wy], [fy, Zy] = (0, Ey.useState)((() => Date.now() >= hy.endsAt.getTime())), [cb, oy] = (0, Ey.useState)("overall"), By = function(yb, bb) {
        const {
          userContext: Wy,
          isUserContextUpdating: Uy
        } = (0, Vy.c)(), hy = `${yb}:${bb}`, [fy, Zy] = (0, Ey.useState)({
          requestKey: hy,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, Ey.useEffect)((() => {
          if (Uy) return;
          let fy, cb = !1;
          const Py = async () => {
            if ("visible" === document.visibilityState) try {
              const Uy = await My.c.getGameEventLeaderboard(Wy, {
                event: yb,
                scope: bb
              });
              cb || Zy({
                requestKey: hy,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Uy
                }
              })
            } catch {
              cb || Zy((yb => yb.requestKey === hy && "loaded" === yb.leaderboard.status ? yb : {
                requestKey: hy,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            cb || (fy = setTimeout(Py, Hy))
          };
          return Py(), () => {
            cb = !0, clearTimeout(fy)
          }
        }), [yb, bb, hy, Wy, Uy]), fy.requestKey === hy ? fy.leaderboard : {
          status: "loading"
        }
      }(Wy, cb), Ky = function(yb) {
        const bb = (0, Ey.useRef)(null),
          Wy = (0, Ey.useRef)(0),
          Uy = (0, Ey.useRef)(),
          [hy, fy] = (0, Ey.useState)({});
        return (0, Ey.useEffect)((() => {
          const hy = null === yb || void 0 === yb ? void 0 : yb.entries;
          if (!hy) return;
          const Zy = new Map(hy.map((yb => [yb.player.name, yb.value]))),
            cb = bb.current;
          if (bb.current = Zy, null === cb) return;
          const Py = {};
          for (const [yb, bb] of Zy) {
            const Uy = cb.get(yb);
            void 0 !== Uy && bb > Uy && (Py[yb] = {
              amount: bb - Uy,
              key: Wy.current++
            })
          }
          0 !== Object.keys(Py).length && (fy(Py), clearTimeout(Uy.current), Uy.current = setTimeout((() => {
            fy({})
          }), ab))
        }), [yb]), (0, Ey.useEffect)((() => () => {
          clearTimeout(Uy.current)
        }), []), hy
      }("loaded" === By.status ? By.leaderboard : null), ey = function(yb) {
        const [bb, Wy] = (0, Ey.useState)(null), Uy = "loaded" === yb.status ? yb.leaderboard.goalProgress : void 0;
        return (0, Ey.useEffect)((() => {
          Uy && Wy(Uy)
        }), [Uy]), bb
      }(By), qb = Yy.f[`profileEffect_${hy.prizePack}`];
      if (fy) return null;
      const Sy = "loaded" === By.status ? By.leaderboard : null,
        ly = null !== (bb = null === Sy || void 0 === Sy ? void 0 : Sy.entries) && void 0 !== bb ? bb : null,
        mb = null !== Sy && void 0 !== Sy && Sy.own && null !== ly && !ly.some((yb => yb.isOwn)) ? Sy.own : null;
      return (0, rb.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, rb.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, rb.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, rb.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, rb.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, rb.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Uy("gameEvents:live")]
              }), (0, rb.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Uy("gameEvents:endsIn"), (0, rb.jsx)(Gy.d, {
                  toTime: hy.endsAt,
                  onReachEndOfCountdown: () => {
                    Zy(!0)
                  }
                })]
              })]
            }), (0, rb.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Uy(hy.titleKey)
            }), (0, rb.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, rb.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [qb && (0, rb.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, rb.jsx)(qb, {})
                }), (0, rb.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, rb.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Uy("gameEvents:prize")
                  }), (0, rb.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Uy(hy.prizeNameKey)
                  })]
                })]
              }), (0, rb.jsx)(py, {
                event: hy,
                progress: ey
              })]
            })]
          }), (0, rb.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, rb.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, rb.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Uy(hy.leaderboard.titleKey)
              }), (0, rb.jsx)(uy.c, {
                ariaLabel: Uy("gameEvents:leaderboardScope"),
                options: ib.e.map((yb => ({
                  value: yb,
                  label: Uy(`gameEvents:${yb}Scope`)
                }))),
                value: cb,
                onChange: oy
              })]
            }), "loading" === By.status && (0, rb.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, rb.jsx)(Xy.e, {})
            }), ("unavailable" === By.status || "loaded" === By.status && null === ly) && (0, rb.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Uy("gameEvents:leaderboardUnavailable")
            }), null !== ly && 0 === ly.length && (0, rb.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Uy("friends" === cb ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== ly && ly.length > 0 && (0, rb.jsx)("ol", {
              className: "GameEventPanelRows",
              children: ly.map((yb => {
                const bb = Ky[yb.player.name];
                return (0, rb.jsxs)("li", {
                  className: sy()("GameEventPanelRow", {
                    GameEventPanelRowOwn: yb.isOwn,
                    GameEventPanelRowTop: yb.rank <= 3
                  }),
                  children: [(0, rb.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", yb.rank]
                  }), (0, rb.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, rb.jsx)(ny.d, {
                      playerSocialPreview: {
                        ...yb.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== bb && (0, rb.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", bb.amount.toLocaleString()]
                  }, bb.key), (0, rb.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: yb.value.toLocaleString()
                  })]
                }, yb.player.name)
              }))
            }), mb && (0, rb.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, rb.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", mb.rank.toLocaleString()]
              }), (0, rb.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Uy("gameEvents:yourPlace")
              }), (0, rb.jsx)("span", {
                className: "GameEventPanelScore",
                children: mb.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function py(yb) {
      let {
        event: bb,
        progress: Wy
      } = yb;
      const {
        t: Uy
      } = (0, Py.D)(), hy = null !== Wy && bb.prizeGoals.some(((yb, bb) => Wy[bb] >= yb.target));
      return (0, rb.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, rb.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Uy(hy ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, rb.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: bb.prizeGoals.map(((yb, bb) => {
            const hy = null === Wy ? null : Math.min(Wy[bb], yb.target);
            return (0, rb.jsxs)(Ey.Fragment, {
              children: [bb > 0 && (0, rb.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Uy("gameEvents:goalsOr")
              }), (0, rb.jsxs)("div", {
                className: sy()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: hy === yb.target
                }),
                children: [(0, rb.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Uy(yb.labelKey)
                }), (0, rb.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, rb.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== hy && void 0 !== hy ? hy : 0) / yb.target * 100 + "%"
                    }
                  }), null !== hy && (0, rb.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [hy.toLocaleString(), " / ", yb.target.toLocaleString()]
                  })]
                })]
              })]
            }, yb.board)
          }))
        })]
      })
    }
    var Ly = Wy(1387),
      Qy = Wy(1428),
      jb = Wy(886),
      Dy = Wy(586),
      tb = Wy(2781);

    function wy(yb) {
      let {
        gameNameWithVariation: bb
      } = yb;
      const Wy = (0, Ly.w)(bb),
        [Uy, hy] = (0, Ey.useState)(null);
      if ((0, Ey.useEffect)((() => {
          if (!Wy) return;
          let yb = !0;
          return (0, Qy.j)(Wy).then((bb => {
            yb && hy(bb)
          })).catch((yb => {
            console.error(`Failed to load the page copy for ${Wy.name}`, yb)
          })), () => {
            yb = !1
          }
        }), [Wy]), !Wy || !Uy || Uy.name !== Wy.name) return null;
      const fy = (0, Qy.h)(Uy),
        Zy = new Set((0, jb.d)((0, Dy.h)()).map((yb => (0, Ly.s)(yb)))),
        cb = Uy.similarGames.filter((yb => Zy.has((0, Ly.s)(yb))));
      return (0, rb.jsx)("div", {
        className: "GamePageContent",
        children: (0, rb.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, rb.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, rb.jsx)("h2", {
              children: fy.whatIs
            }), Uy.whatIs.map((yb => (0, rb.jsx)("p", {
              children: yb
            }, yb)))]
          }), (0, rb.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, rb.jsx)("h2", {
              children: fy.howToPlay
            }), Uy.howToPlay.map((yb => (0, rb.jsx)("p", {
              children: yb
            }, yb)))]
          }), (0, rb.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, rb.jsx)("h2", {
              children: fy.features
            }), (0, rb.jsx)("ul", {
              children: Uy.features.map((yb => (0, rb.jsx)("li", {
                children: yb
              }, yb)))
            })]
          }), (0, rb.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, rb.jsx)("h2", {
              children: fy.tips
            }), (0, rb.jsx)("ul", {
              children: Uy.tips.map((yb => (0, rb.jsx)("li", {
                children: yb
              }, yb)))
            })]
          }), (0, rb.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, rb.jsx)("h2", {
              children: fy.faq
            }), Uy.faq.map((yb => {
              let {
                question: bb,
                answer: Wy
              } = yb;
              return (0, rb.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, rb.jsx)("h3", {
                  children: bb
                }), (0, rb.jsx)("p", {
                  children: Wy
                })]
              }, bb)
            }))]
          }), cb.length > 0 && (0, rb.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, rb.jsx)("h2", {
              children: fy.similarGames
            }), (0, rb.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: cb.map((yb => (0, rb.jsx)("li", {
                children: (0, rb.jsx)(tb.f, {
                  source: {
                    type: "game",
                    gameNameWithVariation: yb
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, yb)))
            })]
          })]
        })
      })
    }
    var kb = Wy(910),
      Ny = Wy(94),
      zb = Wy(987),
      Iy = Wy(2869),
      xb = Wy(1472),
      Ay = Wy(1370),
      dy = Wy(1356),
      yW = Wy(1434),
      bW = Wy(1287),
      Wb = Wy(1207),
      Ub = Wy(35161),
      hb = Wy(1093),
      fb = Wy(865),
      Zb = Wy(258),
      cW = Wy(880),
      Pb = Wy(1383),
      ob = Wy(8043),
      Bb = Wy(19),
      Kb = Wy(2042),
      eb = Wy(615),
      qW = Wy(1080),
      sb = Wy(5756);

    function Sb(yb) {
      let {
        preview: bb,
        isBroken: Wy
      } = yb;
      const Uy = null === bb ? null : (0, fy.c)(bb, "small"),
        Zy = (0, hy.e)(null !== Uy && void 0 !== Uy ? Uy : fy.p);
      return null === bb ? (0, rb.jsx)("div", {
        className: sy()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: Wy
        }),
        children: (0, rb.jsx)(kb.e, {
          name: Wy ? "triangle-exclamation" : "star"
        })
      }) : (0, rb.jsx)("div", {
        className: sy()("FeaturedGamesPopupSlotThumbnail", cb.i),
        style: (0, cb.h)(Zy),
        role: "img",
        "aria-label": bb.name,
        children: (0, rb.jsx)(cb.e, {
          image: Zy
        })
      })
    }

    function Eb(yb) {
      let {
        schematicId: bb,
        gameName: Wy
      } = yb;
      const {
        userContext: hy
      } = (0, Vy.c)(), fy = (0, Oy.d)(), [Zy, cb] = (0, Ey.useState)(null), [Py, oy] = (0, Ey.useState)(null), [By, Ky] = (0, Ey.useState)(!1), qb = (0, Ey.useCallback)((() => {
        oy(null), My.c.getFeaturedGames(hy).then((yb => {
          fy.current && cb(yb.slots)
        })).catch((yb => {
          console.error("Failed to get featured games", yb), fy.current && oy("Failed to load featured games")
        }))
      }), [hy, fy]);
      (0, Ey.useEffect)((() => {
        qb()
      }), [qb]);
      const sy = (yb, bb) => {
        By || (Ky(!0), My.c.setFeaturedGame(hy, yb, bb).then((() => {
          fy.current && qb()
        })).catch((yb => {
          console.error("Failed to set featured game", yb), fy.current && oy("Failed to update the featured slot")
        })).finally((() => {
          fy.current && Ky(!1)
        })))
      };
      return (0, rb.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, rb.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !Zy && !Py && (0, rb.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, rb.jsx)(Xy.e, {})
        }), Py && (0, rb.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: Py
        }), Zy && (0, rb.jsxs)(rb.Fragment, {
          children: [(0, rb.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: Zy.map((yb => {
              const Wy = yb.schematicId === bb,
                hy = null === yb.schematicId,
                {
                  categoryGroup: fy
                } = Uy.M[yb.slotId];
              return (0, rb.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, rb.jsx)(Sb, {
                  preview: yb.preview,
                  isBroken: !hy
                }), (0, rb.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, rb.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Uy.nb)(fy), " \xb7 position", " ", (0, Uy.O)(yb.slotId, Uy.Ob) + 1, " of", " ", (0, Uy.Nb)(fy, Uy.Ob)]
                  }), hy && (0, rb.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !hy && null !== yb.preview && (0, rb.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: yb.preview.name
                  }), !hy && null === yb.preview && (0, rb.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, rb.jsx)(kb.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, rb.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [hy && (0, rb.jsxs)(ey.l, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      sy(yb.slotId, bb)
                    },
                    disabled: By,
                    children: [(0, rb.jsx)(kb.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !hy && !Wy && (0, rb.jsxs)(ey.M, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      sy(yb.slotId, bb)
                    },
                    disabled: By,
                    children: [(0, rb.jsx)(kb.e, {
                      name: "star"
                    }), " Replace"]
                  }), !hy && (0, rb.jsxs)(ey.C, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      sy(yb.slotId, null)
                    },
                    disabled: By,
                    children: [(0, rb.jsx)(kb.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, yb.slotId)
            }))
          }), (0, rb.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var lb = Wy(3875),
      mW = Wy(3793),
      Cb = Wy(3801),
      Tb = Wy(3820),
      Vb = Wy(3767),
      Jb = Wy(2861),
      gW = Wy(180);
    const Gb = {
      skyblock: [Wy(35195).d]
    };
    var Ob = Wy(547);
    const Rb = {
      listedVariations: null,
      backgroundImage: fy.p,
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

    function vW(yb, bb) {
      const Wy = eb.d[yb.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, fy.c)(yb, "large"),
        badges: [],
        category: yb.gameCategory,
        title: void 0 !== (null === Wy || void 0 === Wy ? void 0 : Wy.title) ? bb(Wy.title) : yb.name,
        variationTitle: null,
        description: void 0 !== (null === Wy || void 0 === Wy ? void 0 : Wy.description) ? bb(Wy.description) : yb.description,
        ownerSocialPreviewWithoutLocation: "owner" in yb ? yb.owner : null,
        ccu: yb.ccu,
        favourites: yb.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in yb ? yb.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function iW(yb) {
      var bb, Wy, Uy;
      return null !== (bb = null !== (Wy = (0, gW.l)() ? function(yb) {
        for (const [bb, Wy] of Object.entries(Gb)) {
          const Uy = [bb, ...Wy.map((yb => (0, Zb.Pb)(bb, yb)))];
          if (Uy.includes(yb)) return Uy
        }
        return null
      }(yb) : null) && void 0 !== Wy ? Wy : null === (Uy = eb.b[yb]) || void 0 === Uy ? void 0 : Uy.listedVariations) && void 0 !== bb ? bb : null
    }

    function Mb() {
      const {
        gameNameWithVariation: yb
      } = (0, Ay.F)();
      if ((0, Ey.useEffect)(Jb.m, []), yb && (0, hb.o)(yb)) return (0, rb.jsx)(Yb, {
        urlId: yb
      }, yb);
      const bb = yb && (0, fb.p)(yb) ? yb : "firstParty";
      return (0, rb.jsx)(Xb, {}, bb)
    }

    function Yb(yb) {
      let {
        urlId: bb
      } = yb;
      const {
        userContext: Wy,
        isUserContextUpdating: Uy
      } = (0, Vy.c)(), hy = (0, Ey.useMemo)((() => (0, xb.l)(bb)), [bb]);
      (0, Ey.useMemo)((() => {
        if (null === hy) return;
        const yb = zb.userContextManager.peekCurrentUserContext();
        (null !== yb ? My.c.getGame(yb, hy.schematicId) : zb.userContextManager.getCurrentUserContext().then((yb => My.c.getGame(yb, hy.schematicId)))).catch((yb => {
          console.error(`Failed to get the custom game ${hy.schematicId}`, yb), (0, xb.i)(bb)
        }))
      }), [hy, bb]);
      const [fy, Zy] = (0, Ey.useState)(null), [cb, Py] = (0, Ey.useState)(!1);
      (0, Ey.useLayoutEffect)((() => {
        let yb = !0;
        return (0, Iy.d)().then((() => {
          yb && Py(!0)
        })), () => {
          yb = !1
        }
      }), []), (0, Ey.useEffect)((() => {
        if (null !== hy || Uy) return;
        let yb = !0;
        return My.c.getGameByUrlId(Wy, bb).then((Wy => {
          yb && Zy({
            urlId: bb,
            game: Wy
          })
        })).catch((Wy => {
          console.error(`Failed to find the custom game with urlId ${bb}`, Wy), yb && (0, dy.navigateToHomePage)()
        })), () => {
          yb = !1
        }
      }), [bb, hy, Uy, Wy]);
      const oy = null !== hy && void 0 !== hy ? hy : (null === fy || void 0 === fy ? void 0 : fy.urlId) === bb ? fy.game : null;
      return null === oy ? (0, rb.jsx)(Xy.e, {}) : cb ? (0, rb.jsx)(Xb, {
        gameNameWithVariation: (0, fb.A)(oy.schematicId),
        knownCustomGame: oy
      }, oy.schematicId) : null
    }

    function Xb(yb) {
      var bb, Wy, Zy, qb, ib, Yy, Xy, uy;
      let {
        gameNameWithVariation: Hy,
        knownCustomGame: ab = null
      } = yb;
      const {
        t: py
      } = (0, Py.D)();
      (0, Kb.h)();
      const Qy = (0, Kb.k)(),
        {
          userContext: jb,
          isUserContextUpdating: tb
        } = (0, Vy.c)(),
        zb = (0, Vb.g)(),
        Iy = (0, dy.useNavigatePreserveSearch)(),
        xb = (0, Ay.F)(),
        bW = (0, Ey.useMemo)((() => Hy ? {
          gameNameWithVariation: Hy
        } : xb), [Hy, xb]),
        hb = (0, ob.e)(bW),
        Sb = (0, Ey.useMemo)((() => {
          const yb = function(yb) {
            var bb, Wy;
            const Uy = iW(yb);
            if (!Uy || 0 === Uy.length || Uy.includes(yb)) return yb;
            const hy = oy.e.getItem((0, mb.i)(yb));
            if (hy && Uy.includes(hy)) return hy;
            return null !== (bb = null === (Wy = eb.b[yb]) || void 0 === Wy ? void 0 : Wy.defaultListedVariation) && void 0 !== bb ? bb : Uy[0]
          }(hb.gameNameWithVariation);
          return yb === hb.gameNameWithVariation ? hb : {
            ...hb,
            gameNameWithVariation: yb
          }
        }), [hb]);
      (0, Ey.useEffect)((() => {
        const yb = hb.gameNameWithVariation;
        Sb.gameNameWithVariation !== yb && yb !== (0, Zb.Rb)(yb) && Iy((0, Ly.t)(Sb.gameNameWithVariation), {
          replace: !0
        })
      }), [Sb.gameNameWithVariation, hb.gameNameWithVariation, Iy]);
      const Jb = (0, Oy.d)(),
        [gW, Gb] = (0, Ey.useState)(""),
        Mb = Ey.useRef(null),
        [Yb, Xb] = (0, Ey.useState)(),
        ub = (0, fb.p)(Sb.gameNameWithVariation),
        rW = (0, Ey.useMemo)((() => ub ? null : function(yb, bb, Wy) {
          var Uy, hy;
          const Zy = eb.b[yb];
          return (0, Ob.D)(Zy) ? null : {
            listedVariations: iW(yb),
            backgroundImage: (0, fy.j)(yb, (0, fy.b)(Zy)),
            badges: (0, By.filterBadges)(Zy.badges),
            category: Zy.type,
            title: Wy(Zy.title),
            variationTitle: Zy.variationTitle ? Wy(Zy.variationTitle) : null,
            description: Wy(Zy.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== bb ? null !== (Uy = bb[yb]) && void 0 !== Uy ? Uy : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: Zy.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: Zy.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (hy = Zy.canCreateCustomLobbies) || void 0 === hy || hy,
            countdownInformation: (0, mb.f)(yb)
          }
        }(Sb.gameNameWithVariation, Qy, py)), [ub, Sb.gameNameWithVariation, Qy, py]),
        [Hb, aW] = (0, Ey.useState)(!1),
        [Fb, pb] = (0, Ey.useState)((() => ab ? vW(ab, py) : Rb)),
        Lb = null !== rW && void 0 !== rW ? rW : Fb,
        [Qb] = (0, Ey.useState)(Lb === Rb),
        jW = (0, hy.e)(Lb.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: Db,
          recentlyPlayedCustomLobbies: tW
        } = (0, Ey.useMemo)((() => function(yb, bb, Wy, Uy) {
          var hy;
          const fy = yb => {
              const Wy = (0, fb.v)(yb),
                Uy = bb.find((bb => "custom" === bb.type ? bb.schematicId === Wy : bb.gameNameWithVariation === yb));
              return Uy ? [...Uy.recentLobbies] : []
            },
            Zy = (0, By.getRecentGameNameWithVariationLobbiesKey)(yb),
            cb = null !== (hy = oy.e.getItem(Zy)) && void 0 !== hy ? hy : [],
            Py = [...fy(yb), ...cb],
            Ky = [];
          for (const oy of Py)(0, qW.P)(oy) && !Ky.includes(oy) && Ky.push(oy);
          let ey = Py;
          if (Wy) {
            const yb = fy("classic_worlds"),
              bb = Py.filter((bb => !yb.includes(bb)));
            ey = [...yb, ...bb]
          }
          const qb = [],
            sy = !1 === Uy ? [] : ey;
          for (const oy of sy)(0, qW.P)(oy) || qb.includes(oy) || qb.push(oy);
          return {
            recentlyPlayedPublicLobbies: Ky,
            recentlyPlayedCustomLobbies: qb
          }
        }(Sb.gameNameWithVariation, zb, Lb.showWorldsInsteadOfCustomLobbies, Lb.canCreateCustomLobbies)), [Sb.gameNameWithVariation, zb, Lb.showWorldsInsteadOfCustomLobbies, Lb.canCreateCustomLobbies]),
        [wb, kW] = (0, Ey.useState)(!0),
        [Nb, zW] = (0, Ey.useState)([]),
        [Ib, xW] = (0, Ey.useState)(null),
        [Ab, db] = (0, Ey.useState)("explore"),
        yU = (0, Ey.useRef)(!1),
        bU = (0, Ey.useCallback)((yb => {
          (0, ly.unstable_batchedUpdates)((() => {
            Xb(yb), pb((bb => ({
              ...vW(yb, py),
              isFavourite: bb.isFavourite
            })))
          }))
        }), [py]);
      (0, Ey.useEffect)((() => {
        null === Bb.d.get("gameEntrySource") && (0, Bb.g)("gameInformationPageDirect")
      }), []);
      const WW = (0, Ey.useRef)(null);
      (0, Ey.useEffect)((() => {
        const yb = yb => {
            WW.current = yb.target instanceof Element ? yb.target.closest("a, button") : null
          },
          bb = yb => {
            "Tab" === yb.key && (WW.current = null)
          };
        return document.addEventListener("pointerdown", yb, !0), document.addEventListener("keydown", bb, !0), () => {
          document.removeEventListener("pointerdown", yb, !0), document.removeEventListener("keydown", bb, !0)
        }
      }), []), (0, Jy.c)("Enter", (yb => {
        const bb = yb.target instanceof Element ? yb.target : null;
        if (yb.defaultPrevented || null !== bb && void 0 !== bb && bb.closest("input, textarea, select")) return;
        const Wy = null === bb || void 0 === bb ? void 0 : bb.closest("a, button");
        Wy && Wy !== WW.current || (yb.preventDefault(), KW())
      })), (0, gb.e)(dy.navigateToHomePage);
      const UW = !Dy.j && (Db.length > 0 || tW.length > 0),
        hW = !Lb.useRejoinLastLobbyButton || 0 === Db.length,
        fW = ub && null === Lb.ownerSocialPreviewWithoutLocation,
        ZW = jb.getPlayerName() === (null === Yb || void 0 === Yb || null === (bb = Yb.owner) || void 0 === bb ? void 0 : bb.name),
        cU = null !== (Wy = null === (Zy = Lb.badges.find((yb => "event" === yb.type))) || void 0 === Zy ? void 0 : Zy.event) && void 0 !== Wy ? Wy : null,
        PW = hW ? ey.i : ey.f,
        oW = (0, rb.jsx)(Ky.f, {
          tooltipInner: (0, rb.jsx)("div", {
            children: py("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, rb.jsx)(PW, {
            className: "GameInformationButton",
            padDefaultFocus: hW,
            showPress: !0,
            onClick: () => {
              KW()
            },
            children: (0, rb.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [hW && (0, rb.jsxs)(rb.Fragment, {
                children: [(0, rb.jsx)(kb.e, {
                  name: "play"
                }), " "]
              }), py("homePage:quickPlay")]
            })
          })
        });
      (0, Ey.useEffect)((() => {
        if (!ub || tb) return;
        let yb = !0;
        const bb = (0, fb.v)(Sb.gameNameWithVariation);
        return My.c.getGame(jb, bb).then((bb => {
          yb && bU(bb)
        })).catch((bb => {
          console.error("Failed to get Custom Game information", bb), yb && (0, dy.navigateToHomePage)()
        })), My.c.getFavouriteGames(jb).then((Wy => {
          yb && pb((yb => ({
            ...yb,
            isFavourite: Wy.includes(bb)
          })))
        })).catch((bb => {
          console.error("Failed to get favourite games", bb), yb && aW(!0)
        })), () => {
          yb = !1
        }
      }), [ub, tb, Sb.gameNameWithVariation, bU, jb]);
      const BW = !ub && null === rW;

      function KW(yb) {
        Iy((0, Cy.b)(Sb.gameNameWithVariation, yb))
      }(0, Ey.useEffect)((() => {
        BW && (0, dy.navigateToHomePage)()
      }), [BW]), (0, Ey.useEffect)((() => {
        !1 !== Lb.canCreateCustomLobbies && null !== Lb.showWorldsInsteadOfCustomLobbies && (Dy.j || !1 !== tb || (kW(!0), My.c.getFavouriteLobbies(jb).then((yb => {
          xW(yb)
        })), My.c.getOpenCustomLobbies(jb, {
          gameNameWithVariation: Lb.showWorldsInsteadOfCustomLobbies ? "classic" : Sb.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === Ab,
          onlyFavouriteLobbies: "favourite" === Ab
        }).then((yb => {
          Jb.current && zW(yb)
        })).catch((yb => {})).finally((() => {
          Jb.current && kW(!1)
        }))))
      }), [tb, Sb, Ab, Lb.showWorldsInsteadOfCustomLobbies, Lb.canCreateCustomLobbies, Jb, jb]);
      const eW = (0, Ey.useCallback)((async yb => {
          try {
            if (!Ib) return;
            Ib.includes(yb) ? (My.c.unfavouriteLobby(jb, yb), xW(Ib.filter((bb => bb !== yb)))) : (My.c.favouriteLobby(jb, yb).catch((yb => {
              console.error("Failed to favourite lobby", yb)
            })), xW([...Ib, yb]))
          } catch (bb) {
            console.error("Failed to like lobby", bb)
          }
        }), [jb, Ib]),
        qU = (null === Yb || void 0 === Yb ? void 0 : Yb.schematicId) === (0, fb.v)(hb.gameNameWithVariation) ? Yb : null,
        sW = qU && (0, Ly.z)(hb.gameNameWithVariation, (yb => py(yb)), qU);
      (0, yW.d)(qU && (0, Ly.t)(hb.gameNameWithVariation, qU));
      const SW = !Dy.j && Ny.featureFlags.canUseCustomLobbies && !0 === Lb.canCreateCustomLobbies,
        EW = (0, rb.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, rb.jsx)(wy, {
            gameNameWithVariation: Sb.gameNameWithVariation
          })
        });
      return (0, rb.jsx)(rb.Fragment, {
        children: (0, rb.jsxs)("article", {
          className: sy()("GameInformation", {
            GameInformationFadeIn: Qb,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (qb = Lb.countdownInformation) || void 0 === qb ? void 0 : qb.type)
          }),
          children: [sW && (0, rb.jsx)(Ty.c, {
            meta: sW
          }), (0, rb.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, rb.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, rb.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, rb.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, rb.jsx)("div", {
                  className: sy()("GameInformationTopBackgroundImage", cb.i),
                  style: (0, cb.h)(jW),
                  children: (0, rb.jsx)(cb.e, {
                    image: jW
                  })
                })]
              }), (0, rb.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, rb.jsx)(lb.e, {}), (0, rb.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, rb.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, rb.jsxs)("div", {
                      className: sy()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: fW
                      }),
                      children: [Lb.badges.map((yb => (0, rb.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${yb.type}`,
                        children: (0, rb.jsx)(vb.d, {
                          badge: yb
                        })
                      }, yb.type))), ub && (0, rb.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, rb.jsx)(Ry.d, {
                          text: (0, Uy.fb)({
                            type: "playerCrafted"
                          })
                        })
                      }), Lb.category && (0, rb.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, rb.jsx)(Ry.d, {
                          text: [{
                            str: (0, Uy.ib)(Lb.category).toUpperCase()
                          }]
                        })
                      }), null !== Lb.ccu && (0, rb.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, rb.jsx)(kb.e, {
                          name: "user"
                        }), (0, qW.S)(Lb.ccu), " online"]
                      }), null !== Lb.ownerSocialPreviewWithoutLocation && (0, rb.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, rb.jsx)("span", {
                          children: "Made by"
                        }), (0, rb.jsx)(ny.d, {
                          playerSocialPreview: {
                            ...Lb.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), fW && (0, rb.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, rb.jsx)("span", {
                          children: "Made by"
                        }), (0, rb.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== Lb.favourites && (null !== Lb.isFavourite || ub && !Hb) && (0, rb.jsx)(ey.n, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== yU.current && (yU.current = !0, null !== Lb.isFavourite)) {
                              const yb = (0, fb.v)(Sb.gameNameWithVariation);
                              let bb;
                              Lb.isFavourite ? (bb = -1, My.c.unfavouriteGame(jb, yb).catch((yb => {
                                console.error("Failed to get unfavourite game", yb)
                              })).finally((() => {
                                yU.current = !1
                              }))) : (bb = 1, My.c.favouriteGame(jb, yb).catch((yb => {
                                console.error("Failed to get favourite game", yb)
                              })).finally((() => {
                                yU.current = !1
                              }))), pb((yb => ({
                                ...yb,
                                isFavourite: !yb.isFavourite
                              }))), pb((yb => ({
                                ...yb,
                                favourites: yb.favourites + bb
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (ib = Lb.isFavourite) && void 0 !== ib && ib,
                        disabled: null === Lb.isFavourite,
                        className: sy()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === Lb.isFavourite
                        })
                      }, null === Lb.isFavourite ? "pending" : "known"), ub && !fW && Ny.featureFlags.useSocialFeatures && !ZW && (0, rb.jsx)(Cb.c, {
                        targetType: "customGame",
                        targetId: (0, fb.v)(Sb.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (jb.playerHasRank("developer") || jb.playerHasRank("admin") && ZW) && (0, rb.jsxs)(ey.i, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Iy((0, Pb.n)((0, cW.d)(Sb.gameNameWithVariation, !0)))
                        },
                        children: [(0, rb.jsx)(kb.e, {
                          name: "star-christmas"
                        }), " ", py("studio:viewInStudio")]
                      }), ub && jb.playerHasRank("developer") && (0, rb.jsxs)(ey.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, sb.d)({
                            schematicId: (0, fb.v)(Sb.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, rb.jsx)(kb.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), ub && jb.playerHasRank("developer") && (0, rb.jsxs)(ey.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Wb.NotificationProvider.showCustomPopup({
                            body: () => (0, rb.jsx)(Eb, {
                              schematicId: (0, fb.v)(Sb.gameNameWithVariation),
                              gameName: Lb.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, rb.jsx)(kb.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (Yy = Lb.countdownInformation) || void 0 === Yy ? void 0 : Yy.type) && (0, rb.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, rb.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, rb.jsx)(Gy.d, {
                            toTime: Lb.countdownInformation.countdownToTime
                          })]
                        }), (0, rb.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: Lb.countdownInformation.previewText
                        })]
                      })]
                    }, fW ? "pending" : "shown"), (0, rb.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, rb.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, rb.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [Lb.title, " ", Lb.variationTitle && (null === (Xy = eb.b[Sb.gameNameWithVariation]) || void 0 === Xy ? void 0 : Xy.variationThumbnailUseBigRatio) && (0, rb.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: Lb.variationTitle
                          })]
                        })
                      }), Lb.listedVariations && Lb.listedVariations.length > 0 && (0, rb.jsx)("div", {
                        className: sy()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (uy = eb.b[Sb.gameNameWithVariation]) || void 0 === uy ? void 0 : uy.variationThumbnailUseBigRatio
                        }),
                        children: Lb.listedVariations.map((yb => {
                          var bb, Wy;
                          return (0, rb.jsxs)(nb, {
                            variation: yb,
                            isSelected: Sb.gameNameWithVariation === yb,
                            children: [null !== Qy && (0, rb.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, rb.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, rb.jsx)(kb.e, {
                                  name: "user"
                                }), " ", (0, qW.S)(null !== (bb = Qy[yb]) && void 0 !== bb ? bb : 0)]
                              })
                            }), (0, rb.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: py(null !== (Wy = eb.b[yb].variationTitle) && void 0 !== Wy ? Wy : eb.b[yb].title)
                            }), (0, rb.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, By.filterBadges)(eb.b[yb].badges).map((yb => (0, rb.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + yb.type,
                                children: (0, rb.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, rb.jsx)(vb.d, {
                                    badge: yb
                                  })
                                })
                              }, yb.type)))
                            })]
                          }, yb)
                        }))
                      })]
                    }), Lb.description && (0, rb.jsx)("p", {
                      className: "GameInformationDescription",
                      children: Lb.description
                    })]
                  }), (0, rb.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, rb.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Dy.j && !hW && (0, rb.jsx)(Ky.f, {
                        tooltipInner: (0, rb.jsx)("div", {
                          children: py("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, rb.jsx)(ey.i, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            KW(Db[0])
                          },
                          children: (0, rb.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, rb.jsx)(kb.e, {
                              name: "play"
                            }), " ", py("homePage:rejoinLobbyNumber", {
                              number: Db[0]
                            })]
                          })
                        })
                      }), !Dy.j && hW && oW]
                    }), (0, rb.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Dy.j && !hW && oW, (0, rb.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, rb.jsx)(kb.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, rb.jsx)(Sy.c, {
                          className: "JoinLobbyInput",
                          placeholderText: py("homePage:lobbyName"),
                          maxLength: qW.Q,
                          domRef: Mb,
                          onValueChange: yb => {
                            yb = (0, qW.tb)(yb), Gb(yb)
                          },
                          onEnter: () => {
                            0 === gW.length ? KW(Db[0]) : KW(gW)
                          }
                        }), (0, rb.jsx)(ey.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === gW.length ? KW(Db[0]) : KW(gW)
                          },
                          children: py("general:join")
                        })]
                      })]
                    }), (0, rb.jsxs)("section", {
                      className: sy()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !UW
                      }),
                      children: [(0, rb.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, rb.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, rb.jsx)(kb.e, {
                            name: "clock-rotate-left"
                          }), UW && (0, rb.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: py("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, rb.jsx)(Tb.c, {
                        lobbyGroups: [Db, tW],
                        onLobbyClick: yb => {
                          KW(yb)
                        },
                        keyPrefix: Sb.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== cU && (0, rb.jsx)(Fy, {
                eventName: cU
              })]
            }), SW && (0, rb.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, rb.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, rb.jsxs)("div", {
                  className: sy()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === Lb.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === Lb.showWorldsInsteadOfCustomLobbies && (0, rb.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, rb.jsx)(kb.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, rb.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, rb.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), py("game:worlds")]
                    })]
                  }), !1 === Lb.showWorldsInsteadOfCustomLobbies && (0, rb.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, rb.jsx)(kb.e, {
                      name: "joystick"
                    }), (0, rb.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, rb.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), py("homePage:customLobbies")]
                    })]
                  }), (0, rb.jsx)(ey.M, {
                    onClick: () => {
                      db("explore")
                    },
                    active: "explore" === Ab,
                    children: py("general:explore")
                  }), (0, rb.jsx)(ey.M, {
                    onClick: () => {
                      db("favourite")
                    },
                    active: "favourite" === Ab,
                    children: py("homePage:favouriteLobbies")
                  }), (0, rb.jsx)(ey.M, {
                    onClick: () => {
                      db("owned")
                    },
                    active: "owned" === Ab,
                    children: py("homePage:ownedLobbies")
                  })]
                }), (0, rb.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, rb.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, rb.jsx)(mW.c, {
                      label: "Create",
                      onClick: () => {
                        Wb.NotificationProvider.showCustomPopup({
                          body: yb => (0, rb.jsx)(Ub.CreateCustomLobby, {
                            gameNameWithVariation: Sb.gameNameWithVariation,
                            close: yb
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === wb && (0, rb.jsx)(mW.i, {}), !1 === wb && Nb.length > 0 && Nb.map((yb => (0, rb.jsx)(mW.f, {
                      customLobby: yb,
                      favouriteLobbies: Ib,
                      toggleLikeLobby: eW,
                      showReport: Ny.featureFlags.useSocialFeatures && "owned" !== Ab
                    }, yb.name)))]
                  }), EW]
                })]
              })
            })]
          }), !SW && EW]
        })
      })
    }

    function nb(yb) {
      let {
        variation: bb,
        isSelected: Wy,
        children: Uy
      } = yb;
      const Py = eb.b[bb],
        By = (0, fy.j)(bb, (0, fy.m)(Py)),
        Ky = (0, hy.e)(By),
        ey = (0, Zy.g)([(0, fy.g)(bb, (0, fy.b)(Py))]);
      return (0, rb.jsxs)(dy.LinkPreserveSearch, {
        to: (0, Ly.t)(bb),
        replace: !0,
        className: sy()("GameInformationVariation", cb.i, {
          SelectedGameInformationVariation: Wy
        }),
        onClick: yb => {
          if (!(0, bW.c)(yb)) return;
          const Wy = (0, mb.i)(bb);
          oy.e.setItem(Wy, bb)
        },
        onMouseEnter: ey.start,
        onMouseLeave: ey.cancel,
        onFocus: ey.start,
        onBlur: ey.cancel,
        style: (0, cb.h)(Ky),
        children: [(0, rb.jsx)(cb.e, {
          image: Ky
        }), Uy]
      })
    }
  },
  5756: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => ly
    });
    var Uy = Wy(55),
      hy = Wy(1273),
      fy = Wy(1339),
      Zy = Wy(2793),
      cb = Wy(980),
      Py = Wy(1194),
      oy = Wy(1217),
      By = Wy(910),
      Ky = Wy(898),
      ey = Wy.n(Ky),
      qb = Wy(952);

    function sy(yb) {
      let {
        info: bb,
        className: Wy
      } = yb;
      return (0, qb.jsxs)("div", {
        className: ey()("GameApprovalInfoDetails", Wy),
        children: [(0, qb.jsxs)("div", {
          className: ey()("GameApprovalInfoSummary", bb.overallPassed ? "Passed" : "Failed"),
          children: [(0, qb.jsx)(By.e, {
            name: bb.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, qb.jsx)("span", {
            children: bb.summary
          })]
        }), bb.rows.length > 0 && (0, qb.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: bb.rows.map((yb => (0, qb.jsxs)("div", {
            className: ey()("GameApprovalInfoRow", yb.passed ? "Passed" : "Failed"),
            children: [(0, qb.jsx)(By.e, {
              name: yb.passed ? "check" : "xmark"
            }), (0, qb.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, qb.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: yb.label
              }), (0, qb.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: yb.valueText
              })]
            })]
          }, yb.label)))
        })]
      })
    }
    var Sy = Wy(1042),
      Ey = Wy(1207);

    function ly(yb) {
      Ey.NotificationProvider.showCustomPopup({
        body: () => (0, qb.jsx)(mb, {
          ...yb
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function mb(yb) {
      let {
        schematicId: bb,
        canOverride: Wy,
        onApprovalChanged: Ky
      } = yb;
      const {
        t: ey
      } = (0, Sy.D)(), {
        userContext: Ey
      } = (0, cb.c)(), ly = (0, Zy.d)(), [mb, Cy] = (0, Uy.useState)(null), [Ty, Vy] = (0, Uy.useState)(null), [Jy, gb] = (0, Uy.useState)(!1), Gy = (0, Uy.useCallback)((() => {
        Vy(null), fy.c.getGameApprovalInfo(Ey, bb).then((yb => {
          ly.current && Cy(yb)
        })).catch((yb => {
          console.error("Failed to get game approval info", yb), ly.current && Vy(ey("studio:approvalLoadFailed"))
        }))
      }), [Ey, bb, ly, ey]);
      (0, Uy.useEffect)((() => {
        Gy()
      }), [Gy]);
      const Oy = yb => {
        Jy || (gb(!0), fy.c.setGameApproval(Ey, bb, yb).then((() => {
          null === Ky || void 0 === Ky || Ky(), ly.current && Gy()
        })).catch((yb => {
          console.error("Failed to set game approval", yb)
        })).finally((() => {
          ly.current && gb(!1)
        })))
      };
      return (0, qb.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, qb.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: ey("studio:approvalTitle")
        }), !mb && !Ty && (0, qb.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, qb.jsx)(Py.e, {})
        }), Ty && (0, qb.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: Ty
        }), mb && (0, qb.jsxs)(qb.Fragment, {
          children: [(0, qb.jsx)(sy, {
            info: mb
          }), Wy && (0, qb.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== mb.manualOverride && (0, qb.jsx)(oy.f, {
              tooltipInner: (0, qb.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, qb.jsxs)(hy.i, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Oy(!0)
                },
                disabled: Jy,
                children: [(0, qb.jsx)(By.e, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== mb.manualOverride && (0, qb.jsx)(oy.f, {
              tooltipInner: (0, qb.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, qb.jsxs)(hy.C, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Oy(!1)
                },
                disabled: Jy,
                children: [(0, qb.jsx)(By.e, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== mb.manualOverride && (0, qb.jsx)(oy.f, {
              tooltipInner: (0, qb.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, qb.jsxs)(hy.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Oy(null)
                },
                disabled: Jy,
                children: [(0, qb.jsx)(By.e, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  8043: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy
    });
    var Uy = Wy(1185),
      hy = Wy(1080),
      fy = Wy(547);

    function Zy(yb) {
      return yb = function(yb, bb) {
        var Wy;
        const Uy = new URLSearchParams(bb),
          hy = Uy.get("lobby"),
          fy = Uy.get("vm"),
          Zy = null !== (Wy = hy) && void 0 !== Wy ? Wy : yb.lobbyName,
          cb = null !== fy && void 0 !== fy ? fy : yb.directJoinVmUrl;
        if (Zy === yb.lobbyName && cb === yb.directJoinVmUrl) return yb;
        return {
          ...yb,
          lobbyName: Zy,
          directJoinVmUrl: cb
        }
      }(yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), yb = function(yb) {
        if ((0, fy.D)(yb.directJoinVmUrl)) return yb;
        const bb = (0, hy.Z)(yb.directJoinVmUrl);
        null === bb && (yb.directJoinVmUrl = void 0);
        return yb
      }(yb = function(yb) {
        if ((0, fy.D)(yb.gameNameWithVariation)) return yb;
        return yb.gameNameWithVariation = (0, Uy.i)(yb.gameNameWithVariation), yb
      }(yb))
    }
  },
  35195: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      f: () => Uy
    });
    const Uy = "skyblockSkills",
      hy = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);