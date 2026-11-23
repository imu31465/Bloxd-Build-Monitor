export const id = 220;
export const ids = [220];
export const modules = {
  41084: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      LobbyManageView: () => VF
    });
    var Xk = Ik(58),
      Tk = Ik(1432),
      ik = Ik(37056),
      yk = Ik(2363),
      lk = Ik(2366),
      ak = Ik(2349),
      qk = Ik(36558);

    function Lk() {
      const [kk, Fk] = (0, Xk.useState)(new Map);
      return {
        get: Fk => kk.get(Fk),
        hold: (0, Xk.useCallback)(((kk, Ik, Xk) => {
          Fk((Fk => new Map(Fk).set(kk, Ik))), Xk.then((() => {
            Fk((Fk => {
              const Ik = new Map(Fk);
              return Ik.delete(kk), Ik
            }))
          }))
        }), [])
      }
    }
    var tk = Ik(1055),
      Zk = Ik.n(tk),
      jk = Ik(1179),
      ek = Ik(1066),
      wk = Ik(1318),
      Hk = Ik(2582),
      Jk = Ik(5016),
      xk = Ik(3378);
    var Pk = Ik(1907),
      Kk = Ik(1406);

    function Qk(kk, Fk, Ik) {
      const Xk = kk.filter((kk => kk.name !== Fk)),
        Tk = Xk.filter((kk => "none" === kk.role)).sort(((kk, Fk) => Fk.at - kk.at)),
        ik = Xk.filter((kk => "none" !== kk.role)).sort(((kk, Fk) => Ik.indexOf(kk.role) - Ik.indexOf(Fk.role) || Fk.at - kk.at));
      return [...kk.some((kk => kk.name === Fk)) && null !== Fk ? [Fk] : [], ...[...Tk, ...ik].map((kk => kk.name))]
    }

    function sk(kk, Fk) {
      const Ik = kk.banned.map((kk => kk.name)),
        Xk = new Set(Ik);
      return {
        here: Qk(kk.here, Fk, kk.roles.map((kk => kk.role))),
        away: kk.away.filter((kk => !Xk.has(kk.name))).map((kk => kk.name)),
        banned: Ik
      }
    }

    function Vk(kk, Fk) {
      const Ik = kk.here.find((kk => kk.name === Fk));
      if (Ik) return {
        section: "here",
        player: Ik
      };
      const Xk = kk.banned.find((kk => kk.name === Fk));
      if (Xk) return {
        section: "banned",
        bannedAt: Xk.at
      };
      const Tk = kk.away.find((kk => kk.name === Fk));
      return Tk ? {
        section: "away",
        player: Tk
      } : {
        section: "gone"
      }
    }
    const zk = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var Sk = Ik(2578),
      vk = Ik(36548),
      Ek = Ik(36727),
      Ok = Ik(3065),
      nk = Ik(337);

    function Gk(kk, Fk, Ik) {
      return Fk.map((Fk => {
        if ("string" === typeof Fk) return Fk;
        const Xk = "str" in Fk ? Fk.str : Fk;
        return "string" === typeof Xk ? Xk : "entityName" in Xk ? Xk.entityName : "translationKey" in Xk ? kk(Xk.translationKey, (0, jk.m)(Xk.params, Ik)) : ""
      })).join("")
    }

    function pk(kk, Fk, Ik, Xk, Tk) {
      return Tk - Xk < 6e4 ? kk(`${Ik}JustNow`) : kk(Ik, {
        time: (0, nk.gb)((0, jk.l)(Fk, Ik), Xk, Tk)
      })
    }
    var uk = Ik(1849),
      bk = Ik(1617),
      Rk = Ik(1096);

    function Uk(kk) {
      let {
        status: Fk
      } = kk;
      return (0, Rk.jsx)("span", {
        className: Zk()("LobbyManageStatus", {
          LobbyManageStatusRefused: !Fk.ok
        }),
        children: (0, Rk.jsx)(uk.c, {
          text: Fk.text
        })
      })
    }

    function Ck(kk) {
      let {
        names: Fk,
        cap: Ik,
        filterFrom: Tk,
        moreLabel: ik,
        reveal: yk = null,
        renderRow: lk
      } = kk;
      const {
        t: ak
      } = (0, jk.y)(), [qk, Lk] = (0, Xk.useState)(!1), [tk, Zk] = (0, Xk.useState)(""), wk = qk || null !== yk && Fk.indexOf(yk) >= Ik, Jk = (wk || Fk.length <= Ik) && null !== Tk && Fk.length > Tk, xk = tk.trim().toLowerCase();
      let Pk = wk ? Fk : Fk.slice(0, Ik);
      return Jk && "" !== xk && (Pk = Pk.filter((kk => kk.toLowerCase().includes(xk)))), (0, Rk.jsxs)(Rk.Fragment, {
        children: [Jk && (0, Rk.jsx)(bk.c, {
          className: "LobbyManageFilter",
          placeholderText: ak("lobbyManage:findName"),
          ariaLabel: ak("lobbyManage:findName"),
          onValueChange: kk => {
            Zk(kk)
          }
        }), Pk.length > 0 && (0, Rk.jsx)("div", {
          className: "PlayerRows",
          children: Pk.map(((kk, Fk) => lk(kk, Pk.length - Fk)))
        }), !wk && Fk.length > Ik && (0, Rk.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, Rk.jsx)(Hk.b, {
            label: (0, Rk.jsxs)(Rk.Fragment, {
              children: [ik, " ", (0, Rk.jsx)(ek.e, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              Lk(!0)
            }
          })
        })]
      })
    }

    function Nk(kk) {
      let {
        value: Fk,
        placeholder: Ik,
        ariaLabel: Tk,
        maxLength: ik,
        wide: yk = !1,
        onSave: lk
      } = kk;
      const ak = (0, Xk.useRef)(null),
        [qk, Lk] = (0, Xk.useState)(0),
        tk = (0, Xk.useRef)(!0),
        jk = (0, Xk.useRef)(null),
        ek = (0, Xk.useRef)({
          value: Fk,
          onSave: lk
        });
      ek.current = {
        value: Fk,
        onSave: lk
      };
      const wk = () => {
        const kk = jk.current;
        jk.current = null, null !== kk && kk !== ek.current.value && ek.current.onSave(kk).then((() => {
          tk.current && Lk((kk => kk + 1))
        }))
      };
      return (0, Xk.useEffect)((() => {
        null === jk.current && ak.current && (ak.current.value = Fk)
      }), [Fk, qk]), (0, Xk.useEffect)((() => () => {
        tk.current = !1, wk()
      }), []), (0, Rk.jsx)("div", {
        className: Zk()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: yk
        }),
        onBlur: wk,
        children: (0, Rk.jsx)(bk.c, {
          domRef: ak,
          defaultValue: Fk,
          placeholderText: Ik,
          ariaLabel: Tk,
          maxLength: ik,
          onValueChange: kk => {
            jk.current = kk
          },
          onEnter: wk
        })
      })
    }
    const ck = ["mod", "coOwner"],
      Wk = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function fk(kk) {
      var Fk, Ik, ik;
      let {
        name: yk,
        place: lk,
        openedIn: ak,
        isYou: qk,
        manage: tk,
        hiddenNames: Zk,
        zIndex: wk
      } = kk;
      const {
        t: Hk,
        selectedLanguage: Jk
      } = (0, jk.y)(), [xk, Pk] = (0, Xk.useState)(null), {
        state: Qk
      } = tk, sk = `player:${yk}`, Vk = function(kk, Fk) {
        if ("banned" === kk.section) return {
          ...zk,
          unban: !0
        };
        if ("gone" === kk.section) return zk;
        const {
          player: Ik
        } = kk, Xk = "here" === kk.section, Tk = Xk || "none" !== Ik.role ? Ik.can.roles : [];
        return {
          gamemode: Xk && Fk && null !== Ik.gamemode && Ik.can.gamemode,
          roles: Tk,
          fixedRole: 0 === Tk.length && "none" !== Ik.role ? Ik.role : null,
          kick: Xk && Ik.can.kick,
          ban: Ik.can.ban,
          unban: !1
        }
      }(lk, null !== Qk.gamemodes), nk = tk.statusOf(sk), uk = tk.isPending(sk), bk = Lk(), Ck = Date.now(), Nk = kk => {
        var Fk, Ik;
        return null !== (Fk = null === (Ik = (kk => Qk.roles.find((Fk => Fk.role === kk)))(kk)) || void 0 === Ik ? void 0 : Ik.label) && void 0 !== Fk ? Fk : kk
      }, fk = kk => {
        const Fk = Wk[kk];
        return void 0 === Fk ? void 0 : Hk(Fk)
      }, Bk = "here" === lk.section || "away" === lk.section ? lk.player : null, dk = "here" === lk.section ? lk.player.id : null, {
        playerSocialPreview: Yk,
        isFriend: Ak
      } = null === dk ? {
        playerSocialPreview: (0, Ek.j)(yk, null),
        isFriend: !1
      } : (0, vk.e)(dk, yk), gk = function() {
        tk.send(...arguments)
      }, mk = (kk, Fk) => {
        bk.hold("role", kk, tk.send({
          type: "setRole",
          name: yk,
          role: kk
        }, sk, Fk))
      };
      let hk = null;
      if ("ban" === (null === xk || void 0 === xk ? void 0 : xk.kind)) hk = Hk("lobbyManageEntry:banConfirm", {
        playerName: yk
      });
      else if ("role" === (null === xk || void 0 === xk ? void 0 : xk.kind)) {
        var rk;
        hk = `${Hk("lobbyManage:roleConfirm",{playerName:yk,role:Nk(xk.role)})} ${null!==(rk=fk(xk.role))&&void 0!==rk?rk:""}`
      } else if (nk) hk = (0, Rk.jsx)(Uk, {
        status: nk
      });
      else if (qk) hk = Hk("lobbyManage:you");
      else if ("here" === lk.section) "none" === lk.player.role && Ck - lk.player.at < 6e5 && (hk = pk(Hk, Jk.code, "lobbyManage:joinedAgo", lk.player.at, Ck));
      else if ("away" === lk.section) {
        if (lk.player.at > 0) {
          const kk = "kicked" === lk.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          hk = pk(Hk, Jk.code, kk, lk.player.at, Ck)
        }
      } else "banned" === lk.section ? null !== lk.bannedAt && (hk = pk(Hk, Jk.code, "lobbyManage:bannedAgo", lk.bannedAt, Ck)) : "banned" === ak && (hk = Hk("lobbyManageEntry:unbanned"));
      return (0, Rk.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": yk,
        children: (0, Rk.jsxs)(Sk.e, {
          playerSocialPreview: Yk,
          isFriend: Ak,
          status: hk,
          opensProfileCard: !qk && (0, vk.i)(!0, yk, Zk),
          zIndex: wk,
          children: [null !== xk && (0, Rk.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === xk.kind && (0, Rk.jsxs)(Kk.G, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                Pk(null), gk({
                  type: "ban",
                  name: yk
                }, sk)
              },
              children: [(0, Rk.jsx)(ek.e, {
                name: "gavel"
              }), (0, Rk.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: Hk("lobbyManageEntry:ban")
              })]
            }), "role" === xk.kind && (0, Rk.jsx)(Kk.d, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: xk.role
              },
              onClick: () => {
                Pk(null), mk(xk.role)
              },
              children: Hk("lobbyManage:makeRole", {
                role: Nk(xk.role)
              })
            }), (0, Rk.jsx)(Kk.g, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                Pk(null)
              },
              children: Hk("general:cancel")
            })]
          }), null === xk && (0, Rk.jsxs)(Rk.Fragment, {
            children: [(0, Rk.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [Vk.gamemode && null !== Bk && (0, Rk.jsx)(Ok.e, {
                options: (null !== (Fk = Qk.gamemodes) && void 0 !== Fk ? Fk : []).map((kk => ({
                  value: kk.value,
                  label: Gk(Hk, kk.label, Zk)
                }))),
                value: null !== (Ik = bk.get("gamemode")) && void 0 !== Ik ? Ik : Bk.gamemode,
                disabled: uk,
                onChange: kk => {
                  (0, Tk.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: kk.value
                  }), bk.hold("gamemode", kk.value, tk.send({
                    type: "setGamemode",
                    name: yk,
                    gamemode: kk.value
                  }, sk))
                }
              }), Vk.roles.length > 0 && null !== Bk && (0, Rk.jsx)(Ok.e, {
                options: [...Qk.roles].reverse().filter((kk => Vk.roles.includes(kk.role))).map((kk => ({
                  value: kk.role,
                  label: kk.label
                }))),
                value: null !== (ik = bk.get("role")) && void 0 !== ik ? ik : Bk.role,
                disabled: uk,
                onChange: kk => {
                  var Fk;
                  (Fk = kk.value) !== (null === Bk || void 0 === Bk ? void 0 : Bk.role) && (ck.includes(Fk) ? Pk({
                    kind: "role",
                    role: Fk
                  }) : ((0, Tk.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: Fk
                  }), mk(Fk, fk(Fk))))
                }
              }), null !== Vk.fixedRole && (0, Rk.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: Nk(Vk.fixedRole)
              })]
            }), (0, Rk.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [Vk.kick && (0, Rk.jsxs)(Kk.g, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${Hk("lobbyManageEntry:kick")} ${yk}`,
                disabled: uk,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  gk({
                    type: "kick",
                    name: yk
                  }, sk)
                },
                children: [(0, Rk.jsx)(ek.e, {
                  name: "person-falling-burst"
                }), (0, Rk.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: Hk("lobbyManageEntry:kick")
                })]
              }), Vk.ban && (0, Rk.jsxs)(Kk.J, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${Hk("lobbyManageEntry:ban")} ${yk}`,
                disabled: uk,
                padDestructive: !0,
                onClick: () => {
                  Pk({
                    kind: "ban"
                  })
                },
                children: [(0, Rk.jsx)(ek.e, {
                  name: "gavel"
                }), (0, Rk.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: Hk("lobbyManageEntry:ban")
                })]
              }), Vk.unban && (0, Rk.jsxs)(Kk.g, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${Hk("lobbyManageEntry:unban")} ${yk}`,
                disabled: uk,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  gk({
                    type: "unban",
                    name: yk
                  }, sk)
                },
                children: [(0, Rk.jsx)(ek.e, {
                  name: "user-unlock"
                }), (0, Rk.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: Hk("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function Bk(kk) {
      var Fk, Ik, Tk, ik;
      let {
        manage: yk,
        focusRequest: lk,
        onFocused: ak
      } = kk;
      const {
        t: qk
      } = (0, jk.y)(), Lk = (0, Pk.k)("players"), tk = (0, Pk.k)("hiddenPlayerNames"), Zk = (0, Xk.useRef)(null), {
        state: wk
      } = yk, Jk = null === Lk.localId ? null : null !== (Fk = null === (Ik = Lk.byId[Lk.localId]) || void 0 === Ik ? void 0 : Ik.name) && void 0 !== Fk ? Fk : null, [xk] = (0, Xk.useState)((() => sk(wk, Jk))), Qk = function(kk, Fk, Ik) {
        const Xk = new Set([...kk.here, ...kk.away, ...kk.banned]),
          Tk = sk(Fk, Ik),
          ik = Fk => {
            const Ik = Tk[Fk].filter((kk => !Xk.has(kk)));
            for (const kk of Ik) Xk.add(kk);
            return [...kk[Fk], ...Ik]
          };
        return {
          here: ik("here"),
          away: ik("away"),
          banned: ik("banned")
        }
      }(xk, wk, Jk), [zk, Sk] = (0, Xk.useState)(!1), vk = function(kk, Fk) {
        return kk.here.filter((kk => kk.name !== Fk && "none" === kk.role && kk.can.kick)).length
      }(wk, Jk), Ek = yk.statusOf("kickAll");
      (0, Xk.useEffect)((() => {
        var kk, Fk;
        if (null === lk) return;
        const Ik = null === (kk = Zk.current) || void 0 === kk ? void 0 : kk.querySelector(`[data-lobby-manage-row="${CSS.escape(lk.name)}"]`);
        null === Ik || void 0 === Ik || Ik.scrollIntoView({
          block: "center"
        }), null === Ik || void 0 === Ik || null === (Fk = Ik.querySelector(".ProfilePreview")) || void 0 === Fk || Fk.focus({
          preventScroll: !0
        }), ak(lk.seq)
      }), [null === lk || void 0 === lk ? void 0 : lk.seq]);
      const Ok = kk => (Fk, Ik) => (0, Rk.jsx)(fk, {
        name: Fk,
        place: Vk(wk, Fk),
        openedIn: kk,
        isYou: Fk === Jk,
        manage: yk,
        hiddenNames: tk,
        zIndex: Ik
      }, Fk);
      return (0, Rk.jsxs)("div", {
        ref: Zk,
        className: "LobbyManagePage",
        children: [Qk.here.length > 0 && (0, Rk.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Rk.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, Rk.jsx)(Hk.b, {
              label: qk("lobbyManage:here"),
              meta: wk.here.length
            }), vk >= 2 && !zk && (0, Rk.jsxs)(Kk.J, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: yk.isPending("kickAll"),
              onClick: () => {
                Sk(!0)
              },
              children: [(0, Rk.jsx)(ek.e, {
                name: "person-falling-burst"
              }), " ", qk("lobbyManage:kickAll")]
            })]
          }), zk && vk >= 2 && (0, Rk.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, Rk.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: qk("lobbyManage:kickAllConfirm", {
                count: vk
              })
            }), (0, Rk.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, Rk.jsx)(Kk.G, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  Sk(!1), yk.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: qk("lobbyManage:kickAll")
              }), (0, Rk.jsx)(Kk.g, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  Sk(!1)
                },
                children: qk("general:cancel")
              })]
            })]
          }), Ek && (0, Rk.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, Rk.jsx)(Uk, {
              status: Ek
            })
          }), (0, Rk.jsx)(Ck, {
            names: Qk.here,
            cap: Qk.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: Ok("here")
          })]
        }), Qk.away.length > 0 && (0, Rk.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Rk.jsx)(Hk.b, {
            label: qk("lobbyManage:notHere"),
            meta: Qk.away.length
          }), (0, Rk.jsx)(Ck, {
            names: Qk.away,
            cap: 5,
            filterFrom: null,
            moreLabel: qk("lobbyManage:allCount", {
              count: Qk.away.length
            }),
            reveal: null !== (Tk = null === lk || void 0 === lk ? void 0 : lk.name) && void 0 !== Tk ? Tk : null,
            renderRow: Ok("away")
          })]
        }), Qk.banned.length > 0 && (0, Rk.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Rk.jsx)(Hk.b, {
            label: qk("lobbyManage:banned"),
            meta: Qk.banned.length
          }), (0, Rk.jsx)(Ck, {
            names: Qk.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: qk("lobbyManage:allCount", {
              count: Qk.banned.length
            }),
            reveal: null !== (ik = null === lk || void 0 === lk ? void 0 : lk.name) && void 0 !== ik ? ik : null,
            renderRow: Ok("banned")
          })]
        })]
      })
    }
    var dk = Ik(4612),
      Yk = Ik(1585),
      Ak = Ik(36707),
      gk = Ik(36721),
      mk = Ik(36712),
      hk = Ik(36710),
      rk = Ik(36750),
      Dk = Ik(36733),
      Mk = Ik(36742);

    function kF(kk) {
      const Fk = new Set;
      for (const Ik of kk) Fk.add(Ik.toLowerCase());
      return Fk
    }

    function FF(kk) {
      var Fk, Ik;
      let {
        state: Tk,
        lobbyName: ik,
        listed: yk,
        isListed: lk,
        VJ: ak,
        mJ: qk,
        statusOf: Lk
      } = kk;
      const {
        t: tk,
        selectedLanguage: Zk
      } = (0, jk.y)(), ek = (0, Yk.j)(), wk = (0, Pk.k)("players"), Jk = null === wk.localId ? null : null !== (Fk = null === (Ik = wk.byId[wk.localId]) || void 0 === Ik ? void 0 : Ik.name) && void 0 !== Fk ? Fk : null, xk = (0, Xk.useMemo)((() => (0, hk.i)(ek.friends, ik, Tk.here.map((kk => kk.name)))), [ek.friends, ik, Tk.here]), Kk = new Map(xk.map((kk => [kk.friend.name.toLowerCase(), kk]))), Qk = function(kk) {
        let {
          refused: Fk,
          listed: Ik,
          here: Xk,
          friends: Tk,
          excluded: ik
        } = kk;
        const yk = kF(ik),
          lk = kk => kk.filter((kk => {
            const Fk = kk.toLowerCase();
            return !yk.has(Fk) && (yk.add(Fk), !0)
          }));
        return {
          added: [],
          refused: lk(Fk),
          listed: lk(Ik),
          suggested: lk([...Xk, ...Tk])
        }
      }({
        refused: Tk.refused.map((kk => kk.name)),
        listed: yk,
        here: Tk.here.map((kk => kk.name)),
        friends: xk.flatMap((kk => "here" === kk.place ? [] : [kk.friend.name])),
        excluded: [...null === Jk ? [] : [Jk], ...[...Tk.here, ...Tk.away].flatMap((kk => "none" === kk.role || (0, hk.m)(yk, kk.name) ? [] : [kk.name]))]
      }), [sk] = (0, Xk.useState)(Qk), [Vk, zk] = (0, Xk.useState)([]), Sk = function(kk, Fk, Ik) {
        const Xk = kF(Ik),
          Tk = kF([...Ik, ...kk.refused, ...kk.listed, ...kk.suggested]),
          ik = Ik => [...kk[Ik].filter((kk => !Xk.has(kk.toLowerCase()))), ...Fk[Ik].filter((kk => {
            const Fk = kk.toLowerCase();
            return !Tk.has(Fk) && (Tk.add(Fk), !0)
          }))];
        return {
          added: [...Ik],
          refused: ik("refused"),
          listed: ik("listed"),
          suggested: ik("suggested")
        }
      }(sk, Qk, Vk), Ok = (kk, Fk) => {
        var Ik, Xk;
        const ik = kk.toLowerCase(),
          yk = Kk.get(ik),
          qk = Tk.here.find((kk => kk.name.toLowerCase() === ik)),
          jk = Tk.refused.find((kk => kk.name.toLowerCase() === ik)),
          ek = null !== (Ik = null === Lk || void 0 === Lk ? void 0 : Lk(kk)) && void 0 !== Ik ? Ik : null;
        let wk = null;
        ek ? wk = (0, Rk.jsx)(Uk, {
          status: ek
        }) : jk ? wk = pk(tk, Zk.code, "lobbyManage:triedToJoinAgo", jk.at, Date.now()) : yk && qk ? wk = tk("lobbyManage:friendHere") : yk ? wk = "online" === yk.place ? tk("lobbyManage:friendOnline") : tk("lobbyManage:friend") : qk && (wk = tk("lobbyManage:hereStatus"));
        let Hk = null !== (Xk = null === yk || void 0 === yk ? void 0 : yk.friend) && void 0 !== Xk ? Xk : (0, Ek.j)(kk, null);
        return !yk && null !== qk && void 0 !== qk && qk.id && (Hk = (0, vk.e)(qk.id, qk.name).playerSocialPreview), (0, Rk.jsx)(Dk.c, {
          playerSocialPreview: Hk,
          isFriend: void 0 !== yk,
          hideFriendBadge: !0,
          status: wk,
          zIndex: Fk,
          Dt: {
            on: lk(kk),
            onChange: Fk => {
              ak(kk, Fk)
            }
          }
        }, ik)
      }, nk = [...Sk.added, ...Sk.refused];
      return (0, Rk.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, Rk.jsx)(Hk.b, {
          label: tk("worldSocial:whitelist"),
          meta: yk.length
        }), (0, Rk.jsx)(Mk.b, {
          label: tk("lobbyManage:add"),
          icon: "user-check",
          placeholder: tk("socialBar:enterPlayerName"),
          onSubmit: async kk => {
            const Fk = await qk(kk);
            return Fk.ok && zk((Fk => [kk, ...Fk])), Fk
          }
        }), nk.length > 0 && (0, Rk.jsx)("div", {
          className: "PlayerRows",
          children: nk.map(((kk, Fk) => Ok(kk, nk.length - Fk)))
        }), (0, Rk.jsx)(Ck, {
          names: Sk.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: tk("lobbyManage:allOnWhitelist", {
            count: Sk.listed.length
          }),
          renderRow: Ok
        }), (0, Rk.jsx)(Ck, {
          names: Sk.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: tk("lobbyManage:allCount", {
            count: Sk.suggested.length
          }),
          renderRow: Ok
        })]
      })
    }

    function IF(kk) {
      let {
        manage: Fk,
        listing: Ik
      } = kk;
      const {
        t: Xk
      } = (0, jk.y)(), ik = (kk, Ik) => ((0, Tk.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: kk
      }), Fk.send({
        type: "setListing",
        field: kk,
        value: Ik
      }, `listing:${kk}`)), yk = kk => {
        const Ik = Fk.statusOf(`listing:${kk}`);
        return Ik && !Ik.ok && (0, Rk.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, Rk.jsx)(Uk, {
            status: Ik
          })
        })
      };
      return (0, Rk.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, Rk.jsx)(Hk.b, {
          label: Xk("lobbyManage:inWorldsList")
        }), (0, Rk.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Rk.jsx)("div", {
            className: "SliderText",
            children: Xk("lobbyManage:description")
          }), (0, Rk.jsx)(Nk, {
            value: Ik.description,
            ariaLabel: Xk("lobbyManage:description"),
            wide: !0,
            onSave: kk => ik("description", kk)
          })]
        }), yk("description"), (0, Rk.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Rk.jsx)("div", {
            className: "SliderText",
            children: Xk("lobbyManage:emojis")
          }), (0, Rk.jsx)(Nk, {
            value: Ik.emojis,
            ariaLabel: Xk("lobbyManage:emojis"),
            onSave: kk => ik("emojis", kk)
          })]
        }), yk("emojis"), (0, Rk.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Rk.jsx)("div", {
            className: "SliderText",
            children: Xk("lobbyManage:colour")
          }), (0, Rk.jsx)(XF, {
            value: Ik.colour,
            ariaLabel: Xk("lobbyManage:colour"),
            onSave: kk => {
              ik("colour", kk)
            }
          })]
        }), yk("colour")]
      })
    }

    function XF(kk) {
      let {
        value: Fk,
        ariaLabel: Ik,
        onSave: Tk
      } = kk;
      const ik = (0, Xk.useRef)(null),
        yk = (0, Xk.useRef)({
          value: Fk,
          onSave: Tk
        });
      yk.current = {
        value: Fk,
        onSave: Tk
      };
      const lk = (0, Xk.useRef)(null),
        ak = (0, Xk.useRef)(!1),
        qk = kk => {
          ak.current && kk.value !== yk.current.value && kk.value !== lk.current && (lk.current = kk.value, yk.current.onSave(kk.value))
        };
      return (0, Xk.useEffect)((() => {
        ik.current && document.activeElement !== ik.current && (ik.current.value = Fk)
      }), [Fk]), (0, Xk.useEffect)((() => {
        const kk = ik.current,
          Fk = () => {
            qk(kk)
          };
        return kk.addEventListener("change", Fk), () => {
          kk.removeEventListener("change", Fk), qk(kk)
        }
      }), []), (0, Rk.jsx)("input", {
        ref: ik,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: Fk,
        "aria-label": Ik,
        onInput: () => {
          ak.current = !0
        },
        onBlur: kk => {
          qk(kk.currentTarget)
        }
      })
    }

    function TF(kk) {
      let {
        manage: Fk
      } = kk;
      const {
        lobbyName: Ik,
        shownLobbyName: Xk
      } = (0, Pk.k)("connectedGame");
      return Fk.state.you.canSetVisibility && null !== Ik ? (0, Rk.jsx)(yF, {
        manage: Fk,
        lobbyName: Ik,
        worldCode: null !== Xk && void 0 !== Xk ? Xk : Ik
      }, Ik) : (0, Rk.jsx)(lF, {
        manage: Fk,
        lobbyName: null !== Ik && void 0 !== Ik ? Ik : ""
      })
    }

    function iF(kk) {
      return kk.map((kk => kk.toLowerCase())).sort().join(",")
    }

    function yF(kk) {
      var Fk;
      let {
        manage: Ik,
        lobbyName: ik,
        worldCode: yk
      } = kk;
      const {
        t: lk
      } = (0, jk.y)(), {
        settings: ak,
        loading: qk,
        change: Lk,
        retry: tk,
        refresh: Zk
      } = (0, Ak.g)(ik), ek = (0, Yk.j)(), {
        state: Jk
      } = Ik, xk = (0, Xk.useRef)(ak);
      xk.current = ak;
      const Pk = iF(null !== (Fk = Jk.whitelist) && void 0 !== Fk ? Fk : []),
        Qk = null !== Jk.whitelist;
      (0, Xk.useEffect)((() => {
        const kk = xk.current;
        null !== kk && (kk.visibility !== Jk.visibility || Qk && iF(kk.whitelist) !== Pk) && Zk()
      }), [Jk.visibility, Pk, Qk, Zk]);
      const sk = async (kk, Fk) => {
        let Ik = null;
        return await Lk(kk, Fk, {
          quiet: !0,
          onAnswer: kk => {
            Ik = kk
          }
        }), Ik
      }, Vk = (kk, Fk) => {
        null !== Fk && "error" in Fk && Ik.showStatus(kk, {
          ok: !1,
          text: [lk(Fk.error)]
        })
      }, zk = async kk => {
        if (null === ak || kk === ak.visibility) return;
        (0, Tk.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: kk
        });
        const Fk = "whitelist" === kk ? (0, hk.f)((0, hk.i)(ek.friends, ik, Jk.here.map((kk => kk.name))), (0, rk.e)(ik), ak.whitelist) : [],
          Ik = await sk({
            setVisibility: kk
          }, (Fk => ({
            ...Fk,
            visibility: kk
          })));
        Vk("mode", Ik), null === Ik || "error" in Ik || await (async kk => {
          for (const Fk of (0, hk.q)(kk, dk.w))
            if (!await Lk({
                whitelistAdd: Fk
              }, (kk => (0, hk.s)(kk, Fk, !0)))) return !1;
          return !0
        })(Fk)
      }, Sk = (0, Xk.useMemo)((() => {
        var kk;
        if (null === ak) return [];
        const Fk = null !== (kk = Jk.whitelist) && void 0 !== kk ? kk : [];
        return [...Fk.filter((kk => (0, hk.m)(ak.whitelist, kk))), ...ak.whitelist.filter((kk => !(0, hk.m)(Fk, kk)))]
      }), [ak, Jk.whitelist]), vk = Ik.statusOf("mode");
      return (0, Rk.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Rk.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Rk.jsx)(Hk.b, {
            label: lk("worldSocial:whoCanJoin")
          }), null === ak && qk && (0, Rk.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Rk.jsx)(wk.c, {})
          }), null === ak && !qk && (0, Rk.jsx)(Kk.g, {
            className: "SmallTextLight",
            onClick: tk,
            children: lk("worldSocial:loadFailed")
          }), null !== ak && (0, Rk.jsx)(gk.d, {
            visibility: ak.visibility,
            onPick: kk => {
              zk(kk)
            }
          }), vk && (0, Rk.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, Rk.jsx)(Uk, {
              status: vk
            })
          }), null !== ak && "private" !== ak.visibility && (0, Rk.jsx)(mk.c, {
            worldCode: yk,
            message: null
          })]
        }), "whitelist" === (null === ak || void 0 === ak ? void 0 : ak.visibility) && (0, Rk.jsx)(FF, {
          state: Jk,
          lobbyName: ik,
          listed: Sk,
          isListed: kk => (0, hk.m)(ak.whitelist, kk),
          VJ: (kk, Fk) => {
            (0, Tk.reportAnalyticsClick)(Fk ? {
              id: "lobby_manage.whitelist_add",
              value: "Dt"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), sk(Fk ? {
              whitelistAdd: [kk]
            } : {
              whitelistRemove: kk
            }, (Ik => (0, hk.s)(Ik, [kk], Fk))).then((Fk => {
              Vk(`whitelist:${kk.toLowerCase()}`, Fk)
            }))
          },
          mJ: async kk => {
            (0, Tk.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Fk = await sk({
              whitelistAdd: [kk]
            }, (Fk => (0, hk.s)(Fk, [kk], !0)));
            return null === Fk ? {
              ok: !1,
              error: lk("worldSocial:changeFailed")
            } : "error" in Fk ? {
              ok: !1,
              error: lk(Fk.error)
            } : (0, hk.m)(Fk.notFound, kk) ? {
              ok: !1,
              error: lk("lobbyManage:noPlayerCalled", {
                playerName: kk
              })
            } : {
              ok: !0
            }
          },
          statusOf: kk => Ik.statusOf(`whitelist:${kk.toLowerCase()}`)
        }), "public" === (null === ak || void 0 === ak ? void 0 : ak.visibility) && null !== Jk.listing && (0, Rk.jsx)(IF, {
          manage: Ik,
          listing: Jk.listing
        })]
      })
    }

    function lF(kk) {
      var Fk;
      let {
        manage: Ik,
        lobbyName: Xk
      } = kk;
      const {
        t: ik
      } = (0, jk.y)(), {
        state: yk
      } = Ik, lk = Lk(), ak = null !== (Fk = yk.whitelist) && void 0 !== Fk ? Fk : [];
      return (0, Rk.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Rk.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Rk.jsx)(Hk.b, {
            label: ik("worldSocial:whoCanJoin")
          }), (0, Rk.jsx)("div", {
            className: "LobbyManageModeText",
            children: ik(`worldSocial:${yk.visibility}`)
          })]
        }), "whitelist" === yk.visibility && yk.you.canEditWhitelist && (0, Rk.jsx)(FF, {
          state: yk,
          lobbyName: Xk,
          listed: ak,
          isListed: kk => {
            var Fk;
            return null !== (Fk = lk.get(kk.toLowerCase())) && void 0 !== Fk ? Fk : (0, hk.m)(ak, kk)
          },
          VJ: (kk, Fk) => {
            (0, Tk.reportAnalyticsClick)(Fk ? {
              id: "lobby_manage.whitelist_add",
              value: "Dt"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const Xk = kk.toLowerCase();
            lk.hold(Xk, Fk, Ik.send(Fk ? {
              type: "whitelistAdd",
              names: [kk]
            } : {
              type: "whitelistRemove",
              name: kk
            }, `whitelist:${Xk}`))
          },
          mJ: async kk => {
            (0, Tk.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Fk = await Ik.send({
              type: "whitelistAdd",
              names: [kk]
            }, "whitelist-field");
            return Fk.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, Rk.jsx)(uk.c, {
                text: Fk.message
              })
            }
          },
          statusOf: kk => Ik.statusOf(`whitelist:${kk.toLowerCase()}`)
        }), "public" === yk.visibility && null !== yk.listing && (0, Rk.jsx)(IF, {
          manage: Ik,
          listing: yk.listing
        })]
      })
    }
    var aF = Ik(4983),
      qF = Ik(1333);
    const LF = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const tF = (0, Xk.memo)((function(kk) {
      var Fk;
      let {
        rule: Ik,
        value: Xk,
        status: Tk,
        pending: ik,
        hiddenNames: yk,
        xV: lk,
        onAction: ak
      } = kk;
      const {
        t: qk
      } = (0, jk.y)(), Lk = kk => lk(Ik, kk), tk = (kk, Fk) => {
        ak(Ik, kk, Fk)
      }, Zk = Gk(qk, Ik.label, yk), ek = Ik.info ? Gk(qk, Ik.info, yk) : void 0, wk = Ik.placeholder ? Gk(qk, Ik.placeholder, yk) : void 0, Hk = (null !== (Fk = Ik.options) && void 0 !== Fk ? Fk : []).map((kk => ({
        value: kk.value,
        label: Gk(qk, kk.label, yk)
      }))), Jk = Math.max(0, ...Hk.map((kk => function(kk) {
        let Fk = 0;
        for (const Ik of kk) Fk += LF.test(Ik) ? 2 : 1;
        return Fk
      }(kk.label)))), xk = Tk && (0, Rk.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, Rk.jsx)(Uk, {
          status: Tk
        })
      }), Pk = (0, Rk.jsxs)("div", {
        className: "SliderText",
        children: [Zk, void 0 !== ek && (0, Rk.jsx)(qF.c, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: ek
        })]
      });
      return "toggle" === Ik.kind ? (0, Rk.jsxs)(Rk.Fragment, {
        children: [(0, Rk.jsx)(aF.e, {
          label: Zk,
          checked: !0 === Xk,
          circleInfoText: ek,
          disabled: ik,
          onClick: Lk
        }), xk]
      }) : "choice" === Ik.kind && Hk.length <= 3 ? (0, Rk.jsxs)(Rk.Fragment, {
        children: [(0, Rk.jsx)(aF.h, {
          label: Zk,
          options: Hk,
          value: String(Xk),
          circleInfoText: ek,
          onChange: Lk
        }), xk]
      }) : (0, Rk.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [Pk, "choice" === Ik.kind && (0, Rk.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": Jk
          },
          children: (0, Rk.jsx)(Ok.e, {
            options: Hk,
            value: String(Xk),
            disabled: ik,
            onChange: kk => {
              Lk(kk.value)
            }
          })
        }), ("number" === Ik.kind || "text" === Ik.kind) && (0, Rk.jsx)(Nk, {
          value: null === Xk ? "" : String(Xk),
          placeholder: wk,
          ariaLabel: Zk,
          onSave: kk => {
            const Fk = kk.trim(),
              Xk = Number(Fk);
            return Lk("number" === Ik.kind && "" !== Fk && Number.isFinite(Xk) ? Xk : Fk)
          }
        }), "action" === Ik.kind && (0, Rk.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [Hk.length > 3 && (0, Rk.jsx)(Ok.e, {
            options: Hk,
            value: {
              value: "",
              label: null !== wk && void 0 !== wk ? wk : Zk
            },
            disabled: ik,
            onChange: kk => {
              tk(kk.value)
            }
          }), Hk.length > 0 && Hk.length <= 3 && Hk.map((kk => (0, Rk.jsx)(Kk.g, {
            className: "SmallTextLight",
            disabled: ik,
            onClick: () => {
              tk(kk.value)
            },
            children: kk.label
          }, kk.value))), 0 === Hk.length && (0, Rk.jsx)(Kk.g, {
            className: "SmallTextLight",
            disabled: ik,
            onClick: () => {
              tk()
            },
            children: null !== wk && void 0 !== wk ? wk : Zk
          })]
        }), "names" === Ik.kind && (0, Rk.jsx)(ZF, {
          names: Array.isArray(Xk) ? Xk : [],
          pending: ik,
          onAction: tk
        }), xk]
      })
    }));

    function ZF(kk) {
      let {
        names: Fk,
        pending: Ik,
        onAction: Tk
      } = kk;
      const {
        t: ik
      } = (0, jk.y)(), yk = (0, Xk.useRef)(null), [lk, ak] = (0, Xk.useState)(""), qk = () => {
        const kk = lk.trim();
        "" !== kk && (Tk(kk, "add"), yk.current && (yk.current.value = ""), ak(""))
      };
      return (0, Rk.jsxs)("div", {
        className: "LobbyManageNames",
        children: [Fk.map((kk => (0, Rk.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, Rk.jsx)("span", {
            className: "LobbyManageNameText",
            children: kk
          }), (0, Rk.jsx)(Kk.g, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: ik("lobbyManage:removeName", {
              name: kk
            }),
            disabled: Ik,
            onClick: () => {
              Tk(kk, "remove")
            },
            children: (0, Rk.jsx)(ek.e, {
              name: "xmark"
            })
          })]
        }, kk))), (0, Rk.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, Rk.jsx)(bk.c, {
            domRef: yk,
            placeholderText: ik("lobbyManage:namePlaceholder"),
            ariaLabel: ik("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: kk => {
              ak(kk)
            },
            onEnter: qk
          }), (0, Rk.jsx)(Kk.g, {
            className: "SmallTextLight",
            disabled: Ik || "" === lk.trim(),
            onClick: qk,
            children: ik("lobbyManage:addHere")
          })]
        })]
      })
    }
    const jF = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function eF(kk, Fk) {
      return jF.map((Ik => {
        let {
          group: Xk,
          title: Tk
        } = Ik;
        const ik = kk.filter((kk => kk.group === Xk && void 0 === kk.parent)).map((Ik => {
          const Xk = !0 === Fk(Ik) ? kk.filter((kk => kk.parent === Ik.key)) : [];
          return {
            rule: Ik,
            children: Xk
          }
        }));
        return {
          group: Xk,
          title: Tk,
          items: ik
        }
      }))
    }

    function wF(kk) {
      return kk.flatMap((kk => {
        let {
          items: Fk
        } = kk;
        return Fk.flatMap((kk => {
          let {
            rule: Fk,
            children: Ik
          } = kk;
          return [Fk, ...Ik]
        }))
      }))
    }

    function HF(kk) {
      let {
        manage: Fk,
        rowsShown: Ik
      } = kk;
      const {
        t: ik
      } = (0, jk.y)(), yk = (0, Pk.k)("hiddenPlayerNames"), {
        rules: lk
      } = Fk.state, ak = Lk(), qk = kk => {
        const Fk = ak.get(kk.key);
        return void 0 === Fk ? kk.value : Fk
      }, tk = eF(lk, qk), [Zk] = (0, Xk.useState)((() => wF(tk).map((kk => kk.key)))), ek = Ik === 1 / 0 ? null : new Set(Zk.slice(0, Ik)), wk = kk => null === ek || ek.has(kk.key), {
        hold: Jk
      } = ak, xk = (0, Xk.useCallback)(((kk, Ik) => {
        (0, Tk.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: kk.key
        });
        const Xk = Fk.send({
          type: "setRule",
          key: kk.key,
          value: Ik
        }, `rule:${kk.key}`);
        return Jk(kk.key, Ik, Xk), Xk
      }), [Fk, Jk]), Kk = (0, Xk.useCallback)(((kk, Ik, Xk) => {
        (0, Tk.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: kk.key
        }), Fk.send({
          type: "ruleAction",
          key: kk.key,
          ...void 0 === Ik ? {} : {
            arg: Ik
          },
          ...void 0 === Xk ? {} : {
            op: Xk
          }
        }, `rule:${kk.key}`, void 0 === Xk ? ik("lobbyManage:setJustNow") : void 0)
      }), [Fk, ik]), Qk = kk => {
        const Ik = `rule:${kk.key}`;
        return (0, Rk.jsx)(tF, {
          rule: kk,
          value: qk(kk),
          status: Fk.statusOf(Ik),
          pending: Fk.isPending(Ik),
          hiddenNames: yk,
          xV: xk,
          onAction: Kk
        }, kk.key)
      };
      return (0, Rk.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: tk.map((kk => {
          let {
            group: Fk,
            title: Ik,
            items: Tk
          } = kk;
          const yk = Tk.filter((kk => {
            let {
              rule: Fk
            } = kk;
            return wk(Fk)
          }));
          return 0 === yk.length ? null : (0, Rk.jsxs)(Xk.Fragment, {
            children: [(0, Rk.jsx)(Hk.b, {
              label: ik(Ik)
            }), yk.map((kk => {
              let {
                rule: Fk,
                children: Ik
              } = kk;
              return 0 === Ik.length ? Qk(Fk) : (0, Rk.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [Qk(Fk), Ik.filter(wk).map(Qk)]
              }, Fk.key)
            }))]
          }, Fk)
        }))
      })
    }
    const JF = {
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
      xF = 5,
      PF = (0, Xk.memo)((function(kk) {
        let {
          page: Fk,
          manage: Ik,
          leaderboard: Tk,
          focusRequest: ik,
          onFocused: yk,
          ruleRowsShown: lk
        } = kk;
        return "leaderboard" === Fk ? (0, Rk.jsx)(Xk.Suspense, {
          fallback: (0, Rk.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Rk.jsx)(wk.c, {})
          }),
          children: Tk
        }) : "joining" === Fk ? (0, Rk.jsx)(TF, {
          manage: Ik
        }) : "rules" === Fk ? (0, Rk.jsx)(HF, {
          manage: Ik,
          rowsShown: lk
        }) : (0, Rk.jsx)(Bk, {
          manage: Ik,
          focusRequest: ik,
          onFocused: yk
        })
      }));

    function KF(kk) {
      let {
        page: Fk
      } = kk;
      const {
        t: Ik
      } = (0, jk.y)(), Xk = JF[Fk];
      return (0, Rk.jsxs)(Rk.Fragment, {
        children: [(0, Rk.jsx)(ek.e, {
          name: Xk.icon
        }), " ", (0, Rk.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: Ik(Xk.title)
        })]
      })
    }

    function QF(kk) {
      var Fk;
      const {
        t: Ik
      } = (0, jk.y)(), {
        pages: ik,
        landing: yk
      } = kk, ak = (0, Xk.useRef)(null), qk = (0, Xk.useRef)(null), Lk = (0, Xk.useRef)(null), tk = (0, Xk.useRef)(new Map), [ek, wk] = (0, Xk.useState)(null), Pk = (0, Xk.useRef)(ek), Kk = (0, Xk.useRef)(0), [Qk, sk] = (0, Xk.useState)(ik[0]), Vk = null !== ek && void 0 !== ek ? ek : ik.includes(Qk) ? Qk : ik[0], [zk] = (0, Xk.useState)(null !== (Fk = null === yk || void 0 === yk ? void 0 : yk.page) && void 0 !== Fk ? Fk : null), Sk = null !== zk && ik.includes(zk) ? [zk, ...ik.filter((kk => kk !== zk))] : ik, [vk] = (0, Xk.useState)((() => {
        const Fk = wF(eF(kk.manage.state.rules, (kk => kk.value)));
        return Math.max(1, Math.ceil(Fk.length / xF))
      })), Ek = Sk.flatMap((kk => "rules" === kk ? Array(vk).fill(kk) : [kk])), Ok = function(kk, Fk) {
        const [Ik, Tk] = (0, Xk.useState)(kk), ik = Ik >= Fk;
        return ik && Ik !== 1 / 0 && Tk(1 / 0), (0, Xk.useLayoutEffect)((() => {
          if (ik) return;
          let kk = !0;
          return (0, xk.e)().then((() => {
            kk && Tk((kk => kk + 1))
          })), () => {
            kk = !1
          }
        }), [Ik, ik]), ik ? 1 / 0 : Ik
      }(1, Ek.length), nk = Ek.slice(0, Ok), Gk = new Set(nk), pk = Ok < Ek.length, uk = pk ? nk.filter((kk => "rules" === kk)).length * xF : 1 / 0, bk = (0, Xk.useRef)(kk.focusRequest);
      bk.current = kk.focusRequest;
      const Uk = kk => {
          Pk.current = kk, wk(kk)
        },
        Ck = () => {
          var kk, Fk;
          ak.current.style.scrollPaddingTop = `${null!==(kk=null===(Fk=Lk.current)||void 0===Fk?void 0:Fk.offsetHeight)&&void 0!==kk?kk:0}px`
        },
        Nk = kk => {
          const Fk = ak.current,
            Ik = tk.current.get(kk);
          if (void 0 === Ik) return;
          const Xk = document.activeElement,
            Tk = bk.current,
            ik = null === Tk ? null : Ik.querySelector(`[data-lobby-manage-row="${CSS.escape(Tk.name)}"]`);
          Ck(), Xk instanceof HTMLElement && null !== ik && void 0 !== ik && ik.contains(Xk) ? Xk.scrollIntoView({
            block: "center"
          }) : null === Ik.previousElementSibling ? Fk.scrollTop = 0 : Ik.scrollIntoView({
            block: "start"
          }), Kk.current = Fk.scrollTop
        },
        ck = kk => {
          (0, Tk.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: kk
          }), Uk(kk), Nk(kk)
        },
        Wk = () => {
          var kk, Fk;
          const Ik = ak.current,
            Xk = Ik.getBoundingClientRect().top + (null !== (kk = null === (Fk = Lk.current) || void 0 === Fk ? void 0 : Fk.offsetHeight) && void 0 !== kk ? kk : 0),
            Tk = ik.map((kk => {
              var Fk, Ik;
              return (null !== (Fk = null === (Ik = tk.current.get(kk)) || void 0 === Ik ? void 0 : Ik.getBoundingClientRect().top) && void 0 !== Fk ? Fk : 1 / 0) - Xk
            })),
            yk = !pk && Ik.scrollTop + Ik.clientHeight >= Ik.scrollHeight - 1;
          sk(ik[(0, lk.h)(Tk, yk)])
        },
        fk = () => {
          null !== Pk.current && (Uk(null), Wk())
        };
      (0, Xk.useLayoutEffect)((() => {
        null !== yk && ik.includes(yk.page) && ck(yk.page)
      }), [null === yk || void 0 === yk ? void 0 : yk.seq]), (0, Xk.useLayoutEffect)((() => {
        null === Pk.current || ik.includes(Pk.current) || fk()
      }));
      const {
        onFocused: Bk
      } = kk, dk = (0, Xk.useCallback)((kk => {
        null !== Pk.current && Nk(Pk.current), Bk(kk)
      }), [Bk]);
      (0, Xk.useLayoutEffect)((() => {
        const kk = Pk.current;
        null !== kk && (!pk || ik.indexOf(Ek[Ok - 1]) < ik.indexOf(kk)) && Nk(kk)
      }), [Ok]), (0, Xk.useEffect)((() => {
        const kk = new ResizeObserver((() => {
          null !== Pk.current ? Nk(Pk.current) : Ck()
        }));
        return kk.observe(ak.current), kk.observe(qk.current), () => {
          kk.disconnect()
        }
      }), []), (0, Xk.useLayoutEffect)((() => {
        const kk = Lk.current,
          Fk = null === kk || void 0 === kk ? void 0 : kk.querySelector(".SegmentedToggleOptionSelected");
        Fk && (kk.scrollLeft = Math.min(Fk.offsetLeft, Math.max(kk.scrollLeft, Fk.offsetLeft + Fk.offsetWidth - kk.clientWidth)))
      }), [Vk]);
      return (0, Rk.jsxs)("div", {
        ref: ak,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === Pk.current ? Wk() : Math.abs(ak.current.scrollTop - Kk.current) > 1 && fk()
        },
        onClick: kk => {
          var Fk;
          null !== (Fk = Lk.current) && void 0 !== Fk && Fk.contains(kk.target) || fk()
        },
        onFocus: kk => {
          var Fk;
          const Ik = null === Pk.current ? null : tk.current.get(Pk.current);
          !Ik || Ik.contains(kk.target) || null !== (Fk = Lk.current) && void 0 !== Fk && Fk.contains(kk.target) || fk()
        },
        children: [ik.length > 1 && (0, Rk.jsx)("div", {
          ref: Lk,
          className: "LobbyManageChips",
          children: (0, Rk.jsx)(Jk.b, {
            options: ik.map((kk => ({
              value: kk,
              label: (0, Rk.jsx)(KF, {
                page: kk
              }),
              ariaLabel: Ik(JF[kk].title)
            }))),
            value: Vk,
            padTabs: "2",
            ariaLabel: Ik("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: ck
          })
        }), (0, Rk.jsx)("div", {
          ref: qk,
          className: Zk()("LobbyManageInner", {
            Staging: pk
          }),
          children: ik.filter((kk => Gk.has(kk))).map((Fk => {
            const Ik = Fk === ek;
            return (0, Rk.jsxs)("section", {
              ref: kk => {
                kk ? tk.current.set(Fk, kk) : tk.current.delete(Fk)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": Ik || void 0,
              children: [ik.length > 1 && (0, Rk.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": Ik || void 0,
                "data-pad-unavailable": Ik || void 0,
                children: (0, Rk.jsx)(Hk.b, {
                  label: (0, Rk.jsx)(KF, {
                    page: Fk
                  })
                })
              }), (0, Rk.jsx)(PF, {
                page: Fk,
                manage: kk.manage,
                leaderboard: kk.leaderboard,
                focusRequest: kk.focusRequest,
                onFocused: dk,
                ruleRowsShown: "rules" === Fk ? uk : 1 / 0
              })]
            }, Fk)
          }))
        })]
      })
    }

    function sF(kk) {
      return void 0 === (null === kk || void 0 === kk ? void 0 : kk.page) ? null : {
        page: kk.page,
        seq: kk.seq
      }
    }

    function VF(kk) {
      let {
        leaderboard: Fk
      } = kk;
      const Ik = function() {
          const kk = (0, ak.j)("lobbyManage"),
            [Fk, Ik] = (0, Xk.useReducer)((kk => kk + 1), 0),
            [Tk] = (0, Xk.useState)((() => new qk.b(Ik)));
          return (0, Xk.useEffect)((() => {
            const kk = Tk.nextDeadline();
            if (null === kk) return;
            const Fk = setTimeout((() => {
              Tk.expire(Date.now()), Ik()
            }), Math.max(0, kk - Date.now()));
            return () => {
              clearTimeout(Fk)
            }
          })), (0, Xk.useMemo)((() => null === kk ? null : {
            state: kk,
            send: (kk, Fk, Xk) => {
              const ik = Tk.send(kk, Fk, null !== Xk && void 0 !== Xk ? Xk : null);
              return Ik(), ik
            },
            statusOf: kk => Tk.statusOf(kk, Date.now()),
            showStatus: (kk, Fk) => {
              Tk.show(kk, Fk)
            },
            isPending: kk => Tk.isPending(kk)
          }), [kk, Fk, Tk])
        }(),
        Lk = (0, lk.l)((0, ik.e)()),
        tk = (0, yk.l)(),
        [Zk, jk] = (0, Xk.useState)((() => sF(tk))),
        [ek, wk] = (0, Xk.useState)(null);
      return (0, Xk.useEffect)((() => {
        null === tk && (0, Tk.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, Xk.useEffect)((() => {
        null !== tk && (jk((kk => (null === kk || void 0 === kk ? void 0 : kk.seq) === tk.seq ? kk : sF(tk))), void 0 !== tk.focusName && "players" === tk.page ? wk({
          name: tk.focusName,
          seq: tk.seq
        }) : (0, yk.j)(tk.seq))
      }), [null === tk || void 0 === tk ? void 0 : tk.seq]), null === Ik ? null : (0, Rk.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, Rk.jsx)(QF, {
          pages: (0, lk.d)(Ik.state, Lk),
          manage: Ik,
          leaderboard: Fk,
          focusRequest: ek,
          onFocused: yk.j,
          landing: Zk
        })
      })
    }
  },
  36558: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Lk,
      f: () => ak
    });
    var Xk = Ik(1432),
      Tk = Ik(1894),
      ik = Ik(1875);
    const yk = 1e4;
    let lk = 0;

    function ak(kk) {
      const Fk = ++lk;
      return new Promise((Ik => {
        const lk = Fk => {
            ak(), clearTimeout(qk), !1 === (null === Fk || void 0 === Fk ? void 0 : Fk.ok) && (0, Xk.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: kk.type
            }), Ik(Fk)
          },
          ak = Tk.e.subscribe("lobbyManage", (kk => {
            const Ik = function(kk, Fk) {
              var Ik;
              return null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.results.find((kk => kk.requestId === Fk))) && void 0 !== Ik ? Ik : null
            }(kk, Fk);
            null !== Ik && lk(Ik)
          })),
          qk = setTimeout((() => {
            lk(null)
          }), yk);
        ik.gameBridge.send("lobbyManage", {
          ...kk,
          requestId: Fk
        })
      }))
    }
    const qk = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class Lk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ak;
        this.onChange = kk, this.sendAction = Fk, this.pending = new Map, this.statuses = new Map
      }
      send(kk, Fk, Ik) {
        var Xk;
        return this.statuses.delete(Fk), this.pending.set(Fk, (null !== (Xk = this.pending.get(Fk)) && void 0 !== Xk ? Xk : 0) + 1), this.sendAction(kk).then((kk => {
          var Xk;
          const Tk = null !== kk && void 0 !== kk ? kk : {
              requestId: -1,
              ok: !1,
              message: qk
            },
            ik = (null !== (Xk = this.pending.get(Fk)) && void 0 !== Xk ? Xk : 1) - 1;
          ik > 0 ? this.pending.set(Fk, ik) : this.pending.delete(Fk);
          const yk = !Tk.ok || Tk.message.length > 0 ? Tk.message : null === Ik ? null : [Ik];
          return null !== yk && this.statuses.set(Fk, {
            ok: Tk.ok,
            text: yk,
            until: Date.now() + 4e3
          }), this.onChange(), Tk
        }))
      }
      show(kk, Fk) {
        this.statuses.set(kk, {
          ...Fk,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(kk) {
        for (const [Fk, Ik] of this.statuses) Ik.until <= kk && this.statuses.delete(Fk)
      }
      nextDeadline() {
        let kk = null;
        for (const Ik of this.statuses.values()) {
          var Fk;
          kk = Math.min(null !== (Fk = kk) && void 0 !== Fk ? Fk : 1 / 0, Ik.until)
        }
        return kk
      }
      statusOf(kk, Fk) {
        const Ik = this.statuses.get(kk);
        return !Ik || Ik.until <= Fk ? null : {
          ok: Ik.ok,
          text: Ik.text
        }
      }
      isPending(kk) {
        return this.pending.has(kk)
      }
    }
  },
  36548: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk,
      i: () => ak
    });
    var Xk = Ik(612),
      Tk = Ik(1875),
      ik = Ik(1585),
      yk = Ik(95),
      lk = Ik(1248);

    function ak(kk, Fk, Ik) {
      return yk.featureFlags.useSocialFeatures && kk && null === (0, lk.c)(Fk, Ik)
    }

    function qk(kk, Fk) {
      var Ik, yk;
      const lk = ik.c.getSocialState().friends.find((kk => kk.name.toLowerCase() === Fk.toLowerCase())),
        ak = Tk.gameBridge.latest("players").byId[kk],
        qk = void 0 !== ak && ak.name === Fk,
        Lk = qk && null !== (Ik = ak.cosmetics) && void 0 !== Ik ? Ik : void 0,
        tk = lk && Lk ? {
          ...lk,
          cosmetics: Lk
        } : lk;
      return {
        playerSocialPreview: null !== tk && void 0 !== tk ? tk : {
          isError: !1,
          name: Fk,
          ranks: qk ? [...ak.ranks] : [],
          cosmetics: null !== Lk && void 0 !== Lk ? Lk : {},
          nameColour: null !== (yk = null === Lk || void 0 === Lk ? void 0 : Lk.nameColour) && void 0 !== yk ? yk : Xk.c,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== lk
      }
    }
  },
  36742: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => tk
    });
    var Xk = Ik(58),
      Tk = Ik(1055),
      ik = Ik.n(Tk),
      yk = Ik(1617),
      lk = Ik(1406),
      ak = Ik(1318),
      qk = Ik(1066),
      Lk = Ik(1096);

    function tk(kk) {
      let {
        label: Fk,
        icon: Ik,
        placeholder: Tk,
        onSubmit: tk
      } = kk;
      const Zk = (0, Xk.useRef)(null),
        [jk, ek] = (0, Xk.useState)(""),
        [wk, Hk] = (0, Xk.useState)("Enter"),
        [Jk, xk] = (0, Xk.useState)(null);
      (0, Xk.useEffect)((() => {
        if ("Success" !== wk && "Error" !== wk) return;
        const kk = setTimeout((() => {
          "Success" === wk && Zk.current && (Zk.current.value = "", ek("")), Hk("Enter")
        }), "Success" === wk ? 1e3 : 4e3);
        return () => {
          clearTimeout(kk)
        }
      }), [wk]);
      const Pk = () => {
        const kk = jk.trim();
        "" !== kk && "Enter" === wk && (Hk("Loading"), tk(kk).then((kk => {
          Zk.current && ("error" in kk ? null === kk.error ? Hk("Enter") : (xk(kk.error), Hk("Error")) : Hk("Success"))
        })))
      };
      return (0, Lk.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: kk => {
          kk.target === Zk.current && "Escape" !== kk.key && kk.stopPropagation()
        },
        children: [(0, Lk.jsxs)("div", {
          className: ik()("AddFriendBodyOverlay", `AddFriendBodyOverlay${wk}`),
          children: ["Loading" === wk && (0, Lk.jsx)(ak.c, {}), "Success" === wk && (0, Lk.jsx)(qk.e, {
            name: "check"
          }), "Error" === wk && Jk]
        }), (0, Lk.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, Lk.jsx)(yk.c, {
            className: "PlayerSearchInput",
            domRef: Zk,
            maxLength: 32,
            placeholderText: Tk,
            ariaLabel: Tk,
            stopPropagation: !1,
            onValueChange: kk => {
              ek(kk)
            },
            onEnter: Pk
          }), (0, Lk.jsxs)(lk.d, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== wk || "" === jk.trim(),
            onClick: Pk,
            children: [(0, Lk.jsx)(qk.e, {
              name: Ik
            }), " ", Fk]
          })]
        })]
      })
    }
  },
  36721: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => tk
    });
    var Xk = Ik(58),
      Tk = Ik(1055),
      ik = Ik.n(Tk),
      yk = Ik(1179),
      lk = Ik(1066),
      ak = Ik(1096);
    const qk = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Lk = ["unlisted", "public", "whitelist", "private"];

    function tk(kk) {
      let {
        visibility: Fk,
        onPick: Ik
      } = kk;
      const {
        t: Tk
      } = (0, yk.y)(), tk = (0, Xk.useRef)([]);
      return (0, ak.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Tk("worldSocial:whoCanJoin"),
        children: Lk.map(((kk, Xk) => {
          const yk = kk === Fk;
          return (0, ak.jsxs)("button", {
            ref: kk => {
              tk.current[Xk] = kk
            },
            type: "button",
            className: ik()("WorldSocialTile", {
              WorldSocialTileSelected: yk
            }),
            "aria-pressed": yk,
            tabIndex: yk ? 0 : -1,
            onKeyDown: kk => {
              ((kk, Fk) => {
                const Ik = "ArrowRight" === kk.key || "ArrowDown" === kk.key ? 1 : "ArrowLeft" === kk.key || "ArrowUp" === kk.key ? -1 : 0;
                var Xk;
                0 !== Ik && (kk.preventDefault(), null === (Xk = tk.current[(Fk + Ik + Lk.length) % Lk.length]) || void 0 === Xk || Xk.focus())
              })(kk, Xk)
            },
            onClick: () => {
              Ik(kk)
            },
            children: [(0, ak.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, ak.jsx)(lk.e, {
                name: qk[kk]
              })
            }), (0, ak.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, ak.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Tk(`worldSocial:${kk}`)
              }), (0, ak.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Tk(`worldSocial:${kk}Description`)
              })]
            })]
          }, kk)
        }))
      })
    }
  },
  36733: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk
    });
    var Xk = Ik(1179),
      Tk = Ik(2578),
      ik = Ik(4338),
      yk = Ik(1096);

    function lk(kk) {
      let {
        Dt: Fk,
        children: Ik,
        ...lk
      } = kk;
      const {
        t: ak
      } = (0, Xk.y)();
      return (0, yk.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          Fk.onChange(!Fk.on)
        },
        children: (0, yk.jsx)(Tk.e, {
          ...lk,
          opensProfileCard: !1,
          children: (0, yk.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: kk => {
              kk.stopPropagation()
            },
            children: [Ik, (0, yk.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, yk.jsx)(ik.d, {
                checked: Fk.on,
                disabled: !1,
                ariaLabel: ak("worldSocial:letJoin", {
                  playerName: lk.playerSocialPreview.name
                }),
                onChange: kk => {
                  Fk.onChange(kk.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36712: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ek
    });
    var Xk = Ik(58),
      Tk = Ik(1179),
      ik = Ik(1800),
      yk = Ik(95),
      lk = Ik(25),
      ak = Ik(1432),
      qk = Ik(2602),
      Lk = Ik(34058),
      tk = Ik(1406),
      Zk = Ik(1066),
      jk = Ik(1096);

    function ek(kk) {
      let {
        worldCode: Fk,
        message: Ik
      } = kk;
      const {
        t: ek
      } = (0, Tk.y)(), {
        isTouchScreen: wk
      } = (0, lk.j)(["isTouchScreen"]), Hk = yk.featureFlags.canUseInviteLinks, Jk = (0, Lk.d)(Hk && null === Ik), [xk, Pk] = (0, qk.g)(), Kk = (0, Xk.useRef)(null);
      if (null !== Ik) return (0, jk.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, jk.jsx)(Zk.e, {
          name: "lock"
        }), (0, jk.jsx)("span", {
          children: Ik
        })]
      });
      const Qk = Hk ? Jk : Fk,
        sk = wk && Hk && (0, qk.b)();
      return (0, jk.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!Hk && (0, jk.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: ek("worldSocial:worldCode")
        }), (0, jk.jsx)("input", {
          ref: Kk,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Qk && void 0 !== Qk ? Qk : "",
          "aria-label": ek(Hk ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: kk => {
            kk.currentTarget.select()
          }
        }), (0, jk.jsxs)(tk.d, {
          className: "WorldSocialCopy",
          disabled: null === Qk,
          onClick: () => {
            null !== Qk && (0, qk.e)(Qk, {
              useShareSheet: sk,
              onOutcome: kk => {
                if ((0, ak.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== kk || Hk ? kk : "code"
                  }), "copied" === kk) Pk();
                else if ("failed" === kk) {
                  var Fk;
                  null === (Fk = Kk.current) || void 0 === Fk || Fk.focus(), ik.e.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, jk.jsx)(Zk.e, {
            name: xk ? "check" : sk ? "up-from-bracket" : "copy"
          }), " ", ek(xk ? "general:copied" : sk ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36727: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => jk,
      i: () => Zk,
      j: () => tk
    });
    var Xk = Ik(612),
      Tk = Ik(1179),
      ik = Ik(1585),
      yk = Ik(2578),
      lk = Ik(2525),
      ak = Ik(1406),
      qk = Ik(36733),
      Lk = Ik(1096);

    function tk(kk, Fk) {
      var Ik;
      return {
        isError: !1,
        name: kk,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== Fk && void 0 !== Fk ? Fk : {},
        nameColour: null !== (Ik = null === Fk || void 0 === Fk ? void 0 : Fk.nameColour) && void 0 !== Ik ? Ik : Xk.c,
        location: {
          status: "offline"
        }
      }
    }

    function Zk(kk) {
      let {
        player: Fk,
        isFriend: Ik = !1,
        status: Xk,
        showLocation: ak = void 0 === Xk,
        Dt: tk,
        onSendFriendRequest: Zk,
        actions: jk,
        zIndex: ek
      } = kk;
      const {
        t: wk
      } = (0, Tk.y)();
      let Hk = Xk;
      null !== tk && void 0 !== tk && tk.on && (Hk = (0, Lk.jsxs)(Lk.Fragment, {
        children: [null !== Xk && void 0 !== Xk ? Xk : (0, Lk.jsx)(lk.c, {
          socialPreview: Fk
        }), (0, Lk.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", wk("worldSocial:canJoin")]
        })]
      }));
      const Jk = {
        playerSocialPreview: Fk,
        isFriend: Ik,
        hideFriendBadge: !0,
        onFriendRemoved: Ik ? kk => {
          ik.c.removeFriendFromState(kk)
        } : void 0,
        status: Hk,
        showLocation: ak,
        onSendFriendRequest: Zk,
        zIndex: ek
      };
      return tk ? (0, Lk.jsx)(qk.c, {
        ...Jk,
        Dt: tk,
        children: jk
      }) : (0, Lk.jsx)(yk.e, {
        ...Jk,
        opensProfileCard: !1,
        children: jk || void 0
      })
    }

    function jk(kk) {
      let {
        row: Fk,
        Dt: Ik,
        canInvite: Xk,
        invited: ik,
        onInvite: yk,
        zIndex: lk
      } = kk;
      const {
        t: qk
      } = (0, Tk.y)(), tk = "online" === Fk.place ? ak.d : ak.g;
      return (0, Lk.jsx)(Zk, {
        player: Fk.friend,
        isFriend: !0,
        status: "here" === Fk.place ? qk("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Dt: Ik,
        zIndex: lk,
        actions: Xk && (0, Lk.jsx)(tk, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: ik,
          onClick: yk,
          ariaLabel: `${qk("worldSocial:invite")} ${Fk.friend.name}`,
          children: qk(ik ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36707: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ak,
      f: () => yk,
      g: () => qk
    });
    var Xk = Ik(58),
      Tk = Ik(4584),
      ik = Ik(1800);

    function yk(kk) {
      const Fk = {
        lobbyName: kk,
        answer: null,
        response: Tk.c.getSocialSettings(kk)
      };
      return Fk.response.then((kk => {
        Fk.answer = kk
      })), Fk
    }
    const lk = new Map;

    function ak(kk) {
      lk.set(kk.lobbyName, kk)
    }

    function qk(kk) {
      const [Fk] = (0, Xk.useState)((() => function(kk) {
        var Fk;
        const Ik = null !== (Fk = lk.get(kk)) && void 0 !== Fk ? Fk : null;
        return null !== Ik && void 0 !== Ik && Ik.answer && "error" in Ik.answer ? null : Ik
      }(kk))), [Ik, yk] = (0, Xk.useState)((() => null !== Fk && void 0 !== Fk && Fk.answer && "settings" in Fk.answer ? Fk.answer.settings : null)), [ak, qk] = (0, Xk.useState)(!0), [Lk, tk] = (0, Xk.useState)(null !== Ik), Zk = (0, Xk.useRef)(Ik);
      Zk.current = Ik;
      const jk = (0, Xk.useRef)(0),
        ek = (0, Xk.useRef)(0),
        wk = (0, Xk.useRef)(!1),
        Hk = (0, Xk.useRef)(!0),
        Jk = (0, Xk.useCallback)((async Fk => {
          const Ik = ++jk.current,
            Xk = await (null !== Fk && void 0 !== Fk ? Fk : Tk.c.getSocialSettings(kk));
          Hk.current && Ik === jk.current && (tk(!0), qk(!1), "error" in Xk || yk(Xk.settings))
        }), [kk]),
        xk = (0, Xk.useCallback)((() => {
          qk(!0), Jk()
        }), [Jk]),
        Pk = (0, Xk.useCallback)((() => {
          ek.current > 0 ? wk.current = !0 : Jk()
        }), [Jk]);
      (0, Xk.useEffect)((() => (Hk.current = !0, lk.delete(kk), qk(!0), Jk(null === Fk || void 0 === Fk ? void 0 : Fk.response), () => {
        Hk.current = !1
      })), [Jk, kk, Fk]);
      const Kk = kk => {
        jk.current++, qk(!1), Zk.current = kk, yk(kk)
      };
      return {
        settings: Ik,
        loading: ak,
        answered: Lk,
        retry: xk,
        refresh: Pk,
        change: async function(Fk, Ik) {
          let {
            quiet: Xk = !1,
            onAnswer: yk
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const lk = Zk.current;
          if (null === lk) return !1;
          Kk(Ik(lk)), ek.current > 0 && (wk.current = !0), ek.current++;
          const ak = await Tk.c.setSocialSettings(kk, Fk);
          ek.current--;
          const qk = !("error" in ak);
          if (!Hk.current) return qk;
          if (null === yk || void 0 === yk || yk(ak), Xk);
          else if ("error" in ak) ik.e.showMessage({
            translationKey: ak.error
          });
          else
            for (const kk of ak.notFound) ik.e.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: kk
              }
            });
          if (ek.current > 0) return qk;
          const Lk = wk.current;
          return wk.current = !1, !Lk && "settings" in ak ? Kk(ak.settings) : (Lk || Kk(lk), Jk()), qk
        }
      }
    }
  },
  36750: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      f: () => ik
    });
    var Xk = Ik(149);
    const Tk = new Map;

    function ik(kk, Fk) {
      var Ik;
      const Xk = null !== (Ik = Tk.get(kk)) && void 0 !== Ik ? Ik : new Map;
      Xk.set(Fk, Date.now()), Tk.set(kk, Xk)
    }

    function yk(kk) {
      const Fk = Tk.get(kk);
      if (!Fk) return [];
      const Ik = Date.now();
      for (const [Tk, ik] of Fk) Ik - ik >= Xk.k && Fk.delete(Tk);
      return [...Fk.keys()]
    }
  },
  36710: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      const Ik = Fk.toLowerCase();
      for (const Xk of kk)
        if (Xk.toLowerCase() === Ik) return !0;
      return !1
    }

    function Tk(kk, Fk, Ik) {
      const Tk = [],
        ik = [],
        yk = [];
      for (const lk of kk) !lk.isError && lk.name && ("inGame" === lk.location.status && lk.location.inLobbyName === Fk || Xk(Ik, lk.name) ? ik.push({
        friend: lk,
        place: "here"
      }) : "offline" === lk.location.status ? yk.push({
        friend: lk,
        place: "offline"
      }) : Tk.push({
        friend: lk,
        place: "online"
      }));
      return [...Tk, ...ik, ...yk]
    }

    function ik(kk, Fk, Ik) {
      const Tk = [],
        ik = kk.flatMap((kk => "here" === kk.place ? [kk.friend.name] : []));
      for (const yk of [...ik, ...Fk]) Xk(Tk, yk) || Xk(Ik, yk) || Tk.push(yk);
      return Tk
    }

    function yk(kk, Fk) {
      return null === kk || void 0 === kk || !kk.canManage || Xk(kk.whitelist, Fk) ? "none" : "whitelist" === kk.visibility ? "required" : "quiet"
    }

    function lk(kk) {
      if (null === kk) return !0;
      const {
        visibility: Fk
      } = kk;
      return "public" === Fk || "unlisted" === Fk || "whitelist" === Fk && kk.canManage
    }

    function ak(kk, Fk, Ik) {
      if (Ik) {
        const Ik = Fk.filter((Fk => !Xk(kk.whitelist, Fk)));
        return {
          ...kk,
          whitelist: [...kk.whitelist, ...Ik]
        }
      }
      return {
        ...kk,
        whitelist: kk.whitelist.filter((kk => !Xk(Fk, kk)))
      }
    }

    function qk(kk, Fk) {
      const Ik = [];
      for (let Xk = 0; Xk < kk.length; Xk += Fk) Ik.push(kk.slice(Xk, Xk + Fk));
      return Ik
    }
    Ik.d(Fk, {
      e: () => lk,
      f: () => ik,
      i: () => Tk,
      m: () => Xk,
      q: () => qk,
      r: () => yk,
      s: () => ak
    })
  },
  37056: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik
    });
    var Xk = Ik(58),
      Tk = Ik(2349);

    function ik() {
      const kk = (0, Tk.j)("lobbyLeaderboardInfo");
      return (0, Xk.useMemo)((() => function(kk) {
        if (null === kk) return null;
        const Fk = Object.entries(kk),
          Ik = Fk.filter((kk => {
            let [, Fk] = kk;
            return void 0 !== Fk
          }));
        if (Ik.length === Fk.length) return kk;
        const Xk = Object.fromEntries(Ik),
          Tk = Object.keys(kk).filter((kk => !Object.hasOwn(Xk, kk)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${Tk.join(", ")}`), Xk
      }(kk)), [kk])
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);