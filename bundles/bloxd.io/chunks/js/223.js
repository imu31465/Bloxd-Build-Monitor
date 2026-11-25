export const id = 223;
export const ids = [223];
export const modules = {
  41276: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      LobbyManageView: () => ue
    });
    var Ot = Vt(63),
      qt = Vt(1583),
      Dt = Vt(37252),
      mt = Vt(2516),
      dt = Vt(2523),
      jt = Vt(2498),
      Ht = Vt(36804);

    function Xt() {
      const [tt, et] = (0, Ot.useState)(new Map);
      return {
        get: et => tt.get(et),
        hold: (0, Ot.useCallback)(((tt, Vt, Ot) => {
          et((et => new Map(et).set(tt, Vt))), Ot.then((() => {
            et((et => {
              const Vt = new Map(et);
              return Vt.delete(tt), Vt
            }))
          }))
        }), [])
      }
    }
    var Qt = Vt(1140),
      lt = Vt.n(Qt),
      Et = Vt(1286),
      ft = Vt(1152),
      wt = Vt(1436),
      yt = Vt(2745),
      Nt = Vt(5186),
      Mt = Vt(3510);
    var bt = Vt(2063),
      Jt = Vt(1556);

    function Ct(tt, et, Vt) {
      const Ot = tt.filter((tt => tt.name !== et)),
        qt = Ot.filter((tt => "none" === tt.role)).sort(((tt, et) => et.at - tt.at)),
        Dt = Ot.filter((tt => "none" !== tt.role)).sort(((tt, et) => Vt.indexOf(tt.role) - Vt.indexOf(et.role) || et.at - tt.at));
      return [...tt.some((tt => tt.name === et)) && null !== et ? [et] : [], ...[...qt, ...Dt].map((tt => tt.name))]
    }

    function ut(tt, et) {
      const Vt = tt.banned.map((tt => tt.name)),
        Ot = new Set(Vt);
      return {
        here: Ct(tt.here, et, tt.roles.map((tt => tt.role))),
        away: tt.away.filter((tt => !Ot.has(tt.name))).map((tt => tt.name)),
        banned: Vt
      }
    }

    function Kt(tt, et) {
      const Vt = tt.here.find((tt => tt.name === et));
      if (Vt) return {
        section: "here",
        player: Vt
      };
      const Ot = tt.banned.find((tt => tt.name === et));
      if (Ot) return {
        section: "banned",
        bannedAt: Ot.at
      };
      const qt = tt.away.find((tt => tt.name === et));
      return qt ? {
        section: "away",
        player: qt
      } : {
        section: "gone"
      }
    }
    const ht = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var vt = Vt(2742),
      Wt = Vt(36799),
      St = Vt(36978),
      ct = Vt(3192),
      Rt = Vt(391);

    function It(tt, et, Vt) {
      return et.map((et => {
        if ("string" === typeof et) return et;
        const Ot = "str" in et ? et.str : et;
        return "string" === typeof Ot ? Ot : "entityName" in Ot ? Ot.entityName : "translationKey" in Ot ? tt(Ot.translationKey, (0, Et.p)(Ot.params, Vt)) : ""
      })).join("")
    }

    function Pt(tt, et, Vt, Ot, qt) {
      return qt - Ot < 6e4 ? tt(`${Vt}JustNow`) : tt(Vt, {
        time: (0, Rt.mb)((0, Et.o)(et, Vt), Ot, qt)
      })
    }
    var Zt = Vt(2001),
      Lt = Vt(1770),
      Ft = Vt(1188);

    function kt(tt) {
      let {
        status: et
      } = tt;
      return (0, Ft.jsx)("span", {
        className: lt()("LobbyManageStatus", {
          LobbyManageStatusRefused: !et.ok
        }),
        children: (0, Ft.jsx)(Zt.e, {
          text: et.text
        })
      })
    }

    function Gt(tt) {
      let {
        names: et,
        cap: Vt,
        filterFrom: qt,
        moreLabel: Dt,
        reveal: mt = null,
        renderRow: dt
      } = tt;
      const {
        t: jt
      } = (0, Et.H)(), [Ht, Xt] = (0, Ot.useState)(!1), [Qt, lt] = (0, Ot.useState)(""), wt = Ht || null !== mt && et.indexOf(mt) >= Vt, Nt = (wt || et.length <= Vt) && null !== qt && et.length > qt, Mt = Qt.trim().toLowerCase();
      let bt = wt ? et : et.slice(0, Vt);
      return Nt && "" !== Mt && (bt = bt.filter((tt => tt.toLowerCase().includes(Mt)))), (0, Ft.jsxs)(Ft.Fragment, {
        children: [Nt && (0, Ft.jsx)(Lt.d, {
          className: "LobbyManageFilter",
          placeholderText: jt("lobbyManage:findName"),
          ariaLabel: jt("lobbyManage:findName"),
          onValueChange: tt => {
            lt(tt)
          }
        }), bt.length > 0 && (0, Ft.jsx)("div", {
          className: "PlayerRows",
          children: bt.map(((tt, et) => dt(tt, bt.length - et)))
        }), !wt && et.length > Vt && (0, Ft.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, Ft.jsx)(yt.d, {
            label: (0, Ft.jsxs)(Ft.Fragment, {
              children: [Dt, " ", (0, Ft.jsx)(ft.b, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              Xt(!0)
            }
          })
        })]
      })
    }

    function zt(tt) {
      let {
        value: et,
        placeholder: Vt,
        ariaLabel: qt,
        maxLength: Dt,
        wide: mt = !1,
        onSave: dt
      } = tt;
      const jt = (0, Ot.useRef)(null),
        [Ht, Xt] = (0, Ot.useState)(0),
        Qt = (0, Ot.useRef)(!0),
        Et = (0, Ot.useRef)(null),
        ft = (0, Ot.useRef)({
          value: et,
          onSave: dt
        });
      ft.current = {
        value: et,
        onSave: dt
      };
      const wt = () => {
        const tt = Et.current;
        Et.current = null, null !== tt && tt !== ft.current.value && ft.current.onSave(tt).then((() => {
          Qt.current && Xt((tt => tt + 1))
        }))
      };
      return (0, Ot.useEffect)((() => {
        null === Et.current && jt.current && (jt.current.value = et)
      }), [et, Ht]), (0, Ot.useEffect)((() => () => {
        Qt.current = !1, wt()
      }), []), (0, Ft.jsx)("div", {
        className: lt()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: mt
        }),
        onBlur: wt,
        children: (0, Ft.jsx)(Lt.d, {
          domRef: jt,
          defaultValue: et,
          placeholderText: Vt,
          ariaLabel: qt,
          maxLength: Dt,
          onValueChange: tt => {
            Et.current = tt
          },
          onEnter: wt
        })
      })
    }
    const ot = ["mod", "coOwner"],
      rt = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function Ut(tt) {
      var et, Vt, Dt;
      let {
        name: mt,
        place: dt,
        openedIn: jt,
        isYou: Ht,
        manage: Qt,
        hiddenNames: lt,
        zIndex: wt
      } = tt;
      const {
        t: yt,
        selectedLanguage: Nt
      } = (0, Et.H)(), [Mt, bt] = (0, Ot.useState)(null), {
        state: Ct
      } = Qt, ut = `player:${mt}`, Kt = function(tt, et) {
        if ("banned" === tt.section) return {
          ...ht,
          unban: !0
        };
        if ("gone" === tt.section) return ht;
        const {
          player: Vt
        } = tt, Ot = "here" === tt.section, qt = Ot || "none" !== Vt.role ? Vt.can.roles : [];
        return {
          gamemode: Ot && et && null !== Vt.gamemode && Vt.can.gamemode,
          roles: qt,
          fixedRole: 0 === qt.length && "none" !== Vt.role ? Vt.role : null,
          kick: Ot && Vt.can.kick,
          ban: Vt.can.ban,
          unban: !1
        }
      }(dt, null !== Ct.gamemodes), Rt = Qt.statusOf(ut), Zt = Qt.isPending(ut), Lt = Xt(), Gt = Date.now(), zt = tt => {
        var et, Vt;
        return null !== (et = null === (Vt = (tt => Ct.roles.find((et => et.role === tt)))(tt)) || void 0 === Vt ? void 0 : Vt.label) && void 0 !== et ? et : tt
      }, Ut = tt => {
        const et = rt[tt];
        return void 0 === et ? void 0 : yt(et)
      }, At = "here" === dt.section || "away" === dt.section ? dt.player : null, it = "here" === dt.section ? dt.player.id : null, {
        playerSocialPreview: Yt,
        isFriend: Bt
      } = null === it ? {
        playerSocialPreview: (0, St.j)(mt, null),
        isFriend: !1
      } : (0, Wt.c)(it, mt), pt = function() {
        Qt.send(...arguments)
      }, xt = (tt, et) => {
        Lt.hold("role", tt, Qt.send({
          type: "setRole",
          name: mt,
          role: tt
        }, ut, et))
      };
      let Tt = null;
      if ("ban" === (null === Mt || void 0 === Mt ? void 0 : Mt.kind)) Tt = yt("lobbyManageEntry:banConfirm", {
        playerName: mt
      });
      else if ("role" === (null === Mt || void 0 === Mt ? void 0 : Mt.kind)) {
        var gt;
        Tt = `${yt("lobbyManage:roleConfirm",{playerName:mt,role:zt(Mt.role)})} ${null!==(gt=Ut(Mt.role))&&void 0!==gt?gt:""}`
      } else if (Rt) Tt = (0, Ft.jsx)(kt, {
        status: Rt
      });
      else if (Ht) Tt = yt("lobbyManage:you");
      else if ("here" === dt.section) "none" === dt.player.role && Gt - dt.player.at < 6e5 && (Tt = Pt(yt, Nt.code, "lobbyManage:joinedAgo", dt.player.at, Gt));
      else if ("away" === dt.section) {
        if (dt.player.at > 0) {
          const tt = "kicked" === dt.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          Tt = Pt(yt, Nt.code, tt, dt.player.at, Gt)
        }
      } else "banned" === dt.section ? null !== dt.bannedAt && (Tt = Pt(yt, Nt.code, "lobbyManage:bannedAgo", dt.bannedAt, Gt)) : "banned" === jt && (Tt = yt("lobbyManageEntry:unbanned"));
      return (0, Ft.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": mt,
        children: (0, Ft.jsxs)(vt.f, {
          playerSocialPreview: Yt,
          isFriend: Bt,
          status: Tt,
          opensProfileCard: !Ht && (0, Wt.e)(!0, mt, lt),
          zIndex: wt,
          children: [null !== Mt && (0, Ft.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === Mt.kind && (0, Ft.jsxs)(Jt.G, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                bt(null), pt({
                  type: "ban",
                  name: mt
                }, ut)
              },
              children: [(0, Ft.jsx)(ft.b, {
                name: "gavel"
              }), (0, Ft.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: yt("lobbyManageEntry:ban")
              })]
            }), "role" === Mt.kind && (0, Ft.jsx)(Jt.f, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: Mt.role
              },
              onClick: () => {
                bt(null), xt(Mt.role)
              },
              children: yt("lobbyManage:makeRole", {
                role: zt(Mt.role)
              })
            }), (0, Ft.jsx)(Jt.g, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                bt(null)
              },
              children: yt("general:cancel")
            })]
          }), null === Mt && (0, Ft.jsxs)(Ft.Fragment, {
            children: [(0, Ft.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [Kt.gamemode && null !== At && (0, Ft.jsx)(ct.e, {
                options: (null !== (et = Ct.gamemodes) && void 0 !== et ? et : []).map((tt => ({
                  value: tt.value,
                  label: It(yt, tt.label, lt)
                }))),
                value: null !== (Vt = Lt.get("gamemode")) && void 0 !== Vt ? Vt : At.gamemode,
                disabled: Zt,
                onChange: tt => {
                  (0, qt.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: tt.value
                  }), Lt.hold("gamemode", tt.value, Qt.send({
                    type: "setGamemode",
                    name: mt,
                    gamemode: tt.value
                  }, ut))
                }
              }), Kt.roles.length > 0 && null !== At && (0, Ft.jsx)(ct.e, {
                options: [...Ct.roles].reverse().filter((tt => Kt.roles.includes(tt.role))).map((tt => ({
                  value: tt.role,
                  label: tt.label
                }))),
                value: null !== (Dt = Lt.get("role")) && void 0 !== Dt ? Dt : At.role,
                disabled: Zt,
                onChange: tt => {
                  var et;
                  (et = tt.value) !== (null === At || void 0 === At ? void 0 : At.role) && (ot.includes(et) ? bt({
                    kind: "role",
                    role: et
                  }) : ((0, qt.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: et
                  }), xt(et, Ut(et))))
                }
              }), null !== Kt.fixedRole && (0, Ft.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: zt(Kt.fixedRole)
              })]
            }), (0, Ft.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [Kt.kick && (0, Ft.jsxs)(Jt.g, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${yt("lobbyManageEntry:kick")} ${mt}`,
                disabled: Zt,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  pt({
                    type: "kick",
                    name: mt
                  }, ut)
                },
                children: [(0, Ft.jsx)(ft.b, {
                  name: "person-falling-burst"
                }), (0, Ft.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: yt("lobbyManageEntry:kick")
                })]
              }), Kt.ban && (0, Ft.jsxs)(Jt.K, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${yt("lobbyManageEntry:ban")} ${mt}`,
                disabled: Zt,
                padDestructive: !0,
                onClick: () => {
                  bt({
                    kind: "ban"
                  })
                },
                children: [(0, Ft.jsx)(ft.b, {
                  name: "gavel"
                }), (0, Ft.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: yt("lobbyManageEntry:ban")
                })]
              }), Kt.unban && (0, Ft.jsxs)(Jt.g, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${yt("lobbyManageEntry:unban")} ${mt}`,
                disabled: Zt,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  pt({
                    type: "unban",
                    name: mt
                  }, ut)
                },
                children: [(0, Ft.jsx)(ft.b, {
                  name: "user-unlock"
                }), (0, Ft.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: yt("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function At(tt) {
      var et, Vt, qt, Dt;
      let {
        manage: mt,
        focusRequest: dt,
        onFocused: jt
      } = tt;
      const {
        t: Ht
      } = (0, Et.H)(), Xt = (0, bt.h)("players"), Qt = (0, bt.h)("hiddenPlayerNames"), lt = (0, Ot.useRef)(null), {
        state: wt
      } = mt, Nt = null === Xt.localId ? null : null !== (et = null === (Vt = Xt.byId[Xt.localId]) || void 0 === Vt ? void 0 : Vt.name) && void 0 !== et ? et : null, [Mt] = (0, Ot.useState)((() => ut(wt, Nt))), Ct = function(tt, et, Vt) {
        const Ot = new Set([...tt.here, ...tt.away, ...tt.banned]),
          qt = ut(et, Vt),
          Dt = et => {
            const Vt = qt[et].filter((tt => !Ot.has(tt)));
            for (const tt of Vt) Ot.add(tt);
            return [...tt[et], ...Vt]
          };
        return {
          here: Dt("here"),
          away: Dt("away"),
          banned: Dt("banned")
        }
      }(Mt, wt, Nt), [ht, vt] = (0, Ot.useState)(!1), Wt = function(tt, et) {
        return tt.here.filter((tt => tt.name !== et && "none" === tt.role && tt.can.kick)).length
      }(wt, Nt), St = mt.statusOf("kickAll");
      (0, Ot.useEffect)((() => {
        var tt, et;
        if (null === dt) return;
        const Vt = null === (tt = lt.current) || void 0 === tt ? void 0 : tt.querySelector(`[data-lobby-manage-row="${CSS.escape(dt.name)}"]`);
        null === Vt || void 0 === Vt || Vt.scrollIntoView({
          block: "center"
        }), null === Vt || void 0 === Vt || null === (et = Vt.querySelector(".ProfilePreview")) || void 0 === et || et.focus({
          preventScroll: !0
        }), jt(dt.seq)
      }), [null === dt || void 0 === dt ? void 0 : dt.seq]);
      const ct = tt => (et, Vt) => (0, Ft.jsx)(Ut, {
        name: et,
        place: Kt(wt, et),
        openedIn: tt,
        isYou: et === Nt,
        manage: mt,
        hiddenNames: Qt,
        zIndex: Vt
      }, et);
      return (0, Ft.jsxs)("div", {
        ref: lt,
        className: "LobbyManagePage",
        children: [Ct.here.length > 0 && (0, Ft.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Ft.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, Ft.jsx)(yt.d, {
              label: Ht("lobbyManage:here"),
              meta: wt.here.length
            }), Wt >= 2 && !ht && (0, Ft.jsxs)(Jt.K, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: mt.isPending("kickAll"),
              onClick: () => {
                vt(!0)
              },
              children: [(0, Ft.jsx)(ft.b, {
                name: "person-falling-burst"
              }), " ", Ht("lobbyManage:kickAll")]
            })]
          }), ht && Wt >= 2 && (0, Ft.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, Ft.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: Ht("lobbyManage:kickAllConfirm", {
                count: Wt
              })
            }), (0, Ft.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, Ft.jsx)(Jt.G, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  vt(!1), mt.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: Ht("lobbyManage:kickAll")
              }), (0, Ft.jsx)(Jt.g, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  vt(!1)
                },
                children: Ht("general:cancel")
              })]
            })]
          }), St && (0, Ft.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, Ft.jsx)(kt, {
              status: St
            })
          }), (0, Ft.jsx)(Gt, {
            names: Ct.here,
            cap: Ct.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: ct("here")
          })]
        }), Ct.away.length > 0 && (0, Ft.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Ft.jsx)(yt.d, {
            label: Ht("lobbyManage:notHere"),
            meta: Ct.away.length
          }), (0, Ft.jsx)(Gt, {
            names: Ct.away,
            cap: 5,
            filterFrom: null,
            moreLabel: Ht("lobbyManage:allCount", {
              count: Ct.away.length
            }),
            reveal: null !== (qt = null === dt || void 0 === dt ? void 0 : dt.name) && void 0 !== qt ? qt : null,
            renderRow: ct("away")
          })]
        }), Ct.banned.length > 0 && (0, Ft.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Ft.jsx)(yt.d, {
            label: Ht("lobbyManage:banned"),
            meta: Ct.banned.length
          }), (0, Ft.jsx)(Gt, {
            names: Ct.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: Ht("lobbyManage:allCount", {
              count: Ct.banned.length
            }),
            reveal: null !== (Dt = null === dt || void 0 === dt ? void 0 : dt.name) && void 0 !== Dt ? Dt : null,
            renderRow: ct("banned")
          })]
        })]
      })
    }
    var it = Vt(4771),
      Yt = Vt(1737),
      Bt = Vt(36954),
      pt = Vt(36973),
      xt = Vt(36967),
      Tt = Vt(36959),
      gt = Vt(36988),
      st = Vt(36982),
      nt = Vt(36984);

    function te(tt) {
      const et = new Set;
      for (const Vt of tt) et.add(Vt.toLowerCase());
      return et
    }

    function ee(tt) {
      var et, Vt;
      let {
        state: qt,
        lobbyName: Dt,
        listed: mt,
        isListed: dt,
        bM: jt,
        qJ: Ht,
        statusOf: Xt
      } = tt;
      const {
        t: Qt,
        selectedLanguage: lt
      } = (0, Et.H)(), ft = (0, Yt.k)(), wt = (0, bt.h)("players"), Nt = null === wt.localId ? null : null !== (et = null === (Vt = wt.byId[wt.localId]) || void 0 === Vt ? void 0 : Vt.name) && void 0 !== et ? et : null, Mt = (0, Ot.useMemo)((() => (0, Tt.f)(ft.friends, Dt, qt.here.map((tt => tt.name)))), [ft.friends, Dt, qt.here]), Jt = new Map(Mt.map((tt => [tt.friend.name.toLowerCase(), tt]))), Ct = function(tt) {
        let {
          refused: et,
          listed: Vt,
          here: Ot,
          friends: qt,
          excluded: Dt
        } = tt;
        const mt = te(Dt),
          dt = tt => tt.filter((tt => {
            const et = tt.toLowerCase();
            return !mt.has(et) && (mt.add(et), !0)
          }));
        return {
          added: [],
          refused: dt(et),
          listed: dt(Vt),
          suggested: dt([...Ot, ...qt])
        }
      }({
        refused: qt.refused.map((tt => tt.name)),
        listed: mt,
        here: qt.here.map((tt => tt.name)),
        friends: Mt.flatMap((tt => "here" === tt.place ? [] : [tt.friend.name])),
        excluded: [...null === Nt ? [] : [Nt], ...[...qt.here, ...qt.away].flatMap((tt => "none" === tt.role || (0, Tt.j)(mt, tt.name) ? [] : [tt.name]))]
      }), [ut] = (0, Ot.useState)(Ct), [Kt, ht] = (0, Ot.useState)([]), vt = function(tt, et, Vt) {
        const Ot = te(Vt),
          qt = te([...Vt, ...tt.refused, ...tt.listed, ...tt.suggested]),
          Dt = Vt => [...tt[Vt].filter((tt => !Ot.has(tt.toLowerCase()))), ...et[Vt].filter((tt => {
            const et = tt.toLowerCase();
            return !qt.has(et) && (qt.add(et), !0)
          }))];
        return {
          added: [...Vt],
          refused: Dt("refused"),
          listed: Dt("listed"),
          suggested: Dt("suggested")
        }
      }(ut, Ct, Kt), ct = (tt, et) => {
        var Vt, Ot;
        const Dt = tt.toLowerCase(),
          mt = Jt.get(Dt),
          Ht = qt.here.find((tt => tt.name.toLowerCase() === Dt)),
          Et = qt.refused.find((tt => tt.name.toLowerCase() === Dt)),
          ft = null !== (Vt = null === Xt || void 0 === Xt ? void 0 : Xt(tt)) && void 0 !== Vt ? Vt : null;
        let wt = null;
        ft ? wt = (0, Ft.jsx)(kt, {
          status: ft
        }) : Et ? wt = Pt(Qt, lt.code, "lobbyManage:triedToJoinAgo", Et.at, Date.now()) : mt && Ht ? wt = Qt("lobbyManage:friendHere") : mt ? wt = "online" === mt.place ? Qt("lobbyManage:friendOnline") : Qt("lobbyManage:friend") : Ht && (wt = Qt("lobbyManage:hereStatus"));
        let yt = null !== (Ot = null === mt || void 0 === mt ? void 0 : mt.friend) && void 0 !== Ot ? Ot : (0, St.j)(tt, null);
        return !mt && null !== Ht && void 0 !== Ht && Ht.id && (yt = (0, Wt.c)(Ht.id, Ht.name).playerSocialPreview), (0, Ft.jsx)(st.c, {
          playerSocialPreview: yt,
          isFriend: void 0 !== mt,
          hideFriendBadge: !0,
          status: wt,
          zIndex: et,
          BQ: {
            on: dt(tt),
            onChange: et => {
              jt(tt, et)
            }
          }
        }, Dt)
      }, Rt = [...vt.added, ...vt.refused];
      return (0, Ft.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, Ft.jsx)(yt.d, {
          label: Qt("worldSocial:whitelist"),
          meta: mt.length
        }), (0, Ft.jsx)(nt.d, {
          label: Qt("lobbyManage:add"),
          icon: "user-check",
          placeholder: Qt("socialBar:enterPlayerName"),
          onSubmit: async tt => {
            const et = await Ht(tt);
            return et.ok && ht((et => [tt, ...et])), et
          }
        }), Rt.length > 0 && (0, Ft.jsx)("div", {
          className: "PlayerRows",
          children: Rt.map(((tt, et) => ct(tt, Rt.length - et)))
        }), (0, Ft.jsx)(Gt, {
          names: vt.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: Qt("lobbyManage:allOnWhitelist", {
            count: vt.listed.length
          }),
          renderRow: ct
        }), (0, Ft.jsx)(Gt, {
          names: vt.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: Qt("lobbyManage:allCount", {
            count: vt.suggested.length
          }),
          renderRow: ct
        })]
      })
    }

    function Ve(tt) {
      let {
        manage: et,
        listing: Vt
      } = tt;
      const {
        t: Ot
      } = (0, Et.H)(), Dt = (tt, Vt) => ((0, qt.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: tt
      }), et.send({
        type: "setListing",
        field: tt,
        value: Vt
      }, `listing:${tt}`)), mt = tt => {
        const Vt = et.statusOf(`listing:${tt}`);
        return Vt && !Vt.ok && (0, Ft.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, Ft.jsx)(kt, {
            status: Vt
          })
        })
      };
      return (0, Ft.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, Ft.jsx)(yt.d, {
          label: Ot("lobbyManage:inWorldsList")
        }), (0, Ft.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Ft.jsx)("div", {
            className: "SliderText",
            children: Ot("lobbyManage:description")
          }), (0, Ft.jsx)(zt, {
            value: Vt.description,
            ariaLabel: Ot("lobbyManage:description"),
            wide: !0,
            onSave: tt => Dt("description", tt)
          })]
        }), mt("description"), (0, Ft.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Ft.jsx)("div", {
            className: "SliderText",
            children: Ot("lobbyManage:emojis")
          }), (0, Ft.jsx)(zt, {
            value: Vt.emojis,
            ariaLabel: Ot("lobbyManage:emojis"),
            onSave: tt => Dt("emojis", tt)
          })]
        }), mt("emojis"), (0, Ft.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Ft.jsx)("div", {
            className: "SliderText",
            children: Ot("lobbyManage:colour")
          }), (0, Ft.jsx)(Oe, {
            value: Vt.colour,
            ariaLabel: Ot("lobbyManage:colour"),
            onSave: tt => {
              Dt("colour", tt)
            }
          })]
        }), mt("colour")]
      })
    }

    function Oe(tt) {
      let {
        value: et,
        ariaLabel: Vt,
        onSave: qt
      } = tt;
      const Dt = (0, Ot.useRef)(null),
        mt = (0, Ot.useRef)({
          value: et,
          onSave: qt
        });
      mt.current = {
        value: et,
        onSave: qt
      };
      const dt = (0, Ot.useRef)(null),
        jt = (0, Ot.useRef)(!1),
        Ht = tt => {
          jt.current && tt.value !== mt.current.value && tt.value !== dt.current && (dt.current = tt.value, mt.current.onSave(tt.value))
        };
      return (0, Ot.useEffect)((() => {
        Dt.current && document.activeElement !== Dt.current && (Dt.current.value = et)
      }), [et]), (0, Ot.useEffect)((() => {
        const tt = Dt.current,
          et = () => {
            Ht(tt)
          };
        return tt.addEventListener("change", et), () => {
          tt.removeEventListener("change", et), Ht(tt)
        }
      }), []), (0, Ft.jsx)("input", {
        ref: Dt,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: et,
        "aria-label": Vt,
        onInput: () => {
          jt.current = !0
        },
        onBlur: tt => {
          Ht(tt.currentTarget)
        }
      })
    }

    function qe(tt) {
      let {
        manage: et
      } = tt;
      const {
        lobbyName: Vt,
        shownLobbyName: Ot
      } = (0, bt.h)("connectedGame");
      return et.state.you.canSetVisibility && null !== Vt ? (0, Ft.jsx)(me, {
        manage: et,
        lobbyName: Vt,
        worldCode: null !== Ot && void 0 !== Ot ? Ot : Vt
      }, Vt) : (0, Ft.jsx)(de, {
        manage: et,
        lobbyName: null !== Vt && void 0 !== Vt ? Vt : ""
      })
    }

    function De(tt) {
      return tt.map((tt => tt.toLowerCase())).sort().join(",")
    }

    function me(tt) {
      var et;
      let {
        manage: Vt,
        lobbyName: Dt,
        worldCode: mt
      } = tt;
      const {
        t: dt
      } = (0, Et.H)(), {
        settings: jt,
        loading: Ht,
        change: Xt,
        retry: Qt,
        refresh: lt
      } = (0, Bt.f)(Dt), ft = (0, Yt.k)(), {
        state: Nt
      } = Vt, Mt = (0, Ot.useRef)(jt);
      Mt.current = jt;
      const bt = De(null !== (et = Nt.whitelist) && void 0 !== et ? et : []),
        Ct = null !== Nt.whitelist;
      (0, Ot.useEffect)((() => {
        const tt = Mt.current;
        null !== tt && (tt.visibility !== Nt.visibility || Ct && De(tt.whitelist) !== bt) && lt()
      }), [Nt.visibility, bt, Ct, lt]);
      const ut = async (tt, et) => {
        let Vt = null;
        return await Xt(tt, et, {
          quiet: !0,
          onAnswer: tt => {
            Vt = tt
          }
        }), Vt
      }, Kt = (tt, et) => {
        null !== et && "error" in et && Vt.showStatus(tt, {
          ok: !1,
          text: [dt(et.error)]
        })
      }, ht = async tt => {
        if (null === jt || tt === jt.visibility) return;
        (0, qt.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: tt
        });
        const et = "whitelist" === tt ? (0, Tt.e)((0, Tt.f)(ft.friends, Dt, Nt.here.map((tt => tt.name))), (0, gt.e)(Dt), jt.whitelist) : [],
          Vt = await ut({
            setVisibility: tt
          }, (et => ({
            ...et,
            visibility: tt
          })));
        Kt("mode", Vt), null === Vt || "error" in Vt || await (async tt => {
          for (const et of (0, Tt.m)(tt, it.E))
            if (!await Xt({
                whitelistAdd: et
              }, (tt => (0, Tt.r)(tt, et, !0)))) return !1;
          return !0
        })(et)
      }, vt = (0, Ot.useMemo)((() => {
        var tt;
        if (null === jt) return [];
        const et = null !== (tt = Nt.whitelist) && void 0 !== tt ? tt : [];
        return [...et.filter((tt => (0, Tt.j)(jt.whitelist, tt))), ...jt.whitelist.filter((tt => !(0, Tt.j)(et, tt)))]
      }), [jt, Nt.whitelist]), Wt = Vt.statusOf("mode");
      return (0, Ft.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Ft.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Ft.jsx)(yt.d, {
            label: dt("worldSocial:whoCanJoin")
          }), null === jt && Ht && (0, Ft.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Ft.jsx)(wt.b, {})
          }), null === jt && !Ht && (0, Ft.jsx)(Jt.g, {
            className: "SmallTextLight",
            onClick: Qt,
            children: dt("worldSocial:loadFailed")
          }), null !== jt && (0, Ft.jsx)(pt.e, {
            visibility: jt.visibility,
            onPick: tt => {
              ht(tt)
            }
          }), Wt && (0, Ft.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, Ft.jsx)(kt, {
              status: Wt
            })
          }), null !== jt && "private" !== jt.visibility && (0, Ft.jsx)(xt.b, {
            worldCode: mt,
            message: null
          })]
        }), "whitelist" === (null === jt || void 0 === jt ? void 0 : jt.visibility) && (0, Ft.jsx)(ee, {
          state: Nt,
          lobbyName: Dt,
          listed: vt,
          isListed: tt => (0, Tt.j)(jt.whitelist, tt),
          bM: (tt, et) => {
            (0, qt.reportAnalyticsClick)(et ? {
              id: "lobby_manage.whitelist_add",
              value: "BQ"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), ut(et ? {
              whitelistAdd: [tt]
            } : {
              whitelistRemove: tt
            }, (Vt => (0, Tt.r)(Vt, [tt], et))).then((et => {
              Kt(`whitelist:${tt.toLowerCase()}`, et)
            }))
          },
          qJ: async tt => {
            (0, qt.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const et = await ut({
              whitelistAdd: [tt]
            }, (et => (0, Tt.r)(et, [tt], !0)));
            return null === et ? {
              ok: !1,
              error: dt("worldSocial:changeFailed")
            } : "error" in et ? {
              ok: !1,
              error: dt(et.error)
            } : (0, Tt.j)(et.notFound, tt) ? {
              ok: !1,
              error: dt("lobbyManage:noPlayerCalled", {
                playerName: tt
              })
            } : {
              ok: !0
            }
          },
          statusOf: tt => Vt.statusOf(`whitelist:${tt.toLowerCase()}`)
        }), "public" === (null === jt || void 0 === jt ? void 0 : jt.visibility) && null !== Nt.listing && (0, Ft.jsx)(Ve, {
          manage: Vt,
          listing: Nt.listing
        })]
      })
    }

    function de(tt) {
      var et;
      let {
        manage: Vt,
        lobbyName: Ot
      } = tt;
      const {
        t: Dt
      } = (0, Et.H)(), {
        state: mt
      } = Vt, dt = Xt(), jt = null !== (et = mt.whitelist) && void 0 !== et ? et : [];
      return (0, Ft.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Ft.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Ft.jsx)(yt.d, {
            label: Dt("worldSocial:whoCanJoin")
          }), (0, Ft.jsx)("div", {
            className: "LobbyManageModeText",
            children: Dt(`worldSocial:${mt.visibility}`)
          })]
        }), "whitelist" === mt.visibility && mt.you.canEditWhitelist && (0, Ft.jsx)(ee, {
          state: mt,
          lobbyName: Ot,
          listed: jt,
          isListed: tt => {
            var et;
            return null !== (et = dt.get(tt.toLowerCase())) && void 0 !== et ? et : (0, Tt.j)(jt, tt)
          },
          bM: (tt, et) => {
            (0, qt.reportAnalyticsClick)(et ? {
              id: "lobby_manage.whitelist_add",
              value: "BQ"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const Ot = tt.toLowerCase();
            dt.hold(Ot, et, Vt.send(et ? {
              type: "whitelistAdd",
              names: [tt]
            } : {
              type: "whitelistRemove",
              name: tt
            }, `whitelist:${Ot}`))
          },
          qJ: async tt => {
            (0, qt.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const et = await Vt.send({
              type: "whitelistAdd",
              names: [tt]
            }, "whitelist-field");
            return et.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, Ft.jsx)(Zt.e, {
                text: et.message
              })
            }
          },
          statusOf: tt => Vt.statusOf(`whitelist:${tt.toLowerCase()}`)
        }), "public" === mt.visibility && null !== mt.listing && (0, Ft.jsx)(Ve, {
          manage: Vt,
          listing: mt.listing
        })]
      })
    }
    var je = Vt(5155),
      He = Vt(1464);
    const Xe = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const Qe = (0, Ot.memo)((function(tt) {
      var et;
      let {
        rule: Vt,
        value: Ot,
        status: qt,
        pending: Dt,
        hiddenNames: mt,
        nC: dt,
        onAction: jt
      } = tt;
      const {
        t: Ht
      } = (0, Et.H)(), Xt = tt => dt(Vt, tt), Qt = (tt, et) => {
        jt(Vt, tt, et)
      }, lt = It(Ht, Vt.label, mt), ft = Vt.info ? It(Ht, Vt.info, mt) : void 0, wt = Vt.placeholder ? It(Ht, Vt.placeholder, mt) : void 0, yt = (null !== (et = Vt.options) && void 0 !== et ? et : []).map((tt => ({
        value: tt.value,
        label: It(Ht, tt.label, mt)
      }))), Nt = Math.max(0, ...yt.map((tt => function(tt) {
        let et = 0;
        for (const Vt of tt) et += Xe.test(Vt) ? 2 : 1;
        return et
      }(tt.label)))), Mt = qt && (0, Ft.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, Ft.jsx)(kt, {
          status: qt
        })
      }), bt = (0, Ft.jsxs)("div", {
        className: "SliderText",
        children: [lt, void 0 !== ft && (0, Ft.jsx)(He.c, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: ft
        })]
      });
      return "toggle" === Vt.kind ? (0, Ft.jsxs)(Ft.Fragment, {
        children: [(0, Ft.jsx)(je.c, {
          label: lt,
          checked: !0 === Ot,
          circleInfoText: ft,
          disabled: Dt,
          onClick: Xt
        }), Mt]
      }) : "choice" === Vt.kind && yt.length <= 3 ? (0, Ft.jsxs)(Ft.Fragment, {
        children: [(0, Ft.jsx)(je.e, {
          label: lt,
          options: yt,
          value: String(Ot),
          circleInfoText: ft,
          onChange: Xt
        }), Mt]
      }) : (0, Ft.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [bt, "choice" === Vt.kind && (0, Ft.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": Nt
          },
          children: (0, Ft.jsx)(ct.e, {
            options: yt,
            value: String(Ot),
            disabled: Dt,
            onChange: tt => {
              Xt(tt.value)
            }
          })
        }), ("number" === Vt.kind || "text" === Vt.kind) && (0, Ft.jsx)(zt, {
          value: null === Ot ? "" : String(Ot),
          placeholder: wt,
          ariaLabel: lt,
          onSave: tt => {
            const et = tt.trim(),
              Ot = Number(et);
            return Xt("number" === Vt.kind && "" !== et && Number.isFinite(Ot) ? Ot : et)
          }
        }), "action" === Vt.kind && (0, Ft.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [yt.length > 3 && (0, Ft.jsx)(ct.e, {
            options: yt,
            value: {
              value: "",
              label: null !== wt && void 0 !== wt ? wt : lt
            },
            disabled: Dt,
            onChange: tt => {
              Qt(tt.value)
            }
          }), yt.length > 0 && yt.length <= 3 && yt.map((tt => (0, Ft.jsx)(Jt.g, {
            className: "SmallTextLight",
            disabled: Dt,
            onClick: () => {
              Qt(tt.value)
            },
            children: tt.label
          }, tt.value))), 0 === yt.length && (0, Ft.jsx)(Jt.g, {
            className: "SmallTextLight",
            disabled: Dt,
            onClick: () => {
              Qt()
            },
            children: null !== wt && void 0 !== wt ? wt : lt
          })]
        }), "names" === Vt.kind && (0, Ft.jsx)(le, {
          names: Array.isArray(Ot) ? Ot : [],
          pending: Dt,
          onAction: Qt
        }), Mt]
      })
    }));

    function le(tt) {
      let {
        names: et,
        pending: Vt,
        onAction: qt
      } = tt;
      const {
        t: Dt
      } = (0, Et.H)(), mt = (0, Ot.useRef)(null), [dt, jt] = (0, Ot.useState)(""), Ht = () => {
        const tt = dt.trim();
        "" !== tt && (qt(tt, "add"), mt.current && (mt.current.value = ""), jt(""))
      };
      return (0, Ft.jsxs)("div", {
        className: "LobbyManageNames",
        children: [et.map((tt => (0, Ft.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, Ft.jsx)("span", {
            className: "LobbyManageNameText",
            children: tt
          }), (0, Ft.jsx)(Jt.g, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: Dt("lobbyManage:removeName", {
              name: tt
            }),
            disabled: Vt,
            onClick: () => {
              qt(tt, "remove")
            },
            children: (0, Ft.jsx)(ft.b, {
              name: "xmark"
            })
          })]
        }, tt))), (0, Ft.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, Ft.jsx)(Lt.d, {
            domRef: mt,
            placeholderText: Dt("lobbyManage:namePlaceholder"),
            ariaLabel: Dt("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: tt => {
              jt(tt)
            },
            onEnter: Ht
          }), (0, Ft.jsx)(Jt.g, {
            className: "SmallTextLight",
            disabled: Vt || "" === dt.trim(),
            onClick: Ht,
            children: Dt("lobbyManage:addHere")
          })]
        })]
      })
    }
    const Ee = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function fe(tt, et) {
      return Ee.map((Vt => {
        let {
          group: Ot,
          title: qt
        } = Vt;
        const Dt = tt.filter((tt => tt.group === Ot && void 0 === tt.parent)).map((Vt => {
          const Ot = !0 === et(Vt) ? tt.filter((tt => tt.parent === Vt.key)) : [];
          return {
            rule: Vt,
            children: Ot
          }
        }));
        return {
          group: Ot,
          title: qt,
          items: Dt
        }
      }))
    }

    function we(tt) {
      return tt.flatMap((tt => {
        let {
          items: et
        } = tt;
        return et.flatMap((tt => {
          let {
            rule: et,
            children: Vt
          } = tt;
          return [et, ...Vt]
        }))
      }))
    }

    function ye(tt) {
      let {
        manage: et,
        rowsShown: Vt
      } = tt;
      const {
        t: Dt
      } = (0, Et.H)(), mt = (0, bt.h)("hiddenPlayerNames"), {
        rules: dt
      } = et.state, jt = Xt(), Ht = tt => {
        const et = jt.get(tt.key);
        return void 0 === et ? tt.value : et
      }, Qt = fe(dt, Ht), [lt] = (0, Ot.useState)((() => we(Qt).map((tt => tt.key)))), ft = Vt === 1 / 0 ? null : new Set(lt.slice(0, Vt)), wt = tt => null === ft || ft.has(tt.key), {
        hold: Nt
      } = jt, Mt = (0, Ot.useCallback)(((tt, Vt) => {
        (0, qt.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: tt.key
        });
        const Ot = et.send({
          type: "setRule",
          key: tt.key,
          value: Vt
        }, `rule:${tt.key}`);
        return Nt(tt.key, Vt, Ot), Ot
      }), [et, Nt]), Jt = (0, Ot.useCallback)(((tt, Vt, Ot) => {
        (0, qt.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: tt.key
        }), et.send({
          type: "ruleAction",
          key: tt.key,
          ...void 0 === Vt ? {} : {
            arg: Vt
          },
          ...void 0 === Ot ? {} : {
            op: Ot
          }
        }, `rule:${tt.key}`, void 0 === Ot ? Dt("lobbyManage:setJustNow") : void 0)
      }), [et, Dt]), Ct = tt => {
        const Vt = `rule:${tt.key}`;
        return (0, Ft.jsx)(Qe, {
          rule: tt,
          value: Ht(tt),
          status: et.statusOf(Vt),
          pending: et.isPending(Vt),
          hiddenNames: mt,
          nC: Mt,
          onAction: Jt
        }, tt.key)
      };
      return (0, Ft.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: Qt.map((tt => {
          let {
            group: et,
            title: Vt,
            items: qt
          } = tt;
          const mt = qt.filter((tt => {
            let {
              rule: et
            } = tt;
            return wt(et)
          }));
          return 0 === mt.length ? null : (0, Ft.jsxs)(Ot.Fragment, {
            children: [(0, Ft.jsx)(yt.d, {
              label: Dt(Vt)
            }), mt.map((tt => {
              let {
                rule: et,
                children: Vt
              } = tt;
              return 0 === Vt.length ? Ct(et) : (0, Ft.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [Ct(et), Vt.filter(wt).map(Ct)]
              }, et.key)
            }))]
          }, et)
        }))
      })
    }
    const Ne = {
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
      ae = 5,
      Me = (0, Ot.memo)((function(tt) {
        let {
          page: et,
          manage: Vt,
          leaderboard: qt,
          focusRequest: Dt,
          onFocused: mt,
          ruleRowsShown: dt
        } = tt;
        return "leaderboard" === et ? (0, Ft.jsx)(Ot.Suspense, {
          fallback: (0, Ft.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Ft.jsx)(wt.b, {})
          }),
          children: qt
        }) : "joining" === et ? (0, Ft.jsx)(qe, {
          manage: Vt
        }) : "rules" === et ? (0, Ft.jsx)(ye, {
          manage: Vt,
          rowsShown: dt
        }) : (0, Ft.jsx)(At, {
          manage: Vt,
          focusRequest: Dt,
          onFocused: mt
        })
      }));

    function be(tt) {
      let {
        page: et
      } = tt;
      const {
        t: Vt
      } = (0, Et.H)(), Ot = Ne[et];
      return (0, Ft.jsxs)(Ft.Fragment, {
        children: [(0, Ft.jsx)(ft.b, {
          name: Ot.icon
        }), " ", (0, Ft.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: Vt(Ot.title)
        })]
      })
    }

    function Je(tt) {
      var et;
      const {
        t: Vt
      } = (0, Et.H)(), {
        pages: Dt,
        landing: mt
      } = tt, jt = (0, Ot.useRef)(null), Ht = (0, Ot.useRef)(null), Xt = (0, Ot.useRef)(null), Qt = (0, Ot.useRef)(new Map), [ft, wt] = (0, Ot.useState)(null), bt = (0, Ot.useRef)(ft), Jt = (0, Ot.useRef)(0), [Ct, ut] = (0, Ot.useState)(Dt[0]), Kt = null !== ft && void 0 !== ft ? ft : Dt.includes(Ct) ? Ct : Dt[0], [ht] = (0, Ot.useState)(null !== (et = null === mt || void 0 === mt ? void 0 : mt.page) && void 0 !== et ? et : null), vt = null !== ht && Dt.includes(ht) ? [ht, ...Dt.filter((tt => tt !== ht))] : Dt, [Wt] = (0, Ot.useState)((() => {
        const et = we(fe(tt.manage.state.rules, (tt => tt.value)));
        return Math.max(1, Math.ceil(et.length / ae))
      })), St = vt.flatMap((tt => "rules" === tt ? Array(Wt).fill(tt) : [tt])), ct = function(tt, et) {
        const [Vt, qt] = (0, Ot.useState)(tt), Dt = Vt >= et;
        return Dt && Vt !== 1 / 0 && qt(1 / 0), (0, Ot.useLayoutEffect)((() => {
          if (Dt) return;
          let tt = !0;
          return (0, Mt.e)().then((() => {
            tt && qt((tt => tt + 1))
          })), () => {
            tt = !1
          }
        }), [Vt, Dt]), Dt ? 1 / 0 : Vt
      }(1, St.length), Rt = St.slice(0, ct), It = new Set(Rt), Pt = ct < St.length, Zt = Pt ? Rt.filter((tt => "rules" === tt)).length * ae : 1 / 0, Lt = (0, Ot.useRef)(tt.focusRequest);
      Lt.current = tt.focusRequest;
      const kt = tt => {
          bt.current = tt, wt(tt)
        },
        Gt = () => {
          var tt, et;
          jt.current.style.scrollPaddingTop = `${null!==(tt=null===(et=Xt.current)||void 0===et?void 0:et.offsetHeight)&&void 0!==tt?tt:0}px`
        },
        zt = tt => {
          const et = jt.current,
            Vt = Qt.current.get(tt);
          if (void 0 === Vt) return;
          const Ot = document.activeElement,
            qt = Lt.current,
            Dt = null === qt ? null : Vt.querySelector(`[data-lobby-manage-row="${CSS.escape(qt.name)}"]`);
          Gt(), Ot instanceof HTMLElement && null !== Dt && void 0 !== Dt && Dt.contains(Ot) ? Ot.scrollIntoView({
            block: "center"
          }) : null === Vt.previousElementSibling ? et.scrollTop = 0 : Vt.scrollIntoView({
            block: "start"
          }), Jt.current = et.scrollTop
        },
        ot = tt => {
          (0, qt.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: tt
          }), kt(tt), zt(tt)
        },
        rt = () => {
          var tt, et;
          const Vt = jt.current,
            Ot = Vt.getBoundingClientRect().top + (null !== (tt = null === (et = Xt.current) || void 0 === et ? void 0 : et.offsetHeight) && void 0 !== tt ? tt : 0),
            qt = Dt.map((tt => {
              var et, Vt;
              return (null !== (et = null === (Vt = Qt.current.get(tt)) || void 0 === Vt ? void 0 : Vt.getBoundingClientRect().top) && void 0 !== et ? et : 1 / 0) - Ot
            })),
            mt = !Pt && Vt.scrollTop + Vt.clientHeight >= Vt.scrollHeight - 1;
          ut(Dt[(0, dt.h)(qt, mt)])
        },
        Ut = () => {
          null !== bt.current && (kt(null), rt())
        };
      (0, Ot.useLayoutEffect)((() => {
        null !== mt && Dt.includes(mt.page) && ot(mt.page)
      }), [null === mt || void 0 === mt ? void 0 : mt.seq]), (0, Ot.useLayoutEffect)((() => {
        null === bt.current || Dt.includes(bt.current) || Ut()
      }));
      const {
        onFocused: At
      } = tt, it = (0, Ot.useCallback)((tt => {
        null !== bt.current && zt(bt.current), At(tt)
      }), [At]);
      (0, Ot.useLayoutEffect)((() => {
        const tt = bt.current;
        null !== tt && (!Pt || Dt.indexOf(St[ct - 1]) < Dt.indexOf(tt)) && zt(tt)
      }), [ct]), (0, Ot.useEffect)((() => {
        const tt = new ResizeObserver((() => {
          null !== bt.current ? zt(bt.current) : Gt()
        }));
        return tt.observe(jt.current), tt.observe(Ht.current), () => {
          tt.disconnect()
        }
      }), []), (0, Ot.useLayoutEffect)((() => {
        const tt = Xt.current,
          et = null === tt || void 0 === tt ? void 0 : tt.querySelector(".SegmentedToggleOptionSelected");
        et && (tt.scrollLeft = Math.min(et.offsetLeft, Math.max(tt.scrollLeft, et.offsetLeft + et.offsetWidth - tt.clientWidth)))
      }), [Kt]);
      return (0, Ft.jsxs)("div", {
        ref: jt,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === bt.current ? rt() : Math.abs(jt.current.scrollTop - Jt.current) > 1 && Ut()
        },
        onClick: tt => {
          var et;
          null !== (et = Xt.current) && void 0 !== et && et.contains(tt.target) || Ut()
        },
        onFocus: tt => {
          var et;
          const Vt = null === bt.current ? null : Qt.current.get(bt.current);
          !Vt || Vt.contains(tt.target) || null !== (et = Xt.current) && void 0 !== et && et.contains(tt.target) || Ut()
        },
        children: [Dt.length > 1 && (0, Ft.jsx)("div", {
          ref: Xt,
          className: "LobbyManageChips",
          children: (0, Ft.jsx)(Nt.c, {
            options: Dt.map((tt => ({
              value: tt,
              label: (0, Ft.jsx)(be, {
                page: tt
              }),
              ariaLabel: Vt(Ne[tt].title)
            }))),
            value: Kt,
            padTabs: "2",
            ariaLabel: Vt("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: ot
          })
        }), (0, Ft.jsx)("div", {
          ref: Ht,
          className: lt()("LobbyManageInner", {
            Staging: Pt
          }),
          children: Dt.filter((tt => It.has(tt))).map((et => {
            const Vt = et === ft;
            return (0, Ft.jsxs)("section", {
              ref: tt => {
                tt ? Qt.current.set(et, tt) : Qt.current.delete(et)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": Vt || void 0,
              children: [Dt.length > 1 && (0, Ft.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": Vt || void 0,
                "data-pad-unavailable": Vt || void 0,
                children: (0, Ft.jsx)(yt.d, {
                  label: (0, Ft.jsx)(be, {
                    page: et
                  })
                })
              }), (0, Ft.jsx)(Me, {
                page: et,
                manage: tt.manage,
                leaderboard: tt.leaderboard,
                focusRequest: tt.focusRequest,
                onFocused: it,
                ruleRowsShown: "rules" === et ? Zt : 1 / 0
              })]
            }, et)
          }))
        })]
      })
    }

    function Ce(tt) {
      return void 0 === (null === tt || void 0 === tt ? void 0 : tt.page) ? null : {
        page: tt.page,
        seq: tt.seq
      }
    }

    function ue(tt) {
      let {
        leaderboard: et
      } = tt;
      const Vt = function() {
          const tt = (0, jt.i)("lobbyManage"),
            [et, Vt] = (0, Ot.useReducer)((tt => tt + 1), 0),
            [qt] = (0, Ot.useState)((() => new Ht.d(Vt)));
          return (0, Ot.useEffect)((() => {
            const tt = qt.nextDeadline();
            if (null === tt) return;
            const et = setTimeout((() => {
              qt.expire(Date.now()), Vt()
            }), Math.max(0, tt - Date.now()));
            return () => {
              clearTimeout(et)
            }
          })), (0, Ot.useMemo)((() => null === tt ? null : {
            state: tt,
            send: (tt, et, Ot) => {
              const Dt = qt.send(tt, et, null !== Ot && void 0 !== Ot ? Ot : null);
              return Vt(), Dt
            },
            statusOf: tt => qt.statusOf(tt, Date.now()),
            showStatus: (tt, et) => {
              qt.show(tt, et)
            },
            isPending: tt => qt.isPending(tt)
          }), [tt, et, qt])
        }(),
        Xt = (0, dt.i)((0, Dt.c)()),
        Qt = (0, mt.l)(),
        [lt, Et] = (0, Ot.useState)((() => Ce(Qt))),
        [ft, wt] = (0, Ot.useState)(null);
      return (0, Ot.useEffect)((() => {
        null === Qt && (0, qt.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, Ot.useEffect)((() => {
        null !== Qt && (Et((tt => (null === tt || void 0 === tt ? void 0 : tt.seq) === Qt.seq ? tt : Ce(Qt))), void 0 !== Qt.focusName && "players" === Qt.page ? wt({
          name: Qt.focusName,
          seq: Qt.seq
        }) : (0, mt.k)(Qt.seq))
      }), [null === Qt || void 0 === Qt ? void 0 : Qt.seq]), null === Vt ? null : (0, Ft.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, Ft.jsx)(Je, {
          pages: (0, dt.d)(Vt.state, Xt),
          manage: Vt,
          leaderboard: et,
          focusRequest: ft,
          onFocused: mt.k,
          landing: lt
        })
      })
    }
  },
  36804: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Xt,
      h: () => jt
    });
    var Ot = Vt(1583),
      qt = Vt(2043),
      Dt = Vt(2024);
    const mt = 1e4;
    let dt = 0;

    function jt(tt) {
      const et = ++dt;
      return new Promise((Vt => {
        const dt = et => {
            jt(), clearTimeout(Ht), !1 === (null === et || void 0 === et ? void 0 : et.ok) && (0, Ot.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: tt.type
            }), Vt(et)
          },
          jt = qt.b.subscribe("lobbyManage", (tt => {
            const Vt = function(tt, et) {
              var Vt;
              return null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.results.find((tt => tt.requestId === et))) && void 0 !== Vt ? Vt : null
            }(tt, et);
            null !== Vt && dt(Vt)
          })),
          Ht = setTimeout((() => {
            dt(null)
          }), mt);
        Dt.gameBridge.send("lobbyManage", {
          ...tt,
          requestId: et
        })
      }))
    }
    const Ht = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class Xt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jt;
        this.onChange = tt, this.sendAction = et, this.pending = new Map, this.statuses = new Map
      }
      send(tt, et, Vt) {
        var Ot;
        return this.statuses.delete(et), this.pending.set(et, (null !== (Ot = this.pending.get(et)) && void 0 !== Ot ? Ot : 0) + 1), this.sendAction(tt).then((tt => {
          var Ot;
          const qt = null !== tt && void 0 !== tt ? tt : {
              requestId: -1,
              ok: !1,
              message: Ht
            },
            Dt = (null !== (Ot = this.pending.get(et)) && void 0 !== Ot ? Ot : 1) - 1;
          Dt > 0 ? this.pending.set(et, Dt) : this.pending.delete(et);
          const mt = !qt.ok || qt.message.length > 0 ? qt.message : null === Vt ? null : [Vt];
          return null !== mt && this.statuses.set(et, {
            ok: qt.ok,
            text: mt,
            until: Date.now() + 4e3
          }), this.onChange(), qt
        }))
      }
      show(tt, et) {
        this.statuses.set(tt, {
          ...et,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(tt) {
        for (const [et, Vt] of this.statuses) Vt.until <= tt && this.statuses.delete(et)
      }
      nextDeadline() {
        let tt = null;
        for (const Vt of this.statuses.values()) {
          var et;
          tt = Math.min(null !== (et = tt) && void 0 !== et ? et : 1 / 0, Vt.until)
        }
        return tt
      }
      statusOf(tt, et) {
        const Vt = this.statuses.get(tt);
        return !Vt || Vt.until <= et ? null : {
          ok: Vt.ok,
          text: Vt.text
        }
      }
      isPending(tt) {
        return this.pending.has(tt)
      }
    }
  },
  36799: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ht,
      e: () => jt
    });
    var Ot = Vt(697),
      qt = Vt(2024),
      Dt = Vt(1737),
      mt = Vt(106),
      dt = Vt(1354);

    function jt(tt, et, Vt) {
      return mt.featureFlags.useSocialFeatures && tt && null === (0, dt.e)(et, Vt)
    }

    function Ht(tt, et) {
      var Vt, mt;
      const dt = Dt.e.getSocialState().friends.find((tt => tt.name.toLowerCase() === et.toLowerCase())),
        jt = qt.gameBridge.latest("players").byId[tt],
        Ht = void 0 !== jt && jt.name === et,
        Xt = Ht && null !== (Vt = jt.cosmetics) && void 0 !== Vt ? Vt : void 0,
        Qt = dt && Xt ? {
          ...dt,
          cosmetics: Xt
        } : dt;
      return {
        playerSocialPreview: null !== Qt && void 0 !== Qt ? Qt : {
          isError: !1,
          name: et,
          ranks: Ht ? [...jt.ranks] : [],
          cosmetics: null !== Xt && void 0 !== Xt ? Xt : {},
          nameColour: null !== (mt = null === Xt || void 0 === Xt ? void 0 : Xt.nameColour) && void 0 !== mt ? mt : Ot.c,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== dt
      }
    }
  },
  36984: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Qt
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(1770),
      dt = Vt(1556),
      jt = Vt(1436),
      Ht = Vt(1152),
      Xt = Vt(1188);

    function Qt(tt) {
      let {
        label: et,
        icon: Vt,
        placeholder: qt,
        onSubmit: Qt
      } = tt;
      const lt = (0, Ot.useRef)(null),
        [Et, ft] = (0, Ot.useState)(""),
        [wt, yt] = (0, Ot.useState)("Enter"),
        [Nt, Mt] = (0, Ot.useState)(null);
      (0, Ot.useEffect)((() => {
        if ("Success" !== wt && "Error" !== wt) return;
        const tt = setTimeout((() => {
          "Success" === wt && lt.current && (lt.current.value = "", ft("")), yt("Enter")
        }), "Success" === wt ? 1e3 : 4e3);
        return () => {
          clearTimeout(tt)
        }
      }), [wt]);
      const bt = () => {
        const tt = Et.trim();
        "" !== tt && "Enter" === wt && (yt("Loading"), Qt(tt).then((tt => {
          lt.current && ("error" in tt ? null === tt.error ? yt("Enter") : (Mt(tt.error), yt("Error")) : yt("Success"))
        })))
      };
      return (0, Xt.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: tt => {
          tt.target === lt.current && "Escape" !== tt.key && tt.stopPropagation()
        },
        children: [(0, Xt.jsxs)("div", {
          className: Dt()("AddFriendBodyOverlay", `AddFriendBodyOverlay${wt}`),
          children: ["Loading" === wt && (0, Xt.jsx)(jt.b, {}), "Success" === wt && (0, Xt.jsx)(Ht.b, {
            name: "check"
          }), "Error" === wt && Nt]
        }), (0, Xt.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, Xt.jsx)(mt.d, {
            className: "PlayerSearchInput",
            domRef: lt,
            maxLength: 32,
            placeholderText: qt,
            ariaLabel: qt,
            stopPropagation: !1,
            onValueChange: tt => {
              ft(tt)
            },
            onEnter: bt
          }), (0, Xt.jsxs)(dt.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== wt || "" === Et.trim(),
            onClick: bt,
            children: [(0, Xt.jsx)(Ht.b, {
              name: Vt
            }), " ", et]
          })]
        })]
      })
    }
  },
  36973: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Qt
    });
    var Ot = Vt(63),
      qt = Vt(1140),
      Dt = Vt.n(qt),
      mt = Vt(1286),
      dt = Vt(1152),
      jt = Vt(1188);
    const Ht = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Xt = ["unlisted", "public", "whitelist", "private"];

    function Qt(tt) {
      let {
        visibility: et,
        onPick: Vt
      } = tt;
      const {
        t: qt
      } = (0, mt.H)(), Qt = (0, Ot.useRef)([]);
      return (0, jt.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": qt("worldSocial:whoCanJoin"),
        children: Xt.map(((tt, Ot) => {
          const mt = tt === et;
          return (0, jt.jsxs)("button", {
            ref: tt => {
              Qt.current[Ot] = tt
            },
            type: "button",
            className: Dt()("WorldSocialTile", {
              WorldSocialTileSelected: mt
            }),
            "aria-pressed": mt,
            tabIndex: mt ? 0 : -1,
            onKeyDown: tt => {
              ((tt, et) => {
                const Vt = "ArrowRight" === tt.key || "ArrowDown" === tt.key ? 1 : "ArrowLeft" === tt.key || "ArrowUp" === tt.key ? -1 : 0;
                var Ot;
                0 !== Vt && (tt.preventDefault(), null === (Ot = Qt.current[(et + Vt + Xt.length) % Xt.length]) || void 0 === Ot || Ot.focus())
              })(tt, Ot)
            },
            onClick: () => {
              Vt(tt)
            },
            children: [(0, jt.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, jt.jsx)(dt.b, {
                name: Ht[tt]
              })
            }), (0, jt.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, jt.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: qt(`worldSocial:${tt}`)
              }), (0, jt.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: qt(`worldSocial:${tt}Description`)
              })]
            })]
          }, tt)
        }))
      })
    }
  },
  36982: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt
    });
    var Ot = Vt(1286),
      qt = Vt(2742),
      Dt = Vt(4475),
      mt = Vt(1188);

    function dt(tt) {
      let {
        BQ: et,
        children: Vt,
        ...dt
      } = tt;
      const {
        t: jt
      } = (0, Ot.H)();
      return (0, mt.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          et.onChange(!et.on)
        },
        children: (0, mt.jsx)(qt.f, {
          ...dt,
          opensProfileCard: !1,
          children: (0, mt.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: tt => {
              tt.stopPropagation()
            },
            children: [Vt, (0, mt.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, mt.jsx)(Dt.b, {
                checked: et.on,
                disabled: !1,
                ariaLabel: jt("worldSocial:letJoin", {
                  playerName: dt.playerSocialPreview.name
                }),
                onChange: tt => {
                  et.onChange(tt.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36967: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => ft
    });
    var Ot = Vt(63),
      qt = Vt(1286),
      Dt = Vt(1950),
      mt = Vt(106),
      dt = Vt(26),
      jt = Vt(1583),
      Ht = Vt(2755),
      Xt = Vt(34278),
      Qt = Vt(1556),
      lt = Vt(1152),
      Et = Vt(1188);

    function ft(tt) {
      let {
        worldCode: et,
        message: Vt
      } = tt;
      const {
        t: ft
      } = (0, qt.H)(), {
        isTouchScreen: wt
      } = (0, dt.k)(["isTouchScreen"]), yt = mt.featureFlags.canUseInviteLinks, Nt = (0, Xt.k)(yt && null === Vt), [Mt, bt] = (0, Ht.k)(), Jt = (0, Ot.useRef)(null);
      if (null !== Vt) return (0, Et.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Et.jsx)(lt.b, {
          name: "lock"
        }), (0, Et.jsx)("span", {
          children: Vt
        })]
      });
      const Ct = yt ? Nt : et,
        ut = wt && yt && (0, Ht.e)();
      return (0, Et.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!yt && (0, Et.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: ft("worldSocial:worldCode")
        }), (0, Et.jsx)("input", {
          ref: Jt,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Ct && void 0 !== Ct ? Ct : "",
          "aria-label": ft(yt ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: tt => {
            tt.currentTarget.select()
          }
        }), (0, Et.jsxs)(Qt.f, {
          className: "WorldSocialCopy",
          disabled: null === Ct,
          onClick: () => {
            null !== Ct && (0, Ht.h)(Ct, {
              useShareSheet: ut,
              onOutcome: tt => {
                if ((0, jt.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== tt || yt ? tt : "code"
                  }), "copied" === tt) bt();
                else if ("failed" === tt) {
                  var et;
                  null === (et = Jt.current) || void 0 === et || et.focus(), Dt.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Et.jsx)(lt.b, {
            name: Mt ? "check" : ut ? "up-from-bracket" : "copy"
          }), " ", ft(Mt ? "general:copied" : ut ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36978: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Et,
      f: () => lt,
      j: () => Qt
    });
    var Ot = Vt(697),
      qt = Vt(1286),
      Dt = Vt(1737),
      mt = Vt(2742),
      dt = Vt(2693),
      jt = Vt(1556),
      Ht = Vt(36982),
      Xt = Vt(1188);

    function Qt(tt, et) {
      var Vt;
      return {
        isError: !1,
        name: tt,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== et && void 0 !== et ? et : {},
        nameColour: null !== (Vt = null === et || void 0 === et ? void 0 : et.nameColour) && void 0 !== Vt ? Vt : Ot.c,
        location: {
          status: "offline"
        }
      }
    }

    function lt(tt) {
      let {
        player: et,
        isFriend: Vt = !1,
        status: Ot,
        showLocation: jt = void 0 === Ot,
        BQ: Qt,
        onSendFriendRequest: lt,
        actions: Et,
        zIndex: ft
      } = tt;
      const {
        t: wt
      } = (0, qt.H)();
      let yt = Ot;
      null !== Qt && void 0 !== Qt && Qt.on && (yt = (0, Xt.jsxs)(Xt.Fragment, {
        children: [null !== Ot && void 0 !== Ot ? Ot : (0, Xt.jsx)(dt.e, {
          socialPreview: et
        }), (0, Xt.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", wt("worldSocial:canJoin")]
        })]
      }));
      const Nt = {
        playerSocialPreview: et,
        isFriend: Vt,
        hideFriendBadge: !0,
        onFriendRemoved: Vt ? tt => {
          Dt.e.removeFriendFromState(tt)
        } : void 0,
        status: yt,
        showLocation: jt,
        onSendFriendRequest: lt,
        zIndex: ft
      };
      return Qt ? (0, Xt.jsx)(Ht.c, {
        ...Nt,
        BQ: Qt,
        children: Et
      }) : (0, Xt.jsx)(mt.f, {
        ...Nt,
        opensProfileCard: !1,
        children: Et || void 0
      })
    }

    function Et(tt) {
      let {
        row: et,
        BQ: Vt,
        canInvite: Ot,
        invited: Dt,
        onInvite: mt,
        zIndex: dt
      } = tt;
      const {
        t: Ht
      } = (0, qt.H)(), Qt = "online" === et.place ? jt.f : jt.g;
      return (0, Xt.jsx)(lt, {
        player: et.friend,
        isFriend: !0,
        status: "here" === et.place ? Ht("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        BQ: Vt,
        zIndex: dt,
        actions: Ot && (0, Xt.jsx)(Qt, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Dt,
          onClick: mt,
          ariaLabel: `${Ht("worldSocial:invite")} ${et.friend.name}`,
          children: Ht(Dt ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36954: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      e: () => mt,
      f: () => Ht
    });
    var Ot = Vt(63),
      qt = Vt(4725),
      Dt = Vt(1950);

    function mt(tt) {
      const et = {
        lobbyName: tt,
        answer: null,
        response: qt.e.getSocialSettings(tt)
      };
      return et.response.then((tt => {
        et.answer = tt
      })), et
    }
    const dt = new Map;

    function jt(tt) {
      dt.set(tt.lobbyName, tt)
    }

    function Ht(tt) {
      const [et] = (0, Ot.useState)((() => function(tt) {
        var et;
        const Vt = null !== (et = dt.get(tt)) && void 0 !== et ? et : null;
        return null !== Vt && void 0 !== Vt && Vt.answer && "error" in Vt.answer ? null : Vt
      }(tt))), [Vt, mt] = (0, Ot.useState)((() => null !== et && void 0 !== et && et.answer && "settings" in et.answer ? et.answer.settings : null)), [jt, Ht] = (0, Ot.useState)(!0), [Xt, Qt] = (0, Ot.useState)(null !== Vt), lt = (0, Ot.useRef)(Vt);
      lt.current = Vt;
      const Et = (0, Ot.useRef)(0),
        ft = (0, Ot.useRef)(0),
        wt = (0, Ot.useRef)(!1),
        yt = (0, Ot.useRef)(!0),
        Nt = (0, Ot.useCallback)((async et => {
          const Vt = ++Et.current,
            Ot = await (null !== et && void 0 !== et ? et : qt.e.getSocialSettings(tt));
          yt.current && Vt === Et.current && (Qt(!0), Ht(!1), "error" in Ot || mt(Ot.settings))
        }), [tt]),
        Mt = (0, Ot.useCallback)((() => {
          Ht(!0), Nt()
        }), [Nt]),
        bt = (0, Ot.useCallback)((() => {
          ft.current > 0 ? wt.current = !0 : Nt()
        }), [Nt]);
      (0, Ot.useEffect)((() => (yt.current = !0, dt.delete(tt), Ht(!0), Nt(null === et || void 0 === et ? void 0 : et.response), () => {
        yt.current = !1
      })), [Nt, tt, et]);
      const Jt = tt => {
        Et.current++, Ht(!1), lt.current = tt, mt(tt)
      };
      return {
        settings: Vt,
        loading: jt,
        answered: Xt,
        retry: Mt,
        refresh: bt,
        change: async function(et, Vt) {
          let {
            quiet: Ot = !1,
            onAnswer: mt
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const dt = lt.current;
          if (null === dt) return !1;
          Jt(Vt(dt)), ft.current > 0 && (wt.current = !0), ft.current++;
          const jt = await qt.e.setSocialSettings(tt, et);
          ft.current--;
          const Ht = !("error" in jt);
          if (!yt.current) return Ht;
          if (null === mt || void 0 === mt || mt(jt), Ot);
          else if ("error" in jt) Dt.f.showMessage({
            translationKey: jt.error
          });
          else
            for (const tt of jt.notFound) Dt.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: tt
              }
            });
          if (ft.current > 0) return Ht;
          const Xt = wt.current;
          return wt.current = !1, !Xt && "settings" in jt ? Jt(jt.settings) : (Xt || Jt(dt), Nt()), Ht
        }
      }
    }
  },
  36988: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => mt,
      i: () => Dt
    });
    var Ot = Vt(184);
    const qt = new Map;

    function Dt(tt, et) {
      var Vt;
      const Ot = null !== (Vt = qt.get(tt)) && void 0 !== Vt ? Vt : new Map;
      Ot.set(et, Date.now()), qt.set(tt, Ot)
    }

    function mt(tt) {
      const et = qt.get(tt);
      if (!et) return [];
      const Vt = Date.now();
      for (const [qt, Dt] of et) Vt - Dt >= Ot.o && et.delete(qt);
      return [...et.keys()]
    }
  },
  36959: (tt, et, Vt) => {
    function Ot(tt, et) {
      const Vt = et.toLowerCase();
      for (const Ot of tt)
        if (Ot.toLowerCase() === Vt) return !0;
      return !1
    }

    function qt(tt, et, Vt) {
      const qt = [],
        Dt = [],
        mt = [];
      for (const dt of tt) !dt.isError && dt.name && ("inGame" === dt.location.status && dt.location.inLobbyName === et || Ot(Vt, dt.name) ? Dt.push({
        friend: dt,
        place: "here"
      }) : "offline" === dt.location.status ? mt.push({
        friend: dt,
        place: "offline"
      }) : qt.push({
        friend: dt,
        place: "online"
      }));
      return [...qt, ...Dt, ...mt]
    }

    function Dt(tt, et, Vt) {
      const qt = [],
        Dt = tt.flatMap((tt => "here" === tt.place ? [tt.friend.name] : []));
      for (const mt of [...Dt, ...et]) Ot(qt, mt) || Ot(Vt, mt) || qt.push(mt);
      return qt
    }

    function mt(tt, et) {
      return null === tt || void 0 === tt || !tt.canManage || Ot(tt.whitelist, et) ? "none" : "whitelist" === tt.visibility ? "required" : "quiet"
    }

    function dt(tt) {
      if (null === tt) return !0;
      const {
        visibility: et
      } = tt;
      return "public" === et || "unlisted" === et || "whitelist" === et && tt.canManage
    }

    function jt(tt, et, Vt) {
      if (Vt) {
        const Vt = et.filter((et => !Ot(tt.whitelist, et)));
        return {
          ...tt,
          whitelist: [...tt.whitelist, ...Vt]
        }
      }
      return {
        ...tt,
        whitelist: tt.whitelist.filter((tt => !Ot(et, tt)))
      }
    }

    function Ht(tt, et) {
      const Vt = [];
      for (let Ot = 0; Ot < tt.length; Ot += et) Vt.push(tt.slice(Ot, Ot + et));
      return Vt
    }
    Vt.d(et, {
      b: () => dt,
      e: () => Dt,
      f: () => qt,
      j: () => Ot,
      m: () => Ht,
      o: () => mt,
      r: () => jt
    })
  },
  37252: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt
    });
    var Ot = Vt(63),
      qt = Vt(2498);

    function Dt() {
      const tt = (0, qt.i)("lobbyLeaderboardInfo");
      return (0, Ot.useMemo)((() => function(tt) {
        if (null === tt) return null;
        const et = Object.entries(tt),
          Vt = et.filter((tt => {
            let [, et] = tt;
            return void 0 !== et
          }));
        if (Vt.length === et.length) return tt;
        const Ot = Object.fromEntries(Vt),
          qt = Object.keys(tt).filter((tt => !Object.hasOwn(Ot, tt)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${qt.join(", ")}`), Ot
      }(tt)), [tt])
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);