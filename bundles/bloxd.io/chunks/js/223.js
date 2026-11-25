export const id = 223;
export const ids = [223];
export const modules = {
  41300: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      LobbyManageView: () => pE
    });
    var su = ju(58),
      Uu = ju(1533),
      Zu = ju(37411),
      Xu = ju(2560),
      lu = ju(2568),
      qu = ju(2543),
      fu = ju(36951);

    function Cu() {
      const [uu, Eu] = (0, su.useState)(new Map);
      return {
        get: Eu => uu.get(Eu),
        hold: (0, su.useCallback)(((uu, ju, su) => {
          Eu((Eu => new Map(Eu).set(uu, ju))), su.then((() => {
            Eu((Eu => {
              const ju = new Map(Eu);
              return ju.delete(uu), ju
            }))
          }))
        }), [])
      }
    }
    var bu = ju(1105),
      cu = ju.n(bu),
      Nu = ju(1244),
      Ou = ju(1116),
      Yu = ju(1393),
      hu = ju(2777),
      Du = ju(5179),
      gu = ju(3634);
    var Mu = ju(2027),
      eu = ju(1506);

    function Gu(uu, Eu, ju) {
      const su = uu.filter((uu => uu.name !== Eu)),
        Uu = su.filter((uu => "none" === uu.role)).sort(((uu, Eu) => Eu.at - uu.at)),
        Zu = su.filter((uu => "none" !== uu.role)).sort(((uu, Eu) => ju.indexOf(uu.role) - ju.indexOf(Eu.role) || Eu.at - uu.at));
      return [...uu.some((uu => uu.name === Eu)) && null !== Eu ? [Eu] : [], ...[...Uu, ...Zu].map((uu => uu.name))]
    }

    function pu(uu, Eu) {
      const ju = uu.banned.map((uu => uu.name)),
        su = new Set(ju);
      return {
        here: Gu(uu.here, Eu, uu.roles.map((uu => uu.role))),
        away: uu.away.filter((uu => !su.has(uu.name))).map((uu => uu.name)),
        banned: ju
      }
    }

    function wu(uu, Eu) {
      const ju = uu.here.find((uu => uu.name === Eu));
      if (ju) return {
        section: "here",
        player: ju
      };
      const su = uu.banned.find((uu => uu.name === Eu));
      if (su) return {
        section: "banned",
        bannedAt: su.at
      };
      const Uu = uu.away.find((uu => uu.name === Eu));
      return Uu ? {
        section: "away",
        player: Uu
      } : {
        section: "gone"
      }
    }
    const Ju = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var du = ju(2774),
      au = ju(36946),
      Pu = ju(37109),
      ou = ju(3309),
      ku = ju(349);

    function mu(uu, Eu, ju) {
      return Eu.map((Eu => {
        if ("string" === typeof Eu) return Eu;
        const su = "str" in Eu ? Eu.str : Eu;
        return "string" === typeof su ? su : "entityName" in su ? su.entityName : "translationKey" in su ? uu(su.translationKey, (0, Nu.r)(su.params, ju)) : ""
      })).join("")
    }

    function vu(uu, Eu, ju, su, Uu) {
      return Uu - su < 6e4 ? uu(`${ju}JustNow`) : uu(ju, {
        time: (0, ku._)((0, Nu.n)(Eu, ju), su, Uu)
      })
    }
    var Ku = ju(1964),
      Vu = ju(1723),
      ru = ju(1154);

    function Qu(uu) {
      let {
        status: Eu
      } = uu;
      return (0, ru.jsx)("span", {
        className: cu()("LobbyManageStatus", {
          LobbyManageStatusRefused: !Eu.ok
        }),
        children: (0, ru.jsx)(Ku.d, {
          text: Eu.text
        })
      })
    }

    function iu(uu) {
      let {
        names: Eu,
        cap: ju,
        filterFrom: Uu,
        moreLabel: Zu,
        reveal: Xu = null,
        renderRow: lu
      } = uu;
      const {
        t: qu
      } = (0, Nu.A)(), [fu, Cu] = (0, su.useState)(!1), [bu, cu] = (0, su.useState)(""), Yu = fu || null !== Xu && Eu.indexOf(Xu) >= ju, Du = (Yu || Eu.length <= ju) && null !== Uu && Eu.length > Uu, gu = bu.trim().toLowerCase();
      let Mu = Yu ? Eu : Eu.slice(0, ju);
      return Du && "" !== gu && (Mu = Mu.filter((uu => uu.toLowerCase().includes(gu)))), (0, ru.jsxs)(ru.Fragment, {
        children: [Du && (0, ru.jsx)(Vu.d, {
          className: "LobbyManageFilter",
          placeholderText: qu("lobbyManage:findName"),
          ariaLabel: qu("lobbyManage:findName"),
          onValueChange: uu => {
            cu(uu)
          }
        }), Mu.length > 0 && (0, ru.jsx)("div", {
          className: "PlayerRows",
          children: Mu.map(((uu, Eu) => lu(uu, Mu.length - Eu)))
        }), !Yu && Eu.length > ju && (0, ru.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, ru.jsx)(hu.b, {
            label: (0, ru.jsxs)(ru.Fragment, {
              children: [Zu, " ", (0, ru.jsx)(Ou.e, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              Cu(!0)
            }
          })
        })]
      })
    }

    function Wu(uu) {
      let {
        value: Eu,
        placeholder: ju,
        ariaLabel: Uu,
        maxLength: Zu,
        wide: Xu = !1,
        onSave: lu
      } = uu;
      const qu = (0, su.useRef)(null),
        [fu, Cu] = (0, su.useState)(0),
        bu = (0, su.useRef)(!0),
        Nu = (0, su.useRef)(null),
        Ou = (0, su.useRef)({
          value: Eu,
          onSave: lu
        });
      Ou.current = {
        value: Eu,
        onSave: lu
      };
      const Yu = () => {
        const uu = Nu.current;
        Nu.current = null, null !== uu && uu !== Ou.current.value && Ou.current.onSave(uu).then((() => {
          bu.current && Cu((uu => uu + 1))
        }))
      };
      return (0, su.useEffect)((() => {
        null === Nu.current && qu.current && (qu.current.value = Eu)
      }), [Eu, fu]), (0, su.useEffect)((() => () => {
        bu.current = !1, Yu()
      }), []), (0, ru.jsx)("div", {
        className: cu()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: Xu
        }),
        onBlur: Yu,
        children: (0, ru.jsx)(Vu.d, {
          domRef: qu,
          defaultValue: Eu,
          placeholderText: ju,
          ariaLabel: Uu,
          maxLength: Zu,
          onValueChange: uu => {
            Nu.current = uu
          },
          onEnter: Yu
        })
      })
    }
    const Su = ["mod", "coOwner"],
      Iu = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function Fu(uu) {
      var Eu, ju, Zu;
      let {
        name: Xu,
        place: lu,
        openedIn: qu,
        isYou: fu,
        manage: bu,
        hiddenNames: cu,
        zIndex: Yu
      } = uu;
      const {
        t: hu,
        selectedLanguage: Du
      } = (0, Nu.A)(), [gu, Mu] = (0, su.useState)(null), {
        state: Gu
      } = bu, pu = `player:${Xu}`, wu = function(uu, Eu) {
        if ("banned" === uu.section) return {
          ...Ju,
          unban: !0
        };
        if ("gone" === uu.section) return Ju;
        const {
          player: ju
        } = uu, su = "here" === uu.section, Uu = su || "none" !== ju.role ? ju.can.roles : [];
        return {
          gamemode: su && Eu && null !== ju.gamemode && ju.can.gamemode,
          roles: Uu,
          fixedRole: 0 === Uu.length && "none" !== ju.role ? ju.role : null,
          kick: su && ju.can.kick,
          ban: ju.can.ban,
          unban: !1
        }
      }(lu, null !== Gu.gamemodes), ku = bu.statusOf(pu), Ku = bu.isPending(pu), Vu = Cu(), iu = Date.now(), Wu = uu => {
        var Eu, ju;
        return null !== (Eu = null === (ju = (uu => Gu.roles.find((Eu => Eu.role === uu)))(uu)) || void 0 === ju ? void 0 : ju.label) && void 0 !== Eu ? Eu : uu
      }, Fu = uu => {
        const Eu = Iu[uu];
        return void 0 === Eu ? void 0 : hu(Eu)
      }, Bu = "here" === lu.section || "away" === lu.section ? lu.player : null, Lu = "here" === lu.section ? lu.player.id : null, {
        playerSocialPreview: tu,
        isFriend: xu
      } = null === Lu ? {
        playerSocialPreview: (0, Pu.h)(Xu, null),
        isFriend: !1
      } : (0, au.c)(Lu, Xu), Tu = function() {
        bu.send(...arguments)
      }, Hu = (uu, Eu) => {
        Vu.hold("role", uu, bu.send({
          type: "setRole",
          name: Xu,
          role: uu
        }, pu, Eu))
      };
      let Au = null;
      if ("ban" === (null === gu || void 0 === gu ? void 0 : gu.kind)) Au = hu("lobbyManageEntry:banConfirm", {
        playerName: Xu
      });
      else if ("role" === (null === gu || void 0 === gu ? void 0 : gu.kind)) {
        var nu;
        Au = `${hu("lobbyManage:roleConfirm",{playerName:Xu,role:Wu(gu.role)})} ${null!==(nu=Fu(gu.role))&&void 0!==nu?nu:""}`
      } else if (ku) Au = (0, ru.jsx)(Qu, {
        status: ku
      });
      else if (fu) Au = hu("lobbyManage:you");
      else if ("here" === lu.section) "none" === lu.player.role && iu - lu.player.at < 6e5 && (Au = vu(hu, Du.code, "lobbyManage:joinedAgo", lu.player.at, iu));
      else if ("away" === lu.section) {
        if (lu.player.at > 0) {
          const uu = "kicked" === lu.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          Au = vu(hu, Du.code, uu, lu.player.at, iu)
        }
      } else "banned" === lu.section ? null !== lu.bannedAt && (Au = vu(hu, Du.code, "lobbyManage:bannedAgo", lu.bannedAt, iu)) : "banned" === qu && (Au = hu("lobbyManageEntry:unbanned"));
      return (0, ru.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": Xu,
        children: (0, ru.jsxs)(du.g, {
          playerSocialPreview: tu,
          isFriend: xu,
          status: Au,
          opensProfileCard: !fu && (0, au.d)(!0, Xu, cu),
          zIndex: Yu,
          children: [null !== gu && (0, ru.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === gu.kind && (0, ru.jsxs)(eu.R, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                Mu(null), Tu({
                  type: "ban",
                  name: Xu
                }, pu)
              },
              children: [(0, ru.jsx)(Ou.e, {
                name: "gavel"
              }), (0, ru.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: hu("lobbyManageEntry:ban")
              })]
            }), "role" === gu.kind && (0, ru.jsx)(eu.f, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: gu.role
              },
              onClick: () => {
                Mu(null), Hu(gu.role)
              },
              children: hu("lobbyManage:makeRole", {
                role: Wu(gu.role)
              })
            }), (0, ru.jsx)(eu.i, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                Mu(null)
              },
              children: hu("general:cancel")
            })]
          }), null === gu && (0, ru.jsxs)(ru.Fragment, {
            children: [(0, ru.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [wu.gamemode && null !== Bu && (0, ru.jsx)(ou.c, {
                options: (null !== (Eu = Gu.gamemodes) && void 0 !== Eu ? Eu : []).map((uu => ({
                  value: uu.value,
                  label: mu(hu, uu.label, cu)
                }))),
                value: null !== (ju = Vu.get("gamemode")) && void 0 !== ju ? ju : Bu.gamemode,
                disabled: Ku,
                onChange: uu => {
                  (0, Uu.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: uu.value
                  }), Vu.hold("gamemode", uu.value, bu.send({
                    type: "setGamemode",
                    name: Xu,
                    gamemode: uu.value
                  }, pu))
                }
              }), wu.roles.length > 0 && null !== Bu && (0, ru.jsx)(ou.c, {
                options: [...Gu.roles].reverse().filter((uu => wu.roles.includes(uu.role))).map((uu => ({
                  value: uu.role,
                  label: uu.label
                }))),
                value: null !== (Zu = Vu.get("role")) && void 0 !== Zu ? Zu : Bu.role,
                disabled: Ku,
                onChange: uu => {
                  var Eu;
                  (Eu = uu.value) !== (null === Bu || void 0 === Bu ? void 0 : Bu.role) && (Su.includes(Eu) ? Mu({
                    kind: "role",
                    role: Eu
                  }) : ((0, Uu.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: Eu
                  }), Hu(Eu, Fu(Eu))))
                }
              }), null !== wu.fixedRole && (0, ru.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: Wu(wu.fixedRole)
              })]
            }), (0, ru.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [wu.kick && (0, ru.jsxs)(eu.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${hu("lobbyManageEntry:kick")} ${Xu}`,
                disabled: Ku,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  Tu({
                    type: "kick",
                    name: Xu
                  }, pu)
                },
                children: [(0, ru.jsx)(Ou.e, {
                  name: "person-falling-burst"
                }), (0, ru.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: hu("lobbyManageEntry:kick")
                })]
              }), wu.ban && (0, ru.jsxs)(eu.U, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${hu("lobbyManageEntry:ban")} ${Xu}`,
                disabled: Ku,
                padDestructive: !0,
                onClick: () => {
                  Mu({
                    kind: "ban"
                  })
                },
                children: [(0, ru.jsx)(Ou.e, {
                  name: "gavel"
                }), (0, ru.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: hu("lobbyManageEntry:ban")
                })]
              }), wu.unban && (0, ru.jsxs)(eu.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${hu("lobbyManageEntry:unban")} ${Xu}`,
                disabled: Ku,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  Tu({
                    type: "unban",
                    name: Xu
                  }, pu)
                },
                children: [(0, ru.jsx)(Ou.e, {
                  name: "user-unlock"
                }), (0, ru.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: hu("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function Bu(uu) {
      var Eu, ju, Uu, Zu;
      let {
        manage: Xu,
        focusRequest: lu,
        onFocused: qu
      } = uu;
      const {
        t: fu
      } = (0, Nu.A)(), Cu = (0, Mu.f)("players"), bu = (0, Mu.f)("hiddenPlayerNames"), cu = (0, su.useRef)(null), {
        state: Yu
      } = Xu, Du = null === Cu.localId ? null : null !== (Eu = null === (ju = Cu.byId[Cu.localId]) || void 0 === ju ? void 0 : ju.name) && void 0 !== Eu ? Eu : null, [gu] = (0, su.useState)((() => pu(Yu, Du))), Gu = function(uu, Eu, ju) {
        const su = new Set([...uu.here, ...uu.away, ...uu.banned]),
          Uu = pu(Eu, ju),
          Zu = Eu => {
            const ju = Uu[Eu].filter((uu => !su.has(uu)));
            for (const uu of ju) su.add(uu);
            return [...uu[Eu], ...ju]
          };
        return {
          here: Zu("here"),
          away: Zu("away"),
          banned: Zu("banned")
        }
      }(gu, Yu, Du), [Ju, du] = (0, su.useState)(!1), au = function(uu, Eu) {
        return uu.here.filter((uu => uu.name !== Eu && "none" === uu.role && uu.can.kick)).length
      }(Yu, Du), Pu = Xu.statusOf("kickAll");
      (0, su.useEffect)((() => {
        var uu, Eu;
        if (null === lu) return;
        const ju = null === (uu = cu.current) || void 0 === uu ? void 0 : uu.querySelector(`[data-lobby-manage-row="${CSS.escape(lu.name)}"]`);
        null === ju || void 0 === ju || ju.scrollIntoView({
          block: "center"
        }), null === ju || void 0 === ju || null === (Eu = ju.querySelector(".ProfilePreview")) || void 0 === Eu || Eu.focus({
          preventScroll: !0
        }), qu(lu.seq)
      }), [null === lu || void 0 === lu ? void 0 : lu.seq]);
      const ou = uu => (Eu, ju) => (0, ru.jsx)(Fu, {
        name: Eu,
        place: wu(Yu, Eu),
        openedIn: uu,
        isYou: Eu === Du,
        manage: Xu,
        hiddenNames: bu,
        zIndex: ju
      }, Eu);
      return (0, ru.jsxs)("div", {
        ref: cu,
        className: "LobbyManagePage",
        children: [Gu.here.length > 0 && (0, ru.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, ru.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, ru.jsx)(hu.b, {
              label: fu("lobbyManage:here"),
              meta: Yu.here.length
            }), au >= 2 && !Ju && (0, ru.jsxs)(eu.U, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: Xu.isPending("kickAll"),
              onClick: () => {
                du(!0)
              },
              children: [(0, ru.jsx)(Ou.e, {
                name: "person-falling-burst"
              }), " ", fu("lobbyManage:kickAll")]
            })]
          }), Ju && au >= 2 && (0, ru.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, ru.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: fu("lobbyManage:kickAllConfirm", {
                count: au
              })
            }), (0, ru.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, ru.jsx)(eu.R, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  du(!1), Xu.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: fu("lobbyManage:kickAll")
              }), (0, ru.jsx)(eu.i, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  du(!1)
                },
                children: fu("general:cancel")
              })]
            })]
          }), Pu && (0, ru.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, ru.jsx)(Qu, {
              status: Pu
            })
          }), (0, ru.jsx)(iu, {
            names: Gu.here,
            cap: Gu.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: ou("here")
          })]
        }), Gu.away.length > 0 && (0, ru.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, ru.jsx)(hu.b, {
            label: fu("lobbyManage:notHere"),
            meta: Gu.away.length
          }), (0, ru.jsx)(iu, {
            names: Gu.away,
            cap: 5,
            filterFrom: null,
            moreLabel: fu("lobbyManage:allCount", {
              count: Gu.away.length
            }),
            reveal: null !== (Uu = null === lu || void 0 === lu ? void 0 : lu.name) && void 0 !== Uu ? Uu : null,
            renderRow: ou("away")
          })]
        }), Gu.banned.length > 0 && (0, ru.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, ru.jsx)(hu.b, {
            label: fu("lobbyManage:banned"),
            meta: Gu.banned.length
          }), (0, ru.jsx)(iu, {
            names: Gu.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: fu("lobbyManage:allCount", {
              count: Gu.banned.length
            }),
            reveal: null !== (Zu = null === lu || void 0 === lu ? void 0 : lu.name) && void 0 !== Zu ? Zu : null,
            renderRow: ou("banned")
          })]
        })]
      })
    }
    var Lu = ju(4809),
      tu = ju(1693),
      xu = ju(37087),
      Tu = ju(37101),
      Hu = ju(37099),
      Au = ju(37091),
      nu = ju(37130),
      yu = ju(37115),
      zu = ju(37123);

    function Ru(uu) {
      const Eu = new Set;
      for (const ju of uu) Eu.add(ju.toLowerCase());
      return Eu
    }

    function uE(uu) {
      var Eu, ju;
      let {
        state: Uu,
        lobbyName: Zu,
        listed: Xu,
        isListed: lu,
        RD: qu,
        lG: fu,
        statusOf: Cu
      } = uu;
      const {
        t: bu,
        selectedLanguage: cu
      } = (0, Nu.A)(), Ou = (0, tu.m)(), Yu = (0, Mu.f)("players"), Du = null === Yu.localId ? null : null !== (Eu = null === (ju = Yu.byId[Yu.localId]) || void 0 === ju ? void 0 : ju.name) && void 0 !== Eu ? Eu : null, gu = (0, su.useMemo)((() => (0, Au.i)(Ou.friends, Zu, Uu.here.map((uu => uu.name)))), [Ou.friends, Zu, Uu.here]), eu = new Map(gu.map((uu => [uu.friend.name.toLowerCase(), uu]))), Gu = function(uu) {
        let {
          refused: Eu,
          listed: ju,
          here: su,
          friends: Uu,
          excluded: Zu
        } = uu;
        const Xu = Ru(Zu),
          lu = uu => uu.filter((uu => {
            const Eu = uu.toLowerCase();
            return !Xu.has(Eu) && (Xu.add(Eu), !0)
          }));
        return {
          added: [],
          refused: lu(Eu),
          listed: lu(ju),
          suggested: lu([...su, ...Uu])
        }
      }({
        refused: Uu.refused.map((uu => uu.name)),
        listed: Xu,
        here: Uu.here.map((uu => uu.name)),
        friends: gu.flatMap((uu => "here" === uu.place ? [] : [uu.friend.name])),
        excluded: [...null === Du ? [] : [Du], ...[...Uu.here, ...Uu.away].flatMap((uu => "none" === uu.role || (0, Au.l)(Xu, uu.name) ? [] : [uu.name]))]
      }), [pu] = (0, su.useState)(Gu), [wu, Ju] = (0, su.useState)([]), du = function(uu, Eu, ju) {
        const su = Ru(ju),
          Uu = Ru([...ju, ...uu.refused, ...uu.listed, ...uu.suggested]),
          Zu = ju => [...uu[ju].filter((uu => !su.has(uu.toLowerCase()))), ...Eu[ju].filter((uu => {
            const Eu = uu.toLowerCase();
            return !Uu.has(Eu) && (Uu.add(Eu), !0)
          }))];
        return {
          added: [...ju],
          refused: Zu("refused"),
          listed: Zu("listed"),
          suggested: Zu("suggested")
        }
      }(pu, Gu, wu), ou = (uu, Eu) => {
        var ju, su;
        const Zu = uu.toLowerCase(),
          Xu = eu.get(Zu),
          fu = Uu.here.find((uu => uu.name.toLowerCase() === Zu)),
          Nu = Uu.refused.find((uu => uu.name.toLowerCase() === Zu)),
          Ou = null !== (ju = null === Cu || void 0 === Cu ? void 0 : Cu(uu)) && void 0 !== ju ? ju : null;
        let Yu = null;
        Ou ? Yu = (0, ru.jsx)(Qu, {
          status: Ou
        }) : Nu ? Yu = vu(bu, cu.code, "lobbyManage:triedToJoinAgo", Nu.at, Date.now()) : Xu && fu ? Yu = bu("lobbyManage:friendHere") : Xu ? Yu = "online" === Xu.place ? bu("lobbyManage:friendOnline") : bu("lobbyManage:friend") : fu && (Yu = bu("lobbyManage:hereStatus"));
        let hu = null !== (su = null === Xu || void 0 === Xu ? void 0 : Xu.friend) && void 0 !== su ? su : (0, Pu.h)(uu, null);
        return !Xu && null !== fu && void 0 !== fu && fu.id && (hu = (0, au.c)(fu.id, fu.name).playerSocialPreview), (0, ru.jsx)(yu.d, {
          playerSocialPreview: hu,
          isFriend: void 0 !== Xu,
          hideFriendBadge: !0,
          status: Yu,
          zIndex: Eu,
          Tb: {
            on: lu(uu),
            onChange: Eu => {
              qu(uu, Eu)
            }
          }
        }, Zu)
      }, ku = [...du.added, ...du.refused];
      return (0, ru.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, ru.jsx)(hu.b, {
          label: bu("worldSocial:whitelist"),
          meta: Xu.length
        }), (0, ru.jsx)(zu.d, {
          label: bu("lobbyManage:add"),
          icon: "user-check",
          placeholder: bu("socialBar:enterPlayerName"),
          onSubmit: async uu => {
            const Eu = await fu(uu);
            return Eu.ok && Ju((Eu => [uu, ...Eu])), Eu
          }
        }), ku.length > 0 && (0, ru.jsx)("div", {
          className: "PlayerRows",
          children: ku.map(((uu, Eu) => ou(uu, ku.length - Eu)))
        }), (0, ru.jsx)(iu, {
          names: du.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: bu("lobbyManage:allOnWhitelist", {
            count: du.listed.length
          }),
          renderRow: ou
        }), (0, ru.jsx)(iu, {
          names: du.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: bu("lobbyManage:allCount", {
            count: du.suggested.length
          }),
          renderRow: ou
        })]
      })
    }

    function EE(uu) {
      let {
        manage: Eu,
        listing: ju
      } = uu;
      const {
        t: su
      } = (0, Nu.A)(), Zu = (uu, ju) => ((0, Uu.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: uu
      }), Eu.send({
        type: "setListing",
        field: uu,
        value: ju
      }, `listing:${uu}`)), Xu = uu => {
        const ju = Eu.statusOf(`listing:${uu}`);
        return ju && !ju.ok && (0, ru.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, ru.jsx)(Qu, {
            status: ju
          })
        })
      };
      return (0, ru.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, ru.jsx)(hu.b, {
          label: su("lobbyManage:inWorldsList")
        }), (0, ru.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, ru.jsx)("div", {
            className: "SliderText",
            children: su("lobbyManage:description")
          }), (0, ru.jsx)(Wu, {
            value: ju.description,
            ariaLabel: su("lobbyManage:description"),
            wide: !0,
            onSave: uu => Zu("description", uu)
          })]
        }), Xu("description"), (0, ru.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, ru.jsx)("div", {
            className: "SliderText",
            children: su("lobbyManage:emojis")
          }), (0, ru.jsx)(Wu, {
            value: ju.emojis,
            ariaLabel: su("lobbyManage:emojis"),
            onSave: uu => Zu("emojis", uu)
          })]
        }), Xu("emojis"), (0, ru.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, ru.jsx)("div", {
            className: "SliderText",
            children: su("lobbyManage:colour")
          }), (0, ru.jsx)(jE, {
            value: ju.colour,
            ariaLabel: su("lobbyManage:colour"),
            onSave: uu => {
              Zu("colour", uu)
            }
          })]
        }), Xu("colour")]
      })
    }

    function jE(uu) {
      let {
        value: Eu,
        ariaLabel: ju,
        onSave: Uu
      } = uu;
      const Zu = (0, su.useRef)(null),
        Xu = (0, su.useRef)({
          value: Eu,
          onSave: Uu
        });
      Xu.current = {
        value: Eu,
        onSave: Uu
      };
      const lu = (0, su.useRef)(null),
        qu = (0, su.useRef)(!1),
        fu = uu => {
          qu.current && uu.value !== Xu.current.value && uu.value !== lu.current && (lu.current = uu.value, Xu.current.onSave(uu.value))
        };
      return (0, su.useEffect)((() => {
        Zu.current && document.activeElement !== Zu.current && (Zu.current.value = Eu)
      }), [Eu]), (0, su.useEffect)((() => {
        const uu = Zu.current,
          Eu = () => {
            fu(uu)
          };
        return uu.addEventListener("change", Eu), () => {
          uu.removeEventListener("change", Eu), fu(uu)
        }
      }), []), (0, ru.jsx)("input", {
        ref: Zu,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: Eu,
        "aria-label": ju,
        onInput: () => {
          qu.current = !0
        },
        onBlur: uu => {
          fu(uu.currentTarget)
        }
      })
    }

    function sE(uu) {
      let {
        manage: Eu
      } = uu;
      const {
        lobbyName: ju,
        shownLobbyName: su
      } = (0, Mu.f)("connectedGame");
      return Eu.state.you.canSetVisibility && null !== ju ? (0, ru.jsx)(ZE, {
        manage: Eu,
        lobbyName: ju,
        worldCode: null !== su && void 0 !== su ? su : ju
      }, ju) : (0, ru.jsx)(XE, {
        manage: Eu,
        lobbyName: null !== ju && void 0 !== ju ? ju : ""
      })
    }

    function UE(uu) {
      return uu.map((uu => uu.toLowerCase())).sort().join(",")
    }

    function ZE(uu) {
      var Eu;
      let {
        manage: ju,
        lobbyName: Zu,
        worldCode: Xu
      } = uu;
      const {
        t: lu
      } = (0, Nu.A)(), {
        settings: qu,
        loading: fu,
        change: Cu,
        retry: bu,
        refresh: cu
      } = (0, xu.k)(Zu), Ou = (0, tu.m)(), {
        state: Du
      } = ju, gu = (0, su.useRef)(qu);
      gu.current = qu;
      const Mu = UE(null !== (Eu = Du.whitelist) && void 0 !== Eu ? Eu : []),
        Gu = null !== Du.whitelist;
      (0, su.useEffect)((() => {
        const uu = gu.current;
        null !== uu && (uu.visibility !== Du.visibility || Gu && UE(uu.whitelist) !== Mu) && cu()
      }), [Du.visibility, Mu, Gu, cu]);
      const pu = async (uu, Eu) => {
        let ju = null;
        return await Cu(uu, Eu, {
          quiet: !0,
          onAnswer: uu => {
            ju = uu
          }
        }), ju
      }, wu = (uu, Eu) => {
        null !== Eu && "error" in Eu && ju.showStatus(uu, {
          ok: !1,
          text: [lu(Eu.error)]
        })
      }, Ju = async uu => {
        if (null === qu || uu === qu.visibility) return;
        (0, Uu.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: uu
        });
        const Eu = "whitelist" === uu ? (0, Au.e)((0, Au.i)(Ou.friends, Zu, Du.here.map((uu => uu.name))), (0, nu.e)(Zu), qu.whitelist) : [],
          ju = await pu({
            setVisibility: uu
          }, (Eu => ({
            ...Eu,
            visibility: uu
          })));
        wu("mode", ju), null === ju || "error" in ju || await (async uu => {
          for (const Eu of (0, Au.o)(uu, Lu.E))
            if (!await Cu({
                whitelistAdd: Eu
              }, (uu => (0, Au.r)(uu, Eu, !0)))) return !1;
          return !0
        })(Eu)
      }, du = (0, su.useMemo)((() => {
        var uu;
        if (null === qu) return [];
        const Eu = null !== (uu = Du.whitelist) && void 0 !== uu ? uu : [];
        return [...Eu.filter((uu => (0, Au.l)(qu.whitelist, uu))), ...qu.whitelist.filter((uu => !(0, Au.l)(Eu, uu)))]
      }), [qu, Du.whitelist]), au = ju.statusOf("mode");
      return (0, ru.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, ru.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, ru.jsx)(hu.b, {
            label: lu("worldSocial:whoCanJoin")
          }), null === qu && fu && (0, ru.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, ru.jsx)(Yu.b, {})
          }), null === qu && !fu && (0, ru.jsx)(eu.i, {
            className: "SmallTextLight",
            onClick: bu,
            children: lu("worldSocial:loadFailed")
          }), null !== qu && (0, ru.jsx)(Tu.d, {
            visibility: qu.visibility,
            onPick: uu => {
              Ju(uu)
            }
          }), au && (0, ru.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, ru.jsx)(Qu, {
              status: au
            })
          }), null !== qu && "private" !== qu.visibility && (0, ru.jsx)(Hu.d, {
            worldCode: Xu,
            message: null
          })]
        }), "whitelist" === (null === qu || void 0 === qu ? void 0 : qu.visibility) && (0, ru.jsx)(uE, {
          state: Du,
          lobbyName: Zu,
          listed: du,
          isListed: uu => (0, Au.l)(qu.whitelist, uu),
          RD: (uu, Eu) => {
            (0, Uu.reportAnalyticsClick)(Eu ? {
              id: "lobby_manage.whitelist_add",
              value: "Tb"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), pu(Eu ? {
              whitelistAdd: [uu]
            } : {
              whitelistRemove: uu
            }, (ju => (0, Au.r)(ju, [uu], Eu))).then((Eu => {
              wu(`whitelist:${uu.toLowerCase()}`, Eu)
            }))
          },
          lG: async uu => {
            (0, Uu.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Eu = await pu({
              whitelistAdd: [uu]
            }, (Eu => (0, Au.r)(Eu, [uu], !0)));
            return null === Eu ? {
              ok: !1,
              error: lu("worldSocial:changeFailed")
            } : "error" in Eu ? {
              ok: !1,
              error: lu(Eu.error)
            } : (0, Au.l)(Eu.notFound, uu) ? {
              ok: !1,
              error: lu("lobbyManage:noPlayerCalled", {
                playerName: uu
              })
            } : {
              ok: !0
            }
          },
          statusOf: uu => ju.statusOf(`whitelist:${uu.toLowerCase()}`)
        }), "public" === (null === qu || void 0 === qu ? void 0 : qu.visibility) && null !== Du.listing && (0, ru.jsx)(EE, {
          manage: ju,
          listing: Du.listing
        })]
      })
    }

    function XE(uu) {
      var Eu;
      let {
        manage: ju,
        lobbyName: su
      } = uu;
      const {
        t: Zu
      } = (0, Nu.A)(), {
        state: Xu
      } = ju, lu = Cu(), qu = null !== (Eu = Xu.whitelist) && void 0 !== Eu ? Eu : [];
      return (0, ru.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, ru.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, ru.jsx)(hu.b, {
            label: Zu("worldSocial:whoCanJoin")
          }), (0, ru.jsx)("div", {
            className: "LobbyManageModeText",
            children: Zu(`worldSocial:${Xu.visibility}`)
          })]
        }), "whitelist" === Xu.visibility && Xu.you.canEditWhitelist && (0, ru.jsx)(uE, {
          state: Xu,
          lobbyName: su,
          listed: qu,
          isListed: uu => {
            var Eu;
            return null !== (Eu = lu.get(uu.toLowerCase())) && void 0 !== Eu ? Eu : (0, Au.l)(qu, uu)
          },
          RD: (uu, Eu) => {
            (0, Uu.reportAnalyticsClick)(Eu ? {
              id: "lobby_manage.whitelist_add",
              value: "Tb"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const su = uu.toLowerCase();
            lu.hold(su, Eu, ju.send(Eu ? {
              type: "whitelistAdd",
              names: [uu]
            } : {
              type: "whitelistRemove",
              name: uu
            }, `whitelist:${su}`))
          },
          lG: async uu => {
            (0, Uu.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Eu = await ju.send({
              type: "whitelistAdd",
              names: [uu]
            }, "whitelist-field");
            return Eu.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, ru.jsx)(Ku.d, {
                text: Eu.message
              })
            }
          },
          statusOf: uu => ju.statusOf(`whitelist:${uu.toLowerCase()}`)
        }), "public" === Xu.visibility && null !== Xu.listing && (0, ru.jsx)(EE, {
          manage: ju,
          listing: Xu.listing
        })]
      })
    }
    var lE = ju(5155),
      qE = ju(1419);
    const fE = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const CE = (0, su.memo)((function(uu) {
      var Eu;
      let {
        rule: ju,
        value: su,
        status: Uu,
        pending: Zu,
        hiddenNames: Xu,
        MJ: lu,
        onAction: qu
      } = uu;
      const {
        t: fu
      } = (0, Nu.A)(), Cu = uu => lu(ju, uu), bu = (uu, Eu) => {
        qu(ju, uu, Eu)
      }, cu = mu(fu, ju.label, Xu), Ou = ju.info ? mu(fu, ju.info, Xu) : void 0, Yu = ju.placeholder ? mu(fu, ju.placeholder, Xu) : void 0, hu = (null !== (Eu = ju.options) && void 0 !== Eu ? Eu : []).map((uu => ({
        value: uu.value,
        label: mu(fu, uu.label, Xu)
      }))), Du = Math.max(0, ...hu.map((uu => function(uu) {
        let Eu = 0;
        for (const ju of uu) Eu += fE.test(ju) ? 2 : 1;
        return Eu
      }(uu.label)))), gu = Uu && (0, ru.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, ru.jsx)(Qu, {
          status: Uu
        })
      }), Mu = (0, ru.jsxs)("div", {
        className: "SliderText",
        children: [cu, void 0 !== Ou && (0, ru.jsx)(qE.c, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: Ou
        })]
      });
      return "toggle" === ju.kind ? (0, ru.jsxs)(ru.Fragment, {
        children: [(0, ru.jsx)(lE.b, {
          label: cu,
          checked: !0 === su,
          circleInfoText: Ou,
          disabled: Zu,
          onClick: Cu
        }), gu]
      }) : "choice" === ju.kind && hu.length <= 3 ? (0, ru.jsxs)(ru.Fragment, {
        children: [(0, ru.jsx)(lE.f, {
          label: cu,
          options: hu,
          value: String(su),
          circleInfoText: Ou,
          onChange: Cu
        }), gu]
      }) : (0, ru.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [Mu, "choice" === ju.kind && (0, ru.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": Du
          },
          children: (0, ru.jsx)(ou.c, {
            options: hu,
            value: String(su),
            disabled: Zu,
            onChange: uu => {
              Cu(uu.value)
            }
          })
        }), ("number" === ju.kind || "text" === ju.kind) && (0, ru.jsx)(Wu, {
          value: null === su ? "" : String(su),
          placeholder: Yu,
          ariaLabel: cu,
          onSave: uu => {
            const Eu = uu.trim(),
              su = Number(Eu);
            return Cu("number" === ju.kind && "" !== Eu && Number.isFinite(su) ? su : Eu)
          }
        }), "action" === ju.kind && (0, ru.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [hu.length > 3 && (0, ru.jsx)(ou.c, {
            options: hu,
            value: {
              value: "",
              label: null !== Yu && void 0 !== Yu ? Yu : cu
            },
            disabled: Zu,
            onChange: uu => {
              bu(uu.value)
            }
          }), hu.length > 0 && hu.length <= 3 && hu.map((uu => (0, ru.jsx)(eu.i, {
            className: "SmallTextLight",
            disabled: Zu,
            onClick: () => {
              bu(uu.value)
            },
            children: uu.label
          }, uu.value))), 0 === hu.length && (0, ru.jsx)(eu.i, {
            className: "SmallTextLight",
            disabled: Zu,
            onClick: () => {
              bu()
            },
            children: null !== Yu && void 0 !== Yu ? Yu : cu
          })]
        }), "names" === ju.kind && (0, ru.jsx)(bE, {
          names: Array.isArray(su) ? su : [],
          pending: Zu,
          onAction: bu
        }), gu]
      })
    }));

    function bE(uu) {
      let {
        names: Eu,
        pending: ju,
        onAction: Uu
      } = uu;
      const {
        t: Zu
      } = (0, Nu.A)(), Xu = (0, su.useRef)(null), [lu, qu] = (0, su.useState)(""), fu = () => {
        const uu = lu.trim();
        "" !== uu && (Uu(uu, "add"), Xu.current && (Xu.current.value = ""), qu(""))
      };
      return (0, ru.jsxs)("div", {
        className: "LobbyManageNames",
        children: [Eu.map((uu => (0, ru.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, ru.jsx)("span", {
            className: "LobbyManageNameText",
            children: uu
          }), (0, ru.jsx)(eu.i, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: Zu("lobbyManage:removeName", {
              name: uu
            }),
            disabled: ju,
            onClick: () => {
              Uu(uu, "remove")
            },
            children: (0, ru.jsx)(Ou.e, {
              name: "xmark"
            })
          })]
        }, uu))), (0, ru.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, ru.jsx)(Vu.d, {
            domRef: Xu,
            placeholderText: Zu("lobbyManage:namePlaceholder"),
            ariaLabel: Zu("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: uu => {
              qu(uu)
            },
            onEnter: fu
          }), (0, ru.jsx)(eu.i, {
            className: "SmallTextLight",
            disabled: ju || "" === lu.trim(),
            onClick: fu,
            children: Zu("lobbyManage:addHere")
          })]
        })]
      })
    }
    const cE = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function NE(uu, Eu) {
      return cE.map((ju => {
        let {
          group: su,
          title: Uu
        } = ju;
        const Zu = uu.filter((uu => uu.group === su && void 0 === uu.parent)).map((ju => {
          const su = !0 === Eu(ju) ? uu.filter((uu => uu.parent === ju.key)) : [];
          return {
            rule: ju,
            children: su
          }
        }));
        return {
          group: su,
          title: Uu,
          items: Zu
        }
      }))
    }

    function OE(uu) {
      return uu.flatMap((uu => {
        let {
          items: Eu
        } = uu;
        return Eu.flatMap((uu => {
          let {
            rule: Eu,
            children: ju
          } = uu;
          return [Eu, ...ju]
        }))
      }))
    }

    function YE(uu) {
      let {
        manage: Eu,
        rowsShown: ju
      } = uu;
      const {
        t: Zu
      } = (0, Nu.A)(), Xu = (0, Mu.f)("hiddenPlayerNames"), {
        rules: lu
      } = Eu.state, qu = Cu(), fu = uu => {
        const Eu = qu.get(uu.key);
        return void 0 === Eu ? uu.value : Eu
      }, bu = NE(lu, fu), [cu] = (0, su.useState)((() => OE(bu).map((uu => uu.key)))), Ou = ju === 1 / 0 ? null : new Set(cu.slice(0, ju)), Yu = uu => null === Ou || Ou.has(uu.key), {
        hold: Du
      } = qu, gu = (0, su.useCallback)(((uu, ju) => {
        (0, Uu.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: uu.key
        });
        const su = Eu.send({
          type: "setRule",
          key: uu.key,
          value: ju
        }, `rule:${uu.key}`);
        return Du(uu.key, ju, su), su
      }), [Eu, Du]), eu = (0, su.useCallback)(((uu, ju, su) => {
        (0, Uu.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: uu.key
        }), Eu.send({
          type: "ruleAction",
          key: uu.key,
          ...void 0 === ju ? {} : {
            arg: ju
          },
          ...void 0 === su ? {} : {
            op: su
          }
        }, `rule:${uu.key}`, void 0 === su ? Zu("lobbyManage:setJustNow") : void 0)
      }), [Eu, Zu]), Gu = uu => {
        const ju = `rule:${uu.key}`;
        return (0, ru.jsx)(CE, {
          rule: uu,
          value: fu(uu),
          status: Eu.statusOf(ju),
          pending: Eu.isPending(ju),
          hiddenNames: Xu,
          MJ: gu,
          onAction: eu
        }, uu.key)
      };
      return (0, ru.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: bu.map((uu => {
          let {
            group: Eu,
            title: ju,
            items: Uu
          } = uu;
          const Xu = Uu.filter((uu => {
            let {
              rule: Eu
            } = uu;
            return Yu(Eu)
          }));
          return 0 === Xu.length ? null : (0, ru.jsxs)(su.Fragment, {
            children: [(0, ru.jsx)(hu.b, {
              label: Zu(ju)
            }), Xu.map((uu => {
              let {
                rule: Eu,
                children: ju
              } = uu;
              return 0 === ju.length ? Gu(Eu) : (0, ru.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [Gu(Eu), ju.filter(Yu).map(Gu)]
              }, Eu.key)
            }))]
          }, Eu)
        }))
      })
    }
    const hE = {
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
      DE = 5,
      gE = (0, su.memo)((function(uu) {
        let {
          page: Eu,
          manage: ju,
          leaderboard: Uu,
          focusRequest: Zu,
          onFocused: Xu,
          ruleRowsShown: lu
        } = uu;
        return "leaderboard" === Eu ? (0, ru.jsx)(su.Suspense, {
          fallback: (0, ru.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, ru.jsx)(Yu.b, {})
          }),
          children: Uu
        }) : "joining" === Eu ? (0, ru.jsx)(sE, {
          manage: ju
        }) : "rules" === Eu ? (0, ru.jsx)(YE, {
          manage: ju,
          rowsShown: lu
        }) : (0, ru.jsx)(Bu, {
          manage: ju,
          focusRequest: Zu,
          onFocused: Xu
        })
      }));

    function ME(uu) {
      let {
        page: Eu
      } = uu;
      const {
        t: ju
      } = (0, Nu.A)(), su = hE[Eu];
      return (0, ru.jsxs)(ru.Fragment, {
        children: [(0, ru.jsx)(Ou.e, {
          name: su.icon
        }), " ", (0, ru.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: ju(su.title)
        })]
      })
    }

    function eE(uu) {
      var Eu;
      const {
        t: ju
      } = (0, Nu.A)(), {
        pages: Zu,
        landing: Xu
      } = uu, qu = (0, su.useRef)(null), fu = (0, su.useRef)(null), Cu = (0, su.useRef)(null), bu = (0, su.useRef)(new Map), [Ou, Yu] = (0, su.useState)(null), Mu = (0, su.useRef)(Ou), eu = (0, su.useRef)(0), [Gu, pu] = (0, su.useState)(Zu[0]), wu = null !== Ou && void 0 !== Ou ? Ou : Zu.includes(Gu) ? Gu : Zu[0], [Ju] = (0, su.useState)(null !== (Eu = null === Xu || void 0 === Xu ? void 0 : Xu.page) && void 0 !== Eu ? Eu : null), du = null !== Ju && Zu.includes(Ju) ? [Ju, ...Zu.filter((uu => uu !== Ju))] : Zu, [au] = (0, su.useState)((() => {
        const Eu = OE(NE(uu.manage.state.rules, (uu => uu.value)));
        return Math.max(1, Math.ceil(Eu.length / DE))
      })), Pu = du.flatMap((uu => "rules" === uu ? Array(au).fill(uu) : [uu])), ou = function(uu, Eu) {
        const [ju, Uu] = (0, su.useState)(uu), Zu = ju >= Eu;
        return Zu && ju !== 1 / 0 && Uu(1 / 0), (0, su.useLayoutEffect)((() => {
          if (Zu) return;
          let uu = !0;
          return (0, gu.e)().then((() => {
            uu && Uu((uu => uu + 1))
          })), () => {
            uu = !1
          }
        }), [ju, Zu]), Zu ? 1 / 0 : ju
      }(1, Pu.length), ku = Pu.slice(0, ou), mu = new Set(ku), vu = ou < Pu.length, Ku = vu ? ku.filter((uu => "rules" === uu)).length * DE : 1 / 0, Vu = (0, su.useRef)(uu.focusRequest);
      Vu.current = uu.focusRequest;
      const Qu = uu => {
          Mu.current = uu, Yu(uu)
        },
        iu = () => {
          var uu, Eu;
          qu.current.style.scrollPaddingTop = `${null!==(uu=null===(Eu=Cu.current)||void 0===Eu?void 0:Eu.offsetHeight)&&void 0!==uu?uu:0}px`
        },
        Wu = uu => {
          const Eu = qu.current,
            ju = bu.current.get(uu);
          if (void 0 === ju) return;
          const su = document.activeElement,
            Uu = Vu.current,
            Zu = null === Uu ? null : ju.querySelector(`[data-lobby-manage-row="${CSS.escape(Uu.name)}"]`);
          iu(), su instanceof HTMLElement && null !== Zu && void 0 !== Zu && Zu.contains(su) ? su.scrollIntoView({
            block: "center"
          }) : null === ju.previousElementSibling ? Eu.scrollTop = 0 : ju.scrollIntoView({
            block: "start"
          }), eu.current = Eu.scrollTop
        },
        Su = uu => {
          (0, Uu.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: uu
          }), Qu(uu), Wu(uu)
        },
        Iu = () => {
          var uu, Eu;
          const ju = qu.current,
            su = ju.getBoundingClientRect().top + (null !== (uu = null === (Eu = Cu.current) || void 0 === Eu ? void 0 : Eu.offsetHeight) && void 0 !== uu ? uu : 0),
            Uu = Zu.map((uu => {
              var Eu, ju;
              return (null !== (Eu = null === (ju = bu.current.get(uu)) || void 0 === ju ? void 0 : ju.getBoundingClientRect().top) && void 0 !== Eu ? Eu : 1 / 0) - su
            })),
            Xu = !vu && ju.scrollTop + ju.clientHeight >= ju.scrollHeight - 1;
          pu(Zu[(0, lu.g)(Uu, Xu)])
        },
        Fu = () => {
          null !== Mu.current && (Qu(null), Iu())
        };
      (0, su.useLayoutEffect)((() => {
        null !== Xu && Zu.includes(Xu.page) && Su(Xu.page)
      }), [null === Xu || void 0 === Xu ? void 0 : Xu.seq]), (0, su.useLayoutEffect)((() => {
        null === Mu.current || Zu.includes(Mu.current) || Fu()
      }));
      const {
        onFocused: Bu
      } = uu, Lu = (0, su.useCallback)((uu => {
        null !== Mu.current && Wu(Mu.current), Bu(uu)
      }), [Bu]);
      (0, su.useLayoutEffect)((() => {
        const uu = Mu.current;
        null !== uu && (!vu || Zu.indexOf(Pu[ou - 1]) < Zu.indexOf(uu)) && Wu(uu)
      }), [ou]), (0, su.useEffect)((() => {
        const uu = new ResizeObserver((() => {
          null !== Mu.current ? Wu(Mu.current) : iu()
        }));
        return uu.observe(qu.current), uu.observe(fu.current), () => {
          uu.disconnect()
        }
      }), []), (0, su.useLayoutEffect)((() => {
        const uu = Cu.current,
          Eu = null === uu || void 0 === uu ? void 0 : uu.querySelector(".SegmentedToggleOptionSelected");
        Eu && (uu.scrollLeft = Math.min(Eu.offsetLeft, Math.max(uu.scrollLeft, Eu.offsetLeft + Eu.offsetWidth - uu.clientWidth)))
      }), [wu]);
      return (0, ru.jsxs)("div", {
        ref: qu,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === Mu.current ? Iu() : Math.abs(qu.current.scrollTop - eu.current) > 1 && Fu()
        },
        onClick: uu => {
          var Eu;
          null !== (Eu = Cu.current) && void 0 !== Eu && Eu.contains(uu.target) || Fu()
        },
        onFocus: uu => {
          var Eu;
          const ju = null === Mu.current ? null : bu.current.get(Mu.current);
          !ju || ju.contains(uu.target) || null !== (Eu = Cu.current) && void 0 !== Eu && Eu.contains(uu.target) || Fu()
        },
        children: [Zu.length > 1 && (0, ru.jsx)("div", {
          ref: Cu,
          className: "LobbyManageChips",
          children: (0, ru.jsx)(Du.c, {
            options: Zu.map((uu => ({
              value: uu,
              label: (0, ru.jsx)(ME, {
                page: uu
              }),
              ariaLabel: ju(hE[uu].title)
            }))),
            value: wu,
            padTabs: "2",
            ariaLabel: ju("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: Su
          })
        }), (0, ru.jsx)("div", {
          ref: fu,
          className: cu()("LobbyManageInner", {
            Staging: vu
          }),
          children: Zu.filter((uu => mu.has(uu))).map((Eu => {
            const ju = Eu === Ou;
            return (0, ru.jsxs)("section", {
              ref: uu => {
                uu ? bu.current.set(Eu, uu) : bu.current.delete(Eu)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": ju || void 0,
              children: [Zu.length > 1 && (0, ru.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": ju || void 0,
                "data-pad-unavailable": ju || void 0,
                children: (0, ru.jsx)(hu.b, {
                  label: (0, ru.jsx)(ME, {
                    page: Eu
                  })
                })
              }), (0, ru.jsx)(gE, {
                page: Eu,
                manage: uu.manage,
                leaderboard: uu.leaderboard,
                focusRequest: uu.focusRequest,
                onFocused: Lu,
                ruleRowsShown: "rules" === Eu ? Ku : 1 / 0
              })]
            }, Eu)
          }))
        })]
      })
    }

    function GE(uu) {
      return void 0 === (null === uu || void 0 === uu ? void 0 : uu.page) ? null : {
        page: uu.page,
        seq: uu.seq
      }
    }

    function pE(uu) {
      let {
        leaderboard: Eu
      } = uu;
      const ju = function() {
          const uu = (0, qu.h)("lobbyManage"),
            [Eu, ju] = (0, su.useReducer)((uu => uu + 1), 0),
            [Uu] = (0, su.useState)((() => new fu.b(ju)));
          return (0, su.useEffect)((() => {
            const uu = Uu.nextDeadline();
            if (null === uu) return;
            const Eu = setTimeout((() => {
              Uu.expire(Date.now()), ju()
            }), Math.max(0, uu - Date.now()));
            return () => {
              clearTimeout(Eu)
            }
          })), (0, su.useMemo)((() => null === uu ? null : {
            state: uu,
            send: (uu, Eu, su) => {
              const Zu = Uu.send(uu, Eu, null !== su && void 0 !== su ? su : null);
              return ju(), Zu
            },
            statusOf: uu => Uu.statusOf(uu, Date.now()),
            showStatus: (uu, Eu) => {
              Uu.show(uu, Eu)
            },
            isPending: uu => Uu.isPending(uu)
          }), [uu, Eu, Uu])
        }(),
        Cu = (0, lu.j)((0, Zu.c)()),
        bu = (0, Xu.l)(),
        [cu, Nu] = (0, su.useState)((() => GE(bu))),
        [Ou, Yu] = (0, su.useState)(null);
      return (0, su.useEffect)((() => {
        null === bu && (0, Uu.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, su.useEffect)((() => {
        null !== bu && (Nu((uu => (null === uu || void 0 === uu ? void 0 : uu.seq) === bu.seq ? uu : GE(bu))), void 0 !== bu.focusName && "players" === bu.page ? Yu({
          name: bu.focusName,
          seq: bu.seq
        }) : (0, Xu.j)(bu.seq))
      }), [null === bu || void 0 === bu ? void 0 : bu.seq]), null === ju ? null : (0, ru.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, ru.jsx)(eE, {
          pages: (0, lu.f)(ju.state, Cu),
          manage: ju,
          leaderboard: Eu,
          focusRequest: Ou,
          onFocused: Xu.j,
          landing: cu
        })
      })
    }
  },
  36951: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Cu,
      f: () => qu
    });
    var su = ju(1533),
      Uu = ju(2011),
      Zu = ju(1986);
    const Xu = 1e4;
    let lu = 0;

    function qu(uu) {
      const Eu = ++lu;
      return new Promise((ju => {
        const lu = Eu => {
            qu(), clearTimeout(fu), !1 === (null === Eu || void 0 === Eu ? void 0 : Eu.ok) && (0, su.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: uu.type
            }), ju(Eu)
          },
          qu = Uu.e.subscribe("lobbyManage", (uu => {
            const ju = function(uu, Eu) {
              var ju;
              return null !== (ju = null === uu || void 0 === uu ? void 0 : uu.results.find((uu => uu.requestId === Eu))) && void 0 !== ju ? ju : null
            }(uu, Eu);
            null !== ju && lu(ju)
          })),
          fu = setTimeout((() => {
            lu(null)
          }), Xu);
        Zu.gameBridge.send("lobbyManage", {
          ...uu,
          requestId: Eu
        })
      }))
    }
    const fu = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class Cu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qu;
        this.onChange = uu, this.sendAction = Eu, this.pending = new Map, this.statuses = new Map
      }
      send(uu, Eu, ju) {
        var su;
        return this.statuses.delete(Eu), this.pending.set(Eu, (null !== (su = this.pending.get(Eu)) && void 0 !== su ? su : 0) + 1), this.sendAction(uu).then((uu => {
          var su;
          const Uu = null !== uu && void 0 !== uu ? uu : {
              requestId: -1,
              ok: !1,
              message: fu
            },
            Zu = (null !== (su = this.pending.get(Eu)) && void 0 !== su ? su : 1) - 1;
          Zu > 0 ? this.pending.set(Eu, Zu) : this.pending.delete(Eu);
          const Xu = !Uu.ok || Uu.message.length > 0 ? Uu.message : null === ju ? null : [ju];
          return null !== Xu && this.statuses.set(Eu, {
            ok: Uu.ok,
            text: Xu,
            until: Date.now() + 4e3
          }), this.onChange(), Uu
        }))
      }
      show(uu, Eu) {
        this.statuses.set(uu, {
          ...Eu,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(uu) {
        for (const [Eu, ju] of this.statuses) ju.until <= uu && this.statuses.delete(Eu)
      }
      nextDeadline() {
        let uu = null;
        for (const ju of this.statuses.values()) {
          var Eu;
          uu = Math.min(null !== (Eu = uu) && void 0 !== Eu ? Eu : 1 / 0, ju.until)
        }
        return uu
      }
      statusOf(uu, Eu) {
        const ju = this.statuses.get(uu);
        return !ju || ju.until <= Eu ? null : {
          ok: ju.ok,
          text: ju.text
        }
      }
      isPending(uu) {
        return this.pending.has(uu)
      }
    }
  },
  36946: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => fu,
      d: () => qu
    });
    var su = ju(628),
      Uu = ju(1986),
      Zu = ju(1693),
      Xu = ju(91),
      lu = ju(1314);

    function qu(uu, Eu, ju) {
      return Xu.featureFlags.useSocialFeatures && uu && null === (0, lu.d)(Eu, ju)
    }

    function fu(uu, Eu) {
      var ju, Xu;
      const lu = Zu.b.getSocialState().friends.find((uu => uu.name.toLowerCase() === Eu.toLowerCase())),
        qu = Uu.gameBridge.latest("players").byId[uu],
        fu = void 0 !== qu && qu.name === Eu,
        Cu = fu && null !== (ju = qu.cosmetics) && void 0 !== ju ? ju : void 0,
        bu = lu && Cu ? {
          ...lu,
          cosmetics: Cu
        } : lu;
      return {
        playerSocialPreview: null !== bu && void 0 !== bu ? bu : {
          isError: !1,
          name: Eu,
          ranks: fu ? [...qu.ranks] : [],
          cosmetics: null !== Cu && void 0 !== Cu ? Cu : {},
          nameColour: null !== (Xu = null === Cu || void 0 === Cu ? void 0 : Cu.nameColour) && void 0 !== Xu ? Xu : su.e,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== lu
      }
    }
  },
  37123: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => bu
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(1723),
      lu = ju(1506),
      qu = ju(1393),
      fu = ju(1116),
      Cu = ju(1154);

    function bu(uu) {
      let {
        label: Eu,
        icon: ju,
        placeholder: Uu,
        onSubmit: bu
      } = uu;
      const cu = (0, su.useRef)(null),
        [Nu, Ou] = (0, su.useState)(""),
        [Yu, hu] = (0, su.useState)("Enter"),
        [Du, gu] = (0, su.useState)(null);
      (0, su.useEffect)((() => {
        if ("Success" !== Yu && "Error" !== Yu) return;
        const uu = setTimeout((() => {
          "Success" === Yu && cu.current && (cu.current.value = "", Ou("")), hu("Enter")
        }), "Success" === Yu ? 1e3 : 4e3);
        return () => {
          clearTimeout(uu)
        }
      }), [Yu]);
      const Mu = () => {
        const uu = Nu.trim();
        "" !== uu && "Enter" === Yu && (hu("Loading"), bu(uu).then((uu => {
          cu.current && ("error" in uu ? null === uu.error ? hu("Enter") : (gu(uu.error), hu("Error")) : hu("Success"))
        })))
      };
      return (0, Cu.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: uu => {
          uu.target === cu.current && "Escape" !== uu.key && uu.stopPropagation()
        },
        children: [(0, Cu.jsxs)("div", {
          className: Zu()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Yu}`),
          children: ["Loading" === Yu && (0, Cu.jsx)(qu.b, {}), "Success" === Yu && (0, Cu.jsx)(fu.e, {
            name: "check"
          }), "Error" === Yu && Du]
        }), (0, Cu.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, Cu.jsx)(Xu.d, {
            className: "PlayerSearchInput",
            domRef: cu,
            maxLength: 32,
            placeholderText: Uu,
            ariaLabel: Uu,
            stopPropagation: !1,
            onValueChange: uu => {
              Ou(uu)
            },
            onEnter: Mu
          }), (0, Cu.jsxs)(lu.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Yu || "" === Nu.trim(),
            onClick: Mu,
            children: [(0, Cu.jsx)(fu.e, {
              name: ju
            }), " ", Eu]
          })]
        })]
      })
    }
  },
  37101: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => bu
    });
    var su = ju(58),
      Uu = ju(1105),
      Zu = ju.n(Uu),
      Xu = ju(1244),
      lu = ju(1116),
      qu = ju(1154);
    const fu = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Cu = ["unlisted", "public", "whitelist", "private"];

    function bu(uu) {
      let {
        visibility: Eu,
        onPick: ju
      } = uu;
      const {
        t: Uu
      } = (0, Xu.A)(), bu = (0, su.useRef)([]);
      return (0, qu.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Uu("worldSocial:whoCanJoin"),
        children: Cu.map(((uu, su) => {
          const Xu = uu === Eu;
          return (0, qu.jsxs)("button", {
            ref: uu => {
              bu.current[su] = uu
            },
            type: "button",
            className: Zu()("WorldSocialTile", {
              WorldSocialTileSelected: Xu
            }),
            "aria-pressed": Xu,
            tabIndex: Xu ? 0 : -1,
            onKeyDown: uu => {
              ((uu, Eu) => {
                const ju = "ArrowRight" === uu.key || "ArrowDown" === uu.key ? 1 : "ArrowLeft" === uu.key || "ArrowUp" === uu.key ? -1 : 0;
                var su;
                0 !== ju && (uu.preventDefault(), null === (su = bu.current[(Eu + ju + Cu.length) % Cu.length]) || void 0 === su || su.focus())
              })(uu, su)
            },
            onClick: () => {
              ju(uu)
            },
            children: [(0, qu.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, qu.jsx)(lu.e, {
                name: fu[uu]
              })
            }), (0, qu.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, qu.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Uu(`worldSocial:${uu}`)
              }), (0, qu.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Uu(`worldSocial:${uu}Description`)
              })]
            })]
          }, uu)
        }))
      })
    }
  },
  37115: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => lu
    });
    var su = ju(1244),
      Uu = ju(2774),
      Zu = ju(4528),
      Xu = ju(1154);

    function lu(uu) {
      let {
        Tb: Eu,
        children: ju,
        ...lu
      } = uu;
      const {
        t: qu
      } = (0, su.A)();
      return (0, Xu.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          Eu.onChange(!Eu.on)
        },
        children: (0, Xu.jsx)(Uu.g, {
          ...lu,
          opensProfileCard: !1,
          children: (0, Xu.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: uu => {
              uu.stopPropagation()
            },
            children: [ju, (0, Xu.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, Xu.jsx)(Zu.d, {
                checked: Eu.on,
                disabled: !1,
                ariaLabel: qu("worldSocial:letJoin", {
                  playerName: lu.playerSocialPreview.name
                }),
                onChange: uu => {
                  Eu.onChange(uu.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37099: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Ou
    });
    var su = ju(58),
      Uu = ju(1244),
      Zu = ju(1906),
      Xu = ju(91),
      lu = ju(22),
      qu = ju(1533),
      fu = ju(2806),
      Cu = ju(34457),
      bu = ju(1506),
      cu = ju(1116),
      Nu = ju(1154);

    function Ou(uu) {
      let {
        worldCode: Eu,
        message: ju
      } = uu;
      const {
        t: Ou
      } = (0, Uu.A)(), {
        isTouchScreen: Yu
      } = (0, lu.l)(["isTouchScreen"]), hu = Xu.featureFlags.canUseInviteLinks, Du = (0, Cu.k)(hu && null === ju), [gu, Mu] = (0, fu.f)(), eu = (0, su.useRef)(null);
      if (null !== ju) return (0, Nu.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Nu.jsx)(cu.e, {
          name: "lock"
        }), (0, Nu.jsx)("span", {
          children: ju
        })]
      });
      const Gu = hu ? Du : Eu,
        pu = Yu && hu && (0, fu.b)();
      return (0, Nu.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!hu && (0, Nu.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Ou("worldSocial:worldCode")
        }), (0, Nu.jsx)("input", {
          ref: eu,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Gu && void 0 !== Gu ? Gu : "",
          "aria-label": Ou(hu ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: uu => {
            uu.currentTarget.select()
          }
        }), (0, Nu.jsxs)(bu.f, {
          className: "WorldSocialCopy",
          disabled: null === Gu,
          onClick: () => {
            null !== Gu && (0, fu.d)(Gu, {
              useShareSheet: pu,
              onOutcome: uu => {
                if ((0, qu.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== uu || hu ? uu : "code"
                  }), "copied" === uu) Mu();
                else if ("failed" === uu) {
                  var Eu;
                  null === (Eu = eu.current) || void 0 === Eu || Eu.focus(), Zu.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Nu.jsx)(cu.e, {
            name: gu ? "check" : pu ? "up-from-bracket" : "copy"
          }), " ", Ou(gu ? "general:copied" : pu ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37109: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Nu,
      f: () => cu,
      h: () => bu
    });
    var su = ju(628),
      Uu = ju(1244),
      Zu = ju(1693),
      Xu = ju(2774),
      lu = ju(2716),
      qu = ju(1506),
      fu = ju(37115),
      Cu = ju(1154);

    function bu(uu, Eu) {
      var ju;
      return {
        isError: !1,
        name: uu,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== Eu && void 0 !== Eu ? Eu : {},
        nameColour: null !== (ju = null === Eu || void 0 === Eu ? void 0 : Eu.nameColour) && void 0 !== ju ? ju : su.e,
        location: {
          status: "offline"
        }
      }
    }

    function cu(uu) {
      let {
        player: Eu,
        isFriend: ju = !1,
        status: su,
        showLocation: qu = void 0 === su,
        Tb: bu,
        onSendFriendRequest: cu,
        actions: Nu,
        zIndex: Ou
      } = uu;
      const {
        t: Yu
      } = (0, Uu.A)();
      let hu = su;
      null !== bu && void 0 !== bu && bu.on && (hu = (0, Cu.jsxs)(Cu.Fragment, {
        children: [null !== su && void 0 !== su ? su : (0, Cu.jsx)(lu.b, {
          socialPreview: Eu
        }), (0, Cu.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Yu("worldSocial:canJoin")]
        })]
      }));
      const Du = {
        playerSocialPreview: Eu,
        isFriend: ju,
        hideFriendBadge: !0,
        onFriendRemoved: ju ? uu => {
          Zu.b.removeFriendFromState(uu)
        } : void 0,
        status: hu,
        showLocation: qu,
        onSendFriendRequest: cu,
        zIndex: Ou
      };
      return bu ? (0, Cu.jsx)(fu.d, {
        ...Du,
        Tb: bu,
        children: Nu
      }) : (0, Cu.jsx)(Xu.g, {
        ...Du,
        opensProfileCard: !1,
        children: Nu || void 0
      })
    }

    function Nu(uu) {
      let {
        row: Eu,
        Tb: ju,
        canInvite: su,
        invited: Zu,
        onInvite: Xu,
        zIndex: lu
      } = uu;
      const {
        t: fu
      } = (0, Uu.A)(), bu = "online" === Eu.place ? qu.f : qu.i;
      return (0, Cu.jsx)(cu, {
        player: Eu.friend,
        isFriend: !0,
        status: "here" === Eu.place ? fu("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Tb: ju,
        zIndex: lu,
        actions: su && (0, Cu.jsx)(bu, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Zu,
          onClick: Xu,
          ariaLabel: `${fu("worldSocial:invite")} ${Eu.friend.name}`,
          children: fu(Zu ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37087: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => qu,
      h: () => Xu,
      k: () => fu
    });
    var su = ju(58),
      Uu = ju(4769),
      Zu = ju(1906);

    function Xu(uu) {
      const Eu = {
        lobbyName: uu,
        answer: null,
        response: Uu.d.getSocialSettings(uu)
      };
      return Eu.response.then((uu => {
        Eu.answer = uu
      })), Eu
    }
    const lu = new Map;

    function qu(uu) {
      lu.set(uu.lobbyName, uu)
    }

    function fu(uu) {
      const [Eu] = (0, su.useState)((() => function(uu) {
        var Eu;
        const ju = null !== (Eu = lu.get(uu)) && void 0 !== Eu ? Eu : null;
        return null !== ju && void 0 !== ju && ju.answer && "error" in ju.answer ? null : ju
      }(uu))), [ju, Xu] = (0, su.useState)((() => null !== Eu && void 0 !== Eu && Eu.answer && "settings" in Eu.answer ? Eu.answer.settings : null)), [qu, fu] = (0, su.useState)(!0), [Cu, bu] = (0, su.useState)(null !== ju), cu = (0, su.useRef)(ju);
      cu.current = ju;
      const Nu = (0, su.useRef)(0),
        Ou = (0, su.useRef)(0),
        Yu = (0, su.useRef)(!1),
        hu = (0, su.useRef)(!0),
        Du = (0, su.useCallback)((async Eu => {
          const ju = ++Nu.current,
            su = await (null !== Eu && void 0 !== Eu ? Eu : Uu.d.getSocialSettings(uu));
          hu.current && ju === Nu.current && (bu(!0), fu(!1), "error" in su || Xu(su.settings))
        }), [uu]),
        gu = (0, su.useCallback)((() => {
          fu(!0), Du()
        }), [Du]),
        Mu = (0, su.useCallback)((() => {
          Ou.current > 0 ? Yu.current = !0 : Du()
        }), [Du]);
      (0, su.useEffect)((() => (hu.current = !0, lu.delete(uu), fu(!0), Du(null === Eu || void 0 === Eu ? void 0 : Eu.response), () => {
        hu.current = !1
      })), [Du, uu, Eu]);
      const eu = uu => {
        Nu.current++, fu(!1), cu.current = uu, Xu(uu)
      };
      return {
        settings: ju,
        loading: qu,
        answered: Cu,
        retry: gu,
        refresh: Mu,
        change: async function(Eu, ju) {
          let {
            quiet: su = !1,
            onAnswer: Xu
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const lu = cu.current;
          if (null === lu) return !1;
          eu(ju(lu)), Ou.current > 0 && (Yu.current = !0), Ou.current++;
          const qu = await Uu.d.setSocialSettings(uu, Eu);
          Ou.current--;
          const fu = !("error" in qu);
          if (!hu.current) return fu;
          if (null === Xu || void 0 === Xu || Xu(qu), su);
          else if ("error" in qu) Zu.f.showMessage({
            translationKey: qu.error
          });
          else
            for (const uu of qu.notFound) Zu.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: uu
              }
            });
          if (Ou.current > 0) return fu;
          const Cu = Yu.current;
          return Yu.current = !1, !Cu && "settings" in qu ? eu(qu.settings) : (Cu || eu(lu), Du()), fu
        }
      }
    }
  },
  37130: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu,
      h: () => Zu
    });
    var su = ju(166);
    const Uu = new Map;

    function Zu(uu, Eu) {
      var ju;
      const su = null !== (ju = Uu.get(uu)) && void 0 !== ju ? ju : new Map;
      su.set(Eu, Date.now()), Uu.set(uu, su)
    }

    function Xu(uu) {
      const Eu = Uu.get(uu);
      if (!Eu) return [];
      const ju = Date.now();
      for (const [Uu, Zu] of Eu) ju - Zu >= su.l && Eu.delete(Uu);
      return [...Eu.keys()]
    }
  },
  37091: (uu, Eu, ju) => {
    function su(uu, Eu) {
      const ju = Eu.toLowerCase();
      for (const su of uu)
        if (su.toLowerCase() === ju) return !0;
      return !1
    }

    function Uu(uu, Eu, ju) {
      const Uu = [],
        Zu = [],
        Xu = [];
      for (const lu of uu) !lu.isError && lu.name && ("inGame" === lu.location.status && lu.location.inLobbyName === Eu || su(ju, lu.name) ? Zu.push({
        friend: lu,
        place: "here"
      }) : "offline" === lu.location.status ? Xu.push({
        friend: lu,
        place: "offline"
      }) : Uu.push({
        friend: lu,
        place: "online"
      }));
      return [...Uu, ...Zu, ...Xu]
    }

    function Zu(uu, Eu, ju) {
      const Uu = [],
        Zu = uu.flatMap((uu => "here" === uu.place ? [uu.friend.name] : []));
      for (const Xu of [...Zu, ...Eu]) su(Uu, Xu) || su(ju, Xu) || Uu.push(Xu);
      return Uu
    }

    function Xu(uu, Eu) {
      return null === uu || void 0 === uu || !uu.canManage || su(uu.whitelist, Eu) ? "none" : "whitelist" === uu.visibility ? "required" : "quiet"
    }

    function lu(uu) {
      if (null === uu) return !0;
      const {
        visibility: Eu
      } = uu;
      return "public" === Eu || "unlisted" === Eu || "whitelist" === Eu && uu.canManage
    }

    function qu(uu, Eu, ju) {
      if (ju) {
        const ju = Eu.filter((Eu => !su(uu.whitelist, Eu)));
        return {
          ...uu,
          whitelist: [...uu.whitelist, ...ju]
        }
      }
      return {
        ...uu,
        whitelist: uu.whitelist.filter((uu => !su(Eu, uu)))
      }
    }

    function fu(uu, Eu) {
      const ju = [];
      for (let su = 0; su < uu.length; su += Eu) ju.push(uu.slice(su, su + Eu));
      return ju
    }
    ju.d(Eu, {
      b: () => lu,
      e: () => Zu,
      i: () => Uu,
      l: () => su,
      o: () => fu,
      q: () => Xu,
      r: () => qu
    })
  },
  37411: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu
    });
    var su = ju(58),
      Uu = ju(2543);

    function Zu() {
      const uu = (0, Uu.h)("lobbyLeaderboardInfo");
      return (0, su.useMemo)((() => function(uu) {
        if (null === uu) return null;
        const Eu = Object.entries(uu),
          ju = Eu.filter((uu => {
            let [, Eu] = uu;
            return void 0 !== Eu
          }));
        if (ju.length === Eu.length) return uu;
        const su = Object.fromEntries(ju),
          Uu = Object.keys(uu).filter((uu => !Object.hasOwn(su, uu)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${Uu.join(", ")}`), su
      }(uu)), [uu])
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);