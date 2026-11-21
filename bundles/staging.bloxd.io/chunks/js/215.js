export const id = 215;
export const ids = [215];
export const modules = {
  41067: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      LobbyManageView: () => xJ
    });
    var pd = kd(56),
      Nd = kd(1492),
      Wd = kd(2357),
      Pd = kd(2372),
      Zd = kd(2376),
      gd = kd(36733);

    function Cd() {
      const [dd, Jd] = (0, pd.useState)(new Map);
      return {
        get: Jd => dd.get(Jd),
        hold: (0, pd.useCallback)(((dd, kd, pd) => {
          Jd((Jd => new Map(Jd).set(dd, kd))), pd.then((() => {
            Jd((Jd => {
              const kd = new Map(Jd);
              return kd.delete(dd), kd
            }))
          }))
        }), [])
      }
    }
    var Kd = kd(1044),
      od = kd.n(Kd),
      ld = kd(1211),
      Qd = kd(1059),
      Ld = kd(1359),
      Od = kd(2530),
      ed = kd(4904),
      Rd = kd(3451);
    var Id = kd(1968),
      Gd = kd(1461);

    function vd(dd, Jd, kd) {
      const pd = dd.filter((dd => dd.name !== Jd)),
        Nd = pd.filter((dd => "none" === dd.role)).sort(((dd, Jd) => Jd.at - dd.at)),
        Wd = pd.filter((dd => "none" !== dd.role)).sort(((dd, Jd) => kd.indexOf(dd.role) - kd.indexOf(Jd.role) || Jd.at - dd.at));
      return [...dd.some((dd => dd.name === Jd)) && null !== Jd ? [Jd] : [], ...[...Nd, ...Wd].map((dd => dd.name))]
    }

    function xd(dd, Jd) {
      const kd = dd.banned.map((dd => dd.name)),
        pd = new Set(kd);
      return {
        here: vd(dd.here, Jd, dd.roles.map((dd => dd.role))),
        away: dd.away.filter((dd => !pd.has(dd.name))).map((dd => dd.name)),
        banned: kd
      }
    }

    function qd(dd, Jd) {
      const kd = dd.here.find((dd => dd.name === Jd));
      if (kd) return {
        section: "here",
        player: kd
      };
      const pd = dd.banned.find((dd => dd.name === Jd));
      if (pd) return {
        section: "banned",
        bannedAt: pd.at
      };
      const Nd = dd.away.find((dd => dd.name === Jd));
      return Nd ? {
        section: "away",
        player: Nd
      } : {
        section: "gone"
      }
    }
    const Bd = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var sd = kd(2525),
      ad = kd(36720),
      Md = kd(36896),
      Fd = kd(2999),
      Yd = kd(313);

    function md(dd, Jd, kd) {
      return Jd.map((Jd => {
        if ("string" === typeof Jd) return Jd;
        const pd = "str" in Jd ? Jd.str : Jd;
        return "string" === typeof pd ? pd : "entityName" in pd ? pd.entityName : "translationKey" in pd ? dd(pd.translationKey, (0, ld.r)(pd.params, kd)) : ""
      })).join("")
    }

    function bd(dd, Jd, kd, pd, Nd) {
      return Nd - pd < 6e4 ? dd(`${kd}JustNow`) : dd(kd, {
        time: (0, Yd.ib)((0, ld.n)(Jd, kd), pd, Nd)
      })
    }
    var Sd = kd(1904),
      jd = kd(1714),
      Xd = kd(1103);

    function fd(dd) {
      let {
        status: Jd
      } = dd;
      return (0, Xd.jsx)("span", {
        className: od()("LobbyManageStatus", {
          LobbyManageStatusRefused: !Jd.ok
        }),
        children: (0, Xd.jsx)(Sd.c, {
          text: Jd.text
        })
      })
    }

    function nd(dd) {
      let {
        names: Jd,
        cap: kd,
        filterFrom: Nd,
        moreLabel: Wd,
        reveal: Pd = null,
        renderRow: Zd
      } = dd;
      const {
        t: gd
      } = (0, ld.B)(), [Cd, Kd] = (0, pd.useState)(!1), [od, Ld] = (0, pd.useState)(""), ed = Cd || null !== Pd && Jd.indexOf(Pd) >= kd, Rd = (ed || Jd.length <= kd) && null !== Nd && Jd.length > Nd, Id = od.trim().toLowerCase();
      let Gd = ed ? Jd : Jd.slice(0, kd);
      return Rd && "" !== Id && (Gd = Gd.filter((dd => dd.toLowerCase().includes(Id)))), (0, Xd.jsxs)(Xd.Fragment, {
        children: [Rd && (0, Xd.jsx)(jd.e, {
          className: "LobbyManageFilter",
          placeholderText: gd("lobbyManage:findName"),
          ariaLabel: gd("lobbyManage:findName"),
          onValueChange: dd => {
            Ld(dd)
          }
        }), Gd.length > 0 && (0, Xd.jsx)("div", {
          className: "PlayerRows",
          children: Gd.map(((dd, Jd) => Zd(dd, Gd.length - Jd)))
        }), !ed && Jd.length > kd && (0, Xd.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, Xd.jsx)(Od.c, {
            label: (0, Xd.jsxs)(Xd.Fragment, {
              children: [Wd, " ", (0, Xd.jsx)(Qd.e, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              Kd(!0)
            }
          })
        })]
      })
    }

    function Ud(dd) {
      let {
        value: Jd,
        placeholder: kd,
        ariaLabel: Nd,
        maxLength: Wd,
        wide: Pd = !1,
        onSave: Zd
      } = dd;
      const gd = (0, pd.useRef)(null),
        [Cd, Kd] = (0, pd.useState)(0),
        ld = (0, pd.useRef)(!0),
        Qd = (0, pd.useRef)(null),
        Ld = (0, pd.useRef)({
          value: Jd,
          onSave: Zd
        });
      Ld.current = {
        value: Jd,
        onSave: Zd
      };
      const Od = () => {
        const dd = Qd.current;
        Qd.current = null, null !== dd && dd !== Ld.current.value && Ld.current.onSave(dd).then((() => {
          ld.current && Kd((dd => dd + 1))
        }))
      };
      return (0, pd.useEffect)((() => {
        null === Qd.current && gd.current && (gd.current.value = Jd)
      }), [Jd, Cd]), (0, pd.useEffect)((() => () => {
        ld.current = !1, Od()
      }), []), (0, Xd.jsx)("div", {
        className: od()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: Pd
        }),
        onBlur: Od,
        children: (0, Xd.jsx)(jd.e, {
          domRef: gd,
          defaultValue: Jd,
          placeholderText: kd,
          ariaLabel: Nd,
          maxLength: Wd,
          onValueChange: dd => {
            Qd.current = dd
          },
          onEnter: Od
        })
      })
    }
    const yd = ["mod", "coOwner"],
      Dd = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function Td(dd) {
      var Jd, kd, Wd;
      let {
        name: Pd,
        place: Zd,
        openedIn: gd,
        isYou: Kd,
        manage: od,
        hiddenNames: Ld,
        zIndex: Od
      } = dd;
      const {
        t: ed,
        selectedLanguage: Rd
      } = (0, ld.B)(), [Id, vd] = (0, pd.useState)(null), {
        state: xd
      } = od, qd = `player:${Pd}`, Yd = function(dd, Jd) {
        if ("banned" === dd.section) return {
          ...Bd,
          unban: !0
        };
        if ("gone" === dd.section) return Bd;
        const {
          player: kd
        } = dd, pd = "here" === dd.section, Nd = pd || "none" !== kd.role ? kd.can.roles : [];
        return {
          gamemode: pd && Jd && null !== kd.gamemode && kd.can.gamemode,
          roles: Nd,
          fixedRole: 0 === Nd.length && "none" !== kd.role ? kd.role : null,
          kick: pd && kd.can.kick,
          ban: kd.can.ban,
          unban: !1
        }
      }(Zd, null !== xd.gamemodes), Sd = od.statusOf(qd), jd = od.isPending(qd), nd = Cd(), Ud = Date.now(), Td = dd => {
        var Jd, kd;
        return null !== (Jd = null === (kd = (dd => xd.roles.find((Jd => Jd.role === dd)))(dd)) || void 0 === kd ? void 0 : kd.label) && void 0 !== Jd ? Jd : dd
      }, Ed = dd => {
        const Jd = Dd[dd];
        return void 0 === Jd ? void 0 : ed(Jd)
      }, cd = "here" === Zd.section || "away" === Zd.section ? Zd.player : null, hd = "here" === Zd.section ? Zd.player.id : null, {
        playerSocialPreview: rd,
        isFriend: ud
      } = null === hd ? {
        playerSocialPreview: (0, Md.h)(Pd, null),
        isFriend: !1
      } : (0, ad.c)(hd, Pd), td = function() {
        od.send(...arguments)
      }, Vd = (dd, Jd) => {
        nd.hold("role", dd, od.send({
          type: "setRole",
          name: Pd,
          role: dd
        }, qd, Jd))
      };
      let zd = null;
      if ("ban" === (null === Id || void 0 === Id ? void 0 : Id.kind)) zd = ed("lobbyManageEntry:banConfirm", {
        playerName: Pd
      });
      else if ("role" === (null === Id || void 0 === Id ? void 0 : Id.kind)) {
        var Hd;
        zd = `${ed("lobbyManage:roleConfirm",{playerName:Pd,role:Td(Id.role)})} ${null!==(Hd=Ed(Id.role))&&void 0!==Hd?Hd:""}`
      } else if (Sd) zd = (0, Xd.jsx)(fd, {
        status: Sd
      });
      else if (Kd) zd = ed("lobbyManage:you");
      else if ("here" === Zd.section) "none" === Zd.player.role && Ud - Zd.player.at < 6e5 && (zd = bd(ed, Rd.code, "lobbyManage:joinedAgo", Zd.player.at, Ud));
      else if ("away" === Zd.section) {
        if (Zd.player.at > 0) {
          const dd = "kicked" === Zd.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          zd = bd(ed, Rd.code, dd, Zd.player.at, Ud)
        }
      } else "banned" === Zd.section ? null !== Zd.bannedAt && (zd = bd(ed, Rd.code, "lobbyManage:bannedAgo", Zd.bannedAt, Ud)) : "banned" === gd && (zd = ed("lobbyManageEntry:unbanned"));
      return (0, Xd.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": Pd,
        children: (0, Xd.jsxs)(sd.d, {
          playerSocialPreview: rd,
          isFriend: ud,
          status: zd,
          opensProfileCard: !Kd && (0, ad.g)(!0, Pd, Ld),
          zIndex: Od,
          children: [null !== Id && (0, Xd.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === Id.kind && (0, Xd.jsxs)(Gd.B, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                vd(null), td({
                  type: "ban",
                  name: Pd
                }, qd)
              },
              children: [(0, Xd.jsx)(Qd.e, {
                name: "gavel"
              }), (0, Xd.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: ed("lobbyManageEntry:ban")
              })]
            }), "role" === Id.kind && (0, Xd.jsx)(Gd.d, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: Id.role
              },
              onClick: () => {
                vd(null), Vd(Id.role)
              },
              children: ed("lobbyManage:makeRole", {
                role: Td(Id.role)
              })
            }), (0, Xd.jsx)(Gd.f, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                vd(null)
              },
              children: ed("general:cancel")
            })]
          }), null === Id && (0, Xd.jsxs)(Xd.Fragment, {
            children: [(0, Xd.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [Yd.gamemode && null !== cd && (0, Xd.jsx)(Fd.c, {
                options: (null !== (Jd = xd.gamemodes) && void 0 !== Jd ? Jd : []).map((dd => ({
                  value: dd.value,
                  label: md(ed, dd.label, Ld)
                }))),
                value: null !== (kd = nd.get("gamemode")) && void 0 !== kd ? kd : cd.gamemode,
                disabled: jd,
                onChange: dd => {
                  (0, Nd.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: dd.value
                  }), nd.hold("gamemode", dd.value, od.send({
                    type: "setGamemode",
                    name: Pd,
                    gamemode: dd.value
                  }, qd))
                }
              }), Yd.roles.length > 0 && null !== cd && (0, Xd.jsx)(Fd.c, {
                options: [...xd.roles].reverse().filter((dd => Yd.roles.includes(dd.role))).map((dd => ({
                  value: dd.role,
                  label: dd.label
                }))),
                value: null !== (Wd = nd.get("role")) && void 0 !== Wd ? Wd : cd.role,
                disabled: jd,
                onChange: dd => {
                  var Jd;
                  (Jd = dd.value) !== (null === cd || void 0 === cd ? void 0 : cd.role) && (yd.includes(Jd) ? vd({
                    kind: "role",
                    role: Jd
                  }) : ((0, Nd.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: Jd
                  }), Vd(Jd, Ed(Jd))))
                }
              }), null !== Yd.fixedRole && (0, Xd.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: Td(Yd.fixedRole)
              })]
            }), (0, Xd.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [Yd.kick && (0, Xd.jsxs)(Gd.f, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${ed("lobbyManageEntry:kick")} ${Pd}`,
                disabled: jd,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  td({
                    type: "kick",
                    name: Pd
                  }, qd)
                },
                children: [(0, Xd.jsx)(Qd.e, {
                  name: "person-falling-burst"
                }), (0, Xd.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: ed("lobbyManageEntry:kick")
                })]
              }), Yd.ban && (0, Xd.jsxs)(Gd.E, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${ed("lobbyManageEntry:ban")} ${Pd}`,
                disabled: jd,
                padDestructive: !0,
                onClick: () => {
                  vd({
                    kind: "ban"
                  })
                },
                children: [(0, Xd.jsx)(Qd.e, {
                  name: "gavel"
                }), (0, Xd.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: ed("lobbyManageEntry:ban")
                })]
              }), Yd.unban && (0, Xd.jsxs)(Gd.f, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${ed("lobbyManageEntry:unban")} ${Pd}`,
                disabled: jd,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  td({
                    type: "unban",
                    name: Pd
                  }, qd)
                },
                children: [(0, Xd.jsx)(Qd.e, {
                  name: "user-unlock"
                }), (0, Xd.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: ed("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function Ed(dd) {
      var Jd, kd, Nd, Wd;
      let {
        manage: Pd,
        focusRequest: Zd,
        onFocused: gd
      } = dd;
      const {
        t: Cd
      } = (0, ld.B)(), Kd = (0, Id.k)("players"), od = (0, Id.k)("hiddenPlayerNames"), Ld = (0, pd.useRef)(null), {
        state: ed
      } = Pd, Rd = null === Kd.localId ? null : null !== (Jd = null === (kd = Kd.byId[Kd.localId]) || void 0 === kd ? void 0 : kd.name) && void 0 !== Jd ? Jd : null, [vd] = (0, pd.useState)((() => xd(ed, Rd))), Bd = function(dd, Jd, kd) {
        const pd = new Set([...dd.here, ...dd.away, ...dd.banned]),
          Nd = xd(Jd, kd),
          Wd = Jd => {
            const kd = Nd[Jd].filter((dd => !pd.has(dd)));
            for (const dd of kd) pd.add(dd);
            return [...dd[Jd], ...kd]
          };
        return {
          here: Wd("here"),
          away: Wd("away"),
          banned: Wd("banned")
        }
      }(vd, ed, Rd), [sd, ad] = (0, pd.useState)(!1), Md = function(dd, Jd) {
        return dd.here.filter((dd => dd.name !== Jd && "none" === dd.role && dd.can.kick)).length
      }(ed, Rd), Fd = Pd.statusOf("kickAll");
      (0, pd.useEffect)((() => {
        var dd, Jd;
        if (null === Zd) return;
        const kd = null === (dd = Ld.current) || void 0 === dd ? void 0 : dd.querySelector(`[data-lobby-manage-row="${CSS.escape(Zd.name)}"]`);
        null === kd || void 0 === kd || kd.scrollIntoView({
          block: "center"
        }), null === kd || void 0 === kd || null === (Jd = kd.querySelector(".ProfilePreview")) || void 0 === Jd || Jd.focus({
          preventScroll: !0
        }), gd(Zd.seq)
      }), [null === Zd || void 0 === Zd ? void 0 : Zd.seq]);
      const Yd = dd => (Jd, kd) => (0, Xd.jsx)(Td, {
        name: Jd,
        place: qd(ed, Jd),
        openedIn: dd,
        isYou: Jd === Rd,
        manage: Pd,
        hiddenNames: od,
        zIndex: kd
      }, Jd);
      return (0, Xd.jsxs)("div", {
        ref: Ld,
        className: "LobbyManagePage",
        children: [Bd.here.length > 0 && (0, Xd.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Xd.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, Xd.jsx)(Od.c, {
              label: Cd("lobbyManage:here"),
              meta: ed.here.length
            }), Md >= 2 && !sd && (0, Xd.jsxs)(Gd.E, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: Pd.isPending("kickAll"),
              onClick: () => {
                ad(!0)
              },
              children: [(0, Xd.jsx)(Qd.e, {
                name: "person-falling-burst"
              }), " ", Cd("lobbyManage:kickAll")]
            })]
          }), sd && Md >= 2 && (0, Xd.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, Xd.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: Cd("lobbyManage:kickAllConfirm", {
                count: Md
              })
            }), (0, Xd.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, Xd.jsx)(Gd.B, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  ad(!1), Pd.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: Cd("lobbyManage:kickAll")
              }), (0, Xd.jsx)(Gd.f, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  ad(!1)
                },
                children: Cd("general:cancel")
              })]
            })]
          }), Fd && (0, Xd.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, Xd.jsx)(fd, {
              status: Fd
            })
          }), (0, Xd.jsx)(nd, {
            names: Bd.here,
            cap: Bd.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: Yd("here")
          })]
        }), Bd.away.length > 0 && (0, Xd.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Xd.jsx)(Od.c, {
            label: Cd("lobbyManage:notHere"),
            meta: Bd.away.length
          }), (0, Xd.jsx)(nd, {
            names: Bd.away,
            cap: 5,
            filterFrom: null,
            moreLabel: Cd("lobbyManage:allCount", {
              count: Bd.away.length
            }),
            reveal: null !== (Nd = null === Zd || void 0 === Zd ? void 0 : Zd.name) && void 0 !== Nd ? Nd : null,
            renderRow: Yd("away")
          })]
        }), Bd.banned.length > 0 && (0, Xd.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Xd.jsx)(Od.c, {
            label: Cd("lobbyManage:banned"),
            meta: Bd.banned.length
          }), (0, Xd.jsx)(nd, {
            names: Bd.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: Cd("lobbyManage:allCount", {
              count: Bd.banned.length
            }),
            reveal: null !== (Wd = null === Zd || void 0 === Zd ? void 0 : Zd.name) && void 0 !== Wd ? Wd : null,
            renderRow: Yd("banned")
          })]
        })]
      })
    }
    var cd = kd(4482),
      hd = kd(1675),
      rd = kd(36877),
      ud = kd(36890),
      td = kd(36887),
      Vd = kd(36880),
      zd = kd(36911),
      Hd = kd(36905),
      wd = kd(36907);

    function Ad(dd) {
      const Jd = new Set;
      for (const kd of dd) Jd.add(kd.toLowerCase());
      return Jd
    }

    function dJ(dd) {
      var Jd, kd;
      let {
        state: Nd,
        lobbyName: Wd,
        listed: Pd,
        isListed: Zd,
        mI: gd,
        QG: Cd,
        statusOf: Kd
      } = dd;
      const {
        t: od,
        selectedLanguage: Qd
      } = (0, ld.B)(), Ld = (0, hd.j)(), ed = (0, Id.k)("players"), Rd = null === ed.localId ? null : null !== (Jd = null === (kd = ed.byId[ed.localId]) || void 0 === kd ? void 0 : kd.name) && void 0 !== Jd ? Jd : null, Gd = (0, pd.useMemo)((() => (0, Vd.j)(Ld.friends, Wd, Nd.here.map((dd => dd.name)))), [Ld.friends, Wd, Nd.here]), vd = new Map(Gd.map((dd => [dd.friend.name.toLowerCase(), dd]))), xd = function(dd) {
        let {
          refused: Jd,
          listed: kd,
          here: pd,
          friends: Nd,
          excluded: Wd
        } = dd;
        const Pd = Ad(Wd),
          Zd = dd => dd.filter((dd => {
            const Jd = dd.toLowerCase();
            return !Pd.has(Jd) && (Pd.add(Jd), !0)
          }));
        return {
          added: [],
          refused: Zd(Jd),
          listed: Zd(kd),
          suggested: Zd([...pd, ...Nd])
        }
      }({
        refused: Nd.refused.map((dd => dd.name)),
        listed: Pd,
        here: Nd.here.map((dd => dd.name)),
        friends: Gd.flatMap((dd => "here" === dd.place ? [] : [dd.friend.name])),
        excluded: [...null === Rd ? [] : [Rd], ...[...Nd.here, ...Nd.away].flatMap((dd => "none" === dd.role || (0, Vd.l)(Pd, dd.name) ? [] : [dd.name]))]
      }), [qd] = (0, pd.useState)(xd), [Bd, sd] = (0, pd.useState)([]), Fd = function(dd, Jd, kd) {
        const pd = Ad(kd),
          Nd = Ad([...kd, ...dd.refused, ...dd.listed, ...dd.suggested]),
          Wd = kd => [...dd[kd].filter((dd => !pd.has(dd.toLowerCase()))), ...Jd[kd].filter((dd => {
            const Jd = dd.toLowerCase();
            return !Nd.has(Jd) && (Nd.add(Jd), !0)
          }))];
        return {
          added: [...kd],
          refused: Wd("refused"),
          listed: Wd("listed"),
          suggested: Wd("suggested")
        }
      }(qd, xd, Bd), Yd = (dd, Jd) => {
        var kd, pd;
        const Wd = dd.toLowerCase(),
          Pd = vd.get(Wd),
          Cd = Nd.here.find((dd => dd.name.toLowerCase() === Wd)),
          ld = Nd.refused.find((dd => dd.name.toLowerCase() === Wd)),
          Ld = null !== (kd = null === Kd || void 0 === Kd ? void 0 : Kd(dd)) && void 0 !== kd ? kd : null;
        let Od = null;
        Ld ? Od = (0, Xd.jsx)(fd, {
          status: Ld
        }) : ld ? Od = bd(od, Qd.code, "lobbyManage:triedToJoinAgo", ld.at, Date.now()) : Pd && Cd ? Od = od("lobbyManage:friendHere") : Pd ? Od = "online" === Pd.place ? od("lobbyManage:friendOnline") : od("lobbyManage:friend") : Cd && (Od = od("lobbyManage:hereStatus"));
        let ed = null !== (pd = null === Pd || void 0 === Pd ? void 0 : Pd.friend) && void 0 !== pd ? pd : (0, Md.h)(dd, null);
        return !Pd && null !== Cd && void 0 !== Cd && Cd.id && (ed = (0, ad.c)(Cd.id, Cd.name).playerSocialPreview), (0, Xd.jsx)(Hd.b, {
          playerSocialPreview: ed,
          isFriend: void 0 !== Pd,
          hideFriendBadge: !0,
          status: Od,
          zIndex: Jd,
          Do: {
            on: Zd(dd),
            onChange: Jd => {
              gd(dd, Jd)
            }
          }
        }, Wd)
      }, md = [...Fd.added, ...Fd.refused];
      return (0, Xd.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, Xd.jsx)(Od.c, {
          label: od("worldSocial:whitelist"),
          meta: Pd.length
        }), (0, Xd.jsx)(wd.e, {
          label: od("lobbyManage:add"),
          icon: "user-check",
          placeholder: od("socialBar:enterPlayerName"),
          onSubmit: async dd => {
            const Jd = await Cd(dd);
            return Jd.ok && sd((Jd => [dd, ...Jd])), Jd
          }
        }), md.length > 0 && (0, Xd.jsx)("div", {
          className: "PlayerRows",
          children: md.map(((dd, Jd) => Yd(dd, md.length - Jd)))
        }), (0, Xd.jsx)(nd, {
          names: Fd.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: od("lobbyManage:allOnWhitelist", {
            count: Fd.listed.length
          }),
          renderRow: Yd
        }), (0, Xd.jsx)(nd, {
          names: Fd.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: od("lobbyManage:allCount", {
            count: Fd.suggested.length
          }),
          renderRow: Yd
        })]
      })
    }

    function JJ(dd) {
      let {
        manage: Jd,
        listing: kd
      } = dd;
      const {
        t: pd
      } = (0, ld.B)(), Wd = (dd, kd) => ((0, Nd.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: dd
      }), Jd.send({
        type: "setListing",
        field: dd,
        value: kd
      }, `listing:${dd}`)), Pd = dd => {
        const kd = Jd.statusOf(`listing:${dd}`);
        return kd && !kd.ok && (0, Xd.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, Xd.jsx)(fd, {
            status: kd
          })
        })
      };
      return (0, Xd.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, Xd.jsx)(Od.c, {
          label: pd("lobbyManage:inWorldsList")
        }), (0, Xd.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Xd.jsx)("div", {
            className: "SliderText",
            children: pd("lobbyManage:description")
          }), (0, Xd.jsx)(Ud, {
            value: kd.description,
            ariaLabel: pd("lobbyManage:description"),
            wide: !0,
            onSave: dd => Wd("description", dd)
          })]
        }), Pd("description"), (0, Xd.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Xd.jsx)("div", {
            className: "SliderText",
            children: pd("lobbyManage:emojis")
          }), (0, Xd.jsx)(Ud, {
            value: kd.emojis,
            ariaLabel: pd("lobbyManage:emojis"),
            onSave: dd => Wd("emojis", dd)
          })]
        }), Pd("emojis"), (0, Xd.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Xd.jsx)("div", {
            className: "SliderText",
            children: pd("lobbyManage:colour")
          }), (0, Xd.jsx)(kJ, {
            value: kd.colour,
            ariaLabel: pd("lobbyManage:colour"),
            onSave: dd => {
              Wd("colour", dd)
            }
          })]
        }), Pd("colour")]
      })
    }

    function kJ(dd) {
      let {
        value: Jd,
        ariaLabel: kd,
        onSave: Nd
      } = dd;
      const Wd = (0, pd.useRef)(null),
        Pd = (0, pd.useRef)({
          value: Jd,
          onSave: Nd
        });
      Pd.current = {
        value: Jd,
        onSave: Nd
      };
      const Zd = (0, pd.useRef)(null),
        gd = (0, pd.useRef)(!1),
        Cd = dd => {
          gd.current && dd.value !== Pd.current.value && dd.value !== Zd.current && (Zd.current = dd.value, Pd.current.onSave(dd.value))
        };
      return (0, pd.useEffect)((() => {
        Wd.current && document.activeElement !== Wd.current && (Wd.current.value = Jd)
      }), [Jd]), (0, pd.useEffect)((() => {
        const dd = Wd.current,
          Jd = () => {
            Cd(dd)
          };
        return dd.addEventListener("change", Jd), () => {
          dd.removeEventListener("change", Jd), Cd(dd)
        }
      }), []), (0, Xd.jsx)("input", {
        ref: Wd,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: Jd,
        "aria-label": kd,
        onInput: () => {
          gd.current = !0
        },
        onBlur: dd => {
          Cd(dd.currentTarget)
        }
      })
    }

    function pJ(dd) {
      let {
        manage: Jd
      } = dd;
      const {
        lobbyName: kd,
        shownLobbyName: pd
      } = (0, Id.k)("connectedGame");
      return Jd.state.you.canSetVisibility && null !== kd ? (0, Xd.jsx)(WJ, {
        manage: Jd,
        lobbyName: kd,
        worldCode: null !== pd && void 0 !== pd ? pd : kd
      }, kd) : (0, Xd.jsx)(PJ, {
        manage: Jd,
        lobbyName: null !== kd && void 0 !== kd ? kd : ""
      })
    }

    function NJ(dd) {
      return dd.map((dd => dd.toLowerCase())).sort().join(",")
    }

    function WJ(dd) {
      var Jd;
      let {
        manage: kd,
        lobbyName: Wd,
        worldCode: Pd
      } = dd;
      const {
        t: Zd
      } = (0, ld.B)(), {
        settings: gd,
        loading: Cd,
        change: Kd,
        retry: od,
        refresh: Qd
      } = (0, rd.g)(Wd), ed = (0, hd.j)(), {
        state: Rd
      } = kd, Id = (0, pd.useRef)(gd);
      Id.current = gd;
      const vd = NJ(null !== (Jd = Rd.whitelist) && void 0 !== Jd ? Jd : []),
        xd = null !== Rd.whitelist;
      (0, pd.useEffect)((() => {
        const dd = Id.current;
        null !== dd && (dd.visibility !== Rd.visibility || xd && NJ(dd.whitelist) !== vd) && Qd()
      }), [Rd.visibility, vd, xd, Qd]);
      const qd = async (dd, Jd) => {
        let kd = null;
        return await Kd(dd, Jd, {
          quiet: !0,
          onAnswer: dd => {
            kd = dd
          }
        }), kd
      }, Bd = (dd, Jd) => {
        null !== Jd && "error" in Jd && kd.showStatus(dd, {
          ok: !1,
          text: [Zd(Jd.error)]
        })
      }, sd = async dd => {
        if (null === gd || dd === gd.visibility) return;
        (0, Nd.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: dd
        });
        const Jd = "whitelist" === dd ? (0, Vd.g)((0, Vd.j)(ed.friends, Wd, Rd.here.map((dd => dd.name))), (0, zd.c)(Wd), gd.whitelist) : [],
          kd = await qd({
            setVisibility: dd
          }, (Jd => ({
            ...Jd,
            visibility: dd
          })));
        Bd("mode", kd), null === kd || "error" in kd || await (async dd => {
          for (const Jd of (0, Vd.o)(dd, cd.x))
            if (!await Kd({
                whitelistAdd: Jd
              }, (dd => (0, Vd.t)(dd, Jd, !0)))) return !1;
          return !0
        })(Jd)
      }, ad = (0, pd.useMemo)((() => {
        var dd;
        if (null === gd) return [];
        const Jd = null !== (dd = Rd.whitelist) && void 0 !== dd ? dd : [];
        return [...Jd.filter((dd => (0, Vd.l)(gd.whitelist, dd))), ...gd.whitelist.filter((dd => !(0, Vd.l)(Jd, dd)))]
      }), [gd, Rd.whitelist]), Md = kd.statusOf("mode");
      return (0, Xd.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Xd.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Xd.jsx)(Od.c, {
            label: Zd("worldSocial:whoCanJoin")
          }), null === gd && Cd && (0, Xd.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Xd.jsx)(Ld.b, {})
          }), null === gd && !Cd && (0, Xd.jsx)(Gd.f, {
            className: "SmallTextLight",
            onClick: od,
            children: Zd("worldSocial:loadFailed")
          }), null !== gd && (0, Xd.jsx)(ud.c, {
            visibility: gd.visibility,
            onPick: dd => {
              sd(dd)
            }
          }), Md && (0, Xd.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, Xd.jsx)(fd, {
              status: Md
            })
          }), null !== gd && "private" !== gd.visibility && (0, Xd.jsx)(td.c, {
            worldCode: Pd,
            message: null
          })]
        }), "whitelist" === (null === gd || void 0 === gd ? void 0 : gd.visibility) && (0, Xd.jsx)(dJ, {
          state: Rd,
          lobbyName: Wd,
          listed: ad,
          isListed: dd => (0, Vd.l)(gd.whitelist, dd),
          mI: (dd, Jd) => {
            (0, Nd.reportAnalyticsClick)(Jd ? {
              id: "lobby_manage.whitelist_add",
              value: "Do"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), qd(Jd ? {
              whitelistAdd: [dd]
            } : {
              whitelistRemove: dd
            }, (kd => (0, Vd.t)(kd, [dd], Jd))).then((Jd => {
              Bd(`whitelist:${dd.toLowerCase()}`, Jd)
            }))
          },
          QG: async dd => {
            (0, Nd.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Jd = await qd({
              whitelistAdd: [dd]
            }, (Jd => (0, Vd.t)(Jd, [dd], !0)));
            return null === Jd ? {
              ok: !1,
              error: Zd("worldSocial:changeFailed")
            } : "error" in Jd ? {
              ok: !1,
              error: Zd(Jd.error)
            } : (0, Vd.l)(Jd.notFound, dd) ? {
              ok: !1,
              error: Zd("lobbyManage:noPlayerCalled", {
                playerName: dd
              })
            } : {
              ok: !0
            }
          },
          statusOf: dd => kd.statusOf(`whitelist:${dd.toLowerCase()}`)
        }), "public" === (null === gd || void 0 === gd ? void 0 : gd.visibility) && null !== Rd.listing && (0, Xd.jsx)(JJ, {
          manage: kd,
          listing: Rd.listing
        })]
      })
    }

    function PJ(dd) {
      var Jd;
      let {
        manage: kd,
        lobbyName: pd
      } = dd;
      const {
        t: Wd
      } = (0, ld.B)(), {
        state: Pd
      } = kd, Zd = Cd(), gd = null !== (Jd = Pd.whitelist) && void 0 !== Jd ? Jd : [];
      return (0, Xd.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Xd.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Xd.jsx)(Od.c, {
            label: Wd("worldSocial:whoCanJoin")
          }), (0, Xd.jsx)("div", {
            className: "LobbyManageModeText",
            children: Wd(`worldSocial:${Pd.visibility}`)
          })]
        }), "whitelist" === Pd.visibility && Pd.you.canEditWhitelist && (0, Xd.jsx)(dJ, {
          state: Pd,
          lobbyName: pd,
          listed: gd,
          isListed: dd => {
            var Jd;
            return null !== (Jd = Zd.get(dd.toLowerCase())) && void 0 !== Jd ? Jd : (0, Vd.l)(gd, dd)
          },
          mI: (dd, Jd) => {
            (0, Nd.reportAnalyticsClick)(Jd ? {
              id: "lobby_manage.whitelist_add",
              value: "Do"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const pd = dd.toLowerCase();
            Zd.hold(pd, Jd, kd.send(Jd ? {
              type: "whitelistAdd",
              names: [dd]
            } : {
              type: "whitelistRemove",
              name: dd
            }, `whitelist:${pd}`))
          },
          QG: async dd => {
            (0, Nd.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Jd = await kd.send({
              type: "whitelistAdd",
              names: [dd]
            }, "whitelist-field");
            return Jd.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, Xd.jsx)(Sd.c, {
                text: Jd.message
              })
            }
          },
          statusOf: dd => kd.statusOf(`whitelist:${dd.toLowerCase()}`)
        }), "public" === Pd.visibility && null !== Pd.listing && (0, Xd.jsx)(JJ, {
          manage: kd,
          listing: Pd.listing
        })]
      })
    }
    var ZJ = kd(4877),
      gJ = kd(1384);
    const CJ = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const KJ = (0, pd.memo)((function(dd) {
      var Jd;
      let {
        rule: kd,
        value: pd,
        status: Nd,
        pending: Wd,
        hiddenNames: Pd,
        wq: Zd,
        onAction: gd
      } = dd;
      const {
        t: Cd
      } = (0, ld.B)(), Kd = dd => Zd(kd, dd), od = (dd, Jd) => {
        gd(kd, dd, Jd)
      }, Qd = md(Cd, kd.label, Pd), Ld = kd.info ? md(Cd, kd.info, Pd) : void 0, Od = kd.placeholder ? md(Cd, kd.placeholder, Pd) : void 0, ed = (null !== (Jd = kd.options) && void 0 !== Jd ? Jd : []).map((dd => ({
        value: dd.value,
        label: md(Cd, dd.label, Pd)
      }))), Rd = Math.max(0, ...ed.map((dd => function(dd) {
        let Jd = 0;
        for (const kd of dd) Jd += CJ.test(kd) ? 2 : 1;
        return Jd
      }(dd.label)))), Id = Nd && (0, Xd.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, Xd.jsx)(fd, {
          status: Nd
        })
      }), vd = (0, Xd.jsxs)("div", {
        className: "SliderText",
        children: [Qd, void 0 !== Ld && (0, Xd.jsx)(gJ.e, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: Ld
        })]
      });
      return "toggle" === kd.kind ? (0, Xd.jsxs)(Xd.Fragment, {
        children: [(0, Xd.jsx)(ZJ.d, {
          label: Qd,
          checked: !0 === pd,
          circleInfoText: Ld,
          disabled: Wd,
          onClick: Kd
        }), Id]
      }) : "choice" === kd.kind && ed.length <= 3 ? (0, Xd.jsxs)(Xd.Fragment, {
        children: [(0, Xd.jsx)(ZJ.g, {
          label: Qd,
          options: ed,
          value: String(pd),
          circleInfoText: Ld,
          onChange: Kd
        }), Id]
      }) : (0, Xd.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [vd, "choice" === kd.kind && (0, Xd.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": Rd
          },
          children: (0, Xd.jsx)(Fd.c, {
            options: ed,
            value: String(pd),
            disabled: Wd,
            onChange: dd => {
              Kd(dd.value)
            }
          })
        }), ("number" === kd.kind || "text" === kd.kind) && (0, Xd.jsx)(Ud, {
          value: null === pd ? "" : String(pd),
          placeholder: Od,
          ariaLabel: Qd,
          onSave: dd => {
            const Jd = dd.trim(),
              pd = Number(Jd);
            return Kd("number" === kd.kind && "" !== Jd && Number.isFinite(pd) ? pd : Jd)
          }
        }), "action" === kd.kind && (0, Xd.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [ed.length > 3 && (0, Xd.jsx)(Fd.c, {
            options: ed,
            value: {
              value: "",
              label: null !== Od && void 0 !== Od ? Od : Qd
            },
            disabled: Wd,
            onChange: dd => {
              od(dd.value)
            }
          }), ed.length > 0 && ed.length <= 3 && ed.map((dd => (0, Xd.jsx)(Gd.f, {
            className: "SmallTextLight",
            disabled: Wd,
            onClick: () => {
              od(dd.value)
            },
            children: dd.label
          }, dd.value))), 0 === ed.length && (0, Xd.jsx)(Gd.f, {
            className: "SmallTextLight",
            disabled: Wd,
            onClick: () => {
              od()
            },
            children: null !== Od && void 0 !== Od ? Od : Qd
          })]
        }), "names" === kd.kind && (0, Xd.jsx)(oJ, {
          names: Array.isArray(pd) ? pd : [],
          pending: Wd,
          onAction: od
        }), Id]
      })
    }));

    function oJ(dd) {
      let {
        names: Jd,
        pending: kd,
        onAction: Nd
      } = dd;
      const {
        t: Wd
      } = (0, ld.B)(), Pd = (0, pd.useRef)(null), [Zd, gd] = (0, pd.useState)(""), Cd = () => {
        const dd = Zd.trim();
        "" !== dd && (Nd(dd, "add"), Pd.current && (Pd.current.value = ""), gd(""))
      };
      return (0, Xd.jsxs)("div", {
        className: "LobbyManageNames",
        children: [Jd.map((dd => (0, Xd.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, Xd.jsx)("span", {
            className: "LobbyManageNameText",
            children: dd
          }), (0, Xd.jsx)(Gd.f, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: Wd("lobbyManage:removeName", {
              name: dd
            }),
            disabled: kd,
            onClick: () => {
              Nd(dd, "remove")
            },
            children: (0, Xd.jsx)(Qd.e, {
              name: "xmark"
            })
          })]
        }, dd))), (0, Xd.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, Xd.jsx)(jd.e, {
            domRef: Pd,
            placeholderText: Wd("lobbyManage:namePlaceholder"),
            ariaLabel: Wd("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: dd => {
              gd(dd)
            },
            onEnter: Cd
          }), (0, Xd.jsx)(Gd.f, {
            className: "SmallTextLight",
            disabled: kd || "" === Zd.trim(),
            onClick: Cd,
            children: Wd("lobbyManage:addHere")
          })]
        })]
      })
    }
    const lJ = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function QJ(dd) {
      return lJ.flatMap((Jd => {
        let {
          group: kd
        } = Jd;
        return dd.filter((dd => dd.group === kd && void 0 === dd.parent))
      }))
    }

    function LJ(dd) {
      let {
        manage: Jd,
        rowsShown: kd
      } = dd;
      const {
        t: Wd
      } = (0, ld.B)(), Pd = (0, Id.k)("hiddenPlayerNames"), {
        rules: Zd
      } = Jd.state, gd = Cd(), Kd = new Set(QJ(Zd).slice(0, kd)), od = dd => {
        const Jd = gd.get(dd.key);
        return void 0 === Jd ? dd.value : Jd
      }, {
        hold: Qd
      } = gd, Ld = (0, pd.useCallback)(((dd, kd) => {
        (0, Nd.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: dd.key
        });
        const pd = Jd.send({
          type: "setRule",
          key: dd.key,
          value: kd
        }, `rule:${dd.key}`);
        return Qd(dd.key, kd, pd), pd
      }), [Jd, Qd]), ed = (0, pd.useCallback)(((dd, kd, pd) => {
        (0, Nd.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: dd.key
        }), Jd.send({
          type: "ruleAction",
          key: dd.key,
          ...void 0 === kd ? {} : {
            arg: kd
          },
          ...void 0 === pd ? {} : {
            op: pd
          }
        }, `rule:${dd.key}`, void 0 === pd ? Wd("lobbyManage:setJustNow") : void 0)
      }), [Jd, Wd]), Rd = dd => {
        const kd = `rule:${dd.key}`;
        return (0, Xd.jsx)(KJ, {
          rule: dd,
          value: od(dd),
          status: Jd.statusOf(kd),
          pending: Jd.isPending(kd),
          hiddenNames: Pd,
          wq: Ld,
          onAction: ed
        }, dd.key)
      };
      return (0, Xd.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: lJ.map((dd => {
          let {
            group: Jd,
            title: kd
          } = dd;
          const Nd = Zd.filter((dd => dd.group === Jd && Kd.has(dd)));
          return 0 === Nd.length ? null : (0, Xd.jsxs)(pd.Fragment, {
            children: [(0, Xd.jsx)(Od.c, {
              label: Wd(kd)
            }), Nd.map((dd => {
              const Jd = Zd.filter((Jd => Jd.parent === dd.key));
              return 0 === Jd.length || !0 !== od(dd) ? Rd(dd) : (0, Xd.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [Rd(dd), Jd.map(Rd)]
              }, dd.key)
            }))]
          }, Jd)
        }))
      })
    }
    const OJ = {
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
      eJ = 5,
      RJ = (0, pd.memo)((function(dd) {
        let {
          page: Jd,
          manage: kd,
          leaderboard: Nd,
          focusRequest: Wd,
          onFocused: Pd,
          ruleRowsShown: Zd
        } = dd;
        return "leaderboard" === Jd ? (0, Xd.jsx)(pd.Suspense, {
          fallback: (0, Xd.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Xd.jsx)(Ld.b, {})
          }),
          children: Nd
        }) : "joining" === Jd ? (0, Xd.jsx)(pJ, {
          manage: kd
        }) : "rules" === Jd ? (0, Xd.jsx)(LJ, {
          manage: kd,
          rowsShown: Zd
        }) : (0, Xd.jsx)(Ed, {
          manage: kd,
          focusRequest: Wd,
          onFocused: Pd
        })
      }));

    function IJ(dd) {
      let {
        page: Jd
      } = dd;
      const {
        t: kd
      } = (0, ld.B)(), pd = OJ[Jd];
      return (0, Xd.jsxs)(Xd.Fragment, {
        children: [(0, Xd.jsx)(Qd.e, {
          name: pd.icon
        }), " ", (0, Xd.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: kd(pd.title)
        })]
      })
    }

    function GJ(dd) {
      var Jd;
      const {
        t: kd
      } = (0, ld.B)(), {
        pages: Wd,
        landing: Pd
      } = dd, gd = (0, pd.useRef)(null), Cd = (0, pd.useRef)(null), Kd = (0, pd.useRef)(null), Qd = (0, pd.useRef)(new Map), [Ld, Id] = (0, pd.useState)(null), Gd = (0, pd.useRef)(Ld), vd = (0, pd.useRef)(0), [xd, qd] = (0, pd.useState)(Wd[0]), Bd = null !== Ld && void 0 !== Ld ? Ld : Wd.includes(xd) ? xd : Wd[0], [sd] = (0, pd.useState)(null !== (Jd = null === Pd || void 0 === Pd ? void 0 : Pd.page) && void 0 !== Jd ? Jd : null), ad = null !== sd && Wd.includes(sd) ? [sd, ...Wd.filter((dd => dd !== sd))] : Wd, Md = Math.max(1, Math.ceil(QJ(dd.manage.state.rules).length / eJ)), Fd = ad.flatMap((dd => "rules" === dd ? Array(Md).fill(dd) : [dd])), Yd = function(dd, Jd) {
        const [kd, Nd] = (0, pd.useState)(dd), Wd = kd >= Jd;
        return Wd && kd !== 1 / 0 && Nd(1 / 0), (0, pd.useLayoutEffect)((() => {
          if (Wd) return;
          let dd = !0;
          return (0, Rd.d)().then((() => {
            dd && Nd((dd => dd + 1))
          })), () => {
            dd = !1
          }
        }), [kd, Wd]), Wd ? 1 / 0 : kd
      }(1, Fd.length), md = Fd.slice(0, Yd), bd = new Set(md), Sd = Yd < Fd.length, jd = Sd ? md.filter((dd => "rules" === dd)).length * eJ : 1 / 0, fd = (0, pd.useRef)(dd.focusRequest);
      fd.current = dd.focusRequest;
      const nd = dd => {
          Gd.current = dd, Id(dd)
        },
        Ud = () => {
          var dd, Jd;
          gd.current.style.scrollPaddingTop = `${null!==(dd=null===(Jd=Kd.current)||void 0===Jd?void 0:Jd.offsetHeight)&&void 0!==dd?dd:0}px`
        },
        yd = dd => {
          const Jd = gd.current,
            kd = Qd.current.get(dd);
          if (void 0 === kd) return;
          const pd = document.activeElement,
            Nd = fd.current,
            Wd = null === Nd ? null : kd.querySelector(`[data-lobby-manage-row="${CSS.escape(Nd.name)}"]`);
          Ud(), pd instanceof HTMLElement && null !== Wd && void 0 !== Wd && Wd.contains(pd) ? pd.scrollIntoView({
            block: "center"
          }) : null === kd.previousElementSibling ? Jd.scrollTop = 0 : kd.scrollIntoView({
            block: "start"
          }), vd.current = Jd.scrollTop
        },
        Dd = dd => {
          (0, Nd.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: dd
          }), nd(dd), yd(dd)
        },
        Td = () => {
          var dd, Jd;
          const kd = gd.current,
            pd = kd.getBoundingClientRect().top + (null !== (dd = null === (Jd = Kd.current) || void 0 === Jd ? void 0 : Jd.offsetHeight) && void 0 !== dd ? dd : 0),
            Nd = Wd.map((dd => {
              var Jd, kd;
              return (null !== (Jd = null === (kd = Qd.current.get(dd)) || void 0 === kd ? void 0 : kd.getBoundingClientRect().top) && void 0 !== Jd ? Jd : 1 / 0) - pd
            })),
            Pd = !Sd && kd.scrollTop + kd.clientHeight >= kd.scrollHeight - 1;
          qd(Wd[(0, Zd.k)(Nd, Pd)])
        },
        Ed = () => {
          null !== Gd.current && (nd(null), Td())
        };
      (0, pd.useLayoutEffect)((() => {
        null !== Pd && Wd.includes(Pd.page) && Dd(Pd.page)
      }), [null === Pd || void 0 === Pd ? void 0 : Pd.seq]), (0, pd.useLayoutEffect)((() => {
        null === Gd.current || Wd.includes(Gd.current) || Ed()
      }));
      const {
        onFocused: cd
      } = dd, hd = (0, pd.useCallback)((dd => {
        null !== Gd.current && yd(Gd.current), cd(dd)
      }), [cd]);
      (0, pd.useLayoutEffect)((() => {
        const dd = Gd.current;
        null !== dd && (!Sd || Wd.indexOf(Fd[Yd - 1]) < Wd.indexOf(dd)) && yd(dd)
      }), [Yd]), (0, pd.useEffect)((() => {
        const dd = new ResizeObserver((() => {
          null !== Gd.current ? yd(Gd.current) : Ud()
        }));
        return dd.observe(gd.current), dd.observe(Cd.current), () => {
          dd.disconnect()
        }
      }), []), (0, pd.useLayoutEffect)((() => {
        const dd = Kd.current,
          Jd = null === dd || void 0 === dd ? void 0 : dd.querySelector(".SegmentedToggleOptionSelected");
        Jd && (dd.scrollLeft = Math.min(Jd.offsetLeft, Math.max(dd.scrollLeft, Jd.offsetLeft + Jd.offsetWidth - dd.clientWidth)))
      }), [Bd]);
      return (0, Xd.jsxs)("div", {
        ref: gd,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === Gd.current ? Td() : Math.abs(gd.current.scrollTop - vd.current) > 1 && Ed()
        },
        onClick: dd => {
          var Jd;
          null !== (Jd = Kd.current) && void 0 !== Jd && Jd.contains(dd.target) || Ed()
        },
        onFocus: dd => {
          var Jd;
          const kd = null === Gd.current ? null : Qd.current.get(Gd.current);
          !kd || kd.contains(dd.target) || null !== (Jd = Kd.current) && void 0 !== Jd && Jd.contains(dd.target) || Ed()
        },
        children: [Wd.length > 1 && (0, Xd.jsx)("div", {
          ref: Kd,
          className: "LobbyManageChips",
          children: (0, Xd.jsx)(ed.c, {
            options: Wd.map((dd => ({
              value: dd,
              label: (0, Xd.jsx)(IJ, {
                page: dd
              }),
              ariaLabel: kd(OJ[dd].title)
            }))),
            value: Bd,
            padTabs: "2",
            ariaLabel: kd("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: Dd
          })
        }), (0, Xd.jsx)("div", {
          ref: Cd,
          className: od()("LobbyManageInner", {
            Staging: Sd
          }),
          children: Wd.filter((dd => bd.has(dd))).map((Jd => {
            const kd = Jd === Ld;
            return (0, Xd.jsxs)("section", {
              ref: dd => {
                dd ? Qd.current.set(Jd, dd) : Qd.current.delete(Jd)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": kd || void 0,
              children: [Wd.length > 1 && (0, Xd.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": kd || void 0,
                "data-pad-unavailable": kd || void 0,
                children: (0, Xd.jsx)(Od.c, {
                  label: (0, Xd.jsx)(IJ, {
                    page: Jd
                  })
                })
              }), (0, Xd.jsx)(RJ, {
                page: Jd,
                manage: dd.manage,
                leaderboard: dd.leaderboard,
                focusRequest: dd.focusRequest,
                onFocused: hd,
                ruleRowsShown: "rules" === Jd ? jd : 1 / 0
              })]
            }, Jd)
          }))
        })]
      })
    }

    function vJ(dd) {
      return void 0 === (null === dd || void 0 === dd ? void 0 : dd.page) ? null : {
        page: dd.page,
        seq: dd.seq
      }
    }

    function xJ(dd) {
      let {
        leaderboard: Jd
      } = dd;
      const kd = function() {
          const dd = (0, Wd.j)("lobbyManage"),
            [Jd, kd] = (0, pd.useReducer)((dd => dd + 1), 0),
            [Nd] = (0, pd.useState)((() => new gd.c(kd)));
          return (0, pd.useEffect)((() => {
            const dd = Nd.nextDeadline();
            if (null === dd) return;
            const Jd = setTimeout((() => {
              Nd.expire(Date.now()), kd()
            }), Math.max(0, dd - Date.now()));
            return () => {
              clearTimeout(Jd)
            }
          })), (0, pd.useMemo)((() => null === dd ? null : {
            state: dd,
            send: (dd, Jd, pd) => {
              const Wd = Nd.send(dd, Jd, null !== pd && void 0 !== pd ? pd : null);
              return kd(), Wd
            },
            statusOf: dd => Nd.statusOf(dd, Date.now()),
            showStatus: (dd, Jd) => {
              Nd.show(dd, Jd)
            },
            isPending: dd => Nd.isPending(dd)
          }), [dd, Jd, Nd])
        }(),
        Cd = (0, Zd.m)((0, Wd.j)("lobbyLeaderboardInfo")),
        Kd = (0, Pd.m)(),
        [od, ld] = (0, pd.useState)((() => vJ(Kd))),
        [Qd, Ld] = (0, pd.useState)(null);
      return (0, pd.useEffect)((() => {
        null === Kd && (0, Nd.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, pd.useEffect)((() => {
        null !== Kd && (ld((dd => (null === dd || void 0 === dd ? void 0 : dd.seq) === Kd.seq ? dd : vJ(Kd))), void 0 !== Kd.focusName && "players" === Kd.page ? Ld({
          name: Kd.focusName,
          seq: Kd.seq
        }) : (0, Pd.i)(Kd.seq))
      }), [null === Kd || void 0 === Kd ? void 0 : Kd.seq]), null === kd ? null : (0, Xd.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, Xd.jsx)(GJ, {
          pages: (0, Zd.g)(kd.state, Cd),
          manage: kd,
          leaderboard: Jd,
          focusRequest: Qd,
          onFocused: Pd.i,
          landing: od
        })
      })
    }
  },
  36733: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Kd,
      e: () => gd
    });
    var pd = kd(1492),
      Nd = kd(1955),
      Wd = kd(1932);
    const Pd = 1e4;
    let Zd = 0;

    function gd(dd) {
      const Jd = ++Zd;
      return new Promise((kd => {
        const Zd = Jd => {
            gd(), clearTimeout(Cd), !1 === (null === Jd || void 0 === Jd ? void 0 : Jd.ok) && (0, pd.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: dd.type
            }), kd(Jd)
          },
          gd = Nd.b.subscribe("lobbyManage", (dd => {
            const kd = function(dd, Jd) {
              var kd;
              return null !== (kd = null === dd || void 0 === dd ? void 0 : dd.results.find((dd => dd.requestId === Jd))) && void 0 !== kd ? kd : null
            }(dd, Jd);
            null !== kd && Zd(kd)
          })),
          Cd = setTimeout((() => {
            Zd(null)
          }), Pd);
        Wd.gameBridge.send("lobbyManage", {
          ...dd,
          requestId: Jd
        })
      }))
    }
    const Cd = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class Kd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gd;
        this.onChange = dd, this.sendAction = Jd, this.pending = new Map, this.statuses = new Map
      }
      send(dd, Jd, kd) {
        var pd;
        return this.statuses.delete(Jd), this.pending.set(Jd, (null !== (pd = this.pending.get(Jd)) && void 0 !== pd ? pd : 0) + 1), this.sendAction(dd).then((dd => {
          var pd;
          const Nd = null !== dd && void 0 !== dd ? dd : {
              requestId: -1,
              ok: !1,
              message: Cd
            },
            Wd = (null !== (pd = this.pending.get(Jd)) && void 0 !== pd ? pd : 1) - 1;
          Wd > 0 ? this.pending.set(Jd, Wd) : this.pending.delete(Jd);
          const Pd = !Nd.ok || Nd.message.length > 0 ? Nd.message : null === kd ? null : [kd];
          return null !== Pd && this.statuses.set(Jd, {
            ok: Nd.ok,
            text: Pd,
            until: Date.now() + 4e3
          }), this.onChange(), Nd
        }))
      }
      show(dd, Jd) {
        this.statuses.set(dd, {
          ...Jd,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(dd) {
        for (const [Jd, kd] of this.statuses) kd.until <= dd && this.statuses.delete(Jd)
      }
      nextDeadline() {
        let dd = null;
        for (const kd of this.statuses.values()) {
          var Jd;
          dd = Math.min(null !== (Jd = dd) && void 0 !== Jd ? Jd : 1 / 0, kd.until)
        }
        return dd
      }
      statusOf(dd, Jd) {
        const kd = this.statuses.get(dd);
        return !kd || kd.until <= Jd ? null : {
          ok: kd.ok,
          text: kd.text
        }
      }
      isPending(dd) {
        return this.pending.has(dd)
      }
    }
  },
  36720: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Cd,
      g: () => gd
    });
    var pd = kd(593),
      Nd = kd(1932),
      Wd = kd(1675),
      Pd = kd(95),
      Zd = kd(1279);

    function gd(dd, Jd, kd) {
      return Pd.featureFlags.useSocialFeatures && dd && null === (0, Zd.d)(Jd, kd)
    }

    function Cd(dd, Jd) {
      var kd, Pd;
      const Zd = Wd.c.getSocialState().friends.find((dd => dd.name.toLowerCase() === Jd.toLowerCase())),
        gd = Nd.gameBridge.latest("players").byId[dd],
        Cd = void 0 !== gd && gd.name === Jd,
        Kd = Cd && null !== (kd = gd.cosmetics) && void 0 !== kd ? kd : void 0,
        od = Zd && Kd ? {
          ...Zd,
          cosmetics: Kd
        } : Zd;
      return {
        playerSocialPreview: null !== od && void 0 !== od ? od : {
          isError: !1,
          name: Jd,
          ranks: Cd ? [...gd.ranks] : [],
          cosmetics: null !== Kd && void 0 !== Kd ? Kd : {},
          nameColour: null !== (Pd = null === Kd || void 0 === Kd ? void 0 : Kd.nameColour) && void 0 !== Pd ? Pd : pd.c,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== Zd
      }
    }
  },
  36907: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => od
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1714),
      Zd = kd(1461),
      gd = kd(1359),
      Cd = kd(1059),
      Kd = kd(1103);

    function od(dd) {
      let {
        label: Jd,
        icon: kd,
        placeholder: Nd,
        onSubmit: od
      } = dd;
      const ld = (0, pd.useRef)(null),
        [Qd, Ld] = (0, pd.useState)(""),
        [Od, ed] = (0, pd.useState)("Enter"),
        [Rd, Id] = (0, pd.useState)(null);
      (0, pd.useEffect)((() => {
        if ("Success" !== Od && "Error" !== Od) return;
        const dd = setTimeout((() => {
          "Success" === Od && ld.current && (ld.current.value = "", Ld("")), ed("Enter")
        }), "Success" === Od ? 1e3 : 4e3);
        return () => {
          clearTimeout(dd)
        }
      }), [Od]);
      const Gd = () => {
        const dd = Qd.trim();
        "" !== dd && "Enter" === Od && (ed("Loading"), od(dd).then((dd => {
          ld.current && ("error" in dd ? null === dd.error ? ed("Enter") : (Id(dd.error), ed("Error")) : ed("Success"))
        })))
      };
      return (0, Kd.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: dd => {
          dd.target === ld.current && "Escape" !== dd.key && dd.stopPropagation()
        },
        children: [(0, Kd.jsxs)("div", {
          className: Wd()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Od}`),
          children: ["Loading" === Od && (0, Kd.jsx)(gd.b, {}), "Success" === Od && (0, Kd.jsx)(Cd.e, {
            name: "check"
          }), "Error" === Od && Rd]
        }), (0, Kd.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, Kd.jsx)(Pd.e, {
            className: "PlayerSearchInput",
            domRef: ld,
            maxLength: 32,
            placeholderText: Nd,
            ariaLabel: Nd,
            stopPropagation: !1,
            onValueChange: dd => {
              Ld(dd)
            },
            onEnter: Gd
          }), (0, Kd.jsxs)(Zd.d, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Od || "" === Qd.trim(),
            onClick: Gd,
            children: [(0, Kd.jsx)(Cd.e, {
              name: kd
            }), " ", Jd]
          })]
        })]
      })
    }
  },
  36890: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => od
    });
    var pd = kd(56),
      Nd = kd(1044),
      Wd = kd.n(Nd),
      Pd = kd(1211),
      Zd = kd(1059),
      gd = kd(1103);
    const Cd = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Kd = ["unlisted", "public", "whitelist", "private"];

    function od(dd) {
      let {
        visibility: Jd,
        onPick: kd
      } = dd;
      const {
        t: Nd
      } = (0, Pd.B)(), od = (0, pd.useRef)([]);
      return (0, gd.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Nd("worldSocial:whoCanJoin"),
        children: Kd.map(((dd, pd) => {
          const Pd = dd === Jd;
          return (0, gd.jsxs)("button", {
            ref: dd => {
              od.current[pd] = dd
            },
            type: "button",
            className: Wd()("WorldSocialTile", {
              WorldSocialTileSelected: Pd
            }),
            "aria-pressed": Pd,
            tabIndex: Pd ? 0 : -1,
            onKeyDown: dd => {
              ((dd, Jd) => {
                const kd = "ArrowRight" === dd.key || "ArrowDown" === dd.key ? 1 : "ArrowLeft" === dd.key || "ArrowUp" === dd.key ? -1 : 0;
                var pd;
                0 !== kd && (dd.preventDefault(), null === (pd = od.current[(Jd + kd + Kd.length) % Kd.length]) || void 0 === pd || pd.focus())
              })(dd, pd)
            },
            onClick: () => {
              kd(dd)
            },
            children: [(0, gd.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, gd.jsx)(Zd.e, {
                name: Cd[dd]
              })
            }), (0, gd.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, gd.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Nd(`worldSocial:${dd}`)
              }), (0, gd.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Nd(`worldSocial:${dd}Description`)
              })]
            })]
          }, dd)
        }))
      })
    }
  },
  36905: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd
    });
    var pd = kd(1211),
      Nd = kd(2525),
      Wd = kd(4203),
      Pd = kd(1103);

    function Zd(dd) {
      let {
        Do: Jd,
        children: kd,
        ...Zd
      } = dd;
      const {
        t: gd
      } = (0, pd.B)();
      return (0, Pd.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          Jd.onChange(!Jd.on)
        },
        children: (0, Pd.jsx)(Nd.d, {
          ...Zd,
          opensProfileCard: !1,
          children: (0, Pd.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: dd => {
              dd.stopPropagation()
            },
            children: [kd, (0, Pd.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, Pd.jsx)(Wd.e, {
                checked: Jd.on,
                disabled: !1,
                ariaLabel: gd("worldSocial:letJoin", {
                  playerName: Zd.playerSocialPreview.name
                }),
                onChange: dd => {
                  Jd.onChange(dd.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36887: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Ld
    });
    var pd = kd(56),
      Nd = kd(1211),
      Wd = kd(1858),
      Pd = kd(95),
      Zd = kd(22),
      gd = kd(1492),
      Cd = kd(2552),
      Kd = kd(9134),
      od = kd(1461),
      ld = kd(1059),
      Qd = kd(1103);

    function Ld(dd) {
      let {
        worldCode: Jd,
        message: kd
      } = dd;
      const {
        t: Ld
      } = (0, Nd.B)(), {
        isTouchScreen: Od
      } = (0, Zd.j)(["isTouchScreen"]), ed = Pd.featureFlags.canUseInviteLinks, Rd = (0, Kd.j)(ed && null === kd), [Id, Gd] = (0, Cd.h)(), vd = (0, pd.useRef)(null);
      if (null !== kd) return (0, Qd.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Qd.jsx)(ld.e, {
          name: "lock"
        }), (0, Qd.jsx)("span", {
          children: kd
        })]
      });
      const xd = ed ? Rd : Jd,
        qd = Od && ed && (0, Cd.d)();
      return (0, Qd.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!ed && (0, Qd.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Ld("worldSocial:worldCode")
        }), (0, Qd.jsx)("input", {
          ref: vd,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== xd && void 0 !== xd ? xd : "",
          "aria-label": Ld(ed ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: dd => {
            dd.currentTarget.select()
          }
        }), (0, Qd.jsxs)(od.d, {
          className: "WorldSocialCopy",
          disabled: null === xd,
          onClick: () => {
            null !== xd && (0, Cd.e)(xd, {
              useShareSheet: qd,
              onOutcome: dd => {
                if ((0, gd.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== dd || ed ? dd : "code"
                  }), "copied" === dd) Gd();
                else if ("failed" === dd) {
                  var Jd;
                  null === (Jd = vd.current) || void 0 === Jd || Jd.focus(), Wd.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Qd.jsx)(ld.e, {
            name: Id ? "check" : qd ? "up-from-bracket" : "copy"
          }), " ", Ld(Id ? "general:copied" : qd ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36896: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Qd,
      f: () => ld,
      h: () => od
    });
    var pd = kd(593),
      Nd = kd(1211),
      Wd = kd(1675),
      Pd = kd(2525),
      Zd = kd(2479),
      gd = kd(1461),
      Cd = kd(36905),
      Kd = kd(1103);

    function od(dd, Jd) {
      var kd;
      return {
        isError: !1,
        name: dd,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== Jd && void 0 !== Jd ? Jd : {},
        nameColour: null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.nameColour) && void 0 !== kd ? kd : pd.c,
        location: {
          status: "offline"
        }
      }
    }

    function ld(dd) {
      let {
        player: Jd,
        isFriend: kd = !1,
        status: pd,
        showLocation: gd = void 0 === pd,
        Do: od,
        onSendFriendRequest: ld,
        actions: Qd,
        zIndex: Ld
      } = dd;
      const {
        t: Od
      } = (0, Nd.B)();
      let ed = pd;
      null !== od && void 0 !== od && od.on && (ed = (0, Kd.jsxs)(Kd.Fragment, {
        children: [null !== pd && void 0 !== pd ? pd : (0, Kd.jsx)(Zd.c, {
          socialPreview: Jd
        }), (0, Kd.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Od("worldSocial:canJoin")]
        })]
      }));
      const Rd = {
        playerSocialPreview: Jd,
        isFriend: kd,
        hideFriendBadge: !0,
        onFriendRemoved: kd ? dd => {
          Wd.c.removeFriendFromState(dd)
        } : void 0,
        status: ed,
        showLocation: gd,
        onSendFriendRequest: ld,
        zIndex: Ld
      };
      return od ? (0, Kd.jsx)(Cd.b, {
        ...Rd,
        Do: od,
        children: Qd
      }) : (0, Kd.jsx)(Pd.d, {
        ...Rd,
        opensProfileCard: !1,
        children: Qd || void 0
      })
    }

    function Qd(dd) {
      let {
        row: Jd,
        Do: kd,
        canInvite: pd,
        invited: Wd,
        onInvite: Pd,
        zIndex: Zd
      } = dd;
      const {
        t: Cd
      } = (0, Nd.B)(), od = "online" === Jd.place ? gd.d : gd.f;
      return (0, Kd.jsx)(ld, {
        player: Jd.friend,
        isFriend: !0,
        status: "here" === Jd.place ? Cd("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Do: kd,
        zIndex: Zd,
        actions: pd && (0, Kd.jsx)(od, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Wd,
          onClick: Pd,
          ariaLabel: `${Cd("worldSocial:invite")} ${Jd.friend.name}`,
          children: Cd(Wd ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36877: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => gd,
      e: () => Pd,
      g: () => Cd
    });
    var pd = kd(56),
      Nd = kd(4434),
      Wd = kd(1858);

    function Pd(dd) {
      const Jd = {
        lobbyName: dd,
        answer: null,
        response: Nd.e.getSocialSettings(dd)
      };
      return Jd.response.then((dd => {
        Jd.answer = dd
      })), Jd
    }
    const Zd = new Map;

    function gd(dd) {
      Zd.set(dd.lobbyName, dd)
    }

    function Cd(dd) {
      const [Jd] = (0, pd.useState)((() => function(dd) {
        var Jd;
        const kd = null !== (Jd = Zd.get(dd)) && void 0 !== Jd ? Jd : null;
        return null !== kd && void 0 !== kd && kd.answer && "error" in kd.answer ? null : kd
      }(dd))), [kd, Pd] = (0, pd.useState)((() => null !== Jd && void 0 !== Jd && Jd.answer && "settings" in Jd.answer ? Jd.answer.settings : null)), [gd, Cd] = (0, pd.useState)(!0), [Kd, od] = (0, pd.useState)(null !== kd), ld = (0, pd.useRef)(kd);
      ld.current = kd;
      const Qd = (0, pd.useRef)(0),
        Ld = (0, pd.useRef)(0),
        Od = (0, pd.useRef)(!1),
        ed = (0, pd.useRef)(!0),
        Rd = (0, pd.useCallback)((async Jd => {
          const kd = ++Qd.current,
            pd = await (null !== Jd && void 0 !== Jd ? Jd : Nd.e.getSocialSettings(dd));
          ed.current && kd === Qd.current && (od(!0), Cd(!1), "error" in pd || Pd(pd.settings))
        }), [dd]),
        Id = (0, pd.useCallback)((() => {
          Cd(!0), Rd()
        }), [Rd]),
        Gd = (0, pd.useCallback)((() => {
          Ld.current > 0 ? Od.current = !0 : Rd()
        }), [Rd]);
      (0, pd.useEffect)((() => (ed.current = !0, Zd.delete(dd), Cd(!0), Rd(null === Jd || void 0 === Jd ? void 0 : Jd.response), () => {
        ed.current = !1
      })), [Rd, dd, Jd]);
      const vd = dd => {
        Qd.current++, Cd(!1), ld.current = dd, Pd(dd)
      };
      return {
        settings: kd,
        loading: gd,
        answered: Kd,
        retry: Id,
        refresh: Gd,
        change: async function(Jd, kd) {
          let {
            quiet: pd = !1,
            onAnswer: Pd
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const Zd = ld.current;
          if (null === Zd) return !1;
          vd(kd(Zd)), Ld.current > 0 && (Od.current = !0), Ld.current++;
          const gd = await Nd.e.setSocialSettings(dd, Jd);
          Ld.current--;
          const Cd = !("error" in gd);
          if (!ed.current) return Cd;
          if (null === Pd || void 0 === Pd || Pd(gd), pd);
          else if ("error" in gd) Wd.f.showMessage({
            translationKey: gd.error
          });
          else
            for (const dd of gd.notFound) Wd.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: dd
              }
            });
          if (Ld.current > 0) return Cd;
          const Kd = Od.current;
          return Od.current = !1, !Kd && "settings" in gd ? vd(gd.settings) : (Kd || vd(Zd), Rd()), Cd
        }
      }
    }
  },
  36911: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      g: () => Wd
    });
    var pd = kd(149);
    const Nd = new Map;

    function Wd(dd, Jd) {
      var kd;
      const pd = null !== (kd = Nd.get(dd)) && void 0 !== kd ? kd : new Map;
      pd.set(Jd, Date.now()), Nd.set(dd, pd)
    }

    function Pd(dd) {
      const Jd = Nd.get(dd);
      if (!Jd) return [];
      const kd = Date.now();
      for (const [Nd, Wd] of Jd) kd - Wd >= pd.r && Jd.delete(Nd);
      return [...Jd.keys()]
    }
  },
  36880: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      const kd = Jd.toLowerCase();
      for (const pd of dd)
        if (pd.toLowerCase() === kd) return !0;
      return !1
    }

    function Nd(dd, Jd, kd) {
      const Nd = [],
        Wd = [],
        Pd = [];
      for (const Zd of dd) !Zd.isError && Zd.name && ("inGame" === Zd.location.status && Zd.location.inLobbyName === Jd || pd(kd, Zd.name) ? Wd.push({
        friend: Zd,
        place: "here"
      }) : "offline" === Zd.location.status ? Pd.push({
        friend: Zd,
        place: "offline"
      }) : Nd.push({
        friend: Zd,
        place: "online"
      }));
      return [...Nd, ...Wd, ...Pd]
    }

    function Wd(dd, Jd, kd) {
      const Nd = [],
        Wd = dd.flatMap((dd => "here" === dd.place ? [dd.friend.name] : []));
      for (const Pd of [...Wd, ...Jd]) pd(Nd, Pd) || pd(kd, Pd) || Nd.push(Pd);
      return Nd
    }

    function Pd(dd, Jd) {
      return null === dd || void 0 === dd || !dd.canManage || pd(dd.whitelist, Jd) ? "none" : "whitelist" === dd.visibility ? "required" : "quiet"
    }

    function Zd(dd) {
      if (null === dd) return !0;
      const {
        visibility: Jd
      } = dd;
      return "public" === Jd || "unlisted" === Jd || "whitelist" === Jd && dd.canManage
    }

    function gd(dd, Jd, kd) {
      if (kd) {
        const kd = Jd.filter((Jd => !pd(dd.whitelist, Jd)));
        return {
          ...dd,
          whitelist: [...dd.whitelist, ...kd]
        }
      }
      return {
        ...dd,
        whitelist: dd.whitelist.filter((dd => !pd(Jd, dd)))
      }
    }

    function Cd(dd, Jd) {
      const kd = [];
      for (let pd = 0; pd < dd.length; pd += Jd) kd.push(dd.slice(pd, pd + Jd));
      return kd
    }
    kd.d(Jd, {
      c: () => Zd,
      g: () => Wd,
      j: () => Nd,
      l: () => pd,
      o: () => Cd,
      r: () => Pd,
      t: () => gd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);