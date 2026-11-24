export const id = 28;
export const ids = [28];
export const modules = {
  8988: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => ES,
      h: () => OS,
      l: () => dS
    });
    var tS = gS(64),
      bS = gS(4675),
      XS = gS(1211),
      xS = gS(1522),
      NS = gS(31),
      qS = gS(3562),
      uS = gS(2347),
      IS = gS(1327),
      fS = gS(2692),
      kS = gS(2060),
      aS = gS(2100),
      KS = gS(1281),
      jS = gS(24),
      GS = gS(1733),
      CS = gS(1121),
      nS = gS.n(CS),
      PS = gS(8990),
      QS = gS(8998),
      DS = gS(9006),
      wS = gS(8912),
      hS = gS(9012),
      ZS = (gS(9014), gS(1181));
    let JS = null;

    function OS() {
      return null !== JS
    }

    function dS() {
      return "pad" === JS
    }

    function cS() {
      return "inGame" === jS.b.get("gameState") && !(0, GS.l)()
    }

    function vS(SS) {
      return (0, QS.z)(SS, IS.l, QS.h, QS.l, QS.o)
    }
    const ES = (0, tS.memo)((function() {
      const {
        t: SS
      } = (0, KS.F)(), {
        userContext: HS
      } = (0, XS.b)(), [gS, jS] = (0, tS.useState)(null), [CS, OS] = (0, tS.useState)(null), dS = (0, tS.useRef)(null), ES = (0, tS.useCallback)((SS => {
        dS.current = SS, OS(SS)
      }), []), LS = (0, tS.useRef)(0), YS = (0, tS.useRef)(null), AS = (0, tS.useRef)({
        x: 0,
        y: 0
      }), [yS, VS] = (0, tS.useState)(0), iS = (0, tS.useMemo)((() => function(SS) {
        const HS = [];
        for (let tS = 0; tS < IS.l; tS++) {
          var gS;
          HS.push(null !== (gS = SS[tS]) && void 0 !== gS ? gS : null)
        }
        return HS
      }((0, fS.g)(HS.getPlayerCosmetics().emote))), [HS, yS]);
      (0, aS.c)("cosmeticsUpdated", (SS => {
        SS.some((SS => SS.local && "emote" === SS.wt)) && VS((SS => SS + 1))
      }));
      const WS = (0, tS.useRef)(!1),
        zS = (0, tS.useCallback)((function(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === SS && (0, DS.g)(), WS.current = HS, AS.current = {
            x: 0,
            y: 0
          }, ES(null), jS(SS)
        }), [ES]),
        US = (0, tS.useCallback)((() => {
          jS(null), ES(null), AS.current = {
            x: 0,
            y: 0
          }
        }), [ES]),
        pS = (0, tS.useCallback)((SS => {
          if (Date.now() < LS.current) return;
          const HS = (0, uS.g)(SS),
            gS = !!HS.holdUntilMove,
            tS = gS ? 600 : Math.ceil(1e3 * HS.animation.animation_length / uS.c) + 200;
          LS.current = Date.now() + tS, YS.current = SS, kS.gameBridge.send("playEmote", SS), kS.gameBridge.send("applyTemporaryThirdPerson", gS ? {} : {
            durationMs: tS
          })
        }), []);
      (0, xS.g)("requestToggleEmoteWheel", (() => {
        null === gS ? cS() && zS("click") : US()
      })), (0, xS.g)("requestEmoteWheelHoldOpen", (() => {
        null === gS && cS() && zS((0, PS.b)() ? "hold" : "click")
      })), (0, xS.g)("requestEmoteWheelPadOpen", (SS => {
        null !== gS || !cS() || (0, wS.b)() || (0, hS.q)() || zS("pad", SS)
      })), (0, xS.g)("requestEmoteRepeatLast", (() => {
        if (null !== gS || !cS() || (0, wS.b)() || (0, hS.q)()) return;
        const SS = YS.current;
        null !== SS && iS.includes(SS) ? pS(SS) : zS("pad", !0)
      }));
      const sS = () => {
        const SS = dS.current,
          HS = null !== SS ? iS[SS] : null;
        null !== HS && "pad" === gS && Date.now() < LS.current || (US(), null !== HS && pS(HS))
      };
      (0, xS.g)("emoteWheelPadAim", (SS => {
        if ("pad" !== gS) return;
        const HS = (0, QS.J)(SS, IS.l, dS.current);
        ES(null !== HS && null !== iS[HS] ? HS : null)
      })), (0, xS.g)("requestEmoteWheelPadCommit", (SS => {
        "pad" !== gS || SS && WS.current || sS()
      })), (0, xS.g)("appManagerUpdated|activeInputDevice", (SS => {
        null !== gS && "pad" === gS !== ("gamepad" === SS) && US()
      })), (0, tS.useLayoutEffect)((() => (JS = gS, (0, qS.t)("emoteWheel", "pad" === gS), NS.k.cj(qS.m), () => {
        JS = null, (0, qS.t)("emoteWheel", !1), NS.k.cj(qS.m)
      })), [gS]), (0, xS.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === gS && sS()
      })), (0, xS.g)("requestEmoteWheelClose", (() => {
        null !== gS && US()
      })), (0, xS.g)("appManagerUpdated|gameState", (SS => {
        "inGame" !== SS && US()
      }));
      const BS = () => {
        (0, GS.l)() && US()
      };
      if ((0, xS.g)("appManagerUpdated|openEverythingMenuName", BS), (0, xS.g)("appManagerUpdated|openInGameMenuName", BS), (0, xS.g)("pointerLockUpdate", (SS => {
          SS || "hold" !== gS || US()
        })), (0, tS.useEffect)((() => {
          if (null === gS) return;
          const SS = SS => {
            "Escape" === SS.key && (SS.stopImmediatePropagation(), SS.preventDefault(), US())
          };
          return document.addEventListener("keydown", SS, !0), () => {
            document.removeEventListener("keydown", SS, !0)
          }
        }), [gS, US]), (0, bS.c)(!0, "click" === gS, "EmoteWheelOverlay"), (0, tS.useEffect)((() => {
          if ("hold" === gS) return kS.gameBridge.send("holdEmoteWheel", !0), () => {
            kS.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [gS]), (0, tS.useEffect)((() => {
          if ("hold" !== gS) return;
          const SS = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            HS = QS.w * SS,
            tS = QS.u * SS,
            bS = SS => {
              let gS = AS.current.x + SS.movementX,
                bS = AS.current.y + SS.movementY;
              const XS = Math.hypot(gS, bS);
              if (XS > HS) {
                const SS = HS / XS;
                gS *= SS, bS *= SS
              }
              AS.current = {
                x: gS,
                y: bS
              }, ES(function(SS, HS, gS, tS) {
                if (Math.hypot(SS, HS) < gS) return null;
                const bS = (0, QS.C)(SS, HS, IS.l);
                return null === tS[bS] ? null : bS
              }(gS, bS, tS, iS))
            };
          return document.addEventListener("mousemove", bS), () => {
            document.removeEventListener("mousemove", bS)
          }
        }), [gS, iS, ES]), null === gS) return null;
      const MS = "hold" === gS || "pad" === gS,
        FS = null !== CS ? iS[CS] : null,
        RS = null !== FS ? (0, uS.g)(FS).displayName : SS("emotes:pickEmote");
      return (0, ZS.jsx)("div", {
        className: nS()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === gS
        }),
        onMouseDown: SS => {
          SS.target === SS.currentTarget && US()
        },
        children: (0, ZS.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * QS.w + "rem",
            height: 2 * QS.w + "rem"
          },
          children: [(0, ZS.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${QS.r} ${QS.r}`,
            children: [iS.map(((HS, gS) => {
              const tS = null !== HS,
                bS = MS && gS === CS;
              return (0, ZS.jsx)("path", {
                d: vS(gS),
                className: nS()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: bS,
                  EmoteWheelWedgeDisabled: !tS
                }),
                onClick: SS => {
                  SS.stopPropagation(), null !== HS && (SS => {
                    US(), pS(SS)
                  })(HS)
                },
                "aria-label": null !== HS ? (0, uS.g)(HS).displayName : SS("emotes:emptySlot")
              }, gS)
            })), (0, ZS.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: QS.h,
              cy: QS.h,
              r: QS.o
            }), (0, ZS.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: QS.h,
              cy: QS.h,
              r: QS.l
            }), MS && null !== CS && (0, ZS.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: vS(CS)
            })]
          }), iS.map(((SS, HS) => {
            const gS = null !== SS,
              tS = MS && HS === CS,
              bS = (0, QS.D)(HS, IS.l),
              XS = QS.d * Math.cos(bS),
              xS = QS.d * Math.sin(bS);
            return (0, ZS.jsx)("div", {
              className: nS()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: tS,
                EmoteWheelSlotIconDisabled: !gS
              }),
              style: {
                left: `calc(50% + ${XS}rem)`,
                top: `calc(50% + ${xS}rem)`,
                backgroundImage: gS ? `url(/textures/charSkins/previews/emote_${SS}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, HS)
          })), (0, ZS.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: RS
          })]
        })
      })
    }))
  },
  5148: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => KS,
      g: () => PS,
      k: () => jS,
      o: () => nS
    });
    var tS = gS(64),
      bS = gS(5153),
      XS = gS(4489),
      xS = gS(1444),
      NS = gS(5182),
      qS = gS(1121),
      uS = gS.n(qS),
      IS = gS(1435),
      fS = gS(1844),
      kS = gS(5191),
      aS = gS(1181);

    function KS(SS) {
      let {
        label: HS,
        onClick: gS,
        checked: tS,
        circleInfoText: bS,
        className: NS,
        disabled: qS,
        note: IS
      } = SS;
      return (0, aS.jsxs)("div", {
        "aria-disabled": qS || void 0,
        "data-pad-focusable": !0,
        className: uS()("SettingBox CheckboxContainer", {
          [NS]: NS,
          SettingBoxDisabled: qS
        }),
        onClick: () => {
          qS || gS(!tS)
        },
        children: [(0, aS.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, aS.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, aS.jsx)(XS.c, {
              className: "SettingsCheckbox",
              checked: tS,
              disabled: qS,
              onChange: () => {}
            })
          }), (0, aS.jsxs)("div", {
            className: "CheckboxText",
            children: [HS, bS && (0, aS.jsx)("span", {
              onClick: SS => SS.stopPropagation(),
              children: (0, aS.jsx)(xS.e, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: bS
              })
            })]
          })]
        }), IS && (0, aS.jsx)("div", {
          className: "SettingNote",
          children: IS
        })]
      })
    }

    function jS(SS) {
      let {
        name: HS,
        onChange: gS,
        min: bS,
        max: XS,
        step: NS,
        initValue: qS,
        circleInfoText: IS,
        format: fS,
        className: kS,
        padStep: KS,
        disabled: jS = !1,
        selectableMax: GS,
        cappedNote: nS,
        onChangeComplete: PS
      } = SS;
      const [QS, DS] = (0, tS.useState)(qS), wS = (0, tS.useRef)(qS);
      (0, tS.useEffect)((() => {
        wS.current = qS, DS(qS)
      }), [qS]);
      const hS = void 0 !== GS && GS < XS,
        ZS = hS ? {
          "--slider-selectable": (GS - bS) / (XS - bS)
        } : void 0;
      return (0, aS.jsxs)("div", {
        className: uS()("SettingBox SettingsSliderDiv", {
          [kS]: kS,
          SettingBoxDisabled: jS,
          SliderCapped: hS
        }),
        style: ZS,
        children: [(0, aS.jsxs)("div", {
          className: "SliderText",
          children: [`${HS}: ${fS?fS(QS):QS}`, IS && (0, aS.jsx)(xS.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: IS
          })]
        }), (0, aS.jsx)("div", {
          className: "SliderDiv",
          children: (0, aS.jsx)(CS, {
            value: QS,
            min: bS,
            max: XS,
            step: NS,
            onChange: SS => {
              if (hS && SS >= GS && QS === GS) return;
              const HS = hS ? Math.min(SS, GS) : SS;
              wS.current = HS, DS(HS), gS(HS)
            },
            onChangeComplete: PS && (() => {
              PS(wS.current)
            }),
            format: fS,
            padStep: KS,
            disabled: jS
          })
        }), hS && nS && (0, aS.jsx)("div", {
          className: "SettingNote",
          children: nS
        })]
      })
    }
    const GS = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function CS(SS) {
      var HS;
      let {
        value: gS,
        min: XS,
        max: xS,
        step: NS,
        onChange: qS,
        orientation: uS,
        reverse: IS,
        setIsChanging: fS,
        tooltip: KS,
        labels: jS,
        handleLabel: CS,
        format: nS,
        onChangeStart: PS,
        onChangeComplete: QS,
        padStep: DS,
        disabled: wS = !1
      } = SS;
      const hS = (0, tS.useRef)(null),
        ZS = (0, tS.useRef)(null);
      (0, tS.useLayoutEffect)((() => {
        var SS, HS, gS;
        const tS = null !== (SS = null === (HS = hS.current) || void 0 === HS ? void 0 : HS.querySelector(".rangeslider")) && void 0 !== SS ? SS : null;
        null === tS || void 0 === tS || tS.setAttribute("data-pad-slider", ""), null === tS || void 0 === tS || tS.setAttribute("data-pad-focusable", ""), null === tS || void 0 === tS || null === (gS = tS.querySelector(".rangeslider__handle")) || void 0 === gS || gS.setAttribute("data-pad-slider-handle", ""), ZS.current = tS
      }), []), (0, tS.useLayoutEffect)((() => {
        var SS, HS;
        wS ? null === (SS = ZS.current) || void 0 === SS || SS.setAttribute("aria-disabled", "true") : null === (HS = ZS.current) || void 0 === HS || HS.removeAttribute("aria-disabled")
      }), [wS]);
      const JS = (null !== (HS = String(NS).split(".")[1]) && void 0 !== HS ? HS : "").length,
        OS = SS => {
          const HS = Number((Math.round((SS - XS) / NS) * NS + XS).toFixed(JS));
          return Math.min(xS, Math.max(XS, HS))
        },
        dS = (0, tS.useRef)(QS);
      dS.current = QS, (0, tS.useEffect)((() => {
        const SS = hS.current;
        if (!SS) return;
        const HS = SS => {
          var HS;
          GS.has(SS.key) && (null === (HS = dS.current) || void 0 === HS || HS.call(dS))
        };
        return SS.addEventListener("keyup", HS), () => {
          SS.removeEventListener("keyup", HS)
        }
      }), []);
      const cS = (0, tS.useRef)(!1);
      return (0, kS.f)(ZS, {
        adjust: SS => {
          if (wS) return;
          const HS = null !== DS && void 0 !== DS ? DS : Math.max(NS, Math.round((xS - XS) / 20 / NS) * NS),
            tS = OS(gS + SS * HS * (IS ? -1 : 1));
          tS !== gS && (null === PS || void 0 === PS || PS(), qS(tS), null === QS || void 0 === QS || QS())
        },
        setFraction: SS => {
          if (wS) return;
          const HS = OS(XS + (IS ? 1 - SS : SS) * (xS - XS));
          HS !== gS && (cS.current || (cS.current = !0, null === PS || void 0 === PS || PS()), qS(HS))
        },
        endDrag: () => {
          cS.current && (cS.current = !1, null === QS || void 0 === QS || QS())
        }
      }), (0, aS.jsx)("div", {
        ref: hS,
        style: {
          display: "contents"
        },
        children: (0, aS.jsx)(bS.c, {
          value: gS,
          min: XS,
          max: xS,
          step: NS,
          onChange: qS,
          orientation: uS,
          reverse: IS,
          tooltip: KS,
          labels: jS,
          handleLabel: CS,
          format: nS,
          onChangeStart: () => {
            null === PS || void 0 === PS || PS(), null === fS || void 0 === fS || fS(!0)
          },
          onChangeComplete: () => {
            null === fS || void 0 === fS || fS(!1), null === QS || void 0 === QS || QS()
          }
        })
      })
    }
    async function nS() {
      const SS = IS.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: ""
      });
      !0 === await SS.getResult() && (0, fS.reloadBloxd)()
    }

    function PS(SS) {
      let {
        label: HS,
        options: gS,
        value: tS,
        onChange: bS,
        circleInfoText: XS
      } = SS;
      return (0, aS.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, aS.jsxs)("div", {
          className: "SliderText",
          children: [HS, XS && (0, aS.jsx)(xS.e, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: XS
          })]
        }), (0, aS.jsx)(NS.d, {
          ariaLabel: HS,
          options: gS,
          value: tS,
          onChange: bS
        })]
      })
    }
  },
  5182: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS
    });
    var tS = gS(1121),
      bS = gS.n(tS),
      XS = gS(1181);

    function xS(SS) {
      let {
        options: HS,
        value: gS,
        onChange: tS,
        ariaLabel: xS,
        className: NS,
        reselectable: qS = !1,
        keepsFocus: uS = !1,
        padTabs: IS
      } = SS;
      const fS = void 0 !== IS;
      return (0, XS.jsx)("div", {
        className: bS()("SegmentedToggle", NS),
        role: "group",
        "aria-label": xS,
        "data-pad-tabs": IS,
        children: HS.map((SS => {
          const HS = SS.value === gS;
          return (0, XS.jsx)("button", {
            type: "button",
            "aria-pressed": HS,
            "data-pad-tab": fS || void 0,
            "data-pad-selected": fS && HS ? "true" : void 0,
            "data-pad-default-focus": fS && HS || void 0,
            "aria-label": SS.ariaLabel,
            title: SS.ariaLabel,
            className: bS()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: HS
            }),
            onMouseDown: uS ? SS => {
              SS.preventDefault()
            } : void 0,
            onClick: () => {
              HS && !qS || tS(SS.value)
            },
            children: SS.label
          }, SS.value)
        }))
      })
    }
  },
  8981: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => fS,
      g: () => KS,
      i: () => jS,
      m: () => aS,
      o: () => kS
    });
    var tS = gS(64),
      bS = gS(8983),
      XS = gS(31),
      xS = gS(2060),
      NS = gS(45),
      qS = gS(1344),
      uS = gS(2083);
    const IS = 50;
    const fS = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = SS => {
          if (0 === this.listeners.size) {
            var HS, gS;
            this.state = {
              ...this.state,
              channel: null !== (HS = null === (gS = uS.d.get("chatChannels")) || void 0 === gS ? void 0 : gS[0]) && void 0 !== HS ? HS : null
            };
            const SS = XS.k.subscribe("reportPlayer", (SS => {
              let {
                playerEId: HS
              } = SS;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, HS]
              })
            }));
            this.stopListening = [xS.gameBridge.subscribe("chatReceived", (SS => {
              let {
                serverChatMsgId: HS,
                content: gS,
                author: tS
              } = SS;
              this.addMessage(HS, gS, tS)
            })), () => {
              XS.k.unsubscribe(SS)
            }, uS.d.subscribe("chatChannels", (SS => {
              var HS;
              this.setState({
                ...this.state,
                channel: null !== (HS = null === SS || void 0 === SS ? void 0 : SS[0]) && void 0 !== HS ? HS : null
              })
            }))]
          }
          return this.listeners.add(SS), () => {
            if (this.listeners.delete(SS), 0 === this.listeners.size) {
              for (const SS of this.stopListening) SS();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const tS = {
          serverChatMsgId: SS,
          content: HS,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: gS
        };
        this.setState({
          ...this.state,
          messages: [tS, ...this.state.messages].slice(0, bS.d)
        })
      }
      selectNextChannel() {
        const SS = uS.d.get("chatChannels");
        if (SS) {
          const HS = SS.findIndex((SS => {
            var HS;
            return SS.channelName === (null === (HS = this.state.channel) || void 0 === HS ? void 0 : HS.channelName)
          }));
          this.setState({
            ...this.state,
            channel: SS[(HS + 1) % SS.length]
          })
        }
      }
      setState(SS) {
        this.state = SS;
        for (const HS of this.listeners) HS()
      }
    };

    function kS() {
      const [SS, HS] = (0, tS.useState)(fS.getState);
      return (0, tS.useEffect)((() => {
        const SS = fS.subscribe((() => {
          HS(fS.getState())
        }));
        return HS(fS.getState()), SS
      }), []), SS
    }

    function aS(SS) {
      var HS, gS;
      if (SS.startsWith("/report")) {
        var tS;
        const HS = null !== (tS = SS.replace("/report", "").trim().split(" ")[0]) && void 0 !== tS ? tS : "";
        if ("" === HS) return void fS.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const gS = xS.gameBridge.latest("players"),
          bS = xS.gameBridge.latest("hiddenPlayerNames"),
          NS = SS => {
            var tS, XS;
            const xS = null !== (tS = null === (XS = gS.byId[SS]) || void 0 === XS ? void 0 : XS.name) && void 0 !== tS ? tS : null;
            return null !== xS && (xS === HS || (0, qS.e)(xS, bS) === HS)
          };
        if (null !== gS.localId && NS(gS.localId)) return void fS.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const SS of gS.ids)
          if (NS(SS)) return XS.k.cj("OpenReportMenu", {
            playerEId: SS,
            playerName: gS.byId[SS].name,
            Ju: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        fS.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      xS.gameBridge.send("sendChatMessage", {
          Ju: SS,
          channelName: null !== (HS = null === (gS = fS.getState().channel) || void 0 === gS ? void 0 : gS.channelName) && void 0 !== HS ? HS : null
        }),
        function(SS) {
          var HS;
          const gS = null !== (HS = NS.g.getItem("recentlySentChatMsgs")) && void 0 !== HS ? HS : [];
          gS.push(SS), gS.length > IS && gS.shift();
          NS.g.setItem("recentlySentChatMsgs", gS)
        }(SS)
    }

    function KS() {
      var SS;
      return null !== (SS = NS.g.getItem("recentlySentChatMsgs")) && void 0 !== SS ? SS : []
    }

    function jS(SS) {
      var HS;
      let gS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const tS = null !== (HS = NS.g.getItem("recentlySentChatMsgs")) && void 0 !== HS ? HS : [],
        bS = tS.length + 1,
        XS = gS ? (SS % bS + bS) % bS : Math.min(tS.length, Math.max(0, SS));
      return {
        stepsBack: XS,
        text: 0 === XS ? "" : tS[tS.length - XS]
      }
    }
  },
  8944: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS,
      h: () => XS
    });
    var tS = gS(2115);
    const bS = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      XS = SS => "string" === typeof SS.icon && "" !== SS.icon && "string" === typeof SS.keycode && bS.test(SS.keycode),
      xS = SS => "Space" === SS ? "_" : tS.h[SS]
  },
  8990: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS
    });
    var tS = gS(24);

    function bS() {
      return !tS.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8998: (SS, HS, gS) => {
    gS.d(HS, {
      C: () => fS,
      D: () => IS,
      H: () => kS,
      J: () => aS,
      d: () => XS,
      h: () => NS,
      l: () => uS,
      o: () => qS,
      r: () => xS,
      u: () => bS,
      w: () => tS,
      z: () => KS
    });
    const tS = 14,
      bS = 6,
      XS = (tS + bS) / 2,
      xS = 200,
      NS = xS / 2,
      qS = xS / 2 - 1,
      uS = bS / tS * (xS / 2),
      IS = (SS, HS) => -Math.PI / 2 + 2 * SS * Math.PI / HS,
      fS = (SS, HS, gS) => {
        const tS = 2 * Math.PI / gS;
        return (Math.round((Math.atan2(HS, SS) + Math.PI / 2) / tS) % gS + gS) % gS
      },
      kS = .5,
      aS = (SS, HS, gS) => Math.hypot(SS.x, SS.y) < kS ? gS : fS(SS.x, SS.y, HS),
      KS = (SS, HS, gS, tS, bS) => {
        const XS = Math.PI / HS,
          xS = IS(SS, HS),
          NS = xS - XS,
          qS = xS + XS,
          uS = (SS, HS) => `${gS+SS*Math.cos(HS)} ${gS+SS*Math.sin(HS)}`;
        return [`M ${uS(tS,NS)}`, `L ${uS(bS,NS)}`, `A ${bS} ${bS} 0 0 1 ${uS(bS,qS)}`, `L ${uS(tS,qS)}`, `A ${tS} ${tS} 0 0 0 ${uS(tS,NS)}`, "Z"].join(" ")
      }
  },
  9030: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    var tS = gS(64),
      bS = gS(8970),
      XS = gS(2537);

    function xS() {
      const SS = (0, XS.i)("shopInfo"),
        [, HS] = (0, tS.useReducer)((SS => SS + 1), 0);
      return (0, XS.e)("shopInfo", HS), !(0, bS.e)(SS)
    }
  },
  8346: (SS, HS, gS) => {
    gS.d(HS, {
      B: () => KS,
      e: () => bS,
      i: () => XS,
      k: () => kS,
      n: () => fS,
      r: () => uS,
      s: () => NS,
      v: () => tS,
      z: () => aS
    });
    const tS = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      bS = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: tS
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      XS = {
        jump: "A",
        sneak: "B",
        sneakToggle: "RS",
        sprint: "LS",
        attack: "RT",
        use: "LT",
        hotbarPrevious: "LB",
        hotbarNext: "RB",
        inventory: "Y",
        actionButton: "X",
        perspective: "Up",
        pickBlock: "Up",
        drop: "Down",
        emoteWheel: "Left",
        chat: "Right",
        pause: "Menu",
        leaderboard: "View",
        menuConfirm: "A",
        menuBack: "B",
        menuTabPrevious: "LB",
        menuTabNext: "RB",
        menuPageUp: "LT",
        menuPageDown: "RT",
        menuSecondary: "X",
        menuToggleCursor: "LS",
        inventoryPrimary: "A",
        inventorySecondary: "X",
        inventoryQuickMove: "RS",
        inventoryClose: "B",
        inventoryPanelPrevious: "LB",
        inventoryPanelNext: "RB",
        inventoryDrop: "View",
        inventoryHotbarSwap: "LS",
        keyboardType: "A",
        keyboardBackspace: "X",
        keyboardSpace: "Y",
        keyboardCaretLeft: "LB",
        keyboardCaretRight: "RB",
        keyboardShift: "LT",
        keyboardSymbols: "RT",
        keyboardSubmit: "Menu",
        keyboardClose: "B",
        keyboardChannel: "View"
      },
      xS = ["pickBlock", "perspective"],
      NS = SS => xS.includes(SS) ? xS : [SS],
      qS = Object.fromEntries(bS.flatMap((SS => {
        let {
          group: HS,
          actions: gS
        } = SS;
        return gS.map((SS => [SS, HS]))
      }))),
      uS = SS => qS[SS],
      IS = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      fS = SS => {
        var HS;
        return [uS(SS), ...null !== (HS = IS[SS]) && void 0 !== HS ? HS : []]
      },
      kS = new Set(["menu", "inventory", "keyboard"]),
      aS = {
        jump: "jump",
        crouch: "sneak",
        sprint: "sprint",
        "primary-fire": "attack",
        "alt-fire": "use",
        SpecialAction1: "actionButton",
        SpecialAction2: "actionButton",
        ReloadGun: "actionButton",
        DropItem: "drop",
        SwapCameraZoom: "perspective",
        "mid-fire": "pickBlock",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      KS = new Set(["forward", "backward", "left", "right"])
  },
  8339: (SS, HS, gS) => {
    gS.d(HS, {
      B: () => IS,
      E: () => JS,
      F: () => vS,
      c: () => nS,
      g: () => DS,
      h: () => kS,
      j: () => aS,
      m: () => LS,
      o: () => cS,
      p: () => dS,
      q: () => QS,
      r: () => ES,
      t: () => ZS,
      u: () => PS,
      y: () => OS
    });
    var tS = gS(8346),
      bS = gS(8353),
      XS = gS(8327),
      xS = gS(8376);
    const NS = SS => "pickBlock" === SS ? "perspective" : SS,
      qS = (SS, HS) => {
        var gS;
        const bS = NS(HS);
        return null !== (gS = SS[bS]) && void 0 !== gS ? gS : tS.i[bS]
      },
      uS = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((SS => {
        let [HS, gS] = SS;
        return [
          [HS, gS],
          [gS, HS]
        ]
      }))),
      IS = (SS, HS) => null !== SS && void 0 !== SS ? SS : "nintendo" === HS,
      fS = SS => IS((0, bS.f)().swapConfirmBack, (0, bS.g)()) && uS.get(SS) || SS,
      kS = SS => qS((0, bS.f)().bindings, fS(SS)),
      aS = SS => tS.i[fS(SS)],
      KS = Object.keys(tS.i),
      jS = SS => "gameplay" === (0, tS.r)(SS) ? ["gameplay"] : (0, tS.n)(SS),
      GS = (SS, HS) => {
        const gS = jS(HS);
        return jS(SS).some((SS => gS.includes(SS)))
      },
      CS = (SS, HS, gS) => {
        const bS = qS(SS, HS),
          xS = new Set((0, tS.s)(HS)),
          uS = [...xS];
        for (let tS = uS.pop(); tS; tS = uS.pop())
          for (const HS of KS) {
            const XS = qS(SS, HS);
            xS.has(HS) || XS !== gS && XS !== bS || !GS(tS, HS) || (xS.add(HS), uS.push(HS))
          }
        const IS = {
          ...SS
        };
        for (const fS of xS) {
          const HS = qS(SS, fS) === bS ? gS : bS,
            xS = (0, tS.n)(fS).some((SS => tS.k.has(SS)));
          if ((0, XS.H)(HS) && xS) return null;
          IS[NS(fS)] = HS
        }
        for (const XS of Object.keys(IS)) IS[XS] === tS.i[XS] && delete IS[XS];
        return IS
      },
      nS = (SS, HS) => null !== CS((0, bS.f)().bindings, fS(SS), HS),
      PS = (SS, HS) => {
        if (kS(SS) === HS) return !0;
        const gS = CS((0, bS.f)().bindings, fS(SS), HS);
        return !!gS && ((0, bS.k)({
          bindings: gS
        }), !0)
      },
      QS = (SS, HS) => {
        const gS = (0, tS.s)(HS);
        return KS.filter((HS => NS(HS) === HS && !gS.includes(HS) && qS(SS, fS(HS)) !== kS(HS)))
      },
      DS = ["southpaw", "triggersSwapped"],
      wS = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      hS = SS => Object.keys(wS[SS]),
      ZS = (SS, HS) => "southpaw" === SS ? HS.swapSticks : hS(SS).every((gS => qS(HS.bindings, gS) === wS[SS][gS])),
      JS = (SS, HS) => {
        const gS = (0, bS.f)();
        let XS = gS.bindings;
        for (const bS of hS(SS)) {
          const gS = HS ? wS[SS][bS] : tS.i[bS];
          if (XS = CS(XS, bS, gS), !XS) return !1
        }
        return (0, bS.k)({
          swapSticks: "southpaw" === SS ? HS : gS.swapSticks,
          bindings: XS
        }), !0
      },
      OS = () => {
        (0, bS.k)({
          swapSticks: !1,
          bindings: {}
        })
      },
      dS = () => (0, bS.f)().swapSticks ? "RightStick" : "LeftStick",
      cS = () => (0, bS.f)().swapSticks ? "LeftStick" : "RightStick",
      vS = SS => (0, bS.f)().swapSticks && (0, XS.H)(SS),
      ES = SS => vS(SS) ? dS() : cS(),
      LS = SS => {
        if (tS.B.has(SS)) return dS();
        const HS = tS.z[SS];
        return HS && ("leaderboard" !== HS || (0, xS.h)(SS, (0, xS.d)())) ? kS(HS) : null
      }
  },
  8315: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      ControllerCategory: () => PN,
      ControllerGlyph: () => wb,
      ControllerRoot: () => Px,
      PadLobbyShortcuts: () => Vx,
      PadSneakChip: () => Ox,
      PadTooltip: () => cx,
      attachPressToContinue: () => Mx,
      getBoundButton: () => IS.h,
      getControllerSettings: () => kS.f,
      getGlyphForNoaAction: () => IS.m,
      getInventoryCursorState: () => DN,
      getMenuShortcutButton: () => Bg,
      getPadGlyphIconName: () => hx,
      getPadGlyphIconUrl: () => Zx,
      getPadRepeatTiming: () => jS.g,
      handOverPadFocus: () => hN,
      hasActivePad: () => QN,
      isPadSteppingSlots: () => wN
    });
    const tS = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var bS = gS(1281),
      XS = gS(1477),
      xS = gS(8319),
      NS = gS(77),
      qS = gS(24),
      uS = gS(31),
      IS = gS(8339),
      fS = gS(8385),
      kS = gS(8353),
      aS = gS(8393),
      KS = gS(8327),
      jS = gS(8854),
      GS = gS(8858),
      CS = gS(1758);
    const nS = (SS, HS, gS) => Math.max(HS, Math.min(gS, SS)),
      PS = SS => Math.min(SS.width, SS.height) / 720,
      QS = SS => Math.max(.15, SS);
    class DS {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(SS, HS) {
        const gS = Math.hypot(SS.x, SS.y) >= (SS => Math.max(.3, SS))(HS);
        return this.locked ? (this.locked = gS, !1) : gS
      }
    }
    const wS = (SS, HS) => {
        const gS = nS(HS.dtMs, 0, 100),
          tS = gS / 1e3,
          bS = PS(HS.viewport) * (HS.cursorSpeedPercent / 100),
          XS = (0, KS.l)(HS.stick, QS(HS.moveDeadzone)),
          xS = Math.hypot(XS.x, XS.y),
          NS = ((SS, HS, gS) => {
            if (HS < .3) return 0;
            const tS = gS / 350;
            return HS >= .85 ? Math.min(1, SS + tS) : Math.max(0, SS - tS)
          })(SS.speedRamp, xS, gS);
        let qS = SS.x,
          uS = SS.y;
        if (xS > 0) {
          const SS = .45 + .55 * NS,
            gS = HS.context.overInteractive ? .45 : 1,
            IS = 1400 * (SS => {
              const HS = nS(SS, 0, 1);
              return .3 * HS + .7 * HS * HS
            })(xS) * bS * SS * gS;
          qS += XS.x / xS * IS * tS, uS += XS.y / xS * IS * tS
        }
        const IS = Math.hypot(HS.dpad.x, HS.dpad.y);
        if (IS > 0) {
          const SS = 500 * bS;
          qS += HS.dpad.x / IS * SS * tS, uS += HS.dpad.y / IS * SS * tS
        }
        const fS = HS.context.magnetTarget;
        if (fS && xS < .3 && 0 === IS) {
          const SS = ((SS, HS, gS, tS, bS) => {
            const XS = HS.x - SS.x,
              xS = HS.y - SS.y,
              NS = Math.hypot(XS, xS);
            if (0 === NS) return {
              x: 0,
              y: 0
            };
            const qS = Math.min(NS, bS * (1 - tS / .3));
            let uS = XS / NS * qS,
              IS = xS / NS * qS;
            if (tS > 0) {
              const SS = gS.x / tS,
                HS = gS.y / tS,
                bS = uS * SS + IS * HS;
              bS < 0 && (uS -= bS * SS, IS -= bS * HS)
            }
            return {
              x: uS,
              y: IS
            }
          })({
            x: qS,
            y: uS
          }, fS, XS, xS, 120 * PS(HS.viewport) * tS);
          qS += SS.x, uS += SS.y
        }
        return {
          x: nS(qS, 0, Math.max(0, HS.viewport.width - 1)),
          y: nS(uS, 0, Math.max(0, HS.viewport.height - 1)),
          speedRamp: NS
        }
      },
      hS = SS => {
        const HS = (0, KS.l)(SS, .2);
        return 0 !== HS.x || 0 !== HS.y
      },
      ZS = (SS, HS) => {
        const gS = (0, KS.l)(SS, .2),
          tS = Math.hypot(gS.x, gS.y);
        if (0 === tS) return {
          x: 0,
          y: 0
        };
        const bS = tS * tS * 1600,
          XS = nS(HS, 0, 100) / 1e3;
        return {
          x: gS.x / tS * bS * XS,
          y: gS.y / tS * bS * XS
        }
      },
      JS = (SS, HS) => "y" === HS ? SS.scrollHeight > SS.clientHeight + 1 : SS.scrollWidth > SS.clientWidth + 1,
      OS = (SS, HS) => {
        if (!JS(SS, HS)) return !1;
        const gS = getComputedStyle(SS),
          tS = "y" === HS ? gS.overflowY : gS.overflowX;
        return "auto" === tS || "scroll" === tS
      },
      dS = (SS, HS, gS) => {
        for (let XS = SS instanceof HTMLElement ? SS : null !== (tS = null === SS || void 0 === SS ? void 0 : SS.parentElement) && void 0 !== tS ? tS : null; XS; XS = XS.parentElement) {
          var tS;
          if (OS(XS, HS)) return XS;
          if (XS === gS) return null
        }
        if (gS) return null;
        const bS = document.scrollingElement;
        return bS instanceof HTMLElement && JS(bS, HS) ? bS : null
      },
      cS = new WeakMap,
      vS = (SS, HS) => {
        const gS = performance.now(),
          tS = cS.get(SS);
        if (tS && tS.axis === HS && gS - tS.atMs < 500 && (!tS.container || tS.container.isConnected)) return tS.container;
        const bS = ES(SS, HS);
        return cS.set(SS, {
          axis: HS,
          atMs: gS,
          container: bS
        }), bS
      },
      ES = (SS, HS) => {
        let gS = OS(SS, HS) ? SS : null,
          tS = gS ? gS.clientWidth * gS.clientHeight : 0;
        for (const bS of SS.querySelectorAll("*")) {
          const SS = bS.clientWidth * bS.clientHeight;
          SS > tS && OS(bS, HS) && (gS = bS, tS = SS)
        }
        return gS
      },
      LS = (SS, HS, gS) => "y" === HS ? gS < 0 ? SS.scrollTop > 0 : SS.scrollTop + SS.clientHeight < SS.scrollHeight - 1 : gS < 0 ? SS.scrollLeft > 0 : SS.scrollLeft + SS.clientWidth < SS.scrollWidth - 1,
      YS = (SS, HS, gS) => {
        "y" === HS ? SS.scrollBy({
          top: gS,
          behavior: "instant"
        }) : SS.scrollBy({
          left: gS,
          behavior: "instant"
        })
      },
      AS = SS => {
        if (!SS || SS === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const HS = SS.getBoundingClientRect(),
          gS = Math.max(0, HS.left),
          tS = Math.max(0, HS.top);
        return new DOMRect(gS, tS, Math.min(window.innerWidth, HS.right) - gS, Math.min(window.innerHeight, HS.bottom) - tS)
      },
      yS = (SS, HS) => SS.left < HS.right && HS.left < SS.right && SS.top < HS.bottom && HS.top < SS.bottom;
    var VS = gS(64),
      iS = gS(1121),
      WS = gS.n(iS),
      zS = gS(1181);
    let US = 0,
      pS = !1;
    class sS {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(SS) {
        this.element = SS, this.shownKey = "", this.gap = null
      }
      show(SS) {
        const HS = this.element;
        if (!HS) return;
        const gS = SS ? this.keepOnScreen(HS, SS) : null,
          tS = gS ? `${gS.left},${gS.top},${gS.width},${gS.height}` : "";
        if (tS === this.shownKey) return;
        const bS = "" === this.shownKey;
        this.shownKey = tS, HS.classList.toggle("Visible", null !== gS), gS && (HS.classList.toggle("Snap", bS), HS.style.width = `${gS.width}px`, HS.style.height = `${gS.height}px`, HS.style.transform = `translate(${gS.left}px, ${gS.top}px)`, bS && (HS.offsetWidth, HS.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(SS, HS) {
        var gS;
        const tS = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!pS){pS=!0;const SS=document.createElement("div");SS.setAttribute("aria-hidden","true"),SS.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(SS),new ResizeObserver((()=>{US++})).observe(SS)}return String(US)})()}`;
        (null === (gS = this.gap) || void 0 === gS ? void 0 : gS.key) !== tS && (this.gap = {
          px: parseFloat(getComputedStyle(SS).paddingLeft) || 0,
          key: tS
        });
        const bS = this.gap.px + 2,
          XS = Math.max(HS.left, bS),
          xS = Math.max(HS.top, bS),
          NS = Math.min(HS.left + HS.width, window.innerWidth - bS),
          qS = Math.min(HS.top + HS.height, window.innerHeight - bS);
        return NS <= XS || qS <= xS ? HS : {
          left: XS,
          top: xS,
          width: NS - XS,
          height: qS - xS
        }
      }
    }
    const BS = SS => {
      let {
        placer: HS,
        className: gS
      } = SS;
      const tS = (0, VS.useCallback)((SS => {
        HS.setElement(SS)
      }), [HS]);
      return (0, zS.jsx)("div", {
        ref: tS,
        className: WS()("PadReticle", gS),
        "aria-hidden": !0
      })
    };
    var MS = gS(8866);
    const FS = {
      x: 0,
      y: 0,
      visible: !1,
      pressed: !1
    };
    const RS = new class {
      constructor() {
        this.state = FS, this.listeners = new Set
      }
      get() {
        return this.state
      }
      set(SS) {
        if (HS = this.state, gS = SS, (HS.visible || gS.visible) && (HS.visible !== gS.visible || HS.x !== gS.x || HS.y !== gS.y || HS.pressed !== gS.pressed)) {
          var HS, gS;
          this.state = SS;
          for (const HS of this.listeners) HS(SS)
        }
      }
      hide() {
        this.set(FS)
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
    };
    var TS = gS(8870);
    const oS = (SS, HS) => {
        let {
          kind: gS,
          holding: tS,
          hasPress: bS,
          hasBack: XS,
          slotHasItem: xS
        } = HS;
        switch (SS) {
          case "primary":
            return "slot" === gS ? "slotPrimary" : "recipe" === gS || "button" === gS ? bS ? "pressPrimary" : "click" : "textField" === gS ? "openKeyboard" : null;
          case "secondary":
            return "slot" === gS ? "slotSecondary" : "button" !== gS && "recipe" !== gS || !bS ? null : "pressSecondary";
          case "quickMove":
            return "slot" === gS && xS ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === gS && xS && !tS ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return tS ? "cancel" : XS ? "pressBack" : "close"
        }
      },
      lS = SS => {
        const HS = [];
        if (SS.hotbarPicking) return HS.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), HS.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), HS;
        if (SS.holding) "slot" === SS.kind ? (HS.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), HS.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === SS.kind && HS.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), HS.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), HS.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), SS.openButtonCloses && HS.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var gS;
          "slot" === SS.kind && SS.slotHasItem ? (HS.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), HS.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), HS.push({
            actions: ["inventoryQuickMove"],
            labelKey: SS.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), HS.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), HS.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== SS.kind && "recipe" !== SS.kind || !SS.pressHints ? "button" === SS.kind || "recipe" === SS.kind ? HS.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === SS.kind && HS.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (SS.pressHints.primary && HS.push({
            actions: ["inventoryPrimary"],
            labelKey: SS.pressHints.primary
          }), SS.pressHints.secondary && HS.push({
            actions: ["inventorySecondary"],
            labelKey: SS.pressHints.secondary
          }));
          const tS = null === (gS = SS.pressHints) || void 0 === gS ? void 0 : gS.back;
          tS && HS.push({
            actions: ["inventoryClose"],
            labelKey: tS
          });
          const bS = [];
          SS.openButtonCloses && bS.push("inventory"), tS || bS.push("inventoryClose"), bS.length > 0 && HS.push({
            actions: bS,
            labelKey: "inventoryClose"
          })
        }
        return HS.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), SS.hasCategories ? HS.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : SS.hasList && HS.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), HS
      };
    var mS = gS(8882),
      eS = gS(8875);
    class rS {
      constructor(SS) {
        this.probes = SS, this.byContainer = new Map, this.byParent = new Map
      }
      find(SS, HS) {
        const gS = dS(SS, "y", HS);
        if (!gS) return null;
        let tS = this.byContainer.get(gS);
        return tS || (this.probes.push({
          element: gS,
          rect: tH(gS.getBoundingClientRect())
        }), tS = {
          container: gS,
          box: AS(gS),
          group: gH(gS)
        }, this.byContainer.set(gS, tS)), tS
      }
      findForParent(SS, HS) {
        let gS = this.byParent.get(SS);
        return void 0 === gS && (gS = this.find(SS, HS), this.byParent.set(SS, gS)), gS
      }
    }
    const SH = new WeakMap;
    let HH = 0;
    const gH = SS => {
        let HS = SH.get(SS);
        return HS || (HS = "el:" + HH++, SH.set(SS, HS)), HS
      },
      tH = SS => ({
        left: SS.left,
        top: SS.top,
        width: SS.width,
        height: SS.height
      }),
      bH = SS => SS.width > 0 && SS.height > 0,
      XH = (SS, HS) => bH(SS) && SS.left + SS.width > 0 && SS.top + SS.height > 0 && SS.left < HS.width && SS.top < HS.height,
      xH = (SS, HS, gS) => {
        const tS = SS.top + SS.height / 2;
        return XH(SS, HS) && (!gS || tS >= gS.top && tS <= gS.bottom)
      },
      NH = SS => ({
        x: SS.left + SS.width / 2,
        y: SS.top + SS.height / 2
      }),
      qH = (SS, HS, gS) => SS < 0 ? gS >= 0 ? 0 : HS - 1 : ((SS + gS) % HS + HS) % HS,
      uH = SS => "Left" === SS || "Right" === SS,
      IH = (SS, HS, gS) => {
        const tS = uH(gS),
          bS = tS ? SS.top : SS.left,
          XS = tS ? SS.height : SS.width,
          xS = tS ? HS.top : HS.left,
          NS = tS ? HS.height : HS.width,
          qS = Math.max(0, Math.max(xS - (bS + XS), bS - (xS + NS)));
        return XS > 1.5 * NS ? {
          gap: qS,
          offset: Math.max(0, xS - bS) + .1 * Math.max(0, bS - xS)
        } : {
          gap: qS,
          offset: Math.abs(xS + NS / 2 - (bS + XS / 2))
        }
      },
      fH = (SS, HS, gS) => {
        const tS = ((SS, HS, gS) => {
          const tS = NH(SS),
            bS = NH(HS),
            XS = uH(gS) ? Math.min(SS.width, HS.width) / 4 : Math.min(SS.height, HS.height) / 4;
          switch (gS) {
            case "Right":
              return bS.x - tS.x >= XS ? Math.max(0, HS.left - (SS.left + SS.width)) : null;
            case "Left":
              return tS.x - bS.x >= XS ? Math.max(0, SS.left - (HS.left + HS.width)) : null;
            case "Down":
              return bS.y - tS.y >= XS ? Math.max(0, HS.top - (SS.top + SS.height)) : null;
            case "Up":
              return tS.y - bS.y >= XS ? Math.max(0, SS.top - (HS.top + HS.height)) : null
          }
        })(SS, HS, gS);
        if (null === tS) return null;
        const bS = IH(SS, HS, gS);
        return tS + 3 * bS.gap + .5 * bS.offset
      },
      kH = (SS, HS) => HS.visible || null !== HS.scrollGroup && HS.scrollGroup === SS.scrollGroup,
      aH = (SS, HS, gS, tS) => {
        let bS = null,
          XS = 1 / 0;
        for (const xS of HS) {
          if (xS.key === SS.key || !kH(SS, xS) || !tS(xS)) continue;
          const HS = fH(SS.rect, xS.rect, gS);
          null !== HS && HS < XS && (bS = xS, XS = HS)
        }
        return bS
      },
      KH = (SS, HS, gS) => {
        const tS = aH(SS, HS, gS, (() => !0));
        if (!tS || uH(gS) || null === SS.scrollGroup || tS.scrollGroup === SS.scrollGroup) return tS;
        const bS = aH(SS, HS, gS, (HS => 0 === IH(SS.rect, HS.rect, gS).gap));
        return null !== bS && void 0 !== bS ? bS : tS
      },
      jH = (SS, HS, gS) => {
        let tS = null,
          bS = 1 / 0;
        for (const XS of HS) {
          if (!XS.visible || gS && !gS(XS)) continue;
          const HS = NH(XS.rect),
            xS = Math.hypot(HS.x - SS.x, HS.y - SS.y);
          xS < bS && (tS = XS, bS = xS)
        }
        return tS
      },
      GH = SS => {
        const {
          rect: HS,
          clip: gS
        } = SS;
        if (!gS) return HS;
        const tS = Math.max(HS.left, gS.left),
          bS = Math.max(HS.top, gS.top);
        return {
          left: tS,
          top: bS,
          width: Math.min(HS.left + HS.width, gS.left + gS.width) - tS,
          height: Math.min(HS.top + HS.height, gS.top + gS.height) - bS
        }
      },
      CH = (SS, HS) => HS.x >= SS.left && HS.x < SS.left + SS.width && HS.y >= SS.top && HS.y < SS.top + SS.height,
      nH = (SS, HS) => {
        let gS = null,
          tS = 1 / 0;
        for (const bS of HS) {
          const HS = GH(bS);
          (bS.visible || bS.clip) && CH(HS, SS) && (HS.width * HS.height < tS && (gS = bS, tS = HS.width * HS.height))
        }
        return gS
      },
      PH = SS => {
        let HS = null;
        for (const gS of SS) {
          if (!gS.visible) continue;
          if (!HS) {
            HS = gS;
            continue
          }
          const SS = Math.min(HS.rect.height, gS.rect.height) / 2,
            tS = gS.rect.top - HS.rect.top;
          (tS < -SS || Math.abs(tS) <= SS && gS.rect.left < HS.rect.left) && (HS = gS)
        }
        return HS
      },
      QH = (SS, HS, gS, tS, bS) => {
        const XS = bS % HS,
          xS = Math.floor(bS / HS);
        return {
          left: SS.left + XS * gS,
          top: SS.top + xS * tS,
          width: SS.width,
          height: SS.height
        }
      },
      DH = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      wH = ".LazyLoadedItemWrapper",
      hH = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      ZH = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      JH = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      OH = SS => SS.hasAttribute("data-inven-idx") ? "slot" : SS.hasAttribute("data-recipe-key") ? "recipe" : SS.hasAttribute("data-craft-ingredient") || (0, eS.y)(SS) ? "info" : (0, MS.K)(SS) ? "textField" : "button",
      dH = (SS, HS) => "slot" === HS ? Number(SS.getAttribute("data-inven-idx")) : null,
      cH = SS => SS.matches(wH) ? SS.querySelector(hH) : SS,
      vH = SS => {
        var HS, gS;
        return {
          element: SS,
          recipe: null !== (HS = SS && (null === (gS = cH(SS)) || void 0 === gS ? void 0 : gS.getAttribute("data-recipe-key"))) && void 0 !== HS ? HS : null
        }
      },
      EH = SS => {
        const HS = cH(SS);
        if (!HS) return {
          kind: "pending",
          idx: null
        };
        const gS = OH(HS);
        return {
          kind: gS,
          idx: dH(HS, gS)
        }
      },
      LH = SS => {
        const HS = [];
        for (const [gS, tS] of ZH) {
          SS.matches(tS) && HS.push([gS, SS]);
          for (const bS of SS.querySelectorAll(tS)) HS.push([gS, bS])
        }
        return HS
      },
      YH = (SS, HS) => {
        for (const [gS, tS] of SS)
          if (tS.contains(HS)) return gS;
        return "other"
      },
      AH = (SS, HS, gS, tS, bS, XS, xS, NS) => {
        var qS;
        const uS = SS.children,
          IS = tH(uS[0].getBoundingClientRect()),
          fS = [{
            element: uS[0],
            rect: IS
          }];
        if (XS.push(fS[0]), 0 === IS.width || 0 === IS.height) return;
        let kS = 1;
        for (; kS < uS.length && Math.abs(uS[kS].getBoundingClientRect().top - IS.top) < 1;) kS++;
        const aS = SS => {
            const HS = {
              element: uS[SS],
              rect: tH(uS[SS].getBoundingClientRect())
            };
            return XS.push(HS), fS.push(HS), HS.rect
          },
          KS = kS > 1 ? aS(1).left - IS.left : IS.width,
          jS = uS.length > kS ? aS(kS).top - IS.top : IS.height,
          GS = xS.find(SS, HS);
        let CS = null;
        if (GS) {
          var nS;
          const {
            container: SS,
            box: HS
          } = GS;
          CS = null !== (nS = NS.get(SS)) && void 0 !== nS ? nS : null, CS || (CS = {
            top: SS.scrollTop,
            left: SS.scrollLeft,
            box: HS,
            viewport: tS,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, NS.set(SS, CS)), CS.probes.push(...fS)
        }
        const PS = bS.length;
        for (let hS = 0; hS < uS.length; hS++) {
          var QS, DS, wS;
          const SS = uS[hS],
            HS = QH(IS, kS, KS, jS, hS),
            XS = SS.firstElementChild ? SS.querySelector(hH) : null,
            xS = XS ? OH(XS) : "pending";
          bS.push({
            key: gH(SS),
            rect: HS,
            panel: gS,
            scrollGroup: null !== (QS = null === GS || void 0 === GS ? void 0 : GS.group) && void 0 !== QS ? QS : null,
            visible: xH(HS, tS, null === GS || void 0 === GS ? void 0 : GS.box),
            clip: null !== (DS = null === GS || void 0 === GS ? void 0 : GS.box) && void 0 !== DS ? DS : null,
            element: SS,
            kind: xS,
            idx: XS ? dH(XS, xS) : null,
            scrollContainer: null !== (wS = null === GS || void 0 === GS ? void 0 : GS.container) && void 0 !== wS ? wS : null
          })
        }
        null === (qS = CS) || void 0 === qS || qS.targets.push(...bS.slice(PS))
      },
      yH = SS => SS instanceof Element && null !== SS.closest(wH),
      VH = SS => null !== SS.scrollContainer && yH(SS.element);
    class iH {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(SS, HS, gS, tS) {
        this.latched = {
          source: SS,
          focusKey: HS,
          sinceMs: gS,
          hold: {
            id: ++this.presses,
            holdMs: tS
          }
        }
      }
      update(SS, HS, gS) {
        const tS = this.latched;
        return tS ? SS && HS === tS.focusKey ? gS - tS.sinceMs < tS.hold.holdMs ? null : (this.latched = null, tS.source) : (this.latched = null, null) : null
      }
      getHold() {
        var SS, HS;
        return null !== (SS = null === (HS = this.latched) || void 0 === HS ? void 0 : HS.hold) && void 0 !== SS ? SS : null
      }
      reset() {
        this.latched = null
      }
    }
    var WH = gS(8891);
    const zH = {
        kind: "none"
      },
      UH = SS => ({
        x: SS.clientX,
        y: SS.clientY
      }),
      pH = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class sH {
      constructor() {
        this.hovered = zH, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(SS, HS, gS, tS, bS) {
        const XS = null !== HS ? {
            kind: "slot",
            idx: HS
          } : gS ? {
            kind: "element",
            element: gS
          } : zH,
          xS = `${bS}|${Math.round(tS.clientX)},${Math.round(tS.clientY)}`,
          NS = (qS = this.hovered, uS = XS, "slot" === qS.kind && "slot" === uS.kind ? qS.idx === uS.idx : "element" === qS.kind && "element" === uS.kind ? qS.element === uS.element : qS.kind === uS.kind);
        var qS, uS;
        if (NS && xS === this.signature) return;
        const IS = !NS || bS !== this.holding || "" === this.signature;
        this.signature = xS, this.holding = bS, this.lastPoint = tS;
        const fS = this.hovered;
        if (this.hovered = XS, "slot" === XS.kind) return this.leaveElement(fS, null, tS), void(IS ? SS.hover(XS.idx, tS) : SS.moveTo(tS));
        if (NS) return void("element" === XS.kind ? (0, MS.k)(XS.element, XS.element, UH(tS)) : SS.hover(null, tS));
        SS.hover(null, tS);
        const kS = "element" === XS.kind ? XS.element : null;
        "element" === fS.kind ? (0, MS.k)(fS.element, kS, UH(tS)) : kS && (0, MS.k)(null, kS, UH(tS))
      }
      invalidate() {
        this.signature = ""
      }
      clear(SS) {
        const HS = this.hovered;
        this.hovered = zH, this.signature = "", "none" !== HS.kind && (this.leaveElement(HS, null, this.lastPoint), SS && "slot" === HS.kind && SS.hover(null, this.lastPoint))
      }
      leaveElement(SS, HS, gS) {
        "element" === SS.kind && (0, MS.k)(SS.element, HS, UH(gS))
      }
    }
    class BH {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(SS, HS) {
        hS(SS) && (this.lastTiltedMs = HS)
      }
      allowsClick(SS) {
        return SS - this.lastTiltedMs > 150
      }
    }
    class MH {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(SS) {
        return 0 !== (0, KS.l)(SS, .2).y
      }
      step(SS, HS, gS) {
        SS !== this.container && (this.container = SS, this.remainder = 0);
        const tS = ZS(HS, gS).y;
        if (0 === tS) return this.remainder = 0, !1;
        const bS = this.remainder + tS,
          XS = Math.trunc(bS);
        if (this.remainder = bS - XS, 0 === XS) return !1;
        const xS = SS.scrollTop;
        return SS.scrollTop = xS + XS, SS.scrollTop !== xS
      }
      current() {
        var SS;
        return null !== (SS = this.container) && void 0 !== SS && SS.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var FH = gS(8897);
    const RH = "[data-pad-inventory-default]",
      TH = ".HotBarGameItemsContainer .InvenItem.Selected",
      oH = {
        Up: {
          x: 0,
          y: -1
        },
        Down: {
          x: 0,
          y: 1
        },
        Left: {
          x: -1,
          y: 0
        },
        Right: {
          x: 1,
          y: 0
        }
      },
      lH = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      mH = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      eH = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      rH = [...mH, ...eH],
      Sg = () => {
        return SS = (0, IS.h)("inventory"), !rH.map(IS.h).includes(SS) && !(0, KS.H)(SS);
        var SS
      },
      Hg = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      gg = (SS, HS) => {
        const gS = !(null === HS || void 0 === HS || !HS.isHolding());
        return function(SS, HS) {
          const gS = SS.find((SS => SS.visible && HS(SS)));
          if (gS) return gS;
          for (var tS = arguments.length, bS = new Array(tS > 2 ? tS - 2 : 0), XS = 2; XS < tS; XS++) bS[XS - 2] = arguments[XS];
          for (const xS of bS) {
            const HS = PH(SS.filter(xS));
            if (HS) return HS
          }
          return PH(SS)
        }(SS, (SS => {
          const {
            element: HS
          } = SS;
          return HS.matches(RH) || null !== HS.querySelector(RH) || HS.matches(TH)
        }), (SS => "slot" === SS.kind ? gS || null !== SS.idx && !(null === HS || void 0 === HS || !HS.hasItemAt(SS.idx)) : "recipe" === SS.kind || "pending" === SS.kind), (SS => "slot" === SS.kind || "button" === SS.kind))
      };
    class tg {
      constructor() {
        this.set = null, this.observer = new MutationObserver((SS => {
          SS.some((SS => !yH(SS.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = SS => {
          this.scrolled(SS.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const SS = [],
              HS = [];
            let gS = !1;
            const tS = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              bS = new Map,
              XS = new rS(HS);
            for (const fS of document.querySelectorAll(DH)) {
              const IS = LH(fS);
              gS ||= null !== fS.querySelector(".CreativeCategoryTab");
              for (const gS of fS.querySelectorAll(`${wH}:first-child`)) {
                const xS = gS.parentElement;
                AH(xS, fS, YH(IS, xS), tS, SS, HS, XS, bS)
              }
              for (const gS of fS.querySelectorAll(hH)) {
                var xS, NS, qS, uS;
                if (gS.closest(wH) || gS.closest("[data-pad-ignore]")) continue;
                const kS = null === (xS = gS.parentElement) || void 0 === xS ? void 0 : xS.closest(hH);
                if (kS && fS.contains(kS)) continue;
                const aS = OH(gS),
                  KS = dH(gS, aS);
                if (-1 === KS) continue;
                const jS = tH(gS.getBoundingClientRect());
                HS.push({
                  element: gS,
                  rect: jS
                });
                const GS = XS.findForParent(gS.parentElement, fS),
                  CS = GS && !bS.has(GS.container) ? GS : null;
                (CS ? bH(jS) : XH(jS, tS)) && SS.push({
                  key: gH(gS),
                  rect: jS,
                  panel: YH(IS, gS),
                  scrollGroup: null !== (NS = null === CS || void 0 === CS ? void 0 : CS.group) && void 0 !== NS ? NS : null,
                  visible: xH(jS, tS, null === CS || void 0 === CS ? void 0 : CS.box),
                  clip: null !== (qS = null === CS || void 0 === CS ? void 0 : CS.box) && void 0 !== qS ? qS : null,
                  element: gS,
                  kind: aS,
                  idx: KS,
                  scrollContainer: null !== (uS = null === CS || void 0 === CS ? void 0 : CS.container) && void 0 !== uS ? uS : null
                })
              }
            }
            for (const [fS, kS] of bS) kS.holdsOthers = HS.some((SS => SS.element !== fS && fS.contains(SS.element) && !SS.element.closest(wH)));
            const IS = new Map;
            for (const fS of SS) IS.set(fS.element, fS);
            return {
              targets: SS,
              byElement: IS,
              hasCategories: gS,
              probes: HS,
              scrollers: bS
            }
          })(), this.observer.disconnect();
          for (const SS of document.querySelectorAll(DH)) this.observer.observe(SS, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(SS) {
        !this.set || SS instanceof Element && ((SS, HS) => {
          const gS = SS.scrollers.get(HS);
          if (!gS || gS.holdsOthers || HS.scrollLeft !== gS.left) return !1;
          const tS = HS.scrollTop - gS.top;
          if (0 === tS) return !0;
          gS.top = HS.scrollTop;
          for (const bS of gS.probes) bS.rect.top -= tS;
          for (const bS of gS.targets) bS.rect.top -= tS, bS.visible = xH(bS.rect, gS.viewport, gS.box);
          return !0
        })(this.set, SS) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((SS => {
          return HS = SS.rect, gS = SS.element.getBoundingClientRect(), !(HS.left === gS.left && HS.top === gS.top && HS.width === gS.width && HS.height === gS.height);
          var HS, gS
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const bg = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(KS.A.map((SS => [SS, (0, jS.d)(KS.E)]))), this.stickRepeat = new KS.b((0, jS.d)(KS.cb)), this.pageUpTimer = (0, jS.d)(KS.ab), this.pageDownTimer = (0, jS.d)(KS.ab), this.stickGate = new DS, this.pointer = null, this.activePress = null, this.dropLatch = new iH, this.scroller = new MH, this.scrollStickClick = new BH, this.hover = new sH, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new sS, this.targets = new tg, this.hasCategories = !1, this.wasShowing = !1, this.state = WH.e, this.isActive = () => (0, mS.h)(), this.isShowing = () => "inventory" === fS.e.getActiveConsumerName() && (0, aS.m)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, mS.g)()), (0, mS.h)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var SS;
            this.reopenSlotIdx = null !== (SS = this.focused ? EH(this.focused).idx : null) && void 0 !== SS ? SS : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, mS.p)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = SS => {
            (0, NS.unstable_batchedUpdates)((() => {
              this.frame(SS)
            }))
          }, this.shouldBlockRealPointer = SS => SS.isTrusted && !(0, CS.q)(SS) && this.isShowing(), this.noteRealPointer = SS => {
            SS instanceof MouseEvent && SS.isTrusted && !(0, CS.q)(SS) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = SS.clientX, this.lastRealPointer.y = SS.clientY)
          }, this.wakePressActs = SS => {
            var HS;
            return SS === (0, IS.h)("inventoryClose") ? !(null !== (HS = (0, mS.g)()) && void 0 !== HS && HS.isHolding()) : !(SS !== (0, IS.h)("inventory") || !Sg()) || ((0, KS.H)(SS) ? this.isNavButton(SS) : eH.some((HS => (0, IS.h)(HS) === SS)))
          }
        }
        frame(SS) {
          var HS, gS, tS, bS, XS;
          const xS = (0, mS.g)();
          if (!(0, aS.m)()) return void(this.wasShowing && (this.endInteraction(xS), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), SS.wokeDevice && this.focusWakePointer(!(null === xS || void 0 === xS || !xS.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, kS.f)().inventoryNavigation || this.pointer || this.engagePointer();
          const NS = performance.now();
          this.handleNavigation(SS, NS), this.handlePanels(SS), this.handlePaging(SS, NS), this.handleScroll(SS), this.handleButtons(SS, NS, xS), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const qS = this.ensureFocus(),
            uS = this.focusContext(xS);
          this.ring.show(qS);
          const fS = "slot" === uS.kind ? uS.idx : null,
            KS = null !== (HS = null === (gS = uS.actionElement) || void 0 === gS ? void 0 : gS.querySelector(".DoCraftItem")) && void 0 !== HS ? HS : uS.actionElement;
          this.pointer ? (this.hover.sync(xS, fS, KS, ((SS, HS) => {
            const gS = HS ? pH() : 0;
            return {
              clientX: SS.x - gS,
              clientY: SS.y - gS
            }
          })(this.pointer, uS.holding), uS.holding), RS.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: SS.isHeld((0, IS.h)("inventoryPrimary"))
          })) : qS && this.focused && this.hover.sync(xS, fS, KS, ((SS, HS) => {
            if (!HS) return {
              clientX: SS.left + SS.width - 10,
              clientY: SS.top + SS.height / 2 - 10
            };
            const gS = pH();
            return {
              clientX: SS.left + SS.width / 2 - gS,
              clientY: SS.top + SS.height / 2 - gS
            }
          })(qS, uS.holding), uS.holding), this.publishState({
            showing: !0,
            kind: uS.kind,
            holding: uS.holding,
            slotHasItem: uS.slotHasItem,
            pressHints: null !== (tS = null === (bS = uS.press) || void 0 === bS ? void 0 : bS.hints) && void 0 !== tS ? tS : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && VH(this.focusTarget),
            openButtonCloses: Sg(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === uS.kind && !(null === (XS = uS.actionElement) || void 0 === XS || !XS.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(SS) {
          var HS;
          const gS = (0, aS.d)();
          if (!gS) return;
          this.targets.revalidate();
          const tS = this.getTargets().targets;
          this.setFocus(null !== (HS = nH(gS, tS)) && void 0 !== HS ? HS : SS ? jH(gS, tS, (SS => {
            let {
              rect: HS
            } = SS;
            const tS = Math.max(HS.left - gS.x, 0, gS.x - (HS.left + HS.width)),
              bS = Math.max(HS.top - gS.y, 0, gS.y - (HS.top + HS.height));
            return Math.hypot(tS, bS) <= Math.min(HS.width, HS.height) / 2
          })) : null, !1), "cursor" === (0, kS.f)().inventoryNavigation && (this.pointer = {
            x: gS.x,
            y: gS.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const SS = this.lastRealPointer;
          if (!SS || "keyboardMouse" !== qS.b.get("activeInputDevice")) return;
          const HS = document.elementFromPoint(SS.x, SS.y);
          HS && (0, MS.k)(null, HS, SS)
        }
        endInteraction(SS) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const HS of this.dpadTimers.values()) HS.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(SS), this.ring.hide(), this.releasePointer(), this.publishState(WH.e)
        }
        getTargets() {
          const SS = this.targets.get();
          return this.hasCategories = SS.hasCategories, SS
        }
        currentTarget() {
          var SS;
          return this.focused && null !== (SS = this.getTargets().byElement.get(this.focused)) && void 0 !== SS ? SS : null
        }
        readFocusRect() {
          const SS = this.focused;
          if (null === SS || void 0 === SS || !SS.isConnected || !SS.closest(DH)) return null;
          const HS = SS.getBoundingClientRect();
          return HS.width > 0 && HS.height > 0 ? {
            left: HS.left,
            top: HS.top,
            width: HS.width,
            height: HS.height
          } : null
        }
        ensureFocus() {
          const SS = this.readFocusRect();
          if (SS || this.pointer) return SS;
          const {
            targets: HS,
            byElement: gS
          } = this.getTargets();
          let tS = null,
            bS = !1;
          if (this.lastRect) tS = jH(NH(this.lastRect), HS);
          else {
            var XS, xS;
            const SS = ((SS, HS) => {
                const gS = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return gS ? gg(SS.filter((SS => gS.contains(SS.element))), HS) : null
              })(HS, (0, mS.g)()),
              NS = HS.find((SS => null !== SS.idx && SS.idx === this.reopenSlotIdx)),
              qS = document.querySelector(TH);
            bS = null !== SS || void 0 !== NS, tS = null !== (XS = null !== (xS = null !== SS && void 0 !== SS ? SS : NS) && void 0 !== xS ? xS : qS && gS.get(qS)) && void 0 !== XS ? XS : PH(HS)
          }
          return this.setFocus(tS, bS), this.lastRect
        }
        setFocus(SS) {
          let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          SS && (this.focused = SS.element, this.focusTarget = SS, this.panelMemory.set(SS.panel, SS.element), HS && SS.scrollContainer && ((SS, HS) => {
            const gS = SS.getBoundingClientRect(),
              tS = AS(HS),
              bS = HS.scrollTop;
            return gS.top < tS.top ? HS.scrollTop -= tS.top - gS.top : gS.bottom > tS.bottom && (HS.scrollTop += gS.bottom - tS.bottom), HS.scrollTop !== bS
          })(SS.element, SS.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, kS.f)().inventoryNavigation) {
              if (this.lastRect) {
                const SS = NH(this.lastRect);
                this.pointer = {
                  x: SS.x,
                  y: SS.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const SS = this.lastRect ? NH(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: SS.x,
            y: SS.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, RS.hide()
        }
        hoverAtPointer() {
          var SS;
          const HS = nH(this.pointer, this.getTargets().targets);
          this.focusTarget = HS, (null === HS || void 0 === HS ? void 0 : HS.element) !== this.focused && (this.focused = null !== (SS = null === HS || void 0 === HS ? void 0 : HS.element) && void 0 !== SS ? SS : null, HS && (this.panelMemory.set(HS.panel, HS.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(SS, HS) {
          const gS = this.focusTarget,
            tS = gS && (0, kS.f)().cursorMagnetism ? NH(GH(gS)) : null;
          this.pointer = wS(this.pointer, {
            stick: SS.leftStick,
            moveDeadzone: (0, kS.f)().moveDeadzone,
            dpad: HS,
            dtMs: SS.dtMs,
            cursorSpeedPercent: (0, kS.f)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: tS
            }
          })
        }
        move(SS) {
          this.targets.revalidate();
          const HS = this.currentTarget();
          HS && this.setFocus(KH(HS, this.getTargets().targets, SS))
        }
        step(SS) {
          const HS = this.pointer;
          if (HS && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((SS, HS, gS) => {
            var tS;
            const bS = {
              key: "",
              rect: {
                left: SS.x,
                top: SS.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (tS = KH(bS, HS, gS)) && void 0 !== tS ? tS : jH(SS, HS)
          })(HS, this.getTargets().targets, SS));
          this.move(SS)
        }
        isNavButton(SS) {
          return !mH.some((HS => (0, IS.h)(HS) === SS)) && !(SS === (0, IS.h)("inventory") && Sg())
        }
        handleNavigation(SS, HS) {
          const gS = (0, kS.f)().inventoryNavigation,
            tS = {
              x: 0,
              y: 0
            };
          let bS = null;
          for (const qS of KS.A) {
            const XS = this.isNavButton(qS) && SS.isHeld(qS);
            XS && (tS.x += oH[qS].x, tS.y += oH[qS].y), this.dpadTimers.get(qS).update(XS, HS) && "cursor" !== gS && (bS ??= qS)
          }
          const XS = this.stickGate.update(SS.leftStick, (0, kS.f)().moveDeadzone);
          if (bS && (this.step(bS), this.stickGate.lock()), "slot" !== gS) {
            const HS = ((SS, HS, gS, tS) => "hybrid" !== SS ? "cursor" === SS : !tS && (HS || gS))(gS, null !== this.pointer, XS, null !== bS);
            return HS && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(SS, "cursor" === gS ? tS : {
              x: 0,
              y: 0
            }))
          }
          const xS = (0, KS.l)(SS.leftStick, (0, kS.f)().moveDeadzone),
            NS = this.stickRepeat.update(XS ? (0, KS.eb)(xS) : null, HS);
          NS && this.move(NS)
        }
        applyCategoryPlace() {
          const SS = this.placeAfterCategory;
          if (!SS) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const HS = jH(NH(SS.rect), this.getTargets().targets, (HS => HS.scrollGroup === SS.scrollGroup));
          this.setFocus(HS, !1)
        }
        applyFocusRequest() {
          const SS = (0, mS.p)();
          SS && (this.targets.invalidate(), this.setFocus((0, mS.c)(this.getTargets().targets, SS)))
        }
        handlePanels(SS) {
          var HS, gS, tS;
          const bS = SS.wasPressed((0, IS.h)("inventoryPanelPrevious")),
            XS = SS.wasPressed((0, IS.h)("inventoryPanelNext"));
          if (!bS && !XS) return;
          const {
            targets: xS
          } = this.getTargets(), NS = (qS = ((SS, HS) => {
            const gS = [];
            for (const bS of SS) bS.visible && !gS.includes(bS.panel) && gS.push(bS.panel);
            const tS = SS => {
              const tS = HS.indexOf(SS);
              return -1 === tS ? HS.length + gS.indexOf(SS) : tS
            };
            return gS.sort(((SS, HS) => tS(SS) - tS(HS)))
          })(xS, JH), uS = null !== (HS = null === (gS = this.focusTarget) || void 0 === gS ? void 0 : gS.panel) && void 0 !== HS ? HS : null, fS = XS ? 1 : -1, 0 === qS.length ? null : qS[qH(null === uS ? -1 : qS.indexOf(uS), qS.length, fS)]);
          var qS, uS, fS;
          if (null === NS) return;
          const kS = this.panelMemory.get(NS),
            aS = xS.filter((SS => SS.panel === NS)),
            KS = null !== (tS = aS.find((SS => SS.element === kS && SS.visible))) && void 0 !== tS ? tS : gg(aS, (0, mS.g)());
          this.setFocus(KS)
        }
        handlePaging(SS, HS) {
          const gS = (0, IS.h)("menuPageUp"),
            tS = (0, IS.h)("menuPageDown"),
            bS = this.pageUpTimer.update(SS.isHeld(gS), HS),
            XS = this.pageDownTimer.update(SS.isHeld(tS), HS);
          if (!bS && !XS) return;
          const xS = XS ? 1 : -1;
          if (!SS.wasPressed(XS ? tS : gS) && this.hasCategories) return;
          if ((SS => {
              const HS = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === HS.length) return !1;
              const gS = HS.findIndex((SS => SS.classList.contains("Selected"))),
                tS = HS[qH(gS, HS.length, SS)];
              return (0, MS.j)(tS, (0, MS.x)(tS)), !0
            })(xS)) {
            var NS, qS;
            this.targets.invalidate();
            const SS = null !== (NS = null === (qS = this.focusTarget) || void 0 === qS ? void 0 : qS.scrollGroup) && void 0 !== NS ? NS : null,
              HS = this.readFocusRect();
            return void(this.placeAfterCategory = null !== SS && HS && !this.pointer ? {
              rect: HS,
              scrollGroup: SS
            } : null)
          }
          const {
            targets: uS
          } = this.getTargets(), fS = this.currentTarget(), kS = fS && VH(fS) ? fS : uS.find((SS => VH(SS) && SS.visible));
          if (!kS) return;
          const aS = ((SS, HS, gS, tS) => {
            if (null === SS.scrollGroup) return null;
            const bS = NH(SS.rect),
              XS = bS.x,
              xS = bS.y + ("Down" === gS ? tS : -tS);
            let NS = null,
              qS = 1 / 0;
            for (const uS of HS) {
              if (uS.scrollGroup !== SS.scrollGroup || uS.key === SS.key) continue;
              const HS = NH(uS.rect);
              if ("Down" === gS ? HS.y <= bS.y : HS.y >= bS.y) continue;
              const tS = Math.hypot(HS.x - XS, HS.y - xS);
              tS < qS && (NS = uS, qS = tS)
            }
            return NS
          })(kS, uS, xS > 0 ? "Down" : "Up", kS.scrollContainer.clientHeight);
          this.setFocus(null !== aS && void 0 !== aS ? aS : kS)
        }
        handleScroll(SS) {
          var HS, gS, tS, bS, XS, xS;
          if (!this.scroller.isScrolling(SS.rightStick)) return void this.scroller.reset();
          const {
            targets: NS
          } = this.getTargets(), qS = this.pointer, uS = !qS && this.focusTarget && VH(this.focusTarget) ? this.focusTarget.scrollContainer : null, IS = qS && (null === (HS = NS.find((SS => SS.clip && CH(SS.clip, qS)))) || void 0 === HS ? void 0 : HS.scrollContainer), fS = null !== (gS = null !== (tS = null !== (bS = this.scroller.current()) && void 0 !== bS ? bS : IS) && void 0 !== tS ? tS : uS) && void 0 !== gS ? gS : null === (XS = NS.find(VH)) || void 0 === XS ? void 0 : XS.scrollContainer;
          if (!fS || !this.scroller.step(fS, SS.rightStick, SS.dtMs)) return;
          this.targets.scrolled(fS);
          const kS = qS || (null === (xS = this.focusTarget) || void 0 === xS ? void 0 : xS.scrollContainer) !== fS ? null : this.readFocusRect();
          if (!kS) return;
          const aS = AS(fS),
            KS = NH(kS);
          if (KS.y < aS.top || KS.y > aS.bottom) {
            const SS = this.focusTarget.scrollGroup,
              HS = jH(KS, this.getTargets().targets, (HS => HS.scrollGroup === SS));
            this.setFocus(HS, !1)
          }
        }
        focusContext(SS) {
          const {
            kind: HS,
            idx: gS
          } = this.focused ? EH(this.focused) : {
            kind: null,
            idx: null
          }, tS = this.focused ? cH(this.focused) : null, bS = tS ? (0, FH.c)(tS) : null;
          return {
            kind: HS,
            idx: gS,
            actionElement: tS,
            press: bS,
            hasPress: null !== bS,
            hasBack: !(null === bS || void 0 === bS || !bS.back),
            holding: SS.isHolding(),
            slotHasItem: null !== gS && SS.hasItemAt(gS)
          }
        }
        handleButtons(SS, HS, gS) {
          var tS, bS;
          if (!this.activePress || SS.isHeld(this.activePress.button) && (tS = this.activePress.target, bS = this.focused, null !== tS.recipe ? vH(bS).recipe === tS.recipe : bS === tS.element) || this.releasePress(), this.scrollStickClick.update(SS.rightStick, HS), !this.handleHotbarPick(SS, gS)) {
            for (const [tS, bS] of lH) {
              const XS = (0, IS.h)(bS);
              if (!SS.wasPressed(XS) || "openButton" === tS && !Sg()) continue;
              if ("RS" === XS && !this.scrollStickClick.allowsClick(HS)) continue;
              const xS = this.focusContext(gS),
                NS = oS(tS, xS);
              NS && this.runIntent(NS, xS, XS, gS)
            }
            this.handleDrop(SS, HS, gS)
          }
        }
        handleHotbarPick(SS, HS) {
          const gS = this.hotbarPick;
          if (!gS) return !1;
          const tS = SS.wasPressed((0, IS.h)("inventoryPrimary")) || SS.wasPressed((0, IS.h)("inventoryHotbarSwap"));
          if (!tS && !SS.wasPressed((0, IS.h)("inventoryClose")) && !HS.isHolding()) return !(SS.wasPressed((0, IS.h)("inventory")) && Sg());
          const bS = this.focusTarget;
          tS && "hotbar" === (null === bS || void 0 === bS ? void 0 : bS.panel) && null !== bS.idx && bS.idx !== gS.idx && (HS.swapWithHotbar(bS.idx, gS.idx), this.afterAction()), this.hotbarPick = null;
          const XS = gS.element.isConnected ? this.getTargets().byElement.get(gS.element) : void 0;
          return XS && this.setFocus(XS), !0
        }
        startHotbarPick(SS) {
          var HS;
          const {
            targets: gS,
            byElement: tS
          } = this.getTargets(), bS = document.querySelector(TH), XS = null !== (HS = bS && tS.get(bS)) && void 0 !== HS ? HS : gS.find((SS => "hotbar" === SS.panel));
          XS && this.focused && (this.hotbarPick = {
            idx: SS,
            element: this.focused
          }, this.setFocus(XS))
        }
        focusKey() {
          return this.focused ? gH(this.focused) : null
        }
        handleDrop(SS, HS, gS) {
          const tS = (0, IS.h)("inventoryDrop");
          if (SS.wasPressed(tS)) {
            const SS = (bS = this.focusContext(gS)).holding ? {
              kind: "Ku"
            } : "slot" === bS.kind && bS.slotHasItem && null !== bS.idx ? {
              kind: "slot",
              idx: bS.idx
            } : null;
            return void(SS && (this.dropFrom(SS, !1, gS), this.dropLatch.press(SS, this.focusKey(), HS, GS.e[(0, kS.f)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var bS;
          const XS = this.dropLatch.update(SS.isHeld(tS), this.focusKey(), HS);
          XS && ((SS, HS, gS) => "Ku" === SS.kind ? HS : !HS && gS(SS.idx))(XS, gS.isHolding(), gS.hasItemAt) && (this.dropFrom(XS, !0, gS), this.afterAction())
        }
        dropFrom(SS, HS, gS) {
          "Ku" === SS.kind ? gS.dropHeld(HS, this.slotPoint()) : gS.dropSlot(SS.idx, HS)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (SS => {
            const HS = NH(SS);
            return {
              clientX: HS.x,
              clientY: HS.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(SS, HS, gS, tS) {
          const bS = HS.idx,
            XS = HS.actionElement;
          switch (XS && Hg.has(SS) && (0, CS.v)(XS), SS) {
            case "slotPrimary":
              tS.primary(bS, this.slotPoint());
              break;
            case "slotSecondary":
              tS.secondary(bS, this.slotPoint());
              break;
            case "slotQuickMove":
              tS.quickMove(bS, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(bS);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(HS.press, "pressPrimary" === SS ? "primary" : "secondary", gS);
              break;
            case "click":
              (0, MS.j)(XS, (0, MS.x)(XS));
              break;
            case "openKeyboard":
              (0, MS.K)(XS) && (0, MS.H)(XS);
              break;
            case "pressBack":
              HS.press.back();
              break;
            case "cancel":
              tS.cancel();
              break;
            case "close":
              return this.releasePress(), void tS.close()
          }
          this.afterAction()
        }
        startPress(SS, HS, gS) {
          this.releasePress(), SS.press(HS) && (this.activePress = {
            handlers: SS,
            button: gS,
            target: vH(this.focused)
          })
        }
        releasePress() {
          var SS, HS, gS;
          null === (SS = this.activePress) || void 0 === SS || null === (HS = (gS = SS.handlers).release) || void 0 === HS || HS.call(gS), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(SS) {
          ((SS, HS) => {
            var gS, tS, bS, XS, xS, NS;
            return SS.showing === HS.showing && SS.kind === HS.kind && SS.holding === HS.holding && SS.slotHasItem === HS.slotHasItem && (null === (gS = SS.pressHints) || void 0 === gS ? void 0 : gS.primary) === (null === (tS = HS.pressHints) || void 0 === tS ? void 0 : tS.primary) && (null === (bS = SS.pressHints) || void 0 === bS ? void 0 : bS.secondary) === (null === (XS = HS.pressHints) || void 0 === XS ? void 0 : XS.secondary) && (null === (xS = SS.pressHints) || void 0 === xS ? void 0 : xS.back) === (null === (NS = HS.pressHints) || void 0 === NS ? void 0 : NS.back) && SS.hasCategories === HS.hasCategories && SS.hasList === HS.hasList && SS.openButtonCloses === HS.openButtonCloses && SS.steppingSlots === HS.steppingSlots && SS.hotbarPicking === HS.hotbarPicking && SS.quickMoveToHotbar === HS.quickMoveToHotbar && SS.dropStackHold === HS.dropStackHold
          })(SS, this.state) || (this.state = SS, uS.k.cj(WH.h, SS))
        }
      },
      Xg = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var xg = gS(8903),
      Ng = gS(369),
      qg = gS(1733),
      ug = gS(8346);
    const Ig = "[data-pad-secondary]",
      fg = SS => SS instanceof HTMLElement && (0, eS.u)(SS) && !(0, eS.y)(SS),
      kg = SS => {
        const HS = SS.querySelector(Ig);
        if (HS && fg(HS)) return HS;
        for (const bS of null !== (gS = null === (tS = SS.parentElement) || void 0 === tS ? void 0 : tS.children) && void 0 !== gS ? gS : []) {
          var gS, tS;
          if (bS !== SS && bS.matches(Ig) && fg(bS)) return bS
        }
        return null
      },
      ag = (SS, HS, gS, tS) => Math.max(0, Math.max(SS, gS) - Math.min(HS, tS)),
      Kg = (SS, HS, gS, tS) => Math.max(0, Math.min(HS, tS) - Math.max(SS, gS)),
      jg = (SS, HS, gS) => {
        const tS = (SS.left + SS.right) / 2,
          bS = (SS.top + SS.bottom) / 2,
          XS = (HS.left + HS.right) / 2,
          xS = (HS.top + HS.bottom) / 2;
        if ("Left" === gS || "Right" === gS) {
          const NS = "Right" === gS ? 1 : -1;
          return {
            forwardGap: "Right" === gS ? HS.left - SS.right : SS.left - HS.right,
            centreForward: (XS - tS) * NS,
            sidewaysGap: ag(SS.top, SS.bottom, HS.top, HS.bottom),
            sidewaysOverlap: Kg(SS.top, SS.bottom, HS.top, HS.bottom),
            centreSideways: Math.abs(xS - bS),
            startSideways: Math.abs(HS.top - SS.top),
            fromSidewaysSize: SS.bottom - SS.top,
            toSidewaysSize: HS.bottom - HS.top,
            toLength: HS.right - HS.left
          }
        }
        const NS = "Down" === gS ? 1 : -1;
        return {
          forwardGap: "Down" === gS ? HS.top - SS.bottom : SS.top - HS.bottom,
          centreForward: (xS - bS) * NS,
          sidewaysGap: ag(SS.left, SS.right, HS.left, HS.right),
          sidewaysOverlap: Kg(SS.left, SS.right, HS.left, HS.right),
          centreSideways: Math.abs(XS - tS),
          startSideways: Math.abs(HS.left - SS.left),
          fromSidewaysSize: SS.right - SS.left,
          toSidewaysSize: HS.right - HS.left,
          toLength: HS.bottom - HS.top
        }
      },
      Gg = SS => SS.centreForward > .5 && SS.forwardGap >= -SS.toLength / 2,
      Cg = SS => {
        const HS = SS.sidewaysOverlap > 0 ? 0 : 2 * SS.fromSidewaysSize,
          gS = SS.fromSidewaysSize > 1.5 * SS.toSidewaysSize ? SS.startSideways : SS.centreSideways;
        return Math.max(0, SS.forwardGap) + 3 * SS.sidewaysGap + HS + .1 * gS
      },
      ng = (SS, HS) => Kg(SS.top, SS.bottom, HS.top, HS.bottom) > 0 || HS.bottom - HS.top > HS.right - HS.left,
      Pg = (SS, HS, gS, tS, bS, XS) => {
        const xS = bS ? Dg(SS, HS, gS, bS) : new Set,
          NS = hg(SS, HS, gS, xS);
        return NS < 0 && xS.size > 0 && XS ? Qg(SS, HS, gS, XS) : tS && NS >= 0 ? wg(SS, HS, gS, tS, NS, xS) : NS
      },
      Qg = (SS, HS, gS, tS) => {
        const bS = new Set,
          XS = hg(SS, HS, "Up", bS) >= 0,
          xS = hg(SS, HS, "Down", bS) >= 0,
          NS = new Set;
        return HS.forEach(((HS, gS) => {
          const bS = HS.top + HS.bottom < SS.top + SS.bottom;
          tS[gS] && !(bS ? XS : xS) || NS.add(gS)
        })), hg(SS, HS, gS, NS)
      },
      Dg = (SS, HS, gS, tS) => {
        const bS = new Set;
        return "Left" !== gS && "Right" !== gS || HS.forEach(((HS, gS) => {
          tS[gS] && Kg(SS.top, SS.bottom, HS.top, HS.bottom) <= 0 && bS.add(gS)
        })), bS
      },
      wg = (SS, HS, gS, tS, bS, XS) => {
        const xS = jg(SS, HS[bS], gS).forwardGap;
        let NS = bS,
          qS = tS[bS],
          uS = 1 / 0;
        return HS.forEach(((HS, IS) => {
          const fS = tS[IS];
          if (XS.has(IS) || fS < qS || fS === qS && NS === bS) return;
          const kS = jg(SS, HS, gS);
          if (!Gg(kS) || kS.forwardGap < 0 || kS.forwardGap >= xS) return;
          const aS = Cg(kS);
          (fS > qS || aS < uS) && (NS = IS, qS = fS, uS = aS)
        })), NS
      },
      hg = (SS, HS, gS, tS) => {
        let bS = -1,
          XS = 1 / 0;
        if (HS.forEach(((HS, xS) => {
            const NS = ((SS, HS, gS) => {
              const tS = jg(SS, HS, gS);
              if (!Gg(tS)) return null;
              const bS = Math.max(0, tS.forwardGap);
              return tS.sidewaysOverlap <= 0 && tS.sidewaysGap > 2 * (bS + 1) ? null : Cg(tS)
            })(SS, HS, gS);
            null !== NS && NS < XS && !tS.has(xS) && (XS = NS, bS = xS)
          })), bS < 0) return -1;
        const xS = HS[bS],
          NS = jg(SS, xS, gS).forwardGap;
        let qS = NS,
          uS = bS;
        return HS.forEach(((HS, XS) => {
          if (XS === bS || tS.has(XS) || !((SS, HS, gS) => {
              const tS = "Left" === gS || "Right" === gS,
                bS = tS ? Kg(SS.top, SS.bottom, HS.top, HS.bottom) : Kg(SS.left, SS.right, HS.left, HS.right),
                XS = tS ? Math.min(SS.bottom - SS.top, HS.bottom - HS.top) : Math.min(SS.right - SS.left, HS.right - HS.left);
              return bS > 0 && bS >= XS / 2
            })(HS, xS, gS)) return;
          const IS = jg(SS, HS, gS);
          Gg(IS) && IS.forwardGap + IS.toLength <= NS + 1 && IS.forwardGap < qS && (qS = IS.forwardGap, uS = XS)
        })), uS
      },
      Zg = (SS, HS) => {
        let gS = -1,
          tS = 1 / 0;
        return HS.forEach(((HS, bS) => {
          const XS = Math.max(HS.left - SS.x, 0, SS.x - HS.right),
            xS = Math.max(HS.top - SS.y, 0, SS.y - HS.bottom),
            NS = Math.hypot(XS, xS);
          NS < tS && (tS = NS, gS = bS)
        })), gS
      },
      Jg = (SS, HS) => {
        const gS = Math.min(SS.bottom - SS.top, HS.bottom - HS.top) / 2;
        return Math.abs(SS.top - HS.top) > gS ? SS.top - HS.top : SS.left - HS.left
      },
      Og = SS => {
        let HS = -1;
        for (let gS = 0; gS < SS.length; gS++)(HS < 0 || Jg(SS[gS], SS[HS]) < 0) && (HS = gS);
        return HS
      };
    var dg = gS(1783),
      cg = gS(8910),
      vg = gS(8912);
    const Eg = SS => {
        if ("death" !== SS || "inGame" !== qS.b.get("gameState") || "off" === (0, kS.f)().quickChat || null === (0, dg.e)()) return !1;
        const HS = (0, IS.h)("chat");
        return HS !== (0, IS.h)("menuConfirm") && HS !== (0, IS.h)("menuBack")
      },
      Lg = new cg.b;
    var Yg = gS(4408),
      Ag = gS(8920);
    const yg = SS => {
        let HS = null;
        for (const gS of SS.querySelectorAll("[data-pad-tabs]"))(0, eS.u)(gS) && (!HS || Number(gS.dataset.padTabs) < Number(HS.dataset.padTabs)) && (HS = gS);
        return HS
      },
      Vg = (SS, HS, gS, tS) => {
        SS.focusWhenFound((() => {
          const bS = SS.pickInitial(HS);
          if (bS && !gS.has(bS) && (null === tS || void 0 === tS || !tS.contains(bS))) return bS;
          const XS = ((SS, HS) => {
              const gS = HS => SS.getEnabledCandidates(HS).filter((SS => !SS.closest("[data-pad-tabs]")));
              for (const tS of (0, eS.l)(HS)) {
                const SS = gS(tS);
                if (SS.length > 0) return SS
              }
              return gS(HS)
            })(SS, HS).filter((SS => !gS.has(SS))),
            xS = Og(XS.map((SS => SS.getBoundingClientRect())));
          return xS >= 0 ? XS[xS] : null
        }), 3e3)
      },
      ig = (SS, HS, gS, tS) => {
        var bS;
        const XS = ((SS, HS) => {
          if (0 === SS.length) return null;
          const gS = SS.findIndex((SS => "true" === SS.dataset.padSelected));
          return gS < 0 ? HS > 0 ? SS[0] : SS[SS.length - 1] : SS[(gS + HS + SS.length) % SS.length]
        })([...gS.querySelectorAll("[data-pad-tab]")].filter((SS => (0, eS.u)(SS) && !(0, eS.y)(SS))), tS);
        if (!XS) return;
        const xS = null !== (bS = null === SS || void 0 === SS ? void 0 : SS.getFocused()) && void 0 !== bS ? bS : null,
          NS = !(null === xS || void 0 === xS || !xS.isConnected) && gS.contains(xS),
          qS = SS && !NS ? new Set(SS.getEnabledCandidates(HS)) : null;
        (0, MS.c)(XS), SS && (qS ? Vg(SS, HS, qS, gS) : SS.setFocus(XS, {
          byUser: !0
        }))
      },
      Wg = SS => {
        var HS;
        const gS = AS(null !== (HS = dS(SS, "x")) && void 0 !== HS ? HS : SS),
          tS = (0, eS.h)(SS).filter((SS => !(0, eS.y)(SS))),
          bS = tS.filter((SS => yS(SS.getBoundingClientRect(), gS)));
        return (bS.length > 0 ? bS : tS).sort(((SS, HS) => Jg(SS.getBoundingClientRect(), HS.getBoundingClientRect())))
      },
      zg = (SS, HS, gS) => {
        const tS = [...HS.querySelectorAll("[data-pad-row]")].filter(eS.u),
          bS = SS.getFocused(),
          XS = bS ? tS.findIndex((SS => SS.contains(bS))) : -1;
        let xS = 0,
          NS = gS > 0 ? 0 : tS.length - 1;
        if (XS >= 0 && bS) xS = Math.max(0, Wg(tS[XS]).indexOf(bS)), NS = XS + gS;
        else if (bS) {
          const SS = bS.getBoundingClientRect(),
            HS = tS.map((HS => {
              const tS = HS.getBoundingClientRect();
              return gS > 0 ? tS.top >= SS.top : tS.bottom <= SS.bottom
            }));
          NS = gS > 0 ? HS.indexOf(!0) : HS.lastIndexOf(!0)
        }
        for (let qS = NS; qS >= 0 && qS < tS.length; qS += gS) {
          const HS = Wg(tS[qS]);
          if (HS.length > 0) return void SS.setFocus(HS[Math.min(xS, HS.length - 1)], {
            byUser: !0
          })
        }
      },
      Ug = (SS, HS, gS) => {
        var tS, bS;
        const XS = null !== (tS = null === SS || void 0 === SS ? void 0 : SS.getFocused()) && void 0 !== tS ? tS : null,
          xS = null !== XS && void 0 !== XS && XS.closest("[data-pad-row]") ? "x" : "y",
          NS = null !== (bS = XS ? dS(XS, xS, HS) : null) && void 0 !== bS ? bS : vS(HS, xS);
        if (!NS) return;
        const qS = XS ? (0, MS.x)(XS) : null;
        if (YS(NS, xS, gS * ("y" === xS ? NS.clientHeight : NS.clientWidth) * .85), !SS || !qS) return;
        const uS = AS(NS),
          IS = SS.getEnabledCandidates(HS).filter((SS => NS.contains(SS) && yS(SS.getBoundingClientRect(), uS))),
          fS = Zg(qS, IS.map((SS => SS.getBoundingClientRect())));
        fS >= 0 && SS.setFocus(IS[fS], {
          scroll: !1,
          byUser: !0
        })
      };
    let pg = null;
    const sg = (SS, HS) => {
        var gS, tS;
        const bS = HS.querySelector("[data-pad-friends-column]"),
          XS = SS.getFocused();
        if (!bS || !XS || !bS.contains(XS)) return !1;
        const xS = SS.getEnabledCandidates(HS).filter((SS => !bS.contains(SS))),
          NS = Zg((0, MS.x)(XS), xS.map((SS => SS.getBoundingClientRect()))),
          qS = null === (gS = pg) || void 0 === gS ? void 0 : gS.deref();
        return SS.setFocus(null !== qS && void 0 !== qS && qS.isConnected ? qS : null !== (tS = xS[NS]) && void 0 !== tS ? tS : null, {
          byUser: !0
        }), !0
      },
      Bg = SS => {
        const HS = (0, IS.h)(SS);
        return (0, KS.H)(HS) || ug.v.some((SS => (0, IS.h)(SS) === HS)) ? null : HS
      },
      Mg = (SS, HS) => {
        const gS = Bg(HS);
        return null !== gS && SS.wasPressed(gS)
      },
      Fg = function(SS, HS, gS) {
        let tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const bS = (SS => {
            var HS, gS;
            return null !== (HS = null === (gS = yg(SS)) || void 0 === gS ? void 0 : gS.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== HS ? HS : null
          })(HS),
          XS = SS && bS ? new Set(SS.getEnabledCandidates(HS)) : null;
        (0, xg.d)(), gS === Ng.q.SETTINGS && (0, qg.j)(qS.b.get("openEverythingMenuName")) ? qS.b.set({
          openEverythingMenuName: gS
        }) : (0, qg.r)(new Event("padMenuShortcut"), gS, tS), SS && XS && bS && Vg(SS, HS, XS, bS.closest("[data-pad-tabs]"))
      },
      Rg = SS => null !== SS.closest(".Dropdown-root") || null !== SS.querySelector(".Dropdown-root.is-open"),
      Tg = SS => null !== (0, Ag.b)() && "popup" !== SS.layer.kind && !yg(SS.root) && !Rg(SS.root),
      og = (0, jS.d)(KS.ab),
      lg = (0, jS.d)(KS.ab),
      mg = (SS, HS, gS) => {
        if (((SS, HS) => {
            const gS = (0, IS.h)("chat");
            return Eg(HS) && SS.isHeld(gS) ? "hold" === Lg.update(SS.wasPressed(gS), SS.isHeld(gS), performance.now(), GS.e[(0, kS.f)().tapHoldTime].wheelMs) && (fS.e.consumeButton(gS), uS.k.cj(vg.k), !0) : (Lg.release(), !1)
          })(HS, gS.layer.kind)) return !0;
        const tS = gS.root;
        for (const [xS, NS] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (HS.wasPressed((0, IS.h)(xS))) {
            const HS = Rg(tS) ? null : yg(tS);
            if (HS) ig(SS, tS, HS, NS);
            else if (Tg(gS)) {
              var bS;
              const HS = SS ? new Set(SS.getEnabledCandidates(tS)) : null;
              null !== (bS = (0, Ag.b)()) && void 0 !== bS && bS(NS) && SS && HS && Vg(SS, tS, HS, null)
            } else SS && zg(SS, tS, NS);
            return !0
          } for (const [xS, NS, qS] of [
            ["menuPageUp", -1, og],
            ["menuPageDown", 1, lg]
          ]) {
          const gS = (0, IS.h)(xS);
          if (HS.wasPressed(gS) && qS.reset(), qS.update(HS.isHeld(gS), performance.now())) return Ug(SS, tS, NS), !0
        }
        const XS = "popup" === gS.layer.kind;
        return Mg(HS, "pause") ? (XS || (0, qg.m)() && "menu" !== gS.layer.kind || Fg(SS, tS, (0, qg.m)() ? Ng.q.SETTINGS : (0, Yg.e)()), !0) : !!Mg(HS, "leaderboard") && ("home" === gS.layer.kind ? (SS => {
          const HS = [...SS.querySelectorAll("[data-pad-notifications]")].find(eS.u);
          HS && (0, MS.c)(HS)
        })(tS) : XS || Fg(SS, tS, Ng.q.LOBBY_LEADERBOARD, "inGame" === qS.b.get("gameState")), !0)
      },
      eg = (SS, HS, gS) => {
        if (mg(SS, HS, gS)) return !0;
        const tS = "home" === gS.layer.kind;
        if (HS.wasPressed((0, IS.h)("menuSecondary"))) {
          const HS = SS.getFocused(),
            bS = HS ? kg(HS) : null;
          if (bS) return (0, MS.c)(bS), !0;
          if (tS) {
            const HS = gS.root.querySelector("[data-pad-search] input");
            return HS && (0, eS.x)(HS, gS.root) ? (SS.setFocus(HS, {
              byUser: !0
            }), (0, MS.c)(HS)) : qS.b.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!tS || !Mg(HS, "inventory")) && (((SS, HS) => {
          var gS, tS;
          const bS = HS.querySelector("[data-pad-friends-column]");
          if (!bS || !(0, eS.u)(bS)) return void(0, qg.r)(new Event("padMenuShortcut"), Ng.q.SOCIAL);
          if (sg(SS, HS)) return;
          const XS = null !== (gS = null === (tS = bS.querySelector("[data-pad-friends-start]")) || void 0 === tS ? void 0 : tS.getBoundingClientRect().top) && void 0 !== gS ? gS : -1 / 0,
            xS = SS.getEnabledCandidates(bS),
            NS = xS.filter((SS => SS.getBoundingClientRect().top >= XS)),
            qS = NS.length > 0 ? NS : xS,
            uS = Og(qS.map((SS => SS.getBoundingClientRect())));
          SS.setFocus(uS >= 0 ? qS[uS] : null, {
            byUser: !0
          })
        })(SS, gS.root), !0)
      },
      rg = SS => {
        var HS, gS, tS;
        const bS = (0, MS.A)(SS);
        if (null !== bS) return bS;
        const XS = (null !== (HS = null !== (gS = null !== (tS = SS.getAttribute("aria-label")) && void 0 !== tS ? tS : SS.getAttribute("title")) && void 0 !== gS ? gS : SS.textContent) && void 0 !== HS ? HS : "").replace(/\s+/g, " ").trim();
        return XS ? `${SS.tagName}:${XS.slice(0,100)}` : null
      };
    class St {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(SS) {
        const HS = this.history.indexOf(SS);
        if (HS >= 0) {
          for (const SS of this.history.splice(HS + 1)) this.remembered.delete(SS);
          return !0
        }
        return this.remembered.delete(SS), this.history.push(SS), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(SS) {
        this.remembered.delete(SS);
        const HS = this.history.indexOf(SS);
        HS >= 0 && this.history.splice(HS, 1)
      }
      remember(SS, HS, gS, tS) {
        const bS = rg(HS),
          XS = (0, MS.A)(HS),
          xS = null !== XS && ((SS, HS) => {
            let gS = 0;
            for (const tS of SS.querySelectorAll("[data-pad-key], [href]"))
              if ((tS.getAttribute("data-pad-key") === HS || tS.getAttribute("href") === HS) && (gS++, gS > 1)) return !0;
            return !1
          })(gS, XS) ? Math.max(0, this.twins(tS(), XS).indexOf(HS)) : 0;
        this.remembered.set(SS, {
          element: new WeakRef(HS),
          identity: bS,
          ordinal: xS
        })
      }
      has(SS) {
        return this.remembered.has(SS)
      }
      recall(SS, HS) {
        var gS, tS;
        const bS = this.remembered.get(SS);
        if (!bS) return null;
        const XS = bS.element.deref();
        if (XS && HS.includes(XS)) return XS;
        if (null === bS.identity) return null;
        const xS = this.twins(HS, bS.identity);
        return null !== (gS = null !== (tS = xS[bS.ordinal]) && void 0 !== tS ? tS : xS[0]) && void 0 !== gS ? gS : null
      }
      twins(SS, HS) {
        return SS.filter((SS => rg(SS) === HS))
      }
    }
    var Ht = gS(1359);
    const gt = SS => {
        const HS = [];
        let gS = SS;
        for (; gS && gS !== document.body;) {
          const SS = getComputedStyle(gS).zIndex;
          "auto" !== SS && HS.push(Number(SS) || 0), gS = gS.parentElement
        }
        return HS.reverse()
      },
      tt = (SS, HS) => {
        const gS = ((SS, HS) => {
          const gS = Math.max(SS.length, HS.length);
          for (let XS = 0; XS < gS; XS++) {
            var tS, bS;
            const gS = (null !== (tS = SS[XS]) && void 0 !== tS ? tS : 0) - (null !== (bS = HS[XS]) && void 0 !== bS ? bS : 0);
            if (0 !== gS) return gS
          }
          return 0
        })(gt(SS), gt(HS));
        if (0 !== gS) return gS > 0;
        if (SS.contains(HS)) return !1;
        if (HS.contains(SS)) return !0;
        const tS = SS.compareDocumentPosition(HS);
        return !!(tS & Node.DOCUMENT_POSITION_PRECEDING) || !(tS & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      bt = (SS, HS) => {
        var gS;
        return null !== (gS = tt(SS.root, HS.root)) && void 0 !== gS ? gS : SS.order > HS.order
      },
      Xt = (SS, HS) => HS.some((HS => !HS.contains(SS) && !SS.contains(HS) && !0 === tt(HS, SS)));
    let xt = null,
      Nt = null,
      qt = -1;
    const ut = () => {
        var SS;
        const HS = null === (SS = document.timeline) || void 0 === SS ? void 0 : SS.currentTime,
          gS = "number" === typeof HS ? HS : null;
        if (null !== gS && gS === Nt && qt === (0, Ht.e)()) return xt;
        let tS = null;
        const bS = [],
          XS = [...document.querySelectorAll("[data-pad-covers]")].filter(eS.u);
        for (const xS of (0, Ht.f)()) {
          const SS = xS.getRoot(),
            HS = !!SS && (0, eS.u)(SS) && !Xt(SS, XS);
          if (xS.shown && !HS && bS.push(xS), xS.shown = HS, !SS || !HS) continue;
          const gS = {
            layer: xS,
            root: SS,
            order: xS.order
          };
          tS && !bt(gS, tS) || (tS = gS)
        }
        xt = tS, Nt = gS, qt = (0, Ht.e)();
        for (const xS of bS)(0, Ht.i)(xS);
        return xt
      },
      It = () => {
        const SS = ut();
        return !(null === SS || void 0 === SS || !SS.layer.close) && (SS.layer.close(), Nt = null, !0)
      },
      ft = () => {
        var SS, HS;
        return null !== (SS = null === (HS = ut()) || void 0 === HS ? void 0 : HS.root) && void 0 !== SS ? SS : null
      },
      kt = SS => SS ? {
        ...SS,
        root: ft()
      } : null;
    let Kt = null,
      jt = null,
      Gt = (0, kS.f)().menuNavigation,
      Ct = null;
    const nt = new DS;
    let Pt = null;
    uS.k.subscribe(kS.e, (() => {
      const SS = (0, kS.f)().menuNavigation;
      SS !== Gt && (Gt = SS, Kt = null, jt = null)
    }));
    const Qt = () => {
        var SS;
        return null !== (SS = Kt) && void 0 !== SS ? SS : (0, kS.f)().menuNavigation
      },
      Dt = SS => {
        if (Jt()) {
          if (Ct = kt(SS), "hybrid" === Qt()) return nt.lock(), void(jt = jt ? null : ft());
          Kt = "focus" === Qt() ? "cursor" : "focus"
        }
      },
      wt = () => {
        const SS = Ct;
        return Ct = null, SS
      };
    let ht = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const Zt = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const gS = ht.root === SS,
          tS = gS ? ht.firstSeenMs : HS,
          bS = ht.has || HS - tS > 1e3;
        return (!gS || !bS || HS - ht.atMs > 250) && (ht = {
          root: SS,
          firstSeenMs: tS,
          atMs: HS,
          has: (0, eS.p)(SS)
        }), ht.has
      },
      Jt = () => {
        const SS = ft();
        return null !== SS && Zt(SS)
      },
      Ot = () => {
        const SS = ut();
        return jt && (null === SS || void 0 === SS ? void 0 : SS.root) !== jt && (jt = null), (SS => {
          let {
            mode: HS,
            hasLayer: gS,
            hasCandidates: tS,
            hybridCursorEngaged: bS
          } = SS;
          return gS ? "cursor" !== HS && tS() ? "hybrid" === HS && bS ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Qt(),
          hasLayer: null !== SS,
          hasCandidates: () => null !== SS && Zt(SS.root),
          hybridCursorEngaged: null !== jt
        })
      },
      dt = () => "hybrid" === Qt() && Jt(),
      ct = "pad-focused";
    var vt = gS(4684),
      Et = gS(5191);
    const Lt = "[data-pad-destructive]",
      Yt = `${Lt}, [data-pad-back]`,
      At = SS => ({
        rect: SS.getBoundingClientRect(),
        destructive: SS.matches(Lt),
        closes: null !== SS.closest("[data-pad-close-button]"),
        unavailable: SS.matches("[data-pad-unavailable]")
      }),
      yt = SS => {
        let {
          destructive: HS,
          closes: gS,
          unavailable: tS
        } = SS;
        return HS ? gS ? 2 : 3 : tS ? 1 : 0
      },
      Vt = SS => {
        let HS = -1;
        for (let gS = 0; gS < SS.length; gS++) {
          if (HS < 0) {
            HS = gS;
            continue
          }
          const tS = SS[gS],
            bS = SS[HS];
          yt(tS) === yt(bS) ? Jg(tS.rect, bS.rect) < 0 && (HS = gS) : yt(tS) < yt(bS) && (HS = gS)
        }
        return HS
      },
      it = "[data-pad-tabs]",
      Wt = "[data-pad-tab]",
      zt = (SS, HS) => {
        const gS = SS.querySelector(`${Wt}[data-pad-selected='true']`);
        return gS && HS.includes(gS) ? gS : null
      },
      Ut = (SS, HS) => {
        let gS = HS;
        for (let tS = HS.parentElement; tS && !tS.contains(SS); tS = tS.parentElement) gS = tS;
        return gS
      };
    class pt {
      constructor() {
        this.contentReturn = null
      }
      redirect(SS, HS, gS, tS) {
        var bS, XS;
        const xS = SS.closest(it),
          NS = HS.closest(it);
        var qS;
        if (NS && NS !== xS) return xS || (this.contentReturn = new WeakRef(SS)), null !== (qS = zt(NS, gS)) && void 0 !== qS ? qS : HS;
        if (!xS || NS) return HS;
        const uS = Ut(SS, HS),
          IS = null === (bS = this.contentReturn) || void 0 === bS ? void 0 : bS.deref();
        return IS && uS.contains(IS) && gS.includes(IS) ? IS : null !== (XS = this.pickRegionStart(uS, dS(HS, "y", tS), gS)) && void 0 !== XS ? XS : HS
      }
      findTabContent(SS, HS, gS) {
        const tS = SS.closest(it);
        if (!tS || !SS.matches(Wt) || tS.contains(HS)) return null;
        const bS = HS.closest(it);
        if (bS && Number(bS.dataset.padTabs) <= Number(tS.dataset.padTabs)) return null;
        const XS = Ut(SS, HS);
        return gS.some((SS => XS.contains(SS) && !SS.closest(Yt))) || !HS.closest(Yt) ? XS : null
      }
      pickContentStart(SS, HS, gS) {
        return this.contentReturn = null, this.pickRegionStart(SS, dS(SS, "y", gS), HS)
      }
      pickReplacedContentStart(SS, HS, gS, tS) {
        if (!HS.contains(SS)) return null;
        const bS = Ut(HS, SS),
          XS = gS.filter((SS => HS.contains(SS) && !bS.contains(SS) && !SS.closest(Yt)));
        return 0 === XS.length ? null : (this.contentReturn = null, this.pickRegionStart(HS, dS(XS[0], "y", tS), XS))
      }
      backToStrip(SS, HS, gS) {
        if (SS.closest(it)) return null;
        const tS = yg(gS);
        for (const bS of gS.querySelectorAll(it)) {
          if (Number(bS.dataset.padTabs) <= 1 || bS === tS) continue;
          const XS = zt(bS, HS),
            xS = XS ? Ut(SS, bS).parentElement : null;
          if (XS && xS && xS !== gS && gS.contains(xS)) return this.contentReturn = new WeakRef(SS), XS
        }
        return null
      }
      pickRegionStart(SS, HS, gS) {
        const tS = AS(HS),
          bS = SS => {
            const HS = gS.filter((HS => SS.contains(HS) && !HS.closest(it) && yS(HS.getBoundingClientRect(), tS))),
              bS = Vt(HS.map(At));
            return bS >= 0 ? HS[bS] : null
          };
        for (const XS of (0, eS.l)(SS)) {
          const SS = bS(XS);
          if (SS) return SS
        }
        for (const XS of SS.querySelectorAll(it)) {
          const SS = zt(XS, gS);
          if (SS) return SS
        }
        return bS(SS)
      }
    }
    const st = "[data-pad-default-focus], .Dropdown-option.is-selected",
      Bt = ".Dropdown-root.is-open > .Dropdown-menu",
      Mt = "[data-pad-no-step-in]",
      Ft = "[data-pad-tabs]",
      Rt = "[data-pad-press-area]",
      Tt = SS => {
        let HS = SS;
        for (let gS = 0; HS && gS <= 4; gS++, HS = HS.parentElement) {
          const gS = HS.querySelector(".CircleInfo");
          if (gS) return HS === SS || HS.querySelectorAll(eS.d).length <= 1 ? gS : null;
          if (HS !== SS && HS.querySelectorAll(eS.d).length > 1) return null
        }
        return null
      },
      ot = (SS, HS, gS) => {
        (0, MS.k)(SS, HS, gS);
        const tS = null !== SS && void 0 !== SS && SS.isConnected ? Tt(SS) : null,
          bS = Tt(HS);
        tS !== bS && (0, MS.k)(tS, bS, bS ? (0, MS.x)(bS) : gS, {
          leaveBelow: SS,
          enterBelow: HS
        })
      },
      lt = SS => SS.getBoundingClientRect(),
      mt = (SS, HS, gS) => {
        const tS = new Set(gS);
        for (let bS = SS; bS; bS = bS === HS ? null : bS.parentElement)
          if (tS.has(bS)) return bS;
        return null
      },
      et = (SS, HS) => !SS.root || SS.root === HS || HS.matches(Bt) && SS.root.contains(HS);
    const rt = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new St, this.tabStripNav = new pt, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, jS.d)(KS.r), this.dpadRepeats = new Map(KS.A.map((SS => [SS, (0, jS.d)(KS.E)]))), this.stickRepeat = new KS.b((0, jS.d)(KS.cb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const SS = fS.e.register({
            name: "focus",
            isActive: () => (0, aS.m)() && "focus" === Ot(),
            onFrame: SS => {
              this.onFrame(SS)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: SS => (0, fS.h)(SS) || SS === (0, IS.h)("menuConfirm") && (0, MS.G)((0, aS.d)())
          }),
          HS = (0, Ht.j)((SS => {
            const HS = (0, Ht.o)(SS);
            null === SS.memoryKey && this.memory.forget(HS), HS === this.layerKey && (this.layerKey = null)
          }));
        let gS = -1 / 0;
        const tS = xS.g.onFrame((SS => {
            (0, aS.m)() || SS.timestampMs - gS < 100 || (gS = SS.timestampMs, ut())
          })),
          bS = SS => {
            SS.isTrusted && SS.target instanceof Element && xS.g.getActivePad() && this.noteChosenStop(SS.target)
          };
        return document.addEventListener("click", bS, !0), () => {
          SS(), HS(), tS(), document.removeEventListener("click", bS, !0), this.deactivate()
        }
      }
      noteChosenStop(SS) {
        var HS, gS;
        const tS = ut();
        if (!tS || !tS.root.contains(SS)) return;
        const bS = null !== (HS = null === (gS = SS.closest(".Dropdown-root")) || void 0 === gS ? void 0 : gS.querySelector(".Dropdown-control")) && void 0 !== HS ? HS : SS,
          XS = mt(bS, tS.root, this.getEnabledCandidates(tS.root));
        if (!XS) return;
        const xS = (0, Ht.o)(tS.layer);
        xS === this.layerKey && tS.root === this.layerRoot || this.beginLayer(tS, xS), this.wasActive ? this.setFocus(XS, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = XS, this.lastFocusedCentre = (0, MS.x)(XS), this.rememberFocus(XS), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      notify() {
        for (const SS of this.listeners) SS()
      }
      deactivate() {
        var SS;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const SS of this.dpadRepeats.values()) SS.reset();
          this.stickRepeat.reset(), null !== (SS = this.focused) && void 0 !== SS && SS.isConnected && ot(this.focused, null, (0, MS.x)(this.focused)), this.notify()
        }
      }
      setFocus(SS) {
        var HS;
        let {
          scroll: gS = !0,
          byUser: tS = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (tS && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), SS === this.focused) return;
        const bS = null !== (HS = this.focused) && void 0 !== HS && HS.isConnected ? this.focused : null;
        if (this.focused = SS, SS) {
          gS && (SS.classList.add(ct), SS.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), tS && ((SS, HS) => {
            const gS = HS.closest("[data-pad-friends-column]");
            gS && SS && !gS.contains(SS) && (pg = new WeakRef(SS))
          })(bS, SS);
          const HS = (0, MS.x)(SS);
          this.lastFocusedCentre = HS, this.movedInLayer && this.rememberFocus(SS), ot(bS, SS, HS), "false" === SS.getAttribute("aria-pressed") && SS.closest("[data-pad-select-on-focus]") && (0, MS.c)(SS)
        } else bS && ot(bS, null, (0, MS.x)(bS));
        this.notify()
      }
      rememberFocus(SS) {
        const HS = this.layerRoot;
        this.layerKey && HS && this.memory.remember(this.layerKey, SS, HS, (() => this.getEnabledCandidates(HS)))
      }
      noteCursorActivation(SS) {
        const HS = ut();
        if (!HS || !HS.root.contains(SS)) return;
        const gS = this.getEnabledCandidates(HS.root),
          tS = new Set(gS);
        let bS = SS;
        for (; bS && !tS.has(bS);) bS = bS === HS.root ? null : bS.parentElement;
        if (!(bS instanceof HTMLElement)) return;
        const XS = (0, Ht.o)(HS.layer);
        this.memory.enter(XS), this.memory.remember(XS, bS, HS.root, (() => gS))
      }
      notePageEnteredByCursor(SS) {
        return this.memory.enter(SS)
      }
      recallStop(SS, HS) {
        return this.findRemembered(SS, HS)
      }
      focusWhenFound(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: SS,
          untilMs: performance.now() + HS,
          holdWhile: gS
        }
      }
      getEnabledCandidates(SS) {
        return (0, eS.h)(SS).filter((SS => !(0, eS.y)(SS)))
      }
      onFrame(SS) {
        var HS;
        const gS = ut();
        if (!gS) return;
        const tS = null !== (HS = this.findOpenDropdown(gS)) && void 0 !== HS ? HS : gS,
          bS = performance.now(),
          XS = (0, Ht.o)(tS.layer);
        if (XS !== this.layerKey || tS.root !== this.layerRoot) {
          const HS = this.focused;
          if (null !== this.layerKey && tS.root === this.layerRoot && HS && (0, eS.x)(HS, tS.root)) this.continueLayer(XS, HS), this.wasActive || this.resume(tS.root, bS);
          else {
            const HS = !this.wasActive && !SS.wokeDevice,
              xS = "death" === this.layerKind || HS,
              NS = this.enterLayer(tS, XS);
            "popup" !== tS.layer.kind || tS !== gS || NS ? "menu" === tS.layer.kind && xS && "inGame" === qS.b.get("gameState") && !(0, xg.h)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = bS + vt.d) : (this.pressGuardExtends = HS, this.pressGuardUntilMs = bS + (HS ? vt.d : xS ? 500 : 250))
          }
        } else this.wasActive || this.resume(tS.root, bS);
        if (this.layerKind = tS.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), SS.wokeDevice && this.focusPointedStop(tS.root), this.validateFocus(tS, bS), bS < this.pressGuardUntilMs && this.pressGuardExtends && (SS.wasPressed((0, IS.h)("menuConfirm")) || SS.wasPressed((0, IS.h)("menuBack"))) && (this.pressGuardUntilMs = bS + vt.d), bS >= this.pressGuardUntilMs && this.handleButtons(SS, tS)) return;
        const xS = "hybrid" === Qt();
        if (xS && (SS => {
            const HS = ft();
            return HS !== Pt && (Pt = HS, nt.lock()), nt.update(SS, (0, kS.f)().moveDeadzone)
          })(SS.leftStick)) return NS = this.getHandoff(), Ct = kt(NS), jt = ft(), void fS.e.handOffHeldInput();
        var NS;
        this.handleDirections(SS, tS, bS, !xS), this.handleScroll(SS, tS)
      }
      findOpenDropdown(SS) {
        const HS = SS.root.querySelector(Bt);
        if (!HS || !(0, eS.u)(HS)) return null;
        let gS = this.dropdownLayers.get(HS);
        return gS || (this.dropdownLayerCounter++, gS = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: SS.layer.kind,
          getRoot: () => HS,
          close: () => {
            (0, MS.g)(HS)
          },
          memoryKey: null
        }, this.dropdownLayers.set(HS, gS)), {
          layer: gS,
          root: HS,
          order: SS.order
        }
      }
      focusPointedStop(SS) {
        const HS = (0, aS.d)(),
          gS = HS ? document.elementFromPoint(HS.x, HS.y) : null;
        if (!gS || !SS.contains(gS)) return;
        const tS = mt(gS, SS, this.getEnabledCandidates(SS));
        tS && this.setFocus(tS, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(SS, HS) {
        const gS = this.beginLayer(SS, HS),
          tS = wt();
        return tS && et(tS, SS.root) ? (this.takeOver(SS.root, tS, this.enteredLayerAtMs), gS) : (this.restoreLayerFocus(SS.root, gS), gS)
      }
      beginLayer(SS, HS) {
        return this.layerKey = HS, this.layerRoot = SS.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(HS)
      }
      restoreLayerFocus(SS, HS) {
        const gS = HS && this.layerKey ? this.findRemembered(SS, this.layerKey) : null;
        this.restoredFromMemory = null !== gS, this.setFocus(null !== gS && void 0 !== gS ? gS : this.pickInitial(SS, {
          waitForContent: !0
        }))
      }
      continueLayer(SS, HS) {
        this.layerKey = SS;
        const gS = this.memory.enter(SS);
        this.restoreOnFocusLoss = gS, this.movedInLayer && !gS && this.rememberFocus(HS)
      }
      resume(SS, HS) {
        var gS;
        const tS = wt();
        tS && et(tS, SS) ? this.takeOver(SS, tS, HS) : null !== (gS = this.focused) && void 0 !== gS && gS.isConnected && ot(null, this.focused, (0, MS.x)(this.focused))
      }
      pickPreferred(SS) {
        var HS;
        return null !== (HS = this.layerKey ? this.findRemembered(SS, this.layerKey) : null) && void 0 !== HS ? HS : this.pickInitial(SS, {
          waitForContent: !0
        })
      }
      findRemembered(SS, HS) {
        return this.memory.has(HS) ? this.memory.recall(HS, this.getEnabledCandidates(SS)) : null
      }
      getHandoff() {
        var SS, HS, gS;
        const tS = null !== (SS = this.focused) && void 0 !== SS && SS.isConnected ? this.focused : null,
          bS = null !== (HS = this.layerRoot) && void 0 !== HS && HS.isConnected ? this.layerRoot : null;
        return {
          point: tS ? (0, MS.x)(tS) : null !== (gS = this.lastFocusedCentre) && void 0 !== gS ? gS : this.getLayerStartPoint(bS),
          element: tS,
          direction: null
        }
      }
      getLayerStartPoint(SS) {
        if (!SS) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const HS = this.pickInitial(SS, {
          includeDisabled: !0
        });
        return (0, MS.x)(null !== HS && void 0 !== HS ? HS : SS)
      }
      takeOver(SS, HS, gS) {
        const {
          element: tS,
          direction: bS,
          point: XS
        } = HS, xS = tS instanceof HTMLElement && (0, eS.x)(tS, SS) ? tS : null;
        if (!bS) {
          const HS = this.focused;
          return xS ? this.setFocus(xS, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(SS, XS), void(this.focused && this.focused === HS && this.focused.isConnected && ot(null, this.focused, (0, MS.x)(this.focused)))
        }
        if (this.dpadRepeats.get(bS).update(!0, gS), xS) return this.setFocus(xS, {
          scroll: !1,
          byUser: !0
        }), void this.move(SS, bS, gS, !0);
        const NS = this.getEnabledCandidates(SS),
          qS = NS.map(lt),
          uS = Pg(new DOMRect(XS.x, XS.y, 0, 0), qS, bS),
          IS = uS >= 0 ? uS : Zg(XS, qS);
        this.setFocus(IS >= 0 ? NS[IS] : this.pickInitial(SS), {
          byUser: !0
        })
      }
      focusNearest(SS, HS) {
        const gS = this.getEnabledCandidates(SS),
          tS = Zg(HS, gS.map(lt));
        this.setFocus(tS >= 0 ? gS[tS] : this.pickInitial(SS), {
          byUser: !0
        })
      }
      pickDefault(SS) {
        let {
          includeDisabled: HS = !1,
          exclude: gS = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const tS = [...SS.querySelectorAll(st)].filter((tS => (null === gS || void 0 === gS || !gS.has(tS)) && (HS ? (0, eS.B)(tS, SS) : (0, eS.x)(tS, SS)))),
          bS = Vt(tS.map(At));
        return bS >= 0 ? tS[bS] : null
      }
      pickNewAreaStart(SS, HS) {
        const gS = [...SS.querySelectorAll(Rt)].filter(eS.u);
        for (const tS of [...(0, eS.l)(SS), ...gS]) {
          if (HS.has(tS)) continue;
          const SS = this.getEnabledCandidates(tS),
            gS = Vt(SS.map(At));
          if (gS >= 0) return SS[gS]
        }
        return null
      }
      pickInitial(SS) {
        let {
          includeDisabled: HS = !1,
          waitForContent: gS = !1,
          enteredAtMs: tS = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const bS = this.pickDefault(SS, {
          includeDisabled: HS
        });
        if (bS) return bS;
        const XS = SS => HS ? (0, eS.h)(SS) : this.getEnabledCandidates(SS);
        let xS = [];
        for (const kS of (0, eS.l)(SS))
          if (xS = XS(kS), xS.length > 0) break;
        if (0 === xS.length) {
          if (gS && performance.now() - tS < 1e4 && (0, eS.t)(SS)) return null;
          xS = XS(SS)
        }
        const NS = xS.map(lt),
          qS = AS(null),
          uS = xS.filter(((SS, HS) => yS(NS[HS], qS))),
          IS = uS.length > 0 ? uS : xS,
          fS = Vt(IS.map(At));
        return fS >= 0 ? IS[fS] : null
      }
      validateFocus(SS, HS) {
        if (this.pendingFocus) {
          var gS, tS;
          const bS = this.pendingFocus.find();
          if (bS && (0, eS.x)(bS, SS.root)) return this.pendingFocus = null, void this.setFocus(bS, {
            byUser: !0
          });
          HS > this.pendingFocus.untilMs && (null === (gS = (tS = this.pendingFocus).holdWhile) || void 0 === gS || !gS.call(tS)) && (this.pendingFocus = null)
        }
        const bS = this.focused,
          XS = !!bS && (0, eS.x)(bS, SS.root);
        if (!(!XS && bS && bS === this.lastActivated && HS - this.lastActivatedAtMs < 5e3 && SS.root.contains(bS) && (0, eS.u)(bS) && (0, eS.y)(bS))) {
          if (!XS && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = HS, void this.restoreLayerFocus(SS.root, !0);
          if ((!XS || !this.movedInLayer && !this.scrolledInLayer) && !(HS - this.lastRefocusCheckMs < (XS ? 200 : 50)))
            if (this.lastRefocusCheckMs = HS, XS) {
              const gS = HS - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(SS.root) : null,
                tS = null !== gS && void 0 !== gS ? gS : this.restoredFromMemory ? null : this.pickDefault(SS.root);
              tS && tS !== bS && this.setFocus(tS)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const HS = this.pendingFocus;
                return this.focusNearest(SS.root, this.lastFocusedCentre), void(this.pendingFocus = HS)
              }
              this.setFocus(this.pickPreferred(SS.root))
            }
        }
      }
      handleButtons(SS, HS) {
        if (SS.wasPressed((0, IS.h)("menuToggleCursor"))) return Dt(this.getHandoff()), !0;
        if (SS.wasPressed((0, IS.h)("menuBack"))) {
          const SS = (0, MS.g)(HS.root);
          return SS ? this.setFocus(SS, {
            byUser: !0
          }) : sg(this, HS.root) || ((0, MS.d)(HS.root) ? this.returnToOpener(HS.root) : this.backToStrip(HS.root) || It()), !0
        }
        const gS = (0, IS.h)("menuConfirm");
        var tS, bS;
        SS.wasPressed(gS) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (tS = null === (bS = this.focused) || void 0 === bS ? void 0 : bS.getAttribute("data-pad-repeat")) && void 0 !== tS ? tS : null, this.confirmRepeated = SS.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (SS.wasReleased(gS)) {
          const SS = this.confirmPressedOn;
          if (this.confirmPressedOn = null, SS && !this.confirmRepeated && SS === this.focused && SS.isConnected && !(0, eS.y)(SS)) {
            const gS = SS.matches("[data-pad-tab]") ? SS.closest(Ft) : null;
            gS ? this.enterTab(SS, gS, HS.root, performance.now()) : this.activate(SS)
          }
          return !0
        }
        return this.repeatConfirm(SS, gS), eg(this, SS, HS)
      }
      repeatConfirm(SS, HS) {
        const gS = this.confirmPressedOn;
        gS && null !== this.confirmRepeatKey && SS.isHeld(HS) && (gS === this.focused && gS.isConnected && !(0, eS.y)(gS) && gS.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? gS.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(gS)) : this.confirmRepeatKey = null)
      }
      backToStrip(SS) {
        const HS = this.focused;
        if (!(0, kS.f)().menuBackToCategories) return !1;
        const gS = null !== HS && void 0 !== HS && HS.isConnected ? this.tabStripNav.backToStrip(HS, this.getEnabledCandidates(SS), SS) : null;
        return gS && this.setFocus(gS, {
          byUser: !0
        }), null !== gS
      }
      returnToOpener(SS) {
        const HS = this.lastActivatedKey;
        HS && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var gS;
          return null !== (gS = this.getEnabledCandidates(SS).find((SS => (0, MS.A)(SS) === HS))) && void 0 !== gS ? gS : null
        })))
      }
      activate(SS) {
        var HS;
        if ((0, Et.e)(SS) || (0, MS.E)(SS)) return;
        this.lastActivatedKey = null !== (HS = (0, MS.A)(SS)) && void 0 !== HS ? HS : this.lastActivatedKey, this.lastActivated = SS, this.lastActivatedAtMs = performance.now(), this.rememberFocus(SS);
        const gS = this.layerRoot;
        if (gS) {
          const HS = new Set(gS.querySelectorAll(st)),
            tS = new Set(gS.querySelectorAll(`[data-pad-initial-area], ${Rt}`)),
            bS = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var bS;
            return (0, eS.x)(SS, gS) ? null : null !== (bS = this.pickDefault(gS, {
              exclude: HS
            })) && void 0 !== bS ? bS : this.pickNewAreaStart(gS, tS)
          }), 5e3, (() => SS.isConnected && (0, eS.y)(SS) && performance.now() - bS < 6e4))
        }(0, MS.c)(SS), (0, MS.e)(SS)
      }
      handleDirections(SS, HS, gS, tS) {
        const bS = Eg(HS.layer.kind) ? (0, IS.h)("chat") : null;
        for (const NS of KS.A) {
          this.dpadRepeats.get(NS).update(SS.isHeld(NS), gS) && (NS !== bS || SS.wasPressed(NS)) && this.move(HS.root, NS, gS, !0)
        }
        const XS = tS ? (0, KS.l)(SS.leftStick, (0, kS.f)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          xS = this.stickRepeat.update((0, KS.eb)(XS), gS);
        if (xS && this.move(HS.root, xS, gS, !0), this.retryMove && gS >= this.retryMove.atMs) {
          const {
            direction: SS
          } = this.retryMove;
          this.retryMove = null, this.move(HS.root, SS, gS, !1)
        }
      }
      move(SS, HS, gS, tS) {
        var bS;
        let XS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (bS = this.tabOpenWait) || void 0 === bS ? void 0 : bS.wait) && HS === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const xS = this.focused;
        if (!xS || !xS.isConnected) {
          const HS = this.pickInitial(SS);
          return void(HS && this.setFocus(HS, {
            byUser: !0
          }))
        }
        const NS = "Left" === HS || "Right" === HS,
          qS = NS ? (0, Et.e)(xS) : null;
        if (qS) return void qS.adjust("Left" === HS ? -1 : 1);
        const uS = SS => null !== SS.closest("[data-pad-friends-column]"),
          IS = uS(xS),
          fS = lt(xS),
          kS = NS || xS.closest(Ft) ? null : (SS => {
            const HS = new Map;
            return gS => {
              const tS = gS.closest(Ft);
              if (!tS) return !1;
              let bS = HS.get(tS);
              if (void 0 === bS) {
                const gS = lt(tS);
                bS = ng(SS, gS) && (gS.right <= SS.left || gS.left >= SS.right), HS.set(tS, bS)
              }
              return bS
            }
          })(fS),
          aS = null !== xS.closest(Mt),
          KS = this.getEnabledCandidates(SS).filter((SS => SS !== xS && (NS || uS(SS) === IS) && !(null !== kS && void 0 !== kS && kS(SS)) && (aS || !SS.closest(Mt)))),
          jS = KS.map(lt),
          GS = dS(xS, "y", SS),
          CS = AS(GS);
        if (!XS && !yS(fS, CS)) {
          const SS = KS.filter(((SS, HS) => yS(jS[HS], CS)));
          if (SS.length > 0) {
            const HS = {
              x: CS.left + CS.width / 2,
              y: CS.top + CS.height / 2
            };
            return void this.setFocus(SS[Zg(HS, SS.map(lt))], {
              byUser: !0
            })
          }
        }
        const nS = NS ? ((SS, HS, gS) => {
            const tS = lt(SS),
              bS = SS.closest(Ft),
              XS = bS ? lt(bS) : null;
            return HS.map(((HS, xS) => {
              const NS = gS[xS];
              if (NS.bottom > tS.top && NS.top < tS.bottom) return !0;
              const qS = HS.closest(Ft);
              if (bS && XS) return qS !== bS && (null !== qS || NS.bottom <= XS.top || NS.top >= XS.bottom);
              if (qS) return !ng(tS, lt(qS));
              let uS = SS;
              for (let gS = SS.parentElement; gS && !gS.contains(HS); gS = gS.parentElement) uS = gS;
              const IS = lt(uS);
              return NS.right > IS.left && NS.left < IS.right
            }))
          })(xS, KS, jS) : void 0,
          PS = NS && !xS.closest(Ft) ? (SS => SS.map((SS => !SS.closest(Yt))))(KS) : void 0,
          QS = ((SS, HS) => {
            const gS = [];
            for (let bS = SS; bS; bS = bS.parentElement) gS.push(bS);
            const tS = new Map;
            return gS.forEach(((SS, HS) => {
              tS.set(SS, gS.length - 1 - HS)
            })), HS.map((SS => {
              for (let HS = SS; HS; HS = HS.parentElement) {
                const SS = tS.get(HS);
                if (void 0 !== SS) return SS
              }
              return -1
            }))
          })(xS, KS),
          DS = NS ? "x" : "y",
          wS = dS(xS, DS, SS);
        let hS = Pg(fS, jS, HS, QS, nS, PS);
        if (hS >= 0 && wS && !wS.contains(KS[hS])) {
          const SS = KS.flatMap(((SS, HS) => wS.contains(SS) ? [HS] : [])),
            gS = HS => HS && SS.map((SS => HS[SS])),
            tS = Pg(fS, SS.map((SS => jS[SS])), HS, SS.map((SS => QS[SS])), gS(nS), gS(PS));
          hS = tS >= 0 ? SS[tS] : hS
        }
        if (hS >= 0) return void this.moveTo(xS, KS[hS], KS, SS, HS, XS);
        if (!tS) return;
        const ZS = "Right" === HS || "Down" === HS ? 1 : -1;
        if (wS && LS(wS, DS, ZS)) {
          const SS = "y" === DS ? wS.clientHeight : wS.clientWidth;
          YS(wS, DS, ZS * SS * .5), this.retryMove = {
            direction: HS,
            atMs: gS + 80
          }
        }
      }
      moveTo(SS, HS, gS, tS, bS, XS) {
        const xS = this.tabStripNav.findTabContent(SS, HS, gS);
        xS && "true" !== SS.dataset.padSelected ? this.openTab(SS, xS, tS, bS) : XS && !xS || this.setFocus(this.tabStripNav.redirect(SS, HS, gS, tS), {
          byUser: !0
        })
      }
      openTab(SS, HS, gS, tS) {
        const bS = HS.parentElement;
        (0, MS.c)(SS), this.focusWhenFound((() => "true" !== SS.dataset.padSelected ? null : HS.isConnected ? this.tabStripNav.pickContentStart(HS, this.getEnabledCandidates(gS), gS) : bS ? this.tabStripNav.pickReplacedContentStart(SS, bS, this.getEnabledCandidates(gS), gS) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: tS
        }
      }
      enterTab(SS, HS, gS, tS) {
        this.move(gS, (SS => {
          const HS = [...SS.querySelectorAll(Wt)].filter((HS => HS.closest(it) === SS));
          if (HS.length >= 2) {
            const SS = HS[0].getBoundingClientRect(),
              gS = HS[1].getBoundingClientRect();
            return Math.abs(gS.top - SS.top) > Math.abs(gS.left - SS.left) ? "Right" : "Down"
          }
          const gS = SS.getBoundingClientRect();
          return gS.height > gS.width ? "Right" : "Down"
        })(HS), tS, !1, !0), this.focused !== SS || this.pendingFocus || this.activate(SS)
      }
      handleScroll(SS, HS) {
        const gS = (0, KS.l)(SS.rightStick, .2);
        if (0 === gS.x && 0 === gS.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const tS = SS.dtMs / 1e3;
        for (const XS of ["x", "y"]) {
          var bS;
          const SS = gS[XS];
          if (0 === SS) continue;
          const xS = null !== (bS = dS(this.focused, XS, HS.root)) && void 0 !== bS ? bS : vS(HS.root, XS);
          if (!xS) continue;
          const NS = Math.sign(SS) * SS * SS * 1500 * tS + this.scrollRemainder[XS],
            qS = Math.trunc(NS);
          this.scrollRemainder[XS] = NS - qS, 0 !== qS && (YS(xS, XS, qS), this.scrolledInLayer = !0)
        }
      }
    };
    var Sb = gS(8400);
    var Hb = gS(8923);
    const gb = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      tb = {
        damage: {
          duration: 120,
          strongMagnitude: .45,
          weakMagnitude: .3,
          minIntervalMs: 250,
          needsPadInUse: !0
        },
        blockBreak: {
          duration: 40,
          strongMagnitude: 0,
          weakMagnitude: .25,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        hit: {
          duration: 50,
          strongMagnitude: .15,
          weakMagnitude: .35,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        connect: {
          ...gb,
          minIntervalMs: 1e3
        },
        preview: {
          ...gb,
          minIntervalMs: 0
        }
      };
    const bb = new class {
        constructor(SS) {
          this.deps = SS, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = SS => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", SS))
          }
        }
        play(SS, HS) {
          const gS = tb[SS];
          if (!this.deps.isVibrationOn() || gS.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const tS = this.lastPlayedMs[SS];
          if (void 0 !== tS && HS - tS < gS.minIntervalMs) return !1;
          const bS = this.deps.getActuator();
          if (!bS) return !1;
          this.lastPlayedMs[SS] = HS;
          const {
            duration: XS,
            strongMagnitude: xS,
            weakMagnitude: NS
          } = gS;
          try {
            bS.playEffect("dual-rumble", {
              duration: XS,
              strongMagnitude: xS,
              weakMagnitude: NS
            }).catch(this.logFailure)
          } catch (qS) {
            this.logFailure(qS)
          }
          return !0
        }
      }({
        getActuator: () => (SS => {
          const HS = null === SS || void 0 === SS ? void 0 : SS.vibrationActuator;
          return "function" === typeof(null === HS || void 0 === HS ? void 0 : HS.playEffect) ? HS : null
        })(xS.g.getActiveGamepad()),
        isVibrationOn: () => (0, kS.f)().vibration,
        isPadInUse: aS.m
      }),
      Xb = SS => {
        bb.play(SS, performance.now())
      };
    var xb = gS(8402),
      Nb = gS(3067),
      qb = gS(118),
      ub = gS(45),
      Ib = gS(713);
    class fb {
      constructor(SS) {
        this.deps = SS
      }
      check() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const HS = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!HS) return "skipped";
        const gS = SS ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === gS || this.deps.readReportedVisitId() === gS ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(gS), this.deps.tK(HS, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const kb = "controllerUsageReportedVisit";
    var ab = gS(1435),
      Kb = gS(1844),
      jb = gS(699),
      Gb = gS(1522),
      Cb = gS(1334);
    const nb = SS => ({
        translationKey: `controller:${SS}`
      }),
      Pb = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: nb("padButtonView"),
        Menu: nb("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: nb("padButtonDpadUp"),
        Down: nb("padButtonDpadDown"),
        Left: nb("padButtonDpadLeft"),
        Right: nb("padButtonDpadRight"),
        Home: nb("padButtonHome"),
        LeftStick: nb("padButtonLeftStick"),
        RightStick: nb("padButtonRightStick")
      },
      Qb = {
        xbox: {
          LS: "LS",
          RS: "RS"
        },
        generic: {},
        steamdeck: {
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2"
        },
        playstation: {
          A: "\u2715",
          B: "\u25cb",
          X: "\u25a1",
          Y: "\u25b3",
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2",
          View: nb("padButtonCreate"),
          Menu: nb("padButtonOptions")
        },
        nintendo: {
          A: "B",
          B: "A",
          X: "Y",
          Y: "X",
          LB: "L",
          RB: "R",
          LT: "ZL",
          RT: "ZR",
          View: "\u2212",
          Menu: "+"
        }
      },
      Db = (SS, HS) => {
        var gS;
        const tS = null !== (gS = Qb[SS][HS]) && void 0 !== gS ? gS : Pb[HS];
        return "string" === typeof tS ? tS : (0, bS.C)(Cb.f.get().getCurrentLanguageCode(), tS.translationKey)
      },
      wb = SS => {
        let {
          glyph: HS,
          family: gS,
          className: tS
        } = SS;
        const bS = (0, aS.C)(),
          XS = null !== gS && void 0 !== gS ? gS : bS,
          xS = (0, xb.d)(XS, HS);
        return (0, zS.jsx)("span", {
          className: WS()("ControllerGlyph", tS),
          role: "img",
          "aria-label": Db(XS, HS),
          style: {
            "--pad-glyph-mask": `url(${xS})`,
            "--pad-glyph-aspect": (0, xb.b)(XS, HS)
          }
        })
      };
    var hb = gS(2031);
    const Zb = SS => {
      let {
        action: HS
      } = SS;
      const {
        t: gS
      } = (0, bS.F)();
      switch (HS.kind) {
        case "reload":
          return (0, zS.jsx)("span", {
            children: gS("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, zS.jsx)(hb.c, {
            text: HS.description ? [{
              icon: HS.icon
            }, ` ${HS.description}`] : [{
              icon: HS.icon
            }]
          });
        case "touchButton":
          return (0, zS.jsx)(hb.c, {
            text: HS.label
          })
      }
    };
    var Jb = gS(8930);
    const Ob = SS => {
      let {
        hold: HS
      } = SS;
      return (0, zS.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${HS.holdMs}ms`
        },
        children: (0, zS.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, HS.id)
    };
    var db = gS(8951),
      cb = gS(8959),
      vb = gS(8965),
      Eb = gS(8948);
    const Lb = () => {
        const {
          gameState: SS
        } = (0, qS.m)(["gameState"]), HS = (0, aS.z)(), [tS, bS] = (0, VS.useState)(!1), [XS, xS] = (0, VS.useState)(!1);
        return (0, VS.useEffect)((() => {
          "inGame" === SS && bS(!0)
        }), [SS]), (0, VS.useEffect)((() => {
          if (!tS) return;
          let SS = null,
            HS = !1;
          return (jb.A ? Promise.all([gS.e(72), gS.e(89), gS.e(269), gS.e(189), gS.e(224), gS.e(223), gS.e(88)]).then((() => gS(40566))).then((SS => SS.startWasmPadGameplay)) : Promise.all([gS.e(72), gS.e(232), gS.e(231), gS.e(96), gS.e(75), gS.e(74), gS.e(73), gS.e(185), gS.e(228), gS.e(77), gS.e(89), gS.e(186), gS.e(222), gS.e(95), gS.e(225), gS.e(240), gS.e(120), gS.e(211), gS.e(86), gS.e(241), gS.e(76), gS.e(119), gS.e(242), gS.e(224), gS.e(158)]).then((() => gS(40696))).then((SS => SS.startPadGameplay))).then((gS => {
            HS || (SS = gS())
          })).catch((SS => {
            console.error("Pad gameplay failed to load", SS), HS || xS(!0)
          })), () => {
            var gS;
            HS = !0, null === (gS = SS) || void 0 === gS || gS()
          }
        }), [tS]), (0, VS.useEffect)((() => {
          XS && HS && (xS(!1), ab.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((SS => {
            !0 === SS && (0, Kb.reloadBloxd)()
          })))
        }), [XS, HS]), (0, zS.jsxs)(zS.Fragment, {
          children: [(0, zS.jsx)(Yb, {}), (0, zS.jsx)(Ab, {}), (0, zS.jsx)(yb, {})]
        })
      },
      Yb = () => {
        const {
          t: SS
        } = (0, bS.F)(), HS = (0, aS.z)(), {
          gameState: gS,
          isUiHidden: tS
        } = (0, qS.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: XS
        } = (0, kS.l)(), xS = (0, Jb.f)(), NS = (0, Jb.g)(), [uS, fS] = (0, VS.useState)(vb.d);
        return (0, Gb.g)(Eb.p, fS), !HS || XS || tS || "inGame" !== gS || !xS && !uS ? null : (0, zS.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [xS && (0, zS.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, zS.jsx)(wb, {
              glyph: (0, IS.h)("actionButton")
            }), (0, zS.jsx)(Zb, {
              action: xS
            }), NS && (0, zS.jsx)("span", {
              className: "PadActionHintMore",
              children: SS("controller:gameplayActionWheelHint")
            })]
          }), uS && (0, zS.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, zS.jsx)(wb, {
              glyph: (0, IS.h)("pickBlock")
            }), (0, zS.jsx)("span", {
              children: SS("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Ab = () => {
        const {
          t: SS
        } = (0, bS.F)(), HS = (0, aS.z)(), {
          gameState: gS,
          isUiHidden: tS
        } = (0, qS.m)(["gameState", "isUiHidden"]), [XS, xS] = (0, VS.useState)(db.e);
        return (0, Gb.g)(Eb.o, xS), HS && !tS && "inGame" === gS && XS ? (0, zS.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, zS.jsx)("span", {
            children: SS("controller:gameplayDropStack")
          }), (0, zS.jsx)(Ob, {
            hold: XS
          })]
        }) : null
      },
      yb = () => {
        const {
          t: SS
        } = (0, bS.F)(), HS = (0, aS.z)(), {
          gameState: gS,
          isUiHidden: tS
        } = (0, qS.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: XS
        } = (0, kS.l)(), [xS, NS] = (0, VS.useState)(cb.b);
        return (0, Gb.g)(Eb.k, NS), HS && !tS && "inGame" === gS && xS ? (0, zS.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!XS && (0, zS.jsx)(wb, {
            glyph: (0, IS.h)("attack")
          }), (0, zS.jsx)("span", {
            children: SS("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var Vb = gS(8970),
      ib = gS(2083),
      Wb = gS(2537),
      zb = gS(8376);
    const Ub = SS => SS && !(0, Vb.e)(ib.d.get("shopInfo")),
      pb = () => {
        const SS = "inGame" === (0, qS.m)(["gameState"]).gameState;
        return (0, Wb.e)("shopInfo", (() => {
          (0, zb.j)(Ub(SS))
        })), (0, VS.useEffect)((() => {
          (0, zb.j)(Ub(SS))
        }), [SS]), null
      },
      sb = () => {
        const {
          t: SS
        } = (0, bS.F)(), {
          hideButtonHints: HS
        } = (0, kS.l)();
        (0, aS.C)();
        const gS = (0, WH.m)();
        return (0, VS.useEffect)((() => (() => {
          const SS = fS.e.register({
              name: "inventory",
              isActive: bg.isActive,
              onFrame: bg.onFrame,
              onDeactivate: bg.onDeactivate,
              wakePressActs: bg.wakePressActs
            }),
            HS = SS => {
              bg.noteRealPointer(SS), bg.shouldBlockRealPointer(SS) && SS.stopPropagation()
            };
          for (const xS of Xg) window.addEventListener(xS, HS, !0);
          const gS = (0, mS.i)((() => {
              "inventory" !== fS.e.getActiveConsumerName() && bg.forgetSurface()
            })),
            tS = SS => {
              const HS = SS.target;
              (0, aS.m)() && (0, TS.f)(HS) && HS.closest(DH) && (0, mS.h)() && (0, mS.m)(HS)
            };
          document.addEventListener("focusout", tS, !0);
          const {
            invalidate: bS,
            onScroll: XS
          } = bg.targets;
          return document.addEventListener("scroll", XS, !0), window.addEventListener("resize", bS), () => {
            SS(), gS();
            for (const SS of Xg) window.removeEventListener(SS, HS, !0);
            document.removeEventListener("scroll", XS, !0), document.removeEventListener("focusout", tS, !0), window.removeEventListener("resize", bS), bg.targets.disconnect()
          }
        })()), []), (0, zS.jsxs)(zS.Fragment, {
          children: [(0, zS.jsx)(BS, {
            placer: bg.ring,
            className: "InventorySlotCursorRing"
          }), gS.showing && !HS && (0, zS.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: lS(gS).map((HS => {
              let {
                actions: tS,
                labelKey: bS
              } = HS;
              return (0, zS.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [tS.map((SS => (0, zS.jsx)(wb, {
                  glyph: (0, IS.h)(SS)
                }, SS))), (0, zS.jsx)("span", {
                  children: SS(`controller:${bS}`)
                }), "inventoryDrop" === bS && gS.dropStackHold && (0, zS.jsx)(Ob, {
                  hold: gS.dropStackHold
                })]
              }, bS)
            }))
          })]
        })
      },
      Bb = [{
        command: "close",
        action: "keyboardClose",
        repeats: !1
      }, {
        command: "submit",
        action: "keyboardSubmit",
        repeats: !1
      }, {
        command: "backspace",
        action: "keyboardBackspace",
        repeats: !0
      }, {
        command: "space",
        action: "keyboardSpace",
        repeats: !1
      }, {
        command: "caretLeft",
        action: "keyboardCaretLeft",
        repeats: !0
      }, {
        command: "caretRight",
        action: "keyboardCaretRight",
        repeats: !0
      }, {
        command: "shift",
        action: "keyboardShift",
        repeats: !1
      }, {
        command: "page",
        action: "keyboardSymbols",
        repeats: !1
      }, {
        command: "channel",
        action: "keyboardChannel",
        repeats: !1
      }],
      Mb = SS => Array.from(SS).map((SS => ({
        type: "char",
        char: SS,
        width: 1
      }))),
      Fb = function(SS) {
        return {
          type: "command",
          command: SS,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      Rb = [Fb("page", 2), Fb("otherPage"), Fb("caretLeft"), Fb("space", 3), Fb("caretRight"), Fb("close", 1.5), Fb("submit", 1.5)],
      Tb = [Fb("page", 2), Fb("otherPage"), Fb("caretLeft"), Fb("space", 2), Fb("caretRight"), Fb("newline"), Fb("close", 1.5), Fb("submit", 1.5)],
      ob = [
        [...Mb("1234567890"), Fb("backspace")], Mb("qwertyuiop/"), Mb("asdfghjkl'?"), [Fb("shift", 2), ...Mb("zxcvbnm,.")]
      ],
      lb = [
        [...Mb("1234567890"), Fb("backspace")], Mb("!@#$%^&*()/"), Mb('-_=+[]{};:"'), Mb("~`|\\<>'\u20ac\xa3,.")
      ],
      mb = {
        letters: ob,
        accents: [
          [...Mb("1234567890"), Fb("backspace")], Mb("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), Mb("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Fb("shift", 2), ...Mb("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: lb
      },
      eb = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      rb = (SS, HS) => "letters" === SS ? HS ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === SS ? "symbols" : "accents"
      },
      SX = function(SS, HS) {
        const gS = ((SS, HS) => [...mb[SS], HS ? Tb : Rb])(SS, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === HS) return gS;
        const tS = Math.min(2, HX(gS[0]) / HS);
        return [Array.from({
          length: HS
        }, ((SS, HS) => ({
          type: "phrase",
          phraseIndex: HS,
          width: tS
        }))), ...gS]
      },
      HX = SS => SS.reduce(((SS, HS) => SS + HS.width), 0),
      gX = SS => Math.max(...SS.map(HX)),
      tX = (SS, HS) => {
        const gS = SS[HS.row];
        let tS = (gX(SS) - HX(gS)) / 2;
        for (let bS = 0; bS < HS.col; bS++) tS += gS[bS].width;
        return tS + gS[HS.col].width / 2
      },
      bX = (SS, HS, gS) => {
        let tS = 0,
          bS = 1 / 0;
        for (let XS = 0; XS < SS[HS].length; XS++) {
          const xS = Math.abs(tX(SS, {
            row: HS,
            col: XS
          }) - gS);
          xS < bS - 1e-9 && (tS = XS, bS = xS)
        }
        return tS
      },
      XX = (SS, HS) => {
        const gS = Math.max(0, Math.min(SS.length - 1, HS.row));
        return {
          row: gS,
          col: Math.max(0, Math.min(SS[gS].length - 1, HS.col))
        }
      },
      xX = (SS, HS, gS) => "once" === SS && HS - gS <= 400 ? "caps" : "off" === SS ? "once" : "off",
      NX = (SS, HS) => "once" === SS && (SS => SS.toLowerCase() !== SS.toUpperCase())(HS) ? "off" : SS,
      qX = (SS, HS, gS) => {
        if ("symbols" === HS || "off" === gS) return SS;
        const tS = SS.toUpperCase();
        return 1 === tS.length ? tS : SS
      };
    var uX = gS(8846);
    const IX = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const fX = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(SS) {
          return !(SS - this.lastSendMs < 2e3) && (this.lastSendMs = SS, !0)
        }
      },
      kX = {
        visible: !1,
        target: null,
        kind: null,
        page: "letters",
        accentsFirst: !1,
        shift: "off",
        focus: {
          row: 0,
          col: 0
        },
        preferredX: 0,
        placement: "bottom",
        maxHeightPx: 0
      },
      aX = ["Gu", "nameTag"],
      KX = SS => {
        const HS = SS.target instanceof HTMLTextAreaElement && !aX.includes(SS.kind);
        return SX(SS.page, "chat" === SS.kind ? IX.length : 0, HS)
      },
      jX = SS => {
        const HS = SS.getBoundingClientRect(),
          gS = window.innerHeight,
          tS = HS.top + HS.height / 2 < gS / 2 ? "bottom" : "top",
          bS = "bottom" === tS ? gS - HS.bottom - 6 : HS.top - 6;
        return {
          placement: tS,
          maxHeightPx: Math.min(.46 * gS, Math.max(.3 * gS, bS))
        }
      },
      GX = SS => {
        (0, dg.i)(SS) ? (0, dg.e)().close(): (rt.noteChosenStop(SS), SS.blur())
      };
    class CX {
      constructor(SS) {
        this.host = SS, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(SS, HS) {
        this.phraseTexts = SS, this.phrasesFill = HS
      }
      pressKey(SS) {
        const HS = this.host.getState(),
          gS = KX(HS),
          tS = gS[SS.row][SS.col];
        this.host.setState({
          ...HS,
          focus: SS,
          preferredX: tX(gS, SS)
        }), "char" === tS.type ? this.typeChar(tS.char) : "command" === tS.type ? this.runCommand(tS.command) : this.sendPhrase(tS.phraseIndex)
      }
      runCommand(SS) {
        const HS = this.host.getState();
        switch (SS) {
          case "backspace":
            (0, TS.b)(HS.target);
            break;
          case "space":
            (0, TS.d)(HS.target, " ");
            break;
          case "newline":
            (0, TS.d)(HS.target, "\n");
            break;
          case "caretLeft":
            (0, TS.h)(HS.target, -1);
            break;
          case "caretRight":
            (0, TS.h)(HS.target, 1);
            break;
          case "shift": {
            const SS = performance.now();
            this.host.setState({
              ...HS,
              shift: xX(HS.shift, SS, this.lastShiftPressMs)
            }), this.lastShiftPressMs = SS;
            break
          }
          case "page":
          case "otherPage": {
            const gS = rb(HS.page, HS.accentsFirst)[SS];
            this.host.setState({
              ...HS,
              page: gS,
              focus: XX(KX({
                ...HS,
                page: gS
              }), HS.focus)
            });
            break
          }
          case "submit":
            this.submit();
            break;
          case "close":
            this.close();
            break;
          case "channel":
            (0, dg.i)(HS.target) && (0, dg.e)().selectNextChannel()
        }
      }
      submit() {
        var SS, HS;
        const {
          target: gS
        } = this.host.getState();
        this.host.hide(), (0, dg.i)(gS) ? (0, dg.e)().submit() : (rt.noteChosenStop(gS), null === (SS = (HS = (0, dg.h)(gS)).submit) || void 0 === SS || SS.call(HS), document.activeElement === gS && gS.blur())
      }
      close() {
        const {
          target: SS
        } = this.host.getState();
        this.host.hide(), GX(SS)
      }
      typeChar(SS) {
        const {
          target: HS,
          page: gS,
          shift: tS
        } = this.host.getState();
        (0, TS.d)(HS, qX(SS, gS, tS)), this.host.setState({
          ...this.host.getState(),
          shift: NX(tS, SS)
        })
      }
      sendPhrase(SS) {
        if (this.phrasesFill) {
          const {
            target: HS
          } = this.host.getState(), gS = this.phraseTexts[SS];
          gS && (HS.setSelectionRange(0, HS.value.length), (0, TS.d)(HS, gS))
        } else fX.claim(performance.now()) && (this.host.hide(), (0, dg.e)().sendLine(this.phraseTexts[SS]))
      }
    }
    var nX = gS(8868);
    const PX = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      QX = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class DX {
      constructor(SS, HS) {
        this.host = SS, this.editor = HS, this.lastDirection = null, this.navRepeat = new KS.b((0, jS.d)(PX)), this.commandRepeats = new Map(Bb.filter((SS => {
          let {
            repeats: HS
          } = SS;
          return HS
        })).map((SS => {
          let {
            command: HS
          } = SS;
          return [HS, (0, jS.d)(QX)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const SS of this.commandRepeats.values()) SS.reset()
      }
      onVisibleFrame(SS) {
        const HS = performance.now();
        for (const {
            command: bS,
            action: XS
          }
          of Bb) {
          const gS = (0, IS.h)(XS),
            tS = this.commandRepeats.get(bS);
          if ((tS ? tS.update(SS.isHeld(gS), HS) : SS.wasPressed(gS)) && (this.editor.runCommand(bS), !this.host.getState().visible)) return
        }
        if (SS.wasPressed((0, IS.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const gS = this.readNavDirection(SS);
        this.lastDirection = gS;
        const tS = this.navRepeat.update(gS, HS);
        tS && this.navigate(tS)
      }
      onHiddenFrame(SS, HS) {
        var gS;
        if (SS.wasPressed((0, IS.h)("keyboardClose"))) return void GX(HS);
        const tS = (0, IS.h)("keyboardType");
        if (SS.wasPressed(tS)) return fS.e.consumeButton(tS), void this.host.open(HS);
        const bS = this.readNavDirection(SS),
          XS = null !== bS && bS !== this.lastDirection;
        if (this.lastDirection = bS, !XS || (0, dg.i)(HS)) return;
        const xS = (null === (gS = ut()) || void 0 === gS ? void 0 : gS.root.contains(HS)) || null !== HS.closest(".EntireInventoryWrapper");
        GX(HS), xS && fS.e.handOffHeldInput()
      }
      navigate(SS) {
        const HS = this.host.getState();
        if ("Up" === SS && 0 === HS.focus.row && "chat" === HS.kind) return (0, dg.e)().stepHistory(), void this.host.setState({
          ...HS
        });
        const gS = ((SS, HS, gS, tS) => {
          if ("Left" === gS || "Right" === gS) {
            const tS = SS[HS.row].length,
              bS = (HS.col + ("Right" === gS ? 1 : -1) + tS) % tS,
              XS = {
                row: HS.row,
                col: bS
              };
            return {
              pos: XS,
              preferredX: tX(SS, XS)
            }
          }
          const bS = (HS.row + ("Down" === gS ? 1 : -1) + SS.length) % SS.length;
          return {
            pos: {
              row: bS,
              col: bX(SS, bS, tS)
            },
            preferredX: tS
          }
        })(KX(HS), HS.focus, SS, HS.preferredX);
        this.host.setState({
          ...HS,
          focus: gS.pos,
          preferredX: gS.preferredX
        })
      }
      readNavDirection(SS) {
        for (const HS of KS.A)
          if (SS.isHeld(HS)) return HS;
        return (0, KS.eb)((0, KS.l)(SS.leftStick, (0, kS.f)().moveDeadzone))
      }
    }
    const wX = ["Up", "Down", "Left", "Right"],
      hX = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const ZX = new class {
      constructor() {
        this.state = kX, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new CX(this), this.padInput = new DX(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(SS) {
        const HS = SS.visible !== this.state.visible;
        this.state = SS;
        for (const gS of this.listeners) gS();
        HS && uS.k.cj(nX.e, SS.visible)
      }
      subscribe(SS) {
        return this.listeners.add(SS), () => {
          this.listeners.delete(SS)
        }
      }
      install() {
        const SS = fS.e.register({
            name: "keyboard",
            isActive: () => this.state.visible || (0, TS.f)(document.activeElement),
            onFrame: SS => {
              this.onFrame(SS)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: SS => wX.includes(SS) || !this.state.visible && SS === (0, IS.h)("keyboardType")
          }),
          HS = SS => {
            const HS = SS.target;
            (0, TS.f)(HS) && (HS === this.pendingChatInput || (0, aS.m)() ? this.open(HS) : this.state.visible && HS !== this.state.target && (this.ownedField = null, this.hide()))
          },
          gS = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          tS = SS => {
            SS.isTrusted && this.state.visible && (SS => !SS.repeat && !hX.has(SS.key) && !(0, uX.c)(SS.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(SS.key))(SS) && this.hide()
          },
          bS = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...jX(this.state.target)
            })
          };
        document.addEventListener("focusin", HS, !0), document.addEventListener("focusout", gS, !0), window.addEventListener("keydown", tS, !0), window.addEventListener("resize", bS);
        const XS = uS.k.subscribe(Eb.d, (() => {
            this.openChat()
          })),
          xS = uS.k.subscribe(nX.f, (SS => {
            this.openForField(SS)
          }));
        return () => {
          SS(), document.removeEventListener("focusin", HS, !0), document.removeEventListener("focusout", gS, !0), window.removeEventListener("keydown", tS, !0), window.removeEventListener("resize", bS), uS.k.unsubscribe(XS), uS.k.unsubscribe(xS), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const SS = (0, dg.e)();
        SS ? document.activeElement !== SS.input ? (this.clearPendingChat(), this.pendingChatInput = SS.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), SS.open()) : this.open(SS.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(SS) {
        (0, TS.f)(SS) ? (document.activeElement !== SS && SS.focus(), document.activeElement === SS && this.open(SS)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", SS)
      }
      open(SS) {
        var HS;
        if (this.clearPendingChat(), this.ownedField = SS, this.state.visible && this.state.target === SS) return;
        this.restoreInputMode(), (0, TS.l)(SS), this.savedInputMode = SS.getAttribute("inputmode"), SS.setAttribute("inputmode", "none");
        const gS = {
          ...kX,
          visible: !0,
          target: SS,
          kind: (0, dg.i)(SS) ? "chat" : null !== (HS = (0, dg.h)(SS).kind) && void 0 !== HS ? HS : null,
          accentsFirst: (tS = Cb.f.get().getCurrentLanguageCode(), eb.has(tS)),
          ...jX(SS)
        };
        var tS;
        const bS = KX(gS),
          XS = ((SS, HS) => {
            for (let gS = 0; gS < SS.length; gS++) {
              const tS = SS[gS].findIndex((SS => "char" === SS.type && SS.char === HS));
              if (-1 !== tS) return {
                row: gS,
                col: tS
              }
            }
            return null
          })(bS, "q");
        this.padInput.reset(), this.setState({
          ...gS,
          focus: XS,
          preferredX: tX(bS, XS)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(kX))
      }
      onFrame(SS) {
        if (this.releaseLostField()) return;
        const HS = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(SS) : (0, TS.f)(HS) && this.padInput.onHiddenFrame(SS, HS)
      }
      releaseLostField() {
        const SS = this.ownedField;
        return !(null === SS || SS.isConnected && document.activeElement === SS) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: SS
        } = this.state;
        SS && (null === this.savedInputMode ? SS.removeAttribute("inputmode") : SS.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var JX = gS(8981);
    const OX = new Map(Bb.map((SS => {
        let {
          command: HS,
          action: gS
        } = SS;
        return [HS, gS]
      }))),
      dX = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      cX = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        Gu: "controller:keyboardTargetBookTitle"
      },
      vX = SS => {
        const HS = (() => {
          const [, SS] = (0, VS.useReducer)((SS => SS + 1), 0);
          return SS
        })();
        (0, VS.useEffect)((() => {
          if (!SS) return;
          const gS = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const bS of gS) SS.addEventListener(bS, HS);
          document.addEventListener("selectionchange", HS);
          const tS = new MutationObserver(HS);
          return tS.observe(SS, {
            attributeFilter: ["placeholder"]
          }), () => {
            tS.disconnect();
            for (const tS of gS) SS.removeEventListener(tS, HS);
            document.removeEventListener("selectionchange", HS)
          }
        }), [SS, HS])
      },
      EX = SS => {
        SS.preventDefault()
      },
      LX = SS => {
        "mouse" !== SS.pointerType && SS.preventDefault()
      },
      YX = () => {
        var SS;
        const {
          t: HS
        } = (0, bS.F)(), gS = (() => {
          const [SS, HS] = (0, VS.useState)(ZX.getState());
          return (0, VS.useEffect)((() => ZX.subscribe((() => {
            HS(ZX.getState())
          }))), []), SS
        })(), tS = (0, aS.z)(), XS = (0, VS.useRef)(null);
        (0, kS.l)(), (0, aS.C)(), (0, VS.useEffect)((() => {
          const SS = ZX.install(),
            HS = null;
          return () => {
            SS(), null === HS || void 0 === HS || HS()
          }
        }), []);
        const xS = (0, VS.useMemo)((() => IX.map((SS => HS(SS)))), [HS]),
          NS = gS.visible && "chat" === gS.kind ? gS.target : null;
        vX(NS);
        const qS = null !== (SS = null === NS || void 0 === NS ? void 0 : NS.value) && void 0 !== SS ? SS : "",
          uS = ((SS, HS, gS) => {
            if (!SS.startsWith("/")) return [];
            const tS = [];
            for (let bS = HS.length - 1; bS >= 0 && tS.length < gS; bS--) {
              const gS = HS[bS].trim();
              gS.startsWith(SS) && gS !== SS && !tS.includes(gS) && tS.push(gS)
            }
            return tS
          })(qS, qS.startsWith("/") ? (0, JX.g)() : [], IX.length),
          fS = qS.startsWith("/"),
          KS = fS ? IX.map(((SS, HS) => {
            var gS;
            return null !== (gS = uS[HS]) && void 0 !== gS ? gS : ""
          })) : xS;
        if ((0, VS.useEffect)((() => {
            ZX.editor.setPhraseRow(KS, fS)
          })), (0, VS.useEffect)((() => {
            const SS = XS.current;
            if (SS) return SS.addEventListener("touchstart", EX, {
              passive: !1
            }), () => {
              SS.removeEventListener("touchstart", EX)
            }
          }), [gS.visible]), !gS.visible) return null;
        const jS = KX(gS),
          GS = gX(jS),
          CS = SS => "char" === SS.type ? qX(SS.char, gS.page, gS.shift) : "phrase" === SS.type ? KS[SS.phraseIndex] : (SS => {
            switch (SS) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === gS.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return dX[rb(gS.page, gS.accentsFirst)[SS]];
              case "space":
                return HS("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return HS("chat" === gS.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(SS.command),
          nS = SS => {
            ZX.editor.pressKey(SS)
          };
        return (0, zS.jsxs)("div", {
          ref: XS,
          className: WS()(dg.o, "top" === gS.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: gS.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": jS.length,
            "--pad-keyboard-height": `${gS.maxHeightPx}px`
          },
          onPointerDown: LX,
          onMouseDown: EX,
          children: [(0, zS.jsx)(AX, {
            target: gS.target,
            label: gS.kind ? HS(cX[gS.kind]) : gS.target.placeholder || HS("controller:keyboardTargetText")
          }), (0, zS.jsx)("div", {
            className: "PadKeyboardRows",
            children: jS.map(((SS, HS) => (0, zS.jsx)("div", {
              className: WS()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === SS[0].type
              }),
              children: SS.map(((SS, bS) => {
                const XS = tS && gS.focus.row === HS && gS.focus.col === bS,
                  xS = "command" === SS.type ? OX.get(SS.command) : void 0;
                return (0, zS.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: SS.width / GS * 100 + "%"
                  },
                  children: (0, zS.jsxs)("div", {
                    className: WS()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: XS,
                      PadKeyboardKeyCommand: "command" === SS.type,
                      PadKeyboardKeyPhrase: "phrase" === SS.type,
                      PadKeyboardKeyActive: "command" === SS.type && "shift" === SS.command && "off" !== gS.shift,
                      PadKeyboardKeySubmit: "command" === SS.type && "submit" === SS.command
                    }),
                    role: "button",
                    onClick: () => {
                      nS({
                        row: HS,
                        col: bS
                      })
                    },
                    onTouchEnd: SS => {
                      var gS, tS;
                      SS.preventDefault(), gS = SS.changedTouches[0], tS = SS.currentTarget.getBoundingClientRect(), gS && gS.clientX >= tS.left && gS.clientX <= tS.right && gS.clientY >= tS.top && gS.clientY <= tS.bottom && nS({
                        row: HS,
                        col: bS
                      })
                    },
                    children: [(0, zS.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: CS(SS)
                    }), tS && xS && (0, zS.jsx)(wb, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, IS.h)(xS)
                    })]
                  })
                }, bS)
              }))
            }, HS)))
          })]
        })
      },
      AX = SS => {
        let {
          target: HS,
          label: gS
        } = SS;
        vX(HS);
        const tS = (0, VS.useRef)(null),
          bS = (0, VS.useRef)(null),
          XS = HS instanceof HTMLTextAreaElement;
        (0, VS.useLayoutEffect)((() => {
          const SS = tS.current,
            HS = bS.current;
          XS ? SS.scrollTop = HS.offsetTop - SS.clientHeight / 2 : SS.scrollLeft = HS.offsetLeft - SS.clientWidth / 2
        }));
        const {
          value: xS,
          start: NS,
          end: qS
        } = (0, TS.o)(HS), uS = "password" === HS.type ? "\u2022".repeat(xS.length) : xS;
        return (0, zS.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, zS.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: gS
          }), (0, zS.jsxs)("div", {
            ref: tS,
            className: WS()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: XS
            }),
            children: [(0, zS.jsx)("span", {
              children: uS.slice(0, NS)
            }), (0, zS.jsx)("span", {
              ref: bS,
              className: "PadKeyboardCaret"
            }), NS !== qS && (0, zS.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: uS.slice(NS, qS)
            }), (0, zS.jsx)("span", {
              children: uS.slice(qS)
            }), 0 === uS.length && HS.placeholder && HS.placeholder !== gS && (0, zS.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: HS.placeholder
            })]
          })]
        })
      };
    var yX = gS(1471),
      VX = gS(3562);
    const iX = function() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        return HS.map(IS.h)
      },
      WX = (SS, HS) => {
        const gS = Bg(SS);
        return gS ? [{
          glyphs: [gS],
          labelKey: HS
        }] : []
      },
      zX = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      UX = "--pad-hint-bar-clearance",
      pX = "[data-pad-hint-bar-avoid]",
      sX = SS => {
        const HS = [];
        for (const gS of SS)(0, eS.u)(gS) && HS.push(gS.getBoundingClientRect());
        return HS
      },
      BX = SS => {
        if (!SS) return null;
        const HS = ut(),
          gS = HS ? sX(((SS, HS) => {
            const gS = SS.closest(pX);
            return gS ? [gS] : ("popup" === HS ? document : SS).querySelectorAll(pX)
          })(HS.root, HS.layer.kind)) : [],
          tS = !HS || HS.root.hasAttribute("data-pad-shows-hud");
        if (((0, VX.i)(null === HS || void 0 === HS ? void 0 : HS.layer.kind, (0, VX.k)()) || tS) && gS.push(...sX(document.querySelectorAll(zX.join(",")))), 0 === gS.length) return null;
        const {
          width: bS,
          height: XS
        } = SS.getBoundingClientRect(), xS = window.innerHeight - 8, NS = (0, VX.n)(xS, {
          width: bS,
          height: XS
        }, window.innerWidth / 2, gS, 8);
        return NS === xS ? null : Math.round(window.innerHeight - NS)
      },
      MX = SS => {
        const HS = document.documentElement.style,
          gS = SS ? `${Math.round(window.innerHeight-SS.getBoundingClientRect().top)}px` : "";
        HS.getPropertyValue(UX) !== gS && (gS ? HS.setProperty(UX, gS) : HS.removeProperty(UX))
      },
      FX = () => {
        const {
          t: SS
        } = (0, bS.F)(), {
          hideButtonHints: HS
        } = (0, kS.l)(), gS = (0, aS.z)(), [tS, XS] = (0, VS.useState)(!1), [xS, uS] = (0, VS.useState)([]), [jS, GS] = (0, VS.useState)(null), CS = (0, VS.useRef)(null), nS = (0, VS.useRef)(null);
        (0, Gb.g)(nX.e, (SS => {
          XS(SS)
        })), (0, Gb.g)(VX.m, (() => {
          var SS;
          null === (SS = nS.current) || void 0 === SS || SS.call(nS)
        }));
        const PS = gS && !HS && !tS;
        return (0, VS.useEffect)((() => {
          if (!PS) return;
          let SS = null;
          const HS = () => {
            const HS = (() => {
                var SS;
                const HS = fS.e.getActiveConsumerName(),
                  gS = (0, VX.f)();
                if (gS) {
                  const SS = (0, IS.h)(gS),
                    HS = "emoteWheel" === gS && "wheel" === (0, kS.f)().emoteButton || !(0, KS.L)(fS.e.getLastFrame().values, SS) ? {
                      glyphs: iX("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [SS],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, IS.r)(SS)],
                    labelKey: "controller:wheelChoose"
                  }, HS, {
                    glyphs: iX("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const tS = ut();
                if (!tS || "focus" !== HS && "cursor" !== HS) return (0, VX.b)(IS.h);
                const bS = [],
                  XS = {
                    glyphs: iX("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  xS = (0, MS.u)(tS.root),
                  NS = xS ? !(0, eS.y)(xS) : Boolean(tS.layer.close),
                  uS = !xS && tS.layer.closeLabelKey ? tS.layer.closeLabelKey : XS.labelKey,
                  aS = NS ? [{
                    ...XS,
                    labelKey: uS
                  }] : [],
                  jS = Eg(tS.layer.kind) ? [{
                    glyphs: iX("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === HS) return bS.push({
                  glyphs: iX("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), bS.push({
                  glyphs: iX("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), bS.push(...aS), bS.push(...jS), bS.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), Jt() && bS.push({
                  glyphs: iX("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), bS;
                const GS = rt.getFocused();
                GS && (0, Et.e)(GS) ? bS.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : GS && (0, MS.E)(GS) ? bS.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : bS.push({
                  glyphs: iX("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const CS = GS ? null === (SS = kg(GS)) || void 0 === SS ? void 0 : SS.dataset.padSecondary : void 0;
                CS && bS.push({
                  glyphs: iX("menuSecondary"),
                  labelKey: CS
                }), bS.push(...null !== GS && void 0 !== GS && GS.closest("[data-pad-friends-column]") ? [XS] : aS), bS.push(...jS);
                const nS = "home" === tS.layer.kind;
                Rg(tS.root) || !yg(tS.root) && !Tg(tS) ? nS && bS.push({
                  glyphs: iX("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : bS.push({
                  glyphs: iX("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), nS && (bS.push(...WX("inventory", "controller:menusFriends")), CS || bS.push({
                  glyphs: iX("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), bS.push(...WX("pause", "controller:menusSettings")), bS.push(...WX("leaderboard", "controller:menusNotifications")));
                const PS = qS.b.get("openEverythingMenuName");
                return "inGame" === qS.b.get("gameState") && "popup" !== tS.layer.kind && null !== PS && ((0, qg.j)(PS) ? bS.push(...WX("leaderboard", "controller:menusClose")) : PS !== Ng.q.LOBBY_LEADERBOARD && bS.push(...WX("leaderboard", "controller:menusLobby"))), bS.push({
                  glyphs: iX("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), bS
              })(),
              gS = BX(CS.current),
              tS = ((SS, HS) => `${SS.map((SS=>`${SS.glyphs.join("+")}:${SS.labelKey}`)).join("|")}@${HS}`)(HS, gS);
            tS !== SS && (SS = tS, (0, NS.unstable_batchedUpdates)((() => {
              uS(HS), GS(gS)
            }))), MX(CS.current)
          };
          HS(), nS.current = HS;
          const gS = requestAnimationFrame(HS),
            tS = setInterval(HS, 150);
          return () => {
            nS.current = null, cancelAnimationFrame(gS), clearInterval(tS), MX(null)
          }
        }), [PS]), (0, VS.useLayoutEffect)((() => {
          if (!PS) return;
          if (0 === xS.length) return void MX(null);
          const SS = BX(CS.current);
          SS === jS ? MX(CS.current) : GS(SS)
        }), [PS, xS, jS]), PS && 0 !== xS.length ? (0, zS.jsx)("div", {
          ref: CS,
          className: "PadButtonHintBar SmallTextBold",
          style: null === jS ? void 0 : {
            bottom: jS
          },
          "aria-hidden": !0,
          children: xS.map((HS => (0, zS.jsxs)("div", {
            className: "PadButtonHint",
            children: [HS.glyphs.map((SS => (0, zS.jsx)(wb, {
              glyph: SS,
              className: "PadButtonHintGlyph"
            }, SS))), (0, zS.jsx)("span", {
              children: SS(HS.labelKey)
            })]
          }, HS.labelKey)))
        }) : null
      };
    var RX = gS(1846);
    const TX = [eS.d, "label", "[data-pad-slider]"].join(","),
      oX = "data-pad-cursor-probe",
      lX = SS => {
        var HS;
        const gS = (SS => {
          const HS = [];
          for (let tS = SS; tS && tS !== document.body && tS !== document.documentElement && (HS.push(tS), !(HS.length > 8)); tS = tS.parentElement);
          const gS = document.documentElement.classList.contains(aS.r) ? HS[HS.length - 1] : void 0;
          null === gS || void 0 === gS || gS.setAttribute(oX, "");
          try {
            return HS.map((SS => ({
              element: SS,
              cursor: getComputedStyle(SS).cursor
            })))
          } finally {
            null === gS || void 0 === gS || gS.removeAttribute(oX)
          }
        })(SS);
        if ("pointer" !== (null === (HS = gS[0]) || void 0 === HS ? void 0 : HS.cursor)) return null;
        let tS = 0;
        for (; tS + 1 < gS.length && "pointer" === gS[tS + 1].cursor;) tS++;
        return gS[tS].element
      },
      mX = (SS, HS, gS, tS) => {
        const bS = tS.root.contains(SS) ? tS.root : null;
        for (let XS = SS; XS && XS !== document.body && XS !== document.documentElement; XS = XS.parentElement) {
          if (XS instanceof HTMLElement && OS(XS, HS) && LS(XS, HS, gS)) return XS;
          if (XS === bS) break
        }
        return "home" === tS.layer.kind || "gamePage" === tS.layer.kind ? ((SS, HS) => {
          const gS = document.scrollingElement;
          return gS instanceof HTMLElement && ![document.documentElement, document.body].some((HS => {
            const gS = getComputedStyle(HS),
              tS = "y" === SS ? gS.overflowY : gS.overflowX;
            return "hidden" === tS || "clip" === tS
          })) && LS(gS, SS, HS) ? gS : null
        })(HS, gS) : null
      };
    const eX = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, jS.d)(KS.r), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const SS = fS.e.register({
              name: "cursor",
              isActive: () => "cursor" === Ot(),
              onFrame: SS => {
                this.onFrame(SS)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: SS => (0, fS.h)(SS) || SS === (0, IS.h)("menuConfirm") && (0, MS.G)((0, aS.d)())
            }),
            HS = (0, Ht.j)((SS => {
              const HS = SS.getRoot();
              HS && this.layerPoints.delete(HS), HS === this.layerRoot && (this.layerRoot = null)
            })),
            gS = uS.k.subscribe("appManagerUpdated|activeInputDevice", (SS => {
              "gamepad" !== SS && this.active && !this.hidden && this.hide()
            }));
          return () => {
            SS(), HS(), uS.k.unsubscribe(gS), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, aS.m)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.cj()
        }
        activate(SS) {
          this.active = !0, this.hidden = !1;
          const HS = wt();
          !HS || HS.root && HS.root !== SS.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(SS), this.jumpTo(HS.point))
        }
        jumpTo(SS) {
          this.state = {
            x: SS.x,
            y: SS.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.cj())
        }
        onFrame(SS) {
          const HS = ut();
          if (!HS) return;
          if (this.active || this.activate(HS), this.followPage(HS)) return;
          this.followLayer(HS);
          const gS = SS.wokeDevice ? (0, aS.d)() : null;
          if (gS && this.jumpTo(gS), !(0, aS.m)()) return void this.hide();
          const tS = (0, IS.h)("menuToggleCursor");
          if (SS.wasPressed(tS)) return fS.e.consumeButton(tS), void Dt(this.getHandoff(null));
          if (this.handBackToFocus(SS)) return;
          const bS = (0, IS.h)("menuConfirm"),
            XS = (0, IS.h)("menuSecondary");
          if (SS.wasPressed((0, IS.h)("menuBack"))) return (0, MS.g)(HS.root) || (0, MS.d)(HS.root) || It(), void this.cj();
          if (mg(null, SS, HS)) return SS.wasReleased(bS) && this.press && (this.updateHit(!1), this.updateConfirm(SS, bS)), void this.cj();
          if (document.pointerLockElement) return void this.hide();
          const xS = dt() ? {
              x: 0,
              y: 0
            } : (SS => {
              const HS = (SS, HS) => (SS ? 1 : 0) - (HS ? 1 : 0);
              return {
                x: HS(SS.isHeld("Right"), SS.isHeld("Left")),
                y: HS(SS.isHeld("Down"), SS.isHeld("Up"))
              }
            })(SS),
            NS = (0, kS.f)().moveDeadzone,
            qS = ((SS, HS) => {
              const gS = (0, KS.l)(SS, QS(HS));
              return Math.hypot(gS.x, gS.y)
            })(SS.leftStick, NS) > 0 || 0 !== xS.x || 0 !== xS.y;
          if (this.hidden) {
            const HS = SS.wasPressed(bS),
              gS = SS.wasPressed(XS);
            if (!qS && !hS(SS.rightStick) && !HS && !gS && !SS.wokeDevice) return void this.cj();
            if (this.hidden = !1, this.updateHit(!1), HS || gS) return HS && (this.press = {
              kind: "ignored"
            }, SS.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.cj()
          }
          this.movePendingPageStart(qS);
          const uS = this.getPoint();
          this.state = wS(this.state, {
            stick: SS.leftStick,
            moveDeadzone: NS,
            dpad: xS,
            dtMs: SS.dtMs,
            cursorSpeedPercent: (0, kS.f)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const jS = this.state.x !== uS.x || this.state.y !== uS.y,
            GS = [bS, XS].some((HS => SS.wasPressed(HS) || SS.wasReleased(HS)));
          (jS || GS || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(jS), this.updateConfirm(SS, bS), this.updateSecondary(SS, XS), this.updateScroll(SS, HS), this.cj()
        }
        followPage(SS) {
          const HS = "home" === SS.layer.kind || "gamePage" === SS.layer.kind,
            gS = this.page;
          if (this.page = HS ? {
              key: (0, Ht.o)(SS.layer),
              root: SS.root
            } : null, !this.page || !gS || gS.root !== SS.root || gS.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(SS), "hybrid" === Qt()) return Ct = null, jt = null, nt.lock(), !0;
          const {
            key: tS
          } = this.page;
          return this.pendingPageStart = {
            root: SS.root,
            key: tS,
            returning: rt.notePageEnteredByCursor(tS),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(SS) {
          const HS = this.pendingPageStart;
          if (!HS) return;
          if (SS || HS.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const gS = HS.returning ? rt.recallStop(HS.root, HS.key) : null;
          if (!gS && HS.returning && performance.now() - HS.enteredAtMs < 1e3) return;
          const tS = null !== gS && void 0 !== gS ? gS : rt.pickInitial(HS.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: HS.enteredAtMs
          });
          tS && (this.pendingPageStart = null, this.jumpTo((0, MS.x)(tS)))
        }
        setLayer(SS) {
          this.layerRoot = SS.root, this.layerOrder = SS.order
        }
        followLayer(SS) {
          var HS;
          if (SS.root === this.layerRoot) return;
          null !== (HS = this.layerRoot) && void 0 !== HS && HS.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const gS = this.layerPoints.get(SS.root),
            tS = gS && SS.order <= this.layerOrder ? gS : rt.getLayerStartPoint(SS.root);
          this.setLayer(SS), this.jumpTo(tS)
        }
        getHandoff(SS) {
          var HS;
          return {
            point: this.getPoint(),
            element: null !== (HS = this.interactive) && void 0 !== HS ? HS : this.findDraggedSliderNearby(),
            direction: SS
          }
        }
        findDraggedSliderNearby() {
          const SS = this.draggedSlider;
          if (null === SS || void 0 === SS || !SS.isConnected) return null;
          const HS = SS.getBoundingClientRect(),
            {
              y: gS
            } = this.getPoint();
          return gS >= HS.top - 40 && gS <= HS.bottom + 40 ? SS : null
        }
        handBackToFocus(SS) {
          if (!dt()) return !1;
          const HS = KS.A.find((HS => SS.wasPressed(HS)));
          return !!HS && (gS = this.getHandoff(HS), Ct = kt(gS), jt = null, nt.lock(), fS.e.handOffHeldInput(), !0);
          var gS
        }
        getAssistContext() {
          const SS = this.interactive;
          if (null === SS || void 0 === SS || !SS.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const HS = SS.getBoundingClientRect();
          if (HS.width > .4 * window.innerWidth || HS.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const gS = (0, kS.f)().cursorMagnetism && !(0, RX.d)(SS) && !SS.closest("[data-pad-slider]"),
            tS = this.magnet && this.magnet !== SS && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : HS;
          return {
            overInteractive: !0,
            magnetTarget: gS ? {
              x: tS.left + tS.width / 2,
              y: tS.top + tS.height / 2
            } : null
          }
        }
        updateHit(SS) {
          this.lastHitTestMs = performance.now();
          const HS = this.getPoint(),
            gS = document.elementFromPoint(HS.x, HS.y),
            tS = gS && !(0, CS.n)(gS) && (SS => {
              var HS;
              const gS = ut();
              return !(gS && !gS.root.contains(SS) && !SS.closest(".tooltip-container")) || !(null !== (HS = document.getElementById("root")) && void 0 !== HS && HS.contains(SS))
            })(gS) ? gS : null;
          if (tS !== this.hit) return (0, MS.k)(this.hit, tS, HS), this.hit = tS, void this.setInteractive(tS ? (SS => {
            const HS = SS.closest(TX);
            if (HS) {
              var gS, tS;
              const SS = null !== (gS = null === (tS = HS.parentElement) || void 0 === tS ? void 0 : tS.closest("[data-pad-focusable]")) && void 0 !== gS ? gS : HS;
              return (0, eS.y)(SS) ? {
                element: null,
                magnet: null
              } : {
                element: SS,
                magnet: HS
              }
            }
            const bS = lX(SS);
            return {
              element: bS,
              magnet: bS
            }
          })(tS) : {
            element: null,
            magnet: null
          });
          SS && tS && (0, MS.k)(tS, tS, HS)
        }
        setInteractive(SS) {
          let {
            element: HS,
            magnet: gS
          } = SS;
          this.interactive = HS, this.magnet = gS
        }
        clearHover() {
          this.hit && (0, MS.k)(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const SS = this.hit;
          if (!SS || (0, MS.E)(SS)) return {
            kind: "ignored"
          };
          const HS = (0, Et.e)(SS),
            gS = SS.closest("[data-pad-slider]");
          return HS && gS ? {
            kind: "slider",
            slider: gS,
            adjuster: HS
          } : ((0, MS.m)(SS, this.getPoint()), {
            kind: "pointer",
            target: SS
          })
        }
        applySliderFraction(SS) {
          var HS;
          const gS = SS.slider.getBoundingClientRect(),
            tS = gS.height > gS.width,
            bS = null === (HS = SS.slider.querySelector("[data-pad-slider-handle]")) || void 0 === HS ? void 0 : HS.getBoundingClientRect(),
            XS = bS ? tS ? bS.height : bS.width : 0,
            xS = (tS ? gS.height : gS.width) - XS;
          if (xS <= 0) return;
          const NS = tS ? gS.bottom - XS / 2 - this.state.y : this.state.x - gS.left - XS / 2;
          SS.adjuster.setFraction(Math.max(0, Math.min(1, NS / xS)))
        }
        updateConfirm(SS, HS) {
          SS.wasPressed(HS) && (this.press = SS.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const gS = this.press;
          if (!gS) return;
          if (SS.isHeld(HS)) return "slider" === gS.kind && this.applySliderFraction(gS), void this.updateRepeat();
          this.press = null;
          const tS = this.repeated;
          if (this.endRepeat(), !SS.wasReleased(HS)) return void this.endPressWithoutClick(gS);
          const bS = this.getPoint(),
            XS = this.hit;
          if ("slider" === gS.kind && gS.adjuster.endDrag(), "pointer" === gS.kind) {
            const SS = null !== XS && void 0 !== XS ? XS : gS.target.isConnected ? gS.target : null;
            SS && (0, MS.q)(SS, bS);
            const HS = XS && gS.target.isConnected && !tS ? ((SS, HS) => {
              for (let gS = SS; gS; gS = gS.parentElement)
                if (gS.contains(HS)) return gS;
              return null
            })(gS.target, XS) : null;
            HS && (rt.noteCursorActivation(HS), (0, CS.g)(HS, new MouseEvent("click", (0, MS.O)(bS, 0, 0))), (0, MS.e)(HS), (0, MS.K)(HS) && (0, MS.H)(HS))
          }
        }
        beginRepeat() {
          var SS, HS, gS;
          const tS = null !== (SS = null === (HS = this.hit) || void 0 === HS ? void 0 : HS.closest("[data-pad-repeat]")) && void 0 !== SS ? SS : null;
          this.repeatStop = tS, this.repeatKey = null !== (gS = null === tS || void 0 === tS ? void 0 : tS.getAttribute("data-pad-repeat")) && void 0 !== gS ? gS : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const SS = this.repeatStop;
          if (!SS) return;
          const HS = this.hit;
          SS.isConnected && !(0, eS.y)(SS) && SS.getAttribute("data-pad-repeat") === this.repeatKey && HS && SS.contains(HS) ? SS.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, rt.noteCursorActivation(SS), (0, CS.g)(SS, new MouseEvent("click", (0, MS.O)(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(SS) {
          "slider" === SS.kind && SS.adjuster.endDrag(), "pointer" === SS.kind && SS.target.isConnected && (0, MS.q)(SS.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(SS, HS) {
          SS.wasPressed(HS) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !SS.isHeld(HS) && (this.secondaryArmed = !1, SS.wasReleased(HS) && this.hit && (0, MS.j)(this.hit, this.getPoint(), 2))
        }
        updateScroll(SS, HS) {
          const gS = ZS(SS.rightStick, SS.dtMs);
          if (0 === gS.x && 0 === gS.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + gS.x,
            y: this.scrollRemainder.y + gS.y
          };
          const tS = Math.trunc(this.scrollRemainder.x),
            bS = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - tS,
            y: this.scrollRemainder.y - bS
          };
          const XS = this.hit;
          if (!XS) return;
          let xS = !1;
          if (0 !== bS) {
            const SS = mX(XS, "y", bS > 0 ? 1 : -1, HS);
            SS && (SS.scrollBy({
              top: bS,
              behavior: "instant"
            }), xS = !0)
          }
          if (0 !== tS) {
            const SS = mX(XS, "x", tS > 0 ? 1 : -1, HS);
            SS && (SS.scrollBy({
              left: tS,
              behavior: "instant"
            }), xS = !0)
          }
          xS && (this.lastHitTestMs = -1 / 0)
        }
        cj() {
          RS.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      rX = () => {
        const SS = (0, VS.useMemo)((() => new sS), []),
          HS = (0, aS.z)();
        return (0, VS.useEffect)((() => {
          if (!HS) return;
          let gS = 0,
            tS = {
              of: null,
              atMs: 0,
              list: []
            };
          const bS = document.getElementsByClassName(ct),
            XS = SS => {
              for (const HS of [...bS]) HS !== SS && HS.classList.remove(ct)
            },
            xS = () => {
              var HS;
              gS = requestAnimationFrame(xS);
              const bS = (() => {
                const SS = rt.getFocused();
                if (rt.isActive() && null !== SS && void 0 !== SS && SS.isConnected) return SS;
                const HS = eX.getHighlighted();
                return null !== HS && void 0 !== HS && HS.isConnected ? HS : null
              })();
              XS(bS), bS && !bS.classList.contains(ct) && bS.classList.add(ct);
              const NS = null !== (HS = null === bS || void 0 === bS ? void 0 : bS.closest("[data-pad-reticle-box]")) && void 0 !== HS ? HS : bS;
              SS.show(NS ? ((SS, HS) => {
                let gS = SS.left,
                  tS = SS.top,
                  bS = SS.right,
                  XS = SS.bottom;
                for (const xS of HS) {
                  if (!xS) continue;
                  const SS = AS(xS);
                  gS = Math.max(gS, SS.left), tS = Math.max(tS, SS.top), bS = Math.min(bS, SS.right), XS = Math.min(XS, SS.bottom)
                }
                return bS <= gS || XS <= tS ? null : {
                  left: gS,
                  top: tS,
                  width: bS - gS,
                  height: XS - tS
                }
              })(NS.getBoundingClientRect(), (SS => {
                const HS = performance.now();
                return (tS.of !== SS || HS - tS.atMs > 500) && (tS = {
                  of: SS,
                  atMs: HS,
                  list: [dS(SS, "y"), dS(SS, "x")]
                }), tS.list
              })(NS)) : null)
            };
          return gS = requestAnimationFrame(xS), () => {
            cancelAnimationFrame(gS), XS(null), SS.hide()
          }
        }), [HS, SS]), (0, zS.jsx)(BS, {
          placer: SS,
          className: "PadFocusRing"
        })
      },
      Sx = (SS, HS) => {
        SS.style.transform = `translate3d(${HS.x}px, ${HS.y}px, 0)`, SS.classList.toggle("Visible", HS.visible), SS.classList.toggle("Pressed", HS.pressed)
      },
      Hx = () => {
        const SS = (0, VS.useRef)(null);
        return (0, VS.useEffect)((() => {
          const HS = RS.subscribe((HS => {
            SS.current && Sx(SS.current, HS)
          }));
          return SS.current && Sx(SS.current, RS.get()), HS
        }), []), (0, zS.jsx)("div", {
          ref: SS,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, zS.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      gx = "#ncmp__modal.ncmp__active",
      tx = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(gx) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(gx),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      bx = "PadOverThirdParty",
      Xx = new Set(tx.map((SS => SS.id))),
      xx = () => {
        const SS = tx.map((SS => {
            let {
              id: HS,
              find: gS,
              startSelectors: tS
            } = SS;
            return (0, Ht.k)({
              id: HS,
              kind: "popup",
              getRoot: () => {
                const SS = gS(),
                  HS = SS ? ((SS, HS) => {
                    var gS;
                    for (const tS of HS) {
                      const HS = SS.querySelector(tS);
                      if (HS) return HS
                    }
                    return null !== (gS = [...SS.querySelectorAll("button")].find((SS => !SS.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== gS ? gS : null
                  })(SS, tS) : null;
                if (SS && HS && !HS.hasAttribute("data-pad-default-focus")) {
                  for (const HS of SS.querySelectorAll("[data-pad-default-focus]")) HS.removeAttribute("data-pad-default-focus");
                  for (const HS of SS.querySelectorAll("[data-pad-hint-bar-avoid]")) HS.removeAttribute("data-pad-hint-bar-avoid");
                  HS.setAttribute("data-pad-default-focus", ""), ((SS, HS) => {
                    let gS = SS;
                    for (let tS = SS.parentElement; tS && HS.contains(tS) && !(tS.getBoundingClientRect().height >= window.innerHeight / 2); tS = tS.parentElement) gS = tS;
                    return gS
                  })(HS, SS).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return SS
              },
              close: null,
              memoryKey: null
            })
          })),
          HS = document.documentElement,
          gS = xS.g.onFrame((() => {
            const SS = (0, aS.m)() ? ut() : null,
              gS = !!SS && (tS = SS.layer, Xx.has(tS.id));
            var tS;
            HS.classList.contains(bx) !== gS && HS.classList.toggle(bx, gS)
          }));
        return () => {
          for (const HS of SS) HS();
          gS(), HS.classList.remove(bx)
        }
      },
      Nx = "PadLargePointer",
      qx = () => {
        (0, VS.useEffect)((() => {
          const SS = (0, CS.j)(document.body),
            HS = rt.install(),
            gS = eX.install(),
            tS = xx();
          return () => {
            SS(), HS(), gS(), tS()
          }
        }), []);
        const {
          largePointer: SS
        } = (0, kS.l)(), HS = (0, yX.o)() && SS;
        return (0, VS.useEffect)((() => {
          if (HS) return document.documentElement.classList.add(Nx), () => {
            document.documentElement.classList.remove(Nx)
          }
        }), [HS]), (0, NS.createPortal)((0, zS.jsxs)(zS.Fragment, {
          children: [(0, zS.jsx)(FX, {}), (0, zS.jsx)(rX, {}), (0, zS.jsx)(Hx, {})]
        }), document.body)
      };
    var ux = gS(8988),
      Ix = gS(9012),
      fx = gS(8998);
    gS(9014);
    const kx = (SS, HS) => {
        const [gS, tS] = (0, VS.useState)(!1), [bS, XS] = (0, VS.useState)(null), xS = (0, VS.useRef)(null), NS = (0, VS.useCallback)((SS => {
          xS.current = SS, XS(SS)
        }), []), qS = (0, VS.useCallback)((() => {
          tS(!1), NS(null)
        }), [NS]), IS = (0, VS.useCallback)((() => {
          tS(!0)
        }), []), fS = (0, VS.useCallback)(((SS, HS) => {
          NS((0, fx.J)(SS, HS, xS.current))
        }), [NS]);
        (0, VS.useLayoutEffect)((() => (HS(gS), (0, VX.t)(SS, gS), uS.k.cj(VX.m), () => {
          HS(!1), (0, VX.t)(SS, !1), uS.k.cj(VX.m)
        })), [gS, SS, HS]), (0, Gb.g)("appManagerUpdated|activeInputDevice", (SS => {
          "gamepad" !== SS && qS()
        })), (0, Gb.g)("appManagerUpdated|gameState", (SS => {
          "inGame" !== SS && qS()
        }));
        const kS = () => {
          (0, qg.l)() && qS()
        };
        return (0, Gb.g)("appManagerUpdated|openEverythingMenuName", kS), (0, Gb.g)("appManagerUpdated|openInGameMenuName", kS), {
          open: gS,
          picked: bS,
          pickedRef: xS,
          show: IS,
          aim: fS,
          close: qS
        }
      },
      ax = SS => {
        let {
          className: HS,
          slotCount: gS,
          picked: tS,
          slotLabel: bS,
          renderSlot: XS,
          centre: xS
        } = SS;
        const NS = Array.from({
          length: gS
        }, ((SS, HS) => HS));
        return (0, zS.jsx)("div", {
          className: WS()("EmoteWheelOverlay PadRadialWheel", HS),
          children: (0, zS.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * fx.w + "rem",
              height: 2 * fx.w + "rem"
            },
            children: [(0, zS.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${fx.r} ${fx.r}`,
              children: [NS.map((SS => (0, zS.jsx)("path", {
                d: (0, fx.z)(SS, gS, fx.h, fx.l, fx.o),
                className: WS()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: SS === tS
                }),
                "aria-label": bS(SS)
              }, SS))), (0, zS.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: fx.h,
                cy: fx.h,
                r: fx.o
              }), (0, zS.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: fx.h,
                cy: fx.h,
                r: fx.l
              }), null !== tS && (0, zS.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, fx.z)(tS, gS, fx.h, fx.l, fx.o)
              })]
            }), NS.map((SS => {
              const HS = (0, fx.D)(SS, gS);
              return (0, zS.jsx)("div", {
                className: WS()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: SS === tS
                }),
                style: {
                  left: `calc(50% + ${fx.d*Math.cos(HS)}rem)`,
                  top: `calc(50% + ${fx.d*Math.sin(HS)}rem)`
                },
                "aria-hidden": !0,
                children: XS(SS)
              }, SS)
            })), (0, zS.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: xS
            })]
          })
        })
      },
      Kx = IX.length,
      jx = () => {
        const {
          t: SS
        } = (0, bS.F)(), HS = kx("chat", vg.l), gS = (0, VS.useMemo)((() => IX.map((HS => SS(HS)))), [SS]);
        return (0, Gb.g)(vg.k, (() => {
          HS.open || (0, ux.h)() || (0, Ix.q)() || "inGame" !== qS.b.get("gameState") || (0, qg.l)() || !(0, dg.e)() || HS.show()
        })), (0, Gb.g)(vg.d, (SS => {
          HS.open && HS.aim(SS, Kx)
        })), (0, Gb.g)(vg.j, (() => {
          var SS;
          if (!HS.open) return;
          const tS = HS.pickedRef.current;
          null !== tS ? fX.claim(performance.now()) && (HS.close(), null === (SS = (0, dg.e)()) || void 0 === SS || SS.sendLine(gS[tS])) : HS.close()
        })), (0, Gb.g)(vg.h, HS.close), HS.open ? (0, zS.jsx)(ax, {
          className: "QuickChatWheel",
          slotCount: Kx,
          picked: HS.picked,
          slotLabel: SS => gS[SS],
          renderSlot: SS => gS[SS],
          centre: null !== HS.picked ? gS[HS.picked] : SS("controller:quickChatPick")
        }) : null
      },
      Gx = () => {
        const {
          t: SS
        } = (0, bS.F)(), HS = kx("actionButton", Ix.r), [gS, tS] = (0, VS.useState)([]);
        if ((0, Gb.g)(Ix.l, (SS => {
            HS.open || (0, ux.h)() || (0, vg.b)() || "inGame" !== qS.b.get("gameState") || (0, qg.l)() || (tS(SS), HS.show())
          })), (0, Gb.g)(Ix.c, (SS => {
            HS.open && HS.aim(SS, gS.length)
          })), (0, Gb.g)(Ix.k, (() => {
            if (!HS.open) return;
            const SS = HS.pickedRef.current;
            HS.close(), null !== SS && uS.k.cj(Ix.n, gS[SS])
          })), (0, Gb.g)(Ix.g, HS.close), !HS.open) return null;
        const XS = null !== HS.picked ? gS[HS.picked] : null;
        return (0, zS.jsx)(ax, {
          className: "ActionWheel",
          slotCount: gS.length,
          picked: HS.picked,
          slotLabel: HS => {
            const tS = gS[HS];
            return "reload" === tS.kind ? SS("controller:gameplayReload") : "customButton" === tS.kind ? tS.description || tS.icon : "touchButton" === tS.kind && "string" === typeof tS.label ? tS.label : ""
          },
          renderSlot: SS => (0, zS.jsx)(Zb, {
            action: gS[SS]
          }),
          centre: XS ? (0, zS.jsx)(Zb, {
            action: XS
          }) : SS("controller:actionWheelPick")
        })
      };
    var Cx = gS(104);
    const nx = () => ((0, VS.useEffect)((() => {
        var SS, HS;
        const gS = (0, CS.j)(document.getElementById("root")),
          tS = (0, aS.g)(),
          bS = (() => {
            const SS = [uS.k.subscribe(Hb.i, (() => {
                Xb("blockBreak")
              })), uS.k.subscribe("damagedByOtherPlayer", (() => {
                Xb("damage")
              })), uS.k.subscribe("yourAttackHit", (SS => {
                let {
                  hitSelf: HS
                } = SS;
                HS || Xb("hit")
              }))],
              HS = xS.g.onActivePadChanged((SS => {
                SS && Xb("connect")
              }));
            return () => {
              for (const HS of SS) uS.k.unsubscribe(HS);
              HS()
            }
          })(),
          XS = (() => {
            const SS = new fb({
              getVisitId: Ib.g,
              peekVisitId: Ib.peekVisitSessionId,
              readReportedVisitId: () => {
                const SS = ub.h.getItem(kb);
                return "string" === typeof SS ? SS : null
              },
              writeReportedVisitId: SS => {
                ub.h.setItem(kb, SS)
              },
              isPadActive: aS.m,
              getPadFamily: () => {
                var SS, HS;
                return null !== (SS = null === (HS = xS.g.getActivePad()) || void 0 === HS ? void 0 : HS.family) && void 0 !== SS ? SS : null
              },
              canReport: Nb.g,
              getInputType: qb.c,
              tK: Nb.l
            });
            let HS = 0,
              gS = null;
            const tS = bS => {
                null === gS && ("notReady" !== SS.check(bS) || null !== gS || HS >= 20 || (HS++, gS = setTimeout((() => {
                  gS = null, tS(!1)
                }), 3e3)))
              },
              bS = uS.k.subscribe("appManagerUpdated|activeInputDevice", (() => {
                tS(!0)
              })),
              XS = (0, Ib.o)((() => {
                HS = 0, tS(!0)
              }));
            return () => {
              uS.k.unsubscribe(bS), XS(), null !== gS && clearTimeout(gS)
            }
          })(),
          NS = xS.g.onFrame(((SS, HS) => {
            const gS = (0, aS.o)(SS);
            fS.e.dispatch(SS, HS, gS)
          }));
        let IS = null !== (SS = null === (HS = xS.g.getActivePad()) || void 0 === HS ? void 0 : HS.family) && void 0 !== SS ? SS : null;
        const KS = xS.g.onActivePadChanged((SS => {
            var HS, gS;
            (fS.e.reset(), (0, aS.v)(), uS.k.cj(xS.e, SS), (null !== (HS = null === SS || void 0 === SS ? void 0 : SS.family) && void 0 !== HS ? HS : null) !== IS) && (IS = null !== (gS = null === SS || void 0 === SS ? void 0 : SS.family) && void 0 !== gS ? gS : null, uS.k.cj(kS.d, (0, kS.f)()));
            !SS && (0, aS.m)() && (0, aS.x)(qS.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          jS = () => {
            "visible" !== document.visibilityState && fS.e.clear()
          },
          GS = () => {
            fS.e.clear()
          };
        document.addEventListener("visibilitychange", jS), window.addEventListener("blur", GS), xS.g.start(), (0, xb.i)();
        const nS = null;
        return () => {
          gS(), tS(), bS(), XS(), NS(), KS(), document.removeEventListener("visibilitychange", jS), window.removeEventListener("blur", GS), xS.g.stop(), null === nS || void 0 === nS || nS()
        }
      }), []), (0, zS.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, zS.jsx)(Lb, {}), (0, zS.jsx)(pb, {}), (0, zS.jsx)(sb, {}), (0, zS.jsx)(YX, {}), (0, zS.jsx)(qx, {}), (0, zS.jsx)(jx, {}), (0, zS.jsx)(Gx, {})]
      })),
      Px = () => Cx.featureFlags.useControllerSupport ? (0, zS.jsx)(nx, {}) : null;
    var Qx = gS(8361),
      Dx = gS(9023);
    const wx = new Set(xb.h),
      hx = SS => `${Dx.q}${(0,kS.g)()}/${SS}`,
      Zx = SS => {
        if (!(0, Dx.n)(SS)) return null;
        const [HS, gS] = SS.slice(Dx.q.length).split("/");
        return (0, Qx.d)(HS) && wx.has(gS) ? (0, xb.d)(HS, gS) : null
      };
    var Jx = gS(9025);
    const Ox = () => {
        const {
          t: SS
        } = (0, bS.F)(), HS = (0, aS.z)(), {
          gameState: gS,
          isUiHidden: tS
        } = (0, qS.m)(["gameState", "isUiHidden"]), {
          hideButtonHints: XS,
          sneakMode: xS
        } = (0, kS.l)(), [NS, uS] = (0, VS.useState)(Jx.b);
        return (0, Gb.g)(Eb.r, uS), HS && !tS && "inGame" === gS && NS ? (0, zS.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!XS && (0, zS.jsx)(wb, {
            glyph: (0, IS.h)("toggle" === xS ? "sneak" : "sneakToggle")
          }), (0, zS.jsx)("span", {
            children: SS("controller:gameplaySneaking")
          })]
        }) : null
      },
      dx = 12,
      cx = SS => {
        let {
          trigger: HS,
          className: gS,
          children: tS
        } = SS;
        const bS = (0, VS.useRef)(null);
        return (0, VS.useEffect)((() => {
          let SS = 0;
          const gS = dS(HS, "y"),
            tS = () => {
              SS = requestAnimationFrame(tS);
              const XS = bS.current;
              if (!XS || null === HS || void 0 === HS || !HS.isConnected) return;
              const {
                left: xS,
                top: NS
              } = function(SS, HS, gS) {
                let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const XS = SS.left + SS.width / 2,
                  xS = Math.max(dx, gS.width - dx - HS.width),
                  NS = Math.min(Math.max(XS - HS.width / 2, dx), xS),
                  qS = gS.height - tS;
                let uS = 0,
                  IS = qS;
                if (bS) {
                  const SS = Math.max(0, bS.top),
                    tS = Math.min(qS, bS.bottom);
                  tS - SS >= Math.max(gS.height / 2, HS.height + 24) && (uS = SS, IS = tS)
                }
                const fS = SS.top + SS.height / 2 < (uS + IS) / 2 ? IS - dx - HS.height : uS + dx;
                return {
                  left: NS,
                  top: Math.max(dx, fS)
                }
              }(HS.getBoundingClientRect(), {
                width: XS.offsetWidth,
                height: XS.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(UX)) || 0, null !== gS && void 0 !== gS && gS.isConnected ? gS.getBoundingClientRect() : null);
              XS.style.transform = `translate3d(${Math.round(xS)}px, ${Math.round(NS)}px, 0)`, XS.style.visibility = "visible"
            };
          return tS(), () => {
            cancelAnimationFrame(SS)
          }
        }), [HS]), (0, zS.jsx)("div", {
          ref: bS,
          className: gS,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: tS
        })
      };
    var vx = gS(1127),
      Ex = gS(9030),
      Lx = gS(1528),
      Yx = gS(9035),
      Ax = gS(9043);
    const yx = {
        shop: {
          icon: "cart-shopping",
          labelKey: "controller:menusShop"
        },
        tasks: {
          icon: "bars",
          labelKey: "controller:menusTasks"
        },
        invite: {
          icon: "user-plus",
          labelKey: "controller:menusInvite"
        },
        leave: {
          icon: "arrow-left",
          labelKey: "settingsMenu:exitGame"
        }
      },
      Vx = () => {
        const {
          t: SS
        } = (0, bS.F)(), HS = (0, aS.z)(), gS = (0, Ex.b)(), tS = (0, Wb.i)("_tasks"), XS = (0, Wb.i)("_availableLeaderboards");
        if (!HS) return null;
        const xS = (SS => {
          let {
            hasShop: HS,
            hasTasksOrLeaderboards: gS,
            canInvite: tS
          } = SS;
          const bS = [];
          return HS && bS.push("shop"), gS && bS.push("tasks"), tS && bS.push("invite"), bS.push("leave"), bS
        })({
          hasShop: gS,
          hasTasksOrLeaderboards: !(!tS && !XS),
          canInvite: !!Cx.featureFlags.canUseInviteLinks
        });
        return (0, zS.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: xS.map((HS => {
            const {
              icon: gS,
              labelKey: tS
            } = yx[HS], bS = "leave" === HS ? Lx.L : Lx.g;
            return (0, zS.jsx)(bS, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (SS => {
                  switch (SS) {
                    case "shop":
                      return uS.k.cj(Ax.i), void qS.b.set({
                        openEverythingMenuName: Ng.q.SHOP
                      });
                    case "tasks":
                      return void uS.k.cj("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void uS.k.cj("toggleMenu", "inviteLink");
                    case "leave":
                      (0, Yx.c)()
                  }
                })(HS)
              },
              children: (0, zS.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, zS.jsx)(vx.d, {
                  name: gS
                }), (0, zS.jsx)("span", {
                  children: SS(tS)
                })]
              })
            }, HS)
          }))
        })
      };
    var ix = gS(2111);
    const Wx = KS.w,
      zx = ["forward", "backward", "left", "right", "sprint"],
      Ux = SS => SS.ctrlKey || SS.altKey || "Alt" === SS.key || "ArrowUp" === SS.key || "ArrowDown" === SS.key || "Tab" === SS.code || "/" === SS.key || "Slash" === SS.code;
    class px {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(KS.Y).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(SS) {
        this.armed = SS
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || HS ? !SS.repeat && this.swallowedKeys.delete(SS.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(SS.code),
          continues: !1
        } : "Escape" === SS.key || SS.repeat && !this.swallowedKeys.has(SS.code) ? {
          swallow: !1,
          continues: !1
        } : gS ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(SS.code), {
          swallow: !0,
          continues: (0, aS.k)(SS)
        })
      }
      onKeyUp(SS) {
        return this.swallowedKeys.delete(SS.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const bS = (0, KS.q)(SS.values, this.previousHeld),
          XS = null === gS ? -1 : (0, KS.m)(gS),
          xS = XS >= 0 && bS[XS] && !this.previousHeld[XS],
          NS = bS.some(((SS, HS) => SS && !this.previousHeld[HS] && HS !== XS)),
          qS = Math.hypot(SS.leftStick.x, SS.leftStick.y) >= Wx,
          uS = Math.hypot(SS.rightStick.x, SS.rightStick.y) >= Wx,
          IS = qS && !this.leftStickWasPressed || uS && !this.rightStickWasPressed;
        this.previousHeld = bS, this.leftStickWasPressed = qS, this.rightStickWasPressed = uS;
        let fS = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, fS = !0);
        const kS = !HS && xS && !tS,
          aS = !kS && this.armed && !HS && (NS || IS);
        return (kS || aS) && (this.consumeNextFrame = !0, this.consumeAfterContinue = aS, fS = !0), {
          continues: aS,
          back: kS,
          consumeHeld: fS
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const sx = new Set([...ix.l, ...ix.y]),
      Bx = SS => ((SS, HS, gS) => {
        const tS = Object.keys(HS).filter((tS => !gS.has(tS) && HS[tS].includes(SS)));
        return tS.length > 0 && tS.every((SS => zx.includes(SS)))
      })(SS, ix.u, sx),
      Mx = (SS, HS, gS) => {
        const tS = new px,
          bS = SS => {
            if (!SS.isTrusted) return;
            const {
              swallow: gS,
              continues: bS
            } = tS.onKeyDown(SS, !(0, aS.G)(SS) || (0, Sb.e)() || (0, qg.l)(), Bx(SS.code));
            gS && (SS.stopImmediatePropagation(), Ux(SS) && SS.preventDefault()), bS && ((0, aS.x)("keyboardMouse"), HS())
          },
          XS = SS => {
            SS.isTrusted && tS.onKeyUp(SS) && (SS.stopImmediatePropagation(), Ux(SS) && SS.preventDefault())
          },
          NS = () => {
            tS.forgetKeys()
          };
        window.addEventListener("keydown", bS, !0), window.addEventListener("keyup", XS, !0), window.addEventListener("blur", NS);
        const qS = xS.g.onFrame((SS => {
            const bS = fS.e.getActiveConsumerName(),
              XS = gS(),
              xS = XS ? (0, IS.h)("menuBack") : null,
              NS = null !== bS && "gameplay" !== bS,
              {
                continues: qS,
                back: uS,
                consumeHeld: KS
              } = tS.onPadFrame(SS, NS, xS, (0, aS.n)(SS));
            if (KS) {
              const SS = (0, kS.f)().swapSticks ? "right" : "left";
              fS.e.consumeAllHeld(tS.consumeLeavesMoveStick() ? SS : null)
            }
            uS ? null === XS || void 0 === XS || XS() : qS && HS()
          })),
          uS = (0, Sb.h)(`pressToContinue:${SS}`, (() => tS.blocksGameplay()));
        return {
          setArmed: SS => {
            tS.setArmed(SS)
          },
          dispose: () => {
            window.removeEventListener("keydown", bS, !0), window.removeEventListener("keyup", XS, !0), window.removeEventListener("blur", NS), qS(), uS()
          }
        }
      };
    var Fx = gS(5148),
      Rx = gS(3565),
      Tx = gS(3300),
      ox = gS(8369);
    const lx = SS => {
        let {
          text: HS
        } = SS;
        return (0, zS.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: HS
        })
      },
      mx = SS => {
        let {
          label: HS,
          hint: gS,
          options: tS,
          value: XS,
          onChange: xS
        } = SS;
        const {
          t: NS
        } = (0, bS.F)();
        return (0, zS.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, zS.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, zS.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, zS.jsx)("div", {
                className: "SliderText",
                children: HS
              }), gS && (0, zS.jsx)("div", {
                className: "ControllerSettingsHint",
                children: gS
              })]
            }), (0, zS.jsx)(Tx.e, {
              options: tS.map((SS => ({
                label: "label" in SS ? SS.label : NS(SS.labelKey),
                value: SS.value
              }))),
              value: XS,
              onChange: SS => {
                xS(SS.value)
              }
            })]
          })
        })
      },
      ex = SS => {
        let {
          settingKey: HS,
          label: gS,
          range: tS,
          format: bS
        } = SS;
        const XS = (0, kS.l)();
        return (0, zS.jsx)(Fx.k, {
          name: gS,
          min: tS.min,
          max: tS.max,
          step: tS.step,
          padStep: tS.step,
          initValue: XS[HS],
          format: bS,
          onChange: SS => {
            (0, kS.k)({
              [HS]: (0, ox.w)(SS, tS)
            })
          }
        })
      };
    var rx = gS(9048),
      SN = gS(9054);
    const HN = SS => SS instanceof DOMException && ("SecurityError" === SS.name || "NotAllowedError" === SS.name),
      gN = SS => {
        const [HS] = [...SS.controllers].sort(((SS, HS) => SN.k[SS] - SN.k[HS]));
        return SN.g[HS]
      },
      tN = SS => {
        (0, rx.d)().allowPhoneMotion().catch((HS => {
          SS && HN(HS) ? SS() : console.warn("Could not enable the motion sensor", HS)
        }))
      },
      bN = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      XN = SS => {
        let {
          status: HS
        } = SS;
        const {
          t: gS
        } = (0, bS.F)(), [tS, XS] = (0, VS.useState)(null), xS = `${HS.controllers.join(",")}|${HS.phoneMotion}`;
        (0, VS.useEffect)((() => {
          XS(null)
        }), [xS]);
        const NS = () => {
          (0, rx.d)().connectController().then((SS => {
            XS(SS > 0 ? "openFailed" : null)
          })).catch((SS => {
            HN(SS) ? XS("needsClick") : console.warn("Could not connect motion controller", SS)
          }))
        };
        if (HS.hidSupported) {
          let SS = gS("controller:settingsGyroConnectHint");
          return "needsClick" === tS ? SS = gS("controller:settingsGyroConnectNeedsClick") : "openFailed" === tS ? SS = gS("controller:settingsGyroOpenFailed") : HS.controllers.length > 0 && (SS = gS("controller:settingsGyroConnected", {
            name: gN(HS)
          })), (0, zS.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, zS.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, zS.jsx)("div", {
                className: "ControllerSettingsHint",
                children: SS
              }), (0, zS.jsx)(Lx.g, {
                onClick: NS,
                children: gS("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === HS.phoneMotion) return (0, zS.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, zS.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === tS && (0, zS.jsx)("div", {
              className: "ControllerSettingsHint",
              children: gS("controller:settingsGyroAllowNeedsTap")
            }), (0, zS.jsx)(Lx.g, {
              onClick: () => {
                tN((() => {
                  XS("needsTap")
                }))
              },
              children: gS("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const qS = bN[HS.phoneMotion];
        return qS ? (0, zS.jsx)("div", {
          className: "ControllerSettingsHint",
          children: gS(qS)
        }) : null
      },
      xN = () => {
        const {
          t: SS
        } = (0, bS.F)(), HS = (0, kS.l)(), gS = (0, rx.g)(), tS = (0, aS.C)(), XS = !gS.hidSupported && gS.phoneSupported && !gS.padConnected, xS = (gS.hidSupported || gS.phoneSupported) && !XS, NS = (0, IS.h)("pause");
        return (0, zS.jsxs)(zS.Fragment, {
          children: [(0, zS.jsx)(lx, {
            text: SS("controller:settingsGyro")
          }), XS && (0, zS.jsx)("div", {
            className: "ControllerSettingsHint",
            children: SS("controller:settingsGyroPhoneNeedsController")
          }), !xS && !XS && (0, zS.jsx)("div", {
            className: "ControllerSettingsHint",
            children: SS(gS.hidBlocked || gS.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), xS && (0, zS.jsx)(Fx.d, {
            label: SS(gS.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: HS.gyroAiming,
            onClick: SS => {
              var HS, gS;
              (0, kS.k)({
                gyroAiming: SS
              });
              const tS = null === (HS = null === (gS = navigator.userActivation) || void 0 === gS ? void 0 : gS.isActive) || void 0 === HS || HS;
              if (!SS || !tS) return;
              const bS = (0, rx.d)(),
                XS = bS.getStatus();
              XS.hidSupported ? bS.connectControllerIfNoneGranted().catch((SS => {
                console.warn("Motion controller picker unavailable", SS)
              })) : "needsPermission" === XS.phoneMotion && tN()
            },
            circleInfoText: SS(gS.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), xS && gS.hidSupported && (0, zS.jsx)("div", {
            className: "ControllerSettingsHint",
            children: SS("controller:settingsGyroSteamHint")
          }), xS && HS.gyroAiming && (0, zS.jsxs)(zS.Fragment, {
            children: [(0, zS.jsx)(XN, {
              status: gS
            }), (0, zS.jsx)(ex, {
              settingKey: "gyroSensitivity",
              label: SS("controller:settingsGyroSensitivity"),
              range: ox.V,
              format: ox.M
            }), (0, zS.jsx)(mx, {
              label: SS("controller:settingsGyroActivation"),
              hint: "aiming" === HS.gyroActivation && (0, zS.jsx)(Rx.e, {
                text: SS("controller:settingsGyroAimingHint", {
                  button: Rx.i
                }),
                glyph: (0, IS.h)("use")
              }),
              options: ox.S,
              value: HS.gyroActivation,
              onChange: SS => {
                (0, kS.k)({
                  gyroActivation: SS
                })
              }
            }), "button" === HS.gyroActivation && (0, zS.jsx)(mx, {
              label: SS("controller:settingsGyroButton"),
              hint: SS("controller:settingsGyroButtonHint"),
              options: ox.r.filter((SS => SS !== NS || SS === HS.gyroButton)).map((SS => ({
                label: Db(tS, SS),
                value: SS
              }))),
              value: HS.gyroButton,
              onChange: SS => {
                (0, kS.k)({
                  gyroButton: SS
                })
              }
            })]
          })]
        })
      };
    var NN = gS(1975);
    const qN = () => {
      const {
        t: SS
      } = (0, bS.F)(), HS = (0, kS.l)(), gS = (0, aS.C)();
      return (0, zS.jsxs)(zS.Fragment, {
        children: [(0, zS.jsx)(lx, {
          text: SS("controller:settingsAccessibility")
        }), (0, zS.jsx)(Fx.d, {
          label: SS("controller:settingsSwapConfirmBack"),
          checked: (0, IS.B)(HS.swapConfirmBack, gS),
          onClick: SS => {
            (0, kS.k)({
              swapConfirmBack: SS === (0, IS.B)(null, gS) ? null : SS
            }), NN.d.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: SS("controller:settingsSwapConfirmBackInfo")
        }), (0, zS.jsx)(mx, {
          label: SS("controller:settingsButtonRepeat"),
          hint: SS("controller:settingsButtonRepeatHint"),
          options: ox.o,
          value: HS.buttonRepeat,
          onChange: SS => {
            (0, kS.k)({
              buttonRepeat: SS
            })
          }
        }), (0, zS.jsx)(mx, {
          label: SS("controller:settingsTapHoldTime"),
          hint: SS("controller:settingsTapHoldTimeHint"),
          options: ox.yb,
          value: HS.tapHoldTime,
          onChange: SS => {
            (0, kS.k)({
              tapHoldTime: SS
            })
          }
        }), (0, zS.jsx)(mx, {
          label: SS("controller:settingsEmoteButton"),
          hint: SS("wheel" === HS.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: ox.G,
          value: HS.emoteButton,
          onChange: SS => {
            (0, kS.k)({
              emoteButton: SS
            })
          }
        }), (0, zS.jsx)(mx, {
          label: SS("controller:settingsAttackMode"),
          hint: SS("toggle" === HS.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: ox.l,
          value: HS.attackMode,
          onChange: SS => {
            (0, kS.k)({
              attackMode: SS
            })
          }
        }), (0, zS.jsx)(Fx.d, {
          label: SS("controller:settingsLargePointer"),
          checked: HS.largePointer,
          onClick: SS => {
            (0, kS.k)({
              largePointer: SS
            })
          },
          circleInfoText: SS("controller:settingsLargePointerInfo")
        })]
      })
    };
    var uN = gS(9063);
    const IN = new class {
        constructor(SS) {
          this.router = SS, this.current = null
        }
        claim(SS, HS) {
          const gS = this.current;
          gS && (this.current = null, gS.release(), gS.onTakenOver());
          const tS = this.router.register({
              ...SS,
              name: "capture"
            }),
            bS = {
              release: tS,
              onTakenOver: HS
            };
          return this.current = bS, () => {
            this.current === bS && (this.current = null), tS()
          }
        }
      }(fS.e),
      fN = SS => {
        (0, VS.useEffect)((() => {
          if (!SS) return;
          const HS = SS();
          let gS = !1;
          const tS = () => {
              gS || (gS = !0, HS.onEnd())
            },
            bS = IN.claim({
              isActive: () => !gS,
              onFrame: SS => {
                HS.onFrame(SS, tS)
              }
            }, tS),
            XS = void 0 === HS.timeoutMs ? void 0 : window.setTimeout(tS, HS.timeoutMs),
            xS = SS => {
              "Escape" === SS.key && (SS.preventDefault(), SS.stopPropagation(), tS())
            };
          return window.addEventListener("keydown", xS, !0), () => {
            gS = !0, bS(), window.clearTimeout(XS), window.removeEventListener("keydown", xS, !0)
          }
        }), [SS])
      },
      kN = SS => {
        let {
          row: HS,
          capturing: gS,
          onCapture: tS,
          holdFillRef: XS,
          onRebind: xS,
          swapped: NS
        } = SS;
        const {
          t: qS
        } = (0, bS.F)();
        if ("fixed" === HS.kind) return (0, zS.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, zS.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, zS.jsx)("div", {
              className: "ControlName",
              children: qS(HS.labelKey)
            }), (0, zS.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, zS.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, zS.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, zS.jsx)(wb, {
                    glyph: "move" === HS.stick ? (0, IS.p)() : (0, IS.o)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: uS
        } = HS, fS = (0, IS.h)(uS), kS = (0, IS.j)(uS), aS = fS !== kS && (0, IS.c)(uS, kS);
        return (0, zS.jsxs)("div", {
          className: WS()("ControlRow PadControlRow", {
            Capturing: gS
          }),
          children: [(0, zS.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, zS.jsx)("div", {
              className: "ControlName",
              children: qS(ox.h[uS])
            }), (0, zS.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!gS && (0, zS.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, zS.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    tS(uS)
                  },
                  children: (0, zS.jsx)(wb, {
                    glyph: fS
                  })
                }), aS && (0, zS.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: qS("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    xS(uS, kS)
                  },
                  children: (0, zS.jsx)(vx.d, {
                    name: "arrows-rotate"
                  })
                })]
              }), gS && (0, zS.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, zS.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, zS.jsx)("span", {
                    children: qS("controller:settingsCapturePrompt")
                  }), (0, zS.jsx)("div", {
                    ref: XS,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, zS.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    tS(null)
                  },
                  children: "\xd7"
                })]
              }), gS && (0, zS.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, zS.jsx)(Rx.e, {
                  text: qS((0, IS.c)(uS, (0, IS.h)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Rx.i
                  }),
                  glyph: (0, IS.h)("menuBack")
                })
              })]
            })]
          }), NS.map((SS => (0, zS.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, zS.jsx)(Rx.e, {
              text: qS("controller:settingsSwapNotice", {
                action: qS(ox.h[SS]),
                button: Rx.i
              }),
              glyph: (0, IS.h)(SS)
            })
          }, SS))), gS && (0, zS.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${ox.t}ms`
            }
          })]
        })
      },
      aN = [],
      KN = SS => {
        let {
          layoutSetting: HS
        } = SS;
        const {
          t: gS
        } = (0, bS.F)(), tS = (0, kS.l)();
        (0, aS.C)();
        const XS = (0, VS.useRef)(null),
          [xS, NS] = (0, VS.useState)(null),
          qS = (0, VS.useCallback)(((SS, HS) => {
            const gS = (0, kS.f)().bindings;
            (0, IS.u)(SS, HS);
            const tS = (0, IS.q)(gS, SS);
            NS(tS.length > 0 ? {
              action: SS,
              swapped: tS
            } : null)
          }), []),
          [uS, jS] = ((SS, HS) => {
            const [gS, tS] = (0, VS.useState)(null), bS = (0, VS.useMemo)((() => gS ? () => {
              const bS = (0, IS.h)("menuBack"),
                XS = new ox.d(bS, (0, IS.h)("menuConfirm"), (SS => (0, IS.c)(gS, SS)));
              return {
                onFrame: (tS, xS) => {
                  var NS;
                  const qS = tS.frame.timestampMs,
                    uS = XS.update({
                      ...tS,
                      isDown: SS => (0, KS.L)(tS.frame.values, SS)
                    }, qS);
                  null === (NS = SS.current) || void 0 === NS || NS.style.setProperty("width", 100 * XS.getBindHoldProgress(qS) + "%"), uS && ("bind" === uS.kind ? (fS.e.consumeButton(uS.button), HS(gS, uS.button)) : fS.e.consumeButton(bS), xS())
                },
                onEnd: () => {
                  tS(null)
                },
                timeoutMs: ox.t
              }
            } : null), [gS, SS, HS]);
            return fN(bS), [gS, tS]
          })(XS, qS),
          GS = SS => {
            SS && NS(null), jS(SS)
          };
        (0, VS.useEffect)((() => {
          if (!xS) return;
          const SS = window.setTimeout((() => {
            NS(null)
          }), ox.vb);
          return () => {
            window.clearTimeout(SS)
          }
        }), [xS]);
        const CS = !tS.swapSticks && 0 === Object.keys(tS.bindings).length;
        return (0, zS.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, zS.jsx)("div", {
            className: "SliderText",
            children: gS("controller:settingsRemap")
          }), (0, zS.jsx)("div", {
            className: "ControllerSettingsHint",
            children: gS("controller:settingsRemapHint")
          }), (0, zS.jsx)(Lx.L, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: CS,
            onClick: () => {
              GS(null), NS(null), (0, IS.y)()
            },
            children: gS("controller:settingsResetAll")
          }), HS, ox.mb.map(((SS, HS) => (0, zS.jsx)(uN.b, {
            title: gS(SS.titleKey),
            defaultOpen: 0 === HS,
            children: SS.rows.map((SS => (0, zS.jsx)(kN, {
              row: SS,
              capturing: "action" === SS.kind && SS.action === uS,
              onCapture: GS,
              holdFillRef: XS,
              onRebind: qS,
              swapped: "action" === SS.kind && (null === xS || void 0 === xS ? void 0 : xS.action) === SS.action ? xS.swapped : aN
            }, "action" === SS.kind ? SS.action : SS.labelKey)))
          }, SS.titleKey)))]
        })
      },
      jN = SS => {
        let {
          deadzone: HS,
          dotRef: gS,
          labelKey: tS
        } = SS;
        const {
          t: XS
        } = (0, bS.F)();
        return (0, zS.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, zS.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, zS.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * HS + "%",
                height: 100 * HS + "%"
              }
            }), (0, zS.jsx)("div", {
              ref: gS,
              className: "ControllerTesterDot"
            })]
          }), (0, zS.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: XS(tS)
          })]
        })
      },
      GN = (SS, HS, gS, tS) => {
        var bS;
        SS && (SS.style.left = 50 + 50 * Math.max(-1, Math.min(1, HS.x)) + "%", SS.style.top = 50 + 50 * Math.max(-1, Math.min(1, HS.y)) + "%", null === (bS = SS.parentElement) || void 0 === bS || bS.classList.toggle("Active", tS || Math.hypot(HS.x, HS.y) > gS))
      },
      CN = SS => {
        const HS = {
            deadzone: SS.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          gS = {
            deadzone: SS.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return SS.swapSticks ? {
          left: gS,
          right: HS
        } : {
          left: HS,
          right: gS
        }
      },
      nN = () => {
        const {
          t: SS
        } = (0, bS.F)(), HS = (() => {
          const [SS, HS] = (0, VS.useState)((() => xS.g.getActivePad()));
          return (0, Gb.g)(xS.e, (() => {
            HS(xS.g.getActivePad())
          })), SS
        })(), gS = CN((0, kS.l)()), tS = (0, VS.useRef)(null), XS = (0, VS.useRef)(null), NS = (0, VS.useRef)([]), qS = (0, VS.useRef)(null), uS = (0, VS.useRef)(null), [aS, jS] = (SS => {
          const [HS, gS] = (0, VS.useState)(!1), tS = (0, VS.useMemo)((() => HS ? () => {
            const HS = (0, IS.h)("menuBack"),
              tS = new ox.f;
            return {
              onFrame: (gS, bS) => {
                var XS;
                const xS = tS.update({
                  pressed: gS.wasPressed(HS),
                  Ku: gS.isHeld(HS)
                }, gS.frame.timestampMs);
                null === (XS = SS.current) || void 0 === XS || XS.style.setProperty("width", 100 * xS + "%"), xS >= 1 && (fS.e.consumeButton(HS), bS())
              },
              onEnd: () => {
                gS(!1)
              }
            }
          } : null), [HS, SS]);
          return fN(tS), [HS, gS]
        })(XS);
        (0, VS.useEffect)((() => {
          const SS = SS => {
            for (const gS of KS._) {
              const HS = (0, KS.m)(gS),
                tS = NS.current[HS];
              if (!tS) continue;
              const bS = SS.values[HS];
              tS.classList.toggle("Pressed", bS >= KS.w), (0, KS.P)(HS) && tS.style.setProperty("--trigger-fill", `${Math.round(100*bS)}%`)
            }
            const HS = CN((0, kS.f)());
            GN(qS.current, SS.leftStick, HS.left.deadzone, SS.values[(0, KS.m)("LS")] >= KS.w), GN(uS.current, SS.rightStick, HS.right.deadzone, SS.values[(0, KS.m)("RS")] >= KS.w)
          };
          return HS || SS((0, KS.t)()), xS.g.onFrame(SS)
        }), [HS]), (0, VS.useEffect)((() => {
          HS || jS(!1)
        }), [HS, jS]), (0, VS.useEffect)((() => {
          var SS;
          aS && (null === (SS = tS.current) || void 0 === SS || SS.scrollIntoView({
            block: "nearest"
          }))
        }), [aS]);
        const GS = ox.gb.find((SS => SS.value === (null === HS || void 0 === HS ? void 0 : HS.family)));
        return (0, zS.jsxs)("div", {
          ref: tS,
          className: WS()("SettingBox ControllerTester", {
            Testing: aS
          }),
          children: [(0, zS.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, zS.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [HS && (0, zS.jsx)("div", {
                children: SS("controller:settingsTesterFamily", {
                  family: GS ? SS(GS.labelKey) : HS.family
                })
              }), HS && (0, zS.jsx)("div", {
                className: "ControllerTesterPadId",
                children: HS.id
              }), !HS && (0, zS.jsx)("div", {
                children: SS("controller:settingsTesterNoPad")
              })]
            }), (HS || aS) && (0, zS.jsx)(Lx.g, {
              className: "ControllerTesterToggle",
              onClick: () => {
                jS(!aS)
              },
              children: SS(aS ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), HS && !aS && (0, zS.jsx)("div", {
            className: "ControllerSettingsHint",
            children: SS("controller:settingsTesterHint")
          }), aS && (0, zS.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, zS.jsx)(Rx.e, {
              text: SS("controller:settingsTesterTesting", {
                button: Rx.i
              }),
              glyph: (0, IS.h)("menuBack")
            }), (0, zS.jsx)("div", {
              ref: XS,
              className: "ControllerTesterExitFill"
            })]
          }), (0, zS.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, zS.jsx)(jN, {
              deadzone: gS.left.deadzone,
              dotRef: qS,
              labelKey: gS.left.labelKey
            }), (0, zS.jsx)("div", {
              className: "ControllerTesterButtons",
              children: KS._.map((SS => {
                const gS = (0, KS.m)(SS);
                return (0, zS.jsx)("div", {
                  ref: SS => {
                    NS.current[gS] = SS
                  },
                  className: (0, KS.P)(gS) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, zS.jsx)(wb, {
                    glyph: SS,
                    family: null === HS || void 0 === HS ? void 0 : HS.family
                  })
                }, SS)
              }))
            }), (0, zS.jsx)(jN, {
              deadzone: gS.right.deadzone,
              dotRef: uS,
              labelKey: gS.right.labelKey
            })]
          })]
        })
      },
      PN = (0, VS.memo)((function() {
        const {
          t: SS
        } = (0, bS.F)(), HS = (0, kS.l)(), [gS, tS] = (0, VS.useState)(!1);
        return (0, VS.useEffect)((() => {
          if (!gS) return;
          const SS = window.setTimeout((() => {
            tS(!1)
          }), ox.vb);
          return () => {
            window.clearTimeout(SS)
          }
        }), [gS]), (0, zS.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, zS.jsx)(lx, {
            text: SS("controller:settingsLook")
          }), (0, zS.jsx)(ex, {
            settingKey: "lookSensitivityX",
            label: SS("controller:settingsLookSensitivityX"),
            range: ox.qb,
            format: ox.Q
          }), (0, zS.jsx)(ex, {
            settingKey: "lookSensitivityY",
            label: SS("controller:settingsLookSensitivityY"),
            range: ox.qb,
            format: ox.Q
          }), (0, zS.jsx)(ex, {
            settingKey: "aimLookSensitivity",
            label: SS("controller:settingsAimLookSensitivity"),
            range: ox.j,
            format: ox.Q
          }), (0, zS.jsx)(mx, {
            label: SS("controller:settingsLookCurve"),
            hint: SS("controller:settingsLookCurveHint"),
            options: ox.bb,
            value: HS.lookCurve,
            onChange: SS => {
              (0, kS.k)({
                lookCurve: SS
              })
            }
          }), (0, zS.jsx)(Fx.d, {
            label: SS("controller:settingsInvertLookX"),
            checked: HS.invertLookX,
            onClick: SS => {
              (0, kS.k)({
                invertLookX: SS
              })
            }
          }), (0, zS.jsx)(Fx.d, {
            label: SS("controller:settingsInvertLookY"),
            checked: HS.invertLookY,
            onClick: SS => {
              (0, kS.k)({
                invertLookY: SS
              })
            }
          }), (0, zS.jsx)(ex, {
            settingKey: "lookDeadzone",
            label: SS("controller:settingsLookDeadzone"),
            range: ox.C,
            format: ox.K
          }), (0, zS.jsx)(xN, {}), (0, zS.jsx)(lx, {
            text: SS("controller:settingsMovement")
          }), (0, zS.jsx)(ex, {
            settingKey: "moveDeadzone",
            label: SS("controller:settingsMoveDeadzone"),
            range: ox.C,
            format: ox.K
          }), (0, zS.jsx)(Fx.d, {
            label: SS("controller:settingsAutoSprint"),
            checked: HS.autoSprint,
            onClick: SS => {
              (0, kS.k)({
                autoSprint: SS
              })
            },
            circleInfoText: SS("controller:settingsAutoSprintInfo")
          }), (0, zS.jsx)(mx, {
            label: SS("controller:settingsSneak"),
            options: ox.ub,
            value: HS.sneakMode,
            onChange: SS => {
              (0, kS.k)({
                sneakMode: SS
              })
            }
          }), (0, zS.jsx)(lx, {
            text: SS("controller:settingsButtons")
          }), (0, zS.jsx)(mx, {
            label: SS("controller:settingsPromptFamily"),
            options: ox.gb,
            value: HS.promptFamily,
            onChange: SS => {
              (0, kS.k)({
                promptFamily: SS
              })
            }
          }), (0, zS.jsx)(Fx.d, {
            label: SS("controller:settingsHideButtonHints"),
            checked: HS.hideButtonHints,
            onClick: SS => {
              (0, kS.k)({
                hideButtonHints: SS
              })
            }
          }), (0, zS.jsx)(Fx.d, {
            label: SS("controller:settingsVibration"),
            checked: HS.vibration,
            onClick: SS => {
              (0, kS.k)({
                vibration: SS
              }), SS && Xb("preview")
            }
          }), (0, zS.jsx)(ex, {
            settingKey: "cursorSpeed",
            label: SS("controller:settingsCursorSpeed"),
            range: ox.z,
            format: ox.Q
          }), (0, zS.jsx)(Fx.d, {
            label: SS("controller:settingsCursorMagnetism"),
            checked: HS.cursorMagnetism,
            onClick: SS => {
              (0, kS.k)({
                cursorMagnetism: SS
              })
            }
          }), (0, zS.jsx)(Fx.d, {
            label: SS("controller:settingsMenuBackToCategories"),
            checked: HS.menuBackToCategories,
            onClick: SS => {
              (0, kS.k)({
                menuBackToCategories: SS
              })
            }
          }), (0, zS.jsx)(KN, {
            layoutSetting: (0, zS.jsxs)(zS.Fragment, {
              children: [IS.g.map((gS => (0, zS.jsx)(Fx.d, {
                label: SS(ox.Z[gS]),
                checked: (0, IS.t)(gS, HS),
                onClick: SS => {
                  tS(!(0, IS.E)(gS, SS))
                }
              }, gS))), gS && (0, zS.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: SS("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, zS.jsx)(qN, {}), (0, zS.jsx)(lx, {
            text: SS("controller:settingsAlternatives")
          }), (0, zS.jsx)("div", {
            className: "ControllerSettingsHint",
            children: SS("controller:settingsAlternativesHint")
          }), (0, zS.jsx)(mx, {
            label: SS("controller:settingsMenuNavigation"),
            hint: SS("controller:settingsMenuNavigationHint"),
            options: ox.fb,
            value: HS.menuNavigation,
            onChange: SS => {
              (0, kS.k)({
                menuNavigation: SS
              })
            }
          }), (0, zS.jsx)(mx, {
            label: SS("controller:settingsInventoryNavigation"),
            hint: SS("controller:settingsInventoryNavigationHint"),
            options: ox.Y,
            value: HS.inventoryNavigation,
            onChange: SS => {
              (0, kS.k)({
                inventoryNavigation: SS
              })
            }
          }), (0, zS.jsx)(mx, {
            label: SS("controller:settingsQuickChat"),
            hint: SS("controller:settingsQuickChatHint"),
            options: ox.jb,
            value: HS.quickChat,
            onChange: SS => {
              (0, kS.k)({
                quickChat: SS
              })
            }
          }), (0, zS.jsx)(mx, {
            label: SS("controller:settingsLeaderboardButton"),
            hint: SS("controller:settingsLeaderboardButtonHint"),
            options: ox._,
            value: HS.leaderboardButton,
            onChange: SS => {
              (0, kS.k)({
                leaderboardButton: SS
              })
            }
          }), (0, zS.jsx)(lx, {
            text: SS("controller:settingsTester")
          }), (0, zS.jsx)(nN, {})]
        })
      }));
    (0, bS.c)(tS);
    for (const ZN of (0, XS.q)()) ZN.connected ? xS.g.handleConnectionEvent(ZN) : xS.g.handleDisconnectionEvent(ZN);
    const QN = () => null !== xS.g.getActivePad(),
      DN = () => bg.getState(),
      wN = () => bg.isSteppingSlots(),
      hN = (SS, HS) => {
        const gS = rt.getFocused();
        rt.isActive() && gS && SS.contains(gS) && rt.setFocus(HS, {
          scroll: !1
        })
      }
  },
  8331: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => qS,
      g: () => uS
    });
    var tS = gS(1493),
      bS = gS(1489);
    const XS = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      xS = "28de",
      NS = new Set(["1205"]),
      qS = (SS, HS) => {
        const gS = (0, tS.b)(SS);
        if ((null === gS || void 0 === gS ? void 0 : gS.vendor) === xS) return NS.has(gS.product) ? "steamdeck" : "xbox";
        if (gS && XS[gS.vendor]) return XS[gS.vendor];
        if ((0, bS.e)(SS)) return "nintendo";
        const qS = `${SS} ${null!==HS&&void 0!==HS?HS:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(qS) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(qS) ? "nintendo" : /steam deck/.test(qS) ? "steamdeck" : "xbox"
      },
      uS = SS => {
        var HS;
        return (null === (HS = (0, tS.b)(SS)) || void 0 === HS ? void 0 : HS.vendor) === xS
      }
  },
  8385: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => uS,
      h: () => NS
    });
    var tS = gS(8327);
    const bS = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      XS = new Set(["capture", "gameplay"]),
      xS = ["Up", "Down", "Left", "Right"],
      NS = SS => xS.includes(SS),
      qS = .25;
    const uS = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.Ku = new Array(tS.Y).fill(!1), this.previousHeld = new Array(tS.Y).fill(!1), this.consumedButtons = new Array(tS.Y).fill(!1), this.suppressedReleases = new Array(tS.Y).fill(!1), this.wakeOwned = new Array(tS.Y).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, tS.t)()
      }
      register(SS) {
        return this.consumers.has(SS.name) && console.warn(`Controller consumer "${SS.name}" registered twice; the newer one replaces it.`), this.consumers.set(SS.name, SS), () => {
          var HS;
          this.consumers.get(SS.name) === SS && (this.activeName === SS.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (HS = this.peek) || void 0 === HS ? void 0 : HS.over) === SS.name && (this.peek = null), this.consumers.delete(SS.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(SS) {
        return this.Ku[(0, tS.m)(SS)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.Ku = new Array(tS.Y).fill(!1), this.previousHeld = new Array(tS.Y).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, tS.t)()
      }
      dispatch(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = SS, this.previousHeld = this.Ku, this.Ku = (0, tS.q)(SS.values, this.previousHeld);
        for (let XS = 0; XS < tS.Y; XS++) this.suppressedReleases[XS] = !this.Ku[XS] && this.consumedButtons[XS], this.Ku[XS] || (this.consumedButtons[XS] = !1), this.wakeOwned[XS] && (this.Ku[XS] ? (this.consumedButtons[XS] = !0, this.wakeOwned[XS] = !1) : SS.values[XS] < tS.V && (this.wakeOwned[XS] = !1));
        Math.hypot(SS.leftStick.x, SS.leftStick.y) < qS && (this.leftStickConsumed = !1), Math.hypot(SS.rightStick.x, SS.rightStick.y) < qS && (this.rightStickConsumed = !1);
        const bS = this.pickActive();
        if ((null === bS || void 0 === bS ? void 0 : bS.name) !== this.activeName) {
          var xS, NS, uS, IS, fS, kS;
          const SS = this.activeName,
            HS = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            gS = null !== (xS = null === bS || void 0 === bS || null === (NS = bS.peek) || void 0 === NS ? void 0 : NS.call(bS)) && void 0 !== xS ? xS : null,
            XS = null === SS && !!gS && !(null === (uS = this.consumers.get(gS.over)) || void 0 === uS || !uS.onPeekFrame),
            qS = gS && (gS.over === SS || XS) ? gS : null,
            aS = null !== this.peek && this.peek.over === (null === bS || void 0 === bS ? void 0 : bS.name) ? this.peek : null;
          this.deactivateCurrent(null !== qS, null !== aS), this.activeName = null !== (IS = null === bS || void 0 === bS ? void 0 : bS.name) && void 0 !== IS ? IS : null, null === SS || this.handOffPending || this.consumeAllHeld();
          const KS = null === (fS = null !== qS && void 0 !== qS ? qS : aS) || void 0 === fS ? void 0 : fS.stick;
          "left" === KS && HS.left ? this.leftStickConsumed = !1 : "right" === KS && HS.right && (this.rightStickConsumed = !1), this.peek = qS, bS || null === SS ? bS && (null === (kS = this.idleResume) || void 0 === kS ? void 0 : kS.name) === bS.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: SS,
            left: HS.left && this.leftStickConsumed,
            right: HS.right && this.rightStickConsumed
          }, bS && (this.idleResume = null);
          for (let bS = 0; bS < tS.Y; bS++) this.previousHeld[bS] && !this.Ku[bS] && (this.suppressedReleases[bS] = !0)
        }
        var aS, KS;
        (this.handOffPending = !1, bS) && (gS && !XS.has(bS.name) && this.consumeWakePress(bS), bS.onFrame(this.buildInput(SS, HS, gS)), this.peek && (null === (aS = this.consumers.get(this.peek.over)) || void 0 === aS || null === (KS = aS.onPeekFrame) || void 0 === KS || KS.call(aS, this.buildInput(SS, HS, !1, this.peek.stick))))
      }
      consumeWakePress(SS) {
        for (let bS = 0; bS < tS.Y; bS++) {
          var HS, gS;
          const XS = tS._[bS];
          (null !== (HS = null === (gS = SS.wakePressActs) || void 0 === gS ? void 0 : gS.call(SS, XS)) && void 0 !== HS ? HS : xS.includes(XS)) || (this.Ku[bS] ? this.consumedButtons[bS] = !0 : this.lastFrame.values[bS] >= tS.S && (this.wakeOwned[bS] = !0))
        }
      }
      pickActive() {
        for (const SS of bS) {
          const HS = this.consumers.get(SS);
          if (HS && HS.isActive()) return HS
        }
        return null
      }
      deactivateCurrent() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var gS, tS, bS, XS;
        this.activeName && (null === (gS = this.consumers.get(this.activeName)) || void 0 === gS || null === (tS = gS.onDeactivate) || void 0 === tS || tS.call(gS, SS));
        this.peek && !HS && (null === (bS = this.consumers.get(this.peek.over)) || void 0 === bS || null === (XS = bS.onDeactivate) || void 0 === XS || XS.call(bS, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let bS = 0; bS < tS.Y; bS++) this.Ku[bS] && (this.consumedButtons[bS] = !0);
        const {
          leftStick: HS,
          rightStick: gS
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== SS && (this.leftStickConsumed || Math.hypot(HS.x, HS.y) >= qS), this.rightStickConsumed = "right" !== SS && (this.rightStickConsumed || Math.hypot(gS.x, gS.y) >= qS)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(SS) {
        const HS = (0, tS.m)(SS);
        this.Ku[HS] && (this.consumedButtons[HS] = !0)
      }
      buildInput(SS, HS, gS, bS) {
        const XS = this.Ku,
          xS = this.previousHeld,
          NS = bS ? new Array(tS.Y).fill(!0) : [...this.consumedButtons],
          qS = bS ? NS : [...this.suppressedReleases],
          uS = !this.leftStickConsumed && (!bS || "left" === bS),
          IS = !this.rightStickConsumed && (!bS || "right" === bS);
        return {
          frame: SS,
          dtMs: HS,
          isHeld: SS => {
            const HS = (0, tS.m)(SS);
            return XS[HS] && !NS[HS]
          },
          wasPressed: SS => {
            const HS = (0, tS.m)(SS);
            return XS[HS] && !xS[HS] && !NS[HS]
          },
          wasReleased: SS => {
            const HS = (0, tS.m)(SS);
            return !XS[HS] && xS[HS] && !qS[HS]
          },
          value: HS => {
            const gS = (0, tS.m)(HS);
            return NS[gS] ? 0 : SS.values[gS]
          },
          leftStick: uS ? SS.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: IS ? SS.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: gS
        }
      }
    }
  },
  8353: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => fS.g,
      e: () => fS.j,
      f: () => dS,
      g: () => cS,
      k: () => vS,
      l: () => ES
    });
    var tS = gS(64),
      bS = gS(31),
      XS = gS(1522),
      xS = gS(45),
      NS = gS(8361),
      qS = gS(8327),
      uS = gS(8346),
      IS = gS(8319),
      fS = gS(2128),
      kS = gS(8369);
    const aS = {
        lookSensitivityX: 100,
        lookSensitivityY: 100,
        aimLookSensitivity: 100,
        invertLookX: !1,
        invertLookY: !1,
        lookCurve: "exponential",
        lookDeadzone: .12,
        moveDeadzone: .15,
        swapSticks: !1,
        autoSprint: !0,
        sneakMode: "toggle",
        tapHoldTime: "short",
        attackMode: "hold",
        promptFamily: "auto",
        hideButtonHints: !1,
        vibration: !0,
        cursorSpeed: 100,
        cursorMagnetism: !1,
        buttonRepeat: "default",
        largePointer: !1,
        menuBackToCategories: !0,
        swapConfirmBack: null,
        menuNavigation: "hybrid",
        inventoryNavigation: "hybrid",
        quickChat: "wheel",
        leaderboardButton: "shop",
        gyroAiming: !1,
        gyroSensitivity: 2,
        gyroActivation: "always",
        gyroButton: "RB",
        emoteButton: "tapHold",
        bindings: {}
      },
      KS = "controllerSettings",
      jS = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      GS = ["auto", ...NS.b],
      CS = (SS, HS) => "string" === typeof HS && SS.includes(HS),
      nS = SS => HS => "number" === typeof HS && Number.isFinite(HS) ? (0, kS.w)(HS, SS) : void 0,
      PS = SS => "boolean" === typeof SS ? SS : void 0,
      QS = SS => HS => CS(SS, HS) ? HS : void 0,
      DS = {
        lookSensitivityX: nS(kS.qb),
        lookSensitivityY: nS(kS.qb),
        aimLookSensitivity: nS(kS.j),
        invertLookX: PS,
        invertLookY: PS,
        lookCurve: QS(qS.R),
        lookDeadzone: nS(kS.C),
        moveDeadzone: nS(kS.C),
        swapSticks: PS,
        autoSprint: PS,
        sneakMode: QS(["toggle", "hold"]),
        tapHoldTime: QS(["short", "medium", "long"]),
        attackMode: QS(["hold", "toggle"]),
        promptFamily: QS(GS),
        hideButtonHints: PS,
        vibration: PS,
        cursorSpeed: nS(kS.z),
        cursorMagnetism: PS,
        buttonRepeat: QS(qS.p),
        largePointer: PS,
        menuBackToCategories: PS,
        swapConfirmBack: PS,
        menuNavigation: QS(["hybrid", "focus", "cursor"]),
        inventoryNavigation: QS(["hybrid", "slot", "cursor"]),
        quickChat: QS(["wheel", "off"]),
        leaderboardButton: QS(["shop", "leaderboard"]),
        gyroAiming: PS,
        gyroSensitivity: nS(kS.V),
        gyroActivation: QS(["always", "aiming", "button"]),
        gyroButton: QS(qS._),
        emoteButton: QS(["tapHold", "wheel"])
      },
      wS = [{
        param: "padMenuNav",
        key: "menuNavigation"
      }, {
        param: "padInventoryNav",
        key: "inventoryNavigation"
      }, {
        param: "padQuickChat",
        key: "quickChat"
      }, {
        param: "padSneak",
        key: "sneakMode"
      }, {
        param: "padGyro",
        key: "gyroActivation"
      }, {
        param: "padLeaderboardButton",
        key: "leaderboardButton"
      }],
      hS = SS => {
        const HS = {};
        if ("object" !== typeof SS || null === SS) return HS;
        for (const [gS, tS] of Object.entries(SS)) Object.prototype.hasOwnProperty.call(uS.i, gS) && CS(qS._, tS) && (HS[gS] = tS);
        return HS
      },
      ZS = SS => {
        const HS = {};
        for (const gS of Object.keys(aS))("bindings" === gS ? Object.keys(SS.bindings).length > 0 : SS[gS] !== aS[gS]) && (HS[gS] = SS[gS]);
        0 !== Object.keys(HS).length ? xS.g.setItem(KS, HS) : xS.g.removeItem(KS)
      };
    let JS = (() => {
        const SS = xS.g.getItem(KS),
          HS = (SS => {
            const HS = "object" === typeof SS && null !== SS ? SS : {},
              gS = {
                ...aS,
                bindings: hS(HS.bindings)
              };
            for (const bS of Object.keys(DS)) {
              const SS = DS[bS](HS[bS]);
              void 0 !== SS && (gS[bS] = SS)
            }
            const tS = Object.keys(HS).filter((SS => !!Object.prototype.hasOwnProperty.call(aS, SS) && ("bindings" === SS ? "object" !== typeof HS.bindings || null === HS.bindings || Object.keys(HS.bindings).length !== Object.keys(gS.bindings).length : gS[SS] !== HS[SS])));
            return tS.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${tS.join(", ")}`), gS
          })(SS);
        return null !== SS && void 0 !== SS && ZS(HS), HS
      })(),
      OS = {
        ...JS,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const SS = {},
            HS = new URLSearchParams(window.location.search);
          for (const {
              param: gS,
              key: tS
            }
            of wS) {
            const bS = DS[tS](HS.get(gS));
            void 0 !== bS && (SS[tS] = bS)
          }
          return SS
        })()
      };
    const dS = () => OS,
      cS = () => {
        var SS, HS;
        const gS = dS().promptFamily;
        return "auto" !== gS ? gS : null !== (SS = null === (HS = IS.g.getActivePad()) || void 0 === HS ? void 0 : HS.family) && void 0 !== SS ? SS : "xbox"
      },
      vS = SS => {
        const HS = OS;
        JS = {
          ...JS,
          ...SS
        }, ZS(JS), OS = {
          ...OS,
          ...SS
        }, (SS => {
          bS.k.cj(fS.j, OS), jS.some((HS => SS[HS] !== OS[HS])) && bS.k.cj(fS.g, OS)
        })(HS)
      },
      ES = () => {
        const [SS, HS] = (0, tS.useState)(OS);
        return (0, XS.g)(fS.j, HS), SS
      }
  },
  8846: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS
    });
    const tS = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      bS = SS => tS.has(SS)
  },
  8319: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => jS.e,
      g: () => PS
    });
    var tS = gS(8327),
      bS = gS(8331);
    const XS = .1,
      xS = .3;
    class NS {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(SS, HS) {
        const gS = null === this.lastMs ? 0 : Math.min(Math.max(0, HS - this.lastMs), 100);
        this.lastMs = HS;
        const tS = Math.hypot(SS.x, SS.y);
        if (tS >= xS) return this.anchor = null, void(this.returning = !0);
        tS >= XS || (this.returning = !1);
        const bS = this.anchor;
        if (!bS || Math.hypot(SS.x - bS.x, SS.y - bS.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: SS.x,
          y: SS.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += gS, this.steadyMs < 1e3) return;
        const NS = Math.max(tS, Math.hypot(bS.x, bS.y));
        NS < XS ? this.deadzone = 0 : this.returning && (this.deadzone = NS + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(SS) {
        return Math.hypot(SS.x, SS.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : SS
      }
    }
    const qS = (SS, HS) => {
        var gS, tS;
        return null !== (gS = SS && (null === (tS = Object.getOwnPropertyDescriptor(SS, HS)) || void 0 === tS ? void 0 : tS.get)) && void 0 !== gS ? gS : null
      },
      uS = SS => {
        const HS = SS.vendorName;
        return "string" === typeof HS ? HS : void 0
      },
      IS = ((SS, HS) => {
        const gS = qS(SS, "index"),
          tS = qS(SS, "id"),
          bS = qS(SS, "connected"),
          XS = qS(SS, "mapping"),
          xS = qS(SS, "buttons"),
          NS = qS(SS, "axes"),
          IS = qS(HS, "pressed"),
          fS = qS(HS, "value");
        return gS && tS && bS && XS && xS && NS && IS && fS ? SS => {
          const HS = xS.call(SS),
            qS = NS.call(SS),
            kS = {
              index: Number(gS.call(SS)),
              id: String(tS.call(SS)),
              connected: !0 === bS.call(SS),
              mapping: String(XS.call(SS)),
              buttons: [],
              axes: [],
              vendorName: uS(SS)
            };
          for (let gS = 0; gS < HS.length; gS++) kS.buttons.push({
            pressed: !0 === IS.call(HS[gS]),
            value: Number(fS.call(HS[gS]))
          });
          for (let gS = 0; gS < qS.length; gS++) kS.axes.push(Number(qS[gS]));
          return kS
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      fS = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var kS = gS(1484),
      aS = gS(1489);
    const KS = SS => ({
      pressed: SS,
      value: SS ? 1 : 0
    });
    var jS = gS(2128);
    const GS = xS,
      CS = SS => {
        const HS = new Array(tS.Y).fill(0);
        for (let gS = 0; gS < tS.Y && gS < SS.buttons.length; gS++) {
          const bS = SS.buttons[gS];
          HS[gS] = bS.pressed && !(0, tS.P)(gS) ? Math.max(bS.value, tS.w) : bS.value
        }
        return HS
      },
      nS = (SS, HS) => {
        var gS, tS;
        return {
          x: null !== (gS = SS.axes[HS]) && void 0 !== gS ? gS : 0,
          y: null !== (tS = SS.axes[HS + 1]) && void 0 !== tS ? tS : 0
        }
      };
    const PS = new class {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IS;
        this.readGamepads = SS, this.requireTrustedPads = HS, this.nativeReader = gS, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = SS => {
          SS.isTrusted && this.trustedIndices.add(SS.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = SS => {
          this.trustedIndices.delete(SS.gamepad.index)
        }, this.mf = SS => {
          if (this.rafId = 0, !this.running) return;
          const HS = 0 === this.lastTimestampMs ? 16 : Math.min(100, SS - this.lastTimestampMs);
          this.lastTimestampMs = SS;
          try {
            this.poll(SS, HS)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.mf))
          }
        }
      }
      start() {
        this.running || "undefined" === typeof navigator || "function" !== typeof navigator.getGamepads || (this.running = !0, this.listenForConnections(), this.wake())
      }
      stop() {
        this.running = !1, cancelAnimationFrame(this.rafId), this.rafId = 0, this.listening = !1, window.removeEventListener("gamepadconnected", this.handleConnectionEvent), window.removeEventListener("gamepaddisconnected", this.handleDisconnectionEvent)
      }
      listenForConnections() {
        this.listening || "undefined" === typeof window || (this.listening = !0, window.addEventListener("gamepadconnected", this.handleConnectionEvent), window.addEventListener("gamepaddisconnected", this.handleDisconnectionEvent))
      }
      onFrame(SS) {
        return this.frameListeners.add(SS), () => {
          this.frameListeners.delete(SS)
        }
      }
      onActivePadChanged(SS) {
        return this.connectionListeners.add(SS), () => {
          this.connectionListeners.delete(SS)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(SS) {
        return this.connectedListeners.add(SS), () => {
          this.connectedListeners.delete(SS)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const SS = this.readPads()[this.activeInfo.index],
          HS = SS ? this.readPad(SS) : null;
        return HS && HS.id === this.activeInfo.id ? SS : null
      }
      poll(SS, HS) {
        var gS, bS;
        const XS = this.readPads();
        let xS = null,
          qS = !1;
        const uS = [],
          IS = Math.max(XS.length, this.slots.length);
        for (let PS = 0; PS < IS; PS++) {
          var fS;
          const HS = PS < XS.length ? XS[PS] : null,
            gS = HS ? this.readPad(HS) : null;
          if (!gS || !gS.connected || !this.isUsable(gS)) {
            this.slots[PS] = null;
            continue
          }
          let bS = this.slots[PS];
          bS && bS.id === gS.id || (bS = {
            id: gS.id,
            Ku: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new NS,
            rightRest: new NS
          }, this.slots[PS] = bS);
          const IS = nS(gS, 0),
            kS = nS(gS, 2);
          !bS.leftSettled && Math.hypot(IS.x, IS.y) < GS && (bS.leftSettled = !0), !bS.rightSettled && Math.hypot(kS.x, kS.y) < GS && (bS.rightSettled = !0), bS.leftRest.observe(IS, SS), bS.rightRest.observe(kS, SS);
          const aS = CS(gS),
            KS = (0, tS.q)(aS, bS.Ku),
            jS = bS.Ku,
            QS = KS.map(((SS, HS) => SS && !jS[HS]));
          bS.Ku = KS;
          const DS = {
            pad: gS,
            slot: bS,
            values: aS
          };
          PS === (null === (fS = this.activeInfo) || void 0 === fS ? void 0 : fS.index) && gS.id === this.activeInfo.id ? (xS = DS, qS = QS.includes(!0)) : QS.includes(!0) && uS.push({
            polled: DS,
            rose: QS
          })
        }
        const kS = this.slots.some((SS => null !== SS));
        if (kS !== this.anyPadConnected) {
          this.anyPadConnected = kS;
          for (const SS of this.connectedListeners) SS()
        }
        const aS = null !== (gS = null === (bS = xS) || void 0 === bS ? void 0 : bS.slot.Ku) && void 0 !== gS ? gS : [],
          KS = qS ? void 0 : uS.find((SS => {
            let {
              rose: HS
            } = SS;
            return HS.some(((SS, HS) => SS && !aS[HS]))
          }));
        if (KS ? (xS = KS.polled, this.setActive(KS.polled.pad)) : this.activeInfo && !xS && this.setActive(null), !xS || !this.activeInfo) return;
        const jS = ((SS, HS) => {
          let {
            pad: gS,
            slot: bS,
            values: XS
          } = SS;
          const xS = (0, tS.t)(HS);
          return xS.values = XS, bS.leftSettled && (xS.leftStick = bS.leftRest.apply(nS(gS, 0))), bS.rightSettled && (xS.rightStick = bS.rightRest.apply(nS(gS, 2))), xS
        })(xS, SS);
        for (const tS of this.frameListeners) tS(jS, HS, this.activeInfo)
      }
      readPad(SS) {
        const HS = this.readSnapshot(SS);
        return HS && (0, aS.i)(HS) ? (SS => {
          const HS = HS => {
              var gS;
              return null !== (gS = SS.buttons[HS]) && void 0 !== gS ? gS : KS(!1)
            },
            gS = HS => {
              var gS;
              return null !== (gS = SS.axes[HS]) && void 0 !== gS ? gS : 0
            },
            tS = SS.axes.length > 9,
            bS = tS ? (SS => {
              const HS = 0 !== SS;
              return {
                up: HS && (SS >= -1 && SS < -.7 || SS >= .95 && SS <= 1),
                right: HS && SS >= -.75 && SS < -.1,
                down: HS && SS >= -.2 && SS < .45,
                left: HS && SS >= .4 && SS <= 1
              }
            })(gS(9)) : {
              up: gS(5) < -.5,
              down: gS(5) > .5,
              left: gS(4) < -.5,
              right: gS(4) > .5
            };
          return {
            ...SS,
            mapping: "standard",
            buttons: [HS(1), HS(2), HS(0), HS(3), HS(4), HS(5), HS(6), HS(7), HS(8), HS(9), HS(10), HS(11), KS(bS.up), KS(bS.down), KS(bS.left), KS(bS.right), HS(12)],
            axes: [gS(0), gS(1), gS(2), gS(tS ? 5 : 3)]
          }
        })(HS) : HS
      }
      readSnapshot(SS) {
        if (this.nativeReader) try {
          return this.nativeReader(SS)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (SS => {
          const HS = SS;
          return {
            index: HS.index,
            id: HS.id,
            connected: HS.connected,
            mapping: HS.mapping,
            buttons: Array.from(HS.buttons, (SS => ({
              pressed: SS.pressed,
              value: SS.value
            }))),
            axes: Array.from(HS.axes),
            vendorName: uS(SS)
          }
        })(SS)
      }
      isUsable(SS) {
        return !(0, kS.g)(SS.id) && ("standard" !== SS.mapping ? (this.warnedNonStandardIds.has(SS.id) || (this.warnedNonStandardIds.add(SS.id), console.warn(`Controller "${SS.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(SS.index))
      }
      setActive(SS) {
        this.activeInfo = SS ? {
          index: SS.index,
          id: SS.id,
          family: (0, bS.c)(SS.id, SS.vendorName)
        } : null;
        for (const HS of this.connectionListeners) HS(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (SS) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", SS)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.mf))
      }
    }((() => fS ? fS.call(navigator) : []), !0);
    PS.listenForConnections()
  },
  8938: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS,
      g: () => xS,
      h: () => NS,
      i: () => bS
    });
    var tS = gS(8944);
    const bS = SS => {
        const HS = [];
        SS.holdingGun && HS.push({
          kind: "reload"
        }), SS.touchscreenActionButton && HS.push({
          kind: "touchButton",
          label: SS.touchscreenActionButton
        });
        for (const XS of null !== (gS = null === (bS = SS.customButtons) || void 0 === bS ? void 0 : bS.filter(tS.h)) && void 0 !== gS ? gS : []) {
          var gS, bS;
          HS.push({
            kind: "customButton",
            id: XS.id,
            icon: XS.icon,
            description: XS.description
          })
        }
        return HS
      },
      XS = SS => SS.length >= 2,
      xS = SS => "specialAction" !== SS.kind,
      NS = (SS, HS) => {
        if (null === SS || null === HS) return SS === HS;
        if (SS.kind !== HS.kind) return !1;
        switch (SS.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return SS.action === HS.action;
          case "customButton":
            return SS.id === HS.id && SS.icon === HS.icon;
          case "touchButton":
            return SS.label === HS.label
        }
      }
  },
  8858: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS
    });
    const tS = {
      short: {
        wheelMs: 250,
        dropStackMs: 800
      },
      medium: {
        wheelMs: 500,
        dropStackMs: 1e3
      },
      long: {
        wheelMs: 800,
        dropStackMs: 1300
      }
    }
  },
  8930: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => IS,
      c: () => aS,
      f: () => fS,
      g: () => KS
    });
    var tS = gS(64),
      bS = gS(31),
      XS = gS(1522),
      xS = gS(8938),
      NS = gS(8948);
    let qS = null;
    const uS = () => qS,
      IS = SS => {
        (0, xS.h)(qS, SS) || (qS = SS, bS.k.cj(NS.f, qS))
      },
      fS = () => {
        const [SS, HS] = (0, tS.useState)(uS);
        return (0, XS.g)(NS.f, HS), SS
      };
    let kS = !1;
    const aS = SS => {
        SS !== kS && (kS = SS, bS.k.cj(NS.h, SS))
      },
      KS = () => {
        const [SS, HS] = (0, tS.useState)(kS);
        return (0, XS.g)(NS.h, HS), SS
      }
  },
  8959: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      c: () => NS
    });
    var tS = gS(31),
      bS = gS(8948);
    let XS = !1;
    const xS = () => XS,
      NS = SS => {
        SS !== XS && (XS = SS, tS.k.cj(bS.k, XS))
      }
  },
  8951: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS,
      f: () => qS
    });
    var tS = gS(31),
      bS = gS(8948);
    let XS = null,
      xS = 0;
    const NS = () => XS,
      qS = SS => {
        null === SS && null === XS || (XS = null === SS ? null : {
          id: ++xS,
          holdMs: SS
        }, tS.k.cj(bS.o, XS))
      }
  },
  8948: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS,
      f: () => tS,
      h: () => bS,
      k: () => NS,
      o: () => qS,
      p: () => uS,
      r: () => xS
    });
    const tS = "controllerActionHintChanged",
      bS = "controllerActionWheelHintChanged",
      XS = "controllerOpenChat",
      xS = "controllerSneakToggledChanged",
      NS = "controllerAttackLatchedChanged",
      qS = "controllerDropStackHoldChanged",
      uS = "controllerPickBlockHintChanged"
  },
  8965: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS,
      f: () => NS
    });
    var tS = gS(31),
      bS = gS(8948);
    let XS = !1;
    const xS = () => XS,
      NS = SS => {
        SS !== XS && (XS = SS, tS.k.cj(bS.p, XS))
      }
  },
  9025: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      f: () => NS
    });
    var tS = gS(31),
      bS = gS(8948);
    let XS = !1;
    const xS = () => XS,
      NS = SS => {
        SS !== XS && (XS = SS, tS.k.cj(bS.r, XS))
      }
  },
  8910: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      constructor() {
        this.downAtMs = null
      }
      update(SS, HS, gS, tS) {
        if (SS) return this.downAtMs = gS, null;
        if (null === this.downAtMs) return null;
        const bS = gS - this.downAtMs >= tS;
        return HS ? bS ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, bS ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  8402: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => fS,
      d: () => kS,
      h: () => NS,
      i: () => PS,
      m: () => nS
    });
    var tS = gS(45),
      bS = gS(8361),
      XS = gS(8327);
    const xS = (() => {
        try {
          return gS(8409)
        } catch {
          return null
        }
      })(),
      NS = [...XS._, "LeftStick", "RightStick"],
      qS = new Map,
      uS = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      IS = (new Set(Object.values(uS)), {
        xbox: {
          LB: 1.5,
          RB: 1.5
        },
        steamdeck: {
          Home: 2,
          Menu: 2,
          View: 2
        }
      }),
      fS = (SS, HS) => {
        var gS, tS;
        return null !== (gS = null === (tS = IS[uS[SS]]) || void 0 === tS ? void 0 : tS[HS]) && void 0 !== gS ? gS : 1
      },
      kS = (SS, HS) => {
        const gS = `./${uS[SS]}/${HS}.svg`;
        let tS = qS.get(gS);
        return void 0 === tS && (tS = xS ? xS(gS) : "", qS.set(gS, tS)), tS
      },
      aS = new Set,
      KS = [],
      jS = SS => {
        if (!aS.has(SS)) {
          aS.add(SS);
          for (const HS of NS) {
            const gS = kS(SS, HS);
            if (gS) {
              const SS = new Image;
              SS.crossOrigin = "anonymous", SS.src = gS, KS.push(SS)
            }
          }
        }
      },
      GS = "controllerGlyphFamily";
    let CS = null;
    const nS = SS => {
        SS !== CS && (CS = SS, tS.g.setItem(GS, SS), jS(SS))
      },
      PS = () => {
        const SS = tS.g.getItem(GS);
        (0, bS.d)(SS) && SS !== CS && (CS = SS, jS(SS))
      }
  },
  9048: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => WS,
      g: () => zS
    });
    var tS = gS(64),
      bS = gS(31),
      XS = gS(1522),
      xS = gS(8339),
      NS = gS(8319),
      qS = gS(8385),
      uS = gS(8353);
    const IS = {
        x: 0,
        y: 0,
        z: 0
      },
      fS = Math.PI / 180,
      kS = SS => Math.hypot(SS.x, SS.y, SS.z),
      aS = (SS, HS) => ({
        x: SS.x * HS,
        y: SS.y * HS,
        z: SS.z * HS
      }),
      KS = (SS, HS) => ({
        x: SS.x + HS.x,
        y: SS.y + HS.y,
        z: SS.z + HS.z
      }),
      jS = (SS, HS) => ({
        x: SS.x - HS.x,
        y: SS.y - HS.y,
        z: SS.z - HS.z
      }),
      GS = SS => {
        const HS = kS(SS);
        return 0 === HS ? IS : aS(SS, 1 / HS)
      },
      CS = SS => ({
        min: {
          ...SS
        },
        max: {
          ...SS
        }
      }),
      nS = (SS, HS) => ({
        min: {
          x: Math.min(SS.min.x, HS.x),
          y: Math.min(SS.min.y, HS.y),
          z: Math.min(SS.min.z, HS.z)
        },
        max: {
          x: Math.max(SS.max.x, HS.x),
          y: Math.max(SS.max.y, HS.y),
          z: Math.max(SS.max.z, HS.z)
        }
      }),
      PS = (SS, HS) => SS.max.x - SS.min.x <= HS && SS.max.y - SS.min.y <= HS && SS.max.z - SS.min.z <= HS;
    class QS {
      constructor() {
        this.bias = IS, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = IS, this.windowSec = 0
      }
      update(SS) {
        const HS = this.gyroRange ? nS(this.gyroRange, SS.gyro) : CS(SS.gyro),
          gS = SS.accel ? this.accelRange ? nS(this.accelRange, SS.accel) : CS(SS.accel) : null;
        if (!PS(HS, 1) || gS && !PS(gS, .01)) return void this.restartWindow(SS);
        if (this.gyroRange = HS, this.accelRange = gS, this.sum = KS(this.sum, aS(SS.gyro, SS.dtSec)), this.windowSec += SS.dtSec, this.windowSec < 1) return;
        const tS = aS(this.sum, 1 / this.windowSec);
        if (kS(tS) > 5) return;
        const bS = jS(tS, this.bias);
        let XS = 0;
        !this.calibrated || this.windowSec >= 3 ? XS = 1 : kS(bS) <= 1 && (XS = Math.min(1, SS.dtSec / 1)), this.bias = KS(this.bias, aS(bS, XS)), this.calibrated = this.calibrated || XS > 0
      }
      correct(SS) {
        return jS(SS, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = IS, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = IS, this.windowSec = 0
      }
      restartWindow(SS) {
        this.gyroRange = CS(SS.gyro), this.accelRange = SS.accel ? CS(SS.accel) : null, this.sum = IS, this.windowSec = 0
      }
    }
    class DS {
      constructor() {
        this.down = null
      }
      update(SS, HS, gS) {
        const tS = GS(aS(HS, -1));
        if (!this.down) return this.down = tS, tS;
        const bS = aS(SS, fS * gS),
          XS = this.down,
          xS = {
            x: XS.x - (bS.y * XS.z - bS.z * XS.y),
            y: XS.y - (bS.z * XS.x - bS.x * XS.z),
            z: XS.z - (bS.x * XS.y - bS.y * XS.x)
          },
          NS = 0 === kS(tS) ? 0 : Math.min(1, gS / .25);
        var qS, uS;
        return this.down = GS((uS = NS, KS(qS = xS, aS(jS(tS, qS), uS)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class wS {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(SS, HS, gS) {
        const tS = Math.hypot(SS, HS),
          bS = Math.max(0, Math.min(1, (tS - 2) / 2)),
          XS = {
            yaw: SS * (1 - bS),
            pitch: HS * (1 - bS),
            dtSec: gS
          };
        for (this.entries.push(XS), this.windowSec += gS; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let xS = 0,
          NS = 0;
        for (const uS of this.entries) xS += uS.yaw * uS.dtSec, NS += uS.pitch * uS.dtSec;
        const qS = this.windowSec > 0 ? {
          yaw: xS / this.windowSec,
          pitch: NS / this.windowSec
        } : {
          yaw: XS.yaw,
          pitch: XS.pitch
        };
        return {
          yaw: SS * bS + qS.yaw,
          pitch: HS * bS + qS.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class hS {
      constructor() {
        this.calibrator = new QS, this.gravity = new DS, this.smoother = new wS
      }
      process(SS, HS, gS) {
        const tS = Math.max(0, Math.min(.05, HS));
        this.calibrator.update({
          ...SS,
          dtSec: tS
        });
        const bS = this.calibrator.correct(SS.gyro);
        let XS = bS.y;
        "player" === gS && SS.accel && (XS = ((SS, HS) => {
          const gS = SS.y * HS.y + SS.z * HS.z;
          return -Math.sign(gS) * Math.min(1.41 * Math.abs(gS), Math.hypot(SS.y, SS.z))
        })(bS, this.gravity.update(bS, SS.accel, tS)));
        const xS = this.smoother.apply(XS, bS.x, tS),
          NS = ((SS, HS) => {
            const gS = Math.hypot(SS, HS);
            if (gS >= 1) return {
              yaw: SS,
              pitch: HS
            };
            const tS = gS / 1;
            return {
              yaw: SS * tS,
              pitch: HS * tS
            }
          })(xS.yaw, xS.pitch);
        return {
          yawDeg: NS.yaw * tS,
          pitchDeg: NS.pitch * tS
        }
      }
      getCalibration() {
        return {
          calibrated: this.calibrator.isCalibrated(),
          bias: this.calibrator.getBias()
        }
      }
      reset() {
        this.calibrator.reset(), this.gravity.reset(), this.smoother.reset()
      }
    }
    const ZS = (SS, HS) => {
      var gS, tS, bS;
      const XS = HS * fS,
        xS = null !== (gS = SS.beta) && void 0 !== gS ? gS : 0,
        NS = null !== (tS = SS.gamma) && void 0 !== tS ? tS : 0;
      return {
        x: xS * Math.cos(XS) - NS * Math.sin(XS),
        y: xS * Math.sin(XS) + NS * Math.cos(XS),
        z: null !== (bS = SS.alpha) && void 0 !== bS ? bS : 0
      }
    };
    var JS = gS(9054);
    class OS {
      constructor(SS, HS, gS) {
        this.hid = SS, this.sink = HS, this.onControllersChanged = gS, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = SS => {
          this.openController(SS.device).catch((SS => {
            console.warn("Could not open motion controller", SS)
          }))
        }, this.onDisconnect = SS => {
          this.opening.has(SS.device) && this.disconnectedWhileOpening.add(SS.device);
          const HS = this.controllers.get(SS.device);
          HS && (this.forget(HS), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const SS = await this.hid.getDevices();
        for (const HS of SS) await this.openController(HS).catch((SS => {
          console.warn("Could not open motion controller", SS)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const SS of [...this.controllers.values()]) this.forget(SS);
        this.onControllersChanged()
      }
      async request() {
        const SS = await this.hid.requestDevice({
          filters: JS.f
        });
        let HS = 0;
        for (const gS of SS) await this.openController(gS).catch((SS => {
          console.warn("Could not open motion controller", SS), HS++
        }));
        return HS
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((SS => null !== (0, JS.d)(SS.vendorId, SS.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((SS => SS.kind))
      }
      forget(SS) {
        SS.device.removeEventListener("inputreport", SS.onReport), this.controllers.get(SS.device) === SS && this.controllers.delete(SS.device)
      }
      async openController(SS) {
        const HS = (0, JS.d)(SS.vendorId, SS.productId);
        if (!HS || !this.running || this.controllers.has(SS) || this.opening.has(SS)) return;
        this.opening.add(SS);
        let gS = !1;
        try {
          SS.opened || await SS.open()
        } finally {
          this.opening.delete(SS), gS = this.disconnectedWhileOpening.delete(SS)
        }
        if (gS) return void SS.close().catch((SS => {
          console.debug("Could not close an unplugged motion controller", SS)
        }));
        if (!this.running) return;
        const tS = {
          device: SS,
          kind: HS,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: SS => {
            this.onReport(tS, SS)
          }
        };
        this.controllers.set(SS, tS), SS.addEventListener("inputreport", tS.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(tS)
        } catch (bS) {
          console.warn(`Could not turn on motion for ${HS}`, bS), this.controllers.get(SS) === tS && (this.forget(tS), this.onControllersChanged())
        }
      }
      async enableMotion(SS) {
        let {
          device: HS,
          kind: gS
        } = SS;
        if ((0, JS.e)(gS))
          for (const tS of JS.u[gS]) await HS.receiveFeatureReport(tS).catch((SS => {
            console.debug(`Motion controller feature report ${tS} unavailable`, SS)
          }));
        else
          for (let tS = 0; tS < 2; tS++)
            for (const {
                subcommand: SS,
                args: gS
              }
              of JS.w) await HS.sendReport(JS.z, (0, JS.c)(this.switchPacketCounter++, SS, gS)), await new Promise((SS => {
              setTimeout(SS, 60)
            }))
      }
      onReport(SS, HS) {
        const gS = (0, JS.m)(SS.kind, HS.reportId, HS.data, SS.device.productId);
        if (!gS) return;
        const tS = null === SS.lastEventMs ? 0 : (HS.timeStamp - SS.lastEventMs) / 1e3;
        SS.lastEventMs = HS.timeStamp;
        let bS = gS.dtSec;
        if (null !== bS && tS > 0 && (bS = Math.max(.001, Math.min(.017, tS / gS.readings.length))), null === bS && null !== gS.sensorClock && (0, JS.e)(SS.kind)) {
          const HS = (0, JS.q)(SS.kind, SS.lastClock, gS.sensorClock);
          SS.lastClock = gS.sensorClock, bS = 0 === HS ? null : HS
        }
        if (SS.lastReadingMs = HS.timeStamp, this.isPreferred(SS, HS.timeStamp))
          for (const xS of gS.readings) {
            var XS;
            this.sink(xS, null !== (XS = bS) && void 0 !== XS ? XS : tS, `hid${SS.openedOrder}`)
          }
      }
      isPreferred(SS, HS) {
        const gS = SS => 1e6 * JS.k[SS.kind] + SS.openedOrder;
        for (const tS of this.controllers.values())
          if (tS !== SS && HS - tS.lastReadingMs < 500 && gS(tS) < gS(SS)) return !1;
        return !0
      }
    }
    var dS = gS(104);
    const cS = () => DeviceMotionEvent,
      vS = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, dS.isMobile)(),
      ES = () => {
        var SS;
        const HS = null === (SS = window.screen.orientation) || void 0 === SS ? void 0 : SS.angle;
        return "number" === typeof HS ? HS : "number" === typeof window.orientation ? window.orientation : 0
      };
    class LS {
      constructor(SS, HS) {
        this.sink = SS, this.onStateChanged = HS, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((SS => {
            console.warn("Could not enable the motion sensor", SS)
          }))
        }, this.onMotion = SS => {
          const HS = SS.rotationRate;
          if (!HS || null === HS.alpha && null === HS.beta && null === HS.gamma) return;
          const gS = null === this.lastEventMs ? 0 : (SS.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = SS.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: ZS(HS, ES()),
            accel: null
          }, gS, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof cS().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const SS = cS().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof SS) return void this.listen();
        let HS;
        this.disarmGestureRequest();
        try {
          HS = await SS.call(DeviceMotionEvent)
        } catch (gS) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), gS
        }
        this.wanted && ("granted" === HS ? (this.granted = !0, this.listen()) : this.setState("denied"))
      }
      stop() {
        this.wanted = !1, this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), this.clearNoSensorTimer(), this.lastEventMs = null, this.setState("off")
      }
      armGestureRequest() {
        window.addEventListener("touchend", this.onGesture), window.addEventListener("click", this.onGesture)
      }
      disarmGestureRequest() {
        window.removeEventListener("touchend", this.onGesture), window.removeEventListener("click", this.onGesture)
      }
      listen() {
        this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), window.addEventListener("devicemotion", this.onMotion), this.setState("waiting"), this.clearNoSensorTimer(), this.noSensorTimer = setTimeout((() => {
          this.noSensorTimer = null, "waiting" === this.state && this.setState("noSensor")
        }), 3e3)
      }
      clearNoSensorTimer() {
        null !== this.noSensorTimer && (clearTimeout(this.noSensorTimer), this.noSensorTimer = null)
      }
      setState(SS) {
        this.state !== SS && (this.state = SS, this.onStateChanged())
      }
    }
    const YS = "controllerGyroStatusChanged",
      AS = {
        tL: 0,
        qL: 0
      },
      yS = SS => {
        var HS, gS;
        return "undefined" === typeof document || (null === (HS = null === (gS = document.featurePolicy) || void 0 === gS ? void 0 : gS.allowsFeature(SS)) || void 0 === HS || HS)
      };
    class VS {
      constructor() {
        this.processor = new hS, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = SS => {
          const HS = SS.gyroAiming && NS.g.hasConnectedPad();
          var gS, tS;
          HS !== this.phoneRunning && (this.phoneRunning = HS, HS ? null === (gS = this.phone) || void 0 === gS || gS.start() : null === (tS = this.phone) || void 0 === tS || tS.stop());
          if (SS.gyroAiming !== this.running) {
            var bS, XS;
            if (this.running = SS.gyroAiming, this.running) null === (bS = this.hid) || void 0 === bS || bS.start().catch((SS => {
              console.warn("Could not open motion controllers", SS)
            }));
            else null === (XS = this.hid) || void 0 === XS || XS.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          bS.k.cj(YS, this.getStatus())
        };
        const SS = (() => {
            var SS;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (SS = navigator.hid) && void 0 !== SS ? SS : null
          })(),
          HS = yS("hid");
        this.hidBlocked = null !== SS && !HS, this.hid = SS && HS ? new OS(SS, ((SS, HS, gS) => {
          this.lastHidReadingMs = performance.now(), this.feed(SS, HS, "player", gS)
        }), this.publishStatus) : null;
        const gS = yS("accelerometer") && yS("gyroscope");
        this.phoneBlocked = vS() && !gS, this.phone = vS() && gS ? new LS(((SS, HS, gS) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(SS, HS, "local", gS)
        }), this.publishStatus) : null, bS.k.subscribe(uS.e, this.syncWithSettings), NS.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, uS.f)()), this.publishStatus()
        })), this.syncWithSettings((0, uS.f)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var SS, HS, gS, tS;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (SS = null === (HS = this.hid) || void 0 === HS ? void 0 : HS.getConnectedKinds()) && void 0 !== SS ? SS : [],
          phoneMotion: null !== (gS = null === (tS = this.phone) || void 0 === tS ? void 0 : tS.getState()) && void 0 !== gS ? gS : "off",
          padConnected: NS.g.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var SS;
        await (null === (SS = this.phone) || void 0 === SS ? void 0 : SS.requestPermission())
      }
      drainLookDelta() {
        const SS = performance.now();
        SS - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = SS;
        const HS = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const gS = (0, uS.f)();
        return gS.gyroAiming && (SS => {
          let {
            activation: HS,
            isHeld: gS,
            useButton: tS,
            gyroButton: bS
          } = SS;
          return "always" === HS || gS("aiming" === HS ? tS : bS)
        })({
          activation: gS.gyroActivation,
          isHeld: SS => qS.e.isButtonHeld(SS),
          useButton: (0, xS.h)("use"),
          gyroButton: gS.gyroButton
        }) ? ((SS, HS) => ({
          tL: -SS.yawDeg * HS * fS,
          qL: -SS.pitchDeg * HS * fS
        }))(HS, gS.gyroSensitivity) : AS
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(SS, HS) {
        this.feed(SS, HS, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(SS, HS, gS, tS) {
        this.source !== tS && (this.processor.reset(), this.source = tS);
        const bS = this.processor.process(SS, HS, gS);
        this.pendingYawDeg += bS.yawDeg, this.pendingPitchDeg += bS.pitchDeg
      }
    }
    let iS = null;
    const WS = () => (iS || (iS = new VS), iS),
      zS = () => {
        const [SS, HS] = (0, tS.useState)((() => WS().getStatus()));
        return (0, XS.g)(YS, HS), (0, tS.useEffect)((() => {
          HS(WS().getStatus())
        }), []), SS
      }
  },
  9054: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => DS,
      d: () => qS,
      e: () => tS,
      f: () => NS,
      g: () => uS,
      k: () => IS,
      m: () => nS,
      q: () => GS,
      u: () => hS,
      w: () => wS,
      z: () => PS
    });
    const tS = SS => "dualShock4" === SS || "dualSense" === SS,
      bS = 1356,
      XS = 1406,
      xS = [{
        vendorId: bS,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: bS,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: bS,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: bS,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: bS,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: XS,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: XS,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: XS,
        productId: 8199,
        kind: "joyConRight"
      }],
      NS = xS.map((SS => {
        let {
          vendorId: HS,
          productId: gS
        } = SS;
        return {
          vendorId: HS,
          productId: gS
        }
      })),
      qS = (SS, HS) => {
        var gS, tS;
        return null !== (gS = null === (tS = xS.find((gS => gS.vendorId === SS && gS.productId === HS))) || void 0 === tS ? void 0 : tS.kind) && void 0 !== gS ? gS : null
      },
      uS = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      IS = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      fS = 2e3 / 32767,
      kS = 1 / 8192,
      aS = 936 / 13371,
      KS = (SS, HS, gS) => ({
        x: SS.getInt16(HS, !0) * gS,
        y: SS.getInt16(HS + 2, !0) * gS,
        z: SS.getInt16(HS + 4, !0) * gS
      }),
      jS = SS => 0 === SS.x && 0 === SS.y && 0 === SS.z,
      GS = (SS, HS, gS) => null === HS ? null : "dualShock4" === SS ? 16 * (gS - HS & 65535) / 3 / 1e6 : (gS - HS >>> 0) / 3 / 1e6,
      CS = (SS, HS) => "joyConRight" === HS ? {
        x: SS.y,
        y: -SS.z,
        z: -SS.x
      } : {
        x: -SS.y,
        y: SS.z,
        z: -SS.x
      },
      nS = (SS, HS, gS, bS) => tS(SS) ? ((SS, HS, gS, tS) => {
        const bS = ((SS, HS, gS) => "dualShock4" === SS ? 1 === HS && gS >= 63 ? 0 : 17 === HS && gS >= 65 ? 2 : null : 1 === HS && gS >= 62 ? 0 : 49 === HS && gS >= 63 ? 1 : null)(SS, HS, gS.byteLength);
        if (null === bS) return null;
        if (2976 === tS && 1 === HS && 0 !== (4 & gS.getUint8(30))) return null;
        const XS = bS + ("dualShock4" === SS ? 12 : 15),
          xS = KS(gS, XS, fS),
          NS = KS(gS, XS + 6, kS);
        return jS(xS) && jS(NS) ? null : {
          readings: [{
            gyro: xS,
            accel: NS
          }],
          dtSec: null,
          sensorClock: "dualShock4" === SS ? gS.getUint16(bS + 9, !0) : gS.getUint32(bS + 27, !0)
        }
      })(SS, HS, gS, bS) : ((SS, HS, gS) => {
        if (48 !== HS && 49 !== HS || gS.byteLength < 48) return null;
        const tS = [];
        for (let bS = 0; bS < 3; bS++) {
          const HS = KS(gS, 12 + 12 * bS, 244e-6),
            XS = KS(gS, 18 + 12 * bS, aS);
          if (jS(XS) && jS(HS)) return null;
          tS.push({
            gyro: CS(XS, SS),
            accel: CS(HS, SS)
          })
        }
        return {
          readings: tS,
          dtSec: .005,
          sensorClock: null
        }
      })(SS, HS, gS),
      PS = 1,
      QS = [0, 1, 64, 64, 0, 1, 64, 64],
      DS = (SS, HS, gS) => new Uint8Array([15 & SS, ...QS, HS, ...gS]),
      wS = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      hS = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  8393: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => cS,
      g: () => VS,
      k: () => CS,
      m: () => aS.h,
      n: () => LS,
      o: () => ES,
      r: () => nS,
      v: () => YS,
      x: () => aS.l,
      z: () => aS.o,
      C: () => iS,
      G: () => aS.q,
      I: () => ZS
    });
    var tS = gS(64),
      bS = gS(24),
      XS = gS(31),
      xS = gS(1522),
      NS = gS(1366),
      qS = gS(8353),
      uS = gS(8400),
      IS = gS(8331),
      fS = gS(8319),
      kS = gS(8402),
      aS = gS(1471),
      KS = gS(8327),
      jS = gS(8846),
      GS = gS(4502);
    const CS = SS => !SS.repeat && !(0, jS.c)(SS.key),
      nS = "PadHidesCursor";
    let PS = !1;
    const QS = SS => {
        SS !== PS && (PS = SS, document.documentElement.classList.toggle(nS, SS))
      },
      DS = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(SS) {
          let HS = !1,
            gS = !1;
          SS.values.forEach(((SS, tS) => {
            const bS = SS >= (this.buttonsDown[tS] ? KS.V : KS.S);
            bS && !this.buttonsDown[tS] && (HS = !0, gS = !0), this.buttonsDown[tS] = bS
          }));
          return [SS.leftStick, SS.rightStick].forEach(((SS, tS) => {
            const bS = this.stickAnchors[tS];
            Math.hypot(SS.x, SS.y) < (bS ? KS.V : .3) ? this.stickAnchors[tS] = null : (!bS || Math.hypot(SS.x - bS.x, SS.y - bS.y) >= .3) && (this.stickAnchors[tS] = {
              x: SS.x,
              y: SS.y
            }, HS = !0, gS ||= !bS)
          })), HS && (this.lastActivityMs = SS.timestampMs), this.onlyMovedOn = HS && !gS, HS
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(SS) {
          return !(SS - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((SS => SS)) || this.stickAnchors.some((SS => null !== SS)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((SS => null !== SS))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let wS = null,
      hS = !1;
    const ZS = () => hS;
    let JS = null,
      OS = !1,
      dS = null;
    const cS = () => dS;
    let vS = !1;
    const ES = SS => {
        if (!DS.observe(SS)) return !1;
        if (vS && DS.wasOnlyMoveOn() && !(0, aS.h)()) return !1;
        vS = !1, hS = !1;
        const HS = !(0, aS.h)();
        return HS && (wS = SS, dS = !PS && OS && JS ? {
          ...JS
        } : null), OS = !1, (0, aS.l)("gamepad"), QS(!0), (0, kS.m)((0, qS.g)()), HS
      },
      LS = SS => !(0, aS.h)() || SS === wS,
      YS = () => {
        DS.reset()
      },
      AS = () => {
        const SS = bS.b.get("activeInputDevice"),
          HS = "gamepad" === SS ? fS.g.getActivePad() : null;
        return {
          device: SS,
          inGame: (0, NS.v)(),
          padMovesMouse: null !== HS && (0, IS.g)(HS.id)
        }
      },
      yS = SS => {
        document.pointerLockElement ? JS = null : (JS ??= {
          x: 0,
          y: 0
        }, JS.x = SS.clientX, JS.y = SS.clientY)
      },
      VS = () => {
        const SS = new GS.b,
          HS = HS => {
            SS.reset(), vS = !1, (0, aS.l)(HS)
          },
          gS = SS => {
            if (SS.isTrusted) {
              if (SS instanceof KeyboardEvent) {
                if ((0, aS.j)(SS), !CS(SS)) return;
                hS = !0
              }
              if (SS instanceof PointerEvent && "touch" === SS.pointerType) return JS = null, void HS("touch");
              SS instanceof PointerEvent && (yS(SS), OS = !0), ("pointerdown" !== SS.type || (SS => {
                let {
                  device: HS,
                  inGame: gS,
                  padMovesMouse: tS
                } = SS;
                return !("gamepad" === HS && tS && gS)
              })(AS())) && HS("keyboardMouse")
            }
          },
          tS = SS => {
            SS.isTrusted && (JS = null, HS("touch"))
          },
          xS = SS => {
            SS.isTrusted && "touch" !== SS.pointerType && !SS.relatedTarget && (JS = null)
          },
          NS = gS => {
            if (!gS.isTrusted || "touch" === gS.pointerType) return;
            yS(gS);
            const tS = gS.movementX || 0,
              XS = gS.movementY || 0;
            if (0 === tS && 0 === XS) return;
            if (OS = !0, QS(!1), "keyboardMouse" === bS.b.get("activeInputDevice")) return;
            const xS = DS.isHolding(gS.timeStamp),
              NS = AS(),
              qS = (SS => {
                let {
                  device: HS,
                  inGame: gS,
                  padMovesMouse: tS,
                  padHolding: bS
                } = SS;
                return ("gamepad" !== HS || !tS) && "keyboardMouse" !== HS && (gS || !bS)
              })({
                ...NS,
                inGame: NS.inGame && (0, uS.d)(),
                padHolding: xS
              });
            qS && SS.add(tS, XS, gS.timeStamp) && (HS("keyboardMouse"), vS = DS.isStickOffRest())
          },
          qS = SS => {
            QS("gamepad" === SS)
          },
          IS = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", gS, IS), window.addEventListener("pointerdown", gS, IS), window.addEventListener("wheel", gS, IS), window.addEventListener("touchstart", tS, IS), window.addEventListener("pointermove", NS, IS), window.addEventListener("pointerout", xS, IS);
        const fS = XS.k.subscribe("appManagerUpdated|activeInputDevice", qS);
        return qS(bS.b.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", gS, IS), window.removeEventListener("pointerdown", gS, IS), window.removeEventListener("wheel", gS, IS), window.removeEventListener("touchstart", tS, IS), window.removeEventListener("pointermove", NS, IS), window.removeEventListener("pointerout", xS, IS), JS = null, XS.k.unsubscribe(fS), QS(!1)
        }
      },
      iS = () => {
        const [SS, HS] = (0, tS.useState)(qS.g);
        return (0, xS.g)(qS.d, (() => {
          HS((0, qS.g)())
        })), (0, xS.g)(fS.e, (() => {
          HS((0, qS.g)())
        })), SS
      }
  },
  8361: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS,
      d: () => bS
    });
    const tS = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      bS = SS => tS.includes(SS)
  },
  8891: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      h: () => XS,
      k: () => qS,
      m: () => NS
    });
    var tS = gS(1522),
      bS = gS(1477);
    const XS = "controllerInventoryCursorChanged",
      xS = {
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
      NS = () => {
        var SS, HS;
        return (0, tS.i)(XS, null !== (SS = null === (HS = (0, bS.d)()) || void 0 === HS ? void 0 : HS.getInventoryCursorState()) && void 0 !== SS ? SS : xS)
      },
      qS = () => {
        var SS, HS;
        return null !== (SS = null === (HS = (0, bS.d)()) || void 0 === HS ? void 0 : HS.isPadSteppingSlots()) && void 0 !== SS && SS
      }
  },
  8882: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => kS,
      g: () => NS,
      h: () => qS,
      i: () => xS,
      k: () => XS,
      m: () => IS,
      p: () => fS
    });
    let tS = null;
    const bS = new Set,
      XS = SS => (tS = SS, () => {
        if (tS === SS) {
          tS = null;
          for (const SS of bS) SS()
        }
      }),
      xS = SS => (bS.add(SS), () => {
        bS.delete(SS)
      }),
      NS = () => tS,
      qS = () => null !== tS;
    let uS = null;
    const IS = SS => {
        uS = SS
      },
      fS = () => {
        const SS = uS;
        return uS = null, SS
      },
      kS = (SS, HS) => {
        var gS, tS;
        return null !== (gS = null !== (tS = SS.find((SS => SS.element === HS))) && void 0 !== tS ? tS : SS.find((SS => SS.element.contains(HS)))) && void 0 !== gS ? gS : null
      }
  },
  8897: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS,
      g: () => xS
    });
    var tS = gS(64);
    const bS = new WeakMap,
      XS = SS => {
        var HS, gS;
        return null !== (HS = null === (gS = bS.get(SS)) || void 0 === gS ? void 0 : gS.current) && void 0 !== HS ? HS : null
      },
      xS = (SS, HS) => {
        const gS = (0, tS.useRef)(HS);
        gS.current = HS;
        const XS = (0, tS.useRef)(null);
        (0, tS.useEffect)((() => {
          const HS = SS.current,
            tS = XS.current;
          HS !== tS && (tS && bS.get(tS) === gS && bS.delete(tS), XS.current = HS, HS && bS.set(HS, gS))
        })), (0, tS.useEffect)((() => () => {
          const SS = XS.current;
          SS && bS.get(SS) === gS && bS.delete(SS), XS.current = null
        }), [])
      }
  },
  9023: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS,
      f: () => uS,
      j: () => fS,
      n: () => IS,
      q: () => qS,
      u: () => aS
    });
    var tS = gS(31),
      bS = gS(2128),
      XS = gS(1477),
      xS = gS(1471);
    const NS = SS => {
        var HS, gS;
        return (0, xS.h)() && null !== (HS = null === (gS = (0, XS.d)()) || void 0 === gS ? void 0 : gS.getGlyphForNoaAction(SS)) && void 0 !== HS ? HS : null
      },
      qS = "controllerGlyph:",
      uS = SS => {
        var HS, gS;
        return null !== (HS = null === (gS = (0, XS.d)()) || void 0 === gS ? void 0 : gS.getPadGlyphIconName(SS)) && void 0 !== HS ? HS : `${qS}xbox/${SS}`
      },
      IS = SS => SS.startsWith(qS),
      fS = SS => {
        var HS, gS;
        return IS(SS) && null !== (HS = null === (gS = (0, XS.d)()) || void 0 === gS ? void 0 : gS.getPadGlyphIconUrl(SS)) && void 0 !== HS ? HS : null
      },
      kS = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", xS.d, bS.g, bS.e],
      aS = SS => {
        const HS = kS.map((HS => tS.k.subscribe(HS, SS)));
        return () => {
          for (const SS of HS) tS.k.unsubscribe(SS)
        }
      }
  },
  8400: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS,
      d: () => IS,
      e: () => qS,
      h: () => NS
    });
    var tS = gS(24),
      bS = gS(1733),
      XS = gS(1846);
    const xS = new Map,
      NS = (SS, HS) => (xS.has(SS) && console.warn(`Gameplay blocker "${SS}" registered twice; the newer one replaces it.`), xS.set(SS, HS), () => {
        xS.get(SS) === HS && xS.delete(SS)
      }),
      qS = () => (0, XS.d)(document.activeElement),
      uS = function() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [HS, gS] of xS)
          if (!SS.includes(HS) && gS()) return HS;
        return null
      },
      IS = function() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === tS.b.get("gameState") && (!(0, bS.l)() && (!qS() && null === uS(SS)))
      }
  },
  8327: (SS, HS, gS) => {
    gS.d(HS, {
      A: () => PS,
      E: () => vS,
      H: () => QS,
      L: () => CS,
      P: () => GS,
      R: () => uS,
      S: () => kS,
      V: () => aS,
      Y: () => bS,
      _: () => tS,
      ab: () => wS,
      b: () => LS,
      bb: () => dS,
      cb: () => ES,
      d: () => cS,
      eb: () => DS,
      h: () => IS,
      l: () => qS,
      m: () => NS,
      p: () => ZS,
      q: () => nS,
      r: () => hS,
      t: () => XS,
      w: () => fS
    });
    const tS = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      bS = tS.length,
      XS = function() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(bS).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: SS
        }
      },
      xS = Object.fromEntries(tS.map(((SS, HS) => [SS, HS]))),
      NS = SS => xS[SS],
      qS = function(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const tS = Math.hypot(SS.x, SS.y);
        if (tS <= HS) return {
          x: 0,
          y: 0
        };
        const bS = Math.min(1, (tS - HS) / Math.max(1e-4, gS - HS));
        return {
          x: SS.x / tS * bS,
          y: SS.y / tS * bS
        }
      },
      uS = ["exponential", "linear", "boost"],
      IS = (SS, HS) => {
        const gS = Math.hypot(SS.x, SS.y);
        if (0 === gS) return {
          x: 0,
          y: 0
        };
        const tS = ((SS, HS) => {
          const gS = Math.max(0, Math.min(1, SS));
          return "linear" === HS ? gS : gS * gS
        })(gS, HS);
        return {
          x: SS.x / gS * tS,
          y: SS.y / gS * tS
        }
      },
      fS = .5,
      kS = .3,
      aS = .2,
      KS = NS("LT"),
      jS = NS("RT"),
      GS = SS => SS === KS || SS === jS,
      CS = (SS, HS) => {
        const gS = NS(HS);
        return GS(gS) ? SS[gS] > .35 : SS[gS] >= fS
      },
      nS = (SS, HS) => SS.map(((SS, gS) => GS(gS) ? HS[gS] ? SS > .35 : SS >= .55 : SS >= fS)),
      PS = ["Up", "Down", "Left", "Right"],
      QS = SS => PS.includes(SS),
      DS = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(SS.x, SS.y) < HS ? null : Math.abs(SS.x) > Math.abs(SS.y) ? SS.x > 0 ? "Right" : "Left" : SS.y > 0 ? "Down" : "Up"
      },
      wS = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      hS = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      ZS = ["default", "slow", "off"],
      JS = 800,
      OS = 250,
      dS = (SS, HS) => "off" === HS ? null : "slow" === HS ? {
        initialDelayMs: Math.max(SS.initialDelayMs, JS),
        intervalMs: Math.max(SS.intervalMs, OS)
      } : SS;
    class cS {
      constructor(SS) {
        this.readTiming = SS, this.Ku = !1, this.timing = null, this.nextFireMs = 0
      }
      update(SS, HS) {
        return SS ? this.Ku ? !!(this.timing && HS >= this.nextFireMs) && (this.nextFireMs = HS + this.timing.intervalMs, !0) : (this.Ku = !0, this.timing = this.readTiming(), this.nextFireMs = HS + (null !== (gS = null === (tS = this.timing) || void 0 === tS ? void 0 : tS.initialDelayMs) && void 0 !== gS ? gS : 0), !0) : (this.Ku = !1, !1);
        var gS, tS
      }
      reset() {
        this.Ku = !1
      }
    }
    const vS = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      ES = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class LS {
      constructor(SS) {
        this.timer = SS, this.direction = null
      }
      update(SS, HS) {
        return SS !== this.direction && (this.timer.reset(), this.direction = SS), this.timer.update(null !== SS, HS) ? SS : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8903: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      h: () => XS
    });
    let tS = -1 / 0;
    const bS = () => {
        tS = performance.now()
      },
      XS = SS => performance.now() - tS < SS
  },
  8854: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS,
      g: () => XS
    });
    var tS = gS(8353),
      bS = gS(8327);
    const XS = SS => (0, bS.bb)(SS, (0, tS.f)().buttonRepeat),
      xS = SS => new bS.d((() => XS(SS)))
  },
  8376: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => qS,
      h: () => XS,
      j: () => NS
    });
    var tS = gS(31),
      bS = gS(8353);
    const XS = (SS, HS) => "OpenShop" === SS ? "shop" === HS : "OpenLobbyLeaderboard" !== SS || "leaderboard" === HS;
    let xS = !1;
    const NS = SS => {
        SS !== xS && (xS = SS, tS.k.cj(bS.d, (0, bS.f)()))
      },
      qS = () => ((SS, HS) => "shop" === SS && HS ? "shop" : "leaderboard")((0, bS.f)().leaderboardButton, xS)
  },
  8369: (SS, HS, gS) => {
    gS.d(HS, {
      C: () => NS,
      G: () => DS,
      K: () => kS,
      M: () => aS,
      Q: () => fS,
      S: () => QS,
      V: () => uS,
      Y: () => CS,
      Z: () => OS,
      _: () => PS,
      bb: () => jS,
      d: () => AS,
      f: () => VS,
      fb: () => GS,
      gb: () => KS,
      h: () => dS,
      j: () => xS,
      jb: () => nS,
      l: () => JS,
      mb: () => ES,
      o: () => hS,
      qb: () => XS,
      r: () => LS,
      t: () => YS,
      ub: () => wS,
      vb: () => yS,
      w: () => IS,
      yb: () => ZS,
      z: () => qS
    });
    var tS = gS(8346),
      bS = gS(8327);
    const XS = {
        min: 25,
        max: 500,
        step: 5
      },
      xS = {
        min: 25,
        max: 100,
        step: 5
      },
      NS = {
        min: 0,
        max: .4,
        step: .01
      },
      qS = {
        min: 25,
        max: 300,
        step: 5
      },
      uS = {
        min: .5,
        max: 6,
        step: .1
      },
      IS = (SS, HS) => {
        if (!Number.isFinite(SS)) return HS.min;
        const gS = HS.min + Math.round((SS - HS.min) / HS.step) * HS.step,
          tS = Math.min(HS.max, Math.max(HS.min, gS));
        return Math.round(1e3 * tS) / 1e3
      },
      fS = SS => `${Math.round(SS)}%`,
      kS = SS => fS(100 * SS),
      aS = SS => `${SS.toFixed(1)}\xd7`,
      KS = [{
        value: "auto",
        labelKey: "controller:settingsPromptAuto"
      }, {
        value: "xbox",
        labelKey: "controller:settingsPromptXbox"
      }, {
        value: "playstation",
        labelKey: "controller:settingsPromptPlayStation"
      }, {
        value: "nintendo",
        labelKey: "controller:settingsPromptNintendo"
      }, {
        value: "steamdeck",
        labelKey: "controller:settingsPromptSteamDeck"
      }, {
        value: "generic",
        labelKey: "controller:settingsPromptGeneric"
      }],
      jS = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      GS = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      CS = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      nS = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      PS = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      QS = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      DS = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      wS = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      hS = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      ZS = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      JS = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      OS = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      dS = {
        jump: "controller:settingsActionJump",
        sneak: "controller:settingsActionSneak",
        sneakToggle: "controller:settingsActionSneakToggle",
        sprint: "controller:settingsActionSprint",
        attack: "controller:settingsActionAttack",
        use: "controller:settingsActionUse",
        hotbarPrevious: "controller:settingsActionHotbarPrevious",
        hotbarNext: "controller:settingsActionHotbarNext",
        inventory: "controller:settingsActionInventory",
        actionButton: "controller:settingsActionActionButton",
        perspective: "controller:settingsActionPerspective",
        pickBlock: "controller:settingsActionPickBlock",
        drop: "controller:settingsActionDrop",
        emoteWheel: "controller:settingsActionEmoteWheel",
        chat: "controller:settingsActionChat",
        pause: "controller:settingsActionPause",
        leaderboard: "controller:settingsActionLeaderboard",
        menuConfirm: "controller:settingsActionMenuConfirm",
        menuBack: "controller:settingsActionMenuBack",
        menuTabPrevious: "controller:settingsActionMenuTabPrevious",
        menuTabNext: "controller:settingsActionMenuTabNext",
        menuPageUp: "controller:settingsActionMenuPageUp",
        menuPageDown: "controller:settingsActionMenuPageDown",
        menuSecondary: "controller:settingsActionMenuSecondary",
        menuToggleCursor: "controller:settingsActionMenuToggleCursor",
        inventoryPrimary: "controller:settingsActionInventoryPrimary",
        inventorySecondary: "controller:settingsActionInventorySecondary",
        inventoryQuickMove: "controller:settingsActionInventoryQuickMove",
        inventoryClose: "controller:settingsActionInventoryClose",
        inventoryPanelPrevious: "controller:settingsActionInventoryPanelPrevious",
        inventoryPanelNext: "controller:settingsActionInventoryPanelNext",
        inventoryDrop: "controller:settingsActionInventoryDrop",
        inventoryHotbarSwap: "controller:settingsActionInventoryHotbarSwap",
        keyboardType: "controller:settingsActionKeyboardType",
        keyboardBackspace: "controller:settingsActionKeyboardBackspace",
        keyboardSpace: "controller:settingsActionKeyboardSpace",
        keyboardCaretLeft: "controller:settingsActionKeyboardCaretLeft",
        keyboardCaretRight: "controller:settingsActionKeyboardCaretRight",
        keyboardShift: "controller:settingsActionKeyboardShift",
        keyboardSymbols: "controller:settingsActionKeyboardSymbols",
        keyboardSubmit: "controller:settingsActionKeyboardSubmit",
        keyboardClose: "controller:settingsActionKeyboardClose",
        keyboardChannel: "controller:settingsActionKeyboardChannel"
      },
      cS = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      vS = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      ES = tS.e.map((SS => {
        let {
          group: HS,
          actions: gS
        } = SS;
        const tS = gS.map((SS => ({
          kind: "action",
          action: SS
        })));
        return {
          titleKey: cS[HS],
          rows: "gameplay" === HS ? [...vS, ...tS] : tS
        }
      })),
      LS = bS._.filter((SS => "Home" !== SS)),
      YS = 1e4;
    class AS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = SS, this.openButton = HS, this.accepts = gS, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(SS, HS) {
        var gS;
        this.updateIgnored(SS, HS);
        const tS = HS - (null !== (gS = this.startMs) && void 0 !== gS ? gS : HS) >= 250;
        for (const bS of LS)
          if (bS !== this.cancelButton && tS && !this.ignoredUntilMs.has(bS) && SS.wasPressed(bS) && this.accepts(bS)) return {
            kind: "bind",
            button: bS
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (SS.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = HS
        }
        return null === this.cancelDownAtMs ? null : SS.isHeld(this.cancelButton) && HS - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : SS.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(SS) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (SS - this.cancelDownAtMs) / 700)
      }
      updateIgnored(SS, HS) {
        if (null === this.startMs) {
          this.startMs = HS;
          for (const HS of LS) SS.isDown(HS) && this.ignoredUntilMs.set(HS, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, HS + 250)
        }
        for (const [gS, tS] of this.ignoredUntilMs) {
          const bS = SS.isDown(gS);
          tS === 1 / 0 ? bS || gS !== this.openButton ? bS || this.ignoredUntilMs.delete(gS) : this.ignoredUntilMs.set(gS, HS + 250) : HS >= tS ? this.ignoredUntilMs.delete(gS) : bS && this.ignoredUntilMs.set(gS, 1 / 0)
        }
      }
    }
    const yS = 6e3;
    class VS {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(SS, HS) {
        let {
          pressed: gS,
          Ku: tS
        } = SS;
        if (gS) {
          const SS = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== SS && HS - SS < 1500 ? [...this.pressesAtMs, HS] : [HS], this.pressesAtMs.length >= 3) return 1
        }
        return tS ? (this.downAtMs ??= HS, Math.min(1, (HS - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  8920: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      c: () => bS
    });
    let tS = null;
    const bS = function(SS) {
        const HS = {
          cycle: SS,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return tS = HS, () => {
          tS === HS && (tS = null)
        }
      },
      XS = () => {
        var SS;
        return null !== (SS = tS) && void 0 !== SS && SS.canCycle() ? tS.cycle : null
      }
  },
  5191: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      f: () => xS
    });
    var tS = gS(64);
    const bS = new WeakMap,
      XS = SS => {
        var HS;
        const gS = SS.closest("[data-pad-slider]");
        return gS && null !== (HS = bS.get(gS)) && void 0 !== HS ? HS : null
      },
      xS = (SS, HS) => {
        const gS = (0, tS.useRef)(HS);
        gS.current = HS, (0, tS.useEffect)((() => {
          if (SS.current) return ((SS, HS) => (bS.set(SS, HS), () => {
            bS.get(SS) === HS && bS.delete(SS)
          }))(SS.current, {
            adjust: SS => {
              gS.current.adjust(SS)
            },
            setFraction: SS => {
              gS.current.setFraction(SS)
            },
            endDrag: () => {
              gS.current.endDrag()
            }
          })
        }), [SS])
      }
  },
  9012: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      g: () => xS,
      k: () => XS,
      l: () => tS,
      n: () => NS,
      q: () => uS,
      r: () => IS
    });
    const tS = "controllerActionWheelOpen",
      bS = "controllerActionWheelAim",
      XS = "controllerActionWheelCommit",
      xS = "controllerActionWheelClose",
      NS = "controllerActionWheelPick";
    let qS = !1;
    const uS = () => qS,
      IS = SS => {
        qS = SS
      }
  },
  9006: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS,
      g: () => bS
    });
    let tS = 0;
    const bS = () => {
        tS++
      },
      XS = () => tS
  },
  8912: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => qS,
      d: () => bS,
      h: () => xS,
      j: () => XS,
      k: () => tS,
      l: () => uS
    });
    const tS = "controllerQuickChatWheelOpen",
      bS = "controllerQuickChatWheelAim",
      XS = "controllerQuickChatWheelCommit",
      xS = "controllerQuickChatWheelClose";
    let NS = !1;
    const qS = () => NS,
      uS = SS => {
        NS = SS
      }
  },
  8923: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      i: () => bS
    });
    var tS = gS(31);
    const bS = "localBlockBroken";

    function XS() {
      return {
        onPlayerChangeBlock(SS, HS, gS, XS, xS, NS) {
          "Air" === NS && tS.k.cj(bS)
        }
      }
    }
  },
  8970: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(8975),
      bS = gS(680),
      XS = gS(138);

    function xS(SS) {
      var HS, gS;
      if ((0, bS.K)(SS)) return !0;
      const xS = null !== (HS = null === (gS = XS.m[XS.r]) || void 0 === gS ? void 0 : gS.adConfig.showRewardedAds) && void 0 !== HS && HS;
      for (const bS in SS) {
        const HS = SS[bS];
        if (null !== HS && void 0 !== HS && HS.items)
          for (const SS in HS.items)
            if ((0, tS.i)(HS.items[SS], xS)) return !1
      }
      return !0
    }
  },
  8983: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      d: () => tS
    });
    const tS = 100;

    function bS(SS) {
      let {
        translationKeys: HS = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return SS.map((SS => {
        var gS;
        return null !== (gS = function(SS, HS) {
          if ("string" === typeof SS) return SS;
          const gS = "str" in SS ? SS.str : SS;
          if ("string" === typeof gS) return gS;
          if ("entityName" in gS) return gS.entityName;
          if (HS && "translationKey" in gS) return `{${gS.translationKey}${void 0===gS.params?"":` ${JSON.stringify(gS.params)}`}}`;
          return null
        }(SS, HS)) && void 0 !== gS ? gS : " "
      })).join("")
    }
  },
  9014: () => {},
  8409: (SS, HS, gS) => {
    var tS = {
      "./nintendo/A.svg": 8418,
      "./nintendo/B.svg": 8420,
      "./nintendo/Down.svg": 8429,
      "./nintendo/Home.svg": 8434,
      "./nintendo/LB.svg": 8436,
      "./nintendo/LS.svg": 8445,
      "./nintendo/LT.svg": 8450,
      "./nintendo/Left.svg": 8452,
      "./nintendo/LeftStick.svg": 8457,
      "./nintendo/Menu.svg": 8461,
      "./nintendo/RB.svg": 8463,
      "./nintendo/RS.svg": 8465,
      "./nintendo/RT.svg": 8473,
      "./nintendo/Right.svg": 8482,
      "./nintendo/RightStick.svg": 8489,
      "./nintendo/Up.svg": 8493,
      "./nintendo/View.svg": 8501,
      "./nintendo/X.svg": 8503,
      "./nintendo/Y.svg": 8507,
      "./playstation/A.svg": 8515,
      "./playstation/B.svg": 8519,
      "./playstation/Down.svg": 8523,
      "./playstation/Home.svg": 8530,
      "./playstation/LB.svg": 8532,
      "./playstation/LS.svg": 8538,
      "./playstation/LT.svg": 8541,
      "./playstation/Left.svg": 8549,
      "./playstation/LeftStick.svg": 8556,
      "./playstation/Menu.svg": 8562,
      "./playstation/RB.svg": 8564,
      "./playstation/RS.svg": 8571,
      "./playstation/RT.svg": 8578,
      "./playstation/Right.svg": 8580,
      "./playstation/RightStick.svg": 8582,
      "./playstation/Up.svg": 8585,
      "./playstation/View.svg": 8590,
      "./playstation/X.svg": 8599,
      "./playstation/Y.svg": 8608,
      "./steamdeck/A.svg": 8616,
      "./steamdeck/B.svg": 8622,
      "./steamdeck/Down.svg": 8631,
      "./steamdeck/Home.svg": 8636,
      "./steamdeck/LB.svg": 8643,
      "./steamdeck/LS.svg": 8646,
      "./steamdeck/LT.svg": 8650,
      "./steamdeck/Left.svg": 8655,
      "./steamdeck/LeftStick.svg": 8662,
      "./steamdeck/Menu.svg": 8670,
      "./steamdeck/RB.svg": 8677,
      "./steamdeck/RS.svg": 8683,
      "./steamdeck/RT.svg": 8687,
      "./steamdeck/Right.svg": 8695,
      "./steamdeck/RightStick.svg": 8700,
      "./steamdeck/Up.svg": 8707,
      "./steamdeck/View.svg": 8713,
      "./steamdeck/X.svg": 8720,
      "./steamdeck/Y.svg": 8724,
      "./xbox/A.svg": 8727,
      "./xbox/B.svg": 8735,
      "./xbox/Down.svg": 8743,
      "./xbox/Home.svg": 8750,
      "./xbox/LB.svg": 8755,
      "./xbox/LS.svg": 8764,
      "./xbox/LT.svg": 8772,
      "./xbox/Left.svg": 8781,
      "./xbox/LeftStick.svg": 8789,
      "./xbox/Menu.svg": 8796,
      "./xbox/RB.svg": 8799,
      "./xbox/RS.svg": 8806,
      "./xbox/RT.svg": 8812,
      "./xbox/Right.svg": 8815,
      "./xbox/RightStick.svg": 8819,
      "./xbox/Up.svg": 8822,
      "./xbox/View.svg": 8824,
      "./xbox/X.svg": 8830,
      "./xbox/Y.svg": 8839
    };

    function bS(SS) {
      var HS = XS(SS);
      return gS(HS)
    }

    function XS(SS) {
      if (!gS.o(tS, SS)) {
        var HS = new Error("Cannot find module '" + SS + "'");
        throw HS.code = "MODULE_NOT_FOUND", HS
      }
      return tS[SS]
    }
    bS.keys = function() {
      return Object.keys(tS)
    }, bS.resolve = XS, SS.exports = bS, bS.id = 8409
  },
  8418: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  8420: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  8429: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8434: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8436: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  8445: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8450: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  8452: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8457: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8461: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  8463: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  8465: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8473: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  8482: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8489: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8493: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8501: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  8503: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  8507: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  8515: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  8519: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  8523: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  8530: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  8532: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  8538: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  8541: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  8549: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  8556: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8562: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  8564: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  8571: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  8578: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  8580: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  8582: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8585: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  8590: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  8599: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  8608: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  8616: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8622: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8631: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8636: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  8643: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  8646: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8650: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  8655: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8662: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8670: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  8677: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  8683: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8687: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RT.a0523211130959598bed.svg"
  },
  8695: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8700: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8707: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8713: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  8720: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8724: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  8727: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  8735: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8743: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8750: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8755: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8764: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8772: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8781: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8789: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8796: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8799: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8806: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8812: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8815: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8819: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8822: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8824: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8830: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8839: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);