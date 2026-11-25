export const id = 227;
export const ids = [227];
export const modules = {
  41289: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      LobbyManageView: () => bW
    });
    var wQ = XQ(61),
      qQ = XQ(1532),
      TQ = XQ(37286),
      zQ = XQ(2550),
      sQ = XQ(2555),
      FQ = XQ(2535),
      PQ = XQ(36859);

    function gQ() {
      const [QQ, WQ] = (0, wQ.useState)(new Map);
      return {
        get: WQ => QQ.get(WQ),
        hold: (0, wQ.useCallback)(((QQ, XQ, wQ) => {
          WQ((WQ => new Map(WQ).set(QQ, XQ))), wQ.then((() => {
            WQ((WQ => {
              const XQ = new Map(WQ);
              return XQ.delete(QQ), XQ
            }))
          }))
        }), [])
      }
    }
    var JQ = XQ(1081),
      rQ = XQ.n(JQ),
      IQ = XQ(1226),
      jQ = XQ(1094),
      BQ = XQ(1391),
      yQ = XQ(2803),
      VQ = XQ(5376),
      DQ = XQ(3699);
    var pQ = XQ(2052),
      GQ = XQ(1507);

    function UQ(QQ, WQ, XQ) {
      const wQ = QQ.filter((QQ => QQ.name !== WQ)),
        qQ = wQ.filter((QQ => "none" === QQ.role)).sort(((QQ, WQ) => WQ.at - QQ.at)),
        TQ = wQ.filter((QQ => "none" !== QQ.role)).sort(((QQ, WQ) => XQ.indexOf(QQ.role) - XQ.indexOf(WQ.role) || WQ.at - QQ.at));
      return [...QQ.some((QQ => QQ.name === WQ)) && null !== WQ ? [WQ] : [], ...[...qQ, ...TQ].map((QQ => QQ.name))]
    }

    function bQ(QQ, WQ) {
      const XQ = QQ.banned.map((QQ => QQ.name)),
        wQ = new Set(XQ);
      return {
        here: UQ(QQ.here, WQ, QQ.roles.map((QQ => QQ.role))),
        away: QQ.away.filter((QQ => !wQ.has(QQ.name))).map((QQ => QQ.name)),
        banned: XQ
      }
    }

    function vQ(QQ, WQ) {
      const XQ = QQ.here.find((QQ => QQ.name === WQ));
      if (XQ) return {
        section: "here",
        player: XQ
      };
      const wQ = QQ.banned.find((QQ => QQ.name === WQ));
      if (wQ) return {
        section: "banned",
        bannedAt: wQ.at
      };
      const qQ = QQ.away.find((QQ => QQ.name === WQ));
      return qQ ? {
        section: "away",
        player: qQ
      } : {
        section: "gone"
      }
    }
    const dQ = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var HQ = XQ(2798),
      aQ = XQ(2954),
      lQ = XQ(37022),
      hQ = XQ(3398),
      iQ = XQ(402);

    function cQ(QQ, WQ, XQ) {
      return WQ.map((WQ => {
        if ("string" === typeof WQ) return WQ;
        const wQ = "str" in WQ ? WQ.str : WQ;
        return "string" === typeof wQ ? wQ : "entityName" in wQ ? wQ.entityName : "translationKey" in wQ ? QQ(wQ.translationKey, (0, IQ.r)(wQ.params, XQ)) : ""
      })).join("")
    }

    function AQ(QQ, WQ, XQ, wQ, qQ) {
      return qQ - wQ < 6e4 ? QQ(`${XQ}JustNow`) : QQ(XQ, {
        time: (0, iQ.bb)((0, IQ.n)(WQ, XQ), wQ, qQ)
      })
    }
    var RQ = XQ(1975),
      EQ = XQ(1739),
      CQ = XQ(1145);

    function uQ(QQ) {
      let {
        status: WQ
      } = QQ;
      return (0, CQ.jsx)("span", {
        className: rQ()("LobbyManageStatus", {
          LobbyManageStatusRefused: !WQ.ok
        }),
        children: (0, CQ.jsx)(RQ.e, {
          text: WQ.text
        })
      })
    }

    function LQ(QQ) {
      let {
        names: WQ,
        cap: XQ,
        filterFrom: qQ,
        moreLabel: TQ,
        reveal: zQ = null,
        renderRow: sQ
      } = QQ;
      const {
        t: FQ
      } = (0, IQ.C)(), [PQ, gQ] = (0, wQ.useState)(!1), [JQ, rQ] = (0, wQ.useState)(""), BQ = PQ || null !== zQ && WQ.indexOf(zQ) >= XQ, VQ = (BQ || WQ.length <= XQ) && null !== qQ && WQ.length > qQ, DQ = JQ.trim().toLowerCase();
      let pQ = BQ ? WQ : WQ.slice(0, XQ);
      return VQ && "" !== DQ && (pQ = pQ.filter((QQ => QQ.toLowerCase().includes(DQ)))), (0, CQ.jsxs)(CQ.Fragment, {
        children: [VQ && (0, CQ.jsx)(EQ.e, {
          className: "LobbyManageFilter",
          placeholderText: FQ("lobbyManage:findName"),
          ariaLabel: FQ("lobbyManage:findName"),
          onValueChange: QQ => {
            rQ(QQ)
          }
        }), pQ.length > 0 && (0, CQ.jsx)("div", {
          className: "PlayerRows",
          children: pQ.map(((QQ, WQ) => sQ(QQ, pQ.length - WQ)))
        }), !BQ && WQ.length > XQ && (0, CQ.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, CQ.jsx)(yQ.b, {
            label: (0, CQ.jsxs)(CQ.Fragment, {
              children: [TQ, " ", (0, CQ.jsx)(jQ.d, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              gQ(!0)
            }
          })
        })]
      })
    }

    function kQ(QQ) {
      let {
        value: WQ,
        placeholder: XQ,
        ariaLabel: qQ,
        maxLength: TQ,
        wide: zQ = !1,
        onSave: sQ
      } = QQ;
      const FQ = (0, wQ.useRef)(null),
        [PQ, gQ] = (0, wQ.useState)(0),
        JQ = (0, wQ.useRef)(!0),
        IQ = (0, wQ.useRef)(null),
        jQ = (0, wQ.useRef)({
          value: WQ,
          onSave: sQ
        });
      jQ.current = {
        value: WQ,
        onSave: sQ
      };
      const BQ = () => {
        const QQ = IQ.current;
        IQ.current = null, null !== QQ && QQ !== jQ.current.value && jQ.current.onSave(QQ).then((() => {
          JQ.current && gQ((QQ => QQ + 1))
        }))
      };
      return (0, wQ.useEffect)((() => {
        null === IQ.current && FQ.current && (FQ.current.value = WQ)
      }), [WQ, PQ]), (0, wQ.useEffect)((() => () => {
        JQ.current = !1, BQ()
      }), []), (0, CQ.jsx)("div", {
        className: rQ()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: zQ
        }),
        onBlur: BQ,
        children: (0, CQ.jsx)(EQ.e, {
          domRef: FQ,
          defaultValue: WQ,
          placeholderText: XQ,
          ariaLabel: qQ,
          maxLength: TQ,
          onValueChange: QQ => {
            IQ.current = QQ
          },
          onEnter: BQ
        })
      })
    }
    const fQ = ["mod", "coOwner"],
      SQ = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function tQ(QQ) {
      var WQ, XQ, TQ;
      let {
        name: zQ,
        place: sQ,
        openedIn: FQ,
        isYou: PQ,
        manage: JQ,
        hiddenNames: rQ,
        zIndex: BQ
      } = QQ;
      const {
        t: yQ,
        selectedLanguage: VQ
      } = (0, IQ.C)(), [DQ, pQ] = (0, wQ.useState)(null), {
        state: UQ
      } = JQ, bQ = `player:${zQ}`, vQ = function(QQ, WQ) {
        if ("banned" === QQ.section) return {
          ...dQ,
          unban: !0
        };
        if ("gone" === QQ.section) return dQ;
        const {
          player: XQ
        } = QQ, wQ = "here" === QQ.section, qQ = wQ || "none" !== XQ.role ? XQ.can.roles : [];
        return {
          gamemode: wQ && WQ && null !== XQ.gamemode && XQ.can.gamemode,
          roles: qQ,
          fixedRole: 0 === qQ.length && "none" !== XQ.role ? XQ.role : null,
          kick: wQ && XQ.can.kick,
          ban: XQ.can.ban,
          unban: !1
        }
      }(sQ, null !== UQ.gamemodes), iQ = JQ.statusOf(bQ), RQ = JQ.isPending(bQ), EQ = gQ(), LQ = Date.now(), kQ = QQ => {
        var WQ, XQ;
        return null !== (WQ = null === (XQ = (QQ => UQ.roles.find((WQ => WQ.role === QQ)))(QQ)) || void 0 === XQ ? void 0 : XQ.label) && void 0 !== WQ ? WQ : QQ
      }, tQ = QQ => {
        const WQ = SQ[QQ];
        return void 0 === WQ ? void 0 : yQ(WQ)
      }, oQ = "here" === sQ.section || "away" === sQ.section ? sQ.player : null, eQ = "here" === sQ.section ? sQ.player.id : null, {
        playerSocialPreview: nQ,
        isFriend: xQ
      } = null === eQ ? {
        playerSocialPreview: (0, lQ.h)(zQ, null),
        isFriend: !1
      } : (0, aQ.e)(eQ, zQ), YQ = function() {
        JQ.send(...arguments)
      }, NQ = (QQ, WQ) => {
        EQ.hold("role", QQ, JQ.send({
          type: "setRole",
          name: zQ,
          role: QQ
        }, bQ, WQ))
      };
      let ZQ = null;
      if ("ban" === (null === DQ || void 0 === DQ ? void 0 : DQ.kind)) ZQ = yQ("lobbyManageEntry:banConfirm", {
        playerName: zQ
      });
      else if ("role" === (null === DQ || void 0 === DQ ? void 0 : DQ.kind)) {
        var OQ;
        ZQ = `${yQ("lobbyManage:roleConfirm",{playerName:zQ,role:kQ(DQ.role)})} ${null!==(OQ=tQ(DQ.role))&&void 0!==OQ?OQ:""}`
      } else if (iQ) ZQ = (0, CQ.jsx)(uQ, {
        status: iQ
      });
      else if (PQ) ZQ = yQ("lobbyManage:you");
      else if ("here" === sQ.section) "none" === sQ.player.role && LQ - sQ.player.at < 6e5 && (ZQ = AQ(yQ, VQ.code, "lobbyManage:joinedAgo", sQ.player.at, LQ));
      else if ("away" === sQ.section) {
        if (sQ.player.at > 0) {
          const QQ = "kicked" === sQ.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          ZQ = AQ(yQ, VQ.code, QQ, sQ.player.at, LQ)
        }
      } else "banned" === sQ.section ? null !== sQ.bannedAt && (ZQ = AQ(yQ, VQ.code, "lobbyManage:bannedAgo", sQ.bannedAt, LQ)) : "banned" === FQ && (ZQ = yQ("lobbyManageEntry:unbanned"));
      return (0, CQ.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": zQ,
        children: (0, CQ.jsxs)(HQ.g, {
          playerSocialPreview: nQ,
          isFriend: xQ,
          status: ZQ,
          opensProfileCard: !PQ && (0, aQ.h)(!0, zQ, rQ),
          zIndex: BQ,
          children: [null !== DQ && (0, CQ.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === DQ.kind && (0, CQ.jsxs)(GQ.P, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                pQ(null), YQ({
                  type: "ban",
                  name: zQ
                }, bQ)
              },
              children: [(0, CQ.jsx)(jQ.d, {
                name: "gavel"
              }), (0, CQ.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: yQ("lobbyManageEntry:ban")
              })]
            }), "role" === DQ.kind && (0, CQ.jsx)(GQ.h, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: DQ.role
              },
              onClick: () => {
                pQ(null), NQ(DQ.role)
              },
              children: yQ("lobbyManage:makeRole", {
                role: kQ(DQ.role)
              })
            }), (0, CQ.jsx)(GQ.l, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                pQ(null)
              },
              children: yQ("general:cancel")
            })]
          }), null === DQ && (0, CQ.jsxs)(CQ.Fragment, {
            children: [(0, CQ.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [vQ.gamemode && null !== oQ && (0, CQ.jsx)(hQ.c, {
                options: (null !== (WQ = UQ.gamemodes) && void 0 !== WQ ? WQ : []).map((QQ => ({
                  value: QQ.value,
                  label: cQ(yQ, QQ.label, rQ)
                }))),
                value: null !== (XQ = EQ.get("gamemode")) && void 0 !== XQ ? XQ : oQ.gamemode,
                disabled: RQ,
                onChange: QQ => {
                  (0, qQ.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: QQ.value
                  }), EQ.hold("gamemode", QQ.value, JQ.send({
                    type: "setGamemode",
                    name: zQ,
                    gamemode: QQ.value
                  }, bQ))
                }
              }), vQ.roles.length > 0 && null !== oQ && (0, CQ.jsx)(hQ.c, {
                options: [...UQ.roles].reverse().filter((QQ => vQ.roles.includes(QQ.role))).map((QQ => ({
                  value: QQ.role,
                  label: QQ.label
                }))),
                value: null !== (TQ = EQ.get("role")) && void 0 !== TQ ? TQ : oQ.role,
                disabled: RQ,
                onChange: QQ => {
                  var WQ;
                  (WQ = QQ.value) !== (null === oQ || void 0 === oQ ? void 0 : oQ.role) && (fQ.includes(WQ) ? pQ({
                    kind: "role",
                    role: WQ
                  }) : ((0, qQ.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: WQ
                  }), NQ(WQ, tQ(WQ))))
                }
              }), null !== vQ.fixedRole && (0, CQ.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: kQ(vQ.fixedRole)
              })]
            }), (0, CQ.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [vQ.kick && (0, CQ.jsxs)(GQ.l, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${yQ("lobbyManageEntry:kick")} ${zQ}`,
                disabled: RQ,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  YQ({
                    type: "kick",
                    name: zQ
                  }, bQ)
                },
                children: [(0, CQ.jsx)(jQ.d, {
                  name: "person-falling-burst"
                }), (0, CQ.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: yQ("lobbyManageEntry:kick")
                })]
              }), vQ.ban && (0, CQ.jsxs)(GQ.Q, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${yQ("lobbyManageEntry:ban")} ${zQ}`,
                disabled: RQ,
                padDestructive: !0,
                onClick: () => {
                  pQ({
                    kind: "ban"
                  })
                },
                children: [(0, CQ.jsx)(jQ.d, {
                  name: "gavel"
                }), (0, CQ.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: yQ("lobbyManageEntry:ban")
                })]
              }), vQ.unban && (0, CQ.jsxs)(GQ.l, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${yQ("lobbyManageEntry:unban")} ${zQ}`,
                disabled: RQ,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  YQ({
                    type: "unban",
                    name: zQ
                  }, bQ)
                },
                children: [(0, CQ.jsx)(jQ.d, {
                  name: "user-unlock"
                }), (0, CQ.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: yQ("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function oQ(QQ) {
      var WQ, XQ, qQ, TQ;
      let {
        manage: zQ,
        focusRequest: sQ,
        onFocused: FQ
      } = QQ;
      const {
        t: PQ
      } = (0, IQ.C)(), gQ = (0, pQ.e)("players"), JQ = (0, pQ.e)("hiddenPlayerNames"), rQ = (0, wQ.useRef)(null), {
        state: BQ
      } = zQ, VQ = null === gQ.localId ? null : null !== (WQ = null === (XQ = gQ.byId[gQ.localId]) || void 0 === XQ ? void 0 : XQ.name) && void 0 !== WQ ? WQ : null, [DQ] = (0, wQ.useState)((() => bQ(BQ, VQ))), UQ = function(QQ, WQ, XQ) {
        const wQ = new Set([...QQ.here, ...QQ.away, ...QQ.banned]),
          qQ = bQ(WQ, XQ),
          TQ = WQ => {
            const XQ = qQ[WQ].filter((QQ => !wQ.has(QQ)));
            for (const QQ of XQ) wQ.add(QQ);
            return [...QQ[WQ], ...XQ]
          };
        return {
          here: TQ("here"),
          away: TQ("away"),
          banned: TQ("banned")
        }
      }(DQ, BQ, VQ), [dQ, HQ] = (0, wQ.useState)(!1), aQ = function(QQ, WQ) {
        return QQ.here.filter((QQ => QQ.name !== WQ && "none" === QQ.role && QQ.can.kick)).length
      }(BQ, VQ), lQ = zQ.statusOf("kickAll");
      (0, wQ.useEffect)((() => {
        var QQ, WQ;
        if (null === sQ) return;
        const XQ = null === (QQ = rQ.current) || void 0 === QQ ? void 0 : QQ.querySelector(`[data-lobby-manage-row="${CSS.escape(sQ.name)}"]`);
        null === XQ || void 0 === XQ || XQ.scrollIntoView({
          block: "center"
        }), null === XQ || void 0 === XQ || null === (WQ = XQ.querySelector(".ProfilePreview")) || void 0 === WQ || WQ.focus({
          preventScroll: !0
        }), FQ(sQ.seq)
      }), [null === sQ || void 0 === sQ ? void 0 : sQ.seq]);
      const hQ = QQ => (WQ, XQ) => (0, CQ.jsx)(tQ, {
        name: WQ,
        place: vQ(BQ, WQ),
        openedIn: QQ,
        isYou: WQ === VQ,
        manage: zQ,
        hiddenNames: JQ,
        zIndex: XQ
      }, WQ);
      return (0, CQ.jsxs)("div", {
        ref: rQ,
        className: "LobbyManagePage",
        children: [UQ.here.length > 0 && (0, CQ.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, CQ.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, CQ.jsx)(yQ.b, {
              label: PQ("lobbyManage:here"),
              meta: BQ.here.length
            }), aQ >= 2 && !dQ && (0, CQ.jsxs)(GQ.Q, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: zQ.isPending("kickAll"),
              onClick: () => {
                HQ(!0)
              },
              children: [(0, CQ.jsx)(jQ.d, {
                name: "person-falling-burst"
              }), " ", PQ("lobbyManage:kickAll")]
            })]
          }), dQ && aQ >= 2 && (0, CQ.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, CQ.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: PQ("lobbyManage:kickAllConfirm", {
                count: aQ
              })
            }), (0, CQ.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, CQ.jsx)(GQ.P, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  HQ(!1), zQ.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: PQ("lobbyManage:kickAll")
              }), (0, CQ.jsx)(GQ.l, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  HQ(!1)
                },
                children: PQ("general:cancel")
              })]
            })]
          }), lQ && (0, CQ.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, CQ.jsx)(uQ, {
              status: lQ
            })
          }), (0, CQ.jsx)(LQ, {
            names: UQ.here,
            cap: UQ.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: hQ("here")
          })]
        }), UQ.away.length > 0 && (0, CQ.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, CQ.jsx)(yQ.b, {
            label: PQ("lobbyManage:notHere"),
            meta: UQ.away.length
          }), (0, CQ.jsx)(LQ, {
            names: UQ.away,
            cap: 5,
            filterFrom: null,
            moreLabel: PQ("lobbyManage:allCount", {
              count: UQ.away.length
            }),
            reveal: null !== (qQ = null === sQ || void 0 === sQ ? void 0 : sQ.name) && void 0 !== qQ ? qQ : null,
            renderRow: hQ("away")
          })]
        }), UQ.banned.length > 0 && (0, CQ.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, CQ.jsx)(yQ.b, {
            label: PQ("lobbyManage:banned"),
            meta: UQ.banned.length
          }), (0, CQ.jsx)(LQ, {
            names: UQ.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: PQ("lobbyManage:allCount", {
              count: UQ.banned.length
            }),
            reveal: null !== (TQ = null === sQ || void 0 === sQ ? void 0 : sQ.name) && void 0 !== TQ ? TQ : null,
            renderRow: hQ("banned")
          })]
        })]
      })
    }
    var eQ = XQ(4948),
      nQ = XQ(1707),
      xQ = XQ(37003),
      YQ = XQ(37015),
      NQ = XQ(37011),
      ZQ = XQ(37008),
      OQ = XQ(37038),
      KQ = XQ(37024),
      mQ = XQ(37031);

    function MQ(QQ) {
      const WQ = new Set;
      for (const XQ of QQ) WQ.add(XQ.toLowerCase());
      return WQ
    }

    function QW(QQ) {
      var WQ, XQ;
      let {
        state: qQ,
        lobbyName: TQ,
        listed: zQ,
        isListed: sQ,
        tV: FQ,
        PD: PQ,
        statusOf: gQ
      } = QQ;
      const {
        t: JQ,
        selectedLanguage: rQ
      } = (0, IQ.C)(), jQ = (0, nQ.j)(), BQ = (0, pQ.e)("players"), VQ = null === BQ.localId ? null : null !== (WQ = null === (XQ = BQ.byId[BQ.localId]) || void 0 === XQ ? void 0 : XQ.name) && void 0 !== WQ ? WQ : null, DQ = (0, wQ.useMemo)((() => (0, ZQ.g)(jQ.friends, TQ, qQ.here.map((QQ => QQ.name)))), [jQ.friends, TQ, qQ.here]), GQ = new Map(DQ.map((QQ => [QQ.friend.name.toLowerCase(), QQ]))), UQ = function(QQ) {
        let {
          refused: WQ,
          listed: XQ,
          here: wQ,
          friends: qQ,
          excluded: TQ
        } = QQ;
        const zQ = MQ(TQ),
          sQ = QQ => QQ.filter((QQ => {
            const WQ = QQ.toLowerCase();
            return !zQ.has(WQ) && (zQ.add(WQ), !0)
          }));
        return {
          added: [],
          refused: sQ(WQ),
          listed: sQ(XQ),
          suggested: sQ([...wQ, ...qQ])
        }
      }({
        refused: qQ.refused.map((QQ => QQ.name)),
        listed: zQ,
        here: qQ.here.map((QQ => QQ.name)),
        friends: DQ.flatMap((QQ => "here" === QQ.place ? [] : [QQ.friend.name])),
        excluded: [...null === VQ ? [] : [VQ], ...[...qQ.here, ...qQ.away].flatMap((QQ => "none" === QQ.role || (0, ZQ.j)(zQ, QQ.name) ? [] : [QQ.name]))]
      }), [bQ] = (0, wQ.useState)(UQ), [vQ, dQ] = (0, wQ.useState)([]), HQ = function(QQ, WQ, XQ) {
        const wQ = MQ(XQ),
          qQ = MQ([...XQ, ...QQ.refused, ...QQ.listed, ...QQ.suggested]),
          TQ = XQ => [...QQ[XQ].filter((QQ => !wQ.has(QQ.toLowerCase()))), ...WQ[XQ].filter((QQ => {
            const WQ = QQ.toLowerCase();
            return !qQ.has(WQ) && (qQ.add(WQ), !0)
          }))];
        return {
          added: [...XQ],
          refused: TQ("refused"),
          listed: TQ("listed"),
          suggested: TQ("suggested")
        }
      }(bQ, UQ, vQ), hQ = (QQ, WQ) => {
        var XQ, wQ;
        const TQ = QQ.toLowerCase(),
          zQ = GQ.get(TQ),
          PQ = qQ.here.find((QQ => QQ.name.toLowerCase() === TQ)),
          IQ = qQ.refused.find((QQ => QQ.name.toLowerCase() === TQ)),
          jQ = null !== (XQ = null === gQ || void 0 === gQ ? void 0 : gQ(QQ)) && void 0 !== XQ ? XQ : null;
        let BQ = null;
        jQ ? BQ = (0, CQ.jsx)(uQ, {
          status: jQ
        }) : IQ ? BQ = AQ(JQ, rQ.code, "lobbyManage:triedToJoinAgo", IQ.at, Date.now()) : zQ && PQ ? BQ = JQ("lobbyManage:friendHere") : zQ ? BQ = "online" === zQ.place ? JQ("lobbyManage:friendOnline") : JQ("lobbyManage:friend") : PQ && (BQ = JQ("lobbyManage:hereStatus"));
        let yQ = null !== (wQ = null === zQ || void 0 === zQ ? void 0 : zQ.friend) && void 0 !== wQ ? wQ : (0, lQ.h)(QQ, null);
        return !zQ && null !== PQ && void 0 !== PQ && PQ.id && (yQ = (0, aQ.e)(PQ.id, PQ.name).playerSocialPreview), (0, CQ.jsx)(KQ.c, {
          playerSocialPreview: yQ,
          isFriend: void 0 !== zQ,
          hideFriendBadge: !0,
          status: BQ,
          zIndex: WQ,
          fJ: {
            on: sQ(QQ),
            onChange: WQ => {
              FQ(QQ, WQ)
            }
          }
        }, TQ)
      }, iQ = [...HQ.added, ...HQ.refused];
      return (0, CQ.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, CQ.jsx)(yQ.b, {
          label: JQ("worldSocial:whitelist"),
          meta: zQ.length
        }), (0, CQ.jsx)(mQ.c, {
          label: JQ("lobbyManage:add"),
          icon: "user-check",
          placeholder: JQ("socialBar:enterPlayerName"),
          onSubmit: async QQ => {
            const WQ = await PQ(QQ);
            return WQ.ok && dQ((WQ => [QQ, ...WQ])), WQ
          }
        }), iQ.length > 0 && (0, CQ.jsx)("div", {
          className: "PlayerRows",
          children: iQ.map(((QQ, WQ) => hQ(QQ, iQ.length - WQ)))
        }), (0, CQ.jsx)(LQ, {
          names: HQ.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: JQ("lobbyManage:allOnWhitelist", {
            count: HQ.listed.length
          }),
          renderRow: hQ
        }), (0, CQ.jsx)(LQ, {
          names: HQ.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: JQ("lobbyManage:allCount", {
            count: HQ.suggested.length
          }),
          renderRow: hQ
        })]
      })
    }

    function WW(QQ) {
      let {
        manage: WQ,
        listing: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, IQ.C)(), TQ = (QQ, XQ) => ((0, qQ.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: QQ
      }), WQ.send({
        type: "setListing",
        field: QQ,
        value: XQ
      }, `listing:${QQ}`)), zQ = QQ => {
        const XQ = WQ.statusOf(`listing:${QQ}`);
        return XQ && !XQ.ok && (0, CQ.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, CQ.jsx)(uQ, {
            status: XQ
          })
        })
      };
      return (0, CQ.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, CQ.jsx)(yQ.b, {
          label: wQ("lobbyManage:inWorldsList")
        }), (0, CQ.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, CQ.jsx)("div", {
            className: "SliderText",
            children: wQ("lobbyManage:description")
          }), (0, CQ.jsx)(kQ, {
            value: XQ.description,
            ariaLabel: wQ("lobbyManage:description"),
            wide: !0,
            onSave: QQ => TQ("description", QQ)
          })]
        }), zQ("description"), (0, CQ.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, CQ.jsx)("div", {
            className: "SliderText",
            children: wQ("lobbyManage:emojis")
          }), (0, CQ.jsx)(kQ, {
            value: XQ.emojis,
            ariaLabel: wQ("lobbyManage:emojis"),
            onSave: QQ => TQ("emojis", QQ)
          })]
        }), zQ("emojis"), (0, CQ.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, CQ.jsx)("div", {
            className: "SliderText",
            children: wQ("lobbyManage:colour")
          }), (0, CQ.jsx)(XW, {
            value: XQ.colour,
            ariaLabel: wQ("lobbyManage:colour"),
            onSave: QQ => {
              TQ("colour", QQ)
            }
          })]
        }), zQ("colour")]
      })
    }

    function XW(QQ) {
      let {
        value: WQ,
        ariaLabel: XQ,
        onSave: qQ
      } = QQ;
      const TQ = (0, wQ.useRef)(null),
        zQ = (0, wQ.useRef)({
          value: WQ,
          onSave: qQ
        });
      zQ.current = {
        value: WQ,
        onSave: qQ
      };
      const sQ = (0, wQ.useRef)(null),
        FQ = (0, wQ.useRef)(!1),
        PQ = QQ => {
          FQ.current && QQ.value !== zQ.current.value && QQ.value !== sQ.current && (sQ.current = QQ.value, zQ.current.onSave(QQ.value))
        };
      return (0, wQ.useEffect)((() => {
        TQ.current && document.activeElement !== TQ.current && (TQ.current.value = WQ)
      }), [WQ]), (0, wQ.useEffect)((() => {
        const QQ = TQ.current,
          WQ = () => {
            PQ(QQ)
          };
        return QQ.addEventListener("change", WQ), () => {
          QQ.removeEventListener("change", WQ), PQ(QQ)
        }
      }), []), (0, CQ.jsx)("input", {
        ref: TQ,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: WQ,
        "aria-label": XQ,
        onInput: () => {
          FQ.current = !0
        },
        onBlur: QQ => {
          PQ(QQ.currentTarget)
        }
      })
    }

    function wW(QQ) {
      let {
        manage: WQ
      } = QQ;
      const {
        lobbyName: XQ,
        shownLobbyName: wQ
      } = (0, pQ.e)("connectedGame");
      return WQ.state.you.canSetVisibility && null !== XQ ? (0, CQ.jsx)(TW, {
        manage: WQ,
        lobbyName: XQ,
        worldCode: null !== wQ && void 0 !== wQ ? wQ : XQ
      }, XQ) : (0, CQ.jsx)(zW, {
        manage: WQ,
        lobbyName: null !== XQ && void 0 !== XQ ? XQ : ""
      })
    }

    function qW(QQ) {
      return QQ.map((QQ => QQ.toLowerCase())).sort().join(",")
    }

    function TW(QQ) {
      var WQ;
      let {
        manage: XQ,
        lobbyName: TQ,
        worldCode: zQ
      } = QQ;
      const {
        t: sQ
      } = (0, IQ.C)(), {
        settings: FQ,
        loading: PQ,
        change: gQ,
        retry: JQ,
        refresh: rQ
      } = (0, xQ.h)(TQ), jQ = (0, nQ.j)(), {
        state: VQ
      } = XQ, DQ = (0, wQ.useRef)(FQ);
      DQ.current = FQ;
      const pQ = qW(null !== (WQ = VQ.whitelist) && void 0 !== WQ ? WQ : []),
        UQ = null !== VQ.whitelist;
      (0, wQ.useEffect)((() => {
        const QQ = DQ.current;
        null !== QQ && (QQ.visibility !== VQ.visibility || UQ && qW(QQ.whitelist) !== pQ) && rQ()
      }), [VQ.visibility, pQ, UQ, rQ]);
      const bQ = async (QQ, WQ) => {
        let XQ = null;
        return await gQ(QQ, WQ, {
          quiet: !0,
          onAnswer: QQ => {
            XQ = QQ
          }
        }), XQ
      }, vQ = (QQ, WQ) => {
        null !== WQ && "error" in WQ && XQ.showStatus(QQ, {
          ok: !1,
          text: [sQ(WQ.error)]
        })
      }, dQ = async QQ => {
        if (null === FQ || QQ === FQ.visibility) return;
        (0, qQ.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: QQ
        });
        const WQ = "whitelist" === QQ ? (0, ZQ.f)((0, ZQ.g)(jQ.friends, TQ, VQ.here.map((QQ => QQ.name))), (0, OQ.d)(TQ), FQ.whitelist) : [],
          XQ = await bQ({
            setVisibility: QQ
          }, (WQ => ({
            ...WQ,
            visibility: QQ
          })));
        vQ("mode", XQ), null === XQ || "error" in XQ || await (async QQ => {
          for (const WQ of (0, ZQ.m)(QQ, eQ.D))
            if (!await gQ({
                whitelistAdd: WQ
              }, (QQ => (0, ZQ.r)(QQ, WQ, !0)))) return !1;
          return !0
        })(WQ)
      }, HQ = (0, wQ.useMemo)((() => {
        var QQ;
        if (null === FQ) return [];
        const WQ = null !== (QQ = VQ.whitelist) && void 0 !== QQ ? QQ : [];
        return [...WQ.filter((QQ => (0, ZQ.j)(FQ.whitelist, QQ))), ...FQ.whitelist.filter((QQ => !(0, ZQ.j)(WQ, QQ)))]
      }), [FQ, VQ.whitelist]), aQ = XQ.statusOf("mode");
      return (0, CQ.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, CQ.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, CQ.jsx)(yQ.b, {
            label: sQ("worldSocial:whoCanJoin")
          }), null === FQ && PQ && (0, CQ.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, CQ.jsx)(BQ.e, {})
          }), null === FQ && !PQ && (0, CQ.jsx)(GQ.l, {
            className: "SmallTextLight",
            onClick: JQ,
            children: sQ("worldSocial:loadFailed")
          }), null !== FQ && (0, CQ.jsx)(YQ.b, {
            visibility: FQ.visibility,
            onPick: QQ => {
              dQ(QQ)
            }
          }), aQ && (0, CQ.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, CQ.jsx)(uQ, {
              status: aQ
            })
          }), null !== FQ && "private" !== FQ.visibility && (0, CQ.jsx)(NQ.b, {
            worldCode: zQ,
            message: null
          })]
        }), "whitelist" === (null === FQ || void 0 === FQ ? void 0 : FQ.visibility) && (0, CQ.jsx)(QW, {
          state: VQ,
          lobbyName: TQ,
          listed: HQ,
          isListed: QQ => (0, ZQ.j)(FQ.whitelist, QQ),
          tV: (QQ, WQ) => {
            (0, qQ.reportAnalyticsClick)(WQ ? {
              id: "lobby_manage.whitelist_add",
              value: "fJ"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), bQ(WQ ? {
              whitelistAdd: [QQ]
            } : {
              whitelistRemove: QQ
            }, (XQ => (0, ZQ.r)(XQ, [QQ], WQ))).then((WQ => {
              vQ(`whitelist:${QQ.toLowerCase()}`, WQ)
            }))
          },
          PD: async QQ => {
            (0, qQ.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const WQ = await bQ({
              whitelistAdd: [QQ]
            }, (WQ => (0, ZQ.r)(WQ, [QQ], !0)));
            return null === WQ ? {
              ok: !1,
              error: sQ("worldSocial:changeFailed")
            } : "error" in WQ ? {
              ok: !1,
              error: sQ(WQ.error)
            } : (0, ZQ.j)(WQ.notFound, QQ) ? {
              ok: !1,
              error: sQ("lobbyManage:noPlayerCalled", {
                playerName: QQ
              })
            } : {
              ok: !0
            }
          },
          statusOf: QQ => XQ.statusOf(`whitelist:${QQ.toLowerCase()}`)
        }), "public" === (null === FQ || void 0 === FQ ? void 0 : FQ.visibility) && null !== VQ.listing && (0, CQ.jsx)(WW, {
          manage: XQ,
          listing: VQ.listing
        })]
      })
    }

    function zW(QQ) {
      var WQ;
      let {
        manage: XQ,
        lobbyName: wQ
      } = QQ;
      const {
        t: TQ
      } = (0, IQ.C)(), {
        state: zQ
      } = XQ, sQ = gQ(), FQ = null !== (WQ = zQ.whitelist) && void 0 !== WQ ? WQ : [];
      return (0, CQ.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, CQ.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, CQ.jsx)(yQ.b, {
            label: TQ("worldSocial:whoCanJoin")
          }), (0, CQ.jsx)("div", {
            className: "LobbyManageModeText",
            children: TQ(`worldSocial:${zQ.visibility}`)
          })]
        }), "whitelist" === zQ.visibility && zQ.you.canEditWhitelist && (0, CQ.jsx)(QW, {
          state: zQ,
          lobbyName: wQ,
          listed: FQ,
          isListed: QQ => {
            var WQ;
            return null !== (WQ = sQ.get(QQ.toLowerCase())) && void 0 !== WQ ? WQ : (0, ZQ.j)(FQ, QQ)
          },
          tV: (QQ, WQ) => {
            (0, qQ.reportAnalyticsClick)(WQ ? {
              id: "lobby_manage.whitelist_add",
              value: "fJ"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const wQ = QQ.toLowerCase();
            sQ.hold(wQ, WQ, XQ.send(WQ ? {
              type: "whitelistAdd",
              names: [QQ]
            } : {
              type: "whitelistRemove",
              name: QQ
            }, `whitelist:${wQ}`))
          },
          PD: async QQ => {
            (0, qQ.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const WQ = await XQ.send({
              type: "whitelistAdd",
              names: [QQ]
            }, "whitelist-field");
            return WQ.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, CQ.jsx)(RQ.e, {
                text: WQ.message
              })
            }
          },
          statusOf: QQ => XQ.statusOf(`whitelist:${QQ.toLowerCase()}`)
        }), "public" === zQ.visibility && null !== zQ.listing && (0, CQ.jsx)(WW, {
          manage: XQ,
          listing: zQ.listing
        })]
      })
    }
    var sW = XQ(5349),
      FW = XQ(1416);
    const PW = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const gW = (0, wQ.memo)((function(QQ) {
      var WQ;
      let {
        rule: XQ,
        value: wQ,
        status: qQ,
        pending: TQ,
        hiddenNames: zQ,
        WU: sQ,
        onAction: FQ
      } = QQ;
      const {
        t: PQ
      } = (0, IQ.C)(), gQ = QQ => sQ(XQ, QQ), JQ = (QQ, WQ) => {
        FQ(XQ, QQ, WQ)
      }, rQ = cQ(PQ, XQ.label, zQ), jQ = XQ.info ? cQ(PQ, XQ.info, zQ) : void 0, BQ = XQ.placeholder ? cQ(PQ, XQ.placeholder, zQ) : void 0, yQ = (null !== (WQ = XQ.options) && void 0 !== WQ ? WQ : []).map((QQ => ({
        value: QQ.value,
        label: cQ(PQ, QQ.label, zQ)
      }))), VQ = Math.max(0, ...yQ.map((QQ => function(QQ) {
        let WQ = 0;
        for (const XQ of QQ) WQ += PW.test(XQ) ? 2 : 1;
        return WQ
      }(QQ.label)))), DQ = qQ && (0, CQ.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, CQ.jsx)(uQ, {
          status: qQ
        })
      }), pQ = (0, CQ.jsxs)("div", {
        className: "SliderText",
        children: [rQ, void 0 !== jQ && (0, CQ.jsx)(FW.b, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: jQ
        })]
      });
      return "toggle" === XQ.kind ? (0, CQ.jsxs)(CQ.Fragment, {
        children: [(0, CQ.jsx)(sW.e, {
          label: rQ,
          checked: !0 === wQ,
          circleInfoText: jQ,
          disabled: TQ,
          onClick: gQ
        }), DQ]
      }) : "choice" === XQ.kind && yQ.length <= 3 ? (0, CQ.jsxs)(CQ.Fragment, {
        children: [(0, CQ.jsx)(sW.g, {
          label: rQ,
          options: yQ,
          value: String(wQ),
          circleInfoText: jQ,
          onChange: gQ
        }), DQ]
      }) : (0, CQ.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [pQ, "choice" === XQ.kind && (0, CQ.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": VQ
          },
          children: (0, CQ.jsx)(hQ.c, {
            options: yQ,
            value: String(wQ),
            disabled: TQ,
            onChange: QQ => {
              gQ(QQ.value)
            }
          })
        }), ("number" === XQ.kind || "text" === XQ.kind) && (0, CQ.jsx)(kQ, {
          value: null === wQ ? "" : String(wQ),
          placeholder: BQ,
          ariaLabel: rQ,
          onSave: QQ => {
            const WQ = QQ.trim(),
              wQ = Number(WQ);
            return gQ("number" === XQ.kind && "" !== WQ && Number.isFinite(wQ) ? wQ : WQ)
          }
        }), "action" === XQ.kind && (0, CQ.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [yQ.length > 3 && (0, CQ.jsx)(hQ.c, {
            options: yQ,
            value: {
              value: "",
              label: null !== BQ && void 0 !== BQ ? BQ : rQ
            },
            disabled: TQ,
            onChange: QQ => {
              JQ(QQ.value)
            }
          }), yQ.length > 0 && yQ.length <= 3 && yQ.map((QQ => (0, CQ.jsx)(GQ.l, {
            className: "SmallTextLight",
            disabled: TQ,
            onClick: () => {
              JQ(QQ.value)
            },
            children: QQ.label
          }, QQ.value))), 0 === yQ.length && (0, CQ.jsx)(GQ.l, {
            className: "SmallTextLight",
            disabled: TQ,
            onClick: () => {
              JQ()
            },
            children: null !== BQ && void 0 !== BQ ? BQ : rQ
          })]
        }), "names" === XQ.kind && (0, CQ.jsx)(JW, {
          names: Array.isArray(wQ) ? wQ : [],
          pending: TQ,
          onAction: JQ
        }), DQ]
      })
    }));

    function JW(QQ) {
      let {
        names: WQ,
        pending: XQ,
        onAction: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, IQ.C)(), zQ = (0, wQ.useRef)(null), [sQ, FQ] = (0, wQ.useState)(""), PQ = () => {
        const QQ = sQ.trim();
        "" !== QQ && (qQ(QQ, "add"), zQ.current && (zQ.current.value = ""), FQ(""))
      };
      return (0, CQ.jsxs)("div", {
        className: "LobbyManageNames",
        children: [WQ.map((QQ => (0, CQ.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, CQ.jsx)("span", {
            className: "LobbyManageNameText",
            children: QQ
          }), (0, CQ.jsx)(GQ.l, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: TQ("lobbyManage:removeName", {
              name: QQ
            }),
            disabled: XQ,
            onClick: () => {
              qQ(QQ, "remove")
            },
            children: (0, CQ.jsx)(jQ.d, {
              name: "xmark"
            })
          })]
        }, QQ))), (0, CQ.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, CQ.jsx)(EQ.e, {
            domRef: zQ,
            placeholderText: TQ("lobbyManage:namePlaceholder"),
            ariaLabel: TQ("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: QQ => {
              FQ(QQ)
            },
            onEnter: PQ
          }), (0, CQ.jsx)(GQ.l, {
            className: "SmallTextLight",
            disabled: XQ || "" === sQ.trim(),
            onClick: PQ,
            children: TQ("lobbyManage:addHere")
          })]
        })]
      })
    }
    const rW = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function IW(QQ, WQ) {
      return rW.map((XQ => {
        let {
          group: wQ,
          title: qQ
        } = XQ;
        const TQ = QQ.filter((QQ => QQ.group === wQ && void 0 === QQ.parent)).map((XQ => {
          const wQ = !0 === WQ(XQ) ? QQ.filter((QQ => QQ.parent === XQ.key)) : [];
          return {
            rule: XQ,
            children: wQ
          }
        }));
        return {
          group: wQ,
          title: qQ,
          items: TQ
        }
      }))
    }

    function jW(QQ) {
      return QQ.flatMap((QQ => {
        let {
          items: WQ
        } = QQ;
        return WQ.flatMap((QQ => {
          let {
            rule: WQ,
            children: XQ
          } = QQ;
          return [WQ, ...XQ]
        }))
      }))
    }

    function BW(QQ) {
      let {
        manage: WQ,
        rowsShown: XQ
      } = QQ;
      const {
        t: TQ
      } = (0, IQ.C)(), zQ = (0, pQ.e)("hiddenPlayerNames"), {
        rules: sQ
      } = WQ.state, FQ = gQ(), PQ = QQ => {
        const WQ = FQ.get(QQ.key);
        return void 0 === WQ ? QQ.value : WQ
      }, JQ = IW(sQ, PQ), [rQ] = (0, wQ.useState)((() => jW(JQ).map((QQ => QQ.key)))), jQ = XQ === 1 / 0 ? null : new Set(rQ.slice(0, XQ)), BQ = QQ => null === jQ || jQ.has(QQ.key), {
        hold: VQ
      } = FQ, DQ = (0, wQ.useCallback)(((QQ, XQ) => {
        (0, qQ.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: QQ.key
        });
        const wQ = WQ.send({
          type: "setRule",
          key: QQ.key,
          value: XQ
        }, `rule:${QQ.key}`);
        return VQ(QQ.key, XQ, wQ), wQ
      }), [WQ, VQ]), GQ = (0, wQ.useCallback)(((QQ, XQ, wQ) => {
        (0, qQ.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: QQ.key
        }), WQ.send({
          type: "ruleAction",
          key: QQ.key,
          ...void 0 === XQ ? {} : {
            arg: XQ
          },
          ...void 0 === wQ ? {} : {
            op: wQ
          }
        }, `rule:${QQ.key}`, void 0 === wQ ? TQ("lobbyManage:setJustNow") : void 0)
      }), [WQ, TQ]), UQ = QQ => {
        const XQ = `rule:${QQ.key}`;
        return (0, CQ.jsx)(gW, {
          rule: QQ,
          value: PQ(QQ),
          status: WQ.statusOf(XQ),
          pending: WQ.isPending(XQ),
          hiddenNames: zQ,
          WU: DQ,
          onAction: GQ
        }, QQ.key)
      };
      return (0, CQ.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: JQ.map((QQ => {
          let {
            group: WQ,
            title: XQ,
            items: qQ
          } = QQ;
          const zQ = qQ.filter((QQ => {
            let {
              rule: WQ
            } = QQ;
            return BQ(WQ)
          }));
          return 0 === zQ.length ? null : (0, CQ.jsxs)(wQ.Fragment, {
            children: [(0, CQ.jsx)(yQ.b, {
              label: TQ(XQ)
            }), zQ.map((QQ => {
              let {
                rule: WQ,
                children: XQ
              } = QQ;
              return 0 === XQ.length ? UQ(WQ) : (0, CQ.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [UQ(WQ), XQ.filter(BQ).map(UQ)]
              }, WQ.key)
            }))]
          }, WQ)
        }))
      })
    }
    const yW = {
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
      VW = 5,
      DW = (0, wQ.memo)((function(QQ) {
        let {
          page: WQ,
          manage: XQ,
          leaderboard: qQ,
          focusRequest: TQ,
          onFocused: zQ,
          ruleRowsShown: sQ
        } = QQ;
        return "leaderboard" === WQ ? (0, CQ.jsx)(wQ.Suspense, {
          fallback: (0, CQ.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, CQ.jsx)(BQ.e, {})
          }),
          children: qQ
        }) : "joining" === WQ ? (0, CQ.jsx)(wW, {
          manage: XQ
        }) : "rules" === WQ ? (0, CQ.jsx)(BW, {
          manage: XQ,
          rowsShown: sQ
        }) : (0, CQ.jsx)(oQ, {
          manage: XQ,
          focusRequest: TQ,
          onFocused: zQ
        })
      }));

    function pW(QQ) {
      let {
        page: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, IQ.C)(), wQ = yW[WQ];
      return (0, CQ.jsxs)(CQ.Fragment, {
        children: [(0, CQ.jsx)(jQ.d, {
          name: wQ.icon
        }), " ", (0, CQ.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: XQ(wQ.title)
        })]
      })
    }

    function GW(QQ) {
      var WQ;
      const {
        t: XQ
      } = (0, IQ.C)(), {
        pages: TQ,
        landing: zQ
      } = QQ, FQ = (0, wQ.useRef)(null), PQ = (0, wQ.useRef)(null), gQ = (0, wQ.useRef)(null), JQ = (0, wQ.useRef)(new Map), [jQ, BQ] = (0, wQ.useState)(null), pQ = (0, wQ.useRef)(jQ), GQ = (0, wQ.useRef)(0), [UQ, bQ] = (0, wQ.useState)(TQ[0]), vQ = null !== jQ && void 0 !== jQ ? jQ : TQ.includes(UQ) ? UQ : TQ[0], [dQ] = (0, wQ.useState)(null !== (WQ = null === zQ || void 0 === zQ ? void 0 : zQ.page) && void 0 !== WQ ? WQ : null), HQ = null !== dQ && TQ.includes(dQ) ? [dQ, ...TQ.filter((QQ => QQ !== dQ))] : TQ, [aQ] = (0, wQ.useState)((() => {
        const WQ = jW(IW(QQ.manage.state.rules, (QQ => QQ.value)));
        return Math.max(1, Math.ceil(WQ.length / VW))
      })), lQ = HQ.flatMap((QQ => "rules" === QQ ? Array(aQ).fill(QQ) : [QQ])), hQ = function(QQ, WQ) {
        const [XQ, qQ] = (0, wQ.useState)(QQ), TQ = XQ >= WQ;
        return TQ && XQ !== 1 / 0 && qQ(1 / 0), (0, wQ.useLayoutEffect)((() => {
          if (TQ) return;
          let QQ = !0;
          return (0, DQ.e)().then((() => {
            QQ && qQ((QQ => QQ + 1))
          })), () => {
            QQ = !1
          }
        }), [XQ, TQ]), TQ ? 1 / 0 : XQ
      }(1, lQ.length), iQ = lQ.slice(0, hQ), cQ = new Set(iQ), AQ = hQ < lQ.length, RQ = AQ ? iQ.filter((QQ => "rules" === QQ)).length * VW : 1 / 0, EQ = (0, wQ.useRef)(QQ.focusRequest);
      EQ.current = QQ.focusRequest;
      const uQ = QQ => {
          pQ.current = QQ, BQ(QQ)
        },
        LQ = () => {
          var QQ, WQ;
          FQ.current.style.scrollPaddingTop = `${null!==(QQ=null===(WQ=gQ.current)||void 0===WQ?void 0:WQ.offsetHeight)&&void 0!==QQ?QQ:0}px`
        },
        kQ = QQ => {
          const WQ = FQ.current,
            XQ = JQ.current.get(QQ);
          if (void 0 === XQ) return;
          const wQ = document.activeElement,
            qQ = EQ.current,
            TQ = null === qQ ? null : XQ.querySelector(`[data-lobby-manage-row="${CSS.escape(qQ.name)}"]`);
          LQ(), wQ instanceof HTMLElement && null !== TQ && void 0 !== TQ && TQ.contains(wQ) ? wQ.scrollIntoView({
            block: "center"
          }) : null === XQ.previousElementSibling ? WQ.scrollTop = 0 : XQ.scrollIntoView({
            block: "start"
          }), GQ.current = WQ.scrollTop
        },
        fQ = QQ => {
          (0, qQ.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: QQ
          }), uQ(QQ), kQ(QQ)
        },
        SQ = () => {
          var QQ, WQ;
          const XQ = FQ.current,
            wQ = XQ.getBoundingClientRect().top + (null !== (QQ = null === (WQ = gQ.current) || void 0 === WQ ? void 0 : WQ.offsetHeight) && void 0 !== QQ ? QQ : 0),
            qQ = TQ.map((QQ => {
              var WQ, XQ;
              return (null !== (WQ = null === (XQ = JQ.current.get(QQ)) || void 0 === XQ ? void 0 : XQ.getBoundingClientRect().top) && void 0 !== WQ ? WQ : 1 / 0) - wQ
            })),
            zQ = !AQ && XQ.scrollTop + XQ.clientHeight >= XQ.scrollHeight - 1;
          bQ(TQ[(0, sQ.h)(qQ, zQ)])
        },
        tQ = () => {
          null !== pQ.current && (uQ(null), SQ())
        };
      (0, wQ.useLayoutEffect)((() => {
        null !== zQ && TQ.includes(zQ.page) && fQ(zQ.page)
      }), [null === zQ || void 0 === zQ ? void 0 : zQ.seq]), (0, wQ.useLayoutEffect)((() => {
        null === pQ.current || TQ.includes(pQ.current) || tQ()
      }));
      const {
        onFocused: oQ
      } = QQ, eQ = (0, wQ.useCallback)((QQ => {
        null !== pQ.current && kQ(pQ.current), oQ(QQ)
      }), [oQ]);
      (0, wQ.useLayoutEffect)((() => {
        const QQ = pQ.current;
        null !== QQ && (!AQ || TQ.indexOf(lQ[hQ - 1]) < TQ.indexOf(QQ)) && kQ(QQ)
      }), [hQ]), (0, wQ.useEffect)((() => {
        const QQ = new ResizeObserver((() => {
          null !== pQ.current ? kQ(pQ.current) : LQ()
        }));
        return QQ.observe(FQ.current), QQ.observe(PQ.current), () => {
          QQ.disconnect()
        }
      }), []), (0, wQ.useLayoutEffect)((() => {
        const QQ = gQ.current,
          WQ = null === QQ || void 0 === QQ ? void 0 : QQ.querySelector(".SegmentedToggleOptionSelected");
        WQ && (QQ.scrollLeft = Math.min(WQ.offsetLeft, Math.max(QQ.scrollLeft, WQ.offsetLeft + WQ.offsetWidth - QQ.clientWidth)))
      }), [vQ]);
      return (0, CQ.jsxs)("div", {
        ref: FQ,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === pQ.current ? SQ() : Math.abs(FQ.current.scrollTop - GQ.current) > 1 && tQ()
        },
        onClick: QQ => {
          var WQ;
          null !== (WQ = gQ.current) && void 0 !== WQ && WQ.contains(QQ.target) || tQ()
        },
        onFocus: QQ => {
          var WQ;
          const XQ = null === pQ.current ? null : JQ.current.get(pQ.current);
          !XQ || XQ.contains(QQ.target) || null !== (WQ = gQ.current) && void 0 !== WQ && WQ.contains(QQ.target) || tQ()
        },
        children: [TQ.length > 1 && (0, CQ.jsx)("div", {
          ref: gQ,
          className: "LobbyManageChips",
          children: (0, CQ.jsx)(VQ.d, {
            options: TQ.map((QQ => ({
              value: QQ,
              label: (0, CQ.jsx)(pW, {
                page: QQ
              }),
              ariaLabel: XQ(yW[QQ].title)
            }))),
            value: vQ,
            padTabs: "2",
            ariaLabel: XQ("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: fQ
          })
        }), (0, CQ.jsx)("div", {
          ref: PQ,
          className: rQ()("LobbyManageInner", {
            Staging: AQ
          }),
          children: TQ.filter((QQ => cQ.has(QQ))).map((WQ => {
            const XQ = WQ === jQ;
            return (0, CQ.jsxs)("section", {
              ref: QQ => {
                QQ ? JQ.current.set(WQ, QQ) : JQ.current.delete(WQ)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": XQ || void 0,
              children: [TQ.length > 1 && (0, CQ.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": XQ || void 0,
                "data-pad-unavailable": XQ || void 0,
                children: (0, CQ.jsx)(yQ.b, {
                  label: (0, CQ.jsx)(pW, {
                    page: WQ
                  })
                })
              }), (0, CQ.jsx)(DW, {
                page: WQ,
                manage: QQ.manage,
                leaderboard: QQ.leaderboard,
                focusRequest: QQ.focusRequest,
                onFocused: eQ,
                ruleRowsShown: "rules" === WQ ? RQ : 1 / 0
              })]
            }, WQ)
          }))
        })]
      })
    }

    function UW(QQ) {
      return void 0 === (null === QQ || void 0 === QQ ? void 0 : QQ.page) ? null : {
        page: QQ.page,
        seq: QQ.seq
      }
    }

    function bW(QQ) {
      let {
        leaderboard: WQ
      } = QQ;
      const XQ = function() {
          const QQ = (0, FQ.g)("lobbyManage"),
            [WQ, XQ] = (0, wQ.useReducer)((QQ => QQ + 1), 0),
            [qQ] = (0, wQ.useState)((() => new PQ.b(XQ)));
          return (0, wQ.useEffect)((() => {
            const QQ = qQ.nextDeadline();
            if (null === QQ) return;
            const WQ = setTimeout((() => {
              qQ.expire(Date.now()), XQ()
            }), Math.max(0, QQ - Date.now()));
            return () => {
              clearTimeout(WQ)
            }
          })), (0, wQ.useMemo)((() => null === QQ ? null : {
            state: QQ,
            send: (QQ, WQ, wQ) => {
              const TQ = qQ.send(QQ, WQ, null !== wQ && void 0 !== wQ ? wQ : null);
              return XQ(), TQ
            },
            statusOf: QQ => qQ.statusOf(QQ, Date.now()),
            showStatus: (QQ, WQ) => {
              qQ.show(QQ, WQ)
            },
            isPending: QQ => qQ.isPending(QQ)
          }), [QQ, WQ, qQ])
        }(),
        gQ = (0, sQ.l)((0, TQ.d)()),
        JQ = (0, zQ.k)(),
        [rQ, IQ] = (0, wQ.useState)((() => UW(JQ))),
        [jQ, BQ] = (0, wQ.useState)(null);
      return (0, wQ.useEffect)((() => {
        null === JQ && (0, qQ.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, wQ.useEffect)((() => {
        null !== JQ && (IQ((QQ => (null === QQ || void 0 === QQ ? void 0 : QQ.seq) === JQ.seq ? QQ : UW(JQ))), void 0 !== JQ.focusName && "players" === JQ.page ? BQ({
          name: JQ.focusName,
          seq: JQ.seq
        }) : (0, zQ.j)(JQ.seq))
      }), [null === JQ || void 0 === JQ ? void 0 : JQ.seq]), null === XQ ? null : (0, CQ.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, CQ.jsx)(GW, {
          pages: (0, sQ.f)(XQ.state, gQ),
          manage: XQ,
          leaderboard: WQ,
          focusRequest: jQ,
          onFocused: zQ.j,
          landing: rQ
        })
      })
    }
  },
  36859: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ,
      c: () => FQ
    });
    var wQ = XQ(1532),
      qQ = XQ(2036),
      TQ = XQ(2003);
    const zQ = 1e4;
    let sQ = 0;

    function FQ(QQ) {
      const WQ = ++sQ;
      return new Promise((XQ => {
        const sQ = WQ => {
            FQ(), clearTimeout(PQ), !1 === (null === WQ || void 0 === WQ ? void 0 : WQ.ok) && (0, wQ.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: QQ.type
            }), XQ(WQ)
          },
          FQ = qQ.e.subscribe("lobbyManage", (QQ => {
            const XQ = function(QQ, WQ) {
              var XQ;
              return null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.results.find((QQ => QQ.requestId === WQ))) && void 0 !== XQ ? XQ : null
            }(QQ, WQ);
            null !== XQ && sQ(XQ)
          })),
          PQ = setTimeout((() => {
            sQ(null)
          }), zQ);
        TQ.gameBridge.send("lobbyManage", {
          ...QQ,
          requestId: WQ
        })
      }))
    }
    const PQ = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class gQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FQ;
        this.onChange = QQ, this.sendAction = WQ, this.pending = new Map, this.statuses = new Map
      }
      send(QQ, WQ, XQ) {
        var wQ;
        return this.statuses.delete(WQ), this.pending.set(WQ, (null !== (wQ = this.pending.get(WQ)) && void 0 !== wQ ? wQ : 0) + 1), this.sendAction(QQ).then((QQ => {
          var wQ;
          const qQ = null !== QQ && void 0 !== QQ ? QQ : {
              requestId: -1,
              ok: !1,
              message: PQ
            },
            TQ = (null !== (wQ = this.pending.get(WQ)) && void 0 !== wQ ? wQ : 1) - 1;
          TQ > 0 ? this.pending.set(WQ, TQ) : this.pending.delete(WQ);
          const zQ = !qQ.ok || qQ.message.length > 0 ? qQ.message : null === XQ ? null : [XQ];
          return null !== zQ && this.statuses.set(WQ, {
            ok: qQ.ok,
            text: zQ,
            until: Date.now() + 4e3
          }), this.onChange(), qQ
        }))
      }
      show(QQ, WQ) {
        this.statuses.set(QQ, {
          ...WQ,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(QQ) {
        for (const [WQ, XQ] of this.statuses) XQ.until <= QQ && this.statuses.delete(WQ)
      }
      nextDeadline() {
        let QQ = null;
        for (const XQ of this.statuses.values()) {
          var WQ;
          QQ = Math.min(null !== (WQ = QQ) && void 0 !== WQ ? WQ : 1 / 0, XQ.until)
        }
        return QQ
      }
      statusOf(QQ, WQ) {
        const XQ = this.statuses.get(QQ);
        return !XQ || XQ.until <= WQ ? null : {
          ok: XQ.ok,
          text: XQ.text
        }
      }
      isPending(QQ) {
        return this.pending.has(QQ)
      }
    }
  },
  37031: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => JQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(1739),
      sQ = XQ(1507),
      FQ = XQ(1391),
      PQ = XQ(1094),
      gQ = XQ(1145);

    function JQ(QQ) {
      let {
        label: WQ,
        icon: XQ,
        placeholder: qQ,
        onSubmit: JQ
      } = QQ;
      const rQ = (0, wQ.useRef)(null),
        [IQ, jQ] = (0, wQ.useState)(""),
        [BQ, yQ] = (0, wQ.useState)("Enter"),
        [VQ, DQ] = (0, wQ.useState)(null);
      (0, wQ.useEffect)((() => {
        if ("Success" !== BQ && "Error" !== BQ) return;
        const QQ = setTimeout((() => {
          "Success" === BQ && rQ.current && (rQ.current.value = "", jQ("")), yQ("Enter")
        }), "Success" === BQ ? 1e3 : 4e3);
        return () => {
          clearTimeout(QQ)
        }
      }), [BQ]);
      const pQ = () => {
        const QQ = IQ.trim();
        "" !== QQ && "Enter" === BQ && (yQ("Loading"), JQ(QQ).then((QQ => {
          rQ.current && ("error" in QQ ? null === QQ.error ? yQ("Enter") : (DQ(QQ.error), yQ("Error")) : yQ("Success"))
        })))
      };
      return (0, gQ.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: QQ => {
          QQ.target === rQ.current && "Escape" !== QQ.key && QQ.stopPropagation()
        },
        children: [(0, gQ.jsxs)("div", {
          className: TQ()("AddFriendBodyOverlay", `AddFriendBodyOverlay${BQ}`),
          children: ["Loading" === BQ && (0, gQ.jsx)(FQ.e, {}), "Success" === BQ && (0, gQ.jsx)(PQ.d, {
            name: "check"
          }), "Error" === BQ && VQ]
        }), (0, gQ.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, gQ.jsx)(zQ.e, {
            className: "PlayerSearchInput",
            domRef: rQ,
            maxLength: 32,
            placeholderText: qQ,
            ariaLabel: qQ,
            stopPropagation: !1,
            onValueChange: QQ => {
              jQ(QQ)
            },
            onEnter: pQ
          }), (0, gQ.jsxs)(sQ.h, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== BQ || "" === IQ.trim(),
            onClick: pQ,
            children: [(0, gQ.jsx)(PQ.d, {
              name: XQ
            }), " ", WQ]
          })]
        })]
      })
    }
  },
  37015: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => JQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(1226),
      sQ = XQ(1094),
      FQ = XQ(1145);
    const PQ = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      gQ = ["unlisted", "public", "whitelist", "private"];

    function JQ(QQ) {
      let {
        visibility: WQ,
        onPick: XQ
      } = QQ;
      const {
        t: qQ
      } = (0, zQ.C)(), JQ = (0, wQ.useRef)([]);
      return (0, FQ.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": qQ("worldSocial:whoCanJoin"),
        children: gQ.map(((QQ, wQ) => {
          const zQ = QQ === WQ;
          return (0, FQ.jsxs)("button", {
            ref: QQ => {
              JQ.current[wQ] = QQ
            },
            type: "button",
            className: TQ()("WorldSocialTile", {
              WorldSocialTileSelected: zQ
            }),
            "aria-pressed": zQ,
            tabIndex: zQ ? 0 : -1,
            onKeyDown: QQ => {
              ((QQ, WQ) => {
                const XQ = "ArrowRight" === QQ.key || "ArrowDown" === QQ.key ? 1 : "ArrowLeft" === QQ.key || "ArrowUp" === QQ.key ? -1 : 0;
                var wQ;
                0 !== XQ && (QQ.preventDefault(), null === (wQ = JQ.current[(WQ + XQ + gQ.length) % gQ.length]) || void 0 === wQ || wQ.focus())
              })(QQ, wQ)
            },
            onClick: () => {
              XQ(QQ)
            },
            children: [(0, FQ.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, FQ.jsx)(sQ.d, {
                name: PQ[QQ]
              })
            }), (0, FQ.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, FQ.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: qQ(`worldSocial:${QQ}`)
              }), (0, FQ.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: qQ(`worldSocial:${QQ}Description`)
              })]
            })]
          }, QQ)
        }))
      })
    }
  },
  37024: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ
    });
    var wQ = XQ(1226),
      qQ = XQ(2798),
      TQ = XQ(4677),
      zQ = XQ(1145);

    function sQ(QQ) {
      let {
        fJ: WQ,
        children: XQ,
        ...sQ
      } = QQ;
      const {
        t: FQ
      } = (0, wQ.C)();
      return (0, zQ.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          WQ.onChange(!WQ.on)
        },
        children: (0, zQ.jsx)(qQ.g, {
          ...sQ,
          opensProfileCard: !1,
          children: (0, zQ.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: QQ => {
              QQ.stopPropagation()
            },
            children: [XQ, (0, zQ.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, zQ.jsx)(TQ.b, {
                checked: WQ.on,
                disabled: !1,
                ariaLabel: FQ("worldSocial:letJoin", {
                  playerName: sQ.playerSocialPreview.name
                }),
                onChange: QQ => {
                  WQ.onChange(QQ.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37011: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => jQ
    });
    var wQ = XQ(61),
      qQ = XQ(1226),
      TQ = XQ(1927),
      zQ = XQ(105),
      sQ = XQ(26),
      FQ = XQ(1532),
      PQ = XQ(2833),
      gQ = XQ(34408),
      JQ = XQ(1507),
      rQ = XQ(1094),
      IQ = XQ(1145);

    function jQ(QQ) {
      let {
        worldCode: WQ,
        message: XQ
      } = QQ;
      const {
        t: jQ
      } = (0, qQ.C)(), {
        isTouchScreen: BQ
      } = (0, sQ.n)(["isTouchScreen"]), yQ = zQ.featureFlags.canUseInviteLinks, VQ = (0, gQ.f)(yQ && null === XQ), [DQ, pQ] = (0, PQ.h)(), GQ = (0, wQ.useRef)(null);
      if (null !== XQ) return (0, IQ.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, IQ.jsx)(rQ.d, {
          name: "lock"
        }), (0, IQ.jsx)("span", {
          children: XQ
        })]
      });
      const UQ = yQ ? VQ : WQ,
        bQ = BQ && yQ && (0, PQ.c)();
      return (0, IQ.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!yQ && (0, IQ.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: jQ("worldSocial:worldCode")
        }), (0, IQ.jsx)("input", {
          ref: GQ,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== UQ && void 0 !== UQ ? UQ : "",
          "aria-label": jQ(yQ ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: QQ => {
            QQ.currentTarget.select()
          }
        }), (0, IQ.jsxs)(JQ.h, {
          className: "WorldSocialCopy",
          disabled: null === UQ,
          onClick: () => {
            null !== UQ && (0, PQ.g)(UQ, {
              useShareSheet: bQ,
              onOutcome: QQ => {
                if ((0, FQ.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== QQ || yQ ? QQ : "code"
                  }), "copied" === QQ) pQ();
                else if ("failed" === QQ) {
                  var WQ;
                  null === (WQ = GQ.current) || void 0 === WQ || WQ.focus(), TQ.g.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, IQ.jsx)(rQ.d, {
            name: DQ ? "check" : bQ ? "up-from-bracket" : "copy"
          }), " ", jQ(DQ ? "general:copied" : bQ ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37022: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => IQ,
      f: () => rQ,
      h: () => JQ
    });
    var wQ = XQ(646),
      qQ = XQ(1226),
      TQ = XQ(1707),
      zQ = XQ(2798),
      sQ = XQ(2756),
      FQ = XQ(1507),
      PQ = XQ(37024),
      gQ = XQ(1145);

    function JQ(QQ, WQ) {
      var XQ;
      return {
        isError: !1,
        name: QQ,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== WQ && void 0 !== WQ ? WQ : {},
        nameColour: null !== (XQ = null === WQ || void 0 === WQ ? void 0 : WQ.nameColour) && void 0 !== XQ ? XQ : wQ.e,
        location: {
          status: "offline"
        }
      }
    }

    function rQ(QQ) {
      let {
        player: WQ,
        isFriend: XQ = !1,
        status: wQ,
        showLocation: FQ = void 0 === wQ,
        fJ: JQ,
        onSendFriendRequest: rQ,
        actions: IQ,
        zIndex: jQ
      } = QQ;
      const {
        t: BQ
      } = (0, qQ.C)();
      let yQ = wQ;
      null !== JQ && void 0 !== JQ && JQ.on && (yQ = (0, gQ.jsxs)(gQ.Fragment, {
        children: [null !== wQ && void 0 !== wQ ? wQ : (0, gQ.jsx)(sQ.b, {
          socialPreview: WQ
        }), (0, gQ.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", BQ("worldSocial:canJoin")]
        })]
      }));
      const VQ = {
        playerSocialPreview: WQ,
        isFriend: XQ,
        hideFriendBadge: !0,
        onFriendRemoved: XQ ? QQ => {
          TQ.d.removeFriendFromState(QQ)
        } : void 0,
        status: yQ,
        showLocation: FQ,
        onSendFriendRequest: rQ,
        zIndex: jQ
      };
      return JQ ? (0, gQ.jsx)(PQ.c, {
        ...VQ,
        fJ: JQ,
        children: IQ
      }) : (0, gQ.jsx)(zQ.g, {
        ...VQ,
        opensProfileCard: !1,
        children: IQ || void 0
      })
    }

    function IQ(QQ) {
      let {
        row: WQ,
        fJ: XQ,
        canInvite: wQ,
        invited: TQ,
        onInvite: zQ,
        zIndex: sQ
      } = QQ;
      const {
        t: PQ
      } = (0, qQ.C)(), JQ = "online" === WQ.place ? FQ.h : FQ.l;
      return (0, gQ.jsx)(rQ, {
        player: WQ.friend,
        isFriend: !0,
        status: "here" === WQ.place ? PQ("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        fJ: XQ,
        zIndex: sQ,
        actions: wQ && (0, gQ.jsx)(JQ, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: TQ,
          onClick: zQ,
          ariaLabel: `${PQ("worldSocial:invite")} ${WQ.friend.name}`,
          children: PQ(TQ ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37003: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => FQ,
      g: () => zQ,
      h: () => PQ
    });
    var wQ = XQ(61),
      qQ = XQ(4912),
      TQ = XQ(1927);

    function zQ(QQ) {
      const WQ = {
        lobbyName: QQ,
        answer: null,
        response: qQ.b.getSocialSettings(QQ)
      };
      return WQ.response.then((QQ => {
        WQ.answer = QQ
      })), WQ
    }
    const sQ = new Map;

    function FQ(QQ) {
      sQ.set(QQ.lobbyName, QQ)
    }

    function PQ(QQ) {
      const [WQ] = (0, wQ.useState)((() => function(QQ) {
        var WQ;
        const XQ = null !== (WQ = sQ.get(QQ)) && void 0 !== WQ ? WQ : null;
        return null !== XQ && void 0 !== XQ && XQ.answer && "error" in XQ.answer ? null : XQ
      }(QQ))), [XQ, zQ] = (0, wQ.useState)((() => null !== WQ && void 0 !== WQ && WQ.answer && "settings" in WQ.answer ? WQ.answer.settings : null)), [FQ, PQ] = (0, wQ.useState)(!0), [gQ, JQ] = (0, wQ.useState)(null !== XQ), rQ = (0, wQ.useRef)(XQ);
      rQ.current = XQ;
      const IQ = (0, wQ.useRef)(0),
        jQ = (0, wQ.useRef)(0),
        BQ = (0, wQ.useRef)(!1),
        yQ = (0, wQ.useRef)(!0),
        VQ = (0, wQ.useCallback)((async WQ => {
          const XQ = ++IQ.current,
            wQ = await (null !== WQ && void 0 !== WQ ? WQ : qQ.b.getSocialSettings(QQ));
          yQ.current && XQ === IQ.current && (JQ(!0), PQ(!1), "error" in wQ || zQ(wQ.settings))
        }), [QQ]),
        DQ = (0, wQ.useCallback)((() => {
          PQ(!0), VQ()
        }), [VQ]),
        pQ = (0, wQ.useCallback)((() => {
          jQ.current > 0 ? BQ.current = !0 : VQ()
        }), [VQ]);
      (0, wQ.useEffect)((() => (yQ.current = !0, sQ.delete(QQ), PQ(!0), VQ(null === WQ || void 0 === WQ ? void 0 : WQ.response), () => {
        yQ.current = !1
      })), [VQ, QQ, WQ]);
      const GQ = QQ => {
        IQ.current++, PQ(!1), rQ.current = QQ, zQ(QQ)
      };
      return {
        settings: XQ,
        loading: FQ,
        answered: gQ,
        retry: DQ,
        refresh: pQ,
        change: async function(WQ, XQ) {
          let {
            quiet: wQ = !1,
            onAnswer: zQ
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const sQ = rQ.current;
          if (null === sQ) return !1;
          GQ(XQ(sQ)), jQ.current > 0 && (BQ.current = !0), jQ.current++;
          const FQ = await qQ.b.setSocialSettings(QQ, WQ);
          jQ.current--;
          const PQ = !("error" in FQ);
          if (!yQ.current) return PQ;
          if (null === zQ || void 0 === zQ || zQ(FQ), wQ);
          else if ("error" in FQ) TQ.g.showMessage({
            translationKey: FQ.error
          });
          else
            for (const QQ of FQ.notFound) TQ.g.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: QQ
              }
            });
          if (jQ.current > 0) return PQ;
          const gQ = BQ.current;
          return BQ.current = !1, !gQ && "settings" in FQ ? GQ(FQ.settings) : (gQ || GQ(sQ), VQ()), PQ
        }
      }
    }
  },
  37038: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ,
      e: () => TQ
    });
    var wQ = XQ(193);
    const qQ = new Map;

    function TQ(QQ, WQ) {
      var XQ;
      const wQ = null !== (XQ = qQ.get(QQ)) && void 0 !== XQ ? XQ : new Map;
      wQ.set(WQ, Date.now()), qQ.set(QQ, wQ)
    }

    function zQ(QQ) {
      const WQ = qQ.get(QQ);
      if (!WQ) return [];
      const XQ = Date.now();
      for (const [qQ, TQ] of WQ) XQ - TQ >= wQ.i && WQ.delete(qQ);
      return [...WQ.keys()]
    }
  },
  37008: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      const XQ = WQ.toLowerCase();
      for (const wQ of QQ)
        if (wQ.toLowerCase() === XQ) return !0;
      return !1
    }

    function qQ(QQ, WQ, XQ) {
      const qQ = [],
        TQ = [],
        zQ = [];
      for (const sQ of QQ) !sQ.isError && sQ.name && ("inGame" === sQ.location.status && sQ.location.inLobbyName === WQ || wQ(XQ, sQ.name) ? TQ.push({
        friend: sQ,
        place: "here"
      }) : "offline" === sQ.location.status ? zQ.push({
        friend: sQ,
        place: "offline"
      }) : qQ.push({
        friend: sQ,
        place: "online"
      }));
      return [...qQ, ...TQ, ...zQ]
    }

    function TQ(QQ, WQ, XQ) {
      const qQ = [],
        TQ = QQ.flatMap((QQ => "here" === QQ.place ? [QQ.friend.name] : []));
      for (const zQ of [...TQ, ...WQ]) wQ(qQ, zQ) || wQ(XQ, zQ) || qQ.push(zQ);
      return qQ
    }

    function zQ(QQ, WQ) {
      return null === QQ || void 0 === QQ || !QQ.canManage || wQ(QQ.whitelist, WQ) ? "none" : "whitelist" === QQ.visibility ? "required" : "quiet"
    }

    function sQ(QQ) {
      if (null === QQ) return !0;
      const {
        visibility: WQ
      } = QQ;
      return "public" === WQ || "unlisted" === WQ || "whitelist" === WQ && QQ.canManage
    }

    function FQ(QQ, WQ, XQ) {
      if (XQ) {
        const XQ = WQ.filter((WQ => !wQ(QQ.whitelist, WQ)));
        return {
          ...QQ,
          whitelist: [...QQ.whitelist, ...XQ]
        }
      }
      return {
        ...QQ,
        whitelist: QQ.whitelist.filter((QQ => !wQ(WQ, QQ)))
      }
    }

    function PQ(QQ, WQ) {
      const XQ = [];
      for (let wQ = 0; wQ < QQ.length; wQ += WQ) XQ.push(QQ.slice(wQ, wQ + WQ));
      return XQ
    }
    XQ.d(WQ, {
      c: () => sQ,
      f: () => TQ,
      g: () => qQ,
      j: () => wQ,
      m: () => PQ,
      p: () => zQ,
      r: () => FQ
    })
  },
  37286: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(61),
      qQ = XQ(2535);

    function TQ() {
      const QQ = (0, qQ.g)("lobbyLeaderboardInfo");
      return (0, wQ.useMemo)((() => function(QQ) {
        if (null === QQ) return null;
        const WQ = Object.entries(QQ),
          XQ = WQ.filter((QQ => {
            let [, WQ] = QQ;
            return void 0 !== WQ
          }));
        if (XQ.length === WQ.length) return QQ;
        const wQ = Object.fromEntries(XQ),
          qQ = Object.keys(QQ).filter((QQ => !Object.hasOwn(wQ, QQ)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${qQ.join(", ")}`), wQ
      }(QQ)), [QQ])
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);