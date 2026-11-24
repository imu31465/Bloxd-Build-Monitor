export const id = 223;
export const ids = [223];
export const modules = {
  41101: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      LobbyManageView: () => QI
    });
    var TB = ZB(63),
      JB = ZB(1542),
      oB = ZB(37033),
      GB = ZB(2540),
      vB = ZB(2549),
      kB = ZB(2526),
      cB = ZB(36587);

    function nB() {
      const [BB, IB] = (0, TB.useState)(new Map);
      return {
        get: IB => BB.get(IB),
        hold: (0, TB.useCallback)(((BB, ZB, TB) => {
          IB((IB => new Map(IB).set(BB, ZB))), TB.then((() => {
            IB((IB => {
              const ZB = new Map(IB);
              return ZB.delete(BB), ZB
            }))
          }))
        }), [])
      }
    }
    var hB = ZB(1091),
      zB = ZB.n(hB),
      FB = ZB(1248),
      NB = ZB(1102),
      gB = ZB(1397),
      qB = ZB(2797),
      yB = ZB(5177),
      UB = ZB(3625);
    var WB = ZB(2054),
      dB = ZB(1516);

    function CB(BB, IB, ZB) {
      const TB = BB.filter((BB => BB.name !== IB)),
        JB = TB.filter((BB => "none" === BB.role)).sort(((BB, IB) => IB.at - BB.at)),
        oB = TB.filter((BB => "none" !== BB.role)).sort(((BB, IB) => ZB.indexOf(BB.role) - ZB.indexOf(IB.role) || IB.at - BB.at));
      return [...BB.some((BB => BB.name === IB)) && null !== IB ? [IB] : [], ...[...JB, ...oB].map((BB => BB.name))]
    }

    function QB(BB, IB) {
      const ZB = BB.banned.map((BB => BB.name)),
        TB = new Set(ZB);
      return {
        here: CB(BB.here, IB, BB.roles.map((BB => BB.role))),
        away: BB.away.filter((BB => !TB.has(BB.name))).map((BB => BB.name)),
        banned: ZB
      }
    }

    function sB(BB, IB) {
      const ZB = BB.here.find((BB => BB.name === IB));
      if (ZB) return {
        section: "here",
        player: ZB
      };
      const TB = BB.banned.find((BB => BB.name === IB));
      if (TB) return {
        section: "banned",
        bannedAt: TB.at
      };
      const JB = BB.away.find((BB => BB.name === IB));
      return JB ? {
        section: "away",
        player: JB
      } : {
        section: "gone"
      }
    }
    const wB = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var OB = ZB(2792),
      YB = ZB(36580),
      iB = ZB(36747),
      pB = ZB(3294),
      aB = ZB(360);

    function HB(BB, IB, ZB) {
      return IB.map((IB => {
        if ("string" === typeof IB) return IB;
        const TB = "str" in IB ? IB.str : IB;
        return "string" === typeof TB ? TB : "entityName" in TB ? TB.entityName : "translationKey" in TB ? BB(TB.translationKey, (0, FB.s)(TB.params, ZB)) : ""
      })).join("")
    }

    function MB(BB, IB, ZB, TB, JB) {
      return JB - TB < 6e4 ? BB(`${ZB}JustNow`) : BB(ZB, {
        time: (0, aB.hb)((0, FB.o)(IB, ZB), TB, JB)
      })
    }
    var jB = ZB(1960),
      PB = ZB(1746),
      RB = ZB(1153);

    function rB(BB) {
      let {
        status: IB
      } = BB;
      return (0, RB.jsx)("span", {
        className: zB()("LobbyManageStatus", {
          LobbyManageStatusRefused: !IB.ok
        }),
        children: (0, RB.jsx)(jB.e, {
          text: IB.text
        })
      })
    }

    function mB(BB) {
      let {
        names: IB,
        cap: ZB,
        filterFrom: JB,
        moreLabel: oB,
        reveal: GB = null,
        renderRow: vB
      } = BB;
      const {
        t: kB
      } = (0, FB.G)(), [cB, nB] = (0, TB.useState)(!1), [hB, zB] = (0, TB.useState)(""), gB = cB || null !== GB && IB.indexOf(GB) >= ZB, yB = (gB || IB.length <= ZB) && null !== JB && IB.length > JB, UB = hB.trim().toLowerCase();
      let WB = gB ? IB : IB.slice(0, ZB);
      return yB && "" !== UB && (WB = WB.filter((BB => BB.toLowerCase().includes(UB)))), (0, RB.jsxs)(RB.Fragment, {
        children: [yB && (0, RB.jsx)(PB.c, {
          className: "LobbyManageFilter",
          placeholderText: kB("lobbyManage:findName"),
          ariaLabel: kB("lobbyManage:findName"),
          onValueChange: BB => {
            zB(BB)
          }
        }), WB.length > 0 && (0, RB.jsx)("div", {
          className: "PlayerRows",
          children: WB.map(((BB, IB) => vB(BB, WB.length - IB)))
        }), !gB && IB.length > ZB && (0, RB.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, RB.jsx)(qB.d, {
            label: (0, RB.jsxs)(RB.Fragment, {
              children: [oB, " ", (0, RB.jsx)(NB.d, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              nB(!0)
            }
          })
        })]
      })
    }

    function XB(BB) {
      let {
        value: IB,
        placeholder: ZB,
        ariaLabel: JB,
        maxLength: oB,
        wide: GB = !1,
        onSave: vB
      } = BB;
      const kB = (0, TB.useRef)(null),
        [cB, nB] = (0, TB.useState)(0),
        hB = (0, TB.useRef)(!0),
        FB = (0, TB.useRef)(null),
        NB = (0, TB.useRef)({
          value: IB,
          onSave: vB
        });
      NB.current = {
        value: IB,
        onSave: vB
      };
      const gB = () => {
        const BB = FB.current;
        FB.current = null, null !== BB && BB !== NB.current.value && NB.current.onSave(BB).then((() => {
          hB.current && nB((BB => BB + 1))
        }))
      };
      return (0, TB.useEffect)((() => {
        null === FB.current && kB.current && (kB.current.value = IB)
      }), [IB, cB]), (0, TB.useEffect)((() => () => {
        hB.current = !1, gB()
      }), []), (0, RB.jsx)("div", {
        className: zB()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: GB
        }),
        onBlur: gB,
        children: (0, RB.jsx)(PB.c, {
          domRef: kB,
          defaultValue: IB,
          placeholderText: ZB,
          ariaLabel: JB,
          maxLength: oB,
          onValueChange: BB => {
            FB.current = BB
          },
          onEnter: gB
        })
      })
    }
    const LB = ["mod", "coOwner"],
      eB = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function uB(BB) {
      var IB, ZB, oB;
      let {
        name: GB,
        place: vB,
        openedIn: kB,
        isYou: cB,
        manage: hB,
        hiddenNames: zB,
        zIndex: gB
      } = BB;
      const {
        t: qB,
        selectedLanguage: yB
      } = (0, FB.G)(), [UB, WB] = (0, TB.useState)(null), {
        state: CB
      } = hB, QB = `player:${GB}`, sB = function(BB, IB) {
        if ("banned" === BB.section) return {
          ...wB,
          unban: !0
        };
        if ("gone" === BB.section) return wB;
        const {
          player: ZB
        } = BB, TB = "here" === BB.section, JB = TB || "none" !== ZB.role ? ZB.can.roles : [];
        return {
          gamemode: TB && IB && null !== ZB.gamemode && ZB.can.gamemode,
          roles: JB,
          fixedRole: 0 === JB.length && "none" !== ZB.role ? ZB.role : null,
          kick: TB && ZB.can.kick,
          ban: ZB.can.ban,
          unban: !1
        }
      }(vB, null !== CB.gamemodes), aB = hB.statusOf(QB), jB = hB.isPending(QB), PB = nB(), mB = Date.now(), XB = BB => {
        var IB, ZB;
        return null !== (IB = null === (ZB = (BB => CB.roles.find((IB => IB.role === BB)))(BB)) || void 0 === ZB ? void 0 : ZB.label) && void 0 !== IB ? IB : BB
      }, uB = BB => {
        const IB = eB[BB];
        return void 0 === IB ? void 0 : qB(IB)
      }, fB = "here" === vB.section || "away" === vB.section ? vB.player : null, lB = "here" === vB.section ? vB.player.id : null, {
        playerSocialPreview: AB,
        isFriend: tB
      } = null === lB ? {
        playerSocialPreview: (0, iB.j)(GB, null),
        isFriend: !1
      } : (0, YB.c)(lB, GB), bB = function() {
        hB.send(...arguments)
      }, xB = (BB, IB) => {
        PB.hold("role", BB, hB.send({
          type: "setRole",
          name: GB,
          role: BB
        }, QB, IB))
      };
      let EB = null;
      if ("ban" === (null === UB || void 0 === UB ? void 0 : UB.kind)) EB = qB("lobbyManageEntry:banConfirm", {
        playerName: GB
      });
      else if ("role" === (null === UB || void 0 === UB ? void 0 : UB.kind)) {
        var DB;
        EB = `${qB("lobbyManage:roleConfirm",{playerName:GB,role:XB(UB.role)})} ${null!==(DB=uB(UB.role))&&void 0!==DB?DB:""}`
      } else if (aB) EB = (0, RB.jsx)(rB, {
        status: aB
      });
      else if (cB) EB = qB("lobbyManage:you");
      else if ("here" === vB.section) "none" === vB.player.role && mB - vB.player.at < 6e5 && (EB = MB(qB, yB.code, "lobbyManage:joinedAgo", vB.player.at, mB));
      else if ("away" === vB.section) {
        if (vB.player.at > 0) {
          const BB = "kicked" === vB.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          EB = MB(qB, yB.code, BB, vB.player.at, mB)
        }
      } else "banned" === vB.section ? null !== vB.bannedAt && (EB = MB(qB, yB.code, "lobbyManage:bannedAgo", vB.bannedAt, mB)) : "banned" === kB && (EB = qB("lobbyManageEntry:unbanned"));
      return (0, RB.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": GB,
        children: (0, RB.jsxs)(OB.e, {
          playerSocialPreview: AB,
          isFriend: tB,
          status: EB,
          opensProfileCard: !cB && (0, YB.d)(!0, GB, zB),
          zIndex: gB,
          children: [null !== UB && (0, RB.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === UB.kind && (0, RB.jsxs)(dB.M, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                WB(null), bB({
                  type: "ban",
                  name: GB
                }, QB)
              },
              children: [(0, RB.jsx)(NB.d, {
                name: "gavel"
              }), (0, RB.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: qB("lobbyManageEntry:ban")
              })]
            }), "role" === UB.kind && (0, RB.jsx)(dB.g, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: UB.role
              },
              onClick: () => {
                WB(null), xB(UB.role)
              },
              children: qB("lobbyManage:makeRole", {
                role: XB(UB.role)
              })
            }), (0, RB.jsx)(dB.k, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                WB(null)
              },
              children: qB("general:cancel")
            })]
          }), null === UB && (0, RB.jsxs)(RB.Fragment, {
            children: [(0, RB.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [sB.gamemode && null !== fB && (0, RB.jsx)(pB.c, {
                options: (null !== (IB = CB.gamemodes) && void 0 !== IB ? IB : []).map((BB => ({
                  value: BB.value,
                  label: HB(qB, BB.label, zB)
                }))),
                value: null !== (ZB = PB.get("gamemode")) && void 0 !== ZB ? ZB : fB.gamemode,
                disabled: jB,
                onChange: BB => {
                  (0, JB.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: BB.value
                  }), PB.hold("gamemode", BB.value, hB.send({
                    type: "setGamemode",
                    name: GB,
                    gamemode: BB.value
                  }, QB))
                }
              }), sB.roles.length > 0 && null !== fB && (0, RB.jsx)(pB.c, {
                options: [...CB.roles].reverse().filter((BB => sB.roles.includes(BB.role))).map((BB => ({
                  value: BB.role,
                  label: BB.label
                }))),
                value: null !== (oB = PB.get("role")) && void 0 !== oB ? oB : fB.role,
                disabled: jB,
                onChange: BB => {
                  var IB;
                  (IB = BB.value) !== (null === fB || void 0 === fB ? void 0 : fB.role) && (LB.includes(IB) ? WB({
                    kind: "role",
                    role: IB
                  }) : ((0, JB.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: IB
                  }), xB(IB, uB(IB))))
                }
              }), null !== sB.fixedRole && (0, RB.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: XB(sB.fixedRole)
              })]
            }), (0, RB.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [sB.kick && (0, RB.jsxs)(dB.k, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${qB("lobbyManageEntry:kick")} ${GB}`,
                disabled: jB,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  bB({
                    type: "kick",
                    name: GB
                  }, QB)
                },
                children: [(0, RB.jsx)(NB.d, {
                  name: "person-falling-burst"
                }), (0, RB.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: qB("lobbyManageEntry:kick")
                })]
              }), sB.ban && (0, RB.jsxs)(dB.N, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${qB("lobbyManageEntry:ban")} ${GB}`,
                disabled: jB,
                padDestructive: !0,
                onClick: () => {
                  WB({
                    kind: "ban"
                  })
                },
                children: [(0, RB.jsx)(NB.d, {
                  name: "gavel"
                }), (0, RB.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: qB("lobbyManageEntry:ban")
                })]
              }), sB.unban && (0, RB.jsxs)(dB.k, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${qB("lobbyManageEntry:unban")} ${GB}`,
                disabled: jB,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  bB({
                    type: "unban",
                    name: GB
                  }, QB)
                },
                children: [(0, RB.jsx)(NB.d, {
                  name: "user-unlock"
                }), (0, RB.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: qB("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function fB(BB) {
      var IB, ZB, JB, oB;
      let {
        manage: GB,
        focusRequest: vB,
        onFocused: kB
      } = BB;
      const {
        t: cB
      } = (0, FB.G)(), nB = (0, WB.j)("players"), hB = (0, WB.j)("hiddenPlayerNames"), zB = (0, TB.useRef)(null), {
        state: gB
      } = GB, yB = null === nB.localId ? null : null !== (IB = null === (ZB = nB.byId[nB.localId]) || void 0 === ZB ? void 0 : ZB.name) && void 0 !== IB ? IB : null, [UB] = (0, TB.useState)((() => QB(gB, yB))), CB = function(BB, IB, ZB) {
        const TB = new Set([...BB.here, ...BB.away, ...BB.banned]),
          JB = QB(IB, ZB),
          oB = IB => {
            const ZB = JB[IB].filter((BB => !TB.has(BB)));
            for (const BB of ZB) TB.add(BB);
            return [...BB[IB], ...ZB]
          };
        return {
          here: oB("here"),
          away: oB("away"),
          banned: oB("banned")
        }
      }(UB, gB, yB), [wB, OB] = (0, TB.useState)(!1), YB = function(BB, IB) {
        return BB.here.filter((BB => BB.name !== IB && "none" === BB.role && BB.can.kick)).length
      }(gB, yB), iB = GB.statusOf("kickAll");
      (0, TB.useEffect)((() => {
        var BB, IB;
        if (null === vB) return;
        const ZB = null === (BB = zB.current) || void 0 === BB ? void 0 : BB.querySelector(`[data-lobby-manage-row="${CSS.escape(vB.name)}"]`);
        null === ZB || void 0 === ZB || ZB.scrollIntoView({
          block: "center"
        }), null === ZB || void 0 === ZB || null === (IB = ZB.querySelector(".ProfilePreview")) || void 0 === IB || IB.focus({
          preventScroll: !0
        }), kB(vB.seq)
      }), [null === vB || void 0 === vB ? void 0 : vB.seq]);
      const pB = BB => (IB, ZB) => (0, RB.jsx)(uB, {
        name: IB,
        place: sB(gB, IB),
        openedIn: BB,
        isYou: IB === yB,
        manage: GB,
        hiddenNames: hB,
        zIndex: ZB
      }, IB);
      return (0, RB.jsxs)("div", {
        ref: zB,
        className: "LobbyManagePage",
        children: [CB.here.length > 0 && (0, RB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, RB.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, RB.jsx)(qB.d, {
              label: cB("lobbyManage:here"),
              meta: gB.here.length
            }), YB >= 2 && !wB && (0, RB.jsxs)(dB.N, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: GB.isPending("kickAll"),
              onClick: () => {
                OB(!0)
              },
              children: [(0, RB.jsx)(NB.d, {
                name: "person-falling-burst"
              }), " ", cB("lobbyManage:kickAll")]
            })]
          }), wB && YB >= 2 && (0, RB.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, RB.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: cB("lobbyManage:kickAllConfirm", {
                count: YB
              })
            }), (0, RB.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, RB.jsx)(dB.M, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  OB(!1), GB.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: cB("lobbyManage:kickAll")
              }), (0, RB.jsx)(dB.k, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  OB(!1)
                },
                children: cB("general:cancel")
              })]
            })]
          }), iB && (0, RB.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, RB.jsx)(rB, {
              status: iB
            })
          }), (0, RB.jsx)(mB, {
            names: CB.here,
            cap: CB.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: pB("here")
          })]
        }), CB.away.length > 0 && (0, RB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, RB.jsx)(qB.d, {
            label: cB("lobbyManage:notHere"),
            meta: CB.away.length
          }), (0, RB.jsx)(mB, {
            names: CB.away,
            cap: 5,
            filterFrom: null,
            moreLabel: cB("lobbyManage:allCount", {
              count: CB.away.length
            }),
            reveal: null !== (JB = null === vB || void 0 === vB ? void 0 : vB.name) && void 0 !== JB ? JB : null,
            renderRow: pB("away")
          })]
        }), CB.banned.length > 0 && (0, RB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, RB.jsx)(qB.d, {
            label: cB("lobbyManage:banned"),
            meta: CB.banned.length
          }), (0, RB.jsx)(mB, {
            names: CB.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: cB("lobbyManage:allCount", {
              count: CB.banned.length
            }),
            reveal: null !== (oB = null === vB || void 0 === vB ? void 0 : vB.name) && void 0 !== oB ? oB : null,
            renderRow: pB("banned")
          })]
        })]
      })
    }
    var lB = ZB(4802),
      AB = ZB(1717),
      tB = ZB(36726),
      bB = ZB(36745),
      xB = ZB(36737),
      EB = ZB(36735),
      DB = ZB(36768),
      KB = ZB(36754),
      VB = ZB(36763);

    function SB(BB) {
      const IB = new Set;
      for (const ZB of BB) IB.add(ZB.toLowerCase());
      return IB
    }

    function BI(BB) {
      var IB, ZB;
      let {
        state: JB,
        lobbyName: oB,
        listed: GB,
        isListed: vB,
        dU: kB,
        cW: cB,
        statusOf: nB
      } = BB;
      const {
        t: hB,
        selectedLanguage: zB
      } = (0, FB.G)(), NB = (0, AB.j)(), gB = (0, WB.j)("players"), yB = null === gB.localId ? null : null !== (IB = null === (ZB = gB.byId[gB.localId]) || void 0 === ZB ? void 0 : ZB.name) && void 0 !== IB ? IB : null, UB = (0, TB.useMemo)((() => (0, EB.i)(NB.friends, oB, JB.here.map((BB => BB.name)))), [NB.friends, oB, JB.here]), dB = new Map(UB.map((BB => [BB.friend.name.toLowerCase(), BB]))), CB = function(BB) {
        let {
          refused: IB,
          listed: ZB,
          here: TB,
          friends: JB,
          excluded: oB
        } = BB;
        const GB = SB(oB),
          vB = BB => BB.filter((BB => {
            const IB = BB.toLowerCase();
            return !GB.has(IB) && (GB.add(IB), !0)
          }));
        return {
          added: [],
          refused: vB(IB),
          listed: vB(ZB),
          suggested: vB([...TB, ...JB])
        }
      }({
        refused: JB.refused.map((BB => BB.name)),
        listed: GB,
        here: JB.here.map((BB => BB.name)),
        friends: UB.flatMap((BB => "here" === BB.place ? [] : [BB.friend.name])),
        excluded: [...null === yB ? [] : [yB], ...[...JB.here, ...JB.away].flatMap((BB => "none" === BB.role || (0, EB.m)(GB, BB.name) ? [] : [BB.name]))]
      }), [QB] = (0, TB.useState)(CB), [sB, wB] = (0, TB.useState)([]), OB = function(BB, IB, ZB) {
        const TB = SB(ZB),
          JB = SB([...ZB, ...BB.refused, ...BB.listed, ...BB.suggested]),
          oB = ZB => [...BB[ZB].filter((BB => !TB.has(BB.toLowerCase()))), ...IB[ZB].filter((BB => {
            const IB = BB.toLowerCase();
            return !JB.has(IB) && (JB.add(IB), !0)
          }))];
        return {
          added: [...ZB],
          refused: oB("refused"),
          listed: oB("listed"),
          suggested: oB("suggested")
        }
      }(QB, CB, sB), pB = (BB, IB) => {
        var ZB, TB;
        const oB = BB.toLowerCase(),
          GB = dB.get(oB),
          cB = JB.here.find((BB => BB.name.toLowerCase() === oB)),
          FB = JB.refused.find((BB => BB.name.toLowerCase() === oB)),
          NB = null !== (ZB = null === nB || void 0 === nB ? void 0 : nB(BB)) && void 0 !== ZB ? ZB : null;
        let gB = null;
        NB ? gB = (0, RB.jsx)(rB, {
          status: NB
        }) : FB ? gB = MB(hB, zB.code, "lobbyManage:triedToJoinAgo", FB.at, Date.now()) : GB && cB ? gB = hB("lobbyManage:friendHere") : GB ? gB = "online" === GB.place ? hB("lobbyManage:friendOnline") : hB("lobbyManage:friend") : cB && (gB = hB("lobbyManage:hereStatus"));
        let qB = null !== (TB = null === GB || void 0 === GB ? void 0 : GB.friend) && void 0 !== TB ? TB : (0, iB.j)(BB, null);
        return !GB && null !== cB && void 0 !== cB && cB.id && (qB = (0, YB.c)(cB.id, cB.name).playerSocialPreview), (0, RB.jsx)(KB.c, {
          playerSocialPreview: qB,
          isFriend: void 0 !== GB,
          hideFriendBadge: !0,
          status: gB,
          zIndex: IB,
          Iz: {
            on: vB(BB),
            onChange: IB => {
              kB(BB, IB)
            }
          }
        }, oB)
      }, aB = [...OB.added, ...OB.refused];
      return (0, RB.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, RB.jsx)(qB.d, {
          label: hB("worldSocial:whitelist"),
          meta: GB.length
        }), (0, RB.jsx)(VB.c, {
          label: hB("lobbyManage:add"),
          icon: "user-check",
          placeholder: hB("socialBar:enterPlayerName"),
          onSubmit: async BB => {
            const IB = await cB(BB);
            return IB.ok && wB((IB => [BB, ...IB])), IB
          }
        }), aB.length > 0 && (0, RB.jsx)("div", {
          className: "PlayerRows",
          children: aB.map(((BB, IB) => pB(BB, aB.length - IB)))
        }), (0, RB.jsx)(mB, {
          names: OB.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: hB("lobbyManage:allOnWhitelist", {
            count: OB.listed.length
          }),
          renderRow: pB
        }), (0, RB.jsx)(mB, {
          names: OB.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: hB("lobbyManage:allCount", {
            count: OB.suggested.length
          }),
          renderRow: pB
        })]
      })
    }

    function II(BB) {
      let {
        manage: IB,
        listing: ZB
      } = BB;
      const {
        t: TB
      } = (0, FB.G)(), oB = (BB, ZB) => ((0, JB.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: BB
      }), IB.send({
        type: "setListing",
        field: BB,
        value: ZB
      }, `listing:${BB}`)), GB = BB => {
        const ZB = IB.statusOf(`listing:${BB}`);
        return ZB && !ZB.ok && (0, RB.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, RB.jsx)(rB, {
            status: ZB
          })
        })
      };
      return (0, RB.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, RB.jsx)(qB.d, {
          label: TB("lobbyManage:inWorldsList")
        }), (0, RB.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, RB.jsx)("div", {
            className: "SliderText",
            children: TB("lobbyManage:description")
          }), (0, RB.jsx)(XB, {
            value: ZB.description,
            ariaLabel: TB("lobbyManage:description"),
            wide: !0,
            onSave: BB => oB("description", BB)
          })]
        }), GB("description"), (0, RB.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, RB.jsx)("div", {
            className: "SliderText",
            children: TB("lobbyManage:emojis")
          }), (0, RB.jsx)(XB, {
            value: ZB.emojis,
            ariaLabel: TB("lobbyManage:emojis"),
            onSave: BB => oB("emojis", BB)
          })]
        }), GB("emojis"), (0, RB.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, RB.jsx)("div", {
            className: "SliderText",
            children: TB("lobbyManage:colour")
          }), (0, RB.jsx)(ZI, {
            value: ZB.colour,
            ariaLabel: TB("lobbyManage:colour"),
            onSave: BB => {
              oB("colour", BB)
            }
          })]
        }), GB("colour")]
      })
    }

    function ZI(BB) {
      let {
        value: IB,
        ariaLabel: ZB,
        onSave: JB
      } = BB;
      const oB = (0, TB.useRef)(null),
        GB = (0, TB.useRef)({
          value: IB,
          onSave: JB
        });
      GB.current = {
        value: IB,
        onSave: JB
      };
      const vB = (0, TB.useRef)(null),
        kB = (0, TB.useRef)(!1),
        cB = BB => {
          kB.current && BB.value !== GB.current.value && BB.value !== vB.current && (vB.current = BB.value, GB.current.onSave(BB.value))
        };
      return (0, TB.useEffect)((() => {
        oB.current && document.activeElement !== oB.current && (oB.current.value = IB)
      }), [IB]), (0, TB.useEffect)((() => {
        const BB = oB.current,
          IB = () => {
            cB(BB)
          };
        return BB.addEventListener("change", IB), () => {
          BB.removeEventListener("change", IB), cB(BB)
        }
      }), []), (0, RB.jsx)("input", {
        ref: oB,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: IB,
        "aria-label": ZB,
        onInput: () => {
          kB.current = !0
        },
        onBlur: BB => {
          cB(BB.currentTarget)
        }
      })
    }

    function TI(BB) {
      let {
        manage: IB
      } = BB;
      const {
        lobbyName: ZB,
        shownLobbyName: TB
      } = (0, WB.j)("connectedGame");
      return IB.state.you.canSetVisibility && null !== ZB ? (0, RB.jsx)(oI, {
        manage: IB,
        lobbyName: ZB,
        worldCode: null !== TB && void 0 !== TB ? TB : ZB
      }, ZB) : (0, RB.jsx)(GI, {
        manage: IB,
        lobbyName: null !== ZB && void 0 !== ZB ? ZB : ""
      })
    }

    function JI(BB) {
      return BB.map((BB => BB.toLowerCase())).sort().join(",")
    }

    function oI(BB) {
      var IB;
      let {
        manage: ZB,
        lobbyName: oB,
        worldCode: GB
      } = BB;
      const {
        t: vB
      } = (0, FB.G)(), {
        settings: kB,
        loading: cB,
        change: nB,
        retry: hB,
        refresh: zB
      } = (0, tB.g)(oB), NB = (0, AB.j)(), {
        state: yB
      } = ZB, UB = (0, TB.useRef)(kB);
      UB.current = kB;
      const WB = JI(null !== (IB = yB.whitelist) && void 0 !== IB ? IB : []),
        CB = null !== yB.whitelist;
      (0, TB.useEffect)((() => {
        const BB = UB.current;
        null !== BB && (BB.visibility !== yB.visibility || CB && JI(BB.whitelist) !== WB) && zB()
      }), [yB.visibility, WB, CB, zB]);
      const QB = async (BB, IB) => {
        let ZB = null;
        return await nB(BB, IB, {
          quiet: !0,
          onAnswer: BB => {
            ZB = BB
          }
        }), ZB
      }, sB = (BB, IB) => {
        null !== IB && "error" in IB && ZB.showStatus(BB, {
          ok: !1,
          text: [vB(IB.error)]
        })
      }, wB = async BB => {
        if (null === kB || BB === kB.visibility) return;
        (0, JB.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: BB
        });
        const IB = "whitelist" === BB ? (0, EB.f)((0, EB.i)(NB.friends, oB, yB.here.map((BB => BB.name))), (0, DB.e)(oB), kB.whitelist) : [],
          ZB = await QB({
            setVisibility: BB
          }, (IB => ({
            ...IB,
            visibility: BB
          })));
        sB("mode", ZB), null === ZB || "error" in ZB || await (async BB => {
          for (const IB of (0, EB.n)(BB, lB.A))
            if (!await nB({
                whitelistAdd: IB
              }, (BB => (0, EB.s)(BB, IB, !0)))) return !1;
          return !0
        })(IB)
      }, OB = (0, TB.useMemo)((() => {
        var BB;
        if (null === kB) return [];
        const IB = null !== (BB = yB.whitelist) && void 0 !== BB ? BB : [];
        return [...IB.filter((BB => (0, EB.m)(kB.whitelist, BB))), ...kB.whitelist.filter((BB => !(0, EB.m)(IB, BB)))]
      }), [kB, yB.whitelist]), YB = ZB.statusOf("mode");
      return (0, RB.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, RB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, RB.jsx)(qB.d, {
            label: vB("worldSocial:whoCanJoin")
          }), null === kB && cB && (0, RB.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, RB.jsx)(gB.d, {})
          }), null === kB && !cB && (0, RB.jsx)(dB.k, {
            className: "SmallTextLight",
            onClick: hB,
            children: vB("worldSocial:loadFailed")
          }), null !== kB && (0, RB.jsx)(bB.b, {
            visibility: kB.visibility,
            onPick: BB => {
              wB(BB)
            }
          }), YB && (0, RB.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, RB.jsx)(rB, {
              status: YB
            })
          }), null !== kB && "private" !== kB.visibility && (0, RB.jsx)(xB.c, {
            worldCode: GB,
            message: null
          })]
        }), "whitelist" === (null === kB || void 0 === kB ? void 0 : kB.visibility) && (0, RB.jsx)(BI, {
          state: yB,
          lobbyName: oB,
          listed: OB,
          isListed: BB => (0, EB.m)(kB.whitelist, BB),
          dU: (BB, IB) => {
            (0, JB.reportAnalyticsClick)(IB ? {
              id: "lobby_manage.whitelist_add",
              value: "Iz"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), QB(IB ? {
              whitelistAdd: [BB]
            } : {
              whitelistRemove: BB
            }, (ZB => (0, EB.s)(ZB, [BB], IB))).then((IB => {
              sB(`whitelist:${BB.toLowerCase()}`, IB)
            }))
          },
          cW: async BB => {
            (0, JB.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const IB = await QB({
              whitelistAdd: [BB]
            }, (IB => (0, EB.s)(IB, [BB], !0)));
            return null === IB ? {
              ok: !1,
              error: vB("worldSocial:changeFailed")
            } : "error" in IB ? {
              ok: !1,
              error: vB(IB.error)
            } : (0, EB.m)(IB.notFound, BB) ? {
              ok: !1,
              error: vB("lobbyManage:noPlayerCalled", {
                playerName: BB
              })
            } : {
              ok: !0
            }
          },
          statusOf: BB => ZB.statusOf(`whitelist:${BB.toLowerCase()}`)
        }), "public" === (null === kB || void 0 === kB ? void 0 : kB.visibility) && null !== yB.listing && (0, RB.jsx)(II, {
          manage: ZB,
          listing: yB.listing
        })]
      })
    }

    function GI(BB) {
      var IB;
      let {
        manage: ZB,
        lobbyName: TB
      } = BB;
      const {
        t: oB
      } = (0, FB.G)(), {
        state: GB
      } = ZB, vB = nB(), kB = null !== (IB = GB.whitelist) && void 0 !== IB ? IB : [];
      return (0, RB.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, RB.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, RB.jsx)(qB.d, {
            label: oB("worldSocial:whoCanJoin")
          }), (0, RB.jsx)("div", {
            className: "LobbyManageModeText",
            children: oB(`worldSocial:${GB.visibility}`)
          })]
        }), "whitelist" === GB.visibility && GB.you.canEditWhitelist && (0, RB.jsx)(BI, {
          state: GB,
          lobbyName: TB,
          listed: kB,
          isListed: BB => {
            var IB;
            return null !== (IB = vB.get(BB.toLowerCase())) && void 0 !== IB ? IB : (0, EB.m)(kB, BB)
          },
          dU: (BB, IB) => {
            (0, JB.reportAnalyticsClick)(IB ? {
              id: "lobby_manage.whitelist_add",
              value: "Iz"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const TB = BB.toLowerCase();
            vB.hold(TB, IB, ZB.send(IB ? {
              type: "whitelistAdd",
              names: [BB]
            } : {
              type: "whitelistRemove",
              name: BB
            }, `whitelist:${TB}`))
          },
          cW: async BB => {
            (0, JB.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const IB = await ZB.send({
              type: "whitelistAdd",
              names: [BB]
            }, "whitelist-field");
            return IB.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, RB.jsx)(jB.e, {
                text: IB.message
              })
            }
          },
          statusOf: BB => ZB.statusOf(`whitelist:${BB.toLowerCase()}`)
        }), "public" === GB.visibility && null !== GB.listing && (0, RB.jsx)(II, {
          manage: ZB,
          listing: GB.listing
        })]
      })
    }
    var vI = ZB(5143),
      kI = ZB(1421);
    const cI = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const nI = (0, TB.memo)((function(BB) {
      var IB;
      let {
        rule: ZB,
        value: TB,
        status: JB,
        pending: oB,
        hiddenNames: GB,
        Qs: vB,
        onAction: kB
      } = BB;
      const {
        t: cB
      } = (0, FB.G)(), nB = BB => vB(ZB, BB), hB = (BB, IB) => {
        kB(ZB, BB, IB)
      }, zB = HB(cB, ZB.label, GB), NB = ZB.info ? HB(cB, ZB.info, GB) : void 0, gB = ZB.placeholder ? HB(cB, ZB.placeholder, GB) : void 0, qB = (null !== (IB = ZB.options) && void 0 !== IB ? IB : []).map((BB => ({
        value: BB.value,
        label: HB(cB, BB.label, GB)
      }))), yB = Math.max(0, ...qB.map((BB => function(BB) {
        let IB = 0;
        for (const ZB of BB) IB += cI.test(ZB) ? 2 : 1;
        return IB
      }(BB.label)))), UB = JB && (0, RB.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, RB.jsx)(rB, {
          status: JB
        })
      }), WB = (0, RB.jsxs)("div", {
        className: "SliderText",
        children: [zB, void 0 !== NB && (0, RB.jsx)(kI.d, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: NB
        })]
      });
      return "toggle" === ZB.kind ? (0, RB.jsxs)(RB.Fragment, {
        children: [(0, RB.jsx)(vI.e, {
          label: zB,
          checked: !0 === TB,
          circleInfoText: NB,
          disabled: oB,
          onClick: nB
        }), UB]
      }) : "choice" === ZB.kind && qB.length <= 3 ? (0, RB.jsxs)(RB.Fragment, {
        children: [(0, RB.jsx)(vI.h, {
          label: zB,
          options: qB,
          value: String(TB),
          circleInfoText: NB,
          onChange: nB
        }), UB]
      }) : (0, RB.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [WB, "choice" === ZB.kind && (0, RB.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": yB
          },
          children: (0, RB.jsx)(pB.c, {
            options: qB,
            value: String(TB),
            disabled: oB,
            onChange: BB => {
              nB(BB.value)
            }
          })
        }), ("number" === ZB.kind || "text" === ZB.kind) && (0, RB.jsx)(XB, {
          value: null === TB ? "" : String(TB),
          placeholder: gB,
          ariaLabel: zB,
          onSave: BB => {
            const IB = BB.trim(),
              TB = Number(IB);
            return nB("number" === ZB.kind && "" !== IB && Number.isFinite(TB) ? TB : IB)
          }
        }), "action" === ZB.kind && (0, RB.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [qB.length > 3 && (0, RB.jsx)(pB.c, {
            options: qB,
            value: {
              value: "",
              label: null !== gB && void 0 !== gB ? gB : zB
            },
            disabled: oB,
            onChange: BB => {
              hB(BB.value)
            }
          }), qB.length > 0 && qB.length <= 3 && qB.map((BB => (0, RB.jsx)(dB.k, {
            className: "SmallTextLight",
            disabled: oB,
            onClick: () => {
              hB(BB.value)
            },
            children: BB.label
          }, BB.value))), 0 === qB.length && (0, RB.jsx)(dB.k, {
            className: "SmallTextLight",
            disabled: oB,
            onClick: () => {
              hB()
            },
            children: null !== gB && void 0 !== gB ? gB : zB
          })]
        }), "names" === ZB.kind && (0, RB.jsx)(hI, {
          names: Array.isArray(TB) ? TB : [],
          pending: oB,
          onAction: hB
        }), UB]
      })
    }));

    function hI(BB) {
      let {
        names: IB,
        pending: ZB,
        onAction: JB
      } = BB;
      const {
        t: oB
      } = (0, FB.G)(), GB = (0, TB.useRef)(null), [vB, kB] = (0, TB.useState)(""), cB = () => {
        const BB = vB.trim();
        "" !== BB && (JB(BB, "add"), GB.current && (GB.current.value = ""), kB(""))
      };
      return (0, RB.jsxs)("div", {
        className: "LobbyManageNames",
        children: [IB.map((BB => (0, RB.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, RB.jsx)("span", {
            className: "LobbyManageNameText",
            children: BB
          }), (0, RB.jsx)(dB.k, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: oB("lobbyManage:removeName", {
              name: BB
            }),
            disabled: ZB,
            onClick: () => {
              JB(BB, "remove")
            },
            children: (0, RB.jsx)(NB.d, {
              name: "xmark"
            })
          })]
        }, BB))), (0, RB.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, RB.jsx)(PB.c, {
            domRef: GB,
            placeholderText: oB("lobbyManage:namePlaceholder"),
            ariaLabel: oB("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: BB => {
              kB(BB)
            },
            onEnter: cB
          }), (0, RB.jsx)(dB.k, {
            className: "SmallTextLight",
            disabled: ZB || "" === vB.trim(),
            onClick: cB,
            children: oB("lobbyManage:addHere")
          })]
        })]
      })
    }
    const zI = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function FI(BB, IB) {
      return zI.map((ZB => {
        let {
          group: TB,
          title: JB
        } = ZB;
        const oB = BB.filter((BB => BB.group === TB && void 0 === BB.parent)).map((ZB => {
          const TB = !0 === IB(ZB) ? BB.filter((BB => BB.parent === ZB.key)) : [];
          return {
            rule: ZB,
            children: TB
          }
        }));
        return {
          group: TB,
          title: JB,
          items: oB
        }
      }))
    }

    function NI(BB) {
      return BB.flatMap((BB => {
        let {
          items: IB
        } = BB;
        return IB.flatMap((BB => {
          let {
            rule: IB,
            children: ZB
          } = BB;
          return [IB, ...ZB]
        }))
      }))
    }

    function gI(BB) {
      let {
        manage: IB,
        rowsShown: ZB
      } = BB;
      const {
        t: oB
      } = (0, FB.G)(), GB = (0, WB.j)("hiddenPlayerNames"), {
        rules: vB
      } = IB.state, kB = nB(), cB = BB => {
        const IB = kB.get(BB.key);
        return void 0 === IB ? BB.value : IB
      }, hB = FI(vB, cB), [zB] = (0, TB.useState)((() => NI(hB).map((BB => BB.key)))), NB = ZB === 1 / 0 ? null : new Set(zB.slice(0, ZB)), gB = BB => null === NB || NB.has(BB.key), {
        hold: yB
      } = kB, UB = (0, TB.useCallback)(((BB, ZB) => {
        (0, JB.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: BB.key
        });
        const TB = IB.send({
          type: "setRule",
          key: BB.key,
          value: ZB
        }, `rule:${BB.key}`);
        return yB(BB.key, ZB, TB), TB
      }), [IB, yB]), dB = (0, TB.useCallback)(((BB, ZB, TB) => {
        (0, JB.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: BB.key
        }), IB.send({
          type: "ruleAction",
          key: BB.key,
          ...void 0 === ZB ? {} : {
            arg: ZB
          },
          ...void 0 === TB ? {} : {
            op: TB
          }
        }, `rule:${BB.key}`, void 0 === TB ? oB("lobbyManage:setJustNow") : void 0)
      }), [IB, oB]), CB = BB => {
        const ZB = `rule:${BB.key}`;
        return (0, RB.jsx)(nI, {
          rule: BB,
          value: cB(BB),
          status: IB.statusOf(ZB),
          pending: IB.isPending(ZB),
          hiddenNames: GB,
          Qs: UB,
          onAction: dB
        }, BB.key)
      };
      return (0, RB.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: hB.map((BB => {
          let {
            group: IB,
            title: ZB,
            items: JB
          } = BB;
          const GB = JB.filter((BB => {
            let {
              rule: IB
            } = BB;
            return gB(IB)
          }));
          return 0 === GB.length ? null : (0, RB.jsxs)(TB.Fragment, {
            children: [(0, RB.jsx)(qB.d, {
              label: oB(ZB)
            }), GB.map((BB => {
              let {
                rule: IB,
                children: ZB
              } = BB;
              return 0 === ZB.length ? CB(IB) : (0, RB.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [CB(IB), ZB.filter(gB).map(CB)]
              }, IB.key)
            }))]
          }, IB)
        }))
      })
    }
    const qI = {
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
      yI = 5,
      UI = (0, TB.memo)((function(BB) {
        let {
          page: IB,
          manage: ZB,
          leaderboard: JB,
          focusRequest: oB,
          onFocused: GB,
          ruleRowsShown: vB
        } = BB;
        return "leaderboard" === IB ? (0, RB.jsx)(TB.Suspense, {
          fallback: (0, RB.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, RB.jsx)(gB.d, {})
          }),
          children: JB
        }) : "joining" === IB ? (0, RB.jsx)(TI, {
          manage: ZB
        }) : "rules" === IB ? (0, RB.jsx)(gI, {
          manage: ZB,
          rowsShown: vB
        }) : (0, RB.jsx)(fB, {
          manage: ZB,
          focusRequest: oB,
          onFocused: GB
        })
      }));

    function WI(BB) {
      let {
        page: IB
      } = BB;
      const {
        t: ZB
      } = (0, FB.G)(), TB = qI[IB];
      return (0, RB.jsxs)(RB.Fragment, {
        children: [(0, RB.jsx)(NB.d, {
          name: TB.icon
        }), " ", (0, RB.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: ZB(TB.title)
        })]
      })
    }

    function dI(BB) {
      var IB;
      const {
        t: ZB
      } = (0, FB.G)(), {
        pages: oB,
        landing: GB
      } = BB, kB = (0, TB.useRef)(null), cB = (0, TB.useRef)(null), nB = (0, TB.useRef)(null), hB = (0, TB.useRef)(new Map), [NB, gB] = (0, TB.useState)(null), WB = (0, TB.useRef)(NB), dB = (0, TB.useRef)(0), [CB, QB] = (0, TB.useState)(oB[0]), sB = null !== NB && void 0 !== NB ? NB : oB.includes(CB) ? CB : oB[0], [wB] = (0, TB.useState)(null !== (IB = null === GB || void 0 === GB ? void 0 : GB.page) && void 0 !== IB ? IB : null), OB = null !== wB && oB.includes(wB) ? [wB, ...oB.filter((BB => BB !== wB))] : oB, [YB] = (0, TB.useState)((() => {
        const IB = NI(FI(BB.manage.state.rules, (BB => BB.value)));
        return Math.max(1, Math.ceil(IB.length / yI))
      })), iB = OB.flatMap((BB => "rules" === BB ? Array(YB).fill(BB) : [BB])), pB = function(BB, IB) {
        const [ZB, JB] = (0, TB.useState)(BB), oB = ZB >= IB;
        return oB && ZB !== 1 / 0 && JB(1 / 0), (0, TB.useLayoutEffect)((() => {
          if (oB) return;
          let BB = !0;
          return (0, UB.h)().then((() => {
            BB && JB((BB => BB + 1))
          })), () => {
            BB = !1
          }
        }), [ZB, oB]), oB ? 1 / 0 : ZB
      }(1, iB.length), aB = iB.slice(0, pB), HB = new Set(aB), MB = pB < iB.length, jB = MB ? aB.filter((BB => "rules" === BB)).length * yI : 1 / 0, PB = (0, TB.useRef)(BB.focusRequest);
      PB.current = BB.focusRequest;
      const rB = BB => {
          WB.current = BB, gB(BB)
        },
        mB = () => {
          var BB, IB;
          kB.current.style.scrollPaddingTop = `${null!==(BB=null===(IB=nB.current)||void 0===IB?void 0:IB.offsetHeight)&&void 0!==BB?BB:0}px`
        },
        XB = BB => {
          const IB = kB.current,
            ZB = hB.current.get(BB);
          if (void 0 === ZB) return;
          const TB = document.activeElement,
            JB = PB.current,
            oB = null === JB ? null : ZB.querySelector(`[data-lobby-manage-row="${CSS.escape(JB.name)}"]`);
          mB(), TB instanceof HTMLElement && null !== oB && void 0 !== oB && oB.contains(TB) ? TB.scrollIntoView({
            block: "center"
          }) : null === ZB.previousElementSibling ? IB.scrollTop = 0 : ZB.scrollIntoView({
            block: "start"
          }), dB.current = IB.scrollTop
        },
        LB = BB => {
          (0, JB.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: BB
          }), rB(BB), XB(BB)
        },
        eB = () => {
          var BB, IB;
          const ZB = kB.current,
            TB = ZB.getBoundingClientRect().top + (null !== (BB = null === (IB = nB.current) || void 0 === IB ? void 0 : IB.offsetHeight) && void 0 !== BB ? BB : 0),
            JB = oB.map((BB => {
              var IB, ZB;
              return (null !== (IB = null === (ZB = hB.current.get(BB)) || void 0 === ZB ? void 0 : ZB.getBoundingClientRect().top) && void 0 !== IB ? IB : 1 / 0) - TB
            })),
            GB = !MB && ZB.scrollTop + ZB.clientHeight >= ZB.scrollHeight - 1;
          QB(oB[(0, vB.i)(JB, GB)])
        },
        uB = () => {
          null !== WB.current && (rB(null), eB())
        };
      (0, TB.useLayoutEffect)((() => {
        null !== GB && oB.includes(GB.page) && LB(GB.page)
      }), [null === GB || void 0 === GB ? void 0 : GB.seq]), (0, TB.useLayoutEffect)((() => {
        null === WB.current || oB.includes(WB.current) || uB()
      }));
      const {
        onFocused: fB
      } = BB, lB = (0, TB.useCallback)((BB => {
        null !== WB.current && XB(WB.current), fB(BB)
      }), [fB]);
      (0, TB.useLayoutEffect)((() => {
        const BB = WB.current;
        null !== BB && (!MB || oB.indexOf(iB[pB - 1]) < oB.indexOf(BB)) && XB(BB)
      }), [pB]), (0, TB.useEffect)((() => {
        const BB = new ResizeObserver((() => {
          null !== WB.current ? XB(WB.current) : mB()
        }));
        return BB.observe(kB.current), BB.observe(cB.current), () => {
          BB.disconnect()
        }
      }), []), (0, TB.useLayoutEffect)((() => {
        const BB = nB.current,
          IB = null === BB || void 0 === BB ? void 0 : BB.querySelector(".SegmentedToggleOptionSelected");
        IB && (BB.scrollLeft = Math.min(IB.offsetLeft, Math.max(BB.scrollLeft, IB.offsetLeft + IB.offsetWidth - BB.clientWidth)))
      }), [sB]);
      return (0, RB.jsxs)("div", {
        ref: kB,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === WB.current ? eB() : Math.abs(kB.current.scrollTop - dB.current) > 1 && uB()
        },
        onClick: BB => {
          var IB;
          null !== (IB = nB.current) && void 0 !== IB && IB.contains(BB.target) || uB()
        },
        onFocus: BB => {
          var IB;
          const ZB = null === WB.current ? null : hB.current.get(WB.current);
          !ZB || ZB.contains(BB.target) || null !== (IB = nB.current) && void 0 !== IB && IB.contains(BB.target) || uB()
        },
        children: [oB.length > 1 && (0, RB.jsx)("div", {
          ref: nB,
          className: "LobbyManageChips",
          children: (0, RB.jsx)(yB.d, {
            options: oB.map((BB => ({
              value: BB,
              label: (0, RB.jsx)(WI, {
                page: BB
              }),
              ariaLabel: ZB(qI[BB].title)
            }))),
            value: sB,
            padTabs: "2",
            ariaLabel: ZB("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: LB
          })
        }), (0, RB.jsx)("div", {
          ref: cB,
          className: zB()("LobbyManageInner", {
            Staging: MB
          }),
          children: oB.filter((BB => HB.has(BB))).map((IB => {
            const ZB = IB === NB;
            return (0, RB.jsxs)("section", {
              ref: BB => {
                BB ? hB.current.set(IB, BB) : hB.current.delete(IB)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": ZB || void 0,
              children: [oB.length > 1 && (0, RB.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": ZB || void 0,
                "data-pad-unavailable": ZB || void 0,
                children: (0, RB.jsx)(qB.d, {
                  label: (0, RB.jsx)(WI, {
                    page: IB
                  })
                })
              }), (0, RB.jsx)(UI, {
                page: IB,
                manage: BB.manage,
                leaderboard: BB.leaderboard,
                focusRequest: BB.focusRequest,
                onFocused: lB,
                ruleRowsShown: "rules" === IB ? jB : 1 / 0
              })]
            }, IB)
          }))
        })]
      })
    }

    function CI(BB) {
      return void 0 === (null === BB || void 0 === BB ? void 0 : BB.page) ? null : {
        page: BB.page,
        seq: BB.seq
      }
    }

    function QI(BB) {
      let {
        leaderboard: IB
      } = BB;
      const ZB = function() {
          const BB = (0, kB.d)("lobbyManage"),
            [IB, ZB] = (0, TB.useReducer)((BB => BB + 1), 0),
            [JB] = (0, TB.useState)((() => new cB.c(ZB)));
          return (0, TB.useEffect)((() => {
            const BB = JB.nextDeadline();
            if (null === BB) return;
            const IB = setTimeout((() => {
              JB.expire(Date.now()), ZB()
            }), Math.max(0, BB - Date.now()));
            return () => {
              clearTimeout(IB)
            }
          })), (0, TB.useMemo)((() => null === BB ? null : {
            state: BB,
            send: (BB, IB, TB) => {
              const oB = JB.send(BB, IB, null !== TB && void 0 !== TB ? TB : null);
              return ZB(), oB
            },
            statusOf: BB => JB.statusOf(BB, Date.now()),
            showStatus: (BB, IB) => {
              JB.show(BB, IB)
            },
            isPending: BB => JB.isPending(BB)
          }), [BB, IB, JB])
        }(),
        nB = (0, vB.j)((0, oB.c)()),
        hB = (0, GB.l)(),
        [zB, FB] = (0, TB.useState)((() => CI(hB))),
        [NB, gB] = (0, TB.useState)(null);
      return (0, TB.useEffect)((() => {
        null === hB && (0, JB.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, TB.useEffect)((() => {
        null !== hB && (FB((BB => (null === BB || void 0 === BB ? void 0 : BB.seq) === hB.seq ? BB : CI(hB))), void 0 !== hB.focusName && "players" === hB.page ? gB({
          name: hB.focusName,
          seq: hB.seq
        }) : (0, GB.h)(hB.seq))
      }), [null === hB || void 0 === hB ? void 0 : hB.seq]), null === ZB ? null : (0, RB.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, RB.jsx)(dI, {
          pages: (0, vB.f)(ZB.state, nB),
          manage: ZB,
          leaderboard: IB,
          focusRequest: NB,
          onFocused: GB.h,
          landing: zB
        })
      })
    }
  },
  36587: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      f: () => kB
    });
    var TB = ZB(1542),
      JB = ZB(2029),
      oB = ZB(1995);
    const GB = 1e4;
    let vB = 0;

    function kB(BB) {
      const IB = ++vB;
      return new Promise((ZB => {
        const vB = IB => {
            kB(), clearTimeout(cB), !1 === (null === IB || void 0 === IB ? void 0 : IB.ok) && (0, TB.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: BB.type
            }), ZB(IB)
          },
          kB = JB.c.subscribe("lobbyManage", (BB => {
            const ZB = function(BB, IB) {
              var ZB;
              return null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.results.find((BB => BB.requestId === IB))) && void 0 !== ZB ? ZB : null
            }(BB, IB);
            null !== ZB && vB(ZB)
          })),
          cB = setTimeout((() => {
            vB(null)
          }), GB);
        oB.gameBridge.send("lobbyManage", {
          ...BB,
          requestId: IB
        })
      }))
    }
    const cB = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class nB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kB;
        this.onChange = BB, this.sendAction = IB, this.pending = new Map, this.statuses = new Map
      }
      send(BB, IB, ZB) {
        var TB;
        return this.statuses.delete(IB), this.pending.set(IB, (null !== (TB = this.pending.get(IB)) && void 0 !== TB ? TB : 0) + 1), this.sendAction(BB).then((BB => {
          var TB;
          const JB = null !== BB && void 0 !== BB ? BB : {
              requestId: -1,
              ok: !1,
              message: cB
            },
            oB = (null !== (TB = this.pending.get(IB)) && void 0 !== TB ? TB : 1) - 1;
          oB > 0 ? this.pending.set(IB, oB) : this.pending.delete(IB);
          const GB = !JB.ok || JB.message.length > 0 ? JB.message : null === ZB ? null : [ZB];
          return null !== GB && this.statuses.set(IB, {
            ok: JB.ok,
            text: GB,
            until: Date.now() + 4e3
          }), this.onChange(), JB
        }))
      }
      show(BB, IB) {
        this.statuses.set(BB, {
          ...IB,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(BB) {
        for (const [IB, ZB] of this.statuses) ZB.until <= BB && this.statuses.delete(IB)
      }
      nextDeadline() {
        let BB = null;
        for (const ZB of this.statuses.values()) {
          var IB;
          BB = Math.min(null !== (IB = BB) && void 0 !== IB ? IB : 1 / 0, ZB.until)
        }
        return BB
      }
      statusOf(BB, IB) {
        const ZB = this.statuses.get(BB);
        return !ZB || ZB.until <= IB ? null : {
          ok: ZB.ok,
          text: ZB.text
        }
      }
      isPending(BB) {
        return this.pending.has(BB)
      }
    }
  },
  36580: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB,
      d: () => kB
    });
    var TB = ZB(650),
      JB = ZB(1995),
      oB = ZB(1717),
      GB = ZB(105),
      vB = ZB(1325);

    function kB(BB, IB, ZB) {
      return GB.featureFlags.useSocialFeatures && BB && null === (0, vB.b)(IB, ZB)
    }

    function cB(BB, IB) {
      var ZB, GB;
      const vB = oB.c.getSocialState().friends.find((BB => BB.name.toLowerCase() === IB.toLowerCase())),
        kB = JB.gameBridge.latest("players").byId[BB],
        cB = void 0 !== kB && kB.name === IB,
        nB = cB && null !== (ZB = kB.cosmetics) && void 0 !== ZB ? ZB : void 0,
        hB = vB && nB ? {
          ...vB,
          cosmetics: nB
        } : vB;
      return {
        playerSocialPreview: null !== hB && void 0 !== hB ? hB : {
          isError: !1,
          name: IB,
          ranks: cB ? [...kB.ranks] : [],
          cosmetics: null !== nB && void 0 !== nB ? nB : {},
          nameColour: null !== (GB = null === nB || void 0 === nB ? void 0 : nB.nameColour) && void 0 !== GB ? GB : TB.e,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== vB
      }
    }
  },
  36763: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => hB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(1746),
      vB = ZB(1516),
      kB = ZB(1397),
      cB = ZB(1102),
      nB = ZB(1153);

    function hB(BB) {
      let {
        label: IB,
        icon: ZB,
        placeholder: JB,
        onSubmit: hB
      } = BB;
      const zB = (0, TB.useRef)(null),
        [FB, NB] = (0, TB.useState)(""),
        [gB, qB] = (0, TB.useState)("Enter"),
        [yB, UB] = (0, TB.useState)(null);
      (0, TB.useEffect)((() => {
        if ("Success" !== gB && "Error" !== gB) return;
        const BB = setTimeout((() => {
          "Success" === gB && zB.current && (zB.current.value = "", NB("")), qB("Enter")
        }), "Success" === gB ? 1e3 : 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [gB]);
      const WB = () => {
        const BB = FB.trim();
        "" !== BB && "Enter" === gB && (qB("Loading"), hB(BB).then((BB => {
          zB.current && ("error" in BB ? null === BB.error ? qB("Enter") : (UB(BB.error), qB("Error")) : qB("Success"))
        })))
      };
      return (0, nB.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: BB => {
          BB.target === zB.current && "Escape" !== BB.key && BB.stopPropagation()
        },
        children: [(0, nB.jsxs)("div", {
          className: oB()("AddFriendBodyOverlay", `AddFriendBodyOverlay${gB}`),
          children: ["Loading" === gB && (0, nB.jsx)(kB.d, {}), "Success" === gB && (0, nB.jsx)(cB.d, {
            name: "check"
          }), "Error" === gB && yB]
        }), (0, nB.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, nB.jsx)(GB.c, {
            className: "PlayerSearchInput",
            domRef: zB,
            maxLength: 32,
            placeholderText: JB,
            ariaLabel: JB,
            stopPropagation: !1,
            onValueChange: BB => {
              NB(BB)
            },
            onEnter: WB
          }), (0, nB.jsxs)(vB.g, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== gB || "" === FB.trim(),
            onClick: WB,
            children: [(0, nB.jsx)(cB.d, {
              name: ZB
            }), " ", IB]
          })]
        })]
      })
    }
  },
  36745: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => hB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(1248),
      vB = ZB(1102),
      kB = ZB(1153);
    const cB = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      nB = ["unlisted", "public", "whitelist", "private"];

    function hB(BB) {
      let {
        visibility: IB,
        onPick: ZB
      } = BB;
      const {
        t: JB
      } = (0, GB.G)(), hB = (0, TB.useRef)([]);
      return (0, kB.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": JB("worldSocial:whoCanJoin"),
        children: nB.map(((BB, TB) => {
          const GB = BB === IB;
          return (0, kB.jsxs)("button", {
            ref: BB => {
              hB.current[TB] = BB
            },
            type: "button",
            className: oB()("WorldSocialTile", {
              WorldSocialTileSelected: GB
            }),
            "aria-pressed": GB,
            tabIndex: GB ? 0 : -1,
            onKeyDown: BB => {
              ((BB, IB) => {
                const ZB = "ArrowRight" === BB.key || "ArrowDown" === BB.key ? 1 : "ArrowLeft" === BB.key || "ArrowUp" === BB.key ? -1 : 0;
                var TB;
                0 !== ZB && (BB.preventDefault(), null === (TB = hB.current[(IB + ZB + nB.length) % nB.length]) || void 0 === TB || TB.focus())
              })(BB, TB)
            },
            onClick: () => {
              ZB(BB)
            },
            children: [(0, kB.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, kB.jsx)(vB.d, {
                name: cB[BB]
              })
            }), (0, kB.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, kB.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: JB(`worldSocial:${BB}`)
              }), (0, kB.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: JB(`worldSocial:${BB}Description`)
              })]
            })]
          }, BB)
        }))
      })
    }
  },
  36754: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB
    });
    var TB = ZB(1248),
      JB = ZB(2792),
      oB = ZB(4545),
      GB = ZB(1153);

    function vB(BB) {
      let {
        Iz: IB,
        children: ZB,
        ...vB
      } = BB;
      const {
        t: kB
      } = (0, TB.G)();
      return (0, GB.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          IB.onChange(!IB.on)
        },
        children: (0, GB.jsx)(JB.e, {
          ...vB,
          opensProfileCard: !1,
          children: (0, GB.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: BB => {
              BB.stopPropagation()
            },
            children: [ZB, (0, GB.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, GB.jsx)(oB.d, {
                checked: IB.on,
                disabled: !1,
                ariaLabel: kB("worldSocial:letJoin", {
                  playerName: vB.playerSocialPreview.name
                }),
                onChange: BB => {
                  IB.onChange(BB.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36737: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => NB
    });
    var TB = ZB(63),
      JB = ZB(1248),
      oB = ZB(1919),
      GB = ZB(105),
      vB = ZB(20),
      kB = ZB(1542),
      cB = ZB(2816),
      nB = ZB(34073),
      hB = ZB(1516),
      zB = ZB(1102),
      FB = ZB(1153);

    function NB(BB) {
      let {
        worldCode: IB,
        message: ZB
      } = BB;
      const {
        t: NB
      } = (0, JB.G)(), {
        isTouchScreen: gB
      } = (0, vB.o)(["isTouchScreen"]), qB = GB.featureFlags.canUseInviteLinks, yB = (0, nB.h)(qB && null === ZB), [UB, WB] = (0, cB.i)(), dB = (0, TB.useRef)(null);
      if (null !== ZB) return (0, FB.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, FB.jsx)(zB.d, {
          name: "lock"
        }), (0, FB.jsx)("span", {
          children: ZB
        })]
      });
      const CB = qB ? yB : IB,
        QB = gB && qB && (0, cB.b)();
      return (0, FB.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!qB && (0, FB.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: NB("worldSocial:worldCode")
        }), (0, FB.jsx)("input", {
          ref: dB,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== CB && void 0 !== CB ? CB : "",
          "aria-label": NB(qB ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: BB => {
            BB.currentTarget.select()
          }
        }), (0, FB.jsxs)(hB.g, {
          className: "WorldSocialCopy",
          disabled: null === CB,
          onClick: () => {
            null !== CB && (0, cB.e)(CB, {
              useShareSheet: QB,
              onOutcome: BB => {
                if ((0, kB.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== BB || qB ? BB : "code"
                  }), "copied" === BB) WB();
                else if ("failed" === BB) {
                  var IB;
                  null === (IB = dB.current) || void 0 === IB || IB.focus(), oB.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, FB.jsx)(zB.d, {
            name: UB ? "check" : QB ? "up-from-bracket" : "copy"
          }), " ", NB(UB ? "general:copied" : QB ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36747: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => FB,
      f: () => zB,
      j: () => hB
    });
    var TB = ZB(650),
      JB = ZB(1248),
      oB = ZB(1717),
      GB = ZB(2792),
      vB = ZB(2739),
      kB = ZB(1516),
      cB = ZB(36754),
      nB = ZB(1153);

    function hB(BB, IB) {
      var ZB;
      return {
        isError: !1,
        name: BB,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== IB && void 0 !== IB ? IB : {},
        nameColour: null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.nameColour) && void 0 !== ZB ? ZB : TB.e,
        location: {
          status: "offline"
        }
      }
    }

    function zB(BB) {
      let {
        player: IB,
        isFriend: ZB = !1,
        status: TB,
        showLocation: kB = void 0 === TB,
        Iz: hB,
        onSendFriendRequest: zB,
        actions: FB,
        zIndex: NB
      } = BB;
      const {
        t: gB
      } = (0, JB.G)();
      let qB = TB;
      null !== hB && void 0 !== hB && hB.on && (qB = (0, nB.jsxs)(nB.Fragment, {
        children: [null !== TB && void 0 !== TB ? TB : (0, nB.jsx)(vB.c, {
          socialPreview: IB
        }), (0, nB.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", gB("worldSocial:canJoin")]
        })]
      }));
      const yB = {
        playerSocialPreview: IB,
        isFriend: ZB,
        hideFriendBadge: !0,
        onFriendRemoved: ZB ? BB => {
          oB.c.removeFriendFromState(BB)
        } : void 0,
        status: qB,
        showLocation: kB,
        onSendFriendRequest: zB,
        zIndex: NB
      };
      return hB ? (0, nB.jsx)(cB.c, {
        ...yB,
        Iz: hB,
        children: FB
      }) : (0, nB.jsx)(GB.e, {
        ...yB,
        opensProfileCard: !1,
        children: FB || void 0
      })
    }

    function FB(BB) {
      let {
        row: IB,
        Iz: ZB,
        canInvite: TB,
        invited: oB,
        onInvite: GB,
        zIndex: vB
      } = BB;
      const {
        t: cB
      } = (0, JB.G)(), hB = "online" === IB.place ? kB.g : kB.k;
      return (0, nB.jsx)(zB, {
        player: IB.friend,
        isFriend: !0,
        status: "here" === IB.place ? cB("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Iz: ZB,
        zIndex: vB,
        actions: TB && (0, nB.jsx)(hB, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: oB,
          onClick: GB,
          ariaLabel: `${cB("worldSocial:invite")} ${IB.friend.name}`,
          children: cB(oB ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36726: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB,
      e: () => GB,
      g: () => cB
    });
    var TB = ZB(63),
      JB = ZB(4768),
      oB = ZB(1919);

    function GB(BB) {
      const IB = {
        lobbyName: BB,
        answer: null,
        response: JB.d.getSocialSettings(BB)
      };
      return IB.response.then((BB => {
        IB.answer = BB
      })), IB
    }
    const vB = new Map;

    function kB(BB) {
      vB.set(BB.lobbyName, BB)
    }

    function cB(BB) {
      const [IB] = (0, TB.useState)((() => function(BB) {
        var IB;
        const ZB = null !== (IB = vB.get(BB)) && void 0 !== IB ? IB : null;
        return null !== ZB && void 0 !== ZB && ZB.answer && "error" in ZB.answer ? null : ZB
      }(BB))), [ZB, GB] = (0, TB.useState)((() => null !== IB && void 0 !== IB && IB.answer && "settings" in IB.answer ? IB.answer.settings : null)), [kB, cB] = (0, TB.useState)(!0), [nB, hB] = (0, TB.useState)(null !== ZB), zB = (0, TB.useRef)(ZB);
      zB.current = ZB;
      const FB = (0, TB.useRef)(0),
        NB = (0, TB.useRef)(0),
        gB = (0, TB.useRef)(!1),
        qB = (0, TB.useRef)(!0),
        yB = (0, TB.useCallback)((async IB => {
          const ZB = ++FB.current,
            TB = await (null !== IB && void 0 !== IB ? IB : JB.d.getSocialSettings(BB));
          qB.current && ZB === FB.current && (hB(!0), cB(!1), "error" in TB || GB(TB.settings))
        }), [BB]),
        UB = (0, TB.useCallback)((() => {
          cB(!0), yB()
        }), [yB]),
        WB = (0, TB.useCallback)((() => {
          NB.current > 0 ? gB.current = !0 : yB()
        }), [yB]);
      (0, TB.useEffect)((() => (qB.current = !0, vB.delete(BB), cB(!0), yB(null === IB || void 0 === IB ? void 0 : IB.response), () => {
        qB.current = !1
      })), [yB, BB, IB]);
      const dB = BB => {
        FB.current++, cB(!1), zB.current = BB, GB(BB)
      };
      return {
        settings: ZB,
        loading: kB,
        answered: nB,
        retry: UB,
        refresh: WB,
        change: async function(IB, ZB) {
          let {
            quiet: TB = !1,
            onAnswer: GB
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const vB = zB.current;
          if (null === vB) return !1;
          dB(ZB(vB)), NB.current > 0 && (gB.current = !0), NB.current++;
          const kB = await JB.d.setSocialSettings(BB, IB);
          NB.current--;
          const cB = !("error" in kB);
          if (!qB.current) return cB;
          if (null === GB || void 0 === GB || GB(kB), TB);
          else if ("error" in kB) oB.f.showMessage({
            translationKey: kB.error
          });
          else
            for (const BB of kB.notFound) oB.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: BB
              }
            });
          if (NB.current > 0) return cB;
          const nB = gB.current;
          return gB.current = !1, !nB && "settings" in kB ? dB(kB.settings) : (nB || dB(vB), yB()), cB
        }
      }
    }
  },
  36768: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB,
      f: () => oB
    });
    var TB = ZB(168);
    const JB = new Map;

    function oB(BB, IB) {
      var ZB;
      const TB = null !== (ZB = JB.get(BB)) && void 0 !== ZB ? ZB : new Map;
      TB.set(IB, Date.now()), JB.set(BB, TB)
    }

    function GB(BB) {
      const IB = JB.get(BB);
      if (!IB) return [];
      const ZB = Date.now();
      for (const [JB, oB] of IB) ZB - oB >= TB.m && IB.delete(JB);
      return [...IB.keys()]
    }
  },
  36735: (BB, IB, ZB) => {
    function TB(BB, IB) {
      const ZB = IB.toLowerCase();
      for (const TB of BB)
        if (TB.toLowerCase() === ZB) return !0;
      return !1
    }

    function JB(BB, IB, ZB) {
      const JB = [],
        oB = [],
        GB = [];
      for (const vB of BB) !vB.isError && vB.name && ("inGame" === vB.location.status && vB.location.inLobbyName === IB || TB(ZB, vB.name) ? oB.push({
        friend: vB,
        place: "here"
      }) : "offline" === vB.location.status ? GB.push({
        friend: vB,
        place: "offline"
      }) : JB.push({
        friend: vB,
        place: "online"
      }));
      return [...JB, ...oB, ...GB]
    }

    function oB(BB, IB, ZB) {
      const JB = [],
        oB = BB.flatMap((BB => "here" === BB.place ? [BB.friend.name] : []));
      for (const GB of [...oB, ...IB]) TB(JB, GB) || TB(ZB, GB) || JB.push(GB);
      return JB
    }

    function GB(BB, IB) {
      return null === BB || void 0 === BB || !BB.canManage || TB(BB.whitelist, IB) ? "none" : "whitelist" === BB.visibility ? "required" : "quiet"
    }

    function vB(BB) {
      if (null === BB) return !0;
      const {
        visibility: IB
      } = BB;
      return "public" === IB || "unlisted" === IB || "whitelist" === IB && BB.canManage
    }

    function kB(BB, IB, ZB) {
      if (ZB) {
        const ZB = IB.filter((IB => !TB(BB.whitelist, IB)));
        return {
          ...BB,
          whitelist: [...BB.whitelist, ...ZB]
        }
      }
      return {
        ...BB,
        whitelist: BB.whitelist.filter((BB => !TB(IB, BB)))
      }
    }

    function cB(BB, IB) {
      const ZB = [];
      for (let TB = 0; TB < BB.length; TB += IB) ZB.push(BB.slice(TB, TB + IB));
      return ZB
    }
    ZB.d(IB, {
      b: () => vB,
      f: () => oB,
      i: () => JB,
      m: () => TB,
      n: () => cB,
      p: () => GB,
      s: () => kB
    })
  },
  37033: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB
    });
    var TB = ZB(63),
      JB = ZB(2526);

    function oB() {
      const BB = (0, JB.d)("lobbyLeaderboardInfo");
      return (0, TB.useMemo)((() => function(BB) {
        if (null === BB) return null;
        const IB = Object.entries(BB),
          ZB = IB.filter((BB => {
            let [, IB] = BB;
            return void 0 !== IB
          }));
        if (ZB.length === IB.length) return BB;
        const TB = Object.fromEntries(ZB),
          JB = Object.keys(BB).filter((BB => !Object.hasOwn(TB, BB)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${JB.join(", ")}`), TB
      }(BB)), [BB])
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);