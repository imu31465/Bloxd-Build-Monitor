export const id = 115;
export const ids = [115, 389];
export const modules = {
  35848: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Tt
    });
    var Fz = sz(308),
      Wz = sz(3169),
      Xz = sz(3215),
      Oz = sz(3208),
      oz = sz(3202),
      vz = sz(1173),
      Uz = sz(44),
      Kz = sz(1664),
      uz = sz(1333),
      Nz = sz(1419),
      bz = sz(1020),
      wz = sz.n(bz),
      Dz = sz(1622),
      gz = sz(65),
      Hz = sz(78),
      Bz = sz(2253),
      Pz = sz(1297),
      rz = sz(1558),
      Yz = sz(1116),
      xz = sz(3076),
      mz = sz(4191),
      Jz = sz(3160),
      Iz = sz(3163),
      Cz = sz(1831),
      ez = sz(3166),
      Zz = sz(1673),
      Gz = sz(1466),
      Tz = sz(2075),
      cz = sz(1306),
      jz = sz(2391),
      Az = sz(4636),
      yz = sz(1087);
    const Mz = 15e3,
      dz = 2500;

    function hz(zz) {
      var tz;
      let {
        eventName: sz
      } = zz;
      const {
        t: Fz
      } = (0, vz.B)(), Wz = Zz.h[sz], [Xz, Oz] = (0, gz.useState)((() => Date.now() >= Wz.endsAt.getTime())), [oz, Uz] = (0, gz.useState)("overall"), Kz = function(zz, tz) {
        const {
          userContext: sz,
          isUserContextUpdating: Fz
        } = (0, Yz.b)(), Wz = `${zz}:${tz}`, [Xz, Oz] = (0, gz.useState)({
          requestKey: Wz,
          leaderboard: {
            status: "loading"
          }
        });
        return (0, gz.useEffect)((() => {
          if (Fz) return;
          let Xz, oz = !1;
          const vz = async () => {
            if ("visible" === document.visibilityState) try {
              const Fz = await Gz.d.getGameEventLeaderboard(sz, {
                event: zz,
                scope: tz
              });
              oz || Oz({
                requestKey: Wz,
                leaderboard: {
                  status: "loaded",
                  leaderboard: Fz
                }
              })
            } catch {
              oz || Oz((zz => zz.requestKey === Wz && "loaded" === zz.leaderboard.status ? zz : {
                requestKey: Wz,
                leaderboard: {
                  status: "unavailable"
                }
              }))
            }
            oz || (Xz = setTimeout(vz, Mz))
          };
          return vz(), () => {
            oz = !0, clearTimeout(Xz)
          }
        }), [zz, tz, Wz, sz, Fz]), Xz.requestKey === Wz ? Xz.leaderboard : {
          status: "loading"
        }
      }(sz, oz), uz = function(zz) {
        const tz = (0, gz.useRef)(null),
          sz = (0, gz.useRef)(0),
          Fz = (0, gz.useRef)(),
          [Wz, Xz] = (0, gz.useState)({});
        return (0, gz.useEffect)((() => {
          const Wz = null === zz || void 0 === zz ? void 0 : zz.entries;
          if (!Wz) return;
          const Oz = new Map(Wz.map((zz => [zz.player.name, zz.value]))),
            oz = tz.current;
          if (tz.current = Oz, null === oz) return;
          const vz = {};
          for (const [zz, tz] of Oz) {
            const Fz = oz.get(zz);
            void 0 !== Fz && tz > Fz && (vz[zz] = {
              amount: tz - Fz,
              key: sz.current++
            })
          }
          0 !== Object.keys(vz).length && (Xz(vz), clearTimeout(Fz.current), Fz.current = setTimeout((() => {
            Xz({})
          }), dz))
        }), [zz]), (0, gz.useEffect)((() => () => {
          clearTimeout(Fz.current)
        }), []), Wz
      }("loaded" === Kz.status ? Kz.leaderboard : null), Nz = function(zz) {
        const [tz, sz] = (0, gz.useState)(null), Fz = "loaded" === zz.status ? zz.leaderboard.goalProgress : void 0;
        return (0, gz.useEffect)((() => {
          Fz && sz(Fz)
        }), [Fz]), tz
      }(Kz), bz = Tz.f[`profileEffect_${Wz.prizePack}`];
      if (Xz) return null;
      const Dz = "loaded" === Kz.status ? Kz.leaderboard : null,
        Hz = null !== (tz = null === Dz || void 0 === Dz ? void 0 : Dz.entries) && void 0 !== tz ? tz : null,
        Bz = null !== Dz && void 0 !== Dz && Dz.own && null !== Hz && !Hz.some((zz => zz.isOwn)) ? Dz.own : null;
      return (0, yz.jsx)("section", {
        className: "GameEventPanel AnimFadeIn",
        children: (0, yz.jsxs)("div", {
          className: "GameEventPanelCard",
          children: [(0, yz.jsxs)("div", {
            className: "GameEventPanelInfo",
            children: [(0, yz.jsxs)("div", {
              className: "GameEventPanelStatus",
              children: [(0, yz.jsxs)("span", {
                className: "GameEventPanelLive",
                children: [(0, yz.jsx)("span", {
                  className: "GameEventPanelLiveDot"
                }), Fz("gameEvents:live")]
              }), (0, yz.jsxs)("span", {
                className: "GameEventPanelEndsIn",
                children: [Fz("gameEvents:endsIn"), (0, yz.jsx)(Jz.e, {
                  toTime: Wz.endsAt,
                  onReachEndOfCountdown: () => {
                    Oz(!0)
                  }
                })]
              })]
            }), (0, yz.jsx)("h2", {
              className: "GameEventPanelTitle",
              children: Fz(Wz.titleKey)
            }), (0, yz.jsxs)("div", {
              className: "GameEventPanelPrize",
              children: [(0, yz.jsxs)("div", {
                className: "GameEventPanelPrizeSummary",
                children: [bz && (0, yz.jsx)("div", {
                  className: "GameEventPanelPrizePreview",
                  children: (0, yz.jsx)(bz, {})
                }), (0, yz.jsxs)("div", {
                  className: "GameEventPanelPrizeText",
                  children: [(0, yz.jsx)("div", {
                    className: "GameEventPanelPrizeLabel",
                    children: Fz("gameEvents:prize")
                  }), (0, yz.jsx)("div", {
                    className: "GameEventPanelPrizeName",
                    children: Fz(Wz.prizeNameKey)
                  })]
                })]
              }), (0, yz.jsx)(Qz, {
                event: Wz,
                progress: Nz
              })]
            })]
          }), (0, yz.jsxs)("div", {
            className: "GameEventPanelLeaderboard",
            children: [(0, yz.jsxs)("div", {
              className: "GameEventPanelLeaderboardHeader",
              children: [(0, yz.jsx)("h3", {
                className: "GameEventPanelLeaderboardTitle",
                children: Fz(Wz.leaderboard.titleKey)
              }), (0, yz.jsx)(Az.b, {
                ariaLabel: Fz("gameEvents:leaderboardScope"),
                options: Zz.e.map((zz => ({
                  value: zz,
                  label: Fz(`gameEvents:${zz}Scope`)
                }))),
                value: oz,
                onChange: Uz
              })]
            }), "loading" === Kz.status && (0, yz.jsx)("div", {
              className: "GameEventPanelLeaderboardLoader AnimFadeIn",
              children: (0, yz.jsx)(cz.d, {})
            }), ("unavailable" === Kz.status || "loaded" === Kz.status && null === Hz) && (0, yz.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Fz("gameEvents:leaderboardUnavailable")
            }), null !== Hz && 0 === Hz.length && (0, yz.jsx)("div", {
              className: "GameEventPanelLeaderboardMessage",
              children: Fz("friends" === oz ? "gameEvents:friendsLeaderboardEmpty" : "gameEvents:leaderboardEmpty")
            }), null !== Hz && Hz.length > 0 && (0, yz.jsx)("ol", {
              className: "GameEventPanelRows",
              children: Hz.map((zz => {
                const tz = uz[zz.player.name];
                return (0, yz.jsxs)("li", {
                  className: wz()("GameEventPanelRow", {
                    GameEventPanelRowOwn: zz.isOwn,
                    GameEventPanelRowTop: zz.rank <= 3
                  }),
                  children: [(0, yz.jsxs)("span", {
                    className: "GameEventPanelRank",
                    children: ["#", zz.rank]
                  }), (0, yz.jsx)("div", {
                    className: "GameEventPanelPlayer",
                    children: (0, yz.jsx)(jz.g, {
                      playerSocialPreview: {
                        ...zz.player,
                        location: {
                          status: "offline"
                        }
                      },
                      showLocation: !1
                    })
                  }), void 0 !== tz && (0, yz.jsxs)("span", {
                    className: "GameEventPanelGain",
                    children: ["+", tz.amount.toLocaleString()]
                  }, tz.key), (0, yz.jsx)("span", {
                    className: "GameEventPanelScore",
                    children: zz.value.toLocaleString()
                  })]
                }, zz.player.name)
              }))
            }), Bz && (0, yz.jsxs)("div", {
              className: "GameEventPanelRow GameEventPanelRowOwn GameEventPanelOwnRow",
              children: [(0, yz.jsxs)("span", {
                className: "GameEventPanelRank",
                children: ["#", Bz.rank.toLocaleString()]
              }), (0, yz.jsx)("span", {
                className: "GameEventPanelPlayer",
                children: Fz("gameEvents:yourPlace")
              }), (0, yz.jsx)("span", {
                className: "GameEventPanelScore",
                children: Bz.value.toLocaleString()
              })]
            })]
          })]
        })
      })
    }

    function Qz(zz) {
      let {
        event: tz,
        progress: sz
      } = zz;
      const {
        t: Fz
      } = (0, vz.B)(), Wz = null !== sz && tz.prizeGoals.some(((zz, tz) => sz[tz] >= zz.target));
      return (0, yz.jsxs)("div", {
        className: "GameEventPanelGoals",
        children: [(0, yz.jsx)("div", {
          className: "GameEventPanelGoalsHeading",
          children: Fz(Wz ? "gameEvents:prizeEarned" : "gameEvents:goalsHeading")
        }), (0, yz.jsx)("div", {
          className: "GameEventPanelGoalRow",
          children: tz.prizeGoals.map(((zz, tz) => {
            const Wz = null === sz ? null : Math.min(sz[tz], zz.target);
            return (0, yz.jsxs)(gz.Fragment, {
              children: [tz > 0 && (0, yz.jsx)("div", {
                className: "GameEventPanelGoalsOr",
                children: Fz("gameEvents:goalsOr")
              }), (0, yz.jsxs)("div", {
                className: wz()("GameEventPanelGoal", {
                  GameEventPanelGoalDone: Wz === zz.target
                }),
                children: [(0, yz.jsx)("span", {
                  className: "GameEventPanelGoalLabel",
                  children: Fz(zz.labelKey)
                }), (0, yz.jsxs)("div", {
                  className: "GameEventPanelGoalBar",
                  children: [(0, yz.jsx)("div", {
                    className: "GameEventPanelGoalBarFill",
                    style: {
                      width: (null !== Wz && void 0 !== Wz ? Wz : 0) / zz.target * 100 + "%"
                    }
                  }), null !== Wz && (0, yz.jsxs)("span", {
                    className: "GameEventPanelGoalCount",
                    children: [Wz.toLocaleString(), " / ", zz.target.toLocaleString()]
                  })]
                })]
              })]
            }, zz.board)
          }))
        })]
      })
    }
    var kz = sz(1511),
      iz = sz(1546),
      Lz = sz(1012),
      lz = sz(699),
      nz = sz(3158);

    function az(zz) {
      let {
        gameNameWithVariation: tz
      } = zz;
      const sz = (0, kz.y)(tz),
        [Fz, Wz] = (0, gz.useState)(null);
      if ((0, gz.useEffect)((() => {
          if (!sz) return;
          let zz = !0;
          return (0, iz.i)(sz).then((tz => {
            zz && Wz(tz)
          })).catch((zz => {
            console.error(`Failed to load the page copy for ${sz.name}`, zz)
          })), () => {
            zz = !1
          }
        }), [sz]), !sz || !Fz || Fz.name !== sz.name) return null;
      const Xz = (0, iz.e)(Fz),
        Oz = new Set((0, Lz.c)((0, lz.h)()).map((zz => (0, kz.v)(zz)))),
        oz = Fz.similarGames.filter((zz => Oz.has((0, kz.v)(zz))));
      return (0, yz.jsx)("div", {
        className: "GamePageContent",
        children: (0, yz.jsxs)("div", {
          className: "GamePageContentColumns",
          children: [(0, yz.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, yz.jsx)("h2", {
              children: Xz.whatIs
            }), Fz.whatIs.map((zz => (0, yz.jsx)("p", {
              children: zz
            }, zz)))]
          }), (0, yz.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, yz.jsx)("h2", {
              children: Xz.howToPlay
            }), Fz.howToPlay.map((zz => (0, yz.jsx)("p", {
              children: zz
            }, zz)))]
          }), (0, yz.jsxs)("section", {
            className: "GamePageContentSection",
            children: [(0, yz.jsx)("h2", {
              children: Xz.features
            }), (0, yz.jsx)("ul", {
              children: Fz.features.map((zz => (0, yz.jsx)("li", {
                children: zz
              }, zz)))
            })]
          }), (0, yz.jsxs)("aside", {
            className: "GamePageContentSection",
            children: [(0, yz.jsx)("h2", {
              children: Xz.tips
            }), (0, yz.jsx)("ul", {
              children: Fz.tips.map((zz => (0, yz.jsx)("li", {
                children: zz
              }, zz)))
            })]
          }), (0, yz.jsxs)("section", {
            className: "GamePageContentSection GamePageContentFaq",
            children: [(0, yz.jsx)("h2", {
              children: Xz.faq
            }), Fz.faq.map((zz => {
              let {
                question: tz,
                answer: sz
              } = zz;
              return (0, yz.jsxs)("div", {
                className: "GamePageContentFaqItem",
                children: [(0, yz.jsx)("h3", {
                  children: tz
                }), (0, yz.jsx)("p", {
                  children: sz
                })]
              }, tz)
            }))]
          }), oz.length > 0 && (0, yz.jsxs)("nav", {
            className: "GamePageContentSection GamePageContentSimilarGamesSection",
            children: [(0, yz.jsx)("h2", {
              children: Xz.similarGames
            }), (0, yz.jsx)("ul", {
              className: "GamePageContentSimilarGames",
              children: oz.map((zz => (0, yz.jsx)("li", {
                children: (0, yz.jsx)(nz.g, {
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
    var qz = sz(1036),
      Sz = sz(106),
      Vz = sz(1120),
      Rz = sz(8900),
      pz = sz(1594),
      fz = sz(1493),
      Ez = sz(1483),
      zt = sz(1550),
      tt = sz(1430),
      st = sz(1319),
      Ft = sz(35856),
      Wt = sz(1220),
      Xt = sz(991),
      Ot = sz(321),
      ot = sz(1001),
      vt = sz(1506),
      Ut = sz(8419),
      Kt = sz(30),
      ut = sz(2353),
      Nt = sz(725),
      bt = sz(1213),
      wt = sz(6089);

    function Dt(zz) {
      let {
        preview: tz,
        isBroken: sz
      } = zz;
      const Fz = null === tz ? null : (0, Xz.e)(tz, "small"),
        Oz = (0, Wz.e)(null !== Fz && void 0 !== Fz ? Fz : Xz.o);
      return null === tz ? (0, yz.jsx)("div", {
        className: wz()("FeaturedGamesPopupSlotThumbnail FeaturedGamesPopupSlotThumbnailEmpty", {
          FeaturedGamesPopupSlotThumbnailBroken: sz
        }),
        children: (0, yz.jsx)(qz.c, {
          name: sz ? "triangle-exclamation" : "star"
        })
      }) : (0, yz.jsx)("div", {
        className: wz()("FeaturedGamesPopupSlotThumbnail", oz.h),
        style: (0, oz.f)(Oz),
        role: "img",
        "aria-label": tz.name,
        children: (0, yz.jsx)(oz.d, {
          image: Oz
        })
      })
    }

    function gt(zz) {
      let {
        schematicId: tz,
        gameName: sz
      } = zz;
      const {
        userContext: Wz
      } = (0, Yz.b)(), Xz = (0, Iz.d)(), [Oz, oz] = (0, gz.useState)(null), [vz, Uz] = (0, gz.useState)(null), [Kz, uz] = (0, gz.useState)(!1), bz = (0, gz.useCallback)((() => {
        Uz(null), Gz.d.getFeaturedGames(Wz).then((zz => {
          Xz.current && oz(zz.slots)
        })).catch((zz => {
          console.error("Failed to get featured games", zz), Xz.current && Uz("Failed to load featured games")
        }))
      }), [Wz, Xz]);
      (0, gz.useEffect)((() => {
        bz()
      }), [bz]);
      const wz = (zz, tz) => {
        Kz || (uz(!0), Gz.d.setFeaturedGame(Wz, zz, tz).then((() => {
          Xz.current && bz()
        })).catch((zz => {
          console.error("Failed to set featured game", zz), Xz.current && Uz("Failed to update the featured slot")
        })).finally((() => {
          Xz.current && uz(!1)
        })))
      };
      return (0, yz.jsxs)("div", {
        className: "FeaturedGamesPopupBody",
        children: [(0, yz.jsx)("h1", {
          className: "FeaturedGamesPopupTitle",
          children: "Featured Games"
        }), !Oz && !vz && (0, yz.jsx)("div", {
          className: "FeaturedGamesPopupLoader",
          children: (0, yz.jsx)(cz.d, {})
        }), vz && (0, yz.jsx)("div", {
          className: "FeaturedGamesPopupError",
          children: vz
        }), Oz && (0, yz.jsxs)(yz.Fragment, {
          children: [(0, yz.jsx)("div", {
            className: "FeaturedGamesPopupSlots",
            children: Oz.map((zz => {
              const sz = zz.schematicId === tz,
                Wz = null === zz.schematicId,
                {
                  categoryGroup: Xz
                } = Fz.M[zz.slotId];
              return (0, yz.jsxs)("div", {
                className: "FeaturedGamesPopupSlot",
                children: [(0, yz.jsx)(Dt, {
                  preview: zz.preview,
                  isBroken: !Wz
                }), (0, yz.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotText",
                  children: [(0, yz.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotLabel",
                    children: [(0, Fz.jb)(Xz), " \xb7 position", " ", (0, Fz.O)(zz.slotId, Fz.Pb) + 1, " of", " ", (0, Fz.Nb)(Xz, Fz.Pb)]
                  }), Wz && (0, yz.jsx)("div", {
                    className: "FeaturedGamesPopupSlotEmpty",
                    children: "Empty"
                  }), !Wz && null !== zz.preview && (0, yz.jsx)("div", {
                    className: "FeaturedGamesPopupSlotGame",
                    children: zz.preview.name
                  }), !Wz && null === zz.preview && (0, yz.jsxs)("div", {
                    className: "FeaturedGamesPopupSlotMissing",
                    children: [(0, yz.jsx)(qz.c, {
                      name: "triangle-exclamation"
                    }), " Pinned game is no longer published"]
                  })]
                }), (0, yz.jsxs)("div", {
                  className: "FeaturedGamesPopupSlotActions",
                  children: [Wz && (0, yz.jsxs)(Nz.t, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      wz(zz.slotId, tz)
                    },
                    disabled: Kz,
                    children: [(0, yz.jsx)(qz.c, {
                      name: "star"
                    }), " Feature here"]
                  }), !Wz && !sz && (0, yz.jsxs)(Nz.Q, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      wz(zz.slotId, tz)
                    },
                    disabled: Kz,
                    children: [(0, yz.jsx)(qz.c, {
                      name: "star"
                    }), " Replace"]
                  }), !Wz && (0, yz.jsxs)(Nz.H, {
                    className: "FeaturedGamesPopupSlotButton",
                    onClick: () => {
                      wz(zz.slotId, null)
                    },
                    disabled: Kz,
                    children: [(0, yz.jsx)(qz.c, {
                      name: "xmark"
                    }), " Clear"]
                  })]
                })]
              }, zz.slotId)
            }))
          }), (0, yz.jsx)("p", {
            className: "FeaturedGamesPopupHint",
            children: "A game leaves its slot once it ranks higher on its own."
          })]
        })]
      })
    }
    var Ht = sz(4321),
      Bt = sz(4235),
      Pt = sz(4240),
      rt = sz(4261),
      Yt = sz(4210),
      xt = sz(3243),
      mt = sz(8410),
      Jt = sz(220);
    const It = {
      skyblock: [sz(35887).d]
    };
    var Ct = sz(580);
    const et = {
      listedVariations: null,
      backgroundImage: Xz.o,
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

    function Zt(zz, tz) {
      const sz = Nt.i[zz.schematicId];
      return {
        listedVariations: [],
        backgroundImage: (0, Xz.e)(zz, "large"),
        badges: [],
        category: zz.gameCategory,
        title: void 0 !== (null === sz || void 0 === sz ? void 0 : sz.title) ? tz(sz.title) : zz.name,
        variationTitle: null,
        description: void 0 !== (null === sz || void 0 === sz ? void 0 : sz.description) ? tz(sz.description) : zz.description,
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

    function Gt(zz) {
      var tz, sz, Fz;
      return null !== (tz = null !== (sz = (0, Jt.l)() ? function(zz) {
        for (const [tz, sz] of Object.entries(It)) {
          const Fz = [tz, ...sz.map((zz => (0, Ot.Pb)(tz, zz)))];
          if (Fz.includes(zz)) return Fz
        }
        return null
      }(zz) : null) && void 0 !== sz ? sz : null === (Fz = Nt.e[zz]) || void 0 === Fz ? void 0 : Fz.listedVariations) && void 0 !== tz ? tz : null
    }

    function Tt() {
      const {
        gameNameWithVariation: zz
      } = (0, fz.C)();
      if ((0, gz.useEffect)(xt.s, []), zz && (0, Wt.s)(zz)) return (0, yz.jsx)(ct, {
        urlId: zz
      }, zz);
      const tz = zz && (0, Xt.n)(zz) ? zz : "firstParty";
      return (0, yz.jsx)(jt, {}, tz)
    }

    function ct(zz) {
      let {
        urlId: tz
      } = zz;
      const {
        userContext: sz,
        isUserContextUpdating: Fz
      } = (0, Yz.b)(), Wz = (0, gz.useMemo)((() => (0, pz.f)(tz)), [tz]);
      (0, gz.useMemo)((() => {
        if (null === Wz) return;
        const zz = Vz.userContextManager.peekCurrentUserContext();
        (null !== zz ? Gz.d.getGame(zz, Wz.schematicId) : Vz.userContextManager.getCurrentUserContext().then((zz => Gz.d.getGame(zz, Wz.schematicId)))).catch((zz => {
          console.error(`Failed to get the custom game ${Wz.schematicId}`, zz), (0, pz.e)(tz)
        }))
      }), [Wz, tz]);
      const [Xz, Oz] = (0, gz.useState)(null), oz = (0, Rz.e)();
      (0, gz.useEffect)((() => {
        if (null !== Wz || Fz) return;
        let zz = !0;
        return Gz.d.getGameByUrlId(sz, tz).then((sz => {
          zz && Oz({
            urlId: tz,
            game: sz
          })
        })).catch((sz => {
          console.error(`Failed to find the custom game with urlId ${tz}`, sz), zz && (0, Ez.navigateToHomePage)()
        })), () => {
          zz = !1
        }
      }), [tz, Wz, Fz, sz]);
      const vz = null !== Wz && void 0 !== Wz ? Wz : (null === Xz || void 0 === Xz ? void 0 : Xz.urlId) === tz ? Xz.game : null;
      return null === vz ? (0, yz.jsx)(cz.d, {}) : oz ? (0, yz.jsx)(jt, {
        gameNameWithVariation: (0, Xt.t)(vz.schematicId),
        knownCustomGame: vz
      }, vz.schematicId) : null
    }

    function jt(zz) {
      var tz, sz, Oz, bz, Zz, Tz, cz, Az;
      let {
        gameNameWithVariation: Mz,
        knownCustomGame: dz = null
      } = zz;
      const {
        t: Qz
      } = (0, vz.B)();
      (0, ut.e)();
      const iz = (0, ut.k)(),
        {
          userContext: Lz,
          isUserContextUpdating: lz
        } = (0, Yz.b)(),
        nz = (0, Yt.i)(),
        Vz = (0, Ez.useNavigatePreserveSearch)(),
        Rz = (0, fz.C)(),
        pz = (0, gz.useMemo)((() => Mz ? {
          gameNameWithVariation: Mz
        } : Rz), [Mz, Rz]),
        tt = (0, Ut.c)(pz),
        Wt = (0, gz.useMemo)((() => {
          const zz = function(zz) {
            var tz, sz;
            const Fz = Gt(zz);
            if (!Fz || 0 === Fz.length || Fz.includes(zz)) return zz;
            const Wz = Uz.f.getItem((0, Bz.l)(zz));
            if (Wz && Fz.includes(Wz)) return Wz;
            return null !== (tz = null === (sz = Nt.e[zz]) || void 0 === sz ? void 0 : sz.defaultListedVariation) && void 0 !== tz ? tz : Fz[0]
          }(tt.gameNameWithVariation);
          return zz === tt.gameNameWithVariation ? tt : {
            ...tt,
            gameNameWithVariation: zz
          }
        }), [tt]);
      (0, gz.useEffect)((() => {
        const zz = tt.gameNameWithVariation;
        Wt.gameNameWithVariation !== zz && zz !== (0, Ot.Tb)(zz) && Vz((0, kz.w)(Wt.gameNameWithVariation), {
          replace: !0
        })
      }), [Wt.gameNameWithVariation, tt.gameNameWithVariation, Vz]);
      const Dt = (0, Iz.d)(),
        [xt, Jt] = (0, gz.useState)(""),
        It = gz.useRef(null),
        [Tt, ct] = (0, gz.useState)(),
        jt = (0, Xt.n)(Wt.gameNameWithVariation),
        yt = (0, gz.useMemo)((() => jt ? null : function(zz, tz, sz) {
          var Fz, Wz;
          const Oz = Nt.e[zz];
          return (0, Ct.G)(Oz) ? null : {
            listedVariations: Gt(zz),
            backgroundImage: (0, Xz.m)(zz, (0, Xz.c)(Oz)),
            badges: (0, Kz.filterBadges)(Oz.badges),
            category: Oz.type,
            title: sz(Oz.title),
            variationTitle: Oz.variationTitle ? sz(Oz.variationTitle) : null,
            description: sz(Oz.description),
            ownerSocialPreviewWithoutLocation: null,
            ccu: null !== tz ? null !== (Fz = tz[zz]) && void 0 !== Fz ? Fz : 0 : null,
            favourites: null,
            isFavourite: null,
            useRejoinLastLobbyButton: Oz.useRejoinLastLobbyButton,
            showWorldsInsteadOfCustomLobbies: Oz.showWorldsInsteadOfCustomLobbies,
            canCreateCustomLobbies: null === (Wz = Oz.canCreateCustomLobbies) || void 0 === Wz || Wz,
            countdownInformation: (0, Bz.i)(zz)
          }
        }(Wt.gameNameWithVariation, iz, Qz)), [jt, Wt.gameNameWithVariation, iz, Qz]),
        [Mt, dt] = (0, gz.useState)(!1),
        [ht, Qt] = (0, gz.useState)((() => dz ? Zt(dz, Qz) : et)),
        kt = null !== yt && void 0 !== yt ? yt : ht,
        [it] = (0, gz.useState)(kt === et),
        Lt = (0, Wz.e)(kt.backgroundImage, {
          keepPrevious: !0,
          decode: !0
        }),
        {
          recentlyPlayedPublicLobbies: lt,
          recentlyPlayedCustomLobbies: nt
        } = (0, gz.useMemo)((() => function(zz, tz, sz, Fz) {
          var Wz;
          const Xz = zz => {
              const sz = (0, Xt.r)(zz),
                Fz = tz.find((tz => "custom" === tz.type ? tz.schematicId === sz : tz.gameNameWithVariation === zz));
              return Fz ? [...Fz.recentLobbies] : []
            },
            Oz = (0, Kz.getRecentGameNameWithVariationLobbiesKey)(zz),
            oz = null !== (Wz = Uz.f.getItem(Oz)) && void 0 !== Wz ? Wz : [],
            vz = [...Xz(zz), ...oz],
            uz = [];
          for (const Uz of vz)(0, bt.L)(Uz) && !uz.includes(Uz) && uz.push(Uz);
          let Nz = vz;
          if (sz) {
            const zz = Xz("classic_worlds"),
              tz = vz.filter((tz => !zz.includes(tz)));
            Nz = [...zz, ...tz]
          }
          const bz = [],
            wz = !1 === Fz ? [] : Nz;
          for (const Uz of wz)(0, bt.L)(Uz) || bz.includes(Uz) || bz.push(Uz);
          return {
            recentlyPlayedPublicLobbies: uz,
            recentlyPlayedCustomLobbies: bz
          }
        }(Wt.gameNameWithVariation, nz, kt.showWorldsInsteadOfCustomLobbies, kt.canCreateCustomLobbies)), [Wt.gameNameWithVariation, nz, kt.showWorldsInsteadOfCustomLobbies, kt.canCreateCustomLobbies]),
        [qt, St] = (0, gz.useState)(!0),
        [Vt, Rt] = (0, gz.useState)([]),
        [pt, ft] = (0, gz.useState)(null),
        [Et, zs] = (0, gz.useState)("explore"),
        ts = (0, gz.useRef)(!1),
        ss = (0, gz.useCallback)((zz => {
          (0, Hz.unstable_batchedUpdates)((() => {
            ct(zz), Qt((tz => ({
              ...Zt(zz, Qz),
              isFavourite: tz.isFavourite
            })))
          }))
        }), [Qz]);
      (0, gz.useEffect)((() => {
        null === Kt.b.get("gameEntrySource") && (0, Kt.e)("gameInformationPageDirect")
      }), []);
      const Fs = (0, gz.useRef)(null);
      (0, gz.useEffect)((() => {
        const zz = zz => {
            Fs.current = zz.target instanceof Element ? zz.target.closest("a, button") : null
          },
          tz = zz => {
            "Tab" === zz.key && (Fs.current = null)
          };
        return document.addEventListener("pointerdown", zz, !0), document.addEventListener("keydown", tz, !0), () => {
          document.removeEventListener("pointerdown", zz, !0), document.removeEventListener("keydown", tz, !0)
        }
      }), []), (0, xz.d)("Enter", (zz => {
        const tz = zz.target instanceof Element ? zz.target : null;
        if (zz.defaultPrevented || null !== tz && void 0 !== tz && tz.closest("input, textarea, select")) return;
        const sz = null === tz || void 0 === tz ? void 0 : tz.closest("a, button");
        sz && sz !== Fs.current || (zz.preventDefault(), Ns())
      })), (0, mz.b)(Ez.navigateToHomePage);
      const Ws = lt.length > 0 || nt.length > 0,
        Xs = !kt.useRejoinLastLobbyButton || 0 === lt.length,
        Os = jt && null === kt.ownerSocialPreviewWithoutLocation,
        os = Lz.getPlayerName() === (null === Tt || void 0 === Tt || null === (tz = Tt.owner) || void 0 === tz ? void 0 : tz.name),
        vs = null !== (sz = null === (Oz = kt.badges.find((zz => "event" === zz.type))) || void 0 === Oz ? void 0 : Oz.event) && void 0 !== sz ? sz : null,
        Us = Xs ? Nz.p : Nz.h,
        Ks = (0, yz.jsx)(uz.h, {
          tooltipInner: (0, yz.jsx)("div", {
            children: Qz("homePage:quickPlayInfo")
          }),
          hoverOnly: !0,
          children: (0, yz.jsx)(Us, {
            className: "GameInformationButton",
            padDefaultFocus: Xs,
            showPress: !0,
            onClick: () => {
              Ns()
            },
            children: (0, yz.jsxs)("div", {
              className: "GameInformationButtonInner",
              children: [Xs && (0, yz.jsxs)(yz.Fragment, {
                children: [(0, yz.jsx)(qz.c, {
                  name: "play"
                }), " "]
              }), Qz("homePage:quickPlay")]
            })
          })
        });
      (0, gz.useEffect)((() => {
        if (!jt || lz) return;
        let zz = !0;
        const tz = (0, Xt.r)(Wt.gameNameWithVariation);
        return Gz.d.getGame(Lz, tz).then((tz => {
          zz && ss(tz)
        })).catch((tz => {
          console.error("Failed to get Custom Game information", tz), zz && (0, Ez.navigateToHomePage)()
        })), Gz.d.getFavouriteGames(Lz).then((sz => {
          zz && Qt((zz => ({
            ...zz,
            isFavourite: sz.includes(tz)
          })))
        })).catch((tz => {
          console.error("Failed to get favourite games", tz), zz && dt(!0)
        })), () => {
          zz = !1
        }
      }), [jt, lz, Wt.gameNameWithVariation, ss, Lz]);
      const us = !jt && null === yt;

      function Ns(zz) {
        (0, mt.e)(), Vz((0, Pz.c)(Wt.gameNameWithVariation, zz))
      }(0, gz.useEffect)((() => {
        us && (0, Ez.navigateToHomePage)()
      }), [us]), (0, gz.useEffect)((() => {
        !1 !== kt.canCreateCustomLobbies && null !== kt.showWorldsInsteadOfCustomLobbies && !1 === lz && (St(!0), Gz.d.getFavouriteLobbies(Lz).then((zz => {
          ft(zz)
        })), Gz.d.getOpenCustomLobbies(Lz, {
          gameNameWithVariation: kt.showWorldsInsteadOfCustomLobbies ? "classic" : Wt.gameNameWithVariation,
          onlyOwnedLobbies: "owned" === Et,
          onlyFavouriteLobbies: "favourite" === Et
        }).then((zz => {
          Dt.current && Rt(zz)
        })).catch((zz => {})).finally((() => {
          Dt.current && St(!1)
        })))
      }), [lz, Wt, Et, kt.showWorldsInsteadOfCustomLobbies, kt.canCreateCustomLobbies, Dt, Lz]);
      const bs = (0, gz.useCallback)((async zz => {
          try {
            if (!pt) return;
            pt.includes(zz) ? (Gz.d.unfavouriteLobby(Lz, zz), ft(pt.filter((tz => tz !== zz)))) : (Gz.d.favouriteLobby(Lz, zz).catch((zz => {
              console.error("Failed to favourite lobby", zz)
            })), ft([...pt, zz]))
          } catch (tz) {
            console.error("Failed to like lobby", tz)
          }
        }), [Lz, pt]),
        ws = (null === Tt || void 0 === Tt ? void 0 : Tt.schematicId) === (0, Xt.r)(tt.gameNameWithVariation) ? Tt : null,
        Ds = ws && (0, kz.z)(tt.gameNameWithVariation, (zz => Qz(zz)), ws);
      (0, zt.h)(ws && (0, kz.w)(tt.gameNameWithVariation, ws));
      const gs = Sz.featureFlags.canUseCustomLobbies && !0 === kt.canCreateCustomLobbies,
        Hs = (0, yz.jsx)("div", {
          className: "GameInformationPageContentAnchor",
          children: (0, yz.jsx)(az, {
            gameNameWithVariation: Wt.gameNameWithVariation
          })
        });
      return (0, yz.jsx)(yz.Fragment, {
        children: (0, yz.jsxs)("article", {
          className: wz()("GameInformation", {
            GameInformationFadeIn: it,
            GameInformationReleaseCountdown: "releaseCountdown" === (null === (bz = kt.countdownInformation) || void 0 === bz ? void 0 : bz.type)
          }),
          children: [Ds && (0, yz.jsx)(rz.c, {
            meta: Ds
          }), (0, yz.jsxs)("div", {
            className: "GameInformationInner",
            children: [(0, yz.jsxs)("div", {
              className: "GameInformationTop",
              children: [(0, yz.jsxs)("div", {
                className: "GameInformationTopBackgroundContainer",
                children: [(0, yz.jsx)("div", {
                  className: "GameInformationTopBackgroundColor"
                }), (0, yz.jsx)("div", {
                  className: wz()("GameInformationTopBackgroundImage", oz.h),
                  style: (0, oz.f)(Lt),
                  children: (0, yz.jsx)(oz.d, {
                    image: Lt
                  })
                })]
              }), (0, yz.jsxs)("div", {
                className: "GameInformationTopLeft",
                children: [(0, yz.jsx)(Ht.e, {}), (0, yz.jsxs)("div", {
                  className: "GameInformationTopLeftBody",
                  children: [(0, yz.jsxs)("div", {
                    className: "GameInformationHeader",
                    children: [(0, yz.jsxs)("div", {
                      className: wz()("GameInformationHeaderTagList", {
                        GameInformationHeaderTagListPending: Os
                      }),
                      children: [kt.badges.map((zz => (0, yz.jsx)("div", {
                        className: `GameInformationHeaderTag AnimFadeInScaleUp ${zz.type}`,
                        children: (0, yz.jsx)(ez.b, {
                          badge: zz
                        })
                      }, zz.type))), jt && (0, yz.jsx)("div", {
                        className: "GameInformationHeaderTag playerCrafted AnimFadeInScaleUp",
                        children: (0, yz.jsx)(Cz.c, {
                          text: (0, Fz.cb)({
                            type: "playerCrafted"
                          })
                        })
                      }), kt.category && (0, yz.jsx)("div", {
                        className: "GameInformationHeaderTag CustomGameCategory AnimFadeInScaleUp",
                        children: (0, yz.jsx)(Cz.c, {
                          text: [{
                            str: (0, Fz.gb)(kt.category).toUpperCase()
                          }]
                        })
                      }), null !== kt.ccu && (0, yz.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipCcu AnimFadeIn",
                        children: [(0, yz.jsx)(qz.c, {
                          name: "user"
                        }), (0, bt.R)(kt.ccu), " online"]
                      }), null !== kt.ownerSocialPreviewWithoutLocation && (0, yz.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner AnimFadeIn",
                        children: [(0, yz.jsx)("span", {
                          children: "Made by"
                        }), (0, yz.jsx)(jz.g, {
                          playerSocialPreview: {
                            ...kt.ownerSocialPreviewWithoutLocation,
                            location: {
                              status: "offline"
                            }
                          },
                          showLocation: !1,
                          linkToProfile: !0
                        })]
                      }), Os && (0, yz.jsxs)("div", {
                        className: "CustomGameChip CustomGameChipOwner",
                        children: [(0, yz.jsx)("span", {
                          children: "Made by"
                        }), (0, yz.jsx)("div", {
                          className: "CustomGameChipOwnerPlaceholder"
                        })]
                      }), null !== kt.favourites && (null !== kt.isFavourite || jt && !Mt) && (0, yz.jsx)(Nz.v, {
                        onClick: () => {
                          ! function() {
                            if (!0 !== ts.current && (ts.current = !0, null !== kt.isFavourite)) {
                              const zz = (0, Xt.r)(Wt.gameNameWithVariation);
                              let tz;
                              kt.isFavourite ? (tz = -1, Gz.d.unfavouriteGame(Lz, zz).catch((zz => {
                                console.error("Failed to get unfavourite game", zz)
                              })).finally((() => {
                                ts.current = !1
                              }))) : (tz = 1, Gz.d.favouriteGame(Lz, zz).catch((zz => {
                                console.error("Failed to get favourite game", zz)
                              })).finally((() => {
                                ts.current = !1
                              }))), Qt((zz => ({
                                ...zz,
                                isFavourite: !zz.isFavourite
                              }))), Qt((zz => ({
                                ...zz,
                                favourites: zz.favourites + tz
                              })))
                            }
                          }()
                        },
                        isLiked: null !== (Zz = kt.isFavourite) && void 0 !== Zz && Zz,
                        disabled: null === kt.isFavourite,
                        className: wz()("CustomGameChip AnimFadeIn", {
                          CustomGameChipPending: null === kt.isFavourite
                        })
                      }, null === kt.isFavourite ? "pending" : "known"), jt && !Os && Sz.featureFlags.useSocialFeatures && !os && (0, yz.jsx)(Pt.c, {
                        targetType: "customGame",
                        targetId: (0, Xt.r)(Wt.gameNameWithVariation),
                        className: "CustomGameChip AnimFadeIn"
                      }), (Lz.playerHasRank("developer") || Lz.playerHasRank("admin") && os) && (0, yz.jsxs)(Nz.p, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          Vz((0, vt.n)((0, ot.e)(Wt.gameNameWithVariation, !0)))
                        },
                        children: [(0, yz.jsx)(qz.c, {
                          name: "star-christmas"
                        }), " ", Qz("studio:viewInStudio")]
                      }), jt && Lz.playerHasRank("developer") && (0, yz.jsxs)(Nz.h, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          (0, wt.c)({
                            schematicId: (0, Xt.r)(Wt.gameNameWithVariation),
                            canOverride: !0
                          })
                        },
                        children: [(0, yz.jsx)(qz.c, {
                          name: "circle-info"
                        }), " Approval Info"]
                      }), jt && Lz.playerHasRank("developer") && (0, yz.jsxs)(Nz.h, {
                        className: "CustomGameChip AnimFadeIn",
                        onClick: () => {
                          st.NotificationProvider.showCustomPopup({
                            body: () => (0, yz.jsx)(gt, {
                              schematicId: (0, Xt.r)(Wt.gameNameWithVariation),
                              gameName: kt.title
                            }),
                            middleScreenPopupClassName: "FeaturedGamesPopup",
                            onClose: () => {},
                            unlockPointerKey: "featuredGamesPopup"
                          })
                        },
                        children: [(0, yz.jsx)(qz.c, {
                          name: "star"
                        }), " Featured Games"]
                      }), "updateCountdown" === (null === (Tz = kt.countdownInformation) || void 0 === Tz ? void 0 : Tz.type) && (0, yz.jsxs)("div", {
                        className: "CustomGameChip GameChipUpdateCountdown AnimFadeIn",
                        children: [(0, yz.jsxs)("div", {
                          className: "GameChipUpdateCountdownTop",
                          children: ["Update in ", (0, yz.jsx)(Jz.e, {
                            toTime: kt.countdownInformation.countdownToTime
                          })]
                        }), (0, yz.jsx)("div", {
                          className: "GameChipUpdateCountdownBottom",
                          children: kt.countdownInformation.previewText
                        })]
                      })]
                    }, Os ? "pending" : "shown"), (0, yz.jsxs)("header", {
                      className: "GameInformationTitle",
                      children: [(0, yz.jsx)("div", {
                        className: "GameInformationTitleAndChips",
                        children: (0, yz.jsxs)("h1", {
                          className: "GameInformationTitleText FullyFancyText",
                          children: [kt.title, " ", kt.variationTitle && (null === (cz = Nt.e[Wt.gameNameWithVariation]) || void 0 === cz ? void 0 : cz.variationThumbnailUseBigRatio) && (0, yz.jsx)("span", {
                            className: "GameInformationTitleVariation",
                            children: kt.variationTitle
                          })]
                        })
                      }), kt.listedVariations && kt.listedVariations.length > 0 && (0, yz.jsx)("div", {
                        className: wz()("GameInformationVariationList", {
                          GameInformationVariationListBig: null === (Az = Nt.e[Wt.gameNameWithVariation]) || void 0 === Az ? void 0 : Az.variationThumbnailUseBigRatio
                        }),
                        children: kt.listedVariations.map((zz => {
                          var tz, sz;
                          return (0, yz.jsxs)(At, {
                            variation: zz,
                            isSelected: Wt.gameNameWithVariation === zz,
                            children: [null !== iz && (0, yz.jsx)("div", {
                              className: "GameInformationVariationCCU AnimFadeIn",
                              children: (0, yz.jsxs)("div", {
                                className: "GameInformationVariationCCUInner",
                                children: [(0, yz.jsx)(qz.c, {
                                  name: "user"
                                }), " ", (0, bt.R)(null !== (tz = iz[zz]) && void 0 !== tz ? tz : 0)]
                              })
                            }), (0, yz.jsx)("div", {
                              className: "GameInformationVariationTitle SmallTextBold",
                              children: Qz(null !== (sz = Nt.e[zz].variationTitle) && void 0 !== sz ? sz : Nt.e[zz].title)
                            }), (0, yz.jsx)("div", {
                              className: "ThumbnailBadgesContainer",
                              children: (0, Kz.filterBadges)(Nt.e[zz].badges).map((zz => (0, yz.jsx)("div", {
                                className: "ThumbnailBadgeContainer " + zz.type,
                                children: (0, yz.jsx)("div", {
                                  className: "ThumbnailBadgeMain",
                                  children: (0, yz.jsx)(ez.b, {
                                    badge: zz
                                  })
                                })
                              }, zz.type)))
                            })]
                          }, zz)
                        }))
                      })]
                    }), kt.description && (0, yz.jsx)("p", {
                      className: "GameInformationDescription",
                      children: kt.description
                    })]
                  }), (0, yz.jsxs)("div", {
                    className: "GameInformationButtonRows",
                    children: [(0, yz.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowPrimary",
                      children: [!Xs && (0, yz.jsx)(uz.h, {
                        tooltipInner: (0, yz.jsx)("div", {
                          children: Qz("homePage:rejoinLobbyNumberInfo")
                        }),
                        hoverOnly: !0,
                        children: (0, yz.jsx)(Nz.p, {
                          className: "GameInformationButton",
                          padDefaultFocus: !0,
                          showPress: !0,
                          onClick: () => {
                            Ns(lt[0])
                          },
                          children: (0, yz.jsxs)("div", {
                            className: "GameInformationButtonInner",
                            children: [(0, yz.jsx)(qz.c, {
                              name: "play"
                            }), " ", Qz("homePage:rejoinLobbyNumber", {
                              number: lt[0]
                            })]
                          })
                        })
                      }), Xs && Ks]
                    }), (0, yz.jsxs)("div", {
                      className: "GameInformationButtonRow GameInformationButtonRowSecondary",
                      children: [!Xs && Ks, (0, yz.jsxs)("div", {
                        className: "JoinLobbyContainer",
                        children: [(0, yz.jsx)(qz.c, {
                          name: "magnifying-glass",
                          className: "JoinLobbyInputIcon"
                        }), (0, yz.jsx)(Dz.d, {
                          className: "JoinLobbyInput",
                          placeholderText: Qz("homePage:lobbyName"),
                          maxLength: bt.P,
                          domRef: It,
                          onValueChange: zz => {
                            zz = (0, bt.vb)(zz), Jt(zz)
                          },
                          onEnter: () => {
                            0 === xt.length ? Ns(lt[0]) : Ns(xt)
                          }
                        }), (0, yz.jsx)(Nz.h, {
                          className: "JoinLobbyButton",
                          showPress: !0,
                          onClick: () => {
                            0 === xt.length ? Ns(lt[0]) : Ns(xt)
                          },
                          children: Qz("general:join")
                        })]
                      })]
                    }), (0, yz.jsxs)("section", {
                      className: wz()("LobbyCollection RecentLobbyCollection", {
                        LobbyCollectionHidden: !Ws
                      }),
                      children: [(0, yz.jsx)("div", {
                        className: "LobbyCollectionHeader RecentLobbyCollectionHeader",
                        children: (0, yz.jsxs)("div", {
                          className: "LobbyCollectionTitle",
                          children: [(0, yz.jsx)(qz.c, {
                            name: "clock-rotate-left"
                          }), Ws && (0, yz.jsx)("h2", {
                            className: "VisuallyHidden",
                            children: Qz("homePage:recentlyPlayedLobbies")
                          })]
                        })
                      }), (0, yz.jsx)(rt.c, {
                        lobbyGroups: [lt, nt],
                        onLobbyClick: zz => {
                          Ns(zz)
                        },
                        keyPrefix: Wt.gameNameWithVariation
                      })]
                    })]
                  })]
                })]
              }), null !== vs && (0, yz.jsx)(hz, {
                eventName: vs
              })]
            }), gs && (0, yz.jsx)("div", {
              className: "GameInformationBottom",
              children: (0, yz.jsxs)("section", {
                className: "LobbyCollection",
                children: [(0, yz.jsxs)("div", {
                  className: wz()("LobbyCollectionHeader", {
                    SandboxWorldsLobbyCollectionHeader: !0 === kt.showWorldsInsteadOfCustomLobbies
                  }),
                  children: [!0 === kt.showWorldsInsteadOfCustomLobbies && (0, yz.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, yz.jsx)(qz.c, {
                      name: "planet-ringed",
                      kit: "duotone"
                    }), (0, yz.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, yz.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Qz("game:worlds")]
                    })]
                  }), !1 === kt.showWorldsInsteadOfCustomLobbies && (0, yz.jsxs)("h2", {
                    className: "LobbyCollectionTitle",
                    children: [(0, yz.jsx)(qz.c, {
                      name: "joystick"
                    }), (0, yz.jsxs)("div", {
                      className: "LobbyCollectionTitleText",
                      children: [(0, yz.jsx)("div", {
                        className: "LobbyCollectionTitleTextBackground"
                      }), Qz("homePage:customLobbies")]
                    })]
                  }), (0, yz.jsx)(Nz.Q, {
                    onClick: () => {
                      zs("explore")
                    },
                    active: "explore" === Et,
                    children: Qz("general:explore")
                  }), (0, yz.jsx)(Nz.Q, {
                    onClick: () => {
                      zs("favourite")
                    },
                    active: "favourite" === Et,
                    children: Qz("homePage:favouriteLobbies")
                  }), (0, yz.jsx)(Nz.Q, {
                    onClick: () => {
                      zs("owned")
                    },
                    active: "owned" === Et,
                    children: Qz("homePage:ownedLobbies")
                  })]
                }), (0, yz.jsxs)("div", {
                  className: "CustomLobbyList",
                  children: [(0, yz.jsxs)("div", {
                    className: "CustomLobbyListInner",
                    children: [(0, yz.jsx)(Bt.b, {
                      label: "Create",
                      onClick: () => {
                        st.NotificationProvider.showCustomPopup({
                          body: zz => (0, yz.jsx)(Ft.CreateCustomLobby, {
                            gameNameWithVariation: Wt.gameNameWithVariation,
                            close: zz
                          }),
                          middleScreenPopupClassName: "CreateCustomLobbyPopup"
                        })
                      }
                    }), !0 === qt && (0, yz.jsx)(Bt.f, {}), !1 === qt && Vt.length > 0 && Vt.map((zz => (0, yz.jsx)(Bt.c, {
                      customLobby: zz,
                      favouriteLobbies: pt,
                      toggleLikeLobby: bs,
                      showReport: Sz.featureFlags.useSocialFeatures && "owned" !== Et
                    }, zz.name)))]
                  }), Hs]
                })]
              })
            })]
          }), !gs && Hs]
        })
      })
    }

    function At(zz) {
      let {
        variation: tz,
        isSelected: sz,
        children: Fz
      } = zz;
      const vz = Nt.e[tz],
        Kz = (0, Xz.m)(tz, (0, Xz.n)(vz)),
        uz = (0, Wz.e)(Kz),
        Nz = (0, Oz.g)([(0, Xz.i)(tz, (0, Xz.c)(vz))]);
      return (0, yz.jsxs)(Ez.LinkPreserveSearch, {
        to: (0, kz.w)(tz),
        replace: !0,
        className: wz()("GameInformationVariation", oz.h, {
          SelectedGameInformationVariation: sz
        }),
        onClick: zz => {
          if (!(0, tt.c)(zz)) return;
          const sz = (0, Bz.l)(tz);
          Uz.f.setItem(sz, tz)
        },
        onMouseEnter: Nz.start,
        onMouseLeave: Nz.cancel,
        onFocus: Nz.start,
        onBlur: Nz.cancel,
        style: (0, oz.f)(uz),
        children: [(0, yz.jsx)(oz.d, {
          image: uz
        }), Fz]
      })
    }
  },
  6089: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Hz
    });
    var Fz = sz(65),
      Wz = sz(1419),
      Xz = sz(1466),
      Oz = sz(3163),
      oz = sz(1116),
      vz = sz(1306),
      Uz = sz(1333),
      Kz = sz(1036),
      uz = sz(1020),
      Nz = sz.n(uz),
      bz = sz(1087);

    function wz(zz) {
      let {
        info: tz,
        className: sz
      } = zz;
      return (0, bz.jsxs)("div", {
        className: Nz()("GameApprovalInfoDetails", sz),
        children: [(0, bz.jsxs)("div", {
          className: Nz()("GameApprovalInfoSummary", tz.overallPassed ? "Passed" : "Failed"),
          children: [(0, bz.jsx)(Kz.c, {
            name: tz.overallPassed ? "circle-check" : "circle-xmark"
          }), (0, bz.jsx)("span", {
            children: tz.summary
          })]
        }), tz.rows.length > 0 && (0, bz.jsx)("div", {
          className: "GameApprovalInfoRows",
          children: tz.rows.map((zz => (0, bz.jsxs)("div", {
            className: Nz()("GameApprovalInfoRow", zz.passed ? "Passed" : "Failed"),
            children: [(0, bz.jsx)(Kz.c, {
              name: zz.passed ? "check" : "xmark"
            }), (0, bz.jsxs)("div", {
              className: "GameApprovalInfoRowText",
              children: [(0, bz.jsx)("div", {
                className: "GameApprovalInfoRowLabel",
                children: zz.label
              }), (0, bz.jsx)("div", {
                className: "GameApprovalInfoRowValue",
                children: zz.valueText
              })]
            })]
          }, zz.label)))
        })]
      })
    }
    var Dz = sz(1173),
      gz = sz(1319);

    function Hz(zz) {
      gz.NotificationProvider.showCustomPopup({
        body: () => (0, bz.jsx)(Bz, {
          ...zz
        }),
        middleScreenPopupClassName: "ApprovalInfoPopup",
        onClose: () => {},
        unlockPointerKey: "approvalInfoPopup"
      })
    }

    function Bz(zz) {
      let {
        schematicId: tz,
        canOverride: sz,
        onApprovalChanged: uz
      } = zz;
      const {
        t: Nz
      } = (0, Dz.B)(), {
        userContext: gz
      } = (0, oz.b)(), Hz = (0, Oz.d)(), [Bz, Pz] = (0, Fz.useState)(null), [rz, Yz] = (0, Fz.useState)(null), [xz, mz] = (0, Fz.useState)(!1), Jz = (0, Fz.useCallback)((() => {
        Yz(null), Xz.d.getGameApprovalInfo(gz, tz).then((zz => {
          Hz.current && Pz(zz)
        })).catch((zz => {
          console.error("Failed to get game approval info", zz), Hz.current && Yz(Nz("studio:approvalLoadFailed"))
        }))
      }), [gz, tz, Hz, Nz]);
      (0, Fz.useEffect)((() => {
        Jz()
      }), [Jz]);
      const Iz = zz => {
        xz || (mz(!0), Xz.d.setGameApproval(gz, tz, zz).then((() => {
          null === uz || void 0 === uz || uz(), Hz.current && Jz()
        })).catch((zz => {
          console.error("Failed to set game approval", zz)
        })).finally((() => {
          Hz.current && mz(!1)
        })))
      };
      return (0, bz.jsxs)("div", {
        className: "ApprovalInfoPopupBody",
        children: [(0, bz.jsx)("h1", {
          className: "ApprovalInfoPopupTitle",
          children: Nz("studio:approvalTitle")
        }), !Bz && !rz && (0, bz.jsx)("div", {
          className: "ApprovalInfoPopupLoader",
          children: (0, bz.jsx)(vz.d, {})
        }), rz && (0, bz.jsx)("div", {
          className: "ApprovalInfoPopupError",
          children: rz
        }), Bz && (0, bz.jsxs)(bz.Fragment, {
          children: [(0, bz.jsx)(wz, {
            info: Bz
          }), sz && (0, bz.jsxs)("div", {
            className: "ApprovalInfoPopupActions",
            children: [!0 !== Bz.manualOverride && (0, bz.jsx)(Uz.h, {
              tooltipInner: (0, bz.jsx)("div", {
                children: "Manually approve the game. This will bypass the auto-approval criteria and allow the game to be shown on the home page."
              }),
              children: (0, bz.jsxs)(Wz.p, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Iz(!0)
                },
                disabled: xz,
                children: [(0, bz.jsx)(Kz.c, {
                  name: "check"
                }), " Manually Approve"]
              })
            }), !1 !== Bz.manualOverride && (0, bz.jsx)(Uz.h, {
              tooltipInner: (0, bz.jsx)("div", {
                children: "Manually deny the game. This forces the game to be hidden from the home page, even if it passes auto-approval."
              }),
              children: (0, bz.jsxs)(Wz.H, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Iz(!1)
                },
                disabled: xz,
                children: [(0, bz.jsx)(Kz.c, {
                  name: "xmark"
                }), " Manually Deny"]
              })
            }), null !== Bz.manualOverride && (0, bz.jsx)(Uz.h, {
              tooltipInner: (0, bz.jsx)("div", {
                children: "Remove the manual override and revert the game to the auto-approval criteria."
              }),
              children: (0, bz.jsxs)(Wz.h, {
                className: "ApprovalInfoPopupActionButton",
                onClick: () => {
                  Iz(null)
                },
                disabled: xz,
                children: [(0, bz.jsx)(Kz.c, {
                  name: "arrows-rotate"
                }), " Clear Override"]
              })
            })]
          })]
        })]
      })
    }
  },
  8900: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz
    });
    var Fz = sz(65),
      Wz = sz(3252);

    function Xz() {
      const [zz, tz] = (0, Fz.useState)(!1);
      return (0, Fz.useLayoutEffect)((() => {
        let zz = !0;
        return (0, Wz.d)().then((() => {
          zz && tz(!0)
        })), () => {
          zz = !1
        }
      }), []), zz
    }
  },
  8419: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    var Fz = sz(1297),
      Wz = sz(1213),
      Xz = sz(580);

    function Oz(zz) {
      return zz = function(zz, tz) {
        var sz;
        const Fz = new URLSearchParams(tz),
          Wz = Fz.get("lobby"),
          Xz = Fz.get("vm"),
          Oz = null !== (sz = Wz) && void 0 !== sz ? sz : zz.lobbyName,
          oz = null !== Xz && void 0 !== Xz ? Xz : zz.directJoinVmUrl;
        if (Oz === zz.lobbyName && oz === zz.directJoinVmUrl) return zz;
        return {
          ...zz,
          lobbyName: Oz,
          directJoinVmUrl: oz
        }
      }(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), zz = function(zz) {
        if ((0, Xz.G)(zz.directJoinVmUrl)) return zz;
        const tz = (0, Wz.cb)(zz.directJoinVmUrl);
        null === tz && (zz.directJoinVmUrl = void 0);
        return zz
      }(zz = function(zz) {
        if ((0, Xz.G)(zz.gameNameWithVariation)) return zz;
        return zz.gameNameWithVariation = (0, Fz.j)(zz.gameNameWithVariation), zz
      }(zz))
    }
  },
  8410: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      e: () => Wz
    });
    let Fz = !1;

    function Wz() {
      Fz = !0
    }

    function Xz() {
      return Fz
    }
  },
  35887: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz,
      h: () => Fz
    });
    const Fz = "skyblockSkills",
      Wz = "skills_test_gym"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);