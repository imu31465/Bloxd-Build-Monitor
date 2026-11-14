export const id = 142;
export const ids = [142];
export const modules = {
  7699: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Qc,
      d: () => gB,
      h: () => Uc
    });
    var Vc = nc(73),
      Ic = nc(3652),
      rB = nc(985),
      uc = nc(1252),
      sc = nc(35),
      Mc = nc(2608),
      Pc = nc(1826),
      qB = nc(1108),
      Oc = nc(7729),
      Tc = nc(1566),
      fc = nc(1609),
      mB = nc(1051),
      ec = nc(27),
      tB = nc(1464),
      Sc = nc(912),
      yB = nc.n(Sc),
      zB = nc(7702),
      pc = nc(7708),
      hc = nc(7714),
      aB = nc(7675),
      lc = nc(7718),
      Yc = (nc(7721), nc(957));
    let Lc = null;

    function gB() {
      return null !== Lc
    }

    function Uc() {
      return "pad" === Lc
    }

    function bB() {
      return "inGame" === ec.d.get("gameState") && !(0, tB.p)()
    }

    function Zc(cB) {
      return (0, pc.u)(cB, qB.m, pc.g, pc.h, pc.l)
    }
    const Qc = (0, Vc.memo)((function() {
      const {
        t: cB
      } = (0, mB.x)(), {
        userContext: Bc
      } = (0, rB.c)(), [nc, ec] = (0, Vc.useState)(null), [Sc, gB] = (0, Vc.useState)(null), Uc = (0, Vc.useRef)(null), Qc = (0, Vc.useCallback)((cB => {
        Uc.current = cB, gB(cB)
      }), []), Cc = (0, Vc.useRef)(0), vB = (0, Vc.useRef)(null), Dc = (0, Vc.useRef)({
        x: 0,
        y: 0
      }), [Nc, Ec] = (0, Vc.useState)(0), oc = (0, Vc.useMemo)((() => function(cB) {
        const Bc = [];
        for (let Vc = 0; Vc < qB.m; Vc++) {
          var nc;
          Bc.push(null !== (nc = cB[Vc]) && void 0 !== nc ? nc : null)
        }
        return Bc
      }((0, Oc.f)(Bc.getPlayerCosmetics().emote))), [Bc, Nc]);
      (0, fc.d)("cosmeticsUpdated", (cB => {
        cB.some((cB => cB.local && "emote" === cB.RZ)) && Ec((cB => cB + 1))
      }));
      const Wc = (0, Vc.useRef)(!1),
        wc = (0, Vc.useCallback)((function(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === cB && (0, hc.e)(), Wc.current = Bc, Dc.current = {
            x: 0,
            y: 0
          }, Qc(null), ec(cB)
        }), [Qc]),
        kB = (0, Vc.useCallback)((() => {
          ec(null), Qc(null), Dc.current = {
            x: 0,
            y: 0
          }
        }), [Qc]),
        Xc = (0, Vc.useCallback)((cB => {
          if (Date.now() < Cc.current) return;
          const Bc = (0, Pc.j)(cB),
            nc = !!Bc.holdUntilMove,
            Vc = nc ? 600 : Math.ceil(1e3 * Bc.animation.animation_length / Pc.d) + 200;
          Cc.current = Date.now() + Vc, vB.current = cB, Tc.gameBridge.send("playEmote", cB), Tc.gameBridge.send("applyTemporaryThirdPerson", nc ? {} : {
            durationMs: Vc
          })
        }), []);
      (0, uc.f)("requestToggleEmoteWheel", (() => {
        null === nc ? bB() && wc("click") : kB()
      })), (0, uc.f)("requestEmoteWheelHoldOpen", (() => {
        null === nc && bB() && wc((0, zB.b)() ? "hold" : "click")
      })), (0, uc.f)("requestEmoteWheelPadOpen", (cB => {
        null !== nc || !bB() || (0, aB.e)() || (0, lc.q)() || wc("pad", cB)
      })), (0, uc.f)("requestEmoteRepeatLast", (() => {
        if (null !== nc || !bB() || (0, aB.e)() || (0, lc.q)()) return;
        const cB = vB.current;
        null !== cB && oc.includes(cB) ? Xc(cB) : wc("pad", !0)
      }));
      const Hc = () => {
        const cB = Uc.current,
          Bc = null !== cB ? oc[cB] : null;
        null !== Bc && "pad" === nc && Date.now() < Cc.current || (kB(), null !== Bc && Xc(Bc))
      };
      (0, uc.f)("emoteWheelPadAim", (cB => {
        if ("pad" !== nc) return;
        const Bc = (0, pc.H)(cB, qB.m, Uc.current);
        Qc(null !== Bc && null !== oc[Bc] ? Bc : null)
      })), (0, uc.f)("requestEmoteWheelPadCommit", (cB => {
        "pad" !== nc || cB && Wc.current || Hc()
      })), (0, uc.f)("appManagerUpdated|activeInputDevice", (cB => {
        null !== nc && "pad" === nc !== ("gamepad" === cB) && kB()
      })), (0, Vc.useLayoutEffect)((() => (Lc = nc, (0, Mc.v)("emoteWheel", "pad" === nc), sc.i.Vu(Mc.n), () => {
        Lc = null, (0, Mc.v)("emoteWheel", !1), sc.i.Vu(Mc.n)
      })), [nc]), (0, uc.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === nc && Hc()
      })), (0, uc.f)("requestEmoteWheelClose", (() => {
        null !== nc && kB()
      })), (0, uc.f)("appManagerUpdated|gameState", (cB => {
        "inGame" !== cB && kB()
      }));
      const Fc = () => {
        (0, tB.p)() && kB()
      };
      if ((0, uc.f)("appManagerUpdated|openEverythingMenuName", Fc), (0, uc.f)("appManagerUpdated|openInGameMenuName", Fc), (0, uc.f)("pointerLockUpdate", (cB => {
          cB || "hold" !== nc || kB()
        })), (0, Vc.useEffect)((() => {
          if (null === nc) return;
          const cB = cB => {
            "Escape" === cB.key && (cB.stopImmediatePropagation(), cB.preventDefault(), kB())
          };
          return document.addEventListener("keydown", cB, !0), () => {
            document.removeEventListener("keydown", cB, !0)
          }
        }), [nc, kB]), (0, Ic.c)(!0, "click" === nc, "EmoteWheelOverlay"), (0, Vc.useEffect)((() => {
          if ("hold" === nc) return Tc.gameBridge.send("holdEmoteWheel", !0), () => {
            Tc.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [nc]), (0, Vc.useEffect)((() => {
          if ("hold" !== nc) return;
          const cB = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            Bc = pc.t * cB,
            Vc = pc.r * cB,
            Ic = cB => {
              let nc = Dc.current.x + cB.movementX,
                Ic = Dc.current.y + cB.movementY;
              const rB = Math.hypot(nc, Ic);
              if (rB > Bc) {
                const cB = Bc / rB;
                nc *= cB, Ic *= cB
              }
              Dc.current = {
                x: nc,
                y: Ic
              }, Qc(function(cB, Bc, nc, Vc) {
                if (Math.hypot(cB, Bc) < nc) return null;
                const Ic = (0, pc.v)(cB, Bc, qB.m);
                return null === Vc[Ic] ? null : Ic
              }(nc, Ic, Vc, oc))
            };
          return document.addEventListener("mousemove", Ic), () => {
            document.removeEventListener("mousemove", Ic)
          }
        }), [nc, oc, Qc]), null === nc) return null;
      const Jc = "hold" === nc || "pad" === nc,
        jB = null !== Sc ? oc[Sc] : null,
        Rc = null !== jB ? (0, Pc.j)(jB).displayName : cB("emotes:pickEmote");
      return (0, Yc.jsx)("div", {
        className: yB()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === nc
        }),
        onMouseDown: cB => {
          cB.target === cB.currentTarget && kB()
        },
        children: (0, Yc.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * pc.t + "rem",
            height: 2 * pc.t + "rem"
          },
          children: [(0, Yc.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${pc.o} ${pc.o}`,
            children: [oc.map(((Bc, nc) => {
              const Vc = null !== Bc,
                Ic = Jc && nc === Sc;
              return (0, Yc.jsx)("path", {
                d: Zc(nc),
                className: yB()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: Ic,
                  EmoteWheelWedgeDisabled: !Vc
                }),
                onClick: cB => {
                  cB.stopPropagation(), null !== Bc && (cB => {
                    kB(), Xc(cB)
                  })(Bc)
                },
                "aria-label": null !== Bc ? (0, Pc.j)(Bc).displayName : cB("emotes:emptySlot")
              }, nc)
            })), (0, Yc.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: pc.g,
              cy: pc.g,
              r: pc.l
            }), (0, Yc.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: pc.g,
              cy: pc.g,
              r: pc.h
            }), Jc && null !== Sc && (0, Yc.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: Zc(Sc)
            })]
          }), oc.map(((cB, Bc) => {
            const nc = null !== cB,
              Vc = Jc && Bc === Sc,
              Ic = (0, pc.z)(Bc, qB.m),
              rB = pc.e * Math.cos(Ic),
              uc = pc.e * Math.sin(Ic);
            return (0, Yc.jsx)("div", {
              className: yB()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: Vc,
                EmoteWheelSlotIconDisabled: !nc
              }),
              style: {
                left: `calc(50% + ${rB}rem)`,
                top: `calc(50% + ${uc}rem)`,
                backgroundImage: nc ? `url(/textures/charSkins/previews/emote_${cB}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, Bc)
          })), (0, Yc.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: Rc
          })]
        })
      })
    }))
  },
  7689: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Tc,
      g: () => ec,
      j: () => tB,
      l: () => mB,
      m: () => fc
    });
    var Vc = nc(73),
      Ic = nc(7692),
      rB = nc(35),
      uc = nc(1566),
      sc = nc(578),
      Mc = nc(51),
      Pc = nc(1125),
      qB = nc(1594);
    const Oc = 50;
    const Tc = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = cB => {
          if (0 === this.listeners.size) {
            var Bc, nc;
            this.state = {
              ...this.state,
              channel: null !== (Bc = null === (nc = qB.d.get("chatChannels")) || void 0 === nc ? void 0 : nc[0]) && void 0 !== Bc ? Bc : null
            };
            const cB = rB.i.subscribe("reportPlayer", (cB => {
              let {
                playerEId: Bc
              } = cB;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, Bc]
              })
            }));
            this.stopListening = [uc.gameBridge.subscribe("chatReceived", (cB => {
              let {
                serverChatMsgId: Bc,
                content: nc,
                author: Vc
              } = cB;
              this.addMessage(Bc, nc, Vc)
            })), () => {
              rB.i.unsubscribe(cB)
            }, qB.d.subscribe("chatChannels", (cB => {
              var Bc;
              this.setState({
                ...this.state,
                channel: null !== (Bc = null === cB || void 0 === cB ? void 0 : cB[0]) && void 0 !== Bc ? Bc : null
              })
            }))]
          }
          return this.listeners.add(cB), () => {
            if (this.listeners.delete(cB), 0 === this.listeners.size) {
              for (const cB of this.stopListening) cB();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Vc = {
          serverChatMsgId: cB,
          content: Bc,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: nc
        };
        this.setState({
          ...this.state,
          messages: [Vc, ...this.state.messages].slice(0, Ic.g)
        })
      }
      selectNextChannel() {
        const cB = qB.d.get("chatChannels");
        if (cB) {
          const Bc = cB.findIndex((cB => {
            var Bc;
            return cB.channelName === (null === (Bc = this.state.channel) || void 0 === Bc ? void 0 : Bc.channelName)
          }));
          this.setState({
            ...this.state,
            channel: cB[(Bc + 1) % cB.length]
          })
        }
      }
      setState(cB) {
        this.state = cB;
        for (const Bc of this.listeners) Bc()
      }
    };

    function fc() {
      const [cB, Bc] = (0, Vc.useState)(Tc.getState);
      return (0, Vc.useEffect)((() => {
        const cB = Tc.subscribe((() => {
          Bc(Tc.getState())
        }));
        return Bc(Tc.getState()), cB
      }), []), cB
    }

    function mB(cB) {
      var Bc, nc, Vc;
      if (sc.o && "/" !== cB[0]) return void Tc.addMessage(null, [{
        str: "Cannot send chat messages in bloxdk12. Use /help for a list of commands."
      }]);
      if (cB.startsWith("/report")) {
        var Ic;
        const Bc = null !== (Ic = cB.replace("/report", "").trim().split(" ")[0]) && void 0 !== Ic ? Ic : "";
        if ("" === Bc) return void Tc.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const nc = uc.gameBridge.latest("players"),
          Vc = uc.gameBridge.latest("hiddenPlayerNames"),
          sc = cB => {
            var Ic, rB;
            const uc = null !== (Ic = null === (rB = nc.byId[cB]) || void 0 === rB ? void 0 : rB.name) && void 0 !== Ic ? Ic : null;
            return null !== uc && (uc === Bc || (0, Pc.e)(uc, Vc) === Bc)
          };
        if (null !== nc.localId && sc(nc.localId)) return void Tc.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const cB of nc.ids)
          if (sc(cB)) return rB.i.Vu("OpenReportMenu", {
            playerEId: cB,
            playerName: nc.byId[cB].name,
            Uu: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        Tc.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      uc.gameBridge.send("sendChatMessage", {
        Uu: cB,
        channelName: null !== (Bc = null === (nc = Tc.getState().channel) || void 0 === nc ? void 0 : nc.channelName) && void 0 !== Bc ? Bc : null
      });
      const qB = null !== (Vc = Mc.h.getItem("recentlySentChatMsgs")) && void 0 !== Vc ? Vc : [];
      qB.push(cB), qB.length > Oc && qB.shift(), Mc.h.setItem("recentlySentChatMsgs", qB)
    }

    function ec() {
      var cB;
      return null !== (cB = Mc.h.getItem("recentlySentChatMsgs")) && void 0 !== cB ? cB : []
    }

    function tB(cB) {
      var Bc;
      let nc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Vc = null !== (Bc = Mc.h.getItem("recentlySentChatMsgs")) && void 0 !== Bc ? Bc : [],
        Ic = Vc.length + 1,
        rB = nc ? (cB % Ic + Ic) % Ic : Math.min(Vc.length, Math.max(0, cB));
      return {
        stepsBack: rB,
        text: 0 === rB ? "" : Vc[Vc.length - rB]
      }
    }
  },
  7625: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc,
      g: () => rB
    });
    var Vc = nc(1630);
    const Ic = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      rB = cB => "string" === typeof cB.icon && "" !== cB.icon && "string" === typeof cB.keycode && Ic.test(cB.keycode),
      uc = cB => "Space" === cB ? "_" : Vc.j[cB]
  },
  7702: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic
    });
    var Vc = nc(27);

    function Ic() {
      return !Vc.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  7708: (cB, Bc, nc) => {
    nc.d(Bc, {
      D: () => Tc,
      H: () => fc,
      e: () => rB,
      g: () => sc,
      h: () => Pc,
      l: () => Mc,
      o: () => uc,
      r: () => Ic,
      t: () => Vc,
      u: () => mB,
      v: () => Oc,
      z: () => qB
    });
    const Vc = 14,
      Ic = 6,
      rB = (Vc + Ic) / 2,
      uc = 200,
      sc = uc / 2,
      Mc = uc / 2 - 1,
      Pc = Ic / Vc * (uc / 2),
      qB = (cB, Bc) => -Math.PI / 2 + 2 * cB * Math.PI / Bc,
      Oc = (cB, Bc, nc) => {
        const Vc = 2 * Math.PI / nc;
        return (Math.round((Math.atan2(Bc, cB) + Math.PI / 2) / Vc) % nc + nc) % nc
      },
      Tc = .5,
      fc = (cB, Bc, nc) => Math.hypot(cB.x, cB.y) < Tc ? nc : Oc(cB.x, cB.y, Bc),
      mB = (cB, Bc, nc, Vc, Ic) => {
        const rB = Math.PI / Bc,
          uc = qB(cB, Bc),
          sc = uc - rB,
          Mc = uc + rB,
          Pc = (cB, Bc) => `${nc+cB*Math.cos(Bc)} ${nc+cB*Math.sin(Bc)}`;
        return [`M ${Pc(Vc,sc)}`, `L ${Pc(Ic,sc)}`, `A ${Ic} ${Ic} 0 0 1 ${Pc(Ic,Mc)}`, `L ${Pc(Vc,Mc)}`, `A ${Vc} ${Vc} 0 0 0 ${Pc(Vc,sc)}`, "Z"].join(" ")
      }
  },
  7747: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc
    });
    var Vc = nc(73),
      Ic = nc(7656),
      rB = nc(1946);

    function uc() {
      const cB = (0, rB.j)("shopInfo"),
        [, Bc] = (0, Vc.useReducer)((cB => cB + 1), 0);
      return (0, rB.f)("shopInfo", Bc), !(0, Ic.e)(cB)
    }
  },
  7618: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB,
      g: () => uc,
      j: () => sc,
      l: () => Ic
    });
    var Vc = nc(7625);
    const Ic = cB => {
        const Bc = [];
        cB.holdingGun && Bc.push({
          kind: "reload"
        }), cB.touchscreenActionButton && Bc.push({
          kind: "touchButton",
          label: cB.touchscreenActionButton
        });
        for (const rB of null !== (nc = null === (Ic = cB.customButtons) || void 0 === Ic ? void 0 : Ic.filter(Vc.g)) && void 0 !== nc ? nc : []) {
          var nc, Ic;
          Bc.push({
            kind: "customButton",
            id: rB.id,
            icon: rB.icon,
            description: rB.description
          })
        }
        return Bc
      },
      rB = cB => cB.length >= 2,
      uc = cB => "specialAction" !== cB.kind,
      sc = (cB, Bc) => {
        if (null === cB || null === Bc) return cB === Bc;
        if (cB.kind !== Bc.kind) return !1;
        switch (cB.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return cB.action === Bc.action;
          case "customButton":
            return cB.id === Bc.id && cB.icon === Bc.icon;
          case "touchButton":
            return cB.label === Bc.label
        }
      }
  },
  7613: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => qB,
      d: () => fc,
      e: () => Oc,
      g: () => mB
    });
    var Vc = nc(73),
      Ic = nc(35),
      rB = nc(1252),
      uc = nc(7618),
      sc = nc(7634);
    let Mc = null;
    const Pc = () => Mc,
      qB = cB => {
        (0, uc.j)(Mc, cB) || (Mc = cB, Ic.i.Vu(sc.f, Mc))
      },
      Oc = () => {
        const [cB, Bc] = (0, Vc.useState)(Pc);
        return (0, rB.f)(sc.f, Bc), cB
      };
    let Tc = !1;
    const fc = cB => {
        cB !== Tc && (Tc = cB, Ic.i.Vu(sc.j, cB))
      },
      mB = () => {
        const [cB, Bc] = (0, Vc.useState)(Tc);
        return (0, rB.f)(sc.j, Bc), cB
      }
  },
  7634: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB,
      f: () => Vc,
      j: () => Ic,
      k: () => sc,
      m: () => Mc,
      q: () => Pc,
      r: () => uc
    });
    const Vc = "controllerActionHintChanged",
      Ic = "controllerActionWheelHintChanged",
      rB = "controllerOpenChat",
      uc = "controllerSneakToggledChanged",
      sc = "controllerAttackLatchedChanged",
      Mc = "controllerDropStackHoldChanged",
      Pc = "controllerPickBlockHintChanged"
  },
  7597: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc,
      f: () => rB,
      h: () => Mc,
      l: () => sc
    });
    var Vc = nc(1252),
      Ic = nc(1237);
    const rB = "controllerInventoryCursorChanged",
      uc = {
        showing: !1,
        kind: null,
        holding: !1,
        slotHasItem: !1,
        pressHints: null,
        hasCategories: !1,
        hasList: !1,
        openButtonCloses: !1,
        steppingSlots: !1,
        quickMoveToHotbar: !1,
        dropStackHold: null,
        hotbarPicking: !1
      },
      sc = () => {
        var cB, Bc;
        return (0, Vc.g)(rB, null !== (cB = null === (Bc = (0, Ic.f)()) || void 0 === Bc ? void 0 : Bc.getInventoryCursorState()) && void 0 !== cB ? cB : uc)
      },
      Mc = () => {
        var cB, Bc;
        return null !== (cB = null === (Bc = (0, Ic.f)()) || void 0 === Bc ? void 0 : Bc.isPadSteppingSlots()) && void 0 !== cB && cB
      }
  },
  7592: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Tc,
      g: () => sc,
      k: () => Mc,
      o: () => uc,
      s: () => rB,
      w: () => qB,
      x: () => Oc
    });
    let Vc = null;
    const Ic = new Set,
      rB = cB => (Vc = cB, () => {
        if (Vc === cB) {
          Vc = null;
          for (const cB of Ic) cB()
        }
      }),
      uc = cB => (Ic.add(cB), () => {
        Ic.delete(cB)
      }),
      sc = () => Vc,
      Mc = () => null !== Vc;
    let Pc = null;
    const qB = cB => {
        Pc = cB
      },
      Oc = () => {
        const cB = Pc;
        return Pc = null, cB
      },
      Tc = (cB, Bc) => {
        var nc, Vc;
        return null !== (nc = null !== (Vc = cB.find((cB => cB.element === Bc))) && void 0 !== Vc ? Vc : cB.find((cB => cB.element.contains(Bc)))) && void 0 !== nc ? nc : null
      }
  },
  7601: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      e: () => uc
    });
    var Vc = nc(73);
    const Ic = new WeakMap,
      rB = cB => {
        var Bc, nc;
        return null !== (Bc = null === (nc = Ic.get(cB)) || void 0 === nc ? void 0 : nc.current) && void 0 !== Bc ? Bc : null
      },
      uc = (cB, Bc) => {
        const nc = (0, Vc.useRef)(Bc);
        nc.current = Bc;
        const rB = (0, Vc.useRef)(null);
        (0, Vc.useEffect)((() => {
          const Bc = cB.current,
            Vc = rB.current;
          Bc !== Vc && (Vc && Ic.get(Vc) === nc && Ic.delete(Vc), rB.current = Bc, Bc && Ic.set(Bc, nc))
        })), (0, Vc.useEffect)((() => () => {
          const cB = rB.current;
          cB && Ic.get(cB) === nc && Ic.delete(cB), rB.current = null
        }), [])
      }
  },
  7738: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc,
      h: () => Pc,
      j: () => Oc,
      n: () => qB,
      p: () => Mc,
      r: () => fc
    });
    var Vc = nc(35),
      Ic = nc(1644),
      rB = nc(1237),
      uc = nc(1226);
    const sc = cB => {
        var Bc, nc;
        return (0, uc.f)() && null !== (Bc = null === (nc = (0, rB.f)()) || void 0 === nc ? void 0 : nc.getGlyphForNoaAction(cB)) && void 0 !== Bc ? Bc : null
      },
      Mc = "controllerGlyph:",
      Pc = cB => {
        var Bc, nc;
        return null !== (Bc = null === (nc = (0, rB.f)()) || void 0 === nc ? void 0 : nc.getPadGlyphIconName(cB)) && void 0 !== Bc ? Bc : `${Mc}xbox/${cB}`
      },
      qB = cB => cB.startsWith(Mc),
      Oc = cB => {
        var Bc, nc;
        return qB(cB) && null !== (Bc = null === (nc = (0, rB.f)()) || void 0 === nc ? void 0 : nc.getPadGlyphIconUrl(cB)) && void 0 !== Bc ? Bc : null
      },
      Tc = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", uc.e, Ic.c, Ic.b],
      fc = cB => {
        const Bc = Tc.map((Bc => Vc.i.subscribe(Bc, cB)));
        return () => {
          for (const cB of Bc) Vc.i.unsubscribe(cB)
        }
      }
  },
  7583: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic,
      h: () => Vc
    });
    const Vc = "controllerOpenKeyboard",
      Ic = "controllerKeyboardVisible"
  },
  7684: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB,
      f: () => Ic
    });
    let Vc = null;
    const Ic = function(cB) {
        const Bc = {
          cycle: cB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Vc = Bc, () => {
          Vc === Bc && (Vc = null)
        }
      },
      rB = () => {
        var cB;
        return null !== (cB = Vc) && void 0 !== cB && cB.canCycle() ? Vc.cycle : null
      }
  },
  7718: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic,
      f: () => uc,
      j: () => rB,
      m: () => Vc,
      p: () => sc,
      q: () => Pc,
      s: () => qB
    });
    const Vc = "controllerActionWheelOpen",
      Ic = "controllerActionWheelAim",
      rB = "controllerActionWheelCommit",
      uc = "controllerActionWheelClose",
      sc = "controllerActionWheelPick";
    let Mc = !1;
    const Pc = () => Mc,
      qB = cB => {
        Mc = cB
      }
  },
  7714: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      e: () => Ic
    });
    let Vc = 0;
    const Ic = () => {
        Vc++
      },
      rB = () => Vc
  },
  7675: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Mc,
      g: () => Ic,
      k: () => uc,
      m: () => rB,
      n: () => Vc,
      p: () => Pc
    });
    const Vc = "controllerQuickChatWheelOpen",
      Ic = "controllerQuickChatWheelAim",
      rB = "controllerQuickChatWheelCommit",
      uc = "controllerQuickChatWheelClose";
    let sc = !1;
    const Mc = () => sc,
      Pc = cB => {
        sc = cB
      }
  },
  7795: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => sc,
      g: () => Mc
    });
    var Vc = nc(27),
      Ic = nc(1177),
      rB = nc(107);
    const uc = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      autorunReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      autorunLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function sc() {
      return (0, rB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Mc = new class {
      constructor(cB) {
        this.deps = cB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(cB, Bc) {
        var nc;
        if (!this.deps.enabled()) return;
        const Vc = uc[cB],
          Ic = null !== Bc && void 0 !== Bc ? Bc : Vc.pattern;
        if (null === Ic) return void console.warn("No vibration pattern for", cB);
        const rB = this.deps.now();
        rB - this.lastAnyAt < 40 && Vc.priority < this.playingPriority || rB - (null !== (nc = this.lastAt.get(cB)) && void 0 !== nc ? nc : -1 / 0) < Vc.minGapMs || rB < this.playingUntil && Vc.priority < this.playingPriority || (this.lastAt.set(cB, rB), this.lastAnyAt = rB, this.playingUntil = rB + Ic.reduce(((cB, Bc) => cB + Bc), 0), this.playingPriority = Vc.priority, this.deps.vibrate(Ic))
      }
    }({
      vibrate: cB => {
        navigator.vibrate([...cB])
      },
      now: () => performance.now(),
      enabled: () => sc() && Vc.d.get("isTouchScreen") && Vc.d.get("clientEscMenuOptions").vibration && !(0, Ic.g)()
    })
  },
  7656: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(7665),
      Ic = nc(569),
      rB = nc(145);

    function uc(cB) {
      var Bc, nc;
      if ((0, Ic.E)(cB)) return !0;
      const uc = null !== (Bc = null === (nc = rB.m[rB.r]) || void 0 === nc ? void 0 : nc.adConfig.showRewardedAds) && void 0 !== Bc && Bc;
      for (const Ic in cB) {
        const Bc = cB[Ic];
        if (null !== Bc && void 0 !== Bc && Bc.items)
          for (const cB in Bc.items)
            if ((0, Vc.f)(Bc.items[cB], uc)) return !1
      }
      return !0
    }
  },
  7692: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      g: () => Vc
    });
    const Vc = 100;

    function Ic(cB) {
      let {
        translationKeys: Bc = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return cB.map((cB => {
        var nc;
        return null !== (nc = function(cB, Bc) {
          if ("string" === typeof cB) return cB;
          const nc = "str" in cB ? cB.str : cB;
          if ("string" === typeof nc) return nc;
          if ("entityName" in nc) return nc.entityName;
          if (Bc && "translationKey" in nc) return `{${nc.translationKey}${void 0===nc.params?"":` ${JSON.stringify(nc.params)}`}}`;
          return null
        }(cB, Bc)) && void 0 !== nc ? nc : " "
      })).join("")
    }
  },
  7729: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => qB,
      f: () => sc,
      g: () => Mc
    });
    var Vc = nc(1819),
      Ic = nc(1108),
      rB = nc(1826);
    const uc = ",";

    function sc(cB) {
      if (!cB) return [];
      const Bc = new Set,
        nc = [];
      for (const Vc of cB.split(uc)) {
        const cB = Vc.trim();
        if ((0, rB.l)(cB) && !Bc.has(cB) && (Bc.add(cB), nc.push(cB), nc.length >= Ic.m)) break
      }
      return nc
    }

    function Mc(cB) {
      const Bc = new Set,
        nc = [];
      for (const Vc of cB)
        if ((0, rB.l)(Vc) && !Bc.has(Vc) && (Bc.add(Vc), nc.push(Vc), nc.length >= Ic.m)) break;
      return nc.join(uc)
    }

    function Pc() {
      return Mc(rB.h)
    }

    function qB(cB) {
      var Bc;
      return "emote" === cB ? Pc() : null !== (Bc = Oc[cB][0]) && void 0 !== Bc ? Bc : Tc[cB]
    }
    const Oc = Ic.v.reduce(((cB, Bc) => {
        const nc = [];
        for (const rB in Vc.e[Bc]) {
          var Ic;
          "default" === (null === (Ic = (0, Vc.k)(Bc, rB)) || void 0 === Ic ? void 0 : Ic.cosmeticPack) && nc.push(rB)
        }
        return cB[Bc] = nc, cB
      }), {}),
      Tc = Ic.v.reduce(((cB, Bc) => (cB[Bc] = Object.keys(Vc.e[Bc])[0], cB)), {})
  },
  7665: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      return !cB.hidden && (Bc || !cB.isRewardedAd)
    }

    function Ic(cB) {
      return "object" === typeof cB ? cB.option : cB
    }

    function rB(cB, Bc) {
      var nc;
      if ("dropdown" === (null === (nc = cB.userInput) || void 0 === nc ? void 0 : nc.type) && "object" === typeof cB.userInput.dropdownOptions[0]) {
        for (const nc of cB.userInput.dropdownOptions)
          if (Ic(nc) === Bc) return "object" === typeof nc ? nc.cost : cB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", cB, "input:", Bc)
      }
      return cB.cost
    }

    function uc(cB, Bc, nc) {
      var Vc;
      const Ic = null !== (Vc = nc.excludedPlayers) && void 0 !== Vc ? Vc : [Bc];
      return cB.filter((cB => !Ic.includes(cB)))
    }
    nc.d(Bc, {
      c: () => rB,
      d: () => Ic,
      e: () => uc,
      f: () => Vc
    })
  },
  7721: () => {}
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);