export const id = 218;
export const ids = [218];
export const modules = {
  40669: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      LobbyManageView: () => Ae
    });
    var Dk = ik(60),
      fk = ik(1432),
      Sk = ik(36608),
      bk = ik(2432),
      rk = ik(2438),
      Pk = ik(2414),
      mk = ik(36101);

    function Mk() {
      const [kk, ek] = (0, Dk.useState)(new Map);
      return {
        get: ek => kk.get(ek),
        hold: (0, Dk.useCallback)(((kk, ik, Dk) => {
          ek((ek => new Map(ek).set(kk, ik))), Dk.then((() => {
            ek((ek => {
              const ik = new Map(ek);
              return ik.delete(kk), ik
            }))
          }))
        }), [])
      }
    }
    var Kk = ik(1021),
      xk = ik.n(Kk),
      nk = ik(1172),
      Uk = ik(1033),
      Hk = ik(1327),
      wk = ik(2591),
      lk = ik(4946),
      pk = ik(3521);
    var yk = ik(1922),
      Yk = ik(1410);

    function Lk(kk, ek, ik) {
      const Dk = kk.filter((kk => kk.name !== ek)),
        fk = Dk.filter((kk => "none" === kk.role)).sort(((kk, ek) => ek.at - kk.at)),
        Sk = Dk.filter((kk => "none" !== kk.role)).sort(((kk, ek) => ik.indexOf(kk.role) - ik.indexOf(ek.role) || ek.at - kk.at));
      return [...kk.some((kk => kk.name === ek)) && null !== ek ? [ek] : [], ...[...fk, ...Sk].map((kk => kk.name))]
    }

    function Ck(kk, ek) {
      const ik = kk.banned.map((kk => kk.name)),
        Dk = new Set(ik);
      return {
        here: Lk(kk.here, ek, kk.roles.map((kk => kk.role))),
        away: kk.away.filter((kk => !Dk.has(kk.name))).map((kk => kk.name)),
        banned: ik
      }
    }

    function Ak(kk, ek) {
      const ik = kk.here.find((kk => kk.name === ek));
      if (ik) return {
        section: "here",
        player: ik
      };
      const Dk = kk.banned.find((kk => kk.name === ek));
      if (Dk) return {
        section: "banned",
        bannedAt: Dk.at
      };
      const fk = kk.away.find((kk => kk.name === ek));
      return fk ? {
        section: "away",
        player: fk
      } : {
        section: "gone"
      }
    }
    const jk = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var sk = ik(2589),
      dk = ik(36090),
      Vk = ik(36305),
      Fk = ik(3098),
      uk = ik(314);

    function qk(kk, ek, ik) {
      return ek.map((ek => {
        if ("string" === typeof ek) return ek;
        const Dk = "str" in ek ? ek.str : ek;
        return "string" === typeof Dk ? Dk : "entityName" in Dk ? Dk.entityName : "translationKey" in Dk ? kk(Dk.translationKey, (0, nk.r)(Dk.params, ik)) : ""
      })).join("")
    }

    function Ik(kk, ek, ik, Dk, fk) {
      return fk - Dk < 6e4 ? kk(`${ik}JustNow`) : kk(ik, {
        time: (0, uk.T)((0, nk.n)(ek, ik), Dk, fk)
      })
    }
    var zk = ik(1858),
      Qk = ik(1648),
      vk = ik(1066);

    function Ek(kk) {
      let {
        status: ek
      } = kk;
      return (0, vk.jsx)("span", {
        className: xk()("LobbyManageStatus", {
          LobbyManageStatusRefused: !ek.ok
        }),
        children: (0, vk.jsx)(zk.e, {
          text: ek.text
        })
      })
    }

    function hk(kk) {
      let {
        names: ek,
        cap: ik,
        filterFrom: fk,
        moreLabel: Sk,
        reveal: bk = null,
        renderRow: rk
      } = kk;
      const {
        t: Pk
      } = (0, nk.D)(), [mk, Mk] = (0, Dk.useState)(!1), [Kk, xk] = (0, Dk.useState)(""), Hk = mk || null !== bk && ek.indexOf(bk) >= ik, lk = (Hk || ek.length <= ik) && null !== fk && ek.length > fk, pk = Kk.trim().toLowerCase();
      let yk = Hk ? ek : ek.slice(0, ik);
      return lk && "" !== pk && (yk = yk.filter((kk => kk.toLowerCase().includes(pk)))), (0, vk.jsxs)(vk.Fragment, {
        children: [lk && (0, vk.jsx)(Qk.b, {
          className: "LobbyManageFilter",
          placeholderText: Pk("lobbyManage:findName"),
          ariaLabel: Pk("lobbyManage:findName"),
          onValueChange: kk => {
            xk(kk)
          }
        }), yk.length > 0 && (0, vk.jsx)("div", {
          className: "PlayerRows",
          children: yk.map(((kk, ek) => rk(kk, yk.length - ek)))
        }), !Hk && ek.length > ik && (0, vk.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, vk.jsx)(wk.d, {
            label: (0, vk.jsxs)(vk.Fragment, {
              children: [Sk, " ", (0, vk.jsx)(Uk.d, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              Mk(!0)
            }
          })
        })]
      })
    }

    function ak(kk) {
      let {
        value: ek,
        placeholder: ik,
        ariaLabel: fk,
        maxLength: Sk,
        wide: bk = !1,
        onSave: rk
      } = kk;
      const Pk = (0, Dk.useRef)(null),
        [mk, Mk] = (0, Dk.useState)(0),
        Kk = (0, Dk.useRef)(!0),
        nk = (0, Dk.useRef)(null),
        Uk = (0, Dk.useRef)({
          value: ek,
          onSave: rk
        });
      Uk.current = {
        value: ek,
        onSave: rk
      };
      const Hk = () => {
        const kk = nk.current;
        nk.current = null, null !== kk && kk !== Uk.current.value && Uk.current.onSave(kk).then((() => {
          Kk.current && Mk((kk => kk + 1))
        }))
      };
      return (0, Dk.useEffect)((() => {
        null === nk.current && Pk.current && (Pk.current.value = ek)
      }), [ek, mk]), (0, Dk.useEffect)((() => () => {
        Kk.current = !1, Hk()
      }), []), (0, vk.jsx)("div", {
        className: xk()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: bk
        }),
        onBlur: Hk,
        children: (0, vk.jsx)(Qk.b, {
          domRef: Pk,
          defaultValue: ek,
          placeholderText: ik,
          ariaLabel: fk,
          maxLength: Sk,
          onValueChange: kk => {
            nk.current = kk
          },
          onEnter: Hk
        })
      })
    }
    const Wk = ["mod", "coOwner"],
      tk = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function Xk(kk) {
      var ek, ik, Sk;
      let {
        name: bk,
        place: rk,
        openedIn: Pk,
        isYou: mk,
        manage: Kk,
        hiddenNames: xk,
        zIndex: Hk
      } = kk;
      const {
        t: wk,
        selectedLanguage: lk
      } = (0, nk.D)(), [pk, yk] = (0, Dk.useState)(null), {
        state: Lk
      } = Kk, Ck = `player:${bk}`, Ak = function(kk, ek) {
        if ("banned" === kk.section) return {
          ...jk,
          unban: !0
        };
        if ("gone" === kk.section) return jk;
        const {
          player: ik
        } = kk, Dk = "here" === kk.section, fk = Dk || "none" !== ik.role ? ik.can.roles : [];
        return {
          gamemode: Dk && ek && null !== ik.gamemode && ik.can.gamemode,
          roles: fk,
          fixedRole: 0 === fk.length && "none" !== ik.role ? ik.role : null,
          kick: Dk && ik.can.kick,
          ban: ik.can.ban,
          unban: !1
        }
      }(rk, null !== Lk.gamemodes), uk = Kk.statusOf(Ck), zk = Kk.isPending(Ck), Qk = Mk(), hk = Date.now(), ak = kk => {
        var ek, ik;
        return null !== (ek = null === (ik = (kk => Lk.roles.find((ek => ek.role === kk)))(kk)) || void 0 === ik ? void 0 : ik.label) && void 0 !== ek ? ek : kk
      }, Xk = kk => {
        const ek = tk[kk];
        return void 0 === ek ? void 0 : wk(ek)
      }, Bk = "here" === rk.section || "away" === rk.section ? rk.player : null, ck = "here" === rk.section ? rk.player.id : null, {
        playerSocialPreview: Tk,
        isFriend: Zk
      } = null === ck ? {
        playerSocialPreview: (0, Vk.d)(bk, null),
        isFriend: !1
      } : (0, dk.c)(ck, bk), Ok = function() {
        Kk.send(...arguments)
      }, gk = (kk, ek) => {
        Qk.hold("role", kk, Kk.send({
          type: "setRole",
          name: bk,
          role: kk
        }, Ck, ek))
      };
      let Gk = null;
      if ("ban" === (null === pk || void 0 === pk ? void 0 : pk.kind)) Gk = wk("lobbyManageEntry:banConfirm", {
        playerName: bk
      });
      else if ("role" === (null === pk || void 0 === pk ? void 0 : pk.kind)) {
        var Nk;
        Gk = `${wk("lobbyManage:roleConfirm",{playerName:bk,role:ak(pk.role)})} ${null!==(Nk=Xk(pk.role))&&void 0!==Nk?Nk:""}`
      } else if (uk) Gk = (0, vk.jsx)(Ek, {
        status: uk
      });
      else if (mk) Gk = wk("lobbyManage:you");
      else if ("here" === rk.section) "none" === rk.player.role && hk - rk.player.at < 6e5 && (Gk = Ik(wk, lk.code, "lobbyManage:joinedAgo", rk.player.at, hk));
      else if ("away" === rk.section) {
        if (rk.player.at > 0) {
          const kk = "kicked" === rk.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          Gk = Ik(wk, lk.code, kk, rk.player.at, hk)
        }
      } else "banned" === rk.section ? null !== rk.bannedAt && (Gk = Ik(wk, lk.code, "lobbyManage:bannedAgo", rk.bannedAt, hk)) : "banned" === Pk && (Gk = wk("lobbyManageEntry:unbanned"));
      return (0, vk.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": bk,
        children: (0, vk.jsxs)(sk.i, {
          playerSocialPreview: Tk,
          isFriend: Zk,
          status: Gk,
          opensProfileCard: !mk && (0, dk.d)(!0, bk, xk),
          zIndex: Hk,
          children: [null !== pk && (0, vk.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === pk.kind && (0, vk.jsxs)(Yk.R, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                yk(null), Ok({
                  type: "ban",
                  name: bk
                }, Ck)
              },
              children: [(0, vk.jsx)(Uk.d, {
                name: "gavel"
              }), (0, vk.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: wk("lobbyManageEntry:ban")
              })]
            }), "role" === pk.kind && (0, vk.jsx)(Yk.f, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: pk.role
              },
              onClick: () => {
                yk(null), gk(pk.role)
              },
              children: wk("lobbyManage:makeRole", {
                role: ak(pk.role)
              })
            }), (0, vk.jsx)(Yk.j, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                yk(null)
              },
              children: wk("general:cancel")
            })]
          }), null === pk && (0, vk.jsxs)(vk.Fragment, {
            children: [(0, vk.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [Ak.gamemode && null !== Bk && (0, vk.jsx)(Fk.e, {
                options: (null !== (ek = Lk.gamemodes) && void 0 !== ek ? ek : []).map((kk => ({
                  value: kk.value,
                  label: qk(wk, kk.label, xk)
                }))),
                value: null !== (ik = Qk.get("gamemode")) && void 0 !== ik ? ik : Bk.gamemode,
                disabled: zk,
                onChange: kk => {
                  (0, fk.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: kk.value
                  }), Qk.hold("gamemode", kk.value, Kk.send({
                    type: "setGamemode",
                    name: bk,
                    gamemode: kk.value
                  }, Ck))
                }
              }), Ak.roles.length > 0 && null !== Bk && (0, vk.jsx)(Fk.e, {
                options: [...Lk.roles].reverse().filter((kk => Ak.roles.includes(kk.role))).map((kk => ({
                  value: kk.role,
                  label: kk.label
                }))),
                value: null !== (Sk = Qk.get("role")) && void 0 !== Sk ? Sk : Bk.role,
                disabled: zk,
                onChange: kk => {
                  var ek;
                  (ek = kk.value) !== (null === Bk || void 0 === Bk ? void 0 : Bk.role) && (Wk.includes(ek) ? yk({
                    kind: "role",
                    role: ek
                  }) : ((0, fk.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: ek
                  }), gk(ek, Xk(ek))))
                }
              }), null !== Ak.fixedRole && (0, vk.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: ak(Ak.fixedRole)
              })]
            }), (0, vk.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [Ak.kick && (0, vk.jsxs)(Yk.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${wk("lobbyManageEntry:kick")} ${bk}`,
                disabled: zk,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  Ok({
                    type: "kick",
                    name: bk
                  }, Ck)
                },
                children: [(0, vk.jsx)(Uk.d, {
                  name: "person-falling-burst"
                }), (0, vk.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: wk("lobbyManageEntry:kick")
                })]
              }), Ak.ban && (0, vk.jsxs)(Yk.U, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${wk("lobbyManageEntry:ban")} ${bk}`,
                disabled: zk,
                padDestructive: !0,
                onClick: () => {
                  yk({
                    kind: "ban"
                  })
                },
                children: [(0, vk.jsx)(Uk.d, {
                  name: "gavel"
                }), (0, vk.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: wk("lobbyManageEntry:ban")
                })]
              }), Ak.unban && (0, vk.jsxs)(Yk.j, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${wk("lobbyManageEntry:unban")} ${bk}`,
                disabled: zk,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  Ok({
                    type: "unban",
                    name: bk
                  }, Ck)
                },
                children: [(0, vk.jsx)(Uk.d, {
                  name: "user-unlock"
                }), (0, vk.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: wk("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function Bk(kk) {
      var ek, ik, fk, Sk;
      let {
        manage: bk,
        focusRequest: rk,
        onFocused: Pk
      } = kk;
      const {
        t: mk
      } = (0, nk.D)(), Mk = (0, yk.h)("players"), Kk = (0, yk.h)("hiddenPlayerNames"), xk = (0, Dk.useRef)(null), {
        state: Hk
      } = bk, lk = null === Mk.localId ? null : null !== (ek = null === (ik = Mk.byId[Mk.localId]) || void 0 === ik ? void 0 : ik.name) && void 0 !== ek ? ek : null, [pk] = (0, Dk.useState)((() => Ck(Hk, lk))), Lk = function(kk, ek, ik) {
        const Dk = new Set([...kk.here, ...kk.away, ...kk.banned]),
          fk = Ck(ek, ik),
          Sk = ek => {
            const ik = fk[ek].filter((kk => !Dk.has(kk)));
            for (const kk of ik) Dk.add(kk);
            return [...kk[ek], ...ik]
          };
        return {
          here: Sk("here"),
          away: Sk("away"),
          banned: Sk("banned")
        }
      }(pk, Hk, lk), [jk, sk] = (0, Dk.useState)(!1), dk = function(kk, ek) {
        return kk.here.filter((kk => kk.name !== ek && "none" === kk.role && kk.can.kick)).length
      }(Hk, lk), Vk = bk.statusOf("kickAll");
      (0, Dk.useEffect)((() => {
        var kk, ek;
        if (null === rk) return;
        const ik = null === (kk = xk.current) || void 0 === kk ? void 0 : kk.querySelector(`[data-lobby-manage-row="${CSS.escape(rk.name)}"]`);
        null === ik || void 0 === ik || ik.scrollIntoView({
          block: "center"
        }), null === ik || void 0 === ik || null === (ek = ik.querySelector(".ProfilePreview")) || void 0 === ek || ek.focus({
          preventScroll: !0
        }), Pk(rk.seq)
      }), [null === rk || void 0 === rk ? void 0 : rk.seq]);
      const Fk = kk => (ek, ik) => (0, vk.jsx)(Xk, {
        name: ek,
        place: Ak(Hk, ek),
        openedIn: kk,
        isYou: ek === lk,
        manage: bk,
        hiddenNames: Kk,
        zIndex: ik
      }, ek);
      return (0, vk.jsxs)("div", {
        ref: xk,
        className: "LobbyManagePage",
        children: [Lk.here.length > 0 && (0, vk.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, vk.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, vk.jsx)(wk.d, {
              label: mk("lobbyManage:here"),
              meta: Hk.here.length
            }), dk >= 2 && !jk && (0, vk.jsxs)(Yk.U, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: bk.isPending("kickAll"),
              onClick: () => {
                sk(!0)
              },
              children: [(0, vk.jsx)(Uk.d, {
                name: "person-falling-burst"
              }), " ", mk("lobbyManage:kickAll")]
            })]
          }), jk && dk >= 2 && (0, vk.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, vk.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: mk("lobbyManage:kickAllConfirm", {
                count: dk
              })
            }), (0, vk.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, vk.jsx)(Yk.R, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  sk(!1), bk.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: mk("lobbyManage:kickAll")
              }), (0, vk.jsx)(Yk.j, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  sk(!1)
                },
                children: mk("general:cancel")
              })]
            })]
          }), Vk && (0, vk.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, vk.jsx)(Ek, {
              status: Vk
            })
          }), (0, vk.jsx)(hk, {
            names: Lk.here,
            cap: Lk.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: Fk("here")
          })]
        }), Lk.away.length > 0 && (0, vk.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, vk.jsx)(wk.d, {
            label: mk("lobbyManage:notHere"),
            meta: Lk.away.length
          }), (0, vk.jsx)(hk, {
            names: Lk.away,
            cap: 5,
            filterFrom: null,
            moreLabel: mk("lobbyManage:allCount", {
              count: Lk.away.length
            }),
            reveal: null !== (fk = null === rk || void 0 === rk ? void 0 : rk.name) && void 0 !== fk ? fk : null,
            renderRow: Fk("away")
          })]
        }), Lk.banned.length > 0 && (0, vk.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, vk.jsx)(wk.d, {
            label: mk("lobbyManage:banned"),
            meta: Lk.banned.length
          }), (0, vk.jsx)(hk, {
            names: Lk.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: mk("lobbyManage:allCount", {
              count: Lk.banned.length
            }),
            reveal: null !== (Sk = null === rk || void 0 === rk ? void 0 : rk.name) && void 0 !== Sk ? Sk : null,
            renderRow: Fk("banned")
          })]
        })]
      })
    }
    var ck = ik(4563),
      Tk = ik(1617),
      Zk = ik(36270),
      Ok = ik(36296),
      gk = ik(36287),
      Gk = ik(36278),
      Nk = ik(36324),
      Rk = ik(36312),
      Jk = ik(36321);

    function ke(kk) {
      const ek = new Set;
      for (const ik of kk) ek.add(ik.toLowerCase());
      return ek
    }

    function ee(kk) {
      var ek, ik;
      let {
        state: fk,
        lobbyName: Sk,
        listed: bk,
        isListed: rk,
        Iy: Pk,
        rY: mk,
        statusOf: Mk
      } = kk;
      const {
        t: Kk,
        selectedLanguage: xk
      } = (0, nk.D)(), Uk = (0, Tk.i)(), Hk = (0, yk.h)("players"), lk = null === Hk.localId ? null : null !== (ek = null === (ik = Hk.byId[Hk.localId]) || void 0 === ik ? void 0 : ik.name) && void 0 !== ek ? ek : null, pk = (0, Dk.useMemo)((() => (0, Gk.j)(Uk.friends, Sk, fk.here.map((kk => kk.name)))), [Uk.friends, Sk, fk.here]), Yk = new Map(pk.map((kk => [kk.friend.name.toLowerCase(), kk]))), Lk = function(kk) {
        let {
          refused: ek,
          listed: ik,
          here: Dk,
          friends: fk,
          excluded: Sk
        } = kk;
        const bk = ke(Sk),
          rk = kk => kk.filter((kk => {
            const ek = kk.toLowerCase();
            return !bk.has(ek) && (bk.add(ek), !0)
          }));
        return {
          added: [],
          refused: rk(ek),
          listed: rk(ik),
          suggested: rk([...Dk, ...fk])
        }
      }({
        refused: fk.refused.map((kk => kk.name)),
        listed: bk,
        here: fk.here.map((kk => kk.name)),
        friends: pk.flatMap((kk => "here" === kk.place ? [] : [kk.friend.name])),
        excluded: [...null === lk ? [] : [lk], ...[...fk.here, ...fk.away].flatMap((kk => "none" === kk.role || (0, Gk.l)(bk, kk.name) ? [] : [kk.name]))]
      }), [Ck] = (0, Dk.useState)(Lk), [Ak, jk] = (0, Dk.useState)([]), sk = function(kk, ek, ik) {
        const Dk = ke(ik),
          fk = ke([...ik, ...kk.refused, ...kk.listed, ...kk.suggested]),
          Sk = ik => [...kk[ik].filter((kk => !Dk.has(kk.toLowerCase()))), ...ek[ik].filter((kk => {
            const ek = kk.toLowerCase();
            return !fk.has(ek) && (fk.add(ek), !0)
          }))];
        return {
          added: [...ik],
          refused: Sk("refused"),
          listed: Sk("listed"),
          suggested: Sk("suggested")
        }
      }(Ck, Lk, Ak), Fk = (kk, ek) => {
        var ik, Dk;
        const Sk = kk.toLowerCase(),
          bk = Yk.get(Sk),
          mk = fk.here.find((kk => kk.name.toLowerCase() === Sk)),
          nk = fk.refused.find((kk => kk.name.toLowerCase() === Sk)),
          Uk = null !== (ik = null === Mk || void 0 === Mk ? void 0 : Mk(kk)) && void 0 !== ik ? ik : null;
        let Hk = null;
        Uk ? Hk = (0, vk.jsx)(Ek, {
          status: Uk
        }) : nk ? Hk = Ik(Kk, xk.code, "lobbyManage:triedToJoinAgo", nk.at, Date.now()) : bk && mk ? Hk = Kk("lobbyManage:friendHere") : bk ? Hk = "online" === bk.place ? Kk("lobbyManage:friendOnline") : Kk("lobbyManage:friend") : mk && (Hk = Kk("lobbyManage:hereStatus"));
        let wk = null !== (Dk = null === bk || void 0 === bk ? void 0 : bk.friend) && void 0 !== Dk ? Dk : (0, Vk.d)(kk, null);
        return !bk && null !== mk && void 0 !== mk && mk.id && (wk = (0, dk.c)(mk.id, mk.name).playerSocialPreview), (0, vk.jsx)(Rk.d, {
          playerSocialPreview: wk,
          isFriend: void 0 !== bk,
          hideFriendBadge: !0,
          status: Hk,
          zIndex: ek,
          Px: {
            on: rk(kk),
            onChange: ek => {
              Pk(kk, ek)
            }
          }
        }, Sk)
      }, uk = [...sk.added, ...sk.refused];
      return (0, vk.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, vk.jsx)(wk.d, {
          label: Kk("worldSocial:whitelist"),
          meta: bk.length
        }), (0, vk.jsx)(Jk.d, {
          label: Kk("lobbyManage:add"),
          icon: "user-check",
          placeholder: Kk("socialBar:enterPlayerName"),
          onSubmit: async kk => {
            const ek = await mk(kk);
            return ek.ok && jk((ek => [kk, ...ek])), ek
          }
        }), uk.length > 0 && (0, vk.jsx)("div", {
          className: "PlayerRows",
          children: uk.map(((kk, ek) => Fk(kk, uk.length - ek)))
        }), (0, vk.jsx)(hk, {
          names: sk.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: Kk("lobbyManage:allOnWhitelist", {
            count: sk.listed.length
          }),
          renderRow: Fk
        }), (0, vk.jsx)(hk, {
          names: sk.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: Kk("lobbyManage:allCount", {
            count: sk.suggested.length
          }),
          renderRow: Fk
        })]
      })
    }

    function ie(kk) {
      let {
        manage: ek,
        listing: ik
      } = kk;
      const {
        t: Dk
      } = (0, nk.D)(), Sk = (kk, ik) => ((0, fk.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: kk
      }), ek.send({
        type: "setListing",
        field: kk,
        value: ik
      }, `listing:${kk}`)), bk = kk => {
        const ik = ek.statusOf(`listing:${kk}`);
        return ik && !ik.ok && (0, vk.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, vk.jsx)(Ek, {
            status: ik
          })
        })
      };
      return (0, vk.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, vk.jsx)(wk.d, {
          label: Dk("lobbyManage:inWorldsList")
        }), (0, vk.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, vk.jsx)("div", {
            className: "SliderText",
            children: Dk("lobbyManage:description")
          }), (0, vk.jsx)(ak, {
            value: ik.description,
            ariaLabel: Dk("lobbyManage:description"),
            wide: !0,
            onSave: kk => Sk("description", kk)
          })]
        }), bk("description"), (0, vk.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, vk.jsx)("div", {
            className: "SliderText",
            children: Dk("lobbyManage:emojis")
          }), (0, vk.jsx)(ak, {
            value: ik.emojis,
            ariaLabel: Dk("lobbyManage:emojis"),
            onSave: kk => Sk("emojis", kk)
          })]
        }), bk("emojis"), (0, vk.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, vk.jsx)("div", {
            className: "SliderText",
            children: Dk("lobbyManage:colour")
          }), (0, vk.jsx)(De, {
            value: ik.colour,
            ariaLabel: Dk("lobbyManage:colour"),
            onSave: kk => {
              Sk("colour", kk)
            }
          })]
        }), bk("colour")]
      })
    }

    function De(kk) {
      let {
        value: ek,
        ariaLabel: ik,
        onSave: fk
      } = kk;
      const Sk = (0, Dk.useRef)(null),
        bk = (0, Dk.useRef)({
          value: ek,
          onSave: fk
        });
      bk.current = {
        value: ek,
        onSave: fk
      };
      const rk = (0, Dk.useRef)(null),
        Pk = (0, Dk.useRef)(!1),
        mk = kk => {
          Pk.current && kk.value !== bk.current.value && kk.value !== rk.current && (rk.current = kk.value, bk.current.onSave(kk.value))
        };
      return (0, Dk.useEffect)((() => {
        Sk.current && document.activeElement !== Sk.current && (Sk.current.value = ek)
      }), [ek]), (0, Dk.useEffect)((() => {
        const kk = Sk.current,
          ek = () => {
            mk(kk)
          };
        return kk.addEventListener("change", ek), () => {
          kk.removeEventListener("change", ek), mk(kk)
        }
      }), []), (0, vk.jsx)("input", {
        ref: Sk,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: ek,
        "aria-label": ik,
        onInput: () => {
          Pk.current = !0
        },
        onBlur: kk => {
          mk(kk.currentTarget)
        }
      })
    }

    function fe(kk) {
      let {
        manage: ek
      } = kk;
      const {
        lobbyName: ik,
        shownLobbyName: Dk
      } = (0, yk.h)("connectedGame");
      return ek.state.you.canSetVisibility && null !== ik ? (0, vk.jsx)(be, {
        manage: ek,
        lobbyName: ik,
        worldCode: null !== Dk && void 0 !== Dk ? Dk : ik
      }, ik) : (0, vk.jsx)(re, {
        manage: ek,
        lobbyName: null !== ik && void 0 !== ik ? ik : ""
      })
    }

    function Se(kk) {
      return kk.map((kk => kk.toLowerCase())).sort().join(",")
    }

    function be(kk) {
      var ek;
      let {
        manage: ik,
        lobbyName: Sk,
        worldCode: bk
      } = kk;
      const {
        t: rk
      } = (0, nk.D)(), {
        settings: Pk,
        loading: mk,
        change: Mk,
        retry: Kk,
        refresh: xk
      } = (0, Zk.i)(Sk), Uk = (0, Tk.i)(), {
        state: lk
      } = ik, pk = (0, Dk.useRef)(Pk);
      pk.current = Pk;
      const yk = Se(null !== (ek = lk.whitelist) && void 0 !== ek ? ek : []),
        Lk = null !== lk.whitelist;
      (0, Dk.useEffect)((() => {
        const kk = pk.current;
        null !== kk && (kk.visibility !== lk.visibility || Lk && Se(kk.whitelist) !== yk) && xk()
      }), [lk.visibility, yk, Lk, xk]);
      const Ck = async (kk, ek) => {
        let ik = null;
        return await Mk(kk, ek, {
          quiet: !0,
          onAnswer: kk => {
            ik = kk
          }
        }), ik
      }, Ak = (kk, ek) => {
        null !== ek && "error" in ek && ik.showStatus(kk, {
          ok: !1,
          text: [rk(ek.error)]
        })
      }, jk = async kk => {
        if (null === Pk || kk === Pk.visibility) return;
        (0, fk.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: kk
        });
        const ek = "whitelist" === kk ? (0, Gk.f)((0, Gk.j)(Uk.friends, Sk, lk.here.map((kk => kk.name))), (0, Nk.b)(Sk), Pk.whitelist) : [],
          ik = await Ck({
            setVisibility: kk
          }, (ek => ({
            ...ek,
            visibility: kk
          })));
        Ak("mode", ik), null === ik || "error" in ik || await (async kk => {
          for (const ek of (0, Gk.p)(kk, ck.E))
            if (!await Mk({
                whitelistAdd: ek
              }, (kk => (0, Gk.u)(kk, ek, !0)))) return !1;
          return !0
        })(ek)
      }, sk = (0, Dk.useMemo)((() => {
        var kk;
        if (null === Pk) return [];
        const ek = null !== (kk = lk.whitelist) && void 0 !== kk ? kk : [];
        return [...ek.filter((kk => (0, Gk.l)(Pk.whitelist, kk))), ...Pk.whitelist.filter((kk => !(0, Gk.l)(ek, kk)))]
      }), [Pk, lk.whitelist]), dk = ik.statusOf("mode");
      return (0, vk.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, vk.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, vk.jsx)(wk.d, {
            label: rk("worldSocial:whoCanJoin")
          }), null === Pk && mk && (0, vk.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, vk.jsx)(Hk.d, {})
          }), null === Pk && !mk && (0, vk.jsx)(Yk.j, {
            className: "SmallTextLight",
            onClick: Kk,
            children: rk("worldSocial:loadFailed")
          }), null !== Pk && (0, vk.jsx)(Ok.c, {
            visibility: Pk.visibility,
            onPick: kk => {
              jk(kk)
            }
          }), dk && (0, vk.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, vk.jsx)(Ek, {
              status: dk
            })
          }), null !== Pk && "private" !== Pk.visibility && (0, vk.jsx)(gk.b, {
            worldCode: bk,
            message: null
          })]
        }), "whitelist" === (null === Pk || void 0 === Pk ? void 0 : Pk.visibility) && (0, vk.jsx)(ee, {
          state: lk,
          lobbyName: Sk,
          listed: sk,
          isListed: kk => (0, Gk.l)(Pk.whitelist, kk),
          Iy: (kk, ek) => {
            (0, fk.reportAnalyticsClick)(ek ? {
              id: "lobby_manage.whitelist_add",
              value: "Px"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), Ck(ek ? {
              whitelistAdd: [kk]
            } : {
              whitelistRemove: kk
            }, (ik => (0, Gk.u)(ik, [kk], ek))).then((ek => {
              Ak(`whitelist:${kk.toLowerCase()}`, ek)
            }))
          },
          rY: async kk => {
            (0, fk.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const ek = await Ck({
              whitelistAdd: [kk]
            }, (ek => (0, Gk.u)(ek, [kk], !0)));
            return null === ek ? {
              ok: !1,
              error: rk("worldSocial:changeFailed")
            } : "error" in ek ? {
              ok: !1,
              error: rk(ek.error)
            } : (0, Gk.l)(ek.notFound, kk) ? {
              ok: !1,
              error: rk("lobbyManage:noPlayerCalled", {
                playerName: kk
              })
            } : {
              ok: !0
            }
          },
          statusOf: kk => ik.statusOf(`whitelist:${kk.toLowerCase()}`)
        }), "public" === (null === Pk || void 0 === Pk ? void 0 : Pk.visibility) && null !== lk.listing && (0, vk.jsx)(ie, {
          manage: ik,
          listing: lk.listing
        })]
      })
    }

    function re(kk) {
      var ek;
      let {
        manage: ik,
        lobbyName: Dk
      } = kk;
      const {
        t: Sk
      } = (0, nk.D)(), {
        state: bk
      } = ik, rk = Mk(), Pk = null !== (ek = bk.whitelist) && void 0 !== ek ? ek : [];
      return (0, vk.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, vk.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, vk.jsx)(wk.d, {
            label: Sk("worldSocial:whoCanJoin")
          }), (0, vk.jsx)("div", {
            className: "LobbyManageModeText",
            children: Sk(`worldSocial:${bk.visibility}`)
          })]
        }), "whitelist" === bk.visibility && bk.you.canEditWhitelist && (0, vk.jsx)(ee, {
          state: bk,
          lobbyName: Dk,
          listed: Pk,
          isListed: kk => {
            var ek;
            return null !== (ek = rk.get(kk.toLowerCase())) && void 0 !== ek ? ek : (0, Gk.l)(Pk, kk)
          },
          Iy: (kk, ek) => {
            (0, fk.reportAnalyticsClick)(ek ? {
              id: "lobby_manage.whitelist_add",
              value: "Px"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const Dk = kk.toLowerCase();
            rk.hold(Dk, ek, ik.send(ek ? {
              type: "whitelistAdd",
              names: [kk]
            } : {
              type: "whitelistRemove",
              name: kk
            }, `whitelist:${Dk}`))
          },
          rY: async kk => {
            (0, fk.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const ek = await ik.send({
              type: "whitelistAdd",
              names: [kk]
            }, "whitelist-field");
            return ek.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, vk.jsx)(zk.e, {
                text: ek.message
              })
            }
          },
          statusOf: kk => ik.statusOf(`whitelist:${kk.toLowerCase()}`)
        }), "public" === bk.visibility && null !== bk.listing && (0, vk.jsx)(ie, {
          manage: ik,
          listing: bk.listing
        })]
      })
    }
    var Pe = ik(4926),
      me = ik(1345);
    const Me = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const Ke = (0, Dk.memo)((function(kk) {
      var ek;
      let {
        rule: ik,
        value: Dk,
        status: fk,
        pending: Sk,
        hiddenNames: bk,
        sC: rk,
        onAction: Pk
      } = kk;
      const {
        t: mk
      } = (0, nk.D)(), Mk = kk => rk(ik, kk), Kk = (kk, ek) => {
        Pk(ik, kk, ek)
      }, xk = qk(mk, ik.label, bk), Uk = ik.info ? qk(mk, ik.info, bk) : void 0, Hk = ik.placeholder ? qk(mk, ik.placeholder, bk) : void 0, wk = (null !== (ek = ik.options) && void 0 !== ek ? ek : []).map((kk => ({
        value: kk.value,
        label: qk(mk, kk.label, bk)
      }))), lk = Math.max(0, ...wk.map((kk => function(kk) {
        let ek = 0;
        for (const ik of kk) ek += Me.test(ik) ? 2 : 1;
        return ek
      }(kk.label)))), pk = fk && (0, vk.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, vk.jsx)(Ek, {
          status: fk
        })
      }), yk = (0, vk.jsxs)("div", {
        className: "SliderText",
        children: [xk, void 0 !== Uk && (0, vk.jsx)(me.e, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: Uk
        })]
      });
      return "toggle" === ik.kind ? (0, vk.jsxs)(vk.Fragment, {
        children: [(0, vk.jsx)(Pe.e, {
          label: xk,
          checked: !0 === Dk,
          circleInfoText: Uk,
          disabled: Sk,
          onClick: Mk
        }), pk]
      }) : "choice" === ik.kind && wk.length <= 3 ? (0, vk.jsxs)(vk.Fragment, {
        children: [(0, vk.jsx)(Pe.i, {
          label: xk,
          options: wk,
          value: String(Dk),
          circleInfoText: Uk,
          onChange: Mk
        }), pk]
      }) : (0, vk.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [yk, "choice" === ik.kind && (0, vk.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": lk
          },
          children: (0, vk.jsx)(Fk.e, {
            options: wk,
            value: String(Dk),
            disabled: Sk,
            onChange: kk => {
              Mk(kk.value)
            }
          })
        }), ("number" === ik.kind || "text" === ik.kind) && (0, vk.jsx)(ak, {
          value: null === Dk ? "" : String(Dk),
          placeholder: Hk,
          ariaLabel: xk,
          onSave: kk => {
            const ek = kk.trim(),
              Dk = Number(ek);
            return Mk("number" === ik.kind && "" !== ek && Number.isFinite(Dk) ? Dk : ek)
          }
        }), "action" === ik.kind && (0, vk.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [wk.length > 3 && (0, vk.jsx)(Fk.e, {
            options: wk,
            value: {
              value: "",
              label: null !== Hk && void 0 !== Hk ? Hk : xk
            },
            disabled: Sk,
            onChange: kk => {
              Kk(kk.value)
            }
          }), wk.length > 0 && wk.length <= 3 && wk.map((kk => (0, vk.jsx)(Yk.j, {
            className: "SmallTextLight",
            disabled: Sk,
            onClick: () => {
              Kk(kk.value)
            },
            children: kk.label
          }, kk.value))), 0 === wk.length && (0, vk.jsx)(Yk.j, {
            className: "SmallTextLight",
            disabled: Sk,
            onClick: () => {
              Kk()
            },
            children: null !== Hk && void 0 !== Hk ? Hk : xk
          })]
        }), "names" === ik.kind && (0, vk.jsx)(xe, {
          names: Array.isArray(Dk) ? Dk : [],
          pending: Sk,
          onAction: Kk
        }), pk]
      })
    }));

    function xe(kk) {
      let {
        names: ek,
        pending: ik,
        onAction: fk
      } = kk;
      const {
        t: Sk
      } = (0, nk.D)(), bk = (0, Dk.useRef)(null), [rk, Pk] = (0, Dk.useState)(""), mk = () => {
        const kk = rk.trim();
        "" !== kk && (fk(kk, "add"), bk.current && (bk.current.value = ""), Pk(""))
      };
      return (0, vk.jsxs)("div", {
        className: "LobbyManageNames",
        children: [ek.map((kk => (0, vk.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, vk.jsx)("span", {
            className: "LobbyManageNameText",
            children: kk
          }), (0, vk.jsx)(Yk.j, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: Sk("lobbyManage:removeName", {
              name: kk
            }),
            disabled: ik,
            onClick: () => {
              fk(kk, "remove")
            },
            children: (0, vk.jsx)(Uk.d, {
              name: "xmark"
            })
          })]
        }, kk))), (0, vk.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, vk.jsx)(Qk.b, {
            domRef: bk,
            placeholderText: Sk("lobbyManage:namePlaceholder"),
            ariaLabel: Sk("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: kk => {
              Pk(kk)
            },
            onEnter: mk
          }), (0, vk.jsx)(Yk.j, {
            className: "SmallTextLight",
            disabled: ik || "" === rk.trim(),
            onClick: mk,
            children: Sk("lobbyManage:addHere")
          })]
        })]
      })
    }
    const ne = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function Ue(kk, ek) {
      return ne.map((ik => {
        let {
          group: Dk,
          title: fk
        } = ik;
        const Sk = kk.filter((kk => kk.group === Dk && void 0 === kk.parent)).map((ik => {
          const Dk = !0 === ek(ik) ? kk.filter((kk => kk.parent === ik.key)) : [];
          return {
            rule: ik,
            children: Dk
          }
        }));
        return {
          group: Dk,
          title: fk,
          items: Sk
        }
      }))
    }

    function He(kk) {
      return kk.flatMap((kk => {
        let {
          items: ek
        } = kk;
        return ek.flatMap((kk => {
          let {
            rule: ek,
            children: ik
          } = kk;
          return [ek, ...ik]
        }))
      }))
    }

    function we(kk) {
      let {
        manage: ek,
        rowsShown: ik
      } = kk;
      const {
        t: Sk
      } = (0, nk.D)(), bk = (0, yk.h)("hiddenPlayerNames"), {
        rules: rk
      } = ek.state, Pk = Mk(), mk = kk => {
        const ek = Pk.get(kk.key);
        return void 0 === ek ? kk.value : ek
      }, Kk = Ue(rk, mk), [xk] = (0, Dk.useState)((() => He(Kk).map((kk => kk.key)))), Uk = ik === 1 / 0 ? null : new Set(xk.slice(0, ik)), Hk = kk => null === Uk || Uk.has(kk.key), {
        hold: lk
      } = Pk, pk = (0, Dk.useCallback)(((kk, ik) => {
        (0, fk.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: kk.key
        });
        const Dk = ek.send({
          type: "setRule",
          key: kk.key,
          value: ik
        }, `rule:${kk.key}`);
        return lk(kk.key, ik, Dk), Dk
      }), [ek, lk]), Yk = (0, Dk.useCallback)(((kk, ik, Dk) => {
        (0, fk.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: kk.key
        }), ek.send({
          type: "ruleAction",
          key: kk.key,
          ...void 0 === ik ? {} : {
            arg: ik
          },
          ...void 0 === Dk ? {} : {
            op: Dk
          }
        }, `rule:${kk.key}`, void 0 === Dk ? Sk("lobbyManage:setJustNow") : void 0)
      }), [ek, Sk]), Lk = kk => {
        const ik = `rule:${kk.key}`;
        return (0, vk.jsx)(Ke, {
          rule: kk,
          value: mk(kk),
          status: ek.statusOf(ik),
          pending: ek.isPending(ik),
          hiddenNames: bk,
          sC: pk,
          onAction: Yk
        }, kk.key)
      };
      return (0, vk.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: Kk.map((kk => {
          let {
            group: ek,
            title: ik,
            items: fk
          } = kk;
          const bk = fk.filter((kk => {
            let {
              rule: ek
            } = kk;
            return Hk(ek)
          }));
          return 0 === bk.length ? null : (0, vk.jsxs)(Dk.Fragment, {
            children: [(0, vk.jsx)(wk.d, {
              label: Sk(ik)
            }), bk.map((kk => {
              let {
                rule: ek,
                children: ik
              } = kk;
              return 0 === ik.length ? Lk(ek) : (0, vk.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [Lk(ek), ik.filter(Hk).map(Lk)]
              }, ek.key)
            }))]
          }, ek)
        }))
      })
    }
    const le = {
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
      pe = 5,
      ye = (0, Dk.memo)((function(kk) {
        let {
          page: ek,
          manage: ik,
          leaderboard: fk,
          focusRequest: Sk,
          onFocused: bk,
          ruleRowsShown: rk
        } = kk;
        return "leaderboard" === ek ? (0, vk.jsx)(Dk.Suspense, {
          fallback: (0, vk.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, vk.jsx)(Hk.d, {})
          }),
          children: fk
        }) : "joining" === ek ? (0, vk.jsx)(fe, {
          manage: ik
        }) : "rules" === ek ? (0, vk.jsx)(we, {
          manage: ik,
          rowsShown: rk
        }) : (0, vk.jsx)(Bk, {
          manage: ik,
          focusRequest: Sk,
          onFocused: bk
        })
      }));

    function Ye(kk) {
      let {
        page: ek
      } = kk;
      const {
        t: ik
      } = (0, nk.D)(), Dk = le[ek];
      return (0, vk.jsxs)(vk.Fragment, {
        children: [(0, vk.jsx)(Uk.d, {
          name: Dk.icon
        }), " ", (0, vk.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: ik(Dk.title)
        })]
      })
    }

    function Le(kk) {
      var ek;
      const {
        t: ik
      } = (0, nk.D)(), {
        pages: Sk,
        landing: bk
      } = kk, Pk = (0, Dk.useRef)(null), mk = (0, Dk.useRef)(null), Mk = (0, Dk.useRef)(null), Kk = (0, Dk.useRef)(new Map), [Uk, Hk] = (0, Dk.useState)(null), yk = (0, Dk.useRef)(Uk), Yk = (0, Dk.useRef)(0), [Lk, Ck] = (0, Dk.useState)(Sk[0]), Ak = null !== Uk && void 0 !== Uk ? Uk : Sk.includes(Lk) ? Lk : Sk[0], [jk] = (0, Dk.useState)(null !== (ek = null === bk || void 0 === bk ? void 0 : bk.page) && void 0 !== ek ? ek : null), sk = null !== jk && Sk.includes(jk) ? [jk, ...Sk.filter((kk => kk !== jk))] : Sk, [dk] = (0, Dk.useState)((() => {
        const ek = He(Ue(kk.manage.state.rules, (kk => kk.value)));
        return Math.max(1, Math.ceil(ek.length / pe))
      })), Vk = sk.flatMap((kk => "rules" === kk ? Array(dk).fill(kk) : [kk])), Fk = function(kk, ek) {
        const [ik, fk] = (0, Dk.useState)(kk), Sk = ik >= ek;
        return Sk && ik !== 1 / 0 && fk(1 / 0), (0, Dk.useLayoutEffect)((() => {
          if (Sk) return;
          let kk = !0;
          return (0, pk.f)().then((() => {
            kk && fk((kk => kk + 1))
          })), () => {
            kk = !1
          }
        }), [ik, Sk]), Sk ? 1 / 0 : ik
      }(1, Vk.length), uk = Vk.slice(0, Fk), qk = new Set(uk), Ik = Fk < Vk.length, zk = Ik ? uk.filter((kk => "rules" === kk)).length * pe : 1 / 0, Qk = (0, Dk.useRef)(kk.focusRequest);
      Qk.current = kk.focusRequest;
      const Ek = kk => {
          yk.current = kk, Hk(kk)
        },
        hk = () => {
          var kk, ek;
          Pk.current.style.scrollPaddingTop = `${null!==(kk=null===(ek=Mk.current)||void 0===ek?void 0:ek.offsetHeight)&&void 0!==kk?kk:0}px`
        },
        ak = kk => {
          const ek = Pk.current,
            ik = Kk.current.get(kk);
          if (void 0 === ik) return;
          const Dk = document.activeElement,
            fk = Qk.current,
            Sk = null === fk ? null : ik.querySelector(`[data-lobby-manage-row="${CSS.escape(fk.name)}"]`);
          hk(), Dk instanceof HTMLElement && null !== Sk && void 0 !== Sk && Sk.contains(Dk) ? Dk.scrollIntoView({
            block: "center"
          }) : null === ik.previousElementSibling ? ek.scrollTop = 0 : ik.scrollIntoView({
            block: "start"
          }), Yk.current = ek.scrollTop
        },
        Wk = kk => {
          (0, fk.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: kk
          }), Ek(kk), ak(kk)
        },
        tk = () => {
          var kk, ek;
          const ik = Pk.current,
            Dk = ik.getBoundingClientRect().top + (null !== (kk = null === (ek = Mk.current) || void 0 === ek ? void 0 : ek.offsetHeight) && void 0 !== kk ? kk : 0),
            fk = Sk.map((kk => {
              var ek, ik;
              return (null !== (ek = null === (ik = Kk.current.get(kk)) || void 0 === ik ? void 0 : ik.getBoundingClientRect().top) && void 0 !== ek ? ek : 1 / 0) - Dk
            })),
            bk = !Ik && ik.scrollTop + ik.clientHeight >= ik.scrollHeight - 1;
          Ck(Sk[(0, rk.j)(fk, bk)])
        },
        Xk = () => {
          null !== yk.current && (Ek(null), tk())
        };
      (0, Dk.useLayoutEffect)((() => {
        null !== bk && Sk.includes(bk.page) && Wk(bk.page)
      }), [null === bk || void 0 === bk ? void 0 : bk.seq]), (0, Dk.useLayoutEffect)((() => {
        null === yk.current || Sk.includes(yk.current) || Xk()
      }));
      const {
        onFocused: Bk
      } = kk, ck = (0, Dk.useCallback)((kk => {
        null !== yk.current && ak(yk.current), Bk(kk)
      }), [Bk]);
      (0, Dk.useLayoutEffect)((() => {
        const kk = yk.current;
        null !== kk && (!Ik || Sk.indexOf(Vk[Fk - 1]) < Sk.indexOf(kk)) && ak(kk)
      }), [Fk]), (0, Dk.useEffect)((() => {
        const kk = new ResizeObserver((() => {
          null !== yk.current ? ak(yk.current) : hk()
        }));
        return kk.observe(Pk.current), kk.observe(mk.current), () => {
          kk.disconnect()
        }
      }), []), (0, Dk.useLayoutEffect)((() => {
        const kk = Mk.current,
          ek = null === kk || void 0 === kk ? void 0 : kk.querySelector(".SegmentedToggleOptionSelected");
        ek && (kk.scrollLeft = Math.min(ek.offsetLeft, Math.max(kk.scrollLeft, ek.offsetLeft + ek.offsetWidth - kk.clientWidth)))
      }), [Ak]);
      return (0, vk.jsxs)("div", {
        ref: Pk,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === yk.current ? tk() : Math.abs(Pk.current.scrollTop - Yk.current) > 1 && Xk()
        },
        onClick: kk => {
          var ek;
          null !== (ek = Mk.current) && void 0 !== ek && ek.contains(kk.target) || Xk()
        },
        onFocus: kk => {
          var ek;
          const ik = null === yk.current ? null : Kk.current.get(yk.current);
          !ik || ik.contains(kk.target) || null !== (ek = Mk.current) && void 0 !== ek && ek.contains(kk.target) || Xk()
        },
        children: [Sk.length > 1 && (0, vk.jsx)("div", {
          ref: Mk,
          className: "LobbyManageChips",
          children: (0, vk.jsx)(lk.b, {
            options: Sk.map((kk => ({
              value: kk,
              label: (0, vk.jsx)(Ye, {
                page: kk
              }),
              ariaLabel: ik(le[kk].title)
            }))),
            value: Ak,
            padTabs: "2",
            ariaLabel: ik("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: Wk
          })
        }), (0, vk.jsx)("div", {
          ref: mk,
          className: xk()("LobbyManageInner", {
            Staging: Ik
          }),
          children: Sk.filter((kk => qk.has(kk))).map((ek => {
            const ik = ek === Uk;
            return (0, vk.jsxs)("section", {
              ref: kk => {
                kk ? Kk.current.set(ek, kk) : Kk.current.delete(ek)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": ik || void 0,
              children: [Sk.length > 1 && (0, vk.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": ik || void 0,
                "data-pad-unavailable": ik || void 0,
                children: (0, vk.jsx)(wk.d, {
                  label: (0, vk.jsx)(Ye, {
                    page: ek
                  })
                })
              }), (0, vk.jsx)(ye, {
                page: ek,
                manage: kk.manage,
                leaderboard: kk.leaderboard,
                focusRequest: kk.focusRequest,
                onFocused: ck,
                ruleRowsShown: "rules" === ek ? zk : 1 / 0
              })]
            }, ek)
          }))
        })]
      })
    }

    function Ce(kk) {
      return void 0 === (null === kk || void 0 === kk ? void 0 : kk.page) ? null : {
        page: kk.page,
        seq: kk.seq
      }
    }

    function Ae(kk) {
      let {
        leaderboard: ek
      } = kk;
      const ik = function() {
          const kk = (0, Pk.e)("lobbyManage"),
            [ek, ik] = (0, Dk.useReducer)((kk => kk + 1), 0),
            [fk] = (0, Dk.useState)((() => new mk.c(ik)));
          return (0, Dk.useEffect)((() => {
            const kk = fk.nextDeadline();
            if (null === kk) return;
            const ek = setTimeout((() => {
              fk.expire(Date.now()), ik()
            }), Math.max(0, kk - Date.now()));
            return () => {
              clearTimeout(ek)
            }
          })), (0, Dk.useMemo)((() => null === kk ? null : {
            state: kk,
            send: (kk, ek, Dk) => {
              const Sk = fk.send(kk, ek, null !== Dk && void 0 !== Dk ? Dk : null);
              return ik(), Sk
            },
            statusOf: kk => fk.statusOf(kk, Date.now()),
            showStatus: (kk, ek) => {
              fk.show(kk, ek)
            },
            isPending: kk => fk.isPending(kk)
          }), [kk, ek, fk])
        }(),
        Mk = (0, rk.m)((0, Sk.b)()),
        Kk = (0, bk.k)(),
        [xk, nk] = (0, Dk.useState)((() => Ce(Kk))),
        [Uk, Hk] = (0, Dk.useState)(null);
      return (0, Dk.useEffect)((() => {
        null === Kk && (0, fk.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, Dk.useEffect)((() => {
        null !== Kk && (nk((kk => (null === kk || void 0 === kk ? void 0 : kk.seq) === Kk.seq ? kk : Ce(Kk))), void 0 !== Kk.focusName && "players" === Kk.page ? Hk({
          name: Kk.focusName,
          seq: Kk.seq
        }) : (0, bk.g)(Kk.seq))
      }), [null === Kk || void 0 === Kk ? void 0 : Kk.seq]), null === ik ? null : (0, vk.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, vk.jsx)(Le, {
          pages: (0, rk.f)(ik.state, Mk),
          manage: ik,
          leaderboard: ek,
          focusRequest: Uk,
          onFocused: bk.g,
          landing: xk
        })
      })
    }
  },
  36101: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Mk,
      g: () => Pk
    });
    var Dk = ik(1432),
      fk = ik(1911),
      Sk = ik(1893);
    const bk = 1e4;
    let rk = 0;

    function Pk(kk) {
      const ek = ++rk;
      return new Promise((ik => {
        const rk = ek => {
            Pk(), clearTimeout(mk), !1 === (null === ek || void 0 === ek ? void 0 : ek.ok) && (0, Dk.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: kk.type
            }), ik(ek)
          },
          Pk = fk.c.subscribe("lobbyManage", (kk => {
            const ik = function(kk, ek) {
              var ik;
              return null !== (ik = null === kk || void 0 === kk ? void 0 : kk.results.find((kk => kk.requestId === ek))) && void 0 !== ik ? ik : null
            }(kk, ek);
            null !== ik && rk(ik)
          })),
          mk = setTimeout((() => {
            rk(null)
          }), bk);
        Sk.gameBridge.send("lobbyManage", {
          ...kk,
          requestId: ek
        })
      }))
    }
    const mk = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class Mk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pk;
        this.onChange = kk, this.sendAction = ek, this.pending = new Map, this.statuses = new Map
      }
      send(kk, ek, ik) {
        var Dk;
        return this.statuses.delete(ek), this.pending.set(ek, (null !== (Dk = this.pending.get(ek)) && void 0 !== Dk ? Dk : 0) + 1), this.sendAction(kk).then((kk => {
          var Dk;
          const fk = null !== kk && void 0 !== kk ? kk : {
              requestId: -1,
              ok: !1,
              message: mk
            },
            Sk = (null !== (Dk = this.pending.get(ek)) && void 0 !== Dk ? Dk : 1) - 1;
          Sk > 0 ? this.pending.set(ek, Sk) : this.pending.delete(ek);
          const bk = !fk.ok || fk.message.length > 0 ? fk.message : null === ik ? null : [ik];
          return null !== bk && this.statuses.set(ek, {
            ok: fk.ok,
            text: bk,
            until: Date.now() + 4e3
          }), this.onChange(), fk
        }))
      }
      show(kk, ek) {
        this.statuses.set(kk, {
          ...ek,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(kk) {
        for (const [ek, ik] of this.statuses) ik.until <= kk && this.statuses.delete(ek)
      }
      nextDeadline() {
        let kk = null;
        for (const ik of this.statuses.values()) {
          var ek;
          kk = Math.min(null !== (ek = kk) && void 0 !== ek ? ek : 1 / 0, ik.until)
        }
        return kk
      }
      statusOf(kk, ek) {
        const ik = this.statuses.get(kk);
        return !ik || ik.until <= ek ? null : {
          ok: ik.ok,
          text: ik.text
        }
      }
      isPending(kk) {
        return this.pending.has(kk)
      }
    }
  },
  36090: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => mk,
      d: () => Pk
    });
    var Dk = ik(581),
      fk = ik(1893),
      Sk = ik(1617),
      bk = ik(99),
      rk = ik(1240);

    function Pk(kk, ek, ik) {
      return bk.featureFlags.useSocialFeatures && kk && null === (0, rk.c)(ek, ik)
    }

    function mk(kk, ek) {
      var ik, bk;
      const rk = Sk.d.getSocialState().friends.find((kk => kk.name.toLowerCase() === ek.toLowerCase())),
        Pk = fk.gameBridge.latest("players").byId[kk],
        mk = void 0 !== Pk && Pk.name === ek,
        Mk = mk && null !== (ik = Pk.cosmetics) && void 0 !== ik ? ik : void 0,
        Kk = rk && Mk ? {
          ...rk,
          cosmetics: Mk
        } : rk;
      return {
        playerSocialPreview: null !== Kk && void 0 !== Kk ? Kk : {
          isError: !1,
          name: ek,
          ranks: mk ? [...Pk.ranks] : [],
          cosmetics: null !== Mk && void 0 !== Mk ? Mk : {},
          nameColour: null !== (bk = null === Mk || void 0 === Mk ? void 0 : Mk.nameColour) && void 0 !== bk ? bk : Dk.b,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== rk
      }
    }
  },
  36321: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Kk
    });
    var Dk = ik(60),
      fk = ik(1021),
      Sk = ik.n(fk),
      bk = ik(1648),
      rk = ik(1410),
      Pk = ik(1327),
      mk = ik(1033),
      Mk = ik(1066);

    function Kk(kk) {
      let {
        label: ek,
        icon: ik,
        placeholder: fk,
        onSubmit: Kk
      } = kk;
      const xk = (0, Dk.useRef)(null),
        [nk, Uk] = (0, Dk.useState)(""),
        [Hk, wk] = (0, Dk.useState)("Enter"),
        [lk, pk] = (0, Dk.useState)(null);
      (0, Dk.useEffect)((() => {
        if ("Success" !== Hk && "Error" !== Hk) return;
        const kk = setTimeout((() => {
          "Success" === Hk && xk.current && (xk.current.value = "", Uk("")), wk("Enter")
        }), "Success" === Hk ? 1e3 : 4e3);
        return () => {
          clearTimeout(kk)
        }
      }), [Hk]);
      const yk = () => {
        const kk = nk.trim();
        "" !== kk && "Enter" === Hk && (wk("Loading"), Kk(kk).then((kk => {
          xk.current && ("error" in kk ? null === kk.error ? wk("Enter") : (pk(kk.error), wk("Error")) : wk("Success"))
        })))
      };
      return (0, Mk.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: kk => {
          kk.target === xk.current && "Escape" !== kk.key && kk.stopPropagation()
        },
        children: [(0, Mk.jsxs)("div", {
          className: Sk()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Hk}`),
          children: ["Loading" === Hk && (0, Mk.jsx)(Pk.d, {}), "Success" === Hk && (0, Mk.jsx)(mk.d, {
            name: "check"
          }), "Error" === Hk && lk]
        }), (0, Mk.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, Mk.jsx)(bk.b, {
            className: "PlayerSearchInput",
            domRef: xk,
            maxLength: 32,
            placeholderText: fk,
            ariaLabel: fk,
            stopPropagation: !1,
            onValueChange: kk => {
              Uk(kk)
            },
            onEnter: yk
          }), (0, Mk.jsxs)(rk.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Hk || "" === nk.trim(),
            onClick: yk,
            children: [(0, Mk.jsx)(mk.d, {
              name: ik
            }), " ", ek]
          })]
        })]
      })
    }
  },
  36296: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Kk
    });
    var Dk = ik(60),
      fk = ik(1021),
      Sk = ik.n(fk),
      bk = ik(1172),
      rk = ik(1033),
      Pk = ik(1066);
    const mk = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Mk = ["unlisted", "public", "whitelist", "private"];

    function Kk(kk) {
      let {
        visibility: ek,
        onPick: ik
      } = kk;
      const {
        t: fk
      } = (0, bk.D)(), Kk = (0, Dk.useRef)([]);
      return (0, Pk.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": fk("worldSocial:whoCanJoin"),
        children: Mk.map(((kk, Dk) => {
          const bk = kk === ek;
          return (0, Pk.jsxs)("button", {
            ref: kk => {
              Kk.current[Dk] = kk
            },
            type: "button",
            className: Sk()("WorldSocialTile", {
              WorldSocialTileSelected: bk
            }),
            "aria-pressed": bk,
            tabIndex: bk ? 0 : -1,
            onKeyDown: kk => {
              ((kk, ek) => {
                const ik = "ArrowRight" === kk.key || "ArrowDown" === kk.key ? 1 : "ArrowLeft" === kk.key || "ArrowUp" === kk.key ? -1 : 0;
                var Dk;
                0 !== ik && (kk.preventDefault(), null === (Dk = Kk.current[(ek + ik + Mk.length) % Mk.length]) || void 0 === Dk || Dk.focus())
              })(kk, Dk)
            },
            onClick: () => {
              ik(kk)
            },
            children: [(0, Pk.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, Pk.jsx)(rk.d, {
                name: mk[kk]
              })
            }), (0, Pk.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, Pk.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: fk(`worldSocial:${kk}`)
              }), (0, Pk.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: fk(`worldSocial:${kk}Description`)
              })]
            })]
          }, kk)
        }))
      })
    }
  },
  36312: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk
    });
    var Dk = ik(1172),
      fk = ik(2589),
      Sk = ik(4319),
      bk = ik(1066);

    function rk(kk) {
      let {
        Px: ek,
        children: ik,
        ...rk
      } = kk;
      const {
        t: Pk
      } = (0, Dk.D)();
      return (0, bk.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          ek.onChange(!ek.on)
        },
        children: (0, bk.jsx)(fk.i, {
          ...rk,
          opensProfileCard: !1,
          children: (0, bk.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: kk => {
              kk.stopPropagation()
            },
            children: [ik, (0, bk.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, bk.jsx)(Sk.d, {
                checked: ek.on,
                disabled: !1,
                ariaLabel: Pk("worldSocial:letJoin", {
                  playerName: rk.playerSocialPreview.name
                }),
                onChange: kk => {
                  ek.onChange(kk.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36287: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Uk
    });
    var Dk = ik(60),
      fk = ik(1172),
      Sk = ik(1817),
      bk = ik(99),
      rk = ik(22),
      Pk = ik(1432),
      mk = ik(2622),
      Mk = ik(33682),
      Kk = ik(1410),
      xk = ik(1033),
      nk = ik(1066);

    function Uk(kk) {
      let {
        worldCode: ek,
        message: ik
      } = kk;
      const {
        t: Uk
      } = (0, fk.D)(), {
        isTouchScreen: Hk
      } = (0, rk.n)(["isTouchScreen"]), wk = bk.featureFlags.canUseInviteLinks, lk = (0, Mk.h)(wk && null === ik), [pk, yk] = (0, mk.i)(), Yk = (0, Dk.useRef)(null);
      if (null !== ik) return (0, nk.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, nk.jsx)(xk.d, {
          name: "lock"
        }), (0, nk.jsx)("span", {
          children: ik
        })]
      });
      const Lk = wk ? lk : ek,
        Ck = Hk && wk && (0, mk.e)();
      return (0, nk.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!wk && (0, nk.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Uk("worldSocial:worldCode")
        }), (0, nk.jsx)("input", {
          ref: Yk,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Lk && void 0 !== Lk ? Lk : "",
          "aria-label": Uk(wk ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: kk => {
            kk.currentTarget.select()
          }
        }), (0, nk.jsxs)(Kk.f, {
          className: "WorldSocialCopy",
          disabled: null === Lk,
          onClick: () => {
            null !== Lk && (0, mk.g)(Lk, {
              useShareSheet: Ck,
              onOutcome: kk => {
                if ((0, Pk.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== kk || wk ? kk : "code"
                  }), "copied" === kk) yk();
                else if ("failed" === kk) {
                  var ek;
                  null === (ek = Yk.current) || void 0 === ek || ek.focus(), Sk.e.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, nk.jsx)(xk.d, {
            name: pk ? "check" : Ck ? "up-from-bracket" : "copy"
          }), " ", Uk(pk ? "general:copied" : Ck ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36305: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => nk,
      c: () => xk,
      d: () => Kk
    });
    var Dk = ik(581),
      fk = ik(1172),
      Sk = ik(1617),
      bk = ik(2589),
      rk = ik(2540),
      Pk = ik(1410),
      mk = ik(36312),
      Mk = ik(1066);

    function Kk(kk, ek) {
      var ik;
      return {
        isError: !1,
        name: kk,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== ek && void 0 !== ek ? ek : {},
        nameColour: null !== (ik = null === ek || void 0 === ek ? void 0 : ek.nameColour) && void 0 !== ik ? ik : Dk.b,
        location: {
          status: "offline"
        }
      }
    }

    function xk(kk) {
      let {
        player: ek,
        isFriend: ik = !1,
        status: Dk,
        showLocation: Pk = void 0 === Dk,
        Px: Kk,
        onSendFriendRequest: xk,
        actions: nk,
        zIndex: Uk
      } = kk;
      const {
        t: Hk
      } = (0, fk.D)();
      let wk = Dk;
      null !== Kk && void 0 !== Kk && Kk.on && (wk = (0, Mk.jsxs)(Mk.Fragment, {
        children: [null !== Dk && void 0 !== Dk ? Dk : (0, Mk.jsx)(rk.c, {
          socialPreview: ek
        }), (0, Mk.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Hk("worldSocial:canJoin")]
        })]
      }));
      const lk = {
        playerSocialPreview: ek,
        isFriend: ik,
        hideFriendBadge: !0,
        onFriendRemoved: ik ? kk => {
          Sk.d.removeFriendFromState(kk)
        } : void 0,
        status: wk,
        showLocation: Pk,
        onSendFriendRequest: xk,
        zIndex: Uk
      };
      return Kk ? (0, Mk.jsx)(mk.d, {
        ...lk,
        Px: Kk,
        children: nk
      }) : (0, Mk.jsx)(bk.i, {
        ...lk,
        opensProfileCard: !1,
        children: nk || void 0
      })
    }

    function nk(kk) {
      let {
        row: ek,
        Px: ik,
        canInvite: Dk,
        invited: Sk,
        onInvite: bk,
        zIndex: rk
      } = kk;
      const {
        t: mk
      } = (0, fk.D)(), Kk = "online" === ek.place ? Pk.f : Pk.j;
      return (0, Mk.jsx)(xk, {
        player: ek.friend,
        isFriend: !0,
        status: "here" === ek.place ? mk("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Px: ik,
        zIndex: rk,
        actions: Dk && (0, Mk.jsx)(Kk, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Sk,
          onClick: bk,
          ariaLabel: `${mk("worldSocial:invite")} ${ek.friend.name}`,
          children: mk(Sk ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36270: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Pk,
      e: () => bk,
      i: () => mk
    });
    var Dk = ik(60),
      fk = ik(4528),
      Sk = ik(1817);

    function bk(kk) {
      const ek = {
        lobbyName: kk,
        answer: null,
        response: fk.d.getSocialSettings(kk)
      };
      return ek.response.then((kk => {
        ek.answer = kk
      })), ek
    }
    const rk = new Map;

    function Pk(kk) {
      rk.set(kk.lobbyName, kk)
    }

    function mk(kk) {
      const [ek] = (0, Dk.useState)((() => function(kk) {
        var ek;
        const ik = null !== (ek = rk.get(kk)) && void 0 !== ek ? ek : null;
        return null !== ik && void 0 !== ik && ik.answer && "error" in ik.answer ? null : ik
      }(kk))), [ik, bk] = (0, Dk.useState)((() => null !== ek && void 0 !== ek && ek.answer && "settings" in ek.answer ? ek.answer.settings : null)), [Pk, mk] = (0, Dk.useState)(!0), [Mk, Kk] = (0, Dk.useState)(null !== ik), xk = (0, Dk.useRef)(ik);
      xk.current = ik;
      const nk = (0, Dk.useRef)(0),
        Uk = (0, Dk.useRef)(0),
        Hk = (0, Dk.useRef)(!1),
        wk = (0, Dk.useRef)(!0),
        lk = (0, Dk.useCallback)((async ek => {
          const ik = ++nk.current,
            Dk = await (null !== ek && void 0 !== ek ? ek : fk.d.getSocialSettings(kk));
          wk.current && ik === nk.current && (Kk(!0), mk(!1), "error" in Dk || bk(Dk.settings))
        }), [kk]),
        pk = (0, Dk.useCallback)((() => {
          mk(!0), lk()
        }), [lk]),
        yk = (0, Dk.useCallback)((() => {
          Uk.current > 0 ? Hk.current = !0 : lk()
        }), [lk]);
      (0, Dk.useEffect)((() => (wk.current = !0, rk.delete(kk), mk(!0), lk(null === ek || void 0 === ek ? void 0 : ek.response), () => {
        wk.current = !1
      })), [lk, kk, ek]);
      const Yk = kk => {
        nk.current++, mk(!1), xk.current = kk, bk(kk)
      };
      return {
        settings: ik,
        loading: Pk,
        answered: Mk,
        retry: pk,
        refresh: yk,
        change: async function(ek, ik) {
          let {
            quiet: Dk = !1,
            onAnswer: bk
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const rk = xk.current;
          if (null === rk) return !1;
          Yk(ik(rk)), Uk.current > 0 && (Hk.current = !0), Uk.current++;
          const Pk = await fk.d.setSocialSettings(kk, ek);
          Uk.current--;
          const mk = !("error" in Pk);
          if (!wk.current) return mk;
          if (null === bk || void 0 === bk || bk(Pk), Dk);
          else if ("error" in Pk) Sk.e.showMessage({
            translationKey: Pk.error
          });
          else
            for (const kk of Pk.notFound) Sk.e.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: kk
              }
            });
          if (Uk.current > 0) return mk;
          const Mk = Hk.current;
          return Hk.current = !1, !Mk && "settings" in Pk ? Yk(Pk.settings) : (Mk || Yk(rk), lk()), mk
        }
      }
    }
  },
  36324: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      e: () => Sk
    });
    var Dk = ik(165);
    const fk = new Map;

    function Sk(kk, ek) {
      var ik;
      const Dk = null !== (ik = fk.get(kk)) && void 0 !== ik ? ik : new Map;
      Dk.set(ek, Date.now()), fk.set(kk, Dk)
    }

    function bk(kk) {
      const ek = fk.get(kk);
      if (!ek) return [];
      const ik = Date.now();
      for (const [fk, Sk] of ek) ik - Sk >= Dk.q && ek.delete(fk);
      return [...ek.keys()]
    }
  },
  36278: (kk, ek, ik) => {
    function Dk(kk, ek) {
      const ik = ek.toLowerCase();
      for (const Dk of kk)
        if (Dk.toLowerCase() === ik) return !0;
      return !1
    }

    function fk(kk, ek, ik) {
      const fk = [],
        Sk = [],
        bk = [];
      for (const rk of kk) !rk.isError && rk.name && ("inGame" === rk.location.status && rk.location.inLobbyName === ek || Dk(ik, rk.name) ? Sk.push({
        friend: rk,
        place: "here"
      }) : "offline" === rk.location.status ? bk.push({
        friend: rk,
        place: "offline"
      }) : fk.push({
        friend: rk,
        place: "online"
      }));
      return [...fk, ...Sk, ...bk]
    }

    function Sk(kk, ek, ik) {
      const fk = [],
        Sk = kk.flatMap((kk => "here" === kk.place ? [kk.friend.name] : []));
      for (const bk of [...Sk, ...ek]) Dk(fk, bk) || Dk(ik, bk) || fk.push(bk);
      return fk
    }

    function bk(kk, ek) {
      return null === kk || void 0 === kk || !kk.canManage || Dk(kk.whitelist, ek) ? "none" : "whitelist" === kk.visibility ? "required" : "quiet"
    }

    function rk(kk) {
      if (null === kk) return !0;
      const {
        visibility: ek
      } = kk;
      return "public" === ek || "unlisted" === ek || "whitelist" === ek && kk.canManage
    }

    function Pk(kk, ek, ik) {
      if (ik) {
        const ik = ek.filter((ek => !Dk(kk.whitelist, ek)));
        return {
          ...kk,
          whitelist: [...kk.whitelist, ...ik]
        }
      }
      return {
        ...kk,
        whitelist: kk.whitelist.filter((kk => !Dk(ek, kk)))
      }
    }

    function mk(kk, ek) {
      const ik = [];
      for (let Dk = 0; Dk < kk.length; Dk += ek) ik.push(kk.slice(Dk, Dk + ek));
      return ik
    }
    ik.d(ek, {
      b: () => rk,
      f: () => Sk,
      j: () => fk,
      l: () => Dk,
      p: () => mk,
      s: () => bk,
      u: () => Pk
    })
  },
  36608: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk
    });
    var Dk = ik(60),
      fk = ik(2414);

    function Sk() {
      const kk = (0, fk.e)("lobbyLeaderboardInfo");
      return (0, Dk.useMemo)((() => function(kk) {
        if (null === kk) return null;
        const ek = Object.entries(kk),
          ik = ek.filter((kk => {
            let [, ek] = kk;
            return void 0 !== ek
          }));
        if (ik.length === ek.length) return kk;
        const Dk = Object.fromEntries(ik),
          fk = Object.keys(kk).filter((kk => !Object.hasOwn(Dk, kk)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${fk.join(", ")}`), Dk
      }(kk)), [kk])
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);