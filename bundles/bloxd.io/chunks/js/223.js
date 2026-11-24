export const id = 223;
export const ids = [223];
export const modules = {
  41170: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      LobbyManageView: () => Sj
    });
    var QB = zB(62),
      nB = zB(1514),
      dB = zB(37091),
      IB = zB(2540),
      NB = zB(2543),
      uB = zB(2516),
      UB = zB(36637);

    function aB() {
      const [BB, jB] = (0, QB.useState)(new Map);
      return {
        get: jB => BB.get(jB),
        hold: (0, QB.useCallback)(((BB, zB, QB) => {
          jB((jB => new Map(jB).set(BB, zB))), QB.then((() => {
            jB((jB => {
              const zB = new Map(jB);
              return zB.delete(BB), zB
            }))
          }))
        }), [])
      }
    }
    var pB = zB(1091),
      rB = zB.n(pB),
      sB = zB(1240),
      JB = zB(1108),
      mB = zB(1369),
      yB = zB(2772),
      kB = zB(5097),
      GB = zB(3551);
    var LB = zB(2025),
      gB = zB(1478);

    function tB(BB, jB, zB) {
      const QB = BB.filter((BB => BB.name !== jB)),
        nB = QB.filter((BB => "none" === BB.role)).sort(((BB, jB) => jB.at - BB.at)),
        dB = QB.filter((BB => "none" !== BB.role)).sort(((BB, jB) => zB.indexOf(BB.role) - zB.indexOf(jB.role) || jB.at - BB.at));
      return [...BB.some((BB => BB.name === jB)) && null !== jB ? [jB] : [], ...[...nB, ...dB].map((BB => BB.name))]
    }

    function SB(BB, jB) {
      const zB = BB.banned.map((BB => BB.name)),
        QB = new Set(zB);
      return {
        here: tB(BB.here, jB, BB.roles.map((BB => BB.role))),
        away: BB.away.filter((BB => !QB.has(BB.name))).map((BB => BB.name)),
        banned: zB
      }
    }

    function MB(BB, jB) {
      const zB = BB.here.find((BB => BB.name === jB));
      if (zB) return {
        section: "here",
        player: zB
      };
      const QB = BB.banned.find((BB => BB.name === jB));
      if (QB) return {
        section: "banned",
        bannedAt: QB.at
      };
      const nB = BB.away.find((BB => BB.name === jB));
      return nB ? {
        section: "away",
        player: nB
      } : {
        section: "gone"
      }
    }
    const EB = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var iB = zB(2766),
      qB = zB(36633),
      fB = zB(36800),
      oB = zB(3252),
      HB = zB(376);

    function DB(BB, jB, zB) {
      return jB.map((jB => {
        if ("string" === typeof jB) return jB;
        const QB = "str" in jB ? jB.str : jB;
        return "string" === typeof QB ? QB : "entityName" in QB ? QB.entityName : "translationKey" in QB ? BB(QB.translationKey, (0, sB.p)(QB.params, zB)) : ""
      })).join("")
    }

    function FB(BB, jB, zB, QB, nB) {
      return nB - QB < 6e4 ? BB(`${zB}JustNow`) : BB(zB, {
        time: (0, HB.$)((0, sB.n)(jB, zB), QB, nB)
      })
    }
    var YB = zB(1952),
      VB = zB(1710),
      hB = zB(1148);

    function XB(BB) {
      let {
        status: jB
      } = BB;
      return (0, hB.jsx)("span", {
        className: rB()("LobbyManageStatus", {
          LobbyManageStatusRefused: !jB.ok
        }),
        children: (0, hB.jsx)(YB.e, {
          text: jB.text
        })
      })
    }

    function ZB(BB) {
      let {
        names: jB,
        cap: zB,
        filterFrom: nB,
        moreLabel: dB,
        reveal: IB = null,
        renderRow: NB
      } = BB;
      const {
        t: uB
      } = (0, sB.D)(), [UB, aB] = (0, QB.useState)(!1), [pB, rB] = (0, QB.useState)(""), mB = UB || null !== IB && jB.indexOf(IB) >= zB, kB = (mB || jB.length <= zB) && null !== nB && jB.length > nB, GB = pB.trim().toLowerCase();
      let LB = mB ? jB : jB.slice(0, zB);
      return kB && "" !== GB && (LB = LB.filter((BB => BB.toLowerCase().includes(GB)))), (0, hB.jsxs)(hB.Fragment, {
        children: [kB && (0, hB.jsx)(VB.d, {
          className: "LobbyManageFilter",
          placeholderText: uB("lobbyManage:findName"),
          ariaLabel: uB("lobbyManage:findName"),
          onValueChange: BB => {
            rB(BB)
          }
        }), LB.length > 0 && (0, hB.jsx)("div", {
          className: "PlayerRows",
          children: LB.map(((BB, jB) => NB(BB, LB.length - jB)))
        }), !mB && jB.length > zB && (0, hB.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, hB.jsx)(yB.d, {
            label: (0, hB.jsxs)(hB.Fragment, {
              children: [dB, " ", (0, hB.jsx)(JB.c, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              aB(!0)
            }
          })
        })]
      })
    }

    function AB(BB) {
      let {
        value: jB,
        placeholder: zB,
        ariaLabel: nB,
        maxLength: dB,
        wide: IB = !1,
        onSave: NB
      } = BB;
      const uB = (0, QB.useRef)(null),
        [UB, aB] = (0, QB.useState)(0),
        pB = (0, QB.useRef)(!0),
        sB = (0, QB.useRef)(null),
        JB = (0, QB.useRef)({
          value: jB,
          onSave: NB
        });
      JB.current = {
        value: jB,
        onSave: NB
      };
      const mB = () => {
        const BB = sB.current;
        sB.current = null, null !== BB && BB !== JB.current.value && JB.current.onSave(BB).then((() => {
          pB.current && aB((BB => BB + 1))
        }))
      };
      return (0, QB.useEffect)((() => {
        null === sB.current && uB.current && (uB.current.value = jB)
      }), [jB, UB]), (0, QB.useEffect)((() => () => {
        pB.current = !1, mB()
      }), []), (0, hB.jsx)("div", {
        className: rB()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: IB
        }),
        onBlur: mB,
        children: (0, hB.jsx)(VB.d, {
          domRef: uB,
          defaultValue: jB,
          placeholderText: zB,
          ariaLabel: nB,
          maxLength: dB,
          onValueChange: BB => {
            sB.current = BB
          },
          onEnter: mB
        })
      })
    }
    const TB = ["mod", "coOwner"],
      PB = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function WB(BB) {
      var jB, zB, dB;
      let {
        name: IB,
        place: NB,
        openedIn: uB,
        isYou: UB,
        manage: pB,
        hiddenNames: rB,
        zIndex: mB
      } = BB;
      const {
        t: yB,
        selectedLanguage: kB
      } = (0, sB.D)(), [GB, LB] = (0, QB.useState)(null), {
        state: tB
      } = pB, SB = `player:${IB}`, MB = function(BB, jB) {
        if ("banned" === BB.section) return {
          ...EB,
          unban: !0
        };
        if ("gone" === BB.section) return EB;
        const {
          player: zB
        } = BB, QB = "here" === BB.section, nB = QB || "none" !== zB.role ? zB.can.roles : [];
        return {
          gamemode: QB && jB && null !== zB.gamemode && zB.can.gamemode,
          roles: nB,
          fixedRole: 0 === nB.length && "none" !== zB.role ? zB.role : null,
          kick: QB && zB.can.kick,
          ban: zB.can.ban,
          unban: !1
        }
      }(NB, null !== tB.gamemodes), HB = pB.statusOf(SB), YB = pB.isPending(SB), VB = aB(), ZB = Date.now(), AB = BB => {
        var jB, zB;
        return null !== (jB = null === (zB = (BB => tB.roles.find((jB => jB.role === BB)))(BB)) || void 0 === zB ? void 0 : zB.label) && void 0 !== jB ? jB : BB
      }, WB = BB => {
        const jB = PB[BB];
        return void 0 === jB ? void 0 : yB(jB)
      }, eB = "here" === NB.section || "away" === NB.section ? NB.player : null, lB = "here" === NB.section ? NB.player.id : null, {
        playerSocialPreview: wB,
        isFriend: xB
      } = null === lB ? {
        playerSocialPreview: (0, fB.e)(IB, null),
        isFriend: !1
      } : (0, qB.d)(lB, IB), KB = function() {
        pB.send(...arguments)
      }, CB = (BB, jB) => {
        VB.hold("role", BB, pB.send({
          type: "setRole",
          name: IB,
          role: BB
        }, SB, jB))
      };
      let cB = null;
      if ("ban" === (null === GB || void 0 === GB ? void 0 : GB.kind)) cB = yB("lobbyManageEntry:banConfirm", {
        playerName: IB
      });
      else if ("role" === (null === GB || void 0 === GB ? void 0 : GB.kind)) {
        var bB;
        cB = `${yB("lobbyManage:roleConfirm",{playerName:IB,role:AB(GB.role)})} ${null!==(bB=WB(GB.role))&&void 0!==bB?bB:""}`
      } else if (HB) cB = (0, hB.jsx)(XB, {
        status: HB
      });
      else if (UB) cB = yB("lobbyManage:you");
      else if ("here" === NB.section) "none" === NB.player.role && ZB - NB.player.at < 6e5 && (cB = FB(yB, kB.code, "lobbyManage:joinedAgo", NB.player.at, ZB));
      else if ("away" === NB.section) {
        if (NB.player.at > 0) {
          const BB = "kicked" === NB.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          cB = FB(yB, kB.code, BB, NB.player.at, ZB)
        }
      } else "banned" === NB.section ? null !== NB.bannedAt && (cB = FB(yB, kB.code, "lobbyManage:bannedAgo", NB.bannedAt, ZB)) : "banned" === uB && (cB = yB("lobbyManageEntry:unbanned"));
      return (0, hB.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": IB,
        children: (0, hB.jsxs)(iB.f, {
          playerSocialPreview: wB,
          isFriend: xB,
          status: cB,
          opensProfileCard: !UB && (0, qB.f)(!0, IB, rB),
          zIndex: mB,
          children: [null !== GB && (0, hB.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === GB.kind && (0, hB.jsxs)(gB.G, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                LB(null), KB({
                  type: "ban",
                  name: IB
                }, SB)
              },
              children: [(0, hB.jsx)(JB.c, {
                name: "gavel"
              }), (0, hB.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: yB("lobbyManageEntry:ban")
              })]
            }), "role" === GB.kind && (0, hB.jsx)(gB.f, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: GB.role
              },
              onClick: () => {
                LB(null), CB(GB.role)
              },
              children: yB("lobbyManage:makeRole", {
                role: AB(GB.role)
              })
            }), (0, hB.jsx)(gB.h, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                LB(null)
              },
              children: yB("general:cancel")
            })]
          }), null === GB && (0, hB.jsxs)(hB.Fragment, {
            children: [(0, hB.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [MB.gamemode && null !== eB && (0, hB.jsx)(oB.e, {
                options: (null !== (jB = tB.gamemodes) && void 0 !== jB ? jB : []).map((BB => ({
                  value: BB.value,
                  label: DB(yB, BB.label, rB)
                }))),
                value: null !== (zB = VB.get("gamemode")) && void 0 !== zB ? zB : eB.gamemode,
                disabled: YB,
                onChange: BB => {
                  (0, nB.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: BB.value
                  }), VB.hold("gamemode", BB.value, pB.send({
                    type: "setGamemode",
                    name: IB,
                    gamemode: BB.value
                  }, SB))
                }
              }), MB.roles.length > 0 && null !== eB && (0, hB.jsx)(oB.e, {
                options: [...tB.roles].reverse().filter((BB => MB.roles.includes(BB.role))).map((BB => ({
                  value: BB.role,
                  label: BB.label
                }))),
                value: null !== (dB = VB.get("role")) && void 0 !== dB ? dB : eB.role,
                disabled: YB,
                onChange: BB => {
                  var jB;
                  (jB = BB.value) !== (null === eB || void 0 === eB ? void 0 : eB.role) && (TB.includes(jB) ? LB({
                    kind: "role",
                    role: jB
                  }) : ((0, nB.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: jB
                  }), CB(jB, WB(jB))))
                }
              }), null !== MB.fixedRole && (0, hB.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: AB(MB.fixedRole)
              })]
            }), (0, hB.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [MB.kick && (0, hB.jsxs)(gB.h, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${yB("lobbyManageEntry:kick")} ${IB}`,
                disabled: YB,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  KB({
                    type: "kick",
                    name: IB
                  }, SB)
                },
                children: [(0, hB.jsx)(JB.c, {
                  name: "person-falling-burst"
                }), (0, hB.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: yB("lobbyManageEntry:kick")
                })]
              }), MB.ban && (0, hB.jsxs)(gB.J, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${yB("lobbyManageEntry:ban")} ${IB}`,
                disabled: YB,
                padDestructive: !0,
                onClick: () => {
                  LB({
                    kind: "ban"
                  })
                },
                children: [(0, hB.jsx)(JB.c, {
                  name: "gavel"
                }), (0, hB.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: yB("lobbyManageEntry:ban")
                })]
              }), MB.unban && (0, hB.jsxs)(gB.h, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${yB("lobbyManageEntry:unban")} ${IB}`,
                disabled: YB,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  KB({
                    type: "unban",
                    name: IB
                  }, SB)
                },
                children: [(0, hB.jsx)(JB.c, {
                  name: "user-unlock"
                }), (0, hB.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: yB("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function eB(BB) {
      var jB, zB, nB, dB;
      let {
        manage: IB,
        focusRequest: NB,
        onFocused: uB
      } = BB;
      const {
        t: UB
      } = (0, sB.D)(), aB = (0, LB.k)("players"), pB = (0, LB.k)("hiddenPlayerNames"), rB = (0, QB.useRef)(null), {
        state: mB
      } = IB, kB = null === aB.localId ? null : null !== (jB = null === (zB = aB.byId[aB.localId]) || void 0 === zB ? void 0 : zB.name) && void 0 !== jB ? jB : null, [GB] = (0, QB.useState)((() => SB(mB, kB))), tB = function(BB, jB, zB) {
        const QB = new Set([...BB.here, ...BB.away, ...BB.banned]),
          nB = SB(jB, zB),
          dB = jB => {
            const zB = nB[jB].filter((BB => !QB.has(BB)));
            for (const BB of zB) QB.add(BB);
            return [...BB[jB], ...zB]
          };
        return {
          here: dB("here"),
          away: dB("away"),
          banned: dB("banned")
        }
      }(GB, mB, kB), [EB, iB] = (0, QB.useState)(!1), qB = function(BB, jB) {
        return BB.here.filter((BB => BB.name !== jB && "none" === BB.role && BB.can.kick)).length
      }(mB, kB), fB = IB.statusOf("kickAll");
      (0, QB.useEffect)((() => {
        var BB, jB;
        if (null === NB) return;
        const zB = null === (BB = rB.current) || void 0 === BB ? void 0 : BB.querySelector(`[data-lobby-manage-row="${CSS.escape(NB.name)}"]`);
        null === zB || void 0 === zB || zB.scrollIntoView({
          block: "center"
        }), null === zB || void 0 === zB || null === (jB = zB.querySelector(".ProfilePreview")) || void 0 === jB || jB.focus({
          preventScroll: !0
        }), uB(NB.seq)
      }), [null === NB || void 0 === NB ? void 0 : NB.seq]);
      const oB = BB => (jB, zB) => (0, hB.jsx)(WB, {
        name: jB,
        place: MB(mB, jB),
        openedIn: BB,
        isYou: jB === kB,
        manage: IB,
        hiddenNames: pB,
        zIndex: zB
      }, jB);
      return (0, hB.jsxs)("div", {
        ref: rB,
        className: "LobbyManagePage",
        children: [tB.here.length > 0 && (0, hB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, hB.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, hB.jsx)(yB.d, {
              label: UB("lobbyManage:here"),
              meta: mB.here.length
            }), qB >= 2 && !EB && (0, hB.jsxs)(gB.J, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: IB.isPending("kickAll"),
              onClick: () => {
                iB(!0)
              },
              children: [(0, hB.jsx)(JB.c, {
                name: "person-falling-burst"
              }), " ", UB("lobbyManage:kickAll")]
            })]
          }), EB && qB >= 2 && (0, hB.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, hB.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: UB("lobbyManage:kickAllConfirm", {
                count: qB
              })
            }), (0, hB.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, hB.jsx)(gB.G, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  iB(!1), IB.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: UB("lobbyManage:kickAll")
              }), (0, hB.jsx)(gB.h, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  iB(!1)
                },
                children: UB("general:cancel")
              })]
            })]
          }), fB && (0, hB.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, hB.jsx)(XB, {
              status: fB
            })
          }), (0, hB.jsx)(ZB, {
            names: tB.here,
            cap: tB.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: oB("here")
          })]
        }), tB.away.length > 0 && (0, hB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, hB.jsx)(yB.d, {
            label: UB("lobbyManage:notHere"),
            meta: tB.away.length
          }), (0, hB.jsx)(ZB, {
            names: tB.away,
            cap: 5,
            filterFrom: null,
            moreLabel: UB("lobbyManage:allCount", {
              count: tB.away.length
            }),
            reveal: null !== (nB = null === NB || void 0 === NB ? void 0 : NB.name) && void 0 !== nB ? nB : null,
            renderRow: oB("away")
          })]
        }), tB.banned.length > 0 && (0, hB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, hB.jsx)(yB.d, {
            label: UB("lobbyManage:banned"),
            meta: tB.banned.length
          }), (0, hB.jsx)(ZB, {
            names: tB.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: UB("lobbyManage:allCount", {
              count: tB.banned.length
            }),
            reveal: null !== (dB = null === NB || void 0 === NB ? void 0 : NB.name) && void 0 !== dB ? dB : null,
            renderRow: oB("banned")
          })]
        })]
      })
    }
    var lB = zB(4729),
      wB = zB(1668),
      xB = zB(36783),
      KB = zB(36795),
      CB = zB(36793),
      cB = zB(36790),
      bB = zB(36820),
      vB = zB(36805),
      RB = zB(36812);

    function OB(BB) {
      const jB = new Set;
      for (const zB of BB) jB.add(zB.toLowerCase());
      return jB
    }

    function Bj(BB) {
      var jB, zB;
      let {
        state: nB,
        lobbyName: dB,
        listed: IB,
        isListed: NB,
        mG: uB,
        xG: UB,
        statusOf: aB
      } = BB;
      const {
        t: pB,
        selectedLanguage: rB
      } = (0, sB.D)(), JB = (0, wB.j)(), mB = (0, LB.k)("players"), kB = null === mB.localId ? null : null !== (jB = null === (zB = mB.byId[mB.localId]) || void 0 === zB ? void 0 : zB.name) && void 0 !== jB ? jB : null, GB = (0, QB.useMemo)((() => (0, cB.k)(JB.friends, dB, nB.here.map((BB => BB.name)))), [JB.friends, dB, nB.here]), gB = new Map(GB.map((BB => [BB.friend.name.toLowerCase(), BB]))), tB = function(BB) {
        let {
          refused: jB,
          listed: zB,
          here: QB,
          friends: nB,
          excluded: dB
        } = BB;
        const IB = OB(dB),
          NB = BB => BB.filter((BB => {
            const jB = BB.toLowerCase();
            return !IB.has(jB) && (IB.add(jB), !0)
          }));
        return {
          added: [],
          refused: NB(jB),
          listed: NB(zB),
          suggested: NB([...QB, ...nB])
        }
      }({
        refused: nB.refused.map((BB => BB.name)),
        listed: IB,
        here: nB.here.map((BB => BB.name)),
        friends: GB.flatMap((BB => "here" === BB.place ? [] : [BB.friend.name])),
        excluded: [...null === kB ? [] : [kB], ...[...nB.here, ...nB.away].flatMap((BB => "none" === BB.role || (0, cB.l)(IB, BB.name) ? [] : [BB.name]))]
      }), [SB] = (0, QB.useState)(tB), [MB, EB] = (0, QB.useState)([]), iB = function(BB, jB, zB) {
        const QB = OB(zB),
          nB = OB([...zB, ...BB.refused, ...BB.listed, ...BB.suggested]),
          dB = zB => [...BB[zB].filter((BB => !QB.has(BB.toLowerCase()))), ...jB[zB].filter((BB => {
            const jB = BB.toLowerCase();
            return !nB.has(jB) && (nB.add(jB), !0)
          }))];
        return {
          added: [...zB],
          refused: dB("refused"),
          listed: dB("listed"),
          suggested: dB("suggested")
        }
      }(SB, tB, MB), oB = (BB, jB) => {
        var zB, QB;
        const dB = BB.toLowerCase(),
          IB = gB.get(dB),
          UB = nB.here.find((BB => BB.name.toLowerCase() === dB)),
          sB = nB.refused.find((BB => BB.name.toLowerCase() === dB)),
          JB = null !== (zB = null === aB || void 0 === aB ? void 0 : aB(BB)) && void 0 !== zB ? zB : null;
        let mB = null;
        JB ? mB = (0, hB.jsx)(XB, {
          status: JB
        }) : sB ? mB = FB(pB, rB.code, "lobbyManage:triedToJoinAgo", sB.at, Date.now()) : IB && UB ? mB = pB("lobbyManage:friendHere") : IB ? mB = "online" === IB.place ? pB("lobbyManage:friendOnline") : pB("lobbyManage:friend") : UB && (mB = pB("lobbyManage:hereStatus"));
        let yB = null !== (QB = null === IB || void 0 === IB ? void 0 : IB.friend) && void 0 !== QB ? QB : (0, fB.e)(BB, null);
        return !IB && null !== UB && void 0 !== UB && UB.id && (yB = (0, qB.d)(UB.id, UB.name).playerSocialPreview), (0, hB.jsx)(vB.d, {
          playerSocialPreview: yB,
          isFriend: void 0 !== IB,
          hideFriendBadge: !0,
          status: mB,
          zIndex: jB,
          vp: {
            on: NB(BB),
            onChange: jB => {
              uB(BB, jB)
            }
          }
        }, dB)
      }, HB = [...iB.added, ...iB.refused];
      return (0, hB.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, hB.jsx)(yB.d, {
          label: pB("worldSocial:whitelist"),
          meta: IB.length
        }), (0, hB.jsx)(RB.d, {
          label: pB("lobbyManage:add"),
          icon: "user-check",
          placeholder: pB("socialBar:enterPlayerName"),
          onSubmit: async BB => {
            const jB = await UB(BB);
            return jB.ok && EB((jB => [BB, ...jB])), jB
          }
        }), HB.length > 0 && (0, hB.jsx)("div", {
          className: "PlayerRows",
          children: HB.map(((BB, jB) => oB(BB, HB.length - jB)))
        }), (0, hB.jsx)(ZB, {
          names: iB.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: pB("lobbyManage:allOnWhitelist", {
            count: iB.listed.length
          }),
          renderRow: oB
        }), (0, hB.jsx)(ZB, {
          names: iB.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: pB("lobbyManage:allCount", {
            count: iB.suggested.length
          }),
          renderRow: oB
        })]
      })
    }

    function jj(BB) {
      let {
        manage: jB,
        listing: zB
      } = BB;
      const {
        t: QB
      } = (0, sB.D)(), dB = (BB, zB) => ((0, nB.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: BB
      }), jB.send({
        type: "setListing",
        field: BB,
        value: zB
      }, `listing:${BB}`)), IB = BB => {
        const zB = jB.statusOf(`listing:${BB}`);
        return zB && !zB.ok && (0, hB.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, hB.jsx)(XB, {
            status: zB
          })
        })
      };
      return (0, hB.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, hB.jsx)(yB.d, {
          label: QB("lobbyManage:inWorldsList")
        }), (0, hB.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, hB.jsx)("div", {
            className: "SliderText",
            children: QB("lobbyManage:description")
          }), (0, hB.jsx)(AB, {
            value: zB.description,
            ariaLabel: QB("lobbyManage:description"),
            wide: !0,
            onSave: BB => dB("description", BB)
          })]
        }), IB("description"), (0, hB.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, hB.jsx)("div", {
            className: "SliderText",
            children: QB("lobbyManage:emojis")
          }), (0, hB.jsx)(AB, {
            value: zB.emojis,
            ariaLabel: QB("lobbyManage:emojis"),
            onSave: BB => dB("emojis", BB)
          })]
        }), IB("emojis"), (0, hB.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, hB.jsx)("div", {
            className: "SliderText",
            children: QB("lobbyManage:colour")
          }), (0, hB.jsx)(zj, {
            value: zB.colour,
            ariaLabel: QB("lobbyManage:colour"),
            onSave: BB => {
              dB("colour", BB)
            }
          })]
        }), IB("colour")]
      })
    }

    function zj(BB) {
      let {
        value: jB,
        ariaLabel: zB,
        onSave: nB
      } = BB;
      const dB = (0, QB.useRef)(null),
        IB = (0, QB.useRef)({
          value: jB,
          onSave: nB
        });
      IB.current = {
        value: jB,
        onSave: nB
      };
      const NB = (0, QB.useRef)(null),
        uB = (0, QB.useRef)(!1),
        UB = BB => {
          uB.current && BB.value !== IB.current.value && BB.value !== NB.current && (NB.current = BB.value, IB.current.onSave(BB.value))
        };
      return (0, QB.useEffect)((() => {
        dB.current && document.activeElement !== dB.current && (dB.current.value = jB)
      }), [jB]), (0, QB.useEffect)((() => {
        const BB = dB.current,
          jB = () => {
            UB(BB)
          };
        return BB.addEventListener("change", jB), () => {
          BB.removeEventListener("change", jB), UB(BB)
        }
      }), []), (0, hB.jsx)("input", {
        ref: dB,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: jB,
        "aria-label": zB,
        onInput: () => {
          uB.current = !0
        },
        onBlur: BB => {
          UB(BB.currentTarget)
        }
      })
    }

    function Qj(BB) {
      let {
        manage: jB
      } = BB;
      const {
        lobbyName: zB,
        shownLobbyName: QB
      } = (0, LB.k)("connectedGame");
      return jB.state.you.canSetVisibility && null !== zB ? (0, hB.jsx)(dj, {
        manage: jB,
        lobbyName: zB,
        worldCode: null !== QB && void 0 !== QB ? QB : zB
      }, zB) : (0, hB.jsx)(Ij, {
        manage: jB,
        lobbyName: null !== zB && void 0 !== zB ? zB : ""
      })
    }

    function nj(BB) {
      return BB.map((BB => BB.toLowerCase())).sort().join(",")
    }

    function dj(BB) {
      var jB;
      let {
        manage: zB,
        lobbyName: dB,
        worldCode: IB
      } = BB;
      const {
        t: NB
      } = (0, sB.D)(), {
        settings: uB,
        loading: UB,
        change: aB,
        retry: pB,
        refresh: rB
      } = (0, xB.g)(dB), JB = (0, wB.j)(), {
        state: kB
      } = zB, GB = (0, QB.useRef)(uB);
      GB.current = uB;
      const LB = nj(null !== (jB = kB.whitelist) && void 0 !== jB ? jB : []),
        tB = null !== kB.whitelist;
      (0, QB.useEffect)((() => {
        const BB = GB.current;
        null !== BB && (BB.visibility !== kB.visibility || tB && nj(BB.whitelist) !== LB) && rB()
      }), [kB.visibility, LB, tB, rB]);
      const SB = async (BB, jB) => {
        let zB = null;
        return await aB(BB, jB, {
          quiet: !0,
          onAnswer: BB => {
            zB = BB
          }
        }), zB
      }, MB = (BB, jB) => {
        null !== jB && "error" in jB && zB.showStatus(BB, {
          ok: !1,
          text: [NB(jB.error)]
        })
      }, EB = async BB => {
        if (null === uB || BB === uB.visibility) return;
        (0, nB.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: BB
        });
        const jB = "whitelist" === BB ? (0, cB.g)((0, cB.k)(JB.friends, dB, kB.here.map((BB => BB.name))), (0, bB.d)(dB), uB.whitelist) : [],
          zB = await SB({
            setVisibility: BB
          }, (jB => ({
            ...jB,
            visibility: BB
          })));
        MB("mode", zB), null === zB || "error" in zB || await (async BB => {
          for (const jB of (0, cB.n)(BB, lB.x))
            if (!await aB({
                whitelistAdd: jB
              }, (BB => (0, cB.r)(BB, jB, !0)))) return !1;
          return !0
        })(jB)
      }, iB = (0, QB.useMemo)((() => {
        var BB;
        if (null === uB) return [];
        const jB = null !== (BB = kB.whitelist) && void 0 !== BB ? BB : [];
        return [...jB.filter((BB => (0, cB.l)(uB.whitelist, BB))), ...uB.whitelist.filter((BB => !(0, cB.l)(jB, BB)))]
      }), [uB, kB.whitelist]), qB = zB.statusOf("mode");
      return (0, hB.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, hB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, hB.jsx)(yB.d, {
            label: NB("worldSocial:whoCanJoin")
          }), null === uB && UB && (0, hB.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, hB.jsx)(mB.e, {})
          }), null === uB && !UB && (0, hB.jsx)(gB.h, {
            className: "SmallTextLight",
            onClick: pB,
            children: NB("worldSocial:loadFailed")
          }), null !== uB && (0, hB.jsx)(KB.b, {
            visibility: uB.visibility,
            onPick: BB => {
              EB(BB)
            }
          }), qB && (0, hB.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, hB.jsx)(XB, {
              status: qB
            })
          }), null !== uB && "private" !== uB.visibility && (0, hB.jsx)(CB.b, {
            worldCode: IB,
            message: null
          })]
        }), "whitelist" === (null === uB || void 0 === uB ? void 0 : uB.visibility) && (0, hB.jsx)(Bj, {
          state: kB,
          lobbyName: dB,
          listed: iB,
          isListed: BB => (0, cB.l)(uB.whitelist, BB),
          mG: (BB, jB) => {
            (0, nB.reportAnalyticsClick)(jB ? {
              id: "lobby_manage.whitelist_add",
              value: "vp"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), SB(jB ? {
              whitelistAdd: [BB]
            } : {
              whitelistRemove: BB
            }, (zB => (0, cB.r)(zB, [BB], jB))).then((jB => {
              MB(`whitelist:${BB.toLowerCase()}`, jB)
            }))
          },
          xG: async BB => {
            (0, nB.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const jB = await SB({
              whitelistAdd: [BB]
            }, (jB => (0, cB.r)(jB, [BB], !0)));
            return null === jB ? {
              ok: !1,
              error: NB("worldSocial:changeFailed")
            } : "error" in jB ? {
              ok: !1,
              error: NB(jB.error)
            } : (0, cB.l)(jB.notFound, BB) ? {
              ok: !1,
              error: NB("lobbyManage:noPlayerCalled", {
                playerName: BB
              })
            } : {
              ok: !0
            }
          },
          statusOf: BB => zB.statusOf(`whitelist:${BB.toLowerCase()}`)
        }), "public" === (null === uB || void 0 === uB ? void 0 : uB.visibility) && null !== kB.listing && (0, hB.jsx)(jj, {
          manage: zB,
          listing: kB.listing
        })]
      })
    }

    function Ij(BB) {
      var jB;
      let {
        manage: zB,
        lobbyName: QB
      } = BB;
      const {
        t: dB
      } = (0, sB.D)(), {
        state: IB
      } = zB, NB = aB(), uB = null !== (jB = IB.whitelist) && void 0 !== jB ? jB : [];
      return (0, hB.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, hB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, hB.jsx)(yB.d, {
            label: dB("worldSocial:whoCanJoin")
          }), (0, hB.jsx)("div", {
            className: "LobbyManageModeText",
            children: dB(`worldSocial:${IB.visibility}`)
          })]
        }), "whitelist" === IB.visibility && IB.you.canEditWhitelist && (0, hB.jsx)(Bj, {
          state: IB,
          lobbyName: QB,
          listed: uB,
          isListed: BB => {
            var jB;
            return null !== (jB = NB.get(BB.toLowerCase())) && void 0 !== jB ? jB : (0, cB.l)(uB, BB)
          },
          mG: (BB, jB) => {
            (0, nB.reportAnalyticsClick)(jB ? {
              id: "lobby_manage.whitelist_add",
              value: "vp"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const QB = BB.toLowerCase();
            NB.hold(QB, jB, zB.send(jB ? {
              type: "whitelistAdd",
              names: [BB]
            } : {
              type: "whitelistRemove",
              name: BB
            }, `whitelist:${QB}`))
          },
          xG: async BB => {
            (0, nB.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const jB = await zB.send({
              type: "whitelistAdd",
              names: [BB]
            }, "whitelist-field");
            return jB.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, hB.jsx)(YB.e, {
                text: jB.message
              })
            }
          },
          statusOf: BB => zB.statusOf(`whitelist:${BB.toLowerCase()}`)
        }), "public" === IB.visibility && null !== IB.listing && (0, hB.jsx)(jj, {
          manage: zB,
          listing: IB.listing
        })]
      })
    }
    var Nj = zB(5078),
      uj = zB(1388);
    const Uj = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const aj = (0, QB.memo)((function(BB) {
      var jB;
      let {
        rule: zB,
        value: QB,
        status: nB,
        pending: dB,
        hiddenNames: IB,
        zq: NB,
        onAction: uB
      } = BB;
      const {
        t: UB
      } = (0, sB.D)(), aB = BB => NB(zB, BB), pB = (BB, jB) => {
        uB(zB, BB, jB)
      }, rB = DB(UB, zB.label, IB), JB = zB.info ? DB(UB, zB.info, IB) : void 0, mB = zB.placeholder ? DB(UB, zB.placeholder, IB) : void 0, yB = (null !== (jB = zB.options) && void 0 !== jB ? jB : []).map((BB => ({
        value: BB.value,
        label: DB(UB, BB.label, IB)
      }))), kB = Math.max(0, ...yB.map((BB => function(BB) {
        let jB = 0;
        for (const zB of BB) jB += Uj.test(zB) ? 2 : 1;
        return jB
      }(BB.label)))), GB = nB && (0, hB.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, hB.jsx)(XB, {
          status: nB
        })
      }), LB = (0, hB.jsxs)("div", {
        className: "SliderText",
        children: [rB, void 0 !== JB && (0, hB.jsx)(uj.e, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: JB
        })]
      });
      return "toggle" === zB.kind ? (0, hB.jsxs)(hB.Fragment, {
        children: [(0, hB.jsx)(Nj.b, {
          label: rB,
          checked: !0 === QB,
          circleInfoText: JB,
          disabled: dB,
          onClick: aB
        }), GB]
      }) : "choice" === zB.kind && yB.length <= 3 ? (0, hB.jsxs)(hB.Fragment, {
        children: [(0, hB.jsx)(Nj.c, {
          label: rB,
          options: yB,
          value: String(QB),
          circleInfoText: JB,
          onChange: aB
        }), GB]
      }) : (0, hB.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [LB, "choice" === zB.kind && (0, hB.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": kB
          },
          children: (0, hB.jsx)(oB.e, {
            options: yB,
            value: String(QB),
            disabled: dB,
            onChange: BB => {
              aB(BB.value)
            }
          })
        }), ("number" === zB.kind || "text" === zB.kind) && (0, hB.jsx)(AB, {
          value: null === QB ? "" : String(QB),
          placeholder: mB,
          ariaLabel: rB,
          onSave: BB => {
            const jB = BB.trim(),
              QB = Number(jB);
            return aB("number" === zB.kind && "" !== jB && Number.isFinite(QB) ? QB : jB)
          }
        }), "action" === zB.kind && (0, hB.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [yB.length > 3 && (0, hB.jsx)(oB.e, {
            options: yB,
            value: {
              value: "",
              label: null !== mB && void 0 !== mB ? mB : rB
            },
            disabled: dB,
            onChange: BB => {
              pB(BB.value)
            }
          }), yB.length > 0 && yB.length <= 3 && yB.map((BB => (0, hB.jsx)(gB.h, {
            className: "SmallTextLight",
            disabled: dB,
            onClick: () => {
              pB(BB.value)
            },
            children: BB.label
          }, BB.value))), 0 === yB.length && (0, hB.jsx)(gB.h, {
            className: "SmallTextLight",
            disabled: dB,
            onClick: () => {
              pB()
            },
            children: null !== mB && void 0 !== mB ? mB : rB
          })]
        }), "names" === zB.kind && (0, hB.jsx)(pj, {
          names: Array.isArray(QB) ? QB : [],
          pending: dB,
          onAction: pB
        }), GB]
      })
    }));

    function pj(BB) {
      let {
        names: jB,
        pending: zB,
        onAction: nB
      } = BB;
      const {
        t: dB
      } = (0, sB.D)(), IB = (0, QB.useRef)(null), [NB, uB] = (0, QB.useState)(""), UB = () => {
        const BB = NB.trim();
        "" !== BB && (nB(BB, "add"), IB.current && (IB.current.value = ""), uB(""))
      };
      return (0, hB.jsxs)("div", {
        className: "LobbyManageNames",
        children: [jB.map((BB => (0, hB.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, hB.jsx)("span", {
            className: "LobbyManageNameText",
            children: BB
          }), (0, hB.jsx)(gB.h, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: dB("lobbyManage:removeName", {
              name: BB
            }),
            disabled: zB,
            onClick: () => {
              nB(BB, "remove")
            },
            children: (0, hB.jsx)(JB.c, {
              name: "xmark"
            })
          })]
        }, BB))), (0, hB.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, hB.jsx)(VB.d, {
            domRef: IB,
            placeholderText: dB("lobbyManage:namePlaceholder"),
            ariaLabel: dB("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: BB => {
              uB(BB)
            },
            onEnter: UB
          }), (0, hB.jsx)(gB.h, {
            className: "SmallTextLight",
            disabled: zB || "" === NB.trim(),
            onClick: UB,
            children: dB("lobbyManage:addHere")
          })]
        })]
      })
    }
    const rj = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function sj(BB, jB) {
      return rj.map((zB => {
        let {
          group: QB,
          title: nB
        } = zB;
        const dB = BB.filter((BB => BB.group === QB && void 0 === BB.parent)).map((zB => {
          const QB = !0 === jB(zB) ? BB.filter((BB => BB.parent === zB.key)) : [];
          return {
            rule: zB,
            children: QB
          }
        }));
        return {
          group: QB,
          title: nB,
          items: dB
        }
      }))
    }

    function Jj(BB) {
      return BB.flatMap((BB => {
        let {
          items: jB
        } = BB;
        return jB.flatMap((BB => {
          let {
            rule: jB,
            children: zB
          } = BB;
          return [jB, ...zB]
        }))
      }))
    }

    function mj(BB) {
      let {
        manage: jB,
        rowsShown: zB
      } = BB;
      const {
        t: dB
      } = (0, sB.D)(), IB = (0, LB.k)("hiddenPlayerNames"), {
        rules: NB
      } = jB.state, uB = aB(), UB = BB => {
        const jB = uB.get(BB.key);
        return void 0 === jB ? BB.value : jB
      }, pB = sj(NB, UB), [rB] = (0, QB.useState)((() => Jj(pB).map((BB => BB.key)))), JB = zB === 1 / 0 ? null : new Set(rB.slice(0, zB)), mB = BB => null === JB || JB.has(BB.key), {
        hold: kB
      } = uB, GB = (0, QB.useCallback)(((BB, zB) => {
        (0, nB.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: BB.key
        });
        const QB = jB.send({
          type: "setRule",
          key: BB.key,
          value: zB
        }, `rule:${BB.key}`);
        return kB(BB.key, zB, QB), QB
      }), [jB, kB]), gB = (0, QB.useCallback)(((BB, zB, QB) => {
        (0, nB.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: BB.key
        }), jB.send({
          type: "ruleAction",
          key: BB.key,
          ...void 0 === zB ? {} : {
            arg: zB
          },
          ...void 0 === QB ? {} : {
            op: QB
          }
        }, `rule:${BB.key}`, void 0 === QB ? dB("lobbyManage:setJustNow") : void 0)
      }), [jB, dB]), tB = BB => {
        const zB = `rule:${BB.key}`;
        return (0, hB.jsx)(aj, {
          rule: BB,
          value: UB(BB),
          status: jB.statusOf(zB),
          pending: jB.isPending(zB),
          hiddenNames: IB,
          zq: GB,
          onAction: gB
        }, BB.key)
      };
      return (0, hB.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: pB.map((BB => {
          let {
            group: jB,
            title: zB,
            items: nB
          } = BB;
          const IB = nB.filter((BB => {
            let {
              rule: jB
            } = BB;
            return mB(jB)
          }));
          return 0 === IB.length ? null : (0, hB.jsxs)(QB.Fragment, {
            children: [(0, hB.jsx)(yB.d, {
              label: dB(zB)
            }), IB.map((BB => {
              let {
                rule: jB,
                children: zB
              } = BB;
              return 0 === zB.length ? tB(jB) : (0, hB.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [tB(jB), zB.filter(mB).map(tB)]
              }, jB.key)
            }))]
          }, jB)
        }))
      })
    }
    const yj = {
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
      kj = 5,
      Gj = (0, QB.memo)((function(BB) {
        let {
          page: jB,
          manage: zB,
          leaderboard: nB,
          focusRequest: dB,
          onFocused: IB,
          ruleRowsShown: NB
        } = BB;
        return "leaderboard" === jB ? (0, hB.jsx)(QB.Suspense, {
          fallback: (0, hB.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, hB.jsx)(mB.e, {})
          }),
          children: nB
        }) : "joining" === jB ? (0, hB.jsx)(Qj, {
          manage: zB
        }) : "rules" === jB ? (0, hB.jsx)(mj, {
          manage: zB,
          rowsShown: NB
        }) : (0, hB.jsx)(eB, {
          manage: zB,
          focusRequest: dB,
          onFocused: IB
        })
      }));

    function Lj(BB) {
      let {
        page: jB
      } = BB;
      const {
        t: zB
      } = (0, sB.D)(), QB = yj[jB];
      return (0, hB.jsxs)(hB.Fragment, {
        children: [(0, hB.jsx)(JB.c, {
          name: QB.icon
        }), " ", (0, hB.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: zB(QB.title)
        })]
      })
    }

    function gj(BB) {
      var jB;
      const {
        t: zB
      } = (0, sB.D)(), {
        pages: dB,
        landing: IB
      } = BB, uB = (0, QB.useRef)(null), UB = (0, QB.useRef)(null), aB = (0, QB.useRef)(null), pB = (0, QB.useRef)(new Map), [JB, mB] = (0, QB.useState)(null), LB = (0, QB.useRef)(JB), gB = (0, QB.useRef)(0), [tB, SB] = (0, QB.useState)(dB[0]), MB = null !== JB && void 0 !== JB ? JB : dB.includes(tB) ? tB : dB[0], [EB] = (0, QB.useState)(null !== (jB = null === IB || void 0 === IB ? void 0 : IB.page) && void 0 !== jB ? jB : null), iB = null !== EB && dB.includes(EB) ? [EB, ...dB.filter((BB => BB !== EB))] : dB, [qB] = (0, QB.useState)((() => {
        const jB = Jj(sj(BB.manage.state.rules, (BB => BB.value)));
        return Math.max(1, Math.ceil(jB.length / kj))
      })), fB = iB.flatMap((BB => "rules" === BB ? Array(qB).fill(BB) : [BB])), oB = function(BB, jB) {
        const [zB, nB] = (0, QB.useState)(BB), dB = zB >= jB;
        return dB && zB !== 1 / 0 && nB(1 / 0), (0, QB.useLayoutEffect)((() => {
          if (dB) return;
          let BB = !0;
          return (0, GB.e)().then((() => {
            BB && nB((BB => BB + 1))
          })), () => {
            BB = !1
          }
        }), [zB, dB]), dB ? 1 / 0 : zB
      }(1, fB.length), HB = fB.slice(0, oB), DB = new Set(HB), FB = oB < fB.length, YB = FB ? HB.filter((BB => "rules" === BB)).length * kj : 1 / 0, VB = (0, QB.useRef)(BB.focusRequest);
      VB.current = BB.focusRequest;
      const XB = BB => {
          LB.current = BB, mB(BB)
        },
        ZB = () => {
          var BB, jB;
          uB.current.style.scrollPaddingTop = `${null!==(BB=null===(jB=aB.current)||void 0===jB?void 0:jB.offsetHeight)&&void 0!==BB?BB:0}px`
        },
        AB = BB => {
          const jB = uB.current,
            zB = pB.current.get(BB);
          if (void 0 === zB) return;
          const QB = document.activeElement,
            nB = VB.current,
            dB = null === nB ? null : zB.querySelector(`[data-lobby-manage-row="${CSS.escape(nB.name)}"]`);
          ZB(), QB instanceof HTMLElement && null !== dB && void 0 !== dB && dB.contains(QB) ? QB.scrollIntoView({
            block: "center"
          }) : null === zB.previousElementSibling ? jB.scrollTop = 0 : zB.scrollIntoView({
            block: "start"
          }), gB.current = jB.scrollTop
        },
        TB = BB => {
          (0, nB.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: BB
          }), XB(BB), AB(BB)
        },
        PB = () => {
          var BB, jB;
          const zB = uB.current,
            QB = zB.getBoundingClientRect().top + (null !== (BB = null === (jB = aB.current) || void 0 === jB ? void 0 : jB.offsetHeight) && void 0 !== BB ? BB : 0),
            nB = dB.map((BB => {
              var jB, zB;
              return (null !== (jB = null === (zB = pB.current.get(BB)) || void 0 === zB ? void 0 : zB.getBoundingClientRect().top) && void 0 !== jB ? jB : 1 / 0) - QB
            })),
            IB = !FB && zB.scrollTop + zB.clientHeight >= zB.scrollHeight - 1;
          SB(dB[(0, NB.i)(nB, IB)])
        },
        WB = () => {
          null !== LB.current && (XB(null), PB())
        };
      (0, QB.useLayoutEffect)((() => {
        null !== IB && dB.includes(IB.page) && TB(IB.page)
      }), [null === IB || void 0 === IB ? void 0 : IB.seq]), (0, QB.useLayoutEffect)((() => {
        null === LB.current || dB.includes(LB.current) || WB()
      }));
      const {
        onFocused: eB
      } = BB, lB = (0, QB.useCallback)((BB => {
        null !== LB.current && AB(LB.current), eB(BB)
      }), [eB]);
      (0, QB.useLayoutEffect)((() => {
        const BB = LB.current;
        null !== BB && (!FB || dB.indexOf(fB[oB - 1]) < dB.indexOf(BB)) && AB(BB)
      }), [oB]), (0, QB.useEffect)((() => {
        const BB = new ResizeObserver((() => {
          null !== LB.current ? AB(LB.current) : ZB()
        }));
        return BB.observe(uB.current), BB.observe(UB.current), () => {
          BB.disconnect()
        }
      }), []), (0, QB.useLayoutEffect)((() => {
        const BB = aB.current,
          jB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".SegmentedToggleOptionSelected");
        jB && (BB.scrollLeft = Math.min(jB.offsetLeft, Math.max(BB.scrollLeft, jB.offsetLeft + jB.offsetWidth - BB.clientWidth)))
      }), [MB]);
      return (0, hB.jsxs)("div", {
        ref: uB,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === LB.current ? PB() : Math.abs(uB.current.scrollTop - gB.current) > 1 && WB()
        },
        onClick: BB => {
          var jB;
          null !== (jB = aB.current) && void 0 !== jB && jB.contains(BB.target) || WB()
        },
        onFocus: BB => {
          var jB;
          const zB = null === LB.current ? null : pB.current.get(LB.current);
          !zB || zB.contains(BB.target) || null !== (jB = aB.current) && void 0 !== jB && jB.contains(BB.target) || WB()
        },
        children: [dB.length > 1 && (0, hB.jsx)("div", {
          ref: aB,
          className: "LobbyManageChips",
          children: (0, hB.jsx)(kB.e, {
            options: dB.map((BB => ({
              value: BB,
              label: (0, hB.jsx)(Lj, {
                page: BB
              }),
              ariaLabel: zB(yj[BB].title)
            }))),
            value: MB,
            padTabs: "2",
            ariaLabel: zB("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: TB
          })
        }), (0, hB.jsx)("div", {
          ref: UB,
          className: rB()("LobbyManageInner", {
            Staging: FB
          }),
          children: dB.filter((BB => DB.has(BB))).map((jB => {
            const zB = jB === JB;
            return (0, hB.jsxs)("section", {
              ref: BB => {
                BB ? pB.current.set(jB, BB) : pB.current.delete(jB)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": zB || void 0,
              children: [dB.length > 1 && (0, hB.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": zB || void 0,
                "data-pad-unavailable": zB || void 0,
                children: (0, hB.jsx)(yB.d, {
                  label: (0, hB.jsx)(Lj, {
                    page: jB
                  })
                })
              }), (0, hB.jsx)(Gj, {
                page: jB,
                manage: BB.manage,
                leaderboard: BB.leaderboard,
                focusRequest: BB.focusRequest,
                onFocused: lB,
                ruleRowsShown: "rules" === jB ? YB : 1 / 0
              })]
            }, jB)
          }))
        })]
      })
    }

    function tj(BB) {
      return void 0 === (null === BB || void 0 === BB ? void 0 : BB.page) ? null : {
        page: BB.page,
        seq: BB.seq
      }
    }

    function Sj(BB) {
      let {
        leaderboard: jB
      } = BB;
      const zB = function() {
          const BB = (0, uB.i)("lobbyManage"),
            [jB, zB] = (0, QB.useReducer)((BB => BB + 1), 0),
            [nB] = (0, QB.useState)((() => new UB.b(zB)));
          return (0, QB.useEffect)((() => {
            const BB = nB.nextDeadline();
            if (null === BB) return;
            const jB = setTimeout((() => {
              nB.expire(Date.now()), zB()
            }), Math.max(0, BB - Date.now()));
            return () => {
              clearTimeout(jB)
            }
          })), (0, QB.useMemo)((() => null === BB ? null : {
            state: BB,
            send: (BB, jB, QB) => {
              const dB = nB.send(BB, jB, null !== QB && void 0 !== QB ? QB : null);
              return zB(), dB
            },
            statusOf: BB => nB.statusOf(BB, Date.now()),
            showStatus: (BB, jB) => {
              nB.show(BB, jB)
            },
            isPending: BB => nB.isPending(BB)
          }), [BB, jB, nB])
        }(),
        aB = (0, NB.k)((0, dB.e)()),
        pB = (0, IB.p)(),
        [rB, sB] = (0, QB.useState)((() => tj(pB))),
        [JB, mB] = (0, QB.useState)(null);
      return (0, QB.useEffect)((() => {
        null === pB && (0, nB.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, QB.useEffect)((() => {
        null !== pB && (sB((BB => (null === BB || void 0 === BB ? void 0 : BB.seq) === pB.seq ? BB : tj(pB))), void 0 !== pB.focusName && "players" === pB.page ? mB({
          name: pB.focusName,
          seq: pB.seq
        }) : (0, IB.l)(pB.seq))
      }), [null === pB || void 0 === pB ? void 0 : pB.seq]), null === zB ? null : (0, hB.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, hB.jsx)(gj, {
          pages: (0, NB.e)(zB.state, aB),
          manage: zB,
          leaderboard: jB,
          focusRequest: JB,
          onFocused: IB.l,
          landing: rB
        })
      })
    }
  },
  36637: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => aB,
      c: () => uB
    });
    var QB = zB(1514),
      nB = zB(2006),
      dB = zB(1982);
    const IB = 1e4;
    let NB = 0;

    function uB(BB) {
      const jB = ++NB;
      return new Promise((zB => {
        const NB = jB => {
            uB(), clearTimeout(UB), !1 === (null === jB || void 0 === jB ? void 0 : jB.ok) && (0, QB.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: BB.type
            }), zB(jB)
          },
          uB = nB.c.subscribe("lobbyManage", (BB => {
            const zB = function(BB, jB) {
              var zB;
              return null !== (zB = null === BB || void 0 === BB ? void 0 : BB.results.find((BB => BB.requestId === jB))) && void 0 !== zB ? zB : null
            }(BB, jB);
            null !== zB && NB(zB)
          })),
          UB = setTimeout((() => {
            NB(null)
          }), IB);
        dB.gameBridge.send("lobbyManage", {
          ...BB,
          requestId: jB
        })
      }))
    }
    const UB = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class aB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uB;
        this.onChange = BB, this.sendAction = jB, this.pending = new Map, this.statuses = new Map
      }
      send(BB, jB, zB) {
        var QB;
        return this.statuses.delete(jB), this.pending.set(jB, (null !== (QB = this.pending.get(jB)) && void 0 !== QB ? QB : 0) + 1), this.sendAction(BB).then((BB => {
          var QB;
          const nB = null !== BB && void 0 !== BB ? BB : {
              requestId: -1,
              ok: !1,
              message: UB
            },
            dB = (null !== (QB = this.pending.get(jB)) && void 0 !== QB ? QB : 1) - 1;
          dB > 0 ? this.pending.set(jB, dB) : this.pending.delete(jB);
          const IB = !nB.ok || nB.message.length > 0 ? nB.message : null === zB ? null : [zB];
          return null !== IB && this.statuses.set(jB, {
            ok: nB.ok,
            text: IB,
            until: Date.now() + 4e3
          }), this.onChange(), nB
        }))
      }
      show(BB, jB) {
        this.statuses.set(BB, {
          ...jB,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(BB) {
        for (const [jB, zB] of this.statuses) zB.until <= BB && this.statuses.delete(jB)
      }
      nextDeadline() {
        let BB = null;
        for (const zB of this.statuses.values()) {
          var jB;
          BB = Math.min(null !== (jB = BB) && void 0 !== jB ? jB : 1 / 0, zB.until)
        }
        return BB
      }
      statusOf(BB, jB) {
        const zB = this.statuses.get(BB);
        return !zB || zB.until <= jB ? null : {
          ok: zB.ok,
          text: zB.text
        }
      }
      isPending(BB) {
        return this.pending.has(BB)
      }
    }
  },
  36633: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      f: () => uB
    });
    var QB = zB(635),
      nB = zB(1982),
      dB = zB(1668),
      IB = zB(106),
      NB = zB(1292);

    function uB(BB, jB, zB) {
      return IB.featureFlags.useSocialFeatures && BB && null === (0, NB.e)(jB, zB)
    }

    function UB(BB, jB) {
      var zB, IB;
      const NB = dB.d.getSocialState().friends.find((BB => BB.name.toLowerCase() === jB.toLowerCase())),
        uB = nB.gameBridge.latest("players").byId[BB],
        UB = void 0 !== uB && uB.name === jB,
        aB = UB && null !== (zB = uB.cosmetics) && void 0 !== zB ? zB : void 0,
        pB = NB && aB ? {
          ...NB,
          cosmetics: aB
        } : NB;
      return {
        playerSocialPreview: null !== pB && void 0 !== pB ? pB : {
          isError: !1,
          name: jB,
          ranks: UB ? [...uB.ranks] : [],
          cosmetics: null !== aB && void 0 !== aB ? aB : {},
          nameColour: null !== (IB = null === aB || void 0 === aB ? void 0 : aB.nameColour) && void 0 !== IB ? IB : QB.b,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== NB
      }
    }
  },
  36812: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => pB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(1710),
      NB = zB(1478),
      uB = zB(1369),
      UB = zB(1108),
      aB = zB(1148);

    function pB(BB) {
      let {
        label: jB,
        icon: zB,
        placeholder: nB,
        onSubmit: pB
      } = BB;
      const rB = (0, QB.useRef)(null),
        [sB, JB] = (0, QB.useState)(""),
        [mB, yB] = (0, QB.useState)("Enter"),
        [kB, GB] = (0, QB.useState)(null);
      (0, QB.useEffect)((() => {
        if ("Success" !== mB && "Error" !== mB) return;
        const BB = setTimeout((() => {
          "Success" === mB && rB.current && (rB.current.value = "", JB("")), yB("Enter")
        }), "Success" === mB ? 1e3 : 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [mB]);
      const LB = () => {
        const BB = sB.trim();
        "" !== BB && "Enter" === mB && (yB("Loading"), pB(BB).then((BB => {
          rB.current && ("error" in BB ? null === BB.error ? yB("Enter") : (GB(BB.error), yB("Error")) : yB("Success"))
        })))
      };
      return (0, aB.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: BB => {
          BB.target === rB.current && "Escape" !== BB.key && BB.stopPropagation()
        },
        children: [(0, aB.jsxs)("div", {
          className: dB()("AddFriendBodyOverlay", `AddFriendBodyOverlay${mB}`),
          children: ["Loading" === mB && (0, aB.jsx)(uB.e, {}), "Success" === mB && (0, aB.jsx)(UB.c, {
            name: "check"
          }), "Error" === mB && kB]
        }), (0, aB.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, aB.jsx)(IB.d, {
            className: "PlayerSearchInput",
            domRef: rB,
            maxLength: 32,
            placeholderText: nB,
            ariaLabel: nB,
            stopPropagation: !1,
            onValueChange: BB => {
              JB(BB)
            },
            onEnter: LB
          }), (0, aB.jsxs)(NB.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== mB || "" === sB.trim(),
            onClick: LB,
            children: [(0, aB.jsx)(UB.c, {
              name: zB
            }), " ", jB]
          })]
        })]
      })
    }
  },
  36795: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => pB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(1240),
      NB = zB(1108),
      uB = zB(1148);
    const UB = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      aB = ["unlisted", "public", "whitelist", "private"];

    function pB(BB) {
      let {
        visibility: jB,
        onPick: zB
      } = BB;
      const {
        t: nB
      } = (0, IB.D)(), pB = (0, QB.useRef)([]);
      return (0, uB.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": nB("worldSocial:whoCanJoin"),
        children: aB.map(((BB, QB) => {
          const IB = BB === jB;
          return (0, uB.jsxs)("button", {
            ref: BB => {
              pB.current[QB] = BB
            },
            type: "button",
            className: dB()("WorldSocialTile", {
              WorldSocialTileSelected: IB
            }),
            "aria-pressed": IB,
            tabIndex: IB ? 0 : -1,
            onKeyDown: BB => {
              ((BB, jB) => {
                const zB = "ArrowRight" === BB.key || "ArrowDown" === BB.key ? 1 : "ArrowLeft" === BB.key || "ArrowUp" === BB.key ? -1 : 0;
                var QB;
                0 !== zB && (BB.preventDefault(), null === (QB = pB.current[(jB + zB + aB.length) % aB.length]) || void 0 === QB || QB.focus())
              })(BB, QB)
            },
            onClick: () => {
              zB(BB)
            },
            children: [(0, uB.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, uB.jsx)(NB.c, {
                name: UB[BB]
              })
            }), (0, uB.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, uB.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: nB(`worldSocial:${BB}`)
              }), (0, uB.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: nB(`worldSocial:${BB}Description`)
              })]
            })]
          }, BB)
        }))
      })
    }
  },
  36805: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB
    });
    var QB = zB(1240),
      nB = zB(2766),
      dB = zB(4478),
      IB = zB(1148);

    function NB(BB) {
      let {
        vp: jB,
        children: zB,
        ...NB
      } = BB;
      const {
        t: uB
      } = (0, QB.D)();
      return (0, IB.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          jB.onChange(!jB.on)
        },
        children: (0, IB.jsx)(nB.f, {
          ...NB,
          opensProfileCard: !1,
          children: (0, IB.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: BB => {
              BB.stopPropagation()
            },
            children: [zB, (0, IB.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, IB.jsx)(dB.e, {
                checked: jB.on,
                disabled: !1,
                ariaLabel: uB("worldSocial:letJoin", {
                  playerName: NB.playerSocialPreview.name
                }),
                onChange: BB => {
                  jB.onChange(BB.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36793: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => JB
    });
    var QB = zB(62),
      nB = zB(1240),
      dB = zB(1901),
      IB = zB(106),
      NB = zB(28),
      uB = zB(1514),
      UB = zB(2792),
      aB = zB(34141),
      pB = zB(1478),
      rB = zB(1108),
      sB = zB(1148);

    function JB(BB) {
      let {
        worldCode: jB,
        message: zB
      } = BB;
      const {
        t: JB
      } = (0, nB.D)(), {
        isTouchScreen: mB
      } = (0, NB.m)(["isTouchScreen"]), yB = IB.featureFlags.canUseInviteLinks, kB = (0, aB.j)(yB && null === zB), [GB, LB] = (0, UB.j)(), gB = (0, QB.useRef)(null);
      if (null !== zB) return (0, sB.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, sB.jsx)(rB.c, {
          name: "lock"
        }), (0, sB.jsx)("span", {
          children: zB
        })]
      });
      const tB = yB ? kB : jB,
        SB = mB && yB && (0, UB.e)();
      return (0, sB.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!yB && (0, sB.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: JB("worldSocial:worldCode")
        }), (0, sB.jsx)("input", {
          ref: gB,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== tB && void 0 !== tB ? tB : "",
          "aria-label": JB(yB ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: BB => {
            BB.currentTarget.select()
          }
        }), (0, sB.jsxs)(pB.f, {
          className: "WorldSocialCopy",
          disabled: null === tB,
          onClick: () => {
            null !== tB && (0, UB.f)(tB, {
              useShareSheet: SB,
              onOutcome: BB => {
                if ((0, uB.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== BB || yB ? BB : "code"
                  }), "copied" === BB) LB();
                else if ("failed" === BB) {
                  var jB;
                  null === (jB = gB.current) || void 0 === jB || jB.focus(), dB.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, sB.jsx)(rB.c, {
            name: GB ? "check" : SB ? "up-from-bracket" : "copy"
          }), " ", JB(GB ? "general:copied" : SB ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36800: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => sB,
      d: () => rB,
      e: () => pB
    });
    var QB = zB(635),
      nB = zB(1240),
      dB = zB(1668),
      IB = zB(2766),
      NB = zB(2711),
      uB = zB(1478),
      UB = zB(36805),
      aB = zB(1148);

    function pB(BB, jB) {
      var zB;
      return {
        isError: !1,
        name: BB,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== jB && void 0 !== jB ? jB : {},
        nameColour: null !== (zB = null === jB || void 0 === jB ? void 0 : jB.nameColour) && void 0 !== zB ? zB : QB.b,
        location: {
          status: "offline"
        }
      }
    }

    function rB(BB) {
      let {
        player: jB,
        isFriend: zB = !1,
        status: QB,
        showLocation: uB = void 0 === QB,
        vp: pB,
        onSendFriendRequest: rB,
        actions: sB,
        zIndex: JB
      } = BB;
      const {
        t: mB
      } = (0, nB.D)();
      let yB = QB;
      null !== pB && void 0 !== pB && pB.on && (yB = (0, aB.jsxs)(aB.Fragment, {
        children: [null !== QB && void 0 !== QB ? QB : (0, aB.jsx)(NB.c, {
          socialPreview: jB
        }), (0, aB.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", mB("worldSocial:canJoin")]
        })]
      }));
      const kB = {
        playerSocialPreview: jB,
        isFriend: zB,
        hideFriendBadge: !0,
        onFriendRemoved: zB ? BB => {
          dB.d.removeFriendFromState(BB)
        } : void 0,
        status: yB,
        showLocation: uB,
        onSendFriendRequest: rB,
        zIndex: JB
      };
      return pB ? (0, aB.jsx)(UB.d, {
        ...kB,
        vp: pB,
        children: sB
      }) : (0, aB.jsx)(IB.f, {
        ...kB,
        opensProfileCard: !1,
        children: sB || void 0
      })
    }

    function sB(BB) {
      let {
        row: jB,
        vp: zB,
        canInvite: QB,
        invited: dB,
        onInvite: IB,
        zIndex: NB
      } = BB;
      const {
        t: UB
      } = (0, nB.D)(), pB = "online" === jB.place ? uB.f : uB.h;
      return (0, aB.jsx)(rB, {
        player: jB.friend,
        isFriend: !0,
        status: "here" === jB.place ? UB("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        vp: zB,
        zIndex: NB,
        actions: QB && (0, aB.jsx)(pB, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: dB,
          onClick: IB,
          ariaLabel: `${UB("worldSocial:invite")} ${jB.friend.name}`,
          children: UB(dB ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36783: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB,
      c: () => IB,
      g: () => UB
    });
    var QB = zB(62),
      nB = zB(4696),
      dB = zB(1901);

    function IB(BB) {
      const jB = {
        lobbyName: BB,
        answer: null,
        response: nB.b.getSocialSettings(BB)
      };
      return jB.response.then((BB => {
        jB.answer = BB
      })), jB
    }
    const NB = new Map;

    function uB(BB) {
      NB.set(BB.lobbyName, BB)
    }

    function UB(BB) {
      const [jB] = (0, QB.useState)((() => function(BB) {
        var jB;
        const zB = null !== (jB = NB.get(BB)) && void 0 !== jB ? jB : null;
        return null !== zB && void 0 !== zB && zB.answer && "error" in zB.answer ? null : zB
      }(BB))), [zB, IB] = (0, QB.useState)((() => null !== jB && void 0 !== jB && jB.answer && "settings" in jB.answer ? jB.answer.settings : null)), [uB, UB] = (0, QB.useState)(!0), [aB, pB] = (0, QB.useState)(null !== zB), rB = (0, QB.useRef)(zB);
      rB.current = zB;
      const sB = (0, QB.useRef)(0),
        JB = (0, QB.useRef)(0),
        mB = (0, QB.useRef)(!1),
        yB = (0, QB.useRef)(!0),
        kB = (0, QB.useCallback)((async jB => {
          const zB = ++sB.current,
            QB = await (null !== jB && void 0 !== jB ? jB : nB.b.getSocialSettings(BB));
          yB.current && zB === sB.current && (pB(!0), UB(!1), "error" in QB || IB(QB.settings))
        }), [BB]),
        GB = (0, QB.useCallback)((() => {
          UB(!0), kB()
        }), [kB]),
        LB = (0, QB.useCallback)((() => {
          JB.current > 0 ? mB.current = !0 : kB()
        }), [kB]);
      (0, QB.useEffect)((() => (yB.current = !0, NB.delete(BB), UB(!0), kB(null === jB || void 0 === jB ? void 0 : jB.response), () => {
        yB.current = !1
      })), [kB, BB, jB]);
      const gB = BB => {
        sB.current++, UB(!1), rB.current = BB, IB(BB)
      };
      return {
        settings: zB,
        loading: uB,
        answered: aB,
        retry: GB,
        refresh: LB,
        change: async function(jB, zB) {
          let {
            quiet: QB = !1,
            onAnswer: IB
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const NB = rB.current;
          if (null === NB) return !1;
          gB(zB(NB)), JB.current > 0 && (mB.current = !0), JB.current++;
          const uB = await nB.b.setSocialSettings(BB, jB);
          JB.current--;
          const UB = !("error" in uB);
          if (!yB.current) return UB;
          if (null === IB || void 0 === IB || IB(uB), QB);
          else if ("error" in uB) dB.f.showMessage({
            translationKey: uB.error
          });
          else
            for (const BB of uB.notFound) dB.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: BB
              }
            });
          if (JB.current > 0) return UB;
          const aB = mB.current;
          return mB.current = !1, !aB && "settings" in uB ? gB(uB.settings) : (aB || gB(NB), kB()), UB
        }
      }
    }
  },
  36820: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      f: () => dB
    });
    var QB = zB(174);
    const nB = new Map;

    function dB(BB, jB) {
      var zB;
      const QB = null !== (zB = nB.get(BB)) && void 0 !== zB ? zB : new Map;
      QB.set(jB, Date.now()), nB.set(BB, QB)
    }

    function IB(BB) {
      const jB = nB.get(BB);
      if (!jB) return [];
      const zB = Date.now();
      for (const [nB, dB] of jB) zB - dB >= QB.n && jB.delete(nB);
      return [...jB.keys()]
    }
  },
  36790: (BB, jB, zB) => {
    function QB(BB, jB) {
      const zB = jB.toLowerCase();
      for (const QB of BB)
        if (QB.toLowerCase() === zB) return !0;
      return !1
    }

    function nB(BB, jB, zB) {
      const nB = [],
        dB = [],
        IB = [];
      for (const NB of BB) !NB.isError && NB.name && ("inGame" === NB.location.status && NB.location.inLobbyName === jB || QB(zB, NB.name) ? dB.push({
        friend: NB,
        place: "here"
      }) : "offline" === NB.location.status ? IB.push({
        friend: NB,
        place: "offline"
      }) : nB.push({
        friend: NB,
        place: "online"
      }));
      return [...nB, ...dB, ...IB]
    }

    function dB(BB, jB, zB) {
      const nB = [],
        dB = BB.flatMap((BB => "here" === BB.place ? [BB.friend.name] : []));
      for (const IB of [...dB, ...jB]) QB(nB, IB) || QB(zB, IB) || nB.push(IB);
      return nB
    }

    function IB(BB, jB) {
      return null === BB || void 0 === BB || !BB.canManage || QB(BB.whitelist, jB) ? "none" : "whitelist" === BB.visibility ? "required" : "quiet"
    }

    function NB(BB) {
      if (null === BB) return !0;
      const {
        visibility: jB
      } = BB;
      return "public" === jB || "unlisted" === jB || "whitelist" === jB && BB.canManage
    }

    function uB(BB, jB, zB) {
      if (zB) {
        const zB = jB.filter((jB => !QB(BB.whitelist, jB)));
        return {
          ...BB,
          whitelist: [...BB.whitelist, ...zB]
        }
      }
      return {
        ...BB,
        whitelist: BB.whitelist.filter((BB => !QB(jB, BB)))
      }
    }

    function UB(BB, jB) {
      const zB = [];
      for (let QB = 0; QB < BB.length; QB += jB) zB.push(BB.slice(QB, QB + jB));
      return zB
    }
    zB.d(jB, {
      c: () => NB,
      g: () => dB,
      k: () => nB,
      l: () => QB,
      n: () => UB,
      p: () => IB,
      r: () => uB
    })
  },
  37091: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(62),
      nB = zB(2516);

    function dB() {
      const BB = (0, nB.i)("lobbyLeaderboardInfo");
      return (0, QB.useMemo)((() => function(BB) {
        if (null === BB) return null;
        const jB = Object.entries(BB),
          zB = jB.filter((BB => {
            let [, jB] = BB;
            return void 0 !== jB
          }));
        if (zB.length === jB.length) return BB;
        const QB = Object.fromEntries(zB),
          nB = Object.keys(BB).filter((BB => !Object.hasOwn(QB, BB)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${nB.join(", ")}`), QB
      }(BB)), [BB])
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);