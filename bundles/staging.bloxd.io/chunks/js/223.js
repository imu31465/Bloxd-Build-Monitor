export const id = 223;
export const ids = [223];
export const modules = {
  41218: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      LobbyManageView: () => OU
    });
    var WT = mT(63),
      zT = mT(1593),
      MT = mT(37105),
      gT = mT(2569),
      nT = mT(2575),
      HT = mT(2552),
      kT = mT(36653);

    function jT() {
      const [TT, UT] = (0, WT.useState)(new Map);
      return {
        get: UT => TT.get(UT),
        hold: (0, WT.useCallback)(((TT, mT, WT) => {
          UT((UT => new Map(UT).set(TT, mT))), WT.then((() => {
            UT((UT => {
              const mT = new Map(UT);
              return mT.delete(TT), mT
            }))
          }))
        }), [])
      }
    }
    var lT = mT(1126),
      LT = mT.n(lT),
      pT = mT(1288),
      BT = mT(1135),
      ZT = mT(1446),
      cT = mT(2761),
      vT = mT(5116),
      fT = mT(3536);
    var qT = mT(2089),
      iT = mT(1569);

    function bT(TT, UT, mT) {
      const WT = TT.filter((TT => TT.name !== UT)),
        zT = WT.filter((TT => "none" === TT.role)).sort(((TT, UT) => UT.at - TT.at)),
        MT = WT.filter((TT => "none" !== TT.role)).sort(((TT, UT) => mT.indexOf(TT.role) - mT.indexOf(UT.role) || UT.at - TT.at));
      return [...TT.some((TT => TT.name === UT)) && null !== UT ? [UT] : [], ...[...zT, ...MT].map((TT => TT.name))]
    }

    function OT(TT, UT) {
      const mT = TT.banned.map((TT => TT.name)),
        WT = new Set(mT);
      return {
        here: bT(TT.here, UT, TT.roles.map((TT => TT.role))),
        away: TT.away.filter((TT => !WT.has(TT.name))).map((TT => TT.name)),
        banned: mT
      }
    }

    function eT(TT, UT) {
      const mT = TT.here.find((TT => TT.name === UT));
      if (mT) return {
        section: "here",
        player: mT
      };
      const WT = TT.banned.find((TT => TT.name === UT));
      if (WT) return {
        section: "banned",
        bannedAt: WT.at
      };
      const zT = TT.away.find((TT => TT.name === UT));
      return zT ? {
        section: "away",
        player: zT
      } : {
        section: "gone"
      }
    }
    const YT = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var JT = mT(2754),
      xT = mT(36637),
      dT = mT(36823),
      wT = mT(3267),
      tT = mT(366);

    function aT(TT, UT, mT) {
      return UT.map((UT => {
        if ("string" === typeof UT) return UT;
        const WT = "str" in UT ? UT.str : UT;
        return "string" === typeof WT ? WT : "entityName" in WT ? WT.entityName : "translationKey" in WT ? TT(WT.translationKey, (0, pT.o)(WT.params, mT)) : ""
      })).join("")
    }

    function yT(TT, UT, mT, WT, zT) {
      return zT - WT < 6e4 ? TT(`${mT}JustNow`) : TT(mT, {
        time: (0, tT.nb)((0, pT.m)(UT, mT), WT, zT)
      })
    }
    var XT = mT(2023),
      IT = mT(1792),
      QT = mT(1188);

    function sT(TT) {
      let {
        status: UT
      } = TT;
      return (0, QT.jsx)("span", {
        className: LT()("LobbyManageStatus", {
          LobbyManageStatusRefused: !UT.ok
        }),
        children: (0, QT.jsx)(XT.e, {
          text: UT.text
        })
      })
    }

    function FT(TT) {
      let {
        names: UT,
        cap: mT,
        filterFrom: zT,
        moreLabel: MT,
        reveal: gT = null,
        renderRow: nT
      } = TT;
      const {
        t: HT
      } = (0, pT.z)(), [kT, jT] = (0, WT.useState)(!1), [lT, LT] = (0, WT.useState)(""), ZT = kT || null !== gT && UT.indexOf(gT) >= mT, vT = (ZT || UT.length <= mT) && null !== zT && UT.length > zT, fT = lT.trim().toLowerCase();
      let qT = ZT ? UT : UT.slice(0, mT);
      return vT && "" !== fT && (qT = qT.filter((TT => TT.toLowerCase().includes(fT)))), (0, QT.jsxs)(QT.Fragment, {
        children: [vT && (0, QT.jsx)(IT.e, {
          className: "LobbyManageFilter",
          placeholderText: HT("lobbyManage:findName"),
          ariaLabel: HT("lobbyManage:findName"),
          onValueChange: TT => {
            LT(TT)
          }
        }), qT.length > 0 && (0, QT.jsx)("div", {
          className: "PlayerRows",
          children: qT.map(((TT, UT) => nT(TT, qT.length - UT)))
        }), !ZT && UT.length > mT && (0, QT.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, QT.jsx)(cT.e, {
            label: (0, QT.jsxs)(QT.Fragment, {
              children: [MT, " ", (0, QT.jsx)(BT.c, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              jT(!0)
            }
          })
        })]
      })
    }

    function PT(TT) {
      let {
        value: UT,
        placeholder: mT,
        ariaLabel: zT,
        maxLength: MT,
        wide: gT = !1,
        onSave: nT
      } = TT;
      const HT = (0, WT.useRef)(null),
        [kT, jT] = (0, WT.useState)(0),
        lT = (0, WT.useRef)(!0),
        pT = (0, WT.useRef)(null),
        BT = (0, WT.useRef)({
          value: UT,
          onSave: nT
        });
      BT.current = {
        value: UT,
        onSave: nT
      };
      const ZT = () => {
        const TT = pT.current;
        pT.current = null, null !== TT && TT !== BT.current.value && BT.current.onSave(TT).then((() => {
          lT.current && jT((TT => TT + 1))
        }))
      };
      return (0, WT.useEffect)((() => {
        null === pT.current && HT.current && (HT.current.value = UT)
      }), [UT, kT]), (0, WT.useEffect)((() => () => {
        lT.current = !1, ZT()
      }), []), (0, QT.jsx)("div", {
        className: LT()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: gT
        }),
        onBlur: ZT,
        children: (0, QT.jsx)(IT.e, {
          domRef: HT,
          defaultValue: UT,
          placeholderText: mT,
          ariaLabel: zT,
          maxLength: MT,
          onValueChange: TT => {
            pT.current = TT
          },
          onEnter: ZT
        })
      })
    }
    const VT = ["mod", "coOwner"],
      uT = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function CT(TT) {
      var UT, mT, MT;
      let {
        name: gT,
        place: nT,
        openedIn: HT,
        isYou: kT,
        manage: lT,
        hiddenNames: LT,
        zIndex: ZT
      } = TT;
      const {
        t: cT,
        selectedLanguage: vT
      } = (0, pT.z)(), [fT, qT] = (0, WT.useState)(null), {
        state: bT
      } = lT, OT = `player:${gT}`, eT = function(TT, UT) {
        if ("banned" === TT.section) return {
          ...YT,
          unban: !0
        };
        if ("gone" === TT.section) return YT;
        const {
          player: mT
        } = TT, WT = "here" === TT.section, zT = WT || "none" !== mT.role ? mT.can.roles : [];
        return {
          gamemode: WT && UT && null !== mT.gamemode && mT.can.gamemode,
          roles: zT,
          fixedRole: 0 === zT.length && "none" !== mT.role ? mT.role : null,
          kick: WT && mT.can.kick,
          ban: mT.can.ban,
          unban: !1
        }
      }(nT, null !== bT.gamemodes), tT = lT.statusOf(OT), XT = lT.isPending(OT), IT = jT(), FT = Date.now(), PT = TT => {
        var UT, mT;
        return null !== (UT = null === (mT = (TT => bT.roles.find((UT => UT.role === TT)))(TT)) || void 0 === mT ? void 0 : mT.label) && void 0 !== UT ? UT : TT
      }, CT = TT => {
        const UT = uT[TT];
        return void 0 === UT ? void 0 : cT(UT)
      }, rT = "here" === nT.section || "away" === nT.section ? nT.player : null, KT = "here" === nT.section ? nT.player.id : null, {
        playerSocialPreview: ST,
        isFriend: GT
      } = null === KT ? {
        playerSocialPreview: (0, dT.j)(gT, null),
        isFriend: !1
      } : (0, xT.b)(KT, gT), NT = function() {
        lT.send(...arguments)
      }, ET = (TT, UT) => {
        IT.hold("role", TT, lT.send({
          type: "setRole",
          name: gT,
          role: TT
        }, OT, UT))
      };
      let hT = null;
      if ("ban" === (null === fT || void 0 === fT ? void 0 : fT.kind)) hT = cT("lobbyManageEntry:banConfirm", {
        playerName: gT
      });
      else if ("role" === (null === fT || void 0 === fT ? void 0 : fT.kind)) {
        var DT;
        hT = `${cT("lobbyManage:roleConfirm",{playerName:gT,role:PT(fT.role)})} ${null!==(DT=CT(fT.role))&&void 0!==DT?DT:""}`
      } else if (tT) hT = (0, QT.jsx)(sT, {
        status: tT
      });
      else if (kT) hT = cT("lobbyManage:you");
      else if ("here" === nT.section) "none" === nT.player.role && FT - nT.player.at < 6e5 && (hT = yT(cT, vT.code, "lobbyManage:joinedAgo", nT.player.at, FT));
      else if ("away" === nT.section) {
        if (nT.player.at > 0) {
          const TT = "kicked" === nT.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          hT = yT(cT, vT.code, TT, nT.player.at, FT)
        }
      } else "banned" === nT.section ? null !== nT.bannedAt && (hT = yT(cT, vT.code, "lobbyManage:bannedAgo", nT.bannedAt, FT)) : "banned" === HT && (hT = cT("lobbyManageEntry:unbanned"));
      return (0, QT.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": gT,
        children: (0, QT.jsxs)(JT.f, {
          playerSocialPreview: ST,
          isFriend: GT,
          status: hT,
          opensProfileCard: !kT && (0, xT.c)(!0, gT, LT),
          zIndex: ZT,
          children: [null !== fT && (0, QT.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === fT.kind && (0, QT.jsxs)(iT.I, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                qT(null), NT({
                  type: "ban",
                  name: gT
                }, OT)
              },
              children: [(0, QT.jsx)(BT.c, {
                name: "gavel"
              }), (0, QT.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: cT("lobbyManageEntry:ban")
              })]
            }), "role" === fT.kind && (0, QT.jsx)(iT.e, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: fT.role
              },
              onClick: () => {
                qT(null), ET(fT.role)
              },
              children: cT("lobbyManage:makeRole", {
                role: PT(fT.role)
              })
            }), (0, QT.jsx)(iT.g, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                qT(null)
              },
              children: cT("general:cancel")
            })]
          }), null === fT && (0, QT.jsxs)(QT.Fragment, {
            children: [(0, QT.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [eT.gamemode && null !== rT && (0, QT.jsx)(wT.d, {
                options: (null !== (UT = bT.gamemodes) && void 0 !== UT ? UT : []).map((TT => ({
                  value: TT.value,
                  label: aT(cT, TT.label, LT)
                }))),
                value: null !== (mT = IT.get("gamemode")) && void 0 !== mT ? mT : rT.gamemode,
                disabled: XT,
                onChange: TT => {
                  (0, zT.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: TT.value
                  }), IT.hold("gamemode", TT.value, lT.send({
                    type: "setGamemode",
                    name: gT,
                    gamemode: TT.value
                  }, OT))
                }
              }), eT.roles.length > 0 && null !== rT && (0, QT.jsx)(wT.d, {
                options: [...bT.roles].reverse().filter((TT => eT.roles.includes(TT.role))).map((TT => ({
                  value: TT.role,
                  label: TT.label
                }))),
                value: null !== (MT = IT.get("role")) && void 0 !== MT ? MT : rT.role,
                disabled: XT,
                onChange: TT => {
                  var UT;
                  (UT = TT.value) !== (null === rT || void 0 === rT ? void 0 : rT.role) && (VT.includes(UT) ? qT({
                    kind: "role",
                    role: UT
                  }) : ((0, zT.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: UT
                  }), ET(UT, CT(UT))))
                }
              }), null !== eT.fixedRole && (0, QT.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: PT(eT.fixedRole)
              })]
            }), (0, QT.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [eT.kick && (0, QT.jsxs)(iT.g, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${cT("lobbyManageEntry:kick")} ${gT}`,
                disabled: XT,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  NT({
                    type: "kick",
                    name: gT
                  }, OT)
                },
                children: [(0, QT.jsx)(BT.c, {
                  name: "person-falling-burst"
                }), (0, QT.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: cT("lobbyManageEntry:kick")
                })]
              }), eT.ban && (0, QT.jsxs)(iT.J, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${cT("lobbyManageEntry:ban")} ${gT}`,
                disabled: XT,
                padDestructive: !0,
                onClick: () => {
                  qT({
                    kind: "ban"
                  })
                },
                children: [(0, QT.jsx)(BT.c, {
                  name: "gavel"
                }), (0, QT.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: cT("lobbyManageEntry:ban")
                })]
              }), eT.unban && (0, QT.jsxs)(iT.g, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${cT("lobbyManageEntry:unban")} ${gT}`,
                disabled: XT,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  NT({
                    type: "unban",
                    name: gT
                  }, OT)
                },
                children: [(0, QT.jsx)(BT.c, {
                  name: "user-unlock"
                }), (0, QT.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: cT("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function rT(TT) {
      var UT, mT, zT, MT;
      let {
        manage: gT,
        focusRequest: nT,
        onFocused: HT
      } = TT;
      const {
        t: kT
      } = (0, pT.z)(), jT = (0, qT.i)("players"), lT = (0, qT.i)("hiddenPlayerNames"), LT = (0, WT.useRef)(null), {
        state: ZT
      } = gT, vT = null === jT.localId ? null : null !== (UT = null === (mT = jT.byId[jT.localId]) || void 0 === mT ? void 0 : mT.name) && void 0 !== UT ? UT : null, [fT] = (0, WT.useState)((() => OT(ZT, vT))), bT = function(TT, UT, mT) {
        const WT = new Set([...TT.here, ...TT.away, ...TT.banned]),
          zT = OT(UT, mT),
          MT = UT => {
            const mT = zT[UT].filter((TT => !WT.has(TT)));
            for (const TT of mT) WT.add(TT);
            return [...TT[UT], ...mT]
          };
        return {
          here: MT("here"),
          away: MT("away"),
          banned: MT("banned")
        }
      }(fT, ZT, vT), [YT, JT] = (0, WT.useState)(!1), xT = function(TT, UT) {
        return TT.here.filter((TT => TT.name !== UT && "none" === TT.role && TT.can.kick)).length
      }(ZT, vT), dT = gT.statusOf("kickAll");
      (0, WT.useEffect)((() => {
        var TT, UT;
        if (null === nT) return;
        const mT = null === (TT = LT.current) || void 0 === TT ? void 0 : TT.querySelector(`[data-lobby-manage-row="${CSS.escape(nT.name)}"]`);
        null === mT || void 0 === mT || mT.scrollIntoView({
          block: "center"
        }), null === mT || void 0 === mT || null === (UT = mT.querySelector(".ProfilePreview")) || void 0 === UT || UT.focus({
          preventScroll: !0
        }), HT(nT.seq)
      }), [null === nT || void 0 === nT ? void 0 : nT.seq]);
      const wT = TT => (UT, mT) => (0, QT.jsx)(CT, {
        name: UT,
        place: eT(ZT, UT),
        openedIn: TT,
        isYou: UT === vT,
        manage: gT,
        hiddenNames: lT,
        zIndex: mT
      }, UT);
      return (0, QT.jsxs)("div", {
        ref: LT,
        className: "LobbyManagePage",
        children: [bT.here.length > 0 && (0, QT.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, QT.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, QT.jsx)(cT.e, {
              label: kT("lobbyManage:here"),
              meta: ZT.here.length
            }), xT >= 2 && !YT && (0, QT.jsxs)(iT.J, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: gT.isPending("kickAll"),
              onClick: () => {
                JT(!0)
              },
              children: [(0, QT.jsx)(BT.c, {
                name: "person-falling-burst"
              }), " ", kT("lobbyManage:kickAll")]
            })]
          }), YT && xT >= 2 && (0, QT.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, QT.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: kT("lobbyManage:kickAllConfirm", {
                count: xT
              })
            }), (0, QT.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, QT.jsx)(iT.I, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  JT(!1), gT.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: kT("lobbyManage:kickAll")
              }), (0, QT.jsx)(iT.g, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  JT(!1)
                },
                children: kT("general:cancel")
              })]
            })]
          }), dT && (0, QT.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, QT.jsx)(sT, {
              status: dT
            })
          }), (0, QT.jsx)(FT, {
            names: bT.here,
            cap: bT.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: wT("here")
          })]
        }), bT.away.length > 0 && (0, QT.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, QT.jsx)(cT.e, {
            label: kT("lobbyManage:notHere"),
            meta: bT.away.length
          }), (0, QT.jsx)(FT, {
            names: bT.away,
            cap: 5,
            filterFrom: null,
            moreLabel: kT("lobbyManage:allCount", {
              count: bT.away.length
            }),
            reveal: null !== (zT = null === nT || void 0 === nT ? void 0 : nT.name) && void 0 !== zT ? zT : null,
            renderRow: wT("away")
          })]
        }), bT.banned.length > 0 && (0, QT.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, QT.jsx)(cT.e, {
            label: kT("lobbyManage:banned"),
            meta: bT.banned.length
          }), (0, QT.jsx)(FT, {
            names: bT.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: kT("lobbyManage:allCount", {
              count: bT.banned.length
            }),
            reveal: null !== (MT = null === nT || void 0 === nT ? void 0 : nT.name) && void 0 !== MT ? MT : null,
            renderRow: wT("banned")
          })]
        })]
      })
    }
    var KT = mT(4719),
      ST = mT(1758),
      GT = mT(36798),
      NT = mT(36815),
      ET = mT(36812),
      hT = mT(36804),
      DT = mT(36840),
      oT = mT(36827),
      AT = mT(36832);

    function RT(TT) {
      const UT = new Set;
      for (const mT of TT) UT.add(mT.toLowerCase());
      return UT
    }

    function TU(TT) {
      var UT, mT;
      let {
        state: zT,
        lobbyName: MT,
        listed: gT,
        isListed: nT,
        hq: HT,
        lY: kT,
        statusOf: jT
      } = TT;
      const {
        t: lT,
        selectedLanguage: LT
      } = (0, pT.z)(), BT = (0, ST.n)(), ZT = (0, qT.i)("players"), vT = null === ZT.localId ? null : null !== (UT = null === (mT = ZT.byId[ZT.localId]) || void 0 === mT ? void 0 : mT.name) && void 0 !== UT ? UT : null, fT = (0, WT.useMemo)((() => (0, hT.i)(BT.friends, MT, zT.here.map((TT => TT.name)))), [BT.friends, MT, zT.here]), iT = new Map(fT.map((TT => [TT.friend.name.toLowerCase(), TT]))), bT = function(TT) {
        let {
          refused: UT,
          listed: mT,
          here: WT,
          friends: zT,
          excluded: MT
        } = TT;
        const gT = RT(MT),
          nT = TT => TT.filter((TT => {
            const UT = TT.toLowerCase();
            return !gT.has(UT) && (gT.add(UT), !0)
          }));
        return {
          added: [],
          refused: nT(UT),
          listed: nT(mT),
          suggested: nT([...WT, ...zT])
        }
      }({
        refused: zT.refused.map((TT => TT.name)),
        listed: gT,
        here: zT.here.map((TT => TT.name)),
        friends: fT.flatMap((TT => "here" === TT.place ? [] : [TT.friend.name])),
        excluded: [...null === vT ? [] : [vT], ...[...zT.here, ...zT.away].flatMap((TT => "none" === TT.role || (0, hT.l)(gT, TT.name) ? [] : [TT.name]))]
      }), [OT] = (0, WT.useState)(bT), [eT, YT] = (0, WT.useState)([]), JT = function(TT, UT, mT) {
        const WT = RT(mT),
          zT = RT([...mT, ...TT.refused, ...TT.listed, ...TT.suggested]),
          MT = mT => [...TT[mT].filter((TT => !WT.has(TT.toLowerCase()))), ...UT[mT].filter((TT => {
            const UT = TT.toLowerCase();
            return !zT.has(UT) && (zT.add(UT), !0)
          }))];
        return {
          added: [...mT],
          refused: MT("refused"),
          listed: MT("listed"),
          suggested: MT("suggested")
        }
      }(OT, bT, eT), wT = (TT, UT) => {
        var mT, WT;
        const MT = TT.toLowerCase(),
          gT = iT.get(MT),
          kT = zT.here.find((TT => TT.name.toLowerCase() === MT)),
          pT = zT.refused.find((TT => TT.name.toLowerCase() === MT)),
          BT = null !== (mT = null === jT || void 0 === jT ? void 0 : jT(TT)) && void 0 !== mT ? mT : null;
        let ZT = null;
        BT ? ZT = (0, QT.jsx)(sT, {
          status: BT
        }) : pT ? ZT = yT(lT, LT.code, "lobbyManage:triedToJoinAgo", pT.at, Date.now()) : gT && kT ? ZT = lT("lobbyManage:friendHere") : gT ? ZT = "online" === gT.place ? lT("lobbyManage:friendOnline") : lT("lobbyManage:friend") : kT && (ZT = lT("lobbyManage:hereStatus"));
        let cT = null !== (WT = null === gT || void 0 === gT ? void 0 : gT.friend) && void 0 !== WT ? WT : (0, dT.j)(TT, null);
        return !gT && null !== kT && void 0 !== kT && kT.id && (cT = (0, xT.b)(kT.id, kT.name).playerSocialPreview), (0, QT.jsx)(oT.b, {
          playerSocialPreview: cT,
          isFriend: void 0 !== gT,
          hideFriendBadge: !0,
          status: ZT,
          zIndex: UT,
          Cl: {
            on: nT(TT),
            onChange: UT => {
              HT(TT, UT)
            }
          }
        }, MT)
      }, tT = [...JT.added, ...JT.refused];
      return (0, QT.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, QT.jsx)(cT.e, {
          label: lT("worldSocial:whitelist"),
          meta: gT.length
        }), (0, QT.jsx)(AT.c, {
          label: lT("lobbyManage:add"),
          icon: "user-check",
          placeholder: lT("socialBar:enterPlayerName"),
          onSubmit: async TT => {
            const UT = await kT(TT);
            return UT.ok && YT((UT => [TT, ...UT])), UT
          }
        }), tT.length > 0 && (0, QT.jsx)("div", {
          className: "PlayerRows",
          children: tT.map(((TT, UT) => wT(TT, tT.length - UT)))
        }), (0, QT.jsx)(FT, {
          names: JT.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: lT("lobbyManage:allOnWhitelist", {
            count: JT.listed.length
          }),
          renderRow: wT
        }), (0, QT.jsx)(FT, {
          names: JT.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: lT("lobbyManage:allCount", {
            count: JT.suggested.length
          }),
          renderRow: wT
        })]
      })
    }

    function UU(TT) {
      let {
        manage: UT,
        listing: mT
      } = TT;
      const {
        t: WT
      } = (0, pT.z)(), MT = (TT, mT) => ((0, zT.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: TT
      }), UT.send({
        type: "setListing",
        field: TT,
        value: mT
      }, `listing:${TT}`)), gT = TT => {
        const mT = UT.statusOf(`listing:${TT}`);
        return mT && !mT.ok && (0, QT.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, QT.jsx)(sT, {
            status: mT
          })
        })
      };
      return (0, QT.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, QT.jsx)(cT.e, {
          label: WT("lobbyManage:inWorldsList")
        }), (0, QT.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, QT.jsx)("div", {
            className: "SliderText",
            children: WT("lobbyManage:description")
          }), (0, QT.jsx)(PT, {
            value: mT.description,
            ariaLabel: WT("lobbyManage:description"),
            wide: !0,
            onSave: TT => MT("description", TT)
          })]
        }), gT("description"), (0, QT.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, QT.jsx)("div", {
            className: "SliderText",
            children: WT("lobbyManage:emojis")
          }), (0, QT.jsx)(PT, {
            value: mT.emojis,
            ariaLabel: WT("lobbyManage:emojis"),
            onSave: TT => MT("emojis", TT)
          })]
        }), gT("emojis"), (0, QT.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, QT.jsx)("div", {
            className: "SliderText",
            children: WT("lobbyManage:colour")
          }), (0, QT.jsx)(mU, {
            value: mT.colour,
            ariaLabel: WT("lobbyManage:colour"),
            onSave: TT => {
              MT("colour", TT)
            }
          })]
        }), gT("colour")]
      })
    }

    function mU(TT) {
      let {
        value: UT,
        ariaLabel: mT,
        onSave: zT
      } = TT;
      const MT = (0, WT.useRef)(null),
        gT = (0, WT.useRef)({
          value: UT,
          onSave: zT
        });
      gT.current = {
        value: UT,
        onSave: zT
      };
      const nT = (0, WT.useRef)(null),
        HT = (0, WT.useRef)(!1),
        kT = TT => {
          HT.current && TT.value !== gT.current.value && TT.value !== nT.current && (nT.current = TT.value, gT.current.onSave(TT.value))
        };
      return (0, WT.useEffect)((() => {
        MT.current && document.activeElement !== MT.current && (MT.current.value = UT)
      }), [UT]), (0, WT.useEffect)((() => {
        const TT = MT.current,
          UT = () => {
            kT(TT)
          };
        return TT.addEventListener("change", UT), () => {
          TT.removeEventListener("change", UT), kT(TT)
        }
      }), []), (0, QT.jsx)("input", {
        ref: MT,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: UT,
        "aria-label": mT,
        onInput: () => {
          HT.current = !0
        },
        onBlur: TT => {
          kT(TT.currentTarget)
        }
      })
    }

    function WU(TT) {
      let {
        manage: UT
      } = TT;
      const {
        lobbyName: mT,
        shownLobbyName: WT
      } = (0, qT.i)("connectedGame");
      return UT.state.you.canSetVisibility && null !== mT ? (0, QT.jsx)(MU, {
        manage: UT,
        lobbyName: mT,
        worldCode: null !== WT && void 0 !== WT ? WT : mT
      }, mT) : (0, QT.jsx)(gU, {
        manage: UT,
        lobbyName: null !== mT && void 0 !== mT ? mT : ""
      })
    }

    function zU(TT) {
      return TT.map((TT => TT.toLowerCase())).sort().join(",")
    }

    function MU(TT) {
      var UT;
      let {
        manage: mT,
        lobbyName: MT,
        worldCode: gT
      } = TT;
      const {
        t: nT
      } = (0, pT.z)(), {
        settings: HT,
        loading: kT,
        change: jT,
        retry: lT,
        refresh: LT
      } = (0, GT.h)(MT), BT = (0, ST.n)(), {
        state: vT
      } = mT, fT = (0, WT.useRef)(HT);
      fT.current = HT;
      const qT = zU(null !== (UT = vT.whitelist) && void 0 !== UT ? UT : []),
        bT = null !== vT.whitelist;
      (0, WT.useEffect)((() => {
        const TT = fT.current;
        null !== TT && (TT.visibility !== vT.visibility || bT && zU(TT.whitelist) !== qT) && LT()
      }), [vT.visibility, qT, bT, LT]);
      const OT = async (TT, UT) => {
        let mT = null;
        return await jT(TT, UT, {
          quiet: !0,
          onAnswer: TT => {
            mT = TT
          }
        }), mT
      }, eT = (TT, UT) => {
        null !== UT && "error" in UT && mT.showStatus(TT, {
          ok: !1,
          text: [nT(UT.error)]
        })
      }, YT = async TT => {
        if (null === HT || TT === HT.visibility) return;
        (0, zT.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: TT
        });
        const UT = "whitelist" === TT ? (0, hT.f)((0, hT.i)(BT.friends, MT, vT.here.map((TT => TT.name))), (0, DT.b)(MT), HT.whitelist) : [],
          mT = await OT({
            setVisibility: TT
          }, (UT => ({
            ...UT,
            visibility: TT
          })));
        eT("mode", mT), null === mT || "error" in mT || await (async TT => {
          for (const UT of (0, hT.o)(TT, KT.z))
            if (!await jT({
                whitelistAdd: UT
              }, (TT => (0, hT.t)(TT, UT, !0)))) return !1;
          return !0
        })(UT)
      }, JT = (0, WT.useMemo)((() => {
        var TT;
        if (null === HT) return [];
        const UT = null !== (TT = vT.whitelist) && void 0 !== TT ? TT : [];
        return [...UT.filter((TT => (0, hT.l)(HT.whitelist, TT))), ...HT.whitelist.filter((TT => !(0, hT.l)(UT, TT)))]
      }), [HT, vT.whitelist]), xT = mT.statusOf("mode");
      return (0, QT.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, QT.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, QT.jsx)(cT.e, {
            label: nT("worldSocial:whoCanJoin")
          }), null === HT && kT && (0, QT.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, QT.jsx)(ZT.c, {})
          }), null === HT && !kT && (0, QT.jsx)(iT.g, {
            className: "SmallTextLight",
            onClick: lT,
            children: nT("worldSocial:loadFailed")
          }), null !== HT && (0, QT.jsx)(NT.b, {
            visibility: HT.visibility,
            onPick: TT => {
              YT(TT)
            }
          }), xT && (0, QT.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, QT.jsx)(sT, {
              status: xT
            })
          }), null !== HT && "private" !== HT.visibility && (0, QT.jsx)(ET.e, {
            worldCode: gT,
            message: null
          })]
        }), "whitelist" === (null === HT || void 0 === HT ? void 0 : HT.visibility) && (0, QT.jsx)(TU, {
          state: vT,
          lobbyName: MT,
          listed: JT,
          isListed: TT => (0, hT.l)(HT.whitelist, TT),
          hq: (TT, UT) => {
            (0, zT.reportAnalyticsClick)(UT ? {
              id: "lobby_manage.whitelist_add",
              value: "Cl"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), OT(UT ? {
              whitelistAdd: [TT]
            } : {
              whitelistRemove: TT
            }, (mT => (0, hT.t)(mT, [TT], UT))).then((UT => {
              eT(`whitelist:${TT.toLowerCase()}`, UT)
            }))
          },
          lY: async TT => {
            (0, zT.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const UT = await OT({
              whitelistAdd: [TT]
            }, (UT => (0, hT.t)(UT, [TT], !0)));
            return null === UT ? {
              ok: !1,
              error: nT("worldSocial:changeFailed")
            } : "error" in UT ? {
              ok: !1,
              error: nT(UT.error)
            } : (0, hT.l)(UT.notFound, TT) ? {
              ok: !1,
              error: nT("lobbyManage:noPlayerCalled", {
                playerName: TT
              })
            } : {
              ok: !0
            }
          },
          statusOf: TT => mT.statusOf(`whitelist:${TT.toLowerCase()}`)
        }), "public" === (null === HT || void 0 === HT ? void 0 : HT.visibility) && null !== vT.listing && (0, QT.jsx)(UU, {
          manage: mT,
          listing: vT.listing
        })]
      })
    }

    function gU(TT) {
      var UT;
      let {
        manage: mT,
        lobbyName: WT
      } = TT;
      const {
        t: MT
      } = (0, pT.z)(), {
        state: gT
      } = mT, nT = jT(), HT = null !== (UT = gT.whitelist) && void 0 !== UT ? UT : [];
      return (0, QT.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, QT.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, QT.jsx)(cT.e, {
            label: MT("worldSocial:whoCanJoin")
          }), (0, QT.jsx)("div", {
            className: "LobbyManageModeText",
            children: MT(`worldSocial:${gT.visibility}`)
          })]
        }), "whitelist" === gT.visibility && gT.you.canEditWhitelist && (0, QT.jsx)(TU, {
          state: gT,
          lobbyName: WT,
          listed: HT,
          isListed: TT => {
            var UT;
            return null !== (UT = nT.get(TT.toLowerCase())) && void 0 !== UT ? UT : (0, hT.l)(HT, TT)
          },
          hq: (TT, UT) => {
            (0, zT.reportAnalyticsClick)(UT ? {
              id: "lobby_manage.whitelist_add",
              value: "Cl"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const WT = TT.toLowerCase();
            nT.hold(WT, UT, mT.send(UT ? {
              type: "whitelistAdd",
              names: [TT]
            } : {
              type: "whitelistRemove",
              name: TT
            }, `whitelist:${WT}`))
          },
          lY: async TT => {
            (0, zT.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const UT = await mT.send({
              type: "whitelistAdd",
              names: [TT]
            }, "whitelist-field");
            return UT.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, QT.jsx)(XT.e, {
                text: UT.message
              })
            }
          },
          statusOf: TT => mT.statusOf(`whitelist:${TT.toLowerCase()}`)
        }), "public" === gT.visibility && null !== gT.listing && (0, QT.jsx)(UU, {
          manage: mT,
          listing: gT.listing
        })]
      })
    }
    var nU = mT(5090),
      HU = mT(1475);
    const kU = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const jU = (0, WT.memo)((function(TT) {
      var UT;
      let {
        rule: mT,
        value: WT,
        status: zT,
        pending: MT,
        hiddenNames: gT,
        NJ: nT,
        onAction: HT
      } = TT;
      const {
        t: kT
      } = (0, pT.z)(), jT = TT => nT(mT, TT), lT = (TT, UT) => {
        HT(mT, TT, UT)
      }, LT = aT(kT, mT.label, gT), BT = mT.info ? aT(kT, mT.info, gT) : void 0, ZT = mT.placeholder ? aT(kT, mT.placeholder, gT) : void 0, cT = (null !== (UT = mT.options) && void 0 !== UT ? UT : []).map((TT => ({
        value: TT.value,
        label: aT(kT, TT.label, gT)
      }))), vT = Math.max(0, ...cT.map((TT => function(TT) {
        let UT = 0;
        for (const mT of TT) UT += kU.test(mT) ? 2 : 1;
        return UT
      }(TT.label)))), fT = zT && (0, QT.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, QT.jsx)(sT, {
          status: zT
        })
      }), qT = (0, QT.jsxs)("div", {
        className: "SliderText",
        children: [LT, void 0 !== BT && (0, QT.jsx)(HU.c, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: BT
        })]
      });
      return "toggle" === mT.kind ? (0, QT.jsxs)(QT.Fragment, {
        children: [(0, QT.jsx)(nU.b, {
          label: LT,
          checked: !0 === WT,
          circleInfoText: BT,
          disabled: MT,
          onClick: jT
        }), fT]
      }) : "choice" === mT.kind && cT.length <= 3 ? (0, QT.jsxs)(QT.Fragment, {
        children: [(0, QT.jsx)(nU.f, {
          label: LT,
          options: cT,
          value: String(WT),
          circleInfoText: BT,
          onChange: jT
        }), fT]
      }) : (0, QT.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [qT, "choice" === mT.kind && (0, QT.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": vT
          },
          children: (0, QT.jsx)(wT.d, {
            options: cT,
            value: String(WT),
            disabled: MT,
            onChange: TT => {
              jT(TT.value)
            }
          })
        }), ("number" === mT.kind || "text" === mT.kind) && (0, QT.jsx)(PT, {
          value: null === WT ? "" : String(WT),
          placeholder: ZT,
          ariaLabel: LT,
          onSave: TT => {
            const UT = TT.trim(),
              WT = Number(UT);
            return jT("number" === mT.kind && "" !== UT && Number.isFinite(WT) ? WT : UT)
          }
        }), "action" === mT.kind && (0, QT.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [cT.length > 3 && (0, QT.jsx)(wT.d, {
            options: cT,
            value: {
              value: "",
              label: null !== ZT && void 0 !== ZT ? ZT : LT
            },
            disabled: MT,
            onChange: TT => {
              lT(TT.value)
            }
          }), cT.length > 0 && cT.length <= 3 && cT.map((TT => (0, QT.jsx)(iT.g, {
            className: "SmallTextLight",
            disabled: MT,
            onClick: () => {
              lT(TT.value)
            },
            children: TT.label
          }, TT.value))), 0 === cT.length && (0, QT.jsx)(iT.g, {
            className: "SmallTextLight",
            disabled: MT,
            onClick: () => {
              lT()
            },
            children: null !== ZT && void 0 !== ZT ? ZT : LT
          })]
        }), "names" === mT.kind && (0, QT.jsx)(lU, {
          names: Array.isArray(WT) ? WT : [],
          pending: MT,
          onAction: lT
        }), fT]
      })
    }));

    function lU(TT) {
      let {
        names: UT,
        pending: mT,
        onAction: zT
      } = TT;
      const {
        t: MT
      } = (0, pT.z)(), gT = (0, WT.useRef)(null), [nT, HT] = (0, WT.useState)(""), kT = () => {
        const TT = nT.trim();
        "" !== TT && (zT(TT, "add"), gT.current && (gT.current.value = ""), HT(""))
      };
      return (0, QT.jsxs)("div", {
        className: "LobbyManageNames",
        children: [UT.map((TT => (0, QT.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, QT.jsx)("span", {
            className: "LobbyManageNameText",
            children: TT
          }), (0, QT.jsx)(iT.g, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: MT("lobbyManage:removeName", {
              name: TT
            }),
            disabled: mT,
            onClick: () => {
              zT(TT, "remove")
            },
            children: (0, QT.jsx)(BT.c, {
              name: "xmark"
            })
          })]
        }, TT))), (0, QT.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, QT.jsx)(IT.e, {
            domRef: gT,
            placeholderText: MT("lobbyManage:namePlaceholder"),
            ariaLabel: MT("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: TT => {
              HT(TT)
            },
            onEnter: kT
          }), (0, QT.jsx)(iT.g, {
            className: "SmallTextLight",
            disabled: mT || "" === nT.trim(),
            onClick: kT,
            children: MT("lobbyManage:addHere")
          })]
        })]
      })
    }
    const LU = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function pU(TT, UT) {
      return LU.map((mT => {
        let {
          group: WT,
          title: zT
        } = mT;
        const MT = TT.filter((TT => TT.group === WT && void 0 === TT.parent)).map((mT => {
          const WT = !0 === UT(mT) ? TT.filter((TT => TT.parent === mT.key)) : [];
          return {
            rule: mT,
            children: WT
          }
        }));
        return {
          group: WT,
          title: zT,
          items: MT
        }
      }))
    }

    function BU(TT) {
      return TT.flatMap((TT => {
        let {
          items: UT
        } = TT;
        return UT.flatMap((TT => {
          let {
            rule: UT,
            children: mT
          } = TT;
          return [UT, ...mT]
        }))
      }))
    }

    function ZU(TT) {
      let {
        manage: UT,
        rowsShown: mT
      } = TT;
      const {
        t: MT
      } = (0, pT.z)(), gT = (0, qT.i)("hiddenPlayerNames"), {
        rules: nT
      } = UT.state, HT = jT(), kT = TT => {
        const UT = HT.get(TT.key);
        return void 0 === UT ? TT.value : UT
      }, lT = pU(nT, kT), [LT] = (0, WT.useState)((() => BU(lT).map((TT => TT.key)))), BT = mT === 1 / 0 ? null : new Set(LT.slice(0, mT)), ZT = TT => null === BT || BT.has(TT.key), {
        hold: vT
      } = HT, fT = (0, WT.useCallback)(((TT, mT) => {
        (0, zT.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: TT.key
        });
        const WT = UT.send({
          type: "setRule",
          key: TT.key,
          value: mT
        }, `rule:${TT.key}`);
        return vT(TT.key, mT, WT), WT
      }), [UT, vT]), iT = (0, WT.useCallback)(((TT, mT, WT) => {
        (0, zT.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: TT.key
        }), UT.send({
          type: "ruleAction",
          key: TT.key,
          ...void 0 === mT ? {} : {
            arg: mT
          },
          ...void 0 === WT ? {} : {
            op: WT
          }
        }, `rule:${TT.key}`, void 0 === WT ? MT("lobbyManage:setJustNow") : void 0)
      }), [UT, MT]), bT = TT => {
        const mT = `rule:${TT.key}`;
        return (0, QT.jsx)(jU, {
          rule: TT,
          value: kT(TT),
          status: UT.statusOf(mT),
          pending: UT.isPending(mT),
          hiddenNames: gT,
          NJ: fT,
          onAction: iT
        }, TT.key)
      };
      return (0, QT.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: lT.map((TT => {
          let {
            group: UT,
            title: mT,
            items: zT
          } = TT;
          const gT = zT.filter((TT => {
            let {
              rule: UT
            } = TT;
            return ZT(UT)
          }));
          return 0 === gT.length ? null : (0, QT.jsxs)(WT.Fragment, {
            children: [(0, QT.jsx)(cT.e, {
              label: MT(mT)
            }), gT.map((TT => {
              let {
                rule: UT,
                children: mT
              } = TT;
              return 0 === mT.length ? bT(UT) : (0, QT.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [bT(UT), mT.filter(ZT).map(bT)]
              }, UT.key)
            }))]
          }, UT)
        }))
      })
    }
    const cU = {
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
      vU = 5,
      fU = (0, WT.memo)((function(TT) {
        let {
          page: UT,
          manage: mT,
          leaderboard: zT,
          focusRequest: MT,
          onFocused: gT,
          ruleRowsShown: nT
        } = TT;
        return "leaderboard" === UT ? (0, QT.jsx)(WT.Suspense, {
          fallback: (0, QT.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, QT.jsx)(ZT.c, {})
          }),
          children: zT
        }) : "joining" === UT ? (0, QT.jsx)(WU, {
          manage: mT
        }) : "rules" === UT ? (0, QT.jsx)(ZU, {
          manage: mT,
          rowsShown: nT
        }) : (0, QT.jsx)(rT, {
          manage: mT,
          focusRequest: MT,
          onFocused: gT
        })
      }));

    function qU(TT) {
      let {
        page: UT
      } = TT;
      const {
        t: mT
      } = (0, pT.z)(), WT = cU[UT];
      return (0, QT.jsxs)(QT.Fragment, {
        children: [(0, QT.jsx)(BT.c, {
          name: WT.icon
        }), " ", (0, QT.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: mT(WT.title)
        })]
      })
    }

    function iU(TT) {
      var UT;
      const {
        t: mT
      } = (0, pT.z)(), {
        pages: MT,
        landing: gT
      } = TT, HT = (0, WT.useRef)(null), kT = (0, WT.useRef)(null), jT = (0, WT.useRef)(null), lT = (0, WT.useRef)(new Map), [BT, ZT] = (0, WT.useState)(null), qT = (0, WT.useRef)(BT), iT = (0, WT.useRef)(0), [bT, OT] = (0, WT.useState)(MT[0]), eT = null !== BT && void 0 !== BT ? BT : MT.includes(bT) ? bT : MT[0], [YT] = (0, WT.useState)(null !== (UT = null === gT || void 0 === gT ? void 0 : gT.page) && void 0 !== UT ? UT : null), JT = null !== YT && MT.includes(YT) ? [YT, ...MT.filter((TT => TT !== YT))] : MT, [xT] = (0, WT.useState)((() => {
        const UT = BU(pU(TT.manage.state.rules, (TT => TT.value)));
        return Math.max(1, Math.ceil(UT.length / vU))
      })), dT = JT.flatMap((TT => "rules" === TT ? Array(xT).fill(TT) : [TT])), wT = function(TT, UT) {
        const [mT, zT] = (0, WT.useState)(TT), MT = mT >= UT;
        return MT && mT !== 1 / 0 && zT(1 / 0), (0, WT.useLayoutEffect)((() => {
          if (MT) return;
          let TT = !0;
          return (0, fT.h)().then((() => {
            TT && zT((TT => TT + 1))
          })), () => {
            TT = !1
          }
        }), [mT, MT]), MT ? 1 / 0 : mT
      }(1, dT.length), tT = dT.slice(0, wT), aT = new Set(tT), yT = wT < dT.length, XT = yT ? tT.filter((TT => "rules" === TT)).length * vU : 1 / 0, IT = (0, WT.useRef)(TT.focusRequest);
      IT.current = TT.focusRequest;
      const sT = TT => {
          qT.current = TT, ZT(TT)
        },
        FT = () => {
          var TT, UT;
          HT.current.style.scrollPaddingTop = `${null!==(TT=null===(UT=jT.current)||void 0===UT?void 0:UT.offsetHeight)&&void 0!==TT?TT:0}px`
        },
        PT = TT => {
          const UT = HT.current,
            mT = lT.current.get(TT);
          if (void 0 === mT) return;
          const WT = document.activeElement,
            zT = IT.current,
            MT = null === zT ? null : mT.querySelector(`[data-lobby-manage-row="${CSS.escape(zT.name)}"]`);
          FT(), WT instanceof HTMLElement && null !== MT && void 0 !== MT && MT.contains(WT) ? WT.scrollIntoView({
            block: "center"
          }) : null === mT.previousElementSibling ? UT.scrollTop = 0 : mT.scrollIntoView({
            block: "start"
          }), iT.current = UT.scrollTop
        },
        VT = TT => {
          (0, zT.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: TT
          }), sT(TT), PT(TT)
        },
        uT = () => {
          var TT, UT;
          const mT = HT.current,
            WT = mT.getBoundingClientRect().top + (null !== (TT = null === (UT = jT.current) || void 0 === UT ? void 0 : UT.offsetHeight) && void 0 !== TT ? TT : 0),
            zT = MT.map((TT => {
              var UT, mT;
              return (null !== (UT = null === (mT = lT.current.get(TT)) || void 0 === mT ? void 0 : mT.getBoundingClientRect().top) && void 0 !== UT ? UT : 1 / 0) - WT
            })),
            gT = !yT && mT.scrollTop + mT.clientHeight >= mT.scrollHeight - 1;
          OT(MT[(0, nT.j)(zT, gT)])
        },
        CT = () => {
          null !== qT.current && (sT(null), uT())
        };
      (0, WT.useLayoutEffect)((() => {
        null !== gT && MT.includes(gT.page) && VT(gT.page)
      }), [null === gT || void 0 === gT ? void 0 : gT.seq]), (0, WT.useLayoutEffect)((() => {
        null === qT.current || MT.includes(qT.current) || CT()
      }));
      const {
        onFocused: rT
      } = TT, KT = (0, WT.useCallback)((TT => {
        null !== qT.current && PT(qT.current), rT(TT)
      }), [rT]);
      (0, WT.useLayoutEffect)((() => {
        const TT = qT.current;
        null !== TT && (!yT || MT.indexOf(dT[wT - 1]) < MT.indexOf(TT)) && PT(TT)
      }), [wT]), (0, WT.useEffect)((() => {
        const TT = new ResizeObserver((() => {
          null !== qT.current ? PT(qT.current) : FT()
        }));
        return TT.observe(HT.current), TT.observe(kT.current), () => {
          TT.disconnect()
        }
      }), []), (0, WT.useLayoutEffect)((() => {
        const TT = jT.current,
          UT = null === TT || void 0 === TT ? void 0 : TT.querySelector(".SegmentedToggleOptionSelected");
        UT && (TT.scrollLeft = Math.min(UT.offsetLeft, Math.max(TT.scrollLeft, UT.offsetLeft + UT.offsetWidth - TT.clientWidth)))
      }), [eT]);
      return (0, QT.jsxs)("div", {
        ref: HT,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === qT.current ? uT() : Math.abs(HT.current.scrollTop - iT.current) > 1 && CT()
        },
        onClick: TT => {
          var UT;
          null !== (UT = jT.current) && void 0 !== UT && UT.contains(TT.target) || CT()
        },
        onFocus: TT => {
          var UT;
          const mT = null === qT.current ? null : lT.current.get(qT.current);
          !mT || mT.contains(TT.target) || null !== (UT = jT.current) && void 0 !== UT && UT.contains(TT.target) || CT()
        },
        children: [MT.length > 1 && (0, QT.jsx)("div", {
          ref: jT,
          className: "LobbyManageChips",
          children: (0, QT.jsx)(vT.c, {
            options: MT.map((TT => ({
              value: TT,
              label: (0, QT.jsx)(qU, {
                page: TT
              }),
              ariaLabel: mT(cU[TT].title)
            }))),
            value: eT,
            padTabs: "2",
            ariaLabel: mT("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: VT
          })
        }), (0, QT.jsx)("div", {
          ref: kT,
          className: LT()("LobbyManageInner", {
            Staging: yT
          }),
          children: MT.filter((TT => aT.has(TT))).map((UT => {
            const mT = UT === BT;
            return (0, QT.jsxs)("section", {
              ref: TT => {
                TT ? lT.current.set(UT, TT) : lT.current.delete(UT)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": mT || void 0,
              children: [MT.length > 1 && (0, QT.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": mT || void 0,
                "data-pad-unavailable": mT || void 0,
                children: (0, QT.jsx)(cT.e, {
                  label: (0, QT.jsx)(qU, {
                    page: UT
                  })
                })
              }), (0, QT.jsx)(fU, {
                page: UT,
                manage: TT.manage,
                leaderboard: TT.leaderboard,
                focusRequest: TT.focusRequest,
                onFocused: KT,
                ruleRowsShown: "rules" === UT ? XT : 1 / 0
              })]
            }, UT)
          }))
        })]
      })
    }

    function bU(TT) {
      return void 0 === (null === TT || void 0 === TT ? void 0 : TT.page) ? null : {
        page: TT.page,
        seq: TT.seq
      }
    }

    function OU(TT) {
      let {
        leaderboard: UT
      } = TT;
      const mT = function() {
          const TT = (0, HT.f)("lobbyManage"),
            [UT, mT] = (0, WT.useReducer)((TT => TT + 1), 0),
            [zT] = (0, WT.useState)((() => new kT.b(mT)));
          return (0, WT.useEffect)((() => {
            const TT = zT.nextDeadline();
            if (null === TT) return;
            const UT = setTimeout((() => {
              zT.expire(Date.now()), mT()
            }), Math.max(0, TT - Date.now()));
            return () => {
              clearTimeout(UT)
            }
          })), (0, WT.useMemo)((() => null === TT ? null : {
            state: TT,
            send: (TT, UT, WT) => {
              const MT = zT.send(TT, UT, null !== WT && void 0 !== WT ? WT : null);
              return mT(), MT
            },
            statusOf: TT => zT.statusOf(TT, Date.now()),
            showStatus: (TT, UT) => {
              zT.show(TT, UT)
            },
            isPending: TT => zT.isPending(TT)
          }), [TT, UT, zT])
        }(),
        jT = (0, nT.k)((0, MT.b)()),
        lT = (0, gT.h)(),
        [LT, pT] = (0, WT.useState)((() => bU(lT))),
        [BT, ZT] = (0, WT.useState)(null);
      return (0, WT.useEffect)((() => {
        null === lT && (0, zT.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, WT.useEffect)((() => {
        null !== lT && (pT((TT => (null === TT || void 0 === TT ? void 0 : TT.seq) === lT.seq ? TT : bU(lT))), void 0 !== lT.focusName && "players" === lT.page ? ZT({
          name: lT.focusName,
          seq: lT.seq
        }) : (0, gT.g)(lT.seq))
      }), [null === lT || void 0 === lT ? void 0 : lT.seq]), null === mT ? null : (0, QT.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, QT.jsx)(iU, {
          pages: (0, nT.g)(mT.state, jT),
          manage: mT,
          leaderboard: UT,
          focusRequest: BT,
          onFocused: gT.g,
          landing: LT
        })
      })
    }
  },
  36653: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => jT,
      c: () => HT
    });
    var WT = mT(1593),
      zT = mT(2067),
      MT = mT(2046);
    const gT = 1e4;
    let nT = 0;

    function HT(TT) {
      const UT = ++nT;
      return new Promise((mT => {
        const nT = UT => {
            HT(), clearTimeout(kT), !1 === (null === UT || void 0 === UT ? void 0 : UT.ok) && (0, WT.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: TT.type
            }), mT(UT)
          },
          HT = zT.d.subscribe("lobbyManage", (TT => {
            const mT = function(TT, UT) {
              var mT;
              return null !== (mT = null === TT || void 0 === TT ? void 0 : TT.results.find((TT => TT.requestId === UT))) && void 0 !== mT ? mT : null
            }(TT, UT);
            null !== mT && nT(mT)
          })),
          kT = setTimeout((() => {
            nT(null)
          }), gT);
        MT.gameBridge.send("lobbyManage", {
          ...TT,
          requestId: UT
        })
      }))
    }
    const kT = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class jT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HT;
        this.onChange = TT, this.sendAction = UT, this.pending = new Map, this.statuses = new Map
      }
      send(TT, UT, mT) {
        var WT;
        return this.statuses.delete(UT), this.pending.set(UT, (null !== (WT = this.pending.get(UT)) && void 0 !== WT ? WT : 0) + 1), this.sendAction(TT).then((TT => {
          var WT;
          const zT = null !== TT && void 0 !== TT ? TT : {
              requestId: -1,
              ok: !1,
              message: kT
            },
            MT = (null !== (WT = this.pending.get(UT)) && void 0 !== WT ? WT : 1) - 1;
          MT > 0 ? this.pending.set(UT, MT) : this.pending.delete(UT);
          const gT = !zT.ok || zT.message.length > 0 ? zT.message : null === mT ? null : [mT];
          return null !== gT && this.statuses.set(UT, {
            ok: zT.ok,
            text: gT,
            until: Date.now() + 4e3
          }), this.onChange(), zT
        }))
      }
      show(TT, UT) {
        this.statuses.set(TT, {
          ...UT,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(TT) {
        for (const [UT, mT] of this.statuses) mT.until <= TT && this.statuses.delete(UT)
      }
      nextDeadline() {
        let TT = null;
        for (const mT of this.statuses.values()) {
          var UT;
          TT = Math.min(null !== (UT = TT) && void 0 !== UT ? UT : 1 / 0, mT.until)
        }
        return TT
      }
      statusOf(TT, UT) {
        const mT = this.statuses.get(TT);
        return !mT || mT.until <= UT ? null : {
          ok: mT.ok,
          text: mT.text
        }
      }
      isPending(TT) {
        return this.pending.has(TT)
      }
    }
  },
  36637: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT,
      c: () => HT
    });
    var WT = mT(641),
      zT = mT(2046),
      MT = mT(1758),
      gT = mT(102),
      nT = mT(1360);

    function HT(TT, UT, mT) {
      return gT.featureFlags.useSocialFeatures && TT && null === (0, nT.b)(UT, mT)
    }

    function kT(TT, UT) {
      var mT, gT;
      const nT = MT.e.getSocialState().friends.find((TT => TT.name.toLowerCase() === UT.toLowerCase())),
        HT = zT.gameBridge.latest("players").byId[TT],
        kT = void 0 !== HT && HT.name === UT,
        jT = kT && null !== (mT = HT.cosmetics) && void 0 !== mT ? mT : void 0,
        lT = nT && jT ? {
          ...nT,
          cosmetics: jT
        } : nT;
      return {
        playerSocialPreview: null !== lT && void 0 !== lT ? lT : {
          isError: !1,
          name: UT,
          ranks: kT ? [...HT.ranks] : [],
          cosmetics: null !== jT && void 0 !== jT ? jT : {},
          nameColour: null !== (gT = null === jT || void 0 === jT ? void 0 : jT.nameColour) && void 0 !== gT ? gT : WT.c,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== nT
      }
    }
  },
  36832: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => lT
    });
    var WT = mT(63),
      zT = mT(1126),
      MT = mT.n(zT),
      gT = mT(1792),
      nT = mT(1569),
      HT = mT(1446),
      kT = mT(1135),
      jT = mT(1188);

    function lT(TT) {
      let {
        label: UT,
        icon: mT,
        placeholder: zT,
        onSubmit: lT
      } = TT;
      const LT = (0, WT.useRef)(null),
        [pT, BT] = (0, WT.useState)(""),
        [ZT, cT] = (0, WT.useState)("Enter"),
        [vT, fT] = (0, WT.useState)(null);
      (0, WT.useEffect)((() => {
        if ("Success" !== ZT && "Error" !== ZT) return;
        const TT = setTimeout((() => {
          "Success" === ZT && LT.current && (LT.current.value = "", BT("")), cT("Enter")
        }), "Success" === ZT ? 1e3 : 4e3);
        return () => {
          clearTimeout(TT)
        }
      }), [ZT]);
      const qT = () => {
        const TT = pT.trim();
        "" !== TT && "Enter" === ZT && (cT("Loading"), lT(TT).then((TT => {
          LT.current && ("error" in TT ? null === TT.error ? cT("Enter") : (fT(TT.error), cT("Error")) : cT("Success"))
        })))
      };
      return (0, jT.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: TT => {
          TT.target === LT.current && "Escape" !== TT.key && TT.stopPropagation()
        },
        children: [(0, jT.jsxs)("div", {
          className: MT()("AddFriendBodyOverlay", `AddFriendBodyOverlay${ZT}`),
          children: ["Loading" === ZT && (0, jT.jsx)(HT.c, {}), "Success" === ZT && (0, jT.jsx)(kT.c, {
            name: "check"
          }), "Error" === ZT && vT]
        }), (0, jT.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, jT.jsx)(gT.e, {
            className: "PlayerSearchInput",
            domRef: LT,
            maxLength: 32,
            placeholderText: zT,
            ariaLabel: zT,
            stopPropagation: !1,
            onValueChange: TT => {
              BT(TT)
            },
            onEnter: qT
          }), (0, jT.jsxs)(nT.e, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== ZT || "" === pT.trim(),
            onClick: qT,
            children: [(0, jT.jsx)(kT.c, {
              name: mT
            }), " ", UT]
          })]
        })]
      })
    }
  },
  36815: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => lT
    });
    var WT = mT(63),
      zT = mT(1126),
      MT = mT.n(zT),
      gT = mT(1288),
      nT = mT(1135),
      HT = mT(1188);
    const kT = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      jT = ["unlisted", "public", "whitelist", "private"];

    function lT(TT) {
      let {
        visibility: UT,
        onPick: mT
      } = TT;
      const {
        t: zT
      } = (0, gT.z)(), lT = (0, WT.useRef)([]);
      return (0, HT.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": zT("worldSocial:whoCanJoin"),
        children: jT.map(((TT, WT) => {
          const gT = TT === UT;
          return (0, HT.jsxs)("button", {
            ref: TT => {
              lT.current[WT] = TT
            },
            type: "button",
            className: MT()("WorldSocialTile", {
              WorldSocialTileSelected: gT
            }),
            "aria-pressed": gT,
            tabIndex: gT ? 0 : -1,
            onKeyDown: TT => {
              ((TT, UT) => {
                const mT = "ArrowRight" === TT.key || "ArrowDown" === TT.key ? 1 : "ArrowLeft" === TT.key || "ArrowUp" === TT.key ? -1 : 0;
                var WT;
                0 !== mT && (TT.preventDefault(), null === (WT = lT.current[(UT + mT + jT.length) % jT.length]) || void 0 === WT || WT.focus())
              })(TT, WT)
            },
            onClick: () => {
              mT(TT)
            },
            children: [(0, HT.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, HT.jsx)(nT.c, {
                name: kT[TT]
              })
            }), (0, HT.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, HT.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: zT(`worldSocial:${TT}`)
              }), (0, HT.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: zT(`worldSocial:${TT}Description`)
              })]
            })]
          }, TT)
        }))
      })
    }
  },
  36827: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT
    });
    var WT = mT(1288),
      zT = mT(2754),
      MT = mT(4468),
      gT = mT(1188);

    function nT(TT) {
      let {
        Cl: UT,
        children: mT,
        ...nT
      } = TT;
      const {
        t: HT
      } = (0, WT.z)();
      return (0, gT.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          UT.onChange(!UT.on)
        },
        children: (0, gT.jsx)(zT.f, {
          ...nT,
          opensProfileCard: !1,
          children: (0, gT.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: TT => {
              TT.stopPropagation()
            },
            children: [mT, (0, gT.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, gT.jsx)(MT.d, {
                checked: UT.on,
                disabled: !1,
                ariaLabel: HT("worldSocial:letJoin", {
                  playerName: nT.playerSocialPreview.name
                }),
                onChange: TT => {
                  UT.onChange(TT.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36812: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => BT
    });
    var WT = mT(63),
      zT = mT(1288),
      MT = mT(1976),
      gT = mT(102),
      nT = mT(25),
      HT = mT(1593),
      kT = mT(2784),
      jT = mT(34167),
      lT = mT(1569),
      LT = mT(1135),
      pT = mT(1188);

    function BT(TT) {
      let {
        worldCode: UT,
        message: mT
      } = TT;
      const {
        t: BT
      } = (0, zT.z)(), {
        isTouchScreen: ZT
      } = (0, nT.h)(["isTouchScreen"]), cT = gT.featureFlags.canUseInviteLinks, vT = (0, jT.h)(cT && null === mT), [fT, qT] = (0, kT.h)(), iT = (0, WT.useRef)(null);
      if (null !== mT) return (0, pT.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, pT.jsx)(LT.c, {
          name: "lock"
        }), (0, pT.jsx)("span", {
          children: mT
        })]
      });
      const bT = cT ? vT : UT,
        OT = ZT && cT && (0, kT.d)();
      return (0, pT.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!cT && (0, pT.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: BT("worldSocial:worldCode")
        }), (0, pT.jsx)("input", {
          ref: iT,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== bT && void 0 !== bT ? bT : "",
          "aria-label": BT(cT ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: TT => {
            TT.currentTarget.select()
          }
        }), (0, pT.jsxs)(lT.e, {
          className: "WorldSocialCopy",
          disabled: null === bT,
          onClick: () => {
            null !== bT && (0, kT.f)(bT, {
              useShareSheet: OT,
              onOutcome: TT => {
                if ((0, HT.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== TT || cT ? TT : "code"
                  }), "copied" === TT) qT();
                else if ("failed" === TT) {
                  var UT;
                  null === (UT = iT.current) || void 0 === UT || UT.focus(), MT.i.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, pT.jsx)(LT.c, {
            name: fT ? "check" : OT ? "up-from-bracket" : "copy"
          }), " ", BT(fT ? "general:copied" : OT ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36823: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => pT,
      g: () => LT,
      j: () => lT
    });
    var WT = mT(641),
      zT = mT(1288),
      MT = mT(1758),
      gT = mT(2754),
      nT = mT(2713),
      HT = mT(1569),
      kT = mT(36827),
      jT = mT(1188);

    function lT(TT, UT) {
      var mT;
      return {
        isError: !1,
        name: TT,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== UT && void 0 !== UT ? UT : {},
        nameColour: null !== (mT = null === UT || void 0 === UT ? void 0 : UT.nameColour) && void 0 !== mT ? mT : WT.c,
        location: {
          status: "offline"
        }
      }
    }

    function LT(TT) {
      let {
        player: UT,
        isFriend: mT = !1,
        status: WT,
        showLocation: HT = void 0 === WT,
        Cl: lT,
        onSendFriendRequest: LT,
        actions: pT,
        zIndex: BT
      } = TT;
      const {
        t: ZT
      } = (0, zT.z)();
      let cT = WT;
      null !== lT && void 0 !== lT && lT.on && (cT = (0, jT.jsxs)(jT.Fragment, {
        children: [null !== WT && void 0 !== WT ? WT : (0, jT.jsx)(nT.e, {
          socialPreview: UT
        }), (0, jT.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", ZT("worldSocial:canJoin")]
        })]
      }));
      const vT = {
        playerSocialPreview: UT,
        isFriend: mT,
        hideFriendBadge: !0,
        onFriendRemoved: mT ? TT => {
          MT.e.removeFriendFromState(TT)
        } : void 0,
        status: cT,
        showLocation: HT,
        onSendFriendRequest: LT,
        zIndex: BT
      };
      return lT ? (0, jT.jsx)(kT.b, {
        ...vT,
        Cl: lT,
        children: pT
      }) : (0, jT.jsx)(gT.f, {
        ...vT,
        opensProfileCard: !1,
        children: pT || void 0
      })
    }

    function pT(TT) {
      let {
        row: UT,
        Cl: mT,
        canInvite: WT,
        invited: MT,
        onInvite: gT,
        zIndex: nT
      } = TT;
      const {
        t: kT
      } = (0, zT.z)(), lT = "online" === UT.place ? HT.e : HT.g;
      return (0, jT.jsx)(LT, {
        player: UT.friend,
        isFriend: !0,
        status: "here" === UT.place ? kT("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Cl: mT,
        zIndex: nT,
        actions: WT && (0, jT.jsx)(lT, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: MT,
          onClick: gT,
          ariaLabel: `${kT("worldSocial:invite")} ${UT.friend.name}`,
          children: kT(MT ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36798: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => HT,
      e: () => gT,
      h: () => kT
    });
    var WT = mT(63),
      zT = mT(4686),
      MT = mT(1976);

    function gT(TT) {
      const UT = {
        lobbyName: TT,
        answer: null,
        response: zT.d.getSocialSettings(TT)
      };
      return UT.response.then((TT => {
        UT.answer = TT
      })), UT
    }
    const nT = new Map;

    function HT(TT) {
      nT.set(TT.lobbyName, TT)
    }

    function kT(TT) {
      const [UT] = (0, WT.useState)((() => function(TT) {
        var UT;
        const mT = null !== (UT = nT.get(TT)) && void 0 !== UT ? UT : null;
        return null !== mT && void 0 !== mT && mT.answer && "error" in mT.answer ? null : mT
      }(TT))), [mT, gT] = (0, WT.useState)((() => null !== UT && void 0 !== UT && UT.answer && "settings" in UT.answer ? UT.answer.settings : null)), [HT, kT] = (0, WT.useState)(!0), [jT, lT] = (0, WT.useState)(null !== mT), LT = (0, WT.useRef)(mT);
      LT.current = mT;
      const pT = (0, WT.useRef)(0),
        BT = (0, WT.useRef)(0),
        ZT = (0, WT.useRef)(!1),
        cT = (0, WT.useRef)(!0),
        vT = (0, WT.useCallback)((async UT => {
          const mT = ++pT.current,
            WT = await (null !== UT && void 0 !== UT ? UT : zT.d.getSocialSettings(TT));
          cT.current && mT === pT.current && (lT(!0), kT(!1), "error" in WT || gT(WT.settings))
        }), [TT]),
        fT = (0, WT.useCallback)((() => {
          kT(!0), vT()
        }), [vT]),
        qT = (0, WT.useCallback)((() => {
          BT.current > 0 ? ZT.current = !0 : vT()
        }), [vT]);
      (0, WT.useEffect)((() => (cT.current = !0, nT.delete(TT), kT(!0), vT(null === UT || void 0 === UT ? void 0 : UT.response), () => {
        cT.current = !1
      })), [vT, TT, UT]);
      const iT = TT => {
        pT.current++, kT(!1), LT.current = TT, gT(TT)
      };
      return {
        settings: mT,
        loading: HT,
        answered: jT,
        retry: fT,
        refresh: qT,
        change: async function(UT, mT) {
          let {
            quiet: WT = !1,
            onAnswer: gT
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const nT = LT.current;
          if (null === nT) return !1;
          iT(mT(nT)), BT.current > 0 && (ZT.current = !0), BT.current++;
          const HT = await zT.d.setSocialSettings(TT, UT);
          BT.current--;
          const kT = !("error" in HT);
          if (!cT.current) return kT;
          if (null === gT || void 0 === gT || gT(HT), WT);
          else if ("error" in HT) MT.i.showMessage({
            translationKey: HT.error
          });
          else
            for (const TT of HT.notFound) MT.i.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: TT
              }
            });
          if (BT.current > 0) return kT;
          const jT = ZT.current;
          return ZT.current = !1, !jT && "settings" in HT ? iT(HT.settings) : (jT || iT(nT), vT()), kT
        }
      }
    }
  },
  36840: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT,
      f: () => MT
    });
    var WT = mT(166);
    const zT = new Map;

    function MT(TT, UT) {
      var mT;
      const WT = null !== (mT = zT.get(TT)) && void 0 !== mT ? mT : new Map;
      WT.set(UT, Date.now()), zT.set(TT, WT)
    }

    function gT(TT) {
      const UT = zT.get(TT);
      if (!UT) return [];
      const mT = Date.now();
      for (const [zT, MT] of UT) mT - MT >= WT.m && UT.delete(zT);
      return [...UT.keys()]
    }
  },
  36804: (TT, UT, mT) => {
    function WT(TT, UT) {
      const mT = UT.toLowerCase();
      for (const WT of TT)
        if (WT.toLowerCase() === mT) return !0;
      return !1
    }

    function zT(TT, UT, mT) {
      const zT = [],
        MT = [],
        gT = [];
      for (const nT of TT) !nT.isError && nT.name && ("inGame" === nT.location.status && nT.location.inLobbyName === UT || WT(mT, nT.name) ? MT.push({
        friend: nT,
        place: "here"
      }) : "offline" === nT.location.status ? gT.push({
        friend: nT,
        place: "offline"
      }) : zT.push({
        friend: nT,
        place: "online"
      }));
      return [...zT, ...MT, ...gT]
    }

    function MT(TT, UT, mT) {
      const zT = [],
        MT = TT.flatMap((TT => "here" === TT.place ? [TT.friend.name] : []));
      for (const gT of [...MT, ...UT]) WT(zT, gT) || WT(mT, gT) || zT.push(gT);
      return zT
    }

    function gT(TT, UT) {
      return null === TT || void 0 === TT || !TT.canManage || WT(TT.whitelist, UT) ? "none" : "whitelist" === TT.visibility ? "required" : "quiet"
    }

    function nT(TT) {
      if (null === TT) return !0;
      const {
        visibility: UT
      } = TT;
      return "public" === UT || "unlisted" === UT || "whitelist" === UT && TT.canManage
    }

    function HT(TT, UT, mT) {
      if (mT) {
        const mT = UT.filter((UT => !WT(TT.whitelist, UT)));
        return {
          ...TT,
          whitelist: [...TT.whitelist, ...mT]
        }
      }
      return {
        ...TT,
        whitelist: TT.whitelist.filter((TT => !WT(UT, TT)))
      }
    }

    function kT(TT, UT) {
      const mT = [];
      for (let WT = 0; WT < TT.length; WT += UT) mT.push(TT.slice(WT, WT + UT));
      return mT
    }
    mT.d(UT, {
      d: () => nT,
      f: () => MT,
      i: () => zT,
      l: () => WT,
      o: () => kT,
      q: () => gT,
      t: () => HT
    })
  },
  37105: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT
    });
    var WT = mT(63),
      zT = mT(2552);

    function MT() {
      const TT = (0, zT.f)("lobbyLeaderboardInfo");
      return (0, WT.useMemo)((() => function(TT) {
        if (null === TT) return null;
        const UT = Object.entries(TT),
          mT = UT.filter((TT => {
            let [, UT] = TT;
            return void 0 !== UT
          }));
        if (mT.length === UT.length) return TT;
        const WT = Object.fromEntries(mT),
          zT = Object.keys(TT).filter((TT => !Object.hasOwn(WT, TT)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${zT.join(", ")}`), WT
      }(TT)), [TT])
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);