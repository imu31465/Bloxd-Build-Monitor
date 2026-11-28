export const id = 254;
export const ids = [254];
export const modules = {
  43026: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      LobbyManageView: () => gO
    });
    var Wd = md(66),
      Fd = md(1605),
      Rd = md(38544),
      Xd = md(3418),
      Kd = md(3425),
      hd = md(3403),
      vd = md(38211);

    function Qd() {
      const [dd, Od] = (0, Wd.useState)(new Map);
      return {
        get: Od => dd.get(Od),
        hold: (0, Wd.useCallback)(((dd, md, Wd) => {
          Od((Od => new Map(Od).set(dd, md))), Wd.then((() => {
            Od((Od => {
              const md = new Map(Od);
              return md.delete(dd), md
            }))
          }))
        }), [])
      }
    }
    var td = md(1155),
      od = md.n(td),
      Nd = md(1238),
      qd = md(1443),
      Hd = md(1436),
      yd = md(3722),
      bd = md(4199),
      Td = md(4664);
    var pd = md(2125),
      Yd = md(1572),
      gd = md(38215),
      wd = md(3720),
      Ed = md(3842),
      Jd = md(38337),
      Ud = md(4327),
      xd = md(405);

    function Bd(dd, Od, md) {
      return Od.map((Od => {
        if ("string" === typeof Od) return Od;
        const Wd = "str" in Od ? Od.str : Od;
        return "string" === typeof Wd ? Wd : "entityName" in Wd ? Wd.entityName : "translationKey" in Wd ? dd(Wd.translationKey, (0, Nd.s)(Wd.params, md)) : ""
      })).join("")
    }

    function Sd(dd, Od, md, Wd, Fd) {
      return Fd - Wd < 6e4 ? dd(`${md}JustNow`) : dd(md, {
        time: (0, xd.Q)((0, Nd.p)(Od, md), Wd, Fd)
      })
    }
    var sd = md(2060),
      ud = md(1808),
      Vd = md(1341);

    function Ad(dd) {
      let {
        status: Od
      } = dd;
      return (0, Vd.jsx)("span", {
        className: od()("LobbyManageStatus", {
          LobbyManageStatusRefused: !Od.ok
        }),
        children: (0, Vd.jsx)(sd.d, {
          text: Od.text
        })
      })
    }

    function rd(dd) {
      let {
        names: Od,
        cap: md,
        filterFrom: Fd,
        moreLabel: Rd,
        reveal: Xd = null,
        renderRow: Kd
      } = dd;
      const {
        t: hd
      } = (0, Nd.G)(), [vd, Qd] = (0, Wd.useState)(!1), [td, od] = (0, Wd.useState)(""), Hd = vd || null !== Xd && Od.indexOf(Xd) >= md, bd = (Hd || Od.length <= md) && null !== Fd && Od.length > Fd, Td = td.trim().toLowerCase();
      let pd = Hd ? Od : Od.slice(0, md);
      return bd && "" !== Td && (pd = pd.filter((dd => dd.toLowerCase().includes(Td)))), (0, Vd.jsxs)(Vd.Fragment, {
        children: [bd && (0, Vd.jsx)(ud.c, {
          className: "LobbyManageFilter",
          placeholderText: hd("lobbyManage:findName"),
          ariaLabel: hd("lobbyManage:findName"),
          onValueChange: dd => {
            od(dd)
          }
        }), pd.length > 0 && (0, Vd.jsx)("div", {
          className: "PlayerRows",
          children: pd.map(((dd, Od) => Kd(dd, pd.length - Od)))
        }), !Hd && Od.length > md && (0, Vd.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, Vd.jsx)(yd.e, {
            label: (0, Vd.jsxs)(Vd.Fragment, {
              children: [Rd, " ", (0, Vd.jsx)(qd.c, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              Qd(!0)
            }
          })
        })]
      })
    }

    function Gd(dd) {
      let {
        value: Od,
        placeholder: md,
        ariaLabel: Fd,
        maxLength: Rd,
        wide: Xd = !1,
        onSave: Kd
      } = dd;
      const hd = (0, Wd.useRef)(null),
        [vd, Qd] = (0, Wd.useState)(0),
        td = (0, Wd.useRef)(!0),
        Nd = (0, Wd.useRef)(null),
        qd = (0, Wd.useRef)({
          value: Od,
          onSave: Kd
        });
      qd.current = {
        value: Od,
        onSave: Kd
      };
      const Hd = () => {
        const dd = Nd.current;
        Nd.current = null, null !== dd && dd !== qd.current.value && qd.current.onSave(dd).then((() => {
          td.current && Qd((dd => dd + 1))
        }))
      };
      return (0, Wd.useEffect)((() => {
        null === Nd.current && hd.current && (hd.current.value = Od)
      }), [Od, vd]), (0, Wd.useEffect)((() => () => {
        td.current = !1, Hd()
      }), []), (0, Vd.jsx)("div", {
        className: od()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: Xd
        }),
        onBlur: Hd,
        children: (0, Vd.jsx)(ud.c, {
          domRef: hd,
          defaultValue: Od,
          placeholderText: md,
          ariaLabel: Fd,
          maxLength: Rd,
          onValueChange: dd => {
            Nd.current = dd
          },
          onEnter: Hd
        })
      })
    }
    const nd = ["mod", "coOwner"],
      Ld = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function Pd(dd) {
      var Od, md, Rd;
      let {
        name: Xd,
        place: Kd,
        openedIn: hd,
        isYou: vd,
        manage: td,
        hiddenNames: od,
        zIndex: Hd
      } = dd;
      const {
        t: yd,
        selectedLanguage: bd
      } = (0, Nd.G)(), [Td, pd] = (0, Wd.useState)(null), {
        state: xd
      } = td, sd = `player:${Xd}`, ud = (0, gd.g)(Kd, null !== xd.gamemodes), rd = td.statusOf(sd), Gd = td.isPending(sd), Pd = Qd(), zd = Date.now(), cd = dd => {
        var Od, md;
        return null !== (Od = null === (md = (dd => xd.roles.find((Od => Od.role === dd)))(dd)) || void 0 === md ? void 0 : md.label) && void 0 !== Od ? Od : dd
      }, jd = dd => {
        const Od = Ld[dd];
        return void 0 === Od ? void 0 : yd(Od)
      }, Dd = "here" === Kd.section || "away" === Kd.section ? Kd.player : null, ed = null !== (Od = Pd.get("role")) && void 0 !== Od ? Od : null === Dd || void 0 === Dd ? void 0 : Dd.role, Id = "here" === Kd.section ? Kd.player.id : null, {
        playerSocialPreview: ld,
        isFriend: Cd
      } = null === Id ? {
        playerSocialPreview: (0, Jd.g)(Xd, null),
        isFriend: !1
      } : (0, Ed.g)(Id, Xd), Zd = function() {
        td.send(...arguments)
      }, kd = (dd, Od) => {
        Pd.hold("role", dd, td.send({
          type: "setRole",
          name: Xd,
          role: dd
        }, sd, Od))
      };
      let fd = null;
      if ("ban" === (null === Td || void 0 === Td ? void 0 : Td.kind)) fd = yd("lobbyManageEntry:banConfirm", {
        playerName: Xd
      });
      else if ("role" === (null === Td || void 0 === Td ? void 0 : Td.kind)) {
        var Md;
        fd = `${yd("lobbyManage:roleConfirm",{playerName:Xd,role:cd(Td.role)})} ${null!==(Md=jd(Td.role))&&void 0!==Md?Md:""}`
      } else if (rd) fd = (0, Vd.jsx)(Ad, {
        status: rd
      });
      else if (vd) fd = yd("lobbyManage:you");
      else if ("here" === Kd.section) "none" === Kd.player.role && zd - Kd.player.at < 6e5 && (fd = Sd(yd, bd.code, "lobbyManage:joinedAgo", Kd.player.at, zd));
      else if ("away" === Kd.section) {
        if (Kd.player.at > 0) {
          const dd = "kicked" === Kd.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          fd = Sd(yd, bd.code, dd, Kd.player.at, zd)
        }
      } else "banned" === Kd.section ? null !== Kd.bannedAt && (fd = Sd(yd, bd.code, "lobbyManage:bannedAgo", Kd.bannedAt, zd)) : "banned" === hd && (fd = yd("lobbyManageEntry:unbanned"));
      return (0, Vd.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": Xd,
        children: (0, Vd.jsxs)(wd.e, {
          playerSocialPreview: ld,
          isFriend: Cd,
          status: fd,
          opensProfileCard: !vd && (0, Ed.k)(!0, Xd, od),
          zIndex: Hd,
          children: [null !== Td && (0, Vd.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === Td.kind && (0, Vd.jsxs)(Yd.G, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                pd(null), Zd({
                  type: "ban",
                  name: Xd
                }, sd)
              },
              children: [(0, Vd.jsx)(qd.c, {
                name: "gavel"
              }), (0, Vd.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: yd("lobbyManageEntry:ban")
              })]
            }), "role" === Td.kind && (0, Vd.jsx)(Yd.g, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: Td.role
              },
              onClick: () => {
                pd(null), kd(Td.role)
              },
              children: yd("lobbyManage:makeRole", {
                role: cd(Td.role)
              })
            }), (0, Vd.jsx)(Yd.i, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                pd(null)
              },
              children: yd("general:cancel")
            })]
          }), null === Td && (0, Vd.jsxs)(Vd.Fragment, {
            children: [(0, Vd.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [ud.gamemode && null !== Dd && (0, Vd.jsx)(Ud.e, {
                options: (null !== (md = xd.gamemodes) && void 0 !== md ? md : []).map((dd => ({
                  value: dd.value,
                  label: Bd(yd, dd.label, od)
                }))),
                value: null !== (Rd = Pd.get("gamemode")) && void 0 !== Rd ? Rd : Dd.gamemode,
                disabled: Gd,
                revealOnOpen: !0,
                onChange: dd => {
                  (0, Fd.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: dd.value
                  }), Pd.hold("gamemode", dd.value, td.send({
                    type: "setGamemode",
                    name: Xd,
                    gamemode: dd.value
                  }, sd))
                }
              }), ud.roles.length > 0 && null !== Dd && (0, Vd.jsx)(Ud.e, {
                options: [...xd.roles].reverse().filter((dd => ud.roles.includes(dd.role))).map((dd => ({
                  value: dd.role,
                  label: dd.label
                }))),
                value: "none" === ed ? void 0 : ed,
                placeholder: yd("lobbyManageEntry:giveRole"),
                disabled: Gd,
                revealOnOpen: !0,
                onChange: dd => {
                  var Od;
                  (Od = dd.value) !== (null === Dd || void 0 === Dd ? void 0 : Dd.role) && (nd.includes(Od) ? pd({
                    kind: "role",
                    role: Od
                  }) : ((0, Fd.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: Od
                  }), kd(Od, jd(Od))))
                }
              }), null !== ud.fixedRole && (0, Vd.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: cd(ud.fixedRole)
              })]
            }), (0, Vd.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [ud.kick && (0, Vd.jsxs)(Yd.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${yd("lobbyManageEntry:kick")} ${Xd}`,
                disabled: Gd,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  Zd({
                    type: "kick",
                    name: Xd
                  }, sd)
                },
                children: [(0, Vd.jsx)(qd.c, {
                  name: "person-falling-burst"
                }), (0, Vd.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: yd("lobbyManageEntry:kick")
                })]
              }), ud.ban && (0, Vd.jsxs)(Yd.K, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${yd("lobbyManageEntry:ban")} ${Xd}`,
                disabled: Gd,
                padDestructive: !0,
                onClick: () => {
                  pd({
                    kind: "ban"
                  })
                },
                children: [(0, Vd.jsx)(qd.c, {
                  name: "gavel"
                }), (0, Vd.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: yd("lobbyManageEntry:ban")
                })]
              }), ud.unban && (0, Vd.jsxs)(Yd.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${yd("lobbyManageEntry:unban")} ${Xd}`,
                disabled: Gd,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  Zd({
                    type: "unban",
                    name: Xd
                  }, sd)
                },
                children: [(0, Vd.jsx)(qd.c, {
                  name: "user-unlock"
                }), (0, Vd.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: yd("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function zd(dd) {
      var Od, md, Fd, Rd;
      let {
        manage: Xd,
        focusRequest: Kd,
        onFocused: hd
      } = dd;
      const {
        t: vd
      } = (0, Nd.G)(), Qd = (0, pd.h)("players"), td = (0, pd.h)("hiddenPlayerNames"), od = (0, Wd.useRef)(null), {
        state: Hd
      } = Xd, bd = null === Qd.localId ? null : null !== (Od = null === (md = Qd.byId[Qd.localId]) || void 0 === md ? void 0 : md.name) && void 0 !== Od ? Od : null, [Td] = (0, Wd.useState)((() => (0, gd.s)(Hd, bd))), wd = (0, gd.m)(Td, Hd, bd), [Ed, Jd] = (0, Wd.useState)(!1), Ud = (0, gd.d)(Hd, bd), xd = Xd.statusOf("kickAll");
      (0, Wd.useEffect)((() => {
        var dd, Od;
        if (null === Kd) return;
        const md = null === (dd = od.current) || void 0 === dd ? void 0 : dd.querySelector(`[data-lobby-manage-row="${CSS.escape(Kd.name)}"]`);
        null === md || void 0 === md || md.scrollIntoView({
          block: "center"
        }), null === md || void 0 === md || null === (Od = md.querySelector(".ProfilePreview")) || void 0 === Od || Od.focus({
          preventScroll: !0
        }), hd(Kd.seq)
      }), [null === Kd || void 0 === Kd ? void 0 : Kd.seq]);
      const Bd = dd => (Od, md) => (0, Vd.jsx)(Pd, {
        name: Od,
        place: (0, gd.b)(Hd, Od),
        openedIn: dd,
        isYou: Od === bd,
        manage: Xd,
        hiddenNames: td,
        zIndex: md
      }, Od);
      return (0, Vd.jsxs)("div", {
        ref: od,
        className: "LobbyManagePage",
        children: [wd.here.length > 0 && (0, Vd.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Vd.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, Vd.jsx)(yd.e, {
              label: vd("lobbyManage:here"),
              meta: Hd.here.length
            }), Ud >= gd.p && !Ed && (0, Vd.jsxs)(Yd.K, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: Xd.isPending("kickAll"),
              onClick: () => {
                Jd(!0)
              },
              children: [(0, Vd.jsx)(qd.c, {
                name: "person-falling-burst"
              }), " ", vd("lobbyManage:kickAll")]
            })]
          }), Ed && Ud >= gd.p && (0, Vd.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, Vd.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: vd("lobbyManage:kickAllConfirm", {
                count: Ud
              })
            }), (0, Vd.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, Vd.jsx)(Yd.G, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  Jd(!1), Xd.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: vd("lobbyManage:kickAll")
              }), (0, Vd.jsx)(Yd.i, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  Jd(!1)
                },
                children: vd("general:cancel")
              })]
            })]
          }), xd && (0, Vd.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, Vd.jsx)(Ad, {
              status: xd
            })
          }), (0, Vd.jsx)(rd, {
            names: wd.here,
            cap: wd.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: Bd("here")
          })]
        }), wd.away.length > 0 && (0, Vd.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Vd.jsx)(yd.e, {
            label: vd("lobbyManage:notHere"),
            meta: wd.away.length
          }), (0, Vd.jsx)(rd, {
            names: wd.away,
            cap: 5,
            filterFrom: null,
            moreLabel: vd("lobbyManage:allCount", {
              count: wd.away.length
            }),
            reveal: null !== (Fd = null === Kd || void 0 === Kd ? void 0 : Kd.name) && void 0 !== Fd ? Fd : null,
            renderRow: Bd("away")
          })]
        }), wd.banned.length > 0 && (0, Vd.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Vd.jsx)(yd.e, {
            label: vd("lobbyManage:banned"),
            meta: wd.banned.length
          }), (0, Vd.jsx)(rd, {
            names: wd.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: vd("lobbyManage:allCount", {
              count: wd.banned.length
            }),
            reveal: null !== (Rd = null === Kd || void 0 === Kd ? void 0 : Kd.name) && void 0 !== Rd ? Rd : null,
            renderRow: Bd("banned")
          })]
        })]
      })
    }
    var cd = md(5294),
      jd = md(1768),
      Dd = md(38319),
      ed = md(38332),
      Id = md(38326),
      ld = md(38324),
      Cd = md(38353),
      Zd = md(38340),
      kd = md(38348);

    function fd(dd) {
      const Od = new Set;
      for (const md of dd) Od.add(md.toLowerCase());
      return Od
    }

    function Md(dd) {
      var Od, md;
      let {
        state: Fd,
        lobbyName: Rd,
        listed: Xd,
        isListed: Kd,
        FY: hd,
        QE: vd,
        statusOf: Qd
      } = dd;
      const {
        t: td,
        selectedLanguage: od
      } = (0, Nd.G)(), qd = (0, jd.h)(), Hd = (0, pd.h)("players"), bd = null === Hd.localId ? null : null !== (Od = null === (md = Hd.byId[Hd.localId]) || void 0 === md ? void 0 : md.name) && void 0 !== Od ? Od : null, Td = (0, Wd.useMemo)((() => (0, ld.g)(qd.friends, Rd, Fd.here.map((dd => dd.name)))), [qd.friends, Rd, Fd.here]), Yd = new Map(Td.map((dd => [dd.friend.name.toLowerCase(), dd]))), gd = function(dd) {
        let {
          refused: Od,
          listed: md,
          here: Wd,
          friends: Fd,
          excluded: Rd
        } = dd;
        const Xd = fd(Rd),
          Kd = dd => dd.filter((dd => {
            const Od = dd.toLowerCase();
            return !Xd.has(Od) && (Xd.add(Od), !0)
          }));
        return {
          added: [],
          refused: Kd(Od),
          listed: Kd(md),
          suggested: Kd([...Wd, ...Fd])
        }
      }({
        refused: Fd.refused.map((dd => dd.name)),
        listed: Xd,
        here: Fd.here.map((dd => dd.name)),
        friends: Td.flatMap((dd => "here" === dd.place ? [] : [dd.friend.name])),
        excluded: [...null === bd ? [] : [bd], ...[...Fd.here, ...Fd.away].flatMap((dd => "none" === dd.role || (0, ld.k)(Xd, dd.name) ? [] : [dd.name]))]
      }), [wd] = (0, Wd.useState)(gd), [Ud, xd] = (0, Wd.useState)([]), Bd = function(dd, Od, md) {
        const Wd = fd(md),
          Fd = fd([...md, ...dd.refused, ...dd.listed, ...dd.suggested]),
          Rd = md => [...dd[md].filter((dd => !Wd.has(dd.toLowerCase()))), ...Od[md].filter((dd => {
            const Od = dd.toLowerCase();
            return !Fd.has(Od) && (Fd.add(Od), !0)
          }))];
        return {
          added: [...md],
          refused: Rd("refused"),
          listed: Rd("listed"),
          suggested: Rd("suggested")
        }
      }(wd, gd, Ud), sd = (dd, Od) => {
        var md, Wd;
        const Rd = dd.toLowerCase(),
          Xd = Yd.get(Rd),
          vd = Fd.here.find((dd => dd.name.toLowerCase() === Rd)),
          Nd = Fd.refused.find((dd => dd.name.toLowerCase() === Rd)),
          qd = null !== (md = null === Qd || void 0 === Qd ? void 0 : Qd(dd)) && void 0 !== md ? md : null;
        let Hd = null;
        qd ? Hd = (0, Vd.jsx)(Ad, {
          status: qd
        }) : Nd ? Hd = Sd(td, od.code, "lobbyManage:triedToJoinAgo", Nd.at, Date.now()) : Xd && vd ? Hd = td("lobbyManage:friendHere") : Xd ? Hd = "online" === Xd.place ? td("lobbyManage:friendOnline") : td("lobbyManage:friend") : vd && (Hd = td("lobbyManage:hereStatus"));
        let yd = null !== (Wd = null === Xd || void 0 === Xd ? void 0 : Xd.friend) && void 0 !== Wd ? Wd : (0, Jd.g)(dd, null);
        return !Xd && null !== vd && void 0 !== vd && vd.id && (yd = (0, Ed.g)(vd.id, vd.name).playerSocialPreview), (0, Vd.jsx)(Zd.c, {
          playerSocialPreview: yd,
          isFriend: void 0 !== Xd,
          hideFriendBadge: !0,
          status: Hd,
          zIndex: Od,
          Et: {
            on: Kd(dd),
            onChange: Od => {
              hd(dd, Od)
            }
          }
        }, Rd)
      }, ud = [...Bd.added, ...Bd.refused];
      return (0, Vd.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, Vd.jsx)(yd.e, {
          label: td("worldSocial:whitelist"),
          meta: Xd.length
        }), (0, Vd.jsx)(kd.c, {
          label: td("lobbyManage:add"),
          icon: "user-check",
          placeholder: td("socialBar:enterPlayerName"),
          onSubmit: async dd => {
            const Od = await vd(dd);
            return Od.ok && xd((Od => [dd, ...Od])), Od
          }
        }), ud.length > 0 && (0, Vd.jsx)("div", {
          className: "PlayerRows",
          children: ud.map(((dd, Od) => sd(dd, ud.length - Od)))
        }), (0, Vd.jsx)(rd, {
          names: Bd.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: td("lobbyManage:allOnWhitelist", {
            count: Bd.listed.length
          }),
          renderRow: sd
        }), (0, Vd.jsx)(rd, {
          names: Bd.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: td("lobbyManage:allCount", {
            count: Bd.suggested.length
          }),
          renderRow: sd
        })]
      })
    }

    function dO(dd) {
      let {
        manage: Od,
        listing: md
      } = dd;
      const {
        t: Wd
      } = (0, Nd.G)(), Rd = (dd, md) => ((0, Fd.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: dd
      }), Od.send({
        type: "setListing",
        field: dd,
        value: md
      }, `listing:${dd}`)), Xd = dd => {
        const md = Od.statusOf(`listing:${dd}`);
        return md && !md.ok && (0, Vd.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, Vd.jsx)(Ad, {
            status: md
          })
        })
      };
      return (0, Vd.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, Vd.jsx)(yd.e, {
          label: Wd("lobbyManage:inWorldsList")
        }), (0, Vd.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Vd.jsx)("div", {
            className: "SliderText",
            children: Wd("lobbyManage:description")
          }), (0, Vd.jsx)(Gd, {
            value: md.description,
            ariaLabel: Wd("lobbyManage:description"),
            wide: !0,
            onSave: dd => Rd("description", dd)
          })]
        }), Xd("description"), (0, Vd.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Vd.jsx)("div", {
            className: "SliderText",
            children: Wd("lobbyManage:emojis")
          }), (0, Vd.jsx)(Gd, {
            value: md.emojis,
            ariaLabel: Wd("lobbyManage:emojis"),
            onSave: dd => Rd("emojis", dd)
          })]
        }), Xd("emojis"), (0, Vd.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Vd.jsx)("div", {
            className: "SliderText",
            children: Wd("lobbyManage:colour")
          }), (0, Vd.jsx)(OO, {
            value: md.colour,
            ariaLabel: Wd("lobbyManage:colour"),
            onSave: dd => {
              Rd("colour", dd)
            }
          })]
        }), Xd("colour")]
      })
    }

    function OO(dd) {
      let {
        value: Od,
        ariaLabel: md,
        onSave: Fd
      } = dd;
      const Rd = (0, Wd.useRef)(null),
        Xd = (0, Wd.useRef)({
          value: Od,
          onSave: Fd
        });
      Xd.current = {
        value: Od,
        onSave: Fd
      };
      const Kd = (0, Wd.useRef)(null),
        hd = (0, Wd.useRef)(!1),
        vd = dd => {
          hd.current && dd.value !== Xd.current.value && dd.value !== Kd.current && (Kd.current = dd.value, Xd.current.onSave(dd.value))
        };
      return (0, Wd.useEffect)((() => {
        Rd.current && document.activeElement !== Rd.current && (Rd.current.value = Od)
      }), [Od]), (0, Wd.useEffect)((() => {
        const dd = Rd.current,
          Od = () => {
            vd(dd)
          };
        return dd.addEventListener("change", Od), () => {
          dd.removeEventListener("change", Od), vd(dd)
        }
      }), []), (0, Vd.jsx)("input", {
        ref: Rd,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: Od,
        "aria-label": md,
        onInput: () => {
          hd.current = !0
        },
        onBlur: dd => {
          vd(dd.currentTarget)
        }
      })
    }

    function mO(dd) {
      let {
        manage: Od
      } = dd;
      const {
        lobbyName: md,
        shownLobbyName: Wd
      } = (0, pd.h)("connectedGame");
      return Od.state.you.canSetVisibility && null !== md ? (0, Vd.jsx)(FO, {
        manage: Od,
        lobbyName: md,
        worldCode: null !== Wd && void 0 !== Wd ? Wd : md
      }, md) : (0, Vd.jsx)(RO, {
        manage: Od,
        lobbyName: null !== md && void 0 !== md ? md : ""
      })
    }

    function WO(dd) {
      return dd.map((dd => dd.toLowerCase())).sort().join(",")
    }

    function FO(dd) {
      var Od;
      let {
        manage: md,
        lobbyName: Rd,
        worldCode: Xd
      } = dd;
      const {
        t: Kd
      } = (0, Nd.G)(), {
        settings: hd,
        loading: vd,
        change: Qd,
        retry: td,
        refresh: od
      } = (0, Dd.g)(Rd), qd = (0, jd.h)(), {
        state: bd
      } = md, Td = (0, Wd.useRef)(hd);
      Td.current = hd;
      const pd = WO(null !== (Od = bd.whitelist) && void 0 !== Od ? Od : []),
        gd = null !== bd.whitelist;
      (0, Wd.useEffect)((() => {
        const dd = Td.current;
        null !== dd && (dd.visibility !== bd.visibility || gd && WO(dd.whitelist) !== pd) && od()
      }), [bd.visibility, pd, gd, od]);
      const wd = async (dd, Od) => {
        let md = null;
        return await Qd(dd, Od, {
          quiet: !0,
          onAnswer: dd => {
            md = dd
          }
        }), md
      }, Ed = (dd, Od) => {
        null !== Od && "error" in Od && md.showStatus(dd, {
          ok: !1,
          text: [Kd(Od.error)]
        })
      }, Jd = async dd => {
        if (null === hd || dd === hd.visibility) return;
        (0, Fd.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: dd
        });
        const Od = "whitelist" === dd ? (0, ld.e)((0, ld.g)(qd.friends, Rd, bd.here.map((dd => dd.name))), (0, Cd.b)(Rd), hd.whitelist) : [],
          md = await wd({
            setVisibility: dd
          }, (Od => ({
            ...Od,
            visibility: dd
          })));
        Ed("mode", md), null === md || "error" in md || await (async dd => {
          for (const Od of (0, ld.m)(dd, cd.C))
            if (!await Qd({
                whitelistAdd: Od
              }, (dd => (0, ld.s)(dd, Od, !0)))) return !1;
          return !0
        })(Od)
      }, Ud = (0, Wd.useMemo)((() => {
        var dd;
        if (null === hd) return [];
        const Od = null !== (dd = bd.whitelist) && void 0 !== dd ? dd : [];
        return [...Od.filter((dd => (0, ld.k)(hd.whitelist, dd))), ...hd.whitelist.filter((dd => !(0, ld.k)(Od, dd)))]
      }), [hd, bd.whitelist]), xd = md.statusOf("mode");
      return (0, Vd.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Vd.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Vd.jsx)(yd.e, {
            label: Kd("worldSocial:whoCanJoin")
          }), null === hd && vd && (0, Vd.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Vd.jsx)(Hd.c, {})
          }), null === hd && !vd && (0, Vd.jsx)(Yd.i, {
            className: "SmallTextLight",
            onClick: td,
            children: Kd("worldSocial:loadFailed")
          }), null !== hd && (0, Vd.jsx)(ed.e, {
            visibility: hd.visibility,
            onPick: dd => {
              Jd(dd)
            }
          }), xd && (0, Vd.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, Vd.jsx)(Ad, {
              status: xd
            })
          }), null !== hd && "private" !== hd.visibility && (0, Vd.jsx)(Id.e, {
            worldCode: Xd,
            message: null
          })]
        }), "whitelist" === (null === hd || void 0 === hd ? void 0 : hd.visibility) && (0, Vd.jsx)(Md, {
          state: bd,
          lobbyName: Rd,
          listed: Ud,
          isListed: dd => (0, ld.k)(hd.whitelist, dd),
          FY: (dd, Od) => {
            (0, Fd.reportAnalyticsClick)(Od ? {
              id: "lobby_manage.whitelist_add",
              value: "Et"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), wd(Od ? {
              whitelistAdd: [dd]
            } : {
              whitelistRemove: dd
            }, (md => (0, ld.s)(md, [dd], Od))).then((Od => {
              Ed(`whitelist:${dd.toLowerCase()}`, Od)
            }))
          },
          QE: async dd => {
            (0, Fd.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Od = await wd({
              whitelistAdd: [dd]
            }, (Od => (0, ld.s)(Od, [dd], !0)));
            return null === Od ? {
              ok: !1,
              error: Kd("worldSocial:changeFailed")
            } : "error" in Od ? {
              ok: !1,
              error: Kd(Od.error)
            } : (0, ld.k)(Od.notFound, dd) ? {
              ok: !1,
              error: Kd("lobbyManage:noPlayerCalled", {
                playerName: dd
              })
            } : {
              ok: !0
            }
          },
          statusOf: dd => md.statusOf(`whitelist:${dd.toLowerCase()}`)
        }), "public" === (null === hd || void 0 === hd ? void 0 : hd.visibility) && null !== bd.listing && (0, Vd.jsx)(dO, {
          manage: md,
          listing: bd.listing
        })]
      })
    }

    function RO(dd) {
      var Od;
      let {
        manage: md,
        lobbyName: Wd
      } = dd;
      const {
        t: Rd
      } = (0, Nd.G)(), {
        state: Xd
      } = md, Kd = Qd(), hd = null !== (Od = Xd.whitelist) && void 0 !== Od ? Od : [];
      return (0, Vd.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Vd.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Vd.jsx)(yd.e, {
            label: Rd("worldSocial:whoCanJoin")
          }), (0, Vd.jsx)("div", {
            className: "LobbyManageModeText",
            children: Rd(`worldSocial:${Xd.visibility}`)
          })]
        }), "whitelist" === Xd.visibility && Xd.you.canEditWhitelist && (0, Vd.jsx)(Md, {
          state: Xd,
          lobbyName: Wd,
          listed: hd,
          isListed: dd => {
            var Od;
            return null !== (Od = Kd.get(dd.toLowerCase())) && void 0 !== Od ? Od : (0, ld.k)(hd, dd)
          },
          FY: (dd, Od) => {
            (0, Fd.reportAnalyticsClick)(Od ? {
              id: "lobby_manage.whitelist_add",
              value: "Et"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const Wd = dd.toLowerCase();
            Kd.hold(Wd, Od, md.send(Od ? {
              type: "whitelistAdd",
              names: [dd]
            } : {
              type: "whitelistRemove",
              name: dd
            }, `whitelist:${Wd}`))
          },
          QE: async dd => {
            (0, Fd.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Od = await md.send({
              type: "whitelistAdd",
              names: [dd]
            }, "whitelist-field");
            return Od.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, Vd.jsx)(sd.d, {
                text: Od.message
              })
            }
          },
          statusOf: dd => md.statusOf(`whitelist:${dd.toLowerCase()}`)
        }), "public" === Xd.visibility && null !== Xd.listing && (0, Vd.jsx)(dO, {
          manage: md,
          listing: Xd.listing
        })]
      })
    }
    var XO = md(5901),
      KO = md(1471);
    const hO = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const vO = (0, Wd.memo)((function(dd) {
      var Od;
      let {
        rule: md,
        value: Wd,
        status: Fd,
        pending: Rd,
        hiddenNames: Xd,
        dU: Kd,
        onAction: hd
      } = dd;
      const {
        t: vd
      } = (0, Nd.G)(), Qd = dd => Kd(md, dd), td = (dd, Od) => {
        hd(md, dd, Od)
      }, od = Bd(vd, md.label, Xd), qd = md.info ? Bd(vd, md.info, Xd) : void 0, Hd = md.placeholder ? Bd(vd, md.placeholder, Xd) : void 0, yd = (null !== (Od = md.options) && void 0 !== Od ? Od : []).map((dd => ({
        value: dd.value,
        label: Bd(vd, dd.label, Xd)
      }))), bd = Math.max(0, ...yd.map((dd => function(dd) {
        let Od = 0;
        for (const md of dd) Od += hO.test(md) ? 2 : 1;
        return Od
      }(dd.label)))), Td = Fd && (0, Vd.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, Vd.jsx)(Ad, {
          status: Fd
        })
      }), pd = (0, Vd.jsxs)("div", {
        className: "SliderText",
        children: [od, void 0 !== qd && (0, Vd.jsx)(KO.d, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: qd
        })]
      });
      return "toggle" === md.kind ? (0, Vd.jsxs)(Vd.Fragment, {
        children: [(0, Vd.jsx)(XO.e, {
          label: od,
          checked: !0 === Wd,
          circleInfoText: qd,
          disabled: Rd,
          onClick: Qd
        }), Td]
      }) : "choice" === md.kind && yd.length <= 3 ? (0, Vd.jsxs)(Vd.Fragment, {
        children: [(0, Vd.jsx)(XO.h, {
          label: od,
          options: yd,
          value: String(Wd),
          circleInfoText: qd,
          onChange: Qd
        }), Td]
      }) : (0, Vd.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [pd, "choice" === md.kind && (0, Vd.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": bd
          },
          children: (0, Vd.jsx)(Ud.e, {
            options: yd,
            value: String(Wd),
            disabled: Rd,
            revealOnOpen: !0,
            onChange: dd => {
              Qd(dd.value)
            }
          })
        }), ("number" === md.kind || "text" === md.kind) && (0, Vd.jsx)(Gd, {
          value: null === Wd ? "" : String(Wd),
          placeholder: Hd,
          ariaLabel: od,
          onSave: dd => {
            const Od = dd.trim(),
              Wd = Number(Od);
            return Qd("number" === md.kind && "" !== Od && Number.isFinite(Wd) ? Wd : Od)
          }
        }), "action" === md.kind && (0, Vd.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [yd.length > 3 && (0, Vd.jsx)(Ud.e, {
            options: yd,
            value: {
              value: "",
              label: null !== Hd && void 0 !== Hd ? Hd : od
            },
            disabled: Rd,
            revealOnOpen: !0,
            onChange: dd => {
              td(dd.value)
            }
          }), yd.length > 0 && yd.length <= 3 && yd.map((dd => (0, Vd.jsx)(Yd.i, {
            className: "SmallTextLight",
            disabled: Rd,
            onClick: () => {
              td(dd.value)
            },
            children: dd.label
          }, dd.value))), 0 === yd.length && (0, Vd.jsx)(Yd.i, {
            className: "SmallTextLight",
            disabled: Rd,
            onClick: () => {
              td()
            },
            children: null !== Hd && void 0 !== Hd ? Hd : od
          })]
        }), "names" === md.kind && (0, Vd.jsx)(QO, {
          names: Array.isArray(Wd) ? Wd : [],
          pending: Rd,
          onAction: td
        }), Td]
      })
    }));

    function QO(dd) {
      let {
        names: Od,
        pending: md,
        onAction: Fd
      } = dd;
      const {
        t: Rd
      } = (0, Nd.G)(), Xd = (0, Wd.useRef)(null), [Kd, hd] = (0, Wd.useState)(""), vd = () => {
        const dd = Kd.trim();
        "" !== dd && (Fd(dd, "add"), Xd.current && (Xd.current.value = ""), hd(""))
      };
      return (0, Vd.jsxs)("div", {
        className: "LobbyManageNames",
        children: [Od.map((dd => (0, Vd.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, Vd.jsx)("span", {
            className: "LobbyManageNameText",
            children: dd
          }), (0, Vd.jsx)(Yd.i, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: Rd("lobbyManage:removeName", {
              name: dd
            }),
            disabled: md,
            onClick: () => {
              Fd(dd, "remove")
            },
            children: (0, Vd.jsx)(qd.c, {
              name: "xmark"
            })
          })]
        }, dd))), (0, Vd.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, Vd.jsx)(ud.c, {
            domRef: Xd,
            placeholderText: Rd("lobbyManage:namePlaceholder"),
            ariaLabel: Rd("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: dd => {
              hd(dd)
            },
            onEnter: vd
          }), (0, Vd.jsx)(Yd.i, {
            className: "SmallTextLight",
            disabled: md || "" === Kd.trim(),
            onClick: vd,
            children: Rd("lobbyManage:addHere")
          })]
        })]
      })
    }
    const tO = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function oO(dd, Od) {
      return tO.map((md => {
        let {
          group: Wd,
          title: Fd
        } = md;
        const Rd = dd.filter((dd => dd.group === Wd && void 0 === dd.parent)).map((md => {
          const Wd = !0 === Od(md) ? dd.filter((dd => dd.parent === md.key)) : [];
          return {
            rule: md,
            children: Wd
          }
        }));
        return {
          group: Wd,
          title: Fd,
          items: Rd
        }
      }))
    }

    function NO(dd) {
      return dd.flatMap((dd => {
        let {
          items: Od
        } = dd;
        return Od.flatMap((dd => {
          let {
            rule: Od,
            children: md
          } = dd;
          return [Od, ...md]
        }))
      }))
    }

    function qO(dd) {
      let {
        manage: Od,
        rowsShown: md
      } = dd;
      const {
        t: Rd
      } = (0, Nd.G)(), Xd = (0, pd.h)("hiddenPlayerNames"), {
        rules: Kd
      } = Od.state, hd = Qd(), vd = dd => {
        const Od = hd.get(dd.key);
        return void 0 === Od ? dd.value : Od
      }, td = oO(Kd, vd), [od] = (0, Wd.useState)((() => NO(td).map((dd => dd.key)))), qd = md === 1 / 0 ? null : new Set(od.slice(0, md)), Hd = dd => null === qd || qd.has(dd.key), {
        hold: bd
      } = hd, Td = (0, Wd.useCallback)(((dd, md) => {
        (0, Fd.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: dd.key
        });
        const Wd = Od.send({
          type: "setRule",
          key: dd.key,
          value: md
        }, `rule:${dd.key}`);
        return bd(dd.key, md, Wd), Wd
      }), [Od, bd]), Yd = (0, Wd.useCallback)(((dd, md, Wd) => {
        (0, Fd.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: dd.key
        }), Od.send({
          type: "ruleAction",
          key: dd.key,
          ...void 0 === md ? {} : {
            arg: md
          },
          ...void 0 === Wd ? {} : {
            op: Wd
          }
        }, `rule:${dd.key}`, void 0 === Wd ? Rd("lobbyManage:setJustNow") : void 0)
      }), [Od, Rd]), gd = dd => {
        const md = `rule:${dd.key}`;
        return (0, Vd.jsx)(vO, {
          rule: dd,
          value: vd(dd),
          status: Od.statusOf(md),
          pending: Od.isPending(md),
          hiddenNames: Xd,
          dU: Td,
          onAction: Yd
        }, dd.key)
      };
      return (0, Vd.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: td.map((dd => {
          let {
            group: Od,
            title: md,
            items: Fd
          } = dd;
          const Xd = Fd.filter((dd => {
            let {
              rule: Od
            } = dd;
            return Hd(Od)
          }));
          return 0 === Xd.length ? null : (0, Vd.jsxs)(Wd.Fragment, {
            children: [(0, Vd.jsx)(yd.e, {
              label: Rd(md)
            }), Xd.map((dd => {
              let {
                rule: Od,
                children: md
              } = dd;
              return 0 === md.length ? gd(Od) : (0, Vd.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [gd(Od), md.filter(Hd).map(gd)]
              }, Od.key)
            }))]
          }, Od)
        }))
      })
    }
    const HO = {
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
      yO = 5,
      bO = (0, Wd.memo)((function(dd) {
        let {
          page: Od,
          manage: md,
          leaderboard: Fd,
          focusRequest: Rd,
          onFocused: Xd,
          ruleRowsShown: Kd
        } = dd;
        return "leaderboard" === Od ? (0, Vd.jsx)(Wd.Suspense, {
          fallback: (0, Vd.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Vd.jsx)(Hd.c, {})
          }),
          children: Fd
        }) : "joining" === Od ? (0, Vd.jsx)(mO, {
          manage: md
        }) : "rules" === Od ? (0, Vd.jsx)(qO, {
          manage: md,
          rowsShown: Kd
        }) : (0, Vd.jsx)(zd, {
          manage: md,
          focusRequest: Rd,
          onFocused: Xd
        })
      }));

    function TO(dd) {
      let {
        page: Od
      } = dd;
      const {
        t: md
      } = (0, Nd.G)(), Wd = HO[Od];
      return (0, Vd.jsxs)(Vd.Fragment, {
        children: [(0, Vd.jsx)(qd.c, {
          name: Wd.icon
        }), " ", (0, Vd.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: md(Wd.title)
        })]
      })
    }

    function pO(dd) {
      var Od;
      const {
        t: md
      } = (0, Nd.G)(), {
        pages: Rd,
        landing: Xd
      } = dd, hd = (0, Wd.useRef)(null), vd = (0, Wd.useRef)(null), Qd = (0, Wd.useRef)(null), td = (0, Wd.useRef)(new Map), [qd, Hd] = (0, Wd.useState)(null), pd = (0, Wd.useRef)(qd), Yd = (0, Wd.useRef)(0), [gd, wd] = (0, Wd.useState)(Rd[0]), Ed = null !== qd && void 0 !== qd ? qd : Rd.includes(gd) ? gd : Rd[0], [Jd] = (0, Wd.useState)(null !== (Od = null === Xd || void 0 === Xd ? void 0 : Xd.page) && void 0 !== Od ? Od : null), Ud = null !== Jd && Rd.includes(Jd) ? [Jd, ...Rd.filter((dd => dd !== Jd))] : Rd, [xd] = (0, Wd.useState)((() => {
        const Od = NO(oO(dd.manage.state.rules, (dd => dd.value)));
        return Math.max(1, Math.ceil(Od.length / yO))
      })), Bd = Ud.flatMap((dd => "rules" === dd ? Array(xd).fill(dd) : [dd])), Sd = function(dd, Od) {
        const [md, Fd] = (0, Wd.useState)(dd), Rd = md >= Od;
        return Rd && md !== 1 / 0 && Fd(1 / 0), (0, Wd.useLayoutEffect)((() => {
          if (Rd) return;
          let dd = !0;
          return (0, Td.e)().then((() => {
            dd && Fd((dd => dd + 1))
          })), () => {
            dd = !1
          }
        }), [md, Rd]), Rd ? 1 / 0 : md
      }(1, Bd.length), sd = Bd.slice(0, Sd), ud = new Set(sd), Ad = Sd < Bd.length, rd = Ad ? sd.filter((dd => "rules" === dd)).length * yO : 1 / 0, Gd = (0, Wd.useRef)(dd.focusRequest);
      Gd.current = dd.focusRequest;
      const nd = dd => {
          pd.current = dd, Hd(dd)
        },
        Ld = () => {
          var dd, Od;
          hd.current.style.scrollPaddingTop = `${null!==(dd=null===(Od=Qd.current)||void 0===Od?void 0:Od.offsetHeight)&&void 0!==dd?dd:0}px`
        },
        Pd = dd => {
          const Od = hd.current,
            md = td.current.get(dd);
          if (void 0 === md) return;
          const Wd = document.activeElement,
            Fd = Gd.current,
            Rd = null === Fd ? null : md.querySelector(`[data-lobby-manage-row="${CSS.escape(Fd.name)}"]`);
          Ld(), Wd instanceof HTMLElement && null !== Rd && void 0 !== Rd && Rd.contains(Wd) ? Wd.scrollIntoView({
            block: "center"
          }) : null === md.previousElementSibling ? Od.scrollTop = 0 : md.scrollIntoView({
            block: "start"
          }), Yd.current = Od.scrollTop
        },
        zd = dd => {
          (0, Fd.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: dd
          }), nd(dd), Pd(dd)
        },
        cd = () => {
          var dd, Od;
          const md = hd.current,
            Wd = md.getBoundingClientRect().top + (null !== (dd = null === (Od = Qd.current) || void 0 === Od ? void 0 : Od.offsetHeight) && void 0 !== dd ? dd : 0),
            Fd = Rd.map((dd => {
              var Od, md;
              return (null !== (Od = null === (md = td.current.get(dd)) || void 0 === md ? void 0 : md.getBoundingClientRect().top) && void 0 !== Od ? Od : 1 / 0) - Wd
            })),
            Xd = !Ad && md.scrollTop + md.clientHeight >= md.scrollHeight - 1;
          wd(Rd[(0, Kd.i)(Fd, Xd)])
        },
        jd = () => {
          null !== pd.current && (nd(null), cd())
        };
      (0, Wd.useLayoutEffect)((() => {
        null !== Xd && Rd.includes(Xd.page) && zd(Xd.page)
      }), [null === Xd || void 0 === Xd ? void 0 : Xd.seq]), (0, Wd.useLayoutEffect)((() => {
        null === pd.current || Rd.includes(pd.current) || jd()
      }));
      const {
        onFocused: Dd
      } = dd, ed = (0, Wd.useCallback)((dd => {
        null !== pd.current && Pd(pd.current), Dd(dd)
      }), [Dd]);
      (0, Wd.useLayoutEffect)((() => {
        const dd = pd.current;
        null !== dd && (!Ad || Rd.indexOf(Bd[Sd - 1]) < Rd.indexOf(dd)) && Pd(dd)
      }), [Sd]), (0, Wd.useEffect)((() => {
        const dd = new ResizeObserver((() => {
          null !== pd.current ? Pd(pd.current) : Ld()
        }));
        return dd.observe(hd.current), dd.observe(vd.current), () => {
          dd.disconnect()
        }
      }), []), (0, Wd.useLayoutEffect)((() => {
        const dd = Qd.current,
          Od = null === dd || void 0 === dd ? void 0 : dd.querySelector(".SegmentedToggleOptionSelected");
        Od && (dd.scrollLeft = Math.min(Od.offsetLeft, Math.max(dd.scrollLeft, Od.offsetLeft + Od.offsetWidth - dd.clientWidth)))
      }), [Ed]);
      return (0, Vd.jsxs)("div", {
        ref: hd,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === pd.current ? cd() : Math.abs(hd.current.scrollTop - Yd.current) > 1 && jd()
        },
        onClick: dd => {
          var Od;
          null !== (Od = Qd.current) && void 0 !== Od && Od.contains(dd.target) || jd()
        },
        onFocus: dd => {
          var Od;
          const md = null === pd.current ? null : td.current.get(pd.current);
          !md || md.contains(dd.target) || null !== (Od = Qd.current) && void 0 !== Od && Od.contains(dd.target) || jd()
        },
        children: [Rd.length > 1 && (0, Vd.jsx)("div", {
          ref: Qd,
          className: "LobbyManageChips",
          children: (0, Vd.jsx)(bd.e, {
            options: Rd.map((dd => ({
              value: dd,
              label: (0, Vd.jsx)(TO, {
                page: dd
              }),
              ariaLabel: md(HO[dd].title)
            }))),
            value: Ed,
            padTabs: "2",
            ariaLabel: md("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: zd
          })
        }), (0, Vd.jsx)("div", {
          ref: vd,
          className: od()("LobbyManageInner", {
            Staging: Ad
          }),
          children: Rd.filter((dd => ud.has(dd))).map((Od => {
            const md = Od === qd;
            return (0, Vd.jsxs)("section", {
              ref: dd => {
                dd ? td.current.set(Od, dd) : td.current.delete(Od)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": md || void 0,
              children: [Rd.length > 1 && (0, Vd.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": md || void 0,
                "data-pad-unavailable": md || void 0,
                children: (0, Vd.jsx)(yd.e, {
                  label: (0, Vd.jsx)(TO, {
                    page: Od
                  })
                })
              }), (0, Vd.jsx)(bO, {
                page: Od,
                manage: dd.manage,
                leaderboard: dd.leaderboard,
                focusRequest: dd.focusRequest,
                onFocused: ed,
                ruleRowsShown: "rules" === Od ? rd : 1 / 0
              })]
            }, Od)
          }))
        })]
      })
    }

    function YO(dd) {
      return void 0 === (null === dd || void 0 === dd ? void 0 : dd.page) ? null : {
        page: dd.page,
        seq: dd.seq
      }
    }

    function gO(dd) {
      let {
        leaderboard: Od
      } = dd;
      const md = function() {
          const dd = (0, hd.j)("lobbyManage"),
            [Od, md] = (0, Wd.useReducer)((dd => dd + 1), 0),
            [Fd] = (0, Wd.useState)((() => new vd.e(md)));
          return (0, Wd.useEffect)((() => {
            const dd = Fd.nextDeadline();
            if (null === dd) return;
            const Od = setTimeout((() => {
              Fd.expire(Date.now()), md()
            }), Math.max(0, dd - Date.now()));
            return () => {
              clearTimeout(Od)
            }
          })), (0, Wd.useMemo)((() => null === dd ? null : {
            state: dd,
            send: (dd, Od, Wd) => {
              const Rd = Fd.send(dd, Od, null !== Wd && void 0 !== Wd ? Wd : null);
              return md(), Rd
            },
            statusOf: dd => Fd.statusOf(dd, Date.now()),
            showStatus: (dd, Od) => {
              Fd.show(dd, Od)
            },
            isPending: dd => Fd.isPending(dd)
          }), [dd, Od, Fd])
        }(),
        Qd = (0, Kd.k)((0, Rd.d)()),
        td = (0, Xd.k)(),
        [od, Nd] = (0, Wd.useState)((() => YO(td))),
        [qd, Hd] = (0, Wd.useState)(null);
      return (0, Wd.useEffect)((() => {
        null === td && (0, Fd.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, Wd.useEffect)((() => {
        null !== td && (Nd((dd => (null === dd || void 0 === dd ? void 0 : dd.seq) === td.seq ? dd : YO(td))), void 0 !== td.focusName && "players" === td.page ? Hd({
          name: td.focusName,
          seq: td.seq
        }) : (0, Xd.h)(td.seq))
      }), [null === td || void 0 === td ? void 0 : td.seq]), null === md ? null : (0, Vd.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, Vd.jsx)(pO, {
          pages: (0, Kd.e)(md.state, Qd),
          manage: md,
          leaderboard: Od,
          focusRequest: qd,
          onFocused: Xd.h,
          landing: od
        })
      })
    }
  },
  38211: (dd, Od, md) => {
    md.d(Od, {
      e: () => Qd,
      i: () => hd
    });
    var Wd = md(1605),
      Fd = md(2116),
      Rd = md(2092);
    const Xd = 1e4;
    let Kd = 0;

    function hd(dd) {
      const Od = ++Kd;
      return new Promise((md => {
        const Kd = Od => {
            hd(), clearTimeout(vd), !1 === (null === Od || void 0 === Od ? void 0 : Od.ok) && (0, Wd.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: dd.type
            }), md(Od)
          },
          hd = Fd.e.subscribe("lobbyManage", (dd => {
            const md = function(dd, Od) {
              var md;
              return null !== (md = null === dd || void 0 === dd ? void 0 : dd.results.find((dd => dd.requestId === Od))) && void 0 !== md ? md : null
            }(dd, Od);
            null !== md && Kd(md)
          })),
          vd = setTimeout((() => {
            Kd(null)
          }), Xd);
        Rd.gameBridge.send("lobbyManage", {
          ...dd,
          requestId: Od
        })
      }))
    }
    const vd = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class Qd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hd;
        this.onChange = dd, this.sendAction = Od, this.pending = new Map, this.statuses = new Map
      }
      send(dd, Od, md) {
        var Wd;
        return this.statuses.delete(Od), this.pending.set(Od, (null !== (Wd = this.pending.get(Od)) && void 0 !== Wd ? Wd : 0) + 1), this.sendAction(dd).then((dd => {
          var Wd;
          const Fd = null !== dd && void 0 !== dd ? dd : {
              requestId: -1,
              ok: !1,
              message: vd
            },
            Rd = (null !== (Wd = this.pending.get(Od)) && void 0 !== Wd ? Wd : 1) - 1;
          Rd > 0 ? this.pending.set(Od, Rd) : this.pending.delete(Od);
          const Xd = !Fd.ok || Fd.message.length > 0 ? Fd.message : null === md ? null : [md];
          return null !== Xd && this.statuses.set(Od, {
            ok: Fd.ok,
            text: Xd,
            until: Date.now() + 4e3
          }), this.onChange(), Fd
        }))
      }
      show(dd, Od) {
        this.statuses.set(dd, {
          ...Od,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(dd) {
        for (const [Od, md] of this.statuses) md.until <= dd && this.statuses.delete(Od)
      }
      nextDeadline() {
        let dd = null;
        for (const md of this.statuses.values()) {
          var Od;
          dd = Math.min(null !== (Od = dd) && void 0 !== Od ? Od : 1 / 0, md.until)
        }
        return dd
      }
      statusOf(dd, Od) {
        const md = this.statuses.get(dd);
        return !md || md.until <= Od ? null : {
          ok: md.ok,
          text: md.text
        }
      }
      isPending(dd) {
        return this.pending.has(dd)
      }
    }
  },
  38215: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      d: () => td,
      g: () => Qd,
      j: () => vd,
      m: () => Xd,
      p: () => Wd,
      s: () => Rd
    });
    const Wd = 2;

    function Fd(dd, Od, md) {
      const Wd = dd.filter((dd => dd.name !== Od)),
        Fd = Wd.filter((dd => "none" === dd.role)).sort(((dd, Od) => Od.at - dd.at)),
        Rd = Wd.filter((dd => "none" !== dd.role)).sort(((dd, Od) => md.indexOf(dd.role) - md.indexOf(Od.role) || Od.at - dd.at));
      return [...dd.some((dd => dd.name === Od)) && null !== Od ? [Od] : [], ...[...Fd, ...Rd].map((dd => dd.name))]
    }

    function Rd(dd, Od) {
      const md = dd.banned.map((dd => dd.name)),
        Wd = new Set(md);
      return {
        here: Fd(dd.here, Od, dd.roles.map((dd => dd.role))),
        away: dd.away.filter((dd => !Wd.has(dd.name))).map((dd => dd.name)),
        banned: md
      }
    }

    function Xd(dd, Od, md) {
      const Wd = new Set([...dd.here, ...dd.away, ...dd.banned]),
        Fd = Rd(Od, md),
        Xd = Od => {
          const md = Fd[Od].filter((dd => !Wd.has(dd)));
          for (const dd of md) Wd.add(dd);
          return [...dd[Od], ...md]
        };
      return {
        here: Xd("here"),
        away: Xd("away"),
        banned: Xd("banned")
      }
    }

    function Kd(dd, Od) {
      const md = dd.here.find((dd => dd.name === Od));
      if (md) return {
        section: "here",
        player: md
      };
      const Wd = dd.banned.find((dd => dd.name === Od));
      if (Wd) return {
        section: "banned",
        bannedAt: Wd.at
      };
      const Fd = dd.away.find((dd => dd.name === Od));
      return Fd ? {
        section: "away",
        player: Fd
      } : {
        section: "gone"
      }
    }
    const hd = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };

    function vd(dd) {
      const Od = dd.can.roles.filter((Od => "none" !== Od || "none" !== dd.role));
      return Od.some((Od => Od !== dd.role)) ? Od : []
    }

    function Qd(dd, Od) {
      if ("banned" === dd.section) return {
        ...hd,
        unban: !0
      };
      if ("gone" === dd.section) return hd;
      const {
        player: md
      } = dd, Wd = "here" === dd.section, Fd = vd(md), Rd = Wd && Od && null !== md.gamemode && md.can.gamemode;
      return {
        gamemode: Rd,
        roles: Fd,
        fixedRole: 0 !== Fd.length || "none" === md.role && !Rd ? null : md.role,
        kick: Wd && md.can.kick,
        ban: md.can.ban,
        unban: !1
      }
    }

    function td(dd, Od) {
      return dd.here.filter((dd => dd.name !== Od && "none" === dd.role && dd.can.kick)).length
    }
  },
  38348: (dd, Od, md) => {
    md.d(Od, {
      c: () => td
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(1808),
      Kd = md(1572),
      hd = md(1436),
      vd = md(1443),
      Qd = md(1341);

    function td(dd) {
      let {
        label: Od,
        icon: md,
        placeholder: Fd,
        onSubmit: td
      } = dd;
      const od = (0, Wd.useRef)(null),
        [Nd, qd] = (0, Wd.useState)(""),
        [Hd, yd] = (0, Wd.useState)("Enter"),
        [bd, Td] = (0, Wd.useState)(null);
      (0, Wd.useEffect)((() => {
        if ("Success" !== Hd && "Error" !== Hd) return;
        const dd = setTimeout((() => {
          "Success" === Hd && od.current && (od.current.value = "", qd("")), yd("Enter")
        }), "Success" === Hd ? 1e3 : 4e3);
        return () => {
          clearTimeout(dd)
        }
      }), [Hd]);
      const pd = () => {
        const dd = Nd.trim();
        "" !== dd && "Enter" === Hd && (yd("Loading"), td(dd).then((dd => {
          od.current && ("error" in dd ? null === dd.error ? yd("Enter") : (Td(dd.error), yd("Error")) : yd("Success"))
        })))
      };
      return (0, Qd.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: dd => {
          dd.target === od.current && "Escape" !== dd.key && dd.stopPropagation()
        },
        children: [(0, Qd.jsxs)("div", {
          className: Rd()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Hd}`),
          children: ["Loading" === Hd && (0, Qd.jsx)(hd.c, {}), "Success" === Hd && (0, Qd.jsx)(vd.c, {
            name: "check"
          }), "Error" === Hd && bd]
        }), (0, Qd.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, Qd.jsx)(Xd.c, {
            className: "PlayerSearchInput",
            domRef: od,
            maxLength: 32,
            placeholderText: Fd,
            ariaLabel: Fd,
            stopPropagation: !1,
            onValueChange: dd => {
              qd(dd)
            },
            onEnter: pd
          }), (0, Qd.jsxs)(Kd.g, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Hd || "" === Nd.trim(),
            onClick: pd,
            children: [(0, Qd.jsx)(vd.c, {
              name: md
            }), " ", Od]
          })]
        })]
      })
    }
  },
  38332: (dd, Od, md) => {
    md.d(Od, {
      e: () => td
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(1238),
      Kd = md(1443),
      hd = md(1341);
    const vd = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Qd = ["unlisted", "public", "whitelist", "private"];

    function td(dd) {
      let {
        visibility: Od,
        onPick: md
      } = dd;
      const {
        t: Fd
      } = (0, Xd.G)(), td = (0, Wd.useRef)([]);
      return (0, hd.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Fd("worldSocial:whoCanJoin"),
        children: Qd.map(((dd, Wd) => {
          const Xd = dd === Od;
          return (0, hd.jsxs)("button", {
            ref: dd => {
              td.current[Wd] = dd
            },
            type: "button",
            className: Rd()("WorldSocialTile", {
              WorldSocialTileSelected: Xd
            }),
            "aria-pressed": Xd,
            tabIndex: Xd ? 0 : -1,
            onKeyDown: dd => {
              ((dd, Od) => {
                const md = "ArrowRight" === dd.key || "ArrowDown" === dd.key ? 1 : "ArrowLeft" === dd.key || "ArrowUp" === dd.key ? -1 : 0;
                var Wd;
                0 !== md && (dd.preventDefault(), null === (Wd = td.current[(Od + md + Qd.length) % Qd.length]) || void 0 === Wd || Wd.focus())
              })(dd, Wd)
            },
            onClick: () => {
              md(dd)
            },
            children: [(0, hd.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, hd.jsx)(Kd.c, {
                name: vd[dd]
              })
            }), (0, hd.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, hd.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Fd(`worldSocial:${dd}`)
              }), (0, hd.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Fd(`worldSocial:${dd}Description`)
              })]
            })]
          }, dd)
        }))
      })
    }
  },
  38340: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd
    });
    var Wd = md(1238),
      Fd = md(3720),
      Rd = md(5003),
      Xd = md(1341);

    function Kd(dd) {
      let {
        Et: Od,
        children: md,
        ...Kd
      } = dd;
      const {
        t: hd
      } = (0, Wd.G)();
      return (0, Xd.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          Od.onChange(!Od.on)
        },
        children: (0, Xd.jsx)(Fd.e, {
          ...Kd,
          opensProfileCard: !1,
          children: (0, Xd.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: dd => {
              dd.stopPropagation()
            },
            children: [md, (0, Xd.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, Xd.jsx)(Rd.d, {
                checked: Od.on,
                disabled: !1,
                ariaLabel: hd("worldSocial:letJoin", {
                  playerName: Kd.playerSocialPreview.name
                }),
                onChange: dd => {
                  Od.onChange(dd.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  38326: (dd, Od, md) => {
    md.d(Od, {
      e: () => qd
    });
    var Wd = md(66),
      Fd = md(1238),
      Rd = md(2010),
      Xd = md(107),
      Kd = md(29),
      hd = md(1605),
      vd = md(3747),
      Qd = md(35430),
      td = md(1572),
      od = md(1443),
      Nd = md(1341);

    function qd(dd) {
      let {
        worldCode: Od,
        message: md
      } = dd;
      const {
        t: qd
      } = (0, Fd.G)(), {
        isTouchScreen: Hd
      } = (0, Kd.p)(["isTouchScreen"]), yd = Xd.featureFlags.canUseInviteLinks, bd = (0, Qd.g)(yd && null === md), [Td, pd] = (0, vd.i)(), Yd = (0, Wd.useRef)(null);
      if (null !== md) return (0, Nd.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Nd.jsx)(od.c, {
          name: "lock"
        }), (0, Nd.jsx)("span", {
          children: md
        })]
      });
      const gd = yd ? bd : Od,
        wd = Hd && yd && (0, vd.d)();
      return (0, Nd.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!yd && (0, Nd.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: qd("worldSocial:worldCode")
        }), (0, Nd.jsx)("input", {
          ref: Yd,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== gd && void 0 !== gd ? gd : "",
          "aria-label": qd(yd ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: dd => {
            dd.currentTarget.select()
          }
        }), (0, Nd.jsxs)(td.g, {
          className: "WorldSocialCopy",
          disabled: null === gd,
          onClick: () => {
            null !== gd && (0, vd.h)(gd, {
              useShareSheet: wd,
              onOutcome: dd => {
                if ((0, hd.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== dd || yd ? dd : "code"
                  }), "copied" === dd) pd();
                else if ("failed" === dd) {
                  var Od;
                  null === (Od = Yd.current) || void 0 === Od || Od.focus(), Rd.g.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Nd.jsx)(od.c, {
            name: Td ? "check" : wd ? "up-from-bracket" : "copy"
          }), " ", qd(Td ? "general:copied" : wd ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  38337: (dd, Od, md) => {
    md.d(Od, {
      b: () => Nd,
      c: () => od,
      g: () => td
    });
    var Wd = md(689),
      Fd = md(1238),
      Rd = md(1768),
      Xd = md(3720),
      Kd = md(3662),
      hd = md(1572),
      vd = md(38340),
      Qd = md(1341);

    function td(dd, Od) {
      var md;
      return {
        isError: !1,
        name: dd,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== Od && void 0 !== Od ? Od : {},
        nameColour: null !== (md = null === Od || void 0 === Od ? void 0 : Od.nameColour) && void 0 !== md ? md : Wd.b,
        location: {
          status: "offline"
        }
      }
    }

    function od(dd) {
      let {
        player: Od,
        isFriend: md = !1,
        status: Wd,
        showLocation: hd = void 0 === Wd,
        Et: td,
        onSendFriendRequest: od,
        actions: Nd,
        zIndex: qd
      } = dd;
      const {
        t: Hd
      } = (0, Fd.G)();
      let yd = Wd;
      null !== td && void 0 !== td && td.on && (yd = (0, Qd.jsxs)(Qd.Fragment, {
        children: [null !== Wd && void 0 !== Wd ? Wd : (0, Qd.jsx)(Kd.b, {
          socialPreview: Od
        }), (0, Qd.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Hd("worldSocial:canJoin")]
        })]
      }));
      const bd = {
        playerSocialPreview: Od,
        isFriend: md,
        hideFriendBadge: !0,
        onFriendRemoved: md ? dd => {
          Rd.d.removeFriendFromState(dd)
        } : void 0,
        status: yd,
        showLocation: hd,
        onSendFriendRequest: od,
        zIndex: qd
      };
      return td ? (0, Qd.jsx)(vd.c, {
        ...bd,
        Et: td,
        children: Nd
      }) : (0, Qd.jsx)(Xd.e, {
        ...bd,
        opensProfileCard: !1,
        children: Nd || void 0
      })
    }

    function Nd(dd) {
      let {
        row: Od,
        Et: md,
        canInvite: Wd,
        invited: Rd,
        onInvite: Xd,
        zIndex: Kd
      } = dd;
      const {
        t: vd
      } = (0, Fd.G)(), td = "online" === Od.place ? hd.g : hd.i;
      return (0, Qd.jsx)(od, {
        player: Od.friend,
        isFriend: !0,
        status: "here" === Od.place ? vd("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Et: md,
        zIndex: Kd,
        actions: Wd && (0, Qd.jsx)(td, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Rd,
          onClick: Xd,
          ariaLabel: `${vd("worldSocial:invite")} ${Od.friend.name}`,
          children: vd(Rd ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  38319: (dd, Od, md) => {
    md.d(Od, {
      c: () => hd,
      e: () => Xd,
      g: () => vd
    });
    var Wd = md(66),
      Fd = md(5255),
      Rd = md(2010);

    function Xd(dd) {
      const Od = {
        lobbyName: dd,
        answer: null,
        response: Fd.e.getSocialSettings(dd)
      };
      return Od.response.then((dd => {
        Od.answer = dd
      })), Od
    }
    const Kd = new Map;

    function hd(dd) {
      Kd.set(dd.lobbyName, dd)
    }

    function vd(dd) {
      const [Od] = (0, Wd.useState)((() => function(dd) {
        var Od;
        const md = null !== (Od = Kd.get(dd)) && void 0 !== Od ? Od : null;
        return null !== md && void 0 !== md && md.answer && "error" in md.answer ? null : md
      }(dd))), [md, Xd] = (0, Wd.useState)((() => null !== Od && void 0 !== Od && Od.answer && "settings" in Od.answer ? Od.answer.settings : null)), [hd, vd] = (0, Wd.useState)(!0), [Qd, td] = (0, Wd.useState)(null !== md), od = (0, Wd.useRef)(md);
      od.current = md;
      const Nd = (0, Wd.useRef)(0),
        qd = (0, Wd.useRef)(0),
        Hd = (0, Wd.useRef)(!1),
        yd = (0, Wd.useRef)(!0),
        bd = (0, Wd.useCallback)((async Od => {
          const md = ++Nd.current,
            Wd = await (null !== Od && void 0 !== Od ? Od : Fd.e.getSocialSettings(dd));
          yd.current && md === Nd.current && (td(!0), vd(!1), "error" in Wd || Xd(Wd.settings))
        }), [dd]),
        Td = (0, Wd.useCallback)((() => {
          vd(!0), bd()
        }), [bd]),
        pd = (0, Wd.useCallback)((() => {
          qd.current > 0 ? Hd.current = !0 : bd()
        }), [bd]);
      (0, Wd.useEffect)((() => (yd.current = !0, Kd.delete(dd), vd(!0), bd(null === Od || void 0 === Od ? void 0 : Od.response), () => {
        yd.current = !1
      })), [bd, dd, Od]);
      const Yd = dd => {
        Nd.current++, vd(!1), od.current = dd, Xd(dd)
      };
      return {
        settings: md,
        loading: hd,
        answered: Qd,
        retry: Td,
        refresh: pd,
        change: async function(Od, md) {
          let {
            quiet: Wd = !1,
            onAnswer: Xd
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const Kd = od.current;
          if (null === Kd) return !1;
          Yd(md(Kd)), qd.current > 0 && (Hd.current = !0), qd.current++;
          const hd = await Fd.e.setSocialSettings(dd, Od);
          qd.current--;
          const vd = !("error" in hd);
          if (!yd.current) return vd;
          if (null === Xd || void 0 === Xd || Xd(hd), Wd);
          else if ("error" in hd) Rd.g.showMessage({
            translationKey: hd.error
          });
          else
            for (const dd of hd.notFound) Rd.g.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: dd
              }
            });
          if (qd.current > 0) return vd;
          const Qd = Hd.current;
          return Hd.current = !1, !Qd && "settings" in hd ? Yd(hd.settings) : (Qd || Yd(Kd), bd()), vd
        }
      }
    }
  },
  38353: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      c: () => Rd
    });
    var Wd = md(180);
    const Fd = new Map;

    function Rd(dd, Od) {
      var md;
      const Wd = null !== (md = Fd.get(dd)) && void 0 !== md ? md : new Map;
      Wd.set(Od, Date.now()), Fd.set(dd, Wd)
    }

    function Xd(dd) {
      const Od = Fd.get(dd);
      if (!Od) return [];
      const md = Date.now();
      for (const [Fd, Rd] of Od) md - Rd >= Wd.p && Od.delete(Fd);
      return [...Od.keys()]
    }
  },
  38324: (dd, Od, md) => {
    function Wd(dd, Od) {
      const md = Od.toLowerCase();
      for (const Wd of dd)
        if (Wd.toLowerCase() === md) return !0;
      return !1
    }

    function Fd(dd, Od, md) {
      const Fd = [],
        Rd = [],
        Xd = [];
      for (const Kd of dd) !Kd.isError && Kd.name && ("inGame" === Kd.location.status && Kd.location.inLobbyName === Od || Wd(md, Kd.name) ? Rd.push({
        friend: Kd,
        place: "here"
      }) : "offline" === Kd.location.status ? Xd.push({
        friend: Kd,
        place: "offline"
      }) : Fd.push({
        friend: Kd,
        place: "online"
      }));
      return [...Fd, ...Rd, ...Xd]
    }

    function Rd(dd, Od, md) {
      const Fd = [],
        Rd = dd.flatMap((dd => "here" === dd.place ? [dd.friend.name] : []));
      for (const Xd of [...Rd, ...Od]) Wd(Fd, Xd) || Wd(md, Xd) || Fd.push(Xd);
      return Fd
    }

    function Xd(dd, Od) {
      return null === dd || void 0 === dd || !dd.canManage || Wd(dd.whitelist, Od) ? "none" : "whitelist" === dd.visibility ? "required" : "quiet"
    }

    function Kd(dd) {
      if (null === dd) return !0;
      const {
        visibility: Od
      } = dd;
      return "public" === Od || "unlisted" === Od || "whitelist" === Od && dd.canManage
    }

    function hd(dd, Od, md) {
      if (md) {
        const md = Od.filter((Od => !Wd(dd.whitelist, Od)));
        return {
          ...dd,
          whitelist: [...dd.whitelist, ...md]
        }
      }
      return {
        ...dd,
        whitelist: dd.whitelist.filter((dd => !Wd(Od, dd)))
      }
    }

    function vd(dd, Od) {
      const md = [];
      for (let Wd = 0; Wd < dd.length; Wd += Od) md.push(dd.slice(Wd, Wd + Od));
      return md
    }
    md.d(Od, {
      c: () => Kd,
      e: () => Rd,
      g: () => Fd,
      k: () => Wd,
      m: () => vd,
      o: () => Xd,
      s: () => hd
    })
  },
  38544: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(66),
      Fd = md(3403);

    function Rd() {
      const dd = (0, Fd.j)("lobbyLeaderboardInfo");
      return (0, Wd.useMemo)((() => function(dd) {
        if (null === dd) return null;
        const Od = Object.entries(dd),
          md = Od.filter((dd => {
            let [, Od] = dd;
            return void 0 !== Od
          }));
        if (md.length === Od.length) return dd;
        const Wd = Object.fromEntries(md),
          Fd = Object.keys(dd).filter((dd => !Object.hasOwn(Wd, dd)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${Fd.join(", ")}`), Wd
      }(dd)), [dd])
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);