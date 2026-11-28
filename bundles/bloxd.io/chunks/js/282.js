export const id = 282;
export const ids = [282];
export const modules = {
  40831: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    const eb = 1e3;

    function Hb(bb, wb) {
      const Mb = performance.now() + bb;
      return 0 !== wb && Math.abs(Mb - wb) < eb ? wb : Mb
    }
  },
  41009: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => lM
    });
    var eb = Mb(64);
    const Hb = "shootingLobby",
      pb = {
        Red: "#fc6464",
        Blue: "#4f94f1"
      };

    function Vb(bb, wb) {
      const Mb = bb.reduce(((bb, wb) => bb + wb[5]), 0);
      return 0 === Mb ? 0 === bb.length ? 0 : Math.round(100 / bb.length) : Math.round(bb[wb][5] / Mb * 100)
    }
    var gb = Mb(29),
      lb = Mb(3531),
      Lb = Mb(40829),
      Ib = Mb(40827),
      Ob = Mb(1159),
      Ub = Mb.n(Ob),
      tb = Mb(2183),
      Cb = Mb(1475),
      Eb = Mb(1616),
      Fb = Mb(5384),
      Bb = Mb(5822),
      sb = Mb(37923),
      mb = Mb(1259),
      hb = Mb(382),
      zb = Mb(3402),
      Xb = Mb(1329),
      xb = Mb(1364);
    const jb = "shootingOverlays:";

    function Kb(bb, wb) {
      var Mb;
      return "tdm" === wb && cb(bb) ? pb[bb] : null !== (Mb = (0, hb.yb)(bb)) && void 0 !== Mb ? Mb : "#ffffff"
    }

    function rb(bb, wb) {
      return {
        "--team": Kb(bb, wb)
      }
    }
    const Rb = {
        Red: `${jb}teamRed`,
        Blue: `${jb}teamBlue`
      },
      Db = {
        diamonds: `${jb}mutation_diamonds`,
        explosives: `${jb}mutation_explosives`,
        gungame: `${jb}mutation_gungame`
      };

    function cb(bb) {
      return Object.hasOwn(pb, bb)
    }
    const Yb = {
      normal: "streak",
      explosives: "streak",
      diamonds: "diamonds",
      gungame: "kills"
    };

    function Zb(bb) {
      return Yb[bb]
    }

    function fb() {
      const bb = (0, tb.h)("hiddenPlayerNames");
      return (0, eb.useCallback)((wb => "" === wb ? "" : (0, Xb.c)(wb, bb)), [bb])
    }

    function Ab(bb) {
      var wb;
      let {
        playerId: Mb
      } = bb;
      const eb = null === (wb = (0, tb.h)("players").byId[Mb]) || void 0 === wb ? void 0 : wb.cosmetics;
      return (0, xb.jsx)(zb.e, {
        cosmetics: null !== eb && void 0 !== eb ? eb : {}
      })
    }

    function Wb(bb) {
      let {
        icon: wb,
        value: Mb,
        label: eb,
        gold: Hb = !1
      } = bb;
      return (0, xb.jsxs)("div", {
        className: "ShootingStat",
        children: [(0, xb.jsxs)("b", {
          className: Ub()("FullyFancyText", {
            Gold: Hb
          }),
          children: [wb && (0, xb.jsx)(Cb.b, {
            name: wb
          }), Mb]
        }), (0, xb.jsx)("span", {
          className: "SmallTextBold",
          children: eb
        })]
      })
    }
    var Jb = Mb(1557),
      Sb = Mb(40831);

    function Nb(bb) {
      return `shooting:${bb}`
    }
    class vb {
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
      get(bb) {
        return this.slices[bb]
      }
      EO(bb, wb) {
        switch (bb) {
          case "shootingHud":
            return this.receiveHud(wb), !0;
          case Hb: {
            const bb = wb;
            return this.set("lobby", {
              wire: bb,
              startsAt: "lobby" === bb[0] ? (0, Sb.b)(bb[2], this.slices.lobby.startsAt) : 0
            }), !0
          }
          case "shootingRoundEnd": {
            const bb = wb;
            return this.set("roundEnd", {
              wire: bb,
              lobbyAt: "roundEnd" === bb[0] ? performance.now() + bb[17] : 0
            }), !0
          }
          case "shootingLeaderboard":
            return this.set("leaderboard", wb), !0;
          case "shootingKillfeed": {
            const bb = {
              seq: ++this.seq,
              at: performance.now(),
              wire: wb
            };
            return this.set("killfeed", [...this.slices.killfeed.slice(-11), bb]), !0
          }
          case "shootingEvent":
            return this.receiveEvent(wb), !0;
          default:
            return !1
        }
      }
      receiveHud(bb) {
        var wb;
        const Mb = this.slices.hud,
          eb = (null === (wb = Mb.wire) || void 0 === wb ? void 0 : wb[1]) === bb[1];
        Mb.wire && !eb && (this.set("kill", null), this.set("tier", null), this.set("death", null)), this.set("hud", {
          wire: bb,
          endsAt: (0, Sb.b)(bb[4], eb ? Mb.endsAt : 0),
          spawnProtectionEndsAt: 0 === bb[13] ? 0 : (0, Sb.b)(bb[13], Mb.spawnProtectionEndsAt)
        })
      }
      receiveEvent(bb) {
        const wb = {
          seq: ++this.seq,
          at: performance.now()
        };
        switch (bb[0]) {
          case "kill":
            this.set("kill", {
              ...wb,
              wire: bb
            });
            break;
          case "tier":
            this.set("tier", {
              ...wb,
              wire: bb
            });
            break;
          case "death":
            this.set("death", {
              ...wb,
              wire: bb
            })
        }
      }
      set(bb, wb) {
        this.slices[bb] = wb, gb.k.iI(Nb(bb), wb, !0)
      }
    }

    function Qb(bb, wb) {
      return (0, Jb.b)(Nb(wb), (() => bb.get(wb)))
    }
    const Gb = ["Red", "Blue"],
      qb = {
        streak: `${jb}scoreIs_streak`,
        diamonds: `${jb}scoreIs_diamonds`,
        kills: `${jb}scoreIs_kills`
      };

    function ab(bb) {
      var wb;
      let {
        store: Mb,
        variation: eb
      } = bb;
      const {
        t: Hb
      } = (0, mb.C)(), pb = Qb(Mb, "leaderboard"), Vb = Qb(Mb, "hud"), [, gb = "lobby", , Lb = "normal", , , Ib = "", , , Ob = null] = null !== (wb = Vb.wire) && void 0 !== wb ? wb : [], Bb = (0, sb.i)("match" === gb ? Vb.endsAt : 0), hb = (0, tb.h)("players").localId, zb = "tdm" === eb, Xb = "normal" === Lb ? null : Db[Lb], Kb = "Blue" === Ib ? [...Gb].reverse() : Gb, rb = bb => "tdm" !== (null === Ob || void 0 === Ob ? void 0 : Ob[0]) ? 0 : "Red" === bb ? Ob[1] : Ob[2];
      return (0, xb.jsx)(Fb.e, {
        close: lb.o,
        togglePointerLock: !1,
        className: "ShootingBoardOverlay",
        children: (0, xb.jsxs)("section", {
          className: Ub()("ShootingBoard", {
            ShootingBoardFfa: !zb
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "shootingBoardTitle",
          children: [(0, xb.jsxs)("header", {
            className: "ShootingBoardHeader",
            children: [(0, xb.jsxs)("h2", {
              id: "shootingBoardTitle",
              className: "SmallTextBold",
              children: [(0, xb.jsx)(Cb.b, {
                name: "list"
              }), Hb(zb ? `${jb}teamDeathmatch` : `${jb}freeForAll`)]
            }), (0, xb.jsxs)("div", {
              className: "ShootingBoardMeta SmallTextBold",
              children: [Xb && (0, xb.jsx)("span", {
                children: Hb(Xb)
              }), "match" === gb && (0, xb.jsxs)("span", {
                children: [(0, xb.jsx)(Cb.b, {
                  name: "stopwatch"
                }), " ", (0, sb.b)(Bb)]
              })]
            }), (0, xb.jsx)(Eb.l, {
              className: "ShootingBoardClose",
              onClick: lb.o
            })]
          }), (0, xb.jsxs)("div", {
            className: "ShootingBoardColumns",
            children: [zb && Kb.map((bb => (0, xb.jsx)(ib, {
              title: Hb(Rb[bb]),
              team: {
                id: bb,
                score: rb(bb),
                mine: bb === Ib
              },
              rows: pb.filter((wb => wb[2] === bb)),
              localId: hb
            }, bb))), !zb && (0, xb.jsx)(ib, {
              title: Hb(`${jb}players`),
              team: null,
              rows: pb,
              localId: hb
            })]
          }), (0, xb.jsxs)("footer", {
            className: "ShootingBoardFooter SmallTextBold",
            children: [(0, xb.jsx)("span", {
              children: Hb(qb[Zb(Lb)])
            }), (0, xb.jsx)("span", {
              children: Hb(`${jb}kdLegend`)
            })]
          })]
        })
      })
    }

    function ib(bb) {
      let {
        title: wb,
        team: Mb,
        rows: eb,
        localId: Hb
      } = bb;
      const {
        t: pb
      } = (0, mb.C)(), Vb = fb(), gb = [{
        key: "name",
        header: (0, xb.jsxs)("span", {
          className: "ShootingBoardTeam",
          children: [(0, xb.jsxs)("span", {
            children: [wb, (null === Mb || void 0 === Mb ? void 0 : Mb.mine) && (0, xb.jsxs)("span", {
              className: "ShootingBoardYou",
              children: [" \xb7 ", pb(`${jb}you`)]
            })]
          }), Mb && (0, xb.jsx)("b", {
            children: Mb.score
          })]
        })
      }, {
        key: "kills",
        header: (0, xb.jsx)("abbr", {
          title: pb(`${jb}kills`),
          children: pb(`${jb}killsShort`)
        })
      }, {
        key: "deaths",
        header: (0, xb.jsx)("abbr", {
          title: pb(`${jb}deaths`),
          children: pb(`${jb}deathsShort`)
        })
      }, {
        key: "score",
        header: pb(`${jb}score`)
      }];
      return (0, xb.jsx)("div", {
        className: "ShootingBoardColumn",
        style: Mb ? rb(Mb.id, "tdm") : void 0,
        children: (0, xb.jsx)(Bb.c, {
          className: Ub()("ShootingBoardTable", {
            Team: Mb
          }),
          columns: gb,
          rows: eb,
          getRowKey: bb => bb[0],
          renderRow: (bb, wb) => {
            const [eb, pb, gb, lb, Lb, Ib, Ob] = bb, tb = wb + 1;
            return (0, xb.jsxs)("tr", {
              className: Ub()({
                Mine: eb === Hb,
                Dead: !Ob
              }),
              style: Mb ? void 0 : rb(gb, "ffa"),
              children: [(0, xb.jsx)("td", {
                children: (0, xb.jsxs)("span", {
                  className: "ShootingBoardName",
                  children: [!Mb && (0, xb.jsx)("span", {
                    className: Ub()("ShootingBoardPlace", `Place${tb}`),
                    children: tb
                  }), (0, xb.jsx)(Ab, {
                    playerId: eb
                  }), (0, xb.jsx)("span", {
                    className: "ShootingBoardNameText",
                    children: Vb(pb)
                  })]
                })
              }), (0, xb.jsx)("td", {
                children: lb
              }), (0, xb.jsx)("td", {
                children: Lb
              }), (0, xb.jsx)("td", {
                className: "ShootingBoardScore",
                children: Ib
              })]
            })
          }
        })
      })
    }
    var ub = Mb(37898),
      db = Mb(37956),
      Pb = Mb(26),
      nb = Mb(5817),
      yb = Mb(2190),
      ob = Mb(5395),
      Tb = Mb(3778),
      kb = Mb(1611),
      bw = Mb(1646),
      ww = Mb(39819);
    const Mw = "shooting:vote";
    class ew {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ww.d;
        this.iI = bb, this.sendCommand = wb, this.pacer = Mb, this.view = {
          hidden: !1,
          pending: null
        }, this.unsent = !1, this.cardsKey = "", this.pendingTimer = null, this.unsubscribePacer = void 0, this.vote = bb => {
          this.unsent = !0, this.set({
            ...this.view,
            pending: bb
          }), this.flush()
        }, this.setHidden = bb => {
          this.set({
            ...this.view,
            hidden: bb
          })
        }, this.flush = () => {
          const bb = this.view.pending;
          this.unsent && null !== bb && this.pacer.tryStart() && (this.unsent = !1, this.sendCommand(`mapvote ${bb}`), this.clearPendingTimer(), this.pendingTimer = setTimeout((() => {
            this.pendingTimer = null, this.unsent || this.view.pending !== bb || this.set({
              ...this.view,
              pending: null
            })
          }), 5e3))
        }, this.unsubscribePacer = Mb.subscribe(this.flush)
      }
      getView() {
        return this.view
      }
      onLobby(bb) {
        const wb = "lobby" === bb[0] ? bb[9] : [],
          Mb = wb.map((bb => bb[0])).join("\n");
        if (Mb !== this.cardsKey) return this.cardsKey = Mb, this.unsent = !1, void this.set({
          hidden: !1,
          pending: null
        });
        const eb = this.view.pending;
        if (null === eb) return;
        const Hb = wb.find((bb => bb[0] === eb));
        (!Hb || Hb[6] && !this.unsent) && (this.unsent = !1, this.set({
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
      set(bb) {
        this.view = bb, this.iI(bb)
      }
    }
    const Hw = "ShootingVoteStripOpen";

    function pw(bb) {
      var wb, Mb, Hb, pb, gb;
      let {
        maps: lb,
        votes: Lb
      } = bb;
      const {
        t: Ib
      } = (0, mb.C)(), Ob = (0, kb.h)(Mw, Lb.getView()), {
        isTouchScreen: tb,
        openInGameMenuName: Eb,
        openEverythingMenuName: Fb
      } = (0, Pb.o)(["isTouchScreen", "openInGameMenuName", "openEverythingMenuName"]), Bb = null !== Eb || null !== Fb, sb = (0, Tb.b)();
      (0, ob.d)(!0, !tb && !Ob.hidden && !Bb && !sb, "shootingVoteStrip", !0), (0, eb.useEffect)((() => {
        if (!Ob.hidden && !tb) return document.body.classList.add(Hw), () => {
          document.body.classList.remove(Hw)
        }
      }), [Ob.hidden, tb]);
      const hb = null !== (wb = null !== (Mb = Ob.pending) && void 0 !== Mb ? Mb : null === (Hb = lb.find((bb => bb[6]))) || void 0 === Hb ? void 0 : Hb[0]) && void 0 !== wb ? wb : null,
        zb = null !== (pb = null === (gb = lb.find((bb => bb[0] === hb))) || void 0 === gb ? void 0 : gb[1]) && void 0 !== pb ? pb : null;
      return Ob.hidden ? (0, xb.jsxs)("button", {
        type: "button",
        className: "ShootingVoteChip",
        "data-over-keys": "",
        ...(0, bw.e)((() => {
          Lb.setHidden(!1)
        }), "pointerup"),
        children: [(0, xb.jsx)("span", {
          className: "ShootingVoteChipLabel",
          children: Ib("shootingLobby:mapVote")
        }), (0, xb.jsx)("span", {
          className: "ShootingVoteChipVote",
          children: null !== zb && void 0 !== zb ? zb : Ib("shootingLobby:notVoted")
        }), !tb && (0, xb.jsxs)("span", {
          className: "ShootingVoteChipShop",
          children: [Ib("shootingLobby:voteInShop"), (0, xb.jsx)(yb.e, {
            noaAction: "OpenShop",
            padHidesKey: !0
          })]
        }), (0, xb.jsx)(Cb.b, {
          name: "angle-up"
        })]
      }) : (0, xb.jsxs)("div", {
        className: Ub()("ShootingVoteStrip", {
          Touch: tb
        }),
        "data-over-keys": "",
        children: [(0, xb.jsxs)("div", {
          className: "ShootingVoteHeader",
          children: [(0, xb.jsx)("span", {
            className: "ShootingVoteTitle",
            children: Ib("shootingLobby:voteTitle")
          }), (0, xb.jsx)("span", {
            className: "ShootingVoteHint",
            children: Ib("shootingLobby:voteHint")
          }), (0, xb.jsxs)("button", {
            type: "button",
            className: "ShootingVoteHide",
            ...(0, bw.e)((() => {
              Lb.setHidden(!0)
            }), "pointerup"),
            children: [Ib("shootingLobby:hide"), (0, xb.jsx)(Cb.b, {
              name: "angle-down"
            })]
          })]
        }), (0, xb.jsx)("div", {
          className: "ShootingVoteCards",
          children: lb.map(((bb, wb) => (0, xb.jsx)(Vw, {
            map: bb,
            chance: Vb(lb, wb),
            mine: hb === bb[0],
            onVote: Lb.vote,
            showHeads: !tb
          }, bb[0])))
        })]
      })
    }

    function Vw(bb) {
      let {
        map: wb,
        chance: Mb,
        mine: Hb,
        onVote: pb,
        showHeads: Vb
      } = bb;
      const {
        t: gb
      } = (0, mb.C)(), [lb, Lb, Ib, Ob, tb, Eb, , Fb, Bb] = wb, [sb, hb] = (0, eb.useState)(!1);
      return (0, xb.jsxs)("button", {
        type: "button",
        className: Ub()("ShootingMapCard", {
          Mine: Hb
        }),
        "aria-pressed": Hb,
        ...(0, bw.e)((() => {
          Hb || pb(lb)
        }), "pointerup"),
        children: [(0, xb.jsxs)("div", {
          className: "ShootingMapCardImage",
          children: [null !== Bb && (0, xb.jsx)(nb.e, {
            game: {
              schematicId: Bb
            }
          }), null === Bb && !sb && (0, xb.jsx)("img", {
            alt: "",
            src: `/textures/games/shooting/${Ib}`,
            onError: () => {
              hb(!0)
            }
          }), tb && (0, xb.jsx)("span", {
            className: "ShootingMapCardNew",
            children: gb("shootingLobby:new")
          }), "normal" !== Ob && (0, xb.jsx)("span", {
            className: "ShootingMapCardMutation",
            children: gb(Db[Ob])
          }), Hb && (0, xb.jsx)("span", {
            className: "ShootingMapCardCheck",
            children: (0, xb.jsx)(Cb.b, {
              name: "check"
            })
          })]
        }), (0, xb.jsxs)("div", {
          className: "ShootingMapCardInfo",
          children: [(0, xb.jsx)("span", {
            className: "ShootingMapCardName",
            children: Lb
          }), (0, xb.jsxs)("span", {
            className: "ShootingMapCardVotes",
            children: [Eb, (0, xb.jsx)(Cb.b, {
              name: "user"
            })]
          })]
        }), (0, xb.jsx)("div", {
          className: "ShootingMapCardBar",
          children: (0, xb.jsx)("i", {
            style: {
              width: `${Mb}%`
            }
          })
        }), (0, xb.jsxs)("div", {
          className: "ShootingMapCardFooter",
          children: [Vb && (0, xb.jsx)(gw, {
            voters: Fb
          }), (0, xb.jsx)("span", {
            className: "ShootingMapCardChance",
            children: gb("shootingLobby:chance", {
              percent: Mb
            })
          })]
        })]
      })
    }

    function gw(bb) {
      let {
        voters: wb
      } = bb;
      const Mb = (0, tb.h)("players");
      return (0, xb.jsx)("span", {
        className: "ShootingMapCardHeads",
        children: wb.slice(0, 8).map((bb => {
          var wb;
          return (null === (wb = Mb.byId[bb]) || void 0 === wb ? void 0 : wb.cosmetics) && (0, xb.jsx)(Ab, {
            playerId: bb
          }, bb)
        }))
      })
    }

    function lw(bb) {
      let {
        store: wb,
        votes: Mb,
        variation: eb
      } = bb;
      const Hb = Qb(wb, "lobby"),
        pb = (0, tb.h)("localPlayerAlive"),
        Vb = (0, tb.e)("connectedGame", (bb => bb.replay));
      if ("lobby" !== Hb.wire[0] || Vb) return null;
      const gb = Hb.wire;
      return (0, xb.jsxs)(xb.Fragment, {
        children: [(0, xb.jsx)(Lw, {
          wire: gb,
          startsAt: Hb.startsAt,
          variation: eb
        }), pb && gb[9].length > 0 && (0, xb.jsx)(ub.d, {
          children: (0, xb.jsx)(pw, {
            maps: gb[9],
            votes: Mb
          })
        })]
      })
    }
    const Lw = (0, eb.memo)((function(bb) {
      let {
        wire: wb,
        startsAt: Mb,
        variation: Hb
      } = bb;
      const {
        t: pb
      } = (0, mb.C)(), [Vb, gb] = (0, eb.useState)(null), [lb, Lb] = (0, eb.useState)(null), Ib = (0, db.s)(Vb, lb), [, Ob, , Ub, tb, Eb, Fb, Bb, sb] = wb, {
        isTouchScreen: hb
      } = (0, Pb.o)(["isTouchScreen"]);
      return (0, xb.jsx)("div", {
        ref: Lb,
        className: "ShootingLobbyStatusContainer",
        style: null === Ib ? void 0 : {
          top: Ib
        },
        children: (0, xb.jsxs)("div", {
          ref: gb,
          className: "ShootingLobbyStatus",
          children: [(0, xb.jsx)(Iw, {
            waiting: "waiting" === Ob,
            startsAt: Mb
          }), "tdm" === Hb && (0, xb.jsxs)("div", {
            className: "ShootingLobbyTeams",
            children: [(0, xb.jsx)(Ow, {
              team: "Blue",
              count: Fb,
              cap: Bb,
              mine: "Blue" === sb
            }), (0, xb.jsx)("span", {
              className: "ShootingLobbyTeamHint",
              children: pb(hb ? "shootingLobby:teamHintTouch" : "" === sb ? "shootingLobby:teamHintPick" : "shootingLobby:teamHintSwitch")
            }), (0, xb.jsx)(Ow, {
              team: "Red",
              count: Eb,
              cap: Bb,
              mine: "Red" === sb
            })]
          }), "ffa" === Hb && (0, xb.jsx)("div", {
            className: "ShootingLobbyTeams",
            children: (0, xb.jsxs)("span", {
              className: "ShootingLobbyPlayers",
              children: [(0, xb.jsx)(Cb.b, {
                name: "user-group"
              }), pb("shootingLobby:players", {
                count: Ub,
                max: tb
              })]
            })
          })]
        })
      })
    }));

    function Iw(bb) {
      let {
        waiting: wb,
        startsAt: Mb
      } = bb;
      const {
        t: eb
      } = (0, mb.C)(), Hb = (0, sb.i)(wb ? 0 : Mb);
      return (0, xb.jsxs)("div", {
        className: "ShootingLobbyCountdown",
        children: [wb && (0, xb.jsx)("span", {
          className: "ShootingLobbyCountdownLabel",
          children: eb("shootingLobby:waiting")
        }), !wb && (0, xb.jsxs)(xb.Fragment, {
          children: [(0, xb.jsx)("span", {
            className: "ShootingLobbyCountdownLabel",
            children: eb("shootingLobby:startingIn")
          }), (0, xb.jsx)("span", {
            className: Ub()("ShootingLobbyCountdownTime", {
              Soon: Hb < 10
            }),
            children: (0, sb.b)(Hb)
          })]
        })]
      })
    }

    function Ow(bb) {
      let {
        team: wb,
        count: Mb,
        cap: eb,
        mine: Hb
      } = bb;
      const {
        t: pb
      } = (0, mb.C)();
      return (0, xb.jsxs)("span", {
        className: Ub()("ShootingLobbyTeam", {
          Mine: Hb,
          Full: Mb >= eb
        }),
        style: rb(wb, "tdm"),
        children: [pb(Rb[wb]), (0, xb.jsx)("span", {
          className: "ShootingLobbyTeamCount",
          children: pb("shootingLobby:teamCount", {
            count: Mb,
            cap: eb
          })
        })]
      })
    }
    var Uw = Mb(37820),
      tw = Mb(1965),
      Cw = Mb(2130);
    const Ew = "--cubeWarfareKillfeedOffset",
      Fw = (0, eb.memo)((function(bb) {
        let {
          wire: wb,
          endsAt: Mb,
          leaderboard: Hb
        } = bb;
        const {
          t: pb
        } = (0, mb.C)(), {
          isTouchScreen: Vb
        } = (0, Pb.o)(["isTouchScreen"]), [gb, lb] = (0, eb.useState)(null), [Lb, Ib] = (0, eb.useState)(null), Ob = (0, db.s)(Lb, gb, Vb);
        ! function(bb, wb) {
          (0, eb.useLayoutEffect)((() => {
            if (!bb || null === wb) return;
            let Mb = null;
            const eb = bb => {
                Mb = bb, null === bb ? document.body.style.removeProperty(Ew) : document.body.style.setProperty(Ew, `${bb}px`)
              },
              Hb = () => {
                var wb;
                const Hb = document.querySelector(".InGameUi .Killfeed");
                if (!Hb) return void eb(null);
                const pb = .3 * (0, tw.getRemInPx)(),
                  Vb = Hb.getBoundingClientRect().top - (null !== (wb = Mb) && void 0 !== wb ? wb : pb);
                eb(Math.max(Math.ceil(pb), Math.ceil(bb.getBoundingClientRect().bottom + db.e - Vb)))
              },
              pb = new ResizeObserver(Hb);
            pb.observe(bb);
            const Vb = document.querySelector(`.InGameUi .${db.k}`);
            return Vb && pb.observe(Vb), Hb(), window.addEventListener("resize", Hb), () => {
              pb.disconnect(), window.removeEventListener("resize", Hb), eb(null)
            }
          }), [bb, wb])
        }(gb, Ob);
        const [, , Ub, tb, , Cb, Eb, Fb, Bb, sb, hb] = wb, zb = Cb > 0 ? pb("cubeWarfareHud:firstTo", {
          target: Cb
        }) : pb("cubeWarfareHud:timeLeft");
        return (0, xb.jsxs)("div", {
          ref: lb,
          className: "CubeWarfareScoreBarContainer",
          style: null === Ob ? void 0 : {
            top: Ob
          },
          children: [(0, xb.jsxs)("div", {
            ref: Ib,
            className: "CubeWarfareScoreBar",
            children: ["tdm" === sb[0] && (0, xb.jsx)(sw, {
              myTeam: Eb,
              redScore: sb[1],
              blueScore: sb[2],
              leaderboard: Hb,
              target: "diamonds" === tb ? Cb : 0,
              clock: (0, xb.jsx)(Bw, {
                endsAt: Mb,
                label: zb
              })
            }), "ffa" === sb[0] && (0, xb.jsx)(mw, {
              myTeam: Eb,
              myScore: Bb,
              myRank: sb[1],
              playerCount: sb[2],
              leader: sb[3],
              second: sb[4],
              spectating: Fb,
              target: Cb,
              clock: (0, xb.jsx)(Bw, {
                endsAt: Mb,
                label: zb
              })
            })]
          }), null !== hb && (0, xb.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, xb.jsx)("span", {
              children: pb("cubeWarfareHud:gungameKills", {
                kills: hb[0],
                target: Cb
              })
            }), "" !== hb[2] && (0, xb.jsxs)(xb.Fragment, {
              children: [(0, xb.jsx)("span", {
                "aria-hidden": !0,
                children: "\xb7"
              }), (0, xb.jsx)("span", {
                children: pb("cubeWarfareHud:nextWeapon")
              }), (0, xb.jsx)("span", {
                className: "CubeWarfareScoreLineItem",
                children: (0, xb.jsx)(Cw.c, {
                  itemName: hb[2],
                  amount: 0,
                  gunTransform: "none"
                })
              })]
            })]
          }), null === hb && "diamonds" === tb && (0, xb.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, xb.jsx)("span", {
              className: "CubeWarfareScoreLineItem",
              children: (0, xb.jsx)(Cw.c, {
                itemName: "Diamond",
                amount: 0
              })
            }), (0, xb.jsx)("span", {
              children: pb("cubeWarfareHud:collectDiamonds")
            })]
          }), null === hb && "diamonds" !== tb && "tdm" === Ub && !Fb && (0, xb.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, xb.jsx)("span", {
              children: pb("cubeWarfareHud:yourScore")
            }), (0, xb.jsx)("b", {
              children: Bb
            })]
          })]
        })
      }));

    function Bw(bb) {
      let {
        endsAt: wb,
        label: Mb
      } = bb;
      const eb = (0, sb.i)(wb);
      return (0, xb.jsxs)("div", {
        className: "CubeWarfareClock",
        children: [(0, xb.jsx)("div", {
          className: Ub()("CubeWarfareClockTime", {
            Urgent: eb < 60
          }),
          children: (0, sb.b)(eb)
        }), (0, xb.jsx)("div", {
          className: "CubeWarfareClockLabel",
          children: Mb
        })]
      })
    }

    function sw(bb) {
      const {
        t: wb
      } = (0, mb.C)(), Mb = wb => bb.leaderboard.filter((bb => bb[2] === wb)), eb = {
        team: "Red",
        name: wb(Rb.Red),
        score: bb.redScore,
        members: Mb("Red")
      }, Hb = {
        team: "Blue",
        name: wb(Rb.Blue),
        score: bb.blueScore,
        members: Mb("Blue")
      }, [pb, Vb] = "Blue" === bb.myTeam ? [Hb, eb] : [eb, Hb], gb = (Mb, eb) => (0, xb.jsxs)("div", {
        className: Ub()("CubeWarfareSide", eb, `Team-${Mb.team}`, {
          Mine: Mb.team === bb.myTeam
        }),
        style: rb(Mb.team, "tdm"),
        children: [Mb.team === bb.myTeam && (0, xb.jsx)("span", {
          className: "CubeWarfareYouTag",
          children: wb("shootingOverlays:you")
        }), (0, xb.jsx)("div", {
          className: "CubeWarfareHeads",
          children: Mb.members.map((bb => {
            let [wb, , , , , , Mb] = bb;
            return (0, xb.jsx)("span", {
              className: Ub()("CubeWarfareHead", {
                Dead: !Mb
              }),
              children: (0, xb.jsx)(Ab, {
                playerId: wb
              })
            }, wb)
          }))
        }), (0, xb.jsxs)("div", {
          className: "CubeWarfareSideText",
          children: [(0, xb.jsx)("div", {
            className: "CubeWarfareSideName",
            children: (0, xb.jsx)("span", {
              className: "CubeWarfareSideLabel",
              children: Mb.name
            })
          }), (0, xb.jsx)("div", {
            className: "CubeWarfareSideScore SmallTextBold",
            children: Mb.score
          })]
        }), (0, xb.jsx)(hw, {
          score: Mb.score,
          target: bb.target
        })]
      });
      return (0, xb.jsxs)(xb.Fragment, {
        children: [gb(pb, "Left"), bb.clock, gb(Vb, "Right")]
      })
    }

    function mw(bb) {
      var wb;
      const {
        t: Mb
      } = (0, mb.C)(), eb = fb(), Hb = null !== (wb = bb.second) && void 0 !== wb ? wb : bb.spectating || bb.playerCount > 1 ? bb.leader : null;
      return (0, xb.jsxs)(xb.Fragment, {
        children: [!bb.spectating && (0, xb.jsxs)("div", {
          className: Ub()("CubeWarfareSide", "Left", "Mine", "Ffa"),
          style: {
            "--team": (0, hb.yb)(bb.myTeam)
          },
          children: [(0, xb.jsx)("span", {
            className: "CubeWarfareYouTag",
            children: Mb("shootingOverlays:you")
          }), (0, xb.jsxs)("div", {
            className: "CubeWarfareSideText",
            children: [(0, xb.jsx)("div", {
              className: "CubeWarfareSideName",
              children: (0, xb.jsx)("span", {
                className: "CubeWarfareSideLabel",
                children: Mb("cubeWarfareHud:rank", {
                  rank: bb.myRank
                })
              })
            }), (0, xb.jsx)("div", {
              className: "CubeWarfareSideScore SmallTextBold",
              children: bb.myScore
            })]
          }), (0, xb.jsx)(hw, {
            score: bb.myScore,
            target: bb.target
          })]
        }), bb.clock, null !== Hb && (0, xb.jsxs)("div", {
          className: Ub()("CubeWarfareSide", "Right", "Ffa"),
          children: [(0, xb.jsxs)("div", {
            className: "CubeWarfareSideText",
            children: [(0, xb.jsxs)("div", {
              className: "CubeWarfareSideName",
              children: [(0, xb.jsx)("span", {
                className: "CubeWarfareSideLabel",
                children: null !== bb.second ? Mb("cubeWarfareHud:second") : Mb("cubeWarfareHud:leader")
              }), (0, xb.jsx)("span", {
                className: "CubeWarfareSideWho",
                children: eb(Hb[1])
              })]
            }), (0, xb.jsx)("div", {
              className: "CubeWarfareSideScore SmallTextBold",
              children: Hb[2]
            })]
          }), (0, xb.jsx)(hw, {
            score: Hb[2],
            target: bb.target
          })]
        })]
      })
    }

    function hw(bb) {
      let {
        score: wb,
        target: Mb
      } = bb;
      return (0, xb.jsx)("div", {
        className: Ub()("CubeWarfareStrip", {
          Progress: Mb > 0
        }),
        children: Mb > 0 && (0, xb.jsx)("i", {
          style: {
            transform: `scaleX(${Math.min(1,wb/Mb)})`
          }
        })
      })
    }
    const zw = (0, eb.memo)((function(bb) {
      let {
        wire: wb
      } = bb;
      const {
        isTouchScreen: Mb
      } = (0, Pb.o)(["isTouchScreen"]);
      return Mb ? (0, xb.jsx)("div", {
        className: "CubeWarfarePerkColumnTouch",
        children: (0, xb.jsx)(Xw, {
          wire: wb,
          touch: !0
        })
      }) : (0, xb.jsx)(ub.d, {
        placement: "bottomLeft",
        children: (0, xb.jsx)(Xw, {
          wire: wb
        })
      })
    }));

    function Xw(bb) {
      let {
        wire: wb,
        touch: Mb = !1
      } = bb;
      const {
        t: eb
      } = (0, mb.C)(), Hb = wb[11], pb = wb[12], Vb = pb.findIndex((bb => {
        let [, wb] = bb;
        return Hb < wb
      }));
      return (0, xb.jsxs)("div", {
        className: "CubeWarfarePerkColumn",
        children: [(0, xb.jsxs)("div", {
          className: "CubeWarfarePerkPoints SmallTextBold",
          children: [(0, xb.jsx)(Cb.b, {
            name: "crosshairs"
          }), Hb]
        }), pb.map(((bb, wb) => {
          let [gb, lb, Lb, Ib, Ob] = bb;
          const tb = Hb >= lb,
            Eb = 0 === wb ? 0 : pb[wb - 1][1],
            Fb = tb ? 1 : wb === Vb ? Math.max(0, (Hb - Eb) / (lb - Eb)) : 0;
          return (0, xb.jsxs)("div", {
            className: Ub()("CubeWarfarePerk", {
              Active: Ob,
              Reached: tb,
              Next: wb === Vb
            }),
            children: [(0, xb.jsxs)("div", {
              className: "CubeWarfarePerkTile",
              children: [!tb && (0, xb.jsx)("div", {
                className: "CubeWarfarePerkFill",
                style: {
                  transform: `scaleY(${Fb})`
                }
              }), (0, xb.jsx)(Cb.b, {
                name: Ib || "lock"
              })]
            }), (0, xb.jsxs)("div", {
              className: "CubeWarfarePerkText SmallTextBold",
              children: [(0, xb.jsx)("span", {
                className: "CubeWarfarePerkName",
                children: Lb || eb("cubeWarfareHud:tier", {
                  tier: gb
                })
              }), (0, xb.jsxs)("small", {
                children: [tb && eb(Ob ? "cubeWarfareHud:active" : "cubeWarfareHud:noPerk"), !tb && !Mb && eb("cubeWarfareHud:toGo", {
                  count: lb - Hb
                }), !tb && Mb && (0, xb.jsxs)(xb.Fragment, {
                  children: [(0, xb.jsx)(Cb.b, {
                    name: "crosshairs"
                  }), " ", lb]
                })]
              })]
            })]
          }, gb)
        }))]
      })
    }

    function xw(bb) {
      const [, wb] = (0, eb.useReducer)((bb => bb + 1), 0);
      (0, eb.useEffect)((() => {
        const Mb = bb - performance.now();
        if (0 === bb || Mb <= 0) return;
        const eb = window.setTimeout(wb, Mb);
        return () => {
          window.clearTimeout(eb)
        }
      }), [bb])
    }
    const jw = ["", "", "cubeWarfareHud:doubleKill", "cubeWarfareHud:tripleKill", "cubeWarfareHud:quadKill", "cubeWarfareHud:rampage"];

    function Kw(bb) {
      let {
        store: wb
      } = bb;
      const Mb = Yw(Qb(wb, "kill"), 2500),
        eb = fb();
      return Mb ? (0, xb.jsx)(Rw, {
        victimName: eb(Mb.wire[2]),
        headshot: Mb.wire[4],
        killsThisLife: Mb.wire[5],
        gold: Mb.wire[6]
      }, Mb.seq) : null
    }

    function rw(bb) {
      let {
        store: wb
      } = bb;
      const Mb = Yw(Qb(wb, "tier"), 3500);
      return Mb ? (0, xb.jsx)(Dw, {
        tier: Mb.wire[1],
        perk: Mb.wire[2],
        icon: Mb.wire[3]
      }, Mb.seq) : null
    }

    function Rw(bb) {
      let {
        victimName: wb,
        headshot: Mb,
        killsThisLife: eb,
        gold: Hb
      } = bb;
      const {
        t: pb
      } = (0, mb.C)(), Vb = jw[Math.min(eb, jw.length - 1)];
      return (0, xb.jsxs)("div", {
        className: "CubeWarfareKillPop",
        children: [Vb && (0, xb.jsx)("div", {
          className: "CubeWarfareMultiKill SmallTextBold",
          children: pb(Vb)
        }), (0, xb.jsxs)("div", {
          className: "CubeWarfareKillLine SmallTextBold",
          children: [(0, xb.jsx)("span", {
            className: "CubeWarfareKillTag",
            children: pb("cubeWarfareHud:eliminated")
          }), (0, xb.jsx)("span", {
            className: "CubeWarfareKillName",
            children: wb
          })]
        }), (0, xb.jsxs)("div", {
          className: "CubeWarfareKillRewards",
          children: [Hb > 0 && (0, xb.jsxs)("span", {
            className: "CubeWarfareReward Gold SmallTextBold",
            children: [`+${Hb}`, (0, xb.jsx)(Cb.b, {
              name: "coins",
              className: "CubeWarfareCoin"
            })]
          }), Mb && (0, xb.jsxs)("span", {
            className: "CubeWarfareReward Headshot SmallTextBold",
            children: [(0, xb.jsx)(Cb.b, {
              name: "crosshairs"
            }), pb("shootingOverlays:headshot")]
          })]
        })]
      })
    }

    function Dw(bb) {
      let {
        tier: wb,
        perk: Mb,
        icon: eb
      } = bb;
      const {
        t: Hb
      } = (0, mb.C)();
      return (0, xb.jsxs)("div", {
        className: "CubeWarfareTierBanner",
        children: [(0, xb.jsx)("div", {
          className: "CubeWarfareTierIcon",
          children: (0, xb.jsx)(Cb.b, {
            name: eb || "crosshairs"
          })
        }), (0, xb.jsxs)("div", {
          children: [(0, xb.jsx)("div", {
            className: "CubeWarfareTierTitle",
            children: Hb("cubeWarfareHud:tierReached", {
              tier: wb
            })
          }), (0, xb.jsx)("div", {
            className: "CubeWarfareTierPerk SmallTextBold",
            children: Mb ? Hb("cubeWarfareHud:perkActive", {
              perk: Mb
            }) : Hb("cubeWarfareHud:noPerk")
          })]
        })]
      })
    }

    function Yw(bb, wb) {
      return xw(bb ? bb.at + wb : 0), bb && performance.now() - bb.at < wb ? bb : null
    }
    var Zw = Mb(3503);

    function fw() {
      var bb, wb;
      const Mb = null === (bb = (0, Zw.k)("currencyAmounts")) || void 0 === bb || null === (wb = bb.gold) || void 0 === wb ? void 0 : wb.amount,
        [Hb, pb] = (0, eb.useState)(0),
        Vb = (0, eb.useRef)(Mb);
      return (0, eb.useEffect)((() => {
        void 0 !== Mb && void 0 !== Vb.current && Mb > Vb.current && pb((bb => bb + 1)), Vb.current = Mb
      }), [Mb]), void 0 === Mb ? null : (0, xb.jsx)(ub.d, {
        placement: "statBars",
        children: (0, xb.jsxs)("div", {
          className: Ub()("CubeWarfareWallet SmallTextBold", {
            Bump: Hb > 0
          }),
          children: [(0, xb.jsx)(Cb.b, {
            name: "coins",
            className: "CubeWarfareCoin"
          }), Mb]
        }, Hb)
      })
    }

    function Aw(bb) {
      let {
        endsAt: wb
      } = bb;
      return 0 === wb ? null : (0, xb.jsx)(Jw, {
        endsAt: wb
      }, wb)
    }

    function Ww(bb) {
      let {
        endsAt: wb
      } = bb;
      return xw(wb), wb <= performance.now() ? null : (0, xb.jsx)("div", {
        className: "CubeWarfareProtectionEdge"
      })
    }

    function Jw(bb) {
      let {
        endsAt: wb
      } = bb;
      const {
        t: Mb
      } = (0, mb.C)(), [Hb] = (0, eb.useState)((() => Math.max(0, wb - performance.now())));
      return xw(wb), wb <= performance.now() ? null : (0, xb.jsxs)("div", {
        className: "CubeWarfareProtection",
        children: [(0, xb.jsx)(Cb.b, {
          name: "shield-halved",
          className: "CubeWarfareProtectionIcon"
        }), (0, xb.jsxs)("div", {
          className: "CubeWarfareProtectionText SmallTextBold",
          children: [Mb("cubeWarfareHud:spawnProtected"), (0, xb.jsx)("small", {
            children: Mb("cubeWarfareHud:spawnProtectedHint")
          })]
        }), (0, xb.jsx)("div", {
          className: "CubeWarfareProtectionDrain",
          style: {
            "--cubeWarfareDrainMs": `${Hb}ms`
          }
        })]
      })
    }

    function Sw(bb) {
      let {
        place: wb,
        hidden: Mb = !1,
        children: eb
      } = bb;
      return "OverHotbar" !== wb ? (0, xb.jsx)("div", {
        className: Ub()("CubeWarfareCentreSlot", wb, {
          Hidden: Mb
        }),
        children: eb
      }) : (0, xb.jsx)(ub.d, {
        children: (0, xb.jsx)("div", {
          className: "CubeWarfareOverHotbar",
          children: (0, xb.jsx)("div", {
            className: "CubeWarfareCentreSlot OverHotbar",
            children: eb
          })
        })
      })
    }
    const Nw = bb => {
      var wb;
      const Mb = null === (wb = bb.attributes.customAttributes) || void 0 === wb ? void 0 : wb.shotsLeft;
      return "number" === typeof Mb && bb.clipSize ? (0, xb.jsx)(vw, {
        item: bb,
        shotsLeft: Mb,
        clipSize: bb.clipSize
      }) : null
    };

    function vw(bb) {
      let {
        item: wb,
        shotsLeft: Mb,
        clipSize: Hb
      } = bb;
      const {
        t: pb
      } = (0, mb.C)(), Vb = function(bb, wb, Mb) {
        const [Hb, pb] = (0, eb.useState)(null), Vb = (0, eb.useRef)(bb), gb = (0, eb.useRef)(0);
        return (0, kb.e)("middleScreenBarInitiate", (bb => {
          let {
            duration: Mb
          } = bb;
          Mb >= 400 && Vb.current < wb && pb({
            key: ++gb.current,
            ms: Mb
          })
        })), (0, kb.e)("middleScreenBarRemove", (() => {
          pb(null)
        })), (0, eb.useEffect)((() => {
          const wb = bb > Vb.current;
          Vb.current = bb, wb && pb(null)
        }), [bb]), (0, eb.useEffect)((() => {
          pb(null)
        }), [Mb]), (0, eb.useEffect)((() => {
          if (!Hb) return;
          const bb = window.setTimeout((() => {
            pb(null)
          }), Hb.ms);
          return () => {
            window.clearTimeout(bb)
          }
        }), [Hb]), Hb
      }(Mb, Hb, wb.instance), gb = Mb <= Math.ceil(.25 * Hb);
      return (0, xb.jsx)(ub.d, {
        placement: "statBars",
        children: (0, xb.jsxs)("div", {
          className: Ub()("CubeWarfareAmmo", {
            Low: gb,
            Reloading: null !== Vb
          }),
          children: [null === Vb && (0, xb.jsxs)(xb.Fragment, {
            children: [(0, xb.jsx)("span", {
              className: "CubeWarfareAmmoMag SmallTextBold",
              children: Mb
            }), (0, xb.jsx)("span", {
              className: "CubeWarfareAmmoClip SmallTextBold",
              children: `/ ${Hb}`
            })]
          }), null !== Vb && (0, xb.jsxs)("span", {
            className: "CubeWarfareAmmoReloading SmallTextBold",
            children: [pb("cubeWarfareHud:reloading"), (0, xb.jsx)("i", {
              className: "CubeWarfareAmmoReloadBar",
              style: {
                "--cubeWarfareReloadMs": `${Vb.ms}ms`
              }
            }, Vb.key)]
          }), (0, xb.jsx)("span", {
            className: "CubeWarfareAmmoGun",
            children: (0, xb.jsx)(Cw.c, {
              itemName: wb.name,
              amount: 0,
              gunTransform: "none"
            })
          }), gb && null === Vb && (0, xb.jsx)(yb.e, {
            noaAction: "ReloadGun",
            className: "CubeWarfareAmmoKey",
            padHidesKey: !0
          })]
        })
      })
    }

    function Qw(bb) {
      let {
        store: wb
      } = bb;
      const Mb = Qb(wb, "hud"),
        Hb = Qb(wb, "leaderboard"),
        pb = (0, tb.e)("connectedGame", (bb => bb.replay));
      ! function(bb) {
        (0, eb.useEffect)((() => {
          const wb = (0, Uw.k)({
              headshot: (wb, Mb) => {
                var eb;
                const Hb = performance.now(),
                  pb = bb.get("killfeed").findLast((bb => {
                    let {
                      at: eb,
                      wire: pb
                    } = bb;
                    return pb[0] === wb && pb[1] === Mb && Hb - eb < 3e3
                  }));
                return null !== (eb = null === pb || void 0 === pb ? void 0 : pb.wire[3]) && void 0 !== eb && eb
              },
              streakLabel: bb => `\xd7${bb}`
            }),
            Mb = (0, Uw.j)(Nw);
          return () => {
            wb(), Mb()
          }
        }), [bb])
      }(wb);
      const Vb = Mb.wire;
      if (!Vb || "match" !== Vb[1] || pb) return null;
      const gb = !Vb[7];
      return (0, xb.jsxs)("div", {
        className: "CubeWarfareHud",
        children: [(0, xb.jsx)(Fw, {
          wire: Vb,
          endsAt: Mb.endsAt,
          leaderboard: Hb
        }), gb && (0, xb.jsxs)(xb.Fragment, {
          children: [(0, xb.jsx)(zw, {
            wire: Vb
          }), (0, xb.jsx)(Gw, {
            store: wb,
            protectionEndsAt: Mb.spawnProtectionEndsAt
          }), (0, xb.jsx)(fw, {}), (0, xb.jsx)(Ww, {
            endsAt: Mb.spawnProtectionEndsAt
          })]
        })]
      })
    }

    function Gw(bb) {
      let {
        store: wb,
        protectionEndsAt: Mb
      } = bb;
      const {
        isTouchScreen: eb
      } = (0, Pb.o)(["isTouchScreen"]), Hb = (0, kb.h)("aimingOverlay", "none"), pb = (0, xb.jsx)(Aw, {
        endsAt: Mb
      }), Vb = (0, xb.jsx)(rw, {
        store: wb
      }), gb = (0, xb.jsx)(Kw, {
        store: wb
      });
      if (!eb) return (0, xb.jsxs)(Sw, {
        place: "OverHotbar",
        children: [pb, Vb, gb]
      });
      const lb = "sniper" === Hb;
      return (0, xb.jsxs)(xb.Fragment, {
        children: [(0, xb.jsxs)(Sw, {
          place: "AboveCrosshair",
          hidden: lb,
          children: [pb, gb]
        }), (0, xb.jsx)(Sw, {
          place: "BelowCrosshair",
          hidden: lb,
          children: Vb
        })]
      })
    }
    var qw = Mb(366);
    const aw = 2 * Math.PI * 19;

    function iw(bb) {
      var wb, Mb;
      let {
        store: Hb,
        variation: pb,
        state: Vb
      } = bb;
      const {
        t: gb
      } = (0, mb.C)(), lb = Qb(Hb, "death"), Lb = Qb(Hb, "leaderboard"), Ib = fb(), Ob = (0, eb.useRef)(performance.now()), Ub = (0, eb.useRef)(Vb.alive);
      !Vb.alive && Ub.current && (Ob.current = performance.now()), Ub.current = Vb.alive;
      const tb = (0, eb.useRef)(null);
      lb && lb.at >= Ob.current - 3e3 && (tb.current = {
        diedAt: Ob.current,
        wire: lb.wire
      });
      const Fb = (null === (wb = tb.current) || void 0 === wb ? void 0 : wb.diedAt) === Ob.current ? tb.current.wire : null,
        [, Bb, sb, hb, zb, Xb, rb, Rb, Db] = null !== Fb && void 0 !== Fb ? Fb : [],
        cb = "player" === Bb && "" !== sb,
        Yb = null === (Mb = Lb.find((bb => bb[0] === sb))) || void 0 === Mb ? void 0 : Mb[2];
      return (0, xb.jsxs)("div", {
        className: "ShootingDeathCard",
        style: {
          "--killer": cb && Yb ? Kb(Yb, pb) : void 0
        },
        children: [(0, xb.jsxs)("div", {
          className: "ShootingDeathKiller",
          children: [cb && (0, xb.jsx)("div", {
            className: "ShootingDeathHead",
            children: (0, xb.jsx)(Ab, {
              playerId: sb
            })
          }), !cb && (0, xb.jsx)("div", {
            className: "ShootingDeathHead ShootingDeathSkull",
            children: (0, xb.jsx)(Cb.b, {
              name: "skull"
            })
          }), (0, xb.jsxs)("div", {
            className: "ShootingDeathWho",
            children: [cb && (0, xb.jsxs)(xb.Fragment, {
              children: [(0, xb.jsx)("div", {
                className: "ShootingDeathEyebrow SmallTextBold",
                children: gb(`${jb}killedBy`)
              }), (0, xb.jsx)("div", {
                className: "ShootingDeathName FullyFancyText",
                children: Ib(null !== hb && void 0 !== hb ? hb : "")
              })]
            }), !cb && (0, xb.jsx)("div", {
              className: "ShootingDeathName FullyFancyText",
              children: gb(uw(Bb))
            }), zb && (0, xb.jsxs)("div", {
              className: "ShootingDeathWeapon SmallTextBold",
              children: [(0, xb.jsx)("span", {
                className: "ShootingDeathGun",
                children: (0, xb.jsx)(Cw.c, {
                  itemName: zb,
                  amount: 0,
                  gunTransform: "none"
                })
              }), (0, xb.jsx)("span", {
                children: zb
              }), Xb && (0, xb.jsxs)("span", {
                className: "ShootingDeathHeadshot",
                children: [(0, xb.jsx)(Cb.b, {
                  name: "crosshairs"
                }), " ", gb(`${jb}headshot`)]
              })]
            })]
          }), (0, xb.jsx)(dw, {
            secondsLeft: Vb.secondsLeft,
            totalSeconds: Vb.totalSeconds,
            alive: Vb.alive
          })]
        }), Fb && (0, xb.jsxs)("div", {
          className: "ShootingDeathLife",
          children: [(0, xb.jsx)(Wb, {
            value: String(rb),
            label: gb(`${jb}killsThisLife`)
          }), (0, xb.jsx)(Wb, {
            icon: "crosshairs",
            value: String(Rb),
            label: gb(`${jb}streakPoints`)
          }), (0, xb.jsx)(Wb, {
            icon: "coins",
            value: `+${Db}`,
            label: gb(`${jb}goldEarned`),
            gold: !0
          })]
        }), (0, xb.jsxs)("div", {
          className: "ShootingDeathActions",
          children: [(0, xb.jsx)(Eb.f, {
            className: "ShootingDeathLoadout",
            onClick: () => {
              Pb.c.set({
                openEverythingMenuName: qw.l.SHOP
              })
            },
            touchPressOn: "pointerup",
            children: (0, xb.jsxs)("span", {
              className: "ShootingDeathLoadoutText",
              children: [gb(`${jb}changeLoadout`), (0, xb.jsx)(yb.e, {
                noaAction: "OpenShop",
                padHidesKey: !0
              })]
            })
          }), (0, xb.jsx)("div", {
            className: "ShootingDeathStatus FullyFancyText",
            children: Vb.status
          })]
        })]
      })
    }

    function uw(bb) {
      switch (bb) {
        case "self":
          return `${jb}diedSelf`;
        case "void":
          return `${jb}diedVoid`;
        default:
          return "respawnPage:youDied"
      }
    }

    function dw(bb) {
      let {
        secondsLeft: wb,
        totalSeconds: Mb,
        alive: eb
      } = bb;
      const Hb = eb || wb <= 0,
        pb = Mb > 0 ? Math.min(1, wb / Mb) : 0;
      return (0, xb.jsxs)("div", {
        className: "ShootingDeathRing",
        children: [(0, xb.jsxs)("svg", {
          viewBox: "0 0 44 44",
          children: [(0, xb.jsx)("circle", {
            className: "ShootingDeathRingTrack",
            cx: "22",
            cy: "22",
            r: 19
          }), (0, xb.jsx)("circle", {
            className: "ShootingDeathRingFill",
            cx: "22",
            cy: "22",
            r: 19,
            strokeDasharray: aw,
            strokeDashoffset: aw * (1 - (Hb ? 0 : pb))
          })]
        }), (0, xb.jsxs)("b", {
          className: "FullyFancyText",
          children: [Hb && (0, xb.jsx)(Cb.b, {
            name: "check"
          }), !Hb && wb]
        })]
      })
    }
    const Pw = [1, 0, 2],
      nw = [`${jb}place1`, `${jb}place2`, `${jb}place3`],
      yw = [`${jb}place1Short`, `${jb}place2Short`, `${jb}place3Short`],
      ow = {
        streak: `${jb}reasonTimeUp_streak`,
        diamonds: `${jb}reasonTimeUp_diamonds`,
        kills: `${jb}reasonTimeUp_kills`
      },
      Tw = {
        streak: null,
        diamonds: `${jb}reasonTarget_diamonds`,
        kills: `${jb}reasonTarget_kills`
      };

    function kw(bb) {
      let {
        store: wb
      } = bb;
      const Mb = Qb(wb, "roundEnd"),
        eb = Qb(wb, "hud").wire,
        Hb = (0, tb.h)("localPlayerAlive"),
        pb = (0, sb.i)(Mb.lobbyAt),
        Vb = (0, tb.e)("connectedGame", (bb => bb.replay));
      return "roundEnd" !== Mb.wire[0] || !eb || !Hb || pb <= 0 || Vb ? null : (0, xb.jsx)(bM, {
        wire: Mb.wire,
        hud: eb,
        lobbyAt: Mb.lobbyAt,
        secondsLeft: pb
      }, Mb.lobbyAt)
    }
    const bM = (0, eb.memo)((function(bb) {
      let {
        wire: wb,
        hud: Mb,
        lobbyAt: Hb,
        secondsLeft: pb
      } = bb;
      const {
        t: Vb
      } = (0, mb.C)(), [gb] = (0, eb.useState)((() => Math.max(0, Hb - performance.now()))), lb = fb(), [, Lb, Ib, Ob, , tb, Cb, Eb, Fb, Bb, , sb, hb, zb, Xb, Kb, Db, cb] = wb, [, , Yb, Ab, , Jb, Sb, Nb] = Mb, vb = "tdm" === Yb, Qb = bb => bb === Sb ? Vb(`${jb}teamYours`, {
        team: Vb(Rb[bb])
      }) : Vb(Rb[bb]);
      return (0, xb.jsxs)("div", {
        className: Ub()("ShootingResults", "win" === Lb ? "Won" : "Lost"),
        style: {
          "--lobbyMs": `${cb}ms`,
          "--lobbyElapsedMs": `${Math.max(0,cb-gb)}ms`
        },
        children: [(0, xb.jsx)("div", {
          className: "ShootingResultsTitle FullyFancyText",
          children: wM(Vb, wb, vb, Nb, lb)
        }), (0, xb.jsxs)("div", {
          className: "ShootingResultsScore FullyFancyText",
          children: [vb && (0, xb.jsxs)(xb.Fragment, {
            children: [(0, xb.jsx)("span", {
              className: "ShootingResultsTeam",
              children: Qb("Red")
            }), (0, xb.jsx)("b", {
              style: rb("Red", "tdm"),
              children: Eb
            }), (0, xb.jsx)("span", {
              className: "ShootingResultsDash",
              children: "\u2013"
            }), (0, xb.jsx)("b", {
              style: rb("Blue", "tdm"),
              children: Fb
            }), (0, xb.jsx)("span", {
              className: "ShootingResultsTeam",
              children: Qb("Blue")
            })]
          }), !vb && ("win" === Lb || "" !== tb) && (0, xb.jsxs)(xb.Fragment, {
            children: [(0, xb.jsx)("span", {
              className: "ShootingResultsTeam",
              children: "win" === Lb ? Vb(`${jb}youWonWith`) : Vb(`${jb}playerWonWith`, {
                name: lb(tb)
              })
            }), (0, xb.jsx)("b", {
              style: rb(Ob, "ffa"),
              children: Bb
            })]
          })]
        }), (0, xb.jsx)("div", {
          className: "ShootingResultsWhy SmallTextBold",
          children: MM(Vb, Cb, vb, Zb(Ab), Jb)
        }), sb.length > 0 && (0, xb.jsx)("div", {
          className: "ShootingResultsPodium",
          children: Pw.filter((bb => bb < sb.length)).map((bb => (0, xb.jsx)(eM, {
            entry: sb[bb],
            place: bb,
            mvp: sb[bb][0] === hb,
            tdm: vb
          }, bb)))
        }), !Nb && (0, xb.jsxs)("div", {
          className: "ShootingResultsYou",
          children: [(0, xb.jsx)(Wb, {
            value: String(zb),
            label: Vb(`${jb}kills`)
          }), (0, xb.jsx)(Wb, {
            value: String(Xb),
            label: Vb(`${jb}deaths`)
          }), (0, xb.jsx)(Wb, {
            icon: "crosshairs",
            value: String(Kb),
            label: Vb(`${jb}bestStreak`)
          }), (0, xb.jsx)(Wb, {
            icon: "coins",
            value: `+${Db}`,
            label: Vb(`${jb}goldEarned`),
            gold: !0
          })]
        }), (0, xb.jsxs)("div", {
          className: "ShootingResultsNext SmallTextBold",
          children: [(0, xb.jsx)("span", {
            children: Vb(`${jb}backToLobby`, {
              seconds: String(pb)
            })
          }), (0, xb.jsx)("span", {
            className: "ShootingResultsBar",
            children: (0, xb.jsx)("i", {})
          })]
        })]
      })
    }));

    function wM(bb, wb, Mb, eb, Hb) {
      const [, pb, Vb, gb, , lb] = wb;
      return eb && Mb ? bb(`${jb}teamWins`, {
        team: cb(gb) ? bb(Rb[gb]) : gb
      }) : eb ? "" === lb ? bb(`${jb}matchOver`) : bb(`${jb}playerWins`, {
        name: Hb(lb)
      }) : "win" === pb ? bb(`${jb}victory`) : Mb || 0 === Vb ? bb(`${jb}defeat`) : Vb <= nw.length ? bb(nw[Vb - 1]) : bb(`${jb}placeNth`, {
        place: String(Vb)
      })
    }

    function MM(bb, wb, Mb, eb, Hb) {
      switch (wb) {
        case "timeUp":
          return bb(ow[eb]);
        case "target": {
          const wb = Tw[eb];
          return wb && Hb > 0 ? bb(wb, {
            target: String(Hb)
          }) : bb(`${jb}reasonTarget`)
        }
        case "lastTeam":
          return bb(Mb ? `${jb}reasonLastTeam` : `${jb}reasonLastPlayer`)
      }
    }

    function eM(bb) {
      let {
        entry: wb,
        place: Mb,
        mvp: eb,
        tdm: Hb
      } = bb;
      const {
        t: pb
      } = (0, mb.C)(), Vb = fb(), [gb, lb, Lb, Ib, Ob] = wb, Eb = (0, tb.h)("players").localId;
      return (0, xb.jsxs)("div", {
        className: Ub()("ShootingPodiumCard", `Place${Mb+1}`, {
          Mvp: eb,
          Mine: gb === Eb,
          Team: Hb
        }),
        style: Hb ? rb(Lb, "tdm") : void 0,
        children: [eb && (0, xb.jsx)("span", {
          className: "ShootingPodiumCrown",
          children: (0, xb.jsx)(Cb.b, {
            name: "crown"
          })
        }), (0, xb.jsx)("div", {
          className: "ShootingPodiumHead",
          children: (0, xb.jsx)(Ab, {
            playerId: gb
          })
        }), (0, xb.jsxs)("div", {
          className: "ShootingPodiumPlace SmallTextBold",
          children: [pb(yw[Mb]), eb && ` \xb7 ${pb(`${jb}mvp`)}`]
        }), (0, xb.jsx)("div", {
          className: "ShootingPodiumName SmallTextBold",
          children: Vb(lb)
        }), (0, xb.jsx)("div", {
          className: "ShootingPodiumStats SmallTextBold",
          children: pb(`${jb}podiumStats`, {
            kills: String(Ib),
            score: String(Ob)
          })
        })]
      })
    }

    function HM(bb) {
      var wb, Mb;
      let {
        store: Hb,
        variation: pb
      } = bb;
      const Vb = "lobby" !== (null !== (wb = null === (Mb = Qb(Hb, "hud").wire) || void 0 === Mb ? void 0 : Mb[1]) && void 0 !== wb ? wb : "lobby");
      return (0, eb.useEffect)((() => {
        if (!Vb) return;
        const bb = (0, lb.z)(lb.y);
        return () => {
          bb(), (0, lb.l)()
        }
      }), [Vb]), (0, eb.useEffect)((() => (0, lb.F)((bb => (0, xb.jsx)(iw, {
        store: Hb,
        variation: pb,
        state: bb
      })))), [Hb, pb]), (0, xb.jsx)(kw, {
        store: Hb
      })
    }

    function pM(bb) {
      return (0, xb.jsxs)(xb.Fragment, {
        children: [(0, xb.jsx)(Qw, {
          ...bb
        }), (0, xb.jsx)(HM, {
          ...bb
        }), (0, xb.jsx)(lw, {
          ...bb
        })]
      })
    }
    const VM = "CubeWarfareUi",
      gM = "CubeWarfareFfa",
      lM = function(bb, wb, Mb, pb) {
        let {
          localPlayerId: Vb
        } = pb;
        const Ob = new vb,
          Ub = "tdm" === Mb ? "tdm" : "ffa";
        let tb = null,
          Cb = null,
          Eb = null;
        return {
          onCreate: bb => {
            document.body.classList.add(VM), document.body.classList.toggle(gM, "ffa" === Ub), Cb = new Ib.b(bb, Vb), Eb = new ew((bb => {
              gb.k.iI(Mw, bb, !0)
            }), (wb => {
              bb.sendCommand(wb)
            })), tb = (0, lb.J)((0, eb.createElement)(eb.Fragment, null, (0, eb.createElement)(Lb.c, {
              controller: Cb
            }), (0, eb.createElement)(pM, {
              store: Ob,
              votes: Eb,
              variation: Ub
            })), {
              content: (0, eb.createElement)(ab, {
                store: Ob,
                variation: Ub
              })
            })
          },
          onClose: () => {
            var bb, wb, Mb;
            document.body.classList.remove(VM, gM), null === (bb = tb) || void 0 === bb || bb(), tb = null, null === (wb = Cb) || void 0 === wb || wb.dispose(), Cb = null, null === (Mb = Eb) || void 0 === Mb || Mb.dispose(), Eb = null
          },
          onAfterRender: (bb, wb) => {
            var Mb;
            null === (Mb = Cb) || void 0 === Mb || Mb.frame(wb.cameraHeading)
          },
          onReceivedMessageFromServer: (bb, wb) => {
            var Mb;
            (Ob.EO(bb, wb), bb === Hb) && (null === (Mb = Eb) || void 0 === Mb || Mb.onLobby(Ob.get("lobby").wire))
          }
        }
      }
  },
  40829: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(64),
      Hb = Mb(1364);
    const pb = (0, eb.memo)((function(bb) {
      let {
        controller: wb
      } = bb;
      return (0, Hb.jsxs)("div", {
        className: "DamageFeedback",
        ref: wb.bindElement,
        children: [(0, Hb.jsx)("div", {
          className: "DamageFeedbackLow",
          children: (0, Hb.jsx)("div", {
            className: "DamageFeedbackShade"
          })
        }), (0, Hb.jsx)("div", {
          className: "DamageFeedbackArcs"
        })]
      })
    }))
  },
  40827: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb
    });
    var eb = Mb(29);
    const Hb = "DamageFeedbackArcsShown",
      pb = .45,
      Vb = .2;
    class gb {
      constructor(bb, wb) {
        let {
          arcs: Mb = !0,
          edgeGlow: Hb = !0,
          lowHealthShade: pb = !0,
          enabled: Vb = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.api = bb, this.localPlayerId = wb, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.vH = 1, this.dead = !1, this.enabled = void 0, this.parts = void 0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = bb => {
          var wb, Mb;
          this.clearHits(), this.root = bb, this.lowLayer = null !== (wb = null === bb || void 0 === bb ? void 0 : bb.querySelector(".DamageFeedbackLow")) && void 0 !== wb ? wb : null, this.arcLayer = null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.querySelector(".DamageFeedbackArcs")) && void 0 !== Mb ? Mb : null, this.showRoot(), this.drawLow()
        }, this.parts = {
          arcs: Mb,
          edgeGlow: Hb,
          lowHealthShade: pb
        }, this.enabled = Vb, this.token = eb.k.subscribe("damagedByOtherPlayer", (bb => {
          let {
            direction: wb,
            SH: Mb
          } = bb;
          this.onHurt(wb, Mb)
        })), this.syncHealth(), this.showCustomDamage()
      }
      Bx(bb) {
        bb !== this.enabled && (this.enabled = bb, this.showCustomDamage(), bb || this.clearHits(), this.showRoot())
      }
      frame(bb) {
        this.syncHealth(), this.cameraHeading = bb;
        for (const wb of this.arcs) this.drawArcAngle(wb)
      }
      dispose() {
        eb.k.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Hb)
      }
      showCustomDamage() {
        document.body.classList.toggle(Hb, this.enabled && this.parts.arcs)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const bb = this.api.getClientOption(this.localPlayerId, "_health"),
          wb = this.api.getClientOption(this.localPlayerId, "_shield"),
          Mb = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(bb, this.readHealth) && Object.is(wb, this.readShield) && Object.is(Mb, this.readMaxHealth)) return;
        if (this.readHealth = bb, this.readShield = wb, this.readMaxHealth = Mb, null === bb || void 0 === bb || !Mb) return this.lastHealthPool = null, this.maxHealth = null, this.vH = 1, this.dead = !1, void this.drawLow();
        const eb = bb + (null !== wb && void 0 !== wb ? wb : 0);
        if (null !== this.lastHealthPool && eb < this.lastHealthPool) {
          const bb = performance.now(),
            wb = (this.lastHealthPool - eb) / Mb;
          this.lastDrop = bb - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + wb,
            at: this.lastDrop.at
          } : {
            frac: wb,
            at: bb
          }
        }
        this.dead = bb <= 0, this.dead && this.clearHits(), this.lastHealthPool = eb, this.maxHealth = Mb, this.vH = bb > 0 ? bb / Mb : 1, this.drawLow()
      }
      onHurt(bb, wb) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const Mb = Math.min(1, this.takeDamageFrac(wb) / .3);
        null !== bb && this.parts.arcs && this.showArc(bb, Mb), this.parts.edgeGlow && this.flashEdge(null === bb ? null : bb - this.cameraHeading, .4 + .6 * Mb)
      }
      takeDamageFrac(bb) {
        if (void 0 !== bb && this.maxHealth) return bb / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: wb
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, wb
      }
      drawLow() {
        if (!this.lowLayer || !this.parts.lowHealthShade) return;
        const bb = Lb((pb - this.vH) / .25),
          wb = Lb((Vb - this.vH) / .15000000000000002),
          Mb = this.vH < pb;
        this.lowLayer.classList.toggle("Active", Mb), this.lowLayer.classList.toggle("Critical", this.vH < Vb), this.lowLayer.style.opacity = String(Mb ? .55 + .3 * bb + .15 * wb : 0)
      }
      showArc(bb, wb) {
        var Mb, eb;
        if (!this.arcLayer) return;
        let Hb = this.arcs.find((wb => lb(wb.direction, bb) < .6));
        if (!Hb) {
          const wb = document.createElement("div");
          wb.className = "DamageFeedbackArc", wb.appendChild(document.createElement("div")).className = "DamageFeedbackArcBand", this.arcLayer.appendChild(wb), Hb = {
            element: wb,
            direction: bb,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Hb)
        }
        Hb.direction = bb, this.drawArcAngle(Hb);
        const pb = Hb.fade ? Number(getComputedStyle(Hb.element).opacity) : 0;
        null === (Mb = Hb.fade) || void 0 === Mb || Mb.cancel(), null === (eb = Hb.pop) || void 0 === eb || eb.cancel(), Hb.element.style.opacity = "1";
        const Vb = Hb.element.animate([{
          opacity: pb
        }, {
          opacity: 1
        }], 144);
        Hb.fade = Vb, Hb.pop = Hb.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * wb
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const gb = Hb;
        Vb.onfinish = () => {
          if (gb.fade !== Vb) return;
          const bb = gb.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          bb.startTime = Vb.startTime, gb.fade = bb, bb.onfinish = () => {
            gb.fade === bb && (gb.element.remove(), Ib(this.arcs, gb))
          }
        }
      }
      drawArcAngle(bb) {
        const wb = bb.direction - this.cameraHeading;
        (null === bb.drawnAngle || Math.abs(wb - bb.drawnAngle) > .005) && (bb.drawnAngle = wb, bb.element.style.rotate = `${wb}rad`)
      }
      flashEdge(bb, wb) {
        var Mb, eb, Hb;
        if (!this.root) return;
        let pb = this.flashes.find((wb => null === wb.angle || null === bb ? wb.angle === bb : lb(wb.angle, bb) < .5));
        if (!pb) {
          const wb = document.createElement("div");
          wb.className = "DamageFeedbackFlash";
          const Mb = wb.appendChild(document.createElement("div"));
          Mb.className = "DamageFeedbackFlashGlow", this.root.insertBefore(wb, this.arcLayer), pb = {
            element: wb,
            glow: Mb,
            angle: bb,
            level: 0,
            animation: null
          }, this.flashes.push(pb)
        }
        const Vb = null === (Mb = pb.animation) || void 0 === Mb || null === (eb = Mb.effect) || void 0 === eb ? void 0 : eb.getComputedTiming().progress,
          gb = null === Vb || void 0 === Vb ? 0 : pb.level * (1 - Vb);
        pb.level = Math.min(1, Math.max(wb, gb + .6 * wb)), pb.angle = bb;
        const {
          x: Lb,
          y: Ob,
          rx: Ub,
          ry: tb
        } = function(bb, wb) {
          const Mb = window.innerWidth,
            eb = window.innerHeight;
          if (null === bb) return {
            x: Mb / 2,
            y: eb / 2,
            rx: 0,
            ry: 0
          };
          const Hb = Math.sin(bb),
            pb = -Math.cos(bb),
            Vb = Mb / 2 / Math.max(1e-6, Math.abs(Hb)),
            gb = eb / 2 / Math.max(1e-6, Math.abs(pb)),
            lb = Math.min(Vb, gb),
            Lb = Math.round(Mb / 2 + Hb * lb),
            Ib = Math.round(eb / 2 + pb * lb),
            Ob = eb / 100 * (.85 + .25 * wb),
            Ub = Vb <= gb,
            tb = Math.round((Ub ? 30 : 74) * Ob),
            Cb = Math.round((Ub ? 58 : 26) * Ob);
          return {
            x: Lb,
            y: Ib,
            rx: tb,
            ry: Cb
          }
        }(bb, pb.level), {
          style: Cb
        } = pb.glow;
        pb.glow.classList.toggle("Everywhere", null === bb), Cb.setProperty("--glowX", `${Lb}px`), Cb.setProperty("--glowY", `${Ob}px`), Cb.setProperty("--glowRx", `${Ub}px`), Cb.setProperty("--glowRy", `${tb}px`), pb.element.style.transformOrigin = `${Lb}px ${Ob}px`, null === (Hb = pb.animation) || void 0 === Hb || Hb.cancel();
        const Eb = pb.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: pb.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * pb.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * pb.level
        });
        pb.animation = Eb;
        const Fb = pb;
        Eb.onfinish = () => {
          Fb.animation === Eb && (Fb.element.remove(), Ib(this.flashes, Fb))
        }
      }
      clearHits() {
        for (const eb of this.arcs) {
          var bb, wb;
          null === (bb = eb.fade) || void 0 === bb || bb.cancel(), eb.fade = null, null === (wb = eb.pop) || void 0 === wb || wb.cancel(), eb.element.remove()
        }
        this.arcs.length = 0;
        for (const eb of this.flashes) {
          var Mb;
          null === (Mb = eb.animation) || void 0 === Mb || Mb.cancel(), eb.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function lb(bb, wb) {
      return Math.abs(Math.atan2(Math.sin(bb - wb), Math.cos(bb - wb)))
    }

    function Lb(bb) {
      return Math.max(0, Math.min(1, bb))
    }

    function Ib(bb, wb) {
      const Mb = bb.indexOf(wb); - 1 !== Mb && bb.splice(Mb, 1)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);