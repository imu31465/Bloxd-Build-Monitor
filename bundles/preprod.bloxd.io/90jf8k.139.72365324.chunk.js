export const id = 139;
export const ids = [139];
export const modules = {
  7722: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => oF,
      e: () => mW,
      i: () => OF
    });
    var CF = SF(46),
      AF = SF(3621),
      uF = SF(996),
      hF = SF(1262),
      bW = SF(20),
      dF = SF(2614),
      PF = SF(1841),
      RF = SF(1101),
      iW = SF(7744),
      eF = SF(1576),
      EF = SF(1607),
      QF = SF(1046),
      rW = SF(11),
      gW = SF(1475),
      tW = SF(918),
      TF = SF.n(tW),
      aW = SF(7728),
      kW = SF(7730),
      qW = SF(7734),
      VF = SF(7695),
      NF = SF(7737),
      DF = (SF(7740), SF(971));
    let LF = null;

    function mW() {
      return null !== LF
    }

    function OF() {
      return "pad" === LF
    }

    function xW() {
      return "inGame" === rW.b.get("gameState") && !(0, gW.l)()
    }

    function ZF(FF) {
      return (0, kW.u)(FF, RF.m, kW.f, kW.h, kW.j)
    }
    const oF = (0, CF.memo)((function() {
      const {
        t: FF
      } = (0, QF.B)(), {
        userContext: WF
      } = (0, uF.b)(), [SF, rW] = (0, CF.useState)(null), [tW, mW] = (0, CF.useState)(null), OF = (0, CF.useRef)(null), oF = (0, CF.useCallback)((FF => {
        OF.current = FF, mW(FF)
      }), []), YF = (0, CF.useRef)(0), MF = (0, CF.useRef)(null), cW = (0, CF.useRef)({
        x: 0,
        y: 0
      }), [GF, zW] = (0, CF.useState)(0), IF = (0, CF.useMemo)((() => function(FF) {
        const WF = [];
        for (let CF = 0; CF < RF.m; CF++) {
          var SF;
          WF.push(null !== (SF = FF[CF]) && void 0 !== SF ? SF : null)
        }
        return WF
      }((0, iW.g)(WF.getPlayerCosmetics().emote))), [WF, GF]);
      (0, EF.b)("cosmeticsUpdated", (FF => {
        FF.some((FF => FF.local && "emote" === FF.ZD)) && zW((FF => FF + 1))
      }));
      const fF = (0, CF.useRef)(!1),
        yW = (0, CF.useCallback)((function(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === FF && (0, qW.d)(), fF.current = WF, cW.current = {
            x: 0,
            y: 0
          }, oF(null), rW(FF)
        }), [oF]),
        sF = (0, CF.useCallback)((() => {
          rW(null), oF(null), cW.current = {
            x: 0,
            y: 0
          }
        }), [oF]),
        nF = (0, CF.useCallback)((FF => {
          if (Date.now() < YF.current) return;
          const WF = (0, PF.g)(FF),
            SF = !!WF.holdUntilMove,
            CF = SF ? 600 : Math.ceil(1e3 * WF.animation.animation_length / PF.c) + 200;
          YF.current = Date.now() + CF, MF.current = FF, eF.gameBridge.send("playEmote", FF), eF.gameBridge.send("applyTemporaryThirdPerson", SF ? {} : {
            durationMs: CF
          })
        }), []);
      (0, hF.e)("requestToggleEmoteWheel", (() => {
        null === SF ? xW() && yW("click") : sF()
      })), (0, hF.e)("requestEmoteWheelHoldOpen", (() => {
        null === SF && xW() && yW((0, aW.c)() ? "hold" : "click")
      })), (0, hF.e)("requestEmoteWheelPadOpen", (FF => {
        null !== SF || !xW() || (0, VF.d)() || (0, NF.n)() || yW("pad", FF)
      })), (0, hF.e)("requestEmoteRepeatLast", (() => {
        if (null !== SF || !xW() || (0, VF.d)() || (0, NF.n)()) return;
        const FF = MF.current;
        null !== FF && IF.includes(FF) ? nF(FF) : yW("pad", !0)
      }));
      const HF = () => {
        const FF = OF.current,
          WF = null !== FF ? IF[FF] : null;
        null !== WF && "pad" === SF && Date.now() < YF.current || (sF(), null !== WF && nF(WF))
      };
      (0, hF.e)("emoteWheelPadAim", (FF => {
        if ("pad" !== SF) return;
        const WF = (0, kW.E)(FF, RF.m, OF.current);
        oF(null !== WF && null !== IF[WF] ? WF : null)
      })), (0, hF.e)("requestEmoteWheelPadCommit", (FF => {
        "pad" !== SF || FF && fF.current || HF()
      })), (0, hF.e)("appManagerUpdated|activeInputDevice", (FF => {
        null !== SF && "pad" === SF !== ("gamepad" === FF) && sF()
      })), (0, CF.useLayoutEffect)((() => (LF = SF, (0, dF.u)("emoteWheel", "pad" === SF), bW.j.Uu(dF.o), () => {
        LF = null, (0, dF.u)("emoteWheel", !1), bW.j.Uu(dF.o)
      })), [SF]), (0, hF.e)("requestEmoteWheelHoldRelease", (() => {
        "hold" === SF && HF()
      })), (0, hF.e)("requestEmoteWheelClose", (() => {
        null !== SF && sF()
      })), (0, hF.e)("appManagerUpdated|gameState", (FF => {
        "inGame" !== FF && sF()
      }));
      const KF = () => {
        (0, gW.l)() && sF()
      };
      if ((0, hF.e)("appManagerUpdated|openEverythingMenuName", KF), (0, hF.e)("appManagerUpdated|openInGameMenuName", KF), (0, hF.e)("pointerLockUpdate", (FF => {
          FF || "hold" !== SF || sF()
        })), (0, CF.useEffect)((() => {
          if (null === SF) return;
          const FF = FF => {
            "Escape" === FF.key && (FF.stopImmediatePropagation(), FF.preventDefault(), sF())
          };
          return document.addEventListener("keydown", FF, !0), () => {
            document.removeEventListener("keydown", FF, !0)
          }
        }), [SF, sF]), (0, AF.d)(!0, "click" === SF, "EmoteWheelOverlay"), (0, CF.useEffect)((() => {
          if ("hold" === SF) return eF.gameBridge.send("holdEmoteWheel", !0), () => {
            eF.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [SF]), (0, CF.useEffect)((() => {
          if ("hold" !== SF) return;
          const FF = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            WF = kW.t * FF,
            CF = kW.p * FF,
            AF = FF => {
              let SF = cW.current.x + FF.movementX,
                AF = cW.current.y + FF.movementY;
              const uF = Math.hypot(SF, AF);
              if (uF > WF) {
                const FF = WF / uF;
                SF *= FF, AF *= FF
              }
              cW.current = {
                x: SF,
                y: AF
              }, oF(function(FF, WF, SF, CF) {
                if (Math.hypot(FF, WF) < SF) return null;
                const AF = (0, kW.y)(FF, WF, RF.m);
                return null === CF[AF] ? null : AF
              }(SF, AF, CF, IF))
            };
          return document.addEventListener("mousemove", AF), () => {
            document.removeEventListener("mousemove", AF)
          }
        }), [SF, IF, oF]), null === SF) return null;
      const wF = "hold" === SF || "pad" === SF,
        XF = null !== tW ? IF[tW] : null,
        UF = null !== XF ? (0, PF.g)(XF).displayName : FF("emotes:pickEmote");
      return (0, DF.jsx)("div", {
        className: TF()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === SF
        }),
        onMouseDown: FF => {
          FF.target === FF.currentTarget && sF()
        },
        children: (0, DF.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * kW.t + "rem",
            height: 2 * kW.t + "rem"
          },
          children: [(0, DF.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${kW.l} ${kW.l}`,
            children: [IF.map(((WF, SF) => {
              const CF = null !== WF,
                AF = wF && SF === tW;
              return (0, DF.jsx)("path", {
                d: ZF(SF),
                className: TF()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: AF,
                  EmoteWheelWedgeDisabled: !CF
                }),
                onClick: FF => {
                  FF.stopPropagation(), null !== WF && (FF => {
                    sF(), nF(FF)
                  })(WF)
                },
                "aria-label": null !== WF ? (0, PF.g)(WF).displayName : FF("emotes:emptySlot")
              }, SF)
            })), (0, DF.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: kW.f,
              cy: kW.f,
              r: kW.j
            }), (0, DF.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: kW.f,
              cy: kW.f,
              r: kW.h
            }), wF && null !== tW && (0, DF.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: ZF(tW)
            })]
          }), IF.map(((FF, WF) => {
            const SF = null !== FF,
              CF = wF && WF === tW,
              AF = (0, kW.z)(WF, RF.m),
              uF = kW.b * Math.cos(AF),
              hF = kW.b * Math.sin(AF);
            return (0, DF.jsx)("div", {
              className: TF()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: CF,
                EmoteWheelSlotIconDisabled: !SF
              }),
              style: {
                left: `calc(50% + ${uF}rem)`,
                top: `calc(50% + ${hF}rem)`,
                backgroundImage: SF ? `url(/textures/charSkins/previews/emote_${FF}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, WF)
          })), (0, DF.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: UF
          })]
        })
      })
    }))
  },
  7709: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => eF,
      h: () => rW,
      k: () => gW,
      l: () => QF,
      p: () => EF
    });
    var CF = SF(46),
      AF = SF(7715),
      uF = SF(20),
      hF = SF(1576),
      bW = SF(573),
      dF = SF(33),
      PF = SF(1124),
      RF = SF(1594);
    const iW = 50;
    const eF = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = FF => {
          if (0 === this.listeners.size) {
            var WF, SF;
            this.state = {
              ...this.state,
              channel: null !== (WF = null === (SF = RF.d.get("chatChannels")) || void 0 === SF ? void 0 : SF[0]) && void 0 !== WF ? WF : null
            };
            const FF = uF.j.subscribe("reportPlayer", (FF => {
              let {
                playerEId: WF
              } = FF;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, WF]
              })
            }));
            this.stopListening = [hF.gameBridge.subscribe("chatReceived", (FF => {
              let {
                serverChatMsgId: WF,
                content: SF,
                author: CF
              } = FF;
              this.addMessage(WF, SF, CF)
            })), () => {
              uF.j.unsubscribe(FF)
            }, RF.d.subscribe("chatChannels", (FF => {
              var WF;
              this.setState({
                ...this.state,
                channel: null !== (WF = null === FF || void 0 === FF ? void 0 : FF[0]) && void 0 !== WF ? WF : null
              })
            }))]
          }
          return this.listeners.add(FF), () => {
            if (this.listeners.delete(FF), 0 === this.listeners.size) {
              for (const FF of this.stopListening) FF();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const CF = {
          serverChatMsgId: FF,
          content: WF,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: SF
        };
        this.setState({
          ...this.state,
          messages: [CF, ...this.state.messages].slice(0, AF.h)
        })
      }
      selectNextChannel() {
        const FF = RF.d.get("chatChannels");
        if (FF) {
          const WF = FF.findIndex((FF => {
            var WF;
            return FF.channelName === (null === (WF = this.state.channel) || void 0 === WF ? void 0 : WF.channelName)
          }));
          this.setState({
            ...this.state,
            channel: FF[(WF + 1) % FF.length]
          })
        }
      }
      setState(FF) {
        this.state = FF;
        for (const WF of this.listeners) WF()
      }
    };

    function EF() {
      const [FF, WF] = (0, CF.useState)(eF.getState);
      return (0, CF.useEffect)((() => {
        const FF = eF.subscribe((() => {
          WF(eF.getState())
        }));
        return WF(eF.getState()), FF
      }), []), FF
    }

    function QF(FF) {
      var WF, SF, CF;
      if (bW.h && "/" !== FF[0]) return void eF.addMessage(null, [{
        str: "Cannot send chat messages in bloxdk12. Use /help for a list of commands."
      }]);
      if (FF.startsWith("/report")) {
        var AF;
        const WF = null !== (AF = FF.replace("/report", "").trim().split(" ")[0]) && void 0 !== AF ? AF : "";
        if ("" === WF) return void eF.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const SF = hF.gameBridge.latest("players"),
          CF = hF.gameBridge.latest("hiddenPlayerNames"),
          bW = FF => {
            var AF, uF;
            const hF = null !== (AF = null === (uF = SF.byId[FF]) || void 0 === uF ? void 0 : uF.name) && void 0 !== AF ? AF : null;
            return null !== hF && (hF === WF || (0, PF.e)(hF, CF) === WF)
          };
        if (null !== SF.localId && bW(SF.localId)) return void eF.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const FF of SF.ids)
          if (bW(FF)) return uF.j.Uu("OpenReportMenu", {
            playerEId: FF,
            playerName: SF.byId[FF].name,
            rb: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        eF.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      hF.gameBridge.send("sendChatMessage", {
        rb: FF,
        channelName: null !== (WF = null === (SF = eF.getState().channel) || void 0 === SF ? void 0 : SF.channelName) && void 0 !== WF ? WF : null
      });
      const RF = null !== (CF = dF.h.getItem("recentlySentChatMsgs")) && void 0 !== CF ? CF : [];
      RF.push(FF), RF.length > iW && RF.shift(), dF.h.setItem("recentlySentChatMsgs", RF)
    }

    function rW() {
      var FF;
      return null !== (FF = dF.h.getItem("recentlySentChatMsgs")) && void 0 !== FF ? FF : []
    }

    function gW(FF) {
      var WF;
      let SF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const CF = null !== (WF = dF.h.getItem("recentlySentChatMsgs")) && void 0 !== WF ? WF : [],
        AF = CF.length + 1,
        uF = SF ? (FF % AF + AF) % AF : Math.min(CF.length, Math.max(0, FF));
      return {
        stepsBack: uF,
        text: 0 === uF ? "" : CF[CF.length - uF]
      }
    }
  },
  7637: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF,
      e: () => uF
    });
    var CF = SF(1629);
    const AF = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      uF = FF => "string" === typeof FF.icon && "" !== FF.icon && "string" === typeof FF.keycode && AF.test(FF.keycode),
      hF = FF => "Space" === FF ? "_" : CF.h[FF]
  },
  7728: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF
    });
    var CF = SF(11);

    function AF() {
      return !CF.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  7730: (FF, WF, SF) => {
    SF.d(WF, {
      D: () => eF,
      E: () => EF,
      b: () => uF,
      f: () => bW,
      h: () => PF,
      j: () => dF,
      l: () => hF,
      p: () => AF,
      t: () => CF,
      u: () => QF,
      y: () => iW,
      z: () => RF
    });
    const CF = 14,
      AF = 6,
      uF = (CF + AF) / 2,
      hF = 200,
      bW = hF / 2,
      dF = hF / 2 - 1,
      PF = AF / CF * (hF / 2),
      RF = (FF, WF) => -Math.PI / 2 + 2 * FF * Math.PI / WF,
      iW = (FF, WF, SF) => {
        const CF = 2 * Math.PI / SF;
        return (Math.round((Math.atan2(WF, FF) + Math.PI / 2) / CF) % SF + SF) % SF
      },
      eF = .5,
      EF = (FF, WF, SF) => Math.hypot(FF.x, FF.y) < eF ? SF : iW(FF.x, FF.y, WF),
      QF = (FF, WF, SF, CF, AF) => {
        const uF = Math.PI / WF,
          hF = RF(FF, WF),
          bW = hF - uF,
          dF = hF + uF,
          PF = (FF, WF) => `${SF+FF*Math.cos(WF)} ${SF+FF*Math.sin(WF)}`;
        return [`M ${PF(CF,bW)}`, `L ${PF(AF,bW)}`, `A ${AF} ${AF} 0 0 1 ${PF(AF,dF)}`, `L ${PF(CF,dF)}`, `A ${CF} ${CF} 0 0 0 ${PF(CF,bW)}`, "Z"].join(" ")
      }
  },
  7763: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(46),
      AF = SF(7670),
      uF = SF(1955);

    function hF() {
      const FF = (0, uF.k)("shopInfo"),
        [, WF] = (0, CF.useReducer)((FF => FF + 1), 0);
      return (0, uF.h)("shopInfo", WF), !(0, AF.e)(FF)
    }
  },
  7633: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF,
      e: () => hF,
      f: () => bW,
      j: () => AF
    });
    var CF = SF(7637);
    const AF = FF => {
        const WF = [];
        FF.holdingGun && WF.push({
          kind: "reload"
        }), FF.touchscreenActionButton && WF.push({
          kind: "touchButton",
          label: FF.touchscreenActionButton
        });
        for (const uF of null !== (SF = null === (AF = FF.customButtons) || void 0 === AF ? void 0 : AF.filter(CF.e)) && void 0 !== SF ? SF : []) {
          var SF, AF;
          WF.push({
            kind: "customButton",
            id: uF.id,
            icon: uF.icon,
            description: uF.description
          })
        }
        return WF
      },
      uF = FF => FF.length >= 2,
      hF = FF => "specialAction" !== FF.kind,
      bW = (FF, WF) => {
        if (null === FF || null === WF) return FF === WF;
        if (FF.kind !== WF.kind) return !1;
        switch (FF.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return FF.action === WF.action;
          case "customButton":
            return FF.id === WF.id && FF.icon === WF.icon;
          case "touchButton":
            return FF.label === WF.label
        }
      }
  },
  7629: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => RF,
      h: () => EF,
      l: () => iW,
      m: () => QF
    });
    var CF = SF(46),
      AF = SF(20),
      uF = SF(1262),
      hF = SF(7633),
      bW = SF(7644);
    let dF = null;
    const PF = () => dF,
      RF = FF => {
        (0, hF.f)(dF, FF) || (dF = FF, AF.j.Uu(bW.i, dF))
      },
      iW = () => {
        const [FF, WF] = (0, CF.useState)(PF);
        return (0, uF.e)(bW.i, WF), FF
      };
    let eF = !1;
    const EF = FF => {
        FF !== eF && (eF = FF, AF.j.Uu(bW.m, FF))
      },
      QF = () => {
        const [FF, WF] = (0, CF.useState)(eF);
        return (0, uF.e)(bW.m, WF), FF
      }
  },
  7644: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF,
      i: () => CF,
      m: () => AF,
      n: () => bW,
      q: () => dF,
      u: () => PF,
      w: () => hF
    });
    const CF = "controllerActionHintChanged",
      AF = "controllerActionWheelHintChanged",
      uF = "controllerOpenChat",
      hF = "controllerSneakToggledChanged",
      bW = "controllerAttackLatchedChanged",
      dF = "controllerDropStackHoldChanged",
      PF = "controllerPickBlockHintChanged"
  },
  7612: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF,
      f: () => uF,
      g: () => dF,
      j: () => bW
    });
    var CF = SF(1262),
      AF = SF(1234);
    const uF = "controllerInventoryCursorChanged",
      hF = {
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
      bW = () => {
        var FF, WF;
        return (0, CF.i)(uF, null !== (FF = null === (WF = (0, AF.g)()) || void 0 === WF ? void 0 : WF.getInventoryCursorState()) && void 0 !== FF ? FF : hF)
      },
      dF = () => {
        var FF, WF;
        return null !== (FF = null === (WF = (0, AF.g)()) || void 0 === WF ? void 0 : WF.isPadSteppingSlots()) && void 0 !== FF && FF
      }
  },
  7608: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => eF,
      e: () => bW,
      f: () => dF,
      g: () => hF,
      j: () => uF,
      m: () => RF,
      q: () => iW
    });
    let CF = null;
    const AF = new Set,
      uF = FF => (CF = FF, () => {
        if (CF === FF) {
          CF = null;
          for (const FF of AF) FF()
        }
      }),
      hF = FF => (AF.add(FF), () => {
        AF.delete(FF)
      }),
      bW = () => CF,
      dF = () => null !== CF;
    let PF = null;
    const RF = FF => {
        PF = FF
      },
      iW = () => {
        const FF = PF;
        return PF = null, FF
      },
      eF = (FF, WF) => {
        var SF, CF;
        return null !== (SF = null !== (CF = FF.find((FF => FF.element === WF))) && void 0 !== CF ? CF : FF.find((FF => FF.element.contains(WF)))) && void 0 !== SF ? SF : null
      }
  },
  7615: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF,
      c: () => hF
    });
    var CF = SF(46);
    const AF = new WeakMap,
      uF = FF => {
        var WF, SF;
        return null !== (WF = null === (SF = AF.get(FF)) || void 0 === SF ? void 0 : SF.current) && void 0 !== WF ? WF : null
      },
      hF = (FF, WF) => {
        const SF = (0, CF.useRef)(WF);
        SF.current = WF;
        const uF = (0, CF.useRef)(null);
        (0, CF.useEffect)((() => {
          const WF = FF.current,
            CF = uF.current;
          WF !== CF && (CF && AF.get(CF) === SF && AF.delete(CF), uF.current = WF, WF && AF.set(WF, SF))
        })), (0, CF.useEffect)((() => () => {
          const FF = uF.current;
          FF && AF.get(FF) === SF && AF.delete(FF), uF.current = null
        }), [])
      }
  },
  7752: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => bW,
      e: () => PF,
      h: () => iW,
      i: () => RF,
      m: () => dF,
      n: () => EF
    });
    var CF = SF(20),
      AF = SF(1641),
      uF = SF(1234),
      hF = SF(1223);
    const bW = FF => {
        var WF, SF;
        return (0, hF.f)() && null !== (WF = null === (SF = (0, uF.g)()) || void 0 === SF ? void 0 : SF.getGlyphForNoaAction(FF)) && void 0 !== WF ? WF : null
      },
      dF = "controllerGlyph:",
      PF = FF => {
        var WF, SF;
        return null !== (WF = null === (SF = (0, uF.g)()) || void 0 === SF ? void 0 : SF.getPadGlyphIconName(FF)) && void 0 !== WF ? WF : `${dF}xbox/${FF}`
      },
      RF = FF => FF.startsWith(dF),
      iW = FF => {
        var WF, SF;
        return RF(FF) && null !== (WF = null === (SF = (0, uF.g)()) || void 0 === SF ? void 0 : SF.getPadGlyphIconUrl(FF)) && void 0 !== WF ? WF : null
      },
      eF = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", hF.d, AF.f, AF.d],
      EF = FF => {
        const WF = eF.map((WF => CF.j.subscribe(WF, FF)));
        return () => {
          for (const FF of WF) CF.j.unsubscribe(FF)
        }
      }
  },
  7599: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF,
      d: () => CF
    });
    const CF = "controllerOpenKeyboard",
      AF = "controllerKeyboardVisible"
  },
  7700: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF,
      i: () => AF
    });
    let CF = null;
    const AF = function(FF) {
        const WF = {
          cycle: FF,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return CF = WF, () => {
          CF === WF && (CF = null)
        }
      },
      uF = () => {
        var FF;
        return null !== (FF = CF) && void 0 !== FF && FF.canCycle() ? CF.cycle : null
      }
  },
  7737: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF,
      e: () => hF,
      h: () => uF,
      k: () => CF,
      m: () => bW,
      n: () => PF,
      q: () => RF
    });
    const CF = "controllerActionWheelOpen",
      AF = "controllerActionWheelAim",
      uF = "controllerActionWheelCommit",
      hF = "controllerActionWheelClose",
      bW = "controllerActionWheelPick";
    let dF = !1;
    const PF = () => dF,
      RF = FF => {
        dF = FF
      }
  },
  7734: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF,
      d: () => AF
    });
    let CF = 0;
    const AF = () => {
        CF++
      },
      uF = () => CF
  },
  7695: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => dF,
      e: () => AF,
      g: () => hF,
      j: () => uF,
      m: () => CF,
      n: () => PF
    });
    const CF = "controllerQuickChatWheelOpen",
      AF = "controllerQuickChatWheelAim",
      uF = "controllerQuickChatWheelCommit",
      hF = "controllerQuickChatWheelClose";
    let bW = !1;
    const dF = () => bW,
      PF = FF => {
        bW = FF
      }
  },
  7818: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      f: () => dF
    });
    var CF = SF(11),
      AF = SF(1175),
      uF = SF(89);
    const hF = {
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

    function bW() {
      return (0, uF.isMobile)() && "function" === typeof navigator.vibrate
    }
    const dF = new class {
      constructor(FF) {
        this.deps = FF, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(FF, WF) {
        var SF;
        if (!this.deps.enabled()) return;
        const CF = hF[FF],
          AF = null !== WF && void 0 !== WF ? WF : CF.pattern;
        if (null === AF) return void console.warn("No vibration pattern for", FF);
        const uF = this.deps.now();
        uF - this.lastAnyAt < 40 && CF.priority < this.playingPriority || uF - (null !== (SF = this.lastAt.get(FF)) && void 0 !== SF ? SF : -1 / 0) < CF.minGapMs || uF < this.playingUntil && CF.priority < this.playingPriority || (this.lastAt.set(FF, uF), this.lastAnyAt = uF, this.playingUntil = uF + AF.reduce(((FF, WF) => FF + WF), 0), this.playingPriority = CF.priority, this.deps.vibrate(AF))
      }
    }({
      vibrate: FF => {
        navigator.vibrate([...FF])
      },
      now: () => performance.now(),
      enabled: () => bW() && CF.b.get("isTouchScreen") && CF.b.get("clientEscMenuOptions").vibration && !(0, AF.i)()
    })
  },
  7670: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF
    });
    var CF = SF(7675),
      AF = SF(568),
      uF = SF(132);

    function hF(FF) {
      var WF, SF;
      if ((0, AF.Q)(FF)) return !0;
      const hF = null !== (WF = null === (SF = uF.n[uF.s]) || void 0 === SF ? void 0 : SF.adConfig.showRewardedAds) && void 0 !== WF && WF;
      for (const AF in FF) {
        const WF = FF[AF];
        if (null !== WF && void 0 !== WF && WF.items)
          for (const FF in WF.items)
            if ((0, CF.m)(WF.items[FF], hF)) return !1
      }
      return !0
    }
  },
  7715: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      h: () => CF
    });
    const CF = 100;

    function AF(FF) {
      let {
        translationKeys: WF = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return FF.map((FF => {
        var SF;
        return null !== (SF = function(FF, WF) {
          if ("string" === typeof FF) return FF;
          const SF = "str" in FF ? FF.str : FF;
          if ("string" === typeof SF) return SF;
          if ("entityName" in SF) return SF.entityName;
          if (WF && "translationKey" in SF) return `{${SF.translationKey}${void 0===SF.params?"":` ${JSON.stringify(SF.params)}`}}`;
          return null
        }(FF, WF)) && void 0 !== SF ? SF : " "
      })).join("")
    }
  },
  7744: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => RF,
      g: () => bW,
      h: () => dF
    });
    var CF = SF(1834),
      AF = SF(1101),
      uF = SF(1841);
    const hF = ",";

    function bW(FF) {
      if (!FF) return [];
      const WF = new Set,
        SF = [];
      for (const CF of FF.split(hF)) {
        const FF = CF.trim();
        if ((0, uF.k)(FF) && !WF.has(FF) && (WF.add(FF), SF.push(FF), SF.length >= AF.m)) break
      }
      return SF
    }

    function dF(FF) {
      const WF = new Set,
        SF = [];
      for (const CF of FF)
        if ((0, uF.k)(CF) && !WF.has(CF) && (WF.add(CF), SF.push(CF), SF.length >= AF.m)) break;
      return SF.join(hF)
    }

    function PF() {
      return dF(uF.f)
    }

    function RF(FF) {
      var WF;
      return "emote" === FF ? PF() : null !== (WF = iW[FF][0]) && void 0 !== WF ? WF : eF[FF]
    }
    const iW = AF.v.reduce(((FF, WF) => {
        const SF = [];
        for (const uF in CF.i[WF]) {
          var AF;
          "default" === (null === (AF = (0, CF.n)(WF, uF)) || void 0 === AF ? void 0 : AF.cosmeticPack) && SF.push(uF)
        }
        return FF[WF] = SF, FF
      }), {}),
      eF = AF.v.reduce(((FF, WF) => (FF[WF] = Object.keys(CF.i[WF])[0], FF)), {})
  },
  7675: (FF, WF, SF) => {
    function CF(FF, WF) {
      return !FF.hidden && (WF || !FF.isRewardedAd)
    }

    function AF(FF) {
      return "object" === typeof FF ? FF.option : FF
    }

    function uF(FF, WF) {
      var SF;
      if ("dropdown" === (null === (SF = FF.userInput) || void 0 === SF ? void 0 : SF.type) && "object" === typeof FF.userInput.dropdownOptions[0]) {
        for (const SF of FF.userInput.dropdownOptions)
          if (AF(SF) === WF) return "object" === typeof SF ? SF.cost : FF.cost;
        console.error("Didn't find matching option for dropdown item. Item:", FF, "input:", WF)
      }
      return FF.cost
    }

    function hF(FF, WF, SF) {
      var CF;
      const AF = null !== (CF = SF.excludedPlayers) && void 0 !== CF ? CF : [WF];
      return FF.filter((FF => !AF.includes(FF)))
    }
    SF.d(WF, {
      b: () => uF,
      e: () => AF,
      i: () => hF,
      m: () => CF
    })
  },
  7740: () => {}
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);