export const id = 223;
export const ids = [223];
export const modules = {
  41292: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      LobbyManageView: () => ki
    });
    var Op = cp(62),
      op = cp(1505),
      Ip = cp(37227),
      Sp = cp(2514),
      xp = cp(2517),
      Lp = cp(2492),
      Yp = cp(36761);

    function Dp() {
      const [pp, ip] = (0, Op.useState)(new Map);
      return {
        get: ip => pp.get(ip),
        hold: (0, Op.useCallback)(((pp, cp, Op) => {
          ip((ip => new Map(ip).set(pp, cp))), Op.then((() => {
            ip((ip => {
              const cp = new Map(ip);
              return cp.delete(pp), cp
            }))
          }))
        }), [])
      }
    }
    var Ap = cp(1049),
      Pp = cp.n(Ap),
      Wp = cp(1201),
      yp = cp(1060),
      Up = cp(1361),
      wp = cp(2734),
      vp = cp(5146),
      tp = cp(3546);
    var Hp = cp(2004),
      dp = cp(1480);

    function ep(pp, ip, cp) {
      const Op = pp.filter((pp => pp.name !== ip)),
        op = Op.filter((pp => "none" === pp.role)).sort(((pp, ip) => ip.at - pp.at)),
        Ip = Op.filter((pp => "none" !== pp.role)).sort(((pp, ip) => cp.indexOf(pp.role) - cp.indexOf(ip.role) || ip.at - pp.at));
      return [...pp.some((pp => pp.name === ip)) && null !== ip ? [ip] : [], ...[...op, ...Ip].map((pp => pp.name))]
    }

    function jp(pp, ip) {
      const cp = pp.banned.map((pp => pp.name)),
        Op = new Set(cp);
      return {
        here: ep(pp.here, ip, pp.roles.map((pp => pp.role))),
        away: pp.away.filter((pp => !Op.has(pp.name))).map((pp => pp.name)),
        banned: cp
      }
    }

    function kp(pp, ip) {
      const cp = pp.here.find((pp => pp.name === ip));
      if (cp) return {
        section: "here",
        player: cp
      };
      const Op = pp.banned.find((pp => pp.name === ip));
      if (Op) return {
        section: "banned",
        bannedAt: Op.at
      };
      const op = pp.away.find((pp => pp.name === ip));
      return op ? {
        section: "away",
        player: op
      } : {
        section: "gone"
      }
    }
    const mp = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var Rp = cp(2731),
      qp = cp(36751),
      Mp = cp(36908),
      Cp = cp(3224),
      Ep = cp(337);

    function Xp(pp, ip, cp) {
      return ip.map((ip => {
        if ("string" === typeof ip) return ip;
        const Op = "str" in ip ? ip.str : ip;
        return "string" === typeof Op ? Op : "entityName" in Op ? Op.entityName : "translationKey" in Op ? pp(Op.translationKey, (0, Wp.t)(Op.params, cp)) : ""
      })).join("")
    }

    function lp(pp, ip, cp, Op, op) {
      return op - Op < 6e4 ? pp(`${cp}JustNow`) : pp(cp, {
        time: (0, Ep.cb)((0, Wp.p)(ip, cp), Op, op)
      })
    }
    var Qp = cp(1929),
      Jp = cp(1692),
      Bp = cp(1112);

    function Np(pp) {
      let {
        status: ip
      } = pp;
      return (0, Bp.jsx)("span", {
        className: Pp()("LobbyManageStatus", {
          LobbyManageStatusRefused: !ip.ok
        }),
        children: (0, Bp.jsx)(Qp.e, {
          text: ip.text
        })
      })
    }

    function Tp(pp) {
      let {
        names: ip,
        cap: cp,
        filterFrom: op,
        moreLabel: Ip,
        reveal: Sp = null,
        renderRow: xp
      } = pp;
      const {
        t: Lp
      } = (0, Wp.H)(), [Yp, Dp] = (0, Op.useState)(!1), [Ap, Pp] = (0, Op.useState)(""), Up = Yp || null !== Sp && ip.indexOf(Sp) >= cp, vp = (Up || ip.length <= cp) && null !== op && ip.length > op, tp = Ap.trim().toLowerCase();
      let Hp = Up ? ip : ip.slice(0, cp);
      return vp && "" !== tp && (Hp = Hp.filter((pp => pp.toLowerCase().includes(tp)))), (0, Bp.jsxs)(Bp.Fragment, {
        children: [vp && (0, Bp.jsx)(Jp.c, {
          className: "LobbyManageFilter",
          placeholderText: Lp("lobbyManage:findName"),
          ariaLabel: Lp("lobbyManage:findName"),
          onValueChange: pp => {
            Pp(pp)
          }
        }), Hp.length > 0 && (0, Bp.jsx)("div", {
          className: "PlayerRows",
          children: Hp.map(((pp, ip) => xp(pp, Hp.length - ip)))
        }), !Up && ip.length > cp && (0, Bp.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, Bp.jsx)(wp.c, {
            label: (0, Bp.jsxs)(Bp.Fragment, {
              children: [Ip, " ", (0, Bp.jsx)(yp.d, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              Dp(!0)
            }
          })
        })]
      })
    }

    function fp(pp) {
      let {
        value: ip,
        placeholder: cp,
        ariaLabel: op,
        maxLength: Ip,
        wide: Sp = !1,
        onSave: xp
      } = pp;
      const Lp = (0, Op.useRef)(null),
        [Yp, Dp] = (0, Op.useState)(0),
        Ap = (0, Op.useRef)(!0),
        Wp = (0, Op.useRef)(null),
        yp = (0, Op.useRef)({
          value: ip,
          onSave: xp
        });
      yp.current = {
        value: ip,
        onSave: xp
      };
      const Up = () => {
        const pp = Wp.current;
        Wp.current = null, null !== pp && pp !== yp.current.value && yp.current.onSave(pp).then((() => {
          Ap.current && Dp((pp => pp + 1))
        }))
      };
      return (0, Op.useEffect)((() => {
        null === Wp.current && Lp.current && (Lp.current.value = ip)
      }), [ip, Yp]), (0, Op.useEffect)((() => () => {
        Ap.current = !1, Up()
      }), []), (0, Bp.jsx)("div", {
        className: Pp()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: Sp
        }),
        onBlur: Up,
        children: (0, Bp.jsx)(Jp.c, {
          domRef: Lp,
          defaultValue: ip,
          placeholderText: cp,
          ariaLabel: op,
          maxLength: Ip,
          onValueChange: pp => {
            Wp.current = pp
          },
          onEnter: Up
        })
      })
    }
    const bp = ["mod", "coOwner"],
      hp = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function ap(pp) {
      var ip, cp, Ip;
      let {
        name: Sp,
        place: xp,
        openedIn: Lp,
        isYou: Yp,
        manage: Ap,
        hiddenNames: Pp,
        zIndex: Up
      } = pp;
      const {
        t: wp,
        selectedLanguage: vp
      } = (0, Wp.H)(), [tp, Hp] = (0, Op.useState)(null), {
        state: ep
      } = Ap, jp = `player:${Sp}`, kp = function(pp, ip) {
        if ("banned" === pp.section) return {
          ...mp,
          unban: !0
        };
        if ("gone" === pp.section) return mp;
        const {
          player: cp
        } = pp, Op = "here" === pp.section, op = Op || "none" !== cp.role ? cp.can.roles : [];
        return {
          gamemode: Op && ip && null !== cp.gamemode && cp.can.gamemode,
          roles: op,
          fixedRole: 0 === op.length && "none" !== cp.role ? cp.role : null,
          kick: Op && cp.can.kick,
          ban: cp.can.ban,
          unban: !1
        }
      }(xp, null !== ep.gamemodes), Ep = Ap.statusOf(jp), Qp = Ap.isPending(jp), Jp = Dp(), Tp = Date.now(), fp = pp => {
        var ip, cp;
        return null !== (ip = null === (cp = (pp => ep.roles.find((ip => ip.role === pp)))(pp)) || void 0 === cp ? void 0 : cp.label) && void 0 !== ip ? ip : pp
      }, ap = pp => {
        const ip = hp[pp];
        return void 0 === ip ? void 0 : wp(ip)
      }, np = "here" === xp.section || "away" === xp.section ? xp.player : null, Fp = "here" === xp.section ? xp.player.id : null, {
        playerSocialPreview: gp,
        isFriend: Gp
      } = null === Fp ? {
        playerSocialPreview: (0, Mp.j)(Sp, null),
        isFriend: !1
      } : (0, qp.e)(Fp, Sp), rp = function() {
        Ap.send(...arguments)
      }, Zp = (pp, ip) => {
        Jp.hold("role", pp, Ap.send({
          type: "setRole",
          name: Sp,
          role: pp
        }, jp, ip))
      };
      let zp = null;
      if ("ban" === (null === tp || void 0 === tp ? void 0 : tp.kind)) zp = wp("lobbyManageEntry:banConfirm", {
        playerName: Sp
      });
      else if ("role" === (null === tp || void 0 === tp ? void 0 : tp.kind)) {
        var sp;
        zp = `${wp("lobbyManage:roleConfirm",{playerName:Sp,role:fp(tp.role)})} ${null!==(sp=ap(tp.role))&&void 0!==sp?sp:""}`
      } else if (Ep) zp = (0, Bp.jsx)(Np, {
        status: Ep
      });
      else if (Yp) zp = wp("lobbyManage:you");
      else if ("here" === xp.section) "none" === xp.player.role && Tp - xp.player.at < 6e5 && (zp = lp(wp, vp.code, "lobbyManage:joinedAgo", xp.player.at, Tp));
      else if ("away" === xp.section) {
        if (xp.player.at > 0) {
          const pp = "kicked" === xp.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          zp = lp(wp, vp.code, pp, xp.player.at, Tp)
        }
      } else "banned" === xp.section ? null !== xp.bannedAt && (zp = lp(wp, vp.code, "lobbyManage:bannedAgo", xp.bannedAt, Tp)) : "banned" === Lp && (zp = wp("lobbyManageEntry:unbanned"));
      return (0, Bp.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": Sp,
        children: (0, Bp.jsxs)(Rp.h, {
          playerSocialPreview: gp,
          isFriend: Gp,
          status: zp,
          opensProfileCard: !Yp && (0, qp.h)(!0, Sp, Pp),
          zIndex: Up,
          children: [null !== tp && (0, Bp.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === tp.kind && (0, Bp.jsxs)(dp.K, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                Hp(null), rp({
                  type: "ban",
                  name: Sp
                }, jp)
              },
              children: [(0, Bp.jsx)(yp.d, {
                name: "gavel"
              }), (0, Bp.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: wp("lobbyManageEntry:ban")
              })]
            }), "role" === tp.kind && (0, Bp.jsx)(dp.f, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: tp.role
              },
              onClick: () => {
                Hp(null), Zp(tp.role)
              },
              children: wp("lobbyManage:makeRole", {
                role: fp(tp.role)
              })
            }), (0, Bp.jsx)(dp.j, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                Hp(null)
              },
              children: wp("general:cancel")
            })]
          }), null === tp && (0, Bp.jsxs)(Bp.Fragment, {
            children: [(0, Bp.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [kp.gamemode && null !== np && (0, Bp.jsx)(Cp.d, {
                options: (null !== (ip = ep.gamemodes) && void 0 !== ip ? ip : []).map((pp => ({
                  value: pp.value,
                  label: Xp(wp, pp.label, Pp)
                }))),
                value: null !== (cp = Jp.get("gamemode")) && void 0 !== cp ? cp : np.gamemode,
                disabled: Qp,
                onChange: pp => {
                  (0, op.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: pp.value
                  }), Jp.hold("gamemode", pp.value, Ap.send({
                    type: "setGamemode",
                    name: Sp,
                    gamemode: pp.value
                  }, jp))
                }
              }), kp.roles.length > 0 && null !== np && (0, Bp.jsx)(Cp.d, {
                options: [...ep.roles].reverse().filter((pp => kp.roles.includes(pp.role))).map((pp => ({
                  value: pp.role,
                  label: pp.label
                }))),
                value: null !== (Ip = Jp.get("role")) && void 0 !== Ip ? Ip : np.role,
                disabled: Qp,
                onChange: pp => {
                  var ip;
                  (ip = pp.value) !== (null === np || void 0 === np ? void 0 : np.role) && (bp.includes(ip) ? Hp({
                    kind: "role",
                    role: ip
                  }) : ((0, op.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: ip
                  }), Zp(ip, ap(ip))))
                }
              }), null !== kp.fixedRole && (0, Bp.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: fp(kp.fixedRole)
              })]
            }), (0, Bp.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [kp.kick && (0, Bp.jsxs)(dp.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${wp("lobbyManageEntry:kick")} ${Sp}`,
                disabled: Qp,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  rp({
                    type: "kick",
                    name: Sp
                  }, jp)
                },
                children: [(0, Bp.jsx)(yp.d, {
                  name: "person-falling-burst"
                }), (0, Bp.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: wp("lobbyManageEntry:kick")
                })]
              }), kp.ban && (0, Bp.jsxs)(dp.N, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${wp("lobbyManageEntry:ban")} ${Sp}`,
                disabled: Qp,
                padDestructive: !0,
                onClick: () => {
                  Hp({
                    kind: "ban"
                  })
                },
                children: [(0, Bp.jsx)(yp.d, {
                  name: "gavel"
                }), (0, Bp.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: wp("lobbyManageEntry:ban")
                })]
              }), kp.unban && (0, Bp.jsxs)(dp.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${wp("lobbyManageEntry:unban")} ${Sp}`,
                disabled: Qp,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  rp({
                    type: "unban",
                    name: Sp
                  }, jp)
                },
                children: [(0, Bp.jsx)(yp.d, {
                  name: "user-unlock"
                }), (0, Bp.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: wp("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function np(pp) {
      var ip, cp, op, Ip;
      let {
        manage: Sp,
        focusRequest: xp,
        onFocused: Lp
      } = pp;
      const {
        t: Yp
      } = (0, Wp.H)(), Dp = (0, Hp.g)("players"), Ap = (0, Hp.g)("hiddenPlayerNames"), Pp = (0, Op.useRef)(null), {
        state: Up
      } = Sp, vp = null === Dp.localId ? null : null !== (ip = null === (cp = Dp.byId[Dp.localId]) || void 0 === cp ? void 0 : cp.name) && void 0 !== ip ? ip : null, [tp] = (0, Op.useState)((() => jp(Up, vp))), ep = function(pp, ip, cp) {
        const Op = new Set([...pp.here, ...pp.away, ...pp.banned]),
          op = jp(ip, cp),
          Ip = ip => {
            const cp = op[ip].filter((pp => !Op.has(pp)));
            for (const pp of cp) Op.add(pp);
            return [...pp[ip], ...cp]
          };
        return {
          here: Ip("here"),
          away: Ip("away"),
          banned: Ip("banned")
        }
      }(tp, Up, vp), [mp, Rp] = (0, Op.useState)(!1), qp = function(pp, ip) {
        return pp.here.filter((pp => pp.name !== ip && "none" === pp.role && pp.can.kick)).length
      }(Up, vp), Mp = Sp.statusOf("kickAll");
      (0, Op.useEffect)((() => {
        var pp, ip;
        if (null === xp) return;
        const cp = null === (pp = Pp.current) || void 0 === pp ? void 0 : pp.querySelector(`[data-lobby-manage-row="${CSS.escape(xp.name)}"]`);
        null === cp || void 0 === cp || cp.scrollIntoView({
          block: "center"
        }), null === cp || void 0 === cp || null === (ip = cp.querySelector(".ProfilePreview")) || void 0 === ip || ip.focus({
          preventScroll: !0
        }), Lp(xp.seq)
      }), [null === xp || void 0 === xp ? void 0 : xp.seq]);
      const Cp = pp => (ip, cp) => (0, Bp.jsx)(ap, {
        name: ip,
        place: kp(Up, ip),
        openedIn: pp,
        isYou: ip === vp,
        manage: Sp,
        hiddenNames: Ap,
        zIndex: cp
      }, ip);
      return (0, Bp.jsxs)("div", {
        ref: Pp,
        className: "LobbyManagePage",
        children: [ep.here.length > 0 && (0, Bp.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Bp.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, Bp.jsx)(wp.c, {
              label: Yp("lobbyManage:here"),
              meta: Up.here.length
            }), qp >= 2 && !mp && (0, Bp.jsxs)(dp.N, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: Sp.isPending("kickAll"),
              onClick: () => {
                Rp(!0)
              },
              children: [(0, Bp.jsx)(yp.d, {
                name: "person-falling-burst"
              }), " ", Yp("lobbyManage:kickAll")]
            })]
          }), mp && qp >= 2 && (0, Bp.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, Bp.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: Yp("lobbyManage:kickAllConfirm", {
                count: qp
              })
            }), (0, Bp.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, Bp.jsx)(dp.K, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  Rp(!1), Sp.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: Yp("lobbyManage:kickAll")
              }), (0, Bp.jsx)(dp.j, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  Rp(!1)
                },
                children: Yp("general:cancel")
              })]
            })]
          }), Mp && (0, Bp.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, Bp.jsx)(Np, {
              status: Mp
            })
          }), (0, Bp.jsx)(Tp, {
            names: ep.here,
            cap: ep.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: Cp("here")
          })]
        }), ep.away.length > 0 && (0, Bp.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Bp.jsx)(wp.c, {
            label: Yp("lobbyManage:notHere"),
            meta: ep.away.length
          }), (0, Bp.jsx)(Tp, {
            names: ep.away,
            cap: 5,
            filterFrom: null,
            moreLabel: Yp("lobbyManage:allCount", {
              count: ep.away.length
            }),
            reveal: null !== (op = null === xp || void 0 === xp ? void 0 : xp.name) && void 0 !== op ? op : null,
            renderRow: Cp("away")
          })]
        }), ep.banned.length > 0 && (0, Bp.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Bp.jsx)(wp.c, {
            label: Yp("lobbyManage:banned"),
            meta: ep.banned.length
          }), (0, Bp.jsx)(Tp, {
            names: ep.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: Yp("lobbyManage:allCount", {
              count: ep.banned.length
            }),
            reveal: null !== (Ip = null === xp || void 0 === xp ? void 0 : xp.name) && void 0 !== Ip ? Ip : null,
            renderRow: Cp("banned")
          })]
        })]
      })
    }
    var Fp = cp(4719),
      gp = cp(1656),
      Gp = cp(36892),
      rp = cp(36903),
      Zp = cp(36898),
      zp = cp(36896),
      sp = cp(36931),
      Kp = cp(36915),
      Vp = cp(36924);

    function ii(pp) {
      const ip = new Set;
      for (const cp of pp) ip.add(cp.toLowerCase());
      return ip
    }

    function ci(pp) {
      var ip, cp;
      let {
        state: op,
        lobbyName: Ip,
        listed: Sp,
        isListed: xp,
        gH: Lp,
        Lk: Yp,
        statusOf: Dp
      } = pp;
      const {
        t: Ap,
        selectedLanguage: Pp
      } = (0, Wp.H)(), yp = (0, gp.o)(), Up = (0, Hp.g)("players"), vp = null === Up.localId ? null : null !== (ip = null === (cp = Up.byId[Up.localId]) || void 0 === cp ? void 0 : cp.name) && void 0 !== ip ? ip : null, tp = (0, Op.useMemo)((() => (0, zp.h)(yp.friends, Ip, op.here.map((pp => pp.name)))), [yp.friends, Ip, op.here]), dp = new Map(tp.map((pp => [pp.friend.name.toLowerCase(), pp]))), ep = function(pp) {
        let {
          refused: ip,
          listed: cp,
          here: Op,
          friends: op,
          excluded: Ip
        } = pp;
        const Sp = ii(Ip),
          xp = pp => pp.filter((pp => {
            const ip = pp.toLowerCase();
            return !Sp.has(ip) && (Sp.add(ip), !0)
          }));
        return {
          added: [],
          refused: xp(ip),
          listed: xp(cp),
          suggested: xp([...Op, ...op])
        }
      }({
        refused: op.refused.map((pp => pp.name)),
        listed: Sp,
        here: op.here.map((pp => pp.name)),
        friends: tp.flatMap((pp => "here" === pp.place ? [] : [pp.friend.name])),
        excluded: [...null === vp ? [] : [vp], ...[...op.here, ...op.away].flatMap((pp => "none" === pp.role || (0, zp.l)(Sp, pp.name) ? [] : [pp.name]))]
      }), [jp] = (0, Op.useState)(ep), [kp, mp] = (0, Op.useState)([]), Rp = function(pp, ip, cp) {
        const Op = ii(cp),
          op = ii([...cp, ...pp.refused, ...pp.listed, ...pp.suggested]),
          Ip = cp => [...pp[cp].filter((pp => !Op.has(pp.toLowerCase()))), ...ip[cp].filter((pp => {
            const ip = pp.toLowerCase();
            return !op.has(ip) && (op.add(ip), !0)
          }))];
        return {
          added: [...cp],
          refused: Ip("refused"),
          listed: Ip("listed"),
          suggested: Ip("suggested")
        }
      }(jp, ep, kp), Cp = (pp, ip) => {
        var cp, Op;
        const Ip = pp.toLowerCase(),
          Sp = dp.get(Ip),
          Yp = op.here.find((pp => pp.name.toLowerCase() === Ip)),
          Wp = op.refused.find((pp => pp.name.toLowerCase() === Ip)),
          yp = null !== (cp = null === Dp || void 0 === Dp ? void 0 : Dp(pp)) && void 0 !== cp ? cp : null;
        let Up = null;
        yp ? Up = (0, Bp.jsx)(Np, {
          status: yp
        }) : Wp ? Up = lp(Ap, Pp.code, "lobbyManage:triedToJoinAgo", Wp.at, Date.now()) : Sp && Yp ? Up = Ap("lobbyManage:friendHere") : Sp ? Up = "online" === Sp.place ? Ap("lobbyManage:friendOnline") : Ap("lobbyManage:friend") : Yp && (Up = Ap("lobbyManage:hereStatus"));
        let wp = null !== (Op = null === Sp || void 0 === Sp ? void 0 : Sp.friend) && void 0 !== Op ? Op : (0, Mp.j)(pp, null);
        return !Sp && null !== Yp && void 0 !== Yp && Yp.id && (wp = (0, qp.e)(Yp.id, Yp.name).playerSocialPreview), (0, Bp.jsx)(Kp.b, {
          playerSocialPreview: wp,
          isFriend: void 0 !== Sp,
          hideFriendBadge: !0,
          status: Up,
          zIndex: ip,
          LP: {
            on: xp(pp),
            onChange: ip => {
              Lp(pp, ip)
            }
          }
        }, Ip)
      }, Ep = [...Rp.added, ...Rp.refused];
      return (0, Bp.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, Bp.jsx)(wp.c, {
          label: Ap("worldSocial:whitelist"),
          meta: Sp.length
        }), (0, Bp.jsx)(Vp.e, {
          label: Ap("lobbyManage:add"),
          icon: "user-check",
          placeholder: Ap("socialBar:enterPlayerName"),
          onSubmit: async pp => {
            const ip = await Yp(pp);
            return ip.ok && mp((ip => [pp, ...ip])), ip
          }
        }), Ep.length > 0 && (0, Bp.jsx)("div", {
          className: "PlayerRows",
          children: Ep.map(((pp, ip) => Cp(pp, Ep.length - ip)))
        }), (0, Bp.jsx)(Tp, {
          names: Rp.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: Ap("lobbyManage:allOnWhitelist", {
            count: Rp.listed.length
          }),
          renderRow: Cp
        }), (0, Bp.jsx)(Tp, {
          names: Rp.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: Ap("lobbyManage:allCount", {
            count: Rp.suggested.length
          }),
          renderRow: Cp
        })]
      })
    }

    function Oi(pp) {
      let {
        manage: ip,
        listing: cp
      } = pp;
      const {
        t: Op
      } = (0, Wp.H)(), Ip = (pp, cp) => ((0, op.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: pp
      }), ip.send({
        type: "setListing",
        field: pp,
        value: cp
      }, `listing:${pp}`)), Sp = pp => {
        const cp = ip.statusOf(`listing:${pp}`);
        return cp && !cp.ok && (0, Bp.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, Bp.jsx)(Np, {
            status: cp
          })
        })
      };
      return (0, Bp.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, Bp.jsx)(wp.c, {
          label: Op("lobbyManage:inWorldsList")
        }), (0, Bp.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Bp.jsx)("div", {
            className: "SliderText",
            children: Op("lobbyManage:description")
          }), (0, Bp.jsx)(fp, {
            value: cp.description,
            ariaLabel: Op("lobbyManage:description"),
            wide: !0,
            onSave: pp => Ip("description", pp)
          })]
        }), Sp("description"), (0, Bp.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Bp.jsx)("div", {
            className: "SliderText",
            children: Op("lobbyManage:emojis")
          }), (0, Bp.jsx)(fp, {
            value: cp.emojis,
            ariaLabel: Op("lobbyManage:emojis"),
            onSave: pp => Ip("emojis", pp)
          })]
        }), Sp("emojis"), (0, Bp.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Bp.jsx)("div", {
            className: "SliderText",
            children: Op("lobbyManage:colour")
          }), (0, Bp.jsx)(oi, {
            value: cp.colour,
            ariaLabel: Op("lobbyManage:colour"),
            onSave: pp => {
              Ip("colour", pp)
            }
          })]
        }), Sp("colour")]
      })
    }

    function oi(pp) {
      let {
        value: ip,
        ariaLabel: cp,
        onSave: op
      } = pp;
      const Ip = (0, Op.useRef)(null),
        Sp = (0, Op.useRef)({
          value: ip,
          onSave: op
        });
      Sp.current = {
        value: ip,
        onSave: op
      };
      const xp = (0, Op.useRef)(null),
        Lp = (0, Op.useRef)(!1),
        Yp = pp => {
          Lp.current && pp.value !== Sp.current.value && pp.value !== xp.current && (xp.current = pp.value, Sp.current.onSave(pp.value))
        };
      return (0, Op.useEffect)((() => {
        Ip.current && document.activeElement !== Ip.current && (Ip.current.value = ip)
      }), [ip]), (0, Op.useEffect)((() => {
        const pp = Ip.current,
          ip = () => {
            Yp(pp)
          };
        return pp.addEventListener("change", ip), () => {
          pp.removeEventListener("change", ip), Yp(pp)
        }
      }), []), (0, Bp.jsx)("input", {
        ref: Ip,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: ip,
        "aria-label": cp,
        onInput: () => {
          Lp.current = !0
        },
        onBlur: pp => {
          Yp(pp.currentTarget)
        }
      })
    }

    function Ii(pp) {
      let {
        manage: ip
      } = pp;
      const {
        lobbyName: cp,
        shownLobbyName: Op
      } = (0, Hp.g)("connectedGame");
      return ip.state.you.canSetVisibility && null !== cp ? (0, Bp.jsx)(xi, {
        manage: ip,
        lobbyName: cp,
        worldCode: null !== Op && void 0 !== Op ? Op : cp
      }, cp) : (0, Bp.jsx)(Li, {
        manage: ip,
        lobbyName: null !== cp && void 0 !== cp ? cp : ""
      })
    }

    function Si(pp) {
      return pp.map((pp => pp.toLowerCase())).sort().join(",")
    }

    function xi(pp) {
      var ip;
      let {
        manage: cp,
        lobbyName: Ip,
        worldCode: Sp
      } = pp;
      const {
        t: xp
      } = (0, Wp.H)(), {
        settings: Lp,
        loading: Yp,
        change: Dp,
        retry: Ap,
        refresh: Pp
      } = (0, Gp.j)(Ip), yp = (0, gp.o)(), {
        state: vp
      } = cp, tp = (0, Op.useRef)(Lp);
      tp.current = Lp;
      const Hp = Si(null !== (ip = vp.whitelist) && void 0 !== ip ? ip : []),
        ep = null !== vp.whitelist;
      (0, Op.useEffect)((() => {
        const pp = tp.current;
        null !== pp && (pp.visibility !== vp.visibility || ep && Si(pp.whitelist) !== Hp) && Pp()
      }), [vp.visibility, Hp, ep, Pp]);
      const jp = async (pp, ip) => {
        let cp = null;
        return await Dp(pp, ip, {
          quiet: !0,
          onAnswer: pp => {
            cp = pp
          }
        }), cp
      }, kp = (pp, ip) => {
        null !== ip && "error" in ip && cp.showStatus(pp, {
          ok: !1,
          text: [xp(ip.error)]
        })
      }, mp = async pp => {
        if (null === Lp || pp === Lp.visibility) return;
        (0, op.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: pp
        });
        const ip = "whitelist" === pp ? (0, zp.f)((0, zp.h)(yp.friends, Ip, vp.here.map((pp => pp.name))), (0, sp.b)(Ip), Lp.whitelist) : [],
          cp = await jp({
            setVisibility: pp
          }, (ip => ({
            ...ip,
            visibility: pp
          })));
        kp("mode", cp), null === cp || "error" in cp || await (async pp => {
          for (const ip of (0, zp.o)(pp, Fp.C))
            if (!await Dp({
                whitelistAdd: ip
              }, (pp => (0, zp.r)(pp, ip, !0)))) return !1;
          return !0
        })(ip)
      }, Rp = (0, Op.useMemo)((() => {
        var pp;
        if (null === Lp) return [];
        const ip = null !== (pp = vp.whitelist) && void 0 !== pp ? pp : [];
        return [...ip.filter((pp => (0, zp.l)(Lp.whitelist, pp))), ...Lp.whitelist.filter((pp => !(0, zp.l)(ip, pp)))]
      }), [Lp, vp.whitelist]), qp = cp.statusOf("mode");
      return (0, Bp.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Bp.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Bp.jsx)(wp.c, {
            label: xp("worldSocial:whoCanJoin")
          }), null === Lp && Yp && (0, Bp.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Bp.jsx)(Up.c, {})
          }), null === Lp && !Yp && (0, Bp.jsx)(dp.j, {
            className: "SmallTextLight",
            onClick: Ap,
            children: xp("worldSocial:loadFailed")
          }), null !== Lp && (0, Bp.jsx)(rp.c, {
            visibility: Lp.visibility,
            onPick: pp => {
              mp(pp)
            }
          }), qp && (0, Bp.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, Bp.jsx)(Np, {
              status: qp
            })
          }), null !== Lp && "private" !== Lp.visibility && (0, Bp.jsx)(Zp.c, {
            worldCode: Sp,
            message: null
          })]
        }), "whitelist" === (null === Lp || void 0 === Lp ? void 0 : Lp.visibility) && (0, Bp.jsx)(ci, {
          state: vp,
          lobbyName: Ip,
          listed: Rp,
          isListed: pp => (0, zp.l)(Lp.whitelist, pp),
          gH: (pp, ip) => {
            (0, op.reportAnalyticsClick)(ip ? {
              id: "lobby_manage.whitelist_add",
              value: "LP"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), jp(ip ? {
              whitelistAdd: [pp]
            } : {
              whitelistRemove: pp
            }, (cp => (0, zp.r)(cp, [pp], ip))).then((ip => {
              kp(`whitelist:${pp.toLowerCase()}`, ip)
            }))
          },
          Lk: async pp => {
            (0, op.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const ip = await jp({
              whitelistAdd: [pp]
            }, (ip => (0, zp.r)(ip, [pp], !0)));
            return null === ip ? {
              ok: !1,
              error: xp("worldSocial:changeFailed")
            } : "error" in ip ? {
              ok: !1,
              error: xp(ip.error)
            } : (0, zp.l)(ip.notFound, pp) ? {
              ok: !1,
              error: xp("lobbyManage:noPlayerCalled", {
                playerName: pp
              })
            } : {
              ok: !0
            }
          },
          statusOf: pp => cp.statusOf(`whitelist:${pp.toLowerCase()}`)
        }), "public" === (null === Lp || void 0 === Lp ? void 0 : Lp.visibility) && null !== vp.listing && (0, Bp.jsx)(Oi, {
          manage: cp,
          listing: vp.listing
        })]
      })
    }

    function Li(pp) {
      var ip;
      let {
        manage: cp,
        lobbyName: Op
      } = pp;
      const {
        t: Ip
      } = (0, Wp.H)(), {
        state: Sp
      } = cp, xp = Dp(), Lp = null !== (ip = Sp.whitelist) && void 0 !== ip ? ip : [];
      return (0, Bp.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Bp.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Bp.jsx)(wp.c, {
            label: Ip("worldSocial:whoCanJoin")
          }), (0, Bp.jsx)("div", {
            className: "LobbyManageModeText",
            children: Ip(`worldSocial:${Sp.visibility}`)
          })]
        }), "whitelist" === Sp.visibility && Sp.you.canEditWhitelist && (0, Bp.jsx)(ci, {
          state: Sp,
          lobbyName: Op,
          listed: Lp,
          isListed: pp => {
            var ip;
            return null !== (ip = xp.get(pp.toLowerCase())) && void 0 !== ip ? ip : (0, zp.l)(Lp, pp)
          },
          gH: (pp, ip) => {
            (0, op.reportAnalyticsClick)(ip ? {
              id: "lobby_manage.whitelist_add",
              value: "LP"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const Op = pp.toLowerCase();
            xp.hold(Op, ip, cp.send(ip ? {
              type: "whitelistAdd",
              names: [pp]
            } : {
              type: "whitelistRemove",
              name: pp
            }, `whitelist:${Op}`))
          },
          Lk: async pp => {
            (0, op.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const ip = await cp.send({
              type: "whitelistAdd",
              names: [pp]
            }, "whitelist-field");
            return ip.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, Bp.jsx)(Qp.e, {
                text: ip.message
              })
            }
          },
          statusOf: pp => cp.statusOf(`whitelist:${pp.toLowerCase()}`)
        }), "public" === Sp.visibility && null !== Sp.listing && (0, Bp.jsx)(Oi, {
          manage: cp,
          listing: Sp.listing
        })]
      })
    }
    var Yi = cp(5113),
      Di = cp(1387);
    const Ai = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const Pi = (0, Op.memo)((function(pp) {
      var ip;
      let {
        rule: cp,
        value: Op,
        status: op,
        pending: Ip,
        hiddenNames: Sp,
        uq: xp,
        onAction: Lp
      } = pp;
      const {
        t: Yp
      } = (0, Wp.H)(), Dp = pp => xp(cp, pp), Ap = (pp, ip) => {
        Lp(cp, pp, ip)
      }, Pp = Xp(Yp, cp.label, Sp), yp = cp.info ? Xp(Yp, cp.info, Sp) : void 0, Up = cp.placeholder ? Xp(Yp, cp.placeholder, Sp) : void 0, wp = (null !== (ip = cp.options) && void 0 !== ip ? ip : []).map((pp => ({
        value: pp.value,
        label: Xp(Yp, pp.label, Sp)
      }))), vp = Math.max(0, ...wp.map((pp => function(pp) {
        let ip = 0;
        for (const cp of pp) ip += Ai.test(cp) ? 2 : 1;
        return ip
      }(pp.label)))), tp = op && (0, Bp.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, Bp.jsx)(Np, {
          status: op
        })
      }), Hp = (0, Bp.jsxs)("div", {
        className: "SliderText",
        children: [Pp, void 0 !== yp && (0, Bp.jsx)(Di.d, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: yp
        })]
      });
      return "toggle" === cp.kind ? (0, Bp.jsxs)(Bp.Fragment, {
        children: [(0, Bp.jsx)(Yi.b, {
          label: Pp,
          checked: !0 === Op,
          circleInfoText: yp,
          disabled: Ip,
          onClick: Dp
        }), tp]
      }) : "choice" === cp.kind && wp.length <= 3 ? (0, Bp.jsxs)(Bp.Fragment, {
        children: [(0, Bp.jsx)(Yi.f, {
          label: Pp,
          options: wp,
          value: String(Op),
          circleInfoText: yp,
          onChange: Dp
        }), tp]
      }) : (0, Bp.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [Hp, "choice" === cp.kind && (0, Bp.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": vp
          },
          children: (0, Bp.jsx)(Cp.d, {
            options: wp,
            value: String(Op),
            disabled: Ip,
            onChange: pp => {
              Dp(pp.value)
            }
          })
        }), ("number" === cp.kind || "text" === cp.kind) && (0, Bp.jsx)(fp, {
          value: null === Op ? "" : String(Op),
          placeholder: Up,
          ariaLabel: Pp,
          onSave: pp => {
            const ip = pp.trim(),
              Op = Number(ip);
            return Dp("number" === cp.kind && "" !== ip && Number.isFinite(Op) ? Op : ip)
          }
        }), "action" === cp.kind && (0, Bp.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [wp.length > 3 && (0, Bp.jsx)(Cp.d, {
            options: wp,
            value: {
              value: "",
              label: null !== Up && void 0 !== Up ? Up : Pp
            },
            disabled: Ip,
            onChange: pp => {
              Ap(pp.value)
            }
          }), wp.length > 0 && wp.length <= 3 && wp.map((pp => (0, Bp.jsx)(dp.j, {
            className: "SmallTextLight",
            disabled: Ip,
            onClick: () => {
              Ap(pp.value)
            },
            children: pp.label
          }, pp.value))), 0 === wp.length && (0, Bp.jsx)(dp.j, {
            className: "SmallTextLight",
            disabled: Ip,
            onClick: () => {
              Ap()
            },
            children: null !== Up && void 0 !== Up ? Up : Pp
          })]
        }), "names" === cp.kind && (0, Bp.jsx)(Wi, {
          names: Array.isArray(Op) ? Op : [],
          pending: Ip,
          onAction: Ap
        }), tp]
      })
    }));

    function Wi(pp) {
      let {
        names: ip,
        pending: cp,
        onAction: op
      } = pp;
      const {
        t: Ip
      } = (0, Wp.H)(), Sp = (0, Op.useRef)(null), [xp, Lp] = (0, Op.useState)(""), Yp = () => {
        const pp = xp.trim();
        "" !== pp && (op(pp, "add"), Sp.current && (Sp.current.value = ""), Lp(""))
      };
      return (0, Bp.jsxs)("div", {
        className: "LobbyManageNames",
        children: [ip.map((pp => (0, Bp.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, Bp.jsx)("span", {
            className: "LobbyManageNameText",
            children: pp
          }), (0, Bp.jsx)(dp.j, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: Ip("lobbyManage:removeName", {
              name: pp
            }),
            disabled: cp,
            onClick: () => {
              op(pp, "remove")
            },
            children: (0, Bp.jsx)(yp.d, {
              name: "xmark"
            })
          })]
        }, pp))), (0, Bp.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, Bp.jsx)(Jp.c, {
            domRef: Sp,
            placeholderText: Ip("lobbyManage:namePlaceholder"),
            ariaLabel: Ip("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: pp => {
              Lp(pp)
            },
            onEnter: Yp
          }), (0, Bp.jsx)(dp.j, {
            className: "SmallTextLight",
            disabled: cp || "" === xp.trim(),
            onClick: Yp,
            children: Ip("lobbyManage:addHere")
          })]
        })]
      })
    }
    const yi = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function Ui(pp, ip) {
      return yi.map((cp => {
        let {
          group: Op,
          title: op
        } = cp;
        const Ip = pp.filter((pp => pp.group === Op && void 0 === pp.parent)).map((cp => {
          const Op = !0 === ip(cp) ? pp.filter((pp => pp.parent === cp.key)) : [];
          return {
            rule: cp,
            children: Op
          }
        }));
        return {
          group: Op,
          title: op,
          items: Ip
        }
      }))
    }

    function wi(pp) {
      return pp.flatMap((pp => {
        let {
          items: ip
        } = pp;
        return ip.flatMap((pp => {
          let {
            rule: ip,
            children: cp
          } = pp;
          return [ip, ...cp]
        }))
      }))
    }

    function vi(pp) {
      let {
        manage: ip,
        rowsShown: cp
      } = pp;
      const {
        t: Ip
      } = (0, Wp.H)(), Sp = (0, Hp.g)("hiddenPlayerNames"), {
        rules: xp
      } = ip.state, Lp = Dp(), Yp = pp => {
        const ip = Lp.get(pp.key);
        return void 0 === ip ? pp.value : ip
      }, Ap = Ui(xp, Yp), [Pp] = (0, Op.useState)((() => wi(Ap).map((pp => pp.key)))), yp = cp === 1 / 0 ? null : new Set(Pp.slice(0, cp)), Up = pp => null === yp || yp.has(pp.key), {
        hold: vp
      } = Lp, tp = (0, Op.useCallback)(((pp, cp) => {
        (0, op.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: pp.key
        });
        const Op = ip.send({
          type: "setRule",
          key: pp.key,
          value: cp
        }, `rule:${pp.key}`);
        return vp(pp.key, cp, Op), Op
      }), [ip, vp]), dp = (0, Op.useCallback)(((pp, cp, Op) => {
        (0, op.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: pp.key
        }), ip.send({
          type: "ruleAction",
          key: pp.key,
          ...void 0 === cp ? {} : {
            arg: cp
          },
          ...void 0 === Op ? {} : {
            op: Op
          }
        }, `rule:${pp.key}`, void 0 === Op ? Ip("lobbyManage:setJustNow") : void 0)
      }), [ip, Ip]), ep = pp => {
        const cp = `rule:${pp.key}`;
        return (0, Bp.jsx)(Pi, {
          rule: pp,
          value: Yp(pp),
          status: ip.statusOf(cp),
          pending: ip.isPending(cp),
          hiddenNames: Sp,
          uq: tp,
          onAction: dp
        }, pp.key)
      };
      return (0, Bp.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: Ap.map((pp => {
          let {
            group: ip,
            title: cp,
            items: op
          } = pp;
          const Sp = op.filter((pp => {
            let {
              rule: ip
            } = pp;
            return Up(ip)
          }));
          return 0 === Sp.length ? null : (0, Bp.jsxs)(Op.Fragment, {
            children: [(0, Bp.jsx)(wp.c, {
              label: Ip(cp)
            }), Sp.map((pp => {
              let {
                rule: ip,
                children: cp
              } = pp;
              return 0 === cp.length ? ep(ip) : (0, Bp.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [ep(ip), cp.filter(Up).map(ep)]
              }, ip.key)
            }))]
          }, ip)
        }))
      })
    }
    const ti = {
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
      Hi = 5,
      di = (0, Op.memo)((function(pp) {
        let {
          page: ip,
          manage: cp,
          leaderboard: op,
          focusRequest: Ip,
          onFocused: Sp,
          ruleRowsShown: xp
        } = pp;
        return "leaderboard" === ip ? (0, Bp.jsx)(Op.Suspense, {
          fallback: (0, Bp.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Bp.jsx)(Up.c, {})
          }),
          children: op
        }) : "joining" === ip ? (0, Bp.jsx)(Ii, {
          manage: cp
        }) : "rules" === ip ? (0, Bp.jsx)(vi, {
          manage: cp,
          rowsShown: xp
        }) : (0, Bp.jsx)(np, {
          manage: cp,
          focusRequest: Ip,
          onFocused: Sp
        })
      }));

    function ei(pp) {
      let {
        page: ip
      } = pp;
      const {
        t: cp
      } = (0, Wp.H)(), Op = ti[ip];
      return (0, Bp.jsxs)(Bp.Fragment, {
        children: [(0, Bp.jsx)(yp.d, {
          name: Op.icon
        }), " ", (0, Bp.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: cp(Op.title)
        })]
      })
    }

    function ui(pp) {
      var ip;
      const {
        t: cp
      } = (0, Wp.H)(), {
        pages: Ip,
        landing: Sp
      } = pp, Lp = (0, Op.useRef)(null), Yp = (0, Op.useRef)(null), Dp = (0, Op.useRef)(null), Ap = (0, Op.useRef)(new Map), [yp, Up] = (0, Op.useState)(null), Hp = (0, Op.useRef)(yp), dp = (0, Op.useRef)(0), [ep, jp] = (0, Op.useState)(Ip[0]), kp = null !== yp && void 0 !== yp ? yp : Ip.includes(ep) ? ep : Ip[0], [mp] = (0, Op.useState)(null !== (ip = null === Sp || void 0 === Sp ? void 0 : Sp.page) && void 0 !== ip ? ip : null), Rp = null !== mp && Ip.includes(mp) ? [mp, ...Ip.filter((pp => pp !== mp))] : Ip, [qp] = (0, Op.useState)((() => {
        const ip = wi(Ui(pp.manage.state.rules, (pp => pp.value)));
        return Math.max(1, Math.ceil(ip.length / Hi))
      })), Mp = Rp.flatMap((pp => "rules" === pp ? Array(qp).fill(pp) : [pp])), Cp = function(pp, ip) {
        const [cp, op] = (0, Op.useState)(pp), Ip = cp >= ip;
        return Ip && cp !== 1 / 0 && op(1 / 0), (0, Op.useLayoutEffect)((() => {
          if (Ip) return;
          let pp = !0;
          return (0, tp.h)().then((() => {
            pp && op((pp => pp + 1))
          })), () => {
            pp = !1
          }
        }), [cp, Ip]), Ip ? 1 / 0 : cp
      }(1, Mp.length), Ep = Mp.slice(0, Cp), Xp = new Set(Ep), lp = Cp < Mp.length, Qp = lp ? Ep.filter((pp => "rules" === pp)).length * Hi : 1 / 0, Jp = (0, Op.useRef)(pp.focusRequest);
      Jp.current = pp.focusRequest;
      const Np = pp => {
          Hp.current = pp, Up(pp)
        },
        Tp = () => {
          var pp, ip;
          Lp.current.style.scrollPaddingTop = `${null!==(pp=null===(ip=Dp.current)||void 0===ip?void 0:ip.offsetHeight)&&void 0!==pp?pp:0}px`
        },
        fp = pp => {
          const ip = Lp.current,
            cp = Ap.current.get(pp);
          if (void 0 === cp) return;
          const Op = document.activeElement,
            op = Jp.current,
            Ip = null === op ? null : cp.querySelector(`[data-lobby-manage-row="${CSS.escape(op.name)}"]`);
          Tp(), Op instanceof HTMLElement && null !== Ip && void 0 !== Ip && Ip.contains(Op) ? Op.scrollIntoView({
            block: "center"
          }) : null === cp.previousElementSibling ? ip.scrollTop = 0 : cp.scrollIntoView({
            block: "start"
          }), dp.current = ip.scrollTop
        },
        bp = pp => {
          (0, op.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: pp
          }), Np(pp), fp(pp)
        },
        hp = () => {
          var pp, ip;
          const cp = Lp.current,
            Op = cp.getBoundingClientRect().top + (null !== (pp = null === (ip = Dp.current) || void 0 === ip ? void 0 : ip.offsetHeight) && void 0 !== pp ? pp : 0),
            op = Ip.map((pp => {
              var ip, cp;
              return (null !== (ip = null === (cp = Ap.current.get(pp)) || void 0 === cp ? void 0 : cp.getBoundingClientRect().top) && void 0 !== ip ? ip : 1 / 0) - Op
            })),
            Sp = !lp && cp.scrollTop + cp.clientHeight >= cp.scrollHeight - 1;
          jp(Ip[(0, xp.h)(op, Sp)])
        },
        ap = () => {
          null !== Hp.current && (Np(null), hp())
        };
      (0, Op.useLayoutEffect)((() => {
        null !== Sp && Ip.includes(Sp.page) && bp(Sp.page)
      }), [null === Sp || void 0 === Sp ? void 0 : Sp.seq]), (0, Op.useLayoutEffect)((() => {
        null === Hp.current || Ip.includes(Hp.current) || ap()
      }));
      const {
        onFocused: np
      } = pp, Fp = (0, Op.useCallback)((pp => {
        null !== Hp.current && fp(Hp.current), np(pp)
      }), [np]);
      (0, Op.useLayoutEffect)((() => {
        const pp = Hp.current;
        null !== pp && (!lp || Ip.indexOf(Mp[Cp - 1]) < Ip.indexOf(pp)) && fp(pp)
      }), [Cp]), (0, Op.useEffect)((() => {
        const pp = new ResizeObserver((() => {
          null !== Hp.current ? fp(Hp.current) : Tp()
        }));
        return pp.observe(Lp.current), pp.observe(Yp.current), () => {
          pp.disconnect()
        }
      }), []), (0, Op.useLayoutEffect)((() => {
        const pp = Dp.current,
          ip = null === pp || void 0 === pp ? void 0 : pp.querySelector(".SegmentedToggleOptionSelected");
        ip && (pp.scrollLeft = Math.min(ip.offsetLeft, Math.max(pp.scrollLeft, ip.offsetLeft + ip.offsetWidth - pp.clientWidth)))
      }), [kp]);
      return (0, Bp.jsxs)("div", {
        ref: Lp,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === Hp.current ? hp() : Math.abs(Lp.current.scrollTop - dp.current) > 1 && ap()
        },
        onClick: pp => {
          var ip;
          null !== (ip = Dp.current) && void 0 !== ip && ip.contains(pp.target) || ap()
        },
        onFocus: pp => {
          var ip;
          const cp = null === Hp.current ? null : Ap.current.get(Hp.current);
          !cp || cp.contains(pp.target) || null !== (ip = Dp.current) && void 0 !== ip && ip.contains(pp.target) || ap()
        },
        children: [Ip.length > 1 && (0, Bp.jsx)("div", {
          ref: Dp,
          className: "LobbyManageChips",
          children: (0, Bp.jsx)(vp.b, {
            options: Ip.map((pp => ({
              value: pp,
              label: (0, Bp.jsx)(ei, {
                page: pp
              }),
              ariaLabel: cp(ti[pp].title)
            }))),
            value: kp,
            padTabs: "2",
            ariaLabel: cp("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: bp
          })
        }), (0, Bp.jsx)("div", {
          ref: Yp,
          className: Pp()("LobbyManageInner", {
            Staging: lp
          }),
          children: Ip.filter((pp => Xp.has(pp))).map((ip => {
            const cp = ip === yp;
            return (0, Bp.jsxs)("section", {
              ref: pp => {
                pp ? Ap.current.set(ip, pp) : Ap.current.delete(ip)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": cp || void 0,
              children: [Ip.length > 1 && (0, Bp.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": cp || void 0,
                "data-pad-unavailable": cp || void 0,
                children: (0, Bp.jsx)(wp.c, {
                  label: (0, Bp.jsx)(ei, {
                    page: ip
                  })
                })
              }), (0, Bp.jsx)(di, {
                page: ip,
                manage: pp.manage,
                leaderboard: pp.leaderboard,
                focusRequest: pp.focusRequest,
                onFocused: Fp,
                ruleRowsShown: "rules" === ip ? Qp : 1 / 0
              })]
            }, ip)
          }))
        })]
      })
    }

    function ji(pp) {
      return void 0 === (null === pp || void 0 === pp ? void 0 : pp.page) ? null : {
        page: pp.page,
        seq: pp.seq
      }
    }

    function ki(pp) {
      let {
        leaderboard: ip
      } = pp;
      const cp = function() {
          const pp = (0, Lp.i)("lobbyManage"),
            [ip, cp] = (0, Op.useReducer)((pp => pp + 1), 0),
            [op] = (0, Op.useState)((() => new Yp.c(cp)));
          return (0, Op.useEffect)((() => {
            const pp = op.nextDeadline();
            if (null === pp) return;
            const ip = setTimeout((() => {
              op.expire(Date.now()), cp()
            }), Math.max(0, pp - Date.now()));
            return () => {
              clearTimeout(ip)
            }
          })), (0, Op.useMemo)((() => null === pp ? null : {
            state: pp,
            send: (pp, ip, Op) => {
              const Ip = op.send(pp, ip, null !== Op && void 0 !== Op ? Op : null);
              return cp(), Ip
            },
            statusOf: pp => op.statusOf(pp, Date.now()),
            showStatus: (pp, ip) => {
              op.show(pp, ip)
            },
            isPending: pp => op.isPending(pp)
          }), [pp, ip, op])
        }(),
        Dp = (0, xp.k)((0, Ip.b)()),
        Ap = (0, Sp.l)(),
        [Pp, Wp] = (0, Op.useState)((() => ji(Ap))),
        [yp, Up] = (0, Op.useState)(null);
      return (0, Op.useEffect)((() => {
        null === Ap && (0, op.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, Op.useEffect)((() => {
        null !== Ap && (Wp((pp => (null === pp || void 0 === pp ? void 0 : pp.seq) === Ap.seq ? pp : ji(Ap))), void 0 !== Ap.focusName && "players" === Ap.page ? Up({
          name: Ap.focusName,
          seq: Ap.seq
        }) : (0, Sp.h)(Ap.seq))
      }), [null === Ap || void 0 === Ap ? void 0 : Ap.seq]), null === cp ? null : (0, Bp.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, Bp.jsx)(ui, {
          pages: (0, xp.g)(cp.state, Dp),
          manage: cp,
          leaderboard: ip,
          focusRequest: yp,
          onFocused: Sp.h,
          landing: Pp
        })
      })
    }
  },
  36761: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp,
      e: () => Lp
    });
    var Op = cp(1505),
      op = cp(1982),
      Ip = cp(1956);
    const Sp = 1e4;
    let xp = 0;

    function Lp(pp) {
      const ip = ++xp;
      return new Promise((cp => {
        const xp = ip => {
            Lp(), clearTimeout(Yp), !1 === (null === ip || void 0 === ip ? void 0 : ip.ok) && (0, Op.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: pp.type
            }), cp(ip)
          },
          Lp = op.c.subscribe("lobbyManage", (pp => {
            const cp = function(pp, ip) {
              var cp;
              return null !== (cp = null === pp || void 0 === pp ? void 0 : pp.results.find((pp => pp.requestId === ip))) && void 0 !== cp ? cp : null
            }(pp, ip);
            null !== cp && xp(cp)
          })),
          Yp = setTimeout((() => {
            xp(null)
          }), Sp);
        Ip.gameBridge.send("lobbyManage", {
          ...pp,
          requestId: ip
        })
      }))
    }
    const Yp = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class Dp {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lp;
        this.onChange = pp, this.sendAction = ip, this.pending = new Map, this.statuses = new Map
      }
      send(pp, ip, cp) {
        var Op;
        return this.statuses.delete(ip), this.pending.set(ip, (null !== (Op = this.pending.get(ip)) && void 0 !== Op ? Op : 0) + 1), this.sendAction(pp).then((pp => {
          var Op;
          const op = null !== pp && void 0 !== pp ? pp : {
              requestId: -1,
              ok: !1,
              message: Yp
            },
            Ip = (null !== (Op = this.pending.get(ip)) && void 0 !== Op ? Op : 1) - 1;
          Ip > 0 ? this.pending.set(ip, Ip) : this.pending.delete(ip);
          const Sp = !op.ok || op.message.length > 0 ? op.message : null === cp ? null : [cp];
          return null !== Sp && this.statuses.set(ip, {
            ok: op.ok,
            text: Sp,
            until: Date.now() + 4e3
          }), this.onChange(), op
        }))
      }
      show(pp, ip) {
        this.statuses.set(pp, {
          ...ip,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(pp) {
        for (const [ip, cp] of this.statuses) cp.until <= pp && this.statuses.delete(ip)
      }
      nextDeadline() {
        let pp = null;
        for (const cp of this.statuses.values()) {
          var ip;
          pp = Math.min(null !== (ip = pp) && void 0 !== ip ? ip : 1 / 0, cp.until)
        }
        return pp
      }
      statusOf(pp, ip) {
        const cp = this.statuses.get(pp);
        return !cp || cp.until <= ip ? null : {
          ok: cp.ok,
          text: cp.text
        }
      }
      isPending(pp) {
        return this.pending.has(pp)
      }
    }
  },
  36751: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Yp,
      h: () => Lp
    });
    var Op = cp(620),
      op = cp(1956),
      Ip = cp(1656),
      Sp = cp(104),
      xp = cp(1276);

    function Lp(pp, ip, cp) {
      return Sp.featureFlags.useSocialFeatures && pp && null === (0, xp.c)(ip, cp)
    }

    function Yp(pp, ip) {
      var cp, Sp;
      const xp = Ip.d.getSocialState().friends.find((pp => pp.name.toLowerCase() === ip.toLowerCase())),
        Lp = op.gameBridge.latest("players").byId[pp],
        Yp = void 0 !== Lp && Lp.name === ip,
        Dp = Yp && null !== (cp = Lp.cosmetics) && void 0 !== cp ? cp : void 0,
        Ap = xp && Dp ? {
          ...xp,
          cosmetics: Dp
        } : xp;
      return {
        playerSocialPreview: null !== Ap && void 0 !== Ap ? Ap : {
          isError: !1,
          name: ip,
          ranks: Yp ? [...Lp.ranks] : [],
          cosmetics: null !== Dp && void 0 !== Dp ? Dp : {},
          nameColour: null !== (Sp = null === Dp || void 0 === Dp ? void 0 : Dp.nameColour) && void 0 !== Sp ? Sp : Op.b,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== xp
      }
    }
  },
  36924: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ap
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(1692),
      xp = cp(1480),
      Lp = cp(1361),
      Yp = cp(1060),
      Dp = cp(1112);

    function Ap(pp) {
      let {
        label: ip,
        icon: cp,
        placeholder: op,
        onSubmit: Ap
      } = pp;
      const Pp = (0, Op.useRef)(null),
        [Wp, yp] = (0, Op.useState)(""),
        [Up, wp] = (0, Op.useState)("Enter"),
        [vp, tp] = (0, Op.useState)(null);
      (0, Op.useEffect)((() => {
        if ("Success" !== Up && "Error" !== Up) return;
        const pp = setTimeout((() => {
          "Success" === Up && Pp.current && (Pp.current.value = "", yp("")), wp("Enter")
        }), "Success" === Up ? 1e3 : 4e3);
        return () => {
          clearTimeout(pp)
        }
      }), [Up]);
      const Hp = () => {
        const pp = Wp.trim();
        "" !== pp && "Enter" === Up && (wp("Loading"), Ap(pp).then((pp => {
          Pp.current && ("error" in pp ? null === pp.error ? wp("Enter") : (tp(pp.error), wp("Error")) : wp("Success"))
        })))
      };
      return (0, Dp.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: pp => {
          pp.target === Pp.current && "Escape" !== pp.key && pp.stopPropagation()
        },
        children: [(0, Dp.jsxs)("div", {
          className: Ip()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Up}`),
          children: ["Loading" === Up && (0, Dp.jsx)(Lp.c, {}), "Success" === Up && (0, Dp.jsx)(Yp.d, {
            name: "check"
          }), "Error" === Up && vp]
        }), (0, Dp.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, Dp.jsx)(Sp.c, {
            className: "PlayerSearchInput",
            domRef: Pp,
            maxLength: 32,
            placeholderText: op,
            ariaLabel: op,
            stopPropagation: !1,
            onValueChange: pp => {
              yp(pp)
            },
            onEnter: Hp
          }), (0, Dp.jsxs)(xp.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Up || "" === Wp.trim(),
            onClick: Hp,
            children: [(0, Dp.jsx)(Yp.d, {
              name: cp
            }), " ", ip]
          })]
        })]
      })
    }
  },
  36903: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ap
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(1201),
      xp = cp(1060),
      Lp = cp(1112);
    const Yp = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Dp = ["unlisted", "public", "whitelist", "private"];

    function Ap(pp) {
      let {
        visibility: ip,
        onPick: cp
      } = pp;
      const {
        t: op
      } = (0, Sp.H)(), Ap = (0, Op.useRef)([]);
      return (0, Lp.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": op("worldSocial:whoCanJoin"),
        children: Dp.map(((pp, Op) => {
          const Sp = pp === ip;
          return (0, Lp.jsxs)("button", {
            ref: pp => {
              Ap.current[Op] = pp
            },
            type: "button",
            className: Ip()("WorldSocialTile", {
              WorldSocialTileSelected: Sp
            }),
            "aria-pressed": Sp,
            tabIndex: Sp ? 0 : -1,
            onKeyDown: pp => {
              ((pp, ip) => {
                const cp = "ArrowRight" === pp.key || "ArrowDown" === pp.key ? 1 : "ArrowLeft" === pp.key || "ArrowUp" === pp.key ? -1 : 0;
                var Op;
                0 !== cp && (pp.preventDefault(), null === (Op = Ap.current[(ip + cp + Dp.length) % Dp.length]) || void 0 === Op || Op.focus())
              })(pp, Op)
            },
            onClick: () => {
              cp(pp)
            },
            children: [(0, Lp.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, Lp.jsx)(xp.d, {
                name: Yp[pp]
              })
            }), (0, Lp.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, Lp.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: op(`worldSocial:${pp}`)
              }), (0, Lp.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: op(`worldSocial:${pp}Description`)
              })]
            })]
          }, pp)
        }))
      })
    }
  },
  36915: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp
    });
    var Op = cp(1201),
      op = cp(2731),
      Ip = cp(4462),
      Sp = cp(1112);

    function xp(pp) {
      let {
        LP: ip,
        children: cp,
        ...xp
      } = pp;
      const {
        t: Lp
      } = (0, Op.H)();
      return (0, Sp.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          ip.onChange(!ip.on)
        },
        children: (0, Sp.jsx)(op.h, {
          ...xp,
          opensProfileCard: !1,
          children: (0, Sp.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: pp => {
              pp.stopPropagation()
            },
            children: [cp, (0, Sp.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, Sp.jsx)(Ip.b, {
                checked: ip.on,
                disabled: !1,
                ariaLabel: Lp("worldSocial:letJoin", {
                  playerName: xp.playerSocialPreview.name
                }),
                onChange: pp => {
                  ip.onChange(pp.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36898: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => yp
    });
    var Op = cp(62),
      op = cp(1201),
      Ip = cp(1880),
      Sp = cp(104),
      xp = cp(25),
      Lp = cp(1505),
      Yp = cp(2752),
      Dp = cp(34325),
      Ap = cp(1480),
      Pp = cp(1060),
      Wp = cp(1112);

    function yp(pp) {
      let {
        worldCode: ip,
        message: cp
      } = pp;
      const {
        t: yp
      } = (0, op.H)(), {
        isTouchScreen: Up
      } = (0, xp.o)(["isTouchScreen"]), wp = Sp.featureFlags.canUseInviteLinks, vp = (0, Dp.k)(wp && null === cp), [tp, Hp] = (0, Yp.j)(), dp = (0, Op.useRef)(null);
      if (null !== cp) return (0, Wp.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Wp.jsx)(Pp.d, {
          name: "lock"
        }), (0, Wp.jsx)("span", {
          children: cp
        })]
      });
      const ep = wp ? vp : ip,
        jp = Up && wp && (0, Yp.d)();
      return (0, Wp.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!wp && (0, Wp.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: yp("worldSocial:worldCode")
        }), (0, Wp.jsx)("input", {
          ref: dp,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== ep && void 0 !== ep ? ep : "",
          "aria-label": yp(wp ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: pp => {
            pp.currentTarget.select()
          }
        }), (0, Wp.jsxs)(Ap.f, {
          className: "WorldSocialCopy",
          disabled: null === ep,
          onClick: () => {
            null !== ep && (0, Yp.h)(ep, {
              useShareSheet: jp,
              onOutcome: pp => {
                if ((0, Lp.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== pp || wp ? pp : "code"
                  }), "copied" === pp) Hp();
                else if ("failed" === pp) {
                  var ip;
                  null === (ip = dp.current) || void 0 === ip || ip.focus(), Ip.i.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Wp.jsx)(Pp.d, {
            name: tp ? "check" : jp ? "up-from-bracket" : "copy"
          }), " ", yp(tp ? "general:copied" : jp ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36908: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Wp,
      g: () => Pp,
      j: () => Ap
    });
    var Op = cp(620),
      op = cp(1201),
      Ip = cp(1656),
      Sp = cp(2731),
      xp = cp(2671),
      Lp = cp(1480),
      Yp = cp(36915),
      Dp = cp(1112);

    function Ap(pp, ip) {
      var cp;
      return {
        isError: !1,
        name: pp,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== ip && void 0 !== ip ? ip : {},
        nameColour: null !== (cp = null === ip || void 0 === ip ? void 0 : ip.nameColour) && void 0 !== cp ? cp : Op.b,
        location: {
          status: "offline"
        }
      }
    }

    function Pp(pp) {
      let {
        player: ip,
        isFriend: cp = !1,
        status: Op,
        showLocation: Lp = void 0 === Op,
        LP: Ap,
        onSendFriendRequest: Pp,
        actions: Wp,
        zIndex: yp
      } = pp;
      const {
        t: Up
      } = (0, op.H)();
      let wp = Op;
      null !== Ap && void 0 !== Ap && Ap.on && (wp = (0, Dp.jsxs)(Dp.Fragment, {
        children: [null !== Op && void 0 !== Op ? Op : (0, Dp.jsx)(xp.c, {
          socialPreview: ip
        }), (0, Dp.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Up("worldSocial:canJoin")]
        })]
      }));
      const vp = {
        playerSocialPreview: ip,
        isFriend: cp,
        hideFriendBadge: !0,
        onFriendRemoved: cp ? pp => {
          Ip.d.removeFriendFromState(pp)
        } : void 0,
        status: wp,
        showLocation: Lp,
        onSendFriendRequest: Pp,
        zIndex: yp
      };
      return Ap ? (0, Dp.jsx)(Yp.b, {
        ...vp,
        LP: Ap,
        children: Wp
      }) : (0, Dp.jsx)(Sp.h, {
        ...vp,
        opensProfileCard: !1,
        children: Wp || void 0
      })
    }

    function Wp(pp) {
      let {
        row: ip,
        LP: cp,
        canInvite: Op,
        invited: Ip,
        onInvite: Sp,
        zIndex: xp
      } = pp;
      const {
        t: Yp
      } = (0, op.H)(), Ap = "online" === ip.place ? Lp.f : Lp.j;
      return (0, Dp.jsx)(Pp, {
        player: ip.friend,
        isFriend: !0,
        status: "here" === ip.place ? Yp("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        LP: cp,
        zIndex: xp,
        actions: Op && (0, Dp.jsx)(Ap, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Ip,
          onClick: Sp,
          ariaLabel: `${Yp("worldSocial:invite")} ${ip.friend.name}`,
          children: Yp(Ip ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36892: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Lp,
      g: () => Sp,
      j: () => Yp
    });
    var Op = cp(62),
      op = cp(4677),
      Ip = cp(1880);

    function Sp(pp) {
      const ip = {
        lobbyName: pp,
        answer: null,
        response: op.b.getSocialSettings(pp)
      };
      return ip.response.then((pp => {
        ip.answer = pp
      })), ip
    }
    const xp = new Map;

    function Lp(pp) {
      xp.set(pp.lobbyName, pp)
    }

    function Yp(pp) {
      const [ip] = (0, Op.useState)((() => function(pp) {
        var ip;
        const cp = null !== (ip = xp.get(pp)) && void 0 !== ip ? ip : null;
        return null !== cp && void 0 !== cp && cp.answer && "error" in cp.answer ? null : cp
      }(pp))), [cp, Sp] = (0, Op.useState)((() => null !== ip && void 0 !== ip && ip.answer && "settings" in ip.answer ? ip.answer.settings : null)), [Lp, Yp] = (0, Op.useState)(!0), [Dp, Ap] = (0, Op.useState)(null !== cp), Pp = (0, Op.useRef)(cp);
      Pp.current = cp;
      const Wp = (0, Op.useRef)(0),
        yp = (0, Op.useRef)(0),
        Up = (0, Op.useRef)(!1),
        wp = (0, Op.useRef)(!0),
        vp = (0, Op.useCallback)((async ip => {
          const cp = ++Wp.current,
            Op = await (null !== ip && void 0 !== ip ? ip : op.b.getSocialSettings(pp));
          wp.current && cp === Wp.current && (Ap(!0), Yp(!1), "error" in Op || Sp(Op.settings))
        }), [pp]),
        tp = (0, Op.useCallback)((() => {
          Yp(!0), vp()
        }), [vp]),
        Hp = (0, Op.useCallback)((() => {
          yp.current > 0 ? Up.current = !0 : vp()
        }), [vp]);
      (0, Op.useEffect)((() => (wp.current = !0, xp.delete(pp), Yp(!0), vp(null === ip || void 0 === ip ? void 0 : ip.response), () => {
        wp.current = !1
      })), [vp, pp, ip]);
      const dp = pp => {
        Wp.current++, Yp(!1), Pp.current = pp, Sp(pp)
      };
      return {
        settings: cp,
        loading: Lp,
        answered: Dp,
        retry: tp,
        refresh: Hp,
        change: async function(ip, cp) {
          let {
            quiet: Op = !1,
            onAnswer: Sp
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const xp = Pp.current;
          if (null === xp) return !1;
          dp(cp(xp)), yp.current > 0 && (Up.current = !0), yp.current++;
          const Lp = await op.b.setSocialSettings(pp, ip);
          yp.current--;
          const Yp = !("error" in Lp);
          if (!wp.current) return Yp;
          if (null === Sp || void 0 === Sp || Sp(Lp), Op);
          else if ("error" in Lp) Ip.i.showMessage({
            translationKey: Lp.error
          });
          else
            for (const pp of Lp.notFound) Ip.i.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: pp
              }
            });
          if (yp.current > 0) return Yp;
          const Dp = Up.current;
          return Up.current = !1, !Dp && "settings" in Lp ? dp(Lp.settings) : (Dp || dp(xp), vp()), Yp
        }
      }
    }
  },
  36931: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      f: () => Ip
    });
    var Op = cp(156);
    const op = new Map;

    function Ip(pp, ip) {
      var cp;
      const Op = null !== (cp = op.get(pp)) && void 0 !== cp ? cp : new Map;
      Op.set(ip, Date.now()), op.set(pp, Op)
    }

    function Sp(pp) {
      const ip = op.get(pp);
      if (!ip) return [];
      const cp = Date.now();
      for (const [op, Ip] of ip) cp - Ip >= Op.n && ip.delete(op);
      return [...ip.keys()]
    }
  },
  36896: (pp, ip, cp) => {
    function Op(pp, ip) {
      const cp = ip.toLowerCase();
      for (const Op of pp)
        if (Op.toLowerCase() === cp) return !0;
      return !1
    }

    function op(pp, ip, cp) {
      const op = [],
        Ip = [],
        Sp = [];
      for (const xp of pp) !xp.isError && xp.name && ("inGame" === xp.location.status && xp.location.inLobbyName === ip || Op(cp, xp.name) ? Ip.push({
        friend: xp,
        place: "here"
      }) : "offline" === xp.location.status ? Sp.push({
        friend: xp,
        place: "offline"
      }) : op.push({
        friend: xp,
        place: "online"
      }));
      return [...op, ...Ip, ...Sp]
    }

    function Ip(pp, ip, cp) {
      const op = [],
        Ip = pp.flatMap((pp => "here" === pp.place ? [pp.friend.name] : []));
      for (const Sp of [...Ip, ...ip]) Op(op, Sp) || Op(cp, Sp) || op.push(Sp);
      return op
    }

    function Sp(pp, ip) {
      return null === pp || void 0 === pp || !pp.canManage || Op(pp.whitelist, ip) ? "none" : "whitelist" === pp.visibility ? "required" : "quiet"
    }

    function xp(pp) {
      if (null === pp) return !0;
      const {
        visibility: ip
      } = pp;
      return "public" === ip || "unlisted" === ip || "whitelist" === ip && pp.canManage
    }

    function Lp(pp, ip, cp) {
      if (cp) {
        const cp = ip.filter((ip => !Op(pp.whitelist, ip)));
        return {
          ...pp,
          whitelist: [...pp.whitelist, ...cp]
        }
      }
      return {
        ...pp,
        whitelist: pp.whitelist.filter((pp => !Op(ip, pp)))
      }
    }

    function Yp(pp, ip) {
      const cp = [];
      for (let Op = 0; Op < pp.length; Op += ip) cp.push(pp.slice(Op, Op + ip));
      return cp
    }
    cp.d(ip, {
      c: () => xp,
      f: () => Ip,
      h: () => op,
      l: () => Op,
      o: () => Yp,
      p: () => Sp,
      r: () => Lp
    })
  },
  37227: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(62),
      op = cp(2492);

    function Ip() {
      const pp = (0, op.i)("lobbyLeaderboardInfo");
      return (0, Op.useMemo)((() => function(pp) {
        if (null === pp) return null;
        const ip = Object.entries(pp),
          cp = ip.filter((pp => {
            let [, ip] = pp;
            return void 0 !== ip
          }));
        if (cp.length === ip.length) return pp;
        const Op = Object.fromEntries(cp),
          op = Object.keys(pp).filter((pp => !Object.hasOwn(Op, pp)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${op.join(", ")}`), Op
      }(pp)), [pp])
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);