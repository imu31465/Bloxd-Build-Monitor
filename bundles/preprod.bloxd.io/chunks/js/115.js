export const id = 115;
export const ids = [115, 389];
export const modules = {
  35825: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => Pu
    });
    var Ez = bz(316),
      nz = bz(3248),
      iz = bz(3298),
      lz = bz(3290),
      Mz = bz(3286),
      tz = bz(1181),
      Hz = bz(33),
      Oz = bz(1673),
      pz = bz(1332),
      dz = bz(1419),
      Fz = bz(1038),
      Zz = bz.n(Fz),
      Rz = bz(1628),
      Kz = bz(56),
      wz = bz(79),
      Xz = bz(2258),
      fz = bz(1298),
      sz = bz(1574),
      rz = bz(1114),
      oz = bz(3167),
      Nz = bz(4305),
      vz = bz(3235),
      xz = bz(3238),
      Jz = bz(1846),
      Az = bz(3241),
      Tz = bz(1688),
      Lz = bz(1473),
      Pz = bz(2067),
      Gz = bz(1305),
      az = bz(2455),
      Vz = bz(4770),
      mz = bz(1089);
    const qz = 15e3,
      hz = 2500;

    function Uz(zz) {
      var uz;
      let {
        eventName: bz
      } = zz;
      const {
        t: Ez
      } = (0, tz.F)(), nz = Tz.g[bz], [iz, lz] = (0, Kz.useState)((() => Date.now() >= nz.endsAt.getTime())), [Mz, Hz] = (0, Kz.useState)("overall"), Oz = function(zz, uz) {
        const {
          userContext: bz,
          isUserContextUpdating: Ez
        } = (0, rz.c)(), nz = `${zz}:${uz}`, [iz, lz] = (0, Kz.useState)({
          requestKey: nz,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, Kz.useEffect)((() => {
          if (Ez) return;
          let iz, Mz = !1;
          const tz = async () => {
            if ("visible" === document.visibilityState) try {
              const Ez = await Lz.c.getGameEventLeaderboard(bz, {
                event: zz,
                scope: uz
              });
              Mz || lz({
                requestKey: nz,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Ez
                }
              })
            } catch {
              Mz || lz((zz => zz.requestKey === nz && "loaded" === zz.leaderboard.status ? zz : {
                requestKey: nz,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            Mz || (iz = setTimeout(tz, qz))
          };
          return tz(), () => {
            Mz = !0, clearTimeout(iz)
          }
        }), [zz, uz, nz, bz, Ez]), iz.requestKey === nz ? iz.leaderboard : {
          status: "loading"
        }
      }(bz, Mz), pz = function(zz) {
        const uz = (0, Kz.useRef)(null),
          bz = (0, Kz.useRef)(0),
          Ez = (0, Kz.useRef)(),
          [nz, iz] = (0, Kz.useState)({});
        return (0, Kz.useEffect)((() => {
          const nz = null === zz || void 0 === zz ? void 0 : zz.entries;
          if (!nz) return;
          const lz = new Map(nz.map((zz => [zz.player.name, zz.value]))),
            Mz = uz.current;
          if (uz.current = lz, null === Mz) return;
          const tz = {};
          for (const [zz, uz] of lz) {
            const Ez = Mz.get(zz);
            void 0 !== Ez && uz > Ez && (tz[zz] = {
              amount: uz - Ez,
              key: bz.current++
            })
          }
          0 !== Object.keys(tz).length && (iz(tz), clearTimeout(Ez.current), Ez.current = setTimeout((() => {
            iz({})
          }), hz))
        }), [zz]), (0, Kz.useEffect)((() => () => {
          clearTimeout(Ez.current)
        }), []), nz
      }("loaded" === Oz.status ? Oz.leaderboard : null), dz = function(zz) {
        const [uz, bz] = (0, Kz.useState)(null), Ez = "loaded" === zz.status ? zz.leaderboard.goalProgress : void 0;
        return (0, Kz.useEffect)((() => {
          Ez && bz(Ez)
        }), [Ez]), uz
      }(Oz), Fz = Pz.g[`profileEffect_${nz.prizePack}`];
      if (iz) return null;
      const Rz = "loaded" === Oz.status ? Oz.leaderboard : null,
        wz = null !== (uz = null === Rz || void 0 === Rz ? void 0 : Rz.entries) && void 0 !== uz ? uz : null,
        Xz = null !== Rz && void 0 !== Rz && Rz.own && null !== wz && !wz.some((zz => zz.isOwn)) ? Rz.own : null;
      return (0, mz.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, mz.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, mz.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, mz.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, mz.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, mz.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Ez("gameEvents:live")]
              }), (0, mz.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Ez("gameEvents:endsIn"), (0, mz.jsx)(vz.d, {
                  toTime: nz.endsAt,
                  onReachEndOfCountdown: () => {
                    lz(!0)
                  }
                })]
              })]
            }), (0, mz.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Ez(nz.titleKey)
            }), (0, mz.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, mz.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [Fz && (0, mz.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, mz.jsx)(Fz, {})
                }), (0, mz.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, mz.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Ez("gameEvents:prize")
                  }), (0, mz.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Ez(nz.prizeNameKey)
                  })]
                })]
              }), (0, mz.jsx)(cz, {
                event: nz,
                progress: dz
              })]
            })]
          }), (0, mz.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, mz.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, mz.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Ez(nz.leaderboard.titleKey)
              }), (0, mz.jsx)(Vz.d, {
                ariaLabel: Ez("gameEvents:leaderboardScope"),
                options: Tz.d.map((zz => ({
                  value: zz,
                  label: Ez(`gameEvents:${zz}Scope`)
                }))),
                value: Mz,
                onChange: Hz
              })]
            }), "loading" === Oz.status && (0, mz.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, mz.jsx)(Gz.c, {})
            }), ("unavailable" === Oz.status || "loaded" === Oz.status && null === wz) && (0, mz.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Ez("gameEvents:leaderboardUnavailable")
            }), null !== wz && 0 === wz.length && (0, mz.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Ez("friends" === Mz ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== wz && wz.length > 0 && (0, mz.jsx)("ol", {
              className: "GameEventPanelRows",
              children: wz.map((zz => {
                const uz = pz[zz.player.name];
                return (0, mz.jsxs)("li", {
                  className: Zz()("GameEventPanelRow", {
                    GameEventPanelRowOwn: zz.isOwn,
                    GameEventPanelRowTop: zz.rank <= 3
                  }),
                  children: [(0, mz.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", zz.rank]
                  }), (0, mz.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, mz.jsx)(az.i, {
                      playerSocialPreview: {
                        ...zz.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== uz && (0, mz.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", uz.amount.toLocaleString()]
                  }, uz.key), (0, mz.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: zz.value.toLocaleString()
                  })]
                }, zz.player.name)
              }))
            }), Xz && (0, mz.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, mz.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", Xz.rank.toLocaleString()]
              }), (0, mz.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Ez("gameEvents:yourPlace")
              }), (0, mz.jsx)("span", {
                className: "GameEventPanelScore",
                children: Xz.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function cz(zz) {
      let {
        event: uz,
        progress: bz
      } = zz;
      const {
        t: Ez
      } = (0, tz.F)(), nz = null !== bz && uz.prizeGoals.some(((zz, uz) => bz[uz] >= zz.target));
      return (0, mz.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, mz.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Ez(nz ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, mz.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: uz.prizeGoals.map(((zz, uz) => {
            const nz = null === bz ? null : Math.min(bz[uz], zz.target);
            return (0, mz.jsxs)(Kz.Fragment, {
              children: [uz > 0 && (0, mz.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Ez("gameEvents:goalsOr")
              }), (0, mz.jsxs)("div", {
                className: Zz()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: nz === zz.target
                }),
                children: [(0, mz.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Ez(zz.labelKey)
                }), (0, mz.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, mz.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== nz && void 0 !== nz ? nz : 0) / zz.target * 100 + "%"
                    }
                  }), null !== nz && (0, mz.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [nz.toLocaleString(), " / ", zz.target.toLocaleString()]
                  })]
                })]
              })]
            }, zz.board)
          }))
        })]
      })
    }
    var gz = bz(1519),
      Sz = bz(1556),
      yz = bz(1021),
      Dz = bz(699),
      Qz = bz(3230);

    function Wz(zz) {
      let {
        gameNameWithVariation: uz
      } = zz;
      const bz = (0, gz.G)(uz),
        [Ez, nz] = (0, Kz.useState)(null);
      if ((0, Kz.useEffect)((() => {
          if (!bz) return;
          let zz = !0;
          return (0, Sz.i)(bz).then((uz => {
            zz && nz(uz)
          })).catch((zz => {
            console.error(`Failed to load the page copy for ${bz.name}`, zz)
          })), () => {
            zz = !1
          }
        }), [bz]), !bz || !Ez || Ez.name !== bz.name) return null;
      const iz = (0, Sz.g)(Ez),
        lz = new Set((0, yz.e)((0, Dz.i)()).map((zz => (0, gz.A)(zz)))),
        Mz = Ez.similarGames.filter((zz => lz.has((0, gz.A)(zz))));
      return (0, mz.jsx)("div", {
        className: "GamePageContent",
        children: (0, mz.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, mz.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, mz.jsx)("h2", {
              children: iz.whatIs
            }), Ez.whatIs.map((zz => (0, mz.jsx)("p", {
              children: zz
            }, zz)))]
          }), (0, mz.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, mz.jsx)("h2", {
              children: iz.howToPlay
            }), Ez.howToPlay.map((zz => (0, mz.jsx)("p", {
              children: zz
            }, zz)))]
          }), (0, mz.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, mz.jsx)("h2", {
              children: iz.features
            }), (0, mz.jsx)("ul", {
              children: Ez.features.map((zz => (0, mz.jsx)("li", {
                children: zz
              }, zz)))
            })]
          }), (0, mz.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, mz.jsx)("h2", {
              children: iz.tips
            }), (0, mz.jsx)("ul", {
              children: Ez.tips.map((zz => (0, mz.jsx)("li", {
                children: zz
              }, zz)))
            })]
          }), (0, mz.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, mz.jsx)("h2", {
              children: iz.faq
            }), Ez.faq.map((zz => {
              let {
                question: uz,
                answer: bz
              } = zz;
              return (0, mz.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, mz.jsx)("h3", {
                  children: uz
                }), (0, mz.jsx)("p", {
                  children: bz
                })]
              }, uz)
            }))]
          }), Mz.length > 0 && (0, mz.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, mz.jsx)("h2", {
              children: iz.similarGames
            }), (0, mz.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: Mz.map((zz => (0, mz.jsx)("li", {
                children: (0, mz.jsx)(Qz.i, {
                  source: {
                    type: "game",
                    gameNameWithVariation: zz
                  },
                  entrySource: "other",
                  gameWidth: "100%",
                  useLongRatio: !0
                })
              }, zz)))
            })]
          })]
        })
      })
    }
    var ez = bz(1047),
      jz = bz(96),
      Iz = bz(1118),
      Bz = bz(9035),
      Cz = bz(1607),
      Yz = bz(1490),
      kz = bz(1482),
      zu = bz(1570),
      uu = bz(1429),
      bu = bz(1322),
      Eu = bz(35829),
      nu = bz(1222),
      iu = bz(994),
      lu = bz(328),
      Mu = bz(1009),
      tu = bz(1513),
      Hu = bz(8584),
      Ou = bz(20),
      pu = bz(2399),
      du = bz(738),
      Fu = bz(1212),
      Zu = bz(6231);

    function Ru(zz) {
      let {
        preview: uz,
        isBroken: bz
      } = zz;
      const Ez = null === uz ? null : (0, iz.e)(uz, "small"),
        lz = (0, nz.f)(null !== Ez && void 0 !== Ez ? Ez : iz.m);
      return null === uz ? (0, mz.jsx)("div", {
        className: Zz()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: bz
        }),
        children: (0, mz.jsx)(ez.c, {
          name: bz ? "triangle-exclamation" : "star"
        })
      }) : (0, mz.jsx)("div", {
        className: Zz()("FeaturedGamesPopupSlotThumbnail", Mz.i),
        style: (0, Mz.f)(lz),
        role: "img",
        "aria-label": uz.name,
        children: (0, mz.jsx)(Mz.d, {
          image: lz
        })
      })
    }

    function Ku(zz) {
      let {
        schematicId: uz,
        gameName: bz
      } = zz;
      const {
        userContext: nz
      } = (0, rz.c)(), iz = (0, xz.e)(), [lz, Mz] = (0, Kz.useState)(null), [tz, Hz] = (0, Kz.useState)(null), [Oz, pz] = (0, Kz.useState)(!1), Fz = (0, Kz.useCallback)((() => {
        Hz(null), Lz.c.getFeaturedGames(nz).then((zz => {
          iz.current && Mz(zz.slots)
        })).catch((zz => {
          console.error("Failed to get featured games", zz), iz.current && Hz("Failed to load featured games")
        }))
      }), [nz, iz]);
      (0, Kz.useEffect)((() => {
        Fz()
      }), [Fz]);
      const Zz = (zz, uz) => {
        Oz || (pz(!0), Lz.c.setFeaturedGame(nz, zz, uz).then((() => {
          iz.current && Fz()
        })).catch((zz => {
          console.error("Failed to set featured game", zz), iz.current && Hz("Failed to update the featured slot")
        })).finally((() => {
          iz.current && pz(!1)
        })))
      };
      return (0, mz.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, mz.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !lz && !tz && (0, mz.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, mz.jsx)(Gz.c, {})
        }), tz && (0, mz.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: tz
        }), lz && (0, mz.jsxs)(mz.Fragment, {
          children: [(0, mz.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: lz.map((zz => {
              const bz = zz.schematicId === uz,
                nz = null === zz.schematicId,
                {
                  categoryGroup: iz
                } = Ez.R[zz.slotId];
              return (0, mz.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, mz.jsx)(Ru, {
                  preview: zz.preview,
                  isBroken: !nz
                }), (0, mz.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, mz.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Ez.sb)(iz), " \xb7 position", " ", (0, Ez.V)(zz.slotId, Ez.ac) + 1, " of", " ", (0, Ez.$b)(iz, Ez.ac)]
                  }), nz && (0, mz.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !nz && null !== zz.preview && (0, mz.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: zz.preview.name
                  }), !nz && null === zz.preview && (0, mz.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, mz.jsx)(ez.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, mz.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [nz && (0, mz.jsxs)(dz.v, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Zz(zz.slotId, uz)
                    },
                    disabled: Oz,
                    children: [(0, mz.jsx)(ez.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !nz && !bz && (0, mz.jsxs)(dz.V, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Zz(zz.slotId, uz)
                    },
                    disabled: Oz,
                    children: [(0, mz.jsx)(ez.c, {
                      name: "star"
                    }), " Replace"]
                  }), !nz && (0, mz.jsxs)(dz.K, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      Zz(zz.slotId, null)
                    },
                    disabled: Oz,
                    children: [(0, mz.jsx)(ez.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, zz.slotId)
            }))
          }), (0, mz.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var wu = bz(4421),
      Xu = bz(4344),
      fu = bz(4351),
      su = bz(4365),
      ru = bz(4325),
      ou = bz(3326),
      Nu = bz(8581),
      vu = bz(211);
    const xu = {
      skyblock: [bz(35861).b]
    };
    var Ju = bz(588);
    const Au = {
      listedVariations: null,
      backgroundImage: iz.m,
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

    function Tu(zz, uz) {
      const bz = du.f[zz.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, iz.e)(zz, "large"),
        badges: [],
        category: zz.gameCategory,
        title: void 0 !== (null === bz || void 0 === bz ? void 0 : bz.title) ? uz(bz.title) : zz.name,
        variationTitle: null,
        description: void 0 !== (null === bz || void 0 === bz ? void 0 : bz.description) ? uz(bz.description) : zz.description,
        ownerSocialPreviewWithoutLocation: "owner" in zz ? zz.owner : null,
        ccu: zz.ccu,
        favourites: zz.favourites,
        isFavourite: null,
        useRejoinLastLobbyButton: "persistWorld" in zz ? zz.persistWorld : null,
        showWorldsInsteadOfCustomLobbies: !1,
        canCreateCustomLobbies: !0,
        countdownInformation: null
      }
    }

    function Lu(zz) {
      var uz, bz, Ez;
      return null !== (uz = null !== (bz = (0, vu.m)() ? function(zz) {
        for (const [uz, bz] of Object.entries(xu)) {
          const Ez = [uz, ...bz.map((zz => (0, lu.Ob)(uz, zz)))];
          if (Ez.includes(zz)) return Ez
        }
        return null
      }(zz) : null) && void 0 !== bz ? bz : null === (Ez = du.b[zz]) || void 0 === Ez ? void 0 : Ez.listedVariations) && void 0 !== uz ? uz : null
    }

    function Pu() {
      const {
        gameNameWithVariation: zz
      } = (0, Yz.D)();
      if ((0, Kz.useEffect)(ou.n, []), zz && (0, nu.u)(zz)) return (0, mz.jsx)(Gu, {
        urlId: zz
      }, zz);
      const uz = zz && (0, iu.k)(zz) ? zz : "firstParty";
      return (0, mz.jsx)(au, {}, uz)
    }

    function Gu(zz) {
      let {
        urlId: uz
      } = zz;
      const {
        userContext: bz,
        isUserContextUpdating: Ez
      } = (0, rz.c)(), nz = (0, Kz.useMemo)((() => (0, Cz.j)(uz)), [uz]);
      (0, Kz.useMemo)((() => {
        if (null === nz) return;
        const zz = Iz.userContextManager.peekCurrentUserContext();
        (null !== zz ? Lz.c.getGame(zz, nz.schematicId) : Iz.userContextManager.getCurrentUserContext().then((zz => Lz.c.getGame(zz, nz.schematicId)))).catch((zz => {
          console.error(`Failed to get the custom game ${nz.schematicId}`, zz), (0, Cz.g)(uz)
        }))
      }), [nz, uz]);
      const [iz, lz] = (0, Kz.useState)(null), Mz = (0, Bz.b)();
      (0, Kz.useEffect)((() => {
        if (null !== nz || Ez) return;
        let zz = !0;
        return Lz.c.getGameByUrlId(bz, uz).then((bz => {
          zz && lz({
            urlId: uz,
            game: bz
          })
        })).catch((bz => {
          console.error(`Failed to find the custom game with urlId ${uz}`, bz), zz && (0, kz.navigateToHomePage)()
        })), () => {
          zz = !1
        }
      }), [uz, nz, Ez, bz]);
      const tz = null !== nz && void 0 !== nz ? nz : (null === iz || void 0 === iz ? void 0 : iz.urlId) === uz ? iz.game : null;
      return null === tz ? (0, mz.jsx)(Gz.c, {}) : Mz ? (0, mz.jsx)(au, {
        gameNameWithVariation: (0, iu.s)(tz.schematicId),
        knownCustomGame: tz
      }, tz.schematicId) : null
    }

    function au(zz) {
      var uz, bz, lz, Fz, Tz, Pz, Gz, Vz;
      let {
        gameNameWithVariation: qz,
        knownCustomGame: hz = null
      } = zz;
      const {
        t: cz
      } = (0, tz.F)();
      (0, pu.k)();
      const Sz = (0, pu.m)(),
        {
          userContext: yz,
          isUserContextUpdating: Dz
        } = (0, rz.c)(),
        Qz = (0, ru.d)(),
        Iz = (0, kz.useNavigatePreserveSearch)(),
        Bz = (0, Yz.D)(),
        Cz = (0, Kz.useMemo)((() => qz ? {
          gameNameWithVariation: qz
        } : Bz), [qz, Bz]),
        uu = (0, Hu.e)(Cz),
        nu = (0, Kz.useMemo)((() => {
          const zz = function(zz) {
            var uz, bz;
            const Ez = Lu(zz);
            if (!Ez || 0 === Ez.length || Ez.includes(zz)) return zz;
            const nz = Hz.g.getItem((0, Xz.i)(zz));
            if (nz && Ez.includes(nz)) return nz;
            return null !== (uz = null === (bz = du.b[zz]) || void 0 === bz ? void 0 : bz.defaultListedVariation) && void 0 !== uz ? uz : Ez[0]
          }(uu.gameNameWithVariation);
          return zz === uu.gameNameWithVariation ? uu : {
            ...uu,
            gameNameWithVariation: zz
          }
        }), [uu]);
      (0, Kz.useEffect)((() => {
        const zz = uu.gameNameWithVariation;
        nu.gameNameWithVariation !== zz && zz !== (0, lu.Sb)(zz) && Iz((0, gz.C)(nu.gameNameWithVariation), {
          replace: !0
        })
      }), [nu.gameNameWithVariation, uu.gameNameWithVariation, Iz]);
      const Ru = (0, xz.e)(),
        [ou, vu] = (0, Kz.useState)(""),
        xu = Kz.useRef(null),
        [Pu, Gu] = (0, Kz.useState)(),
        au = (0, iu.k)(nu.gameNameWithVariation),
        mu = (0, Kz.useMemo)((() => au ? null : function(zz, uz, bz) {
          var Ez, nz;
          const lz = du.b[zz];
          return (0, Ju.F)(lz) ? null : {
            listedVariations: Lu(zz),
            backgroundImage: (0, iz.i)(zz, (0, iz.b)(lz)),
            badges: (0, Oz.filterBadges)(lz.badges),
            category: lz.type,
            title: bz(lz.title),
            variationTitle: lz.variationTitle ? bz(lz.variationTitle) : null,
            description: bz(lz.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== uz ? null !== (Ez = uz[zz]) && void 0 !== Ez ? Ez : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: lz.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: lz.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (nz = lz.canCreateCustomLobbies) || void 0 === nz || nz,
            countdownInformation: (0, Xz.f)(zz)
          }
        }(nu.gameNameWithVariation, Sz, cz)), [au, nu.gameNameWithVariation, Sz, cz]),
        [qu, hu] = (0, Kz.useState)(!1),
        [Uu, cu] = (0, Kz.useState)((() => hz ? Tu(hz, cz) : Au)),
        gu = null !== mu && void 0 !== mu ? mu : Uu,
        [Su] = (0, Kz.useState)(gu === Au),
        yu = (0, nz.f)(gu.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: Du,
          recentlyPlayedCustomLobbies: Qu
        } = (0, Kz.useMemo)((() => function(zz, uz, bz, Ez) {
          var nz;
          const iz = zz => {
              const bz = (0, iu.q)(zz),
                Ez = uz.find((uz => "custom" === uz.type ? uz.schematicId === bz : uz.gameNameWithVariation === zz));
              return Ez ? [...Ez.recentLobbies] : []
            },
            lz = (0, Oz.getRecentGameNameWithVariationLobbiesKey)(zz),
            Mz = null !== (nz = Hz.g.getItem(lz)) && void 0 !== nz ? nz : [],
            tz = [...iz(zz), ...Mz],
            pz = [];
          for (const Hz of tz)(0, Fu.M)(Hz) && !pz.includes(Hz) && pz.push(Hz);
          let dz = tz;
          if (bz) {
            const zz = iz("classic_worlds"),
              uz = tz.filter((uz => !zz.includes(uz)));
            dz = [...zz, ...uz]
          }
          const Fz = [],
            Zz = !1 === Ez ? [] : dz;
          for (const Hz of Zz)(0, Fu.M)(Hz) || Fz.includes(Hz) || Fz.push(Hz);
          return {
            recentlyPlayedPublicLobbies: pz,
            recentlyPlayedCustomLobbies: Fz
          }
        }(nu.gameNameWithVariation, Qz, gu.showWorldsInsteadOfCustomLobbies, gu.canCreateCustomLobbies)), [nu.gameNameWithVariation, Qz, gu.showWorldsInsteadOfCustomLobbies, gu.canCreateCustomLobbies]),
        [Wu, eu] = (0, Kz.useState)(!0),
        [ju, Iu] = (0, Kz.useState)([]),
        [Bu, Cu] = (0, Kz.useState)(null),
        [Yu, ku] = (0, Kz.useState)("explore"),
        zb = (0, Kz.useRef)(!1),
        ub = (0, Kz.useCallback)((zz => {
          (0, wz.unstable_batchedUpdates)((() => {
            Gu(zz), cu((uz => ({
              ...Tu(zz, cz),
              isFavourite: uz.isFavourite
            })))
          }))
        }), [cz]);
      (0, Kz.useEffect)((() => {
        null === Ou.e.get("gameEntrySource") && (0, Ou.k)("gameInformationPageDirect")
      }), []);
      const bb = (0, Kz.useRef)(null);
      (0, Kz.useEffect)((() => {
        const zz = zz => {
            bb.current = zz.target instanceof Element ? zz.target.closest("a, button") : null
          },
          uz = zz => {
            "Tab" === zz.key && (bb.current = null)
          };
        return document.addEventListener("pointerdown", zz, !0), document.addEventListener("keydown", uz, !0), () => {
          document.removeEventListener("pointerdown", zz, !0), document.removeEventListener("keydown", uz, !0)
        }
      }), []), (0, oz.e)("Enter", (zz => {
        const uz = zz.target instanceof Element ? zz.target : null;
        if (zz.defaultPrevented || null !== uz && void 0 !== uz && uz.closest("input, textarea, select")) return;
        const bz = null === uz || void 0 === uz ? void 0 : uz.closest("a, button");
        bz && bz !== bb.current || (zz.preventDefault(), pb())
      })), (0, Nz.e)(kz.navigateToHomePage);
      const Eb = Du.length > 0 || Qu.length > 0,
        nb = !gu.useRejoinLastLobbyButton || 0 === Du.length,
        ib = au && null === gu.ownerSocialPreviewWithoutLocation,
        lb = yz.getPlayerName() === (null === Pu || void 0 === Pu || null === (uz = Pu.owner) || void 0 === uz ? void 0 : uz.name),
        Mb = null !== (bz = null === (lz = gu.badges.find((zz => "event" === zz.type))) || void 0 === lz ? void 0 : lz.event) && void 0 !== bz ? bz : null,
        tb = nb ? dz.q : dz.f,
        Hb = (0, mz.jsx)(pz.f, {
          tooltipInner: (0, mz.jsx)("div", {
            children: cz("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, mz.jsx)(tb, {
            className: "GameInformationButton",
            padDefaultFocus: nb,
            showPress: !0,
            onClick: () => {
              pb()
            },
            children: (0, mz.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [nb && (0, mz.jsxs)(mz.Fragment, {
                children: [(0, mz.jsx)(ez.c, {
                  name: "play"
                }), " "]
              }), cz("homePage:quickPlay")]
            })
          })
        });
      (0, Kz.useEffect)((() => {
        if (!au || Dz) return;
        let zz = !0;
        const uz = (0, iu.q)(nu.gameNameWithVariation);
        return Lz.c.getGame(yz, uz).then((uz => {
          zz && ub(uz)
        })).catch((uz => {
          console.error("Failed to get Custom Game information", uz), zz && (0, kz.navigateToHomePage)()
        })), Lz.c.getFavouriteGames(yz).then((bz => {
          zz && cu((zz => ({
            ...zz,
            isFavourite: bz.includes(uz)
          })))
        })).catch((uz => {
          console.error("Failed to get favourite games", uz), zz && hu(!0)
        })), () => {
          zz = !1
        }
      }), [au, Dz, nu.gameNameWithVariation, ub, yz]);
      const Ob = !au && null === mu;

      function pb(zz) {
        (0, Nu.g)(), Iz((0, fz.c)(nu.gameNameWithVariation, zz))
      }(0, Kz.useEffect)((() => {
        Ob && (0, kz.navigateToHomePage)()
      }), [Ob]), (0, Kz.useEffect)((() => {
        !1 !== gu.canCreateCustomLobbies && null !== gu.showWorldsInsteadOfCustomLobbies && !1 === Dz && (eu(!0), Lz.c.getFavouriteLobbies(yz).then((zz => {
          Cu(zz)
        })), Lz.c.getOpenCustomLobbies(yz, {
          gameNameWithVariation: gu.showWorldsInsteadOfCustomLobbies ? "classic" : nu.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === Yu,
          onlyFavouriteLobbies: "favourite" === Yu
        }).then((zz => {
          Ru.current && Iu(zz)
        })).catch((zz => {})).finally((() => {
          Ru.current && eu(!1)
        })))
      }), [Dz, nu, Yu, gu.showWorldsInsteadOfCustomLobbies, gu.canCreateCustomLobbies, Ru, yz]);
      const db = (0, Kz.useCallback)((async zz => {
          try {
            if (!Bu) return;
            Bu.includes(zz) ? (Lz.c.unfavouriteLobby(yz, zz), Cu(Bu.filter((uz => uz !== zz)))) : (Lz.c.favouriteLobby(yz, zz).catch((zz => {
              console.error("Failed to favourite lobby", zz)
            })), Cu([...Bu, zz]))
          } catch (uz) {
            console.error("Failed to like lobby", uz)
          }
        }), [yz, Bu]),
        Fb = (null === Pu || void 0 === Pu ? void 0 : Pu.schematicId) === (0, iu.q)(uu.gameNameWithVariation) ? Pu : null,
        Zb = Fb && (0, gz.I)(uu.gameNameWithVariation, (zz => cz(zz)), Fb);
      (0, zu.e)(Fb && (0, gz.C)(uu.gameNameWithVariation, Fb));
      const Rb = jz.featureFlags.canUseCustomLobbies && !0 === gu.canCreateCustomLobbies,
        Kb = (0, mz.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, mz.jsx)(Wz, {
            gameNameWithVariation: nu.gameNameWithVariation
          })
        });
      return (0, mz.jsx)(mz.Fragment, {
        children: (0, mz.jsxs)("article", {
          className: Zz()("GameInformation", {
            GameInformationFadeIn: Su,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (Fz = gu.countdownInformation) || void 0 === Fz ? void 0 : Fz.type)
          }),
          children: [Zb && (0, mz.jsx)(sz.d, {
            meta: Zb
          }), (0, mz.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, mz.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, mz.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, mz.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, mz.jsx)("div", {
                  className: Zz()("GameInformationTopBackgroundImage", Mz.i),
                  style: (0, Mz.f)(yu),
                  children: (0, mz.jsx)(Mz.d, {
                    image: yu
                  })
                })]
              }), (0, mz.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, mz.jsx)(wu.b, {}), (0, mz.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, mz.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, mz.jsxs)("div", {
                      className: Zz()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: ib
                      }),
                      children: [gu.badges.map((zz => (0, mz.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${zz.type}`,
                        children: (0, mz.jsx)(Az.c, {
                          badge: zz
                        })
                      }, zz.type))), au && (0, mz.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, mz.jsx)(Jz.b, {
                          text: (0, Ez.kb)({
                            type: "playerCrafted"
                          })
                        })
                      }), gu.category && (0, mz.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, mz.jsx)(Jz.b, {
                          text: [{
                            str: (0, Ez.nb)(gu.category).toUpperCase()
                          }]
                        })
                      }), null !== gu.ccu && (0, mz.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, mz.jsx)(ez.c, {
                          name: "user"
                        }), (0, Fu.T)(gu.ccu), " online"]
                      }), null !== gu.ownerSocialPreviewWithoutLocation && (0, mz.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, mz.jsx)("span", {
                          children: "Made by"
                        }), (0, mz.jsx)(az.i, {
                          playerSocialPreview: {
                            ...gu.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), ib && (0, mz.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, mz.jsx)("span", {
                          children: "Made by"
                        }), (0, mz.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== gu.favourites && (null !== gu.isFavourite || au && !qu) && (0, mz.jsx)(dz.z, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== zb.current && (zb.current = !0, null !== gu.isFavourite)) {
                              const zz = (0, iu.q)(nu.gameNameWithVariation);
                              let uz;
                              gu.isFavourite ? (uz = -1, Lz.c.unfavouriteGame(yz, zz).catch((zz => {
                                console.error("Failed to get unfavourite game", zz)
                              })).finally((() => {
                                zb.current = !1
                              }))) : (uz = 1, Lz.c.favouriteGame(yz, zz).catch((zz => {
                                console.error("Failed to get favourite game", zz)
                              })).finally((() => {
                                zb.current = !1
                              }))), cu((zz => ({
                                ...zz,
                                isFavourite: !zz.isFavourite
                              }))), cu((zz => ({
                                ...zz,
                                favourites: zz.favourites + uz
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (Tz = gu.isFavourite) && void 0 !== Tz && Tz,
                        disabled: null === gu.isFavourite,
                        className: Zz()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === gu.isFavourite
                        })
                      }, null === gu.isFavourite ? "pending" : "known"), au && !ib && jz.featureFlags.useSocialFeatures && !lb && (0, mz.jsx)(fu.e, {
                        targetType: "customGame",
                        targetId: (0, iu.q)(nu.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (yz.playerHasRank("developer") || yz.playerHasRank("admin") && lb) && (0, mz.jsxs)(dz.q, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Iz((0, tu.t)((0, Mu.d)(nu.gameNameWithVariation, !0)))
                        },
                        children: [(0, mz.jsx)(ez.c, {
                          name: "star-christmas"
                        }), " ", cz("studio:viewInStudio")]
                      }), au && yz.playerHasRank("developer") && (0, mz.jsxs)(dz.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, Zu.d)({
                            schematicId: (0, iu.q)(nu.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, mz.jsx)(ez.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), au && yz.playerHasRank("developer") && (0, mz.jsxs)(dz.f, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          bu.NotificationProvider.showCustomPopup({
                            body: () => (0, mz.jsx)(Ku, {
                              schematicId: (0, iu.q)(nu.gameNameWithVariation),
                              gameName: gu.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, mz.jsx)(ez.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (Pz = gu.countdownInformation) || void 0 === Pz ? void 0 : Pz.type) && (0, mz.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, mz.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, mz.jsx)(vz.d, {
                            toTime: gu.countdownInformation.countdownToTime
                          })]
                        }), (0, mz.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: gu.countdownInformation.previewText
                        })]
                      })]
                    }, ib ? "pending" : "shown"), (0, mz.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, mz.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, mz.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [gu.title, " ", gu.variationTitle && (null === (Gz = du.b[nu.gameNameWithVariation]) || void 0 === Gz ? void 0 : Gz.variationThumbnailUseBigRatio) && (0, mz.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: gu.variationTitle
                          })]
                        })
                      }), gu.listedVariations && gu.listedVariations.length > 0 && (0, mz.jsx)("div", {
                        className: Zz()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (Vz = du.b[nu.gameNameWithVariation]) || void 0 === Vz ? void 0 : Vz.variationThumbnailUseBigRatio
                        }),
                        children: gu.listedVariations.map((zz => {
                          var uz, bz;
                          return (0, mz.jsxs)(Vu, {
                            variation: zz,
                            isSelected: nu.gameNameWithVariation === zz,
                            children: [null !== Sz && (0, mz.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, mz.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, mz.jsx)(ez.c, {
                                  name: "user"
                                }), " ", (0, Fu.T)(null !== (uz = Sz[zz]) && void 0 !== uz ? uz : 0)]
                              })
                            }), (0, mz.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: cz(null !== (bz = du.b[zz].variationTitle) && void 0 !== bz ? bz : du.b[zz].title)
                            }), (0, mz.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, Oz.filterBadges)(du.b[zz].badges).map((zz => (0, mz.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + zz.type,
                                children: (0, mz.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, mz.jsx)(Az.c, {
                                    badge: zz
                                  })
                                })
                              }, zz.type)))
                            })]
                          }, zz)
                        }))
                      })]
                    }), gu.description && (0, mz.jsx)("p", {
                      className: "GameInformationDescription",
                      children: gu.description
                    })]
                  }), (0, mz.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, mz.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!nb && (0, mz.jsx)(pz.f, {
                        tooltipInner: (0, mz.jsx)("div", {
                          children: cz("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, mz.jsx)(dz.q, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            pb(Du[0])
                          },
                          children: (0, mz.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, mz.jsx)(ez.c, {
                              name: "play"
                            }), " ", cz("homePage:rejoinLobbyNumber", {
                              number: Du[0]
                            })]
                          })
                        })
                      }), nb && Hb]
                    }), (0, mz.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!nb && Hb, (0, mz.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, mz.jsx)(ez.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, mz.jsx)(Rz.d, {
                          className: "JoinLobbyInput",
                          placeholderText: cz("homePage:lobbyName"),
                          maxLength: Fu.Q,
                          domRef: xu,
                          onValueChange: zz => {
                            zz = (0, Fu.yb)(zz), vu(zz)
                          },
                          onEnter: () => {
                            0 === ou.length ? pb(Du[0]) : pb(ou)
                          }
                        }), (0, mz.jsx)(dz.f, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === ou.length ? pb(Du[0]) : pb(ou)
                          },
                          children: cz("general:join")
                        })]
                      })]
                    }), (0, mz.jsxs)("section", {
                      className: Zz()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !Eb
                      }),
                      children: [(0, mz.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, mz.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, mz.jsx)(ez.c, {
                            name: "clock-rotate-left"
                          }), Eb && (0, mz.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: cz("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, mz.jsx)(su.e, {
                        lobbyGroups: [Du, Qu],
                        onLobbyClick: zz => {
                          pb(zz)
                        },
                        keyPrefix: nu.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== Mb && (0, mz.jsx)(Uz, {
                eventName: Mb
              })]
            }), Rb && (0, mz.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, mz.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, mz.jsxs)("div", {
                  className: Zz()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === gu.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === gu.showWorldsInsteadOfCustomLobbies && (0, mz.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, mz.jsx)(ez.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, mz.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, mz.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), cz("game:worlds")]
                    })]
                  }), !1 === gu.showWorldsInsteadOfCustomLobbies && (0, mz.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, mz.jsx)(ez.c, {
                      name: "joystick"
                    }), (0, mz.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, mz.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), cz("homePage:customLobbies")]
                    })]
                  }), (0, mz.jsx)(dz.V, {
                    onClick: () => {
                      ku("explore")
                    },
                    active: "explore" === Yu,
                    children: cz("general:explore")
                  }), (0, mz.jsx)(dz.V, {
                    onClick: () => {
                      ku("favourite")
                    },
                    active: "favourite" === Yu,
                    children: cz("homePage:favouriteLobbies")
                  }), (0, mz.jsx)(dz.V, {
                    onClick: () => {
                      ku("owned")
                    },
                    active: "owned" === Yu,
                    children: cz("homePage:ownedLobbies")
                  })]
                }), (0, mz.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, mz.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, mz.jsx)(Xu.d, {
                      label: "Create",
                      onClick: () => {
                        bu.NotificationProvider.showCustomPopup({
                          body: zz => (0, mz.jsx)(Eu.CreateCustomLobby, {
                            gameNameWithVariation: nu.gameNameWithVariation,
                            close: zz
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === Wu && (0, mz.jsx)(Xu.h, {}), !1 === Wu && ju.length > 0 && ju.map((zz => (0, mz.jsx)(Xu.g, {
                      customLobby: zz,
                      favouriteLobbies: Bu,
                      toggleLikeLobby: db,
                      showReport: jz.featureFlags.useSocialFeatures && "owned" !== Yu
                    }, zz.name)))]
                  }), Kb]
                })]
              })
            })]
          }), !Rb && Kb]
        })
      })
    }

    function Vu(zz) {
      let {
        variation: uz,
        isSelected: bz,
        children: Ez
      } = zz;
      const tz = du.b[uz],
        Oz = (0, iz.i)(uz, (0, iz.l)(tz)),
        pz = (0, nz.f)(Oz),
        dz = (0, lz.h)([(0, iz.g)(uz, (0, iz.b)(tz))]);
      return (0, mz.jsxs)(kz.LinkPreserveSearch, {
        to: (0, gz.C)(uz),
        replace: !0,
        className: Zz()("GameInformationVariation", Mz.i, {
          SelectedGameInformationVariation: bz
        }),
        onClick: zz => {
          if (!(0, uu.e)(zz)) return;
          const bz = (0, Xz.i)(uz);
          Hz.g.setItem(bz, uz)
        },
        onMouseEnter: dz.start,
        onMouseLeave: dz.cancel,
        onFocus: dz.start,
        onBlur: dz.cancel,
        style: (0, Mz.f)(pz),
        children: [(0, mz.jsx)(Mz.d, {
          image: pz
        }), Ez]
      })
    }
  },
  6231: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => wz
    });
    var Ez = bz(56),
      nz = bz(1419),
      iz = bz(1473),
      lz = bz(3238),
      Mz = bz(1114),
      tz = bz(1305),
      Hz = bz(1332),
      Oz = bz(1047),
      pz = bz(1038),
      dz = bz.n(pz),
      Fz = bz(1089);

    function Zz(zz) {
      let {
        info: uz,
        className: bz
      } = zz;
      return (0, Fz.jsxs)("div", {
        className: dz()("GameApprovalInfoDetails", bz),
        children: [(0, Fz.jsxs)("div", {
          className: dz()("GameApprovalInfoSummary", uz.overallPassed ? "Passed" : "Failed"),
          children: [(0, Fz.jsx)(Oz.c, {
            name: uz.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, Fz.jsx)("span", {
            children: uz.summary
          })]
        }), uz.rows.length > 0 && (0, Fz.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: uz.rows.map((zz => (0, Fz.jsxs)("div", {
            className: dz()("GameApprovalInfoRow", zz.passed ? "Passed" : "Failed"),
            children: [(0, Fz.jsx)(Oz.c, {
              name: zz.passed ? "check" : "xmark"
            }), (0, Fz.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, Fz.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: zz.label
              }), (0, Fz.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: zz.valueText
              })]
            })]
          }, zz.label)))
        })]
      })
    }
    var Rz = bz(1181),
      Kz = bz(1322);

    function wz(zz) {
      Kz.NotificationProvider.showCustomPopup({
        body: () => (0, Fz.jsx)(Xz, {
          ...zz
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function Xz(zz) {
      let {
        schematicId: uz,
        canOverride: bz,
        onApprovalChanged: pz
      } = zz;
      const {
        t: dz
      } = (0, Rz.F)(), {
        userContext: Kz
      } = (0, Mz.c)(), wz = (0, lz.e)(), [Xz, fz] = (0, Ez.useState)(null), [sz, rz] = (0, Ez.useState)(null), [oz, Nz] = (0, Ez.useState)(!1), vz = (0, Ez.useCallback)((() => {
        rz(null), iz.c.getGameApprovalInfo(Kz, uz).then((zz => {
          wz.current && fz(zz)
        })).catch((zz => {
          console.error("Failed to get game approval info", zz), wz.current && rz(dz("studio:approvalLoadFailed"))
        }))
      }), [Kz, uz, wz, dz]);
      (0, Ez.useEffect)((() => {
        vz()
      }), [vz]);
      const xz = zz => {
        oz || (Nz(!0), iz.c.setGameApproval(Kz, uz, zz).then((() => {
          null === pz || void 0 === pz || pz(), wz.current && vz()
        })).catch((zz => {
          console.error("Failed to set game approval", zz)
        })).finally((() => {
          wz.current && Nz(!1)
        })))
      };
      return (0, Fz.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, Fz.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: dz("studio:approvalTitle")
        }), !Xz && !sz && (0, Fz.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, Fz.jsx)(tz.c, {})
        }), sz && (0, Fz.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: sz
        }), Xz && (0, Fz.jsxs)(Fz.Fragment, {
          children: [(0, Fz.jsx)(Zz, {
            info: Xz
          }), bz && (0, Fz.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== Xz.manualOverride && (0, Fz.jsx)(Hz.f, {
              tooltipInner: (0, Fz.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, Fz.jsxs)(nz.q, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  xz(!0)
                },
                disabled: oz,
                children: [(0, Fz.jsx)(Oz.c, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== Xz.manualOverride && (0, Fz.jsx)(Hz.f, {
              tooltipInner: (0, Fz.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, Fz.jsxs)(nz.K, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  xz(!1)
                },
                disabled: oz,
                children: [(0, Fz.jsx)(Oz.c, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== Xz.manualOverride && (0, Fz.jsx)(Hz.f, {
              tooltipInner: (0, Fz.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, Fz.jsxs)(nz.f, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  xz(null)
                },
                disabled: oz,
                children: [(0, Fz.jsx)(Oz.c, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  9035: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz
    });
    var Ez = bz(56),
      nz = bz(3332);

    function iz() {
      const [zz, uz] = (0, Ez.useState)(!1);
      return (0, Ez.useLayoutEffect)((() => {
        let zz = !0;
        return (0, nz.e)().then((() => {
          zz && uz(!0)
        })), () => {
          zz = !1
        }
      }), []), zz
    }
  },
  8584: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    var Ez = bz(1298),
      nz = bz(1212),
      iz = bz(588);

    function lz(zz) {
      return zz = function(zz, uz) {
        var bz;
        const Ez = new URLSearchParams(uz),
          nz = Ez.get("lobby"),
          iz = Ez.get("vm"),
          lz = null !== (bz = nz) && void 0 !== bz ? bz : zz.lobbyName,
          Mz = null !== iz && void 0 !== iz ? iz : zz.directJoinVmUrl;
        if (lz === zz.lobbyName && Mz === zz.directJoinVmUrl) return zz;
        return {
          ...zz,
          lobbyName: lz,
          directJoinVmUrl: Mz
        }
      }(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), zz = function(zz) {
        if ((0, iz.F)(zz.directJoinVmUrl)) return zz;
        const uz = (0, nz.cb)(zz.directJoinVmUrl);
        null === uz && (zz.directJoinVmUrl = void 0);
        return zz
      }(zz = function(zz) {
        if ((0, iz.F)(zz.gameNameWithVariation)) return zz;
        return zz.gameNameWithVariation = (0, Ez.l)(zz.gameNameWithVariation), zz
      }(zz))
    }
  },
  8581: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      g: () => nz
    });
    let Ez = !1;

    function nz() {
      Ez = !0
    }

    function iz() {
      return Ez
    }
  },
  35861: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      e: () => Ez
    });
    const Ez = "skyblockSkills",
      nz = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);