export const id = 139;
export const ids = [139];
export const modules = {
  7683: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => aR,
      g: () => cR,
      h: () => XW
    });
    var wW = MW(75),
      CW = MW(3587),
      zR = MW(969),
      AW = MW(1253),
      bR = MW(33),
      yR = MW(2550),
      NW = MW(1835),
      eW = MW(1066),
      BW = MW(7714),
      tR = MW(1544),
      TW = MW(1571),
      gR = MW(1027),
      iR = MW(27),
      YW = MW(1459),
      JW = MW(897),
      PW = MW.n(JW),
      IW = MW(7691),
      oW = MW(7693),
      lW = MW(7698),
      FW = MW(7665),
      fW = MW(7702),
      QW = (MW(7710), MW(940));
    let rR = null;

    function cR() {
      return null !== rR
    }

    function XW() {
      return "pad" === rR
    }

    function jR() {
      return "inGame" === iR.b.get("gameState") && !(0, YW.o)()
    }

    function kR(WW) {
      return (0, oW.t)(WW, eW.q, oW.e, oW.h, oW.l)
    }
    const aR = (0, wW.memo)((function() {
      const {
        t: WW
      } = (0, gR.C)(), {
        userContext: RW
      } = (0, zR.c)(), [MW, iR] = (0, wW.useState)(null), [JW, cR] = (0, wW.useState)(null), XW = (0, wW.useRef)(null), aR = (0, wW.useCallback)((WW => {
        XW.current = WW, cR(WW)
      }), []), sW = (0, wW.useRef)(0), dW = (0, wW.useRef)(null), pW = (0, wW.useRef)({
        x: 0,
        y: 0
      }), [hW, UW] = (0, wW.useState)(0), EW = (0, wW.useMemo)((() => function(WW) {
        const RW = [];
        for (let wW = 0; wW < eW.q; wW++) {
          var MW;
          RW.push(null !== (MW = WW[wW]) && void 0 !== MW ? MW : null)
        }
        return RW
      }((0, BW.e)(RW.getPlayerCosmetics().emote))), [RW, hW]);
      (0, TW.d)("cosmeticsUpdated", (WW => {
        WW.some((WW => WW.local && "emote" === WW.Ur)) && UW((WW => WW + 1))
      }));
      const VW = (0, wW.useRef)(!1),
        mR = (0, wW.useCallback)((function(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === WW && (0, lW.h)(), VW.current = RW, pW.current = {
            x: 0,
            y: 0
          }, aR(null), iR(WW)
        }), [aR]),
        xR = (0, wW.useCallback)((() => {
          iR(null), aR(null), pW.current = {
            x: 0,
            y: 0
          }
        }), [aR]),
        vR = (0, wW.useCallback)((WW => {
          if (Date.now() < sW.current) return;
          const RW = (0, NW.i)(WW),
            MW = !!RW.holdUntilMove,
            wW = MW ? 600 : Math.ceil(1e3 * RW.animation.animation_length / NW.c) + 200;
          sW.current = Date.now() + wW, dW.current = WW, tR.gameBridge.send("playEmote", WW), tR.gameBridge.send("applyTemporaryThirdPerson", MW ? {} : {
            durationMs: wW
          })
        }), []);
      (0, AW.f)("requestToggleEmoteWheel", (() => {
        null === MW ? jR() && mR("click") : xR()
      })), (0, AW.f)("requestEmoteWheelHoldOpen", (() => {
        null === MW && jR() && mR((0, IW.d)() ? "hold" : "click")
      })), (0, AW.f)("requestEmoteWheelPadOpen", (WW => {
        null !== MW || !jR() || (0, FW.b)() || (0, fW.s)() || mR("pad", WW)
      })), (0, AW.f)("requestEmoteRepeatLast", (() => {
        if (null !== MW || !jR() || (0, FW.b)() || (0, fW.s)()) return;
        const WW = dW.current;
        null !== WW && EW.includes(WW) ? vR(WW) : mR("pad", !0)
      }));
      const KW = () => {
        const WW = XW.current,
          RW = null !== WW ? EW[WW] : null;
        null !== RW && "pad" === MW && Date.now() < sW.current || (xR(), null !== RW && vR(RW))
      };
      (0, AW.f)("emoteWheelPadAim", (WW => {
        if ("pad" !== MW) return;
        const RW = (0, oW.F)(WW, eW.q, XW.current);
        aR(null !== RW && null !== EW[RW] ? RW : null)
      })), (0, AW.f)("requestEmoteWheelPadCommit", (WW => {
        "pad" !== MW || WW && VW.current || KW()
      })), (0, AW.f)("appManagerUpdated|activeInputDevice", (WW => {
        null !== MW && "pad" === MW !== ("gamepad" === WW) && xR()
      })), (0, wW.useLayoutEffect)((() => (rR = MW, (0, yR.o)("emoteWheel", "pad" === MW), bR.k.Sz(yR.h), () => {
        rR = null, (0, yR.o)("emoteWheel", !1), bR.k.Sz(yR.h)
      })), [MW]), (0, AW.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === MW && KW()
      })), (0, AW.f)("requestEmoteWheelClose", (() => {
        null !== MW && xR()
      })), (0, AW.f)("appManagerUpdated|gameState", (WW => {
        "inGame" !== WW && xR()
      }));
      const uW = () => {
        (0, YW.o)() && xR()
      };
      if ((0, AW.f)("appManagerUpdated|openEverythingMenuName", uW), (0, AW.f)("appManagerUpdated|openInGameMenuName", uW), (0, AW.f)("pointerLockUpdate", (WW => {
          WW || "hold" !== MW || xR()
        })), (0, wW.useEffect)((() => {
          if (null === MW) return;
          const WW = WW => {
            "Escape" === WW.key && (WW.stopImmediatePropagation(), WW.preventDefault(), xR())
          };
          return document.addEventListener("keydown", WW, !0), () => {
            document.removeEventListener("keydown", WW, !0)
          }
        }), [MW, xR]), (0, CW.d)(!0, "click" === MW, "EmoteWheelOverlay"), (0, wW.useEffect)((() => {
          if ("hold" === MW) return tR.gameBridge.send("holdEmoteWheel", !0), () => {
            tR.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [MW]), (0, wW.useEffect)((() => {
          if ("hold" !== MW) return;
          const WW = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            RW = oW.s * WW,
            wW = oW.r * WW,
            CW = WW => {
              let MW = pW.current.x + WW.movementX,
                CW = pW.current.y + WW.movementY;
              const zR = Math.hypot(MW, CW);
              if (zR > RW) {
                const WW = RW / zR;
                MW *= WW, CW *= WW
              }
              pW.current = {
                x: MW,
                y: CW
              }, aR(function(WW, RW, MW, wW) {
                if (Math.hypot(WW, RW) < MW) return null;
                const CW = (0, oW.u)(WW, RW, eW.q);
                return null === wW[CW] ? null : CW
              }(MW, CW, wW, EW))
            };
          return document.addEventListener("mousemove", CW), () => {
            document.removeEventListener("mousemove", CW)
          }
        }), [MW, EW, aR]), null === MW) return null;
      const OW = "hold" === MW || "pad" === MW,
        nW = null !== JW ? EW[JW] : null,
        GW = null !== nW ? (0, NW.i)(nW).displayName : WW("emotes:pickEmote");
      return (0, QW.jsx)("div", {
        className: PW()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === MW
        }),
        onMouseDown: WW => {
          WW.target === WW.currentTarget && xR()
        },
        children: (0, QW.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * oW.s + "rem",
            height: 2 * oW.s + "rem"
          },
          children: [(0, QW.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${oW.p} ${oW.p}`,
            children: [EW.map(((RW, MW) => {
              const wW = null !== RW,
                CW = OW && MW === JW;
              return (0, QW.jsx)("path", {
                d: kR(MW),
                className: PW()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: CW,
                  EmoteWheelWedgeDisabled: !wW
                }),
                onClick: WW => {
                  WW.stopPropagation(), null !== RW && (WW => {
                    xR(), vR(WW)
                  })(RW)
                },
                "aria-label": null !== RW ? (0, NW.i)(RW).displayName : WW("emotes:emptySlot")
              }, MW)
            })), (0, QW.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: oW.e,
              cy: oW.e,
              r: oW.l
            }), (0, QW.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: oW.e,
              cy: oW.e,
              r: oW.h
            }), OW && null !== JW && (0, QW.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: kR(JW)
            })]
          }), EW.map(((WW, RW) => {
            const MW = null !== WW,
              wW = OW && RW === JW,
              CW = (0, oW.y)(RW, eW.q),
              zR = oW.b * Math.cos(CW),
              AW = oW.b * Math.sin(CW);
            return (0, QW.jsx)("div", {
              className: PW()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: wW,
                EmoteWheelSlotIconDisabled: !MW
              }),
              style: {
                left: `calc(50% + ${zR}rem)`,
                top: `calc(50% + ${AW}rem)`,
                backgroundImage: MW ? `url(/textures/charSkins/previews/emote_${WW}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, RW)
          })), (0, QW.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: GW
          })]
        })
      })
    }))
  },
  7674: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => tR,
      h: () => iR,
      k: () => YW,
      l: () => gR,
      o: () => TW
    });
    var wW = MW(75),
      CW = MW(7677),
      zR = MW(33),
      AW = MW(1544),
      bR = MW(572),
      yR = MW(50),
      NW = MW(1090),
      eW = MW(1558);
    const BW = 50;
    const tR = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = WW => {
          if (0 === this.listeners.size) {
            var RW, MW;
            this.state = {
              ...this.state,
              channel: null !== (RW = null === (MW = eW.d.get("chatChannels")) || void 0 === MW ? void 0 : MW[0]) && void 0 !== RW ? RW : null
            };
            const WW = zR.k.subscribe("reportPlayer", (WW => {
              let {
                playerEId: RW
              } = WW;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, RW]
              })
            }));
            this.stopListening = [AW.gameBridge.subscribe("chatReceived", (WW => {
              let {
                serverChatMsgId: RW,
                content: MW,
                author: wW
              } = WW;
              this.addMessage(RW, MW, wW)
            })), () => {
              zR.k.unsubscribe(WW)
            }, eW.d.subscribe("chatChannels", (WW => {
              var RW;
              this.setState({
                ...this.state,
                channel: null !== (RW = null === WW || void 0 === WW ? void 0 : WW[0]) && void 0 !== RW ? RW : null
              })
            }))]
          }
          return this.listeners.add(WW), () => {
            if (this.listeners.delete(WW), 0 === this.listeners.size) {
              for (const WW of this.stopListening) WW();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const wW = {
          serverChatMsgId: WW,
          content: RW,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: MW
        };
        this.setState({
          ...this.state,
          messages: [wW, ...this.state.messages].slice(0, CW.h)
        })
      }
      selectNextChannel() {
        const WW = eW.d.get("chatChannels");
        if (WW) {
          const RW = WW.findIndex((WW => {
            var RW;
            return WW.channelName === (null === (RW = this.state.channel) || void 0 === RW ? void 0 : RW.channelName)
          }));
          this.setState({
            ...this.state,
            channel: WW[(RW + 1) % WW.length]
          })
        }
      }
      setState(WW) {
        this.state = WW;
        for (const RW of this.listeners) RW()
      }
    };

    function TW() {
      const [WW, RW] = (0, wW.useState)(tR.getState);
      return (0, wW.useEffect)((() => {
        const WW = tR.subscribe((() => {
          RW(tR.getState())
        }));
        return RW(tR.getState()), WW
      }), []), WW
    }

    function gR(WW) {
      var RW, MW, wW;
      if (bR.i && "/" !== WW[0]) return void tR.addMessage(null, [{
        str: "Cannot send chat messages in bloxdk12. Use /help for a list of commands."
      }]);
      if (WW.startsWith("/report")) {
        var CW;
        const RW = null !== (CW = WW.replace("/report", "").trim().split(" ")[0]) && void 0 !== CW ? CW : "";
        if ("" === RW) return void tR.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const MW = AW.gameBridge.latest("players"),
          wW = AW.gameBridge.latest("hiddenPlayerNames"),
          bR = WW => {
            var CW, zR;
            const AW = null !== (CW = null === (zR = MW.byId[WW]) || void 0 === zR ? void 0 : zR.name) && void 0 !== CW ? CW : null;
            return null !== AW && (AW === RW || (0, NW.e)(AW, wW) === RW)
          };
        if (null !== MW.localId && bR(MW.localId)) return void tR.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const WW of MW.ids)
          if (bR(WW)) return zR.k.Sz("OpenReportMenu", {
            playerEId: WW,
            playerName: MW.byId[WW].name,
            PA: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        tR.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      AW.gameBridge.send("sendChatMessage", {
        PA: WW,
        channelName: null !== (RW = null === (MW = tR.getState().channel) || void 0 === MW ? void 0 : MW.channelName) && void 0 !== RW ? RW : null
      });
      const eW = null !== (wW = yR.g.getItem("recentlySentChatMsgs")) && void 0 !== wW ? wW : [];
      eW.push(WW), eW.length > BW && eW.shift(), yR.g.setItem("recentlySentChatMsgs", eW)
    }

    function iR() {
      var WW;
      return null !== (WW = yR.g.getItem("recentlySentChatMsgs")) && void 0 !== WW ? WW : []
    }

    function YW(WW) {
      var RW;
      let MW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const wW = null !== (RW = yR.g.getItem("recentlySentChatMsgs")) && void 0 !== RW ? RW : [],
        CW = wW.length + 1,
        zR = MW ? (WW % CW + CW) % CW : Math.min(wW.length, Math.max(0, WW));
      return {
        stepsBack: zR,
        text: 0 === zR ? "" : wW[wW.length - zR]
      }
    }
  },
  7609: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      e: () => zR
    });
    var wW = MW(1586);
    const CW = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      zR = WW => "string" === typeof WW.icon && "" !== WW.icon && "string" === typeof WW.keycode && CW.test(WW.keycode),
      AW = WW => "Space" === WW ? "_" : wW.g[WW]
  },
  7691: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW
    });
    var wW = MW(27);

    function CW() {
      return !wW.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  7693: (WW, RW, MW) => {
    MW.d(RW, {
      B: () => tR,
      F: () => TW,
      b: () => zR,
      e: () => bR,
      h: () => NW,
      l: () => yR,
      p: () => AW,
      r: () => CW,
      s: () => wW,
      t: () => gR,
      u: () => BW,
      y: () => eW
    });
    const wW = 14,
      CW = 6,
      zR = (wW + CW) / 2,
      AW = 200,
      bR = AW / 2,
      yR = AW / 2 - 1,
      NW = CW / wW * (AW / 2),
      eW = (WW, RW) => -Math.PI / 2 + 2 * WW * Math.PI / RW,
      BW = (WW, RW, MW) => {
        const wW = 2 * Math.PI / MW;
        return (Math.round((Math.atan2(RW, WW) + Math.PI / 2) / wW) % MW + MW) % MW
      },
      tR = .5,
      TW = (WW, RW, MW) => Math.hypot(WW.x, WW.y) < tR ? MW : BW(WW.x, WW.y, RW),
      gR = (WW, RW, MW, wW, CW) => {
        const zR = Math.PI / RW,
          AW = eW(WW, RW),
          bR = AW - zR,
          yR = AW + zR,
          NW = (WW, RW) => `${MW+WW*Math.cos(RW)} ${MW+WW*Math.sin(RW)}`;
        return [`M ${NW(wW,bR)}`, `L ${NW(CW,bR)}`, `A ${CW} ${CW} 0 0 1 ${NW(CW,yR)}`, `L ${NW(wW,yR)}`, `A ${wW} ${wW} 0 0 0 ${NW(wW,bR)}`, "Z"].join(" ")
      }
  },
  7728: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW = MW(75),
      CW = MW(7642),
      zR = MW(1953);

    function AW() {
      const WW = (0, zR.h)("shopInfo"),
        [, RW] = (0, wW.useReducer)((WW => WW + 1), 0);
      return (0, zR.f)("shopInfo", RW), !(0, CW.e)(WW)
    }
  },
  7606: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR,
      f: () => AW,
      g: () => bR,
      k: () => CW
    });
    var wW = MW(7609);
    const CW = WW => {
        const RW = [];
        WW.holdingGun && RW.push({
          kind: "reload"
        }), WW.touchscreenActionButton && RW.push({
          kind: "touchButton",
          label: WW.touchscreenActionButton
        });
        for (const zR of null !== (MW = null === (CW = WW.customButtons) || void 0 === CW ? void 0 : CW.filter(wW.e)) && void 0 !== MW ? MW : []) {
          var MW, CW;
          RW.push({
            kind: "customButton",
            id: zR.id,
            icon: zR.icon,
            description: zR.description
          })
        }
        return RW
      },
      zR = WW => WW.length >= 2,
      AW = WW => "specialAction" !== WW.kind,
      bR = (WW, RW) => {
        if (null === WW || null === RW) return WW === RW;
        if (WW.kind !== RW.kind) return !1;
        switch (WW.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return WW.action === RW.action;
          case "customButton":
            return WW.id === RW.id && WW.icon === RW.icon;
          case "touchButton":
            return WW.label === RW.label
        }
      }
  },
  7601: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => eW,
      f: () => TW,
      h: () => BW,
      j: () => gR
    });
    var wW = MW(75),
      CW = MW(33),
      zR = MW(1253),
      AW = MW(7606),
      bR = MW(7618);
    let yR = null;
    const NW = () => yR,
      eW = WW => {
        (0, AW.g)(yR, WW) || (yR = WW, CW.k.Sz(bR.f, yR))
      },
      BW = () => {
        const [WW, RW] = (0, wW.useState)(NW);
        return (0, zR.f)(bR.f, RW), WW
      };
    let tR = !1;
    const TW = WW => {
        WW !== tR && (tR = WW, CW.k.Sz(bR.j, WW))
      },
      gR = () => {
        const [WW, RW] = (0, wW.useState)(tR);
        return (0, zR.f)(bR.j, RW), WW
      }
  },
  7618: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR,
      f: () => wW,
      j: () => CW,
      l: () => bR,
      o: () => yR,
      s: () => NW,
      t: () => AW
    });
    const wW = "controllerActionHintChanged",
      CW = "controllerActionWheelHintChanged",
      zR = "controllerOpenChat",
      AW = "controllerSneakToggledChanged",
      bR = "controllerAttackLatchedChanged",
      yR = "controllerDropStackHoldChanged",
      NW = "controllerPickBlockHintChanged"
  },
  7585: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      g: () => zR,
      k: () => yR,
      o: () => bR
    });
    var wW = MW(1253),
      CW = MW(1216);
    const zR = "controllerInventoryCursorChanged",
      AW = {
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
      bR = () => {
        var WW, RW;
        return (0, wW.i)(zR, null !== (WW = null === (RW = (0, CW.d)()) || void 0 === RW ? void 0 : RW.getInventoryCursorState()) && void 0 !== WW ? WW : AW)
      },
      yR = () => {
        var WW, RW;
        return null !== (WW = null === (RW = (0, CW.d)()) || void 0 === RW ? void 0 : RW.isPadSteppingSlots()) && void 0 !== WW && WW
      }
  },
  7576: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR,
      i: () => bR,
      k: () => yR,
      n: () => AW,
      p: () => zR,
      q: () => eW,
      u: () => BW
    });
    let wW = null;
    const CW = new Set,
      zR = WW => (wW = WW, () => {
        if (wW === WW) {
          wW = null;
          for (const WW of CW) WW()
        }
      }),
      AW = WW => (CW.add(WW), () => {
        CW.delete(WW)
      }),
      bR = () => wW,
      yR = () => null !== wW;
    let NW = null;
    const eW = WW => {
        NW = WW
      },
      BW = () => {
        const WW = NW;
        return NW = null, WW
      },
      tR = (WW, RW) => {
        var MW, wW;
        return null !== (MW = null !== (wW = WW.find((WW => WW.element === RW))) && void 0 !== wW ? wW : WW.find((WW => WW.element.contains(RW)))) && void 0 !== MW ? MW : null
      }
  },
  7587: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR,
      d: () => AW
    });
    var wW = MW(75);
    const CW = new WeakMap,
      zR = WW => {
        var RW, MW;
        return null !== (RW = null === (MW = CW.get(WW)) || void 0 === MW ? void 0 : MW.current) && void 0 !== RW ? RW : null
      },
      AW = (WW, RW) => {
        const MW = (0, wW.useRef)(RW);
        MW.current = RW;
        const zR = (0, wW.useRef)(null);
        (0, wW.useEffect)((() => {
          const RW = WW.current,
            wW = zR.current;
          RW !== wW && (wW && CW.get(wW) === MW && CW.delete(wW), zR.current = RW, RW && CW.set(RW, MW))
        })), (0, wW.useEffect)((() => () => {
          const WW = zR.current;
          WW && CW.get(WW) === MW && CW.delete(WW), zR.current = null
        }), [])
      }
  },
  7716: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR,
      h: () => NW,
      l: () => BW,
      m: () => eW,
      n: () => yR,
      p: () => TW
    });
    var wW = MW(33),
      CW = MW(1604),
      zR = MW(1216),
      AW = MW(1208);
    const bR = WW => {
        var RW, MW;
        return (0, AW.d)() && null !== (RW = null === (MW = (0, zR.d)()) || void 0 === MW ? void 0 : MW.getGlyphForNoaAction(WW)) && void 0 !== RW ? RW : null
      },
      yR = "controllerGlyph:",
      NW = WW => {
        var RW, MW;
        return null !== (RW = null === (MW = (0, zR.d)()) || void 0 === MW ? void 0 : MW.getPadGlyphIconName(WW)) && void 0 !== RW ? RW : `${yR}xbox/${WW}`
      },
      eW = WW => WW.startsWith(yR),
      BW = WW => {
        var RW, MW;
        return eW(WW) && null !== (RW = null === (MW = (0, zR.d)()) || void 0 === MW ? void 0 : MW.getPadGlyphIconUrl(WW)) && void 0 !== RW ? RW : null
      },
      tR = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", AW.c, CW.i, CW.e],
      TW = WW => {
        const RW = tR.map((RW => wW.k.subscribe(RW, WW)));
        return () => {
          for (const WW of RW) wW.k.unsubscribe(WW)
        }
      }
  },
  7568: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      e: () => wW
    });
    const wW = "controllerOpenKeyboard",
      CW = "controllerKeyboardVisible"
  },
  7672: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR,
      g: () => CW
    });
    let wW = null;
    const CW = function(WW) {
        const RW = {
          cycle: WW,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return wW = RW, () => {
          wW === RW && (wW = null)
        }
      },
      zR = () => {
        var WW;
        return null !== (WW = wW) && void 0 !== WW && WW.canCycle() ? wW.cycle : null
      }
  },
  7702: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW,
      h: () => AW,
      j: () => zR,
      n: () => wW,
      r: () => bR,
      s: () => NW,
      w: () => eW
    });
    const wW = "controllerActionWheelOpen",
      CW = "controllerActionWheelAim",
      zR = "controllerActionWheelCommit",
      AW = "controllerActionWheelClose",
      bR = "controllerActionWheelPick";
    let yR = !1;
    const NW = () => yR,
      eW = WW => {
        yR = WW
      }
  },
  7698: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR,
      h: () => CW
    });
    let wW = 0;
    const CW = () => {
        wW++
      },
      zR = () => wW
  },
  7665: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => yR,
      c: () => CW,
      d: () => AW,
      f: () => zR,
      g: () => wW,
      h: () => NW
    });
    const wW = "controllerQuickChatWheelOpen",
      CW = "controllerQuickChatWheelAim",
      zR = "controllerQuickChatWheelCommit",
      AW = "controllerQuickChatWheelClose";
    let bR = !1;
    const yR = () => bR,
      NW = WW => {
        bR = WW
      }
  },
  7759: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      d: () => yR
    });
    var wW = MW(27),
      CW = MW(1148),
      zR = MW(116);
    const AW = {
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

    function bR() {
      return (0, zR.isMobile)() && "function" === typeof navigator.vibrate
    }
    const yR = new class {
      constructor(WW) {
        this.deps = WW, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(WW, RW) {
        var MW;
        if (!this.deps.enabled()) return;
        const wW = AW[WW],
          CW = null !== RW && void 0 !== RW ? RW : wW.pattern;
        if (null === CW) return void console.warn("No vibration pattern for", WW);
        const zR = this.deps.now();
        zR - this.lastAnyAt < 40 && wW.priority < this.playingPriority || zR - (null !== (MW = this.lastAt.get(WW)) && void 0 !== MW ? MW : -1 / 0) < wW.minGapMs || zR < this.playingUntil && wW.priority < this.playingPriority || (this.lastAt.set(WW, zR), this.lastAnyAt = zR, this.playingUntil = zR + CW.reduce(((WW, RW) => WW + RW), 0), this.playingPriority = wW.priority, this.deps.vibrate(CW))
      }
    }({
      vibrate: WW => {
        navigator.vibrate([...WW])
      },
      now: () => performance.now(),
      enabled: () => bR() && wW.b.get("isTouchScreen") && wW.b.get("clientEscMenuOptions").vibration && !(0, CW.f)()
    })
  },
  7642: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW = MW(7651),
      CW = MW(564),
      zR = MW(151);

    function AW(WW) {
      var RW, MW;
      if ((0, CW.S)(WW)) return !0;
      const AW = null !== (RW = null === (MW = zR.r[zR.u]) || void 0 === MW ? void 0 : MW.adConfig.showRewardedAds) && void 0 !== RW && RW;
      for (const CW in WW) {
        const RW = WW[CW];
        if (null !== RW && void 0 !== RW && RW.items)
          for (const WW in RW.items)
            if ((0, wW.m)(RW.items[WW], AW)) return !1
      }
      return !0
    }
  },
  7677: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW,
      h: () => wW
    });
    const wW = 100;

    function CW(WW) {
      let {
        translationKeys: RW = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return WW.map((WW => {
        var MW;
        return null !== (MW = function(WW, RW) {
          if ("string" === typeof WW) return WW;
          const MW = "str" in WW ? WW.str : WW;
          if ("string" === typeof MW) return MW;
          if ("entityName" in MW) return MW.entityName;
          if (RW && "translationKey" in MW) return `{${MW.translationKey}${void 0===MW.params?"":` ${JSON.stringify(MW.params)}`}}`;
          return null
        }(WW, RW)) && void 0 !== MW ? MW : " "
      })).join("")
    }
  },
  7714: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => eW,
      e: () => bR,
      h: () => yR
    });
    var wW = MW(1828),
      CW = MW(1066),
      zR = MW(1835);
    const AW = ",";

    function bR(WW) {
      if (!WW) return [];
      const RW = new Set,
        MW = [];
      for (const wW of WW.split(AW)) {
        const WW = wW.trim();
        if ((0, zR.k)(WW) && !RW.has(WW) && (RW.add(WW), MW.push(WW), MW.length >= CW.q)) break
      }
      return MW
    }

    function yR(WW) {
      const RW = new Set,
        MW = [];
      for (const wW of WW)
        if ((0, zR.k)(wW) && !RW.has(wW) && (RW.add(wW), MW.push(wW), MW.length >= CW.q)) break;
      return MW.join(AW)
    }

    function NW() {
      return yR(zR.g)
    }

    function eW(WW) {
      var RW;
      return "emote" === WW ? NW() : null !== (RW = BW[WW][0]) && void 0 !== RW ? RW : tR[WW]
    }
    const BW = CW.y.reduce(((WW, RW) => {
        const MW = [];
        for (const zR in wW.f[RW]) {
          var CW;
          "default" === (null === (CW = (0, wW.j)(RW, zR)) || void 0 === CW ? void 0 : CW.cosmeticPack) && MW.push(zR)
        }
        return WW[RW] = MW, WW
      }), {}),
      tR = CW.y.reduce(((WW, RW) => (WW[RW] = Object.keys(wW.f[RW])[0], WW)), {})
  },
  7651: (WW, RW, MW) => {
    function wW(WW, RW) {
      return !WW.hidden && (RW || !WW.isRewardedAd)
    }

    function CW(WW) {
      return "object" === typeof WW ? WW.option : WW
    }

    function zR(WW, RW) {
      var MW;
      if ("dropdown" === (null === (MW = WW.userInput) || void 0 === MW ? void 0 : MW.type) && "object" === typeof WW.userInput.dropdownOptions[0]) {
        for (const MW of WW.userInput.dropdownOptions)
          if (CW(MW) === RW) return "object" === typeof MW ? MW.cost : WW.cost;
        console.error("Didn't find matching option for dropdown item. Item:", WW, "input:", RW)
      }
      return WW.cost
    }

    function AW(WW, RW, MW) {
      var wW;
      const CW = null !== (wW = MW.excludedPlayers) && void 0 !== wW ? wW : [RW];
      return WW.filter((WW => !CW.includes(WW)))
    }
    MW.d(RW, {
      e: () => zR,
      h: () => CW,
      l: () => AW,
      m: () => wW
    })
  },
  7710: () => {}
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);