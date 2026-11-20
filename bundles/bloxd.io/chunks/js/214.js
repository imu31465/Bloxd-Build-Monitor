export const id = 214;
export const ids = [214];
export const modules = {
  40697: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      LobbyManageView: () => Dk
    });
    var lT = cT(71),
      MT = cT(1497),
      KT = cT(2462),
      OT = cT(2485),
      yT = cT(2487),
      fT = cT(36383);

    function xT() {
      const [TT, kT] = (0, lT.useState)(new Map);
      return {
        get: kT => TT.get(kT),
        hold: (0, lT.useCallback)(((TT, cT, lT) => {
          kT((kT => new Map(kT).set(TT, cT))), lT.then((() => {
            kT((kT => {
              const cT = new Map(kT);
              return cT.delete(TT), cT
            }))
          }))
        }), [])
      }
    }
    var IT = cT(1046),
      AT = cT.n(IT),
      CT = cT(1195),
      jT = cT(1061),
      vT = cT(1348),
      tT = cT(2665),
      hT = cT(4968),
      NT = cT(3536);
    var QT = cT(1996),
      ST = cT(1470);

    function DT(TT, kT, cT) {
      const lT = TT.filter((TT => TT.name !== kT)),
        MT = lT.filter((TT => "none" === TT.role)).sort(((TT, kT) => kT.at - TT.at)),
        KT = lT.filter((TT => "none" !== TT.role)).sort(((TT, kT) => cT.indexOf(TT.role) - cT.indexOf(kT.role) || kT.at - TT.at));
      return [...TT.some((TT => TT.name === kT)) && null !== kT ? [kT] : [], ...[...MT, ...KT].map((TT => TT.name))]
    }

    function aT(TT, kT) {
      const cT = TT.banned.map((TT => TT.name)),
        lT = new Set(cT);
      return {
        here: DT(TT.here, kT, TT.roles.map((TT => TT.role))),
        away: TT.away.filter((TT => !lT.has(TT.name))).map((TT => TT.name)),
        banned: cT
      }
    }

    function FT(TT, kT) {
      const cT = TT.here.find((TT => TT.name === kT));
      if (cT) return {
        section: "here",
        player: cT
      };
      const lT = TT.banned.find((TT => TT.name === kT));
      if (lT) return {
        section: "banned",
        bannedAt: lT.at
      };
      const MT = TT.away.find((TT => TT.name === kT));
      return MT ? {
        section: "away",
        player: MT
      } : {
        section: "gone"
      }
    }
    const rT = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var PT = cT(2660),
      wT = cT(36369),
      mT = cT(36541),
      bT = cT(3059),
      zT = cT(339);

    function JT(TT, kT, cT) {
      return kT.map((kT => {
        if ("string" === typeof kT) return kT;
        const lT = "str" in kT ? kT.str : kT;
        return "string" === typeof lT ? lT : "entityName" in lT ? lT.entityName : "translationKey" in lT ? TT(lT.translationKey, (0, CT.m)(lT.params, cT)) : ""
      })).join("")
    }

    function oT(TT, kT, cT, lT, MT) {
      return MT - lT < 6e4 ? TT(`${cT}JustNow`) : TT(cT, {
        time: (0, zT._)((0, CT.k)(kT, cT), lT, MT)
      })
    }
    var HT = cT(1921),
      eT = cT(1692),
      GT = cT(1099);

    function VT(TT) {
      let {
        status: kT
      } = TT;
      return (0, GT.jsx)("span", {
        className: AT()("LobbyManageStatus", {
          LobbyManageStatusRefused: !kT.ok
        }),
        children: (0, GT.jsx)(HT.b, {
          text: kT.text
        })
      })
    }

    function ET(TT) {
      let {
        names: kT,
        cap: cT,
        filterFrom: MT,
        moreLabel: KT,
        reveal: OT = null,
        renderRow: yT
      } = TT;
      const {
        t: fT
      } = (0, CT.B)(), [xT, IT] = (0, lT.useState)(!1), [AT, vT] = (0, lT.useState)(""), hT = xT || null !== OT && kT.indexOf(OT) >= cT, NT = (hT || kT.length <= cT) && null !== MT && kT.length > MT, QT = AT.trim().toLowerCase();
      let ST = hT ? kT : kT.slice(0, cT);
      return NT && "" !== QT && (ST = ST.filter((TT => TT.toLowerCase().includes(QT)))), (0, GT.jsxs)(GT.Fragment, {
        children: [NT && (0, GT.jsx)(eT.b, {
          className: "LobbyManageFilter",
          placeholderText: fT("lobbyManage:findName"),
          ariaLabel: fT("lobbyManage:findName"),
          onValueChange: TT => {
            vT(TT)
          }
        }), ST.length > 0 && (0, GT.jsx)("div", {
          className: "PlayerRows",
          children: ST.map(((TT, kT) => yT(TT, ST.length - kT)))
        }), !hT && kT.length > cT && (0, GT.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, GT.jsx)(tT.c, {
            label: (0, GT.jsxs)(GT.Fragment, {
              children: [KT, " ", (0, GT.jsx)(jT.e, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              IT(!0)
            }
          })
        })]
      })
    }

    function ZT(TT) {
      let {
        value: kT,
        placeholder: cT,
        ariaLabel: MT,
        maxLength: KT,
        wide: OT = !1,
        onSave: yT
      } = TT;
      const fT = (0, lT.useRef)(null),
        [xT, IT] = (0, lT.useState)(0),
        CT = (0, lT.useRef)(!0),
        jT = (0, lT.useRef)(null),
        vT = (0, lT.useRef)({
          value: kT,
          onSave: yT
        });
      vT.current = {
        value: kT,
        onSave: yT
      };
      const tT = () => {
        const TT = jT.current;
        jT.current = null, null !== TT && TT !== vT.current.value && vT.current.onSave(TT).then((() => {
          CT.current && IT((TT => TT + 1))
        }))
      };
      return (0, lT.useEffect)((() => {
        null === jT.current && fT.current && (fT.current.value = kT)
      }), [kT, xT]), (0, lT.useEffect)((() => () => {
        CT.current = !1, tT()
      }), []), (0, GT.jsx)("div", {
        className: AT()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: OT
        }),
        onBlur: tT,
        children: (0, GT.jsx)(eT.b, {
          domRef: fT,
          defaultValue: kT,
          placeholderText: cT,
          ariaLabel: MT,
          maxLength: KT,
          onValueChange: TT => {
            jT.current = TT
          },
          onEnter: tT
        })
      })
    }
    const uT = ["mod", "coOwner"],
      XT = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function dT(TT) {
      var kT, cT, KT;
      let {
        name: OT,
        place: yT,
        openedIn: fT,
        isYou: IT,
        manage: AT,
        hiddenNames: vT,
        zIndex: tT
      } = TT;
      const {
        t: hT,
        selectedLanguage: NT
      } = (0, CT.B)(), [QT, DT] = (0, lT.useState)(null), {
        state: aT
      } = AT, FT = `player:${OT}`, zT = function(TT, kT) {
        if ("banned" === TT.section) return {
          ...rT,
          unban: !0
        };
        if ("gone" === TT.section) return rT;
        const {
          player: cT
        } = TT, lT = "here" === TT.section, MT = lT || "none" !== cT.role ? cT.can.roles : [];
        return {
          gamemode: lT && kT && null !== cT.gamemode && cT.can.gamemode,
          roles: MT,
          fixedRole: 0 === MT.length && "none" !== cT.role ? cT.role : null,
          kick: lT && cT.can.kick,
          ban: cT.can.ban,
          unban: !1
        }
      }(yT, null !== aT.gamemodes), HT = AT.statusOf(FT), eT = AT.isPending(FT), ET = xT(), ZT = Date.now(), dT = TT => {
        var kT, cT;
        return null !== (kT = null === (cT = (TT => aT.roles.find((kT => kT.role === TT)))(TT)) || void 0 === cT ? void 0 : cT.label) && void 0 !== kT ? kT : TT
      }, LT = TT => {
        const kT = XT[TT];
        return void 0 === kT ? void 0 : hT(kT)
      }, RT = "here" === yT.section || "away" === yT.section ? yT.player : null, gT = "here" === yT.section ? yT.player.id : null, {
        playerSocialPreview: UT,
        isFriend: YT
      } = null === gT ? {
        playerSocialPreview: (0, mT.g)(OT, null),
        isFriend: !1
      } : (0, wT.c)(gT, OT), BT = function() {
        AT.send(...arguments)
      }, WT = (TT, kT) => {
        ET.hold("role", TT, AT.send({
          type: "setRole",
          name: OT,
          role: TT
        }, FT, kT))
      };
      let nT = null;
      if ("ban" === (null === QT || void 0 === QT ? void 0 : QT.kind)) nT = hT("lobbyManageEntry:banConfirm", {
        playerName: OT
      });
      else if ("role" === (null === QT || void 0 === QT ? void 0 : QT.kind)) {
        var pT;
        nT = `${hT("lobbyManage:roleConfirm",{playerName:OT,role:dT(QT.role)})} ${null!==(pT=LT(QT.role))&&void 0!==pT?pT:""}`
      } else if (HT) nT = (0, GT.jsx)(VT, {
        status: HT
      });
      else if (IT) nT = hT("lobbyManage:you");
      else if ("here" === yT.section) "none" === yT.player.role && ZT - yT.player.at < 6e5 && (nT = oT(hT, NT.code, "lobbyManage:joinedAgo", yT.player.at, ZT));
      else if ("away" === yT.section) {
        if (yT.player.at > 0) {
          const TT = "kicked" === yT.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          nT = oT(hT, NT.code, TT, yT.player.at, ZT)
        }
      } else "banned" === yT.section ? null !== yT.bannedAt && (nT = oT(hT, NT.code, "lobbyManage:bannedAgo", yT.bannedAt, ZT)) : "banned" === fT && (nT = hT("lobbyManageEntry:unbanned"));
      return (0, GT.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": OT,
        children: (0, GT.jsxs)(PT.h, {
          playerSocialPreview: UT,
          isFriend: YT,
          status: nT,
          opensProfileCard: !IT && (0, wT.g)(!0, OT, vT),
          zIndex: tT,
          children: [null !== QT && (0, GT.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === QT.kind && (0, GT.jsxs)(ST.I, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                DT(null), BT({
                  type: "ban",
                  name: OT
                }, FT)
              },
              children: [(0, GT.jsx)(jT.e, {
                name: "gavel"
              }), (0, GT.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: hT("lobbyManageEntry:ban")
              })]
            }), "role" === QT.kind && (0, GT.jsx)(ST.e, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: QT.role
              },
              onClick: () => {
                DT(null), WT(QT.role)
              },
              children: hT("lobbyManage:makeRole", {
                role: dT(QT.role)
              })
            }), (0, GT.jsx)(ST.i, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                DT(null)
              },
              children: hT("general:cancel")
            })]
          }), null === QT && (0, GT.jsxs)(GT.Fragment, {
            children: [(0, GT.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [zT.gamemode && null !== RT && (0, GT.jsx)(bT.d, {
                options: (null !== (kT = aT.gamemodes) && void 0 !== kT ? kT : []).map((TT => ({
                  value: TT.value,
                  label: JT(hT, TT.label, vT)
                }))),
                value: null !== (cT = ET.get("gamemode")) && void 0 !== cT ? cT : RT.gamemode,
                disabled: eT,
                onChange: TT => {
                  (0, MT.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: TT.value
                  }), ET.hold("gamemode", TT.value, AT.send({
                    type: "setGamemode",
                    name: OT,
                    gamemode: TT.value
                  }, FT))
                }
              }), zT.roles.length > 0 && null !== RT && (0, GT.jsx)(bT.d, {
                options: [...aT.roles].reverse().filter((TT => zT.roles.includes(TT.role))).map((TT => ({
                  value: TT.role,
                  label: TT.label
                }))),
                value: null !== (KT = ET.get("role")) && void 0 !== KT ? KT : RT.role,
                disabled: eT,
                onChange: TT => {
                  var kT;
                  (kT = TT.value) !== (null === RT || void 0 === RT ? void 0 : RT.role) && (uT.includes(kT) ? DT({
                    kind: "role",
                    role: kT
                  }) : ((0, MT.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: kT
                  }), WT(kT, LT(kT))))
                }
              }), null !== zT.fixedRole && (0, GT.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: dT(zT.fixedRole)
              })]
            }), (0, GT.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [zT.kick && (0, GT.jsxs)(ST.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${hT("lobbyManageEntry:kick")} ${OT}`,
                disabled: eT,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  BT({
                    type: "kick",
                    name: OT
                  }, FT)
                },
                children: [(0, GT.jsx)(jT.e, {
                  name: "person-falling-burst"
                }), (0, GT.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: hT("lobbyManageEntry:kick")
                })]
              }), zT.ban && (0, GT.jsxs)(ST.L, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${hT("lobbyManageEntry:ban")} ${OT}`,
                disabled: eT,
                padDestructive: !0,
                onClick: () => {
                  DT({
                    kind: "ban"
                  })
                },
                children: [(0, GT.jsx)(jT.e, {
                  name: "gavel"
                }), (0, GT.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: hT("lobbyManageEntry:ban")
                })]
              }), zT.unban && (0, GT.jsxs)(ST.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${hT("lobbyManageEntry:unban")} ${OT}`,
                disabled: eT,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  BT({
                    type: "unban",
                    name: OT
                  }, FT)
                },
                children: [(0, GT.jsx)(jT.e, {
                  name: "user-unlock"
                }), (0, GT.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: hT("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function LT(TT) {
      var kT, cT, MT, KT;
      let {
        manage: OT,
        focusRequest: yT,
        onFocused: fT
      } = TT;
      const {
        t: xT
      } = (0, CT.B)(), IT = (0, QT.h)("players"), AT = (0, QT.h)("hiddenPlayerNames"), vT = (0, lT.useRef)(null), {
        state: hT
      } = OT, NT = null === IT.localId ? null : null !== (kT = null === (cT = IT.byId[IT.localId]) || void 0 === cT ? void 0 : cT.name) && void 0 !== kT ? kT : null, [DT] = (0, lT.useState)((() => aT(hT, NT))), rT = function(TT, kT, cT) {
        const lT = new Set([...TT.here, ...TT.away, ...TT.banned]),
          MT = aT(kT, cT),
          KT = kT => {
            const cT = MT[kT].filter((TT => !lT.has(TT)));
            for (const TT of cT) lT.add(TT);
            return [...TT[kT], ...cT]
          };
        return {
          here: KT("here"),
          away: KT("away"),
          banned: KT("banned")
        }
      }(DT, hT, NT), [PT, wT] = (0, lT.useState)(!1), mT = function(TT, kT) {
        return TT.here.filter((TT => TT.name !== kT && "none" === TT.role && TT.can.kick)).length
      }(hT, NT), bT = OT.statusOf("kickAll");
      (0, lT.useEffect)((() => {
        var TT, kT;
        if (null === yT) return;
        const cT = null === (TT = vT.current) || void 0 === TT ? void 0 : TT.querySelector(`[data-lobby-manage-row="${CSS.escape(yT.name)}"]`);
        null === cT || void 0 === cT || cT.scrollIntoView({
          block: "center"
        }), null === cT || void 0 === cT || null === (kT = cT.querySelector(".ProfilePreview")) || void 0 === kT || kT.focus({
          preventScroll: !0
        }), fT(yT.seq)
      }), [null === yT || void 0 === yT ? void 0 : yT.seq]);
      const zT = TT => (kT, cT) => (0, GT.jsx)(dT, {
        name: kT,
        place: FT(hT, kT),
        openedIn: TT,
        isYou: kT === NT,
        manage: OT,
        hiddenNames: AT,
        zIndex: cT
      }, kT);
      return (0, GT.jsxs)("div", {
        ref: vT,
        className: "LobbyManagePage",
        children: [rT.here.length > 0 && (0, GT.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, GT.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, GT.jsx)(tT.c, {
              label: xT("lobbyManage:here"),
              meta: hT.here.length
            }), mT >= 2 && !PT && (0, GT.jsxs)(ST.L, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: OT.isPending("kickAll"),
              onClick: () => {
                wT(!0)
              },
              children: [(0, GT.jsx)(jT.e, {
                name: "person-falling-burst"
              }), " ", xT("lobbyManage:kickAll")]
            })]
          }), PT && mT >= 2 && (0, GT.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, GT.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: xT("lobbyManage:kickAllConfirm", {
                count: mT
              })
            }), (0, GT.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, GT.jsx)(ST.I, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  wT(!1), OT.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: xT("lobbyManage:kickAll")
              }), (0, GT.jsx)(ST.i, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  wT(!1)
                },
                children: xT("general:cancel")
              })]
            })]
          }), bT && (0, GT.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, GT.jsx)(VT, {
              status: bT
            })
          }), (0, GT.jsx)(ET, {
            names: rT.here,
            cap: rT.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: zT("here")
          })]
        }), rT.away.length > 0 && (0, GT.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, GT.jsx)(tT.c, {
            label: xT("lobbyManage:notHere"),
            meta: rT.away.length
          }), (0, GT.jsx)(ET, {
            names: rT.away,
            cap: 5,
            filterFrom: null,
            moreLabel: xT("lobbyManage:allCount", {
              count: rT.away.length
            }),
            reveal: null !== (MT = null === yT || void 0 === yT ? void 0 : yT.name) && void 0 !== MT ? MT : null,
            renderRow: zT("away")
          })]
        }), rT.banned.length > 0 && (0, GT.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, GT.jsx)(tT.c, {
            label: xT("lobbyManage:banned"),
            meta: rT.banned.length
          }), (0, GT.jsx)(ET, {
            names: rT.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: xT("lobbyManage:allCount", {
              count: rT.banned.length
            }),
            reveal: null !== (KT = null === yT || void 0 === yT ? void 0 : yT.name) && void 0 !== KT ? KT : null,
            renderRow: zT("banned")
          })]
        })]
      })
    }
    var RT = cT(4611),
      gT = cT(1663),
      UT = cT(36523),
      YT = cT(36533),
      BT = cT(36531),
      WT = cT(36528),
      nT = cT(36567),
      pT = cT(36550),
      iT = cT(36559);

    function qT(TT) {
      const kT = new Set;
      for (const cT of TT) kT.add(cT.toLowerCase());
      return kT
    }

    function sT(TT) {
      var kT, cT;
      let {
        state: MT,
        lobbyName: KT,
        listed: OT,
        isListed: yT,
        pN: fT,
        uF: xT,
        statusOf: IT
      } = TT;
      const {
        t: AT,
        selectedLanguage: jT
      } = (0, CT.B)(), vT = (0, gT.n)(), hT = (0, QT.h)("players"), NT = null === hT.localId ? null : null !== (kT = null === (cT = hT.byId[hT.localId]) || void 0 === cT ? void 0 : cT.name) && void 0 !== kT ? kT : null, ST = (0, lT.useMemo)((() => (0, WT.i)(vT.friends, KT, MT.here.map((TT => TT.name)))), [vT.friends, KT, MT.here]), DT = new Map(ST.map((TT => [TT.friend.name.toLowerCase(), TT]))), aT = function(TT) {
        let {
          refused: kT,
          listed: cT,
          here: lT,
          friends: MT,
          excluded: KT
        } = TT;
        const OT = qT(KT),
          yT = TT => TT.filter((TT => {
            const kT = TT.toLowerCase();
            return !OT.has(kT) && (OT.add(kT), !0)
          }));
        return {
          added: [],
          refused: yT(kT),
          listed: yT(cT),
          suggested: yT([...lT, ...MT])
        }
      }({
        refused: MT.refused.map((TT => TT.name)),
        listed: OT,
        here: MT.here.map((TT => TT.name)),
        friends: ST.flatMap((TT => "here" === TT.place ? [] : [TT.friend.name])),
        excluded: [...null === NT ? [] : [NT], ...[...MT.here, ...MT.away].flatMap((TT => "none" === TT.role || (0, WT.j)(OT, TT.name) ? [] : [TT.name]))]
      }), [FT] = (0, lT.useState)(aT), [rT, PT] = (0, lT.useState)([]), bT = function(TT, kT, cT) {
        const lT = qT(cT),
          MT = qT([...cT, ...TT.refused, ...TT.listed, ...TT.suggested]),
          KT = cT => [...TT[cT].filter((TT => !lT.has(TT.toLowerCase()))), ...kT[cT].filter((TT => {
            const kT = TT.toLowerCase();
            return !MT.has(kT) && (MT.add(kT), !0)
          }))];
        return {
          added: [...cT],
          refused: KT("refused"),
          listed: KT("listed"),
          suggested: KT("suggested")
        }
      }(FT, aT, rT), zT = (TT, kT) => {
        var cT, lT;
        const KT = TT.toLowerCase(),
          OT = DT.get(KT),
          xT = MT.here.find((TT => TT.name.toLowerCase() === KT)),
          CT = MT.refused.find((TT => TT.name.toLowerCase() === KT)),
          vT = null !== (cT = null === IT || void 0 === IT ? void 0 : IT(TT)) && void 0 !== cT ? cT : null;
        let tT = null;
        vT ? tT = (0, GT.jsx)(VT, {
          status: vT
        }) : CT ? tT = oT(AT, jT.code, "lobbyManage:triedToJoinAgo", CT.at, Date.now()) : OT && xT ? tT = AT("lobbyManage:friendHere") : OT ? tT = "online" === OT.place ? AT("lobbyManage:friendOnline") : AT("lobbyManage:friend") : xT && (tT = AT("lobbyManage:hereStatus"));
        let hT = null !== (lT = null === OT || void 0 === OT ? void 0 : OT.friend) && void 0 !== lT ? lT : (0, mT.g)(TT, null);
        return !OT && null !== xT && void 0 !== xT && xT.id && (hT = (0, wT.c)(xT.id, xT.name).playerSocialPreview), (0, GT.jsx)(pT.c, {
          playerSocialPreview: hT,
          isFriend: void 0 !== OT,
          hideFriendBadge: !0,
          status: tT,
          zIndex: kT,
          UA: {
            on: yT(TT),
            onChange: kT => {
              fT(TT, kT)
            }
          }
        }, KT)
      }, JT = [...bT.added, ...bT.refused];
      return (0, GT.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, GT.jsx)(tT.c, {
          label: AT("worldSocial:whitelist"),
          meta: OT.length
        }), (0, GT.jsx)(iT.d, {
          label: AT("lobbyManage:add"),
          icon: "user-check",
          placeholder: AT("socialBar:enterPlayerName"),
          onSubmit: async TT => {
            const kT = await xT(TT);
            return kT.ok && PT((kT => [TT, ...kT])), kT
          }
        }), JT.length > 0 && (0, GT.jsx)("div", {
          className: "PlayerRows",
          children: JT.map(((TT, kT) => zT(TT, JT.length - kT)))
        }), (0, GT.jsx)(ET, {
          names: bT.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: AT("lobbyManage:allOnWhitelist", {
            count: bT.listed.length
          }),
          renderRow: zT
        }), (0, GT.jsx)(ET, {
          names: bT.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: AT("lobbyManage:allCount", {
            count: bT.suggested.length
          }),
          renderRow: zT
        })]
      })
    }

    function Tk(TT) {
      let {
        manage: kT,
        listing: cT
      } = TT;
      const {
        t: lT
      } = (0, CT.B)(), KT = (TT, cT) => ((0, MT.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: TT
      }), kT.send({
        type: "setListing",
        field: TT,
        value: cT
      }, `listing:${TT}`)), OT = TT => {
        const cT = kT.statusOf(`listing:${TT}`);
        return cT && !cT.ok && (0, GT.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, GT.jsx)(VT, {
            status: cT
          })
        })
      };
      return (0, GT.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, GT.jsx)(tT.c, {
          label: lT("lobbyManage:inWorldsList")
        }), (0, GT.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, GT.jsx)("div", {
            className: "SliderText",
            children: lT("lobbyManage:description")
          }), (0, GT.jsx)(ZT, {
            value: cT.description,
            ariaLabel: lT("lobbyManage:description"),
            wide: !0,
            onSave: TT => KT("description", TT)
          })]
        }), OT("description"), (0, GT.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, GT.jsx)("div", {
            className: "SliderText",
            children: lT("lobbyManage:emojis")
          }), (0, GT.jsx)(ZT, {
            value: cT.emojis,
            ariaLabel: lT("lobbyManage:emojis"),
            onSave: TT => KT("emojis", TT)
          })]
        }), OT("emojis"), (0, GT.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, GT.jsx)("div", {
            className: "SliderText",
            children: lT("lobbyManage:colour")
          }), (0, GT.jsx)(kk, {
            value: cT.colour,
            ariaLabel: lT("lobbyManage:colour"),
            onSave: TT => {
              KT("colour", TT)
            }
          })]
        }), OT("colour")]
      })
    }

    function kk(TT) {
      let {
        value: kT,
        ariaLabel: cT,
        onSave: MT
      } = TT;
      const KT = (0, lT.useRef)(null),
        OT = (0, lT.useRef)({
          value: kT,
          onSave: MT
        });
      OT.current = {
        value: kT,
        onSave: MT
      };
      const yT = (0, lT.useRef)(null),
        fT = (0, lT.useRef)(!1),
        xT = TT => {
          fT.current && TT.value !== OT.current.value && TT.value !== yT.current && (yT.current = TT.value, OT.current.onSave(TT.value))
        };
      return (0, lT.useEffect)((() => {
        KT.current && document.activeElement !== KT.current && (KT.current.value = kT)
      }), [kT]), (0, lT.useEffect)((() => {
        const TT = KT.current,
          kT = () => {
            xT(TT)
          };
        return TT.addEventListener("change", kT), () => {
          TT.removeEventListener("change", kT), xT(TT)
        }
      }), []), (0, GT.jsx)("input", {
        ref: KT,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: kT,
        "aria-label": cT,
        onInput: () => {
          fT.current = !0
        },
        onBlur: TT => {
          xT(TT.currentTarget)
        }
      })
    }

    function ck(TT) {
      let {
        manage: kT
      } = TT;
      const {
        lobbyName: cT,
        shownLobbyName: lT
      } = (0, QT.h)("connectedGame");
      return kT.state.you.canSetVisibility && null !== cT ? (0, GT.jsx)(Mk, {
        manage: kT,
        lobbyName: cT,
        worldCode: null !== lT && void 0 !== lT ? lT : cT
      }, cT) : (0, GT.jsx)(Kk, {
        manage: kT,
        lobbyName: null !== cT && void 0 !== cT ? cT : ""
      })
    }

    function lk(TT) {
      return TT.map((TT => TT.toLowerCase())).sort().join(",")
    }

    function Mk(TT) {
      var kT;
      let {
        manage: cT,
        lobbyName: KT,
        worldCode: OT
      } = TT;
      const {
        t: yT
      } = (0, CT.B)(), {
        settings: fT,
        loading: xT,
        change: IT,
        retry: AT,
        refresh: jT
      } = (0, UT.i)(KT), hT = (0, gT.n)(), {
        state: NT
      } = cT, QT = (0, lT.useRef)(fT);
      QT.current = fT;
      const DT = lk(null !== (kT = NT.whitelist) && void 0 !== kT ? kT : []),
        aT = null !== NT.whitelist;
      (0, lT.useEffect)((() => {
        const TT = QT.current;
        null !== TT && (TT.visibility !== NT.visibility || aT && lk(TT.whitelist) !== DT) && jT()
      }), [NT.visibility, DT, aT, jT]);
      const FT = async (TT, kT) => {
        let cT = null;
        return await IT(TT, kT, {
          quiet: !0,
          onAnswer: TT => {
            cT = TT
          }
        }), cT
      }, rT = (TT, kT) => {
        null !== kT && "error" in kT && cT.showStatus(TT, {
          ok: !1,
          text: [yT(kT.error)]
        })
      }, PT = async TT => {
        if (null === fT || TT === fT.visibility) return;
        (0, MT.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: TT
        });
        const kT = "whitelist" === TT ? (0, WT.e)((0, WT.i)(hT.friends, KT, NT.here.map((TT => TT.name))), (0, nT.d)(KT), fT.whitelist) : [],
          cT = await FT({
            setVisibility: TT
          }, (kT => ({
            ...kT,
            visibility: TT
          })));
        rT("mode", cT), null === cT || "error" in cT || await (async TT => {
          for (const kT of (0, WT.n)(TT, RT.D))
            if (!await IT({
                whitelistAdd: kT
              }, (TT => (0, WT.t)(TT, kT, !0)))) return !1;
          return !0
        })(kT)
      }, wT = (0, lT.useMemo)((() => {
        var TT;
        if (null === fT) return [];
        const kT = null !== (TT = NT.whitelist) && void 0 !== TT ? TT : [];
        return [...kT.filter((TT => (0, WT.j)(fT.whitelist, TT))), ...fT.whitelist.filter((TT => !(0, WT.j)(kT, TT)))]
      }), [fT, NT.whitelist]), mT = cT.statusOf("mode");
      return (0, GT.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, GT.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, GT.jsx)(tT.c, {
            label: yT("worldSocial:whoCanJoin")
          }), null === fT && xT && (0, GT.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, GT.jsx)(vT.d, {})
          }), null === fT && !xT && (0, GT.jsx)(ST.i, {
            className: "SmallTextLight",
            onClick: AT,
            children: yT("worldSocial:loadFailed")
          }), null !== fT && (0, GT.jsx)(YT.b, {
            visibility: fT.visibility,
            onPick: TT => {
              PT(TT)
            }
          }), mT && (0, GT.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, GT.jsx)(VT, {
              status: mT
            })
          }), null !== fT && "private" !== fT.visibility && (0, GT.jsx)(BT.d, {
            worldCode: OT,
            message: null
          })]
        }), "whitelist" === (null === fT || void 0 === fT ? void 0 : fT.visibility) && (0, GT.jsx)(sT, {
          state: NT,
          lobbyName: KT,
          listed: wT,
          isListed: TT => (0, WT.j)(fT.whitelist, TT),
          pN: (TT, kT) => {
            (0, MT.reportAnalyticsClick)(kT ? {
              id: "lobby_manage.whitelist_add",
              value: "UA"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), FT(kT ? {
              whitelistAdd: [TT]
            } : {
              whitelistRemove: TT
            }, (cT => (0, WT.t)(cT, [TT], kT))).then((kT => {
              rT(`whitelist:${TT.toLowerCase()}`, kT)
            }))
          },
          uF: async TT => {
            (0, MT.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const kT = await FT({
              whitelistAdd: [TT]
            }, (kT => (0, WT.t)(kT, [TT], !0)));
            return null === kT ? {
              ok: !1,
              error: yT("worldSocial:changeFailed")
            } : "error" in kT ? {
              ok: !1,
              error: yT(kT.error)
            } : (0, WT.j)(kT.notFound, TT) ? {
              ok: !1,
              error: yT("lobbyManage:noPlayerCalled", {
                playerName: TT
              })
            } : {
              ok: !0
            }
          },
          statusOf: TT => cT.statusOf(`whitelist:${TT.toLowerCase()}`)
        }), "public" === (null === fT || void 0 === fT ? void 0 : fT.visibility) && null !== NT.listing && (0, GT.jsx)(Tk, {
          manage: cT,
          listing: NT.listing
        })]
      })
    }

    function Kk(TT) {
      var kT;
      let {
        manage: cT,
        lobbyName: lT
      } = TT;
      const {
        t: KT
      } = (0, CT.B)(), {
        state: OT
      } = cT, yT = xT(), fT = null !== (kT = OT.whitelist) && void 0 !== kT ? kT : [];
      return (0, GT.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, GT.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, GT.jsx)(tT.c, {
            label: KT("worldSocial:whoCanJoin")
          }), (0, GT.jsx)("div", {
            className: "LobbyManageModeText",
            children: KT(`worldSocial:${OT.visibility}`)
          })]
        }), "whitelist" === OT.visibility && OT.you.canEditWhitelist && (0, GT.jsx)(sT, {
          state: OT,
          lobbyName: lT,
          listed: fT,
          isListed: TT => {
            var kT;
            return null !== (kT = yT.get(TT.toLowerCase())) && void 0 !== kT ? kT : (0, WT.j)(fT, TT)
          },
          pN: (TT, kT) => {
            (0, MT.reportAnalyticsClick)(kT ? {
              id: "lobby_manage.whitelist_add",
              value: "UA"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const lT = TT.toLowerCase();
            yT.hold(lT, kT, cT.send(kT ? {
              type: "whitelistAdd",
              names: [TT]
            } : {
              type: "whitelistRemove",
              name: TT
            }, `whitelist:${lT}`))
          },
          uF: async TT => {
            (0, MT.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const kT = await cT.send({
              type: "whitelistAdd",
              names: [TT]
            }, "whitelist-field");
            return kT.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, GT.jsx)(HT.b, {
                text: kT.message
              })
            }
          },
          statusOf: TT => cT.statusOf(`whitelist:${TT.toLowerCase()}`)
        }), "public" === OT.visibility && null !== OT.listing && (0, GT.jsx)(Tk, {
          manage: cT,
          listing: OT.listing
        })]
      })
    }
    var Ok = cT(4945),
      yk = cT(1379);
    const fk = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const xk = (0, lT.memo)((function(TT) {
      var kT;
      let {
        rule: cT,
        value: lT,
        status: MT,
        pending: KT,
        hiddenNames: OT,
        jW: yT,
        onAction: fT
      } = TT;
      const {
        t: xT
      } = (0, CT.B)(), IT = TT => yT(cT, TT), AT = (TT, kT) => {
        fT(cT, TT, kT)
      }, jT = JT(xT, cT.label, OT), vT = cT.info ? JT(xT, cT.info, OT) : void 0, tT = cT.placeholder ? JT(xT, cT.placeholder, OT) : void 0, hT = (null !== (kT = cT.options) && void 0 !== kT ? kT : []).map((TT => ({
        value: TT.value,
        label: JT(xT, TT.label, OT)
      }))), NT = Math.max(0, ...hT.map((TT => function(TT) {
        let kT = 0;
        for (const cT of TT) kT += fk.test(cT) ? 2 : 1;
        return kT
      }(TT.label)))), QT = MT && (0, GT.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, GT.jsx)(VT, {
          status: MT
        })
      }), DT = (0, GT.jsxs)("div", {
        className: "SliderText",
        children: [jT, void 0 !== vT && (0, GT.jsx)(yk.b, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: vT
        })]
      });
      return "toggle" === cT.kind ? (0, GT.jsxs)(GT.Fragment, {
        children: [(0, GT.jsx)(Ok.e, {
          label: jT,
          checked: !0 === lT,
          circleInfoText: vT,
          disabled: KT,
          onClick: IT
        }), QT]
      }) : "choice" === cT.kind && hT.length <= 3 ? (0, GT.jsxs)(GT.Fragment, {
        children: [(0, GT.jsx)(Ok.h, {
          label: jT,
          options: hT,
          value: String(lT),
          circleInfoText: vT,
          onChange: IT
        }), QT]
      }) : (0, GT.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [DT, "choice" === cT.kind && (0, GT.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": NT
          },
          children: (0, GT.jsx)(bT.d, {
            options: hT,
            value: String(lT),
            disabled: KT,
            onChange: TT => {
              IT(TT.value)
            }
          })
        }), ("number" === cT.kind || "text" === cT.kind) && (0, GT.jsx)(ZT, {
          value: null === lT ? "" : String(lT),
          placeholder: tT,
          ariaLabel: jT,
          onSave: TT => {
            const kT = TT.trim(),
              lT = Number(kT);
            return IT("number" === cT.kind && "" !== kT && Number.isFinite(lT) ? lT : kT)
          }
        }), "action" === cT.kind && (0, GT.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [hT.length > 3 && (0, GT.jsx)(bT.d, {
            options: hT,
            value: {
              value: "",
              label: null !== tT && void 0 !== tT ? tT : jT
            },
            disabled: KT,
            onChange: TT => {
              AT(TT.value)
            }
          }), hT.length > 0 && hT.length <= 3 && hT.map((TT => (0, GT.jsx)(ST.i, {
            className: "SmallTextLight",
            disabled: KT,
            onClick: () => {
              AT(TT.value)
            },
            children: TT.label
          }, TT.value))), 0 === hT.length && (0, GT.jsx)(ST.i, {
            className: "SmallTextLight",
            disabled: KT,
            onClick: () => {
              AT()
            },
            children: null !== tT && void 0 !== tT ? tT : jT
          })]
        }), "names" === cT.kind && (0, GT.jsx)(Ik, {
          names: Array.isArray(lT) ? lT : [],
          pending: KT,
          onAction: AT
        }), QT]
      })
    }));

    function Ik(TT) {
      let {
        names: kT,
        pending: cT,
        onAction: MT
      } = TT;
      const {
        t: KT
      } = (0, CT.B)(), OT = (0, lT.useRef)(null), [yT, fT] = (0, lT.useState)(""), xT = () => {
        const TT = yT.trim();
        "" !== TT && (MT(TT, "add"), OT.current && (OT.current.value = ""), fT(""))
      };
      return (0, GT.jsxs)("div", {
        className: "LobbyManageNames",
        children: [kT.map((TT => (0, GT.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, GT.jsx)("span", {
            className: "LobbyManageNameText",
            children: TT
          }), (0, GT.jsx)(ST.i, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: KT("lobbyManage:removeName", {
              name: TT
            }),
            disabled: cT,
            onClick: () => {
              MT(TT, "remove")
            },
            children: (0, GT.jsx)(jT.e, {
              name: "xmark"
            })
          })]
        }, TT))), (0, GT.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, GT.jsx)(eT.b, {
            domRef: OT,
            placeholderText: KT("lobbyManage:namePlaceholder"),
            ariaLabel: KT("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: TT => {
              fT(TT)
            },
            onEnter: xT
          }), (0, GT.jsx)(ST.i, {
            className: "SmallTextLight",
            disabled: cT || "" === yT.trim(),
            onClick: xT,
            children: KT("lobbyManage:addHere")
          })]
        })]
      })
    }
    const Ak = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function Ck(TT) {
      return Ak.flatMap((kT => {
        let {
          group: cT
        } = kT;
        return TT.filter((TT => TT.group === cT && void 0 === TT.parent))
      }))
    }

    function jk(TT) {
      let {
        manage: kT,
        rowsShown: cT
      } = TT;
      const {
        t: KT
      } = (0, CT.B)(), OT = (0, QT.h)("hiddenPlayerNames"), {
        rules: yT
      } = kT.state, fT = xT(), IT = new Set(Ck(yT).slice(0, cT)), AT = TT => {
        const kT = fT.get(TT.key);
        return void 0 === kT ? TT.value : kT
      }, {
        hold: jT
      } = fT, vT = (0, lT.useCallback)(((TT, cT) => {
        (0, MT.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: TT.key
        });
        const lT = kT.send({
          type: "setRule",
          key: TT.key,
          value: cT
        }, `rule:${TT.key}`);
        return jT(TT.key, cT, lT), lT
      }), [kT, jT]), hT = (0, lT.useCallback)(((TT, cT, lT) => {
        (0, MT.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: TT.key
        }), kT.send({
          type: "ruleAction",
          key: TT.key,
          ...void 0 === cT ? {} : {
            arg: cT
          },
          ...void 0 === lT ? {} : {
            op: lT
          }
        }, `rule:${TT.key}`, void 0 === lT ? KT("lobbyManage:setJustNow") : void 0)
      }), [kT, KT]), NT = TT => {
        const cT = `rule:${TT.key}`;
        return (0, GT.jsx)(xk, {
          rule: TT,
          value: AT(TT),
          status: kT.statusOf(cT),
          pending: kT.isPending(cT),
          hiddenNames: OT,
          jW: vT,
          onAction: hT
        }, TT.key)
      };
      return (0, GT.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: Ak.map((TT => {
          let {
            group: kT,
            title: cT
          } = TT;
          const MT = yT.filter((TT => TT.group === kT && IT.has(TT)));
          return 0 === MT.length ? null : (0, GT.jsxs)(lT.Fragment, {
            children: [(0, GT.jsx)(tT.c, {
              label: KT(cT)
            }), MT.map((TT => {
              const kT = yT.filter((kT => kT.parent === TT.key));
              return 0 === kT.length || !0 !== AT(TT) ? NT(TT) : (0, GT.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [NT(TT), kT.map(NT)]
              }, TT.key)
            }))]
          }, kT)
        }))
      })
    }
    const vk = {
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
      tk = 5,
      hk = (0, lT.memo)((function(TT) {
        let {
          page: kT,
          manage: cT,
          leaderboard: MT,
          focusRequest: KT,
          onFocused: OT,
          ruleRowsShown: yT
        } = TT;
        return "leaderboard" === kT ? (0, GT.jsx)(lT.Suspense, {
          fallback: (0, GT.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, GT.jsx)(vT.d, {})
          }),
          children: MT
        }) : "joining" === kT ? (0, GT.jsx)(ck, {
          manage: cT
        }) : "rules" === kT ? (0, GT.jsx)(jk, {
          manage: cT,
          rowsShown: yT
        }) : (0, GT.jsx)(LT, {
          manage: cT,
          focusRequest: KT,
          onFocused: OT
        })
      }));

    function Nk(TT) {
      let {
        page: kT
      } = TT;
      const {
        t: cT
      } = (0, CT.B)(), lT = vk[kT];
      return (0, GT.jsxs)(GT.Fragment, {
        children: [(0, GT.jsx)(jT.e, {
          name: lT.icon
        }), " ", (0, GT.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: cT(lT.title)
        })]
      })
    }

    function Qk(TT) {
      var kT;
      const {
        t: cT
      } = (0, CT.B)(), {
        pages: KT,
        landing: OT
      } = TT, fT = (0, lT.useRef)(null), xT = (0, lT.useRef)(null), IT = (0, lT.useRef)(null), jT = (0, lT.useRef)(new Map), [vT, QT] = (0, lT.useState)(null), ST = (0, lT.useRef)(vT), DT = (0, lT.useRef)(0), [aT, FT] = (0, lT.useState)(KT[0]), rT = null !== vT && void 0 !== vT ? vT : KT.includes(aT) ? aT : KT[0], [PT] = (0, lT.useState)(null !== (kT = null === OT || void 0 === OT ? void 0 : OT.page) && void 0 !== kT ? kT : null), wT = null !== PT && KT.includes(PT) ? [PT, ...KT.filter((TT => TT !== PT))] : KT, mT = Math.max(1, Math.ceil(Ck(TT.manage.state.rules).length / tk)), bT = wT.flatMap((TT => "rules" === TT ? Array(mT).fill(TT) : [TT])), zT = function(TT, kT) {
        const [cT, MT] = (0, lT.useState)(TT), KT = cT >= kT;
        return KT && cT !== 1 / 0 && MT(1 / 0), (0, lT.useLayoutEffect)((() => {
          if (KT) return;
          let TT = !0;
          return (0, NT.e)().then((() => {
            TT && MT((TT => TT + 1))
          })), () => {
            TT = !1
          }
        }), [cT, KT]), KT ? 1 / 0 : cT
      }(1, bT.length), JT = bT.slice(0, zT), oT = new Set(JT), HT = zT < bT.length, eT = HT ? JT.filter((TT => "rules" === TT)).length * tk : 1 / 0, VT = (0, lT.useRef)(TT.focusRequest);
      VT.current = TT.focusRequest;
      const ET = TT => {
          ST.current = TT, QT(TT)
        },
        ZT = () => {
          var TT, kT;
          fT.current.style.scrollPaddingTop = `${null!==(TT=null===(kT=IT.current)||void 0===kT?void 0:kT.offsetHeight)&&void 0!==TT?TT:0}px`
        },
        uT = TT => {
          const kT = fT.current,
            cT = jT.current.get(TT);
          if (void 0 === cT) return;
          const lT = document.activeElement,
            MT = VT.current,
            KT = null === MT ? null : cT.querySelector(`[data-lobby-manage-row="${CSS.escape(MT.name)}"]`);
          ZT(), lT instanceof HTMLElement && null !== KT && void 0 !== KT && KT.contains(lT) ? lT.scrollIntoView({
            block: "center"
          }) : null === cT.previousElementSibling ? kT.scrollTop = 0 : cT.scrollIntoView({
            block: "start"
          }), DT.current = kT.scrollTop
        },
        XT = TT => {
          (0, MT.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: TT
          }), ET(TT), uT(TT)
        },
        dT = () => {
          var TT, kT;
          const cT = fT.current,
            lT = cT.getBoundingClientRect().top + (null !== (TT = null === (kT = IT.current) || void 0 === kT ? void 0 : kT.offsetHeight) && void 0 !== TT ? TT : 0),
            MT = KT.map((TT => {
              var kT, cT;
              return (null !== (kT = null === (cT = jT.current.get(TT)) || void 0 === cT ? void 0 : cT.getBoundingClientRect().top) && void 0 !== kT ? kT : 1 / 0) - lT
            })),
            OT = !HT && cT.scrollTop + cT.clientHeight >= cT.scrollHeight - 1;
          FT(KT[(0, yT.j)(MT, OT)])
        },
        LT = () => {
          null !== ST.current && (ET(null), dT())
        };
      (0, lT.useLayoutEffect)((() => {
        null !== OT && KT.includes(OT.page) && XT(OT.page)
      }), [null === OT || void 0 === OT ? void 0 : OT.seq]), (0, lT.useLayoutEffect)((() => {
        null === ST.current || KT.includes(ST.current) || LT()
      }));
      const {
        onFocused: RT
      } = TT, gT = (0, lT.useCallback)((TT => {
        null !== ST.current && uT(ST.current), RT(TT)
      }), [RT]);
      (0, lT.useLayoutEffect)((() => {
        const TT = ST.current;
        null !== TT && (!HT || KT.indexOf(bT[zT - 1]) < KT.indexOf(TT)) && uT(TT)
      }), [zT]), (0, lT.useEffect)((() => {
        const TT = new ResizeObserver((() => {
          null !== ST.current ? uT(ST.current) : ZT()
        }));
        return TT.observe(fT.current), TT.observe(xT.current), () => {
          TT.disconnect()
        }
      }), []), (0, lT.useLayoutEffect)((() => {
        const TT = IT.current,
          kT = null === TT || void 0 === TT ? void 0 : TT.querySelector(".SegmentedToggleOptionSelected");
        kT && (TT.scrollLeft = Math.min(kT.offsetLeft, Math.max(TT.scrollLeft, kT.offsetLeft + kT.offsetWidth - TT.clientWidth)))
      }), [rT]);
      return (0, GT.jsxs)("div", {
        ref: fT,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === ST.current ? dT() : Math.abs(fT.current.scrollTop - DT.current) > 1 && LT()
        },
        onClick: TT => {
          var kT;
          null !== (kT = IT.current) && void 0 !== kT && kT.contains(TT.target) || LT()
        },
        onFocus: TT => {
          var kT;
          const cT = null === ST.current ? null : jT.current.get(ST.current);
          !cT || cT.contains(TT.target) || null !== (kT = IT.current) && void 0 !== kT && kT.contains(TT.target) || LT()
        },
        children: [KT.length > 1 && (0, GT.jsx)("div", {
          ref: IT,
          className: "LobbyManageChips",
          children: (0, GT.jsx)(hT.d, {
            options: KT.map((TT => ({
              value: TT,
              label: (0, GT.jsx)(Nk, {
                page: TT
              }),
              ariaLabel: cT(vk[TT].title)
            }))),
            value: rT,
            padTabs: "2",
            ariaLabel: cT("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: XT
          })
        }), (0, GT.jsx)("div", {
          ref: xT,
          className: AT()("LobbyManageInner", {
            Staging: HT
          }),
          children: KT.filter((TT => oT.has(TT))).map((kT => {
            const cT = kT === vT;
            return (0, GT.jsxs)("section", {
              ref: TT => {
                TT ? jT.current.set(kT, TT) : jT.current.delete(kT)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": cT || void 0,
              children: [KT.length > 1 && (0, GT.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": cT || void 0,
                "data-pad-unavailable": cT || void 0,
                children: (0, GT.jsx)(tT.c, {
                  label: (0, GT.jsx)(Nk, {
                    page: kT
                  })
                })
              }), (0, GT.jsx)(hk, {
                page: kT,
                manage: TT.manage,
                leaderboard: TT.leaderboard,
                focusRequest: TT.focusRequest,
                onFocused: gT,
                ruleRowsShown: "rules" === kT ? eT : 1 / 0
              })]
            }, kT)
          }))
        })]
      })
    }

    function Sk(TT) {
      return void 0 === (null === TT || void 0 === TT ? void 0 : TT.page) ? null : {
        page: TT.page,
        seq: TT.seq
      }
    }

    function Dk(TT) {
      let {
        leaderboard: kT
      } = TT;
      const cT = function() {
          const TT = (0, KT.f)("lobbyManage"),
            [kT, cT] = (0, lT.useReducer)((TT => TT + 1), 0),
            [MT] = (0, lT.useState)((() => new fT.b(cT)));
          return (0, lT.useEffect)((() => {
            const TT = MT.nextDeadline();
            if (null === TT) return;
            const kT = setTimeout((() => {
              MT.expire(Date.now()), cT()
            }), Math.max(0, TT - Date.now()));
            return () => {
              clearTimeout(kT)
            }
          })), (0, lT.useMemo)((() => null === TT ? null : {
            state: TT,
            send: (TT, kT, lT) => {
              const KT = MT.send(TT, kT, null !== lT && void 0 !== lT ? lT : null);
              return cT(), KT
            },
            statusOf: TT => MT.statusOf(TT, Date.now()),
            showStatus: (TT, kT) => {
              MT.show(TT, kT)
            },
            isPending: TT => MT.isPending(TT)
          }), [TT, kT, MT])
        }(),
        xT = (0, yT.m)((0, KT.f)("lobbyLeaderboardInfo")),
        IT = (0, OT.l)(),
        [AT, CT] = (0, lT.useState)((() => Sk(IT))),
        [jT, vT] = (0, lT.useState)(null);
      return (0, lT.useEffect)((() => {
        null === IT && (0, MT.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, lT.useEffect)((() => {
        null !== IT && (CT((TT => (null === TT || void 0 === TT ? void 0 : TT.seq) === IT.seq ? TT : Sk(IT))), void 0 !== IT.focusName && "players" === IT.page ? vT({
          name: IT.focusName,
          seq: IT.seq
        }) : (0, OT.k)(IT.seq))
      }), [null === IT || void 0 === IT ? void 0 : IT.seq]), null === cT ? null : (0, GT.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, GT.jsx)(Qk, {
          pages: (0, yT.f)(cT.state, xT),
          manage: cT,
          leaderboard: kT,
          focusRequest: jT,
          onFocused: OT.k,
          landing: AT
        })
      })
    }
  },
  36383: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => IT,
      e: () => fT
    });
    var lT = cT(1497),
      MT = cT(1974),
      KT = cT(1953);
    const OT = 1e4;
    let yT = 0;

    function fT(TT) {
      const kT = ++yT;
      return new Promise((cT => {
        const yT = kT => {
            fT(), clearTimeout(xT), !1 === (null === kT || void 0 === kT ? void 0 : kT.ok) && (0, lT.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: TT.type
            }), cT(kT)
          },
          fT = MT.b.subscribe("lobbyManage", (TT => {
            const cT = function(TT, kT) {
              var cT;
              return null !== (cT = null === TT || void 0 === TT ? void 0 : TT.results.find((TT => TT.requestId === kT))) && void 0 !== cT ? cT : null
            }(TT, kT);
            null !== cT && yT(cT)
          })),
          xT = setTimeout((() => {
            yT(null)
          }), OT);
        KT.gameBridge.send("lobbyManage", {
          ...TT,
          requestId: kT
        })
      }))
    }
    const xT = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class IT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fT;
        this.onChange = TT, this.sendAction = kT, this.pending = new Map, this.statuses = new Map
      }
      send(TT, kT, cT) {
        var lT;
        return this.statuses.delete(kT), this.pending.set(kT, (null !== (lT = this.pending.get(kT)) && void 0 !== lT ? lT : 0) + 1), this.sendAction(TT).then((TT => {
          var lT;
          const MT = null !== TT && void 0 !== TT ? TT : {
              requestId: -1,
              ok: !1,
              message: xT
            },
            KT = (null !== (lT = this.pending.get(kT)) && void 0 !== lT ? lT : 1) - 1;
          KT > 0 ? this.pending.set(kT, KT) : this.pending.delete(kT);
          const OT = !MT.ok || MT.message.length > 0 ? MT.message : null === cT ? null : [cT];
          return null !== OT && this.statuses.set(kT, {
            ok: MT.ok,
            text: OT,
            until: Date.now() + 4e3
          }), this.onChange(), MT
        }))
      }
      show(TT, kT) {
        this.statuses.set(TT, {
          ...kT,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(TT) {
        for (const [kT, cT] of this.statuses) cT.until <= TT && this.statuses.delete(kT)
      }
      nextDeadline() {
        let TT = null;
        for (const cT of this.statuses.values()) {
          var kT;
          TT = Math.min(null !== (kT = TT) && void 0 !== kT ? kT : 1 / 0, cT.until)
        }
        return TT
      }
      statusOf(TT, kT) {
        const cT = this.statuses.get(TT);
        return !cT || cT.until <= kT ? null : {
          ok: cT.ok,
          text: cT.text
        }
      }
      isPending(TT) {
        return this.pending.has(TT)
      }
    }
  },
  36369: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => xT,
      g: () => fT
    });
    var lT = cT(602),
      MT = cT(1953),
      KT = cT(1663),
      OT = cT(118),
      yT = cT(1274);

    function fT(TT, kT, cT) {
      return OT.featureFlags.useSocialFeatures && TT && null === (0, yT.e)(kT, cT)
    }

    function xT(TT, kT) {
      var cT, OT;
      const yT = KT.b.getSocialState().friends.find((TT => TT.name.toLowerCase() === kT.toLowerCase())),
        fT = MT.gameBridge.latest("players").byId[TT],
        xT = void 0 !== fT && fT.name === kT,
        IT = xT && null !== (cT = fT.cosmetics) && void 0 !== cT ? cT : void 0,
        AT = yT && IT ? {
          ...yT,
          cosmetics: IT
        } : yT;
      return {
        playerSocialPreview: null !== AT && void 0 !== AT ? AT : {
          isError: !1,
          name: kT,
          ranks: xT ? [...fT.ranks] : [],
          cosmetics: null !== IT && void 0 !== IT ? IT : {},
          nameColour: null !== (OT = null === IT || void 0 === IT ? void 0 : IT.nameColour) && void 0 !== OT ? OT : lT.e,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== yT
      }
    }
  },
  36559: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => AT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1692),
      yT = cT(1470),
      fT = cT(1348),
      xT = cT(1061),
      IT = cT(1099);

    function AT(TT) {
      let {
        label: kT,
        icon: cT,
        placeholder: MT,
        onSubmit: AT
      } = TT;
      const CT = (0, lT.useRef)(null),
        [jT, vT] = (0, lT.useState)(""),
        [tT, hT] = (0, lT.useState)("Enter"),
        [NT, QT] = (0, lT.useState)(null);
      (0, lT.useEffect)((() => {
        if ("Success" !== tT && "Error" !== tT) return;
        const TT = setTimeout((() => {
          "Success" === tT && CT.current && (CT.current.value = "", vT("")), hT("Enter")
        }), "Success" === tT ? 1e3 : 4e3);
        return () => {
          clearTimeout(TT)
        }
      }), [tT]);
      const ST = () => {
        const TT = jT.trim();
        "" !== TT && "Enter" === tT && (hT("Loading"), AT(TT).then((TT => {
          CT.current && ("error" in TT ? null === TT.error ? hT("Enter") : (QT(TT.error), hT("Error")) : hT("Success"))
        })))
      };
      return (0, IT.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: TT => {
          TT.target === CT.current && "Escape" !== TT.key && TT.stopPropagation()
        },
        children: [(0, IT.jsxs)("div", {
          className: KT()("AddFriendBodyOverlay", `AddFriendBodyOverlay${tT}`),
          children: ["Loading" === tT && (0, IT.jsx)(fT.d, {}), "Success" === tT && (0, IT.jsx)(xT.e, {
            name: "check"
          }), "Error" === tT && NT]
        }), (0, IT.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, IT.jsx)(OT.b, {
            className: "PlayerSearchInput",
            domRef: CT,
            maxLength: 32,
            placeholderText: MT,
            ariaLabel: MT,
            stopPropagation: !1,
            onValueChange: TT => {
              vT(TT)
            },
            onEnter: ST
          }), (0, IT.jsxs)(yT.e, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== tT || "" === jT.trim(),
            onClick: ST,
            children: [(0, IT.jsx)(xT.e, {
              name: cT
            }), " ", kT]
          })]
        })]
      })
    }
  },
  36533: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => AT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(1195),
      yT = cT(1061),
      fT = cT(1099);
    const xT = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      IT = ["unlisted", "public", "whitelist", "private"];

    function AT(TT) {
      let {
        visibility: kT,
        onPick: cT
      } = TT;
      const {
        t: MT
      } = (0, OT.B)(), AT = (0, lT.useRef)([]);
      return (0, fT.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": MT("worldSocial:whoCanJoin"),
        children: IT.map(((TT, lT) => {
          const OT = TT === kT;
          return (0, fT.jsxs)("button", {
            ref: TT => {
              AT.current[lT] = TT
            },
            type: "button",
            className: KT()("WorldSocialTile", {
              WorldSocialTileSelected: OT
            }),
            "aria-pressed": OT,
            tabIndex: OT ? 0 : -1,
            onKeyDown: TT => {
              ((TT, kT) => {
                const cT = "ArrowRight" === TT.key || "ArrowDown" === TT.key ? 1 : "ArrowLeft" === TT.key || "ArrowUp" === TT.key ? -1 : 0;
                var lT;
                0 !== cT && (TT.preventDefault(), null === (lT = AT.current[(kT + cT + IT.length) % IT.length]) || void 0 === lT || lT.focus())
              })(TT, lT)
            },
            onClick: () => {
              cT(TT)
            },
            children: [(0, fT.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, fT.jsx)(yT.e, {
                name: xT[TT]
              })
            }), (0, fT.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, fT.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: MT(`worldSocial:${TT}`)
              }), (0, fT.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: MT(`worldSocial:${TT}Description`)
              })]
            })]
          }, TT)
        }))
      })
    }
  },
  36550: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => yT
    });
    var lT = cT(1195),
      MT = cT(2660),
      KT = cT(4355),
      OT = cT(1099);

    function yT(TT) {
      let {
        UA: kT,
        children: cT,
        ...yT
      } = TT;
      const {
        t: fT
      } = (0, lT.B)();
      return (0, OT.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          kT.onChange(!kT.on)
        },
        children: (0, OT.jsx)(MT.h, {
          ...yT,
          opensProfileCard: !1,
          children: (0, OT.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: TT => {
              TT.stopPropagation()
            },
            children: [cT, (0, OT.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, OT.jsx)(KT.d, {
                checked: kT.on,
                disabled: !1,
                ariaLabel: fT("worldSocial:letJoin", {
                  playerName: yT.playerSocialPreview.name
                }),
                onChange: TT => {
                  kT.onChange(TT.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36531: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => vT
    });
    var lT = cT(71),
      MT = cT(1195),
      KT = cT(1875),
      OT = cT(118),
      yT = cT(31),
      fT = cT(1497),
      xT = cT(2678),
      IT = cT(9250),
      AT = cT(1470),
      CT = cT(1061),
      jT = cT(1099);

    function vT(TT) {
      let {
        worldCode: kT,
        message: cT
      } = TT;
      const {
        t: vT
      } = (0, MT.B)(), {
        isTouchScreen: tT
      } = (0, yT.n)(["isTouchScreen"]), hT = OT.featureFlags.canUseInviteLinks, NT = (0, IT.i)(hT && null === cT), [QT, ST] = (0, xT.h)(), DT = (0, lT.useRef)(null);
      if (null !== cT) return (0, jT.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, jT.jsx)(CT.e, {
          name: "lock"
        }), (0, jT.jsx)("span", {
          children: cT
        })]
      });
      const aT = hT ? NT : kT,
        FT = tT && hT && (0, xT.c)();
      return (0, jT.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!hT && (0, jT.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: vT("worldSocial:worldCode")
        }), (0, jT.jsx)("input", {
          ref: DT,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== aT && void 0 !== aT ? aT : "",
          "aria-label": vT(hT ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: TT => {
            TT.currentTarget.select()
          }
        }), (0, jT.jsxs)(AT.e, {
          className: "WorldSocialCopy",
          disabled: null === aT,
          onClick: () => {
            null !== aT && (0, xT.d)(aT, {
              useShareSheet: FT,
              onOutcome: TT => {
                if ((0, fT.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== TT || hT ? TT : "code"
                  }), "copied" === TT) ST();
                else if ("failed" === TT) {
                  var kT;
                  null === (kT = DT.current) || void 0 === kT || kT.focus(), KT.g.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, jT.jsx)(CT.e, {
            name: QT ? "check" : FT ? "up-from-bracket" : "copy"
          }), " ", vT(QT ? "general:copied" : FT ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36541: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => jT,
      c: () => CT,
      g: () => AT
    });
    var lT = cT(602),
      MT = cT(1195),
      KT = cT(1663),
      OT = cT(2660),
      yT = cT(2600),
      fT = cT(1470),
      xT = cT(36550),
      IT = cT(1099);

    function AT(TT, kT) {
      var cT;
      return {
        isError: !1,
        name: TT,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== kT && void 0 !== kT ? kT : {},
        nameColour: null !== (cT = null === kT || void 0 === kT ? void 0 : kT.nameColour) && void 0 !== cT ? cT : lT.e,
        location: {
          status: "offline"
        }
      }
    }

    function CT(TT) {
      let {
        player: kT,
        isFriend: cT = !1,
        status: lT,
        showLocation: fT = void 0 === lT,
        UA: AT,
        onSendFriendRequest: CT,
        actions: jT,
        zIndex: vT
      } = TT;
      const {
        t: tT
      } = (0, MT.B)();
      let hT = lT;
      null !== AT && void 0 !== AT && AT.on && (hT = (0, IT.jsxs)(IT.Fragment, {
        children: [null !== lT && void 0 !== lT ? lT : (0, IT.jsx)(yT.d, {
          socialPreview: kT
        }), (0, IT.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", tT("worldSocial:canJoin")]
        })]
      }));
      const NT = {
        playerSocialPreview: kT,
        isFriend: cT,
        hideFriendBadge: !0,
        onFriendRemoved: cT ? TT => {
          KT.b.removeFriendFromState(TT)
        } : void 0,
        status: hT,
        showLocation: fT,
        onSendFriendRequest: CT,
        zIndex: vT
      };
      return AT ? (0, IT.jsx)(xT.c, {
        ...NT,
        UA: AT,
        children: jT
      }) : (0, IT.jsx)(OT.h, {
        ...NT,
        opensProfileCard: !1,
        children: jT || void 0
      })
    }

    function jT(TT) {
      let {
        row: kT,
        UA: cT,
        canInvite: lT,
        invited: KT,
        onInvite: OT,
        zIndex: yT
      } = TT;
      const {
        t: xT
      } = (0, MT.B)(), AT = "online" === kT.place ? fT.e : fT.i;
      return (0, IT.jsx)(CT, {
        player: kT.friend,
        isFriend: !0,
        status: "here" === kT.place ? xT("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        UA: cT,
        zIndex: yT,
        actions: lT && (0, IT.jsx)(AT, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: KT,
          onClick: OT,
          ariaLabel: `${xT("worldSocial:invite")} ${kT.friend.name}`,
          children: xT(KT ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36523: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => fT,
      h: () => OT,
      i: () => xT
    });
    var lT = cT(71),
      MT = cT(4566),
      KT = cT(1875);

    function OT(TT) {
      const kT = {
        lobbyName: TT,
        answer: null,
        response: MT.c.getSocialSettings(TT)
      };
      return kT.response.then((TT => {
        kT.answer = TT
      })), kT
    }
    const yT = new Map;

    function fT(TT) {
      yT.set(TT.lobbyName, TT)
    }

    function xT(TT) {
      const [kT] = (0, lT.useState)((() => function(TT) {
        var kT;
        const cT = null !== (kT = yT.get(TT)) && void 0 !== kT ? kT : null;
        return null !== cT && void 0 !== cT && cT.answer && "error" in cT.answer ? null : cT
      }(TT))), [cT, OT] = (0, lT.useState)((() => null !== kT && void 0 !== kT && kT.answer && "settings" in kT.answer ? kT.answer.settings : null)), [fT, xT] = (0, lT.useState)(!0), [IT, AT] = (0, lT.useState)(null !== cT), CT = (0, lT.useRef)(cT);
      CT.current = cT;
      const jT = (0, lT.useRef)(0),
        vT = (0, lT.useRef)(0),
        tT = (0, lT.useRef)(!1),
        hT = (0, lT.useRef)(!0),
        NT = (0, lT.useCallback)((async kT => {
          const cT = ++jT.current,
            lT = await (null !== kT && void 0 !== kT ? kT : MT.c.getSocialSettings(TT));
          hT.current && cT === jT.current && (AT(!0), xT(!1), "error" in lT || OT(lT.settings))
        }), [TT]),
        QT = (0, lT.useCallback)((() => {
          xT(!0), NT()
        }), [NT]),
        ST = (0, lT.useCallback)((() => {
          vT.current > 0 ? tT.current = !0 : NT()
        }), [NT]);
      (0, lT.useEffect)((() => (hT.current = !0, yT.delete(TT), xT(!0), NT(null === kT || void 0 === kT ? void 0 : kT.response), () => {
        hT.current = !1
      })), [NT, TT, kT]);
      const DT = TT => {
        jT.current++, xT(!1), CT.current = TT, OT(TT)
      };
      return {
        settings: cT,
        loading: fT,
        answered: IT,
        retry: QT,
        refresh: ST,
        change: async function(kT, cT) {
          let {
            quiet: lT = !1,
            onAnswer: OT
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const yT = CT.current;
          if (null === yT) return !1;
          DT(cT(yT)), vT.current > 0 && (tT.current = !0), vT.current++;
          const fT = await MT.c.setSocialSettings(TT, kT);
          vT.current--;
          const xT = !("error" in fT);
          if (!hT.current) return xT;
          if (null === OT || void 0 === OT || OT(fT), lT);
          else if ("error" in fT) KT.g.showMessage({
            translationKey: fT.error
          });
          else
            for (const TT of fT.notFound) KT.g.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: TT
              }
            });
          if (vT.current > 0) return xT;
          const IT = tT.current;
          return tT.current = !1, !IT && "settings" in fT ? DT(fT.settings) : (IT || DT(yT), NT()), xT
        }
      }
    }
  },
  36567: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT,
      f: () => KT
    });
    var lT = cT(184);
    const MT = new Map;

    function KT(TT, kT) {
      var cT;
      const lT = null !== (cT = MT.get(TT)) && void 0 !== cT ? cT : new Map;
      lT.set(kT, Date.now()), MT.set(TT, lT)
    }

    function OT(TT) {
      const kT = MT.get(TT);
      if (!kT) return [];
      const cT = Date.now();
      for (const [MT, KT] of kT) cT - KT >= lT.i && kT.delete(MT);
      return [...kT.keys()]
    }
  },
  36528: (TT, kT, cT) => {
    function lT(TT, kT) {
      const cT = kT.toLowerCase();
      for (const lT of TT)
        if (lT.toLowerCase() === cT) return !0;
      return !1
    }

    function MT(TT, kT, cT) {
      const MT = [],
        KT = [],
        OT = [];
      for (const yT of TT) !yT.isError && yT.name && ("inGame" === yT.location.status && yT.location.inLobbyName === kT || lT(cT, yT.name) ? KT.push({
        friend: yT,
        place: "here"
      }) : "offline" === yT.location.status ? OT.push({
        friend: yT,
        place: "offline"
      }) : MT.push({
        friend: yT,
        place: "online"
      }));
      return [...MT, ...KT, ...OT]
    }

    function KT(TT, kT, cT) {
      const MT = [],
        KT = TT.flatMap((TT => "here" === TT.place ? [TT.friend.name] : []));
      for (const OT of [...KT, ...kT]) lT(MT, OT) || lT(cT, OT) || MT.push(OT);
      return MT
    }

    function OT(TT, kT) {
      return null === TT || void 0 === TT || !TT.canManage || lT(TT.whitelist, kT) ? "none" : "whitelist" === TT.visibility ? "required" : "quiet"
    }

    function yT(TT) {
      if (null === TT) return !0;
      const {
        visibility: kT
      } = TT;
      return "public" === kT || "unlisted" === kT || "whitelist" === kT && TT.canManage
    }

    function fT(TT, kT, cT) {
      if (cT) {
        const cT = kT.filter((kT => !lT(TT.whitelist, kT)));
        return {
          ...TT,
          whitelist: [...TT.whitelist, ...cT]
        }
      }
      return {
        ...TT,
        whitelist: TT.whitelist.filter((TT => !lT(kT, TT)))
      }
    }

    function xT(TT, kT) {
      const cT = [];
      for (let lT = 0; lT < TT.length; lT += kT) cT.push(TT.slice(lT, lT + kT));
      return cT
    }
    cT.d(kT, {
      d: () => yT,
      e: () => KT,
      i: () => MT,
      j: () => lT,
      n: () => xT,
      q: () => OT,
      t: () => fT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);