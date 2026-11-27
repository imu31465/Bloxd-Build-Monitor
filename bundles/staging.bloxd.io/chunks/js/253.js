export const id = 253;
export const ids = [253];
export const modules = {
  42608: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      LobbyManageView: () => WJ
    });
    var yR = GR(66),
      tR = GR(1618),
      uR = GR(38131),
      ZR = GR(3479),
      qR = GR(3488),
      iR = GR(3465),
      fR = GR(37751);

    function VR() {
      const [RR, JR] = (0, yR.useState)(new Map);
      return {
        get: JR => RR.get(JR),
        hold: (0, yR.useCallback)(((RR, GR, yR) => {
          JR((JR => new Map(JR).set(RR, GR))), yR.then((() => {
            JR((JR => {
              const GR = new Map(JR);
              return GR.delete(RR), GR
            }))
          }))
        }), [])
      }
    }
    var KR = GR(1163),
      wR = GR.n(KR),
      rR = GR(1270),
      eR = GR(1468),
      aR = GR(1465),
      LR = GR(3763),
      nR = GR(4250),
      UR = GR(4757);
    var WR = GR(2173),
      AR = GR(1590),
      CR = GR(37759),
      XR = GR(3761),
      MR = GR(3897),
      BR = GR(37890),
      lR = GR(4375),
      pR = GR(377);

    function gR(RR, JR, GR) {
      return JR.map((JR => {
        if ("string" === typeof JR) return JR;
        const yR = "str" in JR ? JR.str : JR;
        return "string" === typeof yR ? yR : "entityName" in yR ? yR.entityName : "translationKey" in yR ? RR(yR.translationKey, (0, rR.o)(yR.params, GR)) : ""
      })).join("")
    }

    function bR(RR, JR, GR, yR, tR) {
      return tR - yR < 6e4 ? RR(`${GR}JustNow`) : RR(GR, {
        time: (0, pR.Z)((0, rR.n)(JR, GR), yR, tR)
      })
    }
    var vR = GR(2105),
      OR = GR(1867),
      xR = GR(1378);

    function NR(RR) {
      let {
        status: JR
      } = RR;
      return (0, xR.jsx)("span", {
        className: wR()("LobbyManageStatus", {
          LobbyManageStatusRefused: !JR.ok
        }),
        children: (0, xR.jsx)(vR.c, {
          text: JR.text
        })
      })
    }

    function DR(RR) {
      let {
        names: JR,
        cap: GR,
        filterFrom: tR,
        moreLabel: uR,
        reveal: ZR = null,
        renderRow: qR
      } = RR;
      const {
        t: iR
      } = (0, rR.A)(), [fR, VR] = (0, yR.useState)(!1), [KR, wR] = (0, yR.useState)(""), aR = fR || null !== ZR && JR.indexOf(ZR) >= GR, nR = (aR || JR.length <= GR) && null !== tR && JR.length > tR, UR = KR.trim().toLowerCase();
      let WR = aR ? JR : JR.slice(0, GR);
      return nR && "" !== UR && (WR = WR.filter((RR => RR.toLowerCase().includes(UR)))), (0, xR.jsxs)(xR.Fragment, {
        children: [nR && (0, xR.jsx)(OR.b, {
          className: "LobbyManageFilter",
          placeholderText: iR("lobbyManage:findName"),
          ariaLabel: iR("lobbyManage:findName"),
          onValueChange: RR => {
            wR(RR)
          }
        }), WR.length > 0 && (0, xR.jsx)("div", {
          className: "PlayerRows",
          children: WR.map(((RR, JR) => qR(RR, WR.length - JR)))
        }), !aR && JR.length > GR && (0, xR.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, xR.jsx)(LR.c, {
            label: (0, xR.jsxs)(xR.Fragment, {
              children: [uR, " ", (0, xR.jsx)(eR.d, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              VR(!0)
            }
          })
        })]
      })
    }

    function HR(RR) {
      let {
        value: JR,
        placeholder: GR,
        ariaLabel: tR,
        maxLength: uR,
        wide: ZR = !1,
        onSave: qR
      } = RR;
      const iR = (0, yR.useRef)(null),
        [fR, VR] = (0, yR.useState)(0),
        KR = (0, yR.useRef)(!0),
        rR = (0, yR.useRef)(null),
        eR = (0, yR.useRef)({
          value: JR,
          onSave: qR
        });
      eR.current = {
        value: JR,
        onSave: qR
      };
      const aR = () => {
        const RR = rR.current;
        rR.current = null, null !== RR && RR !== eR.current.value && eR.current.onSave(RR).then((() => {
          KR.current && VR((RR => RR + 1))
        }))
      };
      return (0, yR.useEffect)((() => {
        null === rR.current && iR.current && (iR.current.value = JR)
      }), [JR, fR]), (0, yR.useEffect)((() => () => {
        KR.current = !1, aR()
      }), []), (0, xR.jsx)("div", {
        className: wR()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: ZR
        }),
        onBlur: aR,
        children: (0, xR.jsx)(OR.b, {
          domRef: iR,
          defaultValue: JR,
          placeholderText: GR,
          ariaLabel: tR,
          maxLength: uR,
          onValueChange: RR => {
            rR.current = RR
          },
          onEnter: aR
        })
      })
    }
    const oR = ["mod", "coOwner"],
      cR = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function PR(RR) {
      var JR, GR, uR;
      let {
        name: ZR,
        place: qR,
        openedIn: iR,
        isYou: fR,
        manage: KR,
        hiddenNames: wR,
        zIndex: aR
      } = RR;
      const {
        t: LR,
        selectedLanguage: nR
      } = (0, rR.A)(), [UR, WR] = (0, yR.useState)(null), {
        state: pR
      } = KR, vR = `player:${ZR}`, OR = (0, CR.k)(qR, null !== pR.gamemodes), DR = KR.statusOf(vR), HR = KR.isPending(vR), PR = VR(), IR = Date.now(), mR = RR => {
        var JR, GR;
        return null !== (JR = null === (GR = (RR => pR.roles.find((JR => JR.role === RR)))(RR)) || void 0 === GR ? void 0 : GR.label) && void 0 !== JR ? JR : RR
      }, zR = RR => {
        const JR = cR[RR];
        return void 0 === JR ? void 0 : LR(JR)
      }, SR = "here" === qR.section || "away" === qR.section ? qR.player : null, jR = null !== (JR = PR.get("role")) && void 0 !== JR ? JR : null === SR || void 0 === SR ? void 0 : SR.role, dR = "here" === qR.section ? qR.player.id : null, {
        playerSocialPreview: ER,
        isFriend: YR
      } = null === dR ? {
        playerSocialPreview: (0, BR.i)(ZR, null),
        isFriend: !1
      } : (0, MR.h)(dR, ZR), kR = function() {
        KR.send(...arguments)
      }, QR = (RR, JR) => {
        PR.hold("role", RR, KR.send({
          type: "setRole",
          name: ZR,
          role: RR
        }, vR, JR))
      };
      let FR = null;
      if ("ban" === (null === UR || void 0 === UR ? void 0 : UR.kind)) FR = LR("lobbyManageEntry:banConfirm", {
        playerName: ZR
      });
      else if ("role" === (null === UR || void 0 === UR ? void 0 : UR.kind)) {
        var TR;
        FR = `${LR("lobbyManage:roleConfirm",{playerName:ZR,role:mR(UR.role)})} ${null!==(TR=zR(UR.role))&&void 0!==TR?TR:""}`
      } else if (DR) FR = (0, xR.jsx)(NR, {
        status: DR
      });
      else if (fR) FR = LR("lobbyManage:you");
      else if ("here" === qR.section) "none" === qR.player.role && IR - qR.player.at < 6e5 && (FR = bR(LR, nR.code, "lobbyManage:joinedAgo", qR.player.at, IR));
      else if ("away" === qR.section) {
        if (qR.player.at > 0) {
          const RR = "kicked" === qR.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          FR = bR(LR, nR.code, RR, qR.player.at, IR)
        }
      } else "banned" === qR.section ? null !== qR.bannedAt && (FR = bR(LR, nR.code, "lobbyManage:bannedAgo", qR.bannedAt, IR)) : "banned" === iR && (FR = LR("lobbyManageEntry:unbanned"));
      return (0, xR.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": ZR,
        children: (0, xR.jsxs)(XR.g, {
          playerSocialPreview: ER,
          isFriend: YR,
          status: FR,
          opensProfileCard: !fR && (0, MR.l)(!0, ZR, wR),
          zIndex: aR,
          children: [null !== UR && (0, xR.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === UR.kind && (0, xR.jsxs)(AR.M, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                WR(null), kR({
                  type: "ban",
                  name: ZR
                }, vR)
              },
              children: [(0, xR.jsx)(eR.d, {
                name: "gavel"
              }), (0, xR.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: LR("lobbyManageEntry:ban")
              })]
            }), "role" === UR.kind && (0, xR.jsx)(AR.g, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: UR.role
              },
              onClick: () => {
                WR(null), QR(UR.role)
              },
              children: LR("lobbyManage:makeRole", {
                role: mR(UR.role)
              })
            }), (0, xR.jsx)(AR.i, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                WR(null)
              },
              children: LR("general:cancel")
            })]
          }), null === UR && (0, xR.jsxs)(xR.Fragment, {
            children: [(0, xR.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [OR.gamemode && null !== SR && (0, xR.jsx)(lR.e, {
                options: (null !== (GR = pR.gamemodes) && void 0 !== GR ? GR : []).map((RR => ({
                  value: RR.value,
                  label: gR(LR, RR.label, wR)
                }))),
                value: null !== (uR = PR.get("gamemode")) && void 0 !== uR ? uR : SR.gamemode,
                disabled: HR,
                revealOnOpen: !0,
                onChange: RR => {
                  (0, tR.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: RR.value
                  }), PR.hold("gamemode", RR.value, KR.send({
                    type: "setGamemode",
                    name: ZR,
                    gamemode: RR.value
                  }, vR))
                }
              }), OR.roles.length > 0 && null !== SR && (0, xR.jsx)(lR.e, {
                options: [...pR.roles].reverse().filter((RR => OR.roles.includes(RR.role))).map((RR => ({
                  value: RR.role,
                  label: RR.label
                }))),
                value: "none" === jR ? void 0 : jR,
                placeholder: LR("lobbyManageEntry:giveRole"),
                disabled: HR,
                revealOnOpen: !0,
                onChange: RR => {
                  var JR;
                  (JR = RR.value) !== (null === SR || void 0 === SR ? void 0 : SR.role) && (oR.includes(JR) ? WR({
                    kind: "role",
                    role: JR
                  }) : ((0, tR.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: JR
                  }), QR(JR, zR(JR))))
                }
              }), null !== OR.fixedRole && (0, xR.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: mR(OR.fixedRole)
              })]
            }), (0, xR.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [OR.kick && (0, xR.jsxs)(AR.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${LR("lobbyManageEntry:kick")} ${ZR}`,
                disabled: HR,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  kR({
                    type: "kick",
                    name: ZR
                  }, vR)
                },
                children: [(0, xR.jsx)(eR.d, {
                  name: "person-falling-burst"
                }), (0, xR.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: LR("lobbyManageEntry:kick")
                })]
              }), OR.ban && (0, xR.jsxs)(AR.O, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${LR("lobbyManageEntry:ban")} ${ZR}`,
                disabled: HR,
                padDestructive: !0,
                onClick: () => {
                  WR({
                    kind: "ban"
                  })
                },
                children: [(0, xR.jsx)(eR.d, {
                  name: "gavel"
                }), (0, xR.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: LR("lobbyManageEntry:ban")
                })]
              }), OR.unban && (0, xR.jsxs)(AR.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${LR("lobbyManageEntry:unban")} ${ZR}`,
                disabled: HR,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  kR({
                    type: "unban",
                    name: ZR
                  }, vR)
                },
                children: [(0, xR.jsx)(eR.d, {
                  name: "user-unlock"
                }), (0, xR.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: LR("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function IR(RR) {
      var JR, GR, tR, uR;
      let {
        manage: ZR,
        focusRequest: qR,
        onFocused: iR
      } = RR;
      const {
        t: fR
      } = (0, rR.A)(), VR = (0, WR.i)("players"), KR = (0, WR.i)("hiddenPlayerNames"), wR = (0, yR.useRef)(null), {
        state: aR
      } = ZR, nR = null === VR.localId ? null : null !== (JR = null === (GR = VR.byId[VR.localId]) || void 0 === GR ? void 0 : GR.name) && void 0 !== JR ? JR : null, [UR] = (0, yR.useState)((() => (0, CR.w)(aR, nR))), XR = (0, CR.q)(UR, aR, nR), [MR, BR] = (0, yR.useState)(!1), lR = (0, CR.h)(aR, nR), pR = ZR.statusOf("kickAll");
      (0, yR.useEffect)((() => {
        var RR, JR;
        if (null === qR) return;
        const GR = null === (RR = wR.current) || void 0 === RR ? void 0 : RR.querySelector(`[data-lobby-manage-row="${CSS.escape(qR.name)}"]`);
        null === GR || void 0 === GR || GR.scrollIntoView({
          block: "center"
        }), null === GR || void 0 === GR || null === (JR = GR.querySelector(".ProfilePreview")) || void 0 === JR || JR.focus({
          preventScroll: !0
        }), iR(qR.seq)
      }), [null === qR || void 0 === qR ? void 0 : qR.seq]);
      const gR = RR => (JR, GR) => (0, xR.jsx)(PR, {
        name: JR,
        place: (0, CR.d)(aR, JR),
        openedIn: RR,
        isYou: JR === nR,
        manage: ZR,
        hiddenNames: KR,
        zIndex: GR
      }, JR);
      return (0, xR.jsxs)("div", {
        ref: wR,
        className: "LobbyManagePage",
        children: [XR.here.length > 0 && (0, xR.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, xR.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, xR.jsx)(LR.c, {
              label: fR("lobbyManage:here"),
              meta: aR.here.length
            }), lR >= CR.u && !MR && (0, xR.jsxs)(AR.O, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: ZR.isPending("kickAll"),
              onClick: () => {
                BR(!0)
              },
              children: [(0, xR.jsx)(eR.d, {
                name: "person-falling-burst"
              }), " ", fR("lobbyManage:kickAll")]
            })]
          }), MR && lR >= CR.u && (0, xR.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, xR.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: fR("lobbyManage:kickAllConfirm", {
                count: lR
              })
            }), (0, xR.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, xR.jsx)(AR.M, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  BR(!1), ZR.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: fR("lobbyManage:kickAll")
              }), (0, xR.jsx)(AR.i, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  BR(!1)
                },
                children: fR("general:cancel")
              })]
            })]
          }), pR && (0, xR.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, xR.jsx)(NR, {
              status: pR
            })
          }), (0, xR.jsx)(DR, {
            names: XR.here,
            cap: XR.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: gR("here")
          })]
        }), XR.away.length > 0 && (0, xR.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, xR.jsx)(LR.c, {
            label: fR("lobbyManage:notHere"),
            meta: XR.away.length
          }), (0, xR.jsx)(DR, {
            names: XR.away,
            cap: 5,
            filterFrom: null,
            moreLabel: fR("lobbyManage:allCount", {
              count: XR.away.length
            }),
            reveal: null !== (tR = null === qR || void 0 === qR ? void 0 : qR.name) && void 0 !== tR ? tR : null,
            renderRow: gR("away")
          })]
        }), XR.banned.length > 0 && (0, xR.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, xR.jsx)(LR.c, {
            label: fR("lobbyManage:banned"),
            meta: XR.banned.length
          }), (0, xR.jsx)(DR, {
            names: XR.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: fR("lobbyManage:allCount", {
              count: XR.banned.length
            }),
            reveal: null !== (uR = null === qR || void 0 === qR ? void 0 : qR.name) && void 0 !== uR ? uR : null,
            renderRow: gR("banned")
          })]
        })]
      })
    }
    var mR = GR(5425),
      zR = GR(1803),
      SR = GR(37863),
      jR = GR(37881),
      dR = GR(37873),
      ER = GR(37865),
      YR = GR(37911),
      kR = GR(37897),
      QR = GR(37905);

    function FR(RR) {
      const JR = new Set;
      for (const GR of RR) JR.add(GR.toLowerCase());
      return JR
    }

    function TR(RR) {
      var JR, GR;
      let {
        state: tR,
        lobbyName: uR,
        listed: ZR,
        isListed: qR,
        UW: iR,
        mC: fR,
        statusOf: VR
      } = RR;
      const {
        t: KR,
        selectedLanguage: wR
      } = (0, rR.A)(), eR = (0, zR.k)(), aR = (0, WR.i)("players"), nR = null === aR.localId ? null : null !== (JR = null === (GR = aR.byId[aR.localId]) || void 0 === GR ? void 0 : GR.name) && void 0 !== JR ? JR : null, UR = (0, yR.useMemo)((() => (0, ER.j)(eR.friends, uR, tR.here.map((RR => RR.name)))), [eR.friends, uR, tR.here]), AR = new Map(UR.map((RR => [RR.friend.name.toLowerCase(), RR]))), CR = function(RR) {
        let {
          refused: JR,
          listed: GR,
          here: yR,
          friends: tR,
          excluded: uR
        } = RR;
        const ZR = FR(uR),
          qR = RR => RR.filter((RR => {
            const JR = RR.toLowerCase();
            return !ZR.has(JR) && (ZR.add(JR), !0)
          }));
        return {
          added: [],
          refused: qR(JR),
          listed: qR(GR),
          suggested: qR([...yR, ...tR])
        }
      }({
        refused: tR.refused.map((RR => RR.name)),
        listed: ZR,
        here: tR.here.map((RR => RR.name)),
        friends: UR.flatMap((RR => "here" === RR.place ? [] : [RR.friend.name])),
        excluded: [...null === nR ? [] : [nR], ...[...tR.here, ...tR.away].flatMap((RR => "none" === RR.role || (0, ER.n)(ZR, RR.name) ? [] : [RR.name]))]
      }), [XR] = (0, yR.useState)(CR), [lR, pR] = (0, yR.useState)([]), gR = function(RR, JR, GR) {
        const yR = FR(GR),
          tR = FR([...GR, ...RR.refused, ...RR.listed, ...RR.suggested]),
          uR = GR => [...RR[GR].filter((RR => !yR.has(RR.toLowerCase()))), ...JR[GR].filter((RR => {
            const JR = RR.toLowerCase();
            return !tR.has(JR) && (tR.add(JR), !0)
          }))];
        return {
          added: [...GR],
          refused: uR("refused"),
          listed: uR("listed"),
          suggested: uR("suggested")
        }
      }(XR, CR, lR), vR = (RR, JR) => {
        var GR, yR;
        const uR = RR.toLowerCase(),
          ZR = AR.get(uR),
          fR = tR.here.find((RR => RR.name.toLowerCase() === uR)),
          rR = tR.refused.find((RR => RR.name.toLowerCase() === uR)),
          eR = null !== (GR = null === VR || void 0 === VR ? void 0 : VR(RR)) && void 0 !== GR ? GR : null;
        let aR = null;
        eR ? aR = (0, xR.jsx)(NR, {
          status: eR
        }) : rR ? aR = bR(KR, wR.code, "lobbyManage:triedToJoinAgo", rR.at, Date.now()) : ZR && fR ? aR = KR("lobbyManage:friendHere") : ZR ? aR = "online" === ZR.place ? KR("lobbyManage:friendOnline") : KR("lobbyManage:friend") : fR && (aR = KR("lobbyManage:hereStatus"));
        let LR = null !== (yR = null === ZR || void 0 === ZR ? void 0 : ZR.friend) && void 0 !== yR ? yR : (0, BR.i)(RR, null);
        return !ZR && null !== fR && void 0 !== fR && fR.id && (LR = (0, MR.h)(fR.id, fR.name).playerSocialPreview), (0, xR.jsx)(kR.b, {
          playerSocialPreview: LR,
          isFriend: void 0 !== ZR,
          hideFriendBadge: !0,
          status: aR,
          zIndex: JR,
          gK: {
            on: qR(RR),
            onChange: JR => {
              iR(RR, JR)
            }
          }
        }, uR)
      }, OR = [...gR.added, ...gR.refused];
      return (0, xR.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, xR.jsx)(LR.c, {
          label: KR("worldSocial:whitelist"),
          meta: ZR.length
        }), (0, xR.jsx)(QR.b, {
          label: KR("lobbyManage:add"),
          icon: "user-check",
          placeholder: KR("socialBar:enterPlayerName"),
          onSubmit: async RR => {
            const JR = await fR(RR);
            return JR.ok && pR((JR => [RR, ...JR])), JR
          }
        }), OR.length > 0 && (0, xR.jsx)("div", {
          className: "PlayerRows",
          children: OR.map(((RR, JR) => vR(RR, OR.length - JR)))
        }), (0, xR.jsx)(DR, {
          names: gR.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: KR("lobbyManage:allOnWhitelist", {
            count: gR.listed.length
          }),
          renderRow: vR
        }), (0, xR.jsx)(DR, {
          names: gR.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: KR("lobbyManage:allCount", {
            count: gR.suggested.length
          }),
          renderRow: vR
        })]
      })
    }

    function sR(RR) {
      let {
        manage: JR,
        listing: GR
      } = RR;
      const {
        t: yR
      } = (0, rR.A)(), uR = (RR, GR) => ((0, tR.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: RR
      }), JR.send({
        type: "setListing",
        field: RR,
        value: GR
      }, `listing:${RR}`)), ZR = RR => {
        const GR = JR.statusOf(`listing:${RR}`);
        return GR && !GR.ok && (0, xR.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, xR.jsx)(NR, {
            status: GR
          })
        })
      };
      return (0, xR.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, xR.jsx)(LR.c, {
          label: yR("lobbyManage:inWorldsList")
        }), (0, xR.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, xR.jsx)("div", {
            className: "SliderText",
            children: yR("lobbyManage:description")
          }), (0, xR.jsx)(HR, {
            value: GR.description,
            ariaLabel: yR("lobbyManage:description"),
            wide: !0,
            onSave: RR => uR("description", RR)
          })]
        }), ZR("description"), (0, xR.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, xR.jsx)("div", {
            className: "SliderText",
            children: yR("lobbyManage:emojis")
          }), (0, xR.jsx)(HR, {
            value: GR.emojis,
            ariaLabel: yR("lobbyManage:emojis"),
            onSave: RR => uR("emojis", RR)
          })]
        }), ZR("emojis"), (0, xR.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, xR.jsx)("div", {
            className: "SliderText",
            children: yR("lobbyManage:colour")
          }), (0, xR.jsx)(hR, {
            value: GR.colour,
            ariaLabel: yR("lobbyManage:colour"),
            onSave: RR => {
              uR("colour", RR)
            }
          })]
        }), ZR("colour")]
      })
    }

    function hR(RR) {
      let {
        value: JR,
        ariaLabel: GR,
        onSave: tR
      } = RR;
      const uR = (0, yR.useRef)(null),
        ZR = (0, yR.useRef)({
          value: JR,
          onSave: tR
        });
      ZR.current = {
        value: JR,
        onSave: tR
      };
      const qR = (0, yR.useRef)(null),
        iR = (0, yR.useRef)(!1),
        fR = RR => {
          iR.current && RR.value !== ZR.current.value && RR.value !== qR.current && (qR.current = RR.value, ZR.current.onSave(RR.value))
        };
      return (0, yR.useEffect)((() => {
        uR.current && document.activeElement !== uR.current && (uR.current.value = JR)
      }), [JR]), (0, yR.useEffect)((() => {
        const RR = uR.current,
          JR = () => {
            fR(RR)
          };
        return RR.addEventListener("change", JR), () => {
          RR.removeEventListener("change", JR), fR(RR)
        }
      }), []), (0, xR.jsx)("input", {
        ref: uR,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: JR,
        "aria-label": GR,
        onInput: () => {
          iR.current = !0
        },
        onBlur: RR => {
          fR(RR.currentTarget)
        }
      })
    }

    function RJ(RR) {
      let {
        manage: JR
      } = RR;
      const {
        lobbyName: GR,
        shownLobbyName: yR
      } = (0, WR.i)("connectedGame");
      return JR.state.you.canSetVisibility && null !== GR ? (0, xR.jsx)(GJ, {
        manage: JR,
        lobbyName: GR,
        worldCode: null !== yR && void 0 !== yR ? yR : GR
      }, GR) : (0, xR.jsx)(yJ, {
        manage: JR,
        lobbyName: null !== GR && void 0 !== GR ? GR : ""
      })
    }

    function JJ(RR) {
      return RR.map((RR => RR.toLowerCase())).sort().join(",")
    }

    function GJ(RR) {
      var JR;
      let {
        manage: GR,
        lobbyName: uR,
        worldCode: ZR
      } = RR;
      const {
        t: qR
      } = (0, rR.A)(), {
        settings: iR,
        loading: fR,
        change: VR,
        retry: KR,
        refresh: wR
      } = (0, SR.j)(uR), eR = (0, zR.k)(), {
        state: nR
      } = GR, UR = (0, yR.useRef)(iR);
      UR.current = iR;
      const WR = JJ(null !== (JR = nR.whitelist) && void 0 !== JR ? JR : []),
        CR = null !== nR.whitelist;
      (0, yR.useEffect)((() => {
        const RR = UR.current;
        null !== RR && (RR.visibility !== nR.visibility || CR && JJ(RR.whitelist) !== WR) && wR()
      }), [nR.visibility, WR, CR, wR]);
      const XR = async (RR, JR) => {
        let GR = null;
        return await VR(RR, JR, {
          quiet: !0,
          onAnswer: RR => {
            GR = RR
          }
        }), GR
      }, MR = (RR, JR) => {
        null !== JR && "error" in JR && GR.showStatus(RR, {
          ok: !1,
          text: [qR(JR.error)]
        })
      }, BR = async RR => {
        if (null === iR || RR === iR.visibility) return;
        (0, tR.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: RR
        });
        const JR = "whitelist" === RR ? (0, ER.f)((0, ER.j)(eR.friends, uR, nR.here.map((RR => RR.name))), (0, YR.d)(uR), iR.whitelist) : [],
          GR = await XR({
            setVisibility: RR
          }, (JR => ({
            ...JR,
            visibility: RR
          })));
        MR("mode", GR), null === GR || "error" in GR || await (async RR => {
          for (const JR of (0, ER.r)(RR, mR.x))
            if (!await VR({
                whitelistAdd: JR
              }, (RR => (0, ER.x)(RR, JR, !0)))) return !1;
          return !0
        })(JR)
      }, lR = (0, yR.useMemo)((() => {
        var RR;
        if (null === iR) return [];
        const JR = null !== (RR = nR.whitelist) && void 0 !== RR ? RR : [];
        return [...JR.filter((RR => (0, ER.n)(iR.whitelist, RR))), ...iR.whitelist.filter((RR => !(0, ER.n)(JR, RR)))]
      }), [iR, nR.whitelist]), pR = GR.statusOf("mode");
      return (0, xR.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, xR.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, xR.jsx)(LR.c, {
            label: qR("worldSocial:whoCanJoin")
          }), null === iR && fR && (0, xR.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, xR.jsx)(aR.d, {})
          }), null === iR && !fR && (0, xR.jsx)(AR.i, {
            className: "SmallTextLight",
            onClick: KR,
            children: qR("worldSocial:loadFailed")
          }), null !== iR && (0, xR.jsx)(jR.e, {
            visibility: iR.visibility,
            onPick: RR => {
              BR(RR)
            }
          }), pR && (0, xR.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, xR.jsx)(NR, {
              status: pR
            })
          }), null !== iR && "private" !== iR.visibility && (0, xR.jsx)(dR.e, {
            worldCode: ZR,
            message: null
          })]
        }), "whitelist" === (null === iR || void 0 === iR ? void 0 : iR.visibility) && (0, xR.jsx)(TR, {
          state: nR,
          lobbyName: uR,
          listed: lR,
          isListed: RR => (0, ER.n)(iR.whitelist, RR),
          UW: (RR, JR) => {
            (0, tR.reportAnalyticsClick)(JR ? {
              id: "lobby_manage.whitelist_add",
              value: "gK"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), XR(JR ? {
              whitelistAdd: [RR]
            } : {
              whitelistRemove: RR
            }, (GR => (0, ER.x)(GR, [RR], JR))).then((JR => {
              MR(`whitelist:${RR.toLowerCase()}`, JR)
            }))
          },
          mC: async RR => {
            (0, tR.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const JR = await XR({
              whitelistAdd: [RR]
            }, (JR => (0, ER.x)(JR, [RR], !0)));
            return null === JR ? {
              ok: !1,
              error: qR("worldSocial:changeFailed")
            } : "error" in JR ? {
              ok: !1,
              error: qR(JR.error)
            } : (0, ER.n)(JR.notFound, RR) ? {
              ok: !1,
              error: qR("lobbyManage:noPlayerCalled", {
                playerName: RR
              })
            } : {
              ok: !0
            }
          },
          statusOf: RR => GR.statusOf(`whitelist:${RR.toLowerCase()}`)
        }), "public" === (null === iR || void 0 === iR ? void 0 : iR.visibility) && null !== nR.listing && (0, xR.jsx)(sR, {
          manage: GR,
          listing: nR.listing
        })]
      })
    }

    function yJ(RR) {
      var JR;
      let {
        manage: GR,
        lobbyName: yR
      } = RR;
      const {
        t: uR
      } = (0, rR.A)(), {
        state: ZR
      } = GR, qR = VR(), iR = null !== (JR = ZR.whitelist) && void 0 !== JR ? JR : [];
      return (0, xR.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, xR.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, xR.jsx)(LR.c, {
            label: uR("worldSocial:whoCanJoin")
          }), (0, xR.jsx)("div", {
            className: "LobbyManageModeText",
            children: uR(`worldSocial:${ZR.visibility}`)
          })]
        }), "whitelist" === ZR.visibility && ZR.you.canEditWhitelist && (0, xR.jsx)(TR, {
          state: ZR,
          lobbyName: yR,
          listed: iR,
          isListed: RR => {
            var JR;
            return null !== (JR = qR.get(RR.toLowerCase())) && void 0 !== JR ? JR : (0, ER.n)(iR, RR)
          },
          UW: (RR, JR) => {
            (0, tR.reportAnalyticsClick)(JR ? {
              id: "lobby_manage.whitelist_add",
              value: "gK"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const yR = RR.toLowerCase();
            qR.hold(yR, JR, GR.send(JR ? {
              type: "whitelistAdd",
              names: [RR]
            } : {
              type: "whitelistRemove",
              name: RR
            }, `whitelist:${yR}`))
          },
          mC: async RR => {
            (0, tR.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const JR = await GR.send({
              type: "whitelistAdd",
              names: [RR]
            }, "whitelist-field");
            return JR.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, xR.jsx)(vR.c, {
                text: JR.message
              })
            }
          },
          statusOf: RR => GR.statusOf(`whitelist:${RR.toLowerCase()}`)
        }), "public" === ZR.visibility && null !== ZR.listing && (0, xR.jsx)(sR, {
          manage: GR,
          listing: ZR.listing
        })]
      })
    }
    var tJ = GR(6037),
      uJ = GR(1501);
    const ZJ = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const qJ = (0, yR.memo)((function(RR) {
      var JR;
      let {
        rule: GR,
        value: yR,
        status: tR,
        pending: uR,
        hiddenNames: ZR,
        Fv: qR,
        onAction: iR
      } = RR;
      const {
        t: fR
      } = (0, rR.A)(), VR = RR => qR(GR, RR), KR = (RR, JR) => {
        iR(GR, RR, JR)
      }, wR = gR(fR, GR.label, ZR), eR = GR.info ? gR(fR, GR.info, ZR) : void 0, aR = GR.placeholder ? gR(fR, GR.placeholder, ZR) : void 0, LR = (null !== (JR = GR.options) && void 0 !== JR ? JR : []).map((RR => ({
        value: RR.value,
        label: gR(fR, RR.label, ZR)
      }))), nR = Math.max(0, ...LR.map((RR => function(RR) {
        let JR = 0;
        for (const GR of RR) JR += ZJ.test(GR) ? 2 : 1;
        return JR
      }(RR.label)))), UR = tR && (0, xR.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, xR.jsx)(NR, {
          status: tR
        })
      }), WR = (0, xR.jsxs)("div", {
        className: "SliderText",
        children: [wR, void 0 !== eR && (0, xR.jsx)(uJ.e, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: eR
        })]
      });
      return "toggle" === GR.kind ? (0, xR.jsxs)(xR.Fragment, {
        children: [(0, xR.jsx)(tJ.e, {
          label: wR,
          checked: !0 === yR,
          circleInfoText: eR,
          disabled: uR,
          onClick: VR
        }), UR]
      }) : "choice" === GR.kind && LR.length <= 3 ? (0, xR.jsxs)(xR.Fragment, {
        children: [(0, xR.jsx)(tJ.g, {
          label: wR,
          options: LR,
          value: String(yR),
          circleInfoText: eR,
          onChange: VR
        }), UR]
      }) : (0, xR.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [WR, "choice" === GR.kind && (0, xR.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": nR
          },
          children: (0, xR.jsx)(lR.e, {
            options: LR,
            value: String(yR),
            disabled: uR,
            revealOnOpen: !0,
            onChange: RR => {
              VR(RR.value)
            }
          })
        }), ("number" === GR.kind || "text" === GR.kind) && (0, xR.jsx)(HR, {
          value: null === yR ? "" : String(yR),
          placeholder: aR,
          ariaLabel: wR,
          onSave: RR => {
            const JR = RR.trim(),
              yR = Number(JR);
            return VR("number" === GR.kind && "" !== JR && Number.isFinite(yR) ? yR : JR)
          }
        }), "action" === GR.kind && (0, xR.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [LR.length > 3 && (0, xR.jsx)(lR.e, {
            options: LR,
            value: {
              value: "",
              label: null !== aR && void 0 !== aR ? aR : wR
            },
            disabled: uR,
            revealOnOpen: !0,
            onChange: RR => {
              KR(RR.value)
            }
          }), LR.length > 0 && LR.length <= 3 && LR.map((RR => (0, xR.jsx)(AR.i, {
            className: "SmallTextLight",
            disabled: uR,
            onClick: () => {
              KR(RR.value)
            },
            children: RR.label
          }, RR.value))), 0 === LR.length && (0, xR.jsx)(AR.i, {
            className: "SmallTextLight",
            disabled: uR,
            onClick: () => {
              KR()
            },
            children: null !== aR && void 0 !== aR ? aR : wR
          })]
        }), "names" === GR.kind && (0, xR.jsx)(iJ, {
          names: Array.isArray(yR) ? yR : [],
          pending: uR,
          onAction: KR
        }), UR]
      })
    }));

    function iJ(RR) {
      let {
        names: JR,
        pending: GR,
        onAction: tR
      } = RR;
      const {
        t: uR
      } = (0, rR.A)(), ZR = (0, yR.useRef)(null), [qR, iR] = (0, yR.useState)(""), fR = () => {
        const RR = qR.trim();
        "" !== RR && (tR(RR, "add"), ZR.current && (ZR.current.value = ""), iR(""))
      };
      return (0, xR.jsxs)("div", {
        className: "LobbyManageNames",
        children: [JR.map((RR => (0, xR.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, xR.jsx)("span", {
            className: "LobbyManageNameText",
            children: RR
          }), (0, xR.jsx)(AR.i, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: uR("lobbyManage:removeName", {
              name: RR
            }),
            disabled: GR,
            onClick: () => {
              tR(RR, "remove")
            },
            children: (0, xR.jsx)(eR.d, {
              name: "xmark"
            })
          })]
        }, RR))), (0, xR.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, xR.jsx)(OR.b, {
            domRef: ZR,
            placeholderText: uR("lobbyManage:namePlaceholder"),
            ariaLabel: uR("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: RR => {
              iR(RR)
            },
            onEnter: fR
          }), (0, xR.jsx)(AR.i, {
            className: "SmallTextLight",
            disabled: GR || "" === qR.trim(),
            onClick: fR,
            children: uR("lobbyManage:addHere")
          })]
        })]
      })
    }
    const fJ = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function VJ(RR, JR) {
      return fJ.map((GR => {
        let {
          group: yR,
          title: tR
        } = GR;
        const uR = RR.filter((RR => RR.group === yR && void 0 === RR.parent)).map((GR => {
          const yR = !0 === JR(GR) ? RR.filter((RR => RR.parent === GR.key)) : [];
          return {
            rule: GR,
            children: yR
          }
        }));
        return {
          group: yR,
          title: tR,
          items: uR
        }
      }))
    }

    function KJ(RR) {
      return RR.flatMap((RR => {
        let {
          items: JR
        } = RR;
        return JR.flatMap((RR => {
          let {
            rule: JR,
            children: GR
          } = RR;
          return [JR, ...GR]
        }))
      }))
    }

    function wJ(RR) {
      let {
        manage: JR,
        rowsShown: GR
      } = RR;
      const {
        t: uR
      } = (0, rR.A)(), ZR = (0, WR.i)("hiddenPlayerNames"), {
        rules: qR
      } = JR.state, iR = VR(), fR = RR => {
        const JR = iR.get(RR.key);
        return void 0 === JR ? RR.value : JR
      }, KR = VJ(qR, fR), [wR] = (0, yR.useState)((() => KJ(KR).map((RR => RR.key)))), eR = GR === 1 / 0 ? null : new Set(wR.slice(0, GR)), aR = RR => null === eR || eR.has(RR.key), {
        hold: nR
      } = iR, UR = (0, yR.useCallback)(((RR, GR) => {
        (0, tR.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: RR.key
        });
        const yR = JR.send({
          type: "setRule",
          key: RR.key,
          value: GR
        }, `rule:${RR.key}`);
        return nR(RR.key, GR, yR), yR
      }), [JR, nR]), AR = (0, yR.useCallback)(((RR, GR, yR) => {
        (0, tR.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: RR.key
        }), JR.send({
          type: "ruleAction",
          key: RR.key,
          ...void 0 === GR ? {} : {
            arg: GR
          },
          ...void 0 === yR ? {} : {
            op: yR
          }
        }, `rule:${RR.key}`, void 0 === yR ? uR("lobbyManage:setJustNow") : void 0)
      }), [JR, uR]), CR = RR => {
        const GR = `rule:${RR.key}`;
        return (0, xR.jsx)(qJ, {
          rule: RR,
          value: fR(RR),
          status: JR.statusOf(GR),
          pending: JR.isPending(GR),
          hiddenNames: ZR,
          Fv: UR,
          onAction: AR
        }, RR.key)
      };
      return (0, xR.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: KR.map((RR => {
          let {
            group: JR,
            title: GR,
            items: tR
          } = RR;
          const ZR = tR.filter((RR => {
            let {
              rule: JR
            } = RR;
            return aR(JR)
          }));
          return 0 === ZR.length ? null : (0, xR.jsxs)(yR.Fragment, {
            children: [(0, xR.jsx)(LR.c, {
              label: uR(GR)
            }), ZR.map((RR => {
              let {
                rule: JR,
                children: GR
              } = RR;
              return 0 === GR.length ? CR(JR) : (0, xR.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [CR(JR), GR.filter(aR).map(CR)]
              }, JR.key)
            }))]
          }, JR)
        }))
      })
    }
    const rJ = {
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
      eJ = 5,
      aJ = (0, yR.memo)((function(RR) {
        let {
          page: JR,
          manage: GR,
          leaderboard: tR,
          focusRequest: uR,
          onFocused: ZR,
          ruleRowsShown: qR
        } = RR;
        return "leaderboard" === JR ? (0, xR.jsx)(yR.Suspense, {
          fallback: (0, xR.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, xR.jsx)(aR.d, {})
          }),
          children: tR
        }) : "joining" === JR ? (0, xR.jsx)(RJ, {
          manage: GR
        }) : "rules" === JR ? (0, xR.jsx)(wJ, {
          manage: GR,
          rowsShown: qR
        }) : (0, xR.jsx)(IR, {
          manage: GR,
          focusRequest: uR,
          onFocused: ZR
        })
      }));

    function LJ(RR) {
      let {
        page: JR
      } = RR;
      const {
        t: GR
      } = (0, rR.A)(), yR = rJ[JR];
      return (0, xR.jsxs)(xR.Fragment, {
        children: [(0, xR.jsx)(eR.d, {
          name: yR.icon
        }), " ", (0, xR.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: GR(yR.title)
        })]
      })
    }

    function nJ(RR) {
      var JR;
      const {
        t: GR
      } = (0, rR.A)(), {
        pages: uR,
        landing: ZR
      } = RR, iR = (0, yR.useRef)(null), fR = (0, yR.useRef)(null), VR = (0, yR.useRef)(null), KR = (0, yR.useRef)(new Map), [eR, aR] = (0, yR.useState)(null), WR = (0, yR.useRef)(eR), AR = (0, yR.useRef)(0), [CR, XR] = (0, yR.useState)(uR[0]), MR = null !== eR && void 0 !== eR ? eR : uR.includes(CR) ? CR : uR[0], [BR] = (0, yR.useState)(null !== (JR = null === ZR || void 0 === ZR ? void 0 : ZR.page) && void 0 !== JR ? JR : null), lR = null !== BR && uR.includes(BR) ? [BR, ...uR.filter((RR => RR !== BR))] : uR, [pR] = (0, yR.useState)((() => {
        const JR = KJ(VJ(RR.manage.state.rules, (RR => RR.value)));
        return Math.max(1, Math.ceil(JR.length / eJ))
      })), gR = lR.flatMap((RR => "rules" === RR ? Array(pR).fill(RR) : [RR])), bR = function(RR, JR) {
        const [GR, tR] = (0, yR.useState)(RR), uR = GR >= JR;
        return uR && GR !== 1 / 0 && tR(1 / 0), (0, yR.useLayoutEffect)((() => {
          if (uR) return;
          let RR = !0;
          return (0, UR.h)().then((() => {
            RR && tR((RR => RR + 1))
          })), () => {
            RR = !1
          }
        }), [GR, uR]), uR ? 1 / 0 : GR
      }(1, gR.length), vR = gR.slice(0, bR), OR = new Set(vR), NR = bR < gR.length, DR = NR ? vR.filter((RR => "rules" === RR)).length * eJ : 1 / 0, HR = (0, yR.useRef)(RR.focusRequest);
      HR.current = RR.focusRequest;
      const oR = RR => {
          WR.current = RR, aR(RR)
        },
        cR = () => {
          var RR, JR;
          iR.current.style.scrollPaddingTop = `${null!==(RR=null===(JR=VR.current)||void 0===JR?void 0:JR.offsetHeight)&&void 0!==RR?RR:0}px`
        },
        PR = RR => {
          const JR = iR.current,
            GR = KR.current.get(RR);
          if (void 0 === GR) return;
          const yR = document.activeElement,
            tR = HR.current,
            uR = null === tR ? null : GR.querySelector(`[data-lobby-manage-row="${CSS.escape(tR.name)}"]`);
          cR(), yR instanceof HTMLElement && null !== uR && void 0 !== uR && uR.contains(yR) ? yR.scrollIntoView({
            block: "center"
          }) : null === GR.previousElementSibling ? JR.scrollTop = 0 : GR.scrollIntoView({
            block: "start"
          }), AR.current = JR.scrollTop
        },
        IR = RR => {
          (0, tR.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: RR
          }), oR(RR), PR(RR)
        },
        mR = () => {
          var RR, JR;
          const GR = iR.current,
            yR = GR.getBoundingClientRect().top + (null !== (RR = null === (JR = VR.current) || void 0 === JR ? void 0 : JR.offsetHeight) && void 0 !== RR ? RR : 0),
            tR = uR.map((RR => {
              var JR, GR;
              return (null !== (JR = null === (GR = KR.current.get(RR)) || void 0 === GR ? void 0 : GR.getBoundingClientRect().top) && void 0 !== JR ? JR : 1 / 0) - yR
            })),
            ZR = !NR && GR.scrollTop + GR.clientHeight >= GR.scrollHeight - 1;
          XR(uR[(0, qR.i)(tR, ZR)])
        },
        zR = () => {
          null !== WR.current && (oR(null), mR())
        };
      (0, yR.useLayoutEffect)((() => {
        null !== ZR && uR.includes(ZR.page) && IR(ZR.page)
      }), [null === ZR || void 0 === ZR ? void 0 : ZR.seq]), (0, yR.useLayoutEffect)((() => {
        null === WR.current || uR.includes(WR.current) || zR()
      }));
      const {
        onFocused: SR
      } = RR, jR = (0, yR.useCallback)((RR => {
        null !== WR.current && PR(WR.current), SR(RR)
      }), [SR]);
      (0, yR.useLayoutEffect)((() => {
        const RR = WR.current;
        null !== RR && (!NR || uR.indexOf(gR[bR - 1]) < uR.indexOf(RR)) && PR(RR)
      }), [bR]), (0, yR.useEffect)((() => {
        const RR = new ResizeObserver((() => {
          null !== WR.current ? PR(WR.current) : cR()
        }));
        return RR.observe(iR.current), RR.observe(fR.current), () => {
          RR.disconnect()
        }
      }), []), (0, yR.useLayoutEffect)((() => {
        const RR = VR.current,
          JR = null === RR || void 0 === RR ? void 0 : RR.querySelector(".SegmentedToggleOptionSelected");
        JR && (RR.scrollLeft = Math.min(JR.offsetLeft, Math.max(RR.scrollLeft, JR.offsetLeft + JR.offsetWidth - RR.clientWidth)))
      }), [MR]);
      return (0, xR.jsxs)("div", {
        ref: iR,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === WR.current ? mR() : Math.abs(iR.current.scrollTop - AR.current) > 1 && zR()
        },
        onClick: RR => {
          var JR;
          null !== (JR = VR.current) && void 0 !== JR && JR.contains(RR.target) || zR()
        },
        onFocus: RR => {
          var JR;
          const GR = null === WR.current ? null : KR.current.get(WR.current);
          !GR || GR.contains(RR.target) || null !== (JR = VR.current) && void 0 !== JR && JR.contains(RR.target) || zR()
        },
        children: [uR.length > 1 && (0, xR.jsx)("div", {
          ref: VR,
          className: "LobbyManageChips",
          children: (0, xR.jsx)(nR.c, {
            options: uR.map((RR => ({
              value: RR,
              label: (0, xR.jsx)(LJ, {
                page: RR
              }),
              ariaLabel: GR(rJ[RR].title)
            }))),
            value: MR,
            padTabs: "2",
            ariaLabel: GR("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: IR
          })
        }), (0, xR.jsx)("div", {
          ref: fR,
          className: wR()("LobbyManageInner", {
            Staging: NR
          }),
          children: uR.filter((RR => OR.has(RR))).map((JR => {
            const GR = JR === eR;
            return (0, xR.jsxs)("section", {
              ref: RR => {
                RR ? KR.current.set(JR, RR) : KR.current.delete(JR)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": GR || void 0,
              children: [uR.length > 1 && (0, xR.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": GR || void 0,
                "data-pad-unavailable": GR || void 0,
                children: (0, xR.jsx)(LR.c, {
                  label: (0, xR.jsx)(LJ, {
                    page: JR
                  })
                })
              }), (0, xR.jsx)(aJ, {
                page: JR,
                manage: RR.manage,
                leaderboard: RR.leaderboard,
                focusRequest: RR.focusRequest,
                onFocused: jR,
                ruleRowsShown: "rules" === JR ? DR : 1 / 0
              })]
            }, JR)
          }))
        })]
      })
    }

    function UJ(RR) {
      return void 0 === (null === RR || void 0 === RR ? void 0 : RR.page) ? null : {
        page: RR.page,
        seq: RR.seq
      }
    }

    function WJ(RR) {
      let {
        leaderboard: JR
      } = RR;
      const GR = function() {
          const RR = (0, iR.f)("lobbyManage"),
            [JR, GR] = (0, yR.useReducer)((RR => RR + 1), 0),
            [tR] = (0, yR.useState)((() => new fR.b(GR)));
          return (0, yR.useEffect)((() => {
            const RR = tR.nextDeadline();
            if (null === RR) return;
            const JR = setTimeout((() => {
              tR.expire(Date.now()), GR()
            }), Math.max(0, RR - Date.now()));
            return () => {
              clearTimeout(JR)
            }
          })), (0, yR.useMemo)((() => null === RR ? null : {
            state: RR,
            send: (RR, JR, yR) => {
              const uR = tR.send(RR, JR, null !== yR && void 0 !== yR ? yR : null);
              return GR(), uR
            },
            statusOf: RR => tR.statusOf(RR, Date.now()),
            showStatus: (RR, JR) => {
              tR.show(RR, JR)
            },
            isPending: RR => tR.isPending(RR)
          }), [RR, JR, tR])
        }(),
        VR = (0, qR.l)((0, uR.e)()),
        KR = (0, ZR.j)(),
        [wR, rR] = (0, yR.useState)((() => UJ(KR))),
        [eR, aR] = (0, yR.useState)(null);
      return (0, yR.useEffect)((() => {
        null === KR && (0, tR.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, yR.useEffect)((() => {
        null !== KR && (rR((RR => (null === RR || void 0 === RR ? void 0 : RR.seq) === KR.seq ? RR : UJ(KR))), void 0 !== KR.focusName && "players" === KR.page ? aR({
          name: KR.focusName,
          seq: KR.seq
        }) : (0, ZR.i)(KR.seq))
      }), [null === KR || void 0 === KR ? void 0 : KR.seq]), null === GR ? null : (0, xR.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, xR.jsx)(nJ, {
          pages: (0, qR.h)(GR.state, VR),
          manage: GR,
          leaderboard: JR,
          focusRequest: eR,
          onFocused: ZR.i,
          landing: wR
        })
      })
    }
  },
  37751: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR,
      c: () => iR
    });
    var yR = GR(1618),
      tR = GR(2163),
      uR = GR(2134);
    const ZR = 1e4;
    let qR = 0;

    function iR(RR) {
      const JR = ++qR;
      return new Promise((GR => {
        const qR = JR => {
            iR(), clearTimeout(fR), !1 === (null === JR || void 0 === JR ? void 0 : JR.ok) && (0, yR.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: RR.type
            }), GR(JR)
          },
          iR = tR.c.subscribe("lobbyManage", (RR => {
            const GR = function(RR, JR) {
              var GR;
              return null !== (GR = null === RR || void 0 === RR ? void 0 : RR.results.find((RR => RR.requestId === JR))) && void 0 !== GR ? GR : null
            }(RR, JR);
            null !== GR && qR(GR)
          })),
          fR = setTimeout((() => {
            qR(null)
          }), ZR);
        uR.gameBridge.send("lobbyManage", {
          ...RR,
          requestId: JR
        })
      }))
    }
    const fR = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class VR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iR;
        this.onChange = RR, this.sendAction = JR, this.pending = new Map, this.statuses = new Map
      }
      send(RR, JR, GR) {
        var yR;
        return this.statuses.delete(JR), this.pending.set(JR, (null !== (yR = this.pending.get(JR)) && void 0 !== yR ? yR : 0) + 1), this.sendAction(RR).then((RR => {
          var yR;
          const tR = null !== RR && void 0 !== RR ? RR : {
              requestId: -1,
              ok: !1,
              message: fR
            },
            uR = (null !== (yR = this.pending.get(JR)) && void 0 !== yR ? yR : 1) - 1;
          uR > 0 ? this.pending.set(JR, uR) : this.pending.delete(JR);
          const ZR = !tR.ok || tR.message.length > 0 ? tR.message : null === GR ? null : [GR];
          return null !== ZR && this.statuses.set(JR, {
            ok: tR.ok,
            text: ZR,
            until: Date.now() + 4e3
          }), this.onChange(), tR
        }))
      }
      show(RR, JR) {
        this.statuses.set(RR, {
          ...JR,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(RR) {
        for (const [JR, GR] of this.statuses) GR.until <= RR && this.statuses.delete(JR)
      }
      nextDeadline() {
        let RR = null;
        for (const GR of this.statuses.values()) {
          var JR;
          RR = Math.min(null !== (JR = RR) && void 0 !== JR ? JR : 1 / 0, GR.until)
        }
        return RR
      }
      statusOf(RR, JR) {
        const GR = this.statuses.get(RR);
        return !GR || GR.until <= JR ? null : {
          ok: GR.ok,
          text: GR.text
        }
      }
      isPending(RR) {
        return this.pending.has(RR)
      }
    }
  },
  37759: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR,
      h: () => KR,
      k: () => VR,
      o: () => fR,
      q: () => ZR,
      u: () => yR,
      w: () => uR
    });
    const yR = 2;

    function tR(RR, JR, GR) {
      const yR = RR.filter((RR => RR.name !== JR)),
        tR = yR.filter((RR => "none" === RR.role)).sort(((RR, JR) => JR.at - RR.at)),
        uR = yR.filter((RR => "none" !== RR.role)).sort(((RR, JR) => GR.indexOf(RR.role) - GR.indexOf(JR.role) || JR.at - RR.at));
      return [...RR.some((RR => RR.name === JR)) && null !== JR ? [JR] : [], ...[...tR, ...uR].map((RR => RR.name))]
    }

    function uR(RR, JR) {
      const GR = RR.banned.map((RR => RR.name)),
        yR = new Set(GR);
      return {
        here: tR(RR.here, JR, RR.roles.map((RR => RR.role))),
        away: RR.away.filter((RR => !yR.has(RR.name))).map((RR => RR.name)),
        banned: GR
      }
    }

    function ZR(RR, JR, GR) {
      const yR = new Set([...RR.here, ...RR.away, ...RR.banned]),
        tR = uR(JR, GR),
        ZR = JR => {
          const GR = tR[JR].filter((RR => !yR.has(RR)));
          for (const RR of GR) yR.add(RR);
          return [...RR[JR], ...GR]
        };
      return {
        here: ZR("here"),
        away: ZR("away"),
        banned: ZR("banned")
      }
    }

    function qR(RR, JR) {
      const GR = RR.here.find((RR => RR.name === JR));
      if (GR) return {
        section: "here",
        player: GR
      };
      const yR = RR.banned.find((RR => RR.name === JR));
      if (yR) return {
        section: "banned",
        bannedAt: yR.at
      };
      const tR = RR.away.find((RR => RR.name === JR));
      return tR ? {
        section: "away",
        player: tR
      } : {
        section: "gone"
      }
    }
    const iR = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };

    function fR(RR) {
      const JR = RR.can.roles.filter((JR => "none" !== JR || "none" !== RR.role));
      return JR.some((JR => JR !== RR.role)) ? JR : []
    }

    function VR(RR, JR) {
      if ("banned" === RR.section) return {
        ...iR,
        unban: !0
      };
      if ("gone" === RR.section) return iR;
      const {
        player: GR
      } = RR, yR = "here" === RR.section, tR = fR(GR), uR = yR && JR && null !== GR.gamemode && GR.can.gamemode;
      return {
        gamemode: uR,
        roles: tR,
        fixedRole: 0 !== tR.length || "none" === GR.role && !uR ? null : GR.role,
        kick: yR && GR.can.kick,
        ban: GR.can.ban,
        unban: !1
      }
    }

    function KR(RR, JR) {
      return RR.here.filter((RR => RR.name !== JR && "none" === RR.role && RR.can.kick)).length
    }
  },
  37905: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => KR
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(1867),
      qR = GR(1590),
      iR = GR(1465),
      fR = GR(1468),
      VR = GR(1378);

    function KR(RR) {
      let {
        label: JR,
        icon: GR,
        placeholder: tR,
        onSubmit: KR
      } = RR;
      const wR = (0, yR.useRef)(null),
        [rR, eR] = (0, yR.useState)(""),
        [aR, LR] = (0, yR.useState)("Enter"),
        [nR, UR] = (0, yR.useState)(null);
      (0, yR.useEffect)((() => {
        if ("Success" !== aR && "Error" !== aR) return;
        const RR = setTimeout((() => {
          "Success" === aR && wR.current && (wR.current.value = "", eR("")), LR("Enter")
        }), "Success" === aR ? 1e3 : 4e3);
        return () => {
          clearTimeout(RR)
        }
      }), [aR]);
      const WR = () => {
        const RR = rR.trim();
        "" !== RR && "Enter" === aR && (LR("Loading"), KR(RR).then((RR => {
          wR.current && ("error" in RR ? null === RR.error ? LR("Enter") : (UR(RR.error), LR("Error")) : LR("Success"))
        })))
      };
      return (0, VR.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: RR => {
          RR.target === wR.current && "Escape" !== RR.key && RR.stopPropagation()
        },
        children: [(0, VR.jsxs)("div", {
          className: uR()("AddFriendBodyOverlay", `AddFriendBodyOverlay${aR}`),
          children: ["Loading" === aR && (0, VR.jsx)(iR.d, {}), "Success" === aR && (0, VR.jsx)(fR.d, {
            name: "check"
          }), "Error" === aR && nR]
        }), (0, VR.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, VR.jsx)(ZR.b, {
            className: "PlayerSearchInput",
            domRef: wR,
            maxLength: 32,
            placeholderText: tR,
            ariaLabel: tR,
            stopPropagation: !1,
            onValueChange: RR => {
              eR(RR)
            },
            onEnter: WR
          }), (0, VR.jsxs)(qR.g, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== aR || "" === rR.trim(),
            onClick: WR,
            children: [(0, VR.jsx)(fR.d, {
              name: GR
            }), " ", JR]
          })]
        })]
      })
    }
  },
  37881: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => KR
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(1270),
      qR = GR(1468),
      iR = GR(1378);
    const fR = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      VR = ["unlisted", "public", "whitelist", "private"];

    function KR(RR) {
      let {
        visibility: JR,
        onPick: GR
      } = RR;
      const {
        t: tR
      } = (0, ZR.A)(), KR = (0, yR.useRef)([]);
      return (0, iR.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": tR("worldSocial:whoCanJoin"),
        children: VR.map(((RR, yR) => {
          const ZR = RR === JR;
          return (0, iR.jsxs)("button", {
            ref: RR => {
              KR.current[yR] = RR
            },
            type: "button",
            className: uR()("WorldSocialTile", {
              WorldSocialTileSelected: ZR
            }),
            "aria-pressed": ZR,
            tabIndex: ZR ? 0 : -1,
            onKeyDown: RR => {
              ((RR, JR) => {
                const GR = "ArrowRight" === RR.key || "ArrowDown" === RR.key ? 1 : "ArrowLeft" === RR.key || "ArrowUp" === RR.key ? -1 : 0;
                var yR;
                0 !== GR && (RR.preventDefault(), null === (yR = KR.current[(JR + GR + VR.length) % VR.length]) || void 0 === yR || yR.focus())
              })(RR, yR)
            },
            onClick: () => {
              GR(RR)
            },
            children: [(0, iR.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, iR.jsx)(qR.d, {
                name: fR[RR]
              })
            }), (0, iR.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, iR.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: tR(`worldSocial:${RR}`)
              }), (0, iR.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: tR(`worldSocial:${RR}Description`)
              })]
            })]
          }, RR)
        }))
      })
    }
  },
  37897: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR
    });
    var yR = GR(1270),
      tR = GR(3761),
      uR = GR(5141),
      ZR = GR(1378);

    function qR(RR) {
      let {
        gK: JR,
        children: GR,
        ...qR
      } = RR;
      const {
        t: iR
      } = (0, yR.A)();
      return (0, ZR.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          JR.onChange(!JR.on)
        },
        children: (0, ZR.jsx)(tR.g, {
          ...qR,
          opensProfileCard: !1,
          children: (0, ZR.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: RR => {
              RR.stopPropagation()
            },
            children: [GR, (0, ZR.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, ZR.jsx)(uR.d, {
                checked: JR.on,
                disabled: !1,
                ariaLabel: iR("worldSocial:letJoin", {
                  playerName: qR.playerSocialPreview.name
                }),
                onChange: RR => {
                  JR.onChange(RR.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37873: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => eR
    });
    var yR = GR(66),
      tR = GR(1270),
      uR = GR(2068),
      ZR = GR(103),
      qR = GR(25),
      iR = GR(1618),
      fR = GR(3791),
      VR = GR(35044),
      KR = GR(1590),
      wR = GR(1468),
      rR = GR(1378);

    function eR(RR) {
      let {
        worldCode: JR,
        message: GR
      } = RR;
      const {
        t: eR
      } = (0, tR.A)(), {
        isTouchScreen: aR
      } = (0, qR.o)(["isTouchScreen"]), LR = ZR.featureFlags.canUseInviteLinks, nR = (0, VR.j)(LR && null === GR), [UR, WR] = (0, fR.h)(), AR = (0, yR.useRef)(null);
      if (null !== GR) return (0, rR.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, rR.jsx)(wR.d, {
          name: "lock"
        }), (0, rR.jsx)("span", {
          children: GR
        })]
      });
      const CR = LR ? nR : JR,
        XR = aR && LR && (0, fR.b)();
      return (0, rR.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!LR && (0, rR.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: eR("worldSocial:worldCode")
        }), (0, rR.jsx)("input", {
          ref: AR,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== CR && void 0 !== CR ? CR : "",
          "aria-label": eR(LR ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: RR => {
            RR.currentTarget.select()
          }
        }), (0, rR.jsxs)(KR.g, {
          className: "WorldSocialCopy",
          disabled: null === CR,
          onClick: () => {
            null !== CR && (0, fR.d)(CR, {
              useShareSheet: XR,
              onOutcome: RR => {
                if ((0, iR.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== RR || LR ? RR : "code"
                  }), "copied" === RR) WR();
                else if ("failed" === RR) {
                  var JR;
                  null === (JR = AR.current) || void 0 === JR || JR.focus(), uR.j.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, rR.jsx)(wR.d, {
            name: UR ? "check" : XR ? "up-from-bracket" : "copy"
          }), " ", eR(UR ? "general:copied" : XR ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37890: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => rR,
      f: () => wR,
      i: () => KR
    });
    var yR = GR(656),
      tR = GR(1270),
      uR = GR(1803),
      ZR = GR(3761),
      qR = GR(3713),
      iR = GR(1590),
      fR = GR(37897),
      VR = GR(1378);

    function KR(RR, JR) {
      var GR;
      return {
        isError: !1,
        name: RR,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== JR && void 0 !== JR ? JR : {},
        nameColour: null !== (GR = null === JR || void 0 === JR ? void 0 : JR.nameColour) && void 0 !== GR ? GR : yR.c,
        location: {
          status: "offline"
        }
      }
    }

    function wR(RR) {
      let {
        player: JR,
        isFriend: GR = !1,
        status: yR,
        showLocation: iR = void 0 === yR,
        gK: KR,
        onSendFriendRequest: wR,
        actions: rR,
        zIndex: eR
      } = RR;
      const {
        t: aR
      } = (0, tR.A)();
      let LR = yR;
      null !== KR && void 0 !== KR && KR.on && (LR = (0, VR.jsxs)(VR.Fragment, {
        children: [null !== yR && void 0 !== yR ? yR : (0, VR.jsx)(qR.d, {
          socialPreview: JR
        }), (0, VR.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", aR("worldSocial:canJoin")]
        })]
      }));
      const nR = {
        playerSocialPreview: JR,
        isFriend: GR,
        hideFriendBadge: !0,
        onFriendRemoved: GR ? RR => {
          uR.e.removeFriendFromState(RR)
        } : void 0,
        status: LR,
        showLocation: iR,
        onSendFriendRequest: wR,
        zIndex: eR
      };
      return KR ? (0, VR.jsx)(fR.b, {
        ...nR,
        gK: KR,
        children: rR
      }) : (0, VR.jsx)(ZR.g, {
        ...nR,
        opensProfileCard: !1,
        children: rR || void 0
      })
    }

    function rR(RR) {
      let {
        row: JR,
        gK: GR,
        canInvite: yR,
        invited: uR,
        onInvite: ZR,
        zIndex: qR
      } = RR;
      const {
        t: fR
      } = (0, tR.A)(), KR = "online" === JR.place ? iR.g : iR.i;
      return (0, VR.jsx)(wR, {
        player: JR.friend,
        isFriend: !0,
        status: "here" === JR.place ? fR("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        gK: GR,
        zIndex: qR,
        actions: yR && (0, VR.jsx)(KR, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: uR,
          onClick: ZR,
          ariaLabel: `${fR("worldSocial:invite")} ${JR.friend.name}`,
          children: fR(uR ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37863: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => iR,
      g: () => ZR,
      j: () => fR
    });
    var yR = GR(66),
      tR = GR(5392),
      uR = GR(2068);

    function ZR(RR) {
      const JR = {
        lobbyName: RR,
        answer: null,
        response: tR.c.getSocialSettings(RR)
      };
      return JR.response.then((RR => {
        JR.answer = RR
      })), JR
    }
    const qR = new Map;

    function iR(RR) {
      qR.set(RR.lobbyName, RR)
    }

    function fR(RR) {
      const [JR] = (0, yR.useState)((() => function(RR) {
        var JR;
        const GR = null !== (JR = qR.get(RR)) && void 0 !== JR ? JR : null;
        return null !== GR && void 0 !== GR && GR.answer && "error" in GR.answer ? null : GR
      }(RR))), [GR, ZR] = (0, yR.useState)((() => null !== JR && void 0 !== JR && JR.answer && "settings" in JR.answer ? JR.answer.settings : null)), [iR, fR] = (0, yR.useState)(!0), [VR, KR] = (0, yR.useState)(null !== GR), wR = (0, yR.useRef)(GR);
      wR.current = GR;
      const rR = (0, yR.useRef)(0),
        eR = (0, yR.useRef)(0),
        aR = (0, yR.useRef)(!1),
        LR = (0, yR.useRef)(!0),
        nR = (0, yR.useCallback)((async JR => {
          const GR = ++rR.current,
            yR = await (null !== JR && void 0 !== JR ? JR : tR.c.getSocialSettings(RR));
          LR.current && GR === rR.current && (KR(!0), fR(!1), "error" in yR || ZR(yR.settings))
        }), [RR]),
        UR = (0, yR.useCallback)((() => {
          fR(!0), nR()
        }), [nR]),
        WR = (0, yR.useCallback)((() => {
          eR.current > 0 ? aR.current = !0 : nR()
        }), [nR]);
      (0, yR.useEffect)((() => (LR.current = !0, qR.delete(RR), fR(!0), nR(null === JR || void 0 === JR ? void 0 : JR.response), () => {
        LR.current = !1
      })), [nR, RR, JR]);
      const AR = RR => {
        rR.current++, fR(!1), wR.current = RR, ZR(RR)
      };
      return {
        settings: GR,
        loading: iR,
        answered: VR,
        retry: UR,
        refresh: WR,
        change: async function(JR, GR) {
          let {
            quiet: yR = !1,
            onAnswer: ZR
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const qR = wR.current;
          if (null === qR) return !1;
          AR(GR(qR)), eR.current > 0 && (aR.current = !0), eR.current++;
          const iR = await tR.c.setSocialSettings(RR, JR);
          eR.current--;
          const fR = !("error" in iR);
          if (!LR.current) return fR;
          if (null === ZR || void 0 === ZR || ZR(iR), yR);
          else if ("error" in iR) uR.j.showMessage({
            translationKey: iR.error
          });
          else
            for (const RR of iR.notFound) uR.j.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: RR
              }
            });
          if (eR.current > 0) return fR;
          const VR = aR.current;
          return aR.current = !1, !VR && "settings" in iR ? AR(iR.settings) : (VR || AR(qR), nR()), fR
        }
      }
    }
  },
  37911: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      g: () => uR
    });
    var yR = GR(163);
    const tR = new Map;

    function uR(RR, JR) {
      var GR;
      const yR = null !== (GR = tR.get(RR)) && void 0 !== GR ? GR : new Map;
      yR.set(JR, Date.now()), tR.set(RR, yR)
    }

    function ZR(RR) {
      const JR = tR.get(RR);
      if (!JR) return [];
      const GR = Date.now();
      for (const [tR, uR] of JR) GR - uR >= yR.q && JR.delete(tR);
      return [...JR.keys()]
    }
  },
  37865: (RR, JR, GR) => {
    function yR(RR, JR) {
      const GR = JR.toLowerCase();
      for (const yR of RR)
        if (yR.toLowerCase() === GR) return !0;
      return !1
    }

    function tR(RR, JR, GR) {
      const tR = [],
        uR = [],
        ZR = [];
      for (const qR of RR) !qR.isError && qR.name && ("inGame" === qR.location.status && qR.location.inLobbyName === JR || yR(GR, qR.name) ? uR.push({
        friend: qR,
        place: "here"
      }) : "offline" === qR.location.status ? ZR.push({
        friend: qR,
        place: "offline"
      }) : tR.push({
        friend: qR,
        place: "online"
      }));
      return [...tR, ...uR, ...ZR]
    }

    function uR(RR, JR, GR) {
      const tR = [],
        uR = RR.flatMap((RR => "here" === RR.place ? [RR.friend.name] : []));
      for (const ZR of [...uR, ...JR]) yR(tR, ZR) || yR(GR, ZR) || tR.push(ZR);
      return tR
    }

    function ZR(RR, JR) {
      return null === RR || void 0 === RR || !RR.canManage || yR(RR.whitelist, JR) ? "none" : "whitelist" === RR.visibility ? "required" : "quiet"
    }

    function qR(RR) {
      if (null === RR) return !0;
      const {
        visibility: JR
      } = RR;
      return "public" === JR || "unlisted" === JR || "whitelist" === JR && RR.canManage
    }

    function iR(RR, JR, GR) {
      if (GR) {
        const GR = JR.filter((JR => !yR(RR.whitelist, JR)));
        return {
          ...RR,
          whitelist: [...RR.whitelist, ...GR]
        }
      }
      return {
        ...RR,
        whitelist: RR.whitelist.filter((RR => !yR(JR, RR)))
      }
    }

    function fR(RR, JR) {
      const GR = [];
      for (let yR = 0; yR < RR.length; yR += JR) GR.push(RR.slice(yR, yR + JR));
      return GR
    }
    GR.d(JR, {
      d: () => qR,
      f: () => uR,
      j: () => tR,
      n: () => yR,
      r: () => fR,
      t: () => ZR,
      x: () => iR
    })
  },
  38131: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(66),
      tR = GR(3465);

    function uR() {
      const RR = (0, tR.f)("lobbyLeaderboardInfo");
      return (0, yR.useMemo)((() => function(RR) {
        if (null === RR) return null;
        const JR = Object.entries(RR),
          GR = JR.filter((RR => {
            let [, JR] = RR;
            return void 0 !== JR
          }));
        if (GR.length === JR.length) return RR;
        const yR = Object.fromEntries(GR),
          tR = Object.keys(RR).filter((RR => !Object.hasOwn(yR, RR)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${tR.join(", ")}`), yR
      }(RR)), [RR])
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);