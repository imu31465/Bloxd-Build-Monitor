export const id = 242;
export const ids = [242];
export const modules = {
  42181: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      LobbyManageView: () => Cr
    });
    var OM = iM(44),
      SM = iM(1548),
      jM = iM(37950),
      aM = iM(2653),
      PM = iM(2658),
      nM = iM(2640),
      QM = iM(37498);

    function zM() {
      const [MM, rM] = (0, OM.useState)(new Map);
      return {
        get: rM => MM.get(rM),
        hold: (0, OM.useCallback)(((MM, iM, OM) => {
          rM((rM => new Map(rM).set(MM, iM))), OM.then((() => {
            rM((rM => {
              const iM = new Map(rM);
              return iM.delete(MM), iM
            }))
          }))
        }), [])
      }
    }
    var LM = iM(1116),
      mM = iM.n(LM),
      HM = iM(1188),
      hM = iM(1398),
      JM = iM(1396),
      dM = iM(2880),
      yM = iM(5417),
      lM = iM(3839);
    var EM = iM(2084),
      UM = iM(1520);

    function GM(MM, rM, iM) {
      const OM = MM.filter((MM => MM.name !== rM)),
        SM = OM.filter((MM => "none" === MM.role)).sort(((MM, rM) => rM.at - MM.at)),
        jM = OM.filter((MM => "none" !== MM.role)).sort(((MM, rM) => iM.indexOf(MM.role) - iM.indexOf(rM.role) || rM.at - MM.at));
      return [...MM.some((MM => MM.name === rM)) && null !== rM ? [rM] : [], ...[...SM, ...jM].map((MM => MM.name))]
    }

    function CM(MM, rM) {
      const iM = MM.banned.map((MM => MM.name)),
        OM = new Set(iM);
      return {
        here: GM(MM.here, rM, MM.roles.map((MM => MM.role))),
        away: MM.away.filter((MM => !OM.has(MM.name))).map((MM => MM.name)),
        banned: iM
      }
    }

    function eM(MM, rM) {
      const iM = MM.here.find((MM => MM.name === rM));
      if (iM) return {
        section: "here",
        player: iM
      };
      const OM = MM.banned.find((MM => MM.name === rM));
      if (OM) return {
        section: "banned",
        bannedAt: OM.at
      };
      const SM = MM.away.find((MM => MM.name === rM));
      return SM ? {
        section: "away",
        player: SM
      } : {
        section: "gone"
      }
    }
    const bM = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var wM = iM(2875),
      tM = iM(3025),
      gM = iM(37667),
      uM = iM(3530),
      RM = iM(332);

    function pM(MM, rM, iM) {
      return rM.map((rM => {
        if ("string" === typeof rM) return rM;
        const OM = "str" in rM ? rM.str : rM;
        return "string" === typeof OM ? OM : "entityName" in OM ? OM.entityName : "translationKey" in OM ? MM(OM.translationKey, (0, HM.o)(OM.params, iM)) : ""
      })).join("")
    }

    function WM(MM, rM, iM, OM, SM) {
      return SM - OM < 6e4 ? MM(`${iM}JustNow`) : MM(iM, {
        time: (0, RM.db)((0, HM.n)(rM, iM), OM, SM)
      })
    }
    var sM = iM(2006),
      DM = iM(1763),
      kM = iM(1303);

    function ZM(MM) {
      let {
        status: rM
      } = MM;
      return (0, kM.jsx)("span", {
        className: mM()("LobbyManageStatus", {
          LobbyManageStatusRefused: !rM.ok
        }),
        children: (0, kM.jsx)(sM.b, {
          text: rM.text
        })
      })
    }

    function oM(MM) {
      let {
        names: rM,
        cap: iM,
        filterFrom: SM,
        moreLabel: jM,
        reveal: aM = null,
        renderRow: PM
      } = MM;
      const {
        t: nM
      } = (0, HM.A)(), [QM, zM] = (0, OM.useState)(!1), [LM, mM] = (0, OM.useState)(""), JM = QM || null !== aM && rM.indexOf(aM) >= iM, yM = (JM || rM.length <= iM) && null !== SM && rM.length > SM, lM = LM.trim().toLowerCase();
      let EM = JM ? rM : rM.slice(0, iM);
      return yM && "" !== lM && (EM = EM.filter((MM => MM.toLowerCase().includes(lM)))), (0, kM.jsxs)(kM.Fragment, {
        children: [yM && (0, kM.jsx)(DM.b, {
          className: "LobbyManageFilter",
          placeholderText: nM("lobbyManage:findName"),
          ariaLabel: nM("lobbyManage:findName"),
          onValueChange: MM => {
            mM(MM)
          }
        }), EM.length > 0 && (0, kM.jsx)("div", {
          className: "PlayerRows",
          children: EM.map(((MM, rM) => PM(MM, EM.length - rM)))
        }), !JM && rM.length > iM && (0, kM.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, kM.jsx)(dM.d, {
            label: (0, kM.jsxs)(kM.Fragment, {
              children: [jM, " ", (0, kM.jsx)(hM.b, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              zM(!0)
            }
          })
        })]
      })
    }

    function fM(MM) {
      let {
        value: rM,
        placeholder: iM,
        ariaLabel: SM,
        maxLength: jM,
        wide: aM = !1,
        onSave: PM
      } = MM;
      const nM = (0, OM.useRef)(null),
        [QM, zM] = (0, OM.useState)(0),
        LM = (0, OM.useRef)(!0),
        HM = (0, OM.useRef)(null),
        hM = (0, OM.useRef)({
          value: rM,
          onSave: PM
        });
      hM.current = {
        value: rM,
        onSave: PM
      };
      const JM = () => {
        const MM = HM.current;
        HM.current = null, null !== MM && MM !== hM.current.value && hM.current.onSave(MM).then((() => {
          LM.current && zM((MM => MM + 1))
        }))
      };
      return (0, OM.useEffect)((() => {
        null === HM.current && nM.current && (nM.current.value = rM)
      }), [rM, QM]), (0, OM.useEffect)((() => () => {
        LM.current = !1, JM()
      }), []), (0, kM.jsx)("div", {
        className: mM()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: aM
        }),
        onBlur: JM,
        children: (0, kM.jsx)(DM.b, {
          domRef: nM,
          defaultValue: rM,
          placeholderText: iM,
          ariaLabel: SM,
          maxLength: jM,
          onValueChange: MM => {
            HM.current = MM
          },
          onEnter: JM
        })
      })
    }
    const YM = ["mod", "coOwner"],
      NM = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function AM(MM) {
      var rM, iM, jM;
      let {
        name: aM,
        place: PM,
        openedIn: nM,
        isYou: QM,
        manage: LM,
        hiddenNames: mM,
        zIndex: JM
      } = MM;
      const {
        t: dM,
        selectedLanguage: yM
      } = (0, HM.A)(), [lM, EM] = (0, OM.useState)(null), {
        state: GM
      } = LM, CM = `player:${aM}`, eM = function(MM, rM) {
        if ("banned" === MM.section) return {
          ...bM,
          unban: !0
        };
        if ("gone" === MM.section) return bM;
        const {
          player: iM
        } = MM, OM = "here" === MM.section, SM = OM || "none" !== iM.role ? iM.can.roles : [], jM = OM && rM && null !== iM.gamemode && iM.can.gamemode;
        return {
          gamemode: jM,
          roles: SM,
          fixedRole: 0 !== SM.length || "none" === iM.role && !jM ? null : iM.role,
          kick: OM && iM.can.kick,
          ban: iM.can.ban,
          unban: !1
        }
      }(PM, null !== GM.gamemodes), RM = LM.statusOf(CM), sM = LM.isPending(CM), DM = zM(), oM = Date.now(), fM = MM => {
        var rM, iM;
        return null !== (rM = null === (iM = (MM => GM.roles.find((rM => rM.role === MM)))(MM)) || void 0 === iM ? void 0 : iM.label) && void 0 !== rM ? rM : MM
      }, AM = MM => {
        const rM = NM[MM];
        return void 0 === rM ? void 0 : dM(rM)
      }, xM = "here" === PM.section || "away" === PM.section ? PM.player : null, vM = "here" === PM.section ? PM.player.id : null, {
        playerSocialPreview: FM,
        isFriend: BM
      } = null === vM ? {
        playerSocialPreview: (0, gM.h)(aM, null),
        isFriend: !1
      } : (0, tM.g)(vM, aM), XM = function() {
        LM.send(...arguments)
      }, IM = (MM, rM) => {
        DM.hold("role", MM, LM.send({
          type: "setRole",
          name: aM,
          role: MM
        }, CM, rM))
      };
      let KM = null;
      if ("ban" === (null === lM || void 0 === lM ? void 0 : lM.kind)) KM = dM("lobbyManageEntry:banConfirm", {
        playerName: aM
      });
      else if ("role" === (null === lM || void 0 === lM ? void 0 : lM.kind)) {
        var qM;
        KM = `${dM("lobbyManage:roleConfirm",{playerName:aM,role:fM(lM.role)})} ${null!==(qM=AM(lM.role))&&void 0!==qM?qM:""}`
      } else if (RM) KM = (0, kM.jsx)(ZM, {
        status: RM
      });
      else if (QM) KM = dM("lobbyManage:you");
      else if ("here" === PM.section) "none" === PM.player.role && oM - PM.player.at < 6e5 && (KM = WM(dM, yM.code, "lobbyManage:joinedAgo", PM.player.at, oM));
      else if ("away" === PM.section) {
        if (PM.player.at > 0) {
          const MM = "kicked" === PM.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          KM = WM(dM, yM.code, MM, PM.player.at, oM)
        }
      } else "banned" === PM.section ? null !== PM.bannedAt && (KM = WM(dM, yM.code, "lobbyManage:bannedAgo", PM.bannedAt, oM)) : "banned" === nM && (KM = dM("lobbyManageEntry:unbanned"));
      return (0, kM.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": aM,
        children: (0, kM.jsxs)(wM.h, {
          playerSocialPreview: FM,
          isFriend: BM,
          status: KM,
          opensProfileCard: !QM && (0, tM.i)(!0, aM, mM),
          zIndex: JM,
          children: [null !== lM && (0, kM.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === lM.kind && (0, kM.jsxs)(UM.J, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                EM(null), XM({
                  type: "ban",
                  name: aM
                }, CM)
              },
              children: [(0, kM.jsx)(hM.b, {
                name: "gavel"
              }), (0, kM.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: dM("lobbyManageEntry:ban")
              })]
            }), "role" === lM.kind && (0, kM.jsx)(UM.e, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: lM.role
              },
              onClick: () => {
                EM(null), IM(lM.role)
              },
              children: dM("lobbyManage:makeRole", {
                role: fM(lM.role)
              })
            }), (0, kM.jsx)(UM.i, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                EM(null)
              },
              children: dM("general:cancel")
            })]
          }), null === lM && (0, kM.jsxs)(kM.Fragment, {
            children: [(0, kM.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [eM.gamemode && null !== xM && (0, kM.jsx)(uM.e, {
                options: (null !== (rM = GM.gamemodes) && void 0 !== rM ? rM : []).map((MM => ({
                  value: MM.value,
                  label: pM(dM, MM.label, mM)
                }))),
                value: null !== (iM = DM.get("gamemode")) && void 0 !== iM ? iM : xM.gamemode,
                disabled: sM,
                onChange: MM => {
                  (0, SM.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: MM.value
                  }), DM.hold("gamemode", MM.value, LM.send({
                    type: "setGamemode",
                    name: aM,
                    gamemode: MM.value
                  }, CM))
                }
              }), eM.roles.length > 0 && null !== xM && (0, kM.jsx)(uM.e, {
                options: [...GM.roles].reverse().filter((MM => eM.roles.includes(MM.role))).map((MM => ({
                  value: MM.role,
                  label: MM.label
                }))),
                value: null !== (jM = DM.get("role")) && void 0 !== jM ? jM : xM.role,
                disabled: sM,
                onChange: MM => {
                  var rM;
                  (rM = MM.value) !== (null === xM || void 0 === xM ? void 0 : xM.role) && (YM.includes(rM) ? EM({
                    kind: "role",
                    role: rM
                  }) : ((0, SM.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: rM
                  }), IM(rM, AM(rM))))
                }
              }), null !== eM.fixedRole && (0, kM.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: fM(eM.fixedRole)
              })]
            }), (0, kM.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [eM.kick && (0, kM.jsxs)(UM.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${dM("lobbyManageEntry:kick")} ${aM}`,
                disabled: sM,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  XM({
                    type: "kick",
                    name: aM
                  }, CM)
                },
                children: [(0, kM.jsx)(hM.b, {
                  name: "person-falling-burst"
                }), (0, kM.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: dM("lobbyManageEntry:kick")
                })]
              }), eM.ban && (0, kM.jsxs)(UM.N, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${dM("lobbyManageEntry:ban")} ${aM}`,
                disabled: sM,
                padDestructive: !0,
                onClick: () => {
                  EM({
                    kind: "ban"
                  })
                },
                children: [(0, kM.jsx)(hM.b, {
                  name: "gavel"
                }), (0, kM.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: dM("lobbyManageEntry:ban")
                })]
              }), eM.unban && (0, kM.jsxs)(UM.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${dM("lobbyManageEntry:unban")} ${aM}`,
                disabled: sM,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  XM({
                    type: "unban",
                    name: aM
                  }, CM)
                },
                children: [(0, kM.jsx)(hM.b, {
                  name: "user-unlock"
                }), (0, kM.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: dM("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function xM(MM) {
      var rM, iM, SM, jM;
      let {
        manage: aM,
        focusRequest: PM,
        onFocused: nM
      } = MM;
      const {
        t: QM
      } = (0, HM.A)(), zM = (0, EM.j)("players"), LM = (0, EM.j)("hiddenPlayerNames"), mM = (0, OM.useRef)(null), {
        state: JM
      } = aM, yM = null === zM.localId ? null : null !== (rM = null === (iM = zM.byId[zM.localId]) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : null, [lM] = (0, OM.useState)((() => CM(JM, yM))), GM = function(MM, rM, iM) {
        const OM = new Set([...MM.here, ...MM.away, ...MM.banned]),
          SM = CM(rM, iM),
          jM = rM => {
            const iM = SM[rM].filter((MM => !OM.has(MM)));
            for (const MM of iM) OM.add(MM);
            return [...MM[rM], ...iM]
          };
        return {
          here: jM("here"),
          away: jM("away"),
          banned: jM("banned")
        }
      }(lM, JM, yM), [bM, wM] = (0, OM.useState)(!1), tM = function(MM, rM) {
        return MM.here.filter((MM => MM.name !== rM && "none" === MM.role && MM.can.kick)).length
      }(JM, yM), gM = aM.statusOf("kickAll");
      (0, OM.useEffect)((() => {
        var MM, rM;
        if (null === PM) return;
        const iM = null === (MM = mM.current) || void 0 === MM ? void 0 : MM.querySelector(`[data-lobby-manage-row="${CSS.escape(PM.name)}"]`);
        null === iM || void 0 === iM || iM.scrollIntoView({
          block: "center"
        }), null === iM || void 0 === iM || null === (rM = iM.querySelector(".ProfilePreview")) || void 0 === rM || rM.focus({
          preventScroll: !0
        }), nM(PM.seq)
      }), [null === PM || void 0 === PM ? void 0 : PM.seq]);
      const uM = MM => (rM, iM) => (0, kM.jsx)(AM, {
        name: rM,
        place: eM(JM, rM),
        openedIn: MM,
        isYou: rM === yM,
        manage: aM,
        hiddenNames: LM,
        zIndex: iM
      }, rM);
      return (0, kM.jsxs)("div", {
        ref: mM,
        className: "LobbyManagePage",
        children: [GM.here.length > 0 && (0, kM.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, kM.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, kM.jsx)(dM.d, {
              label: QM("lobbyManage:here"),
              meta: JM.here.length
            }), tM >= 2 && !bM && (0, kM.jsxs)(UM.N, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: aM.isPending("kickAll"),
              onClick: () => {
                wM(!0)
              },
              children: [(0, kM.jsx)(hM.b, {
                name: "person-falling-burst"
              }), " ", QM("lobbyManage:kickAll")]
            })]
          }), bM && tM >= 2 && (0, kM.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, kM.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: QM("lobbyManage:kickAllConfirm", {
                count: tM
              })
            }), (0, kM.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, kM.jsx)(UM.J, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  wM(!1), aM.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: QM("lobbyManage:kickAll")
              }), (0, kM.jsx)(UM.i, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  wM(!1)
                },
                children: QM("general:cancel")
              })]
            })]
          }), gM && (0, kM.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, kM.jsx)(ZM, {
              status: gM
            })
          }), (0, kM.jsx)(oM, {
            names: GM.here,
            cap: GM.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: uM("here")
          })]
        }), GM.away.length > 0 && (0, kM.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, kM.jsx)(dM.d, {
            label: QM("lobbyManage:notHere"),
            meta: GM.away.length
          }), (0, kM.jsx)(oM, {
            names: GM.away,
            cap: 5,
            filterFrom: null,
            moreLabel: QM("lobbyManage:allCount", {
              count: GM.away.length
            }),
            reveal: null !== (SM = null === PM || void 0 === PM ? void 0 : PM.name) && void 0 !== SM ? SM : null,
            renderRow: uM("away")
          })]
        }), GM.banned.length > 0 && (0, kM.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, kM.jsx)(dM.d, {
            label: QM("lobbyManage:banned"),
            meta: GM.banned.length
          }), (0, kM.jsx)(oM, {
            names: GM.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: QM("lobbyManage:allCount", {
              count: GM.banned.length
            }),
            reveal: null !== (jM = null === PM || void 0 === PM ? void 0 : PM.name) && void 0 !== jM ? jM : null,
            renderRow: uM("banned")
          })]
        })]
      })
    }
    var vM = iM(5003),
      FM = iM(1722),
      BM = iM(37647),
      XM = iM(37662),
      IM = iM(37658),
      KM = iM(37654),
      qM = iM(37687),
      TM = iM(37669),
      VM = iM(37678);

    function cM(MM) {
      const rM = new Set;
      for (const iM of MM) rM.add(iM.toLowerCase());
      return rM
    }

    function Mr(MM) {
      var rM, iM;
      let {
        state: SM,
        lobbyName: jM,
        listed: aM,
        isListed: PM,
        kE: nM,
        PU: QM,
        statusOf: zM
      } = MM;
      const {
        t: LM,
        selectedLanguage: mM
      } = (0, HM.A)(), hM = (0, FM.m)(), JM = (0, EM.j)("players"), yM = null === JM.localId ? null : null !== (rM = null === (iM = JM.byId[JM.localId]) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : null, lM = (0, OM.useMemo)((() => (0, KM.g)(hM.friends, jM, SM.here.map((MM => MM.name)))), [hM.friends, jM, SM.here]), UM = new Map(lM.map((MM => [MM.friend.name.toLowerCase(), MM]))), GM = function(MM) {
        let {
          refused: rM,
          listed: iM,
          here: OM,
          friends: SM,
          excluded: jM
        } = MM;
        const aM = cM(jM),
          PM = MM => MM.filter((MM => {
            const rM = MM.toLowerCase();
            return !aM.has(rM) && (aM.add(rM), !0)
          }));
        return {
          added: [],
          refused: PM(rM),
          listed: PM(iM),
          suggested: PM([...OM, ...SM])
        }
      }({
        refused: SM.refused.map((MM => MM.name)),
        listed: aM,
        here: SM.here.map((MM => MM.name)),
        friends: lM.flatMap((MM => "here" === MM.place ? [] : [MM.friend.name])),
        excluded: [...null === yM ? [] : [yM], ...[...SM.here, ...SM.away].flatMap((MM => "none" === MM.role || (0, KM.j)(aM, MM.name) ? [] : [MM.name]))]
      }), [CM] = (0, OM.useState)(GM), [eM, bM] = (0, OM.useState)([]), wM = function(MM, rM, iM) {
        const OM = cM(iM),
          SM = cM([...iM, ...MM.refused, ...MM.listed, ...MM.suggested]),
          jM = iM => [...MM[iM].filter((MM => !OM.has(MM.toLowerCase()))), ...rM[iM].filter((MM => {
            const rM = MM.toLowerCase();
            return !SM.has(rM) && (SM.add(rM), !0)
          }))];
        return {
          added: [...iM],
          refused: jM("refused"),
          listed: jM("listed"),
          suggested: jM("suggested")
        }
      }(CM, GM, eM), uM = (MM, rM) => {
        var iM, OM;
        const jM = MM.toLowerCase(),
          aM = UM.get(jM),
          QM = SM.here.find((MM => MM.name.toLowerCase() === jM)),
          HM = SM.refused.find((MM => MM.name.toLowerCase() === jM)),
          hM = null !== (iM = null === zM || void 0 === zM ? void 0 : zM(MM)) && void 0 !== iM ? iM : null;
        let JM = null;
        hM ? JM = (0, kM.jsx)(ZM, {
          status: hM
        }) : HM ? JM = WM(LM, mM.code, "lobbyManage:triedToJoinAgo", HM.at, Date.now()) : aM && QM ? JM = LM("lobbyManage:friendHere") : aM ? JM = "online" === aM.place ? LM("lobbyManage:friendOnline") : LM("lobbyManage:friend") : QM && (JM = LM("lobbyManage:hereStatus"));
        let dM = null !== (OM = null === aM || void 0 === aM ? void 0 : aM.friend) && void 0 !== OM ? OM : (0, gM.h)(MM, null);
        return !aM && null !== QM && void 0 !== QM && QM.id && (dM = (0, tM.g)(QM.id, QM.name).playerSocialPreview), (0, kM.jsx)(TM.e, {
          playerSocialPreview: dM,
          isFriend: void 0 !== aM,
          hideFriendBadge: !0,
          status: JM,
          zIndex: rM,
          bL: {
            on: PM(MM),
            onChange: rM => {
              nM(MM, rM)
            }
          }
        }, jM)
      }, RM = [...wM.added, ...wM.refused];
      return (0, kM.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, kM.jsx)(dM.d, {
          label: LM("worldSocial:whitelist"),
          meta: aM.length
        }), (0, kM.jsx)(VM.e, {
          label: LM("lobbyManage:add"),
          icon: "user-check",
          placeholder: LM("socialBar:enterPlayerName"),
          onSubmit: async MM => {
            const rM = await QM(MM);
            return rM.ok && bM((rM => [MM, ...rM])), rM
          }
        }), RM.length > 0 && (0, kM.jsx)("div", {
          className: "PlayerRows",
          children: RM.map(((MM, rM) => uM(MM, RM.length - rM)))
        }), (0, kM.jsx)(oM, {
          names: wM.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: LM("lobbyManage:allOnWhitelist", {
            count: wM.listed.length
          }),
          renderRow: uM
        }), (0, kM.jsx)(oM, {
          names: wM.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: LM("lobbyManage:allCount", {
            count: wM.suggested.length
          }),
          renderRow: uM
        })]
      })
    }

    function rr(MM) {
      let {
        manage: rM,
        listing: iM
      } = MM;
      const {
        t: OM
      } = (0, HM.A)(), jM = (MM, iM) => ((0, SM.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: MM
      }), rM.send({
        type: "setListing",
        field: MM,
        value: iM
      }, `listing:${MM}`)), aM = MM => {
        const iM = rM.statusOf(`listing:${MM}`);
        return iM && !iM.ok && (0, kM.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, kM.jsx)(ZM, {
            status: iM
          })
        })
      };
      return (0, kM.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, kM.jsx)(dM.d, {
          label: OM("lobbyManage:inWorldsList")
        }), (0, kM.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, kM.jsx)("div", {
            className: "SliderText",
            children: OM("lobbyManage:description")
          }), (0, kM.jsx)(fM, {
            value: iM.description,
            ariaLabel: OM("lobbyManage:description"),
            wide: !0,
            onSave: MM => jM("description", MM)
          })]
        }), aM("description"), (0, kM.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, kM.jsx)("div", {
            className: "SliderText",
            children: OM("lobbyManage:emojis")
          }), (0, kM.jsx)(fM, {
            value: iM.emojis,
            ariaLabel: OM("lobbyManage:emojis"),
            onSave: MM => jM("emojis", MM)
          })]
        }), aM("emojis"), (0, kM.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, kM.jsx)("div", {
            className: "SliderText",
            children: OM("lobbyManage:colour")
          }), (0, kM.jsx)(ir, {
            value: iM.colour,
            ariaLabel: OM("lobbyManage:colour"),
            onSave: MM => {
              jM("colour", MM)
            }
          })]
        }), aM("colour")]
      })
    }

    function ir(MM) {
      let {
        value: rM,
        ariaLabel: iM,
        onSave: SM
      } = MM;
      const jM = (0, OM.useRef)(null),
        aM = (0, OM.useRef)({
          value: rM,
          onSave: SM
        });
      aM.current = {
        value: rM,
        onSave: SM
      };
      const PM = (0, OM.useRef)(null),
        nM = (0, OM.useRef)(!1),
        QM = MM => {
          nM.current && MM.value !== aM.current.value && MM.value !== PM.current && (PM.current = MM.value, aM.current.onSave(MM.value))
        };
      return (0, OM.useEffect)((() => {
        jM.current && document.activeElement !== jM.current && (jM.current.value = rM)
      }), [rM]), (0, OM.useEffect)((() => {
        const MM = jM.current,
          rM = () => {
            QM(MM)
          };
        return MM.addEventListener("change", rM), () => {
          MM.removeEventListener("change", rM), QM(MM)
        }
      }), []), (0, kM.jsx)("input", {
        ref: jM,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: rM,
        "aria-label": iM,
        onInput: () => {
          nM.current = !0
        },
        onBlur: MM => {
          QM(MM.currentTarget)
        }
      })
    }

    function Or(MM) {
      let {
        manage: rM
      } = MM;
      const {
        lobbyName: iM,
        shownLobbyName: OM
      } = (0, EM.j)("connectedGame");
      return rM.state.you.canSetVisibility && null !== iM ? (0, kM.jsx)(jr, {
        manage: rM,
        lobbyName: iM,
        worldCode: null !== OM && void 0 !== OM ? OM : iM
      }, iM) : (0, kM.jsx)(ar, {
        manage: rM,
        lobbyName: null !== iM && void 0 !== iM ? iM : ""
      })
    }

    function Sr(MM) {
      return MM.map((MM => MM.toLowerCase())).sort().join(",")
    }

    function jr(MM) {
      var rM;
      let {
        manage: iM,
        lobbyName: jM,
        worldCode: aM
      } = MM;
      const {
        t: PM
      } = (0, HM.A)(), {
        settings: nM,
        loading: QM,
        change: zM,
        retry: LM,
        refresh: mM
      } = (0, BM.j)(jM), hM = (0, FM.m)(), {
        state: yM
      } = iM, lM = (0, OM.useRef)(nM);
      lM.current = nM;
      const EM = Sr(null !== (rM = yM.whitelist) && void 0 !== rM ? rM : []),
        GM = null !== yM.whitelist;
      (0, OM.useEffect)((() => {
        const MM = lM.current;
        null !== MM && (MM.visibility !== yM.visibility || GM && Sr(MM.whitelist) !== EM) && mM()
      }), [yM.visibility, EM, GM, mM]);
      const CM = async (MM, rM) => {
        let iM = null;
        return await zM(MM, rM, {
          quiet: !0,
          onAnswer: MM => {
            iM = MM
          }
        }), iM
      }, eM = (MM, rM) => {
        null !== rM && "error" in rM && iM.showStatus(MM, {
          ok: !1,
          text: [PM(rM.error)]
        })
      }, bM = async MM => {
        if (null === nM || MM === nM.visibility) return;
        (0, SM.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: MM
        });
        const rM = "whitelist" === MM ? (0, KM.d)((0, KM.g)(hM.friends, jM, yM.here.map((MM => MM.name))), (0, qM.c)(jM), nM.whitelist) : [],
          iM = await CM({
            setVisibility: MM
          }, (rM => ({
            ...rM,
            visibility: MM
          })));
        eM("mode", iM), null === iM || "error" in iM || await (async MM => {
          for (const rM of (0, KM.l)(MM, vM.z))
            if (!await zM({
                whitelistAdd: rM
              }, (MM => (0, KM.r)(MM, rM, !0)))) return !1;
          return !0
        })(rM)
      }, wM = (0, OM.useMemo)((() => {
        var MM;
        if (null === nM) return [];
        const rM = null !== (MM = yM.whitelist) && void 0 !== MM ? MM : [];
        return [...rM.filter((MM => (0, KM.j)(nM.whitelist, MM))), ...nM.whitelist.filter((MM => !(0, KM.j)(rM, MM)))]
      }), [nM, yM.whitelist]), tM = iM.statusOf("mode");
      return (0, kM.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, kM.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, kM.jsx)(dM.d, {
            label: PM("worldSocial:whoCanJoin")
          }), null === nM && QM && (0, kM.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, kM.jsx)(JM.d, {})
          }), null === nM && !QM && (0, kM.jsx)(UM.i, {
            className: "SmallTextLight",
            onClick: LM,
            children: PM("worldSocial:loadFailed")
          }), null !== nM && (0, kM.jsx)(XM.e, {
            visibility: nM.visibility,
            onPick: MM => {
              bM(MM)
            }
          }), tM && (0, kM.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, kM.jsx)(ZM, {
              status: tM
            })
          }), null !== nM && "private" !== nM.visibility && (0, kM.jsx)(IM.e, {
            worldCode: aM,
            message: null
          })]
        }), "whitelist" === (null === nM || void 0 === nM ? void 0 : nM.visibility) && (0, kM.jsx)(Mr, {
          state: yM,
          lobbyName: jM,
          listed: wM,
          isListed: MM => (0, KM.j)(nM.whitelist, MM),
          kE: (MM, rM) => {
            (0, SM.reportAnalyticsClick)(rM ? {
              id: "lobby_manage.whitelist_add",
              value: "bL"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), CM(rM ? {
              whitelistAdd: [MM]
            } : {
              whitelistRemove: MM
            }, (iM => (0, KM.r)(iM, [MM], rM))).then((rM => {
              eM(`whitelist:${MM.toLowerCase()}`, rM)
            }))
          },
          PU: async MM => {
            (0, SM.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const rM = await CM({
              whitelistAdd: [MM]
            }, (rM => (0, KM.r)(rM, [MM], !0)));
            return null === rM ? {
              ok: !1,
              error: PM("worldSocial:changeFailed")
            } : "error" in rM ? {
              ok: !1,
              error: PM(rM.error)
            } : (0, KM.j)(rM.notFound, MM) ? {
              ok: !1,
              error: PM("lobbyManage:noPlayerCalled", {
                playerName: MM
              })
            } : {
              ok: !0
            }
          },
          statusOf: MM => iM.statusOf(`whitelist:${MM.toLowerCase()}`)
        }), "public" === (null === nM || void 0 === nM ? void 0 : nM.visibility) && null !== yM.listing && (0, kM.jsx)(rr, {
          manage: iM,
          listing: yM.listing
        })]
      })
    }

    function ar(MM) {
      var rM;
      let {
        manage: iM,
        lobbyName: OM
      } = MM;
      const {
        t: jM
      } = (0, HM.A)(), {
        state: aM
      } = iM, PM = zM(), nM = null !== (rM = aM.whitelist) && void 0 !== rM ? rM : [];
      return (0, kM.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, kM.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, kM.jsx)(dM.d, {
            label: jM("worldSocial:whoCanJoin")
          }), (0, kM.jsx)("div", {
            className: "LobbyManageModeText",
            children: jM(`worldSocial:${aM.visibility}`)
          })]
        }), "whitelist" === aM.visibility && aM.you.canEditWhitelist && (0, kM.jsx)(Mr, {
          state: aM,
          lobbyName: OM,
          listed: nM,
          isListed: MM => {
            var rM;
            return null !== (rM = PM.get(MM.toLowerCase())) && void 0 !== rM ? rM : (0, KM.j)(nM, MM)
          },
          kE: (MM, rM) => {
            (0, SM.reportAnalyticsClick)(rM ? {
              id: "lobby_manage.whitelist_add",
              value: "bL"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const OM = MM.toLowerCase();
            PM.hold(OM, rM, iM.send(rM ? {
              type: "whitelistAdd",
              names: [MM]
            } : {
              type: "whitelistRemove",
              name: MM
            }, `whitelist:${OM}`))
          },
          PU: async MM => {
            (0, SM.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const rM = await iM.send({
              type: "whitelistAdd",
              names: [MM]
            }, "whitelist-field");
            return rM.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, kM.jsx)(sM.b, {
                text: rM.message
              })
            }
          },
          statusOf: MM => iM.statusOf(`whitelist:${MM.toLowerCase()}`)
        }), "public" === aM.visibility && null !== aM.listing && (0, kM.jsx)(rr, {
          manage: iM,
          listing: aM.listing
        })]
      })
    }
    var Pr = iM(5401),
      nr = iM(1440);
    const Qr = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const zr = (0, OM.memo)((function(MM) {
      var rM;
      let {
        rule: iM,
        value: OM,
        status: SM,
        pending: jM,
        hiddenNames: aM,
        uC: PM,
        onAction: nM
      } = MM;
      const {
        t: QM
      } = (0, HM.A)(), zM = MM => PM(iM, MM), LM = (MM, rM) => {
        nM(iM, MM, rM)
      }, mM = pM(QM, iM.label, aM), hM = iM.info ? pM(QM, iM.info, aM) : void 0, JM = iM.placeholder ? pM(QM, iM.placeholder, aM) : void 0, dM = (null !== (rM = iM.options) && void 0 !== rM ? rM : []).map((MM => ({
        value: MM.value,
        label: pM(QM, MM.label, aM)
      }))), yM = Math.max(0, ...dM.map((MM => function(MM) {
        let rM = 0;
        for (const iM of MM) rM += Qr.test(iM) ? 2 : 1;
        return rM
      }(MM.label)))), lM = SM && (0, kM.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, kM.jsx)(ZM, {
          status: SM
        })
      }), EM = (0, kM.jsxs)("div", {
        className: "SliderText",
        children: [mM, void 0 !== hM && (0, kM.jsx)(nr.e, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: hM
        })]
      });
      return "toggle" === iM.kind ? (0, kM.jsxs)(kM.Fragment, {
        children: [(0, kM.jsx)(Pr.c, {
          label: mM,
          checked: !0 === OM,
          circleInfoText: hM,
          disabled: jM,
          onClick: zM
        }), lM]
      }) : "choice" === iM.kind && dM.length <= 3 ? (0, kM.jsxs)(kM.Fragment, {
        children: [(0, kM.jsx)(Pr.f, {
          label: mM,
          options: dM,
          value: String(OM),
          circleInfoText: hM,
          onChange: zM
        }), lM]
      }) : (0, kM.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [EM, "choice" === iM.kind && (0, kM.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": yM
          },
          children: (0, kM.jsx)(uM.e, {
            options: dM,
            value: String(OM),
            disabled: jM,
            onChange: MM => {
              zM(MM.value)
            }
          })
        }), ("number" === iM.kind || "text" === iM.kind) && (0, kM.jsx)(fM, {
          value: null === OM ? "" : String(OM),
          placeholder: JM,
          ariaLabel: mM,
          onSave: MM => {
            const rM = MM.trim(),
              OM = Number(rM);
            return zM("number" === iM.kind && "" !== rM && Number.isFinite(OM) ? OM : rM)
          }
        }), "action" === iM.kind && (0, kM.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [dM.length > 3 && (0, kM.jsx)(uM.e, {
            options: dM,
            value: {
              value: "",
              label: null !== JM && void 0 !== JM ? JM : mM
            },
            disabled: jM,
            onChange: MM => {
              LM(MM.value)
            }
          }), dM.length > 0 && dM.length <= 3 && dM.map((MM => (0, kM.jsx)(UM.i, {
            className: "SmallTextLight",
            disabled: jM,
            onClick: () => {
              LM(MM.value)
            },
            children: MM.label
          }, MM.value))), 0 === dM.length && (0, kM.jsx)(UM.i, {
            className: "SmallTextLight",
            disabled: jM,
            onClick: () => {
              LM()
            },
            children: null !== JM && void 0 !== JM ? JM : mM
          })]
        }), "names" === iM.kind && (0, kM.jsx)(Lr, {
          names: Array.isArray(OM) ? OM : [],
          pending: jM,
          onAction: LM
        }), lM]
      })
    }));

    function Lr(MM) {
      let {
        names: rM,
        pending: iM,
        onAction: SM
      } = MM;
      const {
        t: jM
      } = (0, HM.A)(), aM = (0, OM.useRef)(null), [PM, nM] = (0, OM.useState)(""), QM = () => {
        const MM = PM.trim();
        "" !== MM && (SM(MM, "add"), aM.current && (aM.current.value = ""), nM(""))
      };
      return (0, kM.jsxs)("div", {
        className: "LobbyManageNames",
        children: [rM.map((MM => (0, kM.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, kM.jsx)("span", {
            className: "LobbyManageNameText",
            children: MM
          }), (0, kM.jsx)(UM.i, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: jM("lobbyManage:removeName", {
              name: MM
            }),
            disabled: iM,
            onClick: () => {
              SM(MM, "remove")
            },
            children: (0, kM.jsx)(hM.b, {
              name: "xmark"
            })
          })]
        }, MM))), (0, kM.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, kM.jsx)(DM.b, {
            domRef: aM,
            placeholderText: jM("lobbyManage:namePlaceholder"),
            ariaLabel: jM("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: MM => {
              nM(MM)
            },
            onEnter: QM
          }), (0, kM.jsx)(UM.i, {
            className: "SmallTextLight",
            disabled: iM || "" === PM.trim(),
            onClick: QM,
            children: jM("lobbyManage:addHere")
          })]
        })]
      })
    }
    const mr = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function Hr(MM, rM) {
      return mr.map((iM => {
        let {
          group: OM,
          title: SM
        } = iM;
        const jM = MM.filter((MM => MM.group === OM && void 0 === MM.parent)).map((iM => {
          const OM = !0 === rM(iM) ? MM.filter((MM => MM.parent === iM.key)) : [];
          return {
            rule: iM,
            children: OM
          }
        }));
        return {
          group: OM,
          title: SM,
          items: jM
        }
      }))
    }

    function hr(MM) {
      return MM.flatMap((MM => {
        let {
          items: rM
        } = MM;
        return rM.flatMap((MM => {
          let {
            rule: rM,
            children: iM
          } = MM;
          return [rM, ...iM]
        }))
      }))
    }

    function Jr(MM) {
      let {
        manage: rM,
        rowsShown: iM
      } = MM;
      const {
        t: jM
      } = (0, HM.A)(), aM = (0, EM.j)("hiddenPlayerNames"), {
        rules: PM
      } = rM.state, nM = zM(), QM = MM => {
        const rM = nM.get(MM.key);
        return void 0 === rM ? MM.value : rM
      }, LM = Hr(PM, QM), [mM] = (0, OM.useState)((() => hr(LM).map((MM => MM.key)))), hM = iM === 1 / 0 ? null : new Set(mM.slice(0, iM)), JM = MM => null === hM || hM.has(MM.key), {
        hold: yM
      } = nM, lM = (0, OM.useCallback)(((MM, iM) => {
        (0, SM.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: MM.key
        });
        const OM = rM.send({
          type: "setRule",
          key: MM.key,
          value: iM
        }, `rule:${MM.key}`);
        return yM(MM.key, iM, OM), OM
      }), [rM, yM]), UM = (0, OM.useCallback)(((MM, iM, OM) => {
        (0, SM.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: MM.key
        }), rM.send({
          type: "ruleAction",
          key: MM.key,
          ...void 0 === iM ? {} : {
            arg: iM
          },
          ...void 0 === OM ? {} : {
            op: OM
          }
        }, `rule:${MM.key}`, void 0 === OM ? jM("lobbyManage:setJustNow") : void 0)
      }), [rM, jM]), GM = MM => {
        const iM = `rule:${MM.key}`;
        return (0, kM.jsx)(zr, {
          rule: MM,
          value: QM(MM),
          status: rM.statusOf(iM),
          pending: rM.isPending(iM),
          hiddenNames: aM,
          uC: lM,
          onAction: UM
        }, MM.key)
      };
      return (0, kM.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: LM.map((MM => {
          let {
            group: rM,
            title: iM,
            items: SM
          } = MM;
          const aM = SM.filter((MM => {
            let {
              rule: rM
            } = MM;
            return JM(rM)
          }));
          return 0 === aM.length ? null : (0, kM.jsxs)(OM.Fragment, {
            children: [(0, kM.jsx)(dM.d, {
              label: jM(iM)
            }), aM.map((MM => {
              let {
                rule: rM,
                children: iM
              } = MM;
              return 0 === iM.length ? GM(rM) : (0, kM.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [GM(rM), iM.filter(JM).map(GM)]
              }, rM.key)
            }))]
          }, rM)
        }))
      })
    }
    const dr = {
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
      yr = 5,
      lr = (0, OM.memo)((function(MM) {
        let {
          page: rM,
          manage: iM,
          leaderboard: SM,
          focusRequest: jM,
          onFocused: aM,
          ruleRowsShown: PM
        } = MM;
        return "leaderboard" === rM ? (0, kM.jsx)(OM.Suspense, {
          fallback: (0, kM.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, kM.jsx)(JM.d, {})
          }),
          children: SM
        }) : "joining" === rM ? (0, kM.jsx)(Or, {
          manage: iM
        }) : "rules" === rM ? (0, kM.jsx)(Jr, {
          manage: iM,
          rowsShown: PM
        }) : (0, kM.jsx)(xM, {
          manage: iM,
          focusRequest: jM,
          onFocused: aM
        })
      }));

    function Er(MM) {
      let {
        page: rM
      } = MM;
      const {
        t: iM
      } = (0, HM.A)(), OM = dr[rM];
      return (0, kM.jsxs)(kM.Fragment, {
        children: [(0, kM.jsx)(hM.b, {
          name: OM.icon
        }), " ", (0, kM.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: iM(OM.title)
        })]
      })
    }

    function Ur(MM) {
      var rM;
      const {
        t: iM
      } = (0, HM.A)(), {
        pages: jM,
        landing: aM
      } = MM, nM = (0, OM.useRef)(null), QM = (0, OM.useRef)(null), zM = (0, OM.useRef)(null), LM = (0, OM.useRef)(new Map), [hM, JM] = (0, OM.useState)(null), EM = (0, OM.useRef)(hM), UM = (0, OM.useRef)(0), [GM, CM] = (0, OM.useState)(jM[0]), eM = null !== hM && void 0 !== hM ? hM : jM.includes(GM) ? GM : jM[0], [bM] = (0, OM.useState)(null !== (rM = null === aM || void 0 === aM ? void 0 : aM.page) && void 0 !== rM ? rM : null), wM = null !== bM && jM.includes(bM) ? [bM, ...jM.filter((MM => MM !== bM))] : jM, [tM] = (0, OM.useState)((() => {
        const rM = hr(Hr(MM.manage.state.rules, (MM => MM.value)));
        return Math.max(1, Math.ceil(rM.length / yr))
      })), gM = wM.flatMap((MM => "rules" === MM ? Array(tM).fill(MM) : [MM])), uM = function(MM, rM) {
        const [iM, SM] = (0, OM.useState)(MM), jM = iM >= rM;
        return jM && iM !== 1 / 0 && SM(1 / 0), (0, OM.useLayoutEffect)((() => {
          if (jM) return;
          let MM = !0;
          return (0, lM.e)().then((() => {
            MM && SM((MM => MM + 1))
          })), () => {
            MM = !1
          }
        }), [iM, jM]), jM ? 1 / 0 : iM
      }(1, gM.length), RM = gM.slice(0, uM), pM = new Set(RM), WM = uM < gM.length, sM = WM ? RM.filter((MM => "rules" === MM)).length * yr : 1 / 0, DM = (0, OM.useRef)(MM.focusRequest);
      DM.current = MM.focusRequest;
      const ZM = MM => {
          EM.current = MM, JM(MM)
        },
        oM = () => {
          var MM, rM;
          nM.current.style.scrollPaddingTop = `${null!==(MM=null===(rM=zM.current)||void 0===rM?void 0:rM.offsetHeight)&&void 0!==MM?MM:0}px`
        },
        fM = MM => {
          const rM = nM.current,
            iM = LM.current.get(MM);
          if (void 0 === iM) return;
          const OM = document.activeElement,
            SM = DM.current,
            jM = null === SM ? null : iM.querySelector(`[data-lobby-manage-row="${CSS.escape(SM.name)}"]`);
          oM(), OM instanceof HTMLElement && null !== jM && void 0 !== jM && jM.contains(OM) ? OM.scrollIntoView({
            block: "center"
          }) : null === iM.previousElementSibling ? rM.scrollTop = 0 : iM.scrollIntoView({
            block: "start"
          }), UM.current = rM.scrollTop
        },
        YM = MM => {
          (0, SM.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: MM
          }), ZM(MM), fM(MM)
        },
        NM = () => {
          var MM, rM;
          const iM = nM.current,
            OM = iM.getBoundingClientRect().top + (null !== (MM = null === (rM = zM.current) || void 0 === rM ? void 0 : rM.offsetHeight) && void 0 !== MM ? MM : 0),
            SM = jM.map((MM => {
              var rM, iM;
              return (null !== (rM = null === (iM = LM.current.get(MM)) || void 0 === iM ? void 0 : iM.getBoundingClientRect().top) && void 0 !== rM ? rM : 1 / 0) - OM
            })),
            aM = !WM && iM.scrollTop + iM.clientHeight >= iM.scrollHeight - 1;
          CM(jM[(0, PM.e)(SM, aM)])
        },
        AM = () => {
          null !== EM.current && (ZM(null), NM())
        };
      (0, OM.useLayoutEffect)((() => {
        null !== aM && jM.includes(aM.page) && YM(aM.page)
      }), [null === aM || void 0 === aM ? void 0 : aM.seq]), (0, OM.useLayoutEffect)((() => {
        null === EM.current || jM.includes(EM.current) || AM()
      }));
      const {
        onFocused: xM
      } = MM, vM = (0, OM.useCallback)((MM => {
        null !== EM.current && fM(EM.current), xM(MM)
      }), [xM]);
      (0, OM.useLayoutEffect)((() => {
        const MM = EM.current;
        null !== MM && (!WM || jM.indexOf(gM[uM - 1]) < jM.indexOf(MM)) && fM(MM)
      }), [uM]), (0, OM.useEffect)((() => {
        const MM = new ResizeObserver((() => {
          null !== EM.current ? fM(EM.current) : oM()
        }));
        return MM.observe(nM.current), MM.observe(QM.current), () => {
          MM.disconnect()
        }
      }), []), (0, OM.useLayoutEffect)((() => {
        const MM = zM.current,
          rM = null === MM || void 0 === MM ? void 0 : MM.querySelector(".SegmentedToggleOptionSelected");
        rM && (MM.scrollLeft = Math.min(rM.offsetLeft, Math.max(MM.scrollLeft, rM.offsetLeft + rM.offsetWidth - MM.clientWidth)))
      }), [eM]);
      return (0, kM.jsxs)("div", {
        ref: nM,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === EM.current ? NM() : Math.abs(nM.current.scrollTop - UM.current) > 1 && AM()
        },
        onClick: MM => {
          var rM;
          null !== (rM = zM.current) && void 0 !== rM && rM.contains(MM.target) || AM()
        },
        onFocus: MM => {
          var rM;
          const iM = null === EM.current ? null : LM.current.get(EM.current);
          !iM || iM.contains(MM.target) || null !== (rM = zM.current) && void 0 !== rM && rM.contains(MM.target) || AM()
        },
        children: [jM.length > 1 && (0, kM.jsx)("div", {
          ref: zM,
          className: "LobbyManageChips",
          children: (0, kM.jsx)(yM.e, {
            options: jM.map((MM => ({
              value: MM,
              label: (0, kM.jsx)(Er, {
                page: MM
              }),
              ariaLabel: iM(dr[MM].title)
            }))),
            value: eM,
            padTabs: "2",
            ariaLabel: iM("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: YM
          })
        }), (0, kM.jsx)("div", {
          ref: QM,
          className: mM()("LobbyManageInner", {
            Staging: WM
          }),
          children: jM.filter((MM => pM.has(MM))).map((rM => {
            const iM = rM === hM;
            return (0, kM.jsxs)("section", {
              ref: MM => {
                MM ? LM.current.set(rM, MM) : LM.current.delete(rM)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": iM || void 0,
              children: [jM.length > 1 && (0, kM.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": iM || void 0,
                "data-pad-unavailable": iM || void 0,
                children: (0, kM.jsx)(dM.d, {
                  label: (0, kM.jsx)(Er, {
                    page: rM
                  })
                })
              }), (0, kM.jsx)(lr, {
                page: rM,
                manage: MM.manage,
                leaderboard: MM.leaderboard,
                focusRequest: MM.focusRequest,
                onFocused: vM,
                ruleRowsShown: "rules" === rM ? sM : 1 / 0
              })]
            }, rM)
          }))
        })]
      })
    }

    function Gr(MM) {
      return void 0 === (null === MM || void 0 === MM ? void 0 : MM.page) ? null : {
        page: MM.page,
        seq: MM.seq
      }
    }

    function Cr(MM) {
      let {
        leaderboard: rM
      } = MM;
      const iM = function() {
          const MM = (0, nM.f)("lobbyManage"),
            [rM, iM] = (0, OM.useReducer)((MM => MM + 1), 0),
            [SM] = (0, OM.useState)((() => new QM.b(iM)));
          return (0, OM.useEffect)((() => {
            const MM = SM.nextDeadline();
            if (null === MM) return;
            const rM = setTimeout((() => {
              SM.expire(Date.now()), iM()
            }), Math.max(0, MM - Date.now()));
            return () => {
              clearTimeout(rM)
            }
          })), (0, OM.useMemo)((() => null === MM ? null : {
            state: MM,
            send: (MM, rM, OM) => {
              const jM = SM.send(MM, rM, null !== OM && void 0 !== OM ? OM : null);
              return iM(), jM
            },
            statusOf: MM => SM.statusOf(MM, Date.now()),
            showStatus: (MM, rM) => {
              SM.show(MM, rM)
            },
            isPending: MM => SM.isPending(MM)
          }), [MM, rM, SM])
        }(),
        zM = (0, PM.f)((0, jM.b)()),
        LM = (0, aM.k)(),
        [mM, HM] = (0, OM.useState)((() => Gr(LM))),
        [hM, JM] = (0, OM.useState)(null);
      return (0, OM.useEffect)((() => {
        null === LM && (0, SM.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, OM.useEffect)((() => {
        null !== LM && (HM((MM => (null === MM || void 0 === MM ? void 0 : MM.seq) === LM.seq ? MM : Gr(LM))), void 0 !== LM.focusName && "players" === LM.page ? JM({
          name: LM.focusName,
          seq: LM.seq
        }) : (0, aM.i)(LM.seq))
      }), [null === LM || void 0 === LM ? void 0 : LM.seq]), null === iM ? null : (0, kM.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, kM.jsx)(Ur, {
          pages: (0, PM.c)(iM.state, zM),
          manage: iM,
          leaderboard: rM,
          focusRequest: hM,
          onFocused: aM.i,
          landing: mM
        })
      })
    }
  },
  37498: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => zM,
      e: () => nM
    });
    var OM = iM(1548),
      SM = iM(2067),
      jM = iM(2039);
    const aM = 1e4;
    let PM = 0;

    function nM(MM) {
      const rM = ++PM;
      return new Promise((iM => {
        const PM = rM => {
            nM(), clearTimeout(QM), !1 === (null === rM || void 0 === rM ? void 0 : rM.ok) && (0, OM.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: MM.type
            }), iM(rM)
          },
          nM = SM.d.subscribe("lobbyManage", (MM => {
            const iM = function(MM, rM) {
              var iM;
              return null !== (iM = null === MM || void 0 === MM ? void 0 : MM.results.find((MM => MM.requestId === rM))) && void 0 !== iM ? iM : null
            }(MM, rM);
            null !== iM && PM(iM)
          })),
          QM = setTimeout((() => {
            PM(null)
          }), aM);
        jM.gameBridge.send("lobbyManage", {
          ...MM,
          requestId: rM
        })
      }))
    }
    const QM = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class zM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nM;
        this.onChange = MM, this.sendAction = rM, this.pending = new Map, this.statuses = new Map
      }
      send(MM, rM, iM) {
        var OM;
        return this.statuses.delete(rM), this.pending.set(rM, (null !== (OM = this.pending.get(rM)) && void 0 !== OM ? OM : 0) + 1), this.sendAction(MM).then((MM => {
          var OM;
          const SM = null !== MM && void 0 !== MM ? MM : {
              requestId: -1,
              ok: !1,
              message: QM
            },
            jM = (null !== (OM = this.pending.get(rM)) && void 0 !== OM ? OM : 1) - 1;
          jM > 0 ? this.pending.set(rM, jM) : this.pending.delete(rM);
          const aM = !SM.ok || SM.message.length > 0 ? SM.message : null === iM ? null : [iM];
          return null !== aM && this.statuses.set(rM, {
            ok: SM.ok,
            text: aM,
            until: Date.now() + 4e3
          }), this.onChange(), SM
        }))
      }
      show(MM, rM) {
        this.statuses.set(MM, {
          ...rM,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(MM) {
        for (const [rM, iM] of this.statuses) iM.until <= MM && this.statuses.delete(rM)
      }
      nextDeadline() {
        let MM = null;
        for (const iM of this.statuses.values()) {
          var rM;
          MM = Math.min(null !== (rM = MM) && void 0 !== rM ? rM : 1 / 0, iM.until)
        }
        return MM
      }
      statusOf(MM, rM) {
        const iM = this.statuses.get(MM);
        return !iM || iM.until <= rM ? null : {
          ok: iM.ok,
          text: iM.text
        }
      }
      isPending(MM) {
        return this.pending.has(MM)
      }
    }
  },
  37678: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => LM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(1763),
      PM = iM(1520),
      nM = iM(1396),
      QM = iM(1398),
      zM = iM(1303);

    function LM(MM) {
      let {
        label: rM,
        icon: iM,
        placeholder: SM,
        onSubmit: LM
      } = MM;
      const mM = (0, OM.useRef)(null),
        [HM, hM] = (0, OM.useState)(""),
        [JM, dM] = (0, OM.useState)("Enter"),
        [yM, lM] = (0, OM.useState)(null);
      (0, OM.useEffect)((() => {
        if ("Success" !== JM && "Error" !== JM) return;
        const MM = setTimeout((() => {
          "Success" === JM && mM.current && (mM.current.value = "", hM("")), dM("Enter")
        }), "Success" === JM ? 1e3 : 4e3);
        return () => {
          clearTimeout(MM)
        }
      }), [JM]);
      const EM = () => {
        const MM = HM.trim();
        "" !== MM && "Enter" === JM && (dM("Loading"), LM(MM).then((MM => {
          mM.current && ("error" in MM ? null === MM.error ? dM("Enter") : (lM(MM.error), dM("Error")) : dM("Success"))
        })))
      };
      return (0, zM.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: MM => {
          MM.target === mM.current && "Escape" !== MM.key && MM.stopPropagation()
        },
        children: [(0, zM.jsxs)("div", {
          className: jM()("AddFriendBodyOverlay", `AddFriendBodyOverlay${JM}`),
          children: ["Loading" === JM && (0, zM.jsx)(nM.d, {}), "Success" === JM && (0, zM.jsx)(QM.b, {
            name: "check"
          }), "Error" === JM && yM]
        }), (0, zM.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, zM.jsx)(aM.b, {
            className: "PlayerSearchInput",
            domRef: mM,
            maxLength: 32,
            placeholderText: SM,
            ariaLabel: SM,
            stopPropagation: !1,
            onValueChange: MM => {
              hM(MM)
            },
            onEnter: EM
          }), (0, zM.jsxs)(PM.e, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== JM || "" === HM.trim(),
            onClick: EM,
            children: [(0, zM.jsx)(QM.b, {
              name: iM
            }), " ", rM]
          })]
        })]
      })
    }
  },
  37662: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => LM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(1188),
      PM = iM(1398),
      nM = iM(1303);
    const QM = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      zM = ["unlisted", "public", "whitelist", "private"];

    function LM(MM) {
      let {
        visibility: rM,
        onPick: iM
      } = MM;
      const {
        t: SM
      } = (0, aM.A)(), LM = (0, OM.useRef)([]);
      return (0, nM.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": SM("worldSocial:whoCanJoin"),
        children: zM.map(((MM, OM) => {
          const aM = MM === rM;
          return (0, nM.jsxs)("button", {
            ref: MM => {
              LM.current[OM] = MM
            },
            type: "button",
            className: jM()("WorldSocialTile", {
              WorldSocialTileSelected: aM
            }),
            "aria-pressed": aM,
            tabIndex: aM ? 0 : -1,
            onKeyDown: MM => {
              ((MM, rM) => {
                const iM = "ArrowRight" === MM.key || "ArrowDown" === MM.key ? 1 : "ArrowLeft" === MM.key || "ArrowUp" === MM.key ? -1 : 0;
                var OM;
                0 !== iM && (MM.preventDefault(), null === (OM = LM.current[(rM + iM + zM.length) % zM.length]) || void 0 === OM || OM.focus())
              })(MM, OM)
            },
            onClick: () => {
              iM(MM)
            },
            children: [(0, nM.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, nM.jsx)(PM.b, {
                name: QM[MM]
              })
            }), (0, nM.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, nM.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: SM(`worldSocial:${MM}`)
              }), (0, nM.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: SM(`worldSocial:${MM}Description`)
              })]
            })]
          }, MM)
        }))
      })
    }
  },
  37669: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM
    });
    var OM = iM(1188),
      SM = iM(2875),
      jM = iM(4720),
      aM = iM(1303);

    function PM(MM) {
      let {
        bL: rM,
        children: iM,
        ...PM
      } = MM;
      const {
        t: nM
      } = (0, OM.A)();
      return (0, aM.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          rM.onChange(!rM.on)
        },
        children: (0, aM.jsx)(SM.h, {
          ...PM,
          opensProfileCard: !1,
          children: (0, aM.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: MM => {
              MM.stopPropagation()
            },
            children: [iM, (0, aM.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, aM.jsx)(jM.c, {
                checked: rM.on,
                disabled: !1,
                ariaLabel: nM("worldSocial:letJoin", {
                  playerName: PM.playerSocialPreview.name
                }),
                onChange: MM => {
                  rM.onChange(MM.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37658: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => hM
    });
    var OM = iM(44),
      SM = iM(1188),
      jM = iM(1963),
      aM = iM(83),
      PM = iM(19),
      nM = iM(1548),
      QM = iM(2901),
      zM = iM(34938),
      LM = iM(1520),
      mM = iM(1398),
      HM = iM(1303);

    function hM(MM) {
      let {
        worldCode: rM,
        message: iM
      } = MM;
      const {
        t: hM
      } = (0, SM.A)(), {
        isTouchScreen: JM
      } = (0, PM.m)(["isTouchScreen"]), dM = aM.featureFlags.canUseInviteLinks, yM = (0, zM.i)(dM && null === iM), [lM, EM] = (0, QM.g)(), UM = (0, OM.useRef)(null);
      if (null !== iM) return (0, HM.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, HM.jsx)(mM.b, {
          name: "lock"
        }), (0, HM.jsx)("span", {
          children: iM
        })]
      });
      const GM = dM ? yM : rM,
        CM = JM && dM && (0, QM.d)();
      return (0, HM.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!dM && (0, HM.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: hM("worldSocial:worldCode")
        }), (0, HM.jsx)("input", {
          ref: UM,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== GM && void 0 !== GM ? GM : "",
          "aria-label": hM(dM ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: MM => {
            MM.currentTarget.select()
          }
        }), (0, HM.jsxs)(LM.e, {
          className: "WorldSocialCopy",
          disabled: null === GM,
          onClick: () => {
            null !== GM && (0, QM.f)(GM, {
              useShareSheet: CM,
              onOutcome: MM => {
                if ((0, nM.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== MM || dM ? MM : "code"
                  }), "copied" === MM) EM();
                else if ("failed" === MM) {
                  var rM;
                  null === (rM = UM.current) || void 0 === rM || rM.focus(), jM.k.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, HM.jsx)(mM.b, {
            name: lM ? "check" : CM ? "up-from-bracket" : "copy"
          }), " ", hM(lM ? "general:copied" : CM ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37667: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => HM,
      g: () => mM,
      h: () => LM
    });
    var OM = iM(605),
      SM = iM(1188),
      jM = iM(1722),
      aM = iM(2875),
      PM = iM(2818),
      nM = iM(1520),
      QM = iM(37669),
      zM = iM(1303);

    function LM(MM, rM) {
      var iM;
      return {
        isError: !1,
        name: MM,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== rM && void 0 !== rM ? rM : {},
        nameColour: null !== (iM = null === rM || void 0 === rM ? void 0 : rM.nameColour) && void 0 !== iM ? iM : OM.d,
        location: {
          status: "offline"
        }
      }
    }

    function mM(MM) {
      let {
        player: rM,
        isFriend: iM = !1,
        status: OM,
        showLocation: nM = void 0 === OM,
        bL: LM,
        onSendFriendRequest: mM,
        actions: HM,
        zIndex: hM
      } = MM;
      const {
        t: JM
      } = (0, SM.A)();
      let dM = OM;
      null !== LM && void 0 !== LM && LM.on && (dM = (0, zM.jsxs)(zM.Fragment, {
        children: [null !== OM && void 0 !== OM ? OM : (0, zM.jsx)(PM.d, {
          socialPreview: rM
        }), (0, zM.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", JM("worldSocial:canJoin")]
        })]
      }));
      const yM = {
        playerSocialPreview: rM,
        isFriend: iM,
        hideFriendBadge: !0,
        onFriendRemoved: iM ? MM => {
          jM.e.removeFriendFromState(MM)
        } : void 0,
        status: dM,
        showLocation: nM,
        onSendFriendRequest: mM,
        zIndex: hM
      };
      return LM ? (0, zM.jsx)(QM.e, {
        ...yM,
        bL: LM,
        children: HM
      }) : (0, zM.jsx)(aM.h, {
        ...yM,
        opensProfileCard: !1,
        children: HM || void 0
      })
    }

    function HM(MM) {
      let {
        row: rM,
        bL: iM,
        canInvite: OM,
        invited: jM,
        onInvite: aM,
        zIndex: PM
      } = MM;
      const {
        t: QM
      } = (0, SM.A)(), LM = "online" === rM.place ? nM.e : nM.i;
      return (0, zM.jsx)(mM, {
        player: rM.friend,
        isFriend: !0,
        status: "here" === rM.place ? QM("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        bL: iM,
        zIndex: PM,
        actions: OM && (0, zM.jsx)(LM, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: jM,
          onClick: aM,
          ariaLabel: `${QM("worldSocial:invite")} ${rM.friend.name}`,
          children: QM(jM ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37647: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM,
      g: () => aM,
      j: () => QM
    });
    var OM = iM(44),
      SM = iM(4961),
      jM = iM(1963);

    function aM(MM) {
      const rM = {
        lobbyName: MM,
        answer: null,
        response: SM.b.getSocialSettings(MM)
      };
      return rM.response.then((MM => {
        rM.answer = MM
      })), rM
    }
    const PM = new Map;

    function nM(MM) {
      PM.set(MM.lobbyName, MM)
    }

    function QM(MM) {
      const [rM] = (0, OM.useState)((() => function(MM) {
        var rM;
        const iM = null !== (rM = PM.get(MM)) && void 0 !== rM ? rM : null;
        return null !== iM && void 0 !== iM && iM.answer && "error" in iM.answer ? null : iM
      }(MM))), [iM, aM] = (0, OM.useState)((() => null !== rM && void 0 !== rM && rM.answer && "settings" in rM.answer ? rM.answer.settings : null)), [nM, QM] = (0, OM.useState)(!0), [zM, LM] = (0, OM.useState)(null !== iM), mM = (0, OM.useRef)(iM);
      mM.current = iM;
      const HM = (0, OM.useRef)(0),
        hM = (0, OM.useRef)(0),
        JM = (0, OM.useRef)(!1),
        dM = (0, OM.useRef)(!0),
        yM = (0, OM.useCallback)((async rM => {
          const iM = ++HM.current,
            OM = await (null !== rM && void 0 !== rM ? rM : SM.b.getSocialSettings(MM));
          dM.current && iM === HM.current && (LM(!0), QM(!1), "error" in OM || aM(OM.settings))
        }), [MM]),
        lM = (0, OM.useCallback)((() => {
          QM(!0), yM()
        }), [yM]),
        EM = (0, OM.useCallback)((() => {
          hM.current > 0 ? JM.current = !0 : yM()
        }), [yM]);
      (0, OM.useEffect)((() => (dM.current = !0, PM.delete(MM), QM(!0), yM(null === rM || void 0 === rM ? void 0 : rM.response), () => {
        dM.current = !1
      })), [yM, MM, rM]);
      const UM = MM => {
        HM.current++, QM(!1), mM.current = MM, aM(MM)
      };
      return {
        settings: iM,
        loading: nM,
        answered: zM,
        retry: lM,
        refresh: EM,
        change: async function(rM, iM) {
          let {
            quiet: OM = !1,
            onAnswer: aM
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const PM = mM.current;
          if (null === PM) return !1;
          UM(iM(PM)), hM.current > 0 && (JM.current = !0), hM.current++;
          const nM = await SM.b.setSocialSettings(MM, rM);
          hM.current--;
          const QM = !("error" in nM);
          if (!dM.current) return QM;
          if (null === aM || void 0 === aM || aM(nM), OM);
          else if ("error" in nM) jM.k.showMessage({
            translationKey: nM.error
          });
          else
            for (const MM of nM.notFound) jM.k.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: MM
              }
            });
          if (hM.current > 0) return QM;
          const zM = JM.current;
          return JM.current = !1, !zM && "settings" in nM ? UM(nM.settings) : (zM || UM(PM), yM()), QM
        }
      }
    }
  },
  37687: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      d: () => jM
    });
    var OM = iM(143);
    const SM = new Map;

    function jM(MM, rM) {
      var iM;
      const OM = null !== (iM = SM.get(MM)) && void 0 !== iM ? iM : new Map;
      OM.set(rM, Date.now()), SM.set(MM, OM)
    }

    function aM(MM) {
      const rM = SM.get(MM);
      if (!rM) return [];
      const iM = Date.now();
      for (const [SM, jM] of rM) iM - jM >= OM.t && rM.delete(SM);
      return [...rM.keys()]
    }
  },
  37654: (MM, rM, iM) => {
    function OM(MM, rM) {
      const iM = rM.toLowerCase();
      for (const OM of MM)
        if (OM.toLowerCase() === iM) return !0;
      return !1
    }

    function SM(MM, rM, iM) {
      const SM = [],
        jM = [],
        aM = [];
      for (const PM of MM) !PM.isError && PM.name && ("inGame" === PM.location.status && PM.location.inLobbyName === rM || OM(iM, PM.name) ? jM.push({
        friend: PM,
        place: "here"
      }) : "offline" === PM.location.status ? aM.push({
        friend: PM,
        place: "offline"
      }) : SM.push({
        friend: PM,
        place: "online"
      }));
      return [...SM, ...jM, ...aM]
    }

    function jM(MM, rM, iM) {
      const SM = [],
        jM = MM.flatMap((MM => "here" === MM.place ? [MM.friend.name] : []));
      for (const aM of [...jM, ...rM]) OM(SM, aM) || OM(iM, aM) || SM.push(aM);
      return SM
    }

    function aM(MM, rM) {
      return null === MM || void 0 === MM || !MM.canManage || OM(MM.whitelist, rM) ? "none" : "whitelist" === MM.visibility ? "required" : "quiet"
    }

    function PM(MM) {
      if (null === MM) return !0;
      const {
        visibility: rM
      } = MM;
      return "public" === rM || "unlisted" === rM || "whitelist" === rM && MM.canManage
    }

    function nM(MM, rM, iM) {
      if (iM) {
        const iM = rM.filter((rM => !OM(MM.whitelist, rM)));
        return {
          ...MM,
          whitelist: [...MM.whitelist, ...iM]
        }
      }
      return {
        ...MM,
        whitelist: MM.whitelist.filter((MM => !OM(rM, MM)))
      }
    }

    function QM(MM, rM) {
      const iM = [];
      for (let OM = 0; OM < MM.length; OM += rM) iM.push(MM.slice(OM, OM + rM));
      return iM
    }
    iM.d(rM, {
      c: () => PM,
      d: () => jM,
      g: () => SM,
      j: () => OM,
      l: () => QM,
      o: () => aM,
      r: () => nM
    })
  },
  37950: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM
    });
    var OM = iM(44),
      SM = iM(2640);

    function jM() {
      const MM = (0, SM.f)("lobbyLeaderboardInfo");
      return (0, OM.useMemo)((() => function(MM) {
        if (null === MM) return null;
        const rM = Object.entries(MM),
          iM = rM.filter((MM => {
            let [, rM] = MM;
            return void 0 !== rM
          }));
        if (iM.length === rM.length) return MM;
        const OM = Object.fromEntries(iM),
          SM = Object.keys(MM).filter((MM => !Object.hasOwn(OM, MM)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${SM.join(", ")}`), OM
      }(MM)), [MM])
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);