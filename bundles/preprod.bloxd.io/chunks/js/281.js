export const id = 281;
export const ids = [281];
export const modules = {
  40712: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    const mW = 1e3;

    function EW(WW, iW) {
      const OW = performance.now() + WW;
      return 0 !== iW && Math.abs(OW - iW) < mW ? iW : OW
    }
  },
  40890: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => wO
    });
    var mW = OW(62);
    const EW = "shootingLobby",
      NW = {
        Red: "#fc6464",
        Blue: "#4f94f1"
      };

    function PW(WW, iW) {
      const OW = WW.reduce(((WW, iW) => WW + iW[5]), 0);
      return 0 === OW ? 0 === WW.length ? 0 : Math.round(100 / WW.length) : Math.round(WW[iW][5] / OW * 100)
    }
    var LW = OW(27),
      cW = OW(3361),
      wW = OW(40710),
      tW = OW(40706),
      ZW = OW(1089),
      xW = OW.n(ZW),
      lW = OW(2075),
      AW = OW(1391),
      bW = OW(1532),
      jW = OW(5238),
      UW = OW(5673),
      kW = OW(37888),
      sW = OW(1172),
      MW = OW(344),
      KW = OW(3247),
      SW = OW(1255),
      YW = OW(1283);
    const yW = "shootingOverlays:";

    function TW(WW, iW) {
      var OW;
      return "tdm" === iW && nW(WW) ? NW[WW] : null !== (OW = (0, MW.lb)(WW)) && void 0 !== OW ? OW : "#ffffff"
    }

    function JW(WW, iW) {
      return {
        "--team": TW(WW, iW)
      }
    }
    const hW = {
        Red: `${yW}teamRed`,
        Blue: `${yW}teamBlue`
      },
      HW = {
        diamonds: `${yW}mutation_diamonds`,
        explosives: `${yW}mutation_explosives`,
        gungame: `${yW}mutation_gungame`
      };

    function nW(WW) {
      return Object.hasOwn(NW, WW)
    }
    const uW = {
      normal: "streak",
      explosives: "streak",
      diamonds: "diamonds",
      gungame: "kills"
    };

    function oW(WW) {
      return uW[WW]
    }

    function dW() {
      const WW = (0, lW.g)("hiddenPlayerNames");
      return (0, mW.useCallback)((iW => "" === iW ? "" : (0, SW.g)(iW, WW)), [WW])
    }

    function eW(WW) {
      var iW;
      let {
        playerId: OW
      } = WW;
      const mW = null === (iW = (0, lW.g)("players").byId[OW]) || void 0 === iW ? void 0 : iW.cosmetics;
      return (0, YW.jsx)(KW.e, {
        cosmetics: null !== mW && void 0 !== mW ? mW : {}
      })
    }

    function vW(WW) {
      let {
        icon: iW,
        value: OW,
        label: mW,
        gold: EW = !1
      } = WW;
      return (0, YW.jsxs)("div", {
        className: "ShootingStat",
        children: [(0, YW.jsxs)("b", {
          className: xW()("FullyFancyText", {
            Gold: EW
          }),
          children: [iW && (0, YW.jsx)(AW.c, {
            name: iW
          }), OW]
        }), (0, YW.jsx)("span", {
          className: "SmallTextBold",
          children: mW
        })]
      })
    }
    var gW = OW(1463),
      DW = OW(40712);

    function VW(WW) {
      return `shooting:${WW}`
    }
    class pW {
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
      get(WW) {
        return this.slices[WW]
      }
      yZ(WW, iW) {
        switch (WW) {
          case "shootingHud":
            return this.receiveHud(iW), !0;
          case EW: {
            const WW = iW;
            return this.set("lobby", {
              wire: WW,
              startsAt: "lobby" === WW[0] ? (0, DW.e)(WW[2], this.slices.lobby.startsAt) : 0
            }), !0
          }
          case "shootingRoundEnd": {
            const WW = iW;
            return this.set("roundEnd", {
              wire: WW,
              lobbyAt: "roundEnd" === WW[0] ? performance.now() + WW[17] : 0
            }), !0
          }
          case "shootingLeaderboard":
            return this.set("leaderboard", iW), !0;
          case "shootingKillfeed": {
            const WW = {
              seq: ++this.seq,
              at: performance.now(),
              wire: iW
            };
            return this.set("killfeed", [...this.slices.killfeed.slice(-11), WW]), !0
          }
          case "shootingEvent":
            return this.receiveEvent(iW), !0;
          default:
            return !1
        }
      }
      receiveHud(WW) {
        var iW;
        const OW = this.slices.hud,
          mW = (null === (iW = OW.wire) || void 0 === iW ? void 0 : iW[1]) === WW[1];
        OW.wire && !mW && (this.set("kill", null), this.set("tier", null), this.set("death", null)), this.set("hud", {
          wire: WW,
          endsAt: (0, DW.e)(WW[4], mW ? OW.endsAt : 0),
          spawnProtectionEndsAt: 0 === WW[13] ? 0 : (0, DW.e)(WW[13], OW.spawnProtectionEndsAt)
        })
      }
      receiveEvent(WW) {
        const iW = {
          seq: ++this.seq,
          at: performance.now()
        };
        switch (WW[0]) {
          case "kill":
            this.set("kill", {
              ...iW,
              wire: WW
            });
            break;
          case "tier":
            this.set("tier", {
              ...iW,
              wire: WW
            });
            break;
          case "death":
            this.set("death", {
              ...iW,
              wire: WW
            })
        }
      }
      set(WW, iW) {
        this.slices[WW] = iW, LW.l.iZ(VW(WW), iW, !0)
      }
    }

    function fW(WW, iW) {
      return (0, gW.e)(VW(iW), (() => WW.get(iW)))
    }
    const CW = ["Red", "Blue"],
      XW = {
        streak: `${yW}scoreIs_streak`,
        diamonds: `${yW}scoreIs_diamonds`,
        kills: `${yW}scoreIs_kills`
      };

    function BW(WW) {
      var iW;
      let {
        store: OW,
        variation: mW
      } = WW;
      const {
        t: EW
      } = (0, sW.B)(), NW = fW(OW, "leaderboard"), PW = fW(OW, "hud"), [, LW = "lobby", , wW = "normal", , , tW = "", , , ZW = null] = null !== (iW = PW.wire) && void 0 !== iW ? iW : [], UW = (0, kW.f)("match" === LW ? PW.endsAt : 0), MW = (0, lW.g)("players").localId, KW = "tdm" === mW, SW = "normal" === wW ? null : HW[wW], TW = "Blue" === tW ? [...CW].reverse() : CW, JW = WW => "tdm" !== (null === ZW || void 0 === ZW ? void 0 : ZW[0]) ? 0 : "Red" === WW ? ZW[1] : ZW[2];
      return (0, YW.jsx)(jW.b, {
        close: cW.q,
        togglePointerLock: !1,
        className: "ShootingBoardOverlay",
        children: (0, YW.jsxs)("section", {
          className: xW()("ShootingBoard", {
            ShootingBoardFfa: !KW
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "shootingBoardTitle",
          children: [(0, YW.jsxs)("header", {
            className: "ShootingBoardHeader",
            children: [(0, YW.jsxs)("h2", {
              id: "shootingBoardTitle",
              className: "SmallTextBold",
              children: [(0, YW.jsx)(AW.c, {
                name: "list"
              }), EW(KW ? `${yW}teamDeathmatch` : `${yW}freeForAll`)]
            }), (0, YW.jsxs)("div", {
              className: "ShootingBoardMeta SmallTextBold",
              children: [SW && (0, YW.jsx)("span", {
                children: EW(SW)
              }), "match" === LW && (0, YW.jsxs)("span", {
                children: [(0, YW.jsx)(AW.c, {
                  name: "stopwatch"
                }), " ", (0, kW.d)(UW)]
              })]
            }), (0, YW.jsx)(bW.l, {
              className: "ShootingBoardClose",
              onClick: cW.q
            })]
          }), (0, YW.jsxs)("div", {
            className: "ShootingBoardColumns",
            children: [KW && TW.map((WW => (0, YW.jsx)(qW, {
              title: EW(hW[WW]),
              team: {
                id: WW,
                score: JW(WW),
                mine: WW === tW
              },
              rows: NW.filter((iW => iW[2] === WW)),
              localId: MW
            }, WW))), !KW && (0, YW.jsx)(qW, {
              title: EW(`${yW}players`),
              team: null,
              rows: NW,
              localId: MW
            })]
          }), (0, YW.jsxs)("footer", {
            className: "ShootingBoardFooter SmallTextBold",
            children: [(0, YW.jsx)("span", {
              children: EW(XW[oW(wW)])
            }), (0, YW.jsx)("span", {
              children: EW(`${yW}kdLegend`)
            })]
          })]
        })
      })
    }

    function qW(WW) {
      let {
        title: iW,
        team: OW,
        rows: mW,
        localId: EW
      } = WW;
      const {
        t: NW
      } = (0, sW.B)(), PW = dW(), LW = [{
        key: "name",
        header: (0, YW.jsxs)("span", {
          className: "ShootingBoardTeam",
          children: [(0, YW.jsxs)("span", {
            children: [iW, (null === OW || void 0 === OW ? void 0 : OW.mine) && (0, YW.jsxs)("span", {
              className: "ShootingBoardYou",
              children: [" \xb7 ", NW(`${yW}you`)]
            })]
          }), OW && (0, YW.jsx)("b", {
            children: OW.score
          })]
        })
      }, {
        key: "kills",
        header: (0, YW.jsx)("abbr", {
          title: NW(`${yW}kills`),
          children: NW(`${yW}killsShort`)
        })
      }, {
        key: "deaths",
        header: (0, YW.jsx)("abbr", {
          title: NW(`${yW}deaths`),
          children: NW(`${yW}deathsShort`)
        })
      }, {
        key: "score",
        header: NW(`${yW}score`)
      }];
      return (0, YW.jsx)("div", {
        className: "ShootingBoardColumn",
        style: OW ? JW(OW.id, "tdm") : void 0,
        children: (0, YW.jsx)(UW.b, {
          className: xW()("ShootingBoardTable", {
            Team: OW
          }),
          columns: LW,
          rows: mW,
          getRowKey: WW => WW[0],
          renderRow: (WW, iW) => {
            const [mW, NW, LW, cW, wW, tW, ZW] = WW, lW = iW + 1;
            return (0, YW.jsxs)("tr", {
              className: xW()({
                Mine: mW === EW,
                Dead: !ZW
              }),
              style: OW ? void 0 : JW(LW, "ffa"),
              children: [(0, YW.jsx)("td", {
                children: (0, YW.jsxs)("span", {
                  className: "ShootingBoardName",
                  children: [!OW && (0, YW.jsx)("span", {
                    className: xW()("ShootingBoardPlace", `Place${lW}`),
                    children: lW
                  }), (0, YW.jsx)(eW, {
                    playerId: mW
                  }), (0, YW.jsx)("span", {
                    className: "ShootingBoardNameText",
                    children: PW(NW)
                  })]
                })
              }), (0, YW.jsx)("td", {
                children: cW
              }), (0, YW.jsx)("td", {
                children: wW
              }), (0, YW.jsx)("td", {
                className: "ShootingBoardScore",
                children: tW
              })]
            })
          }
        })
      })
    }
    var RW = OW(37868),
      GW = OW(37919),
      IW = OW(25),
      aW = OW(5668),
      rW = OW(2080),
      zW = OW(5251),
      FW = OW(3599),
      QW = OW(1526),
      Wi = OW(1551),
      ii = OW(39775);
    const Oi = "shooting:vote";
    class mi {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ii.c;
        this.iZ = WW, this.sendCommand = iW, this.pacer = OW, this.view = {
          hidden: !1,
          pending: null
        }, this.unsent = !1, this.cardsKey = "", this.pendingTimer = null, this.unsubscribePacer = void 0, this.vote = WW => {
          this.unsent = !0, this.set({
            ...this.view,
            pending: WW
          }), this.flush()
        }, this.setHidden = WW => {
          this.set({
            ...this.view,
            hidden: WW
          })
        }, this.flush = () => {
          const WW = this.view.pending;
          this.unsent && null !== WW && this.pacer.tryStart() && (this.unsent = !1, this.sendCommand(`mapvote ${WW}`), this.clearPendingTimer(), this.pendingTimer = setTimeout((() => {
            this.pendingTimer = null, this.unsent || this.view.pending !== WW || this.set({
              ...this.view,
              pending: null
            })
          }), 5e3))
        }, this.unsubscribePacer = OW.subscribe(this.flush)
      }
      getView() {
        return this.view
      }
      onLobby(WW) {
        const iW = "lobby" === WW[0] ? WW[9] : [],
          OW = iW.map((WW => WW[0])).join("\n");
        if (OW !== this.cardsKey) return this.cardsKey = OW, this.unsent = !1, void this.set({
          hidden: !1,
          pending: null
        });
        const mW = this.view.pending;
        if (null === mW) return;
        const EW = iW.find((WW => WW[0] === mW));
        (!EW || EW[6] && !this.unsent) && (this.unsent = !1, this.set({
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
      set(WW) {
        this.view = WW, this.iZ(WW)
      }
    }
    const Ei = "ShootingVoteStripOpen";

    function Ni(WW) {
      var iW, OW, EW, NW, LW;
      let {
        maps: cW,
        votes: wW
      } = WW;
      const {
        t: tW
      } = (0, sW.B)(), ZW = (0, QW.g)(Oi, wW.getView()), {
        isTouchScreen: lW,
        openInGameMenuName: bW,
        openEverythingMenuName: jW
      } = (0, IW.p)(["isTouchScreen", "openInGameMenuName", "openEverythingMenuName"]), UW = null !== bW || null !== jW, kW = (0, FW.e)();
      (0, zW.b)(!0, !lW && !ZW.hidden && !UW && !kW, "shootingVoteStrip", !0), (0, mW.useEffect)((() => {
        if (!ZW.hidden && !lW) return document.body.classList.add(Ei), () => {
          document.body.classList.remove(Ei)
        }
      }), [ZW.hidden, lW]);
      const MW = null !== (iW = null !== (OW = ZW.pending) && void 0 !== OW ? OW : null === (EW = cW.find((WW => WW[6]))) || void 0 === EW ? void 0 : EW[0]) && void 0 !== iW ? iW : null,
        KW = null !== (NW = null === (LW = cW.find((WW => WW[0] === MW))) || void 0 === LW ? void 0 : LW[1]) && void 0 !== NW ? NW : null;
      return ZW.hidden ? (0, YW.jsxs)("button", {
        type: "button",
        className: "ShootingVoteChip",
        "data-over-keys": "",
        ...(0, Wi.d)((() => {
          wW.setHidden(!1)
        }), "pointerup"),
        children: [(0, YW.jsx)("span", {
          className: "ShootingVoteChipLabel",
          children: tW("shootingLobby:mapVote")
        }), (0, YW.jsx)("span", {
          className: "ShootingVoteChipVote",
          children: null !== KW && void 0 !== KW ? KW : tW("shootingLobby:notVoted")
        }), !lW && (0, YW.jsxs)("span", {
          className: "ShootingVoteChipShop",
          children: [tW("shootingLobby:voteInShop"), (0, YW.jsx)(rW.e, {
            noaAction: "OpenShop",
            padHidesKey: !0
          })]
        }), (0, YW.jsx)(AW.c, {
          name: "angle-up"
        })]
      }) : (0, YW.jsxs)("div", {
        className: xW()("ShootingVoteStrip", {
          Touch: lW
        }),
        "data-over-keys": "",
        children: [(0, YW.jsxs)("div", {
          className: "ShootingVoteHeader",
          children: [(0, YW.jsx)("span", {
            className: "ShootingVoteTitle",
            children: tW("shootingLobby:voteTitle")
          }), (0, YW.jsx)("span", {
            className: "ShootingVoteHint",
            children: tW("shootingLobby:voteHint")
          }), (0, YW.jsxs)("button", {
            type: "button",
            className: "ShootingVoteHide",
            ...(0, Wi.d)((() => {
              wW.setHidden(!0)
            }), "pointerup"),
            children: [tW("shootingLobby:hide"), (0, YW.jsx)(AW.c, {
              name: "angle-down"
            })]
          })]
        }), (0, YW.jsx)("div", {
          className: "ShootingVoteCards",
          children: cW.map(((WW, iW) => (0, YW.jsx)(Pi, {
            map: WW,
            chance: PW(cW, iW),
            mine: MW === WW[0],
            onVote: wW.vote,
            showHeads: !lW
          }, WW[0])))
        })]
      })
    }

    function Pi(WW) {
      let {
        map: iW,
        chance: OW,
        mine: EW,
        onVote: NW,
        showHeads: PW
      } = WW;
      const {
        t: LW
      } = (0, sW.B)(), [cW, wW, tW, ZW, lW, bW, , jW, UW] = iW, [kW, MW] = (0, mW.useState)(!1);
      return (0, YW.jsxs)("button", {
        type: "button",
        className: xW()("ShootingMapCard", {
          Mine: EW
        }),
        "aria-pressed": EW,
        ...(0, Wi.d)((() => {
          EW || NW(cW)
        }), "pointerup"),
        children: [(0, YW.jsxs)("div", {
          className: "ShootingMapCardImage",
          children: [null !== UW && (0, YW.jsx)(aW.b, {
            game: {
              schematicId: UW
            }
          }), null === UW && !kW && (0, YW.jsx)("img", {
            alt: "",
            src: `/textures/games/shooting/${tW}`,
            onError: () => {
              MW(!0)
            }
          }), lW && (0, YW.jsx)("span", {
            className: "ShootingMapCardNew",
            children: LW("shootingLobby:new")
          }), "normal" !== ZW && (0, YW.jsx)("span", {
            className: "ShootingMapCardMutation",
            children: LW(HW[ZW])
          }), EW && (0, YW.jsx)("span", {
            className: "ShootingMapCardCheck",
            children: (0, YW.jsx)(AW.c, {
              name: "check"
            })
          })]
        }), (0, YW.jsxs)("div", {
          className: "ShootingMapCardInfo",
          children: [(0, YW.jsx)("span", {
            className: "ShootingMapCardName",
            children: wW
          }), (0, YW.jsxs)("span", {
            className: "ShootingMapCardVotes",
            children: [bW, (0, YW.jsx)(AW.c, {
              name: "user"
            })]
          })]
        }), (0, YW.jsx)("div", {
          className: "ShootingMapCardBar",
          children: (0, YW.jsx)("i", {
            style: {
              width: `${OW}%`
            }
          })
        }), (0, YW.jsxs)("div", {
          className: "ShootingMapCardFooter",
          children: [PW && (0, YW.jsx)(Li, {
            voters: jW
          }), (0, YW.jsx)("span", {
            className: "ShootingMapCardChance",
            children: LW("shootingLobby:chance", {
              percent: OW
            })
          })]
        })]
      })
    }

    function Li(WW) {
      let {
        voters: iW
      } = WW;
      const OW = (0, lW.g)("players");
      return (0, YW.jsx)("span", {
        className: "ShootingMapCardHeads",
        children: iW.slice(0, 8).map((WW => {
          var iW;
          return (null === (iW = OW.byId[WW]) || void 0 === iW ? void 0 : iW.cosmetics) && (0, YW.jsx)(eW, {
            playerId: WW
          }, WW)
        }))
      })
    }

    function ci(WW) {
      let {
        store: iW,
        votes: OW,
        variation: mW
      } = WW;
      const EW = fW(iW, "lobby"),
        NW = (0, lW.g)("localPlayerAlive"),
        PW = (0, lW.f)("connectedGame", (WW => WW.replay));
      if ("lobby" !== EW.wire[0] || PW) return null;
      const LW = EW.wire;
      return (0, YW.jsxs)(YW.Fragment, {
        children: [(0, YW.jsx)(wi, {
          wire: LW,
          startsAt: EW.startsAt,
          variation: mW
        }), NW && LW[9].length > 0 && (0, YW.jsx)(RW.h, {
          children: (0, YW.jsx)(Ni, {
            maps: LW[9],
            votes: OW
          })
        })]
      })
    }
    const wi = (0, mW.memo)((function(WW) {
      let {
        wire: iW,
        startsAt: OW,
        variation: EW
      } = WW;
      const {
        t: NW
      } = (0, sW.B)(), [PW, LW] = (0, mW.useState)(null), [cW, wW] = (0, mW.useState)(null), tW = (0, GW.j)(PW, cW), [, ZW, , xW, lW, bW, jW, UW, kW] = iW, {
        isTouchScreen: MW
      } = (0, IW.p)(["isTouchScreen"]);
      return (0, YW.jsx)("div", {
        ref: wW,
        className: "ShootingLobbyStatusContainer",
        style: null === tW ? void 0 : {
          top: tW
        },
        children: (0, YW.jsxs)("div", {
          ref: LW,
          className: "ShootingLobbyStatus",
          children: [(0, YW.jsx)(ti, {
            waiting: "waiting" === ZW,
            startsAt: OW
          }), "tdm" === EW && (0, YW.jsxs)("div", {
            className: "ShootingLobbyTeams",
            children: [(0, YW.jsx)(Zi, {
              team: "Blue",
              count: jW,
              cap: UW,
              mine: "Blue" === kW
            }), (0, YW.jsx)("span", {
              className: "ShootingLobbyTeamHint",
              children: NW(MW ? "shootingLobby:teamHintTouch" : "" === kW ? "shootingLobby:teamHintPick" : "shootingLobby:teamHintSwitch")
            }), (0, YW.jsx)(Zi, {
              team: "Red",
              count: bW,
              cap: UW,
              mine: "Red" === kW
            })]
          }), "ffa" === EW && (0, YW.jsx)("div", {
            className: "ShootingLobbyTeams",
            children: (0, YW.jsxs)("span", {
              className: "ShootingLobbyPlayers",
              children: [(0, YW.jsx)(AW.c, {
                name: "user-group"
              }), NW("shootingLobby:players", {
                count: xW,
                max: lW
              })]
            })
          })]
        })
      })
    }));

    function ti(WW) {
      let {
        waiting: iW,
        startsAt: OW
      } = WW;
      const {
        t: mW
      } = (0, sW.B)(), EW = (0, kW.f)(iW ? 0 : OW);
      return (0, YW.jsxs)("div", {
        className: "ShootingLobbyCountdown",
        children: [iW && (0, YW.jsx)("span", {
          className: "ShootingLobbyCountdownLabel",
          children: mW("shootingLobby:waiting")
        }), !iW && (0, YW.jsxs)(YW.Fragment, {
          children: [(0, YW.jsx)("span", {
            className: "ShootingLobbyCountdownLabel",
            children: mW("shootingLobby:startingIn")
          }), (0, YW.jsx)("span", {
            className: xW()("ShootingLobbyCountdownTime", {
              Soon: EW < 10
            }),
            children: (0, kW.d)(EW)
          })]
        })]
      })
    }

    function Zi(WW) {
      let {
        team: iW,
        count: OW,
        cap: mW,
        mine: EW
      } = WW;
      const {
        t: NW
      } = (0, sW.B)();
      return (0, YW.jsxs)("span", {
        className: xW()("ShootingLobbyTeam", {
          Mine: EW,
          Full: OW >= mW
        }),
        style: JW(iW, "tdm"),
        children: [NW(hW[iW]), (0, YW.jsx)("span", {
          className: "ShootingLobbyTeamCount",
          children: NW("shootingLobby:teamCount", {
            count: OW,
            cap: mW
          })
        })]
      })
    }
    var xi = OW(37783),
      li = OW(1856),
      Ai = OW(2032);
    const bi = "--cubeWarfareKillfeedOffset",
      ji = (0, mW.memo)((function(WW) {
        let {
          wire: iW,
          endsAt: OW,
          leaderboard: EW
        } = WW;
        const {
          t: NW
        } = (0, sW.B)(), {
          isTouchScreen: PW
        } = (0, IW.p)(["isTouchScreen"]), [LW, cW] = (0, mW.useState)(null), [wW, tW] = (0, mW.useState)(null), ZW = (0, GW.j)(wW, LW, PW);
        ! function(WW, iW) {
          (0, mW.useLayoutEffect)((() => {
            if (!WW || null === iW) return;
            let OW = null;
            const mW = WW => {
                OW = WW, null === WW ? document.body.style.removeProperty(bi) : document.body.style.setProperty(bi, `${WW}px`)
              },
              EW = () => {
                var iW;
                const EW = document.querySelector(".InGameUi .Killfeed");
                if (!EW) return void mW(null);
                const NW = .3 * (0, li.getRemInPx)(),
                  PW = EW.getBoundingClientRect().top - (null !== (iW = OW) && void 0 !== iW ? iW : NW);
                mW(Math.max(Math.ceil(NW), Math.ceil(WW.getBoundingClientRect().bottom + GW.b - PW)))
              },
              NW = new ResizeObserver(EW);
            NW.observe(WW);
            const PW = document.querySelector(`.InGameUi .${GW.h}`);
            return PW && NW.observe(PW), EW(), window.addEventListener("resize", EW), () => {
              NW.disconnect(), window.removeEventListener("resize", EW), mW(null)
            }
          }), [WW, iW])
        }(LW, ZW);
        const [, , xW, lW, , AW, bW, jW, UW, kW, MW] = iW, KW = AW > 0 ? NW("cubeWarfareHud:firstTo", {
          target: AW
        }) : NW("cubeWarfareHud:timeLeft");
        return (0, YW.jsxs)("div", {
          ref: cW,
          className: "CubeWarfareScoreBarContainer",
          style: null === ZW ? void 0 : {
            top: ZW
          },
          children: [(0, YW.jsxs)("div", {
            ref: tW,
            className: "CubeWarfareScoreBar",
            children: ["tdm" === kW[0] && (0, YW.jsx)(ki, {
              myTeam: bW,
              redScore: kW[1],
              blueScore: kW[2],
              leaderboard: EW,
              target: "diamonds" === lW ? AW : 0,
              clock: (0, YW.jsx)(Ui, {
                endsAt: OW,
                label: KW
              })
            }), "ffa" === kW[0] && (0, YW.jsx)(si, {
              myTeam: bW,
              myScore: UW,
              myRank: kW[1],
              playerCount: kW[2],
              leader: kW[3],
              second: kW[4],
              spectating: jW,
              target: AW,
              clock: (0, YW.jsx)(Ui, {
                endsAt: OW,
                label: KW
              })
            })]
          }), null !== MW && (0, YW.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, YW.jsx)("span", {
              children: NW("cubeWarfareHud:gungameKills", {
                kills: MW[0],
                target: AW
              })
            }), "" !== MW[2] && (0, YW.jsxs)(YW.Fragment, {
              children: [(0, YW.jsx)("span", {
                "aria-hidden": !0,
                children: "\xb7"
              }), (0, YW.jsx)("span", {
                children: NW("cubeWarfareHud:nextWeapon")
              }), (0, YW.jsx)("span", {
                className: "CubeWarfareScoreLineItem",
                children: (0, YW.jsx)(Ai.b, {
                  itemName: MW[2],
                  amount: 0,
                  gunTransform: "none"
                })
              })]
            })]
          }), null === MW && "diamonds" === lW && (0, YW.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, YW.jsx)("span", {
              className: "CubeWarfareScoreLineItem",
              children: (0, YW.jsx)(Ai.b, {
                itemName: "Diamond",
                amount: 0
              })
            }), (0, YW.jsx)("span", {
              children: NW("cubeWarfareHud:collectDiamonds")
            })]
          }), null === MW && "diamonds" !== lW && "tdm" === xW && !jW && (0, YW.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, YW.jsx)("span", {
              children: NW("cubeWarfareHud:yourScore")
            }), (0, YW.jsx)("b", {
              children: UW
            })]
          })]
        })
      }));

    function Ui(WW) {
      let {
        endsAt: iW,
        label: OW
      } = WW;
      const mW = (0, kW.f)(iW);
      return (0, YW.jsxs)("div", {
        className: "CubeWarfareClock",
        children: [(0, YW.jsx)("div", {
          className: xW()("CubeWarfareClockTime", {
            Urgent: mW < 60
          }),
          children: (0, kW.d)(mW)
        }), (0, YW.jsx)("div", {
          className: "CubeWarfareClockLabel",
          children: OW
        })]
      })
    }

    function ki(WW) {
      const {
        t: iW
      } = (0, sW.B)(), OW = iW => WW.leaderboard.filter((WW => WW[2] === iW)), mW = {
        team: "Red",
        name: iW(hW.Red),
        score: WW.redScore,
        members: OW("Red")
      }, EW = {
        team: "Blue",
        name: iW(hW.Blue),
        score: WW.blueScore,
        members: OW("Blue")
      }, [NW, PW] = "Blue" === WW.myTeam ? [EW, mW] : [mW, EW], LW = (OW, mW) => (0, YW.jsxs)("div", {
        className: xW()("CubeWarfareSide", mW, `Team-${OW.team}`, {
          Mine: OW.team === WW.myTeam
        }),
        style: JW(OW.team, "tdm"),
        children: [OW.team === WW.myTeam && (0, YW.jsx)("span", {
          className: "CubeWarfareYouTag",
          children: iW("shootingOverlays:you")
        }), (0, YW.jsx)("div", {
          className: "CubeWarfareHeads",
          children: OW.members.map((WW => {
            let [iW, , , , , , OW] = WW;
            return (0, YW.jsx)("span", {
              className: xW()("CubeWarfareHead", {
                Dead: !OW
              }),
              children: (0, YW.jsx)(eW, {
                playerId: iW
              })
            }, iW)
          }))
        }), (0, YW.jsxs)("div", {
          className: "CubeWarfareSideText",
          children: [(0, YW.jsx)("div", {
            className: "CubeWarfareSideName",
            children: (0, YW.jsx)("span", {
              className: "CubeWarfareSideLabel",
              children: OW.name
            })
          }), (0, YW.jsx)("div", {
            className: "CubeWarfareSideScore SmallTextBold",
            children: OW.score
          })]
        }), (0, YW.jsx)(Mi, {
          score: OW.score,
          target: WW.target
        })]
      });
      return (0, YW.jsxs)(YW.Fragment, {
        children: [LW(NW, "Left"), WW.clock, LW(PW, "Right")]
      })
    }

    function si(WW) {
      var iW;
      const {
        t: OW
      } = (0, sW.B)(), mW = dW(), EW = null !== (iW = WW.second) && void 0 !== iW ? iW : WW.spectating || WW.playerCount > 1 ? WW.leader : null;
      return (0, YW.jsxs)(YW.Fragment, {
        children: [!WW.spectating && (0, YW.jsxs)("div", {
          className: xW()("CubeWarfareSide", "Left", "Mine", "Ffa"),
          style: {
            "--team": (0, MW.lb)(WW.myTeam)
          },
          children: [(0, YW.jsx)("span", {
            className: "CubeWarfareYouTag",
            children: OW("shootingOverlays:you")
          }), (0, YW.jsxs)("div", {
            className: "CubeWarfareSideText",
            children: [(0, YW.jsx)("div", {
              className: "CubeWarfareSideName",
              children: (0, YW.jsx)("span", {
                className: "CubeWarfareSideLabel",
                children: OW("cubeWarfareHud:rank", {
                  rank: WW.myRank
                })
              })
            }), (0, YW.jsx)("div", {
              className: "CubeWarfareSideScore SmallTextBold",
              children: WW.myScore
            })]
          }), (0, YW.jsx)(Mi, {
            score: WW.myScore,
            target: WW.target
          })]
        }), WW.clock, null !== EW && (0, YW.jsxs)("div", {
          className: xW()("CubeWarfareSide", "Right", "Ffa"),
          children: [(0, YW.jsxs)("div", {
            className: "CubeWarfareSideText",
            children: [(0, YW.jsxs)("div", {
              className: "CubeWarfareSideName",
              children: [(0, YW.jsx)("span", {
                className: "CubeWarfareSideLabel",
                children: null !== WW.second ? OW("cubeWarfareHud:second") : OW("cubeWarfareHud:leader")
              }), (0, YW.jsx)("span", {
                className: "CubeWarfareSideWho",
                children: mW(EW[1])
              })]
            }), (0, YW.jsx)("div", {
              className: "CubeWarfareSideScore SmallTextBold",
              children: EW[2]
            })]
          }), (0, YW.jsx)(Mi, {
            score: EW[2],
            target: WW.target
          })]
        })]
      })
    }

    function Mi(WW) {
      let {
        score: iW,
        target: OW
      } = WW;
      return (0, YW.jsx)("div", {
        className: xW()("CubeWarfareStrip", {
          Progress: OW > 0
        }),
        children: OW > 0 && (0, YW.jsx)("i", {
          style: {
            transform: `scaleX(${Math.min(1,iW/OW)})`
          }
        })
      })
    }
    const Ki = (0, mW.memo)((function(WW) {
      let {
        wire: iW
      } = WW;
      const {
        isTouchScreen: OW
      } = (0, IW.p)(["isTouchScreen"]);
      return OW ? (0, YW.jsx)("div", {
        className: "CubeWarfarePerkColumnTouch",
        children: (0, YW.jsx)(Si, {
          wire: iW,
          touch: !0
        })
      }) : (0, YW.jsx)(RW.h, {
        placement: "bottomLeft",
        children: (0, YW.jsx)(Si, {
          wire: iW
        })
      })
    }));

    function Si(WW) {
      let {
        wire: iW,
        touch: OW = !1
      } = WW;
      const {
        t: mW
      } = (0, sW.B)(), EW = iW[11], NW = iW[12], PW = NW.findIndex((WW => {
        let [, iW] = WW;
        return EW < iW
      }));
      return (0, YW.jsxs)("div", {
        className: "CubeWarfarePerkColumn",
        children: [(0, YW.jsxs)("div", {
          className: "CubeWarfarePerkPoints SmallTextBold",
          children: [(0, YW.jsx)(AW.c, {
            name: "crosshairs"
          }), EW]
        }), NW.map(((WW, iW) => {
          let [LW, cW, wW, tW, ZW] = WW;
          const lW = EW >= cW,
            bW = 0 === iW ? 0 : NW[iW - 1][1],
            jW = lW ? 1 : iW === PW ? Math.max(0, (EW - bW) / (cW - bW)) : 0;
          return (0, YW.jsxs)("div", {
            className: xW()("CubeWarfarePerk", {
              Active: ZW,
              Reached: lW,
              Next: iW === PW
            }),
            children: [(0, YW.jsxs)("div", {
              className: "CubeWarfarePerkTile",
              children: [!lW && (0, YW.jsx)("div", {
                className: "CubeWarfarePerkFill",
                style: {
                  transform: `scaleY(${jW})`
                }
              }), (0, YW.jsx)(AW.c, {
                name: tW || "lock"
              })]
            }), (0, YW.jsxs)("div", {
              className: "CubeWarfarePerkText SmallTextBold",
              children: [(0, YW.jsx)("span", {
                className: "CubeWarfarePerkName",
                children: wW || mW("cubeWarfareHud:tier", {
                  tier: LW
                })
              }), (0, YW.jsxs)("small", {
                children: [lW && mW(ZW ? "cubeWarfareHud:active" : "cubeWarfareHud:noPerk"), !lW && !OW && mW("cubeWarfareHud:toGo", {
                  count: cW - EW
                }), !lW && OW && (0, YW.jsxs)(YW.Fragment, {
                  children: [(0, YW.jsx)(AW.c, {
                    name: "crosshairs"
                  }), " ", cW]
                })]
              })]
            })]
          }, LW)
        }))]
      })
    }

    function Yi(WW) {
      const [, iW] = (0, mW.useReducer)((WW => WW + 1), 0);
      (0, mW.useEffect)((() => {
        const OW = WW - performance.now();
        if (0 === WW || OW <= 0) return;
        const mW = window.setTimeout(iW, OW);
        return () => {
          window.clearTimeout(mW)
        }
      }), [WW])
    }
    const yi = ["", "", "cubeWarfareHud:doubleKill", "cubeWarfareHud:tripleKill", "cubeWarfareHud:quadKill", "cubeWarfareHud:rampage"];

    function Ti(WW) {
      let {
        store: iW
      } = WW;
      const OW = ui(fW(iW, "kill"), 2500),
        mW = dW();
      return OW ? (0, YW.jsx)(Hi, {
        victimName: mW(OW.wire[2]),
        headshot: OW.wire[4],
        killsThisLife: OW.wire[5],
        gold: OW.wire[6]
      }, OW.seq) : null
    }

    function Ji(WW) {
      let {
        store: iW
      } = WW;
      const OW = ui(fW(iW, "tier"), 3500);
      return OW ? (0, YW.jsx)(ni, {
        tier: OW.wire[1],
        perk: OW.wire[2],
        icon: OW.wire[3]
      }, OW.seq) : null
    }

    function Hi(WW) {
      let {
        victimName: iW,
        headshot: OW,
        killsThisLife: mW,
        gold: EW
      } = WW;
      const {
        t: NW
      } = (0, sW.B)(), PW = yi[Math.min(mW, yi.length - 1)];
      return (0, YW.jsxs)("div", {
        className: "CubeWarfareKillPop",
        children: [PW && (0, YW.jsx)("div", {
          className: "CubeWarfareMultiKill SmallTextBold",
          children: NW(PW)
        }), (0, YW.jsxs)("div", {
          className: "CubeWarfareKillLine SmallTextBold",
          children: [(0, YW.jsx)("span", {
            className: "CubeWarfareKillTag",
            children: NW("cubeWarfareHud:eliminated")
          }), (0, YW.jsx)("span", {
            className: "CubeWarfareKillName",
            children: iW
          })]
        }), (0, YW.jsxs)("div", {
          className: "CubeWarfareKillRewards",
          children: [EW > 0 && (0, YW.jsxs)("span", {
            className: "CubeWarfareReward Gold SmallTextBold",
            children: [`+${EW}`, (0, YW.jsx)(AW.c, {
              name: "coins",
              className: "CubeWarfareCoin"
            })]
          }), OW && (0, YW.jsxs)("span", {
            className: "CubeWarfareReward Headshot SmallTextBold",
            children: [(0, YW.jsx)(AW.c, {
              name: "crosshairs"
            }), NW("shootingOverlays:headshot")]
          })]
        })]
      })
    }

    function ni(WW) {
      let {
        tier: iW,
        perk: OW,
        icon: mW
      } = WW;
      const {
        t: EW
      } = (0, sW.B)();
      return (0, YW.jsxs)("div", {
        className: "CubeWarfareTierBanner",
        children: [(0, YW.jsx)("div", {
          className: "CubeWarfareTierIcon",
          children: (0, YW.jsx)(AW.c, {
            name: mW || "crosshairs"
          })
        }), (0, YW.jsxs)("div", {
          children: [(0, YW.jsx)("div", {
            className: "CubeWarfareTierTitle",
            children: EW("cubeWarfareHud:tierReached", {
              tier: iW
            })
          }), (0, YW.jsx)("div", {
            className: "CubeWarfareTierPerk SmallTextBold",
            children: OW ? EW("cubeWarfareHud:perkActive", {
              perk: OW
            }) : EW("cubeWarfareHud:noPerk")
          })]
        })]
      })
    }

    function ui(WW, iW) {
      return Yi(WW ? WW.at + iW : 0), WW && performance.now() - WW.at < iW ? WW : null
    }
    var oi = OW(3332);

    function di() {
      var WW, iW;
      const OW = null === (WW = (0, oi.e)("currencyAmounts")) || void 0 === WW || null === (iW = WW.gold) || void 0 === iW ? void 0 : iW.amount,
        [EW, NW] = (0, mW.useState)(0),
        PW = (0, mW.useRef)(OW);
      return (0, mW.useEffect)((() => {
        void 0 !== OW && void 0 !== PW.current && OW > PW.current && NW((WW => WW + 1)), PW.current = OW
      }), [OW]), void 0 === OW ? null : (0, YW.jsx)(RW.h, {
        placement: "statBars",
        children: (0, YW.jsxs)("div", {
          className: xW()("CubeWarfareWallet SmallTextBold", {
            Bump: EW > 0
          }),
          children: [(0, YW.jsx)(AW.c, {
            name: "coins",
            className: "CubeWarfareCoin"
          }), OW]
        }, EW)
      })
    }

    function ei(WW) {
      let {
        endsAt: iW
      } = WW;
      return 0 === iW ? null : (0, YW.jsx)(gi, {
        endsAt: iW
      }, iW)
    }

    function vi(WW) {
      let {
        endsAt: iW
      } = WW;
      return Yi(iW), iW <= performance.now() ? null : (0, YW.jsx)("div", {
        className: "CubeWarfareProtectionEdge"
      })
    }

    function gi(WW) {
      let {
        endsAt: iW
      } = WW;
      const {
        t: OW
      } = (0, sW.B)(), [EW] = (0, mW.useState)((() => Math.max(0, iW - performance.now())));
      return Yi(iW), iW <= performance.now() ? null : (0, YW.jsxs)("div", {
        className: "CubeWarfareProtection",
        children: [(0, YW.jsx)(AW.c, {
          name: "shield-halved",
          className: "CubeWarfareProtectionIcon"
        }), (0, YW.jsxs)("div", {
          className: "CubeWarfareProtectionText SmallTextBold",
          children: [OW("cubeWarfareHud:spawnProtected"), (0, YW.jsx)("small", {
            children: OW("cubeWarfareHud:spawnProtectedHint")
          })]
        }), (0, YW.jsx)("div", {
          className: "CubeWarfareProtectionDrain",
          style: {
            "--cubeWarfareDrainMs": `${EW}ms`
          }
        })]
      })
    }

    function Di(WW) {
      let {
        place: iW,
        hidden: OW = !1,
        children: mW
      } = WW;
      return "OverHotbar" !== iW ? (0, YW.jsx)("div", {
        className: xW()("CubeWarfareCentreSlot", iW, {
          Hidden: OW
        }),
        children: mW
      }) : (0, YW.jsx)(RW.h, {
        children: (0, YW.jsx)("div", {
          className: "CubeWarfareOverHotbar",
          children: (0, YW.jsx)("div", {
            className: "CubeWarfareCentreSlot OverHotbar",
            children: mW
          })
        })
      })
    }
    const Vi = WW => {
      var iW;
      const OW = null === (iW = WW.attributes.customAttributes) || void 0 === iW ? void 0 : iW.shotsLeft;
      return "number" === typeof OW && WW.clipSize ? (0, YW.jsx)(fi, {
        item: WW,
        shotsLeft: OW,
        clipSize: WW.clipSize
      }) : null
    };

    function fi(WW) {
      let {
        item: iW,
        shotsLeft: OW,
        clipSize: EW
      } = WW;
      const {
        t: NW
      } = (0, sW.B)(), PW = function(WW, iW, OW) {
        const [EW, NW] = (0, mW.useState)(null), PW = (0, mW.useRef)(WW), LW = (0, mW.useRef)(0);
        return (0, QW.e)("middleScreenBarInitiate", (WW => {
          let {
            duration: OW
          } = WW;
          OW >= 400 && PW.current < iW && NW({
            key: ++LW.current,
            ms: OW
          })
        })), (0, QW.e)("middleScreenBarRemove", (() => {
          NW(null)
        })), (0, mW.useEffect)((() => {
          const iW = WW > PW.current;
          PW.current = WW, iW && NW(null)
        }), [WW]), (0, mW.useEffect)((() => {
          NW(null)
        }), [OW]), (0, mW.useEffect)((() => {
          if (!EW) return;
          const WW = window.setTimeout((() => {
            NW(null)
          }), EW.ms);
          return () => {
            window.clearTimeout(WW)
          }
        }), [EW]), EW
      }(OW, EW, iW.instance), LW = OW <= Math.ceil(.25 * EW);
      return (0, YW.jsx)(RW.h, {
        placement: "statBars",
        children: (0, YW.jsxs)("div", {
          className: xW()("CubeWarfareAmmo", {
            Low: LW,
            Reloading: null !== PW
          }),
          children: [null === PW && (0, YW.jsxs)(YW.Fragment, {
            children: [(0, YW.jsx)("span", {
              className: "CubeWarfareAmmoMag SmallTextBold",
              children: OW
            }), (0, YW.jsx)("span", {
              className: "CubeWarfareAmmoClip SmallTextBold",
              children: `/ ${EW}`
            })]
          }), null !== PW && (0, YW.jsxs)("span", {
            className: "CubeWarfareAmmoReloading SmallTextBold",
            children: [NW("cubeWarfareHud:reloading"), (0, YW.jsx)("i", {
              className: "CubeWarfareAmmoReloadBar",
              style: {
                "--cubeWarfareReloadMs": `${PW.ms}ms`
              }
            }, PW.key)]
          }), (0, YW.jsx)("span", {
            className: "CubeWarfareAmmoGun",
            children: (0, YW.jsx)(Ai.b, {
              itemName: iW.name,
              amount: 0,
              gunTransform: "none"
            })
          }), LW && null === PW && (0, YW.jsx)(rW.e, {
            noaAction: "ReloadGun",
            className: "CubeWarfareAmmoKey",
            padHidesKey: !0
          })]
        })
      })
    }

    function Ci(WW) {
      let {
        store: iW
      } = WW;
      const OW = fW(iW, "hud"),
        EW = fW(iW, "leaderboard"),
        NW = (0, lW.f)("connectedGame", (WW => WW.replay));
      ! function(WW) {
        (0, mW.useEffect)((() => {
          const iW = (0, xi.r)({
              headshot: (iW, OW) => {
                var mW;
                const EW = performance.now(),
                  NW = WW.get("killfeed").findLast((WW => {
                    let {
                      at: mW,
                      wire: NW
                    } = WW;
                    return NW[0] === iW && NW[1] === OW && EW - mW < 3e3
                  }));
                return null !== (mW = null === NW || void 0 === NW ? void 0 : NW.wire[3]) && void 0 !== mW && mW
              },
              streakLabel: WW => `\xd7${WW}`
            }),
            OW = (0, xi.o)(Vi);
          return () => {
            iW(), OW()
          }
        }), [WW])
      }(iW);
      const PW = OW.wire;
      if (!PW || "match" !== PW[1] || NW) return null;
      const LW = !PW[7];
      return (0, YW.jsxs)("div", {
        className: "CubeWarfareHud",
        children: [(0, YW.jsx)(ji, {
          wire: PW,
          endsAt: OW.endsAt,
          leaderboard: EW
        }), LW && (0, YW.jsxs)(YW.Fragment, {
          children: [(0, YW.jsx)(Ki, {
            wire: PW
          }), (0, YW.jsx)(Xi, {
            store: iW,
            protectionEndsAt: OW.spawnProtectionEndsAt
          }), (0, YW.jsx)(di, {}), (0, YW.jsx)(vi, {
            endsAt: OW.spawnProtectionEndsAt
          })]
        })]
      })
    }

    function Xi(WW) {
      let {
        store: iW,
        protectionEndsAt: OW
      } = WW;
      const {
        isTouchScreen: mW
      } = (0, IW.p)(["isTouchScreen"]), EW = (0, QW.g)("aimingOverlay", "none"), NW = (0, YW.jsx)(ei, {
        endsAt: OW
      }), PW = (0, YW.jsx)(Ji, {
        store: iW
      }), LW = (0, YW.jsx)(Ti, {
        store: iW
      });
      if (!mW) return (0, YW.jsxs)(Di, {
        place: "OverHotbar",
        children: [NW, PW, LW]
      });
      const cW = "sniper" === EW;
      return (0, YW.jsxs)(YW.Fragment, {
        children: [(0, YW.jsxs)(Di, {
          place: "AboveCrosshair",
          hidden: cW,
          children: [NW, LW]
        }), (0, YW.jsx)(Di, {
          place: "BelowCrosshair",
          hidden: cW,
          children: PW
        })]
      })
    }
    var Bi = OW(327);
    const qi = 2 * Math.PI * 19;

    function Ri(WW) {
      var iW, OW;
      let {
        store: EW,
        variation: NW,
        state: PW
      } = WW;
      const {
        t: LW
      } = (0, sW.B)(), cW = fW(EW, "death"), wW = fW(EW, "leaderboard"), tW = dW(), ZW = (0, mW.useRef)(performance.now()), xW = (0, mW.useRef)(PW.alive);
      !PW.alive && xW.current && (ZW.current = performance.now()), xW.current = PW.alive;
      const lW = (0, mW.useRef)(null);
      cW && cW.at >= ZW.current - 3e3 && (lW.current = {
        diedAt: ZW.current,
        wire: cW.wire
      });
      const jW = (null === (iW = lW.current) || void 0 === iW ? void 0 : iW.diedAt) === ZW.current ? lW.current.wire : null,
        [, UW, kW, MW, KW, SW, JW, hW, HW] = null !== jW && void 0 !== jW ? jW : [],
        nW = "player" === UW && "" !== kW,
        uW = null === (OW = wW.find((WW => WW[0] === kW))) || void 0 === OW ? void 0 : OW[2];
      return (0, YW.jsxs)("div", {
        className: "ShootingDeathCard",
        style: {
          "--killer": nW && uW ? TW(uW, NW) : void 0
        },
        children: [(0, YW.jsxs)("div", {
          className: "ShootingDeathKiller",
          children: [nW && (0, YW.jsx)("div", {
            className: "ShootingDeathHead",
            children: (0, YW.jsx)(eW, {
              playerId: kW
            })
          }), !nW && (0, YW.jsx)("div", {
            className: "ShootingDeathHead ShootingDeathSkull",
            children: (0, YW.jsx)(AW.c, {
              name: "skull"
            })
          }), (0, YW.jsxs)("div", {
            className: "ShootingDeathWho",
            children: [nW && (0, YW.jsxs)(YW.Fragment, {
              children: [(0, YW.jsx)("div", {
                className: "ShootingDeathEyebrow SmallTextBold",
                children: LW(`${yW}killedBy`)
              }), (0, YW.jsx)("div", {
                className: "ShootingDeathName FullyFancyText",
                children: tW(null !== MW && void 0 !== MW ? MW : "")
              })]
            }), !nW && (0, YW.jsx)("div", {
              className: "ShootingDeathName FullyFancyText",
              children: LW(Gi(UW))
            }), KW && (0, YW.jsxs)("div", {
              className: "ShootingDeathWeapon SmallTextBold",
              children: [(0, YW.jsx)("span", {
                className: "ShootingDeathGun",
                children: (0, YW.jsx)(Ai.b, {
                  itemName: KW,
                  amount: 0,
                  gunTransform: "none"
                })
              }), (0, YW.jsx)("span", {
                children: KW
              }), SW && (0, YW.jsxs)("span", {
                className: "ShootingDeathHeadshot",
                children: [(0, YW.jsx)(AW.c, {
                  name: "crosshairs"
                }), " ", LW(`${yW}headshot`)]
              })]
            })]
          }), (0, YW.jsx)(Ii, {
            secondsLeft: PW.secondsLeft,
            totalSeconds: PW.totalSeconds,
            alive: PW.alive
          })]
        }), jW && (0, YW.jsxs)("div", {
          className: "ShootingDeathLife",
          children: [(0, YW.jsx)(vW, {
            value: String(JW),
            label: LW(`${yW}killsThisLife`)
          }), (0, YW.jsx)(vW, {
            icon: "crosshairs",
            value: String(hW),
            label: LW(`${yW}streakPoints`)
          }), (0, YW.jsx)(vW, {
            icon: "coins",
            value: `+${HW}`,
            label: LW(`${yW}goldEarned`),
            gold: !0
          })]
        }), (0, YW.jsxs)("div", {
          className: "ShootingDeathActions",
          children: [(0, YW.jsx)(bW.f, {
            className: "ShootingDeathLoadout",
            onClick: () => {
              IW.d.set({
                openEverythingMenuName: Bi.m.SHOP
              })
            },
            touchPressOn: "pointerup",
            children: (0, YW.jsxs)("span", {
              className: "ShootingDeathLoadoutText",
              children: [LW(`${yW}changeLoadout`), (0, YW.jsx)(rW.e, {
                noaAction: "OpenShop",
                padHidesKey: !0
              })]
            })
          }), (0, YW.jsx)("div", {
            className: "ShootingDeathStatus FullyFancyText",
            children: PW.status
          })]
        })]
      })
    }

    function Gi(WW) {
      switch (WW) {
        case "self":
          return `${yW}diedSelf`;
        case "void":
          return `${yW}diedVoid`;
        default:
          return "respawnPage:youDied"
      }
    }

    function Ii(WW) {
      let {
        secondsLeft: iW,
        totalSeconds: OW,
        alive: mW
      } = WW;
      const EW = mW || iW <= 0,
        NW = OW > 0 ? Math.min(1, iW / OW) : 0;
      return (0, YW.jsxs)("div", {
        className: "ShootingDeathRing",
        children: [(0, YW.jsxs)("svg", {
          viewBox: "0 0 44 44",
          children: [(0, YW.jsx)("circle", {
            className: "ShootingDeathRingTrack",
            cx: "22",
            cy: "22",
            r: 19
          }), (0, YW.jsx)("circle", {
            className: "ShootingDeathRingFill",
            cx: "22",
            cy: "22",
            r: 19,
            strokeDasharray: qi,
            strokeDashoffset: qi * (1 - (EW ? 0 : NW))
          })]
        }), (0, YW.jsxs)("b", {
          className: "FullyFancyText",
          children: [EW && (0, YW.jsx)(AW.c, {
            name: "check"
          }), !EW && iW]
        })]
      })
    }
    const ai = [1, 0, 2],
      ri = [`${yW}place1`, `${yW}place2`, `${yW}place3`],
      zi = [`${yW}place1Short`, `${yW}place2Short`, `${yW}place3Short`],
      Fi = {
        streak: `${yW}reasonTimeUp_streak`,
        diamonds: `${yW}reasonTimeUp_diamonds`,
        kills: `${yW}reasonTimeUp_kills`
      },
      Qi = {
        streak: null,
        diamonds: `${yW}reasonTarget_diamonds`,
        kills: `${yW}reasonTarget_kills`
      };

    function WO(WW) {
      let {
        store: iW
      } = WW;
      const OW = fW(iW, "roundEnd"),
        mW = fW(iW, "hud").wire,
        EW = (0, lW.g)("localPlayerAlive"),
        NW = (0, kW.f)(OW.lobbyAt),
        PW = (0, lW.f)("connectedGame", (WW => WW.replay));
      return "roundEnd" !== OW.wire[0] || !mW || !EW || NW <= 0 || PW ? null : (0, YW.jsx)(iO, {
        wire: OW.wire,
        hud: mW,
        lobbyAt: OW.lobbyAt,
        secondsLeft: NW
      }, OW.lobbyAt)
    }
    const iO = (0, mW.memo)((function(WW) {
      let {
        wire: iW,
        hud: OW,
        lobbyAt: EW,
        secondsLeft: NW
      } = WW;
      const {
        t: PW
      } = (0, sW.B)(), [LW] = (0, mW.useState)((() => Math.max(0, EW - performance.now()))), cW = dW(), [, wW, tW, ZW, , lW, AW, bW, jW, UW, , kW, MW, KW, SW, TW, HW, nW] = iW, [, , uW, eW, , gW, DW, VW] = OW, pW = "tdm" === uW, fW = WW => WW === DW ? PW(`${yW}teamYours`, {
        team: PW(hW[WW])
      }) : PW(hW[WW]);
      return (0, YW.jsxs)("div", {
        className: xW()("ShootingResults", "win" === wW ? "Won" : "Lost"),
        style: {
          "--lobbyMs": `${nW}ms`,
          "--lobbyElapsedMs": `${Math.max(0,nW-LW)}ms`
        },
        children: [(0, YW.jsx)("div", {
          className: "ShootingResultsTitle FullyFancyText",
          children: OO(PW, iW, pW, VW, cW)
        }), (0, YW.jsxs)("div", {
          className: "ShootingResultsScore FullyFancyText",
          children: [pW && (0, YW.jsxs)(YW.Fragment, {
            children: [(0, YW.jsx)("span", {
              className: "ShootingResultsTeam",
              children: fW("Red")
            }), (0, YW.jsx)("b", {
              style: JW("Red", "tdm"),
              children: bW
            }), (0, YW.jsx)("span", {
              className: "ShootingResultsDash",
              children: "\u2013"
            }), (0, YW.jsx)("b", {
              style: JW("Blue", "tdm"),
              children: jW
            }), (0, YW.jsx)("span", {
              className: "ShootingResultsTeam",
              children: fW("Blue")
            })]
          }), !pW && ("win" === wW || "" !== lW) && (0, YW.jsxs)(YW.Fragment, {
            children: [(0, YW.jsx)("span", {
              className: "ShootingResultsTeam",
              children: "win" === wW ? PW(`${yW}youWonWith`) : PW(`${yW}playerWonWith`, {
                name: cW(lW)
              })
            }), (0, YW.jsx)("b", {
              style: JW(ZW, "ffa"),
              children: UW
            })]
          })]
        }), (0, YW.jsx)("div", {
          className: "ShootingResultsWhy SmallTextBold",
          children: mO(PW, AW, pW, oW(eW), gW)
        }), kW.length > 0 && (0, YW.jsx)("div", {
          className: "ShootingResultsPodium",
          children: ai.filter((WW => WW < kW.length)).map((WW => (0, YW.jsx)(EO, {
            entry: kW[WW],
            place: WW,
            mvp: kW[WW][0] === MW,
            tdm: pW
          }, WW)))
        }), !VW && (0, YW.jsxs)("div", {
          className: "ShootingResultsYou",
          children: [(0, YW.jsx)(vW, {
            value: String(KW),
            label: PW(`${yW}kills`)
          }), (0, YW.jsx)(vW, {
            value: String(SW),
            label: PW(`${yW}deaths`)
          }), (0, YW.jsx)(vW, {
            icon: "crosshairs",
            value: String(TW),
            label: PW(`${yW}bestStreak`)
          }), (0, YW.jsx)(vW, {
            icon: "coins",
            value: `+${HW}`,
            label: PW(`${yW}goldEarned`),
            gold: !0
          })]
        }), (0, YW.jsxs)("div", {
          className: "ShootingResultsNext SmallTextBold",
          children: [(0, YW.jsx)("span", {
            children: PW(`${yW}backToLobby`, {
              seconds: String(NW)
            })
          }), (0, YW.jsx)("span", {
            className: "ShootingResultsBar",
            children: (0, YW.jsx)("i", {})
          })]
        })]
      })
    }));

    function OO(WW, iW, OW, mW, EW) {
      const [, NW, PW, LW, , cW] = iW;
      return mW && OW ? WW(`${yW}teamWins`, {
        team: nW(LW) ? WW(hW[LW]) : LW
      }) : mW ? "" === cW ? WW(`${yW}matchOver`) : WW(`${yW}playerWins`, {
        name: EW(cW)
      }) : "win" === NW ? WW(`${yW}victory`) : OW || 0 === PW ? WW(`${yW}defeat`) : PW <= ri.length ? WW(ri[PW - 1]) : WW(`${yW}placeNth`, {
        place: String(PW)
      })
    }

    function mO(WW, iW, OW, mW, EW) {
      switch (iW) {
        case "timeUp":
          return WW(Fi[mW]);
        case "target": {
          const iW = Qi[mW];
          return iW && EW > 0 ? WW(iW, {
            target: String(EW)
          }) : WW(`${yW}reasonTarget`)
        }
        case "lastTeam":
          return WW(OW ? `${yW}reasonLastTeam` : `${yW}reasonLastPlayer`)
      }
    }

    function EO(WW) {
      let {
        entry: iW,
        place: OW,
        mvp: mW,
        tdm: EW
      } = WW;
      const {
        t: NW
      } = (0, sW.B)(), PW = dW(), [LW, cW, wW, tW, ZW] = iW, bW = (0, lW.g)("players").localId;
      return (0, YW.jsxs)("div", {
        className: xW()("ShootingPodiumCard", `Place${OW+1}`, {
          Mvp: mW,
          Mine: LW === bW,
          Team: EW
        }),
        style: EW ? JW(wW, "tdm") : void 0,
        children: [mW && (0, YW.jsx)("span", {
          className: "ShootingPodiumCrown",
          children: (0, YW.jsx)(AW.c, {
            name: "crown"
          })
        }), (0, YW.jsx)("div", {
          className: "ShootingPodiumHead",
          children: (0, YW.jsx)(eW, {
            playerId: LW
          })
        }), (0, YW.jsxs)("div", {
          className: "ShootingPodiumPlace SmallTextBold",
          children: [NW(zi[OW]), mW && ` \xb7 ${NW(`${yW}mvp`)}`]
        }), (0, YW.jsx)("div", {
          className: "ShootingPodiumName SmallTextBold",
          children: PW(cW)
        }), (0, YW.jsx)("div", {
          className: "ShootingPodiumStats SmallTextBold",
          children: NW(`${yW}podiumStats`, {
            kills: String(tW),
            score: String(ZW)
          })
        })]
      })
    }

    function NO(WW) {
      var iW, OW;
      let {
        store: EW,
        variation: NW
      } = WW;
      const PW = "lobby" !== (null !== (iW = null === (OW = fW(EW, "hud").wire) || void 0 === OW ? void 0 : OW[1]) && void 0 !== iW ? iW : "lobby");
      return (0, mW.useEffect)((() => {
        if (!PW) return;
        const WW = (0, cW.I)(cW.H);
        return () => {
          WW(), (0, cW.m)()
        }
      }), [PW]), (0, mW.useEffect)((() => (0, cW.M)((WW => (0, YW.jsx)(Ri, {
        store: EW,
        variation: NW,
        state: WW
      })))), [EW, NW]), (0, YW.jsx)(WO, {
        store: EW
      })
    }

    function PO(WW) {
      return (0, YW.jsxs)(YW.Fragment, {
        children: [(0, YW.jsx)(Ci, {
          ...WW
        }), (0, YW.jsx)(NO, {
          ...WW
        }), (0, YW.jsx)(ci, {
          ...WW
        })]
      })
    }
    const LO = "CubeWarfareUi",
      cO = "CubeWarfareFfa",
      wO = function(WW, iW, OW, NW) {
        let {
          localPlayerId: PW
        } = NW;
        const ZW = new pW,
          xW = "tdm" === OW ? "tdm" : "ffa";
        let lW = null,
          AW = null,
          bW = null;
        return {
          onCreate: WW => {
            document.body.classList.add(LO), document.body.classList.toggle(cO, "ffa" === xW), AW = new tW.d(WW, PW), bW = new mi((WW => {
              LW.l.iZ(Oi, WW, !0)
            }), (iW => {
              WW.sendCommand(iW)
            })), lW = (0, cW.O)((0, mW.createElement)(mW.Fragment, null, (0, mW.createElement)(wW.e, {
              controller: AW
            }), (0, mW.createElement)(PO, {
              store: ZW,
              votes: bW,
              variation: xW
            })), {
              content: (0, mW.createElement)(BW, {
                store: ZW,
                variation: xW
              })
            })
          },
          onClose: () => {
            var WW, iW, OW;
            document.body.classList.remove(LO, cO), null === (WW = lW) || void 0 === WW || WW(), lW = null, null === (iW = AW) || void 0 === iW || iW.dispose(), AW = null, null === (OW = bW) || void 0 === OW || OW.dispose(), bW = null
          },
          onAfterRender: (WW, iW) => {
            var OW;
            null === (OW = AW) || void 0 === OW || OW.frame(iW.cameraHeading)
          },
          onReceivedMessageFromServer: (WW, iW) => {
            var OW;
            (ZW.yZ(WW, iW), WW === EW) && (null === (OW = bW) || void 0 === OW || OW.onLobby(ZW.get("lobby").wire))
          }
        }
      }
  },
  40710: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW
    });
    var mW = OW(62),
      EW = OW(1283);
    const NW = (0, mW.memo)((function(WW) {
      let {
        controller: iW
      } = WW;
      return (0, EW.jsxs)("div", {
        className: "DamageFeedback",
        ref: iW.bindElement,
        children: [(0, EW.jsx)("div", {
          className: "DamageFeedbackLow",
          children: (0, EW.jsx)("div", {
            className: "DamageFeedbackShade"
          })
        }), (0, EW.jsx)("div", {
          className: "DamageFeedbackArcs"
        })]
      })
    }))
  },
  40706: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW
    });
    var mW = OW(27);
    const EW = "DamageFeedbackArcsShown",
      NW = .45,
      PW = .2;
    class LW {
      constructor(WW, iW) {
        let {
          arcs: OW = !0,
          edgeGlow: EW = !0,
          lowHealthShade: NW = !0,
          enabled: PW = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.api = WW, this.localPlayerId = iW, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.DE = 1, this.dead = !1, this.enabled = void 0, this.parts = void 0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = WW => {
          var iW, OW;
          this.clearHits(), this.root = WW, this.lowLayer = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.querySelector(".DamageFeedbackLow")) && void 0 !== iW ? iW : null, this.arcLayer = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.querySelector(".DamageFeedbackArcs")) && void 0 !== OW ? OW : null, this.showRoot(), this.drawLow()
        }, this.parts = {
          arcs: OW,
          edgeGlow: EW,
          lowHealthShade: NW
        }, this.enabled = PW, this.token = mW.l.subscribe("damagedByOtherPlayer", (WW => {
          let {
            direction: iW,
            vE: OW
          } = WW;
          this.onHurt(iW, OW)
        })), this.syncHealth(), this.showCustomDamage()
      }
      WK(WW) {
        WW !== this.enabled && (this.enabled = WW, this.showCustomDamage(), WW || this.clearHits(), this.showRoot())
      }
      frame(WW) {
        this.syncHealth(), this.cameraHeading = WW;
        for (const iW of this.arcs) this.drawArcAngle(iW)
      }
      dispose() {
        mW.l.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(EW)
      }
      showCustomDamage() {
        document.body.classList.toggle(EW, this.enabled && this.parts.arcs)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const WW = this.api.getClientOption(this.localPlayerId, "_health"),
          iW = this.api.getClientOption(this.localPlayerId, "_shield"),
          OW = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(WW, this.readHealth) && Object.is(iW, this.readShield) && Object.is(OW, this.readMaxHealth)) return;
        if (this.readHealth = WW, this.readShield = iW, this.readMaxHealth = OW, null === WW || void 0 === WW || !OW) return this.lastHealthPool = null, this.maxHealth = null, this.DE = 1, this.dead = !1, void this.drawLow();
        const mW = WW + (null !== iW && void 0 !== iW ? iW : 0);
        if (null !== this.lastHealthPool && mW < this.lastHealthPool) {
          const WW = performance.now(),
            iW = (this.lastHealthPool - mW) / OW;
          this.lastDrop = WW - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + iW,
            at: this.lastDrop.at
          } : {
            frac: iW,
            at: WW
          }
        }
        this.dead = WW <= 0, this.dead && this.clearHits(), this.lastHealthPool = mW, this.maxHealth = OW, this.DE = WW > 0 ? WW / OW : 1, this.drawLow()
      }
      onHurt(WW, iW) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const OW = Math.min(1, this.takeDamageFrac(iW) / .3);
        null !== WW && this.parts.arcs && this.showArc(WW, OW), this.parts.edgeGlow && this.flashEdge(null === WW ? null : WW - this.cameraHeading, .4 + .6 * OW)
      }
      takeDamageFrac(WW) {
        if (void 0 !== WW && this.maxHealth) return WW / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: iW
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, iW
      }
      drawLow() {
        if (!this.lowLayer || !this.parts.lowHealthShade) return;
        const WW = wW((NW - this.DE) / .25),
          iW = wW((PW - this.DE) / .15000000000000002),
          OW = this.DE < NW;
        this.lowLayer.classList.toggle("Active", OW), this.lowLayer.classList.toggle("Critical", this.DE < PW), this.lowLayer.style.opacity = String(OW ? .55 + .3 * WW + .15 * iW : 0)
      }
      showArc(WW, iW) {
        var OW, mW;
        if (!this.arcLayer) return;
        let EW = this.arcs.find((iW => cW(iW.direction, WW) < .6));
        if (!EW) {
          const iW = document.createElement("div");
          iW.className = "DamageFeedbackArc", iW.appendChild(document.createElement("div")).className = "DamageFeedbackArcBand", this.arcLayer.appendChild(iW), EW = {
            element: iW,
            direction: WW,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(EW)
        }
        EW.direction = WW, this.drawArcAngle(EW);
        const NW = EW.fade ? Number(getComputedStyle(EW.element).opacity) : 0;
        null === (OW = EW.fade) || void 0 === OW || OW.cancel(), null === (mW = EW.pop) || void 0 === mW || mW.cancel(), EW.element.style.opacity = "1";
        const PW = EW.element.animate([{
          opacity: NW
        }, {
          opacity: 1
        }], 144);
        EW.fade = PW, EW.pop = EW.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * iW
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const LW = EW;
        PW.onfinish = () => {
          if (LW.fade !== PW) return;
          const WW = LW.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          WW.startTime = PW.startTime, LW.fade = WW, WW.onfinish = () => {
            LW.fade === WW && (LW.element.remove(), tW(this.arcs, LW))
          }
        }
      }
      drawArcAngle(WW) {
        const iW = WW.direction - this.cameraHeading;
        (null === WW.drawnAngle || Math.abs(iW - WW.drawnAngle) > .005) && (WW.drawnAngle = iW, WW.element.style.rotate = `${iW}rad`)
      }
      flashEdge(WW, iW) {
        var OW, mW, EW;
        if (!this.root) return;
        let NW = this.flashes.find((iW => null === iW.angle || null === WW ? iW.angle === WW : cW(iW.angle, WW) < .5));
        if (!NW) {
          const iW = document.createElement("div");
          iW.className = "DamageFeedbackFlash";
          const OW = iW.appendChild(document.createElement("div"));
          OW.className = "DamageFeedbackFlashGlow", this.root.insertBefore(iW, this.arcLayer), NW = {
            element: iW,
            glow: OW,
            angle: WW,
            level: 0,
            animation: null
          }, this.flashes.push(NW)
        }
        const PW = null === (OW = NW.animation) || void 0 === OW || null === (mW = OW.effect) || void 0 === mW ? void 0 : mW.getComputedTiming().progress,
          LW = null === PW || void 0 === PW ? 0 : NW.level * (1 - PW);
        NW.level = Math.min(1, Math.max(iW, LW + .6 * iW)), NW.angle = WW;
        const {
          x: wW,
          y: ZW,
          rx: xW,
          ry: lW
        } = function(WW, iW) {
          const OW = window.innerWidth,
            mW = window.innerHeight;
          if (null === WW) return {
            x: OW / 2,
            y: mW / 2,
            rx: 0,
            ry: 0
          };
          const EW = Math.sin(WW),
            NW = -Math.cos(WW),
            PW = OW / 2 / Math.max(1e-6, Math.abs(EW)),
            LW = mW / 2 / Math.max(1e-6, Math.abs(NW)),
            cW = Math.min(PW, LW),
            wW = Math.round(OW / 2 + EW * cW),
            tW = Math.round(mW / 2 + NW * cW),
            ZW = mW / 100 * (.85 + .25 * iW),
            xW = PW <= LW,
            lW = Math.round((xW ? 30 : 74) * ZW),
            AW = Math.round((xW ? 58 : 26) * ZW);
          return {
            x: wW,
            y: tW,
            rx: lW,
            ry: AW
          }
        }(WW, NW.level), {
          style: AW
        } = NW.glow;
        NW.glow.classList.toggle("Everywhere", null === WW), AW.setProperty("--glowX", `${wW}px`), AW.setProperty("--glowY", `${ZW}px`), AW.setProperty("--glowRx", `${xW}px`), AW.setProperty("--glowRy", `${lW}px`), NW.element.style.transformOrigin = `${wW}px ${ZW}px`, null === (EW = NW.animation) || void 0 === EW || EW.cancel();
        const bW = NW.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: NW.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * NW.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * NW.level
        });
        NW.animation = bW;
        const jW = NW;
        bW.onfinish = () => {
          jW.animation === bW && (jW.element.remove(), tW(this.flashes, jW))
        }
      }
      clearHits() {
        for (const mW of this.arcs) {
          var WW, iW;
          null === (WW = mW.fade) || void 0 === WW || WW.cancel(), mW.fade = null, null === (iW = mW.pop) || void 0 === iW || iW.cancel(), mW.element.remove()
        }
        this.arcs.length = 0;
        for (const mW of this.flashes) {
          var OW;
          null === (OW = mW.animation) || void 0 === OW || OW.cancel(), mW.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function cW(WW, iW) {
      return Math.abs(Math.atan2(Math.sin(WW - iW), Math.cos(WW - iW)))
    }

    function wW(WW) {
      return Math.max(0, Math.min(1, WW))
    }

    function tW(WW, iW) {
      const OW = WW.indexOf(iW); - 1 !== OW && WW.splice(OW, 1)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);