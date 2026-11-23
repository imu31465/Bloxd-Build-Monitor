export const id = 220;
export const ids = [220];
export const modules = {
  40915: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      LobbyManageView: () => Jz
    });
    var QC = ZC(48),
      wC = ZC(1418),
      bC = ZC(36882),
      nC = ZC(2394),
      fC = ZC(2402),
      oC = ZC(2369),
      qC = ZC(36447);

    function FC() {
      const [CC, zC] = (0, QC.useState)(new Map);
      return {
        get: zC => CC.get(zC),
        hold: (0, QC.useCallback)(((CC, ZC, QC) => {
          zC((zC => new Map(zC).set(CC, ZC))), QC.then((() => {
            zC((zC => {
              const ZC = new Map(zC);
              return ZC.delete(CC), ZC
            }))
          }))
        }), [])
      }
    }
    var WC = ZC(1002),
      NC = ZC.n(WC),
      MC = ZC(1143),
      gC = ZC(1013),
      SC = ZC(1295),
      pC = ZC(2637),
      PC = ZC(4971),
      GC = ZC(3419);
    var RC = ZC(1877),
      AC = ZC(1388);

    function xC(CC, zC, ZC) {
      const QC = CC.filter((CC => CC.name !== zC)),
        wC = QC.filter((CC => "none" === CC.role)).sort(((CC, zC) => zC.at - CC.at)),
        bC = QC.filter((CC => "none" !== CC.role)).sort(((CC, zC) => ZC.indexOf(CC.role) - ZC.indexOf(zC.role) || zC.at - CC.at));
      return [...CC.some((CC => CC.name === zC)) && null !== zC ? [zC] : [], ...[...wC, ...bC].map((CC => CC.name))]
    }

    function JC(CC, zC) {
      const ZC = CC.banned.map((CC => CC.name)),
        QC = new Set(ZC);
      return {
        here: xC(CC.here, zC, CC.roles.map((CC => CC.role))),
        away: CC.away.filter((CC => !QC.has(CC.name))).map((CC => CC.name)),
        banned: ZC
      }
    }

    function IC(CC, zC) {
      const ZC = CC.here.find((CC => CC.name === zC));
      if (ZC) return {
        section: "here",
        player: ZC
      };
      const QC = CC.banned.find((CC => CC.name === zC));
      if (QC) return {
        section: "banned",
        bannedAt: QC.at
      };
      const wC = CC.away.find((CC => CC.name === zC));
      return wC ? {
        section: "away",
        player: wC
      } : {
        section: "gone"
      }
    }
    const iC = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var vC = ZC(2633),
      eC = ZC(36436),
      hC = ZC(36605),
      KC = ZC(3113),
      YC = ZC(326);

    function dC(CC, zC, ZC) {
      return zC.map((zC => {
        if ("string" === typeof zC) return zC;
        const QC = "str" in zC ? zC.str : zC;
        return "string" === typeof QC ? QC : "entityName" in QC ? QC.entityName : "translationKey" in QC ? CC(QC.translationKey, (0, MC.q)(QC.params, ZC)) : ""
      })).join("")
    }

    function mC(CC, zC, ZC, QC, wC) {
      return wC - QC < 6e4 ? CC(`${ZC}JustNow`) : CC(ZC, {
        time: (0, YC.U)((0, MC.m)(zC, ZC), QC, wC)
      })
    }
    var HC = ZC(1811),
      EC = ZC(1593),
      lC = ZC(1056);

    function XC(CC) {
      let {
        status: zC
      } = CC;
      return (0, lC.jsx)("span", {
        className: NC()("LobbyManageStatus", {
          LobbyManageStatusRefused: !zC.ok
        }),
        children: (0, lC.jsx)(HC.e, {
          text: zC.text
        })
      })
    }

    function cC(CC) {
      let {
        names: zC,
        cap: ZC,
        filterFrom: wC,
        moreLabel: bC,
        reveal: nC = null,
        renderRow: fC
      } = CC;
      const {
        t: oC
      } = (0, MC.y)(), [qC, FC] = (0, QC.useState)(!1), [WC, NC] = (0, QC.useState)(""), SC = qC || null !== nC && zC.indexOf(nC) >= ZC, PC = (SC || zC.length <= ZC) && null !== wC && zC.length > wC, GC = WC.trim().toLowerCase();
      let RC = SC ? zC : zC.slice(0, ZC);
      return PC && "" !== GC && (RC = RC.filter((CC => CC.toLowerCase().includes(GC)))), (0, lC.jsxs)(lC.Fragment, {
        children: [PC && (0, lC.jsx)(EC.c, {
          className: "LobbyManageFilter",
          placeholderText: oC("lobbyManage:findName"),
          ariaLabel: oC("lobbyManage:findName"),
          onValueChange: CC => {
            NC(CC)
          }
        }), RC.length > 0 && (0, lC.jsx)("div", {
          className: "PlayerRows",
          children: RC.map(((CC, zC) => fC(CC, RC.length - zC)))
        }), !SC && zC.length > ZC && (0, lC.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, lC.jsx)(pC.b, {
            label: (0, lC.jsxs)(lC.Fragment, {
              children: [bC, " ", (0, lC.jsx)(gC.c, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              FC(!0)
            }
          })
        })]
      })
    }

    function uC(CC) {
      let {
        value: zC,
        placeholder: ZC,
        ariaLabel: wC,
        maxLength: bC,
        wide: nC = !1,
        onSave: fC
      } = CC;
      const oC = (0, QC.useRef)(null),
        [qC, FC] = (0, QC.useState)(0),
        WC = (0, QC.useRef)(!0),
        MC = (0, QC.useRef)(null),
        gC = (0, QC.useRef)({
          value: zC,
          onSave: fC
        });
      gC.current = {
        value: zC,
        onSave: fC
      };
      const SC = () => {
        const CC = MC.current;
        MC.current = null, null !== CC && CC !== gC.current.value && gC.current.onSave(CC).then((() => {
          WC.current && FC((CC => CC + 1))
        }))
      };
      return (0, QC.useEffect)((() => {
        null === MC.current && oC.current && (oC.current.value = zC)
      }), [zC, qC]), (0, QC.useEffect)((() => () => {
        WC.current = !1, SC()
      }), []), (0, lC.jsx)("div", {
        className: NC()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: nC
        }),
        onBlur: SC,
        children: (0, lC.jsx)(EC.c, {
          domRef: oC,
          defaultValue: zC,
          placeholderText: ZC,
          ariaLabel: wC,
          maxLength: bC,
          onValueChange: CC => {
            MC.current = CC
          },
          onEnter: SC
        })
      })
    }
    const rC = ["mod", "coOwner"],
      sC = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function TC(CC) {
      var zC, ZC, bC;
      let {
        name: nC,
        place: fC,
        openedIn: oC,
        isYou: qC,
        manage: WC,
        hiddenNames: NC,
        zIndex: SC
      } = CC;
      const {
        t: pC,
        selectedLanguage: PC
      } = (0, MC.y)(), [GC, RC] = (0, QC.useState)(null), {
        state: xC
      } = WC, JC = `player:${nC}`, IC = function(CC, zC) {
        if ("banned" === CC.section) return {
          ...iC,
          unban: !0
        };
        if ("gone" === CC.section) return iC;
        const {
          player: ZC
        } = CC, QC = "here" === CC.section, wC = QC || "none" !== ZC.role ? ZC.can.roles : [];
        return {
          gamemode: QC && zC && null !== ZC.gamemode && ZC.can.gamemode,
          roles: wC,
          fixedRole: 0 === wC.length && "none" !== ZC.role ? ZC.role : null,
          kick: QC && ZC.can.kick,
          ban: ZC.can.ban,
          unban: !1
        }
      }(fC, null !== xC.gamemodes), YC = WC.statusOf(JC), HC = WC.isPending(JC), EC = FC(), cC = Date.now(), uC = CC => {
        var zC, ZC;
        return null !== (zC = null === (ZC = (CC => xC.roles.find((zC => zC.role === CC)))(CC)) || void 0 === ZC ? void 0 : ZC.label) && void 0 !== zC ? zC : CC
      }, TC = CC => {
        const zC = sC[CC];
        return void 0 === zC ? void 0 : pC(zC)
      }, aC = "here" === fC.section || "away" === fC.section ? fC.player : null, tC = "here" === fC.section ? fC.player.id : null, {
        playerSocialPreview: DC,
        isFriend: jC
      } = null === tC ? {
        playerSocialPreview: (0, hC.l)(nC, null),
        isFriend: !1
      } : (0, eC.d)(tC, nC), yC = function() {
        WC.send(...arguments)
      }, LC = (CC, zC) => {
        EC.hold("role", CC, WC.send({
          type: "setRole",
          name: nC,
          role: CC
        }, JC, zC))
      };
      let UC = null;
      if ("ban" === (null === GC || void 0 === GC ? void 0 : GC.kind)) UC = pC("lobbyManageEntry:banConfirm", {
        playerName: nC
      });
      else if ("role" === (null === GC || void 0 === GC ? void 0 : GC.kind)) {
        var BC;
        UC = `${pC("lobbyManage:roleConfirm",{playerName:nC,role:uC(GC.role)})} ${null!==(BC=TC(GC.role))&&void 0!==BC?BC:""}`
      } else if (YC) UC = (0, lC.jsx)(XC, {
        status: YC
      });
      else if (qC) UC = pC("lobbyManage:you");
      else if ("here" === fC.section) "none" === fC.player.role && cC - fC.player.at < 6e5 && (UC = mC(pC, PC.code, "lobbyManage:joinedAgo", fC.player.at, cC));
      else if ("away" === fC.section) {
        if (fC.player.at > 0) {
          const CC = "kicked" === fC.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          UC = mC(pC, PC.code, CC, fC.player.at, cC)
        }
      } else "banned" === fC.section ? null !== fC.bannedAt && (UC = mC(pC, PC.code, "lobbyManage:bannedAgo", fC.bannedAt, cC)) : "banned" === oC && (UC = pC("lobbyManageEntry:unbanned"));
      return (0, lC.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": nC,
        children: (0, lC.jsxs)(vC.f, {
          playerSocialPreview: DC,
          isFriend: jC,
          status: UC,
          opensProfileCard: !qC && (0, eC.f)(!0, nC, NC),
          zIndex: SC,
          children: [null !== GC && (0, lC.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === GC.kind && (0, lC.jsxs)(AC.I, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                RC(null), yC({
                  type: "ban",
                  name: nC
                }, JC)
              },
              children: [(0, lC.jsx)(gC.c, {
                name: "gavel"
              }), (0, lC.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: pC("lobbyManageEntry:ban")
              })]
            }), "role" === GC.kind && (0, lC.jsx)(AC.g, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: GC.role
              },
              onClick: () => {
                RC(null), LC(GC.role)
              },
              children: pC("lobbyManage:makeRole", {
                role: uC(GC.role)
              })
            }), (0, lC.jsx)(AC.i, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                RC(null)
              },
              children: pC("general:cancel")
            })]
          }), null === GC && (0, lC.jsxs)(lC.Fragment, {
            children: [(0, lC.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [IC.gamemode && null !== aC && (0, lC.jsx)(KC.b, {
                options: (null !== (zC = xC.gamemodes) && void 0 !== zC ? zC : []).map((CC => ({
                  value: CC.value,
                  label: dC(pC, CC.label, NC)
                }))),
                value: null !== (ZC = EC.get("gamemode")) && void 0 !== ZC ? ZC : aC.gamemode,
                disabled: HC,
                onChange: CC => {
                  (0, wC.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: CC.value
                  }), EC.hold("gamemode", CC.value, WC.send({
                    type: "setGamemode",
                    name: nC,
                    gamemode: CC.value
                  }, JC))
                }
              }), IC.roles.length > 0 && null !== aC && (0, lC.jsx)(KC.b, {
                options: [...xC.roles].reverse().filter((CC => IC.roles.includes(CC.role))).map((CC => ({
                  value: CC.role,
                  label: CC.label
                }))),
                value: null !== (bC = EC.get("role")) && void 0 !== bC ? bC : aC.role,
                disabled: HC,
                onChange: CC => {
                  var zC;
                  (zC = CC.value) !== (null === aC || void 0 === aC ? void 0 : aC.role) && (rC.includes(zC) ? RC({
                    kind: "role",
                    role: zC
                  }) : ((0, wC.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: zC
                  }), LC(zC, TC(zC))))
                }
              }), null !== IC.fixedRole && (0, lC.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: uC(IC.fixedRole)
              })]
            }), (0, lC.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [IC.kick && (0, lC.jsxs)(AC.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${pC("lobbyManageEntry:kick")} ${nC}`,
                disabled: HC,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  yC({
                    type: "kick",
                    name: nC
                  }, JC)
                },
                children: [(0, lC.jsx)(gC.c, {
                  name: "person-falling-burst"
                }), (0, lC.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: pC("lobbyManageEntry:kick")
                })]
              }), IC.ban && (0, lC.jsxs)(AC.K, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${pC("lobbyManageEntry:ban")} ${nC}`,
                disabled: HC,
                padDestructive: !0,
                onClick: () => {
                  RC({
                    kind: "ban"
                  })
                },
                children: [(0, lC.jsx)(gC.c, {
                  name: "gavel"
                }), (0, lC.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: pC("lobbyManageEntry:ban")
                })]
              }), IC.unban && (0, lC.jsxs)(AC.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${pC("lobbyManageEntry:unban")} ${nC}`,
                disabled: HC,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  yC({
                    type: "unban",
                    name: nC
                  }, JC)
                },
                children: [(0, lC.jsx)(gC.c, {
                  name: "user-unlock"
                }), (0, lC.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: pC("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function aC(CC) {
      var zC, ZC, wC, bC;
      let {
        manage: nC,
        focusRequest: fC,
        onFocused: oC
      } = CC;
      const {
        t: qC
      } = (0, MC.y)(), FC = (0, RC.f)("players"), WC = (0, RC.f)("hiddenPlayerNames"), NC = (0, QC.useRef)(null), {
        state: SC
      } = nC, PC = null === FC.localId ? null : null !== (zC = null === (ZC = FC.byId[FC.localId]) || void 0 === ZC ? void 0 : ZC.name) && void 0 !== zC ? zC : null, [GC] = (0, QC.useState)((() => JC(SC, PC))), xC = function(CC, zC, ZC) {
        const QC = new Set([...CC.here, ...CC.away, ...CC.banned]),
          wC = JC(zC, ZC),
          bC = zC => {
            const ZC = wC[zC].filter((CC => !QC.has(CC)));
            for (const CC of ZC) QC.add(CC);
            return [...CC[zC], ...ZC]
          };
        return {
          here: bC("here"),
          away: bC("away"),
          banned: bC("banned")
        }
      }(GC, SC, PC), [iC, vC] = (0, QC.useState)(!1), eC = function(CC, zC) {
        return CC.here.filter((CC => CC.name !== zC && "none" === CC.role && CC.can.kick)).length
      }(SC, PC), hC = nC.statusOf("kickAll");
      (0, QC.useEffect)((() => {
        var CC, zC;
        if (null === fC) return;
        const ZC = null === (CC = NC.current) || void 0 === CC ? void 0 : CC.querySelector(`[data-lobby-manage-row="${CSS.escape(fC.name)}"]`);
        null === ZC || void 0 === ZC || ZC.scrollIntoView({
          block: "center"
        }), null === ZC || void 0 === ZC || null === (zC = ZC.querySelector(".ProfilePreview")) || void 0 === zC || zC.focus({
          preventScroll: !0
        }), oC(fC.seq)
      }), [null === fC || void 0 === fC ? void 0 : fC.seq]);
      const KC = CC => (zC, ZC) => (0, lC.jsx)(TC, {
        name: zC,
        place: IC(SC, zC),
        openedIn: CC,
        isYou: zC === PC,
        manage: nC,
        hiddenNames: WC,
        zIndex: ZC
      }, zC);
      return (0, lC.jsxs)("div", {
        ref: NC,
        className: "LobbyManagePage",
        children: [xC.here.length > 0 && (0, lC.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, lC.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, lC.jsx)(pC.b, {
              label: qC("lobbyManage:here"),
              meta: SC.here.length
            }), eC >= 2 && !iC && (0, lC.jsxs)(AC.K, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: nC.isPending("kickAll"),
              onClick: () => {
                vC(!0)
              },
              children: [(0, lC.jsx)(gC.c, {
                name: "person-falling-burst"
              }), " ", qC("lobbyManage:kickAll")]
            })]
          }), iC && eC >= 2 && (0, lC.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, lC.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: qC("lobbyManage:kickAllConfirm", {
                count: eC
              })
            }), (0, lC.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, lC.jsx)(AC.I, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  vC(!1), nC.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: qC("lobbyManage:kickAll")
              }), (0, lC.jsx)(AC.i, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  vC(!1)
                },
                children: qC("general:cancel")
              })]
            })]
          }), hC && (0, lC.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, lC.jsx)(XC, {
              status: hC
            })
          }), (0, lC.jsx)(cC, {
            names: xC.here,
            cap: xC.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: KC("here")
          })]
        }), xC.away.length > 0 && (0, lC.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, lC.jsx)(pC.b, {
            label: qC("lobbyManage:notHere"),
            meta: xC.away.length
          }), (0, lC.jsx)(cC, {
            names: xC.away,
            cap: 5,
            filterFrom: null,
            moreLabel: qC("lobbyManage:allCount", {
              count: xC.away.length
            }),
            reveal: null !== (wC = null === fC || void 0 === fC ? void 0 : fC.name) && void 0 !== wC ? wC : null,
            renderRow: KC("away")
          })]
        }), xC.banned.length > 0 && (0, lC.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, lC.jsx)(pC.b, {
            label: qC("lobbyManage:banned"),
            meta: xC.banned.length
          }), (0, lC.jsx)(cC, {
            names: xC.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: qC("lobbyManage:allCount", {
              count: xC.banned.length
            }),
            reveal: null !== (bC = null === fC || void 0 === fC ? void 0 : fC.name) && void 0 !== bC ? bC : null,
            renderRow: KC("banned")
          })]
        })]
      })
    }
    var tC = ZC(4562),
      DC = ZC(1559),
      jC = ZC(36584),
      yC = ZC(36598),
      LC = ZC(36590),
      UC = ZC(36588),
      BC = ZC(36627),
      OC = ZC(36612),
      kC = ZC(36620);

    function VC(CC) {
      const zC = new Set;
      for (const ZC of CC) zC.add(ZC.toLowerCase());
      return zC
    }

    function Cz(CC) {
      var zC, ZC;
      let {
        state: wC,
        lobbyName: bC,
        listed: nC,
        isListed: fC,
        sG: oC,
        xR: qC,
        statusOf: FC
      } = CC;
      const {
        t: WC,
        selectedLanguage: NC
      } = (0, MC.y)(), gC = (0, DC.k)(), SC = (0, RC.f)("players"), PC = null === SC.localId ? null : null !== (zC = null === (ZC = SC.byId[SC.localId]) || void 0 === ZC ? void 0 : ZC.name) && void 0 !== zC ? zC : null, GC = (0, QC.useMemo)((() => (0, UC.i)(gC.friends, bC, wC.here.map((CC => CC.name)))), [gC.friends, bC, wC.here]), AC = new Map(GC.map((CC => [CC.friend.name.toLowerCase(), CC]))), xC = function(CC) {
        let {
          refused: zC,
          listed: ZC,
          here: QC,
          friends: wC,
          excluded: bC
        } = CC;
        const nC = VC(bC),
          fC = CC => CC.filter((CC => {
            const zC = CC.toLowerCase();
            return !nC.has(zC) && (nC.add(zC), !0)
          }));
        return {
          added: [],
          refused: fC(zC),
          listed: fC(ZC),
          suggested: fC([...QC, ...wC])
        }
      }({
        refused: wC.refused.map((CC => CC.name)),
        listed: nC,
        here: wC.here.map((CC => CC.name)),
        friends: GC.flatMap((CC => "here" === CC.place ? [] : [CC.friend.name])),
        excluded: [...null === PC ? [] : [PC], ...[...wC.here, ...wC.away].flatMap((CC => "none" === CC.role || (0, UC.k)(nC, CC.name) ? [] : [CC.name]))]
      }), [JC] = (0, QC.useState)(xC), [IC, iC] = (0, QC.useState)([]), vC = function(CC, zC, ZC) {
        const QC = VC(ZC),
          wC = VC([...ZC, ...CC.refused, ...CC.listed, ...CC.suggested]),
          bC = ZC => [...CC[ZC].filter((CC => !QC.has(CC.toLowerCase()))), ...zC[ZC].filter((CC => {
            const zC = CC.toLowerCase();
            return !wC.has(zC) && (wC.add(zC), !0)
          }))];
        return {
          added: [...ZC],
          refused: bC("refused"),
          listed: bC("listed"),
          suggested: bC("suggested")
        }
      }(JC, xC, IC), KC = (CC, zC) => {
        var ZC, QC;
        const bC = CC.toLowerCase(),
          nC = AC.get(bC),
          qC = wC.here.find((CC => CC.name.toLowerCase() === bC)),
          MC = wC.refused.find((CC => CC.name.toLowerCase() === bC)),
          gC = null !== (ZC = null === FC || void 0 === FC ? void 0 : FC(CC)) && void 0 !== ZC ? ZC : null;
        let SC = null;
        gC ? SC = (0, lC.jsx)(XC, {
          status: gC
        }) : MC ? SC = mC(WC, NC.code, "lobbyManage:triedToJoinAgo", MC.at, Date.now()) : nC && qC ? SC = WC("lobbyManage:friendHere") : nC ? SC = "online" === nC.place ? WC("lobbyManage:friendOnline") : WC("lobbyManage:friend") : qC && (SC = WC("lobbyManage:hereStatus"));
        let pC = null !== (QC = null === nC || void 0 === nC ? void 0 : nC.friend) && void 0 !== QC ? QC : (0, hC.l)(CC, null);
        return !nC && null !== qC && void 0 !== qC && qC.id && (pC = (0, eC.d)(qC.id, qC.name).playerSocialPreview), (0, lC.jsx)(OC.d, {
          playerSocialPreview: pC,
          isFriend: void 0 !== nC,
          hideFriendBadge: !0,
          status: SC,
          zIndex: zC,
          ZN: {
            on: fC(CC),
            onChange: zC => {
              oC(CC, zC)
            }
          }
        }, bC)
      }, YC = [...vC.added, ...vC.refused];
      return (0, lC.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, lC.jsx)(pC.b, {
          label: WC("worldSocial:whitelist"),
          meta: nC.length
        }), (0, lC.jsx)(kC.d, {
          label: WC("lobbyManage:add"),
          icon: "user-check",
          placeholder: WC("socialBar:enterPlayerName"),
          onSubmit: async CC => {
            const zC = await qC(CC);
            return zC.ok && iC((zC => [CC, ...zC])), zC
          }
        }), YC.length > 0 && (0, lC.jsx)("div", {
          className: "PlayerRows",
          children: YC.map(((CC, zC) => KC(CC, YC.length - zC)))
        }), (0, lC.jsx)(cC, {
          names: vC.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: WC("lobbyManage:allOnWhitelist", {
            count: vC.listed.length
          }),
          renderRow: KC
        }), (0, lC.jsx)(cC, {
          names: vC.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: WC("lobbyManage:allCount", {
            count: vC.suggested.length
          }),
          renderRow: KC
        })]
      })
    }

    function zz(CC) {
      let {
        manage: zC,
        listing: ZC
      } = CC;
      const {
        t: QC
      } = (0, MC.y)(), bC = (CC, ZC) => ((0, wC.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: CC
      }), zC.send({
        type: "setListing",
        field: CC,
        value: ZC
      }, `listing:${CC}`)), nC = CC => {
        const ZC = zC.statusOf(`listing:${CC}`);
        return ZC && !ZC.ok && (0, lC.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, lC.jsx)(XC, {
            status: ZC
          })
        })
      };
      return (0, lC.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, lC.jsx)(pC.b, {
          label: QC("lobbyManage:inWorldsList")
        }), (0, lC.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, lC.jsx)("div", {
            className: "SliderText",
            children: QC("lobbyManage:description")
          }), (0, lC.jsx)(uC, {
            value: ZC.description,
            ariaLabel: QC("lobbyManage:description"),
            wide: !0,
            onSave: CC => bC("description", CC)
          })]
        }), nC("description"), (0, lC.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, lC.jsx)("div", {
            className: "SliderText",
            children: QC("lobbyManage:emojis")
          }), (0, lC.jsx)(uC, {
            value: ZC.emojis,
            ariaLabel: QC("lobbyManage:emojis"),
            onSave: CC => bC("emojis", CC)
          })]
        }), nC("emojis"), (0, lC.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, lC.jsx)("div", {
            className: "SliderText",
            children: QC("lobbyManage:colour")
          }), (0, lC.jsx)(Zz, {
            value: ZC.colour,
            ariaLabel: QC("lobbyManage:colour"),
            onSave: CC => {
              bC("colour", CC)
            }
          })]
        }), nC("colour")]
      })
    }

    function Zz(CC) {
      let {
        value: zC,
        ariaLabel: ZC,
        onSave: wC
      } = CC;
      const bC = (0, QC.useRef)(null),
        nC = (0, QC.useRef)({
          value: zC,
          onSave: wC
        });
      nC.current = {
        value: zC,
        onSave: wC
      };
      const fC = (0, QC.useRef)(null),
        oC = (0, QC.useRef)(!1),
        qC = CC => {
          oC.current && CC.value !== nC.current.value && CC.value !== fC.current && (fC.current = CC.value, nC.current.onSave(CC.value))
        };
      return (0, QC.useEffect)((() => {
        bC.current && document.activeElement !== bC.current && (bC.current.value = zC)
      }), [zC]), (0, QC.useEffect)((() => {
        const CC = bC.current,
          zC = () => {
            qC(CC)
          };
        return CC.addEventListener("change", zC), () => {
          CC.removeEventListener("change", zC), qC(CC)
        }
      }), []), (0, lC.jsx)("input", {
        ref: bC,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: zC,
        "aria-label": ZC,
        onInput: () => {
          oC.current = !0
        },
        onBlur: CC => {
          qC(CC.currentTarget)
        }
      })
    }

    function Qz(CC) {
      let {
        manage: zC
      } = CC;
      const {
        lobbyName: ZC,
        shownLobbyName: QC
      } = (0, RC.f)("connectedGame");
      return zC.state.you.canSetVisibility && null !== ZC ? (0, lC.jsx)(bz, {
        manage: zC,
        lobbyName: ZC,
        worldCode: null !== QC && void 0 !== QC ? QC : ZC
      }, ZC) : (0, lC.jsx)(nz, {
        manage: zC,
        lobbyName: null !== ZC && void 0 !== ZC ? ZC : ""
      })
    }

    function wz(CC) {
      return CC.map((CC => CC.toLowerCase())).sort().join(",")
    }

    function bz(CC) {
      var zC;
      let {
        manage: ZC,
        lobbyName: bC,
        worldCode: nC
      } = CC;
      const {
        t: fC
      } = (0, MC.y)(), {
        settings: oC,
        loading: qC,
        change: FC,
        retry: WC,
        refresh: NC
      } = (0, jC.j)(bC), gC = (0, DC.k)(), {
        state: PC
      } = ZC, GC = (0, QC.useRef)(oC);
      GC.current = oC;
      const RC = wz(null !== (zC = PC.whitelist) && void 0 !== zC ? zC : []),
        xC = null !== PC.whitelist;
      (0, QC.useEffect)((() => {
        const CC = GC.current;
        null !== CC && (CC.visibility !== PC.visibility || xC && wz(CC.whitelist) !== RC) && NC()
      }), [PC.visibility, RC, xC, NC]);
      const JC = async (CC, zC) => {
        let ZC = null;
        return await FC(CC, zC, {
          quiet: !0,
          onAnswer: CC => {
            ZC = CC
          }
        }), ZC
      }, IC = (CC, zC) => {
        null !== zC && "error" in zC && ZC.showStatus(CC, {
          ok: !1,
          text: [fC(zC.error)]
        })
      }, iC = async CC => {
        if (null === oC || CC === oC.visibility) return;
        (0, wC.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: CC
        });
        const zC = "whitelist" === CC ? (0, UC.f)((0, UC.i)(gC.friends, bC, PC.here.map((CC => CC.name))), (0, BC.c)(bC), oC.whitelist) : [],
          ZC = await JC({
            setVisibility: CC
          }, (zC => ({
            ...zC,
            visibility: CC
          })));
        IC("mode", ZC), null === ZC || "error" in ZC || await (async CC => {
          for (const zC of (0, UC.n)(CC, tC.E))
            if (!await FC({
                whitelistAdd: zC
              }, (CC => (0, UC.s)(CC, zC, !0)))) return !1;
          return !0
        })(zC)
      }, vC = (0, QC.useMemo)((() => {
        var CC;
        if (null === oC) return [];
        const zC = null !== (CC = PC.whitelist) && void 0 !== CC ? CC : [];
        return [...zC.filter((CC => (0, UC.k)(oC.whitelist, CC))), ...oC.whitelist.filter((CC => !(0, UC.k)(zC, CC)))]
      }), [oC, PC.whitelist]), eC = ZC.statusOf("mode");
      return (0, lC.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, lC.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, lC.jsx)(pC.b, {
            label: fC("worldSocial:whoCanJoin")
          }), null === oC && qC && (0, lC.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, lC.jsx)(SC.d, {})
          }), null === oC && !qC && (0, lC.jsx)(AC.i, {
            className: "SmallTextLight",
            onClick: WC,
            children: fC("worldSocial:loadFailed")
          }), null !== oC && (0, lC.jsx)(yC.b, {
            visibility: oC.visibility,
            onPick: CC => {
              iC(CC)
            }
          }), eC && (0, lC.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, lC.jsx)(XC, {
              status: eC
            })
          }), null !== oC && "private" !== oC.visibility && (0, lC.jsx)(LC.d, {
            worldCode: nC,
            message: null
          })]
        }), "whitelist" === (null === oC || void 0 === oC ? void 0 : oC.visibility) && (0, lC.jsx)(Cz, {
          state: PC,
          lobbyName: bC,
          listed: vC,
          isListed: CC => (0, UC.k)(oC.whitelist, CC),
          sG: (CC, zC) => {
            (0, wC.reportAnalyticsClick)(zC ? {
              id: "lobby_manage.whitelist_add",
              value: "ZN"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), JC(zC ? {
              whitelistAdd: [CC]
            } : {
              whitelistRemove: CC
            }, (ZC => (0, UC.s)(ZC, [CC], zC))).then((zC => {
              IC(`whitelist:${CC.toLowerCase()}`, zC)
            }))
          },
          xR: async CC => {
            (0, wC.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const zC = await JC({
              whitelistAdd: [CC]
            }, (zC => (0, UC.s)(zC, [CC], !0)));
            return null === zC ? {
              ok: !1,
              error: fC("worldSocial:changeFailed")
            } : "error" in zC ? {
              ok: !1,
              error: fC(zC.error)
            } : (0, UC.k)(zC.notFound, CC) ? {
              ok: !1,
              error: fC("lobbyManage:noPlayerCalled", {
                playerName: CC
              })
            } : {
              ok: !0
            }
          },
          statusOf: CC => ZC.statusOf(`whitelist:${CC.toLowerCase()}`)
        }), "public" === (null === oC || void 0 === oC ? void 0 : oC.visibility) && null !== PC.listing && (0, lC.jsx)(zz, {
          manage: ZC,
          listing: PC.listing
        })]
      })
    }

    function nz(CC) {
      var zC;
      let {
        manage: ZC,
        lobbyName: QC
      } = CC;
      const {
        t: bC
      } = (0, MC.y)(), {
        state: nC
      } = ZC, fC = FC(), oC = null !== (zC = nC.whitelist) && void 0 !== zC ? zC : [];
      return (0, lC.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, lC.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, lC.jsx)(pC.b, {
            label: bC("worldSocial:whoCanJoin")
          }), (0, lC.jsx)("div", {
            className: "LobbyManageModeText",
            children: bC(`worldSocial:${nC.visibility}`)
          })]
        }), "whitelist" === nC.visibility && nC.you.canEditWhitelist && (0, lC.jsx)(Cz, {
          state: nC,
          lobbyName: QC,
          listed: oC,
          isListed: CC => {
            var zC;
            return null !== (zC = fC.get(CC.toLowerCase())) && void 0 !== zC ? zC : (0, UC.k)(oC, CC)
          },
          sG: (CC, zC) => {
            (0, wC.reportAnalyticsClick)(zC ? {
              id: "lobby_manage.whitelist_add",
              value: "ZN"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const QC = CC.toLowerCase();
            fC.hold(QC, zC, ZC.send(zC ? {
              type: "whitelistAdd",
              names: [CC]
            } : {
              type: "whitelistRemove",
              name: CC
            }, `whitelist:${QC}`))
          },
          xR: async CC => {
            (0, wC.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const zC = await ZC.send({
              type: "whitelistAdd",
              names: [CC]
            }, "whitelist-field");
            return zC.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, lC.jsx)(HC.e, {
                text: zC.message
              })
            }
          },
          statusOf: CC => ZC.statusOf(`whitelist:${CC.toLowerCase()}`)
        }), "public" === nC.visibility && null !== nC.listing && (0, lC.jsx)(zz, {
          manage: ZC,
          listing: nC.listing
        })]
      })
    }
    var fz = ZC(4942),
      oz = ZC(1321);
    const qz = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const Fz = (0, QC.memo)((function(CC) {
      var zC;
      let {
        rule: ZC,
        value: QC,
        status: wC,
        pending: bC,
        hiddenNames: nC,
        OJ: fC,
        onAction: oC
      } = CC;
      const {
        t: qC
      } = (0, MC.y)(), FC = CC => fC(ZC, CC), WC = (CC, zC) => {
        oC(ZC, CC, zC)
      }, NC = dC(qC, ZC.label, nC), gC = ZC.info ? dC(qC, ZC.info, nC) : void 0, SC = ZC.placeholder ? dC(qC, ZC.placeholder, nC) : void 0, pC = (null !== (zC = ZC.options) && void 0 !== zC ? zC : []).map((CC => ({
        value: CC.value,
        label: dC(qC, CC.label, nC)
      }))), PC = Math.max(0, ...pC.map((CC => function(CC) {
        let zC = 0;
        for (const ZC of CC) zC += qz.test(ZC) ? 2 : 1;
        return zC
      }(CC.label)))), GC = wC && (0, lC.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, lC.jsx)(XC, {
          status: wC
        })
      }), RC = (0, lC.jsxs)("div", {
        className: "SliderText",
        children: [NC, void 0 !== gC && (0, lC.jsx)(oz.b, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: gC
        })]
      });
      return "toggle" === ZC.kind ? (0, lC.jsxs)(lC.Fragment, {
        children: [(0, lC.jsx)(fz.b, {
          label: NC,
          checked: !0 === QC,
          circleInfoText: gC,
          disabled: bC,
          onClick: FC
        }), GC]
      }) : "choice" === ZC.kind && pC.length <= 3 ? (0, lC.jsxs)(lC.Fragment, {
        children: [(0, lC.jsx)(fz.e, {
          label: NC,
          options: pC,
          value: String(QC),
          circleInfoText: gC,
          onChange: FC
        }), GC]
      }) : (0, lC.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [RC, "choice" === ZC.kind && (0, lC.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": PC
          },
          children: (0, lC.jsx)(KC.b, {
            options: pC,
            value: String(QC),
            disabled: bC,
            onChange: CC => {
              FC(CC.value)
            }
          })
        }), ("number" === ZC.kind || "text" === ZC.kind) && (0, lC.jsx)(uC, {
          value: null === QC ? "" : String(QC),
          placeholder: SC,
          ariaLabel: NC,
          onSave: CC => {
            const zC = CC.trim(),
              QC = Number(zC);
            return FC("number" === ZC.kind && "" !== zC && Number.isFinite(QC) ? QC : zC)
          }
        }), "action" === ZC.kind && (0, lC.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [pC.length > 3 && (0, lC.jsx)(KC.b, {
            options: pC,
            value: {
              value: "",
              label: null !== SC && void 0 !== SC ? SC : NC
            },
            disabled: bC,
            onChange: CC => {
              WC(CC.value)
            }
          }), pC.length > 0 && pC.length <= 3 && pC.map((CC => (0, lC.jsx)(AC.i, {
            className: "SmallTextLight",
            disabled: bC,
            onClick: () => {
              WC(CC.value)
            },
            children: CC.label
          }, CC.value))), 0 === pC.length && (0, lC.jsx)(AC.i, {
            className: "SmallTextLight",
            disabled: bC,
            onClick: () => {
              WC()
            },
            children: null !== SC && void 0 !== SC ? SC : NC
          })]
        }), "names" === ZC.kind && (0, lC.jsx)(Wz, {
          names: Array.isArray(QC) ? QC : [],
          pending: bC,
          onAction: WC
        }), GC]
      })
    }));

    function Wz(CC) {
      let {
        names: zC,
        pending: ZC,
        onAction: wC
      } = CC;
      const {
        t: bC
      } = (0, MC.y)(), nC = (0, QC.useRef)(null), [fC, oC] = (0, QC.useState)(""), qC = () => {
        const CC = fC.trim();
        "" !== CC && (wC(CC, "add"), nC.current && (nC.current.value = ""), oC(""))
      };
      return (0, lC.jsxs)("div", {
        className: "LobbyManageNames",
        children: [zC.map((CC => (0, lC.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, lC.jsx)("span", {
            className: "LobbyManageNameText",
            children: CC
          }), (0, lC.jsx)(AC.i, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: bC("lobbyManage:removeName", {
              name: CC
            }),
            disabled: ZC,
            onClick: () => {
              wC(CC, "remove")
            },
            children: (0, lC.jsx)(gC.c, {
              name: "xmark"
            })
          })]
        }, CC))), (0, lC.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, lC.jsx)(EC.c, {
            domRef: nC,
            placeholderText: bC("lobbyManage:namePlaceholder"),
            ariaLabel: bC("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: CC => {
              oC(CC)
            },
            onEnter: qC
          }), (0, lC.jsx)(AC.i, {
            className: "SmallTextLight",
            disabled: ZC || "" === fC.trim(),
            onClick: qC,
            children: bC("lobbyManage:addHere")
          })]
        })]
      })
    }
    const Nz = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function Mz(CC, zC) {
      return Nz.map((ZC => {
        let {
          group: QC,
          title: wC
        } = ZC;
        const bC = CC.filter((CC => CC.group === QC && void 0 === CC.parent)).map((ZC => {
          const QC = !0 === zC(ZC) ? CC.filter((CC => CC.parent === ZC.key)) : [];
          return {
            rule: ZC,
            children: QC
          }
        }));
        return {
          group: QC,
          title: wC,
          items: bC
        }
      }))
    }

    function gz(CC) {
      return CC.flatMap((CC => {
        let {
          items: zC
        } = CC;
        return zC.flatMap((CC => {
          let {
            rule: zC,
            children: ZC
          } = CC;
          return [zC, ...ZC]
        }))
      }))
    }

    function Sz(CC) {
      let {
        manage: zC,
        rowsShown: ZC
      } = CC;
      const {
        t: bC
      } = (0, MC.y)(), nC = (0, RC.f)("hiddenPlayerNames"), {
        rules: fC
      } = zC.state, oC = FC(), qC = CC => {
        const zC = oC.get(CC.key);
        return void 0 === zC ? CC.value : zC
      }, WC = Mz(fC, qC), [NC] = (0, QC.useState)((() => gz(WC).map((CC => CC.key)))), gC = ZC === 1 / 0 ? null : new Set(NC.slice(0, ZC)), SC = CC => null === gC || gC.has(CC.key), {
        hold: PC
      } = oC, GC = (0, QC.useCallback)(((CC, ZC) => {
        (0, wC.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: CC.key
        });
        const QC = zC.send({
          type: "setRule",
          key: CC.key,
          value: ZC
        }, `rule:${CC.key}`);
        return PC(CC.key, ZC, QC), QC
      }), [zC, PC]), AC = (0, QC.useCallback)(((CC, ZC, QC) => {
        (0, wC.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: CC.key
        }), zC.send({
          type: "ruleAction",
          key: CC.key,
          ...void 0 === ZC ? {} : {
            arg: ZC
          },
          ...void 0 === QC ? {} : {
            op: QC
          }
        }, `rule:${CC.key}`, void 0 === QC ? bC("lobbyManage:setJustNow") : void 0)
      }), [zC, bC]), xC = CC => {
        const ZC = `rule:${CC.key}`;
        return (0, lC.jsx)(Fz, {
          rule: CC,
          value: qC(CC),
          status: zC.statusOf(ZC),
          pending: zC.isPending(ZC),
          hiddenNames: nC,
          OJ: GC,
          onAction: AC
        }, CC.key)
      };
      return (0, lC.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: WC.map((CC => {
          let {
            group: zC,
            title: ZC,
            items: wC
          } = CC;
          const nC = wC.filter((CC => {
            let {
              rule: zC
            } = CC;
            return SC(zC)
          }));
          return 0 === nC.length ? null : (0, lC.jsxs)(QC.Fragment, {
            children: [(0, lC.jsx)(pC.b, {
              label: bC(ZC)
            }), nC.map((CC => {
              let {
                rule: zC,
                children: ZC
              } = CC;
              return 0 === ZC.length ? xC(zC) : (0, lC.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [xC(zC), ZC.filter(SC).map(xC)]
              }, zC.key)
            }))]
          }, zC)
        }))
      })
    }
    const pz = {
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
      Pz = 5,
      Gz = (0, QC.memo)((function(CC) {
        let {
          page: zC,
          manage: ZC,
          leaderboard: wC,
          focusRequest: bC,
          onFocused: nC,
          ruleRowsShown: fC
        } = CC;
        return "leaderboard" === zC ? (0, lC.jsx)(QC.Suspense, {
          fallback: (0, lC.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, lC.jsx)(SC.d, {})
          }),
          children: wC
        }) : "joining" === zC ? (0, lC.jsx)(Qz, {
          manage: ZC
        }) : "rules" === zC ? (0, lC.jsx)(Sz, {
          manage: ZC,
          rowsShown: fC
        }) : (0, lC.jsx)(aC, {
          manage: ZC,
          focusRequest: bC,
          onFocused: nC
        })
      }));

    function Rz(CC) {
      let {
        page: zC
      } = CC;
      const {
        t: ZC
      } = (0, MC.y)(), QC = pz[zC];
      return (0, lC.jsxs)(lC.Fragment, {
        children: [(0, lC.jsx)(gC.c, {
          name: QC.icon
        }), " ", (0, lC.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: ZC(QC.title)
        })]
      })
    }

    function Az(CC) {
      var zC;
      const {
        t: ZC
      } = (0, MC.y)(), {
        pages: bC,
        landing: nC
      } = CC, oC = (0, QC.useRef)(null), qC = (0, QC.useRef)(null), FC = (0, QC.useRef)(null), WC = (0, QC.useRef)(new Map), [gC, SC] = (0, QC.useState)(null), RC = (0, QC.useRef)(gC), AC = (0, QC.useRef)(0), [xC, JC] = (0, QC.useState)(bC[0]), IC = null !== gC && void 0 !== gC ? gC : bC.includes(xC) ? xC : bC[0], [iC] = (0, QC.useState)(null !== (zC = null === nC || void 0 === nC ? void 0 : nC.page) && void 0 !== zC ? zC : null), vC = null !== iC && bC.includes(iC) ? [iC, ...bC.filter((CC => CC !== iC))] : bC, [eC] = (0, QC.useState)((() => {
        const zC = gz(Mz(CC.manage.state.rules, (CC => CC.value)));
        return Math.max(1, Math.ceil(zC.length / Pz))
      })), hC = vC.flatMap((CC => "rules" === CC ? Array(eC).fill(CC) : [CC])), KC = function(CC, zC) {
        const [ZC, wC] = (0, QC.useState)(CC), bC = ZC >= zC;
        return bC && ZC !== 1 / 0 && wC(1 / 0), (0, QC.useLayoutEffect)((() => {
          if (bC) return;
          let CC = !0;
          return (0, GC.e)().then((() => {
            CC && wC((CC => CC + 1))
          })), () => {
            CC = !1
          }
        }), [ZC, bC]), bC ? 1 / 0 : ZC
      }(1, hC.length), YC = hC.slice(0, KC), dC = new Set(YC), mC = KC < hC.length, HC = mC ? YC.filter((CC => "rules" === CC)).length * Pz : 1 / 0, EC = (0, QC.useRef)(CC.focusRequest);
      EC.current = CC.focusRequest;
      const XC = CC => {
          RC.current = CC, SC(CC)
        },
        cC = () => {
          var CC, zC;
          oC.current.style.scrollPaddingTop = `${null!==(CC=null===(zC=FC.current)||void 0===zC?void 0:zC.offsetHeight)&&void 0!==CC?CC:0}px`
        },
        uC = CC => {
          const zC = oC.current,
            ZC = WC.current.get(CC);
          if (void 0 === ZC) return;
          const QC = document.activeElement,
            wC = EC.current,
            bC = null === wC ? null : ZC.querySelector(`[data-lobby-manage-row="${CSS.escape(wC.name)}"]`);
          cC(), QC instanceof HTMLElement && null !== bC && void 0 !== bC && bC.contains(QC) ? QC.scrollIntoView({
            block: "center"
          }) : null === ZC.previousElementSibling ? zC.scrollTop = 0 : ZC.scrollIntoView({
            block: "start"
          }), AC.current = zC.scrollTop
        },
        rC = CC => {
          (0, wC.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: CC
          }), XC(CC), uC(CC)
        },
        sC = () => {
          var CC, zC;
          const ZC = oC.current,
            QC = ZC.getBoundingClientRect().top + (null !== (CC = null === (zC = FC.current) || void 0 === zC ? void 0 : zC.offsetHeight) && void 0 !== CC ? CC : 0),
            wC = bC.map((CC => {
              var zC, ZC;
              return (null !== (zC = null === (ZC = WC.current.get(CC)) || void 0 === ZC ? void 0 : ZC.getBoundingClientRect().top) && void 0 !== zC ? zC : 1 / 0) - QC
            })),
            nC = !mC && ZC.scrollTop + ZC.clientHeight >= ZC.scrollHeight - 1;
          JC(bC[(0, fC.h)(wC, nC)])
        },
        TC = () => {
          null !== RC.current && (XC(null), sC())
        };
      (0, QC.useLayoutEffect)((() => {
        null !== nC && bC.includes(nC.page) && rC(nC.page)
      }), [null === nC || void 0 === nC ? void 0 : nC.seq]), (0, QC.useLayoutEffect)((() => {
        null === RC.current || bC.includes(RC.current) || TC()
      }));
      const {
        onFocused: aC
      } = CC, tC = (0, QC.useCallback)((CC => {
        null !== RC.current && uC(RC.current), aC(CC)
      }), [aC]);
      (0, QC.useLayoutEffect)((() => {
        const CC = RC.current;
        null !== CC && (!mC || bC.indexOf(hC[KC - 1]) < bC.indexOf(CC)) && uC(CC)
      }), [KC]), (0, QC.useEffect)((() => {
        const CC = new ResizeObserver((() => {
          null !== RC.current ? uC(RC.current) : cC()
        }));
        return CC.observe(oC.current), CC.observe(qC.current), () => {
          CC.disconnect()
        }
      }), []), (0, QC.useLayoutEffect)((() => {
        const CC = FC.current,
          zC = null === CC || void 0 === CC ? void 0 : CC.querySelector(".SegmentedToggleOptionSelected");
        zC && (CC.scrollLeft = Math.min(zC.offsetLeft, Math.max(CC.scrollLeft, zC.offsetLeft + zC.offsetWidth - CC.clientWidth)))
      }), [IC]);
      return (0, lC.jsxs)("div", {
        ref: oC,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === RC.current ? sC() : Math.abs(oC.current.scrollTop - AC.current) > 1 && TC()
        },
        onClick: CC => {
          var zC;
          null !== (zC = FC.current) && void 0 !== zC && zC.contains(CC.target) || TC()
        },
        onFocus: CC => {
          var zC;
          const ZC = null === RC.current ? null : WC.current.get(RC.current);
          !ZC || ZC.contains(CC.target) || null !== (zC = FC.current) && void 0 !== zC && zC.contains(CC.target) || TC()
        },
        children: [bC.length > 1 && (0, lC.jsx)("div", {
          ref: FC,
          className: "LobbyManageChips",
          children: (0, lC.jsx)(PC.b, {
            options: bC.map((CC => ({
              value: CC,
              label: (0, lC.jsx)(Rz, {
                page: CC
              }),
              ariaLabel: ZC(pz[CC].title)
            }))),
            value: IC,
            padTabs: "2",
            ariaLabel: ZC("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: rC
          })
        }), (0, lC.jsx)("div", {
          ref: qC,
          className: NC()("LobbyManageInner", {
            Staging: mC
          }),
          children: bC.filter((CC => dC.has(CC))).map((zC => {
            const ZC = zC === gC;
            return (0, lC.jsxs)("section", {
              ref: CC => {
                CC ? WC.current.set(zC, CC) : WC.current.delete(zC)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": ZC || void 0,
              children: [bC.length > 1 && (0, lC.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": ZC || void 0,
                "data-pad-unavailable": ZC || void 0,
                children: (0, lC.jsx)(pC.b, {
                  label: (0, lC.jsx)(Rz, {
                    page: zC
                  })
                })
              }), (0, lC.jsx)(Gz, {
                page: zC,
                manage: CC.manage,
                leaderboard: CC.leaderboard,
                focusRequest: CC.focusRequest,
                onFocused: tC,
                ruleRowsShown: "rules" === zC ? HC : 1 / 0
              })]
            }, zC)
          }))
        })]
      })
    }

    function xz(CC) {
      return void 0 === (null === CC || void 0 === CC ? void 0 : CC.page) ? null : {
        page: CC.page,
        seq: CC.seq
      }
    }

    function Jz(CC) {
      let {
        leaderboard: zC
      } = CC;
      const ZC = function() {
          const CC = (0, oC.h)("lobbyManage"),
            [zC, ZC] = (0, QC.useReducer)((CC => CC + 1), 0),
            [wC] = (0, QC.useState)((() => new qC.b(ZC)));
          return (0, QC.useEffect)((() => {
            const CC = wC.nextDeadline();
            if (null === CC) return;
            const zC = setTimeout((() => {
              wC.expire(Date.now()), ZC()
            }), Math.max(0, CC - Date.now()));
            return () => {
              clearTimeout(zC)
            }
          })), (0, QC.useMemo)((() => null === CC ? null : {
            state: CC,
            send: (CC, zC, QC) => {
              const bC = wC.send(CC, zC, null !== QC && void 0 !== QC ? QC : null);
              return ZC(), bC
            },
            statusOf: CC => wC.statusOf(CC, Date.now()),
            showStatus: (CC, zC) => {
              wC.show(CC, zC)
            },
            isPending: CC => wC.isPending(CC)
          }), [CC, zC, wC])
        }(),
        FC = (0, fC.i)((0, bC.e)()),
        WC = (0, nC.k)(),
        [NC, MC] = (0, QC.useState)((() => xz(WC))),
        [gC, SC] = (0, QC.useState)(null);
      return (0, QC.useEffect)((() => {
        null === WC && (0, wC.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, QC.useEffect)((() => {
        null !== WC && (MC((CC => (null === CC || void 0 === CC ? void 0 : CC.seq) === WC.seq ? CC : xz(WC))), void 0 !== WC.focusName && "players" === WC.page ? SC({
          name: WC.focusName,
          seq: WC.seq
        }) : (0, nC.i)(WC.seq))
      }), [null === WC || void 0 === WC ? void 0 : WC.seq]), null === ZC ? null : (0, lC.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, lC.jsx)(Az, {
          pages: (0, fC.f)(ZC.state, FC),
          manage: ZC,
          leaderboard: zC,
          focusRequest: gC,
          onFocused: nC.i,
          landing: NC
        })
      })
    }
  },
  36447: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      d: () => oC
    });
    var QC = ZC(1418),
      wC = ZC(1865),
      bC = ZC(1840);
    const nC = 1e4;
    let fC = 0;

    function oC(CC) {
      const zC = ++fC;
      return new Promise((ZC => {
        const fC = zC => {
            oC(), clearTimeout(qC), !1 === (null === zC || void 0 === zC ? void 0 : zC.ok) && (0, QC.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: CC.type
            }), ZC(zC)
          },
          oC = wC.e.subscribe("lobbyManage", (CC => {
            const ZC = function(CC, zC) {
              var ZC;
              return null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.results.find((CC => CC.requestId === zC))) && void 0 !== ZC ? ZC : null
            }(CC, zC);
            null !== ZC && fC(ZC)
          })),
          qC = setTimeout((() => {
            fC(null)
          }), nC);
        bC.gameBridge.send("lobbyManage", {
          ...CC,
          requestId: zC
        })
      }))
    }
    const qC = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class FC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oC;
        this.onChange = CC, this.sendAction = zC, this.pending = new Map, this.statuses = new Map
      }
      send(CC, zC, ZC) {
        var QC;
        return this.statuses.delete(zC), this.pending.set(zC, (null !== (QC = this.pending.get(zC)) && void 0 !== QC ? QC : 0) + 1), this.sendAction(CC).then((CC => {
          var QC;
          const wC = null !== CC && void 0 !== CC ? CC : {
              requestId: -1,
              ok: !1,
              message: qC
            },
            bC = (null !== (QC = this.pending.get(zC)) && void 0 !== QC ? QC : 1) - 1;
          bC > 0 ? this.pending.set(zC, bC) : this.pending.delete(zC);
          const nC = !wC.ok || wC.message.length > 0 ? wC.message : null === ZC ? null : [ZC];
          return null !== nC && this.statuses.set(zC, {
            ok: wC.ok,
            text: nC,
            until: Date.now() + 4e3
          }), this.onChange(), wC
        }))
      }
      show(CC, zC) {
        this.statuses.set(CC, {
          ...zC,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(CC) {
        for (const [zC, ZC] of this.statuses) ZC.until <= CC && this.statuses.delete(zC)
      }
      nextDeadline() {
        let CC = null;
        for (const ZC of this.statuses.values()) {
          var zC;
          CC = Math.min(null !== (zC = CC) && void 0 !== zC ? zC : 1 / 0, ZC.until)
        }
        return CC
      }
      statusOf(CC, zC) {
        const ZC = this.statuses.get(CC);
        return !ZC || ZC.until <= zC ? null : {
          ok: ZC.ok,
          text: ZC.text
        }
      }
      isPending(CC) {
        return this.pending.has(CC)
      }
    }
  },
  36436: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => qC,
      f: () => oC
    });
    var QC = ZC(583),
      wC = ZC(1840),
      bC = ZC(1559),
      nC = ZC(77),
      fC = ZC(1209);

    function oC(CC, zC, ZC) {
      return nC.featureFlags.useSocialFeatures && CC && null === (0, fC.e)(zC, ZC)
    }

    function qC(CC, zC) {
      var ZC, nC;
      const fC = bC.d.getSocialState().friends.find((CC => CC.name.toLowerCase() === zC.toLowerCase())),
        oC = wC.gameBridge.latest("players").byId[CC],
        qC = void 0 !== oC && oC.name === zC,
        FC = qC && null !== (ZC = oC.cosmetics) && void 0 !== ZC ? ZC : void 0,
        WC = fC && FC ? {
          ...fC,
          cosmetics: FC
        } : fC;
      return {
        playerSocialPreview: null !== WC && void 0 !== WC ? WC : {
          isError: !1,
          name: zC,
          ranks: qC ? [...oC.ranks] : [],
          cosmetics: null !== FC && void 0 !== FC ? FC : {},
          nameColour: null !== (nC = null === FC || void 0 === FC ? void 0 : FC.nameColour) && void 0 !== nC ? nC : QC.d,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== fC
      }
    }
  },
  36620: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => WC
    });
    var QC = ZC(48),
      wC = ZC(1002),
      bC = ZC.n(wC),
      nC = ZC(1593),
      fC = ZC(1388),
      oC = ZC(1295),
      qC = ZC(1013),
      FC = ZC(1056);

    function WC(CC) {
      let {
        label: zC,
        icon: ZC,
        placeholder: wC,
        onSubmit: WC
      } = CC;
      const NC = (0, QC.useRef)(null),
        [MC, gC] = (0, QC.useState)(""),
        [SC, pC] = (0, QC.useState)("Enter"),
        [PC, GC] = (0, QC.useState)(null);
      (0, QC.useEffect)((() => {
        if ("Success" !== SC && "Error" !== SC) return;
        const CC = setTimeout((() => {
          "Success" === SC && NC.current && (NC.current.value = "", gC("")), pC("Enter")
        }), "Success" === SC ? 1e3 : 4e3);
        return () => {
          clearTimeout(CC)
        }
      }), [SC]);
      const RC = () => {
        const CC = MC.trim();
        "" !== CC && "Enter" === SC && (pC("Loading"), WC(CC).then((CC => {
          NC.current && ("error" in CC ? null === CC.error ? pC("Enter") : (GC(CC.error), pC("Error")) : pC("Success"))
        })))
      };
      return (0, FC.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: CC => {
          CC.target === NC.current && "Escape" !== CC.key && CC.stopPropagation()
        },
        children: [(0, FC.jsxs)("div", {
          className: bC()("AddFriendBodyOverlay", `AddFriendBodyOverlay${SC}`),
          children: ["Loading" === SC && (0, FC.jsx)(oC.d, {}), "Success" === SC && (0, FC.jsx)(qC.c, {
            name: "check"
          }), "Error" === SC && PC]
        }), (0, FC.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, FC.jsx)(nC.c, {
            className: "PlayerSearchInput",
            domRef: NC,
            maxLength: 32,
            placeholderText: wC,
            ariaLabel: wC,
            stopPropagation: !1,
            onValueChange: CC => {
              gC(CC)
            },
            onEnter: RC
          }), (0, FC.jsxs)(fC.g, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== SC || "" === MC.trim(),
            onClick: RC,
            children: [(0, FC.jsx)(qC.c, {
              name: ZC
            }), " ", zC]
          })]
        })]
      })
    }
  },
  36598: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => WC
    });
    var QC = ZC(48),
      wC = ZC(1002),
      bC = ZC.n(wC),
      nC = ZC(1143),
      fC = ZC(1013),
      oC = ZC(1056);
    const qC = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      FC = ["unlisted", "public", "whitelist", "private"];

    function WC(CC) {
      let {
        visibility: zC,
        onPick: ZC
      } = CC;
      const {
        t: wC
      } = (0, nC.y)(), WC = (0, QC.useRef)([]);
      return (0, oC.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": wC("worldSocial:whoCanJoin"),
        children: FC.map(((CC, QC) => {
          const nC = CC === zC;
          return (0, oC.jsxs)("button", {
            ref: CC => {
              WC.current[QC] = CC
            },
            type: "button",
            className: bC()("WorldSocialTile", {
              WorldSocialTileSelected: nC
            }),
            "aria-pressed": nC,
            tabIndex: nC ? 0 : -1,
            onKeyDown: CC => {
              ((CC, zC) => {
                const ZC = "ArrowRight" === CC.key || "ArrowDown" === CC.key ? 1 : "ArrowLeft" === CC.key || "ArrowUp" === CC.key ? -1 : 0;
                var QC;
                0 !== ZC && (CC.preventDefault(), null === (QC = WC.current[(zC + ZC + FC.length) % FC.length]) || void 0 === QC || QC.focus())
              })(CC, QC)
            },
            onClick: () => {
              ZC(CC)
            },
            children: [(0, oC.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, oC.jsx)(fC.c, {
                name: qC[CC]
              })
            }), (0, oC.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, oC.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: wC(`worldSocial:${CC}`)
              }), (0, oC.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: wC(`worldSocial:${CC}Description`)
              })]
            })]
          }, CC)
        }))
      })
    }
  },
  36612: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC
    });
    var QC = ZC(1143),
      wC = ZC(2633),
      bC = ZC(4300),
      nC = ZC(1056);

    function fC(CC) {
      let {
        ZN: zC,
        children: ZC,
        ...fC
      } = CC;
      const {
        t: oC
      } = (0, QC.y)();
      return (0, nC.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          zC.onChange(!zC.on)
        },
        children: (0, nC.jsx)(wC.f, {
          ...fC,
          opensProfileCard: !1,
          children: (0, nC.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: CC => {
              CC.stopPropagation()
            },
            children: [ZC, (0, nC.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, nC.jsx)(bC.e, {
                checked: zC.on,
                disabled: !1,
                ariaLabel: oC("worldSocial:letJoin", {
                  playerName: fC.playerSocialPreview.name
                }),
                onChange: CC => {
                  zC.onChange(CC.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36590: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => gC
    });
    var QC = ZC(48),
      wC = ZC(1143),
      bC = ZC(1774),
      nC = ZC(77),
      fC = ZC(20),
      oC = ZC(1418),
      qC = ZC(2659),
      FC = ZC(34056),
      WC = ZC(1388),
      NC = ZC(1013),
      MC = ZC(1056);

    function gC(CC) {
      let {
        worldCode: zC,
        message: ZC
      } = CC;
      const {
        t: gC
      } = (0, wC.y)(), {
        isTouchScreen: SC
      } = (0, fC.k)(["isTouchScreen"]), pC = nC.featureFlags.canUseInviteLinks, PC = (0, FC.e)(pC && null === ZC), [GC, RC] = (0, qC.i)(), AC = (0, QC.useRef)(null);
      if (null !== ZC) return (0, MC.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, MC.jsx)(NC.c, {
          name: "lock"
        }), (0, MC.jsx)("span", {
          children: ZC
        })]
      });
      const xC = pC ? PC : zC,
        JC = SC && pC && (0, qC.c)();
      return (0, MC.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!pC && (0, MC.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: gC("worldSocial:worldCode")
        }), (0, MC.jsx)("input", {
          ref: AC,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== xC && void 0 !== xC ? xC : "",
          "aria-label": gC(pC ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: CC => {
            CC.currentTarget.select()
          }
        }), (0, MC.jsxs)(WC.g, {
          className: "WorldSocialCopy",
          disabled: null === xC,
          onClick: () => {
            null !== xC && (0, qC.f)(xC, {
              useShareSheet: JC,
              onOutcome: CC => {
                if ((0, oC.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== CC || pC ? CC : "code"
                  }), "copied" === CC) RC();
                else if ("failed" === CC) {
                  var zC;
                  null === (zC = AC.current) || void 0 === zC || zC.focus(), bC.d.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, MC.jsx)(NC.c, {
            name: GC ? "check" : JC ? "up-from-bracket" : "copy"
          }), " ", gC(GC ? "general:copied" : JC ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36605: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => MC,
      i: () => NC,
      l: () => WC
    });
    var QC = ZC(583),
      wC = ZC(1143),
      bC = ZC(1559),
      nC = ZC(2633),
      fC = ZC(2575),
      oC = ZC(1388),
      qC = ZC(36612),
      FC = ZC(1056);

    function WC(CC, zC) {
      var ZC;
      return {
        isError: !1,
        name: CC,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== zC && void 0 !== zC ? zC : {},
        nameColour: null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.nameColour) && void 0 !== ZC ? ZC : QC.d,
        location: {
          status: "offline"
        }
      }
    }

    function NC(CC) {
      let {
        player: zC,
        isFriend: ZC = !1,
        status: QC,
        showLocation: oC = void 0 === QC,
        ZN: WC,
        onSendFriendRequest: NC,
        actions: MC,
        zIndex: gC
      } = CC;
      const {
        t: SC
      } = (0, wC.y)();
      let pC = QC;
      null !== WC && void 0 !== WC && WC.on && (pC = (0, FC.jsxs)(FC.Fragment, {
        children: [null !== QC && void 0 !== QC ? QC : (0, FC.jsx)(fC.b, {
          socialPreview: zC
        }), (0, FC.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", SC("worldSocial:canJoin")]
        })]
      }));
      const PC = {
        playerSocialPreview: zC,
        isFriend: ZC,
        hideFriendBadge: !0,
        onFriendRemoved: ZC ? CC => {
          bC.d.removeFriendFromState(CC)
        } : void 0,
        status: pC,
        showLocation: oC,
        onSendFriendRequest: NC,
        zIndex: gC
      };
      return WC ? (0, FC.jsx)(qC.d, {
        ...PC,
        ZN: WC,
        children: MC
      }) : (0, FC.jsx)(nC.f, {
        ...PC,
        opensProfileCard: !1,
        children: MC || void 0
      })
    }

    function MC(CC) {
      let {
        row: zC,
        ZN: ZC,
        canInvite: QC,
        invited: bC,
        onInvite: nC,
        zIndex: fC
      } = CC;
      const {
        t: qC
      } = (0, wC.y)(), WC = "online" === zC.place ? oC.g : oC.i;
      return (0, FC.jsx)(NC, {
        player: zC.friend,
        isFriend: !0,
        status: "here" === zC.place ? qC("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        ZN: ZC,
        zIndex: fC,
        actions: QC && (0, FC.jsx)(WC, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: bC,
          onClick: nC,
          ariaLabel: `${qC("worldSocial:invite")} ${zC.friend.name}`,
          children: qC(bC ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36584: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => oC,
      i: () => nC,
      j: () => qC
    });
    var QC = ZC(48),
      wC = ZC(4525),
      bC = ZC(1774);

    function nC(CC) {
      const zC = {
        lobbyName: CC,
        answer: null,
        response: wC.d.getSocialSettings(CC)
      };
      return zC.response.then((CC => {
        zC.answer = CC
      })), zC
    }
    const fC = new Map;

    function oC(CC) {
      fC.set(CC.lobbyName, CC)
    }

    function qC(CC) {
      const [zC] = (0, QC.useState)((() => function(CC) {
        var zC;
        const ZC = null !== (zC = fC.get(CC)) && void 0 !== zC ? zC : null;
        return null !== ZC && void 0 !== ZC && ZC.answer && "error" in ZC.answer ? null : ZC
      }(CC))), [ZC, nC] = (0, QC.useState)((() => null !== zC && void 0 !== zC && zC.answer && "settings" in zC.answer ? zC.answer.settings : null)), [oC, qC] = (0, QC.useState)(!0), [FC, WC] = (0, QC.useState)(null !== ZC), NC = (0, QC.useRef)(ZC);
      NC.current = ZC;
      const MC = (0, QC.useRef)(0),
        gC = (0, QC.useRef)(0),
        SC = (0, QC.useRef)(!1),
        pC = (0, QC.useRef)(!0),
        PC = (0, QC.useCallback)((async zC => {
          const ZC = ++MC.current,
            QC = await (null !== zC && void 0 !== zC ? zC : wC.d.getSocialSettings(CC));
          pC.current && ZC === MC.current && (WC(!0), qC(!1), "error" in QC || nC(QC.settings))
        }), [CC]),
        GC = (0, QC.useCallback)((() => {
          qC(!0), PC()
        }), [PC]),
        RC = (0, QC.useCallback)((() => {
          gC.current > 0 ? SC.current = !0 : PC()
        }), [PC]);
      (0, QC.useEffect)((() => (pC.current = !0, fC.delete(CC), qC(!0), PC(null === zC || void 0 === zC ? void 0 : zC.response), () => {
        pC.current = !1
      })), [PC, CC, zC]);
      const AC = CC => {
        MC.current++, qC(!1), NC.current = CC, nC(CC)
      };
      return {
        settings: ZC,
        loading: oC,
        answered: FC,
        retry: GC,
        refresh: RC,
        change: async function(zC, ZC) {
          let {
            quiet: QC = !1,
            onAnswer: nC
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const fC = NC.current;
          if (null === fC) return !1;
          AC(ZC(fC)), gC.current > 0 && (SC.current = !0), gC.current++;
          const oC = await wC.d.setSocialSettings(CC, zC);
          gC.current--;
          const qC = !("error" in oC);
          if (!pC.current) return qC;
          if (null === nC || void 0 === nC || nC(oC), QC);
          else if ("error" in oC) bC.d.showMessage({
            translationKey: oC.error
          });
          else
            for (const CC of oC.notFound) bC.d.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: CC
              }
            });
          if (gC.current > 0) return qC;
          const FC = SC.current;
          return SC.current = !1, !FC && "settings" in oC ? AC(oC.settings) : (FC || AC(fC), PC()), qC
        }
      }
    }
  },
  36627: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      d: () => bC
    });
    var QC = ZC(134);
    const wC = new Map;

    function bC(CC, zC) {
      var ZC;
      const QC = null !== (ZC = wC.get(CC)) && void 0 !== ZC ? ZC : new Map;
      QC.set(zC, Date.now()), wC.set(CC, QC)
    }

    function nC(CC) {
      const zC = wC.get(CC);
      if (!zC) return [];
      const ZC = Date.now();
      for (const [wC, bC] of zC) ZC - bC >= QC.m && zC.delete(wC);
      return [...zC.keys()]
    }
  },
  36588: (CC, zC, ZC) => {
    function QC(CC, zC) {
      const ZC = zC.toLowerCase();
      for (const QC of CC)
        if (QC.toLowerCase() === ZC) return !0;
      return !1
    }

    function wC(CC, zC, ZC) {
      const wC = [],
        bC = [],
        nC = [];
      for (const fC of CC) !fC.isError && fC.name && ("inGame" === fC.location.status && fC.location.inLobbyName === zC || QC(ZC, fC.name) ? bC.push({
        friend: fC,
        place: "here"
      }) : "offline" === fC.location.status ? nC.push({
        friend: fC,
        place: "offline"
      }) : wC.push({
        friend: fC,
        place: "online"
      }));
      return [...wC, ...bC, ...nC]
    }

    function bC(CC, zC, ZC) {
      const wC = [],
        bC = CC.flatMap((CC => "here" === CC.place ? [CC.friend.name] : []));
      for (const nC of [...bC, ...zC]) QC(wC, nC) || QC(ZC, nC) || wC.push(nC);
      return wC
    }

    function nC(CC, zC) {
      return null === CC || void 0 === CC || !CC.canManage || QC(CC.whitelist, zC) ? "none" : "whitelist" === CC.visibility ? "required" : "quiet"
    }

    function fC(CC) {
      if (null === CC) return !0;
      const {
        visibility: zC
      } = CC;
      return "public" === zC || "unlisted" === zC || "whitelist" === zC && CC.canManage
    }

    function oC(CC, zC, ZC) {
      if (ZC) {
        const ZC = zC.filter((zC => !QC(CC.whitelist, zC)));
        return {
          ...CC,
          whitelist: [...CC.whitelist, ...ZC]
        }
      }
      return {
        ...CC,
        whitelist: CC.whitelist.filter((CC => !QC(zC, CC)))
      }
    }

    function qC(CC, zC) {
      const ZC = [];
      for (let QC = 0; QC < CC.length; QC += zC) ZC.push(CC.slice(QC, QC + zC));
      return ZC
    }
    ZC.d(zC, {
      d: () => fC,
      f: () => bC,
      i: () => wC,
      k: () => QC,
      n: () => qC,
      q: () => nC,
      s: () => oC
    })
  },
  36882: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(48),
      wC = ZC(2369);

    function bC() {
      const CC = (0, wC.h)("lobbyLeaderboardInfo");
      return (0, QC.useMemo)((() => function(CC) {
        if (null === CC) return null;
        const zC = Object.entries(CC),
          ZC = zC.filter((CC => {
            let [, zC] = CC;
            return void 0 !== zC
          }));
        if (ZC.length === zC.length) return CC;
        const QC = Object.fromEntries(ZC),
          wC = Object.keys(CC).filter((CC => !Object.hasOwn(QC, CC)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${wC.join(", ")}`), QC
      }(CC)), [CC])
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);