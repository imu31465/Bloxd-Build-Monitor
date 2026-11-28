export const id = 254;
export const ids = [254];
export const modules = {
  42746: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      LobbyManageView: () => mw
    });
    var eb = Mb(64),
      Hb = Mb(1648),
      pb = Mb(38210),
      Vb = Mb(3520),
      gb = Mb(3524),
      lb = Mb(3503),
      Lb = Mb(37854);

    function Ib() {
      const [bb, wb] = (0, eb.useState)(new Map);
      return {
        get: wb => bb.get(wb),
        hold: (0, eb.useCallback)(((bb, Mb, eb) => {
          wb((wb => new Map(wb).set(bb, Mb))), eb.then((() => {
            wb((wb => {
              const Mb = new Map(wb);
              return Mb.delete(bb), Mb
            }))
          }))
        }), [])
      }
    }
    var Ob = Mb(1159),
      Ub = Mb.n(Ob),
      tb = Mb(1259),
      Cb = Mb(1475),
      Eb = Mb(1468),
      Fb = Mb(3856),
      Bb = Mb(4374),
      sb = Mb(4835);
    var mb = Mb(2183),
      hb = Mb(1616),
      zb = Mb(37856),
      Xb = Mb(3848),
      xb = Mb(3984),
      jb = Mb(37996),
      Kb = Mb(4490),
      rb = Mb(382);

    function Rb(bb, wb, Mb) {
      return wb.map((wb => {
        if ("string" === typeof wb) return wb;
        const eb = "str" in wb ? wb.str : wb;
        return "string" === typeof eb ? eb : "entityName" in eb ? eb.entityName : "translationKey" in eb ? bb(eb.translationKey, (0, tb.n)(eb.params, Mb)) : ""
      })).join("")
    }

    function Db(bb, wb, Mb, eb, Hb) {
      return Hb - eb < 6e4 ? bb(`${Mb}JustNow`) : bb(Mb, {
        time: (0, rb.ib)((0, tb.l)(wb, Mb), eb, Hb)
      })
    }
    var cb = Mb(2116),
      Yb = Mb(1876),
      Zb = Mb(1364);

    function fb(bb) {
      let {
        status: wb
      } = bb;
      return (0, Zb.jsx)("span", {
        className: Ub()("LobbyManageStatus", {
          LobbyManageStatusRefused: !wb.ok
        }),
        children: (0, Zb.jsx)(cb.d, {
          text: wb.text
        })
      })
    }

    function Ab(bb) {
      let {
        names: wb,
        cap: Mb,
        filterFrom: Hb,
        moreLabel: pb,
        reveal: Vb = null,
        renderRow: gb
      } = bb;
      const {
        t: lb
      } = (0, tb.C)(), [Lb, Ib] = (0, eb.useState)(!1), [Ob, Ub] = (0, eb.useState)(""), Eb = Lb || null !== Vb && wb.indexOf(Vb) >= Mb, Bb = (Eb || wb.length <= Mb) && null !== Hb && wb.length > Hb, sb = Ob.trim().toLowerCase();
      let mb = Eb ? wb : wb.slice(0, Mb);
      return Bb && "" !== sb && (mb = mb.filter((bb => bb.toLowerCase().includes(sb)))), (0, Zb.jsxs)(Zb.Fragment, {
        children: [Bb && (0, Zb.jsx)(Yb.d, {
          className: "LobbyManageFilter",
          placeholderText: lb("lobbyManage:findName"),
          ariaLabel: lb("lobbyManage:findName"),
          onValueChange: bb => {
            Ub(bb)
          }
        }), mb.length > 0 && (0, Zb.jsx)("div", {
          className: "PlayerRows",
          children: mb.map(((bb, wb) => gb(bb, mb.length - wb)))
        }), !Eb && wb.length > Mb && (0, Zb.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, Zb.jsx)(Fb.d, {
            label: (0, Zb.jsxs)(Zb.Fragment, {
              children: [pb, " ", (0, Zb.jsx)(Cb.b, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              Ib(!0)
            }
          })
        })]
      })
    }

    function Wb(bb) {
      let {
        value: wb,
        placeholder: Mb,
        ariaLabel: Hb,
        maxLength: pb,
        wide: Vb = !1,
        onSave: gb
      } = bb;
      const lb = (0, eb.useRef)(null),
        [Lb, Ib] = (0, eb.useState)(0),
        Ob = (0, eb.useRef)(!0),
        tb = (0, eb.useRef)(null),
        Cb = (0, eb.useRef)({
          value: wb,
          onSave: gb
        });
      Cb.current = {
        value: wb,
        onSave: gb
      };
      const Eb = () => {
        const bb = tb.current;
        tb.current = null, null !== bb && bb !== Cb.current.value && Cb.current.onSave(bb).then((() => {
          Ob.current && Ib((bb => bb + 1))
        }))
      };
      return (0, eb.useEffect)((() => {
        null === tb.current && lb.current && (lb.current.value = wb)
      }), [wb, Lb]), (0, eb.useEffect)((() => () => {
        Ob.current = !1, Eb()
      }), []), (0, Zb.jsx)("div", {
        className: Ub()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: Vb
        }),
        onBlur: Eb,
        children: (0, Zb.jsx)(Yb.d, {
          domRef: lb,
          defaultValue: wb,
          placeholderText: Mb,
          ariaLabel: Hb,
          maxLength: pb,
          onValueChange: bb => {
            tb.current = bb
          },
          onEnter: Eb
        })
      })
    }
    const Jb = ["mod", "coOwner"],
      Sb = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function Nb(bb) {
      var wb, Mb, pb;
      let {
        name: Vb,
        place: gb,
        openedIn: lb,
        isYou: Lb,
        manage: Ob,
        hiddenNames: Ub,
        zIndex: Eb
      } = bb;
      const {
        t: Fb,
        selectedLanguage: Bb
      } = (0, tb.C)(), [sb, mb] = (0, eb.useState)(null), {
        state: rb
      } = Ob, cb = `player:${Vb}`, Yb = (0, zb.j)(gb, null !== rb.gamemodes), Ab = Ob.statusOf(cb), Wb = Ob.isPending(cb), Nb = Ib(), vb = Date.now(), Qb = bb => {
        var wb, Mb;
        return null !== (wb = null === (Mb = (bb => rb.roles.find((wb => wb.role === bb)))(bb)) || void 0 === Mb ? void 0 : Mb.label) && void 0 !== wb ? wb : bb
      }, Gb = bb => {
        const wb = Sb[bb];
        return void 0 === wb ? void 0 : Fb(wb)
      }, qb = "here" === gb.section || "away" === gb.section ? gb.player : null, ab = null !== (wb = Nb.get("role")) && void 0 !== wb ? wb : null === qb || void 0 === qb ? void 0 : qb.role, ib = "here" === gb.section ? gb.player.id : null, {
        playerSocialPreview: ub,
        isFriend: db
      } = null === ib ? {
        playerSocialPreview: (0, jb.k)(Vb, null),
        isFriend: !1
      } : (0, xb.g)(ib, Vb), Pb = function() {
        Ob.send(...arguments)
      }, nb = (bb, wb) => {
        Nb.hold("role", bb, Ob.send({
          type: "setRole",
          name: Vb,
          role: bb
        }, cb, wb))
      };
      let yb = null;
      if ("ban" === (null === sb || void 0 === sb ? void 0 : sb.kind)) yb = Fb("lobbyManageEntry:banConfirm", {
        playerName: Vb
      });
      else if ("role" === (null === sb || void 0 === sb ? void 0 : sb.kind)) {
        var ob;
        yb = `${Fb("lobbyManage:roleConfirm",{playerName:Vb,role:Qb(sb.role)})} ${null!==(ob=Gb(sb.role))&&void 0!==ob?ob:""}`
      } else if (Ab) yb = (0, Zb.jsx)(fb, {
        status: Ab
      });
      else if (Lb) yb = Fb("lobbyManage:you");
      else if ("here" === gb.section) "none" === gb.player.role && vb - gb.player.at < 6e5 && (yb = Db(Fb, Bb.code, "lobbyManage:joinedAgo", gb.player.at, vb));
      else if ("away" === gb.section) {
        if (gb.player.at > 0) {
          const bb = "kicked" === gb.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          yb = Db(Fb, Bb.code, bb, gb.player.at, vb)
        }
      } else "banned" === gb.section ? null !== gb.bannedAt && (yb = Db(Fb, Bb.code, "lobbyManage:bannedAgo", gb.bannedAt, vb)) : "banned" === lb && (yb = Fb("lobbyManageEntry:unbanned"));
      return (0, Zb.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": Vb,
        children: (0, Zb.jsxs)(Xb.d, {
          playerSocialPreview: ub,
          isFriend: db,
          status: yb,
          opensProfileCard: !Lb && (0, xb.i)(!0, Vb, Ub),
          zIndex: Eb,
          children: [null !== sb && (0, Zb.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === sb.kind && (0, Zb.jsxs)(hb.Q, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                mb(null), Pb({
                  type: "ban",
                  name: Vb
                }, cb)
              },
              children: [(0, Zb.jsx)(Cb.b, {
                name: "gavel"
              }), (0, Zb.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: Fb("lobbyManageEntry:ban")
              })]
            }), "role" === sb.kind && (0, Zb.jsx)(hb.f, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: sb.role
              },
              onClick: () => {
                mb(null), nb(sb.role)
              },
              children: Fb("lobbyManage:makeRole", {
                role: Qb(sb.role)
              })
            }), (0, Zb.jsx)(hb.j, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                mb(null)
              },
              children: Fb("general:cancel")
            })]
          }), null === sb && (0, Zb.jsxs)(Zb.Fragment, {
            children: [(0, Zb.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [Yb.gamemode && null !== qb && (0, Zb.jsx)(Kb.c, {
                options: (null !== (Mb = rb.gamemodes) && void 0 !== Mb ? Mb : []).map((bb => ({
                  value: bb.value,
                  label: Rb(Fb, bb.label, Ub)
                }))),
                value: null !== (pb = Nb.get("gamemode")) && void 0 !== pb ? pb : qb.gamemode,
                disabled: Wb,
                revealOnOpen: !0,
                onChange: bb => {
                  (0, Hb.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: bb.value
                  }), Nb.hold("gamemode", bb.value, Ob.send({
                    type: "setGamemode",
                    name: Vb,
                    gamemode: bb.value
                  }, cb))
                }
              }), Yb.roles.length > 0 && null !== qb && (0, Zb.jsx)(Kb.c, {
                options: [...rb.roles].reverse().filter((bb => Yb.roles.includes(bb.role))).map((bb => ({
                  value: bb.role,
                  label: bb.label
                }))),
                value: "none" === ab ? void 0 : ab,
                placeholder: Fb("lobbyManageEntry:giveRole"),
                disabled: Wb,
                revealOnOpen: !0,
                onChange: bb => {
                  var wb;
                  (wb = bb.value) !== (null === qb || void 0 === qb ? void 0 : qb.role) && (Jb.includes(wb) ? mb({
                    kind: "role",
                    role: wb
                  }) : ((0, Hb.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: wb
                  }), nb(wb, Gb(wb))))
                }
              }), null !== Yb.fixedRole && (0, Zb.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: Qb(Yb.fixedRole)
              })]
            }), (0, Zb.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [Yb.kick && (0, Zb.jsxs)(hb.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${Fb("lobbyManageEntry:kick")} ${Vb}`,
                disabled: Wb,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  Pb({
                    type: "kick",
                    name: Vb
                  }, cb)
                },
                children: [(0, Zb.jsx)(Cb.b, {
                  name: "person-falling-burst"
                }), (0, Zb.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: Fb("lobbyManageEntry:kick")
                })]
              }), Yb.ban && (0, Zb.jsxs)(hb.S, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${Fb("lobbyManageEntry:ban")} ${Vb}`,
                disabled: Wb,
                padDestructive: !0,
                onClick: () => {
                  mb({
                    kind: "ban"
                  })
                },
                children: [(0, Zb.jsx)(Cb.b, {
                  name: "gavel"
                }), (0, Zb.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: Fb("lobbyManageEntry:ban")
                })]
              }), Yb.unban && (0, Zb.jsxs)(hb.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${Fb("lobbyManageEntry:unban")} ${Vb}`,
                disabled: Wb,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  Pb({
                    type: "unban",
                    name: Vb
                  }, cb)
                },
                children: [(0, Zb.jsx)(Cb.b, {
                  name: "user-unlock"
                }), (0, Zb.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: Fb("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function vb(bb) {
      var wb, Mb, Hb, pb;
      let {
        manage: Vb,
        focusRequest: gb,
        onFocused: lb
      } = bb;
      const {
        t: Lb
      } = (0, tb.C)(), Ib = (0, mb.h)("players"), Ob = (0, mb.h)("hiddenPlayerNames"), Ub = (0, eb.useRef)(null), {
        state: Eb
      } = Vb, Bb = null === Ib.localId ? null : null !== (wb = null === (Mb = Ib.byId[Ib.localId]) || void 0 === Mb ? void 0 : Mb.name) && void 0 !== wb ? wb : null, [sb] = (0, eb.useState)((() => (0, zb.t)(Eb, Bb))), Xb = (0, zb.m)(sb, Eb, Bb), [xb, jb] = (0, eb.useState)(!1), Kb = (0, zb.h)(Eb, Bb), rb = Vb.statusOf("kickAll");
      (0, eb.useEffect)((() => {
        var bb, wb;
        if (null === gb) return;
        const Mb = null === (bb = Ub.current) || void 0 === bb ? void 0 : bb.querySelector(`[data-lobby-manage-row="${CSS.escape(gb.name)}"]`);
        null === Mb || void 0 === Mb || Mb.scrollIntoView({
          block: "center"
        }), null === Mb || void 0 === Mb || null === (wb = Mb.querySelector(".ProfilePreview")) || void 0 === wb || wb.focus({
          preventScroll: !0
        }), lb(gb.seq)
      }), [null === gb || void 0 === gb ? void 0 : gb.seq]);
      const Rb = bb => (wb, Mb) => (0, Zb.jsx)(Nb, {
        name: wb,
        place: (0, zb.d)(Eb, wb),
        openedIn: bb,
        isYou: wb === Bb,
        manage: Vb,
        hiddenNames: Ob,
        zIndex: Mb
      }, wb);
      return (0, Zb.jsxs)("div", {
        ref: Ub,
        className: "LobbyManagePage",
        children: [Xb.here.length > 0 && (0, Zb.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Zb.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, Zb.jsx)(Fb.d, {
              label: Lb("lobbyManage:here"),
              meta: Eb.here.length
            }), Kb >= zb.q && !xb && (0, Zb.jsxs)(hb.S, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: Vb.isPending("kickAll"),
              onClick: () => {
                jb(!0)
              },
              children: [(0, Zb.jsx)(Cb.b, {
                name: "person-falling-burst"
              }), " ", Lb("lobbyManage:kickAll")]
            })]
          }), xb && Kb >= zb.q && (0, Zb.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, Zb.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: Lb("lobbyManage:kickAllConfirm", {
                count: Kb
              })
            }), (0, Zb.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, Zb.jsx)(hb.Q, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  jb(!1), Vb.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: Lb("lobbyManage:kickAll")
              }), (0, Zb.jsx)(hb.j, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  jb(!1)
                },
                children: Lb("general:cancel")
              })]
            })]
          }), rb && (0, Zb.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, Zb.jsx)(fb, {
              status: rb
            })
          }), (0, Zb.jsx)(Ab, {
            names: Xb.here,
            cap: Xb.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: Rb("here")
          })]
        }), Xb.away.length > 0 && (0, Zb.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Zb.jsx)(Fb.d, {
            label: Lb("lobbyManage:notHere"),
            meta: Xb.away.length
          }), (0, Zb.jsx)(Ab, {
            names: Xb.away,
            cap: 5,
            filterFrom: null,
            moreLabel: Lb("lobbyManage:allCount", {
              count: Xb.away.length
            }),
            reveal: null !== (Hb = null === gb || void 0 === gb ? void 0 : gb.name) && void 0 !== Hb ? Hb : null,
            renderRow: Rb("away")
          })]
        }), Xb.banned.length > 0 && (0, Zb.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Zb.jsx)(Fb.d, {
            label: Lb("lobbyManage:banned"),
            meta: Xb.banned.length
          }), (0, Zb.jsx)(Ab, {
            names: Xb.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: Lb("lobbyManage:allCount", {
              count: Xb.banned.length
            }),
            reveal: null !== (pb = null === gb || void 0 === gb ? void 0 : gb.name) && void 0 !== pb ? pb : null,
            renderRow: Rb("banned")
          })]
        })]
      })
    }
    var Qb = Mb(5472),
      Gb = Mb(1827),
      qb = Mb(37976),
      ab = Mb(37990),
      ib = Mb(37985),
      ub = Mb(37982),
      db = Mb(38014),
      Pb = Mb(37998),
      nb = Mb(38007);

    function yb(bb) {
      const wb = new Set;
      for (const Mb of bb) wb.add(Mb.toLowerCase());
      return wb
    }

    function ob(bb) {
      var wb, Mb;
      let {
        state: Hb,
        lobbyName: pb,
        listed: Vb,
        isListed: gb,
        Wm: lb,
        bR: Lb,
        statusOf: Ib
      } = bb;
      const {
        t: Ob,
        selectedLanguage: Ub
      } = (0, tb.C)(), Cb = (0, Gb.n)(), Eb = (0, mb.h)("players"), Bb = null === Eb.localId ? null : null !== (wb = null === (Mb = Eb.byId[Eb.localId]) || void 0 === Mb ? void 0 : Mb.name) && void 0 !== wb ? wb : null, sb = (0, eb.useMemo)((() => (0, ub.f)(Cb.friends, pb, Hb.here.map((bb => bb.name)))), [Cb.friends, pb, Hb.here]), hb = new Map(sb.map((bb => [bb.friend.name.toLowerCase(), bb]))), zb = function(bb) {
        let {
          refused: wb,
          listed: Mb,
          here: eb,
          friends: Hb,
          excluded: pb
        } = bb;
        const Vb = yb(pb),
          gb = bb => bb.filter((bb => {
            const wb = bb.toLowerCase();
            return !Vb.has(wb) && (Vb.add(wb), !0)
          }));
        return {
          added: [],
          refused: gb(wb),
          listed: gb(Mb),
          suggested: gb([...eb, ...Hb])
        }
      }({
        refused: Hb.refused.map((bb => bb.name)),
        listed: Vb,
        here: Hb.here.map((bb => bb.name)),
        friends: sb.flatMap((bb => "here" === bb.place ? [] : [bb.friend.name])),
        excluded: [...null === Bb ? [] : [Bb], ...[...Hb.here, ...Hb.away].flatMap((bb => "none" === bb.role || (0, ub.g)(Vb, bb.name) ? [] : [bb.name]))]
      }), [Xb] = (0, eb.useState)(zb), [Kb, rb] = (0, eb.useState)([]), Rb = function(bb, wb, Mb) {
        const eb = yb(Mb),
          Hb = yb([...Mb, ...bb.refused, ...bb.listed, ...bb.suggested]),
          pb = Mb => [...bb[Mb].filter((bb => !eb.has(bb.toLowerCase()))), ...wb[Mb].filter((bb => {
            const wb = bb.toLowerCase();
            return !Hb.has(wb) && (Hb.add(wb), !0)
          }))];
        return {
          added: [...Mb],
          refused: pb("refused"),
          listed: pb("listed"),
          suggested: pb("suggested")
        }
      }(Xb, zb, Kb), cb = (bb, wb) => {
        var Mb, eb;
        const pb = bb.toLowerCase(),
          Vb = hb.get(pb),
          Lb = Hb.here.find((bb => bb.name.toLowerCase() === pb)),
          tb = Hb.refused.find((bb => bb.name.toLowerCase() === pb)),
          Cb = null !== (Mb = null === Ib || void 0 === Ib ? void 0 : Ib(bb)) && void 0 !== Mb ? Mb : null;
        let Eb = null;
        Cb ? Eb = (0, Zb.jsx)(fb, {
          status: Cb
        }) : tb ? Eb = Db(Ob, Ub.code, "lobbyManage:triedToJoinAgo", tb.at, Date.now()) : Vb && Lb ? Eb = Ob("lobbyManage:friendHere") : Vb ? Eb = "online" === Vb.place ? Ob("lobbyManage:friendOnline") : Ob("lobbyManage:friend") : Lb && (Eb = Ob("lobbyManage:hereStatus"));
        let Fb = null !== (eb = null === Vb || void 0 === Vb ? void 0 : Vb.friend) && void 0 !== eb ? eb : (0, jb.k)(bb, null);
        return !Vb && null !== Lb && void 0 !== Lb && Lb.id && (Fb = (0, xb.g)(Lb.id, Lb.name).playerSocialPreview), (0, Zb.jsx)(Pb.c, {
          playerSocialPreview: Fb,
          isFriend: void 0 !== Vb,
          hideFriendBadge: !0,
          status: Eb,
          zIndex: wb,
          sO: {
            on: gb(bb),
            onChange: wb => {
              lb(bb, wb)
            }
          }
        }, pb)
      }, Yb = [...Rb.added, ...Rb.refused];
      return (0, Zb.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, Zb.jsx)(Fb.d, {
          label: Ob("worldSocial:whitelist"),
          meta: Vb.length
        }), (0, Zb.jsx)(nb.d, {
          label: Ob("lobbyManage:add"),
          icon: "user-check",
          placeholder: Ob("socialBar:enterPlayerName"),
          onSubmit: async bb => {
            const wb = await Lb(bb);
            return wb.ok && rb((wb => [bb, ...wb])), wb
          }
        }), Yb.length > 0 && (0, Zb.jsx)("div", {
          className: "PlayerRows",
          children: Yb.map(((bb, wb) => cb(bb, Yb.length - wb)))
        }), (0, Zb.jsx)(Ab, {
          names: Rb.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: Ob("lobbyManage:allOnWhitelist", {
            count: Rb.listed.length
          }),
          renderRow: cb
        }), (0, Zb.jsx)(Ab, {
          names: Rb.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: Ob("lobbyManage:allCount", {
            count: Rb.suggested.length
          }),
          renderRow: cb
        })]
      })
    }

    function Tb(bb) {
      let {
        manage: wb,
        listing: Mb
      } = bb;
      const {
        t: eb
      } = (0, tb.C)(), pb = (bb, Mb) => ((0, Hb.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: bb
      }), wb.send({
        type: "setListing",
        field: bb,
        value: Mb
      }, `listing:${bb}`)), Vb = bb => {
        const Mb = wb.statusOf(`listing:${bb}`);
        return Mb && !Mb.ok && (0, Zb.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, Zb.jsx)(fb, {
            status: Mb
          })
        })
      };
      return (0, Zb.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, Zb.jsx)(Fb.d, {
          label: eb("lobbyManage:inWorldsList")
        }), (0, Zb.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Zb.jsx)("div", {
            className: "SliderText",
            children: eb("lobbyManage:description")
          }), (0, Zb.jsx)(Wb, {
            value: Mb.description,
            ariaLabel: eb("lobbyManage:description"),
            wide: !0,
            onSave: bb => pb("description", bb)
          })]
        }), Vb("description"), (0, Zb.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Zb.jsx)("div", {
            className: "SliderText",
            children: eb("lobbyManage:emojis")
          }), (0, Zb.jsx)(Wb, {
            value: Mb.emojis,
            ariaLabel: eb("lobbyManage:emojis"),
            onSave: bb => pb("emojis", bb)
          })]
        }), Vb("emojis"), (0, Zb.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Zb.jsx)("div", {
            className: "SliderText",
            children: eb("lobbyManage:colour")
          }), (0, Zb.jsx)(kb, {
            value: Mb.colour,
            ariaLabel: eb("lobbyManage:colour"),
            onSave: bb => {
              pb("colour", bb)
            }
          })]
        }), Vb("colour")]
      })
    }

    function kb(bb) {
      let {
        value: wb,
        ariaLabel: Mb,
        onSave: Hb
      } = bb;
      const pb = (0, eb.useRef)(null),
        Vb = (0, eb.useRef)({
          value: wb,
          onSave: Hb
        });
      Vb.current = {
        value: wb,
        onSave: Hb
      };
      const gb = (0, eb.useRef)(null),
        lb = (0, eb.useRef)(!1),
        Lb = bb => {
          lb.current && bb.value !== Vb.current.value && bb.value !== gb.current && (gb.current = bb.value, Vb.current.onSave(bb.value))
        };
      return (0, eb.useEffect)((() => {
        pb.current && document.activeElement !== pb.current && (pb.current.value = wb)
      }), [wb]), (0, eb.useEffect)((() => {
        const bb = pb.current,
          wb = () => {
            Lb(bb)
          };
        return bb.addEventListener("change", wb), () => {
          bb.removeEventListener("change", wb), Lb(bb)
        }
      }), []), (0, Zb.jsx)("input", {
        ref: pb,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: wb,
        "aria-label": Mb,
        onInput: () => {
          lb.current = !0
        },
        onBlur: bb => {
          Lb(bb.currentTarget)
        }
      })
    }

    function bw(bb) {
      let {
        manage: wb
      } = bb;
      const {
        lobbyName: Mb,
        shownLobbyName: eb
      } = (0, mb.h)("connectedGame");
      return wb.state.you.canSetVisibility && null !== Mb ? (0, Zb.jsx)(Mw, {
        manage: wb,
        lobbyName: Mb,
        worldCode: null !== eb && void 0 !== eb ? eb : Mb
      }, Mb) : (0, Zb.jsx)(ew, {
        manage: wb,
        lobbyName: null !== Mb && void 0 !== Mb ? Mb : ""
      })
    }

    function ww(bb) {
      return bb.map((bb => bb.toLowerCase())).sort().join(",")
    }

    function Mw(bb) {
      var wb;
      let {
        manage: Mb,
        lobbyName: pb,
        worldCode: Vb
      } = bb;
      const {
        t: gb
      } = (0, tb.C)(), {
        settings: lb,
        loading: Lb,
        change: Ib,
        retry: Ob,
        refresh: Ub
      } = (0, qb.f)(pb), Cb = (0, Gb.n)(), {
        state: Bb
      } = Mb, sb = (0, eb.useRef)(lb);
      sb.current = lb;
      const mb = ww(null !== (wb = Bb.whitelist) && void 0 !== wb ? wb : []),
        zb = null !== Bb.whitelist;
      (0, eb.useEffect)((() => {
        const bb = sb.current;
        null !== bb && (bb.visibility !== Bb.visibility || zb && ww(bb.whitelist) !== mb) && Ub()
      }), [Bb.visibility, mb, zb, Ub]);
      const Xb = async (bb, wb) => {
        let Mb = null;
        return await Ib(bb, wb, {
          quiet: !0,
          onAnswer: bb => {
            Mb = bb
          }
        }), Mb
      }, xb = (bb, wb) => {
        null !== wb && "error" in wb && Mb.showStatus(bb, {
          ok: !1,
          text: [gb(wb.error)]
        })
      }, jb = async bb => {
        if (null === lb || bb === lb.visibility) return;
        (0, Hb.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: bb
        });
        const wb = "whitelist" === bb ? (0, ub.d)((0, ub.f)(Cb.friends, pb, Bb.here.map((bb => bb.name))), (0, db.b)(pb), lb.whitelist) : [],
          Mb = await Xb({
            setVisibility: bb
          }, (wb => ({
            ...wb,
            visibility: bb
          })));
        xb("mode", Mb), null === Mb || "error" in Mb || await (async bb => {
          for (const wb of (0, ub.i)(bb, Qb.w))
            if (!await Ib({
                whitelistAdd: wb
              }, (bb => (0, ub.l)(bb, wb, !0)))) return !1;
          return !0
        })(wb)
      }, Kb = (0, eb.useMemo)((() => {
        var bb;
        if (null === lb) return [];
        const wb = null !== (bb = Bb.whitelist) && void 0 !== bb ? bb : [];
        return [...wb.filter((bb => (0, ub.g)(lb.whitelist, bb))), ...lb.whitelist.filter((bb => !(0, ub.g)(wb, bb)))]
      }), [lb, Bb.whitelist]), rb = Mb.statusOf("mode");
      return (0, Zb.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Zb.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Zb.jsx)(Fb.d, {
            label: gb("worldSocial:whoCanJoin")
          }), null === lb && Lb && (0, Zb.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Zb.jsx)(Eb.c, {})
          }), null === lb && !Lb && (0, Zb.jsx)(hb.j, {
            className: "SmallTextLight",
            onClick: Ob,
            children: gb("worldSocial:loadFailed")
          }), null !== lb && (0, Zb.jsx)(ab.c, {
            visibility: lb.visibility,
            onPick: bb => {
              jb(bb)
            }
          }), rb && (0, Zb.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, Zb.jsx)(fb, {
              status: rb
            })
          }), null !== lb && "private" !== lb.visibility && (0, Zb.jsx)(ib.b, {
            worldCode: Vb,
            message: null
          })]
        }), "whitelist" === (null === lb || void 0 === lb ? void 0 : lb.visibility) && (0, Zb.jsx)(ob, {
          state: Bb,
          lobbyName: pb,
          listed: Kb,
          isListed: bb => (0, ub.g)(lb.whitelist, bb),
          Wm: (bb, wb) => {
            (0, Hb.reportAnalyticsClick)(wb ? {
              id: "lobby_manage.whitelist_add",
              value: "sO"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), Xb(wb ? {
              whitelistAdd: [bb]
            } : {
              whitelistRemove: bb
            }, (Mb => (0, ub.l)(Mb, [bb], wb))).then((wb => {
              xb(`whitelist:${bb.toLowerCase()}`, wb)
            }))
          },
          bR: async bb => {
            (0, Hb.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const wb = await Xb({
              whitelistAdd: [bb]
            }, (wb => (0, ub.l)(wb, [bb], !0)));
            return null === wb ? {
              ok: !1,
              error: gb("worldSocial:changeFailed")
            } : "error" in wb ? {
              ok: !1,
              error: gb(wb.error)
            } : (0, ub.g)(wb.notFound, bb) ? {
              ok: !1,
              error: gb("lobbyManage:noPlayerCalled", {
                playerName: bb
              })
            } : {
              ok: !0
            }
          },
          statusOf: bb => Mb.statusOf(`whitelist:${bb.toLowerCase()}`)
        }), "public" === (null === lb || void 0 === lb ? void 0 : lb.visibility) && null !== Bb.listing && (0, Zb.jsx)(Tb, {
          manage: Mb,
          listing: Bb.listing
        })]
      })
    }

    function ew(bb) {
      var wb;
      let {
        manage: Mb,
        lobbyName: eb
      } = bb;
      const {
        t: pb
      } = (0, tb.C)(), {
        state: Vb
      } = Mb, gb = Ib(), lb = null !== (wb = Vb.whitelist) && void 0 !== wb ? wb : [];
      return (0, Zb.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Zb.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Zb.jsx)(Fb.d, {
            label: pb("worldSocial:whoCanJoin")
          }), (0, Zb.jsx)("div", {
            className: "LobbyManageModeText",
            children: pb(`worldSocial:${Vb.visibility}`)
          })]
        }), "whitelist" === Vb.visibility && Vb.you.canEditWhitelist && (0, Zb.jsx)(ob, {
          state: Vb,
          lobbyName: eb,
          listed: lb,
          isListed: bb => {
            var wb;
            return null !== (wb = gb.get(bb.toLowerCase())) && void 0 !== wb ? wb : (0, ub.g)(lb, bb)
          },
          Wm: (bb, wb) => {
            (0, Hb.reportAnalyticsClick)(wb ? {
              id: "lobby_manage.whitelist_add",
              value: "sO"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const eb = bb.toLowerCase();
            gb.hold(eb, wb, Mb.send(wb ? {
              type: "whitelistAdd",
              names: [bb]
            } : {
              type: "whitelistRemove",
              name: bb
            }, `whitelist:${eb}`))
          },
          bR: async bb => {
            (0, Hb.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const wb = await Mb.send({
              type: "whitelistAdd",
              names: [bb]
            }, "whitelist-field");
            return wb.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, Zb.jsx)(cb.d, {
                text: wb.message
              })
            }
          },
          statusOf: bb => Mb.statusOf(`whitelist:${bb.toLowerCase()}`)
        }), "public" === Vb.visibility && null !== Vb.listing && (0, Zb.jsx)(Tb, {
          manage: Mb,
          listing: Vb.listing
        })]
      })
    }
    var Hw = Mb(6050),
      pw = Mb(1516);
    const Vw = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const gw = (0, eb.memo)((function(bb) {
      var wb;
      let {
        rule: Mb,
        value: eb,
        status: Hb,
        pending: pb,
        hiddenNames: Vb,
        FY: gb,
        onAction: lb
      } = bb;
      const {
        t: Lb
      } = (0, tb.C)(), Ib = bb => gb(Mb, bb), Ob = (bb, wb) => {
        lb(Mb, bb, wb)
      }, Ub = Rb(Lb, Mb.label, Vb), Cb = Mb.info ? Rb(Lb, Mb.info, Vb) : void 0, Eb = Mb.placeholder ? Rb(Lb, Mb.placeholder, Vb) : void 0, Fb = (null !== (wb = Mb.options) && void 0 !== wb ? wb : []).map((bb => ({
        value: bb.value,
        label: Rb(Lb, bb.label, Vb)
      }))), Bb = Math.max(0, ...Fb.map((bb => function(bb) {
        let wb = 0;
        for (const Mb of bb) wb += Vw.test(Mb) ? 2 : 1;
        return wb
      }(bb.label)))), sb = Hb && (0, Zb.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, Zb.jsx)(fb, {
          status: Hb
        })
      }), mb = (0, Zb.jsxs)("div", {
        className: "SliderText",
        children: [Ub, void 0 !== Cb && (0, Zb.jsx)(pw.b, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: Cb
        })]
      });
      return "toggle" === Mb.kind ? (0, Zb.jsxs)(Zb.Fragment, {
        children: [(0, Zb.jsx)(Hw.d, {
          label: Ub,
          checked: !0 === eb,
          circleInfoText: Cb,
          disabled: pb,
          onClick: Ib
        }), sb]
      }) : "choice" === Mb.kind && Fb.length <= 3 ? (0, Zb.jsxs)(Zb.Fragment, {
        children: [(0, Zb.jsx)(Hw.f, {
          label: Ub,
          options: Fb,
          value: String(eb),
          circleInfoText: Cb,
          onChange: Ib
        }), sb]
      }) : (0, Zb.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [mb, "choice" === Mb.kind && (0, Zb.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": Bb
          },
          children: (0, Zb.jsx)(Kb.c, {
            options: Fb,
            value: String(eb),
            disabled: pb,
            revealOnOpen: !0,
            onChange: bb => {
              Ib(bb.value)
            }
          })
        }), ("number" === Mb.kind || "text" === Mb.kind) && (0, Zb.jsx)(Wb, {
          value: null === eb ? "" : String(eb),
          placeholder: Eb,
          ariaLabel: Ub,
          onSave: bb => {
            const wb = bb.trim(),
              eb = Number(wb);
            return Ib("number" === Mb.kind && "" !== wb && Number.isFinite(eb) ? eb : wb)
          }
        }), "action" === Mb.kind && (0, Zb.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [Fb.length > 3 && (0, Zb.jsx)(Kb.c, {
            options: Fb,
            value: {
              value: "",
              label: null !== Eb && void 0 !== Eb ? Eb : Ub
            },
            disabled: pb,
            revealOnOpen: !0,
            onChange: bb => {
              Ob(bb.value)
            }
          }), Fb.length > 0 && Fb.length <= 3 && Fb.map((bb => (0, Zb.jsx)(hb.j, {
            className: "SmallTextLight",
            disabled: pb,
            onClick: () => {
              Ob(bb.value)
            },
            children: bb.label
          }, bb.value))), 0 === Fb.length && (0, Zb.jsx)(hb.j, {
            className: "SmallTextLight",
            disabled: pb,
            onClick: () => {
              Ob()
            },
            children: null !== Eb && void 0 !== Eb ? Eb : Ub
          })]
        }), "names" === Mb.kind && (0, Zb.jsx)(lw, {
          names: Array.isArray(eb) ? eb : [],
          pending: pb,
          onAction: Ob
        }), sb]
      })
    }));

    function lw(bb) {
      let {
        names: wb,
        pending: Mb,
        onAction: Hb
      } = bb;
      const {
        t: pb
      } = (0, tb.C)(), Vb = (0, eb.useRef)(null), [gb, lb] = (0, eb.useState)(""), Lb = () => {
        const bb = gb.trim();
        "" !== bb && (Hb(bb, "add"), Vb.current && (Vb.current.value = ""), lb(""))
      };
      return (0, Zb.jsxs)("div", {
        className: "LobbyManageNames",
        children: [wb.map((bb => (0, Zb.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, Zb.jsx)("span", {
            className: "LobbyManageNameText",
            children: bb
          }), (0, Zb.jsx)(hb.j, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: pb("lobbyManage:removeName", {
              name: bb
            }),
            disabled: Mb,
            onClick: () => {
              Hb(bb, "remove")
            },
            children: (0, Zb.jsx)(Cb.b, {
              name: "xmark"
            })
          })]
        }, bb))), (0, Zb.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, Zb.jsx)(Yb.d, {
            domRef: Vb,
            placeholderText: pb("lobbyManage:namePlaceholder"),
            ariaLabel: pb("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: bb => {
              lb(bb)
            },
            onEnter: Lb
          }), (0, Zb.jsx)(hb.j, {
            className: "SmallTextLight",
            disabled: Mb || "" === gb.trim(),
            onClick: Lb,
            children: pb("lobbyManage:addHere")
          })]
        })]
      })
    }
    const Lw = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function Iw(bb, wb) {
      return Lw.map((Mb => {
        let {
          group: eb,
          title: Hb
        } = Mb;
        const pb = bb.filter((bb => bb.group === eb && void 0 === bb.parent)).map((Mb => {
          const eb = !0 === wb(Mb) ? bb.filter((bb => bb.parent === Mb.key)) : [];
          return {
            rule: Mb,
            children: eb
          }
        }));
        return {
          group: eb,
          title: Hb,
          items: pb
        }
      }))
    }

    function Ow(bb) {
      return bb.flatMap((bb => {
        let {
          items: wb
        } = bb;
        return wb.flatMap((bb => {
          let {
            rule: wb,
            children: Mb
          } = bb;
          return [wb, ...Mb]
        }))
      }))
    }

    function Uw(bb) {
      let {
        manage: wb,
        rowsShown: Mb
      } = bb;
      const {
        t: pb
      } = (0, tb.C)(), Vb = (0, mb.h)("hiddenPlayerNames"), {
        rules: gb
      } = wb.state, lb = Ib(), Lb = bb => {
        const wb = lb.get(bb.key);
        return void 0 === wb ? bb.value : wb
      }, Ob = Iw(gb, Lb), [Ub] = (0, eb.useState)((() => Ow(Ob).map((bb => bb.key)))), Cb = Mb === 1 / 0 ? null : new Set(Ub.slice(0, Mb)), Eb = bb => null === Cb || Cb.has(bb.key), {
        hold: Bb
      } = lb, sb = (0, eb.useCallback)(((bb, Mb) => {
        (0, Hb.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: bb.key
        });
        const eb = wb.send({
          type: "setRule",
          key: bb.key,
          value: Mb
        }, `rule:${bb.key}`);
        return Bb(bb.key, Mb, eb), eb
      }), [wb, Bb]), hb = (0, eb.useCallback)(((bb, Mb, eb) => {
        (0, Hb.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: bb.key
        }), wb.send({
          type: "ruleAction",
          key: bb.key,
          ...void 0 === Mb ? {} : {
            arg: Mb
          },
          ...void 0 === eb ? {} : {
            op: eb
          }
        }, `rule:${bb.key}`, void 0 === eb ? pb("lobbyManage:setJustNow") : void 0)
      }), [wb, pb]), zb = bb => {
        const Mb = `rule:${bb.key}`;
        return (0, Zb.jsx)(gw, {
          rule: bb,
          value: Lb(bb),
          status: wb.statusOf(Mb),
          pending: wb.isPending(Mb),
          hiddenNames: Vb,
          FY: sb,
          onAction: hb
        }, bb.key)
      };
      return (0, Zb.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: Ob.map((bb => {
          let {
            group: wb,
            title: Mb,
            items: Hb
          } = bb;
          const Vb = Hb.filter((bb => {
            let {
              rule: wb
            } = bb;
            return Eb(wb)
          }));
          return 0 === Vb.length ? null : (0, Zb.jsxs)(eb.Fragment, {
            children: [(0, Zb.jsx)(Fb.d, {
              label: pb(Mb)
            }), Vb.map((bb => {
              let {
                rule: wb,
                children: Mb
              } = bb;
              return 0 === Mb.length ? zb(wb) : (0, Zb.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [zb(wb), Mb.filter(Eb).map(zb)]
              }, wb.key)
            }))]
          }, wb)
        }))
      })
    }
    const tw = {
        players: {
          icon: "user-group",
          title: "lobbyManage:players"
        },
        joining: {
          icon: "door-open",
          title: "lobbyManage:joining"
        },
        rules: {
          icon: "list",
          title: "lobbyManage:rules"
        },
        leaderboard: {
          icon: "trophy",
          title: "lobbyManage:leaderboard"
        }
      },
      Cw = 5,
      Ew = (0, eb.memo)((function(bb) {
        let {
          page: wb,
          manage: Mb,
          leaderboard: Hb,
          focusRequest: pb,
          onFocused: Vb,
          ruleRowsShown: gb
        } = bb;
        return "leaderboard" === wb ? (0, Zb.jsx)(eb.Suspense, {
          fallback: (0, Zb.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Zb.jsx)(Eb.c, {})
          }),
          children: Hb
        }) : "joining" === wb ? (0, Zb.jsx)(bw, {
          manage: Mb
        }) : "rules" === wb ? (0, Zb.jsx)(Uw, {
          manage: Mb,
          rowsShown: gb
        }) : (0, Zb.jsx)(vb, {
          manage: Mb,
          focusRequest: pb,
          onFocused: Vb
        })
      }));

    function Fw(bb) {
      let {
        page: wb
      } = bb;
      const {
        t: Mb
      } = (0, tb.C)(), eb = tw[wb];
      return (0, Zb.jsxs)(Zb.Fragment, {
        children: [(0, Zb.jsx)(Cb.b, {
          name: eb.icon
        }), " ", (0, Zb.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: Mb(eb.title)
        })]
      })
    }

    function Bw(bb) {
      var wb;
      const {
        t: Mb
      } = (0, tb.C)(), {
        pages: pb,
        landing: Vb
      } = bb, lb = (0, eb.useRef)(null), Lb = (0, eb.useRef)(null), Ib = (0, eb.useRef)(null), Ob = (0, eb.useRef)(new Map), [Cb, Eb] = (0, eb.useState)(null), mb = (0, eb.useRef)(Cb), hb = (0, eb.useRef)(0), [zb, Xb] = (0, eb.useState)(pb[0]), xb = null !== Cb && void 0 !== Cb ? Cb : pb.includes(zb) ? zb : pb[0], [jb] = (0, eb.useState)(null !== (wb = null === Vb || void 0 === Vb ? void 0 : Vb.page) && void 0 !== wb ? wb : null), Kb = null !== jb && pb.includes(jb) ? [jb, ...pb.filter((bb => bb !== jb))] : pb, [rb] = (0, eb.useState)((() => {
        const wb = Ow(Iw(bb.manage.state.rules, (bb => bb.value)));
        return Math.max(1, Math.ceil(wb.length / Cw))
      })), Rb = Kb.flatMap((bb => "rules" === bb ? Array(rb).fill(bb) : [bb])), Db = function(bb, wb) {
        const [Mb, Hb] = (0, eb.useState)(bb), pb = Mb >= wb;
        return pb && Mb !== 1 / 0 && Hb(1 / 0), (0, eb.useLayoutEffect)((() => {
          if (pb) return;
          let bb = !0;
          return (0, sb.e)().then((() => {
            bb && Hb((bb => bb + 1))
          })), () => {
            bb = !1
          }
        }), [Mb, pb]), pb ? 1 / 0 : Mb
      }(1, Rb.length), cb = Rb.slice(0, Db), Yb = new Set(cb), fb = Db < Rb.length, Ab = fb ? cb.filter((bb => "rules" === bb)).length * Cw : 1 / 0, Wb = (0, eb.useRef)(bb.focusRequest);
      Wb.current = bb.focusRequest;
      const Jb = bb => {
          mb.current = bb, Eb(bb)
        },
        Sb = () => {
          var bb, wb;
          lb.current.style.scrollPaddingTop = `${null!==(bb=null===(wb=Ib.current)||void 0===wb?void 0:wb.offsetHeight)&&void 0!==bb?bb:0}px`
        },
        Nb = bb => {
          const wb = lb.current,
            Mb = Ob.current.get(bb);
          if (void 0 === Mb) return;
          const eb = document.activeElement,
            Hb = Wb.current,
            pb = null === Hb ? null : Mb.querySelector(`[data-lobby-manage-row="${CSS.escape(Hb.name)}"]`);
          Sb(), eb instanceof HTMLElement && null !== pb && void 0 !== pb && pb.contains(eb) ? eb.scrollIntoView({
            block: "center"
          }) : null === Mb.previousElementSibling ? wb.scrollTop = 0 : Mb.scrollIntoView({
            block: "start"
          }), hb.current = wb.scrollTop
        },
        vb = bb => {
          (0, Hb.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: bb
          }), Jb(bb), Nb(bb)
        },
        Qb = () => {
          var bb, wb;
          const Mb = lb.current,
            eb = Mb.getBoundingClientRect().top + (null !== (bb = null === (wb = Ib.current) || void 0 === wb ? void 0 : wb.offsetHeight) && void 0 !== bb ? bb : 0),
            Hb = pb.map((bb => {
              var wb, Mb;
              return (null !== (wb = null === (Mb = Ob.current.get(bb)) || void 0 === Mb ? void 0 : Mb.getBoundingClientRect().top) && void 0 !== wb ? wb : 1 / 0) - eb
            })),
            Vb = !fb && Mb.scrollTop + Mb.clientHeight >= Mb.scrollHeight - 1;
          Xb(pb[(0, gb.i)(Hb, Vb)])
        },
        Gb = () => {
          null !== mb.current && (Jb(null), Qb())
        };
      (0, eb.useLayoutEffect)((() => {
        null !== Vb && pb.includes(Vb.page) && vb(Vb.page)
      }), [null === Vb || void 0 === Vb ? void 0 : Vb.seq]), (0, eb.useLayoutEffect)((() => {
        null === mb.current || pb.includes(mb.current) || Gb()
      }));
      const {
        onFocused: qb
      } = bb, ab = (0, eb.useCallback)((bb => {
        null !== mb.current && Nb(mb.current), qb(bb)
      }), [qb]);
      (0, eb.useLayoutEffect)((() => {
        const bb = mb.current;
        null !== bb && (!fb || pb.indexOf(Rb[Db - 1]) < pb.indexOf(bb)) && Nb(bb)
      }), [Db]), (0, eb.useEffect)((() => {
        const bb = new ResizeObserver((() => {
          null !== mb.current ? Nb(mb.current) : Sb()
        }));
        return bb.observe(lb.current), bb.observe(Lb.current), () => {
          bb.disconnect()
        }
      }), []), (0, eb.useLayoutEffect)((() => {
        const bb = Ib.current,
          wb = null === bb || void 0 === bb ? void 0 : bb.querySelector(".SegmentedToggleOptionSelected");
        wb && (bb.scrollLeft = Math.min(wb.offsetLeft, Math.max(bb.scrollLeft, wb.offsetLeft + wb.offsetWidth - bb.clientWidth)))
      }), [xb]);
      return (0, Zb.jsxs)("div", {
        ref: lb,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === mb.current ? Qb() : Math.abs(lb.current.scrollTop - hb.current) > 1 && Gb()
        },
        onClick: bb => {
          var wb;
          null !== (wb = Ib.current) && void 0 !== wb && wb.contains(bb.target) || Gb()
        },
        onFocus: bb => {
          var wb;
          const Mb = null === mb.current ? null : Ob.current.get(mb.current);
          !Mb || Mb.contains(bb.target) || null !== (wb = Ib.current) && void 0 !== wb && wb.contains(bb.target) || Gb()
        },
        children: [pb.length > 1 && (0, Zb.jsx)("div", {
          ref: Ib,
          className: "LobbyManageChips",
          children: (0, Zb.jsx)(Bb.c, {
            options: pb.map((bb => ({
              value: bb,
              label: (0, Zb.jsx)(Fw, {
                page: bb
              }),
              ariaLabel: Mb(tw[bb].title)
            }))),
            value: xb,
            padTabs: "2",
            ariaLabel: Mb("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: vb
          })
        }), (0, Zb.jsx)("div", {
          ref: Lb,
          className: Ub()("LobbyManageInner", {
            Staging: fb
          }),
          children: pb.filter((bb => Yb.has(bb))).map((wb => {
            const Mb = wb === Cb;
            return (0, Zb.jsxs)("section", {
              ref: bb => {
                bb ? Ob.current.set(wb, bb) : Ob.current.delete(wb)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": Mb || void 0,
              children: [pb.length > 1 && (0, Zb.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": Mb || void 0,
                "data-pad-unavailable": Mb || void 0,
                children: (0, Zb.jsx)(Fb.d, {
                  label: (0, Zb.jsx)(Fw, {
                    page: wb
                  })
                })
              }), (0, Zb.jsx)(Ew, {
                page: wb,
                manage: bb.manage,
                leaderboard: bb.leaderboard,
                focusRequest: bb.focusRequest,
                onFocused: ab,
                ruleRowsShown: "rules" === wb ? Ab : 1 / 0
              })]
            }, wb)
          }))
        })]
      })
    }

    function sw(bb) {
      return void 0 === (null === bb || void 0 === bb ? void 0 : bb.page) ? null : {
        page: bb.page,
        seq: bb.seq
      }
    }

    function mw(bb) {
      let {
        leaderboard: wb
      } = bb;
      const Mb = function() {
          const bb = (0, lb.k)("lobbyManage"),
            [wb, Mb] = (0, eb.useReducer)((bb => bb + 1), 0),
            [Hb] = (0, eb.useState)((() => new Lb.b(Mb)));
          return (0, eb.useEffect)((() => {
            const bb = Hb.nextDeadline();
            if (null === bb) return;
            const wb = setTimeout((() => {
              Hb.expire(Date.now()), Mb()
            }), Math.max(0, bb - Date.now()));
            return () => {
              clearTimeout(wb)
            }
          })), (0, eb.useMemo)((() => null === bb ? null : {
            state: bb,
            send: (bb, wb, eb) => {
              const pb = Hb.send(bb, wb, null !== eb && void 0 !== eb ? eb : null);
              return Mb(), pb
            },
            statusOf: bb => Hb.statusOf(bb, Date.now()),
            showStatus: (bb, wb) => {
              Hb.show(bb, wb)
            },
            isPending: bb => Hb.isPending(bb)
          }), [bb, wb, Hb])
        }(),
        Ib = (0, gb.j)((0, pb.c)()),
        Ob = (0, Vb.k)(),
        [Ub, tb] = (0, eb.useState)((() => sw(Ob))),
        [Cb, Eb] = (0, eb.useState)(null);
      return (0, eb.useEffect)((() => {
        null === Ob && (0, Hb.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, eb.useEffect)((() => {
        null !== Ob && (tb((bb => (null === bb || void 0 === bb ? void 0 : bb.seq) === Ob.seq ? bb : sw(Ob))), void 0 !== Ob.focusName && "players" === Ob.page ? Eb({
          name: Ob.focusName,
          seq: Ob.seq
        }) : (0, Vb.i)(Ob.seq))
      }), [null === Ob || void 0 === Ob ? void 0 : Ob.seq]), null === Mb ? null : (0, Zb.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, Zb.jsx)(Bw, {
          pages: (0, gb.e)(Mb.state, Ib),
          manage: Mb,
          leaderboard: wb,
          focusRequest: Cb,
          onFocused: Vb.i,
          landing: Ub
        })
      })
    }
  },
  37854: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ib,
      d: () => lb
    });
    var eb = Mb(1648),
      Hb = Mb(2167),
      pb = Mb(2142);
    const Vb = 1e4;
    let gb = 0;

    function lb(bb) {
      const wb = ++gb;
      return new Promise((Mb => {
        const gb = wb => {
            lb(), clearTimeout(Lb), !1 === (null === wb || void 0 === wb ? void 0 : wb.ok) && (0, eb.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: bb.type
            }), Mb(wb)
          },
          lb = Hb.c.subscribe("lobbyManage", (bb => {
            const Mb = function(bb, wb) {
              var Mb;
              return null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.results.find((bb => bb.requestId === wb))) && void 0 !== Mb ? Mb : null
            }(bb, wb);
            null !== Mb && gb(Mb)
          })),
          Lb = setTimeout((() => {
            gb(null)
          }), Vb);
        pb.gameBridge.send("lobbyManage", {
          ...bb,
          requestId: wb
        })
      }))
    }
    const Lb = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class Ib {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lb;
        this.onChange = bb, this.sendAction = wb, this.pending = new Map, this.statuses = new Map
      }
      send(bb, wb, Mb) {
        var eb;
        return this.statuses.delete(wb), this.pending.set(wb, (null !== (eb = this.pending.get(wb)) && void 0 !== eb ? eb : 0) + 1), this.sendAction(bb).then((bb => {
          var eb;
          const Hb = null !== bb && void 0 !== bb ? bb : {
              requestId: -1,
              ok: !1,
              message: Lb
            },
            pb = (null !== (eb = this.pending.get(wb)) && void 0 !== eb ? eb : 1) - 1;
          pb > 0 ? this.pending.set(wb, pb) : this.pending.delete(wb);
          const Vb = !Hb.ok || Hb.message.length > 0 ? Hb.message : null === Mb ? null : [Mb];
          return null !== Vb && this.statuses.set(wb, {
            ok: Hb.ok,
            text: Vb,
            until: Date.now() + 4e3
          }), this.onChange(), Hb
        }))
      }
      show(bb, wb) {
        this.statuses.set(bb, {
          ...wb,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(bb) {
        for (const [wb, Mb] of this.statuses) Mb.until <= bb && this.statuses.delete(wb)
      }
      nextDeadline() {
        let bb = null;
        for (const Mb of this.statuses.values()) {
          var wb;
          bb = Math.min(null !== (wb = bb) && void 0 !== wb ? wb : 1 / 0, Mb.until)
        }
        return bb
      }
      statusOf(bb, wb) {
        const Mb = this.statuses.get(bb);
        return !Mb || Mb.until <= wb ? null : {
          ok: Mb.ok,
          text: Mb.text
        }
      }
      isPending(bb) {
        return this.pending.has(bb)
      }
    }
  },
  37856: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      h: () => Ob,
      j: () => Ib,
      k: () => Lb,
      m: () => Vb,
      q: () => eb,
      t: () => pb
    });
    const eb = 2;

    function Hb(bb, wb, Mb) {
      const eb = bb.filter((bb => bb.name !== wb)),
        Hb = eb.filter((bb => "none" === bb.role)).sort(((bb, wb) => wb.at - bb.at)),
        pb = eb.filter((bb => "none" !== bb.role)).sort(((bb, wb) => Mb.indexOf(bb.role) - Mb.indexOf(wb.role) || wb.at - bb.at));
      return [...bb.some((bb => bb.name === wb)) && null !== wb ? [wb] : [], ...[...Hb, ...pb].map((bb => bb.name))]
    }

    function pb(bb, wb) {
      const Mb = bb.banned.map((bb => bb.name)),
        eb = new Set(Mb);
      return {
        here: Hb(bb.here, wb, bb.roles.map((bb => bb.role))),
        away: bb.away.filter((bb => !eb.has(bb.name))).map((bb => bb.name)),
        banned: Mb
      }
    }

    function Vb(bb, wb, Mb) {
      const eb = new Set([...bb.here, ...bb.away, ...bb.banned]),
        Hb = pb(wb, Mb),
        Vb = wb => {
          const Mb = Hb[wb].filter((bb => !eb.has(bb)));
          for (const bb of Mb) eb.add(bb);
          return [...bb[wb], ...Mb]
        };
      return {
        here: Vb("here"),
        away: Vb("away"),
        banned: Vb("banned")
      }
    }

    function gb(bb, wb) {
      const Mb = bb.here.find((bb => bb.name === wb));
      if (Mb) return {
        section: "here",
        player: Mb
      };
      const eb = bb.banned.find((bb => bb.name === wb));
      if (eb) return {
        section: "banned",
        bannedAt: eb.at
      };
      const Hb = bb.away.find((bb => bb.name === wb));
      return Hb ? {
        section: "away",
        player: Hb
      } : {
        section: "gone"
      }
    }
    const lb = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };

    function Lb(bb) {
      const wb = bb.can.roles.filter((wb => "none" !== wb || "none" !== bb.role));
      return wb.some((wb => wb !== bb.role)) ? wb : []
    }

    function Ib(bb, wb) {
      if ("banned" === bb.section) return {
        ...lb,
        unban: !0
      };
      if ("gone" === bb.section) return lb;
      const {
        player: Mb
      } = bb, eb = "here" === bb.section, Hb = Lb(Mb), pb = eb && wb && null !== Mb.gamemode && Mb.can.gamemode;
      return {
        gamemode: pb,
        roles: Hb,
        fixedRole: 0 !== Hb.length || "none" === Mb.role && !pb ? null : Mb.role,
        kick: eb && Mb.can.kick,
        ban: Mb.can.ban,
        unban: !1
      }
    }

    function Ob(bb, wb) {
      return bb.here.filter((bb => bb.name !== wb && "none" === bb.role && bb.can.kick)).length
    }
  },
  38007: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(1876),
      gb = Mb(1616),
      lb = Mb(1468),
      Lb = Mb(1475),
      Ib = Mb(1364);

    function Ob(bb) {
      let {
        label: wb,
        icon: Mb,
        placeholder: Hb,
        onSubmit: Ob
      } = bb;
      const Ub = (0, eb.useRef)(null),
        [tb, Cb] = (0, eb.useState)(""),
        [Eb, Fb] = (0, eb.useState)("Enter"),
        [Bb, sb] = (0, eb.useState)(null);
      (0, eb.useEffect)((() => {
        if ("Success" !== Eb && "Error" !== Eb) return;
        const bb = setTimeout((() => {
          "Success" === Eb && Ub.current && (Ub.current.value = "", Cb("")), Fb("Enter")
        }), "Success" === Eb ? 1e3 : 4e3);
        return () => {
          clearTimeout(bb)
        }
      }), [Eb]);
      const mb = () => {
        const bb = tb.trim();
        "" !== bb && "Enter" === Eb && (Fb("Loading"), Ob(bb).then((bb => {
          Ub.current && ("error" in bb ? null === bb.error ? Fb("Enter") : (sb(bb.error), Fb("Error")) : Fb("Success"))
        })))
      };
      return (0, Ib.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: bb => {
          bb.target === Ub.current && "Escape" !== bb.key && bb.stopPropagation()
        },
        children: [(0, Ib.jsxs)("div", {
          className: pb()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Eb}`),
          children: ["Loading" === Eb && (0, Ib.jsx)(lb.c, {}), "Success" === Eb && (0, Ib.jsx)(Lb.b, {
            name: "check"
          }), "Error" === Eb && Bb]
        }), (0, Ib.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, Ib.jsx)(Vb.d, {
            className: "PlayerSearchInput",
            domRef: Ub,
            maxLength: 32,
            placeholderText: Hb,
            ariaLabel: Hb,
            stopPropagation: !1,
            onValueChange: bb => {
              Cb(bb)
            },
            onEnter: mb
          }), (0, Ib.jsxs)(gb.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Eb || "" === tb.trim(),
            onClick: mb,
            children: [(0, Ib.jsx)(Lb.b, {
              name: Mb
            }), " ", wb]
          })]
        })]
      })
    }
  },
  37990: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ob
    });
    var eb = Mb(64),
      Hb = Mb(1159),
      pb = Mb.n(Hb),
      Vb = Mb(1259),
      gb = Mb(1475),
      lb = Mb(1364);
    const Lb = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Ib = ["unlisted", "public", "whitelist", "private"];

    function Ob(bb) {
      let {
        visibility: wb,
        onPick: Mb
      } = bb;
      const {
        t: Hb
      } = (0, Vb.C)(), Ob = (0, eb.useRef)([]);
      return (0, lb.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Hb("worldSocial:whoCanJoin"),
        children: Ib.map(((bb, eb) => {
          const Vb = bb === wb;
          return (0, lb.jsxs)("button", {
            ref: bb => {
              Ob.current[eb] = bb
            },
            type: "button",
            className: pb()("WorldSocialTile", {
              WorldSocialTileSelected: Vb
            }),
            "aria-pressed": Vb,
            tabIndex: Vb ? 0 : -1,
            onKeyDown: bb => {
              ((bb, wb) => {
                const Mb = "ArrowRight" === bb.key || "ArrowDown" === bb.key ? 1 : "ArrowLeft" === bb.key || "ArrowUp" === bb.key ? -1 : 0;
                var eb;
                0 !== Mb && (bb.preventDefault(), null === (eb = Ob.current[(wb + Mb + Ib.length) % Ib.length]) || void 0 === eb || eb.focus())
              })(bb, eb)
            },
            onClick: () => {
              Mb(bb)
            },
            children: [(0, lb.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, lb.jsx)(gb.b, {
                name: Lb[bb]
              })
            }), (0, lb.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, lb.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Hb(`worldSocial:${bb}`)
              }), (0, lb.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Hb(`worldSocial:${bb}Description`)
              })]
            })]
          }, bb)
        }))
      })
    }
  },
  37998: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb
    });
    var eb = Mb(1259),
      Hb = Mb(3848),
      pb = Mb(5193),
      Vb = Mb(1364);

    function gb(bb) {
      let {
        sO: wb,
        children: Mb,
        ...gb
      } = bb;
      const {
        t: lb
      } = (0, eb.C)();
      return (0, Vb.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          wb.onChange(!wb.on)
        },
        children: (0, Vb.jsx)(Hb.d, {
          ...gb,
          opensProfileCard: !1,
          children: (0, Vb.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: bb => {
              bb.stopPropagation()
            },
            children: [Mb, (0, Vb.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, Vb.jsx)(pb.c, {
                checked: wb.on,
                disabled: !1,
                ariaLabel: lb("worldSocial:letJoin", {
                  playerName: gb.playerSocialPreview.name
                }),
                onChange: bb => {
                  wb.onChange(bb.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37985: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Cb
    });
    var eb = Mb(64),
      Hb = Mb(1259),
      pb = Mb(2062),
      Vb = Mb(110),
      gb = Mb(26),
      lb = Mb(1648),
      Lb = Mb(3877),
      Ib = Mb(35232),
      Ob = Mb(1616),
      Ub = Mb(1475),
      tb = Mb(1364);

    function Cb(bb) {
      let {
        worldCode: wb,
        message: Mb
      } = bb;
      const {
        t: Cb
      } = (0, Hb.C)(), {
        isTouchScreen: Eb
      } = (0, gb.o)(["isTouchScreen"]), Fb = Vb.featureFlags.canUseInviteLinks, Bb = (0, Ib.i)(Fb && null === Mb), [sb, mb] = (0, Lb.k)(), hb = (0, eb.useRef)(null);
      if (null !== Mb) return (0, tb.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, tb.jsx)(Ub.b, {
          name: "lock"
        }), (0, tb.jsx)("span", {
          children: Mb
        })]
      });
      const zb = Fb ? Bb : wb,
        Xb = Eb && Fb && (0, Lb.e)();
      return (0, tb.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!Fb && (0, tb.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Cb("worldSocial:worldCode")
        }), (0, tb.jsx)("input", {
          ref: hb,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== zb && void 0 !== zb ? zb : "",
          "aria-label": Cb(Fb ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: bb => {
            bb.currentTarget.select()
          }
        }), (0, tb.jsxs)(Ob.f, {
          className: "WorldSocialCopy",
          disabled: null === zb,
          onClick: () => {
            null !== zb && (0, Lb.i)(zb, {
              useShareSheet: Xb,
              onOutcome: bb => {
                if ((0, lb.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== bb || Fb ? bb : "code"
                  }), "copied" === bb) mb();
                else if ("failed" === bb) {
                  var wb;
                  null === (wb = hb.current) || void 0 === wb || wb.focus(), pb.j.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, tb.jsx)(Ub.b, {
            name: sb ? "check" : Xb ? "up-from-bracket" : "copy"
          }), " ", Cb(sb ? "general:copied" : Xb ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37996: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => tb,
      g: () => Ub,
      k: () => Ob
    });
    var eb = Mb(644),
      Hb = Mb(1259),
      pb = Mb(1827),
      Vb = Mb(3848),
      gb = Mb(3797),
      lb = Mb(1616),
      Lb = Mb(37998),
      Ib = Mb(1364);

    function Ob(bb, wb) {
      var Mb;
      return {
        isError: !1,
        name: bb,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== wb && void 0 !== wb ? wb : {},
        nameColour: null !== (Mb = null === wb || void 0 === wb ? void 0 : wb.nameColour) && void 0 !== Mb ? Mb : eb.d,
        location: {
          status: "offline"
        }
      }
    }

    function Ub(bb) {
      let {
        player: wb,
        isFriend: Mb = !1,
        status: eb,
        showLocation: lb = void 0 === eb,
        sO: Ob,
        onSendFriendRequest: Ub,
        actions: tb,
        zIndex: Cb
      } = bb;
      const {
        t: Eb
      } = (0, Hb.C)();
      let Fb = eb;
      null !== Ob && void 0 !== Ob && Ob.on && (Fb = (0, Ib.jsxs)(Ib.Fragment, {
        children: [null !== eb && void 0 !== eb ? eb : (0, Ib.jsx)(gb.b, {
          socialPreview: wb
        }), (0, Ib.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Eb("worldSocial:canJoin")]
        })]
      }));
      const Bb = {
        playerSocialPreview: wb,
        isFriend: Mb,
        hideFriendBadge: !0,
        onFriendRemoved: Mb ? bb => {
          pb.e.removeFriendFromState(bb)
        } : void 0,
        status: Fb,
        showLocation: lb,
        onSendFriendRequest: Ub,
        zIndex: Cb
      };
      return Ob ? (0, Ib.jsx)(Lb.c, {
        ...Bb,
        sO: Ob,
        children: tb
      }) : (0, Ib.jsx)(Vb.d, {
        ...Bb,
        opensProfileCard: !1,
        children: tb || void 0
      })
    }

    function tb(bb) {
      let {
        row: wb,
        sO: Mb,
        canInvite: eb,
        invited: pb,
        onInvite: Vb,
        zIndex: gb
      } = bb;
      const {
        t: Lb
      } = (0, Hb.C)(), Ob = "online" === wb.place ? lb.f : lb.j;
      return (0, Ib.jsx)(Ub, {
        player: wb.friend,
        isFriend: !0,
        status: "here" === wb.place ? Lb("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        sO: Mb,
        zIndex: gb,
        actions: eb && (0, Ib.jsx)(Ob, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: pb,
          onClick: Vb,
          ariaLabel: `${Lb("worldSocial:invite")} ${wb.friend.name}`,
          children: Lb(pb ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37976: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb,
      e: () => Vb,
      f: () => Lb
    });
    var eb = Mb(64),
      Hb = Mb(5436),
      pb = Mb(2062);

    function Vb(bb) {
      const wb = {
        lobbyName: bb,
        answer: null,
        response: Hb.c.getSocialSettings(bb)
      };
      return wb.response.then((bb => {
        wb.answer = bb
      })), wb
    }
    const gb = new Map;

    function lb(bb) {
      gb.set(bb.lobbyName, bb)
    }

    function Lb(bb) {
      const [wb] = (0, eb.useState)((() => function(bb) {
        var wb;
        const Mb = null !== (wb = gb.get(bb)) && void 0 !== wb ? wb : null;
        return null !== Mb && void 0 !== Mb && Mb.answer && "error" in Mb.answer ? null : Mb
      }(bb))), [Mb, Vb] = (0, eb.useState)((() => null !== wb && void 0 !== wb && wb.answer && "settings" in wb.answer ? wb.answer.settings : null)), [lb, Lb] = (0, eb.useState)(!0), [Ib, Ob] = (0, eb.useState)(null !== Mb), Ub = (0, eb.useRef)(Mb);
      Ub.current = Mb;
      const tb = (0, eb.useRef)(0),
        Cb = (0, eb.useRef)(0),
        Eb = (0, eb.useRef)(!1),
        Fb = (0, eb.useRef)(!0),
        Bb = (0, eb.useCallback)((async wb => {
          const Mb = ++tb.current,
            eb = await (null !== wb && void 0 !== wb ? wb : Hb.c.getSocialSettings(bb));
          Fb.current && Mb === tb.current && (Ob(!0), Lb(!1), "error" in eb || Vb(eb.settings))
        }), [bb]),
        sb = (0, eb.useCallback)((() => {
          Lb(!0), Bb()
        }), [Bb]),
        mb = (0, eb.useCallback)((() => {
          Cb.current > 0 ? Eb.current = !0 : Bb()
        }), [Bb]);
      (0, eb.useEffect)((() => (Fb.current = !0, gb.delete(bb), Lb(!0), Bb(null === wb || void 0 === wb ? void 0 : wb.response), () => {
        Fb.current = !1
      })), [Bb, bb, wb]);
      const hb = bb => {
        tb.current++, Lb(!1), Ub.current = bb, Vb(bb)
      };
      return {
        settings: Mb,
        loading: lb,
        answered: Ib,
        retry: sb,
        refresh: mb,
        change: async function(wb, Mb) {
          let {
            quiet: eb = !1,
            onAnswer: Vb
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const gb = Ub.current;
          if (null === gb) return !1;
          hb(Mb(gb)), Cb.current > 0 && (Eb.current = !0), Cb.current++;
          const lb = await Hb.c.setSocialSettings(bb, wb);
          Cb.current--;
          const Lb = !("error" in lb);
          if (!Fb.current) return Lb;
          if (null === Vb || void 0 === Vb || Vb(lb), eb);
          else if ("error" in lb) pb.j.showMessage({
            translationKey: lb.error
          });
          else
            for (const bb of lb.notFound) pb.j.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: bb
              }
            });
          if (Cb.current > 0) return Lb;
          const Ib = Eb.current;
          return Eb.current = !1, !Ib && "settings" in lb ? hb(lb.settings) : (Ib || hb(gb), Bb()), Lb
        }
      }
    }
  },
  38014: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      f: () => pb
    });
    var eb = Mb(192);
    const Hb = new Map;

    function pb(bb, wb) {
      var Mb;
      const eb = null !== (Mb = Hb.get(bb)) && void 0 !== Mb ? Mb : new Map;
      eb.set(wb, Date.now()), Hb.set(bb, eb)
    }

    function Vb(bb) {
      const wb = Hb.get(bb);
      if (!wb) return [];
      const Mb = Date.now();
      for (const [Hb, pb] of wb) Mb - pb >= eb.n && wb.delete(Hb);
      return [...wb.keys()]
    }
  },
  37982: (bb, wb, Mb) => {
    function eb(bb, wb) {
      const Mb = wb.toLowerCase();
      for (const eb of bb)
        if (eb.toLowerCase() === Mb) return !0;
      return !1
    }

    function Hb(bb, wb, Mb) {
      const Hb = [],
        pb = [],
        Vb = [];
      for (const gb of bb) !gb.isError && gb.name && ("inGame" === gb.location.status && gb.location.inLobbyName === wb || eb(Mb, gb.name) ? pb.push({
        friend: gb,
        place: "here"
      }) : "offline" === gb.location.status ? Vb.push({
        friend: gb,
        place: "offline"
      }) : Hb.push({
        friend: gb,
        place: "online"
      }));
      return [...Hb, ...pb, ...Vb]
    }

    function pb(bb, wb, Mb) {
      const Hb = [],
        pb = bb.flatMap((bb => "here" === bb.place ? [bb.friend.name] : []));
      for (const Vb of [...pb, ...wb]) eb(Hb, Vb) || eb(Mb, Vb) || Hb.push(Vb);
      return Hb
    }

    function Vb(bb, wb) {
      return null === bb || void 0 === bb || !bb.canManage || eb(bb.whitelist, wb) ? "none" : "whitelist" === bb.visibility ? "required" : "quiet"
    }

    function gb(bb) {
      if (null === bb) return !0;
      const {
        visibility: wb
      } = bb;
      return "public" === wb || "unlisted" === wb || "whitelist" === wb && bb.canManage
    }

    function lb(bb, wb, Mb) {
      if (Mb) {
        const Mb = wb.filter((wb => !eb(bb.whitelist, wb)));
        return {
          ...bb,
          whitelist: [...bb.whitelist, ...Mb]
        }
      }
      return {
        ...bb,
        whitelist: bb.whitelist.filter((bb => !eb(wb, bb)))
      }
    }

    function Lb(bb, wb) {
      const Mb = [];
      for (let eb = 0; eb < bb.length; eb += wb) Mb.push(bb.slice(eb, eb + wb));
      return Mb
    }
    Mb.d(wb, {
      b: () => gb,
      d: () => pb,
      f: () => Hb,
      g: () => eb,
      i: () => Lb,
      j: () => Vb,
      l: () => lb
    })
  },
  38210: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(64),
      Hb = Mb(3503);

    function pb() {
      const bb = (0, Hb.k)("lobbyLeaderboardInfo");
      return (0, eb.useMemo)((() => function(bb) {
        if (null === bb) return null;
        const wb = Object.entries(bb),
          Mb = wb.filter((bb => {
            let [, wb] = bb;
            return void 0 !== wb
          }));
        if (Mb.length === wb.length) return bb;
        const eb = Object.fromEntries(Mb),
          Hb = Object.keys(bb).filter((bb => !Object.hasOwn(eb, bb)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${Hb.join(", ")}`), eb
      }(bb)), [bb])
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);