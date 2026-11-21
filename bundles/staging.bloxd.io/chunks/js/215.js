export const id = 215;
export const ids = [215];
export const modules = {
  40485: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      LobbyManageView: () => pF
    });
    var LQ = wQ(53),
      qQ = wQ(1471),
      oQ = wQ(2345),
      DQ = wQ(2359),
      kQ = wQ(2367),
      vQ = wQ(36193);

    function mQ() {
      const [QQ, FQ] = (0, LQ.useState)(new Map);
      return {
        get: FQ => QQ.get(FQ),
        hold: (0, LQ.useCallback)(((QQ, wQ, LQ) => {
          FQ((FQ => new Map(FQ).set(QQ, wQ))), LQ.then((() => {
            FQ((FQ => {
              const wQ = new Map(FQ);
              return wQ.delete(QQ), wQ
            }))
          }))
        }), [])
      }
    }
    var uQ = wQ(1070),
      HQ = wQ.n(uQ),
      bQ = wQ(1207),
      YQ = wQ(1079),
      xQ = wQ(1348),
      AQ = wQ(2552),
      tQ = wQ(4867),
      eQ = wQ(3451);
    var MQ = wQ(1927),
      GQ = wQ(1451);

    function pQ(QQ, FQ, wQ) {
      const LQ = QQ.filter((QQ => QQ.name !== FQ)),
        qQ = LQ.filter((QQ => "none" === QQ.role)).sort(((QQ, FQ) => FQ.at - QQ.at)),
        oQ = LQ.filter((QQ => "none" !== QQ.role)).sort(((QQ, FQ) => wQ.indexOf(QQ.role) - wQ.indexOf(FQ.role) || FQ.at - QQ.at));
      return [...QQ.some((QQ => QQ.name === FQ)) && null !== FQ ? [FQ] : [], ...[...qQ, ...oQ].map((QQ => QQ.name))]
    }

    function cQ(QQ, FQ) {
      const wQ = QQ.banned.map((QQ => QQ.name)),
        LQ = new Set(wQ);
      return {
        here: pQ(QQ.here, FQ, QQ.roles.map((QQ => QQ.role))),
        away: QQ.away.filter((QQ => !LQ.has(QQ.name))).map((QQ => QQ.name)),
        banned: wQ
      }
    }

    function CQ(QQ, FQ) {
      const wQ = QQ.here.find((QQ => QQ.name === FQ));
      if (wQ) return {
        section: "here",
        player: wQ
      };
      const LQ = QQ.banned.find((QQ => QQ.name === FQ));
      if (LQ) return {
        section: "banned",
        bannedAt: LQ.at
      };
      const qQ = QQ.away.find((QQ => QQ.name === FQ));
      return qQ ? {
        section: "away",
        player: qQ
      } : {
        section: "gone"
      }
    }
    const SQ = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var iQ = wQ(2545),
      WQ = wQ(36185),
      RQ = wQ(36353),
      OQ = wQ(3029),
      sQ = wQ(317);

    function rQ(QQ, FQ, wQ) {
      return FQ.map((FQ => {
        if ("string" === typeof FQ) return FQ;
        const LQ = "str" in FQ ? FQ.str : FQ;
        return "string" === typeof LQ ? LQ : "entityName" in LQ ? LQ.entityName : "translationKey" in LQ ? QQ(LQ.translationKey, (0, bQ.m)(LQ.params, wQ)) : ""
      })).join("")
    }

    function IQ(QQ, FQ, wQ, LQ, qQ) {
      return qQ - LQ < 6e4 ? QQ(`${wQ}JustNow`) : QQ(wQ, {
        time: (0, sQ.db)((0, bQ.k)(FQ, wQ), LQ, qQ)
      })
    }
    var UQ = wQ(1873),
      NQ = wQ(1682),
      TQ = wQ(1107);

    function KQ(QQ) {
      let {
        status: FQ
      } = QQ;
      return (0, TQ.jsx)("span", {
        className: HQ()("LobbyManageStatus", {
          LobbyManageStatusRefused: !FQ.ok
        }),
        children: (0, TQ.jsx)(UQ.e, {
          text: FQ.text
        })
      })
    }

    function zQ(QQ) {
      let {
        names: FQ,
        cap: wQ,
        filterFrom: qQ,
        moreLabel: oQ,
        reveal: DQ = null,
        renderRow: kQ
      } = QQ;
      const {
        t: vQ
      } = (0, bQ.y)(), [mQ, uQ] = (0, LQ.useState)(!1), [HQ, xQ] = (0, LQ.useState)(""), tQ = mQ || null !== DQ && FQ.indexOf(DQ) >= wQ, eQ = (tQ || FQ.length <= wQ) && null !== qQ && FQ.length > qQ, MQ = HQ.trim().toLowerCase();
      let GQ = tQ ? FQ : FQ.slice(0, wQ);
      return eQ && "" !== MQ && (GQ = GQ.filter((QQ => QQ.toLowerCase().includes(MQ)))), (0, TQ.jsxs)(TQ.Fragment, {
        children: [eQ && (0, TQ.jsx)(NQ.b, {
          className: "LobbyManageFilter",
          placeholderText: vQ("lobbyManage:findName"),
          ariaLabel: vQ("lobbyManage:findName"),
          onValueChange: QQ => {
            xQ(QQ)
          }
        }), GQ.length > 0 && (0, TQ.jsx)("div", {
          className: "PlayerRows",
          children: GQ.map(((QQ, FQ) => kQ(QQ, GQ.length - FQ)))
        }), !tQ && FQ.length > wQ && (0, TQ.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, TQ.jsx)(AQ.b, {
            label: (0, TQ.jsxs)(TQ.Fragment, {
              children: [oQ, " ", (0, TQ.jsx)(YQ.c, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              uQ(!0)
            }
          })
        })]
      })
    }

    function lQ(QQ) {
      let {
        value: FQ,
        placeholder: wQ,
        ariaLabel: qQ,
        maxLength: oQ,
        wide: DQ = !1,
        onSave: kQ
      } = QQ;
      const vQ = (0, LQ.useRef)(null),
        [mQ, uQ] = (0, LQ.useState)(0),
        bQ = (0, LQ.useRef)(!0),
        YQ = (0, LQ.useRef)(null),
        xQ = (0, LQ.useRef)({
          value: FQ,
          onSave: kQ
        });
      xQ.current = {
        value: FQ,
        onSave: kQ
      };
      const AQ = () => {
        const QQ = YQ.current;
        YQ.current = null, null !== QQ && QQ !== xQ.current.value && xQ.current.onSave(QQ).then((() => {
          bQ.current && uQ((QQ => QQ + 1))
        }))
      };
      return (0, LQ.useEffect)((() => {
        null === YQ.current && vQ.current && (vQ.current.value = FQ)
      }), [FQ, mQ]), (0, LQ.useEffect)((() => () => {
        bQ.current = !1, AQ()
      }), []), (0, TQ.jsx)("div", {
        className: HQ()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: DQ
        }),
        onBlur: AQ,
        children: (0, TQ.jsx)(NQ.b, {
          domRef: vQ,
          defaultValue: FQ,
          placeholderText: wQ,
          ariaLabel: qQ,
          maxLength: oQ,
          onValueChange: QQ => {
            YQ.current = QQ
          },
          onEnter: AQ
        })
      })
    }
    const jQ = ["mod", "coOwner"],
      aQ = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function XQ(QQ) {
      var FQ, wQ, oQ;
      let {
        name: DQ,
        place: kQ,
        openedIn: vQ,
        isYou: uQ,
        manage: HQ,
        hiddenNames: xQ,
        zIndex: AQ
      } = QQ;
      const {
        t: tQ,
        selectedLanguage: eQ
      } = (0, bQ.y)(), [MQ, pQ] = (0, LQ.useState)(null), {
        state: cQ
      } = HQ, CQ = `player:${DQ}`, sQ = function(QQ, FQ) {
        if ("banned" === QQ.section) return {
          ...SQ,
          unban: !0
        };
        if ("gone" === QQ.section) return SQ;
        const {
          player: wQ
        } = QQ, LQ = "here" === QQ.section, qQ = LQ || "none" !== wQ.role ? wQ.can.roles : [];
        return {
          gamemode: LQ && FQ && null !== wQ.gamemode && wQ.can.gamemode,
          roles: qQ,
          fixedRole: 0 === qQ.length && "none" !== wQ.role ? wQ.role : null,
          kick: LQ && wQ.can.kick,
          ban: wQ.can.ban,
          unban: !1
        }
      }(kQ, null !== cQ.gamemodes), UQ = HQ.statusOf(CQ), NQ = HQ.isPending(CQ), zQ = mQ(), lQ = Date.now(), XQ = QQ => {
        var FQ, wQ;
        return null !== (FQ = null === (wQ = (QQ => cQ.roles.find((FQ => FQ.role === QQ)))(QQ)) || void 0 === wQ ? void 0 : wQ.label) && void 0 !== FQ ? FQ : QQ
      }, fQ = QQ => {
        const FQ = aQ[QQ];
        return void 0 === FQ ? void 0 : tQ(FQ)
      }, VQ = "here" === kQ.section || "away" === kQ.section ? kQ.player : null, hQ = "here" === kQ.section ? kQ.player.id : null, {
        playerSocialPreview: JQ,
        isFriend: EQ
      } = null === hQ ? {
        playerSocialPreview: (0, RQ.e)(DQ, null),
        isFriend: !1
      } : (0, WQ.c)(hQ, DQ), nQ = function() {
        HQ.send(...arguments)
      }, gQ = (QQ, FQ) => {
        zQ.hold("role", QQ, HQ.send({
          type: "setRole",
          name: DQ,
          role: QQ
        }, CQ, FQ))
      };
      let PQ = null;
      if ("ban" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind)) PQ = tQ("lobbyManageEntry:banConfirm", {
        playerName: DQ
      });
      else if ("role" === (null === MQ || void 0 === MQ ? void 0 : MQ.kind)) {
        var ZQ;
        PQ = `${tQ("lobbyManage:roleConfirm",{playerName:DQ,role:XQ(MQ.role)})} ${null!==(ZQ=fQ(MQ.role))&&void 0!==ZQ?ZQ:""}`
      } else if (UQ) PQ = (0, TQ.jsx)(KQ, {
        status: UQ
      });
      else if (uQ) PQ = tQ("lobbyManage:you");
      else if ("here" === kQ.section) "none" === kQ.player.role && lQ - kQ.player.at < 6e5 && (PQ = IQ(tQ, eQ.code, "lobbyManage:joinedAgo", kQ.player.at, lQ));
      else if ("away" === kQ.section) {
        if (kQ.player.at > 0) {
          const QQ = "kicked" === kQ.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          PQ = IQ(tQ, eQ.code, QQ, kQ.player.at, lQ)
        }
      } else "banned" === kQ.section ? null !== kQ.bannedAt && (PQ = IQ(tQ, eQ.code, "lobbyManage:bannedAgo", kQ.bannedAt, lQ)) : "banned" === vQ && (PQ = tQ("lobbyManageEntry:unbanned"));
      return (0, TQ.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": DQ,
        children: (0, TQ.jsxs)(iQ.f, {
          playerSocialPreview: JQ,
          isFriend: EQ,
          status: PQ,
          opensProfileCard: !uQ && (0, WQ.g)(!0, DQ, xQ),
          zIndex: AQ,
          children: [null !== MQ && (0, TQ.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === MQ.kind && (0, TQ.jsxs)(GQ.F, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                pQ(null), nQ({
                  type: "ban",
                  name: DQ
                }, CQ)
              },
              children: [(0, TQ.jsx)(YQ.c, {
                name: "gavel"
              }), (0, TQ.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: tQ("lobbyManageEntry:ban")
              })]
            }), "role" === MQ.kind && (0, TQ.jsx)(GQ.f, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: MQ.role
              },
              onClick: () => {
                pQ(null), gQ(MQ.role)
              },
              children: tQ("lobbyManage:makeRole", {
                role: XQ(MQ.role)
              })
            }), (0, TQ.jsx)(GQ.i, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                pQ(null)
              },
              children: tQ("general:cancel")
            })]
          }), null === MQ && (0, TQ.jsxs)(TQ.Fragment, {
            children: [(0, TQ.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [sQ.gamemode && null !== VQ && (0, TQ.jsx)(OQ.d, {
                options: (null !== (FQ = cQ.gamemodes) && void 0 !== FQ ? FQ : []).map((QQ => ({
                  value: QQ.value,
                  label: rQ(tQ, QQ.label, xQ)
                }))),
                value: null !== (wQ = zQ.get("gamemode")) && void 0 !== wQ ? wQ : VQ.gamemode,
                disabled: NQ,
                onChange: QQ => {
                  (0, qQ.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: QQ.value
                  }), zQ.hold("gamemode", QQ.value, HQ.send({
                    type: "setGamemode",
                    name: DQ,
                    gamemode: QQ.value
                  }, CQ))
                }
              }), sQ.roles.length > 0 && null !== VQ && (0, TQ.jsx)(OQ.d, {
                options: [...cQ.roles].reverse().filter((QQ => sQ.roles.includes(QQ.role))).map((QQ => ({
                  value: QQ.role,
                  label: QQ.label
                }))),
                value: null !== (oQ = zQ.get("role")) && void 0 !== oQ ? oQ : VQ.role,
                disabled: NQ,
                onChange: QQ => {
                  var FQ;
                  (FQ = QQ.value) !== (null === VQ || void 0 === VQ ? void 0 : VQ.role) && (jQ.includes(FQ) ? pQ({
                    kind: "role",
                    role: FQ
                  }) : ((0, qQ.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: FQ
                  }), gQ(FQ, fQ(FQ))))
                }
              }), null !== sQ.fixedRole && (0, TQ.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: XQ(sQ.fixedRole)
              })]
            }), (0, TQ.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [sQ.kick && (0, TQ.jsxs)(GQ.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${tQ("lobbyManageEntry:kick")} ${DQ}`,
                disabled: NQ,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  nQ({
                    type: "kick",
                    name: DQ
                  }, CQ)
                },
                children: [(0, TQ.jsx)(YQ.c, {
                  name: "person-falling-burst"
                }), (0, TQ.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: tQ("lobbyManageEntry:kick")
                })]
              }), sQ.ban && (0, TQ.jsxs)(GQ.G, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${tQ("lobbyManageEntry:ban")} ${DQ}`,
                disabled: NQ,
                padDestructive: !0,
                onClick: () => {
                  pQ({
                    kind: "ban"
                  })
                },
                children: [(0, TQ.jsx)(YQ.c, {
                  name: "gavel"
                }), (0, TQ.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: tQ("lobbyManageEntry:ban")
                })]
              }), sQ.unban && (0, TQ.jsxs)(GQ.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${tQ("lobbyManageEntry:unban")} ${DQ}`,
                disabled: NQ,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  nQ({
                    type: "unban",
                    name: DQ
                  }, CQ)
                },
                children: [(0, TQ.jsx)(YQ.c, {
                  name: "user-unlock"
                }), (0, TQ.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: tQ("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function fQ(QQ) {
      var FQ, wQ, qQ, oQ;
      let {
        manage: DQ,
        focusRequest: kQ,
        onFocused: vQ
      } = QQ;
      const {
        t: mQ
      } = (0, bQ.y)(), uQ = (0, MQ.k)("players"), HQ = (0, MQ.k)("hiddenPlayerNames"), xQ = (0, LQ.useRef)(null), {
        state: tQ
      } = DQ, eQ = null === uQ.localId ? null : null !== (FQ = null === (wQ = uQ.byId[uQ.localId]) || void 0 === wQ ? void 0 : wQ.name) && void 0 !== FQ ? FQ : null, [pQ] = (0, LQ.useState)((() => cQ(tQ, eQ))), SQ = function(QQ, FQ, wQ) {
        const LQ = new Set([...QQ.here, ...QQ.away, ...QQ.banned]),
          qQ = cQ(FQ, wQ),
          oQ = FQ => {
            const wQ = qQ[FQ].filter((QQ => !LQ.has(QQ)));
            for (const QQ of wQ) LQ.add(QQ);
            return [...QQ[FQ], ...wQ]
          };
        return {
          here: oQ("here"),
          away: oQ("away"),
          banned: oQ("banned")
        }
      }(pQ, tQ, eQ), [iQ, WQ] = (0, LQ.useState)(!1), RQ = function(QQ, FQ) {
        return QQ.here.filter((QQ => QQ.name !== FQ && "none" === QQ.role && QQ.can.kick)).length
      }(tQ, eQ), OQ = DQ.statusOf("kickAll");
      (0, LQ.useEffect)((() => {
        var QQ, FQ;
        if (null === kQ) return;
        const wQ = null === (QQ = xQ.current) || void 0 === QQ ? void 0 : QQ.querySelector(`[data-lobby-manage-row="${CSS.escape(kQ.name)}"]`);
        null === wQ || void 0 === wQ || wQ.scrollIntoView({
          block: "center"
        }), null === wQ || void 0 === wQ || null === (FQ = wQ.querySelector(".ProfilePreview")) || void 0 === FQ || FQ.focus({
          preventScroll: !0
        }), vQ(kQ.seq)
      }), [null === kQ || void 0 === kQ ? void 0 : kQ.seq]);
      const sQ = QQ => (FQ, wQ) => (0, TQ.jsx)(XQ, {
        name: FQ,
        place: CQ(tQ, FQ),
        openedIn: QQ,
        isYou: FQ === eQ,
        manage: DQ,
        hiddenNames: HQ,
        zIndex: wQ
      }, FQ);
      return (0, TQ.jsxs)("div", {
        ref: xQ,
        className: "LobbyManagePage",
        children: [SQ.here.length > 0 && (0, TQ.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, TQ.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, TQ.jsx)(AQ.b, {
              label: mQ("lobbyManage:here"),
              meta: tQ.here.length
            }), RQ >= 2 && !iQ && (0, TQ.jsxs)(GQ.G, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: DQ.isPending("kickAll"),
              onClick: () => {
                WQ(!0)
              },
              children: [(0, TQ.jsx)(YQ.c, {
                name: "person-falling-burst"
              }), " ", mQ("lobbyManage:kickAll")]
            })]
          }), iQ && RQ >= 2 && (0, TQ.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, TQ.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: mQ("lobbyManage:kickAllConfirm", {
                count: RQ
              })
            }), (0, TQ.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, TQ.jsx)(GQ.F, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  WQ(!1), DQ.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: mQ("lobbyManage:kickAll")
              }), (0, TQ.jsx)(GQ.i, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  WQ(!1)
                },
                children: mQ("general:cancel")
              })]
            })]
          }), OQ && (0, TQ.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, TQ.jsx)(KQ, {
              status: OQ
            })
          }), (0, TQ.jsx)(zQ, {
            names: SQ.here,
            cap: SQ.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: sQ("here")
          })]
        }), SQ.away.length > 0 && (0, TQ.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, TQ.jsx)(AQ.b, {
            label: mQ("lobbyManage:notHere"),
            meta: SQ.away.length
          }), (0, TQ.jsx)(zQ, {
            names: SQ.away,
            cap: 5,
            filterFrom: null,
            moreLabel: mQ("lobbyManage:allCount", {
              count: SQ.away.length
            }),
            reveal: null !== (qQ = null === kQ || void 0 === kQ ? void 0 : kQ.name) && void 0 !== qQ ? qQ : null,
            renderRow: sQ("away")
          })]
        }), SQ.banned.length > 0 && (0, TQ.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, TQ.jsx)(AQ.b, {
            label: mQ("lobbyManage:banned"),
            meta: SQ.banned.length
          }), (0, TQ.jsx)(zQ, {
            names: SQ.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: mQ("lobbyManage:allCount", {
              count: SQ.banned.length
            }),
            reveal: null !== (oQ = null === kQ || void 0 === kQ ? void 0 : kQ.name) && void 0 !== oQ ? oQ : null,
            renderRow: sQ("banned")
          })]
        })]
      })
    }
    var VQ = wQ(4475),
      hQ = wQ(1645),
      JQ = wQ(36329),
      EQ = wQ(36349),
      nQ = wQ(36341),
      gQ = wQ(36335),
      PQ = wQ(36369),
      ZQ = wQ(36356),
      yQ = wQ(36362);

    function BQ(QQ) {
      const FQ = new Set;
      for (const wQ of QQ) FQ.add(wQ.toLowerCase());
      return FQ
    }

    function dQ(QQ) {
      var FQ, wQ;
      let {
        state: qQ,
        lobbyName: oQ,
        listed: DQ,
        isListed: kQ,
        nG: vQ,
        uC: mQ,
        statusOf: uQ
      } = QQ;
      const {
        t: HQ,
        selectedLanguage: YQ
      } = (0, bQ.y)(), xQ = (0, hQ.m)(), tQ = (0, MQ.k)("players"), eQ = null === tQ.localId ? null : null !== (FQ = null === (wQ = tQ.byId[tQ.localId]) || void 0 === wQ ? void 0 : wQ.name) && void 0 !== FQ ? FQ : null, GQ = (0, LQ.useMemo)((() => (0, gQ.g)(xQ.friends, oQ, qQ.here.map((QQ => QQ.name)))), [xQ.friends, oQ, qQ.here]), pQ = new Map(GQ.map((QQ => [QQ.friend.name.toLowerCase(), QQ]))), cQ = function(QQ) {
        let {
          refused: FQ,
          listed: wQ,
          here: LQ,
          friends: qQ,
          excluded: oQ
        } = QQ;
        const DQ = BQ(oQ),
          kQ = QQ => QQ.filter((QQ => {
            const FQ = QQ.toLowerCase();
            return !DQ.has(FQ) && (DQ.add(FQ), !0)
          }));
        return {
          added: [],
          refused: kQ(FQ),
          listed: kQ(wQ),
          suggested: kQ([...LQ, ...qQ])
        }
      }({
        refused: qQ.refused.map((QQ => QQ.name)),
        listed: DQ,
        here: qQ.here.map((QQ => QQ.name)),
        friends: GQ.flatMap((QQ => "here" === QQ.place ? [] : [QQ.friend.name])),
        excluded: [...null === eQ ? [] : [eQ], ...[...qQ.here, ...qQ.away].flatMap((QQ => "none" === QQ.role || (0, gQ.h)(DQ, QQ.name) ? [] : [QQ.name]))]
      }), [CQ] = (0, LQ.useState)(cQ), [SQ, iQ] = (0, LQ.useState)([]), OQ = function(QQ, FQ, wQ) {
        const LQ = BQ(wQ),
          qQ = BQ([...wQ, ...QQ.refused, ...QQ.listed, ...QQ.suggested]),
          oQ = wQ => [...QQ[wQ].filter((QQ => !LQ.has(QQ.toLowerCase()))), ...FQ[wQ].filter((QQ => {
            const FQ = QQ.toLowerCase();
            return !qQ.has(FQ) && (qQ.add(FQ), !0)
          }))];
        return {
          added: [...wQ],
          refused: oQ("refused"),
          listed: oQ("listed"),
          suggested: oQ("suggested")
        }
      }(CQ, cQ, SQ), sQ = (QQ, FQ) => {
        var wQ, LQ;
        const oQ = QQ.toLowerCase(),
          DQ = pQ.get(oQ),
          mQ = qQ.here.find((QQ => QQ.name.toLowerCase() === oQ)),
          bQ = qQ.refused.find((QQ => QQ.name.toLowerCase() === oQ)),
          xQ = null !== (wQ = null === uQ || void 0 === uQ ? void 0 : uQ(QQ)) && void 0 !== wQ ? wQ : null;
        let AQ = null;
        xQ ? AQ = (0, TQ.jsx)(KQ, {
          status: xQ
        }) : bQ ? AQ = IQ(HQ, YQ.code, "lobbyManage:triedToJoinAgo", bQ.at, Date.now()) : DQ && mQ ? AQ = HQ("lobbyManage:friendHere") : DQ ? AQ = "online" === DQ.place ? HQ("lobbyManage:friendOnline") : HQ("lobbyManage:friend") : mQ && (AQ = HQ("lobbyManage:hereStatus"));
        let tQ = null !== (LQ = null === DQ || void 0 === DQ ? void 0 : DQ.friend) && void 0 !== LQ ? LQ : (0, RQ.e)(QQ, null);
        return !DQ && null !== mQ && void 0 !== mQ && mQ.id && (tQ = (0, WQ.c)(mQ.id, mQ.name).playerSocialPreview), (0, TQ.jsx)(ZQ.d, {
          playerSocialPreview: tQ,
          isFriend: void 0 !== DQ,
          hideFriendBadge: !0,
          status: AQ,
          zIndex: FQ,
          fH: {
            on: kQ(QQ),
            onChange: FQ => {
              vQ(QQ, FQ)
            }
          }
        }, oQ)
      }, rQ = [...OQ.added, ...OQ.refused];
      return (0, TQ.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, TQ.jsx)(AQ.b, {
          label: HQ("worldSocial:whitelist"),
          meta: DQ.length
        }), (0, TQ.jsx)(yQ.d, {
          label: HQ("lobbyManage:add"),
          icon: "user-check",
          placeholder: HQ("socialBar:enterPlayerName"),
          onSubmit: async QQ => {
            const FQ = await mQ(QQ);
            return FQ.ok && iQ((FQ => [QQ, ...FQ])), FQ
          }
        }), rQ.length > 0 && (0, TQ.jsx)("div", {
          className: "PlayerRows",
          children: rQ.map(((QQ, FQ) => sQ(QQ, rQ.length - FQ)))
        }), (0, TQ.jsx)(zQ, {
          names: OQ.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: HQ("lobbyManage:allOnWhitelist", {
            count: OQ.listed.length
          }),
          renderRow: sQ
        }), (0, TQ.jsx)(zQ, {
          names: OQ.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: HQ("lobbyManage:allCount", {
            count: OQ.suggested.length
          }),
          renderRow: sQ
        })]
      })
    }

    function QF(QQ) {
      let {
        manage: FQ,
        listing: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, bQ.y)(), oQ = (QQ, wQ) => ((0, qQ.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: QQ
      }), FQ.send({
        type: "setListing",
        field: QQ,
        value: wQ
      }, `listing:${QQ}`)), DQ = QQ => {
        const wQ = FQ.statusOf(`listing:${QQ}`);
        return wQ && !wQ.ok && (0, TQ.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, TQ.jsx)(KQ, {
            status: wQ
          })
        })
      };
      return (0, TQ.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, TQ.jsx)(AQ.b, {
          label: LQ("lobbyManage:inWorldsList")
        }), (0, TQ.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, TQ.jsx)("div", {
            className: "SliderText",
            children: LQ("lobbyManage:description")
          }), (0, TQ.jsx)(lQ, {
            value: wQ.description,
            ariaLabel: LQ("lobbyManage:description"),
            wide: !0,
            onSave: QQ => oQ("description", QQ)
          })]
        }), DQ("description"), (0, TQ.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, TQ.jsx)("div", {
            className: "SliderText",
            children: LQ("lobbyManage:emojis")
          }), (0, TQ.jsx)(lQ, {
            value: wQ.emojis,
            ariaLabel: LQ("lobbyManage:emojis"),
            onSave: QQ => oQ("emojis", QQ)
          })]
        }), DQ("emojis"), (0, TQ.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, TQ.jsx)("div", {
            className: "SliderText",
            children: LQ("lobbyManage:colour")
          }), (0, TQ.jsx)(FF, {
            value: wQ.colour,
            ariaLabel: LQ("lobbyManage:colour"),
            onSave: QQ => {
              oQ("colour", QQ)
            }
          })]
        }), DQ("colour")]
      })
    }

    function FF(QQ) {
      let {
        value: FQ,
        ariaLabel: wQ,
        onSave: qQ
      } = QQ;
      const oQ = (0, LQ.useRef)(null),
        DQ = (0, LQ.useRef)({
          value: FQ,
          onSave: qQ
        });
      DQ.current = {
        value: FQ,
        onSave: qQ
      };
      const kQ = (0, LQ.useRef)(null),
        vQ = (0, LQ.useRef)(!1),
        mQ = QQ => {
          vQ.current && QQ.value !== DQ.current.value && QQ.value !== kQ.current && (kQ.current = QQ.value, DQ.current.onSave(QQ.value))
        };
      return (0, LQ.useEffect)((() => {
        oQ.current && document.activeElement !== oQ.current && (oQ.current.value = FQ)
      }), [FQ]), (0, LQ.useEffect)((() => {
        const QQ = oQ.current,
          FQ = () => {
            mQ(QQ)
          };
        return QQ.addEventListener("change", FQ), () => {
          QQ.removeEventListener("change", FQ), mQ(QQ)
        }
      }), []), (0, TQ.jsx)("input", {
        ref: oQ,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: FQ,
        "aria-label": wQ,
        onInput: () => {
          vQ.current = !0
        },
        onBlur: QQ => {
          mQ(QQ.currentTarget)
        }
      })
    }

    function wF(QQ) {
      let {
        manage: FQ
      } = QQ;
      const {
        lobbyName: wQ,
        shownLobbyName: LQ
      } = (0, MQ.k)("connectedGame");
      return FQ.state.you.canSetVisibility && null !== wQ ? (0, TQ.jsx)(qF, {
        manage: FQ,
        lobbyName: wQ,
        worldCode: null !== LQ && void 0 !== LQ ? LQ : wQ
      }, wQ) : (0, TQ.jsx)(oF, {
        manage: FQ,
        lobbyName: null !== wQ && void 0 !== wQ ? wQ : ""
      })
    }

    function LF(QQ) {
      return QQ.map((QQ => QQ.toLowerCase())).sort().join(",")
    }

    function qF(QQ) {
      var FQ;
      let {
        manage: wQ,
        lobbyName: oQ,
        worldCode: DQ
      } = QQ;
      const {
        t: kQ
      } = (0, bQ.y)(), {
        settings: vQ,
        loading: mQ,
        change: uQ,
        retry: HQ,
        refresh: YQ
      } = (0, JQ.h)(oQ), tQ = (0, hQ.m)(), {
        state: eQ
      } = wQ, MQ = (0, LQ.useRef)(vQ);
      MQ.current = vQ;
      const pQ = LF(null !== (FQ = eQ.whitelist) && void 0 !== FQ ? FQ : []),
        cQ = null !== eQ.whitelist;
      (0, LQ.useEffect)((() => {
        const QQ = MQ.current;
        null !== QQ && (QQ.visibility !== eQ.visibility || cQ && LF(QQ.whitelist) !== pQ) && YQ()
      }), [eQ.visibility, pQ, cQ, YQ]);
      const CQ = async (QQ, FQ) => {
        let wQ = null;
        return await uQ(QQ, FQ, {
          quiet: !0,
          onAnswer: QQ => {
            wQ = QQ
          }
        }), wQ
      }, SQ = (QQ, FQ) => {
        null !== FQ && "error" in FQ && wQ.showStatus(QQ, {
          ok: !1,
          text: [kQ(FQ.error)]
        })
      }, iQ = async QQ => {
        if (null === vQ || QQ === vQ.visibility) return;
        (0, qQ.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: QQ
        });
        const FQ = "whitelist" === QQ ? (0, gQ.f)((0, gQ.g)(tQ.friends, oQ, eQ.here.map((QQ => QQ.name))), (0, PQ.c)(oQ), vQ.whitelist) : [],
          wQ = await CQ({
            setVisibility: QQ
          }, (FQ => ({
            ...FQ,
            visibility: QQ
          })));
        SQ("mode", wQ), null === wQ || "error" in wQ || await (async QQ => {
          for (const FQ of (0, gQ.j)(QQ, VQ.y))
            if (!await uQ({
                whitelistAdd: FQ
              }, (QQ => (0, gQ.n)(QQ, FQ, !0)))) return !1;
          return !0
        })(FQ)
      }, WQ = (0, LQ.useMemo)((() => {
        var QQ;
        if (null === vQ) return [];
        const FQ = null !== (QQ = eQ.whitelist) && void 0 !== QQ ? QQ : [];
        return [...FQ.filter((QQ => (0, gQ.h)(vQ.whitelist, QQ))), ...vQ.whitelist.filter((QQ => !(0, gQ.h)(FQ, QQ)))]
      }), [vQ, eQ.whitelist]), RQ = wQ.statusOf("mode");
      return (0, TQ.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, TQ.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, TQ.jsx)(AQ.b, {
            label: kQ("worldSocial:whoCanJoin")
          }), null === vQ && mQ && (0, TQ.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, TQ.jsx)(xQ.c, {})
          }), null === vQ && !mQ && (0, TQ.jsx)(GQ.i, {
            className: "SmallTextLight",
            onClick: HQ,
            children: kQ("worldSocial:loadFailed")
          }), null !== vQ && (0, TQ.jsx)(EQ.d, {
            visibility: vQ.visibility,
            onPick: QQ => {
              iQ(QQ)
            }
          }), RQ && (0, TQ.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, TQ.jsx)(KQ, {
              status: RQ
            })
          }), null !== vQ && "private" !== vQ.visibility && (0, TQ.jsx)(nQ.e, {
            worldCode: DQ,
            message: null
          })]
        }), "whitelist" === (null === vQ || void 0 === vQ ? void 0 : vQ.visibility) && (0, TQ.jsx)(dQ, {
          state: eQ,
          lobbyName: oQ,
          listed: WQ,
          isListed: QQ => (0, gQ.h)(vQ.whitelist, QQ),
          nG: (QQ, FQ) => {
            (0, qQ.reportAnalyticsClick)(FQ ? {
              id: "lobby_manage.whitelist_add",
              value: "fH"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), CQ(FQ ? {
              whitelistAdd: [QQ]
            } : {
              whitelistRemove: QQ
            }, (wQ => (0, gQ.n)(wQ, [QQ], FQ))).then((FQ => {
              SQ(`whitelist:${QQ.toLowerCase()}`, FQ)
            }))
          },
          uC: async QQ => {
            (0, qQ.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const FQ = await CQ({
              whitelistAdd: [QQ]
            }, (FQ => (0, gQ.n)(FQ, [QQ], !0)));
            return null === FQ ? {
              ok: !1,
              error: kQ("worldSocial:changeFailed")
            } : "error" in FQ ? {
              ok: !1,
              error: kQ(FQ.error)
            } : (0, gQ.h)(FQ.notFound, QQ) ? {
              ok: !1,
              error: kQ("lobbyManage:noPlayerCalled", {
                playerName: QQ
              })
            } : {
              ok: !0
            }
          },
          statusOf: QQ => wQ.statusOf(`whitelist:${QQ.toLowerCase()}`)
        }), "public" === (null === vQ || void 0 === vQ ? void 0 : vQ.visibility) && null !== eQ.listing && (0, TQ.jsx)(QF, {
          manage: wQ,
          listing: eQ.listing
        })]
      })
    }

    function oF(QQ) {
      var FQ;
      let {
        manage: wQ,
        lobbyName: LQ
      } = QQ;
      const {
        t: oQ
      } = (0, bQ.y)(), {
        state: DQ
      } = wQ, kQ = mQ(), vQ = null !== (FQ = DQ.whitelist) && void 0 !== FQ ? FQ : [];
      return (0, TQ.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, TQ.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, TQ.jsx)(AQ.b, {
            label: oQ("worldSocial:whoCanJoin")
          }), (0, TQ.jsx)("div", {
            className: "LobbyManageModeText",
            children: oQ(`worldSocial:${DQ.visibility}`)
          })]
        }), "whitelist" === DQ.visibility && DQ.you.canEditWhitelist && (0, TQ.jsx)(dQ, {
          state: DQ,
          lobbyName: LQ,
          listed: vQ,
          isListed: QQ => {
            var FQ;
            return null !== (FQ = kQ.get(QQ.toLowerCase())) && void 0 !== FQ ? FQ : (0, gQ.h)(vQ, QQ)
          },
          nG: (QQ, FQ) => {
            (0, qQ.reportAnalyticsClick)(FQ ? {
              id: "lobby_manage.whitelist_add",
              value: "fH"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const LQ = QQ.toLowerCase();
            kQ.hold(LQ, FQ, wQ.send(FQ ? {
              type: "whitelistAdd",
              names: [QQ]
            } : {
              type: "whitelistRemove",
              name: QQ
            }, `whitelist:${LQ}`))
          },
          uC: async QQ => {
            (0, qQ.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const FQ = await wQ.send({
              type: "whitelistAdd",
              names: [QQ]
            }, "whitelist-field");
            return FQ.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, TQ.jsx)(UQ.e, {
                text: FQ.message
              })
            }
          },
          statusOf: QQ => wQ.statusOf(`whitelist:${QQ.toLowerCase()}`)
        }), "public" === DQ.visibility && null !== DQ.listing && (0, TQ.jsx)(QF, {
          manage: wQ,
          listing: DQ.listing
        })]
      })
    }
    var DF = wQ(4837),
      kF = wQ(1367);
    const vF = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const mF = (0, LQ.memo)((function(QQ) {
      var FQ;
      let {
        rule: wQ,
        value: LQ,
        status: qQ,
        pending: oQ,
        hiddenNames: DQ,
        dW: kQ,
        onAction: vQ
      } = QQ;
      const {
        t: mQ
      } = (0, bQ.y)(), uQ = QQ => kQ(wQ, QQ), HQ = (QQ, FQ) => {
        vQ(wQ, QQ, FQ)
      }, YQ = rQ(mQ, wQ.label, DQ), xQ = wQ.info ? rQ(mQ, wQ.info, DQ) : void 0, AQ = wQ.placeholder ? rQ(mQ, wQ.placeholder, DQ) : void 0, tQ = (null !== (FQ = wQ.options) && void 0 !== FQ ? FQ : []).map((QQ => ({
        value: QQ.value,
        label: rQ(mQ, QQ.label, DQ)
      }))), eQ = Math.max(0, ...tQ.map((QQ => function(QQ) {
        let FQ = 0;
        for (const wQ of QQ) FQ += vF.test(wQ) ? 2 : 1;
        return FQ
      }(QQ.label)))), MQ = qQ && (0, TQ.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, TQ.jsx)(KQ, {
          status: qQ
        })
      }), pQ = (0, TQ.jsxs)("div", {
        className: "SliderText",
        children: [YQ, void 0 !== xQ && (0, TQ.jsx)(kF.b, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: xQ
        })]
      });
      return "toggle" === wQ.kind ? (0, TQ.jsxs)(TQ.Fragment, {
        children: [(0, TQ.jsx)(DF.e, {
          label: YQ,
          checked: !0 === LQ,
          circleInfoText: xQ,
          disabled: oQ,
          onClick: uQ
        }), MQ]
      }) : "choice" === wQ.kind && tQ.length <= 3 ? (0, TQ.jsxs)(TQ.Fragment, {
        children: [(0, TQ.jsx)(DF.f, {
          label: YQ,
          options: tQ,
          value: String(LQ),
          circleInfoText: xQ,
          onChange: uQ
        }), MQ]
      }) : (0, TQ.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [pQ, "choice" === wQ.kind && (0, TQ.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": eQ
          },
          children: (0, TQ.jsx)(OQ.d, {
            options: tQ,
            value: String(LQ),
            disabled: oQ,
            onChange: QQ => {
              uQ(QQ.value)
            }
          })
        }), ("number" === wQ.kind || "text" === wQ.kind) && (0, TQ.jsx)(lQ, {
          value: null === LQ ? "" : String(LQ),
          placeholder: AQ,
          ariaLabel: YQ,
          onSave: QQ => {
            const FQ = QQ.trim(),
              LQ = Number(FQ);
            return uQ("number" === wQ.kind && "" !== FQ && Number.isFinite(LQ) ? LQ : FQ)
          }
        }), "action" === wQ.kind && (0, TQ.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [tQ.length > 3 && (0, TQ.jsx)(OQ.d, {
            options: tQ,
            value: {
              value: "",
              label: null !== AQ && void 0 !== AQ ? AQ : YQ
            },
            disabled: oQ,
            onChange: QQ => {
              HQ(QQ.value)
            }
          }), tQ.length > 0 && tQ.length <= 3 && tQ.map((QQ => (0, TQ.jsx)(GQ.i, {
            className: "SmallTextLight",
            disabled: oQ,
            onClick: () => {
              HQ(QQ.value)
            },
            children: QQ.label
          }, QQ.value))), 0 === tQ.length && (0, TQ.jsx)(GQ.i, {
            className: "SmallTextLight",
            disabled: oQ,
            onClick: () => {
              HQ()
            },
            children: null !== AQ && void 0 !== AQ ? AQ : YQ
          })]
        }), "names" === wQ.kind && (0, TQ.jsx)(uF, {
          names: Array.isArray(LQ) ? LQ : [],
          pending: oQ,
          onAction: HQ
        }), MQ]
      })
    }));

    function uF(QQ) {
      let {
        names: FQ,
        pending: wQ,
        onAction: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, bQ.y)(), DQ = (0, LQ.useRef)(null), [kQ, vQ] = (0, LQ.useState)(""), mQ = () => {
        const QQ = kQ.trim();
        "" !== QQ && (qQ(QQ, "add"), DQ.current && (DQ.current.value = ""), vQ(""))
      };
      return (0, TQ.jsxs)("div", {
        className: "LobbyManageNames",
        children: [FQ.map((QQ => (0, TQ.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, TQ.jsx)("span", {
            className: "LobbyManageNameText",
            children: QQ
          }), (0, TQ.jsx)(GQ.i, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: oQ("lobbyManage:removeName", {
              name: QQ
            }),
            disabled: wQ,
            onClick: () => {
              qQ(QQ, "remove")
            },
            children: (0, TQ.jsx)(YQ.c, {
              name: "xmark"
            })
          })]
        }, QQ))), (0, TQ.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, TQ.jsx)(NQ.b, {
            domRef: DQ,
            placeholderText: oQ("lobbyManage:namePlaceholder"),
            ariaLabel: oQ("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: QQ => {
              vQ(QQ)
            },
            onEnter: mQ
          }), (0, TQ.jsx)(GQ.i, {
            className: "SmallTextLight",
            disabled: wQ || "" === kQ.trim(),
            onClick: mQ,
            children: oQ("lobbyManage:addHere")
          })]
        })]
      })
    }
    const HF = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function bF(QQ) {
      return HF.flatMap((FQ => {
        let {
          group: wQ
        } = FQ;
        return QQ.filter((QQ => QQ.group === wQ && void 0 === QQ.parent))
      }))
    }

    function YF(QQ) {
      let {
        manage: FQ,
        rowsShown: wQ
      } = QQ;
      const {
        t: oQ
      } = (0, bQ.y)(), DQ = (0, MQ.k)("hiddenPlayerNames"), {
        rules: kQ
      } = FQ.state, vQ = mQ(), uQ = new Set(bF(kQ).slice(0, wQ)), HQ = QQ => {
        const FQ = vQ.get(QQ.key);
        return void 0 === FQ ? QQ.value : FQ
      }, {
        hold: YQ
      } = vQ, xQ = (0, LQ.useCallback)(((QQ, wQ) => {
        (0, qQ.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: QQ.key
        });
        const LQ = FQ.send({
          type: "setRule",
          key: QQ.key,
          value: wQ
        }, `rule:${QQ.key}`);
        return YQ(QQ.key, wQ, LQ), LQ
      }), [FQ, YQ]), tQ = (0, LQ.useCallback)(((QQ, wQ, LQ) => {
        (0, qQ.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: QQ.key
        }), FQ.send({
          type: "ruleAction",
          key: QQ.key,
          ...void 0 === wQ ? {} : {
            arg: wQ
          },
          ...void 0 === LQ ? {} : {
            op: LQ
          }
        }, `rule:${QQ.key}`, void 0 === LQ ? oQ("lobbyManage:setJustNow") : void 0)
      }), [FQ, oQ]), eQ = QQ => {
        const wQ = `rule:${QQ.key}`;
        return (0, TQ.jsx)(mF, {
          rule: QQ,
          value: HQ(QQ),
          status: FQ.statusOf(wQ),
          pending: FQ.isPending(wQ),
          hiddenNames: DQ,
          dW: xQ,
          onAction: tQ
        }, QQ.key)
      };
      return (0, TQ.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: HF.map((QQ => {
          let {
            group: FQ,
            title: wQ
          } = QQ;
          const qQ = kQ.filter((QQ => QQ.group === FQ && uQ.has(QQ)));
          return 0 === qQ.length ? null : (0, TQ.jsxs)(LQ.Fragment, {
            children: [(0, TQ.jsx)(AQ.b, {
              label: oQ(wQ)
            }), qQ.map((QQ => {
              const FQ = kQ.filter((FQ => FQ.parent === QQ.key));
              return 0 === FQ.length || !0 !== HQ(QQ) ? eQ(QQ) : (0, TQ.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [eQ(QQ), FQ.map(eQ)]
              }, QQ.key)
            }))]
          }, FQ)
        }))
      })
    }
    const xF = {
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
      AF = 5,
      tF = (0, LQ.memo)((function(QQ) {
        let {
          page: FQ,
          manage: wQ,
          leaderboard: qQ,
          focusRequest: oQ,
          onFocused: DQ,
          ruleRowsShown: kQ
        } = QQ;
        return "leaderboard" === FQ ? (0, TQ.jsx)(LQ.Suspense, {
          fallback: (0, TQ.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, TQ.jsx)(xQ.c, {})
          }),
          children: qQ
        }) : "joining" === FQ ? (0, TQ.jsx)(wF, {
          manage: wQ
        }) : "rules" === FQ ? (0, TQ.jsx)(YF, {
          manage: wQ,
          rowsShown: kQ
        }) : (0, TQ.jsx)(fQ, {
          manage: wQ,
          focusRequest: oQ,
          onFocused: DQ
        })
      }));

    function eF(QQ) {
      let {
        page: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, bQ.y)(), LQ = xF[FQ];
      return (0, TQ.jsxs)(TQ.Fragment, {
        children: [(0, TQ.jsx)(YQ.c, {
          name: LQ.icon
        }), " ", (0, TQ.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: wQ(LQ.title)
        })]
      })
    }

    function MF(QQ) {
      var FQ;
      const {
        t: wQ
      } = (0, bQ.y)(), {
        pages: oQ,
        landing: DQ
      } = QQ, vQ = (0, LQ.useRef)(null), mQ = (0, LQ.useRef)(null), uQ = (0, LQ.useRef)(null), YQ = (0, LQ.useRef)(new Map), [xQ, MQ] = (0, LQ.useState)(null), GQ = (0, LQ.useRef)(xQ), pQ = (0, LQ.useRef)(0), [cQ, CQ] = (0, LQ.useState)(oQ[0]), SQ = null !== xQ && void 0 !== xQ ? xQ : oQ.includes(cQ) ? cQ : oQ[0], [iQ] = (0, LQ.useState)(null !== (FQ = null === DQ || void 0 === DQ ? void 0 : DQ.page) && void 0 !== FQ ? FQ : null), WQ = null !== iQ && oQ.includes(iQ) ? [iQ, ...oQ.filter((QQ => QQ !== iQ))] : oQ, RQ = Math.max(1, Math.ceil(bF(QQ.manage.state.rules).length / AF)), OQ = WQ.flatMap((QQ => "rules" === QQ ? Array(RQ).fill(QQ) : [QQ])), sQ = function(QQ, FQ) {
        const [wQ, qQ] = (0, LQ.useState)(QQ), oQ = wQ >= FQ;
        return oQ && wQ !== 1 / 0 && qQ(1 / 0), (0, LQ.useLayoutEffect)((() => {
          if (oQ) return;
          let QQ = !0;
          return (0, eQ.d)().then((() => {
            QQ && qQ((QQ => QQ + 1))
          })), () => {
            QQ = !1
          }
        }), [wQ, oQ]), oQ ? 1 / 0 : wQ
      }(1, OQ.length), rQ = OQ.slice(0, sQ), IQ = new Set(rQ), UQ = sQ < OQ.length, NQ = UQ ? rQ.filter((QQ => "rules" === QQ)).length * AF : 1 / 0, KQ = (0, LQ.useRef)(QQ.focusRequest);
      KQ.current = QQ.focusRequest;
      const zQ = QQ => {
          GQ.current = QQ, MQ(QQ)
        },
        lQ = () => {
          var QQ, FQ;
          vQ.current.style.scrollPaddingTop = `${null!==(QQ=null===(FQ=uQ.current)||void 0===FQ?void 0:FQ.offsetHeight)&&void 0!==QQ?QQ:0}px`
        },
        jQ = QQ => {
          const FQ = vQ.current,
            wQ = YQ.current.get(QQ);
          if (void 0 === wQ) return;
          const LQ = document.activeElement,
            qQ = KQ.current,
            oQ = null === qQ ? null : wQ.querySelector(`[data-lobby-manage-row="${CSS.escape(qQ.name)}"]`);
          lQ(), LQ instanceof HTMLElement && null !== oQ && void 0 !== oQ && oQ.contains(LQ) ? LQ.scrollIntoView({
            block: "center"
          }) : null === wQ.previousElementSibling ? FQ.scrollTop = 0 : wQ.scrollIntoView({
            block: "start"
          }), pQ.current = FQ.scrollTop
        },
        aQ = QQ => {
          (0, qQ.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: QQ
          }), zQ(QQ), jQ(QQ)
        },
        XQ = () => {
          var QQ, FQ;
          const wQ = vQ.current,
            LQ = wQ.getBoundingClientRect().top + (null !== (QQ = null === (FQ = uQ.current) || void 0 === FQ ? void 0 : FQ.offsetHeight) && void 0 !== QQ ? QQ : 0),
            qQ = oQ.map((QQ => {
              var FQ, wQ;
              return (null !== (FQ = null === (wQ = YQ.current.get(QQ)) || void 0 === wQ ? void 0 : wQ.getBoundingClientRect().top) && void 0 !== FQ ? FQ : 1 / 0) - LQ
            })),
            DQ = !UQ && wQ.scrollTop + wQ.clientHeight >= wQ.scrollHeight - 1;
          CQ(oQ[(0, kQ.k)(qQ, DQ)])
        },
        fQ = () => {
          null !== GQ.current && (zQ(null), XQ())
        };
      (0, LQ.useLayoutEffect)((() => {
        null !== DQ && oQ.includes(DQ.page) && aQ(DQ.page)
      }), [null === DQ || void 0 === DQ ? void 0 : DQ.seq]), (0, LQ.useLayoutEffect)((() => {
        null === GQ.current || oQ.includes(GQ.current) || fQ()
      }));
      const {
        onFocused: VQ
      } = QQ, hQ = (0, LQ.useCallback)((QQ => {
        null !== GQ.current && jQ(GQ.current), VQ(QQ)
      }), [VQ]);
      (0, LQ.useLayoutEffect)((() => {
        const QQ = GQ.current;
        null !== QQ && (!UQ || oQ.indexOf(OQ[sQ - 1]) < oQ.indexOf(QQ)) && jQ(QQ)
      }), [sQ]), (0, LQ.useEffect)((() => {
        const QQ = new ResizeObserver((() => {
          null !== GQ.current ? jQ(GQ.current) : lQ()
        }));
        return QQ.observe(vQ.current), QQ.observe(mQ.current), () => {
          QQ.disconnect()
        }
      }), []), (0, LQ.useLayoutEffect)((() => {
        const QQ = uQ.current,
          FQ = null === QQ || void 0 === QQ ? void 0 : QQ.querySelector(".SegmentedToggleOptionSelected");
        FQ && (QQ.scrollLeft = Math.min(FQ.offsetLeft, Math.max(QQ.scrollLeft, FQ.offsetLeft + FQ.offsetWidth - QQ.clientWidth)))
      }), [SQ]);
      return (0, TQ.jsxs)("div", {
        ref: vQ,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === GQ.current ? XQ() : Math.abs(vQ.current.scrollTop - pQ.current) > 1 && fQ()
        },
        onClick: QQ => {
          var FQ;
          null !== (FQ = uQ.current) && void 0 !== FQ && FQ.contains(QQ.target) || fQ()
        },
        onFocus: QQ => {
          var FQ;
          const wQ = null === GQ.current ? null : YQ.current.get(GQ.current);
          !wQ || wQ.contains(QQ.target) || null !== (FQ = uQ.current) && void 0 !== FQ && FQ.contains(QQ.target) || fQ()
        },
        children: [oQ.length > 1 && (0, TQ.jsx)("div", {
          ref: uQ,
          className: "LobbyManageChips",
          children: (0, TQ.jsx)(tQ.c, {
            options: oQ.map((QQ => ({
              value: QQ,
              label: (0, TQ.jsx)(eF, {
                page: QQ
              }),
              ariaLabel: wQ(xF[QQ].title)
            }))),
            value: SQ,
            padTabs: "2",
            ariaLabel: wQ("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: aQ
          })
        }), (0, TQ.jsx)("div", {
          ref: mQ,
          className: HQ()("LobbyManageInner", {
            Staging: UQ
          }),
          children: oQ.filter((QQ => IQ.has(QQ))).map((FQ => {
            const wQ = FQ === xQ;
            return (0, TQ.jsxs)("section", {
              ref: QQ => {
                QQ ? YQ.current.set(FQ, QQ) : YQ.current.delete(FQ)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": wQ || void 0,
              children: [oQ.length > 1 && (0, TQ.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": wQ || void 0,
                "data-pad-unavailable": wQ || void 0,
                children: (0, TQ.jsx)(AQ.b, {
                  label: (0, TQ.jsx)(eF, {
                    page: FQ
                  })
                })
              }), (0, TQ.jsx)(tF, {
                page: FQ,
                manage: QQ.manage,
                leaderboard: QQ.leaderboard,
                focusRequest: QQ.focusRequest,
                onFocused: hQ,
                ruleRowsShown: "rules" === FQ ? NQ : 1 / 0
              })]
            }, FQ)
          }))
        })]
      })
    }

    function GF(QQ) {
      return void 0 === (null === QQ || void 0 === QQ ? void 0 : QQ.page) ? null : {
        page: QQ.page,
        seq: QQ.seq
      }
    }

    function pF(QQ) {
      let {
        leaderboard: FQ
      } = QQ;
      const wQ = function() {
          const QQ = (0, oQ.l)("lobbyManage"),
            [FQ, wQ] = (0, LQ.useReducer)((QQ => QQ + 1), 0),
            [qQ] = (0, LQ.useState)((() => new vQ.b(wQ)));
          return (0, LQ.useEffect)((() => {
            const QQ = qQ.nextDeadline();
            if (null === QQ) return;
            const FQ = setTimeout((() => {
              qQ.expire(Date.now()), wQ()
            }), Math.max(0, QQ - Date.now()));
            return () => {
              clearTimeout(FQ)
            }
          })), (0, LQ.useMemo)((() => null === QQ ? null : {
            state: QQ,
            send: (QQ, FQ, LQ) => {
              const oQ = qQ.send(QQ, FQ, null !== LQ && void 0 !== LQ ? LQ : null);
              return wQ(), oQ
            },
            statusOf: QQ => qQ.statusOf(QQ, Date.now()),
            showStatus: (QQ, FQ) => {
              qQ.show(QQ, FQ)
            },
            isPending: QQ => qQ.isPending(QQ)
          }), [QQ, FQ, qQ])
        }(),
        mQ = (0, kQ.o)((0, oQ.l)("lobbyLeaderboardInfo")),
        uQ = (0, DQ.i)(),
        [HQ, bQ] = (0, LQ.useState)((() => GF(uQ))),
        [YQ, xQ] = (0, LQ.useState)(null);
      return (0, LQ.useEffect)((() => {
        null === uQ && (0, qQ.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, LQ.useEffect)((() => {
        null !== uQ && (bQ((QQ => (null === QQ || void 0 === QQ ? void 0 : QQ.seq) === uQ.seq ? QQ : GF(uQ))), void 0 !== uQ.focusName && "players" === uQ.page ? xQ({
          name: uQ.focusName,
          seq: uQ.seq
        }) : (0, DQ.h)(uQ.seq))
      }), [null === uQ || void 0 === uQ ? void 0 : uQ.seq]), null === wQ ? null : (0, TQ.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, TQ.jsx)(MF, {
          pages: (0, kQ.h)(wQ.state, mQ),
          manage: wQ,
          leaderboard: FQ,
          focusRequest: YQ,
          onFocused: DQ.h,
          landing: HQ
        })
      })
    }
  },
  36193: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => uQ,
      f: () => vQ
    });
    var LQ = wQ(1471),
      qQ = wQ(1911),
      oQ = wQ(1897);
    const DQ = 1e4;
    let kQ = 0;

    function vQ(QQ) {
      const FQ = ++kQ;
      return new Promise((wQ => {
        const kQ = FQ => {
            vQ(), clearTimeout(mQ), !1 === (null === FQ || void 0 === FQ ? void 0 : FQ.ok) && (0, LQ.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: QQ.type
            }), wQ(FQ)
          },
          vQ = qQ.b.subscribe("lobbyManage", (QQ => {
            const wQ = function(QQ, FQ) {
              var wQ;
              return null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.results.find((QQ => QQ.requestId === FQ))) && void 0 !== wQ ? wQ : null
            }(QQ, FQ);
            null !== wQ && kQ(wQ)
          })),
          mQ = setTimeout((() => {
            kQ(null)
          }), DQ);
        oQ.gameBridge.send("lobbyManage", {
          ...QQ,
          requestId: FQ
        })
      }))
    }
    const mQ = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class uQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vQ;
        this.onChange = QQ, this.sendAction = FQ, this.pending = new Map, this.statuses = new Map
      }
      send(QQ, FQ, wQ) {
        var LQ;
        return this.statuses.delete(FQ), this.pending.set(FQ, (null !== (LQ = this.pending.get(FQ)) && void 0 !== LQ ? LQ : 0) + 1), this.sendAction(QQ).then((QQ => {
          var LQ;
          const qQ = null !== QQ && void 0 !== QQ ? QQ : {
              requestId: -1,
              ok: !1,
              message: mQ
            },
            oQ = (null !== (LQ = this.pending.get(FQ)) && void 0 !== LQ ? LQ : 1) - 1;
          oQ > 0 ? this.pending.set(FQ, oQ) : this.pending.delete(FQ);
          const DQ = !qQ.ok || qQ.message.length > 0 ? qQ.message : null === wQ ? null : [wQ];
          return null !== DQ && this.statuses.set(FQ, {
            ok: qQ.ok,
            text: DQ,
            until: Date.now() + 4e3
          }), this.onChange(), qQ
        }))
      }
      show(QQ, FQ) {
        this.statuses.set(QQ, {
          ...FQ,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(QQ) {
        for (const [FQ, wQ] of this.statuses) wQ.until <= QQ && this.statuses.delete(FQ)
      }
      nextDeadline() {
        let QQ = null;
        for (const wQ of this.statuses.values()) {
          var FQ;
          QQ = Math.min(null !== (FQ = QQ) && void 0 !== FQ ? FQ : 1 / 0, wQ.until)
        }
        return QQ
      }
      statusOf(QQ, FQ) {
        const wQ = this.statuses.get(QQ);
        return !wQ || wQ.until <= FQ ? null : {
          ok: wQ.ok,
          text: wQ.text
        }
      }
      isPending(QQ) {
        return this.pending.has(QQ)
      }
    }
  },
  36185: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => mQ,
      g: () => vQ
    });
    var LQ = wQ(600),
      qQ = wQ(1897),
      oQ = wQ(1645),
      DQ = wQ(96),
      kQ = wQ(1276);

    function vQ(QQ, FQ, wQ) {
      return DQ.featureFlags.useSocialFeatures && QQ && null === (0, kQ.b)(FQ, wQ)
    }

    function mQ(QQ, FQ) {
      var wQ, DQ;
      const kQ = oQ.e.getSocialState().friends.find((QQ => QQ.name.toLowerCase() === FQ.toLowerCase())),
        vQ = qQ.gameBridge.latest("players").byId[QQ],
        mQ = void 0 !== vQ && vQ.name === FQ,
        uQ = mQ && null !== (wQ = vQ.cosmetics) && void 0 !== wQ ? wQ : void 0,
        HQ = kQ && uQ ? {
          ...kQ,
          cosmetics: uQ
        } : kQ;
      return {
        playerSocialPreview: null !== HQ && void 0 !== HQ ? HQ : {
          isError: !1,
          name: FQ,
          ranks: mQ ? [...vQ.ranks] : [],
          cosmetics: null !== uQ && void 0 !== uQ ? uQ : {},
          nameColour: null !== (DQ = null === uQ || void 0 === uQ ? void 0 : uQ.nameColour) && void 0 !== DQ ? DQ : LQ.d,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== kQ
      }
    }
  },
  36362: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => HQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(1682),
      kQ = wQ(1451),
      vQ = wQ(1348),
      mQ = wQ(1079),
      uQ = wQ(1107);

    function HQ(QQ) {
      let {
        label: FQ,
        icon: wQ,
        placeholder: qQ,
        onSubmit: HQ
      } = QQ;
      const bQ = (0, LQ.useRef)(null),
        [YQ, xQ] = (0, LQ.useState)(""),
        [AQ, tQ] = (0, LQ.useState)("Enter"),
        [eQ, MQ] = (0, LQ.useState)(null);
      (0, LQ.useEffect)((() => {
        if ("Success" !== AQ && "Error" !== AQ) return;
        const QQ = setTimeout((() => {
          "Success" === AQ && bQ.current && (bQ.current.value = "", xQ("")), tQ("Enter")
        }), "Success" === AQ ? 1e3 : 4e3);
        return () => {
          clearTimeout(QQ)
        }
      }), [AQ]);
      const GQ = () => {
        const QQ = YQ.trim();
        "" !== QQ && "Enter" === AQ && (tQ("Loading"), HQ(QQ).then((QQ => {
          bQ.current && ("error" in QQ ? null === QQ.error ? tQ("Enter") : (MQ(QQ.error), tQ("Error")) : tQ("Success"))
        })))
      };
      return (0, uQ.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: QQ => {
          QQ.target === bQ.current && "Escape" !== QQ.key && QQ.stopPropagation()
        },
        children: [(0, uQ.jsxs)("div", {
          className: oQ()("AddFriendBodyOverlay", `AddFriendBodyOverlay${AQ}`),
          children: ["Loading" === AQ && (0, uQ.jsx)(vQ.c, {}), "Success" === AQ && (0, uQ.jsx)(mQ.c, {
            name: "check"
          }), "Error" === AQ && eQ]
        }), (0, uQ.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, uQ.jsx)(DQ.b, {
            className: "PlayerSearchInput",
            domRef: bQ,
            maxLength: 32,
            placeholderText: qQ,
            ariaLabel: qQ,
            stopPropagation: !1,
            onValueChange: QQ => {
              xQ(QQ)
            },
            onEnter: GQ
          }), (0, uQ.jsxs)(kQ.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== AQ || "" === YQ.trim(),
            onClick: GQ,
            children: [(0, uQ.jsx)(mQ.c, {
              name: wQ
            }), " ", FQ]
          })]
        })]
      })
    }
  },
  36349: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => HQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(1207),
      kQ = wQ(1079),
      vQ = wQ(1107);
    const mQ = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      uQ = ["unlisted", "public", "whitelist", "private"];

    function HQ(QQ) {
      let {
        visibility: FQ,
        onPick: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, DQ.y)(), HQ = (0, LQ.useRef)([]);
      return (0, vQ.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": qQ("worldSocial:whoCanJoin"),
        children: uQ.map(((QQ, LQ) => {
          const DQ = QQ === FQ;
          return (0, vQ.jsxs)("button", {
            ref: QQ => {
              HQ.current[LQ] = QQ
            },
            type: "button",
            className: oQ()("WorldSocialTile", {
              WorldSocialTileSelected: DQ
            }),
            "aria-pressed": DQ,
            tabIndex: DQ ? 0 : -1,
            onKeyDown: QQ => {
              ((QQ, FQ) => {
                const wQ = "ArrowRight" === QQ.key || "ArrowDown" === QQ.key ? 1 : "ArrowLeft" === QQ.key || "ArrowUp" === QQ.key ? -1 : 0;
                var LQ;
                0 !== wQ && (QQ.preventDefault(), null === (LQ = HQ.current[(FQ + wQ + uQ.length) % uQ.length]) || void 0 === LQ || LQ.focus())
              })(QQ, LQ)
            },
            onClick: () => {
              wQ(QQ)
            },
            children: [(0, vQ.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, vQ.jsx)(kQ.c, {
                name: mQ[QQ]
              })
            }), (0, vQ.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, vQ.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: qQ(`worldSocial:${QQ}`)
              }), (0, vQ.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: qQ(`worldSocial:${QQ}Description`)
              })]
            })]
          }, QQ)
        }))
      })
    }
  },
  36356: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ
    });
    var LQ = wQ(1207),
      qQ = wQ(2545),
      oQ = wQ(4233),
      DQ = wQ(1107);

    function kQ(QQ) {
      let {
        fH: FQ,
        children: wQ,
        ...kQ
      } = QQ;
      const {
        t: vQ
      } = (0, LQ.y)();
      return (0, DQ.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          FQ.onChange(!FQ.on)
        },
        children: (0, DQ.jsx)(qQ.f, {
          ...kQ,
          opensProfileCard: !1,
          children: (0, DQ.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: QQ => {
              QQ.stopPropagation()
            },
            children: [wQ, (0, DQ.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, DQ.jsx)(oQ.d, {
                checked: FQ.on,
                disabled: !1,
                ariaLabel: vQ("worldSocial:letJoin", {
                  playerName: kQ.playerSocialPreview.name
                }),
                onChange: QQ => {
                  FQ.onChange(QQ.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36341: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => xQ
    });
    var LQ = wQ(53),
      qQ = wQ(1207),
      oQ = wQ(1835),
      DQ = wQ(96),
      kQ = wQ(17),
      vQ = wQ(1471),
      mQ = wQ(2580),
      uQ = wQ(8995),
      HQ = wQ(1451),
      bQ = wQ(1079),
      YQ = wQ(1107);

    function xQ(QQ) {
      let {
        worldCode: FQ,
        message: wQ
      } = QQ;
      const {
        t: xQ
      } = (0, qQ.y)(), {
        isTouchScreen: AQ
      } = (0, kQ.l)(["isTouchScreen"]), tQ = DQ.featureFlags.canUseInviteLinks, eQ = (0, uQ.g)(tQ && null === wQ), [MQ, GQ] = (0, mQ.g)(), pQ = (0, LQ.useRef)(null);
      if (null !== wQ) return (0, YQ.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, YQ.jsx)(bQ.c, {
          name: "lock"
        }), (0, YQ.jsx)("span", {
          children: wQ
        })]
      });
      const cQ = tQ ? eQ : FQ,
        CQ = AQ && tQ && (0, mQ.c)();
      return (0, YQ.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!tQ && (0, YQ.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: xQ("worldSocial:worldCode")
        }), (0, YQ.jsx)("input", {
          ref: pQ,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== cQ && void 0 !== cQ ? cQ : "",
          "aria-label": xQ(tQ ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: QQ => {
            QQ.currentTarget.select()
          }
        }), (0, YQ.jsxs)(HQ.f, {
          className: "WorldSocialCopy",
          disabled: null === cQ,
          onClick: () => {
            null !== cQ && (0, mQ.e)(cQ, {
              useShareSheet: CQ,
              onOutcome: QQ => {
                if ((0, vQ.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== QQ || tQ ? QQ : "code"
                  }), "copied" === QQ) GQ();
                else if ("failed" === QQ) {
                  var FQ;
                  null === (FQ = pQ.current) || void 0 === FQ || FQ.focus(), oQ.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, YQ.jsx)(bQ.c, {
            name: MQ ? "check" : CQ ? "up-from-bracket" : "copy"
          }), " ", xQ(MQ ? "general:copied" : CQ ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36353: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => YQ,
      d: () => bQ,
      e: () => HQ
    });
    var LQ = wQ(600),
      qQ = wQ(1207),
      oQ = wQ(1645),
      DQ = wQ(2545),
      kQ = wQ(2489),
      vQ = wQ(1451),
      mQ = wQ(36356),
      uQ = wQ(1107);

    function HQ(QQ, FQ) {
      var wQ;
      return {
        isError: !1,
        name: QQ,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== FQ && void 0 !== FQ ? FQ : {},
        nameColour: null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.nameColour) && void 0 !== wQ ? wQ : LQ.d,
        location: {
          status: "offline"
        }
      }
    }

    function bQ(QQ) {
      let {
        player: FQ,
        isFriend: wQ = !1,
        status: LQ,
        showLocation: vQ = void 0 === LQ,
        fH: HQ,
        onSendFriendRequest: bQ,
        actions: YQ,
        zIndex: xQ
      } = QQ;
      const {
        t: AQ
      } = (0, qQ.y)();
      let tQ = LQ;
      null !== HQ && void 0 !== HQ && HQ.on && (tQ = (0, uQ.jsxs)(uQ.Fragment, {
        children: [null !== LQ && void 0 !== LQ ? LQ : (0, uQ.jsx)(kQ.c, {
          socialPreview: FQ
        }), (0, uQ.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", AQ("worldSocial:canJoin")]
        })]
      }));
      const eQ = {
        playerSocialPreview: FQ,
        isFriend: wQ,
        hideFriendBadge: !0,
        onFriendRemoved: wQ ? QQ => {
          oQ.e.removeFriendFromState(QQ)
        } : void 0,
        status: tQ,
        showLocation: vQ,
        onSendFriendRequest: bQ,
        zIndex: xQ
      };
      return HQ ? (0, uQ.jsx)(mQ.d, {
        ...eQ,
        fH: HQ,
        children: YQ
      }) : (0, uQ.jsx)(DQ.f, {
        ...eQ,
        opensProfileCard: !1,
        children: YQ || void 0
      })
    }

    function YQ(QQ) {
      let {
        row: FQ,
        fH: wQ,
        canInvite: LQ,
        invited: oQ,
        onInvite: DQ,
        zIndex: kQ
      } = QQ;
      const {
        t: mQ
      } = (0, qQ.y)(), HQ = "online" === FQ.place ? vQ.f : vQ.i;
      return (0, uQ.jsx)(bQ, {
        player: FQ.friend,
        isFriend: !0,
        status: "here" === FQ.place ? mQ("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        fH: wQ,
        zIndex: kQ,
        actions: LQ && (0, uQ.jsx)(HQ, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: oQ,
          onClick: DQ,
          ariaLabel: `${mQ("worldSocial:invite")} ${FQ.friend.name}`,
          children: mQ(oQ ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36329: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => vQ,
      e: () => DQ,
      h: () => mQ
    });
    var LQ = wQ(53),
      qQ = wQ(4435),
      oQ = wQ(1835);

    function DQ(QQ) {
      const FQ = {
        lobbyName: QQ,
        answer: null,
        response: qQ.d.getSocialSettings(QQ)
      };
      return FQ.response.then((QQ => {
        FQ.answer = QQ
      })), FQ
    }
    const kQ = new Map;

    function vQ(QQ) {
      kQ.set(QQ.lobbyName, QQ)
    }

    function mQ(QQ) {
      const [FQ] = (0, LQ.useState)((() => function(QQ) {
        var FQ;
        const wQ = null !== (FQ = kQ.get(QQ)) && void 0 !== FQ ? FQ : null;
        return null !== wQ && void 0 !== wQ && wQ.answer && "error" in wQ.answer ? null : wQ
      }(QQ))), [wQ, DQ] = (0, LQ.useState)((() => null !== FQ && void 0 !== FQ && FQ.answer && "settings" in FQ.answer ? FQ.answer.settings : null)), [vQ, mQ] = (0, LQ.useState)(!0), [uQ, HQ] = (0, LQ.useState)(null !== wQ), bQ = (0, LQ.useRef)(wQ);
      bQ.current = wQ;
      const YQ = (0, LQ.useRef)(0),
        xQ = (0, LQ.useRef)(0),
        AQ = (0, LQ.useRef)(!1),
        tQ = (0, LQ.useRef)(!0),
        eQ = (0, LQ.useCallback)((async FQ => {
          const wQ = ++YQ.current,
            LQ = await (null !== FQ && void 0 !== FQ ? FQ : qQ.d.getSocialSettings(QQ));
          tQ.current && wQ === YQ.current && (HQ(!0), mQ(!1), "error" in LQ || DQ(LQ.settings))
        }), [QQ]),
        MQ = (0, LQ.useCallback)((() => {
          mQ(!0), eQ()
        }), [eQ]),
        GQ = (0, LQ.useCallback)((() => {
          xQ.current > 0 ? AQ.current = !0 : eQ()
        }), [eQ]);
      (0, LQ.useEffect)((() => (tQ.current = !0, kQ.delete(QQ), mQ(!0), eQ(null === FQ || void 0 === FQ ? void 0 : FQ.response), () => {
        tQ.current = !1
      })), [eQ, QQ, FQ]);
      const pQ = QQ => {
        YQ.current++, mQ(!1), bQ.current = QQ, DQ(QQ)
      };
      return {
        settings: wQ,
        loading: vQ,
        answered: uQ,
        retry: MQ,
        refresh: GQ,
        change: async function(FQ, wQ) {
          let {
            quiet: LQ = !1,
            onAnswer: DQ
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const kQ = bQ.current;
          if (null === kQ) return !1;
          pQ(wQ(kQ)), xQ.current > 0 && (AQ.current = !0), xQ.current++;
          const vQ = await qQ.d.setSocialSettings(QQ, FQ);
          xQ.current--;
          const mQ = !("error" in vQ);
          if (!tQ.current) return mQ;
          if (null === DQ || void 0 === DQ || DQ(vQ), LQ);
          else if ("error" in vQ) oQ.f.showMessage({
            translationKey: vQ.error
          });
          else
            for (const QQ of vQ.notFound) oQ.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: QQ
              }
            });
          if (xQ.current > 0) return mQ;
          const uQ = AQ.current;
          return AQ.current = !1, !uQ && "settings" in vQ ? pQ(vQ.settings) : (uQ || pQ(kQ), eQ()), mQ
        }
      }
    }
  },
  36369: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      g: () => oQ
    });
    var LQ = wQ(160);
    const qQ = new Map;

    function oQ(QQ, FQ) {
      var wQ;
      const LQ = null !== (wQ = qQ.get(QQ)) && void 0 !== wQ ? wQ : new Map;
      LQ.set(FQ, Date.now()), qQ.set(QQ, LQ)
    }

    function DQ(QQ) {
      const FQ = qQ.get(QQ);
      if (!FQ) return [];
      const wQ = Date.now();
      for (const [qQ, oQ] of FQ) wQ - oQ >= LQ.q && FQ.delete(qQ);
      return [...FQ.keys()]
    }
  },
  36335: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      const wQ = FQ.toLowerCase();
      for (const LQ of QQ)
        if (LQ.toLowerCase() === wQ) return !0;
      return !1
    }

    function qQ(QQ, FQ, wQ) {
      const qQ = [],
        oQ = [],
        DQ = [];
      for (const kQ of QQ) !kQ.isError && kQ.name && ("inGame" === kQ.location.status && kQ.location.inLobbyName === FQ || LQ(wQ, kQ.name) ? oQ.push({
        friend: kQ,
        place: "here"
      }) : "offline" === kQ.location.status ? DQ.push({
        friend: kQ,
        place: "offline"
      }) : qQ.push({
        friend: kQ,
        place: "online"
      }));
      return [...qQ, ...oQ, ...DQ]
    }

    function oQ(QQ, FQ, wQ) {
      const qQ = [],
        oQ = QQ.flatMap((QQ => "here" === QQ.place ? [QQ.friend.name] : []));
      for (const DQ of [...oQ, ...FQ]) LQ(qQ, DQ) || LQ(wQ, DQ) || qQ.push(DQ);
      return qQ
    }

    function DQ(QQ, FQ) {
      return null === QQ || void 0 === QQ || !QQ.canManage || LQ(QQ.whitelist, FQ) ? "none" : "whitelist" === QQ.visibility ? "required" : "quiet"
    }

    function kQ(QQ) {
      if (null === QQ) return !0;
      const {
        visibility: FQ
      } = QQ;
      return "public" === FQ || "unlisted" === FQ || "whitelist" === FQ && QQ.canManage
    }

    function vQ(QQ, FQ, wQ) {
      if (wQ) {
        const wQ = FQ.filter((FQ => !LQ(QQ.whitelist, FQ)));
        return {
          ...QQ,
          whitelist: [...QQ.whitelist, ...wQ]
        }
      }
      return {
        ...QQ,
        whitelist: QQ.whitelist.filter((QQ => !LQ(FQ, QQ)))
      }
    }

    function mQ(QQ, FQ) {
      const wQ = [];
      for (let LQ = 0; LQ < QQ.length; LQ += FQ) wQ.push(QQ.slice(LQ, LQ + FQ));
      return wQ
    }
    wQ.d(FQ, {
      c: () => kQ,
      f: () => oQ,
      g: () => qQ,
      h: () => LQ,
      j: () => mQ,
      k: () => DQ,
      n: () => vQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);