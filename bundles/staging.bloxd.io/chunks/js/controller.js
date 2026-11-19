export const id = 28;
export const ids = [28];
export const modules = {
  8223: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => jT,
      g: () => vT,
      h: () => ET
    });
    var iT = IT(46),
      zT = IT(4061),
      kT = IT(1110),
      WT = IT(1403),
      XT = IT(16),
      BT = IT(2976),
      FT = IT(2029),
      ST = IT(1214),
      DT = IT(8248),
      LT = IT(1751),
      xT = IT(1784),
      cT = IT(1171),
      KT = IT(12),
      MT = IT(1585),
      rT = IT(1042),
      AT = IT.n(rT),
      gT = IT(8226),
      hT = IT(8229),
      wT = IT(8231),
      mT = IT(8135),
      eT = IT(8238),
      RT = (IT(8244), IT(1083));
    let uT = null;

    function vT() {
      return null !== uT
    }

    function ET() {
      return "pad" === uT
    }

    function fT() {
      return "inGame" === KT.c.get("gameState") && !(0, MT.t)()
    }

    function CT(TT) {
      return (0, hT.t)(TT, ST.k, hT.g, hT.h, hT.l)
    }
    const jT = (0, iT.memo)((function() {
      const {
        t: TT
      } = (0, cT.t)(), {
        userContext: oT
      } = (0, kT.b)(), [IT, KT] = (0, iT.useState)(null), [rT, vT] = (0, iT.useState)(null), ET = (0, iT.useRef)(null), jT = (0, iT.useCallback)((TT => {
        ET.current = TT, vT(TT)
      }), []), JT = (0, iT.useRef)(0), UT = (0, iT.useRef)(null), aT = (0, iT.useRef)({
        x: 0,
        y: 0
      }), [YT, QT] = (0, iT.useState)(0), OT = (0, iT.useMemo)((() => function(TT) {
        const oT = [];
        for (let iT = 0; iT < ST.k; iT++) {
          var IT;
          oT.push(null !== (IT = TT[iT]) && void 0 !== IT ? IT : null)
        }
        return oT
      }((0, DT.h)(oT.getPlayerCosmetics().emote))), [oT, YT]);
      (0, xT.c)("cosmeticsUpdated", (TT => {
        TT.some((TT => TT.local && "emote" === TT.oT)) && QT((TT => TT + 1))
      }));
      const HT = (0, iT.useRef)(!1),
        nT = (0, iT.useCallback)((function(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === TT && (0, wT.h)(), HT.current = oT, aT.current = {
            x: 0,
            y: 0
          }, jT(null), KT(TT)
        }), [jT]),
        qT = (0, iT.useCallback)((() => {
          KT(null), jT(null), aT.current = {
            x: 0,
            y: 0
          }
        }), [jT]),
        ZT = (0, iT.useCallback)((TT => {
          if (Date.now() < JT.current) return;
          const oT = (0, FT.g)(TT),
            IT = !!oT.holdUntilMove,
            iT = IT ? 600 : Math.ceil(1e3 * oT.animation.animation_length / FT.c) + 200;
          JT.current = Date.now() + iT, UT.current = TT, LT.gameBridge.send("playEmote", TT), LT.gameBridge.send("applyTemporaryThirdPerson", IT ? {} : {
            durationMs: iT
          })
        }), []);
      (0, WT.g)("requestToggleEmoteWheel", (() => {
        null === IT ? fT() && nT("click") : qT()
      })), (0, WT.g)("requestEmoteWheelHoldOpen", (() => {
        null === IT && fT() && nT((0, gT.b)() ? "hold" : "click")
      })), (0, WT.g)("requestEmoteWheelPadOpen", (TT => {
        null !== IT || !fT() || (0, mT.c)() || (0, eT.p)() || nT("pad", TT)
      })), (0, WT.g)("requestEmoteRepeatLast", (() => {
        if (null !== IT || !fT() || (0, mT.c)() || (0, eT.p)()) return;
        const TT = UT.current;
        null !== TT && OT.includes(TT) ? ZT(TT) : nT("pad", !0)
      }));
      const lT = () => {
        const TT = ET.current,
          oT = null !== TT ? OT[TT] : null;
        null !== oT && "pad" === IT && Date.now() < JT.current || (qT(), null !== oT && ZT(oT))
      };
      (0, WT.g)("emoteWheelPadAim", (TT => {
        if ("pad" !== IT) return;
        const oT = (0, hT.H)(TT, ST.k, ET.current);
        jT(null !== oT && null !== OT[oT] ? oT : null)
      })), (0, WT.g)("requestEmoteWheelPadCommit", (TT => {
        "pad" !== IT || TT && HT.current || lT()
      })), (0, WT.g)("appManagerUpdated|activeInputDevice", (TT => {
        null !== IT && "pad" === IT !== ("gamepad" === TT) && qT()
      })), (0, iT.useLayoutEffect)((() => (uT = IT, (0, BT.x)("emoteWheel", "pad" === IT), XT.h.XM(BT.o), () => {
        uT = null, (0, BT.x)("emoteWheel", !1), XT.h.XM(BT.o)
      })), [IT]), (0, WT.g)("requestEmoteWheelHoldRelease", (() => {
        "hold" === IT && lT()
      })), (0, WT.g)("requestEmoteWheelClose", (() => {
        null !== IT && qT()
      })), (0, WT.g)("appManagerUpdated|gameState", (TT => {
        "inGame" !== TT && qT()
      }));
      const sT = () => {
        (0, MT.t)() && qT()
      };
      if ((0, WT.g)("appManagerUpdated|openEverythingMenuName", sT), (0, WT.g)("appManagerUpdated|openInGameMenuName", sT), (0, WT.g)("pointerLockUpdate", (TT => {
          TT || "hold" !== IT || qT()
        })), (0, iT.useEffect)((() => {
          if (null === IT) return;
          const TT = TT => {
            "Escape" === TT.key && (TT.stopImmediatePropagation(), TT.preventDefault(), qT())
          };
          return document.addEventListener("keydown", TT, !0), () => {
            document.removeEventListener("keydown", TT, !0)
          }
        }), [IT, qT]), (0, zT.d)(!0, "click" === IT, "EmoteWheelOverlay"), (0, iT.useEffect)((() => {
          if ("hold" === IT) return LT.gameBridge.send("holdEmoteWheel", !0), () => {
            LT.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [IT]), (0, iT.useEffect)((() => {
          if ("hold" !== IT) return;
          const TT = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            oT = hT.p * TT,
            iT = hT.o * TT,
            zT = TT => {
              let IT = aT.current.x + TT.movementX,
                zT = aT.current.y + TT.movementY;
              const kT = Math.hypot(IT, zT);
              if (kT > oT) {
                const TT = oT / kT;
                IT *= TT, zT *= TT
              }
              aT.current = {
                x: IT,
                y: zT
              }, jT(function(TT, oT, IT, iT) {
                if (Math.hypot(TT, oT) < IT) return null;
                const zT = (0, hT.x)(TT, oT, ST.k);
                return null === iT[zT] ? null : zT
              }(IT, zT, iT, OT))
            };
          return document.addEventListener("mousemove", zT), () => {
            document.removeEventListener("mousemove", zT)
          }
        }), [IT, OT, jT]), null === IT) return null;
      const tT = "hold" === IT || "pad" === IT,
        GT = null !== rT ? OT[rT] : null,
        pT = null !== GT ? (0, FT.g)(GT).displayName : TT("emotes:pickEmote");
      return (0, RT.jsx)("div", {
        className: AT()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === IT
        }),
        onMouseDown: TT => {
          TT.target === TT.currentTarget && qT()
        },
        children: (0, RT.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * hT.p + "rem",
            height: 2 * hT.p + "rem"
          },
          children: [(0, RT.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${hT.n} ${hT.n}`,
            children: [OT.map(((oT, IT) => {
              const iT = null !== oT,
                zT = tT && IT === rT;
              return (0, RT.jsx)("path", {
                d: CT(IT),
                className: AT()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: zT,
                  EmoteWheelWedgeDisabled: !iT
                }),
                onClick: TT => {
                  TT.stopPropagation(), null !== oT && (TT => {
                    qT(), ZT(TT)
                  })(oT)
                },
                "aria-label": null !== oT ? (0, FT.g)(oT).displayName : TT("emotes:emptySlot")
              }, IT)
            })), (0, RT.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: hT.g,
              cy: hT.g,
              r: hT.l
            }), (0, RT.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: hT.g,
              cy: hT.g,
              r: hT.h
            }), tT && null !== rT && (0, RT.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: CT(rT)
            })]
          }), OT.map(((TT, oT) => {
            const IT = null !== TT,
              iT = tT && oT === rT,
              zT = (0, hT.B)(oT, ST.k),
              kT = hT.d * Math.cos(zT),
              WT = hT.d * Math.sin(zT);
            return (0, RT.jsx)("div", {
              className: AT()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: iT,
                EmoteWheelSlotIconDisabled: !IT
              }),
              style: {
                left: `calc(50% + ${kT}rem)`,
                top: `calc(50% + ${WT}rem)`,
                backgroundImage: IT ? `url(/textures/charSkins/previews/emote_${TT}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, oT)
          })), (0, RT.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: pT
          })]
        })
      })
    }))
  },
  4481: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => cT,
      h: () => gT,
      k: () => KT,
      n: () => AT
    });
    var iT = IT(46),
      zT = IT(4483),
      kT = IT(3899),
      WT = IT(1337),
      XT = IT(4509),
      BT = IT(1042),
      FT = IT.n(BT),
      ST = IT(1325),
      DT = IT(1665),
      LT = IT(4514),
      xT = IT(1083);

    function cT(TT) {
      let {
        label: oT,
        onClick: IT,
        checked: iT,
        circleInfoText: zT,
        className: XT,
        disabled: BT,
        note: ST
      } = TT;
      return (0, xT.jsxs)("div", {
        "aria-disabled": BT || void 0,
        "data-pad-focusable": !0,
        className: FT()("SettingBox CheckboxContainer", {
          [XT]: XT,
          SettingBoxDisabled: BT
        }),
        onClick: () => {
          BT || IT(!iT)
        },
        children: [(0, xT.jsxs)("div", {
          className: "CheckboxInputAndText",
          children: [(0, xT.jsx)("label", {
            className: "CheckboxClickableLabel",
            children: (0, xT.jsx)(kT.d, {
              className: "SettingsCheckbox",
              checked: iT,
              disabled: BT,
              onChange: () => {}
            })
          }), (0, xT.jsxs)("div", {
            className: "CheckboxText",
            children: [oT, zT && (0, xT.jsx)("span", {
              onClick: TT => TT.stopPropagation(),
              children: (0, xT.jsx)(WT.d, {
                className: "SettingsTextInputCircleInfo",
                hoverInfo: zT
              })
            })]
          })]
        }), ST && (0, xT.jsx)("div", {
          className: "SettingNote",
          children: ST
        })]
      })
    }

    function KT(TT) {
      let {
        name: oT,
        onChange: IT,
        min: zT,
        max: kT,
        step: XT,
        initValue: BT,
        circleInfoText: ST,
        format: DT,
        className: LT,
        padStep: cT,
        disabled: KT = !1,
        selectableMax: MT,
        cappedNote: AT,
        onChangeComplete: gT
      } = TT;
      const [hT, wT] = (0, iT.useState)(BT), mT = (0, iT.useRef)(BT);
      (0, iT.useEffect)((() => {
        mT.current = BT, wT(BT)
      }), [BT]);
      const eT = void 0 !== MT && MT < kT,
        RT = eT ? {
          "--slider-selectable": (MT - zT) / (kT - zT)
        } : void 0;
      return (0, xT.jsxs)("div", {
        className: FT()("SettingBox SettingsSliderDiv", {
          [LT]: LT,
          SettingBoxDisabled: KT,
          SliderCapped: eT
        }),
        style: RT,
        children: [(0, xT.jsxs)("div", {
          className: "SliderText",
          children: [`${oT}: ${DT?DT(hT):hT}`, ST && (0, xT.jsx)(WT.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: ST
          })]
        }), (0, xT.jsx)("div", {
          className: "SliderDiv",
          children: (0, xT.jsx)(rT, {
            value: hT,
            min: zT,
            max: kT,
            step: XT,
            onChange: TT => {
              if (eT && TT >= MT && hT === MT) return;
              const oT = eT ? Math.min(TT, MT) : TT;
              mT.current = oT, wT(oT), IT(oT)
            },
            onChangeComplete: gT && (() => {
              gT(mT.current)
            }),
            format: DT,
            padStep: cT,
            disabled: KT
          })
        }), eT && AT && (0, xT.jsx)("div", {
          className: "SettingNote",
          children: AT
        })]
      })
    }
    const MT = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]);

    function rT(TT) {
      var oT;
      let {
        value: IT,
        min: kT,
        max: WT,
        step: XT,
        onChange: BT,
        orientation: FT,
        reverse: ST,
        setIsChanging: DT,
        tooltip: cT,
        labels: KT,
        handleLabel: rT,
        format: AT,
        onChangeStart: gT,
        onChangeComplete: hT,
        padStep: wT,
        disabled: mT = !1
      } = TT;
      const eT = (0, iT.useRef)(null),
        RT = (0, iT.useRef)(null);
      (0, iT.useLayoutEffect)((() => {
        var TT, oT, IT;
        const iT = null !== (TT = null === (oT = eT.current) || void 0 === oT ? void 0 : oT.querySelector(".rangeslider")) && void 0 !== TT ? TT : null;
        null === iT || void 0 === iT || iT.setAttribute("data-pad-slider", ""), null === iT || void 0 === iT || iT.setAttribute("data-pad-focusable", ""), null === iT || void 0 === iT || null === (IT = iT.querySelector(".rangeslider__handle")) || void 0 === IT || IT.setAttribute("data-pad-slider-handle", ""), RT.current = iT
      }), []), (0, iT.useLayoutEffect)((() => {
        var TT, oT;
        mT ? null === (TT = RT.current) || void 0 === TT || TT.setAttribute("aria-disabled", "true") : null === (oT = RT.current) || void 0 === oT || oT.removeAttribute("aria-disabled")
      }), [mT]);
      const uT = (null !== (oT = String(XT).split(".")[1]) && void 0 !== oT ? oT : "").length,
        vT = TT => {
          const oT = Number((Math.round((TT - kT) / XT) * XT + kT).toFixed(uT));
          return Math.min(WT, Math.max(kT, oT))
        },
        ET = (0, iT.useRef)(hT);
      ET.current = hT, (0, iT.useEffect)((() => {
        const TT = eT.current;
        if (!TT) return;
        const oT = TT => {
          var oT;
          MT.has(TT.key) && (null === (oT = ET.current) || void 0 === oT || oT.call(ET))
        };
        return TT.addEventListener("keyup", oT), () => {
          TT.removeEventListener("keyup", oT)
        }
      }), []);
      const fT = (0, iT.useRef)(!1);
      return (0, LT.d)(RT, {
        adjust: TT => {
          if (mT) return;
          const oT = null !== wT && void 0 !== wT ? wT : Math.max(XT, Math.round((WT - kT) / 20 / XT) * XT),
            iT = vT(IT + TT * oT * (ST ? -1 : 1));
          iT !== IT && (null === gT || void 0 === gT || gT(), BT(iT), null === hT || void 0 === hT || hT())
        },
        setFraction: TT => {
          if (mT) return;
          const oT = vT(kT + (ST ? 1 - TT : TT) * (WT - kT));
          oT !== IT && (fT.current || (fT.current = !0, null === gT || void 0 === gT || gT()), BT(oT))
        },
        endDrag: () => {
          fT.current && (fT.current = !1, null === hT || void 0 === hT || hT())
        }
      }), (0, xT.jsx)("div", {
        ref: eT,
        style: {
          display: "contents"
        },
        children: (0, xT.jsx)(zT.d, {
          value: IT,
          min: kT,
          max: WT,
          step: XT,
          onChange: BT,
          orientation: FT,
          reverse: ST,
          tooltip: cT,
          labels: KT,
          handleLabel: rT,
          format: AT,
          onChangeStart: () => {
            null === gT || void 0 === gT || gT(), null === DT || void 0 === DT || DT(!0)
          },
          onChangeComplete: () => {
            null === DT || void 0 === DT || DT(!1), null === hT || void 0 === hT || hT()
          }
        })
      })
    }
    async function AT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const oT = ST.NotificationProvider.showPromptPopup({
        title: "settingsMenu:reloadPagePopupTitle",
        subtitle: "settingsMenu:reloadPagePopupSubtitle",
        confirmText: "settingsMenu:reloadPagePopupConfirm",
        confirmTooltip: "",
        cancelText: "general:cancel",
        cancelTooltip: "",
        unlockPointerKey: TT
      });
      !0 === await oT.getResult() && (0, DT.reloadBloxd)()
    }

    function gT(TT) {
      let {
        label: oT,
        options: IT,
        value: iT,
        onChange: zT,
        circleInfoText: kT
      } = TT;
      return (0, xT.jsxs)("div", {
        className: "SettingBox SegmentedSettingRow",
        children: [(0, xT.jsxs)("div", {
          className: "SliderText",
          children: [oT, kT && (0, xT.jsx)(WT.d, {
            className: "SettingsTextInputCircleInfo",
            hoverInfo: kT
          })]
        }), (0, xT.jsx)(XT.e, {
          ariaLabel: oT,
          options: IT,
          value: iT,
          onChange: zT
        })]
      })
    }
  },
  4509: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(1083);

    function WT(TT) {
      let {
        options: oT,
        value: IT,
        onChange: iT,
        ariaLabel: WT,
        className: XT,
        reselectable: BT = !1,
        keepsFocus: FT = !1
      } = TT;
      return (0, kT.jsx)("div", {
        className: zT()("SegmentedToggle", XT),
        role: "group",
        "aria-label": WT,
        children: oT.map((TT => {
          const oT = TT.value === IT;
          return (0, kT.jsx)("button", {
            type: "button",
            "aria-pressed": oT,
            "aria-label": TT.ariaLabel,
            title: TT.ariaLabel,
            className: zT()("SegmentedToggleOption SmallTextLight", {
              SegmentedToggleOptionSelected: oT
            }),
            onMouseDown: FT ? TT => {
              TT.preventDefault()
            } : void 0,
            onClick: () => {
              oT && !BT || iT(TT.value)
            },
            children: TT.label
          }, TT.value)
        }))
      })
    }
  },
  8205: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => DT,
      e: () => cT,
      i: () => KT,
      j: () => xT,
      l: () => LT
    });
    var iT = IT(46),
      zT = IT(8214),
      kT = IT(16),
      WT = IT(1751),
      XT = IT(26),
      BT = IT(1231),
      FT = IT(1770);
    const ST = 50;
    const DT = new class {
      constructor() {
        this.state = {
          messages: [],
          reportedPlayers: [],
          channel: null
        }, this.listeners = new Set, this.stopListening = [], this.nextClientChatMsgId = 0, this.subscribe = TT => {
          if (0 === this.listeners.size) {
            var oT, IT;
            this.state = {
              ...this.state,
              channel: null !== (oT = null === (IT = FT.e.get("chatChannels")) || void 0 === IT ? void 0 : IT[0]) && void 0 !== oT ? oT : null
            };
            const TT = kT.h.subscribe("reportPlayer", (TT => {
              let {
                playerEId: oT
              } = TT;
              this.setState({
                ...this.state,
                reportedPlayers: [...this.state.reportedPlayers, oT]
              })
            }));
            this.stopListening = [WT.gameBridge.subscribe("chatReceived", (TT => {
              let {
                serverChatMsgId: oT,
                content: IT,
                author: iT
              } = TT;
              this.addMessage(oT, IT, iT)
            })), () => {
              kT.h.unsubscribe(TT)
            }, FT.e.subscribe("chatChannels", (TT => {
              var oT;
              this.setState({
                ...this.state,
                channel: null !== (oT = null === TT || void 0 === TT ? void 0 : TT[0]) && void 0 !== oT ? oT : null
              })
            }))]
          }
          return this.listeners.add(TT), () => {
            if (this.listeners.delete(TT), 0 === this.listeners.size) {
              for (const TT of this.stopListening) TT();
              this.stopListening = [], this.state = {
                messages: [],
                reportedPlayers: [],
                channel: null
              }
            }
          }
        }, this.getState = () => this.state
      }
      addMessage(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const iT = {
          serverChatMsgId: TT,
          content: oT,
          clientChatMsgId: this.nextClientChatMsgId++,
          author: IT
        };
        this.setState({
          ...this.state,
          messages: [iT, ...this.state.messages].slice(0, zT.i)
        })
      }
      selectNextChannel() {
        const TT = FT.e.get("chatChannels");
        if (TT) {
          const oT = TT.findIndex((TT => {
            var oT;
            return TT.channelName === (null === (oT = this.state.channel) || void 0 === oT ? void 0 : oT.channelName)
          }));
          this.setState({
            ...this.state,
            channel: TT[(oT + 1) % TT.length]
          })
        }
      }
      setState(TT) {
        this.state = TT;
        for (const oT of this.listeners) oT()
      }
    };

    function LT() {
      const [TT, oT] = (0, iT.useState)(DT.getState);
      return (0, iT.useEffect)((() => {
        const TT = DT.subscribe((() => {
          oT(DT.getState())
        }));
        return oT(DT.getState()), TT
      }), []), TT
    }

    function xT(TT) {
      var oT, IT;
      if (TT.startsWith("/report")) {
        var iT;
        const oT = null !== (iT = TT.replace("/report", "").trim().split(" ")[0]) && void 0 !== iT ? iT : "";
        if ("" === oT) return void DT.addMessage(null, [{
          str: "You must type a player's name when reporting them.\nExample:\n/report Bob"
        }]);
        const IT = WT.gameBridge.latest("players"),
          zT = WT.gameBridge.latest("hiddenPlayerNames"),
          XT = TT => {
            var iT, kT;
            const WT = null !== (iT = null === (kT = IT.byId[TT]) || void 0 === kT ? void 0 : kT.name) && void 0 !== iT ? iT : null;
            return null !== WT && (WT === oT || (0, BT.b)(WT, zT) === oT)
          };
        if (null !== IT.localId && XT(IT.localId)) return void DT.addMessage(null, [{
          str: "You cannot report yourself."
        }]);
        for (const TT of IT.ids)
          if (XT(TT)) return kT.h.XM("OpenReportMenu", {
            playerEId: TT,
            playerName: IT.byId[TT].name,
            US: null,
            serverChatMsgId: null
          }), void console.log("Opening report menu...");
        DT.addMessage(null, [{
          str: "Player not found in lobby."
        }])
      }
      WT.gameBridge.send("sendChatMessage", {
          US: TT,
          channelName: null !== (oT = null === (IT = DT.getState().channel) || void 0 === IT ? void 0 : IT.channelName) && void 0 !== oT ? oT : null
        }),
        function(TT) {
          var oT;
          const IT = null !== (oT = XT.e.getItem("recentlySentChatMsgs")) && void 0 !== oT ? oT : [];
          IT.push(TT), IT.length > ST && IT.shift();
          XT.e.setItem("recentlySentChatMsgs", IT)
        }(TT)
    }

    function cT() {
      var TT;
      return null !== (TT = XT.e.getItem("recentlySentChatMsgs")) && void 0 !== TT ? TT : []
    }

    function KT(TT) {
      var oT;
      let IT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const iT = null !== (oT = XT.e.getItem("recentlySentChatMsgs")) && void 0 !== oT ? oT : [],
        zT = iT.length + 1,
        kT = IT ? (TT % zT + zT) % zT : Math.min(iT.length, Math.max(0, TT));
      return {
        stepsBack: kT,
        text: 0 === kT ? "" : iT[iT.length - kT]
      }
    }
  },
  8154: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT,
      g: () => kT
    });
    var iT = IT(1803);
    const zT = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      kT = TT => "string" === typeof TT.icon && "" !== TT.icon && "string" === typeof TT.keycode && zT.test(TT.keycode),
      WT = TT => "Space" === TT ? "_" : iT.e[TT]
  },
  8226: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = IT(12);

    function zT() {
      return !iT.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8229: (TT, oT, IT) => {
    IT.d(oT, {
      B: () => ST,
      D: () => LT,
      H: () => xT,
      d: () => kT,
      g: () => XT,
      h: () => FT,
      l: () => BT,
      n: () => WT,
      o: () => zT,
      p: () => iT,
      t: () => cT,
      x: () => DT
    });
    const iT = 14,
      zT = 6,
      kT = (iT + zT) / 2,
      WT = 200,
      XT = WT / 2,
      BT = WT / 2 - 1,
      FT = zT / iT * (WT / 2),
      ST = (TT, oT) => -Math.PI / 2 + 2 * TT * Math.PI / oT,
      DT = (TT, oT, IT) => {
        const iT = 2 * Math.PI / IT;
        return (Math.round((Math.atan2(oT, TT) + Math.PI / 2) / iT) % IT + IT) % IT
      },
      LT = .5,
      xT = (TT, oT, IT) => Math.hypot(TT.x, TT.y) < LT ? IT : DT(TT.x, TT.y, oT),
      cT = (TT, oT, IT, iT, zT) => {
        const kT = Math.PI / oT,
          WT = ST(TT, oT),
          XT = WT - kT,
          BT = WT + kT,
          FT = (TT, oT) => `${IT+TT*Math.cos(oT)} ${IT+TT*Math.sin(oT)}`;
        return [`M ${FT(iT,XT)}`, `L ${FT(zT,XT)}`, `A ${zT} ${zT} 0 0 1 ${FT(zT,BT)}`, `L ${FT(iT,BT)}`, `A ${iT} ${iT} 0 0 0 ${FT(iT,XT)}`, "Z"].join(" ")
      }
  },
  8260: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(46),
      zT = IT(8193),
      kT = IT(2227);

    function WT() {
      const TT = (0, kT.g)("shopInfo"),
        [, oT] = (0, iT.useReducer)((TT => TT + 1), 0);
      return (0, kT.e)("shopInfo", oT), !(0, zT.e)(TT)
    }
  },
  7627: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      g: () => kT,
      h: () => LT,
      l: () => DT,
      m: () => FT,
      p: () => XT,
      r: () => iT,
      t: () => xT,
      w: () => cT
    });
    const iT = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      zT = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "pickBlock", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: iT
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      kT = {
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
      WT = ["pickBlock", "perspective"],
      XT = TT => WT.includes(TT) ? WT : [TT],
      BT = Object.fromEntries(zT.flatMap((TT => {
        let {
          group: oT,
          actions: IT
        } = TT;
        return IT.map((TT => [TT, oT]))
      }))),
      FT = TT => BT[TT],
      ST = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      DT = TT => {
        var oT;
        return [FT(TT), ...null !== (oT = ST[TT]) && void 0 !== oT ? oT : []]
      },
      LT = new Set(["menu", "inventory", "keyboard"]),
      xT = {
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
      cT = new Set(["forward", "backward", "left", "right"])
  },
  7618: (TT, oT, IT) => {
    IT.d(oT, {
      B: () => RT,
      F: () => gT,
      J: () => vT,
      L: () => ST,
      O: () => uT,
      S: () => CT,
      e: () => AT,
      h: () => wT,
      k: () => LT,
      l: () => xT,
      o: () => JT,
      p: () => fT,
      t: () => ET,
      x: () => hT,
      z: () => jT
    });
    var iT = IT(7627),
      zT = IT(7629),
      kT = IT(7605),
      WT = IT(7647);
    const XT = TT => "pickBlock" === TT ? "perspective" : TT,
      BT = (TT, oT) => {
        var IT;
        const zT = XT(oT);
        return null !== (IT = TT[zT]) && void 0 !== IT ? IT : iT.g[zT]
      },
      FT = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((TT => {
        let [oT, IT] = TT;
        return [
          [oT, IT],
          [IT, oT]
        ]
      }))),
      ST = (TT, oT) => null !== TT && void 0 !== TT ? TT : "nintendo" === oT,
      DT = TT => ST((0, zT.j)().swapConfirmBack, (0, zT.m)()) && FT.get(TT) || TT,
      LT = TT => BT((0, zT.j)().bindings, DT(TT)),
      xT = TT => iT.g[DT(TT)],
      cT = Object.keys(iT.g),
      KT = TT => "gameplay" === (0, iT.m)(TT) ? ["gameplay"] : (0, iT.l)(TT),
      MT = (TT, oT) => {
        const IT = KT(oT);
        return KT(TT).some((TT => IT.includes(TT)))
      },
      rT = (TT, oT, IT) => {
        const zT = BT(TT, oT),
          WT = new Set((0, iT.p)(oT)),
          FT = [...WT];
        for (let iT = FT.pop(); iT; iT = FT.pop())
          for (const oT of cT) {
            const kT = BT(TT, oT);
            WT.has(oT) || kT !== IT && kT !== zT || !MT(iT, oT) || (WT.add(oT), FT.push(oT))
          }
        const ST = {
          ...TT
        };
        for (const DT of WT) {
          const oT = BT(TT, DT) === zT ? IT : zT,
            WT = (0, iT.l)(DT).some((TT => iT.h.has(TT)));
          if ((0, kT.L)(oT) && WT) return null;
          ST[XT(DT)] = oT
        }
        for (const kT of Object.keys(ST)) ST[kT] === iT.g[kT] && delete ST[kT];
        return ST
      },
      AT = (TT, oT) => null !== rT((0, zT.j)().bindings, DT(TT), oT),
      gT = (TT, oT) => {
        if (LT(TT) === oT) return !0;
        const IT = rT((0, zT.j)().bindings, DT(TT), oT);
        return !!IT && ((0, zT.p)({
          bindings: IT
        }), !0)
      },
      hT = (TT, oT) => {
        const IT = (0, iT.p)(oT);
        return cT.filter((oT => XT(oT) === oT && !IT.includes(oT) && BT(TT, DT(oT)) !== LT(oT)))
      },
      wT = ["southpaw", "triggersSwapped"],
      mT = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      eT = TT => Object.keys(mT[TT]),
      RT = (TT, oT) => "southpaw" === TT ? oT.swapSticks : eT(TT).every((IT => BT(oT.bindings, IT) === mT[TT][IT])),
      uT = (TT, oT) => {
        const IT = (0, zT.j)();
        let kT = IT.bindings;
        for (const zT of eT(TT)) {
          const IT = oT ? mT[TT][zT] : iT.g[zT];
          if (kT = rT(kT, zT, IT), !kT) return !1
        }
        return (0, zT.p)({
          swapSticks: "southpaw" === TT ? oT : IT.swapSticks,
          bindings: kT
        }), !0
      },
      vT = () => {
        (0, zT.p)({
          swapSticks: !1,
          bindings: {}
        })
      },
      ET = () => (0, zT.j)().swapSticks ? "RightStick" : "LeftStick",
      fT = () => (0, zT.j)().swapSticks ? "LeftStick" : "RightStick",
      CT = TT => (0, zT.j)().swapSticks && (0, kT.L)(TT),
      jT = TT => CT(TT) ? ET() : fT(),
      JT = TT => {
        if (iT.w.has(TT)) return ET();
        const oT = iT.t[TT];
        return oT && ("leaderboard" !== oT || (0, WT.f)(TT, (0, WT.b)())) ? LT(oT) : null
      }
  },
  7593: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      ControllerCategory: () => xB,
      ControllerGlyph: () => Ak,
      ControllerRoot: () => xX,
      PadLobbyShortcuts: () => CX,
      PadSneakChip: () => hX,
      PadTooltip: () => mX,
      attachPressToContinue: () => HX,
      getBoundButton: () => ST.k,
      getControllerSettings: () => LT.j,
      getGlyphForNoaAction: () => ST.o,
      getInventoryCursorState: () => KB,
      getMenuShortcutButton: () => Hi,
      getPadGlyphIconName: () => rX,
      getPadGlyphIconUrl: () => AX,
      getPadRepeatTiming: () => KT.g,
      handOverPadFocus: () => rB,
      hasActivePad: () => cB,
      isPadSteppingSlots: () => MB
    });
    const iT = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var zT = IT(1171),
      kT = IT(1365),
      WT = IT(7599),
      XT = IT(68),
      BT = IT(12),
      FT = IT(16),
      ST = IT(7618),
      DT = IT(7655),
      LT = IT(7629),
      xT = IT(7658),
      cT = IT(7605),
      KT = IT(8080),
      MT = IT(8089),
      rT = IT(1612);
    const AT = (TT, oT, IT) => Math.max(oT, Math.min(IT, TT)),
      gT = TT => Math.min(TT.width, TT.height) / 720,
      hT = TT => Math.max(.15, TT);
    class wT {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(TT, oT) {
        const IT = Math.hypot(TT.x, TT.y) >= (TT => Math.max(.3, TT))(oT);
        return this.locked ? (this.locked = IT, !1) : IT
      }
    }
    const mT = (TT, oT) => {
        const IT = AT(oT.dtMs, 0, 100),
          iT = IT / 1e3,
          zT = gT(oT.viewport) * (oT.cursorSpeedPercent / 100),
          kT = (0, cT.n)(oT.stick, hT(oT.moveDeadzone)),
          WT = Math.hypot(kT.x, kT.y),
          XT = ((TT, oT, IT) => {
            if (oT < .3) return 0;
            const iT = IT / 350;
            return oT >= .85 ? Math.min(1, TT + iT) : Math.max(0, TT - iT)
          })(TT.speedRamp, WT, IT);
        let BT = TT.x,
          FT = TT.y;
        if (WT > 0) {
          const TT = .45 + .55 * XT,
            IT = oT.context.overInteractive ? .45 : 1,
            ST = 1400 * (TT => {
              const oT = AT(TT, 0, 1);
              return .3 * oT + .7 * oT * oT
            })(WT) * zT * TT * IT;
          BT += kT.x / WT * ST * iT, FT += kT.y / WT * ST * iT
        }
        const ST = Math.hypot(oT.dpad.x, oT.dpad.y);
        if (ST > 0) {
          const TT = 500 * zT;
          BT += oT.dpad.x / ST * TT * iT, FT += oT.dpad.y / ST * TT * iT
        }
        const DT = oT.context.magnetTarget;
        if (DT && WT < .3 && 0 === ST) {
          const TT = ((TT, oT, IT, iT, zT) => {
            const kT = oT.x - TT.x,
              WT = oT.y - TT.y,
              XT = Math.hypot(kT, WT);
            if (0 === XT) return {
              x: 0,
              y: 0
            };
            const BT = Math.min(XT, zT * (1 - iT / .3));
            let FT = kT / XT * BT,
              ST = WT / XT * BT;
            if (iT > 0) {
              const TT = IT.x / iT,
                oT = IT.y / iT,
                zT = FT * TT + ST * oT;
              zT < 0 && (FT -= zT * TT, ST -= zT * oT)
            }
            return {
              x: FT,
              y: ST
            }
          })({
            x: BT,
            y: FT
          }, DT, kT, WT, 120 * gT(oT.viewport) * iT);
          BT += TT.x, FT += TT.y
        }
        return {
          x: AT(BT, 0, Math.max(0, oT.viewport.width - 1)),
          y: AT(FT, 0, Math.max(0, oT.viewport.height - 1)),
          speedRamp: XT
        }
      },
      eT = TT => {
        const oT = (0, cT.n)(TT, .2);
        return 0 !== oT.x || 0 !== oT.y
      },
      RT = (TT, oT) => {
        const IT = (0, cT.n)(TT, .2),
          iT = Math.hypot(IT.x, IT.y);
        if (0 === iT) return {
          x: 0,
          y: 0
        };
        const zT = iT * iT * 1600,
          kT = AT(oT, 0, 100) / 1e3;
        return {
          x: IT.x / iT * zT * kT,
          y: IT.y / iT * zT * kT
        }
      },
      uT = (TT, oT) => "y" === oT ? TT.scrollHeight > TT.clientHeight + 1 : TT.scrollWidth > TT.clientWidth + 1,
      vT = (TT, oT) => {
        if (!uT(TT, oT)) return !1;
        const IT = getComputedStyle(TT),
          iT = "y" === oT ? IT.overflowY : IT.overflowX;
        return "auto" === iT || "scroll" === iT
      },
      ET = (TT, oT, IT) => {
        for (let kT = TT instanceof HTMLElement ? TT : null !== (iT = null === TT || void 0 === TT ? void 0 : TT.parentElement) && void 0 !== iT ? iT : null; kT; kT = kT.parentElement) {
          var iT;
          if (vT(kT, oT)) return kT;
          if (kT === IT) return null
        }
        if (IT) return null;
        const zT = document.scrollingElement;
        return zT instanceof HTMLElement && uT(zT, oT) ? zT : null
      },
      fT = new WeakMap,
      CT = (TT, oT) => {
        const IT = performance.now(),
          iT = fT.get(TT);
        if (iT && iT.axis === oT && IT - iT.atMs < 500 && (!iT.container || iT.container.isConnected)) return iT.container;
        const zT = jT(TT, oT);
        return fT.set(TT, {
          axis: oT,
          atMs: IT,
          container: zT
        }), zT
      },
      jT = (TT, oT) => {
        let IT = vT(TT, oT) ? TT : null,
          iT = IT ? IT.clientWidth * IT.clientHeight : 0;
        for (const zT of TT.querySelectorAll("*")) {
          const TT = zT.clientWidth * zT.clientHeight;
          TT > iT && vT(zT, oT) && (IT = zT, iT = TT)
        }
        return IT
      },
      JT = (TT, oT, IT) => "y" === oT ? IT < 0 ? TT.scrollTop > 0 : TT.scrollTop + TT.clientHeight < TT.scrollHeight - 1 : IT < 0 ? TT.scrollLeft > 0 : TT.scrollLeft + TT.clientWidth < TT.scrollWidth - 1,
      UT = (TT, oT, IT) => {
        "y" === oT ? TT.scrollBy({
          top: IT,
          behavior: "instant"
        }) : TT.scrollBy({
          left: IT,
          behavior: "instant"
        })
      },
      aT = TT => {
        if (!TT || TT === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const oT = TT.getBoundingClientRect(),
          IT = Math.max(0, oT.left),
          iT = Math.max(0, oT.top);
        return new DOMRect(IT, iT, Math.min(window.innerWidth, oT.right) - IT, Math.min(window.innerHeight, oT.bottom) - iT)
      },
      YT = (TT, oT) => TT.left < oT.right && oT.left < TT.right && TT.top < oT.bottom && oT.top < TT.bottom;
    var QT = IT(46),
      OT = IT(1042),
      HT = IT.n(OT),
      nT = IT(1083);
    let qT = 0,
      ZT = !1;
    class lT {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(TT) {
        this.element = TT, this.shownKey = "", this.gap = null
      }
      show(TT) {
        const oT = this.element;
        if (!oT) return;
        const IT = TT ? this.keepOnScreen(oT, TT) : null,
          iT = IT ? `${IT.left},${IT.top},${IT.width},${IT.height}` : "";
        if (iT === this.shownKey) return;
        const zT = "" === this.shownKey;
        this.shownKey = iT, oT.classList.toggle("Visible", null !== IT), IT && (oT.classList.toggle("Snap", zT), oT.style.width = `${IT.width}px`, oT.style.height = `${IT.height}px`, oT.style.transform = `translate(${IT.left}px, ${IT.top}px)`, zT && (oT.offsetWidth, oT.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(TT, oT) {
        var IT;
        const iT = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!ZT){ZT=!0;const TT=document.createElement("div");TT.setAttribute("aria-hidden","true"),TT.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(TT),new ResizeObserver((()=>{qT++})).observe(TT)}return String(qT)})()}`;
        (null === (IT = this.gap) || void 0 === IT ? void 0 : IT.key) !== iT && (this.gap = {
          px: parseFloat(getComputedStyle(TT).paddingLeft) || 0,
          key: iT
        });
        const zT = this.gap.px + 2,
          kT = Math.max(oT.left, zT),
          WT = Math.max(oT.top, zT),
          XT = Math.min(oT.left + oT.width, window.innerWidth - zT),
          BT = Math.min(oT.top + oT.height, window.innerHeight - zT);
        return XT <= kT || BT <= WT ? oT : {
          left: kT,
          top: WT,
          width: XT - kT,
          height: BT - WT
        }
      }
    }
    const sT = TT => {
      let {
        placer: oT,
        className: IT
      } = TT;
      const iT = (0, QT.useCallback)((TT => {
        oT.setElement(TT)
      }), [oT]);
      return (0, nT.jsx)("div", {
        ref: iT,
        className: HT()("PadReticle", IT),
        "aria-hidden": !0
      })
    };
    var tT = IT(8097),
      GT = IT(1669);
    const pT = TT => TT >= 56320 && TT <= 57343,
      bT = TT => TT >= 55296 && TT <= 56319,
      yT = (TT, oT) => oT >= 2 && pT(TT.charCodeAt(oT - 1)) && bT(TT.charCodeAt(oT - 2)) ? oT - 2 : Math.max(0, oT - 1),
      NT = (TT, oT) => {
        let IT;
        var iT, zT;
        return IT = TT.start !== TT.end ? oT < 0 ? TT.start : TT.end : oT < 0 ? yT(TT.value, TT.start) : (iT = TT.value, (zT = TT.start) + 1 < iT.length && bT(iT.charCodeAt(zT)) && pT(iT.charCodeAt(zT + 1)) ? zT + 2 : Math.min(iT.length, zT + 1)), {
          value: TT.value,
          start: IT,
          end: IT
        }
      },
      PT = ["text", "search", "url", "email", "tel", "password", "number"],
      dT = TT => !(!(0, GT.c)(TT) || TT.isContentEditable || TT.hasAttribute("data-pad-no-osk")) && (TT instanceof HTMLTextAreaElement || TT instanceof HTMLInputElement && PT.includes(TT.type)),
      VT = TT => null !== TT.selectionStart,
      To = TT => {
        var oT, IT;
        const {
          value: iT
        } = TT;
        return {
          value: iT,
          start: null !== (oT = TT.selectionStart) && void 0 !== oT ? oT : iT.length,
          end: null !== (IT = TT.selectionEnd) && void 0 !== IT ? IT : iT.length
        }
      },
      oo = (TT, oT, IT) => {
        if (TT.readOnly) return;
        const iT = TT instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(iT, "value").set.call(TT, oT.value), VT(TT) && TT.setSelectionRange(oT.start, oT.end), (0, rT.h)(TT, new InputEvent("input", {
          bubbles: !0,
          inputType: IT
        }))
      };
    let Io = !1;
    const io = (TT, oT) => !!document.execCommand(TT, !1, oT) || (Io || (Io = !0, console.warn(`execCommand("${TT}") failed; the on-screen keyboard is setting the value directly`)), !1),
      zo = (TT, oT) => {
        io("insertText", oT) || oo(TT, function(TT, oT) {
          let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const iT = TT.value.slice(0, TT.start),
            zT = TT.value.slice(TT.end);
          let kT = IT < 0 ? oT.length : Math.max(0, IT - iT.length - zT.length);
          kT > 0 && kT < oT.length && bT(oT.charCodeAt(kT - 1)) && kT--;
          const WT = oT.slice(0, kT),
            XT = iT.length + WT.length;
          return {
            value: iT + WT + zT,
            start: XT,
            end: XT
          }
        }(To(TT), oT, TT.maxLength), "insertText")
      },
      ko = TT => {
        io("delete") || oo(TT, (TT => {
          const oT = TT.start === TT.end ? yT(TT.value, TT.start) : TT.start;
          return {
            value: TT.value.slice(0, oT) + TT.value.slice(TT.end),
            start: oT,
            end: oT
          }
        })(To(TT)), "deleteContentBackward")
      },
      Wo = (TT, oT) => {
        if (!VT(TT)) return;
        const IT = NT(To(TT), oT);
        TT.setSelectionRange(IT.start, IT.end)
      },
      Xo = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      Bo = (TT, oT) => {
        if ("function" === typeof TT.checkVisibility) return !TT.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: oT,
          checkOpacity: oT
        });
        const {
          visibility: IT
        } = getComputedStyle(TT);
        if ("hidden" === IT || "collapse" === IT) return !0;
        if (!oT) return !1;
        for (let iT = TT; iT; iT = iT.parentElement)
          if ("0" === getComputedStyle(iT).opacity) return !0;
        return !1
      },
      Fo = TT => {
        if (!TT.isConnected || Bo(TT, !0)) return !1;
        const oT = TT.getBoundingClientRect();
        return oT.width > 0 && oT.height > 0
      },
      So = TT => !!TT.matches(":disabled, [aria-disabled='true']") || "button" === TT.getAttribute("role") && "-1" === TT.getAttribute("tabindex"),
      Do = TT => {
        var oT;
        if (TT.closest("[data-pad-ignore]")) return !0;
        return !!(null === (oT = TT.parentElement) || void 0 === oT ? void 0 : oT.closest("[data-pad-focusable]"))
      },
      Lo = TT => {
        const oT = TT.querySelectorAll(Xo);
        return TT.matches(Xo) ? [TT, ...oT] : oT
      },
      xo = TT => {
        const oT = [];
        for (const IT of Lo(TT)) !Do(IT) && Fo(IT) && oT.push(IT);
        return oT
      },
      co = new WeakMap,
      Ko = TT => {
        const oT = co.get(TT);
        if (oT && Mo(oT, TT)) return !0;
        for (const IT of Lo(TT))
          if (!Do(IT) && Fo(IT)) return co.set(TT, IT), !0;
        return co.delete(TT), !1
      },
      Mo = (TT, oT) => oT.contains(TT) && TT.matches(Xo) && !Do(TT) && Fo(TT),
      ro = (TT, oT) => Mo(TT, oT) && !So(TT),
      Ao = TT => {
        const oT = oT => {
          let IT = 0;
          for (let iT = oT.parentElement; iT && iT !== TT; iT = iT.parentElement) IT++;
          return IT
        };
        return [...TT.querySelectorAll("[data-pad-initial-area]")].filter(Fo).sort(((TT, IT) => oT(IT) - oT(TT)))
      },
      go = TT => dT(TT),
      ho = TT => {
        const oT = TT.getBoundingClientRect();
        return {
          x: oT.left + oT.width / 2,
          y: oT.top + oT.height / 2
        }
      },
      wo = (TT, oT, IT) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: TT.x,
        clientY: TT.y,
        screenX: TT.x,
        screenY: TT.y,
        button: oT,
        buttons: IT,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      mo = (TT, oT) => {
        (0, rT.h)(TT, oT)
      },
      eo = function(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const iT = 0 === IT ? 1 : 2;
        mo(TT, new PointerEvent("pointerdown", wo(oT, IT, iT))), mo(TT, new MouseEvent("mousedown", wo(oT, IT, iT)))
      },
      Ro = function(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        mo(TT, new PointerEvent("pointerup", wo(oT, IT, 0))), mo(TT, new MouseEvent("mouseup", wo(oT, IT, 0)))
      },
      uo = function(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        eo(TT, oT, IT), Ro(TT, oT, IT), mo(TT, 0 === IT ? new MouseEvent("click", wo(oT, 0, 0)) : new MouseEvent("contextmenu", wo(oT, 2, 0)))
      },
      vo = function(TT, oT, IT) {
        let {
          leaveBelow: iT = null,
          enterBelow: zT = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (TT !== oT) {
          if (null !== TT && void 0 !== TT && TT.isConnected) {
            const zT = {
              ...wo(IT, 0, 0),
              relatedTarget: oT
            };
            mo(TT, new PointerEvent("pointerout", zT)), mo(TT, new MouseEvent("mouseout", zT));
            const kT = TT => !!oT && TT.contains(oT) || !!iT && TT.contains(iT);
            for (let oT = TT; oT && !kT(oT); oT = oT.parentElement) mo(oT, new PointerEvent("pointerleave", {
              ...zT,
              bubbles: !1
            })), mo(oT, new MouseEvent("mouseleave", {
              ...zT,
              bubbles: !1
            }))
          }
          if (oT) {
            const iT = {
              ...wo(IT, 0, 0),
              relatedTarget: TT
            };
            mo(oT, new PointerEvent("pointerover", iT)), mo(oT, new MouseEvent("mouseover", iT));
            const kT = [],
              WT = oT => !(null === TT || void 0 === TT || !TT.isConnected) && oT.contains(TT) || !!zT && oT.contains(zT);
            for (let TT = oT; TT && !WT(TT); TT = TT.parentElement) kT.push(TT);
            for (const TT of kT.reverse()) mo(TT, new PointerEvent("pointerenter", {
              ...iT,
              bubbles: !1
            })), mo(TT, new MouseEvent("mouseenter", {
              ...iT,
              bubbles: !1
            }));
            mo(oT, new PointerEvent("pointermove", wo(IT, 0, 0))), mo(oT, new MouseEvent("mousemove", wo(IT, 0, 0)))
          }
        } else oT && (mo(oT, new PointerEvent("pointermove", wo(IT, 0, 0))), mo(oT, new MouseEvent("mousemove", wo(IT, 0, 0))))
      },
      Eo = TT => {
        FT.h.XM(tT.f, TT)
      },
      fo = TT => {
        if (go(TT)) return void Eo(TT);
        const oT = TT.hasAttribute("data-pad-focusable") ? TT.querySelector("a[href]") : null,
          IT = null !== oT && void 0 !== oT ? oT : TT;
        uo(IT, ho(IT))
      },
      Co = ".Dropdown-root.is-open",
      jo = TT => {
        const oT = TT.querySelector(".Dropdown-control");
        return fo(oT), oT
      },
      Jo = TT => {
        var oT;
        const IT = null !== (oT = TT.closest(Co)) && void 0 !== oT ? oT : TT.querySelector(Co);
        return IT ? jo(IT) : null
      },
      Uo = TT => {
        for (const oT of document.querySelectorAll(Co)) oT.contains(TT) || jo(oT)
      },
      ao = TT => null !== TT.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      Yo = TT => {
        const oT = TT ? document.elementFromPoint(TT.x, TT.y) : null;
        return !(null === oT || void 0 === oT || !oT.closest("[data-pad-repeat]"))
      },
      Qo = TT => {
        var oT;
        return null !== (oT = [...TT.querySelectorAll("[data-pad-back]")].find(Fo)) && void 0 !== oT ? oT : null
      },
      Oo = TT => {
        const oT = Qo(TT);
        return !!oT && (fo(oT), !0)
      },
      Ho = TT => {
        var oT, IT, iT, zT;
        return null !== (oT = null !== (IT = null !== (iT = TT.getAttribute("data-pad-key")) && void 0 !== iT ? iT : TT.getAttribute("href")) && void 0 !== IT ? IT : null === (zT = TT.querySelector("a[href]")) || void 0 === zT ? void 0 : zT.getAttribute("href")) && void 0 !== oT ? oT : null
      },
      no = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const qo = new class {
        constructor() {
          this.state = no, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(TT) {
          if (oT = this.state, IT = TT, (oT.visible || IT.visible) && (oT.visible !== IT.visible || oT.x !== IT.x || oT.y !== IT.y || oT.pressed !== IT.pressed)) {
            var oT, IT;
            this.state = TT;
            for (const oT of this.listeners) oT(TT)
          }
        }
        hide() {
          this.set(no)
        }
        subscribe(TT) {
          return this.listeners.add(TT), () => {
            this.listeners.delete(TT)
          }
        }
      },
      Zo = (TT, oT) => {
        let {
          kind: IT,
          holding: iT,
          hasPress: zT,
          hasBack: kT,
          slotHasItem: WT
        } = oT;
        switch (TT) {
          case "primary":
            return "slot" === IT ? "slotPrimary" : "recipe" === IT || "button" === IT ? zT ? "pressPrimary" : "click" : "textField" === IT ? "openKeyboard" : null;
          case "secondary":
            return "slot" === IT ? "slotSecondary" : "button" !== IT && "recipe" !== IT || !zT ? null : "pressSecondary";
          case "quickMove":
            return "slot" === IT && WT ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === IT && WT && !iT ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return iT ? "cancel" : kT ? "pressBack" : "close"
        }
      },
      so = TT => {
        const oT = [];
        if (TT.hotbarPicking) return oT.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), oT.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), oT;
        if (TT.holding) "slot" === TT.kind ? (oT.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), oT.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === TT.kind && oT.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), oT.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), oT.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), TT.openButtonCloses && oT.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var IT;
          "slot" === TT.kind && TT.slotHasItem ? (oT.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), oT.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), oT.push({
            actions: ["inventoryQuickMove"],
            labelKey: TT.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), oT.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), oT.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== TT.kind && "recipe" !== TT.kind || !TT.pressHints ? "button" === TT.kind || "recipe" === TT.kind ? oT.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === TT.kind && oT.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (TT.pressHints.primary && oT.push({
            actions: ["inventoryPrimary"],
            labelKey: TT.pressHints.primary
          }), TT.pressHints.secondary && oT.push({
            actions: ["inventorySecondary"],
            labelKey: TT.pressHints.secondary
          }));
          const iT = null === (IT = TT.pressHints) || void 0 === IT ? void 0 : IT.back;
          iT && oT.push({
            actions: ["inventoryClose"],
            labelKey: iT
          });
          const zT = [];
          TT.openButtonCloses && zT.push("inventory"), iT || zT.push("inventoryClose"), zT.length > 0 && oT.push({
            actions: zT,
            labelKey: "inventoryClose"
          })
        }
        return oT.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), TT.hasCategories ? oT.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : TT.hasList && oT.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), oT
      };
    var to = IT(8105);
    class Go {
      constructor(TT) {
        this.probes = TT, this.byContainer = new Map, this.byParent = new Map
      }
      find(TT, oT) {
        const IT = ET(TT, "y", oT);
        if (!IT) return null;
        let iT = this.byContainer.get(IT);
        return iT || (this.probes.push({
          element: IT,
          rect: No(IT.getBoundingClientRect())
        }), iT = {
          container: IT,
          box: aT(IT),
          group: yo(IT)
        }, this.byContainer.set(IT, iT)), iT
      }
      findForParent(TT, oT) {
        let IT = this.byParent.get(TT);
        return void 0 === IT && (IT = this.find(TT, oT), this.byParent.set(TT, IT)), IT
      }
    }
    const po = new WeakMap;
    let bo = 0;
    const yo = TT => {
        let oT = po.get(TT);
        return oT || (oT = "el:" + bo++, po.set(TT, oT)), oT
      },
      No = TT => ({
        left: TT.left,
        top: TT.top,
        width: TT.width,
        height: TT.height
      }),
      Po = TT => TT.width > 0 && TT.height > 0,
      Vo = (TT, oT) => Po(TT) && TT.left + TT.width > 0 && TT.top + TT.height > 0 && TT.left < oT.width && TT.top < oT.height,
      TI = (TT, oT, IT) => {
        const iT = TT.top + TT.height / 2;
        return Vo(TT, oT) && (!IT || iT >= IT.top && iT <= IT.bottom)
      },
      oI = TT => ({
        x: TT.left + TT.width / 2,
        y: TT.top + TT.height / 2
      }),
      II = (TT, oT, IT) => TT < 0 ? IT >= 0 ? 0 : oT - 1 : ((TT + IT) % oT + oT) % oT,
      iI = TT => "Left" === TT || "Right" === TT,
      zI = (TT, oT, IT) => {
        const iT = iI(IT),
          zT = iT ? TT.top : TT.left,
          kT = iT ? TT.height : TT.width,
          WT = iT ? oT.top : oT.left,
          XT = iT ? oT.height : oT.width,
          BT = Math.max(0, Math.max(WT - (zT + kT), zT - (WT + XT)));
        return kT > 1.5 * XT ? {
          gap: BT,
          offset: Math.max(0, WT - zT) + .1 * Math.max(0, zT - WT)
        } : {
          gap: BT,
          offset: Math.abs(WT + XT / 2 - (zT + kT / 2))
        }
      },
      kI = (TT, oT, IT) => {
        const iT = ((TT, oT, IT) => {
          const iT = oI(TT),
            zT = oI(oT),
            kT = iI(IT) ? Math.min(TT.width, oT.width) / 4 : Math.min(TT.height, oT.height) / 4;
          switch (IT) {
            case "Right":
              return zT.x - iT.x >= kT ? Math.max(0, oT.left - (TT.left + TT.width)) : null;
            case "Left":
              return iT.x - zT.x >= kT ? Math.max(0, TT.left - (oT.left + oT.width)) : null;
            case "Down":
              return zT.y - iT.y >= kT ? Math.max(0, oT.top - (TT.top + TT.height)) : null;
            case "Up":
              return iT.y - zT.y >= kT ? Math.max(0, TT.top - (oT.top + oT.height)) : null
          }
        })(TT, oT, IT);
        if (null === iT) return null;
        const zT = zI(TT, oT, IT);
        return iT + 3 * zT.gap + .5 * zT.offset
      },
      WI = (TT, oT) => oT.visible || null !== oT.scrollGroup && oT.scrollGroup === TT.scrollGroup,
      XI = (TT, oT, IT, iT) => {
        let zT = null,
          kT = 1 / 0;
        for (const WT of oT) {
          if (WT.key === TT.key || !WI(TT, WT) || !iT(WT)) continue;
          const oT = kI(TT.rect, WT.rect, IT);
          null !== oT && oT < kT && (zT = WT, kT = oT)
        }
        return zT
      },
      BI = (TT, oT, IT) => {
        const iT = XI(TT, oT, IT, (() => !0));
        if (!iT || iI(IT) || null === TT.scrollGroup || iT.scrollGroup === TT.scrollGroup) return iT;
        const zT = XI(TT, oT, IT, (oT => 0 === zI(TT.rect, oT.rect, IT).gap));
        return null !== zT && void 0 !== zT ? zT : iT
      },
      FI = (TT, oT, IT) => {
        let iT = null,
          zT = 1 / 0;
        for (const kT of oT) {
          if (!kT.visible || IT && !IT(kT)) continue;
          const oT = oI(kT.rect),
            WT = Math.hypot(oT.x - TT.x, oT.y - TT.y);
          WT < zT && (iT = kT, zT = WT)
        }
        return iT
      },
      SI = TT => {
        const {
          rect: oT,
          clip: IT
        } = TT;
        if (!IT) return oT;
        const iT = Math.max(oT.left, IT.left),
          zT = Math.max(oT.top, IT.top);
        return {
          left: iT,
          top: zT,
          width: Math.min(oT.left + oT.width, IT.left + IT.width) - iT,
          height: Math.min(oT.top + oT.height, IT.top + IT.height) - zT
        }
      },
      DI = (TT, oT) => oT.x >= TT.left && oT.x < TT.left + TT.width && oT.y >= TT.top && oT.y < TT.top + TT.height,
      LI = (TT, oT) => {
        let IT = null,
          iT = 1 / 0;
        for (const zT of oT) {
          const oT = SI(zT);
          (zT.visible || zT.clip) && DI(oT, TT) && (oT.width * oT.height < iT && (IT = zT, iT = oT.width * oT.height))
        }
        return IT
      },
      xI = TT => {
        let oT = null;
        for (const IT of TT) {
          if (!IT.visible) continue;
          if (!oT) {
            oT = IT;
            continue
          }
          const TT = Math.min(oT.rect.height, IT.rect.height) / 2,
            iT = IT.rect.top - oT.rect.top;
          (iT < -TT || Math.abs(iT) <= TT && IT.rect.left < oT.rect.left) && (oT = IT)
        }
        return oT
      },
      cI = (TT, oT, IT, iT, zT) => {
        const kT = zT % oT,
          WT = Math.floor(zT / oT);
        return {
          left: TT.left + kT * IT,
          top: TT.top + WT * iT,
          width: TT.width,
          height: TT.height
        }
      },
      KI = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      MI = ".LazyLoadedItemWrapper",
      rI = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      AI = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      gI = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      hI = TT => TT.hasAttribute("data-inven-idx") ? "slot" : TT.hasAttribute("data-recipe-key") ? "recipe" : TT.hasAttribute("data-craft-ingredient") || So(TT) ? "info" : go(TT) ? "textField" : "button",
      wI = (TT, oT) => "slot" === oT ? Number(TT.getAttribute("data-inven-idx")) : null,
      mI = TT => TT.matches(MI) ? TT.querySelector(rI) : TT,
      eI = TT => {
        var oT, IT;
        return {
          element: TT,
          recipe: null !== (oT = TT && (null === (IT = mI(TT)) || void 0 === IT ? void 0 : IT.getAttribute("data-recipe-key"))) && void 0 !== oT ? oT : null
        }
      },
      RI = TT => {
        const oT = mI(TT);
        if (!oT) return {
          kind: "pending",
          idx: null
        };
        const IT = hI(oT);
        return {
          kind: IT,
          idx: wI(oT, IT)
        }
      },
      uI = TT => {
        const oT = [];
        for (const [IT, iT] of AI) {
          TT.matches(iT) && oT.push([IT, TT]);
          for (const zT of TT.querySelectorAll(iT)) oT.push([IT, zT])
        }
        return oT
      },
      vI = (TT, oT) => {
        for (const [IT, iT] of TT)
          if (iT.contains(oT)) return IT;
        return "other"
      },
      EI = (TT, oT, IT, iT, zT, kT, WT, XT) => {
        var BT;
        const FT = TT.children,
          ST = No(FT[0].getBoundingClientRect()),
          DT = [{
            element: FT[0],
            rect: ST
          }];
        if (kT.push(DT[0]), 0 === ST.width || 0 === ST.height) return;
        let LT = 1;
        for (; LT < FT.length && Math.abs(FT[LT].getBoundingClientRect().top - ST.top) < 1;) LT++;
        const xT = TT => {
            const oT = {
              element: FT[TT],
              rect: No(FT[TT].getBoundingClientRect())
            };
            return kT.push(oT), DT.push(oT), oT.rect
          },
          cT = LT > 1 ? xT(1).left - ST.left : ST.width,
          KT = FT.length > LT ? xT(LT).top - ST.top : ST.height,
          MT = WT.find(TT, oT);
        let rT = null;
        if (MT) {
          var AT;
          const {
            container: TT,
            box: oT
          } = MT;
          rT = null !== (AT = XT.get(TT)) && void 0 !== AT ? AT : null, rT || (rT = {
            top: TT.scrollTop,
            left: TT.scrollLeft,
            box: oT,
            viewport: iT,
            targets: [],
            probes: [],
            holdsOthers: !1
          }, XT.set(TT, rT)), rT.probes.push(...DT)
        }
        const gT = zT.length;
        for (let eT = 0; eT < FT.length; eT++) {
          var hT, wT, mT;
          const TT = FT[eT],
            oT = cI(ST, LT, cT, KT, eT),
            kT = TT.firstElementChild ? TT.querySelector(rI) : null,
            WT = kT ? hI(kT) : "pending";
          zT.push({
            key: yo(TT),
            rect: oT,
            panel: IT,
            scrollGroup: null !== (hT = null === MT || void 0 === MT ? void 0 : MT.group) && void 0 !== hT ? hT : null,
            visible: TI(oT, iT, null === MT || void 0 === MT ? void 0 : MT.box),
            clip: null !== (wT = null === MT || void 0 === MT ? void 0 : MT.box) && void 0 !== wT ? wT : null,
            element: TT,
            kind: WT,
            idx: kT ? wI(kT, WT) : null,
            scrollContainer: null !== (mT = null === MT || void 0 === MT ? void 0 : MT.container) && void 0 !== mT ? mT : null
          })
        }
        null === (BT = rT) || void 0 === BT || BT.targets.push(...zT.slice(gT))
      },
      fI = TT => TT instanceof Element && null !== TT.closest(MI),
      CI = TT => null !== TT.scrollContainer && fI(TT.element);
    class jI {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(TT, oT, IT, iT) {
        this.latched = {
          source: TT,
          focusKey: oT,
          sinceMs: IT,
          hold: {
            id: ++this.presses,
            holdMs: iT
          }
        }
      }
      update(TT, oT, IT) {
        const iT = this.latched;
        return iT ? TT && oT === iT.focusKey ? IT - iT.sinceMs < iT.hold.holdMs ? null : (this.latched = null, iT.source) : (this.latched = null, null) : null
      }
      getHold() {
        var TT, oT;
        return null !== (TT = null === (oT = this.latched) || void 0 === oT ? void 0 : oT.hold) && void 0 !== TT ? TT : null
      }
      reset() {
        this.latched = null
      }
    }
    var JI = IT(8114);
    const UI = {
        kind: "none"
      },
      aI = TT => ({
        x: TT.clientX,
        y: TT.clientY
      }),
      YI = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class QI {
      constructor() {
        this.hovered = UI, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(TT, oT, IT, iT, zT) {
        const kT = null !== oT ? {
            kind: "slot",
            idx: oT
          } : IT ? {
            kind: "element",
            element: IT
          } : UI,
          WT = `${zT}|${Math.round(iT.clientX)},${Math.round(iT.clientY)}`,
          XT = (BT = this.hovered, FT = kT, "slot" === BT.kind && "slot" === FT.kind ? BT.idx === FT.idx : "element" === BT.kind && "element" === FT.kind ? BT.element === FT.element : BT.kind === FT.kind);
        var BT, FT;
        if (XT && WT === this.signature) return;
        const ST = !XT || zT !== this.holding || "" === this.signature;
        this.signature = WT, this.holding = zT, this.lastPoint = iT;
        const DT = this.hovered;
        if (this.hovered = kT, "slot" === kT.kind) return this.leaveElement(DT, null, iT), void(ST ? TT.hover(kT.idx, iT) : TT.moveTo(iT));
        if (XT) return void("element" === kT.kind ? vo(kT.element, kT.element, aI(iT)) : TT.hover(null, iT));
        TT.hover(null, iT);
        const LT = "element" === kT.kind ? kT.element : null;
        "element" === DT.kind ? vo(DT.element, LT, aI(iT)) : LT && vo(null, LT, aI(iT))
      }
      invalidate() {
        this.signature = ""
      }
      clear(TT) {
        const oT = this.hovered;
        this.hovered = UI, this.signature = "", "none" !== oT.kind && (this.leaveElement(oT, null, this.lastPoint), TT && "slot" === oT.kind && TT.hover(null, this.lastPoint))
      }
      leaveElement(TT, oT, IT) {
        "element" === TT.kind && vo(TT.element, oT, aI(IT))
      }
    }
    class OI {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(TT, oT) {
        eT(TT) && (this.lastTiltedMs = oT)
      }
      allowsClick(TT) {
        return TT - this.lastTiltedMs > 150
      }
    }
    class HI {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(TT) {
        return 0 !== (0, cT.n)(TT, .2).y
      }
      step(TT, oT, IT) {
        TT !== this.container && (this.container = TT, this.remainder = 0);
        const iT = RT(oT, IT).y;
        if (0 === iT) return this.remainder = 0, !1;
        const zT = this.remainder + iT,
          kT = Math.trunc(zT);
        if (this.remainder = zT - kT, 0 === kT) return !1;
        const WT = TT.scrollTop;
        return TT.scrollTop = WT + kT, TT.scrollTop !== WT
      }
      current() {
        var TT;
        return null !== (TT = this.container) && void 0 !== TT && TT.isConnected ? this.container : null
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var nI = IT(8121);
    const qI = "[data-pad-inventory-default]",
      ZI = ".HotBarGameItemsContainer .InvenItem.Selected",
      lI = {
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
      sI = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      tI = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      GI = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      pI = [...tI, ...GI],
      bI = () => {
        return TT = (0, ST.k)("inventory"), !pI.map(ST.k).includes(TT) && !(0, cT.L)(TT);
        var TT
      },
      yI = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      NI = (TT, oT) => {
        const IT = !(null === oT || void 0 === oT || !oT.isHolding());
        return function(TT, oT) {
          const IT = TT.find((TT => TT.visible && oT(TT)));
          if (IT) return IT;
          for (var iT = arguments.length, zT = new Array(iT > 2 ? iT - 2 : 0), kT = 2; kT < iT; kT++) zT[kT - 2] = arguments[kT];
          for (const WT of zT) {
            const oT = xI(TT.filter(WT));
            if (oT) return oT
          }
          return xI(TT)
        }(TT, (TT => {
          const {
            element: oT
          } = TT;
          return oT.matches(qI) || null !== oT.querySelector(qI) || oT.matches(ZI)
        }), (TT => "slot" === TT.kind ? IT || null !== TT.idx && !(null === oT || void 0 === oT || !oT.hasItemAt(TT.idx)) : "recipe" === TT.kind || "pending" === TT.kind), (TT => "slot" === TT.kind || "button" === TT.kind))
      };
    class PI {
      constructor() {
        this.set = null, this.observer = new MutationObserver((TT => {
          TT.some((TT => !fI(TT.target))) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = TT => {
          this.scrolled(TT.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const TT = [],
              oT = [];
            let IT = !1;
            const iT = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              zT = new Map,
              kT = new Go(oT);
            for (const DT of document.querySelectorAll(KI)) {
              const ST = uI(DT);
              IT ||= null !== DT.querySelector(".CreativeCategoryTab");
              for (const IT of DT.querySelectorAll(`${MI}:first-child`)) {
                const WT = IT.parentElement;
                EI(WT, DT, vI(ST, WT), iT, TT, oT, kT, zT)
              }
              for (const IT of DT.querySelectorAll(rI)) {
                var WT, XT, BT, FT;
                if (IT.closest(MI) || IT.closest("[data-pad-ignore]")) continue;
                const LT = null === (WT = IT.parentElement) || void 0 === WT ? void 0 : WT.closest(rI);
                if (LT && DT.contains(LT)) continue;
                const xT = hI(IT),
                  cT = wI(IT, xT);
                if (-1 === cT) continue;
                const KT = No(IT.getBoundingClientRect());
                oT.push({
                  element: IT,
                  rect: KT
                });
                const MT = kT.findForParent(IT.parentElement, DT),
                  rT = MT && !zT.has(MT.container) ? MT : null;
                (rT ? Po(KT) : Vo(KT, iT)) && TT.push({
                  key: yo(IT),
                  rect: KT,
                  panel: vI(ST, IT),
                  scrollGroup: null !== (XT = null === rT || void 0 === rT ? void 0 : rT.group) && void 0 !== XT ? XT : null,
                  visible: TI(KT, iT, null === rT || void 0 === rT ? void 0 : rT.box),
                  clip: null !== (BT = null === rT || void 0 === rT ? void 0 : rT.box) && void 0 !== BT ? BT : null,
                  element: IT,
                  kind: xT,
                  idx: cT,
                  scrollContainer: null !== (FT = null === rT || void 0 === rT ? void 0 : rT.container) && void 0 !== FT ? FT : null
                })
              }
            }
            for (const [DT, LT] of zT) LT.holdsOthers = oT.some((TT => TT.element !== DT && DT.contains(TT.element) && !TT.element.closest(MI)));
            const ST = new Map;
            for (const DT of TT) ST.set(DT.element, DT);
            return {
              targets: TT,
              byElement: ST,
              hasCategories: IT,
              probes: oT,
              scrollers: zT
            }
          })(), this.observer.disconnect();
          for (const TT of document.querySelectorAll(KI)) this.observer.observe(TT, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(TT) {
        !this.set || TT instanceof Element && ((TT, oT) => {
          const IT = TT.scrollers.get(oT);
          if (!IT || IT.holdsOthers || oT.scrollLeft !== IT.left) return !1;
          const iT = oT.scrollTop - IT.top;
          if (0 === iT) return !0;
          IT.top = oT.scrollTop;
          for (const zT of IT.probes) zT.rect.top -= iT;
          for (const zT of IT.targets) zT.rect.top -= iT, zT.visible = TI(zT.rect, IT.viewport, IT.box);
          return !0
        })(this.set, TT) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((TT => {
          return oT = TT.rect, IT = TT.element.getBoundingClientRect(), !(oT.left === IT.left && oT.top === IT.top && oT.width === IT.width && oT.height === IT.height);
          var oT, IT
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const dI = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(cT.I.map((TT => [TT, (0, KT.d)(cT.J)]))), this.stickRepeat = new cT.e((0, KT.d)(cT.cb)), this.pageUpTimer = (0, KT.d)(cT._), this.pageDownTimer = (0, KT.d)(cT._), this.stickGate = new wT, this.pointer = null, this.activePress = null, this.dropLatch = new jI, this.scroller = new HI, this.scrollStickClick = new OI, this.hover = new QI, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new lT, this.targets = new PI, this.hasCategories = !1, this.wasShowing = !1, this.state = JI.c, this.isActive = () => (0, to.i)(), this.isShowing = () => "inventory" === DT.c.getActiveConsumerName() && (0, xT.l)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, to.f)()), (0, to.i)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var TT;
            this.reopenSlotIdx = null !== (TT = this.focused ? RI(this.focused).idx : null) && void 0 !== TT ? TT : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, to.r)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = TT => {
            (0, XT.unstable_batchedUpdates)((() => {
              this.frame(TT)
            }))
          }, this.shouldBlockRealPointer = TT => TT.isTrusted && !(0, rT.p)(TT) && this.isShowing(), this.noteRealPointer = TT => {
            TT instanceof MouseEvent && TT.isTrusted && !(0, rT.p)(TT) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = TT.clientX, this.lastRealPointer.y = TT.clientY)
          }, this.wakePressActs = TT => {
            var oT;
            return TT === (0, ST.k)("inventoryClose") ? !(null !== (oT = (0, to.f)()) && void 0 !== oT && oT.isHolding()) : !(TT !== (0, ST.k)("inventory") || !bI()) || ((0, cT.L)(TT) ? this.isNavButton(TT) : GI.some((oT => (0, ST.k)(oT) === TT)))
          }
        }
        frame(TT) {
          var oT, IT, iT, zT, kT;
          const WT = (0, to.f)();
          if (!(0, xT.l)()) return void(this.wasShowing && (this.endInteraction(WT), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), TT.wokeDevice && this.focusWakePointer(!(null === WT || void 0 === WT || !WT.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, LT.j)().inventoryNavigation || this.pointer || this.engagePointer();
          const XT = performance.now();
          this.handleNavigation(TT, XT), this.handlePanels(TT), this.handlePaging(TT, XT), this.handleScroll(TT), this.handleButtons(TT, XT, WT), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const BT = this.ensureFocus(),
            FT = this.focusContext(WT);
          this.ring.show(BT);
          const DT = "slot" === FT.kind ? FT.idx : null,
            cT = null !== (oT = null === (IT = FT.actionElement) || void 0 === IT ? void 0 : IT.querySelector(".DoCraftItem")) && void 0 !== oT ? oT : FT.actionElement;
          this.pointer ? (this.hover.sync(WT, DT, cT, ((TT, oT) => {
            const IT = oT ? YI() : 0;
            return {
              clientX: TT.x - IT,
              clientY: TT.y - IT
            }
          })(this.pointer, FT.holding), FT.holding), qo.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: TT.isHeld((0, ST.k)("inventoryPrimary"))
          })) : BT && this.focused && this.hover.sync(WT, DT, cT, ((TT, oT) => {
            if (!oT) return {
              clientX: TT.left + TT.width - 10,
              clientY: TT.top + TT.height / 2 - 10
            };
            const IT = YI();
            return {
              clientX: TT.left + TT.width / 2 - IT,
              clientY: TT.top + TT.height / 2 - IT
            }
          })(BT, FT.holding), FT.holding), this.publishState({
            showing: !0,
            kind: FT.kind,
            holding: FT.holding,
            slotHasItem: FT.slotHasItem,
            pressHints: null !== (iT = null === (zT = FT.press) || void 0 === zT ? void 0 : zT.hints) && void 0 !== iT ? iT : null,
            hasCategories: this.hasCategories,
            hasList: !!this.focusTarget && CI(this.focusTarget),
            openButtonCloses: bI(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === FT.kind && !(null === (kT = FT.actionElement) || void 0 === kT || !kT.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(TT) {
          var oT;
          const IT = (0, xT.d)();
          if (!IT) return;
          this.targets.revalidate();
          const iT = this.getTargets().targets;
          this.setFocus(null !== (oT = LI(IT, iT)) && void 0 !== oT ? oT : TT ? FI(IT, iT, (TT => {
            let {
              rect: oT
            } = TT;
            const iT = Math.max(oT.left - IT.x, 0, IT.x - (oT.left + oT.width)),
              zT = Math.max(oT.top - IT.y, 0, IT.y - (oT.top + oT.height));
            return Math.hypot(iT, zT) <= Math.min(oT.width, oT.height) / 2
          })) : null, !1), "cursor" === (0, LT.j)().inventoryNavigation && (this.pointer = {
            x: IT.x,
            y: IT.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const TT = this.lastRealPointer;
          if (!TT || "keyboardMouse" !== BT.c.get("activeInputDevice")) return;
          const oT = document.elementFromPoint(TT.x, TT.y);
          oT && vo(null, oT, TT)
        }
        endInteraction(TT) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const oT of this.dpadTimers.values()) oT.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(TT), this.ring.hide(), this.releasePointer(), this.publishState(JI.c)
        }
        getTargets() {
          const TT = this.targets.get();
          return this.hasCategories = TT.hasCategories, TT
        }
        currentTarget() {
          var TT;
          return this.focused && null !== (TT = this.getTargets().byElement.get(this.focused)) && void 0 !== TT ? TT : null
        }
        readFocusRect() {
          const TT = this.focused;
          if (null === TT || void 0 === TT || !TT.isConnected || !TT.closest(KI)) return null;
          const oT = TT.getBoundingClientRect();
          return oT.width > 0 && oT.height > 0 ? {
            left: oT.left,
            top: oT.top,
            width: oT.width,
            height: oT.height
          } : null
        }
        ensureFocus() {
          const TT = this.readFocusRect();
          if (TT || this.pointer) return TT;
          const {
            targets: oT,
            byElement: IT
          } = this.getTargets();
          let iT = null,
            zT = !1;
          if (this.lastRect) iT = FI(oI(this.lastRect), oT);
          else {
            var kT, WT;
            const TT = ((TT, oT) => {
                const IT = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return IT ? NI(TT.filter((TT => IT.contains(TT.element))), oT) : null
              })(oT, (0, to.f)()),
              XT = oT.find((TT => null !== TT.idx && TT.idx === this.reopenSlotIdx)),
              BT = document.querySelector(ZI);
            zT = null !== TT || void 0 !== XT, iT = null !== (kT = null !== (WT = null !== TT && void 0 !== TT ? TT : XT) && void 0 !== WT ? WT : BT && IT.get(BT)) && void 0 !== kT ? kT : xI(oT)
          }
          return this.setFocus(iT, zT), this.lastRect
        }
        setFocus(TT) {
          let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          TT && (this.focused = TT.element, this.focusTarget = TT, this.panelMemory.set(TT.panel, TT.element), oT && TT.scrollContainer && ((TT, oT) => {
            const IT = TT.getBoundingClientRect(),
              iT = aT(oT),
              zT = oT.scrollTop;
            return IT.top < iT.top ? oT.scrollTop -= iT.top - IT.top : IT.bottom > iT.bottom && (oT.scrollTop += IT.bottom - iT.bottom), oT.scrollTop !== zT
          })(TT.element, TT.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, LT.j)().inventoryNavigation) {
              if (this.lastRect) {
                const TT = oI(this.lastRect);
                this.pointer = {
                  x: TT.x,
                  y: TT.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const TT = this.lastRect ? oI(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: TT.x,
            y: TT.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, qo.hide()
        }
        hoverAtPointer() {
          var TT;
          const oT = LI(this.pointer, this.getTargets().targets);
          this.focusTarget = oT, (null === oT || void 0 === oT ? void 0 : oT.element) !== this.focused && (this.focused = null !== (TT = null === oT || void 0 === oT ? void 0 : oT.element) && void 0 !== TT ? TT : null, oT && (this.panelMemory.set(oT.panel, oT.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(TT, oT) {
          const IT = this.focusTarget,
            iT = IT && (0, LT.j)().cursorMagnetism ? oI(SI(IT)) : null;
          this.pointer = mT(this.pointer, {
            stick: TT.leftStick,
            moveDeadzone: (0, LT.j)().moveDeadzone,
            dpad: oT,
            dtMs: TT.dtMs,
            cursorSpeedPercent: (0, LT.j)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: iT
            }
          })
        }
        move(TT) {
          this.targets.revalidate();
          const oT = this.currentTarget();
          oT && this.setFocus(BI(oT, this.getTargets().targets, TT))
        }
        step(TT) {
          const oT = this.pointer;
          if (oT && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((TT, oT, IT) => {
            var iT;
            const zT = {
              key: "",
              rect: {
                left: TT.x,
                top: TT.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0,
              clip: null
            };
            return null !== (iT = BI(zT, oT, IT)) && void 0 !== iT ? iT : FI(TT, oT)
          })(oT, this.getTargets().targets, TT));
          this.move(TT)
        }
        isNavButton(TT) {
          return !tI.some((oT => (0, ST.k)(oT) === TT)) && !(TT === (0, ST.k)("inventory") && bI())
        }
        handleNavigation(TT, oT) {
          const IT = (0, LT.j)().inventoryNavigation,
            iT = {
              x: 0,
              y: 0
            };
          let zT = null;
          for (const BT of cT.I) {
            const kT = this.isNavButton(BT) && TT.isHeld(BT);
            kT && (iT.x += lI[BT].x, iT.y += lI[BT].y), this.dpadTimers.get(BT).update(kT, oT) && "cursor" !== IT && (zT ??= BT)
          }
          const kT = this.stickGate.update(TT.leftStick, (0, LT.j)().moveDeadzone);
          if (zT && (this.step(zT), this.stickGate.lock()), "slot" !== IT) {
            const oT = ((TT, oT, IT, iT) => "hybrid" !== TT ? "cursor" === TT : !iT && (oT || IT))(IT, null !== this.pointer, kT, null !== zT);
            return oT && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(TT, "cursor" === IT ? iT : {
              x: 0,
              y: 0
            }))
          }
          const WT = (0, cT.n)(TT.leftStick, (0, LT.j)().moveDeadzone),
            XT = this.stickRepeat.update(kT ? (0, cT.db)(WT) : null, oT);
          XT && this.move(XT)
        }
        applyCategoryPlace() {
          const TT = this.placeAfterCategory;
          if (!TT) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const oT = FI(oI(TT.rect), this.getTargets().targets, (oT => oT.scrollGroup === TT.scrollGroup));
          this.setFocus(oT, !1)
        }
        applyFocusRequest() {
          const TT = (0, to.r)();
          TT && (this.targets.invalidate(), this.setFocus((0, to.d)(this.getTargets().targets, TT)))
        }
        handlePanels(TT) {
          var oT, IT, iT;
          const zT = TT.wasPressed((0, ST.k)("inventoryPanelPrevious")),
            kT = TT.wasPressed((0, ST.k)("inventoryPanelNext"));
          if (!zT && !kT) return;
          const {
            targets: WT
          } = this.getTargets(), XT = (BT = ((TT, oT) => {
            const IT = [];
            for (const zT of TT) zT.visible && !IT.includes(zT.panel) && IT.push(zT.panel);
            const iT = TT => {
              const iT = oT.indexOf(TT);
              return -1 === iT ? oT.length + IT.indexOf(TT) : iT
            };
            return IT.sort(((TT, oT) => iT(TT) - iT(oT)))
          })(WT, gI), FT = null !== (oT = null === (IT = this.focusTarget) || void 0 === IT ? void 0 : IT.panel) && void 0 !== oT ? oT : null, DT = kT ? 1 : -1, 0 === BT.length ? null : BT[II(null === FT ? -1 : BT.indexOf(FT), BT.length, DT)]);
          var BT, FT, DT;
          if (null === XT) return;
          const LT = this.panelMemory.get(XT),
            xT = WT.filter((TT => TT.panel === XT)),
            cT = null !== (iT = xT.find((TT => TT.element === LT && TT.visible))) && void 0 !== iT ? iT : NI(xT, (0, to.f)());
          this.setFocus(cT)
        }
        handlePaging(TT, oT) {
          const IT = (0, ST.k)("menuPageUp"),
            iT = (0, ST.k)("menuPageDown"),
            zT = this.pageUpTimer.update(TT.isHeld(IT), oT),
            kT = this.pageDownTimer.update(TT.isHeld(iT), oT);
          if (!zT && !kT) return;
          const WT = kT ? 1 : -1;
          if (!TT.wasPressed(kT ? iT : IT) && this.hasCategories) return;
          if ((TT => {
              const oT = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === oT.length) return !1;
              const IT = oT.findIndex((TT => TT.classList.contains("Selected"))),
                iT = oT[II(IT, oT.length, TT)];
              return uo(iT, ho(iT)), !0
            })(WT)) {
            var XT, BT;
            this.targets.invalidate();
            const TT = null !== (XT = null === (BT = this.focusTarget) || void 0 === BT ? void 0 : BT.scrollGroup) && void 0 !== XT ? XT : null,
              oT = this.readFocusRect();
            return void(this.placeAfterCategory = null !== TT && oT && !this.pointer ? {
              rect: oT,
              scrollGroup: TT
            } : null)
          }
          const {
            targets: FT
          } = this.getTargets(), DT = this.currentTarget(), LT = DT && CI(DT) ? DT : FT.find((TT => CI(TT) && TT.visible));
          if (!LT) return;
          const xT = ((TT, oT, IT, iT) => {
            if (null === TT.scrollGroup) return null;
            const zT = oI(TT.rect),
              kT = zT.x,
              WT = zT.y + ("Down" === IT ? iT : -iT);
            let XT = null,
              BT = 1 / 0;
            for (const FT of oT) {
              if (FT.scrollGroup !== TT.scrollGroup || FT.key === TT.key) continue;
              const oT = oI(FT.rect);
              if ("Down" === IT ? oT.y <= zT.y : oT.y >= zT.y) continue;
              const iT = Math.hypot(oT.x - kT, oT.y - WT);
              iT < BT && (XT = FT, BT = iT)
            }
            return XT
          })(LT, FT, WT > 0 ? "Down" : "Up", LT.scrollContainer.clientHeight);
          this.setFocus(null !== xT && void 0 !== xT ? xT : LT)
        }
        handleScroll(TT) {
          var oT, IT, iT, zT, kT, WT;
          if (!this.scroller.isScrolling(TT.rightStick)) return void this.scroller.reset();
          const {
            targets: XT
          } = this.getTargets(), BT = this.pointer, FT = !BT && this.focusTarget && CI(this.focusTarget) ? this.focusTarget.scrollContainer : null, ST = BT && (null === (oT = XT.find((TT => TT.clip && DI(TT.clip, BT)))) || void 0 === oT ? void 0 : oT.scrollContainer), DT = null !== (IT = null !== (iT = null !== (zT = this.scroller.current()) && void 0 !== zT ? zT : ST) && void 0 !== iT ? iT : FT) && void 0 !== IT ? IT : null === (kT = XT.find(CI)) || void 0 === kT ? void 0 : kT.scrollContainer;
          if (!DT || !this.scroller.step(DT, TT.rightStick, TT.dtMs)) return;
          this.targets.scrolled(DT);
          const LT = BT || (null === (WT = this.focusTarget) || void 0 === WT ? void 0 : WT.scrollContainer) !== DT ? null : this.readFocusRect();
          if (!LT) return;
          const xT = aT(DT),
            cT = oI(LT);
          if (cT.y < xT.top || cT.y > xT.bottom) {
            const TT = this.focusTarget.scrollGroup,
              oT = FI(cT, this.getTargets().targets, (oT => oT.scrollGroup === TT));
            this.setFocus(oT, !1)
          }
        }
        focusContext(TT) {
          const {
            kind: oT,
            idx: IT
          } = this.focused ? RI(this.focused) : {
            kind: null,
            idx: null
          }, iT = this.focused ? mI(this.focused) : null, zT = iT ? (0, nI.e)(iT) : null;
          return {
            kind: oT,
            idx: IT,
            actionElement: iT,
            press: zT,
            hasPress: null !== zT,
            hasBack: !(null === zT || void 0 === zT || !zT.back),
            holding: TT.isHolding(),
            slotHasItem: null !== IT && TT.hasItemAt(IT)
          }
        }
        handleButtons(TT, oT, IT) {
          var iT, zT;
          if (!this.activePress || TT.isHeld(this.activePress.button) && (iT = this.activePress.target, zT = this.focused, null !== iT.recipe ? eI(zT).recipe === iT.recipe : zT === iT.element) || this.releasePress(), this.scrollStickClick.update(TT.rightStick, oT), !this.handleHotbarPick(TT, IT)) {
            for (const [iT, zT] of sI) {
              const kT = (0, ST.k)(zT);
              if (!TT.wasPressed(kT) || "openButton" === iT && !bI()) continue;
              if ("RS" === kT && !this.scrollStickClick.allowsClick(oT)) continue;
              const WT = this.focusContext(IT),
                XT = Zo(iT, WT);
              XT && this.runIntent(XT, WT, kT, IT)
            }
            this.handleDrop(TT, oT, IT)
          }
        }
        handleHotbarPick(TT, oT) {
          const IT = this.hotbarPick;
          if (!IT) return !1;
          const iT = TT.wasPressed((0, ST.k)("inventoryPrimary")) || TT.wasPressed((0, ST.k)("inventoryHotbarSwap"));
          if (!iT && !TT.wasPressed((0, ST.k)("inventoryClose")) && !oT.isHolding()) return !(TT.wasPressed((0, ST.k)("inventory")) && bI());
          const zT = this.focusTarget;
          iT && "hotbar" === (null === zT || void 0 === zT ? void 0 : zT.panel) && null !== zT.idx && zT.idx !== IT.idx && (oT.swapWithHotbar(zT.idx, IT.idx), this.afterAction()), this.hotbarPick = null;
          const kT = IT.element.isConnected ? this.getTargets().byElement.get(IT.element) : void 0;
          return kT && this.setFocus(kT), !0
        }
        startHotbarPick(TT) {
          var oT;
          const {
            targets: IT,
            byElement: iT
          } = this.getTargets(), zT = document.querySelector(ZI), kT = null !== (oT = zT && iT.get(zT)) && void 0 !== oT ? oT : IT.find((TT => "hotbar" === TT.panel));
          kT && this.focused && (this.hotbarPick = {
            idx: TT,
            element: this.focused
          }, this.setFocus(kT))
        }
        focusKey() {
          return this.focused ? yo(this.focused) : null
        }
        handleDrop(TT, oT, IT) {
          const iT = (0, ST.k)("inventoryDrop");
          if (TT.wasPressed(iT)) {
            const TT = (zT = this.focusContext(IT)).holding ? {
              kind: "kS"
            } : "slot" === zT.kind && zT.slotHasItem && null !== zT.idx ? {
              kind: "slot",
              idx: zT.idx
            } : null;
            return void(TT && (this.dropFrom(TT, !1, IT), this.dropLatch.press(TT, this.focusKey(), oT, MT.c[(0, LT.j)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var zT;
          const kT = this.dropLatch.update(TT.isHeld(iT), this.focusKey(), oT);
          kT && ((TT, oT, IT) => "kS" === TT.kind ? oT : !oT && IT(TT.idx))(kT, IT.isHolding(), IT.hasItemAt) && (this.dropFrom(kT, !0, IT), this.afterAction())
        }
        dropFrom(TT, oT, IT) {
          "kS" === TT.kind ? IT.dropHeld(oT, this.slotPoint()) : IT.dropSlot(TT.idx, oT)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (TT => {
            const oT = oI(TT);
            return {
              clientX: oT.x,
              clientY: oT.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(TT, oT, IT, iT) {
          const zT = oT.idx,
            kT = oT.actionElement;
          switch (kT && yI.has(TT) && (0, rT.q)(kT), TT) {
            case "slotPrimary":
              iT.primary(zT, this.slotPoint());
              break;
            case "slotSecondary":
              iT.secondary(zT, this.slotPoint());
              break;
            case "slotQuickMove":
              iT.quickMove(zT, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(zT);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(oT.press, "pressPrimary" === TT ? "primary" : "secondary", IT);
              break;
            case "click":
              uo(kT, ho(kT));
              break;
            case "openKeyboard":
              go(kT) && Eo(kT);
              break;
            case "pressBack":
              oT.press.back();
              break;
            case "cancel":
              iT.cancel();
              break;
            case "close":
              return this.releasePress(), void iT.close()
          }
          this.afterAction()
        }
        startPress(TT, oT, IT) {
          this.releasePress(), TT.press(oT) && (this.activePress = {
            handlers: TT,
            button: IT,
            target: eI(this.focused)
          })
        }
        releasePress() {
          var TT, oT, IT;
          null === (TT = this.activePress) || void 0 === TT || null === (oT = (IT = TT.handlers).release) || void 0 === oT || oT.call(IT), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(TT) {
          ((TT, oT) => {
            var IT, iT, zT, kT, WT, XT;
            return TT.showing === oT.showing && TT.kind === oT.kind && TT.holding === oT.holding && TT.slotHasItem === oT.slotHasItem && (null === (IT = TT.pressHints) || void 0 === IT ? void 0 : IT.primary) === (null === (iT = oT.pressHints) || void 0 === iT ? void 0 : iT.primary) && (null === (zT = TT.pressHints) || void 0 === zT ? void 0 : zT.secondary) === (null === (kT = oT.pressHints) || void 0 === kT ? void 0 : kT.secondary) && (null === (WT = TT.pressHints) || void 0 === WT ? void 0 : WT.back) === (null === (XT = oT.pressHints) || void 0 === XT ? void 0 : XT.back) && TT.hasCategories === oT.hasCategories && TT.hasList === oT.hasList && TT.openButtonCloses === oT.openButtonCloses && TT.steppingSlots === oT.steppingSlots && TT.hotbarPicking === oT.hotbarPicking && TT.quickMoveToHotbar === oT.quickMoveToHotbar && TT.dropStackHold === oT.dropStackHold
          })(TT, this.state) || (this.state = TT, FT.h.XM(JI.d, TT))
        }
      },
      VI = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var Ti = IT(8123),
      oi = IT(306),
      Ii = IT(1585),
      ii = IT(7627);
    const zi = "[data-pad-secondary]",
      ki = TT => TT instanceof HTMLElement && Fo(TT) && !So(TT),
      Wi = TT => {
        const oT = TT.querySelector(zi);
        if (oT && ki(oT)) return oT;
        for (const zT of null !== (IT = null === (iT = TT.parentElement) || void 0 === iT ? void 0 : iT.children) && void 0 !== IT ? IT : []) {
          var IT, iT;
          if (zT !== TT && zT.matches(zi) && ki(zT)) return zT
        }
        return null
      },
      Xi = (TT, oT, IT, iT) => Math.max(0, Math.max(TT, IT) - Math.min(oT, iT)),
      Bi = (TT, oT, IT, iT) => Math.max(0, Math.min(oT, iT) - Math.max(TT, IT)),
      Fi = (TT, oT, IT) => {
        const iT = (TT.left + TT.right) / 2,
          zT = (TT.top + TT.bottom) / 2,
          kT = (oT.left + oT.right) / 2,
          WT = (oT.top + oT.bottom) / 2;
        if ("Left" === IT || "Right" === IT) {
          const XT = "Right" === IT ? 1 : -1;
          return {
            forwardGap: "Right" === IT ? oT.left - TT.right : TT.left - oT.right,
            centreForward: (kT - iT) * XT,
            sidewaysGap: Xi(TT.top, TT.bottom, oT.top, oT.bottom),
            sidewaysOverlap: Bi(TT.top, TT.bottom, oT.top, oT.bottom),
            centreSideways: Math.abs(WT - zT),
            startSideways: Math.abs(oT.top - TT.top),
            fromSidewaysSize: TT.bottom - TT.top,
            toSidewaysSize: oT.bottom - oT.top,
            toLength: oT.right - oT.left
          }
        }
        const XT = "Down" === IT ? 1 : -1;
        return {
          forwardGap: "Down" === IT ? oT.top - TT.bottom : TT.top - oT.bottom,
          centreForward: (WT - zT) * XT,
          sidewaysGap: Xi(TT.left, TT.right, oT.left, oT.right),
          sidewaysOverlap: Bi(TT.left, TT.right, oT.left, oT.right),
          centreSideways: Math.abs(kT - iT),
          startSideways: Math.abs(oT.left - TT.left),
          fromSidewaysSize: TT.right - TT.left,
          toSidewaysSize: oT.right - oT.left,
          toLength: oT.bottom - oT.top
        }
      },
      Si = TT => TT.centreForward > .5 && TT.forwardGap >= -TT.toLength / 2,
      Di = TT => {
        const oT = TT.sidewaysOverlap > 0 ? 0 : 2 * TT.fromSidewaysSize,
          IT = TT.fromSidewaysSize > 1.5 * TT.toSidewaysSize ? TT.startSideways : TT.centreSideways;
        return Math.max(0, TT.forwardGap) + 3 * TT.sidewaysGap + oT + .1 * IT
      },
      Li = (TT, oT) => Bi(TT.top, TT.bottom, oT.top, oT.bottom) > 0 || oT.bottom - oT.top > oT.right - oT.left,
      xi = (TT, oT, IT, iT, zT, kT) => {
        const WT = zT ? Ki(TT, oT, IT, zT) : new Set,
          XT = ri(TT, oT, IT, WT);
        return XT < 0 && WT.size > 0 && kT ? ci(TT, oT, IT, kT) : iT && XT >= 0 ? Mi(TT, oT, IT, iT, XT, WT) : XT
      },
      ci = (TT, oT, IT, iT) => {
        const zT = new Set,
          kT = ri(TT, oT, "Up", zT) >= 0,
          WT = ri(TT, oT, "Down", zT) >= 0,
          XT = new Set;
        return oT.forEach(((oT, IT) => {
          const zT = oT.top + oT.bottom < TT.top + TT.bottom;
          iT[IT] && !(zT ? kT : WT) || XT.add(IT)
        })), ri(TT, oT, IT, XT)
      },
      Ki = (TT, oT, IT, iT) => {
        const zT = new Set;
        return "Left" !== IT && "Right" !== IT || oT.forEach(((oT, IT) => {
          iT[IT] && Bi(TT.top, TT.bottom, oT.top, oT.bottom) <= 0 && zT.add(IT)
        })), zT
      },
      Mi = (TT, oT, IT, iT, zT, kT) => {
        const WT = Fi(TT, oT[zT], IT).forwardGap;
        let XT = zT,
          BT = iT[zT],
          FT = 1 / 0;
        return oT.forEach(((oT, ST) => {
          const DT = iT[ST];
          if (kT.has(ST) || DT < BT || DT === BT && XT === zT) return;
          const LT = Fi(TT, oT, IT);
          if (!Si(LT) || LT.forwardGap < 0 || LT.forwardGap >= WT) return;
          const xT = Di(LT);
          (DT > BT || xT < FT) && (XT = ST, BT = DT, FT = xT)
        })), XT
      },
      ri = (TT, oT, IT, iT) => {
        let zT = -1,
          kT = 1 / 0;
        if (oT.forEach(((oT, WT) => {
            const XT = ((TT, oT, IT) => {
              const iT = Fi(TT, oT, IT);
              if (!Si(iT)) return null;
              const zT = Math.max(0, iT.forwardGap);
              return iT.sidewaysOverlap <= 0 && iT.sidewaysGap > 2 * (zT + 1) ? null : Di(iT)
            })(TT, oT, IT);
            null !== XT && XT < kT && !iT.has(WT) && (kT = XT, zT = WT)
          })), zT < 0) return -1;
        const WT = oT[zT],
          XT = Fi(TT, WT, IT).forwardGap;
        let BT = XT,
          FT = zT;
        return oT.forEach(((oT, kT) => {
          if (kT === zT || iT.has(kT) || !((TT, oT, IT) => {
              const iT = "Left" === IT || "Right" === IT,
                zT = iT ? Bi(TT.top, TT.bottom, oT.top, oT.bottom) : Bi(TT.left, TT.right, oT.left, oT.right),
                kT = iT ? Math.min(TT.bottom - TT.top, oT.bottom - oT.top) : Math.min(TT.right - TT.left, oT.right - oT.left);
              return zT > 0 && zT >= kT / 2
            })(oT, WT, IT)) return;
          const ST = Fi(TT, oT, IT);
          Si(ST) && ST.forwardGap + ST.toLength <= XT + 1 && ST.forwardGap < BT && (BT = ST.forwardGap, FT = kT)
        })), FT
      },
      Ai = (TT, oT) => {
        let IT = -1,
          iT = 1 / 0;
        return oT.forEach(((oT, zT) => {
          const kT = Math.max(oT.left - TT.x, 0, TT.x - oT.right),
            WT = Math.max(oT.top - TT.y, 0, TT.y - oT.bottom),
            XT = Math.hypot(kT, WT);
          XT < iT && (iT = XT, IT = zT)
        })), IT
      },
      gi = (TT, oT) => {
        const IT = Math.min(TT.bottom - TT.top, oT.bottom - oT.top) / 2;
        return Math.abs(TT.top - oT.top) > IT ? TT.top - oT.top : TT.left - oT.left
      },
      wi = TT => {
        let oT = -1;
        for (let IT = 0; IT < TT.length; IT++)(oT < 0 || gi(TT[IT], TT[oT]) < 0) && (oT = IT);
        return oT
      };
    var mi = IT(1632),
      ei = IT(8129),
      Ri = IT(8135);
    const ui = TT => {
        if ("death" !== TT || "inGame" !== BT.c.get("gameState") || "off" === (0, LT.j)().quickChat || null === (0, mi.b)()) return !1;
        const oT = (0, ST.k)("chat");
        return oT !== (0, ST.k)("menuConfirm") && oT !== (0, ST.k)("menuBack")
      },
      vi = new ei.d;
    var Ei = IT(3854),
      fi = IT(8139);
    const Ci = TT => {
        let oT = null;
        for (const IT of TT.querySelectorAll("[data-pad-tabs]")) Fo(IT) && (!oT || Number(IT.dataset.padTabs) < Number(oT.dataset.padTabs)) && (oT = IT);
        return oT
      },
      ji = (TT, oT, IT, iT) => {
        TT.focusWhenFound((() => {
          const zT = TT.pickInitial(oT);
          if (zT && !IT.has(zT) && (null === iT || void 0 === iT || !iT.contains(zT))) return zT;
          const kT = ((TT, oT) => {
              const IT = oT => TT.getEnabledCandidates(oT).filter((TT => !TT.closest("[data-pad-tabs]")));
              for (const iT of Ao(oT)) {
                const TT = IT(iT);
                if (TT.length > 0) return TT
              }
              return IT(oT)
            })(TT, oT).filter((TT => !IT.has(TT))),
            WT = wi(kT.map((TT => TT.getBoundingClientRect())));
          return WT >= 0 ? kT[WT] : null
        }), 3e3)
      },
      Ji = (TT, oT, IT, iT) => {
        var zT;
        const kT = ((TT, oT) => {
          if (0 === TT.length) return null;
          const IT = TT.findIndex((TT => "true" === TT.dataset.padSelected));
          return IT < 0 ? oT > 0 ? TT[0] : TT[TT.length - 1] : TT[(IT + oT + TT.length) % TT.length]
        })([...IT.querySelectorAll("[data-pad-tab]")].filter((TT => Fo(TT) && !So(TT))), iT);
        if (!kT) return;
        const WT = null !== (zT = null === TT || void 0 === TT ? void 0 : TT.getFocused()) && void 0 !== zT ? zT : null,
          XT = !(null === WT || void 0 === WT || !WT.isConnected) && IT.contains(WT),
          BT = TT && !XT ? new Set(TT.getEnabledCandidates(oT)) : null;
        fo(kT), TT && (BT ? ji(TT, oT, BT, IT) : TT.setFocus(kT, {
          byUser: !0
        }))
      },
      Ui = TT => {
        var oT;
        const IT = aT(null !== (oT = ET(TT, "x")) && void 0 !== oT ? oT : TT),
          iT = xo(TT).filter((TT => !So(TT))),
          zT = iT.filter((TT => YT(TT.getBoundingClientRect(), IT)));
        return (zT.length > 0 ? zT : iT).sort(((TT, oT) => gi(TT.getBoundingClientRect(), oT.getBoundingClientRect())))
      },
      ai = (TT, oT, IT) => {
        const iT = [...oT.querySelectorAll("[data-pad-row]")].filter(Fo),
          zT = TT.getFocused(),
          kT = zT ? iT.findIndex((TT => TT.contains(zT))) : -1;
        let WT = 0,
          XT = IT > 0 ? 0 : iT.length - 1;
        if (kT >= 0 && zT) WT = Math.max(0, Ui(iT[kT]).indexOf(zT)), XT = kT + IT;
        else if (zT) {
          const TT = zT.getBoundingClientRect(),
            oT = iT.map((oT => {
              const iT = oT.getBoundingClientRect();
              return IT > 0 ? iT.top >= TT.top : iT.bottom <= TT.bottom
            }));
          XT = IT > 0 ? oT.indexOf(!0) : oT.lastIndexOf(!0)
        }
        for (let BT = XT; BT >= 0 && BT < iT.length; BT += IT) {
          const oT = Ui(iT[BT]);
          if (oT.length > 0) return void TT.setFocus(oT[Math.min(WT, oT.length - 1)], {
            byUser: !0
          })
        }
      },
      Yi = (TT, oT, IT) => {
        var iT, zT;
        const kT = null !== (iT = null === TT || void 0 === TT ? void 0 : TT.getFocused()) && void 0 !== iT ? iT : null,
          WT = null !== kT && void 0 !== kT && kT.closest("[data-pad-row]") ? "x" : "y",
          XT = null !== (zT = kT ? ET(kT, WT, oT) : null) && void 0 !== zT ? zT : CT(oT, WT);
        if (!XT) return;
        const BT = kT ? ho(kT) : null;
        if (UT(XT, WT, IT * ("y" === WT ? XT.clientHeight : XT.clientWidth) * .85), !TT || !BT) return;
        const FT = aT(XT),
          ST = TT.getEnabledCandidates(oT).filter((TT => XT.contains(TT) && YT(TT.getBoundingClientRect(), FT))),
          DT = Ai(BT, ST.map((TT => TT.getBoundingClientRect())));
        DT >= 0 && TT.setFocus(ST[DT], {
          scroll: !1,
          byUser: !0
        })
      };
    let Qi = null;
    const Oi = (TT, oT) => {
        var IT, iT;
        const zT = oT.querySelector("[data-pad-friends-column]"),
          kT = TT.getFocused();
        if (!zT || !kT || !zT.contains(kT)) return !1;
        const WT = TT.getEnabledCandidates(oT).filter((TT => !zT.contains(TT))),
          XT = Ai(ho(kT), WT.map((TT => TT.getBoundingClientRect()))),
          BT = null === (IT = Qi) || void 0 === IT ? void 0 : IT.deref();
        return TT.setFocus(null !== BT && void 0 !== BT && BT.isConnected ? BT : null !== (iT = WT[XT]) && void 0 !== iT ? iT : null, {
          byUser: !0
        }), !0
      },
      Hi = TT => {
        const oT = (0, ST.k)(TT);
        return (0, cT.L)(oT) || ii.r.some((TT => (0, ST.k)(TT) === oT)) ? null : oT
      },
      ni = (TT, oT) => {
        const IT = Hi(oT);
        return null !== IT && TT.wasPressed(IT)
      },
      qi = function(TT, oT, IT) {
        let iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const zT = (TT => {
            var oT, IT;
            return null !== (oT = null === (IT = Ci(TT)) || void 0 === IT ? void 0 : IT.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== oT ? oT : null
          })(oT),
          kT = TT && zT ? new Set(TT.getEnabledCandidates(oT)) : null;
        (0, Ti.e)(), IT === oi.q.SETTINGS && (0, Ii.n)(BT.c.get("openEverythingMenuName")) ? BT.c.set({
          openEverythingMenuName: IT
        }) : (0, Ii.y)(new Event("padMenuShortcut"), IT, iT), TT && kT && zT && ji(TT, oT, kT, zT.closest("[data-pad-tabs]"))
      },
      Zi = TT => null !== TT.closest(".Dropdown-root") || null !== TT.querySelector(".Dropdown-root.is-open"),
      li = TT => null !== (0, fi.c)() && "popup" !== TT.layer.kind && !Ci(TT.root) && !Zi(TT.root),
      si = (0, KT.d)(cT._),
      ti = (0, KT.d)(cT._),
      Gi = (TT, oT, IT) => {
        if (((TT, oT) => {
            const IT = (0, ST.k)("chat");
            return ui(oT) && TT.isHeld(IT) ? "hold" === vi.update(TT.wasPressed(IT), TT.isHeld(IT), performance.now(), MT.c[(0, LT.j)().tapHoldTime].wheelMs) && (DT.c.consumeButton(IT), FT.h.XM(Ri.n), !0) : (vi.release(), !1)
          })(oT, IT.layer.kind)) return !0;
        const iT = IT.root;
        for (const [WT, XT] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (oT.wasPressed((0, ST.k)(WT))) {
            const oT = Zi(iT) ? null : Ci(iT);
            if (oT) Ji(TT, iT, oT, XT);
            else if (li(IT)) {
              var zT;
              const oT = TT ? new Set(TT.getEnabledCandidates(iT)) : null;
              null !== (zT = (0, fi.c)()) && void 0 !== zT && zT(XT) && TT && oT && ji(TT, iT, oT, null)
            } else TT && ai(TT, iT, XT);
            return !0
          } for (const [WT, XT, BT] of [
            ["menuPageUp", -1, si],
            ["menuPageDown", 1, ti]
          ]) {
          const IT = (0, ST.k)(WT);
          if (oT.wasPressed(IT) && BT.reset(), BT.update(oT.isHeld(IT), performance.now())) return Yi(TT, iT, XT), !0
        }
        const kT = "popup" === IT.layer.kind;
        return ni(oT, "pause") ? (kT || (0, Ii.u)() && "menu" !== IT.layer.kind || qi(TT, iT, (0, Ii.u)() ? oi.q.SETTINGS : (0, Ei.d)()), !0) : !!ni(oT, "leaderboard") && ("home" === IT.layer.kind ? (TT => {
          const oT = [...TT.querySelectorAll("[data-pad-notifications]")].find(Fo);
          oT && fo(oT)
        })(iT) : kT || qi(TT, iT, oi.q.LOBBY_LEADERBOARD, "inGame" === BT.c.get("gameState")), !0)
      },
      bi = (TT, oT, IT) => {
        if (Gi(TT, oT, IT)) return !0;
        const iT = "home" === IT.layer.kind;
        if (oT.wasPressed((0, ST.k)("menuSecondary"))) {
          const oT = TT.getFocused(),
            zT = oT ? Wi(oT) : null;
          if (zT) return fo(zT), !0;
          if (iT) {
            const oT = IT.root.querySelector("[data-pad-search] input");
            return oT && ro(oT, IT.root) ? (TT.setFocus(oT, {
              byUser: !0
            }), fo(oT)) : BT.c.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!iT || !ni(oT, "inventory")) && (((TT, oT) => {
          var IT, iT;
          const zT = oT.querySelector("[data-pad-friends-column]");
          if (!zT || !Fo(zT)) return void(0, Ii.y)(new Event("padMenuShortcut"), oi.q.SOCIAL);
          if (Oi(TT, oT)) return;
          const kT = null !== (IT = null === (iT = zT.querySelector("[data-pad-friends-start]")) || void 0 === iT ? void 0 : iT.getBoundingClientRect().top) && void 0 !== IT ? IT : -1 / 0,
            WT = TT.getEnabledCandidates(zT),
            XT = WT.filter((TT => TT.getBoundingClientRect().top >= kT)),
            BT = XT.length > 0 ? XT : WT,
            FT = wi(BT.map((TT => TT.getBoundingClientRect())));
          TT.setFocus(FT >= 0 ? BT[FT] : null, {
            byUser: !0
          })
        })(TT, IT.root), !0)
      },
      yi = TT => {
        var oT, IT, iT;
        const zT = Ho(TT);
        if (null !== zT) return zT;
        const kT = (null !== (oT = null !== (IT = null !== (iT = TT.getAttribute("aria-label")) && void 0 !== iT ? iT : TT.getAttribute("title")) && void 0 !== IT ? IT : TT.textContent) && void 0 !== oT ? oT : "").replace(/\s+/g, " ").trim();
        return kT ? `${TT.tagName}:${kT.slice(0,100)}` : null
      };
    class Ni {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(TT) {
        const oT = this.history.indexOf(TT);
        if (oT >= 0) {
          for (const TT of this.history.splice(oT + 1)) this.remembered.delete(TT);
          return !0
        }
        return this.remembered.delete(TT), this.history.push(TT), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(TT) {
        this.remembered.delete(TT);
        const oT = this.history.indexOf(TT);
        oT >= 0 && this.history.splice(oT, 1)
      }
      remember(TT, oT, IT, iT) {
        const zT = yi(oT),
          kT = Ho(oT),
          WT = null !== kT && ((TT, oT) => {
            let IT = 0;
            for (const iT of TT.querySelectorAll("[data-pad-key], [href]"))
              if ((iT.getAttribute("data-pad-key") === oT || iT.getAttribute("href") === oT) && (IT++, IT > 1)) return !0;
            return !1
          })(IT, kT) ? Math.max(0, this.twins(iT(), kT).indexOf(oT)) : 0;
        this.remembered.set(TT, {
          element: new WeakRef(oT),
          identity: zT,
          ordinal: WT
        })
      }
      has(TT) {
        return this.remembered.has(TT)
      }
      recall(TT, oT) {
        var IT, iT;
        const zT = this.remembered.get(TT);
        if (!zT) return null;
        const kT = zT.element.deref();
        if (kT && oT.includes(kT)) return kT;
        if (null === zT.identity) return null;
        const WT = this.twins(oT, zT.identity);
        return null !== (IT = null !== (iT = WT[zT.ordinal]) && void 0 !== iT ? iT : WT[0]) && void 0 !== IT ? IT : null
      }
      twins(TT, oT) {
        return TT.filter((TT => yi(TT) === oT))
      }
    }
    var Pi = IT(1249);
    const di = TT => {
        const oT = [];
        let IT = TT;
        for (; IT && IT !== document.body;) {
          const TT = getComputedStyle(IT).zIndex;
          "auto" !== TT && oT.push(Number(TT) || 0), IT = IT.parentElement
        }
        return oT.reverse()
      },
      Vi = (TT, oT) => {
        const IT = ((TT, oT) => {
          const IT = Math.max(TT.length, oT.length);
          for (let kT = 0; kT < IT; kT++) {
            var iT, zT;
            const IT = (null !== (iT = TT[kT]) && void 0 !== iT ? iT : 0) - (null !== (zT = oT[kT]) && void 0 !== zT ? zT : 0);
            if (0 !== IT) return IT
          }
          return 0
        })(di(TT), di(oT));
        if (0 !== IT) return IT > 0;
        if (TT.contains(oT)) return !1;
        if (oT.contains(TT)) return !0;
        const iT = TT.compareDocumentPosition(oT);
        return !!(iT & Node.DOCUMENT_POSITION_PRECEDING) || !(iT & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      Tz = (TT, oT) => {
        var IT;
        return null !== (IT = Vi(TT.root, oT.root)) && void 0 !== IT ? IT : TT.order > oT.order
      },
      oz = (TT, oT) => oT.some((oT => !oT.contains(TT) && !TT.contains(oT) && !0 === Vi(oT, TT)));
    let Iz = null,
      iz = null,
      zz = -1;
    const kz = () => {
        var TT;
        const oT = null === (TT = document.timeline) || void 0 === TT ? void 0 : TT.currentTime,
          IT = "number" === typeof oT ? oT : null;
        if (null !== IT && IT === iz && zz === (0, Pi.d)()) return Iz;
        let iT = null;
        const zT = [],
          kT = [...document.querySelectorAll("[data-pad-covers]")].filter(Fo);
        for (const WT of (0, Pi.g)()) {
          const TT = WT.getRoot(),
            oT = !!TT && Fo(TT) && !oz(TT, kT);
          if (WT.shown && !oT && zT.push(WT), WT.shown = oT, !TT || !oT) continue;
          const IT = {
            layer: WT,
            root: TT,
            order: WT.order
          };
          iT && !Tz(IT, iT) || (iT = IT)
        }
        Iz = iT, iz = IT, zz = (0, Pi.d)();
        for (const WT of zT)(0, Pi.j)(WT);
        return Iz
      },
      Wz = () => {
        const TT = kz();
        return !(null === TT || void 0 === TT || !TT.layer.close) && (TT.layer.close(), iz = null, !0)
      },
      Xz = () => {
        var TT, oT;
        return null !== (TT = null === (oT = kz()) || void 0 === oT ? void 0 : oT.root) && void 0 !== TT ? TT : null
      },
      Bz = TT => TT ? {
        ...TT,
        root: Xz()
      } : null;
    let Fz = null,
      Sz = null,
      Dz = (0, LT.j)().menuNavigation,
      Lz = null;
    const xz = new wT;
    let cz = null;
    FT.h.subscribe(LT.g, (() => {
      const TT = (0, LT.j)().menuNavigation;
      TT !== Dz && (Dz = TT, Fz = null, Sz = null)
    }));
    const Kz = () => {
        var TT;
        return null !== (TT = Fz) && void 0 !== TT ? TT : (0, LT.j)().menuNavigation
      },
      Mz = TT => {
        if (hz()) {
          if (Lz = Bz(TT), "hybrid" === Kz()) return xz.lock(), void(Sz = Sz ? null : Xz());
          Fz = "focus" === Kz() ? "cursor" : "focus"
        }
      },
      rz = () => {
        const TT = Lz;
        return Lz = null, TT
      };
    let Az = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const gz = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const IT = Az.root === TT,
          iT = IT ? Az.firstSeenMs : oT,
          zT = Az.has || oT - iT > 1e3;
        return (!IT || !zT || oT - Az.atMs > 250) && (Az = {
          root: TT,
          firstSeenMs: iT,
          atMs: oT,
          has: Ko(TT)
        }), Az.has
      },
      hz = () => {
        const TT = Xz();
        return null !== TT && gz(TT)
      },
      wz = () => {
        const TT = kz();
        return Sz && (null === TT || void 0 === TT ? void 0 : TT.root) !== Sz && (Sz = null), (TT => {
          let {
            mode: oT,
            hasLayer: IT,
            hasCandidates: iT,
            hybridCursorEngaged: zT
          } = TT;
          return IT ? "cursor" !== oT && iT() ? "hybrid" === oT && zT ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Kz(),
          hasLayer: null !== TT,
          hasCandidates: () => null !== TT && gz(TT.root),
          hybridCursorEngaged: null !== Sz
        })
      },
      mz = () => "hybrid" === Kz() && hz(),
      ez = "pad-focused";
    var Rz = IT(4064),
      uz = IT(4514);
    const vz = "[data-pad-destructive]",
      Ez = `${vz}, [data-pad-back]`,
      fz = TT => ({
        rect: TT.getBoundingClientRect(),
        destructive: TT.matches(vz),
        closes: null !== TT.closest("[data-pad-close-button]"),
        unavailable: TT.matches("[data-pad-unavailable]")
      }),
      Cz = TT => {
        let {
          destructive: oT,
          closes: IT,
          unavailable: iT
        } = TT;
        return oT ? IT ? 2 : 3 : iT ? 1 : 0
      },
      jz = TT => {
        let oT = -1;
        for (let IT = 0; IT < TT.length; IT++) {
          if (oT < 0) {
            oT = IT;
            continue
          }
          const iT = TT[IT],
            zT = TT[oT];
          Cz(iT) === Cz(zT) ? gi(iT.rect, zT.rect) < 0 && (oT = IT) : Cz(iT) < Cz(zT) && (oT = IT)
        }
        return oT
      },
      Jz = "[data-pad-tabs]",
      Uz = "[data-pad-tab]",
      az = (TT, oT) => {
        const IT = TT.querySelector(`${Uz}[data-pad-selected='true']`);
        return IT && oT.includes(IT) ? IT : null
      },
      Yz = (TT, oT) => {
        let IT = oT;
        for (let iT = oT.parentElement; iT && !iT.contains(TT); iT = iT.parentElement) IT = iT;
        return IT
      };
    class Qz {
      constructor() {
        this.contentReturn = null
      }
      redirect(TT, oT, IT, iT) {
        var zT, kT;
        const WT = TT.closest(Jz),
          XT = oT.closest(Jz);
        var BT;
        if (XT && XT !== WT) return WT || (this.contentReturn = new WeakRef(TT)), null !== (BT = az(XT, IT)) && void 0 !== BT ? BT : oT;
        if (!WT || XT) return oT;
        const FT = Yz(TT, oT),
          ST = null === (zT = this.contentReturn) || void 0 === zT ? void 0 : zT.deref();
        return ST && FT.contains(ST) && IT.includes(ST) ? ST : null !== (kT = this.pickRegionStart(FT, ET(oT, "y", iT), IT)) && void 0 !== kT ? kT : oT
      }
      findTabContent(TT, oT, IT) {
        const iT = TT.closest(Jz);
        if (!iT || !TT.matches(Uz) || iT.contains(oT)) return null;
        const zT = oT.closest(Jz);
        if (zT && Number(zT.dataset.padTabs) <= Number(iT.dataset.padTabs)) return null;
        const kT = Yz(TT, oT);
        return IT.some((TT => kT.contains(TT) && !TT.closest(Ez))) || !oT.closest(Ez) ? kT : null
      }
      pickContentStart(TT, oT, IT) {
        return this.contentReturn = null, this.pickRegionStart(TT, ET(TT, "y", IT), oT)
      }
      pickReplacedContentStart(TT, oT, IT, iT) {
        if (!oT.contains(TT)) return null;
        const zT = Yz(oT, TT),
          kT = IT.filter((TT => oT.contains(TT) && !zT.contains(TT) && !TT.closest(Ez)));
        return 0 === kT.length ? null : (this.contentReturn = null, this.pickRegionStart(oT, ET(kT[0], "y", iT), kT))
      }
      backToStrip(TT, oT, IT) {
        if (TT.closest(Jz)) return null;
        const iT = Ci(IT);
        for (const zT of IT.querySelectorAll(Jz)) {
          if (Number(zT.dataset.padTabs) <= 1 || zT === iT) continue;
          const kT = az(zT, oT),
            WT = kT ? Yz(TT, zT).parentElement : null;
          if (kT && WT && WT !== IT && IT.contains(WT)) return this.contentReturn = new WeakRef(TT), kT
        }
        return null
      }
      pickRegionStart(TT, oT, IT) {
        const iT = aT(oT),
          zT = TT => {
            const oT = IT.filter((oT => TT.contains(oT) && !oT.closest(Jz) && YT(oT.getBoundingClientRect(), iT))),
              zT = jz(oT.map(fz));
            return zT >= 0 ? oT[zT] : null
          };
        for (const kT of Ao(TT)) {
          const TT = zT(kT);
          if (TT) return TT
        }
        for (const kT of TT.querySelectorAll(Jz)) {
          const TT = az(kT, IT);
          if (TT) return TT
        }
        return zT(TT)
      }
    }
    const Oz = "[data-pad-default-focus], .Dropdown-option.is-selected",
      Hz = ".Dropdown-root.is-open > .Dropdown-menu",
      nz = "[data-pad-no-step-in]",
      qz = "[data-pad-tabs]",
      Zz = "[data-pad-press-area]",
      lz = TT => {
        let oT = TT;
        for (let IT = 0; oT && IT <= 4; IT++, oT = oT.parentElement) {
          const IT = oT.querySelector(".CircleInfo");
          if (IT) return oT === TT || oT.querySelectorAll(Xo).length <= 1 ? IT : null;
          if (oT !== TT && oT.querySelectorAll(Xo).length > 1) return null
        }
        return null
      },
      sz = (TT, oT, IT) => {
        vo(TT, oT, IT);
        const iT = null !== TT && void 0 !== TT && TT.isConnected ? lz(TT) : null,
          zT = lz(oT);
        iT !== zT && vo(iT, zT, zT ? ho(zT) : IT, {
          leaveBelow: TT,
          enterBelow: oT
        })
      },
      tz = TT => TT.getBoundingClientRect(),
      Gz = (TT, oT, IT) => {
        const iT = new Set(IT);
        for (let zT = TT; zT; zT = zT === oT ? null : zT.parentElement)
          if (iT.has(zT)) return zT;
        return null
      },
      pz = (TT, oT) => !TT.root || TT.root === oT || oT.matches(Hz) && TT.root.contains(oT);
    const bz = new class {
      constructor() {
        this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new Ni, this.tabStripNav = new Qz, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, KT.d)(cT.B), this.dpadRepeats = new Map(cT.I.map((TT => [TT, (0, KT.d)(cT.J)]))), this.stickRepeat = new cT.e((0, KT.d)(cT.cb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
          x: 0,
          y: 0
        }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
      }
      install() {
        const TT = DT.c.register({
            name: "focus",
            isActive: () => (0, xT.l)() && "focus" === wz(),
            onFrame: TT => {
              this.onFrame(TT)
            },
            onDeactivate: () => {
              this.deactivate()
            },
            wakePressActs: TT => (0, DT.g)(TT) || TT === (0, ST.k)("menuConfirm") && Yo((0, xT.d)())
          }),
          oT = (0, Pi.k)((TT => {
            const oT = (0, Pi.p)(TT);
            null === TT.memoryKey && this.memory.forget(oT), oT === this.layerKey && (this.layerKey = null)
          }));
        let IT = -1 / 0;
        const iT = WT.g.onFrame((TT => {
            (0, xT.l)() || TT.timestampMs - IT < 100 || (IT = TT.timestampMs, kz())
          })),
          zT = TT => {
            TT.isTrusted && TT.target instanceof Element && WT.g.getActivePad() && this.noteChosenStop(TT.target)
          };
        return document.addEventListener("click", zT, !0), () => {
          TT(), oT(), iT(), document.removeEventListener("click", zT, !0), this.deactivate()
        }
      }
      noteChosenStop(TT) {
        var oT, IT;
        const iT = kz();
        if (!iT || !iT.root.contains(TT)) return;
        const zT = null !== (oT = null === (IT = TT.closest(".Dropdown-root")) || void 0 === IT ? void 0 : IT.querySelector(".Dropdown-control")) && void 0 !== oT ? oT : TT,
          kT = Gz(zT, iT.root, this.getEnabledCandidates(iT.root));
        if (!kT) return;
        const WT = (0, Pi.p)(iT.layer);
        WT === this.layerKey && iT.root === this.layerRoot || this.beginLayer(iT, WT), this.wasActive ? this.setFocus(kT, {
          scroll: !1,
          byUser: !0
        }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = kT, this.lastFocusedCentre = ho(kT), this.rememberFocus(kT), this.notify())
      }
      getFocused() {
        return this.focused
      }
      isActive() {
        return this.wasActive
      }
      onChange(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
      deactivate() {
        var TT;
        if (this.wasActive) {
          this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
          for (const TT of this.dpadRepeats.values()) TT.reset();
          this.stickRepeat.reset(), null !== (TT = this.focused) && void 0 !== TT && TT.isConnected && sz(this.focused, null, ho(this.focused)), this.notify()
        }
      }
      setFocus(TT) {
        var oT;
        let {
          scroll: IT = !0,
          byUser: iT = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (iT && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), TT === this.focused) return;
        const zT = null !== (oT = this.focused) && void 0 !== oT && oT.isConnected ? this.focused : null;
        if (this.focused = TT, TT) {
          IT && (TT.classList.add(ez), TT.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "instant"
          })), iT && ((TT, oT) => {
            const IT = oT.closest("[data-pad-friends-column]");
            IT && TT && !IT.contains(TT) && (Qi = new WeakRef(TT))
          })(zT, TT);
          const oT = ho(TT);
          this.lastFocusedCentre = oT, this.movedInLayer && this.rememberFocus(TT), sz(zT, TT, oT), "false" === TT.getAttribute("aria-pressed") && TT.closest("[data-pad-select-on-focus]") && fo(TT)
        } else zT && sz(zT, null, ho(zT));
        this.notify()
      }
      rememberFocus(TT) {
        const oT = this.layerRoot;
        this.layerKey && oT && this.memory.remember(this.layerKey, TT, oT, (() => this.getEnabledCandidates(oT)))
      }
      noteCursorActivation(TT) {
        const oT = kz();
        if (!oT || !oT.root.contains(TT)) return;
        const IT = this.getEnabledCandidates(oT.root),
          iT = new Set(IT);
        let zT = TT;
        for (; zT && !iT.has(zT);) zT = zT === oT.root ? null : zT.parentElement;
        if (!(zT instanceof HTMLElement)) return;
        const kT = (0, Pi.p)(oT.layer);
        this.memory.enter(kT), this.memory.remember(kT, zT, oT.root, (() => IT))
      }
      notePageEnteredByCursor(TT) {
        return this.memory.enter(TT)
      }
      recallStop(TT, oT) {
        return this.findRemembered(TT, oT)
      }
      focusWhenFound(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.pendingFocus = {
          find: TT,
          untilMs: performance.now() + oT,
          holdWhile: IT
        }
      }
      getEnabledCandidates(TT) {
        return xo(TT).filter((TT => !So(TT)))
      }
      onFrame(TT) {
        var oT;
        const IT = kz();
        if (!IT) return;
        const iT = null !== (oT = this.findOpenDropdown(IT)) && void 0 !== oT ? oT : IT,
          zT = performance.now(),
          kT = (0, Pi.p)(iT.layer);
        if (kT !== this.layerKey || iT.root !== this.layerRoot) {
          const oT = this.focused;
          if (null !== this.layerKey && iT.root === this.layerRoot && oT && ro(oT, iT.root)) this.continueLayer(kT, oT), this.wasActive || this.resume(iT.root, zT);
          else {
            const oT = !this.wasActive && !TT.wokeDevice,
              WT = "death" === this.layerKind || oT,
              XT = this.enterLayer(iT, kT);
            "popup" !== iT.layer.kind || iT !== IT || XT ? "menu" === iT.layer.kind && WT && "inGame" === BT.c.get("gameState") && !(0, Ti.i)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = zT + Rz.d) : (this.pressGuardExtends = oT, this.pressGuardUntilMs = zT + (oT ? Rz.d : WT ? 500 : 250))
          }
        } else this.wasActive || this.resume(iT.root, zT);
        if (this.layerKind = iT.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), TT.wokeDevice && this.focusPointedStop(iT.root), this.validateFocus(iT, zT), zT < this.pressGuardUntilMs && this.pressGuardExtends && (TT.wasPressed((0, ST.k)("menuConfirm")) || TT.wasPressed((0, ST.k)("menuBack"))) && (this.pressGuardUntilMs = zT + Rz.d), zT >= this.pressGuardUntilMs && this.handleButtons(TT, iT)) return;
        const WT = "hybrid" === Kz();
        if (WT && (TT => {
            const oT = Xz();
            return oT !== cz && (cz = oT, xz.lock()), xz.update(TT, (0, LT.j)().moveDeadzone)
          })(TT.leftStick)) return XT = this.getHandoff(), Lz = Bz(XT), Sz = Xz(), void DT.c.handOffHeldInput();
        var XT;
        this.handleDirections(TT, iT, zT, !WT), this.handleScroll(TT, iT)
      }
      findOpenDropdown(TT) {
        const oT = TT.root.querySelector(Hz);
        if (!oT || !Fo(oT)) return null;
        let IT = this.dropdownLayers.get(oT);
        return IT || (this.dropdownLayerCounter++, IT = {
          id: `dropdown-${this.dropdownLayerCounter}`,
          kind: TT.layer.kind,
          getRoot: () => oT,
          close: () => {
            Jo(oT)
          },
          memoryKey: null
        }, this.dropdownLayers.set(oT, IT)), {
          layer: IT,
          root: oT,
          order: TT.order
        }
      }
      focusPointedStop(TT) {
        const oT = (0, xT.d)(),
          IT = oT ? document.elementFromPoint(oT.x, oT.y) : null;
        if (!IT || !TT.contains(IT)) return;
        const iT = Gz(IT, TT, this.getEnabledCandidates(TT));
        iT && this.setFocus(iT, {
          scroll: !1,
          byUser: !0
        })
      }
      enterLayer(TT, oT) {
        const IT = this.beginLayer(TT, oT),
          iT = rz();
        return iT && pz(iT, TT.root) ? (this.takeOver(TT.root, iT, this.enteredLayerAtMs), IT) : (this.restoreLayerFocus(TT.root, IT), IT)
      }
      beginLayer(TT, oT) {
        return this.layerKey = oT, this.layerRoot = TT.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(oT)
      }
      restoreLayerFocus(TT, oT) {
        const IT = oT && this.layerKey ? this.findRemembered(TT, this.layerKey) : null;
        this.restoredFromMemory = null !== IT, this.setFocus(null !== IT && void 0 !== IT ? IT : this.pickInitial(TT, {
          waitForContent: !0
        }))
      }
      continueLayer(TT, oT) {
        this.layerKey = TT;
        const IT = this.memory.enter(TT);
        this.restoreOnFocusLoss = IT, this.movedInLayer && !IT && this.rememberFocus(oT)
      }
      resume(TT, oT) {
        var IT;
        const iT = rz();
        iT && pz(iT, TT) ? this.takeOver(TT, iT, oT) : null !== (IT = this.focused) && void 0 !== IT && IT.isConnected && sz(null, this.focused, ho(this.focused))
      }
      pickPreferred(TT) {
        var oT;
        return null !== (oT = this.layerKey ? this.findRemembered(TT, this.layerKey) : null) && void 0 !== oT ? oT : this.pickInitial(TT, {
          waitForContent: !0
        })
      }
      findRemembered(TT, oT) {
        return this.memory.has(oT) ? this.memory.recall(oT, this.getEnabledCandidates(TT)) : null
      }
      getHandoff() {
        var TT, oT, IT;
        const iT = null !== (TT = this.focused) && void 0 !== TT && TT.isConnected ? this.focused : null,
          zT = null !== (oT = this.layerRoot) && void 0 !== oT && oT.isConnected ? this.layerRoot : null;
        return {
          point: iT ? ho(iT) : null !== (IT = this.lastFocusedCentre) && void 0 !== IT ? IT : this.getLayerStartPoint(zT),
          element: iT,
          direction: null
        }
      }
      getLayerStartPoint(TT) {
        if (!TT) return {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
        };
        const oT = this.pickInitial(TT, {
          includeDisabled: !0
        });
        return ho(null !== oT && void 0 !== oT ? oT : TT)
      }
      takeOver(TT, oT, IT) {
        const {
          element: iT,
          direction: zT,
          point: kT
        } = oT, WT = iT instanceof HTMLElement && ro(iT, TT) ? iT : null;
        if (!zT) {
          const oT = this.focused;
          return WT ? this.setFocus(WT, {
            scroll: !1,
            byUser: !0
          }) : this.focusNearest(TT, kT), void(this.focused && this.focused === oT && this.focused.isConnected && sz(null, this.focused, ho(this.focused)))
        }
        if (this.dpadRepeats.get(zT).update(!0, IT), WT) return this.setFocus(WT, {
          scroll: !1,
          byUser: !0
        }), void this.move(TT, zT, IT, !0);
        const XT = this.getEnabledCandidates(TT),
          BT = XT.map(tz),
          FT = xi(new DOMRect(kT.x, kT.y, 0, 0), BT, zT),
          ST = FT >= 0 ? FT : Ai(kT, BT);
        this.setFocus(ST >= 0 ? XT[ST] : this.pickInitial(TT), {
          byUser: !0
        })
      }
      focusNearest(TT, oT) {
        const IT = this.getEnabledCandidates(TT),
          iT = Ai(oT, IT.map(tz));
        this.setFocus(iT >= 0 ? IT[iT] : this.pickInitial(TT), {
          byUser: !0
        })
      }
      pickDefault(TT) {
        let {
          includeDisabled: oT = !1,
          exclude: IT = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const iT = [...TT.querySelectorAll(Oz)].filter((iT => (null === IT || void 0 === IT || !IT.has(iT)) && (oT ? Mo(iT, TT) : ro(iT, TT)))),
          zT = jz(iT.map(fz));
        return zT >= 0 ? iT[zT] : null
      }
      pickNewAreaStart(TT, oT) {
        const IT = [...TT.querySelectorAll(Zz)].filter(Fo);
        for (const iT of [...Ao(TT), ...IT]) {
          if (oT.has(iT)) continue;
          const TT = this.getEnabledCandidates(iT),
            IT = jz(TT.map(fz));
          if (IT >= 0) return TT[IT]
        }
        return null
      }
      pickInitial(TT) {
        let {
          includeDisabled: oT = !1,
          waitForContent: IT = !1,
          enteredAtMs: iT = this.enteredLayerAtMs
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zT = this.pickDefault(TT, {
          includeDisabled: oT
        });
        if (zT) return zT;
        const kT = TT => oT ? xo(TT) : this.getEnabledCandidates(TT);
        let WT = [];
        for (const LT of Ao(TT))
          if (WT = kT(LT), WT.length > 0) break;
        if (0 === WT.length) {
          if (IT && performance.now() - iT < 1e4 && (TT => {
              for (const oT of TT.querySelectorAll("[data-pad-initial-area]"))
                if (!Bo(oT, !1)) return !0;
              return !1
            })(TT)) return null;
          WT = kT(TT)
        }
        const XT = WT.map(tz),
          BT = aT(null),
          FT = WT.filter(((TT, oT) => YT(XT[oT], BT))),
          ST = FT.length > 0 ? FT : WT,
          DT = jz(ST.map(fz));
        return DT >= 0 ? ST[DT] : null
      }
      validateFocus(TT, oT) {
        if (this.pendingFocus) {
          var IT, iT;
          const zT = this.pendingFocus.find();
          if (zT && ro(zT, TT.root)) return this.pendingFocus = null, void this.setFocus(zT, {
            byUser: !0
          });
          oT > this.pendingFocus.untilMs && (null === (IT = (iT = this.pendingFocus).holdWhile) || void 0 === IT || !IT.call(iT)) && (this.pendingFocus = null)
        }
        const zT = this.focused,
          kT = !!zT && ro(zT, TT.root);
        if (!(!kT && zT && zT === this.lastActivated && oT - this.lastActivatedAtMs < 5e3 && TT.root.contains(zT) && Fo(zT) && So(zT))) {
          if (!kT && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = oT, void this.restoreLayerFocus(TT.root, !0);
          if ((!kT || !this.movedInLayer && !this.scrolledInLayer) && !(oT - this.lastRefocusCheckMs < (kT ? 200 : 50)))
            if (this.lastRefocusCheckMs = oT, kT) {
              const IT = oT - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(TT.root) : null,
                iT = null !== IT && void 0 !== IT ? IT : this.restoredFromMemory ? null : this.pickDefault(TT.root);
              iT && iT !== zT && this.setFocus(iT)
            } else {
              if (this.lastFocusedCentre && this.movedInLayer) {
                const oT = this.pendingFocus;
                return this.focusNearest(TT.root, this.lastFocusedCentre), void(this.pendingFocus = oT)
              }
              this.setFocus(this.pickPreferred(TT.root))
            }
        }
      }
      handleButtons(TT, oT) {
        if (TT.wasPressed((0, ST.k)("menuToggleCursor"))) return Mz(this.getHandoff()), !0;
        if (TT.wasPressed((0, ST.k)("menuBack"))) {
          const TT = Jo(oT.root);
          return TT ? this.setFocus(TT, {
            byUser: !0
          }) : Oi(this, oT.root) || (Oo(oT.root) ? this.returnToOpener(oT.root) : this.backToStrip(oT.root) || Wz()), !0
        }
        const IT = (0, ST.k)("menuConfirm");
        var iT, zT;
        TT.wasPressed(IT) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (iT = null === (zT = this.focused) || void 0 === zT ? void 0 : zT.getAttribute("data-pad-repeat")) && void 0 !== iT ? iT : null, this.confirmRepeated = TT.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
        if (TT.wasReleased(IT)) {
          const TT = this.confirmPressedOn;
          if (this.confirmPressedOn = null, TT && !this.confirmRepeated && TT === this.focused && TT.isConnected && !So(TT)) {
            const IT = TT.matches("[data-pad-tab]") ? TT.closest(qz) : null;
            IT ? this.enterTab(TT, IT, oT.root, performance.now()) : this.activate(TT)
          }
          return !0
        }
        return this.repeatConfirm(TT, IT), bi(this, TT, oT)
      }
      repeatConfirm(TT, oT) {
        const IT = this.confirmPressedOn;
        IT && null !== this.confirmRepeatKey && TT.isHeld(oT) && (IT === this.focused && IT.isConnected && !So(IT) && IT.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? IT.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(IT)) : this.confirmRepeatKey = null)
      }
      backToStrip(TT) {
        const oT = this.focused;
        if (!(0, LT.j)().menuBackToCategories) return !1;
        const IT = null !== oT && void 0 !== oT && oT.isConnected ? this.tabStripNav.backToStrip(oT, this.getEnabledCandidates(TT), TT) : null;
        return IT && this.setFocus(IT, {
          byUser: !0
        }), null !== IT
      }
      returnToOpener(TT) {
        const oT = this.lastActivatedKey;
        oT && (this.lastActivatedKey = null, this.focusWhenFound((() => {
          var IT;
          return null !== (IT = this.getEnabledCandidates(TT).find((TT => Ho(TT) === oT))) && void 0 !== IT ? IT : null
        })))
      }
      activate(TT) {
        var oT;
        if ((0, uz.c)(TT) || ao(TT)) return;
        this.lastActivatedKey = null !== (oT = Ho(TT)) && void 0 !== oT ? oT : this.lastActivatedKey, this.lastActivated = TT, this.lastActivatedAtMs = performance.now(), this.rememberFocus(TT);
        const IT = this.layerRoot;
        if (IT) {
          const oT = new Set(IT.querySelectorAll(Oz)),
            iT = new Set(IT.querySelectorAll(`[data-pad-initial-area], ${Zz}`)),
            zT = this.lastActivatedAtMs;
          this.focusWhenFound((() => {
            var zT;
            return ro(TT, IT) ? null : null !== (zT = this.pickDefault(IT, {
              exclude: oT
            })) && void 0 !== zT ? zT : this.pickNewAreaStart(IT, iT)
          }), 5e3, (() => TT.isConnected && So(TT) && performance.now() - zT < 6e4))
        }
        fo(TT), Uo(TT)
      }
      handleDirections(TT, oT, IT, iT) {
        const zT = ui(oT.layer.kind) ? (0, ST.k)("chat") : null;
        for (const XT of cT.I) {
          this.dpadRepeats.get(XT).update(TT.isHeld(XT), IT) && (XT !== zT || TT.wasPressed(XT)) && this.move(oT.root, XT, IT, !0)
        }
        const kT = iT ? (0, cT.n)(TT.leftStick, (0, LT.j)().moveDeadzone) : {
            x: 0,
            y: 0
          },
          WT = this.stickRepeat.update((0, cT.db)(kT), IT);
        if (WT && this.move(oT.root, WT, IT, !0), this.retryMove && IT >= this.retryMove.atMs) {
          const {
            direction: TT
          } = this.retryMove;
          this.retryMove = null, this.move(oT.root, TT, IT, !1)
        }
      }
      move(TT, oT, IT, iT) {
        var zT;
        let kT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.pendingFocus && this.pendingFocus === (null === (zT = this.tabOpenWait) || void 0 === zT ? void 0 : zT.wait) && oT === this.tabOpenWait.direction) return;
        this.pendingFocus = null;
        const WT = this.focused;
        if (!WT || !WT.isConnected) {
          const oT = this.pickInitial(TT);
          return void(oT && this.setFocus(oT, {
            byUser: !0
          }))
        }
        const XT = "Left" === oT || "Right" === oT,
          BT = XT ? (0, uz.c)(WT) : null;
        if (BT) return void BT.adjust("Left" === oT ? -1 : 1);
        const FT = TT => null !== TT.closest("[data-pad-friends-column]"),
          ST = FT(WT),
          DT = tz(WT),
          LT = XT || WT.closest(qz) ? null : (TT => {
            const oT = new Map;
            return IT => {
              const iT = IT.closest(qz);
              if (!iT) return !1;
              let zT = oT.get(iT);
              if (void 0 === zT) {
                const IT = tz(iT);
                zT = Li(TT, IT) && (IT.right <= TT.left || IT.left >= TT.right), oT.set(iT, zT)
              }
              return zT
            }
          })(DT),
          xT = null !== WT.closest(nz),
          cT = this.getEnabledCandidates(TT).filter((TT => TT !== WT && (XT || FT(TT) === ST) && !(null !== LT && void 0 !== LT && LT(TT)) && (xT || !TT.closest(nz)))),
          KT = cT.map(tz),
          MT = ET(WT, "y", TT),
          rT = aT(MT);
        if (!kT && !YT(DT, rT)) {
          const TT = cT.filter(((TT, oT) => YT(KT[oT], rT)));
          if (TT.length > 0) {
            const oT = {
              x: rT.left + rT.width / 2,
              y: rT.top + rT.height / 2
            };
            return void this.setFocus(TT[Ai(oT, TT.map(tz))], {
              byUser: !0
            })
          }
        }
        const AT = XT ? ((TT, oT, IT) => {
            const iT = tz(TT),
              zT = TT.closest(qz),
              kT = zT ? tz(zT) : null;
            return oT.map(((oT, WT) => {
              const XT = IT[WT];
              if (XT.bottom > iT.top && XT.top < iT.bottom) return !0;
              const BT = oT.closest(qz);
              if (zT && kT) return BT !== zT && (null !== BT || XT.bottom <= kT.top || XT.top >= kT.bottom);
              if (BT) return !Li(iT, tz(BT));
              let FT = TT;
              for (let IT = TT.parentElement; IT && !IT.contains(oT); IT = IT.parentElement) FT = IT;
              const ST = tz(FT);
              return XT.right > ST.left && XT.left < ST.right
            }))
          })(WT, cT, KT) : void 0,
          gT = XT && !WT.closest(qz) ? (TT => TT.map((TT => !TT.closest(Ez))))(cT) : void 0,
          hT = ((TT, oT) => {
            const IT = [];
            for (let zT = TT; zT; zT = zT.parentElement) IT.push(zT);
            const iT = new Map;
            return IT.forEach(((TT, oT) => {
              iT.set(TT, IT.length - 1 - oT)
            })), oT.map((TT => {
              for (let oT = TT; oT; oT = oT.parentElement) {
                const TT = iT.get(oT);
                if (void 0 !== TT) return TT
              }
              return -1
            }))
          })(WT, cT),
          wT = XT ? "x" : "y",
          mT = ET(WT, wT, TT);
        let eT = xi(DT, KT, oT, hT, AT, gT);
        if (eT >= 0 && mT && !mT.contains(cT[eT])) {
          const TT = cT.flatMap(((TT, oT) => mT.contains(TT) ? [oT] : [])),
            IT = oT => oT && TT.map((TT => oT[TT])),
            iT = xi(DT, TT.map((TT => KT[TT])), oT, TT.map((TT => hT[TT])), IT(AT), IT(gT));
          eT = iT >= 0 ? TT[iT] : eT
        }
        if (eT >= 0) return void this.moveTo(WT, cT[eT], cT, TT, oT, kT);
        if (!iT) return;
        const RT = "Right" === oT || "Down" === oT ? 1 : -1;
        if (mT && JT(mT, wT, RT)) {
          const TT = "y" === wT ? mT.clientHeight : mT.clientWidth;
          UT(mT, wT, RT * TT * .5), this.retryMove = {
            direction: oT,
            atMs: IT + 80
          }
        }
      }
      moveTo(TT, oT, IT, iT, zT, kT) {
        const WT = this.tabStripNav.findTabContent(TT, oT, IT);
        WT && "true" !== TT.dataset.padSelected ? this.openTab(TT, WT, iT, zT) : kT && !WT || this.setFocus(this.tabStripNav.redirect(TT, oT, IT, iT), {
          byUser: !0
        })
      }
      openTab(TT, oT, IT, iT) {
        const zT = oT.parentElement;
        fo(TT), this.focusWhenFound((() => "true" !== TT.dataset.padSelected ? null : oT.isConnected ? this.tabStripNav.pickContentStart(oT, this.getEnabledCandidates(IT), IT) : zT ? this.tabStripNav.pickReplacedContentStart(TT, zT, this.getEnabledCandidates(IT), IT) : null), 3e3), this.tabOpenWait = {
          wait: this.pendingFocus,
          direction: iT
        }
      }
      enterTab(TT, oT, IT, iT) {
        this.move(IT, (TT => {
          const oT = [...TT.querySelectorAll(Uz)].filter((oT => oT.closest(Jz) === TT));
          if (oT.length >= 2) {
            const TT = oT[0].getBoundingClientRect(),
              IT = oT[1].getBoundingClientRect();
            return Math.abs(IT.top - TT.top) > Math.abs(IT.left - TT.left) ? "Right" : "Down"
          }
          const IT = TT.getBoundingClientRect();
          return IT.height > IT.width ? "Right" : "Down"
        })(oT), iT, !1, !0), this.focused !== TT || this.pendingFocus || this.activate(TT)
      }
      handleScroll(TT, oT) {
        const IT = (0, cT.n)(TT.rightStick, .2);
        if (0 === IT.x && 0 === IT.y) return void(this.scrollRemainder = {
          x: 0,
          y: 0
        });
        const iT = TT.dtMs / 1e3;
        for (const kT of ["x", "y"]) {
          var zT;
          const TT = IT[kT];
          if (0 === TT) continue;
          const WT = null !== (zT = ET(this.focused, kT, oT.root)) && void 0 !== zT ? zT : CT(oT.root, kT);
          if (!WT) continue;
          const XT = Math.sign(TT) * TT * TT * 1500 * iT + this.scrollRemainder[kT],
            BT = Math.trunc(XT);
          this.scrollRemainder[kT] = XT - BT, 0 !== BT && (UT(WT, kT, BT), this.scrolledInLayer = !0)
        }
      }
    };
    var yz = IT(7667);
    var Nz = IT(8145);
    const Pz = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      dz = {
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
          ...Pz,
          minIntervalMs: 1e3
        },
        preview: {
          ...Pz,
          minIntervalMs: 0
        }
      };
    const Vz = new class {
        constructor(TT) {
          this.deps = TT, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = TT => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", TT))
          }
        }
        play(TT, oT) {
          const IT = dz[TT];
          if (!this.deps.isVibrationOn() || IT.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const iT = this.lastPlayedMs[TT];
          if (void 0 !== iT && oT - iT < IT.minIntervalMs) return !1;
          const zT = this.deps.getActuator();
          if (!zT) return !1;
          this.lastPlayedMs[TT] = oT;
          const {
            duration: kT,
            strongMagnitude: WT,
            weakMagnitude: XT
          } = IT;
          try {
            zT.playEffect("dual-rumble", {
              duration: kT,
              strongMagnitude: WT,
              weakMagnitude: XT
            }).catch(this.logFailure)
          } catch (BT) {
            this.logFailure(BT)
          }
          return !0
        }
      }({
        getActuator: () => (TT => {
          const oT = null === TT || void 0 === TT ? void 0 : TT.vibrationActuator;
          return "function" === typeof(null === oT || void 0 === oT ? void 0 : oT.playEffect) ? oT : null
        })(WT.g.getActiveGamepad()),
        isVibrationOn: () => (0, LT.j)().vibration,
        isPadInUse: xT.l
      }),
      Tk = TT => {
        Vz.play(TT, performance.now())
      };
    var Ik = IT(7673),
      ik = IT(2556),
      zk = IT(112),
      kk = IT(26),
      Wk = IT(648);
    class Xk {
      constructor(TT) {
        this.deps = TT
      }
      check() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const oT = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!oT) return "skipped";
        const IT = TT ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === IT || this.deps.readReportedVisitId() === IT ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(IT), this.deps.Bc(oT, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const Bk = "controllerUsageReportedVisit";
    var Fk = IT(1325),
      Sk = IT(1665),
      Dk = IT(637),
      Lk = IT(1403),
      xk = IT(1220);
    const ck = TT => ({
        translationKey: `controller:${TT}`
      }),
      Kk = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: ck("padButtonView"),
        Menu: ck("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: ck("padButtonDpadUp"),
        Down: ck("padButtonDpadDown"),
        Left: ck("padButtonDpadLeft"),
        Right: ck("padButtonDpadRight"),
        Home: ck("padButtonHome"),
        LeftStick: ck("padButtonLeftStick"),
        RightStick: ck("padButtonRightStick")
      },
      Mk = {
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
          View: ck("padButtonCreate"),
          Menu: ck("padButtonOptions")
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
      rk = (TT, oT) => {
        var IT;
        const iT = null !== (IT = Mk[TT][oT]) && void 0 !== IT ? IT : Kk[oT];
        return "string" === typeof iT ? iT : (0, zT.p)(xk.d.get().getCurrentLanguageCode(), iT.translationKey)
      },
      Ak = TT => {
        let {
          glyph: oT,
          family: IT,
          className: iT
        } = TT;
        const zT = (0, xT.B)(),
          kT = null !== IT && void 0 !== IT ? IT : zT,
          WT = (0, Ik.g)(kT, oT);
        return (0, nT.jsx)("span", {
          className: HT()("ControllerGlyph", iT),
          role: "img",
          "aria-label": rk(kT, oT),
          style: {
            "--pad-glyph-mask": `url(${WT})`,
            "--pad-glyph-aspect": (0, Ik.d)(kT, oT)
          }
        })
      };
    var gk = IT(1729);
    const hk = TT => {
      let {
        action: oT
      } = TT;
      const {
        t: IT
      } = (0, zT.t)();
      switch (oT.kind) {
        case "reload":
          return (0, nT.jsx)("span", {
            children: IT("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, nT.jsx)(gk.c, {
            text: oT.description ? [{
              icon: oT.icon
            }, ` ${oT.description}`] : [{
              icon: oT.icon
            }]
          });
        case "touchButton":
          return (0, nT.jsx)(gk.c, {
            text: oT.label
          })
      }
    };
    var wk = IT(8149);
    const mk = TT => {
      let {
        hold: oT
      } = TT;
      return (0, nT.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${oT.holdMs}ms`
        },
        children: (0, nT.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, oT.id)
    };
    var ek = IT(8172),
      Rk = IT(8181),
      uk = IT(8190),
      vk = IT(8163);
    const Ek = () => {
        const {
          gameState: TT
        } = (0, BT.k)(["gameState"]), oT = (0, xT.z)(), [iT, zT] = (0, QT.useState)(!1), [kT, WT] = (0, QT.useState)(!1);
        return (0, QT.useEffect)((() => {
          "inGame" === TT && zT(!0)
        }), [TT]), (0, QT.useEffect)((() => {
          if (!iT) return;
          let TT = null,
            oT = !1;
          return (Dk.u ? Promise.all([IT.e(69), IT.e(258), IT.e(237), IT.e(191), IT.e(211), IT.e(84)]).then((() => IT(39318))).then((TT => TT.startWasmPadGameplay)) : Promise.all([IT.e(69), IT.e(223), IT.e(222), IT.e(72), IT.e(71), IT.e(70), IT.e(95), IT.e(214), IT.e(181), IT.e(219), IT.e(74), IT.e(194), IT.e(215), IT.e(83), IT.e(230), IT.e(114), IT.e(231), IT.e(210), IT.e(73), IT.e(113), IT.e(232), IT.e(191), IT.e(93)]).then((() => IT(39454))).then((TT => TT.startPadGameplay))).then((IT => {
            oT || (TT = IT())
          })).catch((TT => {
            console.error("Pad gameplay failed to load", TT), oT || WT(!0)
          })), () => {
            var IT;
            oT = !0, null === (IT = TT) || void 0 === IT || IT()
          }
        }), [iT]), (0, QT.useEffect)((() => {
          kT && oT && (WT(!1), Fk.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((TT => {
            !0 === TT && (0, Sk.reloadBloxd)()
          })))
        }), [kT, oT]), (0, nT.jsxs)(nT.Fragment, {
          children: [(0, nT.jsx)(fk, {}), (0, nT.jsx)(Ck, {}), (0, nT.jsx)(jk, {})]
        })
      },
      fk = () => {
        const {
          t: TT
        } = (0, zT.t)(), oT = (0, xT.z)(), {
          gameState: IT,
          isUiHidden: iT
        } = (0, BT.k)(["gameState", "isUiHidden"]), {
          hideButtonHints: kT
        } = (0, LT.r)(), WT = (0, wk.g)(), XT = (0, wk.i)(), [FT, DT] = (0, QT.useState)(uk.d);
        return (0, Lk.g)(vk.t, DT), !oT || kT || iT || "inGame" !== IT || !WT && !FT ? null : (0, nT.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [WT && (0, nT.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, nT.jsx)(Ak, {
              glyph: (0, ST.k)("actionButton")
            }), (0, nT.jsx)(hk, {
              action: WT
            }), XT && (0, nT.jsx)("span", {
              className: "PadActionHintMore",
              children: TT("controller:gameplayActionWheelHint")
            })]
          }), FT && (0, nT.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, nT.jsx)(Ak, {
              glyph: (0, ST.k)("pickBlock")
            }), (0, nT.jsx)("span", {
              children: TT("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      Ck = () => {
        const {
          t: TT
        } = (0, zT.t)(), oT = (0, xT.z)(), {
          gameState: IT,
          isUiHidden: iT
        } = (0, BT.k)(["gameState", "isUiHidden"]), [kT, WT] = (0, QT.useState)(ek.c);
        return (0, Lk.g)(vk.q, WT), oT && !iT && "inGame" === IT && kT ? (0, nT.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, nT.jsx)("span", {
            children: TT("controller:gameplayDropStack")
          }), (0, nT.jsx)(mk, {
            hold: kT
          })]
        }) : null
      },
      jk = () => {
        const {
          t: TT
        } = (0, zT.t)(), oT = (0, xT.z)(), {
          gameState: IT,
          isUiHidden: iT
        } = (0, BT.k)(["gameState", "isUiHidden"]), {
          hideButtonHints: kT
        } = (0, LT.r)(), [WT, XT] = (0, QT.useState)(Rk.c);
        return (0, Lk.g)(vk.m, XT), oT && !iT && "inGame" === IT && WT ? (0, nT.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!kT && (0, nT.jsx)(Ak, {
            glyph: (0, ST.k)("attack")
          }), (0, nT.jsx)("span", {
            children: TT("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var Jk = IT(8193),
      Uk = IT(1770),
      ak = IT(2227),
      Yk = IT(7647);
    const Qk = TT => TT && !(0, Jk.e)(Uk.e.get("shopInfo")),
      Ok = () => {
        const TT = "inGame" === (0, BT.k)(["gameState"]).gameState;
        return (0, ak.e)("shopInfo", (() => {
          (0, Yk.g)(Qk(TT))
        })), (0, QT.useEffect)((() => {
          (0, Yk.g)(Qk(TT))
        }), [TT]), null
      },
      Hk = () => {
        const {
          t: TT
        } = (0, zT.t)(), {
          hideButtonHints: oT
        } = (0, LT.r)();
        (0, xT.B)();
        const IT = (0, JI.i)();
        return (0, QT.useEffect)((() => (() => {
          const TT = DT.c.register({
              name: "inventory",
              isActive: dI.isActive,
              onFrame: dI.onFrame,
              onDeactivate: dI.onDeactivate,
              wakePressActs: dI.wakePressActs
            }),
            oT = TT => {
              dI.noteRealPointer(TT), dI.shouldBlockRealPointer(TT) && TT.stopPropagation()
            };
          for (const WT of VI) window.addEventListener(WT, oT, !0);
          const IT = (0, to.j)((() => {
              "inventory" !== DT.c.getActiveConsumerName() && dI.forgetSurface()
            })),
            iT = TT => {
              const oT = TT.target;
              (0, xT.l)() && dT(oT) && oT.closest(KI) && (0, to.i)() && (0, to.p)(oT)
            };
          document.addEventListener("focusout", iT, !0);
          const {
            invalidate: zT,
            onScroll: kT
          } = dI.targets;
          return document.addEventListener("scroll", kT, !0), window.addEventListener("resize", zT), () => {
            TT(), IT();
            for (const TT of VI) window.removeEventListener(TT, oT, !0);
            document.removeEventListener("scroll", kT, !0), document.removeEventListener("focusout", iT, !0), window.removeEventListener("resize", zT), dI.targets.disconnect()
          }
        })()), []), (0, nT.jsxs)(nT.Fragment, {
          children: [(0, nT.jsx)(sT, {
            placer: dI.ring,
            className: "InventorySlotCursorRing"
          }), IT.showing && !oT && (0, nT.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: so(IT).map((oT => {
              let {
                actions: iT,
                labelKey: zT
              } = oT;
              return (0, nT.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [iT.map((TT => (0, nT.jsx)(Ak, {
                  glyph: (0, ST.k)(TT)
                }, TT))), (0, nT.jsx)("span", {
                  children: TT(`controller:${zT}`)
                }), "inventoryDrop" === zT && IT.dropStackHold && (0, nT.jsx)(mk, {
                  hold: IT.dropStackHold
                })]
              }, zT)
            }))
          })]
        })
      },
      nk = [{
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
      qk = TT => Array.from(TT).map((TT => ({
        type: "char",
        char: TT,
        width: 1
      }))),
      Zk = function(TT) {
        return {
          type: "command",
          command: TT,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      lk = [Zk("page", 2), Zk("otherPage"), Zk("caretLeft"), Zk("space", 3), Zk("caretRight"), Zk("close", 1.5), Zk("submit", 1.5)],
      sk = [Zk("page", 2), Zk("otherPage"), Zk("caretLeft"), Zk("space", 2), Zk("caretRight"), Zk("newline"), Zk("close", 1.5), Zk("submit", 1.5)],
      tk = [
        [...qk("1234567890"), Zk("backspace")], qk("qwertyuiop/"), qk("asdfghjkl'?"), [Zk("shift", 2), ...qk("zxcvbnm,.")]
      ],
      Gk = [
        [...qk("1234567890"), Zk("backspace")], qk("!@#$%^&*()/"), qk('-_=+[]{};:"'), qk("~`|\\<>'\u20ac\xa3,.")
      ],
      pk = {
        letters: tk,
        accents: [
          [...qk("1234567890"), Zk("backspace")], qk("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), qk("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [Zk("shift", 2), ...qk("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: Gk
      },
      bk = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      yk = (TT, oT) => "letters" === TT ? oT ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === TT ? "symbols" : "accents"
      },
      Nk = function(TT, oT) {
        const IT = ((TT, oT) => [...pk[TT], oT ? sk : lk])(TT, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === oT) return IT;
        const iT = Math.min(2, Pk(IT[0]) / oT);
        return [Array.from({
          length: oT
        }, ((TT, oT) => ({
          type: "phrase",
          phraseIndex: oT,
          width: iT
        }))), ...IT]
      },
      Pk = TT => TT.reduce(((TT, oT) => TT + oT.width), 0),
      dk = TT => Math.max(...TT.map(Pk)),
      Vk = (TT, oT) => {
        const IT = TT[oT.row];
        let iT = (dk(TT) - Pk(IT)) / 2;
        for (let zT = 0; zT < oT.col; zT++) iT += IT[zT].width;
        return iT + IT[oT.col].width / 2
      },
      TW = (TT, oT, IT) => {
        let iT = 0,
          zT = 1 / 0;
        for (let kT = 0; kT < TT[oT].length; kT++) {
          const WT = Math.abs(Vk(TT, {
            row: oT,
            col: kT
          }) - IT);
          WT < zT - 1e-9 && (iT = kT, zT = WT)
        }
        return iT
      },
      oW = (TT, oT) => {
        const IT = Math.max(0, Math.min(TT.length - 1, oT.row));
        return {
          row: IT,
          col: Math.max(0, Math.min(TT[IT].length - 1, oT.col))
        }
      },
      IW = (TT, oT, IT) => "once" === TT && oT - IT <= 400 ? "caps" : "off" === TT ? "once" : "off",
      iW = (TT, oT) => "once" === TT && (TT => TT.toLowerCase() !== TT.toUpperCase())(oT) ? "off" : TT,
      zW = (TT, oT, IT) => {
        if ("symbols" === oT || "off" === IT) return TT;
        const iT = TT.toUpperCase();
        return 1 === iT.length ? iT : TT
      };
    var kW = IT(8078);
    const WW = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const XW = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(TT) {
          return !(TT - this.lastSendMs < 2e3) && (this.lastSendMs = TT, !0)
        }
      },
      BW = {
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
      FW = ["gX", "nameTag"],
      SW = TT => {
        const oT = TT.target instanceof HTMLTextAreaElement && !FW.includes(TT.kind);
        return Nk(TT.page, "chat" === TT.kind ? WW.length : 0, oT)
      },
      DW = TT => {
        const oT = TT.getBoundingClientRect(),
          IT = window.innerHeight,
          iT = oT.top + oT.height / 2 < IT / 2 ? "bottom" : "top",
          zT = "bottom" === iT ? IT - oT.bottom - 6 : oT.top - 6;
        return {
          placement: iT,
          maxHeightPx: Math.min(.46 * IT, Math.max(.3 * IT, zT))
        }
      },
      LW = TT => {
        (0, mi.h)(TT) ? (0, mi.b)().close(): (bz.noteChosenStop(TT), TT.blur())
      };
    class xW {
      constructor(TT) {
        this.host = TT, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(TT, oT) {
        this.phraseTexts = TT, this.phrasesFill = oT
      }
      pressKey(TT) {
        const oT = this.host.getState(),
          IT = SW(oT),
          iT = IT[TT.row][TT.col];
        this.host.setState({
          ...oT,
          focus: TT,
          preferredX: Vk(IT, TT)
        }), "char" === iT.type ? this.typeChar(iT.char) : "command" === iT.type ? this.runCommand(iT.command) : this.sendPhrase(iT.phraseIndex)
      }
      runCommand(TT) {
        const oT = this.host.getState();
        switch (TT) {
          case "backspace":
            ko(oT.target);
            break;
          case "space":
            zo(oT.target, " ");
            break;
          case "newline":
            zo(oT.target, "\n");
            break;
          case "caretLeft":
            Wo(oT.target, -1);
            break;
          case "caretRight":
            Wo(oT.target, 1);
            break;
          case "shift": {
            const TT = performance.now();
            this.host.setState({
              ...oT,
              shift: IW(oT.shift, TT, this.lastShiftPressMs)
            }), this.lastShiftPressMs = TT;
            break
          }
          case "page":
          case "otherPage": {
            const IT = yk(oT.page, oT.accentsFirst)[TT];
            this.host.setState({
              ...oT,
              page: IT,
              focus: oW(SW({
                ...oT,
                page: IT
              }), oT.focus)
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
            (0, mi.h)(oT.target) && (0, mi.b)().selectNextChannel()
        }
      }
      submit() {
        var TT, oT;
        const {
          target: IT
        } = this.host.getState();
        this.host.hide(), (0, mi.h)(IT) ? (0, mi.b)().submit() : (bz.noteChosenStop(IT), null === (TT = (oT = (0, mi.e)(IT)).submit) || void 0 === TT || TT.call(oT), document.activeElement === IT && IT.blur())
      }
      close() {
        const {
          target: TT
        } = this.host.getState();
        this.host.hide(), LW(TT)
      }
      typeChar(TT) {
        const {
          target: oT,
          page: IT,
          shift: iT
        } = this.host.getState();
        zo(oT, zW(TT, IT, iT)), this.host.setState({
          ...this.host.getState(),
          shift: iW(iT, TT)
        })
      }
      sendPhrase(TT) {
        if (this.phrasesFill) {
          const {
            target: oT
          } = this.host.getState(), IT = this.phraseTexts[TT];
          IT && (oT.setSelectionRange(0, oT.value.length), zo(oT, IT))
        } else XW.claim(performance.now()) && (this.host.hide(), (0, mi.b)().sendLine(this.phraseTexts[TT]))
      }
    }
    const cW = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      KW = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class MW {
      constructor(TT, oT) {
        this.host = TT, this.editor = oT, this.lastDirection = null, this.navRepeat = new cT.e((0, KT.d)(cW)), this.commandRepeats = new Map(nk.filter((TT => {
          let {
            repeats: oT
          } = TT;
          return oT
        })).map((TT => {
          let {
            command: oT
          } = TT;
          return [oT, (0, KT.d)(KW)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const TT of this.commandRepeats.values()) TT.reset()
      }
      onVisibleFrame(TT) {
        const oT = performance.now();
        for (const {
            command: zT,
            action: kT
          }
          of nk) {
          const IT = (0, ST.k)(kT),
            iT = this.commandRepeats.get(zT);
          if ((iT ? iT.update(TT.isHeld(IT), oT) : TT.wasPressed(IT)) && (this.editor.runCommand(zT), !this.host.getState().visible)) return
        }
        if (TT.wasPressed((0, ST.k)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const IT = this.readNavDirection(TT);
        this.lastDirection = IT;
        const iT = this.navRepeat.update(IT, oT);
        iT && this.navigate(iT)
      }
      onHiddenFrame(TT, oT) {
        var IT;
        if (TT.wasPressed((0, ST.k)("keyboardClose"))) return void LW(oT);
        const iT = (0, ST.k)("keyboardType");
        if (TT.wasPressed(iT)) return DT.c.consumeButton(iT), void this.host.open(oT);
        const zT = this.readNavDirection(TT),
          kT = null !== zT && zT !== this.lastDirection;
        if (this.lastDirection = zT, !kT || (0, mi.h)(oT)) return;
        const WT = (null === (IT = kz()) || void 0 === IT ? void 0 : IT.root.contains(oT)) || null !== oT.closest(".EntireInventoryWrapper");
        LW(oT), WT && DT.c.handOffHeldInput()
      }
      navigate(TT) {
        const oT = this.host.getState();
        if ("Up" === TT && 0 === oT.focus.row && "chat" === oT.kind) return (0, mi.b)().stepHistory(), void this.host.setState({
          ...oT
        });
        const IT = ((TT, oT, IT, iT) => {
          if ("Left" === IT || "Right" === IT) {
            const iT = TT[oT.row].length,
              zT = (oT.col + ("Right" === IT ? 1 : -1) + iT) % iT,
              kT = {
                row: oT.row,
                col: zT
              };
            return {
              pos: kT,
              preferredX: Vk(TT, kT)
            }
          }
          const zT = (oT.row + ("Down" === IT ? 1 : -1) + TT.length) % TT.length;
          return {
            pos: {
              row: zT,
              col: TW(TT, zT, iT)
            },
            preferredX: iT
          }
        })(SW(oT), oT.focus, TT, oT.preferredX);
        this.host.setState({
          ...oT,
          focus: IT.pos,
          preferredX: IT.preferredX
        })
      }
      readNavDirection(TT) {
        for (const oT of cT.I)
          if (TT.isHeld(oT)) return oT;
        return (0, cT.db)((0, cT.n)(TT.leftStick, (0, LT.j)().moveDeadzone))
      }
    }
    const rW = ["Up", "Down", "Left", "Right"],
      AW = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const gW = new class {
      constructor() {
        this.state = BW, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new xW(this), this.padInput = new MW(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(TT) {
        const oT = TT.visible !== this.state.visible;
        this.state = TT;
        for (const IT of this.listeners) IT();
        oT && FT.h.XM(tT.d, TT.visible)
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      install() {
        const TT = DT.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || dT(document.activeElement),
            onFrame: TT => {
              this.onFrame(TT)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: TT => rW.includes(TT) || !this.state.visible && TT === (0, ST.k)("keyboardType")
          }),
          oT = TT => {
            const oT = TT.target;
            dT(oT) && (oT === this.pendingChatInput || (0, xT.l)() ? this.open(oT) : this.state.visible && oT !== this.state.target && (this.ownedField = null, this.hide()))
          },
          IT = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          iT = TT => {
            TT.isTrusted && this.state.visible && (TT => !TT.repeat && !AW.has(TT.key) && !(0, kW.e)(TT.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(TT.key))(TT) && this.hide()
          },
          zT = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...DW(this.state.target)
            })
          };
        document.addEventListener("focusin", oT, !0), document.addEventListener("focusout", IT, !0), window.addEventListener("keydown", iT, !0), window.addEventListener("resize", zT);
        const kT = FT.h.subscribe(vk.e, (() => {
            this.openChat()
          })),
          WT = FT.h.subscribe(tT.f, (TT => {
            this.openForField(TT)
          }));
        return () => {
          TT(), document.removeEventListener("focusin", oT, !0), document.removeEventListener("focusout", IT, !0), window.removeEventListener("keydown", iT, !0), window.removeEventListener("resize", zT), FT.h.unsubscribe(kT), FT.h.unsubscribe(WT), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const TT = (0, mi.b)();
        TT ? document.activeElement !== TT.input ? (this.clearPendingChat(), this.pendingChatInput = TT.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), TT.open()) : this.open(TT.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(TT) {
        dT(TT) ? (document.activeElement !== TT && TT.focus(), document.activeElement === TT && this.open(TT)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", TT)
      }
      open(TT) {
        var oT;
        if (this.clearPendingChat(), this.ownedField = TT, this.state.visible && this.state.target === TT) return;
        this.restoreInputMode(), (TT => {
          VT(TT) && 0 === TT.selectionStart && 0 === TT.selectionEnd && TT.setSelectionRange(TT.value.length, TT.value.length)
        })(TT), this.savedInputMode = TT.getAttribute("inputmode"), TT.setAttribute("inputmode", "none");
        const IT = {
          ...BW,
          visible: !0,
          target: TT,
          kind: (0, mi.h)(TT) ? "chat" : null !== (oT = (0, mi.e)(TT).kind) && void 0 !== oT ? oT : null,
          accentsFirst: (iT = xk.d.get().getCurrentLanguageCode(), bk.has(iT)),
          ...DW(TT)
        };
        var iT;
        const zT = SW(IT),
          kT = ((TT, oT) => {
            for (let IT = 0; IT < TT.length; IT++) {
              const iT = TT[IT].findIndex((TT => "char" === TT.type && TT.char === oT));
              if (-1 !== iT) return {
                row: IT,
                col: iT
              }
            }
            return null
          })(zT, "q");
        this.padInput.reset(), this.setState({
          ...IT,
          focus: kT,
          preferredX: Vk(zT, kT)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(BW))
      }
      onFrame(TT) {
        if (this.releaseLostField()) return;
        const oT = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(TT) : dT(oT) && this.padInput.onHiddenFrame(TT, oT)
      }
      releaseLostField() {
        const TT = this.ownedField;
        return !(null === TT || TT.isConnected && document.activeElement === TT) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: TT
        } = this.state;
        TT && (null === this.savedInputMode ? TT.removeAttribute("inputmode") : TT.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var hW = IT(8205);
    const wW = new Map(nk.map((TT => {
        let {
          command: oT,
          action: IT
        } = TT;
        return [oT, IT]
      }))),
      mW = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      eW = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        gX: "controller:keyboardTargetBookTitle"
      },
      RW = TT => {
        const oT = (() => {
          const [, TT] = (0, QT.useReducer)((TT => TT + 1), 0);
          return TT
        })();
        (0, QT.useEffect)((() => {
          if (!TT) return;
          const IT = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const zT of IT) TT.addEventListener(zT, oT);
          document.addEventListener("selectionchange", oT);
          const iT = new MutationObserver(oT);
          return iT.observe(TT, {
            attributeFilter: ["placeholder"]
          }), () => {
            iT.disconnect();
            for (const iT of IT) TT.removeEventListener(iT, oT);
            document.removeEventListener("selectionchange", oT)
          }
        }), [TT, oT])
      },
      uW = TT => {
        TT.preventDefault()
      },
      vW = TT => {
        "mouse" !== TT.pointerType && TT.preventDefault()
      },
      EW = () => {
        var TT;
        const {
          t: oT
        } = (0, zT.t)(), IT = (() => {
          const [TT, oT] = (0, QT.useState)(gW.getState());
          return (0, QT.useEffect)((() => gW.subscribe((() => {
            oT(gW.getState())
          }))), []), TT
        })(), iT = (0, xT.z)(), kT = (0, QT.useRef)(null);
        (0, LT.r)(), (0, xT.B)(), (0, QT.useEffect)((() => {
          const TT = gW.install(),
            oT = null;
          return () => {
            TT(), null === oT || void 0 === oT || oT()
          }
        }), []);
        const WT = (0, QT.useMemo)((() => WW.map((TT => oT(TT)))), [oT]),
          XT = IT.visible && "chat" === IT.kind ? IT.target : null;
        RW(XT);
        const BT = null !== (TT = null === XT || void 0 === XT ? void 0 : XT.value) && void 0 !== TT ? TT : "",
          FT = ((TT, oT, IT) => {
            if (!TT.startsWith("/")) return [];
            const iT = [];
            for (let zT = oT.length - 1; zT >= 0 && iT.length < IT; zT--) {
              const IT = oT[zT].trim();
              IT.startsWith(TT) && IT !== TT && !iT.includes(IT) && iT.push(IT)
            }
            return iT
          })(BT, BT.startsWith("/") ? (0, hW.e)() : [], WW.length),
          DT = BT.startsWith("/"),
          cT = DT ? WW.map(((TT, oT) => {
            var IT;
            return null !== (IT = FT[oT]) && void 0 !== IT ? IT : ""
          })) : WT;
        if ((0, QT.useEffect)((() => {
            gW.editor.setPhraseRow(cT, DT)
          })), (0, QT.useEffect)((() => {
            const TT = kT.current;
            if (TT) return TT.addEventListener("touchstart", uW, {
              passive: !1
            }), () => {
              TT.removeEventListener("touchstart", uW)
            }
          }), [IT.visible]), !IT.visible) return null;
        const KT = SW(IT),
          MT = dk(KT),
          rT = TT => "char" === TT.type ? zW(TT.char, IT.page, IT.shift) : "phrase" === TT.type ? cT[TT.phraseIndex] : (TT => {
            switch (TT) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === IT.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return mW[yk(IT.page, IT.accentsFirst)[TT]];
              case "space":
                return oT("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return oT("chat" === IT.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(TT.command),
          AT = TT => {
            gW.editor.pressKey(TT)
          };
        return (0, nT.jsxs)("div", {
          ref: kT,
          className: HT()(mi.j, "top" === IT.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: IT.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": KT.length,
            "--pad-keyboard-height": `${IT.maxHeightPx}px`
          },
          onPointerDown: vW,
          onMouseDown: uW,
          children: [(0, nT.jsx)(fW, {
            target: IT.target,
            label: IT.kind ? oT(eW[IT.kind]) : IT.target.placeholder || oT("controller:keyboardTargetText")
          }), (0, nT.jsx)("div", {
            className: "PadKeyboardRows",
            children: KT.map(((TT, oT) => (0, nT.jsx)("div", {
              className: HT()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === TT[0].type
              }),
              children: TT.map(((TT, zT) => {
                const kT = iT && IT.focus.row === oT && IT.focus.col === zT,
                  WT = "command" === TT.type ? wW.get(TT.command) : void 0;
                return (0, nT.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: TT.width / MT * 100 + "%"
                  },
                  children: (0, nT.jsxs)("div", {
                    className: HT()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: kT,
                      PadKeyboardKeyCommand: "command" === TT.type,
                      PadKeyboardKeyPhrase: "phrase" === TT.type,
                      PadKeyboardKeyActive: "command" === TT.type && "shift" === TT.command && "off" !== IT.shift,
                      PadKeyboardKeySubmit: "command" === TT.type && "submit" === TT.command
                    }),
                    role: "button",
                    onClick: () => {
                      AT({
                        row: oT,
                        col: zT
                      })
                    },
                    onTouchEnd: TT => {
                      var IT, iT;
                      TT.preventDefault(), IT = TT.changedTouches[0], iT = TT.currentTarget.getBoundingClientRect(), IT && IT.clientX >= iT.left && IT.clientX <= iT.right && IT.clientY >= iT.top && IT.clientY <= iT.bottom && AT({
                        row: oT,
                        col: zT
                      })
                    },
                    children: [(0, nT.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: rT(TT)
                    }), iT && WT && (0, nT.jsx)(Ak, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, ST.k)(WT)
                    })]
                  })
                }, zT)
              }))
            }, oT)))
          })]
        })
      },
      fW = TT => {
        let {
          target: oT,
          label: IT
        } = TT;
        RW(oT);
        const iT = (0, QT.useRef)(null),
          zT = (0, QT.useRef)(null),
          kT = oT instanceof HTMLTextAreaElement;
        (0, QT.useLayoutEffect)((() => {
          const TT = iT.current,
            oT = zT.current;
          kT ? TT.scrollTop = oT.offsetTop - TT.clientHeight / 2 : TT.scrollLeft = oT.offsetLeft - TT.clientWidth / 2
        }));
        const {
          value: WT,
          start: XT,
          end: BT
        } = To(oT), FT = "password" === oT.type ? "\u2022".repeat(WT.length) : WT;
        return (0, nT.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, nT.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: IT
          }), (0, nT.jsxs)("div", {
            ref: iT,
            className: HT()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: kT
            }),
            children: [(0, nT.jsx)("span", {
              children: FT.slice(0, XT)
            }), (0, nT.jsx)("span", {
              ref: zT,
              className: "PadKeyboardCaret"
            }), XT !== BT && (0, nT.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: FT.slice(XT, BT)
            }), (0, nT.jsx)("span", {
              children: FT.slice(BT)
            }), 0 === FT.length && oT.placeholder && oT.placeholder !== IT && (0, nT.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: oT.placeholder
            })]
          })]
        })
      };
    var CW = IT(1357),
      jW = IT(2976);
    const JW = function() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        return oT.map(ST.k)
      },
      UW = (TT, oT) => {
        const IT = Hi(TT);
        return IT ? [{
          glyphs: [IT],
          labelKey: oT
        }] : []
      },
      aW = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      YW = "--pad-hint-bar-clearance",
      QW = "[data-pad-hint-bar-avoid]",
      OW = TT => {
        const oT = [];
        for (const IT of TT) Fo(IT) && oT.push(IT.getBoundingClientRect());
        return oT
      },
      HW = TT => {
        if (!TT) return null;
        const oT = kz(),
          IT = oT ? OW(((TT, oT) => {
            const IT = TT.closest(QW);
            return IT ? [IT] : ("popup" === oT ? document : TT).querySelectorAll(QW)
          })(oT.root, oT.layer.kind)) : [],
          iT = !oT || oT.root.hasAttribute("data-pad-shows-hud");
        if (((0, jW.k)(null === oT || void 0 === oT ? void 0 : oT.layer.kind, (0, jW.n)()) || iT) && IT.push(...OW(document.querySelectorAll(aW.join(",")))), 0 === IT.length) return null;
        const {
          width: zT,
          height: kT
        } = TT.getBoundingClientRect(), WT = window.innerHeight - 8, XT = (0, jW.p)(WT, {
          width: zT,
          height: kT
        }, window.innerWidth / 2, IT, 8);
        return XT === WT ? null : Math.round(window.innerHeight - XT)
      },
      nW = TT => {
        const oT = document.documentElement.style,
          IT = TT ? `${Math.round(window.innerHeight-TT.getBoundingClientRect().top)}px` : "";
        oT.getPropertyValue(YW) !== IT && (IT ? oT.setProperty(YW, IT) : oT.removeProperty(YW))
      },
      qW = () => {
        const {
          t: TT
        } = (0, zT.t)(), {
          hideButtonHints: oT
        } = (0, LT.r)(), IT = (0, xT.z)(), [iT, kT] = (0, QT.useState)(!1), [WT, FT] = (0, QT.useState)([]), [KT, MT] = (0, QT.useState)(null), rT = (0, QT.useRef)(null), AT = (0, QT.useRef)(null);
        (0, Lk.g)(tT.d, (TT => {
          kT(TT)
        })), (0, Lk.g)(jW.o, (() => {
          var TT;
          null === (TT = AT.current) || void 0 === TT || TT.call(AT)
        }));
        const gT = IT && !oT && !iT;
        return (0, QT.useEffect)((() => {
          if (!gT) return;
          let TT = null;
          const oT = () => {
            const oT = (() => {
                var TT;
                const oT = DT.c.getActiveConsumerName(),
                  IT = (0, jW.i)();
                if (IT) {
                  const TT = (0, ST.k)(IT),
                    oT = "emoteWheel" === IT && "wheel" === (0, LT.j)().emoteButton || !(0, cT.O)(DT.c.getLastFrame().values, TT) ? {
                      glyphs: JW("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [TT],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, ST.z)(TT)],
                    labelKey: "controller:wheelChoose"
                  }, oT, {
                    glyphs: JW("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const iT = kz();
                if (!iT || "focus" !== oT && "cursor" !== oT) return (0, jW.e)(ST.k);
                const zT = [],
                  kT = {
                    glyphs: JW("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  WT = Qo(iT.root),
                  XT = WT ? !So(WT) : Boolean(iT.layer.close),
                  FT = !WT && iT.layer.closeLabelKey ? iT.layer.closeLabelKey : kT.labelKey,
                  xT = XT ? [{
                    ...kT,
                    labelKey: FT
                  }] : [],
                  KT = ui(iT.layer.kind) ? [{
                    glyphs: JW("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === oT) return zT.push({
                  glyphs: JW("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), zT.push({
                  glyphs: JW("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), zT.push(...xT), zT.push(...KT), zT.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), hz() && zT.push({
                  glyphs: JW("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), zT;
                const MT = bz.getFocused();
                MT && (0, uz.c)(MT) ? zT.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : MT && ao(MT) ? zT.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : zT.push({
                  glyphs: JW("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const rT = MT ? null === (TT = Wi(MT)) || void 0 === TT ? void 0 : TT.dataset.padSecondary : void 0;
                rT && zT.push({
                  glyphs: JW("menuSecondary"),
                  labelKey: rT
                }), zT.push(...null !== MT && void 0 !== MT && MT.closest("[data-pad-friends-column]") ? [kT] : xT), zT.push(...KT);
                const AT = "home" === iT.layer.kind;
                Zi(iT.root) || !Ci(iT.root) && !li(iT) ? AT && zT.push({
                  glyphs: JW("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : zT.push({
                  glyphs: JW("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), AT && (zT.push(...UW("inventory", "controller:menusFriends")), rT || zT.push({
                  glyphs: JW("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), zT.push(...UW("pause", "controller:menusSettings")), zT.push(...UW("leaderboard", "controller:menusNotifications")));
                const gT = BT.c.get("openEverythingMenuName");
                return "inGame" === BT.c.get("gameState") && "popup" !== iT.layer.kind && null !== gT && ((0, Ii.n)(gT) ? zT.push(...UW("leaderboard", "controller:menusClose")) : gT !== oi.q.LOBBY_LEADERBOARD && zT.push(...UW("leaderboard", "controller:menusLobby"))), zT.push({
                  glyphs: JW("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), zT
              })(),
              IT = HW(rT.current),
              iT = ((TT, oT) => `${TT.map((TT=>`${TT.glyphs.join("+")}:${TT.labelKey}`)).join("|")}@${oT}`)(oT, IT);
            iT !== TT && (TT = iT, (0, XT.unstable_batchedUpdates)((() => {
              FT(oT), MT(IT)
            }))), nW(rT.current)
          };
          oT(), AT.current = oT;
          const IT = requestAnimationFrame(oT),
            iT = setInterval(oT, 150);
          return () => {
            AT.current = null, cancelAnimationFrame(IT), clearInterval(iT), nW(null)
          }
        }), [gT]), (0, QT.useLayoutEffect)((() => {
          if (!gT) return;
          if (0 === WT.length) return void nW(null);
          const TT = HW(rT.current);
          TT === KT ? nW(rT.current) : MT(TT)
        }), [gT, WT, KT]), gT && 0 !== WT.length ? (0, nT.jsx)("div", {
          ref: rT,
          className: "PadButtonHintBar SmallTextBold",
          style: null === KT ? void 0 : {
            bottom: KT
          },
          "aria-hidden": !0,
          children: WT.map((oT => (0, nT.jsxs)("div", {
            className: "PadButtonHint",
            children: [oT.glyphs.map((TT => (0, nT.jsx)(Ak, {
              glyph: TT,
              className: "PadButtonHintGlyph"
            }, TT))), (0, nT.jsx)("span", {
              children: TT(oT.labelKey)
            })]
          }, oT.labelKey)))
        }) : null
      },
      ZW = [Xo, "label", "[data-pad-slider]"].join(","),
      lW = "data-pad-cursor-probe",
      sW = TT => {
        var oT;
        const IT = (TT => {
          const oT = [];
          for (let iT = TT; iT && iT !== document.body && iT !== document.documentElement && (oT.push(iT), !(oT.length > 8)); iT = iT.parentElement);
          const IT = document.documentElement.classList.contains(xT.p) ? oT[oT.length - 1] : void 0;
          null === IT || void 0 === IT || IT.setAttribute(lW, "");
          try {
            return oT.map((TT => ({
              element: TT,
              cursor: getComputedStyle(TT).cursor
            })))
          } finally {
            null === IT || void 0 === IT || IT.removeAttribute(lW)
          }
        })(TT);
        if ("pointer" !== (null === (oT = IT[0]) || void 0 === oT ? void 0 : oT.cursor)) return null;
        let iT = 0;
        for (; iT + 1 < IT.length && "pointer" === IT[iT + 1].cursor;) iT++;
        return IT[iT].element
      },
      tW = (TT, oT, IT, iT) => {
        const zT = iT.root.contains(TT) ? iT.root : null;
        for (let kT = TT; kT && kT !== document.body && kT !== document.documentElement; kT = kT.parentElement) {
          if (kT instanceof HTMLElement && vT(kT, oT) && JT(kT, oT, IT)) return kT;
          if (kT === zT) break
        }
        return "home" === iT.layer.kind || "gamePage" === iT.layer.kind ? ((TT, oT) => {
          const IT = document.scrollingElement;
          return IT instanceof HTMLElement && ![document.documentElement, document.body].some((oT => {
            const IT = getComputedStyle(oT),
              iT = "y" === TT ? IT.overflowY : IT.overflowX;
            return "hidden" === iT || "clip" === iT
          })) && JT(IT, TT, oT) ? IT : null
        })(oT, IT) : null
      };
    const GW = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, KT.d)(cT.B), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const TT = DT.c.register({
              name: "cursor",
              isActive: () => "cursor" === wz(),
              onFrame: TT => {
                this.onFrame(TT)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: TT => (0, DT.g)(TT) || TT === (0, ST.k)("menuConfirm") && Yo((0, xT.d)())
            }),
            oT = (0, Pi.k)((TT => {
              const oT = TT.getRoot();
              oT && this.layerPoints.delete(oT), oT === this.layerRoot && (this.layerRoot = null)
            })),
            IT = FT.h.subscribe("appManagerUpdated|activeInputDevice", (TT => {
              "gamepad" !== TT && this.active && !this.hidden && this.hide()
            }));
          return () => {
            TT(), oT(), FT.h.unsubscribe(IT), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, xT.l)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.XM()
        }
        activate(TT) {
          this.active = !0, this.hidden = !1;
          const oT = rz();
          !oT || oT.root && oT.root !== TT.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(TT), this.jumpTo(oT.point))
        }
        jumpTo(TT) {
          this.state = {
            x: TT.x,
            y: TT.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.XM())
        }
        onFrame(TT) {
          const oT = kz();
          if (!oT) return;
          if (this.active || this.activate(oT), this.followPage(oT)) return;
          this.followLayer(oT);
          const IT = TT.wokeDevice ? (0, xT.d)() : null;
          if (IT && this.jumpTo(IT), !(0, xT.l)()) return void this.hide();
          const iT = (0, ST.k)("menuToggleCursor");
          if (TT.wasPressed(iT)) return DT.c.consumeButton(iT), void Mz(this.getHandoff(null));
          if (this.handBackToFocus(TT)) return;
          const zT = (0, ST.k)("menuConfirm"),
            kT = (0, ST.k)("menuSecondary");
          if (TT.wasPressed((0, ST.k)("menuBack"))) return Jo(oT.root) || Oo(oT.root) || Wz(), void this.XM();
          if (Gi(null, TT, oT)) return TT.wasReleased(zT) && this.press && (this.updateHit(!1), this.updateConfirm(TT, zT)), void this.XM();
          if (document.pointerLockElement) return void this.hide();
          const WT = mz() ? {
              x: 0,
              y: 0
            } : (TT => {
              const oT = (TT, oT) => (TT ? 1 : 0) - (oT ? 1 : 0);
              return {
                x: oT(TT.isHeld("Right"), TT.isHeld("Left")),
                y: oT(TT.isHeld("Down"), TT.isHeld("Up"))
              }
            })(TT),
            XT = (0, LT.j)().moveDeadzone,
            BT = ((TT, oT) => {
              const IT = (0, cT.n)(TT, hT(oT));
              return Math.hypot(IT.x, IT.y)
            })(TT.leftStick, XT) > 0 || 0 !== WT.x || 0 !== WT.y;
          if (this.hidden) {
            const oT = TT.wasPressed(zT),
              IT = TT.wasPressed(kT);
            if (!BT && !eT(TT.rightStick) && !oT && !IT && !TT.wokeDevice) return void this.XM();
            if (this.hidden = !1, this.updateHit(!1), oT || IT) return oT && (this.press = {
              kind: "ignored"
            }, TT.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.XM()
          }
          this.movePendingPageStart(BT);
          const FT = this.getPoint();
          this.state = mT(this.state, {
            stick: TT.leftStick,
            moveDeadzone: XT,
            dpad: WT,
            dtMs: TT.dtMs,
            cursorSpeedPercent: (0, LT.j)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const KT = this.state.x !== FT.x || this.state.y !== FT.y,
            MT = [zT, kT].some((oT => TT.wasPressed(oT) || TT.wasReleased(oT)));
          (KT || MT || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(KT), this.updateConfirm(TT, zT), this.updateSecondary(TT, kT), this.updateScroll(TT, oT), this.XM()
        }
        followPage(TT) {
          const oT = "home" === TT.layer.kind || "gamePage" === TT.layer.kind,
            IT = this.page;
          if (this.page = oT ? {
              key: (0, Pi.p)(TT.layer),
              root: TT.root
            } : null, !this.page || !IT || IT.root !== TT.root || IT.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(TT), "hybrid" === Kz()) return Lz = null, Sz = null, xz.lock(), !0;
          const {
            key: iT
          } = this.page;
          return this.pendingPageStart = {
            root: TT.root,
            key: iT,
            returning: bz.notePageEnteredByCursor(iT),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(TT) {
          const oT = this.pendingPageStart;
          if (!oT) return;
          if (TT || oT.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const IT = oT.returning ? bz.recallStop(oT.root, oT.key) : null;
          if (!IT && oT.returning && performance.now() - oT.enteredAtMs < 1e3) return;
          const iT = null !== IT && void 0 !== IT ? IT : bz.pickInitial(oT.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: oT.enteredAtMs
          });
          iT && (this.pendingPageStart = null, this.jumpTo(ho(iT)))
        }
        setLayer(TT) {
          this.layerRoot = TT.root, this.layerOrder = TT.order
        }
        followLayer(TT) {
          var oT;
          if (TT.root === this.layerRoot) return;
          null !== (oT = this.layerRoot) && void 0 !== oT && oT.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const IT = this.layerPoints.get(TT.root),
            iT = IT && TT.order <= this.layerOrder ? IT : bz.getLayerStartPoint(TT.root);
          this.setLayer(TT), this.jumpTo(iT)
        }
        getHandoff(TT) {
          var oT;
          return {
            point: this.getPoint(),
            element: null !== (oT = this.interactive) && void 0 !== oT ? oT : this.findDraggedSliderNearby(),
            direction: TT
          }
        }
        findDraggedSliderNearby() {
          const TT = this.draggedSlider;
          if (null === TT || void 0 === TT || !TT.isConnected) return null;
          const oT = TT.getBoundingClientRect(),
            {
              y: IT
            } = this.getPoint();
          return IT >= oT.top - 40 && IT <= oT.bottom + 40 ? TT : null
        }
        handBackToFocus(TT) {
          if (!mz()) return !1;
          const oT = cT.I.find((oT => TT.wasPressed(oT)));
          return !!oT && (IT = this.getHandoff(oT), Lz = Bz(IT), Sz = null, xz.lock(), DT.c.handOffHeldInput(), !0);
          var IT
        }
        getAssistContext() {
          const TT = this.interactive;
          if (null === TT || void 0 === TT || !TT.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const oT = TT.getBoundingClientRect();
          if (oT.width > .4 * window.innerWidth || oT.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const IT = (0, LT.j)().cursorMagnetism && !(0, GT.c)(TT) && !TT.closest("[data-pad-slider]"),
            iT = this.magnet && this.magnet !== TT && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : oT;
          return {
            overInteractive: !0,
            magnetTarget: IT ? {
              x: iT.left + iT.width / 2,
              y: iT.top + iT.height / 2
            } : null
          }
        }
        updateHit(TT) {
          this.lastHitTestMs = performance.now();
          const oT = this.getPoint(),
            IT = document.elementFromPoint(oT.x, oT.y),
            iT = IT && !(0, rT.o)(IT) && (TT => {
              var oT;
              const IT = kz();
              return !(IT && !IT.root.contains(TT) && !TT.closest(".tooltip-container")) || !(null !== (oT = document.getElementById("root")) && void 0 !== oT && oT.contains(TT))
            })(IT) ? IT : null;
          if (iT !== this.hit) return vo(this.hit, iT, oT), this.hit = iT, void this.setInteractive(iT ? (TT => {
            const oT = TT.closest(ZW);
            if (oT) {
              var IT, iT;
              const TT = null !== (IT = null === (iT = oT.parentElement) || void 0 === iT ? void 0 : iT.closest("[data-pad-focusable]")) && void 0 !== IT ? IT : oT;
              return So(TT) ? {
                element: null,
                magnet: null
              } : {
                element: TT,
                magnet: oT
              }
            }
            const zT = sW(TT);
            return {
              element: zT,
              magnet: zT
            }
          })(iT) : {
            element: null,
            magnet: null
          });
          TT && iT && vo(iT, iT, oT)
        }
        setInteractive(TT) {
          let {
            element: oT,
            magnet: IT
          } = TT;
          this.interactive = oT, this.magnet = IT
        }
        clearHover() {
          this.hit && vo(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const TT = this.hit;
          if (!TT || ao(TT)) return {
            kind: "ignored"
          };
          const oT = (0, uz.c)(TT),
            IT = TT.closest("[data-pad-slider]");
          return oT && IT ? {
            kind: "slider",
            slider: IT,
            adjuster: oT
          } : (eo(TT, this.getPoint()), {
            kind: "pointer",
            target: TT
          })
        }
        applySliderFraction(TT) {
          var oT;
          const IT = TT.slider.getBoundingClientRect(),
            iT = IT.height > IT.width,
            zT = null === (oT = TT.slider.querySelector("[data-pad-slider-handle]")) || void 0 === oT ? void 0 : oT.getBoundingClientRect(),
            kT = zT ? iT ? zT.height : zT.width : 0,
            WT = (iT ? IT.height : IT.width) - kT;
          if (WT <= 0) return;
          const XT = iT ? IT.bottom - kT / 2 - this.state.y : this.state.x - IT.left - kT / 2;
          TT.adjuster.setFraction(Math.max(0, Math.min(1, XT / WT)))
        }
        updateConfirm(TT, oT) {
          TT.wasPressed(oT) && (this.press = TT.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const IT = this.press;
          if (!IT) return;
          if (TT.isHeld(oT)) return "slider" === IT.kind && this.applySliderFraction(IT), void this.updateRepeat();
          this.press = null;
          const iT = this.repeated;
          if (this.endRepeat(), !TT.wasReleased(oT)) return void this.endPressWithoutClick(IT);
          const zT = this.getPoint(),
            kT = this.hit;
          if ("slider" === IT.kind && IT.adjuster.endDrag(), "pointer" === IT.kind) {
            const TT = null !== kT && void 0 !== kT ? kT : IT.target.isConnected ? IT.target : null;
            TT && Ro(TT, zT);
            const oT = kT && IT.target.isConnected && !iT ? ((TT, oT) => {
              for (let IT = TT; IT; IT = IT.parentElement)
                if (IT.contains(oT)) return IT;
              return null
            })(IT.target, kT) : null;
            oT && (bz.noteCursorActivation(oT), (0, rT.h)(oT, new MouseEvent("click", wo(zT, 0, 0))), Uo(oT), go(oT) && Eo(oT))
          }
        }
        beginRepeat() {
          var TT, oT, IT;
          const iT = null !== (TT = null === (oT = this.hit) || void 0 === oT ? void 0 : oT.closest("[data-pad-repeat]")) && void 0 !== TT ? TT : null;
          this.repeatStop = iT, this.repeatKey = null !== (IT = null === iT || void 0 === iT ? void 0 : iT.getAttribute("data-pad-repeat")) && void 0 !== IT ? IT : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const TT = this.repeatStop;
          if (!TT) return;
          const oT = this.hit;
          TT.isConnected && !So(TT) && TT.getAttribute("data-pad-repeat") === this.repeatKey && oT && TT.contains(oT) ? TT.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, bz.noteCursorActivation(TT), (0, rT.h)(TT, new MouseEvent("click", wo(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(TT) {
          "slider" === TT.kind && TT.adjuster.endDrag(), "pointer" === TT.kind && TT.target.isConnected && Ro(TT.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(TT, oT) {
          TT.wasPressed(oT) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !TT.isHeld(oT) && (this.secondaryArmed = !1, TT.wasReleased(oT) && this.hit && uo(this.hit, this.getPoint(), 2))
        }
        updateScroll(TT, oT) {
          const IT = RT(TT.rightStick, TT.dtMs);
          if (0 === IT.x && 0 === IT.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + IT.x,
            y: this.scrollRemainder.y + IT.y
          };
          const iT = Math.trunc(this.scrollRemainder.x),
            zT = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - iT,
            y: this.scrollRemainder.y - zT
          };
          const kT = this.hit;
          if (!kT) return;
          let WT = !1;
          if (0 !== zT) {
            const TT = tW(kT, "y", zT > 0 ? 1 : -1, oT);
            TT && (TT.scrollBy({
              top: zT,
              behavior: "instant"
            }), WT = !0)
          }
          if (0 !== iT) {
            const TT = tW(kT, "x", iT > 0 ? 1 : -1, oT);
            TT && (TT.scrollBy({
              left: iT,
              behavior: "instant"
            }), WT = !0)
          }
          WT && (this.lastHitTestMs = -1 / 0)
        }
        XM() {
          qo.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      pW = () => {
        const TT = (0, QT.useMemo)((() => new lT), []),
          oT = (0, xT.z)();
        return (0, QT.useEffect)((() => {
          if (!oT) return;
          let IT = 0,
            iT = {
              of: null,
              atMs: 0,
              list: []
            };
          const zT = document.getElementsByClassName(ez),
            kT = TT => {
              for (const oT of [...zT]) oT !== TT && oT.classList.remove(ez)
            },
            WT = () => {
              var oT;
              IT = requestAnimationFrame(WT);
              const zT = (() => {
                const TT = bz.getFocused();
                if (bz.isActive() && null !== TT && void 0 !== TT && TT.isConnected) return TT;
                const oT = GW.getHighlighted();
                return null !== oT && void 0 !== oT && oT.isConnected ? oT : null
              })();
              kT(zT), zT && !zT.classList.contains(ez) && zT.classList.add(ez);
              const XT = null !== (oT = null === zT || void 0 === zT ? void 0 : zT.closest("[data-pad-reticle-box]")) && void 0 !== oT ? oT : zT;
              TT.show(XT ? ((TT, oT) => {
                let IT = TT.left,
                  iT = TT.top,
                  zT = TT.right,
                  kT = TT.bottom;
                for (const WT of oT) {
                  if (!WT) continue;
                  const TT = aT(WT);
                  IT = Math.max(IT, TT.left), iT = Math.max(iT, TT.top), zT = Math.min(zT, TT.right), kT = Math.min(kT, TT.bottom)
                }
                return zT <= IT || kT <= iT ? null : {
                  left: IT,
                  top: iT,
                  width: zT - IT,
                  height: kT - iT
                }
              })(XT.getBoundingClientRect(), (TT => {
                const oT = performance.now();
                return (iT.of !== TT || oT - iT.atMs > 500) && (iT = {
                  of: TT,
                  atMs: oT,
                  list: [ET(TT, "y"), ET(TT, "x")]
                }), iT.list
              })(XT)) : null)
            };
          return IT = requestAnimationFrame(WT), () => {
            cancelAnimationFrame(IT), kT(null), TT.hide()
          }
        }), [oT, TT]), (0, nT.jsx)(sT, {
          placer: TT,
          className: "PadFocusRing"
        })
      },
      bW = (TT, oT) => {
        TT.style.transform = `translate3d(${oT.x}px, ${oT.y}px, 0)`, TT.classList.toggle("Visible", oT.visible), TT.classList.toggle("Pressed", oT.pressed)
      },
      yW = () => {
        const TT = (0, QT.useRef)(null);
        return (0, QT.useEffect)((() => {
          const oT = qo.subscribe((oT => {
            TT.current && bW(TT.current, oT)
          }));
          return TT.current && bW(TT.current, qo.get()), oT
        }), []), (0, nT.jsx)("div", {
          ref: TT,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, nT.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      NW = "#ncmp__modal.ncmp__active",
      PW = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(NW) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(NW),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      dW = "PadOverThirdParty",
      VW = new Set(PW.map((TT => TT.id))),
      TX = () => {
        const TT = PW.map((TT => {
            let {
              id: oT,
              find: IT,
              startSelectors: iT
            } = TT;
            return (0, Pi.n)({
              id: oT,
              kind: "popup",
              getRoot: () => {
                const TT = IT(),
                  oT = TT ? ((TT, oT) => {
                    var IT;
                    for (const iT of oT) {
                      const oT = TT.querySelector(iT);
                      if (oT) return oT
                    }
                    return null !== (IT = [...TT.querySelectorAll("button")].find((TT => !TT.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== IT ? IT : null
                  })(TT, iT) : null;
                if (TT && oT && !oT.hasAttribute("data-pad-default-focus")) {
                  for (const oT of TT.querySelectorAll("[data-pad-default-focus]")) oT.removeAttribute("data-pad-default-focus");
                  for (const oT of TT.querySelectorAll("[data-pad-hint-bar-avoid]")) oT.removeAttribute("data-pad-hint-bar-avoid");
                  oT.setAttribute("data-pad-default-focus", ""), ((TT, oT) => {
                    let IT = TT;
                    for (let iT = TT.parentElement; iT && oT.contains(iT) && !(iT.getBoundingClientRect().height >= window.innerHeight / 2); iT = iT.parentElement) IT = iT;
                    return IT
                  })(oT, TT).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return TT
              },
              close: null,
              memoryKey: null
            })
          })),
          oT = document.documentElement,
          IT = WT.g.onFrame((() => {
            const TT = (0, xT.l)() ? kz() : null,
              IT = !!TT && (iT = TT.layer, VW.has(iT.id));
            var iT;
            oT.classList.contains(dW) !== IT && oT.classList.toggle(dW, IT)
          }));
        return () => {
          for (const oT of TT) oT();
          IT(), oT.classList.remove(dW)
        }
      },
      oX = "PadLargePointer",
      IX = () => {
        (0, QT.useEffect)((() => {
          const TT = (0, rT.m)(document.body),
            oT = bz.install(),
            IT = GW.install(),
            iT = TX();
          return () => {
            TT(), oT(), IT(), iT()
          }
        }), []);
        const {
          largePointer: TT
        } = (0, LT.r)(), oT = (0, CW.p)() && TT;
        return (0, QT.useEffect)((() => {
          if (oT) return document.documentElement.classList.add(oX), () => {
            document.documentElement.classList.remove(oX)
          }
        }), [oT]), (0, XT.createPortal)((0, nT.jsxs)(nT.Fragment, {
          children: [(0, nT.jsx)(qW, {}), (0, nT.jsx)(pW, {}), (0, nT.jsx)(yW, {})]
        }), document.body)
      };
    var iX = IT(8223),
      zX = IT(8238),
      kX = IT(8229);
    IT(8244);
    const WX = (TT, oT) => {
        const [IT, iT] = (0, QT.useState)(!1), [zT, kT] = (0, QT.useState)(null), WT = (0, QT.useRef)(null), XT = (0, QT.useCallback)((TT => {
          WT.current = TT, kT(TT)
        }), []), BT = (0, QT.useCallback)((() => {
          iT(!1), XT(null)
        }), [XT]), ST = (0, QT.useCallback)((() => {
          iT(!0)
        }), []), DT = (0, QT.useCallback)(((TT, oT) => {
          XT((0, kX.H)(TT, oT, WT.current))
        }), [XT]);
        (0, QT.useLayoutEffect)((() => (oT(IT), (0, jW.x)(TT, IT), FT.h.XM(jW.o), () => {
          oT(!1), (0, jW.x)(TT, !1), FT.h.XM(jW.o)
        })), [IT, TT, oT]), (0, Lk.g)("appManagerUpdated|activeInputDevice", (TT => {
          "gamepad" !== TT && BT()
        })), (0, Lk.g)("appManagerUpdated|gameState", (TT => {
          "inGame" !== TT && BT()
        }));
        const LT = () => {
          (0, Ii.t)() && BT()
        };
        return (0, Lk.g)("appManagerUpdated|openEverythingMenuName", LT), (0, Lk.g)("appManagerUpdated|openInGameMenuName", LT), {
          open: IT,
          picked: zT,
          pickedRef: WT,
          show: ST,
          aim: DT,
          close: BT
        }
      },
      XX = TT => {
        let {
          className: oT,
          slotCount: IT,
          picked: iT,
          slotLabel: zT,
          renderSlot: kT,
          centre: WT
        } = TT;
        const XT = Array.from({
          length: IT
        }, ((TT, oT) => oT));
        return (0, nT.jsx)("div", {
          className: HT()("EmoteWheelOverlay PadRadialWheel", oT),
          children: (0, nT.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * kX.p + "rem",
              height: 2 * kX.p + "rem"
            },
            children: [(0, nT.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${kX.n} ${kX.n}`,
              children: [XT.map((TT => (0, nT.jsx)("path", {
                d: (0, kX.t)(TT, IT, kX.g, kX.h, kX.l),
                className: HT()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: TT === iT
                }),
                "aria-label": zT(TT)
              }, TT))), (0, nT.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: kX.g,
                cy: kX.g,
                r: kX.l
              }), (0, nT.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: kX.g,
                cy: kX.g,
                r: kX.h
              }), null !== iT && (0, nT.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, kX.t)(iT, IT, kX.g, kX.h, kX.l)
              })]
            }), XT.map((TT => {
              const oT = (0, kX.B)(TT, IT);
              return (0, nT.jsx)("div", {
                className: HT()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: TT === iT
                }),
                style: {
                  left: `calc(50% + ${kX.d*Math.cos(oT)}rem)`,
                  top: `calc(50% + ${kX.d*Math.sin(oT)}rem)`
                },
                "aria-hidden": !0,
                children: kT(TT)
              }, TT)
            })), (0, nT.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: WT
            })]
          })
        })
      },
      BX = WW.length,
      FX = () => {
        const {
          t: TT
        } = (0, zT.t)(), oT = WX("chat", Ri.r), IT = (0, QT.useMemo)((() => WW.map((oT => TT(oT)))), [TT]);
        return (0, Lk.g)(Ri.n, (() => {
          oT.open || (0, iX.g)() || (0, zX.p)() || "inGame" !== BT.c.get("gameState") || (0, Ii.t)() || !(0, mi.b)() || oT.show()
        })), (0, Lk.g)(Ri.e, (TT => {
          oT.open && oT.aim(TT, BX)
        })), (0, Lk.g)(Ri.m, (() => {
          var TT;
          if (!oT.open) return;
          const iT = oT.pickedRef.current;
          null !== iT ? XW.claim(performance.now()) && (oT.close(), null === (TT = (0, mi.b)()) || void 0 === TT || TT.sendLine(IT[iT])) : oT.close()
        })), (0, Lk.g)(Ri.i, oT.close), oT.open ? (0, nT.jsx)(XX, {
          className: "QuickChatWheel",
          slotCount: BX,
          picked: oT.picked,
          slotLabel: TT => IT[TT],
          renderSlot: TT => IT[TT],
          centre: null !== oT.picked ? IT[oT.picked] : TT("controller:quickChatPick")
        }) : null
      },
      SX = () => {
        const {
          t: TT
        } = (0, zT.t)(), oT = WX("actionButton", zX.r), [IT, iT] = (0, QT.useState)([]);
        if ((0, Lk.g)(zX.k, (TT => {
            oT.open || (0, iX.g)() || (0, Ri.c)() || "inGame" !== BT.c.get("gameState") || (0, Ii.t)() || (iT(TT), oT.show())
          })), (0, Lk.g)(zX.e, (TT => {
            oT.open && oT.aim(TT, IT.length)
          })), (0, Lk.g)(zX.h, (() => {
            if (!oT.open) return;
            const TT = oT.pickedRef.current;
            oT.close(), null !== TT && FT.h.XM(zX.n, IT[TT])
          })), (0, Lk.g)(zX.f, oT.close), !oT.open) return null;
        const kT = null !== oT.picked ? IT[oT.picked] : null;
        return (0, nT.jsx)(XX, {
          className: "ActionWheel",
          slotCount: IT.length,
          picked: oT.picked,
          slotLabel: oT => {
            const iT = IT[oT];
            return "reload" === iT.kind ? TT("controller:gameplayReload") : "customButton" === iT.kind ? iT.description || iT.icon : "touchButton" === iT.kind && "string" === typeof iT.label ? iT.label : ""
          },
          renderSlot: TT => (0, nT.jsx)(hk, {
            action: IT[TT]
          }),
          centre: kT ? (0, nT.jsx)(hk, {
            action: kT
          }) : TT("controller:actionWheelPick")
        })
      };
    var DX = IT(90);
    const LX = () => ((0, QT.useEffect)((() => {
        var TT, oT;
        const IT = (0, rT.m)(document.getElementById("root")),
          iT = (0, xT.h)(),
          zT = (() => {
            const TT = [FT.h.subscribe(Nz.i, (() => {
                Tk("blockBreak")
              })), FT.h.subscribe("damagedByOtherPlayer", (() => {
                Tk("damage")
              })), FT.h.subscribe("yourAttackHit", (TT => {
                let {
                  hitSelf: oT
                } = TT;
                oT || Tk("hit")
              }))],
              oT = WT.g.onActivePadChanged((TT => {
                TT && Tk("connect")
              }));
            return () => {
              for (const oT of TT) FT.h.unsubscribe(oT);
              oT()
            }
          })(),
          kT = (() => {
            const TT = new Xk({
              getVisitId: Wk.e,
              peekVisitId: Wk.peekVisitSessionId,
              readReportedVisitId: () => {
                const TT = kk.h.getItem(Bk);
                return "string" === typeof TT ? TT : null
              },
              writeReportedVisitId: TT => {
                kk.h.setItem(Bk, TT)
              },
              isPadActive: xT.l,
              getPadFamily: () => {
                var TT, oT;
                return null !== (TT = null === (oT = WT.g.getActivePad()) || void 0 === oT ? void 0 : oT.family) && void 0 !== TT ? TT : null
              },
              canReport: ik.h,
              getInputType: zk.b,
              Bc: ik.o
            });
            let oT = 0,
              IT = null;
            const iT = zT => {
                null === IT && ("notReady" !== TT.check(zT) || null !== IT || oT >= 20 || (oT++, IT = setTimeout((() => {
                  IT = null, iT(!1)
                }), 3e3)))
              },
              zT = FT.h.subscribe("appManagerUpdated|activeInputDevice", (() => {
                iT(!0)
              })),
              kT = (0, Wk.j)((() => {
                oT = 0, iT(!0)
              }));
            return () => {
              FT.h.unsubscribe(zT), kT(), null !== IT && clearTimeout(IT)
            }
          })(),
          XT = WT.g.onFrame(((TT, oT) => {
            const IT = (0, xT.n)(TT);
            DT.c.dispatch(TT, oT, IT)
          }));
        let ST = null !== (TT = null === (oT = WT.g.getActivePad()) || void 0 === oT ? void 0 : oT.family) && void 0 !== TT ? TT : null;
        const cT = WT.g.onActivePadChanged((TT => {
            var oT, IT;
            (DT.c.reset(), (0, xT.t)(), FT.h.XM(WT.d, TT), (null !== (oT = null === TT || void 0 === TT ? void 0 : TT.family) && void 0 !== oT ? oT : null) !== ST) && (ST = null !== (IT = null === TT || void 0 === TT ? void 0 : TT.family) && void 0 !== IT ? IT : null, FT.h.XM(LT.c, (0, LT.j)()));
            !TT && (0, xT.l)() && (0, xT.v)(BT.c.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          KT = () => {
            "visible" !== document.visibilityState && DT.c.clear()
          },
          MT = () => {
            DT.c.clear()
          };
        document.addEventListener("visibilitychange", KT), window.addEventListener("blur", MT), WT.g.start(), (0, Ik.j)();
        const AT = null;
        return () => {
          IT(), iT(), zT(), kT(), XT(), cT(), document.removeEventListener("visibilitychange", KT), window.removeEventListener("blur", MT), WT.g.stop(), null === AT || void 0 === AT || AT()
        }
      }), []), (0, nT.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, nT.jsx)(Ek, {}), (0, nT.jsx)(Ok, {}), (0, nT.jsx)(Hk, {}), (0, nT.jsx)(EW, {}), (0, nT.jsx)(IX, {}), (0, nT.jsx)(FX, {}), (0, nT.jsx)(SX, {})]
      })),
      xX = () => DX.featureFlags.useControllerSupport ? (0, nT.jsx)(LX, {}) : null;
    var cX = IT(7638),
      KX = IT(8254);
    const MX = new Set(Ik.h),
      rX = TT => `${KX.i}${(0,LT.m)()}/${TT}`,
      AX = TT => {
        if (!(0, KX.f)(TT)) return null;
        const [oT, IT] = TT.slice(KX.i.length).split("/");
        return (0, cX.g)(oT) && MX.has(IT) ? (0, Ik.g)(oT, IT) : null
      };
    var gX = IT(8258);
    const hX = () => {
        const {
          t: TT
        } = (0, zT.t)(), oT = (0, xT.z)(), {
          gameState: IT,
          isUiHidden: iT
        } = (0, BT.k)(["gameState", "isUiHidden"]), {
          hideButtonHints: kT,
          sneakMode: WT
        } = (0, LT.r)(), [XT, FT] = (0, QT.useState)(gX.c);
        return (0, Lk.g)(vk.v, FT), oT && !iT && "inGame" === IT && XT ? (0, nT.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!kT && (0, nT.jsx)(Ak, {
            glyph: (0, ST.k)("toggle" === WT ? "sneak" : "sneakToggle")
          }), (0, nT.jsx)("span", {
            children: TT("controller:gameplaySneaking")
          })]
        }) : null
      },
      wX = 12,
      mX = TT => {
        let {
          trigger: oT,
          className: IT,
          children: iT
        } = TT;
        const zT = (0, QT.useRef)(null);
        return (0, QT.useEffect)((() => {
          let TT = 0;
          const IT = ET(oT, "y"),
            iT = () => {
              TT = requestAnimationFrame(iT);
              const kT = zT.current;
              if (!kT || null === oT || void 0 === oT || !oT.isConnected) return;
              const {
                left: WT,
                top: XT
              } = function(TT, oT, IT) {
                let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const kT = TT.left + TT.width / 2,
                  WT = Math.max(wX, IT.width - wX - oT.width),
                  XT = Math.min(Math.max(kT - oT.width / 2, wX), WT),
                  BT = IT.height - iT;
                let FT = 0,
                  ST = BT;
                if (zT) {
                  const TT = Math.max(0, zT.top),
                    iT = Math.min(BT, zT.bottom);
                  iT - TT >= Math.max(IT.height / 2, oT.height + 24) && (FT = TT, ST = iT)
                }
                const DT = TT.top + TT.height / 2 < (FT + ST) / 2 ? ST - wX - oT.height : FT + wX;
                return {
                  left: XT,
                  top: Math.max(wX, DT)
                }
              }(oT.getBoundingClientRect(), {
                width: kT.offsetWidth,
                height: kT.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(YW)) || 0, null !== IT && void 0 !== IT && IT.isConnected ? IT.getBoundingClientRect() : null);
              kT.style.transform = `translate3d(${Math.round(WT)}px, ${Math.round(XT)}px, 0)`, kT.style.visibility = "visible"
            };
          return iT(), () => {
            cancelAnimationFrame(TT)
          }
        }), [oT]), (0, nT.jsx)("div", {
          ref: zT,
          className: IT,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: iT
        })
      };
    var eX = IT(1055),
      RX = IT(8260),
      uX = IT(1408),
      vX = IT(8267),
      EX = IT(8276);
    const fX = {
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
      CX = () => {
        const {
          t: TT
        } = (0, zT.t)(), oT = (0, xT.z)(), IT = (0, RX.d)(), iT = (0, ak.g)("_tasks"), kT = (0, ak.g)("_availableLeaderboards");
        if (!oT) return null;
        const WT = (TT => {
          let {
            hasShop: oT,
            hasTasksOrLeaderboards: IT,
            canInvite: iT
          } = TT;
          const zT = [];
          return oT && zT.push("shop"), IT && zT.push("tasks"), iT && zT.push("invite"), zT.push("leave"), zT
        })({
          hasShop: IT,
          hasTasksOrLeaderboards: !(!iT && !kT),
          canInvite: !!DX.featureFlags.canUseInviteLinks
        });
        return (0, nT.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: WT.map((oT => {
            const {
              icon: IT,
              labelKey: iT
            } = fX[oT], zT = "leave" === oT ? uX.C : uX.e;
            return (0, nT.jsx)(zT, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (TT => {
                  switch (TT) {
                    case "shop":
                      return FT.h.XM(EX.k), void BT.c.set({
                        openEverythingMenuName: oi.q.SHOP
                      });
                    case "tasks":
                      return void FT.h.XM("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void FT.h.XM("toggleMenu", "inviteLink");
                    case "leave":
                      (0, vX.b)()
                  }
                })(oT)
              },
              children: (0, nT.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, nT.jsx)(eX.e, {
                  name: IT
                }), (0, nT.jsx)("span", {
                  children: TT(iT)
                })]
              })
            }, oT)
          }))
        })
      };
    var jX = IT(1794);
    const JX = cT.E,
      UX = ["forward", "backward", "left", "right", "sprint"],
      aX = TT => TT.ctrlKey || TT.altKey || "Alt" === TT.key || "ArrowUp" === TT.key || "ArrowDown" === TT.key || "Tab" === TT.code || "/" === TT.key || "Slash" === TT.code;
    class YX {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(cT.W).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(TT) {
        this.armed = TT
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || oT ? !TT.repeat && this.swallowedKeys.delete(TT.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(TT.code),
          continues: !1
        } : "Escape" === TT.key || TT.repeat && !this.swallowedKeys.has(TT.code) ? {
          swallow: !1,
          continues: !1
        } : IT ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(TT.code), {
          swallow: !0,
          continues: (0, xT.k)(TT)
        })
      }
      onKeyUp(TT) {
        return this.swallowedKeys.delete(TT.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const zT = (0, cT.y)(TT.values, this.previousHeld),
          kT = null === IT ? -1 : (0, cT.q)(IT),
          WT = kT >= 0 && zT[kT] && !this.previousHeld[kT],
          XT = zT.some(((TT, oT) => TT && !this.previousHeld[oT] && oT !== kT)),
          BT = Math.hypot(TT.leftStick.x, TT.leftStick.y) >= JX,
          FT = Math.hypot(TT.rightStick.x, TT.rightStick.y) >= JX,
          ST = BT && !this.leftStickWasPressed || FT && !this.rightStickWasPressed;
        this.previousHeld = zT, this.leftStickWasPressed = BT, this.rightStickWasPressed = FT;
        let DT = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, DT = !0);
        const LT = !oT && WT && !iT,
          xT = !LT && this.armed && !oT && (XT || ST);
        return (LT || xT) && (this.consumeNextFrame = !0, this.consumeAfterContinue = xT, DT = !0), {
          continues: xT,
          back: LT,
          consumeHeld: DT
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const QX = new Set([...jX.p, ...jX.G]),
      OX = TT => ((TT, oT, IT) => {
        const iT = Object.keys(oT).filter((iT => !IT.has(iT) && oT[iT].includes(TT)));
        return iT.length > 0 && iT.every((TT => UX.includes(TT)))
      })(TT, jX.z, QX),
      HX = (TT, oT, IT) => {
        const iT = new YX,
          zT = TT => {
            if (!TT.isTrusted) return;
            const {
              swallow: IT,
              continues: zT
            } = iT.onKeyDown(TT, !(0, xT.C)(TT) || (0, yz.h)() || (0, Ii.t)(), OX(TT.code));
            IT && (TT.stopImmediatePropagation(), aX(TT) && TT.preventDefault()), zT && ((0, xT.v)("keyboardMouse"), oT())
          },
          kT = TT => {
            TT.isTrusted && iT.onKeyUp(TT) && (TT.stopImmediatePropagation(), aX(TT) && TT.preventDefault())
          },
          XT = () => {
            iT.forgetKeys()
          };
        window.addEventListener("keydown", zT, !0), window.addEventListener("keyup", kT, !0), window.addEventListener("blur", XT);
        const BT = WT.g.onFrame((TT => {
            const zT = DT.c.getActiveConsumerName(),
              kT = IT(),
              WT = kT ? (0, ST.k)("menuBack") : null,
              XT = null !== zT && "gameplay" !== zT,
              {
                continues: BT,
                back: FT,
                consumeHeld: cT
              } = iT.onPadFrame(TT, XT, WT, (0, xT.m)(TT));
            if (cT) {
              const TT = (0, LT.j)().swapSticks ? "right" : "left";
              DT.c.consumeAllHeld(iT.consumeLeavesMoveStick() ? TT : null)
            }
            FT ? null === kT || void 0 === kT || kT() : BT && oT()
          })),
          FT = (0, yz.l)(`pressToContinue:${TT}`, (() => iT.blocksGameplay()));
        return {
          setArmed: TT => {
            iT.setArmed(TT)
          },
          dispose: () => {
            window.removeEventListener("keydown", zT, !0), window.removeEventListener("keyup", kT, !0), window.removeEventListener("blur", XT), BT(), FT()
          }
        }
      };
    var nX = IT(4481),
      qX = IT(2980),
      ZX = IT(2695),
      lX = IT(7643);
    const sX = TT => {
        let {
          text: oT
        } = TT;
        return (0, nT.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: oT
        })
      },
      tX = TT => {
        let {
          label: oT,
          hint: IT,
          options: iT,
          value: kT,
          onChange: WT
        } = TT;
        const {
          t: XT
        } = (0, zT.t)();
        return (0, nT.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, nT.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, nT.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, nT.jsx)("div", {
                className: "SliderText",
                children: oT
              }), IT && (0, nT.jsx)("div", {
                className: "ControllerSettingsHint",
                children: IT
              })]
            }), (0, nT.jsx)(ZX.d, {
              options: iT.map((TT => ({
                label: "label" in TT ? TT.label : XT(TT.labelKey),
                value: TT.value
              }))),
              value: kT,
              onChange: TT => {
                WT(TT.value)
              }
            })]
          })
        })
      },
      GX = TT => {
        let {
          settingKey: oT,
          label: IT,
          range: iT,
          format: zT
        } = TT;
        const kT = (0, LT.r)();
        return (0, nT.jsx)(nX.k, {
          name: IT,
          min: iT.min,
          max: iT.max,
          step: iT.step,
          padStep: iT.step,
          initValue: kT[oT],
          format: zT,
          onChange: TT => {
            (0, LT.p)({
              [oT]: (0, lX.x)(TT, iT)
            })
          }
        })
      };
    var pX = IT(8280),
      bX = IT(8283);
    const yX = TT => TT instanceof DOMException && ("SecurityError" === TT.name || "NotAllowedError" === TT.name),
      NX = TT => {
        const [oT] = [...TT.controllers].sort(((TT, oT) => bX.p[TT] - bX.p[oT]));
        return bX.n[oT]
      },
      PX = TT => {
        (0, pX.e)().allowPhoneMotion().catch((oT => {
          TT && yX(oT) ? TT() : console.warn("Could not enable the motion sensor", oT)
        }))
      },
      dX = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      VX = TT => {
        let {
          status: oT
        } = TT;
        const {
          t: IT
        } = (0, zT.t)(), [iT, kT] = (0, QT.useState)(null), WT = `${oT.controllers.join(",")}|${oT.phoneMotion}`;
        (0, QT.useEffect)((() => {
          kT(null)
        }), [WT]);
        const XT = () => {
          (0, pX.e)().connectController().then((TT => {
            kT(TT > 0 ? "openFailed" : null)
          })).catch((TT => {
            yX(TT) ? kT("needsClick") : console.warn("Could not connect motion controller", TT)
          }))
        };
        if (oT.hidSupported) {
          let TT = IT("controller:settingsGyroConnectHint");
          return "needsClick" === iT ? TT = IT("controller:settingsGyroConnectNeedsClick") : "openFailed" === iT ? TT = IT("controller:settingsGyroOpenFailed") : oT.controllers.length > 0 && (TT = IT("controller:settingsGyroConnected", {
            name: NX(oT)
          })), (0, nT.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, nT.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, nT.jsx)("div", {
                className: "ControllerSettingsHint",
                children: TT
              }), (0, nT.jsx)(uX.e, {
                onClick: XT,
                children: IT("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === oT.phoneMotion) return (0, nT.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, nT.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === iT && (0, nT.jsx)("div", {
              className: "ControllerSettingsHint",
              children: IT("controller:settingsGyroAllowNeedsTap")
            }), (0, nT.jsx)(uX.e, {
              onClick: () => {
                PX((() => {
                  kT("needsTap")
                }))
              },
              children: IT("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const BT = dX[oT.phoneMotion];
        return BT ? (0, nT.jsx)("div", {
          className: "ControllerSettingsHint",
          children: IT(BT)
        }) : null
      },
      TB = () => {
        const {
          t: TT
        } = (0, zT.t)(), oT = (0, LT.r)(), IT = (0, pX.g)(), iT = (0, xT.B)(), kT = !IT.hidSupported && IT.phoneSupported && !IT.padConnected, WT = (IT.hidSupported || IT.phoneSupported) && !kT, XT = (0, ST.k)("pause");
        return (0, nT.jsxs)(nT.Fragment, {
          children: [(0, nT.jsx)(sX, {
            text: TT("controller:settingsGyro")
          }), kT && (0, nT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT("controller:settingsGyroPhoneNeedsController")
          }), !WT && !kT && (0, nT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT(IT.hidBlocked || IT.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), WT && (0, nT.jsx)(nX.e, {
            label: TT(IT.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: oT.gyroAiming,
            onClick: TT => {
              var oT, IT;
              (0, LT.p)({
                gyroAiming: TT
              });
              const iT = null === (oT = null === (IT = navigator.userActivation) || void 0 === IT ? void 0 : IT.isActive) || void 0 === oT || oT;
              if (!TT || !iT) return;
              const zT = (0, pX.e)(),
                kT = zT.getStatus();
              kT.hidSupported ? zT.connectControllerIfNoneGranted().catch((TT => {
                console.warn("Motion controller picker unavailable", TT)
              })) : "needsPermission" === kT.phoneMotion && PX()
            },
            circleInfoText: TT(IT.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), WT && IT.hidSupported && (0, nT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT("controller:settingsGyroSteamHint")
          }), WT && oT.gyroAiming && (0, nT.jsxs)(nT.Fragment, {
            children: [(0, nT.jsx)(VX, {
              status: IT
            }), (0, nT.jsx)(GX, {
              settingKey: "gyroSensitivity",
              label: TT("controller:settingsGyroSensitivity"),
              range: lX.N,
              format: lX.H
            }), (0, nT.jsx)(tX, {
              label: TT("controller:settingsGyroActivation"),
              hint: "aiming" === oT.gyroActivation && (0, nT.jsx)(qX.d, {
                text: TT("controller:settingsGyroAimingHint", {
                  button: qX.h
                }),
                glyph: (0, ST.k)("use")
              }),
              options: lX.L,
              value: oT.gyroActivation,
              onChange: TT => {
                (0, LT.p)({
                  gyroActivation: TT
                })
              }
            }), "button" === oT.gyroActivation && (0, nT.jsx)(tX, {
              label: TT("controller:settingsGyroButton"),
              hint: TT("controller:settingsGyroButtonHint"),
              options: lX.s.filter((TT => TT !== XT || TT === oT.gyroButton)).map((TT => ({
                label: rk(iT, TT),
                value: TT
              }))),
              value: oT.gyroButton,
              onChange: TT => {
                (0, LT.p)({
                  gyroButton: TT
                })
              }
            })]
          })]
        })
      };
    var oB = IT(1910);
    const IB = () => {
      const {
        t: TT
      } = (0, zT.t)(), oT = (0, LT.r)(), IT = (0, xT.B)();
      return (0, nT.jsxs)(nT.Fragment, {
        children: [(0, nT.jsx)(sX, {
          text: TT("controller:settingsAccessibility")
        }), (0, nT.jsx)(nX.e, {
          label: TT("controller:settingsSwapConfirmBack"),
          checked: (0, ST.L)(oT.swapConfirmBack, IT),
          onClick: TT => {
            (0, LT.p)({
              swapConfirmBack: TT === (0, ST.L)(null, IT) ? null : TT
            }), oB.e.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: TT("controller:settingsSwapConfirmBackInfo")
        }), (0, nT.jsx)(tX, {
          label: TT("controller:settingsButtonRepeat"),
          hint: TT("controller:settingsButtonRepeatHint"),
          options: lX.q,
          value: oT.buttonRepeat,
          onChange: TT => {
            (0, LT.p)({
              buttonRepeat: TT
            })
          }
        }), (0, nT.jsx)(tX, {
          label: TT("controller:settingsTapHoldTime"),
          hint: TT("controller:settingsTapHoldTimeHint"),
          options: lX.pb,
          value: oT.tapHoldTime,
          onChange: TT => {
            (0, LT.p)({
              tapHoldTime: TT
            })
          }
        }), (0, nT.jsx)(tX, {
          label: TT("controller:settingsEmoteButton"),
          hint: TT("wheel" === oT.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: lX.E,
          value: oT.emoteButton,
          onChange: TT => {
            (0, LT.p)({
              emoteButton: TT
            })
          }
        }), (0, nT.jsx)(tX, {
          label: TT("controller:settingsAttackMode"),
          hint: TT("toggle" === oT.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: lX.m,
          value: oT.attackMode,
          onChange: TT => {
            (0, LT.p)({
              attackMode: TT
            })
          }
        }), (0, nT.jsx)(nX.e, {
          label: TT("controller:settingsLargePointer"),
          checked: oT.largePointer,
          onClick: TT => {
            (0, LT.p)({
              largePointer: TT
            })
          },
          circleInfoText: TT("controller:settingsLargePointerInfo")
        })]
      })
    };
    var iB = IT(8290);
    const zB = new class {
        constructor(TT) {
          this.router = TT, this.current = null
        }
        claim(TT, oT) {
          const IT = this.current;
          IT && (this.current = null, IT.release(), IT.onTakenOver());
          const iT = this.router.register({
              ...TT,
              name: "capture"
            }),
            zT = {
              release: iT,
              onTakenOver: oT
            };
          return this.current = zT, () => {
            this.current === zT && (this.current = null), iT()
          }
        }
      }(DT.c),
      kB = TT => {
        (0, QT.useEffect)((() => {
          if (!TT) return;
          const oT = TT();
          let IT = !1;
          const iT = () => {
              IT || (IT = !0, oT.onEnd())
            },
            zT = zB.claim({
              isActive: () => !IT,
              onFrame: TT => {
                oT.onFrame(TT, iT)
              }
            }, iT),
            kT = void 0 === oT.timeoutMs ? void 0 : window.setTimeout(iT, oT.timeoutMs),
            WT = TT => {
              "Escape" === TT.key && (TT.preventDefault(), TT.stopPropagation(), iT())
            };
          return window.addEventListener("keydown", WT, !0), () => {
            IT = !0, zT(), window.clearTimeout(kT), window.removeEventListener("keydown", WT, !0)
          }
        }), [TT])
      },
      WB = TT => {
        let {
          row: oT,
          capturing: IT,
          onCapture: iT,
          holdFillRef: kT,
          onRebind: WT,
          swapped: XT
        } = TT;
        const {
          t: BT
        } = (0, zT.t)();
        if ("fixed" === oT.kind) return (0, nT.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, nT.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, nT.jsx)("div", {
              className: "ControlName",
              children: BT(oT.labelKey)
            }), (0, nT.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, nT.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, nT.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, nT.jsx)(Ak, {
                    glyph: "move" === oT.stick ? (0, ST.t)() : (0, ST.p)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: FT
        } = oT, DT = (0, ST.k)(FT), LT = (0, ST.l)(FT), xT = DT !== LT && (0, ST.e)(FT, LT);
        return (0, nT.jsxs)("div", {
          className: HT()("ControlRow PadControlRow", {
            Capturing: IT
          }),
          children: [(0, nT.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, nT.jsx)("div", {
              className: "ControlName",
              children: BT(lX.j[FT])
            }), (0, nT.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!IT && (0, nT.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, nT.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    iT(FT)
                  },
                  children: (0, nT.jsx)(Ak, {
                    glyph: DT
                  })
                }), xT && (0, nT.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: BT("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    WT(FT, LT)
                  },
                  children: (0, nT.jsx)(eX.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), IT && (0, nT.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, nT.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, nT.jsx)("span", {
                    children: BT("controller:settingsCapturePrompt")
                  }), (0, nT.jsx)("div", {
                    ref: kT,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, nT.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    iT(null)
                  },
                  children: "\xd7"
                })]
              }), IT && (0, nT.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, nT.jsx)(qX.d, {
                  text: BT((0, ST.e)(FT, (0, ST.k)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: qX.h
                  }),
                  glyph: (0, ST.k)("menuBack")
                })
              })]
            })]
          }), XT.map((TT => (0, nT.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, nT.jsx)(qX.d, {
              text: BT("controller:settingsSwapNotice", {
                action: BT(lX.j[TT]),
                button: qX.h
              }),
              glyph: (0, ST.k)(TT)
            })
          }, TT))), IT && (0, nT.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${lX.t}ms`
            }
          })]
        })
      },
      XB = [],
      BB = TT => {
        let {
          layoutSetting: oT
        } = TT;
        const {
          t: IT
        } = (0, zT.t)(), iT = (0, LT.r)();
        (0, xT.B)();
        const kT = (0, QT.useRef)(null),
          [WT, XT] = (0, QT.useState)(null),
          BT = (0, QT.useCallback)(((TT, oT) => {
            const IT = (0, LT.j)().bindings;
            (0, ST.F)(TT, oT);
            const iT = (0, ST.x)(IT, TT);
            XT(iT.length > 0 ? {
              action: TT,
              swapped: iT
            } : null)
          }), []),
          [FT, KT] = ((TT, oT) => {
            const [IT, iT] = (0, QT.useState)(null), zT = (0, QT.useMemo)((() => IT ? () => {
              const zT = (0, ST.k)("menuBack"),
                kT = new lX.e(zT, (0, ST.k)("menuConfirm"), (TT => (0, ST.e)(IT, TT)));
              return {
                onFrame: (iT, WT) => {
                  var XT;
                  const BT = iT.frame.timestampMs,
                    FT = kT.update({
                      ...iT,
                      isDown: TT => (0, cT.O)(iT.frame.values, TT)
                    }, BT);
                  null === (XT = TT.current) || void 0 === XT || XT.style.setProperty("width", 100 * kT.getBindHoldProgress(BT) + "%"), FT && ("bind" === FT.kind ? (DT.c.consumeButton(FT.button), oT(IT, FT.button)) : DT.c.consumeButton(zT), WT())
                },
                onEnd: () => {
                  iT(null)
                },
                timeoutMs: lX.t
              }
            } : null), [IT, TT, oT]);
            return kB(zT), [IT, iT]
          })(kT, BT),
          MT = TT => {
            TT && XT(null), KT(TT)
          };
        (0, QT.useEffect)((() => {
          if (!WT) return;
          const TT = window.setTimeout((() => {
            XT(null)
          }), lX.mb);
          return () => {
            window.clearTimeout(TT)
          }
        }), [WT]);
        const rT = !iT.swapSticks && 0 === Object.keys(iT.bindings).length;
        return (0, nT.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, nT.jsx)("div", {
            className: "SliderText",
            children: IT("controller:settingsRemap")
          }), (0, nT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: IT("controller:settingsRemapHint")
          }), (0, nT.jsx)(uX.C, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: rT,
            onClick: () => {
              MT(null), XT(null), (0, ST.J)()
            },
            children: IT("controller:settingsResetAll")
          }), oT, lX.db.map(((TT, oT) => (0, nT.jsx)(iB.c, {
            title: IT(TT.titleKey),
            defaultOpen: 0 === oT,
            children: TT.rows.map((TT => (0, nT.jsx)(WB, {
              row: TT,
              capturing: "action" === TT.kind && TT.action === FT,
              onCapture: MT,
              holdFillRef: kT,
              onRebind: BT,
              swapped: "action" === TT.kind && (null === WT || void 0 === WT ? void 0 : WT.action) === TT.action ? WT.swapped : XB
            }, "action" === TT.kind ? TT.action : TT.labelKey)))
          }, TT.titleKey)))]
        })
      },
      FB = TT => {
        let {
          deadzone: oT,
          dotRef: IT,
          labelKey: iT
        } = TT;
        const {
          t: kT
        } = (0, zT.t)();
        return (0, nT.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, nT.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, nT.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * oT + "%",
                height: 100 * oT + "%"
              }
            }), (0, nT.jsx)("div", {
              ref: IT,
              className: "ControllerTesterDot"
            })]
          }), (0, nT.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: kT(iT)
          })]
        })
      },
      SB = (TT, oT, IT, iT) => {
        var zT;
        TT && (TT.style.left = 50 + 50 * Math.max(-1, Math.min(1, oT.x)) + "%", TT.style.top = 50 + 50 * Math.max(-1, Math.min(1, oT.y)) + "%", null === (zT = TT.parentElement) || void 0 === zT || zT.classList.toggle("Active", iT || Math.hypot(oT.x, oT.y) > IT))
      },
      DB = TT => {
        const oT = {
            deadzone: TT.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          IT = {
            deadzone: TT.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return TT.swapSticks ? {
          left: IT,
          right: oT
        } : {
          left: oT,
          right: IT
        }
      },
      LB = () => {
        const {
          t: TT
        } = (0, zT.t)(), oT = (() => {
          const [TT, oT] = (0, QT.useState)((() => WT.g.getActivePad()));
          return (0, Lk.g)(WT.d, (() => {
            oT(WT.g.getActivePad())
          })), TT
        })(), IT = DB((0, LT.r)()), iT = (0, QT.useRef)(null), kT = (0, QT.useRef)(null), XT = (0, QT.useRef)([]), BT = (0, QT.useRef)(null), FT = (0, QT.useRef)(null), [xT, KT] = (TT => {
          const [oT, IT] = (0, QT.useState)(!1), iT = (0, QT.useMemo)((() => oT ? () => {
            const oT = (0, ST.k)("menuBack"),
              iT = new lX.f;
            return {
              onFrame: (IT, zT) => {
                var kT;
                const WT = iT.update({
                  pressed: IT.wasPressed(oT),
                  kS: IT.isHeld(oT)
                }, IT.frame.timestampMs);
                null === (kT = TT.current) || void 0 === kT || kT.style.setProperty("width", 100 * WT + "%"), WT >= 1 && (DT.c.consumeButton(oT), zT())
              },
              onEnd: () => {
                IT(!1)
              }
            }
          } : null), [oT, TT]);
          return kB(iT), [oT, IT]
        })(kT);
        (0, QT.useEffect)((() => {
          const TT = TT => {
            for (const IT of cT.X) {
              const oT = (0, cT.q)(IT),
                iT = XT.current[oT];
              if (!iT) continue;
              const zT = TT.values[oT];
              iT.classList.toggle("Pressed", zT >= cT.E), (0, cT.P)(oT) && iT.style.setProperty("--trigger-fill", `${Math.round(100*zT)}%`)
            }
            const oT = DB((0, LT.j)());
            SB(BT.current, TT.leftStick, oT.left.deadzone, TT.values[(0, cT.q)("LS")] >= cT.E), SB(FT.current, TT.rightStick, oT.right.deadzone, TT.values[(0, cT.q)("RS")] >= cT.E)
          };
          return oT || TT((0, cT.C)()), WT.g.onFrame(TT)
        }), [oT]), (0, QT.useEffect)((() => {
          oT || KT(!1)
        }), [oT, KT]), (0, QT.useEffect)((() => {
          var TT;
          xT && (null === (TT = iT.current) || void 0 === TT || TT.scrollIntoView({
            block: "nearest"
          }))
        }), [xT]);
        const MT = lX._.find((TT => TT.value === (null === oT || void 0 === oT ? void 0 : oT.family)));
        return (0, nT.jsxs)("div", {
          ref: iT,
          className: HT()("SettingBox ControllerTester", {
            Testing: xT
          }),
          children: [(0, nT.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, nT.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [oT && (0, nT.jsx)("div", {
                children: TT("controller:settingsTesterFamily", {
                  family: MT ? TT(MT.labelKey) : oT.family
                })
              }), oT && (0, nT.jsx)("div", {
                className: "ControllerTesterPadId",
                children: oT.id
              }), !oT && (0, nT.jsx)("div", {
                children: TT("controller:settingsTesterNoPad")
              })]
            }), (oT || xT) && (0, nT.jsx)(uX.e, {
              className: "ControllerTesterToggle",
              onClick: () => {
                KT(!xT)
              },
              children: TT(xT ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), oT && !xT && (0, nT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT("controller:settingsTesterHint")
          }), xT && (0, nT.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, nT.jsx)(qX.d, {
              text: TT("controller:settingsTesterTesting", {
                button: qX.h
              }),
              glyph: (0, ST.k)("menuBack")
            }), (0, nT.jsx)("div", {
              ref: kT,
              className: "ControllerTesterExitFill"
            })]
          }), (0, nT.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, nT.jsx)(FB, {
              deadzone: IT.left.deadzone,
              dotRef: BT,
              labelKey: IT.left.labelKey
            }), (0, nT.jsx)("div", {
              className: "ControllerTesterButtons",
              children: cT.X.map((TT => {
                const IT = (0, cT.q)(TT);
                return (0, nT.jsx)("div", {
                  ref: TT => {
                    XT.current[IT] = TT
                  },
                  className: (0, cT.P)(IT) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, nT.jsx)(Ak, {
                    glyph: TT,
                    family: null === oT || void 0 === oT ? void 0 : oT.family
                  })
                }, TT)
              }))
            }), (0, nT.jsx)(FB, {
              deadzone: IT.right.deadzone,
              dotRef: FT,
              labelKey: IT.right.labelKey
            })]
          })]
        })
      },
      xB = (0, QT.memo)((function() {
        const {
          t: TT
        } = (0, zT.t)(), oT = (0, LT.r)(), [IT, iT] = (0, QT.useState)(!1);
        return (0, QT.useEffect)((() => {
          if (!IT) return;
          const TT = window.setTimeout((() => {
            iT(!1)
          }), lX.mb);
          return () => {
            window.clearTimeout(TT)
          }
        }), [IT]), (0, nT.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, nT.jsx)(sX, {
            text: TT("controller:settingsLook")
          }), (0, nT.jsx)(GX, {
            settingKey: "lookSensitivityX",
            label: TT("controller:settingsLookSensitivityX"),
            range: lX.gb,
            format: lX.K
          }), (0, nT.jsx)(GX, {
            settingKey: "lookSensitivityY",
            label: TT("controller:settingsLookSensitivityY"),
            range: lX.gb,
            format: lX.K
          }), (0, nT.jsx)(GX, {
            settingKey: "aimLookSensitivity",
            label: TT("controller:settingsAimLookSensitivity"),
            range: lX.l,
            format: lX.K
          }), (0, nT.jsx)(tX, {
            label: TT("controller:settingsLookCurve"),
            hint: TT("controller:settingsLookCurveHint"),
            options: lX.T,
            value: oT.lookCurve,
            onChange: TT => {
              (0, LT.p)({
                lookCurve: TT
              })
            }
          }), (0, nT.jsx)(nX.e, {
            label: TT("controller:settingsInvertLookX"),
            checked: oT.invertLookX,
            onClick: TT => {
              (0, LT.p)({
                invertLookX: TT
              })
            }
          }), (0, nT.jsx)(nX.e, {
            label: TT("controller:settingsInvertLookY"),
            checked: oT.invertLookY,
            onClick: TT => {
              (0, LT.p)({
                invertLookY: TT
              })
            }
          }), (0, nT.jsx)(GX, {
            settingKey: "lookDeadzone",
            label: TT("controller:settingsLookDeadzone"),
            range: lX.D,
            format: lX.G
          }), (0, nT.jsx)(TB, {}), (0, nT.jsx)(sX, {
            text: TT("controller:settingsMovement")
          }), (0, nT.jsx)(GX, {
            settingKey: "moveDeadzone",
            label: TT("controller:settingsMoveDeadzone"),
            range: lX.D,
            format: lX.G
          }), (0, nT.jsx)(nX.e, {
            label: TT("controller:settingsAutoSprint"),
            checked: oT.autoSprint,
            onClick: TT => {
              (0, LT.p)({
                autoSprint: TT
              })
            },
            circleInfoText: TT("controller:settingsAutoSprintInfo")
          }), (0, nT.jsx)(tX, {
            label: TT("controller:settingsSneak"),
            options: lX.ib,
            value: oT.sneakMode,
            onChange: TT => {
              (0, LT.p)({
                sneakMode: TT
              })
            }
          }), (0, nT.jsx)(sX, {
            text: TT("controller:settingsButtons")
          }), (0, nT.jsx)(tX, {
            label: TT("controller:settingsPromptFamily"),
            options: lX._,
            value: oT.promptFamily,
            onChange: TT => {
              (0, LT.p)({
                promptFamily: TT
              })
            }
          }), (0, nT.jsx)(nX.e, {
            label: TT("controller:settingsHideButtonHints"),
            checked: oT.hideButtonHints,
            onClick: TT => {
              (0, LT.p)({
                hideButtonHints: TT
              })
            }
          }), (0, nT.jsx)(nX.e, {
            label: TT("controller:settingsVibration"),
            checked: oT.vibration,
            onClick: TT => {
              (0, LT.p)({
                vibration: TT
              }), TT && Tk("preview")
            }
          }), (0, nT.jsx)(GX, {
            settingKey: "cursorSpeed",
            label: TT("controller:settingsCursorSpeed"),
            range: lX.z,
            format: lX.K
          }), (0, nT.jsx)(nX.e, {
            label: TT("controller:settingsCursorMagnetism"),
            checked: oT.cursorMagnetism,
            onClick: TT => {
              (0, LT.p)({
                cursorMagnetism: TT
              })
            }
          }), (0, nT.jsx)(nX.e, {
            label: TT("controller:settingsMenuBackToCategories"),
            checked: oT.menuBackToCategories,
            onClick: TT => {
              (0, LT.p)({
                menuBackToCategories: TT
              })
            }
          }), (0, nT.jsx)(BB, {
            layoutSetting: (0, nT.jsxs)(nT.Fragment, {
              children: [ST.h.map((IT => (0, nT.jsx)(nX.e, {
                label: TT(lX.Q[IT]),
                checked: (0, ST.B)(IT, oT),
                onClick: TT => {
                  iT(!(0, ST.O)(IT, TT))
                }
              }, IT))), IT && (0, nT.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: TT("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, nT.jsx)(IB, {}), (0, nT.jsx)(sX, {
            text: TT("controller:settingsAlternatives")
          }), (0, nT.jsx)("div", {
            className: "ControllerSettingsHint",
            children: TT("controller:settingsAlternativesHint")
          }), (0, nT.jsx)(tX, {
            label: TT("controller:settingsMenuNavigation"),
            hint: TT("controller:settingsMenuNavigationHint"),
            options: lX.X,
            value: oT.menuNavigation,
            onChange: TT => {
              (0, LT.p)({
                menuNavigation: TT
              })
            }
          }), (0, nT.jsx)(tX, {
            label: TT("controller:settingsInventoryNavigation"),
            hint: TT("controller:settingsInventoryNavigationHint"),
            options: lX.O,
            value: oT.inventoryNavigation,
            onChange: TT => {
              (0, LT.p)({
                inventoryNavigation: TT
              })
            }
          }), (0, nT.jsx)(tX, {
            label: TT("controller:settingsQuickChat"),
            hint: TT("controller:settingsQuickChatHint"),
            options: lX.cb,
            value: oT.quickChat,
            onChange: TT => {
              (0, LT.p)({
                quickChat: TT
              })
            }
          }), (0, nT.jsx)(tX, {
            label: TT("controller:settingsLeaderboardButton"),
            hint: TT("controller:settingsLeaderboardButtonHint"),
            options: lX.R,
            value: oT.leaderboardButton,
            onChange: TT => {
              (0, LT.p)({
                leaderboardButton: TT
              })
            }
          }), (0, nT.jsx)(sX, {
            text: TT("controller:settingsTester")
          }), (0, nT.jsx)(LB, {})]
        })
      }));
    (0, zT.d)(iT);
    for (const AB of (0, kT.n)()) AB.connected ? WT.g.handleConnectionEvent(AB) : WT.g.handleDisconnectionEvent(AB);
    const cB = () => null !== WT.g.getActivePad(),
      KB = () => dI.getState(),
      MB = () => dI.isSteppingSlots(),
      rB = (TT, oT) => {
        const IT = bz.getFocused();
        bz.isActive() && IT && TT.contains(IT) && bz.setFocus(oT, {
          scroll: !1
        })
      }
  },
  7612: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => BT,
      c: () => FT
    });
    var iT = IT(1381),
      zT = IT(1375);
    const kT = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      WT = "28de",
      XT = new Set(["1205"]),
      BT = (TT, oT) => {
        const IT = (0, iT.d)(TT);
        if ((null === IT || void 0 === IT ? void 0 : IT.vendor) === WT) return XT.has(IT.product) ? "steamdeck" : "xbox";
        if (IT && kT[IT.vendor]) return kT[IT.vendor];
        if ((0, zT.b)(TT)) return "nintendo";
        const BT = `${TT} ${null!==oT&&void 0!==oT?oT:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(BT) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(BT) ? "nintendo" : /steam deck/.test(BT) ? "steamdeck" : "xbox"
      },
      FT = TT => {
        var oT;
        return (null === (oT = (0, iT.d)(TT)) || void 0 === oT ? void 0 : oT.vendor) === WT
      }
  },
  7655: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => FT,
      g: () => XT
    });
    var iT = IT(7605);
    const zT = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      kT = new Set(["capture", "gameplay"]),
      WT = ["Up", "Down", "Left", "Right"],
      XT = TT => WT.includes(TT),
      BT = .25;
    const FT = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.kS = new Array(iT.W).fill(!1), this.previousHeld = new Array(iT.W).fill(!1), this.consumedButtons = new Array(iT.W).fill(!1), this.suppressedReleases = new Array(iT.W).fill(!1), this.wakeOwned = new Array(iT.W).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, iT.C)()
      }
      register(TT) {
        return this.consumers.has(TT.name) && console.warn(`Controller consumer "${TT.name}" registered twice; the newer one replaces it.`), this.consumers.set(TT.name, TT), () => {
          var oT;
          this.consumers.get(TT.name) === TT && (this.activeName === TT.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (oT = this.peek) || void 0 === oT ? void 0 : oT.over) === TT.name && (this.peek = null), this.consumers.delete(TT.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(TT) {
        return this.kS[(0, iT.q)(TT)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.kS = new Array(iT.W).fill(!1), this.previousHeld = new Array(iT.W).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, iT.C)()
      }
      dispatch(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = TT, this.previousHeld = this.kS, this.kS = (0, iT.y)(TT.values, this.previousHeld);
        for (let kT = 0; kT < iT.W; kT++) this.suppressedReleases[kT] = !this.kS[kT] && this.consumedButtons[kT], this.kS[kT] || (this.consumedButtons[kT] = !1), this.wakeOwned[kT] && (this.kS[kT] ? (this.consumedButtons[kT] = !0, this.wakeOwned[kT] = !1) : TT.values[kT] < iT.V && (this.wakeOwned[kT] = !1));
        Math.hypot(TT.leftStick.x, TT.leftStick.y) < BT && (this.leftStickConsumed = !1), Math.hypot(TT.rightStick.x, TT.rightStick.y) < BT && (this.rightStickConsumed = !1);
        const zT = this.pickActive();
        if ((null === zT || void 0 === zT ? void 0 : zT.name) !== this.activeName) {
          var WT, XT, FT, ST, DT, LT;
          const TT = this.activeName,
            oT = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            IT = null !== (WT = null === zT || void 0 === zT || null === (XT = zT.peek) || void 0 === XT ? void 0 : XT.call(zT)) && void 0 !== WT ? WT : null,
            kT = null === TT && !!IT && !(null === (FT = this.consumers.get(IT.over)) || void 0 === FT || !FT.onPeekFrame),
            BT = IT && (IT.over === TT || kT) ? IT : null,
            xT = null !== this.peek && this.peek.over === (null === zT || void 0 === zT ? void 0 : zT.name) ? this.peek : null;
          this.deactivateCurrent(null !== BT, null !== xT), this.activeName = null !== (ST = null === zT || void 0 === zT ? void 0 : zT.name) && void 0 !== ST ? ST : null, null === TT || this.handOffPending || this.consumeAllHeld();
          const cT = null === (DT = null !== BT && void 0 !== BT ? BT : xT) || void 0 === DT ? void 0 : DT.stick;
          "left" === cT && oT.left ? this.leftStickConsumed = !1 : "right" === cT && oT.right && (this.rightStickConsumed = !1), this.peek = BT, zT || null === TT ? zT && (null === (LT = this.idleResume) || void 0 === LT ? void 0 : LT.name) === zT.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: TT,
            left: oT.left && this.leftStickConsumed,
            right: oT.right && this.rightStickConsumed
          }, zT && (this.idleResume = null);
          for (let zT = 0; zT < iT.W; zT++) this.previousHeld[zT] && !this.kS[zT] && (this.suppressedReleases[zT] = !0)
        }
        var xT, cT;
        (this.handOffPending = !1, zT) && (IT && !kT.has(zT.name) && this.consumeWakePress(zT), zT.onFrame(this.buildInput(TT, oT, IT)), this.peek && (null === (xT = this.consumers.get(this.peek.over)) || void 0 === xT || null === (cT = xT.onPeekFrame) || void 0 === cT || cT.call(xT, this.buildInput(TT, oT, !1, this.peek.stick))))
      }
      consumeWakePress(TT) {
        for (let zT = 0; zT < iT.W; zT++) {
          var oT, IT;
          const kT = iT.X[zT];
          (null !== (oT = null === (IT = TT.wakePressActs) || void 0 === IT ? void 0 : IT.call(TT, kT)) && void 0 !== oT ? oT : WT.includes(kT)) || (this.kS[zT] ? this.consumedButtons[zT] = !0 : this.lastFrame.values[zT] >= iT.U && (this.wakeOwned[zT] = !0))
        }
      }
      pickActive() {
        for (const TT of zT) {
          const oT = this.consumers.get(TT);
          if (oT && oT.isActive()) return oT
        }
        return null
      }
      deactivateCurrent() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var IT, iT, zT, kT;
        this.activeName && (null === (IT = this.consumers.get(this.activeName)) || void 0 === IT || null === (iT = IT.onDeactivate) || void 0 === iT || iT.call(IT, TT));
        this.peek && !oT && (null === (zT = this.consumers.get(this.peek.over)) || void 0 === zT || null === (kT = zT.onDeactivate) || void 0 === kT || kT.call(zT, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let zT = 0; zT < iT.W; zT++) this.kS[zT] && (this.consumedButtons[zT] = !0);
        const {
          leftStick: oT,
          rightStick: IT
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== TT && (this.leftStickConsumed || Math.hypot(oT.x, oT.y) >= BT), this.rightStickConsumed = "right" !== TT && (this.rightStickConsumed || Math.hypot(IT.x, IT.y) >= BT)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(TT) {
        const oT = (0, iT.q)(TT);
        this.kS[oT] && (this.consumedButtons[oT] = !0)
      }
      buildInput(TT, oT, IT, zT) {
        const kT = this.kS,
          WT = this.previousHeld,
          XT = zT ? new Array(iT.W).fill(!0) : [...this.consumedButtons],
          BT = zT ? XT : [...this.suppressedReleases],
          FT = !this.leftStickConsumed && (!zT || "left" === zT),
          ST = !this.rightStickConsumed && (!zT || "right" === zT);
        return {
          frame: TT,
          dtMs: oT,
          isHeld: TT => {
            const oT = (0, iT.q)(TT);
            return kT[oT] && !XT[oT]
          },
          wasPressed: TT => {
            const oT = (0, iT.q)(TT);
            return kT[oT] && !WT[oT] && !XT[oT]
          },
          wasReleased: TT => {
            const oT = (0, iT.q)(TT);
            return !kT[oT] && WT[oT] && !BT[oT]
          },
          value: oT => {
            const IT = (0, iT.q)(oT);
            return XT[IT] ? 0 : TT.values[IT]
          },
          leftStick: FT ? TT.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: ST ? TT.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: IT
        }
      }
    }
  },
  7629: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => DT.d,
      g: () => DT.h,
      j: () => ET,
      m: () => fT,
      p: () => CT,
      r: () => jT
    });
    var iT = IT(46),
      zT = IT(16),
      kT = IT(1403),
      WT = IT(26),
      XT = IT(7638),
      BT = IT(7605),
      FT = IT(7627),
      ST = IT(7599),
      DT = IT(1825),
      LT = IT(7643);
    const xT = {
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
      cT = "controllerSettings",
      KT = ["bindings", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      MT = ["auto", ...XT.d],
      rT = (TT, oT) => "string" === typeof oT && TT.includes(oT),
      AT = TT => oT => "number" === typeof oT && Number.isFinite(oT) ? (0, LT.x)(oT, TT) : void 0,
      gT = TT => "boolean" === typeof TT ? TT : void 0,
      hT = TT => oT => rT(TT, oT) ? oT : void 0,
      wT = {
        lookSensitivityX: AT(LT.gb),
        lookSensitivityY: AT(LT.gb),
        aimLookSensitivity: AT(LT.l),
        invertLookX: gT,
        invertLookY: gT,
        lookCurve: hT(BT.Q),
        lookDeadzone: AT(LT.D),
        moveDeadzone: AT(LT.D),
        swapSticks: gT,
        autoSprint: gT,
        sneakMode: hT(["toggle", "hold"]),
        tapHoldTime: hT(["short", "medium", "long"]),
        attackMode: hT(["hold", "toggle"]),
        promptFamily: hT(MT),
        hideButtonHints: gT,
        vibration: gT,
        cursorSpeed: AT(LT.z),
        cursorMagnetism: gT,
        buttonRepeat: hT(BT.u),
        largePointer: gT,
        menuBackToCategories: gT,
        swapConfirmBack: gT,
        menuNavigation: hT(["hybrid", "focus", "cursor"]),
        inventoryNavigation: hT(["hybrid", "slot", "cursor"]),
        quickChat: hT(["wheel", "off"]),
        leaderboardButton: hT(["shop", "leaderboard"]),
        gyroAiming: gT,
        gyroSensitivity: AT(LT.N),
        gyroActivation: hT(["always", "aiming", "button"]),
        gyroButton: hT(BT.X),
        emoteButton: hT(["tapHold", "wheel"])
      },
      mT = [{
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
      eT = TT => {
        const oT = {};
        if ("object" !== typeof TT || null === TT) return oT;
        for (const [IT, iT] of Object.entries(TT)) Object.prototype.hasOwnProperty.call(FT.g, IT) && rT(BT.X, iT) && (oT[IT] = iT);
        return oT
      },
      RT = TT => {
        const oT = {};
        for (const IT of Object.keys(xT))("bindings" === IT ? Object.keys(TT.bindings).length > 0 : TT[IT] !== xT[IT]) && (oT[IT] = TT[IT]);
        0 !== Object.keys(oT).length ? WT.e.setItem(cT, oT) : WT.e.removeItem(cT)
      };
    let uT = (() => {
        const TT = WT.e.getItem(cT),
          oT = (TT => {
            const oT = "object" === typeof TT && null !== TT ? TT : {},
              IT = {
                ...xT,
                bindings: eT(oT.bindings)
              };
            for (const zT of Object.keys(wT)) {
              const TT = wT[zT](oT[zT]);
              void 0 !== TT && (IT[zT] = TT)
            }
            const iT = Object.keys(oT).filter((TT => !!Object.prototype.hasOwnProperty.call(xT, TT) && ("bindings" === TT ? "object" !== typeof oT.bindings || null === oT.bindings || Object.keys(oT.bindings).length !== Object.keys(IT.bindings).length : IT[TT] !== oT[TT])));
            return iT.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${iT.join(", ")}`), IT
          })(TT);
        return null !== TT && void 0 !== TT && RT(oT), oT
      })(),
      vT = {
        ...uT,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const TT = {},
            oT = new URLSearchParams(window.location.search);
          for (const {
              param: IT,
              key: iT
            }
            of mT) {
            const zT = wT[iT](oT.get(IT));
            void 0 !== zT && (TT[iT] = zT)
          }
          return TT
        })()
      };
    const ET = () => vT,
      fT = () => {
        var TT, oT;
        const IT = ET().promptFamily;
        return "auto" !== IT ? IT : null !== (TT = null === (oT = ST.g.getActivePad()) || void 0 === oT ? void 0 : oT.family) && void 0 !== TT ? TT : "xbox"
      },
      CT = TT => {
        const oT = vT;
        uT = {
          ...uT,
          ...TT
        }, RT(uT), vT = {
          ...vT,
          ...TT
        }, (TT => {
          zT.h.XM(DT.h, vT), KT.some((oT => TT[oT] !== vT[oT])) && zT.h.XM(DT.d, vT)
        })(oT)
      },
      jT = () => {
        const [TT, oT] = (0, iT.useState)(vT);
        return (0, kT.g)(DT.h, oT), TT
      }
  },
  8078: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT
    });
    const iT = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      zT = TT => iT.has(TT)
  },
  7599: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => KT.b,
      g: () => gT
    });
    var iT = IT(7605),
      zT = IT(7612);
    const kT = .1,
      WT = .3;
    class XT {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(TT, oT) {
        const IT = null === this.lastMs ? 0 : Math.min(Math.max(0, oT - this.lastMs), 100);
        this.lastMs = oT;
        const iT = Math.hypot(TT.x, TT.y);
        if (iT >= WT) return this.anchor = null, void(this.returning = !0);
        iT >= kT || (this.returning = !1);
        const zT = this.anchor;
        if (!zT || Math.hypot(TT.x - zT.x, TT.y - zT.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: TT.x,
          y: TT.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += IT, this.steadyMs < 1e3) return;
        const XT = Math.max(iT, Math.hypot(zT.x, zT.y));
        XT < kT ? this.deadzone = 0 : this.returning && (this.deadzone = XT + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(TT) {
        return Math.hypot(TT.x, TT.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : TT
      }
    }
    const BT = (TT, oT) => {
        var IT, iT;
        return null !== (IT = TT && (null === (iT = Object.getOwnPropertyDescriptor(TT, oT)) || void 0 === iT ? void 0 : iT.get)) && void 0 !== IT ? IT : null
      },
      FT = TT => {
        const oT = TT.vendorName;
        return "string" === typeof oT ? oT : void 0
      },
      ST = ((TT, oT) => {
        const IT = BT(TT, "index"),
          iT = BT(TT, "id"),
          zT = BT(TT, "connected"),
          kT = BT(TT, "mapping"),
          WT = BT(TT, "buttons"),
          XT = BT(TT, "axes"),
          ST = BT(oT, "pressed"),
          DT = BT(oT, "value");
        return IT && iT && zT && kT && WT && XT && ST && DT ? TT => {
          const oT = WT.call(TT),
            BT = XT.call(TT),
            LT = {
              index: Number(IT.call(TT)),
              id: String(iT.call(TT)),
              connected: !0 === zT.call(TT),
              mapping: String(kT.call(TT)),
              buttons: [],
              axes: [],
              vendorName: FT(TT)
            };
          for (let IT = 0; IT < oT.length; IT++) LT.buttons.push({
            pressed: !0 === ST.call(oT[IT]),
            value: Number(DT.call(oT[IT]))
          });
          for (let IT = 0; IT < BT.length; IT++) LT.axes.push(Number(BT[IT]));
          return LT
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      DT = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var LT = IT(1370),
      xT = IT(1375);
    const cT = TT => ({
      pressed: TT,
      value: TT ? 1 : 0
    });
    var KT = IT(1825);
    const MT = WT,
      rT = TT => {
        const oT = new Array(iT.W).fill(0);
        for (let IT = 0; IT < iT.W && IT < TT.buttons.length; IT++) {
          const zT = TT.buttons[IT];
          oT[IT] = zT.pressed && !(0, iT.P)(IT) ? Math.max(zT.value, iT.E) : zT.value
        }
        return oT
      },
      AT = (TT, oT) => {
        var IT, iT;
        return {
          x: null !== (IT = TT.axes[oT]) && void 0 !== IT ? IT : 0,
          y: null !== (iT = TT.axes[oT + 1]) && void 0 !== iT ? iT : 0
        }
      };
    const gT = new class {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ST;
        this.readGamepads = TT, this.requireTrustedPads = oT, this.nativeReader = IT, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = TT => {
          TT.isTrusted && this.trustedIndices.add(TT.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = TT => {
          this.trustedIndices.delete(TT.gamepad.index)
        }, this.dD = TT => {
          if (this.rafId = 0, !this.running) return;
          const oT = 0 === this.lastTimestampMs ? 16 : Math.min(100, TT - this.lastTimestampMs);
          this.lastTimestampMs = TT;
          try {
            this.poll(TT, oT)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.dD))
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
      onFrame(TT) {
        return this.frameListeners.add(TT), () => {
          this.frameListeners.delete(TT)
        }
      }
      onActivePadChanged(TT) {
        return this.connectionListeners.add(TT), () => {
          this.connectionListeners.delete(TT)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(TT) {
        return this.connectedListeners.add(TT), () => {
          this.connectedListeners.delete(TT)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const TT = this.readPads()[this.activeInfo.index],
          oT = TT ? this.readPad(TT) : null;
        return oT && oT.id === this.activeInfo.id ? TT : null
      }
      poll(TT, oT) {
        var IT, zT;
        const kT = this.readPads();
        let WT = null,
          BT = !1;
        const FT = [],
          ST = Math.max(kT.length, this.slots.length);
        for (let gT = 0; gT < ST; gT++) {
          var DT;
          const oT = gT < kT.length ? kT[gT] : null,
            IT = oT ? this.readPad(oT) : null;
          if (!IT || !IT.connected || !this.isUsable(IT)) {
            this.slots[gT] = null;
            continue
          }
          let zT = this.slots[gT];
          zT && zT.id === IT.id || (zT = {
            id: IT.id,
            kS: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new XT,
            rightRest: new XT
          }, this.slots[gT] = zT);
          const ST = AT(IT, 0),
            LT = AT(IT, 2);
          !zT.leftSettled && Math.hypot(ST.x, ST.y) < MT && (zT.leftSettled = !0), !zT.rightSettled && Math.hypot(LT.x, LT.y) < MT && (zT.rightSettled = !0), zT.leftRest.observe(ST, TT), zT.rightRest.observe(LT, TT);
          const xT = rT(IT),
            cT = (0, iT.y)(xT, zT.kS),
            KT = zT.kS,
            hT = cT.map(((TT, oT) => TT && !KT[oT]));
          zT.kS = cT;
          const wT = {
            pad: IT,
            slot: zT,
            values: xT
          };
          gT === (null === (DT = this.activeInfo) || void 0 === DT ? void 0 : DT.index) && IT.id === this.activeInfo.id ? (WT = wT, BT = hT.includes(!0)) : hT.includes(!0) && FT.push({
            polled: wT,
            rose: hT
          })
        }
        const LT = this.slots.some((TT => null !== TT));
        if (LT !== this.anyPadConnected) {
          this.anyPadConnected = LT;
          for (const TT of this.connectedListeners) TT()
        }
        const xT = null !== (IT = null === (zT = WT) || void 0 === zT ? void 0 : zT.slot.kS) && void 0 !== IT ? IT : [],
          cT = BT ? void 0 : FT.find((TT => {
            let {
              rose: oT
            } = TT;
            return oT.some(((TT, oT) => TT && !xT[oT]))
          }));
        if (cT ? (WT = cT.polled, this.setActive(cT.polled.pad)) : this.activeInfo && !WT && this.setActive(null), !WT || !this.activeInfo) return;
        const KT = ((TT, oT) => {
          let {
            pad: IT,
            slot: zT,
            values: kT
          } = TT;
          const WT = (0, iT.C)(oT);
          return WT.values = kT, zT.leftSettled && (WT.leftStick = zT.leftRest.apply(AT(IT, 0))), zT.rightSettled && (WT.rightStick = zT.rightRest.apply(AT(IT, 2))), WT
        })(WT, TT);
        for (const iT of this.frameListeners) iT(KT, oT, this.activeInfo)
      }
      readPad(TT) {
        const oT = this.readSnapshot(TT);
        return oT && (0, xT.d)(oT) ? (TT => {
          const oT = oT => {
              var IT;
              return null !== (IT = TT.buttons[oT]) && void 0 !== IT ? IT : cT(!1)
            },
            IT = oT => {
              var IT;
              return null !== (IT = TT.axes[oT]) && void 0 !== IT ? IT : 0
            },
            iT = TT.axes.length > 9,
            zT = iT ? (TT => {
              const oT = 0 !== TT;
              return {
                up: oT && (TT >= -1 && TT < -.7 || TT >= .95 && TT <= 1),
                right: oT && TT >= -.75 && TT < -.1,
                down: oT && TT >= -.2 && TT < .45,
                left: oT && TT >= .4 && TT <= 1
              }
            })(IT(9)) : {
              up: IT(5) < -.5,
              down: IT(5) > .5,
              left: IT(4) < -.5,
              right: IT(4) > .5
            };
          return {
            ...TT,
            mapping: "standard",
            buttons: [oT(1), oT(2), oT(0), oT(3), oT(4), oT(5), oT(6), oT(7), oT(8), oT(9), oT(10), oT(11), cT(zT.up), cT(zT.down), cT(zT.left), cT(zT.right), oT(12)],
            axes: [IT(0), IT(1), IT(2), IT(iT ? 5 : 3)]
          }
        })(oT) : oT
      }
      readSnapshot(TT) {
        if (this.nativeReader) try {
          return this.nativeReader(TT)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (TT => {
          const oT = TT;
          return {
            index: oT.index,
            id: oT.id,
            connected: oT.connected,
            mapping: oT.mapping,
            buttons: Array.from(oT.buttons, (TT => ({
              pressed: TT.pressed,
              value: TT.value
            }))),
            axes: Array.from(oT.axes),
            vendorName: FT(TT)
          }
        })(TT)
      }
      isUsable(TT) {
        return !(0, LT.f)(TT.id) && ("standard" !== TT.mapping ? (this.warnedNonStandardIds.has(TT.id) || (this.warnedNonStandardIds.add(TT.id), console.warn(`Controller "${TT.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(TT.index))
      }
      setActive(TT) {
        this.activeInfo = TT ? {
          index: TT.index,
          id: TT.id,
          family: (0, zT.b)(TT.id, TT.vendorName)
        } : null;
        for (const oT of this.connectionListeners) oT(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (TT) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", TT)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.dD))
      }
    }((() => DT ? DT.call(navigator) : []), !0);
    gT.listenForConnections()
  },
  8152: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      f: () => WT,
      g: () => XT,
      h: () => zT
    });
    var iT = IT(8154);
    const zT = TT => {
        const oT = [];
        TT.holdingGun && oT.push({
          kind: "reload"
        }), TT.touchscreenActionButton && oT.push({
          kind: "touchButton",
          label: TT.touchscreenActionButton
        });
        for (const kT of null !== (IT = null === (zT = TT.customButtons) || void 0 === zT ? void 0 : zT.filter(iT.g)) && void 0 !== IT ? IT : []) {
          var IT, zT;
          oT.push({
            kind: "customButton",
            id: kT.id,
            icon: kT.icon,
            description: kT.description
          })
        }
        return oT
      },
      kT = TT => TT.length >= 2,
      WT = TT => "specialAction" !== TT.kind,
      XT = (TT, oT) => {
        if (null === TT || null === oT) return TT === oT;
        if (TT.kind !== oT.kind) return !1;
        switch (TT.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return TT.action === oT.action;
          case "customButton":
            return TT.id === oT.id && TT.icon === oT.icon;
          case "touchButton":
            return TT.label === oT.label
        }
      }
  },
  8089: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT
    });
    const iT = {
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
  8149: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => ST,
      c: () => xT,
      g: () => DT,
      i: () => cT
    });
    var iT = IT(46),
      zT = IT(16),
      kT = IT(1403),
      WT = IT(8152),
      XT = IT(8163);
    let BT = null;
    const FT = () => BT,
      ST = TT => {
        (0, WT.g)(BT, TT) || (BT = TT, zT.h.XM(XT.h, BT))
      },
      DT = () => {
        const [TT, oT] = (0, iT.useState)(FT);
        return (0, kT.g)(XT.h, oT), TT
      };
    let LT = !1;
    const xT = TT => {
        TT !== LT && (LT = TT, zT.h.XM(XT.i, TT))
      },
      cT = () => {
        const [TT, oT] = (0, iT.useState)(LT);
        return (0, kT.g)(XT.i, oT), TT
      }
  },
  8181: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      g: () => XT
    });
    var iT = IT(16),
      zT = IT(8163);
    let kT = !1;
    const WT = () => kT,
      XT = TT => {
        TT !== kT && (kT = TT, iT.h.XM(zT.m, kT))
      }
  },
  8172: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      f: () => BT
    });
    var iT = IT(16),
      zT = IT(8163);
    let kT = null,
      WT = 0;
    const XT = () => kT,
      BT = TT => {
        null === TT && null === kT || (kT = null === TT ? null : {
          id: ++WT,
          holdMs: TT
        }, iT.h.XM(zT.q, kT))
      }
  },
  8163: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      h: () => iT,
      i: () => zT,
      m: () => XT,
      q: () => BT,
      t: () => FT,
      v: () => WT
    });
    const iT = "controllerActionHintChanged",
      zT = "controllerActionWheelHintChanged",
      kT = "controllerOpenChat",
      WT = "controllerSneakToggledChanged",
      XT = "controllerAttackLatchedChanged",
      BT = "controllerDropStackHoldChanged",
      FT = "controllerPickBlockHintChanged"
  },
  8190: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT,
      e: () => XT
    });
    var iT = IT(16),
      zT = IT(8163);
    let kT = !1;
    const WT = () => kT,
      XT = TT => {
        TT !== kT && (kT = TT, iT.h.XM(zT.t, kT))
      }
  },
  8258: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      g: () => XT
    });
    var iT = IT(16),
      zT = IT(8163);
    let kT = !1;
    const WT = () => kT,
      XT = TT => {
        TT !== kT && (kT = TT, iT.h.XM(zT.v, kT))
      }
  },
  8129: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      constructor() {
        this.downAtMs = null
      }
      update(TT, oT, IT, iT) {
        if (TT) return this.downAtMs = IT, null;
        if (null === this.downAtMs) return null;
        const zT = IT - this.downAtMs >= iT;
        return oT ? zT ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, zT ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7673: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => DT,
      g: () => LT,
      h: () => XT,
      j: () => gT,
      n: () => AT
    });
    var iT = IT(26),
      zT = IT(7638),
      kT = IT(7605);
    const WT = (() => {
        try {
          return IT(7676)
        } catch {
          return null
        }
      })(),
      XT = [...kT.X, "LeftStick", "RightStick"],
      BT = new Map,
      FT = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      ST = (new Set(Object.values(FT)), {
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
      DT = (TT, oT) => {
        var IT, iT;
        return null !== (IT = null === (iT = ST[FT[TT]]) || void 0 === iT ? void 0 : iT[oT]) && void 0 !== IT ? IT : 1
      },
      LT = (TT, oT) => {
        const IT = `./${FT[TT]}/${oT}.svg`;
        let iT = BT.get(IT);
        return void 0 === iT && (iT = WT ? WT(IT) : "", BT.set(IT, iT)), iT
      },
      xT = new Set,
      cT = [],
      KT = TT => {
        if (!xT.has(TT)) {
          xT.add(TT);
          for (const oT of XT) {
            const IT = LT(TT, oT);
            if (IT) {
              const TT = new Image;
              TT.crossOrigin = "anonymous", TT.src = IT, cT.push(TT)
            }
          }
        }
      },
      MT = "controllerGlyphFamily";
    let rT = null;
    const AT = TT => {
        TT !== rT && (rT = TT, iT.e.setItem(MT, TT), KT(TT))
      },
      gT = () => {
        const TT = iT.e.getItem(MT);
        (0, zT.g)(TT) && TT !== rT && (rT = TT, KT(TT))
      }
  },
  8280: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => HT,
      g: () => nT
    });
    var iT = IT(46),
      zT = IT(16),
      kT = IT(1403),
      WT = IT(7618),
      XT = IT(7599),
      BT = IT(7655),
      FT = IT(7629);
    const ST = {
        x: 0,
        y: 0,
        z: 0
      },
      DT = Math.PI / 180,
      LT = TT => Math.hypot(TT.x, TT.y, TT.z),
      xT = (TT, oT) => ({
        x: TT.x * oT,
        y: TT.y * oT,
        z: TT.z * oT
      }),
      cT = (TT, oT) => ({
        x: TT.x + oT.x,
        y: TT.y + oT.y,
        z: TT.z + oT.z
      }),
      KT = (TT, oT) => ({
        x: TT.x - oT.x,
        y: TT.y - oT.y,
        z: TT.z - oT.z
      }),
      MT = TT => {
        const oT = LT(TT);
        return 0 === oT ? ST : xT(TT, 1 / oT)
      },
      rT = TT => ({
        min: {
          ...TT
        },
        max: {
          ...TT
        }
      }),
      AT = (TT, oT) => ({
        min: {
          x: Math.min(TT.min.x, oT.x),
          y: Math.min(TT.min.y, oT.y),
          z: Math.min(TT.min.z, oT.z)
        },
        max: {
          x: Math.max(TT.max.x, oT.x),
          y: Math.max(TT.max.y, oT.y),
          z: Math.max(TT.max.z, oT.z)
        }
      }),
      gT = (TT, oT) => TT.max.x - TT.min.x <= oT && TT.max.y - TT.min.y <= oT && TT.max.z - TT.min.z <= oT;
    class hT {
      constructor() {
        this.bias = ST, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = ST, this.windowSec = 0
      }
      update(TT) {
        const oT = this.gyroRange ? AT(this.gyroRange, TT.gyro) : rT(TT.gyro),
          IT = TT.accel ? this.accelRange ? AT(this.accelRange, TT.accel) : rT(TT.accel) : null;
        if (!gT(oT, 1) || IT && !gT(IT, .01)) return void this.restartWindow(TT);
        if (this.gyroRange = oT, this.accelRange = IT, this.sum = cT(this.sum, xT(TT.gyro, TT.dtSec)), this.windowSec += TT.dtSec, this.windowSec < 1) return;
        const iT = xT(this.sum, 1 / this.windowSec);
        if (LT(iT) > 5) return;
        const zT = KT(iT, this.bias);
        let kT = 0;
        !this.calibrated || this.windowSec >= 3 ? kT = 1 : LT(zT) <= 1 && (kT = Math.min(1, TT.dtSec / 1)), this.bias = cT(this.bias, xT(zT, kT)), this.calibrated = this.calibrated || kT > 0
      }
      correct(TT) {
        return KT(TT, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = ST, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = ST, this.windowSec = 0
      }
      restartWindow(TT) {
        this.gyroRange = rT(TT.gyro), this.accelRange = TT.accel ? rT(TT.accel) : null, this.sum = ST, this.windowSec = 0
      }
    }
    class wT {
      constructor() {
        this.down = null
      }
      update(TT, oT, IT) {
        const iT = MT(xT(oT, -1));
        if (!this.down) return this.down = iT, iT;
        const zT = xT(TT, DT * IT),
          kT = this.down,
          WT = {
            x: kT.x - (zT.y * kT.z - zT.z * kT.y),
            y: kT.y - (zT.z * kT.x - zT.x * kT.z),
            z: kT.z - (zT.x * kT.y - zT.y * kT.x)
          },
          XT = 0 === LT(iT) ? 0 : Math.min(1, IT / .25);
        var BT, FT;
        return this.down = MT((FT = XT, cT(BT = WT, xT(KT(iT, BT), FT)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class mT {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(TT, oT, IT) {
        const iT = Math.hypot(TT, oT),
          zT = Math.max(0, Math.min(1, (iT - 2) / 2)),
          kT = {
            yaw: TT * (1 - zT),
            pitch: oT * (1 - zT),
            dtSec: IT
          };
        for (this.entries.push(kT), this.windowSec += IT; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let WT = 0,
          XT = 0;
        for (const FT of this.entries) WT += FT.yaw * FT.dtSec, XT += FT.pitch * FT.dtSec;
        const BT = this.windowSec > 0 ? {
          yaw: WT / this.windowSec,
          pitch: XT / this.windowSec
        } : {
          yaw: kT.yaw,
          pitch: kT.pitch
        };
        return {
          yaw: TT * zT + BT.yaw,
          pitch: oT * zT + BT.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class eT {
      constructor() {
        this.calibrator = new hT, this.gravity = new wT, this.smoother = new mT
      }
      process(TT, oT, IT) {
        const iT = Math.max(0, Math.min(.05, oT));
        this.calibrator.update({
          ...TT,
          dtSec: iT
        });
        const zT = this.calibrator.correct(TT.gyro);
        let kT = zT.y;
        "player" === IT && TT.accel && (kT = ((TT, oT) => {
          const IT = TT.y * oT.y + TT.z * oT.z;
          return -Math.sign(IT) * Math.min(1.41 * Math.abs(IT), Math.hypot(TT.y, TT.z))
        })(zT, this.gravity.update(zT, TT.accel, iT)));
        const WT = this.smoother.apply(kT, zT.x, iT),
          XT = ((TT, oT) => {
            const IT = Math.hypot(TT, oT);
            if (IT >= 1) return {
              yaw: TT,
              pitch: oT
            };
            const iT = IT / 1;
            return {
              yaw: TT * iT,
              pitch: oT * iT
            }
          })(WT.yaw, WT.pitch);
        return {
          yawDeg: XT.yaw * iT,
          pitchDeg: XT.pitch * iT
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
    const RT = (TT, oT) => {
      var IT, iT, zT;
      const kT = oT * DT,
        WT = null !== (IT = TT.beta) && void 0 !== IT ? IT : 0,
        XT = null !== (iT = TT.gamma) && void 0 !== iT ? iT : 0;
      return {
        x: WT * Math.cos(kT) - XT * Math.sin(kT),
        y: WT * Math.sin(kT) + XT * Math.cos(kT),
        z: null !== (zT = TT.alpha) && void 0 !== zT ? zT : 0
      }
    };
    var uT = IT(8283);
    class vT {
      constructor(TT, oT, IT) {
        this.hid = TT, this.sink = oT, this.onControllersChanged = IT, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = TT => {
          this.openController(TT.device).catch((TT => {
            console.warn("Could not open motion controller", TT)
          }))
        }, this.onDisconnect = TT => {
          this.opening.has(TT.device) && this.disconnectedWhileOpening.add(TT.device);
          const oT = this.controllers.get(TT.device);
          oT && (this.forget(oT), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const TT = await this.hid.getDevices();
        for (const oT of TT) await this.openController(oT).catch((TT => {
          console.warn("Could not open motion controller", TT)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const TT of [...this.controllers.values()]) this.forget(TT);
        this.onControllersChanged()
      }
      async request() {
        const TT = await this.hid.requestDevice({
          filters: uT.k
        });
        let oT = 0;
        for (const IT of TT) await this.openController(IT).catch((TT => {
          console.warn("Could not open motion controller", TT), oT++
        }));
        return oT
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((TT => null !== (0, uT.f)(TT.vendorId, TT.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((TT => TT.kind))
      }
      forget(TT) {
        TT.device.removeEventListener("inputreport", TT.onReport), this.controllers.get(TT.device) === TT && this.controllers.delete(TT.device)
      }
      async openController(TT) {
        const oT = (0, uT.f)(TT.vendorId, TT.productId);
        if (!oT || !this.running || this.controllers.has(TT) || this.opening.has(TT)) return;
        this.opening.add(TT);
        let IT = !1;
        try {
          TT.opened || await TT.open()
        } finally {
          this.opening.delete(TT), IT = this.disconnectedWhileOpening.delete(TT)
        }
        if (IT) return void TT.close().catch((TT => {
          console.debug("Could not close an unplugged motion controller", TT)
        }));
        if (!this.running) return;
        const iT = {
          device: TT,
          kind: oT,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: TT => {
            this.onReport(iT, TT)
          }
        };
        this.controllers.set(TT, iT), TT.addEventListener("inputreport", iT.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(iT)
        } catch (zT) {
          console.warn(`Could not turn on motion for ${oT}`, zT), this.controllers.get(TT) === iT && (this.forget(iT), this.onControllersChanged())
        }
      }
      async enableMotion(TT) {
        let {
          device: oT,
          kind: IT
        } = TT;
        if ((0, uT.i)(IT))
          for (const iT of uT.w[IT]) await oT.receiveFeatureReport(iT).catch((TT => {
            console.debug(`Motion controller feature report ${iT} unavailable`, TT)
          }));
        else
          for (let iT = 0; iT < 2; iT++)
            for (const {
                subcommand: TT,
                args: IT
              }
              of uT.A) await oT.sendReport(uT.B, (0, uT.e)(this.switchPacketCounter++, TT, IT)), await new Promise((TT => {
              setTimeout(TT, 60)
            }))
      }
      onReport(TT, oT) {
        const IT = (0, uT.s)(TT.kind, oT.reportId, oT.data, TT.device.productId);
        if (!IT) return;
        const iT = null === TT.lastEventMs ? 0 : (oT.timeStamp - TT.lastEventMs) / 1e3;
        TT.lastEventMs = oT.timeStamp;
        let zT = IT.dtSec;
        if (null !== zT && iT > 0 && (zT = Math.max(.001, Math.min(.017, iT / IT.readings.length))), null === zT && null !== IT.sensorClock && (0, uT.i)(TT.kind)) {
          const oT = (0, uT.v)(TT.kind, TT.lastClock, IT.sensorClock);
          TT.lastClock = IT.sensorClock, zT = 0 === oT ? null : oT
        }
        if (TT.lastReadingMs = oT.timeStamp, this.isPreferred(TT, oT.timeStamp))
          for (const WT of IT.readings) {
            var kT;
            this.sink(WT, null !== (kT = zT) && void 0 !== kT ? kT : iT, `hid${TT.openedOrder}`)
          }
      }
      isPreferred(TT, oT) {
        const IT = TT => 1e6 * uT.p[TT.kind] + TT.openedOrder;
        for (const iT of this.controllers.values())
          if (iT !== TT && oT - iT.lastReadingMs < 500 && IT(iT) < IT(TT)) return !1;
        return !0
      }
    }
    var ET = IT(90);
    const fT = () => DeviceMotionEvent,
      CT = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, ET.isMobile)(),
      jT = () => {
        var TT;
        const oT = null === (TT = window.screen.orientation) || void 0 === TT ? void 0 : TT.angle;
        return "number" === typeof oT ? oT : "number" === typeof window.orientation ? window.orientation : 0
      };
    class JT {
      constructor(TT, oT) {
        this.sink = TT, this.onStateChanged = oT, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((TT => {
            console.warn("Could not enable the motion sensor", TT)
          }))
        }, this.onMotion = TT => {
          const oT = TT.rotationRate;
          if (!oT || null === oT.alpha && null === oT.beta && null === oT.gamma) return;
          const IT = null === this.lastEventMs ? 0 : (TT.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = TT.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: RT(oT, jT()),
            accel: null
          }, IT, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof fT().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const TT = fT().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof TT) return void this.listen();
        let oT;
        this.disarmGestureRequest();
        try {
          oT = await TT.call(DeviceMotionEvent)
        } catch (IT) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), IT
        }
        this.wanted && ("granted" === oT ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(TT) {
        this.state !== TT && (this.state = TT, this.onStateChanged())
      }
    }
    const UT = "controllerGyroStatusChanged",
      aT = {
        RC: 0,
        uC: 0
      },
      YT = TT => {
        var oT, IT;
        return "undefined" === typeof document || (null === (oT = null === (IT = document.featurePolicy) || void 0 === IT ? void 0 : IT.allowsFeature(TT)) || void 0 === oT || oT)
      };
    class QT {
      constructor() {
        this.processor = new eT, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = TT => {
          const oT = TT.gyroAiming && XT.g.hasConnectedPad();
          var IT, iT;
          oT !== this.phoneRunning && (this.phoneRunning = oT, oT ? null === (IT = this.phone) || void 0 === IT || IT.start() : null === (iT = this.phone) || void 0 === iT || iT.stop());
          if (TT.gyroAiming !== this.running) {
            var zT, kT;
            if (this.running = TT.gyroAiming, this.running) null === (zT = this.hid) || void 0 === zT || zT.start().catch((TT => {
              console.warn("Could not open motion controllers", TT)
            }));
            else null === (kT = this.hid) || void 0 === kT || kT.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          zT.h.XM(UT, this.getStatus())
        };
        const TT = (() => {
            var TT;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (TT = navigator.hid) && void 0 !== TT ? TT : null
          })(),
          oT = YT("hid");
        this.hidBlocked = null !== TT && !oT, this.hid = TT && oT ? new vT(TT, ((TT, oT, IT) => {
          this.lastHidReadingMs = performance.now(), this.feed(TT, oT, "player", IT)
        }), this.publishStatus) : null;
        const IT = YT("accelerometer") && YT("gyroscope");
        this.phoneBlocked = CT() && !IT, this.phone = CT() && IT ? new JT(((TT, oT, IT) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(TT, oT, "local", IT)
        }), this.publishStatus) : null, zT.h.subscribe(FT.g, this.syncWithSettings), XT.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, FT.j)()), this.publishStatus()
        })), this.syncWithSettings((0, FT.j)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var TT, oT, IT, iT;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (TT = null === (oT = this.hid) || void 0 === oT ? void 0 : oT.getConnectedKinds()) && void 0 !== TT ? TT : [],
          phoneMotion: null !== (IT = null === (iT = this.phone) || void 0 === iT ? void 0 : iT.getState()) && void 0 !== IT ? IT : "off",
          padConnected: XT.g.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var TT;
        await (null === (TT = this.phone) || void 0 === TT ? void 0 : TT.requestPermission())
      }
      drainLookDelta() {
        const TT = performance.now();
        TT - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = TT;
        const oT = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const IT = (0, FT.j)();
        return IT.gyroAiming && (TT => {
          let {
            activation: oT,
            isHeld: IT,
            useButton: iT,
            gyroButton: zT
          } = TT;
          return "always" === oT || IT("aiming" === oT ? iT : zT)
        })({
          activation: IT.gyroActivation,
          isHeld: TT => BT.c.isButtonHeld(TT),
          useButton: (0, WT.k)("use"),
          gyroButton: IT.gyroButton
        }) ? ((TT, oT) => ({
          RC: -TT.yawDeg * oT * DT,
          uC: -TT.pitchDeg * oT * DT
        }))(oT, IT.gyroSensitivity) : aT
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(TT, oT) {
        this.feed(TT, oT, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(TT, oT, IT, iT) {
        this.source !== iT && (this.processor.reset(), this.source = iT);
        const zT = this.processor.process(TT, oT, IT);
        this.pendingYawDeg += zT.yawDeg, this.pendingPitchDeg += zT.pitchDeg
      }
    }
    let OT = null;
    const HT = () => (OT || (OT = new QT), OT),
      nT = () => {
        const [TT, oT] = (0, iT.useState)((() => HT().getStatus()));
        return (0, kT.g)(UT, oT), (0, iT.useEffect)((() => {
          oT(HT().getStatus())
        }), []), TT
      }
  },
  8283: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => mT,
      B: () => gT,
      e: () => wT,
      f: () => BT,
      i: () => iT,
      k: () => XT,
      n: () => FT,
      p: () => ST,
      s: () => AT,
      v: () => MT,
      w: () => eT
    });
    const iT = TT => "dualShock4" === TT || "dualSense" === TT,
      zT = 1356,
      kT = 1406,
      WT = [{
        vendorId: zT,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: zT,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: zT,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: zT,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: zT,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: kT,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: kT,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: kT,
        productId: 8199,
        kind: "joyConRight"
      }],
      XT = WT.map((TT => {
        let {
          vendorId: oT,
          productId: IT
        } = TT;
        return {
          vendorId: oT,
          productId: IT
        }
      })),
      BT = (TT, oT) => {
        var IT, iT;
        return null !== (IT = null === (iT = WT.find((IT => IT.vendorId === TT && IT.productId === oT))) || void 0 === iT ? void 0 : iT.kind) && void 0 !== IT ? IT : null
      },
      FT = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      ST = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      DT = 2e3 / 32767,
      LT = 1 / 8192,
      xT = 936 / 13371,
      cT = (TT, oT, IT) => ({
        x: TT.getInt16(oT, !0) * IT,
        y: TT.getInt16(oT + 2, !0) * IT,
        z: TT.getInt16(oT + 4, !0) * IT
      }),
      KT = TT => 0 === TT.x && 0 === TT.y && 0 === TT.z,
      MT = (TT, oT, IT) => null === oT ? null : "dualShock4" === TT ? 16 * (IT - oT & 65535) / 3 / 1e6 : (IT - oT >>> 0) / 3 / 1e6,
      rT = (TT, oT) => "joyConRight" === oT ? {
        x: TT.y,
        y: -TT.z,
        z: -TT.x
      } : {
        x: -TT.y,
        y: TT.z,
        z: -TT.x
      },
      AT = (TT, oT, IT, zT) => iT(TT) ? ((TT, oT, IT, iT) => {
        const zT = ((TT, oT, IT) => "dualShock4" === TT ? 1 === oT && IT >= 63 ? 0 : 17 === oT && IT >= 65 ? 2 : null : 1 === oT && IT >= 62 ? 0 : 49 === oT && IT >= 63 ? 1 : null)(TT, oT, IT.byteLength);
        if (null === zT) return null;
        if (2976 === iT && 1 === oT && 0 !== (4 & IT.getUint8(30))) return null;
        const kT = zT + ("dualShock4" === TT ? 12 : 15),
          WT = cT(IT, kT, DT),
          XT = cT(IT, kT + 6, LT);
        return KT(WT) && KT(XT) ? null : {
          readings: [{
            gyro: WT,
            accel: XT
          }],
          dtSec: null,
          sensorClock: "dualShock4" === TT ? IT.getUint16(zT + 9, !0) : IT.getUint32(zT + 27, !0)
        }
      })(TT, oT, IT, zT) : ((TT, oT, IT) => {
        if (48 !== oT && 49 !== oT || IT.byteLength < 48) return null;
        const iT = [];
        for (let zT = 0; zT < 3; zT++) {
          const oT = cT(IT, 12 + 12 * zT, 244e-6),
            kT = cT(IT, 18 + 12 * zT, xT);
          if (KT(kT) && KT(oT)) return null;
          iT.push({
            gyro: rT(kT, TT),
            accel: rT(oT, TT)
          })
        }
        return {
          readings: iT,
          dtSec: .005,
          sensorClock: null
        }
      })(TT, oT, IT),
      gT = 1,
      hT = [0, 1, 64, 64, 0, 1, 64, 64],
      wT = (TT, oT, IT) => new Uint8Array([15 & TT, ...hT, oT, ...IT]),
      mT = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      eT = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7658: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => fT,
      h: () => QT,
      k: () => rT,
      l: () => xT.f,
      m: () => JT,
      n: () => jT,
      p: () => AT,
      t: () => UT,
      v: () => xT.m,
      z: () => xT.p,
      B: () => OT,
      C: () => xT.s,
      G: () => RT
    });
    var iT = IT(46),
      zT = IT(12),
      kT = IT(16),
      WT = IT(1403),
      XT = IT(1253),
      BT = IT(7629),
      FT = IT(7667),
      ST = IT(7612),
      DT = IT(7599),
      LT = IT(7673),
      xT = IT(1357),
      cT = IT(7605),
      KT = IT(8078),
      MT = IT(3908);
    const rT = TT => !TT.repeat && !(0, KT.e)(TT.key),
      AT = "PadHidesCursor";
    let gT = !1;
    const hT = TT => {
        TT !== gT && (gT = TT, document.documentElement.classList.toggle(AT, TT))
      },
      wT = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(TT) {
          let oT = !1,
            IT = !1;
          TT.values.forEach(((TT, iT) => {
            const zT = TT >= (this.buttonsDown[iT] ? cT.V : cT.U);
            zT && !this.buttonsDown[iT] && (oT = !0, IT = !0), this.buttonsDown[iT] = zT
          }));
          return [TT.leftStick, TT.rightStick].forEach(((TT, iT) => {
            const zT = this.stickAnchors[iT];
            Math.hypot(TT.x, TT.y) < (zT ? cT.V : .3) ? this.stickAnchors[iT] = null : (!zT || Math.hypot(TT.x - zT.x, TT.y - zT.y) >= .3) && (this.stickAnchors[iT] = {
              x: TT.x,
              y: TT.y
            }, oT = !0, IT ||= !zT)
          })), oT && (this.lastActivityMs = TT.timestampMs), this.onlyMovedOn = oT && !IT, oT
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(TT) {
          return !(TT - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((TT => TT)) || this.stickAnchors.some((TT => null !== TT)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((TT => null !== TT))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let mT = null,
      eT = !1;
    const RT = () => eT;
    let uT = null,
      vT = !1,
      ET = null;
    const fT = () => ET;
    let CT = !1;
    const jT = TT => {
        if (!wT.observe(TT)) return !1;
        if (CT && wT.wasOnlyMoveOn() && !(0, xT.f)()) return !1;
        CT = !1, eT = !1;
        const oT = !(0, xT.f)();
        return oT && (mT = TT, ET = !gT && vT && uT ? {
          ...uT
        } : null), vT = !1, (0, xT.m)("gamepad"), hT(!0), (0, LT.n)((0, BT.m)()), oT
      },
      JT = TT => !(0, xT.f)() || TT === mT,
      UT = () => {
        wT.reset()
      },
      aT = () => {
        const TT = zT.c.get("activeInputDevice"),
          oT = "gamepad" === TT ? DT.g.getActivePad() : null;
        return {
          device: TT,
          inGame: (0, XT.q)(),
          padMovesMouse: null !== oT && (0, ST.c)(oT.id)
        }
      },
      YT = TT => {
        document.pointerLockElement ? uT = null : (uT ??= {
          x: 0,
          y: 0
        }, uT.x = TT.clientX, uT.y = TT.clientY)
      },
      QT = () => {
        const TT = new MT.e,
          oT = oT => {
            TT.reset(), CT = !1, (0, xT.m)(oT)
          },
          IT = TT => {
            if (TT.isTrusted) {
              if (TT instanceof KeyboardEvent) {
                if ((0, xT.j)(TT), !rT(TT)) return;
                eT = !0
              }
              if (TT instanceof PointerEvent && "touch" === TT.pointerType) return uT = null, void oT("touch");
              TT instanceof PointerEvent && (YT(TT), vT = !0), ("pointerdown" !== TT.type || (TT => {
                let {
                  device: oT,
                  inGame: IT,
                  padMovesMouse: iT
                } = TT;
                return !("gamepad" === oT && iT && IT)
              })(aT())) && oT("keyboardMouse")
            }
          },
          iT = TT => {
            TT.isTrusted && (uT = null, oT("touch"))
          },
          WT = TT => {
            TT.isTrusted && "touch" !== TT.pointerType && !TT.relatedTarget && (uT = null)
          },
          XT = IT => {
            if (!IT.isTrusted || "touch" === IT.pointerType) return;
            YT(IT);
            const iT = IT.movementX || 0,
              kT = IT.movementY || 0;
            if (0 === iT && 0 === kT) return;
            if (vT = !0, hT(!1), "keyboardMouse" === zT.c.get("activeInputDevice")) return;
            const WT = wT.isHolding(IT.timeStamp),
              XT = aT(),
              BT = (TT => {
                let {
                  device: oT,
                  inGame: IT,
                  padMovesMouse: iT,
                  padHolding: zT
                } = TT;
                return ("gamepad" !== oT || !iT) && "keyboardMouse" !== oT && (IT || !zT)
              })({
                ...XT,
                inGame: XT.inGame && (0, FT.f)(),
                padHolding: WT
              });
            BT && TT.add(iT, kT, IT.timeStamp) && (oT("keyboardMouse"), CT = wT.isStickOffRest())
          },
          BT = TT => {
            hT("gamepad" === TT)
          },
          ST = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", IT, ST), window.addEventListener("pointerdown", IT, ST), window.addEventListener("wheel", IT, ST), window.addEventListener("touchstart", iT, ST), window.addEventListener("pointermove", XT, ST), window.addEventListener("pointerout", WT, ST);
        const DT = kT.h.subscribe("appManagerUpdated|activeInputDevice", BT);
        return BT(zT.c.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", IT, ST), window.removeEventListener("pointerdown", IT, ST), window.removeEventListener("wheel", IT, ST), window.removeEventListener("touchstart", iT, ST), window.removeEventListener("pointermove", XT, ST), window.removeEventListener("pointerout", WT, ST), uT = null, kT.h.unsubscribe(DT), hT(!1)
        }
      },
      OT = () => {
        const [TT, oT] = (0, iT.useState)(BT.m);
        return (0, WT.g)(BT.c, (() => {
          oT((0, BT.m)())
        })), (0, WT.g)(DT.d, (() => {
          oT((0, BT.m)())
        })), TT
      }
  },
  7638: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT,
      g: () => zT
    });
    const iT = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      zT = TT => iT.includes(TT)
  },
  8114: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      d: () => kT,
      g: () => BT,
      i: () => XT
    });
    var iT = IT(1403),
      zT = IT(1365);
    const kT = "controllerInventoryCursorChanged",
      WT = {
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
      XT = () => {
        var TT, oT;
        return (0, iT.i)(kT, null !== (TT = null === (oT = (0, zT.d)()) || void 0 === oT ? void 0 : oT.getInventoryCursorState()) && void 0 !== TT ? TT : WT)
      },
      BT = () => {
        var TT, oT;
        return null !== (TT = null === (oT = (0, zT.d)()) || void 0 === oT ? void 0 : oT.isPadSteppingSlots()) && void 0 !== TT && TT
      }
  },
  8105: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => LT,
      f: () => XT,
      i: () => BT,
      j: () => WT,
      n: () => kT,
      p: () => ST,
      r: () => DT
    });
    let iT = null;
    const zT = new Set,
      kT = TT => (iT = TT, () => {
        if (iT === TT) {
          iT = null;
          for (const TT of zT) TT()
        }
      }),
      WT = TT => (zT.add(TT), () => {
        zT.delete(TT)
      }),
      XT = () => iT,
      BT = () => null !== iT;
    let FT = null;
    const ST = TT => {
        FT = TT
      },
      DT = () => {
        const TT = FT;
        return FT = null, TT
      },
      LT = (TT, oT) => {
        var IT, iT;
        return null !== (IT = null !== (iT = TT.find((TT => TT.element === oT))) && void 0 !== iT ? iT : TT.find((TT => TT.element.contains(oT)))) && void 0 !== IT ? IT : null
      }
  },
  8121: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      f: () => WT
    });
    var iT = IT(46);
    const zT = new WeakMap,
      kT = TT => {
        var oT, IT;
        return null !== (oT = null === (IT = zT.get(TT)) || void 0 === IT ? void 0 : IT.current) && void 0 !== oT ? oT : null
      },
      WT = (TT, oT) => {
        const IT = (0, iT.useRef)(oT);
        IT.current = oT;
        const kT = (0, iT.useRef)(null);
        (0, iT.useEffect)((() => {
          const oT = TT.current,
            iT = kT.current;
          oT !== iT && (iT && zT.get(iT) === IT && zT.delete(iT), kT.current = oT, oT && zT.set(oT, IT))
        })), (0, iT.useEffect)((() => () => {
          const TT = kT.current;
          TT && zT.get(TT) === IT && zT.delete(TT), kT.current = null
        }), [])
      }
  },
  8254: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => XT,
      c: () => FT,
      e: () => DT,
      f: () => ST,
      i: () => BT,
      l: () => xT
    });
    var iT = IT(16),
      zT = IT(1825),
      kT = IT(1365),
      WT = IT(1357);
    const XT = TT => {
        var oT, IT;
        return (0, WT.f)() && null !== (oT = null === (IT = (0, kT.d)()) || void 0 === IT ? void 0 : IT.getGlyphForNoaAction(TT)) && void 0 !== oT ? oT : null
      },
      BT = "controllerGlyph:",
      FT = TT => {
        var oT, IT;
        return null !== (oT = null === (IT = (0, kT.d)()) || void 0 === IT ? void 0 : IT.getPadGlyphIconName(TT)) && void 0 !== oT ? oT : `${BT}xbox/${TT}`
      },
      ST = TT => TT.startsWith(BT),
      DT = TT => {
        var oT, IT;
        return ST(TT) && null !== (oT = null === (IT = (0, kT.d)()) || void 0 === IT ? void 0 : IT.getPadGlyphIconUrl(TT)) && void 0 !== oT ? oT : null
      },
      LT = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", WT.c, zT.d, zT.b],
      xT = TT => {
        const oT = LT.map((oT => iT.h.subscribe(oT, TT)));
        return () => {
          for (const TT of oT) iT.h.unsubscribe(TT)
        }
      }
  },
  8097: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      f: () => iT
    });
    const iT = "controllerOpenKeyboard",
      zT = "controllerKeyboardVisible"
  },
  7667: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => FT,
      f: () => ST,
      h: () => BT,
      l: () => XT
    });
    var iT = IT(12),
      zT = IT(1585),
      kT = IT(1669);
    const WT = new Map,
      XT = (TT, oT) => (WT.has(TT) && console.warn(`Gameplay blocker "${TT}" registered twice; the newer one replaces it.`), WT.set(TT, oT), () => {
        WT.get(TT) === oT && WT.delete(TT)
      }),
      BT = () => (0, kT.c)(document.activeElement),
      FT = function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [oT, IT] of WT)
          if (!TT.includes(oT) && IT()) return oT;
        return null
      },
      ST = function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === iT.c.get("gameState") && (!(0, zT.t)() && (!BT() && null === FT(TT)))
      }
  },
  7605: (TT, oT, IT) => {
    IT.d(oT, {
      $: () => ET,
      B: () => eT,
      C: () => kT,
      E: () => DT,
      I: () => gT,
      J: () => CT,
      L: () => hT,
      O: () => rT,
      P: () => MT,
      Q: () => FT,
      U: () => LT,
      V: () => xT,
      W: () => zT,
      X: () => iT,
      _: () => mT,
      cb: () => jT,
      db: () => wT,
      e: () => JT,
      h: () => fT,
      k: () => ST,
      n: () => BT,
      q: () => XT,
      u: () => RT,
      y: () => AT
    });
    const iT = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      zT = iT.length,
      kT = function() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(zT).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: TT
        }
      },
      WT = Object.fromEntries(iT.map(((TT, oT) => [TT, oT]))),
      XT = TT => WT[TT],
      BT = function(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const iT = Math.hypot(TT.x, TT.y);
        if (iT <= oT) return {
          x: 0,
          y: 0
        };
        const zT = Math.min(1, (iT - oT) / Math.max(1e-4, IT - oT));
        return {
          x: TT.x / iT * zT,
          y: TT.y / iT * zT
        }
      },
      FT = ["exponential", "linear", "boost"],
      ST = (TT, oT) => {
        const IT = Math.hypot(TT.x, TT.y);
        if (0 === IT) return {
          x: 0,
          y: 0
        };
        const iT = ((TT, oT) => {
          const IT = Math.max(0, Math.min(1, TT));
          return "linear" === oT ? IT : IT * IT
        })(IT, oT);
        return {
          x: TT.x / IT * iT,
          y: TT.y / IT * iT
        }
      },
      DT = .5,
      LT = .3,
      xT = .2,
      cT = XT("LT"),
      KT = XT("RT"),
      MT = TT => TT === cT || TT === KT,
      rT = (TT, oT) => {
        const IT = XT(oT);
        return MT(IT) ? TT[IT] > .35 : TT[IT] >= DT
      },
      AT = (TT, oT) => TT.map(((TT, IT) => MT(IT) ? oT[IT] ? TT > .35 : TT >= .55 : TT >= DT)),
      gT = ["Up", "Down", "Left", "Right"],
      hT = TT => gT.includes(TT),
      wT = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(TT.x, TT.y) < oT ? null : Math.abs(TT.x) > Math.abs(TT.y) ? TT.x > 0 ? "Right" : "Left" : TT.y > 0 ? "Down" : "Up"
      },
      mT = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      eT = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      RT = ["default", "slow", "off"],
      uT = 800,
      vT = 250,
      ET = (TT, oT) => "off" === oT ? null : "slow" === oT ? {
        initialDelayMs: Math.max(TT.initialDelayMs, uT),
        intervalMs: Math.max(TT.intervalMs, vT)
      } : TT;
    class fT {
      constructor(TT) {
        this.readTiming = TT, this.kS = !1, this.timing = null, this.nextFireMs = 0
      }
      update(TT, oT) {
        return TT ? this.kS ? !!(this.timing && oT >= this.nextFireMs) && (this.nextFireMs = oT + this.timing.intervalMs, !0) : (this.kS = !0, this.timing = this.readTiming(), this.nextFireMs = oT + (null !== (IT = null === (iT = this.timing) || void 0 === iT ? void 0 : iT.initialDelayMs) && void 0 !== IT ? IT : 0), !0) : (this.kS = !1, !1);
        var IT, iT
      }
      reset() {
        this.kS = !1
      }
    }
    const CT = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      jT = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class JT {
      constructor(TT) {
        this.timer = TT, this.direction = null
      }
      update(TT, oT) {
        return TT !== this.direction && (this.timer.reset(), this.direction = TT), this.timer.update(null !== TT, oT) ? TT : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  8123: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      i: () => kT
    });
    let iT = -1 / 0;
    const zT = () => {
        iT = performance.now()
      },
      kT = TT => performance.now() - iT < TT
  },
  8080: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT,
      g: () => kT
    });
    var iT = IT(7629),
      zT = IT(7605);
    const kT = TT => (0, zT.$)(TT, (0, iT.j)().buttonRepeat),
      WT = TT => new zT.h((() => kT(TT)))
  },
  7647: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => BT,
      f: () => kT,
      g: () => XT
    });
    var iT = IT(16),
      zT = IT(7629);
    const kT = (TT, oT) => "OpenShop" === TT ? "shop" === oT : "OpenLobbyLeaderboard" !== TT || "leaderboard" === oT;
    let WT = !1;
    const XT = TT => {
        TT !== WT && (WT = TT, iT.h.XM(zT.c, (0, zT.j)()))
      },
      BT = () => ((TT, oT) => "shop" === TT && oT ? "shop" : "leaderboard")((0, zT.j)().leaderboardButton, WT)
  },
  7643: (TT, oT, IT) => {
    IT.d(oT, {
      D: () => XT,
      E: () => wT,
      G: () => LT,
      H: () => xT,
      K: () => DT,
      L: () => hT,
      N: () => FT,
      O: () => rT,
      Q: () => vT,
      R: () => gT,
      T: () => KT,
      X: () => MT,
      _: () => cT,
      cb: () => AT,
      db: () => jT,
      e: () => aT,
      f: () => QT,
      gb: () => kT,
      ib: () => mT,
      j: () => ET,
      l: () => WT,
      m: () => uT,
      mb: () => YT,
      pb: () => RT,
      q: () => eT,
      s: () => JT,
      t: () => UT,
      x: () => ST,
      z: () => BT
    });
    var iT = IT(7627),
      zT = IT(7605);
    const kT = {
        min: 25,
        max: 500,
        step: 5
      },
      WT = {
        min: 25,
        max: 100,
        step: 5
      },
      XT = {
        min: 0,
        max: .4,
        step: .01
      },
      BT = {
        min: 25,
        max: 300,
        step: 5
      },
      FT = {
        min: .5,
        max: 6,
        step: .1
      },
      ST = (TT, oT) => {
        if (!Number.isFinite(TT)) return oT.min;
        const IT = oT.min + Math.round((TT - oT.min) / oT.step) * oT.step,
          iT = Math.min(oT.max, Math.max(oT.min, IT));
        return Math.round(1e3 * iT) / 1e3
      },
      DT = TT => `${Math.round(TT)}%`,
      LT = TT => DT(100 * TT),
      xT = TT => `${TT.toFixed(1)}\xd7`,
      cT = [{
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
      KT = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      MT = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      rT = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      AT = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      gT = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      hT = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      wT = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      mT = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      eT = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      RT = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      uT = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      vT = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      ET = {
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
      fT = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      CT = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      jT = iT.d.map((TT => {
        let {
          group: oT,
          actions: IT
        } = TT;
        const iT = IT.map((TT => ({
          kind: "action",
          action: TT
        })));
        return {
          titleKey: fT[oT],
          rows: "gameplay" === oT ? [...CT, ...iT] : iT
        }
      })),
      JT = zT.X.filter((TT => "Home" !== TT)),
      UT = 1e4;
    class aT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = TT, this.openButton = oT, this.accepts = IT, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(TT, oT) {
        var IT;
        this.updateIgnored(TT, oT);
        const iT = oT - (null !== (IT = this.startMs) && void 0 !== IT ? IT : oT) >= 250;
        for (const zT of JT)
          if (zT !== this.cancelButton && iT && !this.ignoredUntilMs.has(zT) && TT.wasPressed(zT) && this.accepts(zT)) return {
            kind: "bind",
            button: zT
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (TT.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = oT
        }
        return null === this.cancelDownAtMs ? null : TT.isHeld(this.cancelButton) && oT - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : TT.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(TT) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (TT - this.cancelDownAtMs) / 700)
      }
      updateIgnored(TT, oT) {
        if (null === this.startMs) {
          this.startMs = oT;
          for (const oT of JT) TT.isDown(oT) && this.ignoredUntilMs.set(oT, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, oT + 250)
        }
        for (const [IT, iT] of this.ignoredUntilMs) {
          const zT = TT.isDown(IT);
          iT === 1 / 0 ? zT || IT !== this.openButton ? zT || this.ignoredUntilMs.delete(IT) : this.ignoredUntilMs.set(IT, oT + 250) : oT >= iT ? this.ignoredUntilMs.delete(IT) : zT && this.ignoredUntilMs.set(IT, 1 / 0)
        }
      }
    }
    const YT = 6e3;
    class QT {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(TT, oT) {
        let {
          pressed: IT,
          kS: iT
        } = TT;
        if (IT) {
          const TT = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== TT && oT - TT < 1500 ? [...this.pressesAtMs, oT] : [oT], this.pressesAtMs.length >= 3) return 1
        }
        return iT ? (this.downAtMs ??= oT, Math.min(1, (oT - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  8139: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      f: () => zT
    });
    let iT = null;
    const zT = function(TT) {
        const oT = {
          cycle: TT,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return iT = oT, () => {
          iT === oT && (iT = null)
        }
      },
      kT = () => {
        var TT;
        return null !== (TT = iT) && void 0 !== TT && TT.canCycle() ? iT.cycle : null
      }
  },
  4514: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      d: () => WT
    });
    var iT = IT(46);
    const zT = new WeakMap,
      kT = TT => {
        var oT;
        const IT = TT.closest("[data-pad-slider]");
        return IT && null !== (oT = zT.get(IT)) && void 0 !== oT ? oT : null
      },
      WT = (TT, oT) => {
        const IT = (0, iT.useRef)(oT);
        IT.current = oT, (0, iT.useEffect)((() => {
          if (TT.current) return ((TT, oT) => (zT.set(TT, oT), () => {
            zT.get(TT) === oT && zT.delete(TT)
          }))(TT.current, {
            adjust: TT => {
              IT.current.adjust(TT)
            },
            setFraction: TT => {
              IT.current.setFraction(TT)
            },
            endDrag: () => {
              IT.current.endDrag()
            }
          })
        }), [TT])
      }
  },
  8238: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      f: () => WT,
      h: () => kT,
      k: () => iT,
      n: () => XT,
      p: () => FT,
      r: () => ST
    });
    const iT = "controllerActionWheelOpen",
      zT = "controllerActionWheelAim",
      kT = "controllerActionWheelCommit",
      WT = "controllerActionWheelClose",
      XT = "controllerActionWheelPick";
    let BT = !1;
    const FT = () => BT,
      ST = TT => {
        BT = TT
      }
  },
  8231: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      h: () => zT
    });
    let iT = 0;
    const zT = () => {
        iT++
      },
      kT = () => iT
  },
  8135: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => BT,
      e: () => zT,
      i: () => WT,
      m: () => kT,
      n: () => iT,
      r: () => FT
    });
    const iT = "controllerQuickChatWheelOpen",
      zT = "controllerQuickChatWheelAim",
      kT = "controllerQuickChatWheelCommit",
      WT = "controllerQuickChatWheelClose";
    let XT = !1;
    const BT = () => XT,
      FT = TT => {
        XT = TT
      }
  },
  8145: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      i: () => zT
    });
    var iT = IT(16);
    const zT = "localBlockBroken";

    function kT() {
      return {
        onPlayerChangeBlock(TT, oT, IT, kT, WT, XT) {
          "Air" === XT && iT.h.XM(zT)
        }
      }
    }
  },
  8193: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(8201),
      zT = IT(618),
      kT = IT(139);

    function WT(TT) {
      var oT, IT;
      if ((0, zT.K)(TT)) return !0;
      const WT = null !== (oT = null === (IT = kT.k[kT.p]) || void 0 === IT ? void 0 : IT.adConfig.showRewardedAds) && void 0 !== oT && oT;
      for (const zT in TT) {
        const oT = TT[zT];
        if (null !== oT && void 0 !== oT && oT.items)
          for (const TT in oT.items)
            if ((0, iT.k)(oT.items[TT], WT)) return !1
      }
      return !0
    }
  },
  8214: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      i: () => iT
    });
    const iT = 100;

    function zT(TT) {
      let {
        translationKeys: oT = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return TT.map((TT => {
        var IT;
        return null !== (IT = function(TT, oT) {
          if ("string" === typeof TT) return TT;
          const IT = "str" in TT ? TT.str : TT;
          if ("string" === typeof IT) return IT;
          if ("entityName" in IT) return IT.entityName;
          if (oT && "translationKey" in IT) return `{${IT.translationKey}${void 0===IT.params?"":` ${JSON.stringify(IT.params)}`}}`;
          return null
        }(TT, oT)) && void 0 !== IT ? IT : " "
      })).join("")
    }
  },
  8248: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => ST,
      h: () => XT,
      j: () => BT
    });
    var iT = IT(2026),
      zT = IT(1214),
      kT = IT(2029);
    const WT = ",";

    function XT(TT) {
      if (!TT) return [];
      const oT = new Set,
        IT = [];
      for (const iT of TT.split(WT)) {
        const TT = iT.trim();
        if ((0, kT.h)(TT) && !oT.has(TT) && (oT.add(TT), IT.push(TT), IT.length >= zT.k)) break
      }
      return IT
    }

    function BT(TT) {
      const oT = new Set,
        IT = [];
      for (const iT of TT)
        if ((0, kT.h)(iT) && !oT.has(iT) && (oT.add(iT), IT.push(iT), IT.length >= zT.k)) break;
      return IT.join(WT)
    }

    function FT() {
      return BT(kT.d)
    }

    function ST(TT) {
      var oT;
      return "emote" === TT ? FT() : null !== (oT = DT[TT][0]) && void 0 !== oT ? oT : LT[TT]
    }
    const DT = zT.v.reduce(((TT, oT) => {
        const IT = [];
        for (const kT in iT.c[oT]) {
          var zT;
          "default" === (null === (zT = (0, iT.g)(oT, kT)) || void 0 === zT ? void 0 : zT.cosmeticPack) && IT.push(kT)
        }
        return TT[oT] = IT, TT
      }), {}),
      LT = zT.v.reduce(((TT, oT) => (TT[oT] = Object.keys(iT.c[oT])[0], TT)), {})
  },
  8244: () => {},
  7676: (TT, oT, IT) => {
    var iT = {
      "./nintendo/A.svg": 7678,
      "./nintendo/B.svg": 7683,
      "./nintendo/Down.svg": 7685,
      "./nintendo/Home.svg": 7691,
      "./nintendo/LB.svg": 7697,
      "./nintendo/LS.svg": 7700,
      "./nintendo/LT.svg": 7706,
      "./nintendo/Left.svg": 7710,
      "./nintendo/LeftStick.svg": 7716,
      "./nintendo/Menu.svg": 7721,
      "./nintendo/RB.svg": 7730,
      "./nintendo/RS.svg": 7736,
      "./nintendo/RT.svg": 7743,
      "./nintendo/Right.svg": 7750,
      "./nintendo/RightStick.svg": 7753,
      "./nintendo/Up.svg": 7755,
      "./nintendo/View.svg": 7762,
      "./nintendo/X.svg": 7767,
      "./nintendo/Y.svg": 7775,
      "./playstation/A.svg": 7782,
      "./playstation/B.svg": 7785,
      "./playstation/Down.svg": 7790,
      "./playstation/Home.svg": 7793,
      "./playstation/LB.svg": 7797,
      "./playstation/LS.svg": 7800,
      "./playstation/LT.svg": 7808,
      "./playstation/Left.svg": 7816,
      "./playstation/LeftStick.svg": 7825,
      "./playstation/Menu.svg": 7829,
      "./playstation/RB.svg": 7832,
      "./playstation/RS.svg": 7836,
      "./playstation/RT.svg": 7840,
      "./playstation/Right.svg": 7848,
      "./playstation/RightStick.svg": 7856,
      "./playstation/Up.svg": 7863,
      "./playstation/View.svg": 7866,
      "./playstation/X.svg": 7871,
      "./playstation/Y.svg": 7878,
      "./steamdeck/A.svg": 7885,
      "./steamdeck/B.svg": 7889,
      "./steamdeck/Down.svg": 7893,
      "./steamdeck/Home.svg": 7899,
      "./steamdeck/LB.svg": 7907,
      "./steamdeck/LS.svg": 7911,
      "./steamdeck/LT.svg": 7914,
      "./steamdeck/Left.svg": 7920,
      "./steamdeck/LeftStick.svg": 7924,
      "./steamdeck/Menu.svg": 7930,
      "./steamdeck/RB.svg": 7937,
      "./steamdeck/RS.svg": 7941,
      "./steamdeck/RT.svg": 7946,
      "./steamdeck/Right.svg": 7952,
      "./steamdeck/RightStick.svg": 7957,
      "./steamdeck/Up.svg": 7966,
      "./steamdeck/View.svg": 7970,
      "./steamdeck/X.svg": 7977,
      "./steamdeck/Y.svg": 7985,
      "./xbox/A.svg": 7988,
      "./xbox/B.svg": 7992,
      "./xbox/Down.svg": 8001,
      "./xbox/Home.svg": 8005,
      "./xbox/LB.svg": 8008,
      "./xbox/LS.svg": 8017,
      "./xbox/LT.svg": 8024,
      "./xbox/Left.svg": 8027,
      "./xbox/LeftStick.svg": 8029,
      "./xbox/Menu.svg": 8038,
      "./xbox/RB.svg": 8040,
      "./xbox/RS.svg": 8043,
      "./xbox/RT.svg": 8045,
      "./xbox/Right.svg": 8053,
      "./xbox/RightStick.svg": 8058,
      "./xbox/Up.svg": 8062,
      "./xbox/View.svg": 8066,
      "./xbox/X.svg": 8068,
      "./xbox/Y.svg": 8071
    };

    function zT(TT) {
      var oT = kT(TT);
      return IT(oT)
    }

    function kT(TT) {
      if (!IT.o(iT, TT)) {
        var oT = new Error("Cannot find module '" + TT + "'");
        throw oT.code = "MODULE_NOT_FOUND", oT
      }
      return iT[TT]
    }
    zT.keys = function() {
      return Object.keys(iT)
    }, zT.resolve = kT, TT.exports = zT, zT.id = 7676
  },
  7678: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7683: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7685: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7691: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7697: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7700: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7706: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7710: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7716: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7721: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7730: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7736: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7743: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7750: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7753: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7755: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7762: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  7767: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  7775: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  7782: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  7785: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  7790: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  7793: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7797: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  7800: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  7808: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  7816: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  7825: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7829: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  7832: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  7836: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  7840: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  7848: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  7856: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7863: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  7866: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  7871: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  7878: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  7885: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7889: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7893: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7899: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  7907: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  7911: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7914: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  7920: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7924: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7930: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  7937: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  7941: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7946: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RT.a0523211130959598bed.svg"
  },
  7952: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7957: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7966: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7970: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  7977: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7985: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  7988: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7992: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  8001: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  8005: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  8008: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  8017: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  8024: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  8027: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  8029: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  8038: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  8040: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  8043: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  8045: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  8053: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  8058: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  8062: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  8066: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  8068: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  8071: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);