export const id = 246;
export const ids = [246];
export const modules = {
  42073: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      LobbyManageView: () => SO
    });
    var YB = GB(56),
      DB = GB(1516),
      QB = GB(37706),
      oB = GB(2666),
      jB = GB(2670),
      yB = GB(2653),
      JB = GB(37229);

    function MB() {
      const [BB, OB] = (0, YB.useState)(new Map);
      return {
        get: OB => BB.get(OB),
        hold: (0, YB.useCallback)(((BB, GB, YB) => {
          OB((OB => new Map(OB).set(BB, GB))), YB.then((() => {
            OB((OB => {
              const GB = new Map(OB);
              return GB.delete(BB), GB
            }))
          }))
        }), [])
      }
    }
    var PB = GB(1090),
      zB = GB.n(PB),
      lB = GB(1175),
      pB = GB(1383),
      qB = GB(1375),
      ZB = GB(2932),
      NB = GB(5512),
      RB = GB(3873);
    var WB = GB(2063),
      AB = GB(1485);

    function VB(BB, OB, GB) {
      const YB = BB.filter((BB => BB.name !== OB)),
        DB = YB.filter((BB => "none" === BB.role)).sort(((BB, OB) => OB.at - BB.at)),
        QB = YB.filter((BB => "none" !== BB.role)).sort(((BB, OB) => GB.indexOf(BB.role) - GB.indexOf(OB.role) || OB.at - BB.at));
      return [...BB.some((BB => BB.name === OB)) && null !== OB ? [OB] : [], ...[...DB, ...QB].map((BB => BB.name))]
    }

    function SB(BB, OB) {
      const GB = BB.banned.map((BB => BB.name)),
        YB = new Set(GB);
      return {
        here: VB(BB.here, OB, BB.roles.map((BB => BB.role))),
        away: BB.away.filter((BB => !YB.has(BB.name))).map((BB => BB.name)),
        banned: GB
      }
    }

    function nB(BB, OB) {
      const GB = BB.here.find((BB => BB.name === OB));
      if (GB) return {
        section: "here",
        player: GB
      };
      const YB = BB.banned.find((BB => BB.name === OB));
      if (YB) return {
        section: "banned",
        bannedAt: YB.at
      };
      const DB = BB.away.find((BB => BB.name === OB));
      return DB ? {
        section: "away",
        player: DB
      } : {
        section: "gone"
      }
    }
    const UB = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var fB = GB(2928),
      kB = GB(3053),
      dB = GB(37414),
      KB = GB(3544),
      uB = GB(353);

    function mB(BB, OB, GB) {
      return OB.map((OB => {
        if ("string" === typeof OB) return OB;
        const YB = "str" in OB ? OB.str : OB;
        return "string" === typeof YB ? YB : "entityName" in YB ? YB.entityName : "translationKey" in YB ? BB(YB.translationKey, (0, lB.v)(YB.params, GB)) : ""
      })).join("")
    }

    function IB(BB, OB, GB, YB, DB) {
      return DB - YB < 6e4 ? BB(`${GB}JustNow`) : BB(GB, {
        time: (0, uB.eb)((0, lB.s)(OB, GB), YB, DB)
      })
    }
    var FB = GB(2e3),
      iB = GB(1735),
      LB = GB(1282);

    function gB(BB) {
      let {
        status: OB
      } = BB;
      return (0, LB.jsx)("span", {
        className: zB()("LobbyManageStatus", {
          LobbyManageStatusRefused: !OB.ok
        }),
        children: (0, LB.jsx)(FB.b, {
          text: OB.text
        })
      })
    }

    function rB(BB) {
      let {
        names: OB,
        cap: GB,
        filterFrom: DB,
        moreLabel: QB,
        reveal: oB = null,
        renderRow: jB
      } = BB;
      const {
        t: yB
      } = (0, lB.H)(), [JB, MB] = (0, YB.useState)(!1), [PB, zB] = (0, YB.useState)(""), qB = JB || null !== oB && OB.indexOf(oB) >= GB, NB = (qB || OB.length <= GB) && null !== DB && OB.length > DB, RB = PB.trim().toLowerCase();
      let WB = qB ? OB : OB.slice(0, GB);
      return NB && "" !== RB && (WB = WB.filter((BB => BB.toLowerCase().includes(RB)))), (0, LB.jsxs)(LB.Fragment, {
        children: [NB && (0, LB.jsx)(iB.b, {
          className: "LobbyManageFilter",
          placeholderText: yB("lobbyManage:findName"),
          ariaLabel: yB("lobbyManage:findName"),
          onValueChange: BB => {
            zB(BB)
          }
        }), WB.length > 0 && (0, LB.jsx)("div", {
          className: "PlayerRows",
          children: WB.map(((BB, OB) => jB(BB, WB.length - OB)))
        }), !qB && OB.length > GB && (0, LB.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, LB.jsx)(ZB.d, {
            label: (0, LB.jsxs)(LB.Fragment, {
              children: [QB, " ", (0, LB.jsx)(pB.b, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              MB(!0)
            }
          })
        })]
      })
    }

    function XB(BB) {
      let {
        value: OB,
        placeholder: GB,
        ariaLabel: DB,
        maxLength: QB,
        wide: oB = !1,
        onSave: jB
      } = BB;
      const yB = (0, YB.useRef)(null),
        [JB, MB] = (0, YB.useState)(0),
        PB = (0, YB.useRef)(!0),
        lB = (0, YB.useRef)(null),
        pB = (0, YB.useRef)({
          value: OB,
          onSave: jB
        });
      pB.current = {
        value: OB,
        onSave: jB
      };
      const qB = () => {
        const BB = lB.current;
        lB.current = null, null !== BB && BB !== pB.current.value && pB.current.onSave(BB).then((() => {
          PB.current && MB((BB => BB + 1))
        }))
      };
      return (0, YB.useEffect)((() => {
        null === lB.current && yB.current && (yB.current.value = OB)
      }), [OB, JB]), (0, YB.useEffect)((() => () => {
        PB.current = !1, qB()
      }), []), (0, LB.jsx)("div", {
        className: zB()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: oB
        }),
        onBlur: qB,
        children: (0, LB.jsx)(iB.b, {
          domRef: yB,
          defaultValue: OB,
          placeholderText: GB,
          ariaLabel: DB,
          maxLength: QB,
          onValueChange: BB => {
            lB.current = BB
          },
          onEnter: qB
        })
      })
    }
    const wB = ["mod", "coOwner"],
      EB = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function cB(BB) {
      var OB, GB, QB;
      let {
        name: oB,
        place: jB,
        openedIn: yB,
        isYou: JB,
        manage: PB,
        hiddenNames: zB,
        zIndex: qB
      } = BB;
      const {
        t: ZB,
        selectedLanguage: NB
      } = (0, lB.H)(), [RB, WB] = (0, YB.useState)(null), {
        state: VB
      } = PB, SB = `player:${oB}`, nB = function(BB, OB) {
        if ("banned" === BB.section) return {
          ...UB,
          unban: !0
        };
        if ("gone" === BB.section) return UB;
        const {
          player: GB
        } = BB, YB = "here" === BB.section, DB = YB || "none" !== GB.role ? GB.can.roles : [], QB = YB && OB && null !== GB.gamemode && GB.can.gamemode;
        return {
          gamemode: QB,
          roles: DB,
          fixedRole: 0 !== DB.length || "none" === GB.role && !QB ? null : GB.role,
          kick: YB && GB.can.kick,
          ban: GB.can.ban,
          unban: !1
        }
      }(jB, null !== VB.gamemodes), uB = PB.statusOf(SB), FB = PB.isPending(SB), iB = MB(), rB = Date.now(), XB = BB => {
        var OB, GB;
        return null !== (OB = null === (GB = (BB => VB.roles.find((OB => OB.role === BB)))(BB)) || void 0 === GB ? void 0 : GB.label) && void 0 !== OB ? OB : BB
      }, cB = BB => {
        const OB = EB[BB];
        return void 0 === OB ? void 0 : ZB(OB)
      }, hB = "here" === jB.section || "away" === jB.section ? jB.player : null, aB = "here" === jB.section ? jB.player.id : null, {
        playerSocialPreview: eB,
        isFriend: TB
      } = null === aB ? {
        playerSocialPreview: (0, dB.i)(oB, null),
        isFriend: !1
      } : (0, kB.g)(aB, oB), bB = function() {
        PB.send(...arguments)
      }, CB = (BB, OB) => {
        iB.hold("role", BB, PB.send({
          type: "setRole",
          name: oB,
          role: BB
        }, SB, OB))
      };
      let HB = null;
      if ("ban" === (null === RB || void 0 === RB ? void 0 : RB.kind)) HB = ZB("lobbyManageEntry:banConfirm", {
        playerName: oB
      });
      else if ("role" === (null === RB || void 0 === RB ? void 0 : RB.kind)) {
        var vB;
        HB = `${ZB("lobbyManage:roleConfirm",{playerName:oB,role:XB(RB.role)})} ${null!==(vB=cB(RB.role))&&void 0!==vB?vB:""}`
      } else if (uB) HB = (0, LB.jsx)(gB, {
        status: uB
      });
      else if (JB) HB = ZB("lobbyManage:you");
      else if ("here" === jB.section) "none" === jB.player.role && rB - jB.player.at < 6e5 && (HB = IB(ZB, NB.code, "lobbyManage:joinedAgo", jB.player.at, rB));
      else if ("away" === jB.section) {
        if (jB.player.at > 0) {
          const BB = "kicked" === jB.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          HB = IB(ZB, NB.code, BB, jB.player.at, rB)
        }
      } else "banned" === jB.section ? null !== jB.bannedAt && (HB = IB(ZB, NB.code, "lobbyManage:bannedAgo", jB.bannedAt, rB)) : "banned" === yB && (HB = ZB("lobbyManageEntry:unbanned"));
      return (0, LB.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": oB,
        children: (0, LB.jsxs)(fB.e, {
          playerSocialPreview: eB,
          isFriend: TB,
          status: HB,
          opensProfileCard: !JB && (0, kB.i)(!0, oB, zB),
          zIndex: qB,
          children: [null !== RB && (0, LB.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === RB.kind && (0, LB.jsxs)(AB.Q, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                WB(null), bB({
                  type: "ban",
                  name: oB
                }, SB)
              },
              children: [(0, LB.jsx)(pB.b, {
                name: "gavel"
              }), (0, LB.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: ZB("lobbyManageEntry:ban")
              })]
            }), "role" === RB.kind && (0, LB.jsx)(AB.f, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: RB.role
              },
              onClick: () => {
                WB(null), CB(RB.role)
              },
              children: ZB("lobbyManage:makeRole", {
                role: XB(RB.role)
              })
            }), (0, LB.jsx)(AB.j, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                WB(null)
              },
              children: ZB("general:cancel")
            })]
          }), null === RB && (0, LB.jsxs)(LB.Fragment, {
            children: [(0, LB.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [nB.gamemode && null !== hB && (0, LB.jsx)(KB.c, {
                options: (null !== (OB = VB.gamemodes) && void 0 !== OB ? OB : []).map((BB => ({
                  value: BB.value,
                  label: mB(ZB, BB.label, zB)
                }))),
                value: null !== (GB = iB.get("gamemode")) && void 0 !== GB ? GB : hB.gamemode,
                disabled: FB,
                onChange: BB => {
                  (0, DB.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: BB.value
                  }), iB.hold("gamemode", BB.value, PB.send({
                    type: "setGamemode",
                    name: oB,
                    gamemode: BB.value
                  }, SB))
                }
              }), nB.roles.length > 0 && null !== hB && (0, LB.jsx)(KB.c, {
                options: [...VB.roles].reverse().filter((BB => nB.roles.includes(BB.role))).map((BB => ({
                  value: BB.role,
                  label: BB.label
                }))),
                value: null !== (QB = iB.get("role")) && void 0 !== QB ? QB : hB.role,
                disabled: FB,
                onChange: BB => {
                  var OB;
                  (OB = BB.value) !== (null === hB || void 0 === hB ? void 0 : hB.role) && (wB.includes(OB) ? WB({
                    kind: "role",
                    role: OB
                  }) : ((0, DB.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: OB
                  }), CB(OB, cB(OB))))
                }
              }), null !== nB.fixedRole && (0, LB.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: XB(nB.fixedRole)
              })]
            }), (0, LB.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [nB.kick && (0, LB.jsxs)(AB.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${ZB("lobbyManageEntry:kick")} ${oB}`,
                disabled: FB,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  bB({
                    type: "kick",
                    name: oB
                  }, SB)
                },
                children: [(0, LB.jsx)(pB.b, {
                  name: "person-falling-burst"
                }), (0, LB.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: ZB("lobbyManageEntry:kick")
                })]
              }), nB.ban && (0, LB.jsxs)(AB.R, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${ZB("lobbyManageEntry:ban")} ${oB}`,
                disabled: FB,
                padDestructive: !0,
                onClick: () => {
                  WB({
                    kind: "ban"
                  })
                },
                children: [(0, LB.jsx)(pB.b, {
                  name: "gavel"
                }), (0, LB.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: ZB("lobbyManageEntry:ban")
                })]
              }), nB.unban && (0, LB.jsxs)(AB.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${ZB("lobbyManageEntry:unban")} ${oB}`,
                disabled: FB,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  bB({
                    type: "unban",
                    name: oB
                  }, SB)
                },
                children: [(0, LB.jsx)(pB.b, {
                  name: "user-unlock"
                }), (0, LB.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: ZB("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function hB(BB) {
      var OB, GB, DB, QB;
      let {
        manage: oB,
        focusRequest: jB,
        onFocused: yB
      } = BB;
      const {
        t: JB
      } = (0, lB.H)(), MB = (0, WB.g)("players"), PB = (0, WB.g)("hiddenPlayerNames"), zB = (0, YB.useRef)(null), {
        state: qB
      } = oB, NB = null === MB.localId ? null : null !== (OB = null === (GB = MB.byId[MB.localId]) || void 0 === GB ? void 0 : GB.name) && void 0 !== OB ? OB : null, [RB] = (0, YB.useState)((() => SB(qB, NB))), VB = function(BB, OB, GB) {
        const YB = new Set([...BB.here, ...BB.away, ...BB.banned]),
          DB = SB(OB, GB),
          QB = OB => {
            const GB = DB[OB].filter((BB => !YB.has(BB)));
            for (const BB of GB) YB.add(BB);
            return [...BB[OB], ...GB]
          };
        return {
          here: QB("here"),
          away: QB("away"),
          banned: QB("banned")
        }
      }(RB, qB, NB), [UB, fB] = (0, YB.useState)(!1), kB = function(BB, OB) {
        return BB.here.filter((BB => BB.name !== OB && "none" === BB.role && BB.can.kick)).length
      }(qB, NB), dB = oB.statusOf("kickAll");
      (0, YB.useEffect)((() => {
        var BB, OB;
        if (null === jB) return;
        const GB = null === (BB = zB.current) || void 0 === BB ? void 0 : BB.querySelector(`[data-lobby-manage-row="${CSS.escape(jB.name)}"]`);
        null === GB || void 0 === GB || GB.scrollIntoView({
          block: "center"
        }), null === GB || void 0 === GB || null === (OB = GB.querySelector(".ProfilePreview")) || void 0 === OB || OB.focus({
          preventScroll: !0
        }), yB(jB.seq)
      }), [null === jB || void 0 === jB ? void 0 : jB.seq]);
      const KB = BB => (OB, GB) => (0, LB.jsx)(cB, {
        name: OB,
        place: nB(qB, OB),
        openedIn: BB,
        isYou: OB === NB,
        manage: oB,
        hiddenNames: PB,
        zIndex: GB
      }, OB);
      return (0, LB.jsxs)("div", {
        ref: zB,
        className: "LobbyManagePage",
        children: [VB.here.length > 0 && (0, LB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, LB.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, LB.jsx)(ZB.d, {
              label: JB("lobbyManage:here"),
              meta: qB.here.length
            }), kB >= 2 && !UB && (0, LB.jsxs)(AB.R, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: oB.isPending("kickAll"),
              onClick: () => {
                fB(!0)
              },
              children: [(0, LB.jsx)(pB.b, {
                name: "person-falling-burst"
              }), " ", JB("lobbyManage:kickAll")]
            })]
          }), UB && kB >= 2 && (0, LB.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, LB.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: JB("lobbyManage:kickAllConfirm", {
                count: kB
              })
            }), (0, LB.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, LB.jsx)(AB.Q, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  fB(!1), oB.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: JB("lobbyManage:kickAll")
              }), (0, LB.jsx)(AB.j, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  fB(!1)
                },
                children: JB("general:cancel")
              })]
            })]
          }), dB && (0, LB.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, LB.jsx)(gB, {
              status: dB
            })
          }), (0, LB.jsx)(rB, {
            names: VB.here,
            cap: VB.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: KB("here")
          })]
        }), VB.away.length > 0 && (0, LB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, LB.jsx)(ZB.d, {
            label: JB("lobbyManage:notHere"),
            meta: VB.away.length
          }), (0, LB.jsx)(rB, {
            names: VB.away,
            cap: 5,
            filterFrom: null,
            moreLabel: JB("lobbyManage:allCount", {
              count: VB.away.length
            }),
            reveal: null !== (DB = null === jB || void 0 === jB ? void 0 : jB.name) && void 0 !== DB ? DB : null,
            renderRow: KB("away")
          })]
        }), VB.banned.length > 0 && (0, LB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, LB.jsx)(ZB.d, {
            label: JB("lobbyManage:banned"),
            meta: VB.banned.length
          }), (0, LB.jsx)(rB, {
            names: VB.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: JB("lobbyManage:allCount", {
              count: VB.banned.length
            }),
            reveal: null !== (QB = null === jB || void 0 === jB ? void 0 : jB.name) && void 0 !== QB ? QB : null,
            renderRow: KB("banned")
          })]
        })]
      })
    }
    var aB = GB(5047),
      eB = GB(1705),
      TB = GB(37386),
      bB = GB(37407),
      CB = GB(37398),
      HB = GB(37394),
      vB = GB(37426),
      sB = GB(37418),
      xB = GB(37421);

    function tB(BB) {
      const OB = new Set;
      for (const GB of BB) OB.add(GB.toLowerCase());
      return OB
    }

    function BO(BB) {
      var OB, GB;
      let {
        state: DB,
        lobbyName: QB,
        listed: oB,
        isListed: jB,
        yR: yB,
        OW: JB,
        statusOf: MB
      } = BB;
      const {
        t: PB,
        selectedLanguage: zB
      } = (0, lB.H)(), pB = (0, eB.h)(), qB = (0, WB.g)("players"), NB = null === qB.localId ? null : null !== (OB = null === (GB = qB.byId[qB.localId]) || void 0 === GB ? void 0 : GB.name) && void 0 !== OB ? OB : null, RB = (0, YB.useMemo)((() => (0, HB.j)(pB.friends, QB, DB.here.map((BB => BB.name)))), [pB.friends, QB, DB.here]), AB = new Map(RB.map((BB => [BB.friend.name.toLowerCase(), BB]))), VB = function(BB) {
        let {
          refused: OB,
          listed: GB,
          here: YB,
          friends: DB,
          excluded: QB
        } = BB;
        const oB = tB(QB),
          jB = BB => BB.filter((BB => {
            const OB = BB.toLowerCase();
            return !oB.has(OB) && (oB.add(OB), !0)
          }));
        return {
          added: [],
          refused: jB(OB),
          listed: jB(GB),
          suggested: jB([...YB, ...DB])
        }
      }({
        refused: DB.refused.map((BB => BB.name)),
        listed: oB,
        here: DB.here.map((BB => BB.name)),
        friends: RB.flatMap((BB => "here" === BB.place ? [] : [BB.friend.name])),
        excluded: [...null === NB ? [] : [NB], ...[...DB.here, ...DB.away].flatMap((BB => "none" === BB.role || (0, HB.l)(oB, BB.name) ? [] : [BB.name]))]
      }), [SB] = (0, YB.useState)(VB), [nB, UB] = (0, YB.useState)([]), fB = function(BB, OB, GB) {
        const YB = tB(GB),
          DB = tB([...GB, ...BB.refused, ...BB.listed, ...BB.suggested]),
          QB = GB => [...BB[GB].filter((BB => !YB.has(BB.toLowerCase()))), ...OB[GB].filter((BB => {
            const OB = BB.toLowerCase();
            return !DB.has(OB) && (DB.add(OB), !0)
          }))];
        return {
          added: [...GB],
          refused: QB("refused"),
          listed: QB("listed"),
          suggested: QB("suggested")
        }
      }(SB, VB, nB), KB = (BB, OB) => {
        var GB, YB;
        const QB = BB.toLowerCase(),
          oB = AB.get(QB),
          JB = DB.here.find((BB => BB.name.toLowerCase() === QB)),
          lB = DB.refused.find((BB => BB.name.toLowerCase() === QB)),
          pB = null !== (GB = null === MB || void 0 === MB ? void 0 : MB(BB)) && void 0 !== GB ? GB : null;
        let qB = null;
        pB ? qB = (0, LB.jsx)(gB, {
          status: pB
        }) : lB ? qB = IB(PB, zB.code, "lobbyManage:triedToJoinAgo", lB.at, Date.now()) : oB && JB ? qB = PB("lobbyManage:friendHere") : oB ? qB = "online" === oB.place ? PB("lobbyManage:friendOnline") : PB("lobbyManage:friend") : JB && (qB = PB("lobbyManage:hereStatus"));
        let ZB = null !== (YB = null === oB || void 0 === oB ? void 0 : oB.friend) && void 0 !== YB ? YB : (0, dB.i)(BB, null);
        return !oB && null !== JB && void 0 !== JB && JB.id && (ZB = (0, kB.g)(JB.id, JB.name).playerSocialPreview), (0, LB.jsx)(sB.d, {
          playerSocialPreview: ZB,
          isFriend: void 0 !== oB,
          hideFriendBadge: !0,
          status: qB,
          zIndex: OB,
          kP: {
            on: jB(BB),
            onChange: OB => {
              yB(BB, OB)
            }
          }
        }, QB)
      }, uB = [...fB.added, ...fB.refused];
      return (0, LB.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, LB.jsx)(ZB.d, {
          label: PB("worldSocial:whitelist"),
          meta: oB.length
        }), (0, LB.jsx)(xB.e, {
          label: PB("lobbyManage:add"),
          icon: "user-check",
          placeholder: PB("socialBar:enterPlayerName"),
          onSubmit: async BB => {
            const OB = await JB(BB);
            return OB.ok && UB((OB => [BB, ...OB])), OB
          }
        }), uB.length > 0 && (0, LB.jsx)("div", {
          className: "PlayerRows",
          children: uB.map(((BB, OB) => KB(BB, uB.length - OB)))
        }), (0, LB.jsx)(rB, {
          names: fB.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: PB("lobbyManage:allOnWhitelist", {
            count: fB.listed.length
          }),
          renderRow: KB
        }), (0, LB.jsx)(rB, {
          names: fB.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: PB("lobbyManage:allCount", {
            count: fB.suggested.length
          }),
          renderRow: KB
        })]
      })
    }

    function OO(BB) {
      let {
        manage: OB,
        listing: GB
      } = BB;
      const {
        t: YB
      } = (0, lB.H)(), QB = (BB, GB) => ((0, DB.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: BB
      }), OB.send({
        type: "setListing",
        field: BB,
        value: GB
      }, `listing:${BB}`)), oB = BB => {
        const GB = OB.statusOf(`listing:${BB}`);
        return GB && !GB.ok && (0, LB.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, LB.jsx)(gB, {
            status: GB
          })
        })
      };
      return (0, LB.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, LB.jsx)(ZB.d, {
          label: YB("lobbyManage:inWorldsList")
        }), (0, LB.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, LB.jsx)("div", {
            className: "SliderText",
            children: YB("lobbyManage:description")
          }), (0, LB.jsx)(XB, {
            value: GB.description,
            ariaLabel: YB("lobbyManage:description"),
            wide: !0,
            onSave: BB => QB("description", BB)
          })]
        }), oB("description"), (0, LB.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, LB.jsx)("div", {
            className: "SliderText",
            children: YB("lobbyManage:emojis")
          }), (0, LB.jsx)(XB, {
            value: GB.emojis,
            ariaLabel: YB("lobbyManage:emojis"),
            onSave: BB => QB("emojis", BB)
          })]
        }), oB("emojis"), (0, LB.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, LB.jsx)("div", {
            className: "SliderText",
            children: YB("lobbyManage:colour")
          }), (0, LB.jsx)(GO, {
            value: GB.colour,
            ariaLabel: YB("lobbyManage:colour"),
            onSave: BB => {
              QB("colour", BB)
            }
          })]
        }), oB("colour")]
      })
    }

    function GO(BB) {
      let {
        value: OB,
        ariaLabel: GB,
        onSave: DB
      } = BB;
      const QB = (0, YB.useRef)(null),
        oB = (0, YB.useRef)({
          value: OB,
          onSave: DB
        });
      oB.current = {
        value: OB,
        onSave: DB
      };
      const jB = (0, YB.useRef)(null),
        yB = (0, YB.useRef)(!1),
        JB = BB => {
          yB.current && BB.value !== oB.current.value && BB.value !== jB.current && (jB.current = BB.value, oB.current.onSave(BB.value))
        };
      return (0, YB.useEffect)((() => {
        QB.current && document.activeElement !== QB.current && (QB.current.value = OB)
      }), [OB]), (0, YB.useEffect)((() => {
        const BB = QB.current,
          OB = () => {
            JB(BB)
          };
        return BB.addEventListener("change", OB), () => {
          BB.removeEventListener("change", OB), JB(BB)
        }
      }), []), (0, LB.jsx)("input", {
        ref: QB,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: OB,
        "aria-label": GB,
        onInput: () => {
          yB.current = !0
        },
        onBlur: BB => {
          JB(BB.currentTarget)
        }
      })
    }

    function YO(BB) {
      let {
        manage: OB
      } = BB;
      const {
        lobbyName: GB,
        shownLobbyName: YB
      } = (0, WB.g)("connectedGame");
      return OB.state.you.canSetVisibility && null !== GB ? (0, LB.jsx)(QO, {
        manage: OB,
        lobbyName: GB,
        worldCode: null !== YB && void 0 !== YB ? YB : GB
      }, GB) : (0, LB.jsx)(oO, {
        manage: OB,
        lobbyName: null !== GB && void 0 !== GB ? GB : ""
      })
    }

    function DO(BB) {
      return BB.map((BB => BB.toLowerCase())).sort().join(",")
    }

    function QO(BB) {
      var OB;
      let {
        manage: GB,
        lobbyName: QB,
        worldCode: oB
      } = BB;
      const {
        t: jB
      } = (0, lB.H)(), {
        settings: yB,
        loading: JB,
        change: MB,
        retry: PB,
        refresh: zB
      } = (0, TB.k)(QB), pB = (0, eB.h)(), {
        state: NB
      } = GB, RB = (0, YB.useRef)(yB);
      RB.current = yB;
      const WB = DO(null !== (OB = NB.whitelist) && void 0 !== OB ? OB : []),
        VB = null !== NB.whitelist;
      (0, YB.useEffect)((() => {
        const BB = RB.current;
        null !== BB && (BB.visibility !== NB.visibility || VB && DO(BB.whitelist) !== WB) && zB()
      }), [NB.visibility, WB, VB, zB]);
      const SB = async (BB, OB) => {
        let GB = null;
        return await MB(BB, OB, {
          quiet: !0,
          onAnswer: BB => {
            GB = BB
          }
        }), GB
      }, nB = (BB, OB) => {
        null !== OB && "error" in OB && GB.showStatus(BB, {
          ok: !1,
          text: [jB(OB.error)]
        })
      }, UB = async BB => {
        if (null === yB || BB === yB.visibility) return;
        (0, DB.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: BB
        });
        const OB = "whitelist" === BB ? (0, HB.h)((0, HB.j)(pB.friends, QB, NB.here.map((BB => BB.name))), (0, vB.c)(QB), yB.whitelist) : [],
          GB = await SB({
            setVisibility: BB
          }, (OB => ({
            ...OB,
            visibility: BB
          })));
        nB("mode", GB), null === GB || "error" in GB || await (async BB => {
          for (const OB of (0, HB.m)(BB, aB.D))
            if (!await MB({
                whitelistAdd: OB
              }, (BB => (0, HB.s)(BB, OB, !0)))) return !1;
          return !0
        })(OB)
      }, fB = (0, YB.useMemo)((() => {
        var BB;
        if (null === yB) return [];
        const OB = null !== (BB = NB.whitelist) && void 0 !== BB ? BB : [];
        return [...OB.filter((BB => (0, HB.l)(yB.whitelist, BB))), ...yB.whitelist.filter((BB => !(0, HB.l)(OB, BB)))]
      }), [yB, NB.whitelist]), kB = GB.statusOf("mode");
      return (0, LB.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, LB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, LB.jsx)(ZB.d, {
            label: jB("worldSocial:whoCanJoin")
          }), null === yB && JB && (0, LB.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, LB.jsx)(qB.b, {})
          }), null === yB && !JB && (0, LB.jsx)(AB.j, {
            className: "SmallTextLight",
            onClick: PB,
            children: jB("worldSocial:loadFailed")
          }), null !== yB && (0, LB.jsx)(bB.d, {
            visibility: yB.visibility,
            onPick: BB => {
              UB(BB)
            }
          }), kB && (0, LB.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, LB.jsx)(gB, {
              status: kB
            })
          }), null !== yB && "private" !== yB.visibility && (0, LB.jsx)(CB.e, {
            worldCode: oB,
            message: null
          })]
        }), "whitelist" === (null === yB || void 0 === yB ? void 0 : yB.visibility) && (0, LB.jsx)(BO, {
          state: NB,
          lobbyName: QB,
          listed: fB,
          isListed: BB => (0, HB.l)(yB.whitelist, BB),
          yR: (BB, OB) => {
            (0, DB.reportAnalyticsClick)(OB ? {
              id: "lobby_manage.whitelist_add",
              value: "kP"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), SB(OB ? {
              whitelistAdd: [BB]
            } : {
              whitelistRemove: BB
            }, (GB => (0, HB.s)(GB, [BB], OB))).then((OB => {
              nB(`whitelist:${BB.toLowerCase()}`, OB)
            }))
          },
          OW: async BB => {
            (0, DB.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const OB = await SB({
              whitelistAdd: [BB]
            }, (OB => (0, HB.s)(OB, [BB], !0)));
            return null === OB ? {
              ok: !1,
              error: jB("worldSocial:changeFailed")
            } : "error" in OB ? {
              ok: !1,
              error: jB(OB.error)
            } : (0, HB.l)(OB.notFound, BB) ? {
              ok: !1,
              error: jB("lobbyManage:noPlayerCalled", {
                playerName: BB
              })
            } : {
              ok: !0
            }
          },
          statusOf: BB => GB.statusOf(`whitelist:${BB.toLowerCase()}`)
        }), "public" === (null === yB || void 0 === yB ? void 0 : yB.visibility) && null !== NB.listing && (0, LB.jsx)(OO, {
          manage: GB,
          listing: NB.listing
        })]
      })
    }

    function oO(BB) {
      var OB;
      let {
        manage: GB,
        lobbyName: YB
      } = BB;
      const {
        t: QB
      } = (0, lB.H)(), {
        state: oB
      } = GB, jB = MB(), yB = null !== (OB = oB.whitelist) && void 0 !== OB ? OB : [];
      return (0, LB.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, LB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, LB.jsx)(ZB.d, {
            label: QB("worldSocial:whoCanJoin")
          }), (0, LB.jsx)("div", {
            className: "LobbyManageModeText",
            children: QB(`worldSocial:${oB.visibility}`)
          })]
        }), "whitelist" === oB.visibility && oB.you.canEditWhitelist && (0, LB.jsx)(BO, {
          state: oB,
          lobbyName: YB,
          listed: yB,
          isListed: BB => {
            var OB;
            return null !== (OB = jB.get(BB.toLowerCase())) && void 0 !== OB ? OB : (0, HB.l)(yB, BB)
          },
          yR: (BB, OB) => {
            (0, DB.reportAnalyticsClick)(OB ? {
              id: "lobby_manage.whitelist_add",
              value: "kP"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const YB = BB.toLowerCase();
            jB.hold(YB, OB, GB.send(OB ? {
              type: "whitelistAdd",
              names: [BB]
            } : {
              type: "whitelistRemove",
              name: BB
            }, `whitelist:${YB}`))
          },
          OW: async BB => {
            (0, DB.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const OB = await GB.send({
              type: "whitelistAdd",
              names: [BB]
            }, "whitelist-field");
            return OB.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, LB.jsx)(FB.b, {
                text: OB.message
              })
            }
          },
          statusOf: BB => GB.statusOf(`whitelist:${BB.toLowerCase()}`)
        }), "public" === oB.visibility && null !== oB.listing && (0, LB.jsx)(OO, {
          manage: GB,
          listing: oB.listing
        })]
      })
    }
    var jO = GB(5480),
      yO = GB(1405);
    const JO = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const MO = (0, YB.memo)((function(BB) {
      var OB;
      let {
        rule: GB,
        value: YB,
        status: DB,
        pending: QB,
        hiddenNames: oB,
        HV: jB,
        onAction: yB
      } = BB;
      const {
        t: JB
      } = (0, lB.H)(), MB = BB => jB(GB, BB), PB = (BB, OB) => {
        yB(GB, BB, OB)
      }, zB = mB(JB, GB.label, oB), pB = GB.info ? mB(JB, GB.info, oB) : void 0, qB = GB.placeholder ? mB(JB, GB.placeholder, oB) : void 0, ZB = (null !== (OB = GB.options) && void 0 !== OB ? OB : []).map((BB => ({
        value: BB.value,
        label: mB(JB, BB.label, oB)
      }))), NB = Math.max(0, ...ZB.map((BB => function(BB) {
        let OB = 0;
        for (const GB of BB) OB += JO.test(GB) ? 2 : 1;
        return OB
      }(BB.label)))), RB = DB && (0, LB.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, LB.jsx)(gB, {
          status: DB
        })
      }), WB = (0, LB.jsxs)("div", {
        className: "SliderText",
        children: [zB, void 0 !== pB && (0, LB.jsx)(yO.c, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: pB
        })]
      });
      return "toggle" === GB.kind ? (0, LB.jsxs)(LB.Fragment, {
        children: [(0, LB.jsx)(jO.c, {
          label: zB,
          checked: !0 === YB,
          circleInfoText: pB,
          disabled: QB,
          onClick: MB
        }), RB]
      }) : "choice" === GB.kind && ZB.length <= 3 ? (0, LB.jsxs)(LB.Fragment, {
        children: [(0, LB.jsx)(jO.d, {
          label: zB,
          options: ZB,
          value: String(YB),
          circleInfoText: pB,
          onChange: MB
        }), RB]
      }) : (0, LB.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [WB, "choice" === GB.kind && (0, LB.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": NB
          },
          children: (0, LB.jsx)(KB.c, {
            options: ZB,
            value: String(YB),
            disabled: QB,
            onChange: BB => {
              MB(BB.value)
            }
          })
        }), ("number" === GB.kind || "text" === GB.kind) && (0, LB.jsx)(XB, {
          value: null === YB ? "" : String(YB),
          placeholder: qB,
          ariaLabel: zB,
          onSave: BB => {
            const OB = BB.trim(),
              YB = Number(OB);
            return MB("number" === GB.kind && "" !== OB && Number.isFinite(YB) ? YB : OB)
          }
        }), "action" === GB.kind && (0, LB.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [ZB.length > 3 && (0, LB.jsx)(KB.c, {
            options: ZB,
            value: {
              value: "",
              label: null !== qB && void 0 !== qB ? qB : zB
            },
            disabled: QB,
            onChange: BB => {
              PB(BB.value)
            }
          }), ZB.length > 0 && ZB.length <= 3 && ZB.map((BB => (0, LB.jsx)(AB.j, {
            className: "SmallTextLight",
            disabled: QB,
            onClick: () => {
              PB(BB.value)
            },
            children: BB.label
          }, BB.value))), 0 === ZB.length && (0, LB.jsx)(AB.j, {
            className: "SmallTextLight",
            disabled: QB,
            onClick: () => {
              PB()
            },
            children: null !== qB && void 0 !== qB ? qB : zB
          })]
        }), "names" === GB.kind && (0, LB.jsx)(PO, {
          names: Array.isArray(YB) ? YB : [],
          pending: QB,
          onAction: PB
        }), RB]
      })
    }));

    function PO(BB) {
      let {
        names: OB,
        pending: GB,
        onAction: DB
      } = BB;
      const {
        t: QB
      } = (0, lB.H)(), oB = (0, YB.useRef)(null), [jB, yB] = (0, YB.useState)(""), JB = () => {
        const BB = jB.trim();
        "" !== BB && (DB(BB, "add"), oB.current && (oB.current.value = ""), yB(""))
      };
      return (0, LB.jsxs)("div", {
        className: "LobbyManageNames",
        children: [OB.map((BB => (0, LB.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, LB.jsx)("span", {
            className: "LobbyManageNameText",
            children: BB
          }), (0, LB.jsx)(AB.j, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: QB("lobbyManage:removeName", {
              name: BB
            }),
            disabled: GB,
            onClick: () => {
              DB(BB, "remove")
            },
            children: (0, LB.jsx)(pB.b, {
              name: "xmark"
            })
          })]
        }, BB))), (0, LB.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, LB.jsx)(iB.b, {
            domRef: oB,
            placeholderText: QB("lobbyManage:namePlaceholder"),
            ariaLabel: QB("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: BB => {
              yB(BB)
            },
            onEnter: JB
          }), (0, LB.jsx)(AB.j, {
            className: "SmallTextLight",
            disabled: GB || "" === jB.trim(),
            onClick: JB,
            children: QB("lobbyManage:addHere")
          })]
        })]
      })
    }
    const zO = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function lO(BB, OB) {
      return zO.map((GB => {
        let {
          group: YB,
          title: DB
        } = GB;
        const QB = BB.filter((BB => BB.group === YB && void 0 === BB.parent)).map((GB => {
          const YB = !0 === OB(GB) ? BB.filter((BB => BB.parent === GB.key)) : [];
          return {
            rule: GB,
            children: YB
          }
        }));
        return {
          group: YB,
          title: DB,
          items: QB
        }
      }))
    }

    function pO(BB) {
      return BB.flatMap((BB => {
        let {
          items: OB
        } = BB;
        return OB.flatMap((BB => {
          let {
            rule: OB,
            children: GB
          } = BB;
          return [OB, ...GB]
        }))
      }))
    }

    function qO(BB) {
      let {
        manage: OB,
        rowsShown: GB
      } = BB;
      const {
        t: QB
      } = (0, lB.H)(), oB = (0, WB.g)("hiddenPlayerNames"), {
        rules: jB
      } = OB.state, yB = MB(), JB = BB => {
        const OB = yB.get(BB.key);
        return void 0 === OB ? BB.value : OB
      }, PB = lO(jB, JB), [zB] = (0, YB.useState)((() => pO(PB).map((BB => BB.key)))), pB = GB === 1 / 0 ? null : new Set(zB.slice(0, GB)), qB = BB => null === pB || pB.has(BB.key), {
        hold: NB
      } = yB, RB = (0, YB.useCallback)(((BB, GB) => {
        (0, DB.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: BB.key
        });
        const YB = OB.send({
          type: "setRule",
          key: BB.key,
          value: GB
        }, `rule:${BB.key}`);
        return NB(BB.key, GB, YB), YB
      }), [OB, NB]), AB = (0, YB.useCallback)(((BB, GB, YB) => {
        (0, DB.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: BB.key
        }), OB.send({
          type: "ruleAction",
          key: BB.key,
          ...void 0 === GB ? {} : {
            arg: GB
          },
          ...void 0 === YB ? {} : {
            op: YB
          }
        }, `rule:${BB.key}`, void 0 === YB ? QB("lobbyManage:setJustNow") : void 0)
      }), [OB, QB]), VB = BB => {
        const GB = `rule:${BB.key}`;
        return (0, LB.jsx)(MO, {
          rule: BB,
          value: JB(BB),
          status: OB.statusOf(GB),
          pending: OB.isPending(GB),
          hiddenNames: oB,
          HV: RB,
          onAction: AB
        }, BB.key)
      };
      return (0, LB.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: PB.map((BB => {
          let {
            group: OB,
            title: GB,
            items: DB
          } = BB;
          const oB = DB.filter((BB => {
            let {
              rule: OB
            } = BB;
            return qB(OB)
          }));
          return 0 === oB.length ? null : (0, LB.jsxs)(YB.Fragment, {
            children: [(0, LB.jsx)(ZB.d, {
              label: QB(GB)
            }), oB.map((BB => {
              let {
                rule: OB,
                children: GB
              } = BB;
              return 0 === GB.length ? VB(OB) : (0, LB.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [VB(OB), GB.filter(qB).map(VB)]
              }, OB.key)
            }))]
          }, OB)
        }))
      })
    }
    const ZO = {
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
      NO = 5,
      RO = (0, YB.memo)((function(BB) {
        let {
          page: OB,
          manage: GB,
          leaderboard: DB,
          focusRequest: QB,
          onFocused: oB,
          ruleRowsShown: jB
        } = BB;
        return "leaderboard" === OB ? (0, LB.jsx)(YB.Suspense, {
          fallback: (0, LB.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, LB.jsx)(qB.b, {})
          }),
          children: DB
        }) : "joining" === OB ? (0, LB.jsx)(YO, {
          manage: GB
        }) : "rules" === OB ? (0, LB.jsx)(qO, {
          manage: GB,
          rowsShown: jB
        }) : (0, LB.jsx)(hB, {
          manage: GB,
          focusRequest: QB,
          onFocused: oB
        })
      }));

    function WO(BB) {
      let {
        page: OB
      } = BB;
      const {
        t: GB
      } = (0, lB.H)(), YB = ZO[OB];
      return (0, LB.jsxs)(LB.Fragment, {
        children: [(0, LB.jsx)(pB.b, {
          name: YB.icon
        }), " ", (0, LB.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: GB(YB.title)
        })]
      })
    }

    function AO(BB) {
      var OB;
      const {
        t: GB
      } = (0, lB.H)(), {
        pages: QB,
        landing: oB
      } = BB, yB = (0, YB.useRef)(null), JB = (0, YB.useRef)(null), MB = (0, YB.useRef)(null), PB = (0, YB.useRef)(new Map), [pB, qB] = (0, YB.useState)(null), WB = (0, YB.useRef)(pB), AB = (0, YB.useRef)(0), [VB, SB] = (0, YB.useState)(QB[0]), nB = null !== pB && void 0 !== pB ? pB : QB.includes(VB) ? VB : QB[0], [UB] = (0, YB.useState)(null !== (OB = null === oB || void 0 === oB ? void 0 : oB.page) && void 0 !== OB ? OB : null), fB = null !== UB && QB.includes(UB) ? [UB, ...QB.filter((BB => BB !== UB))] : QB, [kB] = (0, YB.useState)((() => {
        const OB = pO(lO(BB.manage.state.rules, (BB => BB.value)));
        return Math.max(1, Math.ceil(OB.length / NO))
      })), dB = fB.flatMap((BB => "rules" === BB ? Array(kB).fill(BB) : [BB])), KB = function(BB, OB) {
        const [GB, DB] = (0, YB.useState)(BB), QB = GB >= OB;
        return QB && GB !== 1 / 0 && DB(1 / 0), (0, YB.useLayoutEffect)((() => {
          if (QB) return;
          let BB = !0;
          return (0, RB.e)().then((() => {
            BB && DB((BB => BB + 1))
          })), () => {
            BB = !1
          }
        }), [GB, QB]), QB ? 1 / 0 : GB
      }(1, dB.length), uB = dB.slice(0, KB), mB = new Set(uB), IB = KB < dB.length, FB = IB ? uB.filter((BB => "rules" === BB)).length * NO : 1 / 0, iB = (0, YB.useRef)(BB.focusRequest);
      iB.current = BB.focusRequest;
      const gB = BB => {
          WB.current = BB, qB(BB)
        },
        rB = () => {
          var BB, OB;
          yB.current.style.scrollPaddingTop = `${null!==(BB=null===(OB=MB.current)||void 0===OB?void 0:OB.offsetHeight)&&void 0!==BB?BB:0}px`
        },
        XB = BB => {
          const OB = yB.current,
            GB = PB.current.get(BB);
          if (void 0 === GB) return;
          const YB = document.activeElement,
            DB = iB.current,
            QB = null === DB ? null : GB.querySelector(`[data-lobby-manage-row="${CSS.escape(DB.name)}"]`);
          rB(), YB instanceof HTMLElement && null !== QB && void 0 !== QB && QB.contains(YB) ? YB.scrollIntoView({
            block: "center"
          }) : null === GB.previousElementSibling ? OB.scrollTop = 0 : GB.scrollIntoView({
            block: "start"
          }), AB.current = OB.scrollTop
        },
        wB = BB => {
          (0, DB.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: BB
          }), gB(BB), XB(BB)
        },
        EB = () => {
          var BB, OB;
          const GB = yB.current,
            YB = GB.getBoundingClientRect().top + (null !== (BB = null === (OB = MB.current) || void 0 === OB ? void 0 : OB.offsetHeight) && void 0 !== BB ? BB : 0),
            DB = QB.map((BB => {
              var OB, GB;
              return (null !== (OB = null === (GB = PB.current.get(BB)) || void 0 === GB ? void 0 : GB.getBoundingClientRect().top) && void 0 !== OB ? OB : 1 / 0) - YB
            })),
            oB = !IB && GB.scrollTop + GB.clientHeight >= GB.scrollHeight - 1;
          SB(QB[(0, jB.k)(DB, oB)])
        },
        cB = () => {
          null !== WB.current && (gB(null), EB())
        };
      (0, YB.useLayoutEffect)((() => {
        null !== oB && QB.includes(oB.page) && wB(oB.page)
      }), [null === oB || void 0 === oB ? void 0 : oB.seq]), (0, YB.useLayoutEffect)((() => {
        null === WB.current || QB.includes(WB.current) || cB()
      }));
      const {
        onFocused: hB
      } = BB, aB = (0, YB.useCallback)((BB => {
        null !== WB.current && XB(WB.current), hB(BB)
      }), [hB]);
      (0, YB.useLayoutEffect)((() => {
        const BB = WB.current;
        null !== BB && (!IB || QB.indexOf(dB[KB - 1]) < QB.indexOf(BB)) && XB(BB)
      }), [KB]), (0, YB.useEffect)((() => {
        const BB = new ResizeObserver((() => {
          null !== WB.current ? XB(WB.current) : rB()
        }));
        return BB.observe(yB.current), BB.observe(JB.current), () => {
          BB.disconnect()
        }
      }), []), (0, YB.useLayoutEffect)((() => {
        const BB = MB.current,
          OB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".SegmentedToggleOptionSelected");
        OB && (BB.scrollLeft = Math.min(OB.offsetLeft, Math.max(BB.scrollLeft, OB.offsetLeft + OB.offsetWidth - BB.clientWidth)))
      }), [nB]);
      return (0, LB.jsxs)("div", {
        ref: yB,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === WB.current ? EB() : Math.abs(yB.current.scrollTop - AB.current) > 1 && cB()
        },
        onClick: BB => {
          var OB;
          null !== (OB = MB.current) && void 0 !== OB && OB.contains(BB.target) || cB()
        },
        onFocus: BB => {
          var OB;
          const GB = null === WB.current ? null : PB.current.get(WB.current);
          !GB || GB.contains(BB.target) || null !== (OB = MB.current) && void 0 !== OB && OB.contains(BB.target) || cB()
        },
        children: [QB.length > 1 && (0, LB.jsx)("div", {
          ref: MB,
          className: "LobbyManageChips",
          children: (0, LB.jsx)(NB.c, {
            options: QB.map((BB => ({
              value: BB,
              label: (0, LB.jsx)(WO, {
                page: BB
              }),
              ariaLabel: GB(ZO[BB].title)
            }))),
            value: nB,
            padTabs: "2",
            ariaLabel: GB("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: wB
          })
        }), (0, LB.jsx)("div", {
          ref: JB,
          className: zB()("LobbyManageInner", {
            Staging: IB
          }),
          children: QB.filter((BB => mB.has(BB))).map((OB => {
            const GB = OB === pB;
            return (0, LB.jsxs)("section", {
              ref: BB => {
                BB ? PB.current.set(OB, BB) : PB.current.delete(OB)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": GB || void 0,
              children: [QB.length > 1 && (0, LB.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": GB || void 0,
                "data-pad-unavailable": GB || void 0,
                children: (0, LB.jsx)(ZB.d, {
                  label: (0, LB.jsx)(WO, {
                    page: OB
                  })
                })
              }), (0, LB.jsx)(RO, {
                page: OB,
                manage: BB.manage,
                leaderboard: BB.leaderboard,
                focusRequest: BB.focusRequest,
                onFocused: aB,
                ruleRowsShown: "rules" === OB ? FB : 1 / 0
              })]
            }, OB)
          }))
        })]
      })
    }

    function VO(BB) {
      return void 0 === (null === BB || void 0 === BB ? void 0 : BB.page) ? null : {
        page: BB.page,
        seq: BB.seq
      }
    }

    function SO(BB) {
      let {
        leaderboard: OB
      } = BB;
      const GB = function() {
          const BB = (0, yB.g)("lobbyManage"),
            [OB, GB] = (0, YB.useReducer)((BB => BB + 1), 0),
            [DB] = (0, YB.useState)((() => new JB.e(GB)));
          return (0, YB.useEffect)((() => {
            const BB = DB.nextDeadline();
            if (null === BB) return;
            const OB = setTimeout((() => {
              DB.expire(Date.now()), GB()
            }), Math.max(0, BB - Date.now()));
            return () => {
              clearTimeout(OB)
            }
          })), (0, YB.useMemo)((() => null === BB ? null : {
            state: BB,
            send: (BB, OB, YB) => {
              const QB = DB.send(BB, OB, null !== YB && void 0 !== YB ? YB : null);
              return GB(), QB
            },
            statusOf: BB => DB.statusOf(BB, Date.now()),
            showStatus: (BB, OB) => {
              DB.show(BB, OB)
            },
            isPending: BB => DB.isPending(BB)
          }), [BB, OB, DB])
        }(),
        MB = (0, jB.m)((0, QB.d)()),
        PB = (0, oB.m)(),
        [zB, lB] = (0, YB.useState)((() => VO(PB))),
        [pB, qB] = (0, YB.useState)(null);
      return (0, YB.useEffect)((() => {
        null === PB && (0, DB.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, YB.useEffect)((() => {
        null !== PB && (lB((BB => (null === BB || void 0 === BB ? void 0 : BB.seq) === PB.seq ? BB : VO(PB))), void 0 !== PB.focusName && "players" === PB.page ? qB({
          name: PB.focusName,
          seq: PB.seq
        }) : (0, oB.j)(PB.seq))
      }), [null === PB || void 0 === PB ? void 0 : PB.seq]), null === GB ? null : (0, LB.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, LB.jsx)(AO, {
          pages: (0, jB.g)(GB.state, MB),
          manage: GB,
          leaderboard: OB,
          focusRequest: pB,
          onFocused: oB.j,
          landing: zB
        })
      })
    }
  },
  37229: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => MB,
      i: () => yB
    });
    var YB = GB(1516),
      DB = GB(2050),
      QB = GB(2023);
    const oB = 1e4;
    let jB = 0;

    function yB(BB) {
      const OB = ++jB;
      return new Promise((GB => {
        const jB = OB => {
            yB(), clearTimeout(JB), !1 === (null === OB || void 0 === OB ? void 0 : OB.ok) && (0, YB.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: BB.type
            }), GB(OB)
          },
          yB = DB.e.subscribe("lobbyManage", (BB => {
            const GB = function(BB, OB) {
              var GB;
              return null !== (GB = null === BB || void 0 === BB ? void 0 : BB.results.find((BB => BB.requestId === OB))) && void 0 !== GB ? GB : null
            }(BB, OB);
            null !== GB && jB(GB)
          })),
          JB = setTimeout((() => {
            jB(null)
          }), oB);
        QB.gameBridge.send("lobbyManage", {
          ...BB,
          requestId: OB
        })
      }))
    }
    const JB = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class MB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yB;
        this.onChange = BB, this.sendAction = OB, this.pending = new Map, this.statuses = new Map
      }
      send(BB, OB, GB) {
        var YB;
        return this.statuses.delete(OB), this.pending.set(OB, (null !== (YB = this.pending.get(OB)) && void 0 !== YB ? YB : 0) + 1), this.sendAction(BB).then((BB => {
          var YB;
          const DB = null !== BB && void 0 !== BB ? BB : {
              requestId: -1,
              ok: !1,
              message: JB
            },
            QB = (null !== (YB = this.pending.get(OB)) && void 0 !== YB ? YB : 1) - 1;
          QB > 0 ? this.pending.set(OB, QB) : this.pending.delete(OB);
          const oB = !DB.ok || DB.message.length > 0 ? DB.message : null === GB ? null : [GB];
          return null !== oB && this.statuses.set(OB, {
            ok: DB.ok,
            text: oB,
            until: Date.now() + 4e3
          }), this.onChange(), DB
        }))
      }
      show(BB, OB) {
        this.statuses.set(BB, {
          ...OB,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(BB) {
        for (const [OB, GB] of this.statuses) GB.until <= BB && this.statuses.delete(OB)
      }
      nextDeadline() {
        let BB = null;
        for (const GB of this.statuses.values()) {
          var OB;
          BB = Math.min(null !== (OB = BB) && void 0 !== OB ? OB : 1 / 0, GB.until)
        }
        return BB
      }
      statusOf(BB, OB) {
        const GB = this.statuses.get(BB);
        return !GB || GB.until <= OB ? null : {
          ok: GB.ok,
          text: GB.text
        }
      }
      isPending(BB) {
        return this.pending.has(BB)
      }
    }
  },
  37421: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => PB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(1735),
      jB = GB(1485),
      yB = GB(1375),
      JB = GB(1383),
      MB = GB(1282);

    function PB(BB) {
      let {
        label: OB,
        icon: GB,
        placeholder: DB,
        onSubmit: PB
      } = BB;
      const zB = (0, YB.useRef)(null),
        [lB, pB] = (0, YB.useState)(""),
        [qB, ZB] = (0, YB.useState)("Enter"),
        [NB, RB] = (0, YB.useState)(null);
      (0, YB.useEffect)((() => {
        if ("Success" !== qB && "Error" !== qB) return;
        const BB = setTimeout((() => {
          "Success" === qB && zB.current && (zB.current.value = "", pB("")), ZB("Enter")
        }), "Success" === qB ? 1e3 : 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [qB]);
      const WB = () => {
        const BB = lB.trim();
        "" !== BB && "Enter" === qB && (ZB("Loading"), PB(BB).then((BB => {
          zB.current && ("error" in BB ? null === BB.error ? ZB("Enter") : (RB(BB.error), ZB("Error")) : ZB("Success"))
        })))
      };
      return (0, MB.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: BB => {
          BB.target === zB.current && "Escape" !== BB.key && BB.stopPropagation()
        },
        children: [(0, MB.jsxs)("div", {
          className: QB()("AddFriendBodyOverlay", `AddFriendBodyOverlay${qB}`),
          children: ["Loading" === qB && (0, MB.jsx)(yB.b, {}), "Success" === qB && (0, MB.jsx)(JB.b, {
            name: "check"
          }), "Error" === qB && NB]
        }), (0, MB.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, MB.jsx)(oB.b, {
            className: "PlayerSearchInput",
            domRef: zB,
            maxLength: 32,
            placeholderText: DB,
            ariaLabel: DB,
            stopPropagation: !1,
            onValueChange: BB => {
              pB(BB)
            },
            onEnter: WB
          }), (0, MB.jsxs)(jB.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== qB || "" === lB.trim(),
            onClick: WB,
            children: [(0, MB.jsx)(JB.b, {
              name: GB
            }), " ", OB]
          })]
        })]
      })
    }
  },
  37407: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => PB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(1175),
      jB = GB(1383),
      yB = GB(1282);
    const JB = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      MB = ["unlisted", "public", "whitelist", "private"];

    function PB(BB) {
      let {
        visibility: OB,
        onPick: GB
      } = BB;
      const {
        t: DB
      } = (0, oB.H)(), PB = (0, YB.useRef)([]);
      return (0, yB.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": DB("worldSocial:whoCanJoin"),
        children: MB.map(((BB, YB) => {
          const oB = BB === OB;
          return (0, yB.jsxs)("button", {
            ref: BB => {
              PB.current[YB] = BB
            },
            type: "button",
            className: QB()("WorldSocialTile", {
              WorldSocialTileSelected: oB
            }),
            "aria-pressed": oB,
            tabIndex: oB ? 0 : -1,
            onKeyDown: BB => {
              ((BB, OB) => {
                const GB = "ArrowRight" === BB.key || "ArrowDown" === BB.key ? 1 : "ArrowLeft" === BB.key || "ArrowUp" === BB.key ? -1 : 0;
                var YB;
                0 !== GB && (BB.preventDefault(), null === (YB = PB.current[(OB + GB + MB.length) % MB.length]) || void 0 === YB || YB.focus())
              })(BB, YB)
            },
            onClick: () => {
              GB(BB)
            },
            children: [(0, yB.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, yB.jsx)(jB.b, {
                name: JB[BB]
              })
            }), (0, yB.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, yB.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: DB(`worldSocial:${BB}`)
              }), (0, yB.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: DB(`worldSocial:${BB}Description`)
              })]
            })]
          }, BB)
        }))
      })
    }
  },
  37418: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB
    });
    var YB = GB(1175),
      DB = GB(2928),
      QB = GB(4777),
      oB = GB(1282);

    function jB(BB) {
      let {
        kP: OB,
        children: GB,
        ...jB
      } = BB;
      const {
        t: yB
      } = (0, YB.H)();
      return (0, oB.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          OB.onChange(!OB.on)
        },
        children: (0, oB.jsx)(DB.e, {
          ...jB,
          opensProfileCard: !1,
          children: (0, oB.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: BB => {
              BB.stopPropagation()
            },
            children: [GB, (0, oB.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, oB.jsx)(QB.e, {
                checked: OB.on,
                disabled: !1,
                ariaLabel: yB("worldSocial:letJoin", {
                  playerName: jB.playerSocialPreview.name
                }),
                onChange: BB => {
                  OB.onChange(BB.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37398: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => pB
    });
    var YB = GB(56),
      DB = GB(1175),
      QB = GB(1964),
      oB = GB(92),
      jB = GB(16),
      yB = GB(1516),
      JB = GB(2953),
      MB = GB(34693),
      PB = GB(1485),
      zB = GB(1383),
      lB = GB(1282);

    function pB(BB) {
      let {
        worldCode: OB,
        message: GB
      } = BB;
      const {
        t: pB
      } = (0, DB.H)(), {
        isTouchScreen: qB
      } = (0, jB.o)(["isTouchScreen"]), ZB = oB.featureFlags.canUseInviteLinks, NB = (0, MB.i)(ZB && null === GB), [RB, WB] = (0, JB.j)(), AB = (0, YB.useRef)(null);
      if (null !== GB) return (0, lB.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, lB.jsx)(zB.b, {
          name: "lock"
        }), (0, lB.jsx)("span", {
          children: GB
        })]
      });
      const VB = ZB ? NB : OB,
        SB = qB && ZB && (0, JB.e)();
      return (0, lB.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!ZB && (0, lB.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: pB("worldSocial:worldCode")
        }), (0, lB.jsx)("input", {
          ref: AB,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== VB && void 0 !== VB ? VB : "",
          "aria-label": pB(ZB ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: BB => {
            BB.currentTarget.select()
          }
        }), (0, lB.jsxs)(PB.f, {
          className: "WorldSocialCopy",
          disabled: null === VB,
          onClick: () => {
            null !== VB && (0, JB.h)(VB, {
              useShareSheet: SB,
              onOutcome: BB => {
                if ((0, yB.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== BB || ZB ? BB : "code"
                  }), "copied" === BB) WB();
                else if ("failed" === BB) {
                  var OB;
                  null === (OB = AB.current) || void 0 === OB || OB.focus(), QB.d.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, lB.jsx)(zB.b, {
            name: RB ? "check" : SB ? "up-from-bracket" : "copy"
          }), " ", pB(RB ? "general:copied" : SB ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37414: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => lB,
      e: () => zB,
      i: () => PB
    });
    var YB = GB(627),
      DB = GB(1175),
      QB = GB(1705),
      oB = GB(2928),
      jB = GB(2874),
      yB = GB(1485),
      JB = GB(37418),
      MB = GB(1282);

    function PB(BB, OB) {
      var GB;
      return {
        isError: !1,
        name: BB,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== OB && void 0 !== OB ? OB : {},
        nameColour: null !== (GB = null === OB || void 0 === OB ? void 0 : OB.nameColour) && void 0 !== GB ? GB : YB.b,
        location: {
          status: "offline"
        }
      }
    }

    function zB(BB) {
      let {
        player: OB,
        isFriend: GB = !1,
        status: YB,
        showLocation: yB = void 0 === YB,
        kP: PB,
        onSendFriendRequest: zB,
        actions: lB,
        zIndex: pB
      } = BB;
      const {
        t: qB
      } = (0, DB.H)();
      let ZB = YB;
      null !== PB && void 0 !== PB && PB.on && (ZB = (0, MB.jsxs)(MB.Fragment, {
        children: [null !== YB && void 0 !== YB ? YB : (0, MB.jsx)(jB.e, {
          socialPreview: OB
        }), (0, MB.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", qB("worldSocial:canJoin")]
        })]
      }));
      const NB = {
        playerSocialPreview: OB,
        isFriend: GB,
        hideFriendBadge: !0,
        onFriendRemoved: GB ? BB => {
          QB.b.removeFriendFromState(BB)
        } : void 0,
        status: ZB,
        showLocation: yB,
        onSendFriendRequest: zB,
        zIndex: pB
      };
      return PB ? (0, MB.jsx)(JB.d, {
        ...NB,
        kP: PB,
        children: lB
      }) : (0, MB.jsx)(oB.e, {
        ...NB,
        opensProfileCard: !1,
        children: lB || void 0
      })
    }

    function lB(BB) {
      let {
        row: OB,
        kP: GB,
        canInvite: YB,
        invited: QB,
        onInvite: oB,
        zIndex: jB
      } = BB;
      const {
        t: JB
      } = (0, DB.H)(), PB = "online" === OB.place ? yB.f : yB.j;
      return (0, MB.jsx)(zB, {
        player: OB.friend,
        isFriend: !0,
        status: "here" === OB.place ? JB("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        kP: GB,
        zIndex: jB,
        actions: YB && (0, MB.jsx)(PB, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: QB,
          onClick: oB,
          ariaLabel: `${JB("worldSocial:invite")} ${OB.friend.name}`,
          children: JB(QB ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37386: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB,
      g: () => oB,
      k: () => JB
    });
    var YB = GB(56),
      DB = GB(5011),
      QB = GB(1964);

    function oB(BB) {
      const OB = {
        lobbyName: BB,
        answer: null,
        response: DB.c.getSocialSettings(BB)
      };
      return OB.response.then((BB => {
        OB.answer = BB
      })), OB
    }
    const jB = new Map;

    function yB(BB) {
      jB.set(BB.lobbyName, BB)
    }

    function JB(BB) {
      const [OB] = (0, YB.useState)((() => function(BB) {
        var OB;
        const GB = null !== (OB = jB.get(BB)) && void 0 !== OB ? OB : null;
        return null !== GB && void 0 !== GB && GB.answer && "error" in GB.answer ? null : GB
      }(BB))), [GB, oB] = (0, YB.useState)((() => null !== OB && void 0 !== OB && OB.answer && "settings" in OB.answer ? OB.answer.settings : null)), [yB, JB] = (0, YB.useState)(!0), [MB, PB] = (0, YB.useState)(null !== GB), zB = (0, YB.useRef)(GB);
      zB.current = GB;
      const lB = (0, YB.useRef)(0),
        pB = (0, YB.useRef)(0),
        qB = (0, YB.useRef)(!1),
        ZB = (0, YB.useRef)(!0),
        NB = (0, YB.useCallback)((async OB => {
          const GB = ++lB.current,
            YB = await (null !== OB && void 0 !== OB ? OB : DB.c.getSocialSettings(BB));
          ZB.current && GB === lB.current && (PB(!0), JB(!1), "error" in YB || oB(YB.settings))
        }), [BB]),
        RB = (0, YB.useCallback)((() => {
          JB(!0), NB()
        }), [NB]),
        WB = (0, YB.useCallback)((() => {
          pB.current > 0 ? qB.current = !0 : NB()
        }), [NB]);
      (0, YB.useEffect)((() => (ZB.current = !0, jB.delete(BB), JB(!0), NB(null === OB || void 0 === OB ? void 0 : OB.response), () => {
        ZB.current = !1
      })), [NB, BB, OB]);
      const AB = BB => {
        lB.current++, JB(!1), zB.current = BB, oB(BB)
      };
      return {
        settings: GB,
        loading: yB,
        answered: MB,
        retry: RB,
        refresh: WB,
        change: async function(OB, GB) {
          let {
            quiet: YB = !1,
            onAnswer: oB
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const jB = zB.current;
          if (null === jB) return !1;
          AB(GB(jB)), pB.current > 0 && (qB.current = !0), pB.current++;
          const yB = await DB.c.setSocialSettings(BB, OB);
          pB.current--;
          const JB = !("error" in yB);
          if (!ZB.current) return JB;
          if (null === oB || void 0 === oB || oB(yB), YB);
          else if ("error" in yB) QB.d.showMessage({
            translationKey: yB.error
          });
          else
            for (const BB of yB.notFound) QB.d.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: BB
              }
            });
          if (pB.current > 0) return JB;
          const MB = qB.current;
          return qB.current = !1, !MB && "settings" in yB ? AB(yB.settings) : (MB || AB(jB), NB()), JB
        }
      }
    }
  },
  37426: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      e: () => QB
    });
    var YB = GB(162);
    const DB = new Map;

    function QB(BB, OB) {
      var GB;
      const YB = null !== (GB = DB.get(BB)) && void 0 !== GB ? GB : new Map;
      YB.set(OB, Date.now()), DB.set(BB, YB)
    }

    function oB(BB) {
      const OB = DB.get(BB);
      if (!OB) return [];
      const GB = Date.now();
      for (const [DB, QB] of OB) GB - QB >= YB.r && OB.delete(DB);
      return [...OB.keys()]
    }
  },
  37394: (BB, OB, GB) => {
    function YB(BB, OB) {
      const GB = OB.toLowerCase();
      for (const YB of BB)
        if (YB.toLowerCase() === GB) return !0;
      return !1
    }

    function DB(BB, OB, GB) {
      const DB = [],
        QB = [],
        oB = [];
      for (const jB of BB) !jB.isError && jB.name && ("inGame" === jB.location.status && jB.location.inLobbyName === OB || YB(GB, jB.name) ? QB.push({
        friend: jB,
        place: "here"
      }) : "offline" === jB.location.status ? oB.push({
        friend: jB,
        place: "offline"
      }) : DB.push({
        friend: jB,
        place: "online"
      }));
      return [...DB, ...QB, ...oB]
    }

    function QB(BB, OB, GB) {
      const DB = [],
        QB = BB.flatMap((BB => "here" === BB.place ? [BB.friend.name] : []));
      for (const oB of [...QB, ...OB]) YB(DB, oB) || YB(GB, oB) || DB.push(oB);
      return DB
    }

    function oB(BB, OB) {
      return null === BB || void 0 === BB || !BB.canManage || YB(BB.whitelist, OB) ? "none" : "whitelist" === BB.visibility ? "required" : "quiet"
    }

    function jB(BB) {
      if (null === BB) return !0;
      const {
        visibility: OB
      } = BB;
      return "public" === OB || "unlisted" === OB || "whitelist" === OB && BB.canManage
    }

    function yB(BB, OB, GB) {
      if (GB) {
        const GB = OB.filter((OB => !YB(BB.whitelist, OB)));
        return {
          ...BB,
          whitelist: [...BB.whitelist, ...GB]
        }
      }
      return {
        ...BB,
        whitelist: BB.whitelist.filter((BB => !YB(OB, BB)))
      }
    }

    function JB(BB, OB) {
      const GB = [];
      for (let YB = 0; YB < BB.length; YB += OB) GB.push(BB.slice(YB, YB + OB));
      return GB
    }
    GB.d(OB, {
      e: () => jB,
      h: () => QB,
      j: () => DB,
      l: () => YB,
      m: () => JB,
      o: () => oB,
      s: () => yB
    })
  },
  37706: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(56),
      DB = GB(2653);

    function QB() {
      const BB = (0, DB.g)("lobbyLeaderboardInfo");
      return (0, YB.useMemo)((() => function(BB) {
        if (null === BB) return null;
        const OB = Object.entries(BB),
          GB = OB.filter((BB => {
            let [, OB] = BB;
            return void 0 !== OB
          }));
        if (GB.length === OB.length) return BB;
        const YB = Object.fromEntries(GB),
          DB = Object.keys(BB).filter((BB => !Object.hasOwn(YB, BB)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${DB.join(", ")}`), YB
      }(BB)), [BB])
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);