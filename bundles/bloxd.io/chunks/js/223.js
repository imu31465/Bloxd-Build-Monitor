export const id = 223;
export const ids = [223];
export const modules = {
  41470: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      LobbyManageView: () => Xb
    });
    var wG = ZG(51),
      SG = ZG(1415),
      LG = ZG(37379),
      yG = ZG(2428),
      kG = ZG(2431),
      UG = ZG(2409),
      YG = ZG(36911);

    function VG() {
      const [GG, bG] = (0, wG.useState)(new Map);
      return {
        get: bG => GG.get(bG),
        hold: (0, wG.useCallback)(((GG, ZG, wG) => {
          bG((bG => new Map(bG).set(GG, ZG))), wG.then((() => {
            bG((bG => {
              const ZG = new Map(bG);
              return ZG.delete(GG), ZG
            }))
          }))
        }), [])
      }
    }
    var pG = ZG(1006),
      fG = ZG.n(pG),
      QG = ZG(1151),
      KG = ZG(1016),
      hG = ZG(1302),
      dG = ZG(2632),
      JG = ZG(5039),
      rG = ZG(3423);
    var zG = ZG(1945),
      EG = ZG(1393);

    function oG(GG, bG, ZG) {
      const wG = GG.filter((GG => GG.name !== bG)),
        SG = wG.filter((GG => "none" === GG.role)).sort(((GG, bG) => bG.at - GG.at)),
        LG = wG.filter((GG => "none" !== GG.role)).sort(((GG, bG) => ZG.indexOf(GG.role) - ZG.indexOf(bG.role) || bG.at - GG.at));
      return [...GG.some((GG => GG.name === bG)) && null !== bG ? [bG] : [], ...[...SG, ...LG].map((GG => GG.name))]
    }

    function XG(GG, bG) {
      const ZG = GG.banned.map((GG => GG.name)),
        wG = new Set(ZG);
      return {
        here: oG(GG.here, bG, GG.roles.map((GG => GG.role))),
        away: GG.away.filter((GG => !wG.has(GG.name))).map((GG => GG.name)),
        banned: ZG
      }
    }

    function uG(GG, bG) {
      const ZG = GG.here.find((GG => GG.name === bG));
      if (ZG) return {
        section: "here",
        player: ZG
      };
      const wG = GG.banned.find((GG => GG.name === bG));
      if (wG) return {
        section: "banned",
        bannedAt: wG.at
      };
      const SG = GG.away.find((GG => GG.name === bG));
      return SG ? {
        section: "away",
        player: SG
      } : {
        section: "gone"
      }
    }
    const iG = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var CG = ZG(2630),
      WG = ZG(36898),
      mG = ZG(37079),
      IG = ZG(3113),
      FG = ZG(352);

    function vG(GG, bG, ZG) {
      return bG.map((bG => {
        if ("string" === typeof bG) return bG;
        const wG = "str" in bG ? bG.str : bG;
        return "string" === typeof wG ? wG : "entityName" in wG ? wG.entityName : "translationKey" in wG ? GG(wG.translationKey, (0, QG.k)(wG.params, ZG)) : ""
      })).join("")
    }

    function aG(GG, bG, ZG, wG, SG) {
      return SG - wG < 6e4 ? GG(`${ZG}JustNow`) : GG(ZG, {
        time: (0, FG.lb)((0, QG.j)(bG, ZG), wG, SG)
      })
    }
    var cG = ZG(1876),
      lG = ZG(1621),
      jG = ZG(1067);

    function PG(GG) {
      let {
        status: bG
      } = GG;
      return (0, jG.jsx)("span", {
        className: fG()("LobbyManageStatus", {
          LobbyManageStatusRefused: !bG.ok
        }),
        children: (0, jG.jsx)(cG.c, {
          text: bG.text
        })
      })
    }

    function MG(GG) {
      let {
        names: bG,
        cap: ZG,
        filterFrom: SG,
        moreLabel: LG,
        reveal: yG = null,
        renderRow: kG
      } = GG;
      const {
        t: UG
      } = (0, QG.w)(), [YG, VG] = (0, wG.useState)(!1), [pG, fG] = (0, wG.useState)(""), hG = YG || null !== yG && bG.indexOf(yG) >= ZG, JG = (hG || bG.length <= ZG) && null !== SG && bG.length > SG, rG = pG.trim().toLowerCase();
      let zG = hG ? bG : bG.slice(0, ZG);
      return JG && "" !== rG && (zG = zG.filter((GG => GG.toLowerCase().includes(rG)))), (0, jG.jsxs)(jG.Fragment, {
        children: [JG && (0, jG.jsx)(lG.b, {
          className: "LobbyManageFilter",
          placeholderText: UG("lobbyManage:findName"),
          ariaLabel: UG("lobbyManage:findName"),
          onValueChange: GG => {
            fG(GG)
          }
        }), zG.length > 0 && (0, jG.jsx)("div", {
          className: "PlayerRows",
          children: zG.map(((GG, bG) => kG(GG, zG.length - bG)))
        }), !hG && bG.length > ZG && (0, jG.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, jG.jsx)(dG.e, {
            label: (0, jG.jsxs)(jG.Fragment, {
              children: [LG, " ", (0, jG.jsx)(KG.c, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              VG(!0)
            }
          })
        })]
      })
    }

    function AG(GG) {
      let {
        value: bG,
        placeholder: ZG,
        ariaLabel: SG,
        maxLength: LG,
        wide: yG = !1,
        onSave: kG
      } = GG;
      const UG = (0, wG.useRef)(null),
        [YG, VG] = (0, wG.useState)(0),
        pG = (0, wG.useRef)(!0),
        QG = (0, wG.useRef)(null),
        KG = (0, wG.useRef)({
          value: bG,
          onSave: kG
        });
      KG.current = {
        value: bG,
        onSave: kG
      };
      const hG = () => {
        const GG = QG.current;
        QG.current = null, null !== GG && GG !== KG.current.value && KG.current.onSave(GG).then((() => {
          pG.current && VG((GG => GG + 1))
        }))
      };
      return (0, wG.useEffect)((() => {
        null === QG.current && UG.current && (UG.current.value = bG)
      }), [bG, YG]), (0, wG.useEffect)((() => () => {
        pG.current = !1, hG()
      }), []), (0, jG.jsx)("div", {
        className: fG()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: yG
        }),
        onBlur: hG,
        children: (0, jG.jsx)(lG.b, {
          domRef: UG,
          defaultValue: bG,
          placeholderText: ZG,
          ariaLabel: SG,
          maxLength: LG,
          onValueChange: GG => {
            QG.current = GG
          },
          onEnter: hG
        })
      })
    }
    const sG = ["mod", "coOwner"],
      qG = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function nG(GG) {
      var bG, ZG, LG;
      let {
        name: yG,
        place: kG,
        openedIn: UG,
        isYou: YG,
        manage: pG,
        hiddenNames: fG,
        zIndex: hG
      } = GG;
      const {
        t: dG,
        selectedLanguage: JG
      } = (0, QG.w)(), [rG, zG] = (0, wG.useState)(null), {
        state: oG
      } = pG, XG = `player:${yG}`, uG = function(GG, bG) {
        if ("banned" === GG.section) return {
          ...iG,
          unban: !0
        };
        if ("gone" === GG.section) return iG;
        const {
          player: ZG
        } = GG, wG = "here" === GG.section, SG = wG || "none" !== ZG.role ? ZG.can.roles : [];
        return {
          gamemode: wG && bG && null !== ZG.gamemode && ZG.can.gamemode,
          roles: SG,
          fixedRole: 0 === SG.length && "none" !== ZG.role ? ZG.role : null,
          kick: wG && ZG.can.kick,
          ban: ZG.can.ban,
          unban: !1
        }
      }(kG, null !== oG.gamemodes), FG = pG.statusOf(XG), cG = pG.isPending(XG), lG = VG(), MG = Date.now(), AG = GG => {
        var bG, ZG;
        return null !== (bG = null === (ZG = (GG => oG.roles.find((bG => bG.role === GG)))(GG)) || void 0 === ZG ? void 0 : ZG.label) && void 0 !== bG ? bG : GG
      }, nG = GG => {
        const bG = qG[GG];
        return void 0 === bG ? void 0 : dG(bG)
      }, gG = "here" === kG.section || "away" === kG.section ? kG.player : null, eG = "here" === kG.section ? kG.player.id : null, {
        playerSocialPreview: RG,
        isFriend: TG
      } = null === eG ? {
        playerSocialPreview: (0, mG.f)(yG, null),
        isFriend: !1
      } : (0, WG.c)(eG, yG), HG = function() {
        pG.send(...arguments)
      }, tG = (GG, bG) => {
        lG.hold("role", GG, pG.send({
          type: "setRole",
          name: yG,
          role: GG
        }, XG, bG))
      };
      let DG = null;
      if ("ban" === (null === rG || void 0 === rG ? void 0 : rG.kind)) DG = dG("lobbyManageEntry:banConfirm", {
        playerName: yG
      });
      else if ("role" === (null === rG || void 0 === rG ? void 0 : rG.kind)) {
        var NG;
        DG = `${dG("lobbyManage:roleConfirm",{playerName:yG,role:AG(rG.role)})} ${null!==(NG=nG(rG.role))&&void 0!==NG?NG:""}`
      } else if (FG) DG = (0, jG.jsx)(PG, {
        status: FG
      });
      else if (YG) DG = dG("lobbyManage:you");
      else if ("here" === kG.section) "none" === kG.player.role && MG - kG.player.at < 6e5 && (DG = aG(dG, JG.code, "lobbyManage:joinedAgo", kG.player.at, MG));
      else if ("away" === kG.section) {
        if (kG.player.at > 0) {
          const GG = "kicked" === kG.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          DG = aG(dG, JG.code, GG, kG.player.at, MG)
        }
      } else "banned" === kG.section ? null !== kG.bannedAt && (DG = aG(dG, JG.code, "lobbyManage:bannedAgo", kG.bannedAt, MG)) : "banned" === UG && (DG = dG("lobbyManageEntry:unbanned"));
      return (0, jG.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": yG,
        children: (0, jG.jsxs)(CG.h, {
          playerSocialPreview: RG,
          isFriend: TG,
          status: DG,
          opensProfileCard: !YG && (0, WG.f)(!0, yG, fG),
          zIndex: hG,
          children: [null !== rG && (0, jG.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === rG.kind && (0, jG.jsxs)(EG.C, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                zG(null), HG({
                  type: "ban",
                  name: yG
                }, XG)
              },
              children: [(0, jG.jsx)(KG.c, {
                name: "gavel"
              }), (0, jG.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: dG("lobbyManageEntry:ban")
              })]
            }), "role" === rG.kind && (0, jG.jsx)(EG.d, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: rG.role
              },
              onClick: () => {
                zG(null), tG(rG.role)
              },
              children: dG("lobbyManage:makeRole", {
                role: AG(rG.role)
              })
            }), (0, jG.jsx)(EG.h, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                zG(null)
              },
              children: dG("general:cancel")
            })]
          }), null === rG && (0, jG.jsxs)(jG.Fragment, {
            children: [(0, jG.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [uG.gamemode && null !== gG && (0, jG.jsx)(IG.b, {
                options: (null !== (bG = oG.gamemodes) && void 0 !== bG ? bG : []).map((GG => ({
                  value: GG.value,
                  label: vG(dG, GG.label, fG)
                }))),
                value: null !== (ZG = lG.get("gamemode")) && void 0 !== ZG ? ZG : gG.gamemode,
                disabled: cG,
                onChange: GG => {
                  (0, SG.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: GG.value
                  }), lG.hold("gamemode", GG.value, pG.send({
                    type: "setGamemode",
                    name: yG,
                    gamemode: GG.value
                  }, XG))
                }
              }), uG.roles.length > 0 && null !== gG && (0, jG.jsx)(IG.b, {
                options: [...oG.roles].reverse().filter((GG => uG.roles.includes(GG.role))).map((GG => ({
                  value: GG.role,
                  label: GG.label
                }))),
                value: null !== (LG = lG.get("role")) && void 0 !== LG ? LG : gG.role,
                disabled: cG,
                onChange: GG => {
                  var bG;
                  (bG = GG.value) !== (null === gG || void 0 === gG ? void 0 : gG.role) && (sG.includes(bG) ? zG({
                    kind: "role",
                    role: bG
                  }) : ((0, SG.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: bG
                  }), tG(bG, nG(bG))))
                }
              }), null !== uG.fixedRole && (0, jG.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: AG(uG.fixedRole)
              })]
            }), (0, jG.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [uG.kick && (0, jG.jsxs)(EG.h, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${dG("lobbyManageEntry:kick")} ${yG}`,
                disabled: cG,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  HG({
                    type: "kick",
                    name: yG
                  }, XG)
                },
                children: [(0, jG.jsx)(KG.c, {
                  name: "person-falling-burst"
                }), (0, jG.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: dG("lobbyManageEntry:kick")
                })]
              }), uG.ban && (0, jG.jsxs)(EG.E, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${dG("lobbyManageEntry:ban")} ${yG}`,
                disabled: cG,
                padDestructive: !0,
                onClick: () => {
                  zG({
                    kind: "ban"
                  })
                },
                children: [(0, jG.jsx)(KG.c, {
                  name: "gavel"
                }), (0, jG.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: dG("lobbyManageEntry:ban")
                })]
              }), uG.unban && (0, jG.jsxs)(EG.h, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${dG("lobbyManageEntry:unban")} ${yG}`,
                disabled: cG,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  HG({
                    type: "unban",
                    name: yG
                  }, XG)
                },
                children: [(0, jG.jsx)(KG.c, {
                  name: "user-unlock"
                }), (0, jG.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: dG("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function gG(GG) {
      var bG, ZG, SG, LG;
      let {
        manage: yG,
        focusRequest: kG,
        onFocused: UG
      } = GG;
      const {
        t: YG
      } = (0, QG.w)(), VG = (0, zG.f)("players"), pG = (0, zG.f)("hiddenPlayerNames"), fG = (0, wG.useRef)(null), {
        state: hG
      } = yG, JG = null === VG.localId ? null : null !== (bG = null === (ZG = VG.byId[VG.localId]) || void 0 === ZG ? void 0 : ZG.name) && void 0 !== bG ? bG : null, [rG] = (0, wG.useState)((() => XG(hG, JG))), oG = function(GG, bG, ZG) {
        const wG = new Set([...GG.here, ...GG.away, ...GG.banned]),
          SG = XG(bG, ZG),
          LG = bG => {
            const ZG = SG[bG].filter((GG => !wG.has(GG)));
            for (const GG of ZG) wG.add(GG);
            return [...GG[bG], ...ZG]
          };
        return {
          here: LG("here"),
          away: LG("away"),
          banned: LG("banned")
        }
      }(rG, hG, JG), [iG, CG] = (0, wG.useState)(!1), WG = function(GG, bG) {
        return GG.here.filter((GG => GG.name !== bG && "none" === GG.role && GG.can.kick)).length
      }(hG, JG), mG = yG.statusOf("kickAll");
      (0, wG.useEffect)((() => {
        var GG, bG;
        if (null === kG) return;
        const ZG = null === (GG = fG.current) || void 0 === GG ? void 0 : GG.querySelector(`[data-lobby-manage-row="${CSS.escape(kG.name)}"]`);
        null === ZG || void 0 === ZG || ZG.scrollIntoView({
          block: "center"
        }), null === ZG || void 0 === ZG || null === (bG = ZG.querySelector(".ProfilePreview")) || void 0 === bG || bG.focus({
          preventScroll: !0
        }), UG(kG.seq)
      }), [null === kG || void 0 === kG ? void 0 : kG.seq]);
      const IG = GG => (bG, ZG) => (0, jG.jsx)(nG, {
        name: bG,
        place: uG(hG, bG),
        openedIn: GG,
        isYou: bG === JG,
        manage: yG,
        hiddenNames: pG,
        zIndex: ZG
      }, bG);
      return (0, jG.jsxs)("div", {
        ref: fG,
        className: "LobbyManagePage",
        children: [oG.here.length > 0 && (0, jG.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, jG.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, jG.jsx)(dG.e, {
              label: YG("lobbyManage:here"),
              meta: hG.here.length
            }), WG >= 2 && !iG && (0, jG.jsxs)(EG.E, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: yG.isPending("kickAll"),
              onClick: () => {
                CG(!0)
              },
              children: [(0, jG.jsx)(KG.c, {
                name: "person-falling-burst"
              }), " ", YG("lobbyManage:kickAll")]
            })]
          }), iG && WG >= 2 && (0, jG.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, jG.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: YG("lobbyManage:kickAllConfirm", {
                count: WG
              })
            }), (0, jG.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, jG.jsx)(EG.C, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  CG(!1), yG.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: YG("lobbyManage:kickAll")
              }), (0, jG.jsx)(EG.h, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  CG(!1)
                },
                children: YG("general:cancel")
              })]
            })]
          }), mG && (0, jG.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, jG.jsx)(PG, {
              status: mG
            })
          }), (0, jG.jsx)(MG, {
            names: oG.here,
            cap: oG.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: IG("here")
          })]
        }), oG.away.length > 0 && (0, jG.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, jG.jsx)(dG.e, {
            label: YG("lobbyManage:notHere"),
            meta: oG.away.length
          }), (0, jG.jsx)(MG, {
            names: oG.away,
            cap: 5,
            filterFrom: null,
            moreLabel: YG("lobbyManage:allCount", {
              count: oG.away.length
            }),
            reveal: null !== (SG = null === kG || void 0 === kG ? void 0 : kG.name) && void 0 !== SG ? SG : null,
            renderRow: IG("away")
          })]
        }), oG.banned.length > 0 && (0, jG.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, jG.jsx)(dG.e, {
            label: YG("lobbyManage:banned"),
            meta: oG.banned.length
          }), (0, jG.jsx)(MG, {
            names: oG.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: YG("lobbyManage:allCount", {
              count: oG.banned.length
            }),
            reveal: null !== (LG = null === kG || void 0 === kG ? void 0 : kG.name) && void 0 !== LG ? LG : null,
            renderRow: IG("banned")
          })]
        })]
      })
    }
    var eG = ZG(4655),
      RG = ZG(1583),
      TG = ZG(37055),
      HG = ZG(37071),
      tG = ZG(37067),
      DG = ZG(37060),
      NG = ZG(37093),
      OG = ZG(37086),
      xG = ZG(37089);

    function BG(GG) {
      const bG = new Set;
      for (const ZG of GG) bG.add(ZG.toLowerCase());
      return bG
    }

    function Gb(GG) {
      var bG, ZG;
      let {
        state: SG,
        lobbyName: LG,
        listed: yG,
        isListed: kG,
        gJ: UG,
        Kr: YG,
        statusOf: VG
      } = GG;
      const {
        t: pG,
        selectedLanguage: fG
      } = (0, QG.w)(), KG = (0, RG.k)(), hG = (0, zG.f)("players"), JG = null === hG.localId ? null : null !== (bG = null === (ZG = hG.byId[hG.localId]) || void 0 === ZG ? void 0 : ZG.name) && void 0 !== bG ? bG : null, rG = (0, wG.useMemo)((() => (0, DG.d)(KG.friends, LG, SG.here.map((GG => GG.name)))), [KG.friends, LG, SG.here]), EG = new Map(rG.map((GG => [GG.friend.name.toLowerCase(), GG]))), oG = function(GG) {
        let {
          refused: bG,
          listed: ZG,
          here: wG,
          friends: SG,
          excluded: LG
        } = GG;
        const yG = BG(LG),
          kG = GG => GG.filter((GG => {
            const bG = GG.toLowerCase();
            return !yG.has(bG) && (yG.add(bG), !0)
          }));
        return {
          added: [],
          refused: kG(bG),
          listed: kG(ZG),
          suggested: kG([...wG, ...SG])
        }
      }({
        refused: SG.refused.map((GG => GG.name)),
        listed: yG,
        here: SG.here.map((GG => GG.name)),
        friends: rG.flatMap((GG => "here" === GG.place ? [] : [GG.friend.name])),
        excluded: [...null === JG ? [] : [JG], ...[...SG.here, ...SG.away].flatMap((GG => "none" === GG.role || (0, DG.e)(yG, GG.name) ? [] : [GG.name]))]
      }), [XG] = (0, wG.useState)(oG), [uG, iG] = (0, wG.useState)([]), CG = function(GG, bG, ZG) {
        const wG = BG(ZG),
          SG = BG([...ZG, ...GG.refused, ...GG.listed, ...GG.suggested]),
          LG = ZG => [...GG[ZG].filter((GG => !wG.has(GG.toLowerCase()))), ...bG[ZG].filter((GG => {
            const bG = GG.toLowerCase();
            return !SG.has(bG) && (SG.add(bG), !0)
          }))];
        return {
          added: [...ZG],
          refused: LG("refused"),
          listed: LG("listed"),
          suggested: LG("suggested")
        }
      }(XG, oG, uG), IG = (GG, bG) => {
        var ZG, wG;
        const LG = GG.toLowerCase(),
          yG = EG.get(LG),
          YG = SG.here.find((GG => GG.name.toLowerCase() === LG)),
          QG = SG.refused.find((GG => GG.name.toLowerCase() === LG)),
          KG = null !== (ZG = null === VG || void 0 === VG ? void 0 : VG(GG)) && void 0 !== ZG ? ZG : null;
        let hG = null;
        KG ? hG = (0, jG.jsx)(PG, {
          status: KG
        }) : QG ? hG = aG(pG, fG.code, "lobbyManage:triedToJoinAgo", QG.at, Date.now()) : yG && YG ? hG = pG("lobbyManage:friendHere") : yG ? hG = "online" === yG.place ? pG("lobbyManage:friendOnline") : pG("lobbyManage:friend") : YG && (hG = pG("lobbyManage:hereStatus"));
        let dG = null !== (wG = null === yG || void 0 === yG ? void 0 : yG.friend) && void 0 !== wG ? wG : (0, mG.f)(GG, null);
        return !yG && null !== YG && void 0 !== YG && YG.id && (dG = (0, WG.c)(YG.id, YG.name).playerSocialPreview), (0, jG.jsx)(OG.b, {
          playerSocialPreview: dG,
          isFriend: void 0 !== yG,
          hideFriendBadge: !0,
          status: hG,
          zIndex: bG,
          Tp: {
            on: kG(GG),
            onChange: bG => {
              UG(GG, bG)
            }
          }
        }, LG)
      }, FG = [...CG.added, ...CG.refused];
      return (0, jG.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, jG.jsx)(dG.e, {
          label: pG("worldSocial:whitelist"),
          meta: yG.length
        }), (0, jG.jsx)(xG.b, {
          label: pG("lobbyManage:add"),
          icon: "user-check",
          placeholder: pG("socialBar:enterPlayerName"),
          onSubmit: async GG => {
            const bG = await YG(GG);
            return bG.ok && iG((bG => [GG, ...bG])), bG
          }
        }), FG.length > 0 && (0, jG.jsx)("div", {
          className: "PlayerRows",
          children: FG.map(((GG, bG) => IG(GG, FG.length - bG)))
        }), (0, jG.jsx)(MG, {
          names: CG.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: pG("lobbyManage:allOnWhitelist", {
            count: CG.listed.length
          }),
          renderRow: IG
        }), (0, jG.jsx)(MG, {
          names: CG.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: pG("lobbyManage:allCount", {
            count: CG.suggested.length
          }),
          renderRow: IG
        })]
      })
    }

    function bb(GG) {
      let {
        manage: bG,
        listing: ZG
      } = GG;
      const {
        t: wG
      } = (0, QG.w)(), LG = (GG, ZG) => ((0, SG.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: GG
      }), bG.send({
        type: "setListing",
        field: GG,
        value: ZG
      }, `listing:${GG}`)), yG = GG => {
        const ZG = bG.statusOf(`listing:${GG}`);
        return ZG && !ZG.ok && (0, jG.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, jG.jsx)(PG, {
            status: ZG
          })
        })
      };
      return (0, jG.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, jG.jsx)(dG.e, {
          label: wG("lobbyManage:inWorldsList")
        }), (0, jG.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, jG.jsx)("div", {
            className: "SliderText",
            children: wG("lobbyManage:description")
          }), (0, jG.jsx)(AG, {
            value: ZG.description,
            ariaLabel: wG("lobbyManage:description"),
            wide: !0,
            onSave: GG => LG("description", GG)
          })]
        }), yG("description"), (0, jG.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, jG.jsx)("div", {
            className: "SliderText",
            children: wG("lobbyManage:emojis")
          }), (0, jG.jsx)(AG, {
            value: ZG.emojis,
            ariaLabel: wG("lobbyManage:emojis"),
            onSave: GG => LG("emojis", GG)
          })]
        }), yG("emojis"), (0, jG.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, jG.jsx)("div", {
            className: "SliderText",
            children: wG("lobbyManage:colour")
          }), (0, jG.jsx)(Zb, {
            value: ZG.colour,
            ariaLabel: wG("lobbyManage:colour"),
            onSave: GG => {
              LG("colour", GG)
            }
          })]
        }), yG("colour")]
      })
    }

    function Zb(GG) {
      let {
        value: bG,
        ariaLabel: ZG,
        onSave: SG
      } = GG;
      const LG = (0, wG.useRef)(null),
        yG = (0, wG.useRef)({
          value: bG,
          onSave: SG
        });
      yG.current = {
        value: bG,
        onSave: SG
      };
      const kG = (0, wG.useRef)(null),
        UG = (0, wG.useRef)(!1),
        YG = GG => {
          UG.current && GG.value !== yG.current.value && GG.value !== kG.current && (kG.current = GG.value, yG.current.onSave(GG.value))
        };
      return (0, wG.useEffect)((() => {
        LG.current && document.activeElement !== LG.current && (LG.current.value = bG)
      }), [bG]), (0, wG.useEffect)((() => {
        const GG = LG.current,
          bG = () => {
            YG(GG)
          };
        return GG.addEventListener("change", bG), () => {
          GG.removeEventListener("change", bG), YG(GG)
        }
      }), []), (0, jG.jsx)("input", {
        ref: LG,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: bG,
        "aria-label": ZG,
        onInput: () => {
          UG.current = !0
        },
        onBlur: GG => {
          YG(GG.currentTarget)
        }
      })
    }

    function wb(GG) {
      let {
        manage: bG
      } = GG;
      const {
        lobbyName: ZG,
        shownLobbyName: wG
      } = (0, zG.f)("connectedGame");
      return bG.state.you.canSetVisibility && null !== ZG ? (0, jG.jsx)(Lb, {
        manage: bG,
        lobbyName: ZG,
        worldCode: null !== wG && void 0 !== wG ? wG : ZG
      }, ZG) : (0, jG.jsx)(yb, {
        manage: bG,
        lobbyName: null !== ZG && void 0 !== ZG ? ZG : ""
      })
    }

    function Sb(GG) {
      return GG.map((GG => GG.toLowerCase())).sort().join(",")
    }

    function Lb(GG) {
      var bG;
      let {
        manage: ZG,
        lobbyName: LG,
        worldCode: yG
      } = GG;
      const {
        t: kG
      } = (0, QG.w)(), {
        settings: UG,
        loading: YG,
        change: VG,
        retry: pG,
        refresh: fG
      } = (0, TG.j)(LG), KG = (0, RG.k)(), {
        state: JG
      } = ZG, rG = (0, wG.useRef)(UG);
      rG.current = UG;
      const zG = Sb(null !== (bG = JG.whitelist) && void 0 !== bG ? bG : []),
        oG = null !== JG.whitelist;
      (0, wG.useEffect)((() => {
        const GG = rG.current;
        null !== GG && (GG.visibility !== JG.visibility || oG && Sb(GG.whitelist) !== zG) && fG()
      }), [JG.visibility, zG, oG, fG]);
      const XG = async (GG, bG) => {
        let ZG = null;
        return await VG(GG, bG, {
          quiet: !0,
          onAnswer: GG => {
            ZG = GG
          }
        }), ZG
      }, uG = (GG, bG) => {
        null !== bG && "error" in bG && ZG.showStatus(GG, {
          ok: !1,
          text: [kG(bG.error)]
        })
      }, iG = async GG => {
        if (null === UG || GG === UG.visibility) return;
        (0, SG.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: GG
        });
        const bG = "whitelist" === GG ? (0, DG.c)((0, DG.d)(KG.friends, LG, JG.here.map((GG => GG.name))), (0, NG.e)(LG), UG.whitelist) : [],
          ZG = await XG({
            setVisibility: GG
          }, (bG => ({
            ...bG,
            visibility: GG
          })));
        uG("mode", ZG), null === ZG || "error" in ZG || await (async GG => {
          for (const bG of (0, DG.f)(GG, eG.B))
            if (!await VG({
                whitelistAdd: bG
              }, (GG => (0, DG.k)(GG, bG, !0)))) return !1;
          return !0
        })(bG)
      }, CG = (0, wG.useMemo)((() => {
        var GG;
        if (null === UG) return [];
        const bG = null !== (GG = JG.whitelist) && void 0 !== GG ? GG : [];
        return [...bG.filter((GG => (0, DG.e)(UG.whitelist, GG))), ...UG.whitelist.filter((GG => !(0, DG.e)(bG, GG)))]
      }), [UG, JG.whitelist]), WG = ZG.statusOf("mode");
      return (0, jG.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, jG.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, jG.jsx)(dG.e, {
            label: kG("worldSocial:whoCanJoin")
          }), null === UG && YG && (0, jG.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, jG.jsx)(hG.b, {})
          }), null === UG && !YG && (0, jG.jsx)(EG.h, {
            className: "SmallTextLight",
            onClick: pG,
            children: kG("worldSocial:loadFailed")
          }), null !== UG && (0, jG.jsx)(HG.c, {
            visibility: UG.visibility,
            onPick: GG => {
              iG(GG)
            }
          }), WG && (0, jG.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, jG.jsx)(PG, {
              status: WG
            })
          }), null !== UG && "private" !== UG.visibility && (0, jG.jsx)(tG.d, {
            worldCode: yG,
            message: null
          })]
        }), "whitelist" === (null === UG || void 0 === UG ? void 0 : UG.visibility) && (0, jG.jsx)(Gb, {
          state: JG,
          lobbyName: LG,
          listed: CG,
          isListed: GG => (0, DG.e)(UG.whitelist, GG),
          gJ: (GG, bG) => {
            (0, SG.reportAnalyticsClick)(bG ? {
              id: "lobby_manage.whitelist_add",
              value: "Tp"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), XG(bG ? {
              whitelistAdd: [GG]
            } : {
              whitelistRemove: GG
            }, (ZG => (0, DG.k)(ZG, [GG], bG))).then((bG => {
              uG(`whitelist:${GG.toLowerCase()}`, bG)
            }))
          },
          Kr: async GG => {
            (0, SG.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const bG = await XG({
              whitelistAdd: [GG]
            }, (bG => (0, DG.k)(bG, [GG], !0)));
            return null === bG ? {
              ok: !1,
              error: kG("worldSocial:changeFailed")
            } : "error" in bG ? {
              ok: !1,
              error: kG(bG.error)
            } : (0, DG.e)(bG.notFound, GG) ? {
              ok: !1,
              error: kG("lobbyManage:noPlayerCalled", {
                playerName: GG
              })
            } : {
              ok: !0
            }
          },
          statusOf: GG => ZG.statusOf(`whitelist:${GG.toLowerCase()}`)
        }), "public" === (null === UG || void 0 === UG ? void 0 : UG.visibility) && null !== JG.listing && (0, jG.jsx)(bb, {
          manage: ZG,
          listing: JG.listing
        })]
      })
    }

    function yb(GG) {
      var bG;
      let {
        manage: ZG,
        lobbyName: wG
      } = GG;
      const {
        t: LG
      } = (0, QG.w)(), {
        state: yG
      } = ZG, kG = VG(), UG = null !== (bG = yG.whitelist) && void 0 !== bG ? bG : [];
      return (0, jG.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, jG.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, jG.jsx)(dG.e, {
            label: LG("worldSocial:whoCanJoin")
          }), (0, jG.jsx)("div", {
            className: "LobbyManageModeText",
            children: LG(`worldSocial:${yG.visibility}`)
          })]
        }), "whitelist" === yG.visibility && yG.you.canEditWhitelist && (0, jG.jsx)(Gb, {
          state: yG,
          lobbyName: wG,
          listed: UG,
          isListed: GG => {
            var bG;
            return null !== (bG = kG.get(GG.toLowerCase())) && void 0 !== bG ? bG : (0, DG.e)(UG, GG)
          },
          gJ: (GG, bG) => {
            (0, SG.reportAnalyticsClick)(bG ? {
              id: "lobby_manage.whitelist_add",
              value: "Tp"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const wG = GG.toLowerCase();
            kG.hold(wG, bG, ZG.send(bG ? {
              type: "whitelistAdd",
              names: [GG]
            } : {
              type: "whitelistRemove",
              name: GG
            }, `whitelist:${wG}`))
          },
          Kr: async GG => {
            (0, SG.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const bG = await ZG.send({
              type: "whitelistAdd",
              names: [GG]
            }, "whitelist-field");
            return bG.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, jG.jsx)(cG.c, {
                text: bG.message
              })
            }
          },
          statusOf: GG => ZG.statusOf(`whitelist:${GG.toLowerCase()}`)
        }), "public" === yG.visibility && null !== yG.listing && (0, jG.jsx)(bb, {
          manage: ZG,
          listing: yG.listing
        })]
      })
    }
    var kb = ZG(5019),
      Ub = ZG(1320);
    const Yb = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const Vb = (0, wG.memo)((function(GG) {
      var bG;
      let {
        rule: ZG,
        value: wG,
        status: SG,
        pending: LG,
        hiddenNames: yG,
        mC: kG,
        onAction: UG
      } = GG;
      const {
        t: YG
      } = (0, QG.w)(), VG = GG => kG(ZG, GG), pG = (GG, bG) => {
        UG(ZG, GG, bG)
      }, fG = vG(YG, ZG.label, yG), KG = ZG.info ? vG(YG, ZG.info, yG) : void 0, hG = ZG.placeholder ? vG(YG, ZG.placeholder, yG) : void 0, dG = (null !== (bG = ZG.options) && void 0 !== bG ? bG : []).map((GG => ({
        value: GG.value,
        label: vG(YG, GG.label, yG)
      }))), JG = Math.max(0, ...dG.map((GG => function(GG) {
        let bG = 0;
        for (const ZG of GG) bG += Yb.test(ZG) ? 2 : 1;
        return bG
      }(GG.label)))), rG = SG && (0, jG.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, jG.jsx)(PG, {
          status: SG
        })
      }), zG = (0, jG.jsxs)("div", {
        className: "SliderText",
        children: [fG, void 0 !== KG && (0, jG.jsx)(Ub.d, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: KG
        })]
      });
      return "toggle" === ZG.kind ? (0, jG.jsxs)(jG.Fragment, {
        children: [(0, jG.jsx)(kb.c, {
          label: fG,
          checked: !0 === wG,
          circleInfoText: KG,
          disabled: LG,
          onClick: VG
        }), rG]
      }) : "choice" === ZG.kind && dG.length <= 3 ? (0, jG.jsxs)(jG.Fragment, {
        children: [(0, jG.jsx)(kb.e, {
          label: fG,
          options: dG,
          value: String(wG),
          circleInfoText: KG,
          onChange: VG
        }), rG]
      }) : (0, jG.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [zG, "choice" === ZG.kind && (0, jG.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": JG
          },
          children: (0, jG.jsx)(IG.b, {
            options: dG,
            value: String(wG),
            disabled: LG,
            onChange: GG => {
              VG(GG.value)
            }
          })
        }), ("number" === ZG.kind || "text" === ZG.kind) && (0, jG.jsx)(AG, {
          value: null === wG ? "" : String(wG),
          placeholder: hG,
          ariaLabel: fG,
          onSave: GG => {
            const bG = GG.trim(),
              wG = Number(bG);
            return VG("number" === ZG.kind && "" !== bG && Number.isFinite(wG) ? wG : bG)
          }
        }), "action" === ZG.kind && (0, jG.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [dG.length > 3 && (0, jG.jsx)(IG.b, {
            options: dG,
            value: {
              value: "",
              label: null !== hG && void 0 !== hG ? hG : fG
            },
            disabled: LG,
            onChange: GG => {
              pG(GG.value)
            }
          }), dG.length > 0 && dG.length <= 3 && dG.map((GG => (0, jG.jsx)(EG.h, {
            className: "SmallTextLight",
            disabled: LG,
            onClick: () => {
              pG(GG.value)
            },
            children: GG.label
          }, GG.value))), 0 === dG.length && (0, jG.jsx)(EG.h, {
            className: "SmallTextLight",
            disabled: LG,
            onClick: () => {
              pG()
            },
            children: null !== hG && void 0 !== hG ? hG : fG
          })]
        }), "names" === ZG.kind && (0, jG.jsx)(pb, {
          names: Array.isArray(wG) ? wG : [],
          pending: LG,
          onAction: pG
        }), rG]
      })
    }));

    function pb(GG) {
      let {
        names: bG,
        pending: ZG,
        onAction: SG
      } = GG;
      const {
        t: LG
      } = (0, QG.w)(), yG = (0, wG.useRef)(null), [kG, UG] = (0, wG.useState)(""), YG = () => {
        const GG = kG.trim();
        "" !== GG && (SG(GG, "add"), yG.current && (yG.current.value = ""), UG(""))
      };
      return (0, jG.jsxs)("div", {
        className: "LobbyManageNames",
        children: [bG.map((GG => (0, jG.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, jG.jsx)("span", {
            className: "LobbyManageNameText",
            children: GG
          }), (0, jG.jsx)(EG.h, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: LG("lobbyManage:removeName", {
              name: GG
            }),
            disabled: ZG,
            onClick: () => {
              SG(GG, "remove")
            },
            children: (0, jG.jsx)(KG.c, {
              name: "xmark"
            })
          })]
        }, GG))), (0, jG.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, jG.jsx)(lG.b, {
            domRef: yG,
            placeholderText: LG("lobbyManage:namePlaceholder"),
            ariaLabel: LG("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: GG => {
              UG(GG)
            },
            onEnter: YG
          }), (0, jG.jsx)(EG.h, {
            className: "SmallTextLight",
            disabled: ZG || "" === kG.trim(),
            onClick: YG,
            children: LG("lobbyManage:addHere")
          })]
        })]
      })
    }
    const fb = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function Qb(GG, bG) {
      return fb.map((ZG => {
        let {
          group: wG,
          title: SG
        } = ZG;
        const LG = GG.filter((GG => GG.group === wG && void 0 === GG.parent)).map((ZG => {
          const wG = !0 === bG(ZG) ? GG.filter((GG => GG.parent === ZG.key)) : [];
          return {
            rule: ZG,
            children: wG
          }
        }));
        return {
          group: wG,
          title: SG,
          items: LG
        }
      }))
    }

    function Kb(GG) {
      return GG.flatMap((GG => {
        let {
          items: bG
        } = GG;
        return bG.flatMap((GG => {
          let {
            rule: bG,
            children: ZG
          } = GG;
          return [bG, ...ZG]
        }))
      }))
    }

    function hb(GG) {
      let {
        manage: bG,
        rowsShown: ZG
      } = GG;
      const {
        t: LG
      } = (0, QG.w)(), yG = (0, zG.f)("hiddenPlayerNames"), {
        rules: kG
      } = bG.state, UG = VG(), YG = GG => {
        const bG = UG.get(GG.key);
        return void 0 === bG ? GG.value : bG
      }, pG = Qb(kG, YG), [fG] = (0, wG.useState)((() => Kb(pG).map((GG => GG.key)))), KG = ZG === 1 / 0 ? null : new Set(fG.slice(0, ZG)), hG = GG => null === KG || KG.has(GG.key), {
        hold: JG
      } = UG, rG = (0, wG.useCallback)(((GG, ZG) => {
        (0, SG.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: GG.key
        });
        const wG = bG.send({
          type: "setRule",
          key: GG.key,
          value: ZG
        }, `rule:${GG.key}`);
        return JG(GG.key, ZG, wG), wG
      }), [bG, JG]), EG = (0, wG.useCallback)(((GG, ZG, wG) => {
        (0, SG.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: GG.key
        }), bG.send({
          type: "ruleAction",
          key: GG.key,
          ...void 0 === ZG ? {} : {
            arg: ZG
          },
          ...void 0 === wG ? {} : {
            op: wG
          }
        }, `rule:${GG.key}`, void 0 === wG ? LG("lobbyManage:setJustNow") : void 0)
      }), [bG, LG]), oG = GG => {
        const ZG = `rule:${GG.key}`;
        return (0, jG.jsx)(Vb, {
          rule: GG,
          value: YG(GG),
          status: bG.statusOf(ZG),
          pending: bG.isPending(ZG),
          hiddenNames: yG,
          mC: rG,
          onAction: EG
        }, GG.key)
      };
      return (0, jG.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: pG.map((GG => {
          let {
            group: bG,
            title: ZG,
            items: SG
          } = GG;
          const yG = SG.filter((GG => {
            let {
              rule: bG
            } = GG;
            return hG(bG)
          }));
          return 0 === yG.length ? null : (0, jG.jsxs)(wG.Fragment, {
            children: [(0, jG.jsx)(dG.e, {
              label: LG(ZG)
            }), yG.map((GG => {
              let {
                rule: bG,
                children: ZG
              } = GG;
              return 0 === ZG.length ? oG(bG) : (0, jG.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [oG(bG), ZG.filter(hG).map(oG)]
              }, bG.key)
            }))]
          }, bG)
        }))
      })
    }
    const db = {
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
      Jb = 5,
      rb = (0, wG.memo)((function(GG) {
        let {
          page: bG,
          manage: ZG,
          leaderboard: SG,
          focusRequest: LG,
          onFocused: yG,
          ruleRowsShown: kG
        } = GG;
        return "leaderboard" === bG ? (0, jG.jsx)(wG.Suspense, {
          fallback: (0, jG.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, jG.jsx)(hG.b, {})
          }),
          children: SG
        }) : "joining" === bG ? (0, jG.jsx)(wb, {
          manage: ZG
        }) : "rules" === bG ? (0, jG.jsx)(hb, {
          manage: ZG,
          rowsShown: kG
        }) : (0, jG.jsx)(gG, {
          manage: ZG,
          focusRequest: LG,
          onFocused: yG
        })
      }));

    function zb(GG) {
      let {
        page: bG
      } = GG;
      const {
        t: ZG
      } = (0, QG.w)(), wG = db[bG];
      return (0, jG.jsxs)(jG.Fragment, {
        children: [(0, jG.jsx)(KG.c, {
          name: wG.icon
        }), " ", (0, jG.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: ZG(wG.title)
        })]
      })
    }

    function Eb(GG) {
      var bG;
      const {
        t: ZG
      } = (0, QG.w)(), {
        pages: LG,
        landing: yG
      } = GG, UG = (0, wG.useRef)(null), YG = (0, wG.useRef)(null), VG = (0, wG.useRef)(null), pG = (0, wG.useRef)(new Map), [KG, hG] = (0, wG.useState)(null), zG = (0, wG.useRef)(KG), EG = (0, wG.useRef)(0), [oG, XG] = (0, wG.useState)(LG[0]), uG = null !== KG && void 0 !== KG ? KG : LG.includes(oG) ? oG : LG[0], [iG] = (0, wG.useState)(null !== (bG = null === yG || void 0 === yG ? void 0 : yG.page) && void 0 !== bG ? bG : null), CG = null !== iG && LG.includes(iG) ? [iG, ...LG.filter((GG => GG !== iG))] : LG, [WG] = (0, wG.useState)((() => {
        const bG = Kb(Qb(GG.manage.state.rules, (GG => GG.value)));
        return Math.max(1, Math.ceil(bG.length / Jb))
      })), mG = CG.flatMap((GG => "rules" === GG ? Array(WG).fill(GG) : [GG])), IG = function(GG, bG) {
        const [ZG, SG] = (0, wG.useState)(GG), LG = ZG >= bG;
        return LG && ZG !== 1 / 0 && SG(1 / 0), (0, wG.useLayoutEffect)((() => {
          if (LG) return;
          let GG = !0;
          return (0, rG.e)().then((() => {
            GG && SG((GG => GG + 1))
          })), () => {
            GG = !1
          }
        }), [ZG, LG]), LG ? 1 / 0 : ZG
      }(1, mG.length), FG = mG.slice(0, IG), vG = new Set(FG), aG = IG < mG.length, cG = aG ? FG.filter((GG => "rules" === GG)).length * Jb : 1 / 0, lG = (0, wG.useRef)(GG.focusRequest);
      lG.current = GG.focusRequest;
      const PG = GG => {
          zG.current = GG, hG(GG)
        },
        MG = () => {
          var GG, bG;
          UG.current.style.scrollPaddingTop = `${null!==(GG=null===(bG=VG.current)||void 0===bG?void 0:bG.offsetHeight)&&void 0!==GG?GG:0}px`
        },
        AG = GG => {
          const bG = UG.current,
            ZG = pG.current.get(GG);
          if (void 0 === ZG) return;
          const wG = document.activeElement,
            SG = lG.current,
            LG = null === SG ? null : ZG.querySelector(`[data-lobby-manage-row="${CSS.escape(SG.name)}"]`);
          MG(), wG instanceof HTMLElement && null !== LG && void 0 !== LG && LG.contains(wG) ? wG.scrollIntoView({
            block: "center"
          }) : null === ZG.previousElementSibling ? bG.scrollTop = 0 : ZG.scrollIntoView({
            block: "start"
          }), EG.current = bG.scrollTop
        },
        sG = GG => {
          (0, SG.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: GG
          }), PG(GG), AG(GG)
        },
        qG = () => {
          var GG, bG;
          const ZG = UG.current,
            wG = ZG.getBoundingClientRect().top + (null !== (GG = null === (bG = VG.current) || void 0 === bG ? void 0 : bG.offsetHeight) && void 0 !== GG ? GG : 0),
            SG = LG.map((GG => {
              var bG, ZG;
              return (null !== (bG = null === (ZG = pG.current.get(GG)) || void 0 === ZG ? void 0 : ZG.getBoundingClientRect().top) && void 0 !== bG ? bG : 1 / 0) - wG
            })),
            yG = !aG && ZG.scrollTop + ZG.clientHeight >= ZG.scrollHeight - 1;
          XG(LG[(0, kG.l)(SG, yG)])
        },
        nG = () => {
          null !== zG.current && (PG(null), qG())
        };
      (0, wG.useLayoutEffect)((() => {
        null !== yG && LG.includes(yG.page) && sG(yG.page)
      }), [null === yG || void 0 === yG ? void 0 : yG.seq]), (0, wG.useLayoutEffect)((() => {
        null === zG.current || LG.includes(zG.current) || nG()
      }));
      const {
        onFocused: gG
      } = GG, eG = (0, wG.useCallback)((GG => {
        null !== zG.current && AG(zG.current), gG(GG)
      }), [gG]);
      (0, wG.useLayoutEffect)((() => {
        const GG = zG.current;
        null !== GG && (!aG || LG.indexOf(mG[IG - 1]) < LG.indexOf(GG)) && AG(GG)
      }), [IG]), (0, wG.useEffect)((() => {
        const GG = new ResizeObserver((() => {
          null !== zG.current ? AG(zG.current) : MG()
        }));
        return GG.observe(UG.current), GG.observe(YG.current), () => {
          GG.disconnect()
        }
      }), []), (0, wG.useLayoutEffect)((() => {
        const GG = VG.current,
          bG = null === GG || void 0 === GG ? void 0 : GG.querySelector(".SegmentedToggleOptionSelected");
        bG && (GG.scrollLeft = Math.min(bG.offsetLeft, Math.max(GG.scrollLeft, bG.offsetLeft + bG.offsetWidth - GG.clientWidth)))
      }), [uG]);
      return (0, jG.jsxs)("div", {
        ref: UG,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === zG.current ? qG() : Math.abs(UG.current.scrollTop - EG.current) > 1 && nG()
        },
        onClick: GG => {
          var bG;
          null !== (bG = VG.current) && void 0 !== bG && bG.contains(GG.target) || nG()
        },
        onFocus: GG => {
          var bG;
          const ZG = null === zG.current ? null : pG.current.get(zG.current);
          !ZG || ZG.contains(GG.target) || null !== (bG = VG.current) && void 0 !== bG && bG.contains(GG.target) || nG()
        },
        children: [LG.length > 1 && (0, jG.jsx)("div", {
          ref: VG,
          className: "LobbyManageChips",
          children: (0, jG.jsx)(JG.c, {
            options: LG.map((GG => ({
              value: GG,
              label: (0, jG.jsx)(zb, {
                page: GG
              }),
              ariaLabel: ZG(db[GG].title)
            }))),
            value: uG,
            padTabs: "2",
            ariaLabel: ZG("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: sG
          })
        }), (0, jG.jsx)("div", {
          ref: YG,
          className: fG()("LobbyManageInner", {
            Staging: aG
          }),
          children: LG.filter((GG => vG.has(GG))).map((bG => {
            const ZG = bG === KG;
            return (0, jG.jsxs)("section", {
              ref: GG => {
                GG ? pG.current.set(bG, GG) : pG.current.delete(bG)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": ZG || void 0,
              children: [LG.length > 1 && (0, jG.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": ZG || void 0,
                "data-pad-unavailable": ZG || void 0,
                children: (0, jG.jsx)(dG.e, {
                  label: (0, jG.jsx)(zb, {
                    page: bG
                  })
                })
              }), (0, jG.jsx)(rb, {
                page: bG,
                manage: GG.manage,
                leaderboard: GG.leaderboard,
                focusRequest: GG.focusRequest,
                onFocused: eG,
                ruleRowsShown: "rules" === bG ? cG : 1 / 0
              })]
            }, bG)
          }))
        })]
      })
    }

    function ob(GG) {
      return void 0 === (null === GG || void 0 === GG ? void 0 : GG.page) ? null : {
        page: GG.page,
        seq: GG.seq
      }
    }

    function Xb(GG) {
      let {
        leaderboard: bG
      } = GG;
      const ZG = function() {
          const GG = (0, UG.i)("lobbyManage"),
            [bG, ZG] = (0, wG.useReducer)((GG => GG + 1), 0),
            [SG] = (0, wG.useState)((() => new YG.d(ZG)));
          return (0, wG.useEffect)((() => {
            const GG = SG.nextDeadline();
            if (null === GG) return;
            const bG = setTimeout((() => {
              SG.expire(Date.now()), ZG()
            }), Math.max(0, GG - Date.now()));
            return () => {
              clearTimeout(bG)
            }
          })), (0, wG.useMemo)((() => null === GG ? null : {
            state: GG,
            send: (GG, bG, wG) => {
              const LG = SG.send(GG, bG, null !== wG && void 0 !== wG ? wG : null);
              return ZG(), LG
            },
            statusOf: GG => SG.statusOf(GG, Date.now()),
            showStatus: (GG, bG) => {
              SG.show(GG, bG)
            },
            isPending: GG => SG.isPending(GG)
          }), [GG, bG, SG])
        }(),
        VG = (0, kG.n)((0, LG.e)()),
        pG = (0, yG.j)(),
        [fG, QG] = (0, wG.useState)((() => ob(pG))),
        [KG, hG] = (0, wG.useState)(null);
      return (0, wG.useEffect)((() => {
        null === pG && (0, SG.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, wG.useEffect)((() => {
        null !== pG && (QG((GG => (null === GG || void 0 === GG ? void 0 : GG.seq) === pG.seq ? GG : ob(pG))), void 0 !== pG.focusName && "players" === pG.page ? hG({
          name: pG.focusName,
          seq: pG.seq
        }) : (0, yG.h)(pG.seq))
      }), [null === pG || void 0 === pG ? void 0 : pG.seq]), null === ZG ? null : (0, jG.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, jG.jsx)(Eb, {
          pages: (0, kG.i)(ZG.state, VG),
          manage: ZG,
          leaderboard: bG,
          focusRequest: KG,
          onFocused: yG.h,
          landing: fG
        })
      })
    }
  },
  36911: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => VG,
      e: () => UG
    });
    var wG = ZG(1415),
      SG = ZG(1923),
      LG = ZG(1895);
    const yG = 1e4;
    let kG = 0;

    function UG(GG) {
      const bG = ++kG;
      return new Promise((ZG => {
        const kG = bG => {
            UG(), clearTimeout(YG), !1 === (null === bG || void 0 === bG ? void 0 : bG.ok) && (0, wG.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: GG.type
            }), ZG(bG)
          },
          UG = SG.c.subscribe("lobbyManage", (GG => {
            const ZG = function(GG, bG) {
              var ZG;
              return null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.results.find((GG => GG.requestId === bG))) && void 0 !== ZG ? ZG : null
            }(GG, bG);
            null !== ZG && kG(ZG)
          })),
          YG = setTimeout((() => {
            kG(null)
          }), yG);
        LG.gameBridge.send("lobbyManage", {
          ...GG,
          requestId: bG
        })
      }))
    }
    const YG = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class VG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UG;
        this.onChange = GG, this.sendAction = bG, this.pending = new Map, this.statuses = new Map
      }
      send(GG, bG, ZG) {
        var wG;
        return this.statuses.delete(bG), this.pending.set(bG, (null !== (wG = this.pending.get(bG)) && void 0 !== wG ? wG : 0) + 1), this.sendAction(GG).then((GG => {
          var wG;
          const SG = null !== GG && void 0 !== GG ? GG : {
              requestId: -1,
              ok: !1,
              message: YG
            },
            LG = (null !== (wG = this.pending.get(bG)) && void 0 !== wG ? wG : 1) - 1;
          LG > 0 ? this.pending.set(bG, LG) : this.pending.delete(bG);
          const yG = !SG.ok || SG.message.length > 0 ? SG.message : null === ZG ? null : [ZG];
          return null !== yG && this.statuses.set(bG, {
            ok: SG.ok,
            text: yG,
            until: Date.now() + 4e3
          }), this.onChange(), SG
        }))
      }
      show(GG, bG) {
        this.statuses.set(GG, {
          ...bG,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(GG) {
        for (const [bG, ZG] of this.statuses) ZG.until <= GG && this.statuses.delete(bG)
      }
      nextDeadline() {
        let GG = null;
        for (const ZG of this.statuses.values()) {
          var bG;
          GG = Math.min(null !== (bG = GG) && void 0 !== bG ? bG : 1 / 0, ZG.until)
        }
        return GG
      }
      statusOf(GG, bG) {
        const ZG = this.statuses.get(GG);
        return !ZG || ZG.until <= bG ? null : {
          ok: ZG.ok,
          text: ZG.text
        }
      }
      isPending(GG) {
        return this.pending.has(GG)
      }
    }
  },
  36898: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => YG,
      f: () => UG
    });
    var wG = ZG(580),
      SG = ZG(1895),
      LG = ZG(1583),
      yG = ZG(80),
      kG = ZG(1222);

    function UG(GG, bG, ZG) {
      return yG.featureFlags.useSocialFeatures && GG && null === (0, kG.e)(bG, ZG)
    }

    function YG(GG, bG) {
      var ZG, yG;
      const kG = LG.b.getSocialState().friends.find((GG => GG.name.toLowerCase() === bG.toLowerCase())),
        UG = SG.gameBridge.latest("players").byId[GG],
        YG = void 0 !== UG && UG.name === bG,
        VG = YG && null !== (ZG = UG.cosmetics) && void 0 !== ZG ? ZG : void 0,
        pG = kG && VG ? {
          ...kG,
          cosmetics: VG
        } : kG;
      return {
        playerSocialPreview: null !== pG && void 0 !== pG ? pG : {
          isError: !1,
          name: bG,
          ranks: YG ? [...UG.ranks] : [],
          cosmetics: null !== VG && void 0 !== VG ? VG : {},
          nameColour: null !== (yG = null === VG || void 0 === VG ? void 0 : VG.nameColour) && void 0 !== yG ? yG : wG.d,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== kG
      }
    }
  },
  37089: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => pG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(1621),
      kG = ZG(1393),
      UG = ZG(1302),
      YG = ZG(1016),
      VG = ZG(1067);

    function pG(GG) {
      let {
        label: bG,
        icon: ZG,
        placeholder: SG,
        onSubmit: pG
      } = GG;
      const fG = (0, wG.useRef)(null),
        [QG, KG] = (0, wG.useState)(""),
        [hG, dG] = (0, wG.useState)("Enter"),
        [JG, rG] = (0, wG.useState)(null);
      (0, wG.useEffect)((() => {
        if ("Success" !== hG && "Error" !== hG) return;
        const GG = setTimeout((() => {
          "Success" === hG && fG.current && (fG.current.value = "", KG("")), dG("Enter")
        }), "Success" === hG ? 1e3 : 4e3);
        return () => {
          clearTimeout(GG)
        }
      }), [hG]);
      const zG = () => {
        const GG = QG.trim();
        "" !== GG && "Enter" === hG && (dG("Loading"), pG(GG).then((GG => {
          fG.current && ("error" in GG ? null === GG.error ? dG("Enter") : (rG(GG.error), dG("Error")) : dG("Success"))
        })))
      };
      return (0, VG.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: GG => {
          GG.target === fG.current && "Escape" !== GG.key && GG.stopPropagation()
        },
        children: [(0, VG.jsxs)("div", {
          className: LG()("AddFriendBodyOverlay", `AddFriendBodyOverlay${hG}`),
          children: ["Loading" === hG && (0, VG.jsx)(UG.b, {}), "Success" === hG && (0, VG.jsx)(YG.c, {
            name: "check"
          }), "Error" === hG && JG]
        }), (0, VG.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, VG.jsx)(yG.b, {
            className: "PlayerSearchInput",
            domRef: fG,
            maxLength: 32,
            placeholderText: SG,
            ariaLabel: SG,
            stopPropagation: !1,
            onValueChange: GG => {
              KG(GG)
            },
            onEnter: zG
          }), (0, VG.jsxs)(kG.d, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== hG || "" === QG.trim(),
            onClick: zG,
            children: [(0, VG.jsx)(YG.c, {
              name: ZG
            }), " ", bG]
          })]
        })]
      })
    }
  },
  37071: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => pG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(1151),
      kG = ZG(1016),
      UG = ZG(1067);
    const YG = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      VG = ["unlisted", "public", "whitelist", "private"];

    function pG(GG) {
      let {
        visibility: bG,
        onPick: ZG
      } = GG;
      const {
        t: SG
      } = (0, yG.w)(), pG = (0, wG.useRef)([]);
      return (0, UG.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": SG("worldSocial:whoCanJoin"),
        children: VG.map(((GG, wG) => {
          const yG = GG === bG;
          return (0, UG.jsxs)("button", {
            ref: GG => {
              pG.current[wG] = GG
            },
            type: "button",
            className: LG()("WorldSocialTile", {
              WorldSocialTileSelected: yG
            }),
            "aria-pressed": yG,
            tabIndex: yG ? 0 : -1,
            onKeyDown: GG => {
              ((GG, bG) => {
                const ZG = "ArrowRight" === GG.key || "ArrowDown" === GG.key ? 1 : "ArrowLeft" === GG.key || "ArrowUp" === GG.key ? -1 : 0;
                var wG;
                0 !== ZG && (GG.preventDefault(), null === (wG = pG.current[(bG + ZG + VG.length) % VG.length]) || void 0 === wG || wG.focus())
              })(GG, wG)
            },
            onClick: () => {
              ZG(GG)
            },
            children: [(0, UG.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, UG.jsx)(kG.c, {
                name: YG[GG]
              })
            }), (0, UG.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, UG.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: SG(`worldSocial:${GG}`)
              }), (0, UG.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: SG(`worldSocial:${GG}Description`)
              })]
            })]
          }, GG)
        }))
      })
    }
  },
  37086: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG
    });
    var wG = ZG(1151),
      SG = ZG(2630),
      LG = ZG(4396),
      yG = ZG(1067);

    function kG(GG) {
      let {
        Tp: bG,
        children: ZG,
        ...kG
      } = GG;
      const {
        t: UG
      } = (0, wG.w)();
      return (0, yG.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          bG.onChange(!bG.on)
        },
        children: (0, yG.jsx)(SG.h, {
          ...kG,
          opensProfileCard: !1,
          children: (0, yG.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: GG => {
              GG.stopPropagation()
            },
            children: [ZG, (0, yG.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, yG.jsx)(LG.e, {
                checked: bG.on,
                disabled: !1,
                ariaLabel: UG("worldSocial:letJoin", {
                  playerName: kG.playerSocialPreview.name
                }),
                onChange: GG => {
                  bG.onChange(GG.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37067: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => KG
    });
    var wG = ZG(51),
      SG = ZG(1151),
      LG = ZG(1827),
      yG = ZG(80),
      kG = ZG(17),
      UG = ZG(1415),
      YG = ZG(2657),
      VG = ZG(34376),
      pG = ZG(1393),
      fG = ZG(1016),
      QG = ZG(1067);

    function KG(GG) {
      let {
        worldCode: bG,
        message: ZG
      } = GG;
      const {
        t: KG
      } = (0, SG.w)(), {
        isTouchScreen: hG
      } = (0, kG.o)(["isTouchScreen"]), dG = yG.featureFlags.canUseInviteLinks, JG = (0, VG.h)(dG && null === ZG), [rG, zG] = (0, YG.j)(), EG = (0, wG.useRef)(null);
      if (null !== ZG) return (0, QG.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, QG.jsx)(fG.c, {
          name: "lock"
        }), (0, QG.jsx)("span", {
          children: ZG
        })]
      });
      const oG = dG ? JG : bG,
        XG = hG && dG && (0, YG.e)();
      return (0, QG.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!dG && (0, QG.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: KG("worldSocial:worldCode")
        }), (0, QG.jsx)("input", {
          ref: EG,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== oG && void 0 !== oG ? oG : "",
          "aria-label": KG(dG ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: GG => {
            GG.currentTarget.select()
          }
        }), (0, QG.jsxs)(pG.d, {
          className: "WorldSocialCopy",
          disabled: null === oG,
          onClick: () => {
            null !== oG && (0, YG.h)(oG, {
              useShareSheet: XG,
              onOutcome: GG => {
                if ((0, UG.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== GG || dG ? GG : "code"
                  }), "copied" === GG) zG();
                else if ("failed" === GG) {
                  var bG;
                  null === (bG = EG.current) || void 0 === bG || bG.focus(), LG.g.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, QG.jsx)(fG.c, {
            name: rG ? "check" : XG ? "up-from-bracket" : "copy"
          }), " ", KG(rG ? "general:copied" : XG ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37079: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => QG,
      d: () => fG,
      f: () => pG
    });
    var wG = ZG(580),
      SG = ZG(1151),
      LG = ZG(1583),
      yG = ZG(2630),
      kG = ZG(2575),
      UG = ZG(1393),
      YG = ZG(37086),
      VG = ZG(1067);

    function pG(GG, bG) {
      var ZG;
      return {
        isError: !1,
        name: GG,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== bG && void 0 !== bG ? bG : {},
        nameColour: null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.nameColour) && void 0 !== ZG ? ZG : wG.d,
        location: {
          status: "offline"
        }
      }
    }

    function fG(GG) {
      let {
        player: bG,
        isFriend: ZG = !1,
        status: wG,
        showLocation: UG = void 0 === wG,
        Tp: pG,
        onSendFriendRequest: fG,
        actions: QG,
        zIndex: KG
      } = GG;
      const {
        t: hG
      } = (0, SG.w)();
      let dG = wG;
      null !== pG && void 0 !== pG && pG.on && (dG = (0, VG.jsxs)(VG.Fragment, {
        children: [null !== wG && void 0 !== wG ? wG : (0, VG.jsx)(kG.d, {
          socialPreview: bG
        }), (0, VG.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", hG("worldSocial:canJoin")]
        })]
      }));
      const JG = {
        playerSocialPreview: bG,
        isFriend: ZG,
        hideFriendBadge: !0,
        onFriendRemoved: ZG ? GG => {
          LG.b.removeFriendFromState(GG)
        } : void 0,
        status: dG,
        showLocation: UG,
        onSendFriendRequest: fG,
        zIndex: KG
      };
      return pG ? (0, VG.jsx)(YG.b, {
        ...JG,
        Tp: pG,
        children: QG
      }) : (0, VG.jsx)(yG.h, {
        ...JG,
        opensProfileCard: !1,
        children: QG || void 0
      })
    }

    function QG(GG) {
      let {
        row: bG,
        Tp: ZG,
        canInvite: wG,
        invited: LG,
        onInvite: yG,
        zIndex: kG
      } = GG;
      const {
        t: YG
      } = (0, SG.w)(), pG = "online" === bG.place ? UG.d : UG.h;
      return (0, VG.jsx)(fG, {
        player: bG.friend,
        isFriend: !0,
        status: "here" === bG.place ? YG("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Tp: ZG,
        zIndex: kG,
        actions: wG && (0, VG.jsx)(pG, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: LG,
          onClick: yG,
          ariaLabel: `${YG("worldSocial:invite")} ${bG.friend.name}`,
          children: YG(LG ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37055: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => UG,
      g: () => yG,
      j: () => YG
    });
    var wG = ZG(51),
      SG = ZG(4611),
      LG = ZG(1827);

    function yG(GG) {
      const bG = {
        lobbyName: GG,
        answer: null,
        response: SG.d.getSocialSettings(GG)
      };
      return bG.response.then((GG => {
        bG.answer = GG
      })), bG
    }
    const kG = new Map;

    function UG(GG) {
      kG.set(GG.lobbyName, GG)
    }

    function YG(GG) {
      const [bG] = (0, wG.useState)((() => function(GG) {
        var bG;
        const ZG = null !== (bG = kG.get(GG)) && void 0 !== bG ? bG : null;
        return null !== ZG && void 0 !== ZG && ZG.answer && "error" in ZG.answer ? null : ZG
      }(GG))), [ZG, yG] = (0, wG.useState)((() => null !== bG && void 0 !== bG && bG.answer && "settings" in bG.answer ? bG.answer.settings : null)), [UG, YG] = (0, wG.useState)(!0), [VG, pG] = (0, wG.useState)(null !== ZG), fG = (0, wG.useRef)(ZG);
      fG.current = ZG;
      const QG = (0, wG.useRef)(0),
        KG = (0, wG.useRef)(0),
        hG = (0, wG.useRef)(!1),
        dG = (0, wG.useRef)(!0),
        JG = (0, wG.useCallback)((async bG => {
          const ZG = ++QG.current,
            wG = await (null !== bG && void 0 !== bG ? bG : SG.d.getSocialSettings(GG));
          dG.current && ZG === QG.current && (pG(!0), YG(!1), "error" in wG || yG(wG.settings))
        }), [GG]),
        rG = (0, wG.useCallback)((() => {
          YG(!0), JG()
        }), [JG]),
        zG = (0, wG.useCallback)((() => {
          KG.current > 0 ? hG.current = !0 : JG()
        }), [JG]);
      (0, wG.useEffect)((() => (dG.current = !0, kG.delete(GG), YG(!0), JG(null === bG || void 0 === bG ? void 0 : bG.response), () => {
        dG.current = !1
      })), [JG, GG, bG]);
      const EG = GG => {
        QG.current++, YG(!1), fG.current = GG, yG(GG)
      };
      return {
        settings: ZG,
        loading: UG,
        answered: VG,
        retry: rG,
        refresh: zG,
        change: async function(bG, ZG) {
          let {
            quiet: wG = !1,
            onAnswer: yG
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const kG = fG.current;
          if (null === kG) return !1;
          EG(ZG(kG)), KG.current > 0 && (hG.current = !0), KG.current++;
          const UG = await SG.d.setSocialSettings(GG, bG);
          KG.current--;
          const YG = !("error" in UG);
          if (!dG.current) return YG;
          if (null === yG || void 0 === yG || yG(UG), wG);
          else if ("error" in UG) LG.g.showMessage({
            translationKey: UG.error
          });
          else
            for (const GG of UG.notFound) LG.g.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: GG
              }
            });
          if (KG.current > 0) return YG;
          const VG = hG.current;
          return hG.current = !1, !VG && "settings" in UG ? EG(UG.settings) : (VG || EG(kG), JG()), YG
        }
      }
    }
  },
  37093: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG,
      f: () => LG
    });
    var wG = ZG(140);
    const SG = new Map;

    function LG(GG, bG) {
      var ZG;
      const wG = null !== (ZG = SG.get(GG)) && void 0 !== ZG ? ZG : new Map;
      wG.set(bG, Date.now()), SG.set(GG, wG)
    }

    function yG(GG) {
      const bG = SG.get(GG);
      if (!bG) return [];
      const ZG = Date.now();
      for (const [SG, LG] of bG) ZG - LG >= wG.i && bG.delete(SG);
      return [...bG.keys()]
    }
  },
  37060: (GG, bG, ZG) => {
    function wG(GG, bG) {
      const ZG = bG.toLowerCase();
      for (const wG of GG)
        if (wG.toLowerCase() === ZG) return !0;
      return !1
    }

    function SG(GG, bG, ZG) {
      const SG = [],
        LG = [],
        yG = [];
      for (const kG of GG) !kG.isError && kG.name && ("inGame" === kG.location.status && kG.location.inLobbyName === bG || wG(ZG, kG.name) ? LG.push({
        friend: kG,
        place: "here"
      }) : "offline" === kG.location.status ? yG.push({
        friend: kG,
        place: "offline"
      }) : SG.push({
        friend: kG,
        place: "online"
      }));
      return [...SG, ...LG, ...yG]
    }

    function LG(GG, bG, ZG) {
      const SG = [],
        LG = GG.flatMap((GG => "here" === GG.place ? [GG.friend.name] : []));
      for (const yG of [...LG, ...bG]) wG(SG, yG) || wG(ZG, yG) || SG.push(yG);
      return SG
    }

    function yG(GG, bG) {
      return null === GG || void 0 === GG || !GG.canManage || wG(GG.whitelist, bG) ? "none" : "whitelist" === GG.visibility ? "required" : "quiet"
    }

    function kG(GG) {
      if (null === GG) return !0;
      const {
        visibility: bG
      } = GG;
      return "public" === bG || "unlisted" === bG || "whitelist" === bG && GG.canManage
    }

    function UG(GG, bG, ZG) {
      if (ZG) {
        const ZG = bG.filter((bG => !wG(GG.whitelist, bG)));
        return {
          ...GG,
          whitelist: [...GG.whitelist, ...ZG]
        }
      }
      return {
        ...GG,
        whitelist: GG.whitelist.filter((GG => !wG(bG, GG)))
      }
    }

    function YG(GG, bG) {
      const ZG = [];
      for (let wG = 0; wG < GG.length; wG += bG) ZG.push(GG.slice(wG, wG + bG));
      return ZG
    }
    ZG.d(bG, {
      b: () => kG,
      c: () => LG,
      d: () => SG,
      e: () => wG,
      f: () => YG,
      g: () => yG,
      k: () => UG
    })
  },
  37379: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG
    });
    var wG = ZG(51),
      SG = ZG(2409);

    function LG() {
      const GG = (0, SG.i)("lobbyLeaderboardInfo");
      return (0, wG.useMemo)((() => function(GG) {
        if (null === GG) return null;
        const bG = Object.entries(GG),
          ZG = bG.filter((GG => {
            let [, bG] = GG;
            return void 0 !== bG
          }));
        if (ZG.length === bG.length) return GG;
        const wG = Object.fromEntries(ZG),
          SG = Object.keys(GG).filter((GG => !Object.hasOwn(wG, GG)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${SG.join(", ")}`), wG
      }(GG)), [GG])
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);