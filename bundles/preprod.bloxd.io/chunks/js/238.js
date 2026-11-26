export const id = 238;
export const ids = [238];
export const modules = {
  42174: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      LobbyManageView: () => RX
    });
    var cU = zU(61),
      yU = zU(1521),
      QU = zU(37740),
      AU = zU(2627),
      FU = zU(2635),
      oU = zU(2616),
      DU = zU(37279);

    function EU() {
      const [UU, XU] = (0, cU.useState)(new Map);
      return {
        get: XU => UU.get(XU),
        hold: (0, cU.useCallback)(((UU, zU, cU) => {
          XU((XU => new Map(XU).set(UU, zU))), cU.then((() => {
            XU((XU => {
              const zU = new Map(XU);
              return zU.delete(UU), zU
            }))
          }))
        }), [])
      }
    }
    var YU = zU(1106),
      NU = zU.n(YU),
      IU = zU(1193),
      pU = zU(1390),
      aU = zU(1384),
      tU = zU(2884),
      gU = zU(5581),
      kU = zU(3837);
    var GU = zU(2047),
      BU = zU(1494);

    function ZU(UU, XU, zU) {
      const cU = UU.filter((UU => UU.name !== XU)),
        yU = cU.filter((UU => "none" === UU.role)).sort(((UU, XU) => XU.at - UU.at)),
        QU = cU.filter((UU => "none" !== UU.role)).sort(((UU, XU) => zU.indexOf(UU.role) - zU.indexOf(XU.role) || XU.at - UU.at));
      return [...UU.some((UU => UU.name === XU)) && null !== XU ? [XU] : [], ...[...yU, ...QU].map((UU => UU.name))]
    }

    function RU(UU, XU) {
      const zU = UU.banned.map((UU => UU.name)),
        cU = new Set(zU);
      return {
        here: ZU(UU.here, XU, UU.roles.map((UU => UU.role))),
        away: UU.away.filter((UU => !cU.has(UU.name))).map((UU => UU.name)),
        banned: zU
      }
    }

    function PU(UU, XU) {
      const zU = UU.here.find((UU => UU.name === XU));
      if (zU) return {
        section: "here",
        player: zU
      };
      const cU = UU.banned.find((UU => UU.name === XU));
      if (cU) return {
        section: "banned",
        bannedAt: cU.at
      };
      const yU = UU.away.find((UU => UU.name === XU));
      return yU ? {
        section: "away",
        player: yU
      } : {
        section: "gone"
      }
    }
    const WU = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var dU = zU(2880),
      LU = zU(3004),
      eU = zU(37453),
      CU = zU(3490),
      wU = zU(344);

    function qU(UU, XU, zU) {
      return XU.map((XU => {
        if ("string" === typeof XU) return XU;
        const cU = "str" in XU ? XU.str : XU;
        return "string" === typeof cU ? cU : "entityName" in cU ? cU.entityName : "translationKey" in cU ? UU(cU.translationKey, (0, IU.p)(cU.params, zU)) : ""
      })).join("")
    }

    function OU(UU, XU, zU, cU, yU) {
      return yU - cU < 6e4 ? UU(`${zU}JustNow`) : UU(zU, {
        time: (0, wU.eb)((0, IU.l)(XU, zU), cU, yU)
      })
    }
    var SU = zU(1978),
      rU = zU(1726),
      uU = zU(1305);

    function fU(UU) {
      let {
        status: XU
      } = UU;
      return (0, uU.jsx)("span", {
        className: NU()("LobbyManageStatus", {
          LobbyManageStatusRefused: !XU.ok
        }),
        children: (0, uU.jsx)(SU.d, {
          text: XU.text
        })
      })
    }

    function iU(UU) {
      let {
        names: XU,
        cap: zU,
        filterFrom: yU,
        moreLabel: QU,
        reveal: AU = null,
        renderRow: FU
      } = UU;
      const {
        t: oU
      } = (0, IU.I)(), [DU, EU] = (0, cU.useState)(!1), [YU, NU] = (0, cU.useState)(""), aU = DU || null !== AU && XU.indexOf(AU) >= zU, gU = (aU || XU.length <= zU) && null !== yU && XU.length > yU, kU = YU.trim().toLowerCase();
      let GU = aU ? XU : XU.slice(0, zU);
      return gU && "" !== kU && (GU = GU.filter((UU => UU.toLowerCase().includes(kU)))), (0, uU.jsxs)(uU.Fragment, {
        children: [gU && (0, uU.jsx)(rU.e, {
          className: "LobbyManageFilter",
          placeholderText: oU("lobbyManage:findName"),
          ariaLabel: oU("lobbyManage:findName"),
          onValueChange: UU => {
            NU(UU)
          }
        }), GU.length > 0 && (0, uU.jsx)("div", {
          className: "PlayerRows",
          children: GU.map(((UU, XU) => FU(UU, GU.length - XU)))
        }), !aU && XU.length > zU && (0, uU.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, uU.jsx)(tU.b, {
            label: (0, uU.jsxs)(uU.Fragment, {
              children: [QU, " ", (0, uU.jsx)(pU.d, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              EU(!0)
            }
          })
        })]
      })
    }

    function HU(UU) {
      let {
        value: XU,
        placeholder: zU,
        ariaLabel: yU,
        maxLength: QU,
        wide: AU = !1,
        onSave: FU
      } = UU;
      const oU = (0, cU.useRef)(null),
        [DU, EU] = (0, cU.useState)(0),
        YU = (0, cU.useRef)(!0),
        IU = (0, cU.useRef)(null),
        pU = (0, cU.useRef)({
          value: XU,
          onSave: FU
        });
      pU.current = {
        value: XU,
        onSave: FU
      };
      const aU = () => {
        const UU = IU.current;
        IU.current = null, null !== UU && UU !== pU.current.value && pU.current.onSave(UU).then((() => {
          YU.current && EU((UU => UU + 1))
        }))
      };
      return (0, cU.useEffect)((() => {
        null === IU.current && oU.current && (oU.current.value = XU)
      }), [XU, DU]), (0, cU.useEffect)((() => () => {
        YU.current = !1, aU()
      }), []), (0, uU.jsx)("div", {
        className: NU()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: AU
        }),
        onBlur: aU,
        children: (0, uU.jsx)(rU.e, {
          domRef: oU,
          defaultValue: XU,
          placeholderText: zU,
          ariaLabel: yU,
          maxLength: QU,
          onValueChange: UU => {
            IU.current = UU
          },
          onEnter: aU
        })
      })
    }
    const MU = ["mod", "coOwner"],
      vU = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function VU(UU) {
      var XU, zU, QU;
      let {
        name: AU,
        place: FU,
        openedIn: oU,
        isYou: DU,
        manage: YU,
        hiddenNames: NU,
        zIndex: aU
      } = UU;
      const {
        t: tU,
        selectedLanguage: gU
      } = (0, IU.I)(), [kU, GU] = (0, cU.useState)(null), {
        state: ZU
      } = YU, RU = `player:${AU}`, PU = function(UU, XU) {
        if ("banned" === UU.section) return {
          ...WU,
          unban: !0
        };
        if ("gone" === UU.section) return WU;
        const {
          player: zU
        } = UU, cU = "here" === UU.section, yU = cU || "none" !== zU.role ? zU.can.roles : [], QU = cU && XU && null !== zU.gamemode && zU.can.gamemode;
        return {
          gamemode: QU,
          roles: yU,
          fixedRole: 0 !== yU.length || "none" === zU.role && !QU ? null : zU.role,
          kick: cU && zU.can.kick,
          ban: zU.can.ban,
          unban: !1
        }
      }(FU, null !== ZU.gamemodes), wU = YU.statusOf(RU), SU = YU.isPending(RU), rU = EU(), iU = Date.now(), HU = UU => {
        var XU, zU;
        return null !== (XU = null === (zU = (UU => ZU.roles.find((XU => XU.role === UU)))(UU)) || void 0 === zU ? void 0 : zU.label) && void 0 !== XU ? XU : UU
      }, VU = UU => {
        const XU = vU[UU];
        return void 0 === XU ? void 0 : tU(XU)
      }, sU = "here" === FU.section || "away" === FU.section ? FU.player : null, nU = "here" === FU.section ? FU.player.id : null, {
        playerSocialPreview: mU,
        isFriend: lU
      } = null === nU ? {
        playerSocialPreview: (0, eU.i)(AU, null),
        isFriend: !1
      } : (0, LU.d)(nU, AU), xU = function() {
        YU.send(...arguments)
      }, JU = (UU, XU) => {
        rU.hold("role", UU, YU.send({
          type: "setRole",
          name: AU,
          role: UU
        }, RU, XU))
      };
      let jU = null;
      if ("ban" === (null === kU || void 0 === kU ? void 0 : kU.kind)) jU = tU("lobbyManageEntry:banConfirm", {
        playerName: AU
      });
      else if ("role" === (null === kU || void 0 === kU ? void 0 : kU.kind)) {
        var KU;
        jU = `${tU("lobbyManage:roleConfirm",{playerName:AU,role:HU(kU.role)})} ${null!==(KU=VU(kU.role))&&void 0!==KU?KU:""}`
      } else if (wU) jU = (0, uU.jsx)(fU, {
        status: wU
      });
      else if (DU) jU = tU("lobbyManage:you");
      else if ("here" === FU.section) "none" === FU.player.role && iU - FU.player.at < 6e5 && (jU = OU(tU, gU.code, "lobbyManage:joinedAgo", FU.player.at, iU));
      else if ("away" === FU.section) {
        if (FU.player.at > 0) {
          const UU = "kicked" === FU.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          jU = OU(tU, gU.code, UU, FU.player.at, iU)
        }
      } else "banned" === FU.section ? null !== FU.bannedAt && (jU = OU(tU, gU.code, "lobbyManage:bannedAgo", FU.bannedAt, iU)) : "banned" === oU && (jU = tU("lobbyManageEntry:unbanned"));
      return (0, uU.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": AU,
        children: (0, uU.jsxs)(dU.f, {
          playerSocialPreview: mU,
          isFriend: lU,
          status: jU,
          opensProfileCard: !DU && (0, LU.g)(!0, AU, NU),
          zIndex: aU,
          children: [null !== kU && (0, uU.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === kU.kind && (0, uU.jsxs)(BU.G, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                GU(null), xU({
                  type: "ban",
                  name: AU
                }, RU)
              },
              children: [(0, uU.jsx)(pU.d, {
                name: "gavel"
              }), (0, uU.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: tU("lobbyManageEntry:ban")
              })]
            }), "role" === kU.kind && (0, uU.jsx)(BU.f, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: kU.role
              },
              onClick: () => {
                GU(null), JU(kU.role)
              },
              children: tU("lobbyManage:makeRole", {
                role: HU(kU.role)
              })
            }), (0, uU.jsx)(BU.j, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                GU(null)
              },
              children: tU("general:cancel")
            })]
          }), null === kU && (0, uU.jsxs)(uU.Fragment, {
            children: [(0, uU.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [PU.gamemode && null !== sU && (0, uU.jsx)(CU.d, {
                options: (null !== (XU = ZU.gamemodes) && void 0 !== XU ? XU : []).map((UU => ({
                  value: UU.value,
                  label: qU(tU, UU.label, NU)
                }))),
                value: null !== (zU = rU.get("gamemode")) && void 0 !== zU ? zU : sU.gamemode,
                disabled: SU,
                onChange: UU => {
                  (0, yU.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: UU.value
                  }), rU.hold("gamemode", UU.value, YU.send({
                    type: "setGamemode",
                    name: AU,
                    gamemode: UU.value
                  }, RU))
                }
              }), PU.roles.length > 0 && null !== sU && (0, uU.jsx)(CU.d, {
                options: [...ZU.roles].reverse().filter((UU => PU.roles.includes(UU.role))).map((UU => ({
                  value: UU.role,
                  label: UU.label
                }))),
                value: null !== (QU = rU.get("role")) && void 0 !== QU ? QU : sU.role,
                disabled: SU,
                onChange: UU => {
                  var XU;
                  (XU = UU.value) !== (null === sU || void 0 === sU ? void 0 : sU.role) && (MU.includes(XU) ? GU({
                    kind: "role",
                    role: XU
                  }) : ((0, yU.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: XU
                  }), JU(XU, VU(XU))))
                }
              }), null !== PU.fixedRole && (0, uU.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: HU(PU.fixedRole)
              })]
            }), (0, uU.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [PU.kick && (0, uU.jsxs)(BU.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${tU("lobbyManageEntry:kick")} ${AU}`,
                disabled: SU,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  xU({
                    type: "kick",
                    name: AU
                  }, RU)
                },
                children: [(0, uU.jsx)(pU.d, {
                  name: "person-falling-burst"
                }), (0, uU.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: tU("lobbyManageEntry:kick")
                })]
              }), PU.ban && (0, uU.jsxs)(BU.K, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${tU("lobbyManageEntry:ban")} ${AU}`,
                disabled: SU,
                padDestructive: !0,
                onClick: () => {
                  GU({
                    kind: "ban"
                  })
                },
                children: [(0, uU.jsx)(pU.d, {
                  name: "gavel"
                }), (0, uU.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: tU("lobbyManageEntry:ban")
                })]
              }), PU.unban && (0, uU.jsxs)(BU.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${tU("lobbyManageEntry:unban")} ${AU}`,
                disabled: SU,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  xU({
                    type: "unban",
                    name: AU
                  }, RU)
                },
                children: [(0, uU.jsx)(pU.d, {
                  name: "user-unlock"
                }), (0, uU.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: tU("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function sU(UU) {
      var XU, zU, yU, QU;
      let {
        manage: AU,
        focusRequest: FU,
        onFocused: oU
      } = UU;
      const {
        t: DU
      } = (0, IU.I)(), EU = (0, GU.i)("players"), YU = (0, GU.i)("hiddenPlayerNames"), NU = (0, cU.useRef)(null), {
        state: aU
      } = AU, gU = null === EU.localId ? null : null !== (XU = null === (zU = EU.byId[EU.localId]) || void 0 === zU ? void 0 : zU.name) && void 0 !== XU ? XU : null, [kU] = (0, cU.useState)((() => RU(aU, gU))), ZU = function(UU, XU, zU) {
        const cU = new Set([...UU.here, ...UU.away, ...UU.banned]),
          yU = RU(XU, zU),
          QU = XU => {
            const zU = yU[XU].filter((UU => !cU.has(UU)));
            for (const UU of zU) cU.add(UU);
            return [...UU[XU], ...zU]
          };
        return {
          here: QU("here"),
          away: QU("away"),
          banned: QU("banned")
        }
      }(kU, aU, gU), [WU, dU] = (0, cU.useState)(!1), LU = function(UU, XU) {
        return UU.here.filter((UU => UU.name !== XU && "none" === UU.role && UU.can.kick)).length
      }(aU, gU), eU = AU.statusOf("kickAll");
      (0, cU.useEffect)((() => {
        var UU, XU;
        if (null === FU) return;
        const zU = null === (UU = NU.current) || void 0 === UU ? void 0 : UU.querySelector(`[data-lobby-manage-row="${CSS.escape(FU.name)}"]`);
        null === zU || void 0 === zU || zU.scrollIntoView({
          block: "center"
        }), null === zU || void 0 === zU || null === (XU = zU.querySelector(".ProfilePreview")) || void 0 === XU || XU.focus({
          preventScroll: !0
        }), oU(FU.seq)
      }), [null === FU || void 0 === FU ? void 0 : FU.seq]);
      const CU = UU => (XU, zU) => (0, uU.jsx)(VU, {
        name: XU,
        place: PU(aU, XU),
        openedIn: UU,
        isYou: XU === gU,
        manage: AU,
        hiddenNames: YU,
        zIndex: zU
      }, XU);
      return (0, uU.jsxs)("div", {
        ref: NU,
        className: "LobbyManagePage",
        children: [ZU.here.length > 0 && (0, uU.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, uU.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, uU.jsx)(tU.b, {
              label: DU("lobbyManage:here"),
              meta: aU.here.length
            }), LU >= 2 && !WU && (0, uU.jsxs)(BU.K, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: AU.isPending("kickAll"),
              onClick: () => {
                dU(!0)
              },
              children: [(0, uU.jsx)(pU.d, {
                name: "person-falling-burst"
              }), " ", DU("lobbyManage:kickAll")]
            })]
          }), WU && LU >= 2 && (0, uU.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, uU.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: DU("lobbyManage:kickAllConfirm", {
                count: LU
              })
            }), (0, uU.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, uU.jsx)(BU.G, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  dU(!1), AU.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: DU("lobbyManage:kickAll")
              }), (0, uU.jsx)(BU.j, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  dU(!1)
                },
                children: DU("general:cancel")
              })]
            })]
          }), eU && (0, uU.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, uU.jsx)(fU, {
              status: eU
            })
          }), (0, uU.jsx)(iU, {
            names: ZU.here,
            cap: ZU.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: CU("here")
          })]
        }), ZU.away.length > 0 && (0, uU.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, uU.jsx)(tU.b, {
            label: DU("lobbyManage:notHere"),
            meta: ZU.away.length
          }), (0, uU.jsx)(iU, {
            names: ZU.away,
            cap: 5,
            filterFrom: null,
            moreLabel: DU("lobbyManage:allCount", {
              count: ZU.away.length
            }),
            reveal: null !== (yU = null === FU || void 0 === FU ? void 0 : FU.name) && void 0 !== yU ? yU : null,
            renderRow: CU("away")
          })]
        }), ZU.banned.length > 0 && (0, uU.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, uU.jsx)(tU.b, {
            label: DU("lobbyManage:banned"),
            meta: ZU.banned.length
          }), (0, uU.jsx)(iU, {
            names: ZU.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: DU("lobbyManage:allCount", {
              count: ZU.banned.length
            }),
            reveal: null !== (QU = null === FU || void 0 === FU ? void 0 : FU.name) && void 0 !== QU ? QU : null,
            renderRow: CU("banned")
          })]
        })]
      })
    }
    var nU = zU(5057),
      mU = zU(1685),
      lU = zU(37434),
      xU = zU(37448),
      JU = zU(37443),
      jU = zU(37436),
      KU = zU(37468),
      bU = zU(37456),
      TU = zU(37464);

    function hU(UU) {
      const XU = new Set;
      for (const zU of UU) XU.add(zU.toLowerCase());
      return XU
    }

    function UX(UU) {
      var XU, zU;
      let {
        state: yU,
        lobbyName: QU,
        listed: AU,
        isListed: FU,
        aG: oU,
        lG: DU,
        statusOf: EU
      } = UU;
      const {
        t: YU,
        selectedLanguage: NU
      } = (0, IU.I)(), pU = (0, mU.o)(), aU = (0, GU.i)("players"), gU = null === aU.localId ? null : null !== (XU = null === (zU = aU.byId[aU.localId]) || void 0 === zU ? void 0 : zU.name) && void 0 !== XU ? XU : null, kU = (0, cU.useMemo)((() => (0, jU.i)(pU.friends, QU, yU.here.map((UU => UU.name)))), [pU.friends, QU, yU.here]), BU = new Map(kU.map((UU => [UU.friend.name.toLowerCase(), UU]))), ZU = function(UU) {
        let {
          refused: XU,
          listed: zU,
          here: cU,
          friends: yU,
          excluded: QU
        } = UU;
        const AU = hU(QU),
          FU = UU => UU.filter((UU => {
            const XU = UU.toLowerCase();
            return !AU.has(XU) && (AU.add(XU), !0)
          }));
        return {
          added: [],
          refused: FU(XU),
          listed: FU(zU),
          suggested: FU([...cU, ...yU])
        }
      }({
        refused: yU.refused.map((UU => UU.name)),
        listed: AU,
        here: yU.here.map((UU => UU.name)),
        friends: kU.flatMap((UU => "here" === UU.place ? [] : [UU.friend.name])),
        excluded: [...null === gU ? [] : [gU], ...[...yU.here, ...yU.away].flatMap((UU => "none" === UU.role || (0, jU.m)(AU, UU.name) ? [] : [UU.name]))]
      }), [RU] = (0, cU.useState)(ZU), [PU, WU] = (0, cU.useState)([]), dU = function(UU, XU, zU) {
        const cU = hU(zU),
          yU = hU([...zU, ...UU.refused, ...UU.listed, ...UU.suggested]),
          QU = zU => [...UU[zU].filter((UU => !cU.has(UU.toLowerCase()))), ...XU[zU].filter((UU => {
            const XU = UU.toLowerCase();
            return !yU.has(XU) && (yU.add(XU), !0)
          }))];
        return {
          added: [...zU],
          refused: QU("refused"),
          listed: QU("listed"),
          suggested: QU("suggested")
        }
      }(RU, ZU, PU), CU = (UU, XU) => {
        var zU, cU;
        const QU = UU.toLowerCase(),
          AU = BU.get(QU),
          DU = yU.here.find((UU => UU.name.toLowerCase() === QU)),
          IU = yU.refused.find((UU => UU.name.toLowerCase() === QU)),
          pU = null !== (zU = null === EU || void 0 === EU ? void 0 : EU(UU)) && void 0 !== zU ? zU : null;
        let aU = null;
        pU ? aU = (0, uU.jsx)(fU, {
          status: pU
        }) : IU ? aU = OU(YU, NU.code, "lobbyManage:triedToJoinAgo", IU.at, Date.now()) : AU && DU ? aU = YU("lobbyManage:friendHere") : AU ? aU = "online" === AU.place ? YU("lobbyManage:friendOnline") : YU("lobbyManage:friend") : DU && (aU = YU("lobbyManage:hereStatus"));
        let tU = null !== (cU = null === AU || void 0 === AU ? void 0 : AU.friend) && void 0 !== cU ? cU : (0, eU.i)(UU, null);
        return !AU && null !== DU && void 0 !== DU && DU.id && (tU = (0, LU.d)(DU.id, DU.name).playerSocialPreview), (0, uU.jsx)(bU.e, {
          playerSocialPreview: tU,
          isFriend: void 0 !== AU,
          hideFriendBadge: !0,
          status: aU,
          zIndex: XU,
          LY: {
            on: FU(UU),
            onChange: XU => {
              oU(UU, XU)
            }
          }
        }, QU)
      }, wU = [...dU.added, ...dU.refused];
      return (0, uU.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, uU.jsx)(tU.b, {
          label: YU("worldSocial:whitelist"),
          meta: AU.length
        }), (0, uU.jsx)(TU.d, {
          label: YU("lobbyManage:add"),
          icon: "user-check",
          placeholder: YU("socialBar:enterPlayerName"),
          onSubmit: async UU => {
            const XU = await DU(UU);
            return XU.ok && WU((XU => [UU, ...XU])), XU
          }
        }), wU.length > 0 && (0, uU.jsx)("div", {
          className: "PlayerRows",
          children: wU.map(((UU, XU) => CU(UU, wU.length - XU)))
        }), (0, uU.jsx)(iU, {
          names: dU.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: YU("lobbyManage:allOnWhitelist", {
            count: dU.listed.length
          }),
          renderRow: CU
        }), (0, uU.jsx)(iU, {
          names: dU.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: YU("lobbyManage:allCount", {
            count: dU.suggested.length
          }),
          renderRow: CU
        })]
      })
    }

    function XX(UU) {
      let {
        manage: XU,
        listing: zU
      } = UU;
      const {
        t: cU
      } = (0, IU.I)(), QU = (UU, zU) => ((0, yU.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: UU
      }), XU.send({
        type: "setListing",
        field: UU,
        value: zU
      }, `listing:${UU}`)), AU = UU => {
        const zU = XU.statusOf(`listing:${UU}`);
        return zU && !zU.ok && (0, uU.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, uU.jsx)(fU, {
            status: zU
          })
        })
      };
      return (0, uU.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, uU.jsx)(tU.b, {
          label: cU("lobbyManage:inWorldsList")
        }), (0, uU.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, uU.jsx)("div", {
            className: "SliderText",
            children: cU("lobbyManage:description")
          }), (0, uU.jsx)(HU, {
            value: zU.description,
            ariaLabel: cU("lobbyManage:description"),
            wide: !0,
            onSave: UU => QU("description", UU)
          })]
        }), AU("description"), (0, uU.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, uU.jsx)("div", {
            className: "SliderText",
            children: cU("lobbyManage:emojis")
          }), (0, uU.jsx)(HU, {
            value: zU.emojis,
            ariaLabel: cU("lobbyManage:emojis"),
            onSave: UU => QU("emojis", UU)
          })]
        }), AU("emojis"), (0, uU.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, uU.jsx)("div", {
            className: "SliderText",
            children: cU("lobbyManage:colour")
          }), (0, uU.jsx)(zX, {
            value: zU.colour,
            ariaLabel: cU("lobbyManage:colour"),
            onSave: UU => {
              QU("colour", UU)
            }
          })]
        }), AU("colour")]
      })
    }

    function zX(UU) {
      let {
        value: XU,
        ariaLabel: zU,
        onSave: yU
      } = UU;
      const QU = (0, cU.useRef)(null),
        AU = (0, cU.useRef)({
          value: XU,
          onSave: yU
        });
      AU.current = {
        value: XU,
        onSave: yU
      };
      const FU = (0, cU.useRef)(null),
        oU = (0, cU.useRef)(!1),
        DU = UU => {
          oU.current && UU.value !== AU.current.value && UU.value !== FU.current && (FU.current = UU.value, AU.current.onSave(UU.value))
        };
      return (0, cU.useEffect)((() => {
        QU.current && document.activeElement !== QU.current && (QU.current.value = XU)
      }), [XU]), (0, cU.useEffect)((() => {
        const UU = QU.current,
          XU = () => {
            DU(UU)
          };
        return UU.addEventListener("change", XU), () => {
          UU.removeEventListener("change", XU), DU(UU)
        }
      }), []), (0, uU.jsx)("input", {
        ref: QU,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: XU,
        "aria-label": zU,
        onInput: () => {
          oU.current = !0
        },
        onBlur: UU => {
          DU(UU.currentTarget)
        }
      })
    }

    function cX(UU) {
      let {
        manage: XU
      } = UU;
      const {
        lobbyName: zU,
        shownLobbyName: cU
      } = (0, GU.i)("connectedGame");
      return XU.state.you.canSetVisibility && null !== zU ? (0, uU.jsx)(QX, {
        manage: XU,
        lobbyName: zU,
        worldCode: null !== cU && void 0 !== cU ? cU : zU
      }, zU) : (0, uU.jsx)(AX, {
        manage: XU,
        lobbyName: null !== zU && void 0 !== zU ? zU : ""
      })
    }

    function yX(UU) {
      return UU.map((UU => UU.toLowerCase())).sort().join(",")
    }

    function QX(UU) {
      var XU;
      let {
        manage: zU,
        lobbyName: QU,
        worldCode: AU
      } = UU;
      const {
        t: FU
      } = (0, IU.I)(), {
        settings: oU,
        loading: DU,
        change: EU,
        retry: YU,
        refresh: NU
      } = (0, lU.i)(QU), pU = (0, mU.o)(), {
        state: gU
      } = zU, kU = (0, cU.useRef)(oU);
      kU.current = oU;
      const GU = yX(null !== (XU = gU.whitelist) && void 0 !== XU ? XU : []),
        ZU = null !== gU.whitelist;
      (0, cU.useEffect)((() => {
        const UU = kU.current;
        null !== UU && (UU.visibility !== gU.visibility || ZU && yX(UU.whitelist) !== GU) && NU()
      }), [gU.visibility, GU, ZU, NU]);
      const RU = async (UU, XU) => {
        let zU = null;
        return await EU(UU, XU, {
          quiet: !0,
          onAnswer: UU => {
            zU = UU
          }
        }), zU
      }, PU = (UU, XU) => {
        null !== XU && "error" in XU && zU.showStatus(UU, {
          ok: !1,
          text: [FU(XU.error)]
        })
      }, WU = async UU => {
        if (null === oU || UU === oU.visibility) return;
        (0, yU.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: UU
        });
        const XU = "whitelist" === UU ? (0, jU.h)((0, jU.i)(pU.friends, QU, gU.here.map((UU => UU.name))), (0, KU.b)(QU), oU.whitelist) : [],
          zU = await RU({
            setVisibility: UU
          }, (XU => ({
            ...XU,
            visibility: UU
          })));
        PU("mode", zU), null === zU || "error" in zU || await (async UU => {
          for (const XU of (0, jU.p)(UU, nU.A))
            if (!await EU({
                whitelistAdd: XU
              }, (UU => (0, jU.w)(UU, XU, !0)))) return !1;
          return !0
        })(XU)
      }, dU = (0, cU.useMemo)((() => {
        var UU;
        if (null === oU) return [];
        const XU = null !== (UU = gU.whitelist) && void 0 !== UU ? UU : [];
        return [...XU.filter((UU => (0, jU.m)(oU.whitelist, UU))), ...oU.whitelist.filter((UU => !(0, jU.m)(XU, UU)))]
      }), [oU, gU.whitelist]), LU = zU.statusOf("mode");
      return (0, uU.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, uU.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, uU.jsx)(tU.b, {
            label: FU("worldSocial:whoCanJoin")
          }), null === oU && DU && (0, uU.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, uU.jsx)(aU.b, {})
          }), null === oU && !DU && (0, uU.jsx)(BU.j, {
            className: "SmallTextLight",
            onClick: YU,
            children: FU("worldSocial:loadFailed")
          }), null !== oU && (0, uU.jsx)(xU.c, {
            visibility: oU.visibility,
            onPick: UU => {
              WU(UU)
            }
          }), LU && (0, uU.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, uU.jsx)(fU, {
              status: LU
            })
          }), null !== oU && "private" !== oU.visibility && (0, uU.jsx)(JU.c, {
            worldCode: AU,
            message: null
          })]
        }), "whitelist" === (null === oU || void 0 === oU ? void 0 : oU.visibility) && (0, uU.jsx)(UX, {
          state: gU,
          lobbyName: QU,
          listed: dU,
          isListed: UU => (0, jU.m)(oU.whitelist, UU),
          aG: (UU, XU) => {
            (0, yU.reportAnalyticsClick)(XU ? {
              id: "lobby_manage.whitelist_add",
              value: "LY"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), RU(XU ? {
              whitelistAdd: [UU]
            } : {
              whitelistRemove: UU
            }, (zU => (0, jU.w)(zU, [UU], XU))).then((XU => {
              PU(`whitelist:${UU.toLowerCase()}`, XU)
            }))
          },
          lG: async UU => {
            (0, yU.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const XU = await RU({
              whitelistAdd: [UU]
            }, (XU => (0, jU.w)(XU, [UU], !0)));
            return null === XU ? {
              ok: !1,
              error: FU("worldSocial:changeFailed")
            } : "error" in XU ? {
              ok: !1,
              error: FU(XU.error)
            } : (0, jU.m)(XU.notFound, UU) ? {
              ok: !1,
              error: FU("lobbyManage:noPlayerCalled", {
                playerName: UU
              })
            } : {
              ok: !0
            }
          },
          statusOf: UU => zU.statusOf(`whitelist:${UU.toLowerCase()}`)
        }), "public" === (null === oU || void 0 === oU ? void 0 : oU.visibility) && null !== gU.listing && (0, uU.jsx)(XX, {
          manage: zU,
          listing: gU.listing
        })]
      })
    }

    function AX(UU) {
      var XU;
      let {
        manage: zU,
        lobbyName: cU
      } = UU;
      const {
        t: QU
      } = (0, IU.I)(), {
        state: AU
      } = zU, FU = EU(), oU = null !== (XU = AU.whitelist) && void 0 !== XU ? XU : [];
      return (0, uU.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, uU.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, uU.jsx)(tU.b, {
            label: QU("worldSocial:whoCanJoin")
          }), (0, uU.jsx)("div", {
            className: "LobbyManageModeText",
            children: QU(`worldSocial:${AU.visibility}`)
          })]
        }), "whitelist" === AU.visibility && AU.you.canEditWhitelist && (0, uU.jsx)(UX, {
          state: AU,
          lobbyName: cU,
          listed: oU,
          isListed: UU => {
            var XU;
            return null !== (XU = FU.get(UU.toLowerCase())) && void 0 !== XU ? XU : (0, jU.m)(oU, UU)
          },
          aG: (UU, XU) => {
            (0, yU.reportAnalyticsClick)(XU ? {
              id: "lobby_manage.whitelist_add",
              value: "LY"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const cU = UU.toLowerCase();
            FU.hold(cU, XU, zU.send(XU ? {
              type: "whitelistAdd",
              names: [UU]
            } : {
              type: "whitelistRemove",
              name: UU
            }, `whitelist:${cU}`))
          },
          lG: async UU => {
            (0, yU.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const XU = await zU.send({
              type: "whitelistAdd",
              names: [UU]
            }, "whitelist-field");
            return XU.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, uU.jsx)(SU.d, {
                text: XU.message
              })
            }
          },
          statusOf: UU => zU.statusOf(`whitelist:${UU.toLowerCase()}`)
        }), "public" === AU.visibility && null !== AU.listing && (0, uU.jsx)(XX, {
          manage: zU,
          listing: AU.listing
        })]
      })
    }
    var FX = zU(5540),
      oX = zU(1420);
    const DX = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const EX = (0, cU.memo)((function(UU) {
      var XU;
      let {
        rule: zU,
        value: cU,
        status: yU,
        pending: QU,
        hiddenNames: AU,
        zW: FU,
        onAction: oU
      } = UU;
      const {
        t: DU
      } = (0, IU.I)(), EU = UU => FU(zU, UU), YU = (UU, XU) => {
        oU(zU, UU, XU)
      }, NU = qU(DU, zU.label, AU), pU = zU.info ? qU(DU, zU.info, AU) : void 0, aU = zU.placeholder ? qU(DU, zU.placeholder, AU) : void 0, tU = (null !== (XU = zU.options) && void 0 !== XU ? XU : []).map((UU => ({
        value: UU.value,
        label: qU(DU, UU.label, AU)
      }))), gU = Math.max(0, ...tU.map((UU => function(UU) {
        let XU = 0;
        for (const zU of UU) XU += DX.test(zU) ? 2 : 1;
        return XU
      }(UU.label)))), kU = yU && (0, uU.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, uU.jsx)(fU, {
          status: yU
        })
      }), GU = (0, uU.jsxs)("div", {
        className: "SliderText",
        children: [NU, void 0 !== pU && (0, uU.jsx)(oX.c, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: pU
        })]
      });
      return "toggle" === zU.kind ? (0, uU.jsxs)(uU.Fragment, {
        children: [(0, uU.jsx)(FX.e, {
          label: NU,
          checked: !0 === cU,
          circleInfoText: pU,
          disabled: QU,
          onClick: EU
        }), kU]
      }) : "choice" === zU.kind && tU.length <= 3 ? (0, uU.jsxs)(uU.Fragment, {
        children: [(0, uU.jsx)(FX.i, {
          label: NU,
          options: tU,
          value: String(cU),
          circleInfoText: pU,
          onChange: EU
        }), kU]
      }) : (0, uU.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [GU, "choice" === zU.kind && (0, uU.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": gU
          },
          children: (0, uU.jsx)(CU.d, {
            options: tU,
            value: String(cU),
            disabled: QU,
            onChange: UU => {
              EU(UU.value)
            }
          })
        }), ("number" === zU.kind || "text" === zU.kind) && (0, uU.jsx)(HU, {
          value: null === cU ? "" : String(cU),
          placeholder: aU,
          ariaLabel: NU,
          onSave: UU => {
            const XU = UU.trim(),
              cU = Number(XU);
            return EU("number" === zU.kind && "" !== XU && Number.isFinite(cU) ? cU : XU)
          }
        }), "action" === zU.kind && (0, uU.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [tU.length > 3 && (0, uU.jsx)(CU.d, {
            options: tU,
            value: {
              value: "",
              label: null !== aU && void 0 !== aU ? aU : NU
            },
            disabled: QU,
            onChange: UU => {
              YU(UU.value)
            }
          }), tU.length > 0 && tU.length <= 3 && tU.map((UU => (0, uU.jsx)(BU.j, {
            className: "SmallTextLight",
            disabled: QU,
            onClick: () => {
              YU(UU.value)
            },
            children: UU.label
          }, UU.value))), 0 === tU.length && (0, uU.jsx)(BU.j, {
            className: "SmallTextLight",
            disabled: QU,
            onClick: () => {
              YU()
            },
            children: null !== aU && void 0 !== aU ? aU : NU
          })]
        }), "names" === zU.kind && (0, uU.jsx)(YX, {
          names: Array.isArray(cU) ? cU : [],
          pending: QU,
          onAction: YU
        }), kU]
      })
    }));

    function YX(UU) {
      let {
        names: XU,
        pending: zU,
        onAction: yU
      } = UU;
      const {
        t: QU
      } = (0, IU.I)(), AU = (0, cU.useRef)(null), [FU, oU] = (0, cU.useState)(""), DU = () => {
        const UU = FU.trim();
        "" !== UU && (yU(UU, "add"), AU.current && (AU.current.value = ""), oU(""))
      };
      return (0, uU.jsxs)("div", {
        className: "LobbyManageNames",
        children: [XU.map((UU => (0, uU.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, uU.jsx)("span", {
            className: "LobbyManageNameText",
            children: UU
          }), (0, uU.jsx)(BU.j, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: QU("lobbyManage:removeName", {
              name: UU
            }),
            disabled: zU,
            onClick: () => {
              yU(UU, "remove")
            },
            children: (0, uU.jsx)(pU.d, {
              name: "xmark"
            })
          })]
        }, UU))), (0, uU.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, uU.jsx)(rU.e, {
            domRef: AU,
            placeholderText: QU("lobbyManage:namePlaceholder"),
            ariaLabel: QU("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: UU => {
              oU(UU)
            },
            onEnter: DU
          }), (0, uU.jsx)(BU.j, {
            className: "SmallTextLight",
            disabled: zU || "" === FU.trim(),
            onClick: DU,
            children: QU("lobbyManage:addHere")
          })]
        })]
      })
    }
    const NX = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function IX(UU, XU) {
      return NX.map((zU => {
        let {
          group: cU,
          title: yU
        } = zU;
        const QU = UU.filter((UU => UU.group === cU && void 0 === UU.parent)).map((zU => {
          const cU = !0 === XU(zU) ? UU.filter((UU => UU.parent === zU.key)) : [];
          return {
            rule: zU,
            children: cU
          }
        }));
        return {
          group: cU,
          title: yU,
          items: QU
        }
      }))
    }

    function pX(UU) {
      return UU.flatMap((UU => {
        let {
          items: XU
        } = UU;
        return XU.flatMap((UU => {
          let {
            rule: XU,
            children: zU
          } = UU;
          return [XU, ...zU]
        }))
      }))
    }

    function aX(UU) {
      let {
        manage: XU,
        rowsShown: zU
      } = UU;
      const {
        t: QU
      } = (0, IU.I)(), AU = (0, GU.i)("hiddenPlayerNames"), {
        rules: FU
      } = XU.state, oU = EU(), DU = UU => {
        const XU = oU.get(UU.key);
        return void 0 === XU ? UU.value : XU
      }, YU = IX(FU, DU), [NU] = (0, cU.useState)((() => pX(YU).map((UU => UU.key)))), pU = zU === 1 / 0 ? null : new Set(NU.slice(0, zU)), aU = UU => null === pU || pU.has(UU.key), {
        hold: gU
      } = oU, kU = (0, cU.useCallback)(((UU, zU) => {
        (0, yU.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: UU.key
        });
        const cU = XU.send({
          type: "setRule",
          key: UU.key,
          value: zU
        }, `rule:${UU.key}`);
        return gU(UU.key, zU, cU), cU
      }), [XU, gU]), BU = (0, cU.useCallback)(((UU, zU, cU) => {
        (0, yU.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: UU.key
        }), XU.send({
          type: "ruleAction",
          key: UU.key,
          ...void 0 === zU ? {} : {
            arg: zU
          },
          ...void 0 === cU ? {} : {
            op: cU
          }
        }, `rule:${UU.key}`, void 0 === cU ? QU("lobbyManage:setJustNow") : void 0)
      }), [XU, QU]), ZU = UU => {
        const zU = `rule:${UU.key}`;
        return (0, uU.jsx)(EX, {
          rule: UU,
          value: DU(UU),
          status: XU.statusOf(zU),
          pending: XU.isPending(zU),
          hiddenNames: AU,
          zW: kU,
          onAction: BU
        }, UU.key)
      };
      return (0, uU.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: YU.map((UU => {
          let {
            group: XU,
            title: zU,
            items: yU
          } = UU;
          const AU = yU.filter((UU => {
            let {
              rule: XU
            } = UU;
            return aU(XU)
          }));
          return 0 === AU.length ? null : (0, uU.jsxs)(cU.Fragment, {
            children: [(0, uU.jsx)(tU.b, {
              label: QU(zU)
            }), AU.map((UU => {
              let {
                rule: XU,
                children: zU
              } = UU;
              return 0 === zU.length ? ZU(XU) : (0, uU.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [ZU(XU), zU.filter(aU).map(ZU)]
              }, XU.key)
            }))]
          }, XU)
        }))
      })
    }
    const tX = {
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
      gX = 5,
      kX = (0, cU.memo)((function(UU) {
        let {
          page: XU,
          manage: zU,
          leaderboard: yU,
          focusRequest: QU,
          onFocused: AU,
          ruleRowsShown: FU
        } = UU;
        return "leaderboard" === XU ? (0, uU.jsx)(cU.Suspense, {
          fallback: (0, uU.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, uU.jsx)(aU.b, {})
          }),
          children: yU
        }) : "joining" === XU ? (0, uU.jsx)(cX, {
          manage: zU
        }) : "rules" === XU ? (0, uU.jsx)(aX, {
          manage: zU,
          rowsShown: FU
        }) : (0, uU.jsx)(sU, {
          manage: zU,
          focusRequest: QU,
          onFocused: AU
        })
      }));

    function GX(UU) {
      let {
        page: XU
      } = UU;
      const {
        t: zU
      } = (0, IU.I)(), cU = tX[XU];
      return (0, uU.jsxs)(uU.Fragment, {
        children: [(0, uU.jsx)(pU.d, {
          name: cU.icon
        }), " ", (0, uU.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: zU(cU.title)
        })]
      })
    }

    function BX(UU) {
      var XU;
      const {
        t: zU
      } = (0, IU.I)(), {
        pages: QU,
        landing: AU
      } = UU, oU = (0, cU.useRef)(null), DU = (0, cU.useRef)(null), EU = (0, cU.useRef)(null), YU = (0, cU.useRef)(new Map), [pU, aU] = (0, cU.useState)(null), GU = (0, cU.useRef)(pU), BU = (0, cU.useRef)(0), [ZU, RU] = (0, cU.useState)(QU[0]), PU = null !== pU && void 0 !== pU ? pU : QU.includes(ZU) ? ZU : QU[0], [WU] = (0, cU.useState)(null !== (XU = null === AU || void 0 === AU ? void 0 : AU.page) && void 0 !== XU ? XU : null), dU = null !== WU && QU.includes(WU) ? [WU, ...QU.filter((UU => UU !== WU))] : QU, [LU] = (0, cU.useState)((() => {
        const XU = pX(IX(UU.manage.state.rules, (UU => UU.value)));
        return Math.max(1, Math.ceil(XU.length / gX))
      })), eU = dU.flatMap((UU => "rules" === UU ? Array(LU).fill(UU) : [UU])), CU = function(UU, XU) {
        const [zU, yU] = (0, cU.useState)(UU), QU = zU >= XU;
        return QU && zU !== 1 / 0 && yU(1 / 0), (0, cU.useLayoutEffect)((() => {
          if (QU) return;
          let UU = !0;
          return (0, kU.g)().then((() => {
            UU && yU((UU => UU + 1))
          })), () => {
            UU = !1
          }
        }), [zU, QU]), QU ? 1 / 0 : zU
      }(1, eU.length), wU = eU.slice(0, CU), qU = new Set(wU), OU = CU < eU.length, SU = OU ? wU.filter((UU => "rules" === UU)).length * gX : 1 / 0, rU = (0, cU.useRef)(UU.focusRequest);
      rU.current = UU.focusRequest;
      const fU = UU => {
          GU.current = UU, aU(UU)
        },
        iU = () => {
          var UU, XU;
          oU.current.style.scrollPaddingTop = `${null!==(UU=null===(XU=EU.current)||void 0===XU?void 0:XU.offsetHeight)&&void 0!==UU?UU:0}px`
        },
        HU = UU => {
          const XU = oU.current,
            zU = YU.current.get(UU);
          if (void 0 === zU) return;
          const cU = document.activeElement,
            yU = rU.current,
            QU = null === yU ? null : zU.querySelector(`[data-lobby-manage-row="${CSS.escape(yU.name)}"]`);
          iU(), cU instanceof HTMLElement && null !== QU && void 0 !== QU && QU.contains(cU) ? cU.scrollIntoView({
            block: "center"
          }) : null === zU.previousElementSibling ? XU.scrollTop = 0 : zU.scrollIntoView({
            block: "start"
          }), BU.current = XU.scrollTop
        },
        MU = UU => {
          (0, yU.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: UU
          }), fU(UU), HU(UU)
        },
        vU = () => {
          var UU, XU;
          const zU = oU.current,
            cU = zU.getBoundingClientRect().top + (null !== (UU = null === (XU = EU.current) || void 0 === XU ? void 0 : XU.offsetHeight) && void 0 !== UU ? UU : 0),
            yU = QU.map((UU => {
              var XU, zU;
              return (null !== (XU = null === (zU = YU.current.get(UU)) || void 0 === zU ? void 0 : zU.getBoundingClientRect().top) && void 0 !== XU ? XU : 1 / 0) - cU
            })),
            AU = !OU && zU.scrollTop + zU.clientHeight >= zU.scrollHeight - 1;
          RU(QU[(0, FU.g)(yU, AU)])
        },
        VU = () => {
          null !== GU.current && (fU(null), vU())
        };
      (0, cU.useLayoutEffect)((() => {
        null !== AU && QU.includes(AU.page) && MU(AU.page)
      }), [null === AU || void 0 === AU ? void 0 : AU.seq]), (0, cU.useLayoutEffect)((() => {
        null === GU.current || QU.includes(GU.current) || VU()
      }));
      const {
        onFocused: sU
      } = UU, nU = (0, cU.useCallback)((UU => {
        null !== GU.current && HU(GU.current), sU(UU)
      }), [sU]);
      (0, cU.useLayoutEffect)((() => {
        const UU = GU.current;
        null !== UU && (!OU || QU.indexOf(eU[CU - 1]) < QU.indexOf(UU)) && HU(UU)
      }), [CU]), (0, cU.useEffect)((() => {
        const UU = new ResizeObserver((() => {
          null !== GU.current ? HU(GU.current) : iU()
        }));
        return UU.observe(oU.current), UU.observe(DU.current), () => {
          UU.disconnect()
        }
      }), []), (0, cU.useLayoutEffect)((() => {
        const UU = EU.current,
          XU = null === UU || void 0 === UU ? void 0 : UU.querySelector(".SegmentedToggleOptionSelected");
        XU && (UU.scrollLeft = Math.min(XU.offsetLeft, Math.max(UU.scrollLeft, XU.offsetLeft + XU.offsetWidth - UU.clientWidth)))
      }), [PU]);
      return (0, uU.jsxs)("div", {
        ref: oU,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === GU.current ? vU() : Math.abs(oU.current.scrollTop - BU.current) > 1 && VU()
        },
        onClick: UU => {
          var XU;
          null !== (XU = EU.current) && void 0 !== XU && XU.contains(UU.target) || VU()
        },
        onFocus: UU => {
          var XU;
          const zU = null === GU.current ? null : YU.current.get(GU.current);
          !zU || zU.contains(UU.target) || null !== (XU = EU.current) && void 0 !== XU && XU.contains(UU.target) || VU()
        },
        children: [QU.length > 1 && (0, uU.jsx)("div", {
          ref: EU,
          className: "LobbyManageChips",
          children: (0, uU.jsx)(gU.d, {
            options: QU.map((UU => ({
              value: UU,
              label: (0, uU.jsx)(GX, {
                page: UU
              }),
              ariaLabel: zU(tX[UU].title)
            }))),
            value: PU,
            padTabs: "2",
            ariaLabel: zU("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: MU
          })
        }), (0, uU.jsx)("div", {
          ref: DU,
          className: NU()("LobbyManageInner", {
            Staging: OU
          }),
          children: QU.filter((UU => qU.has(UU))).map((XU => {
            const zU = XU === pU;
            return (0, uU.jsxs)("section", {
              ref: UU => {
                UU ? YU.current.set(XU, UU) : YU.current.delete(XU)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": zU || void 0,
              children: [QU.length > 1 && (0, uU.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": zU || void 0,
                "data-pad-unavailable": zU || void 0,
                children: (0, uU.jsx)(tU.b, {
                  label: (0, uU.jsx)(GX, {
                    page: XU
                  })
                })
              }), (0, uU.jsx)(kX, {
                page: XU,
                manage: UU.manage,
                leaderboard: UU.leaderboard,
                focusRequest: UU.focusRequest,
                onFocused: nU,
                ruleRowsShown: "rules" === XU ? SU : 1 / 0
              })]
            }, XU)
          }))
        })]
      })
    }

    function ZX(UU) {
      return void 0 === (null === UU || void 0 === UU ? void 0 : UU.page) ? null : {
        page: UU.page,
        seq: UU.seq
      }
    }

    function RX(UU) {
      let {
        leaderboard: XU
      } = UU;
      const zU = function() {
          const UU = (0, oU.f)("lobbyManage"),
            [XU, zU] = (0, cU.useReducer)((UU => UU + 1), 0),
            [yU] = (0, cU.useState)((() => new DU.e(zU)));
          return (0, cU.useEffect)((() => {
            const UU = yU.nextDeadline();
            if (null === UU) return;
            const XU = setTimeout((() => {
              yU.expire(Date.now()), zU()
            }), Math.max(0, UU - Date.now()));
            return () => {
              clearTimeout(XU)
            }
          })), (0, cU.useMemo)((() => null === UU ? null : {
            state: UU,
            send: (UU, XU, cU) => {
              const QU = yU.send(UU, XU, null !== cU && void 0 !== cU ? cU : null);
              return zU(), QU
            },
            statusOf: UU => yU.statusOf(UU, Date.now()),
            showStatus: (UU, XU) => {
              yU.show(UU, XU)
            },
            isPending: UU => yU.isPending(UU)
          }), [UU, XU, yU])
        }(),
        EU = (0, FU.i)((0, QU.d)()),
        YU = (0, AU.l)(),
        [NU, IU] = (0, cU.useState)((() => ZX(YU))),
        [pU, aU] = (0, cU.useState)(null);
      return (0, cU.useEffect)((() => {
        null === YU && (0, yU.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, cU.useEffect)((() => {
        null !== YU && (IU((UU => (null === UU || void 0 === UU ? void 0 : UU.seq) === YU.seq ? UU : ZX(YU))), void 0 !== YU.focusName && "players" === YU.page ? aU({
          name: YU.focusName,
          seq: YU.seq
        }) : (0, AU.h)(YU.seq))
      }), [null === YU || void 0 === YU ? void 0 : YU.seq]), null === zU ? null : (0, uU.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, uU.jsx)(BX, {
          pages: (0, FU.c)(zU.state, EU),
          manage: zU,
          leaderboard: XU,
          focusRequest: pU,
          onFocused: AU.h,
          landing: NU
        })
      })
    }
  },
  37279: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      g: () => oU
    });
    var cU = zU(1521),
      yU = zU(2032),
      QU = zU(2005);
    const AU = 1e4;
    let FU = 0;

    function oU(UU) {
      const XU = ++FU;
      return new Promise((zU => {
        const FU = XU => {
            oU(), clearTimeout(DU), !1 === (null === XU || void 0 === XU ? void 0 : XU.ok) && (0, cU.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: UU.type
            }), zU(XU)
          },
          oU = yU.d.subscribe("lobbyManage", (UU => {
            const zU = function(UU, XU) {
              var zU;
              return null !== (zU = null === UU || void 0 === UU ? void 0 : UU.results.find((UU => UU.requestId === XU))) && void 0 !== zU ? zU : null
            }(UU, XU);
            null !== zU && FU(zU)
          })),
          DU = setTimeout((() => {
            FU(null)
          }), AU);
        QU.gameBridge.send("lobbyManage", {
          ...UU,
          requestId: XU
        })
      }))
    }
    const DU = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class EU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oU;
        this.onChange = UU, this.sendAction = XU, this.pending = new Map, this.statuses = new Map
      }
      send(UU, XU, zU) {
        var cU;
        return this.statuses.delete(XU), this.pending.set(XU, (null !== (cU = this.pending.get(XU)) && void 0 !== cU ? cU : 0) + 1), this.sendAction(UU).then((UU => {
          var cU;
          const yU = null !== UU && void 0 !== UU ? UU : {
              requestId: -1,
              ok: !1,
              message: DU
            },
            QU = (null !== (cU = this.pending.get(XU)) && void 0 !== cU ? cU : 1) - 1;
          QU > 0 ? this.pending.set(XU, QU) : this.pending.delete(XU);
          const AU = !yU.ok || yU.message.length > 0 ? yU.message : null === zU ? null : [zU];
          return null !== AU && this.statuses.set(XU, {
            ok: yU.ok,
            text: AU,
            until: Date.now() + 4e3
          }), this.onChange(), yU
        }))
      }
      show(UU, XU) {
        this.statuses.set(UU, {
          ...XU,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(UU) {
        for (const [XU, zU] of this.statuses) zU.until <= UU && this.statuses.delete(XU)
      }
      nextDeadline() {
        let UU = null;
        for (const zU of this.statuses.values()) {
          var XU;
          UU = Math.min(null !== (XU = UU) && void 0 !== XU ? XU : 1 / 0, zU.until)
        }
        return UU
      }
      statusOf(UU, XU) {
        const zU = this.statuses.get(UU);
        return !zU || zU.until <= XU ? null : {
          ok: zU.ok,
          text: zU.text
        }
      }
      isPending(UU) {
        return this.pending.has(UU)
      }
    }
  },
  37464: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => YU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1726),
      FU = zU(1494),
      oU = zU(1384),
      DU = zU(1390),
      EU = zU(1305);

    function YU(UU) {
      let {
        label: XU,
        icon: zU,
        placeholder: yU,
        onSubmit: YU
      } = UU;
      const NU = (0, cU.useRef)(null),
        [IU, pU] = (0, cU.useState)(""),
        [aU, tU] = (0, cU.useState)("Enter"),
        [gU, kU] = (0, cU.useState)(null);
      (0, cU.useEffect)((() => {
        if ("Success" !== aU && "Error" !== aU) return;
        const UU = setTimeout((() => {
          "Success" === aU && NU.current && (NU.current.value = "", pU("")), tU("Enter")
        }), "Success" === aU ? 1e3 : 4e3);
        return () => {
          clearTimeout(UU)
        }
      }), [aU]);
      const GU = () => {
        const UU = IU.trim();
        "" !== UU && "Enter" === aU && (tU("Loading"), YU(UU).then((UU => {
          NU.current && ("error" in UU ? null === UU.error ? tU("Enter") : (kU(UU.error), tU("Error")) : tU("Success"))
        })))
      };
      return (0, EU.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: UU => {
          UU.target === NU.current && "Escape" !== UU.key && UU.stopPropagation()
        },
        children: [(0, EU.jsxs)("div", {
          className: QU()("AddFriendBodyOverlay", `AddFriendBodyOverlay${aU}`),
          children: ["Loading" === aU && (0, EU.jsx)(oU.b, {}), "Success" === aU && (0, EU.jsx)(DU.d, {
            name: "check"
          }), "Error" === aU && gU]
        }), (0, EU.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, EU.jsx)(AU.e, {
            className: "PlayerSearchInput",
            domRef: NU,
            maxLength: 32,
            placeholderText: yU,
            ariaLabel: yU,
            stopPropagation: !1,
            onValueChange: UU => {
              pU(UU)
            },
            onEnter: GU
          }), (0, EU.jsxs)(FU.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== aU || "" === IU.trim(),
            onClick: GU,
            children: [(0, EU.jsx)(DU.d, {
              name: zU
            }), " ", XU]
          })]
        })]
      })
    }
  },
  37448: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => YU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(1193),
      FU = zU(1390),
      oU = zU(1305);
    const DU = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      EU = ["unlisted", "public", "whitelist", "private"];

    function YU(UU) {
      let {
        visibility: XU,
        onPick: zU
      } = UU;
      const {
        t: yU
      } = (0, AU.I)(), YU = (0, cU.useRef)([]);
      return (0, oU.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": yU("worldSocial:whoCanJoin"),
        children: EU.map(((UU, cU) => {
          const AU = UU === XU;
          return (0, oU.jsxs)("button", {
            ref: UU => {
              YU.current[cU] = UU
            },
            type: "button",
            className: QU()("WorldSocialTile", {
              WorldSocialTileSelected: AU
            }),
            "aria-pressed": AU,
            tabIndex: AU ? 0 : -1,
            onKeyDown: UU => {
              ((UU, XU) => {
                const zU = "ArrowRight" === UU.key || "ArrowDown" === UU.key ? 1 : "ArrowLeft" === UU.key || "ArrowUp" === UU.key ? -1 : 0;
                var cU;
                0 !== zU && (UU.preventDefault(), null === (cU = YU.current[(XU + zU + EU.length) % EU.length]) || void 0 === cU || cU.focus())
              })(UU, cU)
            },
            onClick: () => {
              zU(UU)
            },
            children: [(0, oU.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, oU.jsx)(FU.d, {
                name: DU[UU]
              })
            }), (0, oU.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, oU.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: yU(`worldSocial:${UU}`)
              }), (0, oU.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: yU(`worldSocial:${UU}Description`)
              })]
            })]
          }, UU)
        }))
      })
    }
  },
  37456: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU
    });
    var cU = zU(1193),
      yU = zU(2880),
      QU = zU(4775),
      AU = zU(1305);

    function FU(UU) {
      let {
        LY: XU,
        children: zU,
        ...FU
      } = UU;
      const {
        t: oU
      } = (0, cU.I)();
      return (0, AU.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          XU.onChange(!XU.on)
        },
        children: (0, AU.jsx)(yU.f, {
          ...FU,
          opensProfileCard: !1,
          children: (0, AU.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: UU => {
              UU.stopPropagation()
            },
            children: [zU, (0, AU.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, AU.jsx)(QU.d, {
                checked: XU.on,
                disabled: !1,
                ariaLabel: oU("worldSocial:letJoin", {
                  playerName: FU.playerSocialPreview.name
                }),
                onChange: UU => {
                  XU.onChange(UU.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37443: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => pU
    });
    var cU = zU(61),
      yU = zU(1193),
      QU = zU(1936),
      AU = zU(97),
      FU = zU(27),
      oU = zU(1521),
      DU = zU(2903),
      EU = zU(34767),
      YU = zU(1494),
      NU = zU(1390),
      IU = zU(1305);

    function pU(UU) {
      let {
        worldCode: XU,
        message: zU
      } = UU;
      const {
        t: pU
      } = (0, yU.I)(), {
        isTouchScreen: aU
      } = (0, FU.q)(["isTouchScreen"]), tU = AU.featureFlags.canUseInviteLinks, gU = (0, EU.j)(tU && null === zU), [kU, GU] = (0, DU.h)(), BU = (0, cU.useRef)(null);
      if (null !== zU) return (0, IU.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, IU.jsx)(NU.d, {
          name: "lock"
        }), (0, IU.jsx)("span", {
          children: zU
        })]
      });
      const ZU = tU ? gU : XU,
        RU = aU && tU && (0, DU.b)();
      return (0, IU.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!tU && (0, IU.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: pU("worldSocial:worldCode")
        }), (0, IU.jsx)("input", {
          ref: BU,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== ZU && void 0 !== ZU ? ZU : "",
          "aria-label": pU(tU ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: UU => {
            UU.currentTarget.select()
          }
        }), (0, IU.jsxs)(YU.f, {
          className: "WorldSocialCopy",
          disabled: null === ZU,
          onClick: () => {
            null !== ZU && (0, DU.e)(ZU, {
              useShareSheet: RU,
              onOutcome: UU => {
                if ((0, oU.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== UU || tU ? UU : "code"
                  }), "copied" === UU) GU();
                else if ("failed" === UU) {
                  var XU;
                  null === (XU = BU.current) || void 0 === XU || XU.focus(), QU.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, IU.jsx)(NU.d, {
            name: kU ? "check" : RU ? "up-from-bracket" : "copy"
          }), " ", pU(kU ? "general:copied" : RU ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37453: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => IU,
      g: () => NU,
      i: () => YU
    });
    var cU = zU(625),
      yU = zU(1193),
      QU = zU(1685),
      AU = zU(2880),
      FU = zU(2841),
      oU = zU(1494),
      DU = zU(37456),
      EU = zU(1305);

    function YU(UU, XU) {
      var zU;
      return {
        isError: !1,
        name: UU,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== XU && void 0 !== XU ? XU : {},
        nameColour: null !== (zU = null === XU || void 0 === XU ? void 0 : XU.nameColour) && void 0 !== zU ? zU : cU.e,
        location: {
          status: "offline"
        }
      }
    }

    function NU(UU) {
      let {
        player: XU,
        isFriend: zU = !1,
        status: cU,
        showLocation: oU = void 0 === cU,
        LY: YU,
        onSendFriendRequest: NU,
        actions: IU,
        zIndex: pU
      } = UU;
      const {
        t: aU
      } = (0, yU.I)();
      let tU = cU;
      null !== YU && void 0 !== YU && YU.on && (tU = (0, EU.jsxs)(EU.Fragment, {
        children: [null !== cU && void 0 !== cU ? cU : (0, EU.jsx)(FU.b, {
          socialPreview: XU
        }), (0, EU.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", aU("worldSocial:canJoin")]
        })]
      }));
      const gU = {
        playerSocialPreview: XU,
        isFriend: zU,
        hideFriendBadge: !0,
        onFriendRemoved: zU ? UU => {
          QU.d.removeFriendFromState(UU)
        } : void 0,
        status: tU,
        showLocation: oU,
        onSendFriendRequest: NU,
        zIndex: pU
      };
      return YU ? (0, EU.jsx)(DU.e, {
        ...gU,
        LY: YU,
        children: IU
      }) : (0, EU.jsx)(AU.f, {
        ...gU,
        opensProfileCard: !1,
        children: IU || void 0
      })
    }

    function IU(UU) {
      let {
        row: XU,
        LY: zU,
        canInvite: cU,
        invited: QU,
        onInvite: AU,
        zIndex: FU
      } = UU;
      const {
        t: DU
      } = (0, yU.I)(), YU = "online" === XU.place ? oU.f : oU.j;
      return (0, EU.jsx)(NU, {
        player: XU.friend,
        isFriend: !0,
        status: "here" === XU.place ? DU("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        LY: zU,
        zIndex: FU,
        actions: cU && (0, EU.jsx)(YU, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: QU,
          onClick: AU,
          ariaLabel: `${DU("worldSocial:invite")} ${XU.friend.name}`,
          children: DU(QU ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37434: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => oU,
      e: () => AU,
      i: () => DU
    });
    var cU = zU(61),
      yU = zU(5026),
      QU = zU(1936);

    function AU(UU) {
      const XU = {
        lobbyName: UU,
        answer: null,
        response: yU.d.getSocialSettings(UU)
      };
      return XU.response.then((UU => {
        XU.answer = UU
      })), XU
    }
    const FU = new Map;

    function oU(UU) {
      FU.set(UU.lobbyName, UU)
    }

    function DU(UU) {
      const [XU] = (0, cU.useState)((() => function(UU) {
        var XU;
        const zU = null !== (XU = FU.get(UU)) && void 0 !== XU ? XU : null;
        return null !== zU && void 0 !== zU && zU.answer && "error" in zU.answer ? null : zU
      }(UU))), [zU, AU] = (0, cU.useState)((() => null !== XU && void 0 !== XU && XU.answer && "settings" in XU.answer ? XU.answer.settings : null)), [oU, DU] = (0, cU.useState)(!0), [EU, YU] = (0, cU.useState)(null !== zU), NU = (0, cU.useRef)(zU);
      NU.current = zU;
      const IU = (0, cU.useRef)(0),
        pU = (0, cU.useRef)(0),
        aU = (0, cU.useRef)(!1),
        tU = (0, cU.useRef)(!0),
        gU = (0, cU.useCallback)((async XU => {
          const zU = ++IU.current,
            cU = await (null !== XU && void 0 !== XU ? XU : yU.d.getSocialSettings(UU));
          tU.current && zU === IU.current && (YU(!0), DU(!1), "error" in cU || AU(cU.settings))
        }), [UU]),
        kU = (0, cU.useCallback)((() => {
          DU(!0), gU()
        }), [gU]),
        GU = (0, cU.useCallback)((() => {
          pU.current > 0 ? aU.current = !0 : gU()
        }), [gU]);
      (0, cU.useEffect)((() => (tU.current = !0, FU.delete(UU), DU(!0), gU(null === XU || void 0 === XU ? void 0 : XU.response), () => {
        tU.current = !1
      })), [gU, UU, XU]);
      const BU = UU => {
        IU.current++, DU(!1), NU.current = UU, AU(UU)
      };
      return {
        settings: zU,
        loading: oU,
        answered: EU,
        retry: kU,
        refresh: GU,
        change: async function(XU, zU) {
          let {
            quiet: cU = !1,
            onAnswer: AU
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const FU = NU.current;
          if (null === FU) return !1;
          BU(zU(FU)), pU.current > 0 && (aU.current = !0), pU.current++;
          const oU = await yU.d.setSocialSettings(UU, XU);
          pU.current--;
          const DU = !("error" in oU);
          if (!tU.current) return DU;
          if (null === AU || void 0 === AU || AU(oU), cU);
          else if ("error" in oU) QU.f.showMessage({
            translationKey: oU.error
          });
          else
            for (const UU of oU.notFound) QU.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: UU
              }
            });
          if (pU.current > 0) return DU;
          const EU = aU.current;
          return aU.current = !1, !EU && "settings" in oU ? BU(oU.settings) : (EU || BU(FU), gU()), DU
        }
      }
    }
  },
  37468: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU,
      e: () => QU
    });
    var cU = zU(173);
    const yU = new Map;

    function QU(UU, XU) {
      var zU;
      const cU = null !== (zU = yU.get(UU)) && void 0 !== zU ? zU : new Map;
      cU.set(XU, Date.now()), yU.set(UU, cU)
    }

    function AU(UU) {
      const XU = yU.get(UU);
      if (!XU) return [];
      const zU = Date.now();
      for (const [yU, QU] of XU) zU - QU >= cU.q && XU.delete(yU);
      return [...XU.keys()]
    }
  },
  37436: (UU, XU, zU) => {
    function cU(UU, XU) {
      const zU = XU.toLowerCase();
      for (const cU of UU)
        if (cU.toLowerCase() === zU) return !0;
      return !1
    }

    function yU(UU, XU, zU) {
      const yU = [],
        QU = [],
        AU = [];
      for (const FU of UU) !FU.isError && FU.name && ("inGame" === FU.location.status && FU.location.inLobbyName === XU || cU(zU, FU.name) ? QU.push({
        friend: FU,
        place: "here"
      }) : "offline" === FU.location.status ? AU.push({
        friend: FU,
        place: "offline"
      }) : yU.push({
        friend: FU,
        place: "online"
      }));
      return [...yU, ...QU, ...AU]
    }

    function QU(UU, XU, zU) {
      const yU = [],
        QU = UU.flatMap((UU => "here" === UU.place ? [UU.friend.name] : []));
      for (const AU of [...QU, ...XU]) cU(yU, AU) || cU(zU, AU) || yU.push(AU);
      return yU
    }

    function AU(UU, XU) {
      return null === UU || void 0 === UU || !UU.canManage || cU(UU.whitelist, XU) ? "none" : "whitelist" === UU.visibility ? "required" : "quiet"
    }

    function FU(UU) {
      if (null === UU) return !0;
      const {
        visibility: XU
      } = UU;
      return "public" === XU || "unlisted" === XU || "whitelist" === XU && UU.canManage
    }

    function oU(UU, XU, zU) {
      if (zU) {
        const zU = XU.filter((XU => !cU(UU.whitelist, XU)));
        return {
          ...UU,
          whitelist: [...UU.whitelist, ...zU]
        }
      }
      return {
        ...UU,
        whitelist: UU.whitelist.filter((UU => !cU(XU, UU)))
      }
    }

    function DU(UU, XU) {
      const zU = [];
      for (let cU = 0; cU < UU.length; cU += XU) zU.push(UU.slice(cU, cU + XU));
      return zU
    }
    zU.d(XU, {
      e: () => FU,
      h: () => QU,
      i: () => yU,
      m: () => cU,
      p: () => DU,
      t: () => AU,
      w: () => oU
    })
  },
  37740: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => QU
    });
    var cU = zU(61),
      yU = zU(2616);

    function QU() {
      const UU = (0, yU.f)("lobbyLeaderboardInfo");
      return (0, cU.useMemo)((() => function(UU) {
        if (null === UU) return null;
        const XU = Object.entries(UU),
          zU = XU.filter((UU => {
            let [, XU] = UU;
            return void 0 !== XU
          }));
        if (zU.length === XU.length) return UU;
        const cU = Object.fromEntries(zU),
          yU = Object.keys(UU).filter((UU => !Object.hasOwn(cU, UU)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${yU.join(", ")}`), cU
      }(UU)), [UU])
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);