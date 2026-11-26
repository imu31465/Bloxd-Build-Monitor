export const id = 242;
export const ids = [242];
export const modules = {
  42402: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      LobbyManageView: () => Te
    });
    var JV = xV(62),
      YV = xV(1586),
      UV = xV(38185),
      yV = xV(2712),
      pV = xV(2719),
      QV = xV(2693),
      nV = xV(37712);

    function wV() {
      const [VV, eV] = (0, JV.useState)(new Map);
      return {
        get: eV => VV.get(eV),
        hold: (0, JV.useCallback)(((VV, xV, JV) => {
          eV((eV => new Map(eV).set(VV, xV))), JV.then((() => {
            eV((eV => {
              const xV = new Map(eV);
              return xV.delete(VV), xV
            }))
          }))
        }), [])
      }
    }
    var ZV = xV(1146),
      vV = xV.n(ZV),
      rV = xV(1220),
      kV = xV(1414),
      bV = xV(1408),
      EV = xV(2945),
      BV = xV(5529),
      jV = xV(3886);
    var qV = xV(2100),
      tV = xV(1551);

    function FV(VV, eV, xV) {
      const JV = VV.filter((VV => VV.name !== eV)),
        YV = JV.filter((VV => "none" === VV.role)).sort(((VV, eV) => eV.at - VV.at)),
        UV = JV.filter((VV => "none" !== VV.role)).sort(((VV, eV) => xV.indexOf(VV.role) - xV.indexOf(eV.role) || eV.at - VV.at));
      return [...VV.some((VV => VV.name === eV)) && null !== eV ? [eV] : [], ...[...YV, ...UV].map((VV => VV.name))]
    }

    function TV(VV, eV) {
      const xV = VV.banned.map((VV => VV.name)),
        JV = new Set(xV);
      return {
        here: FV(VV.here, eV, VV.roles.map((VV => VV.role))),
        away: VV.away.filter((VV => !JV.has(VV.name))).map((VV => VV.name)),
        banned: xV
      }
    }

    function PV(VV, eV) {
      const xV = VV.here.find((VV => VV.name === eV));
      if (xV) return {
        section: "here",
        player: xV
      };
      const JV = VV.banned.find((VV => VV.name === eV));
      if (JV) return {
        section: "banned",
        bannedAt: JV.at
      };
      const YV = VV.away.find((VV => VV.name === eV));
      return YV ? {
        section: "away",
        player: YV
      } : {
        section: "gone"
      }
    }
    const AV = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var NV = xV(2942),
      XV = xV(3069),
      MV = xV(37891),
      zV = xV(3551),
      GV = xV(375);

    function WV(VV, eV, xV) {
      return eV.map((eV => {
        if ("string" === typeof eV) return eV;
        const JV = "str" in eV ? eV.str : eV;
        return "string" === typeof JV ? JV : "entityName" in JV ? JV.entityName : "translationKey" in JV ? VV(JV.translationKey, (0, rV.p)(JV.params, xV)) : ""
      })).join("")
    }

    function RV(VV, eV, xV, JV, YV) {
      return YV - JV < 6e4 ? VV(`${xV}JustNow`) : VV(xV, {
        time: (0, GV.bb)((0, rV.m)(eV, xV), JV, YV)
      })
    }
    var gV = xV(2021),
      DV = xV(1772),
      iV = xV(1321);

    function CV(VV) {
      let {
        status: eV
      } = VV;
      return (0, iV.jsx)("span", {
        className: vV()("LobbyManageStatus", {
          LobbyManageStatusRefused: !eV.ok
        }),
        children: (0, iV.jsx)(gV.b, {
          text: eV.text
        })
      })
    }

    function aV(VV) {
      let {
        names: eV,
        cap: xV,
        filterFrom: YV,
        moreLabel: UV,
        reveal: yV = null,
        renderRow: pV
      } = VV;
      const {
        t: QV
      } = (0, rV.A)(), [nV, wV] = (0, JV.useState)(!1), [ZV, vV] = (0, JV.useState)(""), bV = nV || null !== yV && eV.indexOf(yV) >= xV, BV = (bV || eV.length <= xV) && null !== YV && eV.length > YV, jV = ZV.trim().toLowerCase();
      let qV = bV ? eV : eV.slice(0, xV);
      return BV && "" !== jV && (qV = qV.filter((VV => VV.toLowerCase().includes(jV)))), (0, iV.jsxs)(iV.Fragment, {
        children: [BV && (0, iV.jsx)(DV.d, {
          className: "LobbyManageFilter",
          placeholderText: QV("lobbyManage:findName"),
          ariaLabel: QV("lobbyManage:findName"),
          onValueChange: VV => {
            vV(VV)
          }
        }), qV.length > 0 && (0, iV.jsx)("div", {
          className: "PlayerRows",
          children: qV.map(((VV, eV) => pV(VV, qV.length - eV)))
        }), !bV && eV.length > xV && (0, iV.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, iV.jsx)(EV.b, {
            label: (0, iV.jsxs)(iV.Fragment, {
              children: [UV, " ", (0, iV.jsx)(kV.b, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              wV(!0)
            }
          })
        })]
      })
    }

    function oV(VV) {
      let {
        value: eV,
        placeholder: xV,
        ariaLabel: YV,
        maxLength: UV,
        wide: yV = !1,
        onSave: pV
      } = VV;
      const QV = (0, JV.useRef)(null),
        [nV, wV] = (0, JV.useState)(0),
        ZV = (0, JV.useRef)(!0),
        rV = (0, JV.useRef)(null),
        kV = (0, JV.useRef)({
          value: eV,
          onSave: pV
        });
      kV.current = {
        value: eV,
        onSave: pV
      };
      const bV = () => {
        const VV = rV.current;
        rV.current = null, null !== VV && VV !== kV.current.value && kV.current.onSave(VV).then((() => {
          ZV.current && wV((VV => VV + 1))
        }))
      };
      return (0, JV.useEffect)((() => {
        null === rV.current && QV.current && (QV.current.value = eV)
      }), [eV, nV]), (0, JV.useEffect)((() => () => {
        ZV.current = !1, bV()
      }), []), (0, iV.jsx)("div", {
        className: vV()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: yV
        }),
        onBlur: bV,
        children: (0, iV.jsx)(DV.d, {
          domRef: QV,
          defaultValue: eV,
          placeholderText: xV,
          ariaLabel: YV,
          maxLength: UV,
          onValueChange: VV => {
            rV.current = VV
          },
          onEnter: bV
        })
      })
    }
    const cV = ["mod", "coOwner"],
      hV = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function lV(VV) {
      var eV, xV, UV;
      let {
        name: yV,
        place: pV,
        openedIn: QV,
        isYou: nV,
        manage: ZV,
        hiddenNames: vV,
        zIndex: bV
      } = VV;
      const {
        t: EV,
        selectedLanguage: BV
      } = (0, rV.A)(), [jV, qV] = (0, JV.useState)(null), {
        state: FV
      } = ZV, TV = `player:${yV}`, PV = function(VV, eV) {
        if ("banned" === VV.section) return {
          ...AV,
          unban: !0
        };
        if ("gone" === VV.section) return AV;
        const {
          player: xV
        } = VV, JV = "here" === VV.section, YV = JV || "none" !== xV.role ? xV.can.roles : [], UV = JV && eV && null !== xV.gamemode && xV.can.gamemode;
        return {
          gamemode: UV,
          roles: YV,
          fixedRole: 0 !== YV.length || "none" === xV.role && !UV ? null : xV.role,
          kick: JV && xV.can.kick,
          ban: xV.can.ban,
          unban: !1
        }
      }(pV, null !== FV.gamemodes), GV = ZV.statusOf(TV), gV = ZV.isPending(TV), DV = wV(), aV = Date.now(), oV = VV => {
        var eV, xV;
        return null !== (eV = null === (xV = (VV => FV.roles.find((eV => eV.role === VV)))(VV)) || void 0 === xV ? void 0 : xV.label) && void 0 !== eV ? eV : VV
      }, lV = VV => {
        const eV = hV[VV];
        return void 0 === eV ? void 0 : EV(eV)
      }, LV = "here" === pV.section || "away" === pV.section ? pV.player : null, fV = "here" === pV.section ? pV.player.id : null, {
        playerSocialPreview: mV,
        isFriend: KV
      } = null === fV ? {
        playerSocialPreview: (0, MV.k)(yV, null),
        isFriend: !1
      } : (0, XV.f)(fV, yV), HV = function() {
        ZV.send(...arguments)
      }, uV = (VV, eV) => {
        DV.hold("role", VV, ZV.send({
          type: "setRole",
          name: yV,
          role: VV
        }, TV, eV))
      };
      let sV = null;
      if ("ban" === (null === jV || void 0 === jV ? void 0 : jV.kind)) sV = EV("lobbyManageEntry:banConfirm", {
        playerName: yV
      });
      else if ("role" === (null === jV || void 0 === jV ? void 0 : jV.kind)) {
        var SV;
        sV = `${EV("lobbyManage:roleConfirm",{playerName:yV,role:oV(jV.role)})} ${null!==(SV=lV(jV.role))&&void 0!==SV?SV:""}`
      } else if (GV) sV = (0, iV.jsx)(CV, {
        status: GV
      });
      else if (nV) sV = EV("lobbyManage:you");
      else if ("here" === pV.section) "none" === pV.player.role && aV - pV.player.at < 6e5 && (sV = RV(EV, BV.code, "lobbyManage:joinedAgo", pV.player.at, aV));
      else if ("away" === pV.section) {
        if (pV.player.at > 0) {
          const VV = "kicked" === pV.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          sV = RV(EV, BV.code, VV, pV.player.at, aV)
        }
      } else "banned" === pV.section ? null !== pV.bannedAt && (sV = RV(EV, BV.code, "lobbyManage:bannedAgo", pV.bannedAt, aV)) : "banned" === QV && (sV = EV("lobbyManageEntry:unbanned"));
      return (0, iV.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": yV,
        children: (0, iV.jsxs)(NV.e, {
          playerSocialPreview: mV,
          isFriend: KV,
          status: sV,
          opensProfileCard: !nV && (0, XV.g)(!0, yV, vV),
          zIndex: bV,
          children: [null !== jV && (0, iV.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === jV.kind && (0, iV.jsxs)(tV.E, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                qV(null), HV({
                  type: "ban",
                  name: yV
                }, TV)
              },
              children: [(0, iV.jsx)(kV.b, {
                name: "gavel"
              }), (0, iV.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: EV("lobbyManageEntry:ban")
              })]
            }), "role" === jV.kind && (0, iV.jsx)(tV.f, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: jV.role
              },
              onClick: () => {
                qV(null), uV(jV.role)
              },
              children: EV("lobbyManage:makeRole", {
                role: oV(jV.role)
              })
            }), (0, iV.jsx)(tV.j, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                qV(null)
              },
              children: EV("general:cancel")
            })]
          }), null === jV && (0, iV.jsxs)(iV.Fragment, {
            children: [(0, iV.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [PV.gamemode && null !== LV && (0, iV.jsx)(zV.c, {
                options: (null !== (eV = FV.gamemodes) && void 0 !== eV ? eV : []).map((VV => ({
                  value: VV.value,
                  label: WV(EV, VV.label, vV)
                }))),
                value: null !== (xV = DV.get("gamemode")) && void 0 !== xV ? xV : LV.gamemode,
                disabled: gV,
                onChange: VV => {
                  (0, YV.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: VV.value
                  }), DV.hold("gamemode", VV.value, ZV.send({
                    type: "setGamemode",
                    name: yV,
                    gamemode: VV.value
                  }, TV))
                }
              }), PV.roles.length > 0 && null !== LV && (0, iV.jsx)(zV.c, {
                options: [...FV.roles].reverse().filter((VV => PV.roles.includes(VV.role))).map((VV => ({
                  value: VV.role,
                  label: VV.label
                }))),
                value: null !== (UV = DV.get("role")) && void 0 !== UV ? UV : LV.role,
                disabled: gV,
                onChange: VV => {
                  var eV;
                  (eV = VV.value) !== (null === LV || void 0 === LV ? void 0 : LV.role) && (cV.includes(eV) ? qV({
                    kind: "role",
                    role: eV
                  }) : ((0, YV.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: eV
                  }), uV(eV, lV(eV))))
                }
              }), null !== PV.fixedRole && (0, iV.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: oV(PV.fixedRole)
              })]
            }), (0, iV.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [PV.kick && (0, iV.jsxs)(tV.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${EV("lobbyManageEntry:kick")} ${yV}`,
                disabled: gV,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  HV({
                    type: "kick",
                    name: yV
                  }, TV)
                },
                children: [(0, iV.jsx)(kV.b, {
                  name: "person-falling-burst"
                }), (0, iV.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: EV("lobbyManageEntry:kick")
                })]
              }), PV.ban && (0, iV.jsxs)(tV.G, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${EV("lobbyManageEntry:ban")} ${yV}`,
                disabled: gV,
                padDestructive: !0,
                onClick: () => {
                  qV({
                    kind: "ban"
                  })
                },
                children: [(0, iV.jsx)(kV.b, {
                  name: "gavel"
                }), (0, iV.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: EV("lobbyManageEntry:ban")
                })]
              }), PV.unban && (0, iV.jsxs)(tV.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${EV("lobbyManageEntry:unban")} ${yV}`,
                disabled: gV,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  HV({
                    type: "unban",
                    name: yV
                  }, TV)
                },
                children: [(0, iV.jsx)(kV.b, {
                  name: "user-unlock"
                }), (0, iV.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: EV("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function LV(VV) {
      var eV, xV, YV, UV;
      let {
        manage: yV,
        focusRequest: pV,
        onFocused: QV
      } = VV;
      const {
        t: nV
      } = (0, rV.A)(), wV = (0, qV.h)("players"), ZV = (0, qV.h)("hiddenPlayerNames"), vV = (0, JV.useRef)(null), {
        state: bV
      } = yV, BV = null === wV.localId ? null : null !== (eV = null === (xV = wV.byId[wV.localId]) || void 0 === xV ? void 0 : xV.name) && void 0 !== eV ? eV : null, [jV] = (0, JV.useState)((() => TV(bV, BV))), FV = function(VV, eV, xV) {
        const JV = new Set([...VV.here, ...VV.away, ...VV.banned]),
          YV = TV(eV, xV),
          UV = eV => {
            const xV = YV[eV].filter((VV => !JV.has(VV)));
            for (const VV of xV) JV.add(VV);
            return [...VV[eV], ...xV]
          };
        return {
          here: UV("here"),
          away: UV("away"),
          banned: UV("banned")
        }
      }(jV, bV, BV), [AV, NV] = (0, JV.useState)(!1), XV = function(VV, eV) {
        return VV.here.filter((VV => VV.name !== eV && "none" === VV.role && VV.can.kick)).length
      }(bV, BV), MV = yV.statusOf("kickAll");
      (0, JV.useEffect)((() => {
        var VV, eV;
        if (null === pV) return;
        const xV = null === (VV = vV.current) || void 0 === VV ? void 0 : VV.querySelector(`[data-lobby-manage-row="${CSS.escape(pV.name)}"]`);
        null === xV || void 0 === xV || xV.scrollIntoView({
          block: "center"
        }), null === xV || void 0 === xV || null === (eV = xV.querySelector(".ProfilePreview")) || void 0 === eV || eV.focus({
          preventScroll: !0
        }), QV(pV.seq)
      }), [null === pV || void 0 === pV ? void 0 : pV.seq]);
      const zV = VV => (eV, xV) => (0, iV.jsx)(lV, {
        name: eV,
        place: PV(bV, eV),
        openedIn: VV,
        isYou: eV === BV,
        manage: yV,
        hiddenNames: ZV,
        zIndex: xV
      }, eV);
      return (0, iV.jsxs)("div", {
        ref: vV,
        className: "LobbyManagePage",
        children: [FV.here.length > 0 && (0, iV.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, iV.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, iV.jsx)(EV.b, {
              label: nV("lobbyManage:here"),
              meta: bV.here.length
            }), XV >= 2 && !AV && (0, iV.jsxs)(tV.G, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: yV.isPending("kickAll"),
              onClick: () => {
                NV(!0)
              },
              children: [(0, iV.jsx)(kV.b, {
                name: "person-falling-burst"
              }), " ", nV("lobbyManage:kickAll")]
            })]
          }), AV && XV >= 2 && (0, iV.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, iV.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: nV("lobbyManage:kickAllConfirm", {
                count: XV
              })
            }), (0, iV.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, iV.jsx)(tV.E, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  NV(!1), yV.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: nV("lobbyManage:kickAll")
              }), (0, iV.jsx)(tV.j, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  NV(!1)
                },
                children: nV("general:cancel")
              })]
            })]
          }), MV && (0, iV.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, iV.jsx)(CV, {
              status: MV
            })
          }), (0, iV.jsx)(aV, {
            names: FV.here,
            cap: FV.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: zV("here")
          })]
        }), FV.away.length > 0 && (0, iV.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, iV.jsx)(EV.b, {
            label: nV("lobbyManage:notHere"),
            meta: FV.away.length
          }), (0, iV.jsx)(aV, {
            names: FV.away,
            cap: 5,
            filterFrom: null,
            moreLabel: nV("lobbyManage:allCount", {
              count: FV.away.length
            }),
            reveal: null !== (YV = null === pV || void 0 === pV ? void 0 : pV.name) && void 0 !== YV ? YV : null,
            renderRow: zV("away")
          })]
        }), FV.banned.length > 0 && (0, iV.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, iV.jsx)(EV.b, {
            label: nV("lobbyManage:banned"),
            meta: FV.banned.length
          }), (0, iV.jsx)(aV, {
            names: FV.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: nV("lobbyManage:allCount", {
              count: FV.banned.length
            }),
            reveal: null !== (UV = null === pV || void 0 === pV ? void 0 : pV.name) && void 0 !== UV ? UV : null,
            renderRow: zV("banned")
          })]
        })]
      })
    }
    var fV = xV(5103),
      mV = xV(1734),
      KV = xV(37869),
      HV = xV(37882),
      uV = xV(37875),
      sV = xV(37871),
      SV = xV(37911),
      IV = xV(37898),
      dV = xV(37902);

    function OV(VV) {
      const eV = new Set;
      for (const xV of VV) eV.add(xV.toLowerCase());
      return eV
    }

    function Ve(VV) {
      var eV, xV;
      let {
        state: YV,
        lobbyName: UV,
        listed: yV,
        isListed: pV,
        Iq: QV,
        uF: nV,
        statusOf: wV
      } = VV;
      const {
        t: ZV,
        selectedLanguage: vV
      } = (0, rV.A)(), kV = (0, mV.m)(), bV = (0, qV.h)("players"), BV = null === bV.localId ? null : null !== (eV = null === (xV = bV.byId[bV.localId]) || void 0 === xV ? void 0 : xV.name) && void 0 !== eV ? eV : null, jV = (0, JV.useMemo)((() => (0, sV.g)(kV.friends, UV, YV.here.map((VV => VV.name)))), [kV.friends, UV, YV.here]), tV = new Map(jV.map((VV => [VV.friend.name.toLowerCase(), VV]))), FV = function(VV) {
        let {
          refused: eV,
          listed: xV,
          here: JV,
          friends: YV,
          excluded: UV
        } = VV;
        const yV = OV(UV),
          pV = VV => VV.filter((VV => {
            const eV = VV.toLowerCase();
            return !yV.has(eV) && (yV.add(eV), !0)
          }));
        return {
          added: [],
          refused: pV(eV),
          listed: pV(xV),
          suggested: pV([...JV, ...YV])
        }
      }({
        refused: YV.refused.map((VV => VV.name)),
        listed: yV,
        here: YV.here.map((VV => VV.name)),
        friends: jV.flatMap((VV => "here" === VV.place ? [] : [VV.friend.name])),
        excluded: [...null === BV ? [] : [BV], ...[...YV.here, ...YV.away].flatMap((VV => "none" === VV.role || (0, sV.k)(yV, VV.name) ? [] : [VV.name]))]
      }), [TV] = (0, JV.useState)(FV), [PV, AV] = (0, JV.useState)([]), NV = function(VV, eV, xV) {
        const JV = OV(xV),
          YV = OV([...xV, ...VV.refused, ...VV.listed, ...VV.suggested]),
          UV = xV => [...VV[xV].filter((VV => !JV.has(VV.toLowerCase()))), ...eV[xV].filter((VV => {
            const eV = VV.toLowerCase();
            return !YV.has(eV) && (YV.add(eV), !0)
          }))];
        return {
          added: [...xV],
          refused: UV("refused"),
          listed: UV("listed"),
          suggested: UV("suggested")
        }
      }(TV, FV, PV), zV = (VV, eV) => {
        var xV, JV;
        const UV = VV.toLowerCase(),
          yV = tV.get(UV),
          nV = YV.here.find((VV => VV.name.toLowerCase() === UV)),
          rV = YV.refused.find((VV => VV.name.toLowerCase() === UV)),
          kV = null !== (xV = null === wV || void 0 === wV ? void 0 : wV(VV)) && void 0 !== xV ? xV : null;
        let bV = null;
        kV ? bV = (0, iV.jsx)(CV, {
          status: kV
        }) : rV ? bV = RV(ZV, vV.code, "lobbyManage:triedToJoinAgo", rV.at, Date.now()) : yV && nV ? bV = ZV("lobbyManage:friendHere") : yV ? bV = "online" === yV.place ? ZV("lobbyManage:friendOnline") : ZV("lobbyManage:friend") : nV && (bV = ZV("lobbyManage:hereStatus"));
        let EV = null !== (JV = null === yV || void 0 === yV ? void 0 : yV.friend) && void 0 !== JV ? JV : (0, MV.k)(VV, null);
        return !yV && null !== nV && void 0 !== nV && nV.id && (EV = (0, XV.f)(nV.id, nV.name).playerSocialPreview), (0, iV.jsx)(IV.d, {
          playerSocialPreview: EV,
          isFriend: void 0 !== yV,
          hideFriendBadge: !0,
          status: bV,
          zIndex: eV,
          iZ: {
            on: pV(VV),
            onChange: eV => {
              QV(VV, eV)
            }
          }
        }, UV)
      }, GV = [...NV.added, ...NV.refused];
      return (0, iV.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, iV.jsx)(EV.b, {
          label: ZV("worldSocial:whitelist"),
          meta: yV.length
        }), (0, iV.jsx)(dV.b, {
          label: ZV("lobbyManage:add"),
          icon: "user-check",
          placeholder: ZV("socialBar:enterPlayerName"),
          onSubmit: async VV => {
            const eV = await nV(VV);
            return eV.ok && AV((eV => [VV, ...eV])), eV
          }
        }), GV.length > 0 && (0, iV.jsx)("div", {
          className: "PlayerRows",
          children: GV.map(((VV, eV) => zV(VV, GV.length - eV)))
        }), (0, iV.jsx)(aV, {
          names: NV.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: ZV("lobbyManage:allOnWhitelist", {
            count: NV.listed.length
          }),
          renderRow: zV
        }), (0, iV.jsx)(aV, {
          names: NV.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: ZV("lobbyManage:allCount", {
            count: NV.suggested.length
          }),
          renderRow: zV
        })]
      })
    }

    function ee(VV) {
      let {
        manage: eV,
        listing: xV
      } = VV;
      const {
        t: JV
      } = (0, rV.A)(), UV = (VV, xV) => ((0, YV.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: VV
      }), eV.send({
        type: "setListing",
        field: VV,
        value: xV
      }, `listing:${VV}`)), yV = VV => {
        const xV = eV.statusOf(`listing:${VV}`);
        return xV && !xV.ok && (0, iV.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, iV.jsx)(CV, {
            status: xV
          })
        })
      };
      return (0, iV.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, iV.jsx)(EV.b, {
          label: JV("lobbyManage:inWorldsList")
        }), (0, iV.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, iV.jsx)("div", {
            className: "SliderText",
            children: JV("lobbyManage:description")
          }), (0, iV.jsx)(oV, {
            value: xV.description,
            ariaLabel: JV("lobbyManage:description"),
            wide: !0,
            onSave: VV => UV("description", VV)
          })]
        }), yV("description"), (0, iV.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, iV.jsx)("div", {
            className: "SliderText",
            children: JV("lobbyManage:emojis")
          }), (0, iV.jsx)(oV, {
            value: xV.emojis,
            ariaLabel: JV("lobbyManage:emojis"),
            onSave: VV => UV("emojis", VV)
          })]
        }), yV("emojis"), (0, iV.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, iV.jsx)("div", {
            className: "SliderText",
            children: JV("lobbyManage:colour")
          }), (0, iV.jsx)(xe, {
            value: xV.colour,
            ariaLabel: JV("lobbyManage:colour"),
            onSave: VV => {
              UV("colour", VV)
            }
          })]
        }), yV("colour")]
      })
    }

    function xe(VV) {
      let {
        value: eV,
        ariaLabel: xV,
        onSave: YV
      } = VV;
      const UV = (0, JV.useRef)(null),
        yV = (0, JV.useRef)({
          value: eV,
          onSave: YV
        });
      yV.current = {
        value: eV,
        onSave: YV
      };
      const pV = (0, JV.useRef)(null),
        QV = (0, JV.useRef)(!1),
        nV = VV => {
          QV.current && VV.value !== yV.current.value && VV.value !== pV.current && (pV.current = VV.value, yV.current.onSave(VV.value))
        };
      return (0, JV.useEffect)((() => {
        UV.current && document.activeElement !== UV.current && (UV.current.value = eV)
      }), [eV]), (0, JV.useEffect)((() => {
        const VV = UV.current,
          eV = () => {
            nV(VV)
          };
        return VV.addEventListener("change", eV), () => {
          VV.removeEventListener("change", eV), nV(VV)
        }
      }), []), (0, iV.jsx)("input", {
        ref: UV,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: eV,
        "aria-label": xV,
        onInput: () => {
          QV.current = !0
        },
        onBlur: VV => {
          nV(VV.currentTarget)
        }
      })
    }

    function Je(VV) {
      let {
        manage: eV
      } = VV;
      const {
        lobbyName: xV,
        shownLobbyName: JV
      } = (0, qV.h)("connectedGame");
      return eV.state.you.canSetVisibility && null !== xV ? (0, iV.jsx)(Ue, {
        manage: eV,
        lobbyName: xV,
        worldCode: null !== JV && void 0 !== JV ? JV : xV
      }, xV) : (0, iV.jsx)(ye, {
        manage: eV,
        lobbyName: null !== xV && void 0 !== xV ? xV : ""
      })
    }

    function Ye(VV) {
      return VV.map((VV => VV.toLowerCase())).sort().join(",")
    }

    function Ue(VV) {
      var eV;
      let {
        manage: xV,
        lobbyName: UV,
        worldCode: yV
      } = VV;
      const {
        t: pV
      } = (0, rV.A)(), {
        settings: QV,
        loading: nV,
        change: wV,
        retry: ZV,
        refresh: vV
      } = (0, KV.g)(UV), kV = (0, mV.m)(), {
        state: BV
      } = xV, jV = (0, JV.useRef)(QV);
      jV.current = QV;
      const qV = Ye(null !== (eV = BV.whitelist) && void 0 !== eV ? eV : []),
        FV = null !== BV.whitelist;
      (0, JV.useEffect)((() => {
        const VV = jV.current;
        null !== VV && (VV.visibility !== BV.visibility || FV && Ye(VV.whitelist) !== qV) && vV()
      }), [BV.visibility, qV, FV, vV]);
      const TV = async (VV, eV) => {
        let xV = null;
        return await wV(VV, eV, {
          quiet: !0,
          onAnswer: VV => {
            xV = VV
          }
        }), xV
      }, PV = (VV, eV) => {
        null !== eV && "error" in eV && xV.showStatus(VV, {
          ok: !1,
          text: [pV(eV.error)]
        })
      }, AV = async VV => {
        if (null === QV || VV === QV.visibility) return;
        (0, YV.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: VV
        });
        const eV = "whitelist" === VV ? (0, sV.e)((0, sV.g)(kV.friends, UV, BV.here.map((VV => VV.name))), (0, SV.c)(UV), QV.whitelist) : [],
          xV = await TV({
            setVisibility: VV
          }, (eV => ({
            ...eV,
            visibility: VV
          })));
        PV("mode", xV), null === xV || "error" in xV || await (async VV => {
          for (const eV of (0, sV.o)(VV, fV.z))
            if (!await wV({
                whitelistAdd: eV
              }, (VV => (0, sV.u)(VV, eV, !0)))) return !1;
          return !0
        })(eV)
      }, NV = (0, JV.useMemo)((() => {
        var VV;
        if (null === QV) return [];
        const eV = null !== (VV = BV.whitelist) && void 0 !== VV ? VV : [];
        return [...eV.filter((VV => (0, sV.k)(QV.whitelist, VV))), ...QV.whitelist.filter((VV => !(0, sV.k)(eV, VV)))]
      }), [QV, BV.whitelist]), XV = xV.statusOf("mode");
      return (0, iV.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, iV.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, iV.jsx)(EV.b, {
            label: pV("worldSocial:whoCanJoin")
          }), null === QV && nV && (0, iV.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, iV.jsx)(bV.d, {})
          }), null === QV && !nV && (0, iV.jsx)(tV.j, {
            className: "SmallTextLight",
            onClick: ZV,
            children: pV("worldSocial:loadFailed")
          }), null !== QV && (0, iV.jsx)(HV.d, {
            visibility: QV.visibility,
            onPick: VV => {
              AV(VV)
            }
          }), XV && (0, iV.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, iV.jsx)(CV, {
              status: XV
            })
          }), null !== QV && "private" !== QV.visibility && (0, iV.jsx)(uV.c, {
            worldCode: yV,
            message: null
          })]
        }), "whitelist" === (null === QV || void 0 === QV ? void 0 : QV.visibility) && (0, iV.jsx)(Ve, {
          state: BV,
          lobbyName: UV,
          listed: NV,
          isListed: VV => (0, sV.k)(QV.whitelist, VV),
          Iq: (VV, eV) => {
            (0, YV.reportAnalyticsClick)(eV ? {
              id: "lobby_manage.whitelist_add",
              value: "iZ"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), TV(eV ? {
              whitelistAdd: [VV]
            } : {
              whitelistRemove: VV
            }, (xV => (0, sV.u)(xV, [VV], eV))).then((eV => {
              PV(`whitelist:${VV.toLowerCase()}`, eV)
            }))
          },
          uF: async VV => {
            (0, YV.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const eV = await TV({
              whitelistAdd: [VV]
            }, (eV => (0, sV.u)(eV, [VV], !0)));
            return null === eV ? {
              ok: !1,
              error: pV("worldSocial:changeFailed")
            } : "error" in eV ? {
              ok: !1,
              error: pV(eV.error)
            } : (0, sV.k)(eV.notFound, VV) ? {
              ok: !1,
              error: pV("lobbyManage:noPlayerCalled", {
                playerName: VV
              })
            } : {
              ok: !0
            }
          },
          statusOf: VV => xV.statusOf(`whitelist:${VV.toLowerCase()}`)
        }), "public" === (null === QV || void 0 === QV ? void 0 : QV.visibility) && null !== BV.listing && (0, iV.jsx)(ee, {
          manage: xV,
          listing: BV.listing
        })]
      })
    }

    function ye(VV) {
      var eV;
      let {
        manage: xV,
        lobbyName: JV
      } = VV;
      const {
        t: UV
      } = (0, rV.A)(), {
        state: yV
      } = xV, pV = wV(), QV = null !== (eV = yV.whitelist) && void 0 !== eV ? eV : [];
      return (0, iV.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, iV.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, iV.jsx)(EV.b, {
            label: UV("worldSocial:whoCanJoin")
          }), (0, iV.jsx)("div", {
            className: "LobbyManageModeText",
            children: UV(`worldSocial:${yV.visibility}`)
          })]
        }), "whitelist" === yV.visibility && yV.you.canEditWhitelist && (0, iV.jsx)(Ve, {
          state: yV,
          lobbyName: JV,
          listed: QV,
          isListed: VV => {
            var eV;
            return null !== (eV = pV.get(VV.toLowerCase())) && void 0 !== eV ? eV : (0, sV.k)(QV, VV)
          },
          Iq: (VV, eV) => {
            (0, YV.reportAnalyticsClick)(eV ? {
              id: "lobby_manage.whitelist_add",
              value: "iZ"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const JV = VV.toLowerCase();
            pV.hold(JV, eV, xV.send(eV ? {
              type: "whitelistAdd",
              names: [VV]
            } : {
              type: "whitelistRemove",
              name: VV
            }, `whitelist:${JV}`))
          },
          uF: async VV => {
            (0, YV.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const eV = await xV.send({
              type: "whitelistAdd",
              names: [VV]
            }, "whitelist-field");
            return eV.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, iV.jsx)(gV.b, {
                text: eV.message
              })
            }
          },
          statusOf: VV => xV.statusOf(`whitelist:${VV.toLowerCase()}`)
        }), "public" === yV.visibility && null !== yV.listing && (0, iV.jsx)(ee, {
          manage: xV,
          listing: yV.listing
        })]
      })
    }
    var pe = xV(5500),
      Qe = xV(1446);
    const ne = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const we = (0, JV.memo)((function(VV) {
      var eV;
      let {
        rule: xV,
        value: JV,
        status: YV,
        pending: UV,
        hiddenNames: yV,
        bM: pV,
        onAction: QV
      } = VV;
      const {
        t: nV
      } = (0, rV.A)(), wV = VV => pV(xV, VV), ZV = (VV, eV) => {
        QV(xV, VV, eV)
      }, vV = WV(nV, xV.label, yV), kV = xV.info ? WV(nV, xV.info, yV) : void 0, bV = xV.placeholder ? WV(nV, xV.placeholder, yV) : void 0, EV = (null !== (eV = xV.options) && void 0 !== eV ? eV : []).map((VV => ({
        value: VV.value,
        label: WV(nV, VV.label, yV)
      }))), BV = Math.max(0, ...EV.map((VV => function(VV) {
        let eV = 0;
        for (const xV of VV) eV += ne.test(xV) ? 2 : 1;
        return eV
      }(VV.label)))), jV = YV && (0, iV.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, iV.jsx)(CV, {
          status: YV
        })
      }), qV = (0, iV.jsxs)("div", {
        className: "SliderText",
        children: [vV, void 0 !== kV && (0, iV.jsx)(Qe.c, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: kV
        })]
      });
      return "toggle" === xV.kind ? (0, iV.jsxs)(iV.Fragment, {
        children: [(0, iV.jsx)(pe.e, {
          label: vV,
          checked: !0 === JV,
          circleInfoText: kV,
          disabled: UV,
          onClick: wV
        }), jV]
      }) : "choice" === xV.kind && EV.length <= 3 ? (0, iV.jsxs)(iV.Fragment, {
        children: [(0, iV.jsx)(pe.i, {
          label: vV,
          options: EV,
          value: String(JV),
          circleInfoText: kV,
          onChange: wV
        }), jV]
      }) : (0, iV.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [qV, "choice" === xV.kind && (0, iV.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": BV
          },
          children: (0, iV.jsx)(zV.c, {
            options: EV,
            value: String(JV),
            disabled: UV,
            onChange: VV => {
              wV(VV.value)
            }
          })
        }), ("number" === xV.kind || "text" === xV.kind) && (0, iV.jsx)(oV, {
          value: null === JV ? "" : String(JV),
          placeholder: bV,
          ariaLabel: vV,
          onSave: VV => {
            const eV = VV.trim(),
              JV = Number(eV);
            return wV("number" === xV.kind && "" !== eV && Number.isFinite(JV) ? JV : eV)
          }
        }), "action" === xV.kind && (0, iV.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [EV.length > 3 && (0, iV.jsx)(zV.c, {
            options: EV,
            value: {
              value: "",
              label: null !== bV && void 0 !== bV ? bV : vV
            },
            disabled: UV,
            onChange: VV => {
              ZV(VV.value)
            }
          }), EV.length > 0 && EV.length <= 3 && EV.map((VV => (0, iV.jsx)(tV.j, {
            className: "SmallTextLight",
            disabled: UV,
            onClick: () => {
              ZV(VV.value)
            },
            children: VV.label
          }, VV.value))), 0 === EV.length && (0, iV.jsx)(tV.j, {
            className: "SmallTextLight",
            disabled: UV,
            onClick: () => {
              ZV()
            },
            children: null !== bV && void 0 !== bV ? bV : vV
          })]
        }), "names" === xV.kind && (0, iV.jsx)(Ze, {
          names: Array.isArray(JV) ? JV : [],
          pending: UV,
          onAction: ZV
        }), jV]
      })
    }));

    function Ze(VV) {
      let {
        names: eV,
        pending: xV,
        onAction: YV
      } = VV;
      const {
        t: UV
      } = (0, rV.A)(), yV = (0, JV.useRef)(null), [pV, QV] = (0, JV.useState)(""), nV = () => {
        const VV = pV.trim();
        "" !== VV && (YV(VV, "add"), yV.current && (yV.current.value = ""), QV(""))
      };
      return (0, iV.jsxs)("div", {
        className: "LobbyManageNames",
        children: [eV.map((VV => (0, iV.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, iV.jsx)("span", {
            className: "LobbyManageNameText",
            children: VV
          }), (0, iV.jsx)(tV.j, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: UV("lobbyManage:removeName", {
              name: VV
            }),
            disabled: xV,
            onClick: () => {
              YV(VV, "remove")
            },
            children: (0, iV.jsx)(kV.b, {
              name: "xmark"
            })
          })]
        }, VV))), (0, iV.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, iV.jsx)(DV.d, {
            domRef: yV,
            placeholderText: UV("lobbyManage:namePlaceholder"),
            ariaLabel: UV("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: VV => {
              QV(VV)
            },
            onEnter: nV
          }), (0, iV.jsx)(tV.j, {
            className: "SmallTextLight",
            disabled: xV || "" === pV.trim(),
            onClick: nV,
            children: UV("lobbyManage:addHere")
          })]
        })]
      })
    }
    const ve = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function re(VV, eV) {
      return ve.map((xV => {
        let {
          group: JV,
          title: YV
        } = xV;
        const UV = VV.filter((VV => VV.group === JV && void 0 === VV.parent)).map((xV => {
          const JV = !0 === eV(xV) ? VV.filter((VV => VV.parent === xV.key)) : [];
          return {
            rule: xV,
            children: JV
          }
        }));
        return {
          group: JV,
          title: YV,
          items: UV
        }
      }))
    }

    function ke(VV) {
      return VV.flatMap((VV => {
        let {
          items: eV
        } = VV;
        return eV.flatMap((VV => {
          let {
            rule: eV,
            children: xV
          } = VV;
          return [eV, ...xV]
        }))
      }))
    }

    function be(VV) {
      let {
        manage: eV,
        rowsShown: xV
      } = VV;
      const {
        t: UV
      } = (0, rV.A)(), yV = (0, qV.h)("hiddenPlayerNames"), {
        rules: pV
      } = eV.state, QV = wV(), nV = VV => {
        const eV = QV.get(VV.key);
        return void 0 === eV ? VV.value : eV
      }, ZV = re(pV, nV), [vV] = (0, JV.useState)((() => ke(ZV).map((VV => VV.key)))), kV = xV === 1 / 0 ? null : new Set(vV.slice(0, xV)), bV = VV => null === kV || kV.has(VV.key), {
        hold: BV
      } = QV, jV = (0, JV.useCallback)(((VV, xV) => {
        (0, YV.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: VV.key
        });
        const JV = eV.send({
          type: "setRule",
          key: VV.key,
          value: xV
        }, `rule:${VV.key}`);
        return BV(VV.key, xV, JV), JV
      }), [eV, BV]), tV = (0, JV.useCallback)(((VV, xV, JV) => {
        (0, YV.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: VV.key
        }), eV.send({
          type: "ruleAction",
          key: VV.key,
          ...void 0 === xV ? {} : {
            arg: xV
          },
          ...void 0 === JV ? {} : {
            op: JV
          }
        }, `rule:${VV.key}`, void 0 === JV ? UV("lobbyManage:setJustNow") : void 0)
      }), [eV, UV]), FV = VV => {
        const xV = `rule:${VV.key}`;
        return (0, iV.jsx)(we, {
          rule: VV,
          value: nV(VV),
          status: eV.statusOf(xV),
          pending: eV.isPending(xV),
          hiddenNames: yV,
          bM: jV,
          onAction: tV
        }, VV.key)
      };
      return (0, iV.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: ZV.map((VV => {
          let {
            group: eV,
            title: xV,
            items: YV
          } = VV;
          const yV = YV.filter((VV => {
            let {
              rule: eV
            } = VV;
            return bV(eV)
          }));
          return 0 === yV.length ? null : (0, iV.jsxs)(JV.Fragment, {
            children: [(0, iV.jsx)(EV.b, {
              label: UV(xV)
            }), yV.map((VV => {
              let {
                rule: eV,
                children: xV
              } = VV;
              return 0 === xV.length ? FV(eV) : (0, iV.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [FV(eV), xV.filter(bV).map(FV)]
              }, eV.key)
            }))]
          }, eV)
        }))
      })
    }
    const Ee = {
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
      Be = 5,
      je = (0, JV.memo)((function(VV) {
        let {
          page: eV,
          manage: xV,
          leaderboard: YV,
          focusRequest: UV,
          onFocused: yV,
          ruleRowsShown: pV
        } = VV;
        return "leaderboard" === eV ? (0, iV.jsx)(JV.Suspense, {
          fallback: (0, iV.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, iV.jsx)(bV.d, {})
          }),
          children: YV
        }) : "joining" === eV ? (0, iV.jsx)(Je, {
          manage: xV
        }) : "rules" === eV ? (0, iV.jsx)(be, {
          manage: xV,
          rowsShown: pV
        }) : (0, iV.jsx)(LV, {
          manage: xV,
          focusRequest: UV,
          onFocused: yV
        })
      }));

    function qe(VV) {
      let {
        page: eV
      } = VV;
      const {
        t: xV
      } = (0, rV.A)(), JV = Ee[eV];
      return (0, iV.jsxs)(iV.Fragment, {
        children: [(0, iV.jsx)(kV.b, {
          name: JV.icon
        }), " ", (0, iV.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: xV(JV.title)
        })]
      })
    }

    function te(VV) {
      var eV;
      const {
        t: xV
      } = (0, rV.A)(), {
        pages: UV,
        landing: yV
      } = VV, QV = (0, JV.useRef)(null), nV = (0, JV.useRef)(null), wV = (0, JV.useRef)(null), ZV = (0, JV.useRef)(new Map), [kV, bV] = (0, JV.useState)(null), qV = (0, JV.useRef)(kV), tV = (0, JV.useRef)(0), [FV, TV] = (0, JV.useState)(UV[0]), PV = null !== kV && void 0 !== kV ? kV : UV.includes(FV) ? FV : UV[0], [AV] = (0, JV.useState)(null !== (eV = null === yV || void 0 === yV ? void 0 : yV.page) && void 0 !== eV ? eV : null), NV = null !== AV && UV.includes(AV) ? [AV, ...UV.filter((VV => VV !== AV))] : UV, [XV] = (0, JV.useState)((() => {
        const eV = ke(re(VV.manage.state.rules, (VV => VV.value)));
        return Math.max(1, Math.ceil(eV.length / Be))
      })), MV = NV.flatMap((VV => "rules" === VV ? Array(XV).fill(VV) : [VV])), zV = function(VV, eV) {
        const [xV, YV] = (0, JV.useState)(VV), UV = xV >= eV;
        return UV && xV !== 1 / 0 && YV(1 / 0), (0, JV.useLayoutEffect)((() => {
          if (UV) return;
          let VV = !0;
          return (0, jV.f)().then((() => {
            VV && YV((VV => VV + 1))
          })), () => {
            VV = !1
          }
        }), [xV, UV]), UV ? 1 / 0 : xV
      }(1, MV.length), GV = MV.slice(0, zV), WV = new Set(GV), RV = zV < MV.length, gV = RV ? GV.filter((VV => "rules" === VV)).length * Be : 1 / 0, DV = (0, JV.useRef)(VV.focusRequest);
      DV.current = VV.focusRequest;
      const CV = VV => {
          qV.current = VV, bV(VV)
        },
        aV = () => {
          var VV, eV;
          QV.current.style.scrollPaddingTop = `${null!==(VV=null===(eV=wV.current)||void 0===eV?void 0:eV.offsetHeight)&&void 0!==VV?VV:0}px`
        },
        oV = VV => {
          const eV = QV.current,
            xV = ZV.current.get(VV);
          if (void 0 === xV) return;
          const JV = document.activeElement,
            YV = DV.current,
            UV = null === YV ? null : xV.querySelector(`[data-lobby-manage-row="${CSS.escape(YV.name)}"]`);
          aV(), JV instanceof HTMLElement && null !== UV && void 0 !== UV && UV.contains(JV) ? JV.scrollIntoView({
            block: "center"
          }) : null === xV.previousElementSibling ? eV.scrollTop = 0 : xV.scrollIntoView({
            block: "start"
          }), tV.current = eV.scrollTop
        },
        cV = VV => {
          (0, YV.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: VV
          }), CV(VV), oV(VV)
        },
        hV = () => {
          var VV, eV;
          const xV = QV.current,
            JV = xV.getBoundingClientRect().top + (null !== (VV = null === (eV = wV.current) || void 0 === eV ? void 0 : eV.offsetHeight) && void 0 !== VV ? VV : 0),
            YV = UV.map((VV => {
              var eV, xV;
              return (null !== (eV = null === (xV = ZV.current.get(VV)) || void 0 === xV ? void 0 : xV.getBoundingClientRect().top) && void 0 !== eV ? eV : 1 / 0) - JV
            })),
            yV = !RV && xV.scrollTop + xV.clientHeight >= xV.scrollHeight - 1;
          TV(UV[(0, pV.l)(YV, yV)])
        },
        lV = () => {
          null !== qV.current && (CV(null), hV())
        };
      (0, JV.useLayoutEffect)((() => {
        null !== yV && UV.includes(yV.page) && cV(yV.page)
      }), [null === yV || void 0 === yV ? void 0 : yV.seq]), (0, JV.useLayoutEffect)((() => {
        null === qV.current || UV.includes(qV.current) || lV()
      }));
      const {
        onFocused: LV
      } = VV, fV = (0, JV.useCallback)((VV => {
        null !== qV.current && oV(qV.current), LV(VV)
      }), [LV]);
      (0, JV.useLayoutEffect)((() => {
        const VV = qV.current;
        null !== VV && (!RV || UV.indexOf(MV[zV - 1]) < UV.indexOf(VV)) && oV(VV)
      }), [zV]), (0, JV.useEffect)((() => {
        const VV = new ResizeObserver((() => {
          null !== qV.current ? oV(qV.current) : aV()
        }));
        return VV.observe(QV.current), VV.observe(nV.current), () => {
          VV.disconnect()
        }
      }), []), (0, JV.useLayoutEffect)((() => {
        const VV = wV.current,
          eV = null === VV || void 0 === VV ? void 0 : VV.querySelector(".SegmentedToggleOptionSelected");
        eV && (VV.scrollLeft = Math.min(eV.offsetLeft, Math.max(VV.scrollLeft, eV.offsetLeft + eV.offsetWidth - VV.clientWidth)))
      }), [PV]);
      return (0, iV.jsxs)("div", {
        ref: QV,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === qV.current ? hV() : Math.abs(QV.current.scrollTop - tV.current) > 1 && lV()
        },
        onClick: VV => {
          var eV;
          null !== (eV = wV.current) && void 0 !== eV && eV.contains(VV.target) || lV()
        },
        onFocus: VV => {
          var eV;
          const xV = null === qV.current ? null : ZV.current.get(qV.current);
          !xV || xV.contains(VV.target) || null !== (eV = wV.current) && void 0 !== eV && eV.contains(VV.target) || lV()
        },
        children: [UV.length > 1 && (0, iV.jsx)("div", {
          ref: wV,
          className: "LobbyManageChips",
          children: (0, iV.jsx)(BV.b, {
            options: UV.map((VV => ({
              value: VV,
              label: (0, iV.jsx)(qe, {
                page: VV
              }),
              ariaLabel: xV(Ee[VV].title)
            }))),
            value: PV,
            padTabs: "2",
            ariaLabel: xV("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: cV
          })
        }), (0, iV.jsx)("div", {
          ref: nV,
          className: vV()("LobbyManageInner", {
            Staging: RV
          }),
          children: UV.filter((VV => WV.has(VV))).map((eV => {
            const xV = eV === kV;
            return (0, iV.jsxs)("section", {
              ref: VV => {
                VV ? ZV.current.set(eV, VV) : ZV.current.delete(eV)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": xV || void 0,
              children: [UV.length > 1 && (0, iV.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": xV || void 0,
                "data-pad-unavailable": xV || void 0,
                children: (0, iV.jsx)(EV.b, {
                  label: (0, iV.jsx)(qe, {
                    page: eV
                  })
                })
              }), (0, iV.jsx)(je, {
                page: eV,
                manage: VV.manage,
                leaderboard: VV.leaderboard,
                focusRequest: VV.focusRequest,
                onFocused: fV,
                ruleRowsShown: "rules" === eV ? gV : 1 / 0
              })]
            }, eV)
          }))
        })]
      })
    }

    function Fe(VV) {
      return void 0 === (null === VV || void 0 === VV ? void 0 : VV.page) ? null : {
        page: VV.page,
        seq: VV.seq
      }
    }

    function Te(VV) {
      let {
        leaderboard: eV
      } = VV;
      const xV = function() {
          const VV = (0, QV.j)("lobbyManage"),
            [eV, xV] = (0, JV.useReducer)((VV => VV + 1), 0),
            [YV] = (0, JV.useState)((() => new nV.d(xV)));
          return (0, JV.useEffect)((() => {
            const VV = YV.nextDeadline();
            if (null === VV) return;
            const eV = setTimeout((() => {
              YV.expire(Date.now()), xV()
            }), Math.max(0, VV - Date.now()));
            return () => {
              clearTimeout(eV)
            }
          })), (0, JV.useMemo)((() => null === VV ? null : {
            state: VV,
            send: (VV, eV, JV) => {
              const UV = YV.send(VV, eV, null !== JV && void 0 !== JV ? JV : null);
              return xV(), UV
            },
            statusOf: VV => YV.statusOf(VV, Date.now()),
            showStatus: (VV, eV) => {
              YV.show(VV, eV)
            },
            isPending: VV => YV.isPending(VV)
          }), [VV, eV, YV])
        }(),
        wV = (0, pV.o)((0, UV.b)()),
        ZV = (0, yV.j)(),
        [vV, rV] = (0, JV.useState)((() => Fe(ZV))),
        [kV, bV] = (0, JV.useState)(null);
      return (0, JV.useEffect)((() => {
        null === ZV && (0, YV.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, JV.useEffect)((() => {
        null !== ZV && (rV((VV => (null === VV || void 0 === VV ? void 0 : VV.seq) === ZV.seq ? VV : Fe(ZV))), void 0 !== ZV.focusName && "players" === ZV.page ? bV({
          name: ZV.focusName,
          seq: ZV.seq
        }) : (0, yV.f)(ZV.seq))
      }), [null === ZV || void 0 === ZV ? void 0 : ZV.seq]), null === xV ? null : (0, iV.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, iV.jsx)(te, {
          pages: (0, pV.h)(xV.state, wV),
          manage: xV,
          leaderboard: eV,
          focusRequest: kV,
          onFocused: yV.f,
          landing: vV
        })
      })
    }
  },
  37712: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => wV,
      f: () => QV
    });
    var JV = xV(1586),
      YV = xV(2080),
      UV = xV(2051);
    const yV = 1e4;
    let pV = 0;

    function QV(VV) {
      const eV = ++pV;
      return new Promise((xV => {
        const pV = eV => {
            QV(), clearTimeout(nV), !1 === (null === eV || void 0 === eV ? void 0 : eV.ok) && (0, JV.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: VV.type
            }), xV(eV)
          },
          QV = YV.c.subscribe("lobbyManage", (VV => {
            const xV = function(VV, eV) {
              var xV;
              return null !== (xV = null === VV || void 0 === VV ? void 0 : VV.results.find((VV => VV.requestId === eV))) && void 0 !== xV ? xV : null
            }(VV, eV);
            null !== xV && pV(xV)
          })),
          nV = setTimeout((() => {
            pV(null)
          }), yV);
        UV.gameBridge.send("lobbyManage", {
          ...VV,
          requestId: eV
        })
      }))
    }
    const nV = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class wV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QV;
        this.onChange = VV, this.sendAction = eV, this.pending = new Map, this.statuses = new Map
      }
      send(VV, eV, xV) {
        var JV;
        return this.statuses.delete(eV), this.pending.set(eV, (null !== (JV = this.pending.get(eV)) && void 0 !== JV ? JV : 0) + 1), this.sendAction(VV).then((VV => {
          var JV;
          const YV = null !== VV && void 0 !== VV ? VV : {
              requestId: -1,
              ok: !1,
              message: nV
            },
            UV = (null !== (JV = this.pending.get(eV)) && void 0 !== JV ? JV : 1) - 1;
          UV > 0 ? this.pending.set(eV, UV) : this.pending.delete(eV);
          const yV = !YV.ok || YV.message.length > 0 ? YV.message : null === xV ? null : [xV];
          return null !== yV && this.statuses.set(eV, {
            ok: YV.ok,
            text: yV,
            until: Date.now() + 4e3
          }), this.onChange(), YV
        }))
      }
      show(VV, eV) {
        this.statuses.set(VV, {
          ...eV,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(VV) {
        for (const [eV, xV] of this.statuses) xV.until <= VV && this.statuses.delete(eV)
      }
      nextDeadline() {
        let VV = null;
        for (const xV of this.statuses.values()) {
          var eV;
          VV = Math.min(null !== (eV = VV) && void 0 !== eV ? eV : 1 / 0, xV.until)
        }
        return VV
      }
      statusOf(VV, eV) {
        const xV = this.statuses.get(VV);
        return !xV || xV.until <= eV ? null : {
          ok: xV.ok,
          text: xV.text
        }
      }
      isPending(VV) {
        return this.pending.has(VV)
      }
    }
  },
  37902: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => ZV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(1772),
      pV = xV(1551),
      QV = xV(1408),
      nV = xV(1414),
      wV = xV(1321);

    function ZV(VV) {
      let {
        label: eV,
        icon: xV,
        placeholder: YV,
        onSubmit: ZV
      } = VV;
      const vV = (0, JV.useRef)(null),
        [rV, kV] = (0, JV.useState)(""),
        [bV, EV] = (0, JV.useState)("Enter"),
        [BV, jV] = (0, JV.useState)(null);
      (0, JV.useEffect)((() => {
        if ("Success" !== bV && "Error" !== bV) return;
        const VV = setTimeout((() => {
          "Success" === bV && vV.current && (vV.current.value = "", kV("")), EV("Enter")
        }), "Success" === bV ? 1e3 : 4e3);
        return () => {
          clearTimeout(VV)
        }
      }), [bV]);
      const qV = () => {
        const VV = rV.trim();
        "" !== VV && "Enter" === bV && (EV("Loading"), ZV(VV).then((VV => {
          vV.current && ("error" in VV ? null === VV.error ? EV("Enter") : (jV(VV.error), EV("Error")) : EV("Success"))
        })))
      };
      return (0, wV.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: VV => {
          VV.target === vV.current && "Escape" !== VV.key && VV.stopPropagation()
        },
        children: [(0, wV.jsxs)("div", {
          className: UV()("AddFriendBodyOverlay", `AddFriendBodyOverlay${bV}`),
          children: ["Loading" === bV && (0, wV.jsx)(QV.d, {}), "Success" === bV && (0, wV.jsx)(nV.b, {
            name: "check"
          }), "Error" === bV && BV]
        }), (0, wV.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, wV.jsx)(yV.d, {
            className: "PlayerSearchInput",
            domRef: vV,
            maxLength: 32,
            placeholderText: YV,
            ariaLabel: YV,
            stopPropagation: !1,
            onValueChange: VV => {
              kV(VV)
            },
            onEnter: qV
          }), (0, wV.jsxs)(pV.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== bV || "" === rV.trim(),
            onClick: qV,
            children: [(0, wV.jsx)(nV.b, {
              name: xV
            }), " ", eV]
          })]
        })]
      })
    }
  },
  37882: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => ZV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(1220),
      pV = xV(1414),
      QV = xV(1321);
    const nV = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      wV = ["unlisted", "public", "whitelist", "private"];

    function ZV(VV) {
      let {
        visibility: eV,
        onPick: xV
      } = VV;
      const {
        t: YV
      } = (0, yV.A)(), ZV = (0, JV.useRef)([]);
      return (0, QV.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": YV("worldSocial:whoCanJoin"),
        children: wV.map(((VV, JV) => {
          const yV = VV === eV;
          return (0, QV.jsxs)("button", {
            ref: VV => {
              ZV.current[JV] = VV
            },
            type: "button",
            className: UV()("WorldSocialTile", {
              WorldSocialTileSelected: yV
            }),
            "aria-pressed": yV,
            tabIndex: yV ? 0 : -1,
            onKeyDown: VV => {
              ((VV, eV) => {
                const xV = "ArrowRight" === VV.key || "ArrowDown" === VV.key ? 1 : "ArrowLeft" === VV.key || "ArrowUp" === VV.key ? -1 : 0;
                var JV;
                0 !== xV && (VV.preventDefault(), null === (JV = ZV.current[(eV + xV + wV.length) % wV.length]) || void 0 === JV || JV.focus())
              })(VV, JV)
            },
            onClick: () => {
              xV(VV)
            },
            children: [(0, QV.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, QV.jsx)(pV.b, {
                name: nV[VV]
              })
            }), (0, QV.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, QV.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: YV(`worldSocial:${VV}`)
              }), (0, QV.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: YV(`worldSocial:${VV}Description`)
              })]
            })]
          }, VV)
        }))
      })
    }
  },
  37898: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV
    });
    var JV = xV(1220),
      YV = xV(2942),
      UV = xV(4795),
      yV = xV(1321);

    function pV(VV) {
      let {
        iZ: eV,
        children: xV,
        ...pV
      } = VV;
      const {
        t: QV
      } = (0, JV.A)();
      return (0, yV.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          eV.onChange(!eV.on)
        },
        children: (0, yV.jsx)(YV.e, {
          ...pV,
          opensProfileCard: !1,
          children: (0, yV.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: VV => {
              VV.stopPropagation()
            },
            children: [xV, (0, yV.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, yV.jsx)(UV.b, {
                checked: eV.on,
                disabled: !1,
                ariaLabel: QV("worldSocial:letJoin", {
                  playerName: pV.playerSocialPreview.name
                }),
                onChange: VV => {
                  eV.onChange(VV.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37875: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => kV
    });
    var JV = xV(62),
      YV = xV(1220),
      UV = xV(1976),
      yV = xV(99),
      pV = xV(27),
      QV = xV(1586),
      nV = xV(2966),
      wV = xV(35213),
      ZV = xV(1551),
      vV = xV(1414),
      rV = xV(1321);

    function kV(VV) {
      let {
        worldCode: eV,
        message: xV
      } = VV;
      const {
        t: kV
      } = (0, YV.A)(), {
        isTouchScreen: bV
      } = (0, pV.l)(["isTouchScreen"]), EV = yV.featureFlags.canUseInviteLinks, BV = (0, wV.i)(EV && null === xV), [jV, qV] = (0, nV.d)(), tV = (0, JV.useRef)(null);
      if (null !== xV) return (0, rV.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, rV.jsx)(vV.b, {
          name: "lock"
        }), (0, rV.jsx)("span", {
          children: xV
        })]
      });
      const FV = EV ? BV : eV,
        TV = bV && EV && (0, nV.b)();
      return (0, rV.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!EV && (0, rV.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: kV("worldSocial:worldCode")
        }), (0, rV.jsx)("input", {
          ref: tV,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== FV && void 0 !== FV ? FV : "",
          "aria-label": kV(EV ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: VV => {
            VV.currentTarget.select()
          }
        }), (0, rV.jsxs)(ZV.f, {
          className: "WorldSocialCopy",
          disabled: null === FV,
          onClick: () => {
            null !== FV && (0, nV.c)(FV, {
              useShareSheet: TV,
              onOutcome: VV => {
                if ((0, QV.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== VV || EV ? VV : "code"
                  }), "copied" === VV) qV();
                else if ("failed" === VV) {
                  var eV;
                  null === (eV = tV.current) || void 0 === eV || eV.focus(), UV.e.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, rV.jsx)(vV.b, {
            name: jV ? "check" : TV ? "up-from-bracket" : "copy"
          }), " ", kV(jV ? "general:copied" : TV ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37891: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => rV,
      h: () => vV,
      k: () => ZV
    });
    var JV = xV(642),
      YV = xV(1220),
      UV = xV(1734),
      yV = xV(2942),
      pV = xV(2903),
      QV = xV(1551),
      nV = xV(37898),
      wV = xV(1321);

    function ZV(VV, eV) {
      var xV;
      return {
        isError: !1,
        name: VV,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== eV && void 0 !== eV ? eV : {},
        nameColour: null !== (xV = null === eV || void 0 === eV ? void 0 : eV.nameColour) && void 0 !== xV ? xV : JV.e,
        location: {
          status: "offline"
        }
      }
    }

    function vV(VV) {
      let {
        player: eV,
        isFriend: xV = !1,
        status: JV,
        showLocation: QV = void 0 === JV,
        iZ: ZV,
        onSendFriendRequest: vV,
        actions: rV,
        zIndex: kV
      } = VV;
      const {
        t: bV
      } = (0, YV.A)();
      let EV = JV;
      null !== ZV && void 0 !== ZV && ZV.on && (EV = (0, wV.jsxs)(wV.Fragment, {
        children: [null !== JV && void 0 !== JV ? JV : (0, wV.jsx)(pV.e, {
          socialPreview: eV
        }), (0, wV.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", bV("worldSocial:canJoin")]
        })]
      }));
      const BV = {
        playerSocialPreview: eV,
        isFriend: xV,
        hideFriendBadge: !0,
        onFriendRemoved: xV ? VV => {
          UV.c.removeFriendFromState(VV)
        } : void 0,
        status: EV,
        showLocation: QV,
        onSendFriendRequest: vV,
        zIndex: kV
      };
      return ZV ? (0, wV.jsx)(nV.d, {
        ...BV,
        iZ: ZV,
        children: rV
      }) : (0, wV.jsx)(yV.e, {
        ...BV,
        opensProfileCard: !1,
        children: rV || void 0
      })
    }

    function rV(VV) {
      let {
        row: eV,
        iZ: xV,
        canInvite: JV,
        invited: UV,
        onInvite: yV,
        zIndex: pV
      } = VV;
      const {
        t: nV
      } = (0, YV.A)(), ZV = "online" === eV.place ? QV.f : QV.j;
      return (0, wV.jsx)(vV, {
        player: eV.friend,
        isFriend: !0,
        status: "here" === eV.place ? nV("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        iZ: xV,
        zIndex: pV,
        actions: JV && (0, wV.jsx)(ZV, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: UV,
          onClick: yV,
          ariaLabel: `${nV("worldSocial:invite")} ${eV.friend.name}`,
          children: nV(UV ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37869: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => QV,
      e: () => yV,
      g: () => nV
    });
    var JV = xV(62),
      YV = xV(5056),
      UV = xV(1976);

    function yV(VV) {
      const eV = {
        lobbyName: VV,
        answer: null,
        response: YV.e.getSocialSettings(VV)
      };
      return eV.response.then((VV => {
        eV.answer = VV
      })), eV
    }
    const pV = new Map;

    function QV(VV) {
      pV.set(VV.lobbyName, VV)
    }

    function nV(VV) {
      const [eV] = (0, JV.useState)((() => function(VV) {
        var eV;
        const xV = null !== (eV = pV.get(VV)) && void 0 !== eV ? eV : null;
        return null !== xV && void 0 !== xV && xV.answer && "error" in xV.answer ? null : xV
      }(VV))), [xV, yV] = (0, JV.useState)((() => null !== eV && void 0 !== eV && eV.answer && "settings" in eV.answer ? eV.answer.settings : null)), [QV, nV] = (0, JV.useState)(!0), [wV, ZV] = (0, JV.useState)(null !== xV), vV = (0, JV.useRef)(xV);
      vV.current = xV;
      const rV = (0, JV.useRef)(0),
        kV = (0, JV.useRef)(0),
        bV = (0, JV.useRef)(!1),
        EV = (0, JV.useRef)(!0),
        BV = (0, JV.useCallback)((async eV => {
          const xV = ++rV.current,
            JV = await (null !== eV && void 0 !== eV ? eV : YV.e.getSocialSettings(VV));
          EV.current && xV === rV.current && (ZV(!0), nV(!1), "error" in JV || yV(JV.settings))
        }), [VV]),
        jV = (0, JV.useCallback)((() => {
          nV(!0), BV()
        }), [BV]),
        qV = (0, JV.useCallback)((() => {
          kV.current > 0 ? bV.current = !0 : BV()
        }), [BV]);
      (0, JV.useEffect)((() => (EV.current = !0, pV.delete(VV), nV(!0), BV(null === eV || void 0 === eV ? void 0 : eV.response), () => {
        EV.current = !1
      })), [BV, VV, eV]);
      const tV = VV => {
        rV.current++, nV(!1), vV.current = VV, yV(VV)
      };
      return {
        settings: xV,
        loading: QV,
        answered: wV,
        retry: jV,
        refresh: qV,
        change: async function(eV, xV) {
          let {
            quiet: JV = !1,
            onAnswer: yV
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const pV = vV.current;
          if (null === pV) return !1;
          tV(xV(pV)), kV.current > 0 && (bV.current = !0), kV.current++;
          const QV = await YV.e.setSocialSettings(VV, eV);
          kV.current--;
          const nV = !("error" in QV);
          if (!EV.current) return nV;
          if (null === yV || void 0 === yV || yV(QV), JV);
          else if ("error" in QV) UV.e.showMessage({
            translationKey: QV.error
          });
          else
            for (const VV of QV.notFound) UV.e.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: VV
              }
            });
          if (kV.current > 0) return nV;
          const wV = bV.current;
          return bV.current = !1, !wV && "settings" in QV ? tV(QV.settings) : (wV || tV(pV), BV()), nV
        }
      }
    }
  },
  37911: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV,
      d: () => UV
    });
    var JV = xV(165);
    const YV = new Map;

    function UV(VV, eV) {
      var xV;
      const JV = null !== (xV = YV.get(VV)) && void 0 !== xV ? xV : new Map;
      JV.set(eV, Date.now()), YV.set(VV, JV)
    }

    function yV(VV) {
      const eV = YV.get(VV);
      if (!eV) return [];
      const xV = Date.now();
      for (const [YV, UV] of eV) xV - UV >= JV.l && eV.delete(YV);
      return [...eV.keys()]
    }
  },
  37871: (VV, eV, xV) => {
    function JV(VV, eV) {
      const xV = eV.toLowerCase();
      for (const JV of VV)
        if (JV.toLowerCase() === xV) return !0;
      return !1
    }

    function YV(VV, eV, xV) {
      const YV = [],
        UV = [],
        yV = [];
      for (const pV of VV) !pV.isError && pV.name && ("inGame" === pV.location.status && pV.location.inLobbyName === eV || JV(xV, pV.name) ? UV.push({
        friend: pV,
        place: "here"
      }) : "offline" === pV.location.status ? yV.push({
        friend: pV,
        place: "offline"
      }) : YV.push({
        friend: pV,
        place: "online"
      }));
      return [...YV, ...UV, ...yV]
    }

    function UV(VV, eV, xV) {
      const YV = [],
        UV = VV.flatMap((VV => "here" === VV.place ? [VV.friend.name] : []));
      for (const yV of [...UV, ...eV]) JV(YV, yV) || JV(xV, yV) || YV.push(yV);
      return YV
    }

    function yV(VV, eV) {
      return null === VV || void 0 === VV || !VV.canManage || JV(VV.whitelist, eV) ? "none" : "whitelist" === VV.visibility ? "required" : "quiet"
    }

    function pV(VV) {
      if (null === VV) return !0;
      const {
        visibility: eV
      } = VV;
      return "public" === eV || "unlisted" === eV || "whitelist" === eV && VV.canManage
    }

    function QV(VV, eV, xV) {
      if (xV) {
        const xV = eV.filter((eV => !JV(VV.whitelist, eV)));
        return {
          ...VV,
          whitelist: [...VV.whitelist, ...xV]
        }
      }
      return {
        ...VV,
        whitelist: VV.whitelist.filter((VV => !JV(eV, VV)))
      }
    }

    function nV(VV, eV) {
      const xV = [];
      for (let JV = 0; JV < VV.length; JV += eV) xV.push(VV.slice(JV, JV + eV));
      return xV
    }
    xV.d(eV, {
      c: () => pV,
      e: () => UV,
      g: () => YV,
      k: () => JV,
      o: () => nV,
      r: () => yV,
      u: () => QV
    })
  },
  38185: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV
    });
    var JV = xV(62),
      YV = xV(2693);

    function UV() {
      const VV = (0, YV.j)("lobbyLeaderboardInfo");
      return (0, JV.useMemo)((() => function(VV) {
        if (null === VV) return null;
        const eV = Object.entries(VV),
          xV = eV.filter((VV => {
            let [, eV] = VV;
            return void 0 !== eV
          }));
        if (xV.length === eV.length) return VV;
        const JV = Object.fromEntries(xV),
          YV = Object.keys(VV).filter((VV => !Object.hasOwn(JV, VV)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${YV.join(", ")}`), JV
      }(VV)), [VV])
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);