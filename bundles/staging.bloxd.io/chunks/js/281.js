export const id = 281;
export const ids = [281];
export const modules = {
  40722: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    const yR = 1e3;

    function tR(RR, JR) {
      const GR = performance.now() + RR;
      return 0 !== JR && Math.abs(GR - JR) < yR ? JR : GR
    }
  },
  40882: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => qG
    });
    var yR = GR(66);
    const tR = "shootingLobby",
      uR = {
        Red: "#fc6464",
        Blue: "#4f94f1"
      };

    function ZR(RR, JR) {
      const GR = RR.reduce(((RR, JR) => RR + JR[5]), 0);
      return 0 === GR ? 0 === RR.length ? 0 : Math.round(100 / RR.length) : Math.round(RR[JR][5] / GR * 100)
    }
    var qR = GR(32),
      iR = GR(3494),
      fR = GR(40720),
      VR = GR(40717),
      KR = GR(1163),
      wR = GR.n(KR),
      rR = GR(2173),
      eR = GR(1468),
      aR = GR(1590),
      LR = GR(5338),
      nR = GR(5798),
      UR = GR(37810),
      WR = GR(1270),
      AR = GR(377),
      CR = GR(3361),
      XR = GR(1351),
      MR = GR(1378);
    const BR = "shootingOverlays:";

    function lR(RR, JR) {
      var GR;
      return "tdm" === JR && vR(RR) ? uR[RR] : null !== (GR = (0, AR.lb)(RR)) && void 0 !== GR ? GR : "#ffffff"
    }

    function pR(RR, JR) {
      return {
        "--team": lR(RR, JR)
      }
    }
    const gR = {
        Red: `${BR}teamRed`,
        Blue: `${BR}teamBlue`
      },
      bR = {
        diamonds: `${BR}mutation_diamonds`,
        explosives: `${BR}mutation_explosives`,
        gungame: `${BR}mutation_gungame`
      };

    function vR(RR) {
      return Object.hasOwn(uR, RR)
    }
    const OR = {
      normal: "streak",
      explosives: "streak",
      diamonds: "diamonds",
      gungame: "kills"
    };

    function xR(RR) {
      return OR[RR]
    }

    function NR() {
      const RR = (0, rR.i)("hiddenPlayerNames");
      return (0, yR.useCallback)((JR => "" === JR ? "" : (0, XR.e)(JR, RR)), [RR])
    }

    function DR(RR) {
      var JR;
      let {
        playerId: GR
      } = RR;
      const yR = null === (JR = (0, rR.i)("players").byId[GR]) || void 0 === JR ? void 0 : JR.cosmetics;
      return (0, MR.jsx)(CR.c, {
        cosmetics: null !== yR && void 0 !== yR ? yR : {}
      })
    }

    function HR(RR) {
      let {
        icon: JR,
        value: GR,
        label: yR,
        gold: tR = !1
      } = RR;
      return (0, MR.jsxs)("div", {
        className: "ShootingStat",
        children: [(0, MR.jsxs)("b", {
          className: wR()("FullyFancyText", {
            Gold: tR
          }),
          children: [JR && (0, MR.jsx)(eR.d, {
            name: JR
          }), GR]
        }), (0, MR.jsx)("span", {
          className: "SmallTextBold",
          children: yR
        })]
      })
    }
    var oR = GR(1534),
      cR = GR(40722);

    function PR(RR) {
      return `shooting:${RR}`
    }
    class IR {
      constructor() {
        this.slices = {
          hud: {
            wire: null,
            endsAt: 0,
            spawnProtectionEndsAt: 0
          },
          lobby: {
            wire: ["none"],
            startsAt: 0
          },
          roundEnd: {
            wire: ["none"],
            lobbyAt: 0
          },
          leaderboard: [],
          killfeed: [],
          kill: null,
          tier: null,
          death: null
        }, this.seq = 0
      }
      get(RR) {
        return this.slices[RR]
      }
      BK(RR, JR) {
        switch (RR) {
          case "shootingHud":
            return this.receiveHud(JR), !0;
          case tR: {
            const RR = JR;
            return this.set("lobby", {
              wire: RR,
              startsAt: "lobby" === RR[0] ? (0, cR.c)(RR[2], this.slices.lobby.startsAt) : 0
            }), !0
          }
          case "shootingRoundEnd": {
            const RR = JR;
            return this.set("roundEnd", {
              wire: RR,
              lobbyAt: "roundEnd" === RR[0] ? performance.now() + RR[17] : 0
            }), !0
          }
          case "shootingLeaderboard":
            return this.set("leaderboard", JR), !0;
          case "shootingKillfeed": {
            const RR = {
              seq: ++this.seq,
              at: performance.now(),
              wire: JR
            };
            return this.set("killfeed", [...this.slices.killfeed.slice(-11), RR]), !0
          }
          case "shootingEvent":
            return this.receiveEvent(JR), !0;
          default:
            return !1
        }
      }
      receiveHud(RR) {
        var JR;
        const GR = this.slices.hud,
          yR = (null === (JR = GR.wire) || void 0 === JR ? void 0 : JR[1]) === RR[1];
        GR.wire && !yR && (this.set("kill", null), this.set("tier", null), this.set("death", null)), this.set("hud", {
          wire: RR,
          endsAt: (0, cR.c)(RR[4], yR ? GR.endsAt : 0),
          spawnProtectionEndsAt: 0 === RR[13] ? 0 : (0, cR.c)(RR[13], GR.spawnProtectionEndsAt)
        })
      }
      receiveEvent(RR) {
        const JR = {
          seq: ++this.seq,
          at: performance.now()
        };
        switch (RR[0]) {
          case "kill":
            this.set("kill", {
              ...JR,
              wire: RR
            });
            break;
          case "tier":
            this.set("tier", {
              ...JR,
              wire: RR
            });
            break;
          case "death":
            this.set("death", {
              ...JR,
              wire: RR
            })
        }
      }
      set(RR, JR) {
        this.slices[RR] = JR, qR.n.JK(PR(RR), JR, !0)
      }
    }

    function mR(RR, JR) {
      return (0, oR.b)(PR(JR), (() => RR.get(JR)))
    }
    const zR = ["Red", "Blue"],
      SR = {
        streak: `${BR}scoreIs_streak`,
        diamonds: `${BR}scoreIs_diamonds`,
        kills: `${BR}scoreIs_kills`
      };

    function jR(RR) {
      var JR;
      let {
        store: GR,
        variation: yR
      } = RR;
      const {
        t: tR
      } = (0, WR.A)(), uR = mR(GR, "leaderboard"), ZR = mR(GR, "hud"), [, qR = "lobby", , fR = "normal", , , VR = "", , , KR = null] = null !== (JR = ZR.wire) && void 0 !== JR ? JR : [], nR = (0, UR.j)("match" === qR ? ZR.endsAt : 0), AR = (0, rR.i)("players").localId, CR = "tdm" === yR, XR = "normal" === fR ? null : bR[fR], lR = "Blue" === VR ? [...zR].reverse() : zR, pR = RR => "tdm" !== (null === KR || void 0 === KR ? void 0 : KR[0]) ? 0 : "Red" === RR ? KR[1] : KR[2];
      return (0, MR.jsx)(LR.e, {
        close: iR.j,
        togglePointerLock: !1,
        className: "ShootingBoardOverlay",
        children: (0, MR.jsxs)("section", {
          className: wR()("ShootingBoard", {
            ShootingBoardFfa: !CR
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "shootingBoardTitle",
          children: [(0, MR.jsxs)("header", {
            className: "ShootingBoardHeader",
            children: [(0, MR.jsxs)("h2", {
              id: "shootingBoardTitle",
              className: "SmallTextBold",
              children: [(0, MR.jsx)(eR.d, {
                name: "list"
              }), tR(CR ? `${BR}teamDeathmatch` : `${BR}freeForAll`)]
            }), (0, MR.jsxs)("div", {
              className: "ShootingBoardMeta SmallTextBold",
              children: [XR && (0, MR.jsx)("span", {
                children: tR(XR)
              }), "match" === qR && (0, MR.jsxs)("span", {
                children: [(0, MR.jsx)(eR.d, {
                  name: "stopwatch"
                }), " ", (0, UR.e)(nR)]
              })]
            }), (0, MR.jsx)(aR.l, {
              className: "ShootingBoardClose",
              onClick: iR.j
            })]
          }), (0, MR.jsxs)("div", {
            className: "ShootingBoardColumns",
            children: [CR && lR.map((RR => (0, MR.jsx)(dR, {
              title: tR(gR[RR]),
              team: {
                id: RR,
                score: pR(RR),
                mine: RR === VR
              },
              rows: uR.filter((JR => JR[2] === RR)),
              localId: AR
            }, RR))), !CR && (0, MR.jsx)(dR, {
              title: tR(`${BR}players`),
              team: null,
              rows: uR,
              localId: AR
            })]
          }), (0, MR.jsxs)("footer", {
            className: "ShootingBoardFooter SmallTextBold",
            children: [(0, MR.jsx)("span", {
              children: tR(SR[xR(fR)])
            }), (0, MR.jsx)("span", {
              children: tR(`${BR}kdLegend`)
            })]
          })]
        })
      })
    }

    function dR(RR) {
      let {
        title: JR,
        team: GR,
        rows: yR,
        localId: tR
      } = RR;
      const {
        t: uR
      } = (0, WR.A)(), ZR = NR(), qR = [{
        key: "name",
        header: (0, MR.jsxs)("span", {
          className: "ShootingBoardTeam",
          children: [(0, MR.jsxs)("span", {
            children: [JR, (null === GR || void 0 === GR ? void 0 : GR.mine) && (0, MR.jsxs)("span", {
              className: "ShootingBoardYou",
              children: [" \xb7 ", uR(`${BR}you`)]
            })]
          }), GR && (0, MR.jsx)("b", {
            children: GR.score
          })]
        })
      }, {
        key: "kills",
        header: (0, MR.jsx)("abbr", {
          title: uR(`${BR}kills`),
          children: uR(`${BR}killsShort`)
        })
      }, {
        key: "deaths",
        header: (0, MR.jsx)("abbr", {
          title: uR(`${BR}deaths`),
          children: uR(`${BR}deathsShort`)
        })
      }, {
        key: "score",
        header: uR(`${BR}score`)
      }];
      return (0, MR.jsx)("div", {
        className: "ShootingBoardColumn",
        style: GR ? pR(GR.id, "tdm") : void 0,
        children: (0, MR.jsx)(nR.e, {
          className: wR()("ShootingBoardTable", {
            Team: GR
          }),
          columns: qR,
          rows: yR,
          getRowKey: RR => RR[0],
          renderRow: (RR, JR) => {
            const [yR, uR, qR, iR, fR, VR, KR] = RR, rR = JR + 1;
            return (0, MR.jsxs)("tr", {
              className: wR()({
                Mine: yR === tR,
                Dead: !KR
              }),
              style: GR ? void 0 : pR(qR, "ffa"),
              children: [(0, MR.jsx)("td", {
                children: (0, MR.jsxs)("span", {
                  className: "ShootingBoardName",
                  children: [!GR && (0, MR.jsx)("span", {
                    className: wR()("ShootingBoardPlace", `Place${rR}`),
                    children: rR
                  }), (0, MR.jsx)(DR, {
                    playerId: yR
                  }), (0, MR.jsx)("span", {
                    className: "ShootingBoardNameText",
                    children: ZR(uR)
                  })]
                })
              }), (0, MR.jsx)("td", {
                children: iR
              }), (0, MR.jsx)("td", {
                children: fR
              }), (0, MR.jsx)("td", {
                className: "ShootingBoardScore",
                children: VR
              })]
            })
          }
        })
      })
    }
    var ER = GR(37796),
      YR = GR(37849),
      kR = GR(25),
      QR = GR(5792),
      FR = GR(2186),
      TR = GR(5347),
      sR = GR(3701),
      hR = GR(1581),
      RJ = GR(1614),
      JJ = GR(39767);
    const GJ = "shooting:vote";
    class yJ {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new JJ.c;
        this.JK = RR, this.sendCommand = JR, this.pacer = GR, this.view = {
          hidden: !1,
          pending: null
        }, this.unsent = !1, this.cardsKey = "", this.pendingTimer = null, this.unsubscribePacer = void 0, this.vote = RR => {
          this.unsent = !0, this.set({
            ...this.view,
            pending: RR
          }), this.flush()
        }, this.setHidden = RR => {
          this.set({
            ...this.view,
            hidden: RR
          })
        }, this.flush = () => {
          const RR = this.view.pending;
          this.unsent && null !== RR && this.pacer.tryStart() && (this.unsent = !1, this.sendCommand(`mapvote ${RR}`), this.clearPendingTimer(), this.pendingTimer = setTimeout((() => {
            this.pendingTimer = null, this.unsent || this.view.pending !== RR || this.set({
              ...this.view,
              pending: null
            })
          }), 5e3))
        }, this.unsubscribePacer = GR.subscribe(this.flush)
      }
      getView() {
        return this.view
      }
      onLobby(RR) {
        const JR = "lobby" === RR[0] ? RR[9] : [],
          GR = JR.map((RR => RR[0])).join("\n");
        if (GR !== this.cardsKey) return this.cardsKey = GR, this.unsent = !1, void this.set({
          hidden: !1,
          pending: null
        });
        const yR = this.view.pending;
        if (null === yR) return;
        const tR = JR.find((RR => RR[0] === yR));
        (!tR || tR[6] && !this.unsent) && (this.unsent = !1, this.set({
          ...this.view,
          pending: null
        }))
      }
      dispose() {
        this.unsubscribePacer(), this.pacer.dispose(), this.clearPendingTimer()
      }
      clearPendingTimer() {
        null !== this.pendingTimer && (clearTimeout(this.pendingTimer), this.pendingTimer = null)
      }
      set(RR) {
        this.view = RR, this.JK(RR)
      }
    }
    const tJ = "ShootingVoteStripOpen";

    function uJ(RR) {
      var JR, GR, tR, uR, qR;
      let {
        maps: iR,
        votes: fR
      } = RR;
      const {
        t: VR
      } = (0, WR.A)(), KR = (0, hR.h)(GJ, fR.getView()), {
        isTouchScreen: rR,
        openInGameMenuName: aR,
        openEverythingMenuName: LR
      } = (0, kR.o)(["isTouchScreen", "openInGameMenuName", "openEverythingMenuName"]), nR = null !== aR || null !== LR, UR = (0, sR.c)();
      (0, TR.d)(!0, !rR && !KR.hidden && !nR && !UR, "shootingVoteStrip", !0), (0, yR.useEffect)((() => {
        if (!KR.hidden && !rR) return document.body.classList.add(tJ), () => {
          document.body.classList.remove(tJ)
        }
      }), [KR.hidden, rR]);
      const AR = null !== (JR = null !== (GR = KR.pending) && void 0 !== GR ? GR : null === (tR = iR.find((RR => RR[6]))) || void 0 === tR ? void 0 : tR[0]) && void 0 !== JR ? JR : null,
        CR = null !== (uR = null === (qR = iR.find((RR => RR[0] === AR))) || void 0 === qR ? void 0 : qR[1]) && void 0 !== uR ? uR : null;
      return KR.hidden ? (0, MR.jsxs)("button", {
        type: "button",
        className: "ShootingVoteChip",
        "data-over-keys": "",
        ...(0, RJ.f)((() => {
          fR.setHidden(!1)
        }), "pointerup"),
        children: [(0, MR.jsx)("span", {
          className: "ShootingVoteChipLabel",
          children: VR("shootingLobby:mapVote")
        }), (0, MR.jsx)("span", {
          className: "ShootingVoteChipVote",
          children: null !== CR && void 0 !== CR ? CR : VR("shootingLobby:notVoted")
        }), !rR && (0, MR.jsxs)("span", {
          className: "ShootingVoteChipShop",
          children: [VR("shootingLobby:voteInShop"), (0, MR.jsx)(FR.c, {
            noaAction: "OpenShop",
            padHidesKey: !0
          })]
        }), (0, MR.jsx)(eR.d, {
          name: "angle-up"
        })]
      }) : (0, MR.jsxs)("div", {
        className: wR()("ShootingVoteStrip", {
          Touch: rR
        }),
        "data-over-keys": "",
        children: [(0, MR.jsxs)("div", {
          className: "ShootingVoteHeader",
          children: [(0, MR.jsx)("span", {
            className: "ShootingVoteTitle",
            children: VR("shootingLobby:voteTitle")
          }), (0, MR.jsx)("span", {
            className: "ShootingVoteHint",
            children: VR("shootingLobby:voteHint")
          }), (0, MR.jsxs)("button", {
            type: "button",
            className: "ShootingVoteHide",
            ...(0, RJ.f)((() => {
              fR.setHidden(!0)
            }), "pointerup"),
            children: [VR("shootingLobby:hide"), (0, MR.jsx)(eR.d, {
              name: "angle-down"
            })]
          })]
        }), (0, MR.jsx)("div", {
          className: "ShootingVoteCards",
          children: iR.map(((RR, JR) => (0, MR.jsx)(ZJ, {
            map: RR,
            chance: ZR(iR, JR),
            mine: AR === RR[0],
            onVote: fR.vote,
            showHeads: !rR
          }, RR[0])))
        })]
      })
    }

    function ZJ(RR) {
      let {
        map: JR,
        chance: GR,
        mine: tR,
        onVote: uR,
        showHeads: ZR
      } = RR;
      const {
        t: qR
      } = (0, WR.A)(), [iR, fR, VR, KR, rR, aR, , LR, nR] = JR, [UR, AR] = (0, yR.useState)(!1);
      return (0, MR.jsxs)("button", {
        type: "button",
        className: wR()("ShootingMapCard", {
          Mine: tR
        }),
        "aria-pressed": tR,
        ...(0, RJ.f)((() => {
          tR || uR(iR)
        }), "pointerup"),
        children: [(0, MR.jsxs)("div", {
          className: "ShootingMapCardImage",
          children: [null !== nR && (0, MR.jsx)(QR.e, {
            game: {
              schematicId: nR
            }
          }), null === nR && !UR && (0, MR.jsx)("img", {
            alt: "",
            src: `/textures/games/shooting/${VR}`,
            onError: () => {
              AR(!0)
            }
          }), rR && (0, MR.jsx)("span", {
            className: "ShootingMapCardNew",
            children: qR("shootingLobby:new")
          }), "normal" !== KR && (0, MR.jsx)("span", {
            className: "ShootingMapCardMutation",
            children: qR(bR[KR])
          }), tR && (0, MR.jsx)("span", {
            className: "ShootingMapCardCheck",
            children: (0, MR.jsx)(eR.d, {
              name: "check"
            })
          })]
        }), (0, MR.jsxs)("div", {
          className: "ShootingMapCardInfo",
          children: [(0, MR.jsx)("span", {
            className: "ShootingMapCardName",
            children: fR
          }), (0, MR.jsxs)("span", {
            className: "ShootingMapCardVotes",
            children: [aR, (0, MR.jsx)(eR.d, {
              name: "user"
            })]
          })]
        }), (0, MR.jsx)("div", {
          className: "ShootingMapCardBar",
          children: (0, MR.jsx)("i", {
            style: {
              width: `${GR}%`
            }
          })
        }), (0, MR.jsxs)("div", {
          className: "ShootingMapCardFooter",
          children: [ZR && (0, MR.jsx)(qJ, {
            voters: LR
          }), (0, MR.jsx)("span", {
            className: "ShootingMapCardChance",
            children: qR("shootingLobby:chance", {
              percent: GR
            })
          })]
        })]
      })
    }

    function qJ(RR) {
      let {
        voters: JR
      } = RR;
      const GR = (0, rR.i)("players");
      return (0, MR.jsx)("span", {
        className: "ShootingMapCardHeads",
        children: JR.slice(0, 8).map((RR => {
          var JR;
          return (null === (JR = GR.byId[RR]) || void 0 === JR ? void 0 : JR.cosmetics) && (0, MR.jsx)(DR, {
            playerId: RR
          }, RR)
        }))
      })
    }

    function iJ(RR) {
      let {
        store: JR,
        votes: GR,
        variation: yR
      } = RR;
      const tR = mR(JR, "lobby"),
        uR = (0, rR.i)("localPlayerAlive"),
        ZR = (0, rR.e)("connectedGame", (RR => RR.replay));
      if ("lobby" !== tR.wire[0] || ZR) return null;
      const qR = tR.wire;
      return (0, MR.jsxs)(MR.Fragment, {
        children: [(0, MR.jsx)(fJ, {
          wire: qR,
          startsAt: tR.startsAt,
          variation: yR
        }), uR && qR[9].length > 0 && (0, MR.jsx)(ER.d, {
          children: (0, MR.jsx)(uJ, {
            maps: qR[9],
            votes: GR
          })
        })]
      })
    }
    const fJ = (0, yR.memo)((function(RR) {
      let {
        wire: JR,
        startsAt: GR,
        variation: tR
      } = RR;
      const {
        t: uR
      } = (0, WR.A)(), [ZR, qR] = (0, yR.useState)(null), [iR, fR] = (0, yR.useState)(null), VR = (0, YR.l)(ZR, iR), [, KR, , wR, rR, aR, LR, nR, UR] = JR, {
        isTouchScreen: AR
      } = (0, kR.o)(["isTouchScreen"]);
      return (0, MR.jsx)("div", {
        ref: fR,
        className: "ShootingLobbyStatusContainer",
        style: null === VR ? void 0 : {
          top: VR
        },
        children: (0, MR.jsxs)("div", {
          ref: qR,
          className: "ShootingLobbyStatus",
          children: [(0, MR.jsx)(VJ, {
            waiting: "waiting" === KR,
            startsAt: GR
          }), "tdm" === tR && (0, MR.jsxs)("div", {
            className: "ShootingLobbyTeams",
            children: [(0, MR.jsx)(KJ, {
              team: "Blue",
              count: LR,
              cap: nR,
              mine: "Blue" === UR
            }), (0, MR.jsx)("span", {
              className: "ShootingLobbyTeamHint",
              children: uR(AR ? "shootingLobby:teamHintTouch" : "" === UR ? "shootingLobby:teamHintPick" : "shootingLobby:teamHintSwitch")
            }), (0, MR.jsx)(KJ, {
              team: "Red",
              count: aR,
              cap: nR,
              mine: "Red" === UR
            })]
          }), "ffa" === tR && (0, MR.jsx)("div", {
            className: "ShootingLobbyTeams",
            children: (0, MR.jsxs)("span", {
              className: "ShootingLobbyPlayers",
              children: [(0, MR.jsx)(eR.d, {
                name: "user-group"
              }), uR("shootingLobby:players", {
                count: wR,
                max: rR
              })]
            })
          })]
        })
      })
    }));

    function VJ(RR) {
      let {
        waiting: JR,
        startsAt: GR
      } = RR;
      const {
        t: yR
      } = (0, WR.A)(), tR = (0, UR.j)(JR ? 0 : GR);
      return (0, MR.jsxs)("div", {
        className: "ShootingLobbyCountdown",
        children: [JR && (0, MR.jsx)("span", {
          className: "ShootingLobbyCountdownLabel",
          children: yR("shootingLobby:waiting")
        }), !JR && (0, MR.jsxs)(MR.Fragment, {
          children: [(0, MR.jsx)("span", {
            className: "ShootingLobbyCountdownLabel",
            children: yR("shootingLobby:startingIn")
          }), (0, MR.jsx)("span", {
            className: wR()("ShootingLobbyCountdownTime", {
              Soon: tR < 10
            }),
            children: (0, UR.e)(tR)
          })]
        })]
      })
    }

    function KJ(RR) {
      let {
        team: JR,
        count: GR,
        cap: yR,
        mine: tR
      } = RR;
      const {
        t: uR
      } = (0, WR.A)();
      return (0, MR.jsxs)("span", {
        className: wR()("ShootingLobbyTeam", {
          Mine: tR,
          Full: GR >= yR
        }),
        style: pR(JR, "tdm"),
        children: [uR(gR[JR]), (0, MR.jsx)("span", {
          className: "ShootingLobbyTeamCount",
          children: uR("shootingLobby:teamCount", {
            count: GR,
            cap: yR
          })
        })]
      })
    }
    var wJ = GR(37712),
      rJ = GR(1943),
      eJ = GR(2123);
    const aJ = "--cubeWarfareKillfeedOffset",
      LJ = (0, yR.memo)((function(RR) {
        let {
          wire: JR,
          endsAt: GR,
          leaderboard: tR
        } = RR;
        const {
          t: uR
        } = (0, WR.A)(), {
          isTouchScreen: ZR
        } = (0, kR.o)(["isTouchScreen"]), [qR, iR] = (0, yR.useState)(null), [fR, VR] = (0, yR.useState)(null), KR = (0, YR.l)(fR, qR, ZR);
        ! function(RR, JR) {
          (0, yR.useLayoutEffect)((() => {
            if (!RR || null === JR) return;
            let GR = null;
            const yR = RR => {
                GR = RR, null === RR ? document.body.style.removeProperty(aJ) : document.body.style.setProperty(aJ, `${RR}px`)
              },
              tR = () => {
                var JR;
                const tR = document.querySelector(".InGameUi .Killfeed");
                if (!tR) return void yR(null);
                const uR = .3 * (0, rJ.getRemInPx)(),
                  ZR = tR.getBoundingClientRect().top - (null !== (JR = GR) && void 0 !== JR ? JR : uR);
                yR(Math.max(Math.ceil(uR), Math.ceil(RR.getBoundingClientRect().bottom + YR.b - ZR)))
              },
              uR = new ResizeObserver(tR);
            uR.observe(RR);
            const ZR = document.querySelector(`.InGameUi .${YR.i}`);
            return ZR && uR.observe(ZR), tR(), window.addEventListener("resize", tR), () => {
              uR.disconnect(), window.removeEventListener("resize", tR), yR(null)
            }
          }), [RR, JR])
        }(qR, KR);
        const [, , wR, rR, , eR, aR, LR, nR, UR, AR] = JR, CR = eR > 0 ? uR("cubeWarfareHud:firstTo", {
          target: eR
        }) : uR("cubeWarfareHud:timeLeft");
        return (0, MR.jsxs)("div", {
          ref: iR,
          className: "CubeWarfareScoreBarContainer",
          style: null === KR ? void 0 : {
            top: KR
          },
          children: [(0, MR.jsxs)("div", {
            ref: VR,
            className: "CubeWarfareScoreBar",
            children: ["tdm" === UR[0] && (0, MR.jsx)(UJ, {
              myTeam: aR,
              redScore: UR[1],
              blueScore: UR[2],
              leaderboard: tR,
              target: "diamonds" === rR ? eR : 0,
              clock: (0, MR.jsx)(nJ, {
                endsAt: GR,
                label: CR
              })
            }), "ffa" === UR[0] && (0, MR.jsx)(WJ, {
              myTeam: aR,
              myScore: nR,
              myRank: UR[1],
              playerCount: UR[2],
              leader: UR[3],
              second: UR[4],
              spectating: LR,
              target: eR,
              clock: (0, MR.jsx)(nJ, {
                endsAt: GR,
                label: CR
              })
            })]
          }), null !== AR && (0, MR.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, MR.jsx)("span", {
              children: uR("cubeWarfareHud:gungameKills", {
                kills: AR[0],
                target: eR
              })
            }), "" !== AR[2] && (0, MR.jsxs)(MR.Fragment, {
              children: [(0, MR.jsx)("span", {
                "aria-hidden": !0,
                children: "\xb7"
              }), (0, MR.jsx)("span", {
                children: uR("cubeWarfareHud:nextWeapon")
              }), (0, MR.jsx)("span", {
                className: "CubeWarfareScoreLineItem",
                children: (0, MR.jsx)(eJ.b, {
                  itemName: AR[2],
                  amount: 0,
                  gunTransform: "none"
                })
              })]
            })]
          }), null === AR && "diamonds" === rR && (0, MR.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, MR.jsx)("span", {
              className: "CubeWarfareScoreLineItem",
              children: (0, MR.jsx)(eJ.b, {
                itemName: "Diamond",
                amount: 0
              })
            }), (0, MR.jsx)("span", {
              children: uR("cubeWarfareHud:collectDiamonds")
            })]
          }), null === AR && "diamonds" !== rR && "tdm" === wR && !LR && (0, MR.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, MR.jsx)("span", {
              children: uR("cubeWarfareHud:yourScore")
            }), (0, MR.jsx)("b", {
              children: nR
            })]
          })]
        })
      }));

    function nJ(RR) {
      let {
        endsAt: JR,
        label: GR
      } = RR;
      const yR = (0, UR.j)(JR);
      return (0, MR.jsxs)("div", {
        className: "CubeWarfareClock",
        children: [(0, MR.jsx)("div", {
          className: wR()("CubeWarfareClockTime", {
            Urgent: yR < 60
          }),
          children: (0, UR.e)(yR)
        }), (0, MR.jsx)("div", {
          className: "CubeWarfareClockLabel",
          children: GR
        })]
      })
    }

    function UJ(RR) {
      const {
        t: JR
      } = (0, WR.A)(), GR = JR => RR.leaderboard.filter((RR => RR[2] === JR)), yR = {
        team: "Red",
        name: JR(gR.Red),
        score: RR.redScore,
        members: GR("Red")
      }, tR = {
        team: "Blue",
        name: JR(gR.Blue),
        score: RR.blueScore,
        members: GR("Blue")
      }, [uR, ZR] = "Blue" === RR.myTeam ? [tR, yR] : [yR, tR], qR = (GR, yR) => (0, MR.jsxs)("div", {
        className: wR()("CubeWarfareSide", yR, `Team-${GR.team}`, {
          Mine: GR.team === RR.myTeam
        }),
        style: pR(GR.team, "tdm"),
        children: [GR.team === RR.myTeam && (0, MR.jsx)("span", {
          className: "CubeWarfareYouTag",
          children: JR("shootingOverlays:you")
        }), (0, MR.jsx)("div", {
          className: "CubeWarfareHeads",
          children: GR.members.map((RR => {
            let [JR, , , , , , GR] = RR;
            return (0, MR.jsx)("span", {
              className: wR()("CubeWarfareHead", {
                Dead: !GR
              }),
              children: (0, MR.jsx)(DR, {
                playerId: JR
              })
            }, JR)
          }))
        }), (0, MR.jsxs)("div", {
          className: "CubeWarfareSideText",
          children: [(0, MR.jsx)("div", {
            className: "CubeWarfareSideName",
            children: (0, MR.jsx)("span", {
              className: "CubeWarfareSideLabel",
              children: GR.name
            })
          }), (0, MR.jsx)("div", {
            className: "CubeWarfareSideScore SmallTextBold",
            children: GR.score
          })]
        }), (0, MR.jsx)(AJ, {
          score: GR.score,
          target: RR.target
        })]
      });
      return (0, MR.jsxs)(MR.Fragment, {
        children: [qR(uR, "Left"), RR.clock, qR(ZR, "Right")]
      })
    }

    function WJ(RR) {
      var JR;
      const {
        t: GR
      } = (0, WR.A)(), yR = NR(), tR = null !== (JR = RR.second) && void 0 !== JR ? JR : RR.spectating || RR.playerCount > 1 ? RR.leader : null;
      return (0, MR.jsxs)(MR.Fragment, {
        children: [!RR.spectating && (0, MR.jsxs)("div", {
          className: wR()("CubeWarfareSide", "Left", "Mine", "Ffa"),
          style: {
            "--team": (0, AR.lb)(RR.myTeam)
          },
          children: [(0, MR.jsx)("span", {
            className: "CubeWarfareYouTag",
            children: GR("shootingOverlays:you")
          }), (0, MR.jsxs)("div", {
            className: "CubeWarfareSideText",
            children: [(0, MR.jsx)("div", {
              className: "CubeWarfareSideName",
              children: (0, MR.jsx)("span", {
                className: "CubeWarfareSideLabel",
                children: GR("cubeWarfareHud:rank", {
                  rank: RR.myRank
                })
              })
            }), (0, MR.jsx)("div", {
              className: "CubeWarfareSideScore SmallTextBold",
              children: RR.myScore
            })]
          }), (0, MR.jsx)(AJ, {
            score: RR.myScore,
            target: RR.target
          })]
        }), RR.clock, null !== tR && (0, MR.jsxs)("div", {
          className: wR()("CubeWarfareSide", "Right", "Ffa"),
          children: [(0, MR.jsxs)("div", {
            className: "CubeWarfareSideText",
            children: [(0, MR.jsxs)("div", {
              className: "CubeWarfareSideName",
              children: [(0, MR.jsx)("span", {
                className: "CubeWarfareSideLabel",
                children: null !== RR.second ? GR("cubeWarfareHud:second") : GR("cubeWarfareHud:leader")
              }), (0, MR.jsx)("span", {
                className: "CubeWarfareSideWho",
                children: yR(tR[1])
              })]
            }), (0, MR.jsx)("div", {
              className: "CubeWarfareSideScore SmallTextBold",
              children: tR[2]
            })]
          }), (0, MR.jsx)(AJ, {
            score: tR[2],
            target: RR.target
          })]
        })]
      })
    }

    function AJ(RR) {
      let {
        score: JR,
        target: GR
      } = RR;
      return (0, MR.jsx)("div", {
        className: wR()("CubeWarfareStrip", {
          Progress: GR > 0
        }),
        children: GR > 0 && (0, MR.jsx)("i", {
          style: {
            transform: `scaleX(${Math.min(1,JR/GR)})`
          }
        })
      })
    }
    const CJ = (0, yR.memo)((function(RR) {
      let {
        wire: JR
      } = RR;
      const {
        isTouchScreen: GR
      } = (0, kR.o)(["isTouchScreen"]);
      return GR ? (0, MR.jsx)("div", {
        className: "CubeWarfarePerkColumnTouch",
        children: (0, MR.jsx)(XJ, {
          wire: JR,
          touch: !0
        })
      }) : (0, MR.jsx)(ER.d, {
        placement: "bottomLeft",
        children: (0, MR.jsx)(XJ, {
          wire: JR
        })
      })
    }));

    function XJ(RR) {
      let {
        wire: JR,
        touch: GR = !1
      } = RR;
      const {
        t: yR
      } = (0, WR.A)(), tR = JR[11], uR = JR[12], ZR = uR.findIndex((RR => {
        let [, JR] = RR;
        return tR < JR
      }));
      return (0, MR.jsxs)("div", {
        className: "CubeWarfarePerkColumn",
        children: [(0, MR.jsxs)("div", {
          className: "CubeWarfarePerkPoints SmallTextBold",
          children: [(0, MR.jsx)(eR.d, {
            name: "crosshairs"
          }), tR]
        }), uR.map(((RR, JR) => {
          let [qR, iR, fR, VR, KR] = RR;
          const rR = tR >= iR,
            aR = 0 === JR ? 0 : uR[JR - 1][1],
            LR = rR ? 1 : JR === ZR ? Math.max(0, (tR - aR) / (iR - aR)) : 0;
          return (0, MR.jsxs)("div", {
            className: wR()("CubeWarfarePerk", {
              Active: KR,
              Reached: rR,
              Next: JR === ZR
            }),
            children: [(0, MR.jsxs)("div", {
              className: "CubeWarfarePerkTile",
              children: [!rR && (0, MR.jsx)("div", {
                className: "CubeWarfarePerkFill",
                style: {
                  transform: `scaleY(${LR})`
                }
              }), (0, MR.jsx)(eR.d, {
                name: VR || "lock"
              })]
            }), (0, MR.jsxs)("div", {
              className: "CubeWarfarePerkText SmallTextBold",
              children: [(0, MR.jsx)("span", {
                className: "CubeWarfarePerkName",
                children: fR || yR("cubeWarfareHud:tier", {
                  tier: qR
                })
              }), (0, MR.jsxs)("small", {
                children: [rR && yR(KR ? "cubeWarfareHud:active" : "cubeWarfareHud:noPerk"), !rR && !GR && yR("cubeWarfareHud:toGo", {
                  count: iR - tR
                }), !rR && GR && (0, MR.jsxs)(MR.Fragment, {
                  children: [(0, MR.jsx)(eR.d, {
                    name: "crosshairs"
                  }), " ", iR]
                })]
              })]
            })]
          }, qR)
        }))]
      })
    }

    function MJ(RR) {
      const [, JR] = (0, yR.useReducer)((RR => RR + 1), 0);
      (0, yR.useEffect)((() => {
        const GR = RR - performance.now();
        if (0 === RR || GR <= 0) return;
        const yR = window.setTimeout(JR, GR);
        return () => {
          window.clearTimeout(yR)
        }
      }), [RR])
    }
    const BJ = ["", "", "cubeWarfareHud:doubleKill", "cubeWarfareHud:tripleKill", "cubeWarfareHud:quadKill", "cubeWarfareHud:rampage"];

    function lJ(RR) {
      let {
        store: JR
      } = RR;
      const GR = vJ(mR(JR, "kill"), 2500),
        yR = NR();
      return GR ? (0, MR.jsx)(gJ, {
        victimName: yR(GR.wire[2]),
        headshot: GR.wire[4],
        killsThisLife: GR.wire[5],
        gold: GR.wire[6]
      }, GR.seq) : null
    }

    function pJ(RR) {
      let {
        store: JR
      } = RR;
      const GR = vJ(mR(JR, "tier"), 3500);
      return GR ? (0, MR.jsx)(bJ, {
        tier: GR.wire[1],
        perk: GR.wire[2],
        icon: GR.wire[3]
      }, GR.seq) : null
    }

    function gJ(RR) {
      let {
        victimName: JR,
        headshot: GR,
        killsThisLife: yR,
        gold: tR
      } = RR;
      const {
        t: uR
      } = (0, WR.A)(), ZR = BJ[Math.min(yR, BJ.length - 1)];
      return (0, MR.jsxs)("div", {
        className: "CubeWarfareKillPop",
        children: [ZR && (0, MR.jsx)("div", {
          className: "CubeWarfareMultiKill SmallTextBold",
          children: uR(ZR)
        }), (0, MR.jsxs)("div", {
          className: "CubeWarfareKillLine SmallTextBold",
          children: [(0, MR.jsx)("span", {
            className: "CubeWarfareKillTag",
            children: uR("cubeWarfareHud:eliminated")
          }), (0, MR.jsx)("span", {
            className: "CubeWarfareKillName",
            children: JR
          })]
        }), (0, MR.jsxs)("div", {
          className: "CubeWarfareKillRewards",
          children: [tR > 0 && (0, MR.jsxs)("span", {
            className: "CubeWarfareReward Gold SmallTextBold",
            children: [`+${tR}`, (0, MR.jsx)(eR.d, {
              name: "coins",
              className: "CubeWarfareCoin"
            })]
          }), GR && (0, MR.jsxs)("span", {
            className: "CubeWarfareReward Headshot SmallTextBold",
            children: [(0, MR.jsx)(eR.d, {
              name: "crosshairs"
            }), uR("shootingOverlays:headshot")]
          })]
        })]
      })
    }

    function bJ(RR) {
      let {
        tier: JR,
        perk: GR,
        icon: yR
      } = RR;
      const {
        t: tR
      } = (0, WR.A)();
      return (0, MR.jsxs)("div", {
        className: "CubeWarfareTierBanner",
        children: [(0, MR.jsx)("div", {
          className: "CubeWarfareTierIcon",
          children: (0, MR.jsx)(eR.d, {
            name: yR || "crosshairs"
          })
        }), (0, MR.jsxs)("div", {
          children: [(0, MR.jsx)("div", {
            className: "CubeWarfareTierTitle",
            children: tR("cubeWarfareHud:tierReached", {
              tier: JR
            })
          }), (0, MR.jsx)("div", {
            className: "CubeWarfareTierPerk SmallTextBold",
            children: GR ? tR("cubeWarfareHud:perkActive", {
              perk: GR
            }) : tR("cubeWarfareHud:noPerk")
          })]
        })]
      })
    }

    function vJ(RR, JR) {
      return MJ(RR ? RR.at + JR : 0), RR && performance.now() - RR.at < JR ? RR : null
    }
    var OJ = GR(3465);

    function xJ() {
      var RR, JR;
      const GR = null === (RR = (0, OJ.f)("currencyAmounts")) || void 0 === RR || null === (JR = RR.gold) || void 0 === JR ? void 0 : JR.amount,
        [tR, uR] = (0, yR.useState)(0),
        ZR = (0, yR.useRef)(GR);
      return (0, yR.useEffect)((() => {
        void 0 !== GR && void 0 !== ZR.current && GR > ZR.current && uR((RR => RR + 1)), ZR.current = GR
      }), [GR]), void 0 === GR ? null : (0, MR.jsx)(ER.d, {
        placement: "statBars",
        children: (0, MR.jsxs)("div", {
          className: wR()("CubeWarfareWallet SmallTextBold", {
            Bump: tR > 0
          }),
          children: [(0, MR.jsx)(eR.d, {
            name: "coins",
            className: "CubeWarfareCoin"
          }), GR]
        }, tR)
      })
    }

    function NJ(RR) {
      let {
        endsAt: JR
      } = RR;
      return 0 === JR ? null : (0, MR.jsx)(HJ, {
        endsAt: JR
      }, JR)
    }

    function DJ(RR) {
      let {
        endsAt: JR
      } = RR;
      return MJ(JR), JR <= performance.now() ? null : (0, MR.jsx)("div", {
        className: "CubeWarfareProtectionEdge"
      })
    }

    function HJ(RR) {
      let {
        endsAt: JR
      } = RR;
      const {
        t: GR
      } = (0, WR.A)(), [tR] = (0, yR.useState)((() => Math.max(0, JR - performance.now())));
      return MJ(JR), JR <= performance.now() ? null : (0, MR.jsxs)("div", {
        className: "CubeWarfareProtection",
        children: [(0, MR.jsx)(eR.d, {
          name: "shield-halved",
          className: "CubeWarfareProtectionIcon"
        }), (0, MR.jsxs)("div", {
          className: "CubeWarfareProtectionText SmallTextBold",
          children: [GR("cubeWarfareHud:spawnProtected"), (0, MR.jsx)("small", {
            children: GR("cubeWarfareHud:spawnProtectedHint")
          })]
        }), (0, MR.jsx)("div", {
          className: "CubeWarfareProtectionDrain",
          style: {
            "--cubeWarfareDrainMs": `${tR}ms`
          }
        })]
      })
    }

    function oJ(RR) {
      let {
        place: JR,
        hidden: GR = !1,
        children: yR
      } = RR;
      return "OverHotbar" !== JR ? (0, MR.jsx)("div", {
        className: wR()("CubeWarfareCentreSlot", JR, {
          Hidden: GR
        }),
        children: yR
      }) : (0, MR.jsx)(ER.d, {
        children: (0, MR.jsx)("div", {
          className: "CubeWarfareOverHotbar",
          children: (0, MR.jsx)("div", {
            className: "CubeWarfareCentreSlot OverHotbar",
            children: yR
          })
        })
      })
    }
    const cJ = RR => {
      var JR;
      const GR = null === (JR = RR.attributes.customAttributes) || void 0 === JR ? void 0 : JR.shotsLeft;
      return "number" === typeof GR && RR.clipSize ? (0, MR.jsx)(PJ, {
        item: RR,
        shotsLeft: GR,
        clipSize: RR.clipSize
      }) : null
    };

    function PJ(RR) {
      let {
        item: JR,
        shotsLeft: GR,
        clipSize: tR
      } = RR;
      const {
        t: uR
      } = (0, WR.A)(), ZR = function(RR, JR, GR) {
        const [tR, uR] = (0, yR.useState)(null), ZR = (0, yR.useRef)(RR), qR = (0, yR.useRef)(0);
        return (0, hR.f)("middleScreenBarInitiate", (RR => {
          let {
            duration: GR
          } = RR;
          GR >= 400 && ZR.current < JR && uR({
            key: ++qR.current,
            ms: GR
          })
        })), (0, hR.f)("middleScreenBarRemove", (() => {
          uR(null)
        })), (0, yR.useEffect)((() => {
          const JR = RR > ZR.current;
          ZR.current = RR, JR && uR(null)
        }), [RR]), (0, yR.useEffect)((() => {
          uR(null)
        }), [GR]), (0, yR.useEffect)((() => {
          if (!tR) return;
          const RR = window.setTimeout((() => {
            uR(null)
          }), tR.ms);
          return () => {
            window.clearTimeout(RR)
          }
        }), [tR]), tR
      }(GR, tR, JR.instance), qR = GR <= Math.ceil(.25 * tR);
      return (0, MR.jsx)(ER.d, {
        placement: "statBars",
        children: (0, MR.jsxs)("div", {
          className: wR()("CubeWarfareAmmo", {
            Low: qR,
            Reloading: null !== ZR
          }),
          children: [null === ZR && (0, MR.jsxs)(MR.Fragment, {
            children: [(0, MR.jsx)("span", {
              className: "CubeWarfareAmmoMag SmallTextBold",
              children: GR
            }), (0, MR.jsx)("span", {
              className: "CubeWarfareAmmoClip SmallTextBold",
              children: `/ ${tR}`
            })]
          }), null !== ZR && (0, MR.jsxs)("span", {
            className: "CubeWarfareAmmoReloading SmallTextBold",
            children: [uR("cubeWarfareHud:reloading"), (0, MR.jsx)("i", {
              className: "CubeWarfareAmmoReloadBar",
              style: {
                "--cubeWarfareReloadMs": `${ZR.ms}ms`
              }
            }, ZR.key)]
          }), (0, MR.jsx)("span", {
            className: "CubeWarfareAmmoGun",
            children: (0, MR.jsx)(eJ.b, {
              itemName: JR.name,
              amount: 0,
              gunTransform: "none"
            })
          }), qR && null === ZR && (0, MR.jsx)(FR.c, {
            noaAction: "ReloadGun",
            className: "CubeWarfareAmmoKey",
            padHidesKey: !0
          })]
        })
      })
    }

    function IJ(RR) {
      let {
        store: JR
      } = RR;
      const GR = mR(JR, "hud"),
        tR = mR(JR, "leaderboard"),
        uR = (0, rR.e)("connectedGame", (RR => RR.replay));
      ! function(RR) {
        (0, yR.useEffect)((() => {
          const JR = (0, wJ.m)({
              headshot: (JR, GR) => {
                var yR;
                const tR = performance.now(),
                  uR = RR.get("killfeed").findLast((RR => {
                    let {
                      at: yR,
                      wire: uR
                    } = RR;
                    return uR[0] === JR && uR[1] === GR && tR - yR < 3e3
                  }));
                return null !== (yR = null === uR || void 0 === uR ? void 0 : uR.wire[3]) && void 0 !== yR && yR
              },
              streakLabel: RR => `\xd7${RR}`
            }),
            GR = (0, wJ.l)(cJ);
          return () => {
            JR(), GR()
          }
        }), [RR])
      }(JR);
      const ZR = GR.wire;
      if (!ZR || "match" !== ZR[1] || uR) return null;
      const qR = !ZR[7];
      return (0, MR.jsxs)("div", {
        className: "CubeWarfareHud",
        children: [(0, MR.jsx)(LJ, {
          wire: ZR,
          endsAt: GR.endsAt,
          leaderboard: tR
        }), qR && (0, MR.jsxs)(MR.Fragment, {
          children: [(0, MR.jsx)(CJ, {
            wire: ZR
          }), (0, MR.jsx)(mJ, {
            store: JR,
            protectionEndsAt: GR.spawnProtectionEndsAt
          }), (0, MR.jsx)(xJ, {}), (0, MR.jsx)(DJ, {
            endsAt: GR.spawnProtectionEndsAt
          })]
        })]
      })
    }

    function mJ(RR) {
      let {
        store: JR,
        protectionEndsAt: GR
      } = RR;
      const {
        isTouchScreen: yR
      } = (0, kR.o)(["isTouchScreen"]), tR = (0, hR.h)("aimingOverlay", "none"), uR = (0, MR.jsx)(NJ, {
        endsAt: GR
      }), ZR = (0, MR.jsx)(pJ, {
        store: JR
      }), qR = (0, MR.jsx)(lJ, {
        store: JR
      });
      if (!yR) return (0, MR.jsxs)(oJ, {
        place: "OverHotbar",
        children: [uR, ZR, qR]
      });
      const iR = "sniper" === tR;
      return (0, MR.jsxs)(MR.Fragment, {
        children: [(0, MR.jsxs)(oJ, {
          place: "AboveCrosshair",
          hidden: iR,
          children: [uR, qR]
        }), (0, MR.jsx)(oJ, {
          place: "BelowCrosshair",
          hidden: iR,
          children: ZR
        })]
      })
    }
    var zJ = GR(359);
    const SJ = 2 * Math.PI * 19;

    function jJ(RR) {
      var JR, GR;
      let {
        store: tR,
        variation: uR,
        state: ZR
      } = RR;
      const {
        t: qR
      } = (0, WR.A)(), iR = mR(tR, "death"), fR = mR(tR, "leaderboard"), VR = NR(), KR = (0, yR.useRef)(performance.now()), wR = (0, yR.useRef)(ZR.alive);
      !ZR.alive && wR.current && (KR.current = performance.now()), wR.current = ZR.alive;
      const rR = (0, yR.useRef)(null);
      iR && iR.at >= KR.current - 3e3 && (rR.current = {
        diedAt: KR.current,
        wire: iR.wire
      });
      const LR = (null === (JR = rR.current) || void 0 === JR ? void 0 : JR.diedAt) === KR.current ? rR.current.wire : null,
        [, nR, UR, AR, CR, XR, pR, gR, bR] = null !== LR && void 0 !== LR ? LR : [],
        vR = "player" === nR && "" !== UR,
        OR = null === (GR = fR.find((RR => RR[0] === UR))) || void 0 === GR ? void 0 : GR[2];
      return (0, MR.jsxs)("div", {
        className: "ShootingDeathCard",
        style: {
          "--killer": vR && OR ? lR(OR, uR) : void 0
        },
        children: [(0, MR.jsxs)("div", {
          className: "ShootingDeathKiller",
          children: [vR && (0, MR.jsx)("div", {
            className: "ShootingDeathHead",
            children: (0, MR.jsx)(DR, {
              playerId: UR
            })
          }), !vR && (0, MR.jsx)("div", {
            className: "ShootingDeathHead ShootingDeathSkull",
            children: (0, MR.jsx)(eR.d, {
              name: "skull"
            })
          }), (0, MR.jsxs)("div", {
            className: "ShootingDeathWho",
            children: [vR && (0, MR.jsxs)(MR.Fragment, {
              children: [(0, MR.jsx)("div", {
                className: "ShootingDeathEyebrow SmallTextBold",
                children: qR(`${BR}killedBy`)
              }), (0, MR.jsx)("div", {
                className: "ShootingDeathName FullyFancyText",
                children: VR(null !== AR && void 0 !== AR ? AR : "")
              })]
            }), !vR && (0, MR.jsx)("div", {
              className: "ShootingDeathName FullyFancyText",
              children: qR(dJ(nR))
            }), CR && (0, MR.jsxs)("div", {
              className: "ShootingDeathWeapon SmallTextBold",
              children: [(0, MR.jsx)("span", {
                className: "ShootingDeathGun",
                children: (0, MR.jsx)(eJ.b, {
                  itemName: CR,
                  amount: 0,
                  gunTransform: "none"
                })
              }), (0, MR.jsx)("span", {
                children: CR
              }), XR && (0, MR.jsxs)("span", {
                className: "ShootingDeathHeadshot",
                children: [(0, MR.jsx)(eR.d, {
                  name: "crosshairs"
                }), " ", qR(`${BR}headshot`)]
              })]
            })]
          }), (0, MR.jsx)(EJ, {
            secondsLeft: ZR.secondsLeft,
            totalSeconds: ZR.totalSeconds,
            alive: ZR.alive
          })]
        }), LR && (0, MR.jsxs)("div", {
          className: "ShootingDeathLife",
          children: [(0, MR.jsx)(HR, {
            value: String(pR),
            label: qR(`${BR}killsThisLife`)
          }), (0, MR.jsx)(HR, {
            icon: "crosshairs",
            value: String(gR),
            label: qR(`${BR}streakPoints`)
          }), (0, MR.jsx)(HR, {
            icon: "coins",
            value: `+${bR}`,
            label: qR(`${BR}goldEarned`),
            gold: !0
          })]
        }), (0, MR.jsxs)("div", {
          className: "ShootingDeathActions",
          children: [(0, MR.jsx)(aR.g, {
            className: "ShootingDeathLoadout",
            onClick: () => {
              kR.d.set({
                openEverythingMenuName: zJ.o.SHOP
              })
            },
            touchPressOn: "pointerup",
            children: (0, MR.jsxs)("span", {
              className: "ShootingDeathLoadoutText",
              children: [qR(`${BR}changeLoadout`), (0, MR.jsx)(FR.c, {
                noaAction: "OpenShop",
                padHidesKey: !0
              })]
            })
          }), (0, MR.jsx)("div", {
            className: "ShootingDeathStatus FullyFancyText",
            children: ZR.status
          })]
        })]
      })
    }

    function dJ(RR) {
      switch (RR) {
        case "self":
          return `${BR}diedSelf`;
        case "void":
          return `${BR}diedVoid`;
        default:
          return "respawnPage:youDied"
      }
    }

    function EJ(RR) {
      let {
        secondsLeft: JR,
        totalSeconds: GR,
        alive: yR
      } = RR;
      const tR = yR || JR <= 0,
        uR = GR > 0 ? Math.min(1, JR / GR) : 0;
      return (0, MR.jsxs)("div", {
        className: "ShootingDeathRing",
        children: [(0, MR.jsxs)("svg", {
          viewBox: "0 0 44 44",
          children: [(0, MR.jsx)("circle", {
            className: "ShootingDeathRingTrack",
            cx: "22",
            cy: "22",
            r: 19
          }), (0, MR.jsx)("circle", {
            className: "ShootingDeathRingFill",
            cx: "22",
            cy: "22",
            r: 19,
            strokeDasharray: SJ,
            strokeDashoffset: SJ * (1 - (tR ? 0 : uR))
          })]
        }), (0, MR.jsxs)("b", {
          className: "FullyFancyText",
          children: [tR && (0, MR.jsx)(eR.d, {
            name: "check"
          }), !tR && JR]
        })]
      })
    }
    const YJ = [1, 0, 2],
      kJ = [`${BR}place1`, `${BR}place2`, `${BR}place3`],
      QJ = [`${BR}place1Short`, `${BR}place2Short`, `${BR}place3Short`],
      FJ = {
        streak: `${BR}reasonTimeUp_streak`,
        diamonds: `${BR}reasonTimeUp_diamonds`,
        kills: `${BR}reasonTimeUp_kills`
      },
      TJ = {
        streak: null,
        diamonds: `${BR}reasonTarget_diamonds`,
        kills: `${BR}reasonTarget_kills`
      };

    function sJ(RR) {
      let {
        store: JR
      } = RR;
      const GR = mR(JR, "roundEnd"),
        yR = mR(JR, "hud").wire,
        tR = (0, rR.i)("localPlayerAlive"),
        uR = (0, UR.j)(GR.lobbyAt),
        ZR = (0, rR.e)("connectedGame", (RR => RR.replay));
      return "roundEnd" !== GR.wire[0] || !yR || !tR || uR <= 0 || ZR ? null : (0, MR.jsx)(hJ, {
        wire: GR.wire,
        hud: yR,
        lobbyAt: GR.lobbyAt,
        secondsLeft: uR
      }, GR.lobbyAt)
    }
    const hJ = (0, yR.memo)((function(RR) {
      let {
        wire: JR,
        hud: GR,
        lobbyAt: tR,
        secondsLeft: uR
      } = RR;
      const {
        t: ZR
      } = (0, WR.A)(), [qR] = (0, yR.useState)((() => Math.max(0, tR - performance.now()))), iR = NR(), [, fR, VR, KR, , rR, eR, aR, LR, nR, , UR, AR, CR, XR, lR, bR, vR] = JR, [, , OR, DR, , oR, cR, PR] = GR, IR = "tdm" === OR, mR = RR => RR === cR ? ZR(`${BR}teamYours`, {
        team: ZR(gR[RR])
      }) : ZR(gR[RR]);
      return (0, MR.jsxs)("div", {
        className: wR()("ShootingResults", "win" === fR ? "Won" : "Lost"),
        style: {
          "--lobbyMs": `${vR}ms`,
          "--lobbyElapsedMs": `${Math.max(0,vR-qR)}ms`
        },
        children: [(0, MR.jsx)("div", {
          className: "ShootingResultsTitle FullyFancyText",
          children: RG(ZR, JR, IR, PR, iR)
        }), (0, MR.jsxs)("div", {
          className: "ShootingResultsScore FullyFancyText",
          children: [IR && (0, MR.jsxs)(MR.Fragment, {
            children: [(0, MR.jsx)("span", {
              className: "ShootingResultsTeam",
              children: mR("Red")
            }), (0, MR.jsx)("b", {
              style: pR("Red", "tdm"),
              children: aR
            }), (0, MR.jsx)("span", {
              className: "ShootingResultsDash",
              children: "\u2013"
            }), (0, MR.jsx)("b", {
              style: pR("Blue", "tdm"),
              children: LR
            }), (0, MR.jsx)("span", {
              className: "ShootingResultsTeam",
              children: mR("Blue")
            })]
          }), !IR && ("win" === fR || "" !== rR) && (0, MR.jsxs)(MR.Fragment, {
            children: [(0, MR.jsx)("span", {
              className: "ShootingResultsTeam",
              children: "win" === fR ? ZR(`${BR}youWonWith`) : ZR(`${BR}playerWonWith`, {
                name: iR(rR)
              })
            }), (0, MR.jsx)("b", {
              style: pR(KR, "ffa"),
              children: nR
            })]
          })]
        }), (0, MR.jsx)("div", {
          className: "ShootingResultsWhy SmallTextBold",
          children: JG(ZR, eR, IR, xR(DR), oR)
        }), UR.length > 0 && (0, MR.jsx)("div", {
          className: "ShootingResultsPodium",
          children: YJ.filter((RR => RR < UR.length)).map((RR => (0, MR.jsx)(GG, {
            entry: UR[RR],
            place: RR,
            mvp: UR[RR][0] === AR,
            tdm: IR
          }, RR)))
        }), !PR && (0, MR.jsxs)("div", {
          className: "ShootingResultsYou",
          children: [(0, MR.jsx)(HR, {
            value: String(CR),
            label: ZR(`${BR}kills`)
          }), (0, MR.jsx)(HR, {
            value: String(XR),
            label: ZR(`${BR}deaths`)
          }), (0, MR.jsx)(HR, {
            icon: "crosshairs",
            value: String(lR),
            label: ZR(`${BR}bestStreak`)
          }), (0, MR.jsx)(HR, {
            icon: "coins",
            value: `+${bR}`,
            label: ZR(`${BR}goldEarned`),
            gold: !0
          })]
        }), (0, MR.jsxs)("div", {
          className: "ShootingResultsNext SmallTextBold",
          children: [(0, MR.jsx)("span", {
            children: ZR(`${BR}backToLobby`, {
              seconds: String(uR)
            })
          }), (0, MR.jsx)("span", {
            className: "ShootingResultsBar",
            children: (0, MR.jsx)("i", {})
          })]
        })]
      })
    }));

    function RG(RR, JR, GR, yR, tR) {
      const [, uR, ZR, qR, , iR] = JR;
      return yR && GR ? RR(`${BR}teamWins`, {
        team: vR(qR) ? RR(gR[qR]) : qR
      }) : yR ? "" === iR ? RR(`${BR}matchOver`) : RR(`${BR}playerWins`, {
        name: tR(iR)
      }) : "win" === uR ? RR(`${BR}victory`) : GR || 0 === ZR ? RR(`${BR}defeat`) : ZR <= kJ.length ? RR(kJ[ZR - 1]) : RR(`${BR}placeNth`, {
        place: String(ZR)
      })
    }

    function JG(RR, JR, GR, yR, tR) {
      switch (JR) {
        case "timeUp":
          return RR(FJ[yR]);
        case "target": {
          const JR = TJ[yR];
          return JR && tR > 0 ? RR(JR, {
            target: String(tR)
          }) : RR(`${BR}reasonTarget`)
        }
        case "lastTeam":
          return RR(GR ? `${BR}reasonLastTeam` : `${BR}reasonLastPlayer`)
      }
    }

    function GG(RR) {
      let {
        entry: JR,
        place: GR,
        mvp: yR,
        tdm: tR
      } = RR;
      const {
        t: uR
      } = (0, WR.A)(), ZR = NR(), [qR, iR, fR, VR, KR] = JR, aR = (0, rR.i)("players").localId;
      return (0, MR.jsxs)("div", {
        className: wR()("ShootingPodiumCard", `Place${GR+1}`, {
          Mvp: yR,
          Mine: qR === aR,
          Team: tR
        }),
        style: tR ? pR(fR, "tdm") : void 0,
        children: [yR && (0, MR.jsx)("span", {
          className: "ShootingPodiumCrown",
          children: (0, MR.jsx)(eR.d, {
            name: "crown"
          })
        }), (0, MR.jsx)("div", {
          className: "ShootingPodiumHead",
          children: (0, MR.jsx)(DR, {
            playerId: qR
          })
        }), (0, MR.jsxs)("div", {
          className: "ShootingPodiumPlace SmallTextBold",
          children: [uR(QJ[GR]), yR && ` \xb7 ${uR(`${BR}mvp`)}`]
        }), (0, MR.jsx)("div", {
          className: "ShootingPodiumName SmallTextBold",
          children: ZR(iR)
        }), (0, MR.jsx)("div", {
          className: "ShootingPodiumStats SmallTextBold",
          children: uR(`${BR}podiumStats`, {
            kills: String(VR),
            score: String(KR)
          })
        })]
      })
    }

    function yG(RR) {
      var JR, GR;
      let {
        store: tR,
        variation: uR
      } = RR;
      const ZR = "lobby" !== (null !== (JR = null === (GR = mR(tR, "hud").wire) || void 0 === GR ? void 0 : GR[1]) && void 0 !== JR ? JR : "lobby");
      return (0, yR.useEffect)((() => {
        if (!ZR) return;
        const RR = (0, iR.x)(iR.t);
        return () => {
          RR(), (0, iR.h)()
        }
      }), [ZR]), (0, yR.useEffect)((() => (0, iR.D)((RR => (0, MR.jsx)(jJ, {
        store: tR,
        variation: uR,
        state: RR
      })))), [tR, uR]), (0, MR.jsx)(sJ, {
        store: tR
      })
    }

    function tG(RR) {
      return (0, MR.jsxs)(MR.Fragment, {
        children: [(0, MR.jsx)(IJ, {
          ...RR
        }), (0, MR.jsx)(yG, {
          ...RR
        }), (0, MR.jsx)(iJ, {
          ...RR
        })]
      })
    }
    const uG = "CubeWarfareUi",
      ZG = "CubeWarfareFfa",
      qG = function(RR, JR, GR, uR) {
        let {
          localPlayerId: ZR
        } = uR;
        const KR = new IR,
          wR = "tdm" === GR ? "tdm" : "ffa";
        let rR = null,
          eR = null,
          aR = null;
        return {
          onCreate: RR => {
            document.body.classList.add(uG), document.body.classList.toggle(ZG, "ffa" === wR), eR = new VR.d(RR, ZR), aR = new yJ((RR => {
              qR.n.JK(GJ, RR, !0)
            }), (JR => {
              RR.sendCommand(JR)
            })), rR = (0, iR.G)((0, yR.createElement)(yR.Fragment, null, (0, yR.createElement)(fR.e, {
              controller: eR
            }), (0, yR.createElement)(tG, {
              store: KR,
              votes: aR,
              variation: wR
            })), {
              content: (0, yR.createElement)(jR, {
                store: KR,
                variation: wR
              })
            })
          },
          onClose: () => {
            var RR, JR, GR;
            document.body.classList.remove(uG, ZG), null === (RR = rR) || void 0 === RR || RR(), rR = null, null === (JR = eR) || void 0 === JR || JR.dispose(), eR = null, null === (GR = aR) || void 0 === GR || GR.dispose(), aR = null
          },
          onAfterRender: (RR, JR) => {
            var GR;
            null === (GR = eR) || void 0 === GR || GR.frame(JR.cameraHeading)
          },
          onReceivedMessageFromServer: (RR, JR) => {
            var GR;
            (KR.BK(RR, JR), RR === tR) && (null === (GR = aR) || void 0 === GR || GR.onLobby(KR.get("lobby").wire))
          }
        }
      }
  },
  40720: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(66),
      tR = GR(1378);
    const uR = (0, yR.memo)((function(RR) {
      let {
        controller: JR
      } = RR;
      return (0, tR.jsxs)("div", {
        className: "DamageFeedback",
        ref: JR.bindElement,
        children: [(0, tR.jsx)("div", {
          className: "DamageFeedbackLow",
          children: (0, tR.jsx)("div", {
            className: "DamageFeedbackShade"
          })
        }), (0, tR.jsx)("div", {
          className: "DamageFeedbackArcs"
        })]
      })
    }))
  },
  40717: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR
    });
    var yR = GR(32);
    const tR = "DamageFeedbackArcsShown",
      uR = .45,
      ZR = .2;
    class qR {
      constructor(RR, JR) {
        let {
          arcs: GR = !0,
          edgeGlow: tR = !0,
          lowHealthShade: uR = !0,
          enabled: ZR = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.api = RR, this.localPlayerId = JR, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.Et = 1, this.dead = !1, this.enabled = void 0, this.parts = void 0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = RR => {
          var JR, GR;
          this.clearHits(), this.root = RR, this.lowLayer = null !== (JR = null === RR || void 0 === RR ? void 0 : RR.querySelector(".DamageFeedbackLow")) && void 0 !== JR ? JR : null, this.arcLayer = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.querySelector(".DamageFeedbackArcs")) && void 0 !== GR ? GR : null, this.showRoot(), this.drawLow()
        }, this.parts = {
          arcs: GR,
          edgeGlow: tR,
          lowHealthShade: uR
        }, this.enabled = ZR, this.token = yR.n.subscribe("damagedByOtherPlayer", (RR => {
          let {
            direction: JR,
            jt: GR
          } = RR;
          this.onHurt(JR, GR)
        })), this.syncHealth(), this.showCustomDamage()
      }
      JA(RR) {
        RR !== this.enabled && (this.enabled = RR, this.showCustomDamage(), RR || this.clearHits(), this.showRoot())
      }
      frame(RR) {
        this.syncHealth(), this.cameraHeading = RR;
        for (const JR of this.arcs) this.drawArcAngle(JR)
      }
      dispose() {
        yR.n.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(tR)
      }
      showCustomDamage() {
        document.body.classList.toggle(tR, this.enabled && this.parts.arcs)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const RR = this.api.getClientOption(this.localPlayerId, "_health"),
          JR = this.api.getClientOption(this.localPlayerId, "_shield"),
          GR = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(RR, this.readHealth) && Object.is(JR, this.readShield) && Object.is(GR, this.readMaxHealth)) return;
        if (this.readHealth = RR, this.readShield = JR, this.readMaxHealth = GR, null === RR || void 0 === RR || !GR) return this.lastHealthPool = null, this.maxHealth = null, this.Et = 1, this.dead = !1, void this.drawLow();
        const yR = RR + (null !== JR && void 0 !== JR ? JR : 0);
        if (null !== this.lastHealthPool && yR < this.lastHealthPool) {
          const RR = performance.now(),
            JR = (this.lastHealthPool - yR) / GR;
          this.lastDrop = RR - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + JR,
            at: this.lastDrop.at
          } : {
            frac: JR,
            at: RR
          }
        }
        this.dead = RR <= 0, this.dead && this.clearHits(), this.lastHealthPool = yR, this.maxHealth = GR, this.Et = RR > 0 ? RR / GR : 1, this.drawLow()
      }
      onHurt(RR, JR) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const GR = Math.min(1, this.takeDamageFrac(JR) / .3);
        null !== RR && this.parts.arcs && this.showArc(RR, GR), this.parts.edgeGlow && this.flashEdge(null === RR ? null : RR - this.cameraHeading, .4 + .6 * GR)
      }
      takeDamageFrac(RR) {
        if (void 0 !== RR && this.maxHealth) return RR / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: JR
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, JR
      }
      drawLow() {
        if (!this.lowLayer || !this.parts.lowHealthShade) return;
        const RR = fR((uR - this.Et) / .25),
          JR = fR((ZR - this.Et) / .15000000000000002),
          GR = this.Et < uR;
        this.lowLayer.classList.toggle("Active", GR), this.lowLayer.classList.toggle("Critical", this.Et < ZR), this.lowLayer.style.opacity = String(GR ? .55 + .3 * RR + .15 * JR : 0)
      }
      showArc(RR, JR) {
        var GR, yR;
        if (!this.arcLayer) return;
        let tR = this.arcs.find((JR => iR(JR.direction, RR) < .6));
        if (!tR) {
          const JR = document.createElement("div");
          JR.className = "DamageFeedbackArc", JR.appendChild(document.createElement("div")).className = "DamageFeedbackArcBand", this.arcLayer.appendChild(JR), tR = {
            element: JR,
            direction: RR,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(tR)
        }
        tR.direction = RR, this.drawArcAngle(tR);
        const uR = tR.fade ? Number(getComputedStyle(tR.element).opacity) : 0;
        null === (GR = tR.fade) || void 0 === GR || GR.cancel(), null === (yR = tR.pop) || void 0 === yR || yR.cancel(), tR.element.style.opacity = "1";
        const ZR = tR.element.animate([{
          opacity: uR
        }, {
          opacity: 1
        }], 144);
        tR.fade = ZR, tR.pop = tR.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * JR
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const qR = tR;
        ZR.onfinish = () => {
          if (qR.fade !== ZR) return;
          const RR = qR.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          RR.startTime = ZR.startTime, qR.fade = RR, RR.onfinish = () => {
            qR.fade === RR && (qR.element.remove(), VR(this.arcs, qR))
          }
        }
      }
      drawArcAngle(RR) {
        const JR = RR.direction - this.cameraHeading;
        (null === RR.drawnAngle || Math.abs(JR - RR.drawnAngle) > .005) && (RR.drawnAngle = JR, RR.element.style.rotate = `${JR}rad`)
      }
      flashEdge(RR, JR) {
        var GR, yR, tR;
        if (!this.root) return;
        let uR = this.flashes.find((JR => null === JR.angle || null === RR ? JR.angle === RR : iR(JR.angle, RR) < .5));
        if (!uR) {
          const JR = document.createElement("div");
          JR.className = "DamageFeedbackFlash";
          const GR = JR.appendChild(document.createElement("div"));
          GR.className = "DamageFeedbackFlashGlow", this.root.insertBefore(JR, this.arcLayer), uR = {
            element: JR,
            glow: GR,
            angle: RR,
            level: 0,
            animation: null
          }, this.flashes.push(uR)
        }
        const ZR = null === (GR = uR.animation) || void 0 === GR || null === (yR = GR.effect) || void 0 === yR ? void 0 : yR.getComputedTiming().progress,
          qR = null === ZR || void 0 === ZR ? 0 : uR.level * (1 - ZR);
        uR.level = Math.min(1, Math.max(JR, qR + .6 * JR)), uR.angle = RR;
        const {
          x: fR,
          y: KR,
          rx: wR,
          ry: rR
        } = function(RR, JR) {
          const GR = window.innerWidth,
            yR = window.innerHeight;
          if (null === RR) return {
            x: GR / 2,
            y: yR / 2,
            rx: 0,
            ry: 0
          };
          const tR = Math.sin(RR),
            uR = -Math.cos(RR),
            ZR = GR / 2 / Math.max(1e-6, Math.abs(tR)),
            qR = yR / 2 / Math.max(1e-6, Math.abs(uR)),
            iR = Math.min(ZR, qR),
            fR = Math.round(GR / 2 + tR * iR),
            VR = Math.round(yR / 2 + uR * iR),
            KR = yR / 100 * (.85 + .25 * JR),
            wR = ZR <= qR,
            rR = Math.round((wR ? 30 : 74) * KR),
            eR = Math.round((wR ? 58 : 26) * KR);
          return {
            x: fR,
            y: VR,
            rx: rR,
            ry: eR
          }
        }(RR, uR.level), {
          style: eR
        } = uR.glow;
        uR.glow.classList.toggle("Everywhere", null === RR), eR.setProperty("--glowX", `${fR}px`), eR.setProperty("--glowY", `${KR}px`), eR.setProperty("--glowRx", `${wR}px`), eR.setProperty("--glowRy", `${rR}px`), uR.element.style.transformOrigin = `${fR}px ${KR}px`, null === (tR = uR.animation) || void 0 === tR || tR.cancel();
        const aR = uR.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: uR.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * uR.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * uR.level
        });
        uR.animation = aR;
        const LR = uR;
        aR.onfinish = () => {
          LR.animation === aR && (LR.element.remove(), VR(this.flashes, LR))
        }
      }
      clearHits() {
        for (const yR of this.arcs) {
          var RR, JR;
          null === (RR = yR.fade) || void 0 === RR || RR.cancel(), yR.fade = null, null === (JR = yR.pop) || void 0 === JR || JR.cancel(), yR.element.remove()
        }
        this.arcs.length = 0;
        for (const yR of this.flashes) {
          var GR;
          null === (GR = yR.animation) || void 0 === GR || GR.cancel(), yR.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function iR(RR, JR) {
      return Math.abs(Math.atan2(Math.sin(RR - JR), Math.cos(RR - JR)))
    }

    function fR(RR) {
      return Math.max(0, Math.min(1, RR))
    }

    function VR(RR, JR) {
      const GR = RR.indexOf(JR); - 1 !== GR && RR.splice(GR, 1)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);