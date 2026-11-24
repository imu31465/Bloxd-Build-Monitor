export const id = 122;
export const ids = [122, 396];
export const modules = {
  36413: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => HT
    });
    var hm = fm(339),
      Am = fm(3505),
      am = fm(3551),
      xm = fm(3545),
      wm = fm(3537),
      Dm = fm(1208),
      im = fm(37),
      Rm = fm(1713),
      pm = fm(1362),
      Em = fm(1454),
      om = fm(1080),
      Om = fm.n(om),
      Ym = fm(1676),
      qm = fm(59),
      jm = fm(77),
      Vm = fm(2324),
      Im = fm(1329),
      Km = fm(1617),
      Qm = fm(1160),
      nm = fm(3415),
      Jm = fm(4495),
      cm = fm(3479),
      zm = fm(1884),
      Zm = fm(3496),
      km = fm(1728),
      bm = fm(1494),
      Sm = fm(2137),
      em = fm(1345),
      Nm = fm(2588),
      Gm = fm(4970),
      Xm = fm(1135);
    const Pm = 15e3,
      Hm = 2500;

    function ym(mm) {
      var Tm;
      let {
        eventName: fm
      } = mm;
      const {
        t: hm
      } = (0, Dm.A)(), Am = km.f[fm], [am, xm] = (0, qm.useState)((() => Date.now() >= Am.endsAt.getTime())), [wm, im] = (0, qm.useState)("overall"), Rm = function(mm, Tm) {
        const {
          userContext: fm,
          isUserContextUpdating: hm
        } = (0, Qm.e)(), Am = `${mm}:${Tm}`, [am, xm] = (0, qm.useState)({
          requestKey: Am,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, qm.useEffect)((() => {
          if (hm) return;
          let am, wm = !1;
          const Dm = async () => {
            if ("visible" === document.visibilityState) try {
              const hm = await bm.d.getGameEventLeaderboard(fm, {
                event: mm,
                scope: Tm
              });
              wm || xm({
                requestKey: Am,
                leaderboard: {
                  status: "loaded",
                  leaderboard: hm
                }
              })
            } catch {
              wm || xm((mm => mm.requestKey === Am && "loaded" === mm.leaderboard.status ? mm : {
                requestKey: Am,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            wm || (am = setTimeout(Dm, Pm))
          };
          return Dm(), () => {
            wm = !0, clearTimeout(am)
          }
        }), [mm, Tm, Am, fm, hm]), am.requestKey === Am ? am.leaderboard : {
          status: "loading"
        }
      }(fm, wm), pm = function(mm) {
        const Tm = (0, qm.useRef)(null),
          fm = (0, qm.useRef)(0),
          hm = (0, qm.useRef)(),
          [Am, am] = (0, qm.useState)({});
        return (0, qm.useEffect)((() => {
          const Am = null === mm || void 0 === mm ? void 0 : mm.entries;
          if (!Am) return;
          const xm = new Map(Am.map((mm => [mm.player.name, mm.value]))),
            wm = Tm.current;
          if (Tm.current = xm, null === wm) return;
          const Dm = {};
          for (const [mm, Tm] of xm) {
            const hm = wm.get(mm);
            void 0 !== hm && Tm > hm && (Dm[mm] = {
              amount: Tm - hm,
              key: fm.current++
            })
          }
          0 !== Object.keys(Dm).length && (am(Dm), clearTimeout(hm.current), hm.current = setTimeout((() => {
            am({})
          }), Hm))
        }), [mm]), (0, qm.useEffect)((() => () => {
          clearTimeout(hm.current)
        }), []), Am
      }("loaded" === Rm.status ? Rm.leaderboard : null), Em = function(mm) {
        const [Tm, fm] = (0, qm.useState)(null), hm = "loaded" === mm.status ? mm.leaderboard.goalProgress : void 0;
        return (0, qm.useEffect)((() => {
          hm && fm(hm)
        }), [hm]), Tm
      }(Rm), om = Sm.f[`profileEffect_${Am.prizePack}`];
      if (am) return null;
      const Ym = "loaded" === Rm.status ? Rm.leaderboard : null,
        jm = null !== (Tm = null === Ym || void 0 === Ym ? void 0 : Ym.entries) && void 0 !== Tm ? Tm : null,
        Vm = null !== Ym && void 0 !== Ym && Ym.own && null !== jm && !jm.some((mm => mm.isOwn)) ? Ym.own : null;
      return (0, Xm.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Xm.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Xm.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Xm.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Xm.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Xm.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), hm("gameEvents:live")]
              }), (0, Xm.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [hm("gameEvents:endsIn"), (0, Xm.jsx)(cm.e, {
                  toTime: Am.endsAt,
                  onReachEndOfCountdown: () => {
                    xm(!0)
                  }
                })]
              })]
            }), (0, Xm.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: hm(Am.titleKey)
            }), (0, Xm.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Xm.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [om && (0, Xm.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Xm.jsx)(om, {})
                }), (0, Xm.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Xm.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: hm("gameEvents:prize")
                  }), (0, Xm.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: hm(Am.prizeNameKey)
                  })]
                })]
              }), (0, Xm.jsx)(Cm, {
                event: Am,
                progress: Em
              })]
            })]
          }), (0, Xm.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Xm.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Xm.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: hm(Am.leaderboard.titleKey)
              }), (0, Xm.jsx)(Gm.b, {
                ariaLabel: hm("gameEvents:leaderboardScope"),
                options: km.c.map((mm => ({
                  value: mm,
                  label: hm(`gameEvents:${mm}Scope`)
                }))),
                value: wm,
                onChange: im
              })]
            }), "loading" === Rm.status && (0, Xm.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Xm.jsx)(em.c, {})
            }), ("unavailable" === Rm.status || "loaded" === Rm.status && null === jm) && (0, Xm.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: hm("gameEvents:leaderboardUnavailable")
            }), null !== jm && 0 === jm.length && (0, Xm.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: hm("friends" === wm ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== jm && jm.length > 0 && (0, Xm.jsx)("ol", {
              className: "GameEventPanelRows",
              children: jm.map((mm => {
                const Tm = pm[mm.player.name];
                return (0, Xm.jsxs)("li", {
                  className: Om()("GameEventPanelRow", {
                    GameEventPanelRowOwn: mm.isOwn,
                    GameEventPanelRowTop: mm.rank <= 3
                  }),
                  children: [(0, Xm.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", mm.rank]
                  }), (0, Xm.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Xm.jsx)(Nm.f, {
                      playerSocialPreview: {
                        ...mm.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== Tm && (0, Xm.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", Tm.amount.toLocaleString()]
                  }, Tm.key), (0, Xm.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: mm.value.toLocaleString()
                  })]
                }, mm.player.name)
              }))
            }), Vm && (0, Xm.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Xm.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", Vm.rank.toLocaleString()]
              }), (0, Xm.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: hm("gameEvents:yourPlace")
              }), (0, Xm.jsx)("span", {
                className: "GameEventPanelScore",
                children: Vm.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function Cm(mm) {
      let {
        event: Tm,
        progress: fm
      } = mm;
      const {
        t: hm
      } = (0, Dm.A)(), Am = null !== fm && Tm.prizeGoals.some(((mm, Tm) => fm[Tm] >= mm.target));
      return (0, Xm.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Xm.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: hm(Am ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Xm.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: Tm.prizeGoals.map(((mm, Tm) => {
            const Am = null === fm ? null : Math.min(fm[Tm], mm.target);
            return (0, Xm.jsxs)(qm.Fragment, {
              children: [Tm > 0 && (0, Xm.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: hm("gameEvents:goalsOr")
              }), (0, Xm.jsxs)("div", {
                className: Om()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Am === mm.target
                }),
                children: [(0, Xm.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: hm(mm.labelKey)
                }), (0, Xm.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Xm.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Am && void 0 !== Am ? Am : 0) / mm.target * 100 + "%"
                    }
                  }), null !== Am && (0, Xm.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Am.toLocaleString(), " / ", mm.target.toLocaleString()]
                  })]
                })]
              })]
            }, mm.board)
          }))
        })]
      })
    }
    var rm = fm(1555),
      sm = fm(1597),
      lm = fm(1066),
      Mm = fm(768),
      um = fm(3471);

    function Bm(mm) {
      let {
        gameNameWithVariation: Tm
      } = mm;
      const fm = (0, rm.z)(Tm),
        [hm, Am] = (0, qm.useState)(null);
      if ((0, qm.useEffect)((() => {
          if (!fm) return;
          let mm = !0;
          return (0, sm.j)(fm).then((Tm => {
            mm && Am(Tm)
          })).catch((mm => {
            console.error(`Failed to load the page copy for ${fm.name}`, mm)
          })), () => {
            mm = !1
          }
        }), [fm]), !fm || !hm || hm.name !== fm.name) return null;
      const am = (0, sm.h)(hm),
        xm = new Set((0, lm.d)((0, Mm.f)()).map((mm => (0, rm.t)(mm)))),
        wm = hm.similarGames.filter((mm => xm.has((0, rm.t)(mm))));
      return (0, Xm.jsx)("div", {
        className: "GamePageContent",
        children: (0, Xm.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Xm.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Xm.jsx)("h2", {
              children: am.whatIs
            }), hm.whatIs.map((mm => (0, Xm.jsx)("p", {
              children: mm
            }, mm)))]
          }), (0, Xm.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Xm.jsx)("h2", {
              children: am.howToPlay
            }), hm.howToPlay.map((mm => (0, Xm.jsx)("p", {
              children: mm
            }, mm)))]
          }), (0, Xm.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Xm.jsx)("h2", {
              children: am.features
            }), (0, Xm.jsx)("ul", {
              children: hm.features.map((mm => (0, Xm.jsx)("li", {
                children: mm
              }, mm)))
            })]
          }), (0, Xm.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Xm.jsx)("h2", {
              children: am.tips
            }), (0, Xm.jsx)("ul", {
              children: hm.tips.map((mm => (0, Xm.jsx)("li", {
                children: mm
              }, mm)))
            })]
          }), (0, Xm.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Xm.jsx)("h2", {
              children: am.faq
            }), hm.faq.map((mm => {
              let {
                question: Tm,
                answer: fm
              } = mm;
              return (0, Xm.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Xm.jsx)("h3", {
                  children: Tm
                }), (0, Xm.jsx)("p", {
                  children: fm
                })]
              }, Tm)
            }))]
          }), wm.length > 0 && (0, Xm.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Xm.jsx)("h2", {
              children: am.similarGames
            }), (0, Xm.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: wm.map((mm => (0, Xm.jsx)("li", {
                children: (0, Xm.jsx)(um.f, {
                  source: {
                    type: "game",
                    gameNameWithVariation: mm
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, mm)))
            })]
          })]
        })
      })
    }
    var Lm = fm(1089),
      tm = fm(105),
      Um = fm(1162),
      dm = fm(34327),
      gm = fm(1653),
      Wm = fm(1537),
      Fm = fm(1519),
      mT = fm(1609),
      TT = fm(1465),
      fT = fm(1354),
      hT = fm(36415),
      AT = fm(1243),
      aT = fm(1041),
      xT = fm(354),
      wT = fm(1053),
      DT = fm(1548),
      iT = fm(8868),
      RT = fm(23),
      pT = fm(2496),
      ET = fm(800),
      oT = fm(1235),
      OT = fm(6470),
      YT = fm(3486);

    function qT(mm) {
      let {
        preview: Tm,
        isBroken: fm
      } = mm;
      const hm = null === Tm ? null : (0, am.f)(Tm, "small"),
        xm = (0, Am.g)(null !== hm && void 0 !== hm ? hm : am.o);
      return null === Tm ? (0, Xm.jsx)("div", {
        className: Om()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: fm
        }),
        children: (0, Xm.jsx)(Lm.c, {
          name: fm ? "triangle-exclamation" : "star"
        })
      }) : (0, Xm.jsx)("div", {
        className: Om()("FeaturedGamesPopupSlotThumbnail", wm.j),
        style: (0, wm.g)(xm),
        role: "img",
        "aria-label": Tm.name,
        children: (0, Xm.jsx)(wm.c, {
          image: xm
        })
      })
    }

    function jT(mm) {
      let {
        schematicId: Tm,
        gameName: fm
      } = mm;
      const {
        userContext: Am
      } = (0, Qm.e)(), am = (0, YT.c)(), [xm, wm] = (0, qm.useState)(null), [Dm, im] = (0, qm.useState)(null), [Rm, pm] = (0, qm.useState)(!1), om = (0, qm.useCallback)((() => {
        im(null), bm.d.getFeaturedGames(Am).then((mm => {
          am.current && wm(mm.slots)
        })).catch((mm => {
          console.error("Failed to get featured games", mm), am.current && im("Failed to load featured games")
        }))
      }), [Am, am]);
      (0, qm.useEffect)((() => {
        om()
      }), [om]);
      const Om = (mm, Tm) => {
        Rm || (pm(!0), bm.d.setFeaturedGame(Am, mm, Tm).then((() => {
          am.current && om()
        })).catch((mm => {
          console.error("Failed to set featured game", mm), am.current && im("Failed to update the featured slot")
        })).finally((() => {
          am.current && pm(!1)
        })))
      };
      return (0, Xm.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Xm.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !xm && !Dm && (0, Xm.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Xm.jsx)(em.c, {})
        }), Dm && (0, Xm.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: Dm
        }), xm && (0, Xm.jsxs)(Xm.Fragment, {
          children: [(0, Xm.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: xm.map((mm => {
              const fm = mm.schematicId === Tm,
                Am = null === mm.schematicId,
                {
                  categoryGroup: am
                } = hm.G[mm.slotId];
              return (0, Xm.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Xm.jsx)(qT, {
                  preview: mm.preview,
                  isBroken: !Am
                }), (0, Xm.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Xm.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, hm.ib)(am), " \xb7 position", " ", (0, hm.K)(mm.slotId, hm.Jb) + 1, " of", " ", (0, hm.Hb)(am, hm.Jb)]
                  }), Am && (0, Xm.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Am && null !== mm.preview && (0, Xm.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: mm.preview.name
                  }), !Am && null === mm.preview && (0, Xm.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Xm.jsx)(Lm.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Xm.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Am && (0, Xm.jsxs)(Em.q, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Om(mm.slotId, Tm)
                    },
                    disabled: Rm,
                    children: [(0, Xm.jsx)(Lm.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !Am && !fm && (0, Xm.jsxs)(Em.V, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Om(mm.slotId, Tm)
                    },
                    disabled: Rm,
                    children: [(0, Xm.jsx)(Lm.c, {
                      name: "star"
                    }), " Replace"]
                  }), !Am && (0, Xm.jsxs)(Em.O, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Om(mm.slotId, null)
                    },
                    disabled: Rm,
                    children: [(0, Xm.jsx)(Lm.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, mm.slotId)
            }))
          }), (0, Xm.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var VT = fm(4611),
      IT = fm(4529),
      KT = fm(3443);
    const QT = 8,
      nT = 12;

    function JT(mm) {
      let {
        customLobbies: Tm,
        favouriteLobbies: fm,
        toggleLikeLobby: hm,
        showReport: Am
      } = mm;
      const [am, xm] = (0, qm.useState)(QT);
      return (0, qm.useEffect)((() => {
        if (am >= Tm.length) return;
        let mm = !0;
        return (0, KT.d)().then((() => {
          mm && xm(am + nT)
        })), () => {
          mm = !1
        }
      }), [am, Tm.length]), (0, Xm.jsx)(Xm.Fragment, {
        children: Tm.slice(0, am).map((mm => (0, Xm.jsx)(IT.f, {
          customLobby: mm,
          favouriteLobbies: fm,
          toggleLikeLobby: hm,
          showReport: Am
        }, mm.name)))
      })
    }
    var cT = fm(4537),
      zT = fm(4556),
      ZT = fm(4511),
      kT = fm(3580),
      bT = fm(8866),
      ST = fm(213);
    const eT = {
      skyblock: [fm(36444).c]
    };
    var NT = fm(653);
    const GT = {
      listedVariations: null,
      backgroundImage: am.o,
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

    function XT(mm, Tm) {
      const fm = ET.h[mm.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, am.f)(mm, "large"),
        badges: [],
        category: mm.gameCategory,
        title: void 0 !== (null === fm || void 0 === fm ? void 0 : fm.title) ? Tm(fm.title) : mm.name,
        variationTitle: null,
        description: void 0 !== (null === fm || void 0 === fm ? void 0 : fm.description) ? Tm(fm.description) : mm.description,
        ownerSocialPreviewWithoutLocation: "owner" in mm ? mm.owner : null,
        ccu: mm.ccu,
        favourites: mm.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in mm ? mm.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function PT(mm) {
      var Tm, fm, hm;
      return null !== (Tm = null !== (fm = (0, ST.h)() ? function(mm) {
        for (const [Tm, fm] of Object.entries(eT)) {
          const hm = [Tm, ...fm.map((mm => (0, xT.Mb)(Tm, mm)))];
          if (hm.includes(mm)) return hm
        }
        return null
      }(mm) : null) && void 0 !== fm ? fm : null === (hm = ET.e[mm]) || void 0 === hm ? void 0 : hm.listedVariations) && void 0 !== Tm ? Tm : null
    }

    function HT() {
      const {
        gameNameWithVariation: mm
      } = (0, Wm.G)();
      if ((0, qm.useEffect)(kT.u, []), mm && (0, AT.w)(mm)) return (0, Xm.jsx)(yT, {
        urlId: mm
      }, mm);
      const Tm = mm && (0, aT.k)(mm) ? mm : "firstParty";
      return (0, Xm.jsx)(CT, {}, Tm)
    }

    function yT(mm) {
      let {
        urlId: Tm
      } = mm;
      const {
        userContext: fm,
        isUserContextUpdating: hm
      } = (0, Qm.e)(), Am = (0, qm.useMemo)((() => (0, gm.f)(Tm)), [Tm]);
      (0, qm.useMemo)((() => {
        if (null === Am) return;
        const mm = Um.userContextManager.peekCurrentUserContext();
        (null !== mm ? bm.d.getGame(mm, Am.schematicId) : Um.userContextManager.getCurrentUserContext().then((mm => bm.d.getGame(mm, Am.schematicId)))).catch((mm => {
          console.error(`Failed to get the custom game ${Am.schematicId}`, mm), (0, gm.e)(Tm)
        }))
      }), [Am, Tm]);
      const [am, xm] = (0, qm.useState)(null), wm = (0, dm.c)();
      (0, qm.useEffect)((() => {
        if (null !== Am || hm) return;
        let mm = !0;
        return bm.d.getGameByUrlId(fm, Tm).then((fm => {
          mm && xm({
            urlId: Tm,
            game: fm
          })
        })).catch((fm => {
          console.error(`Failed to find the custom game with urlId ${Tm}`, fm), mm && (0, Fm.navigateToHomePage)()
        })), () => {
          mm = !1
        }
      }), [Tm, Am, hm, fm]);
      const Dm = null !== Am && void 0 !== Am ? Am : (null === am || void 0 === am ? void 0 : am.urlId) === Tm ? am.game : null;
      return null === Dm ? (0, Xm.jsx)(em.c, {}) : wm ? (0, Xm.jsx)(CT, {
        gameNameWithVariation: (0, aT.q)(Dm.schematicId),
        knownCustomGame: Dm
      }, Dm.schematicId) : null
    }

    function CT(mm) {
      var Tm, fm, xm, om, km, Sm, em, Gm;
      let {
        gameNameWithVariation: Pm,
        knownCustomGame: Hm = null
      } = mm;
      const {
        t: Cm
      } = (0, Dm.A)();
      (0, pT.i)();
      const sm = (0, pT.m)(),
        {
          userContext: lm,
          isUserContextUpdating: Mm
        } = (0, Qm.e)(),
        um = (0, ZT.c)(),
        Um = (0, Fm.useNavigatePreserveSearch)(),
        dm = (0, Wm.G)(),
        gm = (0, qm.useMemo)((() => Pm ? {
          gameNameWithVariation: Pm
        } : dm), [Pm, dm]),
        TT = (0, iT.c)(gm),
        AT = (0, qm.useMemo)((() => {
          const mm = function(mm) {
            var Tm, fm;
            const hm = PT(mm);
            if (!hm || 0 === hm.length || hm.includes(mm)) return mm;
            const Am = im.g.getItem((0, Vm.i)(mm));
            if (Am && hm.includes(Am)) return Am;
            return null !== (Tm = null === (fm = ET.e[mm]) || void 0 === fm ? void 0 : fm.defaultListedVariation) && void 0 !== Tm ? Tm : hm[0]
          }(TT.gameNameWithVariation);
          return mm === TT.gameNameWithVariation ? TT : {
            ...TT,
            gameNameWithVariation: mm
          }
        }), [TT]);
      (0, qm.useEffect)((() => {
        const mm = TT.gameNameWithVariation;
        AT.gameNameWithVariation !== mm && mm !== (0, xT.Pb)(mm) && Um((0, rm.v)(AT.gameNameWithVariation), {
          replace: !0
        })
      }), [AT.gameNameWithVariation, TT.gameNameWithVariation, Um]);
      const [YT, qT] = (0, qm.useState)(""), KT = qm.useRef(null), [QT, nT] = (0, qm.useState)(), kT = (0, aT.k)(AT.gameNameWithVariation), ST = (0, qm.useMemo)((() => kT ? null : function(mm, Tm, fm) {
        var hm, Am;
        const xm = ET.e[mm];
        return (0, NT.H)(xm) ? null : {
          listedVariations: PT(mm),
          backgroundImage: (0, am.h)(mm, (0, am.e)(xm)),
          badges: (0, Rm.filterBadges)(xm.badges),
          category: xm.type,
          title: fm(xm.title),
          variationTitle: xm.variationTitle ? fm(xm.variationTitle) : null,
          description: fm(xm.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== Tm ? null !== (hm = Tm[mm]) && void 0 !== hm ? hm : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: xm.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: xm.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (Am = xm.canCreateCustomLobbies) || void 0 === Am || Am,
          countdownInformation: (0, Vm.g)(mm)
        }
      }(AT.gameNameWithVariation, sm, Cm)), [kT, AT.gameNameWithVariation, sm, Cm]), [eT, HT] = (0, qm.useState)(!1), [yT, CT] = (0, qm.useState)((() => Hm ? XT(Hm, Cm) : GT)), sT = null !== ST && void 0 !== ST ? ST : yT, [lT] = (0, qm.useState)(sT === GT), MT = (0, Am.g)(sT.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: uT,
        recentlyPlayedCustomLobbies: BT
      } = (0, qm.useMemo)((() => function(mm, Tm, fm, hm) {
        var Am;
        const am = mm => {
            const fm = (0, aT.n)(mm),
              hm = Tm.find((Tm => "custom" === Tm.type ? Tm.schematicId === fm : Tm.gameNameWithVariation === mm));
            return hm ? [...hm.recentLobbies] : []
          },
          xm = (0, Rm.getRecentGameNameWithVariationLobbiesKey)(mm),
          wm = null !== (Am = im.g.getItem(xm)) && void 0 !== Am ? Am : [],
          Dm = [...am(mm), ...wm],
          pm = [];
        for (const im of Dm)(0, oT.D)(im) && !pm.includes(im) && pm.push(im);
        let Em = Dm;
        if (fm) {
          const mm = am("classic_worlds"),
            Tm = Dm.filter((Tm => !mm.includes(Tm)));
          Em = [...mm, ...Tm]
        }
        const om = [],
          Om = !1 === hm ? [] : Em;
        for (const im of Om)(0, oT.D)(im) || om.includes(im) || om.push(im);
        return {
          recentlyPlayedPublicLobbies: pm,
          recentlyPlayedCustomLobbies: om
        }
      }(AT.gameNameWithVariation, um, sT.showWorldsInsteadOfCustomLobbies, sT.canCreateCustomLobbies)), [AT.gameNameWithVariation, um, sT.showWorldsInsteadOfCustomLobbies, sT.canCreateCustomLobbies]), [LT, vT] = (0, qm.useState)(!0), [tT, UT] = (0, qm.useState)([]), [dT, gT] = (0, qm.useState)(null), [WT, FT] = (0, qm.useState)("explore"), mf = (0, qm.useRef)(!1), Tf = (0, qm.useCallback)((mm => {
        (0, jm.unstable_batchedUpdates)((() => {
          nT(mm), CT((Tm => ({
            ...XT(mm, Cm),
            isFavourite: Tm.isFavourite
          })))
        }))
      }), [Cm]);
      (0, qm.useEffect)((() => {
        null === RT.c.get("gameEntrySource") && (0, RT.l)("gameInformationPageDirect")
      }), []);
      const ff = (0, qm.useRef)(null);
      (0, qm.useEffect)((() => {
        const mm = mm => {
            ff.current = mm.target instanceof Element ? mm.target.closest("a, button") : null
          },
          Tm = mm => {
            "Tab" === mm.key && (ff.current = null)
          };
        return document.addEventListener("pointerdown", mm, !0), document.addEventListener("keydown", Tm, !0), () => {
          document.removeEventListener("pointerdown", mm, !0), document.removeEventListener("keydown", Tm, !0)
        }
      }), []), (0, nm.b)("Enter", (mm => {
        const Tm = mm.target instanceof Element ? mm.target : null;
        if (mm.defaultPrevented || null !== Tm && void 0 !== Tm && Tm.closest("input, textarea, select")) return;
        const fm = null === Tm || void 0 === Tm ? void 0 : Tm.closest("a, button");
        fm && fm !== ff.current || (mm.preventDefault(), Ef())
      })), (0, Jm.c)(Fm.navigateToHomePage);
      const hf = uT.length > 0 || BT.length > 0,
        Af = !sT.useRejoinLastLobbyButton || 0 === uT.length,
        af = kT && null === sT.ownerSocialPreviewWithoutLocation,
        xf = lm.getPlayerName() === (null === QT || void 0 === QT || null === (Tm = QT.owner) || void 0 === Tm ? void 0 : Tm.name),
        wf = null !== (fm = null === (xm = sT.badges.find((mm => "event" === mm.type))) || void 0 === xm ? void 0 : xm.event) && void 0 !== fm ? fm : null,
        Df = Af ? Em.m : Em.e,
        Rf = (0, Xm.jsx)(pm.h, {
          tooltipInner: (0, Xm.jsx)("div", {
            children: Cm("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Xm.jsx)(Df, {
            className: "GameInformationButton",
            padDefaultFocus: Af,
            showPress: !0,
            onClick: () => {
              Ef()
            },
            children: (0, Xm.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Af && (0, Xm.jsxs)(Xm.Fragment, {
                children: [(0, Xm.jsx)(Lm.c, {
                  name: "play"
                }), " "]
              }), Cm("homePage:quickPlay")]
            })
          })
        });
      (0, qm.useEffect)((() => {
        if (!kT || Mm) return;
        let mm = !0;
        const Tm = (0, aT.n)(AT.gameNameWithVariation);
        return bm.d.getGame(lm, Tm).then((Tm => {
          mm && Tf(Tm)
        })).catch((Tm => {
          console.error("Failed to get Custom Game information", Tm), mm && (0, Fm.navigateToHomePage)()
        })), bm.d.getFavouriteGames(lm).then((fm => {
          mm && CT((mm => ({
            ...mm,
            isFavourite: fm.includes(Tm)
          })))
        })).catch((Tm => {
          console.error("Failed to get favourite games", Tm), mm && HT(!0)
        })), () => {
          mm = !1
        }
      }), [kT, Mm, AT.gameNameWithVariation, Tf, lm]);
      const pf = !kT && null === ST;

      function Ef(mm) {
        (0, bT.g)(), Um((0, Im.e)(AT.gameNameWithVariation, mm))
      }(0, qm.useEffect)((() => {
        pf && (0, Fm.navigateToHomePage)()
      }), [pf]), (0, qm.useEffect)((() => {
        if (!1 === sT.canCreateCustomLobbies) return;
        let mm = !0;
        return null !== sT.showWorldsInsteadOfCustomLobbies && !1 === Mm && (vT(!0), bm.d.getFavouriteLobbies(lm).then((mm => {
          gT(mm)
        })), bm.d.getOpenCustomLobbies(lm, {
          gameNameWithVariation: sT.showWorldsInsteadOfCustomLobbies ? "classic" : AT.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === WT,
          onlyFavouriteLobbies: "favourite" === WT
        }).then((Tm => {
          mm && (0, jm.unstable_batchedUpdates)((() => {
            UT(Tm), vT(!1)
          }))
        })).catch((Tm => {
          console.error("Failed to get open custom lobbies", Tm), mm && vT(!1)
        }))), () => {
          mm = !1
        }
      }), [Mm, AT, WT, sT.showWorldsInsteadOfCustomLobbies, sT.canCreateCustomLobbies, lm]);
      const of = (0, qm.useCallback)((async mm => {
        try {
          if (!dT) return;
          dT.includes(mm) ? (bm.d.unfavouriteLobby(lm, mm), gT(dT.filter((Tm => Tm !== mm)))) : (bm.d.favouriteLobby(lm, mm).catch((mm => {
            console.error("Failed to favourite lobby", mm)
          })), gT([...dT, mm]))
        } catch (Tm) {
          console.error("Failed to like lobby", Tm)
        }
      }), [lm, dT]), Of = (null === QT || void 0 === QT ? void 0 : QT.schematicId) === (0, aT.n)(TT.gameNameWithVariation) ? QT : null, Yf = Of && (0, rm.B)(TT.gameNameWithVariation, (mm => Cm(mm)), Of);
      (0, mT.d)(Of && (0, rm.v)(TT.gameNameWithVariation, Of));
      const qf = tm.featureFlags.canUseCustomLobbies && !0 === sT.canCreateCustomLobbies,
        jf = (0, Xm.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Xm.jsx)(Bm, {
            gameNameWithVariation: AT.gameNameWithVariation
          })
        });
      return (0, Xm.jsx)(Xm.Fragment, {
        children: (0, Xm.jsxs)("article", {
          className: Om()("GameInformation", {
            GameInformationFadeIn: lT,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (om = sT.countdownInformation) || void 0 === om ? void 0 : om.type)
          }),
          children: [Yf && (0, Xm.jsx)(Km.c, {
            meta: Yf
          }), (0, Xm.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Xm.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Xm.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Xm.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Xm.jsx)("div", {
                  className: Om()("GameInformationTopBackgroundImage", wm.j),
                  style: (0, wm.g)(MT),
                  children: (0, Xm.jsx)(wm.c, {
                    image: MT
                  })
                })]
              }), (0, Xm.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Xm.jsx)(VT.e, {}), (0, Xm.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Xm.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Xm.jsxs)("div", {
                      className: Om()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: af
                      }),
                      children: [sT.badges.map((mm => (0, Xm.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${mm.type}`,
                        children: (0, Xm.jsx)(Zm.d, {
                          badge: mm
                        })
                      }, mm.type))), kT && (0, Xm.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Xm.jsx)(zm.b, {
                          text: (0, hm.eb)({
                            type: "playerCrafted"
                          })
                        })
                      }), sT.category && (0, Xm.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Xm.jsx)(zm.b, {
                          text: [{
                            str: (0, hm.gb)(sT.category).toUpperCase()
                          }]
                        })
                      }), null !== sT.ccu && (0, Xm.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Xm.jsx)(Lm.c, {
                          name: "user"
                        }), (0, oT.J)(sT.ccu), " online"]
                      }), null !== sT.ownerSocialPreviewWithoutLocation && (0, Xm.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Xm.jsx)("span", {
                          children: "Made by"
                        }), (0, Xm.jsx)(Nm.f, {
                          playerSocialPreview: {
                            ...sT.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), af && (0, Xm.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Xm.jsx)("span", {
                          children: "Made by"
                        }), (0, Xm.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== sT.favourites && (null !== sT.isFavourite || kT && !eT) && (0, Xm.jsx)(Em.s, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== mf.current && (mf.current = !0, null !== sT.isFavourite)) {
                              const mm = (0, aT.n)(AT.gameNameWithVariation);
                              let Tm;
                              sT.isFavourite ? (Tm = -1, bm.d.unfavouriteGame(lm, mm).catch((mm => {
                                console.error("Failed to get unfavourite game", mm)
                              })).finally((() => {
                                mf.current = !1
                              }))) : (Tm = 1, bm.d.favouriteGame(lm, mm).catch((mm => {
                                console.error("Failed to get favourite game", mm)
                              })).finally((() => {
                                mf.current = !1
                              }))), CT((mm => ({
                                ...mm,
                                isFavourite: !mm.isFavourite
                              }))), CT((mm => ({
                                ...mm,
                                favourites: mm.favourites + Tm
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (km = sT.isFavourite) && void 0 !== km && km,
                        disabled: null === sT.isFavourite,
                        className: Om()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === sT.isFavourite
                        })
                      }, null === sT.isFavourite ? "pending" : "known"), kT && !af && tm.featureFlags.useSocialFeatures && !xf && (0, Xm.jsx)(cT.e, {
                        targetType: "customGame",
                        targetId: (0, aT.n)(AT.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (lm.playerHasRank("developer") || lm.playerHasRank("admin") && xf) && (0, Xm.jsxs)(Em.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Um((0, DT.p)((0, wT.f)(AT.gameNameWithVariation, !0)))
                        },
                        children: [(0, Xm.jsx)(Lm.c, {
                          name: "star-christmas"
                        }), " ", Cm("studio:viewInStudio")]
                      }), kT && lm.playerHasRank("developer") && (0, Xm.jsxs)(Em.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, OT.b)({
                            schematicId: (0, aT.n)(AT.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Xm.jsx)(Lm.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), kT && lm.playerHasRank("developer") && (0, Xm.jsxs)(Em.e, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          fT.NotificationProvider.showCustomPopup({
                            body: () => (0, Xm.jsx)(jT, {
                              schematicId: (0, aT.n)(AT.gameNameWithVariation),
                              gameName: sT.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Xm.jsx)(Lm.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (Sm = sT.countdownInformation) || void 0 === Sm ? void 0 : Sm.type) && (0, Xm.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Xm.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Xm.jsx)(cm.e, {
                            toTime: sT.countdownInformation.countdownToTime
                          })]
                        }), (0, Xm.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: sT.countdownInformation.previewText
                        })]
                      })]
                    }, af ? "pending" : "shown"), (0, Xm.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Xm.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Xm.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [sT.title, " ", sT.variationTitle && (null === (em = ET.e[AT.gameNameWithVariation]) || void 0 === em ? void 0 : em.variationThumbnailUseBigRatio) && (0, Xm.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: sT.variationTitle
                          })]
                        })
                      }), sT.listedVariations && sT.listedVariations.length > 0 && (0, Xm.jsx)("div", {
                        className: Om()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (Gm = ET.e[AT.gameNameWithVariation]) || void 0 === Gm ? void 0 : Gm.variationThumbnailUseBigRatio
                        }),
                        children: sT.listedVariations.map((mm => {
                          var Tm, fm;
                          return (0, Xm.jsxs)(rT, {
                            variation: mm,
                            isSelected: AT.gameNameWithVariation === mm,
                            children: [null !== sm && (0, Xm.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Xm.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Xm.jsx)(Lm.c, {
                                  name: "user"
                                }), " ", (0, oT.J)(null !== (Tm = sm[mm]) && void 0 !== Tm ? Tm : 0)]
                              })
                            }), (0, Xm.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: Cm(null !== (fm = ET.e[mm].variationTitle) && void 0 !== fm ? fm : ET.e[mm].title)
                            }), (0, Xm.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, Rm.filterBadges)(ET.e[mm].badges).map((mm => (0, Xm.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + mm.type,
                                children: (0, Xm.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Xm.jsx)(Zm.d, {
                                    badge: mm
                                  })
                                })
                              }, mm.type)))
                            })]
                          }, mm)
                        }))
                      })]
                    }), sT.description && (0, Xm.jsx)("p", {
                      className: "GameInformationDescription",
                      children: sT.description
                    })]
                  }), (0, Xm.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Xm.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Af && (0, Xm.jsx)(pm.h, {
                        tooltipInner: (0, Xm.jsx)("div", {
                          children: Cm("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Xm.jsx)(Em.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            Ef(uT[0])
                          },
                          children: (0, Xm.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Xm.jsx)(Lm.c, {
                              name: "play"
                            }), " ", Cm("homePage:rejoinLobbyNumber", {
                              number: uT[0]
                            })]
                          })
                        })
                      }), Af && Rf]
                    }), (0, Xm.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Af && Rf, (0, Xm.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Xm.jsx)(Lm.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Xm.jsx)(Ym.e, {
                          className: "JoinLobbyInput",
                          placeholderText: Cm("homePage:lobbyName"),
                          maxLength: oT.H,
                          domRef: KT,
                          onValueChange: mm => {
                            mm = (0, oT.ib)(mm), qT(mm)
                          },
                          onEnter: () => {
                            0 === YT.length ? Ef(uT[0]) : Ef(YT)
                          }
                        }), (0, Xm.jsx)(Em.e, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === YT.length ? Ef(uT[0]) : Ef(YT)
                          },
                          children: Cm("general:join")
                        })]
                      })]
                    }), (0, Xm.jsxs)("section", {
                      className: Om()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !hf
                      }),
                      children: [(0, Xm.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Xm.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Xm.jsx)(Lm.c, {
                            name: "clock-rotate-left"
                          }), hf && (0, Xm.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: Cm("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Xm.jsx)(zT.c, {
                        lobbyGroups: [uT, BT],
                        onLobbyClick: mm => {
                          Ef(mm)
                        },
                        keyPrefix: AT.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== wf && (0, Xm.jsx)(ym, {
                eventName: wf
              })]
            }), qf && (0, Xm.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Xm.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Xm.jsxs)("div", {
                  className: Om()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === sT.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === sT.showWorldsInsteadOfCustomLobbies && (0, Xm.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Xm.jsx)(Lm.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Xm.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Xm.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Cm("game:worlds")]
                    })]
                  }), !1 === sT.showWorldsInsteadOfCustomLobbies && (0, Xm.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Xm.jsx)(Lm.c, {
                      name: "joystick"
                    }), (0, Xm.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Xm.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Cm("homePage:customLobbies")]
                    })]
                  }), (0, Xm.jsx)(Em.V, {
                    onClick: () => {
                      FT("explore")
                    },
                    active: "explore" === WT,
                    children: Cm("general:explore")
                  }), (0, Xm.jsx)(Em.V, {
                    onClick: () => {
                      FT("favourite")
                    },
                    active: "favourite" === WT,
                    children: Cm("homePage:favouriteLobbies")
                  }), (0, Xm.jsx)(Em.V, {
                    onClick: () => {
                      FT("owned")
                    },
                    active: "owned" === WT,
                    children: Cm("homePage:ownedLobbies")
                  })]
                }), (0, Xm.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Xm.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Xm.jsx)(IT.b, {
                      label: "Create",
                      onClick: () => {
                        fT.NotificationProvider.showCustomPopup({
                          body: mm => (0, Xm.jsx)(hT.CreateCustomLobby, {
                            gameNameWithVariation: AT.gameNameWithVariation,
                            close: mm
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === LT && (0, Xm.jsx)(IT.j, {}), !1 === LT && (0, Xm.jsx)(JT, {
                      customLobbies: tT,
                      favouriteLobbies: dT,
                      toggleLikeLobby: of,
                      showReport: tm.featureFlags.useSocialFeatures && "owned" !== WT
                    })]
                  }), jf]
                })]
              })
            })]
          }), !qf && jf]
        })
      })
    }

    function rT(mm) {
      let {
        variation: Tm,
        isSelected: fm,
        children: hm
      } = mm;
      const Dm = ET.e[Tm],
        Rm = (0, am.h)(Tm, (0, am.l)(Dm)),
        pm = (0, Am.g)(Rm),
        Em = (0, xm.h)([(0, am.g)(Tm, (0, am.e)(Dm))]);
      return (0, Xm.jsxs)(Fm.LinkPreserveSearch, {
        to: (0, rm.v)(Tm),
        replace: !0,
        className: Om()("GameInformationVariation", wm.j, {
          SelectedGameInformationVariation: fm
        }),
        onClick: mm => {
          if (!(0, TT.b)(mm)) return;
          const fm = (0, Vm.i)(Tm);
          im.g.setItem(fm, Tm)
        },
        onMouseEnter: Em.start,
        onMouseLeave: Em.cancel,
        onFocus: Em.start,
        onBlur: Em.cancel,
        style: (0, wm.g)(pm),
        children: [(0, Xm.jsx)(wm.c, {
          image: pm
        }), hm]
      })
    }
  },
  6470: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Vm
    });
    var hm = fm(59),
      Am = fm(1454),
      am = fm(1494),
      xm = fm(3486),
      wm = fm(1160),
      Dm = fm(1345),
      im = fm(1362),
      Rm = fm(1089),
      pm = fm(1080),
      Em = fm.n(pm),
      om = fm(6467),
      Om = fm(1135);

    function Ym(mm) {
      let {
        info: Tm,
        className: fm
      } = mm;
      const {
        statusText: hm,
        rowText: Am
      } = (0, om.f)();
      return (0, Om.jsxs)("div", {
        className: Em()("GameApprovalInfoDetails", fm),
        children: [(0, Om.jsxs)("div", {
          className: Em()("GameApprovalInfoSummary", Tm.overallPassed ? "Passed" : "Failed"),
          children: [(0, Om.jsx)(Rm.c, {
            name: Tm.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, Om.jsx)("span", {
            children: hm(Tm.status)
          })]
        }), Tm.rows.length > 0 && (0, Om.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: Tm.rows.map((mm => {
            const {
              label: Tm,
              value: fm
            } = Am(mm);
            return (0, Om.jsxs)("div", {
              className: Em()("GameApprovalInfoRow", mm.passed ? "Passed" : "Failed"),
              children: [(0, Om.jsx)(Rm.c, {
                name: mm.passed ? "check" : "xmark"
              }), (0, Om.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, Om.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: Tm
                }), null !== fm && (0, Om.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: fm
                })]
              })]
            }, mm.kind)
          }))
        })]
      })
    }
    var qm = fm(1208),
      jm = fm(1354);

    function Vm(mm) {
      jm.NotificationProvider.showCustomPopup({
        body: () => (0, Om.jsx)(Im, {
          ...mm
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function Im(mm) {
      let {
        schematicId: Tm,
        canOverride: fm,
        onApprovalChanged: pm
      } = mm;
      const {
        t: Em
      } = (0, qm.A)(), {
        userContext: om
      } = (0, wm.e)(), jm = (0, xm.c)(), [Vm, Im] = (0, hm.useState)(null), [Km, Qm] = (0, hm.useState)(null), [nm, Jm] = (0, hm.useState)(!1), cm = (0, hm.useCallback)((() => {
        Qm(null), am.d.getGameApprovalInfo(om, Tm).then((mm => {
          jm.current && Im(mm)
        })).catch((mm => {
          console.error("Failed to get game approval info", mm), jm.current && Qm(Em("studio:approvalLoadFailed"))
        }))
      }), [om, Tm, jm, Em]);
      (0, hm.useEffect)((() => {
        cm()
      }), [cm]);
      const zm = mm => {
        nm || (Jm(!0), am.d.setGameApproval(om, Tm, mm).then((() => {
          null === pm || void 0 === pm || pm(), jm.current && cm()
        })).catch((mm => {
          console.error("Failed to set game approval", mm)
        })).finally((() => {
          jm.current && Jm(!1)
        })))
      };
      return (0, Om.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, Om.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: Em("studio:approvalTitle")
        }), !Vm && !Km && (0, Om.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, Om.jsx)(Dm.c, {})
        }), Km && (0, Om.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: Km
        }), Vm && (0, Om.jsxs)(Om.Fragment, {
          children: [(0, Om.jsx)(Ym, {
            info: Vm
          }), fm && (0, Om.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== Vm.manualOverride && (0, Om.jsx)(im.h, {
              tooltipInner: (0, Om.jsx)("div", {
                children: Em("studio:approvalApproveTooltip")
              }),
              children: (0, Om.jsxs)(Am.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  zm(!0)
                },
                disabled: nm,
                children: [(0, Om.jsx)(Rm.c, {
                  name: "check"
                }), " ", Em("studio:approvalApprove")]
              })
            }), !1 !== Vm.manualOverride && (0, Om.jsx)(im.h, {
              tooltipInner: (0, Om.jsx)("div", {
                children: Em("studio:approvalDenyTooltip")
              }),
              children: (0, Om.jsxs)(Am.O, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  zm(!1)
                },
                disabled: nm,
                children: [(0, Om.jsx)(Rm.c, {
                  name: "xmark"
                }), " ", Em("studio:approvalDeny")]
              })
            }), null !== Vm.manualOverride && (0, Om.jsx)(im.h, {
              tooltipInner: (0, Om.jsx)("div", {
                children: Em("studio:approvalClearOverrideTooltip")
              }),
              children: (0, Om.jsxs)(Am.e, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  zm(null)
                },
                disabled: nm,
                children: [(0, Om.jsx)(Rm.c, {
                  name: "arrows-rotate"
                }), " ", Em("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6467: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm,
      f: () => xm
    });
    var hm = fm(354),
      Am = fm(1208);
    const am = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function xm() {
      const {
        t: mm,
        selectedLanguage: Tm
      } = (0, Am.A)();
      return {
        statusText: Tm => mm(am[Tm]),
        rowText: fm => {
          const am = (mm, fm) => (0, hm.cb)((0, Am.n)(Tm.code, mm), 0, fm);
          switch (fm.kind) {
            case "ownerAccountAge": {
              const Tm = fm.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: mm("studio:approvalAccountAgeLabel"),
                value: mm(Tm, {
                  age: am(Tm, fm.accountAgeMs),
                  days: fm.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: mm("studio:approvalSinceUnbannedLabel"), value: mm("studio:approvalSinceUnbannedValue", {
                  time: am("studio:approvalSinceUnbannedValue", fm.sinceMs),
                  days: fm.minDays
                })
              };
            case "reportHold": {
              const {
                detail: Tm
              } = fm;
              if (null === Tm) return {
                label: mm("studio:approvalUnderInvestigation"),
                value: null
              };
              const hm = Tm.weightedReporters.toFixed(1),
                Am = Tm.threshold.toFixed(1),
                xm = mm("studio:approvalReportHoldLabel", {
                  hours: Tm.windowHours
                });
              if (null === Tm.heldUntil) return {
                label: xm,
                value: mm("studio:approvalReportHoldValue", {
                  weightedReporters: hm,
                  threshold: Am
                })
              };
              const wm = "studio:approvalReportHoldValueHeld";
              return {
                label: xm,
                value: mm(wm, {
                  weightedReporters: hm,
                  threshold: Am,
                  time: am(wm, Tm.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function wm(mm) {
      return null === mm.manualOverride && mm.rows.some((mm => "reportHold" === mm.kind && !mm.passed))
    }
  },
  34327: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(59),
      Am = fm(3443);

    function am() {
      const [mm, Tm] = (0, hm.useState)(!1);
      return (0, hm.useLayoutEffect)((() => {
        let mm = !0;
        return (0, Am.d)().then((() => {
          mm && Tm(!0)
        })), () => {
          mm = !1
        }
      }), []), mm
    }
  },
  8868: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(1329),
      Am = fm(1235),
      am = fm(653);

    function xm(mm) {
      return mm = function(mm, Tm) {
        var fm;
        const hm = new URLSearchParams(Tm),
          Am = hm.get("lobby"),
          am = hm.get("vm"),
          xm = null !== (fm = Am) && void 0 !== fm ? fm : mm.lobbyName,
          wm = null !== am && void 0 !== am ? am : mm.directJoinVmUrl;
        if (xm === mm.lobbyName && wm === mm.directJoinVmUrl) return mm;
        return {
          ...mm,
          lobbyName: xm,
          directJoinVmUrl: wm
        }
      }(mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), mm = function(mm) {
        if ((0, am.H)(mm.directJoinVmUrl)) return mm;
        const Tm = (0, Am.S)(mm.directJoinVmUrl);
        null === Tm && (mm.directJoinVmUrl = void 0);
        return mm
      }(mm = function(mm) {
        if ((0, am.H)(mm.gameNameWithVariation)) return mm;
        return mm.gameNameWithVariation = (0, hm.m)(mm.gameNameWithVariation), mm
      }(mm))
    }
  },
  8866: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am,
      g: () => Am
    });
    let hm = !1;

    function Am() {
      hm = !0
    }

    function am() {
      return hm
    }
  },
  36444: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      d: () => hm
    });
    const hm = "skyblockSkills",
      Am = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);