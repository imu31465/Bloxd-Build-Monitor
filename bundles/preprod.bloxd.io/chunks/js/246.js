export const id = 246;
export const ids = [246];
export const modules = {
  42383: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      LobbyManageView: () => UB
    });
    var AH = LH(45),
      rH = LH(1475),
      SH = LH(37881),
      hH = LH(2642),
      tH = LH(2650),
      zH = LH(2628),
      CH = LH(37439);

    function EH() {
      const [HH, BH] = (0, AH.useState)(new Map);
      return {
        get: BH => HH.get(BH),
        hold: (0, AH.useCallback)(((HH, LH, AH) => {
          BH((BH => new Map(BH).set(HH, LH))), AH.then((() => {
            BH((BH => {
              const LH = new Map(BH);
              return LH.delete(HH), LH
            }))
          }))
        }), [])
      }
    }
    var XH = LH(1038),
      GH = LH.n(XH),
      YH = LH(1123),
      uH = LH(1315),
      QH = LH(1313),
      WH = LH(2895),
      MH = LH(5506),
      xH = LH(3811);
    var vH = LH(2051),
      PH = LH(1455);

    function TH(HH, BH, LH) {
      const AH = HH.filter((HH => HH.name !== BH)),
        rH = AH.filter((HH => "none" === HH.role)).sort(((HH, BH) => BH.at - HH.at)),
        SH = AH.filter((HH => "none" !== HH.role)).sort(((HH, BH) => LH.indexOf(HH.role) - LH.indexOf(BH.role) || BH.at - HH.at));
      return [...HH.some((HH => HH.name === BH)) && null !== BH ? [BH] : [], ...[...rH, ...SH].map((HH => HH.name))]
    }

    function UH(HH, BH) {
      const LH = HH.banned.map((HH => HH.name)),
        AH = new Set(LH);
      return {
        here: TH(HH.here, BH, HH.roles.map((HH => HH.role))),
        away: HH.away.filter((HH => !AH.has(HH.name))).map((HH => HH.name)),
        banned: LH
      }
    }

    function VH(HH, BH) {
      const LH = HH.here.find((HH => HH.name === BH));
      if (LH) return {
        section: "here",
        player: LH
      };
      const AH = HH.banned.find((HH => HH.name === BH));
      if (AH) return {
        section: "banned",
        bannedAt: AH.at
      };
      const rH = HH.away.find((HH => HH.name === BH));
      return rH ? {
        section: "away",
        player: rH
      } : {
        section: "gone"
      }
    }
    const OH = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var bH = LH(2893),
      kH = LH(2999),
      mH = LH(37597),
      oH = LH(3473),
      IH = LH(317);

    function fH(HH, BH, LH) {
      return BH.map((BH => {
        if ("string" === typeof BH) return BH;
        const AH = "str" in BH ? BH.str : BH;
        return "string" === typeof AH ? AH : "entityName" in AH ? AH.entityName : "translationKey" in AH ? HH(AH.translationKey, (0, YH.q)(AH.params, LH)) : ""
      })).join("")
    }

    function lH(HH, BH, LH, AH, rH) {
      return rH - AH < 6e4 ? HH(`${LH}JustNow`) : HH(LH, {
        time: (0, IH._)((0, YH.n)(BH, LH), AH, rH)
      })
    }
    var KH = LH(1967),
      cH = LH(1706),
      eH = LH(1225);

    function qH(HH) {
      let {
        status: BH
      } = HH;
      return (0, eH.jsx)("span", {
        className: GH()("LobbyManageStatus", {
          LobbyManageStatusRefused: !BH.ok
        }),
        children: (0, eH.jsx)(KH.b, {
          text: BH.text
        })
      })
    }

    function gH(HH) {
      let {
        names: BH,
        cap: LH,
        filterFrom: rH,
        moreLabel: SH,
        reveal: hH = null,
        renderRow: tH
      } = HH;
      const {
        t: zH
      } = (0, YH.B)(), [CH, EH] = (0, AH.useState)(!1), [XH, GH] = (0, AH.useState)(""), QH = CH || null !== hH && BH.indexOf(hH) >= LH, MH = (QH || BH.length <= LH) && null !== rH && BH.length > rH, xH = XH.trim().toLowerCase();
      let vH = QH ? BH : BH.slice(0, LH);
      return MH && "" !== xH && (vH = vH.filter((HH => HH.toLowerCase().includes(xH)))), (0, eH.jsxs)(eH.Fragment, {
        children: [MH && (0, eH.jsx)(cH.e, {
          className: "LobbyManageFilter",
          placeholderText: zH("lobbyManage:findName"),
          ariaLabel: zH("lobbyManage:findName"),
          onValueChange: HH => {
            GH(HH)
          }
        }), vH.length > 0 && (0, eH.jsx)("div", {
          className: "PlayerRows",
          children: vH.map(((HH, BH) => tH(HH, vH.length - BH)))
        }), !QH && BH.length > LH && (0, eH.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, eH.jsx)(WH.b, {
            label: (0, eH.jsxs)(eH.Fragment, {
              children: [SH, " ", (0, eH.jsx)(uH.c, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              EH(!0)
            }
          })
        })]
      })
    }

    function NH(HH) {
      let {
        value: BH,
        placeholder: LH,
        ariaLabel: rH,
        maxLength: SH,
        wide: hH = !1,
        onSave: tH
      } = HH;
      const zH = (0, AH.useRef)(null),
        [CH, EH] = (0, AH.useState)(0),
        XH = (0, AH.useRef)(!0),
        YH = (0, AH.useRef)(null),
        uH = (0, AH.useRef)({
          value: BH,
          onSave: tH
        });
      uH.current = {
        value: BH,
        onSave: tH
      };
      const QH = () => {
        const HH = YH.current;
        YH.current = null, null !== HH && HH !== uH.current.value && uH.current.onSave(HH).then((() => {
          XH.current && EH((HH => HH + 1))
        }))
      };
      return (0, AH.useEffect)((() => {
        null === YH.current && zH.current && (zH.current.value = BH)
      }), [BH, CH]), (0, AH.useEffect)((() => () => {
        XH.current = !1, QH()
      }), []), (0, eH.jsx)("div", {
        className: GH()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: hH
        }),
        onBlur: QH,
        children: (0, eH.jsx)(cH.e, {
          domRef: zH,
          defaultValue: BH,
          placeholderText: LH,
          ariaLabel: rH,
          maxLength: SH,
          onValueChange: HH => {
            YH.current = HH
          },
          onEnter: QH
        })
      })
    }
    const RH = ["mod", "coOwner"],
      jH = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function nH(HH) {
      var BH, LH, SH;
      let {
        name: hH,
        place: tH,
        openedIn: zH,
        isYou: CH,
        manage: XH,
        hiddenNames: GH,
        zIndex: QH
      } = HH;
      const {
        t: WH,
        selectedLanguage: MH
      } = (0, YH.B)(), [xH, vH] = (0, AH.useState)(null), {
        state: TH
      } = XH, UH = `player:${hH}`, VH = function(HH, BH) {
        if ("banned" === HH.section) return {
          ...OH,
          unban: !0
        };
        if ("gone" === HH.section) return OH;
        const {
          player: LH
        } = HH, AH = "here" === HH.section, rH = AH || "none" !== LH.role ? LH.can.roles : [], SH = AH && BH && null !== LH.gamemode && LH.can.gamemode;
        return {
          gamemode: SH,
          roles: rH,
          fixedRole: 0 !== rH.length || "none" === LH.role && !SH ? null : LH.role,
          kick: AH && LH.can.kick,
          ban: LH.can.ban,
          unban: !1
        }
      }(tH, null !== TH.gamemodes), IH = XH.statusOf(UH), KH = XH.isPending(UH), cH = EH(), gH = Date.now(), NH = HH => {
        var BH, LH;
        return null !== (BH = null === (LH = (HH => TH.roles.find((BH => BH.role === HH)))(HH)) || void 0 === LH ? void 0 : LH.label) && void 0 !== BH ? BH : HH
      }, nH = HH => {
        const BH = jH[HH];
        return void 0 === BH ? void 0 : WH(BH)
      }, FH = "here" === tH.section || "away" === tH.section ? tH.player : null, DH = "here" === tH.section ? tH.player.id : null, {
        playerSocialPreview: wH,
        isFriend: ZH
      } = null === DH ? {
        playerSocialPreview: (0, mH.k)(hH, null),
        isFriend: !1
      } : (0, kH.g)(DH, hH), dH = function() {
        XH.send(...arguments)
      }, aH = (HH, BH) => {
        cH.hold("role", HH, XH.send({
          type: "setRole",
          name: hH,
          role: HH
        }, UH, BH))
      };
      let sH = null;
      if ("ban" === (null === xH || void 0 === xH ? void 0 : xH.kind)) sH = WH("lobbyManageEntry:banConfirm", {
        playerName: hH
      });
      else if ("role" === (null === xH || void 0 === xH ? void 0 : xH.kind)) {
        var JH;
        sH = `${WH("lobbyManage:roleConfirm",{playerName:hH,role:NH(xH.role)})} ${null!==(JH=nH(xH.role))&&void 0!==JH?JH:""}`
      } else if (IH) sH = (0, eH.jsx)(qH, {
        status: IH
      });
      else if (CH) sH = WH("lobbyManage:you");
      else if ("here" === tH.section) "none" === tH.player.role && gH - tH.player.at < 6e5 && (sH = lH(WH, MH.code, "lobbyManage:joinedAgo", tH.player.at, gH));
      else if ("away" === tH.section) {
        if (tH.player.at > 0) {
          const HH = "kicked" === tH.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          sH = lH(WH, MH.code, HH, tH.player.at, gH)
        }
      } else "banned" === tH.section ? null !== tH.bannedAt && (sH = lH(WH, MH.code, "lobbyManage:bannedAgo", tH.bannedAt, gH)) : "banned" === zH && (sH = WH("lobbyManageEntry:unbanned"));
      return (0, eH.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": hH,
        children: (0, eH.jsxs)(bH.d, {
          playerSocialPreview: wH,
          isFriend: ZH,
          status: sH,
          opensProfileCard: !CH && (0, kH.h)(!0, hH, GH),
          zIndex: QH,
          children: [null !== xH && (0, eH.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === xH.kind && (0, eH.jsxs)(PH.O, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                vH(null), dH({
                  type: "ban",
                  name: hH
                }, UH)
              },
              children: [(0, eH.jsx)(uH.c, {
                name: "gavel"
              }), (0, eH.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: WH("lobbyManageEntry:ban")
              })]
            }), "role" === xH.kind && (0, eH.jsx)(PH.i, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: xH.role
              },
              onClick: () => {
                vH(null), aH(xH.role)
              },
              children: WH("lobbyManage:makeRole", {
                role: NH(xH.role)
              })
            }), (0, eH.jsx)(PH.m, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                vH(null)
              },
              children: WH("general:cancel")
            })]
          }), null === xH && (0, eH.jsxs)(eH.Fragment, {
            children: [(0, eH.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [VH.gamemode && null !== FH && (0, eH.jsx)(oH.b, {
                options: (null !== (BH = TH.gamemodes) && void 0 !== BH ? BH : []).map((HH => ({
                  value: HH.value,
                  label: fH(WH, HH.label, GH)
                }))),
                value: null !== (LH = cH.get("gamemode")) && void 0 !== LH ? LH : FH.gamemode,
                disabled: KH,
                onChange: HH => {
                  (0, rH.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: HH.value
                  }), cH.hold("gamemode", HH.value, XH.send({
                    type: "setGamemode",
                    name: hH,
                    gamemode: HH.value
                  }, UH))
                }
              }), VH.roles.length > 0 && null !== FH && (0, eH.jsx)(oH.b, {
                options: [...TH.roles].reverse().filter((HH => VH.roles.includes(HH.role))).map((HH => ({
                  value: HH.role,
                  label: HH.label
                }))),
                value: null !== (SH = cH.get("role")) && void 0 !== SH ? SH : FH.role,
                disabled: KH,
                onChange: HH => {
                  var BH;
                  (BH = HH.value) !== (null === FH || void 0 === FH ? void 0 : FH.role) && (RH.includes(BH) ? vH({
                    kind: "role",
                    role: BH
                  }) : ((0, rH.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: BH
                  }), aH(BH, nH(BH))))
                }
              }), null !== VH.fixedRole && (0, eH.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: NH(VH.fixedRole)
              })]
            }), (0, eH.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [VH.kick && (0, eH.jsxs)(PH.m, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${WH("lobbyManageEntry:kick")} ${hH}`,
                disabled: KH,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  dH({
                    type: "kick",
                    name: hH
                  }, UH)
                },
                children: [(0, eH.jsx)(uH.c, {
                  name: "person-falling-burst"
                }), (0, eH.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: WH("lobbyManageEntry:kick")
                })]
              }), VH.ban && (0, eH.jsxs)(PH.S, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${WH("lobbyManageEntry:ban")} ${hH}`,
                disabled: KH,
                padDestructive: !0,
                onClick: () => {
                  vH({
                    kind: "ban"
                  })
                },
                children: [(0, eH.jsx)(uH.c, {
                  name: "gavel"
                }), (0, eH.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: WH("lobbyManageEntry:ban")
                })]
              }), VH.unban && (0, eH.jsxs)(PH.m, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${WH("lobbyManageEntry:unban")} ${hH}`,
                disabled: KH,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  dH({
                    type: "unban",
                    name: hH
                  }, UH)
                },
                children: [(0, eH.jsx)(uH.c, {
                  name: "user-unlock"
                }), (0, eH.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: WH("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function FH(HH) {
      var BH, LH, rH, SH;
      let {
        manage: hH,
        focusRequest: tH,
        onFocused: zH
      } = HH;
      const {
        t: CH
      } = (0, YH.B)(), EH = (0, vH.e)("players"), XH = (0, vH.e)("hiddenPlayerNames"), GH = (0, AH.useRef)(null), {
        state: QH
      } = hH, MH = null === EH.localId ? null : null !== (BH = null === (LH = EH.byId[EH.localId]) || void 0 === LH ? void 0 : LH.name) && void 0 !== BH ? BH : null, [xH] = (0, AH.useState)((() => UH(QH, MH))), TH = function(HH, BH, LH) {
        const AH = new Set([...HH.here, ...HH.away, ...HH.banned]),
          rH = UH(BH, LH),
          SH = BH => {
            const LH = rH[BH].filter((HH => !AH.has(HH)));
            for (const HH of LH) AH.add(HH);
            return [...HH[BH], ...LH]
          };
        return {
          here: SH("here"),
          away: SH("away"),
          banned: SH("banned")
        }
      }(xH, QH, MH), [OH, bH] = (0, AH.useState)(!1), kH = function(HH, BH) {
        return HH.here.filter((HH => HH.name !== BH && "none" === HH.role && HH.can.kick)).length
      }(QH, MH), mH = hH.statusOf("kickAll");
      (0, AH.useEffect)((() => {
        var HH, BH;
        if (null === tH) return;
        const LH = null === (HH = GH.current) || void 0 === HH ? void 0 : HH.querySelector(`[data-lobby-manage-row="${CSS.escape(tH.name)}"]`);
        null === LH || void 0 === LH || LH.scrollIntoView({
          block: "center"
        }), null === LH || void 0 === LH || null === (BH = LH.querySelector(".ProfilePreview")) || void 0 === BH || BH.focus({
          preventScroll: !0
        }), zH(tH.seq)
      }), [null === tH || void 0 === tH ? void 0 : tH.seq]);
      const oH = HH => (BH, LH) => (0, eH.jsx)(nH, {
        name: BH,
        place: VH(QH, BH),
        openedIn: HH,
        isYou: BH === MH,
        manage: hH,
        hiddenNames: XH,
        zIndex: LH
      }, BH);
      return (0, eH.jsxs)("div", {
        ref: GH,
        className: "LobbyManagePage",
        children: [TH.here.length > 0 && (0, eH.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, eH.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, eH.jsx)(WH.b, {
              label: CH("lobbyManage:here"),
              meta: QH.here.length
            }), kH >= 2 && !OH && (0, eH.jsxs)(PH.S, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: hH.isPending("kickAll"),
              onClick: () => {
                bH(!0)
              },
              children: [(0, eH.jsx)(uH.c, {
                name: "person-falling-burst"
              }), " ", CH("lobbyManage:kickAll")]
            })]
          }), OH && kH >= 2 && (0, eH.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, eH.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: CH("lobbyManage:kickAllConfirm", {
                count: kH
              })
            }), (0, eH.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, eH.jsx)(PH.O, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  bH(!1), hH.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: CH("lobbyManage:kickAll")
              }), (0, eH.jsx)(PH.m, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  bH(!1)
                },
                children: CH("general:cancel")
              })]
            })]
          }), mH && (0, eH.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, eH.jsx)(qH, {
              status: mH
            })
          }), (0, eH.jsx)(gH, {
            names: TH.here,
            cap: TH.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: oH("here")
          })]
        }), TH.away.length > 0 && (0, eH.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, eH.jsx)(WH.b, {
            label: CH("lobbyManage:notHere"),
            meta: TH.away.length
          }), (0, eH.jsx)(gH, {
            names: TH.away,
            cap: 5,
            filterFrom: null,
            moreLabel: CH("lobbyManage:allCount", {
              count: TH.away.length
            }),
            reveal: null !== (rH = null === tH || void 0 === tH ? void 0 : tH.name) && void 0 !== rH ? rH : null,
            renderRow: oH("away")
          })]
        }), TH.banned.length > 0 && (0, eH.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, eH.jsx)(WH.b, {
            label: CH("lobbyManage:banned"),
            meta: TH.banned.length
          }), (0, eH.jsx)(gH, {
            names: TH.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: CH("lobbyManage:allCount", {
              count: TH.banned.length
            }),
            reveal: null !== (SH = null === tH || void 0 === tH ? void 0 : tH.name) && void 0 !== SH ? SH : null,
            renderRow: oH("banned")
          })]
        })]
      })
    }
    var DH = LH(5037),
      wH = LH(1664),
      ZH = LH(37582),
      dH = LH(37593),
      aH = LH(37591),
      sH = LH(37589),
      JH = LH(37604),
      iH = LH(37599),
      pH = LH(37601);

    function yH(HH) {
      const BH = new Set;
      for (const LH of HH) BH.add(LH.toLowerCase());
      return BH
    }

    function HB(HH) {
      var BH, LH;
      let {
        state: rH,
        lobbyName: SH,
        listed: hH,
        isListed: tH,
        Dv: zH,
        aT: CH,
        statusOf: EH
      } = HH;
      const {
        t: XH,
        selectedLanguage: GH
      } = (0, YH.B)(), uH = (0, wH.l)(), QH = (0, vH.e)("players"), MH = null === QH.localId ? null : null !== (BH = null === (LH = QH.byId[QH.localId]) || void 0 === LH ? void 0 : LH.name) && void 0 !== BH ? BH : null, xH = (0, AH.useMemo)((() => (0, sH.k)(uH.friends, SH, rH.here.map((HH => HH.name)))), [uH.friends, SH, rH.here]), PH = new Map(xH.map((HH => [HH.friend.name.toLowerCase(), HH]))), TH = function(HH) {
        let {
          refused: BH,
          listed: LH,
          here: AH,
          friends: rH,
          excluded: SH
        } = HH;
        const hH = yH(SH),
          tH = HH => HH.filter((HH => {
            const BH = HH.toLowerCase();
            return !hH.has(BH) && (hH.add(BH), !0)
          }));
        return {
          added: [],
          refused: tH(BH),
          listed: tH(LH),
          suggested: tH([...AH, ...rH])
        }
      }({
        refused: rH.refused.map((HH => HH.name)),
        listed: hH,
        here: rH.here.map((HH => HH.name)),
        friends: xH.flatMap((HH => "here" === HH.place ? [] : [HH.friend.name])),
        excluded: [...null === MH ? [] : [MH], ...[...rH.here, ...rH.away].flatMap((HH => "none" === HH.role || (0, sH.l)(hH, HH.name) ? [] : [HH.name]))]
      }), [UH] = (0, AH.useState)(TH), [VH, OH] = (0, AH.useState)([]), bH = function(HH, BH, LH) {
        const AH = yH(LH),
          rH = yH([...LH, ...HH.refused, ...HH.listed, ...HH.suggested]),
          SH = LH => [...HH[LH].filter((HH => !AH.has(HH.toLowerCase()))), ...BH[LH].filter((HH => {
            const BH = HH.toLowerCase();
            return !rH.has(BH) && (rH.add(BH), !0)
          }))];
        return {
          added: [...LH],
          refused: SH("refused"),
          listed: SH("listed"),
          suggested: SH("suggested")
        }
      }(UH, TH, VH), oH = (HH, BH) => {
        var LH, AH;
        const SH = HH.toLowerCase(),
          hH = PH.get(SH),
          CH = rH.here.find((HH => HH.name.toLowerCase() === SH)),
          YH = rH.refused.find((HH => HH.name.toLowerCase() === SH)),
          uH = null !== (LH = null === EH || void 0 === EH ? void 0 : EH(HH)) && void 0 !== LH ? LH : null;
        let QH = null;
        uH ? QH = (0, eH.jsx)(qH, {
          status: uH
        }) : YH ? QH = lH(XH, GH.code, "lobbyManage:triedToJoinAgo", YH.at, Date.now()) : hH && CH ? QH = XH("lobbyManage:friendHere") : hH ? QH = "online" === hH.place ? XH("lobbyManage:friendOnline") : XH("lobbyManage:friend") : CH && (QH = XH("lobbyManage:hereStatus"));
        let WH = null !== (AH = null === hH || void 0 === hH ? void 0 : hH.friend) && void 0 !== AH ? AH : (0, mH.k)(HH, null);
        return !hH && null !== CH && void 0 !== CH && CH.id && (WH = (0, kH.g)(CH.id, CH.name).playerSocialPreview), (0, eH.jsx)(iH.d, {
          playerSocialPreview: WH,
          isFriend: void 0 !== hH,
          hideFriendBadge: !0,
          status: QH,
          zIndex: BH,
          IX: {
            on: tH(HH),
            onChange: BH => {
              zH(HH, BH)
            }
          }
        }, SH)
      }, IH = [...bH.added, ...bH.refused];
      return (0, eH.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, eH.jsx)(WH.b, {
          label: XH("worldSocial:whitelist"),
          meta: hH.length
        }), (0, eH.jsx)(pH.e, {
          label: XH("lobbyManage:add"),
          icon: "user-check",
          placeholder: XH("socialBar:enterPlayerName"),
          onSubmit: async HH => {
            const BH = await CH(HH);
            return BH.ok && OH((BH => [HH, ...BH])), BH
          }
        }), IH.length > 0 && (0, eH.jsx)("div", {
          className: "PlayerRows",
          children: IH.map(((HH, BH) => oH(HH, IH.length - BH)))
        }), (0, eH.jsx)(gH, {
          names: bH.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: XH("lobbyManage:allOnWhitelist", {
            count: bH.listed.length
          }),
          renderRow: oH
        }), (0, eH.jsx)(gH, {
          names: bH.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: XH("lobbyManage:allCount", {
            count: bH.suggested.length
          }),
          renderRow: oH
        })]
      })
    }

    function BB(HH) {
      let {
        manage: BH,
        listing: LH
      } = HH;
      const {
        t: AH
      } = (0, YH.B)(), SH = (HH, LH) => ((0, rH.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: HH
      }), BH.send({
        type: "setListing",
        field: HH,
        value: LH
      }, `listing:${HH}`)), hH = HH => {
        const LH = BH.statusOf(`listing:${HH}`);
        return LH && !LH.ok && (0, eH.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, eH.jsx)(qH, {
            status: LH
          })
        })
      };
      return (0, eH.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, eH.jsx)(WH.b, {
          label: AH("lobbyManage:inWorldsList")
        }), (0, eH.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, eH.jsx)("div", {
            className: "SliderText",
            children: AH("lobbyManage:description")
          }), (0, eH.jsx)(NH, {
            value: LH.description,
            ariaLabel: AH("lobbyManage:description"),
            wide: !0,
            onSave: HH => SH("description", HH)
          })]
        }), hH("description"), (0, eH.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, eH.jsx)("div", {
            className: "SliderText",
            children: AH("lobbyManage:emojis")
          }), (0, eH.jsx)(NH, {
            value: LH.emojis,
            ariaLabel: AH("lobbyManage:emojis"),
            onSave: HH => SH("emojis", HH)
          })]
        }), hH("emojis"), (0, eH.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, eH.jsx)("div", {
            className: "SliderText",
            children: AH("lobbyManage:colour")
          }), (0, eH.jsx)(LB, {
            value: LH.colour,
            ariaLabel: AH("lobbyManage:colour"),
            onSave: HH => {
              SH("colour", HH)
            }
          })]
        }), hH("colour")]
      })
    }

    function LB(HH) {
      let {
        value: BH,
        ariaLabel: LH,
        onSave: rH
      } = HH;
      const SH = (0, AH.useRef)(null),
        hH = (0, AH.useRef)({
          value: BH,
          onSave: rH
        });
      hH.current = {
        value: BH,
        onSave: rH
      };
      const tH = (0, AH.useRef)(null),
        zH = (0, AH.useRef)(!1),
        CH = HH => {
          zH.current && HH.value !== hH.current.value && HH.value !== tH.current && (tH.current = HH.value, hH.current.onSave(HH.value))
        };
      return (0, AH.useEffect)((() => {
        SH.current && document.activeElement !== SH.current && (SH.current.value = BH)
      }), [BH]), (0, AH.useEffect)((() => {
        const HH = SH.current,
          BH = () => {
            CH(HH)
          };
        return HH.addEventListener("change", BH), () => {
          HH.removeEventListener("change", BH), CH(HH)
        }
      }), []), (0, eH.jsx)("input", {
        ref: SH,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: BH,
        "aria-label": LH,
        onInput: () => {
          zH.current = !0
        },
        onBlur: HH => {
          CH(HH.currentTarget)
        }
      })
    }

    function AB(HH) {
      let {
        manage: BH
      } = HH;
      const {
        lobbyName: LH,
        shownLobbyName: AH
      } = (0, vH.e)("connectedGame");
      return BH.state.you.canSetVisibility && null !== LH ? (0, eH.jsx)(SB, {
        manage: BH,
        lobbyName: LH,
        worldCode: null !== AH && void 0 !== AH ? AH : LH
      }, LH) : (0, eH.jsx)(hB, {
        manage: BH,
        lobbyName: null !== LH && void 0 !== LH ? LH : ""
      })
    }

    function rB(HH) {
      return HH.map((HH => HH.toLowerCase())).sort().join(",")
    }

    function SB(HH) {
      var BH;
      let {
        manage: LH,
        lobbyName: SH,
        worldCode: hH
      } = HH;
      const {
        t: tH
      } = (0, YH.B)(), {
        settings: zH,
        loading: CH,
        change: EH,
        retry: XH,
        refresh: GH
      } = (0, ZH.h)(SH), uH = (0, wH.l)(), {
        state: MH
      } = LH, xH = (0, AH.useRef)(zH);
      xH.current = zH;
      const vH = rB(null !== (BH = MH.whitelist) && void 0 !== BH ? BH : []),
        TH = null !== MH.whitelist;
      (0, AH.useEffect)((() => {
        const HH = xH.current;
        null !== HH && (HH.visibility !== MH.visibility || TH && rB(HH.whitelist) !== vH) && GH()
      }), [MH.visibility, vH, TH, GH]);
      const UH = async (HH, BH) => {
        let LH = null;
        return await EH(HH, BH, {
          quiet: !0,
          onAnswer: HH => {
            LH = HH
          }
        }), LH
      }, VH = (HH, BH) => {
        null !== BH && "error" in BH && LH.showStatus(HH, {
          ok: !1,
          text: [tH(BH.error)]
        })
      }, OH = async HH => {
        if (null === zH || HH === zH.visibility) return;
        (0, rH.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: HH
        });
        const BH = "whitelist" === HH ? (0, sH.g)((0, sH.k)(uH.friends, SH, MH.here.map((HH => HH.name))), (0, JH.e)(SH), zH.whitelist) : [],
          LH = await UH({
            setVisibility: HH
          }, (BH => ({
            ...BH,
            visibility: HH
          })));
        VH("mode", LH), null === LH || "error" in LH || await (async HH => {
          for (const BH of (0, sH.o)(HH, DH.D))
            if (!await EH({
                whitelistAdd: BH
              }, (HH => (0, sH.q)(HH, BH, !0)))) return !1;
          return !0
        })(BH)
      }, bH = (0, AH.useMemo)((() => {
        var HH;
        if (null === zH) return [];
        const BH = null !== (HH = MH.whitelist) && void 0 !== HH ? HH : [];
        return [...BH.filter((HH => (0, sH.l)(zH.whitelist, HH))), ...zH.whitelist.filter((HH => !(0, sH.l)(BH, HH)))]
      }), [zH, MH.whitelist]), kH = LH.statusOf("mode");
      return (0, eH.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, eH.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, eH.jsx)(WH.b, {
            label: tH("worldSocial:whoCanJoin")
          }), null === zH && CH && (0, eH.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, eH.jsx)(QH.d, {})
          }), null === zH && !CH && (0, eH.jsx)(PH.m, {
            className: "SmallTextLight",
            onClick: XH,
            children: tH("worldSocial:loadFailed")
          }), null !== zH && (0, eH.jsx)(dH.d, {
            visibility: zH.visibility,
            onPick: HH => {
              OH(HH)
            }
          }), kH && (0, eH.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, eH.jsx)(qH, {
              status: kH
            })
          }), null !== zH && "private" !== zH.visibility && (0, eH.jsx)(aH.b, {
            worldCode: hH,
            message: null
          })]
        }), "whitelist" === (null === zH || void 0 === zH ? void 0 : zH.visibility) && (0, eH.jsx)(HB, {
          state: MH,
          lobbyName: SH,
          listed: bH,
          isListed: HH => (0, sH.l)(zH.whitelist, HH),
          Dv: (HH, BH) => {
            (0, rH.reportAnalyticsClick)(BH ? {
              id: "lobby_manage.whitelist_add",
              value: "IX"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), UH(BH ? {
              whitelistAdd: [HH]
            } : {
              whitelistRemove: HH
            }, (LH => (0, sH.q)(LH, [HH], BH))).then((BH => {
              VH(`whitelist:${HH.toLowerCase()}`, BH)
            }))
          },
          aT: async HH => {
            (0, rH.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const BH = await UH({
              whitelistAdd: [HH]
            }, (BH => (0, sH.q)(BH, [HH], !0)));
            return null === BH ? {
              ok: !1,
              error: tH("worldSocial:changeFailed")
            } : "error" in BH ? {
              ok: !1,
              error: tH(BH.error)
            } : (0, sH.l)(BH.notFound, HH) ? {
              ok: !1,
              error: tH("lobbyManage:noPlayerCalled", {
                playerName: HH
              })
            } : {
              ok: !0
            }
          },
          statusOf: HH => LH.statusOf(`whitelist:${HH.toLowerCase()}`)
        }), "public" === (null === zH || void 0 === zH ? void 0 : zH.visibility) && null !== MH.listing && (0, eH.jsx)(BB, {
          manage: LH,
          listing: MH.listing
        })]
      })
    }

    function hB(HH) {
      var BH;
      let {
        manage: LH,
        lobbyName: AH
      } = HH;
      const {
        t: SH
      } = (0, YH.B)(), {
        state: hH
      } = LH, tH = EH(), zH = null !== (BH = hH.whitelist) && void 0 !== BH ? BH : [];
      return (0, eH.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, eH.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, eH.jsx)(WH.b, {
            label: SH("worldSocial:whoCanJoin")
          }), (0, eH.jsx)("div", {
            className: "LobbyManageModeText",
            children: SH(`worldSocial:${hH.visibility}`)
          })]
        }), "whitelist" === hH.visibility && hH.you.canEditWhitelist && (0, eH.jsx)(HB, {
          state: hH,
          lobbyName: AH,
          listed: zH,
          isListed: HH => {
            var BH;
            return null !== (BH = tH.get(HH.toLowerCase())) && void 0 !== BH ? BH : (0, sH.l)(zH, HH)
          },
          Dv: (HH, BH) => {
            (0, rH.reportAnalyticsClick)(BH ? {
              id: "lobby_manage.whitelist_add",
              value: "IX"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const AH = HH.toLowerCase();
            tH.hold(AH, BH, LH.send(BH ? {
              type: "whitelistAdd",
              names: [HH]
            } : {
              type: "whitelistRemove",
              name: HH
            }, `whitelist:${AH}`))
          },
          aT: async HH => {
            (0, rH.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const BH = await LH.send({
              type: "whitelistAdd",
              names: [HH]
            }, "whitelist-field");
            return BH.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, eH.jsx)(KH.b, {
                text: BH.message
              })
            }
          },
          statusOf: HH => LH.statusOf(`whitelist:${HH.toLowerCase()}`)
        }), "public" === hH.visibility && null !== hH.listing && (0, eH.jsx)(BB, {
          manage: LH,
          listing: hH.listing
        })]
      })
    }
    var tB = LH(5478),
      zB = LH(1365);
    const CB = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const EB = (0, AH.memo)((function(HH) {
      var BH;
      let {
        rule: LH,
        value: AH,
        status: rH,
        pending: SH,
        hiddenNames: hH,
        LO: tH,
        onAction: zH
      } = HH;
      const {
        t: CH
      } = (0, YH.B)(), EH = HH => tH(LH, HH), XH = (HH, BH) => {
        zH(LH, HH, BH)
      }, GH = fH(CH, LH.label, hH), uH = LH.info ? fH(CH, LH.info, hH) : void 0, QH = LH.placeholder ? fH(CH, LH.placeholder, hH) : void 0, WH = (null !== (BH = LH.options) && void 0 !== BH ? BH : []).map((HH => ({
        value: HH.value,
        label: fH(CH, HH.label, hH)
      }))), MH = Math.max(0, ...WH.map((HH => function(HH) {
        let BH = 0;
        for (const LH of HH) BH += CB.test(LH) ? 2 : 1;
        return BH
      }(HH.label)))), xH = rH && (0, eH.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, eH.jsx)(qH, {
          status: rH
        })
      }), vH = (0, eH.jsxs)("div", {
        className: "SliderText",
        children: [GH, void 0 !== uH && (0, eH.jsx)(zB.e, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: uH
        })]
      });
      return "toggle" === LH.kind ? (0, eH.jsxs)(eH.Fragment, {
        children: [(0, eH.jsx)(tB.c, {
          label: GH,
          checked: !0 === AH,
          circleInfoText: uH,
          disabled: SH,
          onClick: EH
        }), xH]
      }) : "choice" === LH.kind && WH.length <= 3 ? (0, eH.jsxs)(eH.Fragment, {
        children: [(0, eH.jsx)(tB.e, {
          label: GH,
          options: WH,
          value: String(AH),
          circleInfoText: uH,
          onChange: EH
        }), xH]
      }) : (0, eH.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [vH, "choice" === LH.kind && (0, eH.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": MH
          },
          children: (0, eH.jsx)(oH.b, {
            options: WH,
            value: String(AH),
            disabled: SH,
            onChange: HH => {
              EH(HH.value)
            }
          })
        }), ("number" === LH.kind || "text" === LH.kind) && (0, eH.jsx)(NH, {
          value: null === AH ? "" : String(AH),
          placeholder: QH,
          ariaLabel: GH,
          onSave: HH => {
            const BH = HH.trim(),
              AH = Number(BH);
            return EH("number" === LH.kind && "" !== BH && Number.isFinite(AH) ? AH : BH)
          }
        }), "action" === LH.kind && (0, eH.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [WH.length > 3 && (0, eH.jsx)(oH.b, {
            options: WH,
            value: {
              value: "",
              label: null !== QH && void 0 !== QH ? QH : GH
            },
            disabled: SH,
            onChange: HH => {
              XH(HH.value)
            }
          }), WH.length > 0 && WH.length <= 3 && WH.map((HH => (0, eH.jsx)(PH.m, {
            className: "SmallTextLight",
            disabled: SH,
            onClick: () => {
              XH(HH.value)
            },
            children: HH.label
          }, HH.value))), 0 === WH.length && (0, eH.jsx)(PH.m, {
            className: "SmallTextLight",
            disabled: SH,
            onClick: () => {
              XH()
            },
            children: null !== QH && void 0 !== QH ? QH : GH
          })]
        }), "names" === LH.kind && (0, eH.jsx)(XB, {
          names: Array.isArray(AH) ? AH : [],
          pending: SH,
          onAction: XH
        }), xH]
      })
    }));

    function XB(HH) {
      let {
        names: BH,
        pending: LH,
        onAction: rH
      } = HH;
      const {
        t: SH
      } = (0, YH.B)(), hH = (0, AH.useRef)(null), [tH, zH] = (0, AH.useState)(""), CH = () => {
        const HH = tH.trim();
        "" !== HH && (rH(HH, "add"), hH.current && (hH.current.value = ""), zH(""))
      };
      return (0, eH.jsxs)("div", {
        className: "LobbyManageNames",
        children: [BH.map((HH => (0, eH.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, eH.jsx)("span", {
            className: "LobbyManageNameText",
            children: HH
          }), (0, eH.jsx)(PH.m, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: SH("lobbyManage:removeName", {
              name: HH
            }),
            disabled: LH,
            onClick: () => {
              rH(HH, "remove")
            },
            children: (0, eH.jsx)(uH.c, {
              name: "xmark"
            })
          })]
        }, HH))), (0, eH.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, eH.jsx)(cH.e, {
            domRef: hH,
            placeholderText: SH("lobbyManage:namePlaceholder"),
            ariaLabel: SH("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: HH => {
              zH(HH)
            },
            onEnter: CH
          }), (0, eH.jsx)(PH.m, {
            className: "SmallTextLight",
            disabled: LH || "" === tH.trim(),
            onClick: CH,
            children: SH("lobbyManage:addHere")
          })]
        })]
      })
    }
    const GB = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function YB(HH, BH) {
      return GB.map((LH => {
        let {
          group: AH,
          title: rH
        } = LH;
        const SH = HH.filter((HH => HH.group === AH && void 0 === HH.parent)).map((LH => {
          const AH = !0 === BH(LH) ? HH.filter((HH => HH.parent === LH.key)) : [];
          return {
            rule: LH,
            children: AH
          }
        }));
        return {
          group: AH,
          title: rH,
          items: SH
        }
      }))
    }

    function uB(HH) {
      return HH.flatMap((HH => {
        let {
          items: BH
        } = HH;
        return BH.flatMap((HH => {
          let {
            rule: BH,
            children: LH
          } = HH;
          return [BH, ...LH]
        }))
      }))
    }

    function QB(HH) {
      let {
        manage: BH,
        rowsShown: LH
      } = HH;
      const {
        t: SH
      } = (0, YH.B)(), hH = (0, vH.e)("hiddenPlayerNames"), {
        rules: tH
      } = BH.state, zH = EH(), CH = HH => {
        const BH = zH.get(HH.key);
        return void 0 === BH ? HH.value : BH
      }, XH = YB(tH, CH), [GH] = (0, AH.useState)((() => uB(XH).map((HH => HH.key)))), uH = LH === 1 / 0 ? null : new Set(GH.slice(0, LH)), QH = HH => null === uH || uH.has(HH.key), {
        hold: MH
      } = zH, xH = (0, AH.useCallback)(((HH, LH) => {
        (0, rH.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: HH.key
        });
        const AH = BH.send({
          type: "setRule",
          key: HH.key,
          value: LH
        }, `rule:${HH.key}`);
        return MH(HH.key, LH, AH), AH
      }), [BH, MH]), PH = (0, AH.useCallback)(((HH, LH, AH) => {
        (0, rH.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: HH.key
        }), BH.send({
          type: "ruleAction",
          key: HH.key,
          ...void 0 === LH ? {} : {
            arg: LH
          },
          ...void 0 === AH ? {} : {
            op: AH
          }
        }, `rule:${HH.key}`, void 0 === AH ? SH("lobbyManage:setJustNow") : void 0)
      }), [BH, SH]), TH = HH => {
        const LH = `rule:${HH.key}`;
        return (0, eH.jsx)(EB, {
          rule: HH,
          value: CH(HH),
          status: BH.statusOf(LH),
          pending: BH.isPending(LH),
          hiddenNames: hH,
          LO: xH,
          onAction: PH
        }, HH.key)
      };
      return (0, eH.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: XH.map((HH => {
          let {
            group: BH,
            title: LH,
            items: rH
          } = HH;
          const hH = rH.filter((HH => {
            let {
              rule: BH
            } = HH;
            return QH(BH)
          }));
          return 0 === hH.length ? null : (0, eH.jsxs)(AH.Fragment, {
            children: [(0, eH.jsx)(WH.b, {
              label: SH(LH)
            }), hH.map((HH => {
              let {
                rule: BH,
                children: LH
              } = HH;
              return 0 === LH.length ? TH(BH) : (0, eH.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [TH(BH), LH.filter(QH).map(TH)]
              }, BH.key)
            }))]
          }, BH)
        }))
      })
    }
    const WB = {
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
      MB = 5,
      xB = (0, AH.memo)((function(HH) {
        let {
          page: BH,
          manage: LH,
          leaderboard: rH,
          focusRequest: SH,
          onFocused: hH,
          ruleRowsShown: tH
        } = HH;
        return "leaderboard" === BH ? (0, eH.jsx)(AH.Suspense, {
          fallback: (0, eH.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, eH.jsx)(QH.d, {})
          }),
          children: rH
        }) : "joining" === BH ? (0, eH.jsx)(AB, {
          manage: LH
        }) : "rules" === BH ? (0, eH.jsx)(QB, {
          manage: LH,
          rowsShown: tH
        }) : (0, eH.jsx)(FH, {
          manage: LH,
          focusRequest: SH,
          onFocused: hH
        })
      }));

    function vB(HH) {
      let {
        page: BH
      } = HH;
      const {
        t: LH
      } = (0, YH.B)(), AH = WB[BH];
      return (0, eH.jsxs)(eH.Fragment, {
        children: [(0, eH.jsx)(uH.c, {
          name: AH.icon
        }), " ", (0, eH.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: LH(AH.title)
        })]
      })
    }

    function PB(HH) {
      var BH;
      const {
        t: LH
      } = (0, YH.B)(), {
        pages: SH,
        landing: hH
      } = HH, zH = (0, AH.useRef)(null), CH = (0, AH.useRef)(null), EH = (0, AH.useRef)(null), XH = (0, AH.useRef)(new Map), [uH, QH] = (0, AH.useState)(null), vH = (0, AH.useRef)(uH), PH = (0, AH.useRef)(0), [TH, UH] = (0, AH.useState)(SH[0]), VH = null !== uH && void 0 !== uH ? uH : SH.includes(TH) ? TH : SH[0], [OH] = (0, AH.useState)(null !== (BH = null === hH || void 0 === hH ? void 0 : hH.page) && void 0 !== BH ? BH : null), bH = null !== OH && SH.includes(OH) ? [OH, ...SH.filter((HH => HH !== OH))] : SH, [kH] = (0, AH.useState)((() => {
        const BH = uB(YB(HH.manage.state.rules, (HH => HH.value)));
        return Math.max(1, Math.ceil(BH.length / MB))
      })), mH = bH.flatMap((HH => "rules" === HH ? Array(kH).fill(HH) : [HH])), oH = function(HH, BH) {
        const [LH, rH] = (0, AH.useState)(HH), SH = LH >= BH;
        return SH && LH !== 1 / 0 && rH(1 / 0), (0, AH.useLayoutEffect)((() => {
          if (SH) return;
          let HH = !0;
          return (0, xH.e)().then((() => {
            HH && rH((HH => HH + 1))
          })), () => {
            HH = !1
          }
        }), [LH, SH]), SH ? 1 / 0 : LH
      }(1, mH.length), IH = mH.slice(0, oH), fH = new Set(IH), lH = oH < mH.length, KH = lH ? IH.filter((HH => "rules" === HH)).length * MB : 1 / 0, cH = (0, AH.useRef)(HH.focusRequest);
      cH.current = HH.focusRequest;
      const qH = HH => {
          vH.current = HH, QH(HH)
        },
        gH = () => {
          var HH, BH;
          zH.current.style.scrollPaddingTop = `${null!==(HH=null===(BH=EH.current)||void 0===BH?void 0:BH.offsetHeight)&&void 0!==HH?HH:0}px`
        },
        NH = HH => {
          const BH = zH.current,
            LH = XH.current.get(HH);
          if (void 0 === LH) return;
          const AH = document.activeElement,
            rH = cH.current,
            SH = null === rH ? null : LH.querySelector(`[data-lobby-manage-row="${CSS.escape(rH.name)}"]`);
          gH(), AH instanceof HTMLElement && null !== SH && void 0 !== SH && SH.contains(AH) ? AH.scrollIntoView({
            block: "center"
          }) : null === LH.previousElementSibling ? BH.scrollTop = 0 : LH.scrollIntoView({
            block: "start"
          }), PH.current = BH.scrollTop
        },
        RH = HH => {
          (0, rH.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: HH
          }), qH(HH), NH(HH)
        },
        jH = () => {
          var HH, BH;
          const LH = zH.current,
            AH = LH.getBoundingClientRect().top + (null !== (HH = null === (BH = EH.current) || void 0 === BH ? void 0 : BH.offsetHeight) && void 0 !== HH ? HH : 0),
            rH = SH.map((HH => {
              var BH, LH;
              return (null !== (BH = null === (LH = XH.current.get(HH)) || void 0 === LH ? void 0 : LH.getBoundingClientRect().top) && void 0 !== BH ? BH : 1 / 0) - AH
            })),
            hH = !lH && LH.scrollTop + LH.clientHeight >= LH.scrollHeight - 1;
          UH(SH[(0, tH.j)(rH, hH)])
        },
        nH = () => {
          null !== vH.current && (qH(null), jH())
        };
      (0, AH.useLayoutEffect)((() => {
        null !== hH && SH.includes(hH.page) && RH(hH.page)
      }), [null === hH || void 0 === hH ? void 0 : hH.seq]), (0, AH.useLayoutEffect)((() => {
        null === vH.current || SH.includes(vH.current) || nH()
      }));
      const {
        onFocused: FH
      } = HH, DH = (0, AH.useCallback)((HH => {
        null !== vH.current && NH(vH.current), FH(HH)
      }), [FH]);
      (0, AH.useLayoutEffect)((() => {
        const HH = vH.current;
        null !== HH && (!lH || SH.indexOf(mH[oH - 1]) < SH.indexOf(HH)) && NH(HH)
      }), [oH]), (0, AH.useEffect)((() => {
        const HH = new ResizeObserver((() => {
          null !== vH.current ? NH(vH.current) : gH()
        }));
        return HH.observe(zH.current), HH.observe(CH.current), () => {
          HH.disconnect()
        }
      }), []), (0, AH.useLayoutEffect)((() => {
        const HH = EH.current,
          BH = null === HH || void 0 === HH ? void 0 : HH.querySelector(".SegmentedToggleOptionSelected");
        BH && (HH.scrollLeft = Math.min(BH.offsetLeft, Math.max(HH.scrollLeft, BH.offsetLeft + BH.offsetWidth - HH.clientWidth)))
      }), [VH]);
      return (0, eH.jsxs)("div", {
        ref: zH,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === vH.current ? jH() : Math.abs(zH.current.scrollTop - PH.current) > 1 && nH()
        },
        onClick: HH => {
          var BH;
          null !== (BH = EH.current) && void 0 !== BH && BH.contains(HH.target) || nH()
        },
        onFocus: HH => {
          var BH;
          const LH = null === vH.current ? null : XH.current.get(vH.current);
          !LH || LH.contains(HH.target) || null !== (BH = EH.current) && void 0 !== BH && BH.contains(HH.target) || nH()
        },
        children: [SH.length > 1 && (0, eH.jsx)("div", {
          ref: EH,
          className: "LobbyManageChips",
          children: (0, eH.jsx)(MH.b, {
            options: SH.map((HH => ({
              value: HH,
              label: (0, eH.jsx)(vB, {
                page: HH
              }),
              ariaLabel: LH(WB[HH].title)
            }))),
            value: VH,
            padTabs: "2",
            ariaLabel: LH("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: RH
          })
        }), (0, eH.jsx)("div", {
          ref: CH,
          className: GH()("LobbyManageInner", {
            Staging: lH
          }),
          children: SH.filter((HH => fH.has(HH))).map((BH => {
            const LH = BH === uH;
            return (0, eH.jsxs)("section", {
              ref: HH => {
                HH ? XH.current.set(BH, HH) : XH.current.delete(BH)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": LH || void 0,
              children: [SH.length > 1 && (0, eH.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": LH || void 0,
                "data-pad-unavailable": LH || void 0,
                children: (0, eH.jsx)(WH.b, {
                  label: (0, eH.jsx)(vB, {
                    page: BH
                  })
                })
              }), (0, eH.jsx)(xB, {
                page: BH,
                manage: HH.manage,
                leaderboard: HH.leaderboard,
                focusRequest: HH.focusRequest,
                onFocused: DH,
                ruleRowsShown: "rules" === BH ? KH : 1 / 0
              })]
            }, BH)
          }))
        })]
      })
    }

    function TB(HH) {
      return void 0 === (null === HH || void 0 === HH ? void 0 : HH.page) ? null : {
        page: HH.page,
        seq: HH.seq
      }
    }

    function UB(HH) {
      let {
        leaderboard: BH
      } = HH;
      const LH = function() {
          const HH = (0, zH.j)("lobbyManage"),
            [BH, LH] = (0, AH.useReducer)((HH => HH + 1), 0),
            [rH] = (0, AH.useState)((() => new CH.e(LH)));
          return (0, AH.useEffect)((() => {
            const HH = rH.nextDeadline();
            if (null === HH) return;
            const BH = setTimeout((() => {
              rH.expire(Date.now()), LH()
            }), Math.max(0, HH - Date.now()));
            return () => {
              clearTimeout(BH)
            }
          })), (0, AH.useMemo)((() => null === HH ? null : {
            state: HH,
            send: (HH, BH, AH) => {
              const SH = rH.send(HH, BH, null !== AH && void 0 !== AH ? AH : null);
              return LH(), SH
            },
            statusOf: HH => rH.statusOf(HH, Date.now()),
            showStatus: (HH, BH) => {
              rH.show(HH, BH)
            },
            isPending: HH => rH.isPending(HH)
          }), [HH, BH, rH])
        }(),
        EH = (0, tH.n)((0, SH.c)()),
        XH = (0, hH.j)(),
        [GH, YH] = (0, AH.useState)((() => TB(XH))),
        [uH, QH] = (0, AH.useState)(null);
      return (0, AH.useEffect)((() => {
        null === XH && (0, rH.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, AH.useEffect)((() => {
        null !== XH && (YH((HH => (null === HH || void 0 === HH ? void 0 : HH.seq) === XH.seq ? HH : TB(XH))), void 0 !== XH.focusName && "players" === XH.page ? QH({
          name: XH.focusName,
          seq: XH.seq
        }) : (0, hH.i)(XH.seq))
      }), [null === XH || void 0 === XH ? void 0 : XH.seq]), null === LH ? null : (0, eH.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, eH.jsx)(PB, {
          pages: (0, tH.f)(LH.state, EH),
          manage: LH,
          leaderboard: BH,
          focusRequest: uH,
          onFocused: hH.i,
          landing: GH
        })
      })
    }
  },
  37439: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH,
      i: () => zH
    });
    var AH = LH(1475),
      rH = LH(2036),
      SH = LH(1998);
    const hH = 1e4;
    let tH = 0;

    function zH(HH) {
      const BH = ++tH;
      return new Promise((LH => {
        const tH = BH => {
            zH(), clearTimeout(CH), !1 === (null === BH || void 0 === BH ? void 0 : BH.ok) && (0, AH.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: HH.type
            }), LH(BH)
          },
          zH = rH.e.subscribe("lobbyManage", (HH => {
            const LH = function(HH, BH) {
              var LH;
              return null !== (LH = null === HH || void 0 === HH ? void 0 : HH.results.find((HH => HH.requestId === BH))) && void 0 !== LH ? LH : null
            }(HH, BH);
            null !== LH && tH(LH)
          })),
          CH = setTimeout((() => {
            tH(null)
          }), hH);
        SH.gameBridge.send("lobbyManage", {
          ...HH,
          requestId: BH
        })
      }))
    }
    const CH = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class EH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zH;
        this.onChange = HH, this.sendAction = BH, this.pending = new Map, this.statuses = new Map
      }
      send(HH, BH, LH) {
        var AH;
        return this.statuses.delete(BH), this.pending.set(BH, (null !== (AH = this.pending.get(BH)) && void 0 !== AH ? AH : 0) + 1), this.sendAction(HH).then((HH => {
          var AH;
          const rH = null !== HH && void 0 !== HH ? HH : {
              requestId: -1,
              ok: !1,
              message: CH
            },
            SH = (null !== (AH = this.pending.get(BH)) && void 0 !== AH ? AH : 1) - 1;
          SH > 0 ? this.pending.set(BH, SH) : this.pending.delete(BH);
          const hH = !rH.ok || rH.message.length > 0 ? rH.message : null === LH ? null : [LH];
          return null !== hH && this.statuses.set(BH, {
            ok: rH.ok,
            text: hH,
            until: Date.now() + 4e3
          }), this.onChange(), rH
        }))
      }
      show(HH, BH) {
        this.statuses.set(HH, {
          ...BH,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(HH) {
        for (const [BH, LH] of this.statuses) LH.until <= HH && this.statuses.delete(BH)
      }
      nextDeadline() {
        let HH = null;
        for (const LH of this.statuses.values()) {
          var BH;
          HH = Math.min(null !== (BH = HH) && void 0 !== BH ? BH : 1 / 0, LH.until)
        }
        return HH
      }
      statusOf(HH, BH) {
        const LH = this.statuses.get(HH);
        return !LH || LH.until <= BH ? null : {
          ok: LH.ok,
          text: LH.text
        }
      }
      isPending(HH) {
        return this.pending.has(HH)
      }
    }
  },
  37601: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => XH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1706),
      tH = LH(1455),
      zH = LH(1313),
      CH = LH(1315),
      EH = LH(1225);

    function XH(HH) {
      let {
        label: BH,
        icon: LH,
        placeholder: rH,
        onSubmit: XH
      } = HH;
      const GH = (0, AH.useRef)(null),
        [YH, uH] = (0, AH.useState)(""),
        [QH, WH] = (0, AH.useState)("Enter"),
        [MH, xH] = (0, AH.useState)(null);
      (0, AH.useEffect)((() => {
        if ("Success" !== QH && "Error" !== QH) return;
        const HH = setTimeout((() => {
          "Success" === QH && GH.current && (GH.current.value = "", uH("")), WH("Enter")
        }), "Success" === QH ? 1e3 : 4e3);
        return () => {
          clearTimeout(HH)
        }
      }), [QH]);
      const vH = () => {
        const HH = YH.trim();
        "" !== HH && "Enter" === QH && (WH("Loading"), XH(HH).then((HH => {
          GH.current && ("error" in HH ? null === HH.error ? WH("Enter") : (xH(HH.error), WH("Error")) : WH("Success"))
        })))
      };
      return (0, EH.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: HH => {
          HH.target === GH.current && "Escape" !== HH.key && HH.stopPropagation()
        },
        children: [(0, EH.jsxs)("div", {
          className: SH()("AddFriendBodyOverlay", `AddFriendBodyOverlay${QH}`),
          children: ["Loading" === QH && (0, EH.jsx)(zH.d, {}), "Success" === QH && (0, EH.jsx)(CH.c, {
            name: "check"
          }), "Error" === QH && MH]
        }), (0, EH.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, EH.jsx)(hH.e, {
            className: "PlayerSearchInput",
            domRef: GH,
            maxLength: 32,
            placeholderText: rH,
            ariaLabel: rH,
            stopPropagation: !1,
            onValueChange: HH => {
              uH(HH)
            },
            onEnter: vH
          }), (0, EH.jsxs)(tH.i, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== QH || "" === YH.trim(),
            onClick: vH,
            children: [(0, EH.jsx)(CH.c, {
              name: LH
            }), " ", BH]
          })]
        })]
      })
    }
  },
  37593: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => XH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(1123),
      tH = LH(1315),
      zH = LH(1225);
    const CH = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      EH = ["unlisted", "public", "whitelist", "private"];

    function XH(HH) {
      let {
        visibility: BH,
        onPick: LH
      } = HH;
      const {
        t: rH
      } = (0, hH.B)(), XH = (0, AH.useRef)([]);
      return (0, zH.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": rH("worldSocial:whoCanJoin"),
        children: EH.map(((HH, AH) => {
          const hH = HH === BH;
          return (0, zH.jsxs)("button", {
            ref: HH => {
              XH.current[AH] = HH
            },
            type: "button",
            className: SH()("WorldSocialTile", {
              WorldSocialTileSelected: hH
            }),
            "aria-pressed": hH,
            tabIndex: hH ? 0 : -1,
            onKeyDown: HH => {
              ((HH, BH) => {
                const LH = "ArrowRight" === HH.key || "ArrowDown" === HH.key ? 1 : "ArrowLeft" === HH.key || "ArrowUp" === HH.key ? -1 : 0;
                var AH;
                0 !== LH && (HH.preventDefault(), null === (AH = XH.current[(BH + LH + EH.length) % EH.length]) || void 0 === AH || AH.focus())
              })(HH, AH)
            },
            onClick: () => {
              LH(HH)
            },
            children: [(0, zH.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, zH.jsx)(tH.c, {
                name: CH[HH]
              })
            }), (0, zH.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, zH.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: rH(`worldSocial:${HH}`)
              }), (0, zH.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: rH(`worldSocial:${HH}Description`)
              })]
            })]
          }, HH)
        }))
      })
    }
  },
  37599: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH
    });
    var AH = LH(1123),
      rH = LH(2893),
      SH = LH(4745),
      hH = LH(1225);

    function tH(HH) {
      let {
        IX: BH,
        children: LH,
        ...tH
      } = HH;
      const {
        t: zH
      } = (0, AH.B)();
      return (0, hH.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          BH.onChange(!BH.on)
        },
        children: (0, hH.jsx)(rH.d, {
          ...tH,
          opensProfileCard: !1,
          children: (0, hH.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: HH => {
              HH.stopPropagation()
            },
            children: [LH, (0, hH.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, hH.jsx)(SH.d, {
                checked: BH.on,
                disabled: !1,
                ariaLabel: zH("worldSocial:letJoin", {
                  playerName: tH.playerSocialPreview.name
                }),
                onChange: HH => {
                  BH.onChange(HH.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37591: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => uH
    });
    var AH = LH(45),
      rH = LH(1123),
      SH = LH(1922),
      hH = LH(81),
      tH = LH(15),
      zH = LH(1475),
      CH = LH(2924),
      EH = LH(34877),
      XH = LH(1455),
      GH = LH(1315),
      YH = LH(1225);

    function uH(HH) {
      let {
        worldCode: BH,
        message: LH
      } = HH;
      const {
        t: uH
      } = (0, rH.B)(), {
        isTouchScreen: QH
      } = (0, tH.m)(["isTouchScreen"]), WH = hH.featureFlags.canUseInviteLinks, MH = (0, EH.i)(WH && null === LH), [xH, vH] = (0, CH.j)(), PH = (0, AH.useRef)(null);
      if (null !== LH) return (0, YH.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, YH.jsx)(GH.c, {
          name: "lock"
        }), (0, YH.jsx)("span", {
          children: LH
        })]
      });
      const TH = WH ? MH : BH,
        UH = QH && WH && (0, CH.b)();
      return (0, YH.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!WH && (0, YH.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: uH("worldSocial:worldCode")
        }), (0, YH.jsx)("input", {
          ref: PH,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== TH && void 0 !== TH ? TH : "",
          "aria-label": uH(WH ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: HH => {
            HH.currentTarget.select()
          }
        }), (0, YH.jsxs)(XH.i, {
          className: "WorldSocialCopy",
          disabled: null === TH,
          onClick: () => {
            null !== TH && (0, CH.f)(TH, {
              useShareSheet: UH,
              onOutcome: HH => {
                if ((0, zH.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== HH || WH ? HH : "code"
                  }), "copied" === HH) vH();
                else if ("failed" === HH) {
                  var BH;
                  null === (BH = PH.current) || void 0 === BH || BH.focus(), SH.h.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, YH.jsx)(GH.c, {
            name: xH ? "check" : UH ? "up-from-bracket" : "copy"
          }), " ", uH(xH ? "general:copied" : UH ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37597: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => YH,
      g: () => GH,
      k: () => XH
    });
    var AH = LH(602),
      rH = LH(1123),
      SH = LH(1664),
      hH = LH(2893),
      tH = LH(2833),
      zH = LH(1455),
      CH = LH(37599),
      EH = LH(1225);

    function XH(HH, BH) {
      var LH;
      return {
        isError: !1,
        name: HH,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== BH && void 0 !== BH ? BH : {},
        nameColour: null !== (LH = null === BH || void 0 === BH ? void 0 : BH.nameColour) && void 0 !== LH ? LH : AH.c,
        location: {
          status: "offline"
        }
      }
    }

    function GH(HH) {
      let {
        player: BH,
        isFriend: LH = !1,
        status: AH,
        showLocation: zH = void 0 === AH,
        IX: XH,
        onSendFriendRequest: GH,
        actions: YH,
        zIndex: uH
      } = HH;
      const {
        t: QH
      } = (0, rH.B)();
      let WH = AH;
      null !== XH && void 0 !== XH && XH.on && (WH = (0, EH.jsxs)(EH.Fragment, {
        children: [null !== AH && void 0 !== AH ? AH : (0, EH.jsx)(tH.c, {
          socialPreview: BH
        }), (0, EH.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", QH("worldSocial:canJoin")]
        })]
      }));
      const MH = {
        playerSocialPreview: BH,
        isFriend: LH,
        hideFriendBadge: !0,
        onFriendRemoved: LH ? HH => {
          SH.d.removeFriendFromState(HH)
        } : void 0,
        status: WH,
        showLocation: zH,
        onSendFriendRequest: GH,
        zIndex: uH
      };
      return XH ? (0, EH.jsx)(CH.d, {
        ...MH,
        IX: XH,
        children: YH
      }) : (0, EH.jsx)(hH.d, {
        ...MH,
        opensProfileCard: !1,
        children: YH || void 0
      })
    }

    function YH(HH) {
      let {
        row: BH,
        IX: LH,
        canInvite: AH,
        invited: SH,
        onInvite: hH,
        zIndex: tH
      } = HH;
      const {
        t: CH
      } = (0, rH.B)(), XH = "online" === BH.place ? zH.i : zH.m;
      return (0, EH.jsx)(GH, {
        player: BH.friend,
        isFriend: !0,
        status: "here" === BH.place ? CH("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        IX: LH,
        zIndex: tH,
        actions: AH && (0, EH.jsx)(XH, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: SH,
          onClick: hH,
          ariaLabel: `${CH("worldSocial:invite")} ${BH.friend.name}`,
          children: CH(SH ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37582: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH,
      g: () => hH,
      h: () => CH
    });
    var AH = LH(45),
      rH = LH(4991),
      SH = LH(1922);

    function hH(HH) {
      const BH = {
        lobbyName: HH,
        answer: null,
        response: rH.e.getSocialSettings(HH)
      };
      return BH.response.then((HH => {
        BH.answer = HH
      })), BH
    }
    const tH = new Map;

    function zH(HH) {
      tH.set(HH.lobbyName, HH)
    }

    function CH(HH) {
      const [BH] = (0, AH.useState)((() => function(HH) {
        var BH;
        const LH = null !== (BH = tH.get(HH)) && void 0 !== BH ? BH : null;
        return null !== LH && void 0 !== LH && LH.answer && "error" in LH.answer ? null : LH
      }(HH))), [LH, hH] = (0, AH.useState)((() => null !== BH && void 0 !== BH && BH.answer && "settings" in BH.answer ? BH.answer.settings : null)), [zH, CH] = (0, AH.useState)(!0), [EH, XH] = (0, AH.useState)(null !== LH), GH = (0, AH.useRef)(LH);
      GH.current = LH;
      const YH = (0, AH.useRef)(0),
        uH = (0, AH.useRef)(0),
        QH = (0, AH.useRef)(!1),
        WH = (0, AH.useRef)(!0),
        MH = (0, AH.useCallback)((async BH => {
          const LH = ++YH.current,
            AH = await (null !== BH && void 0 !== BH ? BH : rH.e.getSocialSettings(HH));
          WH.current && LH === YH.current && (XH(!0), CH(!1), "error" in AH || hH(AH.settings))
        }), [HH]),
        xH = (0, AH.useCallback)((() => {
          CH(!0), MH()
        }), [MH]),
        vH = (0, AH.useCallback)((() => {
          uH.current > 0 ? QH.current = !0 : MH()
        }), [MH]);
      (0, AH.useEffect)((() => (WH.current = !0, tH.delete(HH), CH(!0), MH(null === BH || void 0 === BH ? void 0 : BH.response), () => {
        WH.current = !1
      })), [MH, HH, BH]);
      const PH = HH => {
        YH.current++, CH(!1), GH.current = HH, hH(HH)
      };
      return {
        settings: LH,
        loading: zH,
        answered: EH,
        retry: xH,
        refresh: vH,
        change: async function(BH, LH) {
          let {
            quiet: AH = !1,
            onAnswer: hH
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const tH = GH.current;
          if (null === tH) return !1;
          PH(LH(tH)), uH.current > 0 && (QH.current = !0), uH.current++;
          const zH = await rH.e.setSocialSettings(HH, BH);
          uH.current--;
          const CH = !("error" in zH);
          if (!WH.current) return CH;
          if (null === hH || void 0 === hH || hH(zH), AH);
          else if ("error" in zH) SH.h.showMessage({
            translationKey: zH.error
          });
          else
            for (const HH of zH.notFound) SH.h.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: HH
              }
            });
          if (uH.current > 0) return CH;
          const EH = QH.current;
          return QH.current = !1, !EH && "settings" in zH ? PH(zH.settings) : (EH || PH(tH), MH()), CH
        }
      }
    }
  },
  37604: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH,
      f: () => SH
    });
    var AH = LH(152);
    const rH = new Map;

    function SH(HH, BH) {
      var LH;
      const AH = null !== (LH = rH.get(HH)) && void 0 !== LH ? LH : new Map;
      AH.set(BH, Date.now()), rH.set(HH, AH)
    }

    function hH(HH) {
      const BH = rH.get(HH);
      if (!BH) return [];
      const LH = Date.now();
      for (const [rH, SH] of BH) LH - SH >= AH.o && BH.delete(rH);
      return [...BH.keys()]
    }
  },
  37589: (HH, BH, LH) => {
    function AH(HH, BH) {
      const LH = BH.toLowerCase();
      for (const AH of HH)
        if (AH.toLowerCase() === LH) return !0;
      return !1
    }

    function rH(HH, BH, LH) {
      const rH = [],
        SH = [],
        hH = [];
      for (const tH of HH) !tH.isError && tH.name && ("inGame" === tH.location.status && tH.location.inLobbyName === BH || AH(LH, tH.name) ? SH.push({
        friend: tH,
        place: "here"
      }) : "offline" === tH.location.status ? hH.push({
        friend: tH,
        place: "offline"
      }) : rH.push({
        friend: tH,
        place: "online"
      }));
      return [...rH, ...SH, ...hH]
    }

    function SH(HH, BH, LH) {
      const rH = [],
        SH = HH.flatMap((HH => "here" === HH.place ? [HH.friend.name] : []));
      for (const hH of [...SH, ...BH]) AH(rH, hH) || AH(LH, hH) || rH.push(hH);
      return rH
    }

    function hH(HH, BH) {
      return null === HH || void 0 === HH || !HH.canManage || AH(HH.whitelist, BH) ? "none" : "whitelist" === HH.visibility ? "required" : "quiet"
    }

    function tH(HH) {
      if (null === HH) return !0;
      const {
        visibility: BH
      } = HH;
      return "public" === BH || "unlisted" === BH || "whitelist" === BH && HH.canManage
    }

    function zH(HH, BH, LH) {
      if (LH) {
        const LH = BH.filter((BH => !AH(HH.whitelist, BH)));
        return {
          ...HH,
          whitelist: [...HH.whitelist, ...LH]
        }
      }
      return {
        ...HH,
        whitelist: HH.whitelist.filter((HH => !AH(BH, HH)))
      }
    }

    function CH(HH, BH) {
      const LH = [];
      for (let AH = 0; AH < HH.length; AH += BH) LH.push(HH.slice(AH, AH + BH));
      return LH
    }
    LH.d(BH, {
      d: () => tH,
      g: () => SH,
      k: () => rH,
      l: () => AH,
      o: () => CH,
      p: () => hH,
      q: () => zH
    })
  },
  37881: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(45),
      rH = LH(2628);

    function SH() {
      const HH = (0, rH.j)("lobbyLeaderboardInfo");
      return (0, AH.useMemo)((() => function(HH) {
        if (null === HH) return null;
        const BH = Object.entries(HH),
          LH = BH.filter((HH => {
            let [, BH] = HH;
            return void 0 !== BH
          }));
        if (LH.length === BH.length) return HH;
        const AH = Object.fromEntries(LH),
          rH = Object.keys(HH).filter((HH => !Object.hasOwn(AH, HH)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${rH.join(", ")}`), AH
      }(HH)), [HH])
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);