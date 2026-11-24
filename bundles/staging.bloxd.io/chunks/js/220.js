export const id = 220;
export const ids = [220];
export const modules = {
  41089: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      LobbyManageView: () => wH
    });
    var tS = gS(64),
      bS = gS(1562),
      XS = gS(37047),
      xS = gS(2561),
      NS = gS(2565),
      qS = gS(2537),
      uS = gS(36581);

    function IS() {
      const [SS, HS] = (0, tS.useState)(new Map);
      return {
        get: HS => SS.get(HS),
        hold: (0, tS.useCallback)(((SS, gS, tS) => {
          HS((HS => new Map(HS).set(SS, gS))), tS.then((() => {
            HS((HS => {
              const gS = new Map(HS);
              return gS.delete(SS), gS
            }))
          }))
        }), [])
      }
    }
    var fS = gS(1121),
      kS = gS.n(fS),
      aS = gS(1281),
      KS = gS(1127),
      jS = gS(1419),
      GS = gS(2789),
      CS = gS(5182),
      nS = gS(3577);
    var PS = gS(2100),
      QS = gS(1528);

    function DS(SS, HS, gS) {
      const tS = SS.filter((SS => SS.name !== HS)),
        bS = tS.filter((SS => "none" === SS.role)).sort(((SS, HS) => HS.at - SS.at)),
        XS = tS.filter((SS => "none" !== SS.role)).sort(((SS, HS) => gS.indexOf(SS.role) - gS.indexOf(HS.role) || HS.at - SS.at));
      return [...SS.some((SS => SS.name === HS)) && null !== HS ? [HS] : [], ...[...bS, ...XS].map((SS => SS.name))]
    }

    function wS(SS, HS) {
      const gS = SS.banned.map((SS => SS.name)),
        tS = new Set(gS);
      return {
        here: DS(SS.here, HS, SS.roles.map((SS => SS.role))),
        away: SS.away.filter((SS => !tS.has(SS.name))).map((SS => SS.name)),
        banned: gS
      }
    }

    function hS(SS, HS) {
      const gS = SS.here.find((SS => SS.name === HS));
      if (gS) return {
        section: "here",
        player: gS
      };
      const tS = SS.banned.find((SS => SS.name === HS));
      if (tS) return {
        section: "banned",
        bannedAt: tS.at
      };
      const bS = SS.away.find((SS => SS.name === HS));
      return bS ? {
        section: "away",
        player: bS
      } : {
        section: "gone"
      }
    }
    const ZS = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var JS = gS(2781),
      OS = gS(36569),
      dS = gS(36740),
      cS = gS(3300),
      vS = gS(387);

    function ES(SS, HS, gS) {
      return HS.map((HS => {
        if ("string" === typeof HS) return HS;
        const tS = "str" in HS ? HS.str : HS;
        return "string" === typeof tS ? tS : "entityName" in tS ? tS.entityName : "translationKey" in tS ? SS(tS.translationKey, (0, aS.t)(tS.params, gS)) : ""
      })).join("")
    }

    function LS(SS, HS, gS, tS, bS) {
      return bS - tS < 6e4 ? SS(`${gS}JustNow`) : SS(gS, {
        time: (0, vS.W)((0, aS.q)(HS, gS), tS, bS)
      })
    }
    var YS = gS(2031),
      AS = gS(1774),
      yS = gS(1181);

    function VS(SS) {
      let {
        status: HS
      } = SS;
      return (0, yS.jsx)("span", {
        className: kS()("LobbyManageStatus", {
          LobbyManageStatusRefused: !HS.ok
        }),
        children: (0, yS.jsx)(YS.c, {
          text: HS.text
        })
      })
    }

    function iS(SS) {
      let {
        names: HS,
        cap: gS,
        filterFrom: bS,
        moreLabel: XS,
        reveal: xS = null,
        renderRow: NS
      } = SS;
      const {
        t: qS
      } = (0, aS.F)(), [uS, IS] = (0, tS.useState)(!1), [fS, kS] = (0, tS.useState)(""), jS = uS || null !== xS && HS.indexOf(xS) >= gS, CS = (jS || HS.length <= gS) && null !== bS && HS.length > bS, nS = fS.trim().toLowerCase();
      let PS = jS ? HS : HS.slice(0, gS);
      return CS && "" !== nS && (PS = PS.filter((SS => SS.toLowerCase().includes(nS)))), (0, yS.jsxs)(yS.Fragment, {
        children: [CS && (0, yS.jsx)(AS.e, {
          className: "LobbyManageFilter",
          placeholderText: qS("lobbyManage:findName"),
          ariaLabel: qS("lobbyManage:findName"),
          onValueChange: SS => {
            kS(SS)
          }
        }), PS.length > 0 && (0, yS.jsx)("div", {
          className: "PlayerRows",
          children: PS.map(((SS, HS) => NS(SS, PS.length - HS)))
        }), !jS && HS.length > gS && (0, yS.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, yS.jsx)(GS.c, {
            label: (0, yS.jsxs)(yS.Fragment, {
              children: [XS, " ", (0, yS.jsx)(KS.d, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              IS(!0)
            }
          })
        })]
      })
    }

    function WS(SS) {
      let {
        value: HS,
        placeholder: gS,
        ariaLabel: bS,
        maxLength: XS,
        wide: xS = !1,
        onSave: NS
      } = SS;
      const qS = (0, tS.useRef)(null),
        [uS, IS] = (0, tS.useState)(0),
        fS = (0, tS.useRef)(!0),
        aS = (0, tS.useRef)(null),
        KS = (0, tS.useRef)({
          value: HS,
          onSave: NS
        });
      KS.current = {
        value: HS,
        onSave: NS
      };
      const jS = () => {
        const SS = aS.current;
        aS.current = null, null !== SS && SS !== KS.current.value && KS.current.onSave(SS).then((() => {
          fS.current && IS((SS => SS + 1))
        }))
      };
      return (0, tS.useEffect)((() => {
        null === aS.current && qS.current && (qS.current.value = HS)
      }), [HS, uS]), (0, tS.useEffect)((() => () => {
        fS.current = !1, jS()
      }), []), (0, yS.jsx)("div", {
        className: kS()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: xS
        }),
        onBlur: jS,
        children: (0, yS.jsx)(AS.e, {
          domRef: qS,
          defaultValue: HS,
          placeholderText: gS,
          ariaLabel: bS,
          maxLength: XS,
          onValueChange: SS => {
            aS.current = SS
          },
          onEnter: jS
        })
      })
    }
    const zS = ["mod", "coOwner"],
      US = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function pS(SS) {
      var HS, gS, XS;
      let {
        name: xS,
        place: NS,
        openedIn: qS,
        isYou: uS,
        manage: fS,
        hiddenNames: kS,
        zIndex: jS
      } = SS;
      const {
        t: GS,
        selectedLanguage: CS
      } = (0, aS.F)(), [nS, PS] = (0, tS.useState)(null), {
        state: DS
      } = fS, wS = `player:${xS}`, hS = function(SS, HS) {
        if ("banned" === SS.section) return {
          ...ZS,
          unban: !0
        };
        if ("gone" === SS.section) return ZS;
        const {
          player: gS
        } = SS, tS = "here" === SS.section, bS = tS || "none" !== gS.role ? gS.can.roles : [];
        return {
          gamemode: tS && HS && null !== gS.gamemode && gS.can.gamemode,
          roles: bS,
          fixedRole: 0 === bS.length && "none" !== gS.role ? gS.role : null,
          kick: tS && gS.can.kick,
          ban: gS.can.ban,
          unban: !1
        }
      }(NS, null !== DS.gamemodes), vS = fS.statusOf(wS), YS = fS.isPending(wS), AS = IS(), iS = Date.now(), WS = SS => {
        var HS, gS;
        return null !== (HS = null === (gS = (SS => DS.roles.find((HS => HS.role === SS)))(SS)) || void 0 === gS ? void 0 : gS.label) && void 0 !== HS ? HS : SS
      }, pS = SS => {
        const HS = US[SS];
        return void 0 === HS ? void 0 : GS(HS)
      }, sS = "here" === NS.section || "away" === NS.section ? NS.player : null, BS = "here" === NS.section ? NS.player.id : null, {
        playerSocialPreview: MS,
        isFriend: FS
      } = null === BS ? {
        playerSocialPreview: (0, dS.h)(xS, null),
        isFriend: !1
      } : (0, OS.b)(BS, xS), RS = function() {
        fS.send(...arguments)
      }, TS = (SS, HS) => {
        AS.hold("role", SS, fS.send({
          type: "setRole",
          name: xS,
          role: SS
        }, wS, HS))
      };
      let oS = null;
      if ("ban" === (null === nS || void 0 === nS ? void 0 : nS.kind)) oS = GS("lobbyManageEntry:banConfirm", {
        playerName: xS
      });
      else if ("role" === (null === nS || void 0 === nS ? void 0 : nS.kind)) {
        var lS;
        oS = `${GS("lobbyManage:roleConfirm",{playerName:xS,role:WS(nS.role)})} ${null!==(lS=pS(nS.role))&&void 0!==lS?lS:""}`
      } else if (vS) oS = (0, yS.jsx)(VS, {
        status: vS
      });
      else if (uS) oS = GS("lobbyManage:you");
      else if ("here" === NS.section) "none" === NS.player.role && iS - NS.player.at < 6e5 && (oS = LS(GS, CS.code, "lobbyManage:joinedAgo", NS.player.at, iS));
      else if ("away" === NS.section) {
        if (NS.player.at > 0) {
          const SS = "kicked" === NS.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          oS = LS(GS, CS.code, SS, NS.player.at, iS)
        }
      } else "banned" === NS.section ? null !== NS.bannedAt && (oS = LS(GS, CS.code, "lobbyManage:bannedAgo", NS.bannedAt, iS)) : "banned" === qS && (oS = GS("lobbyManageEntry:unbanned"));
      return (0, yS.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": xS,
        children: (0, yS.jsxs)(JS.h, {
          playerSocialPreview: MS,
          isFriend: FS,
          status: oS,
          opensProfileCard: !uS && (0, OS.c)(!0, xS, kS),
          zIndex: jS,
          children: [null !== nS && (0, yS.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === nS.kind && (0, yS.jsxs)(QS.L, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                PS(null), RS({
                  type: "ban",
                  name: xS
                }, wS)
              },
              children: [(0, yS.jsx)(KS.d, {
                name: "gavel"
              }), (0, yS.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: GS("lobbyManageEntry:ban")
              })]
            }), "role" === nS.kind && (0, yS.jsx)(QS.g, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: nS.role
              },
              onClick: () => {
                PS(null), TS(nS.role)
              },
              children: GS("lobbyManage:makeRole", {
                role: WS(nS.role)
              })
            }), (0, yS.jsx)(QS.j, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                PS(null)
              },
              children: GS("general:cancel")
            })]
          }), null === nS && (0, yS.jsxs)(yS.Fragment, {
            children: [(0, yS.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [hS.gamemode && null !== sS && (0, yS.jsx)(cS.e, {
                options: (null !== (HS = DS.gamemodes) && void 0 !== HS ? HS : []).map((SS => ({
                  value: SS.value,
                  label: ES(GS, SS.label, kS)
                }))),
                value: null !== (gS = AS.get("gamemode")) && void 0 !== gS ? gS : sS.gamemode,
                disabled: YS,
                onChange: SS => {
                  (0, bS.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: SS.value
                  }), AS.hold("gamemode", SS.value, fS.send({
                    type: "setGamemode",
                    name: xS,
                    gamemode: SS.value
                  }, wS))
                }
              }), hS.roles.length > 0 && null !== sS && (0, yS.jsx)(cS.e, {
                options: [...DS.roles].reverse().filter((SS => hS.roles.includes(SS.role))).map((SS => ({
                  value: SS.role,
                  label: SS.label
                }))),
                value: null !== (XS = AS.get("role")) && void 0 !== XS ? XS : sS.role,
                disabled: YS,
                onChange: SS => {
                  var HS;
                  (HS = SS.value) !== (null === sS || void 0 === sS ? void 0 : sS.role) && (zS.includes(HS) ? PS({
                    kind: "role",
                    role: HS
                  }) : ((0, bS.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: HS
                  }), TS(HS, pS(HS))))
                }
              }), null !== hS.fixedRole && (0, yS.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: WS(hS.fixedRole)
              })]
            }), (0, yS.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [hS.kick && (0, yS.jsxs)(QS.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${GS("lobbyManageEntry:kick")} ${xS}`,
                disabled: YS,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  RS({
                    type: "kick",
                    name: xS
                  }, wS)
                },
                children: [(0, yS.jsx)(KS.d, {
                  name: "person-falling-burst"
                }), (0, yS.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: GS("lobbyManageEntry:kick")
                })]
              }), hS.ban && (0, yS.jsxs)(QS.M, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${GS("lobbyManageEntry:ban")} ${xS}`,
                disabled: YS,
                padDestructive: !0,
                onClick: () => {
                  PS({
                    kind: "ban"
                  })
                },
                children: [(0, yS.jsx)(KS.d, {
                  name: "gavel"
                }), (0, yS.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: GS("lobbyManageEntry:ban")
                })]
              }), hS.unban && (0, yS.jsxs)(QS.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${GS("lobbyManageEntry:unban")} ${xS}`,
                disabled: YS,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  RS({
                    type: "unban",
                    name: xS
                  }, wS)
                },
                children: [(0, yS.jsx)(KS.d, {
                  name: "user-unlock"
                }), (0, yS.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: GS("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function sS(SS) {
      var HS, gS, bS, XS;
      let {
        manage: xS,
        focusRequest: NS,
        onFocused: qS
      } = SS;
      const {
        t: uS
      } = (0, aS.F)(), IS = (0, PS.h)("players"), fS = (0, PS.h)("hiddenPlayerNames"), kS = (0, tS.useRef)(null), {
        state: jS
      } = xS, CS = null === IS.localId ? null : null !== (HS = null === (gS = IS.byId[IS.localId]) || void 0 === gS ? void 0 : gS.name) && void 0 !== HS ? HS : null, [nS] = (0, tS.useState)((() => wS(jS, CS))), DS = function(SS, HS, gS) {
        const tS = new Set([...SS.here, ...SS.away, ...SS.banned]),
          bS = wS(HS, gS),
          XS = HS => {
            const gS = bS[HS].filter((SS => !tS.has(SS)));
            for (const SS of gS) tS.add(SS);
            return [...SS[HS], ...gS]
          };
        return {
          here: XS("here"),
          away: XS("away"),
          banned: XS("banned")
        }
      }(nS, jS, CS), [ZS, JS] = (0, tS.useState)(!1), OS = function(SS, HS) {
        return SS.here.filter((SS => SS.name !== HS && "none" === SS.role && SS.can.kick)).length
      }(jS, CS), dS = xS.statusOf("kickAll");
      (0, tS.useEffect)((() => {
        var SS, HS;
        if (null === NS) return;
        const gS = null === (SS = kS.current) || void 0 === SS ? void 0 : SS.querySelector(`[data-lobby-manage-row="${CSS.escape(NS.name)}"]`);
        null === gS || void 0 === gS || gS.scrollIntoView({
          block: "center"
        }), null === gS || void 0 === gS || null === (HS = gS.querySelector(".ProfilePreview")) || void 0 === HS || HS.focus({
          preventScroll: !0
        }), qS(NS.seq)
      }), [null === NS || void 0 === NS ? void 0 : NS.seq]);
      const cS = SS => (HS, gS) => (0, yS.jsx)(pS, {
        name: HS,
        place: hS(jS, HS),
        openedIn: SS,
        isYou: HS === CS,
        manage: xS,
        hiddenNames: fS,
        zIndex: gS
      }, HS);
      return (0, yS.jsxs)("div", {
        ref: kS,
        className: "LobbyManagePage",
        children: [DS.here.length > 0 && (0, yS.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, yS.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, yS.jsx)(GS.c, {
              label: uS("lobbyManage:here"),
              meta: jS.here.length
            }), OS >= 2 && !ZS && (0, yS.jsxs)(QS.M, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: xS.isPending("kickAll"),
              onClick: () => {
                JS(!0)
              },
              children: [(0, yS.jsx)(KS.d, {
                name: "person-falling-burst"
              }), " ", uS("lobbyManage:kickAll")]
            })]
          }), ZS && OS >= 2 && (0, yS.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, yS.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: uS("lobbyManage:kickAllConfirm", {
                count: OS
              })
            }), (0, yS.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, yS.jsx)(QS.L, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  JS(!1), xS.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: uS("lobbyManage:kickAll")
              }), (0, yS.jsx)(QS.j, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  JS(!1)
                },
                children: uS("general:cancel")
              })]
            })]
          }), dS && (0, yS.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, yS.jsx)(VS, {
              status: dS
            })
          }), (0, yS.jsx)(iS, {
            names: DS.here,
            cap: DS.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: cS("here")
          })]
        }), DS.away.length > 0 && (0, yS.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, yS.jsx)(GS.c, {
            label: uS("lobbyManage:notHere"),
            meta: DS.away.length
          }), (0, yS.jsx)(iS, {
            names: DS.away,
            cap: 5,
            filterFrom: null,
            moreLabel: uS("lobbyManage:allCount", {
              count: DS.away.length
            }),
            reveal: null !== (bS = null === NS || void 0 === NS ? void 0 : NS.name) && void 0 !== bS ? bS : null,
            renderRow: cS("away")
          })]
        }), DS.banned.length > 0 && (0, yS.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, yS.jsx)(GS.c, {
            label: uS("lobbyManage:banned"),
            meta: DS.banned.length
          }), (0, yS.jsx)(iS, {
            names: DS.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: uS("lobbyManage:allCount", {
              count: DS.banned.length
            }),
            reveal: null !== (XS = null === NS || void 0 === NS ? void 0 : NS.name) && void 0 !== XS ? XS : null,
            renderRow: cS("banned")
          })]
        })]
      })
    }
    var BS = gS(4749),
      MS = gS(1736),
      FS = gS(36727),
      RS = gS(36737),
      TS = gS(36735),
      oS = gS(36733),
      lS = gS(36760),
      mS = gS(36746),
      eS = gS(36753);

    function rS(SS) {
      const HS = new Set;
      for (const gS of SS) HS.add(gS.toLowerCase());
      return HS
    }

    function SH(SS) {
      var HS, gS;
      let {
        state: bS,
        lobbyName: XS,
        listed: xS,
        isListed: NS,
        sC: qS,
        EQ: uS,
        statusOf: IS
      } = SS;
      const {
        t: fS,
        selectedLanguage: kS
      } = (0, aS.F)(), KS = (0, MS.n)(), jS = (0, PS.h)("players"), CS = null === jS.localId ? null : null !== (HS = null === (gS = jS.byId[jS.localId]) || void 0 === gS ? void 0 : gS.name) && void 0 !== HS ? HS : null, nS = (0, tS.useMemo)((() => (0, oS.g)(KS.friends, XS, bS.here.map((SS => SS.name)))), [KS.friends, XS, bS.here]), QS = new Map(nS.map((SS => [SS.friend.name.toLowerCase(), SS]))), DS = function(SS) {
        let {
          refused: HS,
          listed: gS,
          here: tS,
          friends: bS,
          excluded: XS
        } = SS;
        const xS = rS(XS),
          NS = SS => SS.filter((SS => {
            const HS = SS.toLowerCase();
            return !xS.has(HS) && (xS.add(HS), !0)
          }));
        return {
          added: [],
          refused: NS(HS),
          listed: NS(gS),
          suggested: NS([...tS, ...bS])
        }
      }({
        refused: bS.refused.map((SS => SS.name)),
        listed: xS,
        here: bS.here.map((SS => SS.name)),
        friends: nS.flatMap((SS => "here" === SS.place ? [] : [SS.friend.name])),
        excluded: [...null === CS ? [] : [CS], ...[...bS.here, ...bS.away].flatMap((SS => "none" === SS.role || (0, oS.k)(xS, SS.name) ? [] : [SS.name]))]
      }), [wS] = (0, tS.useState)(DS), [hS, ZS] = (0, tS.useState)([]), JS = function(SS, HS, gS) {
        const tS = rS(gS),
          bS = rS([...gS, ...SS.refused, ...SS.listed, ...SS.suggested]),
          XS = gS => [...SS[gS].filter((SS => !tS.has(SS.toLowerCase()))), ...HS[gS].filter((SS => {
            const HS = SS.toLowerCase();
            return !bS.has(HS) && (bS.add(HS), !0)
          }))];
        return {
          added: [...gS],
          refused: XS("refused"),
          listed: XS("listed"),
          suggested: XS("suggested")
        }
      }(wS, DS, hS), cS = (SS, HS) => {
        var gS, tS;
        const XS = SS.toLowerCase(),
          xS = QS.get(XS),
          uS = bS.here.find((SS => SS.name.toLowerCase() === XS)),
          aS = bS.refused.find((SS => SS.name.toLowerCase() === XS)),
          KS = null !== (gS = null === IS || void 0 === IS ? void 0 : IS(SS)) && void 0 !== gS ? gS : null;
        let jS = null;
        KS ? jS = (0, yS.jsx)(VS, {
          status: KS
        }) : aS ? jS = LS(fS, kS.code, "lobbyManage:triedToJoinAgo", aS.at, Date.now()) : xS && uS ? jS = fS("lobbyManage:friendHere") : xS ? jS = "online" === xS.place ? fS("lobbyManage:friendOnline") : fS("lobbyManage:friend") : uS && (jS = fS("lobbyManage:hereStatus"));
        let GS = null !== (tS = null === xS || void 0 === xS ? void 0 : xS.friend) && void 0 !== tS ? tS : (0, dS.h)(SS, null);
        return !xS && null !== uS && void 0 !== uS && uS.id && (GS = (0, OS.b)(uS.id, uS.name).playerSocialPreview), (0, yS.jsx)(mS.c, {
          playerSocialPreview: GS,
          isFriend: void 0 !== xS,
          hideFriendBadge: !0,
          status: jS,
          zIndex: HS,
          mf: {
            on: NS(SS),
            onChange: HS => {
              qS(SS, HS)
            }
          }
        }, XS)
      }, vS = [...JS.added, ...JS.refused];
      return (0, yS.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, yS.jsx)(GS.c, {
          label: fS("worldSocial:whitelist"),
          meta: xS.length
        }), (0, yS.jsx)(eS.c, {
          label: fS("lobbyManage:add"),
          icon: "user-check",
          placeholder: fS("socialBar:enterPlayerName"),
          onSubmit: async SS => {
            const HS = await uS(SS);
            return HS.ok && ZS((HS => [SS, ...HS])), HS
          }
        }), vS.length > 0 && (0, yS.jsx)("div", {
          className: "PlayerRows",
          children: vS.map(((SS, HS) => cS(SS, vS.length - HS)))
        }), (0, yS.jsx)(iS, {
          names: JS.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: fS("lobbyManage:allOnWhitelist", {
            count: JS.listed.length
          }),
          renderRow: cS
        }), (0, yS.jsx)(iS, {
          names: JS.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: fS("lobbyManage:allCount", {
            count: JS.suggested.length
          }),
          renderRow: cS
        })]
      })
    }

    function HH(SS) {
      let {
        manage: HS,
        listing: gS
      } = SS;
      const {
        t: tS
      } = (0, aS.F)(), XS = (SS, gS) => ((0, bS.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: SS
      }), HS.send({
        type: "setListing",
        field: SS,
        value: gS
      }, `listing:${SS}`)), xS = SS => {
        const gS = HS.statusOf(`listing:${SS}`);
        return gS && !gS.ok && (0, yS.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, yS.jsx)(VS, {
            status: gS
          })
        })
      };
      return (0, yS.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, yS.jsx)(GS.c, {
          label: tS("lobbyManage:inWorldsList")
        }), (0, yS.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, yS.jsx)("div", {
            className: "SliderText",
            children: tS("lobbyManage:description")
          }), (0, yS.jsx)(WS, {
            value: gS.description,
            ariaLabel: tS("lobbyManage:description"),
            wide: !0,
            onSave: SS => XS("description", SS)
          })]
        }), xS("description"), (0, yS.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, yS.jsx)("div", {
            className: "SliderText",
            children: tS("lobbyManage:emojis")
          }), (0, yS.jsx)(WS, {
            value: gS.emojis,
            ariaLabel: tS("lobbyManage:emojis"),
            onSave: SS => XS("emojis", SS)
          })]
        }), xS("emojis"), (0, yS.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, yS.jsx)("div", {
            className: "SliderText",
            children: tS("lobbyManage:colour")
          }), (0, yS.jsx)(gH, {
            value: gS.colour,
            ariaLabel: tS("lobbyManage:colour"),
            onSave: SS => {
              XS("colour", SS)
            }
          })]
        }), xS("colour")]
      })
    }

    function gH(SS) {
      let {
        value: HS,
        ariaLabel: gS,
        onSave: bS
      } = SS;
      const XS = (0, tS.useRef)(null),
        xS = (0, tS.useRef)({
          value: HS,
          onSave: bS
        });
      xS.current = {
        value: HS,
        onSave: bS
      };
      const NS = (0, tS.useRef)(null),
        qS = (0, tS.useRef)(!1),
        uS = SS => {
          qS.current && SS.value !== xS.current.value && SS.value !== NS.current && (NS.current = SS.value, xS.current.onSave(SS.value))
        };
      return (0, tS.useEffect)((() => {
        XS.current && document.activeElement !== XS.current && (XS.current.value = HS)
      }), [HS]), (0, tS.useEffect)((() => {
        const SS = XS.current,
          HS = () => {
            uS(SS)
          };
        return SS.addEventListener("change", HS), () => {
          SS.removeEventListener("change", HS), uS(SS)
        }
      }), []), (0, yS.jsx)("input", {
        ref: XS,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: HS,
        "aria-label": gS,
        onInput: () => {
          qS.current = !0
        },
        onBlur: SS => {
          uS(SS.currentTarget)
        }
      })
    }

    function tH(SS) {
      let {
        manage: HS
      } = SS;
      const {
        lobbyName: gS,
        shownLobbyName: tS
      } = (0, PS.h)("connectedGame");
      return HS.state.you.canSetVisibility && null !== gS ? (0, yS.jsx)(XH, {
        manage: HS,
        lobbyName: gS,
        worldCode: null !== tS && void 0 !== tS ? tS : gS
      }, gS) : (0, yS.jsx)(xH, {
        manage: HS,
        lobbyName: null !== gS && void 0 !== gS ? gS : ""
      })
    }

    function bH(SS) {
      return SS.map((SS => SS.toLowerCase())).sort().join(",")
    }

    function XH(SS) {
      var HS;
      let {
        manage: gS,
        lobbyName: XS,
        worldCode: xS
      } = SS;
      const {
        t: NS
      } = (0, aS.F)(), {
        settings: qS,
        loading: uS,
        change: IS,
        retry: fS,
        refresh: kS
      } = (0, FS.h)(XS), KS = (0, MS.n)(), {
        state: CS
      } = gS, nS = (0, tS.useRef)(qS);
      nS.current = qS;
      const PS = bH(null !== (HS = CS.whitelist) && void 0 !== HS ? HS : []),
        DS = null !== CS.whitelist;
      (0, tS.useEffect)((() => {
        const SS = nS.current;
        null !== SS && (SS.visibility !== CS.visibility || DS && bH(SS.whitelist) !== PS) && kS()
      }), [CS.visibility, PS, DS, kS]);
      const wS = async (SS, HS) => {
        let gS = null;
        return await IS(SS, HS, {
          quiet: !0,
          onAnswer: SS => {
            gS = SS
          }
        }), gS
      }, hS = (SS, HS) => {
        null !== HS && "error" in HS && gS.showStatus(SS, {
          ok: !1,
          text: [NS(HS.error)]
        })
      }, ZS = async SS => {
        if (null === qS || SS === qS.visibility) return;
        (0, bS.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: SS
        });
        const HS = "whitelist" === SS ? (0, oS.d)((0, oS.g)(KS.friends, XS, CS.here.map((SS => SS.name))), (0, lS.c)(XS), qS.whitelist) : [],
          gS = await wS({
            setVisibility: SS
          }, (HS => ({
            ...HS,
            visibility: SS
          })));
        hS("mode", gS), null === gS || "error" in gS || await (async SS => {
          for (const HS of (0, oS.m)(SS, BS.K))
            if (!await IS({
                whitelistAdd: HS
              }, (SS => (0, oS.s)(SS, HS, !0)))) return !1;
          return !0
        })(HS)
      }, JS = (0, tS.useMemo)((() => {
        var SS;
        if (null === qS) return [];
        const HS = null !== (SS = CS.whitelist) && void 0 !== SS ? SS : [];
        return [...HS.filter((SS => (0, oS.k)(qS.whitelist, SS))), ...qS.whitelist.filter((SS => !(0, oS.k)(HS, SS)))]
      }), [qS, CS.whitelist]), OS = gS.statusOf("mode");
      return (0, yS.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, yS.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, yS.jsx)(GS.c, {
            label: NS("worldSocial:whoCanJoin")
          }), null === qS && uS && (0, yS.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, yS.jsx)(jS.c, {})
          }), null === qS && !uS && (0, yS.jsx)(QS.j, {
            className: "SmallTextLight",
            onClick: fS,
            children: NS("worldSocial:loadFailed")
          }), null !== qS && (0, yS.jsx)(RS.b, {
            visibility: qS.visibility,
            onPick: SS => {
              ZS(SS)
            }
          }), OS && (0, yS.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, yS.jsx)(VS, {
              status: OS
            })
          }), null !== qS && "private" !== qS.visibility && (0, yS.jsx)(TS.b, {
            worldCode: xS,
            message: null
          })]
        }), "whitelist" === (null === qS || void 0 === qS ? void 0 : qS.visibility) && (0, yS.jsx)(SH, {
          state: CS,
          lobbyName: XS,
          listed: JS,
          isListed: SS => (0, oS.k)(qS.whitelist, SS),
          sC: (SS, HS) => {
            (0, bS.reportAnalyticsClick)(HS ? {
              id: "lobby_manage.whitelist_add",
              value: "mf"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), wS(HS ? {
              whitelistAdd: [SS]
            } : {
              whitelistRemove: SS
            }, (gS => (0, oS.s)(gS, [SS], HS))).then((HS => {
              hS(`whitelist:${SS.toLowerCase()}`, HS)
            }))
          },
          EQ: async SS => {
            (0, bS.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const HS = await wS({
              whitelistAdd: [SS]
            }, (HS => (0, oS.s)(HS, [SS], !0)));
            return null === HS ? {
              ok: !1,
              error: NS("worldSocial:changeFailed")
            } : "error" in HS ? {
              ok: !1,
              error: NS(HS.error)
            } : (0, oS.k)(HS.notFound, SS) ? {
              ok: !1,
              error: NS("lobbyManage:noPlayerCalled", {
                playerName: SS
              })
            } : {
              ok: !0
            }
          },
          statusOf: SS => gS.statusOf(`whitelist:${SS.toLowerCase()}`)
        }), "public" === (null === qS || void 0 === qS ? void 0 : qS.visibility) && null !== CS.listing && (0, yS.jsx)(HH, {
          manage: gS,
          listing: CS.listing
        })]
      })
    }

    function xH(SS) {
      var HS;
      let {
        manage: gS,
        lobbyName: tS
      } = SS;
      const {
        t: XS
      } = (0, aS.F)(), {
        state: xS
      } = gS, NS = IS(), qS = null !== (HS = xS.whitelist) && void 0 !== HS ? HS : [];
      return (0, yS.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, yS.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, yS.jsx)(GS.c, {
            label: XS("worldSocial:whoCanJoin")
          }), (0, yS.jsx)("div", {
            className: "LobbyManageModeText",
            children: XS(`worldSocial:${xS.visibility}`)
          })]
        }), "whitelist" === xS.visibility && xS.you.canEditWhitelist && (0, yS.jsx)(SH, {
          state: xS,
          lobbyName: tS,
          listed: qS,
          isListed: SS => {
            var HS;
            return null !== (HS = NS.get(SS.toLowerCase())) && void 0 !== HS ? HS : (0, oS.k)(qS, SS)
          },
          sC: (SS, HS) => {
            (0, bS.reportAnalyticsClick)(HS ? {
              id: "lobby_manage.whitelist_add",
              value: "mf"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const tS = SS.toLowerCase();
            NS.hold(tS, HS, gS.send(HS ? {
              type: "whitelistAdd",
              names: [SS]
            } : {
              type: "whitelistRemove",
              name: SS
            }, `whitelist:${tS}`))
          },
          EQ: async SS => {
            (0, bS.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const HS = await gS.send({
              type: "whitelistAdd",
              names: [SS]
            }, "whitelist-field");
            return HS.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, yS.jsx)(YS.c, {
                text: HS.message
              })
            }
          },
          statusOf: SS => gS.statusOf(`whitelist:${SS.toLowerCase()}`)
        }), "public" === xS.visibility && null !== xS.listing && (0, yS.jsx)(HH, {
          manage: gS,
          listing: xS.listing
        })]
      })
    }
    var NH = gS(5148),
      qH = gS(1444);
    const uH = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const IH = (0, tS.memo)((function(SS) {
      var HS;
      let {
        rule: gS,
        value: tS,
        status: bS,
        pending: XS,
        hiddenNames: xS,
        RZ: NS,
        onAction: qS
      } = SS;
      const {
        t: uS
      } = (0, aS.F)(), IS = SS => NS(gS, SS), fS = (SS, HS) => {
        qS(gS, SS, HS)
      }, kS = ES(uS, gS.label, xS), KS = gS.info ? ES(uS, gS.info, xS) : void 0, jS = gS.placeholder ? ES(uS, gS.placeholder, xS) : void 0, GS = (null !== (HS = gS.options) && void 0 !== HS ? HS : []).map((SS => ({
        value: SS.value,
        label: ES(uS, SS.label, xS)
      }))), CS = Math.max(0, ...GS.map((SS => function(SS) {
        let HS = 0;
        for (const gS of SS) HS += uH.test(gS) ? 2 : 1;
        return HS
      }(SS.label)))), nS = bS && (0, yS.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, yS.jsx)(VS, {
          status: bS
        })
      }), PS = (0, yS.jsxs)("div", {
        className: "SliderText",
        children: [kS, void 0 !== KS && (0, yS.jsx)(qH.e, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: KS
        })]
      });
      return "toggle" === gS.kind ? (0, yS.jsxs)(yS.Fragment, {
        children: [(0, yS.jsx)(NH.d, {
          label: kS,
          checked: !0 === tS,
          circleInfoText: KS,
          disabled: XS,
          onClick: IS
        }), nS]
      }) : "choice" === gS.kind && GS.length <= 3 ? (0, yS.jsxs)(yS.Fragment, {
        children: [(0, yS.jsx)(NH.g, {
          label: kS,
          options: GS,
          value: String(tS),
          circleInfoText: KS,
          onChange: IS
        }), nS]
      }) : (0, yS.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [PS, "choice" === gS.kind && (0, yS.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": CS
          },
          children: (0, yS.jsx)(cS.e, {
            options: GS,
            value: String(tS),
            disabled: XS,
            onChange: SS => {
              IS(SS.value)
            }
          })
        }), ("number" === gS.kind || "text" === gS.kind) && (0, yS.jsx)(WS, {
          value: null === tS ? "" : String(tS),
          placeholder: jS,
          ariaLabel: kS,
          onSave: SS => {
            const HS = SS.trim(),
              tS = Number(HS);
            return IS("number" === gS.kind && "" !== HS && Number.isFinite(tS) ? tS : HS)
          }
        }), "action" === gS.kind && (0, yS.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [GS.length > 3 && (0, yS.jsx)(cS.e, {
            options: GS,
            value: {
              value: "",
              label: null !== jS && void 0 !== jS ? jS : kS
            },
            disabled: XS,
            onChange: SS => {
              fS(SS.value)
            }
          }), GS.length > 0 && GS.length <= 3 && GS.map((SS => (0, yS.jsx)(QS.j, {
            className: "SmallTextLight",
            disabled: XS,
            onClick: () => {
              fS(SS.value)
            },
            children: SS.label
          }, SS.value))), 0 === GS.length && (0, yS.jsx)(QS.j, {
            className: "SmallTextLight",
            disabled: XS,
            onClick: () => {
              fS()
            },
            children: null !== jS && void 0 !== jS ? jS : kS
          })]
        }), "names" === gS.kind && (0, yS.jsx)(fH, {
          names: Array.isArray(tS) ? tS : [],
          pending: XS,
          onAction: fS
        }), nS]
      })
    }));

    function fH(SS) {
      let {
        names: HS,
        pending: gS,
        onAction: bS
      } = SS;
      const {
        t: XS
      } = (0, aS.F)(), xS = (0, tS.useRef)(null), [NS, qS] = (0, tS.useState)(""), uS = () => {
        const SS = NS.trim();
        "" !== SS && (bS(SS, "add"), xS.current && (xS.current.value = ""), qS(""))
      };
      return (0, yS.jsxs)("div", {
        className: "LobbyManageNames",
        children: [HS.map((SS => (0, yS.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, yS.jsx)("span", {
            className: "LobbyManageNameText",
            children: SS
          }), (0, yS.jsx)(QS.j, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: XS("lobbyManage:removeName", {
              name: SS
            }),
            disabled: gS,
            onClick: () => {
              bS(SS, "remove")
            },
            children: (0, yS.jsx)(KS.d, {
              name: "xmark"
            })
          })]
        }, SS))), (0, yS.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, yS.jsx)(AS.e, {
            domRef: xS,
            placeholderText: XS("lobbyManage:namePlaceholder"),
            ariaLabel: XS("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: SS => {
              qS(SS)
            },
            onEnter: uS
          }), (0, yS.jsx)(QS.j, {
            className: "SmallTextLight",
            disabled: gS || "" === NS.trim(),
            onClick: uS,
            children: XS("lobbyManage:addHere")
          })]
        })]
      })
    }
    const kH = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function aH(SS, HS) {
      return kH.map((gS => {
        let {
          group: tS,
          title: bS
        } = gS;
        const XS = SS.filter((SS => SS.group === tS && void 0 === SS.parent)).map((gS => {
          const tS = !0 === HS(gS) ? SS.filter((SS => SS.parent === gS.key)) : [];
          return {
            rule: gS,
            children: tS
          }
        }));
        return {
          group: tS,
          title: bS,
          items: XS
        }
      }))
    }

    function KH(SS) {
      return SS.flatMap((SS => {
        let {
          items: HS
        } = SS;
        return HS.flatMap((SS => {
          let {
            rule: HS,
            children: gS
          } = SS;
          return [HS, ...gS]
        }))
      }))
    }

    function jH(SS) {
      let {
        manage: HS,
        rowsShown: gS
      } = SS;
      const {
        t: XS
      } = (0, aS.F)(), xS = (0, PS.h)("hiddenPlayerNames"), {
        rules: NS
      } = HS.state, qS = IS(), uS = SS => {
        const HS = qS.get(SS.key);
        return void 0 === HS ? SS.value : HS
      }, fS = aH(NS, uS), [kS] = (0, tS.useState)((() => KH(fS).map((SS => SS.key)))), KS = gS === 1 / 0 ? null : new Set(kS.slice(0, gS)), jS = SS => null === KS || KS.has(SS.key), {
        hold: CS
      } = qS, nS = (0, tS.useCallback)(((SS, gS) => {
        (0, bS.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: SS.key
        });
        const tS = HS.send({
          type: "setRule",
          key: SS.key,
          value: gS
        }, `rule:${SS.key}`);
        return CS(SS.key, gS, tS), tS
      }), [HS, CS]), QS = (0, tS.useCallback)(((SS, gS, tS) => {
        (0, bS.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: SS.key
        }), HS.send({
          type: "ruleAction",
          key: SS.key,
          ...void 0 === gS ? {} : {
            arg: gS
          },
          ...void 0 === tS ? {} : {
            op: tS
          }
        }, `rule:${SS.key}`, void 0 === tS ? XS("lobbyManage:setJustNow") : void 0)
      }), [HS, XS]), DS = SS => {
        const gS = `rule:${SS.key}`;
        return (0, yS.jsx)(IH, {
          rule: SS,
          value: uS(SS),
          status: HS.statusOf(gS),
          pending: HS.isPending(gS),
          hiddenNames: xS,
          RZ: nS,
          onAction: QS
        }, SS.key)
      };
      return (0, yS.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: fS.map((SS => {
          let {
            group: HS,
            title: gS,
            items: bS
          } = SS;
          const xS = bS.filter((SS => {
            let {
              rule: HS
            } = SS;
            return jS(HS)
          }));
          return 0 === xS.length ? null : (0, yS.jsxs)(tS.Fragment, {
            children: [(0, yS.jsx)(GS.c, {
              label: XS(gS)
            }), xS.map((SS => {
              let {
                rule: HS,
                children: gS
              } = SS;
              return 0 === gS.length ? DS(HS) : (0, yS.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [DS(HS), gS.filter(jS).map(DS)]
              }, HS.key)
            }))]
          }, HS)
        }))
      })
    }
    const GH = {
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
      CH = 5,
      nH = (0, tS.memo)((function(SS) {
        let {
          page: HS,
          manage: gS,
          leaderboard: bS,
          focusRequest: XS,
          onFocused: xS,
          ruleRowsShown: NS
        } = SS;
        return "leaderboard" === HS ? (0, yS.jsx)(tS.Suspense, {
          fallback: (0, yS.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, yS.jsx)(jS.c, {})
          }),
          children: bS
        }) : "joining" === HS ? (0, yS.jsx)(tH, {
          manage: gS
        }) : "rules" === HS ? (0, yS.jsx)(jH, {
          manage: gS,
          rowsShown: NS
        }) : (0, yS.jsx)(sS, {
          manage: gS,
          focusRequest: XS,
          onFocused: xS
        })
      }));

    function PH(SS) {
      let {
        page: HS
      } = SS;
      const {
        t: gS
      } = (0, aS.F)(), tS = GH[HS];
      return (0, yS.jsxs)(yS.Fragment, {
        children: [(0, yS.jsx)(KS.d, {
          name: tS.icon
        }), " ", (0, yS.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: gS(tS.title)
        })]
      })
    }

    function QH(SS) {
      var HS;
      const {
        t: gS
      } = (0, aS.F)(), {
        pages: XS,
        landing: xS
      } = SS, qS = (0, tS.useRef)(null), uS = (0, tS.useRef)(null), IS = (0, tS.useRef)(null), fS = (0, tS.useRef)(new Map), [KS, jS] = (0, tS.useState)(null), PS = (0, tS.useRef)(KS), QS = (0, tS.useRef)(0), [DS, wS] = (0, tS.useState)(XS[0]), hS = null !== KS && void 0 !== KS ? KS : XS.includes(DS) ? DS : XS[0], [ZS] = (0, tS.useState)(null !== (HS = null === xS || void 0 === xS ? void 0 : xS.page) && void 0 !== HS ? HS : null), JS = null !== ZS && XS.includes(ZS) ? [ZS, ...XS.filter((SS => SS !== ZS))] : XS, [OS] = (0, tS.useState)((() => {
        const HS = KH(aH(SS.manage.state.rules, (SS => SS.value)));
        return Math.max(1, Math.ceil(HS.length / CH))
      })), dS = JS.flatMap((SS => "rules" === SS ? Array(OS).fill(SS) : [SS])), cS = function(SS, HS) {
        const [gS, bS] = (0, tS.useState)(SS), XS = gS >= HS;
        return XS && gS !== 1 / 0 && bS(1 / 0), (0, tS.useLayoutEffect)((() => {
          if (XS) return;
          let SS = !0;
          return (0, nS.f)().then((() => {
            SS && bS((SS => SS + 1))
          })), () => {
            SS = !1
          }
        }), [gS, XS]), XS ? 1 / 0 : gS
      }(1, dS.length), vS = dS.slice(0, cS), ES = new Set(vS), LS = cS < dS.length, YS = LS ? vS.filter((SS => "rules" === SS)).length * CH : 1 / 0, AS = (0, tS.useRef)(SS.focusRequest);
      AS.current = SS.focusRequest;
      const VS = SS => {
          PS.current = SS, jS(SS)
        },
        iS = () => {
          var SS, HS;
          qS.current.style.scrollPaddingTop = `${null!==(SS=null===(HS=IS.current)||void 0===HS?void 0:HS.offsetHeight)&&void 0!==SS?SS:0}px`
        },
        WS = SS => {
          const HS = qS.current,
            gS = fS.current.get(SS);
          if (void 0 === gS) return;
          const tS = document.activeElement,
            bS = AS.current,
            XS = null === bS ? null : gS.querySelector(`[data-lobby-manage-row="${CSS.escape(bS.name)}"]`);
          iS(), tS instanceof HTMLElement && null !== XS && void 0 !== XS && XS.contains(tS) ? tS.scrollIntoView({
            block: "center"
          }) : null === gS.previousElementSibling ? HS.scrollTop = 0 : gS.scrollIntoView({
            block: "start"
          }), QS.current = HS.scrollTop
        },
        zS = SS => {
          (0, bS.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: SS
          }), VS(SS), WS(SS)
        },
        US = () => {
          var SS, HS;
          const gS = qS.current,
            tS = gS.getBoundingClientRect().top + (null !== (SS = null === (HS = IS.current) || void 0 === HS ? void 0 : HS.offsetHeight) && void 0 !== SS ? SS : 0),
            bS = XS.map((SS => {
              var HS, gS;
              return (null !== (HS = null === (gS = fS.current.get(SS)) || void 0 === gS ? void 0 : gS.getBoundingClientRect().top) && void 0 !== HS ? HS : 1 / 0) - tS
            })),
            xS = !LS && gS.scrollTop + gS.clientHeight >= gS.scrollHeight - 1;
          wS(XS[(0, NS.h)(bS, xS)])
        },
        pS = () => {
          null !== PS.current && (VS(null), US())
        };
      (0, tS.useLayoutEffect)((() => {
        null !== xS && XS.includes(xS.page) && zS(xS.page)
      }), [null === xS || void 0 === xS ? void 0 : xS.seq]), (0, tS.useLayoutEffect)((() => {
        null === PS.current || XS.includes(PS.current) || pS()
      }));
      const {
        onFocused: sS
      } = SS, BS = (0, tS.useCallback)((SS => {
        null !== PS.current && WS(PS.current), sS(SS)
      }), [sS]);
      (0, tS.useLayoutEffect)((() => {
        const SS = PS.current;
        null !== SS && (!LS || XS.indexOf(dS[cS - 1]) < XS.indexOf(SS)) && WS(SS)
      }), [cS]), (0, tS.useEffect)((() => {
        const SS = new ResizeObserver((() => {
          null !== PS.current ? WS(PS.current) : iS()
        }));
        return SS.observe(qS.current), SS.observe(uS.current), () => {
          SS.disconnect()
        }
      }), []), (0, tS.useLayoutEffect)((() => {
        const SS = IS.current,
          HS = null === SS || void 0 === SS ? void 0 : SS.querySelector(".SegmentedToggleOptionSelected");
        HS && (SS.scrollLeft = Math.min(HS.offsetLeft, Math.max(SS.scrollLeft, HS.offsetLeft + HS.offsetWidth - SS.clientWidth)))
      }), [hS]);
      return (0, yS.jsxs)("div", {
        ref: qS,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === PS.current ? US() : Math.abs(qS.current.scrollTop - QS.current) > 1 && pS()
        },
        onClick: SS => {
          var HS;
          null !== (HS = IS.current) && void 0 !== HS && HS.contains(SS.target) || pS()
        },
        onFocus: SS => {
          var HS;
          const gS = null === PS.current ? null : fS.current.get(PS.current);
          !gS || gS.contains(SS.target) || null !== (HS = IS.current) && void 0 !== HS && HS.contains(SS.target) || pS()
        },
        children: [XS.length > 1 && (0, yS.jsx)("div", {
          ref: IS,
          className: "LobbyManageChips",
          children: (0, yS.jsx)(CS.d, {
            options: XS.map((SS => ({
              value: SS,
              label: (0, yS.jsx)(PH, {
                page: SS
              }),
              ariaLabel: gS(GH[SS].title)
            }))),
            value: hS,
            padTabs: "2",
            ariaLabel: gS("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: zS
          })
        }), (0, yS.jsx)("div", {
          ref: uS,
          className: kS()("LobbyManageInner", {
            Staging: LS
          }),
          children: XS.filter((SS => ES.has(SS))).map((HS => {
            const gS = HS === KS;
            return (0, yS.jsxs)("section", {
              ref: SS => {
                SS ? fS.current.set(HS, SS) : fS.current.delete(HS)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": gS || void 0,
              children: [XS.length > 1 && (0, yS.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": gS || void 0,
                "data-pad-unavailable": gS || void 0,
                children: (0, yS.jsx)(GS.c, {
                  label: (0, yS.jsx)(PH, {
                    page: HS
                  })
                })
              }), (0, yS.jsx)(nH, {
                page: HS,
                manage: SS.manage,
                leaderboard: SS.leaderboard,
                focusRequest: SS.focusRequest,
                onFocused: BS,
                ruleRowsShown: "rules" === HS ? YS : 1 / 0
              })]
            }, HS)
          }))
        })]
      })
    }

    function DH(SS) {
      return void 0 === (null === SS || void 0 === SS ? void 0 : SS.page) ? null : {
        page: SS.page,
        seq: SS.seq
      }
    }

    function wH(SS) {
      let {
        leaderboard: HS
      } = SS;
      const gS = function() {
          const SS = (0, qS.i)("lobbyManage"),
            [HS, gS] = (0, tS.useReducer)((SS => SS + 1), 0),
            [bS] = (0, tS.useState)((() => new uS.e(gS)));
          return (0, tS.useEffect)((() => {
            const SS = bS.nextDeadline();
            if (null === SS) return;
            const HS = setTimeout((() => {
              bS.expire(Date.now()), gS()
            }), Math.max(0, SS - Date.now()));
            return () => {
              clearTimeout(HS)
            }
          })), (0, tS.useMemo)((() => null === SS ? null : {
            state: SS,
            send: (SS, HS, tS) => {
              const XS = bS.send(SS, HS, null !== tS && void 0 !== tS ? tS : null);
              return gS(), XS
            },
            statusOf: SS => bS.statusOf(SS, Date.now()),
            showStatus: (SS, HS) => {
              bS.show(SS, HS)
            },
            isPending: SS => bS.isPending(SS)
          }), [SS, HS, bS])
        }(),
        IS = (0, NS.i)((0, XS.e)()),
        fS = (0, xS.l)(),
        [kS, aS] = (0, tS.useState)((() => DH(fS))),
        [KS, jS] = (0, tS.useState)(null);
      return (0, tS.useEffect)((() => {
        null === fS && (0, bS.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, tS.useEffect)((() => {
        null !== fS && (aS((SS => (null === SS || void 0 === SS ? void 0 : SS.seq) === fS.seq ? SS : DH(fS))), void 0 !== fS.focusName && "players" === fS.page ? jS({
          name: fS.focusName,
          seq: fS.seq
        }) : (0, xS.h)(fS.seq))
      }), [null === fS || void 0 === fS ? void 0 : fS.seq]), null === gS ? null : (0, yS.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, yS.jsx)(QH, {
          pages: (0, NS.e)(gS.state, IS),
          manage: gS,
          leaderboard: HS,
          focusRequest: KS,
          onFocused: xS.h,
          landing: kS
        })
      })
    }
  },
  36581: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => IS,
      i: () => qS
    });
    var tS = gS(1562),
      bS = gS(2083),
      XS = gS(2060);
    const xS = 1e4;
    let NS = 0;

    function qS(SS) {
      const HS = ++NS;
      return new Promise((gS => {
        const NS = HS => {
            qS(), clearTimeout(uS), !1 === (null === HS || void 0 === HS ? void 0 : HS.ok) && (0, tS.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: SS.type
            }), gS(HS)
          },
          qS = bS.d.subscribe("lobbyManage", (SS => {
            const gS = function(SS, HS) {
              var gS;
              return null !== (gS = null === SS || void 0 === SS ? void 0 : SS.results.find((SS => SS.requestId === HS))) && void 0 !== gS ? gS : null
            }(SS, HS);
            null !== gS && NS(gS)
          })),
          uS = setTimeout((() => {
            NS(null)
          }), xS);
        XS.gameBridge.send("lobbyManage", {
          ...SS,
          requestId: HS
        })
      }))
    }
    const uS = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class IS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qS;
        this.onChange = SS, this.sendAction = HS, this.pending = new Map, this.statuses = new Map
      }
      send(SS, HS, gS) {
        var tS;
        return this.statuses.delete(HS), this.pending.set(HS, (null !== (tS = this.pending.get(HS)) && void 0 !== tS ? tS : 0) + 1), this.sendAction(SS).then((SS => {
          var tS;
          const bS = null !== SS && void 0 !== SS ? SS : {
              requestId: -1,
              ok: !1,
              message: uS
            },
            XS = (null !== (tS = this.pending.get(HS)) && void 0 !== tS ? tS : 1) - 1;
          XS > 0 ? this.pending.set(HS, XS) : this.pending.delete(HS);
          const xS = !bS.ok || bS.message.length > 0 ? bS.message : null === gS ? null : [gS];
          return null !== xS && this.statuses.set(HS, {
            ok: bS.ok,
            text: xS,
            until: Date.now() + 4e3
          }), this.onChange(), bS
        }))
      }
      show(SS, HS) {
        this.statuses.set(SS, {
          ...HS,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(SS) {
        for (const [HS, gS] of this.statuses) gS.until <= SS && this.statuses.delete(HS)
      }
      nextDeadline() {
        let SS = null;
        for (const gS of this.statuses.values()) {
          var HS;
          SS = Math.min(null !== (HS = SS) && void 0 !== HS ? HS : 1 / 0, gS.until)
        }
        return SS
      }
      statusOf(SS, HS) {
        const gS = this.statuses.get(SS);
        return !gS || gS.until <= HS ? null : {
          ok: gS.ok,
          text: gS.text
        }
      }
      isPending(SS) {
        return this.pending.has(SS)
      }
    }
  },
  36569: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => uS,
      c: () => qS
    });
    var tS = gS(656),
      bS = gS(2060),
      XS = gS(1736),
      xS = gS(104),
      NS = gS(1344);

    function qS(SS, HS, gS) {
      return xS.featureFlags.useSocialFeatures && SS && null === (0, NS.e)(HS, gS)
    }

    function uS(SS, HS) {
      var gS, xS;
      const NS = XS.d.getSocialState().friends.find((SS => SS.name.toLowerCase() === HS.toLowerCase())),
        qS = bS.gameBridge.latest("players").byId[SS],
        uS = void 0 !== qS && qS.name === HS,
        IS = uS && null !== (gS = qS.cosmetics) && void 0 !== gS ? gS : void 0,
        fS = NS && IS ? {
          ...NS,
          cosmetics: IS
        } : NS;
      return {
        playerSocialPreview: null !== fS && void 0 !== fS ? fS : {
          isError: !1,
          name: HS,
          ranks: uS ? [...qS.ranks] : [],
          cosmetics: null !== IS && void 0 !== IS ? IS : {},
          nameColour: null !== (xS = null === IS || void 0 === IS ? void 0 : IS.nameColour) && void 0 !== xS ? xS : tS.d,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== NS
      }
    }
  },
  36753: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => fS
    });
    var tS = gS(64),
      bS = gS(1121),
      XS = gS.n(bS),
      xS = gS(1774),
      NS = gS(1528),
      qS = gS(1419),
      uS = gS(1127),
      IS = gS(1181);

    function fS(SS) {
      let {
        label: HS,
        icon: gS,
        placeholder: bS,
        onSubmit: fS
      } = SS;
      const kS = (0, tS.useRef)(null),
        [aS, KS] = (0, tS.useState)(""),
        [jS, GS] = (0, tS.useState)("Enter"),
        [CS, nS] = (0, tS.useState)(null);
      (0, tS.useEffect)((() => {
        if ("Success" !== jS && "Error" !== jS) return;
        const SS = setTimeout((() => {
          "Success" === jS && kS.current && (kS.current.value = "", KS("")), GS("Enter")
        }), "Success" === jS ? 1e3 : 4e3);
        return () => {
          clearTimeout(SS)
        }
      }), [jS]);
      const PS = () => {
        const SS = aS.trim();
        "" !== SS && "Enter" === jS && (GS("Loading"), fS(SS).then((SS => {
          kS.current && ("error" in SS ? null === SS.error ? GS("Enter") : (nS(SS.error), GS("Error")) : GS("Success"))
        })))
      };
      return (0, IS.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: SS => {
          SS.target === kS.current && "Escape" !== SS.key && SS.stopPropagation()
        },
        children: [(0, IS.jsxs)("div", {
          className: XS()("AddFriendBodyOverlay", `AddFriendBodyOverlay${jS}`),
          children: ["Loading" === jS && (0, IS.jsx)(qS.c, {}), "Success" === jS && (0, IS.jsx)(uS.d, {
            name: "check"
          }), "Error" === jS && CS]
        }), (0, IS.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, IS.jsx)(xS.e, {
            className: "PlayerSearchInput",
            domRef: kS,
            maxLength: 32,
            placeholderText: bS,
            ariaLabel: bS,
            stopPropagation: !1,
            onValueChange: SS => {
              KS(SS)
            },
            onEnter: PS
          }), (0, IS.jsxs)(NS.g, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== jS || "" === aS.trim(),
            onClick: PS,
            children: [(0, IS.jsx)(uS.d, {
              name: gS
            }), " ", HS]
          })]
        })]
      })
    }
  },
  36737: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => fS
    });
    var tS = gS(64),
      bS = gS(1121),
      XS = gS.n(bS),
      xS = gS(1281),
      NS = gS(1127),
      qS = gS(1181);
    const uS = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      IS = ["unlisted", "public", "whitelist", "private"];

    function fS(SS) {
      let {
        visibility: HS,
        onPick: gS
      } = SS;
      const {
        t: bS
      } = (0, xS.F)(), fS = (0, tS.useRef)([]);
      return (0, qS.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": bS("worldSocial:whoCanJoin"),
        children: IS.map(((SS, tS) => {
          const xS = SS === HS;
          return (0, qS.jsxs)("button", {
            ref: SS => {
              fS.current[tS] = SS
            },
            type: "button",
            className: XS()("WorldSocialTile", {
              WorldSocialTileSelected: xS
            }),
            "aria-pressed": xS,
            tabIndex: xS ? 0 : -1,
            onKeyDown: SS => {
              ((SS, HS) => {
                const gS = "ArrowRight" === SS.key || "ArrowDown" === SS.key ? 1 : "ArrowLeft" === SS.key || "ArrowUp" === SS.key ? -1 : 0;
                var tS;
                0 !== gS && (SS.preventDefault(), null === (tS = fS.current[(HS + gS + IS.length) % IS.length]) || void 0 === tS || tS.focus())
              })(SS, tS)
            },
            onClick: () => {
              gS(SS)
            },
            children: [(0, qS.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, qS.jsx)(NS.d, {
                name: uS[SS]
              })
            }), (0, qS.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, qS.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: bS(`worldSocial:${SS}`)
              }), (0, qS.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: bS(`worldSocial:${SS}Description`)
              })]
            })]
          }, SS)
        }))
      })
    }
  },
  36746: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS
    });
    var tS = gS(1281),
      bS = gS(2781),
      XS = gS(4489),
      xS = gS(1181);

    function NS(SS) {
      let {
        mf: HS,
        children: gS,
        ...NS
      } = SS;
      const {
        t: qS
      } = (0, tS.F)();
      return (0, xS.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          HS.onChange(!HS.on)
        },
        children: (0, xS.jsx)(bS.h, {
          ...NS,
          opensProfileCard: !1,
          children: (0, xS.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: SS => {
              SS.stopPropagation()
            },
            children: [gS, (0, xS.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, xS.jsx)(XS.c, {
                checked: HS.on,
                disabled: !1,
                ariaLabel: qS("worldSocial:letJoin", {
                  playerName: NS.playerSocialPreview.name
                }),
                onChange: SS => {
                  HS.onChange(SS.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36735: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => KS
    });
    var tS = gS(64),
      bS = gS(1281),
      XS = gS(1975),
      xS = gS(104),
      NS = gS(24),
      qS = gS(1562),
      uS = gS(2813),
      IS = gS(34130),
      fS = gS(1528),
      kS = gS(1127),
      aS = gS(1181);

    function KS(SS) {
      let {
        worldCode: HS,
        message: gS
      } = SS;
      const {
        t: KS
      } = (0, bS.F)(), {
        isTouchScreen: jS
      } = (0, NS.m)(["isTouchScreen"]), GS = xS.featureFlags.canUseInviteLinks, CS = (0, IS.j)(GS && null === gS), [nS, PS] = (0, uS.h)(), QS = (0, tS.useRef)(null);
      if (null !== gS) return (0, aS.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, aS.jsx)(kS.d, {
          name: "lock"
        }), (0, aS.jsx)("span", {
          children: gS
        })]
      });
      const DS = GS ? CS : HS,
        wS = jS && GS && (0, uS.c)();
      return (0, aS.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!GS && (0, aS.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: KS("worldSocial:worldCode")
        }), (0, aS.jsx)("input", {
          ref: QS,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== DS && void 0 !== DS ? DS : "",
          "aria-label": KS(GS ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: SS => {
            SS.currentTarget.select()
          }
        }), (0, aS.jsxs)(fS.g, {
          className: "WorldSocialCopy",
          disabled: null === DS,
          onClick: () => {
            null !== DS && (0, uS.d)(DS, {
              useShareSheet: wS,
              onOutcome: SS => {
                if ((0, qS.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== SS || GS ? SS : "code"
                  }), "copied" === SS) PS();
                else if ("failed" === SS) {
                  var HS;
                  null === (HS = QS.current) || void 0 === HS || HS.focus(), XS.d.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, aS.jsx)(kS.d, {
            name: nS ? "check" : wS ? "up-from-bracket" : "copy"
          }), " ", KS(nS ? "general:copied" : wS ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36740: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => aS,
      f: () => kS,
      h: () => fS
    });
    var tS = gS(656),
      bS = gS(1281),
      XS = gS(1736),
      xS = gS(2781),
      NS = gS(2725),
      qS = gS(1528),
      uS = gS(36746),
      IS = gS(1181);

    function fS(SS, HS) {
      var gS;
      return {
        isError: !1,
        name: SS,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== HS && void 0 !== HS ? HS : {},
        nameColour: null !== (gS = null === HS || void 0 === HS ? void 0 : HS.nameColour) && void 0 !== gS ? gS : tS.d,
        location: {
          status: "offline"
        }
      }
    }

    function kS(SS) {
      let {
        player: HS,
        isFriend: gS = !1,
        status: tS,
        showLocation: qS = void 0 === tS,
        mf: fS,
        onSendFriendRequest: kS,
        actions: aS,
        zIndex: KS
      } = SS;
      const {
        t: jS
      } = (0, bS.F)();
      let GS = tS;
      null !== fS && void 0 !== fS && fS.on && (GS = (0, IS.jsxs)(IS.Fragment, {
        children: [null !== tS && void 0 !== tS ? tS : (0, IS.jsx)(NS.d, {
          socialPreview: HS
        }), (0, IS.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", jS("worldSocial:canJoin")]
        })]
      }));
      const CS = {
        playerSocialPreview: HS,
        isFriend: gS,
        hideFriendBadge: !0,
        onFriendRemoved: gS ? SS => {
          XS.d.removeFriendFromState(SS)
        } : void 0,
        status: GS,
        showLocation: qS,
        onSendFriendRequest: kS,
        zIndex: KS
      };
      return fS ? (0, IS.jsx)(uS.c, {
        ...CS,
        mf: fS,
        children: aS
      }) : (0, IS.jsx)(xS.h, {
        ...CS,
        opensProfileCard: !1,
        children: aS || void 0
      })
    }

    function aS(SS) {
      let {
        row: HS,
        mf: gS,
        canInvite: tS,
        invited: XS,
        onInvite: xS,
        zIndex: NS
      } = SS;
      const {
        t: uS
      } = (0, bS.F)(), fS = "online" === HS.place ? qS.g : qS.j;
      return (0, IS.jsx)(kS, {
        player: HS.friend,
        isFriend: !0,
        status: "here" === HS.place ? uS("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        mf: gS,
        zIndex: NS,
        actions: tS && (0, IS.jsx)(fS, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: XS,
          onClick: xS,
          ariaLabel: `${uS("worldSocial:invite")} ${HS.friend.name}`,
          children: uS(XS ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36727: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => qS,
      f: () => xS,
      h: () => uS
    });
    var tS = gS(64),
      bS = gS(4712),
      XS = gS(1975);

    function xS(SS) {
      const HS = {
        lobbyName: SS,
        answer: null,
        response: bS.e.getSocialSettings(SS)
      };
      return HS.response.then((SS => {
        HS.answer = SS
      })), HS
    }
    const NS = new Map;

    function qS(SS) {
      NS.set(SS.lobbyName, SS)
    }

    function uS(SS) {
      const [HS] = (0, tS.useState)((() => function(SS) {
        var HS;
        const gS = null !== (HS = NS.get(SS)) && void 0 !== HS ? HS : null;
        return null !== gS && void 0 !== gS && gS.answer && "error" in gS.answer ? null : gS
      }(SS))), [gS, xS] = (0, tS.useState)((() => null !== HS && void 0 !== HS && HS.answer && "settings" in HS.answer ? HS.answer.settings : null)), [qS, uS] = (0, tS.useState)(!0), [IS, fS] = (0, tS.useState)(null !== gS), kS = (0, tS.useRef)(gS);
      kS.current = gS;
      const aS = (0, tS.useRef)(0),
        KS = (0, tS.useRef)(0),
        jS = (0, tS.useRef)(!1),
        GS = (0, tS.useRef)(!0),
        CS = (0, tS.useCallback)((async HS => {
          const gS = ++aS.current,
            tS = await (null !== HS && void 0 !== HS ? HS : bS.e.getSocialSettings(SS));
          GS.current && gS === aS.current && (fS(!0), uS(!1), "error" in tS || xS(tS.settings))
        }), [SS]),
        nS = (0, tS.useCallback)((() => {
          uS(!0), CS()
        }), [CS]),
        PS = (0, tS.useCallback)((() => {
          KS.current > 0 ? jS.current = !0 : CS()
        }), [CS]);
      (0, tS.useEffect)((() => (GS.current = !0, NS.delete(SS), uS(!0), CS(null === HS || void 0 === HS ? void 0 : HS.response), () => {
        GS.current = !1
      })), [CS, SS, HS]);
      const QS = SS => {
        aS.current++, uS(!1), kS.current = SS, xS(SS)
      };
      return {
        settings: gS,
        loading: qS,
        answered: IS,
        retry: nS,
        refresh: PS,
        change: async function(HS, gS) {
          let {
            quiet: tS = !1,
            onAnswer: xS
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const NS = kS.current;
          if (null === NS) return !1;
          QS(gS(NS)), KS.current > 0 && (jS.current = !0), KS.current++;
          const qS = await bS.e.setSocialSettings(SS, HS);
          KS.current--;
          const uS = !("error" in qS);
          if (!GS.current) return uS;
          if (null === xS || void 0 === xS || xS(qS), tS);
          else if ("error" in qS) XS.d.showMessage({
            translationKey: qS.error
          });
          else
            for (const SS of qS.notFound) XS.d.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: SS
              }
            });
          if (KS.current > 0) return uS;
          const IS = jS.current;
          return jS.current = !1, !IS && "settings" in qS ? QS(qS.settings) : (IS || QS(NS), CS()), uS
        }
      }
    }
  },
  36760: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS,
      g: () => XS
    });
    var tS = gS(160);
    const bS = new Map;

    function XS(SS, HS) {
      var gS;
      const tS = null !== (gS = bS.get(SS)) && void 0 !== gS ? gS : new Map;
      tS.set(HS, Date.now()), bS.set(SS, tS)
    }

    function xS(SS) {
      const HS = bS.get(SS);
      if (!HS) return [];
      const gS = Date.now();
      for (const [bS, XS] of HS) gS - XS >= tS.i && HS.delete(bS);
      return [...HS.keys()]
    }
  },
  36733: (SS, HS, gS) => {
    function tS(SS, HS) {
      const gS = HS.toLowerCase();
      for (const tS of SS)
        if (tS.toLowerCase() === gS) return !0;
      return !1
    }

    function bS(SS, HS, gS) {
      const bS = [],
        XS = [],
        xS = [];
      for (const NS of SS) !NS.isError && NS.name && ("inGame" === NS.location.status && NS.location.inLobbyName === HS || tS(gS, NS.name) ? XS.push({
        friend: NS,
        place: "here"
      }) : "offline" === NS.location.status ? xS.push({
        friend: NS,
        place: "offline"
      }) : bS.push({
        friend: NS,
        place: "online"
      }));
      return [...bS, ...XS, ...xS]
    }

    function XS(SS, HS, gS) {
      const bS = [],
        XS = SS.flatMap((SS => "here" === SS.place ? [SS.friend.name] : []));
      for (const xS of [...XS, ...HS]) tS(bS, xS) || tS(gS, xS) || bS.push(xS);
      return bS
    }

    function xS(SS, HS) {
      return null === SS || void 0 === SS || !SS.canManage || tS(SS.whitelist, HS) ? "none" : "whitelist" === SS.visibility ? "required" : "quiet"
    }

    function NS(SS) {
      if (null === SS) return !0;
      const {
        visibility: HS
      } = SS;
      return "public" === HS || "unlisted" === HS || "whitelist" === HS && SS.canManage
    }

    function qS(SS, HS, gS) {
      if (gS) {
        const gS = HS.filter((HS => !tS(SS.whitelist, HS)));
        return {
          ...SS,
          whitelist: [...SS.whitelist, ...gS]
        }
      }
      return {
        ...SS,
        whitelist: SS.whitelist.filter((SS => !tS(HS, SS)))
      }
    }

    function uS(SS, HS) {
      const gS = [];
      for (let tS = 0; tS < SS.length; tS += HS) gS.push(SS.slice(tS, tS + HS));
      return gS
    }
    gS.d(HS, {
      b: () => NS,
      d: () => XS,
      g: () => bS,
      k: () => tS,
      m: () => uS,
      p: () => xS,
      s: () => qS
    })
  },
  37047: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS
    });
    var tS = gS(64),
      bS = gS(2537);

    function XS() {
      const SS = (0, bS.i)("lobbyLeaderboardInfo");
      return (0, tS.useMemo)((() => function(SS) {
        if (null === SS) return null;
        const HS = Object.entries(SS),
          gS = HS.filter((SS => {
            let [, HS] = SS;
            return void 0 !== HS
          }));
        if (gS.length === HS.length) return SS;
        const tS = Object.fromEntries(gS),
          bS = Object.keys(SS).filter((SS => !Object.hasOwn(tS, SS)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${bS.join(", ")}`), tS
      }(SS)), [SS])
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);