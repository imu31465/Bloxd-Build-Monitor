export const id = 253;
export const ids = [253];
export const modules = {
  42561: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      LobbyManageView: () => si
    });
    var mW = OW(62),
      EW = OW(1556),
      NW = OW(38169),
      PW = OW(3348),
      LW = OW(3353),
      cW = OW(3332),
      wW = OW(37824);

    function tW() {
      const [WW, iW] = (0, mW.useState)(new Map);
      return {
        get: iW => WW.get(iW),
        hold: (0, mW.useCallback)(((WW, OW, mW) => {
          iW((iW => new Map(iW).set(WW, OW))), mW.then((() => {
            iW((iW => {
              const OW = new Map(iW);
              return OW.delete(WW), OW
            }))
          }))
        }), [])
      }
    }
    var ZW = OW(1089),
      xW = OW.n(ZW),
      lW = OW(1172),
      AW = OW(1391),
      bW = OW(1383),
      jW = OW(3665),
      UW = OW(4171),
      kW = OW(4653);
    var sW = OW(2075),
      MW = OW(1532),
      KW = OW(37829),
      SW = OW(3661),
      YW = OW(3798),
      yW = OW(37953),
      TW = OW(4292),
      JW = OW(344);

    function hW(WW, iW, OW) {
      return iW.map((iW => {
        if ("string" === typeof iW) return iW;
        const mW = "str" in iW ? iW.str : iW;
        return "string" === typeof mW ? mW : "entityName" in mW ? mW.entityName : "translationKey" in mW ? WW(mW.translationKey, (0, lW.o)(mW.params, OW)) : ""
      })).join("")
    }

    function HW(WW, iW, OW, mW, EW) {
      return EW - mW < 6e4 ? WW(`${OW}JustNow`) : WW(OW, {
        time: (0, JW.$)((0, lW.k)(iW, OW), mW, EW)
      })
    }
    var nW = OW(2021),
      uW = OW(1782),
      oW = OW(1283);

    function dW(WW) {
      let {
        status: iW
      } = WW;
      return (0, oW.jsx)("span", {
        className: xW()("LobbyManageStatus", {
          LobbyManageStatusRefused: !iW.ok
        }),
        children: (0, oW.jsx)(nW.d, {
          text: iW.text
        })
      })
    }

    function eW(WW) {
      let {
        names: iW,
        cap: OW,
        filterFrom: EW,
        moreLabel: NW,
        reveal: PW = null,
        renderRow: LW
      } = WW;
      const {
        t: cW
      } = (0, lW.B)(), [wW, tW] = (0, mW.useState)(!1), [ZW, xW] = (0, mW.useState)(""), bW = wW || null !== PW && iW.indexOf(PW) >= OW, UW = (bW || iW.length <= OW) && null !== EW && iW.length > EW, kW = ZW.trim().toLowerCase();
      let sW = bW ? iW : iW.slice(0, OW);
      return UW && "" !== kW && (sW = sW.filter((WW => WW.toLowerCase().includes(kW)))), (0, oW.jsxs)(oW.Fragment, {
        children: [UW && (0, oW.jsx)(uW.b, {
          className: "LobbyManageFilter",
          placeholderText: cW("lobbyManage:findName"),
          ariaLabel: cW("lobbyManage:findName"),
          onValueChange: WW => {
            xW(WW)
          }
        }), sW.length > 0 && (0, oW.jsx)("div", {
          className: "PlayerRows",
          children: sW.map(((WW, iW) => LW(WW, sW.length - iW)))
        }), !bW && iW.length > OW && (0, oW.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, oW.jsx)(jW.b, {
            label: (0, oW.jsxs)(oW.Fragment, {
              children: [NW, " ", (0, oW.jsx)(AW.c, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              tW(!0)
            }
          })
        })]
      })
    }

    function vW(WW) {
      let {
        value: iW,
        placeholder: OW,
        ariaLabel: EW,
        maxLength: NW,
        wide: PW = !1,
        onSave: LW
      } = WW;
      const cW = (0, mW.useRef)(null),
        [wW, tW] = (0, mW.useState)(0),
        ZW = (0, mW.useRef)(!0),
        lW = (0, mW.useRef)(null),
        AW = (0, mW.useRef)({
          value: iW,
          onSave: LW
        });
      AW.current = {
        value: iW,
        onSave: LW
      };
      const bW = () => {
        const WW = lW.current;
        lW.current = null, null !== WW && WW !== AW.current.value && AW.current.onSave(WW).then((() => {
          ZW.current && tW((WW => WW + 1))
        }))
      };
      return (0, mW.useEffect)((() => {
        null === lW.current && cW.current && (cW.current.value = iW)
      }), [iW, wW]), (0, mW.useEffect)((() => () => {
        ZW.current = !1, bW()
      }), []), (0, oW.jsx)("div", {
        className: xW()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: PW
        }),
        onBlur: bW,
        children: (0, oW.jsx)(uW.b, {
          domRef: cW,
          defaultValue: iW,
          placeholderText: OW,
          ariaLabel: EW,
          maxLength: NW,
          onValueChange: WW => {
            lW.current = WW
          },
          onEnter: bW
        })
      })
    }
    const gW = ["mod", "coOwner"],
      DW = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function VW(WW) {
      var iW, OW, NW;
      let {
        name: PW,
        place: LW,
        openedIn: cW,
        isYou: wW,
        manage: ZW,
        hiddenNames: xW,
        zIndex: bW
      } = WW;
      const {
        t: jW,
        selectedLanguage: UW
      } = (0, lW.B)(), [kW, sW] = (0, mW.useState)(null), {
        state: JW
      } = ZW, nW = `player:${PW}`, uW = (0, KW.i)(LW, null !== JW.gamemodes), eW = ZW.statusOf(nW), vW = ZW.isPending(nW), VW = tW(), pW = Date.now(), fW = WW => {
        var iW, OW;
        return null !== (iW = null === (OW = (WW => JW.roles.find((iW => iW.role === WW)))(WW)) || void 0 === OW ? void 0 : OW.label) && void 0 !== iW ? iW : WW
      }, CW = WW => {
        const iW = DW[WW];
        return void 0 === iW ? void 0 : jW(iW)
      }, XW = "here" === LW.section || "away" === LW.section ? LW.player : null, BW = null !== (iW = VW.get("role")) && void 0 !== iW ? iW : null === XW || void 0 === XW ? void 0 : XW.role, qW = "here" === LW.section ? LW.player.id : null, {
        playerSocialPreview: RW,
        isFriend: GW
      } = null === qW ? {
        playerSocialPreview: (0, yW.k)(PW, null),
        isFriend: !1
      } : (0, YW.c)(qW, PW), IW = function() {
        ZW.send(...arguments)
      }, aW = (WW, iW) => {
        VW.hold("role", WW, ZW.send({
          type: "setRole",
          name: PW,
          role: WW
        }, nW, iW))
      };
      let rW = null;
      if ("ban" === (null === kW || void 0 === kW ? void 0 : kW.kind)) rW = jW("lobbyManageEntry:banConfirm", {
        playerName: PW
      });
      else if ("role" === (null === kW || void 0 === kW ? void 0 : kW.kind)) {
        var zW;
        rW = `${jW("lobbyManage:roleConfirm",{playerName:PW,role:fW(kW.role)})} ${null!==(zW=CW(kW.role))&&void 0!==zW?zW:""}`
      } else if (eW) rW = (0, oW.jsx)(dW, {
        status: eW
      });
      else if (wW) rW = jW("lobbyManage:you");
      else if ("here" === LW.section) "none" === LW.player.role && pW - LW.player.at < 6e5 && (rW = HW(jW, UW.code, "lobbyManage:joinedAgo", LW.player.at, pW));
      else if ("away" === LW.section) {
        if (LW.player.at > 0) {
          const WW = "kicked" === LW.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          rW = HW(jW, UW.code, WW, LW.player.at, pW)
        }
      } else "banned" === LW.section ? null !== LW.bannedAt && (rW = HW(jW, UW.code, "lobbyManage:bannedAgo", LW.bannedAt, pW)) : "banned" === cW && (rW = jW("lobbyManageEntry:unbanned"));
      return (0, oW.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": PW,
        children: (0, oW.jsxs)(SW.h, {
          playerSocialPreview: RW,
          isFriend: GW,
          status: rW,
          opensProfileCard: !wW && (0, YW.d)(!0, PW, xW),
          zIndex: bW,
          children: [null !== kW && (0, oW.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === kW.kind && (0, oW.jsxs)(MW.O, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                sW(null), IW({
                  type: "ban",
                  name: PW
                }, nW)
              },
              children: [(0, oW.jsx)(AW.c, {
                name: "gavel"
              }), (0, oW.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: jW("lobbyManageEntry:ban")
              })]
            }), "role" === kW.kind && (0, oW.jsx)(MW.f, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: kW.role
              },
              onClick: () => {
                sW(null), aW(kW.role)
              },
              children: jW("lobbyManage:makeRole", {
                role: fW(kW.role)
              })
            }), (0, oW.jsx)(MW.h, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                sW(null)
              },
              children: jW("general:cancel")
            })]
          }), null === kW && (0, oW.jsxs)(oW.Fragment, {
            children: [(0, oW.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [uW.gamemode && null !== XW && (0, oW.jsx)(TW.e, {
                options: (null !== (OW = JW.gamemodes) && void 0 !== OW ? OW : []).map((WW => ({
                  value: WW.value,
                  label: hW(jW, WW.label, xW)
                }))),
                value: null !== (NW = VW.get("gamemode")) && void 0 !== NW ? NW : XW.gamemode,
                disabled: vW,
                revealOnOpen: !0,
                onChange: WW => {
                  (0, EW.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: WW.value
                  }), VW.hold("gamemode", WW.value, ZW.send({
                    type: "setGamemode",
                    name: PW,
                    gamemode: WW.value
                  }, nW))
                }
              }), uW.roles.length > 0 && null !== XW && (0, oW.jsx)(TW.e, {
                options: [...JW.roles].reverse().filter((WW => uW.roles.includes(WW.role))).map((WW => ({
                  value: WW.role,
                  label: WW.label
                }))),
                value: "none" === BW ? void 0 : BW,
                placeholder: jW("lobbyManageEntry:giveRole"),
                disabled: vW,
                revealOnOpen: !0,
                onChange: WW => {
                  var iW;
                  (iW = WW.value) !== (null === XW || void 0 === XW ? void 0 : XW.role) && (gW.includes(iW) ? sW({
                    kind: "role",
                    role: iW
                  }) : ((0, EW.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: iW
                  }), aW(iW, CW(iW))))
                }
              }), null !== uW.fixedRole && (0, oW.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: fW(uW.fixedRole)
              })]
            }), (0, oW.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [uW.kick && (0, oW.jsxs)(MW.h, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${jW("lobbyManageEntry:kick")} ${PW}`,
                disabled: vW,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  IW({
                    type: "kick",
                    name: PW
                  }, nW)
                },
                children: [(0, oW.jsx)(AW.c, {
                  name: "person-falling-burst"
                }), (0, oW.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: jW("lobbyManageEntry:kick")
                })]
              }), uW.ban && (0, oW.jsxs)(MW.S, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${jW("lobbyManageEntry:ban")} ${PW}`,
                disabled: vW,
                padDestructive: !0,
                onClick: () => {
                  sW({
                    kind: "ban"
                  })
                },
                children: [(0, oW.jsx)(AW.c, {
                  name: "gavel"
                }), (0, oW.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: jW("lobbyManageEntry:ban")
                })]
              }), uW.unban && (0, oW.jsxs)(MW.h, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${jW("lobbyManageEntry:unban")} ${PW}`,
                disabled: vW,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  IW({
                    type: "unban",
                    name: PW
                  }, nW)
                },
                children: [(0, oW.jsx)(AW.c, {
                  name: "user-unlock"
                }), (0, oW.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: jW("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function pW(WW) {
      var iW, OW, EW, NW;
      let {
        manage: PW,
        focusRequest: LW,
        onFocused: cW
      } = WW;
      const {
        t: wW
      } = (0, lW.B)(), tW = (0, sW.g)("players"), ZW = (0, sW.g)("hiddenPlayerNames"), xW = (0, mW.useRef)(null), {
        state: bW
      } = PW, UW = null === tW.localId ? null : null !== (iW = null === (OW = tW.byId[tW.localId]) || void 0 === OW ? void 0 : OW.name) && void 0 !== iW ? iW : null, [kW] = (0, mW.useState)((() => (0, KW.o)(bW, UW))), SW = (0, KW.k)(kW, bW, UW), [YW, yW] = (0, mW.useState)(!1), TW = (0, KW.h)(bW, UW), JW = PW.statusOf("kickAll");
      (0, mW.useEffect)((() => {
        var WW, iW;
        if (null === LW) return;
        const OW = null === (WW = xW.current) || void 0 === WW ? void 0 : WW.querySelector(`[data-lobby-manage-row="${CSS.escape(LW.name)}"]`);
        null === OW || void 0 === OW || OW.scrollIntoView({
          block: "center"
        }), null === OW || void 0 === OW || null === (iW = OW.querySelector(".ProfilePreview")) || void 0 === iW || iW.focus({
          preventScroll: !0
        }), cW(LW.seq)
      }), [null === LW || void 0 === LW ? void 0 : LW.seq]);
      const hW = WW => (iW, OW) => (0, oW.jsx)(VW, {
        name: iW,
        place: (0, KW.e)(bW, iW),
        openedIn: WW,
        isYou: iW === UW,
        manage: PW,
        hiddenNames: ZW,
        zIndex: OW
      }, iW);
      return (0, oW.jsxs)("div", {
        ref: xW,
        className: "LobbyManagePage",
        children: [SW.here.length > 0 && (0, oW.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, oW.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, oW.jsx)(jW.b, {
              label: wW("lobbyManage:here"),
              meta: bW.here.length
            }), TW >= KW.n && !YW && (0, oW.jsxs)(MW.S, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: PW.isPending("kickAll"),
              onClick: () => {
                yW(!0)
              },
              children: [(0, oW.jsx)(AW.c, {
                name: "person-falling-burst"
              }), " ", wW("lobbyManage:kickAll")]
            })]
          }), YW && TW >= KW.n && (0, oW.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, oW.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: wW("lobbyManage:kickAllConfirm", {
                count: TW
              })
            }), (0, oW.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, oW.jsx)(MW.O, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  yW(!1), PW.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: wW("lobbyManage:kickAll")
              }), (0, oW.jsx)(MW.h, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  yW(!1)
                },
                children: wW("general:cancel")
              })]
            })]
          }), JW && (0, oW.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, oW.jsx)(dW, {
              status: JW
            })
          }), (0, oW.jsx)(eW, {
            names: SW.here,
            cap: SW.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: hW("here")
          })]
        }), SW.away.length > 0 && (0, oW.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, oW.jsx)(jW.b, {
            label: wW("lobbyManage:notHere"),
            meta: SW.away.length
          }), (0, oW.jsx)(eW, {
            names: SW.away,
            cap: 5,
            filterFrom: null,
            moreLabel: wW("lobbyManage:allCount", {
              count: SW.away.length
            }),
            reveal: null !== (EW = null === LW || void 0 === LW ? void 0 : LW.name) && void 0 !== EW ? EW : null,
            renderRow: hW("away")
          })]
        }), SW.banned.length > 0 && (0, oW.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, oW.jsx)(jW.b, {
            label: wW("lobbyManage:banned"),
            meta: SW.banned.length
          }), (0, oW.jsx)(eW, {
            names: SW.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: wW("lobbyManage:allCount", {
              count: SW.banned.length
            }),
            reveal: null !== (NW = null === LW || void 0 === LW ? void 0 : LW.name) && void 0 !== NW ? NW : null,
            renderRow: hW("banned")
          })]
        })]
      })
    }
    var fW = OW(5318),
      CW = OW(1736),
      XW = OW(37932),
      BW = OW(37948),
      qW = OW(37945),
      RW = OW(37936),
      GW = OW(37960),
      IW = OW(37956),
      aW = OW(37958);

    function rW(WW) {
      const iW = new Set;
      for (const OW of WW) iW.add(OW.toLowerCase());
      return iW
    }

    function zW(WW) {
      var iW, OW;
      let {
        state: EW,
        lobbyName: NW,
        listed: PW,
        isListed: LW,
        Hk: cW,
        mY: wW,
        statusOf: tW
      } = WW;
      const {
        t: ZW,
        selectedLanguage: xW
      } = (0, lW.B)(), AW = (0, CW.l)(), bW = (0, sW.g)("players"), UW = null === bW.localId ? null : null !== (iW = null === (OW = bW.byId[bW.localId]) || void 0 === OW ? void 0 : OW.name) && void 0 !== iW ? iW : null, kW = (0, mW.useMemo)((() => (0, RW.g)(AW.friends, NW, EW.here.map((WW => WW.name)))), [AW.friends, NW, EW.here]), MW = new Map(kW.map((WW => [WW.friend.name.toLowerCase(), WW]))), KW = function(WW) {
        let {
          refused: iW,
          listed: OW,
          here: mW,
          friends: EW,
          excluded: NW
        } = WW;
        const PW = rW(NW),
          LW = WW => WW.filter((WW => {
            const iW = WW.toLowerCase();
            return !PW.has(iW) && (PW.add(iW), !0)
          }));
        return {
          added: [],
          refused: LW(iW),
          listed: LW(OW),
          suggested: LW([...mW, ...EW])
        }
      }({
        refused: EW.refused.map((WW => WW.name)),
        listed: PW,
        here: EW.here.map((WW => WW.name)),
        friends: kW.flatMap((WW => "here" === WW.place ? [] : [WW.friend.name])),
        excluded: [...null === UW ? [] : [UW], ...[...EW.here, ...EW.away].flatMap((WW => "none" === WW.role || (0, RW.h)(PW, WW.name) ? [] : [WW.name]))]
      }), [SW] = (0, mW.useState)(KW), [TW, JW] = (0, mW.useState)([]), hW = function(WW, iW, OW) {
        const mW = rW(OW),
          EW = rW([...OW, ...WW.refused, ...WW.listed, ...WW.suggested]),
          NW = OW => [...WW[OW].filter((WW => !mW.has(WW.toLowerCase()))), ...iW[OW].filter((WW => {
            const iW = WW.toLowerCase();
            return !EW.has(iW) && (EW.add(iW), !0)
          }))];
        return {
          added: [...OW],
          refused: NW("refused"),
          listed: NW("listed"),
          suggested: NW("suggested")
        }
      }(SW, KW, TW), nW = (WW, iW) => {
        var OW, mW;
        const NW = WW.toLowerCase(),
          PW = MW.get(NW),
          wW = EW.here.find((WW => WW.name.toLowerCase() === NW)),
          lW = EW.refused.find((WW => WW.name.toLowerCase() === NW)),
          AW = null !== (OW = null === tW || void 0 === tW ? void 0 : tW(WW)) && void 0 !== OW ? OW : null;
        let bW = null;
        AW ? bW = (0, oW.jsx)(dW, {
          status: AW
        }) : lW ? bW = HW(ZW, xW.code, "lobbyManage:triedToJoinAgo", lW.at, Date.now()) : PW && wW ? bW = ZW("lobbyManage:friendHere") : PW ? bW = "online" === PW.place ? ZW("lobbyManage:friendOnline") : ZW("lobbyManage:friend") : wW && (bW = ZW("lobbyManage:hereStatus"));
        let jW = null !== (mW = null === PW || void 0 === PW ? void 0 : PW.friend) && void 0 !== mW ? mW : (0, yW.k)(WW, null);
        return !PW && null !== wW && void 0 !== wW && wW.id && (jW = (0, YW.c)(wW.id, wW.name).playerSocialPreview), (0, oW.jsx)(IW.d, {
          playerSocialPreview: jW,
          isFriend: void 0 !== PW,
          hideFriendBadge: !0,
          status: bW,
          zIndex: iW,
          hZ: {
            on: LW(WW),
            onChange: iW => {
              cW(WW, iW)
            }
          }
        }, NW)
      }, uW = [...hW.added, ...hW.refused];
      return (0, oW.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, oW.jsx)(jW.b, {
          label: ZW("worldSocial:whitelist"),
          meta: PW.length
        }), (0, oW.jsx)(aW.b, {
          label: ZW("lobbyManage:add"),
          icon: "user-check",
          placeholder: ZW("socialBar:enterPlayerName"),
          onSubmit: async WW => {
            const iW = await wW(WW);
            return iW.ok && JW((iW => [WW, ...iW])), iW
          }
        }), uW.length > 0 && (0, oW.jsx)("div", {
          className: "PlayerRows",
          children: uW.map(((WW, iW) => nW(WW, uW.length - iW)))
        }), (0, oW.jsx)(eW, {
          names: hW.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: ZW("lobbyManage:allOnWhitelist", {
            count: hW.listed.length
          }),
          renderRow: nW
        }), (0, oW.jsx)(eW, {
          names: hW.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: ZW("lobbyManage:allCount", {
            count: hW.suggested.length
          }),
          renderRow: nW
        })]
      })
    }

    function FW(WW) {
      let {
        manage: iW,
        listing: OW
      } = WW;
      const {
        t: mW
      } = (0, lW.B)(), NW = (WW, OW) => ((0, EW.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: WW
      }), iW.send({
        type: "setListing",
        field: WW,
        value: OW
      }, `listing:${WW}`)), PW = WW => {
        const OW = iW.statusOf(`listing:${WW}`);
        return OW && !OW.ok && (0, oW.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, oW.jsx)(dW, {
            status: OW
          })
        })
      };
      return (0, oW.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, oW.jsx)(jW.b, {
          label: mW("lobbyManage:inWorldsList")
        }), (0, oW.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, oW.jsx)("div", {
            className: "SliderText",
            children: mW("lobbyManage:description")
          }), (0, oW.jsx)(vW, {
            value: OW.description,
            ariaLabel: mW("lobbyManage:description"),
            wide: !0,
            onSave: WW => NW("description", WW)
          })]
        }), PW("description"), (0, oW.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, oW.jsx)("div", {
            className: "SliderText",
            children: mW("lobbyManage:emojis")
          }), (0, oW.jsx)(vW, {
            value: OW.emojis,
            ariaLabel: mW("lobbyManage:emojis"),
            onSave: WW => NW("emojis", WW)
          })]
        }), PW("emojis"), (0, oW.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, oW.jsx)("div", {
            className: "SliderText",
            children: mW("lobbyManage:colour")
          }), (0, oW.jsx)(QW, {
            value: OW.colour,
            ariaLabel: mW("lobbyManage:colour"),
            onSave: WW => {
              NW("colour", WW)
            }
          })]
        }), PW("colour")]
      })
    }

    function QW(WW) {
      let {
        value: iW,
        ariaLabel: OW,
        onSave: EW
      } = WW;
      const NW = (0, mW.useRef)(null),
        PW = (0, mW.useRef)({
          value: iW,
          onSave: EW
        });
      PW.current = {
        value: iW,
        onSave: EW
      };
      const LW = (0, mW.useRef)(null),
        cW = (0, mW.useRef)(!1),
        wW = WW => {
          cW.current && WW.value !== PW.current.value && WW.value !== LW.current && (LW.current = WW.value, PW.current.onSave(WW.value))
        };
      return (0, mW.useEffect)((() => {
        NW.current && document.activeElement !== NW.current && (NW.current.value = iW)
      }), [iW]), (0, mW.useEffect)((() => {
        const WW = NW.current,
          iW = () => {
            wW(WW)
          };
        return WW.addEventListener("change", iW), () => {
          WW.removeEventListener("change", iW), wW(WW)
        }
      }), []), (0, oW.jsx)("input", {
        ref: NW,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: iW,
        "aria-label": OW,
        onInput: () => {
          cW.current = !0
        },
        onBlur: WW => {
          wW(WW.currentTarget)
        }
      })
    }

    function Wi(WW) {
      let {
        manage: iW
      } = WW;
      const {
        lobbyName: OW,
        shownLobbyName: mW
      } = (0, sW.g)("connectedGame");
      return iW.state.you.canSetVisibility && null !== OW ? (0, oW.jsx)(Oi, {
        manage: iW,
        lobbyName: OW,
        worldCode: null !== mW && void 0 !== mW ? mW : OW
      }, OW) : (0, oW.jsx)(mi, {
        manage: iW,
        lobbyName: null !== OW && void 0 !== OW ? OW : ""
      })
    }

    function ii(WW) {
      return WW.map((WW => WW.toLowerCase())).sort().join(",")
    }

    function Oi(WW) {
      var iW;
      let {
        manage: OW,
        lobbyName: NW,
        worldCode: PW
      } = WW;
      const {
        t: LW
      } = (0, lW.B)(), {
        settings: cW,
        loading: wW,
        change: tW,
        retry: ZW,
        refresh: xW
      } = (0, XW.j)(NW), AW = (0, CW.l)(), {
        state: UW
      } = OW, kW = (0, mW.useRef)(cW);
      kW.current = cW;
      const sW = ii(null !== (iW = UW.whitelist) && void 0 !== iW ? iW : []),
        KW = null !== UW.whitelist;
      (0, mW.useEffect)((() => {
        const WW = kW.current;
        null !== WW && (WW.visibility !== UW.visibility || KW && ii(WW.whitelist) !== sW) && xW()
      }), [UW.visibility, sW, KW, xW]);
      const SW = async (WW, iW) => {
        let OW = null;
        return await tW(WW, iW, {
          quiet: !0,
          onAnswer: WW => {
            OW = WW
          }
        }), OW
      }, YW = (WW, iW) => {
        null !== iW && "error" in iW && OW.showStatus(WW, {
          ok: !1,
          text: [LW(iW.error)]
        })
      }, yW = async WW => {
        if (null === cW || WW === cW.visibility) return;
        (0, EW.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: WW
        });
        const iW = "whitelist" === WW ? (0, RW.f)((0, RW.g)(AW.friends, NW, UW.here.map((WW => WW.name))), (0, GW.d)(NW), cW.whitelist) : [],
          OW = await SW({
            setVisibility: WW
          }, (iW => ({
            ...iW,
            visibility: WW
          })));
        YW("mode", OW), null === OW || "error" in OW || await (async WW => {
          for (const iW of (0, RW.k)(WW, fW.I))
            if (!await tW({
                whitelistAdd: iW
              }, (WW => (0, RW.s)(WW, iW, !0)))) return !1;
          return !0
        })(iW)
      }, TW = (0, mW.useMemo)((() => {
        var WW;
        if (null === cW) return [];
        const iW = null !== (WW = UW.whitelist) && void 0 !== WW ? WW : [];
        return [...iW.filter((WW => (0, RW.h)(cW.whitelist, WW))), ...cW.whitelist.filter((WW => !(0, RW.h)(iW, WW)))]
      }), [cW, UW.whitelist]), JW = OW.statusOf("mode");
      return (0, oW.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, oW.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, oW.jsx)(jW.b, {
            label: LW("worldSocial:whoCanJoin")
          }), null === cW && wW && (0, oW.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, oW.jsx)(bW.d, {})
          }), null === cW && !wW && (0, oW.jsx)(MW.h, {
            className: "SmallTextLight",
            onClick: ZW,
            children: LW("worldSocial:loadFailed")
          }), null !== cW && (0, oW.jsx)(BW.b, {
            visibility: cW.visibility,
            onPick: WW => {
              yW(WW)
            }
          }), JW && (0, oW.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, oW.jsx)(dW, {
              status: JW
            })
          }), null !== cW && "private" !== cW.visibility && (0, oW.jsx)(qW.c, {
            worldCode: PW,
            message: null
          })]
        }), "whitelist" === (null === cW || void 0 === cW ? void 0 : cW.visibility) && (0, oW.jsx)(zW, {
          state: UW,
          lobbyName: NW,
          listed: TW,
          isListed: WW => (0, RW.h)(cW.whitelist, WW),
          Hk: (WW, iW) => {
            (0, EW.reportAnalyticsClick)(iW ? {
              id: "lobby_manage.whitelist_add",
              value: "hZ"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), SW(iW ? {
              whitelistAdd: [WW]
            } : {
              whitelistRemove: WW
            }, (OW => (0, RW.s)(OW, [WW], iW))).then((iW => {
              YW(`whitelist:${WW.toLowerCase()}`, iW)
            }))
          },
          mY: async WW => {
            (0, EW.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const iW = await SW({
              whitelistAdd: [WW]
            }, (iW => (0, RW.s)(iW, [WW], !0)));
            return null === iW ? {
              ok: !1,
              error: LW("worldSocial:changeFailed")
            } : "error" in iW ? {
              ok: !1,
              error: LW(iW.error)
            } : (0, RW.h)(iW.notFound, WW) ? {
              ok: !1,
              error: LW("lobbyManage:noPlayerCalled", {
                playerName: WW
              })
            } : {
              ok: !0
            }
          },
          statusOf: WW => OW.statusOf(`whitelist:${WW.toLowerCase()}`)
        }), "public" === (null === cW || void 0 === cW ? void 0 : cW.visibility) && null !== UW.listing && (0, oW.jsx)(FW, {
          manage: OW,
          listing: UW.listing
        })]
      })
    }

    function mi(WW) {
      var iW;
      let {
        manage: OW,
        lobbyName: mW
      } = WW;
      const {
        t: NW
      } = (0, lW.B)(), {
        state: PW
      } = OW, LW = tW(), cW = null !== (iW = PW.whitelist) && void 0 !== iW ? iW : [];
      return (0, oW.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, oW.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, oW.jsx)(jW.b, {
            label: NW("worldSocial:whoCanJoin")
          }), (0, oW.jsx)("div", {
            className: "LobbyManageModeText",
            children: NW(`worldSocial:${PW.visibility}`)
          })]
        }), "whitelist" === PW.visibility && PW.you.canEditWhitelist && (0, oW.jsx)(zW, {
          state: PW,
          lobbyName: mW,
          listed: cW,
          isListed: WW => {
            var iW;
            return null !== (iW = LW.get(WW.toLowerCase())) && void 0 !== iW ? iW : (0, RW.h)(cW, WW)
          },
          Hk: (WW, iW) => {
            (0, EW.reportAnalyticsClick)(iW ? {
              id: "lobby_manage.whitelist_add",
              value: "hZ"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const mW = WW.toLowerCase();
            LW.hold(mW, iW, OW.send(iW ? {
              type: "whitelistAdd",
              names: [WW]
            } : {
              type: "whitelistRemove",
              name: WW
            }, `whitelist:${mW}`))
          },
          mY: async WW => {
            (0, EW.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const iW = await OW.send({
              type: "whitelistAdd",
              names: [WW]
            }, "whitelist-field");
            return iW.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, oW.jsx)(nW.d, {
                text: iW.message
              })
            }
          },
          statusOf: WW => OW.statusOf(`whitelist:${WW.toLowerCase()}`)
        }), "public" === PW.visibility && null !== PW.listing && (0, oW.jsx)(FW, {
          manage: OW,
          listing: PW.listing
        })]
      })
    }
    var Ei = OW(5910),
      Ni = OW(1434);
    const Pi = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const Li = (0, mW.memo)((function(WW) {
      var iW;
      let {
        rule: OW,
        value: mW,
        status: EW,
        pending: NW,
        hiddenNames: PW,
        eT: LW,
        onAction: cW
      } = WW;
      const {
        t: wW
      } = (0, lW.B)(), tW = WW => LW(OW, WW), ZW = (WW, iW) => {
        cW(OW, WW, iW)
      }, xW = hW(wW, OW.label, PW), AW = OW.info ? hW(wW, OW.info, PW) : void 0, bW = OW.placeholder ? hW(wW, OW.placeholder, PW) : void 0, jW = (null !== (iW = OW.options) && void 0 !== iW ? iW : []).map((WW => ({
        value: WW.value,
        label: hW(wW, WW.label, PW)
      }))), UW = Math.max(0, ...jW.map((WW => function(WW) {
        let iW = 0;
        for (const OW of WW) iW += Pi.test(OW) ? 2 : 1;
        return iW
      }(WW.label)))), kW = EW && (0, oW.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, oW.jsx)(dW, {
          status: EW
        })
      }), sW = (0, oW.jsxs)("div", {
        className: "SliderText",
        children: [xW, void 0 !== AW && (0, oW.jsx)(Ni.d, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: AW
        })]
      });
      return "toggle" === OW.kind ? (0, oW.jsxs)(oW.Fragment, {
        children: [(0, oW.jsx)(Ei.e, {
          label: xW,
          checked: !0 === mW,
          circleInfoText: AW,
          disabled: NW,
          onClick: tW
        }), kW]
      }) : "choice" === OW.kind && jW.length <= 3 ? (0, oW.jsxs)(oW.Fragment, {
        children: [(0, oW.jsx)(Ei.h, {
          label: xW,
          options: jW,
          value: String(mW),
          circleInfoText: AW,
          onChange: tW
        }), kW]
      }) : (0, oW.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [sW, "choice" === OW.kind && (0, oW.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": UW
          },
          children: (0, oW.jsx)(TW.e, {
            options: jW,
            value: String(mW),
            disabled: NW,
            revealOnOpen: !0,
            onChange: WW => {
              tW(WW.value)
            }
          })
        }), ("number" === OW.kind || "text" === OW.kind) && (0, oW.jsx)(vW, {
          value: null === mW ? "" : String(mW),
          placeholder: bW,
          ariaLabel: xW,
          onSave: WW => {
            const iW = WW.trim(),
              mW = Number(iW);
            return tW("number" === OW.kind && "" !== iW && Number.isFinite(mW) ? mW : iW)
          }
        }), "action" === OW.kind && (0, oW.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [jW.length > 3 && (0, oW.jsx)(TW.e, {
            options: jW,
            value: {
              value: "",
              label: null !== bW && void 0 !== bW ? bW : xW
            },
            disabled: NW,
            revealOnOpen: !0,
            onChange: WW => {
              ZW(WW.value)
            }
          }), jW.length > 0 && jW.length <= 3 && jW.map((WW => (0, oW.jsx)(MW.h, {
            className: "SmallTextLight",
            disabled: NW,
            onClick: () => {
              ZW(WW.value)
            },
            children: WW.label
          }, WW.value))), 0 === jW.length && (0, oW.jsx)(MW.h, {
            className: "SmallTextLight",
            disabled: NW,
            onClick: () => {
              ZW()
            },
            children: null !== bW && void 0 !== bW ? bW : xW
          })]
        }), "names" === OW.kind && (0, oW.jsx)(ci, {
          names: Array.isArray(mW) ? mW : [],
          pending: NW,
          onAction: ZW
        }), kW]
      })
    }));

    function ci(WW) {
      let {
        names: iW,
        pending: OW,
        onAction: EW
      } = WW;
      const {
        t: NW
      } = (0, lW.B)(), PW = (0, mW.useRef)(null), [LW, cW] = (0, mW.useState)(""), wW = () => {
        const WW = LW.trim();
        "" !== WW && (EW(WW, "add"), PW.current && (PW.current.value = ""), cW(""))
      };
      return (0, oW.jsxs)("div", {
        className: "LobbyManageNames",
        children: [iW.map((WW => (0, oW.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, oW.jsx)("span", {
            className: "LobbyManageNameText",
            children: WW
          }), (0, oW.jsx)(MW.h, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: NW("lobbyManage:removeName", {
              name: WW
            }),
            disabled: OW,
            onClick: () => {
              EW(WW, "remove")
            },
            children: (0, oW.jsx)(AW.c, {
              name: "xmark"
            })
          })]
        }, WW))), (0, oW.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, oW.jsx)(uW.b, {
            domRef: PW,
            placeholderText: NW("lobbyManage:namePlaceholder"),
            ariaLabel: NW("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: WW => {
              cW(WW)
            },
            onEnter: wW
          }), (0, oW.jsx)(MW.h, {
            className: "SmallTextLight",
            disabled: OW || "" === LW.trim(),
            onClick: wW,
            children: NW("lobbyManage:addHere")
          })]
        })]
      })
    }
    const wi = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function ti(WW, iW) {
      return wi.map((OW => {
        let {
          group: mW,
          title: EW
        } = OW;
        const NW = WW.filter((WW => WW.group === mW && void 0 === WW.parent)).map((OW => {
          const mW = !0 === iW(OW) ? WW.filter((WW => WW.parent === OW.key)) : [];
          return {
            rule: OW,
            children: mW
          }
        }));
        return {
          group: mW,
          title: EW,
          items: NW
        }
      }))
    }

    function Zi(WW) {
      return WW.flatMap((WW => {
        let {
          items: iW
        } = WW;
        return iW.flatMap((WW => {
          let {
            rule: iW,
            children: OW
          } = WW;
          return [iW, ...OW]
        }))
      }))
    }

    function xi(WW) {
      let {
        manage: iW,
        rowsShown: OW
      } = WW;
      const {
        t: NW
      } = (0, lW.B)(), PW = (0, sW.g)("hiddenPlayerNames"), {
        rules: LW
      } = iW.state, cW = tW(), wW = WW => {
        const iW = cW.get(WW.key);
        return void 0 === iW ? WW.value : iW
      }, ZW = ti(LW, wW), [xW] = (0, mW.useState)((() => Zi(ZW).map((WW => WW.key)))), AW = OW === 1 / 0 ? null : new Set(xW.slice(0, OW)), bW = WW => null === AW || AW.has(WW.key), {
        hold: UW
      } = cW, kW = (0, mW.useCallback)(((WW, OW) => {
        (0, EW.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: WW.key
        });
        const mW = iW.send({
          type: "setRule",
          key: WW.key,
          value: OW
        }, `rule:${WW.key}`);
        return UW(WW.key, OW, mW), mW
      }), [iW, UW]), MW = (0, mW.useCallback)(((WW, OW, mW) => {
        (0, EW.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: WW.key
        }), iW.send({
          type: "ruleAction",
          key: WW.key,
          ...void 0 === OW ? {} : {
            arg: OW
          },
          ...void 0 === mW ? {} : {
            op: mW
          }
        }, `rule:${WW.key}`, void 0 === mW ? NW("lobbyManage:setJustNow") : void 0)
      }), [iW, NW]), KW = WW => {
        const OW = `rule:${WW.key}`;
        return (0, oW.jsx)(Li, {
          rule: WW,
          value: wW(WW),
          status: iW.statusOf(OW),
          pending: iW.isPending(OW),
          hiddenNames: PW,
          eT: kW,
          onAction: MW
        }, WW.key)
      };
      return (0, oW.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: ZW.map((WW => {
          let {
            group: iW,
            title: OW,
            items: EW
          } = WW;
          const PW = EW.filter((WW => {
            let {
              rule: iW
            } = WW;
            return bW(iW)
          }));
          return 0 === PW.length ? null : (0, oW.jsxs)(mW.Fragment, {
            children: [(0, oW.jsx)(jW.b, {
              label: NW(OW)
            }), PW.map((WW => {
              let {
                rule: iW,
                children: OW
              } = WW;
              return 0 === OW.length ? KW(iW) : (0, oW.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [KW(iW), OW.filter(bW).map(KW)]
              }, iW.key)
            }))]
          }, iW)
        }))
      })
    }
    const li = {
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
      Ai = 5,
      bi = (0, mW.memo)((function(WW) {
        let {
          page: iW,
          manage: OW,
          leaderboard: EW,
          focusRequest: NW,
          onFocused: PW,
          ruleRowsShown: LW
        } = WW;
        return "leaderboard" === iW ? (0, oW.jsx)(mW.Suspense, {
          fallback: (0, oW.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, oW.jsx)(bW.d, {})
          }),
          children: EW
        }) : "joining" === iW ? (0, oW.jsx)(Wi, {
          manage: OW
        }) : "rules" === iW ? (0, oW.jsx)(xi, {
          manage: OW,
          rowsShown: LW
        }) : (0, oW.jsx)(pW, {
          manage: OW,
          focusRequest: NW,
          onFocused: PW
        })
      }));

    function ji(WW) {
      let {
        page: iW
      } = WW;
      const {
        t: OW
      } = (0, lW.B)(), mW = li[iW];
      return (0, oW.jsxs)(oW.Fragment, {
        children: [(0, oW.jsx)(AW.c, {
          name: mW.icon
        }), " ", (0, oW.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: OW(mW.title)
        })]
      })
    }

    function Ui(WW) {
      var iW;
      const {
        t: OW
      } = (0, lW.B)(), {
        pages: NW,
        landing: PW
      } = WW, cW = (0, mW.useRef)(null), wW = (0, mW.useRef)(null), tW = (0, mW.useRef)(null), ZW = (0, mW.useRef)(new Map), [AW, bW] = (0, mW.useState)(null), sW = (0, mW.useRef)(AW), MW = (0, mW.useRef)(0), [KW, SW] = (0, mW.useState)(NW[0]), YW = null !== AW && void 0 !== AW ? AW : NW.includes(KW) ? KW : NW[0], [yW] = (0, mW.useState)(null !== (iW = null === PW || void 0 === PW ? void 0 : PW.page) && void 0 !== iW ? iW : null), TW = null !== yW && NW.includes(yW) ? [yW, ...NW.filter((WW => WW !== yW))] : NW, [JW] = (0, mW.useState)((() => {
        const iW = Zi(ti(WW.manage.state.rules, (WW => WW.value)));
        return Math.max(1, Math.ceil(iW.length / Ai))
      })), hW = TW.flatMap((WW => "rules" === WW ? Array(JW).fill(WW) : [WW])), HW = function(WW, iW) {
        const [OW, EW] = (0, mW.useState)(WW), NW = OW >= iW;
        return NW && OW !== 1 / 0 && EW(1 / 0), (0, mW.useLayoutEffect)((() => {
          if (NW) return;
          let WW = !0;
          return (0, kW.c)().then((() => {
            WW && EW((WW => WW + 1))
          })), () => {
            WW = !1
          }
        }), [OW, NW]), NW ? 1 / 0 : OW
      }(1, hW.length), nW = hW.slice(0, HW), uW = new Set(nW), dW = HW < hW.length, eW = dW ? nW.filter((WW => "rules" === WW)).length * Ai : 1 / 0, vW = (0, mW.useRef)(WW.focusRequest);
      vW.current = WW.focusRequest;
      const gW = WW => {
          sW.current = WW, bW(WW)
        },
        DW = () => {
          var WW, iW;
          cW.current.style.scrollPaddingTop = `${null!==(WW=null===(iW=tW.current)||void 0===iW?void 0:iW.offsetHeight)&&void 0!==WW?WW:0}px`
        },
        VW = WW => {
          const iW = cW.current,
            OW = ZW.current.get(WW);
          if (void 0 === OW) return;
          const mW = document.activeElement,
            EW = vW.current,
            NW = null === EW ? null : OW.querySelector(`[data-lobby-manage-row="${CSS.escape(EW.name)}"]`);
          DW(), mW instanceof HTMLElement && null !== NW && void 0 !== NW && NW.contains(mW) ? mW.scrollIntoView({
            block: "center"
          }) : null === OW.previousElementSibling ? iW.scrollTop = 0 : OW.scrollIntoView({
            block: "start"
          }), MW.current = iW.scrollTop
        },
        pW = WW => {
          (0, EW.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: WW
          }), gW(WW), VW(WW)
        },
        fW = () => {
          var WW, iW;
          const OW = cW.current,
            mW = OW.getBoundingClientRect().top + (null !== (WW = null === (iW = tW.current) || void 0 === iW ? void 0 : iW.offsetHeight) && void 0 !== WW ? WW : 0),
            EW = NW.map((WW => {
              var iW, OW;
              return (null !== (iW = null === (OW = ZW.current.get(WW)) || void 0 === OW ? void 0 : OW.getBoundingClientRect().top) && void 0 !== iW ? iW : 1 / 0) - mW
            })),
            PW = !dW && OW.scrollTop + OW.clientHeight >= OW.scrollHeight - 1;
          SW(NW[(0, LW.g)(EW, PW)])
        },
        CW = () => {
          null !== sW.current && (gW(null), fW())
        };
      (0, mW.useLayoutEffect)((() => {
        null !== PW && NW.includes(PW.page) && pW(PW.page)
      }), [null === PW || void 0 === PW ? void 0 : PW.seq]), (0, mW.useLayoutEffect)((() => {
        null === sW.current || NW.includes(sW.current) || CW()
      }));
      const {
        onFocused: XW
      } = WW, BW = (0, mW.useCallback)((WW => {
        null !== sW.current && VW(sW.current), XW(WW)
      }), [XW]);
      (0, mW.useLayoutEffect)((() => {
        const WW = sW.current;
        null !== WW && (!dW || NW.indexOf(hW[HW - 1]) < NW.indexOf(WW)) && VW(WW)
      }), [HW]), (0, mW.useEffect)((() => {
        const WW = new ResizeObserver((() => {
          null !== sW.current ? VW(sW.current) : DW()
        }));
        return WW.observe(cW.current), WW.observe(wW.current), () => {
          WW.disconnect()
        }
      }), []), (0, mW.useLayoutEffect)((() => {
        const WW = tW.current,
          iW = null === WW || void 0 === WW ? void 0 : WW.querySelector(".SegmentedToggleOptionSelected");
        iW && (WW.scrollLeft = Math.min(iW.offsetLeft, Math.max(WW.scrollLeft, iW.offsetLeft + iW.offsetWidth - WW.clientWidth)))
      }), [YW]);
      return (0, oW.jsxs)("div", {
        ref: cW,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === sW.current ? fW() : Math.abs(cW.current.scrollTop - MW.current) > 1 && CW()
        },
        onClick: WW => {
          var iW;
          null !== (iW = tW.current) && void 0 !== iW && iW.contains(WW.target) || CW()
        },
        onFocus: WW => {
          var iW;
          const OW = null === sW.current ? null : ZW.current.get(sW.current);
          !OW || OW.contains(WW.target) || null !== (iW = tW.current) && void 0 !== iW && iW.contains(WW.target) || CW()
        },
        children: [NW.length > 1 && (0, oW.jsx)("div", {
          ref: tW,
          className: "LobbyManageChips",
          children: (0, oW.jsx)(UW.c, {
            options: NW.map((WW => ({
              value: WW,
              label: (0, oW.jsx)(ji, {
                page: WW
              }),
              ariaLabel: OW(li[WW].title)
            }))),
            value: YW,
            padTabs: "2",
            ariaLabel: OW("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: pW
          })
        }), (0, oW.jsx)("div", {
          ref: wW,
          className: xW()("LobbyManageInner", {
            Staging: dW
          }),
          children: NW.filter((WW => uW.has(WW))).map((iW => {
            const OW = iW === AW;
            return (0, oW.jsxs)("section", {
              ref: WW => {
                WW ? ZW.current.set(iW, WW) : ZW.current.delete(iW)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": OW || void 0,
              children: [NW.length > 1 && (0, oW.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": OW || void 0,
                "data-pad-unavailable": OW || void 0,
                children: (0, oW.jsx)(jW.b, {
                  label: (0, oW.jsx)(ji, {
                    page: iW
                  })
                })
              }), (0, oW.jsx)(bi, {
                page: iW,
                manage: WW.manage,
                leaderboard: WW.leaderboard,
                focusRequest: WW.focusRequest,
                onFocused: BW,
                ruleRowsShown: "rules" === iW ? eW : 1 / 0
              })]
            }, iW)
          }))
        })]
      })
    }

    function ki(WW) {
      return void 0 === (null === WW || void 0 === WW ? void 0 : WW.page) ? null : {
        page: WW.page,
        seq: WW.seq
      }
    }

    function si(WW) {
      let {
        leaderboard: iW
      } = WW;
      const OW = function() {
          const WW = (0, cW.e)("lobbyManage"),
            [iW, OW] = (0, mW.useReducer)((WW => WW + 1), 0),
            [EW] = (0, mW.useState)((() => new wW.e(OW)));
          return (0, mW.useEffect)((() => {
            const WW = EW.nextDeadline();
            if (null === WW) return;
            const iW = setTimeout((() => {
              EW.expire(Date.now()), OW()
            }), Math.max(0, WW - Date.now()));
            return () => {
              clearTimeout(iW)
            }
          })), (0, mW.useMemo)((() => null === WW ? null : {
            state: WW,
            send: (WW, iW, mW) => {
              const NW = EW.send(WW, iW, null !== mW && void 0 !== mW ? mW : null);
              return OW(), NW
            },
            statusOf: WW => EW.statusOf(WW, Date.now()),
            showStatus: (WW, iW) => {
              EW.show(WW, iW)
            },
            isPending: WW => EW.isPending(WW)
          }), [WW, iW, EW])
        }(),
        tW = (0, LW.j)((0, NW.e)()),
        ZW = (0, PW.l)(),
        [xW, lW] = (0, mW.useState)((() => ki(ZW))),
        [AW, bW] = (0, mW.useState)(null);
      return (0, mW.useEffect)((() => {
        null === ZW && (0, EW.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, mW.useEffect)((() => {
        null !== ZW && (lW((WW => (null === WW || void 0 === WW ? void 0 : WW.seq) === ZW.seq ? WW : ki(ZW))), void 0 !== ZW.focusName && "players" === ZW.page ? bW({
          name: ZW.focusName,
          seq: ZW.seq
        }) : (0, PW.j)(ZW.seq))
      }), [null === ZW || void 0 === ZW ? void 0 : ZW.seq]), null === OW ? null : (0, oW.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, oW.jsx)(Ui, {
          pages: (0, LW.f)(OW.state, tW),
          manage: OW,
          leaderboard: iW,
          focusRequest: AW,
          onFocused: PW.j,
          landing: xW
        })
      })
    }
  },
  37824: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => tW,
      f: () => cW
    });
    var mW = OW(1556),
      EW = OW(2061),
      NW = OW(2037);
    const PW = 1e4;
    let LW = 0;

    function cW(WW) {
      const iW = ++LW;
      return new Promise((OW => {
        const LW = iW => {
            cW(), clearTimeout(wW), !1 === (null === iW || void 0 === iW ? void 0 : iW.ok) && (0, mW.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: WW.type
            }), OW(iW)
          },
          cW = EW.d.subscribe("lobbyManage", (WW => {
            const OW = function(WW, iW) {
              var OW;
              return null !== (OW = null === WW || void 0 === WW ? void 0 : WW.results.find((WW => WW.requestId === iW))) && void 0 !== OW ? OW : null
            }(WW, iW);
            null !== OW && LW(OW)
          })),
          wW = setTimeout((() => {
            LW(null)
          }), PW);
        NW.gameBridge.send("lobbyManage", {
          ...WW,
          requestId: iW
        })
      }))
    }
    const wW = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class tW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cW;
        this.onChange = WW, this.sendAction = iW, this.pending = new Map, this.statuses = new Map
      }
      send(WW, iW, OW) {
        var mW;
        return this.statuses.delete(iW), this.pending.set(iW, (null !== (mW = this.pending.get(iW)) && void 0 !== mW ? mW : 0) + 1), this.sendAction(WW).then((WW => {
          var mW;
          const EW = null !== WW && void 0 !== WW ? WW : {
              requestId: -1,
              ok: !1,
              message: wW
            },
            NW = (null !== (mW = this.pending.get(iW)) && void 0 !== mW ? mW : 1) - 1;
          NW > 0 ? this.pending.set(iW, NW) : this.pending.delete(iW);
          const PW = !EW.ok || EW.message.length > 0 ? EW.message : null === OW ? null : [OW];
          return null !== PW && this.statuses.set(iW, {
            ok: EW.ok,
            text: PW,
            until: Date.now() + 4e3
          }), this.onChange(), EW
        }))
      }
      show(WW, iW) {
        this.statuses.set(WW, {
          ...iW,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(WW) {
        for (const [iW, OW] of this.statuses) OW.until <= WW && this.statuses.delete(iW)
      }
      nextDeadline() {
        let WW = null;
        for (const OW of this.statuses.values()) {
          var iW;
          WW = Math.min(null !== (iW = WW) && void 0 !== iW ? iW : 1 / 0, OW.until)
        }
        return WW
      }
      statusOf(WW, iW) {
        const OW = this.statuses.get(WW);
        return !OW || OW.until <= iW ? null : {
          ok: OW.ok,
          text: OW.text
        }
      }
      isPending(WW) {
        return this.pending.has(WW)
      }
    }
  },
  37829: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW,
      h: () => ZW,
      i: () => tW,
      j: () => wW,
      k: () => PW,
      n: () => mW,
      o: () => NW
    });
    const mW = 2;

    function EW(WW, iW, OW) {
      const mW = WW.filter((WW => WW.name !== iW)),
        EW = mW.filter((WW => "none" === WW.role)).sort(((WW, iW) => iW.at - WW.at)),
        NW = mW.filter((WW => "none" !== WW.role)).sort(((WW, iW) => OW.indexOf(WW.role) - OW.indexOf(iW.role) || iW.at - WW.at));
      return [...WW.some((WW => WW.name === iW)) && null !== iW ? [iW] : [], ...[...EW, ...NW].map((WW => WW.name))]
    }

    function NW(WW, iW) {
      const OW = WW.banned.map((WW => WW.name)),
        mW = new Set(OW);
      return {
        here: EW(WW.here, iW, WW.roles.map((WW => WW.role))),
        away: WW.away.filter((WW => !mW.has(WW.name))).map((WW => WW.name)),
        banned: OW
      }
    }

    function PW(WW, iW, OW) {
      const mW = new Set([...WW.here, ...WW.away, ...WW.banned]),
        EW = NW(iW, OW),
        PW = iW => {
          const OW = EW[iW].filter((WW => !mW.has(WW)));
          for (const WW of OW) mW.add(WW);
          return [...WW[iW], ...OW]
        };
      return {
        here: PW("here"),
        away: PW("away"),
        banned: PW("banned")
      }
    }

    function LW(WW, iW) {
      const OW = WW.here.find((WW => WW.name === iW));
      if (OW) return {
        section: "here",
        player: OW
      };
      const mW = WW.banned.find((WW => WW.name === iW));
      if (mW) return {
        section: "banned",
        bannedAt: mW.at
      };
      const EW = WW.away.find((WW => WW.name === iW));
      return EW ? {
        section: "away",
        player: EW
      } : {
        section: "gone"
      }
    }
    const cW = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };

    function wW(WW) {
      const iW = WW.can.roles.filter((iW => "none" !== iW || "none" !== WW.role));
      return iW.some((iW => iW !== WW.role)) ? iW : []
    }

    function tW(WW, iW) {
      if ("banned" === WW.section) return {
        ...cW,
        unban: !0
      };
      if ("gone" === WW.section) return cW;
      const {
        player: OW
      } = WW, mW = "here" === WW.section, EW = wW(OW), NW = mW && iW && null !== OW.gamemode && OW.can.gamemode;
      return {
        gamemode: NW,
        roles: EW,
        fixedRole: 0 !== EW.length || "none" === OW.role && !NW ? null : OW.role,
        kick: mW && OW.can.kick,
        ban: OW.can.ban,
        unban: !1
      }
    }

    function ZW(WW, iW) {
      return WW.here.filter((WW => WW.name !== iW && "none" === WW.role && WW.can.kick)).length
    }
  },
  37958: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => ZW
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(1782),
      LW = OW(1532),
      cW = OW(1383),
      wW = OW(1391),
      tW = OW(1283);

    function ZW(WW) {
      let {
        label: iW,
        icon: OW,
        placeholder: EW,
        onSubmit: ZW
      } = WW;
      const xW = (0, mW.useRef)(null),
        [lW, AW] = (0, mW.useState)(""),
        [bW, jW] = (0, mW.useState)("Enter"),
        [UW, kW] = (0, mW.useState)(null);
      (0, mW.useEffect)((() => {
        if ("Success" !== bW && "Error" !== bW) return;
        const WW = setTimeout((() => {
          "Success" === bW && xW.current && (xW.current.value = "", AW("")), jW("Enter")
        }), "Success" === bW ? 1e3 : 4e3);
        return () => {
          clearTimeout(WW)
        }
      }), [bW]);
      const sW = () => {
        const WW = lW.trim();
        "" !== WW && "Enter" === bW && (jW("Loading"), ZW(WW).then((WW => {
          xW.current && ("error" in WW ? null === WW.error ? jW("Enter") : (kW(WW.error), jW("Error")) : jW("Success"))
        })))
      };
      return (0, tW.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: WW => {
          WW.target === xW.current && "Escape" !== WW.key && WW.stopPropagation()
        },
        children: [(0, tW.jsxs)("div", {
          className: NW()("AddFriendBodyOverlay", `AddFriendBodyOverlay${bW}`),
          children: ["Loading" === bW && (0, tW.jsx)(cW.d, {}), "Success" === bW && (0, tW.jsx)(wW.c, {
            name: "check"
          }), "Error" === bW && UW]
        }), (0, tW.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, tW.jsx)(PW.b, {
            className: "PlayerSearchInput",
            domRef: xW,
            maxLength: 32,
            placeholderText: EW,
            ariaLabel: EW,
            stopPropagation: !1,
            onValueChange: WW => {
              AW(WW)
            },
            onEnter: sW
          }), (0, tW.jsxs)(LW.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== bW || "" === lW.trim(),
            onClick: sW,
            children: [(0, tW.jsx)(wW.c, {
              name: OW
            }), " ", iW]
          })]
        })]
      })
    }
  },
  37948: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => ZW
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(1172),
      LW = OW(1391),
      cW = OW(1283);
    const wW = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      tW = ["unlisted", "public", "whitelist", "private"];

    function ZW(WW) {
      let {
        visibility: iW,
        onPick: OW
      } = WW;
      const {
        t: EW
      } = (0, PW.B)(), ZW = (0, mW.useRef)([]);
      return (0, cW.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": EW("worldSocial:whoCanJoin"),
        children: tW.map(((WW, mW) => {
          const PW = WW === iW;
          return (0, cW.jsxs)("button", {
            ref: WW => {
              ZW.current[mW] = WW
            },
            type: "button",
            className: NW()("WorldSocialTile", {
              WorldSocialTileSelected: PW
            }),
            "aria-pressed": PW,
            tabIndex: PW ? 0 : -1,
            onKeyDown: WW => {
              ((WW, iW) => {
                const OW = "ArrowRight" === WW.key || "ArrowDown" === WW.key ? 1 : "ArrowLeft" === WW.key || "ArrowUp" === WW.key ? -1 : 0;
                var mW;
                0 !== OW && (WW.preventDefault(), null === (mW = ZW.current[(iW + OW + tW.length) % tW.length]) || void 0 === mW || mW.focus())
              })(WW, mW)
            },
            onClick: () => {
              OW(WW)
            },
            children: [(0, cW.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, cW.jsx)(LW.c, {
                name: wW[WW]
              })
            }), (0, cW.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, cW.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: EW(`worldSocial:${WW}`)
              }), (0, cW.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: EW(`worldSocial:${WW}Description`)
              })]
            })]
          }, WW)
        }))
      })
    }
  },
  37956: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW
    });
    var mW = OW(1172),
      EW = OW(3661),
      NW = OW(5041),
      PW = OW(1283);

    function LW(WW) {
      let {
        hZ: iW,
        children: OW,
        ...LW
      } = WW;
      const {
        t: cW
      } = (0, mW.B)();
      return (0, PW.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          iW.onChange(!iW.on)
        },
        children: (0, PW.jsx)(EW.h, {
          ...LW,
          opensProfileCard: !1,
          children: (0, PW.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: WW => {
              WW.stopPropagation()
            },
            children: [OW, (0, PW.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, PW.jsx)(NW.e, {
                checked: iW.on,
                disabled: !1,
                ariaLabel: cW("worldSocial:letJoin", {
                  playerName: LW.playerSocialPreview.name
                }),
                onChange: WW => {
                  iW.onChange(WW.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37945: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => AW
    });
    var mW = OW(62),
      EW = OW(1172),
      NW = OW(1977),
      PW = OW(100),
      LW = OW(25),
      cW = OW(1556),
      wW = OW(3687),
      tW = OW(35121),
      ZW = OW(1532),
      xW = OW(1391),
      lW = OW(1283);

    function AW(WW) {
      let {
        worldCode: iW,
        message: OW
      } = WW;
      const {
        t: AW
      } = (0, EW.B)(), {
        isTouchScreen: bW
      } = (0, LW.p)(["isTouchScreen"]), jW = PW.featureFlags.canUseInviteLinks, UW = (0, tW.l)(jW && null === OW), [kW, sW] = (0, wW.j)(), MW = (0, mW.useRef)(null);
      if (null !== OW) return (0, lW.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, lW.jsx)(xW.c, {
          name: "lock"
        }), (0, lW.jsx)("span", {
          children: OW
        })]
      });
      const KW = jW ? UW : iW,
        SW = bW && jW && (0, wW.e)();
      return (0, lW.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!jW && (0, lW.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: AW("worldSocial:worldCode")
        }), (0, lW.jsx)("input", {
          ref: MW,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== KW && void 0 !== KW ? KW : "",
          "aria-label": AW(jW ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: WW => {
            WW.currentTarget.select()
          }
        }), (0, lW.jsxs)(ZW.f, {
          className: "WorldSocialCopy",
          disabled: null === KW,
          onClick: () => {
            null !== KW && (0, wW.g)(KW, {
              useShareSheet: SW,
              onOutcome: WW => {
                if ((0, cW.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== WW || jW ? WW : "code"
                  }), "copied" === WW) sW();
                else if ("failed" === WW) {
                  var iW;
                  null === (iW = MW.current) || void 0 === iW || iW.focus(), NW.g.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, lW.jsx)(xW.c, {
            name: kW ? "check" : SW ? "up-from-bracket" : "copy"
          }), " ", AW(kW ? "general:copied" : SW ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37953: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => lW,
      g: () => xW,
      k: () => ZW
    });
    var mW = OW(625),
      EW = OW(1172),
      NW = OW(1736),
      PW = OW(3661),
      LW = OW(3610),
      cW = OW(1532),
      wW = OW(37956),
      tW = OW(1283);

    function ZW(WW, iW) {
      var OW;
      return {
        isError: !1,
        name: WW,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== iW && void 0 !== iW ? iW : {},
        nameColour: null !== (OW = null === iW || void 0 === iW ? void 0 : iW.nameColour) && void 0 !== OW ? OW : mW.d,
        location: {
          status: "offline"
        }
      }
    }

    function xW(WW) {
      let {
        player: iW,
        isFriend: OW = !1,
        status: mW,
        showLocation: cW = void 0 === mW,
        hZ: ZW,
        onSendFriendRequest: xW,
        actions: lW,
        zIndex: AW
      } = WW;
      const {
        t: bW
      } = (0, EW.B)();
      let jW = mW;
      null !== ZW && void 0 !== ZW && ZW.on && (jW = (0, tW.jsxs)(tW.Fragment, {
        children: [null !== mW && void 0 !== mW ? mW : (0, tW.jsx)(LW.d, {
          socialPreview: iW
        }), (0, tW.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", bW("worldSocial:canJoin")]
        })]
      }));
      const UW = {
        playerSocialPreview: iW,
        isFriend: OW,
        hideFriendBadge: !0,
        onFriendRemoved: OW ? WW => {
          NW.e.removeFriendFromState(WW)
        } : void 0,
        status: jW,
        showLocation: cW,
        onSendFriendRequest: xW,
        zIndex: AW
      };
      return ZW ? (0, tW.jsx)(wW.d, {
        ...UW,
        hZ: ZW,
        children: lW
      }) : (0, tW.jsx)(PW.h, {
        ...UW,
        opensProfileCard: !1,
        children: lW || void 0
      })
    }

    function lW(WW) {
      let {
        row: iW,
        hZ: OW,
        canInvite: mW,
        invited: NW,
        onInvite: PW,
        zIndex: LW
      } = WW;
      const {
        t: wW
      } = (0, EW.B)(), ZW = "online" === iW.place ? cW.f : cW.h;
      return (0, tW.jsx)(xW, {
        player: iW.friend,
        isFriend: !0,
        status: "here" === iW.place ? wW("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        hZ: OW,
        zIndex: LW,
        actions: mW && (0, tW.jsx)(ZW, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: NW,
          onClick: PW,
          ariaLabel: `${wW("worldSocial:invite")} ${iW.friend.name}`,
          children: wW(NW ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37932: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => cW,
      g: () => PW,
      j: () => wW
    });
    var mW = OW(62),
      EW = OW(5282),
      NW = OW(1977);

    function PW(WW) {
      const iW = {
        lobbyName: WW,
        answer: null,
        response: EW.b.getSocialSettings(WW)
      };
      return iW.response.then((WW => {
        iW.answer = WW
      })), iW
    }
    const LW = new Map;

    function cW(WW) {
      LW.set(WW.lobbyName, WW)
    }

    function wW(WW) {
      const [iW] = (0, mW.useState)((() => function(WW) {
        var iW;
        const OW = null !== (iW = LW.get(WW)) && void 0 !== iW ? iW : null;
        return null !== OW && void 0 !== OW && OW.answer && "error" in OW.answer ? null : OW
      }(WW))), [OW, PW] = (0, mW.useState)((() => null !== iW && void 0 !== iW && iW.answer && "settings" in iW.answer ? iW.answer.settings : null)), [cW, wW] = (0, mW.useState)(!0), [tW, ZW] = (0, mW.useState)(null !== OW), xW = (0, mW.useRef)(OW);
      xW.current = OW;
      const lW = (0, mW.useRef)(0),
        AW = (0, mW.useRef)(0),
        bW = (0, mW.useRef)(!1),
        jW = (0, mW.useRef)(!0),
        UW = (0, mW.useCallback)((async iW => {
          const OW = ++lW.current,
            mW = await (null !== iW && void 0 !== iW ? iW : EW.b.getSocialSettings(WW));
          jW.current && OW === lW.current && (ZW(!0), wW(!1), "error" in mW || PW(mW.settings))
        }), [WW]),
        kW = (0, mW.useCallback)((() => {
          wW(!0), UW()
        }), [UW]),
        sW = (0, mW.useCallback)((() => {
          AW.current > 0 ? bW.current = !0 : UW()
        }), [UW]);
      (0, mW.useEffect)((() => (jW.current = !0, LW.delete(WW), wW(!0), UW(null === iW || void 0 === iW ? void 0 : iW.response), () => {
        jW.current = !1
      })), [UW, WW, iW]);
      const MW = WW => {
        lW.current++, wW(!1), xW.current = WW, PW(WW)
      };
      return {
        settings: OW,
        loading: cW,
        answered: tW,
        retry: kW,
        refresh: sW,
        change: async function(iW, OW) {
          let {
            quiet: mW = !1,
            onAnswer: PW
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const LW = xW.current;
          if (null === LW) return !1;
          MW(OW(LW)), AW.current > 0 && (bW.current = !0), AW.current++;
          const cW = await EW.b.setSocialSettings(WW, iW);
          AW.current--;
          const wW = !("error" in cW);
          if (!jW.current) return wW;
          if (null === PW || void 0 === PW || PW(cW), mW);
          else if ("error" in cW) NW.g.showMessage({
            translationKey: cW.error
          });
          else
            for (const WW of cW.notFound) NW.g.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: WW
              }
            });
          if (AW.current > 0) return wW;
          const tW = bW.current;
          return bW.current = !1, !tW && "settings" in cW ? MW(cW.settings) : (tW || MW(LW), UW()), wW
        }
      }
    }
  },
  37960: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW,
      h: () => NW
    });
    var mW = OW(154);
    const EW = new Map;

    function NW(WW, iW) {
      var OW;
      const mW = null !== (OW = EW.get(WW)) && void 0 !== OW ? OW : new Map;
      mW.set(iW, Date.now()), EW.set(WW, mW)
    }

    function PW(WW) {
      const iW = EW.get(WW);
      if (!iW) return [];
      const OW = Date.now();
      for (const [EW, NW] of iW) OW - NW >= mW.q && iW.delete(EW);
      return [...iW.keys()]
    }
  },
  37936: (WW, iW, OW) => {
    function mW(WW, iW) {
      const OW = iW.toLowerCase();
      for (const mW of WW)
        if (mW.toLowerCase() === OW) return !0;
      return !1
    }

    function EW(WW, iW, OW) {
      const EW = [],
        NW = [],
        PW = [];
      for (const LW of WW) !LW.isError && LW.name && ("inGame" === LW.location.status && LW.location.inLobbyName === iW || mW(OW, LW.name) ? NW.push({
        friend: LW,
        place: "here"
      }) : "offline" === LW.location.status ? PW.push({
        friend: LW,
        place: "offline"
      }) : EW.push({
        friend: LW,
        place: "online"
      }));
      return [...EW, ...NW, ...PW]
    }

    function NW(WW, iW, OW) {
      const EW = [],
        NW = WW.flatMap((WW => "here" === WW.place ? [WW.friend.name] : []));
      for (const PW of [...NW, ...iW]) mW(EW, PW) || mW(OW, PW) || EW.push(PW);
      return EW
    }

    function PW(WW, iW) {
      return null === WW || void 0 === WW || !WW.canManage || mW(WW.whitelist, iW) ? "none" : "whitelist" === WW.visibility ? "required" : "quiet"
    }

    function LW(WW) {
      if (null === WW) return !0;
      const {
        visibility: iW
      } = WW;
      return "public" === iW || "unlisted" === iW || "whitelist" === iW && WW.canManage
    }

    function cW(WW, iW, OW) {
      if (OW) {
        const OW = iW.filter((iW => !mW(WW.whitelist, iW)));
        return {
          ...WW,
          whitelist: [...WW.whitelist, ...OW]
        }
      }
      return {
        ...WW,
        whitelist: WW.whitelist.filter((WW => !mW(iW, WW)))
      }
    }

    function wW(WW, iW) {
      const OW = [];
      for (let mW = 0; mW < WW.length; mW += iW) OW.push(WW.slice(mW, mW + iW));
      return OW
    }
    OW.d(iW, {
      c: () => LW,
      f: () => NW,
      g: () => EW,
      h: () => mW,
      k: () => wW,
      o: () => PW,
      s: () => cW
    })
  },
  38169: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW
    });
    var mW = OW(62),
      EW = OW(3332);

    function NW() {
      const WW = (0, EW.e)("lobbyLeaderboardInfo");
      return (0, mW.useMemo)((() => function(WW) {
        if (null === WW) return null;
        const iW = Object.entries(WW),
          OW = iW.filter((WW => {
            let [, iW] = WW;
            return void 0 !== iW
          }));
        if (OW.length === iW.length) return WW;
        const mW = Object.fromEntries(OW),
          EW = Object.keys(WW).filter((WW => !Object.hasOwn(mW, WW)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${EW.join(", ")}`), mW
      }(WW)), [WW])
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);