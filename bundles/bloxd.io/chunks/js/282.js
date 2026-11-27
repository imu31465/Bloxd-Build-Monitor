export const id = 282;
export const ids = [282];
export const modules = {
  41063: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    const Zr = 1e3;

    function Wr(rr, Sr) {
      const Qr = performance.now() + rr;
      return 0 !== Sr && Math.abs(Qr - Sr) < Zr ? Sr : Qr
    }
  },
  41228: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => IQ
    });
    var Zr = Qr(72);
    const Wr = "shootingLobby",
      ar = {
        Red: "#fc6464",
        Blue: "#4f94f1"
      };

    function jr(rr, Sr) {
      const Qr = rr.reduce(((rr, Sr) => rr + Sr[5]), 0);
      return 0 === Qr ? 0 === rr.length ? 0 : Math.round(100 / rr.length) : Math.round(rr[Sr][5] / Qr * 100)
    }
    var Ir = Qr(34),
      fr = Qr(3425),
      Er = Qr(41055),
      pr = Qr(41046),
      xr = Qr(1155),
      mr = Qr.n(xr),
      Nr = Qr(2128),
      Ur = Qr(1448),
      tr = Qr(1576),
      hr = Qr(5297),
      zr = Qr(5736),
      Yr = Qr(38175),
      nr = Qr(1251),
      er = Qr(379),
      Kr = Qr(3320),
      yr = Qr(1317),
      Br = Qr(1338);
    const Tr = "shootingOverlays:";

    function vr(rr, Sr) {
      var Qr;
      return "tdm" === Sr && Xr(rr) ? ar[rr] : null !== (Qr = (0, er.hb)(rr)) && void 0 !== Qr ? Qr : "#ffffff"
    }

    function Or(rr, Sr) {
      return {
        "--team": vr(rr, Sr)
      }
    }
    const Lr = {
        Red: `${Tr}teamRed`,
        Blue: `${Tr}teamBlue`
      },
      lr = {
        diamonds: `${Tr}mutation_diamonds`,
        explosives: `${Tr}mutation_explosives`,
        gungame: `${Tr}mutation_gungame`
      };

    function Xr(rr) {
      return Object.hasOwn(ar, rr)
    }
    const Pr = {
      normal: "streak",
      explosives: "streak",
      diamonds: "diamonds",
      gungame: "kills"
    };

    function Hr(rr) {
      return Pr[rr]
    }

    function qr() {
      const rr = (0, Nr.j)("hiddenPlayerNames");
      return (0, Zr.useCallback)((Sr => "" === Sr ? "" : (0, yr.c)(Sr, rr)), [rr])
    }

    function Rr(rr) {
      var Sr;
      let {
        playerId: Qr
      } = rr;
      const Zr = null === (Sr = (0, Nr.j)("players").byId[Qr]) || void 0 === Sr ? void 0 : Sr.cosmetics;
      return (0, Br.jsx)(Kr.b, {
        cosmetics: null !== Zr && void 0 !== Zr ? Zr : {}
      })
    }

    function gr(rr) {
      let {
        icon: Sr,
        value: Qr,
        label: Zr,
        gold: Wr = !1
      } = rr;
      return (0, Br.jsxs)("div", {
        className: "ShootingStat",
        children: [(0, Br.jsxs)("b", {
          className: mr()("FullyFancyText", {
            Gold: Wr
          }),
          children: [Sr && (0, Br.jsx)(Ur.c, {
            name: Sr
          }), Qr]
        }), (0, Br.jsx)("span", {
          className: "SmallTextBold",
          children: Zr
        })]
      })
    }
    var Cr = Qr(1527),
      Mr = Qr(41063);

    function Gr(rr) {
      return `shooting:${rr}`
    }
    class kr {
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
      get(rr) {
        return this.slices[rr]
      }
      vx(rr, Sr) {
        switch (rr) {
          case "shootingHud":
            return this.receiveHud(Sr), !0;
          case Wr: {
            const rr = Sr;
            return this.set("lobby", {
              wire: rr,
              startsAt: "lobby" === rr[0] ? (0, Mr.b)(rr[2], this.slices.lobby.startsAt) : 0
            }), !0
          }
          case "shootingRoundEnd": {
            const rr = Sr;
            return this.set("roundEnd", {
              wire: rr,
              lobbyAt: "roundEnd" === rr[0] ? performance.now() + rr[17] : 0
            }), !0
          }
          case "shootingLeaderboard":
            return this.set("leaderboard", Sr), !0;
          case "shootingKillfeed": {
            const rr = {
              seq: ++this.seq,
              at: performance.now(),
              wire: Sr
            };
            return this.set("killfeed", [...this.slices.killfeed.slice(-11), rr]), !0
          }
          case "shootingEvent":
            return this.receiveEvent(Sr), !0;
          default:
            return !1
        }
      }
      receiveHud(rr) {
        var Sr;
        const Qr = this.slices.hud,
          Zr = (null === (Sr = Qr.wire) || void 0 === Sr ? void 0 : Sr[1]) === rr[1];
        Qr.wire && !Zr && (this.set("kill", null), this.set("tier", null), this.set("death", null)), this.set("hud", {
          wire: rr,
          endsAt: (0, Mr.b)(rr[4], Zr ? Qr.endsAt : 0),
          spawnProtectionEndsAt: 0 === rr[13] ? 0 : (0, Mr.b)(rr[13], Qr.spawnProtectionEndsAt)
        })
      }
      receiveEvent(rr) {
        const Sr = {
          seq: ++this.seq,
          at: performance.now()
        };
        switch (rr[0]) {
          case "kill":
            this.set("kill", {
              ...Sr,
              wire: rr
            });
            break;
          case "tier":
            this.set("tier", {
              ...Sr,
              wire: rr
            });
            break;
          case "death":
            this.set("death", {
              ...Sr,
              wire: rr
            })
        }
      }
      set(rr, Sr) {
        this.slices[rr] = Sr, Ir.i.Jp(Gr(rr), Sr, !0)
      }
    }

    function Ar(rr, Sr) {
      return (0, Cr.b)(Gr(Sr), (() => rr.get(Sr)))
    }
    const Vr = ["Red", "Blue"],
      ir = {
        streak: `${Tr}scoreIs_streak`,
        diamonds: `${Tr}scoreIs_diamonds`,
        kills: `${Tr}scoreIs_kills`
      };

    function wr(rr) {
      var Sr;
      let {
        store: Qr,
        variation: Zr
      } = rr;
      const {
        t: Wr
      } = (0, nr.E)(), ar = Ar(Qr, "leaderboard"), jr = Ar(Qr, "hud"), [, Ir = "lobby", , Er = "normal", , , pr = "", , , xr = null] = null !== (Sr = jr.wire) && void 0 !== Sr ? Sr : [], zr = (0, Yr.h)("match" === Ir ? jr.endsAt : 0), er = (0, Nr.j)("players").localId, Kr = "tdm" === Zr, yr = "normal" === Er ? null : lr[Er], vr = "Blue" === pr ? [...Vr].reverse() : Vr, Or = rr => "tdm" !== (null === xr || void 0 === xr ? void 0 : xr[0]) ? 0 : "Red" === rr ? xr[1] : xr[2];
      return (0, Br.jsx)(hr.b, {
        close: fr.m,
        togglePointerLock: !1,
        className: "ShootingBoardOverlay",
        children: (0, Br.jsxs)("section", {
          className: mr()("ShootingBoard", {
            ShootingBoardFfa: !Kr
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "shootingBoardTitle",
          children: [(0, Br.jsxs)("header", {
            className: "ShootingBoardHeader",
            children: [(0, Br.jsxs)("h2", {
              id: "shootingBoardTitle",
              className: "SmallTextBold",
              children: [(0, Br.jsx)(Ur.c, {
                name: "list"
              }), Wr(Kr ? `${Tr}teamDeathmatch` : `${Tr}freeForAll`)]
            }), (0, Br.jsxs)("div", {
              className: "ShootingBoardMeta SmallTextBold",
              children: [yr && (0, Br.jsx)("span", {
                children: Wr(yr)
              }), "match" === Ir && (0, Br.jsxs)("span", {
                children: [(0, Br.jsx)(Ur.c, {
                  name: "stopwatch"
                }), " ", (0, Yr.c)(zr)]
              })]
            }), (0, Br.jsx)(tr.l, {
              className: "ShootingBoardClose",
              onClick: fr.m
            })]
          }), (0, Br.jsxs)("div", {
            className: "ShootingBoardColumns",
            children: [Kr && vr.map((rr => (0, Br.jsx)(cr, {
              title: Wr(Lr[rr]),
              team: {
                id: rr,
                score: Or(rr),
                mine: rr === pr
              },
              rows: ar.filter((Sr => Sr[2] === rr)),
              localId: er
            }, rr))), !Kr && (0, Br.jsx)(cr, {
              title: Wr(`${Tr}players`),
              team: null,
              rows: ar,
              localId: er
            })]
          }), (0, Br.jsxs)("footer", {
            className: "ShootingBoardFooter SmallTextBold",
            children: [(0, Br.jsx)("span", {
              children: Wr(ir[Hr(Er)])
            }), (0, Br.jsx)("span", {
              children: Wr(`${Tr}kdLegend`)
            })]
          })]
        })
      })
    }

    function cr(rr) {
      let {
        title: Sr,
        team: Qr,
        rows: Zr,
        localId: Wr
      } = rr;
      const {
        t: ar
      } = (0, nr.E)(), jr = qr(), Ir = [{
        key: "name",
        header: (0, Br.jsxs)("span", {
          className: "ShootingBoardTeam",
          children: [(0, Br.jsxs)("span", {
            children: [Sr, (null === Qr || void 0 === Qr ? void 0 : Qr.mine) && (0, Br.jsxs)("span", {
              className: "ShootingBoardYou",
              children: [" \xb7 ", ar(`${Tr}you`)]
            })]
          }), Qr && (0, Br.jsx)("b", {
            children: Qr.score
          })]
        })
      }, {
        key: "kills",
        header: (0, Br.jsx)("abbr", {
          title: ar(`${Tr}kills`),
          children: ar(`${Tr}killsShort`)
        })
      }, {
        key: "deaths",
        header: (0, Br.jsx)("abbr", {
          title: ar(`${Tr}deaths`),
          children: ar(`${Tr}deathsShort`)
        })
      }, {
        key: "score",
        header: ar(`${Tr}score`)
      }];
      return (0, Br.jsx)("div", {
        className: "ShootingBoardColumn",
        style: Qr ? Or(Qr.id, "tdm") : void 0,
        children: (0, Br.jsx)(zr.b, {
          className: mr()("ShootingBoardTable", {
            Team: Qr
          }),
          columns: Ir,
          rows: Zr,
          getRowKey: rr => rr[0],
          renderRow: (rr, Sr) => {
            const [Zr, ar, Ir, fr, Er, pr, xr] = rr, Nr = Sr + 1;
            return (0, Br.jsxs)("tr", {
              className: mr()({
                Mine: Zr === Wr,
                Dead: !xr
              }),
              style: Qr ? void 0 : Or(Ir, "ffa"),
              children: [(0, Br.jsx)("td", {
                children: (0, Br.jsxs)("span", {
                  className: "ShootingBoardName",
                  children: [!Qr && (0, Br.jsx)("span", {
                    className: mr()("ShootingBoardPlace", `Place${Nr}`),
                    children: Nr
                  }), (0, Br.jsx)(Rr, {
                    playerId: Zr
                  }), (0, Br.jsx)("span", {
                    className: "ShootingBoardNameText",
                    children: jr(ar)
                  })]
                })
              }), (0, Br.jsx)("td", {
                children: fr
              }), (0, Br.jsx)("td", {
                children: Er
              }), (0, Br.jsx)("td", {
                className: "ShootingBoardScore",
                children: pr
              })]
            })
          }
        })
      })
    }
    var Fr = Qr(38154),
      or = Qr(38214),
      br = Qr(26),
      Jr = Qr(5731),
      Dr = Qr(2132),
      dr = Qr(5308),
      sr = Qr(3640),
      ur = Qr(1573),
      rS = Qr(1597),
      SS = Qr(40092);
    const QS = "shooting:vote";
    class ZS {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SS.c;
        this.Jp = rr, this.sendCommand = Sr, this.pacer = Qr, this.view = {
          hidden: !1,
          pending: null
        }, this.unsent = !1, this.cardsKey = "", this.pendingTimer = null, this.unsubscribePacer = void 0, this.vote = rr => {
          this.unsent = !0, this.set({
            ...this.view,
            pending: rr
          }), this.flush()
        }, this.setHidden = rr => {
          this.set({
            ...this.view,
            hidden: rr
          })
        }, this.flush = () => {
          const rr = this.view.pending;
          this.unsent && null !== rr && this.pacer.tryStart() && (this.unsent = !1, this.sendCommand(`mapvote ${rr}`), this.clearPendingTimer(), this.pendingTimer = setTimeout((() => {
            this.pendingTimer = null, this.unsent || this.view.pending !== rr || this.set({
              ...this.view,
              pending: null
            })
          }), 5e3))
        }, this.unsubscribePacer = Qr.subscribe(this.flush)
      }
      getView() {
        return this.view
      }
      onLobby(rr) {
        const Sr = "lobby" === rr[0] ? rr[9] : [],
          Qr = Sr.map((rr => rr[0])).join("\n");
        if (Qr !== this.cardsKey) return this.cardsKey = Qr, this.unsent = !1, void this.set({
          hidden: !1,
          pending: null
        });
        const Zr = this.view.pending;
        if (null === Zr) return;
        const Wr = Sr.find((rr => rr[0] === Zr));
        (!Wr || Wr[6] && !this.unsent) && (this.unsent = !1, this.set({
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
      set(rr) {
        this.view = rr, this.Jp(rr)
      }
    }
    const WS = "ShootingVoteStripOpen";

    function aS(rr) {
      var Sr, Qr, Wr, ar, Ir;
      let {
        maps: fr,
        votes: Er
      } = rr;
      const {
        t: pr
      } = (0, nr.E)(), xr = (0, ur.g)(QS, Er.getView()), {
        isTouchScreen: Nr,
        openInGameMenuName: tr,
        openEverythingMenuName: hr
      } = (0, br.n)(["isTouchScreen", "openInGameMenuName", "openEverythingMenuName"]), zr = null !== tr || null !== hr, Yr = (0, sr.b)();
      (0, dr.b)(!0, !Nr && !xr.hidden && !zr && !Yr, "shootingVoteStrip", !0), (0, Zr.useEffect)((() => {
        if (!xr.hidden && !Nr) return document.body.classList.add(WS), () => {
          document.body.classList.remove(WS)
        }
      }), [xr.hidden, Nr]);
      const er = null !== (Sr = null !== (Qr = xr.pending) && void 0 !== Qr ? Qr : null === (Wr = fr.find((rr => rr[6]))) || void 0 === Wr ? void 0 : Wr[0]) && void 0 !== Sr ? Sr : null,
        Kr = null !== (ar = null === (Ir = fr.find((rr => rr[0] === er))) || void 0 === Ir ? void 0 : Ir[1]) && void 0 !== ar ? ar : null;
      return xr.hidden ? (0, Br.jsxs)("button", {
        type: "button",
        className: "ShootingVoteChip",
        "data-over-keys": "",
        ...(0, rS.g)((() => {
          Er.setHidden(!1)
        }), "pointerup"),
        children: [(0, Br.jsx)("span", {
          className: "ShootingVoteChipLabel",
          children: pr("shootingLobby:mapVote")
        }), (0, Br.jsx)("span", {
          className: "ShootingVoteChipVote",
          children: null !== Kr && void 0 !== Kr ? Kr : pr("shootingLobby:notVoted")
        }), !Nr && (0, Br.jsxs)("span", {
          className: "ShootingVoteChipShop",
          children: [pr("shootingLobby:voteInShop"), (0, Br.jsx)(Dr.c, {
            noaAction: "OpenShop",
            padHidesKey: !0
          })]
        }), (0, Br.jsx)(Ur.c, {
          name: "angle-up"
        })]
      }) : (0, Br.jsxs)("div", {
        className: mr()("ShootingVoteStrip", {
          Touch: Nr
        }),
        "data-over-keys": "",
        children: [(0, Br.jsxs)("div", {
          className: "ShootingVoteHeader",
          children: [(0, Br.jsx)("span", {
            className: "ShootingVoteTitle",
            children: pr("shootingLobby:voteTitle")
          }), (0, Br.jsx)("span", {
            className: "ShootingVoteHint",
            children: pr("shootingLobby:voteHint")
          }), (0, Br.jsxs)("button", {
            type: "button",
            className: "ShootingVoteHide",
            ...(0, rS.g)((() => {
              Er.setHidden(!0)
            }), "pointerup"),
            children: [pr("shootingLobby:hide"), (0, Br.jsx)(Ur.c, {
              name: "angle-down"
            })]
          })]
        }), (0, Br.jsx)("div", {
          className: "ShootingVoteCards",
          children: fr.map(((rr, Sr) => (0, Br.jsx)(jS, {
            map: rr,
            chance: jr(fr, Sr),
            mine: er === rr[0],
            onVote: Er.vote,
            showHeads: !Nr
          }, rr[0])))
        })]
      })
    }

    function jS(rr) {
      let {
        map: Sr,
        chance: Qr,
        mine: Wr,
        onVote: ar,
        showHeads: jr
      } = rr;
      const {
        t: Ir
      } = (0, nr.E)(), [fr, Er, pr, xr, Nr, tr, , hr, zr] = Sr, [Yr, er] = (0, Zr.useState)(!1);
      return (0, Br.jsxs)("button", {
        type: "button",
        className: mr()("ShootingMapCard", {
          Mine: Wr
        }),
        "aria-pressed": Wr,
        ...(0, rS.g)((() => {
          Wr || ar(fr)
        }), "pointerup"),
        children: [(0, Br.jsxs)("div", {
          className: "ShootingMapCardImage",
          children: [null !== zr && (0, Br.jsx)(Jr.e, {
            game: {
              schematicId: zr
            }
          }), null === zr && !Yr && (0, Br.jsx)("img", {
            alt: "",
            src: `/textures/games/shooting/${pr}`,
            onError: () => {
              er(!0)
            }
          }), Nr && (0, Br.jsx)("span", {
            className: "ShootingMapCardNew",
            children: Ir("shootingLobby:new")
          }), "normal" !== xr && (0, Br.jsx)("span", {
            className: "ShootingMapCardMutation",
            children: Ir(lr[xr])
          }), Wr && (0, Br.jsx)("span", {
            className: "ShootingMapCardCheck",
            children: (0, Br.jsx)(Ur.c, {
              name: "check"
            })
          })]
        }), (0, Br.jsxs)("div", {
          className: "ShootingMapCardInfo",
          children: [(0, Br.jsx)("span", {
            className: "ShootingMapCardName",
            children: Er
          }), (0, Br.jsxs)("span", {
            className: "ShootingMapCardVotes",
            children: [tr, (0, Br.jsx)(Ur.c, {
              name: "user"
            })]
          })]
        }), (0, Br.jsx)("div", {
          className: "ShootingMapCardBar",
          children: (0, Br.jsx)("i", {
            style: {
              width: `${Qr}%`
            }
          })
        }), (0, Br.jsxs)("div", {
          className: "ShootingMapCardFooter",
          children: [jr && (0, Br.jsx)(IS, {
            voters: hr
          }), (0, Br.jsx)("span", {
            className: "ShootingMapCardChance",
            children: Ir("shootingLobby:chance", {
              percent: Qr
            })
          })]
        })]
      })
    }

    function IS(rr) {
      let {
        voters: Sr
      } = rr;
      const Qr = (0, Nr.j)("players");
      return (0, Br.jsx)("span", {
        className: "ShootingMapCardHeads",
        children: Sr.slice(0, 8).map((rr => {
          var Sr;
          return (null === (Sr = Qr.byId[rr]) || void 0 === Sr ? void 0 : Sr.cosmetics) && (0, Br.jsx)(Rr, {
            playerId: rr
          }, rr)
        }))
      })
    }

    function fS(rr) {
      let {
        store: Sr,
        votes: Qr,
        variation: Zr
      } = rr;
      const Wr = Ar(Sr, "lobby"),
        ar = (0, Nr.j)("localPlayerAlive"),
        jr = (0, Nr.f)("connectedGame", (rr => rr.replay));
      if ("lobby" !== Wr.wire[0] || jr) return null;
      const Ir = Wr.wire;
      return (0, Br.jsxs)(Br.Fragment, {
        children: [(0, Br.jsx)(ES, {
          wire: Ir,
          startsAt: Wr.startsAt,
          variation: Zr
        }), ar && Ir[9].length > 0 && (0, Br.jsx)(Fr.d, {
          children: (0, Br.jsx)(aS, {
            maps: Ir[9],
            votes: Qr
          })
        })]
      })
    }
    const ES = (0, Zr.memo)((function(rr) {
      let {
        wire: Sr,
        startsAt: Qr,
        variation: Wr
      } = rr;
      const {
        t: ar
      } = (0, nr.E)(), [jr, Ir] = (0, Zr.useState)(null), [fr, Er] = (0, Zr.useState)(null), pr = (0, or.l)(jr, fr), [, xr, , mr, Nr, tr, hr, zr, Yr] = Sr, {
        isTouchScreen: er
      } = (0, br.n)(["isTouchScreen"]);
      return (0, Br.jsx)("div", {
        ref: Er,
        className: "ShootingLobbyStatusContainer",
        style: null === pr ? void 0 : {
          top: pr
        },
        children: (0, Br.jsxs)("div", {
          ref: Ir,
          className: "ShootingLobbyStatus",
          children: [(0, Br.jsx)(pS, {
            waiting: "waiting" === xr,
            startsAt: Qr
          }), "tdm" === Wr && (0, Br.jsxs)("div", {
            className: "ShootingLobbyTeams",
            children: [(0, Br.jsx)(xS, {
              team: "Blue",
              count: hr,
              cap: zr,
              mine: "Blue" === Yr
            }), (0, Br.jsx)("span", {
              className: "ShootingLobbyTeamHint",
              children: ar(er ? "shootingLobby:teamHintTouch" : "" === Yr ? "shootingLobby:teamHintPick" : "shootingLobby:teamHintSwitch")
            }), (0, Br.jsx)(xS, {
              team: "Red",
              count: tr,
              cap: zr,
              mine: "Red" === Yr
            })]
          }), "ffa" === Wr && (0, Br.jsx)("div", {
            className: "ShootingLobbyTeams",
            children: (0, Br.jsxs)("span", {
              className: "ShootingLobbyPlayers",
              children: [(0, Br.jsx)(Ur.c, {
                name: "user-group"
              }), ar("shootingLobby:players", {
                count: mr,
                max: Nr
              })]
            })
          })]
        })
      })
    }));

    function pS(rr) {
      let {
        waiting: Sr,
        startsAt: Qr
      } = rr;
      const {
        t: Zr
      } = (0, nr.E)(), Wr = (0, Yr.h)(Sr ? 0 : Qr);
      return (0, Br.jsxs)("div", {
        className: "ShootingLobbyCountdown",
        children: [Sr && (0, Br.jsx)("span", {
          className: "ShootingLobbyCountdownLabel",
          children: Zr("shootingLobby:waiting")
        }), !Sr && (0, Br.jsxs)(Br.Fragment, {
          children: [(0, Br.jsx)("span", {
            className: "ShootingLobbyCountdownLabel",
            children: Zr("shootingLobby:startingIn")
          }), (0, Br.jsx)("span", {
            className: mr()("ShootingLobbyCountdownTime", {
              Soon: Wr < 10
            }),
            children: (0, Yr.c)(Wr)
          })]
        })]
      })
    }

    function xS(rr) {
      let {
        team: Sr,
        count: Qr,
        cap: Zr,
        mine: Wr
      } = rr;
      const {
        t: ar
      } = (0, nr.E)();
      return (0, Br.jsxs)("span", {
        className: mr()("ShootingLobbyTeam", {
          Mine: Wr,
          Full: Qr >= Zr
        }),
        style: Or(Sr, "tdm"),
        children: [ar(Lr[Sr]), (0, Br.jsx)("span", {
          className: "ShootingLobbyTeamCount",
          children: ar("shootingLobby:teamCount", {
            count: Qr,
            cap: Zr
          })
        })]
      })
    }
    var mS = Qr(38075),
      NS = Qr(1885),
      US = Qr(2075);
    const tS = "--cubeWarfareKillfeedOffset",
      hS = (0, Zr.memo)((function(rr) {
        let {
          wire: Sr,
          endsAt: Qr,
          leaderboard: Wr
        } = rr;
        const {
          t: ar
        } = (0, nr.E)(), {
          isTouchScreen: jr
        } = (0, br.n)(["isTouchScreen"]), [Ir, fr] = (0, Zr.useState)(null), [Er, pr] = (0, Zr.useState)(null), xr = (0, or.l)(Er, Ir, jr);
        ! function(rr, Sr) {
          (0, Zr.useLayoutEffect)((() => {
            if (!rr || null === Sr) return;
            let Qr = null;
            const Zr = rr => {
                Qr = rr, null === rr ? document.body.style.removeProperty(tS) : document.body.style.setProperty(tS, `${rr}px`)
              },
              Wr = () => {
                var Sr;
                const Wr = document.querySelector(".InGameUi .Killfeed");
                if (!Wr) return void Zr(null);
                const ar = .3 * (0, NS.getRemInPx)(),
                  jr = Wr.getBoundingClientRect().top - (null !== (Sr = Qr) && void 0 !== Sr ? Sr : ar);
                Zr(Math.max(Math.ceil(ar), Math.ceil(rr.getBoundingClientRect().bottom + or.c - jr)))
              },
              ar = new ResizeObserver(Wr);
            ar.observe(rr);
            const jr = document.querySelector(`.InGameUi .${or.e}`);
            return jr && ar.observe(jr), Wr(), window.addEventListener("resize", Wr), () => {
              ar.disconnect(), window.removeEventListener("resize", Wr), Zr(null)
            }
          }), [rr, Sr])
        }(Ir, xr);
        const [, , mr, Nr, , Ur, tr, hr, zr, Yr, er] = Sr, Kr = Ur > 0 ? ar("cubeWarfareHud:firstTo", {
          target: Ur
        }) : ar("cubeWarfareHud:timeLeft");
        return (0, Br.jsxs)("div", {
          ref: fr,
          className: "CubeWarfareScoreBarContainer",
          style: null === xr ? void 0 : {
            top: xr
          },
          children: [(0, Br.jsxs)("div", {
            ref: pr,
            className: "CubeWarfareScoreBar",
            children: ["tdm" === Yr[0] && (0, Br.jsx)(YS, {
              myTeam: tr,
              redScore: Yr[1],
              blueScore: Yr[2],
              leaderboard: Wr,
              target: "diamonds" === Nr ? Ur : 0,
              clock: (0, Br.jsx)(zS, {
                endsAt: Qr,
                label: Kr
              })
            }), "ffa" === Yr[0] && (0, Br.jsx)(nS, {
              myTeam: tr,
              myScore: zr,
              myRank: Yr[1],
              playerCount: Yr[2],
              leader: Yr[3],
              second: Yr[4],
              spectating: hr,
              target: Ur,
              clock: (0, Br.jsx)(zS, {
                endsAt: Qr,
                label: Kr
              })
            })]
          }), null !== er && (0, Br.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, Br.jsx)("span", {
              children: ar("cubeWarfareHud:gungameKills", {
                kills: er[0],
                target: Ur
              })
            }), "" !== er[2] && (0, Br.jsxs)(Br.Fragment, {
              children: [(0, Br.jsx)("span", {
                "aria-hidden": !0,
                children: "\xb7"
              }), (0, Br.jsx)("span", {
                children: ar("cubeWarfareHud:nextWeapon")
              }), (0, Br.jsx)("span", {
                className: "CubeWarfareScoreLineItem",
                children: (0, Br.jsx)(US.d, {
                  itemName: er[2],
                  amount: 0,
                  gunTransform: "none"
                })
              })]
            })]
          }), null === er && "diamonds" === Nr && (0, Br.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, Br.jsx)("span", {
              className: "CubeWarfareScoreLineItem",
              children: (0, Br.jsx)(US.d, {
                itemName: "Diamond",
                amount: 0
              })
            }), (0, Br.jsx)("span", {
              children: ar("cubeWarfareHud:collectDiamonds")
            })]
          }), null === er && "diamonds" !== Nr && "tdm" === mr && !hr && (0, Br.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, Br.jsx)("span", {
              children: ar("cubeWarfareHud:yourScore")
            }), (0, Br.jsx)("b", {
              children: zr
            })]
          })]
        })
      }));

    function zS(rr) {
      let {
        endsAt: Sr,
        label: Qr
      } = rr;
      const Zr = (0, Yr.h)(Sr);
      return (0, Br.jsxs)("div", {
        className: "CubeWarfareClock",
        children: [(0, Br.jsx)("div", {
          className: mr()("CubeWarfareClockTime", {
            Urgent: Zr < 60
          }),
          children: (0, Yr.c)(Zr)
        }), (0, Br.jsx)("div", {
          className: "CubeWarfareClockLabel",
          children: Qr
        })]
      })
    }

    function YS(rr) {
      const {
        t: Sr
      } = (0, nr.E)(), Qr = Sr => rr.leaderboard.filter((rr => rr[2] === Sr)), Zr = {
        team: "Red",
        name: Sr(Lr.Red),
        score: rr.redScore,
        members: Qr("Red")
      }, Wr = {
        team: "Blue",
        name: Sr(Lr.Blue),
        score: rr.blueScore,
        members: Qr("Blue")
      }, [ar, jr] = "Blue" === rr.myTeam ? [Wr, Zr] : [Zr, Wr], Ir = (Qr, Zr) => (0, Br.jsxs)("div", {
        className: mr()("CubeWarfareSide", Zr, `Team-${Qr.team}`, {
          Mine: Qr.team === rr.myTeam
        }),
        style: Or(Qr.team, "tdm"),
        children: [Qr.team === rr.myTeam && (0, Br.jsx)("span", {
          className: "CubeWarfareYouTag",
          children: Sr("shootingOverlays:you")
        }), (0, Br.jsx)("div", {
          className: "CubeWarfareHeads",
          children: Qr.members.map((rr => {
            let [Sr, , , , , , Qr] = rr;
            return (0, Br.jsx)("span", {
              className: mr()("CubeWarfareHead", {
                Dead: !Qr
              }),
              children: (0, Br.jsx)(Rr, {
                playerId: Sr
              })
            }, Sr)
          }))
        }), (0, Br.jsxs)("div", {
          className: "CubeWarfareSideText",
          children: [(0, Br.jsx)("div", {
            className: "CubeWarfareSideName",
            children: (0, Br.jsx)("span", {
              className: "CubeWarfareSideLabel",
              children: Qr.name
            })
          }), (0, Br.jsx)("div", {
            className: "CubeWarfareSideScore SmallTextBold",
            children: Qr.score
          })]
        }), (0, Br.jsx)(eS, {
          score: Qr.score,
          target: rr.target
        })]
      });
      return (0, Br.jsxs)(Br.Fragment, {
        children: [Ir(ar, "Left"), rr.clock, Ir(jr, "Right")]
      })
    }

    function nS(rr) {
      var Sr;
      const {
        t: Qr
      } = (0, nr.E)(), Zr = qr(), Wr = null !== (Sr = rr.second) && void 0 !== Sr ? Sr : rr.spectating || rr.playerCount > 1 ? rr.leader : null;
      return (0, Br.jsxs)(Br.Fragment, {
        children: [!rr.spectating && (0, Br.jsxs)("div", {
          className: mr()("CubeWarfareSide", "Left", "Mine", "Ffa"),
          style: {
            "--team": (0, er.hb)(rr.myTeam)
          },
          children: [(0, Br.jsx)("span", {
            className: "CubeWarfareYouTag",
            children: Qr("shootingOverlays:you")
          }), (0, Br.jsxs)("div", {
            className: "CubeWarfareSideText",
            children: [(0, Br.jsx)("div", {
              className: "CubeWarfareSideName",
              children: (0, Br.jsx)("span", {
                className: "CubeWarfareSideLabel",
                children: Qr("cubeWarfareHud:rank", {
                  rank: rr.myRank
                })
              })
            }), (0, Br.jsx)("div", {
              className: "CubeWarfareSideScore SmallTextBold",
              children: rr.myScore
            })]
          }), (0, Br.jsx)(eS, {
            score: rr.myScore,
            target: rr.target
          })]
        }), rr.clock, null !== Wr && (0, Br.jsxs)("div", {
          className: mr()("CubeWarfareSide", "Right", "Ffa"),
          children: [(0, Br.jsxs)("div", {
            className: "CubeWarfareSideText",
            children: [(0, Br.jsxs)("div", {
              className: "CubeWarfareSideName",
              children: [(0, Br.jsx)("span", {
                className: "CubeWarfareSideLabel",
                children: null !== rr.second ? Qr("cubeWarfareHud:second") : Qr("cubeWarfareHud:leader")
              }), (0, Br.jsx)("span", {
                className: "CubeWarfareSideWho",
                children: Zr(Wr[1])
              })]
            }), (0, Br.jsx)("div", {
              className: "CubeWarfareSideScore SmallTextBold",
              children: Wr[2]
            })]
          }), (0, Br.jsx)(eS, {
            score: Wr[2],
            target: rr.target
          })]
        })]
      })
    }

    function eS(rr) {
      let {
        score: Sr,
        target: Qr
      } = rr;
      return (0, Br.jsx)("div", {
        className: mr()("CubeWarfareStrip", {
          Progress: Qr > 0
        }),
        children: Qr > 0 && (0, Br.jsx)("i", {
          style: {
            transform: `scaleX(${Math.min(1,Sr/Qr)})`
          }
        })
      })
    }
    const KS = (0, Zr.memo)((function(rr) {
      let {
        wire: Sr
      } = rr;
      const {
        isTouchScreen: Qr
      } = (0, br.n)(["isTouchScreen"]);
      return Qr ? (0, Br.jsx)("div", {
        className: "CubeWarfarePerkColumnTouch",
        children: (0, Br.jsx)(yS, {
          wire: Sr,
          touch: !0
        })
      }) : (0, Br.jsx)(Fr.d, {
        placement: "bottomLeft",
        children: (0, Br.jsx)(yS, {
          wire: Sr
        })
      })
    }));

    function yS(rr) {
      let {
        wire: Sr,
        touch: Qr = !1
      } = rr;
      const {
        t: Zr
      } = (0, nr.E)(), Wr = Sr[11], ar = Sr[12], jr = ar.findIndex((rr => {
        let [, Sr] = rr;
        return Wr < Sr
      }));
      return (0, Br.jsxs)("div", {
        className: "CubeWarfarePerkColumn",
        children: [(0, Br.jsxs)("div", {
          className: "CubeWarfarePerkPoints SmallTextBold",
          children: [(0, Br.jsx)(Ur.c, {
            name: "crosshairs"
          }), Wr]
        }), ar.map(((rr, Sr) => {
          let [Ir, fr, Er, pr, xr] = rr;
          const Nr = Wr >= fr,
            tr = 0 === Sr ? 0 : ar[Sr - 1][1],
            hr = Nr ? 1 : Sr === jr ? Math.max(0, (Wr - tr) / (fr - tr)) : 0;
          return (0, Br.jsxs)("div", {
            className: mr()("CubeWarfarePerk", {
              Active: xr,
              Reached: Nr,
              Next: Sr === jr
            }),
            children: [(0, Br.jsxs)("div", {
              className: "CubeWarfarePerkTile",
              children: [!Nr && (0, Br.jsx)("div", {
                className: "CubeWarfarePerkFill",
                style: {
                  transform: `scaleY(${hr})`
                }
              }), (0, Br.jsx)(Ur.c, {
                name: pr || "lock"
              })]
            }), (0, Br.jsxs)("div", {
              className: "CubeWarfarePerkText SmallTextBold",
              children: [(0, Br.jsx)("span", {
                className: "CubeWarfarePerkName",
                children: Er || Zr("cubeWarfareHud:tier", {
                  tier: Ir
                })
              }), (0, Br.jsxs)("small", {
                children: [Nr && Zr(xr ? "cubeWarfareHud:active" : "cubeWarfareHud:noPerk"), !Nr && !Qr && Zr("cubeWarfareHud:toGo", {
                  count: fr - Wr
                }), !Nr && Qr && (0, Br.jsxs)(Br.Fragment, {
                  children: [(0, Br.jsx)(Ur.c, {
                    name: "crosshairs"
                  }), " ", fr]
                })]
              })]
            })]
          }, Ir)
        }))]
      })
    }

    function BS(rr) {
      const [, Sr] = (0, Zr.useReducer)((rr => rr + 1), 0);
      (0, Zr.useEffect)((() => {
        const Qr = rr - performance.now();
        if (0 === rr || Qr <= 0) return;
        const Zr = window.setTimeout(Sr, Qr);
        return () => {
          window.clearTimeout(Zr)
        }
      }), [rr])
    }
    const TS = ["", "", "cubeWarfareHud:doubleKill", "cubeWarfareHud:tripleKill", "cubeWarfareHud:quadKill", "cubeWarfareHud:rampage"];

    function vS(rr) {
      let {
        store: Sr
      } = rr;
      const Qr = XS(Ar(Sr, "kill"), 2500),
        Zr = qr();
      return Qr ? (0, Br.jsx)(LS, {
        victimName: Zr(Qr.wire[2]),
        headshot: Qr.wire[4],
        killsThisLife: Qr.wire[5],
        gold: Qr.wire[6]
      }, Qr.seq) : null
    }

    function OS(rr) {
      let {
        store: Sr
      } = rr;
      const Qr = XS(Ar(Sr, "tier"), 3500);
      return Qr ? (0, Br.jsx)(lS, {
        tier: Qr.wire[1],
        perk: Qr.wire[2],
        icon: Qr.wire[3]
      }, Qr.seq) : null
    }

    function LS(rr) {
      let {
        victimName: Sr,
        headshot: Qr,
        killsThisLife: Zr,
        gold: Wr
      } = rr;
      const {
        t: ar
      } = (0, nr.E)(), jr = TS[Math.min(Zr, TS.length - 1)];
      return (0, Br.jsxs)("div", {
        className: "CubeWarfareKillPop",
        children: [jr && (0, Br.jsx)("div", {
          className: "CubeWarfareMultiKill SmallTextBold",
          children: ar(jr)
        }), (0, Br.jsxs)("div", {
          className: "CubeWarfareKillLine SmallTextBold",
          children: [(0, Br.jsx)("span", {
            className: "CubeWarfareKillTag",
            children: ar("cubeWarfareHud:eliminated")
          }), (0, Br.jsx)("span", {
            className: "CubeWarfareKillName",
            children: Sr
          })]
        }), (0, Br.jsxs)("div", {
          className: "CubeWarfareKillRewards",
          children: [Wr > 0 && (0, Br.jsxs)("span", {
            className: "CubeWarfareReward Gold SmallTextBold",
            children: [`+${Wr}`, (0, Br.jsx)(Ur.c, {
              name: "coins",
              className: "CubeWarfareCoin"
            })]
          }), Qr && (0, Br.jsxs)("span", {
            className: "CubeWarfareReward Headshot SmallTextBold",
            children: [(0, Br.jsx)(Ur.c, {
              name: "crosshairs"
            }), ar("shootingOverlays:headshot")]
          })]
        })]
      })
    }

    function lS(rr) {
      let {
        tier: Sr,
        perk: Qr,
        icon: Zr
      } = rr;
      const {
        t: Wr
      } = (0, nr.E)();
      return (0, Br.jsxs)("div", {
        className: "CubeWarfareTierBanner",
        children: [(0, Br.jsx)("div", {
          className: "CubeWarfareTierIcon",
          children: (0, Br.jsx)(Ur.c, {
            name: Zr || "crosshairs"
          })
        }), (0, Br.jsxs)("div", {
          children: [(0, Br.jsx)("div", {
            className: "CubeWarfareTierTitle",
            children: Wr("cubeWarfareHud:tierReached", {
              tier: Sr
            })
          }), (0, Br.jsx)("div", {
            className: "CubeWarfareTierPerk SmallTextBold",
            children: Qr ? Wr("cubeWarfareHud:perkActive", {
              perk: Qr
            }) : Wr("cubeWarfareHud:noPerk")
          })]
        })]
      })
    }

    function XS(rr, Sr) {
      return BS(rr ? rr.at + Sr : 0), rr && performance.now() - rr.at < Sr ? rr : null
    }
    var PS = Qr(3404);

    function HS() {
      var rr, Sr;
      const Qr = null === (rr = (0, PS.l)("currencyAmounts")) || void 0 === rr || null === (Sr = rr.gold) || void 0 === Sr ? void 0 : Sr.amount,
        [Wr, ar] = (0, Zr.useState)(0),
        jr = (0, Zr.useRef)(Qr);
      return (0, Zr.useEffect)((() => {
        void 0 !== Qr && void 0 !== jr.current && Qr > jr.current && ar((rr => rr + 1)), jr.current = Qr
      }), [Qr]), void 0 === Qr ? null : (0, Br.jsx)(Fr.d, {
        placement: "statBars",
        children: (0, Br.jsxs)("div", {
          className: mr()("CubeWarfareWallet SmallTextBold", {
            Bump: Wr > 0
          }),
          children: [(0, Br.jsx)(Ur.c, {
            name: "coins",
            className: "CubeWarfareCoin"
          }), Qr]
        }, Wr)
      })
    }

    function qS(rr) {
      let {
        endsAt: Sr
      } = rr;
      return 0 === Sr ? null : (0, Br.jsx)(gS, {
        endsAt: Sr
      }, Sr)
    }

    function RS(rr) {
      let {
        endsAt: Sr
      } = rr;
      return BS(Sr), Sr <= performance.now() ? null : (0, Br.jsx)("div", {
        className: "CubeWarfareProtectionEdge"
      })
    }

    function gS(rr) {
      let {
        endsAt: Sr
      } = rr;
      const {
        t: Qr
      } = (0, nr.E)(), [Wr] = (0, Zr.useState)((() => Math.max(0, Sr - performance.now())));
      return BS(Sr), Sr <= performance.now() ? null : (0, Br.jsxs)("div", {
        className: "CubeWarfareProtection",
        children: [(0, Br.jsx)(Ur.c, {
          name: "shield-halved",
          className: "CubeWarfareProtectionIcon"
        }), (0, Br.jsxs)("div", {
          className: "CubeWarfareProtectionText SmallTextBold",
          children: [Qr("cubeWarfareHud:spawnProtected"), (0, Br.jsx)("small", {
            children: Qr("cubeWarfareHud:spawnProtectedHint")
          })]
        }), (0, Br.jsx)("div", {
          className: "CubeWarfareProtectionDrain",
          style: {
            "--cubeWarfareDrainMs": `${Wr}ms`
          }
        })]
      })
    }

    function CS(rr) {
      let {
        place: Sr,
        hidden: Qr = !1,
        children: Zr
      } = rr;
      return "OverHotbar" !== Sr ? (0, Br.jsx)("div", {
        className: mr()("CubeWarfareCentreSlot", Sr, {
          Hidden: Qr
        }),
        children: Zr
      }) : (0, Br.jsx)(Fr.d, {
        children: (0, Br.jsx)("div", {
          className: "CubeWarfareOverHotbar",
          children: (0, Br.jsx)("div", {
            className: "CubeWarfareCentreSlot OverHotbar",
            children: Zr
          })
        })
      })
    }
    const MS = rr => {
      var Sr;
      const Qr = null === (Sr = rr.attributes.customAttributes) || void 0 === Sr ? void 0 : Sr.shotsLeft;
      return "number" === typeof Qr && rr.clipSize ? (0, Br.jsx)(GS, {
        item: rr,
        shotsLeft: Qr,
        clipSize: rr.clipSize
      }) : null
    };

    function GS(rr) {
      let {
        item: Sr,
        shotsLeft: Qr,
        clipSize: Wr
      } = rr;
      const {
        t: ar
      } = (0, nr.E)(), jr = function(rr, Sr, Qr) {
        const [Wr, ar] = (0, Zr.useState)(null), jr = (0, Zr.useRef)(rr), Ir = (0, Zr.useRef)(0);
        return (0, ur.c)("middleScreenBarInitiate", (rr => {
          let {
            duration: Qr
          } = rr;
          Qr >= 400 && jr.current < Sr && ar({
            key: ++Ir.current,
            ms: Qr
          })
        })), (0, ur.c)("middleScreenBarRemove", (() => {
          ar(null)
        })), (0, Zr.useEffect)((() => {
          const Sr = rr > jr.current;
          jr.current = rr, Sr && ar(null)
        }), [rr]), (0, Zr.useEffect)((() => {
          ar(null)
        }), [Qr]), (0, Zr.useEffect)((() => {
          if (!Wr) return;
          const rr = window.setTimeout((() => {
            ar(null)
          }), Wr.ms);
          return () => {
            window.clearTimeout(rr)
          }
        }), [Wr]), Wr
      }(Qr, Wr, Sr.instance), Ir = Qr <= Math.ceil(.25 * Wr);
      return (0, Br.jsx)(Fr.d, {
        placement: "statBars",
        children: (0, Br.jsxs)("div", {
          className: mr()("CubeWarfareAmmo", {
            Low: Ir,
            Reloading: null !== jr
          }),
          children: [null === jr && (0, Br.jsxs)(Br.Fragment, {
            children: [(0, Br.jsx)("span", {
              className: "CubeWarfareAmmoMag SmallTextBold",
              children: Qr
            }), (0, Br.jsx)("span", {
              className: "CubeWarfareAmmoClip SmallTextBold",
              children: `/ ${Wr}`
            })]
          }), null !== jr && (0, Br.jsxs)("span", {
            className: "CubeWarfareAmmoReloading SmallTextBold",
            children: [ar("cubeWarfareHud:reloading"), (0, Br.jsx)("i", {
              className: "CubeWarfareAmmoReloadBar",
              style: {
                "--cubeWarfareReloadMs": `${jr.ms}ms`
              }
            }, jr.key)]
          }), (0, Br.jsx)("span", {
            className: "CubeWarfareAmmoGun",
            children: (0, Br.jsx)(US.d, {
              itemName: Sr.name,
              amount: 0,
              gunTransform: "none"
            })
          }), Ir && null === jr && (0, Br.jsx)(Dr.c, {
            noaAction: "ReloadGun",
            className: "CubeWarfareAmmoKey",
            padHidesKey: !0
          })]
        })
      })
    }

    function kS(rr) {
      let {
        store: Sr
      } = rr;
      const Qr = Ar(Sr, "hud"),
        Wr = Ar(Sr, "leaderboard"),
        ar = (0, Nr.f)("connectedGame", (rr => rr.replay));
      ! function(rr) {
        (0, Zr.useEffect)((() => {
          const Sr = (0, mS.t)({
              headshot: (Sr, Qr) => {
                var Zr;
                const Wr = performance.now(),
                  ar = rr.get("killfeed").findLast((rr => {
                    let {
                      at: Zr,
                      wire: ar
                    } = rr;
                    return ar[0] === Sr && ar[1] === Qr && Wr - Zr < 3e3
                  }));
                return null !== (Zr = null === ar || void 0 === ar ? void 0 : ar.wire[3]) && void 0 !== Zr && Zr
              },
              streakLabel: rr => `\xd7${rr}`
            }),
            Qr = (0, mS.q)(MS);
          return () => {
            Sr(), Qr()
          }
        }), [rr])
      }(Sr);
      const jr = Qr.wire;
      if (!jr || "match" !== jr[1] || ar) return null;
      const Ir = !jr[7];
      return (0, Br.jsxs)("div", {
        className: "CubeWarfareHud",
        children: [(0, Br.jsx)(hS, {
          wire: jr,
          endsAt: Qr.endsAt,
          leaderboard: Wr
        }), Ir && (0, Br.jsxs)(Br.Fragment, {
          children: [(0, Br.jsx)(KS, {
            wire: jr
          }), (0, Br.jsx)(AS, {
            store: Sr,
            protectionEndsAt: Qr.spawnProtectionEndsAt
          }), (0, Br.jsx)(HS, {}), (0, Br.jsx)(RS, {
            endsAt: Qr.spawnProtectionEndsAt
          })]
        })]
      })
    }

    function AS(rr) {
      let {
        store: Sr,
        protectionEndsAt: Qr
      } = rr;
      const {
        isTouchScreen: Zr
      } = (0, br.n)(["isTouchScreen"]), Wr = (0, ur.g)("aimingOverlay", "none"), ar = (0, Br.jsx)(qS, {
        endsAt: Qr
      }), jr = (0, Br.jsx)(OS, {
        store: Sr
      }), Ir = (0, Br.jsx)(vS, {
        store: Sr
      });
      if (!Zr) return (0, Br.jsxs)(CS, {
        place: "OverHotbar",
        children: [ar, jr, Ir]
      });
      const fr = "sniper" === Wr;
      return (0, Br.jsxs)(Br.Fragment, {
        children: [(0, Br.jsxs)(CS, {
          place: "AboveCrosshair",
          hidden: fr,
          children: [ar, Ir]
        }), (0, Br.jsx)(CS, {
          place: "BelowCrosshair",
          hidden: fr,
          children: jr
        })]
      })
    }
    var VS = Qr(360);
    const iS = 2 * Math.PI * 19;

    function wS(rr) {
      var Sr, Qr;
      let {
        store: Wr,
        variation: ar,
        state: jr
      } = rr;
      const {
        t: Ir
      } = (0, nr.E)(), fr = Ar(Wr, "death"), Er = Ar(Wr, "leaderboard"), pr = qr(), xr = (0, Zr.useRef)(performance.now()), mr = (0, Zr.useRef)(jr.alive);
      !jr.alive && mr.current && (xr.current = performance.now()), mr.current = jr.alive;
      const Nr = (0, Zr.useRef)(null);
      fr && fr.at >= xr.current - 3e3 && (Nr.current = {
        diedAt: xr.current,
        wire: fr.wire
      });
      const hr = (null === (Sr = Nr.current) || void 0 === Sr ? void 0 : Sr.diedAt) === xr.current ? Nr.current.wire : null,
        [, zr, Yr, er, Kr, yr, Or, Lr, lr] = null !== hr && void 0 !== hr ? hr : [],
        Xr = "player" === zr && "" !== Yr,
        Pr = null === (Qr = Er.find((rr => rr[0] === Yr))) || void 0 === Qr ? void 0 : Qr[2];
      return (0, Br.jsxs)("div", {
        className: "ShootingDeathCard",
        style: {
          "--killer": Xr && Pr ? vr(Pr, ar) : void 0
        },
        children: [(0, Br.jsxs)("div", {
          className: "ShootingDeathKiller",
          children: [Xr && (0, Br.jsx)("div", {
            className: "ShootingDeathHead",
            children: (0, Br.jsx)(Rr, {
              playerId: Yr
            })
          }), !Xr && (0, Br.jsx)("div", {
            className: "ShootingDeathHead ShootingDeathSkull",
            children: (0, Br.jsx)(Ur.c, {
              name: "skull"
            })
          }), (0, Br.jsxs)("div", {
            className: "ShootingDeathWho",
            children: [Xr && (0, Br.jsxs)(Br.Fragment, {
              children: [(0, Br.jsx)("div", {
                className: "ShootingDeathEyebrow SmallTextBold",
                children: Ir(`${Tr}killedBy`)
              }), (0, Br.jsx)("div", {
                className: "ShootingDeathName FullyFancyText",
                children: pr(null !== er && void 0 !== er ? er : "")
              })]
            }), !Xr && (0, Br.jsx)("div", {
              className: "ShootingDeathName FullyFancyText",
              children: Ir(cS(zr))
            }), Kr && (0, Br.jsxs)("div", {
              className: "ShootingDeathWeapon SmallTextBold",
              children: [(0, Br.jsx)("span", {
                className: "ShootingDeathGun",
                children: (0, Br.jsx)(US.d, {
                  itemName: Kr,
                  amount: 0,
                  gunTransform: "none"
                })
              }), (0, Br.jsx)("span", {
                children: Kr
              }), yr && (0, Br.jsxs)("span", {
                className: "ShootingDeathHeadshot",
                children: [(0, Br.jsx)(Ur.c, {
                  name: "crosshairs"
                }), " ", Ir(`${Tr}headshot`)]
              })]
            })]
          }), (0, Br.jsx)(FS, {
            secondsLeft: jr.secondsLeft,
            totalSeconds: jr.totalSeconds,
            alive: jr.alive
          })]
        }), hr && (0, Br.jsxs)("div", {
          className: "ShootingDeathLife",
          children: [(0, Br.jsx)(gr, {
            value: String(Or),
            label: Ir(`${Tr}killsThisLife`)
          }), (0, Br.jsx)(gr, {
            icon: "crosshairs",
            value: String(Lr),
            label: Ir(`${Tr}streakPoints`)
          }), (0, Br.jsx)(gr, {
            icon: "coins",
            value: `+${lr}`,
            label: Ir(`${Tr}goldEarned`),
            gold: !0
          })]
        }), (0, Br.jsxs)("div", {
          className: "ShootingDeathActions",
          children: [(0, Br.jsx)(tr.h, {
            className: "ShootingDeathLoadout",
            onClick: () => {
              br.c.set({
                openEverythingMenuName: VS.q.SHOP
              })
            },
            touchPressOn: "pointerup",
            children: (0, Br.jsxs)("span", {
              className: "ShootingDeathLoadoutText",
              children: [Ir(`${Tr}changeLoadout`), (0, Br.jsx)(Dr.c, {
                noaAction: "OpenShop",
                padHidesKey: !0
              })]
            })
          }), (0, Br.jsx)("div", {
            className: "ShootingDeathStatus FullyFancyText",
            children: jr.status
          })]
        })]
      })
    }

    function cS(rr) {
      switch (rr) {
        case "self":
          return `${Tr}diedSelf`;
        case "void":
          return `${Tr}diedVoid`;
        default:
          return "respawnPage:youDied"
      }
    }

    function FS(rr) {
      let {
        secondsLeft: Sr,
        totalSeconds: Qr,
        alive: Zr
      } = rr;
      const Wr = Zr || Sr <= 0,
        ar = Qr > 0 ? Math.min(1, Sr / Qr) : 0;
      return (0, Br.jsxs)("div", {
        className: "ShootingDeathRing",
        children: [(0, Br.jsxs)("svg", {
          viewBox: "0 0 44 44",
          children: [(0, Br.jsx)("circle", {
            className: "ShootingDeathRingTrack",
            cx: "22",
            cy: "22",
            r: 19
          }), (0, Br.jsx)("circle", {
            className: "ShootingDeathRingFill",
            cx: "22",
            cy: "22",
            r: 19,
            strokeDasharray: iS,
            strokeDashoffset: iS * (1 - (Wr ? 0 : ar))
          })]
        }), (0, Br.jsxs)("b", {
          className: "FullyFancyText",
          children: [Wr && (0, Br.jsx)(Ur.c, {
            name: "check"
          }), !Wr && Sr]
        })]
      })
    }
    const oS = [1, 0, 2],
      bS = [`${Tr}place1`, `${Tr}place2`, `${Tr}place3`],
      JS = [`${Tr}place1Short`, `${Tr}place2Short`, `${Tr}place3Short`],
      DS = {
        streak: `${Tr}reasonTimeUp_streak`,
        diamonds: `${Tr}reasonTimeUp_diamonds`,
        kills: `${Tr}reasonTimeUp_kills`
      },
      dS = {
        streak: null,
        diamonds: `${Tr}reasonTarget_diamonds`,
        kills: `${Tr}reasonTarget_kills`
      };

    function sS(rr) {
      let {
        store: Sr
      } = rr;
      const Qr = Ar(Sr, "roundEnd"),
        Zr = Ar(Sr, "hud").wire,
        Wr = (0, Nr.j)("localPlayerAlive"),
        ar = (0, Yr.h)(Qr.lobbyAt),
        jr = (0, Nr.f)("connectedGame", (rr => rr.replay));
      return "roundEnd" !== Qr.wire[0] || !Zr || !Wr || ar <= 0 || jr ? null : (0, Br.jsx)(uS, {
        wire: Qr.wire,
        hud: Zr,
        lobbyAt: Qr.lobbyAt,
        secondsLeft: ar
      }, Qr.lobbyAt)
    }
    const uS = (0, Zr.memo)((function(rr) {
      let {
        wire: Sr,
        hud: Qr,
        lobbyAt: Wr,
        secondsLeft: ar
      } = rr;
      const {
        t: jr
      } = (0, nr.E)(), [Ir] = (0, Zr.useState)((() => Math.max(0, Wr - performance.now()))), fr = qr(), [, Er, pr, xr, , Nr, Ur, tr, hr, zr, , Yr, er, Kr, yr, vr, lr, Xr] = Sr, [, , Pr, Rr, , Cr, Mr, Gr] = Qr, kr = "tdm" === Pr, Ar = rr => rr === Mr ? jr(`${Tr}teamYours`, {
        team: jr(Lr[rr])
      }) : jr(Lr[rr]);
      return (0, Br.jsxs)("div", {
        className: mr()("ShootingResults", "win" === Er ? "Won" : "Lost"),
        style: {
          "--lobbyMs": `${Xr}ms`,
          "--lobbyElapsedMs": `${Math.max(0,Xr-Ir)}ms`
        },
        children: [(0, Br.jsx)("div", {
          className: "ShootingResultsTitle FullyFancyText",
          children: rQ(jr, Sr, kr, Gr, fr)
        }), (0, Br.jsxs)("div", {
          className: "ShootingResultsScore FullyFancyText",
          children: [kr && (0, Br.jsxs)(Br.Fragment, {
            children: [(0, Br.jsx)("span", {
              className: "ShootingResultsTeam",
              children: Ar("Red")
            }), (0, Br.jsx)("b", {
              style: Or("Red", "tdm"),
              children: tr
            }), (0, Br.jsx)("span", {
              className: "ShootingResultsDash",
              children: "\u2013"
            }), (0, Br.jsx)("b", {
              style: Or("Blue", "tdm"),
              children: hr
            }), (0, Br.jsx)("span", {
              className: "ShootingResultsTeam",
              children: Ar("Blue")
            })]
          }), !kr && ("win" === Er || "" !== Nr) && (0, Br.jsxs)(Br.Fragment, {
            children: [(0, Br.jsx)("span", {
              className: "ShootingResultsTeam",
              children: "win" === Er ? jr(`${Tr}youWonWith`) : jr(`${Tr}playerWonWith`, {
                name: fr(Nr)
              })
            }), (0, Br.jsx)("b", {
              style: Or(xr, "ffa"),
              children: zr
            })]
          })]
        }), (0, Br.jsx)("div", {
          className: "ShootingResultsWhy SmallTextBold",
          children: SQ(jr, Ur, kr, Hr(Rr), Cr)
        }), Yr.length > 0 && (0, Br.jsx)("div", {
          className: "ShootingResultsPodium",
          children: oS.filter((rr => rr < Yr.length)).map((rr => (0, Br.jsx)(QQ, {
            entry: Yr[rr],
            place: rr,
            mvp: Yr[rr][0] === er,
            tdm: kr
          }, rr)))
        }), !Gr && (0, Br.jsxs)("div", {
          className: "ShootingResultsYou",
          children: [(0, Br.jsx)(gr, {
            value: String(Kr),
            label: jr(`${Tr}kills`)
          }), (0, Br.jsx)(gr, {
            value: String(yr),
            label: jr(`${Tr}deaths`)
          }), (0, Br.jsx)(gr, {
            icon: "crosshairs",
            value: String(vr),
            label: jr(`${Tr}bestStreak`)
          }), (0, Br.jsx)(gr, {
            icon: "coins",
            value: `+${lr}`,
            label: jr(`${Tr}goldEarned`),
            gold: !0
          })]
        }), (0, Br.jsxs)("div", {
          className: "ShootingResultsNext SmallTextBold",
          children: [(0, Br.jsx)("span", {
            children: jr(`${Tr}backToLobby`, {
              seconds: String(ar)
            })
          }), (0, Br.jsx)("span", {
            className: "ShootingResultsBar",
            children: (0, Br.jsx)("i", {})
          })]
        })]
      })
    }));

    function rQ(rr, Sr, Qr, Zr, Wr) {
      const [, ar, jr, Ir, , fr] = Sr;
      return Zr && Qr ? rr(`${Tr}teamWins`, {
        team: Xr(Ir) ? rr(Lr[Ir]) : Ir
      }) : Zr ? "" === fr ? rr(`${Tr}matchOver`) : rr(`${Tr}playerWins`, {
        name: Wr(fr)
      }) : "win" === ar ? rr(`${Tr}victory`) : Qr || 0 === jr ? rr(`${Tr}defeat`) : jr <= bS.length ? rr(bS[jr - 1]) : rr(`${Tr}placeNth`, {
        place: String(jr)
      })
    }

    function SQ(rr, Sr, Qr, Zr, Wr) {
      switch (Sr) {
        case "timeUp":
          return rr(DS[Zr]);
        case "target": {
          const Sr = dS[Zr];
          return Sr && Wr > 0 ? rr(Sr, {
            target: String(Wr)
          }) : rr(`${Tr}reasonTarget`)
        }
        case "lastTeam":
          return rr(Qr ? `${Tr}reasonLastTeam` : `${Tr}reasonLastPlayer`)
      }
    }

    function QQ(rr) {
      let {
        entry: Sr,
        place: Qr,
        mvp: Zr,
        tdm: Wr
      } = rr;
      const {
        t: ar
      } = (0, nr.E)(), jr = qr(), [Ir, fr, Er, pr, xr] = Sr, tr = (0, Nr.j)("players").localId;
      return (0, Br.jsxs)("div", {
        className: mr()("ShootingPodiumCard", `Place${Qr+1}`, {
          Mvp: Zr,
          Mine: Ir === tr,
          Team: Wr
        }),
        style: Wr ? Or(Er, "tdm") : void 0,
        children: [Zr && (0, Br.jsx)("span", {
          className: "ShootingPodiumCrown",
          children: (0, Br.jsx)(Ur.c, {
            name: "crown"
          })
        }), (0, Br.jsx)("div", {
          className: "ShootingPodiumHead",
          children: (0, Br.jsx)(Rr, {
            playerId: Ir
          })
        }), (0, Br.jsxs)("div", {
          className: "ShootingPodiumPlace SmallTextBold",
          children: [ar(JS[Qr]), Zr && ` \xb7 ${ar(`${Tr}mvp`)}`]
        }), (0, Br.jsx)("div", {
          className: "ShootingPodiumName SmallTextBold",
          children: jr(fr)
        }), (0, Br.jsx)("div", {
          className: "ShootingPodiumStats SmallTextBold",
          children: ar(`${Tr}podiumStats`, {
            kills: String(pr),
            score: String(xr)
          })
        })]
      })
    }

    function ZQ(rr) {
      var Sr, Qr;
      let {
        store: Wr,
        variation: ar
      } = rr;
      const jr = "lobby" !== (null !== (Sr = null === (Qr = Ar(Wr, "hud").wire) || void 0 === Qr ? void 0 : Qr[1]) && void 0 !== Sr ? Sr : "lobby");
      return (0, Zr.useEffect)((() => {
        if (!jr) return;
        const rr = (0, fr.A)(fr.y);
        return () => {
          rr(), (0, fr.j)()
        }
      }), [jr]), (0, Zr.useEffect)((() => (0, fr.E)((rr => (0, Br.jsx)(wS, {
        store: Wr,
        variation: ar,
        state: rr
      })))), [Wr, ar]), (0, Br.jsx)(sS, {
        store: Wr
      })
    }

    function WQ(rr) {
      return (0, Br.jsxs)(Br.Fragment, {
        children: [(0, Br.jsx)(kS, {
          ...rr
        }), (0, Br.jsx)(ZQ, {
          ...rr
        }), (0, Br.jsx)(fS, {
          ...rr
        })]
      })
    }
    const aQ = "CubeWarfareUi",
      jQ = "CubeWarfareFfa",
      IQ = function(rr, Sr, Qr, ar) {
        let {
          localPlayerId: jr
        } = ar;
        const xr = new kr,
          mr = "tdm" === Qr ? "tdm" : "ffa";
        let Nr = null,
          Ur = null,
          tr = null;
        return {
          onCreate: rr => {
            document.body.classList.add(aQ), document.body.classList.toggle(jQ, "ffa" === mr), Ur = new pr.d(rr, jr), tr = new ZS((rr => {
              Ir.i.Jp(QS, rr, !0)
            }), (Sr => {
              rr.sendCommand(Sr)
            })), Nr = (0, fr.H)((0, Zr.createElement)(Zr.Fragment, null, (0, Zr.createElement)(Er.b, {
              controller: Ur
            }), (0, Zr.createElement)(WQ, {
              store: xr,
              votes: tr,
              variation: mr
            })), {
              content: (0, Zr.createElement)(wr, {
                store: xr,
                variation: mr
              })
            })
          },
          onClose: () => {
            var rr, Sr, Qr;
            document.body.classList.remove(aQ, jQ), null === (rr = Nr) || void 0 === rr || rr(), Nr = null, null === (Sr = Ur) || void 0 === Sr || Sr.dispose(), Ur = null, null === (Qr = tr) || void 0 === Qr || Qr.dispose(), tr = null
          },
          onAfterRender: (rr, Sr) => {
            var Qr;
            null === (Qr = Ur) || void 0 === Qr || Qr.frame(Sr.cameraHeading)
          },
          onReceivedMessageFromServer: (rr, Sr) => {
            var Qr;
            (xr.vx(rr, Sr), rr === Wr) && (null === (Qr = tr) || void 0 === Qr || Qr.onLobby(xr.get("lobby").wire))
          }
        }
      }
  },
  41055: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(72),
      Wr = Qr(1338);
    const ar = (0, Zr.memo)((function(rr) {
      let {
        controller: Sr
      } = rr;
      return (0, Wr.jsxs)("div", {
        className: "DamageFeedback",
        ref: Sr.bindElement,
        children: [(0, Wr.jsx)("div", {
          className: "DamageFeedbackLow",
          children: (0, Wr.jsx)("div", {
            className: "DamageFeedbackShade"
          })
        }), (0, Wr.jsx)("div", {
          className: "DamageFeedbackArcs"
        })]
      })
    }))
  },
  41046: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir
    });
    var Zr = Qr(34);
    const Wr = "DamageFeedbackArcsShown",
      ar = .45,
      jr = .2;
    class Ir {
      constructor(rr, Sr) {
        let {
          arcs: Qr = !0,
          edgeGlow: Wr = !0,
          lowHealthShade: ar = !0,
          enabled: jr = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.api = rr, this.localPlayerId = Sr, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.AW = 1, this.dead = !1, this.enabled = void 0, this.parts = void 0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = rr => {
          var Sr, Qr;
          this.clearHits(), this.root = rr, this.lowLayer = null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.querySelector(".DamageFeedbackLow")) && void 0 !== Sr ? Sr : null, this.arcLayer = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.querySelector(".DamageFeedbackArcs")) && void 0 !== Qr ? Qr : null, this.showRoot(), this.drawLow()
        }, this.parts = {
          arcs: Qr,
          edgeGlow: Wr,
          lowHealthShade: ar
        }, this.enabled = jr, this.token = Zr.i.subscribe("damagedByOtherPlayer", (rr => {
          let {
            direction: Sr,
            GW: Qr
          } = rr;
          this.onHurt(Sr, Qr)
        })), this.syncHealth(), this.showCustomDamage()
      }
      VK(rr) {
        rr !== this.enabled && (this.enabled = rr, this.showCustomDamage(), rr || this.clearHits(), this.showRoot())
      }
      frame(rr) {
        this.syncHealth(), this.cameraHeading = rr;
        for (const Sr of this.arcs) this.drawArcAngle(Sr)
      }
      dispose() {
        Zr.i.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Wr)
      }
      showCustomDamage() {
        document.body.classList.toggle(Wr, this.enabled && this.parts.arcs)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const rr = this.api.getClientOption(this.localPlayerId, "_health"),
          Sr = this.api.getClientOption(this.localPlayerId, "_shield"),
          Qr = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(rr, this.readHealth) && Object.is(Sr, this.readShield) && Object.is(Qr, this.readMaxHealth)) return;
        if (this.readHealth = rr, this.readShield = Sr, this.readMaxHealth = Qr, null === rr || void 0 === rr || !Qr) return this.lastHealthPool = null, this.maxHealth = null, this.AW = 1, this.dead = !1, void this.drawLow();
        const Zr = rr + (null !== Sr && void 0 !== Sr ? Sr : 0);
        if (null !== this.lastHealthPool && Zr < this.lastHealthPool) {
          const rr = performance.now(),
            Sr = (this.lastHealthPool - Zr) / Qr;
          this.lastDrop = rr - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + Sr,
            at: this.lastDrop.at
          } : {
            frac: Sr,
            at: rr
          }
        }
        this.dead = rr <= 0, this.dead && this.clearHits(), this.lastHealthPool = Zr, this.maxHealth = Qr, this.AW = rr > 0 ? rr / Qr : 1, this.drawLow()
      }
      onHurt(rr, Sr) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const Qr = Math.min(1, this.takeDamageFrac(Sr) / .3);
        null !== rr && this.parts.arcs && this.showArc(rr, Qr), this.parts.edgeGlow && this.flashEdge(null === rr ? null : rr - this.cameraHeading, .4 + .6 * Qr)
      }
      takeDamageFrac(rr) {
        if (void 0 !== rr && this.maxHealth) return rr / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: Sr
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, Sr
      }
      drawLow() {
        if (!this.lowLayer || !this.parts.lowHealthShade) return;
        const rr = Er((ar - this.AW) / .25),
          Sr = Er((jr - this.AW) / .15000000000000002),
          Qr = this.AW < ar;
        this.lowLayer.classList.toggle("Active", Qr), this.lowLayer.classList.toggle("Critical", this.AW < jr), this.lowLayer.style.opacity = String(Qr ? .55 + .3 * rr + .15 * Sr : 0)
      }
      showArc(rr, Sr) {
        var Qr, Zr;
        if (!this.arcLayer) return;
        let Wr = this.arcs.find((Sr => fr(Sr.direction, rr) < .6));
        if (!Wr) {
          const Sr = document.createElement("div");
          Sr.className = "DamageFeedbackArc", Sr.appendChild(document.createElement("div")).className = "DamageFeedbackArcBand", this.arcLayer.appendChild(Sr), Wr = {
            element: Sr,
            direction: rr,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Wr)
        }
        Wr.direction = rr, this.drawArcAngle(Wr);
        const ar = Wr.fade ? Number(getComputedStyle(Wr.element).opacity) : 0;
        null === (Qr = Wr.fade) || void 0 === Qr || Qr.cancel(), null === (Zr = Wr.pop) || void 0 === Zr || Zr.cancel(), Wr.element.style.opacity = "1";
        const jr = Wr.element.animate([{
          opacity: ar
        }, {
          opacity: 1
        }], 144);
        Wr.fade = jr, Wr.pop = Wr.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * Sr
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const Ir = Wr;
        jr.onfinish = () => {
          if (Ir.fade !== jr) return;
          const rr = Ir.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          rr.startTime = jr.startTime, Ir.fade = rr, rr.onfinish = () => {
            Ir.fade === rr && (Ir.element.remove(), pr(this.arcs, Ir))
          }
        }
      }
      drawArcAngle(rr) {
        const Sr = rr.direction - this.cameraHeading;
        (null === rr.drawnAngle || Math.abs(Sr - rr.drawnAngle) > .005) && (rr.drawnAngle = Sr, rr.element.style.rotate = `${Sr}rad`)
      }
      flashEdge(rr, Sr) {
        var Qr, Zr, Wr;
        if (!this.root) return;
        let ar = this.flashes.find((Sr => null === Sr.angle || null === rr ? Sr.angle === rr : fr(Sr.angle, rr) < .5));
        if (!ar) {
          const Sr = document.createElement("div");
          Sr.className = "DamageFeedbackFlash";
          const Qr = Sr.appendChild(document.createElement("div"));
          Qr.className = "DamageFeedbackFlashGlow", this.root.insertBefore(Sr, this.arcLayer), ar = {
            element: Sr,
            glow: Qr,
            angle: rr,
            level: 0,
            animation: null
          }, this.flashes.push(ar)
        }
        const jr = null === (Qr = ar.animation) || void 0 === Qr || null === (Zr = Qr.effect) || void 0 === Zr ? void 0 : Zr.getComputedTiming().progress,
          Ir = null === jr || void 0 === jr ? 0 : ar.level * (1 - jr);
        ar.level = Math.min(1, Math.max(Sr, Ir + .6 * Sr)), ar.angle = rr;
        const {
          x: Er,
          y: xr,
          rx: mr,
          ry: Nr
        } = function(rr, Sr) {
          const Qr = window.innerWidth,
            Zr = window.innerHeight;
          if (null === rr) return {
            x: Qr / 2,
            y: Zr / 2,
            rx: 0,
            ry: 0
          };
          const Wr = Math.sin(rr),
            ar = -Math.cos(rr),
            jr = Qr / 2 / Math.max(1e-6, Math.abs(Wr)),
            Ir = Zr / 2 / Math.max(1e-6, Math.abs(ar)),
            fr = Math.min(jr, Ir),
            Er = Math.round(Qr / 2 + Wr * fr),
            pr = Math.round(Zr / 2 + ar * fr),
            xr = Zr / 100 * (.85 + .25 * Sr),
            mr = jr <= Ir,
            Nr = Math.round((mr ? 30 : 74) * xr),
            Ur = Math.round((mr ? 58 : 26) * xr);
          return {
            x: Er,
            y: pr,
            rx: Nr,
            ry: Ur
          }
        }(rr, ar.level), {
          style: Ur
        } = ar.glow;
        ar.glow.classList.toggle("Everywhere", null === rr), Ur.setProperty("--glowX", `${Er}px`), Ur.setProperty("--glowY", `${xr}px`), Ur.setProperty("--glowRx", `${mr}px`), Ur.setProperty("--glowRy", `${Nr}px`), ar.element.style.transformOrigin = `${Er}px ${xr}px`, null === (Wr = ar.animation) || void 0 === Wr || Wr.cancel();
        const tr = ar.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: ar.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * ar.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * ar.level
        });
        ar.animation = tr;
        const hr = ar;
        tr.onfinish = () => {
          hr.animation === tr && (hr.element.remove(), pr(this.flashes, hr))
        }
      }
      clearHits() {
        for (const Zr of this.arcs) {
          var rr, Sr;
          null === (rr = Zr.fade) || void 0 === rr || rr.cancel(), Zr.fade = null, null === (Sr = Zr.pop) || void 0 === Sr || Sr.cancel(), Zr.element.remove()
        }
        this.arcs.length = 0;
        for (const Zr of this.flashes) {
          var Qr;
          null === (Qr = Zr.animation) || void 0 === Qr || Qr.cancel(), Zr.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function fr(rr, Sr) {
      return Math.abs(Math.atan2(Math.sin(rr - Sr), Math.cos(rr - Sr)))
    }

    function Er(rr) {
      return Math.max(0, Math.min(1, rr))
    }

    function pr(rr, Sr) {
      const Qr = rr.indexOf(Sr); - 1 !== Qr && rr.splice(Qr, 1)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);