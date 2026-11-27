export const id = 254;
export const ids = [254];
export const modules = {
  42938: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      LobbyManageView: () => nS
    });
    var Zr = Qr(72),
      Wr = Qr(1605),
      ar = Qr(38477),
      jr = Qr(3418),
      Ir = Qr(3421),
      fr = Qr(3404),
      Er = Qr(38115);

    function pr() {
      const [rr, Sr] = (0, Zr.useState)(new Map);
      return {
        get: Sr => rr.get(Sr),
        hold: (0, Zr.useCallback)(((rr, Qr, Zr) => {
          Sr((Sr => new Map(Sr).set(rr, Qr))), Zr.then((() => {
            Sr((Sr => {
              const Qr = new Map(Sr);
              return Qr.delete(rr), Qr
            }))
          }))
        }), [])
      }
    }
    var xr = Qr(1155),
      mr = Qr.n(xr),
      Nr = Qr(1251),
      Ur = Qr(1448),
      tr = Qr(1444),
      hr = Qr(3713),
      zr = Qr(4205),
      Yr = Qr(4681);
    var nr = Qr(2128),
      er = Qr(1576),
      Kr = Qr(38122),
      yr = Qr(3711),
      Br = Qr(3846),
      Tr = Qr(38257),
      vr = Qr(4323),
      Or = Qr(379);

    function Lr(rr, Sr, Qr) {
      return Sr.map((Sr => {
        if ("string" === typeof Sr) return Sr;
        const Zr = "str" in Sr ? Sr.str : Sr;
        return "string" === typeof Zr ? Zr : "entityName" in Zr ? Zr.entityName : "translationKey" in Zr ? rr(Zr.translationKey, (0, Nr.p)(Zr.params, Qr)) : ""
      })).join("")
    }

    function lr(rr, Sr, Qr, Zr, Wr) {
      return Wr - Zr < 6e4 ? rr(`${Qr}JustNow`) : rr(Qr, {
        time: (0, Or.W)((0, Nr.m)(Sr, Qr), Zr, Wr)
      })
    }
    var Xr = Qr(2057),
      Pr = Qr(1804),
      Hr = Qr(1338);

    function qr(rr) {
      let {
        status: Sr
      } = rr;
      return (0, Hr.jsx)("span", {
        className: mr()("LobbyManageStatus", {
          LobbyManageStatusRefused: !Sr.ok
        }),
        children: (0, Hr.jsx)(Xr.c, {
          text: Sr.text
        })
      })
    }

    function Rr(rr) {
      let {
        names: Sr,
        cap: Qr,
        filterFrom: Wr,
        moreLabel: ar,
        reveal: jr = null,
        renderRow: Ir
      } = rr;
      const {
        t: fr
      } = (0, Nr.E)(), [Er, pr] = (0, Zr.useState)(!1), [xr, mr] = (0, Zr.useState)(""), tr = Er || null !== jr && Sr.indexOf(jr) >= Qr, zr = (tr || Sr.length <= Qr) && null !== Wr && Sr.length > Wr, Yr = xr.trim().toLowerCase();
      let nr = tr ? Sr : Sr.slice(0, Qr);
      return zr && "" !== Yr && (nr = nr.filter((rr => rr.toLowerCase().includes(Yr)))), (0, Hr.jsxs)(Hr.Fragment, {
        children: [zr && (0, Hr.jsx)(Pr.b, {
          className: "LobbyManageFilter",
          placeholderText: fr("lobbyManage:findName"),
          ariaLabel: fr("lobbyManage:findName"),
          onValueChange: rr => {
            mr(rr)
          }
        }), nr.length > 0 && (0, Hr.jsx)("div", {
          className: "PlayerRows",
          children: nr.map(((rr, Sr) => Ir(rr, nr.length - Sr)))
        }), !tr && Sr.length > Qr && (0, Hr.jsx)("div", {
          className: "LobbyManageMore",
          children: (0, Hr.jsx)(hr.c, {
            label: (0, Hr.jsxs)(Hr.Fragment, {
              children: [ar, " ", (0, Hr.jsx)(Ur.c, {
                name: "angle-down"
              })]
            }),
            onClick: () => {
              pr(!0)
            }
          })
        })]
      })
    }

    function gr(rr) {
      let {
        value: Sr,
        placeholder: Qr,
        ariaLabel: Wr,
        maxLength: ar,
        wide: jr = !1,
        onSave: Ir
      } = rr;
      const fr = (0, Zr.useRef)(null),
        [Er, pr] = (0, Zr.useState)(0),
        xr = (0, Zr.useRef)(!0),
        Nr = (0, Zr.useRef)(null),
        Ur = (0, Zr.useRef)({
          value: Sr,
          onSave: Ir
        });
      Ur.current = {
        value: Sr,
        onSave: Ir
      };
      const tr = () => {
        const rr = Nr.current;
        Nr.current = null, null !== rr && rr !== Ur.current.value && Ur.current.onSave(rr).then((() => {
          xr.current && pr((rr => rr + 1))
        }))
      };
      return (0, Zr.useEffect)((() => {
        null === Nr.current && fr.current && (fr.current.value = Sr)
      }), [Sr, Er]), (0, Zr.useEffect)((() => () => {
        xr.current = !1, tr()
      }), []), (0, Hr.jsx)("div", {
        className: mr()("LobbyManageRuleInput", {
          LobbyManageRuleInputWide: jr
        }),
        onBlur: tr,
        children: (0, Hr.jsx)(Pr.b, {
          domRef: fr,
          defaultValue: Sr,
          placeholderText: Qr,
          ariaLabel: Wr,
          maxLength: ar,
          onValueChange: rr => {
            Nr.current = rr
          },
          onEnter: tr
        })
      })
    }
    const Cr = ["mod", "coOwner"],
      Mr = {
        coOwner: "lobbyManage:roleCanCoOwner",
        mod: "lobbyManage:roleCanMod",
        coder: "lobbyManage:roleCanCoder",
        builder: "lobbyManage:roleCanBuilder"
      };

    function Gr(rr) {
      var Sr, Qr, ar;
      let {
        name: jr,
        place: Ir,
        openedIn: fr,
        isYou: Er,
        manage: xr,
        hiddenNames: mr,
        zIndex: tr
      } = rr;
      const {
        t: hr,
        selectedLanguage: zr
      } = (0, Nr.E)(), [Yr, nr] = (0, Zr.useState)(null), {
        state: Or
      } = xr, Xr = `player:${jr}`, Pr = (0, Kr.j)(Ir, null !== Or.gamemodes), Rr = xr.statusOf(Xr), gr = xr.isPending(Xr), Gr = pr(), kr = Date.now(), Ar = rr => {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = (rr => Or.roles.find((Sr => Sr.role === rr)))(rr)) || void 0 === Qr ? void 0 : Qr.label) && void 0 !== Sr ? Sr : rr
      }, Vr = rr => {
        const Sr = Mr[rr];
        return void 0 === Sr ? void 0 : hr(Sr)
      }, ir = "here" === Ir.section || "away" === Ir.section ? Ir.player : null, wr = null !== (Sr = Gr.get("role")) && void 0 !== Sr ? Sr : null === ir || void 0 === ir ? void 0 : ir.role, cr = "here" === Ir.section ? Ir.player.id : null, {
        playerSocialPreview: Fr,
        isFriend: or
      } = null === cr ? {
        playerSocialPreview: (0, Tr.g)(jr, null),
        isFriend: !1
      } : (0, Br.h)(cr, jr), br = function() {
        xr.send(...arguments)
      }, Jr = (rr, Sr) => {
        Gr.hold("role", rr, xr.send({
          type: "setRole",
          name: jr,
          role: rr
        }, Xr, Sr))
      };
      let Dr = null;
      if ("ban" === (null === Yr || void 0 === Yr ? void 0 : Yr.kind)) Dr = hr("lobbyManageEntry:banConfirm", {
        playerName: jr
      });
      else if ("role" === (null === Yr || void 0 === Yr ? void 0 : Yr.kind)) {
        var dr;
        Dr = `${hr("lobbyManage:roleConfirm",{playerName:jr,role:Ar(Yr.role)})} ${null!==(dr=Vr(Yr.role))&&void 0!==dr?dr:""}`
      } else if (Rr) Dr = (0, Hr.jsx)(qr, {
        status: Rr
      });
      else if (Er) Dr = hr("lobbyManage:you");
      else if ("here" === Ir.section) "none" === Ir.player.role && kr - Ir.player.at < 6e5 && (Dr = lr(hr, zr.code, "lobbyManage:joinedAgo", Ir.player.at, kr));
      else if ("away" === Ir.section) {
        if (Ir.player.at > 0) {
          const rr = "kicked" === Ir.player.why ? "lobbyManage:kickedAgo" : "lobbyManage:leftAgo";
          Dr = lr(hr, zr.code, rr, Ir.player.at, kr)
        }
      } else "banned" === Ir.section ? null !== Ir.bannedAt && (Dr = lr(hr, zr.code, "lobbyManage:bannedAgo", Ir.bannedAt, kr)) : "banned" === fr && (Dr = hr("lobbyManageEntry:unbanned"));
      return (0, Hr.jsx)("div", {
        className: "LobbyManagePlayerRow",
        "data-lobby-manage-row": jr,
        children: (0, Hr.jsxs)(yr.f, {
          playerSocialPreview: Fr,
          isFriend: or,
          status: Dr,
          opensProfileCard: !Er && (0, Br.i)(!0, jr, mr),
          zIndex: tr,
          children: [null !== Yr && (0, Hr.jsxs)("div", {
            className: "LobbyManageButtons",
            children: ["ban" === Yr.kind && (0, Hr.jsxs)(er.L, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.ban",
                value: "row"
              },
              onClick: () => {
                nr(null), br({
                  type: "ban",
                  name: jr
                }, Xr)
              },
              children: [(0, Hr.jsx)(Ur.c, {
                name: "gavel"
              }), (0, Hr.jsx)("span", {
                className: "LobbyManageButtonLabel",
                children: hr("lobbyManageEntry:ban")
              })]
            }), "role" === Yr.kind && (0, Hr.jsx)(er.h, {
              className: "LobbyManageIconButton SmallTextLight",
              analyticsClick: {
                id: "lobby_manage.set_role",
                value: Yr.role
              },
              onClick: () => {
                nr(null), Jr(Yr.role)
              },
              children: hr("lobbyManage:makeRole", {
                role: Ar(Yr.role)
              })
            }), (0, Hr.jsx)(er.k, {
              className: "LobbyManageIconButton SmallTextLight",
              onClick: () => {
                nr(null)
              },
              children: hr("general:cancel")
            })]
          }), null === Yr && (0, Hr.jsxs)(Hr.Fragment, {
            children: [(0, Hr.jsxs)("div", {
              className: "LobbyManageChoices",
              children: [Pr.gamemode && null !== ir && (0, Hr.jsx)(vr.c, {
                options: (null !== (Qr = Or.gamemodes) && void 0 !== Qr ? Qr : []).map((rr => ({
                  value: rr.value,
                  label: Lr(hr, rr.label, mr)
                }))),
                value: null !== (ar = Gr.get("gamemode")) && void 0 !== ar ? ar : ir.gamemode,
                disabled: gr,
                revealOnOpen: !0,
                onChange: rr => {
                  (0, Wr.reportAnalyticsClick)({
                    id: "lobby_manage.set_gamemode",
                    value: rr.value
                  }), Gr.hold("gamemode", rr.value, xr.send({
                    type: "setGamemode",
                    name: jr,
                    gamemode: rr.value
                  }, Xr))
                }
              }), Pr.roles.length > 0 && null !== ir && (0, Hr.jsx)(vr.c, {
                options: [...Or.roles].reverse().filter((rr => Pr.roles.includes(rr.role))).map((rr => ({
                  value: rr.role,
                  label: rr.label
                }))),
                value: "none" === wr ? void 0 : wr,
                placeholder: hr("lobbyManageEntry:giveRole"),
                disabled: gr,
                revealOnOpen: !0,
                onChange: rr => {
                  var Sr;
                  (Sr = rr.value) !== (null === ir || void 0 === ir ? void 0 : ir.role) && (Cr.includes(Sr) ? nr({
                    kind: "role",
                    role: Sr
                  }) : ((0, Wr.reportAnalyticsClick)({
                    id: "lobby_manage.set_role",
                    value: Sr
                  }), Jr(Sr, Vr(Sr))))
                }
              }), null !== Pr.fixedRole && (0, Hr.jsx)("div", {
                className: "LobbyManageChoiceFixed",
                children: Ar(Pr.fixedRole)
              })]
            }), (0, Hr.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [Pr.kick && (0, Hr.jsxs)(er.k, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${hr("lobbyManageEntry:kick")} ${jr}`,
                disabled: gr,
                analyticsClick: {
                  id: "lobby_manage.kick",
                  value: "row"
                },
                onClick: () => {
                  br({
                    type: "kick",
                    name: jr
                  }, Xr)
                },
                children: [(0, Hr.jsx)(Ur.c, {
                  name: "person-falling-burst"
                }), (0, Hr.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: hr("lobbyManageEntry:kick")
                })]
              }), Pr.ban && (0, Hr.jsxs)(er.O, {
                className: "LobbyManageOutlineButton SmallTextLight",
                ariaLabel: `${hr("lobbyManageEntry:ban")} ${jr}`,
                disabled: gr,
                padDestructive: !0,
                onClick: () => {
                  nr({
                    kind: "ban"
                  })
                },
                children: [(0, Hr.jsx)(Ur.c, {
                  name: "gavel"
                }), (0, Hr.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: hr("lobbyManageEntry:ban")
                })]
              }), Pr.unban && (0, Hr.jsxs)(er.k, {
                className: "LobbyManageIconButton SmallTextLight",
                ariaLabel: `${hr("lobbyManageEntry:unban")} ${jr}`,
                disabled: gr,
                analyticsClick: {
                  id: "lobby_manage.unban"
                },
                onClick: () => {
                  br({
                    type: "unban",
                    name: jr
                  }, Xr)
                },
                children: [(0, Hr.jsx)(Ur.c, {
                  name: "user-unlock"
                }), (0, Hr.jsx)("span", {
                  className: "LobbyManageButtonLabel",
                  children: hr("lobbyManageEntry:unban")
                })]
              })]
            })]
          })]
        })
      })
    }

    function kr(rr) {
      var Sr, Qr, Wr, ar;
      let {
        manage: jr,
        focusRequest: Ir,
        onFocused: fr
      } = rr;
      const {
        t: Er
      } = (0, Nr.E)(), pr = (0, nr.j)("players"), xr = (0, nr.j)("hiddenPlayerNames"), mr = (0, Zr.useRef)(null), {
        state: tr
      } = jr, zr = null === pr.localId ? null : null !== (Sr = null === (Qr = pr.byId[pr.localId]) || void 0 === Qr ? void 0 : Qr.name) && void 0 !== Sr ? Sr : null, [Yr] = (0, Zr.useState)((() => (0, Kr.x)(tr, zr))), yr = (0, Kr.r)(Yr, tr, zr), [Br, Tr] = (0, Zr.useState)(!1), vr = (0, Kr.f)(tr, zr), Or = jr.statusOf("kickAll");
      (0, Zr.useEffect)((() => {
        var rr, Sr;
        if (null === Ir) return;
        const Qr = null === (rr = mr.current) || void 0 === rr ? void 0 : rr.querySelector(`[data-lobby-manage-row="${CSS.escape(Ir.name)}"]`);
        null === Qr || void 0 === Qr || Qr.scrollIntoView({
          block: "center"
        }), null === Qr || void 0 === Qr || null === (Sr = Qr.querySelector(".ProfilePreview")) || void 0 === Sr || Sr.focus({
          preventScroll: !0
        }), fr(Ir.seq)
      }), [null === Ir || void 0 === Ir ? void 0 : Ir.seq]);
      const Lr = rr => (Sr, Qr) => (0, Hr.jsx)(Gr, {
        name: Sr,
        place: (0, Kr.d)(tr, Sr),
        openedIn: rr,
        isYou: Sr === zr,
        manage: jr,
        hiddenNames: xr,
        zIndex: Qr
      }, Sr);
      return (0, Hr.jsxs)("div", {
        ref: mr,
        className: "LobbyManagePage",
        children: [yr.here.length > 0 && (0, Hr.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Hr.jsxs)("div", {
            className: "LobbyManageBoxHeading",
            children: [(0, Hr.jsx)(hr.c, {
              label: Er("lobbyManage:here"),
              meta: tr.here.length
            }), vr >= Kr.u && !Br && (0, Hr.jsxs)(er.O, {
              className: "LobbyManageTitleAction SmallTextLight",
              padDestructive: !0,
              disabled: jr.isPending("kickAll"),
              onClick: () => {
                Tr(!0)
              },
              children: [(0, Hr.jsx)(Ur.c, {
                name: "person-falling-burst"
              }), " ", Er("lobbyManage:kickAll")]
            })]
          }), Br && vr >= Kr.u && (0, Hr.jsxs)("div", {
            className: "LobbyManageConfirm",
            children: [(0, Hr.jsx)("span", {
              className: "LobbyManageConfirmText",
              children: Er("lobbyManage:kickAllConfirm", {
                count: vr
              })
            }), (0, Hr.jsxs)("div", {
              className: "LobbyManageButtons",
              children: [(0, Hr.jsx)(er.L, {
                className: "LobbyManageIconButton SmallTextLight",
                analyticsClick: {
                  id: "lobby_manage.kick_all"
                },
                onClick: () => {
                  Tr(!1), jr.send({
                    type: "kickAll"
                  }, "kickAll")
                },
                children: Er("lobbyManage:kickAll")
              }), (0, Hr.jsx)(er.k, {
                className: "LobbyManageIconButton SmallTextLight",
                onClick: () => {
                  Tr(!1)
                },
                children: Er("general:cancel")
              })]
            })]
          }), Or && (0, Hr.jsx)("div", {
            className: "LobbyManageBoxStatus",
            children: (0, Hr.jsx)(qr, {
              status: Or
            })
          }), (0, Hr.jsx)(Rr, {
            names: yr.here,
            cap: yr.here.length,
            filterFrom: 20,
            moreLabel: "",
            renderRow: Lr("here")
          })]
        }), yr.away.length > 0 && (0, Hr.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Hr.jsx)(hr.c, {
            label: Er("lobbyManage:notHere"),
            meta: yr.away.length
          }), (0, Hr.jsx)(Rr, {
            names: yr.away,
            cap: 5,
            filterFrom: null,
            moreLabel: Er("lobbyManage:allCount", {
              count: yr.away.length
            }),
            reveal: null !== (Wr = null === Ir || void 0 === Ir ? void 0 : Ir.name) && void 0 !== Wr ? Wr : null,
            renderRow: Lr("away")
          })]
        }), yr.banned.length > 0 && (0, Hr.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Hr.jsx)(hr.c, {
            label: Er("lobbyManage:banned"),
            meta: yr.banned.length
          }), (0, Hr.jsx)(Rr, {
            names: yr.banned,
            cap: 5,
            filterFrom: 20,
            moreLabel: Er("lobbyManage:allCount", {
              count: yr.banned.length
            }),
            reveal: null !== (ar = null === Ir || void 0 === Ir ? void 0 : Ir.name) && void 0 !== ar ? ar : null,
            renderRow: Lr("banned")
          })]
        })]
      })
    }
    var Ar = Qr(5384),
      Vr = Qr(1761),
      ir = Qr(38237),
      wr = Qr(38252),
      cr = Qr(38246),
      Fr = Qr(38240),
      or = Qr(38275),
      br = Qr(38266),
      Jr = Qr(38272);

    function Dr(rr) {
      const Sr = new Set;
      for (const Qr of rr) Sr.add(Qr.toLowerCase());
      return Sr
    }

    function dr(rr) {
      var Sr, Qr;
      let {
        state: Wr,
        lobbyName: ar,
        listed: jr,
        isListed: Ir,
        FY: fr,
        zB: Er,
        statusOf: pr
      } = rr;
      const {
        t: xr,
        selectedLanguage: mr
      } = (0, Nr.E)(), Ur = (0, Vr.m)(), tr = (0, nr.j)("players"), zr = null === tr.localId ? null : null !== (Sr = null === (Qr = tr.byId[tr.localId]) || void 0 === Qr ? void 0 : Qr.name) && void 0 !== Sr ? Sr : null, Yr = (0, Zr.useMemo)((() => (0, Fr.j)(Ur.friends, ar, Wr.here.map((rr => rr.name)))), [Ur.friends, ar, Wr.here]), er = new Map(Yr.map((rr => [rr.friend.name.toLowerCase(), rr]))), Kr = function(rr) {
        let {
          refused: Sr,
          listed: Qr,
          here: Zr,
          friends: Wr,
          excluded: ar
        } = rr;
        const jr = Dr(ar),
          Ir = rr => rr.filter((rr => {
            const Sr = rr.toLowerCase();
            return !jr.has(Sr) && (jr.add(Sr), !0)
          }));
        return {
          added: [],
          refused: Ir(Sr),
          listed: Ir(Qr),
          suggested: Ir([...Zr, ...Wr])
        }
      }({
        refused: Wr.refused.map((rr => rr.name)),
        listed: jr,
        here: Wr.here.map((rr => rr.name)),
        friends: Yr.flatMap((rr => "here" === rr.place ? [] : [rr.friend.name])),
        excluded: [...null === zr ? [] : [zr], ...[...Wr.here, ...Wr.away].flatMap((rr => "none" === rr.role || (0, Fr.m)(jr, rr.name) ? [] : [rr.name]))]
      }), [yr] = (0, Zr.useState)(Kr), [vr, Or] = (0, Zr.useState)([]), Lr = function(rr, Sr, Qr) {
        const Zr = Dr(Qr),
          Wr = Dr([...Qr, ...rr.refused, ...rr.listed, ...rr.suggested]),
          ar = Qr => [...rr[Qr].filter((rr => !Zr.has(rr.toLowerCase()))), ...Sr[Qr].filter((rr => {
            const Sr = rr.toLowerCase();
            return !Wr.has(Sr) && (Wr.add(Sr), !0)
          }))];
        return {
          added: [...Qr],
          refused: ar("refused"),
          listed: ar("listed"),
          suggested: ar("suggested")
        }
      }(yr, Kr, vr), Xr = (rr, Sr) => {
        var Qr, Zr;
        const ar = rr.toLowerCase(),
          jr = er.get(ar),
          Er = Wr.here.find((rr => rr.name.toLowerCase() === ar)),
          Nr = Wr.refused.find((rr => rr.name.toLowerCase() === ar)),
          Ur = null !== (Qr = null === pr || void 0 === pr ? void 0 : pr(rr)) && void 0 !== Qr ? Qr : null;
        let tr = null;
        Ur ? tr = (0, Hr.jsx)(qr, {
          status: Ur
        }) : Nr ? tr = lr(xr, mr.code, "lobbyManage:triedToJoinAgo", Nr.at, Date.now()) : jr && Er ? tr = xr("lobbyManage:friendHere") : jr ? tr = "online" === jr.place ? xr("lobbyManage:friendOnline") : xr("lobbyManage:friend") : Er && (tr = xr("lobbyManage:hereStatus"));
        let hr = null !== (Zr = null === jr || void 0 === jr ? void 0 : jr.friend) && void 0 !== Zr ? Zr : (0, Tr.g)(rr, null);
        return !jr && null !== Er && void 0 !== Er && Er.id && (hr = (0, Br.h)(Er.id, Er.name).playerSocialPreview), (0, Hr.jsx)(br.d, {
          playerSocialPreview: hr,
          isFriend: void 0 !== jr,
          hideFriendBadge: !0,
          status: tr,
          zIndex: Sr,
          lx: {
            on: Ir(rr),
            onChange: Sr => {
              fr(rr, Sr)
            }
          }
        }, ar)
      }, Pr = [...Lr.added, ...Lr.refused];
      return (0, Hr.jsxs)("div", {
        className: "LobbyManageBox",
        children: [(0, Hr.jsx)(hr.c, {
          label: xr("worldSocial:whitelist"),
          meta: jr.length
        }), (0, Hr.jsx)(Jr.d, {
          label: xr("lobbyManage:add"),
          icon: "user-check",
          placeholder: xr("socialBar:enterPlayerName"),
          onSubmit: async rr => {
            const Sr = await Er(rr);
            return Sr.ok && Or((Sr => [rr, ...Sr])), Sr
          }
        }), Pr.length > 0 && (0, Hr.jsx)("div", {
          className: "PlayerRows",
          children: Pr.map(((rr, Sr) => Xr(rr, Pr.length - Sr)))
        }), (0, Hr.jsx)(Rr, {
          names: Lr.listed,
          cap: 8,
          filterFrom: 8,
          moreLabel: xr("lobbyManage:allOnWhitelist", {
            count: Lr.listed.length
          }),
          renderRow: Xr
        }), (0, Hr.jsx)(Rr, {
          names: Lr.suggested,
          cap: 8,
          filterFrom: null,
          moreLabel: xr("lobbyManage:allCount", {
            count: Lr.suggested.length
          }),
          renderRow: Xr
        })]
      })
    }

    function sr(rr) {
      let {
        manage: Sr,
        listing: Qr
      } = rr;
      const {
        t: Zr
      } = (0, Nr.E)(), ar = (rr, Qr) => ((0, Wr.reportAnalyticsClick)({
        id: "lobby_manage.set_listing",
        value: rr
      }), Sr.send({
        type: "setListing",
        field: rr,
        value: Qr
      }, `listing:${rr}`)), jr = rr => {
        const Qr = Sr.statusOf(`listing:${rr}`);
        return Qr && !Qr.ok && (0, Hr.jsx)("div", {
          className: "LobbyManageFieldError",
          children: (0, Hr.jsx)(qr, {
            status: Qr
          })
        })
      };
      return (0, Hr.jsxs)("div", {
        className: "LobbyManageBox LobbyManageListing",
        children: [(0, Hr.jsx)(hr.c, {
          label: Zr("lobbyManage:inWorldsList")
        }), (0, Hr.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Hr.jsx)("div", {
            className: "SliderText",
            children: Zr("lobbyManage:description")
          }), (0, Hr.jsx)(gr, {
            value: Qr.description,
            ariaLabel: Zr("lobbyManage:description"),
            wide: !0,
            onSave: rr => ar("description", rr)
          })]
        }), jr("description"), (0, Hr.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Hr.jsx)("div", {
            className: "SliderText",
            children: Zr("lobbyManage:emojis")
          }), (0, Hr.jsx)(gr, {
            value: Qr.emojis,
            ariaLabel: Zr("lobbyManage:emojis"),
            onSave: rr => ar("emojis", rr)
          })]
        }), jr("emojis"), (0, Hr.jsxs)("div", {
          className: "LobbyManageRuleRow",
          children: [(0, Hr.jsx)("div", {
            className: "SliderText",
            children: Zr("lobbyManage:colour")
          }), (0, Hr.jsx)(ur, {
            value: Qr.colour,
            ariaLabel: Zr("lobbyManage:colour"),
            onSave: rr => {
              ar("colour", rr)
            }
          })]
        }), jr("colour")]
      })
    }

    function ur(rr) {
      let {
        value: Sr,
        ariaLabel: Qr,
        onSave: Wr
      } = rr;
      const ar = (0, Zr.useRef)(null),
        jr = (0, Zr.useRef)({
          value: Sr,
          onSave: Wr
        });
      jr.current = {
        value: Sr,
        onSave: Wr
      };
      const Ir = (0, Zr.useRef)(null),
        fr = (0, Zr.useRef)(!1),
        Er = rr => {
          fr.current && rr.value !== jr.current.value && rr.value !== Ir.current && (Ir.current = rr.value, jr.current.onSave(rr.value))
        };
      return (0, Zr.useEffect)((() => {
        ar.current && document.activeElement !== ar.current && (ar.current.value = Sr)
      }), [Sr]), (0, Zr.useEffect)((() => {
        const rr = ar.current,
          Sr = () => {
            Er(rr)
          };
        return rr.addEventListener("change", Sr), () => {
          rr.removeEventListener("change", Sr), Er(rr)
        }
      }), []), (0, Hr.jsx)("input", {
        ref: ar,
        type: "color",
        className: "LobbyManageColour",
        defaultValue: Sr,
        "aria-label": Qr,
        onInput: () => {
          fr.current = !0
        },
        onBlur: rr => {
          Er(rr.currentTarget)
        }
      })
    }

    function rS(rr) {
      let {
        manage: Sr
      } = rr;
      const {
        lobbyName: Qr,
        shownLobbyName: Zr
      } = (0, nr.j)("connectedGame");
      return Sr.state.you.canSetVisibility && null !== Qr ? (0, Hr.jsx)(QS, {
        manage: Sr,
        lobbyName: Qr,
        worldCode: null !== Zr && void 0 !== Zr ? Zr : Qr
      }, Qr) : (0, Hr.jsx)(ZS, {
        manage: Sr,
        lobbyName: null !== Qr && void 0 !== Qr ? Qr : ""
      })
    }

    function SS(rr) {
      return rr.map((rr => rr.toLowerCase())).sort().join(",")
    }

    function QS(rr) {
      var Sr;
      let {
        manage: Qr,
        lobbyName: ar,
        worldCode: jr
      } = rr;
      const {
        t: Ir
      } = (0, Nr.E)(), {
        settings: fr,
        loading: Er,
        change: pr,
        retry: xr,
        refresh: mr
      } = (0, ir.i)(ar), Ur = (0, Vr.m)(), {
        state: zr
      } = Qr, Yr = (0, Zr.useRef)(fr);
      Yr.current = fr;
      const nr = SS(null !== (Sr = zr.whitelist) && void 0 !== Sr ? Sr : []),
        Kr = null !== zr.whitelist;
      (0, Zr.useEffect)((() => {
        const rr = Yr.current;
        null !== rr && (rr.visibility !== zr.visibility || Kr && SS(rr.whitelist) !== nr) && mr()
      }), [zr.visibility, nr, Kr, mr]);
      const yr = async (rr, Sr) => {
        let Qr = null;
        return await pr(rr, Sr, {
          quiet: !0,
          onAnswer: rr => {
            Qr = rr
          }
        }), Qr
      }, Br = (rr, Sr) => {
        null !== Sr && "error" in Sr && Qr.showStatus(rr, {
          ok: !1,
          text: [Ir(Sr.error)]
        })
      }, Tr = async rr => {
        if (null === fr || rr === fr.visibility) return;
        (0, Wr.reportAnalyticsClick)({
          id: "lobby_manage.set_mode",
          value: rr
        });
        const Sr = "whitelist" === rr ? (0, Fr.g)((0, Fr.j)(Ur.friends, ar, zr.here.map((rr => rr.name))), (0, or.d)(ar), fr.whitelist) : [],
          Qr = await yr({
            setVisibility: rr
          }, (Sr => ({
            ...Sr,
            visibility: rr
          })));
        Br("mode", Qr), null === Qr || "error" in Qr || await (async rr => {
          for (const Sr of (0, Fr.n)(rr, Ar.w))
            if (!await pr({
                whitelistAdd: Sr
              }, (rr => (0, Fr.s)(rr, Sr, !0)))) return !1;
          return !0
        })(Sr)
      }, vr = (0, Zr.useMemo)((() => {
        var rr;
        if (null === fr) return [];
        const Sr = null !== (rr = zr.whitelist) && void 0 !== rr ? rr : [];
        return [...Sr.filter((rr => (0, Fr.m)(fr.whitelist, rr))), ...fr.whitelist.filter((rr => !(0, Fr.m)(Sr, rr)))]
      }), [fr, zr.whitelist]), Or = Qr.statusOf("mode");
      return (0, Hr.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Hr.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Hr.jsx)(hr.c, {
            label: Ir("worldSocial:whoCanJoin")
          }), null === fr && Er && (0, Hr.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Hr.jsx)(tr.c, {})
          }), null === fr && !Er && (0, Hr.jsx)(er.k, {
            className: "SmallTextLight",
            onClick: xr,
            children: Ir("worldSocial:loadFailed")
          }), null !== fr && (0, Hr.jsx)(wr.c, {
            visibility: fr.visibility,
            onPick: rr => {
              Tr(rr)
            }
          }), Or && (0, Hr.jsx)("div", {
            className: "LobbyManageFieldError",
            children: (0, Hr.jsx)(qr, {
              status: Or
            })
          }), null !== fr && "private" !== fr.visibility && (0, Hr.jsx)(cr.b, {
            worldCode: jr,
            message: null
          })]
        }), "whitelist" === (null === fr || void 0 === fr ? void 0 : fr.visibility) && (0, Hr.jsx)(dr, {
          state: zr,
          lobbyName: ar,
          listed: vr,
          isListed: rr => (0, Fr.m)(fr.whitelist, rr),
          FY: (rr, Sr) => {
            (0, Wr.reportAnalyticsClick)(Sr ? {
              id: "lobby_manage.whitelist_add",
              value: "lx"
            } : {
              id: "lobby_manage.whitelist_remove"
            }), yr(Sr ? {
              whitelistAdd: [rr]
            } : {
              whitelistRemove: rr
            }, (Qr => (0, Fr.s)(Qr, [rr], Sr))).then((Sr => {
              Br(`whitelist:${rr.toLowerCase()}`, Sr)
            }))
          },
          zB: async rr => {
            (0, Wr.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Sr = await yr({
              whitelistAdd: [rr]
            }, (Sr => (0, Fr.s)(Sr, [rr], !0)));
            return null === Sr ? {
              ok: !1,
              error: Ir("worldSocial:changeFailed")
            } : "error" in Sr ? {
              ok: !1,
              error: Ir(Sr.error)
            } : (0, Fr.m)(Sr.notFound, rr) ? {
              ok: !1,
              error: Ir("lobbyManage:noPlayerCalled", {
                playerName: rr
              })
            } : {
              ok: !0
            }
          },
          statusOf: rr => Qr.statusOf(`whitelist:${rr.toLowerCase()}`)
        }), "public" === (null === fr || void 0 === fr ? void 0 : fr.visibility) && null !== zr.listing && (0, Hr.jsx)(sr, {
          manage: Qr,
          listing: zr.listing
        })]
      })
    }

    function ZS(rr) {
      var Sr;
      let {
        manage: Qr,
        lobbyName: Zr
      } = rr;
      const {
        t: ar
      } = (0, Nr.E)(), {
        state: jr
      } = Qr, Ir = pr(), fr = null !== (Sr = jr.whitelist) && void 0 !== Sr ? Sr : [];
      return (0, Hr.jsxs)("div", {
        className: "LobbyManagePage",
        children: [(0, Hr.jsxs)("div", {
          className: "LobbyManageBox",
          children: [(0, Hr.jsx)(hr.c, {
            label: ar("worldSocial:whoCanJoin")
          }), (0, Hr.jsx)("div", {
            className: "LobbyManageModeText",
            children: ar(`worldSocial:${jr.visibility}`)
          })]
        }), "whitelist" === jr.visibility && jr.you.canEditWhitelist && (0, Hr.jsx)(dr, {
          state: jr,
          lobbyName: Zr,
          listed: fr,
          isListed: rr => {
            var Sr;
            return null !== (Sr = Ir.get(rr.toLowerCase())) && void 0 !== Sr ? Sr : (0, Fr.m)(fr, rr)
          },
          FY: (rr, Sr) => {
            (0, Wr.reportAnalyticsClick)(Sr ? {
              id: "lobby_manage.whitelist_add",
              value: "lx"
            } : {
              id: "lobby_manage.whitelist_remove"
            });
            const Zr = rr.toLowerCase();
            Ir.hold(Zr, Sr, Qr.send(Sr ? {
              type: "whitelistAdd",
              names: [rr]
            } : {
              type: "whitelistRemove",
              name: rr
            }, `whitelist:${Zr}`))
          },
          zB: async rr => {
            (0, Wr.reportAnalyticsClick)({
              id: "lobby_manage.whitelist_add",
              value: "field"
            });
            const Sr = await Qr.send({
              type: "whitelistAdd",
              names: [rr]
            }, "whitelist-field");
            return Sr.ok ? {
              ok: !0
            } : {
              ok: !1,
              error: (0, Hr.jsx)(Xr.c, {
                text: Sr.message
              })
            }
          },
          statusOf: rr => Qr.statusOf(`whitelist:${rr.toLowerCase()}`)
        }), "public" === jr.visibility && null !== jr.listing && (0, Hr.jsx)(sr, {
          manage: Qr,
          listing: jr.listing
        })]
      })
    }
    var WS = Qr(5951),
      aS = Qr(1489);
    const jS = /[\p{Script_Extensions=Han}\p{Script_Extensions=Hiragana}\p{Script_Extensions=Katakana}\p{Script_Extensions=Hangul}\u{3000}-\u{303F}\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}]/u;
    const IS = (0, Zr.memo)((function(rr) {
      var Sr;
      let {
        rule: Qr,
        value: Zr,
        status: Wr,
        pending: ar,
        hiddenNames: jr,
        yX: Ir,
        onAction: fr
      } = rr;
      const {
        t: Er
      } = (0, Nr.E)(), pr = rr => Ir(Qr, rr), xr = (rr, Sr) => {
        fr(Qr, rr, Sr)
      }, mr = Lr(Er, Qr.label, jr), Ur = Qr.info ? Lr(Er, Qr.info, jr) : void 0, tr = Qr.placeholder ? Lr(Er, Qr.placeholder, jr) : void 0, hr = (null !== (Sr = Qr.options) && void 0 !== Sr ? Sr : []).map((rr => ({
        value: rr.value,
        label: Lr(Er, rr.label, jr)
      }))), zr = Math.max(0, ...hr.map((rr => function(rr) {
        let Sr = 0;
        for (const Qr of rr) Sr += jS.test(Qr) ? 2 : 1;
        return Sr
      }(rr.label)))), Yr = Wr && (0, Hr.jsx)("div", {
        className: "LobbyManageRuleStatus",
        children: (0, Hr.jsx)(qr, {
          status: Wr
        })
      }), nr = (0, Hr.jsxs)("div", {
        className: "SliderText",
        children: [mr, void 0 !== Ur && (0, Hr.jsx)(aS.d, {
          className: "SettingsTextInputCircleInfo",
          hoverInfo: Ur
        })]
      });
      return "toggle" === Qr.kind ? (0, Hr.jsxs)(Hr.Fragment, {
        children: [(0, Hr.jsx)(WS.c, {
          label: mr,
          checked: !0 === Zr,
          circleInfoText: Ur,
          disabled: ar,
          onClick: pr
        }), Yr]
      }) : "choice" === Qr.kind && hr.length <= 3 ? (0, Hr.jsxs)(Hr.Fragment, {
        children: [(0, Hr.jsx)(WS.e, {
          label: mr,
          options: hr,
          value: String(Zr),
          circleInfoText: Ur,
          onChange: pr
        }), Yr]
      }) : (0, Hr.jsxs)("div", {
        className: "SettingBox LobbyManageRuleRow",
        children: [nr, "choice" === Qr.kind && (0, Hr.jsx)("span", {
          className: "LobbyManageRuleChoice",
          style: {
            "--lobby-choice-chars": zr
          },
          children: (0, Hr.jsx)(vr.c, {
            options: hr,
            value: String(Zr),
            disabled: ar,
            revealOnOpen: !0,
            onChange: rr => {
              pr(rr.value)
            }
          })
        }), ("number" === Qr.kind || "text" === Qr.kind) && (0, Hr.jsx)(gr, {
          value: null === Zr ? "" : String(Zr),
          placeholder: tr,
          ariaLabel: mr,
          onSave: rr => {
            const Sr = rr.trim(),
              Zr = Number(Sr);
            return pr("number" === Qr.kind && "" !== Sr && Number.isFinite(Zr) ? Zr : Sr)
          }
        }), "action" === Qr.kind && (0, Hr.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [hr.length > 3 && (0, Hr.jsx)(vr.c, {
            options: hr,
            value: {
              value: "",
              label: null !== tr && void 0 !== tr ? tr : mr
            },
            disabled: ar,
            revealOnOpen: !0,
            onChange: rr => {
              xr(rr.value)
            }
          }), hr.length > 0 && hr.length <= 3 && hr.map((rr => (0, Hr.jsx)(er.k, {
            className: "SmallTextLight",
            disabled: ar,
            onClick: () => {
              xr(rr.value)
            },
            children: rr.label
          }, rr.value))), 0 === hr.length && (0, Hr.jsx)(er.k, {
            className: "SmallTextLight",
            disabled: ar,
            onClick: () => {
              xr()
            },
            children: null !== tr && void 0 !== tr ? tr : mr
          })]
        }), "names" === Qr.kind && (0, Hr.jsx)(fS, {
          names: Array.isArray(Zr) ? Zr : [],
          pending: ar,
          onAction: xr
        }), Yr]
      })
    }));

    function fS(rr) {
      let {
        names: Sr,
        pending: Qr,
        onAction: Wr
      } = rr;
      const {
        t: ar
      } = (0, Nr.E)(), jr = (0, Zr.useRef)(null), [Ir, fr] = (0, Zr.useState)(""), Er = () => {
        const rr = Ir.trim();
        "" !== rr && (Wr(rr, "add"), jr.current && (jr.current.value = ""), fr(""))
      };
      return (0, Hr.jsxs)("div", {
        className: "LobbyManageNames",
        children: [Sr.map((rr => (0, Hr.jsxs)("div", {
          className: "LobbyManageName",
          children: [(0, Hr.jsx)("span", {
            className: "LobbyManageNameText",
            children: rr
          }), (0, Hr.jsx)(er.k, {
            className: "LobbyManageIconButton SmallTextLight",
            ariaLabel: ar("lobbyManage:removeName", {
              name: rr
            }),
            disabled: Qr,
            onClick: () => {
              Wr(rr, "remove")
            },
            children: (0, Hr.jsx)(Ur.c, {
              name: "xmark"
            })
          })]
        }, rr))), (0, Hr.jsxs)("div", {
          className: "LobbyManageRuleInput",
          children: [(0, Hr.jsx)(Pr.b, {
            domRef: jr,
            placeholderText: ar("lobbyManage:namePlaceholder"),
            ariaLabel: ar("lobbyManage:namePlaceholder"),
            maxLength: 32,
            onValueChange: rr => {
              fr(rr)
            },
            onEnter: Er
          }), (0, Hr.jsx)(er.k, {
            className: "SmallTextLight",
            disabled: Qr || "" === Ir.trim(),
            onClick: Er,
            children: ar("lobbyManage:addHere")
          })]
        })]
      })
    }
    const ES = [{
      group: "gameplay",
      title: "lobbyManage:gameplay"
    }, {
      group: "world",
      title: "lobbyManage:world"
    }];

    function pS(rr, Sr) {
      return ES.map((Qr => {
        let {
          group: Zr,
          title: Wr
        } = Qr;
        const ar = rr.filter((rr => rr.group === Zr && void 0 === rr.parent)).map((Qr => {
          const Zr = !0 === Sr(Qr) ? rr.filter((rr => rr.parent === Qr.key)) : [];
          return {
            rule: Qr,
            children: Zr
          }
        }));
        return {
          group: Zr,
          title: Wr,
          items: ar
        }
      }))
    }

    function xS(rr) {
      return rr.flatMap((rr => {
        let {
          items: Sr
        } = rr;
        return Sr.flatMap((rr => {
          let {
            rule: Sr,
            children: Qr
          } = rr;
          return [Sr, ...Qr]
        }))
      }))
    }

    function mS(rr) {
      let {
        manage: Sr,
        rowsShown: Qr
      } = rr;
      const {
        t: ar
      } = (0, Nr.E)(), jr = (0, nr.j)("hiddenPlayerNames"), {
        rules: Ir
      } = Sr.state, fr = pr(), Er = rr => {
        const Sr = fr.get(rr.key);
        return void 0 === Sr ? rr.value : Sr
      }, xr = pS(Ir, Er), [mr] = (0, Zr.useState)((() => xS(xr).map((rr => rr.key)))), Ur = Qr === 1 / 0 ? null : new Set(mr.slice(0, Qr)), tr = rr => null === Ur || Ur.has(rr.key), {
        hold: zr
      } = fr, Yr = (0, Zr.useCallback)(((rr, Qr) => {
        (0, Wr.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: rr.key
        });
        const Zr = Sr.send({
          type: "setRule",
          key: rr.key,
          value: Qr
        }, `rule:${rr.key}`);
        return zr(rr.key, Qr, Zr), Zr
      }), [Sr, zr]), er = (0, Zr.useCallback)(((rr, Qr, Zr) => {
        (0, Wr.reportAnalyticsClick)({
          id: "lobby_manage.set_rule",
          value: rr.key
        }), Sr.send({
          type: "ruleAction",
          key: rr.key,
          ...void 0 === Qr ? {} : {
            arg: Qr
          },
          ...void 0 === Zr ? {} : {
            op: Zr
          }
        }, `rule:${rr.key}`, void 0 === Zr ? ar("lobbyManage:setJustNow") : void 0)
      }), [Sr, ar]), Kr = rr => {
        const Qr = `rule:${rr.key}`;
        return (0, Hr.jsx)(IS, {
          rule: rr,
          value: Er(rr),
          status: Sr.statusOf(Qr),
          pending: Sr.isPending(Qr),
          hiddenNames: jr,
          yX: Yr,
          onAction: er
        }, rr.key)
      };
      return (0, Hr.jsx)("div", {
        className: "LobbyManagePage LobbyManageRules",
        children: xr.map((rr => {
          let {
            group: Sr,
            title: Qr,
            items: Wr
          } = rr;
          const jr = Wr.filter((rr => {
            let {
              rule: Sr
            } = rr;
            return tr(Sr)
          }));
          return 0 === jr.length ? null : (0, Hr.jsxs)(Zr.Fragment, {
            children: [(0, Hr.jsx)(hr.c, {
              label: ar(Qr)
            }), jr.map((rr => {
              let {
                rule: Sr,
                children: Qr
              } = rr;
              return 0 === Qr.length ? Kr(Sr) : (0, Hr.jsxs)("div", {
                className: "SettingBoxGroup",
                children: [Kr(Sr), Qr.filter(tr).map(Kr)]
              }, Sr.key)
            }))]
          }, Sr)
        }))
      })
    }
    const NS = {
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
      US = 5,
      tS = (0, Zr.memo)((function(rr) {
        let {
          page: Sr,
          manage: Qr,
          leaderboard: Wr,
          focusRequest: ar,
          onFocused: jr,
          ruleRowsShown: Ir
        } = rr;
        return "leaderboard" === Sr ? (0, Hr.jsx)(Zr.Suspense, {
          fallback: (0, Hr.jsx)("div", {
            className: "LobbyManageLoading",
            children: (0, Hr.jsx)(tr.c, {})
          }),
          children: Wr
        }) : "joining" === Sr ? (0, Hr.jsx)(rS, {
          manage: Qr
        }) : "rules" === Sr ? (0, Hr.jsx)(mS, {
          manage: Qr,
          rowsShown: Ir
        }) : (0, Hr.jsx)(kr, {
          manage: Qr,
          focusRequest: ar,
          onFocused: jr
        })
      }));

    function hS(rr) {
      let {
        page: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Nr.E)(), Zr = NS[Sr];
      return (0, Hr.jsxs)(Hr.Fragment, {
        children: [(0, Hr.jsx)(Ur.c, {
          name: Zr.icon
        }), " ", (0, Hr.jsx)("span", {
          className: "LobbyManagePageTitle",
          children: Qr(Zr.title)
        })]
      })
    }

    function zS(rr) {
      var Sr;
      const {
        t: Qr
      } = (0, Nr.E)(), {
        pages: ar,
        landing: jr
      } = rr, fr = (0, Zr.useRef)(null), Er = (0, Zr.useRef)(null), pr = (0, Zr.useRef)(null), xr = (0, Zr.useRef)(new Map), [Ur, tr] = (0, Zr.useState)(null), nr = (0, Zr.useRef)(Ur), er = (0, Zr.useRef)(0), [Kr, yr] = (0, Zr.useState)(ar[0]), Br = null !== Ur && void 0 !== Ur ? Ur : ar.includes(Kr) ? Kr : ar[0], [Tr] = (0, Zr.useState)(null !== (Sr = null === jr || void 0 === jr ? void 0 : jr.page) && void 0 !== Sr ? Sr : null), vr = null !== Tr && ar.includes(Tr) ? [Tr, ...ar.filter((rr => rr !== Tr))] : ar, [Or] = (0, Zr.useState)((() => {
        const Sr = xS(pS(rr.manage.state.rules, (rr => rr.value)));
        return Math.max(1, Math.ceil(Sr.length / US))
      })), Lr = vr.flatMap((rr => "rules" === rr ? Array(Or).fill(rr) : [rr])), lr = function(rr, Sr) {
        const [Qr, Wr] = (0, Zr.useState)(rr), ar = Qr >= Sr;
        return ar && Qr !== 1 / 0 && Wr(1 / 0), (0, Zr.useLayoutEffect)((() => {
          if (ar) return;
          let rr = !0;
          return (0, Yr.i)().then((() => {
            rr && Wr((rr => rr + 1))
          })), () => {
            rr = !1
          }
        }), [Qr, ar]), ar ? 1 / 0 : Qr
      }(1, Lr.length), Xr = Lr.slice(0, lr), Pr = new Set(Xr), qr = lr < Lr.length, Rr = qr ? Xr.filter((rr => "rules" === rr)).length * US : 1 / 0, gr = (0, Zr.useRef)(rr.focusRequest);
      gr.current = rr.focusRequest;
      const Cr = rr => {
          nr.current = rr, tr(rr)
        },
        Mr = () => {
          var rr, Sr;
          fr.current.style.scrollPaddingTop = `${null!==(rr=null===(Sr=pr.current)||void 0===Sr?void 0:Sr.offsetHeight)&&void 0!==rr?rr:0}px`
        },
        Gr = rr => {
          const Sr = fr.current,
            Qr = xr.current.get(rr);
          if (void 0 === Qr) return;
          const Zr = document.activeElement,
            Wr = gr.current,
            ar = null === Wr ? null : Qr.querySelector(`[data-lobby-manage-row="${CSS.escape(Wr.name)}"]`);
          Mr(), Zr instanceof HTMLElement && null !== ar && void 0 !== ar && ar.contains(Zr) ? Zr.scrollIntoView({
            block: "center"
          }) : null === Qr.previousElementSibling ? Sr.scrollTop = 0 : Qr.scrollIntoView({
            block: "start"
          }), er.current = Sr.scrollTop
        },
        kr = rr => {
          (0, Wr.reportAnalyticsClick)({
            id: "lobby_manage.page",
            value: rr
          }), Cr(rr), Gr(rr)
        },
        Ar = () => {
          var rr, Sr;
          const Qr = fr.current,
            Zr = Qr.getBoundingClientRect().top + (null !== (rr = null === (Sr = pr.current) || void 0 === Sr ? void 0 : Sr.offsetHeight) && void 0 !== rr ? rr : 0),
            Wr = ar.map((rr => {
              var Sr, Qr;
              return (null !== (Sr = null === (Qr = xr.current.get(rr)) || void 0 === Qr ? void 0 : Qr.getBoundingClientRect().top) && void 0 !== Sr ? Sr : 1 / 0) - Zr
            })),
            jr = !qr && Qr.scrollTop + Qr.clientHeight >= Qr.scrollHeight - 1;
          yr(ar[(0, Ir.j)(Wr, jr)])
        },
        Vr = () => {
          null !== nr.current && (Cr(null), Ar())
        };
      (0, Zr.useLayoutEffect)((() => {
        null !== jr && ar.includes(jr.page) && kr(jr.page)
      }), [null === jr || void 0 === jr ? void 0 : jr.seq]), (0, Zr.useLayoutEffect)((() => {
        null === nr.current || ar.includes(nr.current) || Vr()
      }));
      const {
        onFocused: ir
      } = rr, wr = (0, Zr.useCallback)((rr => {
        null !== nr.current && Gr(nr.current), ir(rr)
      }), [ir]);
      (0, Zr.useLayoutEffect)((() => {
        const rr = nr.current;
        null !== rr && (!qr || ar.indexOf(Lr[lr - 1]) < ar.indexOf(rr)) && Gr(rr)
      }), [lr]), (0, Zr.useEffect)((() => {
        const rr = new ResizeObserver((() => {
          null !== nr.current ? Gr(nr.current) : Mr()
        }));
        return rr.observe(fr.current), rr.observe(Er.current), () => {
          rr.disconnect()
        }
      }), []), (0, Zr.useLayoutEffect)((() => {
        const rr = pr.current,
          Sr = null === rr || void 0 === rr ? void 0 : rr.querySelector(".SegmentedToggleOptionSelected");
        Sr && (rr.scrollLeft = Math.min(Sr.offsetLeft, Math.max(rr.scrollLeft, Sr.offsetLeft + Sr.offsetWidth - rr.clientWidth)))
      }), [Br]);
      return (0, Hr.jsxs)("div", {
        ref: fr,
        className: "MenuBody LobbyManageBody",
        onScroll: () => {
          null === nr.current ? Ar() : Math.abs(fr.current.scrollTop - er.current) > 1 && Vr()
        },
        onClick: rr => {
          var Sr;
          null !== (Sr = pr.current) && void 0 !== Sr && Sr.contains(rr.target) || Vr()
        },
        onFocus: rr => {
          var Sr;
          const Qr = null === nr.current ? null : xr.current.get(nr.current);
          !Qr || Qr.contains(rr.target) || null !== (Sr = pr.current) && void 0 !== Sr && Sr.contains(rr.target) || Vr()
        },
        children: [ar.length > 1 && (0, Hr.jsx)("div", {
          ref: pr,
          className: "LobbyManageChips",
          children: (0, Hr.jsx)(zr.d, {
            options: ar.map((rr => ({
              value: rr,
              label: (0, Hr.jsx)(hS, {
                page: rr
              }),
              ariaLabel: Qr(NS[rr].title)
            }))),
            value: Br,
            padTabs: "2",
            ariaLabel: Qr("lobbyManageEntry:manageLobby"),
            reselectable: !0,
            onChange: kr
          })
        }), (0, Hr.jsx)("div", {
          ref: Er,
          className: mr()("LobbyManageInner", {
            Staging: qr
          }),
          children: ar.filter((rr => Pr.has(rr))).map((Sr => {
            const Qr = Sr === Ur;
            return (0, Hr.jsxs)("section", {
              ref: rr => {
                rr ? xr.current.set(Sr, rr) : xr.current.delete(Sr)
              },
              className: "LobbyManageSection",
              "data-pad-initial-area": Qr || void 0,
              children: [ar.length > 1 && (0, Hr.jsx)("div", {
                className: "LobbyManageSectionHeading",
                "data-pad-focusable": Qr || void 0,
                "data-pad-unavailable": Qr || void 0,
                children: (0, Hr.jsx)(hr.c, {
                  label: (0, Hr.jsx)(hS, {
                    page: Sr
                  })
                })
              }), (0, Hr.jsx)(tS, {
                page: Sr,
                manage: rr.manage,
                leaderboard: rr.leaderboard,
                focusRequest: rr.focusRequest,
                onFocused: wr,
                ruleRowsShown: "rules" === Sr ? Rr : 1 / 0
              })]
            }, Sr)
          }))
        })]
      })
    }

    function YS(rr) {
      return void 0 === (null === rr || void 0 === rr ? void 0 : rr.page) ? null : {
        page: rr.page,
        seq: rr.seq
      }
    }

    function nS(rr) {
      let {
        leaderboard: Sr
      } = rr;
      const Qr = function() {
          const rr = (0, fr.l)("lobbyManage"),
            [Sr, Qr] = (0, Zr.useReducer)((rr => rr + 1), 0),
            [Wr] = (0, Zr.useState)((() => new Er.e(Qr)));
          return (0, Zr.useEffect)((() => {
            const rr = Wr.nextDeadline();
            if (null === rr) return;
            const Sr = setTimeout((() => {
              Wr.expire(Date.now()), Qr()
            }), Math.max(0, rr - Date.now()));
            return () => {
              clearTimeout(Sr)
            }
          })), (0, Zr.useMemo)((() => null === rr ? null : {
            state: rr,
            send: (rr, Sr, Zr) => {
              const ar = Wr.send(rr, Sr, null !== Zr && void 0 !== Zr ? Zr : null);
              return Qr(), ar
            },
            statusOf: rr => Wr.statusOf(rr, Date.now()),
            showStatus: (rr, Sr) => {
              Wr.show(rr, Sr)
            },
            isPending: rr => Wr.isPending(rr)
          }), [rr, Sr, Wr])
        }(),
        pr = (0, Ir.l)((0, ar.c)()),
        xr = (0, jr.l)(),
        [mr, Nr] = (0, Zr.useState)((() => YS(xr))),
        [Ur, tr] = (0, Zr.useState)(null);
      return (0, Zr.useEffect)((() => {
        null === xr && (0, Wr.reportAnalyticsClick)({
          id: "lobby_manage.open",
          value: "menu_tab"
        })
      }), []), (0, Zr.useEffect)((() => {
        null !== xr && (Nr((rr => (null === rr || void 0 === rr ? void 0 : rr.seq) === xr.seq ? rr : YS(xr))), void 0 !== xr.focusName && "players" === xr.page ? tr({
          name: xr.focusName,
          seq: xr.seq
        }) : (0, jr.h)(xr.seq))
      }), [null === xr || void 0 === xr ? void 0 : xr.seq]), null === Qr ? null : (0, Hr.jsx)("div", {
        className: "LobbyManage Menu",
        children: (0, Hr.jsx)(zS, {
          pages: (0, Ir.f)(Qr.state, pr),
          manage: Qr,
          leaderboard: Sr,
          focusRequest: Ur,
          onFocused: jr.h,
          landing: mr
        })
      })
    }
  },
  38115: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => pr,
      h: () => fr
    });
    var Zr = Qr(1605),
      Wr = Qr(2114),
      ar = Qr(2089);
    const jr = 1e4;
    let Ir = 0;

    function fr(rr) {
      const Sr = ++Ir;
      return new Promise((Qr => {
        const Ir = Sr => {
            fr(), clearTimeout(Er), !1 === (null === Sr || void 0 === Sr ? void 0 : Sr.ok) && (0, Zr.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: rr.type
            }), Qr(Sr)
          },
          fr = Wr.d.subscribe("lobbyManage", (rr => {
            const Qr = function(rr, Sr) {
              var Qr;
              return null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.results.find((rr => rr.requestId === Sr))) && void 0 !== Qr ? Qr : null
            }(rr, Sr);
            null !== Qr && Ir(Qr)
          })),
          Er = setTimeout((() => {
            Ir(null)
          }), jr);
        ar.gameBridge.send("lobbyManage", {
          ...rr,
          requestId: Sr
        })
      }))
    }
    const Er = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class pr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fr;
        this.onChange = rr, this.sendAction = Sr, this.pending = new Map, this.statuses = new Map
      }
      send(rr, Sr, Qr) {
        var Zr;
        return this.statuses.delete(Sr), this.pending.set(Sr, (null !== (Zr = this.pending.get(Sr)) && void 0 !== Zr ? Zr : 0) + 1), this.sendAction(rr).then((rr => {
          var Zr;
          const Wr = null !== rr && void 0 !== rr ? rr : {
              requestId: -1,
              ok: !1,
              message: Er
            },
            ar = (null !== (Zr = this.pending.get(Sr)) && void 0 !== Zr ? Zr : 1) - 1;
          ar > 0 ? this.pending.set(Sr, ar) : this.pending.delete(Sr);
          const jr = !Wr.ok || Wr.message.length > 0 ? Wr.message : null === Qr ? null : [Qr];
          return null !== jr && this.statuses.set(Sr, {
            ok: Wr.ok,
            text: jr,
            until: Date.now() + 4e3
          }), this.onChange(), Wr
        }))
      }
      show(rr, Sr) {
        this.statuses.set(rr, {
          ...Sr,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(rr) {
        for (const [Sr, Qr] of this.statuses) Qr.until <= rr && this.statuses.delete(Sr)
      }
      nextDeadline() {
        let rr = null;
        for (const Qr of this.statuses.values()) {
          var Sr;
          rr = Math.min(null !== (Sr = rr) && void 0 !== Sr ? Sr : 1 / 0, Qr.until)
        }
        return rr
      }
      statusOf(rr, Sr) {
        const Qr = this.statuses.get(rr);
        return !Qr || Qr.until <= Sr ? null : {
          ok: Qr.ok,
          text: Qr.text
        }
      }
      isPending(rr) {
        return this.pending.has(rr)
      }
    }
  },
  38122: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      f: () => xr,
      j: () => pr,
      n: () => Er,
      r: () => jr,
      u: () => Zr,
      x: () => ar
    });
    const Zr = 2;

    function Wr(rr, Sr, Qr) {
      const Zr = rr.filter((rr => rr.name !== Sr)),
        Wr = Zr.filter((rr => "none" === rr.role)).sort(((rr, Sr) => Sr.at - rr.at)),
        ar = Zr.filter((rr => "none" !== rr.role)).sort(((rr, Sr) => Qr.indexOf(rr.role) - Qr.indexOf(Sr.role) || Sr.at - rr.at));
      return [...rr.some((rr => rr.name === Sr)) && null !== Sr ? [Sr] : [], ...[...Wr, ...ar].map((rr => rr.name))]
    }

    function ar(rr, Sr) {
      const Qr = rr.banned.map((rr => rr.name)),
        Zr = new Set(Qr);
      return {
        here: Wr(rr.here, Sr, rr.roles.map((rr => rr.role))),
        away: rr.away.filter((rr => !Zr.has(rr.name))).map((rr => rr.name)),
        banned: Qr
      }
    }

    function jr(rr, Sr, Qr) {
      const Zr = new Set([...rr.here, ...rr.away, ...rr.banned]),
        Wr = ar(Sr, Qr),
        jr = Sr => {
          const Qr = Wr[Sr].filter((rr => !Zr.has(rr)));
          for (const rr of Qr) Zr.add(rr);
          return [...rr[Sr], ...Qr]
        };
      return {
        here: jr("here"),
        away: jr("away"),
        banned: jr("banned")
      }
    }

    function Ir(rr, Sr) {
      const Qr = rr.here.find((rr => rr.name === Sr));
      if (Qr) return {
        section: "here",
        player: Qr
      };
      const Zr = rr.banned.find((rr => rr.name === Sr));
      if (Zr) return {
        section: "banned",
        bannedAt: Zr.at
      };
      const Wr = rr.away.find((rr => rr.name === Sr));
      return Wr ? {
        section: "away",
        player: Wr
      } : {
        section: "gone"
      }
    }
    const fr = {
      gamemode: !1,
      roles: [],
      fixedRole: null,
      kick: !1,
      ban: !1,
      unban: !1
    };

    function Er(rr) {
      const Sr = rr.can.roles.filter((Sr => "none" !== Sr || "none" !== rr.role));
      return Sr.some((Sr => Sr !== rr.role)) ? Sr : []
    }

    function pr(rr, Sr) {
      if ("banned" === rr.section) return {
        ...fr,
        unban: !0
      };
      if ("gone" === rr.section) return fr;
      const {
        player: Qr
      } = rr, Zr = "here" === rr.section, Wr = Er(Qr), ar = Zr && Sr && null !== Qr.gamemode && Qr.can.gamemode;
      return {
        gamemode: ar,
        roles: Wr,
        fixedRole: 0 !== Wr.length || "none" === Qr.role && !ar ? null : Qr.role,
        kick: Zr && Qr.can.kick,
        ban: Qr.can.ban,
        unban: !1
      }
    }

    function xr(rr, Sr) {
      return rr.here.filter((rr => rr.name !== Sr && "none" === rr.role && rr.can.kick)).length
    }
  },
  38272: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => xr
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(1804),
      Ir = Qr(1576),
      fr = Qr(1444),
      Er = Qr(1448),
      pr = Qr(1338);

    function xr(rr) {
      let {
        label: Sr,
        icon: Qr,
        placeholder: Wr,
        onSubmit: xr
      } = rr;
      const mr = (0, Zr.useRef)(null),
        [Nr, Ur] = (0, Zr.useState)(""),
        [tr, hr] = (0, Zr.useState)("Enter"),
        [zr, Yr] = (0, Zr.useState)(null);
      (0, Zr.useEffect)((() => {
        if ("Success" !== tr && "Error" !== tr) return;
        const rr = setTimeout((() => {
          "Success" === tr && mr.current && (mr.current.value = "", Ur("")), hr("Enter")
        }), "Success" === tr ? 1e3 : 4e3);
        return () => {
          clearTimeout(rr)
        }
      }), [tr]);
      const nr = () => {
        const rr = Nr.trim();
        "" !== rr && "Enter" === tr && (hr("Loading"), xr(rr).then((rr => {
          mr.current && ("error" in rr ? null === rr.error ? hr("Enter") : (Yr(rr.error), hr("Error")) : hr("Success"))
        })))
      };
      return (0, pr.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: rr => {
          rr.target === mr.current && "Escape" !== rr.key && rr.stopPropagation()
        },
        children: [(0, pr.jsxs)("div", {
          className: ar()("AddFriendBodyOverlay", `AddFriendBodyOverlay${tr}`),
          children: ["Loading" === tr && (0, pr.jsx)(fr.c, {}), "Success" === tr && (0, pr.jsx)(Er.c, {
            name: "check"
          }), "Error" === tr && zr]
        }), (0, pr.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, pr.jsx)(jr.b, {
            className: "PlayerSearchInput",
            domRef: mr,
            maxLength: 32,
            placeholderText: Wr,
            ariaLabel: Wr,
            stopPropagation: !1,
            onValueChange: rr => {
              Ur(rr)
            },
            onEnter: nr
          }), (0, pr.jsxs)(Ir.h, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== tr || "" === Nr.trim(),
            onClick: nr,
            children: [(0, pr.jsx)(Er.c, {
              name: Qr
            }), " ", Sr]
          })]
        })]
      })
    }
  },
  38252: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => xr
    });
    var Zr = Qr(72),
      Wr = Qr(1155),
      ar = Qr.n(Wr),
      jr = Qr(1251),
      Ir = Qr(1448),
      fr = Qr(1338);
    const Er = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      pr = ["unlisted", "public", "whitelist", "private"];

    function xr(rr) {
      let {
        visibility: Sr,
        onPick: Qr
      } = rr;
      const {
        t: Wr
      } = (0, jr.E)(), xr = (0, Zr.useRef)([]);
      return (0, fr.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Wr("worldSocial:whoCanJoin"),
        children: pr.map(((rr, Zr) => {
          const jr = rr === Sr;
          return (0, fr.jsxs)("button", {
            ref: rr => {
              xr.current[Zr] = rr
            },
            type: "button",
            className: ar()("WorldSocialTile", {
              WorldSocialTileSelected: jr
            }),
            "aria-pressed": jr,
            tabIndex: jr ? 0 : -1,
            onKeyDown: rr => {
              ((rr, Sr) => {
                const Qr = "ArrowRight" === rr.key || "ArrowDown" === rr.key ? 1 : "ArrowLeft" === rr.key || "ArrowUp" === rr.key ? -1 : 0;
                var Zr;
                0 !== Qr && (rr.preventDefault(), null === (Zr = xr.current[(Sr + Qr + pr.length) % pr.length]) || void 0 === Zr || Zr.focus())
              })(rr, Zr)
            },
            onClick: () => {
              Qr(rr)
            },
            children: [(0, fr.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, fr.jsx)(Ir.c, {
                name: Er[rr]
              })
            }), (0, fr.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, fr.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Wr(`worldSocial:${rr}`)
              }), (0, fr.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Wr(`worldSocial:${rr}Description`)
              })]
            })]
          }, rr)
        }))
      })
    }
  },
  38266: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir
    });
    var Zr = Qr(1251),
      Wr = Qr(3711),
      ar = Qr(5065),
      jr = Qr(1338);

    function Ir(rr) {
      let {
        lx: Sr,
        children: Qr,
        ...Ir
      } = rr;
      const {
        t: fr
      } = (0, Zr.E)();
      return (0, jr.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          Sr.onChange(!Sr.on)
        },
        children: (0, jr.jsx)(Wr.f, {
          ...Ir,
          opensProfileCard: !1,
          children: (0, jr.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: rr => {
              rr.stopPropagation()
            },
            children: [Qr, (0, jr.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, jr.jsx)(ar.e, {
                checked: Sr.on,
                disabled: !1,
                ariaLabel: fr("worldSocial:letJoin", {
                  playerName: Ir.playerSocialPreview.name
                }),
                onChange: rr => {
                  Sr.onChange(rr.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  38246: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ur
    });
    var Zr = Qr(72),
      Wr = Qr(1251),
      ar = Qr(2015),
      jr = Qr(109),
      Ir = Qr(26),
      fr = Qr(1605),
      Er = Qr(3742),
      pr = Qr(35347),
      xr = Qr(1576),
      mr = Qr(1448),
      Nr = Qr(1338);

    function Ur(rr) {
      let {
        worldCode: Sr,
        message: Qr
      } = rr;
      const {
        t: Ur
      } = (0, Wr.E)(), {
        isTouchScreen: tr
      } = (0, Ir.n)(["isTouchScreen"]), hr = jr.featureFlags.canUseInviteLinks, zr = (0, pr.g)(hr && null === Qr), [Yr, nr] = (0, Er.g)(), er = (0, Zr.useRef)(null);
      if (null !== Qr) return (0, Nr.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, Nr.jsx)(mr.c, {
          name: "lock"
        }), (0, Nr.jsx)("span", {
          children: Qr
        })]
      });
      const Kr = hr ? zr : Sr,
        yr = tr && hr && (0, Er.b)();
      return (0, Nr.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!hr && (0, Nr.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: Ur("worldSocial:worldCode")
        }), (0, Nr.jsx)("input", {
          ref: er,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== Kr && void 0 !== Kr ? Kr : "",
          "aria-label": Ur(hr ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: rr => {
            rr.currentTarget.select()
          }
        }), (0, Nr.jsxs)(xr.h, {
          className: "WorldSocialCopy",
          disabled: null === Kr,
          onClick: () => {
            null !== Kr && (0, Er.c)(Kr, {
              useShareSheet: yr,
              onOutcome: rr => {
                if ((0, fr.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== rr || hr ? rr : "code"
                  }), "copied" === rr) nr();
                else if ("failed" === rr) {
                  var Sr;
                  null === (Sr = er.current) || void 0 === Sr || Sr.focus(), ar.h.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, Nr.jsx)(mr.c, {
            name: Yr ? "check" : yr ? "up-from-bracket" : "copy"
          }), " ", Ur(Yr ? "general:copied" : yr ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  38257: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Nr,
      f: () => mr,
      g: () => xr
    });
    var Zr = Qr(672),
      Wr = Qr(1251),
      ar = Qr(1761),
      jr = Qr(3711),
      Ir = Qr(3657),
      fr = Qr(1576),
      Er = Qr(38266),
      pr = Qr(1338);

    function xr(rr, Sr) {
      var Qr;
      return {
        isError: !1,
        name: rr,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== Sr && void 0 !== Sr ? Sr : {},
        nameColour: null !== (Qr = null === Sr || void 0 === Sr ? void 0 : Sr.nameColour) && void 0 !== Qr ? Qr : Zr.e,
        location: {
          status: "offline"
        }
      }
    }

    function mr(rr) {
      let {
        player: Sr,
        isFriend: Qr = !1,
        status: Zr,
        showLocation: fr = void 0 === Zr,
        lx: xr,
        onSendFriendRequest: mr,
        actions: Nr,
        zIndex: Ur
      } = rr;
      const {
        t: tr
      } = (0, Wr.E)();
      let hr = Zr;
      null !== xr && void 0 !== xr && xr.on && (hr = (0, pr.jsxs)(pr.Fragment, {
        children: [null !== Zr && void 0 !== Zr ? Zr : (0, pr.jsx)(Ir.e, {
          socialPreview: Sr
        }), (0, pr.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", tr("worldSocial:canJoin")]
        })]
      }));
      const zr = {
        playerSocialPreview: Sr,
        isFriend: Qr,
        hideFriendBadge: !0,
        onFriendRemoved: Qr ? rr => {
          ar.e.removeFriendFromState(rr)
        } : void 0,
        status: hr,
        showLocation: fr,
        onSendFriendRequest: mr,
        zIndex: Ur
      };
      return xr ? (0, pr.jsx)(Er.d, {
        ...zr,
        lx: xr,
        children: Nr
      }) : (0, pr.jsx)(jr.f, {
        ...zr,
        opensProfileCard: !1,
        children: Nr || void 0
      })
    }

    function Nr(rr) {
      let {
        row: Sr,
        lx: Qr,
        canInvite: Zr,
        invited: ar,
        onInvite: jr,
        zIndex: Ir
      } = rr;
      const {
        t: Er
      } = (0, Wr.E)(), xr = "online" === Sr.place ? fr.h : fr.k;
      return (0, pr.jsx)(mr, {
        player: Sr.friend,
        isFriend: !0,
        status: "here" === Sr.place ? Er("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        lx: Qr,
        zIndex: Ir,
        actions: Zr && (0, pr.jsx)(xr, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: ar,
          onClick: jr,
          ariaLabel: `${Er("worldSocial:invite")} ${Sr.friend.name}`,
          children: Er(ar ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  38237: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr,
      e: () => jr,
      i: () => Er
    });
    var Zr = Qr(72),
      Wr = Qr(5347),
      ar = Qr(2015);

    function jr(rr) {
      const Sr = {
        lobbyName: rr,
        answer: null,
        response: Wr.c.getSocialSettings(rr)
      };
      return Sr.response.then((rr => {
        Sr.answer = rr
      })), Sr
    }
    const Ir = new Map;

    function fr(rr) {
      Ir.set(rr.lobbyName, rr)
    }

    function Er(rr) {
      const [Sr] = (0, Zr.useState)((() => function(rr) {
        var Sr;
        const Qr = null !== (Sr = Ir.get(rr)) && void 0 !== Sr ? Sr : null;
        return null !== Qr && void 0 !== Qr && Qr.answer && "error" in Qr.answer ? null : Qr
      }(rr))), [Qr, jr] = (0, Zr.useState)((() => null !== Sr && void 0 !== Sr && Sr.answer && "settings" in Sr.answer ? Sr.answer.settings : null)), [fr, Er] = (0, Zr.useState)(!0), [pr, xr] = (0, Zr.useState)(null !== Qr), mr = (0, Zr.useRef)(Qr);
      mr.current = Qr;
      const Nr = (0, Zr.useRef)(0),
        Ur = (0, Zr.useRef)(0),
        tr = (0, Zr.useRef)(!1),
        hr = (0, Zr.useRef)(!0),
        zr = (0, Zr.useCallback)((async Sr => {
          const Qr = ++Nr.current,
            Zr = await (null !== Sr && void 0 !== Sr ? Sr : Wr.c.getSocialSettings(rr));
          hr.current && Qr === Nr.current && (xr(!0), Er(!1), "error" in Zr || jr(Zr.settings))
        }), [rr]),
        Yr = (0, Zr.useCallback)((() => {
          Er(!0), zr()
        }), [zr]),
        nr = (0, Zr.useCallback)((() => {
          Ur.current > 0 ? tr.current = !0 : zr()
        }), [zr]);
      (0, Zr.useEffect)((() => (hr.current = !0, Ir.delete(rr), Er(!0), zr(null === Sr || void 0 === Sr ? void 0 : Sr.response), () => {
        hr.current = !1
      })), [zr, rr, Sr]);
      const er = rr => {
        Nr.current++, Er(!1), mr.current = rr, jr(rr)
      };
      return {
        settings: Qr,
        loading: fr,
        answered: pr,
        retry: Yr,
        refresh: nr,
        change: async function(Sr, Qr) {
          let {
            quiet: Zr = !1,
            onAnswer: jr
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const Ir = mr.current;
          if (null === Ir) return !1;
          er(Qr(Ir)), Ur.current > 0 && (tr.current = !0), Ur.current++;
          const fr = await Wr.c.setSocialSettings(rr, Sr);
          Ur.current--;
          const Er = !("error" in fr);
          if (!hr.current) return Er;
          if (null === jr || void 0 === jr || jr(fr), Zr);
          else if ("error" in fr) ar.h.showMessage({
            translationKey: fr.error
          });
          else
            for (const rr of fr.notFound) ar.h.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: rr
              }
            });
          if (Ur.current > 0) return Er;
          const pr = tr.current;
          return tr.current = !1, !pr && "settings" in fr ? er(fr.settings) : (pr || er(Ir), zr()), Er
        }
      }
    }
  },
  38275: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      e: () => ar
    });
    var Zr = Qr(161);
    const Wr = new Map;

    function ar(rr, Sr) {
      var Qr;
      const Zr = null !== (Qr = Wr.get(rr)) && void 0 !== Qr ? Qr : new Map;
      Zr.set(Sr, Date.now()), Wr.set(rr, Zr)
    }

    function jr(rr) {
      const Sr = Wr.get(rr);
      if (!Sr) return [];
      const Qr = Date.now();
      for (const [Wr, ar] of Sr) Qr - ar >= Zr.l && Sr.delete(Wr);
      return [...Sr.keys()]
    }
  },
  38240: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      const Qr = Sr.toLowerCase();
      for (const Zr of rr)
        if (Zr.toLowerCase() === Qr) return !0;
      return !1
    }

    function Wr(rr, Sr, Qr) {
      const Wr = [],
        ar = [],
        jr = [];
      for (const Ir of rr) !Ir.isError && Ir.name && ("inGame" === Ir.location.status && Ir.location.inLobbyName === Sr || Zr(Qr, Ir.name) ? ar.push({
        friend: Ir,
        place: "here"
      }) : "offline" === Ir.location.status ? jr.push({
        friend: Ir,
        place: "offline"
      }) : Wr.push({
        friend: Ir,
        place: "online"
      }));
      return [...Wr, ...ar, ...jr]
    }

    function ar(rr, Sr, Qr) {
      const Wr = [],
        ar = rr.flatMap((rr => "here" === rr.place ? [rr.friend.name] : []));
      for (const jr of [...ar, ...Sr]) Zr(Wr, jr) || Zr(Qr, jr) || Wr.push(jr);
      return Wr
    }

    function jr(rr, Sr) {
      return null === rr || void 0 === rr || !rr.canManage || Zr(rr.whitelist, Sr) ? "none" : "whitelist" === rr.visibility ? "required" : "quiet"
    }

    function Ir(rr) {
      if (null === rr) return !0;
      const {
        visibility: Sr
      } = rr;
      return "public" === Sr || "unlisted" === Sr || "whitelist" === Sr && rr.canManage
    }

    function fr(rr, Sr, Qr) {
      if (Qr) {
        const Qr = Sr.filter((Sr => !Zr(rr.whitelist, Sr)));
        return {
          ...rr,
          whitelist: [...rr.whitelist, ...Qr]
        }
      }
      return {
        ...rr,
        whitelist: rr.whitelist.filter((rr => !Zr(Sr, rr)))
      }
    }

    function Er(rr, Sr) {
      const Qr = [];
      for (let Zr = 0; Zr < rr.length; Zr += Sr) Qr.push(rr.slice(Zr, Zr + Sr));
      return Qr
    }
    Qr.d(Sr, {
      e: () => Ir,
      g: () => ar,
      j: () => Wr,
      m: () => Zr,
      n: () => Er,
      r: () => jr,
      s: () => fr
    })
  },
  38477: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar
    });
    var Zr = Qr(72),
      Wr = Qr(3404);

    function ar() {
      const rr = (0, Wr.l)("lobbyLeaderboardInfo");
      return (0, Zr.useMemo)((() => function(rr) {
        if (null === rr) return null;
        const Sr = Object.entries(rr),
          Qr = Sr.filter((rr => {
            let [, Sr] = rr;
            return void 0 !== Sr
          }));
        if (Qr.length === Sr.length) return rr;
        const Zr = Object.fromEntries(Qr),
          Wr = Object.keys(rr).filter((rr => !Object.hasOwn(Zr, rr)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${Wr.join(", ")}`), Zr
      }(rr)), [rr])
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);