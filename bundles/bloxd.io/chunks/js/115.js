export const id = 115;
export const ids = [115, 390];
export const modules = {
  35895: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => qz
    });
    var hv = Pv(302),
      Sv = Pv(3258),
      ev = Pv(3301),
      gv = Pv(3295),
      pv = Pv(3289),
      dv = Pv(1175),
      Nv = Pv(39),
      lv = Pv(1692),
      Tv = Pv(1344),
      Wv = Pv(1442),
      wv = Pv(1035),
      av = Pv.n(wv),
      sv = Pv(1647),
      Cv = Pv(52),
      iv = Pv(62),
      cv = Pv(2277),
      Gv = Pv(1311),
      mv = Pv(1595),
      jv = Pv(1108),
      fv = Pv(3156),
      Fv = Pv(4310),
      Yv = Pv(3241),
      nv = Pv(1858),
      Ov = Pv(3256),
      Dv = Pv(1703),
      Kv = Pv(1482),
      Vv = Pv(2097),
      Uv = Pv(1327),
      Rv = Pv(2432),
      xv = Pv(4765),
      tv = Pv(1082);
    const qv = 15e3,
      Iv = 2500;

    function Qv(vv) {
      var zv;
      let {
        eventName: Pv
      } = vv;
      const {
        t: hv
      } = (0, dv.x)(), Sv = Dv.h[Pv], [ev, gv] = (0, Cv.useState)((() => Date.now() >= Sv.endsAt.getTime())), [pv, Nv] = (0, Cv.useState)("overall"), lv = function(vv, zv) {
        const {
          userContext: Pv,
          isUserContextUpdating: hv
        } = (0, jv.d)(), Sv = `${vv}:${zv}`, [ev, gv] = (0, Cv.useState)({
          requestKey: Sv,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, Cv.useEffect)((() => {
          if (hv) return;
          let ev, pv = !1;
          const dv = async () => {
            if ("visible" === document.visibilityState) try {
              const hv = await Kv.e.getGameEventLeaderboard(Pv, {
                event: vv,
                scope: zv
              });
              pv || gv({
                requestKey: Sv,
                leaderboard: {
                  status: "loaded",
                  leaderboard: hv
                }
              })
            } catch {
              pv || gv((vv => vv.requestKey === Sv && "loaded" === vv.leaderboard.status ? vv : {
                requestKey: Sv,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            pv || (ev = setTimeout(dv, qv))
          };
          return dv(), () => {
            pv = !0, clearTimeout(ev)
          }
        }), [vv, zv, Sv, Pv, hv]), ev.requestKey === Sv ? ev.leaderboard : {
          status: "loading"
        }
      }(Pv, pv), Tv = function(vv) {
        const zv = (0, Cv.useRef)(null),
          Pv = (0, Cv.useRef)(0),
          hv = (0, Cv.useRef)(),
          [Sv, ev] = (0, Cv.useState)({});
        return (0, Cv.useEffect)((() => {
          const Sv = null === vv || void 0 === vv ? void 0 : vv.entries;
          if (!Sv) return;
          const gv = new Map(Sv.map((vv => [vv.player.name, vv.value]))),
            pv = zv.current;
          if (zv.current = gv, null === pv) return;
          const dv = {};
          for (const [vv, zv] of gv) {
            const hv = pv.get(vv);
            void 0 !== hv && zv > hv && (dv[vv] = {
              amount: zv - hv,
              key: Pv.current++
            })
          }
          0 !== Object.keys(dv).length && (ev(dv), clearTimeout(hv.current), hv.current = setTimeout((() => {
            ev({})
          }), Iv))
        }), [vv]), (0, Cv.useEffect)((() => () => {
          clearTimeout(hv.current)
        }), []), Sv
      }("loaded" === lv.status ? lv.leaderboard : null), Wv = function(vv) {
        const [zv, Pv] = (0, Cv.useState)(null), hv = "loaded" === vv.status ? vv.leaderboard.goalProgress : void 0;
        return (0, Cv.useEffect)((() => {
          hv && Pv(hv)
        }), [hv]), zv
      }(lv), wv = Vv.f[`profileEffect_${Sv.prizePack}`];
      if (ev) return null;
      const sv = "loaded" === lv.status ? lv.leaderboard : null,
        iv = null !== (zv = null === sv || void 0 === sv ? void 0 : sv.entries) && void 0 !== zv ? zv : null,
        cv = null !== sv && void 0 !== sv && sv.own && null !== iv && !iv.some((vv => vv.isOwn)) ? sv.own : null;
      return (0, tv.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, tv.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, tv.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, tv.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, tv.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, tv.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), hv("gameEvents:live")]
              }), (0, tv.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [hv("gameEvents:endsIn"), (0, tv.jsx)(Yv.e, {
                  toTime: Sv.endsAt,
                  onReachEndOfCountdown: () => {
                    gv(!0)
                  }
                })]
              })]
            }), (0, tv.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: hv(Sv.titleKey)
            }), (0, tv.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, tv.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [wv && (0, tv.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, tv.jsx)(wv, {})
                }), (0, tv.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, tv.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: hv("gameEvents:prize")
                  }), (0, tv.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: hv(Sv.prizeNameKey)
                  })]
                })]
              }), (0, tv.jsx)(Zv, {
                event: Sv,
                progress: Wv
              })]
            })]
          }), (0, tv.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, tv.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, tv.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: hv(Sv.leaderboard.titleKey)
              }), (0, tv.jsx)(xv.c, {
                ariaLabel: hv("gameEvents:leaderboardScope"),
                options: Dv.d.map((vv => ({
                  value: vv,
                  label: hv(`gameEvents:${vv}Scope`)
                }))),
                value: pv,
                onChange: Nv
              })]
            }), "loading" === lv.status && (0, tv.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, tv.jsx)(Uv.c, {})
            }), ("unavailable" === lv.status || "loaded" === lv.status && null === iv) && (0, tv.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: hv("gameEvents:leaderboardUnavailable")
            }), null !== iv && 0 === iv.length && (0, tv.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: hv("friends" === pv ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== iv && iv.length > 0 && (0, tv.jsx)("ol", {
              className: "GameEventPanelRows",
              children: iv.map((vv => {
                const zv = Tv[vv.player.name];
                return (0, tv.jsxs)("li", {
                  className: av()("GameEventPanelRow", {
                    GameEventPanelRowOwn: vv.isOwn,
                    GameEventPanelRowTop: vv.rank <= 3
                  }),
                  children: [(0, tv.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", vv.rank]
                  }), (0, tv.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, tv.jsx)(Rv.e, {
                      playerSocialPreview: {
                        ...vv.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== zv && (0, tv.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", zv.amount.toLocaleString()]
                  }, zv.key), (0, tv.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: vv.value.toLocaleString()
                  })]
                }, vv.player.name)
              }))
            }), cv && (0, tv.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, tv.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", cv.rank.toLocaleString()]
              }), (0, tv.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: hv("gameEvents:yourPlace")
              }), (0, tv.jsx)("span", {
                className: "GameEventPanelScore",
                children: cv.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function Zv(vv) {
      let {
        event: zv,
        progress: Pv
      } = vv;
      const {
        t: hv
      } = (0, dv.x)(), Sv = null !== Pv && zv.prizeGoals.some(((vv, zv) => Pv[zv] >= vv.target));
      return (0, tv.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, tv.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: hv(Sv ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, tv.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: zv.prizeGoals.map(((vv, zv) => {
            const Sv = null === Pv ? null : Math.min(Pv[zv], vv.target);
            return (0, tv.jsxs)(Cv.Fragment, {
              children: [zv > 0 && (0, tv.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: hv("gameEvents:goalsOr")
              }), (0, tv.jsxs)("div", {
                className: av()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Sv === vv.target
                }),
                children: [(0, tv.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: hv(vv.labelKey)
                }), (0, tv.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, tv.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Sv && void 0 !== Sv ? Sv : 0) / vv.target * 100 + "%"
                    }
                  }), null !== Sv && (0, tv.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Sv.toLocaleString(), " / ", vv.target.toLocaleString()]
                  })]
                })]
              })]
            }, vv.board)
          }))
        })]
      })
    }
    var Av = Pv(1534),
      Lv = Pv(1578),
      Hv = Pv(1024),
      Mv = Pv(721),
      yv = Pv(3236);

    function Bv(vv) {
      let {
        gameNameWithVariation: zv
      } = vv;
      const Pv = (0, Av.M)(zv),
        [hv, Sv] = (0, Cv.useState)(null);
      if ((0, Cv.useEffect)((() => {
          if (!Pv) return;
          let vv = !0;
          return (0, Lv.e)(Pv).then((zv => {
            vv && Sv(zv)
          })).catch((vv => {
            console.error(`Failed to load the page copy for ${Pv.name}`, vv)
          })), () => {
            vv = !1
          }
        }), [Pv]), !Pv || !hv || hv.name !== Pv.name) return null;
      const ev = (0, Lv.d)(hv),
        gv = new Set((0, Hv.d)((0, Mv.k)()).map((vv => (0, Av.C)(vv)))),
        pv = hv.similarGames.filter((vv => gv.has((0, Av.C)(vv))));
      return (0, tv.jsx)("div", {
        className: "GamePageContent",
        children: (0, tv.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, tv.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, tv.jsx)("h2", {
              children: ev.whatIs
            }), hv.whatIs.map((vv => (0, tv.jsx)("p", {
              children: vv
            }, vv)))]
          }), (0, tv.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, tv.jsx)("h2", {
              children: ev.howToPlay
            }), hv.howToPlay.map((vv => (0, tv.jsx)("p", {
              children: vv
            }, vv)))]
          }), (0, tv.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, tv.jsx)("h2", {
              children: ev.features
            }), (0, tv.jsx)("ul", {
              children: hv.features.map((vv => (0, tv.jsx)("li", {
                children: vv
              }, vv)))
            })]
          }), (0, tv.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, tv.jsx)("h2", {
              children: ev.tips
            }), (0, tv.jsx)("ul", {
              children: hv.tips.map((vv => (0, tv.jsx)("li", {
                children: vv
              }, vv)))
            })]
          }), (0, tv.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, tv.jsx)("h2", {
              children: ev.faq
            }), hv.faq.map((vv => {
              let {
                question: zv,
                answer: Pv
              } = vv;
              return (0, tv.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, tv.jsx)("h3", {
                  children: zv
                }), (0, tv.jsx)("p", {
                  children: Pv
                })]
              }, zv)
            }))]
          }), pv.length > 0 && (0, tv.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, tv.jsx)("h2", {
              children: ev.similarGames
            }), (0, tv.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: pv.map((vv => (0, tv.jsx)("li", {
                children: (0, tv.jsx)(yv.i, {
                  source: {
                    type: "game",
                    gameNameWithVariation: vv
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, vv)))
            })]
          })]
        })
      })
    }
    var Jv = Pv(1042),
      Ev = Pv(73),
      ov = Pv(1114),
      bv = Pv(9054),
      rv = Pv(1622),
      kv = Pv(1505),
      Xv = Pv(1492),
      uv = Pv(1592),
      vz = Pv(1447),
      zz = Pv(1336),
      Pz = Pv(35899),
      hz = Pv(1221),
      Sz = Pv(1002),
      ez = Pv(312),
      gz = Pv(1011),
      pz = Pv(1529),
      dz = Pv(8580),
      Nz = Pv(22),
      lz = Pv(2396),
      Tz = Pv(763),
      Wz = Pv(1209),
      wz = Pv(6225),
      az = Pv(3247);

    function sz(vv) {
      let {
        preview: zv,
        isBroken: Pv
      } = vv;
      const hv = null === zv ? null : (0, ev.g)(zv, "small"),
        gv = (0, Sv.f)(null !== hv && void 0 !== hv ? hv : ev.r);
      return null === zv ? (0, tv.jsx)("div", {
        className: av()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: Pv
        }),
        children: (0, tv.jsx)(Jv.b, {
          name: Pv ? "triangle-exclamation" : "star"
        })
      }) : (0, tv.jsx)("div", {
        className: av()("FeaturedGamesPopupSlotThumbnail", pv.g),
        style: (0, pv.e)(gv),
        role: "img",
        "aria-label": zv.name,
        children: (0, tv.jsx)(pv.b, {
          image: gv
        })
      })
    }

    function Cz(vv) {
      let {
        schematicId: zv,
        gameName: Pv
      } = vv;
      const {
        userContext: Sv
      } = (0, jv.d)(), ev = (0, az.b)(), [gv, pv] = (0, Cv.useState)(null), [dv, Nv] = (0, Cv.useState)(null), [lv, Tv] = (0, Cv.useState)(!1), wv = (0, Cv.useCallback)((() => {
        Nv(null), Kv.e.getFeaturedGames(Sv).then((vv => {
          ev.current && pv(vv.slots)
        })).catch((vv => {
          console.error("Failed to get featured games", vv), ev.current && Nv("Failed to load featured games")
        }))
      }), [Sv, ev]);
      (0, Cv.useEffect)((() => {
        wv()
      }), [wv]);
      const av = (vv, zv) => {
        lv || (Tv(!0), Kv.e.setFeaturedGame(Sv, vv, zv).then((() => {
          ev.current && wv()
        })).catch((vv => {
          console.error("Failed to set featured game", vv), ev.current && Nv("Failed to update the featured slot")
        })).finally((() => {
          ev.current && Tv(!1)
        })))
      };
      return (0, tv.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, tv.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !gv && !dv && (0, tv.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, tv.jsx)(Uv.c, {})
        }), dv && (0, tv.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: dv
        }), gv && (0, tv.jsxs)(tv.Fragment, {
          children: [(0, tv.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: gv.map((vv => {
              const Pv = vv.schematicId === zv,
                Sv = null === vv.schematicId,
                {
                  categoryGroup: ev
                } = hv.D[vv.slotId];
              return (0, tv.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, tv.jsx)(sz, {
                  preview: vv.preview,
                  isBroken: !Sv
                }), (0, tv.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, tv.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, hv.eb)(ev), " \xb7 position", " ", (0, hv.E)(vv.slotId, hv.Ab) + 1, " of", " ", (0, hv.zb)(ev, hv.Ab)]
                  }), Sv && (0, tv.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Sv && null !== vv.preview && (0, tv.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: vv.preview.name
                  }), !Sv && null === vv.preview && (0, tv.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, tv.jsx)(Jv.b, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, tv.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Sv && (0, tv.jsxs)(Wv.l, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      av(vv.slotId, zv)
                    },
                    disabled: lv,
                    children: [(0, tv.jsx)(Jv.b, {
                      name: "star"
                    }), " Feature here"]
                  }), !Sv && !Pv && (0, tv.jsxs)(Wv.K, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      av(vv.slotId, zv)
                    },
                    disabled: lv,
                    children: [(0, tv.jsx)(Jv.b, {
                      name: "star"
                    }), " Replace"]
                  }), !Sv && (0, tv.jsxs)(Wv.A, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      av(vv.slotId, null)
                    },
                    disabled: lv,
                    children: [(0, tv.jsx)(Jv.b, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, vv.slotId)
            }))
          }), (0, tv.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var iz = Pv(4437),
      cz = Pv(4351),
      Gz = Pv(3329);
    const mz = 8,
      jz = 12;

    function fz(vv) {
      let {
        customLobbies: zv,
        favouriteLobbies: Pv,
        toggleLikeLobby: hv,
        showReport: Sv
      } = vv;
      const [ev, gv] = (0, Cv.useState)(mz);
      return (0, Cv.useEffect)((() => {
        if (ev >= zv.length) return;
        let vv = !0;
        return (0, Gz.e)().then((() => {
          vv && gv(ev + jz)
        })), () => {
          vv = !1
        }
      }), [ev, zv.length]), (0, tv.jsx)(tv.Fragment, {
        children: zv.slice(0, ev).map((vv => (0, tv.jsx)(cz.f, {
          customLobby: vv,
          favouriteLobbies: Pv,
          toggleLikeLobby: hv,
          showReport: Sv
        }, vv.name)))
      })
    }
    var Fz = Pv(4359),
      Yz = Pv(4375),
      nz = Pv(4329),
      Oz = Pv(3322),
      Dz = Pv(8578),
      Kz = Pv(209);
    const Vz = {
      skyblock: [Pv(35922).d]
    };
    var Uz = Pv(626);
    const Rz = {
      listedVariations: null,
      backgroundImage: ev.r,
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

    function xz(vv, zv) {
      const Pv = Tz.h[vv.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, ev.g)(vv, "large"),
        badges: [],
        category: vv.gameCategory,
        title: void 0 !== (null === Pv || void 0 === Pv ? void 0 : Pv.title) ? zv(Pv.title) : vv.name,
        variationTitle: null,
        description: void 0 !== (null === Pv || void 0 === Pv ? void 0 : Pv.description) ? zv(Pv.description) : vv.description,
        ownerSocialPreviewWithoutLocation: "owner" in vv ? vv.owner : null,
        ccu: vv.ccu,
        favourites: vv.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in vv ? vv.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function tz(vv) {
      var zv, Pv, hv;
      return null !== (zv = null !== (Pv = (0, Kz.m)() ? function(vv) {
        for (const [zv, Pv] of Object.entries(Vz)) {
          const hv = [zv, ...Pv.map((vv => (0, ez.Lb)(zv, vv)))];
          if (hv.includes(vv)) return hv
        }
        return null
      }(vv) : null) && void 0 !== Pv ? Pv : null === (hv = Tz.e[vv]) || void 0 === hv ? void 0 : hv.listedVariations) && void 0 !== zv ? zv : null
    }

    function qz() {
      const {
        gameNameWithVariation: vv
      } = (0, kv.B)();
      if ((0, Cv.useEffect)(Oz.u, []), vv && (0, hz.n)(vv)) return (0, tv.jsx)(Iz, {
        urlId: vv
      }, vv);
      const zv = vv && (0, Sz.l)(vv) ? vv : "firstParty";
      return (0, tv.jsx)(Qz, {}, zv)
    }

    function Iz(vv) {
      let {
        urlId: zv
      } = vv;
      const {
        userContext: Pv,
        isUserContextUpdating: hv
      } = (0, jv.d)(), Sv = (0, Cv.useMemo)((() => (0, rv.f)(zv)), [zv]);
      (0, Cv.useMemo)((() => {
        if (null === Sv) return;
        const vv = ov.userContextManager.peekCurrentUserContext();
        (null !== vv ? Kv.e.getGame(vv, Sv.schematicId) : ov.userContextManager.getCurrentUserContext().then((vv => Kv.e.getGame(vv, Sv.schematicId)))).catch((vv => {
          console.error(`Failed to get the custom game ${Sv.schematicId}`, vv), (0, rv.c)(zv)
        }))
      }), [Sv, zv]);
      const [ev, gv] = (0, Cv.useState)(null), pv = (0, bv.c)();
      (0, Cv.useEffect)((() => {
        if (null !== Sv || hv) return;
        let vv = !0;
        return Kv.e.getGameByUrlId(Pv, zv).then((Pv => {
          vv && gv({
            urlId: zv,
            game: Pv
          })
        })).catch((Pv => {
          console.error(`Failed to find the custom game with urlId ${zv}`, Pv), vv && (0, Xv.navigateToHomePage)()
        })), () => {
          vv = !1
        }
      }), [zv, Sv, hv, Pv]);
      const dv = null !== Sv && void 0 !== Sv ? Sv : (null === ev || void 0 === ev ? void 0 : ev.urlId) === zv ? ev.game : null;
      return null === dv ? (0, tv.jsx)(Uv.c, {}) : pv ? (0, tv.jsx)(Qz, {
        gameNameWithVariation: (0, Sz.u)(dv.schematicId),
        knownCustomGame: dv
      }, dv.schematicId) : null
    }

    function Qz(vv) {
      var zv, Pv, gv, wv, Dv, Vv, Uv, xv;
      let {
        gameNameWithVariation: qv,
        knownCustomGame: Iv = null
      } = vv;
      const {
        t: Zv
      } = (0, dv.x)();
      (0, lz.g)();
      const Lv = (0, lz.o)(),
        {
          userContext: Hv,
          isUserContextUpdating: Mv
        } = (0, jv.d)(),
        yv = (0, nz.h)(),
        ov = (0, Xv.useNavigatePreserveSearch)(),
        bv = (0, kv.B)(),
        rv = (0, Cv.useMemo)((() => qv ? {
          gameNameWithVariation: qv
        } : bv), [qv, bv]),
        vz = (0, dz.b)(rv),
        hz = (0, Cv.useMemo)((() => {
          const vv = function(vv) {
            var zv, Pv;
            const hv = tz(vv);
            if (!hv || 0 === hv.length || hv.includes(vv)) return vv;
            const Sv = Nv.h.getItem((0, cv.i)(vv));
            if (Sv && hv.includes(Sv)) return Sv;
            return null !== (zv = null === (Pv = Tz.e[vv]) || void 0 === Pv ? void 0 : Pv.defaultListedVariation) && void 0 !== zv ? zv : hv[0]
          }(vz.gameNameWithVariation);
          return vv === vz.gameNameWithVariation ? vz : {
            ...vz,
            gameNameWithVariation: vv
          }
        }), [vz]);
      (0, Cv.useEffect)((() => {
        const vv = vz.gameNameWithVariation;
        hz.gameNameWithVariation !== vv && vv !== (0, ez.Pb)(vv) && ov((0, Av.G)(hz.gameNameWithVariation), {
          replace: !0
        })
      }), [hz.gameNameWithVariation, vz.gameNameWithVariation, ov]);
      const [az, sz] = (0, Cv.useState)(""), Gz = Cv.useRef(null), [mz, jz] = (0, Cv.useState)(), Oz = (0, Sz.l)(hz.gameNameWithVariation), Kz = (0, Cv.useMemo)((() => Oz ? null : function(vv, zv, Pv) {
        var hv, Sv;
        const gv = Tz.e[vv];
        return (0, Uz.N)(gv) ? null : {
          listedVariations: tz(vv),
          backgroundImage: (0, ev.l)(vv, (0, ev.d)(gv)),
          badges: (0, lv.filterBadges)(gv.badges),
          category: gv.type,
          title: Pv(gv.title),
          variationTitle: gv.variationTitle ? Pv(gv.variationTitle) : null,
          description: Pv(gv.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== zv ? null !== (hv = zv[vv]) && void 0 !== hv ? hv : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: gv.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: gv.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (Sv = gv.canCreateCustomLobbies) || void 0 === Sv || Sv,
          countdownInformation: (0, cv.f)(vv)
        }
      }(hz.gameNameWithVariation, Lv, Zv)), [Oz, hz.gameNameWithVariation, Lv, Zv]), [Vz, qz] = (0, Cv.useState)(!1), [Iz, Qz] = (0, Cv.useState)((() => Iv ? xz(Iv, Zv) : Rz)), Az = null !== Kz && void 0 !== Kz ? Kz : Iz, [Lz] = (0, Cv.useState)(Az === Rz), Hz = (0, Sv.f)(Az.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: Mz,
        recentlyPlayedCustomLobbies: yz
      } = (0, Cv.useMemo)((() => function(vv, zv, Pv, hv) {
        var Sv;
        const ev = vv => {
            const Pv = (0, Sz.q)(vv),
              hv = zv.find((zv => "custom" === zv.type ? zv.schematicId === Pv : zv.gameNameWithVariation === vv));
            return hv ? [...hv.recentLobbies] : []
          },
          gv = (0, lv.getRecentGameNameWithVariationLobbiesKey)(vv),
          pv = null !== (Sv = Nv.h.getItem(gv)) && void 0 !== Sv ? Sv : [],
          dv = [...ev(vv), ...pv],
          Tv = [];
        for (const Nv of dv)(0, Wz.S)(Nv) && !Tv.includes(Nv) && Tv.push(Nv);
        let Wv = dv;
        if (Pv) {
          const vv = ev("classic_worlds"),
            zv = dv.filter((zv => !vv.includes(zv)));
          Wv = [...vv, ...zv]
        }
        const wv = [],
          av = !1 === hv ? [] : Wv;
        for (const Nv of av)(0, Wz.S)(Nv) || wv.includes(Nv) || wv.push(Nv);
        return {
          recentlyPlayedPublicLobbies: Tv,
          recentlyPlayedCustomLobbies: wv
        }
      }(hz.gameNameWithVariation, yv, Az.showWorldsInsteadOfCustomLobbies, Az.canCreateCustomLobbies)), [hz.gameNameWithVariation, yv, Az.showWorldsInsteadOfCustomLobbies, Az.canCreateCustomLobbies]), [Bz, Jz] = (0, Cv.useState)(!0), [Ez, oz] = (0, Cv.useState)([]), [bz, rz] = (0, Cv.useState)(null), [kz, Xz] = (0, Cv.useState)("explore"), uz = (0, Cv.useRef)(!1), vP = (0, Cv.useCallback)((vv => {
        (0, iv.unstable_batchedUpdates)((() => {
          jz(vv), Qz((zv => ({
            ...xz(vv, Zv),
            isFavourite: zv.isFavourite
          })))
        }))
      }), [Zv]);
      (0, Cv.useEffect)((() => {
        null === Nz.c.get("gameEntrySource") && (0, Nz.g)("gameInformationPageDirect")
      }), []);
      const zP = (0, Cv.useRef)(null);
      (0, Cv.useEffect)((() => {
        const vv = vv => {
            zP.current = vv.target instanceof Element ? vv.target.closest("a, button") : null
          },
          zv = vv => {
            "Tab" === vv.key && (zP.current = null)
          };
        return document.addEventListener("pointerdown", vv, !0), document.addEventListener("keydown", zv, !0), () => {
          document.removeEventListener("pointerdown", vv, !0), document.removeEventListener("keydown", zv, !0)
        }
      }), []), (0, fv.d)("Enter", (vv => {
        const zv = vv.target instanceof Element ? vv.target : null;
        if (vv.defaultPrevented || null !== zv && void 0 !== zv && zv.closest("input, textarea, select")) return;
        const Pv = null === zv || void 0 === zv ? void 0 : zv.closest("a, button");
        Pv && Pv !== zP.current || (vv.preventDefault(), lP())
      })), (0, Fv.c)(Xv.navigateToHomePage);
      const PP = Mz.length > 0 || yz.length > 0,
        hP = !Az.useRejoinLastLobbyButton || 0 === Mz.length,
        SP = Oz && null === Az.ownerSocialPreviewWithoutLocation,
        eP = Hv.getPlayerName() === (null === mz || void 0 === mz || null === (zv = mz.owner) || void 0 === zv ? void 0 : zv.name),
        gP = null !== (Pv = null === (gv = Az.badges.find((vv => "event" === vv.type))) || void 0 === gv ? void 0 : gv.event) && void 0 !== Pv ? Pv : null,
        pP = hP ? Wv.j : Wv.d,
        dP = (0, tv.jsx)(Tv.h, {
          tooltipInner: (0, tv.jsx)("div", {
            children: Zv("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, tv.jsx)(pP, {
            className: "GameInformationButton",
            padDefaultFocus: hP,
            showPress: !0,
            onClick: () => {
              lP()
            },
            children: (0, tv.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [hP && (0, tv.jsxs)(tv.Fragment, {
                children: [(0, tv.jsx)(Jv.b, {
                  name: "play"
                }), " "]
              }), Zv("homePage:quickPlay")]
            })
          })
        });
      (0, Cv.useEffect)((() => {
        if (!Oz || Mv) return;
        let vv = !0;
        const zv = (0, Sz.q)(hz.gameNameWithVariation);
        return Kv.e.getGame(Hv, zv).then((zv => {
          vv && vP(zv)
        })).catch((zv => {
          console.error("Failed to get Custom Game information", zv), vv && (0, Xv.navigateToHomePage)()
        })), Kv.e.getFavouriteGames(Hv).then((Pv => {
          vv && Qz((vv => ({
            ...vv,
            isFavourite: Pv.includes(zv)
          })))
        })).catch((zv => {
          console.error("Failed to get favourite games", zv), vv && qz(!0)
        })), () => {
          vv = !1
        }
      }), [Oz, Mv, hz.gameNameWithVariation, vP, Hv]);
      const NP = !Oz && null === Kz;

      function lP(vv) {
        (0, Dz.g)(), ov((0, Gv.e)(hz.gameNameWithVariation, vv))
      }(0, Cv.useEffect)((() => {
        NP && (0, Xv.navigateToHomePage)()
      }), [NP]), (0, Cv.useEffect)((() => {
        if (!1 === Az.canCreateCustomLobbies) return;
        let vv = !0;
        return null !== Az.showWorldsInsteadOfCustomLobbies && !1 === Mv && (Jz(!0), Kv.e.getFavouriteLobbies(Hv).then((vv => {
          rz(vv)
        })), Kv.e.getOpenCustomLobbies(Hv, {
          gameNameWithVariation: Az.showWorldsInsteadOfCustomLobbies ? "classic" : hz.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === kz,
          onlyFavouriteLobbies: "favourite" === kz
        }).then((zv => {
          vv && (0, iv.unstable_batchedUpdates)((() => {
            oz(zv), Jz(!1)
          }))
        })).catch((zv => {
          console.error("Failed to get open custom lobbies", zv), vv && Jz(!1)
        }))), () => {
          vv = !1
        }
      }), [Mv, hz, kz, Az.showWorldsInsteadOfCustomLobbies, Az.canCreateCustomLobbies, Hv]);
      const TP = (0, Cv.useCallback)((async vv => {
          try {
            if (!bz) return;
            bz.includes(vv) ? (Kv.e.unfavouriteLobby(Hv, vv), rz(bz.filter((zv => zv !== vv)))) : (Kv.e.favouriteLobby(Hv, vv).catch((vv => {
              console.error("Failed to favourite lobby", vv)
            })), rz([...bz, vv]))
          } catch (zv) {
            console.error("Failed to like lobby", zv)
          }
        }), [Hv, bz]),
        WP = (null === mz || void 0 === mz ? void 0 : mz.schematicId) === (0, Sz.q)(vz.gameNameWithVariation) ? mz : null,
        wP = WP && (0, Av.N)(vz.gameNameWithVariation, (vv => Zv(vv)), WP);
      (0, uv.g)(WP && (0, Av.G)(vz.gameNameWithVariation, WP));
      const aP = Ev.featureFlags.canUseCustomLobbies && !0 === Az.canCreateCustomLobbies,
        sP = (0, tv.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, tv.jsx)(Bv, {
            gameNameWithVariation: hz.gameNameWithVariation
          })
        });
      return (0, tv.jsx)(tv.Fragment, {
        children: (0, tv.jsxs)("article", {
          className: av()("GameInformation", {
            GameInformationFadeIn: Lz,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (wv = Az.countdownInformation) || void 0 === wv ? void 0 : wv.type)
          }),
          children: [wP && (0, tv.jsx)(mv.e, {
            meta: wP
          }), (0, tv.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, tv.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, tv.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, tv.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, tv.jsx)("div", {
                  className: av()("GameInformationTopBackgroundImage", pv.g),
                  style: (0, pv.e)(Hz),
                  children: (0, tv.jsx)(pv.b, {
                    image: Hz
                  })
                })]
              }), (0, tv.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, tv.jsx)(iz.d, {}), (0, tv.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, tv.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, tv.jsxs)("div", {
                      className: av()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: SP
                      }),
                      children: [Az.badges.map((vv => (0, tv.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${vv.type}`,
                        children: (0, tv.jsx)(Ov.e, {
                          badge: vv
                        })
                      }, vv.type))), Oz && (0, tv.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, tv.jsx)(nv.c, {
                          text: (0, hv.W)({
                            type: "playerCrafted"
                          })
                        })
                      }), Az.category && (0, tv.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, tv.jsx)(nv.c, {
                          text: [{
                            str: (0, hv.Z)(Az.category).toUpperCase()
                          }]
                        })
                      }), null !== Az.ccu && (0, tv.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, tv.jsx)(Jv.b, {
                          name: "user"
                        }), (0, Wz.X)(Az.ccu), " online"]
                      }), null !== Az.ownerSocialPreviewWithoutLocation && (0, tv.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, tv.jsx)("span", {
                          children: "Made by"
                        }), (0, tv.jsx)(Rv.e, {
                          playerSocialPreview: {
                            ...Az.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), SP && (0, tv.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, tv.jsx)("span", {
                          children: "Made by"
                        }), (0, tv.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== Az.favourites && (null !== Az.isFavourite || Oz && !Vz) && (0, tv.jsx)(Wv.m, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== uz.current && (uz.current = !0, null !== Az.isFavourite)) {
                              const vv = (0, Sz.q)(hz.gameNameWithVariation);
                              let zv;
                              Az.isFavourite ? (zv = -1, Kv.e.unfavouriteGame(Hv, vv).catch((vv => {
                                console.error("Failed to get unfavourite game", vv)
                              })).finally((() => {
                                uz.current = !1
                              }))) : (zv = 1, Kv.e.favouriteGame(Hv, vv).catch((vv => {
                                console.error("Failed to get favourite game", vv)
                              })).finally((() => {
                                uz.current = !1
                              }))), Qz((vv => ({
                                ...vv,
                                isFavourite: !vv.isFavourite
                              }))), Qz((vv => ({
                                ...vv,
                                favourites: vv.favourites + zv
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (Dv = Az.isFavourite) && void 0 !== Dv && Dv,
                        disabled: null === Az.isFavourite,
                        className: av()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === Az.isFavourite
                        })
                      }, null === Az.isFavourite ? "pending" : "known"), Oz && !SP && Ev.featureFlags.useSocialFeatures && !eP && (0, tv.jsx)(Fz.b, {
                        targetType: "customGame",
                        targetId: (0, Sz.q)(hz.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (Hv.playerHasRank("developer") || Hv.playerHasRank("admin") && eP) && (0, tv.jsxs)(Wv.j, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          ov((0, pz.o)((0, gz.i)(hz.gameNameWithVariation, !0)))
                        },
                        children: [(0, tv.jsx)(Jv.b, {
                          name: "star-christmas"
                        }), " ", Zv("studio:viewInStudio")]
                      }), Oz && Hv.playerHasRank("developer") && (0, tv.jsxs)(Wv.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, wz.e)({
                            schematicId: (0, Sz.q)(hz.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, tv.jsx)(Jv.b, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), Oz && Hv.playerHasRank("developer") && (0, tv.jsxs)(Wv.d, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          zz.NotificationProvider.showCustomPopup({
                            body: () => (0, tv.jsx)(Cz, {
                              schematicId: (0, Sz.q)(hz.gameNameWithVariation),
                              gameName: Az.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, tv.jsx)(Jv.b, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (Vv = Az.countdownInformation) || void 0 === Vv ? void 0 : Vv.type) && (0, tv.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, tv.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, tv.jsx)(Yv.e, {
                            toTime: Az.countdownInformation.countdownToTime
                          })]
                        }), (0, tv.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: Az.countdownInformation.previewText
                        })]
                      })]
                    }, SP ? "pending" : "shown"), (0, tv.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, tv.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, tv.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [Az.title, " ", Az.variationTitle && (null === (Uv = Tz.e[hz.gameNameWithVariation]) || void 0 === Uv ? void 0 : Uv.variationThumbnailUseBigRatio) && (0, tv.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: Az.variationTitle
                          })]
                        })
                      }), Az.listedVariations && Az.listedVariations.length > 0 && (0, tv.jsx)("div", {
                        className: av()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (xv = Tz.e[hz.gameNameWithVariation]) || void 0 === xv ? void 0 : xv.variationThumbnailUseBigRatio
                        }),
                        children: Az.listedVariations.map((vv => {
                          var zv, Pv;
                          return (0, tv.jsxs)(Zz, {
                            variation: vv,
                            isSelected: hz.gameNameWithVariation === vv,
                            children: [null !== Lv && (0, tv.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, tv.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, tv.jsx)(Jv.b, {
                                  name: "user"
                                }), " ", (0, Wz.X)(null !== (zv = Lv[vv]) && void 0 !== zv ? zv : 0)]
                              })
                            }), (0, tv.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: Zv(null !== (Pv = Tz.e[vv].variationTitle) && void 0 !== Pv ? Pv : Tz.e[vv].title)
                            }), (0, tv.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, lv.filterBadges)(Tz.e[vv].badges).map((vv => (0, tv.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + vv.type,
                                children: (0, tv.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, tv.jsx)(Ov.e, {
                                    badge: vv
                                  })
                                })
                              }, vv.type)))
                            })]
                          }, vv)
                        }))
                      })]
                    }), Az.description && (0, tv.jsx)("p", {
                      className: "GameInformationDescription",
                      children: Az.description
                    })]
                  }), (0, tv.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, tv.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!hP && (0, tv.jsx)(Tv.h, {
                        tooltipInner: (0, tv.jsx)("div", {
                          children: Zv("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, tv.jsx)(Wv.j, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            lP(Mz[0])
                          },
                          children: (0, tv.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, tv.jsx)(Jv.b, {
                              name: "play"
                            }), " ", Zv("homePage:rejoinLobbyNumber", {
                              number: Mz[0]
                            })]
                          })
                        })
                      }), hP && dP]
                    }), (0, tv.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!hP && dP, (0, tv.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, tv.jsx)(Jv.b, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, tv.jsx)(sv.c, {
                          className: "JoinLobbyInput",
                          placeholderText: Zv("homePage:lobbyName"),
                          maxLength: Wz.U,
                          domRef: Gz,
                          onValueChange: vv => {
                            vv = (0, Wz.ub)(vv), sz(vv)
                          },
                          onEnter: () => {
                            0 === az.length ? lP(Mz[0]) : lP(az)
                          }
                        }), (0, tv.jsx)(Wv.d, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === az.length ? lP(Mz[0]) : lP(az)
                          },
                          children: Zv("general:join")
                        })]
                      })]
                    }), (0, tv.jsxs)("section", {
                      className: av()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !PP
                      }),
                      children: [(0, tv.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, tv.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, tv.jsx)(Jv.b, {
                            name: "clock-rotate-left"
                          }), PP && (0, tv.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: Zv("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, tv.jsx)(Yz.c, {
                        lobbyGroups: [Mz, yz],
                        onLobbyClick: vv => {
                          lP(vv)
                        },
                        keyPrefix: hz.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== gP && (0, tv.jsx)(Qv, {
                eventName: gP
              })]
            }), aP && (0, tv.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, tv.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, tv.jsxs)("div", {
                  className: av()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === Az.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === Az.showWorldsInsteadOfCustomLobbies && (0, tv.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, tv.jsx)(Jv.b, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, tv.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, tv.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Zv("game:worlds")]
                    })]
                  }), !1 === Az.showWorldsInsteadOfCustomLobbies && (0, tv.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, tv.jsx)(Jv.b, {
                      name: "joystick"
                    }), (0, tv.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, tv.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Zv("homePage:customLobbies")]
                    })]
                  }), (0, tv.jsx)(Wv.K, {
                    onClick: () => {
                      Xz("explore")
                    },
                    active: "explore" === kz,
                    children: Zv("general:explore")
                  }), (0, tv.jsx)(Wv.K, {
                    onClick: () => {
                      Xz("favourite")
                    },
                    active: "favourite" === kz,
                    children: Zv("homePage:favouriteLobbies")
                  }), (0, tv.jsx)(Wv.K, {
                    onClick: () => {
                      Xz("owned")
                    },
                    active: "owned" === kz,
                    children: Zv("homePage:ownedLobbies")
                  })]
                }), (0, tv.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, tv.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, tv.jsx)(cz.b, {
                      label: "Create",
                      onClick: () => {
                        zz.NotificationProvider.showCustomPopup({
                          body: vv => (0, tv.jsx)(Pz.CreateCustomLobby, {
                            gameNameWithVariation: hz.gameNameWithVariation,
                            close: vv
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === Bz && (0, tv.jsx)(cz.g, {}), !1 === Bz && (0, tv.jsx)(fz, {
                      customLobbies: Ez,
                      favouriteLobbies: bz,
                      toggleLikeLobby: TP,
                      showReport: Ev.featureFlags.useSocialFeatures && "owned" !== kz
                    })]
                  }), sP]
                })]
              })
            })]
          }), !aP && sP]
        })
      })
    }

    function Zz(vv) {
      let {
        variation: zv,
        isSelected: Pv,
        children: hv
      } = vv;
      const dv = Tz.e[zv],
        lv = (0, ev.l)(zv, (0, ev.n)(dv)),
        Tv = (0, Sv.f)(lv),
        Wv = (0, gv.e)([(0, ev.h)(zv, (0, ev.d)(dv))]);
      return (0, tv.jsxs)(Xv.LinkPreserveSearch, {
        to: (0, Av.G)(zv),
        replace: !0,
        className: av()("GameInformationVariation", pv.g, {
          SelectedGameInformationVariation: Pv
        }),
        onClick: vv => {
          if (!(0, vz.b)(vv)) return;
          const Pv = (0, cv.i)(zv);
          Nv.h.setItem(Pv, zv)
        },
        onMouseEnter: Wv.start,
        onMouseLeave: Wv.cancel,
        onFocus: Wv.start,
        onBlur: Wv.cancel,
        style: (0, pv.e)(Tv),
        children: [(0, tv.jsx)(pv.b, {
          image: Tv
        }), hv]
      })
    }
  },
  6225: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => iv
    });
    var hv = Pv(52),
      Sv = Pv(1442),
      ev = Pv(1482),
      gv = Pv(3247),
      pv = Pv(1108),
      dv = Pv(1327),
      Nv = Pv(1344),
      lv = Pv(1042),
      Tv = Pv(1035),
      Wv = Pv.n(Tv),
      wv = Pv(1082);

    function av(vv) {
      let {
        info: zv,
        className: Pv
      } = vv;
      return (0, wv.jsxs)("div", {
        className: Wv()("GameApprovalInfoDetails", Pv),
        children: [(0, wv.jsxs)("div", {
          className: Wv()("GameApprovalInfoSummary", zv.overallPassed ? "Passed" : "Failed"),
          children: [(0, wv.jsx)(lv.b, {
            name: zv.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, wv.jsx)("span", {
            children: zv.summary
          })]
        }), zv.rows.length > 0 && (0, wv.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: zv.rows.map((vv => (0, wv.jsxs)("div", {
            className: Wv()("GameApprovalInfoRow", vv.passed ? "Passed" : "Failed"),
            children: [(0, wv.jsx)(lv.b, {
              name: vv.passed ? "check" : "xmark"
            }), (0, wv.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, wv.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: vv.label
              }), (0, wv.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: vv.valueText
              })]
            })]
          }, vv.label)))
        })]
      })
    }
    var sv = Pv(1175),
      Cv = Pv(1336);

    function iv(vv) {
      Cv.NotificationProvider.showCustomPopup({
        body: () => (0, wv.jsx)(cv, {
          ...vv
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function cv(vv) {
      let {
        schematicId: zv,
        canOverride: Pv,
        onApprovalChanged: Tv
      } = vv;
      const {
        t: Wv
      } = (0, sv.x)(), {
        userContext: Cv
      } = (0, pv.d)(), iv = (0, gv.b)(), [cv, Gv] = (0, hv.useState)(null), [mv, jv] = (0, hv.useState)(null), [fv, Fv] = (0, hv.useState)(!1), Yv = (0, hv.useCallback)((() => {
        jv(null), ev.e.getGameApprovalInfo(Cv, zv).then((vv => {
          iv.current && Gv(vv)
        })).catch((vv => {
          console.error("Failed to get game approval info", vv), iv.current && jv(Wv("studio:approvalLoadFailed"))
        }))
      }), [Cv, zv, iv, Wv]);
      (0, hv.useEffect)((() => {
        Yv()
      }), [Yv]);
      const nv = vv => {
        fv || (Fv(!0), ev.e.setGameApproval(Cv, zv, vv).then((() => {
          null === Tv || void 0 === Tv || Tv(), iv.current && Yv()
        })).catch((vv => {
          console.error("Failed to set game approval", vv)
        })).finally((() => {
          iv.current && Fv(!1)
        })))
      };
      return (0, wv.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, wv.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: Wv("studio:approvalTitle")
        }), !cv && !mv && (0, wv.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, wv.jsx)(dv.c, {})
        }), mv && (0, wv.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: mv
        }), cv && (0, wv.jsxs)(wv.Fragment, {
          children: [(0, wv.jsx)(av, {
            info: cv
          }), Pv && (0, wv.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== cv.manualOverride && (0, wv.jsx)(Nv.h, {
              tooltipInner: (0, wv.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, wv.jsxs)(Sv.j, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  nv(!0)
                },
                disabled: fv,
                children: [(0, wv.jsx)(lv.b, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== cv.manualOverride && (0, wv.jsx)(Nv.h, {
              tooltipInner: (0, wv.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, wv.jsxs)(Sv.A, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  nv(!1)
                },
                disabled: fv,
                children: [(0, wv.jsx)(lv.b, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== cv.manualOverride && (0, wv.jsx)(Nv.h, {
              tooltipInner: (0, wv.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, wv.jsxs)(Sv.d, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  nv(null)
                },
                disabled: fv,
                children: [(0, wv.jsx)(lv.b, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  9054: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev
    });
    var hv = Pv(52),
      Sv = Pv(3329);

    function ev() {
      const [vv, zv] = (0, hv.useState)(!1);
      return (0, hv.useLayoutEffect)((() => {
        let vv = !0;
        return (0, Sv.e)().then((() => {
          vv && zv(!0)
        })), () => {
          vv = !1
        }
      }), []), vv
    }
  },
  8580: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv
    });
    var hv = Pv(1311),
      Sv = Pv(1209),
      ev = Pv(626);

    function gv(vv) {
      return vv = function(vv, zv) {
        var Pv;
        const hv = new URLSearchParams(zv),
          Sv = hv.get("lobby"),
          ev = hv.get("vm"),
          gv = null !== (Pv = Sv) && void 0 !== Pv ? Pv : vv.lobbyName,
          pv = null !== ev && void 0 !== ev ? ev : vv.directJoinVmUrl;
        if (gv === vv.lobbyName && pv === vv.directJoinVmUrl) return vv;
        return {
          ...vv,
          lobbyName: gv,
          directJoinVmUrl: pv
        }
      }(vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), vv = function(vv) {
        if ((0, ev.N)(vv.directJoinVmUrl)) return vv;
        const zv = (0, Sv.db)(vv.directJoinVmUrl);
        null === zv && (vv.directJoinVmUrl = void 0);
        return vv
      }(vv = function(vv) {
        if ((0, ev.N)(vv.gameNameWithVariation)) return vv;
        return vv.gameNameWithVariation = (0, hv.n)(vv.gameNameWithVariation), vv
      }(vv))
    }
  },
  8578: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev,
      g: () => Sv
    });
    let hv = !1;

    function Sv() {
      hv = !0
    }

    function ev() {
      return hv
    }
  },
  35922: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      f: () => hv
    });
    const hv = "skyblockSkills",
      Sv = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);