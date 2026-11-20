export const id = 215;
export const ids = [215];
export const modules = {
  40821: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      LobbyManageView: () => PE
    });
    var Yq = gq(57),
      lq = gq(1448),
      Oq = gq(2383),
      mq = gq(2402),
      xq = gq(2411),
      Aq = gq(36612);

    function cq() {
      const [qq, Eq] = (0, Yq.useState)(new Map);
      return {
        get: Eq => qq.get(Eq),
        hold: (0, Yq.useCallback)(((qq, gq, Yq) => {
          Eq((Eq => new Map(Eq).set(qq, gq))), Yq.then((() => {
            Eq((Eq => {
              const gq = new Map(Eq);
              return gq.delete(qq), gq
            }))
          }))
        }), [])
      }
    }
    var uq = gq(1018),
      Bq = gq.n(uq),
      Wq = gq(1183),
      Nq = gq(1025),
      aq = gq(1326),
      Vq = gq(2569),
      dq = gq(4858),
      jq = gq(3455);
    var Hq = gq(1942),
      oq = gq(1422);

    function Pq(qq, Eq, gq) {
      const Yq = qq.filter((qq => qq.name !== Eq)),
        lq = Yq.filter((qq => "none" === qq.role)).sort(((qq, Eq) => Eq.at - qq.at)),
        Oq = Yq.filter((qq => "none" !== qq.role)).sort(((qq, Eq) => gq.indexOf(qq.role) - gq.indexOf(Eq.role) || Eq.at - qq.at));
      return [...qq.some((qq => qq.name === Eq)) && null !== Eq ? [Eq] : [], ...[...lq, ...Oq].map((qq => qq.name))]
    }

    function Qq(qq, Eq) {
      const gq = qq.banned.map((qq => qq.name)),
        Yq = new Set(gq);
      return {
        here: Pq(qq.here, Eq, qq.roles.map((qq => qq.role))),
        away: qq.away.filter((qq => !Yq.has(qq.name))).map((qq => qq.name)),
        banned: gq
      }
    }

    function yq(qq, Eq) {
      const gq = qq.here.find((qq => qq.name === Eq));
      if (gq) return {
        section: "here",
        player: gq
      };
      const Yq = qq.banned.find((qq => qq.name === Eq));
      if (Yq) return {
        section: "banned",
        bannedAt: Yq.at
      };
      const lq = qq.away.find((qq => qq.name === Eq));
      return lq ? {
        section: "away",
        player: lq
      } : {
        section: "gone"
      }
    }
    const tq = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var rq = gq(2563),
      vq = gq(36599),
      hq = gq(36759),
      nq = gq(3040),
      bq = gq(307);

    function iq(qq, Eq, gq) {
      return Eq.map((Eq => {
        if ("string" === typeof Eq) return Eq;
        const Yq = "str" in Eq ? Eq.str : Eq;
        return "string" === typeof Yq ? Yq : "entityName" in Yq ? Yq.entityName : "translationKey" in Yq ? qq(Yq.translationKey, (0, Wq.j)(Yq.params, gq)) : ""
      })).join("")
    }

    function Zq(qq, Eq, gq, Yq, lq) {
      return lq - Yq < 6e4 ? qq(`${gq}JustNow`) : qq(gq, {
        time: (0, bq.lb)((0, Wq.h)(Eq, gq), Yq, lq)
      })
    }
    var fq = gq(1876),
      Mq = gq(1659),
      Tq = gq(1070);

    function zq(qq) {
      let {
        status: Eq
      } = qq;
      return (0, Tq.jsx)("span", {
        className: Bq()("LobbyManageStatus", {
          LobbyManageStatusRefused: !Eq.ok
        }),
        children: (0, Tq.jsx)(fq.c, {
          text: Eq.text
        })
      })
    }

    function Sq(qq) {
      let {
        names: Eq,
        cap: gq,
        filterFrom: lq,
        moreLabel: Oq,
        reveal: mq = null,
        renderRow: xq
      } = qq;
      const {
        t: Aq
      } = (0, Wq.v)(), [cq, uq] = (0, Yq.useState)(!1), [Bq, aq] = (0, Yq.useState)(""), dq = cq || null !== mq && Eq.indexOf(mq) >= gq, jq = (dq || Eq.length <= gq) && null !== lq && Eq.length > lq, Hq = Bq.trim().toLowerCase();
      let oq = dq ? Eq : Eq.slice(0, gq);
      return jq && "" !== Hq && (oq = oq.filter((qq => qq.toLowerCase().includes(Hq)))), (0, Tq.jsxs)(Tq.Fragment, {
        children: [jq && (0, Tq.jsx)(Mq.b, {
          className: "LobbyManageFilter",
          placeholderText: Aq("lobbyManage:findName"),
          ariaLabel: Aq("lobbyManage:findName"),
          onValueChange: qq => {
            aq(qq)
          }
        }), oq.length > 0 && (0, Tq.jsx)("div", {
          className: "PlayerRows",
          children: oq.map(((qq, Eq) => xq(qq, oq.length - Eq)))
        }), !dq && Eq.length > gq && (0, Tq.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, Tq.jsx)(Vq.c, {
            label: (0, Tq.jsxs)(Tq.Fragment, {
              children: [Oq, " ", (0, Tq.jsx)(Nq.d, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              uq(!0)
            }
          })
        })]
      })
    }

    function pq(qq) {
      let {
        value: Eq,
        placeholder: gq,
        ariaLabel: lq,
        maxLength: Oq,
        wide: mq = !1,
        onSave: xq
      } = qq;
      const Aq = (0, Yq.useRef)(null),
        [cq, uq] = (0, Yq.useState)(0),
        Wq = (0, Yq.useRef)(!0),
        Nq = (0, Yq.useRef)(null),
        aq = (0, Yq.useRef)({
          value: Eq,
          onSave: xq
        });
      aq.current = {
        value: Eq,
        onSave: xq
      };
      const Vq = () => {
        const qq = Nq.current;
        Nq.current = null, null !== qq && qq !== aq.current.value && aq.current.onSave(qq).then((() => {
          Wq.current && uq((qq => qq + 1))
        }))
      };
      return (0, Yq.useEffect)((() => {
        null === Nq.current && Aq.current && (Aq.current.value = Eq)
      }), [Eq, cq]), (0, Yq.useEffect)((() => () => {
        Wq.current = !1, Vq()
      }), []), (0, Tq.jsx)("div", {
        className: Bq()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: mq
        }),
        onBlur: Vq,
        children: (0, Tq.jsx)(Mq.b, {
          domRef: Aq,
          defaultValue: Eq,
          placeholderText: gq,
          ariaLabel: lq,
          maxLength: Oq,
          onValueChange: qq => {
            Nq.current = qq
          },
          onEnter: Vq
        })
      })
    }
    const Gq = ["mod", "coOwner"],
      Lq = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function Jq(qq) {
      var Eq, gq, Oq;
      let {
        name: mq,
        place: xq,
        openedIn: Aq,
        isYou: uq,
        manage: Bq,
        hiddenNames: aq,
        zIndex: Vq
      } = qq;
      const {
        t: dq,
        selectedLanguage: jq
      } = (0, Wq.v)(), [Hq, Pq] = (0, Yq.useState)(null), {
        state: Qq
      } = Bq, yq = `player:${mq}`, bq = function(qq, Eq) {
        if ("banned" === qq.section) return {
          ...tq,
          unban: !0
        };
        if ("gone" === qq.section) return tq;
        const {
          player: gq
        } = qq, Yq = "here" === qq.section, lq = Yq || "none" !== gq.role ? gq.can.roles : [];
        return {
          gamemode: Yq && Eq && null !== gq.gamemode && gq.can.gamemode,
          roles: lq,
          fixedRole: 0 === lq.length && "none" !== gq.role ? gq.role : null,
          kick: Yq && gq.can.kick,
          ban: gq.can.ban,
          unban: !1
        }
      }(xq, null !== Qq.gamemodes), fq = Bq.statusOf(yq), Mq = Bq.isPending(yq), Sq = cq(), pq = Date.now(), Jq = qq => {
        var Eq, gq;
        return null !== (Eq = null === (gq = (qq => Qq.roles.find((Eq => Eq.role === qq)))(qq)) || void 0 === gq ? void 0 : gq.label) && void 0 !== Eq ? Eq : qq
      }, kq = qq => {
        const Eq = Lq[qq];
        return void 0 === Eq ? void 0 : dq(Eq)
      }, Rq = "here" === xq.section || "away" === xq.section ? xq.player : null, Uq = "here" === xq.section ? xq.player.id : null, {
        playerSocialPreview: Fq,
        isFriend: sq
      } = null === Uq ? {
        playerSocialPreview: (0, hq.l)(mq, null),
        isFriend: !1
      } : (0, vq.d)(Uq, mq), Xq = function() {
        Bq.send(...arguments)
      }, wq = (qq, Eq) => {
        Sq.hold("role", qq, Bq.send({
          type: "setRole",
          name: mq,
          role: qq
        }, yq, Eq))
      };
      let Kq = null;
      if ("ban" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind)) Kq = dq("lobbyManageEntry:banConfirm", {
        playerName: mq
      });
      else if ("role" === (null === Hq || void 0 === Hq ? void 0 : Hq.kind)) {
        var Cq;
        Kq = `${dq("lobbyManage:roleConfirm",{playerName:mq,role:Jq(Hq.role)})} ${null!==(Cq=kq(Hq.role))&&void 0!==Cq?Cq:""}`
      } else if (fq) Kq = (0, Tq.jsx)(zq, {
        status: fq
      });
      else if (uq) Kq = dq("lobbyManage:you");
      else if ("here" === xq.section) "none" === xq.player.role && pq - xq.player.at < 6e5 && (Kq = Zq(dq, jq.code, "lobbyManage:joinedAgo", xq.player.at, pq));
      else if ("away" === xq.section) {
        if (xq.player.at > 0) {
          const qq = "kicked" === xq.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          Kq = Zq(dq, jq.code, qq, xq.player.at, pq)
        }
      } else "banned" === xq.section ? null !== xq.bannedAt && (Kq = Zq(dq, jq.code, "lobbyManage:bannedAgo", xq.bannedAt, pq)) : "banned" === Aq && (Kq = dq("lobbyManageEntry:unbanned"));
      return (0, Tq.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": mq,
        children: (0, Tq.jsxs)(rq.i, {
          playerSocialPreview: Fq,
          isFriend: sq,
          status: Kq,
          opensProfileCard: !uq && (0, vq.f)(!0, mq, aq),
          zIndex: Vq,
          children: [null !== Hq && (0, Tq.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === Hq.kind && (0, Tq.jsxs)(oq.K, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                Pq(null), Xq({
                  type: "ban",
                  name: mq
                }, yq)
              },
              children: [(0, Tq.jsx)(Nq.d, {
                name: "gavel"
              }), (0, Tq.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: dq("lobbyManageEntry:ban")
              })]
            }), "role" === Hq.kind && (0, Tq.jsx)(oq.g, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: Hq.role
              },
              onClick: () => {
                Pq(null), wq(Hq.role)
              },
              children: dq("lobbyManage:makeRole", {
                role: Jq(Hq.role)
              })
            }), (0, Tq.jsx)(oq.i, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                Pq(null)
              },
              children: dq("general:cancel")
            })]
          }), null === Hq && (0, Tq.jsxs)(Tq.Fragment, {
            children: [(0, Tq.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [bq.gamemode && null !== Rq && (0, Tq.jsx)(nq.d, {
                options: (null !== (Eq = Qq.gamemodes) && void 0 !== Eq ? Eq : []).map((qq => ({
                  value: qq.value,
                  label: iq(dq, qq.label, aq)
                }))),
                value: null !== (gq = Sq.get("gamemode")) && void 0 !== gq ? gq : Rq.gamemode,
                disabled: Mq,
                onChange: qq => {
                  (0, lq.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: qq.value
                  }), Sq.hold("gamemode", qq.value, Bq.send({
                    type: "setGamemode",
                    name: mq,
                    gamemode: qq.value
                  }, yq))
                }
              }), bq.roles.length > 0 && null !== Rq && (0, Tq.jsx)(nq.d, {
                options: [...Qq.roles].reverse().filter((qq => bq.roles.includes(qq.role))).map((qq => ({
                  value: qq.role,
                  label: qq.label
                }))),
                value: null !== (Oq = Sq.get("role")) && void 0 !== Oq ? Oq : Rq.role,
                disabled: Mq,
                onChange: qq => {
                  var Eq;
                  (Eq = qq.value) !== (null === Rq || void 0 === Rq ? void 0 : Rq.role) && (Gq.includes(Eq) ? Pq({
                    kind: "role",
                    role: Eq
                  }) : ((0, lq.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: Eq
                  }), wq(Eq, kq(Eq))))
                }
              }), null !== bq.fixedRole && (0, Tq.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: Jq(bq.fixedRole)
              })]
            }), (0, Tq.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [bq.kick && (0, Tq.jsxs)(oq.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${dq("lobbyManageEntry:kick")} ${mq}`,
                disabled: Mq,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  Xq({
                    type: "kick",
                    name: mq
                  }, yq)
                },
                children: [(0, Tq.jsx)(Nq.d, {
                  name: "person-falling-burst"
                }), (0, Tq.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: dq("lobbyManageEntry:kick")
                })]
              }), bq.ban && (0, Tq.jsxs)(oq.L, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${dq("lobbyManageEntry:ban")} ${mq}`,
                disabled: Mq,
                padDestructive: !0,
                onClick: () => {
                  Pq({
                    kind: "ban"
                  })
                },
                children: [(0, Tq.jsx)(Nq.d, {
                  name: "gavel"
                }), (0, Tq.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: dq("lobbyManageEntry:ban")
                })]
              }), bq.unban && (0, Tq.jsxs)(oq.i, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${dq("lobbyManageEntry:unban")} ${mq}`,
                disabled: Mq,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  Xq({
                    type: "unban",
                    name: mq
                  }, yq)
                },
                children: [(0, Tq.jsx)(Nq.d, {
                  name: "user-unlock"
                }), (0, Tq.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: dq("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function kq(qq) {
      var Eq, gq, lq, Oq;
      let {
        manage: mq,
        focusRequest: xq,
        onFocused: Aq
      } = qq;
      const {
        t: cq
      } = (0, Wq.v)(), uq = (0, Hq.g)("players"), Bq = (0, Hq.g)("hiddenPlayerNames"), aq = (0, Yq.useRef)(null), {
        state: dq
      } = mq, jq = null === uq.localId ? null : null !== (Eq = null === (gq = uq.byId[uq.localId]) || void 0 === gq ? void 0 : gq.name) && void 0 !== Eq ? Eq : null, [Pq] = (0, Yq.useState)((() => Qq(dq, jq))), tq = function(qq, Eq, gq) {
        const Yq = new Set([...qq.here, ...qq.away, ...qq.banned]),
          lq = Qq(Eq, gq),
          Oq = Eq => {
            const gq = lq[Eq].filter((qq => !Yq.has(qq)));
            for (const qq of gq) Yq.add(qq);
            return [...qq[Eq], ...gq]
          };
        return {
          here: Oq("here"),
          away: Oq("away"),
          banned: Oq("banned")
        }
      }(Pq, dq, jq), [rq, vq] = (0, Yq.useState)(!1), hq = function(qq, Eq) {
        return qq.here.filter((qq => qq.name !== Eq && "none" === qq.role && qq.can.kick)).length
      }(dq, jq), nq = mq.statusOf("kickAll");
      (0, Yq.useEffect)((() => {
        var qq, Eq;
        if (null === xq) return;
        const gq = null === (qq = aq.current) || void 0 === qq ? void 0 : qq.querySelector(`[data-lobby-manage-row="${CSS.escape(xq.name)}"]`);
        null === gq || void 0 === gq || gq.scrollIntoView({
          block: "center"
        }), null === gq || void 0 === gq || null === (Eq = gq.querySelector(".ProfilePreview")) || void 0 === Eq || Eq.focus({
          preventScroll: !0
        }), Aq(xq.seq)
      }), [null === xq || void 0 === xq ? void 0 : xq.seq]);
      const bq = qq => (Eq, gq) => (0, Tq.jsx)(Jq, {
        name: Eq,
        place: yq(dq, Eq),
        openedIn: qq,
        isYou: Eq === jq,
        manage: mq,
        hiddenNames: Bq,
        zIndex: gq
      }, Eq);
      return (0, Tq.jsxs)("div", {
        ref: aq,
        className: "LobbyManagePage",
        children: [tq.here.length > 0 && (0, Tq.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Tq.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, Tq.jsx)(Vq.c, {
              label: cq("lobbyManage:here"),
              meta: dq.here.length
            }), hq >= 2 && !rq && (0, Tq.jsxs)(oq.L, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: mq.isPending("kickAll"),
              onClick: () => {
                vq(!0)
              },
              children: [(0, Tq.jsx)(Nq.d, {
                name: "person-falling-burst"
              }), " ", cq("lobbyManage:kickAll")]
            })]
          }), rq && hq >= 2 && (0, Tq.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, Tq.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: cq("lobbyManage:kickAllConfirm", {
                count: hq
              })
            }), (0, Tq.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, Tq.jsx)(oq.K, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  vq(!1), mq.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: cq("lobbyManage:kickAll")
              }), (0, Tq.jsx)(oq.i, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  vq(!1)
                },
                children: cq("general:cancel")
              })]
            })]
          }), nq && (0, Tq.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, Tq.jsx)(zq, {
              status: nq
            })
          }), (0, Tq.jsx)(Sq, {
            names: tq.here,
            cap: tq.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: bq("here")
          })]
        }), tq.away.length > 0 && (0, Tq.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Tq.jsx)(Vq.c, {
            label: cq("lobbyManage:notHere"),
            meta: tq.away.length
          }), (0, Tq.jsx)(Sq, {
            names: tq.away,
            cap: 5,
            filterFrom: null,
            moreLabel: cq("lobbyManage:allCount", {
              count: tq.away.length
            }),
            reveal: null !== (lq = null === xq || void 0 === xq ? void 0 : xq.name) && void 0 !== lq ? lq : null,
            renderRow: bq("away")
          })]
        }), tq.banned.length > 0 && (0, Tq.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Tq.jsx)(Vq.c, {
            label: cq("lobbyManage:banned"),
            meta: tq.banned.length
          }), (0, Tq.jsx)(Sq, {
            names: tq.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: cq("lobbyManage:allCount", {
              count: tq.banned.length
            }),
            reveal: null !== (Oq = null === xq || void 0 === xq ? void 0 : xq.name) && void 0 !== Oq ? Oq : null,
            renderRow: bq("banned")
          })]
        })]
      })
    }
    var Rq = gq(4456),
      Uq = gq(1628),
      Fq = gq(36748),
      sq = gq(36757),
      Xq = gq(36755),
      wq = gq(36753),
      Kq = gq(36775),
      Cq = gq(36764),
      Iq = gq(36768);

    function eq(qq) {
      const Eq = new Set;
      for (const gq of qq) Eq.add(gq.toLowerCase());
      return Eq
    }

    function Dq(qq) {
      var Eq, gq;
      let {
        state: lq,
        lobbyName: Oq,
        listed: mq,
        isListed: xq,
        Wy: Aq,
        Fy: cq,
        statusOf: uq
      } = qq;
      const {
        t: Bq,
        selectedLanguage: Nq
      } = (0, Wq.v)(), aq = (0, Uq.g)(), dq = (0, Hq.g)("players"), jq = null === dq.localId ? null : null !== (Eq = null === (gq = dq.byId[dq.localId]) || void 0 === gq ? void 0 : gq.name) && void 0 !== Eq ? Eq : null, oq = (0, Yq.useMemo)((() => (0, wq.h)(aq.friends, Oq, lq.here.map((qq => qq.name)))), [aq.friends, Oq, lq.here]), Pq = new Map(oq.map((qq => [qq.friend.name.toLowerCase(), qq]))), Qq = function(qq) {
        let {
          refused: Eq,
          listed: gq,
          here: Yq,
          friends: lq,
          excluded: Oq
        } = qq;
        const mq = eq(Oq),
          xq = qq => qq.filter((qq => {
            const Eq = qq.toLowerCase();
            return !mq.has(Eq) && (mq.add(Eq), !0)
          }));
        return {
          added: [],
          refused: xq(Eq),
          listed: xq(gq),
          suggested: xq([...Yq, ...lq])
        }
      }({
        refused: lq.refused.map((qq => qq.name)),
        listed: mq,
        here: lq.here.map((qq => qq.name)),
        friends: oq.flatMap((qq => "here" === qq.place ? [] : [qq.friend.name])),
        excluded: [...null === jq ? [] : [jq], ...[...lq.here, ...lq.away].flatMap((qq => "none" === qq.role || (0, wq.k)(mq, qq.name) ? [] : [qq.name]))]
      }), [yq] = (0, Yq.useState)(Qq), [tq, rq] = (0, Yq.useState)([]), nq = function(qq, Eq, gq) {
        const Yq = eq(gq),
          lq = eq([...gq, ...qq.refused, ...qq.listed, ...qq.suggested]),
          Oq = gq => [...qq[gq].filter((qq => !Yq.has(qq.toLowerCase()))), ...Eq[gq].filter((qq => {
            const Eq = qq.toLowerCase();
            return !lq.has(Eq) && (lq.add(Eq), !0)
          }))];
        return {
          added: [...gq],
          refused: Oq("refused"),
          listed: Oq("listed"),
          suggested: Oq("suggested")
        }
      }(yq, Qq, tq), bq = (qq, Eq) => {
        var gq, Yq;
        const Oq = qq.toLowerCase(),
          mq = Pq.get(Oq),
          cq = lq.here.find((qq => qq.name.toLowerCase() === Oq)),
          Wq = lq.refused.find((qq => qq.name.toLowerCase() === Oq)),
          aq = null !== (gq = null === uq || void 0 === uq ? void 0 : uq(qq)) && void 0 !== gq ? gq : null;
        let Vq = null;
        aq ? Vq = (0, Tq.jsx)(zq, {
          status: aq
        }) : Wq ? Vq = Zq(Bq, Nq.code, "lobbyManage:triedToJoinAgo", Wq.at, Date.now()) : mq && cq ? Vq = Bq("lobbyManage:friendHere") : mq ? Vq = "online" === mq.place ? Bq("lobbyManage:friendOnline") : Bq("lobbyManage:friend") : cq && (Vq = Bq("lobbyManage:hereStatus"));
        let dq = null !== (Yq = null === mq || void 0 === mq ? void 0 : mq.friend) && void 0 !== Yq ? Yq : (0, hq.l)(qq, null);
        return !mq && null !== cq && void 0 !== cq && cq.id && (dq = (0, vq.d)(cq.id, cq.name).playerSocialPreview), (0, Tq.jsx)(Cq.d, {
          playerSocialPreview: dq,
          isFriend: void 0 !== mq,
          hideFriendBadge: !0,
          status: Vq,
          zIndex: Eq,
          SB: {
            on: xq(qq),
            onChange: Eq => {
              Aq(qq, Eq)
            }
          }
        }, Oq)
      }, iq = [...nq.added, ...nq.refused];
      return (0, Tq.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, Tq.jsx)(Vq.c, {
          label: Bq("worldSocial:whitelist"),
          meta: mq.length
        }), (0, Tq.jsx)(Iq.c, {
          label: Bq("lobbyManage:add"),
          icon: "user-check",
          placeholder: Bq("socialBar:enterPlayerName"),
          onSubmit: async qq => {
            const Eq = await cq(qq);
            return Eq.ok && rq((Eq => [qq, ...Eq])), Eq
          }
        }), iq.length > 0 && (0, Tq.jsx)("div", {
          className: "PlayerRows",
          children: iq.map(((qq, Eq) => bq(qq, iq.length - Eq)))
        }), (0, Tq.jsx)(Sq, {
          names: nq.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: Bq("lobbyManage:allOnWhitelist", {
            count: nq.listed.length
          }),
          renderRow: bq
        }), (0, Tq.jsx)(Sq, {
          names: nq.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: Bq("lobbyManage:allCount", {
            count: nq.suggested.length
          }),
          renderRow: bq
        })]
      })
    }

    function qE(qq) {
      let {
        manage: Eq,
        listing: gq
      } = qq;
      const {
        t: Yq
      } = (0, Wq.v)(), Oq = (qq, gq) => ((0, lq.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: qq
      }), Eq.send({
        type: "setListing",
        field: qq,
        value: gq
      }, `listing:${qq}`)), mq = qq => {
        const gq = Eq.statusOf(`listing:${qq}`);
        return gq && !gq.ok && (0, Tq.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, Tq.jsx)(zq, {
            status: gq
          })
        })
      };
      return (0, Tq.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, Tq.jsx)(Vq.c, {
          label: Yq("lobbyManage:inWorldsList")
        }), (0, Tq.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Tq.jsx)("div", {
            className: "SliderText",
            children: Yq("lobbyManage:description")
          }), (0, Tq.jsx)(pq, {
            value: gq.description,
            ariaLabel: Yq("lobbyManage:description"),
            wide: !0,
            onSave: qq => Oq("description", qq)
          })]
        }), mq("description"), (0, Tq.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Tq.jsx)("div", {
            className: "SliderText",
            children: Yq("lobbyManage:emojis")
          }), (0, Tq.jsx)(pq, {
            value: gq.emojis,
            ariaLabel: Yq("lobbyManage:emojis"),
            onSave: qq => Oq("emojis", qq)
          })]
        }), mq("emojis"), (0, Tq.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Tq.jsx)("div", {
            className: "SliderText",
            children: Yq("lobbyManage:colour")
          }), (0, Tq.jsx)(EE, {
            value: gq.colour,
            ariaLabel: Yq("lobbyManage:colour"),
            onSave: qq => {
              Oq("colour", qq)
            }
          })]
        }), mq("colour")]
      })
    }

    function EE(qq) {
      let {
        value: Eq,
        ariaLabel: gq,
        onSave: lq
      } = qq;
      const Oq = (0, Yq.useRef)(null),
        mq = (0, Yq.useRef)({
          value: Eq,
          onSave: lq
        });
      mq.current = {
        value: Eq,
        onSave: lq
      };
      const xq = (0, Yq.useRef)(null),
        Aq = (0, Yq.useRef)(!1),
        cq = qq => {
          Aq.current && qq.value !== mq.current.value && qq.value !== xq.current && (xq.current = qq.value, mq.current.onSave(qq.value))
        };
      return (0, Yq.useEffect)((() => {
        Oq.current && document.activeElement !== Oq.current && (Oq.current.value = Eq)
      }), [Eq]), (0, Yq.useEffect)((() => {
        const qq = Oq.current,
          Eq = () => {
            cq(qq)
          };
        return qq.addEventListener("change", Eq), () => {
          qq.removeEventListener("change", Eq), cq(qq)
        }
      }), []), (0, Tq.jsx)("input", {
        ref: Oq,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: Eq,
        "aria-label": gq,
        onInput: () => {
          Aq.current = !0
        },
        onBlur: qq => {
          cq(qq.currentTarget)
        }
      })
    }

    function gE(qq) {
      let {
        manage: Eq
      } = qq;
      const {
        lobbyName: gq,
        shownLobbyName: Yq
      } = (0, Hq.g)("connectedGame");
      return Eq.state.you.canSetVisibility && null !== gq ? (0, Tq.jsx)(lE, {
        manage: Eq,
        lobbyName: gq,
        worldCode: null !== Yq && void 0 !== Yq ? Yq : gq
      }, gq) : (0, Tq.jsx)(OE, {
        manage: Eq,
        lobbyName: null !== gq && void 0 !== gq ? gq : ""
      })
    }

    function YE(qq) {
      return qq.map((qq => qq.toLowerCase())).sort().join(",")
    }

    function lE(qq) {
      var Eq;
      let {
        manage: gq,
        lobbyName: Oq,
        worldCode: mq
      } = qq;
      const {
        t: xq
      } = (0, Wq.v)(), {
        settings: Aq,
        loading: cq,
        change: uq,
        retry: Bq,
        refresh: Nq
      } = (0, Fq.j)(Oq), dq = (0, Uq.g)(), {
        state: jq
      } = gq, Hq = (0, Yq.useRef)(Aq);
      Hq.current = Aq;
      const Pq = YE(null !== (Eq = jq.whitelist) && void 0 !== Eq ? Eq : []),
        Qq = null !== jq.whitelist;
      (0, Yq.useEffect)((() => {
        const qq = Hq.current;
        null !== qq && (qq.visibility !== jq.visibility || Qq && YE(qq.whitelist) !== Pq) && Nq()
      }), [jq.visibility, Pq, Qq, Nq]);
      const yq = async (qq, Eq) => {
        let gq = null;
        return await uq(qq, Eq, {
          quiet: !0,
          onAnswer: qq => {
            gq = qq
          }
        }), gq
      }, tq = (qq, Eq) => {
        null !== Eq && "error" in Eq && gq.showStatus(qq, {
          ok: !1,
          text: [xq(Eq.error)]
        })
      }, rq = async qq => {
        if (null === Aq || qq === Aq.visibility) return;
        (0, lq.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: qq
        });
        const Eq = "whitelist" === qq ? (0, wq.d)((0, wq.h)(dq.friends, Oq, jq.here.map((qq => qq.name))), (0, Kq.b)(Oq), Aq.whitelist) : [],
          gq = await yq({
            setVisibility: qq
          }, (Eq => ({
            ...Eq,
            visibility: qq
          })));
        tq("mode", gq), null === gq || "error" in gq || await (async qq => {
          for (const Eq of (0, wq.l)(qq, Rq.z))
            if (!await uq({
                whitelistAdd: Eq
              }, (qq => (0, wq.s)(qq, Eq, !0)))) return !1;
          return !0
        })(Eq)
      }, vq = (0, Yq.useMemo)((() => {
        var qq;
        if (null === Aq) return [];
        const Eq = null !== (qq = jq.whitelist) && void 0 !== qq ? qq : [];
        return [...Eq.filter((qq => (0, wq.k)(Aq.whitelist, qq))), ...Aq.whitelist.filter((qq => !(0, wq.k)(Eq, qq)))]
      }), [Aq, jq.whitelist]), hq = gq.statusOf("mode");
      return (0, Tq.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Tq.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Tq.jsx)(Vq.c, {
            label: xq("worldSocial:whoCanJoin")
          }), null === Aq && cq && (0, Tq.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Tq.jsx)(aq.e, {})
          }), null === Aq && !cq && (0, Tq.jsx)(oq.i, {
            className: "SmallTextLight",
            onClick: Bq,
            children: xq("worldSocial:loadFailed")
          }), null !== Aq && (0, Tq.jsx)(sq.d, {
            visibility: Aq.visibility,
            onPick: qq => {
              rq(qq)
            }
          }), hq && (0, Tq.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, Tq.jsx)(zq, {
              status: hq
            })
          }), null !== Aq && "private" !== Aq.visibility && (0, Tq.jsx)(Xq.c, {
            worldCode: mq,
            message: null
          })]
        }), "whitelist" === (null === Aq || void 0 === Aq ? void 0 : Aq.visibility) && (0, Tq.jsx)(Dq, {
          state: jq,
          lobbyName: Oq,
          listed: vq,
          isListed: qq => (0, wq.k)(Aq.whitelist, qq),
          Wy: (qq, Eq) => {
            (0, lq.reportAnalyticsClick)(Eq ? {
              id: "lobby_manage.whitelist_add",
              value: "SB"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), yq(Eq ? {
              whitelistAdd: [qq]
            } : {
              whitelistRemove: qq
            }, (gq => (0, wq.s)(gq, [qq], Eq))).then((Eq => {
              tq(`whitelist:${qq.toLowerCase()}`, Eq)
            }))
          },
          Fy: async qq => {
            (0, lq.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Eq = await yq({
              whitelistAdd: [qq]
            }, (Eq => (0, wq.s)(Eq, [qq], !0)));
            return null === Eq ? {
              ok: !1,
              error: xq("worldSocial:changeFailed")
            } : "error" in Eq ? {
              ok: !1,
              error: xq(Eq.error)
            } : (0, wq.k)(Eq.notFound, qq) ? {
              ok: !1,
              error: xq("lobbyManage:noPlayerCalled", {
                playerName: qq
              })
            } : {
              ok: !0
            }
          },
          statusOf: qq => gq.statusOf(`whitelist:${qq.toLowerCase()}`)
        }), "public" === (null === Aq || void 0 === Aq ? void 0 : Aq.visibility) && null !== jq.listing && (0, Tq.jsx)(qE, {
          manage: gq,
          listing: jq.listing
        })]
      })
    }

    function OE(qq) {
      var Eq;
      let {
        manage: gq,
        lobbyName: Yq
      } = qq;
      const {
        t: Oq
      } = (0, Wq.v)(), {
        state: mq
      } = gq, xq = cq(), Aq = null !== (Eq = mq.whitelist) && void 0 !== Eq ? Eq : [];
      return (0, Tq.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Tq.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Tq.jsx)(Vq.c, {
            label: Oq("worldSocial:whoCanJoin")
          }), (0, Tq.jsx)("div", {
            className: "LobbyManageModeText",
            children: Oq(`worldSocial:${mq.visibility}`)
          })]
        }), "whitelist" === mq.visibility && mq.you.canEditWhitelist && (0, Tq.jsx)(Dq, {
          state: mq,
          lobbyName: Yq,
          listed: Aq,
          isListed: qq => {
            var Eq;
            return null !== (Eq = xq.get(qq.toLowerCase())) && void 0 !== Eq ? Eq : (0, wq.k)(Aq, qq)
          },
          Wy: (qq, Eq) => {
            (0, lq.reportAnalyticsClick)(Eq ? {
              id: "lobby_manage.whitelist_add",
              value: "SB"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const Yq = qq.toLowerCase();
            xq.hold(Yq, Eq, gq.send(Eq ? {
              type: "whitelistAdd",
              names: [qq]
            } : {
              type: "whitelistRemove",
              name: qq
            }, `whitelist:${Yq}`))
          },
          Fy: async qq => {
            (0, lq.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Eq = await gq.send({
              type: "whitelistAdd",
              names: [qq]
            }, "whitelist-field");
            return Eq.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, Tq.jsx)(fq.c, {
                text: Eq.message
              })
            }
          },
          statusOf: qq => gq.statusOf(`whitelist:${qq.toLowerCase()}`)
        }), "public" === mq.visibility && null !== mq.listing && (0, Tq.jsx)(qE, {
          manage: gq,
          listing: mq.listing
        })]
      })
    }
    var mE = gq(4828),
      xE = gq(1341);
    const AE = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const cE = (0, Yq.memo)((function(qq) {
      var Eq;
      let {
        rule: gq,
        value: Yq,
        status: lq,
        pending: Oq,
        hiddenNames: mq,
        eT: xq,
        onAction: Aq
      } = qq;
      const {
        t: cq
      } = (0, Wq.v)(), uq = qq => xq(gq, qq), Bq = (qq, Eq) => {
        Aq(gq, qq, Eq)
      }, Nq = iq(cq, gq.label, mq), aq = gq.info ? iq(cq, gq.info, mq) : void 0, Vq = gq.placeholder ? iq(cq, gq.placeholder, mq) : void 0, dq = (null !== (Eq = gq.options) && void 0 !== Eq ? Eq : []).map((qq => ({
        value: qq.value,
        label: iq(cq, qq.label, mq)
      }))), jq = Math.max(0, ...dq.map((qq => function(qq) {
        let Eq = 0;
        for (const gq of qq) Eq += AE.test(gq) ? 2 : 1;
        return Eq
      }(qq.label)))), Hq = lq && (0, Tq.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, Tq.jsx)(zq, {
          status: lq
        })
      }), Pq = (0, Tq.jsxs)("div", {
        className: "SliderText",
        children: [Nq, void 0 !== aq && (0, Tq.jsx)(xE.c, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: aq
        })]
      });
      return "toggle" === gq.kind ? (0, Tq.jsxs)(Tq.Fragment, {
        children: [(0, Tq.jsx)(mE.d, {
          label: Nq,
          checked: !0 === Yq,
          circleInfoText: aq,
          disabled: Oq,
          onClick: uq
        }), Hq]
      }) : "choice" === gq.kind && dq.length <= 3 ? (0, Tq.jsxs)(Tq.Fragment, {
        children: [(0, Tq.jsx)(mE.f, {
          label: Nq,
          options: dq,
          value: String(Yq),
          circleInfoText: aq,
          onChange: uq
        }), Hq]
      }) : (0, Tq.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [Pq, "choice" === gq.kind && (0, Tq.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": jq
          },
          children: (0, Tq.jsx)(nq.d, {
            options: dq,
            value: String(Yq),
            disabled: Oq,
            onChange: qq => {
              uq(qq.value)
            }
          })
        }), ("number" === gq.kind || "text" === gq.kind) && (0, Tq.jsx)(pq, {
          value: null === Yq ? "" : String(Yq),
          placeholder: Vq,
          ariaLabel: Nq,
          onSave: qq => {
            const Eq = qq.trim(),
              Yq = Number(Eq);
            return uq("number" === gq.kind && "" !== Eq && Number.isFinite(Yq) ? Yq : Eq)
          }
        }), "action" === gq.kind && (0, Tq.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [dq.length > 3 && (0, Tq.jsx)(nq.d, {
            options: dq,
            value: {
              value: "",
              label: null !== Vq && void 0 !== Vq ? Vq : Nq
            },
            disabled: Oq,
            onChange: qq => {
              Bq(qq.value)
            }
          }), dq.length > 0 && dq.length <= 3 && dq.map((qq => (0, Tq.jsx)(oq.i, {
            className: "SmallTextLight",
            disabled: Oq,
            onClick: () => {
              Bq(qq.value)
            },
            children: qq.label
          }, qq.value))), 0 === dq.length && (0, Tq.jsx)(oq.i, {
            className: "SmallTextLight",
            disabled: Oq,
            onClick: () => {
              Bq()
            },
            children: null !== Vq && void 0 !== Vq ? Vq : Nq
          })]
        }), "names" === gq.kind && (0, Tq.jsx)(uE, {
          names: Array.isArray(Yq) ? Yq : [],
          pending: Oq,
          onAction: Bq
        }), Hq]
      })
    }));

    function uE(qq) {
      let {
        names: Eq,
        pending: gq,
        onAction: lq
      } = qq;
      const {
        t: Oq
      } = (0, Wq.v)(), mq = (0, Yq.useRef)(null), [xq, Aq] = (0, Yq.useState)(""), cq = () => {
        const qq = xq.trim();
        "" !== qq && (lq(qq, "add"), mq.current && (mq.current.value = ""), Aq(""))
      };
      return (0, Tq.jsxs)("div", {
        className: "LobbyManageNames",
        children: [Eq.map((qq => (0, Tq.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, Tq.jsx)("span", {
            className: "LobbyManageNameText",
            children: qq
          }), (0, Tq.jsx)(oq.i, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: Oq("lobbyManage:removeName", {
              name: qq
            }),
            disabled: gq,
            onClick: () => {
              lq(qq, "remove")
            },
            children: (0, Tq.jsx)(Nq.d, {
              name: "xmark"
            })
          })]
        }, qq))), (0, Tq.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, Tq.jsx)(Mq.b, {
            domRef: mq,
            placeholderText: Oq("lobbyManage:namePlaceholder"),
            ariaLabel: Oq("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: qq => {
              Aq(qq)
            },
            onEnter: cq
          }), (0, Tq.jsx)(oq.i, {
            className: "SmallTextLight",
            disabled: gq || "" === xq.trim(),
            onClick: cq,
            children: Oq("lobbyManage:addHere")
          })]
        })]
      })
    }
    const BE = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function WE(qq) {
      return BE.flatMap((Eq => {
        let {
          group: gq
        } = Eq;
        return qq.filter((qq => qq.group === gq && void 0 === qq.parent))
      }))
    }

    function NE(qq) {
      let {
        manage: Eq,
        rowsShown: gq
      } = qq;
      const {
        t: Oq
      } = (0, Wq.v)(), mq = (0, Hq.g)("hiddenPlayerNames"), {
        rules: xq
      } = Eq.state, Aq = cq(), uq = new Set(WE(xq).slice(0, gq)), Bq = qq => {
        const Eq = Aq.get(qq.key);
        return void 0 === Eq ? qq.value : Eq
      }, {
        hold: Nq
      } = Aq, aq = (0, Yq.useCallback)(((qq, gq) => {
        (0, lq.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: qq.key
        });
        const Yq = Eq.send({
          type: "setRule",
          key: qq.key,
          value: gq
        }, `rule:${qq.key}`);
        return Nq(qq.key, gq, Yq), Yq
      }), [Eq, Nq]), dq = (0, Yq.useCallback)(((qq, gq, Yq) => {
        (0, lq.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: qq.key
        }), Eq.send({
          type: "ruleAction",
          key: qq.key,
          ...void 0 === gq ? {} : {
            arg: gq
          },
          ...void 0 === Yq ? {} : {
            op: Yq
          }
        }, `rule:${qq.key}`, void 0 === Yq ? Oq("lobbyManage:setJustNow") : void 0)
      }), [Eq, Oq]), jq = qq => {
        const gq = `rule:${qq.key}`;
        return (0, Tq.jsx)(cE, {
          rule: qq,
          value: Bq(qq),
          status: Eq.statusOf(gq),
          pending: Eq.isPending(gq),
          hiddenNames: mq,
          eT: aq,
          onAction: dq
        }, qq.key)
      };
      return (0, Tq.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: BE.map((qq => {
          let {
            group: Eq,
            title: gq
          } = qq;
          const lq = xq.filter((qq => qq.group === Eq && uq.has(qq)));
          return 0 === lq.length ? null : (0, Tq.jsxs)(Yq.Fragment, {
            children: [(0, Tq.jsx)(Vq.c, {
              label: Oq(gq)
            }), lq.map((qq => {
              const Eq = xq.filter((Eq => Eq.parent === qq.key));
              return 0 === Eq.length || !0 !== Bq(qq) ? jq(qq) : (0, Tq.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [jq(qq), Eq.map(jq)]
              }, qq.key)
            }))]
          }, Eq)
        }))
      })
    }
    const aE = {
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
      VE = 5,
      dE = (0, Yq.memo)((function(qq) {
        let {
          page: Eq,
          manage: gq,
          leaderboard: lq,
          focusRequest: Oq,
          onFocused: mq,
          ruleRowsShown: xq
        } = qq;
        return "leaderboard" === Eq ? (0, Tq.jsx)(Yq.Suspense, {
          fallback: (0, Tq.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Tq.jsx)(aq.e, {})
          }),
          children: lq
        }) : "joining" === Eq ? (0, Tq.jsx)(gE, {
          manage: gq
        }) : "rules" === Eq ? (0, Tq.jsx)(NE, {
          manage: gq,
          rowsShown: xq
        }) : (0, Tq.jsx)(kq, {
          manage: gq,
          focusRequest: Oq,
          onFocused: mq
        })
      }));

    function jE(qq) {
      let {
        page: Eq
      } = qq;
      const {
        t: gq
      } = (0, Wq.v)(), Yq = aE[Eq];
      return (0, Tq.jsxs)(Tq.Fragment, {
        children: [(0, Tq.jsx)(Nq.d, {
          name: Yq.icon
        }), " ", (0, Tq.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: gq(Yq.title)
        })]
      })
    }

    function HE(qq) {
      var Eq;
      const {
        t: gq
      } = (0, Wq.v)(), {
        pages: Oq,
        landing: mq
      } = qq, Aq = (0, Yq.useRef)(null), cq = (0, Yq.useRef)(null), uq = (0, Yq.useRef)(null), Nq = (0, Yq.useRef)(new Map), [aq, Hq] = (0, Yq.useState)(null), oq = (0, Yq.useRef)(aq), Pq = (0, Yq.useRef)(0), [Qq, yq] = (0, Yq.useState)(Oq[0]), tq = null !== aq && void 0 !== aq ? aq : Oq.includes(Qq) ? Qq : Oq[0], [rq] = (0, Yq.useState)(null !== (Eq = null === mq || void 0 === mq ? void 0 : mq.page) && void 0 !== Eq ? Eq : null), vq = null !== rq && Oq.includes(rq) ? [rq, ...Oq.filter((qq => qq !== rq))] : Oq, hq = Math.max(1, Math.ceil(WE(qq.manage.state.rules).length / VE)), nq = vq.flatMap((qq => "rules" === qq ? Array(hq).fill(qq) : [qq])), bq = function(qq, Eq) {
        const [gq, lq] = (0, Yq.useState)(qq), Oq = gq >= Eq;
        return Oq && gq !== 1 / 0 && lq(1 / 0), (0, Yq.useLayoutEffect)((() => {
          if (Oq) return;
          let qq = !0;
          return (0, jq.b)().then((() => {
            qq && lq((qq => qq + 1))
          })), () => {
            qq = !1
          }
        }), [gq, Oq]), Oq ? 1 / 0 : gq
      }(1, nq.length), iq = nq.slice(0, bq), Zq = new Set(iq), fq = bq < nq.length, Mq = fq ? iq.filter((qq => "rules" === qq)).length * VE : 1 / 0, zq = (0, Yq.useRef)(qq.focusRequest);
      zq.current = qq.focusRequest;
      const Sq = qq => {
          oq.current = qq, Hq(qq)
        },
        pq = () => {
          var qq, Eq;
          Aq.current.style.scrollPaddingTop = `${null!==(qq=null===(Eq=uq.current)||void 0===Eq?void 0:Eq.offsetHeight)&&void 0!==qq?qq:0}px`
        },
        Gq = qq => {
          const Eq = Aq.current,
            gq = Nq.current.get(qq);
          if (void 0 === gq) return;
          const Yq = document.activeElement,
            lq = zq.current,
            Oq = null === lq ? null : gq.querySelector(`[data-lobby-manage-row="${CSS.escape(lq.name)}"]`);
          pq(), Yq instanceof HTMLElement && null !== Oq && void 0 !== Oq && Oq.contains(Yq) ? Yq.scrollIntoView({
            block: "center"
          }) : null === gq.previousElementSibling ? Eq.scrollTop = 0 : gq.scrollIntoView({
            block: "start"
          }), Pq.current = Eq.scrollTop
        },
        Lq = qq => {
          (0, lq.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: qq
          }), Sq(qq), Gq(qq)
        },
        Jq = () => {
          var qq, Eq;
          const gq = Aq.current,
            Yq = gq.getBoundingClientRect().top + (null !== (qq = null === (Eq = uq.current) || void 0 === Eq ? void 0 : Eq.offsetHeight) && void 0 !== qq ? qq : 0),
            lq = Oq.map((qq => {
              var Eq, gq;
              return (null !== (Eq = null === (gq = Nq.current.get(qq)) || void 0 === gq ? void 0 : gq.getBoundingClientRect().top) && void 0 !== Eq ? Eq : 1 / 0) - Yq
            })),
            mq = !fq && gq.scrollTop + gq.clientHeight >= gq.scrollHeight - 1;
          yq(Oq[(0, xq.g)(lq, mq)])
        },
        kq = () => {
          null !== oq.current && (Sq(null), Jq())
        };
      (0, Yq.useLayoutEffect)((() => {
        null !== mq && Oq.includes(mq.page) && Lq(mq.page)
      }), [null === mq || void 0 === mq ? void 0 : mq.seq]), (0, Yq.useLayoutEffect)((() => {
        null === oq.current || Oq.includes(oq.current) || kq()
      }));
      const {
        onFocused: Rq
      } = qq, Uq = (0, Yq.useCallback)((qq => {
        null !== oq.current && Gq(oq.current), Rq(qq)
      }), [Rq]);
      (0, Yq.useLayoutEffect)((() => {
        const qq = oq.current;
        null !== qq && (!fq || Oq.indexOf(nq[bq - 1]) < Oq.indexOf(qq)) && Gq(qq)
      }), [bq]), (0, Yq.useEffect)((() => {
        const qq = new ResizeObserver((() => {
          null !== oq.current ? Gq(oq.current) : pq()
        }));
        return qq.observe(Aq.current), qq.observe(cq.current), () => {
          qq.disconnect()
        }
      }), []), (0, Yq.useLayoutEffect)((() => {
        const qq = uq.current,
          Eq = null === qq || void 0 === qq ? void 0 : qq.querySelector(".SegmentedToggleOptionSelected");
        Eq && (qq.scrollLeft = Math.min(Eq.offsetLeft, Math.max(qq.scrollLeft, Eq.offsetLeft + Eq.offsetWidth - qq.clientWidth)))
      }), [tq]);
      return (0, Tq.jsxs)("div", {
        ref: Aq,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === oq.current ? Jq() : Math.abs(Aq.current.scrollTop - Pq.current) > 1 && kq()
        },
        onClick: qq => {
          var Eq;
          null !== (Eq = uq.current) && void 0 !== Eq && Eq.contains(qq.target) || kq()
        },
        onFocus: qq => {
          var Eq;
          const gq = null === oq.current ? null : Nq.current.get(oq.current);
          !gq || gq.contains(qq.target) || null !== (Eq = uq.current) && void 0 !== Eq && Eq.contains(qq.target) || kq()
        },
        children: [Oq.length > 1 && (0, Tq.jsx)("div", {
          ref: uq,
          className: "LobbyManageChips",
          children: (0, Tq.jsx)(dq.c, {
            options: Oq.map((qq => ({
              value: qq,
              label: (0, Tq.jsx)(jE, {
                page: qq
              }),
              ariaLabel: gq(aE[qq].title)
            }))),
            value: tq,
            padTabs: "2",
            ariaLabel: gq("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: Lq
          })
        }), (0, Tq.jsx)("div", {
          ref: cq,
          className: Bq()("LobbyManageInner", {
            Staging: fq
          }),
          children: Oq.filter((qq => Zq.has(qq))).map((Eq => {
            const gq = Eq === aq;
            return (0, Tq.jsxs)("section", {
              ref: qq => {
                qq ? Nq.current.set(Eq, qq) : Nq.current.delete(Eq)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": gq || void 0,
              children: [Oq.length > 1 && (0, Tq.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": gq || void 0,
                "data-pad-unavailable": gq || void 0,
                children: (0, Tq.jsx)(Vq.c, {
                  label: (0, Tq.jsx)(jE, {
                    page: Eq
                  })
                })
              }), (0, Tq.jsx)(dE, {
                page: Eq,
                manage: qq.manage,
                leaderboard: qq.leaderboard,
                focusRequest: qq.focusRequest,
                onFocused: Uq,
                ruleRowsShown: "rules" === Eq ? Mq : 1 / 0
              })]
            }, Eq)
          }))
        })]
      })
    }

    function oE(qq) {
      return void 0 === (null === qq || void 0 === qq ? void 0 : qq.page) ? null : {
        page: qq.page,
        seq: qq.seq
      }
    }

    function PE(qq) {
      let {
        leaderboard: Eq
      } = qq;
      const gq = function() {
          const qq = (0, Oq.h)("lobbyManage"),
            [Eq, gq] = (0, Yq.useReducer)((qq => qq + 1), 0),
            [lq] = (0, Yq.useState)((() => new Aq.e(gq)));
          return (0, Yq.useEffect)((() => {
            const qq = lq.nextDeadline();
            if (null === qq) return;
            const Eq = setTimeout((() => {
              lq.expire(Date.now()), gq()
            }), Math.max(0, qq - Date.now()));
            return () => {
              clearTimeout(Eq)
            }
          })), (0, Yq.useMemo)((() => null === qq ? null : {
            state: qq,
            send: (qq, Eq, Yq) => {
              const Oq = lq.send(qq, Eq, null !== Yq && void 0 !== Yq ? Yq : null);
              return gq(), Oq
            },
            statusOf: qq => lq.statusOf(qq, Date.now()),
            showStatus: (qq, Eq) => {
              lq.show(qq, Eq)
            },
            isPending: qq => lq.isPending(qq)
          }), [qq, Eq, lq])
        }(),
        cq = (0, xq.k)((0, Oq.h)("lobbyLeaderboardInfo")),
        uq = (0, mq.i)(),
        [Bq, Wq] = (0, Yq.useState)((() => oE(uq))),
        [Nq, aq] = (0, Yq.useState)(null);
      return (0, Yq.useEffect)((() => {
        null === uq && (0, lq.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, Yq.useEffect)((() => {
        null !== uq && (Wq((qq => (null === qq || void 0 === qq ? void 0 : qq.seq) === uq.seq ? qq : oE(uq))), void 0 !== uq.focusName && "players" === uq.page ? aq({
          name: uq.focusName,
          seq: uq.seq
        }) : (0, mq.g)(uq.seq))
      }), [null === uq || void 0 === uq ? void 0 : uq.seq]), null === gq ? null : (0, Tq.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, Tq.jsx)(HE, {
          pages: (0, xq.d)(gq.state, cq),
          manage: gq,
          leaderboard: Eq,
          focusRequest: Nq,
          onFocused: mq.g,
          landing: Bq
        })
      })
    }
  },
  36612: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => uq,
      g: () => Aq
    });
    var Yq = gq(1448),
      lq = gq(1926),
      Oq = gq(1904);
    const mq = 1e4;
    let xq = 0;

    function Aq(qq) {
      const Eq = ++xq;
      return new Promise((gq => {
        const xq = Eq => {
            Aq(), clearTimeout(cq), !1 === (null === Eq || void 0 === Eq ? void 0 : Eq.ok) && (0, Yq.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: qq.type
            }), gq(Eq)
          },
          Aq = lq.c.subscribe("lobbyManage", (qq => {
            const gq = function(qq, Eq) {
              var gq;
              return null !== (gq = null === qq || void 0 === qq ? void 0 : qq.results.find((qq => qq.requestId === Eq))) && void 0 !== gq ? gq : null
            }(qq, Eq);
            null !== gq && xq(gq)
          })),
          cq = setTimeout((() => {
            xq(null)
          }), mq);
        Oq.gameBridge.send("lobbyManage", {
          ...qq,
          requestId: Eq
        })
      }))
    }
    const cq = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class uq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Aq;
        this.onChange = qq, this.sendAction = Eq, this.pending = new Map, this.statuses = new Map
      }
      send(qq, Eq, gq) {
        var Yq;
        return this.statuses.delete(Eq), this.pending.set(Eq, (null !== (Yq = this.pending.get(Eq)) && void 0 !== Yq ? Yq : 0) + 1), this.sendAction(qq).then((qq => {
          var Yq;
          const lq = null !== qq && void 0 !== qq ? qq : {
              requestId: -1,
              ok: !1,
              message: cq
            },
            Oq = (null !== (Yq = this.pending.get(Eq)) && void 0 !== Yq ? Yq : 1) - 1;
          Oq > 0 ? this.pending.set(Eq, Oq) : this.pending.delete(Eq);
          const mq = !lq.ok || lq.message.length > 0 ? lq.message : null === gq ? null : [gq];
          return null !== mq && this.statuses.set(Eq, {
            ok: lq.ok,
            text: mq,
            until: Date.now() + 4e3
          }), this.onChange(), lq
        }))
      }
      show(qq, Eq) {
        this.statuses.set(qq, {
          ...Eq,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(qq) {
        for (const [Eq, gq] of this.statuses) gq.until <= qq && this.statuses.delete(Eq)
      }
      nextDeadline() {
        let qq = null;
        for (const gq of this.statuses.values()) {
          var Eq;
          qq = Math.min(null !== (Eq = qq) && void 0 !== Eq ? Eq : 1 / 0, gq.until)
        }
        return qq
      }
      statusOf(qq, Eq) {
        const gq = this.statuses.get(qq);
        return !gq || gq.until <= Eq ? null : {
          ok: gq.ok,
          text: gq.text
        }
      }
      isPending(qq) {
        return this.pending.has(qq)
      }
    }
  },
  36599: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => cq,
      f: () => Aq
    });
    var Yq = gq(576),
      lq = gq(1904),
      Oq = gq(1628),
      mq = gq(96),
      xq = gq(1252);

    function Aq(qq, Eq, gq) {
      return mq.featureFlags.useSocialFeatures && qq && null === (0, xq.d)(Eq, gq)
    }

    function cq(qq, Eq) {
      var gq, mq;
      const xq = Oq.c.getSocialState().friends.find((qq => qq.name.toLowerCase() === Eq.toLowerCase())),
        Aq = lq.gameBridge.latest("players").byId[qq],
        cq = void 0 !== Aq && Aq.name === Eq,
        uq = cq && null !== (gq = Aq.cosmetics) && void 0 !== gq ? gq : void 0,
        Bq = xq && uq ? {
          ...xq,
          cosmetics: uq
        } : xq;
      return {
        playerSocialPreview: null !== Bq && void 0 !== Bq ? Bq : {
          isError: !1,
          name: Eq,
          ranks: cq ? [...Aq.ranks] : [],
          cosmetics: null !== uq && void 0 !== uq ? uq : {},
          nameColour: null !== (mq = null === uq || void 0 === uq ? void 0 : uq.nameColour) && void 0 !== mq ? mq : Yq.e,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== xq
      }
    }
  },
  36768: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Bq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(1659),
      xq = gq(1422),
      Aq = gq(1326),
      cq = gq(1025),
      uq = gq(1070);

    function Bq(qq) {
      let {
        label: Eq,
        icon: gq,
        placeholder: lq,
        onSubmit: Bq
      } = qq;
      const Wq = (0, Yq.useRef)(null),
        [Nq, aq] = (0, Yq.useState)(""),
        [Vq, dq] = (0, Yq.useState)("Enter"),
        [jq, Hq] = (0, Yq.useState)(null);
      (0, Yq.useEffect)((() => {
        if ("Success" !== Vq && "Error" !== Vq) return;
        const qq = setTimeout((() => {
          "Success" === Vq && Wq.current && (Wq.current.value = "", aq("")), dq("Enter")
        }), "Success" === Vq ? 1e3 : 4e3);
        return () => {
          clearTimeout(qq)
        }
      }), [Vq]);
      const oq = () => {
        const qq = Nq.trim();
        "" !== qq && "Enter" === Vq && (dq("Loading"), Bq(qq).then((qq => {
          Wq.current && ("error" in qq ? null === qq.error ? dq("Enter") : (Hq(qq.error), dq("Error")) : dq("Success"))
        })))
      };
      return (0, uq.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: qq => {
          qq.target === Wq.current && "Escape" !== qq.key && qq.stopPropagation()
        },
        children: [(0, uq.jsxs)("div", {
          className: Oq()("AddFriendBodyOverlay", `AddFriendBodyOverlay${Vq}`),
          children: ["Loading" === Vq && (0, uq.jsx)(Aq.e, {}), "Success" === Vq && (0, uq.jsx)(cq.d, {
            name: "check"
          }), "Error" === Vq && jq]
        }), (0, uq.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, uq.jsx)(mq.b, {
            className: "PlayerSearchInput",
            domRef: Wq,
            maxLength: 32,
            placeholderText: lq,
            ariaLabel: lq,
            stopPropagation: !1,
            onValueChange: qq => {
              aq(qq)
            },
            onEnter: oq
          }), (0, uq.jsxs)(xq.g, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== Vq || "" === Nq.trim(),
            onClick: oq,
            children: [(0, uq.jsx)(cq.d, {
              name: gq
            }), " ", Eq]
          })]
        })]
      })
    }
  },
  36757: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Bq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(1183),
      xq = gq(1025),
      Aq = gq(1070);
    const cq = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      uq = ["unlisted", "public", "whitelist", "private"];

    function Bq(qq) {
      let {
        visibility: Eq,
        onPick: gq
      } = qq;
      const {
        t: lq
      } = (0, mq.v)(), Bq = (0, Yq.useRef)([]);
      return (0, Aq.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": lq("worldSocial:whoCanJoin"),
        children: uq.map(((qq, Yq) => {
          const mq = qq === Eq;
          return (0, Aq.jsxs)("button", {
            ref: qq => {
              Bq.current[Yq] = qq
            },
            type: "button",
            className: Oq()("WorldSocialTile", {
              WorldSocialTileSelected: mq
            }),
            "aria-pressed": mq,
            tabIndex: mq ? 0 : -1,
            onKeyDown: qq => {
              ((qq, Eq) => {
                const gq = "ArrowRight" === qq.key || "ArrowDown" === qq.key ? 1 : "ArrowLeft" === qq.key || "ArrowUp" === qq.key ? -1 : 0;
                var Yq;
                0 !== gq && (qq.preventDefault(), null === (Yq = Bq.current[(Eq + gq + uq.length) % uq.length]) || void 0 === Yq || Yq.focus())
              })(qq, Yq)
            },
            onClick: () => {
              gq(qq)
            },
            children: [(0, Aq.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, Aq.jsx)(xq.d, {
                name: cq[qq]
              })
            }), (0, Aq.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, Aq.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: lq(`worldSocial:${qq}`)
              }), (0, Aq.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: lq(`worldSocial:${qq}Description`)
              })]
            })]
          }, qq)
        }))
      })
    }
  },
  36764: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq
    });
    var Yq = gq(1183),
      lq = gq(2563),
      Oq = gq(4195),
      mq = gq(1070);

    function xq(qq) {
      let {
        SB: Eq,
        children: gq,
        ...xq
      } = qq;
      const {
        t: Aq
      } = (0, Yq.v)();
      return (0, mq.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          Eq.onChange(!Eq.on)
        },
        children: (0, mq.jsx)(lq.i, {
          ...xq,
          opensProfileCard: !1,
          children: (0, mq.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: qq => {
              qq.stopPropagation()
            },
            children: [gq, (0, mq.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, mq.jsx)(Oq.b, {
                checked: Eq.on,
                disabled: !1,
                ariaLabel: Aq("worldSocial:letJoin", {
                  playerName: xq.playerSocialPreview.name
                }),
                onChange: qq => {
                  Eq.onChange(qq.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36755: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => aq
    });
    var Yq = gq(57),
      lq = gq(1183),
      Oq = gq(1824),
      mq = gq(96),
      xq = gq(24),
      Aq = gq(1448),
      cq = gq(2595),
      uq = gq(9176),
      Bq = gq(1422),
      Wq = gq(1025),
      Nq = gq(1070);

    function aq(qq) {
      let {
        worldCode: Eq,
        message: gq
      } = qq;
      const {
        t: aq
      } = (0, lq.v)(), {
        isTouchScreen: Vq
      } = (0, xq.j)(["isTouchScreen"]), dq = mq.featureFlags.canUseInviteLinks, jq = (0, uq.g)(dq && null === gq), [Hq, oq] = (0, cq.i)(), Pq = (0, Yq.useRef)(null);
      if (null !== gq) return (0, Nq.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Nq.jsx)(Wq.d, {
          name: "lock"
        }), (0, Nq.jsx)("span", {
          children: gq
        })]
      });
      const Qq = dq ? jq : Eq,
        yq = Vq && dq && (0, cq.b)();
      return (0, Nq.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!dq && (0, Nq.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: aq("worldSocial:worldCode")
        }), (0, Nq.jsx)("input", {
          ref: Pq,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Qq && void 0 !== Qq ? Qq : "",
          "aria-label": aq(dq ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: qq => {
            qq.currentTarget.select()
          }
        }), (0, Nq.jsxs)(Bq.g, {
          className: "WorldSocialCopy",
          disabled: null === Qq,
          onClick: () => {
            null !== Qq && (0, cq.f)(Qq, {
              useShareSheet: yq,
              onOutcome: qq => {
                if ((0, Aq.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== qq || dq ? qq : "code"
                  }), "copied" === qq) oq();
                else if ("failed" === qq) {
                  var Eq;
                  null === (Eq = Pq.current) || void 0 === Eq || Eq.focus(), Oq.g.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Nq.jsx)(Wq.d, {
            name: Hq ? "check" : yq ? "up-from-bracket" : "copy"
          }), " ", aq(Hq ? "general:copied" : yq ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36759: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Nq,
      h: () => Wq,
      l: () => Bq
    });
    var Yq = gq(576),
      lq = gq(1183),
      Oq = gq(1628),
      mq = gq(2563),
      xq = gq(2517),
      Aq = gq(1422),
      cq = gq(36764),
      uq = gq(1070);

    function Bq(qq, Eq) {
      var gq;
      return {
        isError: !1,
        name: qq,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== Eq && void 0 !== Eq ? Eq : {},
        nameColour: null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.nameColour) && void 0 !== gq ? gq : Yq.e,
        location: {
          status: "offline"
        }
      }
    }

    function Wq(qq) {
      let {
        player: Eq,
        isFriend: gq = !1,
        status: Yq,
        showLocation: Aq = void 0 === Yq,
        SB: Bq,
        onSendFriendRequest: Wq,
        actions: Nq,
        zIndex: aq
      } = qq;
      const {
        t: Vq
      } = (0, lq.v)();
      let dq = Yq;
      null !== Bq && void 0 !== Bq && Bq.on && (dq = (0, uq.jsxs)(uq.Fragment, {
        children: [null !== Yq && void 0 !== Yq ? Yq : (0, uq.jsx)(xq.e, {
          socialPreview: Eq
        }), (0, uq.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", Vq("worldSocial:canJoin")]
        })]
      }));
      const jq = {
        playerSocialPreview: Eq,
        isFriend: gq,
        hideFriendBadge: !0,
        onFriendRemoved: gq ? qq => {
          Oq.c.removeFriendFromState(qq)
        } : void 0,
        status: dq,
        showLocation: Aq,
        onSendFriendRequest: Wq,
        zIndex: aq
      };
      return Bq ? (0, uq.jsx)(cq.d, {
        ...jq,
        SB: Bq,
        children: Nq
      }) : (0, uq.jsx)(mq.i, {
        ...jq,
        opensProfileCard: !1,
        children: Nq || void 0
      })
    }

    function Nq(qq) {
      let {
        row: Eq,
        SB: gq,
        canInvite: Yq,
        invited: Oq,
        onInvite: mq,
        zIndex: xq
      } = qq;
      const {
        t: cq
      } = (0, lq.v)(), Bq = "online" === Eq.place ? Aq.g : Aq.i;
      return (0, uq.jsx)(Wq, {
        player: Eq.friend,
        isFriend: !0,
        status: "here" === Eq.place ? cq("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        SB: gq,
        zIndex: xq,
        actions: Yq && (0, uq.jsx)(Bq, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Oq,
          onClick: mq,
          ariaLabel: `${cq("worldSocial:invite")} ${Eq.friend.name}`,
          children: cq(Oq ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36748: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Aq,
      h: () => mq,
      j: () => cq
    });
    var Yq = gq(57),
      lq = gq(4413),
      Oq = gq(1824);

    function mq(qq) {
      const Eq = {
        lobbyName: qq,
        answer: null,
        response: lq.d.getSocialSettings(qq)
      };
      return Eq.response.then((qq => {
        Eq.answer = qq
      })), Eq
    }
    const xq = new Map;

    function Aq(qq) {
      xq.set(qq.lobbyName, qq)
    }

    function cq(qq) {
      const [Eq] = (0, Yq.useState)((() => function(qq) {
        var Eq;
        const gq = null !== (Eq = xq.get(qq)) && void 0 !== Eq ? Eq : null;
        return null !== gq && void 0 !== gq && gq.answer && "error" in gq.answer ? null : gq
      }(qq))), [gq, mq] = (0, Yq.useState)((() => null !== Eq && void 0 !== Eq && Eq.answer && "settings" in Eq.answer ? Eq.answer.settings : null)), [Aq, cq] = (0, Yq.useState)(!0), [uq, Bq] = (0, Yq.useState)(null !== gq), Wq = (0, Yq.useRef)(gq);
      Wq.current = gq;
      const Nq = (0, Yq.useRef)(0),
        aq = (0, Yq.useRef)(0),
        Vq = (0, Yq.useRef)(!1),
        dq = (0, Yq.useRef)(!0),
        jq = (0, Yq.useCallback)((async Eq => {
          const gq = ++Nq.current,
            Yq = await (null !== Eq && void 0 !== Eq ? Eq : lq.d.getSocialSettings(qq));
          dq.current && gq === Nq.current && (Bq(!0), cq(!1), "error" in Yq || mq(Yq.settings))
        }), [qq]),
        Hq = (0, Yq.useCallback)((() => {
          cq(!0), jq()
        }), [jq]),
        oq = (0, Yq.useCallback)((() => {
          aq.current > 0 ? Vq.current = !0 : jq()
        }), [jq]);
      (0, Yq.useEffect)((() => (dq.current = !0, xq.delete(qq), cq(!0), jq(null === Eq || void 0 === Eq ? void 0 : Eq.response), () => {
        dq.current = !1
      })), [jq, qq, Eq]);
      const Pq = qq => {
        Nq.current++, cq(!1), Wq.current = qq, mq(qq)
      };
      return {
        settings: gq,
        loading: Aq,
        answered: uq,
        retry: Hq,
        refresh: oq,
        change: async function(Eq, gq) {
          let {
            quiet: Yq = !1,
            onAnswer: mq
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const xq = Wq.current;
          if (null === xq) return !1;
          Pq(gq(xq)), aq.current > 0 && (Vq.current = !0), aq.current++;
          const Aq = await lq.d.setSocialSettings(qq, Eq);
          aq.current--;
          const cq = !("error" in Aq);
          if (!dq.current) return cq;
          if (null === mq || void 0 === mq || mq(Aq), Yq);
          else if ("error" in Aq) Oq.g.showMessage({
            translationKey: Aq.error
          });
          else
            for (const qq of Aq.notFound) Oq.g.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: qq
              }
            });
          if (aq.current > 0) return cq;
          const uq = Vq.current;
          return Vq.current = !1, !uq && "settings" in Aq ? Pq(Aq.settings) : (uq || Pq(xq), jq()), cq
        }
      }
    }
  },
  36775: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq,
      e: () => Oq
    });
    var Yq = gq(163);
    const lq = new Map;

    function Oq(qq, Eq) {
      var gq;
      const Yq = null !== (gq = lq.get(qq)) && void 0 !== gq ? gq : new Map;
      Yq.set(Eq, Date.now()), lq.set(qq, Yq)
    }

    function mq(qq) {
      const Eq = lq.get(qq);
      if (!Eq) return [];
      const gq = Date.now();
      for (const [lq, Oq] of Eq) gq - Oq >= Yq.j && Eq.delete(lq);
      return [...Eq.keys()]
    }
  },
  36753: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      const gq = Eq.toLowerCase();
      for (const Yq of qq)
        if (Yq.toLowerCase() === gq) return !0;
      return !1
    }

    function lq(qq, Eq, gq) {
      const lq = [],
        Oq = [],
        mq = [];
      for (const xq of qq) !xq.isError && xq.name && ("inGame" === xq.location.status && xq.location.inLobbyName === Eq || Yq(gq, xq.name) ? Oq.push({
        friend: xq,
        place: "here"
      }) : "offline" === xq.location.status ? mq.push({
        friend: xq,
        place: "offline"
      }) : lq.push({
        friend: xq,
        place: "online"
      }));
      return [...lq, ...Oq, ...mq]
    }

    function Oq(qq, Eq, gq) {
      const lq = [],
        Oq = qq.flatMap((qq => "here" === qq.place ? [qq.friend.name] : []));
      for (const mq of [...Oq, ...Eq]) Yq(lq, mq) || Yq(gq, mq) || lq.push(mq);
      return lq
    }

    function mq(qq, Eq) {
      return null === qq || void 0 === qq || !qq.canManage || Yq(qq.whitelist, Eq) ? "none" : "whitelist" === qq.visibility ? "required" : "quiet"
    }

    function xq(qq) {
      if (null === qq) return !0;
      const {
        visibility: Eq
      } = qq;
      return "public" === Eq || "unlisted" === Eq || "whitelist" === Eq && qq.canManage
    }

    function Aq(qq, Eq, gq) {
      if (gq) {
        const gq = Eq.filter((Eq => !Yq(qq.whitelist, Eq)));
        return {
          ...qq,
          whitelist: [...qq.whitelist, ...gq]
        }
      }
      return {
        ...qq,
        whitelist: qq.whitelist.filter((qq => !Yq(Eq, qq)))
      }
    }

    function cq(qq, Eq) {
      const gq = [];
      for (let Yq = 0; Yq < qq.length; Yq += Eq) gq.push(qq.slice(Yq, Yq + Eq));
      return gq
    }
    gq.d(Eq, {
      c: () => xq,
      d: () => Oq,
      h: () => lq,
      k: () => Yq,
      l: () => cq,
      o: () => mq,
      s: () => Aq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);