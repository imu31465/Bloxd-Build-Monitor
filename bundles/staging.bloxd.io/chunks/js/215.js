export const id = 215;
export const ids = [215];
export const modules = {
  40517: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      LobbyManageView: () => Wu
    });
    var Bb = hb(49),
      Ob = hb(1380),
      Gb = hb(2288),
      Ub = hb(2309),
      Lb = hb(2317),
      Yb = hb(36178);

    function Sb() {
      const [bb, ub] = (0, Bb.useState)(new Map);
      return {
        get: ub => bb.get(ub),
        hold: (0, Bb.useCallback)(((bb, hb, Bb) => {
          ub((ub => new Map(ub).set(bb, hb))), Bb.then((() => {
            ub((ub => {
              const hb = new Map(ub);
              return hb.delete(bb), hb
            }))
          }))
        }), [])
      }
    }
    var ab = hb(958),
      Hb = hb.n(ab),
      wb = hb(1095),
      Zb = hb(966),
      Xb = hb(1242),
      pb = hb(2472),
      ob = hb(4791),
      Ab = hb(3364);
    var lb = hb(1857),
      Kb = hb(1357);

    function Wb(bb, ub, hb) {
      const Bb = bb.filter((bb => bb.name !== ub)),
        Ob = Bb.filter((bb => "none" === bb.role)).sort(((bb, ub) => ub.at - bb.at)),
        Gb = Bb.filter((bb => "none" !== bb.role)).sort(((bb, ub) => hb.indexOf(bb.role) - hb.indexOf(ub.role) || ub.at - bb.at));
      return [...bb.some((bb => bb.name === ub)) && null !== ub ? [ub] : [], ...[...Ob, ...Gb].map((bb => bb.name))]
    }

    function Cb(bb, ub) {
      const hb = bb.banned.map((bb => bb.name)),
        Bb = new Set(hb);
      return {
        here: Wb(bb.here, ub, bb.roles.map((bb => bb.role))),
        away: bb.away.filter((bb => !Bb.has(bb.name))).map((bb => bb.name)),
        banned: hb
      }
    }

    function db(bb, ub) {
      const hb = bb.here.find((bb => bb.name === ub));
      if (hb) return {
        section: "here",
        player: hb
      };
      const Bb = bb.banned.find((bb => bb.name === ub));
      if (Bb) return {
        section: "banned",
        bannedAt: Bb.at
      };
      const Ob = bb.away.find((bb => bb.name === ub));
      return Ob ? {
        section: "away",
        player: Ob
      } : {
        section: "gone"
      }
    }
    const rb = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };
    var jb = hb(2468),
      nb = hb(36166),
      Db = hb(36351),
      xb = hb(2925),
      zb = hb(314);

    function gb(bb, ub, hb) {
      return ub.map((ub => {
        if ("string" === typeof ub) return ub;
        const Bb = "str" in ub ? ub.str : ub;
        return "string" === typeof Bb ? Bb : "entityName" in Bb ? Bb.entityName : "translationKey" in Bb ? bb(Bb.translationKey, (0, wb.s)(Bb.params, hb)) : ""
      })).join("")
    }

    function ib(bb, ub, hb, Bb, Ob) {
      return Ob - Bb < 6e4 ? bb(`${hb}JustNow`) : bb(hb, {
        time: (0, zb.fb)((0, wb.o)(ub, hb), Bb, Ob)
      })
    }
    var vb = hb(1789),
      tb = hb(1585),
      Jb = hb(1007);

    function eb(bb) {
      let {
        status: ub
      } = bb;
      return (0, Jb.jsx)("span", {
        className: Hb()("LobbyManageStatus", {
          LobbyManageStatusRefused: !ub.ok
        }),
        children: (0, Jb.jsx)(vb.c, {
          text: ub.text
        })
      })
    }

    function Nb(bb) {
      let {
        names: ub,
        cap: hb,
        filterFrom: Ob,
        moreLabel: Gb,
        reveal: Ub = null,
        renderRow: Lb
      } = bb;
      const {
        t: Yb
      } = (0, wb.K)(), [Sb, ab] = (0, Bb.useState)(!1), [Hb, Xb] = (0, Bb.useState)(""), ob = Sb || null !== Ub && ub.indexOf(Ub) >= hb, Ab = (ob || ub.length <= hb) && null !== Ob && ub.length > Ob, lb = Hb.trim().toLowerCase();
      let Kb = ob ? ub : ub.slice(0, hb);
      return Ab && "" !== lb && (Kb = Kb.filter((bb => bb.toLowerCase().includes(lb)))), (0, Jb.jsxs)(Jb.Fragment, {
        children: [Ab && (0, Jb.jsx)(tb.b, {
          className: "LobbyManageFilter",
          placeholderText: Yb("lobbyManage:findName"),
          ariaLabel: Yb("lobbyManage:findName"),
          onValueChange: bb => {
            Xb(bb)
          }
        }), Kb.length > 0 && (0, Jb.jsx)("div", {
          className: "PlayerRows",
          children: Kb.map(((bb, ub) => Lb(bb, Kb.length - ub)))
        }), !ob && ub.length > hb && (0, Jb.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, Jb.jsx)(pb.d, {
            label: (0, Jb.jsxs)(Jb.Fragment, {
              children: [Gb, " ", (0, Jb.jsx)(Zb.e, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              ab(!0)
            }
          })
        })]
      })
    }

    function sb(bb) {
      let {
        value: ub,
        placeholder: hb,
        ariaLabel: Ob,
        maxLength: Gb,
        wide: Ub = !1,
        onSave: Lb
      } = bb;
      const Yb = (0, Bb.useRef)(null),
        [Sb, ab] = (0, Bb.useState)(0),
        wb = (0, Bb.useRef)(!0),
        Zb = (0, Bb.useRef)(null),
        Xb = (0, Bb.useRef)({
          value: ub,
          onSave: Lb
        });
      Xb.current = {
        value: ub,
        onSave: Lb
      };
      const pb = () => {
        const bb = Zb.current;
        Zb.current = null, null !== bb && bb !== Xb.current.value && Xb.current.onSave(bb).then((() => {
          wb.current && ab((bb => bb + 1))
        }))
      };
      return (0, Bb.useEffect)((() => {
        null === Zb.current && Yb.current && (Yb.current.value = ub)
      }), [ub, Sb]), (0, Bb.useEffect)((() => () => {
        wb.current = !1, pb()
      }), []), (0, Jb.jsx)("div", {
        className: Hb()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: Ub
        }),
        onBlur: pb,
        children: (0, Jb.jsx)(tb.b, {
          domRef: Yb,
          defaultValue: ub,
          placeholderText: hb,
          ariaLabel: Ob,
          maxLength: Gb,
          onValueChange: bb => {
            Zb.current = bb
          },
          onEnter: pb
        })
      })
    }
    const Mb = ["mod", "coOwner"],
      mb = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function Ib(bb) {
      var ub, hb, Gb;
      let {
        name: Ub,
        place: Lb,
        openedIn: Yb,
        isYou: ab,
        manage: Hb,
        hiddenNames: Xb,
        zIndex: pb
      } = bb;
      const {
        t: ob,
        selectedLanguage: Ab
      } = (0, wb.K)(), [lb, Wb] = (0, Bb.useState)(null), {
        state: Cb
      } = Hb, db = `player:${Ub}`, zb = function(bb, ub) {
        if ("banned" === bb.section) return {
          ...rb,
          unban: !0
        };
        if ("gone" === bb.section) return rb;
        const {
          player: hb
        } = bb, Bb = "here" === bb.section, Ob = Bb || "none" !== hb.role ? hb.can.roles : [];
        return {
          gamemode: Bb && ub && null !== hb.gamemode && hb.can.gamemode,
          roles: Ob,
          fixedRole: 0 === Ob.length && "none" !== hb.role ? hb.role : null,
          kick: Bb && hb.can.kick,
          ban: hb.can.ban,
          unban: !1
        }
      }(Lb, null !== Cb.gamemodes), vb = Hb.statusOf(db), tb = Hb.isPending(db), Nb = Sb(), sb = Date.now(), Ib = bb => {
        var ub, hb;
        return null !== (ub = null === (hb = (bb => Cb.roles.find((ub => ub.role === bb)))(bb)) || void 0 === hb ? void 0 : hb.label) && void 0 !== ub ? ub : bb
      }, Pb = bb => {
        const ub = mb[bb];
        return void 0 === ub ? void 0 : ob(ub)
      }, qb = "here" === Lb.section || "away" === Lb.section ? Lb.player : null, Eb = "here" === Lb.section ? Lb.player.id : null, {
        playerSocialPreview: yb,
        isFriend: Vb
      } = null === Eb ? {
        playerSocialPreview: (0, Db.j)(Ub, null),
        isFriend: !1
      } : (0, nb.e)(Eb, Ub), Fb = function() {
        Hb.send(...arguments)
      }, fb = (bb, ub) => {
        Nb.hold("role", bb, Hb.send({
          type: "setRole",
          name: Ub,
          role: bb
        }, db, ub))
      };
      let kb = null;
      if ("ban" === (null === lb || void 0 === lb ? void 0 : lb.kind)) kb = ob("lobbyManageEntry:banConfirm", {
        playerName: Ub
      });
      else if ("role" === (null === lb || void 0 === lb ? void 0 : lb.kind)) {
        var Tb;
        kb = `${ob("lobbyManage:roleConfirm",{playerName:Ub,role:Ib(lb.role)})} ${null!==(Tb=Pb(lb.role))&&void 0!==Tb?Tb:""}`
      } else if (vb) kb = (0, Jb.jsx)(eb, {
        status: vb
      });
      else if (ab) kb = ob("lobbyManage:you");
      else if ("here" === Lb.section) "none" === Lb.player.role && sb - Lb.player.at < 6e5 && (kb = ib(ob, Ab.code, "lobbyManage:joinedAgo", Lb.player.at, sb));
      else if ("away" === Lb.section) {
        if (Lb.player.at > 0) {
          const bb = "kicked" === Lb.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          kb = ib(ob, Ab.code, bb, Lb.player.at, sb)
        }
      } else "banned" === Lb.section ? null !== Lb.bannedAt && (kb = ib(ob, Ab.code, "lobbyManage:bannedAgo", Lb.bannedAt, sb)) : "banned" === Yb && (kb = ob("lobbyManageEntry:unbanned"));
      return (0, Jb.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": Ub,
        children: (0, Jb.jsxs)(jb.f, {
          playerSocialPreview: yb,
          isFriend: Vb,
          status: kb,
          opensProfileCard: !ab && (0, nb.f)(!0, Ub, Xb),
          zIndex: pb,
          children: [null !== lb && (0, Jb.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === lb.kind && (0, Jb.jsxs)(Kb.H, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                Wb(null), Fb({
                  type: "ban",
                  name: Ub
                }, db)
              },
              children: [(0, Jb.jsx)(Zb.e, {
                name: "gavel"
              }), (0, Jb.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: ob("lobbyManageEntry:ban")
              })]
            }), "role" === lb.kind && (0, Jb.jsx)(Kb.e, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: lb.role
              },
              onClick: () => {
                Wb(null), fb(lb.role)
              },
              children: ob("lobbyManage:makeRole", {
                role: Ib(lb.role)
              })
            }), (0, Jb.jsx)(Kb.g, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                Wb(null)
              },
              children: ob("general:cancel")
            })]
          }), null === lb && (0, Jb.jsxs)(Jb.Fragment, {
            children: [(0, Jb.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [zb.gamemode && null !== qb && (0, Jb.jsx)(xb.b, {
                options: (null !== (ub = Cb.gamemodes) && void 0 !== ub ? ub : []).map((bb => ({
                  value: bb.value,
                  label: gb(ob, bb.label, Xb)
                }))),
                value: null !== (hb = Nb.get("gamemode")) && void 0 !== hb ? hb : qb.gamemode,
                disabled: tb,
                onChange: bb => {
                  (0, Ob.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: bb.value
                  }), Nb.hold("gamemode", bb.value, Hb.send({
                    type: "setGamemode",
                    name: Ub,
                    gamemode: bb.value
                  }, db))
                }
              }), zb.roles.length > 0 && null !== qb && (0, Jb.jsx)(xb.b, {
                options: [...Cb.roles].reverse().filter((bb => zb.roles.includes(bb.role))).map((bb => ({
                  value: bb.role,
                  label: bb.label
                }))),
                value: null !== (Gb = Nb.get("role")) && void 0 !== Gb ? Gb : qb.role,
                disabled: tb,
                onChange: bb => {
                  var ub;
                  (ub = bb.value) !== (null === qb || void 0 === qb ? void 0 : qb.role) && (Mb.includes(ub) ? Wb({
                    kind: "role",
                    role: ub
                  }) : ((0, Ob.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: ub
                  }), fb(ub, Pb(ub))))
                }
              }), null !== zb.fixedRole && (0, Jb.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: Ib(zb.fixedRole)
              })]
            }), (0, Jb.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [zb.kick && (0, Jb.jsxs)(Kb.g, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${ob("lobbyManageEntry:kick")} ${Ub}`,
                disabled: tb,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  Fb({
                    type: "kick",
                    name: Ub
                  }, db)
                },
                children: [(0, Jb.jsx)(Zb.e, {
                  name: "person-falling-burst"
                }), (0, Jb.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: ob("lobbyManageEntry:kick")
                })]
              }), zb.ban && (0, Jb.jsxs)(Kb.I, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${ob("lobbyManageEntry:ban")} ${Ub}`,
                disabled: tb,
                padDestructive: !0,
                onClick: () => {
                  Wb({
                    kind: "ban"
                  })
                },
                children: [(0, Jb.jsx)(Zb.e, {
                  name: "gavel"
                }), (0, Jb.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: ob("lobbyManageEntry:ban")
                })]
              }), zb.unban && (0, Jb.jsxs)(Kb.g, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${ob("lobbyManageEntry:unban")} ${Ub}`,
                disabled: tb,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  Fb({
                    type: "unban",
                    name: Ub
                  }, db)
                },
                children: [(0, Jb.jsx)(Zb.e, {
                  name: "user-unlock"
                }), (0, Jb.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: ob("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function Pb(bb) {
      var ub, hb, Ob, Gb;
      let {
        manage: Ub,
        focusRequest: Lb,
        onFocused: Yb
      } = bb;
      const {
        t: Sb
      } = (0, wb.K)(), ab = (0, lb.i)("players"), Hb = (0, lb.i)("hiddenPlayerNames"), Xb = (0, Bb.useRef)(null), {
        state: ob
      } = Ub, Ab = null === ab.localId ? null : null !== (ub = null === (hb = ab.byId[ab.localId]) || void 0 === hb ? void 0 : hb.name) && void 0 !== ub ? ub : null, [Wb] = (0, Bb.useState)((() => Cb(ob, Ab))), rb = function(bb, ub, hb) {
        const Bb = new Set([...bb.here, ...bb.away, ...bb.banned]),
          Ob = Cb(ub, hb),
          Gb = ub => {
            const hb = Ob[ub].filter((bb => !Bb.has(bb)));
            for (const bb of hb) Bb.add(bb);
            return [...bb[ub], ...hb]
          };
        return {
          here: Gb("here"),
          away: Gb("away"),
          banned: Gb("banned")
        }
      }(Wb, ob, Ab), [jb, nb] = (0, Bb.useState)(!1), Db = function(bb, ub) {
        return bb.here.filter((bb => bb.name !== ub && "none" === bb.role && bb.can.kick)).length
      }(ob, Ab), xb = Ub.statusOf("kickAll");
      (0, Bb.useEffect)((() => {
        var bb, ub;
        if (null === Lb) return;
        const hb = null === (bb = Xb.current) || void 0 === bb ? void 0 : bb.querySelector(`[data-lobby-manage-row="${CSS.escape(Lb.name)}"]`);
        null === hb || void 0 === hb || hb.scrollIntoView({
          block: "center"
        }), null === hb || void 0 === hb || null === (ub = hb.querySelector(".ProfilePreview")) || void 0 === ub || ub.focus({
          preventScroll: !0
        }), Yb(Lb.seq)
      }), [null === Lb || void 0 === Lb ? void 0 : Lb.seq]);
      const zb = bb => (ub, hb) => (0, Jb.jsx)(Ib, {
        name: ub,
        place: db(ob, ub),
        openedIn: bb,
        isYou: ub === Ab,
        manage: Ub,
        hiddenNames: Hb,
        zIndex: hb
      }, ub);
      return (0, Jb.jsxs)("div", {
        ref: Xb,
        className: "LobbyManagePage",
        children: [rb.here.length > 0 && (0, Jb.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Jb.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, Jb.jsx)(pb.d, {
              label: Sb("lobbyManage:here"),
              meta: ob.here.length
            }), Db >= 2 && !jb && (0, Jb.jsxs)(Kb.I, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: Ub.isPending("kickAll"),
              onClick: () => {
                nb(!0)
              },
              children: [(0, Jb.jsx)(Zb.e, {
                name: "person-falling-burst"
              }), " ", Sb("lobbyManage:kickAll")]
            })]
          }), jb && Db >= 2 && (0, Jb.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, Jb.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: Sb("lobbyManage:kickAllConfirm", {
                count: Db
              })
            }), (0, Jb.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, Jb.jsx)(Kb.H, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  nb(!1), Ub.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: Sb("lobbyManage:kickAll")
              }), (0, Jb.jsx)(Kb.g, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  nb(!1)
                },
                children: Sb("general:cancel")
              })]
            })]
          }), xb && (0, Jb.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, Jb.jsx)(eb, {
              status: xb
            })
          }), (0, Jb.jsx)(Nb, {
            names: rb.here,
            cap: rb.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: zb("here")
          })]
        }), rb.away.length > 0 && (0, Jb.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Jb.jsx)(pb.d, {
            label: Sb("lobbyManage:notHere"),
            meta: rb.away.length
          }), (0, Jb.jsx)(Nb, {
            names: rb.away,
            cap: 5,
            filterFrom: null,
            moreLabel: Sb("lobbyManage:allCount", {
              count: rb.away.length
            }),
            reveal: null !== (Ob = null === Lb || void 0 === Lb ? void 0 : Lb.name) && void 0 !== Ob ? Ob : null,
            renderRow: zb("away")
          })]
        }), rb.banned.length > 0 && (0, Jb.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Jb.jsx)(pb.d, {
            label: Sb("lobbyManage:banned"),
            meta: rb.banned.length
          }), (0, Jb.jsx)(Nb, {
            names: rb.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: Sb("lobbyManage:allCount", {
              count: rb.banned.length
            }),
            reveal: null !== (Gb = null === Lb || void 0 === Lb ? void 0 : Lb.name) && void 0 !== Gb ? Gb : null,
            renderRow: zb("banned")
          })]
        })]
      })
    }
    var qb = hb(4393),
      Eb = hb(1544),
      yb = hb(36329),
      Vb = hb(36344),
      Fb = hb(36342),
      fb = hb(36338),
      kb = hb(36373),
      Tb = hb(36356),
      cb = hb(36364);

    function Qb(bb) {
      const ub = new Set;
      for (const hb of bb) ub.add(hb.toLowerCase());
      return ub
    }

    function Rb(bb) {
      var ub, hb;
      let {
        state: Ob,
        lobbyName: Gb,
        listed: Ub,
        isListed: Lb,
        jK: Yb,
        UW: Sb,
        statusOf: ab
      } = bb;
      const {
        t: Hb,
        selectedLanguage: Zb
      } = (0, wb.K)(), Xb = (0, Eb.i)(), ob = (0, lb.i)("players"), Ab = null === ob.localId ? null : null !== (ub = null === (hb = ob.byId[ob.localId]) || void 0 === hb ? void 0 : hb.name) && void 0 !== ub ? ub : null, Kb = (0, Bb.useMemo)((() => (0, fb.k)(Xb.friends, Gb, Ob.here.map((bb => bb.name)))), [Xb.friends, Gb, Ob.here]), Wb = new Map(Kb.map((bb => [bb.friend.name.toLowerCase(), bb]))), Cb = function(bb) {
        let {
          refused: ub,
          listed: hb,
          here: Bb,
          friends: Ob,
          excluded: Gb
        } = bb;
        const Ub = Qb(Gb),
          Lb = bb => bb.filter((bb => {
            const ub = bb.toLowerCase();
            return !Ub.has(ub) && (Ub.add(ub), !0)
          }));
        return {
          added: [],
          refused: Lb(ub),
          listed: Lb(hb),
          suggested: Lb([...Bb, ...Ob])
        }
      }({
        refused: Ob.refused.map((bb => bb.name)),
        listed: Ub,
        here: Ob.here.map((bb => bb.name)),
        friends: Kb.flatMap((bb => "here" === bb.place ? [] : [bb.friend.name])),
        excluded: [...null === Ab ? [] : [Ab], ...[...Ob.here, ...Ob.away].flatMap((bb => "none" === bb.role || (0, fb.m)(Ub, bb.name) ? [] : [bb.name]))]
      }), [db] = (0, Bb.useState)(Cb), [rb, jb] = (0, Bb.useState)([]), xb = function(bb, ub, hb) {
        const Bb = Qb(hb),
          Ob = Qb([...hb, ...bb.refused, ...bb.listed, ...bb.suggested]),
          Gb = hb => [...bb[hb].filter((bb => !Bb.has(bb.toLowerCase()))), ...ub[hb].filter((bb => {
            const ub = bb.toLowerCase();
            return !Ob.has(ub) && (Ob.add(ub), !0)
          }))];
        return {
          added: [...hb],
          refused: Gb("refused"),
          listed: Gb("listed"),
          suggested: Gb("suggested")
        }
      }(db, Cb, rb), zb = (bb, ub) => {
        var hb, Bb;
        const Gb = bb.toLowerCase(),
          Ub = Wb.get(Gb),
          Sb = Ob.here.find((bb => bb.name.toLowerCase() === Gb)),
          wb = Ob.refused.find((bb => bb.name.toLowerCase() === Gb)),
          Xb = null !== (hb = null === ab || void 0 === ab ? void 0 : ab(bb)) && void 0 !== hb ? hb : null;
        let pb = null;
        Xb ? pb = (0, Jb.jsx)(eb, {
          status: Xb
        }) : wb ? pb = ib(Hb, Zb.code, "lobbyManage:triedToJoinAgo", wb.at, Date.now()) : Ub && Sb ? pb = Hb("lobbyManage:friendHere") : Ub ? pb = "online" === Ub.place ? Hb("lobbyManage:friendOnline") : Hb("lobbyManage:friend") : Sb && (pb = Hb("lobbyManage:hereStatus"));
        let ob = null !== (Bb = null === Ub || void 0 === Ub ? void 0 : Ub.friend) && void 0 !== Bb ? Bb : (0, Db.j)(bb, null);
        return !Ub && null !== Sb && void 0 !== Sb && Sb.id && (ob = (0, nb.e)(Sb.id, Sb.name).playerSocialPreview), (0, Jb.jsx)(Tb.c, {
          playerSocialPreview: ob,
          isFriend: void 0 !== Ub,
          hideFriendBadge: !0,
          status: pb,
          zIndex: ub,
          gH: {
            on: Lb(bb),
            onChange: ub => {
              Yb(bb, ub)
            }
          }
        }, Gb)
      }, gb = [...xb.added, ...xb.refused];
      return (0, Jb.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, Jb.jsx)(pb.d, {
          label: Hb("worldSocial:whitelist"),
          meta: Ub.length
        }), (0, Jb.jsx)(cb.d, {
          label: Hb("lobbyManage:add"),
          icon: "user-check",
          placeholder: Hb("socialBar:enterPlayerName"),
          onSubmit: async bb => {
            const ub = await Sb(bb);
            return ub.ok && jb((ub => [bb, ...ub])), ub
          }
        }), gb.length > 0 && (0, Jb.jsx)("div", {
          className: "PlayerRows",
          children: gb.map(((bb, ub) => zb(bb, gb.length - ub)))
        }), (0, Jb.jsx)(Nb, {
          names: xb.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: Hb("lobbyManage:allOnWhitelist", {
            count: xb.listed.length
          }),
          renderRow: zb
        }), (0, Jb.jsx)(Nb, {
          names: xb.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: Hb("lobbyManage:allCount", {
            count: xb.suggested.length
          }),
          renderRow: zb
        })]
      })
    }

    function bu(bb) {
      let {
        manage: ub,
        listing: hb
      } = bb;
      const {
        t: Bb
      } = (0, wb.K)(), Gb = (bb, hb) => ((0, Ob.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: bb
      }), ub.send({
        type: "setListing",
        field: bb,
        value: hb
      }, `listing:${bb}`)), Ub = bb => {
        const hb = ub.statusOf(`listing:${bb}`);
        return hb && !hb.ok && (0, Jb.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, Jb.jsx)(eb, {
            status: hb
          })
        })
      };
      return (0, Jb.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, Jb.jsx)(pb.d, {
          label: Bb("lobbyManage:inWorldsList")
        }), (0, Jb.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Jb.jsx)("div", {
            className: "SliderText",
            children: Bb("lobbyManage:description")
          }), (0, Jb.jsx)(sb, {
            value: hb.description,
            ariaLabel: Bb("lobbyManage:description"),
            wide: !0,
            onSave: bb => Gb("description", bb)
          })]
        }), Ub("description"), (0, Jb.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Jb.jsx)("div", {
            className: "SliderText",
            children: Bb("lobbyManage:emojis")
          }), (0, Jb.jsx)(sb, {
            value: hb.emojis,
            ariaLabel: Bb("lobbyManage:emojis"),
            onSave: bb => Gb("emojis", bb)
          })]
        }), Ub("emojis"), (0, Jb.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Jb.jsx)("div", {
            className: "SliderText",
            children: Bb("lobbyManage:colour")
          }), (0, Jb.jsx)(uu, {
            value: hb.colour,
            ariaLabel: Bb("lobbyManage:colour"),
            onSave: bb => {
              Gb("colour", bb)
            }
          })]
        }), Ub("colour")]
      })
    }

    function uu(bb) {
      let {
        value: ub,
        ariaLabel: hb,
        onSave: Ob
      } = bb;
      const Gb = (0, Bb.useRef)(null),
        Ub = (0, Bb.useRef)({
          value: ub,
          onSave: Ob
        });
      Ub.current = {
        value: ub,
        onSave: Ob
      };
      const Lb = (0, Bb.useRef)(null),
        Yb = (0, Bb.useRef)(!1),
        Sb = bb => {
          Yb.current && bb.value !== Ub.current.value && bb.value !== Lb.current && (Lb.current = bb.value, Ub.current.onSave(bb.value))
        };
      return (0, Bb.useEffect)((() => {
        Gb.current && document.activeElement !== Gb.current && (Gb.current.value = ub)
      }), [ub]), (0, Bb.useEffect)((() => {
        const bb = Gb.current,
          ub = () => {
            Sb(bb)
          };
        return bb.addEventListener("change", ub), () => {
          bb.removeEventListener("change", ub), Sb(bb)
        }
      }), []), (0, Jb.jsx)("input", {
        ref: Gb,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: ub,
        "aria-label": hb,
        onInput: () => {
          Yb.current = !0
        },
        onBlur: bb => {
          Sb(bb.currentTarget)
        }
      })
    }

    function hu(bb) {
      let {
        manage: ub
      } = bb;
      const {
        lobbyName: hb,
        shownLobbyName: Bb
      } = (0, lb.i)("connectedGame");
      return ub.state.you.canSetVisibility && null !== hb ? (0, Jb.jsx)(Ou, {
        manage: ub,
        lobbyName: hb,
        worldCode: null !== Bb && void 0 !== Bb ? Bb : hb
      }, hb) : (0, Jb.jsx)(Gu, {
        manage: ub,
        lobbyName: null !== hb && void 0 !== hb ? hb : ""
      })
    }

    function Bu(bb) {
      return bb.map((bb => bb.toLowerCase())).sort().join(",")
    }

    function Ou(bb) {
      var ub;
      let {
        manage: hb,
        lobbyName: Gb,
        worldCode: Ub
      } = bb;
      const {
        t: Lb
      } = (0, wb.K)(), {
        settings: Yb,
        loading: Sb,
        change: ab,
        retry: Hb,
        refresh: Zb
      } = (0, yb.d)(Gb), ob = (0, Eb.i)(), {
        state: Ab
      } = hb, lb = (0, Bb.useRef)(Yb);
      lb.current = Yb;
      const Wb = Bu(null !== (ub = Ab.whitelist) && void 0 !== ub ? ub : []),
        Cb = null !== Ab.whitelist;
      (0, Bb.useEffect)((() => {
        const bb = lb.current;
        null !== bb && (bb.visibility !== Ab.visibility || Cb && Bu(bb.whitelist) !== Wb) && Zb()
      }), [Ab.visibility, Wb, Cb, Zb]);
      const db = async (bb, ub) => {
        let hb = null;
        return await ab(bb, ub, {
          quiet: !0,
          onAnswer: bb => {
            hb = bb
          }
        }), hb
      }, rb = (bb, ub) => {
        null !== ub && "error" in ub && hb.showStatus(bb, {
          ok: !1,
          text: [Lb(ub.error)]
        })
      }, jb = async bb => {
        if (null === Yb || bb === Yb.visibility) return;
        (0, Ob.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: bb
        });
        const ub = "whitelist" === bb ? (0, fb.g)((0, fb.k)(ob.friends, Gb, Ab.here.map((bb => bb.name))), (0, kb.b)(Gb), Yb.whitelist) : [],
          hb = await db({
            setVisibility: bb
          }, (ub => ({
            ...ub,
            visibility: bb
          })));
        rb("mode", hb), null === hb || "error" in hb || await (async bb => {
          for (const ub of (0, fb.p)(bb, qb.G))
            if (!await ab({
                whitelistAdd: ub
              }, (bb => (0, fb.w)(bb, ub, !0)))) return !1;
          return !0
        })(ub)
      }, nb = (0, Bb.useMemo)((() => {
        var bb;
        if (null === Yb) return [];
        const ub = null !== (bb = Ab.whitelist) && void 0 !== bb ? bb : [];
        return [...ub.filter((bb => (0, fb.m)(Yb.whitelist, bb))), ...Yb.whitelist.filter((bb => !(0, fb.m)(ub, bb)))]
      }), [Yb, Ab.whitelist]), Db = hb.statusOf("mode");
      return (0, Jb.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Jb.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Jb.jsx)(pb.d, {
            label: Lb("worldSocial:whoCanJoin")
          }), null === Yb && Sb && (0, Jb.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Jb.jsx)(Xb.c, {})
          }), null === Yb && !Sb && (0, Jb.jsx)(Kb.g, {
            className: "SmallTextLight",
            onClick: Hb,
            children: Lb("worldSocial:loadFailed")
          }), null !== Yb && (0, Jb.jsx)(Vb.d, {
            visibility: Yb.visibility,
            onPick: bb => {
              jb(bb)
            }
          }), Db && (0, Jb.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, Jb.jsx)(eb, {
              status: Db
            })
          }), null !== Yb && "private" !== Yb.visibility && (0, Jb.jsx)(Fb.c, {
            worldCode: Ub,
            message: null
          })]
        }), "whitelist" === (null === Yb || void 0 === Yb ? void 0 : Yb.visibility) && (0, Jb.jsx)(Rb, {
          state: Ab,
          lobbyName: Gb,
          listed: nb,
          isListed: bb => (0, fb.m)(Yb.whitelist, bb),
          jK: (bb, ub) => {
            (0, Ob.reportAnalyticsClick)(ub ? {
              id: "lobby_manage.whitelist_add",
              value: "gH"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), db(ub ? {
              whitelistAdd: [bb]
            } : {
              whitelistRemove: bb
            }, (hb => (0, fb.w)(hb, [bb], ub))).then((ub => {
              rb(`whitelist:${bb.toLowerCase()}`, ub)
            }))
          },
          UW: async bb => {
            (0, Ob.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const ub = await db({
              whitelistAdd: [bb]
            }, (ub => (0, fb.w)(ub, [bb], !0)));
            return null === ub ? {
              ok: !1,
              error: Lb("worldSocial:changeFailed")
            } : "error" in ub ? {
              ok: !1,
              error: Lb(ub.error)
            } : (0, fb.m)(ub.notFound, bb) ? {
              ok: !1,
              error: Lb("lobbyManage:noPlayerCalled", {
                playerName: bb
              })
            } : {
              ok: !0
            }
          },
          statusOf: bb => hb.statusOf(`whitelist:${bb.toLowerCase()}`)
        }), "public" === (null === Yb || void 0 === Yb ? void 0 : Yb.visibility) && null !== Ab.listing && (0, Jb.jsx)(bu, {
          manage: hb,
          listing: Ab.listing
        })]
      })
    }

    function Gu(bb) {
      var ub;
      let {
        manage: hb,
        lobbyName: Bb
      } = bb;
      const {
        t: Gb
      } = (0, wb.K)(), {
        state: Ub
      } = hb, Lb = Sb(), Yb = null !== (ub = Ub.whitelist) && void 0 !== ub ? ub : [];
      return (0, Jb.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Jb.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Jb.jsx)(pb.d, {
            label: Gb("worldSocial:whoCanJoin")
          }), (0, Jb.jsx)("div", {
            className: "LobbyManageModeText",
            children: Gb(`worldSocial:${Ub.visibility}`)
          })]
        }), "whitelist" === Ub.visibility && Ub.you.canEditWhitelist && (0, Jb.jsx)(Rb, {
          state: Ub,
          lobbyName: Bb,
          listed: Yb,
          isListed: bb => {
            var ub;
            return null !== (ub = Lb.get(bb.toLowerCase())) && void 0 !== ub ? ub : (0, fb.m)(Yb, bb)
          },
          jK: (bb, ub) => {
            (0, Ob.reportAnalyticsClick)(ub ? {
              id: "lobby_manage.whitelist_add",
              value: "gH"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const Bb = bb.toLowerCase();
            Lb.hold(Bb, ub, hb.send(ub ? {
              type: "whitelistAdd",
              names: [bb]
            } : {
              type: "whitelistRemove",
              name: bb
            }, `whitelist:${Bb}`))
          },
          UW: async bb => {
            (0, Ob.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const ub = await hb.send({
              type: "whitelistAdd",
              names: [bb]
            }, "whitelist-field");
            return ub.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, Jb.jsx)(vb.c, {
                text: ub.message
              })
            }
          },
          statusOf: bb => hb.statusOf(`whitelist:${bb.toLowerCase()}`)
        }), "public" === Ub.visibility && null !== Ub.listing && (0, Jb.jsx)(bu, {
          manage: hb,
          listing: Ub.listing
        })]
      })
    }
    var Uu = hb(4765),
      Lu = hb(1260);
    const Yu = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const Su = (0, Bb.memo)((function(bb) {
      var ub;
      let {
        rule: hb,
        value: Bb,
        status: Ob,
        pending: Gb,
        hiddenNames: Ub,
        Qr: Lb,
        onAction: Yb
      } = bb;
      const {
        t: Sb
      } = (0, wb.K)(), ab = bb => Lb(hb, bb), Hb = (bb, ub) => {
        Yb(hb, bb, ub)
      }, Zb = gb(Sb, hb.label, Ub), Xb = hb.info ? gb(Sb, hb.info, Ub) : void 0, pb = hb.placeholder ? gb(Sb, hb.placeholder, Ub) : void 0, ob = (null !== (ub = hb.options) && void 0 !== ub ? ub : []).map((bb => ({
        value: bb.value,
        label: gb(Sb, bb.label, Ub)
      }))), Ab = Math.max(0, ...ob.map((bb => function(bb) {
        let ub = 0;
        for (const hb of bb) ub += Yu.test(hb) ? 2 : 1;
        return ub
      }(bb.label)))), lb = Ob && (0, Jb.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, Jb.jsx)(eb, {
          status: Ob
        })
      }), Wb = (0, Jb.jsxs)("div", {
        className: "SliderText",
        children: [Zb, void 0 !== Xb && (0, Jb.jsx)(Lu.b, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: Xb
        })]
      });
      return "toggle" === hb.kind ? (0, Jb.jsxs)(Jb.Fragment, {
        children: [(0, Jb.jsx)(Uu.c, {
          label: Zb,
          checked: !0 === Bb,
          circleInfoText: Xb,
          disabled: Gb,
          onClick: ab
        }), lb]
      }) : "choice" === hb.kind && ob.length <= 3 ? (0, Jb.jsxs)(Jb.Fragment, {
        children: [(0, Jb.jsx)(Uu.g, {
          label: Zb,
          options: ob,
          value: String(Bb),
          circleInfoText: Xb,
          onChange: ab
        }), lb]
      }) : (0, Jb.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [Wb, "choice" === hb.kind && (0, Jb.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": Ab
          },
          children: (0, Jb.jsx)(xb.b, {
            options: ob,
            value: String(Bb),
            disabled: Gb,
            onChange: bb => {
              ab(bb.value)
            }
          })
        }), ("number" === hb.kind || "text" === hb.kind) && (0, Jb.jsx)(sb, {
          value: null === Bb ? "" : String(Bb),
          placeholder: pb,
          ariaLabel: Zb,
          onSave: bb => {
            const ub = bb.trim(),
              Bb = Number(ub);
            return ab("number" === hb.kind && "" !== ub && Number.isFinite(Bb) ? Bb : ub)
          }
        }), "action" === hb.kind && (0, Jb.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [ob.length > 3 && (0, Jb.jsx)(xb.b, {
            options: ob,
            value: {
              value: "",
              label: null !== pb && void 0 !== pb ? pb : Zb
            },
            disabled: Gb,
            onChange: bb => {
              Hb(bb.value)
            }
          }), ob.length > 0 && ob.length <= 3 && ob.map((bb => (0, Jb.jsx)(Kb.g, {
            className: "SmallTextLight",
            disabled: Gb,
            onClick: () => {
              Hb(bb.value)
            },
            children: bb.label
          }, bb.value))), 0 === ob.length && (0, Jb.jsx)(Kb.g, {
            className: "SmallTextLight",
            disabled: Gb,
            onClick: () => {
              Hb()
            },
            children: null !== pb && void 0 !== pb ? pb : Zb
          })]
        }), "names" === hb.kind && (0, Jb.jsx)(au, {
          names: Array.isArray(Bb) ? Bb : [],
          pending: Gb,
          onAction: Hb
        }), lb]
      })
    }));

    function au(bb) {
      let {
        names: ub,
        pending: hb,
        onAction: Ob
      } = bb;
      const {
        t: Gb
      } = (0, wb.K)(), Ub = (0, Bb.useRef)(null), [Lb, Yb] = (0, Bb.useState)(""), Sb = () => {
        const bb = Lb.trim();
        "" !== bb && (Ob(bb, "add"), Ub.current && (Ub.current.value = ""), Yb(""))
      };
      return (0, Jb.jsxs)("div", {
        className: "LobbyManageNames",
        children: [ub.map((bb => (0, Jb.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, Jb.jsx)("span", {
            className: "LobbyManageNameText",
            children: bb
          }), (0, Jb.jsx)(Kb.g, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: Gb("lobbyManage:removeName", {
              name: bb
            }),
            disabled: hb,
            onClick: () => {
              Ob(bb, "remove")
            },
            children: (0, Jb.jsx)(Zb.e, {
              name: "xmark"
            })
          })]
        }, bb))), (0, Jb.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, Jb.jsx)(tb.b, {
            domRef: Ub,
            placeholderText: Gb("lobbyManage:namePlaceholder"),
            ariaLabel: Gb("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: bb => {
              Yb(bb)
            },
            onEnter: Sb
          }), (0, Jb.jsx)(Kb.g, {
            className: "SmallTextLight",
            disabled: hb || "" === Lb.trim(),
            onClick: Sb,
            children: Gb("lobbyManage:addHere")
          })]
        })]
      })
    }
    const Hu = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function wu(bb) {
      return Hu.flatMap((ub => {
        let {
          group: hb
        } = ub;
        return bb.filter((bb => bb.group === hb && void 0 === bb.parent))
      }))
    }

    function Zu(bb) {
      let {
        manage: ub,
        rowsShown: hb
      } = bb;
      const {
        t: Gb
      } = (0, wb.K)(), Ub = (0, lb.i)("hiddenPlayerNames"), {
        rules: Lb
      } = ub.state, Yb = Sb(), ab = new Set(wu(Lb).slice(0, hb)), Hb = bb => {
        const ub = Yb.get(bb.key);
        return void 0 === ub ? bb.value : ub
      }, {
        hold: Zb
      } = Yb, Xb = (0, Bb.useCallback)(((bb, hb) => {
        (0, Ob.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: bb.key
        });
        const Bb = ub.send({
          type: "setRule",
          key: bb.key,
          value: hb
        }, `rule:${bb.key}`);
        return Zb(bb.key, hb, Bb), Bb
      }), [ub, Zb]), ob = (0, Bb.useCallback)(((bb, hb, Bb) => {
        (0, Ob.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: bb.key
        }), ub.send({
          type: "ruleAction",
          key: bb.key,
          ...void 0 === hb ? {} : {
            arg: hb
          },
          ...void 0 === Bb ? {} : {
            op: Bb
          }
        }, `rule:${bb.key}`, void 0 === Bb ? Gb("lobbyManage:setJustNow") : void 0)
      }), [ub, Gb]), Ab = bb => {
        const hb = `rule:${bb.key}`;
        return (0, Jb.jsx)(Su, {
          rule: bb,
          value: Hb(bb),
          status: ub.statusOf(hb),
          pending: ub.isPending(hb),
          hiddenNames: Ub,
          Qr: Xb,
          onAction: ob
        }, bb.key)
      };
      return (0, Jb.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: Hu.map((bb => {
          let {
            group: ub,
            title: hb
          } = bb;
          const Ob = Lb.filter((bb => bb.group === ub && ab.has(bb)));
          return 0 === Ob.length ? null : (0, Jb.jsxs)(Bb.Fragment, {
            children: [(0, Jb.jsx)(pb.d, {
              label: Gb(hb)
            }), Ob.map((bb => {
              const ub = Lb.filter((ub => ub.parent === bb.key));
              return 0 === ub.length || !0 !== Hb(bb) ? Ab(bb) : (0, Jb.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [Ab(bb), ub.map(Ab)]
              }, bb.key)
            }))]
          }, ub)
        }))
      })
    }
    const Xu = {
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
      pu = 5,
      ou = (0, Bb.memo)((function(bb) {
        let {
          page: ub,
          manage: hb,
          leaderboard: Ob,
          focusRequest: Gb,
          onFocused: Ub,
          ruleRowsShown: Lb
        } = bb;
        return "leaderboard" === ub ? (0, Jb.jsx)(Bb.Suspense, {
          fallback: (0, Jb.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Jb.jsx)(Xb.c, {})
          }),
          children: Ob
        }) : "joining" === ub ? (0, Jb.jsx)(hu, {
          manage: hb
        }) : "rules" === ub ? (0, Jb.jsx)(Zu, {
          manage: hb,
          rowsShown: Lb
        }) : (0, Jb.jsx)(Pb, {
          manage: hb,
          focusRequest: Gb,
          onFocused: Ub
        })
      }));

    function Au(bb) {
      let {
        page: ub
      } = bb;
      const {
        t: hb
      } = (0, wb.K)(), Bb = Xu[ub];
      return (0, Jb.jsxs)(Jb.Fragment, {
        children: [(0, Jb.jsx)(Zb.e, {
          name: Bb.icon
        }), " ", (0, Jb.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: hb(Bb.title)
        })]
      })
    }

    function lu(bb) {
      var ub;
      const {
        t: hb
      } = (0, wb.K)(), {
        pages: Gb,
        landing: Ub
      } = bb, Yb = (0, Bb.useRef)(null), Sb = (0, Bb.useRef)(null), ab = (0, Bb.useRef)(null), Zb = (0, Bb.useRef)(new Map), [Xb, lb] = (0, Bb.useState)(null), Kb = (0, Bb.useRef)(Xb), Wb = (0, Bb.useRef)(0), [Cb, db] = (0, Bb.useState)(Gb[0]), rb = null !== Xb && void 0 !== Xb ? Xb : Gb.includes(Cb) ? Cb : Gb[0], [jb] = (0, Bb.useState)(null !== (ub = null === Ub || void 0 === Ub ? void 0 : Ub.page) && void 0 !== ub ? ub : null), nb = null !== jb && Gb.includes(jb) ? [jb, ...Gb.filter((bb => bb !== jb))] : Gb, Db = Math.max(1, Math.ceil(wu(bb.manage.state.rules).length / pu)), xb = nb.flatMap((bb => "rules" === bb ? Array(Db).fill(bb) : [bb])), zb = function(bb, ub) {
        const [hb, Ob] = (0, Bb.useState)(bb), Gb = hb >= ub;
        return Gb && hb !== 1 / 0 && Ob(1 / 0), (0, Bb.useLayoutEffect)((() => {
          if (Gb) return;
          let bb = !0;
          return (0, Ab.e)().then((() => {
            bb && Ob((bb => bb + 1))
          })), () => {
            bb = !1
          }
        }), [hb, Gb]), Gb ? 1 / 0 : hb
      }(1, xb.length), gb = xb.slice(0, zb), ib = new Set(gb), vb = zb < xb.length, tb = vb ? gb.filter((bb => "rules" === bb)).length * pu : 1 / 0, eb = (0, Bb.useRef)(bb.focusRequest);
      eb.current = bb.focusRequest;
      const Nb = bb => {
          Kb.current = bb, lb(bb)
        },
        sb = () => {
          var bb, ub;
          Yb.current.style.scrollPaddingTop = `${null!==(bb=null===(ub=ab.current)||void 0===ub?void 0:ub.offsetHeight)&&void 0!==bb?bb:0}px`
        },
        Mb = bb => {
          const ub = Yb.current,
            hb = Zb.current.get(bb);
          if (void 0 === hb) return;
          const Bb = document.activeElement,
            Ob = eb.current,
            Gb = null === Ob ? null : hb.querySelector(`[data-lobby-manage-row="${CSS.escape(Ob.name)}"]`);
          sb(), Bb instanceof HTMLElement && null !== Gb && void 0 !== Gb && Gb.contains(Bb) ? Bb.scrollIntoView({
            block: "center"
          }) : null === hb.previousElementSibling ? ub.scrollTop = 0 : hb.scrollIntoView({
            block: "start"
          }), Wb.current = ub.scrollTop
        },
        mb = bb => {
          (0, Ob.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: bb
          }), Nb(bb), Mb(bb)
        },
        Ib = () => {
          var bb, ub;
          const hb = Yb.current,
            Bb = hb.getBoundingClientRect().top + (null !== (bb = null === (ub = ab.current) || void 0 === ub ? void 0 : ub.offsetHeight) && void 0 !== bb ? bb : 0),
            Ob = Gb.map((bb => {
              var ub, hb;
              return (null !== (ub = null === (hb = Zb.current.get(bb)) || void 0 === hb ? void 0 : hb.getBoundingClientRect().top) && void 0 !== ub ? ub : 1 / 0) - Bb
            })),
            Ub = !vb && hb.scrollTop + hb.clientHeight >= hb.scrollHeight - 1;
          db(Gb[(0, Lb.i)(Ob, Ub)])
        },
        Pb = () => {
          null !== Kb.current && (Nb(null), Ib())
        };
      (0, Bb.useLayoutEffect)((() => {
        null !== Ub && Gb.includes(Ub.page) && mb(Ub.page)
      }), [null === Ub || void 0 === Ub ? void 0 : Ub.seq]), (0, Bb.useLayoutEffect)((() => {
        null === Kb.current || Gb.includes(Kb.current) || Pb()
      }));
      const {
        onFocused: qb
      } = bb, Eb = (0, Bb.useCallback)((bb => {
        null !== Kb.current && Mb(Kb.current), qb(bb)
      }), [qb]);
      (0, Bb.useLayoutEffect)((() => {
        const bb = Kb.current;
        null !== bb && (!vb || Gb.indexOf(xb[zb - 1]) < Gb.indexOf(bb)) && Mb(bb)
      }), [zb]), (0, Bb.useEffect)((() => {
        const bb = new ResizeObserver((() => {
          null !== Kb.current ? Mb(Kb.current) : sb()
        }));
        return bb.observe(Yb.current), bb.observe(Sb.current), () => {
          bb.disconnect()
        }
      }), []), (0, Bb.useLayoutEffect)((() => {
        const bb = ab.current,
          ub = null === bb || void 0 === bb ? void 0 : bb.querySelector(".SegmentedToggleOptionSelected");
        ub && (bb.scrollLeft = Math.min(ub.offsetLeft, Math.max(bb.scrollLeft, ub.offsetLeft + ub.offsetWidth - bb.clientWidth)))
      }), [rb]);
      return (0, Jb.jsxs)("div", {
        ref: Yb,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === Kb.current ? Ib() : Math.abs(Yb.current.scrollTop - Wb.current) > 1 && Pb()
        },
        onClick: bb => {
          var ub;
          null !== (ub = ab.current) && void 0 !== ub && ub.contains(bb.target) || Pb()
        },
        onFocus: bb => {
          var ub;
          const hb = null === Kb.current ? null : Zb.current.get(Kb.current);
          !hb || hb.contains(bb.target) || null !== (ub = ab.current) && void 0 !== ub && ub.contains(bb.target) || Pb()
        },
        children: [Gb.length > 1 && (0, Jb.jsx)("div", {
          ref: ab,
          className: "LobbyManageChips",
          children: (0, Jb.jsx)(ob.c, {
            options: Gb.map((bb => ({
              value: bb,
              label: (0, Jb.jsx)(Au, {
                page: bb
              }),
              ariaLabel: hb(Xu[bb].title)
            }))),
            value: rb,
            padTabs: "2",
            ariaLabel: hb("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: mb
          })
        }), (0, Jb.jsx)("div", {
          ref: Sb,
          className: Hb()("LobbyManageInner", {
            Staging: vb
          }),
          children: Gb.filter((bb => ib.has(bb))).map((ub => {
            const hb = ub === Xb;
            return (0, Jb.jsxs)("section", {
              ref: bb => {
                bb ? Zb.current.set(ub, bb) : Zb.current.delete(ub)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": hb || void 0,
              children: [Gb.length > 1 && (0, Jb.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": hb || void 0,
                "data-pad-unavailable": hb || void 0,
                children: (0, Jb.jsx)(pb.d, {
                  label: (0, Jb.jsx)(Au, {
                    page: ub
                  })
                })
              }), (0, Jb.jsx)(ou, {
                page: ub,
                manage: bb.manage,
                leaderboard: bb.leaderboard,
                focusRequest: bb.focusRequest,
                onFocused: Eb,
                ruleRowsShown: "rules" === ub ? tb : 1 / 0
              })]
            }, ub)
          }))
        })]
      })
    }

    function Ku(bb) {
      return void 0 === (null === bb || void 0 === bb ? void 0 : bb.page) ? null : {
        page: bb.page,
        seq: bb.seq
      }
    }

    function Wu(bb) {
      let {
        leaderboard: ub
      } = bb;
      const hb = function() {
          const bb = (0, Gb.f)("lobbyManage"),
            [ub, hb] = (0, Bb.useReducer)((bb => bb + 1), 0),
            [Ob] = (0, Bb.useState)((() => new Yb.b(hb)));
          return (0, Bb.useEffect)((() => {
            const bb = Ob.nextDeadline();
            if (null === bb) return;
            const ub = setTimeout((() => {
              Ob.expire(Date.now()), hb()
            }), Math.max(0, bb - Date.now()));
            return () => {
              clearTimeout(ub)
            }
          })), (0, Bb.useMemo)((() => null === bb ? null : {
            state: bb,
            send: (bb, ub, Bb) => {
              const Gb = Ob.send(bb, ub, null !== Bb && void 0 !== Bb ? Bb : null);
              return hb(), Gb
            },
            statusOf: bb => Ob.statusOf(bb, Date.now()),
            showStatus: (bb, ub) => {
              Ob.show(bb, ub)
            },
            isPending: bb => Ob.isPending(bb)
          }), [bb, ub, Ob])
        }(),
        Sb = (0, Lb.m)((0, Gb.f)("lobbyLeaderboardInfo")),
        ab = (0, Ub.l)(),
        [Hb, wb] = (0, Bb.useState)((() => Ku(ab))),
        [Zb, Xb] = (0, Bb.useState)(null);
      return (0, Bb.useEffect)((() => {
        null === ab && (0, Ob.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, Bb.useEffect)((() => {
        null !== ab && (wb((bb => (null === bb || void 0 === bb ? void 0 : bb.seq) === ab.seq ? bb : Ku(ab))), void 0 !== ab.focusName && "players" === ab.page ? Xb({
          name: ab.focusName,
          seq: ab.seq
        }) : (0, Ub.k)(ab.seq))
      }), [null === ab || void 0 === ab ? void 0 : ab.seq]), null === hb ? null : (0, Jb.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, Jb.jsx)(lu, {
          pages: (0, Lb.e)(hb.state, Sb),
          manage: hb,
          leaderboard: ub,
          focusRequest: Zb,
          onFocused: Ub.k,
          landing: Hb
        })
      })
    }
  },
  36178: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => ab,
      d: () => Yb
    });
    var Bb = hb(1380),
      Ob = hb(1836),
      Gb = hb(1811);
    const Ub = 1e4;
    let Lb = 0;

    function Yb(bb) {
      const ub = ++Lb;
      return new Promise((hb => {
        const Lb = ub => {
            Yb(), clearTimeout(Sb), !1 === (null === ub || void 0 === ub ? void 0 : ub.ok) && (0, Bb.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: bb.type
            }), hb(ub)
          },
          Yb = Ob.b.subscribe("lobbyManage", (bb => {
            const hb = function(bb, ub) {
              var hb;
              return null !== (hb = null === bb || void 0 === bb ? void 0 : bb.results.find((bb => bb.requestId === ub))) && void 0 !== hb ? hb : null
            }(bb, ub);
            null !== hb && Lb(hb)
          })),
          Sb = setTimeout((() => {
            Lb(null)
          }), Ub);
        Gb.gameBridge.send("lobbyManage", {
          ...bb,
          requestId: ub
        })
      }))
    }
    const Sb = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class ab {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yb;
        this.onChange = bb, this.sendAction = ub, this.pending = new Map, this.statuses = new Map
      }
      send(bb, ub, hb) {
        var Bb;
        return this.statuses.delete(ub), this.pending.set(ub, (null !== (Bb = this.pending.get(ub)) && void 0 !== Bb ? Bb : 0) + 1), this.sendAction(bb).then((bb => {
          var Bb;
          const Ob = null !== bb && void 0 !== bb ? bb : {
              requestId: -1,
              ok: !1,
              message: Sb
            },
            Gb = (null !== (Bb = this.pending.get(ub)) && void 0 !== Bb ? Bb : 1) - 1;
          Gb > 0 ? this.pending.set(ub, Gb) : this.pending.delete(ub);
          const Ub = !Ob.ok || Ob.message.length > 0 ? Ob.message : null === hb ? null : [hb];
          return null !== Ub && this.statuses.set(ub, {
            ok: Ob.ok,
            text: Ub,
            until: Date.now() + 4e3
          }), this.onChange(), Ob
        }))
      }
      show(bb, ub) {
        this.statuses.set(bb, {
          ...ub,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(bb) {
        for (const [ub, hb] of this.statuses) hb.until <= bb && this.statuses.delete(ub)
      }
      nextDeadline() {
        let bb = null;
        for (const hb of this.statuses.values()) {
          var ub;
          bb = Math.min(null !== (ub = bb) && void 0 !== ub ? ub : 1 / 0, hb.until)
        }
        return bb
      }
      statusOf(bb, ub) {
        const hb = this.statuses.get(bb);
        return !hb || hb.until <= ub ? null : {
          ok: hb.ok,
          text: hb.text
        }
      }
      isPending(bb) {
        return this.pending.has(bb)
      }
    }
  },
  36166: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Sb,
      f: () => Yb
    });
    var Bb = hb(568),
      Ob = hb(1811),
      Gb = hb(1544),
      Ub = hb(86),
      Lb = hb(1158);

    function Yb(bb, ub, hb) {
      return Ub.featureFlags.useSocialFeatures && bb && null === (0, Lb.d)(ub, hb)
    }

    function Sb(bb, ub) {
      var hb, Ub;
      const Lb = Gb.b.getSocialState().friends.find((bb => bb.name.toLowerCase() === ub.toLowerCase())),
        Yb = Ob.gameBridge.latest("players").byId[bb],
        Sb = void 0 !== Yb && Yb.name === ub,
        ab = Sb && null !== (hb = Yb.cosmetics) && void 0 !== hb ? hb : void 0,
        Hb = Lb && ab ? {
          ...Lb,
          cosmetics: ab
        } : Lb;
      return {
        playerSocialPreview: null !== Hb && void 0 !== Hb ? Hb : {
          isError: !1,
          name: ub,
          ranks: Sb ? [...Yb.ranks] : [],
          cosmetics: null !== ab && void 0 !== ab ? ab : {},
          nameColour: null !== (Ub = null === ab || void 0 === ab ? void 0 : ab.nameColour) && void 0 !== Ub ? Ub : Bb.d,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== Lb
      }
    }
  },
  36364: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Hb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(1585),
      Lb = hb(1357),
      Yb = hb(1242),
      Sb = hb(966),
      ab = hb(1007);

    function Hb(bb) {
      let {
        label: ub,
        icon: hb,
        placeholder: Ob,
        onSubmit: Hb
      } = bb;
      const wb = (0, Bb.useRef)(null),
        [Zb, Xb] = (0, Bb.useState)(""),
        [pb, ob] = (0, Bb.useState)("Enter"),
        [Ab, lb] = (0, Bb.useState)(null);
      (0, Bb.useEffect)((() => {
        if ("Success" !== pb && "Error" !== pb) return;
        const bb = setTimeout((() => {
          "Success" === pb && wb.current && (wb.current.value = "", Xb("")), ob("Enter")
        }), "Success" === pb ? 1e3 : 4e3);
        return () => {
          clearTimeout(bb)
        }
      }), [pb]);
      const Kb = () => {
        const bb = Zb.trim();
        "" !== bb && "Enter" === pb && (ob("Loading"), Hb(bb).then((bb => {
          wb.current && ("error" in bb ? null === bb.error ? ob("Enter") : (lb(bb.error), ob("Error")) : ob("Success"))
        })))
      };
      return (0, ab.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: bb => {
          bb.target === wb.current && "Escape" !== bb.key && bb.stopPropagation()
        },
        children: [(0, ab.jsxs)("div", {
          className: Gb()("AddFriendBodyOverlay", `AddFriendBodyOverlay${pb}`),
          children: ["Loading" === pb && (0, ab.jsx)(Yb.c, {}), "Success" === pb && (0, ab.jsx)(Sb.e, {
            name: "check"
          }), "Error" === pb && Ab]
        }), (0, ab.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, ab.jsx)(Ub.b, {
            className: "PlayerSearchInput",
            domRef: wb,
            maxLength: 32,
            placeholderText: Ob,
            ariaLabel: Ob,
            stopPropagation: !1,
            onValueChange: bb => {
              Xb(bb)
            },
            onEnter: Kb
          }), (0, ab.jsxs)(Lb.e, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== pb || "" === Zb.trim(),
            onClick: Kb,
            children: [(0, ab.jsx)(Sb.e, {
              name: hb
            }), " ", ub]
          })]
        })]
      })
    }
  },
  36344: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Hb
    });
    var Bb = hb(49),
      Ob = hb(958),
      Gb = hb.n(Ob),
      Ub = hb(1095),
      Lb = hb(966),
      Yb = hb(1007);
    const Sb = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      ab = ["unlisted", "public", "whitelist", "private"];

    function Hb(bb) {
      let {
        visibility: ub,
        onPick: hb
      } = bb;
      const {
        t: Ob
      } = (0, Ub.K)(), Hb = (0, Bb.useRef)([]);
      return (0, Yb.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Ob("worldSocial:whoCanJoin"),
        children: ab.map(((bb, Bb) => {
          const Ub = bb === ub;
          return (0, Yb.jsxs)("button", {
            ref: bb => {
              Hb.current[Bb] = bb
            },
            type: "button",
            className: Gb()("WorldSocialTile", {
              WorldSocialTileSelected: Ub
            }),
            "aria-pressed": Ub,
            tabIndex: Ub ? 0 : -1,
            onKeyDown: bb => {
              ((bb, ub) => {
                const hb = "ArrowRight" === bb.key || "ArrowDown" === bb.key ? 1 : "ArrowLeft" === bb.key || "ArrowUp" === bb.key ? -1 : 0;
                var Bb;
                0 !== hb && (bb.preventDefault(), null === (Bb = Hb.current[(ub + hb + ab.length) % ab.length]) || void 0 === Bb || Bb.focus())
              })(bb, Bb)
            },
            onClick: () => {
              hb(bb)
            },
            children: [(0, Yb.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, Yb.jsx)(Lb.e, {
                name: Sb[bb]
              })
            }), (0, Yb.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, Yb.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Ob(`worldSocial:${bb}`)
              }), (0, Yb.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Ob(`worldSocial:${bb}Description`)
              })]
            })]
          }, bb)
        }))
      })
    }
  },
  36356: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb
    });
    var Bb = hb(1095),
      Ob = hb(2468),
      Gb = hb(4123),
      Ub = hb(1007);

    function Lb(bb) {
      let {
        gH: ub,
        children: hb,
        ...Lb
      } = bb;
      const {
        t: Yb
      } = (0, Bb.K)();
      return (0, Ub.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          ub.onChange(!ub.on)
        },
        children: (0, Ub.jsx)(Ob.f, {
          ...Lb,
          opensProfileCard: !1,
          children: (0, Ub.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: bb => {
              bb.stopPropagation()
            },
            children: [hb, (0, Ub.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, Ub.jsx)(Gb.d, {
                checked: ub.on,
                disabled: !1,
                ariaLabel: Yb("worldSocial:letJoin", {
                  playerName: Lb.playerSocialPreview.name
                }),
                onChange: bb => {
                  ub.onChange(bb.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36342: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Xb
    });
    var Bb = hb(49),
      Ob = hb(1095),
      Gb = hb(1746),
      Ub = hb(86),
      Lb = hb(13),
      Yb = hb(1380),
      Sb = hb(2500),
      ab = hb(8978),
      Hb = hb(1357),
      wb = hb(966),
      Zb = hb(1007);

    function Xb(bb) {
      let {
        worldCode: ub,
        message: hb
      } = bb;
      const {
        t: Xb
      } = (0, Ob.K)(), {
        isTouchScreen: pb
      } = (0, Lb.j)(["isTouchScreen"]), ob = Ub.featureFlags.canUseInviteLinks, Ab = (0, ab.k)(ob && null === hb), [lb, Kb] = (0, Sb.h)(), Wb = (0, Bb.useRef)(null);
      if (null !== hb) return (0, Zb.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Zb.jsx)(wb.e, {
          name: "lock"
        }), (0, Zb.jsx)("span", {
          children: hb
        })]
      });
      const Cb = ob ? Ab : ub,
        db = pb && ob && (0, Sb.b)();
      return (0, Zb.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!ob && (0, Zb.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Xb("worldSocial:worldCode")
        }), (0, Zb.jsx)("input", {
          ref: Wb,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Cb && void 0 !== Cb ? Cb : "",
          "aria-label": Xb(ob ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: bb => {
            bb.currentTarget.select()
          }
        }), (0, Zb.jsxs)(Hb.e, {
          className: "WorldSocialCopy",
          disabled: null === Cb,
          onClick: () => {
            null !== Cb && (0, Sb.f)(Cb, {
              useShareSheet: db,
              onOutcome: bb => {
                if ((0, Yb.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== bb || ob ? bb : "code"
                  }), "copied" === bb) Kb();
                else if ("failed" === bb) {
                  var ub;
                  null === (ub = Wb.current) || void 0 === ub || ub.focus(), Gb.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Zb.jsx)(wb.e, {
            name: lb ? "check" : db ? "up-from-bracket" : "copy"
          }), " ", Xb(lb ? "general:copied" : db ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36351: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Zb,
      g: () => wb,
      j: () => Hb
    });
    var Bb = hb(568),
      Ob = hb(1095),
      Gb = hb(1544),
      Ub = hb(2468),
      Lb = hb(2418),
      Yb = hb(1357),
      Sb = hb(36356),
      ab = hb(1007);

    function Hb(bb, ub) {
      var hb;
      return {
        isError: !1,
        name: bb,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== ub && void 0 !== ub ? ub : {},
        nameColour: null !== (hb = null === ub || void 0 === ub ? void 0 : ub.nameColour) && void 0 !== hb ? hb : Bb.d,
        location: {
          status: "offline"
        }
      }
    }

    function wb(bb) {
      let {
        player: ub,
        isFriend: hb = !1,
        status: Bb,
        showLocation: Yb = void 0 === Bb,
        gH: Hb,
        onSendFriendRequest: wb,
        actions: Zb,
        zIndex: Xb
      } = bb;
      const {
        t: pb
      } = (0, Ob.K)();
      let ob = Bb;
      null !== Hb && void 0 !== Hb && Hb.on && (ob = (0, ab.jsxs)(ab.Fragment, {
        children: [null !== Bb && void 0 !== Bb ? Bb : (0, ab.jsx)(Lb.e, {
          socialPreview: ub
        }), (0, ab.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", pb("worldSocial:canJoin")]
        })]
      }));
      const Ab = {
        playerSocialPreview: ub,
        isFriend: hb,
        hideFriendBadge: !0,
        onFriendRemoved: hb ? bb => {
          Gb.b.removeFriendFromState(bb)
        } : void 0,
        status: ob,
        showLocation: Yb,
        onSendFriendRequest: wb,
        zIndex: Xb
      };
      return Hb ? (0, ab.jsx)(Sb.c, {
        ...Ab,
        gH: Hb,
        children: Zb
      }) : (0, ab.jsx)(Ub.f, {
        ...Ab,
        opensProfileCard: !1,
        children: Zb || void 0
      })
    }

    function Zb(bb) {
      let {
        row: ub,
        gH: hb,
        canInvite: Bb,
        invited: Gb,
        onInvite: Ub,
        zIndex: Lb
      } = bb;
      const {
        t: Sb
      } = (0, Ob.K)(), Hb = "online" === ub.place ? Yb.e : Yb.g;
      return (0, ab.jsx)(wb, {
        player: ub.friend,
        isFriend: !0,
        status: "here" === ub.place ? Sb("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        gH: hb,
        zIndex: Lb,
        actions: Bb && (0, ab.jsx)(Hb, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: Gb,
          onClick: Ub,
          ariaLabel: `${Sb("worldSocial:invite")} ${ub.friend.name}`,
          children: Sb(Gb ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36329: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Yb,
      c: () => Ub,
      d: () => Sb
    });
    var Bb = hb(49),
      Ob = hb(4353),
      Gb = hb(1746);

    function Ub(bb) {
      const ub = {
        lobbyName: bb,
        answer: null,
        response: Ob.d.getSocialSettings(bb)
      };
      return ub.response.then((bb => {
        ub.answer = bb
      })), ub
    }
    const Lb = new Map;

    function Yb(bb) {
      Lb.set(bb.lobbyName, bb)
    }

    function Sb(bb) {
      const [ub] = (0, Bb.useState)((() => function(bb) {
        var ub;
        const hb = null !== (ub = Lb.get(bb)) && void 0 !== ub ? ub : null;
        return null !== hb && void 0 !== hb && hb.answer && "error" in hb.answer ? null : hb
      }(bb))), [hb, Ub] = (0, Bb.useState)((() => null !== ub && void 0 !== ub && ub.answer && "settings" in ub.answer ? ub.answer.settings : null)), [Yb, Sb] = (0, Bb.useState)(!0), [ab, Hb] = (0, Bb.useState)(null !== hb), wb = (0, Bb.useRef)(hb);
      wb.current = hb;
      const Zb = (0, Bb.useRef)(0),
        Xb = (0, Bb.useRef)(0),
        pb = (0, Bb.useRef)(!1),
        ob = (0, Bb.useRef)(!0),
        Ab = (0, Bb.useCallback)((async ub => {
          const hb = ++Zb.current,
            Bb = await (null !== ub && void 0 !== ub ? ub : Ob.d.getSocialSettings(bb));
          ob.current && hb === Zb.current && (Hb(!0), Sb(!1), "error" in Bb || Ub(Bb.settings))
        }), [bb]),
        lb = (0, Bb.useCallback)((() => {
          Sb(!0), Ab()
        }), [Ab]),
        Kb = (0, Bb.useCallback)((() => {
          Xb.current > 0 ? pb.current = !0 : Ab()
        }), [Ab]);
      (0, Bb.useEffect)((() => (ob.current = !0, Lb.delete(bb), Sb(!0), Ab(null === ub || void 0 === ub ? void 0 : ub.response), () => {
        ob.current = !1
      })), [Ab, bb, ub]);
      const Wb = bb => {
        Zb.current++, Sb(!1), wb.current = bb, Ub(bb)
      };
      return {
        settings: hb,
        loading: Yb,
        answered: ab,
        retry: lb,
        refresh: Kb,
        change: async function(ub, hb) {
          let {
            quiet: Bb = !1,
            onAnswer: Ub
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const Lb = wb.current;
          if (null === Lb) return !1;
          Wb(hb(Lb)), Xb.current > 0 && (pb.current = !0), Xb.current++;
          const Yb = await Ob.d.setSocialSettings(bb, ub);
          Xb.current--;
          const Sb = !("error" in Yb);
          if (!ob.current) return Sb;
          if (null === Ub || void 0 === Ub || Ub(Yb), Bb);
          else if ("error" in Yb) Gb.f.showMessage({
            translationKey: Yb.error
          });
          else
            for (const bb of Yb.notFound) Gb.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: bb
              }
            });
          if (Xb.current > 0) return Sb;
          const ab = pb.current;
          return pb.current = !1, !ab && "settings" in Yb ? Wb(Yb.settings) : (ab || Wb(Lb), Ab()), Sb
        }
      }
    }
  },
  36373: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      f: () => Gb
    });
    var Bb = hb(148);
    const Ob = new Map;

    function Gb(bb, ub) {
      var hb;
      const Bb = null !== (hb = Ob.get(bb)) && void 0 !== hb ? hb : new Map;
      Bb.set(ub, Date.now()), Ob.set(bb, Bb)
    }

    function Ub(bb) {
      const ub = Ob.get(bb);
      if (!ub) return [];
      const hb = Date.now();
      for (const [Ob, Gb] of ub) hb - Gb >= Bb.o && ub.delete(Ob);
      return [...ub.keys()]
    }
  },
  36338: (bb, ub, hb) => {
    function Bb(bb, ub) {
      const hb = ub.toLowerCase();
      for (const Bb of bb)
        if (Bb.toLowerCase() === hb) return !0;
      return !1
    }

    function Ob(bb, ub, hb) {
      const Ob = [],
        Gb = [],
        Ub = [];
      for (const Lb of bb) !Lb.isError && Lb.name && ("inGame" === Lb.location.status && Lb.location.inLobbyName === ub || Bb(hb, Lb.name) ? Gb.push({
        friend: Lb,
        place: "here"
      }) : "offline" === Lb.location.status ? Ub.push({
        friend: Lb,
        place: "offline"
      }) : Ob.push({
        friend: Lb,
        place: "online"
      }));
      return [...Ob, ...Gb, ...Ub]
    }

    function Gb(bb, ub, hb) {
      const Ob = [],
        Gb = bb.flatMap((bb => "here" === bb.place ? [bb.friend.name] : []));
      for (const Ub of [...Gb, ...ub]) Bb(Ob, Ub) || Bb(hb, Ub) || Ob.push(Ub);
      return Ob
    }

    function Ub(bb, ub) {
      return null === bb || void 0 === bb || !bb.canManage || Bb(bb.whitelist, ub) ? "none" : "whitelist" === bb.visibility ? "required" : "quiet"
    }

    function Lb(bb) {
      if (null === bb) return !0;
      const {
        visibility: ub
      } = bb;
      return "public" === ub || "unlisted" === ub || "whitelist" === ub && bb.canManage
    }

    function Yb(bb, ub, hb) {
      if (hb) {
        const hb = ub.filter((ub => !Bb(bb.whitelist, ub)));
        return {
          ...bb,
          whitelist: [...bb.whitelist, ...hb]
        }
      }
      return {
        ...bb,
        whitelist: bb.whitelist.filter((bb => !Bb(ub, bb)))
      }
    }

    function Sb(bb, ub) {
      const hb = [];
      for (let Bb = 0; Bb < bb.length; Bb += ub) hb.push(bb.slice(Bb, Bb + ub));
      return hb
    }
    hb.d(ub, {
      d: () => Lb,
      g: () => Gb,
      k: () => Ob,
      m: () => Bb,
      p: () => Sb,
      s: () => Ub,
      w: () => Yb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);