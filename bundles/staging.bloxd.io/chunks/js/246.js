export const id = 246;
export const ids = [246];
export const modules = {
  42146: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      LobbyManageView: () => di
    });
    var ye = He(59),
      be = He(1464),
      Me = He(37838),
      Ke = He(2545),
      Ue = He(2551),
      Fe = He(2532),
      Je = He(37380);

    function oe() {
      const [ee, ie] = (0, ye.useState)(new Map);
      return {
        get: ie => ee.get(ie),
        hold: (0, ye.useCallback)(((ee, He, ye) => {
          ie((ie => new Map(ie).set(ee, He))), ye.then((() => {
            ie((ie => {
              const He = new Map(ie);
              return He.delete(ee), He
            }))
          }))
        }), [])
      }
    }
    var Re = He(1053),
      ke = He.n(Re),
      qe = He(1127),
      fe = He(1323),
      Te = He(1320),
      pe = He(2817),
      Xe = He(5537),
      ze = He(3791);
    var Be = He(2029),
      Ee = He(1438);

    function ge(ee, ie, He) {
      const ye = ee.filter((ee => ee.name !== ie)),
        be = ye.filter((ee => "none" === ee.role)).sort(((ee, ie) => ie.at - ee.at)),
        Me = ye.filter((ee => "none" !== ee.role)).sort(((ee, ie) => He.indexOf(ee.role) - He.indexOf(ie.role) || ie.at - ee.at));
      return [...ee.some((ee => ee.name === ie)) && null !== ie ? [ie] : [], ...[...be, ...Me].map((ee => ee.name))]
    }

    function Oe(ee, ie) {
      const He = ee.banned.map((ee => ee.name)),
        ye = new Set(He);
      return {
        here: ge(ee.here, ie, ee.roles.map((ee => ee.role))),
        away: ee.away.filter((ee => !ye.has(ee.name))).map((ee => ee.name)),
        banned: He
      }
    }

    function de(ee, ie) {
      const He = ee.here.find((ee => ee.name === ie));
      if (He) return {
        section: "here",
        player: He
      };
      const ye = ee.banned.find((ee => ee.name === ie));
      if (ye) return {
        section: "banned",
        bannedAt: ye.at
      };
      const be = ee.away.find((ee => ee.name === ie));
      return be ? {
        section: "away",
        player: be
      } : {
        section: "gone"
      }
    }
    const We = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var te = He(2808),
      Ze = He(2938),
      we = He(37550),
      De = He(3442),
      Pe = He(347);

    function Ae(ee, ie, He) {
      return ie.map((ie => {
        if ("string" === typeof ie) return ie;
        const ye = "str" in ie ? ie.str : ie;
        return "string" === typeof ye ? ye : "entityName" in ye ? ye.entityName : "translationKey" in ye ? ee(ye.translationKey, (0, qe.m)(ye.params, He)) : ""
      })).join("")
    }

    function Ye(ee, ie, He, ye, be) {
      return be - ye < 6e4 ? ee(`${He}JustNow`) : ee(He, {
        time: (0, Pe.ib)((0, qe.l)(ie, He), ye, be)
      })
    }
    var Ve = He(1956),
      ae = He(1674),
      ce = He(1228);

    function xe(ee) {
      let {
        status: ie
      } = ee;
      return (0, ce.jsx)("span", {
        className: ke()("LobbyManageStatus", {
          LobbyManageStatusRefused: !ie.ok
        }),
        children: (0, ce.jsx)(Ve.e, {
          text: ie.text
        })
      })
    }

    function Le(ee) {
      let {
        names: ie,
        cap: He,
        filterFrom: be,
        moreLabel: Me,
        reveal: Ke = null,
        renderRow: Ue
      } = ee;
      const {
        t: Fe
      } = (0, qe.v)(), [Je, oe] = (0, ye.useState)(!1), [Re, ke] = (0, ye.useState)(""), Te = Je || null !== Ke && ie.indexOf(Ke) >= He, Xe = (Te || ie.length <= He) && null !== be && ie.length > be, ze = Re.trim().toLowerCase();
      let Be = Te ? ie : ie.slice(0, He);
      return Xe && "" !== ze && (Be = Be.filter((ee => ee.toLowerCase().includes(ze)))), (0, ce.jsxs)(ce.Fragment, {
        children: [Xe && (0, ce.jsx)(ae.d, {
          className: "LobbyManageFilter",
          placeholderText: Fe("lobbyManage:findName"),
          ariaLabel: Fe("lobbyManage:findName"),
          onValueChange: ee => {
            ke(ee)
          }
        }), Be.length > 0 && (0, ce.jsx)("div", {
          className: "PlayerRows",
          children: Be.map(((ee, ie) => Ue(ee, Be.length - ie)))
        }), !Te && ie.length > He && (0, ce.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, ce.jsx)(pe.c, {
            label: (0, ce.jsxs)(ce.Fragment, {
              children: [Me, " ", (0, ce.jsx)(fe.e, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              oe(!0)
            }
          })
        })]
      })
    }

    function Ce(ee) {
      let {
        value: ie,
        placeholder: He,
        ariaLabel: be,
        maxLength: Me,
        wide: Ke = !1,
        onSave: Ue
      } = ee;
      const Fe = (0, ye.useRef)(null),
        [Je, oe] = (0, ye.useState)(0),
        Re = (0, ye.useRef)(!0),
        qe = (0, ye.useRef)(null),
        fe = (0, ye.useRef)({
          value: ie,
          onSave: Ue
        });
      fe.current = {
        value: ie,
        onSave: Ue
      };
      const Te = () => {
        const ee = qe.current;
        qe.current = null, null !== ee && ee !== fe.current.value && fe.current.onSave(ee).then((() => {
          Re.current && oe((ee => ee + 1))
        }))
      };
      return (0, ye.useEffect)((() => {
        null === qe.current && Fe.current && (Fe.current.value = ie)
      }), [ie, Je]), (0, ye.useEffect)((() => () => {
        Re.current = !1, Te()
      }), []), (0, ce.jsx)("div", {
        className: ke()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: Ke
        }),
        onBlur: Te,
        children: (0, ce.jsx)(ae.d, {
          domRef: Fe,
          defaultValue: ie,
          placeholderText: He,
          ariaLabel: be,
          maxLength: Me,
          onValueChange: ee => {
            qe.current = ee
          },
          onEnter: Te
        })
      })
    }
    const ve = ["mod", "coOwner"],
      ue = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function me(ee) {
      var ie, He, Me;
      let {
        name: Ke,
        place: Ue,
        openedIn: Fe,
        isYou: Je,
        manage: Re,
        hiddenNames: ke,
        zIndex: Te
      } = ee;
      const {
        t: pe,
        selectedLanguage: Xe
      } = (0, qe.v)(), [ze, Be] = (0, ye.useState)(null), {
        state: ge
      } = Re, Oe = `player:${Ke}`, de = function(ee, ie) {
        if ("banned" === ee.section) return {
          ...We,
          unban: !0
        };
        if ("gone" === ee.section) return We;
        const {
          player: He
        } = ee, ye = "here" === ee.section, be = ye || "none" !== He.role ? He.can.roles : [], Me = ye && ie && null !== He.gamemode && He.can.gamemode;
        return {
          gamemode: Me,
          roles: be,
          fixedRole: 0 !== be.length || "none" === He.role && !Me ? null : He.role,
          kick: ye && He.can.kick,
          ban: He.can.ban,
          unban: !1
        }
      }(Ue, null !== ge.gamemodes), Pe = Re.statusOf(Oe), Ve = Re.isPending(Oe), ae = oe(), Le = Date.now(), Ce = ee => {
        var ie, He;
        return null !== (ie = null === (He = (ee => ge.roles.find((ie => ie.role === ee)))(ee)) || void 0 === He ? void 0 : He.label) && void 0 !== ie ? ie : ee
      }, me = ee => {
        const ie = ue[ee];
        return void 0 === ie ? void 0 : pe(ie)
      }, le = "here" === Ue.section || "away" === Ue.section ? Ue.player : null, Se = "here" === Ue.section ? Ue.player.id : null, {
        playerSocialPreview: ne,
        isFriend: je
      } = null === Se ? {
        playerSocialPreview: (0, we.k)(Ke, null),
        isFriend: !1
      } : (0, Ze.f)(Se, Ke), se = function() {
        Re.send(...arguments)
      }, Ie = (ee, ie) => {
        ae.hold("role", ee, Re.send({
          type: "setRole",
          name: Ke,
          role: ee
        }, Oe, ie))
      };
      let he = null;
      if ("ban" === (null === ze || void 0 === ze ? void 0 : ze.kind)) he = pe("lobbyManageEntry:banConfirm", {
        playerName: Ke
      });
      else if ("role" === (null === ze || void 0 === ze ? void 0 : ze.kind)) {
        var Ne;
        he = `${pe("lobbyManage:roleConfirm",{playerName:Ke,role:Ce(ze.role)})} ${null!==(Ne=me(ze.role))&&void 0!==Ne?Ne:""}`
      } else if (Pe) he = (0, ce.jsx)(xe, {
        status: Pe
      });
      else if (Je) he = pe("lobbyManage:you");
      else if ("here" === Ue.section) "none" === Ue.player.role && Le - Ue.player.at < 6e5 && (he = Ye(pe, Xe.code, "lobbyManage:joinedAgo", Ue.player.at, Le));
      else if ("away" === Ue.section) {
        if (Ue.player.at > 0) {
          const ee = "kicked" === Ue.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          he = Ye(pe, Xe.code, ee, Ue.player.at, Le)
        }
      } else "banned" === Ue.section ? null !== Ue.bannedAt && (he = Ye(pe, Xe.code, "lobbyManage:bannedAgo", Ue.bannedAt, Le)) : "banned" === Fe && (he = pe("lobbyManageEntry:unbanned"));
      return (0, ce.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": Ke,
        children: (0, ce.jsxs)(te.f, {
          playerSocialPreview: ne,
          isFriend: je,
          status: he,
          opensProfileCard: !Je && (0, Ze.h)(!0, Ke, ke),
          zIndex: Te,
          children: [null !== ze && (0, ce.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === ze.kind && (0, ce.jsxs)(Ee.G, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                Be(null), se({
                  type: "ban",
                  name: Ke
                }, Oe)
              },
              children: [(0, ce.jsx)(fe.e, {
                name: "gavel"
              }), (0, ce.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: pe("lobbyManageEntry:ban")
              })]
            }), "role" === ze.kind && (0, ce.jsx)(Ee.c, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: ze.role
              },
              onClick: () => {
                Be(null), Ie(ze.role)
              },
              children: pe("lobbyManage:makeRole", {
                role: Ce(ze.role)
              })
            }), (0, ce.jsx)(Ee.e, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                Be(null)
              },
              children: pe("general:cancel")
            })]
          }), null === ze && (0, ce.jsxs)(ce.Fragment, {
            children: [(0, ce.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [de.gamemode && null !== le && (0, ce.jsx)(De.e, {
                options: (null !== (ie = ge.gamemodes) && void 0 !== ie ? ie : []).map((ee => ({
                  value: ee.value,
                  label: Ae(pe, ee.label, ke)
                }))),
                value: null !== (He = ae.get("gamemode")) && void 0 !== He ? He : le.gamemode,
                disabled: Ve,
                onChange: ee => {
                  (0, be.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: ee.value
                  }), ae.hold("gamemode", ee.value, Re.send({
                    type: "setGamemode",
                    name: Ke,
                    gamemode: ee.value
                  }, Oe))
                }
              }), de.roles.length > 0 && null !== le && (0, ce.jsx)(De.e, {
                options: [...ge.roles].reverse().filter((ee => de.roles.includes(ee.role))).map((ee => ({
                  value: ee.role,
                  label: ee.label
                }))),
                value: null !== (Me = ae.get("role")) && void 0 !== Me ? Me : le.role,
                disabled: Ve,
                onChange: ee => {
                  var ie;
                  (ie = ee.value) !== (null === le || void 0 === le ? void 0 : le.role) && (ve.includes(ie) ? Be({
                    kind: "role",
                    role: ie
                  }) : ((0, be.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: ie
                  }), Ie(ie, me(ie))))
                }
              }), null !== de.fixedRole && (0, ce.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: Ce(de.fixedRole)
              })]
            }), (0, ce.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [de.kick && (0, ce.jsxs)(Ee.e, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${pe("lobbyManageEntry:kick")} ${Ke}`,
                disabled: Ve,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  se({
                    type: "kick",
                    name: Ke
                  }, Oe)
                },
                children: [(0, ce.jsx)(fe.e, {
                  name: "person-falling-burst"
                }), (0, ce.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: pe("lobbyManageEntry:kick")
                })]
              }), de.ban && (0, ce.jsxs)(Ee.I, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${pe("lobbyManageEntry:ban")} ${Ke}`,
                disabled: Ve,
                padDestructive: !0,
                onClick: () => {
                  Be({
                    kind: "ban"
                  })
                },
                children: [(0, ce.jsx)(fe.e, {
                  name: "gavel"
                }), (0, ce.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: pe("lobbyManageEntry:ban")
                })]
              }), de.unban && (0, ce.jsxs)(Ee.e, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${pe("lobbyManageEntry:unban")} ${Ke}`,
                disabled: Ve,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  se({
                    type: "unban",
                    name: Ke
                  }, Oe)
                },
                children: [(0, ce.jsx)(fe.e, {
                  name: "user-unlock"
                }), (0, ce.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: pe("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function le(ee) {
      var ie, He, be, Me;
      let {
        manage: Ke,
        focusRequest: Ue,
        onFocused: Fe
      } = ee;
      const {
        t: Je
      } = (0, qe.v)(), oe = (0, Be.k)("players"), Re = (0, Be.k)("hiddenPlayerNames"), ke = (0, ye.useRef)(null), {
        state: Te
      } = Ke, Xe = null === oe.localId ? null : null !== (ie = null === (He = oe.byId[oe.localId]) || void 0 === He ? void 0 : He.name) && void 0 !== ie ? ie : null, [ze] = (0, ye.useState)((() => Oe(Te, Xe))), ge = function(ee, ie, He) {
        const ye = new Set([...ee.here, ...ee.away, ...ee.banned]),
          be = Oe(ie, He),
          Me = ie => {
            const He = be[ie].filter((ee => !ye.has(ee)));
            for (const ee of He) ye.add(ee);
            return [...ee[ie], ...He]
          };
        return {
          here: Me("here"),
          away: Me("away"),
          banned: Me("banned")
        }
      }(ze, Te, Xe), [We, te] = (0, ye.useState)(!1), Ze = function(ee, ie) {
        return ee.here.filter((ee => ee.name !== ie && "none" === ee.role && ee.can.kick)).length
      }(Te, Xe), we = Ke.statusOf("kickAll");
      (0, ye.useEffect)((() => {
        var ee, ie;
        if (null === Ue) return;
        const He = null === (ee = ke.current) || void 0 === ee ? void 0 : ee.querySelector(`[data-lobby-manage-row="${CSS.escape(Ue.name)}"]`);
        null === He || void 0 === He || He.scrollIntoView({
          block: "center"
        }), null === He || void 0 === He || null === (ie = He.querySelector(".ProfilePreview")) || void 0 === ie || ie.focus({
          preventScroll: !0
        }), Fe(Ue.seq)
      }), [null === Ue || void 0 === Ue ? void 0 : Ue.seq]);
      const De = ee => (ie, He) => (0, ce.jsx)(me, {
        name: ie,
        place: de(Te, ie),
        openedIn: ee,
        isYou: ie === Xe,
        manage: Ke,
        hiddenNames: Re,
        zIndex: He
      }, ie);
      return (0, ce.jsxs)("div", {
        ref: ke,
        className: "LobbyManagePage",
        children: [ge.here.length > 0 && (0, ce.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, ce.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, ce.jsx)(pe.c, {
              label: Je("lobbyManage:here"),
              meta: Te.here.length
            }), Ze >= 2 && !We && (0, ce.jsxs)(Ee.I, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: Ke.isPending("kickAll"),
              onClick: () => {
                te(!0)
              },
              children: [(0, ce.jsx)(fe.e, {
                name: "person-falling-burst"
              }), " ", Je("lobbyManage:kickAll")]
            })]
          }), We && Ze >= 2 && (0, ce.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, ce.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: Je("lobbyManage:kickAllConfirm", {
                count: Ze
              })
            }), (0, ce.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, ce.jsx)(Ee.G, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  te(!1), Ke.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: Je("lobbyManage:kickAll")
              }), (0, ce.jsx)(Ee.e, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  te(!1)
                },
                children: Je("general:cancel")
              })]
            })]
          }), we && (0, ce.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, ce.jsx)(xe, {
              status: we
            })
          }), (0, ce.jsx)(Le, {
            names: ge.here,
            cap: ge.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: De("here")
          })]
        }), ge.away.length > 0 && (0, ce.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, ce.jsx)(pe.c, {
            label: Je("lobbyManage:notHere"),
            meta: ge.away.length
          }), (0, ce.jsx)(Le, {
            names: ge.away,
            cap: 5,
            filterFrom: null,
            moreLabel: Je("lobbyManage:allCount", {
              count: ge.away.length
            }),
            reveal: null !== (be = null === Ue || void 0 === Ue ? void 0 : Ue.name) && void 0 !== be ? be : null,
            renderRow: De("away")
          })]
        }), ge.banned.length > 0 && (0, ce.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, ce.jsx)(pe.c, {
            label: Je("lobbyManage:banned"),
            meta: ge.banned.length
          }), (0, ce.jsx)(Le, {
            names: ge.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: Je("lobbyManage:allCount", {
              count: ge.banned.length
            }),
            reveal: null !== (Me = null === Ue || void 0 === Ue ? void 0 : Ue.name) && void 0 !== Me ? Me : null,
            renderRow: De("banned")
          })]
        })]
      })
    }
    var Se = He(5018),
      ne = He(1625),
      je = He(37535),
      se = He(37547),
      Ie = He(37540),
      he = He(37537),
      Ne = He(37570),
      Ge = He(37558),
      re = He(37563);

    function Qe(ee) {
      const ie = new Set;
      for (const He of ee) ie.add(He.toLowerCase());
      return ie
    }

    function ei(ee) {
      var ie, He;
      let {
        state: be,
        lobbyName: Me,
        listed: Ke,
        isListed: Ue,
        qE: Fe,
        lE: Je,
        statusOf: oe
      } = ee;
      const {
        t: Re,
        selectedLanguage: ke
      } = (0, qe.v)(), fe = (0, ne.k)(), Te = (0, Be.k)("players"), Xe = null === Te.localId ? null : null !== (ie = null === (He = Te.byId[Te.localId]) || void 0 === He ? void 0 : He.name) && void 0 !== ie ? ie : null, ze = (0, ye.useMemo)((() => (0, he.g)(fe.friends, Me, be.here.map((ee => ee.name)))), [fe.friends, Me, be.here]), Ee = new Map(ze.map((ee => [ee.friend.name.toLowerCase(), ee]))), ge = function(ee) {
        let {
          refused: ie,
          listed: He,
          here: ye,
          friends: be,
          excluded: Me
        } = ee;
        const Ke = Qe(Me),
          Ue = ee => ee.filter((ee => {
            const ie = ee.toLowerCase();
            return !Ke.has(ie) && (Ke.add(ie), !0)
          }));
        return {
          added: [],
          refused: Ue(ie),
          listed: Ue(He),
          suggested: Ue([...ye, ...be])
        }
      }({
        refused: be.refused.map((ee => ee.name)),
        listed: Ke,
        here: be.here.map((ee => ee.name)),
        friends: ze.flatMap((ee => "here" === ee.place ? [] : [ee.friend.name])),
        excluded: [...null === Xe ? [] : [Xe], ...[...be.here, ...be.away].flatMap((ee => "none" === ee.role || (0, he.h)(Ke, ee.name) ? [] : [ee.name]))]
      }), [Oe] = (0, ye.useState)(ge), [de, We] = (0, ye.useState)([]), te = function(ee, ie, He) {
        const ye = Qe(He),
          be = Qe([...He, ...ee.refused, ...ee.listed, ...ee.suggested]),
          Me = He => [...ee[He].filter((ee => !ye.has(ee.toLowerCase()))), ...ie[He].filter((ee => {
            const ie = ee.toLowerCase();
            return !be.has(ie) && (be.add(ie), !0)
          }))];
        return {
          added: [...He],
          refused: Me("refused"),
          listed: Me("listed"),
          suggested: Me("suggested")
        }
      }(Oe, ge, de), De = (ee, ie) => {
        var He, ye;
        const Me = ee.toLowerCase(),
          Ke = Ee.get(Me),
          Je = be.here.find((ee => ee.name.toLowerCase() === Me)),
          qe = be.refused.find((ee => ee.name.toLowerCase() === Me)),
          fe = null !== (He = null === oe || void 0 === oe ? void 0 : oe(ee)) && void 0 !== He ? He : null;
        let Te = null;
        fe ? Te = (0, ce.jsx)(xe, {
          status: fe
        }) : qe ? Te = Ye(Re, ke.code, "lobbyManage:triedToJoinAgo", qe.at, Date.now()) : Ke && Je ? Te = Re("lobbyManage:friendHere") : Ke ? Te = "online" === Ke.place ? Re("lobbyManage:friendOnline") : Re("lobbyManage:friend") : Je && (Te = Re("lobbyManage:hereStatus"));
        let pe = null !== (ye = null === Ke || void 0 === Ke ? void 0 : Ke.friend) && void 0 !== ye ? ye : (0, we.k)(ee, null);
        return !Ke && null !== Je && void 0 !== Je && Je.id && (pe = (0, Ze.f)(Je.id, Je.name).playerSocialPreview), (0, ce.jsx)(Ge.e, {
          playerSocialPreview: pe,
          isFriend: void 0 !== Ke,
          hideFriendBadge: !0,
          status: Te,
          zIndex: ie,
          YR: {
            on: Ue(ee),
            onChange: ie => {
              Fe(ee, ie)
            }
          }
        }, Me)
      }, Pe = [...te.added, ...te.refused];
      return (0, ce.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, ce.jsx)(pe.c, {
          label: Re("worldSocial:whitelist"),
          meta: Ke.length
        }), (0, ce.jsx)(re.c, {
          label: Re("lobbyManage:add"),
          icon: "user-check",
          placeholder: Re("socialBar:enterPlayerName"),
          onSubmit: async ee => {
            const ie = await Je(ee);
            return ie.ok && We((ie => [ee, ...ie])), ie
          }
        }), Pe.length > 0 && (0, ce.jsx)("div", {
          className: "PlayerRows",
          children: Pe.map(((ee, ie) => De(ee, Pe.length - ie)))
        }), (0, ce.jsx)(Le, {
          names: te.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: Re("lobbyManage:allOnWhitelist", {
            count: te.listed.length
          }),
          renderRow: De
        }), (0, ce.jsx)(Le, {
          names: te.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: Re("lobbyManage:allCount", {
            count: te.suggested.length
          }),
          renderRow: De
        })]
      })
    }

    function ii(ee) {
      let {
        manage: ie,
        listing: He
      } = ee;
      const {
        t: ye
      } = (0, qe.v)(), Me = (ee, He) => ((0, be.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: ee
      }), ie.send({
        type: "setListing",
        field: ee,
        value: He
      }, `listing:${ee}`)), Ke = ee => {
        const He = ie.statusOf(`listing:${ee}`);
        return He && !He.ok && (0, ce.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, ce.jsx)(xe, {
            status: He
          })
        })
      };
      return (0, ce.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, ce.jsx)(pe.c, {
          label: ye("lobbyManage:inWorldsList")
        }), (0, ce.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, ce.jsx)("div", {
            className: "SliderText",
            children: ye("lobbyManage:description")
          }), (0, ce.jsx)(Ce, {
            value: He.description,
            ariaLabel: ye("lobbyManage:description"),
            wide: !0,
            onSave: ee => Me("description", ee)
          })]
        }), Ke("description"), (0, ce.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, ce.jsx)("div", {
            className: "SliderText",
            children: ye("lobbyManage:emojis")
          }), (0, ce.jsx)(Ce, {
            value: He.emojis,
            ariaLabel: ye("lobbyManage:emojis"),
            onSave: ee => Me("emojis", ee)
          })]
        }), Ke("emojis"), (0, ce.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, ce.jsx)("div", {
            className: "SliderText",
            children: ye("lobbyManage:colour")
          }), (0, ce.jsx)(Hi, {
            value: He.colour,
            ariaLabel: ye("lobbyManage:colour"),
            onSave: ee => {
              Me("colour", ee)
            }
          })]
        }), Ke("colour")]
      })
    }

    function Hi(ee) {
      let {
        value: ie,
        ariaLabel: He,
        onSave: be
      } = ee;
      const Me = (0, ye.useRef)(null),
        Ke = (0, ye.useRef)({
          value: ie,
          onSave: be
        });
      Ke.current = {
        value: ie,
        onSave: be
      };
      const Ue = (0, ye.useRef)(null),
        Fe = (0, ye.useRef)(!1),
        Je = ee => {
          Fe.current && ee.value !== Ke.current.value && ee.value !== Ue.current && (Ue.current = ee.value, Ke.current.onSave(ee.value))
        };
      return (0, ye.useEffect)((() => {
        Me.current && document.activeElement !== Me.current && (Me.current.value = ie)
      }), [ie]), (0, ye.useEffect)((() => {
        const ee = Me.current,
          ie = () => {
            Je(ee)
          };
        return ee.addEventListener("change", ie), () => {
          ee.removeEventListener("change", ie), Je(ee)
        }
      }), []), (0, ce.jsx)("input", {
        ref: Me,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: ie,
        "aria-label": He,
        onInput: () => {
          Fe.current = !0
        },
        onBlur: ee => {
          Je(ee.currentTarget)
        }
      })
    }

    function yi(ee) {
      let {
        manage: ie
      } = ee;
      const {
        lobbyName: He,
        shownLobbyName: ye
      } = (0, Be.k)("connectedGame");
      return ie.state.you.canSetVisibility && null !== He ? (0, ce.jsx)(Mi, {
        manage: ie,
        lobbyName: He,
        worldCode: null !== ye && void 0 !== ye ? ye : He
      }, He) : (0, ce.jsx)(Ki, {
        manage: ie,
        lobbyName: null !== He && void 0 !== He ? He : ""
      })
    }

    function bi(ee) {
      return ee.map((ee => ee.toLowerCase())).sort().join(",")
    }

    function Mi(ee) {
      var ie;
      let {
        manage: He,
        lobbyName: Me,
        worldCode: Ke
      } = ee;
      const {
        t: Ue
      } = (0, qe.v)(), {
        settings: Fe,
        loading: Je,
        change: oe,
        retry: Re,
        refresh: ke
      } = (0, je.h)(Me), fe = (0, ne.k)(), {
        state: Xe
      } = He, ze = (0, ye.useRef)(Fe);
      ze.current = Fe;
      const Be = bi(null !== (ie = Xe.whitelist) && void 0 !== ie ? ie : []),
        ge = null !== Xe.whitelist;
      (0, ye.useEffect)((() => {
        const ee = ze.current;
        null !== ee && (ee.visibility !== Xe.visibility || ge && bi(ee.whitelist) !== Be) && ke()
      }), [Xe.visibility, Be, ge, ke]);
      const Oe = async (ee, ie) => {
        let He = null;
        return await oe(ee, ie, {
          quiet: !0,
          onAnswer: ee => {
            He = ee
          }
        }), He
      }, de = (ee, ie) => {
        null !== ie && "error" in ie && He.showStatus(ee, {
          ok: !1,
          text: [Ue(ie.error)]
        })
      }, We = async ee => {
        if (null === Fe || ee === Fe.visibility) return;
        (0, be.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: ee
        });
        const ie = "whitelist" === ee ? (0, he.d)((0, he.g)(fe.friends, Me, Xe.here.map((ee => ee.name))), (0, Ne.c)(Me), Fe.whitelist) : [],
          He = await Oe({
            setVisibility: ee
          }, (ie => ({
            ...ie,
            visibility: ee
          })));
        de("mode", He), null === He || "error" in He || await (async ee => {
          for (const ie of (0, he.i)(ee, Se.A))
            if (!await oe({
                whitelistAdd: ie
              }, (ee => (0, he.o)(ee, ie, !0)))) return !1;
          return !0
        })(ie)
      }, te = (0, ye.useMemo)((() => {
        var ee;
        if (null === Fe) return [];
        const ie = null !== (ee = Xe.whitelist) && void 0 !== ee ? ee : [];
        return [...ie.filter((ee => (0, he.h)(Fe.whitelist, ee))), ...Fe.whitelist.filter((ee => !(0, he.h)(ie, ee)))]
      }), [Fe, Xe.whitelist]), Ze = He.statusOf("mode");
      return (0, ce.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, ce.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, ce.jsx)(pe.c, {
            label: Ue("worldSocial:whoCanJoin")
          }), null === Fe && Je && (0, ce.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, ce.jsx)(Te.b, {})
          }), null === Fe && !Je && (0, ce.jsx)(Ee.e, {
            className: "SmallTextLight",
            onClick: Re,
            children: Ue("worldSocial:loadFailed")
          }), null !== Fe && (0, ce.jsx)(se.b, {
            visibility: Fe.visibility,
            onPick: ee => {
              We(ee)
            }
          }), Ze && (0, ce.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, ce.jsx)(xe, {
              status: Ze
            })
          }), null !== Fe && "private" !== Fe.visibility && (0, ce.jsx)(Ie.e, {
            worldCode: Ke,
            message: null
          })]
        }), "whitelist" === (null === Fe || void 0 === Fe ? void 0 : Fe.visibility) && (0, ce.jsx)(ei, {
          state: Xe,
          lobbyName: Me,
          listed: te,
          isListed: ee => (0, he.h)(Fe.whitelist, ee),
          qE: (ee, ie) => {
            (0, be.reportAnalyticsClick)(ie ? {
              id: "lobby_manage.whitelist_add",
              value: "YR"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), Oe(ie ? {
              whitelistAdd: [ee]
            } : {
              whitelistRemove: ee
            }, (He => (0, he.o)(He, [ee], ie))).then((ie => {
              de(`whitelist:${ee.toLowerCase()}`, ie)
            }))
          },
          lE: async ee => {
            (0, be.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const ie = await Oe({
              whitelistAdd: [ee]
            }, (ie => (0, he.o)(ie, [ee], !0)));
            return null === ie ? {
              ok: !1,
              error: Ue("worldSocial:changeFailed")
            } : "error" in ie ? {
              ok: !1,
              error: Ue(ie.error)
            } : (0, he.h)(ie.notFound, ee) ? {
              ok: !1,
              error: Ue("lobbyManage:noPlayerCalled", {
                playerName: ee
              })
            } : {
              ok: !0
            }
          },
          statusOf: ee => He.statusOf(`whitelist:${ee.toLowerCase()}`)
        }), "public" === (null === Fe || void 0 === Fe ? void 0 : Fe.visibility) && null !== Xe.listing && (0, ce.jsx)(ii, {
          manage: He,
          listing: Xe.listing
        })]
      })
    }

    function Ki(ee) {
      var ie;
      let {
        manage: He,
        lobbyName: ye
      } = ee;
      const {
        t: Me
      } = (0, qe.v)(), {
        state: Ke
      } = He, Ue = oe(), Fe = null !== (ie = Ke.whitelist) && void 0 !== ie ? ie : [];
      return (0, ce.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, ce.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, ce.jsx)(pe.c, {
            label: Me("worldSocial:whoCanJoin")
          }), (0, ce.jsx)("div", {
            className: "LobbyManageModeText",
            children: Me(`worldSocial:${Ke.visibility}`)
          })]
        }), "whitelist" === Ke.visibility && Ke.you.canEditWhitelist && (0, ce.jsx)(ei, {
          state: Ke,
          lobbyName: ye,
          listed: Fe,
          isListed: ee => {
            var ie;
            return null !== (ie = Ue.get(ee.toLowerCase())) && void 0 !== ie ? ie : (0, he.h)(Fe, ee)
          },
          qE: (ee, ie) => {
            (0, be.reportAnalyticsClick)(ie ? {
              id: "lobby_manage.whitelist_add",
              value: "YR"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const ye = ee.toLowerCase();
            Ue.hold(ye, ie, He.send(ie ? {
              type: "whitelistAdd",
              names: [ee]
            } : {
              type: "whitelistRemove",
              name: ee
            }, `whitelist:${ye}`))
          },
          lE: async ee => {
            (0, be.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const ie = await He.send({
              type: "whitelistAdd",
              names: [ee]
            }, "whitelist-field");
            return ie.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, ce.jsx)(Ve.e, {
                text: ie.message
              })
            }
          },
          statusOf: ee => He.statusOf(`whitelist:${ee.toLowerCase()}`)
        }), "public" === Ke.visibility && null !== Ke.listing && (0, ce.jsx)(ii, {
          manage: He,
          listing: Ke.listing
        })]
      })
    }
    var Ui = He(5501),
      Fi = He(1351);
    const Ji = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const oi = (0, ye.memo)((function(ee) {
      var ie;
      let {
        rule: He,
        value: ye,
        status: be,
        pending: Me,
        hiddenNames: Ke,
        Gw: Ue,
        onAction: Fe
      } = ee;
      const {
        t: Je
      } = (0, qe.v)(), oe = ee => Ue(He, ee), Re = (ee, ie) => {
        Fe(He, ee, ie)
      }, ke = Ae(Je, He.label, Ke), fe = He.info ? Ae(Je, He.info, Ke) : void 0, Te = He.placeholder ? Ae(Je, He.placeholder, Ke) : void 0, pe = (null !== (ie = He.options) && void 0 !== ie ? ie : []).map((ee => ({
        value: ee.value,
        label: Ae(Je, ee.label, Ke)
      }))), Xe = Math.max(0, ...pe.map((ee => function(ee) {
        let ie = 0;
        for (const He of ee) ie += Ji.test(He) ? 2 : 1;
        return ie
      }(ee.label)))), ze = be && (0, ce.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, ce.jsx)(xe, {
          status: be
        })
      }), Be = (0, ce.jsxs)("div", {
        className: "SliderText",
        children: [ke, void 0 !== fe && (0, ce.jsx)(Fi.c, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: fe
        })]
      });
      return "toggle" === He.kind ? (0, ce.jsxs)(ce.Fragment, {
        children: [(0, ce.jsx)(Ui.c, {
          label: ke,
          checked: !0 === ye,
          circleInfoText: fe,
          disabled: Me,
          onClick: oe
        }), ze]
      }) : "choice" === He.kind && pe.length <= 3 ? (0, ce.jsxs)(ce.Fragment, {
        children: [(0, ce.jsx)(Ui.e, {
          label: ke,
          options: pe,
          value: String(ye),
          circleInfoText: fe,
          onChange: oe
        }), ze]
      }) : (0, ce.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [Be, "choice" === He.kind && (0, ce.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": Xe
          },
          children: (0, ce.jsx)(De.e, {
            options: pe,
            value: String(ye),
            disabled: Me,
            onChange: ee => {
              oe(ee.value)
            }
          })
        }), ("number" === He.kind || "text" === He.kind) && (0, ce.jsx)(Ce, {
          value: null === ye ? "" : String(ye),
          placeholder: Te,
          ariaLabel: ke,
          onSave: ee => {
            const ie = ee.trim(),
              ye = Number(ie);
            return oe("number" === He.kind && "" !== ie && Number.isFinite(ye) ? ye : ie)
          }
        }), "action" === He.kind && (0, ce.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [pe.length > 3 && (0, ce.jsx)(De.e, {
            options: pe,
            value: {
              value: "",
              label: null !== Te && void 0 !== Te ? Te : ke
            },
            disabled: Me,
            onChange: ee => {
              Re(ee.value)
            }
          }), pe.length > 0 && pe.length <= 3 && pe.map((ee => (0, ce.jsx)(Ee.e, {
            className: "SmallTextLight",
            disabled: Me,
            onClick: () => {
              Re(ee.value)
            },
            children: ee.label
          }, ee.value))), 0 === pe.length && (0, ce.jsx)(Ee.e, {
            className: "SmallTextLight",
            disabled: Me,
            onClick: () => {
              Re()
            },
            children: null !== Te && void 0 !== Te ? Te : ke
          })]
        }), "names" === He.kind && (0, ce.jsx)(Ri, {
          names: Array.isArray(ye) ? ye : [],
          pending: Me,
          onAction: Re
        }), ze]
      })
    }));

    function Ri(ee) {
      let {
        names: ie,
        pending: He,
        onAction: be
      } = ee;
      const {
        t: Me
      } = (0, qe.v)(), Ke = (0, ye.useRef)(null), [Ue, Fe] = (0, ye.useState)(""), Je = () => {
        const ee = Ue.trim();
        "" !== ee && (be(ee, "add"), Ke.current && (Ke.current.value = ""), Fe(""))
      };
      return (0, ce.jsxs)("div", {
        className: "LobbyManageNames",
        children: [ie.map((ee => (0, ce.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, ce.jsx)("span", {
            className: "LobbyManageNameText",
            children: ee
          }), (0, ce.jsx)(Ee.e, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: Me("lobbyManage:removeName", {
              name: ee
            }),
            disabled: He,
            onClick: () => {
              be(ee, "remove")
            },
            children: (0, ce.jsx)(fe.e, {
              name: "xmark"
            })
          })]
        }, ee))), (0, ce.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, ce.jsx)(ae.d, {
            domRef: Ke,
            placeholderText: Me("lobbyManage:namePlaceholder"),
            ariaLabel: Me("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: ee => {
              Fe(ee)
            },
            onEnter: Je
          }), (0, ce.jsx)(Ee.e, {
            className: "SmallTextLight",
            disabled: He || "" === Ue.trim(),
            onClick: Je,
            children: Me("lobbyManage:addHere")
          })]
        })]
      })
    }
    const ki = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function qi(ee, ie) {
      return ki.map((He => {
        let {
          group: ye,
          title: be
        } = He;
        const Me = ee.filter((ee => ee.group === ye && void 0 === ee.parent)).map((He => {
          const ye = !0 === ie(He) ? ee.filter((ee => ee.parent === He.key)) : [];
          return {
            rule: He,
            children: ye
          }
        }));
        return {
          group: ye,
          title: be,
          items: Me
        }
      }))
    }

    function fi(ee) {
      return ee.flatMap((ee => {
        let {
          items: ie
        } = ee;
        return ie.flatMap((ee => {
          let {
            rule: ie,
            children: He
          } = ee;
          return [ie, ...He]
        }))
      }))
    }

    function Ti(ee) {
      let {
        manage: ie,
        rowsShown: He
      } = ee;
      const {
        t: Me
      } = (0, qe.v)(), Ke = (0, Be.k)("hiddenPlayerNames"), {
        rules: Ue
      } = ie.state, Fe = oe(), Je = ee => {
        const ie = Fe.get(ee.key);
        return void 0 === ie ? ee.value : ie
      }, Re = qi(Ue, Je), [ke] = (0, ye.useState)((() => fi(Re).map((ee => ee.key)))), fe = He === 1 / 0 ? null : new Set(ke.slice(0, He)), Te = ee => null === fe || fe.has(ee.key), {
        hold: Xe
      } = Fe, ze = (0, ye.useCallback)(((ee, He) => {
        (0, be.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: ee.key
        });
        const ye = ie.send({
          type: "setRule",
          key: ee.key,
          value: He
        }, `rule:${ee.key}`);
        return Xe(ee.key, He, ye), ye
      }), [ie, Xe]), Ee = (0, ye.useCallback)(((ee, He, ye) => {
        (0, be.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: ee.key
        }), ie.send({
          type: "ruleAction",
          key: ee.key,
          ...void 0 === He ? {} : {
            arg: He
          },
          ...void 0 === ye ? {} : {
            op: ye
          }
        }, `rule:${ee.key}`, void 0 === ye ? Me("lobbyManage:setJustNow") : void 0)
      }), [ie, Me]), ge = ee => {
        const He = `rule:${ee.key}`;
        return (0, ce.jsx)(oi, {
          rule: ee,
          value: Je(ee),
          status: ie.statusOf(He),
          pending: ie.isPending(He),
          hiddenNames: Ke,
          Gw: ze,
          onAction: Ee
        }, ee.key)
      };
      return (0, ce.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: Re.map((ee => {
          let {
            group: ie,
            title: He,
            items: be
          } = ee;
          const Ke = be.filter((ee => {
            let {
              rule: ie
            } = ee;
            return Te(ie)
          }));
          return 0 === Ke.length ? null : (0, ce.jsxs)(ye.Fragment, {
            children: [(0, ce.jsx)(pe.c, {
              label: Me(He)
            }), Ke.map((ee => {
              let {
                rule: ie,
                children: He
              } = ee;
              return 0 === He.length ? ge(ie) : (0, ce.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [ge(ie), He.filter(Te).map(ge)]
              }, ie.key)
            }))]
          }, ie)
        }))
      })
    }
    const Xi = {
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
      zi = 5,
      Bi = (0, ye.memo)((function(ee) {
        let {
          page: ie,
          manage: He,
          leaderboard: be,
          focusRequest: Me,
          onFocused: Ke,
          ruleRowsShown: Ue
        } = ee;
        return "leaderboard" === ie ? (0, ce.jsx)(ye.Suspense, {
          fallback: (0, ce.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, ce.jsx)(Te.b, {})
          }),
          children: be
        }) : "joining" === ie ? (0, ce.jsx)(yi, {
          manage: He
        }) : "rules" === ie ? (0, ce.jsx)(Ti, {
          manage: He,
          rowsShown: Ue
        }) : (0, ce.jsx)(le, {
          manage: He,
          focusRequest: Me,
          onFocused: Ke
        })
      }));

    function Ei(ee) {
      let {
        page: ie
      } = ee;
      const {
        t: He
      } = (0, qe.v)(), ye = Xi[ie];
      return (0, ce.jsxs)(ce.Fragment, {
        children: [(0, ce.jsx)(fe.e, {
          name: ye.icon
        }), " ", (0, ce.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: He(ye.title)
        })]
      })
    }

    function gi(ee) {
      var ie;
      const {
        t: He
      } = (0, qe.v)(), {
        pages: Me,
        landing: Ke
      } = ee, Fe = (0, ye.useRef)(null), Je = (0, ye.useRef)(null), oe = (0, ye.useRef)(null), Re = (0, ye.useRef)(new Map), [fe, Te] = (0, ye.useState)(null), Be = (0, ye.useRef)(fe), Ee = (0, ye.useRef)(0), [ge, Oe] = (0, ye.useState)(Me[0]), de = null !== fe && void 0 !== fe ? fe : Me.includes(ge) ? ge : Me[0], [We] = (0, ye.useState)(null !== (ie = null === Ke || void 0 === Ke ? void 0 : Ke.page) && void 0 !== ie ? ie : null), te = null !== We && Me.includes(We) ? [We, ...Me.filter((ee => ee !== We))] : Me, [Ze] = (0, ye.useState)((() => {
        const ie = fi(qi(ee.manage.state.rules, (ee => ee.value)));
        return Math.max(1, Math.ceil(ie.length / zi))
      })), we = te.flatMap((ee => "rules" === ee ? Array(Ze).fill(ee) : [ee])), De = function(ee, ie) {
        const [He, be] = (0, ye.useState)(ee), Me = He >= ie;
        return Me && He !== 1 / 0 && be(1 / 0), (0, ye.useLayoutEffect)((() => {
          if (Me) return;
          let ee = !0;
          return (0, ze.f)().then((() => {
            ee && be((ee => ee + 1))
          })), () => {
            ee = !1
          }
        }), [He, Me]), Me ? 1 / 0 : He
      }(1, we.length), Pe = we.slice(0, De), Ae = new Set(Pe), Ye = De < we.length, Ve = Ye ? Pe.filter((ee => "rules" === ee)).length * zi : 1 / 0, ae = (0, ye.useRef)(ee.focusRequest);
      ae.current = ee.focusRequest;
      const xe = ee => {
          Be.current = ee, Te(ee)
        },
        Le = () => {
          var ee, ie;
          Fe.current.style.scrollPaddingTop = `${null!==(ee=null===(ie=oe.current)||void 0===ie?void 0:ie.offsetHeight)&&void 0!==ee?ee:0}px`
        },
        Ce = ee => {
          const ie = Fe.current,
            He = Re.current.get(ee);
          if (void 0 === He) return;
          const ye = document.activeElement,
            be = ae.current,
            Me = null === be ? null : He.querySelector(`[data-lobby-manage-row="${CSS.escape(be.name)}"]`);
          Le(), ye instanceof HTMLElement && null !== Me && void 0 !== Me && Me.contains(ye) ? ye.scrollIntoView({
            block: "center"
          }) : null === He.previousElementSibling ? ie.scrollTop = 0 : He.scrollIntoView({
            block: "start"
          }), Ee.current = ie.scrollTop
        },
        ve = ee => {
          (0, be.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: ee
          }), xe(ee), Ce(ee)
        },
        ue = () => {
          var ee, ie;
          const He = Fe.current,
            ye = He.getBoundingClientRect().top + (null !== (ee = null === (ie = oe.current) || void 0 === ie ? void 0 : ie.offsetHeight) && void 0 !== ee ? ee : 0),
            be = Me.map((ee => {
              var ie, He;
              return (null !== (ie = null === (He = Re.current.get(ee)) || void 0 === He ? void 0 : He.getBoundingClientRect().top) && void 0 !== ie ? ie : 1 / 0) - ye
            })),
            Ke = !Ye && He.scrollTop + He.clientHeight >= He.scrollHeight - 1;
          Oe(Me[(0, Ue.k)(be, Ke)])
        },
        me = () => {
          null !== Be.current && (xe(null), ue())
        };
      (0, ye.useLayoutEffect)((() => {
        null !== Ke && Me.includes(Ke.page) && ve(Ke.page)
      }), [null === Ke || void 0 === Ke ? void 0 : Ke.seq]), (0, ye.useLayoutEffect)((() => {
        null === Be.current || Me.includes(Be.current) || me()
      }));
      const {
        onFocused: le
      } = ee, Se = (0, ye.useCallback)((ee => {
        null !== Be.current && Ce(Be.current), le(ee)
      }), [le]);
      (0, ye.useLayoutEffect)((() => {
        const ee = Be.current;
        null !== ee && (!Ye || Me.indexOf(we[De - 1]) < Me.indexOf(ee)) && Ce(ee)
      }), [De]), (0, ye.useEffect)((() => {
        const ee = new ResizeObserver((() => {
          null !== Be.current ? Ce(Be.current) : Le()
        }));
        return ee.observe(Fe.current), ee.observe(Je.current), () => {
          ee.disconnect()
        }
      }), []), (0, ye.useLayoutEffect)((() => {
        const ee = oe.current,
          ie = null === ee || void 0 === ee ? void 0 : ee.querySelector(".SegmentedToggleOptionSelected");
        ie && (ee.scrollLeft = Math.min(ie.offsetLeft, Math.max(ee.scrollLeft, ie.offsetLeft + ie.offsetWidth - ee.clientWidth)))
      }), [de]);
      return (0, ce.jsxs)("div", {
        ref: Fe,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === Be.current ? ue() : Math.abs(Fe.current.scrollTop - Ee.current) > 1 && me()
        },
        onClick: ee => {
          var ie;
          null !== (ie = oe.current) && void 0 !== ie && ie.contains(ee.target) || me()
        },
        onFocus: ee => {
          var ie;
          const He = null === Be.current ? null : Re.current.get(Be.current);
          !He || He.contains(ee.target) || null !== (ie = oe.current) && void 0 !== ie && ie.contains(ee.target) || me()
        },
        children: [Me.length > 1 && (0, ce.jsx)("div", {
          ref: oe,
          className: "LobbyManageChips",
          children: (0, ce.jsx)(Xe.b, {
            options: Me.map((ee => ({
              value: ee,
              label: (0, ce.jsx)(Ei, {
                page: ee
              }),
              ariaLabel: He(Xi[ee].title)
            }))),
            value: de,
            padTabs: "2",
            ariaLabel: He("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: ve
          })
        }), (0, ce.jsx)("div", {
          ref: Je,
          className: ke()("LobbyManageInner", {
            Staging: Ye
          }),
          children: Me.filter((ee => Ae.has(ee))).map((ie => {
            const He = ie === fe;
            return (0, ce.jsxs)("section", {
              ref: ee => {
                ee ? Re.current.set(ie, ee) : Re.current.delete(ie)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": He || void 0,
              children: [Me.length > 1 && (0, ce.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": He || void 0,
                "data-pad-unavailable": He || void 0,
                children: (0, ce.jsx)(pe.c, {
                  label: (0, ce.jsx)(Ei, {
                    page: ie
                  })
                })
              }), (0, ce.jsx)(Bi, {
                page: ie,
                manage: ee.manage,
                leaderboard: ee.leaderboard,
                focusRequest: ee.focusRequest,
                onFocused: Se,
                ruleRowsShown: "rules" === ie ? Ve : 1 / 0
              })]
            }, ie)
          }))
        })]
      })
    }

    function Oi(ee) {
      return void 0 === (null === ee || void 0 === ee ? void 0 : ee.page) ? null : {
        page: ee.page,
        seq: ee.seq
      }
    }

    function di(ee) {
      let {
        leaderboard: ie
      } = ee;
      const He = function() {
          const ee = (0, Fe.i)("lobbyManage"),
            [ie, He] = (0, ye.useReducer)((ee => ee + 1), 0),
            [be] = (0, ye.useState)((() => new Je.e(He)));
          return (0, ye.useEffect)((() => {
            const ee = be.nextDeadline();
            if (null === ee) return;
            const ie = setTimeout((() => {
              be.expire(Date.now()), He()
            }), Math.max(0, ee - Date.now()));
            return () => {
              clearTimeout(ie)
            }
          })), (0, ye.useMemo)((() => null === ee ? null : {
            state: ee,
            send: (ee, ie, ye) => {
              const Me = be.send(ee, ie, null !== ye && void 0 !== ye ? ye : null);
              return He(), Me
            },
            statusOf: ee => be.statusOf(ee, Date.now()),
            showStatus: (ee, ie) => {
              be.show(ee, ie)
            },
            isPending: ee => be.isPending(ee)
          }), [ee, ie, be])
        }(),
        oe = (0, Ue.o)((0, Me.e)()),
        Re = (0, Ke.l)(),
        [ke, qe] = (0, ye.useState)((() => Oi(Re))),
        [fe, Te] = (0, ye.useState)(null);
      return (0, ye.useEffect)((() => {
        null === Re && (0, be.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, ye.useEffect)((() => {
        null !== Re && (qe((ee => (null === ee || void 0 === ee ? void 0 : ee.seq) === Re.seq ? ee : Oi(Re))), void 0 !== Re.focusName && "players" === Re.page ? Te({
          name: Re.focusName,
          seq: Re.seq
        }) : (0, Ke.k)(Re.seq))
      }), [null === Re || void 0 === Re ? void 0 : Re.seq]), null === He ? null : (0, ce.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, ce.jsx)(gi, {
          pages: (0, Ue.g)(He.state, oe),
          manage: He,
          leaderboard: ie,
          focusRequest: fe,
          onFocused: Ke.k,
          landing: ke
        })
      })
    }
  },
  37380: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      h: () => Fe
    });
    var ye = He(1464),
      be = He(2018),
      Me = He(1983);
    const Ke = 1e4;
    let Ue = 0;

    function Fe(ee) {
      const ie = ++Ue;
      return new Promise((He => {
        const Ue = ie => {
            Fe(), clearTimeout(Je), !1 === (null === ie || void 0 === ie ? void 0 : ie.ok) && (0, ye.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: ee.type
            }), He(ie)
          },
          Fe = be.c.subscribe("lobbyManage", (ee => {
            const He = function(ee, ie) {
              var He;
              return null !== (He = null === ee || void 0 === ee ? void 0 : ee.results.find((ee => ee.requestId === ie))) && void 0 !== He ? He : null
            }(ee, ie);
            null !== He && Ue(He)
          })),
          Je = setTimeout((() => {
            Ue(null)
          }), Ke);
        Me.gameBridge.send("lobbyManage", {
          ...ee,
          requestId: ie
        })
      }))
    }
    const Je = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class oe {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fe;
        this.onChange = ee, this.sendAction = ie, this.pending = new Map, this.statuses = new Map
      }
      send(ee, ie, He) {
        var ye;
        return this.statuses.delete(ie), this.pending.set(ie, (null !== (ye = this.pending.get(ie)) && void 0 !== ye ? ye : 0) + 1), this.sendAction(ee).then((ee => {
          var ye;
          const be = null !== ee && void 0 !== ee ? ee : {
              requestId: -1,
              ok: !1,
              message: Je
            },
            Me = (null !== (ye = this.pending.get(ie)) && void 0 !== ye ? ye : 1) - 1;
          Me > 0 ? this.pending.set(ie, Me) : this.pending.delete(ie);
          const Ke = !be.ok || be.message.length > 0 ? be.message : null === He ? null : [He];
          return null !== Ke && this.statuses.set(ie, {
            ok: be.ok,
            text: Ke,
            until: Date.now() + 4e3
          }), this.onChange(), be
        }))
      }
      show(ee, ie) {
        this.statuses.set(ee, {
          ...ie,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(ee) {
        for (const [ie, He] of this.statuses) He.until <= ee && this.statuses.delete(ie)
      }
      nextDeadline() {
        let ee = null;
        for (const He of this.statuses.values()) {
          var ie;
          ee = Math.min(null !== (ie = ee) && void 0 !== ie ? ie : 1 / 0, He.until)
        }
        return ee
      }
      statusOf(ee, ie) {
        const He = this.statuses.get(ee);
        return !He || He.until <= ie ? null : {
          ok: He.ok,
          text: He.text
        }
      }
      isPending(ee) {
        return this.pending.has(ee)
      }
    }
  },
  37563: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1674),
      Ue = He(1438),
      Fe = He(1320),
      Je = He(1323),
      oe = He(1228);

    function Re(ee) {
      let {
        label: ie,
        icon: He,
        placeholder: be,
        onSubmit: Re
      } = ee;
      const ke = (0, ye.useRef)(null),
        [qe, fe] = (0, ye.useState)(""),
        [Te, pe] = (0, ye.useState)("Enter"),
        [Xe, ze] = (0, ye.useState)(null);
      (0, ye.useEffect)((() => {
        if ("Success" !== Te && "Error" !== Te) return;
        const ee = setTimeout((() => {
          "Success" === Te && ke.current && (ke.current.value = "", fe("")), pe("Enter")
        }), "Success" === Te ? 1e3 : 4e3);
        return () => {
          clearTimeout(ee)
        }
      }), [Te]);
      const Be = () => {
        const ee = qe.trim();
        "" !== ee && "Enter" === Te && (pe("Loading"), Re(ee).then((ee => {
          ke.current && ("error" in ee ? null === ee.error ? pe("Enter") : (ze(ee.error), pe("Error")) : pe("Success"))
        })))
      };
      return (0, oe.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: ee => {
          ee.target === ke.current && "Escape" !== ee.key && ee.stopPropagation()
        },
        children: [(0, oe.jsxs)("div", {
          className: Me()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Te}`),
          children: ["Loading" === Te && (0, oe.jsx)(Fe.b, {}), "Success" === Te && (0, oe.jsx)(Je.e, {
            name: "check"
          }), "Error" === Te && Xe]
        }), (0, oe.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, oe.jsx)(Ke.d, {
            className: "PlayerSearchInput",
            domRef: ke,
            maxLength: 32,
            placeholderText: be,
            ariaLabel: be,
            stopPropagation: !1,
            onValueChange: ee => {
              fe(ee)
            },
            onEnter: Be
          }), (0, oe.jsxs)(Ue.c, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Te || "" === qe.trim(),
            onClick: Be,
            children: [(0, oe.jsx)(Je.e, {
              name: He
            }), " ", ie]
          })]
        })]
      })
    }
  },
  37547: (ee, ie, He) => {
    He.d(ie, {
      b: () => Re
    });
    var ye = He(59),
      be = He(1053),
      Me = He.n(be),
      Ke = He(1127),
      Ue = He(1323),
      Fe = He(1228);
    const Je = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      oe = ["unlisted", "public", "whitelist", "private"];

    function Re(ee) {
      let {
        visibility: ie,
        onPick: He
      } = ee;
      const {
        t: be
      } = (0, Ke.v)(), Re = (0, ye.useRef)([]);
      return (0, Fe.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": be("worldSocial:whoCanJoin"),
        children: oe.map(((ee, ye) => {
          const Ke = ee === ie;
          return (0, Fe.jsxs)("button", {
            ref: ee => {
              Re.current[ye] = ee
            },
            type: "button",
            className: Me()("WorldSocialTile", {
              WorldSocialTileSelected: Ke
            }),
            "aria-pressed": Ke,
            tabIndex: Ke ? 0 : -1,
            onKeyDown: ee => {
              ((ee, ie) => {
                const He = "ArrowRight" === ee.key || "ArrowDown" === ee.key ? 1 : "ArrowLeft" === ee.key || "ArrowUp" === ee.key ? -1 : 0;
                var ye;
                0 !== He && (ee.preventDefault(), null === (ye = Re.current[(ie + He + oe.length) % oe.length]) || void 0 === ye || ye.focus())
              })(ee, ye)
            },
            onClick: () => {
              He(ee)
            },
            children: [(0, Fe.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, Fe.jsx)(Ue.e, {
                name: Je[ee]
              })
            }), (0, Fe.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, Fe.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: be(`worldSocial:${ee}`)
              }), (0, Fe.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: be(`worldSocial:${ee}Description`)
              })]
            })]
          }, ee)
        }))
      })
    }
  },
  37558: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue
    });
    var ye = He(1127),
      be = He(2808),
      Me = He(4729),
      Ke = He(1228);

    function Ue(ee) {
      let {
        YR: ie,
        children: He,
        ...Ue
      } = ee;
      const {
        t: Fe
      } = (0, ye.v)();
      return (0, Ke.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          ie.onChange(!ie.on)
        },
        children: (0, Ke.jsx)(be.f, {
          ...Ue,
          opensProfileCard: !1,
          children: (0, Ke.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: ee => {
              ee.stopPropagation()
            },
            children: [He, (0, Ke.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, Ke.jsx)(Me.d, {
                checked: ie.on,
                disabled: !1,
                ariaLabel: Fe("worldSocial:letJoin", {
                  playerName: Ue.playerSocialPreview.name
                }),
                onChange: ee => {
                  ie.onChange(ee.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  37540: (ee, ie, He) => {
    He.d(ie, {
      e: () => fe
    });
    var ye = He(59),
      be = He(1127),
      Me = He(1913),
      Ke = He(97),
      Ue = He(18),
      Fe = He(1464),
      Je = He(2841),
      oe = He(34767),
      Re = He(1438),
      ke = He(1323),
      qe = He(1228);

    function fe(ee) {
      let {
        worldCode: ie,
        message: He
      } = ee;
      const {
        t: fe
      } = (0, be.v)(), {
        isTouchScreen: Te
      } = (0, Ue.m)(["isTouchScreen"]), pe = Ke.featureFlags.canUseInviteLinks, Xe = (0, oe.d)(pe && null === He), [ze, Be] = (0, Je.i)(), Ee = (0, ye.useRef)(null);
      if (null !== He) return (0, qe.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, qe.jsx)(ke.e, {
          name: "lock"
        }), (0, qe.jsx)("span", {
          children: He
        })]
      });
      const ge = pe ? Xe : ie,
        Oe = Te && pe && (0, Je.b)();
      return (0, qe.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!pe && (0, qe.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: fe("worldSocial:worldCode")
        }), (0, qe.jsx)("input", {
          ref: Ee,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== ge && void 0 !== ge ? ge : "",
          "aria-label": fe(pe ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: ee => {
            ee.currentTarget.select()
          }
        }), (0, qe.jsxs)(Re.c, {
          className: "WorldSocialCopy",
          disabled: null === ge,
          onClick: () => {
            null !== ge && (0, Je.e)(ge, {
              useShareSheet: Oe,
              onOutcome: ee => {
                if ((0, Fe.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== ee || pe ? ee : "code"
                  }), "copied" === ee) Be();
                else if ("failed" === ee) {
                  var ie;
                  null === (ie = Ee.current) || void 0 === ie || ie.focus(), Me.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, qe.jsx)(ke.e, {
            name: ze ? "check" : Oe ? "up-from-bracket" : "copy"
          }), " ", fe(ze ? "general:copied" : Oe ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  37550: (ee, ie, He) => {
    He.d(ie, {
      d: () => qe,
      g: () => ke,
      k: () => Re
    });
    var ye = He(602),
      be = He(1127),
      Me = He(1625),
      Ke = He(2808),
      Ue = He(2749),
      Fe = He(1438),
      Je = He(37558),
      oe = He(1228);

    function Re(ee, ie) {
      var He;
      return {
        isError: !1,
        name: ee,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== ie && void 0 !== ie ? ie : {},
        nameColour: null !== (He = null === ie || void 0 === ie ? void 0 : ie.nameColour) && void 0 !== He ? He : ye.d,
        location: {
          status: "offline"
        }
      }
    }

    function ke(ee) {
      let {
        player: ie,
        isFriend: He = !1,
        status: ye,
        showLocation: Fe = void 0 === ye,
        YR: Re,
        onSendFriendRequest: ke,
        actions: qe,
        zIndex: fe
      } = ee;
      const {
        t: Te
      } = (0, be.v)();
      let pe = ye;
      null !== Re && void 0 !== Re && Re.on && (pe = (0, oe.jsxs)(oe.Fragment, {
        children: [null !== ye && void 0 !== ye ? ye : (0, oe.jsx)(Ue.d, {
          socialPreview: ie
        }), (0, oe.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Te("worldSocial:canJoin")]
        })]
      }));
      const Xe = {
        playerSocialPreview: ie,
        isFriend: He,
        hideFriendBadge: !0,
        onFriendRemoved: He ? ee => {
          Me.b.removeFriendFromState(ee)
        } : void 0,
        status: pe,
        showLocation: Fe,
        onSendFriendRequest: ke,
        zIndex: fe
      };
      return Re ? (0, oe.jsx)(Je.e, {
        ...Xe,
        YR: Re,
        children: qe
      }) : (0, oe.jsx)(Ke.f, {
        ...Xe,
        opensProfileCard: !1,
        children: qe || void 0
      })
    }

    function qe(ee) {
      let {
        row: ie,
        YR: He,
        canInvite: ye,
        invited: Me,
        onInvite: Ke,
        zIndex: Ue
      } = ee;
      const {
        t: Je
      } = (0, be.v)(), Re = "online" === ie.place ? Fe.c : Fe.e;
      return (0, oe.jsx)(ke, {
        player: ie.friend,
        isFriend: !0,
        status: "here" === ie.place ? Je("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        YR: He,
        zIndex: Ue,
        actions: ye && (0, oe.jsx)(Re, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Me,
          onClick: Ke,
          ariaLabel: `${Je("worldSocial:invite")} ${ie.friend.name}`,
          children: Je(Me ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  37535: (ee, ie, He) => {
    He.d(ie, {
      d: () => Fe,
      e: () => Ke,
      h: () => Je
    });
    var ye = He(59),
      be = He(4974),
      Me = He(1913);

    function Ke(ee) {
      const ie = {
        lobbyName: ee,
        answer: null,
        response: be.c.getSocialSettings(ee)
      };
      return ie.response.then((ee => {
        ie.answer = ee
      })), ie
    }
    const Ue = new Map;

    function Fe(ee) {
      Ue.set(ee.lobbyName, ee)
    }

    function Je(ee) {
      const [ie] = (0, ye.useState)((() => function(ee) {
        var ie;
        const He = null !== (ie = Ue.get(ee)) && void 0 !== ie ? ie : null;
        return null !== He && void 0 !== He && He.answer && "error" in He.answer ? null : He
      }(ee))), [He, Ke] = (0, ye.useState)((() => null !== ie && void 0 !== ie && ie.answer && "settings" in ie.answer ? ie.answer.settings : null)), [Fe, Je] = (0, ye.useState)(!0), [oe, Re] = (0, ye.useState)(null !== He), ke = (0, ye.useRef)(He);
      ke.current = He;
      const qe = (0, ye.useRef)(0),
        fe = (0, ye.useRef)(0),
        Te = (0, ye.useRef)(!1),
        pe = (0, ye.useRef)(!0),
        Xe = (0, ye.useCallback)((async ie => {
          const He = ++qe.current,
            ye = await (null !== ie && void 0 !== ie ? ie : be.c.getSocialSettings(ee));
          pe.current && He === qe.current && (Re(!0), Je(!1), "error" in ye || Ke(ye.settings))
        }), [ee]),
        ze = (0, ye.useCallback)((() => {
          Je(!0), Xe()
        }), [Xe]),
        Be = (0, ye.useCallback)((() => {
          fe.current > 0 ? Te.current = !0 : Xe()
        }), [Xe]);
      (0, ye.useEffect)((() => (pe.current = !0, Ue.delete(ee), Je(!0), Xe(null === ie || void 0 === ie ? void 0 : ie.response), () => {
        pe.current = !1
      })), [Xe, ee, ie]);
      const Ee = ee => {
        qe.current++, Je(!1), ke.current = ee, Ke(ee)
      };
      return {
        settings: He,
        loading: Fe,
        answered: oe,
        retry: ze,
        refresh: Be,
        change: async function(ie, He) {
          let {
            quiet: ye = !1,
            onAnswer: Ke
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const Ue = ke.current;
          if (null === Ue) return !1;
          Ee(He(Ue)), fe.current > 0 && (Te.current = !0), fe.current++;
          const Fe = await be.c.setSocialSettings(ee, ie);
          fe.current--;
          const Je = !("error" in Fe);
          if (!pe.current) return Je;
          if (null === Ke || void 0 === Ke || Ke(Fe), ye);
          else if ("error" in Fe) Me.f.showMessage({
            translationKey: Fe.error
          });
          else
            for (const ee of Fe.notFound) Me.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: ee
              }
            });
          if (fe.current > 0) return Je;
          const oe = Te.current;
          return Te.current = !1, !oe && "settings" in Fe ? Ee(Fe.settings) : (oe || Ee(Ue), Xe()), Je
        }
      }
    }
  },
  37570: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      d: () => Me
    });
    var ye = He(153);
    const be = new Map;

    function Me(ee, ie) {
      var He;
      const ye = null !== (He = be.get(ee)) && void 0 !== He ? He : new Map;
      ye.set(ie, Date.now()), be.set(ee, ye)
    }

    function Ke(ee) {
      const ie = be.get(ee);
      if (!ie) return [];
      const He = Date.now();
      for (const [be, Me] of ie) He - Me >= ye.n && ie.delete(be);
      return [...ie.keys()]
    }
  },
  37537: (ee, ie, He) => {
    function ye(ee, ie) {
      const He = ie.toLowerCase();
      for (const ye of ee)
        if (ye.toLowerCase() === He) return !0;
      return !1
    }

    function be(ee, ie, He) {
      const be = [],
        Me = [],
        Ke = [];
      for (const Ue of ee) !Ue.isError && Ue.name && ("inGame" === Ue.location.status && Ue.location.inLobbyName === ie || ye(He, Ue.name) ? Me.push({
        friend: Ue,
        place: "here"
      }) : "offline" === Ue.location.status ? Ke.push({
        friend: Ue,
        place: "offline"
      }) : be.push({
        friend: Ue,
        place: "online"
      }));
      return [...be, ...Me, ...Ke]
    }

    function Me(ee, ie, He) {
      const be = [],
        Me = ee.flatMap((ee => "here" === ee.place ? [ee.friend.name] : []));
      for (const Ke of [...Me, ...ie]) ye(be, Ke) || ye(He, Ke) || be.push(Ke);
      return be
    }

    function Ke(ee, ie) {
      return null === ee || void 0 === ee || !ee.canManage || ye(ee.whitelist, ie) ? "none" : "whitelist" === ee.visibility ? "required" : "quiet"
    }

    function Ue(ee) {
      if (null === ee) return !0;
      const {
        visibility: ie
      } = ee;
      return "public" === ie || "unlisted" === ie || "whitelist" === ie && ee.canManage
    }

    function Fe(ee, ie, He) {
      if (He) {
        const He = ie.filter((ie => !ye(ee.whitelist, ie)));
        return {
          ...ee,
          whitelist: [...ee.whitelist, ...He]
        }
      }
      return {
        ...ee,
        whitelist: ee.whitelist.filter((ee => !ye(ie, ee)))
      }
    }

    function Je(ee, ie) {
      const He = [];
      for (let ye = 0; ye < ee.length; ye += ie) He.push(ee.slice(ye, ye + ie));
      return He
    }
    He.d(ie, {
      c: () => Ue,
      d: () => Me,
      g: () => be,
      h: () => ye,
      i: () => Je,
      l: () => Ke,
      o: () => Fe
    })
  },
  37838: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(59),
      be = He(2532);

    function Me() {
      const ee = (0, be.i)("lobbyLeaderboardInfo");
      return (0, ye.useMemo)((() => function(ee) {
        if (null === ee) return null;
        const ie = Object.entries(ee),
          He = ie.filter((ee => {
            let [, ie] = ee;
            return void 0 !== ie
          }));
        if (He.length === ie.length) return ee;
        const ye = Object.fromEntries(He),
          be = Object.keys(ee).filter((ee => !Object.hasOwn(ye, ee)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${be.join(", ")}`), ye
      }(ee)), [ee])
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);