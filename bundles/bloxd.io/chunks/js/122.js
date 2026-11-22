export const id = 122;
export const ids = [122, 396];
export const modules = {
  35898: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => Ee
    });
    var Dk = ik(302),
      fk = ik(3456),
      Sk = ik(3487),
      bk = ik(3480),
      rk = ik(3475),
      Pk = ik(1172),
      mk = ik(38),
      Mk = ik(1688),
      Kk = ik(1345),
      xk = ik(1410),
      nk = ik(1021),
      Uk = ik.n(nk),
      Hk = ik(1648),
      wk = ik(60),
      lk = ik(75),
      pk = ik(2351),
      yk = ik(1311),
      Yk = ik(1587),
      Lk = ik(1095),
      Ck = ik(3383),
      Ak = ik(4496),
      jk = ik(3442),
      sk = ik(1858),
      dk = ik(3454),
      Vk = ik(1702),
      Fk = ik(1459),
      uk = ik(2130),
      qk = ik(1327),
      Ik = ik(2540),
      zk = ik(4946),
      Qk = ik(1066);
    const vk = 15e3,
      Ek = 2500;

    function hk(kk) {
      var ek;
      let {
        eventName: ik
      } = kk;
      const {
        t: Dk
      } = (0, Pk.D)(), fk = Vk.e[ik], [Sk, bk] = (0, wk.useState)((() => Date.now() >= fk.endsAt.getTime())), [rk, mk] = (0, wk.useState)("overall"), Mk = function(kk, ek) {
        const {
          userContext: ik,
          isUserContextUpdating: Dk
        } = (0, Lk.d)(), fk = `${kk}:${ek}`, [Sk, bk] = (0, wk.useState)({
          requestKey: fk,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, wk.useEffect)((() => {
          if (Dk) return;
          let Sk, rk = !1;
          const Pk = async () => {
            if ("visible" === document.visibilityState) try {
              const Dk = await Fk.b.getGameEventLeaderboard(ik, {
                event: kk,
                scope: ek
              });
              rk || bk({
                requestKey: fk,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Dk
                }
              })
            } catch {
              rk || bk((kk => kk.requestKey === fk && "loaded" === kk.leaderboard.status ? kk : {
                requestKey: fk,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            rk || (Sk = setTimeout(Pk, vk))
          };
          return Pk(), () => {
            rk = !0, clearTimeout(Sk)
          }
        }), [kk, ek, fk, ik, Dk]), Sk.requestKey === fk ? Sk.leaderboard : {
          status: "loading"
        }
      }(ik, rk), Kk = function(kk) {
        const ek = (0, wk.useRef)(null),
          ik = (0, wk.useRef)(0),
          Dk = (0, wk.useRef)(),
          [fk, Sk] = (0, wk.useState)({});
        return (0, wk.useEffect)((() => {
          const fk = null === kk || void 0 === kk ? void 0 : kk.entries;
          if (!fk) return;
          const bk = new Map(fk.map((kk => [kk.player.name, kk.value]))),
            rk = ek.current;
          if (ek.current = bk, null === rk) return;
          const Pk = {};
          for (const [kk, ek] of bk) {
            const Dk = rk.get(kk);
            void 0 !== Dk && ek > Dk && (Pk[kk] = {
              amount: ek - Dk,
              key: ik.current++
            })
          }
          0 !== Object.keys(Pk).length && (Sk(Pk), clearTimeout(Dk.current), Dk.current = setTimeout((() => {
            Sk({})
          }), Ek))
        }), [kk]), (0, wk.useEffect)((() => () => {
          clearTimeout(Dk.current)
        }), []), fk
      }("loaded" === Mk.status ? Mk.leaderboard : null), xk = function(kk) {
        const [ek, ik] = (0, wk.useState)(null), Dk = "loaded" === kk.status ? kk.leaderboard.goalProgress : void 0;
        return (0, wk.useEffect)((() => {
          Dk && ik(Dk)
        }), [Dk]), ek
      }(Mk), nk = uk.g[`profileEffect_${fk.prizePack}`];
      if (Sk) return null;
      const Hk = "loaded" === Mk.status ? Mk.leaderboard : null,
        lk = null !== (ek = null === Hk || void 0 === Hk ? void 0 : Hk.entries) && void 0 !== ek ? ek : null,
        pk = null !== Hk && void 0 !== Hk && Hk.own && null !== lk && !lk.some((kk => kk.isOwn)) ? Hk.own : null;
      return (0, Qk.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, Qk.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, Qk.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, Qk.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, Qk.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, Qk.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Dk("gameEvents:live")]
              }), (0, Qk.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Dk("gameEvents:endsIn"), (0, Qk.jsx)(jk.b, {
                  toTime: fk.endsAt,
                  onReachEndOfCountdown: () => {
                    bk(!0)
                  }
                })]
              })]
            }), (0, Qk.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Dk(fk.titleKey)
            }), (0, Qk.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, Qk.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [nk && (0, Qk.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, Qk.jsx)(nk, {})
                }), (0, Qk.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, Qk.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Dk("gameEvents:prize")
                  }), (0, Qk.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Dk(fk.prizeNameKey)
                  })]
                })]
              }), (0, Qk.jsx)(ak, {
                event: fk,
                progress: xk
              })]
            })]
          }), (0, Qk.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, Qk.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, Qk.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Dk(fk.leaderboard.titleKey)
              }), (0, Qk.jsx)(zk.b, {
                ariaLabel: Dk("gameEvents:leaderboardScope"),
                options: Vk.b.map((kk => ({
                  value: kk,
                  label: Dk(`gameEvents:${kk}Scope`)
                }))),
                value: rk,
                onChange: mk
              })]
            }), "loading" === Mk.status && (0, Qk.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, Qk.jsx)(qk.d, {})
            }), ("unavailable" === Mk.status || "loaded" === Mk.status && null === lk) && (0, Qk.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Dk("gameEvents:leaderboardUnavailable")
            }), null !== lk && 0 === lk.length && (0, Qk.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Dk("friends" === rk ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== lk && lk.length > 0 && (0, Qk.jsx)("ol", {
              className: "GameEventPanelRows",
              children: lk.map((kk => {
                const ek = Kk[kk.player.name];
                return (0, Qk.jsxs)("li", {
                  className: Uk()("GameEventPanelRow", {
                    GameEventPanelRowOwn: kk.isOwn,
                    GameEventPanelRowTop: kk.rank <= 3
                  }),
                  children: [(0, Qk.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", kk.rank]
                  }), (0, Qk.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, Qk.jsx)(Ik.d, {
                      playerSocialPreview: {
                        ...kk.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== ek && (0, Qk.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", ek.amount.toLocaleString()]
                  }, ek.key), (0, Qk.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: kk.value.toLocaleString()
                  })]
                }, kk.player.name)
              }))
            }), pk && (0, Qk.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, Qk.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", pk.rank.toLocaleString()]
              }), (0, Qk.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Dk("gameEvents:yourPlace")
              }), (0, Qk.jsx)("span", {
                className: "GameEventPanelScore",
                children: pk.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function ak(kk) {
      let {
        event: ek,
        progress: ik
      } = kk;
      const {
        t: Dk
      } = (0, Pk.D)(), fk = null !== ik && ek.prizeGoals.some(((kk, ek) => ik[ek] >= kk.target));
      return (0, Qk.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, Qk.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Dk(fk ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, Qk.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: ek.prizeGoals.map(((kk, ek) => {
            const fk = null === ik ? null : Math.min(ik[ek], kk.target);
            return (0, Qk.jsxs)(wk.Fragment, {
              children: [ek > 0 && (0, Qk.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Dk("gameEvents:goalsOr")
              }), (0, Qk.jsxs)("div", {
                className: Uk()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: fk === kk.target
                }),
                children: [(0, Qk.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Dk(kk.labelKey)
                }), (0, Qk.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, Qk.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== fk && void 0 !== fk ? fk : 0) / kk.target * 100 + "%"
                    }
                  }), null !== fk && (0, Qk.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [fk.toLocaleString(), " / ", kk.target.toLocaleString()]
                  })]
                })]
              })]
            }, kk.board)
          }))
        })]
      })
    }
    var Wk = ik(1519),
      tk = ik(1569),
      Xk = ik(1012),
      Bk = ik(714),
      ck = ik(3433);

    function Tk(kk) {
      let {
        gameNameWithVariation: ek
      } = kk;
      const ik = (0, Wk.E)(ek),
        [Dk, fk] = (0, wk.useState)(null);
      if ((0, wk.useEffect)((() => {
          if (!ik) return;
          let kk = !0;
          return (0, tk.g)(ik).then((ek => {
            kk && fk(ek)
          })).catch((kk => {
            console.error(`Failed to load the page copy for ${ik.name}`, kk)
          })), () => {
            kk = !1
          }
        }), [ik]), !ik || !Dk || Dk.name !== ik.name) return null;
      const Sk = (0, tk.f)(Dk),
        bk = new Set((0, Xk.e)((0, Bk.m)()).map((kk => (0, Wk.u)(kk)))),
        rk = Dk.similarGames.filter((kk => bk.has((0, Wk.u)(kk))));
      return (0, Qk.jsx)("div", {
        className: "GamePageContent",
        children: (0, Qk.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, Qk.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Qk.jsx)("h2", {
              children: Sk.whatIs
            }), Dk.whatIs.map((kk => (0, Qk.jsx)("p", {
              children: kk
            }, kk)))]
          }), (0, Qk.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Qk.jsx)("h2", {
              children: Sk.howToPlay
            }), Dk.howToPlay.map((kk => (0, Qk.jsx)("p", {
              children: kk
            }, kk)))]
          }), (0, Qk.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, Qk.jsx)("h2", {
              children: Sk.features
            }), (0, Qk.jsx)("ul", {
              children: Dk.features.map((kk => (0, Qk.jsx)("li", {
                children: kk
              }, kk)))
            })]
          }), (0, Qk.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, Qk.jsx)("h2", {
              children: Sk.tips
            }), (0, Qk.jsx)("ul", {
              children: Dk.tips.map((kk => (0, Qk.jsx)("li", {
                children: kk
              }, kk)))
            })]
          }), (0, Qk.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, Qk.jsx)("h2", {
              children: Sk.faq
            }), Dk.faq.map((kk => {
              let {
                question: ek,
                answer: ik
              } = kk;
              return (0, Qk.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, Qk.jsx)("h3", {
                  children: ek
                }), (0, Qk.jsx)("p", {
                  children: ik
                })]
              }, ek)
            }))]
          }), rk.length > 0 && (0, Qk.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, Qk.jsx)("h2", {
              children: Sk.similarGames
            }), (0, Qk.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: rk.map((kk => (0, Qk.jsx)("li", {
                children: (0, Qk.jsx)(ck.g, {
                  source: {
                    type: "game",
                    gameNameWithVariation: kk
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, kk)))
            })]
          })]
        })
      })
    }
    var Zk = ik(1033),
      Ok = ik(99),
      gk = ik(1104),
      Gk = ik(33809),
      Nk = ik(1628),
      Rk = ik(1496),
      Jk = ik(1479),
      ke = ik(1579),
      ee = ik(1417),
      ie = ik(1333),
      De = ik(35902),
      fe = ik(1216),
      Se = ik(996),
      be = ik(314),
      re = ik(1005),
      Pe = ik(1512),
      me = ik(8732),
      Me = ik(22),
      Ke = ik(2499),
      xe = ik(741),
      ne = ik(1207),
      Ue = ik(6357),
      He = ik(3447);

    function we(kk) {
      let {
        preview: ek,
        isBroken: ik
      } = kk;
      const Dk = null === ek ? null : (0, Sk.g)(ek, "small"),
        bk = (0, fk.d)(null !== Dk && void 0 !== Dk ? Dk : Sk.r);
      return null === ek ? (0, Qk.jsx)("div", {
        className: Uk()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: ik
        }),
        children: (0, Qk.jsx)(Zk.d, {
          name: ik ? "triangle-exclamation" : "star"
        })
      }) : (0, Qk.jsx)("div", {
        className: Uk()("FeaturedGamesPopupSlotThumbnail", rk.k),
        style: (0, rk.g)(bk),
        role: "img",
        "aria-label": ek.name,
        children: (0, Qk.jsx)(rk.d, {
          image: bk
        })
      })
    }

    function le(kk) {
      let {
        schematicId: ek,
        gameName: ik
      } = kk;
      const {
        userContext: fk
      } = (0, Lk.d)(), Sk = (0, He.e)(), [bk, rk] = (0, wk.useState)(null), [Pk, mk] = (0, wk.useState)(null), [Mk, Kk] = (0, wk.useState)(!1), nk = (0, wk.useCallback)((() => {
        mk(null), Fk.b.getFeaturedGames(fk).then((kk => {
          Sk.current && rk(kk.slots)
        })).catch((kk => {
          console.error("Failed to get featured games", kk), Sk.current && mk("Failed to load featured games")
        }))
      }), [fk, Sk]);
      (0, wk.useEffect)((() => {
        nk()
      }), [nk]);
      const Uk = (kk, ek) => {
        Mk || (Kk(!0), Fk.b.setFeaturedGame(fk, kk, ek).then((() => {
          Sk.current && nk()
        })).catch((kk => {
          console.error("Failed to set featured game", kk), Sk.current && mk("Failed to update the featured slot")
        })).finally((() => {
          Sk.current && Kk(!1)
        })))
      };
      return (0, Qk.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, Qk.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !bk && !Pk && (0, Qk.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, Qk.jsx)(qk.d, {})
        }), Pk && (0, Qk.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: Pk
        }), bk && (0, Qk.jsxs)(Qk.Fragment, {
          children: [(0, Qk.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: bk.map((kk => {
              const ik = kk.schematicId === ek,
                fk = null === kk.schematicId,
                {
                  categoryGroup: Sk
                } = Dk.L[kk.slotId];
              return (0, Qk.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, Qk.jsx)(we, {
                  preview: kk.preview,
                  isBroken: !fk
                }), (0, Qk.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, Qk.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Dk.mb)(Sk), " \xb7 position", " ", (0, Dk.N)(kk.slotId, Dk.Rb) + 1, " of", " ", (0, Dk.Pb)(Sk, Dk.Rb)]
                  }), fk && (0, Qk.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !fk && null !== kk.preview && (0, Qk.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: kk.preview.name
                  }), !fk && null === kk.preview && (0, Qk.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, Qk.jsx)(Zk.d, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, Qk.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [fk && (0, Qk.jsxs)(xk.t, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Uk(kk.slotId, ek)
                    },
                    disabled: Mk,
                    children: [(0, Qk.jsx)(Zk.d, {
                      name: "star"
                    }), " Feature here"]
                  }), !fk && !ik && (0, Qk.jsxs)(xk.X, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Uk(kk.slotId, ek)
                    },
                    disabled: Mk,
                    children: [(0, Qk.jsx)(Zk.d, {
                      name: "star"
                    }), " Replace"]
                  }), !fk && (0, Qk.jsxs)(xk.R, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Uk(kk.slotId, null)
                    },
                    disabled: Mk,
                    children: [(0, Qk.jsx)(Zk.d, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, kk.slotId)
            }))
          }), (0, Qk.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var pe = ik(4608),
      ye = ik(4530),
      Ye = ik(3521);
    const Le = 8,
      Ce = 12;

    function Ae(kk) {
      let {
        customLobbies: ek,
        favouriteLobbies: ik,
        toggleLikeLobby: Dk,
        showReport: fk
      } = kk;
      const [Sk, bk] = (0, wk.useState)(Le);
      return (0, wk.useEffect)((() => {
        if (Sk >= ek.length) return;
        let kk = !0;
        return (0, Ye.f)().then((() => {
          kk && bk(Sk + Ce)
        })), () => {
          kk = !1
        }
      }), [Sk, ek.length]), (0, Qk.jsx)(Qk.Fragment, {
        children: ek.slice(0, Sk).map((kk => (0, Qk.jsx)(ye.g, {
          customLobby: kk,
          favouriteLobbies: ik,
          toggleLikeLobby: Dk,
          showReport: fk
        }, kk.name)))
      })
    }
    var je = ik(4534),
      se = ik(4552),
      de = ik(4517),
      Ve = ik(3513),
      Fe = ik(8725),
      ue = ik(204);
    const qe = {
      skyblock: [ik(35923).d]
    };
    var Ie = ik(594);
    const ze = {
      listedVariations: null,
      backgroundImage: Sk.r,
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

    function Qe(kk, ek) {
      const ik = xe.h[kk.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, Sk.g)(kk, "large"),
        badges: [],
        category: kk.gameCategory,
        title: void 0 !== (null === ik || void 0 === ik ? void 0 : ik.title) ? ek(ik.title) : kk.name,
        variationTitle: null,
        description: void 0 !== (null === ik || void 0 === ik ? void 0 : ik.description) ? ek(ik.description) : kk.description,
        ownerSocialPreviewWithoutLocation: "owner" in kk ? kk.owner : null,
        ccu: kk.ccu,
        favourites: kk.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in kk ? kk.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function ve(kk) {
      var ek, ik, Dk;
      return null !== (ek = null !== (ik = (0, ue.m)() ? function(kk) {
        for (const [ek, ik] of Object.entries(qe)) {
          const Dk = [ek, ...ik.map((kk => (0, be.Bb)(ek, kk)))];
          if (Dk.includes(kk)) return Dk
        }
        return null
      }(kk) : null) && void 0 !== ik ? ik : null === (Dk = xe.d[kk]) || void 0 === Dk ? void 0 : Dk.listedVariations) && void 0 !== ek ? ek : null
    }

    function Ee() {
      const {
        gameNameWithVariation: kk
      } = (0, Rk.y)();
      if ((0, wk.useEffect)(Ve.q, []), kk && (0, fe.k)(kk)) return (0, Qk.jsx)(he, {
        urlId: kk
      }, kk);
      const ek = kk && (0, Se.j)(kk) ? kk : "firstParty";
      return (0, Qk.jsx)(ae, {}, ek)
    }

    function he(kk) {
      let {
        urlId: ek
      } = kk;
      const {
        userContext: ik,
        isUserContextUpdating: Dk
      } = (0, Lk.d)(), fk = (0, wk.useMemo)((() => (0, Nk.k)(ek)), [ek]);
      (0, wk.useMemo)((() => {
        if (null === fk) return;
        const kk = gk.userContextManager.peekCurrentUserContext();
        (null !== kk ? Fk.b.getGame(kk, fk.schematicId) : gk.userContextManager.getCurrentUserContext().then((kk => Fk.b.getGame(kk, fk.schematicId)))).catch((kk => {
          console.error(`Failed to get the custom game ${fk.schematicId}`, kk), (0, Nk.i)(ek)
        }))
      }), [fk, ek]);
      const [Sk, bk] = (0, wk.useState)(null), rk = (0, Gk.b)();
      (0, wk.useEffect)((() => {
        if (null !== fk || Dk) return;
        let kk = !0;
        return Fk.b.getGameByUrlId(ik, ek).then((ik => {
          kk && bk({
            urlId: ek,
            game: ik
          })
        })).catch((ik => {
          console.error(`Failed to find the custom game with urlId ${ek}`, ik), kk && (0, Jk.navigateToHomePage)()
        })), () => {
          kk = !1
        }
      }), [ek, fk, Dk, ik]);
      const Pk = null !== fk && void 0 !== fk ? fk : (null === Sk || void 0 === Sk ? void 0 : Sk.urlId) === ek ? Sk.game : null;
      return null === Pk ? (0, Qk.jsx)(qk.d, {}) : rk ? (0, Qk.jsx)(ae, {
        gameNameWithVariation: (0, Se.t)(Pk.schematicId),
        knownCustomGame: Pk
      }, Pk.schematicId) : null
    }

    function ae(kk) {
      var ek, ik, bk, nk, Vk, uk, qk, zk;
      let {
        gameNameWithVariation: vk,
        knownCustomGame: Ek = null
      } = kk;
      const {
        t: ak
      } = (0, Pk.D)();
      (0, Ke.g)();
      const tk = (0, Ke.m)(),
        {
          userContext: Xk,
          isUserContextUpdating: Bk
        } = (0, Lk.d)(),
        ck = (0, de.e)(),
        gk = (0, Jk.useNavigatePreserveSearch)(),
        Gk = (0, Rk.y)(),
        Nk = (0, wk.useMemo)((() => vk ? {
          gameNameWithVariation: vk
        } : Gk), [vk, Gk]),
        ee = (0, me.d)(Nk),
        fe = (0, wk.useMemo)((() => {
          const kk = function(kk) {
            var ek, ik;
            const Dk = ve(kk);
            if (!Dk || 0 === Dk.length || Dk.includes(kk)) return kk;
            const fk = mk.f.getItem((0, pk.h)(kk));
            if (fk && Dk.includes(fk)) return fk;
            return null !== (ek = null === (ik = xe.d[kk]) || void 0 === ik ? void 0 : ik.defaultListedVariation) && void 0 !== ek ? ek : Dk[0]
          }(ee.gameNameWithVariation);
          return kk === ee.gameNameWithVariation ? ee : {
            ...ee,
            gameNameWithVariation: kk
          }
        }), [ee]);
      (0, wk.useEffect)((() => {
        const kk = ee.gameNameWithVariation;
        fe.gameNameWithVariation !== kk && kk !== (0, be.Db)(kk) && gk((0, Wk.y)(fe.gameNameWithVariation), {
          replace: !0
        })
      }), [fe.gameNameWithVariation, ee.gameNameWithVariation, gk]);
      const [He, we] = (0, wk.useState)(""), Ye = wk.useRef(null), [Le, Ce] = (0, wk.useState)(), Ve = (0, Se.j)(fe.gameNameWithVariation), ue = (0, wk.useMemo)((() => Ve ? null : function(kk, ek, ik) {
        var Dk, fk;
        const bk = xe.d[kk];
        return (0, Ie.F)(bk) ? null : {
          listedVariations: ve(kk),
          backgroundImage: (0, Sk.l)(kk, (0, Sk.e)(bk)),
          badges: (0, Mk.filterBadges)(bk.badges),
          category: bk.type,
          title: ik(bk.title),
          variationTitle: bk.variationTitle ? ik(bk.variationTitle) : null,
          description: ik(bk.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== ek ? null !== (Dk = ek[kk]) && void 0 !== Dk ? Dk : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: bk.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: bk.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (fk = bk.canCreateCustomLobbies) || void 0 === fk || fk,
          countdownInformation: (0, pk.d)(kk)
        }
      }(fe.gameNameWithVariation, tk, ak)), [Ve, fe.gameNameWithVariation, tk, ak]), [qe, Ee] = (0, wk.useState)(!1), [he, ae] = (0, wk.useState)((() => Ek ? Qe(Ek, ak) : ze)), te = null !== ue && void 0 !== ue ? ue : he, [Xe] = (0, wk.useState)(te === ze), Be = (0, fk.d)(te.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: ce,
        recentlyPlayedCustomLobbies: Te
      } = (0, wk.useMemo)((() => function(kk, ek, ik, Dk) {
        var fk;
        const Sk = kk => {
            const ik = (0, Se.p)(kk),
              Dk = ek.find((ek => "custom" === ek.type ? ek.schematicId === ik : ek.gameNameWithVariation === kk));
            return Dk ? [...Dk.recentLobbies] : []
          },
          bk = (0, Mk.getRecentGameNameWithVariationLobbiesKey)(kk),
          rk = null !== (fk = mk.f.getItem(bk)) && void 0 !== fk ? fk : [],
          Pk = [...Sk(kk), ...rk],
          Kk = [];
        for (const mk of Pk)(0, ne.I)(mk) && !Kk.includes(mk) && Kk.push(mk);
        let xk = Pk;
        if (ik) {
          const kk = Sk("classic_worlds"),
            ek = Pk.filter((ek => !kk.includes(ek)));
          xk = [...kk, ...ek]
        }
        const nk = [],
          Uk = !1 === Dk ? [] : xk;
        for (const mk of Uk)(0, ne.I)(mk) || nk.includes(mk) || nk.push(mk);
        return {
          recentlyPlayedPublicLobbies: Kk,
          recentlyPlayedCustomLobbies: nk
        }
      }(fe.gameNameWithVariation, ck, te.showWorldsInsteadOfCustomLobbies, te.canCreateCustomLobbies)), [fe.gameNameWithVariation, ck, te.showWorldsInsteadOfCustomLobbies, te.canCreateCustomLobbies]), [oe, Ze] = (0, wk.useState)(!0), [Oe, ge] = (0, wk.useState)([]), [Ge, Ne] = (0, wk.useState)(null), [Re, Je] = (0, wk.useState)("explore"), ki = (0, wk.useRef)(!1), ei = (0, wk.useCallback)((kk => {
        (0, lk.unstable_batchedUpdates)((() => {
          Ce(kk), ae((ek => ({
            ...Qe(kk, ak),
            isFavourite: ek.isFavourite
          })))
        }))
      }), [ak]);
      (0, wk.useEffect)((() => {
        null === Me.b.get("gameEntrySource") && (0, Me.j)("gameInformationPageDirect")
      }), []);
      const ii = (0, wk.useRef)(null);
      (0, wk.useEffect)((() => {
        const kk = kk => {
            ii.current = kk.target instanceof Element ? kk.target.closest("a, button") : null
          },
          ek = kk => {
            "Tab" === kk.key && (ii.current = null)
          };
        return document.addEventListener("pointerdown", kk, !0), document.addEventListener("keydown", ek, !0), () => {
          document.removeEventListener("pointerdown", kk, !0), document.removeEventListener("keydown", ek, !0)
        }
      }), []), (0, Ck.b)("Enter", (kk => {
        const ek = kk.target instanceof Element ? kk.target : null;
        if (kk.defaultPrevented || null !== ek && void 0 !== ek && ek.closest("input, textarea, select")) return;
        const ik = null === ek || void 0 === ek ? void 0 : ek.closest("a, button");
        ik && ik !== ii.current || (kk.preventDefault(), Ki())
      })), (0, Ak.b)(Jk.navigateToHomePage);
      const Di = ce.length > 0 || Te.length > 0,
        fi = !te.useRejoinLastLobbyButton || 0 === ce.length,
        Si = Ve && null === te.ownerSocialPreviewWithoutLocation,
        bi = Xk.getPlayerName() === (null === Le || void 0 === Le || null === (ek = Le.owner) || void 0 === ek ? void 0 : ek.name),
        ri = null !== (ik = null === (bk = te.badges.find((kk => "event" === kk.type))) || void 0 === bk ? void 0 : bk.event) && void 0 !== ik ? ik : null,
        Pi = fi ? xk.r : xk.f,
        mi = (0, Qk.jsx)(Kk.i, {
          tooltipInner: (0, Qk.jsx)("div", {
            children: ak("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, Qk.jsx)(Pi, {
            className: "GameInformationButton",
            padDefaultFocus: fi,
            showPress: !0,
            onClick: () => {
              Ki()
            },
            children: (0, Qk.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [fi && (0, Qk.jsxs)(Qk.Fragment, {
                children: [(0, Qk.jsx)(Zk.d, {
                  name: "play"
                }), " "]
              }), ak("homePage:quickPlay")]
            })
          })
        });
      (0, wk.useEffect)((() => {
        if (!Ve || Bk) return;
        let kk = !0;
        const ek = (0, Se.p)(fe.gameNameWithVariation);
        return Fk.b.getGame(Xk, ek).then((ek => {
          kk && ei(ek)
        })).catch((ek => {
          console.error("Failed to get Custom Game information", ek), kk && (0, Jk.navigateToHomePage)()
        })), Fk.b.getFavouriteGames(Xk).then((ik => {
          kk && ae((kk => ({
            ...kk,
            isFavourite: ik.includes(ek)
          })))
        })).catch((ek => {
          console.error("Failed to get favourite games", ek), kk && Ee(!0)
        })), () => {
          kk = !1
        }
      }), [Ve, Bk, fe.gameNameWithVariation, ei, Xk]);
      const Mi = !Ve && null === ue;

      function Ki(kk) {
        (0, Fe.d)(), gk((0, yk.d)(fe.gameNameWithVariation, kk))
      }(0, wk.useEffect)((() => {
        Mi && (0, Jk.navigateToHomePage)()
      }), [Mi]), (0, wk.useEffect)((() => {
        if (!1 === te.canCreateCustomLobbies) return;
        let kk = !0;
        return null !== te.showWorldsInsteadOfCustomLobbies && !1 === Bk && (Ze(!0), Fk.b.getFavouriteLobbies(Xk).then((kk => {
          Ne(kk)
        })), Fk.b.getOpenCustomLobbies(Xk, {
          gameNameWithVariation: te.showWorldsInsteadOfCustomLobbies ? "classic" : fe.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === Re,
          onlyFavouriteLobbies: "favourite" === Re
        }).then((ek => {
          kk && (0, lk.unstable_batchedUpdates)((() => {
            ge(ek), Ze(!1)
          }))
        })).catch((ek => {
          console.error("Failed to get open custom lobbies", ek), kk && Ze(!1)
        }))), () => {
          kk = !1
        }
      }), [Bk, fe, Re, te.showWorldsInsteadOfCustomLobbies, te.canCreateCustomLobbies, Xk]);
      const xi = (0, wk.useCallback)((async kk => {
          try {
            if (!Ge) return;
            Ge.includes(kk) ? (Fk.b.unfavouriteLobby(Xk, kk), Ne(Ge.filter((ek => ek !== kk)))) : (Fk.b.favouriteLobby(Xk, kk).catch((kk => {
              console.error("Failed to favourite lobby", kk)
            })), Ne([...Ge, kk]))
          } catch (ek) {
            console.error("Failed to like lobby", ek)
          }
        }), [Xk, Ge]),
        ni = (null === Le || void 0 === Le ? void 0 : Le.schematicId) === (0, Se.p)(ee.gameNameWithVariation) ? Le : null,
        Ui = ni && (0, Wk.H)(ee.gameNameWithVariation, (kk => ak(kk)), ni);
      (0, ke.h)(ni && (0, Wk.y)(ee.gameNameWithVariation, ni));
      const Hi = Ok.featureFlags.canUseCustomLobbies && !0 === te.canCreateCustomLobbies,
        wi = (0, Qk.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, Qk.jsx)(Tk, {
            gameNameWithVariation: fe.gameNameWithVariation
          })
        });
      return (0, Qk.jsx)(Qk.Fragment, {
        children: (0, Qk.jsxs)("article", {
          className: Uk()("GameInformation", {
            GameInformationFadeIn: Xe,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (nk = te.countdownInformation) || void 0 === nk ? void 0 : nk.type)
          }),
          children: [Ui && (0, Qk.jsx)(Yk.e, {
            meta: Ui
          }), (0, Qk.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, Qk.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, Qk.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, Qk.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, Qk.jsx)("div", {
                  className: Uk()("GameInformationTopBackgroundImage", rk.k),
                  style: (0, rk.g)(Be),
                  children: (0, Qk.jsx)(rk.d, {
                    image: Be
                  })
                })]
              }), (0, Qk.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, Qk.jsx)(pe.b, {}), (0, Qk.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, Qk.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, Qk.jsxs)("div", {
                      className: Uk()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: Si
                      }),
                      children: [te.badges.map((kk => (0, Qk.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${kk.type}`,
                        children: (0, Qk.jsx)(dk.b, {
                          badge: kk
                        })
                      }, kk.type))), Ve && (0, Qk.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, Qk.jsx)(sk.e, {
                          text: (0, Dk.eb)({
                            type: "playerCrafted"
                          })
                        })
                      }), te.category && (0, Qk.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, Qk.jsx)(sk.e, {
                          text: [{
                            str: (0, Dk.gb)(te.category).toUpperCase()
                          }]
                        })
                      }), null !== te.ccu && (0, Qk.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, Qk.jsx)(Zk.d, {
                          name: "user"
                        }), (0, ne.Q)(te.ccu), " online"]
                      }), null !== te.ownerSocialPreviewWithoutLocation && (0, Qk.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, Qk.jsx)("span", {
                          children: "Made by"
                        }), (0, Qk.jsx)(Ik.d, {
                          playerSocialPreview: {
                            ...te.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), Si && (0, Qk.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, Qk.jsx)("span", {
                          children: "Made by"
                        }), (0, Qk.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== te.favourites && (null !== te.isFavourite || Ve && !qe) && (0, Qk.jsx)(xk.x, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== ki.current && (ki.current = !0, null !== te.isFavourite)) {
                              const kk = (0, Se.p)(fe.gameNameWithVariation);
                              let ek;
                              te.isFavourite ? (ek = -1, Fk.b.unfavouriteGame(Xk, kk).catch((kk => {
                                console.error("Failed to get unfavourite game", kk)
                              })).finally((() => {
                                ki.current = !1
                              }))) : (ek = 1, Fk.b.favouriteGame(Xk, kk).catch((kk => {
                                console.error("Failed to get favourite game", kk)
                              })).finally((() => {
                                ki.current = !1
                              }))), ae((kk => ({
                                ...kk,
                                isFavourite: !kk.isFavourite
                              }))), ae((kk => ({
                                ...kk,
                                favourites: kk.favourites + ek
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (Vk = te.isFavourite) && void 0 !== Vk && Vk,
                        disabled: null === te.isFavourite,
                        className: Uk()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === te.isFavourite
                        })
                      }, null === te.isFavourite ? "pending" : "known"), Ve && !Si && Ok.featureFlags.useSocialFeatures && !bi && (0, Qk.jsx)(je.c, {
                        targetType: "customGame",
                        targetId: (0, Se.p)(fe.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (Xk.playerHasRank("developer") || Xk.playerHasRank("admin") && bi) && (0, Qk.jsxs)(xk.r, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          gk((0, Pe.m)((0, re.h)(fe.gameNameWithVariation, !0)))
                        },
                        children: [(0, Qk.jsx)(Zk.d, {
                          name: "star-christmas"
                        }), " ", ak("studio:viewInStudio")]
                      }), Ve && Xk.playerHasRank("developer") && (0, Qk.jsxs)(xk.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, Ue.e)({
                            schematicId: (0, Se.p)(fe.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, Qk.jsx)(Zk.d, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), Ve && Xk.playerHasRank("developer") && (0, Qk.jsxs)(xk.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          ie.NotificationProvider.showCustomPopup({
                            body: () => (0, Qk.jsx)(le, {
                              schematicId: (0, Se.p)(fe.gameNameWithVariation),
                              gameName: te.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, Qk.jsx)(Zk.d, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (uk = te.countdownInformation) || void 0 === uk ? void 0 : uk.type) && (0, Qk.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, Qk.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, Qk.jsx)(jk.b, {
                            toTime: te.countdownInformation.countdownToTime
                          })]
                        }), (0, Qk.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: te.countdownInformation.previewText
                        })]
                      })]
                    }, Si ? "pending" : "shown"), (0, Qk.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, Qk.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, Qk.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [te.title, " ", te.variationTitle && (null === (qk = xe.d[fe.gameNameWithVariation]) || void 0 === qk ? void 0 : qk.variationThumbnailUseBigRatio) && (0, Qk.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: te.variationTitle
                          })]
                        })
                      }), te.listedVariations && te.listedVariations.length > 0 && (0, Qk.jsx)("div", {
                        className: Uk()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (zk = xe.d[fe.gameNameWithVariation]) || void 0 === zk ? void 0 : zk.variationThumbnailUseBigRatio
                        }),
                        children: te.listedVariations.map((kk => {
                          var ek, ik;
                          return (0, Qk.jsxs)(We, {
                            variation: kk,
                            isSelected: fe.gameNameWithVariation === kk,
                            children: [null !== tk && (0, Qk.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, Qk.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, Qk.jsx)(Zk.d, {
                                  name: "user"
                                }), " ", (0, ne.Q)(null !== (ek = tk[kk]) && void 0 !== ek ? ek : 0)]
                              })
                            }), (0, Qk.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: ak(null !== (ik = xe.d[kk].variationTitle) && void 0 !== ik ? ik : xe.d[kk].title)
                            }), (0, Qk.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, Mk.filterBadges)(xe.d[kk].badges).map((kk => (0, Qk.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + kk.type,
                                children: (0, Qk.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, Qk.jsx)(dk.b, {
                                    badge: kk
                                  })
                                })
                              }, kk.type)))
                            })]
                          }, kk)
                        }))
                      })]
                    }), te.description && (0, Qk.jsx)("p", {
                      className: "GameInformationDescription",
                      children: te.description
                    })]
                  }), (0, Qk.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, Qk.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!fi && (0, Qk.jsx)(Kk.i, {
                        tooltipInner: (0, Qk.jsx)("div", {
                          children: ak("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, Qk.jsx)(xk.r, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            Ki(ce[0])
                          },
                          children: (0, Qk.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, Qk.jsx)(Zk.d, {
                              name: "play"
                            }), " ", ak("homePage:rejoinLobbyNumber", {
                              number: ce[0]
                            })]
                          })
                        })
                      }), fi && mi]
                    }), (0, Qk.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!fi && mi, (0, Qk.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, Qk.jsx)(Zk.d, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, Qk.jsx)(Hk.b, {
                          className: "JoinLobbyInput",
                          placeholderText: ak("homePage:lobbyName"),
                          maxLength: ne.M,
                          domRef: Ye,
                          onValueChange: kk => {
                            kk = (0, ne.sb)(kk), we(kk)
                          },
                          onEnter: () => {
                            0 === He.length ? Ki(ce[0]) : Ki(He)
                          }
                        }), (0, Qk.jsx)(xk.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === He.length ? Ki(ce[0]) : Ki(He)
                          },
                          children: ak("general:join")
                        })]
                      })]
                    }), (0, Qk.jsxs)("section", {
                      className: Uk()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !Di
                      }),
                      children: [(0, Qk.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, Qk.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, Qk.jsx)(Zk.d, {
                            name: "clock-rotate-left"
                          }), Di && (0, Qk.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: ak("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, Qk.jsx)(se.e, {
                        lobbyGroups: [ce, Te],
                        onLobbyClick: kk => {
                          Ki(kk)
                        },
                        keyPrefix: fe.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== ri && (0, Qk.jsx)(hk, {
                eventName: ri
              })]
            }), Hi && (0, Qk.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, Qk.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, Qk.jsxs)("div", {
                  className: Uk()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === te.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === te.showWorldsInsteadOfCustomLobbies && (0, Qk.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Qk.jsx)(Zk.d, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, Qk.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Qk.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), ak("game:worlds")]
                    })]
                  }), !1 === te.showWorldsInsteadOfCustomLobbies && (0, Qk.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, Qk.jsx)(Zk.d, {
                      name: "joystick"
                    }), (0, Qk.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, Qk.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), ak("homePage:customLobbies")]
                    })]
                  }), (0, Qk.jsx)(xk.X, {
                    onClick: () => {
                      Je("explore")
                    },
                    active: "explore" === Re,
                    children: ak("general:explore")
                  }), (0, Qk.jsx)(xk.X, {
                    onClick: () => {
                      Je("favourite")
                    },
                    active: "favourite" === Re,
                    children: ak("homePage:favouriteLobbies")
                  }), (0, Qk.jsx)(xk.X, {
                    onClick: () => {
                      Je("owned")
                    },
                    active: "owned" === Re,
                    children: ak("homePage:ownedLobbies")
                  })]
                }), (0, Qk.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, Qk.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, Qk.jsx)(ye.e, {
                      label: "Create",
                      onClick: () => {
                        ie.NotificationProvider.showCustomPopup({
                          body: kk => (0, Qk.jsx)(De.CreateCustomLobby, {
                            gameNameWithVariation: fe.gameNameWithVariation,
                            close: kk
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === oe && (0, Qk.jsx)(ye.i, {}), !1 === oe && (0, Qk.jsx)(Ae, {
                      customLobbies: Oe,
                      favouriteLobbies: Ge,
                      toggleLikeLobby: xi,
                      showReport: Ok.featureFlags.useSocialFeatures && "owned" !== Re
                    })]
                  }), wi]
                })]
              })
            })]
          }), !Hi && wi]
        })
      })
    }

    function We(kk) {
      let {
        variation: ek,
        isSelected: ik,
        children: Dk
      } = kk;
      const Pk = xe.d[ek],
        Mk = (0, Sk.l)(ek, (0, Sk.p)(Pk)),
        Kk = (0, fk.d)(Mk),
        xk = (0, bk.g)([(0, Sk.j)(ek, (0, Sk.e)(Pk))]);
      return (0, Qk.jsxs)(Jk.LinkPreserveSearch, {
        to: (0, Wk.y)(ek),
        replace: !0,
        className: Uk()("GameInformationVariation", rk.k, {
          SelectedGameInformationVariation: ik
        }),
        onClick: kk => {
          if (!(0, ee.b)(kk)) return;
          const ik = (0, pk.h)(ek);
          mk.f.setItem(ik, ek)
        },
        onMouseEnter: xk.start,
        onMouseLeave: xk.cancel,
        onFocus: xk.start,
        onBlur: xk.cancel,
        style: (0, rk.g)(Kk),
        children: [(0, Qk.jsx)(rk.d, {
          image: Kk
        }), Dk]
      })
    }
  },
  6357: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => lk
    });
    var Dk = ik(60),
      fk = ik(1410),
      Sk = ik(1459),
      bk = ik(3447),
      rk = ik(1095),
      Pk = ik(1327),
      mk = ik(1345),
      Mk = ik(1033),
      Kk = ik(1021),
      xk = ik.n(Kk),
      nk = ik(1066);

    function Uk(kk) {
      let {
        info: ek,
        className: ik
      } = kk;
      return (0, nk.jsxs)("div", {
        className: xk()("GameApprovalInfoDetails", ik),
        children: [(0, nk.jsxs)("div", {
          className: xk()("GameApprovalInfoSummary", ek.overallPassed ? "Passed" : "Failed"),
          children: [(0, nk.jsx)(Mk.d, {
            name: ek.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, nk.jsx)("span", {
            children: ek.summary
          })]
        }), ek.rows.length > 0 && (0, nk.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: ek.rows.map((kk => (0, nk.jsxs)("div", {
            className: xk()("GameApprovalInfoRow", kk.passed ? "Passed" : "Failed"),
            children: [(0, nk.jsx)(Mk.d, {
              name: kk.passed ? "check" : "xmark"
            }), (0, nk.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, nk.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: kk.label
              }), (0, nk.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: kk.valueText
              })]
            })]
          }, kk.label)))
        })]
      })
    }
    var Hk = ik(1172),
      wk = ik(1333);

    function lk(kk) {
      wk.NotificationProvider.showCustomPopup({
        body: () => (0, nk.jsx)(pk, {
          ...kk
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function pk(kk) {
      let {
        schematicId: ek,
        canOverride: ik,
        onApprovalChanged: Kk
      } = kk;
      const {
        t: xk
      } = (0, Hk.D)(), {
        userContext: wk
      } = (0, rk.d)(), lk = (0, bk.e)(), [pk, yk] = (0, Dk.useState)(null), [Yk, Lk] = (0, Dk.useState)(null), [Ck, Ak] = (0, Dk.useState)(!1), jk = (0, Dk.useCallback)((() => {
        Lk(null), Sk.b.getGameApprovalInfo(wk, ek).then((kk => {
          lk.current && yk(kk)
        })).catch((kk => {
          console.error("Failed to get game approval info", kk), lk.current && Lk(xk("studio:approvalLoadFailed"))
        }))
      }), [wk, ek, lk, xk]);
      (0, Dk.useEffect)((() => {
        jk()
      }), [jk]);
      const sk = kk => {
        Ck || (Ak(!0), Sk.b.setGameApproval(wk, ek, kk).then((() => {
          null === Kk || void 0 === Kk || Kk(), lk.current && jk()
        })).catch((kk => {
          console.error("Failed to set game approval", kk)
        })).finally((() => {
          lk.current && Ak(!1)
        })))
      };
      return (0, nk.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, nk.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: xk("studio:approvalTitle")
        }), !pk && !Yk && (0, nk.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, nk.jsx)(Pk.d, {})
        }), Yk && (0, nk.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: Yk
        }), pk && (0, nk.jsxs)(nk.Fragment, {
          children: [(0, nk.jsx)(Uk, {
            info: pk
          }), ik && (0, nk.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== pk.manualOverride && (0, nk.jsx)(mk.i, {
              tooltipInner: (0, nk.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, nk.jsxs)(fk.r, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  sk(!0)
                },
                disabled: Ck,
                children: [(0, nk.jsx)(Mk.d, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== pk.manualOverride && (0, nk.jsx)(mk.i, {
              tooltipInner: (0, nk.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, nk.jsxs)(fk.R, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  sk(!1)
                },
                disabled: Ck,
                children: [(0, nk.jsx)(Mk.d, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== pk.manualOverride && (0, nk.jsx)(mk.i, {
              tooltipInner: (0, nk.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, nk.jsxs)(fk.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  sk(null)
                },
                disabled: Ck,
                children: [(0, nk.jsx)(Mk.d, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  33809: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk
    });
    var Dk = ik(60),
      fk = ik(3521);

    function Sk() {
      const [kk, ek] = (0, Dk.useState)(!1);
      return (0, Dk.useLayoutEffect)((() => {
        let kk = !0;
        return (0, fk.f)().then((() => {
          kk && ek(!0)
        })), () => {
          kk = !1
        }
      }), []), kk
    }
  },
  8732: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(1311),
      fk = ik(1207),
      Sk = ik(594);

    function bk(kk) {
      return kk = function(kk, ek) {
        var ik;
        const Dk = new URLSearchParams(ek),
          fk = Dk.get("lobby"),
          Sk = Dk.get("vm"),
          bk = null !== (ik = fk) && void 0 !== ik ? ik : kk.lobbyName,
          rk = null !== Sk && void 0 !== Sk ? Sk : kk.directJoinVmUrl;
        if (bk === kk.lobbyName && rk === kk.directJoinVmUrl) return kk;
        return {
          ...kk,
          lobbyName: bk,
          directJoinVmUrl: rk
        }
      }(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), kk = function(kk) {
        if ((0, Sk.F)(kk.directJoinVmUrl)) return kk;
        const ek = (0, fk.ab)(kk.directJoinVmUrl);
        null === ek && (kk.directJoinVmUrl = void 0);
        return kk
      }(kk = function(kk) {
        if ((0, Sk.F)(kk.gameNameWithVariation)) return kk;
        return kk.gameNameWithVariation = (0, Dk.n)(kk.gameNameWithVariation), kk
      }(kk))
    }
  },
  8725: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      d: () => fk
    });
    let Dk = !1;

    function fk() {
      Dk = !0
    }

    function Sk() {
      return Dk
    }
  },
  35923: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => fk,
      h: () => Dk
    });
    const Dk = "skyblockSkills",
      fk = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);