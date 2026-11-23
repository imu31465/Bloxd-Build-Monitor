export const id = 122;
export const ids = [122, 396];
export const modules = {
  36221: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => lz
    });
    var QC = ZC(310),
      wC = ZC(3464),
      bC = ZC(3498),
      nC = ZC(3490),
      fC = ZC(3487),
      oC = ZC(1143),
      qC = ZC(38),
      FC = ZC(1645),
      WC = ZC(1321),
      NC = ZC(1388),
      MC = ZC(1002),
      gC = ZC.n(MC),
      SC = ZC(1593),
      pC = ZC(48),
      PC = ZC(60),
      GC = ZC(2311),
      RC = ZC(1284),
      AC = ZC(1542),
      xC = ZC(1076),
      JC = ZC(3403),
      IC = ZC(4491),
      iC = ZC(3450),
      vC = ZC(1811),
      eC = ZC(3460),
      hC = ZC(1657),
      KC = ZC(1439),
      YC = ZC(2086),
      dC = ZC(1295),
      mC = ZC(2575),
      HC = ZC(4971),
      EC = ZC(1056);
    const lC = 15e3,
      XC = 2500;

    function cC(CC) {
      var zC;
      let {
        eventName: ZC
      } = CC;
      const {
        t: QC
      } = (0, oC.y)(), wC = hC.g[ZC], [bC, nC] = (0, pC.useState)((() => Date.now() >= wC.endsAt.getTime())), [fC, qC] = (0, pC.useState)("overall"), FC = function(CC, zC) {
        const {
          userContext: ZC,
          isUserContextUpdating: QC
        } = (0, xC.e)(), wC = `${CC}:${zC}`, [bC, nC] = (0, pC.useState)({
          requestKey: wC,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, pC.useEffect)((() => {
          if (QC) return;
          let bC, fC = !1;
          const oC = async () => {
            if ("visible" === document.visibilityState) try {
              const QC = await KC.d.getGameEventLeaderboard(ZC, {
                event: CC,
                scope: zC
              });
              fC || nC({
                requestKey: wC,
                leaderboard: {
                  status: "loaded",
                  leaderboard: QC
                }
              })
            } catch {
              fC || nC((CC => CC.requestKey === wC && "loaded" === CC.leaderboard.status ? CC : {
                requestKey: wC,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            fC || (bC = setTimeout(oC, lC))
          };
          return oC(), () => {
            fC = !0, clearTimeout(bC)
          }
        }), [CC, zC, wC, ZC, QC]), bC.requestKey === wC ? bC.leaderboard : {
          status: "loading"
        }
      }(ZC, fC), WC = function(CC) {
        const zC = (0, pC.useRef)(null),
          ZC = (0, pC.useRef)(0),
          QC = (0, pC.useRef)(),
          [wC, bC] = (0, pC.useState)({});
        return (0, pC.useEffect)((() => {
          const wC = null === CC || void 0 === CC ? void 0 : CC.entries;
          if (!wC) return;
          const nC = new Map(wC.map((CC => [CC.player.name, CC.value]))),
            fC = zC.current;
          if (zC.current = nC, null === fC) return;
          const oC = {};
          for (const [CC, zC] of nC) {
            const QC = fC.get(CC);
            void 0 !== QC && zC > QC && (oC[CC] = {
              amount: zC - QC,
              key: ZC.current++
            })
          }
          0 !== Object.keys(oC).length && (bC(oC), clearTimeout(QC.current), QC.current = setTimeout((() => {
            bC({})
          }), XC))
        }), [CC]), (0, pC.useEffect)((() => () => {
          clearTimeout(QC.current)
        }), []), wC
      }("loaded" === FC.status ? FC.leaderboard : null), NC = function(CC) {
        const [zC, ZC] = (0, pC.useState)(null), QC = "loaded" === CC.status ? CC.leaderboard.goalProgress : void 0;
        return (0, pC.useEffect)((() => {
          QC && ZC(QC)
        }), [QC]), zC
      }(FC), MC = YC.f[`profileEffect_${wC.prizePack}`];
      if (bC) return null;
      const SC = "loaded" === FC.status ? FC.leaderboard : null,
        PC = null !== (zC = null === SC || void 0 === SC ? void 0 : SC.entries) && void 0 !== zC ? zC : null,
        GC = null !== SC && void 0 !== SC && SC.own && null !== PC && !PC.some((CC => CC.isOwn)) ? SC.own : null;
      return (0, EC.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, EC.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, EC.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, EC.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, EC.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, EC.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), QC("gameEvents:live")]
              }), (0, EC.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [QC("gameEvents:endsIn"), (0, EC.jsx)(iC.b, {
                  toTime: wC.endsAt,
                  onReachEndOfCountdown: () => {
                    nC(!0)
                  }
                })]
              })]
            }), (0, EC.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: QC(wC.titleKey)
            }), (0, EC.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, EC.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [MC && (0, EC.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, EC.jsx)(MC, {})
                }), (0, EC.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, EC.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: QC("gameEvents:prize")
                  }), (0, EC.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: QC(wC.prizeNameKey)
                  })]
                })]
              }), (0, EC.jsx)(uC, {
                event: wC,
                progress: NC
              })]
            })]
          }), (0, EC.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, EC.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, EC.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: QC(wC.leaderboard.titleKey)
              }), (0, EC.jsx)(HC.b, {
                ariaLabel: QC("gameEvents:leaderboardScope"),
                options: hC.e.map((CC => ({
                  value: CC,
                  label: QC(`gameEvents:${CC}Scope`)
                }))),
                value: fC,
                onChange: qC
              })]
            }), "loading" === FC.status && (0, EC.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, EC.jsx)(dC.d, {})
            }), ("unavailable" === FC.status || "loaded" === FC.status && null === PC) && (0, EC.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: QC("gameEvents:leaderboardUnavailable")
            }), null !== PC && 0 === PC.length && (0, EC.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: QC("friends" === fC ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== PC && PC.length > 0 && (0, EC.jsx)("ol", {
              className: "GameEventPanelRows",
              children: PC.map((CC => {
                const zC = WC[CC.player.name];
                return (0, EC.jsxs)("li", {
                  className: gC()("GameEventPanelRow", {
                    GameEventPanelRowOwn: CC.isOwn,
                    GameEventPanelRowTop: CC.rank <= 3
                  }),
                  children: [(0, EC.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", CC.rank]
                  }), (0, EC.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, EC.jsx)(mC.f, {
                      playerSocialPreview: {
                        ...CC.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== zC && (0, EC.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", zC.amount.toLocaleString()]
                  }, zC.key), (0, EC.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: CC.value.toLocaleString()
                  })]
                }, CC.player.name)
              }))
            }), GC && (0, EC.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, EC.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", GC.rank.toLocaleString()]
              }), (0, EC.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: QC("gameEvents:yourPlace")
              }), (0, EC.jsx)("span", {
                className: "GameEventPanelScore",
                children: GC.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function uC(CC) {
      let {
        event: zC,
        progress: ZC
      } = CC;
      const {
        t: QC
      } = (0, oC.y)(), wC = null !== ZC && zC.prizeGoals.some(((CC, zC) => ZC[zC] >= CC.target));
      return (0, EC.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, EC.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: QC(wC ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, EC.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: zC.prizeGoals.map(((CC, zC) => {
            const wC = null === ZC ? null : Math.min(ZC[zC], CC.target);
            return (0, EC.jsxs)(pC.Fragment, {
              children: [zC > 0 && (0, EC.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: QC("gameEvents:goalsOr")
              }), (0, EC.jsxs)("div", {
                className: gC()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: wC === CC.target
                }),
                children: [(0, EC.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: QC(CC.labelKey)
                }), (0, EC.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, EC.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== wC && void 0 !== wC ? wC : 0) / CC.target * 100 + "%"
                    }
                  }), null !== wC && (0, EC.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [wC.toLocaleString(), " / ", CC.target.toLocaleString()]
                  })]
                })]
              })]
            }, CC.board)
          }))
        })]
      })
    }
    var rC = ZC(1479),
      sC = ZC(1529),
      TC = ZC(991),
      aC = ZC(696),
      tC = ZC(3448);

    function DC(CC) {
      let {
        gameNameWithVariation: zC
      } = CC;
      const ZC = (0, rC.A)(zC),
        [QC, wC] = (0, pC.useState)(null);
      if ((0, pC.useEffect)((() => {
          if (!ZC) return;
          let CC = !0;
          return (0, sC.k)(ZC).then((zC => {
            CC && wC(zC)
          })).catch((CC => {
            console.error(`Failed to load the page copy for ${ZC.name}`, CC)
          })), () => {
            CC = !1
          }
        }), [ZC]), !ZC || !QC || QC.name !== ZC.name) return null;
      const bC = (0, sC.g)(QC),
        nC = new Set((0, TC.e)((0, aC.i)()).map((CC => (0, rC.r)(CC)))),
        fC = QC.similarGames.filter((CC => nC.has((0, rC.r)(CC))));
      return (0, EC.jsx)("div", {
        className: "GamePageContent",
        children: (0, EC.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, EC.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, EC.jsx)("h2", {
              children: bC.whatIs
            }), QC.whatIs.map((CC => (0, EC.jsx)("p", {
              children: CC
            }, CC)))]
          }), (0, EC.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, EC.jsx)("h2", {
              children: bC.howToPlay
            }), QC.howToPlay.map((CC => (0, EC.jsx)("p", {
              children: CC
            }, CC)))]
          }), (0, EC.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, EC.jsx)("h2", {
              children: bC.features
            }), (0, EC.jsx)("ul", {
              children: QC.features.map((CC => (0, EC.jsx)("li", {
                children: CC
              }, CC)))
            })]
          }), (0, EC.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, EC.jsx)("h2", {
              children: bC.tips
            }), (0, EC.jsx)("ul", {
              children: QC.tips.map((CC => (0, EC.jsx)("li", {
                children: CC
              }, CC)))
            })]
          }), (0, EC.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, EC.jsx)("h2", {
              children: bC.faq
            }), QC.faq.map((CC => {
              let {
                question: zC,
                answer: ZC
              } = CC;
              return (0, EC.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, EC.jsx)("h3", {
                  children: zC
                }), (0, EC.jsx)("p", {
                  children: ZC
                })]
              }, zC)
            }))]
          }), fC.length > 0 && (0, EC.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, EC.jsx)("h2", {
              children: bC.similarGames
            }), (0, EC.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: fC.map((CC => (0, EC.jsx)("li", {
                children: (0, EC.jsx)(tC.d, {
                  source: {
                    type: "game",
                    gameNameWithVariation: CC
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, CC)))
            })]
          })]
        })
      })
    }
    var jC = ZC(1013),
      yC = ZC(77),
      LC = ZC(1078),
      UC = ZC(34202),
      BC = ZC(1575),
      OC = ZC(1463),
      kC = ZC(1453),
      VC = ZC(1540),
      Cz = ZC(1394),
      zz = ZC(1307),
      Zz = ZC(36223),
      Qz = ZC(1178),
      wz = ZC(970),
      bz = ZC(326),
      nz = ZC(979),
      fz = ZC(1477),
      oz = ZC(8912),
      qz = ZC(20),
      Fz = ZC(2465),
      Wz = ZC(728),
      Nz = ZC(1169),
      Mz = ZC(6513),
      gz = ZC(3452);

    function Sz(CC) {
      let {
        preview: zC,
        isBroken: ZC
      } = CC;
      const QC = null === zC ? null : (0, bC.g)(zC, "small"),
        nC = (0, wC.e)(null !== QC && void 0 !== QC ? QC : bC.p);
      return null === zC ? (0, EC.jsx)("div", {
        className: gC()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: ZC
        }),
        children: (0, EC.jsx)(jC.c, {
          name: ZC ? "triangle-exclamation" : "star"
        })
      }) : (0, EC.jsx)("div", {
        className: gC()("FeaturedGamesPopupSlotThumbnail", fC.k),
        style: (0, fC.g)(nC),
        role: "img",
        "aria-label": zC.name,
        children: (0, EC.jsx)(fC.d, {
          image: nC
        })
      })
    }

    function pz(CC) {
      let {
        schematicId: zC,
        gameName: ZC
      } = CC;
      const {
        userContext: wC
      } = (0, xC.e)(), bC = (0, gz.e)(), [nC, fC] = (0, pC.useState)(null), [oC, qC] = (0, pC.useState)(null), [FC, WC] = (0, pC.useState)(!1), MC = (0, pC.useCallback)((() => {
        qC(null), KC.d.getFeaturedGames(wC).then((CC => {
          bC.current && fC(CC.slots)
        })).catch((CC => {
          console.error("Failed to get featured games", CC), bC.current && qC("Failed to load featured games")
        }))
      }), [wC, bC]);
      (0, pC.useEffect)((() => {
        MC()
      }), [MC]);
      const gC = (CC, zC) => {
        FC || (WC(!0), KC.d.setFeaturedGame(wC, CC, zC).then((() => {
          bC.current && MC()
        })).catch((CC => {
          console.error("Failed to set featured game", CC), bC.current && qC("Failed to update the featured slot")
        })).finally((() => {
          bC.current && WC(!1)
        })))
      };
      return (0, EC.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, EC.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !nC && !oC && (0, EC.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, EC.jsx)(dC.d, {})
        }), oC && (0, EC.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: oC
        }), nC && (0, EC.jsxs)(EC.Fragment, {
          children: [(0, EC.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: nC.map((CC => {
              const ZC = CC.schematicId === zC,
                wC = null === CC.schematicId,
                {
                  categoryGroup: bC
                } = QC.J[CC.slotId];
              return (0, EC.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, EC.jsx)(Sz, {
                  preview: CC.preview,
                  isBroken: !wC
                }), (0, EC.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, EC.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, QC.jb)(bC), " \xb7 position", " ", (0, QC.M)(CC.slotId, QC.Nb) + 1, " of", " ", (0, QC.Jb)(bC, QC.Nb)]
                  }), wC && (0, EC.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !wC && null !== CC.preview && (0, EC.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: CC.preview.name
                  }), !wC && null === CC.preview && (0, EC.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, EC.jsx)(jC.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, EC.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [wC && (0, EC.jsxs)(NC.t, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      gC(CC.slotId, zC)
                    },
                    disabled: FC,
                    children: [(0, EC.jsx)(jC.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !wC && !ZC && (0, EC.jsxs)(NC.O, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      gC(CC.slotId, zC)
                    },
                    disabled: FC,
                    children: [(0, EC.jsx)(jC.c, {
                      name: "star"
                    }), " Replace"]
                  }), !wC && (0, EC.jsxs)(NC.I, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      gC(CC.slotId, null)
                    },
                    disabled: FC,
                    children: [(0, EC.jsx)(jC.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, CC.slotId)
            }))
          }), (0, EC.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var Pz = ZC(4613),
      Gz = ZC(4527),
      Rz = ZC(3419);
    const Az = 8,
      xz = 12;

    function Jz(CC) {
      let {
        customLobbies: zC,
        favouriteLobbies: ZC,
        toggleLikeLobby: QC,
        showReport: wC
      } = CC;
      const [bC, nC] = (0, pC.useState)(Az);
      return (0, pC.useEffect)((() => {
        if (bC >= zC.length) return;
        let CC = !0;
        return (0, Rz.e)().then((() => {
          CC && nC(bC + xz)
        })), () => {
          CC = !1
        }
      }), [bC, zC.length]), (0, EC.jsx)(EC.Fragment, {
        children: zC.slice(0, bC).map((CC => (0, EC.jsx)(Gz.h, {
          customLobby: CC,
          favouriteLobbies: ZC,
          toggleLikeLobby: QC,
          showReport: wC
        }, CC.name)))
      })
    }
    var Iz = ZC(4530),
      iz = ZC(4547),
      vz = ZC(4509),
      ez = ZC(3521),
      hz = ZC(8907),
      Kz = ZC(193);
    const Yz = {
      skyblock: [ZC(36247).c]
    };
    var dz = ZC(600);
    const mz = {
      listedVariations: null,
      backgroundImage: bC.p,
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

    function Hz(CC, zC) {
      const ZC = Wz.f[CC.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, bC.g)(CC, "large"),
        badges: [],
        category: CC.gameCategory,
        title: void 0 !== (null === ZC || void 0 === ZC ? void 0 : ZC.title) ? zC(ZC.title) : CC.name,
        variationTitle: null,
        description: void 0 !== (null === ZC || void 0 === ZC ? void 0 : ZC.description) ? zC(ZC.description) : CC.description,
        ownerSocialPreviewWithoutLocation: "owner" in CC ? CC.owner : null,
        ccu: CC.ccu,
        favourites: CC.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in CC ? CC.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function Ez(CC) {
      var zC, ZC, QC;
      return null !== (zC = null !== (ZC = (0, Kz.n)() ? function(CC) {
        for (const [zC, ZC] of Object.entries(Yz)) {
          const QC = [zC, ...ZC.map((CC => (0, bz.Bb)(zC, CC)))];
          if (QC.includes(CC)) return QC
        }
        return null
      }(CC) : null) && void 0 !== ZC ? ZC : null === (QC = Wz.d[CC]) || void 0 === QC ? void 0 : QC.listedVariations) && void 0 !== zC ? zC : null
    }

    function lz() {
      const {
        gameNameWithVariation: CC
      } = (0, OC.C)();
      if ((0, pC.useEffect)(ez.m, []), CC && (0, Qz.r)(CC)) return (0, EC.jsx)(Xz, {
        urlId: CC
      }, CC);
      const zC = CC && (0, wz.i)(CC) ? CC : "firstParty";
      return (0, EC.jsx)(cz, {}, zC)
    }

    function Xz(CC) {
      let {
        urlId: zC
      } = CC;
      const {
        userContext: ZC,
        isUserContextUpdating: QC
      } = (0, xC.e)(), wC = (0, pC.useMemo)((() => (0, BC.k)(zC)), [zC]);
      (0, pC.useMemo)((() => {
        if (null === wC) return;
        const CC = LC.userContextManager.peekCurrentUserContext();
        (null !== CC ? KC.d.getGame(CC, wC.schematicId) : LC.userContextManager.getCurrentUserContext().then((CC => KC.d.getGame(CC, wC.schematicId)))).catch((CC => {
          console.error(`Failed to get the custom game ${wC.schematicId}`, CC), (0, BC.h)(zC)
        }))
      }), [wC, zC]);
      const [bC, nC] = (0, pC.useState)(null), fC = (0, UC.e)();
      (0, pC.useEffect)((() => {
        if (null !== wC || QC) return;
        let CC = !0;
        return KC.d.getGameByUrlId(ZC, zC).then((ZC => {
          CC && nC({
            urlId: zC,
            game: ZC
          })
        })).catch((ZC => {
          console.error(`Failed to find the custom game with urlId ${zC}`, ZC), CC && (0, kC.navigateToHomePage)()
        })), () => {
          CC = !1
        }
      }), [zC, wC, QC, ZC]);
      const oC = null !== wC && void 0 !== wC ? wC : (null === bC || void 0 === bC ? void 0 : bC.urlId) === zC ? bC.game : null;
      return null === oC ? (0, EC.jsx)(dC.d, {}) : fC ? (0, EC.jsx)(cz, {
        gameNameWithVariation: (0, wz.r)(oC.schematicId),
        knownCustomGame: oC
      }, oC.schematicId) : null
    }

    function cz(CC) {
      var zC, ZC, nC, MC, hC, YC, dC, HC;
      let {
        gameNameWithVariation: lC,
        knownCustomGame: XC = null
      } = CC;
      const {
        t: uC
      } = (0, oC.y)();
      (0, Fz.j)();
      const sC = (0, Fz.r)(),
        {
          userContext: TC,
          isUserContextUpdating: aC
        } = (0, xC.e)(),
        tC = (0, vz.h)(),
        LC = (0, kC.useNavigatePreserveSearch)(),
        UC = (0, OC.C)(),
        BC = (0, pC.useMemo)((() => lC ? {
          gameNameWithVariation: lC
        } : UC), [lC, UC]),
        Cz = (0, oz.b)(BC),
        Qz = (0, pC.useMemo)((() => {
          const CC = function(CC) {
            var zC, ZC;
            const QC = Ez(CC);
            if (!QC || 0 === QC.length || QC.includes(CC)) return CC;
            const wC = qC.i.getItem((0, GC.k)(CC));
            if (wC && QC.includes(wC)) return wC;
            return null !== (zC = null === (ZC = Wz.d[CC]) || void 0 === ZC ? void 0 : ZC.defaultListedVariation) && void 0 !== zC ? zC : QC[0]
          }(Cz.gameNameWithVariation);
          return CC === Cz.gameNameWithVariation ? Cz : {
            ...Cz,
            gameNameWithVariation: CC
          }
        }), [Cz]);
      (0, pC.useEffect)((() => {
        const CC = Cz.gameNameWithVariation;
        Qz.gameNameWithVariation !== CC && CC !== (0, bz.Cb)(CC) && LC((0, rC.v)(Qz.gameNameWithVariation), {
          replace: !0
        })
      }), [Qz.gameNameWithVariation, Cz.gameNameWithVariation, LC]);
      const [gz, Sz] = (0, pC.useState)(""), Rz = pC.useRef(null), [Az, xz] = (0, pC.useState)(), ez = (0, wz.i)(Qz.gameNameWithVariation), Kz = (0, pC.useMemo)((() => ez ? null : function(CC, zC, ZC) {
        var QC, wC;
        const nC = Wz.d[CC];
        return (0, dz.H)(nC) ? null : {
          listedVariations: Ez(CC),
          backgroundImage: (0, bC.k)(CC, (0, bC.e)(nC)),
          badges: (0, FC.filterBadges)(nC.badges),
          category: nC.type,
          title: ZC(nC.title),
          variationTitle: nC.variationTitle ? ZC(nC.variationTitle) : null,
          description: ZC(nC.description),
          ownerSocialPreviewWithoutLocation: null,
          ccu: null !== zC ? null !== (QC = zC[CC]) && void 0 !== QC ? QC : 0 : null,
          favourites: null,
          isFavourite: null,
          useRejoinLastLobbyButton: nC.useRejoinLastLobbyButton,
          showWorldsInsteadOfCustomLobbies: nC.showWorldsInsteadOfCustomLobbies,
          canCreateCustomLobbies: null === (wC = nC.canCreateCustomLobbies) || void 0 === wC || wC,
          countdownInformation: (0, GC.h)(CC)
        }
      }(Qz.gameNameWithVariation, sC, uC)), [ez, Qz.gameNameWithVariation, sC, uC]), [Yz, lz] = (0, pC.useState)(!1), [Xz, cz] = (0, pC.useState)((() => XC ? Hz(XC, uC) : mz)), rz = null !== Kz && void 0 !== Kz ? Kz : Xz, [sz] = (0, pC.useState)(rz === mz), Tz = (0, wC.e)(rz.backgroundImage, {
        keepPrevious: !0,
        decode: !0
      }), {
        recentlyPlayedPublicLobbies: az,
        recentlyPlayedCustomLobbies: tz
      } = (0, pC.useMemo)((() => function(CC, zC, ZC, QC) {
        var wC;
        const bC = CC => {
            const ZC = (0, wz.m)(CC),
              QC = zC.find((zC => "custom" === zC.type ? zC.schematicId === ZC : zC.gameNameWithVariation === CC));
            return QC ? [...QC.recentLobbies] : []
          },
          nC = (0, FC.getRecentGameNameWithVariationLobbiesKey)(CC),
          fC = null !== (wC = qC.i.getItem(nC)) && void 0 !== wC ? wC : [],
          oC = [...bC(CC), ...fC],
          WC = [];
        for (const qC of oC)(0, Nz.U)(qC) && !WC.includes(qC) && WC.push(qC);
        let NC = oC;
        if (ZC) {
          const CC = bC("classic_worlds"),
            zC = oC.filter((zC => !CC.includes(zC)));
          NC = [...CC, ...zC]
        }
        const MC = [],
          gC = !1 === QC ? [] : NC;
        for (const qC of gC)(0, Nz.U)(qC) || MC.includes(qC) || MC.push(qC);
        return {
          recentlyPlayedPublicLobbies: WC,
          recentlyPlayedCustomLobbies: MC
        }
      }(Qz.gameNameWithVariation, tC, rz.showWorldsInsteadOfCustomLobbies, rz.canCreateCustomLobbies)), [Qz.gameNameWithVariation, tC, rz.showWorldsInsteadOfCustomLobbies, rz.canCreateCustomLobbies]), [Dz, jz] = (0, pC.useState)(!0), [yz, Lz] = (0, pC.useState)([]), [Uz, Bz] = (0, pC.useState)(null), [Oz, kz] = (0, pC.useState)("explore"), Vz = (0, pC.useRef)(!1), CZ = (0, pC.useCallback)((CC => {
        (0, PC.unstable_batchedUpdates)((() => {
          xz(CC), cz((zC => ({
            ...Hz(CC, uC),
            isFavourite: zC.isFavourite
          })))
        }))
      }), [uC]);
      (0, pC.useEffect)((() => {
        null === qz.b.get("gameEntrySource") && (0, qz.g)("gameInformationPageDirect")
      }), []);
      const zZ = (0, pC.useRef)(null);
      (0, pC.useEffect)((() => {
        const CC = CC => {
            zZ.current = CC.target instanceof Element ? CC.target.closest("a, button") : null
          },
          zC = CC => {
            "Tab" === CC.key && (zZ.current = null)
          };
        return document.addEventListener("pointerdown", CC, !0), document.addEventListener("keydown", zC, !0), () => {
          document.removeEventListener("pointerdown", CC, !0), document.removeEventListener("keydown", zC, !0)
        }
      }), []), (0, JC.d)("Enter", (CC => {
        const zC = CC.target instanceof Element ? CC.target : null;
        if (CC.defaultPrevented || null !== zC && void 0 !== zC && zC.closest("input, textarea, select")) return;
        const ZC = null === zC || void 0 === zC ? void 0 : zC.closest("a, button");
        ZC && ZC !== zZ.current || (CC.preventDefault(), FZ())
      })), (0, IC.e)(kC.navigateToHomePage);
      const ZZ = az.length > 0 || tz.length > 0,
        QZ = !rz.useRejoinLastLobbyButton || 0 === az.length,
        wZ = ez && null === rz.ownerSocialPreviewWithoutLocation,
        bZ = TC.getPlayerName() === (null === Az || void 0 === Az || null === (zC = Az.owner) || void 0 === zC ? void 0 : zC.name),
        nZ = null !== (ZC = null === (nC = rz.badges.find((CC => "event" === CC.type))) || void 0 === nC ? void 0 : nC.event) && void 0 !== ZC ? ZC : null,
        fZ = QZ ? NC.o : NC.g,
        oZ = (0, EC.jsx)(WC.d, {
          tooltipInner: (0, EC.jsx)("div", {
            children: uC("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, EC.jsx)(fZ, {
            className: "GameInformationButton",
            padDefaultFocus: QZ,
            showPress: !0,
            onClick: () => {
              FZ()
            },
            children: (0, EC.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [QZ && (0, EC.jsxs)(EC.Fragment, {
                children: [(0, EC.jsx)(jC.c, {
                  name: "play"
                }), " "]
              }), uC("homePage:quickPlay")]
            })
          })
        });
      (0, pC.useEffect)((() => {
        if (!ez || aC) return;
        let CC = !0;
        const zC = (0, wz.m)(Qz.gameNameWithVariation);
        return KC.d.getGame(TC, zC).then((zC => {
          CC && CZ(zC)
        })).catch((zC => {
          console.error("Failed to get Custom Game information", zC), CC && (0, kC.navigateToHomePage)()
        })), KC.d.getFavouriteGames(TC).then((ZC => {
          CC && cz((CC => ({
            ...CC,
            isFavourite: ZC.includes(zC)
          })))
        })).catch((zC => {
          console.error("Failed to get favourite games", zC), CC && lz(!0)
        })), () => {
          CC = !1
        }
      }), [ez, aC, Qz.gameNameWithVariation, CZ, TC]);
      const qZ = !ez && null === Kz;

      function FZ(CC) {
        (0, hz.g)(), LC((0, RC.b)(Qz.gameNameWithVariation, CC))
      }(0, pC.useEffect)((() => {
        qZ && (0, kC.navigateToHomePage)()
      }), [qZ]), (0, pC.useEffect)((() => {
        if (!1 === rz.canCreateCustomLobbies) return;
        let CC = !0;
        return null !== rz.showWorldsInsteadOfCustomLobbies && !1 === aC && (jz(!0), KC.d.getFavouriteLobbies(TC).then((CC => {
          Bz(CC)
        })), KC.d.getOpenCustomLobbies(TC, {
          gameNameWithVariation: rz.showWorldsInsteadOfCustomLobbies ? "classic" : Qz.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === Oz,
          onlyFavouriteLobbies: "favourite" === Oz
        }).then((zC => {
          CC && (0, PC.unstable_batchedUpdates)((() => {
            Lz(zC), jz(!1)
          }))
        })).catch((zC => {
          console.error("Failed to get open custom lobbies", zC), CC && jz(!1)
        }))), () => {
          CC = !1
        }
      }), [aC, Qz, Oz, rz.showWorldsInsteadOfCustomLobbies, rz.canCreateCustomLobbies, TC]);
      const WZ = (0, pC.useCallback)((async CC => {
          try {
            if (!Uz) return;
            Uz.includes(CC) ? (KC.d.unfavouriteLobby(TC, CC), Bz(Uz.filter((zC => zC !== CC)))) : (KC.d.favouriteLobby(TC, CC).catch((CC => {
              console.error("Failed to favourite lobby", CC)
            })), Bz([...Uz, CC]))
          } catch (zC) {
            console.error("Failed to like lobby", zC)
          }
        }), [TC, Uz]),
        NZ = (null === Az || void 0 === Az ? void 0 : Az.schematicId) === (0, wz.m)(Cz.gameNameWithVariation) ? Az : null,
        MZ = NZ && (0, rC.E)(Cz.gameNameWithVariation, (CC => uC(CC)), NZ);
      (0, VC.f)(NZ && (0, rC.v)(Cz.gameNameWithVariation, NZ));
      const gZ = yC.featureFlags.canUseCustomLobbies && !0 === rz.canCreateCustomLobbies,
        SZ = (0, EC.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, EC.jsx)(DC, {
            gameNameWithVariation: Qz.gameNameWithVariation
          })
        });
      return (0, EC.jsx)(EC.Fragment, {
        children: (0, EC.jsxs)("article", {
          className: gC()("GameInformation", {
            GameInformationFadeIn: sz,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (MC = rz.countdownInformation) || void 0 === MC ? void 0 : MC.type)
          }),
          children: [MZ && (0, EC.jsx)(AC.d, {
            meta: MZ
          }), (0, EC.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, EC.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, EC.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, EC.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, EC.jsx)("div", {
                  className: gC()("GameInformationTopBackgroundImage", fC.k),
                  style: (0, fC.g)(Tz),
                  children: (0, EC.jsx)(fC.d, {
                    image: Tz
                  })
                })]
              }), (0, EC.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, EC.jsx)(Pz.d, {}), (0, EC.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, EC.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, EC.jsxs)("div", {
                      className: gC()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: wZ
                      }),
                      children: [rz.badges.map((CC => (0, EC.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${CC.type}`,
                        children: (0, EC.jsx)(eC.e, {
                          badge: CC
                        })
                      }, CC.type))), ez && (0, EC.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, EC.jsx)(vC.e, {
                          text: (0, QC.bb)({
                            type: "playerCrafted"
                          })
                        })
                      }), rz.category && (0, EC.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, EC.jsx)(vC.e, {
                          text: [{
                            str: (0, QC.eb)(rz.category).toUpperCase()
                          }]
                        })
                      }), null !== rz.ccu && (0, EC.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, EC.jsx)(jC.c, {
                          name: "user"
                        }), (0, Nz.Z)(rz.ccu), " online"]
                      }), null !== rz.ownerSocialPreviewWithoutLocation && (0, EC.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, EC.jsx)("span", {
                          children: "Made by"
                        }), (0, EC.jsx)(mC.f, {
                          playerSocialPreview: {
                            ...rz.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), wZ && (0, EC.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, EC.jsx)("span", {
                          children: "Made by"
                        }), (0, EC.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== rz.favourites && (null !== rz.isFavourite || ez && !Yz) && (0, EC.jsx)(NC.x, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== Vz.current && (Vz.current = !0, null !== rz.isFavourite)) {
                              const CC = (0, wz.m)(Qz.gameNameWithVariation);
                              let zC;
                              rz.isFavourite ? (zC = -1, KC.d.unfavouriteGame(TC, CC).catch((CC => {
                                console.error("Failed to get unfavourite game", CC)
                              })).finally((() => {
                                Vz.current = !1
                              }))) : (zC = 1, KC.d.favouriteGame(TC, CC).catch((CC => {
                                console.error("Failed to get favourite game", CC)
                              })).finally((() => {
                                Vz.current = !1
                              }))), cz((CC => ({
                                ...CC,
                                isFavourite: !CC.isFavourite
                              }))), cz((CC => ({
                                ...CC,
                                favourites: CC.favourites + zC
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (hC = rz.isFavourite) && void 0 !== hC && hC,
                        disabled: null === rz.isFavourite,
                        className: gC()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === rz.isFavourite
                        })
                      }, null === rz.isFavourite ? "pending" : "known"), ez && !wZ && yC.featureFlags.useSocialFeatures && !bZ && (0, EC.jsx)(Iz.b, {
                        targetType: "customGame",
                        targetId: (0, wz.m)(Qz.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (TC.playerHasRank("developer") || TC.playerHasRank("admin") && bZ) && (0, EC.jsxs)(NC.o, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          LC((0, fz.o)((0, nz.f)(Qz.gameNameWithVariation, !0)))
                        },
                        children: [(0, EC.jsx)(jC.c, {
                          name: "star-christmas"
                        }), " ", uC("studio:viewInStudio")]
                      }), ez && TC.playerHasRank("developer") && (0, EC.jsxs)(NC.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, Mz.e)({
                            schematicId: (0, wz.m)(Qz.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, EC.jsx)(jC.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), ez && TC.playerHasRank("developer") && (0, EC.jsxs)(NC.g, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          zz.NotificationProvider.showCustomPopup({
                            body: () => (0, EC.jsx)(pz, {
                              schematicId: (0, wz.m)(Qz.gameNameWithVariation),
                              gameName: rz.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, EC.jsx)(jC.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (YC = rz.countdownInformation) || void 0 === YC ? void 0 : YC.type) && (0, EC.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, EC.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, EC.jsx)(iC.b, {
                            toTime: rz.countdownInformation.countdownToTime
                          })]
                        }), (0, EC.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: rz.countdownInformation.previewText
                        })]
                      })]
                    }, wZ ? "pending" : "shown"), (0, EC.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, EC.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, EC.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [rz.title, " ", rz.variationTitle && (null === (dC = Wz.d[Qz.gameNameWithVariation]) || void 0 === dC ? void 0 : dC.variationThumbnailUseBigRatio) && (0, EC.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: rz.variationTitle
                          })]
                        })
                      }), rz.listedVariations && rz.listedVariations.length > 0 && (0, EC.jsx)("div", {
                        className: gC()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (HC = Wz.d[Qz.gameNameWithVariation]) || void 0 === HC ? void 0 : HC.variationThumbnailUseBigRatio
                        }),
                        children: rz.listedVariations.map((CC => {
                          var zC, ZC;
                          return (0, EC.jsxs)(uz, {
                            variation: CC,
                            isSelected: Qz.gameNameWithVariation === CC,
                            children: [null !== sC && (0, EC.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, EC.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, EC.jsx)(jC.c, {
                                  name: "user"
                                }), " ", (0, Nz.Z)(null !== (zC = sC[CC]) && void 0 !== zC ? zC : 0)]
                              })
                            }), (0, EC.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: uC(null !== (ZC = Wz.d[CC].variationTitle) && void 0 !== ZC ? ZC : Wz.d[CC].title)
                            }), (0, EC.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, FC.filterBadges)(Wz.d[CC].badges).map((CC => (0, EC.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + CC.type,
                                children: (0, EC.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, EC.jsx)(eC.e, {
                                    badge: CC
                                  })
                                })
                              }, CC.type)))
                            })]
                          }, CC)
                        }))
                      })]
                    }), rz.description && (0, EC.jsx)("p", {
                      className: "GameInformationDescription",
                      children: rz.description
                    })]
                  }), (0, EC.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, EC.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!QZ && (0, EC.jsx)(WC.d, {
                        tooltipInner: (0, EC.jsx)("div", {
                          children: uC("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, EC.jsx)(NC.o, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            FZ(az[0])
                          },
                          children: (0, EC.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, EC.jsx)(jC.c, {
                              name: "play"
                            }), " ", uC("homePage:rejoinLobbyNumber", {
                              number: az[0]
                            })]
                          })
                        })
                      }), QZ && oZ]
                    }), (0, EC.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!QZ && oZ, (0, EC.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, EC.jsx)(jC.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, EC.jsx)(SC.c, {
                          className: "JoinLobbyInput",
                          placeholderText: uC("homePage:lobbyName"),
                          maxLength: Nz.W,
                          domRef: Rz,
                          onValueChange: CC => {
                            CC = (0, Nz.Ab)(CC), Sz(CC)
                          },
                          onEnter: () => {
                            0 === gz.length ? FZ(az[0]) : FZ(gz)
                          }
                        }), (0, EC.jsx)(NC.g, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === gz.length ? FZ(az[0]) : FZ(gz)
                          },
                          children: uC("general:join")
                        })]
                      })]
                    }), (0, EC.jsxs)("section", {
                      className: gC()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !ZZ
                      }),
                      children: [(0, EC.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, EC.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, EC.jsx)(jC.c, {
                            name: "clock-rotate-left"
                          }), ZZ && (0, EC.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: uC("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, EC.jsx)(iz.b, {
                        lobbyGroups: [az, tz],
                        onLobbyClick: CC => {
                          FZ(CC)
                        },
                        keyPrefix: Qz.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== nZ && (0, EC.jsx)(cC, {
                eventName: nZ
              })]
            }), gZ && (0, EC.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, EC.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, EC.jsxs)("div", {
                  className: gC()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === rz.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === rz.showWorldsInsteadOfCustomLobbies && (0, EC.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, EC.jsx)(jC.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, EC.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, EC.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), uC("game:worlds")]
                    })]
                  }), !1 === rz.showWorldsInsteadOfCustomLobbies && (0, EC.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, EC.jsx)(jC.c, {
                      name: "joystick"
                    }), (0, EC.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, EC.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), uC("homePage:customLobbies")]
                    })]
                  }), (0, EC.jsx)(NC.O, {
                    onClick: () => {
                      kz("explore")
                    },
                    active: "explore" === Oz,
                    children: uC("general:explore")
                  }), (0, EC.jsx)(NC.O, {
                    onClick: () => {
                      kz("favourite")
                    },
                    active: "favourite" === Oz,
                    children: uC("homePage:favouriteLobbies")
                  }), (0, EC.jsx)(NC.O, {
                    onClick: () => {
                      kz("owned")
                    },
                    active: "owned" === Oz,
                    children: uC("homePage:ownedLobbies")
                  })]
                }), (0, EC.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, EC.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, EC.jsx)(Gz.d, {
                      label: "Create",
                      onClick: () => {
                        zz.NotificationProvider.showCustomPopup({
                          body: CC => (0, EC.jsx)(Zz.CreateCustomLobby, {
                            gameNameWithVariation: Qz.gameNameWithVariation,
                            close: CC
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === Dz && (0, EC.jsx)(Gz.i, {}), !1 === Dz && (0, EC.jsx)(Jz, {
                      customLobbies: yz,
                      favouriteLobbies: Uz,
                      toggleLikeLobby: WZ,
                      showReport: yC.featureFlags.useSocialFeatures && "owned" !== Oz
                    })]
                  }), SZ]
                })]
              })
            })]
          }), !gZ && SZ]
        })
      })
    }

    function uz(CC) {
      let {
        variation: zC,
        isSelected: ZC,
        children: QC
      } = CC;
      const oC = Wz.d[zC],
        FC = (0, bC.k)(zC, (0, bC.n)(oC)),
        WC = (0, wC.e)(FC),
        NC = (0, nC.g)([(0, bC.i)(zC, (0, bC.e)(oC))]);
      return (0, EC.jsxs)(kC.LinkPreserveSearch, {
        to: (0, rC.v)(zC),
        replace: !0,
        className: gC()("GameInformationVariation", fC.k, {
          SelectedGameInformationVariation: ZC
        }),
        onClick: CC => {
          if (!(0, Cz.d)(CC)) return;
          const ZC = (0, GC.k)(zC);
          qC.i.setItem(ZC, zC)
        },
        onMouseEnter: NC.start,
        onMouseLeave: NC.cancel,
        onFocus: NC.start,
        onBlur: NC.cancel,
        style: (0, fC.g)(WC),
        children: [(0, EC.jsx)(fC.d, {
          image: WC
        }), QC]
      })
    }
  },
  6513: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => GC
    });
    var QC = ZC(48),
      wC = ZC(1388),
      bC = ZC(1439),
      nC = ZC(3452),
      fC = ZC(1076),
      oC = ZC(1295),
      qC = ZC(1321),
      FC = ZC(1013),
      WC = ZC(1002),
      NC = ZC.n(WC),
      MC = ZC(6505),
      gC = ZC(1056);

    function SC(CC) {
      let {
        info: zC,
        className: ZC
      } = CC;
      const {
        statusText: QC,
        rowText: wC
      } = (0, MC.g)();
      return (0, gC.jsxs)("div", {
        className: NC()("GameApprovalInfoDetails", ZC),
        children: [(0, gC.jsxs)("div", {
          className: NC()("GameApprovalInfoSummary", zC.overallPassed ? "Passed" : "Failed"),
          children: [(0, gC.jsx)(FC.c, {
            name: zC.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, gC.jsx)("span", {
            children: QC(zC.status)
          })]
        }), zC.rows.length > 0 && (0, gC.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: zC.rows.map((CC => {
            const {
              label: zC,
              value: ZC
            } = wC(CC);
            return (0, gC.jsxs)("div", {
              className: NC()("GameApprovalInfoRow", CC.passed ? "Passed" : "Failed"),
              children: [(0, gC.jsx)(FC.c, {
                name: CC.passed ? "check" : "xmark"
              }), (0, gC.jsxs)("div", {
                className: "GameApprovalInfoRowText",
                children: [(0, gC.jsx)("div", {
                  className: "GameApprovalInfoRowLabel",
                  children: zC
                }), null !== ZC && (0, gC.jsx)("div", {
                  className: "GameApprovalInfoRowValue",
                  children: ZC
                })]
              })]
            }, CC.kind)
          }))
        })]
      })
    }
    var pC = ZC(1143),
      PC = ZC(1307);

    function GC(CC) {
      PC.NotificationProvider.showCustomPopup({
        body: () => (0, gC.jsx)(RC, {
          ...CC
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function RC(CC) {
      let {
        schematicId: zC,
        canOverride: ZC,
        onApprovalChanged: WC
      } = CC;
      const {
        t: NC
      } = (0, pC.y)(), {
        userContext: MC
      } = (0, fC.e)(), PC = (0, nC.e)(), [GC, RC] = (0, QC.useState)(null), [AC, xC] = (0, QC.useState)(null), [JC, IC] = (0, QC.useState)(!1), iC = (0, QC.useCallback)((() => {
        xC(null), bC.d.getGameApprovalInfo(MC, zC).then((CC => {
          PC.current && RC(CC)
        })).catch((CC => {
          console.error("Failed to get game approval info", CC), PC.current && xC(NC("studio:approvalLoadFailed"))
        }))
      }), [MC, zC, PC, NC]);
      (0, QC.useEffect)((() => {
        iC()
      }), [iC]);
      const vC = CC => {
        JC || (IC(!0), bC.d.setGameApproval(MC, zC, CC).then((() => {
          null === WC || void 0 === WC || WC(), PC.current && iC()
        })).catch((CC => {
          console.error("Failed to set game approval", CC)
        })).finally((() => {
          PC.current && IC(!1)
        })))
      };
      return (0, gC.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, gC.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: NC("studio:approvalTitle")
        }), !GC && !AC && (0, gC.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, gC.jsx)(oC.d, {})
        }), AC && (0, gC.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: AC
        }), GC && (0, gC.jsxs)(gC.Fragment, {
          children: [(0, gC.jsx)(SC, {
            info: GC
          }), ZC && (0, gC.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== GC.manualOverride && (0, gC.jsx)(qC.d, {
              tooltipInner: (0, gC.jsx)("div", {
                children: NC("studio:approvalApproveTooltip")
              }),
              children: (0, gC.jsxs)(wC.o, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  vC(!0)
                },
                disabled: JC,
                children: [(0, gC.jsx)(FC.c, {
                  name: "check"
                }), " ", NC("studio:approvalApprove")]
              })
            }), !1 !== GC.manualOverride && (0, gC.jsx)(qC.d, {
              tooltipInner: (0, gC.jsx)("div", {
                children: NC("studio:approvalDenyTooltip")
              }),
              children: (0, gC.jsxs)(wC.I, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  vC(!1)
                },
                disabled: JC,
                children: [(0, gC.jsx)(FC.c, {
                  name: "xmark"
                }), " ", NC("studio:approvalDeny")]
              })
            }), null !== GC.manualOverride && (0, gC.jsx)(qC.d, {
              tooltipInner: (0, gC.jsx)("div", {
                children: NC("studio:approvalClearOverrideTooltip")
              }),
              children: (0, gC.jsxs)(wC.g, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  vC(null)
                },
                disabled: JC,
                children: [(0, gC.jsx)(FC.c, {
                  name: "arrows-rotate"
                }), " ", NC("studio:approvalClearOverride")]
              })
            })]
          })]
        })]
      })
    }
  },
  6505: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC,
      g: () => nC
    });
    var QC = ZC(326),
      wC = ZC(1143);
    const bC = {
      manuallyApproved: "studio:approvalStatusManuallyApproved",
      manuallyAndAutoApproved: "studio:approvalStatusManuallyAndAutoApproved",
      manuallyDenied: "studio:approvalStatusManuallyDenied",
      autoApproved: "studio:approvalStatusAutoApproved",
      notApproved: "studio:approvalStatusNotApproved",
      notIndexed: "studio:approvalStatusNotIndexed"
    };

    function nC() {
      const {
        t: CC,
        selectedLanguage: zC
      } = (0, wC.y)();
      return {
        statusText: zC => CC(bC[zC]),
        rowText: ZC => {
          const bC = (CC, ZC) => (0, QC.U)((0, wC.m)(zC.code, CC), 0, ZC);
          switch (ZC.kind) {
            case "ownerAccountAge": {
              const zC = ZC.ownerIsLoggedIn ? "studio:approvalAccountAgeLoggedIn" : "studio:approvalAccountAgeNotLoggedIn";
              return {
                label: CC("studio:approvalAccountAgeLabel"),
                value: CC(zC, {
                  age: bC(zC, ZC.accountAgeMs),
                  days: ZC.minAccountAgeDays
                })
              }
            }
            case "sinceUnbannedOrUnmuted":
              return {
                label: CC("studio:approvalSinceUnbannedLabel"), value: CC("studio:approvalSinceUnbannedValue", {
                  time: bC("studio:approvalSinceUnbannedValue", ZC.sinceMs),
                  days: ZC.minDays
                })
              };
            case "reportHold": {
              const {
                detail: zC
              } = ZC;
              if (null === zC) return {
                label: CC("studio:approvalUnderInvestigation"),
                value: null
              };
              const QC = zC.weightedReporters.toFixed(1),
                wC = zC.threshold.toFixed(1),
                nC = CC("studio:approvalReportHoldLabel", {
                  hours: zC.windowHours
                });
              if (null === zC.heldUntil) return {
                label: nC,
                value: CC("studio:approvalReportHoldValue", {
                  weightedReporters: QC,
                  threshold: wC
                })
              };
              const fC = "studio:approvalReportHoldValueHeld";
              return {
                label: nC,
                value: CC(fC, {
                  weightedReporters: QC,
                  threshold: wC,
                  time: bC(fC, zC.heldUntil - Date.now())
                })
              }
            }
          }
        }
      }
    }

    function fC(CC) {
      return null === CC.manualOverride && CC.rows.some((CC => "reportHold" === CC.kind && !CC.passed))
    }
  },
  34202: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(48),
      wC = ZC(3419);

    function bC() {
      const [CC, zC] = (0, QC.useState)(!1);
      return (0, QC.useLayoutEffect)((() => {
        let CC = !0;
        return (0, wC.e)().then((() => {
          CC && zC(!0)
        })), () => {
          CC = !1
        }
      }), []), CC
    }
  },
  8912: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    var QC = ZC(1284),
      wC = ZC(1169),
      bC = ZC(600);

    function nC(CC) {
      return CC = function(CC, zC) {
        var ZC;
        const QC = new URLSearchParams(zC),
          wC = QC.get("lobby"),
          bC = QC.get("vm"),
          nC = null !== (ZC = wC) && void 0 !== ZC ? ZC : CC.lobbyName,
          fC = null !== bC && void 0 !== bC ? bC : CC.directJoinVmUrl;
        if (nC === CC.lobbyName && fC === CC.directJoinVmUrl) return CC;
        return {
          ...CC,
          lobbyName: nC,
          directJoinVmUrl: fC
        }
      }(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), CC = function(CC) {
        if ((0, bC.H)(CC.directJoinVmUrl)) return CC;
        const zC = (0, wC.hb)(CC.directJoinVmUrl);
        null === zC && (CC.directJoinVmUrl = void 0);
        return CC
      }(CC = function(CC) {
        if ((0, bC.H)(CC.gameNameWithVariation)) return CC;
        return CC.gameNameWithVariation = (0, QC.k)(CC.gameNameWithVariation), CC
      }(CC))
    }
  },
  8907: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC,
      g: () => wC
    });
    let QC = !1;

    function wC() {
      QC = !0
    }

    function bC() {
      return QC
    }
  },
  36247: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      g: () => QC
    });
    const QC = "skyblockSkills",
      wC = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);