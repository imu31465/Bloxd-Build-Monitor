export const id = 282;
export const ids = [282];
export const modules = {
  41067: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd
    });
    const Wd = 1e3;

    function Fd(dd, Od) {
      const md = performance.now() + dd;
      return 0 !== Od && Math.abs(md - Od) < Wd ? Od : md
    }
  },
  41241: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => Qm
    });
    var Wd = md(66);
    const Fd = "shootingLobby",
      Rd = {
        Red: "#fc6464",
        Blue: "#4f94f1"
      };

    function Xd(dd, Od) {
      const md = dd.reduce(((dd, Od) => dd + Od[5]), 0);
      return 0 === md ? 0 === dd.length ? 0 : Math.round(100 / dd.length) : Math.round(dd[Od][5] / md * 100)
    }
    var Kd = md(32),
      hd = md(3428),
      vd = md(41063),
      Qd = md(41061),
      td = md(1155),
      od = md.n(td),
      Nd = md(2125),
      qd = md(1443),
      Hd = md(1572),
      yd = md(5194),
      bd = md(5693),
      Td = md(38259),
      pd = md(1238),
      Yd = md(405),
      gd = md(3307),
      wd = md(1315),
      Ed = md(1341);
    const Jd = "shootingOverlays:";

    function Ud(dd, Od) {
      var md;
      return "tdm" === Od && sd(dd) ? Rd[dd] : null !== (md = (0, Yd.bb)(dd)) && void 0 !== md ? md : "#ffffff"
    }

    function xd(dd, Od) {
      return {
        "--team": Ud(dd, Od)
      }
    }
    const Bd = {
        Red: `${Jd}teamRed`,
        Blue: `${Jd}teamBlue`
      },
      Sd = {
        diamonds: `${Jd}mutation_diamonds`,
        explosives: `${Jd}mutation_explosives`,
        gungame: `${Jd}mutation_gungame`
      };

    function sd(dd) {
      return Object.hasOwn(Rd, dd)
    }
    const ud = {
      normal: "streak",
      explosives: "streak",
      diamonds: "diamonds",
      gungame: "kills"
    };

    function Vd(dd) {
      return ud[dd]
    }

    function Ad() {
      const dd = (0, Nd.h)("hiddenPlayerNames");
      return (0, Wd.useCallback)((Od => "" === Od ? "" : (0, wd.e)(Od, dd)), [dd])
    }

    function rd(dd) {
      var Od;
      let {
        playerId: md
      } = dd;
      const Wd = null === (Od = (0, Nd.h)("players").byId[md]) || void 0 === Od ? void 0 : Od.cosmetics;
      return (0, Ed.jsx)(gd.e, {
        cosmetics: null !== Wd && void 0 !== Wd ? Wd : {}
      })
    }

    function Gd(dd) {
      let {
        icon: Od,
        value: md,
        label: Wd,
        gold: Fd = !1
      } = dd;
      return (0, Ed.jsxs)("div", {
        className: "ShootingStat",
        children: [(0, Ed.jsxs)("b", {
          className: od()("FullyFancyText", {
            Gold: Fd
          }),
          children: [Od && (0, Ed.jsx)(qd.c, {
            name: Od
          }), md]
        }), (0, Ed.jsx)("span", {
          className: "SmallTextBold",
          children: Wd
        })]
      })
    }
    var nd = md(1503),
      Ld = md(41067);

    function Pd(dd) {
      return `shooting:${dd}`
    }
    class zd {
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
      get(dd) {
        return this.slices[dd]
      }
      Yt(dd, Od) {
        switch (dd) {
          case "shootingHud":
            return this.receiveHud(Od), !0;
          case Fd: {
            const dd = Od;
            return this.set("lobby", {
              wire: dd,
              startsAt: "lobby" === dd[0] ? (0, Ld.c)(dd[2], this.slices.lobby.startsAt) : 0
            }), !0
          }
          case "shootingRoundEnd": {
            const dd = Od;
            return this.set("roundEnd", {
              wire: dd,
              lobbyAt: "roundEnd" === dd[0] ? performance.now() + dd[17] : 0
            }), !0
          }
          case "shootingLeaderboard":
            return this.set("leaderboard", Od), !0;
          case "shootingKillfeed": {
            const dd = {
              seq: ++this.seq,
              at: performance.now(),
              wire: Od
            };
            return this.set("killfeed", [...this.slices.killfeed.slice(-11), dd]), !0
          }
          case "shootingEvent":
            return this.receiveEvent(Od), !0;
          default:
            return !1
        }
      }
      receiveHud(dd) {
        var Od;
        const md = this.slices.hud,
          Wd = (null === (Od = md.wire) || void 0 === Od ? void 0 : Od[1]) === dd[1];
        md.wire && !Wd && (this.set("kill", null), this.set("tier", null), this.set("death", null)), this.set("hud", {
          wire: dd,
          endsAt: (0, Ld.c)(dd[4], Wd ? md.endsAt : 0),
          spawnProtectionEndsAt: 0 === dd[13] ? 0 : (0, Ld.c)(dd[13], md.spawnProtectionEndsAt)
        })
      }
      receiveEvent(dd) {
        const Od = {
          seq: ++this.seq,
          at: performance.now()
        };
        switch (dd[0]) {
          case "kill":
            this.set("kill", {
              ...Od,
              wire: dd
            });
            break;
          case "tier":
            this.set("tier", {
              ...Od,
              wire: dd
            });
            break;
          case "death":
            this.set("death", {
              ...Od,
              wire: dd
            })
        }
      }
      set(dd, Od) {
        this.slices[dd] = Od, Kd.j.lQ(Pd(dd), Od, !0)
      }
    }

    function cd(dd, Od) {
      return (0, nd.e)(Pd(Od), (() => dd.get(Od)))
    }
    const jd = ["Red", "Blue"],
      Dd = {
        streak: `${Jd}scoreIs_streak`,
        diamonds: `${Jd}scoreIs_diamonds`,
        kills: `${Jd}scoreIs_kills`
      };

    function ed(dd) {
      var Od;
      let {
        store: md,
        variation: Wd
      } = dd;
      const {
        t: Fd
      } = (0, pd.G)(), Rd = cd(md, "leaderboard"), Xd = cd(md, "hud"), [, Kd = "lobby", , vd = "normal", , , Qd = "", , , td = null] = null !== (Od = Xd.wire) && void 0 !== Od ? Od : [], bd = (0, Td.h)("match" === Kd ? Xd.endsAt : 0), Yd = (0, Nd.h)("players").localId, gd = "tdm" === Wd, wd = "normal" === vd ? null : Sd[vd], Ud = "Blue" === Qd ? [...jd].reverse() : jd, xd = dd => "tdm" !== (null === td || void 0 === td ? void 0 : td[0]) ? 0 : "Red" === dd ? td[1] : td[2];
      return (0, Ed.jsx)(yd.c, {
        close: hd.h,
        togglePointerLock: !1,
        className: "ShootingBoardOverlay",
        children: (0, Ed.jsxs)("section", {
          className: od()("ShootingBoard", {
            ShootingBoardFfa: !gd
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "shootingBoardTitle",
          children: [(0, Ed.jsxs)("header", {
            className: "ShootingBoardHeader",
            children: [(0, Ed.jsxs)("h2", {
              id: "shootingBoardTitle",
              className: "SmallTextBold",
              children: [(0, Ed.jsx)(qd.c, {
                name: "list"
              }), Fd(gd ? `${Jd}teamDeathmatch` : `${Jd}freeForAll`)]
            }), (0, Ed.jsxs)("div", {
              className: "ShootingBoardMeta SmallTextBold",
              children: [wd && (0, Ed.jsx)("span", {
                children: Fd(wd)
              }), "match" === Kd && (0, Ed.jsxs)("span", {
                children: [(0, Ed.jsx)(qd.c, {
                  name: "stopwatch"
                }), " ", (0, Td.d)(bd)]
              })]
            }), (0, Ed.jsx)(Hd.j, {
              className: "ShootingBoardClose",
              onClick: hd.h
            })]
          }), (0, Ed.jsxs)("div", {
            className: "ShootingBoardColumns",
            children: [gd && Ud.map((dd => (0, Ed.jsx)(Id, {
              title: Fd(Bd[dd]),
              team: {
                id: dd,
                score: xd(dd),
                mine: dd === Qd
              },
              rows: Rd.filter((Od => Od[2] === dd)),
              localId: Yd
            }, dd))), !gd && (0, Ed.jsx)(Id, {
              title: Fd(`${Jd}players`),
              team: null,
              rows: Rd,
              localId: Yd
            })]
          }), (0, Ed.jsxs)("footer", {
            className: "ShootingBoardFooter SmallTextBold",
            children: [(0, Ed.jsx)("span", {
              children: Fd(Dd[Vd(vd)])
            }), (0, Ed.jsx)("span", {
              children: Fd(`${Jd}kdLegend`)
            })]
          })]
        })
      })
    }

    function Id(dd) {
      let {
        title: Od,
        team: md,
        rows: Wd,
        localId: Fd
      } = dd;
      const {
        t: Rd
      } = (0, pd.G)(), Xd = Ad(), Kd = [{
        key: "name",
        header: (0, Ed.jsxs)("span", {
          className: "ShootingBoardTeam",
          children: [(0, Ed.jsxs)("span", {
            children: [Od, (null === md || void 0 === md ? void 0 : md.mine) && (0, Ed.jsxs)("span", {
              className: "ShootingBoardYou",
              children: [" \xb7 ", Rd(`${Jd}you`)]
            })]
          }), md && (0, Ed.jsx)("b", {
            children: md.score
          })]
        })
      }, {
        key: "kills",
        header: (0, Ed.jsx)("abbr", {
          title: Rd(`${Jd}kills`),
          children: Rd(`${Jd}killsShort`)
        })
      }, {
        key: "deaths",
        header: (0, Ed.jsx)("abbr", {
          title: Rd(`${Jd}deaths`),
          children: Rd(`${Jd}deathsShort`)
        })
      }, {
        key: "score",
        header: Rd(`${Jd}score`)
      }];
      return (0, Ed.jsx)("div", {
        className: "ShootingBoardColumn",
        style: md ? xd(md.id, "tdm") : void 0,
        children: (0, Ed.jsx)(bd.e, {
          className: od()("ShootingBoardTable", {
            Team: md
          }),
          columns: Kd,
          rows: Wd,
          getRowKey: dd => dd[0],
          renderRow: (dd, Od) => {
            const [Wd, Rd, Kd, hd, vd, Qd, td] = dd, Nd = Od + 1;
            return (0, Ed.jsxs)("tr", {
              className: od()({
                Mine: Wd === Fd,
                Dead: !td
              }),
              style: md ? void 0 : xd(Kd, "ffa"),
              children: [(0, Ed.jsx)("td", {
                children: (0, Ed.jsxs)("span", {
                  className: "ShootingBoardName",
                  children: [!md && (0, Ed.jsx)("span", {
                    className: od()("ShootingBoardPlace", `Place${Nd}`),
                    children: Nd
                  }), (0, Ed.jsx)(rd, {
                    playerId: Wd
                  }), (0, Ed.jsx)("span", {
                    className: "ShootingBoardNameText",
                    children: Xd(Rd)
                  })]
                })
              }), (0, Ed.jsx)("td", {
                children: hd
              }), (0, Ed.jsx)("td", {
                children: vd
              }), (0, Ed.jsx)("td", {
                className: "ShootingBoardScore",
                children: Qd
              })]
            })
          }
        })
      })
    }
    var ld = md(38243),
      Cd = md(38302),
      Zd = md(29),
      kd = md(5691),
      fd = md(2130),
      Md = md(5206),
      dO = md(3645),
      OO = md(1566),
      mO = md(1596),
      WO = md(40123);
    const FO = "shooting:vote";
    class RO {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new WO.d;
        this.lQ = dd, this.sendCommand = Od, this.pacer = md, this.view = {
          hidden: !1,
          pending: null
        }, this.unsent = !1, this.cardsKey = "", this.pendingTimer = null, this.unsubscribePacer = void 0, this.vote = dd => {
          this.unsent = !0, this.set({
            ...this.view,
            pending: dd
          }), this.flush()
        }, this.setHidden = dd => {
          this.set({
            ...this.view,
            hidden: dd
          })
        }, this.flush = () => {
          const dd = this.view.pending;
          this.unsent && null !== dd && this.pacer.tryStart() && (this.unsent = !1, this.sendCommand(`mapvote ${dd}`), this.clearPendingTimer(), this.pendingTimer = setTimeout((() => {
            this.pendingTimer = null, this.unsent || this.view.pending !== dd || this.set({
              ...this.view,
              pending: null
            })
          }), 5e3))
        }, this.unsubscribePacer = md.subscribe(this.flush)
      }
      getView() {
        return this.view
      }
      onLobby(dd) {
        const Od = "lobby" === dd[0] ? dd[9] : [],
          md = Od.map((dd => dd[0])).join("\n");
        if (md !== this.cardsKey) return this.cardsKey = md, this.unsent = !1, void this.set({
          hidden: !1,
          pending: null
        });
        const Wd = this.view.pending;
        if (null === Wd) return;
        const Fd = Od.find((dd => dd[0] === Wd));
        (!Fd || Fd[6] && !this.unsent) && (this.unsent = !1, this.set({
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
      set(dd) {
        this.view = dd, this.lQ(dd)
      }
    }
    const XO = "ShootingVoteStripOpen";

    function KO(dd) {
      var Od, md, Fd, Rd, Kd;
      let {
        maps: hd,
        votes: vd
      } = dd;
      const {
        t: Qd
      } = (0, pd.G)(), td = (0, OO.i)(FO, vd.getView()), {
        isTouchScreen: Nd,
        openInGameMenuName: Hd,
        openEverythingMenuName: yd
      } = (0, Zd.p)(["isTouchScreen", "openInGameMenuName", "openEverythingMenuName"]), bd = null !== Hd || null !== yd, Td = (0, dO.d)();
      (0, Md.e)(!0, !Nd && !td.hidden && !bd && !Td, "shootingVoteStrip", !0), (0, Wd.useEffect)((() => {
        if (!td.hidden && !Nd) return document.body.classList.add(XO), () => {
          document.body.classList.remove(XO)
        }
      }), [td.hidden, Nd]);
      const Yd = null !== (Od = null !== (md = td.pending) && void 0 !== md ? md : null === (Fd = hd.find((dd => dd[6]))) || void 0 === Fd ? void 0 : Fd[0]) && void 0 !== Od ? Od : null,
        gd = null !== (Rd = null === (Kd = hd.find((dd => dd[0] === Yd))) || void 0 === Kd ? void 0 : Kd[1]) && void 0 !== Rd ? Rd : null;
      return td.hidden ? (0, Ed.jsxs)("button", {
        type: "button",
        className: "ShootingVoteChip",
        "data-over-keys": "",
        ...(0, mO.i)((() => {
          vd.setHidden(!1)
        }), "pointerup"),
        children: [(0, Ed.jsx)("span", {
          className: "ShootingVoteChipLabel",
          children: Qd("shootingLobby:mapVote")
        }), (0, Ed.jsx)("span", {
          className: "ShootingVoteChipVote",
          children: null !== gd && void 0 !== gd ? gd : Qd("shootingLobby:notVoted")
        }), !Nd && (0, Ed.jsxs)("span", {
          className: "ShootingVoteChipShop",
          children: [Qd("shootingLobby:voteInShop"), (0, Ed.jsx)(fd.b, {
            noaAction: "OpenShop",
            padHidesKey: !0
          })]
        }), (0, Ed.jsx)(qd.c, {
          name: "angle-up"
        })]
      }) : (0, Ed.jsxs)("div", {
        className: od()("ShootingVoteStrip", {
          Touch: Nd
        }),
        "data-over-keys": "",
        children: [(0, Ed.jsxs)("div", {
          className: "ShootingVoteHeader",
          children: [(0, Ed.jsx)("span", {
            className: "ShootingVoteTitle",
            children: Qd("shootingLobby:voteTitle")
          }), (0, Ed.jsx)("span", {
            className: "ShootingVoteHint",
            children: Qd("shootingLobby:voteHint")
          }), (0, Ed.jsxs)("button", {
            type: "button",
            className: "ShootingVoteHide",
            ...(0, mO.i)((() => {
              vd.setHidden(!0)
            }), "pointerup"),
            children: [Qd("shootingLobby:hide"), (0, Ed.jsx)(qd.c, {
              name: "angle-down"
            })]
          })]
        }), (0, Ed.jsx)("div", {
          className: "ShootingVoteCards",
          children: hd.map(((dd, Od) => (0, Ed.jsx)(hO, {
            map: dd,
            chance: Xd(hd, Od),
            mine: Yd === dd[0],
            onVote: vd.vote,
            showHeads: !Nd
          }, dd[0])))
        })]
      })
    }

    function hO(dd) {
      let {
        map: Od,
        chance: md,
        mine: Fd,
        onVote: Rd,
        showHeads: Xd
      } = dd;
      const {
        t: Kd
      } = (0, pd.G)(), [hd, vd, Qd, td, Nd, Hd, , yd, bd] = Od, [Td, Yd] = (0, Wd.useState)(!1);
      return (0, Ed.jsxs)("button", {
        type: "button",
        className: od()("ShootingMapCard", {
          Mine: Fd
        }),
        "aria-pressed": Fd,
        ...(0, mO.i)((() => {
          Fd || Rd(hd)
        }), "pointerup"),
        children: [(0, Ed.jsxs)("div", {
          className: "ShootingMapCardImage",
          children: [null !== bd && (0, Ed.jsx)(kd.e, {
            game: {
              schematicId: bd
            }
          }), null === bd && !Td && (0, Ed.jsx)("img", {
            alt: "",
            src: `/textures/games/shooting/${Qd}`,
            onError: () => {
              Yd(!0)
            }
          }), Nd && (0, Ed.jsx)("span", {
            className: "ShootingMapCardNew",
            children: Kd("shootingLobby:new")
          }), "normal" !== td && (0, Ed.jsx)("span", {
            className: "ShootingMapCardMutation",
            children: Kd(Sd[td])
          }), Fd && (0, Ed.jsx)("span", {
            className: "ShootingMapCardCheck",
            children: (0, Ed.jsx)(qd.c, {
              name: "check"
            })
          })]
        }), (0, Ed.jsxs)("div", {
          className: "ShootingMapCardInfo",
          children: [(0, Ed.jsx)("span", {
            className: "ShootingMapCardName",
            children: vd
          }), (0, Ed.jsxs)("span", {
            className: "ShootingMapCardVotes",
            children: [Hd, (0, Ed.jsx)(qd.c, {
              name: "user"
            })]
          })]
        }), (0, Ed.jsx)("div", {
          className: "ShootingMapCardBar",
          children: (0, Ed.jsx)("i", {
            style: {
              width: `${md}%`
            }
          })
        }), (0, Ed.jsxs)("div", {
          className: "ShootingMapCardFooter",
          children: [Xd && (0, Ed.jsx)(vO, {
            voters: yd
          }), (0, Ed.jsx)("span", {
            className: "ShootingMapCardChance",
            children: Kd("shootingLobby:chance", {
              percent: md
            })
          })]
        })]
      })
    }

    function vO(dd) {
      let {
        voters: Od
      } = dd;
      const md = (0, Nd.h)("players");
      return (0, Ed.jsx)("span", {
        className: "ShootingMapCardHeads",
        children: Od.slice(0, 8).map((dd => {
          var Od;
          return (null === (Od = md.byId[dd]) || void 0 === Od ? void 0 : Od.cosmetics) && (0, Ed.jsx)(rd, {
            playerId: dd
          }, dd)
        }))
      })
    }

    function QO(dd) {
      let {
        store: Od,
        votes: md,
        variation: Wd
      } = dd;
      const Fd = cd(Od, "lobby"),
        Rd = (0, Nd.h)("localPlayerAlive"),
        Xd = (0, Nd.f)("connectedGame", (dd => dd.replay));
      if ("lobby" !== Fd.wire[0] || Xd) return null;
      const Kd = Fd.wire;
      return (0, Ed.jsxs)(Ed.Fragment, {
        children: [(0, Ed.jsx)(tO, {
          wire: Kd,
          startsAt: Fd.startsAt,
          variation: Wd
        }), Rd && Kd[9].length > 0 && (0, Ed.jsx)(ld.h, {
          children: (0, Ed.jsx)(KO, {
            maps: Kd[9],
            votes: md
          })
        })]
      })
    }
    const tO = (0, Wd.memo)((function(dd) {
      let {
        wire: Od,
        startsAt: md,
        variation: Fd
      } = dd;
      const {
        t: Rd
      } = (0, pd.G)(), [Xd, Kd] = (0, Wd.useState)(null), [hd, vd] = (0, Wd.useState)(null), Qd = (0, Cd.l)(Xd, hd), [, td, , od, Nd, Hd, yd, bd, Td] = Od, {
        isTouchScreen: Yd
      } = (0, Zd.p)(["isTouchScreen"]);
      return (0, Ed.jsx)("div", {
        ref: vd,
        className: "ShootingLobbyStatusContainer",
        style: null === Qd ? void 0 : {
          top: Qd
        },
        children: (0, Ed.jsxs)("div", {
          ref: Kd,
          className: "ShootingLobbyStatus",
          children: [(0, Ed.jsx)(oO, {
            waiting: "waiting" === td,
            startsAt: md
          }), "tdm" === Fd && (0, Ed.jsxs)("div", {
            className: "ShootingLobbyTeams",
            children: [(0, Ed.jsx)(NO, {
              team: "Blue",
              count: yd,
              cap: bd,
              mine: "Blue" === Td
            }), (0, Ed.jsx)("span", {
              className: "ShootingLobbyTeamHint",
              children: Rd(Yd ? "shootingLobby:teamHintTouch" : "" === Td ? "shootingLobby:teamHintPick" : "shootingLobby:teamHintSwitch")
            }), (0, Ed.jsx)(NO, {
              team: "Red",
              count: Hd,
              cap: bd,
              mine: "Red" === Td
            })]
          }), "ffa" === Fd && (0, Ed.jsx)("div", {
            className: "ShootingLobbyTeams",
            children: (0, Ed.jsxs)("span", {
              className: "ShootingLobbyPlayers",
              children: [(0, Ed.jsx)(qd.c, {
                name: "user-group"
              }), Rd("shootingLobby:players", {
                count: od,
                max: Nd
              })]
            })
          })]
        })
      })
    }));

    function oO(dd) {
      let {
        waiting: Od,
        startsAt: md
      } = dd;
      const {
        t: Wd
      } = (0, pd.G)(), Fd = (0, Td.h)(Od ? 0 : md);
      return (0, Ed.jsxs)("div", {
        className: "ShootingLobbyCountdown",
        children: [Od && (0, Ed.jsx)("span", {
          className: "ShootingLobbyCountdownLabel",
          children: Wd("shootingLobby:waiting")
        }), !Od && (0, Ed.jsxs)(Ed.Fragment, {
          children: [(0, Ed.jsx)("span", {
            className: "ShootingLobbyCountdownLabel",
            children: Wd("shootingLobby:startingIn")
          }), (0, Ed.jsx)("span", {
            className: od()("ShootingLobbyCountdownTime", {
              Soon: Fd < 10
            }),
            children: (0, Td.d)(Fd)
          })]
        })]
      })
    }

    function NO(dd) {
      let {
        team: Od,
        count: md,
        cap: Wd,
        mine: Fd
      } = dd;
      const {
        t: Rd
      } = (0, pd.G)();
      return (0, Ed.jsxs)("span", {
        className: od()("ShootingLobbyTeam", {
          Mine: Fd,
          Full: md >= Wd
        }),
        style: xd(Od, "tdm"),
        children: [Rd(Bd[Od]), (0, Ed.jsx)("span", {
          className: "ShootingLobbyTeamCount",
          children: Rd("shootingLobby:teamCount", {
            count: md,
            cap: Wd
          })
        })]
      })
    }
    var qO = md(38172),
      HO = md(1890),
      yO = md(2079);
    const bO = "--cubeWarfareKillfeedOffset",
      TO = (0, Wd.memo)((function(dd) {
        let {
          wire: Od,
          endsAt: md,
          leaderboard: Fd
        } = dd;
        const {
          t: Rd
        } = (0, pd.G)(), {
          isTouchScreen: Xd
        } = (0, Zd.p)(["isTouchScreen"]), [Kd, hd] = (0, Wd.useState)(null), [vd, Qd] = (0, Wd.useState)(null), td = (0, Cd.l)(vd, Kd, Xd);
        ! function(dd, Od) {
          (0, Wd.useLayoutEffect)((() => {
            if (!dd || null === Od) return;
            let md = null;
            const Wd = dd => {
                md = dd, null === dd ? document.body.style.removeProperty(bO) : document.body.style.setProperty(bO, `${dd}px`)
              },
              Fd = () => {
                var Od;
                const Fd = document.querySelector(".InGameUi .Killfeed");
                if (!Fd) return void Wd(null);
                const Rd = .3 * (0, HO.getRemInPx)(),
                  Xd = Fd.getBoundingClientRect().top - (null !== (Od = md) && void 0 !== Od ? Od : Rd);
                Wd(Math.max(Math.ceil(Rd), Math.ceil(dd.getBoundingClientRect().bottom + Cd.d - Xd)))
              },
              Rd = new ResizeObserver(Fd);
            Rd.observe(dd);
            const Xd = document.querySelector(`.InGameUi .${Cd.h}`);
            return Xd && Rd.observe(Xd), Fd(), window.addEventListener("resize", Fd), () => {
              Rd.disconnect(), window.removeEventListener("resize", Fd), Wd(null)
            }
          }), [dd, Od])
        }(Kd, td);
        const [, , od, Nd, , qd, Hd, yd, bd, Td, Yd] = Od, gd = qd > 0 ? Rd("cubeWarfareHud:firstTo", {
          target: qd
        }) : Rd("cubeWarfareHud:timeLeft");
        return (0, Ed.jsxs)("div", {
          ref: hd,
          className: "CubeWarfareScoreBarContainer",
          style: null === td ? void 0 : {
            top: td
          },
          children: [(0, Ed.jsxs)("div", {
            ref: Qd,
            className: "CubeWarfareScoreBar",
            children: ["tdm" === Td[0] && (0, Ed.jsx)(YO, {
              myTeam: Hd,
              redScore: Td[1],
              blueScore: Td[2],
              leaderboard: Fd,
              target: "diamonds" === Nd ? qd : 0,
              clock: (0, Ed.jsx)(pO, {
                endsAt: md,
                label: gd
              })
            }), "ffa" === Td[0] && (0, Ed.jsx)(gO, {
              myTeam: Hd,
              myScore: bd,
              myRank: Td[1],
              playerCount: Td[2],
              leader: Td[3],
              second: Td[4],
              spectating: yd,
              target: qd,
              clock: (0, Ed.jsx)(pO, {
                endsAt: md,
                label: gd
              })
            })]
          }), null !== Yd && (0, Ed.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, Ed.jsx)("span", {
              children: Rd("cubeWarfareHud:gungameKills", {
                kills: Yd[0],
                target: qd
              })
            }), "" !== Yd[2] && (0, Ed.jsxs)(Ed.Fragment, {
              children: [(0, Ed.jsx)("span", {
                "aria-hidden": !0,
                children: "\xb7"
              }), (0, Ed.jsx)("span", {
                children: Rd("cubeWarfareHud:nextWeapon")
              }), (0, Ed.jsx)("span", {
                className: "CubeWarfareScoreLineItem",
                children: (0, Ed.jsx)(yO.c, {
                  itemName: Yd[2],
                  amount: 0,
                  gunTransform: "none"
                })
              })]
            })]
          }), null === Yd && "diamonds" === Nd && (0, Ed.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, Ed.jsx)("span", {
              className: "CubeWarfareScoreLineItem",
              children: (0, Ed.jsx)(yO.c, {
                itemName: "Diamond",
                amount: 0
              })
            }), (0, Ed.jsx)("span", {
              children: Rd("cubeWarfareHud:collectDiamonds")
            })]
          }), null === Yd && "diamonds" !== Nd && "tdm" === od && !yd && (0, Ed.jsxs)("div", {
            className: "CubeWarfareScoreLine SmallTextBold",
            children: [(0, Ed.jsx)("span", {
              children: Rd("cubeWarfareHud:yourScore")
            }), (0, Ed.jsx)("b", {
              children: bd
            })]
          })]
        })
      }));

    function pO(dd) {
      let {
        endsAt: Od,
        label: md
      } = dd;
      const Wd = (0, Td.h)(Od);
      return (0, Ed.jsxs)("div", {
        className: "CubeWarfareClock",
        children: [(0, Ed.jsx)("div", {
          className: od()("CubeWarfareClockTime", {
            Urgent: Wd < 60
          }),
          children: (0, Td.d)(Wd)
        }), (0, Ed.jsx)("div", {
          className: "CubeWarfareClockLabel",
          children: md
        })]
      })
    }

    function YO(dd) {
      const {
        t: Od
      } = (0, pd.G)(), md = Od => dd.leaderboard.filter((dd => dd[2] === Od)), Wd = {
        team: "Red",
        name: Od(Bd.Red),
        score: dd.redScore,
        members: md("Red")
      }, Fd = {
        team: "Blue",
        name: Od(Bd.Blue),
        score: dd.blueScore,
        members: md("Blue")
      }, [Rd, Xd] = "Blue" === dd.myTeam ? [Fd, Wd] : [Wd, Fd], Kd = (md, Wd) => (0, Ed.jsxs)("div", {
        className: od()("CubeWarfareSide", Wd, `Team-${md.team}`, {
          Mine: md.team === dd.myTeam
        }),
        style: xd(md.team, "tdm"),
        children: [md.team === dd.myTeam && (0, Ed.jsx)("span", {
          className: "CubeWarfareYouTag",
          children: Od("shootingOverlays:you")
        }), (0, Ed.jsx)("div", {
          className: "CubeWarfareHeads",
          children: md.members.map((dd => {
            let [Od, , , , , , md] = dd;
            return (0, Ed.jsx)("span", {
              className: od()("CubeWarfareHead", {
                Dead: !md
              }),
              children: (0, Ed.jsx)(rd, {
                playerId: Od
              })
            }, Od)
          }))
        }), (0, Ed.jsxs)("div", {
          className: "CubeWarfareSideText",
          children: [(0, Ed.jsx)("div", {
            className: "CubeWarfareSideName",
            children: (0, Ed.jsx)("span", {
              className: "CubeWarfareSideLabel",
              children: md.name
            })
          }), (0, Ed.jsx)("div", {
            className: "CubeWarfareSideScore SmallTextBold",
            children: md.score
          })]
        }), (0, Ed.jsx)(wO, {
          score: md.score,
          target: dd.target
        })]
      });
      return (0, Ed.jsxs)(Ed.Fragment, {
        children: [Kd(Rd, "Left"), dd.clock, Kd(Xd, "Right")]
      })
    }

    function gO(dd) {
      var Od;
      const {
        t: md
      } = (0, pd.G)(), Wd = Ad(), Fd = null !== (Od = dd.second) && void 0 !== Od ? Od : dd.spectating || dd.playerCount > 1 ? dd.leader : null;
      return (0, Ed.jsxs)(Ed.Fragment, {
        children: [!dd.spectating && (0, Ed.jsxs)("div", {
          className: od()("CubeWarfareSide", "Left", "Mine", "Ffa"),
          style: {
            "--team": (0, Yd.bb)(dd.myTeam)
          },
          children: [(0, Ed.jsx)("span", {
            className: "CubeWarfareYouTag",
            children: md("shootingOverlays:you")
          }), (0, Ed.jsxs)("div", {
            className: "CubeWarfareSideText",
            children: [(0, Ed.jsx)("div", {
              className: "CubeWarfareSideName",
              children: (0, Ed.jsx)("span", {
                className: "CubeWarfareSideLabel",
                children: md("cubeWarfareHud:rank", {
                  rank: dd.myRank
                })
              })
            }), (0, Ed.jsx)("div", {
              className: "CubeWarfareSideScore SmallTextBold",
              children: dd.myScore
            })]
          }), (0, Ed.jsx)(wO, {
            score: dd.myScore,
            target: dd.target
          })]
        }), dd.clock, null !== Fd && (0, Ed.jsxs)("div", {
          className: od()("CubeWarfareSide", "Right", "Ffa"),
          children: [(0, Ed.jsxs)("div", {
            className: "CubeWarfareSideText",
            children: [(0, Ed.jsxs)("div", {
              className: "CubeWarfareSideName",
              children: [(0, Ed.jsx)("span", {
                className: "CubeWarfareSideLabel",
                children: null !== dd.second ? md("cubeWarfareHud:second") : md("cubeWarfareHud:leader")
              }), (0, Ed.jsx)("span", {
                className: "CubeWarfareSideWho",
                children: Wd(Fd[1])
              })]
            }), (0, Ed.jsx)("div", {
              className: "CubeWarfareSideScore SmallTextBold",
              children: Fd[2]
            })]
          }), (0, Ed.jsx)(wO, {
            score: Fd[2],
            target: dd.target
          })]
        })]
      })
    }

    function wO(dd) {
      let {
        score: Od,
        target: md
      } = dd;
      return (0, Ed.jsx)("div", {
        className: od()("CubeWarfareStrip", {
          Progress: md > 0
        }),
        children: md > 0 && (0, Ed.jsx)("i", {
          style: {
            transform: `scaleX(${Math.min(1,Od/md)})`
          }
        })
      })
    }
    const aO = (0, Wd.memo)((function(dd) {
      let {
        wire: Od
      } = dd;
      const {
        isTouchScreen: md
      } = (0, Zd.p)(["isTouchScreen"]);
      return md ? (0, Ed.jsx)("div", {
        className: "CubeWarfarePerkColumnTouch",
        children: (0, Ed.jsx)(EO, {
          wire: Od,
          touch: !0
        })
      }) : (0, Ed.jsx)(ld.h, {
        placement: "bottomLeft",
        children: (0, Ed.jsx)(EO, {
          wire: Od
        })
      })
    }));

    function EO(dd) {
      let {
        wire: Od,
        touch: md = !1
      } = dd;
      const {
        t: Wd
      } = (0, pd.G)(), Fd = Od[11], Rd = Od[12], Xd = Rd.findIndex((dd => {
        let [, Od] = dd;
        return Fd < Od
      }));
      return (0, Ed.jsxs)("div", {
        className: "CubeWarfarePerkColumn",
        children: [(0, Ed.jsxs)("div", {
          className: "CubeWarfarePerkPoints SmallTextBold",
          children: [(0, Ed.jsx)(qd.c, {
            name: "crosshairs"
          }), Fd]
        }), Rd.map(((dd, Od) => {
          let [Kd, hd, vd, Qd, td] = dd;
          const Nd = Fd >= hd,
            Hd = 0 === Od ? 0 : Rd[Od - 1][1],
            yd = Nd ? 1 : Od === Xd ? Math.max(0, (Fd - Hd) / (hd - Hd)) : 0;
          return (0, Ed.jsxs)("div", {
            className: od()("CubeWarfarePerk", {
              Active: td,
              Reached: Nd,
              Next: Od === Xd
            }),
            children: [(0, Ed.jsxs)("div", {
              className: "CubeWarfarePerkTile",
              children: [!Nd && (0, Ed.jsx)("div", {
                className: "CubeWarfarePerkFill",
                style: {
                  transform: `scaleY(${yd})`
                }
              }), (0, Ed.jsx)(qd.c, {
                name: Qd || "lock"
              })]
            }), (0, Ed.jsxs)("div", {
              className: "CubeWarfarePerkText SmallTextBold",
              children: [(0, Ed.jsx)("span", {
                className: "CubeWarfarePerkName",
                children: vd || Wd("cubeWarfareHud:tier", {
                  tier: Kd
                })
              }), (0, Ed.jsxs)("small", {
                children: [Nd && Wd(td ? "cubeWarfareHud:active" : "cubeWarfareHud:noPerk"), !Nd && !md && Wd("cubeWarfareHud:toGo", {
                  count: hd - Fd
                }), !Nd && md && (0, Ed.jsxs)(Ed.Fragment, {
                  children: [(0, Ed.jsx)(qd.c, {
                    name: "crosshairs"
                  }), " ", hd]
                })]
              })]
            })]
          }, Kd)
        }))]
      })
    }

    function JO(dd) {
      const [, Od] = (0, Wd.useReducer)((dd => dd + 1), 0);
      (0, Wd.useEffect)((() => {
        const md = dd - performance.now();
        if (0 === dd || md <= 0) return;
        const Wd = window.setTimeout(Od, md);
        return () => {
          window.clearTimeout(Wd)
        }
      }), [dd])
    }
    const UO = ["", "", "cubeWarfareHud:doubleKill", "cubeWarfareHud:tripleKill", "cubeWarfareHud:quadKill", "cubeWarfareHud:rampage"];

    function xO(dd) {
      let {
        store: Od
      } = dd;
      const md = uO(cd(Od, "kill"), 2500),
        Wd = Ad();
      return md ? (0, Ed.jsx)(SO, {
        victimName: Wd(md.wire[2]),
        headshot: md.wire[4],
        killsThisLife: md.wire[5],
        gold: md.wire[6]
      }, md.seq) : null
    }

    function BO(dd) {
      let {
        store: Od
      } = dd;
      const md = uO(cd(Od, "tier"), 3500);
      return md ? (0, Ed.jsx)(sO, {
        tier: md.wire[1],
        perk: md.wire[2],
        icon: md.wire[3]
      }, md.seq) : null
    }

    function SO(dd) {
      let {
        victimName: Od,
        headshot: md,
        killsThisLife: Wd,
        gold: Fd
      } = dd;
      const {
        t: Rd
      } = (0, pd.G)(), Xd = UO[Math.min(Wd, UO.length - 1)];
      return (0, Ed.jsxs)("div", {
        className: "CubeWarfareKillPop",
        children: [Xd && (0, Ed.jsx)("div", {
          className: "CubeWarfareMultiKill SmallTextBold",
          children: Rd(Xd)
        }), (0, Ed.jsxs)("div", {
          className: "CubeWarfareKillLine SmallTextBold",
          children: [(0, Ed.jsx)("span", {
            className: "CubeWarfareKillTag",
            children: Rd("cubeWarfareHud:eliminated")
          }), (0, Ed.jsx)("span", {
            className: "CubeWarfareKillName",
            children: Od
          })]
        }), (0, Ed.jsxs)("div", {
          className: "CubeWarfareKillRewards",
          children: [Fd > 0 && (0, Ed.jsxs)("span", {
            className: "CubeWarfareReward Gold SmallTextBold",
            children: [`+${Fd}`, (0, Ed.jsx)(qd.c, {
              name: "coins",
              className: "CubeWarfareCoin"
            })]
          }), md && (0, Ed.jsxs)("span", {
            className: "CubeWarfareReward Headshot SmallTextBold",
            children: [(0, Ed.jsx)(qd.c, {
              name: "crosshairs"
            }), Rd("shootingOverlays:headshot")]
          })]
        })]
      })
    }

    function sO(dd) {
      let {
        tier: Od,
        perk: md,
        icon: Wd
      } = dd;
      const {
        t: Fd
      } = (0, pd.G)();
      return (0, Ed.jsxs)("div", {
        className: "CubeWarfareTierBanner",
        children: [(0, Ed.jsx)("div", {
          className: "CubeWarfareTierIcon",
          children: (0, Ed.jsx)(qd.c, {
            name: Wd || "crosshairs"
          })
        }), (0, Ed.jsxs)("div", {
          children: [(0, Ed.jsx)("div", {
            className: "CubeWarfareTierTitle",
            children: Fd("cubeWarfareHud:tierReached", {
              tier: Od
            })
          }), (0, Ed.jsx)("div", {
            className: "CubeWarfareTierPerk SmallTextBold",
            children: md ? Fd("cubeWarfareHud:perkActive", {
              perk: md
            }) : Fd("cubeWarfareHud:noPerk")
          })]
        })]
      })
    }

    function uO(dd, Od) {
      return JO(dd ? dd.at + Od : 0), dd && performance.now() - dd.at < Od ? dd : null
    }
    var VO = md(3403);

    function iO() {
      var dd, Od;
      const md = null === (dd = (0, VO.j)("currencyAmounts")) || void 0 === dd || null === (Od = dd.gold) || void 0 === Od ? void 0 : Od.amount,
        [Fd, Rd] = (0, Wd.useState)(0),
        Xd = (0, Wd.useRef)(md);
      return (0, Wd.useEffect)((() => {
        void 0 !== md && void 0 !== Xd.current && md > Xd.current && Rd((dd => dd + 1)), Xd.current = md
      }), [md]), void 0 === md ? null : (0, Ed.jsx)(ld.h, {
        placement: "statBars",
        children: (0, Ed.jsxs)("div", {
          className: od()("CubeWarfareWallet SmallTextBold", {
            Bump: Fd > 0
          }),
          children: [(0, Ed.jsx)(qd.c, {
            name: "coins",
            className: "CubeWarfareCoin"
          }), md]
        }, Fd)
      })
    }

    function AO(dd) {
      let {
        endsAt: Od
      } = dd;
      return 0 === Od ? null : (0, Ed.jsx)(GO, {
        endsAt: Od
      }, Od)
    }

    function rO(dd) {
      let {
        endsAt: Od
      } = dd;
      return JO(Od), Od <= performance.now() ? null : (0, Ed.jsx)("div", {
        className: "CubeWarfareProtectionEdge"
      })
    }

    function GO(dd) {
      let {
        endsAt: Od
      } = dd;
      const {
        t: md
      } = (0, pd.G)(), [Fd] = (0, Wd.useState)((() => Math.max(0, Od - performance.now())));
      return JO(Od), Od <= performance.now() ? null : (0, Ed.jsxs)("div", {
        className: "CubeWarfareProtection",
        children: [(0, Ed.jsx)(qd.c, {
          name: "shield-halved",
          className: "CubeWarfareProtectionIcon"
        }), (0, Ed.jsxs)("div", {
          className: "CubeWarfareProtectionText SmallTextBold",
          children: [md("cubeWarfareHud:spawnProtected"), (0, Ed.jsx)("small", {
            children: md("cubeWarfareHud:spawnProtectedHint")
          })]
        }), (0, Ed.jsx)("div", {
          className: "CubeWarfareProtectionDrain",
          style: {
            "--cubeWarfareDrainMs": `${Fd}ms`
          }
        })]
      })
    }

    function nO(dd) {
      let {
        place: Od,
        hidden: md = !1,
        children: Wd
      } = dd;
      return "OverHotbar" !== Od ? (0, Ed.jsx)("div", {
        className: od()("CubeWarfareCentreSlot", Od, {
          Hidden: md
        }),
        children: Wd
      }) : (0, Ed.jsx)(ld.h, {
        children: (0, Ed.jsx)("div", {
          className: "CubeWarfareOverHotbar",
          children: (0, Ed.jsx)("div", {
            className: "CubeWarfareCentreSlot OverHotbar",
            children: Wd
          })
        })
      })
    }
    const LO = dd => {
      var Od;
      const md = null === (Od = dd.attributes.customAttributes) || void 0 === Od ? void 0 : Od.shotsLeft;
      return "number" === typeof md && dd.clipSize ? (0, Ed.jsx)(PO, {
        item: dd,
        shotsLeft: md,
        clipSize: dd.clipSize
      }) : null
    };

    function PO(dd) {
      let {
        item: Od,
        shotsLeft: md,
        clipSize: Fd
      } = dd;
      const {
        t: Rd
      } = (0, pd.G)(), Xd = function(dd, Od, md) {
        const [Fd, Rd] = (0, Wd.useState)(null), Xd = (0, Wd.useRef)(dd), Kd = (0, Wd.useRef)(0);
        return (0, OO.f)("middleScreenBarInitiate", (dd => {
          let {
            duration: md
          } = dd;
          md >= 400 && Xd.current < Od && Rd({
            key: ++Kd.current,
            ms: md
          })
        })), (0, OO.f)("middleScreenBarRemove", (() => {
          Rd(null)
        })), (0, Wd.useEffect)((() => {
          const Od = dd > Xd.current;
          Xd.current = dd, Od && Rd(null)
        }), [dd]), (0, Wd.useEffect)((() => {
          Rd(null)
        }), [md]), (0, Wd.useEffect)((() => {
          if (!Fd) return;
          const dd = window.setTimeout((() => {
            Rd(null)
          }), Fd.ms);
          return () => {
            window.clearTimeout(dd)
          }
        }), [Fd]), Fd
      }(md, Fd, Od.instance), Kd = md <= Math.ceil(.25 * Fd);
      return (0, Ed.jsx)(ld.h, {
        placement: "statBars",
        children: (0, Ed.jsxs)("div", {
          className: od()("CubeWarfareAmmo", {
            Low: Kd,
            Reloading: null !== Xd
          }),
          children: [null === Xd && (0, Ed.jsxs)(Ed.Fragment, {
            children: [(0, Ed.jsx)("span", {
              className: "CubeWarfareAmmoMag SmallTextBold",
              children: md
            }), (0, Ed.jsx)("span", {
              className: "CubeWarfareAmmoClip SmallTextBold",
              children: `/ ${Fd}`
            })]
          }), null !== Xd && (0, Ed.jsxs)("span", {
            className: "CubeWarfareAmmoReloading SmallTextBold",
            children: [Rd("cubeWarfareHud:reloading"), (0, Ed.jsx)("i", {
              className: "CubeWarfareAmmoReloadBar",
              style: {
                "--cubeWarfareReloadMs": `${Xd.ms}ms`
              }
            }, Xd.key)]
          }), (0, Ed.jsx)("span", {
            className: "CubeWarfareAmmoGun",
            children: (0, Ed.jsx)(yO.c, {
              itemName: Od.name,
              amount: 0,
              gunTransform: "none"
            })
          }), Kd && null === Xd && (0, Ed.jsx)(fd.b, {
            noaAction: "ReloadGun",
            className: "CubeWarfareAmmoKey",
            padHidesKey: !0
          })]
        })
      })
    }

    function zO(dd) {
      let {
        store: Od
      } = dd;
      const md = cd(Od, "hud"),
        Fd = cd(Od, "leaderboard"),
        Rd = (0, Nd.f)("connectedGame", (dd => dd.replay));
      ! function(dd) {
        (0, Wd.useEffect)((() => {
          const Od = (0, qO.l)({
              headshot: (Od, md) => {
                var Wd;
                const Fd = performance.now(),
                  Rd = dd.get("killfeed").findLast((dd => {
                    let {
                      at: Wd,
                      wire: Rd
                    } = dd;
                    return Rd[0] === Od && Rd[1] === md && Fd - Wd < 3e3
                  }));
                return null !== (Wd = null === Rd || void 0 === Rd ? void 0 : Rd.wire[3]) && void 0 !== Wd && Wd
              },
              streakLabel: dd => `\xd7${dd}`
            }),
            md = (0, qO.j)(LO);
          return () => {
            Od(), md()
          }
        }), [dd])
      }(Od);
      const Xd = md.wire;
      if (!Xd || "match" !== Xd[1] || Rd) return null;
      const Kd = !Xd[7];
      return (0, Ed.jsxs)("div", {
        className: "CubeWarfareHud",
        children: [(0, Ed.jsx)(TO, {
          wire: Xd,
          endsAt: md.endsAt,
          leaderboard: Fd
        }), Kd && (0, Ed.jsxs)(Ed.Fragment, {
          children: [(0, Ed.jsx)(aO, {
            wire: Xd
          }), (0, Ed.jsx)(cO, {
            store: Od,
            protectionEndsAt: md.spawnProtectionEndsAt
          }), (0, Ed.jsx)(iO, {}), (0, Ed.jsx)(rO, {
            endsAt: md.spawnProtectionEndsAt
          })]
        })]
      })
    }

    function cO(dd) {
      let {
        store: Od,
        protectionEndsAt: md
      } = dd;
      const {
        isTouchScreen: Wd
      } = (0, Zd.p)(["isTouchScreen"]), Fd = (0, OO.i)("aimingOverlay", "none"), Rd = (0, Ed.jsx)(AO, {
        endsAt: md
      }), Xd = (0, Ed.jsx)(BO, {
        store: Od
      }), Kd = (0, Ed.jsx)(xO, {
        store: Od
      });
      if (!Wd) return (0, Ed.jsxs)(nO, {
        place: "OverHotbar",
        children: [Rd, Xd, Kd]
      });
      const hd = "sniper" === Fd;
      return (0, Ed.jsxs)(Ed.Fragment, {
        children: [(0, Ed.jsxs)(nO, {
          place: "AboveCrosshair",
          hidden: hd,
          children: [Rd, Kd]
        }), (0, Ed.jsx)(nO, {
          place: "BelowCrosshair",
          hidden: hd,
          children: Xd
        })]
      })
    }
    var jO = md(387);
    const DO = 2 * Math.PI * 19;

    function eO(dd) {
      var Od, md;
      let {
        store: Fd,
        variation: Rd,
        state: Xd
      } = dd;
      const {
        t: Kd
      } = (0, pd.G)(), hd = cd(Fd, "death"), vd = cd(Fd, "leaderboard"), Qd = Ad(), td = (0, Wd.useRef)(performance.now()), od = (0, Wd.useRef)(Xd.alive);
      !Xd.alive && od.current && (td.current = performance.now()), od.current = Xd.alive;
      const Nd = (0, Wd.useRef)(null);
      hd && hd.at >= td.current - 3e3 && (Nd.current = {
        diedAt: td.current,
        wire: hd.wire
      });
      const yd = (null === (Od = Nd.current) || void 0 === Od ? void 0 : Od.diedAt) === td.current ? Nd.current.wire : null,
        [, bd, Td, Yd, gd, wd, xd, Bd, Sd] = null !== yd && void 0 !== yd ? yd : [],
        sd = "player" === bd && "" !== Td,
        ud = null === (md = vd.find((dd => dd[0] === Td))) || void 0 === md ? void 0 : md[2];
      return (0, Ed.jsxs)("div", {
        className: "ShootingDeathCard",
        style: {
          "--killer": sd && ud ? Ud(ud, Rd) : void 0
        },
        children: [(0, Ed.jsxs)("div", {
          className: "ShootingDeathKiller",
          children: [sd && (0, Ed.jsx)("div", {
            className: "ShootingDeathHead",
            children: (0, Ed.jsx)(rd, {
              playerId: Td
            })
          }), !sd && (0, Ed.jsx)("div", {
            className: "ShootingDeathHead ShootingDeathSkull",
            children: (0, Ed.jsx)(qd.c, {
              name: "skull"
            })
          }), (0, Ed.jsxs)("div", {
            className: "ShootingDeathWho",
            children: [sd && (0, Ed.jsxs)(Ed.Fragment, {
              children: [(0, Ed.jsx)("div", {
                className: "ShootingDeathEyebrow SmallTextBold",
                children: Kd(`${Jd}killedBy`)
              }), (0, Ed.jsx)("div", {
                className: "ShootingDeathName FullyFancyText",
                children: Qd(null !== Yd && void 0 !== Yd ? Yd : "")
              })]
            }), !sd && (0, Ed.jsx)("div", {
              className: "ShootingDeathName FullyFancyText",
              children: Kd(IO(bd))
            }), gd && (0, Ed.jsxs)("div", {
              className: "ShootingDeathWeapon SmallTextBold",
              children: [(0, Ed.jsx)("span", {
                className: "ShootingDeathGun",
                children: (0, Ed.jsx)(yO.c, {
                  itemName: gd,
                  amount: 0,
                  gunTransform: "none"
                })
              }), (0, Ed.jsx)("span", {
                children: gd
              }), wd && (0, Ed.jsxs)("span", {
                className: "ShootingDeathHeadshot",
                children: [(0, Ed.jsx)(qd.c, {
                  name: "crosshairs"
                }), " ", Kd(`${Jd}headshot`)]
              })]
            })]
          }), (0, Ed.jsx)(lO, {
            secondsLeft: Xd.secondsLeft,
            totalSeconds: Xd.totalSeconds,
            alive: Xd.alive
          })]
        }), yd && (0, Ed.jsxs)("div", {
          className: "ShootingDeathLife",
          children: [(0, Ed.jsx)(Gd, {
            value: String(xd),
            label: Kd(`${Jd}killsThisLife`)
          }), (0, Ed.jsx)(Gd, {
            icon: "crosshairs",
            value: String(Bd),
            label: Kd(`${Jd}streakPoints`)
          }), (0, Ed.jsx)(Gd, {
            icon: "coins",
            value: `+${Sd}`,
            label: Kd(`${Jd}goldEarned`),
            gold: !0
          })]
        }), (0, Ed.jsxs)("div", {
          className: "ShootingDeathActions",
          children: [(0, Ed.jsx)(Hd.g, {
            className: "ShootingDeathLoadout",
            onClick: () => {
              Zd.e.set({
                openEverythingMenuName: jO.m.SHOP
              })
            },
            touchPressOn: "pointerup",
            children: (0, Ed.jsxs)("span", {
              className: "ShootingDeathLoadoutText",
              children: [Kd(`${Jd}changeLoadout`), (0, Ed.jsx)(fd.b, {
                noaAction: "OpenShop",
                padHidesKey: !0
              })]
            })
          }), (0, Ed.jsx)("div", {
            className: "ShootingDeathStatus FullyFancyText",
            children: Xd.status
          })]
        })]
      })
    }

    function IO(dd) {
      switch (dd) {
        case "self":
          return `${Jd}diedSelf`;
        case "void":
          return `${Jd}diedVoid`;
        default:
          return "respawnPage:youDied"
      }
    }

    function lO(dd) {
      let {
        secondsLeft: Od,
        totalSeconds: md,
        alive: Wd
      } = dd;
      const Fd = Wd || Od <= 0,
        Rd = md > 0 ? Math.min(1, Od / md) : 0;
      return (0, Ed.jsxs)("div", {
        className: "ShootingDeathRing",
        children: [(0, Ed.jsxs)("svg", {
          viewBox: "0 0 44 44",
          children: [(0, Ed.jsx)("circle", {
            className: "ShootingDeathRingTrack",
            cx: "22",
            cy: "22",
            r: 19
          }), (0, Ed.jsx)("circle", {
            className: "ShootingDeathRingFill",
            cx: "22",
            cy: "22",
            r: 19,
            strokeDasharray: DO,
            strokeDashoffset: DO * (1 - (Fd ? 0 : Rd))
          })]
        }), (0, Ed.jsxs)("b", {
          className: "FullyFancyText",
          children: [Fd && (0, Ed.jsx)(qd.c, {
            name: "check"
          }), !Fd && Od]
        })]
      })
    }
    const CO = [1, 0, 2],
      ZO = [`${Jd}place1`, `${Jd}place2`, `${Jd}place3`],
      kO = [`${Jd}place1Short`, `${Jd}place2Short`, `${Jd}place3Short`],
      fO = {
        streak: `${Jd}reasonTimeUp_streak`,
        diamonds: `${Jd}reasonTimeUp_diamonds`,
        kills: `${Jd}reasonTimeUp_kills`
      },
      MO = {
        streak: null,
        diamonds: `${Jd}reasonTarget_diamonds`,
        kills: `${Jd}reasonTarget_kills`
      };

    function dm(dd) {
      let {
        store: Od
      } = dd;
      const md = cd(Od, "roundEnd"),
        Wd = cd(Od, "hud").wire,
        Fd = (0, Nd.h)("localPlayerAlive"),
        Rd = (0, Td.h)(md.lobbyAt),
        Xd = (0, Nd.f)("connectedGame", (dd => dd.replay));
      return "roundEnd" !== md.wire[0] || !Wd || !Fd || Rd <= 0 || Xd ? null : (0, Ed.jsx)(Om, {
        wire: md.wire,
        hud: Wd,
        lobbyAt: md.lobbyAt,
        secondsLeft: Rd
      }, md.lobbyAt)
    }
    const Om = (0, Wd.memo)((function(dd) {
      let {
        wire: Od,
        hud: md,
        lobbyAt: Fd,
        secondsLeft: Rd
      } = dd;
      const {
        t: Xd
      } = (0, pd.G)(), [Kd] = (0, Wd.useState)((() => Math.max(0, Fd - performance.now()))), hd = Ad(), [, vd, Qd, td, , Nd, qd, Hd, yd, bd, , Td, Yd, gd, wd, Ud, Sd, sd] = Od, [, , ud, rd, , nd, Ld, Pd] = md, zd = "tdm" === ud, cd = dd => dd === Ld ? Xd(`${Jd}teamYours`, {
        team: Xd(Bd[dd])
      }) : Xd(Bd[dd]);
      return (0, Ed.jsxs)("div", {
        className: od()("ShootingResults", "win" === vd ? "Won" : "Lost"),
        style: {
          "--lobbyMs": `${sd}ms`,
          "--lobbyElapsedMs": `${Math.max(0,sd-Kd)}ms`
        },
        children: [(0, Ed.jsx)("div", {
          className: "ShootingResultsTitle FullyFancyText",
          children: mm(Xd, Od, zd, Pd, hd)
        }), (0, Ed.jsxs)("div", {
          className: "ShootingResultsScore FullyFancyText",
          children: [zd && (0, Ed.jsxs)(Ed.Fragment, {
            children: [(0, Ed.jsx)("span", {
              className: "ShootingResultsTeam",
              children: cd("Red")
            }), (0, Ed.jsx)("b", {
              style: xd("Red", "tdm"),
              children: Hd
            }), (0, Ed.jsx)("span", {
              className: "ShootingResultsDash",
              children: "\u2013"
            }), (0, Ed.jsx)("b", {
              style: xd("Blue", "tdm"),
              children: yd
            }), (0, Ed.jsx)("span", {
              className: "ShootingResultsTeam",
              children: cd("Blue")
            })]
          }), !zd && ("win" === vd || "" !== Nd) && (0, Ed.jsxs)(Ed.Fragment, {
            children: [(0, Ed.jsx)("span", {
              className: "ShootingResultsTeam",
              children: "win" === vd ? Xd(`${Jd}youWonWith`) : Xd(`${Jd}playerWonWith`, {
                name: hd(Nd)
              })
            }), (0, Ed.jsx)("b", {
              style: xd(td, "ffa"),
              children: bd
            })]
          })]
        }), (0, Ed.jsx)("div", {
          className: "ShootingResultsWhy SmallTextBold",
          children: Wm(Xd, qd, zd, Vd(rd), nd)
        }), Td.length > 0 && (0, Ed.jsx)("div", {
          className: "ShootingResultsPodium",
          children: CO.filter((dd => dd < Td.length)).map((dd => (0, Ed.jsx)(Fm, {
            entry: Td[dd],
            place: dd,
            mvp: Td[dd][0] === Yd,
            tdm: zd
          }, dd)))
        }), !Pd && (0, Ed.jsxs)("div", {
          className: "ShootingResultsYou",
          children: [(0, Ed.jsx)(Gd, {
            value: String(gd),
            label: Xd(`${Jd}kills`)
          }), (0, Ed.jsx)(Gd, {
            value: String(wd),
            label: Xd(`${Jd}deaths`)
          }), (0, Ed.jsx)(Gd, {
            icon: "crosshairs",
            value: String(Ud),
            label: Xd(`${Jd}bestStreak`)
          }), (0, Ed.jsx)(Gd, {
            icon: "coins",
            value: `+${Sd}`,
            label: Xd(`${Jd}goldEarned`),
            gold: !0
          })]
        }), (0, Ed.jsxs)("div", {
          className: "ShootingResultsNext SmallTextBold",
          children: [(0, Ed.jsx)("span", {
            children: Xd(`${Jd}backToLobby`, {
              seconds: String(Rd)
            })
          }), (0, Ed.jsx)("span", {
            className: "ShootingResultsBar",
            children: (0, Ed.jsx)("i", {})
          })]
        })]
      })
    }));

    function mm(dd, Od, md, Wd, Fd) {
      const [, Rd, Xd, Kd, , hd] = Od;
      return Wd && md ? dd(`${Jd}teamWins`, {
        team: sd(Kd) ? dd(Bd[Kd]) : Kd
      }) : Wd ? "" === hd ? dd(`${Jd}matchOver`) : dd(`${Jd}playerWins`, {
        name: Fd(hd)
      }) : "win" === Rd ? dd(`${Jd}victory`) : md || 0 === Xd ? dd(`${Jd}defeat`) : Xd <= ZO.length ? dd(ZO[Xd - 1]) : dd(`${Jd}placeNth`, {
        place: String(Xd)
      })
    }

    function Wm(dd, Od, md, Wd, Fd) {
      switch (Od) {
        case "timeUp":
          return dd(fO[Wd]);
        case "target": {
          const Od = MO[Wd];
          return Od && Fd > 0 ? dd(Od, {
            target: String(Fd)
          }) : dd(`${Jd}reasonTarget`)
        }
        case "lastTeam":
          return dd(md ? `${Jd}reasonLastTeam` : `${Jd}reasonLastPlayer`)
      }
    }

    function Fm(dd) {
      let {
        entry: Od,
        place: md,
        mvp: Wd,
        tdm: Fd
      } = dd;
      const {
        t: Rd
      } = (0, pd.G)(), Xd = Ad(), [Kd, hd, vd, Qd, td] = Od, Hd = (0, Nd.h)("players").localId;
      return (0, Ed.jsxs)("div", {
        className: od()("ShootingPodiumCard", `Place${md+1}`, {
          Mvp: Wd,
          Mine: Kd === Hd,
          Team: Fd
        }),
        style: Fd ? xd(vd, "tdm") : void 0,
        children: [Wd && (0, Ed.jsx)("span", {
          className: "ShootingPodiumCrown",
          children: (0, Ed.jsx)(qd.c, {
            name: "crown"
          })
        }), (0, Ed.jsx)("div", {
          className: "ShootingPodiumHead",
          children: (0, Ed.jsx)(rd, {
            playerId: Kd
          })
        }), (0, Ed.jsxs)("div", {
          className: "ShootingPodiumPlace SmallTextBold",
          children: [Rd(kO[md]), Wd && ` \xb7 ${Rd(`${Jd}mvp`)}`]
        }), (0, Ed.jsx)("div", {
          className: "ShootingPodiumName SmallTextBold",
          children: Xd(hd)
        }), (0, Ed.jsx)("div", {
          className: "ShootingPodiumStats SmallTextBold",
          children: Rd(`${Jd}podiumStats`, {
            kills: String(Qd),
            score: String(td)
          })
        })]
      })
    }

    function Rm(dd) {
      var Od, md;
      let {
        store: Fd,
        variation: Rd
      } = dd;
      const Xd = "lobby" !== (null !== (Od = null === (md = cd(Fd, "hud").wire) || void 0 === md ? void 0 : md[1]) && void 0 !== Od ? Od : "lobby");
      return (0, Wd.useEffect)((() => {
        if (!Xd) return;
        const dd = (0, hd.u)(hd.q);
        return () => {
          dd(), (0, hd.g)()
        }
      }), [Xd]), (0, Wd.useEffect)((() => (0, hd.C)((dd => (0, Ed.jsx)(eO, {
        store: Fd,
        variation: Rd,
        state: dd
      })))), [Fd, Rd]), (0, Ed.jsx)(dm, {
        store: Fd
      })
    }

    function Xm(dd) {
      return (0, Ed.jsxs)(Ed.Fragment, {
        children: [(0, Ed.jsx)(zO, {
          ...dd
        }), (0, Ed.jsx)(Rm, {
          ...dd
        }), (0, Ed.jsx)(QO, {
          ...dd
        })]
      })
    }
    const Km = "CubeWarfareUi",
      hm = "CubeWarfareFfa",
      Qm = function(dd, Od, md, Rd) {
        let {
          localPlayerId: Xd
        } = Rd;
        const td = new zd,
          od = "tdm" === md ? "tdm" : "ffa";
        let Nd = null,
          qd = null,
          Hd = null;
        return {
          onCreate: dd => {
            document.body.classList.add(Km), document.body.classList.toggle(hm, "ffa" === od), qd = new Qd.e(dd, Xd), Hd = new RO((dd => {
              Kd.j.lQ(FO, dd, !0)
            }), (Od => {
              dd.sendCommand(Od)
            })), Nd = (0, hd.F)((0, Wd.createElement)(Wd.Fragment, null, (0, Wd.createElement)(vd.d, {
              controller: qd
            }), (0, Wd.createElement)(Xm, {
              store: td,
              votes: Hd,
              variation: od
            })), {
              content: (0, Wd.createElement)(ed, {
                store: td,
                variation: od
              })
            })
          },
          onClose: () => {
            var dd, Od, md;
            document.body.classList.remove(Km, hm), null === (dd = Nd) || void 0 === dd || dd(), Nd = null, null === (Od = qd) || void 0 === Od || Od.dispose(), qd = null, null === (md = Hd) || void 0 === md || md.dispose(), Hd = null
          },
          onAfterRender: (dd, Od) => {
            var md;
            null === (md = qd) || void 0 === md || md.frame(Od.cameraHeading)
          },
          onReceivedMessageFromServer: (dd, Od) => {
            var md;
            (td.Yt(dd, Od), dd === Fd) && (null === (md = Hd) || void 0 === md || md.onLobby(td.get("lobby").wire))
          }
        }
      }
  },
  41063: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(66),
      Fd = md(1341);
    const Rd = (0, Wd.memo)((function(dd) {
      let {
        controller: Od
      } = dd;
      return (0, Fd.jsxs)("div", {
        className: "DamageFeedback",
        ref: Od.bindElement,
        children: [(0, Fd.jsx)("div", {
          className: "DamageFeedbackLow",
          children: (0, Fd.jsx)("div", {
            className: "DamageFeedbackShade"
          })
        }), (0, Fd.jsx)("div", {
          className: "DamageFeedbackArcs"
        })]
      })
    }))
  },
  41061: (dd, Od, md) => {
    md.d(Od, {
      e: () => Kd
    });
    var Wd = md(32);
    const Fd = "DamageFeedbackArcsShown",
      Rd = .45,
      Xd = .2;
    class Kd {
      constructor(dd, Od) {
        let {
          arcs: md = !0,
          edgeGlow: Fd = !0,
          lowHealthShade: Rd = !0,
          enabled: Xd = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.api = dd, this.localPlayerId = Od, this.root = null, this.lowLayer = null, this.arcLayer = null, this.arcs = [], this.flashes = [], this.lastHealthPool = null, this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, this.maxHealth = null, this.nF = 1, this.dead = !1, this.enabled = void 0, this.parts = void 0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = dd => {
          var Od, md;
          this.clearHits(), this.root = dd, this.lowLayer = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.querySelector(".DamageFeedbackLow")) && void 0 !== Od ? Od : null, this.arcLayer = null !== (md = null === dd || void 0 === dd ? void 0 : dd.querySelector(".DamageFeedbackArcs")) && void 0 !== md ? md : null, this.showRoot(), this.drawLow()
        }, this.parts = {
          arcs: md,
          edgeGlow: Fd,
          lowHealthShade: Rd
        }, this.enabled = Xd, this.token = Wd.j.subscribe("damagedByOtherPlayer", (dd => {
          let {
            direction: Od,
            rF: md
          } = dd;
          this.onHurt(Od, md)
        })), this.syncHealth(), this.showCustomDamage()
      }
      rY(dd) {
        dd !== this.enabled && (this.enabled = dd, this.showCustomDamage(), dd || this.clearHits(), this.showRoot())
      }
      frame(dd) {
        this.syncHealth(), this.cameraHeading = dd;
        for (const Od of this.arcs) this.drawArcAngle(Od)
      }
      dispose() {
        Wd.j.unsubscribe(this.token), this.clearHits(), document.body.classList.remove(Fd)
      }
      showCustomDamage() {
        document.body.classList.toggle(Fd, this.enabled && this.parts.arcs)
      }
      showRoot() {
        this.root && (this.root.style.display = this.enabled ? "" : "none")
      }
      syncHealth() {
        const dd = this.api.getClientOption(this.localPlayerId, "_health"),
          Od = this.api.getClientOption(this.localPlayerId, "_shield"),
          md = this.api.getClientOption(this.localPlayerId, "_totalMaxHealth");
        if (Object.is(dd, this.readHealth) && Object.is(Od, this.readShield) && Object.is(md, this.readMaxHealth)) return;
        if (this.readHealth = dd, this.readShield = Od, this.readMaxHealth = md, null === dd || void 0 === dd || !md) return this.lastHealthPool = null, this.maxHealth = null, this.nF = 1, this.dead = !1, void this.drawLow();
        const Wd = dd + (null !== Od && void 0 !== Od ? Od : 0);
        if (null !== this.lastHealthPool && Wd < this.lastHealthPool) {
          const dd = performance.now(),
            Od = (this.lastHealthPool - Wd) / md;
          this.lastDrop = dd - this.lastDrop.at < 300 ? {
            frac: this.lastDrop.frac + Od,
            at: this.lastDrop.at
          } : {
            frac: Od,
            at: dd
          }
        }
        this.dead = dd <= 0, this.dead && this.clearHits(), this.lastHealthPool = Wd, this.maxHealth = md, this.nF = dd > 0 ? dd / md : 1, this.drawLow()
      }
      onHurt(dd, Od) {
        if (this.syncHealth(), this.dead || !this.enabled) return;
        const md = Math.min(1, this.takeDamageFrac(Od) / .3);
        null !== dd && this.parts.arcs && this.showArc(dd, md), this.parts.edgeGlow && this.flashEdge(null === dd ? null : dd - this.cameraHeading, .4 + .6 * md)
      }
      takeDamageFrac(dd) {
        if (void 0 !== dd && this.maxHealth) return dd / this.maxHealth;
        if (performance.now() - this.lastDrop.at >= 300) return .12;
        const {
          frac: Od
        } = this.lastDrop;
        return this.lastDrop = {
          frac: 0,
          at: -1 / 0
        }, Od
      }
      drawLow() {
        if (!this.lowLayer || !this.parts.lowHealthShade) return;
        const dd = vd((Rd - this.nF) / .25),
          Od = vd((Xd - this.nF) / .15000000000000002),
          md = this.nF < Rd;
        this.lowLayer.classList.toggle("Active", md), this.lowLayer.classList.toggle("Critical", this.nF < Xd), this.lowLayer.style.opacity = String(md ? .55 + .3 * dd + .15 * Od : 0)
      }
      showArc(dd, Od) {
        var md, Wd;
        if (!this.arcLayer) return;
        let Fd = this.arcs.find((Od => hd(Od.direction, dd) < .6));
        if (!Fd) {
          const Od = document.createElement("div");
          Od.className = "DamageFeedbackArc", Od.appendChild(document.createElement("div")).className = "DamageFeedbackArcBand", this.arcLayer.appendChild(Od), Fd = {
            element: Od,
            direction: dd,
            drawnAngle: null,
            fade: null,
            pop: null
          }, this.arcs.push(Fd)
        }
        Fd.direction = dd, this.drawArcAngle(Fd);
        const Rd = Fd.fade ? Number(getComputedStyle(Fd.element).opacity) : 0;
        null === (md = Fd.fade) || void 0 === md || md.cancel(), null === (Wd = Fd.pop) || void 0 === Wd || Wd.cancel(), Fd.element.style.opacity = "1";
        const Xd = Fd.element.animate([{
          opacity: Rd
        }, {
          opacity: 1
        }], 144);
        Fd.fade = Xd, Fd.pop = Fd.element.animate([{
          scale: 1.1 + (1.16 - 1.1) * Od
        }, {
          scale: 1
        }], {
          duration: 160,
          easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
        });
        const Kd = Fd;
        Xd.onfinish = () => {
          if (Kd.fade !== Xd) return;
          const dd = Kd.element.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            delay: 936,
            duration: 864,
            easing: "cubic-bezier(0.4, 0, 0.7, 1)",
            fill: "forwards"
          });
          dd.startTime = Xd.startTime, Kd.fade = dd, dd.onfinish = () => {
            Kd.fade === dd && (Kd.element.remove(), Qd(this.arcs, Kd))
          }
        }
      }
      drawArcAngle(dd) {
        const Od = dd.direction - this.cameraHeading;
        (null === dd.drawnAngle || Math.abs(Od - dd.drawnAngle) > .005) && (dd.drawnAngle = Od, dd.element.style.rotate = `${Od}rad`)
      }
      flashEdge(dd, Od) {
        var md, Wd, Fd;
        if (!this.root) return;
        let Rd = this.flashes.find((Od => null === Od.angle || null === dd ? Od.angle === dd : hd(Od.angle, dd) < .5));
        if (!Rd) {
          const Od = document.createElement("div");
          Od.className = "DamageFeedbackFlash";
          const md = Od.appendChild(document.createElement("div"));
          md.className = "DamageFeedbackFlashGlow", this.root.insertBefore(Od, this.arcLayer), Rd = {
            element: Od,
            glow: md,
            angle: dd,
            level: 0,
            animation: null
          }, this.flashes.push(Rd)
        }
        const Xd = null === (md = Rd.animation) || void 0 === md || null === (Wd = md.effect) || void 0 === Wd ? void 0 : Wd.getComputedTiming().progress,
          Kd = null === Xd || void 0 === Xd ? 0 : Rd.level * (1 - Xd);
        Rd.level = Math.min(1, Math.max(Od, Kd + .6 * Od)), Rd.angle = dd;
        const {
          x: vd,
          y: td,
          rx: od,
          ry: Nd
        } = function(dd, Od) {
          const md = window.innerWidth,
            Wd = window.innerHeight;
          if (null === dd) return {
            x: md / 2,
            y: Wd / 2,
            rx: 0,
            ry: 0
          };
          const Fd = Math.sin(dd),
            Rd = -Math.cos(dd),
            Xd = md / 2 / Math.max(1e-6, Math.abs(Fd)),
            Kd = Wd / 2 / Math.max(1e-6, Math.abs(Rd)),
            hd = Math.min(Xd, Kd),
            vd = Math.round(md / 2 + Fd * hd),
            Qd = Math.round(Wd / 2 + Rd * hd),
            td = Wd / 100 * (.85 + .25 * Od),
            od = Xd <= Kd,
            Nd = Math.round((od ? 30 : 74) * td),
            qd = Math.round((od ? 58 : 26) * td);
          return {
            x: vd,
            y: Qd,
            rx: Nd,
            ry: qd
          }
        }(dd, Rd.level), {
          style: qd
        } = Rd.glow;
        Rd.glow.classList.toggle("Everywhere", null === dd), qd.setProperty("--glowX", `${vd}px`), qd.setProperty("--glowY", `${td}px`), qd.setProperty("--glowRx", `${od}px`), qd.setProperty("--glowRy", `${Nd}px`), Rd.element.style.transformOrigin = `${vd}px ${td}px`, null === (Fd = Rd.animation) || void 0 === Fd || Fd.cancel();
        const Hd = Rd.element.animate([{
          opacity: 0,
          scale: .82,
          easing: "cubic-bezier(0.2, 0.8, 0.3, 1)"
        }, {
          opacity: Rd.level,
          scale: 1,
          offset: .12,
          easing: "linear"
        }, {
          opacity: .8 * Rd.level,
          offset: .38,
          easing: "cubic-bezier(0.4, 0, 0.7, 1)"
        }, {
          opacity: 0,
          scale: .92
        }], {
          duration: 520 + 180 * Rd.level
        });
        Rd.animation = Hd;
        const yd = Rd;
        Hd.onfinish = () => {
          yd.animation === Hd && (yd.element.remove(), Qd(this.flashes, yd))
        }
      }
      clearHits() {
        for (const Wd of this.arcs) {
          var dd, Od;
          null === (dd = Wd.fade) || void 0 === dd || dd.cancel(), Wd.fade = null, null === (Od = Wd.pop) || void 0 === Od || Od.cancel(), Wd.element.remove()
        }
        this.arcs.length = 0;
        for (const Wd of this.flashes) {
          var md;
          null === (md = Wd.animation) || void 0 === md || md.cancel(), Wd.element.remove()
        }
        this.flashes.length = 0
      }
    }

    function hd(dd, Od) {
      return Math.abs(Math.atan2(Math.sin(dd - Od), Math.cos(dd - Od)))
    }

    function vd(dd) {
      return Math.max(0, Math.min(1, dd))
    }

    function Qd(dd, Od) {
      const md = dd.indexOf(Od); - 1 !== md && dd.splice(md, 1)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);