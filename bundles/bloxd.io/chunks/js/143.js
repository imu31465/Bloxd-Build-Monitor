export const id = 143;
export const ids = [143];
export const modules = {
  8122: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => KB,
      i: () => zB,
      j: () => wB
    });
    var VB = dB(62),
      yB = dB(3951),
      pB = dB(1011),
      lB = dB(1317),
      JB = dB(24),
      YB = dB(2902),
      gB = dB(1985),
      oB = dB(1117),
      kB = dB(8155),
      LB = dB(1679),
      OB = dB(1727),
      DB = dB(1078),
      uB = dB(21),
      HB = dB(1507),
      EB = dB(933),
      vB = dB.n(EB),
      mB = dB(8127),
      iB = dB(8130),
      NB = dB(8134),
      tB = dB(8094),
      fB = dB(8140),
      sB = (dB(8147), dB(980));
    let MB = null;

    function zB() {
      return null !== MB
    }

    function wB() {
      return "pad" === MB
    }

    function UB() {
      return "inGame" === uB.d.get("gameState") && !(0, HB.l)()
    }

    function FB(BB) {
      return (0, iB.v)(BB, oB.k, iB.g, iB.j, iB.k)
    }
    const KB = (0, VB.memo)((function() {
      const {
        t: BB
      } = (0, DB.z)(), {
        userContext: TB
      } = (0, pB.b)(), [dB, uB] = (0, VB.useState)(null), [EB, zB] = (0, VB.useState)(null), wB = (0, VB.useRef)(null), KB = (0, VB.useCallback)((BB => {
        wB.current = BB, zB(BB)
      }), []), rB = (0, VB.useRef)(0), IB = (0, VB.useRef)(null), cB = (0, VB.useRef)({
        x: 0,
        y: 0
      }), [SB, PB] = (0, VB.useState)(0), QB = (0, VB.useMemo)((() => function(BB) {
        const TB = [];
        for (let VB = 0; VB < oB.k; VB++) {
          var dB;
          TB.push(null !== (dB = BB[VB]) && void 0 !== dB ? dB : null)
        }
        return TB
      }((0, kB.h)(TB.getPlayerCosmetics().emote))), [TB, SB]);
      (0, OB.c)("cosmeticsUpdated", (BB => {
        BB.some((BB => BB.local && "emote" === BB.tp)) && PB((BB => BB + 1))
      }));
      const RB = (0, VB.useRef)(!1),
        aB = (0, VB.useCallback)((function(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === BB && (0, NB.h)(), RB.current = TB, cB.current = {
            x: 0,
            y: 0
          }, KB(null), uB(BB)
        }), [KB]),
        ZB = (0, VB.useCallback)((() => {
          uB(null), KB(null), cB.current = {
            x: 0,
            y: 0
          }
        }), [KB]),
        XB = (0, VB.useCallback)((BB => {
          if (Date.now() < rB.current) return;
          const TB = (0, gB.g)(BB),
            dB = !!TB.holdUntilMove,
            VB = dB ? 600 : Math.ceil(1e3 * TB.animation.animation_length / gB.b) + 200;
          rB.current = Date.now() + VB, IB.current = BB, LB.gameBridge.send("playEmote", BB), LB.gameBridge.send("applyTemporaryThirdPerson", dB ? {} : {
            durationMs: VB
          })
        }), []);
      (0, lB.e)("requestToggleEmoteWheel", (() => {
        null === dB ? UB() && aB("click") : ZB()
      })), (0, lB.e)("requestEmoteWheelHoldOpen", (() => {
        null === dB && UB() && aB((0, mB.e)() ? "hold" : "click")
      })), (0, lB.e)("requestEmoteWheelPadOpen", (BB => {
        null !== dB || !UB() || (0, tB.e)() || (0, fB.r)() || aB("pad", BB)
      })), (0, lB.e)("requestEmoteRepeatLast", (() => {
        if (null !== dB || !UB() || (0, tB.e)() || (0, fB.r)()) return;
        const BB = IB.current;
        null !== BB && QB.includes(BB) ? XB(BB) : aB("pad", !0)
      }));
      const WB = () => {
        const BB = wB.current,
          TB = null !== BB ? QB[BB] : null;
        null !== TB && "pad" === dB && Date.now() < rB.current || (ZB(), null !== TB && XB(TB))
      };
      (0, lB.e)("emoteWheelPadAim", (BB => {
        if ("pad" !== dB) return;
        const TB = (0, iB.C)(BB, oB.k, wB.current);
        KB(null !== TB && null !== QB[TB] ? TB : null)
      })), (0, lB.e)("requestEmoteWheelPadCommit", (BB => {
        "pad" !== dB || BB && RB.current || WB()
      })), (0, lB.e)("appManagerUpdated|activeInputDevice", (BB => {
        null !== dB && "pad" === dB !== ("gamepad" === BB) && ZB()
      })), (0, VB.useLayoutEffect)((() => (MB = dB, (0, YB.t)("emoteWheel", "pad" === dB), JB.h.yH(YB.l), () => {
        MB = null, (0, YB.t)("emoteWheel", !1), JB.h.yH(YB.l)
      })), [dB]), (0, lB.e)("requestEmoteWheelHoldRelease", (() => {
        "hold" === dB && WB()
      })), (0, lB.e)("requestEmoteWheelClose", (() => {
        null !== dB && ZB()
      })), (0, lB.e)("appManagerUpdated|gameState", (BB => {
        "inGame" !== BB && ZB()
      }));
      const hB = () => {
        (0, HB.l)() && ZB()
      };
      if ((0, lB.e)("appManagerUpdated|openEverythingMenuName", hB), (0, lB.e)("appManagerUpdated|openInGameMenuName", hB), (0, lB.e)("pointerLockUpdate", (BB => {
          BB || "hold" !== dB || ZB()
        })), (0, VB.useEffect)((() => {
          if (null === dB) return;
          const BB = BB => {
            "Escape" === BB.key && (BB.stopImmediatePropagation(), BB.preventDefault(), ZB())
          };
          return document.addEventListener("keydown", BB, !0), () => {
            document.removeEventListener("keydown", BB, !0)
          }
        }), [dB, ZB]), (0, yB.d)(!0, "click" === dB, "EmoteWheelOverlay"), (0, VB.useEffect)((() => {
          if ("hold" === dB) return LB.gameBridge.send("holdEmoteWheel", !0), () => {
            LB.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [dB]), (0, VB.useEffect)((() => {
          if ("hold" !== dB) return;
          const BB = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            TB = iB.r * BB,
            VB = iB.n * BB,
            yB = BB => {
              let dB = cB.current.x + BB.movementX,
                yB = cB.current.y + BB.movementY;
              const pB = Math.hypot(dB, yB);
              if (pB > TB) {
                const BB = TB / pB;
                dB *= BB, yB *= BB
              }
              cB.current = {
                x: dB,
                y: yB
              }, KB(function(BB, TB, dB, VB) {
                if (Math.hypot(BB, TB) < dB) return null;
                const yB = (0, iB.y)(BB, TB, oB.k);
                return null === VB[yB] ? null : yB
              }(dB, yB, VB, QB))
            };
          return document.addEventListener("mousemove", yB), () => {
            document.removeEventListener("mousemove", yB)
          }
        }), [dB, QB, KB]), null === dB) return null;
      const CB = "hold" === dB || "pad" === dB,
        GB = null !== EB ? QB[EB] : null,
        qB = null !== GB ? (0, gB.g)(GB).displayName : BB("emotes:pickEmote");
      return (0, sB.jsx)("div", {
        className: vB()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === dB
        }),
        onMouseDown: BB => {
          BB.target === BB.currentTarget && ZB()
        },
        children: (0, sB.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * iB.r + "rem",
            height: 2 * iB.r + "rem"
          },
          children: [(0, sB.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${iB.m} ${iB.m}`,
            children: [QB.map(((TB, dB) => {
              const VB = null !== TB,
                yB = CB && dB === EB;
              return (0, sB.jsx)("path", {
                d: FB(dB),
                className: vB()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: yB,
                  EmoteWheelWedgeDisabled: !VB
                }),
                onClick: BB => {
                  BB.stopPropagation(), null !== TB && (BB => {
                    ZB(), XB(BB)
                  })(TB)
                },
                "aria-label": null !== TB ? (0, gB.g)(TB).displayName : BB("emotes:emptySlot")
              }, dB)
            })), (0, sB.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: iB.g,
              cy: iB.g,
              r: iB.k
            }), (0, sB.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: iB.g,
              cy: iB.g,
              r: iB.j
            }), CB && null !== EB && (0, sB.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: FB(EB)
            })]
          }), QB.map(((BB, TB) => {
            const dB = null !== BB,
              VB = CB && TB === EB,
              yB = (0, iB.A)(TB, oB.k),
              pB = iB.c * Math.cos(yB),
              lB = iB.c * Math.sin(yB);
            return (0, sB.jsx)("div", {
              className: vB()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: VB,
                EmoteWheelSlotIconDisabled: !dB
              }),
              style: {
                left: `calc(50% + ${pB}rem)`,
                top: `calc(50% + ${lB}rem)`,
                backgroundImage: dB ? `url(/textures/charSkins/previews/emote_${BB}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, TB)
          })), (0, sB.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: qB
          })]
        })
      })
    }))
  },
  8107: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => LB,
      g: () => uB,
      k: () => HB,
      l: () => DB,
      p: () => OB
    });
    var VB = dB(62),
      yB = dB(8116),
      pB = dB(24),
      lB = dB(1679),
      JB = dB(618),
      YB = dB(33),
      gB = dB(1139),
      oB = dB(1708);
    const kB = 50;
    const LB = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = BB => {
          if (0 === this.listeners.size) {
            var TB, dB;
            this.state = {
              ...this.state,
              channel: null !== (TB = null === (dB = oB.c.get("chatChannels")) || void 0 === dB ? void 0 : dB[0]) && void 0 !== TB ? TB : null
            };
            const BB = pB.h.subscribe("reportPlayer", (BB => {
              let {
                playerEId: TB
              } = BB;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, TB]
              })
            }));
            this.stopListening = [lB.gameBridge.subscribe("chatReceived", (BB => {
              let {
                serverChatMsgId: TB,
                content: dB,
                author: VB
              } = BB;
              this.addMessage(TB, dB, VB)
            })), () => {
              pB.h.unsubscribe(BB)
            }, oB.c.subscribe("chatChannels", (BB => {
              var TB;
              this.setState({
                ...this.state,
                channel: null !== (TB = null === BB || void 0 === BB ? void 0 : BB[0]) && void 0 !== TB ? TB : null
              })
            }))]
          }
          return this.listeners.add(BB), () => {
            if (this.listeners.delete(BB), 0 === this.listeners.size) {
              for (const BB of this.stopListening) BB();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const VB = {
          serverChatMsgId: BB,
          content: TB,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: dB
        };
        this.setState({
          ...this.state,
          messages: [VB, ...this.state.messages].slice(0, yB.f)
        })
      }
      selectNextChannel() {
        const BB = oB.c.get("chatChannels");
        if (BB) {
          const TB = BB.findIndex((BB => {
            var TB;
            return BB.channelName === (null === (TB = this.state.channel) || void 0 === TB ? void 0 : TB.channelName)
          }));
          this.setState({
            ...this.state,
            channel: BB[(TB + 1) % BB.length]
          })
        }
      }
      setState(BB) {
        this.state = BB;
        for (const TB of this.listeners) TB()
      }
    };

    function OB() {
      const [BB, TB] = (0, VB.useState)(LB.getState);
      return (0, VB.useEffect)((() => {
        const BB = LB.subscribe((() => {
          TB(LB.getState())
        }));
        return TB(LB.getState()), BB
      }), []), BB
    }

    function DB(BB) {
      var TB, dB;
      if (JB.n && "/" !== BB[0]) LB.addMessage(null, [{
        str: "Cannot send chat messages in bloxdk12. Use /help for a list of commands."
      }]);
      else {
        if (BB.startsWith("/report")) {
          var VB;
          const TB = null !== (VB = BB.replace("/report", "").trim().split(" ")[0]) && void 0 !== VB ? VB : "";
          if ("" === TB) return void LB.addMessage(null, [{
            str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
          }]);
          const dB = lB.gameBridge.latest("players"),
            yB = lB.gameBridge.latest("hiddenPlayerNames"),
            JB = BB => {
              var VB, pB;
              const lB = null !== (VB = null === (pB = dB.byId[BB]) || void 0 === pB ? void 0 : pB.name) && void 0 !== VB ? VB : null;
              return null !== lB && (lB === TB || (0, gB.d)(lB, yB) === TB)
            };
          if (null !== dB.localId && JB(dB.localId)) return void LB.addMessage(null, [{
            str: "You cannot report yourself."
          }]);
          for (const BB of dB.ids)
            if (JB(BB)) return pB.h.yH("OpenReportMenu", {
              playerEId: BB,
              playerName: dB.byId[BB].name,
              Jo: null,
              serverChatMsgId: null
            }), void console.log("Opening report menu...");
          LB.addMessage(null, [{
            str: "Player not found in lobby."
          }])
        }
        lB.gameBridge.send("sendChatMessage", {
            Jo: BB,
            channelName: null !== (TB = null === (dB = LB.getState().channel) || void 0 === dB ? void 0 : dB.channelName) && void 0 !== TB ? TB : null
          }),
          function(BB) {
            var TB;
            const dB = null !== (TB = YB.j.getItem("recentlySentChatMsgs")) && void 0 !== TB ? TB : [];
            dB.push(BB), dB.length > kB && dB.shift();
            YB.j.setItem("recentlySentChatMsgs", dB)
          }(BB)
      }
    }

    function uB() {
      var BB;
      return null !== (BB = YB.j.getItem("recentlySentChatMsgs")) && void 0 !== BB ? BB : []
    }

    function HB(BB) {
      var TB;
      let dB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const VB = null !== (TB = YB.j.getItem("recentlySentChatMsgs")) && void 0 !== TB ? TB : [],
        yB = VB.length + 1,
        pB = dB ? (BB % yB + yB) % yB : Math.min(VB.length, Math.max(0, BB));
      return {
        stepsBack: pB,
        text: 0 === pB ? "" : VB[VB.length - pB]
      }
    }
  },
  8043: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB,
      e: () => pB
    });
    var VB = dB(1751);
    const yB = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      pB = BB => "string" === typeof BB.icon && "" !== BB.icon && "string" === typeof BB.keycode && yB.test(BB.keycode),
      lB = BB => "Space" === BB ? "_" : VB.j[BB]
  },
  8127: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => yB
    });
    var VB = dB(21);

    function yB() {
      return !VB.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8130: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => oB,
      B: () => LB,
      C: () => OB,
      c: () => pB,
      g: () => JB,
      j: () => gB,
      k: () => YB,
      m: () => lB,
      n: () => yB,
      r: () => VB,
      v: () => DB,
      y: () => kB
    });
    const VB = 14,
      yB = 6,
      pB = (VB + yB) / 2,
      lB = 200,
      JB = lB / 2,
      YB = lB / 2 - 1,
      gB = yB / VB * (lB / 2),
      oB = (BB, TB) => -Math.PI / 2 + 2 * BB * Math.PI / TB,
      kB = (BB, TB, dB) => {
        const VB = 2 * Math.PI / dB;
        return (Math.round((Math.atan2(TB, BB) + Math.PI / 2) / VB) % dB + dB) % dB
      },
      LB = .5,
      OB = (BB, TB, dB) => Math.hypot(BB.x, BB.y) < LB ? dB : kB(BB.x, BB.y, TB),
      DB = (BB, TB, dB, VB, yB) => {
        const pB = Math.PI / TB,
          lB = oB(BB, TB),
          JB = lB - pB,
          YB = lB + pB,
          gB = (BB, TB) => `${dB+BB*Math.cos(TB)} ${dB+BB*Math.sin(TB)}`;
        return [`M ${gB(VB,JB)}`, `L ${gB(yB,JB)}`, `A ${yB} ${yB} 0 0 1 ${gB(yB,YB)}`, `L ${gB(VB,YB)}`, `A ${VB} ${VB} 0 0 0 ${gB(VB,JB)}`, "Z"].join(" ")
      }
  },
  8171: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB
    });
    var VB = dB(62),
      yB = dB(8070),
      pB = dB(2139);

    function lB() {
      const BB = (0, pB.j)("shopInfo"),
        [, TB] = (0, VB.useReducer)((BB => BB + 1), 0);
      return (0, pB.i)("shopInfo", TB), !(0, yB.e)(BB)
    }
  },
  8038: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      f: () => lB,
      h: () => JB,
      i: () => yB
    });
    var VB = dB(8043);
    const yB = BB => {
        const TB = [];
        BB.holdingGun && TB.push({
          kind: "reload"
        }), BB.touchscreenActionButton && TB.push({
          kind: "touchButton",
          label: BB.touchscreenActionButton
        });
        for (const pB of null !== (dB = null === (yB = BB.customButtons) || void 0 === yB ? void 0 : yB.filter(VB.e)) && void 0 !== dB ? dB : []) {
          var dB, yB;
          TB.push({
            kind: "customButton",
            id: pB.id,
            icon: pB.icon,
            description: pB.description
          })
        }
        return TB
      },
      pB = BB => BB.length >= 2,
      lB = BB => "specialAction" !== BB.kind,
      JB = (BB, TB) => {
        if (null === BB || null === TB) return BB === TB;
        if (BB.kind !== TB.kind) return !1;
        switch (BB.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return BB.action === TB.action;
          case "customButton":
            return BB.id === TB.id && BB.icon === TB.icon;
          case "touchButton":
            return BB.label === TB.label
        }
      }
  },
  8031: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => oB,
      e: () => OB,
      i: () => kB,
      k: () => DB
    });
    var VB = dB(62),
      yB = dB(24),
      pB = dB(1317),
      lB = dB(8038),
      JB = dB(8045);
    let YB = null;
    const gB = () => YB,
      oB = BB => {
        (0, lB.h)(YB, BB) || (YB = BB, yB.h.yH(JB.g, YB))
      },
      kB = () => {
        const [BB, TB] = (0, VB.useState)(gB);
        return (0, pB.e)(JB.g, TB), BB
      };
    let LB = !1;
    const OB = BB => {
        BB !== LB && (LB = BB, yB.h.yH(JB.h, BB))
      },
      DB = () => {
        const [BB, TB] = (0, VB.useState)(LB);
        return (0, pB.e)(JB.h, TB), BB
      }
  },
  8045: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB,
      g: () => VB,
      h: () => yB,
      i: () => JB,
      j: () => YB,
      k: () => gB,
      o: () => lB
    });
    const VB = "controllerActionHintChanged",
      yB = "controllerActionWheelHintChanged",
      pB = "controllerOpenChat",
      lB = "controllerSneakToggledChanged",
      JB = "controllerAttackLatchedChanged",
      YB = "controllerDropStackHoldChanged",
      gB = "controllerPickBlockHintChanged"
  },
  8016: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB,
      d: () => pB,
      f: () => YB,
      j: () => JB
    });
    var VB = dB(1317),
      yB = dB(1286);
    const pB = "controllerInventoryCursorChanged",
      lB = {
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
      JB = () => {
        var BB, TB;
        return (0, VB.f)(pB, null !== (BB = null === (TB = (0, yB.i)()) || void 0 === TB ? void 0 : TB.getInventoryCursorState()) && void 0 !== BB ? BB : lB)
      },
      YB = () => {
        var BB, TB;
        return null !== (BB = null === (TB = (0, yB.i)()) || void 0 === TB ? void 0 : TB.isPadSteppingSlots()) && void 0 !== BB && BB
      }
  },
  8013: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => LB,
      g: () => JB,
      i: () => YB,
      k: () => lB,
      n: () => pB,
      r: () => oB,
      s: () => kB
    });
    let VB = null;
    const yB = new Set,
      pB = BB => (VB = BB, () => {
        if (VB === BB) {
          VB = null;
          for (const BB of yB) BB()
        }
      }),
      lB = BB => (yB.add(BB), () => {
        yB.delete(BB)
      }),
      JB = () => VB,
      YB = () => null !== VB;
    let gB = null;
    const oB = BB => {
        gB = BB
      },
      kB = () => {
        const BB = gB;
        return gB = null, BB
      },
      LB = (BB, TB) => {
        var dB, VB;
        return null !== (dB = null !== (VB = BB.find((BB => BB.element === TB))) && void 0 !== VB ? VB : BB.find((BB => BB.element.contains(TB)))) && void 0 !== dB ? dB : null
      }
  },
  8018: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB,
      g: () => lB
    });
    var VB = dB(62);
    const yB = new WeakMap,
      pB = BB => {
        var TB, dB;
        return null !== (TB = null === (dB = yB.get(BB)) || void 0 === dB ? void 0 : dB.current) && void 0 !== TB ? TB : null
      },
      lB = (BB, TB) => {
        const dB = (0, VB.useRef)(TB);
        dB.current = TB;
        const pB = (0, VB.useRef)(null);
        (0, VB.useEffect)((() => {
          const TB = BB.current,
            VB = pB.current;
          TB !== VB && (VB && yB.get(VB) === dB && yB.delete(VB), pB.current = TB, TB && yB.set(TB, dB))
        })), (0, VB.useEffect)((() => () => {
          const BB = pB.current;
          BB && yB.get(BB) === dB && yB.delete(BB), pB.current = null
        }), [])
      }
  },
  8164: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      g: () => gB,
      k: () => kB,
      n: () => oB,
      r: () => YB,
      v: () => OB
    });
    var VB = dB(24),
      yB = dB(1764),
      pB = dB(1286),
      lB = dB(1275);
    const JB = BB => {
        var TB, dB;
        return (0, lB.i)() && null !== (TB = null === (dB = (0, pB.i)()) || void 0 === dB ? void 0 : dB.getGlyphForNoaAction(BB)) && void 0 !== TB ? TB : null
      },
      YB = "controllerGlyph:",
      gB = BB => {
        var TB, dB;
        return null !== (TB = null === (dB = (0, pB.i)()) || void 0 === dB ? void 0 : dB.getPadGlyphIconName(BB)) && void 0 !== TB ? TB : `${YB}xbox/${BB}`
      },
      oB = BB => BB.startsWith(YB),
      kB = BB => {
        var TB, dB;
        return oB(BB) && null !== (TB = null === (dB = (0, pB.i)()) || void 0 === dB ? void 0 : dB.getPadGlyphIconUrl(BB)) && void 0 !== TB ? TB : null
      },
      LB = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", lB.e, yB.e, yB.d],
      OB = BB => {
        const TB = LB.map((TB => VB.h.subscribe(TB, BB)));
        return () => {
          for (const BB of TB) VB.h.unsubscribe(BB)
        }
      }
  },
  8009: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => yB,
      f: () => VB
    });
    const VB = "controllerOpenKeyboard",
      yB = "controllerKeyboardVisible"
  },
  8103: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      c: () => yB
    });
    let VB = null;
    const yB = function(BB) {
        const TB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return VB = TB, () => {
          VB === TB && (VB = null)
        }
      },
      pB = () => {
        var BB;
        return null !== (BB = VB) && void 0 !== BB && BB.canCycle() ? VB.cycle : null
      }
  },
  8140: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      g: () => lB,
      h: () => pB,
      l: () => VB,
      o: () => JB,
      r: () => gB,
      v: () => oB
    });
    const VB = "controllerActionWheelOpen",
      yB = "controllerActionWheelAim",
      pB = "controllerActionWheelCommit",
      lB = "controllerActionWheelClose",
      JB = "controllerActionWheelPick";
    let YB = !1;
    const gB = () => YB,
      oB = BB => {
        YB = BB
      }
  },
  8134: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      h: () => yB
    });
    let VB = 0;
    const yB = () => {
        VB++
      },
      pB = () => VB
  },
  8094: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => YB,
      g: () => yB,
      i: () => lB,
      m: () => pB,
      p: () => VB,
      s: () => gB
    });
    const VB = "controllerQuickChatWheelOpen",
      yB = "controllerQuickChatWheelAim",
      pB = "controllerQuickChatWheelCommit",
      lB = "controllerQuickChatWheelClose";
    let JB = !1;
    const YB = () => JB,
      gB = BB => {
        JB = BB
      }
  },
  8204: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      f: () => YB
    });
    var VB = dB(21),
      yB = dB(1209),
      pB = dB(95);
    const lB = {
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
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
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

    function JB() {
      return (0, pB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const YB = new class {
      constructor(BB) {
        this.deps = BB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(BB, TB) {
        var dB;
        if (!this.deps.enabled()) return;
        const VB = lB[BB],
          yB = null !== TB && void 0 !== TB ? TB : VB.pattern;
        if (null === yB) return void console.warn("No vibration pattern for", BB);
        const pB = this.deps.now();
        pB - this.lastAnyAt < 40 && VB.priority < this.playingPriority || pB - (null !== (dB = this.lastAt.get(BB)) && void 0 !== dB ? dB : -1 / 0) < VB.minGapMs || pB < this.playingUntil && VB.priority < this.playingPriority || (this.lastAt.set(BB, pB), this.lastAnyAt = pB, this.playingUntil = pB + yB.reduce(((BB, TB) => BB + TB), 0), this.playingPriority = VB.priority, this.deps.vibrate(yB))
      }
    }({
      vibrate: BB => {
        navigator.vibrate([...BB])
      },
      now: () => performance.now(),
      enabled: () => JB() && VB.d.get("isTouchScreen") && VB.d.get("clientEscMenuOptions").vibration && !(0, yB.h)()
    })
  },
  8070: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    var VB = dB(8075),
      yB = dB(572),
      pB = dB(138);

    function lB(BB) {
      var TB, dB;
      if ((0, yB.M)(BB)) return !0;
      const lB = null !== (TB = null === (dB = pB.q[pB.v]) || void 0 === dB ? void 0 : dB.adConfig.showRewardedAds) && void 0 !== TB && TB;
      for (const yB in BB) {
        const TB = BB[yB];
        if (null !== TB && void 0 !== TB && TB.items)
          for (const BB in TB.items)
            if ((0, VB.m)(TB.items[BB], lB)) return !1
      }
      return !0
    }
  },
  8116: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      f: () => VB
    });
    const VB = 100;

    function yB(BB) {
      let {
        translationKeys: TB = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return BB.map((BB => {
        var dB;
        return null !== (dB = function(BB, TB) {
          if ("string" === typeof BB) return BB;
          const dB = "str" in BB ? BB.str : BB;
          if ("string" === typeof dB) return dB;
          if ("entityName" in dB) return dB.entityName;
          if (TB && "translationKey" in dB) return `{${dB.translationKey}${void 0===dB.params?"":` ${JSON.stringify(dB.params)}`}}`;
          return null
        }(BB, TB)) && void 0 !== dB ? dB : " "
      })).join("")
    }
  },
  8155: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => oB,
      h: () => JB,
      i: () => YB
    });
    var VB = dB(1978),
      yB = dB(1117),
      pB = dB(1985);
    const lB = ",";

    function JB(BB) {
      if (!BB) return [];
      const TB = new Set,
        dB = [];
      for (const VB of BB.split(lB)) {
        const BB = VB.trim();
        if ((0, pB.k)(BB) && !TB.has(BB) && (TB.add(BB), dB.push(BB), dB.length >= yB.k)) break
      }
      return dB
    }

    function YB(BB) {
      const TB = new Set,
        dB = [];
      for (const VB of BB)
        if ((0, pB.k)(VB) && !TB.has(VB) && (TB.add(VB), dB.push(VB), dB.length >= yB.k)) break;
      return dB.join(lB)
    }

    function gB() {
      return YB(pB.e)
    }

    function oB(BB) {
      var TB;
      return "emote" === BB ? gB() : null !== (TB = kB[BB][0]) && void 0 !== TB ? TB : LB[BB]
    }
    const kB = yB.q.reduce(((BB, TB) => {
        const dB = [];
        for (const pB in VB.d[TB]) {
          var yB;
          "default" === (null === (yB = (0, VB.h)(TB, pB)) || void 0 === yB ? void 0 : yB.cosmeticPack) && dB.push(pB)
        }
        return BB[TB] = dB, BB
      }), {}),
      LB = yB.q.reduce(((BB, TB) => (BB[TB] = Object.keys(VB.d[TB])[0], BB)), {})
  },
  8075: (BB, TB, dB) => {
    function VB(BB, TB) {
      return !BB.hidden && (TB || !BB.isRewardedAd)
    }

    function yB(BB) {
      return "object" === typeof BB ? BB.option : BB
    }

    function pB(BB, TB) {
      var dB;
      if ("dropdown" === (null === (dB = BB.userInput) || void 0 === dB ? void 0 : dB.type) && "object" === typeof BB.userInput.dropdownOptions[0]) {
        for (const dB of BB.userInput.dropdownOptions)
          if (yB(dB) === TB) return "object" === typeof dB ? dB.cost : BB.cost;
        console.error("Didn't find matching option for dropdown item. Item:", BB, "input:", TB)
      }
      return BB.cost
    }

    function lB(BB, TB, dB) {
      var VB;
      const yB = null !== (VB = dB.excludedPlayers) && void 0 !== VB ? VB : [TB];
      return BB.filter((BB => !yB.includes(BB)))
    }
    dB.d(TB, {
      e: () => pB,
      i: () => yB,
      k: () => lB,
      m: () => VB
    })
  },
  8147: () => {}
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);