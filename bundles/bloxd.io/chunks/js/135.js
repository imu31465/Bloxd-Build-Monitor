export const id = 135;
export const ids = [135, 705];
export const modules = {
  37121: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => Li
    });
    var ye = He(335),
      be = He(3892),
      Me = He(3937),
      Ke = He(3929),
      Ue = He(3927),
      Fe = He(1127),
      Je = He(35),
      oe = He(1768),
      Re = He(1351),
      ke = He(1438),
      qe = He(1053),
      fe = He.n(qe),
      Te = He(1674),
      pe = He(59),
      Xe = He(77),
      ze = He(2418),
      Be = He(1315),
      Ee = He(1603),
      ge = He(1075),
      Oe = He(3763),
      de = He(4942),
      We = He(2714),
      te = He(1956),
      Ze = He(3887),
      we = He(1781),
      De = He(1490),
      Pe = He(2202),
      Ae = He(1320),
      Ye = He(2749),
      Ve = He(5537),
      ae = He(1228);
    const ce = 15e3,
      xe = 2500;

    function Le(ee) {
      var ie;
      let {
        eventName: He
      } = ee;
      const {
        t: ye
      } = (0, Fe.v)(), be = we.h[He], [Me, Ke] = (0, pe.useState)((() => Date.now() >= be.endsAt.getTime())), [Ue, Je] = (0, pe.useState)("overall"), oe = function(ee, ie) {
        const {
          userContext: He,
          isUserContextUpdating: ye
        } = (0, ge.b)(), be = `${ee}:${ie}`, [Me, Ke] = (0, pe.useState)({
          requestKey: be,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, pe.useEffect)((() => {
          if (ye) return;
          let Me, Ue = !1;
          const Fe = async () => {
            if ("visible" === document.visibilityState) try {
              const ye = await De.b.getGameEventLeaderboard(He, {
                event: ee,
                scope: ie
              });
              Ue || Ke({
                requestKey: be,
                leaderboard: {
                  status: "loaded",
                  leaderboard: ye
                }
              })
            } catch {
              Ue || Ke((ee => ee.requestKey === be && "loaded" === ee.leaderboard.status ? ee : {
                requestKey: be,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            Ue || (Me = setTimeout(Fe, ce))
          };
          return Fe(), () => {
            Ue = !0, clearTimeout(Me)
          }
        }), [ee, ie, be, He, ye]), Me.requestKey === be ? Me.leaderboard : {
          status: "loading"
        }
      }(He, Ue), Re = function(ee) {
        const ie = (0, pe.useRef)(null),
          He = (0, pe.useRef)(0),
          ye = (0, pe.useRef)(),
          [be, Me] = (0, pe.useState)({});
        return (0, pe.useEffect)((() => {
          const be = null === ee || void 0 === ee ? void 0 : ee.entries;
          if (!be) return;
          const Ke = new Map(be.map((ee => [ee.player.name, ee.value]))),
            Ue = ie.current;
          if (ie.current = Ke, null === Ue) return;
          const Fe = {};
          for (const [ee, ie] of Ke) {
            const ye = Ue.get(ee);
            void 0 !== ye && ie > ye && (Fe[ee] = {
              amount: ie - ye,
              key: He.current++
            })
          }
          0 !== Object.keys(Fe).length && (Me(Fe), clearTimeout(ye.current), ye.current = setTimeout((() => {
            Me({})
          }), xe))
        }), [ee]), (0, pe.useEffect)((() => () => {
          clearTimeout(ye.current)
        }), []), be
      }("loaded" === oe.status ? oe.leaderboard : null), ke = function(ee) {
        const [ie, He] = (0, pe.useState)(null), ye = "loaded" === ee.status ? ee.leaderboard.goalProgress : void 0;
        return (0, pe.useEffect)((() => {
          ye && He(ye)
        }), [ye]), ie
      }(oe), qe = Pe.e[`profileEffect_${be.prizePack}`];
      if (Me) return null;
      const Te = "loaded" === oe.status ? oe.leaderboard : null,
        Xe = null !== (ie = null === Te || void 0 === Te ? void 0 : Te.entries) && void 0 !== ie ? ie : null,
        ze = null !== Te && void 0 !== Te && Te.own && null !== Xe && !Xe.some((ee => ee.isOwn)) ? Te.own : null;
      return (0, ae.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, ae.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, ae.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, ae.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, ae.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, ae.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), ye("gameEvents:live")]
              }), (0, ae.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [ye("gameEvents:endsIn"), (0, ae.jsx)(We.e, {
                  toTime: be.endsAt,
                  onReachEndOfCountdown: () => {
                    Ke(!0)
                  }
                })]
              })]
            }), (0, ae.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: ye(be.titleKey)
            }), (0, ae.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, ae.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [qe && (0, ae.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, ae.jsx)(qe, {})
                }), (0, ae.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, ae.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: ye("gameEvents:prize")
                  }), (0, ae.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: ye(be.prizeNameKey)
                  })]
                })]
              }), (0, ae.jsx)(Ce, {
                event: be,
                progress: ke
              })]
            })]
          }), (0, ae.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, ae.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, ae.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: ye(be.leaderboard.titleKey)
              }), (0, ae.jsx)(Ve.b, {
                ariaLabel: ye("gameEvents:leaderboardScope"),
                options: we.e.map((ee => ({
                  value: ee,
                  label: ye(`gameEvents:${ee}Scope`)
                }))),
                value: Ue,
                onChange: Je
              })]
            }), "loading" === oe.status && (0, ae.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, ae.jsx)(Ae.b, {})
            }), ("unavailable" === oe.status || "loaded" === oe.status && null === Xe) && (0, ae.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: ye("gameEvents:leaderboardUnavailable")
            }), null !== Xe && 0 === Xe.length && (0, ae.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: ye("friends" === Ue ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== Xe && Xe.length > 0 && (0, ae.jsx)("ol", {
              className: "GameEventPanelRows",
              children: Xe.map((ee => {
                const ie = Re[ee.player.name];
                return (0, ae.jsxs)("li", {
                  className: fe()("GameEventPanelRow", {
                    GameEventPanelRowOwn: ee.isOwn,
                    GameEventPanelRowTop: ee.rank <= 3
                  }),
                  children: [(0, ae.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", ee.rank]
                  }), (0, ae.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, ae.jsx)(Ye.h, {
                      playerSocialPreview: {
                        ...ee.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== ie && (0, ae.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", ie.amount.toLocaleString()]
                  }, ie.key), (0, ae.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: ee.value.toLocaleString()
                  })]
                }, ee.player.name)
              }))
            }), ze && (0, ae.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, ae.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", ze.rank.toLocaleString()]
              }), (0, ae.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: ye("gameEvents:yourPlace")
              }), (0, ae.jsx)("span", {
                className: "GameEventPanelScore",
                children: ze.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function Ce(ee) {
      let {
        event: ie,
        progress: He
      } = ee;
      const {
        t: ye
      } = (0, Fe.v)(), be = null !== He && ie.prizeGoals.some(((ee, ie) => He[ie] >= ee.target));
      return (0, ae.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, ae.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: ye(be ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, ae.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: ie.prizeGoals.map(((ee, ie) => {
            const be = null === He ? null : Math.min(He[ie], ee.target);
            return (0, ae.jsxs)(pe.Fragment, {
              children: [ie > 0 && (0, ae.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: ye("gameEvents:goalsOr")
              }), (0, ae.jsxs)("div", {
                className: fe()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: be === ee.target
                }),
                children: [(0, ae.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: ye(ee.labelKey)
                }), (0, ae.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, ae.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== be && void 0 !== be ? be : 0) / ee.target * 100 + "%"
                    }
                  }), null !== be && (0, ae.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [be.toLocaleString(), " / ", ee.target.toLocaleString()]
                  })]
                })]
              })]
            }, ee.board)
          }))
        })]
      })
    }
    var ve = He(1538),
      ue = He(1593),
      me = He(1047),
      le = He(739),
      Se = He(3865);

    function ne(ee) {
      let {
        gameNameWithVariation: ie
      } = ee;
      const He = (0, ve.D)(ie),
        [ye, be] = (0, pe.useState)(null);
      if ((0, pe.useEffect)((() => {
          if (!He) return;
          let ee = !0;
          return (0, ue.h)(He).then((ie => {
            ee && be(ie)
          })).catch((ee => {
            console.error(`Failed to load the page copy for ${He.name}`, ee)
          })), () => {
            ee = !1
          }
        }), [He]), !He || !ye || ye.name !== He.name) return null;
      const Me = (0, ue.f)(ye),
        Ke = new Set((0, me.d)((0, le.d)()).map((ee => (0, ve.u)(ee)))),
        Ue = ye.similarGames.filter((ee => Ke.has((0, ve.u)(ee))));
      return (0, ae.jsx)("div", {
        className: "GamePageContent",
        children: (0, ae.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, ae.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, ae.jsx)("h2", {
              children: Me.whatIs
            }), ye.whatIs.map((ee => (0, ae.jsx)("p", {
              children: ee
            }, ee)))]
          }), (0, ae.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, ae.jsx)("h2", {
              children: Me.howToPlay
            }), ye.howToPlay.map((ee => (0, ae.jsx)("p", {
              children: ee
            }, ee)))]
          }), (0, ae.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, ae.jsx)("h2", {
              children: Me.features
            }), (0, ae.jsx)("ul", {
              children: ye.features.map((ee => (0, ae.jsx)("li", {
                children: ee
              }, ee)))
            })]
          }), (0, ae.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, ae.jsx)("h2", {
              children: Me.tips
            }), (0, ae.jsx)("ul", {
              children: ye.tips.map((ee => (0, ae.jsx)("li", {
                children: ee
              }, ee)))
            })]
          }), (0, ae.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, ae.jsx)("h2", {
              children: Me.faq
            }), ye.faq.map((ee => {
              let {
                question: ie,
                answer: He
              } = ee;
              return (0, ae.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, ae.jsx)("h3", {
                  children: ie
                }), (0, ae.jsx)("p", {
                  children: He
                })]
              }, ie)
            }))]
          }), Ue.length > 0 && (0, ae.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, ae.jsx)("h2", {
              children: Me.similarGames
            }), (0, ae.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: Ue.map((ee => (0, ae.jsx)("li", {
                children: (0, ae.jsx)(Se.c, {
                  source: {
                    type: "game",
                    gameNameWithVariation: ee
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, ee)))
            })]
          })]
        })
      })
    }
    var je = He(1323),
      se = He(97),
      Ie = He(1083),
      he = He(34936),
      Ne = He(1637),
      Ge = He(1515),
      re = He(1502),
      Qe = He(1600),
      ei = He(1444),
      ii = He(1340),
      Hi = He(37126),
      yi = He(1186),
      bi = He(1033),
      Mi = He(347),
      Ki = He(1040),
      Ui = He(1536),
      Fi = He(9691),
      Ji = He(18),
      oi = He(2626),
      Ri = He(780),
      ki = He(1169),
      qi = He(7114),
      fi = He(3871);

    function Ti(ee) {
      let {
        preview: ie,
        isBroken: He
      } = ee;
      const ye = null === ie ? null : (0, Me.h)(ie, "small"),
        Ke = (0, be.f)(null !== ye && void 0 !== ye ? ye : Me.o);
      return null === ie ? (0, ae.jsx)("div", {
        className: fe()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: He
        }),
        children: (0, ae.jsx)(je.e, {
          name: He ? "triangle-exclamation" : "star"
        })
      }) : (0, ae.jsx)("div", {
        className: fe()("FeaturedGamesPopupSlotThumbnail", Ue.l),
        style: (0, Ue.i)(Ke),
        role: "img",
        "aria-label": ie.name,
        children: (0, ae.jsx)(Ue.e, {
          image: Ke
        })
      })
    }

    function Xi(ee) {
      let {
        schematicId: ie,
        gameName: He
      } = ee;
      const {
        userContext: be
      } = (0, ge.b)(), Me = (0, fi.c)(), [Ke, Ue] = (0, pe.useState)(null), [Fe, Je] = (0, pe.useState)(null), [oe, Re] = (0, pe.useState)(!1), qe = (0, pe.useCallback)((() => {
        Je(null), De.b.getFeaturedGames(be).then((ee => {
          Me.current && Ue(ee.slots)
        })).catch((ee => {
          console.error("Failed to get featured games", ee), Me.current && Je("Failed to load featured games")
        }))
      }), [be, Me]);
      (0, pe.useEffect)((() => {
        qe()
      }), [qe]);
      const fe = (ee, ie) => {
        oe || (Re(!0), De.b.setFeaturedGame(be, ee, ie).then((() => {
          Me.current && qe()
        })).catch((ee => {
          console.error("Failed to set featured game", ee), Me.current && Je("Failed to update the featured slot")
        })).finally((() => {
          Me.current && Re(!1)
        })))
      };
      return (0, ae.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, ae.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !Ke && !Fe && (0, ae.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, ae.jsx)(Ae.b, {})
        }), Fe && (0, ae.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: Fe
        }), Ke && (0, ae.jsxs)(ae.Fragment, {
          children: [(0, ae.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: Ke.map((ee => {
              const He = ee.schematicId === ie,
                be = null === ee.schematicId,
                {
                  categoryGroup: Me
                } = ye.N[ee.slotId];
              return (0, ae.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, ae.jsx)(Ti, {
                  preview: ee.preview,
                  isBroken: !be
                }), (0, ae.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, ae.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, ye.qb)(Me), " \xb7 position", " ", (0, ye.O)(ee.slotId, ye.Tb) + 1, " of", " ", (0, ye.Rb)(Me, ye.Tb)]
                  }), be && (0, ae.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !be && null !== ee.preview && (0, ae.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: ee.preview.name
                  }), !be && null === ee.preview && (0, ae.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, ae.jsx)(je.e, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, ae.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [be && (0, ae.jsxs)(ke.p, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      fe(ee.slotId, ie)
                    },
                    disabled: oe,
                    children: [(0, ae.jsx)(je.e, {
                      name: "star"
                    }), " Feature here"]
                  }), !be && !He && (0, ae.jsxs)(ke.M, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      fe(ee.slotId, ie)
                    },
                    disabled: oe,
                    children: [(0, ae.jsx)(je.e, {
                      name: "star"
                    }), " Replace"]
                  }), !be && (0, ae.jsxs)(ke.G, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      fe(ee.slotId, null)
                    },
                    disabled: oe,
                    children: [(0, ae.jsx)(je.e, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, ee.slotId)
            }))
          }), (0, ae.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var zi = He(5126),
      Bi = He(4981),
      Ei = He(3791);
    const gi = 8,
      Oi = 12;

    function di(ee) {
      let {
        customLobbies: ie,
        favouriteLobbies: He,
        toggleLikeLobby: ye,
        showReport: be
      } = ee;
      const [Me, Ke] = (0, pe.useState)(gi);
      return (0, pe.useEffect)((() => {
        if (Me >= ie.length) return;
        let ee = !0;
        return (0, Ei.f)().then((() => {
          ee && Ke(Me + Oi)
        })), () => {
          ee = !1
        }
      }), [Me, ie.length]), (0, ae.jsx)(ae.Fragment, {
        children: ie.slice(0, Me).map((ee => (0, ae.jsx)(Bi.f, {
          customLobby: ee,
          favouriteLobbies: He,
          toggleLikeLobby: ye,
          showReport: be
        }, ee.name)))
      })
    }
    var Wi = He(4989),
      ti = He(5009),
      Zi = He(4960),
      wi = He(3970),
      Di = He(9683),
      Pi = He(9667),
      Ai = He(207);
    const Yi = {
      skyblock: [He(37150).d]
    };
    var Vi = He(610);
    const ai = {
      listedVariations: null,
      backgroundImage: Me.o,
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

    function ci(ee, ie) {
      const He = Ri.h[ee.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, Me.h)(ee, "large"),
        badges: [],
        category: ee.gameCategory,
        title: void 0 !== (null === He || void 0 === He ? void 0 : He.title) ? ie(He.title) : ee.name,
        variationTitle: null,
        description: void 0 !== (null === He || void 0 === He ? void 0 : He.description) ? ie(He.description) : ee.description,
        ownerSocialPreviewWithoutLocation: "owner" in ee ? ee.owner : null,
        ccu: ee.ccu,
        favourites: ee.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in ee ? ee.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function xi(ee) {
      var ie, He, ye;
      return null !== (ie = null !== (He = (0, Ai.l)() ? function(ee) {
        for (const [ie, He] of Object.entries(Yi)) {
          const ye = [ie, ...He.map((ee => (0, Mi.Ub)(ie, ee)))];
          if (ye.includes(ee)) return ye
        }
        return null
      }(ee) : null) && void 0 !== He ? He : null === (ye = Ri.e[ee]) || void 0 === ye ? void 0 : ye.listedVariations) && void 0 !== ie ? ie : null
    }

    function Li() {
      const {
        gameNameWithVariation: ee
      } = (0, Ge.B)();
      if ((0, pe.useEffect)(wi.t, []), ee && (0, yi.p)(ee)) return (0, ae.jsx)(Ci, {
        urlId: ee
      }, ee);
      const ie = ee && (0, bi.k)(ee) ? ee : "firstParty";
      return (0, ae.jsx)(ui, {}, ie)
    }

    function Ci(ee) {
      let {
        urlId: ie
      } = ee;
      const {
        t: He
      } = (0, Fe.v)(), {
        userContext: ye,
        isUserContextUpdating: be
      } = (0, ge.b)(), Me = (0, pe.useMemo)((() => (0, Ne.f)(ie)), [ie]);
      (0, pe.useMemo)((() => {
        if (null === Me) return;
        const ee = Ie.userContextManager.peekCurrentUserContext();
        (null !== ee ? De.b.getGame(ee, Me.schematicId) : Ie.userContextManager.getCurrentUserContext().then((ee => De.b.getGame(ee, Me.schematicId)))).catch((ee => {
          null === (0, De.e)(ee) && console.error(`Failed to get the custom game ${Me.schematicId}`, ee), (0, Ne.d)(ie)
        }))
      }), [Me, ie]);
      const [Ke, Ue] = (0, pe.useState)(null), Je = (0, he.e)();
      (0, pe.useEffect)((() => {
        if (null !== Me || be) return;
        let ee = !0;
        return De.b.getGameByUrlId(ye, ie).then((ye => {
          ee && (ye.takenDown ? vi(He, ye) : Ue({
            urlId: ie,
            game: ye
          }))
        })).catch((ye => {
          const be = null !== (0, De.e)(ye);
          be || console.error(`Failed to find the custom game with urlId ${ie}`, ye), ee && (be ? vi(He, null) : (0, re.navigateToHomePage)())
        })), () => {
          ee = !1
        }
      }), [ie, Me, be, ye, He]);
      const oe = null !== Me && void 0 !== Me ? Me : (null === Ke || void 0 === Ke ? void 0 : Ke.urlId) === ie ? Ke.game : null;
      return null === oe ? (0, ae.jsx)(Ae.b, {}) : Je ? (0, ae.jsx)(ui, {
        gameNameWithVariation: (0, bi.v)(oe.schematicId),
        knownCustomGame: oe
      }, oe.schematicId) : null
    }

    function vi(ee, ie) {
      (0, re.navigateToHomePage)(), (0, Pi.d)(ee, ie)
    }

    function ui(ee) {
      var ie, He, Ke, qe, we, Pe, Ae, Ve;
      let {
        gameNameWithVariation: ce,
        knownCustomGame: xe = null
      } = ee;
      const {
        t: Ce
      } = (0, Fe.v)();
      (0, oi.i)();
      const ue = (0, oi.p)(),
        {
          userContext: me,
          isUserContextUpdating: le
        } = (0, ge.b)(),
        Se = (0, Zi.g)(),
        Ie = (0, re.useNavigatePreserveSearch)(),
        he = (0, Ge.B)(),
        Ne = (0, pe.useMemo)((() => ce ? {
          gameNameWithVariation: ce
        } : he), [ce, he]),
        ei = (0, Fi.d)(Ne),
        yi = (0, pe.useMemo)((() => {
          const ee = function(ee) {
            var ie, He;
            const ye = xi(ee);
            if (!ye || 0 === ye.length || ye.includes(ee)) return ee;
            const be = Je.i.getItem((0, ze.j)(ee));
            if (be && ye.includes(be)) return be;
            return null !== (ie = null === (He = Ri.e[ee]) || void 0 === He ? void 0 : He.defaultListedVariation) && void 0 !== ie ? ie : ye[0]
          }(ei.gameNameWithVariation);
          return ee === ei.gameNameWithVariation ? ei : {
            ...ei,
            gameNameWithVariation: ee
          }
        }), [ei]);
      (0, pe.useEffect)((() => {
        const ee = ei.gameNameWithVariation;
        yi.gameNameWithVariation !== ee && ee !== (0, Mi.Xb)(ee) && Ie((0, ve.w)(yi.gameNameWithVariation), {
          replace: !0
        })
      }), [yi.gameNameWithVariation, ei.gameNameWithVariation, Ie]);
      const [fi, Ti] = (0, pe.useState)(""), Ei = pe.useRef(null), [gi, Oi] = (0, pe.useState)(), wi = (0, bi.k)(yi.gameNameWithVariation), Pi = (0, pe.useMemo)((() => wi ? null : function(ee, ie, He) {
        var ye, be;
        const Ke = Ri.e[ee];
        return (0, Vi.P)(Ke) ? null : {
          listedVariations: xi(ee),
          backgroundImage: (0, Me.m)(ee, (0, Me.e)(Ke)),
          badges: (0, oe.filterBadges)(Ke.badges),
          category: Ke.type,
          title: He(Ke.title),
          variationTitle: Ke.variationTitle ? He(Ke.variationTitle) : null,
          description: He(Ke.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== ie ? null !== (ye = ie[ee]) && void 0 !== ye ? ye : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: Ke.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: Ke.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (be = Ke.canCreateCustomLobbies) || void 0 === be || be,
          countdownInformation: (0, ze.i)(ee)
        }
      }(yi.gameNameWithVariation, ue, Ce)), [wi, yi.gameNameWithVariation, ue, Ce]), [Ai, Yi] = (0, pe.useState)(!1), [Li, Ci] = (0, pe.useState)(null), [ui, li] = (0, pe.useState)((() => xe ? ci(xe, Ce) : ai)), Si = null !== Pi && void 0 !== Pi ? Pi : ui, [ni] = (0, pe.useState)(Si === ai), ji = (0, be.f)(Si.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: si,
        recentlyPlayedCustomLobbies: Ii
      } = (0, pe.useMemo)((() => function(ee, ie, He, ye) {
        var be;
        const Me = ee => {
            const He = (0, bi.r)(ee),
              ye = ie.find((ie => "custom" === ie.type ? ie.schematicId === He : ie.gameNameWithVariation === ee));
            return ye ? [...ye.recentLobbies] : []
          },
          Ke = (0, oe.getRecentGameNameWithVariationLobbiesKey)(ee),
          Ue = null !== (be = Je.i.getItem(Ke)) && void 0 !== be ? be : [],
          Fe = [...Me(ee), ...Ue],
          Re = [];
        for (const Je of Fe)(0, ki.K)(Je) && !Re.includes(Je) && Re.push(Je);
        let ke = Fe;
        if (He) {
          const ee = Me("classic_worlds"),
            ie = Fe.filter((ie => !ee.includes(ie)));
          ke = [...ee, ...ie]
        }
        const qe = [],
          fe = !1 === ye ? [] : ke;
        for (const Je of fe)(0, ki.K)(Je) || qe.includes(Je) || qe.push(Je);
        return {
          recentlyPlayedPublicLobbies: Re,
          recentlyPlayedCustomLobbies: qe
        }
      }(yi.gameNameWithVariation, Se, Si.showWorldsInsteadOfCustomLobbies, Si.canCreateCustomLobbies)), [yi.gameNameWithVariation, Se, Si.showWorldsInsteadOfCustomLobbies, Si.canCreateCustomLobbies]), [Ni, Gi] = (0, pe.useState)(!0), [ri, Qi] = (0, pe.useState)([]), [eH, iH] = (0, pe.useState)(null), [HH, yH] = (0, pe.useState)("explore"), bH = (0, pe.useRef)(!1), MH = (0, pe.useCallback)((ee => {
        (0, Xe.unstable_batchedUpdates)((() => {
          Oi(ee), li((ie => ({
            ...ci(ee, Ce),
            isFavourite: ie.isFavourite
          })))
        }))
      }), [Ce]);
      (0, pe.useEffect)((() => {
        null === Ji.e.get("gameEntrySource") && (0, Ji.l)("gameInformationPageDirect")
      }), []);
      const KH = (0, pe.useRef)(null);
      (0, pe.useEffect)((() => {
        const ee = ee => {
            KH.current = ee.target instanceof Element ? ee.target.closest("a, button") : null
          },
          ie = ee => {
            "Tab" === ee.key && (KH.current = null)
          };
        return document.addEventListener("pointerdown", ee, !0), document.addEventListener("keydown", ie, !0), () => {
          document.removeEventListener("pointerdown", ee, !0), document.removeEventListener("keydown", ie, !0)
        }
      }), []), (0, Oe.e)("Enter", (ee => {
        const ie = ee.target instanceof Element ? ee.target : null;
        if (ee.defaultPrevented || null !== ie && void 0 !== ie && ie.closest("input, textarea, select")) return;
        const He = null === ie || void 0 === ie ? void 0 : ie.closest("a, button");
        He && He !== KH.current || (ee.preventDefault(), TH())
      })), (0, de.c)(re.navigateToHomePage);
      const UH = si.length > 0 || Ii.length > 0,
        FH = !Si.useRejoinLastLobbyButton || 0 === si.length,
        JH = wi && null === Si.ownerSocialPreviewWithoutLocation,
        oH = me.getPlayerName() === (null === gi || void 0 === gi || null === (ie = gi.owner) || void 0 === ie ? void 0 : ie.name),
        RH = null !== (He = null === (Ke = Si.badges.find((ee => "event" === ee.type))) || void 0 === Ke ? void 0 : Ke.event) && void 0 !== He ? He : null,
        kH = FH ? ke.m : ke.c,
        qH = (0, ae.jsx)(Re.g, {
          tooltipInner: (0, ae.jsx)("div", {
            children: Ce("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, ae.jsx)(kH, {
            className: "GameInformationButton",
            padDefaultFocus: FH,
            showPress: !0,
            onClick: () => {
              TH()
            },
            children: (0, ae.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [FH && (0, ae.jsxs)(ae.Fragment, {
                children: [(0, ae.jsx)(je.e, {
                  name: "play"
                }), " "]
              }), Ce("homePage:quickPlay")]
            })
          })
        });
      (0, pe.useEffect)((() => {
        if (!wi || le) return;
        let ee = !0;
        const ie = (0, bi.r)(yi.gameNameWithVariation);
        return De.b.getGame(me, ie).then((ie => {
          ee && (ie.takenDown ? Ci({
            ownGame: ie
          }) : MH(ie))
        })).catch((ie => {
          const He = null !== (0, De.e)(ie);
          He || console.error("Failed to get Custom Game information", ie), ee && (He ? Ci({
            ownGame: null
          }) : (0, re.navigateToHomePage)())
        })), De.b.getFavouriteGames(me).then((He => {
          ee && li((ee => ({
            ...ee,
            isFavourite: He.includes(ie)
          })))
        })).catch((ie => {
          console.error("Failed to get favourite games", ie), ee && Yi(!0)
        })), () => {
          ee = !1
        }
      }), [wi, le, yi.gameNameWithVariation, MH, me]), (0, pe.useEffect)((() => {
        null !== Li && vi(Ce, Li.ownGame)
      }), [Li, Ce]);
      const fH = !wi && null === Pi;

      function TH(ee) {
        (0, Di.g)(), Ie((0, Be.b)(yi.gameNameWithVariation, ee))
      }(0, pe.useEffect)((() => {
        fH && (0, re.navigateToHomePage)()
      }), [fH]), (0, pe.useEffect)((() => {
        if (!1 === Si.canCreateCustomLobbies) return;
        let ee = !0;
        return null !== Si.showWorldsInsteadOfCustomLobbies && !1 === le && (Gi(!0), De.b.getFavouriteLobbies(me).then((ee => {
          iH(ee)
        })), De.b.getOpenCustomLobbies(me, {
          gameNameWithVariation: Si.showWorldsInsteadOfCustomLobbies ? "classic" : yi.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === HH,
          onlyFavouriteLobbies: "favourite" === HH
        }).then((ie => {
          ee && (0, Xe.unstable_batchedUpdates)((() => {
            Qi(ie), Gi(!1)
          }))
        })).catch((ie => {
          console.error("Failed to get open custom lobbies", ie), ee && Gi(!1)
        }))), () => {
          ee = !1
        }
      }), [le, yi, HH, Si.showWorldsInsteadOfCustomLobbies, Si.canCreateCustomLobbies, me]);
      const pH = (0, pe.useCallback)((async ee => {
          try {
            if (!eH) return;
            eH.includes(ee) ? (De.b.unfavouriteLobby(me, ee), iH(eH.filter((ie => ie !== ee)))) : (De.b.favouriteLobby(me, ee).catch((ee => {
              console.error("Failed to favourite lobby", ee)
            })), iH([...eH, ee]))
          } catch (ie) {
            console.error("Failed to like lobby", ie)
          }
        }), [me, eH]),
        XH = (null === gi || void 0 === gi ? void 0 : gi.schematicId) === (0, bi.r)(ei.gameNameWithVariation) ? gi : null,
        zH = XH && (0, ve.E)(ei.gameNameWithVariation, (ee => Ce(ee)), XH);
      (0, Qe.g)(XH && (0, ve.w)(ei.gameNameWithVariation, XH));
      const BH = se.featureFlags.canUseCustomLobbies && !0 === Si.canCreateCustomLobbies,
        EH = (0, ae.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, ae.jsx)(ne, {
            gameNameWithVariation: yi.gameNameWithVariation
          })
        });
      return (0, ae.jsx)(ae.Fragment, {
        children: (0, ae.jsxs)("article", {
          className: fe()("GameInformation", {
            GameInformationFadeIn: ni,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (qe = Si.countdownInformation) || void 0 === qe ? void 0 : qe.type)
          }),
          children: [zH && (0, ae.jsx)(Ee.e, {
            meta: zH
          }), (0, ae.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, ae.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, ae.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, ae.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, ae.jsx)("div", {
                  className: fe()("GameInformationTopBackgroundImage", Ue.l),
                  style: (0, Ue.i)(ji),
                  children: (0, ae.jsx)(Ue.e, {
                    image: ji
                  })
                })]
              }), (0, ae.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, ae.jsx)(zi.b, {}), (0, ae.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, ae.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, ae.jsxs)("div", {
                      className: fe()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: JH
                      }),
                      children: [Si.badges.map((ee => (0, ae.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${ee.type}`,
                        children: (0, ae.jsx)(Ze.e, {
                          badge: ee
                        })
                      }, ee.type))), wi && (0, ae.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, ae.jsx)(te.e, {
                          text: (0, ye.hb)({
                            type: "playerCrafted"
                          })
                        })
                      }), Si.category && (0, ae.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, ae.jsx)(te.e, {
                          text: [{
                            str: (0, ye.lb)(Si.category).toUpperCase()
                          }]
                        })
                      }), null !== Si.ccu && (0, ae.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, ae.jsx)(je.e, {
                          name: "user"
                        }), (0, ki.P)(Si.ccu), " online"]
                      }), null !== Si.ownerSocialPreviewWithoutLocation && (0, ae.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, ae.jsx)("span", {
                          children: "Made by"
                        }), (0, ae.jsx)(Ye.h, {
                          playerSocialPreview: {
                            ...Si.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), JH && (0, ae.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, ae.jsx)("span", {
                          children: "Made by"
                        }), (0, ae.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== Si.favourites && (null !== Si.isFavourite || wi && !Ai) && (0, ae.jsx)(ke.r, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== bH.current && (bH.current = !0, null !== Si.isFavourite)) {
                              const ee = (0, bi.r)(yi.gameNameWithVariation);
                              let ie;
                              Si.isFavourite ? (ie = -1, De.b.unfavouriteGame(me, ee).catch((ee => {
                                console.error("Failed to get unfavourite game", ee)
                              })).finally((() => {
                                bH.current = !1
                              }))) : (ie = 1, De.b.favouriteGame(me, ee).catch((ee => {
                                console.error("Failed to get favourite game", ee)
                              })).finally((() => {
                                bH.current = !1
                              }))), li((ee => ({
                                ...ee,
                                isFavourite: !ee.isFavourite
                              }))), li((ee => ({
                                ...ee,
                                favourites: ee.favourites + ie
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (we = Si.isFavourite) && void 0 !== we && we,
                        disabled: null === Si.isFavourite,
                        className: fe()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === Si.isFavourite
                        })
                      }, null === Si.isFavourite ? "pending" : "known"), wi && !JH && se.featureFlags.useSocialFeatures && !oH && (0, ae.jsx)(Wi.c, {
                        targetType: "customGame",
                        targetId: (0, bi.r)(yi.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (me.playerHasRank("developer") || me.playerHasRank("admin") && oH) && (0, ae.jsxs)(ke.m, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Ie((0, Ui.s)((0, Ki.c)(yi.gameNameWithVariation, !0)))
                        },
                        children: [(0, ae.jsx)(je.e, {
                          name: "star-christmas"
                        }), " ", Ce("studio:viewInStudio")]
                      }), wi && me.playerHasRank("developer") && (0, ae.jsxs)(ke.c, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, qi.b)({
                            schematicId: (0, bi.r)(yi.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, ae.jsx)(je.e, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), wi && me.playerHasRank("developer") && (0, ae.jsxs)(ke.c, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          ii.NotificationProvider.showCustomPopup({
                            body: () => (0, ae.jsx)(Xi, {
                              schematicId: (0, bi.r)(yi.gameNameWithVariation),
                              gameName: Si.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, ae.jsx)(je.e, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (Pe = Si.countdownInformation) || void 0 === Pe ? void 0 : Pe.type) && (0, ae.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, ae.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, ae.jsx)(We.e, {
                            toTime: Si.countdownInformation.countdownToTime
                          })]
                        }), (0, ae.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: Si.countdownInformation.previewText
                        })]
                      })]
                    }, JH ? "pending" : "shown"), (0, ae.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, ae.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, ae.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [Si.title, " ", Si.variationTitle && (null === (Ae = Ri.e[yi.gameNameWithVariation]) || void 0 === Ae ? void 0 : Ae.variationThumbnailUseBigRatio) && (0, ae.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: Si.variationTitle
                          })]
                        })
                      }), Si.listedVariations && Si.listedVariations.length > 0 && (0, ae.jsx)("div", {
                        className: fe()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (Ve = Ri.e[yi.gameNameWithVariation]) || void 0 === Ve ? void 0 : Ve.variationThumbnailUseBigRatio
                        }),
                        children: Si.listedVariations.map((ee => {
                          var ie, He;
                          return (0, ae.jsxs)(mi, {
                            variation: ee,
                            isSelected: yi.gameNameWithVariation === ee,
                            children: [null !== ue && (0, ae.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, ae.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, ae.jsx)(je.e, {
                                  name: "user"
                                }), " ", (0, ki.P)(null !== (ie = ue[ee]) && void 0 !== ie ? ie : 0)]
                              })
                            }), (0, ae.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: Ce(null !== (He = Ri.e[ee].variationTitle) && void 0 !== He ? He : Ri.e[ee].title)
                            }), (0, ae.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, oe.filterBadges)(Ri.e[ee].badges).map((ee => (0, ae.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + ee.type,
                                children: (0, ae.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, ae.jsx)(Ze.e, {
                                    badge: ee
                                  })
                                })
                              }, ee.type)))
                            })]
                          }, ee)
                        }))
                      })]
                    }), Si.description && (0, ae.jsx)("p", {
                      className: "GameInformationDescription",
                      children: Si.description
                    })]
                  }), (0, ae.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, ae.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!FH && (0, ae.jsx)(Re.g, {
                        tooltipInner: (0, ae.jsx)("div", {
                          children: Ce("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, ae.jsx)(ke.m, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            TH(si[0])
                          },
                          children: (0, ae.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, ae.jsx)(je.e, {
                              name: "play"
                            }), " ", Ce("homePage:rejoinLobbyNumber", {
                              number: si[0]
                            })]
                          })
                        })
                      }), FH && qH]
                    }), (0, ae.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!FH && qH, (0, ae.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, ae.jsx)(je.e, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, ae.jsx)(Te.d, {
                          className: "JoinLobbyInput",
                          placeholderText: Ce("homePage:lobbyName"),
                          maxLength: ki.O,
                          domRef: Ei,
                          onValueChange: ee => {
                            ee = (0, ki.ub)(ee), Ti(ee)
                          },
                          onEnter: () => {
                            0 === fi.length ? TH(si[0]) : TH(fi)
                          }
                        }), (0, ae.jsx)(ke.c, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === fi.length ? TH(si[0]) : TH(fi)
                          },
                          children: Ce("general:join")
                        })]
                      })]
                    }), (0, ae.jsxs)("section", {
                      className: fe()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !UH
                      }),
                      children: [(0, ae.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, ae.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, ae.jsx)(je.e, {
                            name: "clock-rotate-left"
                          }), UH && (0, ae.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: Ce("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, ae.jsx)(ti.d, {
                        lobbyGroups: [si, Ii],
                        onLobbyClick: ee => {
                          TH(ee)
                        },
                        keyPrefix: yi.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== RH && (0, ae.jsx)(Le, {
                eventName: RH
              })]
            }), BH && (0, ae.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, ae.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, ae.jsxs)("div", {
                  className: fe()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === Si.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === Si.showWorldsInsteadOfCustomLobbies && (0, ae.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, ae.jsx)(je.e, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, ae.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, ae.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Ce("game:worlds")]
                    })]
                  }), !1 === Si.showWorldsInsteadOfCustomLobbies && (0, ae.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, ae.jsx)(je.e, {
                      name: "joystick"
                    }), (0, ae.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, ae.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Ce("homePage:customLobbies")]
                    })]
                  }), (0, ae.jsx)(ke.M, {
                    onClick: () => {
                      yH("explore")
                    },
                    active: "explore" === HH,
                    children: Ce("general:explore")
                  }), (0, ae.jsx)(ke.M, {
                    onClick: () => {
                      yH("favourite")
                    },
                    active: "favourite" === HH,
                    children: Ce("homePage:favouriteLobbies")
                  }), (0, ae.jsx)(ke.M, {
                    onClick: () => {
                      yH("owned")
                    },
                    active: "owned" === HH,
                    children: Ce("homePage:ownedLobbies")
                  })]
                }), (0, ae.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, ae.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, ae.jsx)(Bi.b, {
                      label: "Create",
                      onClick: () => {
                        ii.NotificationProvider.showCustomPopup({
                          body: ee => (0, ae.jsx)(Hi.CreateCustomLobby, {
                            gameNameWithVariation: yi.gameNameWithVariation,
                            close: ee
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === Ni && (0, ae.jsx)(Bi.h, {}), !1 === Ni && (0, ae.jsx)(di, {
                      customLobbies: ri,
                      favouriteLobbies: eH,
                      toggleLikeLobby: pH,
                      showReport: se.featureFlags.useSocialFeatures && "owned" !== HH
                    })]
                  }), EH]
                })]
              })
            })]
          }), !BH && EH]
        })
      })
    }

    function mi(ee) {
      let {
        variation: ie,
        isSelected: He,
        children: ye
      } = ee;
      const Fe = Ri.e[ie],
        oe = (0, Me.m)(ie, (0, Me.n)(Fe)),
        Re = (0, be.f)(oe),
        ke = (0, Ke.f)([(0, Me.k)(ie, (0, Me.e)(Fe))]);
      return (0, ae.jsxs)(re.LinkPreserveSearch, {
        to: (0, ve.w)(ie),
        replace: !0,
        className: fe()("GameInformationVariation", Ue.l, {
          SelectedGameInformationVariation: He
        }),
        onClick: ee => {
          if (!(0, ei.e)(ee)) return;
          const He = (0, ze.j)(ie);
          Je.i.setItem(He, ie)
        },
        onMouseEnter: ke.start,
        onMouseLeave: ke.cancel,
        onFocus: ke.start,
        onBlur: ke.cancel,
        style: (0, Ue.i)(Re),
        children: [(0, ae.jsx)(Ue.e, {
          image: Re
        }), ye]
      })
    }
  },
  7114: (ee, ie, He) => {
    He.d(ie, {
      b: () => ze
    });
    var ye = He(59),
      be = He(1438),
      Me = He(1490),
      Ke = He(3871),
      Ue = He(1075),
      Fe = He(1320),
      Je = He(1351),
      oe = He(1323),
      Re = He(1053),
      ke = He.n(Re),
      qe = He(7112),
      fe = He(1228);

    function Te(ee) {
      let {
        info: ie,
        className: He
      } = ee;
      const {
        statusText: ye,
        rowText: be
      } = (0, qe.h)();
      return (0, fe.jsxs)("div", {
        className: ke()("GameApprovalInfoDetails", He),
        children: [(0, fe.jsxs)("div", {
          className: ke()("GameApprovalInfoSummary", ie.overallPassed ? "Passed" : "Failed"),
          children: [(0, fe.jsx)(oe.e, {
            name: ie.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, fe.jsx)("span", {
            children: ye(ie.status)
          })]
        }), ie.rows.length > 0 && (0, fe.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: ie.rows.map((ee => {
            const {
              label: ie,
              value: He
            } = be(ee);
            return (0, fe.jsxs)("div", {
              className: ke()("GameApprovalInfoRow", ee.passed ? "Passed" : "Failed"),
              children: [(0, fe.jsx)(oe.e, {
                name: ee.passed ? "check" : "xmark"
              }), (0, fe.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, fe.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: ie
                }), null !== He && (0, fe.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: He
                })]
              })]
            }, ee.kind)
          }))
        })]
      })
    }
    var pe = He(1127),
      Xe = He(1340);

    function ze(ee) {
      Xe.NotificationProvider.showCustomPopup({
        body: () => (0, fe.jsx)(Be, {
          ...ee
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function Be(ee) {
      let {
        schematicId: ie,
        canOverride: He,
        onApprovalChanged: Re
      } = ee;
      const {
        t: ke
      } = (0, pe.v)(), {
        userContext: qe
      } = (0, Ue.b)(), Xe = (0, Ke.c)(), [ze, Be] = (0, ye.useState)(null), [Ee, ge] = (0, ye.useState)(null), [Oe, de] = (0, ye.useState)(!1), We = (0, ye.useCallback)((() => {
        ge(null), Me.b.getGameApprovalInfo(qe, ie).then((ee => {
          Xe.current && Be(ee)
        })).catch((ee => {
          console.error("Failed to get game approval info", ee), Xe.current && ge(ke("studio:approvalLoadFailed"))
        }))
      }), [qe, ie, Xe, ke]);
      (0, ye.useEffect)((() => {
        We()
      }), [We]);
      const te = ee => {
        Oe || (de(!0), Me.b.setGameApproval(qe, ie, ee).then((() => {
          null === Re || void 0 === Re || Re(), Xe.current && We()
        })).catch((ee => {
          console.error("Failed to set game approval", ee)
        })).finally((() => {
          Xe.current && de(!1)
        })))
      };
      return (0, fe.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, fe.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: ke("studio:approvalTitle")
        }), !ze && !Ee && (0, fe.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, fe.jsx)(Fe.b, {})
        }), Ee && (0, fe.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: Ee
        }), ze && (0, fe.jsxs)(fe.Fragment, {
          children: [(0, fe.jsx)(Te, {
            info: ze
          }), He && (0, fe.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== ze.manualOverride && (0, fe.jsx)(Je.g, {
              tooltipInner: (0, fe.jsx)("div", {
                children: ke("studio:approvalApproveTooltip")
              }),
              children: (0, fe.jsxs)(be.m, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  te(!0)
                },
                disabled: Oe,
                children: [(0, fe.jsx)(oe.e, {
                  name: "check"
                }), " ", ke("studio:approvalApprove")]
              })
            }), !1 !== ze.manualOverride && (0, fe.jsx)(Je.g, {
              tooltipInner: (0, fe.jsx)("div", {
                children: ke("studio:approvalDenyTooltip")
              }),
              children: (0, fe.jsxs)(be.G, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  te(!1)
                },
                disabled: Oe,
                children: [(0, fe.jsx)(oe.e, {
                  name: "xmark"
                }), " ", ke("studio:approvalDeny")]
              })
            }), null !== ze.manualOverride && (0, fe.jsx)(Je.g, {
              tooltipInner: (0, fe.jsx)("div", {
                children: ke("studio:approvalClearOverrideTooltip")
              }),
              children: (0, fe.jsxs)(be.c, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  te(null)
                },
                disabled: Oe,
                children: [(0, fe.jsx)(oe.e, {
                  name: "arrows-rotate"
                }), " ", ke("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  7112: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      h: () => Ke
    });
    var ye = He(347),
      be = He(1127);
    const Me = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function Ke() {
      const {
        t: ee,
        selectedLanguage: ie
      } = (0, be.v)();
      return {
        statusText: ie => ee(Me[ie]),
        rowText: He => {
          const Me = (ee, He) => (0, ye.ib)((0, be.l)(ie.code, ee), 0, He),
            Ke = (ie, He) => null === He ? ie : ee("studio:approvalWithMinDays", {
              value: ie,
              days: He
            });
          switch (He.kind) {
            case "ownerAccountAge": {
              const ie = He.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: ee("studio:approvalAccountAgeLabel"),
                value: Ke(ee(ie, {
                  age: Me(ie, He.accountAgeMs)
                }), He.minAccountAgeDays)
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: ee("studio:approvalSinceUnbannedLabel"), value: Ke(Me("studio:approvalSinceUnbannedLabel", He.sinceMs), He.minDays)
              };
            case "reportHold": {
              const {
                detail: ie
              } = He;
              if (null === ie) return {
                label: ee("studio:approvalUnderInvestigation"),
                value: null
              };
              const ye = ie.weightedReporters.toFixed(1),
                be = ie.threshold.toFixed(1),
                Ke = ee("studio:approvalReportHoldLabel", {
                  hours: ie.windowHours
                });
              if (null === ie.heldUntil) return {
                label: Ke,
                value: ee("studio:approvalReportHoldValue", {
                  weightedReporters: ye,
                  threshold: be
                })
              };
              const Ue = "studio:approvalReportHoldValueHeld";
              return {
                label: Ke,
                value: ee(Ue, {
                  weightedReporters: ye,
                  threshold: be,
                  time: Me(Ue, ie.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function Ue(ee) {
      return null === ee.manualOverride && ee.rows.some((ee => "reportHold" === ee.kind && !ee.passed))
    }
  },
  34936: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(59),
      be = He(3791);

    function Me() {
      const [ee, ie] = (0, ye.useState)(!1);
      return (0, ye.useLayoutEffect)((() => {
        let ee = !0;
        return (0, be.f)().then((() => {
          ee && ie(!0)
        })), () => {
          ee = !1
        }
      }), []), ee
    }
  },
  9667: (ee, ie, He) => {
    He.d(ie, {
      c: () => pe,
      d: () => Xe
    });
    var ye = He(153),
      be = He(186),
      Me = He(1033),
      Ke = He(1040),
      Ue = He(1169),
      Fe = He(1983),
      Je = He(2418),
      oe = He(1490),
      Re = He(1340),
      ke = He(1083),
      qe = He(9669),
      fe = He(1502),
      Te = He(1536);

    function pe(ee, ie) {
      const He = !0 === ie.debugResult.gameRefused,
        Me = He || ie.code === ye.k.REQUEST_TO_MATCHMAKING ? (0, qe.l)(ie.message) : null;
      if (null !== Me) return ge(ee, ee((0, qe.o)(Me)), ee(qe.n[Me])), !0;
      if (He) return async function(ee) {
        const {
          gameNameWithVariation: ie,
          lobbyName: He,
          shownLobbyName: ye
        } = Fe.gameBridge.latest("connectedGame"), be = "classic" === ie && (0, Ue.I)(He) ? ye : await (0, Je.h)(ee, ie, He);
        return "" !== be ? ee("general:cantJoinGame", {
          game: be
        }) : ee("general:cantJoinThisGame")
      }(ee).then((He => {
        ge(ee, He, ie.message)
      })), !0;
      const {
        joinFailure: Ke
      } = ie.debugResult, oe = "refused" === (null === Ke || void 0 === Ke ? void 0 : Ke.at) ? Ke.code : null;
      return oe === be.c.schematicNotPublished.code ? (async function(ee, ie) {
        const He = ze(),
          ye = await Ee(He);
        if (null === ye || ye.gamePublished) return void ge(ee, ee("general:cantJoinThisGame"), ie);
        await Be(ee, "rocket-launch", ee("studio:gameNotPublishedTitle", {
          game: ye.name
        }), ee("studio:publishInStudio"), He)
      }(ee, ie.message), !0) : (oe === be.c.schematicBanned.code || oe === be.c.customGameTakenDown.code) && (Ee(ze()).then((ie => {
        Xe(ee, ie)
      })), !0)
    }

    function Xe(ee, ie) {
      !0 !== (null === ie || void 0 === ie ? void 0 : ie.takenDown) ? ge(ee, ee("general:cantJoinThisGame"), be.c.customGameTakenDown.text) : Be(ee, "lock", ee("studio:gameTakenDownTitle", {
        game: ie.name
      }), ee("studio:viewInStudio"), ie.schematicId)
    }

    function ze() {
      return (0, Me.r)(Fe.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function Be(ee, ie, He, ye, be) {
      !0 === await Re.NotificationProvider.showPromptPopup({
        icon: ie,
        title: He,
        confirmText: ye,
        cancelText: ee("general:cancel")
      }).getResult() && (0, fe.navigatePreserveSearch)((0, Te.s)((0, Ke.b)(be), "manage"))
    }
    async function Ee(ee) {
      try {
        return await oe.b.getGame(await ke.userContextManager.getCurrentUserContext(), ee, !0)
      } catch (ie) {
        return (0, oe.c)(ie) || console.error(`Failed to get game ${ee}`, ie), null
      }
    }

    function ge(ee, ie, He) {
      Re.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: ie,
        subtitle: He,
        confirmText: ee("general:ok"),
        cancelText: ""
      })
    }
  },
  9691: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(1315),
      be = He(1169),
      Me = He(610);

    function Ke(ee) {
      return ee = function(ee, ie) {
        var He;
        const ye = new URLSearchParams(ie),
          be = ye.get("lobby"),
          Me = ye.get("vm"),
          Ke = null !== (He = be) && void 0 !== He ? He : ee.lobbyName,
          Ue = null !== Me && void 0 !== Me ? Me : ee.directJoinVmUrl;
        if (Ke === ee.lobbyName && Ue === ee.directJoinVmUrl) return ee;
        return {
          ...ee,
          lobbyName: Ke,
          directJoinVmUrl: Ue
        }
      }(ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), ee = function(ee) {
        if ((0, Me.P)(ee.directJoinVmUrl)) return ee;
        const ie = (0, be.$)(ee.directJoinVmUrl);
        null === ie && (ee.directJoinVmUrl = void 0);
        return ee
      }(ee = function(ee) {
        if ((0, Me.P)(ee.gameNameWithVariation)) return ee;
        return ee.gameNameWithVariation = (0, ye.g)(ee.gameNameWithVariation), ee
      }(ee))
    }
  },
  9683: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      g: () => be
    });
    let ye = !1;

    function be() {
      ye = !0
    }

    function Me() {
      return ye
    }
  },
  9669: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      h: () => Ke,
      l: () => Ue,
      n: () => Je,
      o: () => Fe
    });
    var ye = He(186),
      be = He(5018);

    function Me(ee) {
      return Ke(ee) === ye.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function Ke(ee) {
      return "object" === typeof ee && null !== ee ? ee.code : void 0
    }

    function Ue(ee) {
      var ie;
      return null !== (ie = Object.keys(be.e).find((ie => be.e[ie] === ee))) && void 0 !== ie ? ie : null
    }

    function Fe(ee) {
      return "notWhitelisted" === ee ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Je = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  37150: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      h: () => ye
    });
    const ye = "skyblockSkills",
      be = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);