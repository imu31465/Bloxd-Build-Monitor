export const id = 220;
export const ids = [220];
export const modules = {
  40995: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      LobbyManageView: () => Ez
    });
    var pD = wD(58),
      sD = wD(1472),
      KD = wD(36992),
      rD = wD(2421),
      LD = wD(2423),
      cD = wD(2402),
      gD = wD(36557);

    function RD() {
      const [DD, zD] = (0, pD.useState)(new Map);
      return {
        get: zD => DD.get(zD),
        hold: (0, pD.useCallback)(((DD, wD, pD) => {
          zD((zD => new Map(zD).set(DD, wD))), pD.then((() => {
            zD((zD => {
              const wD = new Map(zD);
              return wD.delete(DD), wD
            }))
          }))
        }), [])
      }
    }
    var AD = wD(1044),
      UD = wD.n(AD),
      fD = wD(1200),
      ID = wD(1057),
      BD = wD(1346),
      GD = wD(2657),
      hD = wD(5049),
      nD = wD(3444);
    var MD = wD(1973),
      OD = wD(1447);

    function JD(DD, zD, wD) {
      const pD = DD.filter((DD => DD.name !== zD)),
        sD = pD.filter((DD => "none" === DD.role)).sort(((DD, zD) => zD.at - DD.at)),
        KD = pD.filter((DD => "none" !== DD.role)).sort(((DD, zD) => wD.indexOf(DD.role) - wD.indexOf(zD.role) || zD.at - DD.at));
      return [...DD.some((DD => DD.name === zD)) && null !== zD ? [zD] : [], ...[...sD, ...KD].map((DD => DD.name))]
    }

    function ED(DD, zD) {
      const wD = DD.banned.map((DD => DD.name)),
        pD = new Set(wD);
      return {
        here: JD(DD.here, zD, DD.roles.map((DD => DD.role))),
        away: DD.away.filter((DD => !pD.has(DD.name))).map((DD => DD.name)),
        banned: wD
      }
    }

    function QD(DD, zD) {
      const wD = DD.here.find((DD => DD.name === zD));
      if (wD) return {
        section: "here",
        player: wD
      };
      const pD = DD.banned.find((DD => DD.name === zD));
      if (pD) return {
        section: "banned",
        bannedAt: pD.at
      };
      const sD = DD.away.find((DD => DD.name === zD));
      return sD ? {
        section: "away",
        player: sD
      } : {
        section: "gone"
      }
    }
    const XD = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var VD = wD(2649),
      PD = wD(36546),
      CD = wD(36690),
      xD = wD(3115),
      TD = wD(351);

    function bD(DD, zD, wD) {
      return zD.map((zD => {
        if ("string" === typeof zD) return zD;
        const pD = "str" in zD ? zD.str : zD;
        return "string" === typeof pD ? pD : "entityName" in pD ? pD.entityName : "translationKey" in pD ? DD(pD.translationKey, (0, fD.r)(pD.params, wD)) : ""
      })).join("")
    }

    function jD(DD, zD, wD, pD, sD) {
      return sD - pD < 6e4 ? DD(`${wD}JustNow`) : DD(wD, {
        time: (0, TD.fb)((0, fD.n)(zD, wD), pD, sD)
      })
    }
    var dD = wD(1895),
      SD = wD(1687),
      iD = wD(1096);

    function lD(DD) {
      let {
        status: zD
      } = DD;
      return (0, iD.jsx)("span", {
        className: UD()("LobbyManageStatus", {
          LobbyManageStatusRefused: !zD.ok
        }),
        children: (0, iD.jsx)(dD.e, {
          text: zD.text
        })
      })
    }

    function WD(DD) {
      let {
        names: zD,
        cap: wD,
        filterFrom: sD,
        moreLabel: KD,
        reveal: rD = null,
        renderRow: LD
      } = DD;
      const {
        t: cD
      } = (0, fD.E)(), [gD, RD] = (0, pD.useState)(!1), [AD, UD] = (0, pD.useState)(""), BD = gD || null !== rD && zD.indexOf(rD) >= wD, hD = (BD || zD.length <= wD) && null !== sD && zD.length > sD, nD = AD.trim().toLowerCase();
      let MD = BD ? zD : zD.slice(0, wD);
      return hD && "" !== nD && (MD = MD.filter((DD => DD.toLowerCase().includes(nD)))), (0, iD.jsxs)(iD.Fragment, {
        children: [hD && (0, iD.jsx)(SD.e, {
          className: "LobbyManageFilter",
          placeholderText: cD("lobbyManage:findName"),
          ariaLabel: cD("lobbyManage:findName"),
          onValueChange: DD => {
            UD(DD)
          }
        }), MD.length > 0 && (0, iD.jsx)("div", {
          className: "PlayerRows",
          children: MD.map(((DD, zD) => LD(DD, MD.length - zD)))
        }), !BD && zD.length > wD && (0, iD.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, iD.jsx)(GD.e, {
            label: (0, iD.jsxs)(iD.Fragment, {
              children: [KD, " ", (0, iD.jsx)(ID.e, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              RD(!0)
            }
          })
        })]
      })
    }

    function ND(DD) {
      let {
        value: zD,
        placeholder: wD,
        ariaLabel: sD,
        maxLength: KD,
        wide: rD = !1,
        onSave: LD
      } = DD;
      const cD = (0, pD.useRef)(null),
        [gD, RD] = (0, pD.useState)(0),
        AD = (0, pD.useRef)(!0),
        fD = (0, pD.useRef)(null),
        ID = (0, pD.useRef)({
          value: zD,
          onSave: LD
        });
      ID.current = {
        value: zD,
        onSave: LD
      };
      const BD = () => {
        const DD = fD.current;
        fD.current = null, null !== DD && DD !== ID.current.value && ID.current.onSave(DD).then((() => {
          AD.current && RD((DD => DD + 1))
        }))
      };
      return (0, pD.useEffect)((() => {
        null === fD.current && cD.current && (cD.current.value = zD)
      }), [zD, gD]), (0, pD.useEffect)((() => () => {
        AD.current = !1, BD()
      }), []), (0, iD.jsx)("div", {
        className: UD()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: rD
        }),
        onBlur: BD,
        children: (0, iD.jsx)(SD.e, {
          domRef: cD,
          defaultValue: zD,
          placeholderText: wD,
          ariaLabel: sD,
          maxLength: KD,
          onValueChange: DD => {
            fD.current = DD
          },
          onEnter: BD
        })
      })
    }
    const ZD = ["mod", "coOwner"],
      yD = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function kD(DD) {
      var zD, wD, KD;
      let {
        name: rD,
        place: LD,
        openedIn: cD,
        isYou: gD,
        manage: AD,
        hiddenNames: UD,
        zIndex: BD
      } = DD;
      const {
        t: GD,
        selectedLanguage: hD
      } = (0, fD.E)(), [nD, MD] = (0, pD.useState)(null), {
        state: JD
      } = AD, ED = `player:${rD}`, QD = function(DD, zD) {
        if ("banned" === DD.section) return {
          ...XD,
          unban: !0
        };
        if ("gone" === DD.section) return XD;
        const {
          player: wD
        } = DD, pD = "here" === DD.section, sD = pD || "none" !== wD.role ? wD.can.roles : [];
        return {
          gamemode: pD && zD && null !== wD.gamemode && wD.can.gamemode,
          roles: sD,
          fixedRole: 0 === sD.length && "none" !== wD.role ? wD.role : null,
          kick: pD && wD.can.kick,
          ban: wD.can.ban,
          unban: !1
        }
      }(LD, null !== JD.gamemodes), TD = AD.statusOf(ED), dD = AD.isPending(ED), SD = RD(), WD = Date.now(), ND = DD => {
        var zD, wD;
        return null !== (zD = null === (wD = (DD => JD.roles.find((zD => zD.role === DD)))(DD)) || void 0 === wD ? void 0 : wD.label) && void 0 !== zD ? zD : DD
      }, kD = DD => {
        const zD = yD[DD];
        return void 0 === zD ? void 0 : GD(zD)
      }, mD = "here" === LD.section || "away" === LD.section ? LD.player : null, eD = "here" === LD.section ? LD.player.id : null, {
        playerSocialPreview: oD,
        isFriend: aD
      } = null === eD ? {
        playerSocialPreview: (0, CD.i)(rD, null),
        isFriend: !1
      } : (0, PD.d)(eD, rD), uD = function() {
        AD.send(...arguments)
      }, vD = (DD, zD) => {
        SD.hold("role", DD, AD.send({
          type: "setRole",
          name: rD,
          role: DD
        }, ED, zD))
      };
      let tD = null;
      if ("ban" === (null === nD || void 0 === nD ? void 0 : nD.kind)) tD = GD("lobbyManageEntry:banConfirm", {
        playerName: rD
      });
      else if ("role" === (null === nD || void 0 === nD ? void 0 : nD.kind)) {
        var FD;
        tD = `${GD("lobbyManage:roleConfirm",{playerName:rD,role:ND(nD.role)})} ${null!==(FD=kD(nD.role))&&void 0!==FD?FD:""}`
      } else if (TD) tD = (0, iD.jsx)(lD, {
        status: TD
      });
      else if (gD) tD = GD("lobbyManage:you");
      else if ("here" === LD.section) "none" === LD.player.role && WD - LD.player.at < 6e5 && (tD = jD(GD, hD.code, "lobbyManage:joinedAgo", LD.player.at, WD));
      else if ("away" === LD.section) {
        if (LD.player.at > 0) {
          const DD = "kicked" === LD.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          tD = jD(GD, hD.code, DD, LD.player.at, WD)
        }
      } else "banned" === LD.section ? null !== LD.bannedAt && (tD = jD(GD, hD.code, "lobbyManage:bannedAgo", LD.bannedAt, WD)) : "banned" === cD && (tD = GD("lobbyManageEntry:unbanned"));
      return (0, iD.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": rD,
        children: (0, iD.jsxs)(VD.g, {
          playerSocialPreview: oD,
          isFriend: aD,
          status: tD,
          opensProfileCard: !gD && (0, PD.g)(!0, rD, UD),
          zIndex: BD,
          children: [null !== nD && (0, iD.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === nD.kind && (0, iD.jsxs)(OD.R, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                MD(null), uD({
                  type: "ban",
                  name: rD
                }, ED)
              },
              children: [(0, iD.jsx)(ID.e, {
                name: "gavel"
              }), (0, iD.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: GD("lobbyManageEntry:ban")
              })]
            }), "role" === nD.kind && (0, iD.jsx)(OD.f, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: nD.role
              },
              onClick: () => {
                MD(null), vD(nD.role)
              },
              children: GD("lobbyManage:makeRole", {
                role: ND(nD.role)
              })
            }), (0, iD.jsx)(OD.g, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                MD(null)
              },
              children: GD("general:cancel")
            })]
          }), null === nD && (0, iD.jsxs)(iD.Fragment, {
            children: [(0, iD.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [QD.gamemode && null !== mD && (0, iD.jsx)(xD.c, {
                options: (null !== (zD = JD.gamemodes) && void 0 !== zD ? zD : []).map((DD => ({
                  value: DD.value,
                  label: bD(GD, DD.label, UD)
                }))),
                value: null !== (wD = SD.get("gamemode")) && void 0 !== wD ? wD : mD.gamemode,
                disabled: dD,
                onChange: DD => {
                  (0, sD.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: DD.value
                  }), SD.hold("gamemode", DD.value, AD.send({
                    type: "setGamemode",
                    name: rD,
                    gamemode: DD.value
                  }, ED))
                }
              }), QD.roles.length > 0 && null !== mD && (0, iD.jsx)(xD.c, {
                options: [...JD.roles].reverse().filter((DD => QD.roles.includes(DD.role))).map((DD => ({
                  value: DD.role,
                  label: DD.label
                }))),
                value: null !== (KD = SD.get("role")) && void 0 !== KD ? KD : mD.role,
                disabled: dD,
                onChange: DD => {
                  var zD;
                  (zD = DD.value) !== (null === mD || void 0 === mD ? void 0 : mD.role) && (ZD.includes(zD) ? MD({
                    kind: "role",
                    role: zD
                  }) : ((0, sD.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: zD
                  }), vD(zD, kD(zD))))
                }
              }), null !== QD.fixedRole && (0, iD.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: ND(QD.fixedRole)
              })]
            }), (0, iD.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [QD.kick && (0, iD.jsxs)(OD.g, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${GD("lobbyManageEntry:kick")} ${rD}`,
                disabled: dD,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  uD({
                    type: "kick",
                    name: rD
                  }, ED)
                },
                children: [(0, iD.jsx)(ID.e, {
                  name: "person-falling-burst"
                }), (0, iD.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: GD("lobbyManageEntry:kick")
                })]
              }), QD.ban && (0, iD.jsxs)(OD.T, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${GD("lobbyManageEntry:ban")} ${rD}`,
                disabled: dD,
                padDestructive: !0,
                onClick: () => {
                  MD({
                    kind: "ban"
                  })
                },
                children: [(0, iD.jsx)(ID.e, {
                  name: "gavel"
                }), (0, iD.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: GD("lobbyManageEntry:ban")
                })]
              }), QD.unban && (0, iD.jsxs)(OD.g, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${GD("lobbyManageEntry:unban")} ${rD}`,
                disabled: dD,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  uD({
                    type: "unban",
                    name: rD
                  }, ED)
                },
                children: [(0, iD.jsx)(ID.e, {
                  name: "user-unlock"
                }), (0, iD.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: GD("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function mD(DD) {
      var zD, wD, sD, KD;
      let {
        manage: rD,
        focusRequest: LD,
        onFocused: cD
      } = DD;
      const {
        t: gD
      } = (0, fD.E)(), RD = (0, MD.i)("players"), AD = (0, MD.i)("hiddenPlayerNames"), UD = (0, pD.useRef)(null), {
        state: BD
      } = rD, hD = null === RD.localId ? null : null !== (zD = null === (wD = RD.byId[RD.localId]) || void 0 === wD ? void 0 : wD.name) && void 0 !== zD ? zD : null, [nD] = (0, pD.useState)((() => ED(BD, hD))), JD = function(DD, zD, wD) {
        const pD = new Set([...DD.here, ...DD.away, ...DD.banned]),
          sD = ED(zD, wD),
          KD = zD => {
            const wD = sD[zD].filter((DD => !pD.has(DD)));
            for (const DD of wD) pD.add(DD);
            return [...DD[zD], ...wD]
          };
        return {
          here: KD("here"),
          away: KD("away"),
          banned: KD("banned")
        }
      }(nD, BD, hD), [XD, VD] = (0, pD.useState)(!1), PD = function(DD, zD) {
        return DD.here.filter((DD => DD.name !== zD && "none" === DD.role && DD.can.kick)).length
      }(BD, hD), CD = rD.statusOf("kickAll");
      (0, pD.useEffect)((() => {
        var DD, zD;
        if (null === LD) return;
        const wD = null === (DD = UD.current) || void 0 === DD ? void 0 : DD.querySelector(`[data-lobby-manage-row="${CSS.escape(LD.name)}"]`);
        null === wD || void 0 === wD || wD.scrollIntoView({
          block: "center"
        }), null === wD || void 0 === wD || null === (zD = wD.querySelector(".ProfilePreview")) || void 0 === zD || zD.focus({
          preventScroll: !0
        }), cD(LD.seq)
      }), [null === LD || void 0 === LD ? void 0 : LD.seq]);
      const xD = DD => (zD, wD) => (0, iD.jsx)(kD, {
        name: zD,
        place: QD(BD, zD),
        openedIn: DD,
        isYou: zD === hD,
        manage: rD,
        hiddenNames: AD,
        zIndex: wD
      }, zD);
      return (0, iD.jsxs)("div", {
        ref: UD,
        className: "LobbyManagePage",
        children: [JD.here.length > 0 && (0, iD.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, iD.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, iD.jsx)(GD.e, {
              label: gD("lobbyManage:here"),
              meta: BD.here.length
            }), PD >= 2 && !XD && (0, iD.jsxs)(OD.T, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: rD.isPending("kickAll"),
              onClick: () => {
                VD(!0)
              },
              children: [(0, iD.jsx)(ID.e, {
                name: "person-falling-burst"
              }), " ", gD("lobbyManage:kickAll")]
            })]
          }), XD && PD >= 2 && (0, iD.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, iD.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: gD("lobbyManage:kickAllConfirm", {
                count: PD
              })
            }), (0, iD.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, iD.jsx)(OD.R, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  VD(!1), rD.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: gD("lobbyManage:kickAll")
              }), (0, iD.jsx)(OD.g, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  VD(!1)
                },
                children: gD("general:cancel")
              })]
            })]
          }), CD && (0, iD.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, iD.jsx)(lD, {
              status: CD
            })
          }), (0, iD.jsx)(WD, {
            names: JD.here,
            cap: JD.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: xD("here")
          })]
        }), JD.away.length > 0 && (0, iD.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, iD.jsx)(GD.e, {
            label: gD("lobbyManage:notHere"),
            meta: JD.away.length
          }), (0, iD.jsx)(WD, {
            names: JD.away,
            cap: 5,
            filterFrom: null,
            moreLabel: gD("lobbyManage:allCount", {
              count: JD.away.length
            }),
            reveal: null !== (sD = null === LD || void 0 === LD ? void 0 : LD.name) && void 0 !== sD ? sD : null,
            renderRow: xD("away")
          })]
        }), JD.banned.length > 0 && (0, iD.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, iD.jsx)(GD.e, {
            label: gD("lobbyManage:banned"),
            meta: JD.banned.length
          }), (0, iD.jsx)(WD, {
            names: JD.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: gD("lobbyManage:allCount", {
              count: JD.banned.length
            }),
            reveal: null !== (KD = null === LD || void 0 === LD ? void 0 : LD.name) && void 0 !== KD ? KD : null,
            renderRow: xD("banned")
          })]
        })]
      })
    }
    var eD = wD(4657),
      oD = wD(1657),
      aD = wD(36669),
      uD = wD(36684),
      vD = wD(36680),
      tD = wD(36672),
      FD = wD(36707),
      YD = wD(36698),
      HD = wD(36701);

    function qD(DD) {
      const zD = new Set;
      for (const wD of DD) zD.add(wD.toLowerCase());
      return zD
    }

    function Dz(DD) {
      var zD, wD;
      let {
        state: sD,
        lobbyName: KD,
        listed: rD,
        isListed: LD,
        QJ: cD,
        ZJ: gD,
        statusOf: RD
      } = DD;
      const {
        t: AD,
        selectedLanguage: UD
      } = (0, fD.E)(), ID = (0, oD.o)(), BD = (0, MD.i)("players"), hD = null === BD.localId ? null : null !== (zD = null === (wD = BD.byId[BD.localId]) || void 0 === wD ? void 0 : wD.name) && void 0 !== zD ? zD : null, nD = (0, pD.useMemo)((() => (0, tD.h)(ID.friends, KD, sD.here.map((DD => DD.name)))), [ID.friends, KD, sD.here]), OD = new Map(nD.map((DD => [DD.friend.name.toLowerCase(), DD]))), JD = function(DD) {
        let {
          refused: zD,
          listed: wD,
          here: pD,
          friends: sD,
          excluded: KD
        } = DD;
        const rD = qD(KD),
          LD = DD => DD.filter((DD => {
            const zD = DD.toLowerCase();
            return !rD.has(zD) && (rD.add(zD), !0)
          }));
        return {
          added: [],
          refused: LD(zD),
          listed: LD(wD),
          suggested: LD([...pD, ...sD])
        }
      }({
        refused: sD.refused.map((DD => DD.name)),
        listed: rD,
        here: sD.here.map((DD => DD.name)),
        friends: nD.flatMap((DD => "here" === DD.place ? [] : [DD.friend.name])),
        excluded: [...null === hD ? [] : [hD], ...[...sD.here, ...sD.away].flatMap((DD => "none" === DD.role || (0, tD.l)(rD, DD.name) ? [] : [DD.name]))]
      }), [ED] = (0, pD.useState)(JD), [QD, XD] = (0, pD.useState)([]), VD = function(DD, zD, wD) {
        const pD = qD(wD),
          sD = qD([...wD, ...DD.refused, ...DD.listed, ...DD.suggested]),
          KD = wD => [...DD[wD].filter((DD => !pD.has(DD.toLowerCase()))), ...zD[wD].filter((DD => {
            const zD = DD.toLowerCase();
            return !sD.has(zD) && (sD.add(zD), !0)
          }))];
        return {
          added: [...wD],
          refused: KD("refused"),
          listed: KD("listed"),
          suggested: KD("suggested")
        }
      }(ED, JD, QD), xD = (DD, zD) => {
        var wD, pD;
        const KD = DD.toLowerCase(),
          rD = OD.get(KD),
          gD = sD.here.find((DD => DD.name.toLowerCase() === KD)),
          fD = sD.refused.find((DD => DD.name.toLowerCase() === KD)),
          ID = null !== (wD = null === RD || void 0 === RD ? void 0 : RD(DD)) && void 0 !== wD ? wD : null;
        let BD = null;
        ID ? BD = (0, iD.jsx)(lD, {
          status: ID
        }) : fD ? BD = jD(AD, UD.code, "lobbyManage:triedToJoinAgo", fD.at, Date.now()) : rD && gD ? BD = AD("lobbyManage:friendHere") : rD ? BD = "online" === rD.place ? AD("lobbyManage:friendOnline") : AD("lobbyManage:friend") : gD && (BD = AD("lobbyManage:hereStatus"));
        let GD = null !== (pD = null === rD || void 0 === rD ? void 0 : rD.friend) && void 0 !== pD ? pD : (0, CD.i)(DD, null);
        return !rD && null !== gD && void 0 !== gD && gD.id && (GD = (0, PD.d)(gD.id, gD.name).playerSocialPreview), (0, iD.jsx)(YD.e, {
          playerSocialPreview: GD,
          isFriend: void 0 !== rD,
          hideFriendBadge: !0,
          status: BD,
          zIndex: zD,
          DU: {
            on: LD(DD),
            onChange: zD => {
              cD(DD, zD)
            }
          }
        }, KD)
      }, TD = [...VD.added, ...VD.refused];
      return (0, iD.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, iD.jsx)(GD.e, {
          label: AD("worldSocial:whitelist"),
          meta: rD.length
        }), (0, iD.jsx)(HD.e, {
          label: AD("lobbyManage:add"),
          icon: "user-check",
          placeholder: AD("socialBar:enterPlayerName"),
          onSubmit: async DD => {
            const zD = await gD(DD);
            return zD.ok && XD((zD => [DD, ...zD])), zD
          }
        }), TD.length > 0 && (0, iD.jsx)("div", {
          className: "PlayerRows",
          children: TD.map(((DD, zD) => xD(DD, TD.length - zD)))
        }), (0, iD.jsx)(WD, {
          names: VD.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: AD("lobbyManage:allOnWhitelist", {
            count: VD.listed.length
          }),
          renderRow: xD
        }), (0, iD.jsx)(WD, {
          names: VD.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: AD("lobbyManage:allCount", {
            count: VD.suggested.length
          }),
          renderRow: xD
        })]
      })
    }

    function zz(DD) {
      let {
        manage: zD,
        listing: wD
      } = DD;
      const {
        t: pD
      } = (0, fD.E)(), KD = (DD, wD) => ((0, sD.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: DD
      }), zD.send({
        type: "setListing",
        field: DD,
        value: wD
      }, `listing:${DD}`)), rD = DD => {
        const wD = zD.statusOf(`listing:${DD}`);
        return wD && !wD.ok && (0, iD.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, iD.jsx)(lD, {
            status: wD
          })
        })
      };
      return (0, iD.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, iD.jsx)(GD.e, {
          label: pD("lobbyManage:inWorldsList")
        }), (0, iD.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, iD.jsx)("div", {
            className: "SliderText",
            children: pD("lobbyManage:description")
          }), (0, iD.jsx)(ND, {
            value: wD.description,
            ariaLabel: pD("lobbyManage:description"),
            wide: !0,
            onSave: DD => KD("description", DD)
          })]
        }), rD("description"), (0, iD.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, iD.jsx)("div", {
            className: "SliderText",
            children: pD("lobbyManage:emojis")
          }), (0, iD.jsx)(ND, {
            value: wD.emojis,
            ariaLabel: pD("lobbyManage:emojis"),
            onSave: DD => KD("emojis", DD)
          })]
        }), rD("emojis"), (0, iD.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, iD.jsx)("div", {
            className: "SliderText",
            children: pD("lobbyManage:colour")
          }), (0, iD.jsx)(wz, {
            value: wD.colour,
            ariaLabel: pD("lobbyManage:colour"),
            onSave: DD => {
              KD("colour", DD)
            }
          })]
        }), rD("colour")]
      })
    }

    function wz(DD) {
      let {
        value: zD,
        ariaLabel: wD,
        onSave: sD
      } = DD;
      const KD = (0, pD.useRef)(null),
        rD = (0, pD.useRef)({
          value: zD,
          onSave: sD
        });
      rD.current = {
        value: zD,
        onSave: sD
      };
      const LD = (0, pD.useRef)(null),
        cD = (0, pD.useRef)(!1),
        gD = DD => {
          cD.current && DD.value !== rD.current.value && DD.value !== LD.current && (LD.current = DD.value, rD.current.onSave(DD.value))
        };
      return (0, pD.useEffect)((() => {
        KD.current && document.activeElement !== KD.current && (KD.current.value = zD)
      }), [zD]), (0, pD.useEffect)((() => {
        const DD = KD.current,
          zD = () => {
            gD(DD)
          };
        return DD.addEventListener("change", zD), () => {
          DD.removeEventListener("change", zD), gD(DD)
        }
      }), []), (0, iD.jsx)("input", {
        ref: KD,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: zD,
        "aria-label": wD,
        onInput: () => {
          cD.current = !0
        },
        onBlur: DD => {
          gD(DD.currentTarget)
        }
      })
    }

    function pz(DD) {
      let {
        manage: zD
      } = DD;
      const {
        lobbyName: wD,
        shownLobbyName: pD
      } = (0, MD.i)("connectedGame");
      return zD.state.you.canSetVisibility && null !== wD ? (0, iD.jsx)(Kz, {
        manage: zD,
        lobbyName: wD,
        worldCode: null !== pD && void 0 !== pD ? pD : wD
      }, wD) : (0, iD.jsx)(rz, {
        manage: zD,
        lobbyName: null !== wD && void 0 !== wD ? wD : ""
      })
    }

    function sz(DD) {
      return DD.map((DD => DD.toLowerCase())).sort().join(",")
    }

    function Kz(DD) {
      var zD;
      let {
        manage: wD,
        lobbyName: KD,
        worldCode: rD
      } = DD;
      const {
        t: LD
      } = (0, fD.E)(), {
        settings: cD,
        loading: gD,
        change: RD,
        retry: AD,
        refresh: UD
      } = (0, aD.h)(KD), ID = (0, oD.o)(), {
        state: hD
      } = wD, nD = (0, pD.useRef)(cD);
      nD.current = cD;
      const MD = sz(null !== (zD = hD.whitelist) && void 0 !== zD ? zD : []),
        JD = null !== hD.whitelist;
      (0, pD.useEffect)((() => {
        const DD = nD.current;
        null !== DD && (DD.visibility !== hD.visibility || JD && sz(DD.whitelist) !== MD) && UD()
      }), [hD.visibility, MD, JD, UD]);
      const ED = async (DD, zD) => {
        let wD = null;
        return await RD(DD, zD, {
          quiet: !0,
          onAnswer: DD => {
            wD = DD
          }
        }), wD
      }, QD = (DD, zD) => {
        null !== zD && "error" in zD && wD.showStatus(DD, {
          ok: !1,
          text: [LD(zD.error)]
        })
      }, XD = async DD => {
        if (null === cD || DD === cD.visibility) return;
        (0, sD.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: DD
        });
        const zD = "whitelist" === DD ? (0, tD.e)((0, tD.h)(ID.friends, KD, hD.here.map((DD => DD.name))), (0, FD.e)(KD), cD.whitelist) : [],
          wD = await ED({
            setVisibility: DD
          }, (zD => ({
            ...zD,
            visibility: DD
          })));
        QD("mode", wD), null === wD || "error" in wD || await (async DD => {
          for (const zD of (0, tD.p)(DD, eD.x))
            if (!await RD({
                whitelistAdd: zD
              }, (DD => (0, tD.w)(DD, zD, !0)))) return !1;
          return !0
        })(zD)
      }, VD = (0, pD.useMemo)((() => {
        var DD;
        if (null === cD) return [];
        const zD = null !== (DD = hD.whitelist) && void 0 !== DD ? DD : [];
        return [...zD.filter((DD => (0, tD.l)(cD.whitelist, DD))), ...cD.whitelist.filter((DD => !(0, tD.l)(zD, DD)))]
      }), [cD, hD.whitelist]), PD = wD.statusOf("mode");
      return (0, iD.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, iD.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, iD.jsx)(GD.e, {
            label: LD("worldSocial:whoCanJoin")
          }), null === cD && gD && (0, iD.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, iD.jsx)(BD.e, {})
          }), null === cD && !gD && (0, iD.jsx)(OD.g, {
            className: "SmallTextLight",
            onClick: AD,
            children: LD("worldSocial:loadFailed")
          }), null !== cD && (0, iD.jsx)(uD.b, {
            visibility: cD.visibility,
            onPick: DD => {
              XD(DD)
            }
          }), PD && (0, iD.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, iD.jsx)(lD, {
              status: PD
            })
          }), null !== cD && "private" !== cD.visibility && (0, iD.jsx)(vD.b, {
            worldCode: rD,
            message: null
          })]
        }), "whitelist" === (null === cD || void 0 === cD ? void 0 : cD.visibility) && (0, iD.jsx)(Dz, {
          state: hD,
          lobbyName: KD,
          listed: VD,
          isListed: DD => (0, tD.l)(cD.whitelist, DD),
          QJ: (DD, zD) => {
            (0, sD.reportAnalyticsClick)(zD ? {
              id: "lobby_manage.whitelist_add",
              value: "DU"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), ED(zD ? {
              whitelistAdd: [DD]
            } : {
              whitelistRemove: DD
            }, (wD => (0, tD.w)(wD, [DD], zD))).then((zD => {
              QD(`whitelist:${DD.toLowerCase()}`, zD)
            }))
          },
          ZJ: async DD => {
            (0, sD.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const zD = await ED({
              whitelistAdd: [DD]
            }, (zD => (0, tD.w)(zD, [DD], !0)));
            return null === zD ? {
              ok: !1,
              error: LD("worldSocial:changeFailed")
            } : "error" in zD ? {
              ok: !1,
              error: LD(zD.error)
            } : (0, tD.l)(zD.notFound, DD) ? {
              ok: !1,
              error: LD("lobbyManage:noPlayerCalled", {
                playerName: DD
              })
            } : {
              ok: !0
            }
          },
          statusOf: DD => wD.statusOf(`whitelist:${DD.toLowerCase()}`)
        }), "public" === (null === cD || void 0 === cD ? void 0 : cD.visibility) && null !== hD.listing && (0, iD.jsx)(zz, {
          manage: wD,
          listing: hD.listing
        })]
      })
    }

    function rz(DD) {
      var zD;
      let {
        manage: wD,
        lobbyName: pD
      } = DD;
      const {
        t: KD
      } = (0, fD.E)(), {
        state: rD
      } = wD, LD = RD(), cD = null !== (zD = rD.whitelist) && void 0 !== zD ? zD : [];
      return (0, iD.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, iD.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, iD.jsx)(GD.e, {
            label: KD("worldSocial:whoCanJoin")
          }), (0, iD.jsx)("div", {
            className: "LobbyManageModeText",
            children: KD(`worldSocial:${rD.visibility}`)
          })]
        }), "whitelist" === rD.visibility && rD.you.canEditWhitelist && (0, iD.jsx)(Dz, {
          state: rD,
          lobbyName: pD,
          listed: cD,
          isListed: DD => {
            var zD;
            return null !== (zD = LD.get(DD.toLowerCase())) && void 0 !== zD ? zD : (0, tD.l)(cD, DD)
          },
          QJ: (DD, zD) => {
            (0, sD.reportAnalyticsClick)(zD ? {
              id: "lobby_manage.whitelist_add",
              value: "DU"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const pD = DD.toLowerCase();
            LD.hold(pD, zD, wD.send(zD ? {
              type: "whitelistAdd",
              names: [DD]
            } : {
              type: "whitelistRemove",
              name: DD
            }, `whitelist:${pD}`))
          },
          ZJ: async DD => {
            (0, sD.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const zD = await wD.send({
              type: "whitelistAdd",
              names: [DD]
            }, "whitelist-field");
            return zD.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, iD.jsx)(dD.e, {
                text: zD.message
              })
            }
          },
          statusOf: DD => wD.statusOf(`whitelist:${DD.toLowerCase()}`)
        }), "public" === rD.visibility && null !== rD.listing && (0, iD.jsx)(zz, {
          manage: wD,
          listing: rD.listing
        })]
      })
    }
    var Lz = wD(5021),
      cz = wD(1366);
    const gz = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const Rz = (0, pD.memo)((function(DD) {
      var zD;
      let {
        rule: wD,
        value: pD,
        status: sD,
        pending: KD,
        hiddenNames: rD,
        JV: LD,
        onAction: cD
      } = DD;
      const {
        t: gD
      } = (0, fD.E)(), RD = DD => LD(wD, DD), AD = (DD, zD) => {
        cD(wD, DD, zD)
      }, UD = bD(gD, wD.label, rD), ID = wD.info ? bD(gD, wD.info, rD) : void 0, BD = wD.placeholder ? bD(gD, wD.placeholder, rD) : void 0, GD = (null !== (zD = wD.options) && void 0 !== zD ? zD : []).map((DD => ({
        value: DD.value,
        label: bD(gD, DD.label, rD)
      }))), hD = Math.max(0, ...GD.map((DD => function(DD) {
        let zD = 0;
        for (const wD of DD) zD += gz.test(wD) ? 2 : 1;
        return zD
      }(DD.label)))), nD = sD && (0, iD.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, iD.jsx)(lD, {
          status: sD
        })
      }), MD = (0, iD.jsxs)("div", {
        className: "SliderText",
        children: [UD, void 0 !== ID && (0, iD.jsx)(cz.b, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: ID
        })]
      });
      return "toggle" === wD.kind ? (0, iD.jsxs)(iD.Fragment, {
        children: [(0, iD.jsx)(Lz.b, {
          label: UD,
          checked: !0 === pD,
          circleInfoText: ID,
          disabled: KD,
          onClick: RD
        }), nD]
      }) : "choice" === wD.kind && GD.length <= 3 ? (0, iD.jsxs)(iD.Fragment, {
        children: [(0, iD.jsx)(Lz.c, {
          label: UD,
          options: GD,
          value: String(pD),
          circleInfoText: ID,
          onChange: RD
        }), nD]
      }) : (0, iD.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [MD, "choice" === wD.kind && (0, iD.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": hD
          },
          children: (0, iD.jsx)(xD.c, {
            options: GD,
            value: String(pD),
            disabled: KD,
            onChange: DD => {
              RD(DD.value)
            }
          })
        }), ("number" === wD.kind || "text" === wD.kind) && (0, iD.jsx)(ND, {
          value: null === pD ? "" : String(pD),
          placeholder: BD,
          ariaLabel: UD,
          onSave: DD => {
            const zD = DD.trim(),
              pD = Number(zD);
            return RD("number" === wD.kind && "" !== zD && Number.isFinite(pD) ? pD : zD)
          }
        }), "action" === wD.kind && (0, iD.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [GD.length > 3 && (0, iD.jsx)(xD.c, {
            options: GD,
            value: {
              value: "",
              label: null !== BD && void 0 !== BD ? BD : UD
            },
            disabled: KD,
            onChange: DD => {
              AD(DD.value)
            }
          }), GD.length > 0 && GD.length <= 3 && GD.map((DD => (0, iD.jsx)(OD.g, {
            className: "SmallTextLight",
            disabled: KD,
            onClick: () => {
              AD(DD.value)
            },
            children: DD.label
          }, DD.value))), 0 === GD.length && (0, iD.jsx)(OD.g, {
            className: "SmallTextLight",
            disabled: KD,
            onClick: () => {
              AD()
            },
            children: null !== BD && void 0 !== BD ? BD : UD
          })]
        }), "names" === wD.kind && (0, iD.jsx)(Az, {
          names: Array.isArray(pD) ? pD : [],
          pending: KD,
          onAction: AD
        }), nD]
      })
    }));

    function Az(DD) {
      let {
        names: zD,
        pending: wD,
        onAction: sD
      } = DD;
      const {
        t: KD
      } = (0, fD.E)(), rD = (0, pD.useRef)(null), [LD, cD] = (0, pD.useState)(""), gD = () => {
        const DD = LD.trim();
        "" !== DD && (sD(DD, "add"), rD.current && (rD.current.value = ""), cD(""))
      };
      return (0, iD.jsxs)("div", {
        className: "LobbyManageNames",
        children: [zD.map((DD => (0, iD.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, iD.jsx)("span", {
            className: "LobbyManageNameText",
            children: DD
          }), (0, iD.jsx)(OD.g, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: KD("lobbyManage:removeName", {
              name: DD
            }),
            disabled: wD,
            onClick: () => {
              sD(DD, "remove")
            },
            children: (0, iD.jsx)(ID.e, {
              name: "xmark"
            })
          })]
        }, DD))), (0, iD.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, iD.jsx)(SD.e, {
            domRef: rD,
            placeholderText: KD("lobbyManage:namePlaceholder"),
            ariaLabel: KD("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: DD => {
              cD(DD)
            },
            onEnter: gD
          }), (0, iD.jsx)(OD.g, {
            className: "SmallTextLight",
            disabled: wD || "" === LD.trim(),
            onClick: gD,
            children: KD("lobbyManage:addHere")
          })]
        })]
      })
    }
    const Uz = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function fz(DD, zD) {
      return Uz.map((wD => {
        let {
          group: pD,
          title: sD
        } = wD;
        const KD = DD.filter((DD => DD.group === pD && void 0 === DD.parent)).map((wD => {
          const pD = !0 === zD(wD) ? DD.filter((DD => DD.parent === wD.key)) : [];
          return {
            rule: wD,
            children: pD
          }
        }));
        return {
          group: pD,
          title: sD,
          items: KD
        }
      }))
    }

    function Iz(DD) {
      return DD.flatMap((DD => {
        let {
          items: zD
        } = DD;
        return zD.flatMap((DD => {
          let {
            rule: zD,
            children: wD
          } = DD;
          return [zD, ...wD]
        }))
      }))
    }

    function Bz(DD) {
      let {
        manage: zD,
        rowsShown: wD
      } = DD;
      const {
        t: KD
      } = (0, fD.E)(), rD = (0, MD.i)("hiddenPlayerNames"), {
        rules: LD
      } = zD.state, cD = RD(), gD = DD => {
        const zD = cD.get(DD.key);
        return void 0 === zD ? DD.value : zD
      }, AD = fz(LD, gD), [UD] = (0, pD.useState)((() => Iz(AD).map((DD => DD.key)))), ID = wD === 1 / 0 ? null : new Set(UD.slice(0, wD)), BD = DD => null === ID || ID.has(DD.key), {
        hold: hD
      } = cD, nD = (0, pD.useCallback)(((DD, wD) => {
        (0, sD.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: DD.key
        });
        const pD = zD.send({
          type: "setRule",
          key: DD.key,
          value: wD
        }, `rule:${DD.key}`);
        return hD(DD.key, wD, pD), pD
      }), [zD, hD]), OD = (0, pD.useCallback)(((DD, wD, pD) => {
        (0, sD.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: DD.key
        }), zD.send({
          type: "ruleAction",
          key: DD.key,
          ...void 0 === wD ? {} : {
            arg: wD
          },
          ...void 0 === pD ? {} : {
            op: pD
          }
        }, `rule:${DD.key}`, void 0 === pD ? KD("lobbyManage:setJustNow") : void 0)
      }), [zD, KD]), JD = DD => {
        const wD = `rule:${DD.key}`;
        return (0, iD.jsx)(Rz, {
          rule: DD,
          value: gD(DD),
          status: zD.statusOf(wD),
          pending: zD.isPending(wD),
          hiddenNames: rD,
          JV: nD,
          onAction: OD
        }, DD.key)
      };
      return (0, iD.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: AD.map((DD => {
          let {
            group: zD,
            title: wD,
            items: sD
          } = DD;
          const rD = sD.filter((DD => {
            let {
              rule: zD
            } = DD;
            return BD(zD)
          }));
          return 0 === rD.length ? null : (0, iD.jsxs)(pD.Fragment, {
            children: [(0, iD.jsx)(GD.e, {
              label: KD(wD)
            }), rD.map((DD => {
              let {
                rule: zD,
                children: wD
              } = DD;
              return 0 === wD.length ? JD(zD) : (0, iD.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [JD(zD), wD.filter(BD).map(JD)]
              }, zD.key)
            }))]
          }, zD)
        }))
      })
    }
    const Gz = {
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
      hz = 5,
      nz = (0, pD.memo)((function(DD) {
        let {
          page: zD,
          manage: wD,
          leaderboard: sD,
          focusRequest: KD,
          onFocused: rD,
          ruleRowsShown: LD
        } = DD;
        return "leaderboard" === zD ? (0, iD.jsx)(pD.Suspense, {
          fallback: (0, iD.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, iD.jsx)(BD.e, {})
          }),
          children: sD
        }) : "joining" === zD ? (0, iD.jsx)(pz, {
          manage: wD
        }) : "rules" === zD ? (0, iD.jsx)(Bz, {
          manage: wD,
          rowsShown: LD
        }) : (0, iD.jsx)(mD, {
          manage: wD,
          focusRequest: KD,
          onFocused: rD
        })
      }));

    function Mz(DD) {
      let {
        page: zD
      } = DD;
      const {
        t: wD
      } = (0, fD.E)(), pD = Gz[zD];
      return (0, iD.jsxs)(iD.Fragment, {
        children: [(0, iD.jsx)(ID.e, {
          name: pD.icon
        }), " ", (0, iD.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: wD(pD.title)
        })]
      })
    }

    function Oz(DD) {
      var zD;
      const {
        t: wD
      } = (0, fD.E)(), {
        pages: KD,
        landing: rD
      } = DD, cD = (0, pD.useRef)(null), gD = (0, pD.useRef)(null), RD = (0, pD.useRef)(null), AD = (0, pD.useRef)(new Map), [ID, BD] = (0, pD.useState)(null), MD = (0, pD.useRef)(ID), OD = (0, pD.useRef)(0), [JD, ED] = (0, pD.useState)(KD[0]), QD = null !== ID && void 0 !== ID ? ID : KD.includes(JD) ? JD : KD[0], [XD] = (0, pD.useState)(null !== (zD = null === rD || void 0 === rD ? void 0 : rD.page) && void 0 !== zD ? zD : null), VD = null !== XD && KD.includes(XD) ? [XD, ...KD.filter((DD => DD !== XD))] : KD, [PD] = (0, pD.useState)((() => {
        const zD = Iz(fz(DD.manage.state.rules, (DD => DD.value)));
        return Math.max(1, Math.ceil(zD.length / hz))
      })), CD = VD.flatMap((DD => "rules" === DD ? Array(PD).fill(DD) : [DD])), xD = function(DD, zD) {
        const [wD, sD] = (0, pD.useState)(DD), KD = wD >= zD;
        return KD && wD !== 1 / 0 && sD(1 / 0), (0, pD.useLayoutEffect)((() => {
          if (KD) return;
          let DD = !0;
          return (0, nD.e)().then((() => {
            DD && sD((DD => DD + 1))
          })), () => {
            DD = !1
          }
        }), [wD, KD]), KD ? 1 / 0 : wD
      }(1, CD.length), TD = CD.slice(0, xD), bD = new Set(TD), jD = xD < CD.length, dD = jD ? TD.filter((DD => "rules" === DD)).length * hz : 1 / 0, SD = (0, pD.useRef)(DD.focusRequest);
      SD.current = DD.focusRequest;
      const lD = DD => {
          MD.current = DD, BD(DD)
        },
        WD = () => {
          var DD, zD;
          cD.current.style.scrollPaddingTop = `${null!==(DD=null===(zD=RD.current)||void 0===zD?void 0:zD.offsetHeight)&&void 0!==DD?DD:0}px`
        },
        ND = DD => {
          const zD = cD.current,
            wD = AD.current.get(DD);
          if (void 0 === wD) return;
          const pD = document.activeElement,
            sD = SD.current,
            KD = null === sD ? null : wD.querySelector(`[data-lobby-manage-row="${CSS.escape(sD.name)}"]`);
          WD(), pD instanceof HTMLElement && null !== KD && void 0 !== KD && KD.contains(pD) ? pD.scrollIntoView({
            block: "center"
          }) : null === wD.previousElementSibling ? zD.scrollTop = 0 : wD.scrollIntoView({
            block: "start"
          }), OD.current = zD.scrollTop
        },
        ZD = DD => {
          (0, sD.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: DD
          }), lD(DD), ND(DD)
        },
        yD = () => {
          var DD, zD;
          const wD = cD.current,
            pD = wD.getBoundingClientRect().top + (null !== (DD = null === (zD = RD.current) || void 0 === zD ? void 0 : zD.offsetHeight) && void 0 !== DD ? DD : 0),
            sD = KD.map((DD => {
              var zD, wD;
              return (null !== (zD = null === (wD = AD.current.get(DD)) || void 0 === wD ? void 0 : wD.getBoundingClientRect().top) && void 0 !== zD ? zD : 1 / 0) - pD
            })),
            rD = !jD && wD.scrollTop + wD.clientHeight >= wD.scrollHeight - 1;
          ED(KD[(0, LD.h)(sD, rD)])
        },
        kD = () => {
          null !== MD.current && (lD(null), yD())
        };
      (0, pD.useLayoutEffect)((() => {
        null !== rD && KD.includes(rD.page) && ZD(rD.page)
      }), [null === rD || void 0 === rD ? void 0 : rD.seq]), (0, pD.useLayoutEffect)((() => {
        null === MD.current || KD.includes(MD.current) || kD()
      }));
      const {
        onFocused: mD
      } = DD, eD = (0, pD.useCallback)((DD => {
        null !== MD.current && ND(MD.current), mD(DD)
      }), [mD]);
      (0, pD.useLayoutEffect)((() => {
        const DD = MD.current;
        null !== DD && (!jD || KD.indexOf(CD[xD - 1]) < KD.indexOf(DD)) && ND(DD)
      }), [xD]), (0, pD.useEffect)((() => {
        const DD = new ResizeObserver((() => {
          null !== MD.current ? ND(MD.current) : WD()
        }));
        return DD.observe(cD.current), DD.observe(gD.current), () => {
          DD.disconnect()
        }
      }), []), (0, pD.useLayoutEffect)((() => {
        const DD = RD.current,
          zD = null === DD || void 0 === DD ? void 0 : DD.querySelector(".SegmentedToggleOptionSelected");
        zD && (DD.scrollLeft = Math.min(zD.offsetLeft, Math.max(DD.scrollLeft, zD.offsetLeft + zD.offsetWidth - DD.clientWidth)))
      }), [QD]);
      return (0, iD.jsxs)("div", {
        ref: cD,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === MD.current ? yD() : Math.abs(cD.current.scrollTop - OD.current) > 1 && kD()
        },
        onClick: DD => {
          var zD;
          null !== (zD = RD.current) && void 0 !== zD && zD.contains(DD.target) || kD()
        },
        onFocus: DD => {
          var zD;
          const wD = null === MD.current ? null : AD.current.get(MD.current);
          !wD || wD.contains(DD.target) || null !== (zD = RD.current) && void 0 !== zD && zD.contains(DD.target) || kD()
        },
        children: [KD.length > 1 && (0, iD.jsx)("div", {
          ref: RD,
          className: "LobbyManageChips",
          children: (0, iD.jsx)(hD.e, {
            options: KD.map((DD => ({
              value: DD,
              label: (0, iD.jsx)(Mz, {
                page: DD
              }),
              ariaLabel: wD(Gz[DD].title)
            }))),
            value: QD,
            padTabs: "2",
            ariaLabel: wD("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: ZD
          })
        }), (0, iD.jsx)("div", {
          ref: gD,
          className: UD()("LobbyManageInner", {
            Staging: jD
          }),
          children: KD.filter((DD => bD.has(DD))).map((zD => {
            const wD = zD === ID;
            return (0, iD.jsxs)("section", {
              ref: DD => {
                DD ? AD.current.set(zD, DD) : AD.current.delete(zD)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": wD || void 0,
              children: [KD.length > 1 && (0, iD.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": wD || void 0,
                "data-pad-unavailable": wD || void 0,
                children: (0, iD.jsx)(GD.e, {
                  label: (0, iD.jsx)(Mz, {
                    page: zD
                  })
                })
              }), (0, iD.jsx)(nz, {
                page: zD,
                manage: DD.manage,
                leaderboard: DD.leaderboard,
                focusRequest: DD.focusRequest,
                onFocused: eD,
                ruleRowsShown: "rules" === zD ? dD : 1 / 0
              })]
            }, zD)
          }))
        })]
      })
    }

    function Jz(DD) {
      return void 0 === (null === DD || void 0 === DD ? void 0 : DD.page) ? null : {
        page: DD.page,
        seq: DD.seq
      }
    }

    function Ez(DD) {
      let {
        leaderboard: zD
      } = DD;
      const wD = function() {
          const DD = (0, cD.h)("lobbyManage"),
            [zD, wD] = (0, pD.useReducer)((DD => DD + 1), 0),
            [sD] = (0, pD.useState)((() => new gD.e(wD)));
          return (0, pD.useEffect)((() => {
            const DD = sD.nextDeadline();
            if (null === DD) return;
            const zD = setTimeout((() => {
              sD.expire(Date.now()), wD()
            }), Math.max(0, DD - Date.now()));
            return () => {
              clearTimeout(zD)
            }
          })), (0, pD.useMemo)((() => null === DD ? null : {
            state: DD,
            send: (DD, zD, pD) => {
              const KD = sD.send(DD, zD, null !== pD && void 0 !== pD ? pD : null);
              return wD(), KD
            },
            statusOf: DD => sD.statusOf(DD, Date.now()),
            showStatus: (DD, zD) => {
              sD.show(DD, zD)
            },
            isPending: DD => sD.isPending(DD)
          }), [DD, zD, sD])
        }(),
        RD = (0, LD.l)((0, KD.d)()),
        AD = (0, rD.l)(),
        [UD, fD] = (0, pD.useState)((() => Jz(AD))),
        [ID, BD] = (0, pD.useState)(null);
      return (0, pD.useEffect)((() => {
        null === AD && (0, sD.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, pD.useEffect)((() => {
        null !== AD && (fD((DD => (null === DD || void 0 === DD ? void 0 : DD.seq) === AD.seq ? DD : Jz(AD))), void 0 !== AD.focusName && "players" === AD.page ? BD({
          name: AD.focusName,
          seq: AD.seq
        }) : (0, rD.h)(AD.seq))
      }), [null === AD || void 0 === AD ? void 0 : AD.seq]), null === wD ? null : (0, iD.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, iD.jsx)(Oz, {
          pages: (0, LD.f)(wD.state, RD),
          manage: wD,
          leaderboard: zD,
          focusRequest: ID,
          onFocused: rD.h,
          landing: UD
        })
      })
    }
  },
  36557: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => RD,
      i: () => cD
    });
    var pD = wD(1472),
      sD = wD(1956),
      KD = wD(1925);
    const rD = 1e4;
    let LD = 0;

    function cD(DD) {
      const zD = ++LD;
      return new Promise((wD => {
        const LD = zD => {
            cD(), clearTimeout(gD), !1 === (null === zD || void 0 === zD ? void 0 : zD.ok) && (0, pD.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: DD.type
            }), wD(zD)
          },
          cD = sD.e.subscribe("lobbyManage", (DD => {
            const wD = function(DD, zD) {
              var wD;
              return null !== (wD = null === DD || void 0 === DD ? void 0 : DD.results.find((DD => DD.requestId === zD))) && void 0 !== wD ? wD : null
            }(DD, zD);
            null !== wD && LD(wD)
          })),
          gD = setTimeout((() => {
            LD(null)
          }), rD);
        KD.gameBridge.send("lobbyManage", {
          ...DD,
          requestId: zD
        })
      }))
    }
    const gD = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class RD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cD;
        this.onChange = DD, this.sendAction = zD, this.pending = new Map, this.statuses = new Map
      }
      send(DD, zD, wD) {
        var pD;
        return this.statuses.delete(zD), this.pending.set(zD, (null !== (pD = this.pending.get(zD)) && void 0 !== pD ? pD : 0) + 1), this.sendAction(DD).then((DD => {
          var pD;
          const sD = null !== DD && void 0 !== DD ? DD : {
              requestId: -1,
              ok: !1,
              message: gD
            },
            KD = (null !== (pD = this.pending.get(zD)) && void 0 !== pD ? pD : 1) - 1;
          KD > 0 ? this.pending.set(zD, KD) : this.pending.delete(zD);
          const rD = !sD.ok || sD.message.length > 0 ? sD.message : null === wD ? null : [wD];
          return null !== rD && this.statuses.set(zD, {
            ok: sD.ok,
            text: rD,
            until: Date.now() + 4e3
          }), this.onChange(), sD
        }))
      }
      show(DD, zD) {
        this.statuses.set(DD, {
          ...zD,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(DD) {
        for (const [zD, wD] of this.statuses) wD.until <= DD && this.statuses.delete(zD)
      }
      nextDeadline() {
        let DD = null;
        for (const wD of this.statuses.values()) {
          var zD;
          DD = Math.min(null !== (zD = DD) && void 0 !== zD ? zD : 1 / 0, wD.until)
        }
        return DD
      }
      statusOf(DD, zD) {
        const wD = this.statuses.get(DD);
        return !wD || wD.until <= zD ? null : {
          ok: wD.ok,
          text: wD.text
        }
      }
      isPending(DD) {
        return this.pending.has(DD)
      }
    }
  },
  36546: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => gD,
      g: () => cD
    });
    var pD = wD(605),
      sD = wD(1925),
      KD = wD(1657),
      rD = wD(103),
      LD = wD(1268);

    function cD(DD, zD, wD) {
      return rD.featureFlags.useSocialFeatures && DD && null === (0, LD.e)(zD, wD)
    }

    function gD(DD, zD) {
      var wD, rD;
      const LD = KD.e.getSocialState().friends.find((DD => DD.name.toLowerCase() === zD.toLowerCase())),
        cD = sD.gameBridge.latest("players").byId[DD],
        gD = void 0 !== cD && cD.name === zD,
        RD = gD && null !== (wD = cD.cosmetics) && void 0 !== wD ? wD : void 0,
        AD = LD && RD ? {
          ...LD,
          cosmetics: RD
        } : LD;
      return {
        playerSocialPreview: null !== AD && void 0 !== AD ? AD : {
          isError: !1,
          name: zD,
          ranks: gD ? [...cD.ranks] : [],
          cosmetics: null !== RD && void 0 !== RD ? RD : {},
          nameColour: null !== (rD = null === RD || void 0 === RD ? void 0 : RD.nameColour) && void 0 !== rD ? rD : pD.b,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== LD
      }
    }
  },
  36701: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => AD
    });
    var pD = wD(58),
      sD = wD(1044),
      KD = wD.n(sD),
      rD = wD(1687),
      LD = wD(1447),
      cD = wD(1346),
      gD = wD(1057),
      RD = wD(1096);

    function AD(DD) {
      let {
        label: zD,
        icon: wD,
        placeholder: sD,
        onSubmit: AD
      } = DD;
      const UD = (0, pD.useRef)(null),
        [fD, ID] = (0, pD.useState)(""),
        [BD, GD] = (0, pD.useState)("Enter"),
        [hD, nD] = (0, pD.useState)(null);
      (0, pD.useEffect)((() => {
        if ("Success" !== BD && "Error" !== BD) return;
        const DD = setTimeout((() => {
          "Success" === BD && UD.current && (UD.current.value = "", ID("")), GD("Enter")
        }), "Success" === BD ? 1e3 : 4e3);
        return () => {
          clearTimeout(DD)
        }
      }), [BD]);
      const MD = () => {
        const DD = fD.trim();
        "" !== DD && "Enter" === BD && (GD("Loading"), AD(DD).then((DD => {
          UD.current && ("error" in DD ? null === DD.error ? GD("Enter") : (nD(DD.error), GD("Error")) : GD("Success"))
        })))
      };
      return (0, RD.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: DD => {
          DD.target === UD.current && "Escape" !== DD.key && DD.stopPropagation()
        },
        children: [(0, RD.jsxs)("div", {
          className: KD()("AddFriendBodyOverlay", `AddFriendBodyOverlay${BD}`),
          children: ["Loading" === BD && (0, RD.jsx)(cD.e, {}), "Success" === BD && (0, RD.jsx)(gD.e, {
            name: "check"
          }), "Error" === BD && hD]
        }), (0, RD.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, RD.jsx)(rD.e, {
            className: "PlayerSearchInput",
            domRef: UD,
            maxLength: 32,
            placeholderText: sD,
            ariaLabel: sD,
            stopPropagation: !1,
            onValueChange: DD => {
              ID(DD)
            },
            onEnter: MD
          }), (0, RD.jsxs)(LD.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== BD || "" === fD.trim(),
            onClick: MD,
            children: [(0, RD.jsx)(gD.e, {
              name: wD
            }), " ", zD]
          })]
        })]
      })
    }
  },
  36684: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => AD
    });
    var pD = wD(58),
      sD = wD(1044),
      KD = wD.n(sD),
      rD = wD(1200),
      LD = wD(1057),
      cD = wD(1096);
    const gD = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      RD = ["unlisted", "public", "whitelist", "private"];

    function AD(DD) {
      let {
        visibility: zD,
        onPick: wD
      } = DD;
      const {
        t: sD
      } = (0, rD.E)(), AD = (0, pD.useRef)([]);
      return (0, cD.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": sD("worldSocial:whoCanJoin"),
        children: RD.map(((DD, pD) => {
          const rD = DD === zD;
          return (0, cD.jsxs)("button", {
            ref: DD => {
              AD.current[pD] = DD
            },
            type: "button",
            className: KD()("WorldSocialTile", {
              WorldSocialTileSelected: rD
            }),
            "aria-pressed": rD,
            tabIndex: rD ? 0 : -1,
            onKeyDown: DD => {
              ((DD, zD) => {
                const wD = "ArrowRight" === DD.key || "ArrowDown" === DD.key ? 1 : "ArrowLeft" === DD.key || "ArrowUp" === DD.key ? -1 : 0;
                var pD;
                0 !== wD && (DD.preventDefault(), null === (pD = AD.current[(zD + wD + RD.length) % RD.length]) || void 0 === pD || pD.focus())
              })(DD, pD)
            },
            onClick: () => {
              wD(DD)
            },
            children: [(0, cD.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, cD.jsx)(LD.e, {
                name: gD[DD]
              })
            }), (0, cD.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, cD.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: sD(`worldSocial:${DD}`)
              }), (0, cD.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: sD(`worldSocial:${DD}Description`)
              })]
            })]
          }, DD)
        }))
      })
    }
  },
  36698: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => LD
    });
    var pD = wD(1200),
      sD = wD(2649),
      KD = wD(4395),
      rD = wD(1096);

    function LD(DD) {
      let {
        DU: zD,
        children: wD,
        ...LD
      } = DD;
      const {
        t: cD
      } = (0, pD.E)();
      return (0, rD.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          zD.onChange(!zD.on)
        },
        children: (0, rD.jsx)(sD.g, {
          ...LD,
          opensProfileCard: !1,
          children: (0, rD.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: DD => {
              DD.stopPropagation()
            },
            children: [wD, (0, rD.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, rD.jsx)(KD.d, {
                checked: zD.on,
                disabled: !1,
                ariaLabel: cD("worldSocial:letJoin", {
                  playerName: LD.playerSocialPreview.name
                }),
                onChange: DD => {
                  zD.onChange(DD.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36680: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => ID
    });
    var pD = wD(58),
      sD = wD(1200),
      KD = wD(1847),
      rD = wD(103),
      LD = wD(20),
      cD = wD(1472),
      gD = wD(2684),
      RD = wD(34118),
      AD = wD(1447),
      UD = wD(1057),
      fD = wD(1096);

    function ID(DD) {
      let {
        worldCode: zD,
        message: wD
      } = DD;
      const {
        t: ID
      } = (0, sD.E)(), {
        isTouchScreen: BD
      } = (0, LD.n)(["isTouchScreen"]), GD = rD.featureFlags.canUseInviteLinks, hD = (0, RD.i)(GD && null === wD), [nD, MD] = (0, gD.g)(), OD = (0, pD.useRef)(null);
      if (null !== wD) return (0, fD.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, fD.jsx)(UD.e, {
          name: "lock"
        }), (0, fD.jsx)("span", {
          children: wD
        })]
      });
      const JD = GD ? hD : zD,
        ED = BD && GD && (0, gD.c)();
      return (0, fD.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!GD && (0, fD.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: ID("worldSocial:worldCode")
        }), (0, fD.jsx)("input", {
          ref: OD,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== JD && void 0 !== JD ? JD : "",
          "aria-label": ID(GD ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: DD => {
            DD.currentTarget.select()
          }
        }), (0, fD.jsxs)(AD.f, {
          className: "WorldSocialCopy",
          disabled: null === JD,
          onClick: () => {
            null !== JD && (0, gD.d)(JD, {
              useShareSheet: ED,
              onOutcome: DD => {
                if ((0, cD.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== DD || GD ? DD : "code"
                  }), "copied" === DD) MD();
                else if ("failed" === DD) {
                  var zD;
                  null === (zD = OD.current) || void 0 === zD || zD.focus(), KD.d.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, fD.jsx)(UD.e, {
            name: nD ? "check" : ED ? "up-from-bracket" : "copy"
          }), " ", ID(nD ? "general:copied" : ED ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36690: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => fD,
      g: () => UD,
      i: () => AD
    });
    var pD = wD(605),
      sD = wD(1200),
      KD = wD(1657),
      rD = wD(2649),
      LD = wD(2600),
      cD = wD(1447),
      gD = wD(36698),
      RD = wD(1096);

    function AD(DD, zD) {
      var wD;
      return {
        isError: !1,
        name: DD,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== zD && void 0 !== zD ? zD : {},
        nameColour: null !== (wD = null === zD || void 0 === zD ? void 0 : zD.nameColour) && void 0 !== wD ? wD : pD.b,
        location: {
          status: "offline"
        }
      }
    }

    function UD(DD) {
      let {
        player: zD,
        isFriend: wD = !1,
        status: pD,
        showLocation: cD = void 0 === pD,
        DU: AD,
        onSendFriendRequest: UD,
        actions: fD,
        zIndex: ID
      } = DD;
      const {
        t: BD
      } = (0, sD.E)();
      let GD = pD;
      null !== AD && void 0 !== AD && AD.on && (GD = (0, RD.jsxs)(RD.Fragment, {
        children: [null !== pD && void 0 !== pD ? pD : (0, RD.jsx)(LD.c, {
          socialPreview: zD
        }), (0, RD.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", BD("worldSocial:canJoin")]
        })]
      }));
      const hD = {
        playerSocialPreview: zD,
        isFriend: wD,
        hideFriendBadge: !0,
        onFriendRemoved: wD ? DD => {
          KD.e.removeFriendFromState(DD)
        } : void 0,
        status: GD,
        showLocation: cD,
        onSendFriendRequest: UD,
        zIndex: ID
      };
      return AD ? (0, RD.jsx)(gD.e, {
        ...hD,
        DU: AD,
        children: fD
      }) : (0, RD.jsx)(rD.g, {
        ...hD,
        opensProfileCard: !1,
        children: fD || void 0
      })
    }

    function fD(DD) {
      let {
        row: zD,
        DU: wD,
        canInvite: pD,
        invited: KD,
        onInvite: rD,
        zIndex: LD
      } = DD;
      const {
        t: gD
      } = (0, sD.E)(), AD = "online" === zD.place ? cD.f : cD.g;
      return (0, RD.jsx)(UD, {
        player: zD.friend,
        isFriend: !0,
        status: "here" === zD.place ? gD("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        DU: wD,
        zIndex: LD,
        actions: pD && (0, RD.jsx)(AD, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: KD,
          onClick: rD,
          ariaLabel: `${gD("worldSocial:invite")} ${zD.friend.name}`,
          children: gD(KD ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36669: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => cD,
      e: () => rD,
      h: () => gD
    });
    var pD = wD(58),
      sD = wD(4612),
      KD = wD(1847);

    function rD(DD) {
      const zD = {
        lobbyName: DD,
        answer: null,
        response: sD.d.getSocialSettings(DD)
      };
      return zD.response.then((DD => {
        zD.answer = DD
      })), zD
    }
    const LD = new Map;

    function cD(DD) {
      LD.set(DD.lobbyName, DD)
    }

    function gD(DD) {
      const [zD] = (0, pD.useState)((() => function(DD) {
        var zD;
        const wD = null !== (zD = LD.get(DD)) && void 0 !== zD ? zD : null;
        return null !== wD && void 0 !== wD && wD.answer && "error" in wD.answer ? null : wD
      }(DD))), [wD, rD] = (0, pD.useState)((() => null !== zD && void 0 !== zD && zD.answer && "settings" in zD.answer ? zD.answer.settings : null)), [cD, gD] = (0, pD.useState)(!0), [RD, AD] = (0, pD.useState)(null !== wD), UD = (0, pD.useRef)(wD);
      UD.current = wD;
      const fD = (0, pD.useRef)(0),
        ID = (0, pD.useRef)(0),
        BD = (0, pD.useRef)(!1),
        GD = (0, pD.useRef)(!0),
        hD = (0, pD.useCallback)((async zD => {
          const wD = ++fD.current,
            pD = await (null !== zD && void 0 !== zD ? zD : sD.d.getSocialSettings(DD));
          GD.current && wD === fD.current && (AD(!0), gD(!1), "error" in pD || rD(pD.settings))
        }), [DD]),
        nD = (0, pD.useCallback)((() => {
          gD(!0), hD()
        }), [hD]),
        MD = (0, pD.useCallback)((() => {
          ID.current > 0 ? BD.current = !0 : hD()
        }), [hD]);
      (0, pD.useEffect)((() => (GD.current = !0, LD.delete(DD), gD(!0), hD(null === zD || void 0 === zD ? void 0 : zD.response), () => {
        GD.current = !1
      })), [hD, DD, zD]);
      const OD = DD => {
        fD.current++, gD(!1), UD.current = DD, rD(DD)
      };
      return {
        settings: wD,
        loading: cD,
        answered: RD,
        retry: nD,
        refresh: MD,
        change: async function(zD, wD) {
          let {
            quiet: pD = !1,
            onAnswer: rD
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const LD = UD.current;
          if (null === LD) return !1;
          OD(wD(LD)), ID.current > 0 && (BD.current = !0), ID.current++;
          const cD = await sD.d.setSocialSettings(DD, zD);
          ID.current--;
          const gD = !("error" in cD);
          if (!GD.current) return gD;
          if (null === rD || void 0 === rD || rD(cD), pD);
          else if ("error" in cD) KD.d.showMessage({
            translationKey: cD.error
          });
          else
            for (const DD of cD.notFound) KD.d.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: DD
              }
            });
          if (ID.current > 0) return gD;
          const RD = BD.current;
          return BD.current = !1, !RD && "settings" in cD ? OD(cD.settings) : (RD || OD(LD), hD()), gD
        }
      }
    }
  },
  36707: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD,
      g: () => KD
    });
    var pD = wD(157);
    const sD = new Map;

    function KD(DD, zD) {
      var wD;
      const pD = null !== (wD = sD.get(DD)) && void 0 !== wD ? wD : new Map;
      pD.set(zD, Date.now()), sD.set(DD, pD)
    }

    function rD(DD) {
      const zD = sD.get(DD);
      if (!zD) return [];
      const wD = Date.now();
      for (const [sD, KD] of zD) wD - KD >= pD.r && zD.delete(sD);
      return [...zD.keys()]
    }
  },
  36672: (DD, zD, wD) => {
    function pD(DD, zD) {
      const wD = zD.toLowerCase();
      for (const pD of DD)
        if (pD.toLowerCase() === wD) return !0;
      return !1
    }

    function sD(DD, zD, wD) {
      const sD = [],
        KD = [],
        rD = [];
      for (const LD of DD) !LD.isError && LD.name && ("inGame" === LD.location.status && LD.location.inLobbyName === zD || pD(wD, LD.name) ? KD.push({
        friend: LD,
        place: "here"
      }) : "offline" === LD.location.status ? rD.push({
        friend: LD,
        place: "offline"
      }) : sD.push({
        friend: LD,
        place: "online"
      }));
      return [...sD, ...KD, ...rD]
    }

    function KD(DD, zD, wD) {
      const sD = [],
        KD = DD.flatMap((DD => "here" === DD.place ? [DD.friend.name] : []));
      for (const rD of [...KD, ...zD]) pD(sD, rD) || pD(wD, rD) || sD.push(rD);
      return sD
    }

    function rD(DD, zD) {
      return null === DD || void 0 === DD || !DD.canManage || pD(DD.whitelist, zD) ? "none" : "whitelist" === DD.visibility ? "required" : "quiet"
    }

    function LD(DD) {
      if (null === DD) return !0;
      const {
        visibility: zD
      } = DD;
      return "public" === zD || "unlisted" === zD || "whitelist" === zD && DD.canManage
    }

    function cD(DD, zD, wD) {
      if (wD) {
        const wD = zD.filter((zD => !pD(DD.whitelist, zD)));
        return {
          ...DD,
          whitelist: [...DD.whitelist, ...wD]
        }
      }
      return {
        ...DD,
        whitelist: DD.whitelist.filter((DD => !pD(zD, DD)))
      }
    }

    function gD(DD, zD) {
      const wD = [];
      for (let pD = 0; pD < DD.length; pD += zD) wD.push(DD.slice(pD, pD + zD));
      return wD
    }
    wD.d(zD, {
      d: () => LD,
      e: () => KD,
      h: () => sD,
      l: () => pD,
      p: () => gD,
      s: () => rD,
      w: () => cD
    })
  },
  36992: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(58),
      sD = wD(2402);

    function KD() {
      const DD = (0, sD.h)("lobbyLeaderboardInfo");
      return (0, pD.useMemo)((() => function(DD) {
        if (null === DD) return null;
        const zD = Object.entries(DD),
          wD = zD.filter((DD => {
            let [, zD] = DD;
            return void 0 !== zD
          }));
        if (wD.length === zD.length) return DD;
        const pD = Object.fromEntries(wD),
          sD = Object.keys(DD).filter((DD => !Object.hasOwn(pD, DD)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${sD.join(", ")}`), pD
      }(DD)), [DD])
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);