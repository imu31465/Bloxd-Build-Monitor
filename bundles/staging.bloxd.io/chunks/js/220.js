export const id = 220;
export const ids = [220];
export const modules = {
  41134: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      LobbyManageView: () => JT
    });
    var hm = fm(59),
      Am = fm(1476),
      am = fm(37110),
      xm = fm(2409),
      wm = fm(2418),
      Dm = fm(2391),
      im = fm(36649);

    function Rm() {
      const [mm, Tm] = (0, hm.useState)(new Map);
      return {
        get: Tm => mm.get(Tm),
        hold: (0, hm.useCallback)(((mm, fm, hm) => {
          Tm((Tm => new Map(Tm).set(mm, fm))), hm.then((() => {
            Tm((Tm => {
              const fm = new Map(Tm);
              return fm.delete(mm), fm
            }))
          }))
        }), [])
      }
    }
    var pm = fm(1080),
      Em = fm.n(pm),
      om = fm(1208),
      Om = fm(1089),
      Ym = fm(1345),
      qm = fm(2650),
      jm = fm(4970),
      Vm = fm(3443);
    var Im = fm(1946),
      Km = fm(1454);

    function Qm(mm, Tm, fm) {
      const hm = mm.filter((mm => mm.name !== Tm)),
        Am = hm.filter((mm => "none" === mm.role)).sort(((mm, Tm) => Tm.at - mm.at)),
        am = hm.filter((mm => "none" !== mm.role)).sort(((mm, Tm) => fm.indexOf(mm.role) - fm.indexOf(Tm.role) || Tm.at - mm.at));
      return [...mm.some((mm => mm.name === Tm)) && null !== Tm ? [Tm] : [], ...[...Am, ...am].map((mm => mm.name))]
    }

    function nm(mm, Tm) {
      const fm = mm.banned.map((mm => mm.name)),
        hm = new Set(fm);
      return {
        here: Qm(mm.here, Tm, mm.roles.map((mm => mm.role))),
        away: mm.away.filter((mm => !hm.has(mm.name))).map((mm => mm.name)),
        banned: fm
      }
    }

    function Jm(mm, Tm) {
      const fm = mm.here.find((mm => mm.name === Tm));
      if (fm) return {
        section: "here",
        player: fm
      };
      const hm = mm.banned.find((mm => mm.name === Tm));
      if (hm) return {
        section: "banned",
        bannedAt: hm.at
      };
      const Am = mm.away.find((mm => mm.name === Tm));
      return Am ? {
        section: "away",
        player: Am
      } : {
        section: "gone"
      }
    }
    const cm = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var zm = fm(2644),
      Zm = fm(36635),
      km = fm(36813),
      bm = fm(3127),
      Sm = fm(354);

    function em(mm, Tm, fm) {
      return Tm.map((Tm => {
        if ("string" === typeof Tm) return Tm;
        const hm = "str" in Tm ? Tm.str : Tm;
        return "string" === typeof hm ? hm : "entityName" in hm ? hm.entityName : "translationKey" in hm ? mm(hm.translationKey, (0, om.r)(hm.params, fm)) : ""
      })).join("")
    }

    function Nm(mm, Tm, fm, hm, Am) {
      return Am - hm < 6e4 ? mm(`${fm}JustNow`) : mm(fm, {
        time: (0, Sm.cb)((0, om.n)(Tm, fm), hm, Am)
      })
    }
    var Gm = fm(1884),
      Xm = fm(1676),
      Pm = fm(1135);

    function Hm(mm) {
      let {
        status: Tm
      } = mm;
      return (0, Pm.jsx)("span", {
        className: Em()("LobbyManageStatus", {
          LobbyManageStatusRefused: !Tm.ok
        }),
        children: (0, Pm.jsx)(Gm.b, {
          text: Tm.text
        })
      })
    }

    function ym(mm) {
      let {
        names: Tm,
        cap: fm,
        filterFrom: Am,
        moreLabel: am,
        reveal: xm = null,
        renderRow: wm
      } = mm;
      const {
        t: Dm
      } = (0, om.A)(), [im, Rm] = (0, hm.useState)(!1), [pm, Em] = (0, hm.useState)(""), Ym = im || null !== xm && Tm.indexOf(xm) >= fm, jm = (Ym || Tm.length <= fm) && null !== Am && Tm.length > Am, Vm = pm.trim().toLowerCase();
      let Im = Ym ? Tm : Tm.slice(0, fm);
      return jm && "" !== Vm && (Im = Im.filter((mm => mm.toLowerCase().includes(Vm)))), (0, Pm.jsxs)(Pm.Fragment, {
        children: [jm && (0, Pm.jsx)(Xm.e, {
          className: "LobbyManageFilter",
          placeholderText: Dm("lobbyManage:findName"),
          ariaLabel: Dm("lobbyManage:findName"),
          onValueChange: mm => {
            Em(mm)
          }
        }), Im.length > 0 && (0, Pm.jsx)("div", {
          className: "PlayerRows",
          children: Im.map(((mm, Tm) => wm(mm, Im.length - Tm)))
        }), !Ym && Tm.length > fm && (0, Pm.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, Pm.jsx)(qm.e, {
            label: (0, Pm.jsxs)(Pm.Fragment, {
              children: [am, " ", (0, Pm.jsx)(Om.c, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              Rm(!0)
            }
          })
        })]
      })
    }

    function Cm(mm) {
      let {
        value: Tm,
        placeholder: fm,
        ariaLabel: Am,
        maxLength: am,
        wide: xm = !1,
        onSave: wm
      } = mm;
      const Dm = (0, hm.useRef)(null),
        [im, Rm] = (0, hm.useState)(0),
        pm = (0, hm.useRef)(!0),
        om = (0, hm.useRef)(null),
        Om = (0, hm.useRef)({
          value: Tm,
          onSave: wm
        });
      Om.current = {
        value: Tm,
        onSave: wm
      };
      const Ym = () => {
        const mm = om.current;
        om.current = null, null !== mm && mm !== Om.current.value && Om.current.onSave(mm).then((() => {
          pm.current && Rm((mm => mm + 1))
        }))
      };
      return (0, hm.useEffect)((() => {
        null === om.current && Dm.current && (Dm.current.value = Tm)
      }), [Tm, im]), (0, hm.useEffect)((() => () => {
        pm.current = !1, Ym()
      }), []), (0, Pm.jsx)("div", {
        className: Em()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: xm
        }),
        onBlur: Ym,
        children: (0, Pm.jsx)(Xm.e, {
          domRef: Dm,
          defaultValue: Tm,
          placeholderText: fm,
          ariaLabel: Am,
          maxLength: am,
          onValueChange: mm => {
            om.current = mm
          },
          onEnter: Ym
        })
      })
    }
    const rm = ["mod", "coOwner"],
      sm = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function lm(mm) {
      var Tm, fm, am;
      let {
        name: xm,
        place: wm,
        openedIn: Dm,
        isYou: im,
        manage: pm,
        hiddenNames: Em,
        zIndex: Ym
      } = mm;
      const {
        t: qm,
        selectedLanguage: jm
      } = (0, om.A)(), [Vm, Im] = (0, hm.useState)(null), {
        state: Qm
      } = pm, nm = `player:${xm}`, Jm = function(mm, Tm) {
        if ("banned" === mm.section) return {
          ...cm,
          unban: !0
        };
        if ("gone" === mm.section) return cm;
        const {
          player: fm
        } = mm, hm = "here" === mm.section, Am = hm || "none" !== fm.role ? fm.can.roles : [];
        return {
          gamemode: hm && Tm && null !== fm.gamemode && fm.can.gamemode,
          roles: Am,
          fixedRole: 0 === Am.length && "none" !== fm.role ? fm.role : null,
          kick: hm && fm.can.kick,
          ban: fm.can.ban,
          unban: !1
        }
      }(wm, null !== Qm.gamemodes), Sm = pm.statusOf(nm), Gm = pm.isPending(nm), Xm = Rm(), ym = Date.now(), Cm = mm => {
        var Tm, fm;
        return null !== (Tm = null === (fm = (mm => Qm.roles.find((Tm => Tm.role === mm)))(mm)) || void 0 === fm ? void 0 : fm.label) && void 0 !== Tm ? Tm : mm
      }, lm = mm => {
        const Tm = sm[mm];
        return void 0 === Tm ? void 0 : qm(Tm)
      }, Mm = "here" === wm.section || "away" === wm.section ? wm.player : null, um = "here" === wm.section ? wm.player.id : null, {
        playerSocialPreview: Bm,
        isFriend: Lm
      } = null === um ? {
        playerSocialPreview: (0, km.h)(xm, null),
        isFriend: !1
      } : (0, Zm.d)(um, xm), tm = function() {
        pm.send(...arguments)
      }, Um = (mm, Tm) => {
        Xm.hold("role", mm, pm.send({
          type: "setRole",
          name: xm,
          role: mm
        }, nm, Tm))
      };
      let dm = null;
      if ("ban" === (null === Vm || void 0 === Vm ? void 0 : Vm.kind)) dm = qm("lobbyManageEntry:banConfirm", {
        playerName: xm
      });
      else if ("role" === (null === Vm || void 0 === Vm ? void 0 : Vm.kind)) {
        var gm;
        dm = `${qm("lobbyManage:roleConfirm",{playerName:xm,role:Cm(Vm.role)})} ${null!==(gm=lm(Vm.role))&&void 0!==gm?gm:""}`
      } else if (Sm) dm = (0, Pm.jsx)(Hm, {
        status: Sm
      });
      else if (im) dm = qm("lobbyManage:you");
      else if ("here" === wm.section) "none" === wm.player.role && ym - wm.player.at < 6e5 && (dm = Nm(qm, jm.code, "lobbyManage:joinedAgo", wm.player.at, ym));
      else if ("away" === wm.section) {
        if (wm.player.at > 0) {
          const mm = "kicked" === wm.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          dm = Nm(qm, jm.code, mm, wm.player.at, ym)
        }
      } else "banned" === wm.section ? null !== wm.bannedAt && (dm = Nm(qm, jm.code, "lobbyManage:bannedAgo", wm.bannedAt, ym)) : "banned" === Dm && (dm = qm("lobbyManageEntry:unbanned"));
      return (0, Pm.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": xm,
        children: (0, Pm.jsxs)(zm.c, {
          playerSocialPreview: Bm,
          isFriend: Lm,
          status: dm,
          opensProfileCard: !im && (0, Zm.f)(!0, xm, Em),
          zIndex: Ym,
          children: [null !== Vm && (0, Pm.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === Vm.kind && (0, Pm.jsxs)(Km.O, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                Im(null), tm({
                  type: "ban",
                  name: xm
                }, nm)
              },
              children: [(0, Pm.jsx)(Om.c, {
                name: "gavel"
              }), (0, Pm.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: qm("lobbyManageEntry:ban")
              })]
            }), "role" === Vm.kind && (0, Pm.jsx)(Km.e, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: Vm.role
              },
              onClick: () => {
                Im(null), Um(Vm.role)
              },
              children: qm("lobbyManage:makeRole", {
                role: Cm(Vm.role)
              })
            }), (0, Pm.jsx)(Km.g, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                Im(null)
              },
              children: qm("general:cancel")
            })]
          }), null === Vm && (0, Pm.jsxs)(Pm.Fragment, {
            children: [(0, Pm.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [Jm.gamemode && null !== Mm && (0, Pm.jsx)(bm.d, {
                options: (null !== (Tm = Qm.gamemodes) && void 0 !== Tm ? Tm : []).map((mm => ({
                  value: mm.value,
                  label: em(qm, mm.label, Em)
                }))),
                value: null !== (fm = Xm.get("gamemode")) && void 0 !== fm ? fm : Mm.gamemode,
                disabled: Gm,
                onChange: mm => {
                  (0, Am.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: mm.value
                  }), Xm.hold("gamemode", mm.value, pm.send({
                    type: "setGamemode",
                    name: xm,
                    gamemode: mm.value
                  }, nm))
                }
              }), Jm.roles.length > 0 && null !== Mm && (0, Pm.jsx)(bm.d, {
                options: [...Qm.roles].reverse().filter((mm => Jm.roles.includes(mm.role))).map((mm => ({
                  value: mm.role,
                  label: mm.label
                }))),
                value: null !== (am = Xm.get("role")) && void 0 !== am ? am : Mm.role,
                disabled: Gm,
                onChange: mm => {
                  var Tm;
                  (Tm = mm.value) !== (null === Mm || void 0 === Mm ? void 0 : Mm.role) && (rm.includes(Tm) ? Im({
                    kind: "role",
                    role: Tm
                  }) : ((0, Am.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: Tm
                  }), Um(Tm, lm(Tm))))
                }
              }), null !== Jm.fixedRole && (0, Pm.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: Cm(Jm.fixedRole)
              })]
            }), (0, Pm.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [Jm.kick && (0, Pm.jsxs)(Km.g, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${qm("lobbyManageEntry:kick")} ${xm}`,
                disabled: Gm,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  tm({
                    type: "kick",
                    name: xm
                  }, nm)
                },
                children: [(0, Pm.jsx)(Om.c, {
                  name: "person-falling-burst"
                }), (0, Pm.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: qm("lobbyManageEntry:kick")
                })]
              }), Jm.ban && (0, Pm.jsxs)(Km.P, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${qm("lobbyManageEntry:ban")} ${xm}`,
                disabled: Gm,
                padDestructive: !0,
                onClick: () => {
                  Im({
                    kind: "ban"
                  })
                },
                children: [(0, Pm.jsx)(Om.c, {
                  name: "gavel"
                }), (0, Pm.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: qm("lobbyManageEntry:ban")
                })]
              }), Jm.unban && (0, Pm.jsxs)(Km.g, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${qm("lobbyManageEntry:unban")} ${xm}`,
                disabled: Gm,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  tm({
                    type: "unban",
                    name: xm
                  }, nm)
                },
                children: [(0, Pm.jsx)(Om.c, {
                  name: "user-unlock"
                }), (0, Pm.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: qm("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function Mm(mm) {
      var Tm, fm, Am, am;
      let {
        manage: xm,
        focusRequest: wm,
        onFocused: Dm
      } = mm;
      const {
        t: im
      } = (0, om.A)(), Rm = (0, Im.k)("players"), pm = (0, Im.k)("hiddenPlayerNames"), Em = (0, hm.useRef)(null), {
        state: Ym
      } = xm, jm = null === Rm.localId ? null : null !== (Tm = null === (fm = Rm.byId[Rm.localId]) || void 0 === fm ? void 0 : fm.name) && void 0 !== Tm ? Tm : null, [Vm] = (0, hm.useState)((() => nm(Ym, jm))), Qm = function(mm, Tm, fm) {
        const hm = new Set([...mm.here, ...mm.away, ...mm.banned]),
          Am = nm(Tm, fm),
          am = Tm => {
            const fm = Am[Tm].filter((mm => !hm.has(mm)));
            for (const mm of fm) hm.add(mm);
            return [...mm[Tm], ...fm]
          };
        return {
          here: am("here"),
          away: am("away"),
          banned: am("banned")
        }
      }(Vm, Ym, jm), [cm, zm] = (0, hm.useState)(!1), Zm = function(mm, Tm) {
        return mm.here.filter((mm => mm.name !== Tm && "none" === mm.role && mm.can.kick)).length
      }(Ym, jm), km = xm.statusOf("kickAll");
      (0, hm.useEffect)((() => {
        var mm, Tm;
        if (null === wm) return;
        const fm = null === (mm = Em.current) || void 0 === mm ? void 0 : mm.querySelector(`[data-lobby-manage-row="${CSS.escape(wm.name)}"]`);
        null === fm || void 0 === fm || fm.scrollIntoView({
          block: "center"
        }), null === fm || void 0 === fm || null === (Tm = fm.querySelector(".ProfilePreview")) || void 0 === Tm || Tm.focus({
          preventScroll: !0
        }), Dm(wm.seq)
      }), [null === wm || void 0 === wm ? void 0 : wm.seq]);
      const bm = mm => (Tm, fm) => (0, Pm.jsx)(lm, {
        name: Tm,
        place: Jm(Ym, Tm),
        openedIn: mm,
        isYou: Tm === jm,
        manage: xm,
        hiddenNames: pm,
        zIndex: fm
      }, Tm);
      return (0, Pm.jsxs)("div", {
        ref: Em,
        className: "LobbyManagePage",
        children: [Qm.here.length > 0 && (0, Pm.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Pm.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, Pm.jsx)(qm.e, {
              label: im("lobbyManage:here"),
              meta: Ym.here.length
            }), Zm >= 2 && !cm && (0, Pm.jsxs)(Km.P, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: xm.isPending("kickAll"),
              onClick: () => {
                zm(!0)
              },
              children: [(0, Pm.jsx)(Om.c, {
                name: "person-falling-burst"
              }), " ", im("lobbyManage:kickAll")]
            })]
          }), cm && Zm >= 2 && (0, Pm.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, Pm.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: im("lobbyManage:kickAllConfirm", {
                count: Zm
              })
            }), (0, Pm.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, Pm.jsx)(Km.O, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  zm(!1), xm.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: im("lobbyManage:kickAll")
              }), (0, Pm.jsx)(Km.g, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  zm(!1)
                },
                children: im("general:cancel")
              })]
            })]
          }), km && (0, Pm.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, Pm.jsx)(Hm, {
              status: km
            })
          }), (0, Pm.jsx)(ym, {
            names: Qm.here,
            cap: Qm.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: bm("here")
          })]
        }), Qm.away.length > 0 && (0, Pm.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Pm.jsx)(qm.e, {
            label: im("lobbyManage:notHere"),
            meta: Qm.away.length
          }), (0, Pm.jsx)(ym, {
            names: Qm.away,
            cap: 5,
            filterFrom: null,
            moreLabel: im("lobbyManage:allCount", {
              count: Qm.away.length
            }),
            reveal: null !== (Am = null === wm || void 0 === wm ? void 0 : wm.name) && void 0 !== Am ? Am : null,
            renderRow: bm("away")
          })]
        }), Qm.banned.length > 0 && (0, Pm.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Pm.jsx)(qm.e, {
            label: im("lobbyManage:banned"),
            meta: Qm.banned.length
          }), (0, Pm.jsx)(ym, {
            names: Qm.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: im("lobbyManage:allCount", {
              count: Qm.banned.length
            }),
            reveal: null !== (am = null === wm || void 0 === wm ? void 0 : wm.name) && void 0 !== am ? am : null,
            renderRow: bm("banned")
          })]
        })]
      })
    }
    var um = fm(4564),
      Bm = fm(1643),
      Lm = fm(36788),
      tm = fm(36810),
      Um = fm(36801),
      dm = fm(36793),
      gm = fm(36831),
      Wm = fm(36818),
      Fm = fm(36823);

    function mT(mm) {
      const Tm = new Set;
      for (const fm of mm) Tm.add(fm.toLowerCase());
      return Tm
    }

    function TT(mm) {
      var Tm, fm;
      let {
        state: Am,
        lobbyName: am,
        listed: xm,
        isListed: wm,
        HV: Dm,
        pI: im,
        statusOf: Rm
      } = mm;
      const {
        t: pm,
        selectedLanguage: Em
      } = (0, om.A)(), Om = (0, Bm.i)(), Ym = (0, Im.k)("players"), jm = null === Ym.localId ? null : null !== (Tm = null === (fm = Ym.byId[Ym.localId]) || void 0 === fm ? void 0 : fm.name) && void 0 !== Tm ? Tm : null, Vm = (0, hm.useMemo)((() => (0, dm.f)(Om.friends, am, Am.here.map((mm => mm.name)))), [Om.friends, am, Am.here]), Km = new Map(Vm.map((mm => [mm.friend.name.toLowerCase(), mm]))), Qm = function(mm) {
        let {
          refused: Tm,
          listed: fm,
          here: hm,
          friends: Am,
          excluded: am
        } = mm;
        const xm = mT(am),
          wm = mm => mm.filter((mm => {
            const Tm = mm.toLowerCase();
            return !xm.has(Tm) && (xm.add(Tm), !0)
          }));
        return {
          added: [],
          refused: wm(Tm),
          listed: wm(fm),
          suggested: wm([...hm, ...Am])
        }
      }({
        refused: Am.refused.map((mm => mm.name)),
        listed: xm,
        here: Am.here.map((mm => mm.name)),
        friends: Vm.flatMap((mm => "here" === mm.place ? [] : [mm.friend.name])),
        excluded: [...null === jm ? [] : [jm], ...[...Am.here, ...Am.away].flatMap((mm => "none" === mm.role || (0, dm.g)(xm, mm.name) ? [] : [mm.name]))]
      }), [nm] = (0, hm.useState)(Qm), [Jm, cm] = (0, hm.useState)([]), zm = function(mm, Tm, fm) {
        const hm = mT(fm),
          Am = mT([...fm, ...mm.refused, ...mm.listed, ...mm.suggested]),
          am = fm => [...mm[fm].filter((mm => !hm.has(mm.toLowerCase()))), ...Tm[fm].filter((mm => {
            const Tm = mm.toLowerCase();
            return !Am.has(Tm) && (Am.add(Tm), !0)
          }))];
        return {
          added: [...fm],
          refused: am("refused"),
          listed: am("listed"),
          suggested: am("suggested")
        }
      }(nm, Qm, Jm), bm = (mm, Tm) => {
        var fm, hm;
        const am = mm.toLowerCase(),
          xm = Km.get(am),
          im = Am.here.find((mm => mm.name.toLowerCase() === am)),
          om = Am.refused.find((mm => mm.name.toLowerCase() === am)),
          Om = null !== (fm = null === Rm || void 0 === Rm ? void 0 : Rm(mm)) && void 0 !== fm ? fm : null;
        let Ym = null;
        Om ? Ym = (0, Pm.jsx)(Hm, {
          status: Om
        }) : om ? Ym = Nm(pm, Em.code, "lobbyManage:triedToJoinAgo", om.at, Date.now()) : xm && im ? Ym = pm("lobbyManage:friendHere") : xm ? Ym = "online" === xm.place ? pm("lobbyManage:friendOnline") : pm("lobbyManage:friend") : im && (Ym = pm("lobbyManage:hereStatus"));
        let qm = null !== (hm = null === xm || void 0 === xm ? void 0 : xm.friend) && void 0 !== hm ? hm : (0, km.h)(mm, null);
        return !xm && null !== im && void 0 !== im && im.id && (qm = (0, Zm.d)(im.id, im.name).playerSocialPreview), (0, Pm.jsx)(Wm.b, {
          playerSocialPreview: qm,
          isFriend: void 0 !== xm,
          hideFriendBadge: !0,
          status: Ym,
          zIndex: Tm,
          DE: {
            on: wm(mm),
            onChange: Tm => {
              Dm(mm, Tm)
            }
          }
        }, am)
      }, Sm = [...zm.added, ...zm.refused];
      return (0, Pm.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, Pm.jsx)(qm.e, {
          label: pm("worldSocial:whitelist"),
          meta: xm.length
        }), (0, Pm.jsx)(Fm.c, {
          label: pm("lobbyManage:add"),
          icon: "user-check",
          placeholder: pm("socialBar:enterPlayerName"),
          onSubmit: async mm => {
            const Tm = await im(mm);
            return Tm.ok && cm((Tm => [mm, ...Tm])), Tm
          }
        }), Sm.length > 0 && (0, Pm.jsx)("div", {
          className: "PlayerRows",
          children: Sm.map(((mm, Tm) => bm(mm, Sm.length - Tm)))
        }), (0, Pm.jsx)(ym, {
          names: zm.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: pm("lobbyManage:allOnWhitelist", {
            count: zm.listed.length
          }),
          renderRow: bm
        }), (0, Pm.jsx)(ym, {
          names: zm.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: pm("lobbyManage:allCount", {
            count: zm.suggested.length
          }),
          renderRow: bm
        })]
      })
    }

    function fT(mm) {
      let {
        manage: Tm,
        listing: fm
      } = mm;
      const {
        t: hm
      } = (0, om.A)(), am = (mm, fm) => ((0, Am.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: mm
      }), Tm.send({
        type: "setListing",
        field: mm,
        value: fm
      }, `listing:${mm}`)), xm = mm => {
        const fm = Tm.statusOf(`listing:${mm}`);
        return fm && !fm.ok && (0, Pm.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, Pm.jsx)(Hm, {
            status: fm
          })
        })
      };
      return (0, Pm.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, Pm.jsx)(qm.e, {
          label: hm("lobbyManage:inWorldsList")
        }), (0, Pm.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Pm.jsx)("div", {
            className: "SliderText",
            children: hm("lobbyManage:description")
          }), (0, Pm.jsx)(Cm, {
            value: fm.description,
            ariaLabel: hm("lobbyManage:description"),
            wide: !0,
            onSave: mm => am("description", mm)
          })]
        }), xm("description"), (0, Pm.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Pm.jsx)("div", {
            className: "SliderText",
            children: hm("lobbyManage:emojis")
          }), (0, Pm.jsx)(Cm, {
            value: fm.emojis,
            ariaLabel: hm("lobbyManage:emojis"),
            onSave: mm => am("emojis", mm)
          })]
        }), xm("emojis"), (0, Pm.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Pm.jsx)("div", {
            className: "SliderText",
            children: hm("lobbyManage:colour")
          }), (0, Pm.jsx)(hT, {
            value: fm.colour,
            ariaLabel: hm("lobbyManage:colour"),
            onSave: mm => {
              am("colour", mm)
            }
          })]
        }), xm("colour")]
      })
    }

    function hT(mm) {
      let {
        value: Tm,
        ariaLabel: fm,
        onSave: Am
      } = mm;
      const am = (0, hm.useRef)(null),
        xm = (0, hm.useRef)({
          value: Tm,
          onSave: Am
        });
      xm.current = {
        value: Tm,
        onSave: Am
      };
      const wm = (0, hm.useRef)(null),
        Dm = (0, hm.useRef)(!1),
        im = mm => {
          Dm.current && mm.value !== xm.current.value && mm.value !== wm.current && (wm.current = mm.value, xm.current.onSave(mm.value))
        };
      return (0, hm.useEffect)((() => {
        am.current && document.activeElement !== am.current && (am.current.value = Tm)
      }), [Tm]), (0, hm.useEffect)((() => {
        const mm = am.current,
          Tm = () => {
            im(mm)
          };
        return mm.addEventListener("change", Tm), () => {
          mm.removeEventListener("change", Tm), im(mm)
        }
      }), []), (0, Pm.jsx)("input", {
        ref: am,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: Tm,
        "aria-label": fm,
        onInput: () => {
          Dm.current = !0
        },
        onBlur: mm => {
          im(mm.currentTarget)
        }
      })
    }

    function AT(mm) {
      let {
        manage: Tm
      } = mm;
      const {
        lobbyName: fm,
        shownLobbyName: hm
      } = (0, Im.k)("connectedGame");
      return Tm.state.you.canSetVisibility && null !== fm ? (0, Pm.jsx)(xT, {
        manage: Tm,
        lobbyName: fm,
        worldCode: null !== hm && void 0 !== hm ? hm : fm
      }, fm) : (0, Pm.jsx)(wT, {
        manage: Tm,
        lobbyName: null !== fm && void 0 !== fm ? fm : ""
      })
    }

    function aT(mm) {
      return mm.map((mm => mm.toLowerCase())).sort().join(",")
    }

    function xT(mm) {
      var Tm;
      let {
        manage: fm,
        lobbyName: am,
        worldCode: xm
      } = mm;
      const {
        t: wm
      } = (0, om.A)(), {
        settings: Dm,
        loading: im,
        change: Rm,
        retry: pm,
        refresh: Em
      } = (0, Lm.j)(am), Om = (0, Bm.i)(), {
        state: jm
      } = fm, Vm = (0, hm.useRef)(Dm);
      Vm.current = Dm;
      const Im = aT(null !== (Tm = jm.whitelist) && void 0 !== Tm ? Tm : []),
        Qm = null !== jm.whitelist;
      (0, hm.useEffect)((() => {
        const mm = Vm.current;
        null !== mm && (mm.visibility !== jm.visibility || Qm && aT(mm.whitelist) !== Im) && Em()
      }), [jm.visibility, Im, Qm, Em]);
      const nm = async (mm, Tm) => {
        let fm = null;
        return await Rm(mm, Tm, {
          quiet: !0,
          onAnswer: mm => {
            fm = mm
          }
        }), fm
      }, Jm = (mm, Tm) => {
        null !== Tm && "error" in Tm && fm.showStatus(mm, {
          ok: !1,
          text: [wm(Tm.error)]
        })
      }, cm = async mm => {
        if (null === Dm || mm === Dm.visibility) return;
        (0, Am.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: mm
        });
        const Tm = "whitelist" === mm ? (0, dm.e)((0, dm.f)(Om.friends, am, jm.here.map((mm => mm.name))), (0, gm.c)(am), Dm.whitelist) : [],
          fm = await nm({
            setVisibility: mm
          }, (Tm => ({
            ...Tm,
            visibility: mm
          })));
        Jm("mode", fm), null === fm || "error" in fm || await (async mm => {
          for (const Tm of (0, dm.k)(mm, um.z))
            if (!await Rm({
                whitelistAdd: Tm
              }, (mm => (0, dm.p)(mm, Tm, !0)))) return !1;
          return !0
        })(Tm)
      }, zm = (0, hm.useMemo)((() => {
        var mm;
        if (null === Dm) return [];
        const Tm = null !== (mm = jm.whitelist) && void 0 !== mm ? mm : [];
        return [...Tm.filter((mm => (0, dm.g)(Dm.whitelist, mm))), ...Dm.whitelist.filter((mm => !(0, dm.g)(Tm, mm)))]
      }), [Dm, jm.whitelist]), Zm = fm.statusOf("mode");
      return (0, Pm.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Pm.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Pm.jsx)(qm.e, {
            label: wm("worldSocial:whoCanJoin")
          }), null === Dm && im && (0, Pm.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Pm.jsx)(Ym.c, {})
          }), null === Dm && !im && (0, Pm.jsx)(Km.g, {
            className: "SmallTextLight",
            onClick: pm,
            children: wm("worldSocial:loadFailed")
          }), null !== Dm && (0, Pm.jsx)(tm.e, {
            visibility: Dm.visibility,
            onPick: mm => {
              cm(mm)
            }
          }), Zm && (0, Pm.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, Pm.jsx)(Hm, {
              status: Zm
            })
          }), null !== Dm && "private" !== Dm.visibility && (0, Pm.jsx)(Um.c, {
            worldCode: xm,
            message: null
          })]
        }), "whitelist" === (null === Dm || void 0 === Dm ? void 0 : Dm.visibility) && (0, Pm.jsx)(TT, {
          state: jm,
          lobbyName: am,
          listed: zm,
          isListed: mm => (0, dm.g)(Dm.whitelist, mm),
          HV: (mm, Tm) => {
            (0, Am.reportAnalyticsClick)(Tm ? {
              id: "lobby_manage.whitelist_add",
              value: "DE"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), nm(Tm ? {
              whitelistAdd: [mm]
            } : {
              whitelistRemove: mm
            }, (fm => (0, dm.p)(fm, [mm], Tm))).then((Tm => {
              Jm(`whitelist:${mm.toLowerCase()}`, Tm)
            }))
          },
          pI: async mm => {
            (0, Am.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Tm = await nm({
              whitelistAdd: [mm]
            }, (Tm => (0, dm.p)(Tm, [mm], !0)));
            return null === Tm ? {
              ok: !1,
              error: wm("worldSocial:changeFailed")
            } : "error" in Tm ? {
              ok: !1,
              error: wm(Tm.error)
            } : (0, dm.g)(Tm.notFound, mm) ? {
              ok: !1,
              error: wm("lobbyManage:noPlayerCalled", {
                playerName: mm
              })
            } : {
              ok: !0
            }
          },
          statusOf: mm => fm.statusOf(`whitelist:${mm.toLowerCase()}`)
        }), "public" === (null === Dm || void 0 === Dm ? void 0 : Dm.visibility) && null !== jm.listing && (0, Pm.jsx)(fT, {
          manage: fm,
          listing: jm.listing
        })]
      })
    }

    function wT(mm) {
      var Tm;
      let {
        manage: fm,
        lobbyName: hm
      } = mm;
      const {
        t: am
      } = (0, om.A)(), {
        state: xm
      } = fm, wm = Rm(), Dm = null !== (Tm = xm.whitelist) && void 0 !== Tm ? Tm : [];
      return (0, Pm.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Pm.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Pm.jsx)(qm.e, {
            label: am("worldSocial:whoCanJoin")
          }), (0, Pm.jsx)("div", {
            className: "LobbyManageModeText",
            children: am(`worldSocial:${xm.visibility}`)
          })]
        }), "whitelist" === xm.visibility && xm.you.canEditWhitelist && (0, Pm.jsx)(TT, {
          state: xm,
          lobbyName: hm,
          listed: Dm,
          isListed: mm => {
            var Tm;
            return null !== (Tm = wm.get(mm.toLowerCase())) && void 0 !== Tm ? Tm : (0, dm.g)(Dm, mm)
          },
          HV: (mm, Tm) => {
            (0, Am.reportAnalyticsClick)(Tm ? {
              id: "lobby_manage.whitelist_add",
              value: "DE"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const hm = mm.toLowerCase();
            wm.hold(hm, Tm, fm.send(Tm ? {
              type: "whitelistAdd",
              names: [mm]
            } : {
              type: "whitelistRemove",
              name: mm
            }, `whitelist:${hm}`))
          },
          pI: async mm => {
            (0, Am.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Tm = await fm.send({
              type: "whitelistAdd",
              names: [mm]
            }, "whitelist-field");
            return Tm.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, Pm.jsx)(Gm.b, {
                text: Tm.message
              })
            }
          },
          statusOf: mm => fm.statusOf(`whitelist:${mm.toLowerCase()}`)
        }), "public" === xm.visibility && null !== xm.listing && (0, Pm.jsx)(fT, {
          manage: fm,
          listing: xm.listing
        })]
      })
    }
    var DT = fm(4954),
      iT = fm(1362);
    const RT = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const pT = (0, hm.memo)((function(mm) {
      var Tm;
      let {
        rule: fm,
        value: hm,
        status: Am,
        pending: am,
        hiddenNames: xm,
        GJ: wm,
        onAction: Dm
      } = mm;
      const {
        t: im
      } = (0, om.A)(), Rm = mm => wm(fm, mm), pm = (mm, Tm) => {
        Dm(fm, mm, Tm)
      }, Em = em(im, fm.label, xm), Om = fm.info ? em(im, fm.info, xm) : void 0, Ym = fm.placeholder ? em(im, fm.placeholder, xm) : void 0, qm = (null !== (Tm = fm.options) && void 0 !== Tm ? Tm : []).map((mm => ({
        value: mm.value,
        label: em(im, mm.label, xm)
      }))), jm = Math.max(0, ...qm.map((mm => function(mm) {
        let Tm = 0;
        for (const fm of mm) Tm += RT.test(fm) ? 2 : 1;
        return Tm
      }(mm.label)))), Vm = Am && (0, Pm.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, Pm.jsx)(Hm, {
          status: Am
        })
      }), Im = (0, Pm.jsxs)("div", {
        className: "SliderText",
        children: [Em, void 0 !== Om && (0, Pm.jsx)(iT.e, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: Om
        })]
      });
      return "toggle" === fm.kind ? (0, Pm.jsxs)(Pm.Fragment, {
        children: [(0, Pm.jsx)(DT.e, {
          label: Em,
          checked: !0 === hm,
          circleInfoText: Om,
          disabled: am,
          onClick: Rm
        }), Vm]
      }) : "choice" === fm.kind && qm.length <= 3 ? (0, Pm.jsxs)(Pm.Fragment, {
        children: [(0, Pm.jsx)(DT.i, {
          label: Em,
          options: qm,
          value: String(hm),
          circleInfoText: Om,
          onChange: Rm
        }), Vm]
      }) : (0, Pm.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [Im, "choice" === fm.kind && (0, Pm.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": jm
          },
          children: (0, Pm.jsx)(bm.d, {
            options: qm,
            value: String(hm),
            disabled: am,
            onChange: mm => {
              Rm(mm.value)
            }
          })
        }), ("number" === fm.kind || "text" === fm.kind) && (0, Pm.jsx)(Cm, {
          value: null === hm ? "" : String(hm),
          placeholder: Ym,
          ariaLabel: Em,
          onSave: mm => {
            const Tm = mm.trim(),
              hm = Number(Tm);
            return Rm("number" === fm.kind && "" !== Tm && Number.isFinite(hm) ? hm : Tm)
          }
        }), "action" === fm.kind && (0, Pm.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [qm.length > 3 && (0, Pm.jsx)(bm.d, {
            options: qm,
            value: {
              value: "",
              label: null !== Ym && void 0 !== Ym ? Ym : Em
            },
            disabled: am,
            onChange: mm => {
              pm(mm.value)
            }
          }), qm.length > 0 && qm.length <= 3 && qm.map((mm => (0, Pm.jsx)(Km.g, {
            className: "SmallTextLight",
            disabled: am,
            onClick: () => {
              pm(mm.value)
            },
            children: mm.label
          }, mm.value))), 0 === qm.length && (0, Pm.jsx)(Km.g, {
            className: "SmallTextLight",
            disabled: am,
            onClick: () => {
              pm()
            },
            children: null !== Ym && void 0 !== Ym ? Ym : Em
          })]
        }), "names" === fm.kind && (0, Pm.jsx)(ET, {
          names: Array.isArray(hm) ? hm : [],
          pending: am,
          onAction: pm
        }), Vm]
      })
    }));

    function ET(mm) {
      let {
        names: Tm,
        pending: fm,
        onAction: Am
      } = mm;
      const {
        t: am
      } = (0, om.A)(), xm = (0, hm.useRef)(null), [wm, Dm] = (0, hm.useState)(""), im = () => {
        const mm = wm.trim();
        "" !== mm && (Am(mm, "add"), xm.current && (xm.current.value = ""), Dm(""))
      };
      return (0, Pm.jsxs)("div", {
        className: "LobbyManageNames",
        children: [Tm.map((mm => (0, Pm.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, Pm.jsx)("span", {
            className: "LobbyManageNameText",
            children: mm
          }), (0, Pm.jsx)(Km.g, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: am("lobbyManage:removeName", {
              name: mm
            }),
            disabled: fm,
            onClick: () => {
              Am(mm, "remove")
            },
            children: (0, Pm.jsx)(Om.c, {
              name: "xmark"
            })
          })]
        }, mm))), (0, Pm.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, Pm.jsx)(Xm.e, {
            domRef: xm,
            placeholderText: am("lobbyManage:namePlaceholder"),
            ariaLabel: am("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: mm => {
              Dm(mm)
            },
            onEnter: im
          }), (0, Pm.jsx)(Km.g, {
            className: "SmallTextLight",
            disabled: fm || "" === wm.trim(),
            onClick: im,
            children: am("lobbyManage:addHere")
          })]
        })]
      })
    }
    const oT = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function OT(mm, Tm) {
      return oT.map((fm => {
        let {
          group: hm,
          title: Am
        } = fm;
        const am = mm.filter((mm => mm.group === hm && void 0 === mm.parent)).map((fm => {
          const hm = !0 === Tm(fm) ? mm.filter((mm => mm.parent === fm.key)) : [];
          return {
            rule: fm,
            children: hm
          }
        }));
        return {
          group: hm,
          title: Am,
          items: am
        }
      }))
    }

    function YT(mm) {
      return mm.flatMap((mm => {
        let {
          items: Tm
        } = mm;
        return Tm.flatMap((mm => {
          let {
            rule: Tm,
            children: fm
          } = mm;
          return [Tm, ...fm]
        }))
      }))
    }

    function qT(mm) {
      let {
        manage: Tm,
        rowsShown: fm
      } = mm;
      const {
        t: am
      } = (0, om.A)(), xm = (0, Im.k)("hiddenPlayerNames"), {
        rules: wm
      } = Tm.state, Dm = Rm(), im = mm => {
        const Tm = Dm.get(mm.key);
        return void 0 === Tm ? mm.value : Tm
      }, pm = OT(wm, im), [Em] = (0, hm.useState)((() => YT(pm).map((mm => mm.key)))), Om = fm === 1 / 0 ? null : new Set(Em.slice(0, fm)), Ym = mm => null === Om || Om.has(mm.key), {
        hold: jm
      } = Dm, Vm = (0, hm.useCallback)(((mm, fm) => {
        (0, Am.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: mm.key
        });
        const hm = Tm.send({
          type: "setRule",
          key: mm.key,
          value: fm
        }, `rule:${mm.key}`);
        return jm(mm.key, fm, hm), hm
      }), [Tm, jm]), Km = (0, hm.useCallback)(((mm, fm, hm) => {
        (0, Am.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: mm.key
        }), Tm.send({
          type: "ruleAction",
          key: mm.key,
          ...void 0 === fm ? {} : {
            arg: fm
          },
          ...void 0 === hm ? {} : {
            op: hm
          }
        }, `rule:${mm.key}`, void 0 === hm ? am("lobbyManage:setJustNow") : void 0)
      }), [Tm, am]), Qm = mm => {
        const fm = `rule:${mm.key}`;
        return (0, Pm.jsx)(pT, {
          rule: mm,
          value: im(mm),
          status: Tm.statusOf(fm),
          pending: Tm.isPending(fm),
          hiddenNames: xm,
          GJ: Vm,
          onAction: Km
        }, mm.key)
      };
      return (0, Pm.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: pm.map((mm => {
          let {
            group: Tm,
            title: fm,
            items: Am
          } = mm;
          const xm = Am.filter((mm => {
            let {
              rule: Tm
            } = mm;
            return Ym(Tm)
          }));
          return 0 === xm.length ? null : (0, Pm.jsxs)(hm.Fragment, {
            children: [(0, Pm.jsx)(qm.e, {
              label: am(fm)
            }), xm.map((mm => {
              let {
                rule: Tm,
                children: fm
              } = mm;
              return 0 === fm.length ? Qm(Tm) : (0, Pm.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [Qm(Tm), fm.filter(Ym).map(Qm)]
              }, Tm.key)
            }))]
          }, Tm)
        }))
      })
    }
    const jT = {
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
      VT = 5,
      IT = (0, hm.memo)((function(mm) {
        let {
          page: Tm,
          manage: fm,
          leaderboard: Am,
          focusRequest: am,
          onFocused: xm,
          ruleRowsShown: wm
        } = mm;
        return "leaderboard" === Tm ? (0, Pm.jsx)(hm.Suspense, {
          fallback: (0, Pm.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Pm.jsx)(Ym.c, {})
          }),
          children: Am
        }) : "joining" === Tm ? (0, Pm.jsx)(AT, {
          manage: fm
        }) : "rules" === Tm ? (0, Pm.jsx)(qT, {
          manage: fm,
          rowsShown: wm
        }) : (0, Pm.jsx)(Mm, {
          manage: fm,
          focusRequest: am,
          onFocused: xm
        })
      }));

    function KT(mm) {
      let {
        page: Tm
      } = mm;
      const {
        t: fm
      } = (0, om.A)(), hm = jT[Tm];
      return (0, Pm.jsxs)(Pm.Fragment, {
        children: [(0, Pm.jsx)(Om.c, {
          name: hm.icon
        }), " ", (0, Pm.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: fm(hm.title)
        })]
      })
    }

    function QT(mm) {
      var Tm;
      const {
        t: fm
      } = (0, om.A)(), {
        pages: am,
        landing: xm
      } = mm, Dm = (0, hm.useRef)(null), im = (0, hm.useRef)(null), Rm = (0, hm.useRef)(null), pm = (0, hm.useRef)(new Map), [Om, Ym] = (0, hm.useState)(null), Im = (0, hm.useRef)(Om), Km = (0, hm.useRef)(0), [Qm, nm] = (0, hm.useState)(am[0]), Jm = null !== Om && void 0 !== Om ? Om : am.includes(Qm) ? Qm : am[0], [cm] = (0, hm.useState)(null !== (Tm = null === xm || void 0 === xm ? void 0 : xm.page) && void 0 !== Tm ? Tm : null), zm = null !== cm && am.includes(cm) ? [cm, ...am.filter((mm => mm !== cm))] : am, [Zm] = (0, hm.useState)((() => {
        const Tm = YT(OT(mm.manage.state.rules, (mm => mm.value)));
        return Math.max(1, Math.ceil(Tm.length / VT))
      })), km = zm.flatMap((mm => "rules" === mm ? Array(Zm).fill(mm) : [mm])), bm = function(mm, Tm) {
        const [fm, Am] = (0, hm.useState)(mm), am = fm >= Tm;
        return am && fm !== 1 / 0 && Am(1 / 0), (0, hm.useLayoutEffect)((() => {
          if (am) return;
          let mm = !0;
          return (0, Vm.d)().then((() => {
            mm && Am((mm => mm + 1))
          })), () => {
            mm = !1
          }
        }), [fm, am]), am ? 1 / 0 : fm
      }(1, km.length), Sm = km.slice(0, bm), em = new Set(Sm), Nm = bm < km.length, Gm = Nm ? Sm.filter((mm => "rules" === mm)).length * VT : 1 / 0, Xm = (0, hm.useRef)(mm.focusRequest);
      Xm.current = mm.focusRequest;
      const Hm = mm => {
          Im.current = mm, Ym(mm)
        },
        ym = () => {
          var mm, Tm;
          Dm.current.style.scrollPaddingTop = `${null!==(mm=null===(Tm=Rm.current)||void 0===Tm?void 0:Tm.offsetHeight)&&void 0!==mm?mm:0}px`
        },
        Cm = mm => {
          const Tm = Dm.current,
            fm = pm.current.get(mm);
          if (void 0 === fm) return;
          const hm = document.activeElement,
            Am = Xm.current,
            am = null === Am ? null : fm.querySelector(`[data-lobby-manage-row="${CSS.escape(Am.name)}"]`);
          ym(), hm instanceof HTMLElement && null !== am && void 0 !== am && am.contains(hm) ? hm.scrollIntoView({
            block: "center"
          }) : null === fm.previousElementSibling ? Tm.scrollTop = 0 : fm.scrollIntoView({
            block: "start"
          }), Km.current = Tm.scrollTop
        },
        rm = mm => {
          (0, Am.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: mm
          }), Hm(mm), Cm(mm)
        },
        sm = () => {
          var mm, Tm;
          const fm = Dm.current,
            hm = fm.getBoundingClientRect().top + (null !== (mm = null === (Tm = Rm.current) || void 0 === Tm ? void 0 : Tm.offsetHeight) && void 0 !== mm ? mm : 0),
            Am = am.map((mm => {
              var Tm, fm;
              return (null !== (Tm = null === (fm = pm.current.get(mm)) || void 0 === fm ? void 0 : fm.getBoundingClientRect().top) && void 0 !== Tm ? Tm : 1 / 0) - hm
            })),
            xm = !Nm && fm.scrollTop + fm.clientHeight >= fm.scrollHeight - 1;
          nm(am[(0, wm.h)(Am, xm)])
        },
        lm = () => {
          null !== Im.current && (Hm(null), sm())
        };
      (0, hm.useLayoutEffect)((() => {
        null !== xm && am.includes(xm.page) && rm(xm.page)
      }), [null === xm || void 0 === xm ? void 0 : xm.seq]), (0, hm.useLayoutEffect)((() => {
        null === Im.current || am.includes(Im.current) || lm()
      }));
      const {
        onFocused: Mm
      } = mm, um = (0, hm.useCallback)((mm => {
        null !== Im.current && Cm(Im.current), Mm(mm)
      }), [Mm]);
      (0, hm.useLayoutEffect)((() => {
        const mm = Im.current;
        null !== mm && (!Nm || am.indexOf(km[bm - 1]) < am.indexOf(mm)) && Cm(mm)
      }), [bm]), (0, hm.useEffect)((() => {
        const mm = new ResizeObserver((() => {
          null !== Im.current ? Cm(Im.current) : ym()
        }));
        return mm.observe(Dm.current), mm.observe(im.current), () => {
          mm.disconnect()
        }
      }), []), (0, hm.useLayoutEffect)((() => {
        const mm = Rm.current,
          Tm = null === mm || void 0 === mm ? void 0 : mm.querySelector(".SegmentedToggleOptionSelected");
        Tm && (mm.scrollLeft = Math.min(Tm.offsetLeft, Math.max(mm.scrollLeft, Tm.offsetLeft + Tm.offsetWidth - mm.clientWidth)))
      }), [Jm]);
      return (0, Pm.jsxs)("div", {
        ref: Dm,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === Im.current ? sm() : Math.abs(Dm.current.scrollTop - Km.current) > 1 && lm()
        },
        onClick: mm => {
          var Tm;
          null !== (Tm = Rm.current) && void 0 !== Tm && Tm.contains(mm.target) || lm()
        },
        onFocus: mm => {
          var Tm;
          const fm = null === Im.current ? null : pm.current.get(Im.current);
          !fm || fm.contains(mm.target) || null !== (Tm = Rm.current) && void 0 !== Tm && Tm.contains(mm.target) || lm()
        },
        children: [am.length > 1 && (0, Pm.jsx)("div", {
          ref: Rm,
          className: "LobbyManageChips",
          children: (0, Pm.jsx)(jm.b, {
            options: am.map((mm => ({
              value: mm,
              label: (0, Pm.jsx)(KT, {
                page: mm
              }),
              ariaLabel: fm(jT[mm].title)
            }))),
            value: Jm,
            padTabs: "2",
            ariaLabel: fm("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: rm
          })
        }), (0, Pm.jsx)("div", {
          ref: im,
          className: Em()("LobbyManageInner", {
            Staging: Nm
          }),
          children: am.filter((mm => em.has(mm))).map((Tm => {
            const fm = Tm === Om;
            return (0, Pm.jsxs)("section", {
              ref: mm => {
                mm ? pm.current.set(Tm, mm) : pm.current.delete(Tm)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": fm || void 0,
              children: [am.length > 1 && (0, Pm.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": fm || void 0,
                "data-pad-unavailable": fm || void 0,
                children: (0, Pm.jsx)(qm.e, {
                  label: (0, Pm.jsx)(KT, {
                    page: Tm
                  })
                })
              }), (0, Pm.jsx)(IT, {
                page: Tm,
                manage: mm.manage,
                leaderboard: mm.leaderboard,
                focusRequest: mm.focusRequest,
                onFocused: um,
                ruleRowsShown: "rules" === Tm ? Gm : 1 / 0
              })]
            }, Tm)
          }))
        })]
      })
    }

    function nT(mm) {
      return void 0 === (null === mm || void 0 === mm ? void 0 : mm.page) ? null : {
        page: mm.page,
        seq: mm.seq
      }
    }

    function JT(mm) {
      let {
        leaderboard: Tm
      } = mm;
      const fm = function() {
          const mm = (0, Dm.g)("lobbyManage"),
            [Tm, fm] = (0, hm.useReducer)((mm => mm + 1), 0),
            [Am] = (0, hm.useState)((() => new im.e(fm)));
          return (0, hm.useEffect)((() => {
            const mm = Am.nextDeadline();
            if (null === mm) return;
            const Tm = setTimeout((() => {
              Am.expire(Date.now()), fm()
            }), Math.max(0, mm - Date.now()));
            return () => {
              clearTimeout(Tm)
            }
          })), (0, hm.useMemo)((() => null === mm ? null : {
            state: mm,
            send: (mm, Tm, hm) => {
              const am = Am.send(mm, Tm, null !== hm && void 0 !== hm ? hm : null);
              return fm(), am
            },
            statusOf: mm => Am.statusOf(mm, Date.now()),
            showStatus: (mm, Tm) => {
              Am.show(mm, Tm)
            },
            isPending: mm => Am.isPending(mm)
          }), [mm, Tm, Am])
        }(),
        Rm = (0, wm.l)((0, am.e)()),
        pm = (0, xm.o)(),
        [Em, om] = (0, hm.useState)((() => nT(pm))),
        [Om, Ym] = (0, hm.useState)(null);
      return (0, hm.useEffect)((() => {
        null === pm && (0, Am.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, hm.useEffect)((() => {
        null !== pm && (om((mm => (null === mm || void 0 === mm ? void 0 : mm.seq) === pm.seq ? mm : nT(pm))), void 0 !== pm.focusName && "players" === pm.page ? Ym({
          name: pm.focusName,
          seq: pm.seq
        }) : (0, xm.k)(pm.seq))
      }), [null === pm || void 0 === pm ? void 0 : pm.seq]), null === fm ? null : (0, Pm.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, Pm.jsx)(QT, {
          pages: (0, wm.d)(fm.state, Rm),
          manage: fm,
          leaderboard: Tm,
          focusRequest: Om,
          onFocused: xm.k,
          landing: Em
        })
      })
    }
  },
  36649: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Rm,
      h: () => Dm
    });
    var hm = fm(1476),
      Am = fm(1928),
      am = fm(1905);
    const xm = 1e4;
    let wm = 0;

    function Dm(mm) {
      const Tm = ++wm;
      return new Promise((fm => {
        const wm = Tm => {
            Dm(), clearTimeout(im), !1 === (null === Tm || void 0 === Tm ? void 0 : Tm.ok) && (0, hm.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: mm.type
            }), fm(Tm)
          },
          Dm = Am.b.subscribe("lobbyManage", (mm => {
            const fm = function(mm, Tm) {
              var fm;
              return null !== (fm = null === mm || void 0 === mm ? void 0 : mm.results.find((mm => mm.requestId === Tm))) && void 0 !== fm ? fm : null
            }(mm, Tm);
            null !== fm && wm(fm)
          })),
          im = setTimeout((() => {
            wm(null)
          }), xm);
        am.gameBridge.send("lobbyManage", {
          ...mm,
          requestId: Tm
        })
      }))
    }
    const im = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class Rm {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dm;
        this.onChange = mm, this.sendAction = Tm, this.pending = new Map, this.statuses = new Map
      }
      send(mm, Tm, fm) {
        var hm;
        return this.statuses.delete(Tm), this.pending.set(Tm, (null !== (hm = this.pending.get(Tm)) && void 0 !== hm ? hm : 0) + 1), this.sendAction(mm).then((mm => {
          var hm;
          const Am = null !== mm && void 0 !== mm ? mm : {
              requestId: -1,
              ok: !1,
              message: im
            },
            am = (null !== (hm = this.pending.get(Tm)) && void 0 !== hm ? hm : 1) - 1;
          am > 0 ? this.pending.set(Tm, am) : this.pending.delete(Tm);
          const xm = !Am.ok || Am.message.length > 0 ? Am.message : null === fm ? null : [fm];
          return null !== xm && this.statuses.set(Tm, {
            ok: Am.ok,
            text: xm,
            until: Date.now() + 4e3
          }), this.onChange(), Am
        }))
      }
      show(mm, Tm) {
        this.statuses.set(mm, {
          ...Tm,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(mm) {
        for (const [Tm, fm] of this.statuses) fm.until <= mm && this.statuses.delete(Tm)
      }
      nextDeadline() {
        let mm = null;
        for (const fm of this.statuses.values()) {
          var Tm;
          mm = Math.min(null !== (Tm = mm) && void 0 !== Tm ? Tm : 1 / 0, fm.until)
        }
        return mm
      }
      statusOf(mm, Tm) {
        const fm = this.statuses.get(mm);
        return !fm || fm.until <= Tm ? null : {
          ok: fm.ok,
          text: fm.text
        }
      }
      isPending(mm) {
        return this.pending.has(mm)
      }
    }
  },
  36635: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im,
      f: () => Dm
    });
    var hm = fm(641),
      Am = fm(1905),
      am = fm(1643),
      xm = fm(105),
      wm = fm(1268);

    function Dm(mm, Tm, fm) {
      return xm.featureFlags.useSocialFeatures && mm && null === (0, wm.c)(Tm, fm)
    }

    function im(mm, Tm) {
      var fm, xm;
      const wm = am.e.getSocialState().friends.find((mm => mm.name.toLowerCase() === Tm.toLowerCase())),
        Dm = Am.gameBridge.latest("players").byId[mm],
        im = void 0 !== Dm && Dm.name === Tm,
        Rm = im && null !== (fm = Dm.cosmetics) && void 0 !== fm ? fm : void 0,
        pm = wm && Rm ? {
          ...wm,
          cosmetics: Rm
        } : wm;
      return {
        playerSocialPreview: null !== pm && void 0 !== pm ? pm : {
          isError: !1,
          name: Tm,
          ranks: im ? [...Dm.ranks] : [],
          cosmetics: null !== Rm && void 0 !== Rm ? Rm : {},
          nameColour: null !== (xm = null === Rm || void 0 === Rm ? void 0 : Rm.nameColour) && void 0 !== xm ? xm : hm.b,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== wm
      }
    }
  },
  36823: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => pm
    });
    var hm = fm(59),
      Am = fm(1080),
      am = fm.n(Am),
      xm = fm(1676),
      wm = fm(1454),
      Dm = fm(1345),
      im = fm(1089),
      Rm = fm(1135);

    function pm(mm) {
      let {
        label: Tm,
        icon: fm,
        placeholder: Am,
        onSubmit: pm
      } = mm;
      const Em = (0, hm.useRef)(null),
        [om, Om] = (0, hm.useState)(""),
        [Ym, qm] = (0, hm.useState)("Enter"),
        [jm, Vm] = (0, hm.useState)(null);
      (0, hm.useEffect)((() => {
        if ("Success" !== Ym && "Error" !== Ym) return;
        const mm = setTimeout((() => {
          "Success" === Ym && Em.current && (Em.current.value = "", Om("")), qm("Enter")
        }), "Success" === Ym ? 1e3 : 4e3);
        return () => {
          clearTimeout(mm)
        }
      }), [Ym]);
      const Im = () => {
        const mm = om.trim();
        "" !== mm && "Enter" === Ym && (qm("Loading"), pm(mm).then((mm => {
          Em.current && ("error" in mm ? null === mm.error ? qm("Enter") : (Vm(mm.error), qm("Error")) : qm("Success"))
        })))
      };
      return (0, Rm.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: mm => {
          mm.target === Em.current && "Escape" !== mm.key && mm.stopPropagation()
        },
        children: [(0, Rm.jsxs)("div", {
          className: am()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Ym}`),
          children: ["Loading" === Ym && (0, Rm.jsx)(Dm.c, {}), "Success" === Ym && (0, Rm.jsx)(im.c, {
            name: "check"
          }), "Error" === Ym && jm]
        }), (0, Rm.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, Rm.jsx)(xm.e, {
            className: "PlayerSearchInput",
            domRef: Em,
            maxLength: 32,
            placeholderText: Am,
            ariaLabel: Am,
            stopPropagation: !1,
            onValueChange: mm => {
              Om(mm)
            },
            onEnter: Im
          }), (0, Rm.jsxs)(wm.e, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Ym || "" === om.trim(),
            onClick: Im,
            children: [(0, Rm.jsx)(im.c, {
              name: fm
            }), " ", Tm]
          })]
        })]
      })
    }
  },
  36810: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => pm
    });
    var hm = fm(59),
      Am = fm(1080),
      am = fm.n(Am),
      xm = fm(1208),
      wm = fm(1089),
      Dm = fm(1135);
    const im = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Rm = ["unlisted", "public", "whitelist", "private"];

    function pm(mm) {
      let {
        visibility: Tm,
        onPick: fm
      } = mm;
      const {
        t: Am
      } = (0, xm.A)(), pm = (0, hm.useRef)([]);
      return (0, Dm.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Am("worldSocial:whoCanJoin"),
        children: Rm.map(((mm, hm) => {
          const xm = mm === Tm;
          return (0, Dm.jsxs)("button", {
            ref: mm => {
              pm.current[hm] = mm
            },
            type: "button",
            className: am()("WorldSocialTile", {
              WorldSocialTileSelected: xm
            }),
            "aria-pressed": xm,
            tabIndex: xm ? 0 : -1,
            onKeyDown: mm => {
              ((mm, Tm) => {
                const fm = "ArrowRight" === mm.key || "ArrowDown" === mm.key ? 1 : "ArrowLeft" === mm.key || "ArrowUp" === mm.key ? -1 : 0;
                var hm;
                0 !== fm && (mm.preventDefault(), null === (hm = pm.current[(Tm + fm + Rm.length) % Rm.length]) || void 0 === hm || hm.focus())
              })(mm, hm)
            },
            onClick: () => {
              fm(mm)
            },
            children: [(0, Dm.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, Dm.jsx)(wm.c, {
                name: im[mm]
              })
            }), (0, Dm.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, Dm.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Am(`worldSocial:${mm}`)
              }), (0, Dm.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Am(`worldSocial:${mm}Description`)
              })]
            })]
          }, mm)
        }))
      })
    }
  },
  36818: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm
    });
    var hm = fm(1208),
      Am = fm(2644),
      am = fm(4304),
      xm = fm(1135);

    function wm(mm) {
      let {
        DE: Tm,
        children: fm,
        ...wm
      } = mm;
      const {
        t: Dm
      } = (0, hm.A)();
      return (0, xm.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          Tm.onChange(!Tm.on)
        },
        children: (0, xm.jsx)(Am.c, {
          ...wm,
          opensProfileCard: !1,
          children: (0, xm.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: mm => {
              mm.stopPropagation()
            },
            children: [fm, (0, xm.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, xm.jsx)(am.b, {
                checked: Tm.on,
                disabled: !1,
                ariaLabel: Dm("worldSocial:letJoin", {
                  playerName: wm.playerSocialPreview.name
                }),
                onChange: mm => {
                  Tm.onChange(mm.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36801: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Om
    });
    var hm = fm(59),
      Am = fm(1208),
      am = fm(1842),
      xm = fm(105),
      wm = fm(23),
      Dm = fm(1476),
      im = fm(2670),
      Rm = fm(34180),
      pm = fm(1454),
      Em = fm(1089),
      om = fm(1135);

    function Om(mm) {
      let {
        worldCode: Tm,
        message: fm
      } = mm;
      const {
        t: Om
      } = (0, Am.A)(), {
        isTouchScreen: Ym
      } = (0, wm.m)(["isTouchScreen"]), qm = xm.featureFlags.canUseInviteLinks, jm = (0, Rm.f)(qm && null === fm), [Vm, Im] = (0, im.h)(), Km = (0, hm.useRef)(null);
      if (null !== fm) return (0, om.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, om.jsx)(Em.c, {
          name: "lock"
        }), (0, om.jsx)("span", {
          children: fm
        })]
      });
      const Qm = qm ? jm : Tm,
        nm = Ym && qm && (0, im.c)();
      return (0, om.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!qm && (0, om.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Om("worldSocial:worldCode")
        }), (0, om.jsx)("input", {
          ref: Km,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Qm && void 0 !== Qm ? Qm : "",
          "aria-label": Om(qm ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: mm => {
            mm.currentTarget.select()
          }
        }), (0, om.jsxs)(pm.e, {
          className: "WorldSocialCopy",
          disabled: null === Qm,
          onClick: () => {
            null !== Qm && (0, im.d)(Qm, {
              useShareSheet: nm,
              onOutcome: mm => {
                if ((0, Dm.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== mm || qm ? mm : "code"
                  }), "copied" === mm) Im();
                else if ("failed" === mm) {
                  var Tm;
                  null === (Tm = Km.current) || void 0 === Tm || Tm.focus(), am.d.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, om.jsx)(Em.c, {
            name: Vm ? "check" : nm ? "up-from-bracket" : "copy"
          }), " ", Om(Vm ? "general:copied" : nm ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36813: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => om,
      d: () => Em,
      h: () => pm
    });
    var hm = fm(641),
      Am = fm(1208),
      am = fm(1643),
      xm = fm(2644),
      wm = fm(2588),
      Dm = fm(1454),
      im = fm(36818),
      Rm = fm(1135);

    function pm(mm, Tm) {
      var fm;
      return {
        isError: !1,
        name: mm,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== Tm && void 0 !== Tm ? Tm : {},
        nameColour: null !== (fm = null === Tm || void 0 === Tm ? void 0 : Tm.nameColour) && void 0 !== fm ? fm : hm.b,
        location: {
          status: "offline"
        }
      }
    }

    function Em(mm) {
      let {
        player: Tm,
        isFriend: fm = !1,
        status: hm,
        showLocation: Dm = void 0 === hm,
        DE: pm,
        onSendFriendRequest: Em,
        actions: om,
        zIndex: Om
      } = mm;
      const {
        t: Ym
      } = (0, Am.A)();
      let qm = hm;
      null !== pm && void 0 !== pm && pm.on && (qm = (0, Rm.jsxs)(Rm.Fragment, {
        children: [null !== hm && void 0 !== hm ? hm : (0, Rm.jsx)(wm.d, {
          socialPreview: Tm
        }), (0, Rm.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Ym("worldSocial:canJoin")]
        })]
      }));
      const jm = {
        playerSocialPreview: Tm,
        isFriend: fm,
        hideFriendBadge: !0,
        onFriendRemoved: fm ? mm => {
          am.e.removeFriendFromState(mm)
        } : void 0,
        status: qm,
        showLocation: Dm,
        onSendFriendRequest: Em,
        zIndex: Om
      };
      return pm ? (0, Rm.jsx)(im.b, {
        ...jm,
        DE: pm,
        children: om
      }) : (0, Rm.jsx)(xm.c, {
        ...jm,
        opensProfileCard: !1,
        children: om || void 0
      })
    }

    function om(mm) {
      let {
        row: Tm,
        DE: fm,
        canInvite: hm,
        invited: am,
        onInvite: xm,
        zIndex: wm
      } = mm;
      const {
        t: im
      } = (0, Am.A)(), pm = "online" === Tm.place ? Dm.e : Dm.g;
      return (0, Rm.jsx)(Em, {
        player: Tm.friend,
        isFriend: !0,
        status: "here" === Tm.place ? im("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        DE: fm,
        zIndex: wm,
        actions: hm && (0, Rm.jsx)(pm, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: am,
          onClick: xm,
          ariaLabel: `${im("worldSocial:invite")} ${Tm.friend.name}`,
          children: im(am ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36788: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Dm,
      g: () => xm,
      j: () => im
    });
    var hm = fm(59),
      Am = fm(4523),
      am = fm(1842);

    function xm(mm) {
      const Tm = {
        lobbyName: mm,
        answer: null,
        response: Am.b.getSocialSettings(mm)
      };
      return Tm.response.then((mm => {
        Tm.answer = mm
      })), Tm
    }
    const wm = new Map;

    function Dm(mm) {
      wm.set(mm.lobbyName, mm)
    }

    function im(mm) {
      const [Tm] = (0, hm.useState)((() => function(mm) {
        var Tm;
        const fm = null !== (Tm = wm.get(mm)) && void 0 !== Tm ? Tm : null;
        return null !== fm && void 0 !== fm && fm.answer && "error" in fm.answer ? null : fm
      }(mm))), [fm, xm] = (0, hm.useState)((() => null !== Tm && void 0 !== Tm && Tm.answer && "settings" in Tm.answer ? Tm.answer.settings : null)), [Dm, im] = (0, hm.useState)(!0), [Rm, pm] = (0, hm.useState)(null !== fm), Em = (0, hm.useRef)(fm);
      Em.current = fm;
      const om = (0, hm.useRef)(0),
        Om = (0, hm.useRef)(0),
        Ym = (0, hm.useRef)(!1),
        qm = (0, hm.useRef)(!0),
        jm = (0, hm.useCallback)((async Tm => {
          const fm = ++om.current,
            hm = await (null !== Tm && void 0 !== Tm ? Tm : Am.b.getSocialSettings(mm));
          qm.current && fm === om.current && (pm(!0), im(!1), "error" in hm || xm(hm.settings))
        }), [mm]),
        Vm = (0, hm.useCallback)((() => {
          im(!0), jm()
        }), [jm]),
        Im = (0, hm.useCallback)((() => {
          Om.current > 0 ? Ym.current = !0 : jm()
        }), [jm]);
      (0, hm.useEffect)((() => (qm.current = !0, wm.delete(mm), im(!0), jm(null === Tm || void 0 === Tm ? void 0 : Tm.response), () => {
        qm.current = !1
      })), [jm, mm, Tm]);
      const Km = mm => {
        om.current++, im(!1), Em.current = mm, xm(mm)
      };
      return {
        settings: fm,
        loading: Dm,
        answered: Rm,
        retry: Vm,
        refresh: Im,
        change: async function(Tm, fm) {
          let {
            quiet: hm = !1,
            onAnswer: xm
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const wm = Em.current;
          if (null === wm) return !1;
          Km(fm(wm)), Om.current > 0 && (Ym.current = !0), Om.current++;
          const Dm = await Am.b.setSocialSettings(mm, Tm);
          Om.current--;
          const im = !("error" in Dm);
          if (!qm.current) return im;
          if (null === xm || void 0 === xm || xm(Dm), hm);
          else if ("error" in Dm) am.d.showMessage({
            translationKey: Dm.error
          });
          else
            for (const mm of Dm.notFound) am.d.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: mm
              }
            });
          if (Om.current > 0) return im;
          const Rm = Ym.current;
          return Ym.current = !1, !Rm && "settings" in Dm ? Km(Dm.settings) : (Rm || Km(wm), jm()), im
        }
      }
    }
  },
  36831: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      g: () => am
    });
    var hm = fm(168);
    const Am = new Map;

    function am(mm, Tm) {
      var fm;
      const hm = null !== (fm = Am.get(mm)) && void 0 !== fm ? fm : new Map;
      hm.set(Tm, Date.now()), Am.set(mm, hm)
    }

    function xm(mm) {
      const Tm = Am.get(mm);
      if (!Tm) return [];
      const fm = Date.now();
      for (const [Am, am] of Tm) fm - am >= hm.n && Tm.delete(Am);
      return [...Tm.keys()]
    }
  },
  36793: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      const fm = Tm.toLowerCase();
      for (const hm of mm)
        if (hm.toLowerCase() === fm) return !0;
      return !1
    }

    function Am(mm, Tm, fm) {
      const Am = [],
        am = [],
        xm = [];
      for (const wm of mm) !wm.isError && wm.name && ("inGame" === wm.location.status && wm.location.inLobbyName === Tm || hm(fm, wm.name) ? am.push({
        friend: wm,
        place: "here"
      }) : "offline" === wm.location.status ? xm.push({
        friend: wm,
        place: "offline"
      }) : Am.push({
        friend: wm,
        place: "online"
      }));
      return [...Am, ...am, ...xm]
    }

    function am(mm, Tm, fm) {
      const Am = [],
        am = mm.flatMap((mm => "here" === mm.place ? [mm.friend.name] : []));
      for (const xm of [...am, ...Tm]) hm(Am, xm) || hm(fm, xm) || Am.push(xm);
      return Am
    }

    function xm(mm, Tm) {
      return null === mm || void 0 === mm || !mm.canManage || hm(mm.whitelist, Tm) ? "none" : "whitelist" === mm.visibility ? "required" : "quiet"
    }

    function wm(mm) {
      if (null === mm) return !0;
      const {
        visibility: Tm
      } = mm;
      return "public" === Tm || "unlisted" === Tm || "whitelist" === Tm && mm.canManage
    }

    function Dm(mm, Tm, fm) {
      if (fm) {
        const fm = Tm.filter((Tm => !hm(mm.whitelist, Tm)));
        return {
          ...mm,
          whitelist: [...mm.whitelist, ...fm]
        }
      }
      return {
        ...mm,
        whitelist: mm.whitelist.filter((mm => !hm(Tm, mm)))
      }
    }

    function im(mm, Tm) {
      const fm = [];
      for (let hm = 0; hm < mm.length; hm += Tm) fm.push(mm.slice(hm, hm + Tm));
      return fm
    }
    fm.d(Tm, {
      d: () => wm,
      e: () => am,
      f: () => Am,
      g: () => hm,
      k: () => im,
      m: () => xm,
      p: () => Dm
    })
  },
  37110: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am
    });
    var hm = fm(59),
      Am = fm(2391);

    function am() {
      const mm = (0, Am.g)("lobbyLeaderboardInfo");
      return (0, hm.useMemo)((() => function(mm) {
        if (null === mm) return null;
        const Tm = Object.entries(mm),
          fm = Tm.filter((mm => {
            let [, Tm] = mm;
            return void 0 !== Tm
          }));
        if (fm.length === Tm.length) return mm;
        const hm = Object.fromEntries(fm),
          Am = Object.keys(mm).filter((mm => !Object.hasOwn(hm, mm)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${Am.join(", ")}`), hm
      }(mm)), [mm])
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);