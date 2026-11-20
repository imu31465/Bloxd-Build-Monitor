export const id = 214;
export const ids = [214];
export const modules = {
  40372: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      LobbyManageView: () => mz
    });
    var hv = Pv(52),
      Sv = Pv(1465),
      ev = Pv(2324),
      gv = Pv(2337),
      pv = Pv(2340),
      dv = Pv(36098);

    function Nv() {
      const [vv, zv] = (0, hv.useState)(new Map);
      return {
        get: zv => vv.get(zv),
        hold: (0, hv.useCallback)(((vv, Pv, hv) => {
          zv((zv => new Map(zv).set(vv, Pv))), hv.then((() => {
            zv((zv => {
              const Pv = new Map(zv);
              return Pv.delete(vv), Pv
            }))
          }))
        }), [])
      }
    }
    var lv = Pv(1035),
      Tv = Pv.n(lv),
      Wv = Pv(1175),
      wv = Pv(1042),
      av = Pv(1327),
      sv = Pv(2480),
      Cv = Pv(4765),
      iv = Pv(3329);
    var cv = Pv(1923),
      Gv = Pv(1442);

    function mv(vv, zv, Pv) {
      const hv = vv.filter((vv => vv.name !== zv)),
        Sv = hv.filter((vv => "none" === vv.role)).sort(((vv, zv) => zv.at - vv.at)),
        ev = hv.filter((vv => "none" !== vv.role)).sort(((vv, zv) => Pv.indexOf(vv.role) - Pv.indexOf(zv.role) || zv.at - vv.at));
      return [...vv.some((vv => vv.name === zv)) && null !== zv ? [zv] : [], ...[...Sv, ...ev].map((vv => vv.name))]
    }

    function jv(vv, zv) {
      const Pv = vv.banned.map((vv => vv.name)),
        hv = new Set(Pv);
      return {
        here: mv(vv.here, zv, vv.roles.map((vv => vv.role))),
        away: vv.away.filter((vv => !hv.has(vv.name))).map((vv => vv.name)),
        banned: Pv
      }
    }

    function fv(vv, zv) {
      const Pv = vv.here.find((vv => vv.name === zv));
      if (Pv) return {
        section: "here",
        player: Pv
      };
      const hv = vv.banned.find((vv => vv.name === zv));
      if (hv) return {
        section: "banned",
        bannedAt: hv.at
      };
      const Sv = vv.away.find((vv => vv.name === zv));
      return Sv ? {
        section: "away",
        player: Sv
      } : {
        section: "gone"
      }
    }
    const Fv = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var Yv = Pv(2472),
      nv = Pv(36086),
      Ov = Pv(36236),
      Dv = Pv(2917),
      Kv = Pv(312);

    function Vv(vv, zv, Pv) {
      return zv.map((zv => {
        if ("string" === typeof zv) return zv;
        const hv = "str" in zv ? zv.str : zv;
        return "string" === typeof hv ? hv : "entityName" in hv ? hv.entityName : "translationKey" in hv ? vv(hv.translationKey, (0, Wv.i)(hv.params, Pv)) : ""
      })).join("")
    }

    function Uv(vv, zv, Pv, hv, Sv) {
      return Sv - hv < 6e4 ? vv(`${Pv}JustNow`) : vv(Pv, {
        time: (0, Kv.gb)((0, Wv.g)(zv, Pv), hv, Sv)
      })
    }
    var Rv = Pv(1858),
      xv = Pv(1647),
      tv = Pv(1082);

    function qv(vv) {
      let {
        status: zv
      } = vv;
      return (0, tv.jsx)("span", {
        className: Tv()("LobbyManageStatus", {
          LobbyManageStatusRefused: !zv.ok
        }),
        children: (0, tv.jsx)(Rv.c, {
          text: zv.text
        })
      })
    }

    function Iv(vv) {
      let {
        names: zv,
        cap: Pv,
        filterFrom: Sv,
        moreLabel: ev,
        reveal: gv = null,
        renderRow: pv
      } = vv;
      const {
        t: dv
      } = (0, Wv.x)(), [Nv, lv] = (0, hv.useState)(!1), [Tv, av] = (0, hv.useState)(""), Cv = Nv || null !== gv && zv.indexOf(gv) >= Pv, iv = (Cv || zv.length <= Pv) && null !== Sv && zv.length > Sv, cv = Tv.trim().toLowerCase();
      let Gv = Cv ? zv : zv.slice(0, Pv);
      return iv && "" !== cv && (Gv = Gv.filter((vv => vv.toLowerCase().includes(cv)))), (0, tv.jsxs)(tv.Fragment, {
        children: [iv && (0, tv.jsx)(xv.c, {
          className: "LobbyManageFilter",
          placeholderText: dv("lobbyManage:findName"),
          ariaLabel: dv("lobbyManage:findName"),
          onValueChange: vv => {
            av(vv)
          }
        }), Gv.length > 0 && (0, tv.jsx)("div", {
          className: "PlayerRows",
          children: Gv.map(((vv, zv) => pv(vv, Gv.length - zv)))
        }), !Cv && zv.length > Pv && (0, tv.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, tv.jsx)(sv.b, {
            label: (0, tv.jsxs)(tv.Fragment, {
              children: [ev, " ", (0, tv.jsx)(wv.b, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              lv(!0)
            }
          })
        })]
      })
    }

    function Qv(vv) {
      let {
        value: zv,
        placeholder: Pv,
        ariaLabel: Sv,
        maxLength: ev,
        wide: gv = !1,
        onSave: pv
      } = vv;
      const dv = (0, hv.useRef)(null),
        [Nv, lv] = (0, hv.useState)(0),
        Wv = (0, hv.useRef)(!0),
        wv = (0, hv.useRef)(null),
        av = (0, hv.useRef)({
          value: zv,
          onSave: pv
        });
      av.current = {
        value: zv,
        onSave: pv
      };
      const sv = () => {
        const vv = wv.current;
        wv.current = null, null !== vv && vv !== av.current.value && av.current.onSave(vv).then((() => {
          Wv.current && lv((vv => vv + 1))
        }))
      };
      return (0, hv.useEffect)((() => {
        null === wv.current && dv.current && (dv.current.value = zv)
      }), [zv, Nv]), (0, hv.useEffect)((() => () => {
        Wv.current = !1, sv()
      }), []), (0, tv.jsx)("div", {
        className: Tv()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: gv
        }),
        onBlur: sv,
        children: (0, tv.jsx)(xv.c, {
          domRef: dv,
          defaultValue: zv,
          placeholderText: Pv,
          ariaLabel: Sv,
          maxLength: ev,
          onValueChange: vv => {
            wv.current = vv
          },
          onEnter: sv
        })
      })
    }
    const Zv = ["mod", "coOwner"],
      Av = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function Lv(vv) {
      var zv, Pv, ev;
      let {
        name: gv,
        place: pv,
        openedIn: dv,
        isYou: lv,
        manage: Tv,
        hiddenNames: av,
        zIndex: sv
      } = vv;
      const {
        t: Cv,
        selectedLanguage: iv
      } = (0, Wv.x)(), [cv, mv] = (0, hv.useState)(null), {
        state: jv
      } = Tv, fv = `player:${gv}`, Kv = function(vv, zv) {
        if ("banned" === vv.section) return {
          ...Fv,
          unban: !0
        };
        if ("gone" === vv.section) return Fv;
        const {
          player: Pv
        } = vv, hv = "here" === vv.section, Sv = hv || "none" !== Pv.role ? Pv.can.roles : [];
        return {
          gamemode: hv && zv && null !== Pv.gamemode && Pv.can.gamemode,
          roles: Sv,
          fixedRole: 0 === Sv.length && "none" !== Pv.role ? Pv.role : null,
          kick: hv && Pv.can.kick,
          ban: Pv.can.ban,
          unban: !1
        }
      }(pv, null !== jv.gamemodes), Rv = Tv.statusOf(fv), xv = Tv.isPending(fv), Iv = Nv(), Qv = Date.now(), Lv = vv => {
        var zv, Pv;
        return null !== (zv = null === (Pv = (vv => jv.roles.find((zv => zv.role === vv)))(vv)) || void 0 === Pv ? void 0 : Pv.label) && void 0 !== zv ? zv : vv
      }, Hv = vv => {
        const zv = Av[vv];
        return void 0 === zv ? void 0 : Cv(zv)
      }, Mv = "here" === pv.section || "away" === pv.section ? pv.player : null, yv = "here" === pv.section ? pv.player.id : null, {
        playerSocialPreview: Bv,
        isFriend: Jv
      } = null === yv ? {
        playerSocialPreview: (0, Ov.g)(gv, null),
        isFriend: !1
      } : (0, nv.c)(yv, gv), Ev = function() {
        Tv.send(...arguments)
      }, ov = (vv, zv) => {
        Iv.hold("role", vv, Tv.send({
          type: "setRole",
          name: gv,
          role: vv
        }, fv, zv))
      };
      let bv = null;
      if ("ban" === (null === cv || void 0 === cv ? void 0 : cv.kind)) bv = Cv("lobbyManageEntry:banConfirm", {
        playerName: gv
      });
      else if ("role" === (null === cv || void 0 === cv ? void 0 : cv.kind)) {
        var rv;
        bv = `${Cv("lobbyManage:roleConfirm",{playerName:gv,role:Lv(cv.role)})} ${null!==(rv=Hv(cv.role))&&void 0!==rv?rv:""}`
      } else if (Rv) bv = (0, tv.jsx)(qv, {
        status: Rv
      });
      else if (lv) bv = Cv("lobbyManage:you");
      else if ("here" === pv.section) "none" === pv.player.role && Qv - pv.player.at < 6e5 && (bv = Uv(Cv, iv.code, "lobbyManage:joinedAgo", pv.player.at, Qv));
      else if ("away" === pv.section) {
        if (pv.player.at > 0) {
          const vv = "kicked" === pv.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          bv = Uv(Cv, iv.code, vv, pv.player.at, Qv)
        }
      } else "banned" === pv.section ? null !== pv.bannedAt && (bv = Uv(Cv, iv.code, "lobbyManage:bannedAgo", pv.bannedAt, Qv)) : "banned" === dv && (bv = Cv("lobbyManageEntry:unbanned"));
      return (0, tv.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": gv,
        children: (0, tv.jsxs)(Yv.f, {
          playerSocialPreview: Bv,
          isFriend: Jv,
          status: bv,
          opensProfileCard: !lv && (0, nv.d)(!0, gv, av),
          zIndex: sv,
          children: [null !== cv && (0, tv.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === cv.kind && (0, tv.jsxs)(Gv.A, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                mv(null), Ev({
                  type: "ban",
                  name: gv
                }, fv)
              },
              children: [(0, tv.jsx)(wv.b, {
                name: "gavel"
              }), (0, tv.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: Cv("lobbyManageEntry:ban")
              })]
            }), "role" === cv.kind && (0, tv.jsx)(Gv.d, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: cv.role
              },
              onClick: () => {
                mv(null), ov(cv.role)
              },
              children: Cv("lobbyManage:makeRole", {
                role: Lv(cv.role)
              })
            }), (0, tv.jsx)(Gv.e, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                mv(null)
              },
              children: Cv("general:cancel")
            })]
          }), null === cv && (0, tv.jsxs)(tv.Fragment, {
            children: [(0, tv.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [Kv.gamemode && null !== Mv && (0, tv.jsx)(Dv.e, {
                options: (null !== (zv = jv.gamemodes) && void 0 !== zv ? zv : []).map((vv => ({
                  value: vv.value,
                  label: Vv(Cv, vv.label, av)
                }))),
                value: null !== (Pv = Iv.get("gamemode")) && void 0 !== Pv ? Pv : Mv.gamemode,
                disabled: xv,
                onChange: vv => {
                  (0, Sv.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: vv.value
                  }), Iv.hold("gamemode", vv.value, Tv.send({
                    type: "setGamemode",
                    name: gv,
                    gamemode: vv.value
                  }, fv))
                }
              }), Kv.roles.length > 0 && null !== Mv && (0, tv.jsx)(Dv.e, {
                options: [...jv.roles].reverse().filter((vv => Kv.roles.includes(vv.role))).map((vv => ({
                  value: vv.role,
                  label: vv.label
                }))),
                value: null !== (ev = Iv.get("role")) && void 0 !== ev ? ev : Mv.role,
                disabled: xv,
                onChange: vv => {
                  var zv;
                  (zv = vv.value) !== (null === Mv || void 0 === Mv ? void 0 : Mv.role) && (Zv.includes(zv) ? mv({
                    kind: "role",
                    role: zv
                  }) : ((0, Sv.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: zv
                  }), ov(zv, Hv(zv))))
                }
              }), null !== Kv.fixedRole && (0, tv.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: Lv(Kv.fixedRole)
              })]
            }), (0, tv.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [Kv.kick && (0, tv.jsxs)(Gv.e, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${Cv("lobbyManageEntry:kick")} ${gv}`,
                disabled: xv,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  Ev({
                    type: "kick",
                    name: gv
                  }, fv)
                },
                children: [(0, tv.jsx)(wv.b, {
                  name: "person-falling-burst"
                }), (0, tv.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: Cv("lobbyManageEntry:kick")
                })]
              }), Kv.ban && (0, tv.jsxs)(Gv.E, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${Cv("lobbyManageEntry:ban")} ${gv}`,
                disabled: xv,
                padDestructive: !0,
                onClick: () => {
                  mv({
                    kind: "ban"
                  })
                },
                children: [(0, tv.jsx)(wv.b, {
                  name: "gavel"
                }), (0, tv.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: Cv("lobbyManageEntry:ban")
                })]
              }), Kv.unban && (0, tv.jsxs)(Gv.e, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${Cv("lobbyManageEntry:unban")} ${gv}`,
                disabled: xv,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  Ev({
                    type: "unban",
                    name: gv
                  }, fv)
                },
                children: [(0, tv.jsx)(wv.b, {
                  name: "user-unlock"
                }), (0, tv.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: Cv("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function Hv(vv) {
      var zv, Pv, Sv, ev;
      let {
        manage: gv,
        focusRequest: pv,
        onFocused: dv
      } = vv;
      const {
        t: Nv
      } = (0, Wv.x)(), lv = (0, cv.h)("players"), Tv = (0, cv.h)("hiddenPlayerNames"), av = (0, hv.useRef)(null), {
        state: Cv
      } = gv, iv = null === lv.localId ? null : null !== (zv = null === (Pv = lv.byId[lv.localId]) || void 0 === Pv ? void 0 : Pv.name) && void 0 !== zv ? zv : null, [mv] = (0, hv.useState)((() => jv(Cv, iv))), Fv = function(vv, zv, Pv) {
        const hv = new Set([...vv.here, ...vv.away, ...vv.banned]),
          Sv = jv(zv, Pv),
          ev = zv => {
            const Pv = Sv[zv].filter((vv => !hv.has(vv)));
            for (const vv of Pv) hv.add(vv);
            return [...vv[zv], ...Pv]
          };
        return {
          here: ev("here"),
          away: ev("away"),
          banned: ev("banned")
        }
      }(mv, Cv, iv), [Yv, nv] = (0, hv.useState)(!1), Ov = function(vv, zv) {
        return vv.here.filter((vv => vv.name !== zv && "none" === vv.role && vv.can.kick)).length
      }(Cv, iv), Dv = gv.statusOf("kickAll");
      (0, hv.useEffect)((() => {
        var vv, zv;
        if (null === pv) return;
        const Pv = null === (vv = av.current) || void 0 === vv ? void 0 : vv.querySelector(`[data-lobby-manage-row="${CSS.escape(pv.name)}"]`);
        null === Pv || void 0 === Pv || Pv.scrollIntoView({
          block: "center"
        }), null === Pv || void 0 === Pv || null === (zv = Pv.querySelector(".ProfilePreview")) || void 0 === zv || zv.focus({
          preventScroll: !0
        }), dv(pv.seq)
      }), [null === pv || void 0 === pv ? void 0 : pv.seq]);
      const Kv = vv => (zv, Pv) => (0, tv.jsx)(Lv, {
        name: zv,
        place: fv(Cv, zv),
        openedIn: vv,
        isYou: zv === iv,
        manage: gv,
        hiddenNames: Tv,
        zIndex: Pv
      }, zv);
      return (0, tv.jsxs)("div", {
        ref: av,
        className: "LobbyManagePage",
        children: [Fv.here.length > 0 && (0, tv.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, tv.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, tv.jsx)(sv.b, {
              label: Nv("lobbyManage:here"),
              meta: Cv.here.length
            }), Ov >= 2 && !Yv && (0, tv.jsxs)(Gv.E, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: gv.isPending("kickAll"),
              onClick: () => {
                nv(!0)
              },
              children: [(0, tv.jsx)(wv.b, {
                name: "person-falling-burst"
              }), " ", Nv("lobbyManage:kickAll")]
            })]
          }), Yv && Ov >= 2 && (0, tv.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, tv.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: Nv("lobbyManage:kickAllConfirm", {
                count: Ov
              })
            }), (0, tv.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, tv.jsx)(Gv.A, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  nv(!1), gv.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: Nv("lobbyManage:kickAll")
              }), (0, tv.jsx)(Gv.e, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  nv(!1)
                },
                children: Nv("general:cancel")
              })]
            })]
          }), Dv && (0, tv.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, tv.jsx)(qv, {
              status: Dv
            })
          }), (0, tv.jsx)(Iv, {
            names: Fv.here,
            cap: Fv.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: Kv("here")
          })]
        }), Fv.away.length > 0 && (0, tv.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, tv.jsx)(sv.b, {
            label: Nv("lobbyManage:notHere"),
            meta: Fv.away.length
          }), (0, tv.jsx)(Iv, {
            names: Fv.away,
            cap: 5,
            filterFrom: null,
            moreLabel: Nv("lobbyManage:allCount", {
              count: Fv.away.length
            }),
            reveal: null !== (Sv = null === pv || void 0 === pv ? void 0 : pv.name) && void 0 !== Sv ? Sv : null,
            renderRow: Kv("away")
          })]
        }), Fv.banned.length > 0 && (0, tv.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, tv.jsx)(sv.b, {
            label: Nv("lobbyManage:banned"),
            meta: Fv.banned.length
          }), (0, tv.jsx)(Iv, {
            names: Fv.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: Nv("lobbyManage:allCount", {
              count: Fv.banned.length
            }),
            reveal: null !== (ev = null === pv || void 0 === pv ? void 0 : pv.name) && void 0 !== ev ? ev : null,
            renderRow: Kv("banned")
          })]
        })]
      })
    }
    var Mv = Pv(4386),
      yv = Pv(1612),
      Bv = Pv(36213),
      Jv = Pv(36229),
      Ev = Pv(36221),
      ov = Pv(36217),
      bv = Pv(36258),
      rv = Pv(36243),
      kv = Pv(36252);

    function Xv(vv) {
      const zv = new Set;
      for (const Pv of vv) zv.add(Pv.toLowerCase());
      return zv
    }

    function uv(vv) {
      var zv, Pv;
      let {
        state: Sv,
        lobbyName: ev,
        listed: gv,
        isListed: pv,
        xG: dv,
        Km: Nv,
        statusOf: lv
      } = vv;
      const {
        t: Tv,
        selectedLanguage: wv
      } = (0, Wv.x)(), av = (0, yv.l)(), Cv = (0, cv.h)("players"), iv = null === Cv.localId ? null : null !== (zv = null === (Pv = Cv.byId[Cv.localId]) || void 0 === Pv ? void 0 : Pv.name) && void 0 !== zv ? zv : null, Gv = (0, hv.useMemo)((() => (0, ov.i)(av.friends, ev, Sv.here.map((vv => vv.name)))), [av.friends, ev, Sv.here]), mv = new Map(Gv.map((vv => [vv.friend.name.toLowerCase(), vv]))), jv = function(vv) {
        let {
          refused: zv,
          listed: Pv,
          here: hv,
          friends: Sv,
          excluded: ev
        } = vv;
        const gv = Xv(ev),
          pv = vv => vv.filter((vv => {
            const zv = vv.toLowerCase();
            return !gv.has(zv) && (gv.add(zv), !0)
          }));
        return {
          added: [],
          refused: pv(zv),
          listed: pv(Pv),
          suggested: pv([...hv, ...Sv])
        }
      }({
        refused: Sv.refused.map((vv => vv.name)),
        listed: gv,
        here: Sv.here.map((vv => vv.name)),
        friends: Gv.flatMap((vv => "here" === vv.place ? [] : [vv.friend.name])),
        excluded: [...null === iv ? [] : [iv], ...[...Sv.here, ...Sv.away].flatMap((vv => "none" === vv.role || (0, ov.k)(gv, vv.name) ? [] : [vv.name]))]
      }), [fv] = (0, hv.useState)(jv), [Fv, Yv] = (0, hv.useState)([]), Dv = function(vv, zv, Pv) {
        const hv = Xv(Pv),
          Sv = Xv([...Pv, ...vv.refused, ...vv.listed, ...vv.suggested]),
          ev = Pv => [...vv[Pv].filter((vv => !hv.has(vv.toLowerCase()))), ...zv[Pv].filter((vv => {
            const zv = vv.toLowerCase();
            return !Sv.has(zv) && (Sv.add(zv), !0)
          }))];
        return {
          added: [...Pv],
          refused: ev("refused"),
          listed: ev("listed"),
          suggested: ev("suggested")
        }
      }(fv, jv, Fv), Kv = (vv, zv) => {
        var Pv, hv;
        const ev = vv.toLowerCase(),
          gv = mv.get(ev),
          Nv = Sv.here.find((vv => vv.name.toLowerCase() === ev)),
          Wv = Sv.refused.find((vv => vv.name.toLowerCase() === ev)),
          av = null !== (Pv = null === lv || void 0 === lv ? void 0 : lv(vv)) && void 0 !== Pv ? Pv : null;
        let sv = null;
        av ? sv = (0, tv.jsx)(qv, {
          status: av
        }) : Wv ? sv = Uv(Tv, wv.code, "lobbyManage:triedToJoinAgo", Wv.at, Date.now()) : gv && Nv ? sv = Tv("lobbyManage:friendHere") : gv ? sv = "online" === gv.place ? Tv("lobbyManage:friendOnline") : Tv("lobbyManage:friend") : Nv && (sv = Tv("lobbyManage:hereStatus"));
        let Cv = null !== (hv = null === gv || void 0 === gv ? void 0 : gv.friend) && void 0 !== hv ? hv : (0, Ov.g)(vv, null);
        return !gv && null !== Nv && void 0 !== Nv && Nv.id && (Cv = (0, nv.c)(Nv.id, Nv.name).playerSocialPreview), (0, tv.jsx)(rv.e, {
          playerSocialPreview: Cv,
          isFriend: void 0 !== gv,
          hideFriendBadge: !0,
          status: sv,
          zIndex: zv,
          MT: {
            on: pv(vv),
            onChange: zv => {
              dv(vv, zv)
            }
          }
        }, ev)
      }, Vv = [...Dv.added, ...Dv.refused];
      return (0, tv.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, tv.jsx)(sv.b, {
          label: Tv("worldSocial:whitelist"),
          meta: gv.length
        }), (0, tv.jsx)(kv.d, {
          label: Tv("lobbyManage:add"),
          icon: "user-check",
          placeholder: Tv("socialBar:enterPlayerName"),
          onSubmit: async vv => {
            const zv = await Nv(vv);
            return zv.ok && Yv((zv => [vv, ...zv])), zv
          }
        }), Vv.length > 0 && (0, tv.jsx)("div", {
          className: "PlayerRows",
          children: Vv.map(((vv, zv) => Kv(vv, Vv.length - zv)))
        }), (0, tv.jsx)(Iv, {
          names: Dv.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: Tv("lobbyManage:allOnWhitelist", {
            count: Dv.listed.length
          }),
          renderRow: Kv
        }), (0, tv.jsx)(Iv, {
          names: Dv.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: Tv("lobbyManage:allCount", {
            count: Dv.suggested.length
          }),
          renderRow: Kv
        })]
      })
    }

    function vz(vv) {
      let {
        manage: zv,
        listing: Pv
      } = vv;
      const {
        t: hv
      } = (0, Wv.x)(), ev = (vv, Pv) => ((0, Sv.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: vv
      }), zv.send({
        type: "setListing",
        field: vv,
        value: Pv
      }, `listing:${vv}`)), gv = vv => {
        const Pv = zv.statusOf(`listing:${vv}`);
        return Pv && !Pv.ok && (0, tv.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, tv.jsx)(qv, {
            status: Pv
          })
        })
      };
      return (0, tv.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, tv.jsx)(sv.b, {
          label: hv("lobbyManage:inWorldsList")
        }), (0, tv.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, tv.jsx)("div", {
            className: "SliderText",
            children: hv("lobbyManage:description")
          }), (0, tv.jsx)(Qv, {
            value: Pv.description,
            ariaLabel: hv("lobbyManage:description"),
            wide: !0,
            onSave: vv => ev("description", vv)
          })]
        }), gv("description"), (0, tv.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, tv.jsx)("div", {
            className: "SliderText",
            children: hv("lobbyManage:emojis")
          }), (0, tv.jsx)(Qv, {
            value: Pv.emojis,
            ariaLabel: hv("lobbyManage:emojis"),
            onSave: vv => ev("emojis", vv)
          })]
        }), gv("emojis"), (0, tv.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, tv.jsx)("div", {
            className: "SliderText",
            children: hv("lobbyManage:colour")
          }), (0, tv.jsx)(zz, {
            value: Pv.colour,
            ariaLabel: hv("lobbyManage:colour"),
            onSave: vv => {
              ev("colour", vv)
            }
          })]
        }), gv("colour")]
      })
    }

    function zz(vv) {
      let {
        value: zv,
        ariaLabel: Pv,
        onSave: Sv
      } = vv;
      const ev = (0, hv.useRef)(null),
        gv = (0, hv.useRef)({
          value: zv,
          onSave: Sv
        });
      gv.current = {
        value: zv,
        onSave: Sv
      };
      const pv = (0, hv.useRef)(null),
        dv = (0, hv.useRef)(!1),
        Nv = vv => {
          dv.current && vv.value !== gv.current.value && vv.value !== pv.current && (pv.current = vv.value, gv.current.onSave(vv.value))
        };
      return (0, hv.useEffect)((() => {
        ev.current && document.activeElement !== ev.current && (ev.current.value = zv)
      }), [zv]), (0, hv.useEffect)((() => {
        const vv = ev.current,
          zv = () => {
            Nv(vv)
          };
        return vv.addEventListener("change", zv), () => {
          vv.removeEventListener("change", zv), Nv(vv)
        }
      }), []), (0, tv.jsx)("input", {
        ref: ev,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: zv,
        "aria-label": Pv,
        onInput: () => {
          dv.current = !0
        },
        onBlur: vv => {
          Nv(vv.currentTarget)
        }
      })
    }

    function Pz(vv) {
      let {
        manage: zv
      } = vv;
      const {
        lobbyName: Pv,
        shownLobbyName: hv
      } = (0, cv.h)("connectedGame");
      return zv.state.you.canSetVisibility && null !== Pv ? (0, tv.jsx)(Sz, {
        manage: zv,
        lobbyName: Pv,
        worldCode: null !== hv && void 0 !== hv ? hv : Pv
      }, Pv) : (0, tv.jsx)(ez, {
        manage: zv,
        lobbyName: null !== Pv && void 0 !== Pv ? Pv : ""
      })
    }

    function hz(vv) {
      return vv.map((vv => vv.toLowerCase())).sort().join(",")
    }

    function Sz(vv) {
      var zv;
      let {
        manage: Pv,
        lobbyName: ev,
        worldCode: gv
      } = vv;
      const {
        t: pv
      } = (0, Wv.x)(), {
        settings: dv,
        loading: Nv,
        change: lv,
        retry: Tv,
        refresh: wv
      } = (0, Bv.i)(ev), Cv = (0, yv.l)(), {
        state: iv
      } = Pv, cv = (0, hv.useRef)(dv);
      cv.current = dv;
      const mv = hz(null !== (zv = iv.whitelist) && void 0 !== zv ? zv : []),
        jv = null !== iv.whitelist;
      (0, hv.useEffect)((() => {
        const vv = cv.current;
        null !== vv && (vv.visibility !== iv.visibility || jv && hz(vv.whitelist) !== mv) && wv()
      }), [iv.visibility, mv, jv, wv]);
      const fv = async (vv, zv) => {
        let Pv = null;
        return await lv(vv, zv, {
          quiet: !0,
          onAnswer: vv => {
            Pv = vv
          }
        }), Pv
      }, Fv = (vv, zv) => {
        null !== zv && "error" in zv && Pv.showStatus(vv, {
          ok: !1,
          text: [pv(zv.error)]
        })
      }, Yv = async vv => {
        if (null === dv || vv === dv.visibility) return;
        (0, Sv.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: vv
        });
        const zv = "whitelist" === vv ? (0, ov.e)((0, ov.i)(Cv.friends, ev, iv.here.map((vv => vv.name))), (0, bv.d)(ev), dv.whitelist) : [],
          Pv = await fv({
            setVisibility: vv
          }, (zv => ({
            ...zv,
            visibility: vv
          })));
        Fv("mode", Pv), null === Pv || "error" in Pv || await (async vv => {
          for (const zv of (0, ov.o)(vv, Mv.y))
            if (!await lv({
                whitelistAdd: zv
              }, (vv => (0, ov.t)(vv, zv, !0)))) return !1;
          return !0
        })(zv)
      }, nv = (0, hv.useMemo)((() => {
        var vv;
        if (null === dv) return [];
        const zv = null !== (vv = iv.whitelist) && void 0 !== vv ? vv : [];
        return [...zv.filter((vv => (0, ov.k)(dv.whitelist, vv))), ...dv.whitelist.filter((vv => !(0, ov.k)(zv, vv)))]
      }), [dv, iv.whitelist]), Ov = Pv.statusOf("mode");
      return (0, tv.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, tv.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, tv.jsx)(sv.b, {
            label: pv("worldSocial:whoCanJoin")
          }), null === dv && Nv && (0, tv.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, tv.jsx)(av.c, {})
          }), null === dv && !Nv && (0, tv.jsx)(Gv.e, {
            className: "SmallTextLight",
            onClick: Tv,
            children: pv("worldSocial:loadFailed")
          }), null !== dv && (0, tv.jsx)(Jv.d, {
            visibility: dv.visibility,
            onPick: vv => {
              Yv(vv)
            }
          }), Ov && (0, tv.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, tv.jsx)(qv, {
              status: Ov
            })
          }), null !== dv && "private" !== dv.visibility && (0, tv.jsx)(Ev.d, {
            worldCode: gv,
            message: null
          })]
        }), "whitelist" === (null === dv || void 0 === dv ? void 0 : dv.visibility) && (0, tv.jsx)(uv, {
          state: iv,
          lobbyName: ev,
          listed: nv,
          isListed: vv => (0, ov.k)(dv.whitelist, vv),
          xG: (vv, zv) => {
            (0, Sv.reportAnalyticsClick)(zv ? {
              id: "lobby_manage.whitelist_add",
              value: "MT"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), fv(zv ? {
              whitelistAdd: [vv]
            } : {
              whitelistRemove: vv
            }, (Pv => (0, ov.t)(Pv, [vv], zv))).then((zv => {
              Fv(`whitelist:${vv.toLowerCase()}`, zv)
            }))
          },
          Km: async vv => {
            (0, Sv.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const zv = await fv({
              whitelistAdd: [vv]
            }, (zv => (0, ov.t)(zv, [vv], !0)));
            return null === zv ? {
              ok: !1,
              error: pv("worldSocial:changeFailed")
            } : "error" in zv ? {
              ok: !1,
              error: pv(zv.error)
            } : (0, ov.k)(zv.notFound, vv) ? {
              ok: !1,
              error: pv("lobbyManage:noPlayerCalled", {
                playerName: vv
              })
            } : {
              ok: !0
            }
          },
          statusOf: vv => Pv.statusOf(`whitelist:${vv.toLowerCase()}`)
        }), "public" === (null === dv || void 0 === dv ? void 0 : dv.visibility) && null !== iv.listing && (0, tv.jsx)(vz, {
          manage: Pv,
          listing: iv.listing
        })]
      })
    }

    function ez(vv) {
      var zv;
      let {
        manage: Pv,
        lobbyName: hv
      } = vv;
      const {
        t: ev
      } = (0, Wv.x)(), {
        state: gv
      } = Pv, pv = Nv(), dv = null !== (zv = gv.whitelist) && void 0 !== zv ? zv : [];
      return (0, tv.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, tv.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, tv.jsx)(sv.b, {
            label: ev("worldSocial:whoCanJoin")
          }), (0, tv.jsx)("div", {
            className: "LobbyManageModeText",
            children: ev(`worldSocial:${gv.visibility}`)
          })]
        }), "whitelist" === gv.visibility && gv.you.canEditWhitelist && (0, tv.jsx)(uv, {
          state: gv,
          lobbyName: hv,
          listed: dv,
          isListed: vv => {
            var zv;
            return null !== (zv = pv.get(vv.toLowerCase())) && void 0 !== zv ? zv : (0, ov.k)(dv, vv)
          },
          xG: (vv, zv) => {
            (0, Sv.reportAnalyticsClick)(zv ? {
              id: "lobby_manage.whitelist_add",
              value: "MT"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const hv = vv.toLowerCase();
            pv.hold(hv, zv, Pv.send(zv ? {
              type: "whitelistAdd",
              names: [vv]
            } : {
              type: "whitelistRemove",
              name: vv
            }, `whitelist:${hv}`))
          },
          Km: async vv => {
            (0, Sv.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const zv = await Pv.send({
              type: "whitelistAdd",
              names: [vv]
            }, "whitelist-field");
            return zv.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, tv.jsx)(Rv.c, {
                text: zv.message
              })
            }
          },
          statusOf: vv => Pv.statusOf(`whitelist:${vv.toLowerCase()}`)
        }), "public" === gv.visibility && null !== gv.listing && (0, tv.jsx)(vz, {
          manage: Pv,
          listing: gv.listing
        })]
      })
    }
    var gz = Pv(4732),
      pz = Pv(1344);
    const dz = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const Nz = (0, hv.memo)((function(vv) {
      var zv;
      let {
        rule: Pv,
        value: hv,
        status: Sv,
        pending: ev,
        hiddenNames: gv,
        iJ: pv,
        onAction: dv
      } = vv;
      const {
        t: Nv
      } = (0, Wv.x)(), lv = vv => pv(Pv, vv), Tv = (vv, zv) => {
        dv(Pv, vv, zv)
      }, wv = Vv(Nv, Pv.label, gv), av = Pv.info ? Vv(Nv, Pv.info, gv) : void 0, sv = Pv.placeholder ? Vv(Nv, Pv.placeholder, gv) : void 0, Cv = (null !== (zv = Pv.options) && void 0 !== zv ? zv : []).map((vv => ({
        value: vv.value,
        label: Vv(Nv, vv.label, gv)
      }))), iv = Math.max(0, ...Cv.map((vv => function(vv) {
        let zv = 0;
        for (const Pv of vv) zv += dz.test(Pv) ? 2 : 1;
        return zv
      }(vv.label)))), cv = Sv && (0, tv.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, tv.jsx)(qv, {
          status: Sv
        })
      }), mv = (0, tv.jsxs)("div", {
        className: "SliderText",
        children: [wv, void 0 !== av && (0, tv.jsx)(pz.d, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: av
        })]
      });
      return "toggle" === Pv.kind ? (0, tv.jsxs)(tv.Fragment, {
        children: [(0, tv.jsx)(gz.e, {
          label: wv,
          checked: !0 === hv,
          circleInfoText: av,
          disabled: ev,
          onClick: lv
        }), cv]
      }) : "choice" === Pv.kind && Cv.length <= 3 ? (0, tv.jsxs)(tv.Fragment, {
        children: [(0, tv.jsx)(gz.f, {
          label: wv,
          options: Cv,
          value: String(hv),
          circleInfoText: av,
          onChange: lv
        }), cv]
      }) : (0, tv.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [mv, "choice" === Pv.kind && (0, tv.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": iv
          },
          children: (0, tv.jsx)(Dv.e, {
            options: Cv,
            value: String(hv),
            disabled: ev,
            onChange: vv => {
              lv(vv.value)
            }
          })
        }), ("number" === Pv.kind || "text" === Pv.kind) && (0, tv.jsx)(Qv, {
          value: null === hv ? "" : String(hv),
          placeholder: sv,
          ariaLabel: wv,
          onSave: vv => {
            const zv = vv.trim(),
              hv = Number(zv);
            return lv("number" === Pv.kind && "" !== zv && Number.isFinite(hv) ? hv : zv)
          }
        }), "action" === Pv.kind && (0, tv.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [Cv.length > 3 && (0, tv.jsx)(Dv.e, {
            options: Cv,
            value: {
              value: "",
              label: null !== sv && void 0 !== sv ? sv : wv
            },
            disabled: ev,
            onChange: vv => {
              Tv(vv.value)
            }
          }), Cv.length > 0 && Cv.length <= 3 && Cv.map((vv => (0, tv.jsx)(Gv.e, {
            className: "SmallTextLight",
            disabled: ev,
            onClick: () => {
              Tv(vv.value)
            },
            children: vv.label
          }, vv.value))), 0 === Cv.length && (0, tv.jsx)(Gv.e, {
            className: "SmallTextLight",
            disabled: ev,
            onClick: () => {
              Tv()
            },
            children: null !== sv && void 0 !== sv ? sv : wv
          })]
        }), "names" === Pv.kind && (0, tv.jsx)(lz, {
          names: Array.isArray(hv) ? hv : [],
          pending: ev,
          onAction: Tv
        }), cv]
      })
    }));

    function lz(vv) {
      let {
        names: zv,
        pending: Pv,
        onAction: Sv
      } = vv;
      const {
        t: ev
      } = (0, Wv.x)(), gv = (0, hv.useRef)(null), [pv, dv] = (0, hv.useState)(""), Nv = () => {
        const vv = pv.trim();
        "" !== vv && (Sv(vv, "add"), gv.current && (gv.current.value = ""), dv(""))
      };
      return (0, tv.jsxs)("div", {
        className: "LobbyManageNames",
        children: [zv.map((vv => (0, tv.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, tv.jsx)("span", {
            className: "LobbyManageNameText",
            children: vv
          }), (0, tv.jsx)(Gv.e, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: ev("lobbyManage:removeName", {
              name: vv
            }),
            disabled: Pv,
            onClick: () => {
              Sv(vv, "remove")
            },
            children: (0, tv.jsx)(wv.b, {
              name: "xmark"
            })
          })]
        }, vv))), (0, tv.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, tv.jsx)(xv.c, {
            domRef: gv,
            placeholderText: ev("lobbyManage:namePlaceholder"),
            ariaLabel: ev("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: vv => {
              dv(vv)
            },
            onEnter: Nv
          }), (0, tv.jsx)(Gv.e, {
            className: "SmallTextLight",
            disabled: Pv || "" === pv.trim(),
            onClick: Nv,
            children: ev("lobbyManage:addHere")
          })]
        })]
      })
    }
    const Tz = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function Wz(vv) {
      return Tz.flatMap((zv => {
        let {
          group: Pv
        } = zv;
        return vv.filter((vv => vv.group === Pv && void 0 === vv.parent))
      }))
    }

    function wz(vv) {
      let {
        manage: zv,
        rowsShown: Pv
      } = vv;
      const {
        t: ev
      } = (0, Wv.x)(), gv = (0, cv.h)("hiddenPlayerNames"), {
        rules: pv
      } = zv.state, dv = Nv(), lv = new Set(Wz(pv).slice(0, Pv)), Tv = vv => {
        const zv = dv.get(vv.key);
        return void 0 === zv ? vv.value : zv
      }, {
        hold: wv
      } = dv, av = (0, hv.useCallback)(((vv, Pv) => {
        (0, Sv.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: vv.key
        });
        const hv = zv.send({
          type: "setRule",
          key: vv.key,
          value: Pv
        }, `rule:${vv.key}`);
        return wv(vv.key, Pv, hv), hv
      }), [zv, wv]), Cv = (0, hv.useCallback)(((vv, Pv, hv) => {
        (0, Sv.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: vv.key
        }), zv.send({
          type: "ruleAction",
          key: vv.key,
          ...void 0 === Pv ? {} : {
            arg: Pv
          },
          ...void 0 === hv ? {} : {
            op: hv
          }
        }, `rule:${vv.key}`, void 0 === hv ? ev("lobbyManage:setJustNow") : void 0)
      }), [zv, ev]), iv = vv => {
        const Pv = `rule:${vv.key}`;
        return (0, tv.jsx)(Nz, {
          rule: vv,
          value: Tv(vv),
          status: zv.statusOf(Pv),
          pending: zv.isPending(Pv),
          hiddenNames: gv,
          iJ: av,
          onAction: Cv
        }, vv.key)
      };
      return (0, tv.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: Tz.map((vv => {
          let {
            group: zv,
            title: Pv
          } = vv;
          const Sv = pv.filter((vv => vv.group === zv && lv.has(vv)));
          return 0 === Sv.length ? null : (0, tv.jsxs)(hv.Fragment, {
            children: [(0, tv.jsx)(sv.b, {
              label: ev(Pv)
            }), Sv.map((vv => {
              const zv = pv.filter((zv => zv.parent === vv.key));
              return 0 === zv.length || !0 !== Tv(vv) ? iv(vv) : (0, tv.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [iv(vv), zv.map(iv)]
              }, vv.key)
            }))]
          }, zv)
        }))
      })
    }
    const az = {
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
      sz = 5,
      Cz = (0, hv.memo)((function(vv) {
        let {
          page: zv,
          manage: Pv,
          leaderboard: Sv,
          focusRequest: ev,
          onFocused: gv,
          ruleRowsShown: pv
        } = vv;
        return "leaderboard" === zv ? (0, tv.jsx)(hv.Suspense, {
          fallback: (0, tv.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, tv.jsx)(av.c, {})
          }),
          children: Sv
        }) : "joining" === zv ? (0, tv.jsx)(Pz, {
          manage: Pv
        }) : "rules" === zv ? (0, tv.jsx)(wz, {
          manage: Pv,
          rowsShown: pv
        }) : (0, tv.jsx)(Hv, {
          manage: Pv,
          focusRequest: ev,
          onFocused: gv
        })
      }));

    function iz(vv) {
      let {
        page: zv
      } = vv;
      const {
        t: Pv
      } = (0, Wv.x)(), hv = az[zv];
      return (0, tv.jsxs)(tv.Fragment, {
        children: [(0, tv.jsx)(wv.b, {
          name: hv.icon
        }), " ", (0, tv.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: Pv(hv.title)
        })]
      })
    }

    function cz(vv) {
      var zv;
      const {
        t: Pv
      } = (0, Wv.x)(), {
        pages: ev,
        landing: gv
      } = vv, dv = (0, hv.useRef)(null), Nv = (0, hv.useRef)(null), lv = (0, hv.useRef)(null), wv = (0, hv.useRef)(new Map), [av, cv] = (0, hv.useState)(null), Gv = (0, hv.useRef)(av), mv = (0, hv.useRef)(0), [jv, fv] = (0, hv.useState)(ev[0]), Fv = null !== av && void 0 !== av ? av : ev.includes(jv) ? jv : ev[0], [Yv] = (0, hv.useState)(null !== (zv = null === gv || void 0 === gv ? void 0 : gv.page) && void 0 !== zv ? zv : null), nv = null !== Yv && ev.includes(Yv) ? [Yv, ...ev.filter((vv => vv !== Yv))] : ev, Ov = Math.max(1, Math.ceil(Wz(vv.manage.state.rules).length / sz)), Dv = nv.flatMap((vv => "rules" === vv ? Array(Ov).fill(vv) : [vv])), Kv = function(vv, zv) {
        const [Pv, Sv] = (0, hv.useState)(vv), ev = Pv >= zv;
        return ev && Pv !== 1 / 0 && Sv(1 / 0), (0, hv.useLayoutEffect)((() => {
          if (ev) return;
          let vv = !0;
          return (0, iv.e)().then((() => {
            vv && Sv((vv => vv + 1))
          })), () => {
            vv = !1
          }
        }), [Pv, ev]), ev ? 1 / 0 : Pv
      }(1, Dv.length), Vv = Dv.slice(0, Kv), Uv = new Set(Vv), Rv = Kv < Dv.length, xv = Rv ? Vv.filter((vv => "rules" === vv)).length * sz : 1 / 0, qv = (0, hv.useRef)(vv.focusRequest);
      qv.current = vv.focusRequest;
      const Iv = vv => {
          Gv.current = vv, cv(vv)
        },
        Qv = () => {
          var vv, zv;
          dv.current.style.scrollPaddingTop = `${null!==(vv=null===(zv=lv.current)||void 0===zv?void 0:zv.offsetHeight)&&void 0!==vv?vv:0}px`
        },
        Zv = vv => {
          const zv = dv.current,
            Pv = wv.current.get(vv);
          if (void 0 === Pv) return;
          const hv = document.activeElement,
            Sv = qv.current,
            ev = null === Sv ? null : Pv.querySelector(`[data-lobby-manage-row="${CSS.escape(Sv.name)}"]`);
          Qv(), hv instanceof HTMLElement && null !== ev && void 0 !== ev && ev.contains(hv) ? hv.scrollIntoView({
            block: "center"
          }) : null === Pv.previousElementSibling ? zv.scrollTop = 0 : Pv.scrollIntoView({
            block: "start"
          }), mv.current = zv.scrollTop
        },
        Av = vv => {
          (0, Sv.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: vv
          }), Iv(vv), Zv(vv)
        },
        Lv = () => {
          var vv, zv;
          const Pv = dv.current,
            hv = Pv.getBoundingClientRect().top + (null !== (vv = null === (zv = lv.current) || void 0 === zv ? void 0 : zv.offsetHeight) && void 0 !== vv ? vv : 0),
            Sv = ev.map((vv => {
              var zv, Pv;
              return (null !== (zv = null === (Pv = wv.current.get(vv)) || void 0 === Pv ? void 0 : Pv.getBoundingClientRect().top) && void 0 !== zv ? zv : 1 / 0) - hv
            })),
            gv = !Rv && Pv.scrollTop + Pv.clientHeight >= Pv.scrollHeight - 1;
          fv(ev[(0, pv.g)(Sv, gv)])
        },
        Hv = () => {
          null !== Gv.current && (Iv(null), Lv())
        };
      (0, hv.useLayoutEffect)((() => {
        null !== gv && ev.includes(gv.page) && Av(gv.page)
      }), [null === gv || void 0 === gv ? void 0 : gv.seq]), (0, hv.useLayoutEffect)((() => {
        null === Gv.current || ev.includes(Gv.current) || Hv()
      }));
      const {
        onFocused: Mv
      } = vv, yv = (0, hv.useCallback)((vv => {
        null !== Gv.current && Zv(Gv.current), Mv(vv)
      }), [Mv]);
      (0, hv.useLayoutEffect)((() => {
        const vv = Gv.current;
        null !== vv && (!Rv || ev.indexOf(Dv[Kv - 1]) < ev.indexOf(vv)) && Zv(vv)
      }), [Kv]), (0, hv.useEffect)((() => {
        const vv = new ResizeObserver((() => {
          null !== Gv.current ? Zv(Gv.current) : Qv()
        }));
        return vv.observe(dv.current), vv.observe(Nv.current), () => {
          vv.disconnect()
        }
      }), []), (0, hv.useLayoutEffect)((() => {
        const vv = lv.current,
          zv = null === vv || void 0 === vv ? void 0 : vv.querySelector(".SegmentedToggleOptionSelected");
        zv && (vv.scrollLeft = Math.min(zv.offsetLeft, Math.max(vv.scrollLeft, zv.offsetLeft + zv.offsetWidth - vv.clientWidth)))
      }), [Fv]);
      return (0, tv.jsxs)("div", {
        ref: dv,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === Gv.current ? Lv() : Math.abs(dv.current.scrollTop - mv.current) > 1 && Hv()
        },
        onClick: vv => {
          var zv;
          null !== (zv = lv.current) && void 0 !== zv && zv.contains(vv.target) || Hv()
        },
        onFocus: vv => {
          var zv;
          const Pv = null === Gv.current ? null : wv.current.get(Gv.current);
          !Pv || Pv.contains(vv.target) || null !== (zv = lv.current) && void 0 !== zv && zv.contains(vv.target) || Hv()
        },
        children: [ev.length > 1 && (0, tv.jsx)("div", {
          ref: lv,
          className: "LobbyManageChips",
          children: (0, tv.jsx)(Cv.c, {
            options: ev.map((vv => ({
              value: vv,
              label: (0, tv.jsx)(iz, {
                page: vv
              }),
              ariaLabel: Pv(az[vv].title)
            }))),
            value: Fv,
            padTabs: "2",
            ariaLabel: Pv("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: Av
          })
        }), (0, tv.jsx)("div", {
          ref: Nv,
          className: Tv()("LobbyManageInner", {
            Staging: Rv
          }),
          children: ev.filter((vv => Uv.has(vv))).map((zv => {
            const Pv = zv === av;
            return (0, tv.jsxs)("section", {
              ref: vv => {
                vv ? wv.current.set(zv, vv) : wv.current.delete(zv)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": Pv || void 0,
              children: [ev.length > 1 && (0, tv.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": Pv || void 0,
                "data-pad-unavailable": Pv || void 0,
                children: (0, tv.jsx)(sv.b, {
                  label: (0, tv.jsx)(iz, {
                    page: zv
                  })
                })
              }), (0, tv.jsx)(Cz, {
                page: zv,
                manage: vv.manage,
                leaderboard: vv.leaderboard,
                focusRequest: vv.focusRequest,
                onFocused: yv,
                ruleRowsShown: "rules" === zv ? xv : 1 / 0
              })]
            }, zv)
          }))
        })]
      })
    }

    function Gz(vv) {
      return void 0 === (null === vv || void 0 === vv ? void 0 : vv.page) ? null : {
        page: vv.page,
        seq: vv.seq
      }
    }

    function mz(vv) {
      let {
        leaderboard: zv
      } = vv;
      const Pv = function() {
          const vv = (0, ev.i)("lobbyManage"),
            [zv, Pv] = (0, hv.useReducer)((vv => vv + 1), 0),
            [Sv] = (0, hv.useState)((() => new dv.d(Pv)));
          return (0, hv.useEffect)((() => {
            const vv = Sv.nextDeadline();
            if (null === vv) return;
            const zv = setTimeout((() => {
              Sv.expire(Date.now()), Pv()
            }), Math.max(0, vv - Date.now()));
            return () => {
              clearTimeout(zv)
            }
          })), (0, hv.useMemo)((() => null === vv ? null : {
            state: vv,
            send: (vv, zv, hv) => {
              const ev = Sv.send(vv, zv, null !== hv && void 0 !== hv ? hv : null);
              return Pv(), ev
            },
            statusOf: vv => Sv.statusOf(vv, Date.now()),
            showStatus: (vv, zv) => {
              Sv.show(vv, zv)
            },
            isPending: vv => Sv.isPending(vv)
          }), [vv, zv, Sv])
        }(),
        Nv = (0, pv.j)((0, ev.i)("lobbyLeaderboardInfo")),
        lv = (0, gv.i)(),
        [Tv, Wv] = (0, hv.useState)((() => Gz(lv))),
        [wv, av] = (0, hv.useState)(null);
      return (0, hv.useEffect)((() => {
        null === lv && (0, Sv.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, hv.useEffect)((() => {
        null !== lv && (Wv((vv => (null === vv || void 0 === vv ? void 0 : vv.seq) === lv.seq ? vv : Gz(lv))), void 0 !== lv.focusName && "players" === lv.page ? av({
          name: lv.focusName,
          seq: lv.seq
        }) : (0, gv.g)(lv.seq))
      }), [null === lv || void 0 === lv ? void 0 : lv.seq]), null === Pv ? null : (0, tv.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, tv.jsx)(cz, {
          pages: (0, pv.d)(Pv.state, Nv),
          manage: Pv,
          leaderboard: zv,
          focusRequest: wv,
          onFocused: gv.g,
          landing: Tv
        })
      })
    }
  },
  36098: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => lv,
      h: () => dv
    });
    var hv = Pv(1465),
      Sv = Pv(1903),
      ev = Pv(1876);
    const gv = 1e4;
    let pv = 0;

    function dv(vv) {
      const zv = ++pv;
      return new Promise((Pv => {
        const pv = zv => {
            dv(), clearTimeout(Nv), !1 === (null === zv || void 0 === zv ? void 0 : zv.ok) && (0, hv.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: vv.type
            }), Pv(zv)
          },
          dv = Sv.c.subscribe("lobbyManage", (vv => {
            const Pv = function(vv, zv) {
              var Pv;
              return null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.results.find((vv => vv.requestId === zv))) && void 0 !== Pv ? Pv : null
            }(vv, zv);
            null !== Pv && pv(Pv)
          })),
          Nv = setTimeout((() => {
            pv(null)
          }), gv);
        ev.gameBridge.send("lobbyManage", {
          ...vv,
          requestId: zv
        })
      }))
    }
    const Nv = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class lv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dv;
        this.onChange = vv, this.sendAction = zv, this.pending = new Map, this.statuses = new Map
      }
      send(vv, zv, Pv) {
        var hv;
        return this.statuses.delete(zv), this.pending.set(zv, (null !== (hv = this.pending.get(zv)) && void 0 !== hv ? hv : 0) + 1), this.sendAction(vv).then((vv => {
          var hv;
          const Sv = null !== vv && void 0 !== vv ? vv : {
              requestId: -1,
              ok: !1,
              message: Nv
            },
            ev = (null !== (hv = this.pending.get(zv)) && void 0 !== hv ? hv : 1) - 1;
          ev > 0 ? this.pending.set(zv, ev) : this.pending.delete(zv);
          const gv = !Sv.ok || Sv.message.length > 0 ? Sv.message : null === Pv ? null : [Pv];
          return null !== gv && this.statuses.set(zv, {
            ok: Sv.ok,
            text: gv,
            until: Date.now() + 4e3
          }), this.onChange(), Sv
        }))
      }
      show(vv, zv) {
        this.statuses.set(vv, {
          ...zv,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(vv) {
        for (const [zv, Pv] of this.statuses) Pv.until <= vv && this.statuses.delete(zv)
      }
      nextDeadline() {
        let vv = null;
        for (const Pv of this.statuses.values()) {
          var zv;
          vv = Math.min(null !== (zv = vv) && void 0 !== zv ? zv : 1 / 0, Pv.until)
        }
        return vv
      }
      statusOf(vv, zv) {
        const Pv = this.statuses.get(vv);
        return !Pv || Pv.until <= zv ? null : {
          ok: Pv.ok,
          text: Pv.text
        }
      }
      isPending(vv) {
        return this.pending.has(vv)
      }
    }
  },
  36086: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Nv,
      d: () => dv
    });
    var hv = Pv(602),
      Sv = Pv(1876),
      ev = Pv(1612),
      gv = Pv(73),
      pv = Pv(1243);

    function dv(vv, zv, Pv) {
      return gv.featureFlags.useSocialFeatures && vv && null === (0, pv.b)(zv, Pv)
    }

    function Nv(vv, zv) {
      var Pv, gv;
      const pv = ev.d.getSocialState().friends.find((vv => vv.name.toLowerCase() === zv.toLowerCase())),
        dv = Sv.gameBridge.latest("players").byId[vv],
        Nv = void 0 !== dv && dv.name === zv,
        lv = Nv && null !== (Pv = dv.cosmetics) && void 0 !== Pv ? Pv : void 0,
        Tv = pv && lv ? {
          ...pv,
          cosmetics: lv
        } : pv;
      return {
        playerSocialPreview: null !== Tv && void 0 !== Tv ? Tv : {
          isError: !1,
          name: zv,
          ranks: Nv ? [...dv.ranks] : [],
          cosmetics: null !== lv && void 0 !== lv ? lv : {},
          nameColour: null !== (gv = null === lv || void 0 === lv ? void 0 : lv.nameColour) && void 0 !== gv ? gv : hv.d,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== pv
      }
    }
  },
  36252: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Tv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1647),
      pv = Pv(1442),
      dv = Pv(1327),
      Nv = Pv(1042),
      lv = Pv(1082);

    function Tv(vv) {
      let {
        label: zv,
        icon: Pv,
        placeholder: Sv,
        onSubmit: Tv
      } = vv;
      const Wv = (0, hv.useRef)(null),
        [wv, av] = (0, hv.useState)(""),
        [sv, Cv] = (0, hv.useState)("Enter"),
        [iv, cv] = (0, hv.useState)(null);
      (0, hv.useEffect)((() => {
        if ("Success" !== sv && "Error" !== sv) return;
        const vv = setTimeout((() => {
          "Success" === sv && Wv.current && (Wv.current.value = "", av("")), Cv("Enter")
        }), "Success" === sv ? 1e3 : 4e3);
        return () => {
          clearTimeout(vv)
        }
      }), [sv]);
      const Gv = () => {
        const vv = wv.trim();
        "" !== vv && "Enter" === sv && (Cv("Loading"), Tv(vv).then((vv => {
          Wv.current && ("error" in vv ? null === vv.error ? Cv("Enter") : (cv(vv.error), Cv("Error")) : Cv("Success"))
        })))
      };
      return (0, lv.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: vv => {
          vv.target === Wv.current && "Escape" !== vv.key && vv.stopPropagation()
        },
        children: [(0, lv.jsxs)("div", {
          className: ev()("AddFriendBodyOverlay", `AddFriendBodyOverlay${sv}`),
          children: ["Loading" === sv && (0, lv.jsx)(dv.c, {}), "Success" === sv && (0, lv.jsx)(Nv.b, {
            name: "check"
          }), "Error" === sv && iv]
        }), (0, lv.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, lv.jsx)(gv.c, {
            className: "PlayerSearchInput",
            domRef: Wv,
            maxLength: 32,
            placeholderText: Sv,
            ariaLabel: Sv,
            stopPropagation: !1,
            onValueChange: vv => {
              av(vv)
            },
            onEnter: Gv
          }), (0, lv.jsxs)(pv.d, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== sv || "" === wv.trim(),
            onClick: Gv,
            children: [(0, lv.jsx)(Nv.b, {
              name: Pv
            }), " ", zv]
          })]
        })]
      })
    }
  },
  36229: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Tv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1175),
      pv = Pv(1042),
      dv = Pv(1082);
    const Nv = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      lv = ["unlisted", "public", "whitelist", "private"];

    function Tv(vv) {
      let {
        visibility: zv,
        onPick: Pv
      } = vv;
      const {
        t: Sv
      } = (0, gv.x)(), Tv = (0, hv.useRef)([]);
      return (0, dv.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Sv("worldSocial:whoCanJoin"),
        children: lv.map(((vv, hv) => {
          const gv = vv === zv;
          return (0, dv.jsxs)("button", {
            ref: vv => {
              Tv.current[hv] = vv
            },
            type: "button",
            className: ev()("WorldSocialTile", {
              WorldSocialTileSelected: gv
            }),
            "aria-pressed": gv,
            tabIndex: gv ? 0 : -1,
            onKeyDown: vv => {
              ((vv, zv) => {
                const Pv = "ArrowRight" === vv.key || "ArrowDown" === vv.key ? 1 : "ArrowLeft" === vv.key || "ArrowUp" === vv.key ? -1 : 0;
                var hv;
                0 !== Pv && (vv.preventDefault(), null === (hv = Tv.current[(zv + Pv + lv.length) % lv.length]) || void 0 === hv || hv.focus())
              })(vv, hv)
            },
            onClick: () => {
              Pv(vv)
            },
            children: [(0, dv.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, dv.jsx)(pv.b, {
                name: Nv[vv]
              })
            }), (0, dv.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, dv.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Sv(`worldSocial:${vv}`)
              }), (0, dv.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Sv(`worldSocial:${vv}Description`)
              })]
            })]
          }, vv)
        }))
      })
    }
  },
  36243: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv
    });
    var hv = Pv(1175),
      Sv = Pv(2472),
      ev = Pv(4129),
      gv = Pv(1082);

    function pv(vv) {
      let {
        MT: zv,
        children: Pv,
        ...pv
      } = vv;
      const {
        t: dv
      } = (0, hv.x)();
      return (0, gv.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          zv.onChange(!zv.on)
        },
        children: (0, gv.jsx)(Sv.f, {
          ...pv,
          opensProfileCard: !1,
          children: (0, gv.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: vv => {
              vv.stopPropagation()
            },
            children: [Pv, (0, gv.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, gv.jsx)(ev.e, {
                checked: zv.on,
                disabled: !1,
                ariaLabel: dv("worldSocial:letJoin", {
                  playerName: pv.playerSocialPreview.name
                }),
                onChange: vv => {
                  zv.onChange(vv.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36221: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => av
    });
    var hv = Pv(52),
      Sv = Pv(1175),
      ev = Pv(1827),
      gv = Pv(73),
      pv = Pv(22),
      dv = Pv(1465),
      Nv = Pv(2511),
      lv = Pv(8895),
      Tv = Pv(1442),
      Wv = Pv(1042),
      wv = Pv(1082);

    function av(vv) {
      let {
        worldCode: zv,
        message: Pv
      } = vv;
      const {
        t: av
      } = (0, Sv.x)(), {
        isTouchScreen: sv
      } = (0, pv.i)(["isTouchScreen"]), Cv = gv.featureFlags.canUseInviteLinks, iv = (0, lv.k)(Cv && null === Pv), [cv, Gv] = (0, Nv.i)(), mv = (0, hv.useRef)(null);
      if (null !== Pv) return (0, wv.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, wv.jsx)(Wv.b, {
          name: "lock"
        }), (0, wv.jsx)("span", {
          children: Pv
        })]
      });
      const jv = Cv ? iv : zv,
        fv = sv && Cv && (0, Nv.e)();
      return (0, wv.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!Cv && (0, wv.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: av("worldSocial:worldCode")
        }), (0, wv.jsx)("input", {
          ref: mv,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== jv && void 0 !== jv ? jv : "",
          "aria-label": av(Cv ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: vv => {
            vv.currentTarget.select()
          }
        }), (0, wv.jsxs)(Tv.d, {
          className: "WorldSocialCopy",
          disabled: null === jv,
          onClick: () => {
            null !== jv && (0, Nv.g)(jv, {
              useShareSheet: fv,
              onOutcome: vv => {
                if ((0, dv.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== vv || Cv ? vv : "code"
                  }), "copied" === vv) Gv();
                else if ("failed" === vv) {
                  var zv;
                  null === (zv = mv.current) || void 0 === zv || zv.focus(), ev.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, wv.jsx)(Wv.b, {
            name: cv ? "check" : fv ? "up-from-bracket" : "copy"
          }), " ", av(cv ? "general:copied" : fv ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36236: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => wv,
      d: () => Wv,
      g: () => Tv
    });
    var hv = Pv(602),
      Sv = Pv(1175),
      ev = Pv(1612),
      gv = Pv(2472),
      pv = Pv(2432),
      dv = Pv(1442),
      Nv = Pv(36243),
      lv = Pv(1082);

    function Tv(vv, zv) {
      var Pv;
      return {
        isError: !1,
        name: vv,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== zv && void 0 !== zv ? zv : {},
        nameColour: null !== (Pv = null === zv || void 0 === zv ? void 0 : zv.nameColour) && void 0 !== Pv ? Pv : hv.d,
        location: {
          status: "offline"
        }
      }
    }

    function Wv(vv) {
      let {
        player: zv,
        isFriend: Pv = !1,
        status: hv,
        showLocation: dv = void 0 === hv,
        MT: Tv,
        onSendFriendRequest: Wv,
        actions: wv,
        zIndex: av
      } = vv;
      const {
        t: sv
      } = (0, Sv.x)();
      let Cv = hv;
      null !== Tv && void 0 !== Tv && Tv.on && (Cv = (0, lv.jsxs)(lv.Fragment, {
        children: [null !== hv && void 0 !== hv ? hv : (0, lv.jsx)(pv.b, {
          socialPreview: zv
        }), (0, lv.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", sv("worldSocial:canJoin")]
        })]
      }));
      const iv = {
        playerSocialPreview: zv,
        isFriend: Pv,
        hideFriendBadge: !0,
        onFriendRemoved: Pv ? vv => {
          ev.d.removeFriendFromState(vv)
        } : void 0,
        status: Cv,
        showLocation: dv,
        onSendFriendRequest: Wv,
        zIndex: av
      };
      return Tv ? (0, lv.jsx)(Nv.e, {
        ...iv,
        MT: Tv,
        children: wv
      }) : (0, lv.jsx)(gv.f, {
        ...iv,
        opensProfileCard: !1,
        children: wv || void 0
      })
    }

    function wv(vv) {
      let {
        row: zv,
        MT: Pv,
        canInvite: hv,
        invited: ev,
        onInvite: gv,
        zIndex: pv
      } = vv;
      const {
        t: Nv
      } = (0, Sv.x)(), Tv = "online" === zv.place ? dv.d : dv.e;
      return (0, lv.jsx)(Wv, {
        player: zv.friend,
        isFriend: !0,
        status: "here" === zv.place ? Nv("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        MT: Pv,
        zIndex: pv,
        actions: hv && (0, lv.jsx)(Tv, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: ev,
          onClick: gv,
          ariaLabel: `${Nv("worldSocial:invite")} ${zv.friend.name}`,
          children: Nv(ev ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36213: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => dv,
      e: () => gv,
      i: () => Nv
    });
    var hv = Pv(52),
      Sv = Pv(4342),
      ev = Pv(1827);

    function gv(vv) {
      const zv = {
        lobbyName: vv,
        answer: null,
        response: Sv.e.getSocialSettings(vv)
      };
      return zv.response.then((vv => {
        zv.answer = vv
      })), zv
    }
    const pv = new Map;

    function dv(vv) {
      pv.set(vv.lobbyName, vv)
    }

    function Nv(vv) {
      const [zv] = (0, hv.useState)((() => function(vv) {
        var zv;
        const Pv = null !== (zv = pv.get(vv)) && void 0 !== zv ? zv : null;
        return null !== Pv && void 0 !== Pv && Pv.answer && "error" in Pv.answer ? null : Pv
      }(vv))), [Pv, gv] = (0, hv.useState)((() => null !== zv && void 0 !== zv && zv.answer && "settings" in zv.answer ? zv.answer.settings : null)), [dv, Nv] = (0, hv.useState)(!0), [lv, Tv] = (0, hv.useState)(null !== Pv), Wv = (0, hv.useRef)(Pv);
      Wv.current = Pv;
      const wv = (0, hv.useRef)(0),
        av = (0, hv.useRef)(0),
        sv = (0, hv.useRef)(!1),
        Cv = (0, hv.useRef)(!0),
        iv = (0, hv.useCallback)((async zv => {
          const Pv = ++wv.current,
            hv = await (null !== zv && void 0 !== zv ? zv : Sv.e.getSocialSettings(vv));
          Cv.current && Pv === wv.current && (Tv(!0), Nv(!1), "error" in hv || gv(hv.settings))
        }), [vv]),
        cv = (0, hv.useCallback)((() => {
          Nv(!0), iv()
        }), [iv]),
        Gv = (0, hv.useCallback)((() => {
          av.current > 0 ? sv.current = !0 : iv()
        }), [iv]);
      (0, hv.useEffect)((() => (Cv.current = !0, pv.delete(vv), Nv(!0), iv(null === zv || void 0 === zv ? void 0 : zv.response), () => {
        Cv.current = !1
      })), [iv, vv, zv]);
      const mv = vv => {
        wv.current++, Nv(!1), Wv.current = vv, gv(vv)
      };
      return {
        settings: Pv,
        loading: dv,
        answered: lv,
        retry: cv,
        refresh: Gv,
        change: async function(zv, Pv) {
          let {
            quiet: hv = !1,
            onAnswer: gv
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const pv = Wv.current;
          if (null === pv) return !1;
          mv(Pv(pv)), av.current > 0 && (sv.current = !0), av.current++;
          const dv = await Sv.e.setSocialSettings(vv, zv);
          av.current--;
          const Nv = !("error" in dv);
          if (!Cv.current) return Nv;
          if (null === gv || void 0 === gv || gv(dv), hv);
          else if ("error" in dv) ev.f.showMessage({
            translationKey: dv.error
          });
          else
            for (const vv of dv.notFound) ev.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: vv
              }
            });
          if (av.current > 0) return Nv;
          const lv = sv.current;
          return sv.current = !1, !lv && "settings" in dv ? mv(dv.settings) : (lv || mv(pv), iv()), Nv
        }
      }
    }
  },
  36258: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv,
      e: () => ev
    });
    var hv = Pv(144);
    const Sv = new Map;

    function ev(vv, zv) {
      var Pv;
      const hv = null !== (Pv = Sv.get(vv)) && void 0 !== Pv ? Pv : new Map;
      hv.set(zv, Date.now()), Sv.set(vv, hv)
    }

    function gv(vv) {
      const zv = Sv.get(vv);
      if (!zv) return [];
      const Pv = Date.now();
      for (const [Sv, ev] of zv) Pv - ev >= hv.q && zv.delete(Sv);
      return [...zv.keys()]
    }
  },
  36217: (vv, zv, Pv) => {
    function hv(vv, zv) {
      const Pv = zv.toLowerCase();
      for (const hv of vv)
        if (hv.toLowerCase() === Pv) return !0;
      return !1
    }

    function Sv(vv, zv, Pv) {
      const Sv = [],
        ev = [],
        gv = [];
      for (const pv of vv) !pv.isError && pv.name && ("inGame" === pv.location.status && pv.location.inLobbyName === zv || hv(Pv, pv.name) ? ev.push({
        friend: pv,
        place: "here"
      }) : "offline" === pv.location.status ? gv.push({
        friend: pv,
        place: "offline"
      }) : Sv.push({
        friend: pv,
        place: "online"
      }));
      return [...Sv, ...ev, ...gv]
    }

    function ev(vv, zv, Pv) {
      const Sv = [],
        ev = vv.flatMap((vv => "here" === vv.place ? [vv.friend.name] : []));
      for (const gv of [...ev, ...zv]) hv(Sv, gv) || hv(Pv, gv) || Sv.push(gv);
      return Sv
    }

    function gv(vv, zv) {
      return null === vv || void 0 === vv || !vv.canManage || hv(vv.whitelist, zv) ? "none" : "whitelist" === vv.visibility ? "required" : "quiet"
    }

    function pv(vv) {
      if (null === vv) return !0;
      const {
        visibility: zv
      } = vv;
      return "public" === zv || "unlisted" === zv || "whitelist" === zv && vv.canManage
    }

    function dv(vv, zv, Pv) {
      if (Pv) {
        const Pv = zv.filter((zv => !hv(vv.whitelist, zv)));
        return {
          ...vv,
          whitelist: [...vv.whitelist, ...Pv]
        }
      }
      return {
        ...vv,
        whitelist: vv.whitelist.filter((vv => !hv(zv, vv)))
      }
    }

    function Nv(vv, zv) {
      const Pv = [];
      for (let hv = 0; hv < vv.length; hv += zv) Pv.push(vv.slice(hv, hv + zv));
      return Pv
    }
    Pv.d(zv, {
      d: () => pv,
      e: () => ev,
      i: () => Sv,
      k: () => hv,
      o: () => Nv,
      r: () => gv,
      t: () => dv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);